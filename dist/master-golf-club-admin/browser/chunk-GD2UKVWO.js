import{a as Z}from"./chunk-DHTWQ56Z.js";import"./chunk-GFV7M3J3.js";import{a as te}from"./chunk-C4ZII7PO.js";import{Ca as z,Da as x,Ea as U,Fa as W,H as M,Ka as H,M as A,N as q,Na as J,Oa as K,Q as B,Va as Q,Wa as X,Xa as Y,Z as V,_ as O,ba as G,c as w,d as L,da as R,ea as P,f as T,ha as j,ia as $,q as D}from"./chunk-MQQCFL5Y.js";import{$b as e,Hb as t,Ib as i,Jb as u,Nb as S,Pb as _,Qb as d,ab as r,bb as y,bc as p,ga as k,ic as I,ra as b,rb as f,sa as v,xb as o}from"./chunk-7U6K5JTK.js";import{a as E,b as N,f as ee,k as h}from"./chunk-AAPNLDO3.js";var F=ee(te());function ie(n,s){if(n&1&&(t(0,"c-form-feedback",35),e(1),i()),n&2){let l=d();o("valid",!1),r(),p(`
              `,l.getErrorMessage("courseName"),`
            `)}}function ne(n,s){if(n&1&&(t(0,"c-form-feedback",35),e(1),i()),n&2){let l=d();o("valid",!1),r(),p(`
              `,l.getErrorMessage("courseNumber"),`
            `)}}function re(n,s){if(n&1&&(t(0,"c-form-feedback",35),e(1),i()),n&2){let l=d();o("valid",!1),r(),p(`
              `,l.getErrorMessage("streetName"),`
            `)}}function oe(n,s){if(n&1&&(t(0,"c-form-feedback",35),e(1),i()),n&2){let l=d();o("valid",!1),r(),p(`
              `,l.getErrorMessage("locality"),`
            `)}}function ae(n,s){if(n&1&&(t(0,"c-form-feedback",35),e(1),i()),n&2){let l=d();o("valid",!1),r(),p(`
              `,l.getErrorMessage("town"),`
            `)}}function le(n,s){if(n&1&&(t(0,"c-form-feedback",35),e(1),i()),n&2){let l=d();o("valid",!1),r(),p(`
              `,l.getErrorMessage("postcode"),`
            `)}}function me(n,s){if(n&1&&(t(0,"c-form-feedback",35),e(1),i()),n&2){let l=d();o("valid",!1),r(),p(`
              `,l.getErrorMessage("country"),`
            `)}}function ce(n,s){if(n&1&&(t(0,"c-form-feedback",35),e(1),i()),n&2){let l=d();o("valid",!1),r(),p(`
              `,l.getErrorMessage("phoneNumber"),`
            `)}}function se(n,s){if(n&1&&(t(0,"c-form-feedback",35),e(1),i()),n&2){let l=d();o("valid",!1),r(),p(`
              `,l.getErrorMessage("website"),`
            `)}}function de(n,s){if(n&1&&(t(0,"c-form-feedback",35),e(1),i()),n&2){let l=d();o("valid",!1),r(),p(`
              `,l.getErrorMessage("golfLocation"),`
            `)}}function pe(n,s){if(n&1&&(t(0,"c-form-feedback",35),e(1),i()),n&2){let l=d();o("valid",!1),r(),p(`
              `,l.getErrorMessage("golfDescription"),`
            `)}}function fe(n,s){if(n&1){let l=S();t(0,"button",36),_("click",function(){let a=b(l).$implicit,m=d();return v(m.toggleAmenity(a.amenityName))}),e(1),i()}if(n&2){let l=s.$implicit,c=d();o("color",c.isAmenitySelected(l.amenityName)?"primary":"secondary"),r(),p(`
                `,l.amenityName,`
              `)}}function ue(n,s){if(n&1&&(t(0,"c-form-feedback",35),e(1),i()),n&2){let l=d();o("valid",!1),r(),p(`
              `,l.getErrorMessage("amenities"),`
            `)}}var Se=(()=>{let s=class s{constructor(c,a,m){this.formBuilder=c,this.router=a,this.courseService=m,this.loading=!1,this.submitted=!1,this.amenitiesList=[]}ngOnInit(){this.initializeForm(),this.loadAmenities()}loadAmenities(){return h(this,null,function*(){try{let c=yield this.courseService.getAmenities();this.amenitiesList=c.data||[]}catch{yield F.default.fire({title:"Error!",text:"Failed to load amenities",icon:"error",confirmButtonText:"Ok"})}})}initializeForm(){this.golfCourseForm=this.formBuilder.group({courseName:["",[x.required]],courseNumber:["",[x.required]],streetName:["",[x.required]],locality:["",[x.required]],town:["",[x.required]],postcode:["",[x.required]],country:["",[x.required]],phoneNumber:["",[x.required]],website:["",[x.required]],amenities:[[],[x.required]],golfDescription:[""],golfLocation:["",[x.required]],hideStatus:[0]})}isAmenitySelected(c){return(this.golfCourseForm.get("amenities")?.value||[]).includes(c)}toggleAmenity(c){let a=[...this.golfCourseForm.get("amenities")?.value||[]],m=a.indexOf(c);m===-1?a.push(c):a.splice(m,1),this.golfCourseForm.patchValue({amenities:a}),this.golfCourseForm.get("amenities")?.markAsTouched()}get f(){return this.golfCourseForm.controls}onSubmit(){return h(this,null,function*(){if(this.submitted=!0,this.golfCourseForm.invalid){Object.keys(this.golfCourseForm.controls).forEach(c=>{this.golfCourseForm.get(c)?.markAsTouched()});return}try{this.loading=!0;let c=this.golfCourseForm.get("amenities")?.value||[],a=this.amenitiesList.filter(g=>c.includes(g.amenityName)).map(g=>g.id),m=N(E({},this.golfCourseForm.value),{amenities:a[0]}),C=yield this.courseService.processCourse(m);if(C.data.code===1)yield F.default.fire({title:"Success!",text:"Golf course has been created successfully",icon:"success",confirmButtonText:"Ok"}),this.router.navigate(["/courses"]);else throw new Error(C.data.message||"Unknown error occurred")}catch(c){yield F.default.fire({title:"Error!",text:c instanceof Error?c.message:"Failed to create golf course",icon:"error",confirmButtonText:"Ok"})}finally{this.loading=!1}})}onReset(){this.submitted=!1,this.golfCourseForm.reset({hideStatus:0,amenities:[]})}isFieldInvalid(c){let a=this.golfCourseForm.get(c);return!!(a&&a.invalid&&(a.dirty||a.touched||this.submitted))}getErrorMessage(c){let a=this.golfCourseForm.get(c);if(!a||!a.errors)return"";if(a.errors.required)return"This field is required";if(a.errors.minlength)return c==="amenities"?"Please select at least one amenity":`Minimum length is ${a.errors.minlength.requiredLength} characters`;if(a.errors.pattern)switch(c){case"postcode":return"Invalid postcode format";case"phoneNumber":return"Invalid phone number format";case"website":return"Invalid website URL";default:return"Invalid format"}return"Invalid input"}};s.\u0275fac=function(a){return new(a||s)(y(Q),y(D),y(Z))},s.\u0275cmp=k({type:s,selectors:[["app-create-courses"]],standalone:!0,features:[I],decls:155,vars:28,consts:[["form","ngForm"],["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3","needs-validation",3,"ngSubmit","formGroup"],["md","6",3,"cFormFloating"],["cFormControl","","id","courseName","formControlName","courseName","type","text","placeholder","Course Name"],["cLabel","","for","courseName",1,"ms-2"],[3,"valid",4,"ngIf"],["cFormControl","","id","courseNumber","formControlName","courseNumber","type","text","placeholder","Course Number"],["cLabel","","for","courseNumber",1,"ms-2"],["cFormControl","","id","streetName","formControlName","streetName","type","text","placeholder","Street Name"],["cLabel","","for","streetName",1,"ms-2"],["cFormControl","","id","locality","formControlName","locality","type","text","placeholder","Locality"],["cLabel","","for","locality",1,"ms-2"],["cFormControl","","id","town","formControlName","town","type","text","placeholder","Town"],["cLabel","","for","town",1,"ms-2"],["cFormControl","","id","postcode","formControlName","postcode","type","text","placeholder","Postcode"],["cLabel","","for","postcode",1,"ms-2"],["cFormControl","","id","country","formControlName","country","type","text","placeholder","Country"],["cLabel","","for","country",1,"ms-2"],["cFormControl","","id","phoneNumber","formControlName","phoneNumber","type","text","placeholder","Phone Number"],["cLabel","","for","phoneNumber",1,"ms-2"],["cFormControl","","id","website","formControlName","website","type","url","placeholder","Website"],["cLabel","","for","website",1,"ms-2"],["cFormControl","","id","golfLocation","formControlName","golfLocation","type","text","placeholder","Location"],["cLabel","","for","golfLocation",1,"ms-2"],["md","12",3,"cFormFloating"],["cFormControl","","id","golfDescription","formControlName","golfDescription","placeholder","Description","rows","3"],["cLabel","","for","golfDescription",1,"ms-2"],["md","12"],["cLabel",""],[1,"amenities-container"],["cButton","","class","me-2 mb-2","variant","outline","type","button",3,"color","click",4,"ngFor","ngForOf"],["cButton","","color","primary","type","submit",1,"me-1",3,"disabled"],["cButton","","color","secondary","type","button",3,"click","disabled"],[3,"valid"],["cButton","","variant","outline","type","button",1,"me-2","mb-2",3,"click","color"]],template:function(a,m){if(a&1){let C=S();t(0,"c-row"),e(1,`
  `),t(2,"c-col",1),e(3,`
    `),t(4,"c-card",2),e(5,`
      `),t(6,"c-card-header"),e(7,`
        `),t(8,"strong"),e(9,"New Golf Course"),i(),e(10,`
      `),i(),e(11,`
      `),t(12,"c-card-body"),e(13,`
        `),t(14,"form",3,0),_("ngSubmit",function(){return b(C),v(m.onSubmit())}),e(16,`
          `),e(17,`
          `),t(18,"c-col",4),e(19,`
            `),u(20,"input",5),e(21,`
            `),t(22,"label",6),e(23,"Course Name"),i(),e(24,`
            `),f(25,ie,2,2,"c-form-feedback",7),e(26,`
          `),i(),e(27,`

          `),t(28,"c-col",4),e(29,`
            `),u(30,"input",8),e(31,`
            `),t(32,"label",9),e(33,"Course Number"),i(),e(34,`
            `),f(35,ne,2,2,"c-form-feedback",7),e(36,`
          `),i(),e(37,`

          `),t(38,"c-col",4),e(39,`
            `),u(40,"input",10),e(41,`
            `),t(42,"label",11),e(43,"Street Name"),i(),e(44,`
            `),f(45,re,2,2,"c-form-feedback",7),e(46,`
          `),i(),e(47,`

          `),t(48,"c-col",4),e(49,`
            `),u(50,"input",12),e(51,`
            `),t(52,"label",13),e(53,"Locality"),i(),e(54,`
            `),f(55,oe,2,2,"c-form-feedback",7),e(56,`
          `),i(),e(57,`

          `),t(58,"c-col",4),e(59,`
            `),u(60,"input",14),e(61,`
            `),t(62,"label",15),e(63,"Town"),i(),e(64,`
            `),f(65,ae,2,2,"c-form-feedback",7),e(66,`
          `),i(),e(67,`

          `),t(68,"c-col",4),e(69,`
            `),u(70,"input",16),e(71,`
            `),t(72,"label",17),e(73,"Postcode"),i(),e(74,`
            `),f(75,le,2,2,"c-form-feedback",7),e(76,`
          `),i(),e(77,`

          `),t(78,"c-col",4),e(79,`
            `),u(80,"input",18),e(81,`
            `),t(82,"label",19),e(83,"Country"),i(),e(84,`
            `),f(85,me,2,2,"c-form-feedback",7),e(86,`
          `),i(),e(87,`

          `),t(88,"c-col",4),e(89,`
            `),u(90,"input",20),e(91,`
            `),t(92,"label",21),e(93,"Phone Number"),i(),e(94,`
            `),f(95,ce,2,2,"c-form-feedback",7),e(96,`
          `),i(),e(97,`

          `),t(98,"c-col",4),e(99,`
            `),u(100,"input",22),e(101,`
            `),t(102,"label",23),e(103,"Website"),i(),e(104,`
            `),f(105,se,2,2,"c-form-feedback",7),e(106,`
          `),i(),e(107,`

          `),t(108,"c-col",4),e(109,`
            `),u(110,"input",24),e(111,`
            `),t(112,"label",25),e(113,"Location"),i(),e(114,`
            `),f(115,de,2,2,"c-form-feedback",7),e(116,`
          `),i(),e(117,`

          `),t(118,"c-col",26),e(119,`
            `),u(120,"textarea",27),e(121,`
            `),t(122,"label",28),e(123,"Description"),i(),e(124,`
            `),f(125,pe,2,2,"c-form-feedback",7),e(126,`
          `),i(),e(127,`

          `),t(128,"c-col",29),e(129,`
            `),t(130,"label",30),e(131,"Amenities"),i(),e(132,`
            `),t(133,"div",31),e(134,`
              `),f(135,fe,2,2,"button",32),e(136,`
            `),i(),e(137,`
            `),f(138,ue,2,2,"c-form-feedback",7),e(139,`
          `),i(),e(140,`

          `),e(141,`
          `),t(142,"c-col",1),e(143,`
            `),t(144,"button",33),e(145),i(),e(146,`
            `),t(147,"button",34),_("click",function(){return b(C),v(m.onReset())}),e(148,`
              Reset Form
            `),i(),e(149,`
          `),i(),e(150,`
        `),i(),e(151,`
      `),i(),e(152,`
    `),i(),e(153,`
  `),i(),e(154,`
`),i()}a&2&&(r(14),o("formGroup",m.golfCourseForm),r(4),o("cFormFloating",!0),r(7),o("ngIf",m.isFieldInvalid("courseName")),r(3),o("cFormFloating",!0),r(7),o("ngIf",m.isFieldInvalid("courseNumber")),r(3),o("cFormFloating",!0),r(7),o("ngIf",m.isFieldInvalid("streetName")),r(3),o("cFormFloating",!0),r(7),o("ngIf",m.isFieldInvalid("locality")),r(3),o("cFormFloating",!0),r(7),o("ngIf",m.isFieldInvalid("town")),r(3),o("cFormFloating",!0),r(7),o("ngIf",m.isFieldInvalid("postcode")),r(3),o("cFormFloating",!0),r(7),o("ngIf",m.isFieldInvalid("country")),r(3),o("cFormFloating",!0),r(7),o("ngIf",m.isFieldInvalid("phoneNumber")),r(3),o("cFormFloating",!0),r(7),o("ngIf",m.isFieldInvalid("website")),r(3),o("cFormFloating",!0),r(7),o("ngIf",m.isFieldInvalid("golfLocation")),r(3),o("cFormFloating",!0),r(7),o("ngIf",m.isFieldInvalid("golfDescription")),r(10),o("ngForOf",m.amenitiesList),r(3),o("ngIf",m.isFieldInvalid("amenities")),r(6),o("disabled",m.loading),r(),p(`
              `,m.loading?"Saving...":"Save Golf Course",`
            `),r(2),o("disabled",m.loading))},dependencies:[L,T,w,$,j,A,P,B,q,Y,H,z,U,W,J,K,X,V,G,R,O,M]});let n=s;return n})();export{Se as CreateCoursesComponent};
