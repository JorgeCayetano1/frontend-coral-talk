import{j as G}from"./chunk-325QIRXI.js";import{$a as c,Aa as u,Ba as p,Bb as m,Cb as x,Db as j,Ga as v,Ha as g,Ib as q,Jb as T,Lb as F,Mb as P,Ta as r,Wb as V,eb as C,fa as b,hb as f,ib as _,kb as E,lb as k,mb as A,nb as S,ob as i,pa as w,pb as o,qb as d,rb as N,sa as M,sb as H,tb as h,ya as y,za as I}from"./chunk-JSW376PB.js";var D=(()=>{let e=class e{transform(a){return a[a.length-1].isMe?"T\xFA: "+a[a.length-1].message:a[a.length-1].message}};e.\u0275fac=function(s){return new(s||e)},e.\u0275pipe=M({name:"lastMessage",type:e,pure:!1,standalone:!0});let t=e;return t})();var Q=t=>({"background-image":t});function B(t,e){t&1&&(i(0,"div",17)(1,"button",18),u(),i(2,"svg",19),d(3,"path",20),o(),p(),i(4,"span",21),m(5,"Unir"),o()()())}function z(t,e){if(t&1){let n=N();i(0,"div",11),H("click",function(){let s=y(n).$index,l=h();return I(l.setSelectedItem(s))}),i(1,"div",12),d(2,"span",13),o(),i(3,"div",14)(4,"div",15)(5,"span"),m(6),o(),i(7,"span",16),m(8),F(9,"lastMessage"),o()(),C(10,B,6,0,"div",17),o()()}if(t&2){let n=e.$implicit,a=e.$index,s=h();f("bg-gray-200",s.selectedItemIndex()===a),r(),_(T(19,Q,"url("+n.profileImage+")")),r(),f("bg-green-500",n.status==="En l\xEDnea")("bg-red-500",n.status==="Ocupado")("bg-gray-500",n.status==="Desconectado")("bg-yellow-500",n.status==="Ausente")("bg-blue-500",n.status==="En llamada"),r(4),x(n.profileName),r(2),j(" ",P(9,17,n.message)," "),r(2),E(s.isVideoCall()?10:-1)}}var K=(()=>{let e=class e{constructor(){this.selectedItemIndex=c(null),this.chatItems=g.required(),this.selectedChatItem=v(),this.isVideoCall=g(!1,{transform:V})}setSelectedItem(a){this.selectedItemIndex.update(()=>a),this.selectedChatItem.emit(this.chatItems()[a])}ngAfterViewInit(){this.selectedItemIndex.set(0),this.selectedChatItem.emit(this.chatItems()[0])}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=w({type:e,selectors:[["dashboard-search-card"]],inputs:{chatItems:[1,"chatItems"],isVideoCall:[1,"isVideoCall"]},outputs:{selectedChatItem:"selectedChatItem"},standalone:!0,features:[q],decls:14,vars:1,consts:[[1,"w-[30rem]"],[1,"w-[29rem]","m-2","fixed","top-20","bottom-0","right-0","flex","flex-col","border-solid","border-r-2","bg-white","rounded-3xl","shadow-md"],[1,"flex","flex-row","space-x-2","font-semibold","border-solid","border-y","p-4"],[1,"text-xl"],[1,"px-2","bg-gray-100","rounded-md","border-solid","border-2","border-gray-200","text-base"],[1,"flex","flex-row","justify-center","space-x-2","p-4"],["inputPlaceholder","Buscar...",1,"w-full"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"size-6","text-gray-500"],["stroke-linecap","round","stroke-linejoin","round","d","m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"],[1,"overflow-y-auto","p-2"],[1,"flex","flex-row","p-4","mb-1","mx-2","rounded-md","transition-colors","duration-150","hover:bg-gray-200","cursor-pointer",3,"bg-gray-200"],[1,"flex","flex-row","p-4","mb-1","mx-2","rounded-md","transition-colors","duration-150","hover:bg-gray-200","cursor-pointer",3,"click"],[1,"chat-img","flex","flex-none","justify-end","items-end","w-12","h-12","bg-cover","bg-center"],[1,"w-3","h-3","m-0.5","rounded-full","border-solid","border-2","border-white"],[1,"w-full","flex","flex-row","justify-between","mx-4"],[1,"flex","flex-col","justify-center","font-semibold"],[1,"text-xs","overflow-hidden","overflow-ellipsis","whitespace-nowrap"],[1,"flex","flex-col","justify-start"],["type","button",1,"flex","flex-row","items-center","space-x-2","text-gray-500","text-xs","bg-white","border-0","p-1","px-2","focus:outline-none","hover:bg-gray-100","rounded-full","transition-colors","duration-150"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 576 512","stroke","currentColor","fill","currentColor",1,"size-3"],["d","M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"],[1,"font-semibold"]],template:function(s,l){s&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),m(4,"Conversaciones activas"),o(),i(5,"span",4),m(6),o()(),i(7,"div",5)(8,"coral-input",6),u(),i(9,"svg",7),d(10,"path",8),o()()(),p(),i(11,"div",9),A(12,z,11,21,"div",10,k),o()()()),s&2&&(r(6),x(l.chatItems().length),r(6),S(l.chatItems()))},dependencies:[G,D],styles:[".chat-img[_ngcontent-%COMP%]{border-radius:50%}"]});let t=e;return t})();var X=(()=>{let e=class e{constructor(){this.chatItems=c([{profileName:"Juanca Iwasaki",profileImage:"https://portal.andina.pe/EDPfotografia3/Thumbnail/2023/03/17/000942245W.jpg",message:[{message:"Jaze, \xBFc\xF3mo est\xE1s?",time:"11:00 a. m.",isMe:!0},{message:"Hola, me encuentro bien, tuve una grabaci\xF3n hoy",time:"11:01 a. m.",isMe:!1},{message:"Y tendr\xE9 una gira de conciertos ma\xF1ana",time:"11:01 a. m.",isMe:!1},{message:"\xA1Qu\xE9 bien! Te deseo mucha suerte",time:"11:01 a. m.",isMe:!0},{message:"Gracias, nos vemos luego",time:"11:01 a. m.",isMe:!1}],status:"Ausente"},{profileName:"Charlie Parra",profileImage:"https://www.filarmonia.org/image.axd?picture=2016%2f2%2fDSCN5556+-+web.JPG",message:[{message:"Hola Charlie, \xBFc\xF3mo est\xE1s?",time:"05:00 a. m.",isMe:!0},{message:"Hola, me encuentro bien, gracias por preguntar",time:"10:01 a. m.",isMe:!1},{message:"\xBFEn qu\xE9 puedo ayudarte?",time:"10:01 a. m.",isMe:!1},{message:"Tengo un problema con mi guitarra",time:"10:01 a. m.",isMe:!0},{message:"\xBFQu\xE9 problema tienes?",time:"10:01 a. m.",isMe:!1},{message:"No suena como antes",time:"10:01 a. m.",isMe:!0},{message:"\xBFHas probado con otro cable?",time:"10:01 a. m.",isMe:!1}],status:"En l\xEDnea"},{profileName:"Alexis Texas",profileImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqRAt9N6wLM5QO2kkbhB5mkOnf5mZZFaU19Q&s",message:[{message:"Hi Texas, how are you?",time:"10:00 a. m.",isMe:!0},{message:"Hi, I am fine, thank you for asking",time:"10:01 a. m.",isMe:!1},{message:"You know the last video you uploaded was great",time:"10:02 a. m.",isMe:!1},{message:"Thank you, I am glad you liked it",time:"10:03 a. m.",isMe:!0},{message:"I will be waiting for the next one",time:"10:04 a. m.",isMe:!1}],status:"Desconectado"},{profileName:"Andr\xE9s Grillo",profileImage:"https://scontent.flim7-1.fna.fbcdn.net/v/t1.6435-9/70760816_2526661937380531_5665255098297614336_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0327a3&_nc_ohc=1mN7C5DAAHYQ7kNvgEH_SnC&_nc_ht=scontent.flim7-1.fna&oh=00_AYDfE1V1Tis9mjtynPI_KdwwX5MLq4oBSE7qLGhUahGWmw&oe=66AE2FF8",message:[{message:"Hola Grillo, \xBFc\xF3mo est\xE1s?",time:"03:43 p. m.",isMe:!0},{message:"Hola, no me hables as\xED, \xBFqu\xE9 necesitas?",time:"03:44 p. m.",isMe:!1},{message:"No necesito nada, solo quer\xEDa que seas mi amigo",time:"03:45 p. m.",isMe:!0},{message:"Entiendelo, no quiero ser tu amigo",time:"03:46 p. m.",isMe:!1},{message:"Est\xE1 bien, lo entiendo",time:"03:47 p. m.",isMe:!0},{message:"Caf\xE9 marr\xF3n: caf\xE9 oscuro como la vida",time:"03:48 p. m.",isMe:!1}],status:"En l\xEDnea"},{profileName:"Francisca Aronsson",profileImage:"https://e.rpp-noticias.io/xlarge/2024/06/26/295229_1603097.webp",message:[{message:"Pecas, \xBFc\xF3mo est\xE1s?",time:"06:45 a. m.",isMe:!0},{message:"Hola, estoy probando la aplicaci\xF3n, \xBFy t\xFA?",time:"06:46 a. m.",isMe:!1},{message:"Igual, \xBFqu\xE9 tal te parece?",time:"06:47 a. m.",isMe:!1},{message:"Me parece muy buena, \xBFa ti?",time:"06:48 a. m.",isMe:!0},{message:"Me parece igual",time:"06:49 a. m.",isMe:!1},{message:"\xBFQuieres hacer una llamada de prueba?",time:"06:50 a. m.",isMe:!0},{message:"Claro, \xBFa qu\xE9 hora?",time:"06:51 a. m.",isMe:!1}],status:"En llamada"},{profileName:"Andy Merino",profileImage:"https://pbs.twimg.com/media/GHoLv0PWsAAm6CB?format=jpg&name=large",message:[{message:"Zein, \xBFc\xF3mo est\xE1s?",time:"11:34 a. m.",isMe:!0},{message:"Muy bien mi neto, en estados unidos la estoy pasando muy bien",time:"11:35 a. m.",isMe:!1},{message:"Me alegro mucho por ti, espero que te vaya bien",time:"11:36 a. m.",isMe:!0},{message:"Gracias, nos vemos luego",time:"11:37 a. m.",isMe:!1}],status:"En l\xEDnea"},{profileName:"Luciana Ysuche",profileImage:"https://i.ytimg.com/vi/WUedSQSyARU/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLCKcnrrN3Ivs1j1LOvPMql6ew8wTQ",message:[{message:"Lucianeka, fuiste al pride?",time:"10:30 a. m.",isMe:!0},{message:"No, no pude ir, pero me hubiera gustado",time:"10:31 a. m.",isMe:!1},{message:"Fue muy divertido, deber\xEDas ir la pr\xF3xima vez",time:"10:32 a. m.",isMe:!0},{message:"Lo tomar\xE9 en cuenta, gracias por la invitaci\xF3n",time:"10:33 a. m.",isMe:!1}],status:"En l\xEDnea"},{profileName:"Darren Jason Watkins",profileImage:"https://i.namu.wiki/i/-nL9wSpejxeGrLevN0aeN4z3GaE6RA5XEV3e2KB8PWbEEg4zPjzQM29-CxUFuUOejxu7cw0ptKaXrOj_tWeZiA.webp",message:[{message:"You are a great person",time:"04:00 p. m.",isMe:!0},{message:"Thank you, you are a great person too",time:"04:01 p. m.",isMe:!1},{message:"I am glad to hear that",time:"04:02 p. m.",isMe:!0},{message:"I am glad to hear that too",time:"04:03 p. m.",isMe:!1}],status:"En l\xEDnea"},{profileName:"George Kusunoki Miller",profileImage:"https://scontent.flim7-1.fna.fbcdn.net/v/t39.30808-1/310063955_199586345765925_4243720735949008870_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=1G7WG7qgJlEQ7kNvgHZDjoR&_nc_ht=scontent.flim7-1.fna&oh=00_AYBk9LmInHMKtN4uHPioAqF-8zvph4C_lxv8l6VPJTTArQ&oe=668C9B58",message:[{message:"Hi, how are you?",time:"02:00 a. m.",isMe:!0},{message:"Hi, I am fine, thank you for asking",time:"02:01 a. m.",isMe:!1},{message:"How can I help you?",time:"02:02 a. m.",isMe:!1},{message:"I need help with my audio base",time:"02:03 a. m.",isMe:!0},{message:"I will help you with that",time:"02:04 a. m.",isMe:!1}],status:"En l\xEDnea"}])}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();export{K as a,X as b};