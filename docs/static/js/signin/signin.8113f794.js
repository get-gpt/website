(function(e){function t(t){for(var r,u,i=t[0],c=t[1],s=t[2],l=0,d=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&d.push(a[u][0]),a[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={signin:0},o=[];function u(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-2d0b28a1":"d306d44a","chunk-2d0baadb":"9110721b","chunk-2d0bcde4":"bbb6940a","chunk-2d0bd5c2":"87469bc2","chunk-2d213b39":"27ec398b","chunk-3102cec8":"17bf02d6","chunk-a7da124e":"8e1ab612"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(e);var s=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=s;o.push([3,"chunk-common"]),n()})({"0d3b":function(e,t,n){var r=n("d039"),a=n("b622"),o=n("c430"),u=a("iterator");e.exports=!r((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,n="";return e.pathname="c%20d",t.forEach((function(e,r){t["delete"]("b"),n+=r+e})),o&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[u]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host}))},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},3:function(e,t,n){e.exports=n("f105")},5352:function(e,t,n){"use strict";n("e260");var r=n("23e7"),a=n("da84"),o=n("d066"),u=n("c65b"),i=n("e330"),c=n("0d3b"),s=n("6eeb"),l=n("e2cc"),f=n("d44e"),d=n("9ed3"),h=n("69f3"),b=n("19aa"),p=n("1626"),v=n("1a2d"),m=n("0366"),g=n("f5df"),y=n("825a"),O=n("861d"),j=n("577e"),w=n("7c73"),k=n("5c6c"),x=n("9a1f"),P=n("35a1"),S=n("d6d6"),R=n("b622"),L=n("addb"),U=R("iterator"),F="URLSearchParams",_=F+"Iterator",E=h.set,I=h.getterFor(F),M=h.getterFor(_),T=o("fetch"),q=o("Request"),$=o("Headers"),A=q&&q.prototype,C=$&&$.prototype,G=a.RegExp,N=a.TypeError,J=a.decodeURIComponent,Q=a.encodeURIComponent,z=i("".charAt),H=i([].join),K=i([].push),B=i("".replace),D=i([].shift),V=i([].splice),W=i("".split),X=i("".slice),Y=/\+/g,Z=Array(4),ee=function(e){return Z[e-1]||(Z[e-1]=G("((?:%[\\da-f]{2}){"+e+"})","gi"))},te=function(e){try{return J(e)}catch(t){return e}},ne=function(e){var t=B(e,Y," "),n=4;try{return J(t)}catch(r){while(n)t=B(t,ee(n--),te);return t}},re=/[!'()~]|%20/g,ae={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},oe=function(e){return ae[e]},ue=function(e){return B(Q(e),re,oe)},ie=d((function(e,t){E(this,{type:_,iterator:x(I(e).entries),kind:t})}),"Iterator",(function(){var e=M(this),t=e.kind,n=e.iterator.next(),r=n.value;return n.done||(n.value="keys"===t?r.key:"values"===t?r.value:[r.key,r.value]),n}),!0),ce=function(e){this.entries=[],this.url=null,void 0!==e&&(O(e)?this.parseObject(e):this.parseQuery("string"==typeof e?"?"===z(e,0)?X(e,1):e:j(e)))};ce.prototype={type:F,bindURL:function(e){this.url=e,this.update()},parseObject:function(e){var t,n,r,a,o,i,c,s=P(e);if(s){t=x(e,s),n=t.next;while(!(r=u(n,t)).done){if(a=x(y(r.value)),o=a.next,(i=u(o,a)).done||(c=u(o,a)).done||!u(o,a).done)throw N("Expected sequence with length 2");K(this.entries,{key:j(i.value),value:j(c.value)})}}else for(var l in e)v(e,l)&&K(this.entries,{key:l,value:j(e[l])})},parseQuery:function(e){if(e){var t,n,r=W(e,"&"),a=0;while(a<r.length)t=r[a++],t.length&&(n=W(t,"="),K(this.entries,{key:ne(D(n)),value:ne(H(n,"="))}))}},serialize:function(){var e,t=this.entries,n=[],r=0;while(r<t.length)e=t[r++],K(n,ue(e.key)+"="+ue(e.value));return H(n,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var se=function(){b(this,le);var e=arguments.length>0?arguments[0]:void 0;E(this,new ce(e))},le=se.prototype;if(l(le,{append:function(e,t){S(arguments.length,2);var n=I(this);K(n.entries,{key:j(e),value:j(t)}),n.updateURL()},delete:function(e){S(arguments.length,1);var t=I(this),n=t.entries,r=j(e),a=0;while(a<n.length)n[a].key===r?V(n,a,1):a++;t.updateURL()},get:function(e){S(arguments.length,1);for(var t=I(this).entries,n=j(e),r=0;r<t.length;r++)if(t[r].key===n)return t[r].value;return null},getAll:function(e){S(arguments.length,1);for(var t=I(this).entries,n=j(e),r=[],a=0;a<t.length;a++)t[a].key===n&&K(r,t[a].value);return r},has:function(e){S(arguments.length,1);var t=I(this).entries,n=j(e),r=0;while(r<t.length)if(t[r++].key===n)return!0;return!1},set:function(e,t){S(arguments.length,1);for(var n,r=I(this),a=r.entries,o=!1,u=j(e),i=j(t),c=0;c<a.length;c++)n=a[c],n.key===u&&(o?V(a,c--,1):(o=!0,n.value=i));o||K(a,{key:u,value:i}),r.updateURL()},sort:function(){var e=I(this);L(e.entries,(function(e,t){return e.key>t.key?1:-1})),e.updateURL()},forEach:function(e){var t,n=I(this).entries,r=m(e,arguments.length>1?arguments[1]:void 0),a=0;while(a<n.length)t=n[a++],r(t.value,t.key,this)},keys:function(){return new ie(this,"keys")},values:function(){return new ie(this,"values")},entries:function(){return new ie(this,"entries")}},{enumerable:!0}),s(le,U,le.entries,{name:"entries"}),s(le,"toString",(function(){return I(this).serialize()}),{enumerable:!0}),f(se,F),r({global:!0,forced:!c},{URLSearchParams:se}),!c&&p($)){var fe=i(C.has),de=i(C.set),he=function(e){if(O(e)){var t,n=e.body;if(g(n)===F)return t=e.headers?new $(e.headers):new $,fe(t,"content-type")||de(t,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),w(e,{body:k(0,j(n)),headers:k(0,t)})}return e};if(p(T)&&r({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return T(e,arguments.length>1?he(arguments[1]):{})}}),p(q)){var be=function(e){return b(this,A),new q(e,arguments.length>1?he(arguments[1]):{})};A.constructor=be,be.prototype=A,r({global:!0,forced:!0},{Request:be})}}e.exports={URLSearchParams:se,getState:I}},"6e97":function(e,t,n){"use strict";n("d6ec")},"841c":function(e,t,n){"use strict";var r=n("c65b"),a=n("d784"),o=n("825a"),u=n("1d80"),i=n("129f"),c=n("577e"),s=n("dc4a"),l=n("14c3");a("search",(function(e,t,n){return[function(t){var n=u(this),a=void 0==t?void 0:s(t,e);return a?r(a,t,n):new RegExp(t)[e](c(n))},function(e){var r=o(this),a=c(e),u=n(t,r,a);if(u.done)return u.value;var s=r.lastIndex;i(s,0)||(r.lastIndex=0);var f=l(r,a);return i(r.lastIndex,s)||(r.lastIndex=s),null===f?-1:f.index}]}))},9861:function(e,t,n){n("5352")},addb:function(e,t,n){var r=n("4dae"),a=Math.floor,o=function(e,t){var n=e.length,c=a(n/2);return n<8?u(e,t):i(e,o(r(e,0,c),t),o(r(e,c),t),t)},u=function(e,t){var n,r,a=e.length,o=1;while(o<a){r=o,n=e[o];while(r&&t(e[r-1],n)>0)e[r]=e[--r];r!==o++&&(e[r]=n)}return e},i=function(e,t,n,r){var a=t.length,o=n.length,u=0,i=0;while(u<a||i<o)e[u+i]=u<a&&i<o?r(t[u],n[i])<=0?t[u++]:n[i++]:u<a?t[u++]:n[i++];return e};e.exports=o},d6ec:function(e,t,n){},f105:function(e,t,n){"use strict";n.r(t);var r=n("1da1"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("96cf"),n("7a23")),o={class:"text-box"},u={href:"/reset_pw.html",class:"turbo-link"},i={class:"newer-box"},c={href:"/signup.html",class:"turbo-link ml5"};function s(e,t,n,r,s,l){var f=Object(a["P"])("layout-header"),d=Object(a["P"])("a-alert"),h=Object(a["P"])("a-input"),b=Object(a["P"])("a-form-item"),p=Object(a["P"])("a-input-password"),v=Object(a["P"])("a-button"),m=Object(a["P"])("a-form"),g=Object(a["P"])("account"),y=Object(a["P"])("a-layout-content"),O=Object(a["P"])("layout-footer");return Object(a["G"])(),Object(a["l"])(a["b"],null,[Object(a["o"])(f),Object(a["o"])(y,{class:"content"},{default:Object(a["ab"])((function(){return[Object(a["o"])(g,null,{title:Object(a["ab"])((function(){return[Object(a["n"])(Object(a["S"])(e.$t("Sign in")),1)]})),main:Object(a["ab"])((function(){return[Object(a["o"])(m,{layout:"vertical",model:r.formState,class:"form",onFinish:r.onFinished,onFinishFailed:r.onFinishFailed},{default:Object(a["ab"])((function(){return[r.errorMsg?(Object(a["G"])(),Object(a["j"])(d,{key:0,message:r.errorMsg,type:"error"},null,8,["message"])):Object(a["k"])("",!0),Object(a["o"])(b,{label:e.$t("Email address"),class:"mt10",name:"username",rules:[{required:!0,message:"Please input Email address"}]},{default:Object(a["ab"])((function(){return[Object(a["o"])(h,{value:r.formState.username,"onUpdate:value":t[0]||(t[0]=function(e){return r.formState.username=e}),class:"turbo-input"},null,8,["value"])]})),_:1},8,["label"]),Object(a["o"])(b,{label:e.$t("Password"),name:"password",rules:[{required:!0,message:"Please input password"}]},{default:Object(a["ab"])((function(){return[Object(a["o"])(p,{value:r.formState.password,"onUpdate:value":t[1]||(t[1]=function(e){return r.formState.password=e}),class:"turbo-input"},null,8,["value"])]})),_:1},8,["label"]),Object(a["o"])(b,{class:"mb15"},{default:Object(a["ab"])((function(){return[Object(a["o"])(v,{type:"primary","html-type":"submit",class:"turbo-btn turbo-btn-big",block:"",loading:r.loading},{default:Object(a["ab"])((function(){return[Object(a["n"])(Object(a["S"])(e.$t("Sign in")),1)]})),_:1},8,["loading"])]})),_:1})]})),_:1},8,["model","onFinish","onFinishFailed"]),Object(a["m"])("div",o,[Object(a["m"])("a",u,Object(a["S"])(e.$t("Forget your password?")),1),Object(a["m"])("div",i,[Object(a["m"])("span",null,Object(a["S"])(e.$t("New to Get ChatGPT?")),1),Object(a["m"])("a",c,Object(a["S"])(e.$t("Sign up")),1)])])]})),_:1})]})),_:1}),Object(a["o"])(O)],64)}var l=n("5530"),f=(n("d3b7"),n("3ca3"),n("ddb0"),n("9861"),n("ac1f"),n("841c"),n("5d2d")),d=n("fa7d"),h=n("96c7"),b=n("9ef1"),p=n("4c16"),v=n("7dfd"),m=n("5a50"),g={name:"Index",components:{LayoutHeader:h["a"],LayoutFooter:b["a"],Account:p["a"]},setup:function(){var e=Object(a["L"])(""),t=Object(a["L"])(!1),n=Object(a["K"])({username:"",password:""});function o(e){return u.apply(this,arguments)}function u(){return u=Object(r["a"])(regeneratorRuntime.mark((function e(n){var r,a,o,u,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.value=!0,e.next=3,Object(v["d"])(n.username,n.password).catch((function(){}));case 3:if(r=e.sent,t.value=!1,r){e.next=7;break}return e.abrupt("return");case 7:a=r.token,o=Object(l["a"])({},r),delete o.token,f["a"].set("TOKEN",a,m["c"]),f["a"].set("USERINFO",o,m["c"]),u=null,Object(d["e"])(f["a"].get("subscription_id"))&&(u="/subscriptions.html"),i=new URLSearchParams(location.search),location.href=i.get("redirect_url")||u||"/user.html";case 16:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function i(){}return{errorMsg:e,formState:n,onFinished:o,onFinishFailed:i,loading:t}}},y=(n("6e97"),n("6b0d")),O=n.n(y);const j=O()(g,[["render",s],["__scopeId","data-v-aa36254c"]]);var w=j,k=n("495e"),x=n("e8cd");n("62fc");function P(){return S.apply(this,arguments)}function S(){return S=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=Object(a["i"])(w),e.next=3,Object(x["a"])(t);case 3:t.use(k["a"]).mount("#app");case 4:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}P()}});