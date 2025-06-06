import{a as de}from"./chunk-M44UXPJM.js";import"./chunk-AUROHWJP.js";import{Ja as ne,ra as ie}from"./chunk-IU3BDYHA.js";import{a as ue}from"./chunk-DVM5LER3.js";import{$ as Y,Ba as Z,Ca as ee,Da as te,Ga as oe,H as z,I as G,Ia as re,Ja as ae,La as le,Na as se,O as H,Oa as ce,P as j,ab as me,b as N,bb as ge,c as R,d as A,f as $,fa as U,g as O,ja as q,ka as J,pa as K,qa as Q,ra as X,s as W}from"./chunk-M3QMQC54.js";import{Ib as i,Jb as n,Kb as L,Ob as C,Sb as p,Tb as g,bb as s,cb as y,cc as e,dc as w,ec as b,ha as E,hc as B,ic as I,jc as D,lc as k,mc as F,nc as v,oc as V,qc as M,sa as h,sb as d,ta as _,ua as S,va as T,yb as c}from"./chunk-X7YB6HNB.js";import{f as xe,k as P}from"./chunk-AAPNLDO3.js";var x=xe(ue());var he=()=>["/blog/add"],_e=r=>["/blog/update",r],pe=r=>({disabled:r}),fe=r=>({active:r});function Ce(r,m){r&1&&L(0,"c-spinner",16)}function be(r,m){if(r&1){let a=C();i(0,"div",25),e(1,`
                  `),i(2,"a",26),p("click",function(){h(a);let o=g().$implicit,l=g();return _(l.openImage(o.blogImage))}),e(3),n(),e(4,`
                `),n()}if(r&2){let a=g().$implicit,t=g();s(3),b(`
                    `,t.getImageName(a.blogImage),`
                  `)}}function ve(r,m){r&1&&(i(0,"span",27),e(1,"No Image"),n())}function Le(r,m){if(r&1){let a=C();i(0,"tr"),e(1,`
              `),i(2,"td"),e(3),n(),e(4,`
              `),i(5,"td"),e(6),V(7,"date"),n(),e(8,`
              `),i(9,"td"),e(10),n(),e(11,`
              `),i(12,"td"),e(13,`
                `),i(14,"div",17),e(15),n(),e(16,`
              `),n(),e(17,`
              `),i(18,"td",18),e(19,`
                `),d(20,be,5,1,"div",19),e(21,`
                `),d(22,ve,2,0,"span",20),e(23,`
              `),n(),e(24,`
              `),i(25,"td"),e(26,`
                `),i(27,"a",21),e(28,`
                  `),S(),L(29,"svg",22),e(30,`
                `),n(),e(31,`
                `),T(),i(32,"a",23),p("click",function(){let o=h(a).$implicit,l=g();return _(l.deleteBlog(o.id))}),e(33,`
                  `),S(),L(34,"svg",24),e(35,`
                `),n(),e(36,`
              `),n(),e(37,`
            `),n()}if(r&2){let a=m.$implicit,t=m.index,o=g();s(3),w((o.currentPage-1)*o.itemsPerPage+t+1),s(3),w(M(7,11,a.blogDate,"mediumDate")),s(4),w(a.blogTitle),s(5),b(`
                  `,a.blogHighlight,`
                `),s(5),c("ngIf",a.blogImage),s(2),c("ngIf",!a.blogImage),s(5),c("routerLink",v(14,_e,a.id))("cTooltip",o.tooltipEditText),s(2),c("cIcon",o.icons.cilPen),s(3),c("cTooltip",o.tooltipDeleteText),s(2),c("cIcon",o.icons.cilTrash)}}function we(r,m){if(r&1&&(i(0,"tr"),e(1,`
              `),i(2,"td",28),e(3),n(),e(4,`
            `),n()),r&2){let a=g();s(3),b(`
                `,a.isLoading?"Loading...":"No blogs found",`
              `)}}function Pe(r,m){if(r&1){let a=C();i(0,"c-page-item"),e(1,`
            `),i(2,"a",30),p("click",function(){let o=h(a).$implicit,l=g(2);return _(l.changePage(o))}),e(3),n(),e(4,`
          `),n()}if(r&2){let a=m.$implicit,t=g(2);s(2),c("ngClass",v(2,fe,t.currentPage===a)),s(),b(`
              `,a,`
            `)}}function Se(r,m){if(r&1){let a=C();i(0,"c-pagination",29),e(1,`
          `),i(2,"c-page-item"),e(3,`
            `),i(4,"a",30),p("click",function(){h(a);let o=g();return _(o.previousPage())}),e(5,`
              Previous
            `),n(),e(6,`
          `),n(),e(7,`
          `),d(8,Pe,5,4,"c-page-item",13),e(9,`
          `),i(10,"c-page-item"),e(11,`
            `),i(12,"a",30),p("click",function(){h(a);let o=g();return _(o.nextPage())}),e(13,`
              Next
            `),n(),e(14,`
          `),n(),e(15,`
        `),n()}if(r&2){let a=g();s(4),c("ngClass",v(3,pe,a.currentPage===1)),s(4),c("ngForOf",a.pageRange),s(4),c("ngClass",v(5,pe,a.currentPage===a.totalPages))}}var Ae=(()=>{let m=class m{constructor(t){this.blogService=t,this.icons={cilPen:ie,cilTrash:ne},this.tooltipEditText="Edit",this.tooltipDeleteText="Delete",this.blogList=[],this.pageRange=[],this.currentPage=1,this.itemsPerPage=10,this.isLoading=!1,this.searchTerm=""}ngOnInit(){this.loadBlogList()}getImageName(t){if(!t)return"";try{let o=t.split("/"),l=o[o.length-1];return decodeURIComponent(l)}catch(o){return console.error("Error getting image name:",o),"Unknown Image"}}loadBlogList(){return P(this,null,function*(){if(!this.isLoading){this.isLoading=!0;try{let t=yield this.blogService.listBlog("0");t.data.code===1?(this.blogList=t.data.data,this.updatePageRange()):yield x.default.fire("Error","Failed to load blog list","error")}catch(t){console.error("Error loading blog list:",t),yield x.default.fire("Error","An error occurred while loading the blog list","error")}finally{this.isLoading=!1}}})}updatePageRange(){let t=this.totalPages,o=Math.max(1,this.currentPage-1);Math.min(t,o+2)===t&&(o=Math.max(1,t-2)),this.pageRange=Array.from({length:Math.min(3,t)},(u,f)=>o+f)}changePage(t){t>=1&&t<=this.totalPages&&!this.isLoading&&(this.currentPage=t,this.updatePageRange())}nextPage(){this.currentPage<this.totalPages&&!this.isLoading&&this.changePage(this.currentPage+1)}previousPage(){this.currentPage>1&&!this.isLoading&&this.changePage(this.currentPage-1)}search(){this.currentPage=1,this.updatePageRange()}openImage(t){if(!t)return;let l=t.startsWith("http")?t:`https://mastergolfclub${t}`;window.open(l,"_blank")}get paginatedBlogList(){let t=this.blogList;if(this.searchTerm){let l=this.searchTerm.toLowerCase();t=this.blogList.filter(u=>u.blogTitle.toLowerCase().includes(l)||u.blogDescription.toLowerCase().includes(l)||u.blogDate.toLowerCase().includes(l))}let o=(this.currentPage-1)*this.itemsPerPage;return t.slice(o,o+this.itemsPerPage)}get totalPages(){let t=this.searchTerm?this.blogList.filter(o=>o.blogTitle.toLowerCase().includes(this.searchTerm.toLowerCase())||o.blogDescription.toLowerCase().includes(this.searchTerm.toLowerCase())||o.blogDate.toLowerCase().includes(this.searchTerm.toLowerCase())).length:this.blogList.length;return Math.ceil(t/this.itemsPerPage)}deleteBlog(t){return P(this,null,function*(){if(this.isLoading)return;if((yield x.default.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"})).isConfirmed){this.isLoading=!0;try{(yield this.blogService.deleteBlog(t.toString())).data.code===1?(yield x.default.fire("Deleted!","Blog has been deleted.","success"),yield this.loadBlogList()):yield x.default.fire("Error","Failed to delete blog","error")}catch(l){console.error("Error deleting blog:",l),yield x.default.fire("Error","An error occurred while deleting the blog","error")}finally{this.isLoading=!1}}})}};m.\u0275fac=function(o){return new(o||m)(y(de))},m.\u0275cmp=E({type:m,selectors:[["app-list-blog"]],standalone:!0,features:[k],decls:67,vars:10,consts:[["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3"],[1,"col-auto"],["cButton","","color","primary","role","button",3,"routerLink"],["md","3",1,"mb-4"],[1,"position-relative"],["cFormControl","","id","searchInput","type","search","placeholder","Search blogs...",3,"ngModelChange","input","ngModel"],["size","sm","class","position-absolute end-0 top-50 translate-middle-y me-2",4,"ngIf"],["cTable","",1,"align-middle",3,"hover","striped","bordered"],["scope","col",2,"width","70px"],["scope","col"],["scope","col",2,"width","120px"],[4,"ngFor","ngForOf"],[4,"ngIf"],["aria-label","Blog navigation",4,"ngIf"],["size","sm",1,"position-absolute","end-0","top-50","translate-middle-y","me-2"],[2,"max-width","300px","white-space","nowrap","overflow","hidden","text-overflow","ellipsis"],[2,"width","200px"],["class","d-flex flex-column gap-2",4,"ngIf"],["class","text-muted",4,"ngIf"],["cButton","","color","btn-transparent","cTooltipPlacement","top",1,"btn-sm","text-primary","border-0","py-0",3,"routerLink","cTooltip"],["size","xl",3,"cIcon"],["cButton","","color","btn-transparent","cTooltipPlacement","top",1,"btn-sm","text-danger","border-0","py-0",3,"click","cTooltip"],["width","25",3,"cIcon"],[1,"d-flex","flex-column","gap-2"],["href","javascript:void(0)",1,"text-primary","text-decoration-none",3,"click"],[1,"text-muted"],["colspan","6",1,"text-center","py-4"],["aria-label","Blog navigation"],["cPageLink","",3,"click","ngClass"]],template:function(o,l){o&1&&(i(0,"c-col",0)(1,"c-card",1)(2,"c-card-body")(3,"form",2)(4,"div",3)(5,"a",4),e(6,"Create New Blog"),n()()()()()(),i(7,"c-row"),e(8,`
  `),i(9,"c-col",0),e(10,`
    `),i(11,"c-card",1),e(12,`
      `),i(13,"c-card-body"),e(14,`
        `),e(15,`
        `),i(16,"c-col",5),e(17,`
          `),i(18,"div",6),e(19,`
            `),i(20,"input",7),D("ngModelChange",function(f){return I(l.searchTerm,f)||(l.searchTerm=f),f}),p("input",function(){return l.search()}),n(),e(21,`
            `),d(22,Ce,1,0,"c-spinner",8),e(23,`
          `),n(),e(24,`
        `),n(),e(25,`

        `),e(26,`
        `),i(27,"table",9),e(28,`
          `),i(29,"thead"),e(30,`
            `),i(31,"tr"),e(32,`
              `),i(33,"th",10),e(34,"S.No"),n(),e(35,`
              `),i(36,"th",11),e(37,"Blog Date"),n(),e(38,`
              `),i(39,"th",11),e(40,"Blog Title"),n(),e(41,`
              `),i(42,"th",11),e(43,"Blog Highlight"),n(),e(44,`
              `),i(45,"th",11),e(46,"Blog Image"),n(),e(47,`
              `),i(48,"th",12),e(49,"Action"),n(),e(50,`
            `),n(),e(51,`
          `),n(),e(52,`
          `),i(53,"tbody"),e(54,`
            `),d(55,Le,38,16,"tr",13),e(56,`
            `),d(57,we,5,1,"tr",14),e(58,`
          `),n(),e(59,`
        `),n(),e(60,`

        `),e(61,`
        `),d(62,Se,16,7,"c-pagination",15),e(63,`
      `),n(),e(64,`
    `),n(),e(65,`
  `),n(),e(66,`
`),n()),o&2&&(s(5),c("routerLink",F(9,he)),s(15),B("ngModel",l.searchTerm),s(2),c("ngIf",l.isLoading),s(5),c("hover",!0)("striped",!0)("bordered",!0),s(28),c("ngForOf",l.paginatedBlogList),s(2),c("ngIf",l.paginatedBlogList.length===0),s(5),c("ngIf",l.blogList.length>l.itemsPerPage))},dependencies:[N,O,R,A,$,te,z,W,J,q,H,j,ge,ce,oe,re,ae,me,se,le,Y,U,G,ee,X,Q,K,Z]});let r=m;return r})();export{Ae as ListBlogComponent};
