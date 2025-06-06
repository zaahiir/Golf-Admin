import{a as K}from"./chunk-DVM5LER3.js";import{$ as k,$a as z,Ga as w,Ha as c,I as E,Ia as A,Ja as R,O as I,Oa as G,P as B,Ra as V,S as T,Ua as O,_a as j,aa as D,ab as P,bb as H,d as h,da as q,fa as L,g as _,ga as M,ja as N,ka as U,r as S}from"./chunk-M3QMQC54.js";import{Ib as t,Jb as i,Kb as f,Sb as x,Tb as b,bb as n,cb as u,cc as e,ec as s,ha as F,lc as y,sb as p,yb as o}from"./chunk-X7YB6HNB.js";import{f as J,k as v}from"./chunk-AAPNLDO3.js";var C=J(K());function Q(r,a){if(r&1&&(t(0,"c-form-feedback",22),e(1),i()),r&2){let m=b();o("valid",!1),n(),s(`
                `,m.getErrorMessage("blogTitle"),`
              `)}}function W(r,a){if(r&1&&(t(0,"c-form-feedback",22),e(1),i()),r&2){let m=b();o("valid",!1),n(),s(`
                `,m.getErrorMessage("blogAuthor"),`
              `)}}function X(r,a){if(r&1&&(t(0,"c-form-feedback",22),e(1),i()),r&2){let m=b();o("valid",!1),n(),s(`
                `,m.getErrorMessage("blogDate"),`
              `)}}function Y(r,a){if(r&1&&(t(0,"c-form-feedback",22),e(1),i()),r&2){let m=b();o("valid",!1),n(),s(`
                `,m.getErrorMessage("blogCategory"),`
              `)}}function Z(r,a){if(r&1&&(t(0,"c-form-feedback",22),e(1),i()),r&2){let m=b();o("valid",!1),n(),s(`
                `,m.getErrorMessage("blogContent"),`
              `)}}function ee(r,a){if(r&1&&(t(0,"c-form-feedback",22),e(1),i()),r&2){let m=b();o("valid",!1),n(),s(`
                `,m.getErrorMessage("blogTags"),`
              `)}}function te(r,a){if(r&1&&(t(0,"c-form-feedback",22),e(1),i()),r&2){let m=b();o("valid",!1),n(),s(`
                `,m.getErrorMessage("blogImage"),`
              `)}}var de=(()=>{let a=class a{constructor(g,l){this.formBuilder=g,this.router=l,this.loading=!1,this.submitted=!1}ngOnInit(){this.initializeForm()}initializeForm(){this.blogForm=this.formBuilder.group({blogTitle:["",[c.required,c.minLength(5)]],blogAuthor:["",[c.required,c.minLength(3)]],blogDate:["",[c.required]],blogCategory:["",[c.required,c.minLength(3)]],blogContent:["",[c.required,c.minLength(100)]],blogTags:["",[c.required,c.minLength(3)]],blogImage:[""]})}get f(){return this.blogForm.controls}onSubmit(){return v(this,null,function*(){if(this.submitted=!0,!this.blogForm.invalid)try{this.loading=!0,yield C.default.fire({title:"Success!",text:"Blog post has been created successfully",icon:"success",confirmButtonText:"Ok"}),this.router.navigate(["/blogs"])}catch(g){console.error("Error creating blog:",g),yield C.default.fire({title:"Error!",text:"Failed to create blog post",icon:"error",confirmButtonText:"Ok"})}finally{this.loading=!1}})}onReset(){this.submitted=!1,this.blogForm.reset()}isFieldInvalid(g){let l=this.blogForm.get(g);return!!(l&&l.invalid&&(l.dirty||l.touched||this.submitted))}getErrorMessage(g){let l=this.blogForm.get(g);return!l||!l.errors?"":l.errors.required?"This field is required":l.errors.minlength?`Minimum length is ${l.errors.minlength.requiredLength} characters`:"Invalid input"}};a.\u0275fac=function(l){return new(l||a)(u(z),u(S))},a.\u0275cmp=F({type:a,selectors:[["app-update-blog"]],standalone:!0,features:[y],decls:99,vars:18,consts:[["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3","needs-validation",3,"ngSubmit","formGroup"],["md","6",3,"cFormFloating"],["cFormControl","","id","blogTitle","formControlName","blogTitle","required","","type","text","placeholder","Blog Title"],["cLabel","","for","blogTitle",1,"ms-2"],[3,"valid",4,"ngIf"],["cFormControl","","id","blogAuthor","formControlName","blogAuthor","required","","type","text","placeholder","Blog Author"],["cLabel","","for","blogAuthor",1,"ms-2"],["cFormControl","","id","blogDate","formControlName","blogDate","required","","type","date","placeholder","Blog Date"],["cLabel","","for","blogDate",1,"ms-2"],["cFormControl","","id","blogCategory","formControlName","blogCategory","required","","type","text","placeholder","Blog Category"],["cLabel","","for","blogCategory",1,"ms-2"],["md","12",3,"cFormFloating"],["cFormControl","","id","blogContent","formControlName","blogContent","required","","rows","6","placeholder","Blog Content"],["cLabel","","for","blogContent",1,"ms-2"],["cFormControl","","id","blogTags","formControlName","blogTags","required","","type","text","placeholder","Blog Tags (comma-separated)"],["cLabel","","for","blogTags",1,"ms-2"],["cFormControl","","id","blogImage","formControlName","blogImage","type","text","placeholder","Blog Image URL"],["cLabel","","for","blogImage",1,"ms-2"],["cButton","","color","primary","type","submit",1,"me-1",3,"disabled"],["cButton","","color","secondary","type","button",3,"click","disabled"],[3,"valid"]],template:function(l,d){l&1&&(t(0,"c-row"),e(1,`
    `),t(2,"c-col",0),e(3,`
      `),t(4,"c-card",1),e(5,`
        `),t(6,"c-card-header"),e(7,`
          `),t(8,"strong"),e(9,"Update New Blog Post"),i(),e(10,`
        `),i(),e(11,`
        `),t(12,"c-card-body"),e(13,`
          `),t(14,"form",2),x("ngSubmit",function(){return d.onSubmit()}),e(15,`
            `),t(16,"c-col",3),e(17,`
              `),f(18,"input",4),e(19,`
              `),t(20,"label",5),e(21,"Blog Title"),i(),e(22,`
              `),p(23,Q,2,2,"c-form-feedback",6),e(24,`
            `),i(),e(25,`
  
            `),t(26,"c-col",3),e(27,`
              `),f(28,"input",7),e(29,`
              `),t(30,"label",8),e(31,"Blog Author"),i(),e(32,`
              `),p(33,W,2,2,"c-form-feedback",6),e(34,`
            `),i(),e(35,`
  
            `),t(36,"c-col",3),e(37,`
              `),f(38,"input",9),e(39,`
              `),t(40,"label",10),e(41,"Blog Date"),i(),e(42,`
              `),p(43,X,2,2,"c-form-feedback",6),e(44,`
            `),i(),e(45,`
  
            `),t(46,"c-col",3),e(47,`
              `),f(48,"input",11),e(49,`
              `),t(50,"label",12),e(51,"Blog Category"),i(),e(52,`
              `),p(53,Y,2,2,"c-form-feedback",6),e(54,`
            `),i(),e(55,`
  
            `),t(56,"c-col",13),e(57,`
              `),f(58,"textarea",14),e(59,`
              `),t(60,"label",15),e(61,"Blog Content"),i(),e(62,`
              `),p(63,Z,2,2,"c-form-feedback",6),e(64,`
            `),i(),e(65,`
  
            `),t(66,"c-col",3),e(67,`
              `),f(68,"input",16),e(69,`
              `),t(70,"label",17),e(71,"Blog Tags"),i(),e(72,`
              `),p(73,ee,2,2,"c-form-feedback",6),e(74,`
            `),i(),e(75,`
  
            `),t(76,"c-col",3),e(77,`
              `),f(78,"input",18),e(79,`
              `),t(80,"label",19),e(81,"Blog Image URL"),i(),e(82,`
              `),p(83,te,2,2,"c-form-feedback",6),e(84,`
            `),i(),e(85,`
  
            `),t(86,"c-col",0),e(87,`
              `),t(88,"button",20),e(89),i(),e(90,`
              `),t(91,"button",21),x("click",function(){return d.onReset()}),e(92,`
                Reset Form
              `),i(),e(93,`
            `),i(),e(94,`
          `),i(),e(95,`
        `),i(),e(96,`
      `),i(),e(97,`
    `),i(),e(98,`
  `),i()),l&2&&(n(14),o("formGroup",d.blogForm),n(2),o("cFormFloating",!0),n(7),o("ngIf",d.isFieldInvalid("blogTitle")),n(3),o("cFormFloating",!0),n(7),o("ngIf",d.isFieldInvalid("blogAuthor")),n(3),o("cFormFloating",!0),n(7),o("ngIf",d.isFieldInvalid("blogDate")),n(3),o("cFormFloating",!0),n(7),o("ngIf",d.isFieldInvalid("blogCategory")),n(3),o("cFormFloating",!0),n(7),o("ngIf",d.isFieldInvalid("blogContent")),n(3),o("cFormFloating",!0),n(7),o("ngIf",d.isFieldInvalid("blogTags")),n(3),o("cFormFloating",!0),n(7),o("ngIf",d.isFieldInvalid("blogImage")),n(5),o("disabled",d.loading),n(),s(`
                `,d.loading?"Saving...":"Publish Blog",`
              `),n(2),o("disabled",d.loading))},dependencies:[h,_,U,N,I,M,T,B,H,G,w,A,R,j,V,O,P,k,q,L,D,E]});let r=a;return r})();export{de as UpdateBlogComponent};
