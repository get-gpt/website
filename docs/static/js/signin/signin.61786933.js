(function(e){function t(t){for(var r,u,i=t[0],c=t[1],s=t[2],f=0,h=[];f<i.length;f++)u=i[f],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&h.push(a[u][0]),a[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(h.length)h.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={signin:0},o=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=c;o.push([3,"chunk-common"]),n()})({"04b0":function(e,t,n){"use strict";n("f2c7")},"0d3b":function(e,t,n){var r=n("d039"),a=n("b622"),o=n("c430"),u=a("iterator");e.exports=!r((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,n="";return e.pathname="c%20d",t.forEach((function(e,r){t["delete"]("b"),n+=r+e})),o&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[u]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host}))},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},3:function(e,t,n){e.exports=n("f105")},5352:function(e,t,n){"use strict";n("e260");var r=n("23e7"),a=n("da84"),o=n("d066"),u=n("c65b"),i=n("e330"),c=n("0d3b"),s=n("6eeb"),l=n("e2cc"),f=n("d44e"),h=n("9ed3"),d=n("69f3"),p=n("19aa"),b=n("1626"),v=n("1a2d"),g=n("0366"),O=n("f5df"),m=n("825a"),y=n("861d"),j=n("577e"),w=n("7c73"),k=n("5c6c"),x=n("9a1f"),R=n("35a1"),S=n("d6d6"),U=n("b622"),F=n("addb"),L=U("iterator"),P="URLSearchParams",_=P+"Iterator",I=d.set,E=d.getterFor(P),M=d.getterFor(_),Z=o("fetch"),q=o("Request"),T=o("Headers"),A=q&&q.prototype,J=T&&T.prototype,N=a.RegExp,C=a.TypeError,G=a.decodeURIComponent,K=a.encodeURIComponent,Q=i("".charAt),z=i([].join),H=i([].push),B=i("".replace),D=i([].shift),V=i([].splice),W=i("".split),X=i("".slice),Y=/\+/g,$=Array(4),ee=function(e){return $[e-1]||($[e-1]=N("((?:%[\\da-f]{2}){"+e+"})","gi"))},te=function(e){try{return G(e)}catch(t){return e}},ne=function(e){var t=B(e,Y," "),n=4;try{return G(t)}catch(r){while(n)t=B(t,ee(n--),te);return t}},re=/[!'()~]|%20/g,ae={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},oe=function(e){return ae[e]},ue=function(e){return B(K(e),re,oe)},ie=h((function(e,t){I(this,{type:_,iterator:x(E(e).entries),kind:t})}),"Iterator",(function(){var e=M(this),t=e.kind,n=e.iterator.next(),r=n.value;return n.done||(n.value="keys"===t?r.key:"values"===t?r.value:[r.key,r.value]),n}),!0),ce=function(e){this.entries=[],this.url=null,void 0!==e&&(y(e)?this.parseObject(e):this.parseQuery("string"==typeof e?"?"===Q(e,0)?X(e,1):e:j(e)))};ce.prototype={type:P,bindURL:function(e){this.url=e,this.update()},parseObject:function(e){var t,n,r,a,o,i,c,s=R(e);if(s){t=x(e,s),n=t.next;while(!(r=u(n,t)).done){if(a=x(m(r.value)),o=a.next,(i=u(o,a)).done||(c=u(o,a)).done||!u(o,a).done)throw C("Expected sequence with length 2");H(this.entries,{key:j(i.value),value:j(c.value)})}}else for(var l in e)v(e,l)&&H(this.entries,{key:l,value:j(e[l])})},parseQuery:function(e){if(e){var t,n,r=W(e,"&"),a=0;while(a<r.length)t=r[a++],t.length&&(n=W(t,"="),H(this.entries,{key:ne(D(n)),value:ne(z(n,"="))}))}},serialize:function(){var e,t=this.entries,n=[],r=0;while(r<t.length)e=t[r++],H(n,ue(e.key)+"="+ue(e.value));return z(n,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var se=function(){p(this,le);var e=arguments.length>0?arguments[0]:void 0;I(this,new ce(e))},le=se.prototype;if(l(le,{append:function(e,t){S(arguments.length,2);var n=E(this);H(n.entries,{key:j(e),value:j(t)}),n.updateURL()},delete:function(e){S(arguments.length,1);var t=E(this),n=t.entries,r=j(e),a=0;while(a<n.length)n[a].key===r?V(n,a,1):a++;t.updateURL()},get:function(e){S(arguments.length,1);for(var t=E(this).entries,n=j(e),r=0;r<t.length;r++)if(t[r].key===n)return t[r].value;return null},getAll:function(e){S(arguments.length,1);for(var t=E(this).entries,n=j(e),r=[],a=0;a<t.length;a++)t[a].key===n&&H(r,t[a].value);return r},has:function(e){S(arguments.length,1);var t=E(this).entries,n=j(e),r=0;while(r<t.length)if(t[r++].key===n)return!0;return!1},set:function(e,t){S(arguments.length,1);for(var n,r=E(this),a=r.entries,o=!1,u=j(e),i=j(t),c=0;c<a.length;c++)n=a[c],n.key===u&&(o?V(a,c--,1):(o=!0,n.value=i));o||H(a,{key:u,value:i}),r.updateURL()},sort:function(){var e=E(this);F(e.entries,(function(e,t){return e.key>t.key?1:-1})),e.updateURL()},forEach:function(e){var t,n=E(this).entries,r=g(e,arguments.length>1?arguments[1]:void 0),a=0;while(a<n.length)t=n[a++],r(t.value,t.key,this)},keys:function(){return new ie(this,"keys")},values:function(){return new ie(this,"values")},entries:function(){return new ie(this,"entries")}},{enumerable:!0}),s(le,L,le.entries,{name:"entries"}),s(le,"toString",(function(){return E(this).serialize()}),{enumerable:!0}),f(se,P),r({global:!0,forced:!c},{URLSearchParams:se}),!c&&b(T)){var fe=i(J.has),he=i(J.set),de=function(e){if(y(e)){var t,n=e.body;if(O(n)===P)return t=e.headers?new T(e.headers):new T,fe(t,"content-type")||he(t,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),w(e,{body:k(0,j(n)),headers:k(0,t)})}return e};if(b(Z)&&r({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return Z(e,arguments.length>1?de(arguments[1]):{})}}),b(q)){var pe=function(e){return p(this,A),new q(e,arguments.length>1?de(arguments[1]):{})};A.constructor=pe,pe.prototype=A,r({global:!0,forced:!0},{Request:pe})}}e.exports={URLSearchParams:se,getState:E}},"841c":function(e,t,n){"use strict";var r=n("c65b"),a=n("d784"),o=n("825a"),u=n("1d80"),i=n("129f"),c=n("577e"),s=n("dc4a"),l=n("14c3");a("search",(function(e,t,n){return[function(t){var n=u(this),a=void 0==t?void 0:s(t,e);return a?r(a,t,n):new RegExp(t)[e](c(n))},function(e){var r=o(this),a=c(e),u=n(t,r,a);if(u.done)return u.value;var s=r.lastIndex;i(s,0)||(r.lastIndex=0);var f=l(r,a);return i(r.lastIndex,s)||(r.lastIndex=s),null===f?-1:f.index}]}))},9861:function(e,t,n){n("5352")},addb:function(e,t,n){var r=n("4dae"),a=Math.floor,o=function(e,t){var n=e.length,c=a(n/2);return n<8?u(e,t):i(e,o(r(e,0,c),t),o(r(e,c),t),t)},u=function(e,t){var n,r,a=e.length,o=1;while(o<a){r=o,n=e[o];while(r&&t(e[r-1],n)>0)e[r]=e[--r];r!==o++&&(e[r]=n)}return e},i=function(e,t,n,r){var a=t.length,o=n.length,u=0,i=0;while(u<a||i<o)e[u+i]=u<a&&i<o?r(t[u],n[i])<=0?t[u++]:n[i++]:u<a?t[u++]:n[i++];return e};e.exports=o},f105:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=function(e){return Object(r["I"])("data-v-b4b36a0c"),e=e(),Object(r["G"])(),e},o=Object(r["n"])("Sign in"),u=Object(r["n"])(" Sign in "),i=a((function(){return Object(r["m"])("div",{class:"text-box"},[Object(r["m"])("a",{href:"/reset_pw.html",class:"turbo-link"},"Forget your password?"),Object(r["m"])("div",{class:"newer-box"},[Object(r["m"])("span",null,"New to GetChatGPT?"),Object(r["m"])("a",{href:"/signup.html",class:"turbo-link ml5"},"Sign up")])],-1)}));function c(e,t,n,a,c,s){var l=Object(r["O"])("layout-header"),f=Object(r["O"])("a-alert"),h=Object(r["O"])("a-input"),d=Object(r["O"])("a-form-item"),p=Object(r["O"])("a-input-password"),b=Object(r["O"])("a-button"),v=Object(r["O"])("a-form"),g=Object(r["O"])("account"),O=Object(r["O"])("a-layout-content");return Object(r["F"])(),Object(r["l"])(r["b"],null,[Object(r["o"])(l),Object(r["o"])(O,{class:"content"},{default:Object(r["Z"])((function(){return[Object(r["o"])(g,null,{title:Object(r["Z"])((function(){return[o]})),main:Object(r["Z"])((function(){return[Object(r["o"])(v,{layout:"vertical",model:a.formState,class:"form",onFinish:a.onFinished,onFinishFailed:a.onFinishFailed},{default:Object(r["Z"])((function(){return[a.errorMsg?(Object(r["F"])(),Object(r["j"])(f,{key:0,message:a.errorMsg,type:"error"},null,8,["message"])):Object(r["k"])("",!0),Object(r["o"])(d,{label:"Email address",class:"mt10",name:"username",rules:[{required:!0,message:"Please input Email address"}]},{default:Object(r["Z"])((function(){return[Object(r["o"])(h,{value:a.formState.username,"onUpdate:value":t[0]||(t[0]=function(e){return a.formState.username=e}),class:"turbo-input"},null,8,["value"])]})),_:1}),Object(r["o"])(d,{label:"Password",name:"password",rules:[{required:!0,message:"Please input password"}]},{default:Object(r["Z"])((function(){return[Object(r["o"])(p,{value:a.formState.password,"onUpdate:value":t[1]||(t[1]=function(e){return a.formState.password=e}),class:"turbo-input"},null,8,["value"])]})),_:1}),Object(r["o"])(d,{class:"mb15"},{default:Object(r["Z"])((function(){return[Object(r["o"])(b,{type:"primary","html-type":"submit",class:"turbo-btn turbo-btn-big",block:"",loading:a.loading},{default:Object(r["Z"])((function(){return[u]})),_:1},8,["loading"])]})),_:1})]})),_:1},8,["model","onFinish","onFinishFailed"]),i]})),_:1})]})),_:1})],64)}var s=n("5530"),l=n("1da1"),f=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("9861"),n("ac1f"),n("841c"),n("5d2d")),h=n("fa7d"),d=n("96c7"),p=n("4c16"),b=n("7dfd"),v=n("5a50"),g={name:"Index",components:{LayoutHeader:d["a"],Account:p["a"]},setup:function(){var e=Object(r["K"])(""),t=Object(r["K"])(!1),n=Object(r["J"])({username:"",password:""});function a(e){return o.apply(this,arguments)}function o(){return o=Object(l["a"])(regeneratorRuntime.mark((function e(n){var r,a,o,u,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.value=!0,e.next=3,Object(b["d"])(n.username,n.password).catch((function(){}));case 3:if(r=e.sent,t.value=!1,r){e.next=7;break}return e.abrupt("return");case 7:a=r.token,o=Object(s["a"])({},r),delete o.token,f["a"].set("TOKEN",a,v["c"]),f["a"].set("USERINFO",o,v["c"]),u=null,Object(h["e"])(f["a"].get("subscription_id"))&&(u="/subscriptions.html"),i=new URLSearchParams(location.search),location.href=i.get("redirect_url")||u||"/user.html";case 16:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}function u(){}return{errorMsg:e,formState:n,onFinished:a,onFinishFailed:u,loading:t}}},O=(n("04b0"),n("6b0d")),m=n.n(O);const y=m()(g,[["render",c],["__scopeId","data-v-b4b36a0c"]]);var j=y,w=n("495e"),k=(n("62fc"),Object(r["i"])(j));k.use(w["a"]).mount("#app")},f2c7:function(e,t,n){}});