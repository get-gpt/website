(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-496500ce"],{1127:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a=function(e){return Object(r["I"])("data-v-4081f3b6"),e=e(),Object(r["G"])(),e},c=Object(r["n"])("Set password"),i=a((function(){return Object(r["m"])("div",{class:"code-tip-title"},"Account",-1)})),o={class:"mail-text mb15"},u=Object(r["n"])("Continue"),l=a((function(){return Object(r["m"])("div",{class:"text-box"},[Object(r["m"])("div",{class:"newer-box"},[Object(r["m"])("span",null,"Already have an account?"),Object(r["m"])("a",{href:"/signin.html",class:"turbo-link ml5"},"Sign in")])],-1)})),s=a((function(){return Object(r["m"])("div",{class:"tip-text"},[Object(r["n"])(" By signing up, you accept our "),Object(r["m"])("a",{href:"/terms_of_service.html",class:"turbo-link"},"Terms of service"),Object(r["n"])(" and "),Object(r["m"])("a",{href:"/policy.html",class:"turbo-link"},"policy")],-1)}));function d(e,t,n,a,d,b){var f=Object(r["O"])("layout-header"),p=Object(r["O"])("a-input-password"),h=Object(r["O"])("a-form-item"),O=Object(r["O"])("a-button"),m=Object(r["O"])("a-form"),v=Object(r["O"])("account"),j=Object(r["O"])("a-layout-content"),g=Object(r["O"])("layout-footer");return Object(r["F"])(),Object(r["l"])(r["b"],null,[Object(r["o"])(f),Object(r["o"])(j,{class:"content"},{default:Object(r["Z"])((function(){return[Object(r["o"])(v,null,{title:Object(r["Z"])((function(){return[c]})),main:Object(r["Z"])((function(){return[Object(r["o"])(m,{layout:"vertical",model:a.formState,class:"form",onFinish:a.onFinished,onFinishFailed:a.onFinishFailed},{default:Object(r["Z"])((function(){return[i,Object(r["m"])("div",o,Object(r["R"])(a.email),1),Object(r["o"])(h,{label:"Password",name:"credential",rules:[{required:!0,message:"Please input password"},{validator:a.passwordValidator}]},{default:Object(r["Z"])((function(){return[Object(r["o"])(p,{value:a.formState.credential,"onUpdate:value":t[0]||(t[0]=function(e){return a.formState.credential=e}),class:"turbo-input"},null,8,["value"])]})),_:1},8,["rules"]),Object(r["o"])(h,{label:"Confirm password",name:"credential_repeated",rules:[{required:!0,message:"Please input confirm password"},{validator:a.repeatValidator}]},{default:Object(r["Z"])((function(){return[Object(r["o"])(p,{value:a.formState.credential_repeated,"onUpdate:value":t[1]||(t[1]=function(e){return a.formState.credential_repeated=e}),class:"turbo-input"},null,8,["value"])]})),_:1},8,["rules"]),Object(r["o"])(h,{class:"mb30"},{default:Object(r["Z"])((function(){return[Object(r["o"])(O,{type:"primary","html-type":"submit",class:"turbo-btn turbo-btn-big",block:""},{default:Object(r["Z"])((function(){return[u]})),_:1})]})),_:1})]})),_:1},8,["model","onFinish","onFinishFailed"]),l,s]})),_:1})]})),_:1}),Object(r["o"])(g)],64)}var b=n("5530"),f=n("1da1"),p=(n("96cf"),n("ac1f"),n("1276"),n("d9e2"),n("5d2d")),h=n("b17e"),O=n("fa7d"),m=n("6c02"),v=n("7dfd"),j=n("96c7"),g=n("9ef1"),w=n("4c16"),x={name:"Code",components:{LayoutHeader:j["a"],LayoutFooter:g["a"],Account:w["a"]},setup:function(){var e=Object(m["c"])(),t=e.query,n=t.email,a=t.code,c=Object(r["J"])({credential:"",credential_repeated:""});function i(e){for(var t=e.split(""),n=!0,r=1;r<t.length-1;r++){var a=t[r-1].charCodeAt(),c=t[r].charCodeAt(),i=t[r+1].charCodeAt();i-c==1&&c-a==1&&(n=!1)}return!n}function o(e,t,n){return t?h["u"](/(\w)*(\w)\2{2}(\w)*/,t)?n(new Error("Password cannot be 3 or more consecutive same characters")):i(t)?n(new Error("Password cannot be 3 or more consecutive characters in sequence")):h["u"](/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,20})/,t)?void n():n(new Error("Password must be 8-20 characters and contain upper and lower case characters and numbers")):n()}function u(e,t,n){return Object(O["c"])(c.credential)?n():h["h"](t,c.credential)?void n():n(new Error("Confirm password is not equal to password"))}function l(e){return s.apply(this,arguments)}function s(){return s=Object(f["a"])(regeneratorRuntime.mark((function e(t){var r,c,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(v["f"])(n,t.credential,t.credential_repeated,a);case 2:r=e.sent,c=r.token,i=Object(b["a"])({},r),delete i.token,o=2592e6,p["a"].set("TOKEN",c,o),p["a"].set("USERINFO",i,o),location.href="/user.html";case 10:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function d(){}return{formState:c,onFinished:l,onFinishFailed:d,email:n,passwordValidator:o,repeatValidator:u}}},y=(n("f113"),n("6b0d")),_=n.n(y);const F=_()(x,[["render",d],["__scopeId","data-v-4081f3b6"]]);t["default"]=F},1276:function(e,t,n){"use strict";var r=n("2ba4"),a=n("c65b"),c=n("e330"),i=n("d784"),o=n("44e7"),u=n("825a"),l=n("1d80"),s=n("4840"),d=n("8aa5"),b=n("50c4"),f=n("577e"),p=n("dc4a"),h=n("4dae"),O=n("14c3"),m=n("9263"),v=n("9f7f"),j=n("d039"),g=v.UNSUPPORTED_Y,w=4294967295,x=Math.min,y=[].push,_=c(/./.exec),F=c(y),k=c("".slice),E=!j((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));i("split",(function(e,t,n){var c;return c="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var c=f(l(this)),i=void 0===n?w:n>>>0;if(0===i)return[];if(void 0===e)return[c];if(!o(e))return a(t,c,e,i);var u,s,d,b=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),O=0,v=new RegExp(e.source,p+"g");while(u=a(m,v,c)){if(s=v.lastIndex,s>O&&(F(b,k(c,O,u.index)),u.length>1&&u.index<c.length&&r(y,b,h(u,1)),d=u[0].length,O=s,b.length>=i))break;v.lastIndex===u.index&&v.lastIndex++}return O===c.length?!d&&_(v,"")||F(b,""):F(b,k(c,O)),b.length>i?h(b,0,i):b}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:a(t,this,e,n)}:t,[function(t,n){var r=l(this),i=void 0==t?void 0:p(t,e);return i?a(i,t,r,n):a(c,f(r),t,n)},function(e,r){var a=u(this),i=f(e),o=n(c,a,i,r,c!==t);if(o.done)return o.value;var l=s(a,RegExp),p=a.unicode,h=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(g?"g":"y"),m=new l(g?"^(?:"+a.source+")":a,h),v=void 0===r?w:r>>>0;if(0===v)return[];if(0===i.length)return null===O(m,i)?[i]:[];var j=0,y=0,_=[];while(y<i.length){m.lastIndex=g?0:y;var E,S=O(m,g?k(i,y):i);if(null===S||(E=x(b(m.lastIndex+(g?y:0)),i.length))===j)y=d(i,y,p);else{if(F(_,k(i,j,y)),_.length===v)return _;for(var C=1;C<=S.length-1;C++)if(F(_,S[C]),_.length===v)return _;y=j=E}}return F(_,k(i,j)),_}]}),!E,g)},"44e7":function(e,t,n){var r=n("861d"),a=n("c6b6"),c=n("b622"),i=c("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==a(e))}},"499d":function(e,t,n){},f113:function(e,t,n){"use strict";n("499d")}}]);