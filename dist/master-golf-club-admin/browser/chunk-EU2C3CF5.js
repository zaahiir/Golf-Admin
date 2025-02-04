import{a as ee}from"./chunk-DHTWQ56Z.js";import"./chunk-GFV7M3J3.js";import{a as ie}from"./chunk-C4ZII7PO.js";import{Ca as Z,Da as u,Ea as z,Fa as W,H as U,Ka as H,M,N as q,Na as J,Oa as K,Q as B,Va as Q,Wa as X,Xa as Y,Z as O,_ as V,ba as G,c as w,d as L,da as j,ea as P,f as T,ha as R,ia as $,o as D,q as A}from"./chunk-MQQCFL5Y.js";import{$b as e,Hb as t,Ib as i,Jb as x,Nb as N,Pb as y,Qb as d,ab as o,bb as v,bc as p,ga as E,ic as k,ra as S,rb as f,sa as I,xb as r}from"./chunk-7U6K5JTK.js";import{a as h,b as _,f as te,k as C}from"./chunk-AAPNLDO3.js";var F=te(ie());function ne(n,s){if(n&1&&(t(0,"c-form-feedback",34),e(1),i()),n&2){let m=d();r("valid",!1),o(),p(`
              `,m.getErrorMessage("courseName"),`
            `)}}function oe(n,s){if(n&1&&(t(0,"c-form-feedback",34),e(1),i()),n&2){let m=d();r("valid",!1),o(),p(`
              `,m.getErrorMessage("courseNumber"),`
            `)}}function re(n,s){if(n&1&&(t(0,"c-form-feedback",34),e(1),i()),n&2){let m=d();r("valid",!1),o(),p(`
              `,m.getErrorMessage("streetName"),`
            `)}}function ae(n,s){if(n&1&&(t(0,"c-form-feedback",34),e(1),i()),n&2){let m=d();r("valid",!1),o(),p(`
              `,m.getErrorMessage("locality"),`
            `)}}function le(n,s){if(n&1&&(t(0,"c-form-feedback",34),e(1),i()),n&2){let m=d();r("valid",!1),o(),p(`
              `,m.getErrorMessage("town"),`
            `)}}function ce(n,s){if(n&1&&(t(0,"c-form-feedback",34),e(1),i()),n&2){let m=d();r("valid",!1),o(),p(`
              `,m.getErrorMessage("postcode"),`
            `)}}function me(n,s){if(n&1&&(t(0,"c-form-feedback",34),e(1),i()),n&2){let m=d();r("valid",!1),o(),p(`
              `,m.getErrorMessage("country"),`
            `)}}function se(n,s){if(n&1&&(t(0,"c-form-feedback",34),e(1),i()),n&2){let m=d();r("valid",!1),o(),p(`
              `,m.getErrorMessage("phoneNumber"),`
            `)}}function de(n,s){if(n&1&&(t(0,"c-form-feedback",34),e(1),i()),n&2){let m=d();r("valid",!1),o(),p(`
              `,m.getErrorMessage("website"),`
            `)}}function pe(n,s){if(n&1&&(t(0,"c-form-feedback",34),e(1),i()),n&2){let m=d();r("valid",!1),o(),p(`
              `,m.getErrorMessage("golfLocation"),`
            `)}}function ue(n,s){if(n&1&&(t(0,"c-form-feedback",34),e(1),i()),n&2){let m=d();r("valid",!1),o(),p(`
              `,m.getErrorMessage("golfDescription"),`
            `)}}function fe(n,s){if(n&1){let m=N();t(0,"button",35),y("click",function(){let a=S(m).$implicit,c=d();return I(c.toggleAmenity(a.amenityName))}),e(1),i()}if(n&2){let m=s.$implicit,l=d();r("color",l.isAmenitySelected(m.amenityName)?"primary":"secondary"),o(),p(`
                `,m.amenityName,`
              `)}}function xe(n,s){if(n&1&&(t(0,"c-form-feedback",34),e(1),i()),n&2){let m=d();r("valid",!1),o(),p(`
              `,m.getErrorMessage("amenities"),`
            `)}}var Se=(()=>{let s=class s{constructor(l,a,c,g){this.formBuilder=l,this.router=a,this.route=c,this.courseService=g,this.loading=!1,this.submitted=!1,this.amenitiesList=[],this.courseId=""}ngOnInit(){this.initializeForm(),this.loadAmenities(),this.route.params.subscribe(l=>{this.courseId=l.id,this.courseId&&this.loadCourseData(this.courseId)})}initializeForm(){this.golfCourseForm=this.formBuilder.group({courseName:["",[u.required]],courseNumber:["",[u.required]],streetName:["",[u.required]],locality:["",[u.required]],town:["",[u.required]],postcode:["",[u.required,u.pattern("^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$")]],country:["",[u.required]],phoneNumber:["",[u.required,u.pattern("^[0-9]{10,12}$")]],website:["",[u.required,u.pattern("^https?://.*")]],amenities:[[],[u.required]],golfDescription:[""],golfLocation:["",[u.required]],hideStatus:[0]})}loadAmenities(){return C(this,null,function*(){try{let l=yield this.courseService.getAmenities();this.amenitiesList=l.data||[]}catch{yield this.showError("Failed to load amenities")}})}loadCourseData(l){return C(this,null,function*(){try{let a=yield this.courseService.listCourse(l);if(a.data.code===1&&a.data.data.length>0){let c=a.data.data[0],g=this.amenitiesList.filter(b=>c.amenities.includes(b.id)).map(b=>b.amenityName);this.golfCourseForm.patchValue(_(h({},c),{amenities:g}))}else throw new Error("Course not found")}catch{yield this.showError("Failed to load course data"),this.router.navigate(["/courses"])}})}isAmenitySelected(l){return(this.golfCourseForm.get("amenities")?.value||[]).includes(l)}toggleAmenity(l){let a=[...this.golfCourseForm.get("amenities")?.value||[]],c=a.indexOf(l);c===-1?a.push(l):a.splice(c,1),this.golfCourseForm.patchValue({amenities:a}),this.golfCourseForm.get("amenities")?.markAsTouched()}get f(){return this.golfCourseForm.controls}onSubmit(){return C(this,null,function*(){if(this.submitted=!0,this.golfCourseForm.invalid){Object.keys(this.golfCourseForm.controls).forEach(l=>{this.golfCourseForm.get(l)?.markAsTouched()});return}try{this.loading=!0;let l=this.golfCourseForm.get("amenities")?.value||[],a=this.amenitiesList.filter(b=>l.includes(b.amenityName)).map(b=>b.id),c=_(h({},this.golfCourseForm.value),{amenities:a[0]}),g=yield this.courseService.processCourse(c,this.courseId);if(g.data.code===1)yield F.default.fire({title:"Success!",text:"Golf course has been updated successfully",icon:"success",confirmButtonText:"Ok"}),this.router.navigate(["/courses"]);else throw new Error(g.data.message||"Unknown error occurred")}catch(l){yield this.showError(l instanceof Error?l.message:"Failed to update golf course")}finally{this.loading=!1}})}onCancel(){this.router.navigate(["/courses"])}isFieldInvalid(l){let a=this.golfCourseForm.get(l);return!!(a&&a.invalid&&(a.dirty||a.touched||this.submitted))}getErrorMessage(l){let a=this.golfCourseForm.get(l);if(!a||!a.errors)return"";if(a.errors.required)return"This field is required";if(a.errors.minlength)return l==="amenities"?"Please select at least one amenity":`Minimum length is ${a.errors.minlength.requiredLength} characters`;if(a.errors.pattern)switch(l){case"postcode":return"Invalid postcode format";case"phoneNumber":return"Invalid phone number format";case"website":return"Invalid website URL format";default:return"Invalid format"}return"Invalid input"}showError(l){return C(this,null,function*(){yield F.default.fire({title:"Error!",text:l,icon:"error",confirmButtonText:"Ok"})})}};s.\u0275fac=function(a){return new(a||s)(v(Q),v(A),v(D),v(ee))},s.\u0275cmp=E({type:s,selectors:[["app-update-courses"]],standalone:!0,features:[k],decls:154,vars:28,consts:[["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3","needs-validation",3,"ngSubmit","formGroup"],["md","6",3,"cFormFloating"],["cFormControl","","id","courseName","formControlName","courseName","type","text","placeholder","Course Name"],["cLabel","","for","courseName",1,"ms-2"],[3,"valid",4,"ngIf"],["cFormControl","","id","courseNumber","formControlName","courseNumber","type","text","placeholder","Course Number"],["cLabel","","for","courseNumber",1,"ms-2"],["cFormControl","","id","streetName","formControlName","streetName","type","text","placeholder","Street Name"],["cLabel","","for","streetName",1,"ms-2"],["cFormControl","","id","locality","formControlName","locality","type","text","placeholder","Locality"],["cLabel","","for","locality",1,"ms-2"],["cFormControl","","id","town","formControlName","town","type","text","placeholder","Town"],["cLabel","","for","town",1,"ms-2"],["cFormControl","","id","postcode","formControlName","postcode","type","text","placeholder","Postcode"],["cLabel","","for","postcode",1,"ms-2"],["cFormControl","","id","country","formControlName","country","type","text","placeholder","Country"],["cLabel","","for","country",1,"ms-2"],["cFormControl","","id","phoneNumber","formControlName","phoneNumber","type","text","placeholder","Phone Number"],["cLabel","","for","phoneNumber",1,"ms-2"],["cFormControl","","id","website","formControlName","website","type","url","placeholder","Website"],["cLabel","","for","website",1,"ms-2"],["cFormControl","","id","golfLocation","formControlName","golfLocation","type","text","placeholder","Location"],["cLabel","","for","golfLocation",1,"ms-2"],["md","12",3,"cFormFloating"],["cFormControl","","id","golfDescription","formControlName","golfDescription","placeholder","Description","rows","3"],["cLabel","","for","golfDescription",1,"ms-2"],["md","12"],["cLabel",""],[1,"amenities-container"],["cButton","","class","me-2 mb-2","variant","outline","type","button",3,"color","click",4,"ngFor","ngForOf"],["cButton","","color","primary","type","submit",1,"me-1",3,"disabled"],["cButton","","color","secondary","type","button",3,"click","disabled"],[3,"valid"],["cButton","","variant","outline","type","button",1,"me-2","mb-2",3,"click","color"]],template:function(a,c){a&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`
    `),t(4,"c-card",1),e(5,`
      `),t(6,"c-card-header"),e(7,`
        `),t(8,"strong"),e(9,"Update Golf Course"),i(),e(10,`
      `),i(),e(11,`
      `),t(12,"c-card-body"),e(13,`
        `),t(14,"form",2),y("ngSubmit",function(){return c.onSubmit()}),e(15,`
          `),e(16,`
          `),t(17,"c-col",3),e(18,`
            `),x(19,"input",4),e(20,`
            `),t(21,"label",5),e(22,"Course Name"),i(),e(23,`
            `),f(24,ne,2,2,"c-form-feedback",6),e(25,`
          `),i(),e(26,`

          `),t(27,"c-col",3),e(28,`
            `),x(29,"input",7),e(30,`
            `),t(31,"label",8),e(32,"Course Number"),i(),e(33,`
            `),f(34,oe,2,2,"c-form-feedback",6),e(35,`
          `),i(),e(36,`

          `),t(37,"c-col",3),e(38,`
            `),x(39,"input",9),e(40,`
            `),t(41,"label",10),e(42,"Street Name"),i(),e(43,`
            `),f(44,re,2,2,"c-form-feedback",6),e(45,`
          `),i(),e(46,`

          `),t(47,"c-col",3),e(48,`
            `),x(49,"input",11),e(50,`
            `),t(51,"label",12),e(52,"Locality"),i(),e(53,`
            `),f(54,ae,2,2,"c-form-feedback",6),e(55,`
          `),i(),e(56,`

          `),t(57,"c-col",3),e(58,`
            `),x(59,"input",13),e(60,`
            `),t(61,"label",14),e(62,"Town"),i(),e(63,`
            `),f(64,le,2,2,"c-form-feedback",6),e(65,`
          `),i(),e(66,`

          `),t(67,"c-col",3),e(68,`
            `),x(69,"input",15),e(70,`
            `),t(71,"label",16),e(72,"Postcode"),i(),e(73,`
            `),f(74,ce,2,2,"c-form-feedback",6),e(75,`
          `),i(),e(76,`

          `),t(77,"c-col",3),e(78,`
            `),x(79,"input",17),e(80,`
            `),t(81,"label",18),e(82,"Country"),i(),e(83,`
            `),f(84,me,2,2,"c-form-feedback",6),e(85,`
          `),i(),e(86,`

          `),t(87,"c-col",3),e(88,`
            `),x(89,"input",19),e(90,`
            `),t(91,"label",20),e(92,"Phone Number"),i(),e(93,`
            `),f(94,se,2,2,"c-form-feedback",6),e(95,`
          `),i(),e(96,`

          `),t(97,"c-col",3),e(98,`
            `),x(99,"input",21),e(100,`
            `),t(101,"label",22),e(102,"Website"),i(),e(103,`
            `),f(104,de,2,2,"c-form-feedback",6),e(105,`
          `),i(),e(106,`

          `),t(107,"c-col",3),e(108,`
            `),x(109,"input",23),e(110,`
            `),t(111,"label",24),e(112,"Location"),i(),e(113,`
            `),f(114,pe,2,2,"c-form-feedback",6),e(115,`
          `),i(),e(116,`

          `),t(117,"c-col",25),e(118,`
            `),x(119,"textarea",26),e(120,`
            `),t(121,"label",27),e(122,"Description"),i(),e(123,`
            `),f(124,ue,2,2,"c-form-feedback",6),e(125,`
          `),i(),e(126,`

          `),t(127,"c-col",28),e(128,`
            `),t(129,"label",29),e(130,"Amenities"),i(),e(131,`
            `),t(132,"div",30),e(133,`
              `),f(134,fe,2,2,"button",31),e(135,`
            `),i(),e(136,`
            `),f(137,xe,2,2,"c-form-feedback",6),e(138,`
          `),i(),e(139,`

          `),e(140,`
          `),t(141,"c-col",0),e(142,`
            `),t(143,"button",32),e(144),i(),e(145,`
            `),t(146,"button",33),y("click",function(){return c.onCancel()}),e(147,`
              Cancel
            `),i(),e(148,`
          `),i(),e(149,`
        `),i(),e(150,`
      `),i(),e(151,`
    `),i(),e(152,`
  `),i(),e(153,`
`),i()),a&2&&(o(14),r("formGroup",c.golfCourseForm),o(3),r("cFormFloating",!0),o(7),r("ngIf",c.isFieldInvalid("courseName")),o(3),r("cFormFloating",!0),o(7),r("ngIf",c.isFieldInvalid("courseNumber")),o(3),r("cFormFloating",!0),o(7),r("ngIf",c.isFieldInvalid("streetName")),o(3),r("cFormFloating",!0),o(7),r("ngIf",c.isFieldInvalid("locality")),o(3),r("cFormFloating",!0),o(7),r("ngIf",c.isFieldInvalid("town")),o(3),r("cFormFloating",!0),o(7),r("ngIf",c.isFieldInvalid("postcode")),o(3),r("cFormFloating",!0),o(7),r("ngIf",c.isFieldInvalid("country")),o(3),r("cFormFloating",!0),o(7),r("ngIf",c.isFieldInvalid("phoneNumber")),o(3),r("cFormFloating",!0),o(7),r("ngIf",c.isFieldInvalid("website")),o(3),r("cFormFloating",!0),o(7),r("ngIf",c.isFieldInvalid("golfLocation")),o(3),r("cFormFloating",!0),o(7),r("ngIf",c.isFieldInvalid("golfDescription")),o(10),r("ngForOf",c.amenitiesList),o(3),r("ngIf",c.isFieldInvalid("amenities")),o(6),r("disabled",c.loading),o(),p(`
              `,c.loading?"Saving...":"Update Golf Course",`
            `),o(2),r("disabled",c.loading))},dependencies:[L,T,w,$,R,M,P,B,q,Y,H,Z,z,W,J,K,X,O,G,j,V,U]});let n=s;return n})();export{Se as UpdateCoursesComponent};
