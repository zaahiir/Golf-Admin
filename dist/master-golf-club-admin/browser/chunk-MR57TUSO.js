import{a as U}from"./chunk-DVM5LER3.js";import{$a as $,Ga as P,Ha as d,Ia as R,Ja as G,L as E,Oa as V,Pa as O,R as h,Ra as j,S as I,U as D,Ua as z,_a as A,ab as H,ba as k,bb as J,ca as N,d as _,ea as L,ga as q,h as T,ha as M,ja as B,ka as w,u as S}from"./chunk-45BFYFPT.js";import{Jb as t,Kb as n,Lb as f,Tb as g,Ub as x,cb as i,db as F,dc as e,fc as s,ia as C,mc as y,tb as p,zb as r}from"./chunk-IO45J2MB.js";import{f as Q,k as b}from"./chunk-AAPNLDO3.js";var v=Q(U());function W(o,m){if(o&1&&(t(0,"c-form-feedback",22),e(1),n()),o&2){let l=x();r("valid",!1),i(),s(`
                `,l.getErrorMessage("tournamentName"),`
              `)}}function X(o,m){if(o&1&&(t(0,"c-form-feedback",22),e(1),n()),o&2){let l=x();r("valid",!1),i(),s(`
                `,l.getErrorMessage("tournamentDate"),`
              `)}}function Y(o,m){if(o&1&&(t(0,"c-form-feedback",22),e(1),n()),o&2){let l=x();r("valid",!1),i(),s(`
                `,l.getErrorMessage("tournamentTime"),`
              `)}}function Z(o,m){if(o&1&&(t(0,"c-form-feedback",22),e(1),n()),o&2){let l=x();r("valid",!1),i(),s(`
                `,l.getErrorMessage("tournamentLocation"),`
              `)}}function ee(o,m){if(o&1&&(t(0,"c-form-feedback",22),e(1),n()),o&2){let l=x();r("valid",!1),i(),s(`
                `,l.getErrorMessage("tournamentDescription"),`
              `)}}function te(o,m){if(o&1&&(t(0,"c-form-feedback",22),e(1),n()),o&2){let l=x();r("valid",!1),i(),s(`
                `,l.getErrorMessage("entryFee"),`
              `)}}function ne(o,m){if(o&1&&(t(0,"c-form-feedback",22),e(1),n()),o&2){let l=x();r("valid",!1),i(),s(`
                `,l.getErrorMessage("maxParticipants"),`
              `)}}var xe=(()=>{let m=class m{constructor(u,a){this.formBuilder=u,this.router=a,this.loading=!1,this.submitted=!1}ngOnInit(){this.initializeForm()}initializeForm(){this.tournamentForm=this.formBuilder.group({tournamentName:["",[d.required,d.minLength(2)]],tournamentDate:["",[d.required]],tournamentTime:["",[d.required]],tournamentLocation:["",[d.required,d.minLength(3)]],tournamentDescription:["",[d.required,d.minLength(10)]],entryFee:["",[d.required,d.min(0)]],maxParticipants:["",[d.required,d.min(1)]]})}get f(){return this.tournamentForm.controls}onSubmit(){return b(this,null,function*(){if(this.submitted=!0,!this.tournamentForm.invalid)try{this.loading=!0,yield v.default.fire({title:"Success!",text:"Tournament has been created successfully",icon:"success",confirmButtonText:"Ok"}),this.router.navigate(["/tournaments"])}catch(u){console.error("Error creating tournament:",u),yield v.default.fire({title:"Error!",text:"Failed to create tournament",icon:"error",confirmButtonText:"Ok"})}finally{this.loading=!1}})}onReset(){this.submitted=!1,this.tournamentForm.reset()}isFieldInvalid(u){let a=this.tournamentForm.get(u);return!!(a&&a.invalid&&(a.dirty||a.touched||this.submitted))}getErrorMessage(u){let a=this.tournamentForm.get(u);return!a||!a.errors?"":a.errors.required?"This field is required":a.errors.minlength?`Minimum length is ${a.errors.minlength.requiredLength} characters`:a.errors.min?`Minimum value is ${a.errors.min.min}`:"Invalid input"}};m.\u0275fac=function(a){return new(a||m)(F($),F(S))},m.\u0275cmp=C({type:m,selectors:[["app-create-tournament"]],standalone:!0,features:[y],decls:99,vars:18,consts:[["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3","needs-validation",3,"ngSubmit","formGroup"],["md","6",3,"cFormFloating"],["cFormControl","","id","tournamentName","formControlName","tournamentName","required","","type","text","placeholder","Tournament Name"],["cLabel","","for","tournamentName",1,"ms-2"],[3,"valid",4,"ngIf"],["cFormControl","","id","tournamentDate","formControlName","tournamentDate","required","","type","date","placeholder","Tournament Date"],["cLabel","","for","tournamentDate",1,"ms-2"],["cFormControl","","id","tournamentTime","formControlName","tournamentTime","required","","type","time","placeholder","Tournament Time"],["cLabel","","for","tournamentTime",1,"ms-2"],["cFormControl","","id","tournamentLocation","formControlName","tournamentLocation","required","","type","text","placeholder","Tournament Location"],["cLabel","","for","tournamentLocation",1,"ms-2"],["md","12",3,"cFormFloating"],["cFormControl","","id","tournamentDescription","formControlName","tournamentDescription","required","","rows","3","placeholder","Tournament Description"],["cLabel","","for","tournamentDescription",1,"ms-2"],["cFormControl","","id","entryFee","formControlName","entryFee","required","","type","number","step","0.01","placeholder","Entry Fee"],["cLabel","","for","entryFee",1,"ms-2"],["cFormControl","","id","maxParticipants","formControlName","maxParticipants","required","","type","number","placeholder","Max Participants"],["cLabel","","for","maxParticipants",1,"ms-2"],["cButton","","color","primary","type","submit",1,"me-1",3,"disabled"],["cButton","","color","secondary","type","button",3,"click","disabled"],[3,"valid"]],template:function(a,c){a&1&&(t(0,"c-row"),e(1,`
    `),t(2,"c-col",0),e(3,`
      `),t(4,"c-card",1),e(5,`
        `),t(6,"c-card-header"),e(7,`
          `),t(8,"strong"),e(9,"Create New Tournament"),n(),e(10,`
        `),n(),e(11,`
        `),t(12,"c-card-body"),e(13,`
          `),t(14,"form",2),g("ngSubmit",function(){return c.onSubmit()}),e(15,`
            `),t(16,"c-col",3),e(17,`
              `),f(18,"input",4),e(19,`
              `),t(20,"label",5),e(21,"Tournament Name"),n(),e(22,`
              `),p(23,W,2,2,"c-form-feedback",6),e(24,`
            `),n(),e(25,`
  
            `),t(26,"c-col",3),e(27,`
              `),f(28,"input",7),e(29,`
              `),t(30,"label",8),e(31,"Tournament Date"),n(),e(32,`
              `),p(33,X,2,2,"c-form-feedback",6),e(34,`
            `),n(),e(35,`
  
            `),t(36,"c-col",3),e(37,`
              `),f(38,"input",9),e(39,`
              `),t(40,"label",10),e(41,"Tournament Time"),n(),e(42,`
              `),p(43,Y,2,2,"c-form-feedback",6),e(44,`
            `),n(),e(45,`
  
            `),t(46,"c-col",3),e(47,`
              `),f(48,"input",11),e(49,`
              `),t(50,"label",12),e(51,"Tournament Location"),n(),e(52,`
              `),p(53,Z,2,2,"c-form-feedback",6),e(54,`
            `),n(),e(55,`
  
            `),t(56,"c-col",13),e(57,`
              `),f(58,"textarea",14),e(59,`
              `),t(60,"label",15),e(61,"Tournament Description"),n(),e(62,`
              `),p(63,ee,2,2,"c-form-feedback",6),e(64,`
            `),n(),e(65,`
  
            `),t(66,"c-col",3),e(67,`
              `),f(68,"input",16),e(69,`
              `),t(70,"label",17),e(71,"Entry Fee"),n(),e(72,`
              `),p(73,te,2,2,"c-form-feedback",6),e(74,`
            `),n(),e(75,`
  
            `),t(76,"c-col",3),e(77,`
              `),f(78,"input",18),e(79,`
              `),t(80,"label",19),e(81,"Max Participants"),n(),e(82,`
              `),p(83,ne,2,2,"c-form-feedback",6),e(84,`
            `),n(),e(85,`
  
            `),t(86,"c-col",0),e(87,`
              `),t(88,"button",20),e(89),n(),e(90,`
              `),t(91,"button",21),g("click",function(){return c.onReset()}),e(92,`
                Reset Form
              `),n(),e(93,`
            `),n(),e(94,`
          `),n(),e(95,`
        `),n(),e(96,`
      `),n(),e(97,`
    `),n(),e(98,`
  `),n()),a&2&&(i(14),r("formGroup",c.tournamentForm),i(2),r("cFormFloating",!0),i(7),r("ngIf",c.isFieldInvalid("tournamentName")),i(3),r("cFormFloating",!0),i(7),r("ngIf",c.isFieldInvalid("tournamentDate")),i(3),r("cFormFloating",!0),i(7),r("ngIf",c.isFieldInvalid("tournamentTime")),i(3),r("cFormFloating",!0),i(7),r("ngIf",c.isFieldInvalid("tournamentLocation")),i(3),r("cFormFloating",!0),i(7),r("ngIf",c.isFieldInvalid("tournamentDescription")),i(3),r("cFormFloating",!0),i(7),r("ngIf",c.isFieldInvalid("entryFee")),i(3),r("cFormFloating",!0),i(7),r("ngIf",c.isFieldInvalid("maxParticipants")),i(5),r("disabled",c.loading),i(),s(`
                `,c.loading?"Saving...":"Save Tournament",`
              `),i(2),r("disabled",c.loading))},dependencies:[_,T,w,B,h,M,D,I,J,V,P,O,R,G,A,j,z,H,k,L,q,N,E]});let o=m;return o})();export{xe as CreateTournamentComponent};
