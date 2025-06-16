import{a as ce}from"./chunk-IVKFIJGA.js";import"./chunk-AUROHWJP.js";import{a as de}from"./chunk-DVM5LER3.js";import{Ia as Q,Ja as g,K as V,Ka as X,L as W,La as Z,Q as q,Qa as ee,R as G,Ta as te,U as z,Wa as ie,Xa as ne,Ya as re,Za as oe,ba as H,bb as ae,c as L,ca as $,cb as se,d as D,db as le,fa as j,g as U,ha as R,ia as J,la as Y,ma as K,o as O,r as B,t as M}from"./chunk-RS62WWGD.js";import{Cb as T,Ib as n,Jb as r,Kb as f,Ob as E,Sb as F,Tb as u,Za as N,_a as k,bb as s,cb as _,cc as e,ec as p,ha as w,lc as P,sa as C,sb as d,ta as v,yb as l}from"./chunk-NP3QOLCN.js";import{a as I,b as A,f as me,k as S}from"./chunk-AAPNLDO3.js";var h=me(de());function ue(o,m){if(o&1&&(n(0,"c-form-feedback",43),e(1),r()),o&2){let c=u();l("valid",!1),s(),p(`
              `,c.getErrorMessage("courseName"),`
            `)}}function pe(o,m){if(o&1&&(n(0,"c-form-feedback",43),e(1),r()),o&2){let c=u();l("valid",!1),s(),p(`
              `,c.getErrorMessage("coursePhoneNumber"),`
            `)}}function fe(o,m){if(o&1&&(n(0,"c-form-feedback",43),e(1),r()),o&2){let c=u();l("valid",!1),s(),p(`
              `,c.getErrorMessage("courseAlternatePhoneNumber"),`
            `)}}function xe(o,m){if(o&1&&(n(0,"c-form-feedback",43),e(1),r()),o&2){let c=u();l("valid",!1),s(),p(`
              `,c.getErrorMessage("courseWebsite"),`
            `)}}function ge(o,m){if(o&1&&(n(0,"c-form-feedback",43),e(1),r()),o&2){let c=u();l("valid",!1),s(),p(`
              `,c.getErrorMessage("courseOpenFrom"),`
            `)}}function he(o,m){if(o&1&&(n(0,"c-form-feedback",43),e(1),r()),o&2){let c=u();l("valid",!1),s(),p(`
              `,c.getErrorMessage("courseAddress"),`
            `)}}function be(o,m){if(o&1&&(n(0,"c-form-feedback",43),e(1),r()),o&2){let c=u();l("valid",!1),s(),p(`
              `,c.getErrorMessage("courseLocation"),`
            `)}}function Ce(o,m){if(o&1&&(n(0,"c-form-feedback",43),e(1),r()),o&2){let c=u();l("valid",!1),s(),p(`
              `,c.getErrorMessage("courseDescription"),`
            `)}}function ve(o,m){if(o&1&&(n(0,"c-form-feedback",43),e(1),r()),o&2){let c=u();l("valid",!1),s(),p(`
                `,c.getErrorMessage("courseImage"),`
              `)}}function _e(o,m){if(o&1&&(n(0,"div",24),e(1,`
              `),n(2,"p",44),e(3,"Image Preview:"),r(),e(4,`
              `),f(5,"img",45),e(6,`
            `),r()),o&2){let c=u();s(5),l("src",c.imagePreview,k)}}function Fe(o,m){o&1&&(n(0,"div",46),e(1,`
                  Loading amenities...
                `),r())}function Se(o,m){if(o&1&&(n(0,"span",50),e(1,`
                  `),r()),o&2){let c=u().$implicit,i=u();l("innerHTML",i.getSafeHtml(c.icon_svg),N)}}function ye(o,m){if(o&1&&f(0,"i",51),o&2){let c=u().$implicit;T("fas "+c.icon)}}function Ee(o,m){if(o&1){let c=E();n(0,"button",47),F("click",function(){let t=C(c).$implicit,a=u();return v(a.toggleAmenity(t))}),e(1,`
                  `),e(2,`
                  `),d(3,Se,2,1,"span",48),e(4,`
                  `),e(5,`
                  `),d(6,ye,1,2,"i",49),e(7),r()}if(o&2){let c=m.$implicit,i=u();l("color",i.isAmenitySelected(c.id)?"primary":"secondary")("title",c.tooltip),s(3),l("ngIf",c.icon_svg),s(3),l("ngIf",!c.icon_svg&&c.icon),s(),p(`
                  `,c.title,`
                `)}}function Ie(o,m){if(o&1&&(n(0,"span",54),e(1),r()),o&2){let c=m.$implicit,i=u(2);s(),p(`
                  `,i.getAmenityTitle(c),`
                `)}}function Ae(o,m){if(o&1&&(n(0,"div",52),e(1,`
                `),n(2,"small",46),e(3,"Selected: "),r(),e(4,`
                `),d(5,Ie,2,1,"span",53),e(6,`
              `),r()),o&2){let c=u();s(5),l("ngForOf",c.selectedAmenities)}}function we(o,m){if(o&1&&(n(0,"c-form-feedback",43),e(1),r()),o&2){let c=u();l("valid",!1),s(),p(`
                `,c.getErrorMessage("courseAmenities"),`
              `)}}function Ne(o,m){o&1&&f(0,"span",55)}var We=(()=>{let m=class m{constructor(i,t,a,x,b){this.formBuilder=i,this.router=t,this.route=a,this.courseService=x,this.domSanitizer=b,this.loading=!1,this.submitted=!1,this.amenitiesList=[],this.selectedAmenities=[],this.imagePreview=null,this.selectedFile=null,this.courseId="",this.hasExistingData=!1}ngOnInit(){this.initializeForm(),this.loadAmenities(),this.route.params.subscribe(i=>{this.courseId=i.id,this.courseId&&this.loadCourseData()})}loadAmenities(){return S(this,null,function*(){try{let i=yield this.courseService.getAmenities();console.log("Amenities response:",i.data),i.data&&i.data.code===1?(this.amenitiesList=i.data.data.map(t=>A(I({},t),{title:t.amenityName||t.title,tooltip:t.amenityTooltip||t.tooltip||t.amenityName})),console.log("Loaded amenities:",this.amenitiesList)):(console.warn("Unexpected amenities response format:",i.data),this.amenitiesList=[])}catch(i){console.error("Error loading amenities:",i),yield h.default.fire({title:"Error!",text:"Failed to load amenities",icon:"error",confirmButtonText:"Ok"})}})}loadCourseData(){return S(this,null,function*(){if(this.courseId)try{this.loading=!0;let i=yield this.courseService.listCourse(this.courseId);if(console.log("Course data response:",i.data),i.data&&i.data.code===1&&i.data.data.length>0){let t=i.data.data[0];this.hasExistingData=!0,console.log("Course data loaded:",t),this.golfCourseForm.patchValue({courseName:t.name||"",courseAddress:t.address||"",courseOpenFrom:t.timing||"",coursePhoneNumber:t.phone||"",courseAlternatePhoneNumber:t.alternatePhone||"",courseWebsite:t.website||"",courseDescription:t.description||"",courseLocation:t.location||"",hideStatus:t.hideStatus||0}),this.selectedAmenities=t.amenities||[],this.golfCourseForm.patchValue({courseAmenities:this.selectedAmenities}),t.imageUrl&&!t.imageUrl.includes("default-course.jpg")&&(this.imagePreview=t.imageUrl),console.log("Form values after patch:",this.golfCourseForm.value),console.log("Selected amenities:",this.selectedAmenities)}else console.warn("No course data found or invalid response format"),yield h.default.fire({title:"Warning!",text:"No course data found",icon:"warning",confirmButtonText:"Ok"})}catch(i){console.error("Error loading course data:",i),yield h.default.fire({title:"Error!",text:"Failed to load course data",icon:"error",confirmButtonText:"Ok"}),this.router.navigate(["/courses"])}finally{this.loading=!1}})}initializeForm(){this.golfCourseForm=this.formBuilder.group({courseName:["",[g.required,g.minLength(2)]],courseAddress:["",[g.required]],courseOpenFrom:[""],coursePhoneNumber:["",[g.required,g.pattern(/^[\+]?[\d\s\-\(\)]+$/)]],courseAlternatePhoneNumber:["",[g.pattern(/^[\+]?[\d\s\-\(\)]+$/)]],courseWebsite:["",[g.pattern(/^https?:\/\/.+/)]],courseDescription:[""],courseLocation:["",[g.required]],courseAmenities:[[],[g.required,g.minLength(1)]],courseImage:[null],hideStatus:[0]})}onFileChange(i){let t=i.target;if(t.files&&t.files[0]){let a=t.files[0];if(!a.type.startsWith("image/")){h.default.fire({title:"Error!",text:"Please select an image file",icon:"error",confirmButtonText:"Ok"});return}let x=5*1024*1024;if(a.size>x){h.default.fire({title:"Error!",text:"Image size should not exceed 5MB",icon:"error",confirmButtonText:"Ok"});return}this.selectedFile=a;let b=new FileReader;b.onload=y=>{this.imagePreview=y.target.result},b.readAsDataURL(a)}}isAmenitySelected(i){return this.selectedAmenities.includes(i)}toggleAmenity(i){let t=this.selectedAmenities.indexOf(i.id);t===-1?this.selectedAmenities.push(i.id):this.selectedAmenities.splice(t,1),this.golfCourseForm.patchValue({courseAmenities:this.selectedAmenities}),this.golfCourseForm.get("courseAmenities")?.markAsTouched()}getAmenityTitle(i){let t=this.amenitiesList.find(a=>a.id===i);return t?t.title:`Amenity ${i}`}getSafeHtml(i){return this.domSanitizer.bypassSecurityTrustHtml(i)}get f(){return this.golfCourseForm.controls}onSubmit(){return S(this,null,function*(){if(this.submitted=!0,this.golfCourseForm.invalid){Object.keys(this.golfCourseForm.controls).forEach(t=>{this.golfCourseForm.get(t)?.markAsTouched()});let i=document.querySelector(".is-invalid");i&&i.scrollIntoView({behavior:"smooth",block:"center"});return}try{this.loading=!0;let i=new FormData,t=this.golfCourseForm.value;i.append("courseName",t.courseName||""),i.append("courseAddress",t.courseAddress||""),i.append("courseOpenFrom",t.courseOpenFrom||""),i.append("coursePhoneNumber",t.coursePhoneNumber||""),i.append("courseAlternatePhoneNumber",t.courseAlternatePhoneNumber||""),i.append("courseWebsite",t.courseWebsite||""),i.append("courseDescription",t.courseDescription||""),i.append("courseLocation",t.courseLocation||""),i.append("hideStatus",t.hideStatus.toString()),i.append("courseAmenities",JSON.stringify(this.selectedAmenities)),this.selectedFile&&i.append("courseImage",this.selectedFile),console.log("Submitting form data:",t),console.log("Selected amenities:",this.selectedAmenities);let a=yield this.courseService.processCourse(i,this.courseId);if(a.data&&a.data.code===1)yield h.default.fire({title:"Success!",text:"Golf course has been updated successfully",icon:"success",confirmButtonText:"Ok"}),this.router.navigate(["/courses"]);else throw new Error(a.data?.message||"Unknown error occurred")}catch(i){console.error("Error updating course:",i);let t="Failed to update golf course";if(i.response?.data?.message)t=i.response.data.message;else if(i.response?.data?.errors){let a=i.response.data.errors;t=Object.keys(a).map(x=>`${x}: ${a[x].join(", ")}`).join(`
`)}else i.message&&(t=i.message);yield h.default.fire({title:"Error!",text:t,icon:"error",confirmButtonText:"Ok"})}finally{this.loading=!1}})}onDelete(){return S(this,null,function*(){if(!this.courseId||!this.hasExistingData)return;if((yield h.default.fire({title:"Are you sure?",text:"This action cannot be undone!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"})).isConfirmed)try{this.loading=!0;let t=yield this.courseService.deleteCourse(this.courseId);if(t.data&&t.data.code===1)yield h.default.fire({title:"Deleted!",text:"Golf course has been deleted successfully",icon:"success",confirmButtonText:"Ok"}),this.router.navigate(["/courses"]);else throw new Error(t.data?.message||"Failed to delete course")}catch(t){console.error("Error deleting course:",t),yield h.default.fire({title:"Error!",text:"Failed to delete golf course",icon:"error",confirmButtonText:"Ok"})}finally{this.loading=!1}})}onReset(){this.submitted=!1,this.selectedAmenities=[],this.imagePreview=null,this.selectedFile=null,this.golfCourseForm.reset({hideStatus:0,courseAmenities:[]}),this.courseId&&this.loadCourseData()}onCancel(){this.router.navigate(["/courses"])}isFieldInvalid(i){let t=this.golfCourseForm.get(i);return!!(t&&t.invalid&&(t.dirty||t.touched||this.submitted))}getErrorMessage(i){let t=this.golfCourseForm.get(i);if(!t||!t.errors)return"";let a=t.errors;if(a.required)switch(i){case"courseAmenities":return"Please select at least one amenity";case"courseName":return"Course name is required";case"courseAddress":return"Course address is required";case"coursePhoneNumber":return"Phone number is required";case"courseLocation":return"Course location is required";default:return"This field is required"}if(a.minlength)return i==="courseAmenities"?"Please select at least one amenity":`Minimum length is ${a.minlength.requiredLength} characters`;if(a.pattern)switch(i){case"coursePhoneNumber":case"courseAlternatePhoneNumber":return"Invalid phone number format";case"courseWebsite":return"Invalid website URL format (must start with http:// or https://)";default:return"Invalid format"}return"Invalid input"}};m.\u0275fac=function(t){return new(t||m)(_(ae),_(M),_(B),_(ce),_(O))},m.\u0275cmp=w({type:m,selectors:[["app-update-courses"]],standalone:!0,features:[P],decls:181,vars:28,consts:[["form","ngForm"],["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3","needs-validation",3,"ngSubmit","formGroup"],["md","6",3,"cFormFloating"],["cFormControl","","id","courseName","formControlName","courseName","type","text","placeholder","Course Name"],["cLabel","","for","courseName",1,"ms-2"],[3,"valid",4,"ngIf"],["cFormControl","","id","coursePhoneNumber","formControlName","coursePhoneNumber","type","text","placeholder","Phone Number"],["cLabel","","for","coursePhoneNumber",1,"ms-2"],["cFormControl","","id","courseAlternatePhoneNumber","formControlName","courseAlternatePhoneNumber","type","text","placeholder","Alternate Phone Number"],["cLabel","","for","courseAlternatePhoneNumber",1,"ms-2"],["cFormControl","","id","courseWebsite","formControlName","courseWebsite","type","url","placeholder","Website"],["cLabel","","for","courseWebsite",1,"ms-2"],["md","12",3,"cFormFloating"],["cFormControl","","id","courseOpenFrom","formControlName","courseOpenFrom","type","text","placeholder","Opening Hours"],["cLabel","","for","courseOpenFrom",1,"ms-2"],["cFormControl","","id","courseAddress","formControlName","courseAddress","placeholder","Course Address","rows","4"],["cLabel","","for","courseAddress",1,"ms-2"],["cFormControl","","id","courseLocation","formControlName","courseLocation","type","text","placeholder","GPS Coordinates or Detailed Location"],["cLabel","","for","courseLocation",1,"ms-2"],["cFormControl","","id","courseDescription","formControlName","courseDescription","placeholder","Course Description","rows","8"],["cLabel","","for","courseDescription",1,"ms-2"],["md","12"],[1,"mb-3"],["cLabel","","for","courseImage",1,"form-label"],["cFormControl","","id","courseImage","type","file","accept","image/*",1,"form-control",3,"change"],[1,"form-text"],["class","mb-3",4,"ngIf"],["cLabel","",1,"form-label"],[1,"amenities-container","mt-2"],["class","text-muted",4,"ngIf"],["cButton","","class","me-2 mb-2","variant","outline","type","button",3,"color","title","click",4,"ngFor","ngForOf"],["class","mt-2",4,"ngIf"],["md","6"],["cFormSelect","","formControlName","hideStatus",1,"form-select"],["value","0"],["value","1"],["xs","12",1,"d-flex","gap-2"],["cButton","","color","primary","type","submit",1,"d-inline-flex","align-items-center",3,"disabled"],["class","spinner-border spinner-border-sm me-2","role","status","aria-hidden","true",4,"ngIf"],["cButton","","color","secondary","type","button",3,"click","disabled"],["cButton","","color","light","type","button",3,"click","disabled"],[3,"valid"],[1,"mb-2"],["alt","Course Image Preview",1,"img-thumbnail",2,"max-width","300px","max-height","200px",3,"src"],[1,"text-muted"],["cButton","","variant","outline","type","button",1,"me-2","mb-2",3,"click","color","title"],["class","me-1 amenity-icon","style","width: 16px; height: 16px; display: inline-block;",3,"innerHTML",4,"ngIf"],["class","me-1",3,"class",4,"ngIf"],[1,"me-1","amenity-icon",2,"width","16px","height","16px","display","inline-block",3,"innerHTML"],[1,"me-1"],[1,"mt-2"],["class","badge bg-primary me-1",4,"ngFor","ngForOf"],[1,"badge","bg-primary","me-1"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm","me-2"]],template:function(t,a){if(t&1){let x=E();n(0,"c-row"),e(1,`
  `),n(2,"c-col",1),e(3,`
    `),n(4,"c-card",2),e(5,`
      `),n(6,"c-card-header"),e(7,`
        `),n(8,"strong"),e(9,"Update Golf Course"),r(),e(10,`
      `),r(),e(11,`
      `),n(12,"c-card-body"),e(13,`
        `),n(14,"form",3,0),F("ngSubmit",function(){return C(x),v(a.onSubmit())}),e(16,`
          `),e(17,`
          `),n(18,"c-col",4),e(19,`
            `),f(20,"input",5),e(21,`
            `),n(22,"label",6),e(23,"Course Name *"),r(),e(24,`
            `),d(25,ue,2,2,"c-form-feedback",7),e(26,`
          `),r(),e(27,`

          `),n(28,"c-col",4),e(29,`
            `),f(30,"input",8),e(31,`
            `),n(32,"label",9),e(33,"Phone Number *"),r(),e(34,`
            `),d(35,pe,2,2,"c-form-feedback",7),e(36,`
          `),r(),e(37,`

          `),n(38,"c-col",4),e(39,`
            `),f(40,"input",10),e(41,`
            `),n(42,"label",11),e(43,"Alternate Phone Number"),r(),e(44,`
            `),d(45,fe,2,2,"c-form-feedback",7),e(46,`
          `),r(),e(47,`

          `),n(48,"c-col",4),e(49,`
            `),f(50,"input",12),e(51,`
            `),n(52,"label",13),e(53,"Website"),r(),e(54,`
            `),d(55,xe,2,2,"c-form-feedback",7),e(56,`
          `),r(),e(57,`

          `),n(58,"c-col",14),e(59,`
            `),f(60,"input",15),e(61,`
            `),n(62,"label",16),e(63,"Opening Hours"),r(),e(64,`
            `),d(65,ge,2,2,"c-form-feedback",7),e(66,`
          `),r(),e(67,`

          `),e(68,`
          `),n(69,"c-col",14),e(70,`
            `),f(71,"textarea",17),e(72,`
            `),n(73,"label",18),e(74,"Course Address *"),r(),e(75,`
            `),d(76,he,2,2,"c-form-feedback",7),e(77,`
          `),r(),e(78,`

          `),e(79,`
          `),n(80,"c-col",14),e(81,`
            `),f(82,"input",19),e(83,`
            `),n(84,"label",20),e(85,"Course Location (GPS/Directions) *"),r(),e(86,`
            `),d(87,be,2,2,"c-form-feedback",7),e(88,`
          `),r(),e(89,`

          `),e(90,`
          `),n(91,"c-col",14),e(92,`
            `),f(93,"textarea",21),e(94,`
            `),n(95,"label",22),e(96,"Course Description"),r(),e(97,`
            `),d(98,Ce,2,2,"c-form-feedback",7),e(99,`
          `),r(),e(100,`

          `),e(101,`
          `),n(102,"c-col",23),e(103,`
            `),n(104,"div",24),e(105,`
              `),n(106,"label",25),e(107,"Course Image"),r(),e(108,`
              `),n(109,"input",26),F("change",function(y){return C(x),v(a.onFileChange(y))}),r(),e(110,`
              `),n(111,"div",27),e(112,"Maximum file size: 5MB. Supported formats: JPG, PNG, GIF"),r(),e(113,`
              `),d(114,ve,2,2,"c-form-feedback",7),e(115,`
            `),r(),e(116,`
            `),e(117,`
            `),d(118,_e,7,1,"div",28),e(119,`
          `),r(),e(120,`

          `),e(121,`
          `),n(122,"c-col",23),e(123,`
            `),n(124,"div",24),e(125,`
              `),n(126,"label",29),e(127,"Amenities *"),r(),e(128,`
              `),n(129,"div",30),e(130,`
                `),d(131,Fe,2,0,"div",31),e(132,`
                `),d(133,Ee,8,5,"button",32),e(134,`
              `),r(),e(135,`
              `),e(136,`
              `),d(137,Ae,7,1,"div",33),e(138,`
              `),d(139,we,2,2,"c-form-feedback",7),e(140,`
            `),r(),e(141,`
          `),r(),e(142,`

          `),e(143,`
          `),n(144,"c-col",34),e(145,`
            `),n(146,"div",24),e(147,`
              `),n(148,"label",29),e(149,"Status"),r(),e(150,`
              `),n(151,"select",35),e(152,`
                `),n(153,"option",36),e(154,"Active"),r(),e(155,`
                `),n(156,"option",37),e(157,"Hidden"),r(),e(158,`
              `),r(),e(159,`
            `),r(),e(160,`
          `),r(),e(161,`

          `),e(162,`
          `),n(163,"c-col",38),e(164,`
            `),n(165,"button",39),e(166,`
              `),d(167,Ne,1,0,"span",40),e(168),r(),e(169,`

            `),n(170,"button",41),F("click",function(){return C(x),v(a.onReset())}),e(171,`
              Reset Form
            `),r(),e(172,`

            `),n(173,"button",42),F("click",function(){return C(x),v(a.onCancel())}),e(174,`
              Cancel
            `),r(),e(175,`
          `),r(),e(176,`
        `),r(),e(177,`
      `),r(),e(178,`
    `),r(),e(179,`
  `),r(),e(180,`
`),r()}t&2&&(s(14),l("formGroup",a.golfCourseForm),s(4),l("cFormFloating",!0),s(7),l("ngIf",a.isFieldInvalid("courseName")),s(3),l("cFormFloating",!0),s(7),l("ngIf",a.isFieldInvalid("coursePhoneNumber")),s(3),l("cFormFloating",!0),s(7),l("ngIf",a.isFieldInvalid("courseAlternatePhoneNumber")),s(3),l("cFormFloating",!0),s(7),l("ngIf",a.isFieldInvalid("courseWebsite")),s(3),l("cFormFloating",!0),s(7),l("ngIf",a.isFieldInvalid("courseOpenFrom")),s(4),l("cFormFloating",!0),s(7),l("ngIf",a.isFieldInvalid("courseAddress")),s(4),l("cFormFloating",!0),s(7),l("ngIf",a.isFieldInvalid("courseLocation")),s(4),l("cFormFloating",!0),s(7),l("ngIf",a.isFieldInvalid("courseDescription")),s(16),l("ngIf",a.isFieldInvalid("courseImage")),s(4),l("ngIf",a.imagePreview),s(13),l("ngIf",a.amenitiesList.length===0),s(2),l("ngForOf",a.amenitiesList),s(4),l("ngIf",a.selectedAmenities.length>0),s(2),l("ngIf",a.isFieldInvalid("courseAmenities")),s(26),l("disabled",a.loading),s(2),l("ngIf",a.loading),s(),p(`
              `,a.loading?"Updating...":"Update Course",`
            `),s(2),l("disabled",a.loading),s(3),l("disabled",a.loading))},dependencies:[D,L,U,K,Y,q,J,z,G,le,ee,re,oe,Q,ne,X,Z,te,ie,se,H,j,R,$,V,W]});let o=m;return o})();export{We as UpdateCoursesComponent};
