import{a as ee}from"./chunk-HWW645Z7.js";import"./chunk-AUROHWJP.js";import{a as ne}from"./chunk-DVM5LER3.js";import{$ as N,$a as W,Ga as j,Ha as g,I as P,Ia as R,J as T,Ja as z,O as V,Oa as $,P as B,Ra as Y,S as H,Sa as J,Ta as K,Ua as Q,aa as A,ab as X,bb as Z,c as w,d as k,da as q,fa as D,g as M,ga as L,ja as U,ka as G,r as O}from"./chunk-M3QMQC54.js";import{Ib as o,Jb as r,Kb as _,Ob as y,Sb as x,Tb as F,bb as a,cb as b,cc as e,ec as v,ha as E,lc as S,sa as h,sb as f,ta as u,yb as c}from"./chunk-X7YB6HNB.js";import{f as te,k as I}from"./chunk-AAPNLDO3.js";var C=te(ne());function ie(l,m){if(l&1&&(o(0,"c-form-feedback",18),e(1),r()),l&2){let d=F();c("valid",!1),a(),v(`
              `,d.getErrorMessage("conceptHighlight"),`
            `)}}function oe(l,m){l&1&&(o(0,"c-form-feedback",18),e(1,`
                      This field is required
                    `),r()),l&2&&c("valid",!1)}function re(l,m){l&1&&(o(0,"c-form-feedback",18),e(1,`
                      This field is required
                    `),r()),l&2&&c("valid",!1)}function ae(l,m){if(l&1){let d=y();o(0,"div",19),e(1,`

                `),o(2,"div",8),e(3,`
                  `),o(4,"h6",20),e(5),r(),e(6,`
                  `),o(7,"button",21),x("click",function(){let n=h(d).index,i=F();return u(i.removeConceptItem(n))}),e(8,`
                    `),_(9,"i",22),e(10,`
                  `),r(),e(11,`
                `),r(),e(12,`

                `),o(13,"c-row"),e(14,`
                  `),o(15,"c-col",23),e(16,`
                    `),_(17,"input",24),e(18,`
                    `),o(19,"label",25),e(20,"Heading"),r(),e(21,`
                    `),f(22,oe,2,1,"c-form-feedback",7),e(23,`
                  `),r(),e(24,`

                  `),o(25,"c-col",26),e(26,`
                    `),o(27,"textarea",27),e(28,"                    "),r(),e(29,`
                    `),o(30,"label",25),e(31,"Paragraph"),r(),e(32,`
                    `),f(33,re,2,1,"c-form-feedback",7),e(34,`
                  `),r(),e(35,`
                `),r(),e(36,`
              `),r()}if(l&2){let d=m.index,t=F();c("formGroupName",d),a(5),v("Concept Item ",d+1,""),a(2),c("disabled",t.conceptItems.length<=1),a(8),c("cFormFloating",!0),a(2),c("id","heading_"+d),a(2),c("for","heading_"+d),a(3),c("ngIf",t.isItemFieldInvalid(d,"heading")),a(3),c("cFormFloating",!0),a(2),c("id","paragraph_"+d),a(3),c("for","paragraph_"+d),a(3),c("ngIf",t.isItemFieldInvalid(d,"paragraph"))}}function ce(l,m){l&1&&_(0,"span",28)}var fe=(()=>{let m=class m{constructor(t,n,i){this.formBuilder=t,this.router=n,this.conceptService=i,this.loading=!1,this.submitted=!1}ngOnInit(){this.initializeForm()}initializeForm(){this.conceptForm=this.formBuilder.group({conceptHighlight:["",[g.required,g.maxLength(1500)]],conceptCount:[1],items:this.formBuilder.array([this.createConceptItem()]),hideStatus:[0]})}createConceptItem(){return this.formBuilder.group({heading:["",[g.required,g.maxLength(255)]],paragraph:["",[g.required,g.maxLength(1e3)]],order:[0]})}get conceptItems(){return this.conceptForm.get("items")}addConceptItem(){if(this.conceptItems.length<8){let t=this.createConceptItem();t.patchValue({order:this.conceptItems.length}),this.conceptItems.push(t),this.conceptForm.patchValue({conceptCount:this.conceptItems.length})}}removeConceptItem(t){this.conceptItems.length>1&&(this.conceptItems.removeAt(t),this.conceptForm.patchValue({conceptCount:this.conceptItems.length}),this.conceptItems.controls.forEach((n,i)=>{n.patchValue({order:i})}))}loadExistingConcept(){return I(this,null,function*(){try{this.loading=!0;let t=yield this.conceptService.listConcept();if(console.log("Load response:",t.data),t.data&&t.data.code===1){let n=t.data.data;if(!n)throw new Error("No concept data received");for(;this.conceptItems.length!==0;)this.conceptItems.removeAt(0);this.conceptForm.patchValue({conceptHighlight:n.conceptHighlight||"",conceptCount:n.conceptCount||1}),n.items&&n.items.length>0?n.items.forEach(i=>{let s=this.createConceptItem();s.patchValue({heading:i.heading||"",paragraph:i.paragraph||"",order:i.order||0}),this.conceptItems.push(s)}):this.conceptItems.push(this.createConceptItem()),yield C.default.fire({title:"Success!",text:"Existing concept loaded successfully",icon:"success",toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3})}else throw new Error(t.data?.message||"Failed to load concept data")}catch(t){console.error("Error loading concept:",t);let n=t?.response?.data?.message||t?.message||"Failed to load existing concept";yield C.default.fire({title:"Error!",text:n,icon:"error",confirmButtonText:"Ok"})}finally{this.loading=!1}})}onSubmit(){return I(this,null,function*(){if(this.submitted=!0,this.conceptForm.invalid){this.markAllFieldsAsTouched(),yield C.default.fire({title:"Validation Error!",text:"Please fill in all required fields correctly",icon:"warning",confirmButtonText:"Ok"});return}try{this.loading=!0;let t=this.conceptForm.value;if(!t.conceptHighlight?.trim())throw new Error("Concept highlight is required");if(!t.items||t.items.length===0)throw new Error("At least one concept item is required");for(let s=0;s<t.items.length;s++){let p=t.items[s];if(!p.heading?.trim())throw new Error(`Heading is required for item ${s+1}`);if(!p.paragraph?.trim())throw new Error(`Paragraph is required for item ${s+1}`)}let n={conceptHighlight:t.conceptHighlight.trim(),conceptCount:t.items.length,items:t.items.map((s,p)=>({heading:s.heading?.trim()||"",paragraph:s.paragraph?.trim()||"",order:p+1})),hideStatus:0};console.log("Sending concept data:",n);let i=yield this.conceptService.processConcept(n);if(console.log("Submit response:",i.data),i.data&&i.data.code===1)yield C.default.fire({title:"Success!",text:"Concept has been saved successfully",icon:"success",confirmButtonText:"Ok"}),this.router.navigate(["/concept"]);else{let s=i.data?.message||"Unknown error occurred";throw new Error(s)}}catch(t){console.error("Error submitting concept:",t);let n="Failed to save concept";t?.response?.data?.message?n=t.response.data.message:t?.message&&(n=t.message),yield C.default.fire({title:"Error!",text:n,icon:"error",confirmButtonText:"Ok"})}finally{this.loading=!1}})}onReset(){for(this.submitted=!1;this.conceptItems.length!==0;)this.conceptItems.removeAt(0);this.conceptForm.reset({conceptHighlight:"",conceptCount:1,hideStatus:0}),this.conceptItems.push(this.createConceptItem())}markAllFieldsAsTouched(){Object.keys(this.conceptForm.controls).forEach(t=>{this.conceptForm.get(t)?.markAsTouched()}),this.conceptItems.controls.forEach(t=>{let n=t;Object.keys(n.controls).forEach(i=>{n.get(i)?.markAsTouched()})})}isFieldInvalid(t){let n=this.conceptForm.get(t);return!!(n&&n.invalid&&(n.dirty||n.touched||this.submitted))}isItemFieldInvalid(t,n){let i=this.conceptItems.at(t).get(n);return!!(i&&i.invalid&&(i.dirty||i.touched||this.submitted))}getErrorMessage(t){let n=this.conceptForm.get(t);return!n||!n.errors?"":n.errors.required?"This field is required":n.errors.maxlength?`Maximum length is ${n.errors.maxlength.requiredLength} characters`:"Invalid input"}};m.\u0275fac=function(n){return new(n||m)(b(W),b(O),b(ee))},m.\u0275cmp=E({type:m,selectors:[["app-update-concept"]],standalone:!0,features:[S],decls:71,vars:11,consts:[["form","ngForm"],["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3","needs-validation",3,"ngSubmit","formGroup"],["md","12",3,"cFormFloating"],["cFormControl","","id","conceptHighlight","formControlName","conceptHighlight","placeholder","Concept Highlight","rows","3"],["cLabel","","for","conceptHighlight",1,"ms-2"],[3,"valid",4,"ngIf"],[1,"d-flex","justify-content-between","align-items-center","mb-3"],["type","button","cButton","","color","success","size","sm",3,"click","disabled"],[1,"fas","fa-plus","me-1"],["formArrayName","items"],["class","concept-item-card mb-4 p-3 border rounded",3,"formGroupName",4,"ngFor","ngForOf"],[1,"d-flex","gap-2"],["cButton","","color","primary","type","submit",1,"me-1",3,"disabled"],["class","spinner-border spinner-border-sm me-2",4,"ngIf"],["cButton","","color","secondary","type","button",3,"click","disabled"],["cButton","","color","info","type","button",3,"click","disabled"],[3,"valid"],[1,"concept-item-card","mb-4","p-3","border","rounded",3,"formGroupName"],[1,"mb-0"],["type","button","cButton","","color","danger","size","sm","variant","outline",3,"click","disabled"],[1,"fas","fa-trash"],["md","4",3,"cFormFloating"],["cFormControl","","formControlName","heading","type","text","placeholder","Heading",3,"id"],["cLabel","",1,"ms-2",3,"for"],["md","8",3,"cFormFloating"],["cFormControl","","formControlName","paragraph","placeholder","Paragraph","rows","4",3,"id"],[1,"spinner-border","spinner-border-sm","me-2"]],template:function(n,i){if(n&1){let s=y();o(0,"c-row"),e(1,`
  `),o(2,"c-col",1),e(3,`
    `),o(4,"c-card",2),e(5,`
      `),o(6,"c-card-header"),e(7,`
        `),o(8,"strong"),e(9,"Create/Edit Concept"),r(),e(10,`
      `),r(),e(11,`
      `),o(12,"c-card-body"),e(13,`
        `),o(14,"form",3,0),x("ngSubmit",function(){return h(s),u(i.onSubmit())}),e(16,`

          `),e(17,`
          `),o(18,"c-col",4),e(19,`
            `),o(20,"textarea",5),e(21,"            "),r(),e(22,`
            `),o(23,"label",6),e(24,"Concept Highlight"),r(),e(25,`
            `),f(26,ie,2,2,"c-form-feedback",7),e(27,`
          `),r(),e(28,`

          `),e(29,`
          `),o(30,"c-col",1),e(31,`
            `),o(32,"div",8),e(33,`
              `),o(34,"h5"),e(35),r(),e(36,`
              `),o(37,"button",9),x("click",function(){return h(s),u(i.addConceptItem())}),e(38,`
                `),_(39,"i",10),e(40,`
                Add Concept
              `),r(),e(41,`
            `),r(),e(42,`

            `),o(43,"div",11),e(44,`
              `),f(45,ae,37,11,"div",12),e(46,`
            `),r(),e(47,`
          `),r(),e(48,`

          `),e(49,`
          `),o(50,"c-col",1),e(51,`
            `),o(52,"div",13),e(53,`
              `),o(54,"button",14),e(55,`
                `),f(56,ce,1,0,"span",15),e(57),r(),e(58,`
              `),o(59,"button",16),x("click",function(){return h(s),u(i.onReset())}),e(60,`
                Reset Form
              `),r(),e(61,`
              `),o(62,"button",17),x("click",function(){return h(s),u(i.loadExistingConcept())}),e(63,`
                Load Existing
              `),r(),e(64,`
            `),r(),e(65,`
          `),r(),e(66,`
        `),r(),e(67,`
      `),r(),e(68,`
    `),r(),e(69,`
  `),r(),e(70,`
`),r()}n&2&&(a(14),c("formGroup",i.conceptForm),a(4),c("cFormFloating",!0),a(8),c("ngIf",i.isFieldInvalid("conceptHighlight")),a(9),v("Concept Items (",i.conceptItems.length,"/8)"),a(2),c("disabled",i.conceptItems.length>=8),a(8),c("ngForOf",i.conceptItems.controls),a(9),c("disabled",i.loading),a(2),c("ngIf",i.loading),a(),v(`
                `,i.loading?"Saving...":"Save Concept",`
              `),a(2),c("disabled",i.loading),a(3),c("disabled",i.loading))},dependencies:[k,w,M,G,U,V,L,H,B,Z,$,j,R,z,Y,Q,J,K,X,N,q,D,A,P,T],styles:[".concept-item-card[_ngcontent-%COMP%]{background-color:#f8f9fa;border:1px solid #dee2e6;border-radius:.375rem;position:relative;transition:all .3s ease}.concept-item-card[_ngcontent-%COMP%]:hover{box-shadow:0 .125rem .25rem #00000013}.concept-item-card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#495057;font-weight:600}.btn-sm[_ngcontent-%COMP%]{padding:.25rem .5rem;font-size:.875rem}.spinner-border-sm[_ngcontent-%COMP%]{width:1rem;height:1rem}.d-flex.gap-2[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-right:.5rem}.d-flex.gap-2[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{margin-right:0}.is-invalid[_ngcontent-%COMP%]{border-color:#dc3545}.invalid-feedback[_ngcontent-%COMP%]{display:block}button[disabled][_ngcontent-%COMP%]{opacity:.6;cursor:not-allowed}@media (max-width: 768px){.concept-item-card[_ngcontent-%COMP%]{margin-bottom:1rem}.d-flex.gap-2[_ngcontent-%COMP%]{flex-direction:column}.d-flex.gap-2[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-right:0;margin-bottom:.5rem}.d-flex.gap-2[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{margin-bottom:0}}.concept-item-card[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideIn .3s ease-out}@keyframes _ngcontent-%COMP%_slideIn{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}"]});let l=m;return l})();export{fe as UpdateConceptComponent};
