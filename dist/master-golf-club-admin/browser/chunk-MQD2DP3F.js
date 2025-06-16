import{a as P}from"./chunk-DVM5LER3.js";import{Ia as U,Ja as s,K as y,Ka as R,La as G,Q as D,Qa as O,R as I,Ta as V,U as N,Wa as j,ab as z,ba as k,bb as A,ca as T,cb as H,d as h,db as $,fa as L,g as S,ha as q,ia as M,la as B,ma as w,t as _}from"./chunk-RS62WWGD.js";import{Ib as t,Jb as n,Kb as f,Sb as g,Tb as u,bb as i,cb as x,cc as e,ec as p,ha as b,lc as C,sb as v,yb as r}from"./chunk-NP3QOLCN.js";import{f as K,k as F}from"./chunk-AAPNLDO3.js";var E=K(P());function Q(o,l){if(o&1&&(t(0,"c-form-feedback",18),e(1),n()),o&2){let c=u();r("valid",!1),i(),p(`
                `,c.getErrorMessage("eventName"),`
              `)}}function W(o,l){if(o&1&&(t(0,"c-form-feedback",18),e(1),n()),o&2){let c=u();r("valid",!1),i(),p(`
                `,c.getErrorMessage("eventDate"),`
              `)}}function X(o,l){if(o&1&&(t(0,"c-form-feedback",18),e(1),n()),o&2){let c=u();r("valid",!1),i(),p(`
                `,c.getErrorMessage("eventTime"),`
              `)}}function Y(o,l){if(o&1&&(t(0,"c-form-feedback",18),e(1),n()),o&2){let c=u();r("valid",!1),i(),p(`
                `,c.getErrorMessage("eventLocation"),`
              `)}}function Z(o,l){if(o&1&&(t(0,"c-form-feedback",18),e(1),n()),o&2){let c=u();r("valid",!1),i(),p(`
                `,c.getErrorMessage("eventDescription"),`
              `)}}var pe=(()=>{let l=class l{constructor(d,a){this.formBuilder=d,this.router=a,this.loading=!1,this.submitted=!1}ngOnInit(){this.initializeForm()}initializeForm(){this.eventForm=this.formBuilder.group({eventName:["",[s.required,s.minLength(2)]],eventDate:["",[s.required]],eventTime:["",[s.required]],eventLocation:["",[s.required,s.minLength(3)]],eventDescription:["",[s.required,s.minLength(10)]]})}get f(){return this.eventForm.controls}onSubmit(){return F(this,null,function*(){if(this.submitted=!0,!this.eventForm.invalid)try{this.loading=!0,yield E.default.fire({title:"Success!",text:"Event has been created successfully",icon:"success",confirmButtonText:"Ok"}),this.router.navigate(["/events"])}catch(d){console.error("Error creating event:",d),yield E.default.fire({title:"Error!",text:"Failed to create event",icon:"error",confirmButtonText:"Ok"})}finally{this.loading=!1}})}onReset(){this.submitted=!1,this.eventForm.reset()}isFieldInvalid(d){let a=this.eventForm.get(d);return!!(a&&a.invalid&&(a.dirty||a.touched||this.submitted))}getErrorMessage(d){let a=this.eventForm.get(d);return!a||!a.errors?"":a.errors.required?"This field is required":a.errors.minlength?`Minimum length is ${a.errors.minlength.requiredLength} characters`:"Invalid input"}};l.\u0275fac=function(a){return new(a||l)(x(A),x(_))},l.\u0275cmp=b({type:l,selectors:[["app-update-events"]],standalone:!0,features:[C],decls:79,vars:14,consts:[["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3","needs-validation",3,"ngSubmit","formGroup"],["md","6",3,"cFormFloating"],["cFormControl","","id","eventName","formControlName","eventName","required","","type","text","placeholder","Event Name"],["cLabel","","for","eventName",1,"ms-2"],[3,"valid",4,"ngIf"],["cFormControl","","id","eventDate","formControlName","eventDate","required","","type","date","placeholder","Event Date"],["cLabel","","for","eventDate",1,"ms-2"],["cFormControl","","id","eventTime","formControlName","eventTime","required","","type","time","placeholder","Event Time"],["cLabel","","for","eventTime",1,"ms-2"],["cFormControl","","id","eventLocation","formControlName","eventLocation","required","","type","text","placeholder","Event Location"],["cLabel","","for","eventLocation",1,"ms-2"],["md","12",3,"cFormFloating"],["cFormControl","","id","eventDescription","formControlName","eventDescription","required","","rows","3","placeholder","Event Description"],["cLabel","","for","eventDescription",1,"ms-2"],["cButton","","color","primary","type","submit",1,"me-1",3,"disabled"],["cButton","","color","secondary","type","button",3,"click","disabled"],[3,"valid"]],template:function(a,m){a&1&&(t(0,"c-row"),e(1,`
    `),t(2,"c-col",0),e(3,`
      `),t(4,"c-card",1),e(5,`
        `),t(6,"c-card-header"),e(7,`
          `),t(8,"strong"),e(9,"Update New Event"),n(),e(10,`
        `),n(),e(11,`
        `),t(12,"c-card-body"),e(13,`
          `),t(14,"form",2),g("ngSubmit",function(){return m.onSubmit()}),e(15,`
            `),t(16,"c-col",3),e(17,`
              `),f(18,"input",4),e(19,`
              `),t(20,"label",5),e(21,"Event Name"),n(),e(22,`
              `),v(23,Q,2,2,"c-form-feedback",6),e(24,`
            `),n(),e(25,`
  
            `),t(26,"c-col",3),e(27,`
              `),f(28,"input",7),e(29,`
              `),t(30,"label",8),e(31,"Event Date"),n(),e(32,`
              `),v(33,W,2,2,"c-form-feedback",6),e(34,`
            `),n(),e(35,`
  
            `),t(36,"c-col",3),e(37,`
              `),f(38,"input",9),e(39,`
              `),t(40,"label",10),e(41,"Event Time"),n(),e(42,`
              `),v(43,X,2,2,"c-form-feedback",6),e(44,`
            `),n(),e(45,`
  
            `),t(46,"c-col",3),e(47,`
              `),f(48,"input",11),e(49,`
              `),t(50,"label",12),e(51,"Event Location"),n(),e(52,`
              `),v(53,Y,2,2,"c-form-feedback",6),e(54,`
            `),n(),e(55,`
  
            `),t(56,"c-col",13),e(57,`
              `),f(58,"textarea",14),e(59,`
              `),t(60,"label",15),e(61,"Event Description"),n(),e(62,`
              `),v(63,Z,2,2,"c-form-feedback",6),e(64,`
            `),n(),e(65,`
  
            `),t(66,"c-col",0),e(67,`
              `),t(68,"button",16),e(69),n(),e(70,`
              `),t(71,"button",17),g("click",function(){return m.onReset()}),e(72,`
                Reset Form
              `),n(),e(73,`
            `),n(),e(74,`
          `),n(),e(75,`
        `),n(),e(76,`
      `),n(),e(77,`
    `),n(),e(78,`
  `),n()),a&2&&(i(14),r("formGroup",m.eventForm),i(2),r("cFormFloating",!0),i(7),r("ngIf",m.isFieldInvalid("eventName")),i(3),r("cFormFloating",!0),i(7),r("ngIf",m.isFieldInvalid("eventDate")),i(3),r("cFormFloating",!0),i(7),r("ngIf",m.isFieldInvalid("eventTime")),i(3),r("cFormFloating",!0),i(7),r("ngIf",m.isFieldInvalid("eventLocation")),i(3),r("cFormFloating",!0),i(7),r("ngIf",m.isFieldInvalid("eventDescription")),i(5),r("disabled",m.loading),i(),p(`
                `,m.loading?"Saving...":"Save Event",`
              `),i(2),r("disabled",m.loading))},dependencies:[h,S,w,B,D,M,N,I,$,O,U,R,G,z,V,j,H,k,L,q,T,y]});let o=l;return o})();export{pe as UpdateEventsComponent};
