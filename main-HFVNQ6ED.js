import{a as u}from"./chunk-NS7ZPHR5.js";import{B as O,C as f,E as _,H as y,I as x,J as w,L,M as E,N as H,O as h,P as T,Q as I,d,f as M,g as C,h as r,i as c,j as k,n as b,q as S,v as i,w as o,x as a,y as P,z as m}from"./chunk-7D4FNC7N.js";var D=[{path:"",loadComponent:()=>import("./chunk-VRY6IXL6.js")},{path:"cardapio",loadComponent:()=>import("./chunk-4ZGK6BWY.js")}];function A(n){let e=n,g=Math.floor(Math.abs(n)),s=n.toString().replace(/^[^.]*\.?/,"").length,t=parseInt(n.toString().replace(/^[^e]*(e([-+]?\d+))?/,"$2"))||0;return g===Math.floor(g)&&g>=0&&g<=1?1:t===0&&g!==0&&g%1e6===0&&s===0||!(t>=0&&t<=5)?4:5}var V=["pt",[["AM","PM"],void 0,void 0],void 0,[["D","S","T","Q","Q","S","S"],["dom.","seg.","ter.","qua.","qui.","sex.","s\xE1b."],["domingo","segunda-feira","ter\xE7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xE1bado"],["dom.","seg.","ter.","qua.","qui.","sex.","s\xE1b."]],void 0,[["J","F","M","A","M","J","J","A","S","O","N","D"],["jan.","fev.","mar.","abr.","mai.","jun.","jul.","ago.","set.","out.","nov.","dez."],["janeiro","fevereiro","mar\xE7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]],void 0,[["a.C.","d.C."],void 0,["antes de Cristo","depois de Cristo"]],0,[6,0],["dd/MM/y","d 'de' MMM 'de' y","d 'de' MMMM 'de' y","EEEE, d 'de' MMMM 'de' y"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1} {0}",void 0,void 0,void 0],[",",".",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4\xA0#,##0.00","#E0"],"BRL","R$","Real brasileiro",{AUD:["AU$","$"],BYN:[void 0,"\u0440."],JPY:["JP\xA5","\xA5"],PHP:[void 0,"\u20B1"],PTE:["Esc."],RON:[void 0,"L"],SYP:[void 0,"S\xA3"],THB:["\u0E3F"],TWD:["NT$"],USD:["US$","$"]},"ltr",A];var B={scrollPositionRestoration:"top",anchorScrolling:"enabled"},$=I(B);w(V);var F={providers:[T(D,$),{provide:y,useValue:"pt"},{provide:x,useValue:"BRL"}]};var N=(()=>{let e=class e{constructor(){this.activeCLass=!1}open(){this.activeCLass=!0}close(){this.activeCLass=!1}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["app-nav-menu"]],hostVars:2,hostBindings:function(t,l){t&1&&m("keydown.escape",function(){return l.close()},!1,k),t&2&&S("active",l.activeCLass)},standalone:!0,features:[_],decls:18,vars:0,consts:[["type","button","title","Fechar",1,"nav-menu__button",3,"click"],["appSvgInline","assets/imgs/close.svg",1,"nav-menu__button__icon"],[1,"nav-menu__nav"],["routerLink","/",1,"nav-menu__link",3,"click"],["routerLink","cardapio",1,"nav-menu__link",3,"click"],["routerLink","/","fragment","sobre-nos",1,"nav-menu__link",3,"click"],["routerLink","/","fragment","mais-informacoes",1,"nav-menu__link",3,"click"],[1,"nav-menu__social"],["routerLink","/","title","Instagram",1,"nav-menu__social__link"],["appSvgInline","assets/imgs/instagram.svg",1,"nav-menu__social__icon"],["routerLink","/","title","Facebook",1,"nav-menu__social__link"],["appSvgInline","assets/imgs/facebook.svg",1,"nav-menu__social__icon"],["routerLink","/","title","Whatsapp",1,"nav-menu__social__link"],["appSvgInline","assets/imgs/whatsapp.svg",1,"nav-menu__social__icon"]],template:function(t,l){t&1&&(i(0,"button",0),m("click",function(){return l.close()}),r(),a(1,"svg",1),o(),c(),i(2,"nav",2)(3,"a",3),m("click",function(){return l.close()}),f(4," In\xEDcio "),o(),i(5,"a",4),m("click",function(){return l.close()}),f(6," Nosso card\xE1pio "),o(),i(7,"a",5),m("click",function(){return l.close()}),f(8," Sobre n\xF3s "),o(),i(9,"a",6),m("click",function(){return l.close()}),f(10," Mais informa\xE7\xF5es "),o()(),i(11,"div",7)(12,"a",8),r(),a(13,"svg",9),o(),c(),i(14,"a",10),r(),a(15,"svg",11),o(),c(),i(16,"a",12),r(),a(17,"svg",13),o()())},dependencies:[u,h],styles:['[_nghost-%COMP%]{flex-direction:column;position:fixed;z-index:2;inset:0;-webkit-backdrop-filter:blur(.25rem) brightness(.5);backdrop-filter:blur(.25rem) brightness(.5);background:radial-gradient(circle,#00000080,#0000);display:flex;align-items:center;justify-content:center;padding:1.5rem;opacity:0;visibility:hidden;transition:all .25s ease-in-out}.active[_nghost-%COMP%]{opacity:1;visibility:visible}[_nghost-%COMP%], .nav-menu__nav[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:5rem}.nav-menu__button[_ngcontent-%COMP%]{width:4rem;aspect-ratio:1/1;cursor:pointer;border-radius:2rem;padding:1rem;color:#fff;background-color:#ffffff40;transition:background-color .25s ease-in-out}.nav-menu__button[_ngcontent-%COMP%]:hover{background-color:#ffffff80}.nav-menu__button__icon[_ngcontent-%COMP%]{width:100%;height:100%}.nav-menu__nav[_ngcontent-%COMP%]{gap:3rem}.nav-menu__link[_ngcontent-%COMP%]{position:relative;font-size:2rem;font-weight:300;color:#fff}.nav-menu__link[_ngcontent-%COMP%]:before{content:"";position:absolute;bottom:-.5rem;left:0;width:100%;height:2px;background-color:#fff;transform-origin:right;transform:scaleX(0);transition:transform .25s ease-in-out}.nav-menu__link[_ngcontent-%COMP%]:hover:before{transform-origin:left;transform:scaleX(1)}.nav-menu__social[_ngcontent-%COMP%]{display:flex;align-items:center;gap:2rem}.nav-menu__social__link[_ngcontent-%COMP%]{display:block;height:2.5rem;aspect-ratio:1/1;color:#fff;transition:color .25s ease-in-out}.nav-menu__social__link[_ngcontent-%COMP%]:hover{color:#8eb427}.nav-menu__social__icon[_ngcontent-%COMP%]{width:100%;border-radius:1rem}']});let n=e;return n})();var G=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["app-header"]],standalone:!0,features:[_],decls:15,vars:0,consts:[[1,"header"],[1,"header__social"],["routerLink","/","title","Instagram",1,"header__social__link"],["appSvgInline","assets/imgs/instagram.svg",1,"header__social__icon"],["routerLink","/","title","Facebook",1,"header__social__link"],["appSvgInline","assets/imgs/facebook.svg",1,"header__social__icon"],["routerLink","/","title","Whatsapp",1,"header__social__link"],["appSvgInline","assets/imgs/whatsapp.svg",1,"header__social__icon"],[1,"header__logo"],["routerLink","/","title","P\xE1gina inicial",1,"header__logo__link"],["src","assets/imgs/logo.svg","alt","Prati Cozinha Contempor\xE2nea",1,"header__logo__img"],["type","button","title","Menu",1,"header__button",3,"click"],["appSvgInline","assets/imgs/menu.svg",1,"header__button__icon"],["navMenu",""]],template:function(t,l){if(t&1){let p=P();i(0,"header",0)(1,"div",1)(2,"a",2),r(),a(3,"svg",3),o(),c(),i(4,"a",4),r(),a(5,"svg",5),o(),c(),i(6,"a",6),r(),a(7,"svg",7),o()(),c(),i(8,"h1",8)(9,"a",9),a(10,"img",10),o()(),i(11,"button",11),m("click",function(){M(p);let j=O(14);return C(j.open())}),r(),a(12,"svg",12),o()(),c(),a(13,"app-nav-menu",null,13)}},dependencies:[h,u,N],styles:[".header[_ngcontent-%COMP%]{position:fixed;z-index:2;inset:0 0 auto;display:flex;align-items:center;justify-content:space-between;height:5rem;padding-top:1rem!important;padding-bottom:1rem!important;padding:1.5rem;background-color:#fff}@media screen and (min-width: 600px){.header[_ngcontent-%COMP%]{padding:2rem}}@media screen and (min-width: 900px){.header[_ngcontent-%COMP%]{padding:2.5rem}}@media screen and (min-width: 1200px){.header[_ngcontent-%COMP%]{padding:3rem}}@media screen and (min-width: 1200px){.header[_ngcontent-%COMP%]{padding:3.5rem}}@media screen and (min-width: 1500px){.header[_ngcontent-%COMP%]{padding:4rem}}@media screen and (min-width: 900px){.header[_ngcontent-%COMP%]{height:6rem}}.header__social[_ngcontent-%COMP%]{display:none;align-items:center;gap:1rem}@media screen and (min-width: 900px){.header__social[_ngcontent-%COMP%]{display:flex}}.header__social__link[_ngcontent-%COMP%]{display:block;height:2rem;aspect-ratio:1/1;color:#d67e24;transition:color .25s ease-in-out}.header__social__link[_ngcontent-%COMP%]:hover{color:#b82a2c}.header__social__icon[_ngcontent-%COMP%]{width:100%;border-radius:1rem}.header__logo[_ngcontent-%COMP%]{height:100%}.header__logo__link[_ngcontent-%COMP%]{display:block;height:100%}.header__logo__img[_ngcontent-%COMP%]{height:100%}.header__button[_ngcontent-%COMP%]{height:3rem;aspect-ratio:1/1;cursor:pointer;color:#8eb427;transition:color .25s ease-in-out}@media screen and (min-width: 900px){.header__button[_ngcontent-%COMP%]{margin-left:5.5rem}}.header__button[_ngcontent-%COMP%]:hover{color:#26443f}.header__button__icon[_ngcontent-%COMP%]{width:100%;height:100%}"]});let n=e;return n})();var R=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["app-footer"]],standalone:!0,features:[_],decls:9,vars:0,consts:[[1,"footer"],["appSvgInline","assets/imgs/logo-mono.svg",1,"footer__logo"],[1,"footer__social"],["routerLink","/","title","Instagram",1,"footer__social__link"],["appSvgInline","assets/imgs/instagram.svg",1,"footer__social__icon"],["routerLink","/","title","Facebook",1,"footer__social__link"],["appSvgInline","assets/imgs/facebook.svg",1,"footer__social__icon"],["routerLink","/","title","Whatsapp",1,"footer__social__link"],["appSvgInline","assets/imgs/whatsapp.svg",1,"footer__social__icon"]],template:function(t,l){t&1&&(i(0,"footer",0),r(),a(1,"svg",1),c(),i(2,"div",2)(3,"a",3),r(),a(4,"svg",4),o(),c(),i(5,"a",5),r(),a(6,"svg",6),o(),c(),i(7,"a",7),r(),a(8,"svg",8),o()()())},dependencies:[u],styles:[".footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;flex-direction:column;gap:2rem;color:#fff;background-color:#26443f;padding-top:2rem!important;padding-bottom:2rem!important;padding:1.5rem}@media screen and (min-width: 600px){.footer[_ngcontent-%COMP%]{padding:2rem}}@media screen and (min-width: 900px){.footer[_ngcontent-%COMP%]{padding:2.5rem}}@media screen and (min-width: 1200px){.footer[_ngcontent-%COMP%]{padding:3rem}}@media screen and (min-width: 1200px){.footer[_ngcontent-%COMP%]{padding:3.5rem}}@media screen and (min-width: 1500px){.footer[_ngcontent-%COMP%]{padding:4rem}}@media screen and (min-width: 900px){.footer[_ngcontent-%COMP%]{flex-direction:row}}.footer__logo[_ngcontent-%COMP%]{display:block;width:4rem}@media screen and (min-width: 900px){.footer__logo[_ngcontent-%COMP%]{margin:0}}.footer__social[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem}.footer__social__link[_ngcontent-%COMP%]{display:block;height:2rem;aspect-ratio:1/1;color:#fff;transition:color .25s ease-in-out}.footer__social__link[_ngcontent-%COMP%]:hover{color:#ebbd53}.footer__social__icon[_ngcontent-%COMP%]{width:100%;border-radius:1rem}"]});let n=e;return n})();var z=(()=>{let e=class e{constructor(s){this.viewport=s,s.setOffset([0,100])}};e.\u0275fac=function(t){return new(t||e)(b(L))},e.\u0275cmp=d({type:e,selectors:[["app-root"]],standalone:!0,features:[_],decls:3,vars:0,template:function(t,l){t&1&&a(0,"app-header")(1,"router-outlet")(2,"app-footer")},dependencies:[H,G,R],styles:["[_nghost-%COMP%]{min-height:100vh;overflow-x:hidden}"]});let n=e;return n})();E(z,F).catch(n=>console.error(n));
