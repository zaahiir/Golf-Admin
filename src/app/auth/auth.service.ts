import { Injectable, PLATFORM_ID, Inject, Injector } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

export interface LoginResponse {
  access: string;
  refresh: string;
  user_type: string;
  user_id: number;
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Use the production URL
  // private apiUrl = 'http://localhost/apis/';
  private apiUrl = 'https://mastergolfclub.com/apis/';
  private isBrowser: boolean;

  // Add authentication state subject to track login status
  private authenticationState = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.authenticationState.asObservable();

  // In the constructor:
  constructor(
    private http: HttpClient,
    private router: Router,
    private injector: Injector
  ) {
    const platformId = this.injector.get(PLATFORM_ID);
    this.isBrowser = isPlatformBrowser(platformId);

    // Initialize authentication state on service creation
    this.initializeAuthState();
  }

  private initializeAuthState(): void {
    const token = this.getStorageItem('access_token');
    const userType = this.getUserType();
    const isAuth = !!token && userType === 'superuser';
    this.authenticationState.next(isAuth);
  }

  // Admin login (superuser only)
  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}login/`, { username, password })
      .pipe(
        tap((response: LoginResponse) => {
          // Store tokens and user information in local storage
          this.setStorageItem('access_token', response.access);
          this.setStorageItem('refresh_token', response.refresh);
          this.setStorageItem('user_type', response.user_type);
          this.setStorageItem('user_id', response.user_id.toString());
          this.setStorageItem('username', response.username);
          this.setStorageItem('email', response.email);

          // Update authentication state
          this.authenticationState.next(true);
        }),
        catchError((error) => this.handleError(error))
      );
  }

  // Admin logout - UPDATED VERSION
  logout(): Observable<any> {
    const refreshToken = this.getStorageItem('refresh_token');

    if (!refreshToken) {
      // No refresh token, just clear local data
      this.performCompleteLogout();
      return throwError(() => new Error('No refresh token available'));
    }

    // Create request with minimal headers to avoid CORS issues
    const logoutRequest = this.http.post(`${this.apiUrl}logout/`,
      { refresh_token: refreshToken },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    return logoutRequest.pipe(
      tap(() => {
        // Clear all localStorage items after successful logout
        this.performCompleteLogout();
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Logout API error:', error);
        // Even if the server request fails, clear user data
        this.performCompleteLogout();

        // Don't throw the error, consider logout successful
        // since we've cleared the local data
        return throwError(() => error);
      })
    );
  }

  // Complete logout process for admin - ENHANCED VERSION
  performLogout(): void {
    const refreshToken = this.getStorageItem('refresh_token');

    if (refreshToken) {
      // Call backend logout endpoint
      this.logout().subscribe({
        next: (response) => {
          console.log('Admin logout successful');
        },
        error: (error) => {
          console.error('Admin logout error:', error);
          // Even if backend logout fails, we've already cleared local tokens
          // in the logout() method's error handler
        }
      });
    } else {
      // No refresh token, just clear and redirect
      this.performCompleteLogout();
    }
  }

  // NEW METHOD: Complete logout process
  private performCompleteLogout(): void {
    // Clear all user data
    this.clearAllUserData();

    // Update authentication state
    this.authenticationState.next(false);

    // Clear browser history to prevent back button access
    if (this.isBrowser) {
      // Replace current history entry with login page
      window.history.replaceState(null, '', '/login');

      // Clear any cached data
      if ('caches' in window) {
        caches.keys().then(names => {
          names.forEach(name => {
            caches.delete(name);
          });
        });
      }
    }

    // Navigate to login and replace current route
    this.router.navigate(['/login'], { replaceUrl: true });
  }

  // Helper method to clear all user data
  private clearAllUserData(): void {
    this.removeStorageItem('access_token');
    this.removeStorageItem('refresh_token');
    this.removeStorageItem('user_type');
    this.removeStorageItem('user_id');
    this.removeStorageItem('username');
    this.removeStorageItem('email');
    this.removeSessionItem('session_type');

    // Clear any other session data
    if (this.isBrowser) {
      sessionStorage.clear();
    }
  }

  refreshToken(): Observable<any> {
    const refreshToken = this.getStorageItem('refresh_token');
    return this.http.post(`${this.apiUrl}token/refresh/`, { refresh: refreshToken })
      .pipe(
        tap((response: any) => {
          this.setStorageItem('access_token', response.access);
          this.authenticationState.next(true);
        }),
        catchError((error) => {
          // If refresh fails, logout user
          this.performCompleteLogout();
          return this.handleError(error);
        })
      );
  }

  isAuthenticated(): boolean {
    const token = this.getStorageItem('access_token');
    const userType = this.getUserType();
    const isAuth = !!token && userType === 'superuser';

    // Update subject if state changed
    if (this.authenticationState.value !== isAuth) {
      this.authenticationState.next(isAuth);
    }

    return isAuth;
  }

  // Check if user is admin/superuser
  isAdmin(): boolean {
    return this.getUserType() === 'superuser';
  }

  // Add this method to fix the errors
  isLoggedIn(): boolean {
    return this.isAuthenticated();
  }

  getUserType(): string | null {
    return this.getStorageItem('user_type');
  }

  getUserId(): number | null {
    const userId = this.getStorageItem('user_id');
    return userId ? parseInt(userId, 10) : null;
  }

  getUsername(): string | null {
    return this.getStorageItem('username');
  }

  getEmail(): string | null {
    return this.getStorageItem('email');
  }

  getAccessToken(): string | null {
    return this.getStorageItem('access_token');
  }

  getRefreshToken(): string | null {
    return this.getStorageItem('refresh_token');
  }

  // NEW METHOD: Force logout (for use in guards and interceptors)
  forceLogout(): void {
    this.performCompleteLogout();
  }

  // Helper methods to safely access storage
  private getStorageItem(key: string): string | null {
    if (this.isBrowser) {
      return localStorage.getItem(key);
    }
    return null;
  }

  private setStorageItem(key: string, value: string): void {
    if (this.isBrowser) {
      localStorage.setItem(key, value);
    }
  }

  private removeStorageItem(key: string): void {
    if (this.isBrowser) {
      localStorage.removeItem(key);
    }
  }

  private removeSessionItem(key: string): void {
    if (this.isBrowser) {
      sessionStorage.removeItem(key);
    }
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      if (error.error?.detail) {
        errorMessage = error.error.detail;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
    }

    console.error(errorMessage);
    return throwError(() => error);
  }
}
