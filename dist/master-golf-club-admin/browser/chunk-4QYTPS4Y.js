import{a as te}from"./chunk-HWW645Z7.js";import"./chunk-AUROHWJP.js";import{a as ie}from"./chunk-DVM5LER3.js";import{$ as A,$a as X,Ga as R,Ha as x,I as B,Ia as Y,J as D,Ja as U,O as P,Oa as $,P as V,Ra as J,S as N,Sa as K,Ta as Q,Ua as W,aa as H,ab as Z,bb as ee,c as M,d as k,da as L,fa as q,g as T,ga as G,ja as j,ka as z,r as O}from"./chunk-M3QMQC54.js";import{Ib as i,Jb as o,Kb as f,Ob as v,Sb as b,Tb as p,bb as s,cb as E,cc as e,dc as F,ec as I,ha as w,lc as S,sa as C,sb as m,ta as _,yb as l}from"./chunk-X7YB6HNB.js";import{f as ne,k as y}from"./chunk-AAPNLDO3.js";var g=ne(ie());function oe(c,d){if(c&1){let r=v();i(0,"div",9),e(1,`
            `),i(2,"button",10),b("click",function(){C(r);let t=p();return _(t.onDelete())}),e(3,`
              `),f(4,"i",11),e(5,`
              Delete Concept
            `),o(),e(6,`
          `),o()}if(c&2){let r=p();s(2),l("disabled",r.loading)}}function re(c,d){c&1&&(i(0,"div",12),e(1,`
            `),i(2,"div",13),e(3,`
              `),i(4,"span",14),e(5,"Loading..."),o(),e(6,`
            `),o(),e(7,`
            `),i(8,"p",15),e(9,"Loading concept data..."),o(),e(10,`
          `),o())}function ae(c,d){if(c&1&&(i(0,"c-form-feedback",20),e(1),o()),c&2){let r=p(2);l("valid",!1),s(),I(`
              `,r.getErrorMessage("conceptHighlight"),`
            `)}}function ce(c,d){if(c&1&&(i(0,"c-col",16),e(1,`
            `),i(2,"textarea",17),e(3,"            "),o(),e(4,`
            `),i(5,"label",18),e(6,"Concept Highlight"),o(),e(7,`
            `),m(8,ae,2,2,"c-form-feedback",19),e(9,`
          `),o()),c&2){let r=p();l("cFormFloating",!0),s(2),l("disabled",r.loading),s(6),l("ngIf",r.isFieldInvalid("conceptHighlight"))}}function le(c,d){c&1&&(i(0,"c-form-feedback",20),e(1,`
                      This field is required
                    `),o()),c&2&&l("valid",!1)}function se(c,d){c&1&&(i(0,"c-form-feedback",20),e(1,`
                      This field is required
                    `),o()),c&2&&l("valid",!1)}function de(c,d){if(c&1){let r=v();i(0,"div",26),e(1,`

                `),i(2,"div",21),e(3,`
                  `),i(4,"h6",27),e(5),o(),e(6,`
                  `),i(7,"button",10),b("click",function(){let t=C(r).index,a=p(2);return _(a.removeConceptItem(t))}),e(8,`
                    `),f(9,"i",28),e(10,`
                  `),o(),e(11,`
                `),o(),e(12,`

                `),i(13,"c-row"),e(14,`
                  `),i(15,"c-col",29),e(16,`
                    `),f(17,"input",30),e(18,`
                    `),i(19,"label",31),e(20,"Heading"),o(),e(21,`
                    `),m(22,le,2,1,"c-form-feedback",19),e(23,`
                  `),o(),e(24,`

                  `),i(25,"c-col",32),e(26,`
                    `),i(27,"textarea",33),e(28,"                    "),o(),e(29,`
                    `),i(30,"label",31),e(31,"Paragraph"),o(),e(32,`
                    `),m(33,se,2,1,"c-form-feedback",19),e(34,`
                  `),o(),e(35,`
                `),o(),e(36,`
              `),o()}if(c&2){let r=d.index,n=p(2);l("formGroupName",r),s(5),I("Concept Item ",r+1,""),s(2),l("disabled",n.conceptItems.length<=1||n.loading),s(8),l("cFormFloating",!0),s(2),l("id","heading_"+r)("disabled",n.loading),s(2),l("for","heading_"+r),s(3),l("ngIf",n.isItemFieldInvalid(r,"heading")),s(3),l("cFormFloating",!0),s(2),l("id","paragraph_"+r)("disabled",n.loading),s(3),l("for","paragraph_"+r),s(3),l("ngIf",n.isItemFieldInvalid(r,"paragraph"))}}function me(c,d){if(c&1){let r=v();i(0,"c-col",1),e(1,`
            `),i(2,"div",21),e(3,`
              `),i(4,"h5"),e(5),o(),e(6,`
              `),i(7,"button",22),b("click",function(){C(r);let t=p();return _(t.addConceptItem())}),e(8,`
                `),f(9,"i",23),e(10,`
                Add Item
              `),o(),e(11,`
            `),o(),e(12,`

            `),i(13,"div",24),e(14,`
              `),m(15,de,37,13,"div",25),e(16,`
            `),o(),e(17,`
          `),o()}if(c&2){let r=p();s(5),I("Concept Items (",r.conceptItems.length,"/8)"),s(2),l("disabled",r.conceptItems.length>=8||r.loading),s(8),l("ngForOf",r.conceptItems.controls)}}function pe(c,d){c&1&&f(0,"span",37)}function ge(c,d){if(c&1){let r=v();i(0,"button",38),b("click",function(){C(r);let t=p(2);return _(t.loadConceptData())}),e(1,`
                `),f(2,"i",39),e(3,`
                Refresh
              `),o()}if(c&2){let r=p(2);l("disabled",r.loading)}}function ue(c,d){if(c&1&&(i(0,"c-col",1),e(1,`
            `),i(2,"div",9),e(3,`
              `),i(4,"button",34),e(5,`
                `),m(6,pe,1,0,"span",35),e(7),o(),e(8,`

              `),m(9,ge,4,1,"button",36),e(10,`
            `),o(),e(11,`
          `),o()),c&2){let r=p();s(4),l("disabled",r.loading),s(2),l("ngIf",r.loading&&r.submitted),s(),I(`
                `,r.loading&&r.submitted?"Saving...":r.isEditMode?"Update Concept":"Save Concept",`
              `),s(2),l("ngIf",r.isEditMode)}}var Ie=(()=>{let d=class d{constructor(n,t,a){this.formBuilder=n,this.router=t,this.conceptService=a,this.loading=!1,this.submitted=!1,this.isEditMode=!1,this.hasExistingData=!1,this.existingConceptId=null}ngOnInit(){this.initializeForm(),this.loadConceptData()}initializeForm(){this.conceptForm=this.formBuilder.group({conceptHighlight:["",[x.required,x.maxLength(1500)]],items:this.formBuilder.array([this.createConceptItem()])})}createConceptItem(){return this.formBuilder.group({id:[null],heading:["",[x.required,x.maxLength(255)]],paragraph:["",[x.required,x.maxLength(1e3)]],order:[0]})}get conceptItems(){return this.conceptForm.get("items")}loadConceptData(){return y(this,null,function*(){try{this.loading=!0;let n=yield this.conceptService.getConcept();if(n.data&&n.data.code===1){let t=n.data.data;if(t&&t.conceptHighlight&&t.conceptHighlight.trim()){for(this.isEditMode=!0,this.hasExistingData=!0,this.existingConceptId=t.id;this.conceptItems.length!==0;)this.conceptItems.removeAt(0);this.conceptForm.patchValue({conceptHighlight:t.conceptHighlight}),t.items&&t.items.length>0?t.items.forEach(a=>{let u=this.createConceptItem();u.patchValue({id:a.id,heading:a.heading,paragraph:a.paragraph,order:a.order}),this.conceptItems.push(u)}):this.conceptItems.push(this.createConceptItem())}else this.isEditMode=!1,this.hasExistingData=!1}}catch(n){console.error("Error loading concept data:",n),this.isEditMode=!1,this.hasExistingData=!1}finally{this.loading=!1}})}addConceptItem(){if(this.conceptItems.length<8){let n=this.createConceptItem();n.patchValue({order:this.conceptItems.length+1}),this.conceptItems.push(n)}}removeConceptItem(n){return y(this,null,function*(){if(this.conceptItems.length<=1){yield g.default.fire({title:"Cannot Delete",text:"At least one concept item is required",icon:"warning",confirmButtonText:"Ok"});return}let a=this.conceptItems.at(n).get("id")?.value;if(a&&this.isEditMode){if((yield g.default.fire({title:"Delete Item",text:"Are you sure you want to delete this concept item?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed)try{this.loading=!0;let h=yield this.conceptService.deleteConceptItem(a);if(h.data&&h.data.code===1)this.conceptItems.removeAt(n),this.updateItemOrders(),yield g.default.fire({title:"Deleted!",text:"Concept item has been deleted successfully",icon:"success",timer:2e3,showConfirmButton:!1});else throw new Error(h.data?.message||"Failed to delete item")}catch(h){console.error("Error deleting item:",h),yield g.default.fire({title:"Error!",text:h?.response?.data?.message||"Failed to delete concept item",icon:"error",confirmButtonText:"Ok"})}finally{this.loading=!1}}else this.conceptItems.removeAt(n),this.updateItemOrders()})}updateItemOrders(){this.conceptItems.controls.forEach((n,t)=>{n.patchValue({order:t+1})})}onSubmit(){return y(this,null,function*(){if(this.submitted=!0,this.conceptForm.invalid){this.markAllFieldsAsTouched(),yield g.default.fire({title:"Validation Error!",text:"Please fill in all required fields correctly",icon:"warning",confirmButtonText:"Ok"});return}try{this.loading=!0;let n=this.conceptForm.value,t={conceptHighlight:n.conceptHighlight.trim(),items:n.items.map((u,h)=>({heading:u.heading?.trim()||"",paragraph:u.paragraph?.trim()||"",order:h+1}))},a=yield this.conceptService.createOrUpdateConcept(t);if(a.data&&a.data.code===1){let u=this.isEditMode?"updated":"created";yield g.default.fire({title:"Success!",text:`Concept has been ${u} successfully`,icon:"success",confirmButtonText:"Ok"}),yield this.loadConceptData()}else throw new Error(a.data?.message||"Unknown error occurred")}catch(n){console.error("Error submitting concept:",n);let t=n?.response?.data?.message||n?.message||"Failed to save concept";yield g.default.fire({title:"Error!",text:t,icon:"error",confirmButtonText:"Ok"})}finally{this.loading=!1}})}onDelete(){return y(this,null,function*(){if(!this.hasExistingData){yield g.default.fire({title:"No Data",text:"No concept data to delete",icon:"info",confirmButtonText:"Ok"});return}if((yield g.default.fire({title:"Delete Concept",text:"Are you sure you want to delete the entire concept? This action cannot be undone.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"})).isConfirmed)try{this.loading=!0;let t=yield this.conceptService.deleteConcept();if(t.data&&t.data.code===1)yield g.default.fire({title:"Deleted!",text:"Concept has been deleted successfully",icon:"success",confirmButtonText:"Ok"}),this.resetToCreateMode();else throw new Error(t.data?.message||"Failed to delete concept")}catch(t){console.error("Error deleting concept:",t),yield g.default.fire({title:"Error!",text:t?.response?.data?.message||"Failed to delete concept",icon:"error",confirmButtonText:"Ok"})}finally{this.loading=!1}})}resetToCreateMode(){for(this.isEditMode=!1,this.hasExistingData=!1,this.existingConceptId=null,this.submitted=!1,this.conceptForm.reset();this.conceptItems.length!==0;)this.conceptItems.removeAt(0);this.conceptItems.push(this.createConceptItem())}markAllFieldsAsTouched(){Object.keys(this.conceptForm.controls).forEach(n=>{this.conceptForm.get(n)?.markAsTouched()}),this.conceptItems.controls.forEach(n=>{let t=n;Object.keys(t.controls).forEach(a=>{t.get(a)?.markAsTouched()})})}isFieldInvalid(n){let t=this.conceptForm.get(n);return!!(t&&t.invalid&&(t.dirty||t.touched||this.submitted))}isItemFieldInvalid(n,t){let a=this.conceptItems.at(n).get(t);return!!(a&&a.invalid&&(a.dirty||a.touched||this.submitted))}getErrorMessage(n){let t=this.conceptForm.get(n);return!t||!t.errors?"":t.errors.required?"This field is required":t.errors.maxlength?`Maximum length is ${t.errors.maxlength.requiredLength} characters`:"Invalid input"}};d.\u0275fac=function(t){return new(t||d)(E(X),E(O),E(te))},d.\u0275cmp=w({type:d,selectors:[["app-create-concept"]],standalone:!0,features:[S],decls:38,vars:7,consts:[["form","ngForm"],["xs","12"],[1,"mb-4"],[1,"d-flex","justify-content-between","align-items-center"],["class","d-flex gap-2",4,"ngIf"],["cForm","",1,"row","g-3","needs-validation",3,"ngSubmit","formGroup"],["class","text-center py-3",4,"ngIf"],["md","12",3,"cFormFloating",4,"ngIf"],["xs","12",4,"ngIf"],[1,"d-flex","gap-2"],["type","button","cButton","","color","danger","size","sm","variant","outline",3,"click","disabled"],[1,"fas","fa-trash","me-1"],[1,"text-center","py-3"],["role","status",1,"spinner-border","text-primary"],[1,"visually-hidden"],[1,"mt-2","text-muted"],["md","12",3,"cFormFloating"],["cFormControl","","id","conceptHighlight","formControlName","conceptHighlight","placeholder","Concept Highlight","rows","3",3,"disabled"],["cLabel","","for","conceptHighlight",1,"ms-2"],[3,"valid",4,"ngIf"],[3,"valid"],[1,"d-flex","justify-content-between","align-items-center","mb-3"],["type","button","cButton","","color","success","size","sm",3,"click","disabled"],[1,"fas","fa-plus","me-1"],["formArrayName","items"],["class","concept-item-card mb-4 p-3 border rounded",3,"formGroupName",4,"ngFor","ngForOf"],[1,"concept-item-card","mb-4","p-3","border","rounded",3,"formGroupName"],[1,"mb-0"],[1,"fas","fa-trash"],["md","4",3,"cFormFloating"],["cFormControl","","formControlName","heading","type","text","placeholder","Heading",3,"id","disabled"],["cLabel","",1,"ms-2",3,"for"],["md","8",3,"cFormFloating"],["cFormControl","","formControlName","paragraph","placeholder","Paragraph","rows","4",3,"id","disabled"],["cButton","","color","primary","type","submit",3,"disabled"],["class","spinner-border spinner-border-sm me-2",4,"ngIf"],["type","button","cButton","","color","secondary","variant","outline",3,"disabled","click",4,"ngIf"],[1,"spinner-border","spinner-border-sm","me-2"],["type","button","cButton","","color","secondary","variant","outline",3,"click","disabled"],[1,"fas","fa-sync","me-1"]],template:function(t,a){if(t&1){let u=v();i(0,"c-row"),e(1,`
  `),i(2,"c-col",1),e(3,`
    `),i(4,"c-card",2),e(5,`
      `),i(6,"c-card-header"),e(7,`
        `),i(8,"div",3),e(9,`
          `),i(10,"strong"),e(11),o(),e(12,`
          `),m(13,oe,7,1,"div",4),e(14,`
        `),o(),e(15,`
      `),o(),e(16,`
      `),i(17,"c-card-body"),e(18,`
        `),i(19,"form",5,0),b("ngSubmit",function(){return C(u),_(a.onSubmit())}),e(21,`

          `),e(22,`
          `),m(23,re,11,0,"div",6),e(24,`

          `),e(25,`
          `),m(26,ce,10,3,"c-col",7),e(27,`

          `),e(28,`
          `),m(29,me,18,3,"c-col",8),e(30,`

          `),e(31,`
          `),m(32,ue,12,4,"c-col",8),e(33,`
        `),o(),e(34,`
      `),o(),e(35,`
    `),o(),e(36,`
  `),o(),e(37,`
`),o()}t&2&&(s(11),F(a.isEditMode?"Edit Concept":"Create Concept"),s(2),l("ngIf",a.hasExistingData),s(6),l("formGroup",a.conceptForm),s(4),l("ngIf",a.loading&&!a.submitted),s(3),l("ngIf",!a.loading||a.submitted),s(3),l("ngIf",!a.loading||a.submitted),s(3),l("ngIf",!a.loading||a.submitted))},dependencies:[k,M,T,z,j,P,G,N,V,ee,$,R,Y,U,J,W,K,Q,Z,A,L,q,H,B,D],styles:[".concept-item-card[_ngcontent-%COMP%]{background-color:#f8f9fa;border:1px solid #dee2e6;border-radius:.375rem;position:relative;transition:all .3s ease}.concept-item-card[_ngcontent-%COMP%]:hover{box-shadow:0 .125rem .25rem #00000013}.concept-item-card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#495057;font-weight:600}.btn-sm[_ngcontent-%COMP%]{padding:.25rem .5rem;font-size:.875rem}.spinner-border-sm[_ngcontent-%COMP%]{width:1rem;height:1rem}.d-flex.gap-2[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-right:.5rem}.d-flex.gap-2[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{margin-right:0}.is-invalid[_ngcontent-%COMP%]{border-color:#dc3545}.invalid-feedback[_ngcontent-%COMP%]{display:block}button[disabled][_ngcontent-%COMP%]{opacity:.6;cursor:not-allowed}@media (max-width: 768px){.concept-item-card[_ngcontent-%COMP%]{margin-bottom:1rem}.d-flex.gap-2[_ngcontent-%COMP%]{flex-direction:column}.d-flex.gap-2[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-right:0;margin-bottom:.5rem}.d-flex.gap-2[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{margin-bottom:0}}.concept-item-card[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideIn .3s ease-out}@keyframes _ngcontent-%COMP%_slideIn{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}"]});let c=d;return c})();export{Ie as CreateConceptComponent};
