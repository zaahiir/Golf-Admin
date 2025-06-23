import{a as Se}from"./chunk-XDVIP2D6.js";import"./chunk-AUROHWJP.js";import{La as me,ta as se}from"./chunk-V6TNJ3ZT.js";import{a as Te}from"./chunk-DVM5LER3.js";import{Ca as le,Da as ce,Ga as pe,Ia as de,Ja as xe,K,L as Q,La as ge,Na as _e,Oa as ue,R as X,S as Z,Va as fe,Wa as he,Xa as ye,ab as ve,ba as ee,bb as Ce,c as j,d as U,ga as te,h as Y,ja as ie,ka as ne,p as q,pa as ae,qa as re,ra as oe,v as J}from"./chunk-45BFYFPT.js";import{$a as B,Db as R,Jb as n,Kb as a,Lb as f,Mb as S,Nb as P,Pb as h,Tb as u,Ub as p,Za as F,_a as D,cb as c,cc as y,db as I,dc as e,ec as E,fc as O,gc as z,hc as $,ia as k,ic as A,jc as V,kc as M,mc as H,nc as G,oc as W,ta as g,tb as d,tc as v,ua as _,va as b,wa as N,yb as C,zb as s}from"./chunk-IO45J2MB.js";import{f as Ee,k as w}from"./chunk-AAPNLDO3.js";var T=Ee(Te());var Le=()=>["/amenities/add"],be=r=>["/amenities/update",r];function we(r,m){r&1&&(n(0,"div",16),e(1,`
          `),n(2,"div",17),e(3,`
            `),n(4,"span",18),e(5,"Loading..."),a(),e(6,`
          `),a(),e(7,`
        `),a())}function Ie(r,m){if(r&1){let t=h();n(0,"div",19),e(1,`
          `),n(2,"small",20),e(3),n(4,"button",21),u("click",function(){g(t);let o=p();return _(o.clearSearch())}),e(5,"Clear"),a(),e(6,`
          `),a(),e(7,`
        `),a()}if(r&2){let t=p();c(3),z(`
            Showing `,t.filteredAmenityCount,' result(s) for "',t.searchTerm,`"
            `)}}function Ae(r,m){if(r&1&&(S(0),e(1,`
                    `),n(2,"div",32),e(3,`
                    `),a(),e(4,`
                  `),P()),r&2){let t=m.ngIf,i=p().$implicit;c(2),s("innerHTML",t,D)("title",i.tooltip||i.amenityTooltip||i.title||i.amenityName)}}function Ve(r,m){if(r&1&&(S(0),e(1,`
                      `),b(),n(2,"svg",33),e(3,`
                        `),f(4,"path",34),e(5,`
                      `),a(),e(6,`
                    `),P()),r&2){let t=p(2).$implicit,i=p(2);c(2),s("title",t.tooltip||t.amenityTooltip||t.title||t.amenityName),C("viewBox",i.getViewBox(t)),c(2),C("d",i.getIconPath(t))}}function Me(r,m){if(r&1&&(e(0,`
                    `),d(1,Ve,7,3,"ng-container",27),e(2,`
                  `)),r&2){let t=p().$implicit,i=y(19),o=p(2);c(),s("ngIf",o.getIconPath(t))("ngIfElse",i)}}function ke(r,m){if(r&1){let t=h();S(0),e(1,`
                      `),n(2,"img",35),u("error",function(o){g(t);let l=p(2).$implicit,x=p(2);return _(x.onImageError(o,l))}),a(),e(3,`
                    `),P()}if(r&2){let t=p(2).$implicit;c(2),s("src",t.icon||t.amenity_icon_url,B)("alt",t.title||t.amenityName)("title",t.tooltip||t.amenityTooltip||t.title||t.amenityName)}}function Ne(r,m){if(r&1&&(e(0,`
                    `),d(1,ke,4,3,"ng-container",27),e(2,`
                  `)),r&2){let t=p().$implicit,i=y(23);c(),s("ngIf",t.icon||t.amenity_icon_url)("ngIfElse",i)}}function Fe(r,m){if(r&1&&(S(0),e(1,`
                      `),f(2,"i",36),e(3,`
                    `),P()),r&2){let t=p(2).$implicit;c(2),R("fas "+(t.amenityIcon||t.icon_file)),s("title",t.tooltip||t.amenityTooltip||t.title||t.amenityName)}}function De(r,m){if(r&1&&(e(0,`
                    `),d(1,Fe,4,3,"ng-container",27),e(2,`
                  `)),r&2){let t=p().$implicit,i=y(27);c(),s("ngIf",t.amenityIcon||t.icon_file)("ngIfElse",i)}}function Be(r,m){if(r&1&&(e(0,`
                    `),n(1,"div",37),e(2,`
                      `),f(3,"i",38),e(4,`
                    `),a(),e(5,`
                  `)),r&2){let t=p().$implicit;c(),s("title",t.tooltip||t.amenityTooltip||t.title||t.amenityName)}}function Re(r,m){if(r&1){let t=h();n(0,"tr"),e(1,`
              `),n(2,"td"),e(3),a(),e(4,`
              `),n(5,"td"),e(6,`
                `),e(7,`
                `),n(8,"div",26),e(9,`
                  `),e(10,`
                  `),d(11,Ae,5,2,"ng-container",27),e(12,`

                  `),e(13,`
                  `),d(14,Me,3,2,"ng-template",null,0,v),e(16,`

                  `),e(17,`
                  `),d(18,Ne,3,2,"ng-template",null,1,v),e(20,`

                  `),e(21,`
                  `),d(22,De,3,2,"ng-template",null,2,v),e(24,`

                  `),e(25,`
                  `),d(26,Be,6,1,"ng-template",null,3,v),e(28,`
                `),a(),e(29,`
              `),a(),e(30,`
              `),n(31,"td"),e(32),a(),e(33,`
              `),n(34,"td"),e(35),a(),e(36,`
              `),n(37,"td"),e(38,`
                `),n(39,"a",28),e(40,`
                  `),b(),f(41,"svg",29),e(42,`
                `),a(),e(43,`
                `),N(),n(44,"a",30),u("click",function(){let o=g(t).$implicit,l=p(2);return _(l.deleteAmenity(o.id))}),e(45,`
                  `),b(),f(46,"svg",31),e(47,`
                `),a(),e(48,`
              `),a(),e(49,`
            `),a()}if(r&2){let t=m.$implicit,i=m.index,o=y(15),l=p(2);c(3),E((l.currentPage-1)*l.itemsPerPage+i+1),c(8),s("ngIf",l.getSafeIconSvg(t))("ngIfElse",o),c(21),E(t.title||t.amenityName),c(3),E(t.tooltip||t.amenityTooltip||t.title||t.amenityName),c(4),s("routerLink",W(10,be,t.id))("cTooltip",l.tooltipEditText),c(2),s("cIcon",l.icons.cilPen),c(3),s("cTooltip",l.tooltipDeleteText),c(2),s("cIcon",l.icons.cilTrash)}}function Oe(r,m){if(r&1&&(n(0,"span"),e(1),a()),r&2){let t=p(3);c(),O('No amenities found matching "',t.searchTerm,'"')}}function ze(r,m){r&1&&e(0,"No amenities available")}function $e(r,m){if(r&1&&(n(0,"tr"),e(1,`
              `),n(2,"td",39),e(3,`
                `),d(4,Oe,2,1,"span",27),e(5,`
                `),d(6,ze,1,0,"ng-template",null,4,v),e(8,`
              `),a(),e(9,`
            `),a()),r&2){let t=y(7),i=p(2);c(4),s("ngIf",i.searchTerm)("ngIfElse",t)}}function He(r,m){if(r&1&&(n(0,"table",22),e(1,`
          `),n(2,"thead"),e(3,`
            `),n(4,"tr"),e(5,`
              `),n(6,"th",23),e(7,"S.No"),a(),e(8,`
              `),n(9,"th",23),e(10,"Icon"),a(),e(11,`
              `),n(12,"th",23),e(13,"Amenity Name"),a(),e(14,`
              `),n(15,"th",23),e(16,"Tooltip"),a(),e(17,`
              `),n(18,"th",23),e(19,"Action"),a(),e(20,`
            `),a(),e(21,`
          `),a(),e(22,`
          `),n(23,"tbody"),e(24,`
            `),d(25,Re,50,12,"tr",24),e(26,`
            `),e(27,`
            `),d(28,$e,10,2,"tr",25),e(29,`
          `),a(),e(30,`
        `),a()),r&2){let t=p();s("hover",!0)("striped",!0)("bordered",!0),c(25),s("ngForOf",t.paginatedAmenityList),c(3),s("ngIf",t.paginatedAmenityList.length===0&&!t.isLoading)}}function Ge(r,m){if(r&1){let t=h();n(0,"c-page-item",50),e(1,`
              `),n(2,"a",47),u("click",function(){let o=g(t).$implicit,l=p(2);return _(l.changePage(o))}),e(3),a(),e(4,`
            `),a()}if(r&2){let t=m.$implicit,i=p(2);s("active",i.currentPage===t),c(3),E(t)}}function We(r,m){if(r&1){let t=h();n(0,"div",40),e(1,`
          `),e(2,`
          `),n(3,"div",41),e(4,`
            `),n(5,"label",42),e(6,"Items per page:"),a(),e(7,`
            `),n(8,"select",43),M("ngModelChange",function(o){g(t);let l=p();return V(l.itemsPerPage,o)||(l.itemsPerPage=o),_(o)}),u("change",function(){g(t);let o=p();return _(o.onItemsPerPageChange())}),e(9,`
              `),n(10,"option",44),e(11,"5"),a(),e(12,`
              `),n(13,"option",44),e(14,"10"),a(),e(15,`
              `),n(16,"option",44),e(17,"25"),a(),e(18,`
              `),n(19,"option",44),e(20,"50"),a(),e(21,`
            `),a(),e(22,`
          `),a(),e(23,`

          `),e(24,`
          `),n(25,"c-pagination",45),e(26,`
            `),n(27,"c-page-item",46),e(28,`
              `),n(29,"a",47),u("click",function(){g(t);let o=p();return _(o.previousPage())}),e(30,"Previous"),a(),e(31,`
            `),a(),e(32,`
            `),d(33,Ge,5,2,"c-page-item",48),e(34,`
            `),n(35,"c-page-item",46),e(36,`
              `),n(37,"a",47),u("click",function(){g(t);let o=p();return _(o.nextPage())}),e(38,"Next"),a(),e(39,`
            `),a(),e(40,`
          `),a(),e(41,`

          `),e(42,`
          `),n(43,"div",49),e(44),a(),e(45,`
        `),a()}if(r&2){let t=p();c(8),A("ngModel",t.itemsPerPage),c(2),s("value",5),c(3),s("value",10),c(3),s("value",25),c(3),s("value",50),c(8),s("disabled",t.currentPage===1),c(2),C("aria-disabled",t.currentPage===1),c(4),s("ngForOf",t.pageRange),c(2),s("disabled",t.currentPage===t.totalPages),c(2),C("aria-disabled",t.currentPage===t.totalPages),c(7),$(`
            Showing `,(t.currentPage-1)*t.itemsPerPage+1,` to
            `,t.Math.min(t.currentPage*t.itemsPerPage,t.filteredAmenityCount),` of
            `,t.filteredAmenityCount,` entries
          `)}}var ot=(()=>{let m=class m{constructor(i,o){this.amenitiesService=i,this.sanitizer=o,this.icons={cilPen:se,cilTrash:me},this.tooltipEditText="Edit Amenity",this.tooltipDeleteText="Delete Amenity",this.Math=Math,this.amenityList=[],this.pageRange=[],this.currentPage=1,this.itemsPerPage=10,this.isLoading=!1,this.searchTerm=""}ngOnInit(){this.loadAmenityList()}updatePageRange(){let i=this.totalPages;if(i<=1){this.pageRange=[];return}let o=5,l=Math.max(1,this.currentPage-Math.floor(o/2)),x=Math.min(i,l+o-1);x===i&&(l=Math.max(1,i-o+1)),this.pageRange=Array.from({length:x-l+1},(L,Pe)=>l+Pe)}changePage(i){i>=1&&i<=this.totalPages&&!this.isLoading&&i!==this.currentPage&&(this.currentPage=i,this.updatePageRange())}nextPage(){this.currentPage<this.totalPages&&!this.isLoading&&this.changePage(this.currentPage+1)}previousPage(){this.currentPage>1&&!this.isLoading&&this.changePage(this.currentPage-1)}onItemsPerPageChange(){this.currentPage=1,this.updatePageRange()}loadAmenityList(){return w(this,null,function*(){if(!this.isLoading){this.isLoading=!0;try{let i;try{i=yield this.amenitiesService.getAllAmenities()}catch{console.log("Using fallback listing endpoint"),i=yield this.amenitiesService.listAmenities("0")}if(i.data.code===1)this.amenityList=i.data.data,this.currentPage=1,this.updatePageRange();else throw new Error(i.data.message||"Failed to load amenities")}catch(i){console.error("Error loading amenity list:",i),yield T.default.fire({title:"Error",text:"An error occurred while loading the amenity list",icon:"error",confirmButtonText:"Ok"})}finally{this.isLoading=!1}}})}search(){this.currentPage=1,this.updatePageRange()}clearSearch(){this.searchTerm="",this.search()}get filteredAmenities(){if(!this.searchTerm)return this.amenityList;let i=this.searchTerm.toLowerCase();return this.amenityList.filter(o=>{let l=o.title||o.amenityName||"",x=o.tooltip||o.amenityTooltip||"";return l.toLowerCase().includes(i)||x.toLowerCase().includes(i)})}get filteredAmenityCount(){return this.filteredAmenities.length}get paginatedAmenityList(){let i=this.filteredAmenities,o=(this.currentPage-1)*this.itemsPerPage;return i.slice(o,o+this.itemsPerPage)}get totalPages(){return Math.ceil(this.filteredAmenityCount/this.itemsPerPage)}onImageError(i,o){i.target.style.display="none"}onSvgError(i,o){console.warn("SVG failed to load for amenity:",o.id),i.target.style.display="none"}getSafeIconSvg(i){let o=i.icon_svg||i.amenity_icon_svg;if(!o)return null;try{let l=this.sanitizer.sanitize(F.HTML,o);if(l){let x=l;return!x.includes("width=")&&!x.includes("height=")&&(x=x.replace("<svg",'<svg width="24" height="24"')),x.includes("class=")||(x=x.replace("<svg",'<svg class="amenity-icon-svg"')),this.sanitizer.bypassSecurityTrustHtml(x)}}catch(l){console.warn("Error sanitizing SVG for amenity:",i.id,l)}return null}getIconPath(i){return i.icon_path||i.amenity_icon_path||""}getViewBox(i){return i.viewbox||"0 0 448 512"}hasIcon(i){return!!(i.icon_svg||i.amenity_icon_svg||i.icon_path||i.amenity_icon_path||i.icon||i.amenity_icon_url||i.amenityIcon)}deleteAmenity(i){return w(this,null,function*(){if(this.isLoading)return;if((yield T.default.fire({title:"Are you sure?",text:"This action cannot be undone!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed){this.isLoading=!0;try{let l=yield this.amenitiesService.deleteAmenities(i.toString());if(l.data.code===1)yield T.default.fire({title:"Deleted!",text:"Amenity has been deleted successfully.",icon:"success",confirmButtonText:"Ok"}),yield this.loadAmenityList();else throw new Error(l.data.message||"Failed to delete amenity")}catch(l){console.error("Error deleting amenity:",l),yield T.default.fire({title:"Error",text:"An error occurred while deleting the amenity",icon:"error",confirmButtonText:"Ok"})}finally{this.isLoading=!1}}})}};m.\u0275fac=function(o){return new(o||m)(I(Se),I(q))},m.\u0275cmp=k({type:m,selectors:[["app-list-amenities"]],standalone:!0,features:[H],decls:36,vars:7,consts:[["tryPathSvg",""],["tryImageIcon",""],["tryFallbackIcon",""],["noIcon",""],["noData",""],["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3"],[1,"col-auto"],["cButton","","color","primary","role","button",3,"routerLink"],["md","3",1,"mb-4","flex","justify-content-md-end"],["cFormControl","","id","searchInput","type","search","placeholder","Search amenities...",3,"input","ngModelChange","ngModel"],["class","text-center",4,"ngIf"],["class","mb-3",4,"ngIf"],["cTable","",3,"hover","striped","bordered",4,"ngIf"],["class","d-flex justify-content-between align-items-center mt-3",4,"ngIf"],[1,"text-center"],["role","status",1,"spinner-border"],[1,"visually-hidden"],[1,"mb-3"],[1,"text-muted"],["type","button",1,"btn","btn-link","btn-sm","p-0","ms-2",3,"click"],["cTable","",3,"hover","striped","bordered"],["scope","col"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"amenity-icon-container"],[4,"ngIf","ngIfElse"],["cButton","","color","btn-transparent","role","button","cTooltipPlacement","top",1,"btn-sm","text-primary","border-0","py-0",3,"routerLink","cTooltip"],["size","xl","title","Edit",3,"cIcon"],["cButton","","color","btn-transparent","role","button","cTooltipPlacement","top",1,"btn-sm","text-danger","border-0","py-0",3,"click","cTooltip"],["width","25","title","Delete",3,"cIcon"],[3,"innerHTML","title"],["width","24","height","24",1,"amenity-icon-svg",3,"title"],["fill","currentColor"],[1,"amenity-icon-img",3,"error","src","alt","title"],[1,"amenity-icon-font",3,"title"],[1,"amenity-icon-placeholder",3,"title"],[1,"fas","fa-cube"],["colspan","5",1,"text-center"],[1,"d-flex","justify-content-between","align-items-center","mt-3"],[1,"d-flex","align-items-center"],["for","itemsPerPage",1,"form-label","me-2"],["id","itemsPerPage",1,"form-select","form-select-sm",2,"width","auto",3,"ngModelChange","change","ngModel"],[3,"value"],["aria-label","Page navigation"],[3,"disabled"],["cPageLink","",3,"click"],[3,"active",4,"ngFor","ngForOf"],[1,"text-muted","small"],[3,"active"]],template:function(o,l){o&1&&(n(0,"c-col",5)(1,"c-card",6)(2,"c-card-body")(3,"form",7)(4,"div",8)(5,"a",9),e(6,"Create New Amenity"),a()()()()()(),n(7,"c-row"),e(8,`
  `),n(9,"c-col",5),e(10,`
    `),n(11,"c-card",6),e(12,`
      `),n(13,"c-card-body"),e(14,`
        `),e(15,`
        `),n(16,"c-col",10),e(17,`
          `),n(18,"input",11),u("input",function(){return l.search()}),M("ngModelChange",function(L){return V(l.searchTerm,L)||(l.searchTerm=L),L}),a(),e(19,`
        `),a(),e(20,`

        `),e(21,`
        `),d(22,we,8,0,"div",12),e(23,`

        `),e(24,`
        `),d(25,Ie,8,2,"div",13),e(26,`

        `),e(27,`
        `),d(28,He,31,5,"table",14),e(29,`

        `),e(30,`
        `),d(31,We,46,13,"div",15),e(32,`
      `),a(),e(33,`
    `),a(),e(34,`
  `),a(),e(35,`
`),a()),o&2&&(c(5),s("routerLink",G(6,Le)),c(13),A("ngModel",l.searchTerm),c(4),s("ngIf",l.isLoading),c(3),s("ngIf",!l.isLoading&&l.searchTerm),c(3),s("ngIf",!l.isLoading),c(3),s("ngIf",!l.isLoading&&l.totalPages>1))},dependencies:[Y,j,U,ce,K,J,ne,ie,X,Z,Ce,ue,he,ye,pe,fe,de,xe,ve,_e,ge,ee,te,Q,le,oe,re,ae]});let r=m;return r})();export{ot as ListAmenitiesComponent};
