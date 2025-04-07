import{a as me,b as le,c as _}from"./chunk-AUROHWJP.js";import{Ja as ne,ra as ie}from"./chunk-IU3BDYHA.js";import{a as ue}from"./chunk-DVM5LER3.js";import{Ca as ee,Da as te,Ga as re,H as W,I as G,Ia as ae,Na as oe,O as Y,P as z,_a as se,b as R,c as A,d as U,f as O,fa as H,g as $,ja as J,ka as K,pa as Q,qa as X,ra as Z,s as j}from"./chunk-KDWJXVH2.js";import{Ib as t,Jb as i,Kb as S,Ob as b,Sb as x,Tb as d,Z as L,bb as s,cb as T,cc as e,dc as u,ec as v,fc as I,ha as w,hc as F,ic as D,jc as N,lc as k,nc as y,oc as V,qc as B,sa as h,sb as f,ta as E,ua as C,va as M,yb as c}from"./chunk-X7YB6HNB.js";import{f as pe,k as q}from"./chunk-AAPNLDO3.js";var g=pe(ue());var ce=(()=>{let m=class m{constructor(){this.apiUrl=new me().getUrl(le),this.lists=this.apiUrl+"memberEnquiry/0/listing/",this.processing=this.apiUrl+"memberEnquiry/0/processing/",this.deletion=this.apiUrl+"memberEnquiry/0/deletion/"}listMemberEnquiry(n="0"){return _.get(this.lists.replace("0",n))}processMemberEnquiry(n,r="0"){return _.post(this.processing.replace("0",r),n)}deleteMemberEnquiry(n){return _.get(this.deletion.replace("0",n))}};m.\u0275fac=function(r){return new(r||m)},m.\u0275prov=L({token:m,factory:m.\u0275fac,providedIn:"root"});let a=m;return a})();var he=a=>["/member-enquiry/update",a],de=a=>({disabled:a}),Ee=a=>({active:a});function fe(a,m){if(a&1){let o=b();t(0,"tr"),e(1,`
              `),t(2,"td"),e(3),i(),e(4,`
              `),t(5,"td"),e(6),V(7,"date"),i(),e(8,`
              `),t(9,"td"),e(10),i(),e(11,`
              `),t(12,"td"),e(13),i(),e(14,`
              `),t(15,"td"),e(16),i(),e(17,`
              `),t(18,"td"),e(19),i(),e(20,`
              `),t(21,"td"),e(22),i(),e(23,`
              `),t(24,"td"),e(25,`
                `),t(26,"a",12),e(27,`
                  `),C(),S(28,"svg",13),e(29,`
                `),i(),e(30,`
                `),M(),t(31,"a",14),x("click",function(){let r=h(o).$implicit,l=d();return E(l.deleteMemberEnquiry(r.id))}),e(32,`
                  `),C(),S(33,"svg",15),e(34,`
                `),i(),e(35,`
              `),i(),e(36,`
            `),i()}if(a&2){let o=m.$implicit,n=m.index,r=d();s(3),u((r.currentPage-1)*r.itemsPerPage+n+1),s(3),u(B(7,13,o.memberEnquiryDate,"mediumDate")),s(4),u(o.memberEnquiryPlan),s(3),I("",o.memberEnquiryFirstName," ",o.memberEnquiryLastName,""),s(3),u(o.memberEnquiryPhoneNumber),s(3),u(o.memberEnquiryEmail),s(3),u(o.memberEnquiryTown),s(4),c("routerLink",y(16,he,o.id))("cTooltip",r.tooltipEditText),s(2),c("cIcon",r.icons.cilPen),s(3),c("cTooltip",r.tooltipDeleteText),s(2),c("cIcon",r.icons.cilTrash)}}function ye(a,m){if(a&1&&(t(0,"tr"),e(1,`
              `),t(2,"td",16),e(3),i(),e(4,`
            `),i()),a&2){let o=d();s(3),v(`
                `,o.isLoading?"Loading...":"No enquiries found",`
              `)}}function be(a,m){if(a&1){let o=b();t(0,"c-page-item"),e(1,`
            `),t(2,"a",18),x("click",function(){let r=h(o).$implicit,l=d(2);return E(l.changePage(r))}),e(3),i(),e(4,`
          `),i()}if(a&2){let o=m.$implicit,n=d(2);s(2),c("ngClass",y(2,Ee,n.currentPage===o)),s(),v(`
              `,o,`
            `)}}function _e(a,m){if(a&1){let o=b();t(0,"c-pagination",17),e(1,`
          `),t(2,"c-page-item"),e(3,`
            `),t(4,"a",18),x("click",function(){h(o);let r=d();return E(r.previousPage())}),e(5,`
              Previous
            `),i(),e(6,`
          `),i(),e(7,`
          `),f(8,be,5,4,"c-page-item",9),e(9,`
          `),t(10,"c-page-item"),e(11,`
            `),t(12,"a",18),x("click",function(){h(o);let r=d();return E(r.nextPage())}),e(13,`
              Next
            `),i(),e(14,`
          `),i(),e(15,`
        `),i()}if(a&2){let o=d();s(4),c("ngClass",y(3,de,o.currentPage===1)),s(4),c("ngForOf",o.pageRange),s(4),c("ngClass",y(5,de,o.currentPage===o.totalPages))}}var De=(()=>{let m=class m{constructor(n){this.memberEnquiryService=n,this.icons={cilPen:ie,cilTrash:ne},this.tooltipEditText="Edit",this.tooltipDeleteText="Delete",this.memberEnquiryList=[],this.filteredList=[],this.pageRange=[],this.currentPage=1,this.itemsPerPage=10,this.isLoading=!1,this.searchTerm=""}ngOnInit(){this.loadMemberEnquiryList()}loadMemberEnquiryList(){return q(this,null,function*(){if(!this.isLoading){this.isLoading=!0;try{let n=yield this.memberEnquiryService.listMemberEnquiry("0");n.data.code===1?(this.memberEnquiryList=n.data.data,this.filterList(),this.updatePageRange()):yield g.default.fire("Error","Failed to load member enquiry list","error")}catch{yield g.default.fire("Error","An error occurred while loading the list","error")}finally{this.isLoading=!1}}})}filterList(){if(!this.searchTerm){this.filteredList=[...this.memberEnquiryList];return}let n=this.searchTerm.toLowerCase().trim();this.filteredList=this.memberEnquiryList.filter(r=>{let l=`${r.memberEnquiryFirstName||""} ${r.memberEnquiryLastName||""}`.toLowerCase();return[(r.memberEnquiryPlan||"").toLowerCase(),l,(r.memberEnquiryPhoneNumber||"").toLowerCase(),(r.memberEnquiryEmail||"").toLowerCase(),(r.memberEnquiryTown||"").toLowerCase()].some(p=>p.includes(n))})}updatePageRange(){let n=this.totalPages,r=Math.max(1,this.currentPage-1);Math.min(n,r+2)===n&&(r=Math.max(1,n-2)),this.pageRange=Array.from({length:Math.min(3,n)},(P,p)=>r+p)}changePage(n){n>=1&&n<=this.totalPages&&!this.isLoading&&(this.currentPage=n,this.updatePageRange())}nextPage(){this.currentPage<this.totalPages&&!this.isLoading&&this.changePage(this.currentPage+1)}previousPage(){this.currentPage>1&&!this.isLoading&&this.changePage(this.currentPage-1)}get paginatedMemberEnquiryList(){let n=(this.currentPage-1)*this.itemsPerPage;return this.filteredList.slice(n,n+this.itemsPerPage)}get totalPages(){return Math.ceil(this.filteredList.length/this.itemsPerPage)}search(){this.filterList(),this.currentPage=1,this.updatePageRange()}deleteMemberEnquiry(n){return q(this,null,function*(){if(this.isLoading)return;if((yield g.default.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"})).isConfirmed){this.isLoading=!0;try{(yield this.memberEnquiryService.deleteMemberEnquiry(n.toString())).data.code===1?(yield g.default.fire("Deleted!","Member enquiry has been deleted.","success"),yield this.loadMemberEnquiryList()):yield g.default.fire("Error","Failed to delete member enquiry","error")}catch{yield g.default.fire("Error","An error occurred while deleting the member enquiry","error")}finally{this.isLoading=!1}}})}};m.\u0275fac=function(r){return new(r||m)(T(ce))},m.\u0275cmp=w({type:m,selectors:[["app-member-enquiry"]],standalone:!0,features:[k],decls:64,vars:7,consts:[["xs","12"],[1,"mb-4"],["md","3",1,"mb-4"],[1,"position-relative"],["cFormControl","","id","searchInput","type","search","placeholder","Search Enquiries","autocomplete","off",3,"ngModelChange","input","ngModel"],["cTable","",1,"align-middle",3,"hover","striped","bordered"],["scope","col",2,"width","70px"],["scope","col"],["scope","col",2,"width","120px"],[4,"ngFor","ngForOf"],[4,"ngIf"],["aria-label","Member enquiry navigation",4,"ngIf"],["cButton","","color","btn-transparent","cTooltipPlacement","top",1,"btn-sm","text-primary","border-0","py-0",3,"routerLink","cTooltip"],["size","xl",3,"cIcon"],["cButton","","color","btn-transparent","cTooltipPlacement","top",1,"btn-sm","text-danger","border-0","py-0",3,"click","cTooltip"],["width","25",3,"cIcon"],["colspan","9",1,"text-center","py-4"],["aria-label","Member enquiry navigation"],["cPageLink","",3,"click","ngClass"]],template:function(r,l){r&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`
    `),t(4,"c-card",1),e(5,`
      `),t(6,"c-card-body"),e(7,`
        `),e(8,`
        `),t(9,"c-col",2),e(10,`
          `),t(11,"div",3),e(12,`
            `),t(13,"input",4),N("ngModelChange",function(p){return D(l.searchTerm,p)||(l.searchTerm=p),p}),x("input",function(){return l.search()}),i(),e(14,`
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
              `),t(42,"th",7),e(43,"Town"),i(),e(44,`
              `),t(45,"th",8),e(46,"Action"),i(),e(47,`
            `),i(),e(48,`
          `),i(),e(49,`
          `),t(50,"tbody"),e(51,`
            `),f(52,fe,37,18,"tr",9),e(53,`
            `),f(54,ye,5,1,"tr",10),e(55,`
          `),i(),e(56,`
        `),i(),e(57,`

        `),e(58,`
        `),f(59,_e,16,7,"c-pagination",11),e(60,`
      `),i(),e(61,`
    `),i(),e(62,`
  `),i(),e(63,`
`),i()),r&2&&(s(13),F("ngModel",l.searchTerm),s(5),c("hover",!0)("striped",!0)("bordered",!0),s(34),c("ngForOf",l.paginatedMemberEnquiryList),s(2),c("ngIf",l.paginatedMemberEnquiryList.length===0),s(5),c("ngIf",l.memberEnquiryList.length>l.itemsPerPage))},dependencies:[$,R,A,U,O,te,W,j,K,J,Y,z,se,re,ae,oe,H,G,ee,Z,X,Q]});let a=m;return a})();export{De as MemberEnquiryComponent};
