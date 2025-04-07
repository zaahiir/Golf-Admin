import{a as se}from"./chunk-JEBHUW2V.js";import"./chunk-AUROHWJP.js";import{Ja as Z,ra as X}from"./chunk-IU3BDYHA.js";import{a as me}from"./chunk-DVM5LER3.js";import{$ as Y,$a as le,Ca as Q,Da as U,Ga as ee,H as O,I as G,Ia as te,Ja as ie,La as ne,Na as ae,O as W,Oa as re,P as j,_a as oe,b as N,c as V,d as B,fa as $,g as R,ja as z,ka as H,pa as q,qa as J,ra as K,s as A}from"./chunk-KDWJXVH2.js";import{Ib as t,Jb as i,Kb as w,Ob as C,Sb as h,Tb as p,bb as l,cb as b,cc as e,dc as g,ha as E,hc as I,ic as k,jc as D,lc as F,mc as M,nc as T,sa as P,sb as f,ta as _,ua as v,va as y,xb as S,yb as m}from"./chunk-X7YB6HNB.js";import{f as ce,k as L}from"./chunk-AAPNLDO3.js";var u=ce(me());var de=()=>["/plan/add"],pe=s=>["/plan/update",s],ge=s=>({active:s});function ue(s,c){if(s&1){let r=C();t(0,"tr"),e(1,`
              `),t(2,"td"),e(3),i(),e(4,`
              `),t(5,"td"),e(6),i(),e(7,`
              `),t(8,"td"),e(9),i(),e(10,`
              `),t(11,"td"),e(12),i(),e(13,`
              `),t(14,"td"),e(15),i(),e(16,`
              `),t(17,"td"),e(18,`
                `),t(19,"a",11),e(20,`
                  `),v(),w(21,"svg",12),e(22,`
                `),i(),e(23,`
                `),y(),t(24,"a",13),h("click",function(){let a=P(r).$implicit,o=p();return _(o.deletePlan(a.id))}),e(25,`
                  `),v(),w(26,"svg",14),e(27,`
                `),i(),e(28,`
              `),i(),e(29,`
            `),i()}if(s&2){let r=c.$implicit,n=c.index,a=p();l(3),g((a.currentPage-1)*a.itemsPerPage+n+1),l(3),g(r.planName),l(3),g(r.planType),l(3),g(r.planDuration),l(3),g(r.planPrice),l(4),m("routerLink",T(10,pe,r.id))("cTooltip",a.tooltipEditText),l(2),m("cIcon",a.icons.cilPen),l(3),m("cTooltip",a.tooltipDeleteText),l(2),m("cIcon",a.icons.cilTrash)}}function he(s,c){if(s&1){let r=C();t(0,"c-page-item"),e(1,`
            `),t(2,"a",17),h("click",function(){let a=P(r).$implicit,o=p(2);return _(o.changePage(a))}),e(3),i(),e(4,`
          `),i()}if(s&2){let r=c.$implicit,n=p(2);l(2),m("ngClass",T(2,ge,n.currentPage===r)),l(),g(r)}}function xe(s,c){if(s&1){let r=C();t(0,"c-pagination",15),e(1,`
          `),t(2,"c-page-item"),e(3,`
            `),t(4,"a",16),h("click",function(){P(r);let a=p();return _(a.previousPage())}),e(5,"Previous"),i(),e(6,`
          `),i(),e(7,`
          `),f(8,he,5,4,"c-page-item",9),e(9,`
          `),t(10,"c-page-item"),e(11,`
            `),t(12,"a",16),h("click",function(){P(r);let a=p();return _(a.nextPage())}),e(13,"Next"),i(),e(14,`
          `),i(),e(15,`
        `),i()}if(s&2){let r=p();l(4),S("aria-disabled",r.currentPage===1),l(4),m("ngForOf",r.pageRange),l(4),S("aria-disabled",r.currentPage===r.totalPages)}}var be=(()=>{let c=class c{constructor(n){this.planService=n,this.icons={cilPen:X,cilTrash:Z},this.tooltipEditText="Edit",this.tooltipDeleteText="Delete",this.planList=[],this.pageRange=[],this.currentPage=1,this.itemsPerPage=10,this.isLoading=!1,this.searchTerm=""}ngOnInit(){this.loadPlanList()}updatePageRange(){let n=this.totalPages,a=Math.max(1,this.currentPage-1);Math.min(n,a+2)===n&&(a=Math.max(1,n-2)),this.pageRange=Array.from({length:Math.min(3,n)},(d,x)=>a+x)}changePage(n){n>=1&&n<=this.totalPages&&!this.isLoading&&(this.currentPage=n,this.updatePageRange())}nextPage(){this.currentPage<this.totalPages&&!this.isLoading&&this.changePage(this.currentPage+1)}previousPage(){this.currentPage>1&&!this.isLoading&&this.changePage(this.currentPage-1)}loadPlanList(){return L(this,null,function*(){if(!this.isLoading){this.isLoading=!0;try{let n=yield this.planService.listPlan("0");n.data.code===1?(this.planList=n.data.data,this.updatePageRange()):yield u.default.fire("Error","Failed to load Plan list","error")}catch(n){console.error("Error loading Plan list:",n),yield u.default.fire("Error","An error occurred while loading the Plan list","error")}finally{this.isLoading=!1}}})}search(){this.currentPage=1,this.updatePageRange()}get paginatedPlanList(){let n=this.planList;if(this.searchTerm){let o=this.searchTerm.toLowerCase();n=this.planList.filter(d=>d.planName.toLowerCase().includes(o)||d.planType.toLowerCase().includes(o)||d.planDuration.toLowerCase().includes(o)||d.planPrice.toString().includes(o))}let a=(this.currentPage-1)*this.itemsPerPage;return n.slice(a,a+this.itemsPerPage)}get totalPages(){let n=this.searchTerm?this.planList.filter(a=>a.planName.toLowerCase().includes(this.searchTerm.toLowerCase())||a.planType.toLowerCase().includes(this.searchTerm.toLowerCase())||a.planDuration.toLowerCase().includes(this.searchTerm.toLowerCase())||a.planPrice.toString().includes(this.searchTerm.toLowerCase())).length:this.planList.length;return Math.ceil(n/this.itemsPerPage)}deletePlan(n){return L(this,null,function*(){if(this.isLoading)return;if((yield u.default.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"})).isConfirmed){this.isLoading=!0;try{(yield this.planService.deletePlan(n.toString())).data.code===1?(this.planList=this.planList.filter(d=>d.id!==n),yield u.default.fire("Deleted!","Plan has been deleted.","success"),yield this.loadPlanList()):yield u.default.fire("Error","Failed to delete Plan","error")}catch(o){console.error("Error deleting Plan:",o),yield u.default.fire("Error","An error occurred while deleting the Plan","error")}finally{this.isLoading=!1}}})}};c.\u0275fac=function(a){return new(a||c)(b(se))},c.\u0275cmp=E({type:c,selectors:[["app-list-plan"]],standalone:!0,features:[F],decls:57,vars:8,consts:[["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3"],[1,"col-auto"],["cButton","","color","primary","role","button",3,"routerLink"],["md","3",1,"mb-4","flex","justify-content-md-end"],["cFormControl","","id","validationCustom09","type","search","placeholder","search",3,"input","ngModelChange","ngModel"],["cTable","",3,"hover","striped","bordered"],["scope","col"],[4,"ngFor","ngForOf"],["aria-label","Page navigation example",4,"ngIf"],["cButton","","color","btn-transparent","role","button","cTooltipPlacement","top",1,"btn-sm","text-primary","border-0","py-0",3,"routerLink","cTooltip"],["size","xl","title","List Icon",3,"cIcon"],["cButton","","color","btn-transparent","role","button","cTooltipPlacement","top",1,"btn-sm","text-danger","border-0","py-0",3,"click","cTooltip"],["width","25","title","List Icon",3,"cIcon"],["aria-label","Page navigation example"],["cPageLink","",3,"click"],["cPageLink","",3,"click","ngClass"]],template:function(a,o){a&1&&(t(0,"c-col",0)(1,"c-card",1)(2,"c-card-body")(3,"form",2)(4,"div",3)(5,"a",4),e(6,"Create New Plan"),i()()()()()(),t(7,"c-row"),e(8,`
  `),t(9,"c-col",0),e(10,`
    `),t(11,"c-card",1),e(12,`
      `),t(13,"c-card-body"),e(14,`
        `),t(15,"c-col",5),e(16,`
          `),t(17,"input",6),h("input",function(){return o.search()}),D("ngModelChange",function(x){return k(o.searchTerm,x)||(o.searchTerm=x),x}),i(),e(18,`
        `),i(),e(19,`
        `),t(20,"table",7),e(21,`
          `),t(22,"thead"),e(23,`
            `),t(24,"tr"),e(25,`
              `),t(26,"th",8),e(27,"S.No"),i(),e(28,`
              `),t(29,"th",8),e(30,"Plan Name"),i(),e(31,`
              `),t(32,"th",8),e(33,"Plan Type"),i(),e(34,`
              `),t(35,"th",8),e(36,"Plan Duration"),i(),e(37,`
              `),t(38,"th",8),e(39,"Plan Price"),i(),e(40,`
              `),t(41,"th",8),e(42,"Action"),i(),e(43,`
            `),i(),e(44,`
          `),i(),e(45,`
          `),t(46,"tbody"),e(47,`
            `),f(48,ue,30,12,"tr",9),e(49,`
          `),i(),e(50,`
        `),i(),e(51,`
        `),f(52,xe,16,3,"c-pagination",10),e(53,`
      `),i(),e(54,`
    `),i(),e(55,`
  `),i(),e(56,`
`),i()),a&2&&(l(5),m("routerLink",M(7,de)),l(12),I("ngModel",o.searchTerm),l(3),m("hover",!0)("striped",!0)("bordered",!0),l(28),m("ngForOf",o.paginatedPlanList),l(4),m("ngIf",o.planList.length>o.itemsPerPage))},dependencies:[R,N,V,B,U,O,A,H,z,W,j,le,re,ee,te,ie,oe,ae,ne,Y,$,G,Q,K,J,q]});let s=c;return s})();export{be as ListPlanComponent};
