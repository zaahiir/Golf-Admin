import{a as pe}from"./chunk-33AYQO7M.js";import{a as ce}from"./chunk-NW6KDP4V.js";import"./chunk-AUROHWJP.js";import{a as ue}from"./chunk-DVM5LER3.js";import{$a as le,Fa as X,Ga as Y,Ha as S,Ia as Z,Ja as ee,L as O,Oa as te,R as A,Ra as ie,S as V,U as $,Ua as ne,Va as re,Wa as ae,Xa as oe,_a as me,ab as de,ba as j,bb as se,c as q,ca as G,d as k,da as z,ea as H,ga as J,h as R,ha as K,ja as Q,ka as W,s as T,u as U}from"./chunk-45BFYFPT.js";import{$a as P,Jb as i,Kb as n,Lb as u,Mb as _,Nb as D,Pb as I,Tb as v,Ub as y,cb as a,db as F,dc as e,fc as g,ia as B,mc as L,ta as E,tb as b,ua as N,zb as o}from"./chunk-IO45J2MB.js";import{f as he,k as C}from"./chunk-AAPNLDO3.js";var M=he(ue());function be(l,c){if(l&1&&(i(0,"c-form-feedback",59),e(1),n()),l&2){let d=y();o("valid",!1),a(),g(`
              `,d.getErrorMessage("firstName"),`
            `)}}function xe(l,c){if(l&1&&(i(0,"c-form-feedback",59),e(1),n()),l&2){let d=y();o("valid",!1),a(),g(`
              `,d.getErrorMessage("lastName"),`
            `)}}function ge(l,c){if(l&1&&(i(0,"c-form-feedback",59),e(1),n()),l&2){let d=y();o("valid",!1),a(),g(`
              `,d.getErrorMessage("email"),`
            `)}}function ye(l,c){if(l&1&&(i(0,"c-form-feedback",59),e(1),n()),l&2){let d=y();o("valid",!1),a(),g(`
              `,d.getErrorMessage("phoneNumber"),`
            `)}}function Se(l,c){if(l&1&&(i(0,"option",60),e(1),n()),l&2){let d=c.$implicit;o("value",d.id),a(),g(`
                `,d.genderName,`
              `)}}function ve(l,c){if(l&1&&(i(0,"option",60),e(1),n()),l&2){let d=c.$implicit;o("value",d.id),a(),g(`
                `,d.countryName,`
              `)}}function Ce(l,c){if(l&1&&(i(0,"option",60),e(1),n()),l&2){let d=c.$implicit;o("value",d.id),a(),g(`
                `,d.planName,`
              `)}}function Fe(l,c){if(l&1&&(i(0,"c-form-feedback",59),e(1),n()),l&2){let d=y();o("valid",!1),a(),g(`
              `,d.getErrorMessage("plan"),`
            `)}}function Ee(l,c){if(l&1&&(i(0,"option",60),e(1),n()),l&2){let d=c.$implicit;o("value",d.id),a(),g(`
                `,d.statusName,`
              `)}}function Ne(l,c){if(l&1&&(i(0,"option",60),e(1),n()),l&2){let d=c.$implicit;o("value",d.id),a(),g(`
                `,d.methodName,`
              `)}}function Pe(l,c){if(l&1){let d=I();i(0,"div",61),e(1,`
                `),u(2,"img",62),e(3,`
                `),i(4,"button",63),v("click",function(){E(d);let t=y();return N(t.removeFile("profile"))}),e(5,`
                  Remove Photo
                `),n(),e(6,`
              `),n()}if(l&2){let d=y();a(2),o("src",d.profilePhotoPreview,P)}}function _e(l,c){if(l&1&&(_(0),e(1,`
                  `),u(2,"img",65),e(3,`
                `),D()),l&2){let d=y(2);a(2),o("src",d.idProofPreview,P)}}function De(l,c){l&1&&(_(0),e(1,`
                  `),i(2,"div",66),e(3,`
                    ID Proof document uploaded
                  `),n(),e(4,`
                `),D())}function Ie(l,c){if(l&1){let d=I();i(0,"div",61),e(1,`
                `),b(2,_e,4,1,"ng-container",64),e(3,`
                `),b(4,De,5,0,"ng-container",64),e(5,`
                `),i(6,"button",63),v("click",function(){E(d);let t=y();return N(t.removeFile("idProof"))}),e(7,`
                  Remove ID Proof
                `),n(),e(8,`
              `),n()}if(l&2){let d=y();a(2),o("ngIf",d.idProofPreview.toString().includes("data:image")),a(2),o("ngIf",!d.idProofPreview.toString().includes("data:image"))}}var Ve=(()=>{let c=class c{constructor(r,t,m,f,p){this.fb=r,this.memberService=t,this.memberEnquiryService=m,this.router=f,this.route=p,this.loading=!1,this.submitted=!1,this.selectedProfileFile=null,this.selectedIdProofFile=null,this.profilePhotoPreview=null,this.idProofPreview=null,this.genders=[],this.nationalities=[],this.paymentStatuses=[],this.paymentMethods=[],this.plans=[],this.memberId=null,this.memberData=null,this.pageTitle="Update Member Profile",this.requiredFields=["firstName","lastName","email","phoneNumber","plan"],this.initializeForm()}initializeForm(){this.memberForm=this.fb.group({firstName:["",[S.required,S.minLength(2)]],lastName:["",[S.required,S.minLength(2)]],email:["",[S.required,S.email]],phoneNumber:["",[S.required]],plan:["",[S.required]],alternatePhoneNumber:[""],dateOfBirth:[""],gender:[""],nationality:[""],address:[""],golfClubId:[""],membershipStartDate:[""],membershipEndDate:[""],emergencyContactName:[""],emergencyContactPhone:[""],emergencyContactRelation:[""],paymentStatus:[""],paymentMethod:[""],referredBy:[""],profilePhoto:[""],idProof:[""],handicap:[!1],enquiryId:[""],enquiryMessage:[""]})}ngOnInit(){return C(this,null,function*(){try{if(this.memberId=this.route.snapshot.paramMap.get("id"),!this.memberId){yield this.showError("Member ID not found"),this.router.navigate(["/members"]);return}yield this.loadDropdownData(),yield this.loadMemberData()}catch{yield this.showError("Failed to load member data")}})}loadMemberData(){return C(this,null,function*(){try{let r=yield this.memberService.listMember(this.memberId);r?.data?.code===1&&r.data.data&&r.data.data.length>0?(this.memberData=r.data.data[0],this.populateForm()):(yield this.showError("Failed to load member data"),this.router.navigate(["/members"]))}catch(r){console.error("Error loading member data:",r),yield this.showError("Failed to load member data"),this.router.navigate(["/members"])}})}populateForm(){if(!this.memberData)return;let r="";if(this.memberData.plan){let h=this.plans.find(s=>s.planName.toLowerCase().trim()===this.memberData.plan.toLowerCase().trim());if(h)r=h.id.toString();else{let s=this.plans.find(x=>x.id.toString()===this.memberData.plan);s&&(r=s.id.toString())}}let t="";if(this.memberData.gender){let h=this.genders.find(s=>s.genderName.toLowerCase().trim()===this.memberData.gender.toLowerCase().trim());if(h)t=h.id.toString();else{let s=this.genders.find(x=>x.id.toString()===this.memberData.gender);s&&(t=s.id.toString())}}let m="";if(this.memberData.nationality){let h=this.nationalities.find(s=>s.countryName.toLowerCase().trim()===this.memberData.nationality.toLowerCase().trim());if(h)m=h.id.toString();else{let s=this.nationalities.find(x=>x.id.toString()===this.memberData.nationality);s&&(m=s.id.toString())}}let f="";if(this.memberData.paymentStatus){let h=this.paymentStatuses.find(s=>s.statusName.toLowerCase().trim()===this.memberData.paymentStatus.toLowerCase().trim());if(h)f=h.id.toString();else{let s=this.paymentStatuses.find(x=>x.id.toString()===this.memberData.paymentStatus);s&&(f=s.id.toString())}}let p="";if(this.memberData.paymentMethod){let h=this.paymentMethods.find(s=>s.methodName.toLowerCase().trim()===this.memberData.paymentMethod.toLowerCase().trim());if(h)p=h.id.toString();else{let s=this.paymentMethods.find(x=>x.id.toString()===this.memberData.paymentMethod);s&&(p=s.id.toString())}}this.memberForm.patchValue({firstName:this.memberData.firstName||"",lastName:this.memberData.lastName||"",email:this.memberData.email||"",phoneNumber:this.memberData.phoneNumber||"",alternatePhoneNumber:this.memberData.alternatePhoneNumber||"",dateOfBirth:this.memberData.dateOfBirth||"",gender:t,nationality:m,address:this.memberData.address||"",plan:r,golfClubId:this.memberData.golfClubId||"",membershipStartDate:this.memberData.membershipStartDate||"",membershipEndDate:this.memberData.membershipEndDate||"",emergencyContactName:this.memberData.emergencyContactName||"",emergencyContactPhone:this.memberData.emergencyContactPhone||"",emergencyContactRelation:this.memberData.emergencyContactRelation||"",paymentStatus:f,paymentMethod:p,referredBy:this.memberData.referredBy||"",handicap:this.memberData.handicap||!1,enquiryId:this.memberData.enquiryId||"",enquiryMessage:this.memberData.enquiryMessage||""}),this.memberData.profilePhoto&&(this.profilePhotoPreview=this.memberData.profilePhoto),this.memberData.idProof&&(this.idProofPreview=this.memberData.idProof)}loadDropdownData(){return C(this,null,function*(){try{let[r,t,m,f,p]=yield Promise.all([this.memberService.getGender(),this.memberService.getNationality(),this.memberService.getPlan(),this.memberService.getPaymentStatus(),this.memberService.getPaymentMethod()]);r?.data&&(this.genders=Array.isArray(r.data)?r.data:r.data.data?r.data.data:[]),t?.data&&(this.nationalities=Array.isArray(t.data)?t.data:t.data.data?t.data.data:[]),m?.data&&(this.plans=Array.isArray(m.data)?m.data:m.data.data?m.data.data:[]),f?.data&&(this.paymentStatuses=Array.isArray(f.data)?f.data:f.data.data?f.data.data:[]),p?.data&&(this.paymentMethods=Array.isArray(p.data)?p.data:p.data.data?p.data.data:[])}catch(r){throw r}})}onFileSelected(r,t){let m=r.target.files[0];if(m)if(t==="profile"){this.selectedProfileFile=m;let f=new FileReader;f.onload=p=>{this.profilePhotoPreview=p.target?.result||null},f.readAsDataURL(m)}else{this.selectedIdProofFile=m;let f=new FileReader;f.onload=p=>{this.idProofPreview=p.target?.result||null},f.readAsDataURL(m)}}removeFile(r){if(r==="profile"){this.selectedProfileFile=null,this.profilePhotoPreview=null;let t=document.getElementById("profilePhoto");t&&(t.value="")}else{this.selectedIdProofFile=null,this.idProofPreview=null;let t=document.getElementById("idProof");t&&(t.value="")}}onSubmit(){return C(this,null,function*(){try{if(this.submitted=!0,this.memberForm.invalid){let h=this.getFirstInvalidField();h&&document.querySelector(`[formcontrolname="${h}"]`)?.scrollIntoView({behavior:"smooth",block:"center"}),yield this.showError("Please fill in all required fields correctly.");return}this.loading=!0;let r=new FormData,t=this.memberForm.getRawValue(),m=t.plan;if(!m||m===""||m==="null"){yield this.showError("Please select a valid membership plan."),this.loading=!1;return}if(!this.plans.find(h=>h.id.toString()===m.toString())){yield this.showError("Selected plan is invalid. Please select a valid membership plan."),this.loading=!1;return}r.append("firstName",(t.firstName||"").toString().trim()),r.append("lastName",(t.lastName||"").toString().trim()),r.append("email",(t.email||"").toString().trim()),r.append("phoneNumber",(t.phoneNumber||"").toString().trim()),r.append("plan",m.toString()),t.alternatePhoneNumber&&t.alternatePhoneNumber.trim()&&r.append("alternatePhoneNumber",t.alternatePhoneNumber.trim()),t.dateOfBirth&&r.append("dateOfBirth",new Date(t.dateOfBirth).toISOString().split("T")[0]),t.gender&&t.gender!==""&&t.gender!=="null"&&r.append("gender",t.gender.toString()),t.nationality&&t.nationality!==""&&t.nationality!=="null"&&r.append("nationality",t.nationality.toString()),t.address&&t.address.trim()&&r.append("address",t.address.trim()),t.membershipStartDate&&r.append("membershipStartDate",new Date(t.membershipStartDate).toISOString().split("T")[0]),t.membershipEndDate&&r.append("membershipEndDate",new Date(t.membershipEndDate).toISOString().split("T")[0]),t.emergencyContactName&&t.emergencyContactName.trim()&&r.append("emergencyContactName",t.emergencyContactName.trim()),t.emergencyContactPhone&&t.emergencyContactPhone.trim()&&r.append("emergencyContactPhone",t.emergencyContactPhone.trim()),t.emergencyContactRelation&&t.emergencyContactRelation.trim()&&r.append("emergencyContactRelation",t.emergencyContactRelation.trim()),t.paymentStatus&&t.paymentStatus!==""&&t.paymentStatus!=="null"&&r.append("paymentStatus",t.paymentStatus.toString()),t.paymentMethod&&t.paymentMethod!==""&&t.paymentMethod!=="null"&&r.append("paymentMethod",t.paymentMethod.toString()),t.referredBy&&t.referredBy.trim()&&r.append("referredBy",t.referredBy.trim()),r.append("handicap",t.handicap?"true":"false"),t.enquiryId&&r.append("enquiryId",t.enquiryId.toString()),t.enquiryMessage&&t.enquiryMessage.trim()&&r.append("enquiryMessage",t.enquiryMessage.trim()),this.selectedProfileFile&&r.append("profilePhoto",this.selectedProfileFile),this.selectedIdProofFile&&r.append("idProof",this.selectedIdProofFile);let p=yield this.memberService.processMember(r,this.memberId);if(p?.data?.code===1)yield M.default.fire({title:"Success!",text:"Member profile has been updated successfully.",icon:"success",confirmButtonText:"Ok"}),this.router.navigate(["/members"]);else{let h=p?.data?.message||"Failed to update member",s=p?.data?.errors;if(s){let x="";for(let[fe,w]of Object.entries(s))Array.isArray(w)&&(x+=`${fe}: ${w.join(", ")}
`);throw new Error(`${h}

Details:
${x}`)}else throw new Error(h)}}catch(r){console.error("Update error:",r),yield this.showError(r instanceof Error?r.message:"Failed to update member")}finally{this.loading=!1}})}onCancel(){this.router.navigate(["/members"])}get f(){return this.memberForm.controls}getFirstInvalidField(){let r=this.memberForm.controls;for(let t in r)if(r[t].invalid)return t;return null}isFieldInvalid(r){let t=this.memberForm.get(r);return["firstName","lastName","email","phoneNumber","plan"].includes(r)?!!(t&&t.invalid&&(t.dirty||t.touched||this.submitted)):!1}getErrorMessage(r){let t=this.memberForm.get(r);return!t||!t.errors?"":t.errors.required?"This field is required":t.errors.email?"Please enter a valid email address":t.errors.pattern&&r==="phoneNumber"?"Please enter a valid phone number":t.errors.minlength?`Minimum length is ${t.errors.minlength.requiredLength} characters`:"Invalid input"}showError(r){return C(this,null,function*(){yield M.default.fire("Error",r,"error")})}};c.\u0275fac=function(t){return new(t||c)(F(le),F(ce),F(pe),F(U),F(T))},c.\u0275cmp=B({type:c,selectors:[["app-update-members"]],standalone:!0,features:[L],decls:264,vars:35,consts:[["xs","12"],[1,"mb-4"],["cForm","",1,"row","g-3","needs-validation",3,"ngSubmit","formGroup"],["md","6",3,"cFormFloating"],["cFormControl","","id","firstName","formControlName","firstName","required","","type","text","placeholder","First Name"],["cLabel","","for","firstName",1,"ms-2"],[3,"valid",4,"ngIf"],["cFormControl","","id","lastName","formControlName","lastName","required","","type","text","placeholder","Last Name"],["cLabel","","for","lastName",1,"ms-2"],["cFormControl","","id","email","formControlName","email","required","","type","email","placeholder","Email"],["cLabel","","for","email",1,"ms-2"],["cFormControl","","id","phoneNumber","formControlName","phoneNumber","required","","type","tel","placeholder","Phone Number"],["cLabel","","for","phoneNumber",1,"ms-2"],["cFormControl","","id","alternatePhoneNumber","formControlName","alternatePhoneNumber","type","tel","placeholder","Alternate Phone Number"],["cLabel","","for","alternatePhoneNumber",1,"ms-2"],["cFormControl","","id","dateOfBirth","formControlName","dateOfBirth","type","date","placeholder","Date of Birth"],["cLabel","","for","dateOfBirth",1,"ms-2"],["cSelect","","id","gender","formControlName","gender"],["value",""],[3,"value",4,"ngFor","ngForOf"],["cLabel","","for","gender",1,"ms-2"],["cSelect","","id","nationality","formControlName","nationality"],["cLabel","","for","nationality",1,"ms-2"],["md","12",3,"cFormFloating"],["cFormControl","","id","address","formControlName","address","placeholder","Address","rows","3"],["cLabel","","for","address",1,"ms-2"],["cSelect","","id","plan","formControlName","plan","required",""],["cLabel","","for","plan",1,"ms-2"],["cFormControl","","id","golfClubId","formControlName","golfClubId","readonly","","type","text","placeholder","Golf Club ID"],["cLabel","","for","golfClubId",1,"ms-2"],["cFormControl","","id","membershipStartDate","formControlName","membershipStartDate","type","date","placeholder","Membership Start Date"],["cLabel","","for","membershipStartDate",1,"ms-2"],["cFormControl","","id","membershipEndDate","formControlName","membershipEndDate","type","date","placeholder","Membership End Date"],["cLabel","","for","membershipEndDate",1,"ms-2"],["cSelect","","id","paymentStatus","formControlName","paymentStatus"],["cLabel","","for","paymentStatus",1,"ms-2"],["cSelect","","id","paymentMethod","formControlName","paymentMethod"],["cLabel","","for","paymentMethod",1,"ms-2"],["cFormControl","","id","emergencyContactName","formControlName","emergencyContactName","type","text","placeholder","Emergency Contact Name"],["cLabel","","for","emergencyContactName",1,"ms-2"],["cFormControl","","id","emergencyContactPhone","formControlName","emergencyContactPhone","type","tel","placeholder","Emergency Contact Phone"],["cLabel","","for","emergencyContactPhone",1,"ms-2"],["cFormControl","","id","emergencyContactRelation","formControlName","emergencyContactRelation","type","text","placeholder","Relationship"],["cLabel","","for","emergencyContactRelation",1,"ms-2"],["cFormControl","","id","referredBy","formControlName","referredBy","type","text","placeholder","Referred By"],["cLabel","","for","referredBy",1,"ms-2"],["md","6"],[1,"mb-3"],["cLabel","","for","profilePhoto",1,"form-label"],["cFormControl","","type","file","id","profilePhoto","accept","image/*",1,"form-control",3,"change"],["class","mt-2",4,"ngIf"],["cLabel","","for","idProof",1,"form-label"],["cFormControl","","type","file","id","idProof","accept",".pdf,.jpg,.jpeg,.png",1,"form-control",3,"change"],[1,"form-check","mt-3"],["type","checkbox","id","handicap","formControlName","handicap",1,"form-check-input"],["for","handicap",1,"form-check-label"],["xs","12",1,"mt-4"],["cButton","","color","primary","type","submit",1,"me-2",3,"disabled"],["cButton","","color","secondary","type","button",3,"click","disabled"],[3,"valid"],[3,"value"],[1,"mt-2"],["alt","Profile Preview",1,"img-thumbnail",2,"max-width","200px","max-height","200px",3,"src"],["cButton","","color","danger","size","sm","type","button",1,"ms-2",3,"click"],[4,"ngIf"],["alt","ID Proof Preview",1,"img-thumbnail",2,"max-width","200px","max-height","200px",3,"src"],[1,"alert","alert-info"]],template:function(t,m){t&1&&(i(0,"c-row"),e(1,`
  `),i(2,"c-col",0),e(3,`
    `),i(4,"c-card",1),e(5,`
      `),i(6,"c-card-header"),e(7,`
        `),i(8,"strong"),e(9,"Update Member Profile"),n(),e(10,`
      `),n(),e(11,`
      `),i(12,"c-card-body"),e(13,`
        `),i(14,"form",2),v("ngSubmit",function(){return m.onSubmit()}),e(15,`
          `),e(16,`
          `),i(17,"c-col",3),e(18,`
            `),u(19,"input",4),e(20,`
            `),i(21,"label",5),e(22,"First Name"),n(),e(23,`
            `),b(24,be,2,2,"c-form-feedback",6),e(25,`
          `),n(),e(26,`

          `),i(27,"c-col",3),e(28,`
            `),u(29,"input",7),e(30,`
            `),i(31,"label",8),e(32,"Last Name"),n(),e(33,`
            `),b(34,xe,2,2,"c-form-feedback",6),e(35,`
          `),n(),e(36,`

          `),i(37,"c-col",3),e(38,`
            `),u(39,"input",9),e(40,`
            `),i(41,"label",10),e(42,"Email"),n(),e(43,`
            `),b(44,ge,2,2,"c-form-feedback",6),e(45,`
          `),n(),e(46,`

          `),i(47,"c-col",3),e(48,`
            `),u(49,"input",11),e(50,`
            `),i(51,"label",12),e(52,"Phone Number"),n(),e(53,`
            `),b(54,ye,2,2,"c-form-feedback",6),e(55,`
          `),n(),e(56,`

          `),i(57,"c-col",3),e(58,`
            `),u(59,"input",13),e(60,`
            `),i(61,"label",14),e(62,"Alternate Phone Number"),n(),e(63,`
          `),n(),e(64,`

          `),i(65,"c-col",3),e(66,`
            `),u(67,"input",15),e(68,`
            `),i(69,"label",16),e(70,"Date of Birth"),n(),e(71,`
          `),n(),e(72,`

          `),i(73,"c-col",3),e(74,`
            `),i(75,"select",17),e(76,`
              `),i(77,"option",18),e(78,"Select Gender"),n(),e(79,`
              `),b(80,Se,2,2,"option",19),e(81,`
            `),n(),e(82,`
            `),i(83,"label",20),e(84,"Gender"),n(),e(85,`
          `),n(),e(86,`

          `),i(87,"c-col",3),e(88,`
            `),i(89,"select",21),e(90,`
              `),i(91,"option",18),e(92,"Select Nationality"),n(),e(93,`
              `),b(94,ve,2,2,"option",19),e(95,`
            `),n(),e(96,`
            `),i(97,"label",22),e(98,"Nationality"),n(),e(99,`
          `),n(),e(100,`

          `),i(101,"c-col",23),e(102,`
            `),u(103,"textarea",24),e(104,`
            `),i(105,"label",25),e(106,"Address"),n(),e(107,`
          `),n(),e(108,`

          `),i(109,"c-col",3),e(110,`
            `),i(111,"select",26),e(112,`
              `),i(113,"option",18),e(114,"Select Plan"),n(),e(115,`
              `),b(116,Ce,2,2,"option",19),e(117,`
            `),n(),e(118,`
            `),i(119,"label",27),e(120,"Membership Plan"),n(),e(121,`
            `),b(122,Fe,2,2,"c-form-feedback",6),e(123,`
          `),n(),e(124,`

          `),i(125,"c-col",3),e(126,`
            `),u(127,"input",28),e(128,`
            `),i(129,"label",29),e(130,"Golf Club ID"),n(),e(131,`
          `),n(),e(132,`

          `),i(133,"c-col",3),e(134,`
            `),u(135,"input",30),e(136,`
            `),i(137,"label",31),e(138,"Membership Start Date"),n(),e(139,`
          `),n(),e(140,`

          `),i(141,"c-col",3),e(142,`
            `),u(143,"input",32),e(144,`
            `),i(145,"label",33),e(146,"Membership End Date"),n(),e(147,`
          `),n(),e(148,`

          `),e(149,`
          `),i(150,"c-col",3),e(151,`
            `),i(152,"select",34),e(153,`
              `),i(154,"option",18),e(155,"Select Payment Status"),n(),e(156,`
              `),b(157,Ee,2,2,"option",19),e(158,`
            `),n(),e(159,`
            `),i(160,"label",35),e(161,"Payment Status"),n(),e(162,`
          `),n(),e(163,`

          `),i(164,"c-col",3),e(165,`
            `),i(166,"select",36),e(167,`
              `),i(168,"option",18),e(169,"Select Payment Method"),n(),e(170,`
              `),b(171,Ne,2,2,"option",19),e(172,`
            `),n(),e(173,`
            `),i(174,"label",37),e(175,"Payment Method"),n(),e(176,`
          `),n(),e(177,`

          `),e(178,`
          `),i(179,"c-col",3),e(180,`
            `),u(181,"input",38),e(182,`
            `),i(183,"label",39),e(184,"Emergency Contact Name"),n(),e(185,`
          `),n(),e(186,`

          `),i(187,"c-col",3),e(188,`
            `),u(189,"input",40),e(190,`
            `),i(191,"label",41),e(192,"Emergency Contact Phone"),n(),e(193,`
          `),n(),e(194,`

          `),i(195,"c-col",3),e(196,`
            `),u(197,"input",42),e(198,`
            `),i(199,"label",43),e(200,"Relationship"),n(),e(201,`
          `),n(),e(202,`

          `),i(203,"c-col",3),e(204,`
            `),u(205,"input",44),e(206,`
            `),i(207,"label",45),e(208,"Referred By (Optional)"),n(),e(209,`
          `),n(),e(210,`

          `),e(211,`
          `),i(212,"c-col",46),e(213,`
            `),i(214,"div",47),e(215,`
              `),i(216,"label",48),e(217,"Profile Photo"),n(),e(218,`
              `),i(219,"input",49),v("change",function(p){return m.onFileSelected(p,"profile")}),n(),e(220,`
              `),b(221,Pe,7,1,"div",50),e(222,`
            `),n(),e(223,`
          `),n(),e(224,`

          `),i(225,"c-col",46),e(226,`
            `),i(227,"div",47),e(228,`
              `),i(229,"label",51),e(230,"ID Proof"),n(),e(231,`
              `),i(232,"input",52),v("change",function(p){return m.onFileSelected(p,"idProof")}),n(),e(233,`
              `),b(234,Ie,9,2,"div",50),e(235,`
            `),n(),e(236,`
          `),n(),e(237,`

          `),e(238,`
          `),i(239,"c-col",46),e(240,`
            `),i(241,"div",53),e(242,`
              `),u(243,"input",54),e(244,`
              `),i(245,"label",55),e(246,`
                Handicap
              `),n(),e(247,`
            `),n(),e(248,`
          `),n(),e(249,`

          `),e(250,`
          `),i(251,"c-col",56),e(252,`
            `),i(253,"button",57),e(254),n(),e(255,`
            `),i(256,"button",58),v("click",function(){return m.onCancel()}),e(257,`
              Cancel
            `),n(),e(258,`
          `),n(),e(259,`
        `),n(),e(260,`
      `),n(),e(261,`
    `),n(),e(262,`
  `),n(),e(263,`
`),n()),t&2&&(a(14),o("formGroup",m.memberForm),a(3),o("cFormFloating",!0),a(7),o("ngIf",m.isFieldInvalid("firstName")),a(3),o("cFormFloating",!0),a(7),o("ngIf",m.isFieldInvalid("lastName")),a(3),o("cFormFloating",!0),a(7),o("ngIf",m.isFieldInvalid("email")),a(3),o("cFormFloating",!0),a(7),o("ngIf",m.isFieldInvalid("phoneNumber")),a(3),o("cFormFloating",!0),a(8),o("cFormFloating",!0),a(8),o("cFormFloating",!0),a(7),o("ngForOf",m.genders),a(7),o("cFormFloating",!0),a(7),o("ngForOf",m.nationalities),a(7),o("cFormFloating",!0),a(8),o("cFormFloating",!0),a(7),o("ngForOf",m.plans),a(6),o("ngIf",m.isFieldInvalid("plan")),a(3),o("cFormFloating",!0),a(8),o("cFormFloating",!0),a(8),o("cFormFloating",!0),a(9),o("cFormFloating",!0),a(7),o("ngForOf",m.paymentStatuses),a(7),o("cFormFloating",!0),a(7),o("ngForOf",m.paymentMethods),a(8),o("cFormFloating",!0),a(8),o("cFormFloating",!0),a(8),o("cFormFloating",!0),a(8),o("cFormFloating",!0),a(18),o("ngIf",m.profilePhotoPreview),a(13),o("ngIf",m.idProofPreview),a(19),o("disabled",m.loading),a(),g(`
              `,m.loading?"Saving...":"Update Member Profile",`
            `),a(2),o("disabled",m.loading))},dependencies:[k,R,q,W,Q,A,K,$,V,se,te,ae,oe,Y,X,re,Z,ee,me,ie,ne,de,j,H,J,G,z,O]});let l=c;return l})();export{Ve as UpdateMembersComponent};
