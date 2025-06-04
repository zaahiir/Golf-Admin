import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginResponse {
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
  private apiUrl = 'http://localhost/apis/login/';
  // private apiUrl = 'https://mastergolfclub.com/apis/login/';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, { username, password });
  }

  logout(): Observable<any> {
    const refreshToken = localStorage.getItem('refresh_token');
    return this.http.post('http://localhost:8000/apis/logout/', {
      refresh_token: refreshToken
    });
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('access_token');
  }

  getUserType(): string | null {
    return localStorage.getItem('user_type');
  }
}
