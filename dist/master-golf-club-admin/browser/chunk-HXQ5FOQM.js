import{a as Z}from"./chunk-DVM5LER3.js";import{$ as q,$a as Q,Ga as G,Ha as s,I as N,Ia as P,Ja as $,O as L,Oa as j,P as A,Pa as z,Ra as H,S as R,Ua as J,_a as K,aa as M,ab as U,bb as W,c as E,d as T,da as B,fa as w,g as k,ga as D,ja as V,ka as O,r as I}from"./chunk-M3QMQC54.js";import{Ib as t,Jb as i,Kb as x,Ob as S,Sb as g,Tb as p,bb as o,cb as C,cc as e,ec as u,ha as F,lc as y,sa as _,sb as f,ta as h,yb as a}from"./chunk-X7YB6HNB.js";import{f as Y,k as b}from"./chunk-AAPNLDO3.js";var v=Y(Z());function ee(r,d){if(r&1&&(t(0,"c-form-feedback",21),e(1),i()),r&2){let c=p();a("valid",!1),o(),u(`
              `,c.getErrorMessage("teeName"),`
            `)}}function te(r,d){if(r&1&&(t(0,"c-form-feedback",21),e(1),i()),r&2){let c=p();a("valid",!1),o(),u(`
              `,c.getErrorMessage("teeColor"),`
            `)}}function ie(r,d){if(r&1&&(t(0,"c-form-feedback",21),e(1),i()),r&2){let c=p();a("valid",!1),o(),u(`
              `,c.getErrorMessage("teeLength"),`
            `)}}function ne(r,d){if(r&1&&(t(0,"c-form-feedback",21),e(1),i()),r&2){let c=p();a("valid",!1),o(),u(`
              `,c.getErrorMessage("teeSlope"),`
            `)}}function re(r,d){if(r&1&&(t(0,"c-form-feedback",21),e(1),i()),r&2){let c=p();a("valid",!1),o(),u(`
              `,c.getErrorMessage("teeRating"),`
            `)}}function oe(r,d){if(r&1){let c=S();t(0,"button",22),g("click",function(){let n=_(c).$implicit,m=p();return h(m.toggleAmenity(n))}),e(1),i()}if(r&2){let c=d.$implicit,l=p();a("color",l.isAmenitySelected(c)?"primary":"secondary"),o(),u(`
                `,c,`
              `)}}function ae(r,d){if(r&1&&(t(0,"c-form-feedback",21),e(1),i()),r&2){let c=p();a("valid",!1),o(),u(`
              `,c.getErrorMessage("selectedAmenities"),`
            `)}}var ge=(()=>{let d=class d{constructor(l,n){this.formBuilder=l,this.router=n,this.loading=!1,this.submitted=!1,this.amenities=["Golf Cart","Driving Range","Pro Shop","Restaurant","Putting Green","Locker Room","Club Rental","Lessons Available","Practice Bunker","Golf Academy"]}ngOnInit(){this.initializeForm()}initializeForm(){this.teeForm=this.formBuilder.group({teeName:["",[s.required,s.minLength(2)]],teeColor:["",[s.required,s.minLength(3)]],teeLength:["",[s.required,s.min(0)]],teeSlope:["",[s.required,s.min(0)]],teeRating:["",[s.required,s.min(0)]],selectedAmenities:[[],[s.required,s.minLength(1)]]})}isAmenitySelected(l){return(this.teeForm.get("selectedAmenities")?.value||[]).includes(l)}toggleAmenity(l){let n=[...this.teeForm.get("selectedAmenities")?.value||[]],m=n.indexOf(l);m===-1?n.push(l):n.splice(m,1),this.teeForm.patchValue({selectedAmenities:n}),this.teeForm.get("selectedAmenities")?.markAsTouched()}get f(){return this.teeForm.controls}onSubmit(){return b(this,null,function*(){if(this.submitted=!0,!this.teeForm.invalid)try{this.loading=!0,yield v.default.fire({title:"Success!",text:"Tee has been created successfully",icon:"success",confirmButtonText:"Ok"}),this.router.navigate(["/tees"])}catch(l){console.error("Error creating tee:",l),yield v.default.fire({title:"Error!",text:"Failed to create tee",icon:"error",confirmButtonText:"Ok"})}finally{this.loading=!1}})}onReset(){this.submitted=!1,this.teeForm.reset()}isFieldInvalid(l){let n=this.teeForm.get(l);return!!(n&&n.invalid&&(n.dirty||n.touched||this.submitted))}getErrorMessage(l){let n=this.teeForm.get(l);return!n||!n.errors?"":n.errors.required?"This field is required":n.errors.minlength?l==="selectedAmenities"?"Please select at least one amenity":`Minimum length is ${n.errors.minlength.requiredLength} characters`:n.errors.min?`Minimum value is ${n.errors.min.min}`:"Invalid input"}};d.\u0275fac=function(n){return new(n||d)(C(Q),C(I))},d.\u0275cmp=F({type:d,selectors:[["app-create-tee"]],standalone:!0,features:[y],decls:92,vars:16,consts:[["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3","needs-validation",3,"ngSubmit","formGroup"],["md","6",3,"cFormFloating"],["cFormControl","","id","teeName","formControlName","teeName","required","","type","text","placeholder","Tee Name"],["cLabel","","for","teeName",1,"ms-2"],[3,"valid",4,"ngIf"],["cFormControl","","id","teeColor","formControlName","teeColor","required","","type","text","placeholder","Tee Color"],["cLabel","","for","teeColor",1,"ms-2"],["cFormControl","","id","teeLength","formControlName","teeLength","required","","type","number","step","0.1","placeholder","Tee Length (yards)"],["cLabel","","for","teeLength",1,"ms-2"],["cFormControl","","id","teeSlope","formControlName","teeSlope","required","","type","number","step","0.1","placeholder","Tee Slope"],["cLabel","","for","teeSlope",1,"ms-2"],["cFormControl","","id","teeRating","formControlName","teeRating","required","","type","number","step","0.1","placeholder","Tee Rating"],["cLabel","","for","teeRating",1,"ms-2"],["md","12"],["cLabel",""],[1,"amenities-container"],["cButton","","class","me-2 mb-2","variant","outline",3,"color","click",4,"ngFor","ngForOf"],["cButton","","color","primary","type","submit",1,"me-1",3,"disabled"],["cButton","","color","secondary","type","button",3,"click","disabled"],[3,"valid"],["cButton","","variant","outline",1,"me-2","mb-2",3,"click","color"]],template:function(n,m){n&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`
    `),t(4,"c-card",1),e(5,`
      `),t(6,"c-card-header"),e(7,`
        `),t(8,"strong"),e(9,"Create New Tee"),i(),e(10,`
      `),i(),e(11,`
      `),t(12,"c-card-body"),e(13,`
        `),t(14,"form",2),g("ngSubmit",function(){return m.onSubmit()}),e(15,`
          `),t(16,"c-col",3),e(17,`
            `),x(18,"input",4),e(19,`
            `),t(20,"label",5),e(21,"Tee Name"),i(),e(22,`
            `),f(23,ee,2,2,"c-form-feedback",6),e(24,`
          `),i(),e(25,`

          `),t(26,"c-col",3),e(27,`
            `),x(28,"input",7),e(29,`
            `),t(30,"label",8),e(31,"Tee Color"),i(),e(32,`
            `),f(33,te,2,2,"c-form-feedback",6),e(34,`
          `),i(),e(35,`

          `),t(36,"c-col",3),e(37,`
            `),x(38,"input",9),e(39,`
            `),t(40,"label",10),e(41,"Tee Length (yards)"),i(),e(42,`
            `),f(43,ie,2,2,"c-form-feedback",6),e(44,`
          `),i(),e(45,`

          `),t(46,"c-col",3),e(47,`
            `),x(48,"input",11),e(49,`
            `),t(50,"label",12),e(51,"Tee Slope"),i(),e(52,`
            `),f(53,ne,2,2,"c-form-feedback",6),e(54,`
          `),i(),e(55,`

          `),t(56,"c-col",3),e(57,`
            `),x(58,"input",13),e(59,`
            `),t(60,"label",14),e(61,"Tee Rating"),i(),e(62,`
            `),f(63,re,2,2,"c-form-feedback",6),e(64,`
          `),i(),e(65,`

          `),t(66,"c-col",15),e(67,`
            `),t(68,"label",16),e(69,"Amenities"),i(),e(70,`
            `),t(71,"div",17),e(72,`
              `),f(73,oe,2,2,"button",18),e(74,`
            `),i(),e(75,`
            `),f(76,ae,2,2,"c-form-feedback",6),e(77,`
          `),i(),e(78,`

          `),t(79,"c-col",0),e(80,`
            `),t(81,"button",19),e(82),i(),e(83,`
            `),t(84,"button",20),g("click",function(){return m.onReset()}),e(85,`
              Reset Form
            `),i(),e(86,`
          `),i(),e(87,`
        `),i(),e(88,`
      `),i(),e(89,`
    `),i(),e(90,`
  `),i(),e(91,`
`),i()),n&2&&(o(14),a("formGroup",m.teeForm),o(2),a("cFormFloating",!0),o(7),a("ngIf",m.isFieldInvalid("teeName")),o(3),a("cFormFloating",!0),o(7),a("ngIf",m.isFieldInvalid("teeColor")),o(3),a("cFormFloating",!0),o(7),a("ngIf",m.isFieldInvalid("teeLength")),o(3),a("cFormFloating",!0),o(7),a("ngIf",m.isFieldInvalid("teeSlope")),o(3),a("cFormFloating",!0),o(7),a("ngIf",m.isFieldInvalid("teeRating")),o(10),a("ngForOf",m.amenities),o(3),a("ngIf",m.isFieldInvalid("selectedAmenities")),o(5),a("disabled",m.loading),o(),u(`
              `,m.loading?"Saving...":"Save Tee",`
            `),o(2),a("disabled",m.loading))},dependencies:[T,k,E,O,V,L,D,R,A,W,j,G,z,P,$,K,H,J,U,q,B,w,M,N]});let r=d;return r})();export{ge as CreateTeeComponent};
