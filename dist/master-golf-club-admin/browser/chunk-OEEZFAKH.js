import{a as ie}from"./chunk-XDVIP2D6.js";import"./chunk-AUROHWJP.js";import{a as oe}from"./chunk-DVM5LER3.js";import{$a as ee,Ba as W,Ga as J,Ha as f,Ia as K,Ja as Q,L as M,M as N,Oa as X,R as O,Ra as Y,S as L,U,Ua as Z,ab as te,ba as j,bb as ne,ca as B,d as A,ea as q,ga as z,h as k,ha as $,ja as H,ka as R,p as D,s as G,u as P}from"./chunk-45BFYFPT.js";import{Bb as V,Jb as t,Kb as n,Lb as x,Pb as b,Tb as y,U as E,Ub as d,_a as F,cb as l,db as u,dc as e,f as C,fc as v,ia as I,mc as T,ta as g,tb as p,ua as h,zb as s}from"./chunk-IO45J2MB.js";import{f as ae,k as _}from"./chunk-AAPNLDO3.js";var w=ae(oe());function le(o,c){o&1&&(t(0,"div",4),e(1,`
      `),t(2,"div",5),e(3,`
        `),x(4,"c-spinner",6),e(5,`
        `),t(6,"div",7),e(7,"Loading amenity data..."),n(),e(8,`
      `),n(),e(9,`
    `),n())}function me(o,c){if(o&1&&(t(0,"c-form-feedback",34),e(1),n()),o&2){let a=d(2);s("valid",!1),l(),v(`
              `,a.getErrorMessage("amenityName"),`
            `)}}function se(o,c){if(o&1&&(t(0,"c-form-feedback",34),e(1),n()),o&2){let a=d(2);s("valid",!1),l(),v(`
              `,a.getErrorMessage("amenityIcon"),`
            `)}}function ce(o,c){if(o&1){let a=b();t(0,"c-col",1),e(1,`
            `),t(2,"div",35),e(3,`
              `),t(4,"label",36),e(5,"Icon Preview:"),n(),e(6,`
              `),t(7,"div",37),e(8,`
                `),t(9,"div",38),e(10,`
                  `),x(11,"div",39),e(12,`
                `),n(),e(13,`
                `),t(14,"div",40),e(15,`
                  `),t(16,"div",41),e(17,"SVG Icon"),n(),e(18,`
                  `),t(19,"small",42),e(20,`
                    Preview of your SVG icon
                  `),n(),e(21,`
                `),n(),e(22,`
                `),t(23,"button",43),y("click",function(){g(a);let i=d(2);return h(i.clearSVG())}),e(24,`
                  `),x(25,"i",44),e(26,` Clear
                `),n(),e(27,`
              `),n(),e(28,`
            `),n(),e(29,`
          `),n()}if(o&2){let a=d(2);l(11),s("innerHTML",a.svgPreview,F)}}function de(o,c){if(o&1&&(t(0,"c-form-feedback",34),e(1),n()),o&2){let a=d(2);s("valid",!1),l(),v(`
              `,a.getErrorMessage("amenityTooltip"),`
            `)}}function pe(o,c){o&1&&x(0,"span",45)}function xe(o,c){if(o&1){let a=b();t(0,"c-card",8),e(1,`
      `),t(2,"c-card-header"),e(3,`
        `),t(4,"strong"),e(5,"Edit Amenity"),n(),e(6,`
      `),n(),e(7,`
      `),t(8,"c-card-body"),e(9,`
        `),t(10,"form",9,0),y("ngSubmit",function(){g(a);let i=d();return h(i.onSubmit())}),e(12,`

          `),e(13,`
          `),t(14,"c-col",10),e(15,`
            `),x(16,"input",11),e(17,`
            `),t(18,"label",12),e(19,"Amenity Name *"),n(),e(20,`
            `),p(21,me,2,2,"c-form-feedback",13),e(22,`
          `),n(),e(23,`

          `),e(24,`
          `),t(25,"c-col",14),e(26,`
            `),t(27,"label",15),e(28,`
              Amenity Icon (SVG) *
              `),t(29,"a",16),e(30,`
                `),x(31,"i",17),e(32,` Get from Font Awesome
              `),n(),e(33,`
            `),n(),e(34,`
            `),t(35,"textarea",18),y("input",function(i){g(a);let m=d();return h(m.onSVGInput(i))}),n(),e(36,`
            `),t(37,"div",19),e(38,`
              Copy the full SVG code from Font Awesome (right-click \u2192 Copy SVG) and paste it here.
            `),n(),e(39,`
            `),p(40,se,2,2,"c-form-feedback",13),e(41,`
          `),n(),e(42,`

          `),e(43,`
          `),p(44,ce,30,1,"c-col",20),e(45,`

          `),e(46,`
          `),t(47,"c-col",21),e(48,`
            `),x(49,"textarea",22),e(50,`
            `),t(51,"label",23),e(52,"Tooltip/Description"),n(),e(53,`
            `),p(54,de,2,2,"c-form-feedback",13),e(55,`
          `),n(),e(56,`

          `),e(57,`
          `),t(58,"c-col",1),e(59,`
            `),t(60,"c-card",24),e(61,`
              `),t(62,"c-card-header"),e(63,`
                `),t(64,"small")(65,"strong"),e(66,"How to get Font Awesome SVG Icons:"),n()(),e(67,`
              `),n(),e(68,`
              `),t(69,"c-card-body"),e(70,`
                `),t(71,"div",25),e(72,`
                  `),t(73,"div",26),e(74,`
                    `),t(75,"h6"),e(76,"Steps to get SVG:"),n(),e(77,`
                    `),t(78,"ol",27),e(79,`
                      `),t(80,"li"),e(81,"Visit "),t(82,"a",28),e(83,"Font Awesome Icons"),n()(),e(84,`
                      `),t(85,"li"),e(86,"Search for your desired icon"),n(),e(87,`
                      `),t(88,"li"),e(89,"Click on the icon to open details"),n(),e(90,`
                      `),t(91,"li"),e(92,'Right-click and select "Copy SVG"'),n(),e(93,`
                      `),t(94,"li"),e(95,"Paste the SVG code in the textarea above"),n(),e(96,`
                    `),n(),e(97,`
                  `),n(),e(98,`
                  `),t(99,"div",26),e(100,`
                    `),t(101,"h6"),e(102,"SVG Benefits:"),n(),e(103,`
                    `),t(104,"ul",27),e(105,`
                      `),t(106,"li"),e(107,"Vector-based (scales perfectly)"),n(),e(108,`
                      `),t(109,"li"),e(110,"Customizable colors via CSS"),n(),e(111,`
                      `),t(112,"li"),e(113,"Lightweight and fast loading"),n(),e(114,`
                      `),t(115,"li"),e(116,"No additional HTTP requests"),n(),e(117,`
                      `),t(118,"li"),e(119,"Consistent across all devices"),n(),e(120,`
                    `),n(),e(121,`
                  `),n(),e(122,`
                `),n(),e(123,`
                `),t(124,"div",24),e(125,`
                  `),t(126,"h6"),e(127,"Example SVG Structure:"),n(),e(128,`
                  `),t(129,"pre",29)(130,"code"),e(131,`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
  <path d="M64 32C28.7 32..."></path>
</svg>`),n()(),e(132,`
                `),n(),e(133,`
              `),n(),e(134,`
            `),n(),e(135,`
          `),n(),e(136,`

          `),e(137,`
          `),t(138,"c-col",30),e(139,`
            `),t(140,"button",31),e(141,`
              `),p(142,pe,1,0,"span",32),e(143),n(),e(144,`

            `),t(145,"button",33),y("click",function(){g(a);let i=d();return h(i.onCancel())}),e(146,`
              Cancel
            `),n(),e(147,`
          `),n(),e(148,`
        `),n(),e(149,`
      `),n(),e(150,`
    `),n()}if(o&2){let a=d();l(10),s("formGroup",a.amenityForm),l(4),s("cFormFloating",!0),l(7),s("ngIf",a.isFieldInvalid("amenityName")),l(14),V("is-invalid",a.isFieldInvalid("amenityIcon")),l(5),s("ngIf",a.isFieldInvalid("amenityIcon")),l(4),s("ngIf",a.svgPreview),l(3),s("cFormFloating",!0),l(7),s("ngIf",a.isFieldInvalid("amenityTooltip")),l(86),s("disabled",a.loading),l(2),s("ngIf",a.loading),l(),v(`
              `,a.loading?"Updating...":"Update Amenity",`
            `),l(2),s("disabled",a.loading)}}var Ee=(()=>{let c=class c{constructor(r,i,m,S,re){this.formBuilder=r,this.router=i,this.route=m,this.amenitiesService=S,this.sanitizer=re,this.loading=!1,this.loadingData=!1,this.submitted=!1,this.amenityId=null,this.amenityData=null,this.svgPreview=null,this.rawSvgContent="",this.destroy$=new C}ngOnInit(){this.initializeForm(),this.loadRouteData()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}loadRouteData(){this.route.params.pipe(E(this.destroy$)).subscribe(r=>{r.id?(this.amenityId=r.id,this.loadAmenityData()):this.redirectToAmenitiesList()})}loadAmenityData(){return _(this,null,function*(){if(this.amenityId)try{this.loadingData=!0;let r=yield this.amenitiesService.listAmenities(this.amenityId);if(r.data&&r.data.code===1&&r.data.data.length>0){let i=r.data.data[0];this.amenityData=i,this.amenityForm.patchValue({amenityName:i.amenityName||"",amenityIcon:i.amenityIcon||"",amenityTooltip:i.amenityTooltip||""}),i.amenityIcon&&(this.rawSvgContent=i.amenityIcon,this.updateSVGPreview(i.amenityIcon))}else yield this.handleDataLoadError("Amenity not found")}catch(r){console.error("Error loading amenity data:",r),yield this.handleDataLoadError("Failed to load amenity data. Please try again.")}finally{this.loadingData=!1}})}handleDataLoadError(r){return _(this,null,function*(){yield w.default.fire({title:"Error!",text:r,icon:"error",confirmButtonText:"Ok"}),this.redirectToAmenitiesList()})}redirectToAmenitiesList(){this.router.navigate(["/amenities"])}initializeForm(){this.amenityForm=this.formBuilder.group({amenityName:["",[f.required,f.minLength(2),f.maxLength(200)]],amenityIcon:["",[f.required,this.svgValidator.bind(this)]],amenityTooltip:["",[f.maxLength(500)]],hideStatus:[0]})}svgValidator(r){if(!r.value)return null;let i=r.value.trim();return!i.includes("<svg")||!i.includes("</svg>")?{invalidSvg:!0}:null}onSVGInput(r){let i=r.target.value.trim();this.rawSvgContent=i,i&&this.isValidSVG(i)?this.updateSVGPreview(i):this.svgPreview=null}isValidSVG(r){return r.includes("<svg")&&r.includes("</svg>")}updateSVGPreview(r){try{this.svgPreview=this.sanitizer.bypassSecurityTrustHtml(r)}catch(i){console.error("Error creating SVG preview:",i),this.svgPreview=null}}clearSVG(){this.amenityForm.patchValue({amenityIcon:""}),this.svgPreview=null,this.rawSvgContent=""}get f(){return this.amenityForm.controls}onSubmit(){return _(this,null,function*(){if(this.submitted=!0,this.amenityForm.invalid){Object.keys(this.amenityForm.controls).forEach(i=>{this.amenityForm.get(i)?.markAsTouched()});let r=document.querySelector(".is-invalid");r&&r.scrollIntoView({behavior:"smooth",block:"center"});return}try{this.loading=!0;let r={amenityName:this.amenityForm.value.amenityName.trim(),amenityIcon:this.amenityForm.value.amenityIcon.trim(),amenityTooltip:this.amenityForm.value.amenityTooltip?.trim()||"",hideStatus:this.amenityData?.hideStatus||0},i=yield this.amenitiesService.processAmenitiesWithSVG(r,this.amenityId);if(i.data&&i.data.code===1)yield w.default.fire({title:"Success!",text:"Amenity has been updated successfully",icon:"success",confirmButtonText:"Ok"}),this.router.navigate(["/amenities"]);else throw new Error(i.data?.message||"Unknown error occurred")}catch(r){console.error("Error updating amenity:",r);let i="Failed to update amenity";if(r.response?.data?.message)i=r.response.data.message;else if(r.response?.data?.errors){let m=r.response.data.errors;i=Object.keys(m).map(S=>`${S}: ${m[S].join(", ")}`).join(`
`)}else r.message&&(i=r.message);yield w.default.fire({title:"Error!",text:i,icon:"error",confirmButtonText:"Ok"})}finally{this.loading=!1}})}onCancel(){this.router.navigate(["/amenities"])}isFieldInvalid(r){let i=this.amenityForm.get(r);return!!(i&&i.invalid&&(i.dirty||i.touched||this.submitted))}getErrorMessage(r){let i=this.amenityForm.get(r);if(!i||!i.errors)return"";let m=i.errors;if(m.required)switch(r){case"amenityName":return"Amenity name is required";case"amenityIcon":return"SVG icon is required";default:return"This field is required"}if(m.invalidSvg)return"Please enter a valid SVG code (must contain <svg> and </svg> tags)";if(m.minlength)return`Minimum length is ${m.minlength.requiredLength} characters`;if(m.maxlength)switch(r){case"amenityName":return"Amenity name cannot exceed 200 characters";case"amenityTooltip":return"Tooltip cannot exceed 500 characters";default:return`Maximum length is ${m.maxlength.requiredLength} characters`}return"Invalid input"}};c.\u0275fac=function(i){return new(i||c)(u(ee),u(P),u(G),u(ie),u(D))},c.\u0275cmp=I({type:c,selectors:[["app-update-amenities"]],standalone:!0,features:[T],decls:11,vars:2,consts:[["form","ngForm"],["xs","12"],["class","d-flex justify-content-center align-items-center","style","min-height: 200px;",4,"ngIf"],["class","mb-4",4,"ngIf"],[1,"d-flex","justify-content-center","align-items-center",2,"min-height","200px"],[1,"text-center"],["variant","border","role","status","aria-hidden","true"],[1,"mt-2"],[1,"mb-4"],["cForm","",1,"row","g-3","needs-validation",3,"ngSubmit","formGroup"],["md","6",3,"cFormFloating"],["cFormControl","","id","amenityName","formControlName","amenityName","type","text","placeholder","Amenity Name"],["cLabel","","for","amenityName",1,"ms-2"],[3,"valid",4,"ngIf"],["md","6"],["cLabel","","for","amenityIcon",1,"form-label"],["href","https://fontawesome.com/icons","target","_blank",1,"text-primary","ms-2","text-decoration-none"],[1,"fas","fa-external-link-alt"],["cFormControl","","id","amenityIcon","formControlName","amenityIcon","placeholder","Paste your SVG code here...","rows","4",1,"font-monospace",3,"input"],[1,"form-text"],["xs","12",4,"ngIf"],["xs","12",3,"cFormFloating"],["cFormControl","","id","amenityTooltip","formControlName","amenityTooltip","placeholder","Amenity Tooltip/Description","rows","3"],["cLabel","","for","amenityTooltip",1,"ms-2"],[1,"mt-3"],[1,"row"],[1,"col-md-6"],[1,"small"],["href","https://fontawesome.com/icons","target","_blank",1,"text-primary"],[1,"small","bg-dark","text-light","p-2","rounded"],["xs","12",1,"d-flex","gap-2","mt-4"],["cButton","","color","primary","type","submit",1,"d-inline-flex","align-items-center",3,"disabled"],["class","spinner-border spinner-border-sm me-2","role","status","aria-hidden","true",4,"ngIf"],["cButton","","color","light","type","button",1,"ms-auto",3,"click","disabled"],[3,"valid"],[1,"mb-3"],[1,"form-label"],[1,"d-flex","align-items-center","gap-3","p-3","border","rounded","bg-light"],[1,"icon-preview-container"],[1,"svg-icon-preview",3,"innerHTML"],[1,"flex-grow-1"],[1,"fw-bold"],[1,"text-muted"],["type","button",1,"btn","btn-sm","btn-outline-danger",3,"click"],[1,"fas","fa-times"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm","me-2"]],template:function(i,m){i&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",1),e(3,`

    `),e(4,`
    `),p(5,le,10,0,"div",2),e(6,`

    `),e(7,`
    `),p(8,xe,151,13,"c-card",3),e(9,`
  `),n(),e(10,`
`),n()),i&2&&(l(5),s("ngIf",m.loadingData),l(3),s("ngIf",!m.loadingData))},dependencies:[A,k,R,H,O,$,U,L,ne,X,J,K,Q,Y,Z,te,j,q,z,B,M,N,W],styles:[`.icon-preview-container[_ngcontent-%COMP%] {
  width: 80px;
  height: 80px;
  border: 2px dashed #dee2e6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  overflow: hidden;
}

.svg-icon-preview[_ngcontent-%COMP%] {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.svg-icon-preview[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  fill: #0d6efd; 

}

.font-monospace[_ngcontent-%COMP%] {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.875rem;
}

.form-text[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: #6c757d;
  margin-top: 0.25rem;
}

.bg-light[_ngcontent-%COMP%] {
  background-color: #f8f9fa !important;
}

.text-primary[_ngcontent-%COMP%] {
  color: #0d6efd !important;
}

.fw-bold[_ngcontent-%COMP%] {
  font-weight: 600 !important;
}

.text-muted[_ngcontent-%COMP%] {
  color: #6c757d !important;
}

pre[_ngcontent-%COMP%] {
  white-space: pre-wrap;
  word-wrap: break-word;
}

code[_ngcontent-%COMP%] {
  font-size: 0.8rem;
}`]});let o=c;return o})();export{Ee as UpdateAmenitiesComponent};
