import{a as Q}from"./chunk-DVM5LER3.js";import{$ as k,$a as $,Ga as w,Ha as d,I as E,Ia as U,Ja as G,O as T,Oa as V,P as I,Pa as O,Ra as j,S as N,Ua as z,_a as A,aa as L,ab as H,bb as J,d as h,da as R,fa as q,g as y,ga as M,ja as D,ka as B,r as _}from"./chunk-M3QMQC54.js";import{Ib as t,Jb as i,Kb as f,Sb as v,Tb as x,bb as n,cb as g,cc as e,ec as p,ha as C,lc as S,sb as u,yb as o}from"./chunk-X7YB6HNB.js";import{f as P,k as F}from"./chunk-AAPNLDO3.js";var b=P(Q());function W(a,l){if(a&1&&(t(0,"c-form-feedback",17),e(1),i()),a&2){let c=x();o("valid",!1),n(),p(`
                `,c.getErrorMessage("teeName"),`
              `)}}function X(a,l){if(a&1&&(t(0,"c-form-feedback",17),e(1),i()),a&2){let c=x();o("valid",!1),n(),p(`
                `,c.getErrorMessage("teeColor"),`
              `)}}function Y(a,l){if(a&1&&(t(0,"c-form-feedback",17),e(1),i()),a&2){let c=x();o("valid",!1),n(),p(`
                `,c.getErrorMessage("teeLength"),`
              `)}}function Z(a,l){if(a&1&&(t(0,"c-form-feedback",17),e(1),i()),a&2){let c=x();o("valid",!1),n(),p(`
                `,c.getErrorMessage("teeSlope"),`
              `)}}function ee(a,l){if(a&1&&(t(0,"c-form-feedback",17),e(1),i()),a&2){let c=x();o("valid",!1),n(),p(`
                `,c.getErrorMessage("teeRating"),`
              `)}}var ue=(()=>{let l=class l{constructor(s,r){this.formBuilder=s,this.router=r,this.loading=!1,this.submitted=!1}ngOnInit(){this.initializeForm()}initializeForm(){this.teeForm=this.formBuilder.group({teeName:["",[d.required,d.minLength(2)]],teeColor:["",[d.required,d.minLength(3)]],teeLength:["",[d.required,d.min(0)]],teeSlope:["",[d.required,d.min(0)]],teeRating:["",[d.required,d.min(0)]]})}get f(){return this.teeForm.controls}onSubmit(){return F(this,null,function*(){if(this.submitted=!0,!this.teeForm.invalid)try{this.loading=!0,yield b.default.fire({title:"Success!",text:"Tee has been created successfully",icon:"success",confirmButtonText:"Ok"}),this.router.navigate(["/tees"])}catch(s){console.error("Error creating tee:",s),yield b.default.fire({title:"Error!",text:"Failed to create tee",icon:"error",confirmButtonText:"Ok"})}finally{this.loading=!1}})}onReset(){this.submitted=!1,this.teeForm.reset()}isFieldInvalid(s){let r=this.teeForm.get(s);return!!(r&&r.invalid&&(r.dirty||r.touched||this.submitted))}getErrorMessage(s){let r=this.teeForm.get(s);return!r||!r.errors?"":r.errors.required?"This field is required":r.errors.minlength?`Minimum length is ${r.errors.minlength.requiredLength} characters`:r.errors.min?`Minimum value is ${r.errors.min.min}`:"Invalid input"}};l.\u0275fac=function(r){return new(r||l)(g($),g(_))},l.\u0275cmp=C({type:l,selectors:[["app-update-tee"]],standalone:!0,features:[S],decls:79,vars:14,consts:[["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3","needs-validation",3,"ngSubmit","formGroup"],["md","6",3,"cFormFloating"],["cFormControl","","id","teeName","formControlName","teeName","required","","type","text","placeholder","Tee Name"],["cLabel","","for","teeName",1,"ms-2"],[3,"valid",4,"ngIf"],["cFormControl","","id","teeColor","formControlName","teeColor","required","","type","text","placeholder","Tee Color"],["cLabel","","for","teeColor",1,"ms-2"],["cFormControl","","id","teeLength","formControlName","teeLength","required","","type","number","step","0.1","placeholder","Tee Length (yards)"],["cLabel","","for","teeLength",1,"ms-2"],["cFormControl","","id","teeSlope","formControlName","teeSlope","required","","type","number","step","0.1","placeholder","Tee Slope"],["cLabel","","for","teeSlope",1,"ms-2"],["cFormControl","","id","teeRating","formControlName","teeRating","required","","type","number","step","0.1","placeholder","Tee Rating"],["cLabel","","for","teeRating",1,"ms-2"],["cButton","","color","primary","type","submit",1,"me-1",3,"disabled"],["cButton","","color","secondary","type","button",3,"click","disabled"],[3,"valid"]],template:function(r,m){r&1&&(t(0,"c-row"),e(1,`
    `),t(2,"c-col",0),e(3,`
      `),t(4,"c-card",1),e(5,`
        `),t(6,"c-card-header"),e(7,`
          `),t(8,"strong"),e(9,"Update New Tee"),i(),e(10,`
        `),i(),e(11,`
        `),t(12,"c-card-body"),e(13,`
          `),t(14,"form",2),v("ngSubmit",function(){return m.onSubmit()}),e(15,`
            `),t(16,"c-col",3),e(17,`
              `),f(18,"input",4),e(19,`
              `),t(20,"label",5),e(21,"Tee Name"),i(),e(22,`
              `),u(23,W,2,2,"c-form-feedback",6),e(24,`
            `),i(),e(25,`
  
            `),t(26,"c-col",3),e(27,`
              `),f(28,"input",7),e(29,`
              `),t(30,"label",8),e(31,"Tee Color"),i(),e(32,`
              `),u(33,X,2,2,"c-form-feedback",6),e(34,`
            `),i(),e(35,`
  
            `),t(36,"c-col",3),e(37,`
              `),f(38,"input",9),e(39,`
              `),t(40,"label",10),e(41,"Tee Length (yards)"),i(),e(42,`
              `),u(43,Y,2,2,"c-form-feedback",6),e(44,`
            `),i(),e(45,`
  
            `),t(46,"c-col",3),e(47,`
              `),f(48,"input",11),e(49,`
              `),t(50,"label",12),e(51,"Tee Slope"),i(),e(52,`
              `),u(53,Z,2,2,"c-form-feedback",6),e(54,`
            `),i(),e(55,`
  
            `),t(56,"c-col",3),e(57,`
              `),f(58,"input",13),e(59,`
              `),t(60,"label",14),e(61,"Tee Rating"),i(),e(62,`
              `),u(63,ee,2,2,"c-form-feedback",6),e(64,`
            `),i(),e(65,`
  
            `),t(66,"c-col",0),e(67,`
              `),t(68,"button",15),e(69),i(),e(70,`
              `),t(71,"button",16),v("click",function(){return m.onReset()}),e(72,`
                Reset Form
              `),i(),e(73,`
            `),i(),e(74,`
          `),i(),e(75,`
        `),i(),e(76,`
      `),i(),e(77,`
    `),i(),e(78,`
  `),i()),r&2&&(n(14),o("formGroup",m.teeForm),n(2),o("cFormFloating",!0),n(7),o("ngIf",m.isFieldInvalid("teeName")),n(3),o("cFormFloating",!0),n(7),o("ngIf",m.isFieldInvalid("teeColor")),n(3),o("cFormFloating",!0),n(7),o("ngIf",m.isFieldInvalid("teeLength")),n(3),o("cFormFloating",!0),n(7),o("ngIf",m.isFieldInvalid("teeSlope")),n(3),o("cFormFloating",!0),n(7),o("ngIf",m.isFieldInvalid("teeRating")),n(5),o("disabled",m.loading),n(),p(`
                `,m.loading?"Saving...":"Save Tee",`
              `),n(2),o("disabled",m.loading))},dependencies:[h,y,B,D,T,M,N,I,J,V,w,O,U,G,A,j,z,H,k,R,q,L,E]});let a=l;return a})();export{ue as UpdateTeeComponent};
