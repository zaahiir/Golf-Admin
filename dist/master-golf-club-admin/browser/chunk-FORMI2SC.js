import{a as se}from"./chunk-33AYQO7M.js";import"./chunk-AUROHWJP.js";import{La as ie,ta as te}from"./chunk-V6TNJ3ZT.js";import{a as de}from"./chunk-DVM5LER3.js";import{Ca as Z,Da as ee,Ga as ne,Ia as re,K as W,L as z,Na as ae,R as G,S as H,ab as oe,b as R,c as A,d as O,g as B,ga as J,h as $,ja as K,ka as Q,pa as U,qa as X,ra as Y,u as j}from"./chunk-45BFYFPT.js";import{Ab as M,Jb as n,Kb as r,Lb as T,Pb as _,Tb as u,Ub as d,cb as s,db as v,dc as e,ec as g,fc as b,gc as w,ia as q,ic as I,jc as N,kc as F,mc as D,oc as y,pc as P,qc as k,sc as V,ta as x,tb as E,ua as h,va as L,zb as c}from"./chunk-IO45J2MB.js";import{f as ce,k as S}from"./chunk-AAPNLDO3.js";var C=ce(de());var pe=o=>({"table-secondary":o}),ue=(o,m)=>({"bg-success":o,"bg-warning":m}),ge=(o,m)=>({"text-primary":o,"text-muted":m}),me=o=>({disabled:o}),xe=o=>({active:o});function he(o,m){if(o&1){let a=_();n(0,"tr",12),e(1,`
              `),n(2,"td"),e(3),r(),e(4,`
              `),n(5,"td"),e(6),k(7,"date"),r(),e(8,`
              `),n(9,"td"),e(10),r(),e(11,`
              `),n(12,"td"),e(13),r(),e(14,`
              `),n(15,"td"),e(16),r(),e(17,`
              `),n(18,"td"),e(19),r(),e(20,`
              `),n(21,"td"),e(22,`
                `),n(23,"span",13),e(24),r(),e(25,`
              `),r(),e(26,`
              `),n(27,"td"),e(28,`
                `),e(29,`
                `),n(30,"a",14),u("click",function(){let i=x(a).$implicit,l=d();return h(l.convertToMember(i.id))}),e(31,`
                  `),L(),T(32,"svg",15),e(33,`
                `),r(),e(34,`
              `),r(),e(35,`
            `),r()}if(o&2){let a=m.$implicit,t=m.index,i=d();c("ngClass",y(19,pe,i.isEnquiryConverted(a))),s(3),g((i.currentPage-1)*i.itemsPerPage+t+1),s(3),g(V(7,16,a.memberEnquiryDate,"mediumDate")),s(4),g(i.getPlanName(a.memberEnquiryPlan)),s(3),w("",a.memberEnquiryFirstName," ",a.memberEnquiryLastName,""),s(3),g(a.memberEnquiryPhoneNumber),s(3),g(a.memberEnquiryEmail),s(4),c("ngClass",P(21,ue,i.isEnquiryConverted(a),!i.isEnquiryConverted(a))),s(),b(`
                  `,i.getStatusText(a),`
                `),s(6),M("cursor",i.isEnquiryConverted(a)?"not-allowed":"pointer"),c("ngClass",P(24,ge,!i.isEnquiryConverted(a),i.isEnquiryConverted(a)))("disabled",i.isEnquiryConverted(a))("cTooltip",i.isEnquiryConverted(a)?i.tooltipConvertedText:i.tooltipEditText),s(2),c("cIcon",i.icons.cilPen)}}function Ee(o,m){if(o&1&&(n(0,"tr"),e(1,`
              `),n(2,"td",16),e(3),r(),e(4,`
            `),r()),o&2){let a=d();s(3),b(`
                `,a.isLoading?"Loading...":"No enquiries found",`
              `)}}function ye(o,m){if(o&1){let a=_();n(0,"c-page-item"),e(1,`
            `),n(2,"a",18),u("click",function(){let i=x(a).$implicit,l=d(2);return h(l.changePage(i))}),e(3),r(),e(4,`
          `),r()}if(o&2){let a=m.$implicit,t=d(2);s(2),c("ngClass",y(2,xe,t.currentPage===a)),s(),b(`
              `,a,`
            `)}}function fe(o,m){if(o&1){let a=_();n(0,"c-pagination",17),e(1,`
          `),n(2,"c-page-item"),e(3,`
            `),n(4,"a",18),u("click",function(){x(a);let i=d();return h(i.previousPage())}),e(5,`
              Previous
            `),r(),e(6,`
          `),r(),e(7,`
          `),E(8,ye,5,4,"c-page-item",19),e(9,`
          `),n(10,"c-page-item"),e(11,`
            `),n(12,"a",18),u("click",function(){x(a);let i=d();return h(i.nextPage())}),e(13,`
              Next
            `),r(),e(14,`
          `),r(),e(15,`
        `),r()}if(o&2){let a=d();s(4),c("ngClass",y(3,me,a.currentPage===1)),s(4),c("ngForOf",a.pageRange),s(4),c("ngClass",y(5,me,a.currentPage===a.totalPages))}}var Ne=(()=>{let m=class m{constructor(t,i){this.memberEnquiryService=t,this.router=i,this.icons={cilPen:te,cilTrash:ie},this.tooltipEditText="Convert to Member",this.tooltipDeleteText="Delete",this.tooltipConvertedText="Already Converted to Member",this.memberEnquiryList=[],this.filteredList=[],this.pageRange=[],this.currentPage=1,this.itemsPerPage=10,this.isLoading=!1,this.searchTerm=""}ngOnInit(){this.loadMemberEnquiryList()}getPlanName(t){return t?typeof t=="object"&&t.planName?t.planName:typeof t=="string"||typeof t=="number"?t.toString():"N/A":"N/A"}loadMemberEnquiryList(){return S(this,null,function*(){if(!this.isLoading){this.isLoading=!0;try{let t=yield this.memberEnquiryService.listMemberEnquiry("0");t.data.code===1?(this.memberEnquiryList=t.data.data,this.filterList(),this.updatePageRange()):yield C.default.fire("Error","Failed to load member enquiry list","error")}catch{yield C.default.fire("Error","An error occurred while loading the list","error")}finally{this.isLoading=!1}}})}convertToMember(t){if(this.memberEnquiryList.find(l=>l.id===t)?.isConverted){C.default.fire("Info","This enquiry has already been converted to a member.","info");return}this.router.navigate(["/members/add"],{queryParams:{enquiryId:t}})}isEnquiryConverted(t){return t.isConverted===!0}getStatusText(t){return t.isConverted?`Converted (${t.convertedMemberId||"Member ID"})`:"Pending"}filterList(){if(!this.searchTerm){this.filteredList=[...this.memberEnquiryList];return}let t=this.searchTerm.toLowerCase().trim();this.filteredList=this.memberEnquiryList.filter(i=>{let l=`${i.memberEnquiryFirstName||""} ${i.memberEnquiryLastName||""}`.toLowerCase(),f=this.getPlanName(i.memberEnquiryPlan).toLowerCase(),p=this.getStatusText(i).toLowerCase();return[f,l,(i.memberEnquiryPhoneNumber||"").toLowerCase(),(i.memberEnquiryEmail||"").toLowerCase(),p].some(le=>le.includes(t))})}updatePageRange(){let t=this.totalPages,i=Math.max(1,this.currentPage-1);Math.min(t,i+2)===t&&(i=Math.max(1,t-2)),this.pageRange=Array.from({length:Math.min(3,t)},(f,p)=>i+p)}changePage(t){t>=1&&t<=this.totalPages&&!this.isLoading&&(this.currentPage=t,this.updatePageRange())}nextPage(){this.currentPage<this.totalPages&&!this.isLoading&&this.changePage(this.currentPage+1)}previousPage(){this.currentPage>1&&!this.isLoading&&this.changePage(this.currentPage-1)}get paginatedMemberEnquiryList(){let t=(this.currentPage-1)*this.itemsPerPage;return this.filteredList.slice(t,t+this.itemsPerPage)}get totalPages(){return Math.ceil(this.filteredList.length/this.itemsPerPage)}search(){this.filterList(),this.currentPage=1,this.updatePageRange()}};m.\u0275fac=function(i){return new(i||m)(v(se),v(j))},m.\u0275cmp=q({type:m,selectors:[["app-member-enquiry"]],standalone:!0,features:[D],decls:64,vars:7,consts:[["xs","12"],[1,"mb-4"],["md","3",1,"mb-4"],[1,"position-relative"],["cFormControl","","id","searchInput","type","search","placeholder","Search Enquiries","autocomplete","off",3,"ngModelChange","input","ngModel"],["cTable","",1,"align-middle",3,"hover","striped","bordered"],["scope","col",2,"width","70px"],["scope","col"],["scope","col",2,"width","120px"],[3,"ngClass",4,"ngFor","ngForOf"],[4,"ngIf"],["aria-label","Member enquiry navigation",4,"ngIf"],[3,"ngClass"],[1,"badge",3,"ngClass"],["cButton","","color","btn-transparent","cTooltipPlacement","top",1,"btn-sm","border-0","py-0",3,"click","ngClass","disabled","cTooltip"],["size","xl",3,"cIcon"],["colspan","8",1,"text-center","py-4"],["aria-label","Member enquiry navigation"],["cPageLink","",3,"click","ngClass"],[4,"ngFor","ngForOf"]],template:function(i,l){i&1&&(n(0,"c-row"),e(1,`
  `),n(2,"c-col",0),e(3,`
    `),n(4,"c-card",1),e(5,`
      `),n(6,"c-card-body"),e(7,`
        `),e(8,`
        `),n(9,"c-col",2),e(10,`
          `),n(11,"div",3),e(12,`
            `),n(13,"input",4),F("ngModelChange",function(p){return N(l.searchTerm,p)||(l.searchTerm=p),p}),u("input",function(){return l.search()}),r(),e(14,`
          `),r(),e(15,`
        `),r(),e(16,`

        `),e(17,`
        `),n(18,"table",5),e(19,`
          `),n(20,"thead"),e(21,`
            `),n(22,"tr"),e(23,`
              `),n(24,"th",6),e(25,"S.No"),r(),e(26,`
              `),n(27,"th",7),e(28,"Date"),r(),e(29,`
              `),n(30,"th",7),e(31,"Plan"),r(),e(32,`
              `),n(33,"th",7),e(34,"Name"),r(),e(35,`
              `),n(36,"th",7),e(37,"Phone Number"),r(),e(38,`
              `),n(39,"th",7),e(40,"Email"),r(),e(41,`
              `),n(42,"th",7),e(43,"Status"),r(),e(44,`
              `),n(45,"th",8),e(46,"Action"),r(),e(47,`
            `),r(),e(48,`
          `),r(),e(49,`
          `),n(50,"tbody"),e(51,`
            `),E(52,he,36,27,"tr",9),e(53,`
            `),E(54,Ee,5,1,"tr",10),e(55,`
          `),r(),e(56,`
        `),r(),e(57,`

        `),e(58,`
        `),E(59,fe,16,7,"c-pagination",11),e(60,`
      `),r(),e(61,`
    `),r(),e(62,`
  `),r(),e(63,`
`),r()),i&2&&(s(13),I("ngModel",l.searchTerm),s(5),c("hover",!0)("striped",!0)("bordered",!0),s(34),c("ngForOf",l.paginatedMemberEnquiryList),s(2),c("ngIf",l.paginatedMemberEnquiryList.length===0),s(5),c("ngIf",l.memberEnquiryList.length>l.itemsPerPage))},dependencies:[$,R,A,O,B,ee,W,Q,K,G,H,oe,ne,re,ae,J,z,Z,Y,X,U]});let o=m;return o})();export{Ne as MemberEnquiryComponent};
