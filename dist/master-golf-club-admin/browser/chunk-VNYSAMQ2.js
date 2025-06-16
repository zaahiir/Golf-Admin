import{a as oe}from"./chunk-B7XMRKBP.js";import"./chunk-AUROHWJP.js";import{Ja as te,ra as ee}from"./chunk-IU3BDYHA.js";import{a as se}from"./chunk-DVM5LER3.js";import{Ea as X,Fa as Z,Ia as ie,J as W,K as j,Ka as ne,Pa as re,Q as G,R as Y,b as V,c as B,cb as ae,d as R,f as A,g as O,ha as z,la as H,ma as J,ra as K,sa as Q,t as $,ta as U}from"./chunk-RS62WWGD.js";import{Ib as t,Jb as i,Kb as q,Ob as f,Sb as u,Tb as d,bb as o,cb as v,cc as e,dc as _,ec as S,fc as w,ha as L,hc as T,ic as I,jc as F,lc as D,nc as y,oc as N,qc as k,sa as x,sb as E,ta as h,ua as C,va as M,yb as c}from"./chunk-NP3QOLCN.js";import{f as le,k as P}from"./chunk-AAPNLDO3.js";var g=le(se());var me=m=>({disabled:m}),ce=m=>({active:m});function de(m,s){if(m&1){let a=f();t(0,"tr"),e(1,`
              `),t(2,"td"),e(3),i(),e(4,`
              `),t(5,"td"),e(6),N(7,"date"),i(),e(8,`
              `),t(9,"td"),e(10),i(),e(11,`
              `),t(12,"td"),e(13),i(),e(14,`
              `),t(15,"td"),e(16),i(),e(17,`
              `),t(18,"td"),e(19),i(),e(20,`
              `),t(21,"td"),e(22,`
                `),t(23,"a",12),u("click",function(){let r=x(a).$implicit,l=d();return h(l.convertToMember(r.id))}),e(24,`
                  `),C(),q(25,"svg",13),e(26,`
                `),i(),e(27,`
                `),M(),t(28,"a",14),u("click",function(){let r=x(a).$implicit,l=d();return h(l.deleteMemberEnquiry(r.id))}),e(29,`
                  `),C(),q(30,"svg",15),e(31,`
                `),i(),e(32,`
              `),i(),e(33,`
            `),i()}if(m&2){let a=s.$implicit,n=s.index,r=d();o(3),_((r.currentPage-1)*r.itemsPerPage+n+1),o(3),_(k(7,11,a.memberEnquiryDate,"mediumDate")),o(4),_(a.memberEnquiryPlan),o(3),w("",a.memberEnquiryFirstName," ",a.memberEnquiryLastName,""),o(3),_(a.memberEnquiryPhoneNumber),o(3),_(a.memberEnquiryEmail),o(4),c("cTooltip",r.tooltipEditText),o(2),c("cIcon",r.icons.cilPen),o(3),c("cTooltip",r.tooltipDeleteText),o(2),c("cIcon",r.icons.cilTrash)}}function pe(m,s){if(m&1&&(t(0,"tr"),e(1,`
              `),t(2,"td",16),e(3),i(),e(4,`
            `),i()),m&2){let a=d();o(3),S(`
                `,a.isLoading?"Loading...":"No enquiries found",`
              `)}}function ue(m,s){if(m&1){let a=f();t(0,"c-page-item"),e(1,`
            `),t(2,"a",18),u("click",function(){let r=x(a).$implicit,l=d(2);return h(l.changePage(r))}),e(3),i(),e(4,`
          `),i()}if(m&2){let a=s.$implicit,n=d(2);o(2),c("ngClass",y(2,ce,n.currentPage===a)),o(),S(`
              `,a,`
            `)}}function ge(m,s){if(m&1){let a=f();t(0,"c-pagination",17),e(1,`
          `),t(2,"c-page-item"),e(3,`
            `),t(4,"a",18),u("click",function(){x(a);let r=d();return h(r.previousPage())}),e(5,`
              Previous
            `),i(),e(6,`
          `),i(),e(7,`
          `),E(8,ue,5,4,"c-page-item",9),e(9,`
          `),t(10,"c-page-item"),e(11,`
            `),t(12,"a",18),u("click",function(){x(a);let r=d();return h(r.nextPage())}),e(13,`
              Next
            `),i(),e(14,`
          `),i(),e(15,`
        `),i()}if(m&2){let a=d();o(4),c("ngClass",y(3,me,a.currentPage===1)),o(4),c("ngForOf",a.pageRange),o(4),c("ngClass",y(5,me,a.currentPage===a.totalPages))}}var Se=(()=>{let s=class s{constructor(n,r){this.memberEnquiryService=n,this.router=r,this.icons={cilPen:ee,cilTrash:te},this.tooltipEditText="Convert to Member",this.tooltipDeleteText="Delete",this.memberEnquiryList=[],this.filteredList=[],this.pageRange=[],this.currentPage=1,this.itemsPerPage=10,this.isLoading=!1,this.searchTerm=""}ngOnInit(){this.loadMemberEnquiryList()}loadMemberEnquiryList(){return P(this,null,function*(){if(!this.isLoading){this.isLoading=!0;try{let n=yield this.memberEnquiryService.listMemberEnquiry("0");n.data.code===1?(this.memberEnquiryList=n.data.data,this.filterList(),this.updatePageRange()):yield g.default.fire("Error","Failed to load member enquiry list","error")}catch{yield g.default.fire("Error","An error occurred while loading the list","error")}finally{this.isLoading=!1}}})}convertToMember(n){this.router.navigate(["/members/add"],{queryParams:{enquiryId:n}})}filterList(){if(!this.searchTerm){this.filteredList=[...this.memberEnquiryList];return}let n=this.searchTerm.toLowerCase().trim();this.filteredList=this.memberEnquiryList.filter(r=>{let l=`${r.memberEnquiryFirstName||""} ${r.memberEnquiryLastName||""}`.toLowerCase();return[(r.memberEnquiryPlan||"").toLowerCase(),l,(r.memberEnquiryPhoneNumber||"").toLowerCase(),(r.memberEnquiryEmail||"").toLowerCase()].some(p=>p.includes(n))})}updatePageRange(){let n=this.totalPages,r=Math.max(1,this.currentPage-1);Math.min(n,r+2)===n&&(r=Math.max(1,n-2)),this.pageRange=Array.from({length:Math.min(3,n)},(b,p)=>r+p)}changePage(n){n>=1&&n<=this.totalPages&&!this.isLoading&&(this.currentPage=n,this.updatePageRange())}nextPage(){this.currentPage<this.totalPages&&!this.isLoading&&this.changePage(this.currentPage+1)}previousPage(){this.currentPage>1&&!this.isLoading&&this.changePage(this.currentPage-1)}get paginatedMemberEnquiryList(){let n=(this.currentPage-1)*this.itemsPerPage;return this.filteredList.slice(n,n+this.itemsPerPage)}get totalPages(){return Math.ceil(this.filteredList.length/this.itemsPerPage)}search(){this.filterList(),this.currentPage=1,this.updatePageRange()}deleteMemberEnquiry(n){return P(this,null,function*(){if(this.isLoading)return;if((yield g.default.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"})).isConfirmed){this.isLoading=!0;try{(yield this.memberEnquiryService.deleteMemberEnquiry(n.toString())).data.code===1?(yield g.default.fire("Deleted!","Member enquiry has been deleted.","success"),yield this.loadMemberEnquiryList()):yield g.default.fire("Error","Failed to delete member enquiry","error")}catch{yield g.default.fire("Error","An error occurred while deleting the member enquiry","error")}finally{this.isLoading=!1}}})}};s.\u0275fac=function(r){return new(r||s)(v(oe),v($))},s.\u0275cmp=L({type:s,selectors:[["app-member-enquiry"]],standalone:!0,features:[D],decls:61,vars:7,consts:[["xs","12"],[1,"mb-4"],["md","3",1,"mb-4"],[1,"position-relative"],["cFormControl","","id","searchInput","type","search","placeholder","Search Enquiries","autocomplete","off",3,"ngModelChange","input","ngModel"],["cTable","",1,"align-middle",3,"hover","striped","bordered"],["scope","col",2,"width","70px"],["scope","col"],["scope","col",2,"width","120px"],[4,"ngFor","ngForOf"],[4,"ngIf"],["aria-label","Member enquiry navigation",4,"ngIf"],["cButton","","color","btn-transparent","cTooltipPlacement","top",1,"btn-sm","text-primary","border-0","py-0",3,"click","cTooltip"],["size","xl",3,"cIcon"],["cButton","","color","btn-transparent","cTooltipPlacement","top",1,"btn-sm","text-danger","border-0","py-0",3,"click","cTooltip"],["width","25",3,"cIcon"],["colspan","7",1,"text-center","py-4"],["aria-label","Member enquiry navigation"],["cPageLink","",3,"click","ngClass"]],template:function(r,l){r&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`
    `),t(4,"c-card",1),e(5,`
      `),t(6,"c-card-body"),e(7,`
        `),e(8,`
        `),t(9,"c-col",2),e(10,`
          `),t(11,"div",3),e(12,`
            `),t(13,"input",4),F("ngModelChange",function(p){return I(l.searchTerm,p)||(l.searchTerm=p),p}),u("input",function(){return l.search()}),i(),e(14,`
          `),i(),e(15,`
        `),i(),e(16,`

        `),e(17,`
        `),t(18,"table",5),e(19,`
          `),t(20,"thead"),e(21,`
            `),t(22,"tr"),e(23,`
              `),t(24,"th",6),e(25,"S.No"),i(),e(26,`
              `),t(27,"th",7),e(28,"Date"),i(),e(29,`
              `),t(30,"th",7),e(31,"Plan"),i(),e(32,`
              `),t(33,"th",7),e(34,"Name"),i(),e(35,`
              `),t(36,"th",7),e(37,"Phone Number"),i(),e(38,`
              `),t(39,"th",7),e(40,"Email"),i(),e(41,`
              `),t(42,"th",8),e(43,"Action"),i(),e(44,`
            `),i(),e(45,`
          `),i(),e(46,`
          `),t(47,"tbody"),e(48,`
            `),E(49,de,34,14,"tr",9),e(50,`
            `),E(51,pe,5,1,"tr",10),e(52,`
          `),i(),e(53,`
        `),i(),e(54,`

        `),e(55,`
        `),E(56,ge,16,7,"c-pagination",11),e(57,`
      `),i(),e(58,`
    `),i(),e(59,`
  `),i(),e(60,`
`),i()),r&2&&(o(13),T("ngModel",l.searchTerm),o(5),c("hover",!0)("striped",!0)("bordered",!0),o(31),c("ngForOf",l.paginatedMemberEnquiryList),o(2),c("ngIf",l.paginatedMemberEnquiryList.length===0),o(5),c("ngIf",l.memberEnquiryList.length>l.itemsPerPage))},dependencies:[O,V,B,R,A,Z,W,J,H,G,Y,ae,ie,ne,re,z,j,X,U,Q,K]});let m=s;return m})();export{Se as MemberEnquiryComponent};
