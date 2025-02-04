import{a as le}from"./chunk-HBTOLUYY.js";import"./chunk-GFV7M3J3.js";import{Ja as Z,ra as X}from"./chunk-IU3BDYHA.js";import{a as ce}from"./chunk-C4ZII7PO.js";import{Aa as U,Ca as ee,Ea as te,Fa as ie,G as A,H as $,Ha as ne,Ja as re,Ka as ae,M as G,N as W,Wa as oe,Xa as se,Z as j,b as D,c as V,d as B,da as Y,f as R,ha as z,ia as H,na as q,oa as J,pa as K,r as O,za as Q}from"./chunk-MQQCFL5Y.js";import{$b as e,Hb as t,Ib as i,Jb as L,Nb as C,Pb as x,Qb as d,ab as s,ac as u,bb as M,ec as y,fc as I,ga as E,gc as N,ic as F,jc as k,kc as w,ra as _,rb as g,sa as f,ta as v,ua as T,wb as S,xb as c}from"./chunk-7U6K5JTK.js";import{f as me,k as P}from"./chunk-AAPNLDO3.js";var b=me(ce());var de=()=>["/members/add"],pe=a=>["/members/update",a],ge=a=>({active:a});function ue(a,m){a&1&&(t(0,"div",10),e(1,`
          `),t(2,"div",11),e(3,`
            `),t(4,"span",12),e(5,"Loading..."),i(),e(6,`
          `),i(),e(7,`
        `),i())}function xe(a,m){if(a&1){let o=C();t(0,"tr"),e(1,`
              `),t(2,"td"),e(3),i(),e(4,`
              `),t(5,"td"),e(6),i(),e(7,`
              `),t(8,"td"),e(9),i(),e(10,`
              `),t(11,"td"),e(12),i(),e(13,`
              `),t(14,"td"),e(15),i(),e(16,`
              `),t(17,"td"),e(18,`
                `),t(19,"a",17),e(20,`
                  `),v(),L(21,"svg",18),e(22,`
                `),i(),e(23,`
                `),T(),t(24,"a",19),x("click",function(){let n=_(o).$implicit,l=d(2);return f(l.deleteMember(n.id))}),e(25,`
                  `),v(),L(26,"svg",20),e(27,`
                `),i(),e(28,`
              `),i(),e(29,`
            `),i()}if(a&2){let o=m.$implicit,r=m.index,n=d(2);s(3),u((n.currentPage-1)*n.itemsPerPage+r+1),s(3),u(o.golfClubId),s(3),u(n.getFullName(o)),s(3),u(o.email),s(3),u(o.phoneNumber),s(4),c("routerLink",w(10,pe,o.id))("cTooltip",n.tooltipEditText),s(2),c("cIcon",n.icons.cilPen),s(3),c("cTooltip",n.tooltipDeleteText),s(2),c("cIcon",n.icons.cilTrash)}}function he(a,m){a&1&&(t(0,"tr"),e(1,`
              `),t(2,"td",21),e(3,`
                No members found
              `),i(),e(4,`
            `),i())}function _e(a,m){if(a&1&&(t(0,"table",13),e(1,`
          `),t(2,"thead"),e(3,`
            `),t(4,"tr"),e(5,`
              `),t(6,"th",14),e(7,"S.No"),i(),e(8,`
              `),t(9,"th",14),e(10,"Member ID"),i(),e(11,`
              `),t(12,"th",14),e(13,"Member Name"),i(),e(14,`
              `),t(15,"th",14),e(16,"Email"),i(),e(17,`
              `),t(18,"th",14),e(19,"Mobile Number"),i(),e(20,`
              `),t(21,"th",14),e(22,"Action"),i(),e(23,`
            `),i(),e(24,`
          `),i(),e(25,`
          `),t(26,"tbody"),e(27,`
            `),g(28,xe,30,12,"tr",15),e(29,`
            `),e(30,`
            `),g(31,he,5,0,"tr",16),e(32,`
          `),i(),e(33,`
        `),i()),a&2){let o=d();c("hover",!0)("striped",!0)("bordered",!0),s(28),c("ngForOf",o.paginatedMembers),s(3),c("ngIf",o.paginatedMembers.length===0)}}function fe(a,m){if(a&1){let o=C();t(0,"c-page-item"),e(1,`
            `),t(2,"a",24),x("click",function(){let n=_(o).$implicit,l=d(2);return f(l.changePage(n))}),e(3),i(),e(4,`
          `),i()}if(a&2){let o=m.$implicit,r=d(2);s(2),c("ngClass",w(2,ge,r.currentPage===o)),s(),u(o)}}function be(a,m){if(a&1){let o=C();t(0,"c-pagination",22),e(1,`
          `),t(2,"c-page-item"),e(3,`
            `),t(4,"a",23),x("click",function(){_(o);let n=d();return f(n.previousPage())}),e(5,"Previous"),i(),e(6,`
          `),i(),e(7,`
          `),g(8,fe,5,4,"c-page-item",15),e(9,`
          `),t(10,"c-page-item"),e(11,`
            `),t(12,"a",23),x("click",function(){_(o);let n=d();return f(n.nextPage())}),e(13,"Next"),i(),e(14,`
          `),i(),e(15,`
        `),i()}if(a&2){let o=d();s(4),S("aria-disabled",o.currentPage===1),s(4),c("ngForOf",o.pageRange),s(4),S("aria-disabled",o.currentPage===o.totalPages)}}var Ne=(()=>{let m=class m{constructor(r){this.memberService=r,this.icons={cilPen:X,cilTrash:Z},this.tooltipEditText="Edit",this.tooltipDeleteText="Delete",this.isLoading=!1,this.searchTerm="",this.members=[],this.pageRange=[],this.currentPage=1,this.itemsPerPage=10}ngOnInit(){this.loadMembers()}updatePageRange(){let r=this.totalPages,n=Math.max(1,this.currentPage-1);Math.min(r,n+2)===r&&(n=Math.max(1,r-2)),this.pageRange=Array.from({length:Math.min(3,r)},(p,h)=>n+h)}changePage(r){r>=1&&r<=this.totalPages&&!this.isLoading&&(this.currentPage=r,this.updatePageRange())}nextPage(){this.currentPage<this.totalPages&&!this.isLoading&&this.changePage(this.currentPage+1)}previousPage(){this.currentPage>1&&!this.isLoading&&this.changePage(this.currentPage-1)}loadMembers(){return P(this,null,function*(){if(!this.isLoading)try{this.isLoading=!0;let r=yield this.memberService.listMember();if(r.data?.data)this.members=r.data.data,this.updatePageRange();else throw new Error("Failed to load members")}catch(r){console.error("Error loading members:",r),yield b.default.fire("Error","Failed to load members","error")}finally{this.isLoading=!1}})}search(){this.currentPage=1,this.updatePageRange()}get paginatedMembers(){let r=this.members;if(this.searchTerm){let l=this.searchTerm.toLowerCase();r=this.members.filter(p=>p.golfClubId?.toLowerCase().includes(l)||p.firstName?.toLowerCase().includes(l)||p.lastName?.toLowerCase().includes(l)||p.email?.toLowerCase().includes(l)||p.phoneNumber?.includes(this.searchTerm))}let n=(this.currentPage-1)*this.itemsPerPage;return r.slice(n,n+this.itemsPerPage)}get totalPages(){let r=this.searchTerm?this.members.filter(n=>n.golfClubId?.toLowerCase().includes(this.searchTerm.toLowerCase())||n.firstName?.toLowerCase().includes(this.searchTerm.toLowerCase())||n.lastName?.toLowerCase().includes(this.searchTerm.toLowerCase())||n.email?.toLowerCase().includes(this.searchTerm.toLowerCase())||n.phoneNumber?.includes(this.searchTerm)).length:this.members.length;return Math.ceil(r/this.itemsPerPage)}deleteMember(r){return P(this,null,function*(){if(!this.isLoading)try{if((yield b.default.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"})).isConfirmed){this.isLoading=!0;let l=yield this.memberService.deleteMember(r.toString());if(l.data?.code===1)yield b.default.fire("Deleted!","Member has been deleted.","success"),yield this.loadMembers();else throw new Error(l.data?.message||"Failed to delete member")}}catch(n){console.error("Error deleting member:",n),yield b.default.fire("Error","Failed to delete member","error")}finally{this.isLoading=!1}})}getFullName(r){return`${r.firstName||""} ${r.lastName||""}`.trim()}};m.\u0275fac=function(n){return new(n||m)(M(le))},m.\u0275cmp=E({type:m,selectors:[["app-list-members"]],standalone:!0,features:[F],decls:33,vars:6,consts:[["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3"],[1,"col-auto"],["cButton","","color","primary","role","button",3,"routerLink"],["md","3",1,"mb-4","flex","justify-content-md-end"],["cFormControl","","id","searchInput","type","search","placeholder","Search members...",3,"input","ngModelChange","ngModel"],["class","text-center my-4",4,"ngIf"],["cTable","",3,"hover","striped","bordered",4,"ngIf"],["aria-label","Page navigation",4,"ngIf"],[1,"text-center","my-4"],["role","status",1,"spinner-border","text-primary"],[1,"visually-hidden"],["cTable","",3,"hover","striped","bordered"],["scope","col"],[4,"ngFor","ngForOf"],[4,"ngIf"],["cButton","","color","btn-transparent","role","button","cTooltipPlacement","top",1,"btn-sm","text-primary","border-0","py-0",3,"routerLink","cTooltip"],["size","xl","title","Edit",3,"cIcon"],["cButton","","color","btn-transparent","role","button","cTooltipPlacement","top",1,"btn-sm","text-danger","border-0","py-0",3,"click","cTooltip"],["width","25","title","Delete",3,"cIcon"],["colspan","6",1,"text-center","py-4"],["aria-label","Page navigation"],["cPageLink","",3,"click"],["cPageLink","",3,"click","ngClass"]],template:function(n,l){n&1&&(t(0,"c-col",0)(1,"c-card",1)(2,"c-card-body")(3,"form",2)(4,"div",3)(5,"a",4),e(6,"Create New Members"),i()()()()()(),t(7,"c-row"),e(8,`
  `),t(9,"c-col",0),e(10,`
    `),t(11,"c-card",1),e(12,`
      `),t(13,"c-card-body"),e(14,`
        `),e(15,`
        `),t(16,"c-col",5),e(17,`
          `),t(18,"input",6),x("input",function(){return l.search()}),N("ngModelChange",function(h){return I(l.searchTerm,h)||(l.searchTerm=h),h}),i(),e(19,`
        `),i(),e(20,`

        `),e(21,`
        `),g(22,ue,8,0,"div",7),e(23,`

        `),e(24,`
        `),g(25,_e,34,5,"table",8),e(26,`

        `),e(27,`
        `),g(28,be,16,3,"c-pagination",9),e(29,`
      `),i(),e(30,`
    `),i(),e(31,`
  `),i(),e(32,`
`),i()),n&2&&(s(5),c("routerLink",k(5,de)),s(13),y("ngModel",l.searchTerm),s(4),c("ngIf",l.isLoading),s(3),c("ngIf",!l.isLoading),s(3),c("ngIf",l.members.length>l.itemsPerPage))},dependencies:[D,R,V,B,U,A,O,H,z,G,W,se,ae,ee,te,ie,oe,re,ne,j,Y,$,Q,K,J,q]});let a=m;return a})();export{Ne as ListMembersComponent};
