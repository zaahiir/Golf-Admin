import{a as ee}from"./chunk-RHLFL3DR.js";import"./chunk-AUROHWJP.js";import{a as ie}from"./chunk-DVM5LER3.js";import{$ as O,$a as X,Ga as U,Ha as x,I as D,Ia as W,J as A,Ja as $,O as B,Oa as J,P as q,Ra as K,S as V,Ua as Q,aa as P,ab as Y,bb as Z,c as w,d as L,da as H,fa as R,g as T,ga as G,ja as z,ka as j,r as M}from"./chunk-M3QMQC54.js";import{Ib as t,Jb as i,Kb as u,Ob as E,Sb as _,Tb as d,_a as k,bb as r,cb as F,cc as e,ec as p,ha as I,lc as N,sa as v,sb as f,ta as h,yb as o}from"./chunk-X7YB6HNB.js";import{f as te,k as S}from"./chunk-AAPNLDO3.js";var g=te(ie());function ne(n,s){if(n&1&&(t(0,"c-form-feedback",41),e(1),i()),n&2){let l=d();o("valid",!1),r(),p(`
              `,l.getErrorMessage("courseName"),`
            `)}}function re(n,s){if(n&1&&(t(0,"c-form-feedback",41),e(1),i()),n&2){let l=d();o("valid",!1),r(),p(`
              `,l.getErrorMessage("courseNumber"),`
            `)}}function oe(n,s){if(n&1&&(t(0,"c-form-feedback",41),e(1),i()),n&2){let l=d();o("valid",!1),r(),p(`
              `,l.getErrorMessage("streetName"),`
            `)}}function ae(n,s){if(n&1&&(t(0,"c-form-feedback",41),e(1),i()),n&2){let l=d();o("valid",!1),r(),p(`
              `,l.getErrorMessage("locality"),`
            `)}}function le(n,s){if(n&1&&(t(0,"c-form-feedback",41),e(1),i()),n&2){let l=d();o("valid",!1),r(),p(`
              `,l.getErrorMessage("town"),`
            `)}}function ce(n,s){if(n&1&&(t(0,"c-form-feedback",41),e(1),i()),n&2){let l=d();o("valid",!1),r(),p(`
              `,l.getErrorMessage("postcode"),`
            `)}}function me(n,s){if(n&1&&(t(0,"c-form-feedback",41),e(1),i()),n&2){let l=d();o("valid",!1),r(),p(`
              `,l.getErrorMessage("country"),`
            `)}}function se(n,s){if(n&1&&(t(0,"c-form-feedback",41),e(1),i()),n&2){let l=d();o("valid",!1),r(),p(`
              `,l.getErrorMessage("phoneNumber"),`
            `)}}function de(n,s){if(n&1&&(t(0,"c-form-feedback",41),e(1),i()),n&2){let l=d();o("valid",!1),r(),p(`
              `,l.getErrorMessage("website"),`
            `)}}function fe(n,s){if(n&1&&(t(0,"c-form-feedback",41),e(1),i()),n&2){let l=d();o("valid",!1),r(),p(`
              `,l.getErrorMessage("golfLocation"),`
            `)}}function pe(n,s){if(n&1&&(t(0,"c-form-feedback",41),e(1),i()),n&2){let l=d();o("valid",!1),r(),p(`
              `,l.getErrorMessage("golfHighlight"),`
            `)}}function ue(n,s){if(n&1&&(t(0,"c-form-feedback",41),e(1),i()),n&2){let l=d();o("valid",!1),r(),p(`
              `,l.getErrorMessage("golfDescription"),`
            `)}}function xe(n,s){if(n&1&&(t(0,"c-form-feedback",41),e(1),i()),n&2){let l=d();o("valid",!1),r(),p(`
                `,l.getErrorMessage("blogImage"),`
              `)}}function ge(n,s){if(n&1&&(t(0,"div",42),e(1,`
              `),u(2,"img",43),e(3,`
            `),i()),n&2){let l=d();r(2),o("src",l.imagePreview,k)}}function Ce(n,s){if(n&1){let l=E();t(0,"button",44),_("click",function(){let m=v(l).$implicit,a=d();return h(a.toggleAmenity(m))}),e(1),i()}if(n&2){let l=s.$implicit,c=d();o("color",c.isAmenitySelected(l.id)?"primary":"secondary"),r(),p(`
                `,l.amenityName,`
              `)}}function be(n,s){if(n&1&&(t(0,"c-form-feedback",41),e(1),i()),n&2){let l=d();o("valid",!1),r(),p(`
              `,l.getErrorMessage("amenities"),`
            `)}}var Ne=(()=>{let s=class s{constructor(c,m,a){this.formBuilder=c,this.router=m,this.courseService=a,this.loading=!1,this.submitted=!1,this.amenitiesList=[],this.selectedAmenities=[],this.imagePreview=null,this.selectedFile=null}ngOnInit(){this.initializeForm(),this.loadAmenities()}loadAmenities(){return S(this,null,function*(){try{let c=yield this.courseService.getAmenities();this.amenitiesList=c.data||[]}catch{yield g.default.fire({title:"Error!",text:"Failed to load amenities",icon:"error",confirmButtonText:"Ok"})}})}initializeForm(){this.golfCourseForm=this.formBuilder.group({courseName:["",[x.required]],courseNumber:["",[x.required]],streetName:["",[x.required]],locality:["",[x.required]],town:["",[x.required]],postcode:["",[x.required]],country:["",[x.required]],phoneNumber:["",[x.required]],website:["",[x.required,x.pattern("https?://.+")]],amenities:[[],[x.required,x.minLength(1)]],golfDescription:[""],golfHighlight:[""],golfLocation:["",[x.required]],courseImage:[null],hideStatus:[0]})}onFileChange(c){let m=c.target;if(m.files&&m.files[0]){let a=m.files[0];if(!a.type.startsWith("image/")){g.default.fire({title:"Error!",text:"Please select an image file",icon:"error",confirmButtonText:"Ok"});return}let C=5*1024*1024;if(a.size>C){g.default.fire({title:"Error!",text:"Image size should not exceed 5MB",icon:"error",confirmButtonText:"Ok"});return}this.selectedFile=a;let b=new FileReader;b.onload=y=>{this.imagePreview=y.target.result},b.readAsDataURL(a)}}isAmenitySelected(c){return this.selectedAmenities.includes(c)}toggleAmenity(c){let m=this.selectedAmenities.indexOf(c.id);m===-1?this.selectedAmenities.push(c.id):this.selectedAmenities.splice(m,1),this.golfCourseForm.patchValue({amenities:this.selectedAmenities}),this.golfCourseForm.get("amenities")?.markAsTouched()}get f(){return this.golfCourseForm.controls}onSubmit(){return S(this,null,function*(){if(this.submitted=!0,this.golfCourseForm.invalid){Object.keys(this.golfCourseForm.controls).forEach(c=>{this.golfCourseForm.get(c)?.markAsTouched()});return}try{this.loading=!0;let c=new FormData;Object.keys(this.golfCourseForm.value).forEach(a=>{a!=="courseImage"&&a!=="amenities"&&c.append(a,this.golfCourseForm.value[a])}),c.append("amenities",JSON.stringify(this.selectedAmenities)),this.selectedFile&&c.append("courseImage",this.selectedFile);let m=yield this.courseService.processCourse(c);if(m.data.code===1)yield g.default.fire({title:"Success!",text:"Golf course has been created successfully",icon:"success",confirmButtonText:"Ok"}),this.router.navigate(["/courses"]);else throw new Error(m.data.message||"Unknown error occurred")}catch(c){yield g.default.fire({title:"Error!",text:c instanceof Error?c.message:"Failed to create golf course",icon:"error",confirmButtonText:"Ok"})}finally{this.loading=!1}})}onReset(){this.submitted=!1,this.selectedAmenities=[],this.imagePreview=null,this.selectedFile=null,this.golfCourseForm.reset({hideStatus:0,amenities:[]})}isFieldInvalid(c){let m=this.golfCourseForm.get(c);return!!(m&&m.invalid&&(m.dirty||m.touched||this.submitted))}getErrorMessage(c){let m=this.golfCourseForm.get(c);if(!m||!m.errors)return"";if(m.errors.required)return"This field is required";if(m.errors.minlength)return c==="amenities"?"Please select at least one amenity":`Minimum length is ${m.errors.minlength.requiredLength} characters`;if(m.errors.pattern)switch(c){case"postcode":return"Invalid postcode format";case"phoneNumber":return"Invalid phone number format";case"website":return"Invalid website URL";default:return"Invalid format"}return"Invalid input"}};s.\u0275fac=function(m){return new(m||s)(F(X),F(M),F(ee))},s.\u0275cmp=I({type:s,selectors:[["app-create-courses"]],standalone:!0,features:[N],decls:183,vars:32,consts:[["form","ngForm"],["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3","needs-validation",3,"ngSubmit","formGroup"],["md","6",3,"cFormFloating"],["cFormControl","","id","courseName","formControlName","courseName","type","text","placeholder","Course Name"],["cLabel","","for","courseName",1,"ms-2"],[3,"valid",4,"ngIf"],["cFormControl","","id","courseNumber","formControlName","courseNumber","type","text","placeholder","Course Number"],["cLabel","","for","courseNumber",1,"ms-2"],["cFormControl","","id","streetName","formControlName","streetName","type","text","placeholder","Street Name"],["cLabel","","for","streetName",1,"ms-2"],["cFormControl","","id","locality","formControlName","locality","type","text","placeholder","Locality"],["cLabel","","for","locality",1,"ms-2"],["cFormControl","","id","town","formControlName","town","type","text","placeholder","Town"],["cLabel","","for","town",1,"ms-2"],["cFormControl","","id","postcode","formControlName","postcode","type","text","placeholder","Postcode"],["cLabel","","for","postcode",1,"ms-2"],["cFormControl","","id","country","formControlName","country","type","text","placeholder","Country"],["cLabel","","for","country",1,"ms-2"],["cFormControl","","id","phoneNumber","formControlName","phoneNumber","type","text","placeholder","Phone Number"],["cLabel","","for","phoneNumber",1,"ms-2"],["cFormControl","","id","website","formControlName","website","type","url","placeholder","Website"],["cLabel","","for","website",1,"ms-2"],["cFormControl","","id","golfLocation","formControlName","golfLocation","type","text","placeholder","Location"],["cLabel","","for","golfLocation",1,"ms-2"],["md","12",3,"cFormFloating"],["cFormControl","","id","golfHighlight","formControlName","golfHighlight","placeholder","Highlight","rows","3"],["cLabel","","for","golfHighlight",1,"ms-2"],["cFormControl","","id","golfDescription","formControlName","golfDescription","placeholder","Description","rows","3"],["cLabel","","for","golfDescription",1,"ms-2"],["md","12"],[1,"mb-1"],["cLabel","","for","CourseImage"],["cFormControl","","id","Coursemage","type","file","accept","image/*",3,"change"],["class","mb-3",4,"ngIf"],["cLabel",""],[1,"amenities-container"],["cButton","","class","me-2 mb-2","variant","outline","type","button",3,"color","click",4,"ngFor","ngForOf"],["cButton","","color","primary","type","submit",1,"me-1",3,"disabled"],["cButton","","color","secondary","type","button",3,"click","disabled"],[3,"valid"],[1,"mb-3"],["alt","Preview",1,"img-thumbnail",2,"max-width","200px",3,"src"],["cButton","","variant","outline","type","button",1,"me-2","mb-2",3,"click","color"]],template:function(m,a){if(m&1){let C=E();t(0,"c-row"),e(1,`
  `),t(2,"c-col",1),e(3,`
    `),t(4,"c-card",2),e(5,`
      `),t(6,"c-card-header"),e(7,`
        `),t(8,"strong"),e(9,"New Golf Course"),i(),e(10,`
      `),i(),e(11,`
      `),t(12,"c-card-body"),e(13,`
        `),t(14,"form",3,0),_("ngSubmit",function(){return v(C),h(a.onSubmit())}),e(16,`
          `),e(17,`
          `),t(18,"c-col",4),e(19,`
            `),u(20,"input",5),e(21,`
            `),t(22,"label",6),e(23,"Course Name"),i(),e(24,`
            `),f(25,ne,2,2,"c-form-feedback",7),e(26,`
          `),i(),e(27,`

          `),t(28,"c-col",4),e(29,`
            `),u(30,"input",8),e(31,`
            `),t(32,"label",9),e(33,"Course Number"),i(),e(34,`
            `),f(35,re,2,2,"c-form-feedback",7),e(36,`
          `),i(),e(37,`

          `),t(38,"c-col",4),e(39,`
            `),u(40,"input",10),e(41,`
            `),t(42,"label",11),e(43,"Street Name"),i(),e(44,`
            `),f(45,oe,2,2,"c-form-feedback",7),e(46,`
          `),i(),e(47,`

          `),t(48,"c-col",4),e(49,`
            `),u(50,"input",12),e(51,`
            `),t(52,"label",13),e(53,"Locality"),i(),e(54,`
            `),f(55,ae,2,2,"c-form-feedback",7),e(56,`
          `),i(),e(57,`

          `),t(58,"c-col",4),e(59,`
            `),u(60,"input",14),e(61,`
            `),t(62,"label",15),e(63,"Town"),i(),e(64,`
            `),f(65,le,2,2,"c-form-feedback",7),e(66,`
          `),i(),e(67,`

          `),t(68,"c-col",4),e(69,`
            `),u(70,"input",16),e(71,`
            `),t(72,"label",17),e(73,"Postcode"),i(),e(74,`
            `),f(75,ce,2,2,"c-form-feedback",7),e(76,`
          `),i(),e(77,`

          `),t(78,"c-col",4),e(79,`
            `),u(80,"input",18),e(81,`
            `),t(82,"label",19),e(83,"Country"),i(),e(84,`
            `),f(85,me,2,2,"c-form-feedback",7),e(86,`
          `),i(),e(87,`

          `),t(88,"c-col",4),e(89,`
            `),u(90,"input",20),e(91,`
            `),t(92,"label",21),e(93,"Phone Number"),i(),e(94,`
            `),f(95,se,2,2,"c-form-feedback",7),e(96,`
          `),i(),e(97,`

          `),t(98,"c-col",4),e(99,`
            `),u(100,"input",22),e(101,`
            `),t(102,"label",23),e(103,"Website"),i(),e(104,`
            `),f(105,de,2,2,"c-form-feedback",7),e(106,`
          `),i(),e(107,`

          `),t(108,"c-col",4),e(109,`
            `),u(110,"input",24),e(111,`
            `),t(112,"label",25),e(113,"Location"),i(),e(114,`
            `),f(115,fe,2,2,"c-form-feedback",7),e(116,`
          `),i(),e(117,`

          `),t(118,"c-col",26),e(119,`
            `),u(120,"textarea",27),e(121,`
            `),t(122,"label",28),e(123,"Highlight"),i(),e(124,`
            `),f(125,pe,2,2,"c-form-feedback",7),e(126,`
          `),i(),e(127,`

          `),t(128,"c-col",26),e(129,`
            `),u(130,"textarea",29),e(131,`
            `),t(132,"label",30),e(133,"Description"),i(),e(134,`
            `),f(135,ue,2,2,"c-form-feedback",7),e(136,`
          `),i(),e(137,`

          `),e(138,`
          `),t(139,"c-col",31),e(140,`
            `),t(141,"div",32),e(142,`
              `),t(143,"label",33),e(144,"Course Image"),i(),e(145,`
              `),t(146,"input",34),_("change",function(y){return v(C),h(a.onFileChange(y))}),i(),e(147,`
              `),f(148,xe,2,2,"c-form-feedback",7),e(149,`
            `),i(),e(150,`
            `),e(151,`
            `),f(152,ge,4,1,"div",35),e(153,`
          `),i(),e(154,`

          `),e(155,`
          `),t(156,"c-col",31),e(157,`
            `),t(158,"label",36),e(159,"Amenities"),i(),e(160,`
            `),t(161,"div",37),e(162,`
              `),f(163,Ce,2,2,"button",38),e(164,`
            `),i(),e(165,`
            `),f(166,be,2,2,"c-form-feedback",7),e(167,`
          `),i(),e(168,`

          `),e(169,`
          `),t(170,"c-col",1),e(171,`
            `),t(172,"button",39),e(173),i(),e(174,`
            `),t(175,"button",40),_("click",function(){return v(C),h(a.onReset())}),e(176,`
              Reset Form
            `),i(),e(177,`
          `),i(),e(178,`
        `),i(),e(179,`
      `),i(),e(180,`
    `),i(),e(181,`
  `),i(),e(182,`
`),i()}m&2&&(r(14),o("formGroup",a.golfCourseForm),r(4),o("cFormFloating",!0),r(7),o("ngIf",a.isFieldInvalid("courseName")),r(3),o("cFormFloating",!0),r(7),o("ngIf",a.isFieldInvalid("courseNumber")),r(3),o("cFormFloating",!0),r(7),o("ngIf",a.isFieldInvalid("streetName")),r(3),o("cFormFloating",!0),r(7),o("ngIf",a.isFieldInvalid("locality")),r(3),o("cFormFloating",!0),r(7),o("ngIf",a.isFieldInvalid("town")),r(3),o("cFormFloating",!0),r(7),o("ngIf",a.isFieldInvalid("postcode")),r(3),o("cFormFloating",!0),r(7),o("ngIf",a.isFieldInvalid("country")),r(3),o("cFormFloating",!0),r(7),o("ngIf",a.isFieldInvalid("phoneNumber")),r(3),o("cFormFloating",!0),r(7),o("ngIf",a.isFieldInvalid("website")),r(3),o("cFormFloating",!0),r(7),o("ngIf",a.isFieldInvalid("golfLocation")),r(3),o("cFormFloating",!0),r(7),o("ngIf",a.isFieldInvalid("golfHighlight")),r(3),o("cFormFloating",!0),r(7),o("ngIf",a.isFieldInvalid("golfDescription")),r(13),o("ngIf",a.isFieldInvalid("CourseImage")),r(4),o("ngIf",a.imagePreview),r(11),o("ngForOf",a.amenitiesList),r(3),o("ngIf",a.isFieldInvalid("amenities")),r(6),o("disabled",a.loading),r(),p(`
              `,a.loading?"Saving...":"Save Golf Course",`
            `),r(2),o("disabled",a.loading))},dependencies:[L,T,w,j,z,B,G,V,q,Z,J,U,W,$,K,Q,Y,O,H,R,P,D,A]});let n=s;return n})();export{Ne as CreateCoursesComponent};
