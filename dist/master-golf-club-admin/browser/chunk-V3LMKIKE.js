import{a as re}from"./chunk-JEBHUW2V.js";import"./chunk-AUROHWJP.js";import{a as pe}from"./chunk-DVM5LER3.js";import{$ as A,$a as ae,Ga as $,Ha as u,I as U,Ia as H,Ja as J,O as V,Oa as K,P as q,Pa as Q,Ra as W,S as O,Sa as X,Ta as Y,Ua as Z,Va as ee,Ya as te,Za as ie,_a as ne,aa as L,c as T,ca as M,d as N,da as j,fa as B,g as w,ga as R,ja as z,ka as G,p as k,r as I}from"./chunk-KDWJXVH2.js";import{Ib as t,Jb as i,Kb as v,Ob as _,Sb as b,bb as o,cb as h,cc as e,dc as S,ec as E,ha as F,lc as D,sa as C,sb as m,ta as g,yb as l}from"./chunk-X7YB6HNB.js";import{f as oe,k as s}from"./chunk-AAPNLDO3.js";var P=oe(pe());function ce(r,p){r&1&&(t(0,"c-form-feedback",22),e(1,"Please provide a Plan Name."),i()),r&2&&l("valid",!1)}function me(r,p){r&1&&(t(0,"c-form-feedback",22),e(1,"Please provide a Plan Description."),i()),r&2&&l("valid",!1)}function de(r,p){if(r&1&&(t(0,"option",23),e(1),i()),r&2){let d=p.$implicit;l("value",d.id),o(),S(d.planTypeName)}}function se(r,p){r&1&&(t(0,"c-form-feedback",22),e(1,"Please select a Plan Type."),i()),r&2&&l("valid",!1)}function ue(r,p){if(r&1&&(t(0,"option",23),e(1),i()),r&2){let d=p.$implicit;l("value",d.id),o(),S(d.planDurationName)}}function fe(r,p){r&1&&(t(0,"c-form-feedback",22),e(1,"Please select a Plan Duration."),i()),r&2&&l("valid",!1)}function ye(r,p){r&1&&(t(0,"c-form-feedback",22),e(1,"Please provide a valid Plan Price."),i()),r&2&&l("valid",!1)}function he(r,p){if(r&1&&(t(0,"option",23),e(1),i()),r&2){let d=p.$implicit;l("value",d.id),o(),S(d.planCycleName)}}function ve(r,p){r&1&&(t(0,"c-form-feedback",22),e(1,"Please select a Plan Cycle."),i()),r&2&&l("valid",!1)}var Te=(()=>{let p=class p{constructor(a,c,n,f){this.fb=a,this.router=c,this.route=n,this.planService=f,this.customStylesValidated=!1,this.loading=!1,this.submitted=!1,this.planTypes=[],this.planDurations=[],this.planCycles=[],this.planId="",this.initializeForm()}initializeForm(){this.planForm=this.fb.group({planName:["",[u.required]],planDescription:["",[u.required]],planType:["",[u.required]],planDuration:["",[u.required]],planPrice:["",[u.required,u.min(0)]],planCycle:["",[u.required]]})}ngOnInit(){return s(this,null,function*(){try{yield Promise.all([this.loadPlanTypes(),this.loadPlanDurations(),this.loadPlanCycles()]),this.route.params.subscribe(a=>{this.planId=a.id,this.loadPlanData(this.planId)})}catch(a){console.error("Error during initialization:",a),yield this.showError("An error occurred during initialization.")}})}get f(){return this.planForm.controls}loadPlanTypes(){return s(this,null,function*(){try{let a=yield this.planService.getPlanTypes();this.planTypes=a.data}catch(a){throw console.error("Error loading plan types:",a),a}})}loadPlanDurations(){return s(this,null,function*(){try{let a=yield this.planService.getPlanDurations();this.planDurations=a.data}catch(a){throw console.error("Error loading plan durations:",a),a}})}loadPlanCycles(){return s(this,null,function*(){try{let a=yield this.planService.getPlanCycles();this.planCycles=a.data}catch(a){throw console.error("Error loading plan cycles:",a),a}})}loadPlanData(a){return s(this,null,function*(){try{let c=yield this.planService.listPlan(a);if(c.data.code===1&&c.data.data.length>0){let n=c.data.data[0],f=this.planTypes.find(y=>y.planTypeName===n.planType)?.id,x=this.planDurations.find(y=>y.planDurationName===n.planDuration)?.id,le=this.planCycles.find(y=>y.planCycleName===n.planCycle)?.id;this.planForm.patchValue({planName:n.planName,planDescription:n.planDescription,planType:f,planDuration:x,planPrice:n.planPrice,planCycle:le})}}catch(c){console.error("Error loading plan data:",c),yield this.showError("Failed to load plan data.")}})}onSubmit(){return s(this,null,function*(){if(this.customStylesValidated=!0,this.submitted=!0,this.planForm.invalid){Object.values(this.planForm.controls).forEach(a=>{a.invalid&&a.markAsTouched()});return}this.loading=!0;try{let a=this.planForm.value,c=yield this.planService.processPlan(a,this.planId);c.data.code===1?(yield P.default.fire("Updated!",c.data.message,"success"),this.router.navigate(["/plan"])):yield this.showError(c.data.message)}catch(a){console.error("Error updating plan:",a),yield this.showError("An error occurred while updating the plan.")}finally{this.loading=!1}})}onCancel(){this.router.navigate(["/plan"])}showError(a){return s(this,null,function*(){yield P.default.fire("Failed!",a,"error")})}};p.\u0275fac=function(c){return new(c||p)(h(ie),h(I),h(k),h(re))},p.\u0275cmp=F({type:p,selectors:[["app-update-plan"]],standalone:!0,features:[D],decls:108,vars:20,consts:[["customStylesForm","ngForm"],["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3","needs-validation",3,"ngSubmit","formGroup","validated"],["md","6",3,"cFormFloating"],["cFormControl","","id","planName","formControlName","planName","required","","type","text","placeholder","Plan Name"],["cLabel","","for","planName",1,"ms-2"],[3,"valid",4,"ngIf"],["cFormControl","","id","planDescription","formControlName","planDescription","required","","type","text","placeholder","Plan Description"],["cLabel","","for","planDescription",1,"ms-2"],["cSelect","","id","planType","formControlName","planType","required",""],["value",""],[3,"value",4,"ngFor","ngForOf"],["cLabel","","for","planType",1,"ms-2"],["cSelect","","id","planDuration","formControlName","planDuration","required",""],["cLabel","","for","planDuration",1,"ms-2"],["cFormControl","","id","planPrice","formControlName","planPrice","required","","type","number","step","0.01","placeholder","Plan Price"],["cLabel","","for","planPrice",1,"ms-2"],["cSelect","","id","planCycle","formControlName","planCycle","required",""],["cLabel","","for","planCycle",1,"ms-2"],["cButton","","color","primary","type","submit",1,"me-1",3,"disabled"],["cButton","","color","secondary",3,"click","disabled"],[3,"valid"],[3,"value"]],template:function(c,n){if(c&1){let f=_();t(0,"c-row"),e(1,`
  `),t(2,"c-col",1),e(3,`
    `),t(4,"c-card",2),e(5,`
      `),t(6,"c-card-header"),e(7,`
        `),t(8,"strong"),e(9,"Update Plan"),i(),e(10,`
      `),i(),e(11,`
      `),t(12,"c-card-body"),e(13,`
        `),t(14,"form",3,0),b("ngSubmit",function(){return C(f),g(n.onSubmit())}),e(16,`
          `),t(17,"c-col",4),e(18,`
            `),v(19,"input",5),e(20,`
            `),t(21,"label",6),e(22,"Plan Name"),i(),e(23,`
            `),m(24,ce,2,1,"c-form-feedback",7),e(25,`
          `),i(),e(26,`

          `),t(27,"c-col",4),e(28,`
            `),v(29,"input",8),e(30,`
            `),t(31,"label",9),e(32,"Plan Description"),i(),e(33,`
            `),m(34,me,2,1,"c-form-feedback",7),e(35,`
          `),i(),e(36,`

          `),t(37,"c-col",4),e(38,`
            `),t(39,"select",10),e(40,`
              `),t(41,"option",11),e(42,"Select Plan Type"),i(),e(43,`
              `),m(44,de,2,2,"option",12),e(45,`
            `),i(),e(46,`
            `),t(47,"label",13),e(48,"Plan Type"),i(),e(49,`
            `),m(50,se,2,1,"c-form-feedback",7),e(51,`
          `),i(),e(52,`

          `),t(53,"c-col",4),e(54,`
            `),t(55,"select",14),e(56,`
              `),t(57,"option",11),e(58,"Select Plan Duration"),i(),e(59,`
              `),m(60,ue,2,2,"option",12),e(61,`
            `),i(),e(62,`
            `),t(63,"label",15),e(64,"Plan Duration"),i(),e(65,`
            `),m(66,fe,2,1,"c-form-feedback",7),e(67,`
          `),i(),e(68,`

          `),t(69,"c-col",4),e(70,`
            `),v(71,"input",16),e(72,`
            `),t(73,"label",17),e(74,"Plan Price"),i(),e(75,`
            `),m(76,ye,2,1,"c-form-feedback",7),e(77,`
          `),i(),e(78,`

          `),t(79,"c-col",4),e(80,`
            `),t(81,"select",18),e(82,`
              `),t(83,"option",11),e(84,"Select Plan Cycle"),i(),e(85,`
              `),m(86,he,2,2,"option",12),e(87,`
            `),i(),e(88,`
            `),t(89,"label",19),e(90,"Plan Cycle"),i(),e(91,`
            `),m(92,ve,2,1,"c-form-feedback",7),e(93,`
          `),i(),e(94,`

          `),t(95,"c-col",1),e(96,`
            `),t(97,"button",20),e(98),i(),e(99,`
            `),t(100,"button",21),b("click",function(){return C(f),g(n.onCancel())}),e(101,`
              Cancel
            `),i(),e(102,`
          `),i(),e(103,`
        `),i(),e(104,`
      `),i(),e(105,`
    `),i(),e(106,`
  `),i(),e(107,`
`),i()}c&2&&(o(14),l("formGroup",n.planForm)("validated",n.customStylesValidated),o(3),l("cFormFloating",!0),o(7),l("ngIf",n.f.planName.errors&&(n.f.planName.touched||n.submitted)),o(3),l("cFormFloating",!0),o(7),l("ngIf",n.f.planDescription.errors&&(n.f.planDescription.touched||n.submitted)),o(3),l("cFormFloating",!0),o(7),l("ngForOf",n.planTypes),o(6),l("ngIf",n.f.planType.errors&&(n.f.planType.touched||n.submitted)),o(3),l("cFormFloating",!0),o(7),l("ngForOf",n.planDurations),o(6),l("ngIf",n.f.planDuration.errors&&(n.f.planDuration.touched||n.submitted)),o(3),l("cFormFloating",!0),o(7),l("ngIf",n.f.planPrice.errors&&(n.f.planPrice.touched||n.submitted)),o(3),l("cFormFloating",!0),o(7),l("ngForOf",n.planCycles),o(6),l("ngIf",n.f.planCycle.errors&&(n.f.planCycle.touched||n.submitted)),o(5),l("disabled",n.loading),o(),E(`
              `,n.loading?"Updating...":"Update",`
            `),o(2),l("disabled",n.loading))},dependencies:[N,w,T,G,z,V,R,O,q,ae,K,Z,ee,$,Q,Y,H,J,te,W,X,ne,A,j,B,L,M,U]});let r=p;return r})();export{Te as UpdatePlanComponent};
