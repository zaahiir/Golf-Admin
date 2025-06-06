import{a as ee}from"./chunk-RHLFL3DR.js";import"./chunk-AUROHWJP.js";import{a as ne}from"./chunk-DVM5LER3.js";import{$ as O,$a as Q,Ga as Z,Ha as u,I as U,Ia as z,Ja as W,O as M,Oa as H,P as q,Ra as J,S as B,Ua as K,aa as V,ab as X,bb as Y,c as w,d as L,da as G,fa as j,g as T,ga as P,ja as R,ka as $,p as A,r as D}from"./chunk-M3QMQC54.js";import{Ib as t,Jb as i,Kb as x,Ob as N,Sb as y,Tb as d,bb as o,cb as C,cc as e,ec as p,ha as E,lc as k,sa as S,sb as f,ta as I,yb as r}from"./chunk-X7YB6HNB.js";import{a as v,b as h,f as ie,k as b}from"./chunk-AAPNLDO3.js";var _=ie(ne());function oe(n,m){if(n&1&&(t(0,"c-form-feedback",34),e(1),i()),n&2){let c=d();r("valid",!1),o(),p(`
              `,c.getErrorMessage("courseName"),`
            `)}}function re(n,m){if(n&1&&(t(0,"c-form-feedback",34),e(1),i()),n&2){let c=d();r("valid",!1),o(),p(`
              `,c.getErrorMessage("courseNumber"),`
            `)}}function ae(n,m){if(n&1&&(t(0,"c-form-feedback",34),e(1),i()),n&2){let c=d();r("valid",!1),o(),p(`
              `,c.getErrorMessage("streetName"),`
            `)}}function le(n,m){if(n&1&&(t(0,"c-form-feedback",34),e(1),i()),n&2){let c=d();r("valid",!1),o(),p(`
              `,c.getErrorMessage("locality"),`
            `)}}function ce(n,m){if(n&1&&(t(0,"c-form-feedback",34),e(1),i()),n&2){let c=d();r("valid",!1),o(),p(`
              `,c.getErrorMessage("town"),`
            `)}}function se(n,m){if(n&1&&(t(0,"c-form-feedback",34),e(1),i()),n&2){let c=d();r("valid",!1),o(),p(`
              `,c.getErrorMessage("postcode"),`
            `)}}function me(n,m){if(n&1&&(t(0,"c-form-feedback",34),e(1),i()),n&2){let c=d();r("valid",!1),o(),p(`
              `,c.getErrorMessage("country"),`
            `)}}function de(n,m){if(n&1&&(t(0,"c-form-feedback",34),e(1),i()),n&2){let c=d();r("valid",!1),o(),p(`
              `,c.getErrorMessage("phoneNumber"),`
            `)}}function pe(n,m){if(n&1&&(t(0,"c-form-feedback",34),e(1),i()),n&2){let c=d();r("valid",!1),o(),p(`
              `,c.getErrorMessage("website"),`
            `)}}function ue(n,m){if(n&1&&(t(0,"c-form-feedback",34),e(1),i()),n&2){let c=d();r("valid",!1),o(),p(`
              `,c.getErrorMessage("golfLocation"),`
            `)}}function fe(n,m){if(n&1&&(t(0,"c-form-feedback",34),e(1),i()),n&2){let c=d();r("valid",!1),o(),p(`
              `,c.getErrorMessage("golfDescription"),`
            `)}}function xe(n,m){if(n&1){let c=N();t(0,"button",35),y("click",function(){let l=S(c).$implicit,s=d();return I(s.toggleAmenity(l.id))}),e(1),i()}if(n&2){let c=m.$implicit,a=d();r("color",a.isAmenitySelected(c.id)?"primary":"secondary"),o(),p(`
                `,c.amenityName,`
              `)}}function ge(n,m){if(n&1&&(t(0,"c-form-feedback",34),e(1),i()),n&2){let c=d();r("valid",!1),o(),p(`
              `,c.getErrorMessage("amenities"),`
            `)}}var Ie=(()=>{let m=class m{constructor(a,l,s,g){this.formBuilder=a,this.router=l,this.route=s,this.courseService=g,this.loading=!1,this.submitted=!1,this.amenitiesList=[],this.courseId="",this.selectedAmenityIds=[]}ngOnInit(){this.initializeForm(),this.loadAmenities(),this.route.params.subscribe(a=>{this.courseId=a.id,this.courseId&&this.loadCourseData(this.courseId)})}initializeForm(){this.golfCourseForm=this.formBuilder.group({courseName:["",[u.required]],courseNumber:["",[u.required]],streetName:["",[u.required]],locality:["",[u.required]],town:["",[u.required]],postcode:["",[u.required,u.pattern("^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$")]],country:["",[u.required]],phoneNumber:["",[u.required,u.pattern("^[0-9]{10,12}$")]],website:["",[u.required,u.pattern("^https?://.*")]],amenities:[[],[u.required]],golfDescription:[""],golfLocation:["",[u.required]],hideStatus:[0]})}loadAmenities(){return b(this,null,function*(){try{let a=yield this.courseService.getAmenities();this.amenitiesList=a.data||[]}catch{yield this.showError("Failed to load amenities")}})}loadCourseData(a){return b(this,null,function*(){try{let l=yield this.courseService.listCourse(a);if(l.data.code===1&&l.data.data.length>0){let s=l.data.data[0];this.selectedAmenityIds=s.amenities.map(g=>{let F=this.amenitiesList.find(te=>te.amenityName===g);return F?F.id:null}).filter(g=>g!==null),this.golfCourseForm.patchValue(h(v({},s),{amenities:this.selectedAmenityIds}))}else throw new Error("Course not found")}catch{yield this.showError("Failed to load course data"),this.router.navigate(["/courses"])}})}isAmenitySelected(a){return this.selectedAmenityIds.includes(a)}toggleAmenity(a){let l=this.selectedAmenityIds.indexOf(a);l===-1?this.selectedAmenityIds.push(a):this.selectedAmenityIds.splice(l,1),this.golfCourseForm.patchValue({amenities:this.selectedAmenityIds}),this.golfCourseForm.get("amenities")?.markAsTouched()}get f(){return this.golfCourseForm.controls}onSubmit(){return b(this,null,function*(){if(this.submitted=!0,this.golfCourseForm.invalid){Object.keys(this.golfCourseForm.controls).forEach(a=>{this.golfCourseForm.get(a)?.markAsTouched()});return}try{this.loading=!0;let a=h(v({},this.golfCourseForm.value),{amenities:this.selectedAmenityIds}),l=yield this.courseService.processCourse(a,this.courseId);if(l.data.code===1)yield _.default.fire({title:"Success!",text:"Golf course has been updated successfully",icon:"success",confirmButtonText:"Ok"}),this.router.navigate(["/courses"]);else throw new Error(l.data.message||"Unknown error occurred")}catch(a){yield this.showError(a instanceof Error?a.message:"Failed to update golf course")}finally{this.loading=!1}})}onCancel(){this.router.navigate(["/courses"])}isFieldInvalid(a){let l=this.golfCourseForm.get(a);return!!(l&&l.invalid&&(l.dirty||l.touched||this.submitted))}getErrorMessage(a){let l=this.golfCourseForm.get(a);if(!l||!l.errors)return"";if(l.errors.required)return"This field is required";if(l.errors.minlength)return a==="amenities"?"Please select at least one amenity":`Minimum length is ${l.errors.minlength.requiredLength} characters`;if(l.errors.pattern)switch(a){case"postcode":return"Invalid postcode format";case"phoneNumber":return"Invalid phone number format";case"website":return"Invalid website URL format";default:return"Invalid format"}return"Invalid input"}showError(a){return b(this,null,function*(){yield _.default.fire({title:"Error!",text:a,icon:"error",confirmButtonText:"Ok"})})}};m.\u0275fac=function(l){return new(l||m)(C(Q),C(D),C(A),C(ee))},m.\u0275cmp=E({type:m,selectors:[["app-update-courses"]],standalone:!0,features:[k],decls:158,vars:28,consts:[["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3","needs-validation",3,"ngSubmit","formGroup"],["md","6",3,"cFormFloating"],["cFormControl","","id","courseName","formControlName","courseName","type","text","placeholder","Course Name"],["cLabel","","for","courseName",1,"ms-2"],[3,"valid",4,"ngIf"],["cFormControl","","id","courseNumber","formControlName","courseNumber","type","text","placeholder","Course Number"],["cLabel","","for","courseNumber",1,"ms-2"],["cFormControl","","id","streetName","formControlName","streetName","type","text","placeholder","Street Name"],["cLabel","","for","streetName",1,"ms-2"],["cFormControl","","id","locality","formControlName","locality","type","text","placeholder","Locality"],["cLabel","","for","locality",1,"ms-2"],["cFormControl","","id","town","formControlName","town","type","text","placeholder","Town"],["cLabel","","for","town",1,"ms-2"],["cFormControl","","id","postcode","formControlName","postcode","type","text","placeholder","Postcode"],["cLabel","","for","postcode",1,"ms-2"],["cFormControl","","id","country","formControlName","country","type","text","placeholder","Country"],["cLabel","","for","country",1,"ms-2"],["cFormControl","","id","phoneNumber","formControlName","phoneNumber","type","text","placeholder","Phone Number"],["cLabel","","for","phoneNumber",1,"ms-2"],["cFormControl","","id","website","formControlName","website","type","url","placeholder","Website"],["cLabel","","for","website",1,"ms-2"],["cFormControl","","id","golfLocation","formControlName","golfLocation","type","text","placeholder","Location"],["cLabel","","for","golfLocation",1,"ms-2"],["md","12",3,"cFormFloating"],["cFormControl","","id","golfDescription","formControlName","golfDescription","placeholder","Description","rows","3"],["cLabel","","for","golfDescription",1,"ms-2"],["md","12"],["cLabel",""],[1,"amenities-container"],["cButton","","class","me-2 mb-2","variant","outline","type","button",3,"color","click",4,"ngFor","ngForOf"],["cButton","","color","primary","type","submit",1,"me-1",3,"disabled"],["cButton","","color","secondary","type","button",3,"click","disabled"],[3,"valid"],["cButton","","variant","outline","type","button",1,"me-2","mb-2",3,"click","color"]],template:function(l,s){l&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`
    `),t(4,"c-card",1),e(5,`
      `),t(6,"c-card-header"),e(7,`
        `),t(8,"strong"),e(9,"Update Golf Course"),i(),e(10,`
      `),i(),e(11,`
      `),t(12,"c-card-body"),e(13,`
        `),t(14,"form",2),y("ngSubmit",function(){return s.onSubmit()}),e(15,`
          `),e(16,`
          `),t(17,"c-col",3),e(18,`
            `),x(19,"input",4),e(20,`
            `),t(21,"label",5),e(22,"Course Name"),i(),e(23,`
            `),f(24,oe,2,2,"c-form-feedback",6),e(25,`
          `),i(),e(26,`

          `),t(27,"c-col",3),e(28,`
            `),x(29,"input",7),e(30,`
            `),t(31,"label",8),e(32,"Course Number"),i(),e(33,`
            `),f(34,re,2,2,"c-form-feedback",6),e(35,`
          `),i(),e(36,`

          `),t(37,"c-col",3),e(38,`
            `),x(39,"input",9),e(40,`
            `),t(41,"label",10),e(42,"Street Name"),i(),e(43,`
            `),f(44,ae,2,2,"c-form-feedback",6),e(45,`
          `),i(),e(46,`

          `),t(47,"c-col",3),e(48,`
            `),x(49,"input",11),e(50,`
            `),t(51,"label",12),e(52,"Locality"),i(),e(53,`
            `),f(54,le,2,2,"c-form-feedback",6),e(55,`
          `),i(),e(56,`

          `),t(57,"c-col",3),e(58,`
            `),x(59,"input",13),e(60,`
            `),t(61,"label",14),e(62,"Town"),i(),e(63,`
            `),f(64,ce,2,2,"c-form-feedback",6),e(65,`
          `),i(),e(66,`

          `),t(67,"c-col",3),e(68,`
            `),x(69,"input",15),e(70,`
            `),t(71,"label",16),e(72,"Postcode"),i(),e(73,`
            `),f(74,se,2,2,"c-form-feedback",6),e(75,`
          `),i(),e(76,`

          `),t(77,"c-col",3),e(78,`
            `),x(79,"input",17),e(80,`
            `),t(81,"label",18),e(82,"Country"),i(),e(83,`
            `),f(84,me,2,2,"c-form-feedback",6),e(85,`
          `),i(),e(86,`

          `),t(87,"c-col",3),e(88,`
            `),x(89,"input",19),e(90,`
            `),t(91,"label",20),e(92,"Phone Number"),i(),e(93,`
            `),f(94,de,2,2,"c-form-feedback",6),e(95,`
          `),i(),e(96,`

          `),t(97,"c-col",3),e(98,`
            `),x(99,"input",21),e(100,`
            `),t(101,"label",22),e(102,"Website"),i(),e(103,`
            `),f(104,pe,2,2,"c-form-feedback",6),e(105,`
          `),i(),e(106,`

          `),t(107,"c-col",3),e(108,`
            `),x(109,"input",23),e(110,`
            `),t(111,"label",24),e(112,"Location"),i(),e(113,`
            `),f(114,ue,2,2,"c-form-feedback",6),e(115,`
          `),i(),e(116,`

          `),t(117,"c-col",25),e(118,`
            `),x(119,"textarea",26),e(120,`
            `),t(121,"label",27),e(122,"Description"),i(),e(123,`
            `),f(124,fe,2,2,"c-form-feedback",6),e(125,`
          `),i(),e(126,`

          `),e(127,`
          `),e(128,`

            `),e(129,`
            `),e(130,`

          `),t(131,"c-col",28),e(132,`
            `),t(133,"label",29),e(134,"Amenities"),i(),e(135,`
            `),t(136,"div",30),e(137,`
              `),f(138,xe,2,2,"button",31),e(139,`
            `),i(),e(140,`
            `),f(141,ge,2,2,"c-form-feedback",6),e(142,`
          `),i(),e(143,`

          `),e(144,`
          `),t(145,"c-col",0),e(146,`
            `),t(147,"button",32),e(148),i(),e(149,`
            `),t(150,"button",33),y("click",function(){return s.onCancel()}),e(151,`
              Cancel
            `),i(),e(152,`
          `),i(),e(153,`
        `),i(),e(154,`
      `),i(),e(155,`
    `),i(),e(156,`
  `),i(),e(157,`
`),i()),l&2&&(o(14),r("formGroup",s.golfCourseForm),o(3),r("cFormFloating",!0),o(7),r("ngIf",s.isFieldInvalid("courseName")),o(3),r("cFormFloating",!0),o(7),r("ngIf",s.isFieldInvalid("courseNumber")),o(3),r("cFormFloating",!0),o(7),r("ngIf",s.isFieldInvalid("streetName")),o(3),r("cFormFloating",!0),o(7),r("ngIf",s.isFieldInvalid("locality")),o(3),r("cFormFloating",!0),o(7),r("ngIf",s.isFieldInvalid("town")),o(3),r("cFormFloating",!0),o(7),r("ngIf",s.isFieldInvalid("postcode")),o(3),r("cFormFloating",!0),o(7),r("ngIf",s.isFieldInvalid("country")),o(3),r("cFormFloating",!0),o(7),r("ngIf",s.isFieldInvalid("phoneNumber")),o(3),r("cFormFloating",!0),o(7),r("ngIf",s.isFieldInvalid("website")),o(3),r("cFormFloating",!0),o(7),r("ngIf",s.isFieldInvalid("golfLocation")),o(3),r("cFormFloating",!0),o(7),r("ngIf",s.isFieldInvalid("golfDescription")),o(14),r("ngForOf",s.amenitiesList),o(3),r("ngIf",s.isFieldInvalid("amenities")),o(6),r("disabled",s.loading),o(),p(`
              `,s.loading?"Saving...":"Update Golf Course",`
            `),o(2),r("disabled",s.loading))},dependencies:[L,T,w,$,R,M,P,B,q,Y,H,Z,z,W,J,K,X,O,G,j,V,U]});let n=m;return n})();export{Ie as UpdateCoursesComponent};
