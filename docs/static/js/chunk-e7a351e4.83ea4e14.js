(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e7a351e4"],{"4df4f":function(e,t,n){"use strict";n("efbe")},"903a":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a=function(e){return Object(c["J"])("data-v-5d11eab0"),e=e(),Object(c["H"])(),e},r={class:"code-tip"},o={class:"mail-text"},i={class:"resend-box mt20"},u={class:"resend-text"},s=Object(c["n"])(" Continue "),b=a((function(){return Object(c["m"])("div",{class:"text-box"},[Object(c["m"])("div",{class:"newer-box"},[Object(c["m"])("span",null,"Already have an account?"),Object(c["m"])("a",{href:"/signin.html",class:"turbo-link ml5"},"Sign in")])],-1)})),l=a((function(){return Object(c["m"])("div",{class:"tip-text"},[Object(c["n"])(" By signing up, you accept our "),Object(c["m"])("a",{href:"/terms_of_service.html",class:"turbo-link"},"Terms of service"),Object(c["n"])(" and "),Object(c["m"])("a",{href:"/policy.html",class:"turbo-link"},"policy")],-1)}));function d(e,t,n,a,d,f){var j=Object(c["P"])("layout-header"),O=Object(c["P"])("a-input"),m=Object(c["P"])("a-form-item"),p=Object(c["P"])("a-button"),h=Object(c["P"])("a-form"),v=Object(c["P"])("account"),y=Object(c["P"])("a-layout-content"),g=Object(c["P"])("layout-footer");return Object(c["G"])(),Object(c["l"])(c["b"],null,[Object(c["o"])(j),Object(c["o"])(y,{class:"content"},{default:Object(c["ab"])((function(){return[Object(c["o"])(v,null,{title:Object(c["ab"])((function(){return[Object(c["n"])(Object(c["S"])(e.$t("Verify Code")),1)]})),main:Object(c["ab"])((function(){return[Object(c["o"])(h,{layout:"vertical",model:a.formState,class:"form",onFinish:a.onFinished,onFinishFailed:a.onFinishFailed},{default:Object(c["ab"])((function(){return[Object(c["m"])("div",r,Object(c["S"])(e.$t("Enter the code we just sent to")),1),Object(c["m"])("div",o,Object(c["S"])(a.email),1),Object(c["m"])("div",i,[Object(c["m"])("div",u,Object(c["S"])(e.$t("Code will valid in 1 hour")),1),Object(c["m"])("div",{class:"resend-text turbo-link pointer",onClick:t[0]||(t[0]=function(){return a.sendCode&&a.sendCode.apply(a,arguments)})},Object(c["S"])(e.$t("Send code")),1)]),Object(c["o"])(m,{label:"verify code",name:"code",rules:[{required:!0,message:"Please input verify code"}]},{default:Object(c["ab"])((function(){return[Object(c["o"])(O,{value:a.formState.code,"onUpdate:value":t[1]||(t[1]=function(e){return a.formState.code=e}),class:"turbo-input"},null,8,["value"])]})),_:1}),Object(c["o"])(m,{class:"mb30"},{default:Object(c["ab"])((function(){return[Object(c["o"])(p,{type:"primary","html-type":"submit",class:"turbo-btn turbo-btn-big",block:"",loading:a.loading},{default:Object(c["ab"])((function(){return[s]})),_:1},8,["loading"])]})),_:1})]})),_:1},8,["model","onFinish","onFinishFailed"]),b,l]})),_:1})]})),_:1}),Object(c["o"])(g)],64)}n("368b");var f=n("56cd"),j=n("1da1"),O=(n("96cf"),n("6c02")),m=n("7dfd"),p=n("96c7"),h=n("9ef1"),v=n("4c16"),y={name:"Code",components:{LayoutHeader:p["a"],LayoutFooter:h["a"],Account:v["a"]},setup:function(){var e=Object(c["L"])(!1),t=Object(O["c"])(),n=Object(O["d"])(),a=t.query.email,r=Object(c["K"])({code:""});function o(){return i.apply(this,arguments)}function i(){return i=Object(j["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(m["h"])(a);case 2:t=e.sent,t.sent?f["a"].success({message:"Success",description:"Send code success"}):f["a"].error({message:"Fail",description:"Send code fail"});case 4:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}function u(e){return s.apply(this,arguments)}function s(){return s=Object(j["a"])(regeneratorRuntime.mark((function t(c){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.value=!0,t.next=3,Object(m["i"])(a,c.code).catch((function(e){}));case 3:if(r=t.sent,e.value=!1,r.verified){t.next=7;break}return t.abrupt("return");case 7:n.push({name:"credential",query:{email:a,code:c.code}});case 8:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}function b(){}return{formState:r,onFinished:u,onFinishFailed:b,email:a,sendCode:o,loading:e}}},g=(n("4df4f"),n("6b0d")),w=n.n(g);const F=w()(y,[["render",d],["__scopeId","data-v-5d11eab0"]]);t["default"]=F},efbe:function(e,t,n){}}]);