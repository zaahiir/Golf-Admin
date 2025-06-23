import{a as me}from"./chunk-6F2IHE35.js";import"./chunk-AUROHWJP.js";import{a as ue}from"./chunk-DVM5LER3.js";import{$a as ae,Ga as X,Ha as g,Ia as Z,Ja as ee,L as G,M as W,Oa as te,R as j,Ra as ie,S as z,U as H,Ua as ne,Va as re,Wa as oe,Xa as se,ab as le,ba as $,bb as ce,c as L,ca as R,d as M,ea as U,ga as J,h as O,ha as Y,ja as K,ka as Q,p as B,s as V,u as q}from"./chunk-45BFYFPT.js";import{$a as k,Db as T,Jb as n,Kb as r,Lb as x,Pb as S,Tb as F,Ub as d,_a as w,cb as a,db as _,dc as e,ec as P,fc as f,ia as N,mc as D,ta as b,tb as u,ua as v,zb as l}from"./chunk-IO45J2MB.js";import{a as I,b as A,f as de,k as y}from"./chunk-AAPNLDO3.js";var h=de(ue());function pe(o,m){if(o&1&&(n(0,"c-form-feedback",43),e(1),r()),o&2){let c=d();l("valid",!1),a(),f(`
              `,c.getErrorMessage("courseName"),`
            `)}}function fe(o,m){if(o&1&&(n(0,"c-form-feedback",43),e(1),r()),o&2){let c=d();l("valid",!1),a(),f(`
              `,c.getErrorMessage("coursePhoneNumber"),`
            `)}}function xe(o,m){if(o&1&&(n(0,"c-form-feedback",43),e(1),r()),o&2){let c=d();l("valid",!1),a(),f(`
              `,c.getErrorMessage("courseAlternatePhoneNumber"),`
            `)}}function ge(o,m){if(o&1&&(n(0,"c-form-feedback",43),e(1),r()),o&2){let c=d();l("valid",!1),a(),f(`
              `,c.getErrorMessage("courseWebsite"),`
            `)}}function he(o,m){if(o&1&&(n(0,"c-form-feedback",43),e(1),r()),o&2){let c=d();l("valid",!1),a(),f(`
              `,c.getErrorMessage("courseOpenFrom"),`
            `)}}function Ce(o,m){if(o&1&&(n(0,"c-form-feedback",43),e(1),r()),o&2){let c=d();l("valid",!1),a(),f(`
              `,c.getErrorMessage("courseAddress"),`
            `)}}function be(o,m){if(o&1&&(n(0,"c-form-feedback",43),e(1),r()),o&2){let c=d();l("valid",!1),a(),f(`
              `,c.getErrorMessage("courseLocation"),`
            `)}}function ve(o,m){if(o&1&&(n(0,"c-form-feedback",43),e(1),r()),o&2){let c=d();l("valid",!1),a(),f(`
              `,c.getErrorMessage("courseDescription"),`
            `)}}function _e(o,m){if(o&1&&(n(0,"c-form-feedback",43),e(1),r()),o&2){let c=d();l("valid",!1),a(),f(`
                `,c.getErrorMessage("courseImage"),`
              `)}}function Fe(o,m){if(o&1&&(n(0,"div",24),e(1,`
              `),n(2,"p",44),e(3,"Image Preview:"),r(),e(4,`
              `),x(5,"img",45),e(6,`
            `),r()),o&2){let c=d();a(5),l("src",c.imagePreview,k)}}function ye(o,m){o&1&&(n(0,"div",46),e(1,`
                  Loading amenities...
                `),r())}function Se(o,m){if(o&1&&(n(0,"span",50),e(1,`
                  `),r()),o&2){let c=d().$implicit,i=d();l("innerHTML",i.getSafeHtml(c.icon_svg),w)}}function Ee(o,m){if(o&1&&x(0,"i",51),o&2){let c=d().$implicit;T("fas "+c.icon)}}function Ie(o,m){if(o&1){let c=S();n(0,"button",47),F("click",function(){let t=b(c).$implicit,s=d();return v(s.toggleAmenity(t))}),e(1,`
                  `),e(2,`
                  `),u(3,Se,2,1,"span",48),e(4,`
                  `),e(5,`
                  `),u(6,Ee,1,2,"i",49),e(7),r()}if(o&2){let c=m.$implicit,i=d();l("color",i.isAmenitySelected(c.id)?"primary":"secondary")("title",c.tooltip),a(3),l("ngIf",c.icon_svg),a(3),l("ngIf",!c.icon_svg&&c.icon),a(),f(`
                  `,c.title,`
                `)}}function Ae(o,m){if(o&1&&(n(0,"span",54),e(1),r()),o&2){let c=m.$implicit,i=d(2);a(),f(`
                  `,i.getAmenityTitle(c),`
                `)}}function Ne(o,m){if(o&1&&(n(0,"div",52),e(1,`
                `),n(2,"small",46),e(3,"Selected: "),r(),e(4,`
                `),u(5,Ae,2,1,"span",53),e(6,`
              `),r()),o&2){let c=d();a(5),l("ngForOf",c.selectedAmenities)}}function we(o,m){if(o&1&&(n(0,"c-form-feedback",43),e(1),r()),o&2){let c=d();l("valid",!1),a(),f(`
                `,c.getErrorMessage("courseAmenities"),`
              `)}}function ke(o,m){o&1&&x(0,"span",55)}function Te(o,m){if(o&1){let c=S();n(0,"button",56),F("click",function(){b(c);let t=d();return v(t.onDelete())}),e(1,`
              Delete Course
            `),r()}if(o&2){let c=d();l("disabled",c.loading)}}var je=(()=>{let m=class m{constructor(i,t,s,p,C){this.formBuilder=i,this.router=t,this.route=s,this.courseService=p,this.domSanitizer=C,this.loading=!1,this.submitted=!1,this.amenitiesList=[],this.selectedAmenities=[],this.imagePreview=null,this.selectedFile=null,this.isEditMode=!1,this.courseId=null,this.hasExistingData=!1}ngOnInit(){this.initializeForm(),this.loadAmenities(),this.route.params.subscribe(i=>{i.id&&(this.courseId=i.id,this.isEditMode=!0,this.loadCourseData())})}loadAmenities(){return y(this,null,function*(){try{let i=yield this.courseService.getAmenities();i.data&&i.data.code===1?(this.amenitiesList=i.data.data.map(t=>A(I({},t),{title:t.amenityName||t.title,tooltip:t.amenityTooltip||t.tooltip||t.amenityName})),console.log("Loaded amenities:",this.amenitiesList)):(console.warn("Unexpected amenities response format:",i.data),this.amenitiesList=[])}catch(i){console.error("Error loading amenities:",i),yield h.default.fire({title:"Error!",text:"Failed to load amenities",icon:"error",confirmButtonText:"Ok"})}})}loadCourseData(){return y(this,null,function*(){if(this.courseId)try{this.loading=!0;let i=yield this.courseService.listCourse(this.courseId);if(i.data&&i.data.code===1&&i.data.data.length>0){let t=i.data.data[0];this.hasExistingData=!0,this.golfCourseForm.patchValue({courseName:t.courseName||"",courseAddress:t.courseAddress||"",courseOpenFrom:t.courseOpenFrom||"",coursePhoneNumber:t.coursePhoneNumber||"",courseAlternatePhoneNumber:t.courseAlternatePhoneNumber||"",courseWebsite:t.courseWebsite||"",courseDescription:t.courseDescription||"",courseLocation:t.courseLocation||"",hideStatus:t.hideStatus||0}),this.selectedAmenities=t.courseAmenities||t.amenities||[],this.golfCourseForm.patchValue({courseAmenities:this.selectedAmenities}),t.imageUrl&&!t.imageUrl.includes("default-course.jpg")?this.imagePreview=t.imageUrl:t.courseImage&&!t.courseImage.includes("default-course.jpg")&&(this.imagePreview=t.courseImage)}}catch(i){console.error("Error loading course data:",i),yield h.default.fire({title:"Error!",text:"Failed to load course data",icon:"error",confirmButtonText:"Ok"})}finally{this.loading=!1}})}initializeForm(){this.golfCourseForm=this.formBuilder.group({courseName:["",[g.required,g.minLength(2)]],courseAddress:["",[g.required]],courseOpenFrom:[""],coursePhoneNumber:["",[g.required,g.pattern(/^[\+]?[\d\s\-\(\)]+$/)]],courseAlternatePhoneNumber:["",[g.pattern(/^[\+]?[\d\s\-\(\)]+$/)]],courseWebsite:["",[g.pattern(/^https?:\/\/.+/)]],courseDescription:[""],courseLocation:["",[g.required]],courseAmenities:[[],[g.required,g.minLength(1)]],courseImage:[null],hideStatus:[0]})}onFileChange(i){let t=i.target;if(t.files&&t.files[0]){let s=t.files[0];if(!s.type.startsWith("image/")){h.default.fire({title:"Error!",text:"Please select an image file",icon:"error",confirmButtonText:"Ok"});return}let p=5*1024*1024;if(s.size>p){h.default.fire({title:"Error!",text:"Image size should not exceed 5MB",icon:"error",confirmButtonText:"Ok"});return}this.selectedFile=s;let C=new FileReader;C.onload=E=>{this.imagePreview=E.target.result},C.readAsDataURL(s)}}isAmenitySelected(i){return this.selectedAmenities.includes(i)}toggleAmenity(i){let t=this.selectedAmenities.indexOf(i.id);t===-1?this.selectedAmenities.push(i.id):this.selectedAmenities.splice(t,1),this.golfCourseForm.patchValue({courseAmenities:this.selectedAmenities}),this.golfCourseForm.get("courseAmenities")?.markAsTouched()}getAmenityTitle(i){let t=this.amenitiesList.find(s=>s.id===i);return t?t.title:`Amenity ${i}`}getSafeHtml(i){return this.domSanitizer.bypassSecurityTrustHtml(i)}get f(){return this.golfCourseForm.controls}onSubmit(){return y(this,null,function*(){if(this.submitted=!0,this.golfCourseForm.invalid){Object.keys(this.golfCourseForm.controls).forEach(t=>{this.golfCourseForm.get(t)?.markAsTouched()});let i=document.querySelector(".is-invalid");i&&i.scrollIntoView({behavior:"smooth",block:"center"});return}try{this.loading=!0;let i=new FormData,t=this.golfCourseForm.value;i.append("courseName",t.courseName||""),i.append("courseAddress",t.courseAddress||""),i.append("courseOpenFrom",t.courseOpenFrom||""),i.append("coursePhoneNumber",t.coursePhoneNumber||""),i.append("courseAlternatePhoneNumber",t.courseAlternatePhoneNumber||""),i.append("courseWebsite",t.courseWebsite||""),i.append("courseDescription",t.courseDescription||""),i.append("courseLocation",t.courseLocation||""),i.append("hideStatus",t.hideStatus.toString()),i.append("courseAmenities",JSON.stringify(this.selectedAmenities)),this.selectedFile&&i.append("courseImage",this.selectedFile);let s=this.isEditMode&&this.courseId?this.courseId:"0",p=yield this.courseService.processCourse(i,s);if(p.data&&p.data.code===1)yield h.default.fire({title:"Success!",text:this.isEditMode?"Golf course has been updated successfully":"Golf course has been created successfully",icon:"success",confirmButtonText:"Ok"}),this.router.navigate(["/courses"]);else throw new Error(p.data?.message||"Unknown error occurred")}catch(i){console.error("Error submitting form:",i);let t="Failed to save golf course";if(i.response?.data?.message)t=i.response.data.message;else if(i.response?.data?.errors){let s=i.response.data.errors;t=Object.keys(s).map(p=>`${p}: ${s[p].join(", ")}`).join(`
`)}else i.message&&(t=i.message);yield h.default.fire({title:"Error!",text:t,icon:"error",confirmButtonText:"Ok"})}finally{this.loading=!1}})}onDelete(){return y(this,null,function*(){if(!this.courseId||!this.hasExistingData)return;if((yield h.default.fire({title:"Are you sure?",text:"This action cannot be undone!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"})).isConfirmed)try{this.loading=!0;let t=yield this.courseService.deleteCourse(this.courseId);if(t.data&&t.data.code===1)yield h.default.fire({title:"Deleted!",text:"Golf course has been deleted successfully",icon:"success",confirmButtonText:"Ok"}),this.router.navigate(["/courses"]);else throw new Error(t.data?.message||"Failed to delete course")}catch(t){console.error("Error deleting course:",t),yield h.default.fire({title:"Error!",text:"Failed to delete golf course",icon:"error",confirmButtonText:"Ok"})}finally{this.loading=!1}})}onReset(){this.submitted=!1,this.selectedAmenities=[],this.imagePreview=null,this.selectedFile=null,this.golfCourseForm.reset({hideStatus:0,courseAmenities:[]}),this.isEditMode&&this.loadCourseData()}isFieldInvalid(i){let t=this.golfCourseForm.get(i);return!!(t&&t.invalid&&(t.dirty||t.touched||this.submitted))}getErrorMessage(i){let t=this.golfCourseForm.get(i);if(!t||!t.errors)return"";let s=t.errors;if(s.required)switch(i){case"courseAmenities":return"Please select at least one amenity";case"courseName":return"Course name is required";case"courseAddress":return"Course address is required";case"coursePhoneNumber":return"Phone number is required";case"courseLocation":return"Course location is required";default:return"This field is required"}if(s.minlength)return i==="courseAmenities"?"Please select at least one amenity":`Minimum length is ${s.minlength.requiredLength} characters`;if(s.pattern)switch(i){case"coursePhoneNumber":case"courseAlternatePhoneNumber":return"Invalid phone number format";case"courseWebsite":return"Invalid website URL format (must start with http:// or https://)";default:return"Invalid format"}return"Invalid input"}};m.\u0275fac=function(t){return new(t||m)(_(ae),_(q),_(V),_(me),_(B))},m.\u0275cmp=N({type:m,selectors:[["app-create-courses"]],standalone:!0,features:[D],decls:180,vars:29,consts:[["form","ngForm"],["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3","needs-validation",3,"ngSubmit","formGroup"],["md","6",3,"cFormFloating"],["cFormControl","","id","courseName","formControlName","courseName","type","text","placeholder","Course Name"],["cLabel","","for","courseName",1,"ms-2"],[3,"valid",4,"ngIf"],["cFormControl","","id","coursePhoneNumber","formControlName","coursePhoneNumber","type","text","placeholder","Phone Number"],["cLabel","","for","coursePhoneNumber",1,"ms-2"],["cFormControl","","id","courseAlternatePhoneNumber","formControlName","courseAlternatePhoneNumber","type","text","placeholder","Alternate Phone Number"],["cLabel","","for","courseAlternatePhoneNumber",1,"ms-2"],["cFormControl","","id","courseWebsite","formControlName","courseWebsite","type","url","placeholder","Website"],["cLabel","","for","courseWebsite",1,"ms-2"],["md","12",3,"cFormFloating"],["cFormControl","","id","courseOpenFrom","formControlName","courseOpenFrom","type","text","placeholder","Opening Hours"],["cLabel","","for","courseOpenFrom",1,"ms-2"],["cFormControl","","id","courseAddress","formControlName","courseAddress","placeholder","Course Address","rows","4"],["cLabel","","for","courseAddress",1,"ms-2"],["cFormControl","","id","courseLocation","formControlName","courseLocation","type","text","placeholder","GPS Coordinates or Detailed Location"],["cLabel","","for","courseLocation",1,"ms-2"],["cFormControl","","id","courseDescription","formControlName","courseDescription","placeholder","Course Description","rows","8"],["cLabel","","for","courseDescription",1,"ms-2"],["md","12"],[1,"mb-3"],["cLabel","","for","courseImage",1,"form-label"],["cFormControl","","id","courseImage","type","file","accept","image/*",1,"form-control",3,"change"],[1,"form-text"],["class","mb-3",4,"ngIf"],["cLabel","",1,"form-label"],[1,"amenities-container","mt-2"],["class","text-muted",4,"ngIf"],["cButton","","class","me-2 mb-2","variant","outline","type","button",3,"color","title","click",4,"ngFor","ngForOf"],["class","mt-2",4,"ngIf"],["md","6"],["cFormSelect","","formControlName","hideStatus",1,"form-select"],["value","0"],["value","1"],["xs","12",1,"d-flex","gap-2"],["cButton","","color","primary","type","submit",1,"d-inline-flex","align-items-center",3,"disabled"],["class","spinner-border spinner-border-sm me-2","role","status","aria-hidden","true",4,"ngIf"],["cButton","","color","secondary","type","button",3,"click","disabled"],["cButton","","color","danger","type","button","class","ms-auto",3,"disabled","click",4,"ngIf"],[3,"valid"],[1,"mb-2"],["alt","Course Image Preview",1,"img-thumbnail",2,"max-width","300px","max-height","200px",3,"src"],[1,"text-muted"],["cButton","","variant","outline","type","button",1,"me-2","mb-2",3,"click","color","title"],["class","me-1 amenity-icon","style","width: 16px; height: 16px; display: inline-block;",3,"innerHTML",4,"ngIf"],["class","me-1",3,"class",4,"ngIf"],[1,"me-1","amenity-icon",2,"width","16px","height","16px","display","inline-block",3,"innerHTML"],[1,"me-1"],[1,"mt-2"],["class","badge bg-primary me-1",4,"ngFor","ngForOf"],[1,"badge","bg-primary","me-1"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm","me-2"],["cButton","","color","danger","type","button",1,"ms-auto",3,"click","disabled"]],template:function(t,s){if(t&1){let p=S();n(0,"c-row"),e(1,`
  `),n(2,"c-col",1),e(3,`
    `),n(4,"c-card",2),e(5,`
      `),n(6,"c-card-header"),e(7,`
        `),n(8,"strong"),e(9),r(),e(10,`
      `),r(),e(11,`
      `),n(12,"c-card-body"),e(13,`
        `),n(14,"form",3,0),F("ngSubmit",function(){return b(p),v(s.onSubmit())}),e(16,`
          `),e(17,`
          `),n(18,"c-col",4),e(19,`
            `),x(20,"input",5),e(21,`
            `),n(22,"label",6),e(23,"Course Name *"),r(),e(24,`
            `),u(25,pe,2,2,"c-form-feedback",7),e(26,`
          `),r(),e(27,`

          `),n(28,"c-col",4),e(29,`
            `),x(30,"input",8),e(31,`
            `),n(32,"label",9),e(33,"Phone Number *"),r(),e(34,`
            `),u(35,fe,2,2,"c-form-feedback",7),e(36,`
          `),r(),e(37,`

          `),n(38,"c-col",4),e(39,`
            `),x(40,"input",10),e(41,`
            `),n(42,"label",11),e(43,"Alternate Phone Number"),r(),e(44,`
            `),u(45,xe,2,2,"c-form-feedback",7),e(46,`
          `),r(),e(47,`

          `),n(48,"c-col",4),e(49,`
            `),x(50,"input",12),e(51,`
            `),n(52,"label",13),e(53,"Website"),r(),e(54,`
            `),u(55,ge,2,2,"c-form-feedback",7),e(56,`
          `),r(),e(57,`

          `),n(58,"c-col",14),e(59,`
            `),x(60,"input",15),e(61,`
            `),n(62,"label",16),e(63,"Opening Hours"),r(),e(64,`
            `),u(65,he,2,2,"c-form-feedback",7),e(66,`
          `),r(),e(67,`

          `),e(68,`
          `),n(69,"c-col",14),e(70,`
            `),x(71,"textarea",17),e(72,`
            `),n(73,"label",18),e(74,"Course Address *"),r(),e(75,`
            `),u(76,Ce,2,2,"c-form-feedback",7),e(77,`
          `),r(),e(78,`

          `),e(79,`
          `),n(80,"c-col",14),e(81,`
            `),x(82,"input",19),e(83,`
            `),n(84,"label",20),e(85,"Course Location (GPS/Directions) *"),r(),e(86,`
            `),u(87,be,2,2,"c-form-feedback",7),e(88,`
          `),r(),e(89,`

          `),e(90,`
          `),n(91,"c-col",14),e(92,`
            `),x(93,"textarea",21),e(94,`
            `),n(95,"label",22),e(96,"Course Description"),r(),e(97,`
            `),u(98,ve,2,2,"c-form-feedback",7),e(99,`
          `),r(),e(100,`

          `),e(101,`
          `),n(102,"c-col",23),e(103,`
            `),n(104,"div",24),e(105,`
              `),n(106,"label",25),e(107,"Course Image"),r(),e(108,`
              `),n(109,"input",26),F("change",function(E){return b(p),v(s.onFileChange(E))}),r(),e(110,`
              `),n(111,"div",27),e(112,"Maximum file size: 5MB. Supported formats: JPG, PNG, GIF"),r(),e(113,`
              `),u(114,_e,2,2,"c-form-feedback",7),e(115,`
            `),r(),e(116,`
            `),e(117,`
            `),u(118,Fe,7,1,"div",28),e(119,`
          `),r(),e(120,`

          `),e(121,`
          `),n(122,"c-col",23),e(123,`
            `),n(124,"div",24),e(125,`
              `),n(126,"label",29),e(127,"Amenities *"),r(),e(128,`
              `),n(129,"div",30),e(130,`
                `),u(131,ye,2,0,"div",31),e(132,`
                `),u(133,Ie,8,5,"button",32),e(134,`
              `),r(),e(135,`
              `),e(136,`
              `),u(137,Ne,7,1,"div",33),e(138,`
              `),u(139,we,2,2,"c-form-feedback",7),e(140,`
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
              `),u(167,ke,1,0,"span",40),e(168),r(),e(169,`

            `),n(170,"button",41),F("click",function(){return b(p),v(s.onReset())}),e(171,`
              Reset Form
            `),r(),e(172,`

            `),u(173,Te,2,1,"button",42),e(174,`
          `),r(),e(175,`
        `),r(),e(176,`
      `),r(),e(177,`
    `),r(),e(178,`
  `),r(),e(179,`
`),r()}t&2&&(a(9),P(s.isEditMode?"Edit Golf Course":"New Golf Course"),a(5),l("formGroup",s.golfCourseForm),a(4),l("cFormFloating",!0),a(7),l("ngIf",s.isFieldInvalid("courseName")),a(3),l("cFormFloating",!0),a(7),l("ngIf",s.isFieldInvalid("coursePhoneNumber")),a(3),l("cFormFloating",!0),a(7),l("ngIf",s.isFieldInvalid("courseAlternatePhoneNumber")),a(3),l("cFormFloating",!0),a(7),l("ngIf",s.isFieldInvalid("courseWebsite")),a(3),l("cFormFloating",!0),a(7),l("ngIf",s.isFieldInvalid("courseOpenFrom")),a(4),l("cFormFloating",!0),a(7),l("ngIf",s.isFieldInvalid("courseAddress")),a(4),l("cFormFloating",!0),a(7),l("ngIf",s.isFieldInvalid("courseLocation")),a(4),l("cFormFloating",!0),a(7),l("ngIf",s.isFieldInvalid("courseDescription")),a(16),l("ngIf",s.isFieldInvalid("courseImage")),a(4),l("ngIf",s.imagePreview),a(13),l("ngIf",s.amenitiesList.length===0),a(2),l("ngForOf",s.amenitiesList),a(4),l("ngIf",s.selectedAmenities.length>0),a(2),l("ngIf",s.isFieldInvalid("courseAmenities")),a(26),l("disabled",s.loading),a(2),l("ngIf",s.loading),a(),f(`
              `,s.loading?"Saving...":s.isEditMode?"Update Course":"Create Course",`
            `),a(2),l("disabled",s.loading),a(3),l("ngIf",s.isEditMode&&s.hasExistingData))},dependencies:[M,L,O,Q,K,j,Y,H,z,ce,te,oe,se,X,re,Z,ee,ie,ne,le,$,U,J,R,G,W]});let o=m;return o})();export{je as CreateCoursesComponent};
