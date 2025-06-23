import{a as ce}from"./chunk-6F2IHE35.js";import"./chunk-AUROHWJP.js";import{La as ee,ta as Z}from"./chunk-V6TNJ3ZT.js";import{a as me}from"./chunk-DVM5LER3.js";import{Ca as Q,Da as X,Ga as te,Ia as ie,Ja as ne,K as O,L as G,La as re,Na as oe,Oa as ae,R as $,S as j,ab as se,ba as z,bb as le,c as V,d as W,ga as Y,h as B,ja as H,ka as U,pa as q,qa as J,ra as K,v as R}from"./chunk-45BFYFPT.js";import{$a as E,Jb as n,Kb as r,Lb as S,Pb as L,Tb as h,Ub as m,cb as a,db as y,dc as e,ec as g,fc as I,ia as b,ic as N,jc as F,kc as A,mc as k,nc as M,oc as D,ta as _,tb as p,ua as f,va as P,wa as T,yb as w,zb as c}from"./chunk-IO45J2MB.js";import{f as de,k as v}from"./chunk-AAPNLDO3.js";var x=de(me());var ue=()=>["/courses/add"],pe=s=>["/courses/update",s];function ge(s,d){s&1&&(n(0,"div",11),e(1,`
          `),n(2,"div",12),e(3,`
            `),n(4,"span",13),e(5,"Loading..."),r(),e(6,`
          `),r(),e(7,`
        `),r())}function xe(s,d){if(s&1&&(n(0,"a",23),e(1),r()),s&2){let o=m().$implicit,t=m(2);c("href",t.getCourseWebsite(o),E),a(),I(`
                  `,t.getCourseWebsite(o),`
                `)}}function he(s,d){s&1&&(n(0,"span"),e(1,"N/A"),r())}function Ce(s,d){if(s&1){let o=L();n(0,"tr"),e(1,`
              `),n(2,"td"),e(3),r(),e(4,`
              `),n(5,"td"),e(6),r(),e(7,`
              `),n(8,"td"),e(9),r(),e(10,`
              `),n(11,"td"),e(12),r(),e(13,`
              `),n(14,"td"),e(15,`
                `),p(16,xe,2,2,"a",17),e(17,`
                `),p(18,he,2,0,"span",18),e(19,`
              `),r(),e(20,`
              `),n(21,"td"),e(22),r(),e(23,`
              `),n(24,"td"),e(25),r(),e(26,`
              `),n(27,"td"),e(28,`
                `),n(29,"a",19),e(30,`
                  `),P(),S(31,"svg",20),e(32,`
                `),r(),e(33,`
                `),T(),n(34,"a",21),h("click",function(){let i=_(o).$implicit,l=m(2);return f(l.deleteCourse(i.id))}),e(35,`
                  `),P(),S(36,"svg",22),e(37,`
                `),r(),e(38,`
              `),r(),e(39,`
            `),r()}if(s&2){let o=d.$implicit,t=d.index,i=m(2);a(3),g((i.currentPage-1)*i.itemsPerPage+t+1),a(3),g(i.getCourseName(o)),a(3),g(i.getTownFromAddress(o)),a(3),g(i.getCoursePhone(o)),a(4),c("ngIf",i.getCourseWebsite(o)!=="N/A"),a(2),c("ngIf",i.getCourseWebsite(o)==="N/A"),a(4),g(i.getCourseLocation(o)),a(3),g(i.getCourseTiming(o)),a(4),c("routerLink",D(14,pe,o.id))("cTooltip",i.tooltipEditText),a(2),c("cIcon",i.icons.cilPen),a(3),c("disabled",i.isLoading)("cTooltip",i.tooltipDeleteText),a(2),c("cIcon",i.icons.cilTrash)}}function _e(s,d){if(s&1&&(n(0,"table",14),e(1,`
          `),n(2,"thead"),e(3,`
            `),n(4,"tr"),e(5,`
              `),n(6,"th",15),e(7,"S.No"),r(),e(8,`
              `),n(9,"th",15),e(10,"Course Name"),r(),e(11,`
              `),n(12,"th",15),e(13,"Town"),r(),e(14,`
              `),n(15,"th",15),e(16,"Phone"),r(),e(17,`
              `),n(18,"th",15),e(19,"Website"),r(),e(20,`
              `),n(21,"th",15),e(22,"Location"),r(),e(23,`
              `),n(24,"th",15),e(25,"Timing"),r(),e(26,`
              `),n(27,"th",15),e(28,"Action"),r(),e(29,`
            `),r(),e(30,`
          `),r(),e(31,`
          `),n(32,"tbody"),e(33,`
            `),p(34,Ce,40,16,"tr",16),e(35,`
          `),r(),e(36,`
        `),r()),s&2){let o=m();c("hover",!0)("striped",!0)("bordered",!0),a(34),c("ngForOf",o.paginatedCourseList)}}function fe(s,d){s&1&&(n(0,"div",24),e(1,`
          `),n(2,"p"),e(3,"No courses found."),r(),e(4,`
        `),r())}function Le(s,d){if(s&1){let o=L();n(0,"c-page-item",29),e(1,`
            `),n(2,"a",27),h("click",function(){let i=_(o).$implicit,l=m(2);return f(l.changePage(i))}),e(3),r(),e(4,`
          `),r()}if(s&2){let o=d.$implicit,t=m(2);c("active",t.currentPage===o),a(3),g(o)}}function ve(s,d){if(s&1){let o=L();n(0,"c-pagination",25),e(1,`
          `),n(2,"c-page-item",26),e(3,`
            `),n(4,"a",27),h("click",function(){_(o);let i=m();return f(i.previousPage())}),e(5,"Previous"),r(),e(6,`
          `),r(),e(7,`
          `),p(8,Le,5,2,"c-page-item",28),e(9,`
          `),n(10,"c-page-item",26),e(11,`
            `),n(12,"a",27),h("click",function(){_(o);let i=m();return f(i.nextPage())}),e(13,"Next"),r(),e(14,`
          `),r(),e(15,`
        `),r()}if(s&2){let o=m();a(2),c("disabled",o.currentPage===1),a(2),w("aria-disabled",o.currentPage===1),a(4),c("ngForOf",o.pageRange),a(2),c("disabled",o.currentPage===o.totalPages),a(2),w("aria-disabled",o.currentPage===o.totalPages)}}var ke=(()=>{let d=class d{constructor(t){this.courseService=t,this.icons={cilPen:Z,cilTrash:ee},this.tooltipEditText="Edit",this.tooltipDeleteText="Delete",this.courseList=[],this.pageRange=[],this.currentPage=1,this.itemsPerPage=10,this.isLoading=!1,this.searchTerm=""}ngOnInit(){this.loadCourseList()}updatePageRange(){let t=this.totalPages,i=Math.max(1,this.currentPage-1);Math.min(t,i+2)===t&&(i=Math.max(1,t-2)),this.pageRange=Array.from({length:Math.min(3,t)},(u,C)=>i+C)}changePage(t){t>=1&&t<=this.totalPages&&!this.isLoading&&(this.currentPage=t,this.updatePageRange())}nextPage(){this.currentPage<this.totalPages&&!this.isLoading&&this.changePage(this.currentPage+1)}previousPage(){this.currentPage>1&&!this.isLoading&&this.changePage(this.currentPage-1)}loadCourseList(){return v(this,null,function*(){if(!this.isLoading){this.isLoading=!0;try{let t=yield this.courseService.listCourse("0");t.data.code===1?(this.courseList=t.data.data,this.updatePageRange()):yield x.default.fire("Error","Failed to load Course list","error")}catch(t){console.error("Error loading Course list:",t),yield x.default.fire("Error","An error occurred while loading the Course list","error")}finally{this.isLoading=!1}}})}search(){this.currentPage=1,this.updatePageRange()}getCourseName(t){return t.name||t.courseName||"N/A"}getCourseAddress(t){return t.address||t.courseAddress||"N/A"}getCoursePhone(t){return t.phone||t.coursePhoneNumber||"N/A"}getCourseWebsite(t){return t.website||t.courseWebsite||"N/A"}getCourseLocation(t){return t.location||t.courseLocation||"N/A"}getCourseTiming(t){return t.timing||t.courseOpenFrom||"N/A"}getTownFromAddress(t){let i=this.getCourseAddress(t);return i&&i!=="N/A"?i.split(",")[0].trim():"N/A"}get paginatedCourseList(){let t=this.courseList;if(this.searchTerm){let l=this.searchTerm.toLowerCase();t=this.courseList.filter(u=>this.getCourseName(u).toLowerCase().includes(l)||this.getTownFromAddress(u).toLowerCase().includes(l)||this.getCoursePhone(u).toLowerCase().includes(l)||this.getCourseWebsite(u).toLowerCase().includes(l)||this.getCourseLocation(u).toLowerCase().includes(l))}let i=(this.currentPage-1)*this.itemsPerPage;return t.slice(i,i+this.itemsPerPage)}get totalPages(){let t=this.searchTerm?this.courseList.filter(i=>this.getCourseName(i).toLowerCase().includes(this.searchTerm.toLowerCase())||this.getTownFromAddress(i).toLowerCase().includes(this.searchTerm.toLowerCase())||this.getCoursePhone(i).toLowerCase().includes(this.searchTerm.toLowerCase())||this.getCourseWebsite(i).toLowerCase().includes(this.searchTerm.toLowerCase())||this.getCourseLocation(i).toLowerCase().includes(this.searchTerm.toLowerCase())).length:this.courseList.length;return Math.ceil(t/this.itemsPerPage)}deleteCourse(t){return v(this,null,function*(){if(this.isLoading)return;if((yield x.default.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"})).isConfirmed){this.isLoading=!0;try{(yield this.courseService.deleteCourse(t.toString())).data.code===1?(this.courseList=this.courseList.filter(u=>u.id!==t),yield x.default.fire("Deleted!","Course has been deleted.","success"),yield this.loadCourseList()):yield x.default.fire("Error","Failed to delete Course","error")}catch(l){console.error("Error deleting Course:",l),yield x.default.fire("Error","An error occurred while deleting the Course","error")}finally{this.isLoading=!1}}})}};d.\u0275fac=function(i){return new(i||d)(y(ce))},d.\u0275cmp=b({type:d,selectors:[["app-list-courses"]],standalone:!0,features:[k],decls:31,vars:7,consts:[["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3"],[1,"col-auto"],["cButton","","color","primary","role","button",3,"routerLink"],["md","3",1,"mb-4","flex","justify-content-md-end"],["cFormControl","","id","searchInput","type","search","placeholder","Search courses...",3,"input","ngModelChange","ngModel"],["class","text-center py-4",4,"ngIf"],["cTable","",3,"hover","striped","bordered",4,"ngIf"],["class","text-center py-4 text-muted",4,"ngIf"],["aria-label","Page navigation","class","mt-3",4,"ngIf"],[1,"text-center","py-4"],["role","status",1,"spinner-border"],[1,"visually-hidden"],["cTable","",3,"hover","striped","bordered"],["scope","col"],[4,"ngFor","ngForOf"],["target","_blank","rel","noopener noreferrer",3,"href",4,"ngIf"],[4,"ngIf"],["cButton","","color","btn-transparent","role","button","cTooltipPlacement","top",1,"btn-sm","text-primary","border-0","py-0","me-2",3,"routerLink","cTooltip"],["size","xl","title","Edit",3,"cIcon"],["cButton","","color","btn-transparent","role","button","cTooltipPlacement","top",1,"btn-sm","text-danger","border-0","py-0",3,"click","disabled","cTooltip"],["width","25","title","Delete",3,"cIcon"],["target","_blank","rel","noopener noreferrer",3,"href"],[1,"text-center","py-4","text-muted"],["aria-label","Page navigation",1,"mt-3"],[3,"disabled"],["cPageLink","",3,"click"],[3,"active",4,"ngFor","ngForOf"],[3,"active"]],template:function(i,l){i&1&&(n(0,"c-col",0)(1,"c-card",1)(2,"c-card-body")(3,"form",2)(4,"div",3)(5,"a",4),e(6,"Create New Course"),r()()()()()(),n(7,"c-row"),e(8,`
  `),n(9,"c-col",0),e(10,`
    `),n(11,"c-card",1),e(12,`
      `),n(13,"c-card-body"),e(14,`
        `),n(15,"c-col",5),e(16,`
          `),n(17,"input",6),h("input",function(){return l.search()}),A("ngModelChange",function(C){return F(l.searchTerm,C)||(l.searchTerm=C),C}),r(),e(18,`
        `),r(),e(19,`

        `),p(20,ge,8,0,"div",7),e(21,`

        `),p(22,_e,37,4,"table",8),e(23,`

        `),p(24,fe,5,0,"div",9),e(25,`

        `),p(26,ve,16,5,"c-pagination",10),e(27,`
      `),r(),e(28,`
    `),r(),e(29,`
  `),r(),e(30,`
`),r()),i&2&&(a(5),c("routerLink",M(6,ue)),a(12),N("ngModel",l.searchTerm),a(3),c("ngIf",l.isLoading),a(2),c("ngIf",!l.isLoading),a(2),c("ngIf",!l.isLoading&&l.paginatedCourseList.length===0),a(2),c("ngIf",!l.isLoading&&l.courseList.length>l.itemsPerPage))},dependencies:[B,V,W,X,O,R,U,H,$,j,le,ae,te,ie,ne,se,oe,re,z,Y,G,Q,K,J,q]});let s=d;return s})();export{ke as ListCoursesComponent};
