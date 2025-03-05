import{d as _}from"./chunk-5D5M3BRZ.js";import{d as M,e as H,f as P,h as V,i as T,j as L}from"./chunk-325QIRXI.js";import"./chunk-TL5N3MSS.js";import{$a as b,Aa as o,Ba as r,Bb as i,Ib as y,Ta as s,eb as u,gb as h,jb as C,kb as p,la as g,ob as e,pa as v,pb as t,qb as a,rb as w,sb as f,tb as E,ya as x,za as S}from"./chunk-JSW376PB.js";function R(n,l){n&1&&(e(0,"div",6)(1,"div",10)(2,"label",11),i(3," Nombre "),t(),e(4,"coral-input",12),o(),e(5,"svg",13),a(6,"path",14),t()()(),r(),e(7,"div",10)(8,"label",11),i(9," Apellido "),t(),e(10,"coral-input",15),o(),e(11,"svg",13),a(12,"path",14),t()()(),r(),e(13,"div",10)(14,"label",16),i(15,"Fecha de nacimiento"),t(),a(16,"input",17),t(),e(17,"div",10)(18,"label",11),i(19," Correo Electronico "),t(),e(20,"coral-input",18),o(),e(21,"svg",13),a(22,"path",14),t()()(),r(),e(23,"div",10)(24,"label",11),i(25," Contrase\xF1a "),t(),e(26,"coral-input",19),o(),e(27,"svg",13),a(28,"path",14),t()()(),r(),e(29,"div",10)(30,"label",11),i(31," Pa\xEDs "),t(),e(32,"coral-input",20),o(),e(33,"svg",13),a(34,"path",14),t()()()())}function G(n,l){n&1&&(e(0,"div",7)(1,"div",10)(2,"label",11),i(3," Idioma Nativo "),t(),e(4,"coral-input",21),o(),e(5,"svg",13),a(6,"path",14),t()()(),r(),e(7,"div",10)(8,"label",22),i(9,"\xBFDe qu\xE9 te gustaria hablar?"),t(),e(10,"coral-input",23),o(),e(11,"svg",24),a(12,"path",25),t()(),r(),e(13,"coral-input",26),o(),e(14,"svg",27),a(15,"path",28),t()()(),r(),e(16,"div",10)(17,"label",22),i(18,"Nivel de Ingl\xE9s"),t(),e(19,"coral-input",29),o(),e(20,"svg",13),a(21,"path",30),t()()()())}function F(n,l){n&1&&(e(0,"div",7)(1,"div",31)(2,"button",32),i(3," Registrarme "),t()()())}function k(n,l){if(n&1){let z=w();e(0,"div",8)(1,"button",33),f("click",function(){x(z);let d=E();return S(d.nextStep())}),i(2," Continuar "),t()()}}function N(n,l){n&1&&(e(0,"div",9)(1,"span",34),i(2,"Hola, Bienvenido"),t(),a(3,"div",35),t())}var J=(()=>{let l=class l{constructor(){this.fb=g(V),this.router=g(_),this.form=this.fb.group({name:[""],lastName:[""],birthday:[""],email:[""],password:[""],country:[""],nativeLanguage:[""],learningLanguage:this.fb.array([this.fb.group({language:[""],level:[""]})]),fluidLanguage:[""],topics:this.fb.array([this.fb.group({name:[""]})])}),this.lastStep=b(!1)}nextStep(){this.lastStep.update(c=>!c)}onRegister(){let c=this.form.value;this.router.navigate(["/auth/login"])}};l.\u0275fac=function(d){return new(d||l)},l.\u0275cmp=v({type:l,selectors:[["app-register-page"]],standalone:!0,features:[y],decls:13,vars:7,consts:[[1,"text-gray-600","body-font"],[1,"w-full","m-0","flex","flex-row"],[1,"grow","flex","items-center"],[1,"grow","p-8","flex","flex-col"],[1,"text-gray-900","text-3xl","font-bold","title-font","my-10"],["autocomplete","off",3,"ngSubmit","formGroup"],[1,"grid","grid-rows-3","grid-cols-2","gap-x-7"],[1,"grid","grid-cols-1"],[1,"grid","grid-cols-1","justify-items-center"],[1,"w-1/2","grow","flex","flex-col","justify-end","items-center","bg-indigo-500"],[1,"relative","mb-4"],[1,"leading-7","text-lg","text-gray-600","font-semibold"],["inputClass","mt-2","inputPlaceholder","Nombre"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 448 512","stroke","currentColor","fill","currentColor",1,"size-3","text-gray-500"],["d","M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"],["inputClass","mt-2","inputPlaceholder","Apellido"],["for","date",1,"leading-7","text-lg","text-gray-600","font-semibold"],["type","date","id","date","name","date","placeholder","dd/mm/yyyy",1,"mt-2","w-full","bg-white","rounded","border","border-gray-300","focus:border-indigo-500","focus:ring-2","focus:ring-indigo-200","text-base","outline-none","text-gray-700","py-2","px-3","leading-8","transition-colors","duration-200","ease-in-out"],["inputClass","mt-2","inputPlaceholder","Correo Electronico","inputType","email"],["inputClass","mt-2","inputPlaceholder","Contrase\xF1a","inputType","password"],["inputClass","mt-2","inputPlaceholder","Per\xFA","inputType","text"],["inputClass","mt-2","inputPlaceholder","Espa\xF1ol, Quechua, Aimara"],["for","topic-to-talk",1,"leading-7","text-lg","text-gray-600","font-semibold"],["inputClass","mt-2","inputPlaceholder","Viajes"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 512 512","stroke","currentColor","fill","currentColor",1,"size-3","text-gray-500"],["d","M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"],["inputClass","mt-2","inputPlaceholder","Entrevista Laboral"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 384 512","stroke","currentColor","fill","currentColor",1,"size-3","text-gray-500"],["d","M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"],["inputClass","mt-2","inputPlaceholder","B\xE1sico, Intermedio, Avanzado"],["d","M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"],[1,""],["type","submit",1,"mt-2","w-full","text-white","bg-indigo-500","border-0","py-2","px-8","focus:outline-none","hover:bg-indigo-600","rounded","text-lg","transition-colors","duration-150"],[1,"mt-2","w-2/3","text-white","bg-indigo-500","border-0","py-2","px-8","focus:outline-none","hover:bg-indigo-600","rounded","text-lg","transition-colors","duration-150",3,"click"],[1,"text-3xl","text-white","font-semibold"],[1,"h-[26rem]","w-96","bg-cover","bg-top","bg-no-repeat","rounded-lg",2,"background-image","url('https://i.ibb.co/bLcpXrR/32a0d2d2-1-Photoroom.png')"]],template:function(d,m){d&1&&(e(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"h2",4),i(6," Registro "),t()(),e(7,"form",5),f("ngSubmit",function(){return m.onRegister()}),u(8,R,35,0,"div",6)(9,G,22,0,"div",7)(10,F,4,0,"div",7),t(),u(11,k,3,0,"div",8),t()(),u(12,N,4,0,"div",9),t()()),d&2&&(s(2),C(m.lastStep()?"w-1/2":""),s(5),h("formGroup",m.form),s(),p(m.lastStep()?9:8),s(2),p(m.lastStep()?10:-1),s(),p(m.lastStep()?-1:11),s(),p(m.lastStep()?12:-1))},dependencies:[L,T,H,M,P]});let n=l;return n})();export{J as default};
