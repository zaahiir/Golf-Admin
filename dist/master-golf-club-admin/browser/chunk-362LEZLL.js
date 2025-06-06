import{a as Z}from"./chunk-JEBHUW2V.js";import"./chunk-AUROHWJP.js";import{a as ne}from"./chunk-DVM5LER3.js";import{$ as w,$a as W,Ga as M,Ha as s,I as D,Ia as V,Ja as j,O as N,Oa as G,P as T,Pa as $,Ra as z,S as k,Ua as H,Va as J,Wa as K,Xa as Q,_a as U,aa as I,ab as X,bb as Y,c as g,ca as q,d as _,da as O,fa as A,g as E,ga as R,ja as B,ka as L,r as P}from"./chunk-M3QMQC54.js";import{Ib as t,Jb as n,Kb as x,Sb as v,bb as l,cb as y,cc as e,ec as u,ha as h,lc as F,sb as c,yb as r}from"./chunk-X7YB6HNB.js";import{a as S,b as C,f as te,k as f}from"./chunk-AAPNLDO3.js";var b=te(ne());function ie(a,p){a&1&&(t(0,"c-form-feedback",21),e(1,`
              Please provide a plan name
            `),n()),a&2&&r("valid",!1)}function ae(a,p){a&1&&(t(0,"c-form-feedback",21),e(1,`
              Please provide a description
            `),n()),a&2&&r("valid",!1)}function re(a,p){if(a&1&&(t(0,"option",22),e(1),n()),a&2){let d=p.$implicit;r("value",d.id),l(),u(`
                `,d.planTypeName,`
              `)}}function oe(a,p){a&1&&(t(0,"c-form-feedback",21),e(1,`
              Please select a plan type
            `),n()),a&2&&r("valid",!1)}function le(a,p){if(a&1&&(t(0,"option",22),e(1),n()),a&2){let d=p.$implicit;r("value",d.id),l(),u(`
                `,d.planDurationName,`
              `)}}function me(a,p){a&1&&(t(0,"c-form-feedback",21),e(1,`
              Please select a duration
            `),n()),a&2&&r("valid",!1)}function pe(a,p){a&1&&(t(0,"c-form-feedback",21),e(1,`
              Please provide a valid price
            `),n()),a&2&&r("valid",!1)}function ce(a,p){if(a&1&&(t(0,"option",22),e(1),n()),a&2){let d=p.$implicit;r("value",d.id),l(),u(`
                `,d.planCycleName,`
              `)}}function de(a,p){a&1&&(t(0,"c-form-feedback",21),e(1,`
              Please select a billing cycle
            `),n()),a&2&&r("valid",!1)}var Fe=(()=>{let p=class p{constructor(o,m,i){this.fb=o,this.planService=m,this.router=i,this.loading=!1,this.submitted=!1,this.planTypes=[],this.planDurations=[],this.planCycles=[],this.initializeForm()}initializeForm(){this.planForm=this.fb.group({planName:["",[s.required]],planDescription:["",[s.required]],planType:["",[s.required]],planDuration:["",[s.required]],planPrice:["",[s.required,s.min(0)]],planCycle:["",[s.required]]})}ngOnInit(){return f(this,null,function*(){try{yield this.loadDropdownData()}catch{yield this.showError("Failed to load form data")}})}get f(){return this.planForm.controls}loadDropdownData(){return f(this,null,function*(){try{let[o,m,i]=yield Promise.all([this.planService.getPlanTypes(),this.planService.getPlanDurations(),this.planService.getPlanCycles()]);o?.data&&(this.planTypes=Array.isArray(o.data)?o.data:o.data.data?o.data.data:[]),m?.data&&(this.planDurations=Array.isArray(m.data)?m.data:m.data.data?m.data.data:[]),i?.data&&(this.planCycles=Array.isArray(i.data)?i.data:i.data.data?i.data.data:[])}catch(o){throw o}})}onSubmit(){return f(this,null,function*(){if(this.submitted=!0,this.planForm.invalid){Object.keys(this.planForm.controls).forEach(o=>{let m=this.planForm.get(o);m?.invalid&&m.markAsTouched()});return}try{this.loading=!0;let o=C(S({},this.planForm.value),{planType:Number(this.planForm.value.planType),planDuration:Number(this.planForm.value.planDuration),planCycle:Number(this.planForm.value.planCycle),planPrice:Number(this.planForm.value.planPrice)}),m=yield this.planService.processPlan(o,"0");if(m.data?.code===1)yield b.default.fire({title:"Success!",text:"Plan has been created successfully",icon:"success",confirmButtonText:"Ok"}),this.router.navigate(["/plans"]);else throw new Error(m.data?.message||"Failed to create plan")}catch(o){yield this.showError(o instanceof Error?o.message:"Failed to create plan")}finally{this.loading=!1}})}onReset(){this.submitted=!1,this.planForm.reset(),Object.keys(this.planForm.controls).forEach(o=>{this.planForm.get(o)?.setErrors(null)})}showError(o){return f(this,null,function*(){yield b.default.fire("Error",o,"error")})}};p.\u0275fac=function(m){return new(m||p)(y(W),y(Z),y(P))},p.\u0275cmp=h({type:p,selectors:[["app-create-plan"]],standalone:!0,features:[F],decls:114,vars:19,consts:[["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3","needs-validation",3,"ngSubmit","formGroup"],["md","6",3,"cFormFloating"],["cFormControl","","id","planName","formControlName","planName","required","","type","text","placeholder","Plan Name"],["cLabel","","for","planName",1,"ms-2"],[3,"valid",4,"ngIf"],["cFormControl","","id","planDescription","formControlName","planDescription","required","","type","text","placeholder","Plan Description"],["cLabel","","for","planDescription",1,"ms-2"],["cSelect","","id","planType","formControlName","planType","required",""],["value",""],[3,"value",4,"ngFor","ngForOf"],["cLabel","","for","planType",1,"ms-2"],["cSelect","","id","planDuration","formControlName","planDuration","required",""],["cLabel","","for","planDuration",1,"ms-2"],["cFormControl","","id","planPrice","formControlName","planPrice","required","","type","number","step","0.01","placeholder","Plan Price"],["cLabel","","for","planPrice",1,"ms-2"],["cSelect","","id","planCycle","formControlName","planCycle","required",""],["cLabel","","for","planCycle",1,"ms-2"],["cButton","","color","primary","type","submit",1,"me-1",3,"disabled"],["cButton","","color","secondary","type","button",3,"click","disabled"],[3,"valid"],[3,"value"]],template:function(m,i){m&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`
    `),t(4,"c-card",1),e(5,`
      `),t(6,"c-card-header"),e(7,`
        `),t(8,"strong"),e(9,"New Subscription Plan"),n(),e(10,`
      `),n(),e(11,`
      `),t(12,"c-card-body"),e(13,`
        `),t(14,"form",2),v("ngSubmit",function(){return i.onSubmit()}),e(15,`
          `),e(16,`
          `),t(17,"c-col",3),e(18,`
            `),x(19,"input",4),e(20,`
            `),t(21,"label",5),e(22,"Plan Name"),n(),e(23,`
            `),c(24,ie,2,1,"c-form-feedback",6),e(25,`
          `),n(),e(26,`

          `),e(27,`
          `),t(28,"c-col",3),e(29,`
            `),x(30,"input",7),e(31,`
            `),t(32,"label",8),e(33,"Plan Description"),n(),e(34,`
            `),c(35,ae,2,1,"c-form-feedback",6),e(36,`
          `),n(),e(37,`

          `),e(38,`
          `),t(39,"c-col",3),e(40,`
            `),t(41,"select",9),e(42,`
              `),t(43,"option",10),e(44,"Select Plan Type"),n(),e(45,`
              `),c(46,re,2,2,"option",11),e(47,`
            `),n(),e(48,`
            `),t(49,"label",12),e(50,"Plan Type"),n(),e(51,`
            `),c(52,oe,2,1,"c-form-feedback",6),e(53,`
          `),n(),e(54,`

          `),e(55,`
          `),t(56,"c-col",3),e(57,`
            `),t(58,"select",13),e(59,`
              `),t(60,"option",10),e(61,"Select Plan Duration"),n(),e(62,`
              `),c(63,le,2,2,"option",11),e(64,`
            `),n(),e(65,`
            `),t(66,"label",14),e(67,"Plan Duration"),n(),e(68,`
            `),c(69,me,2,1,"c-form-feedback",6),e(70,`
          `),n(),e(71,`

          `),e(72,`
          `),t(73,"c-col",3),e(74,`
            `),x(75,"input",15),e(76,`
            `),t(77,"label",16),e(78,"Plan Price"),n(),e(79,`
            `),c(80,pe,2,1,"c-form-feedback",6),e(81,`
          `),n(),e(82,`

          `),e(83,`
          `),t(84,"c-col",3),e(85,`
            `),t(86,"select",17),e(87,`
              `),t(88,"option",10),e(89,"Select Billing Cycle"),n(),e(90,`
              `),c(91,ce,2,2,"option",11),e(92,`
            `),n(),e(93,`
            `),t(94,"label",18),e(95,"Billing Cycle"),n(),e(96,`
            `),c(97,de,2,1,"c-form-feedback",6),e(98,`
          `),n(),e(99,`

          `),e(100,`
          `),t(101,"c-col",0),e(102,`
            `),t(103,"button",19),e(104),n(),e(105,`
            `),t(106,"button",20),v("click",function(){return i.onReset()}),e(107,`
              Reset Form
            `),n(),e(108,`
          `),n(),e(109,`
        `),n(),e(110,`
      `),n(),e(111,`
    `),n(),e(112,`
  `),n(),e(113,`
`),n()),m&2&&(l(14),r("formGroup",i.planForm),l(3),r("cFormFloating",!0),l(7),r("ngIf",i.f.planName.errors&&(i.f.planName.touched||i.submitted)),l(4),r("cFormFloating",!0),l(7),r("ngIf",i.f.planDescription.errors&&(i.f.planDescription.touched||i.submitted)),l(4),r("cFormFloating",!0),l(7),r("ngForOf",i.planTypes),l(6),r("ngIf",i.f.planType.errors&&(i.f.planType.touched||i.submitted)),l(4),r("cFormFloating",!0),l(7),r("ngForOf",i.planDurations),l(6),r("ngIf",i.f.planDuration.errors&&(i.f.planDuration.touched||i.submitted)),l(4),r("cFormFloating",!0),l(7),r("ngIf",i.f.planPrice.errors&&(i.f.planPrice.touched||i.submitted)),l(4),r("cFormFloating",!0),l(7),r("ngForOf",i.planCycles),l(6),r("ngIf",i.f.planCycle.errors&&(i.f.planCycle.touched||i.submitted)),l(6),r("disabled",i.loading),l(),u(`
              `,i.loading?"Saving...":"Save Plan",`
            `),l(2),r("disabled",i.loading))},dependencies:[_,E,g,L,B,N,R,k,T,Y,G,K,Q,M,$,J,V,j,U,z,H,X,w,O,A,I,q,D]});let a=p;return a})();export{Fe as CreatePlanComponent};
