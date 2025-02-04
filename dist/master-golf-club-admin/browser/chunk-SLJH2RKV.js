import{a as ce}from"./chunk-DHTWQ56Z.js";import"./chunk-GFV7M3J3.js";import{Ja as Z,ra as X}from"./chunk-IU3BDYHA.js";import{a as me}from"./chunk-C4ZII7PO.js";import{Aa as U,Ca as ee,Ea as te,Fa as ie,G as O,H as G,Ha as ne,Ja as re,Ka as oe,M as W,N as j,Wa as ae,Xa as se,Z as Y,b as D,c as V,d as B,da as $,f as R,ha as z,ia as H,na as q,oa as J,pa as K,r as A,za as Q}from"./chunk-MQQCFL5Y.js";import{$b as e,Hb as t,Ib as i,Jb as v,Nb as L,Pb as h,Qb as u,ab as s,ac as p,bb as y,ec as I,fc as N,ga as T,gc as k,ic as F,jc as M,kc as E,ra as C,rb as _,sa as f,ta as P,ua as b,wb as S,xb as m}from"./chunk-7U6K5JTK.js";import{f as le,k as w}from"./chunk-AAPNLDO3.js";var g=le(me());var de=()=>["/courses/add"],ue=c=>["/courses/update",c],pe=c=>({active:c});function ge(c,l){if(c&1){let o=L();t(0,"tr"),e(1,`
              `),t(2,"td"),e(3),i(),e(4,`
              `),t(5,"td"),e(6),i(),e(7,`
              `),t(8,"td"),e(9),i(),e(10,`
              `),t(11,"td"),e(12),i(),e(13,`
              `),t(14,"td"),e(15),i(),e(16,`
              `),t(17,"td"),e(18),i(),e(19,`
              `),t(20,"td"),e(21,`
                `),t(22,"a",11),e(23,`
                  `),P(),v(24,"svg",12),e(25,`
                `),i(),e(26,`
                `),b(),t(27,"a",13),h("click",function(){let r=C(o).$implicit,a=u();return f(a.deleteCourse(r.id))}),e(28,`
                  `),P(),v(29,"svg",14),e(30,`
                `),i(),e(31,`
              `),i(),e(32,`
            `),i()}if(c&2){let o=l.$implicit,n=l.index,r=u();s(3),p((r.currentPage-1)*r.itemsPerPage+n+1),s(3),p(o.courseName),s(3),p(o.town),s(3),p(o.phoneNumber),s(3),p(o.website),s(3),p(o.golfLocation),s(4),m("routerLink",E(11,ue,o.id))("cTooltip",r.tooltipEditText),s(2),m("cIcon",r.icons.cilPen),s(3),m("cTooltip",r.tooltipDeleteText),s(2),m("cIcon",r.icons.cilTrash)}}function he(c,l){if(c&1){let o=L();t(0,"c-page-item"),e(1,`
            `),t(2,"a",17),h("click",function(){let r=C(o).$implicit,a=u(2);return f(a.changePage(r))}),e(3),i(),e(4,`
          `),i()}if(c&2){let o=l.$implicit,n=u(2);s(2),m("ngClass",E(2,pe,n.currentPage===o)),s(),p(o)}}function xe(c,l){if(c&1){let o=L();t(0,"c-pagination",15),e(1,`
          `),t(2,"c-page-item"),e(3,`
            `),t(4,"a",16),h("click",function(){C(o);let r=u();return f(r.previousPage())}),e(5,"Previous"),i(),e(6,`
          `),i(),e(7,`
          `),_(8,he,5,4,"c-page-item",9),e(9,`
          `),t(10,"c-page-item"),e(11,`
            `),t(12,"a",16),h("click",function(){C(o);let r=u();return f(r.nextPage())}),e(13,"Next"),i(),e(14,`
          `),i(),e(15,`
        `),i()}if(c&2){let o=u();s(4),S("aria-disabled",o.currentPage===1),s(4),m("ngForOf",o.pageRange),s(4),S("aria-disabled",o.currentPage===o.totalPages)}}var ye=(()=>{let l=class l{constructor(n){this.courseService=n,this.icons={cilPen:X,cilTrash:Z},this.tooltipEditText="Edit",this.tooltipDeleteText="Delete",this.courseList=[],this.pageRange=[],this.currentPage=1,this.itemsPerPage=10,this.isLoading=!1,this.searchTerm=""}ngOnInit(){this.loadCourseList()}updatePageRange(){let n=this.totalPages,r=Math.max(1,this.currentPage-1);Math.min(n,r+2)===n&&(r=Math.max(1,n-2)),this.pageRange=Array.from({length:Math.min(3,n)},(d,x)=>r+x)}changePage(n){n>=1&&n<=this.totalPages&&!this.isLoading&&(this.currentPage=n,this.updatePageRange())}nextPage(){this.currentPage<this.totalPages&&!this.isLoading&&this.changePage(this.currentPage+1)}previousPage(){this.currentPage>1&&!this.isLoading&&this.changePage(this.currentPage-1)}loadCourseList(){return w(this,null,function*(){if(!this.isLoading){this.isLoading=!0;try{let n=yield this.courseService.listCourse("0");n.data.code===1?(this.courseList=n.data.data,this.updatePageRange()):yield g.default.fire("Error","Failed to load Course list","error")}catch(n){console.error("Error loading Course list:",n),yield g.default.fire("Error","An error occurred while loading the Course list","error")}finally{this.isLoading=!1}}})}search(){this.currentPage=1,this.updatePageRange()}get paginatedCourseList(){let n=this.courseList;if(this.searchTerm){let a=this.searchTerm.toLowerCase();n=this.courseList.filter(d=>d.courseName.toLowerCase().includes(a)||d.town.toLowerCase().includes(a)||d.phoneNumber.toLowerCase().includes(a)||d.website.toLowerCase().includes(a)||d.golfLocation.toLowerCase().includes(a))}let r=(this.currentPage-1)*this.itemsPerPage;return n.slice(r,r+this.itemsPerPage)}get totalPages(){let n=this.searchTerm?this.courseList.filter(r=>r.courseName.toLowerCase().includes(this.searchTerm.toLowerCase())||r.town.toLowerCase().includes(this.searchTerm.toLowerCase())||r.phoneNumber.toLowerCase().includes(this.searchTerm.toLowerCase())||r.website.toLowerCase().includes(this.searchTerm.toLowerCase())||r.golfLocation.toLowerCase().includes(this.searchTerm.toLowerCase())).length:this.courseList.length;return Math.ceil(n/this.itemsPerPage)}deleteCourse(n){return w(this,null,function*(){if(this.isLoading)return;if((yield g.default.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"})).isConfirmed){this.isLoading=!0;try{(yield this.courseService.deleteCourse(n.toString())).data.code===1?(this.courseList=this.courseList.filter(d=>d.id!==n),yield g.default.fire("Deleted!","Course has been deleted.","success"),yield this.loadCourseList()):yield g.default.fire("Error","Failed to delete Course","error")}catch(a){console.error("Error deleting Course:",a),yield g.default.fire("Error","An error occurred while deleting the Course","error")}finally{this.isLoading=!1}}})}};l.\u0275fac=function(r){return new(r||l)(y(ce))},l.\u0275cmp=T({type:l,selectors:[["app-list-courses"]],standalone:!0,features:[F],decls:60,vars:8,consts:[["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3"],[1,"col-auto"],["cButton","","color","primary","role","button",3,"routerLink"],["md","3",1,"mb-4","flex","justify-content-md-end"],["cFormControl","","id","searchInput","type","search","placeholder","Search courses...",3,"input","ngModelChange","ngModel"],["cTable","",3,"hover","striped","bordered"],["scope","col"],[4,"ngFor","ngForOf"],["aria-label","Page navigation",4,"ngIf"],["cButton","","color","btn-transparent","role","button","cTooltipPlacement","top",1,"btn-sm","text-primary","border-0","py-0",3,"routerLink","cTooltip"],["size","xl","title","Edit",3,"cIcon"],["cButton","","color","btn-transparent","role","button","cTooltipPlacement","top",1,"btn-sm","text-danger","border-0","py-0",3,"click","cTooltip"],["width","25","title","Delete",3,"cIcon"],["aria-label","Page navigation"],["cPageLink","",3,"click"],["cPageLink","",3,"click","ngClass"]],template:function(r,a){r&1&&(t(0,"c-col",0)(1,"c-card",1)(2,"c-card-body")(3,"form",2)(4,"div",3)(5,"a",4),e(6,"Create New Course"),i()()()()()(),t(7,"c-row"),e(8,`
  `),t(9,"c-col",0),e(10,`
    `),t(11,"c-card",1),e(12,`
      `),t(13,"c-card-body"),e(14,`
        `),t(15,"c-col",5),e(16,`
          `),t(17,"input",6),h("input",function(){return a.search()}),k("ngModelChange",function(x){return N(a.searchTerm,x)||(a.searchTerm=x),x}),i(),e(18,`
        `),i(),e(19,`

        `),t(20,"table",7),e(21,`
          `),t(22,"thead"),e(23,`
            `),t(24,"tr"),e(25,`
              `),t(26,"th",8),e(27,"S.No"),i(),e(28,`
              `),t(29,"th",8),e(30,"Course Name"),i(),e(31,`
              `),t(32,"th",8),e(33,"Town"),i(),e(34,`
              `),t(35,"th",8),e(36,"Phone Number"),i(),e(37,`
              `),t(38,"th",8),e(39,"Website"),i(),e(40,`
              `),t(41,"th",8),e(42,"Golf Location"),i(),e(43,`
              `),t(44,"th",8),e(45,"Action"),i(),e(46,`
            `),i(),e(47,`
          `),i(),e(48,`
          `),t(49,"tbody"),e(50,`
            `),_(51,ge,33,13,"tr",9),e(52,`
          `),i(),e(53,`
        `),i(),e(54,`

        `),_(55,xe,16,3,"c-pagination",10),e(56,`
      `),i(),e(57,`
    `),i(),e(58,`
  `),i(),e(59,`
`),i()),r&2&&(s(5),m("routerLink",M(7,de)),s(12),I("ngModel",a.searchTerm),s(3),m("hover",!0)("striped",!0)("bordered",!0),s(31),m("ngForOf",a.paginatedCourseList),s(4),m("ngIf",a.courseList.length>a.itemsPerPage))},dependencies:[R,D,V,B,U,O,A,H,z,W,j,se,oe,ee,te,ie,ae,re,ne,Y,$,G,Q,K,J,q]});let c=l;return c})();export{ye as ListCoursesComponent};
