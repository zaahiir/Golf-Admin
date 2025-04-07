import{a as le}from"./chunk-UUFG4FZR.js";import"./chunk-AUROHWJP.js";import{a as ce}from"./chunk-DVM5LER3.js";import{$ as V,$a as oe,Fa as Y,Ga as J,Ha as x,I as O,Ia as K,Ja as Q,O as B,Oa as W,P as q,Ra as Z,S as A,Sa as ee,Ta as te,Ua as ne,Va as ie,Za as re,_a as ae,aa as $,c as D,ca as G,d as T,da as U,fa as j,g as L,ga as z,ja as H,ka as X,r as R}from"./chunk-KDWJXVH2.js";import{Ib as t,Jb as n,Kb as g,Ob as w,Sb as S,Tb as b,_a as P,bb as r,cb as F,cc as e,dc as v,ec as h,ha as I,lc as k,sa as M,sb as f,ta as N,yb as a}from"./chunk-X7YB6HNB.js";import{f as me,k as y}from"./chunk-AAPNLDO3.js";var _=me(ce());function de(i,s){if(i&1&&(t(0,"c-form-feedback",57),e(1),n()),i&2){let m=b();a("valid",!1),r(),h(`
              `,m.getErrorMessage("firstName"),`
            `)}}function se(i,s){if(i&1&&(t(0,"c-form-feedback",57),e(1),n()),i&2){let m=b();a("valid",!1),r(),h(`
              `,m.getErrorMessage("lastName"),`
            `)}}function pe(i,s){if(i&1&&(t(0,"c-form-feedback",57),e(1),n()),i&2){let m=b();a("valid",!1),r(),h(`
              `,m.getErrorMessage("email"),`
            `)}}function fe(i,s){if(i&1&&(t(0,"c-form-feedback",57),e(1),n()),i&2){let m=b();a("valid",!1),r(),h(`
              `,m.getErrorMessage("phoneNumber"),`
            `)}}function xe(i,s){if(i&1&&(t(0,"c-form-feedback",57),e(1),n()),i&2){let m=b();a("valid",!1),r(),h(`
              `,m.getErrorMessage("dateOfBirth"),`
            `)}}function ue(i,s){if(i&1&&(t(0,"option",58),e(1),n()),i&2){let m=s.$implicit;a("value",m.id),r(),v(m.genderName)}}function be(i,s){if(i&1&&(t(0,"c-form-feedback",57),e(1),n()),i&2){let m=b();a("valid",!1),r(),h(`
              `,m.getErrorMessage("gender"),`
            `)}}function he(i,s){if(i&1&&(t(0,"option",58),e(1),n()),i&2){let m=s.$implicit;a("value",m.id),r(),v(m.countryName)}}function ge(i,s){if(i&1&&(t(0,"c-form-feedback",57),e(1),n()),i&2){let m=b();a("valid",!1),r(),h(`
              `,m.getErrorMessage("nationality"),`
            `)}}function ye(i,s){if(i&1&&(t(0,"c-form-feedback",57),e(1),n()),i&2){let m=b();a("valid",!1),r(),h(`
              `,m.getErrorMessage("address"),`
            `)}}function Se(i,s){if(i&1&&(t(0,"option",58),e(1),n()),i&2){let m=s.$implicit;a("value",m.id),r(),v(m.planName)}}function ve(i,s){if(i&1&&(t(0,"c-form-feedback",57),e(1),n()),i&2){let m=b();a("valid",!1),r(),h(`
              `,m.getErrorMessage("plan"),`
            `)}}function Ce(i,s){if(i&1&&(t(0,"c-form-feedback",57),e(1),n()),i&2){let m=b();a("valid",!1),r(),h(`
              `,m.getErrorMessage("membershipStartDate"),`
            `)}}function Fe(i,s){if(i&1&&(t(0,"c-form-feedback",57),e(1),n()),i&2){let m=b();a("valid",!1),r(),h(`
              `,m.getErrorMessage("emergencyContactName"),`
            `)}}function _e(i,s){if(i&1&&(t(0,"c-form-feedback",57),e(1),n()),i&2){let m=b();a("valid",!1),r(),h(`
              `,m.getErrorMessage("emergencyContactPhone"),`
            `)}}function Ee(i,s){if(i&1&&(t(0,"c-form-feedback",57),e(1),n()),i&2){let m=b();a("valid",!1),r(),h(`
              `,m.getErrorMessage("emergencyContactRelation"),`
            `)}}function Ie(i,s){if(i&1&&(t(0,"option",58),e(1),n()),i&2){let m=s.$implicit;a("value",m.id),r(),v(m.statusName)}}function Me(i,s){if(i&1&&(t(0,"c-form-feedback",57),e(1),n()),i&2){let m=b();a("valid",!1),r(),h(`
              `,m.getErrorMessage("paymentStatus"),`
            `)}}function Ne(i,s){if(i&1&&(t(0,"option",58),e(1),n()),i&2){let m=s.$implicit;a("value",m.id),r(),v(m.methodName)}}function Pe(i,s){if(i&1&&(t(0,"c-form-feedback",57),e(1),n()),i&2){let m=b();a("valid",!1),r(),h(`
              `,m.getErrorMessage("paymentMethod"),`
            `)}}function we(i,s){if(i&1){let m=w();t(0,"div",43),e(1,`
              `),g(2,"img",59),e(3,`
              `),t(4,"button",60),S("click",function(){M(m);let c=b();return N(c.removePhoto("profile"))}),e(5,`
                Remove Photo
              `),n(),e(6,`
            `),n()}if(i&2){let m=b();r(2),a("src",m.previewUrl,P)}}var $e=(()=>{let s=class s{constructor(l,c,o){this.fb=l,this.memberService=c,this.router=o,this.CLUB_PREFIX="MGC",this.loading=!1,this.submitted=!1,this.selectedFile=null,this.previewUrl=null,this.genders=[],this.countries=[],this.paymentStatuses=[],this.paymentMethods=[],this.plans=[],this.initializeForm()}initializeForm(){let l=new Date().toISOString().split("T")[0];this.memberForm=this.fb.group({firstName:["",[x.required,x.minLength(2)]],lastName:["",[x.required,x.minLength(2)]],email:["",[x.required,x.email]],password:[""],phoneNumber:["",[x.required,x.pattern("^[0-9]{10}$")]],alternatePhoneNumber:[""],dateOfBirth:["",[x.required]],gender:["",[x.required]],nationality:["",[x.required]],address:["",[x.required]],plan:["",[x.required]],membershipStartDate:[l,[x.required]],membershipEndDate:[""],emergencyContactName:["",[x.required]],emergencyContactPhone:["",[x.required,x.pattern("^[0-9]{10}$")]],emergencyContactRelation:["",[x.required]],paymentStatus:["",[x.required]],paymentMethod:["",[x.required]],referredBy:[""],profilePhoto:[""],idProof:[""],handicap:[!1],golfClubId:[""]})}generatePassword(l=12){let c="ABCDEFGHIJKLMNOPQRSTUVWXYZ",o="abcdefghijklmnopqrstuvwxyz",p="0123456789",d="!@#$%^&*",u="";u+=this.getRandomChar(c),u+=this.getRandomChar(o),u+=this.getRandomChar(p),u+=this.getRandomChar(d);let C=c+o+p+d;for(let E=u.length;E<l;E++)u+=this.getRandomChar(C);return u.split("").sort(()=>Math.random()-.5).join("")}getRandomChar(l){return l[Math.floor(Math.random()*l.length)]}ngOnInit(){return y(this,null,function*(){try{yield this.loadDropdownData()}catch{yield this.showError("Failed to load form data")}})}get f(){return this.memberForm.controls}loadDropdownData(){return y(this,null,function*(){try{let[l,c,o,p,d]=yield Promise.all([this.memberService.getGender(),this.memberService.getNationality(),this.memberService.getPlan(),this.memberService.getPaymentStatus(),this.memberService.getPaymentMethod()]);l?.data&&(this.genders=Array.isArray(l.data)?l.data:l.data.data?l.data.data:[]),c?.data&&(this.countries=Array.isArray(c.data)?c.data:c.data.data?c.data.data:[]),o?.data&&(this.plans=Array.isArray(o.data)?o.data:o.data.data?o.data.data:[]),p?.data&&(this.paymentStatuses=Array.isArray(p.data)?p.data:p.data.data?p.data.data:[]),d?.data&&(this.paymentMethods=Array.isArray(d.data)?d.data:d.data.data?d.data.data:[]),console.log("Loaded data:",{genders:this.genders,countries:this.countries,plans:this.plans,paymentStatuses:this.paymentStatuses,paymentMethods:this.paymentMethods})}catch(l){throw console.error("Error loading dropdown data:",l),l}})}onFileSelected(l,c){let o=l.target.files[0];if(o)if(c==="profile"){this.selectedFile=o;let p=new FileReader;p.onload=d=>{this.previewUrl=d.target?.result||null},p.readAsDataURL(o),this.memberForm.patchValue({profilePhoto:o})}else this.memberForm.patchValue({idProof:o})}removePhoto(l){l==="profile"?(this.selectedFile=null,this.previewUrl=null,this.memberForm.patchValue({profilePhoto:""})):this.memberForm.patchValue({idProof:""})}onSubmit(){return y(this,null,function*(){try{if(this.submitted=!0,console.log("Form submission started",this.memberForm.value),this.memberForm.invalid){console.log("Form validation errors:",this.getFormValidationErrors());let d=this.getFirstInvalidField();d&&document.querySelector(`[formcontrolname="${d}"]`)?.scrollIntoView({behavior:"smooth",block:"center"});return}this.loading=!0;let l=yield this.generateMemberId();console.log("Generated Golf Club ID:",l);let c=this.generatePassword(),o=new FormData;this.memberForm.patchValue({golfClubId:l,password:c}),console.log("Generated Member ID:",l),console.log("Generated Password:",c),Object.keys(this.memberForm.value).forEach(d=>{let u=this.memberForm.get(d)?.value;if(u!=null)if(d==="profilePhoto"&&this.selectedFile)o.append(d,this.selectedFile);else if(d==="idProof"&&this.memberForm.get("idProof")?.value instanceof File)o.append(d,this.memberForm.get("idProof")?.value);else if(d==="dateOfBirth"||d==="membershipStartDate"||d==="membershipEndDate"){let C=u?new Date(u).toISOString().split("T")[0]:"";o.append(d,C)}else typeof u=="boolean"?o.append(d,u.toString()):o.append(d,u.toString().trim())}),o.forEach((d,u)=>{console.log(`FormData field - ${u}:`,d)});let p=yield this.memberService.processMember(o);if(console.log("Server response:",p),p?.data?.code===1)yield _.default.fire({title:"Success!",text:`Member has been created successfully with Golf Club ID: ${l}, Login credentials have been sent to their email.`,icon:"success",confirmButtonText:"Ok"}),this.router.navigate(["/members"]);else throw new Error(p?.data?.message||"Failed to create member")}catch(l){console.error("Submit error:",l),yield this.showError(l instanceof Error?l.message:"Failed to create member")}finally{this.loading=!1}})}generateMemberId(){return y(this,null,function*(){try{let l=new Date,c=l.getFullYear().toString().slice(-2),o=(l.getMonth()+1).toString().padStart(2,"0"),p=yield this.memberService.getLastMemberId(c,o),d;p?d=parseInt(p.slice(-4))+1:d=1;let u=d.toString().padStart(4,"0");return`${this.CLUB_PREFIX}${c}${o}${u}`}catch(l){throw console.error("Error generating member ID:",l),new Error("Failed to generate member ID")}})}getFormValidationErrors(){let l={};return Object.keys(this.memberForm.controls).forEach(c=>{let o=this.memberForm.get(c);o?.errors&&(l[c]=o.errors)}),l}getFirstInvalidField(){let l=this.memberForm.controls;for(let c in l)if(l[c].invalid)return c;return null}onReset(){this.submitted=!1,this.selectedFile=null,this.previewUrl=null,this.memberForm.reset(),this.memberForm.patchValue({membershipStartDate:new Date().toISOString().split("T")[0],handicap:!1})}isFieldInvalid(l){let c=this.memberForm.get(l);return!!(c&&c.invalid&&(c.dirty||c.touched||this.submitted))}getErrorMessage(l){let c=this.memberForm.get(l);return!c||!c.errors?"":c.errors.required?"This field is required":c.errors.email?"Please enter a valid email address":c.errors.pattern&&l.includes("Phone")?"Please enter a valid 10-digit phone number":c.errors.minlength?`Minimum length is ${c.errors.minlength.requiredLength} characters`:"Invalid input"}showError(l){return y(this,null,function*(){yield _.default.fire("Error",l,"error")})}};s.\u0275fac=function(c){return new(c||s)(F(re),F(le),F(R))},s.\u0275cmp=I({type:s,selectors:[["app-create-members"]],standalone:!0,features:[k],decls:275,vars:43,consts:[["xs","12"],[1,"mb-4"],["enctype","multipart/form-data","cForm","",1,"row","g-3","needs-validation",3,"ngSubmit","formGroup"],["md","6",3,"cFormFloating"],["cFormControl","","id","firstName","formControlName","firstName","type","text","placeholder","First Name"],["cLabel","","for","firstName"],[3,"valid",4,"ngIf"],["cFormControl","","id","lastName","formControlName","lastName","type","text","placeholder","Last Name"],["cLabel","","for","lastName"],["cFormControl","","id","email","formControlName","email","type","email","placeholder","Email"],["cLabel","","for","email"],["cFormControl","","id","phoneNumber","formControlName","phoneNumber","type","tel","placeholder","Phone Number"],["cLabel","","for","phoneNumber"],["cFormControl","","id","alternatePhoneNumber","formControlName","alternatePhoneNumber","type","tel","placeholder","Alternate Phone"],["cLabel","","for","alternatePhoneNumber"],["cFormControl","","id","dateOfBirth","formControlName","dateOfBirth","type","date","placeholder","Date of Birth"],["cLabel","","for","dateOfBirth"],["cSelect","","id","gender","formControlName","gender"],["value",""],[3,"value",4,"ngFor","ngForOf"],["cLabel","","for","gender"],["cSelect","","id","nationality","formControlName","nationality"],["cLabel","","for","nationality"],["md","12",3,"cFormFloating"],["cFormControl","","id","address","formControlName","address","placeholder","Address","rows","3"],["cLabel","","for","address"],["cSelect","","id","plan","formControlName","plan"],["cLabel","","for","plan"],["cFormControl","","id","membershipStartDate","formControlName","membershipStartDate","type","date"],["cLabel","","for","membershipStartDate"],["cFormControl","","id","membershipEndDate","formControlName","membershipEndDate","type","date"],["cLabel","","for","membershipEndDate"],["cFormControl","","id","emergencyContactName","formControlName","emergencyContactName","type","text"],["cLabel","","for","emergencyContactName"],["cFormControl","","id","emergencyContactPhone","formControlName","emergencyContactPhone","type","tel"],["cLabel","","for","emergencyContactPhone"],["cFormControl","","id","emergencyContactRelation","formControlName","emergencyContactRelation","type","text"],["cLabel","","for","emergencyContactRelation"],["cSelect","","id","paymentStatus","formControlName","paymentStatus"],["cLabel","","for","paymentStatus"],["cSelect","","id","paymentMethod","formControlName","paymentMethod"],["cLabel","","for","paymentMethod"],["md","6"],[1,"mb-3"],["cLabel","","for","profilePhoto",1,"form-label"],["cFormControl","","type","file","id","profilePhoto","accept","image/*",1,"form-control",3,"change"],["class","mb-3",4,"ngIf"],["cLabel","","for","idProof",1,"form-label"],["cFormControl","","type","file","id","idProof",1,"form-control",3,"change"],["cFormControl","","id","referredBy","formControlName","referredBy","type","text"],["cLabel","","for","referredBy"],[1,"form-check"],["type","checkbox","id","handicap","formControlName","handicap",1,"form-check-input"],["for","handicap",1,"form-check-label"],["xs","12",1,"mt-4"],["cButton","","color","primary","type","submit",1,"me-2",3,"disabled"],["cButton","","color","secondary","type","button",3,"click","disabled"],[3,"valid"],[3,"value"],["alt","Profile Preview",1,"img-thumbnail",2,"max-width","200px","max-height","200px",3,"src"],["cButton","","color","danger","size","sm","type","button",1,"ms-2",3,"click"]],template:function(c,o){c&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`
    `),t(4,"c-card",1),e(5,`
      `),t(6,"c-card-header"),e(7,`
        `),t(8,"strong"),e(9,"New Member Profile"),n(),e(10,`
      `),n(),e(11,`
      `),t(12,"c-card-body"),e(13,`
        `),t(14,"form",2),S("ngSubmit",function(){return o.onSubmit()}),e(15,`
          `),e(16,`
          `),t(17,"c-col",3),e(18,`
            `),g(19,"input",4),e(20,`
            `),t(21,"label",5),e(22,"First Name"),n(),e(23,`
            `),f(24,de,2,2,"c-form-feedback",6),e(25,`
          `),n(),e(26,`

          `),t(27,"c-col",3),e(28,`
            `),g(29,"input",7),e(30,`
            `),t(31,"label",8),e(32,"Last Name"),n(),e(33,`
            `),f(34,se,2,2,"c-form-feedback",6),e(35,`
          `),n(),e(36,`

          `),t(37,"c-col",3),e(38,`
            `),g(39,"input",9),e(40,`
            `),t(41,"label",10),e(42,"Email"),n(),e(43,`
            `),f(44,pe,2,2,"c-form-feedback",6),e(45,`
          `),n(),e(46,`

          `),t(47,"c-col",3),e(48,`
            `),g(49,"input",11),e(50,`
            `),t(51,"label",12),e(52,"Phone Number"),n(),e(53,`
            `),f(54,fe,2,2,"c-form-feedback",6),e(55,`
          `),n(),e(56,`

          `),t(57,"c-col",3),e(58,`
            `),g(59,"input",13),e(60,`
            `),t(61,"label",14),e(62,"Alternate Phone (Optional)"),n(),e(63,`
          `),n(),e(64,`

          `),t(65,"c-col",3),e(66,`
            `),g(67,"input",15),e(68,`
            `),t(69,"label",16),e(70,"Date of Birth"),n(),e(71,`
            `),f(72,xe,2,2,"c-form-feedback",6),e(73,`
          `),n(),e(74,`

          `),t(75,"c-col",3),e(76,`
            `),t(77,"select",17),e(78,`
              `),t(79,"option",18),e(80,"Select Gender"),n(),e(81,`
              `),f(82,ue,2,2,"option",19),e(83,`
            `),n(),e(84,`
            `),t(85,"label",20),e(86,"Gender"),n(),e(87,`
            `),f(88,be,2,2,"c-form-feedback",6),e(89,`
          `),n(),e(90,`

          `),t(91,"c-col",3),e(92,`
            `),t(93,"select",21),e(94,`
              `),t(95,"option",18),e(96,"Select Nationality"),n(),e(97,`
              `),f(98,he,2,2,"option",19),e(99,`
            `),n(),e(100,`
            `),t(101,"label",22),e(102,"Nationality"),n(),e(103,`
            `),f(104,ge,2,2,"c-form-feedback",6),e(105,`
          `),n(),e(106,`

          `),t(107,"c-col",23),e(108,`
            `),g(109,"textarea",24),e(110,`
            `),t(111,"label",25),e(112,"Address"),n(),e(113,`
            `),f(114,ye,2,2,"c-form-feedback",6),e(115,`
          `),n(),e(116,`

          `),e(117,`
          `),t(118,"c-col",3),e(119,`
            `),t(120,"select",26),e(121,`
              `),t(122,"option",18),e(123,"Select Plan"),n(),e(124,`
              `),f(125,Se,2,2,"option",19),e(126,`
            `),n(),e(127,`
            `),t(128,"label",27),e(129,"Membership Plan"),n(),e(130,`
            `),f(131,ve,2,2,"c-form-feedback",6),e(132,`
          `),n(),e(133,`

          `),t(134,"c-col",3),e(135,`
            `),g(136,"input",28),e(137,`
            `),t(138,"label",29),e(139,"Membership Start Date"),n(),e(140,`
            `),f(141,Ce,2,2,"c-form-feedback",6),e(142,`
          `),n(),e(143,`

          `),t(144,"c-col",3),e(145,`
            `),g(146,"input",30),e(147,`
            `),t(148,"label",31),e(149,"Membership End Date"),n(),e(150,`
          `),n(),e(151,`

          `),e(152,`
          `),t(153,"c-col",3),e(154,`
            `),g(155,"input",32),e(156,`
            `),t(157,"label",33),e(158,"Emergency Contact Name"),n(),e(159,`
            `),f(160,Fe,2,2,"c-form-feedback",6),e(161,`
          `),n(),e(162,`

          `),t(163,"c-col",3),e(164,`
            `),g(165,"input",34),e(166,`
            `),t(167,"label",35),e(168,"Emergency Contact Phone"),n(),e(169,`
            `),f(170,_e,2,2,"c-form-feedback",6),e(171,`
          `),n(),e(172,`

          `),t(173,"c-col",3),e(174,`
            `),g(175,"input",36),e(176,`
            `),t(177,"label",37),e(178,"Emergency Contact Relation"),n(),e(179,`
            `),f(180,Ee,2,2,"c-form-feedback",6),e(181,`
          `),n(),e(182,`

          `),e(183,`
          `),t(184,"c-col",3),e(185,`
            `),t(186,"select",38),e(187,`
              `),t(188,"option",18),e(189,"Select Payment Status"),n(),e(190,`
              `),f(191,Ie,2,2,"option",19),e(192,`
            `),n(),e(193,`
            `),t(194,"label",39),e(195,"Payment Status"),n(),e(196,`
            `),f(197,Me,2,2,"c-form-feedback",6),e(198,`
          `),n(),e(199,`

          `),t(200,"c-col",3),e(201,`
            `),t(202,"select",40),e(203,`
              `),t(204,"option",18),e(205,"Select Payment Method"),n(),e(206,`
              `),f(207,Ne,2,2,"option",19),e(208,`
            `),n(),e(209,`
            `),t(210,"label",41),e(211,"Payment Method"),n(),e(212,`
            `),f(213,Pe,2,2,"c-form-feedback",6),e(214,`
          `),n(),e(215,`

          `),e(216,`
          `),t(217,"c-col",42),e(218,`
            `),t(219,"div",43),e(220,`
              `),t(221,"label",44),e(222,"Profile Photo"),n(),e(223,`
              `),t(224,"input",45),S("change",function(d){return o.onFileSelected(d,"profile")}),n(),e(225,`
            `),n(),e(226,`
            `),f(227,we,7,1,"div",46),e(228,`
          `),n(),e(229,`

          `),t(230,"c-col",42),e(231,`
            `),t(232,"div",43),e(233,`
              `),t(234,"label",47),e(235,"ID Proof"),n(),e(236,`
              `),t(237,"input",48),S("change",function(d){return o.onFileSelected(d,"idProof")}),n(),e(238,`
            `),n(),e(239,`
          `),n(),e(240,`

          `),t(241,"c-col",3),e(242,`
            `),g(243,"input",49),e(244,`
            `),t(245,"label",50),e(246,"Referred By (Optional)"),n(),e(247,`
          `),n(),e(248,`

          `),e(249,`
          `),t(250,"c-col",42),e(251,`
            `),t(252,"div",51),e(253,`
              `),g(254,"input",52),e(255,`
              `),t(256,"label",53),e(257,`
                Handicap
              `),n(),e(258,`
            `),n(),e(259,`
          `),n(),e(260,`

          `),e(261,`
          `),t(262,"c-col",54),e(263,`
            `),t(264,"button",55),e(265),n(),e(266,`
            `),t(267,"button",56),S("click",function(){return o.onReset()}),e(268,`
              Reset Form
            `),n(),e(269,`
          `),n(),e(270,`
        `),n(),e(271,`
      `),n(),e(272,`
    `),n(),e(273,`
  `),n(),e(274,`
`),n()),c&2&&(r(14),a("formGroup",o.memberForm),r(3),a("cFormFloating",!0),r(7),a("ngIf",o.isFieldInvalid("firstName")),r(3),a("cFormFloating",!0),r(7),a("ngIf",o.isFieldInvalid("lastName")),r(3),a("cFormFloating",!0),r(7),a("ngIf",o.isFieldInvalid("email")),r(3),a("cFormFloating",!0),r(7),a("ngIf",o.isFieldInvalid("phoneNumber")),r(3),a("cFormFloating",!0),r(8),a("cFormFloating",!0),r(7),a("ngIf",o.isFieldInvalid("dateOfBirth")),r(3),a("cFormFloating",!0),r(7),a("ngForOf",o.genders),r(6),a("ngIf",o.isFieldInvalid("gender")),r(3),a("cFormFloating",!0),r(7),a("ngForOf",o.countries),r(6),a("ngIf",o.isFieldInvalid("nationality")),r(3),a("cFormFloating",!0),r(7),a("ngIf",o.isFieldInvalid("address")),r(4),a("cFormFloating",!0),r(7),a("ngForOf",o.plans),r(6),a("ngIf",o.isFieldInvalid("plan")),r(3),a("cFormFloating",!0),r(7),a("ngIf",o.isFieldInvalid("membershipStartDate")),r(3),a("cFormFloating",!0),r(9),a("cFormFloating",!0),r(7),a("ngIf",o.isFieldInvalid("emergencyContactName")),r(3),a("cFormFloating",!0),r(7),a("ngIf",o.isFieldInvalid("emergencyContactPhone")),r(3),a("cFormFloating",!0),r(7),a("ngIf",o.isFieldInvalid("emergencyContactRelation")),r(4),a("cFormFloating",!0),r(7),a("ngForOf",o.paymentStatuses),r(6),a("ngIf",o.isFieldInvalid("paymentStatus")),r(3),a("cFormFloating",!0),r(7),a("ngForOf",o.paymentMethods),r(6),a("ngIf",o.isFieldInvalid("paymentMethod")),r(14),a("ngIf",o.previewUrl),r(14),a("cFormFloating",!0),r(23),a("disabled",o.loading),r(),h(`
              `,o.loading?"Submitting...":"Submit",`
            `),r(2),a("disabled",o.loading))},dependencies:[T,L,D,X,H,B,z,A,q,oe,W,ne,ie,J,Y,te,K,Q,Z,ee,ae,V,U,j,$,G,O]});let i=s;return i})();export{$e as CreateMemberComponent};
