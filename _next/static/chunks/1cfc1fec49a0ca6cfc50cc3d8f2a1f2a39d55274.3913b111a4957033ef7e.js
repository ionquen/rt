(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"20a2":function(e,t,n){e.exports=n("nOHt")},"8lYe":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("nKUr"),o=(n("q1tI"),n("rM8e")),i=n.n(o),c=n("YFqc"),a=n.n(c);n("Jq4i");function s(e){var t=e.links,n=e.lang,o=(new Date).getFullYear();return Object(r.jsxs)("footer",{className:i.a.block,children:[Object(r.jsx)("div",{children:t.map((function(e){var t=e.link,o=e.short;return Object(r.jsx)(a.a,{href:"/"+n+"/"+("/"===t?"":t),children:Object(r.jsx)("a",{rel:"nofollow noopener noreferrer",children:o})},t)}))}),Object(r.jsxs)("div",{children:["\xa9 ",o," regtool.net "]})]})}},"8oxB":function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"===typeof clearTimeout?clearTimeout:c}catch(e){r=c}}();var s,u=[],l=!1,f=-1;function v(){l&&s&&(l=!1,s.length?u=s.concat(u):f=-1,u.length&&h())}function h(){if(!l){var e=a(v);l=!0;for(var t=u.length;t;){for(s=u,u=[];++f<t;)s&&s[f].run();f=-1,t=u.length}s=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function d(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||l||a(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},BsWD:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("a3WO");function o(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},FIap:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("nKUr"),o=n("YFqc"),i=n.n(o),c=(n("20a2"),n("q1tI")),a=n("hUQp"),s=n.n(a),u=(n("tpqs"),n("Jq4i"));function l(e){var t=e.links,n=e.lang,o=e.slug,a=Object(c.useState)(!0),l=a[0],f=a[1];return Object(c.useEffect)((function(){var e=window.matchMedia("(max-width: 800px)");function t(e){f(e.matches)}return e.addEventListener("change",t),function(){return e.removeEventListener("change",t)}}),[]),Object(c.useEffect)((function(){f(!0)}),[o]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("nav",{className:"".concat(s.a.block," ").concat(l?s.a.hide:""),children:[Object(r.jsx)(i.a,{href:"/"+n+"/",children:Object(r.jsxs)("a",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(u.a,{name:"regtool.svg"})}),Object(r.jsx)("div",{children:Object(r.jsx)("span",{children:"RegTool.net"})})]})}),t.map((function(e){return Object(r.jsx)(i.a,{href:"/"+n+"/"+("/"===e.link?"":e.link),children:Object(r.jsxs)("a",{className:"".concat(o===e.slug?s.a.openedPage:""),children:[Object(r.jsx)("div",{children:Object(r.jsx)(u.a,{name:e.image})}),Object(r.jsx)("div",{children:Object(r.jsx)("span",{children:e.short})})]})},e.link)}))]}),Object(r.jsx)("button",{onClick:function(){f((function(e){return!e}))},children:Object(r.jsx)(u.a,{name:"var/".concat(l?"menu":"x",".svg")})})]})}},Jq4i:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("rePB"),o=n("nKUr"),i=n("o0o1"),c=n.n(i);function a(e,t,n,r,o,i,c){try{var a=e[i](c),s=a.value}catch(u){return void n(u)}a.done?t(s):Promise.resolve(s).then(r,o)}var s=n("BsWD");function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}(e,t)||Object(s.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=n("q1tI"),v=n.n(f);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){var t=e.name,i=l(e,["name"]),s=v.a.useRef(null),f=u(v.a.useState(!1),2),p=f[0],d=f[1];if(v.a.useEffect((function(){d(!0),function(){var e,r=(e=c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n("qXYU")("./".concat(t));case 3:s.current=e.sent.default,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:return e.prev=9,d(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){a(i,r,o,c,s,"next",e)}function s(e){a(i,r,o,c,s,"throw",e)}c(void 0)}))});return function(){return r.apply(this,arguments)}}()()}),[t]),!p&&s.current){var b=s.current;return Object(o.jsx)(b,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},i))}return null}},"QDA/":function(e,t,n){e.exports={article:"_1vG8I",share:"_1sZiy",facebook:"_16qLy",twitter:"_1Heif",whatsapp:"_25Lss",tg:"_2eMdv",vk:"zzCUA",recomendation:"_1A5wv"}},YFqc:function(e,t,n){e.exports=n("cTJO")},a3WO:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var i=o(n("q1tI")),c=n("elyg"),a=n("nOHt"),s=n("vNVm"),u={};function l(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,a.useRouter)(),o=n&&n.pathname||"/",f=i.default.useMemo((function(){var t=(0,c.resolveHref)(o,e.href,!0),n=r(t,2),i=n[0],a=n[1];return{href:i,as:e.as?(0,c.resolveHref)(o,e.as):a||i}}),[o,e.href,e.as]),v=f.href,h=f.as,p=e.children,d=e.replace,b=e.shallow,g=e.scroll,j=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var m=i.Children.only(p),O=m&&"object"===typeof m&&m.ref,y=(0,s.useIntersection)({rootMargin:"200px"}),w=r(y,2),x=w[0],k=w[1],T=i.default.useCallback((function(e){x(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,x]);(0,i.useEffect)((function(){var e=k&&t&&(0,c.isLocalURL)(v),r="undefined"!==typeof j?j:n&&n.locale,o=u[v+"%"+h+(r?"%"+r:"")];e&&!o&&l(n,v,h,{locale:r})}),[h,v,k,j,t,n]);var E={ref:T,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,a,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:a}))}(e,n,v,h,d,b,g,j)},onMouseEnter:function(e){(0,c.isLocalURL)(v)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),l(n,v,h,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var L="undefined"!==typeof j?j:n&&n.locale,A=n&&n.isLocaleDomain&&(0,c.getDomainLocale)(h,L,n&&n.locales,n&&n.domainLocales);E.href=A||(0,c.addBasePath)((0,c.addLocale)(h,L,n&&n.defaultLocale))}return i.default.cloneElement(m,E)};t.default=f},hUQp:function(e,t,n){e.exports={block:"_3zaSQ",hide:"_2Ll3E",openedPage:"_18GO0"}},"k/zb":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("nKUr"),o=n("YFqc"),i=n.n(o),c=(n("tpqs"),n("20a2"),n("QDA/")),a=n.n(c);function s(e){var t=e.linksNews,n=e.linksArticles,o=e.lang;return Object(r.jsxs)("aside",{className:a.a.recomendation,children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:"\u041d\u0435\u0434\u0430\u0432\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e"}),Object(r.jsx)("div",{children:t.map((function(e){var t=e.link,n=e.title;return Object(r.jsx)(i.a,{href:"/"+o+"/"+("/"===t?"":t),children:Object(r.jsxs)("a",{children:[" ",n," "]})},t)}))})]}),null===n?null:Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:"\u0412\u0430\u043c \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e"}),Object(r.jsx)("div",{children:n.map((function(e){var t=e.link,n=e.title;return Object(r.jsx)(i.a,{href:"/"+o+"/"+("/"===t?"":t),children:Object(r.jsxs)("a",{children:[" ",n," "]})},t)}))})]})]})}},qXYU:function(e,t,n){var r={"./regtool.svg":["+a/H",11],"./social/facebook.svg":["K6eW",12],"./social/tg.svg":["lL0e",13],"./social/twitter.svg":["/HJ9",14],"./social/vk.svg":["7e3/",15],"./social/whatsapp.svg":["o0c6",16],"./tools/alarm.svg":["NL42",17],"./tools/calc.svg":["oyK6",18],"./tools/stopwatch.svg":["eTkq",19],"./tools/timer.svg":["U5fU",20],"./tools/transfer.svg":["baTj",21],"./var/clip.svg":["zhxT",22],"./var/file.svg":["blel",23],"./var/fullscreen.svg":["aCau",24],"./var/fullscreen_exit.svg":["Qnez",25],"./var/menu.svg":["jIiO",26],"./var/save.svg":["00s5",27],"./var/send.svg":["Q2z7",28],"./var/share.svg":["w7T5",29],"./var/shutter_speed.svg":["xbV/",30],"./var/timelapse.svg":["eCWO",31],"./var/warning.svg":["dYUh",32],"./var/x.svg":["ST1h",33]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n.t(o,7)}))}o.keys=function(){return Object.keys(r)},o.id="qXYU",e.exports=o},rM8e:function(e,t,n){e.exports={block:"Wo1NF"}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},tpqs:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var o=e[r];"."===o?e.splice(r,1):".."===o?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var c=i>=0?arguments[i]:e.cwd();if("string"!==typeof c)throw new TypeError("Arguments to path.resolve must be strings");c&&(t=c+"/"+t,o="/"===c.charAt(0))}return(o?"/":"")+(t=n(r(t.split("/"),(function(e){return!!e})),!o).join("/"))||"."},t.normalize=function(e){var i=t.isAbsolute(e),c="/"===o(e,-1);return(e=n(r(e.split("/"),(function(e){return!!e})),!i).join("/"))||i||(e="."),e&&c&&(e+="/"),(i?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var o=r(e.split("/")),i=r(n.split("/")),c=Math.min(o.length,i.length),a=c,s=0;s<c;s++)if(o[s]!==i[s]){a=s;break}var u=[];for(s=a;s<o.length;s++)u.push("..");return(u=u.concat(i.slice(a))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,o=!0,i=e.length-1;i>=1;--i)if(47===(t=e.charCodeAt(i))){if(!o){r=i;break}}else o=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=function(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,o=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!o){n=t+1;break}}else-1===r&&(o=!1,r=t+1);return-1===r?"":e.slice(n,r)}(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,o=!0,i=0,c=e.length-1;c>=0;--c){var a=e.charCodeAt(c);if(47!==a)-1===r&&(o=!1,r=c+1),46===a?-1===t?t=c:1!==i&&(i=1):-1!==t&&(i=-1);else if(!o){n=c+1;break}}return-1===t||-1===r||0===i||1===i&&t===r-1&&t===n+1?"":e.slice(t,r)};var o="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("8oxB"))},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,s=(0,o.useRef)(),u=(0,o.useState)(!1),l=r(u,2),f=l[0],v=l[1],h=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,c=r.elements;return c.set(e,t),i.observe(e),function(){c.delete(e),i.unobserve(e),0===c.size&&(i.disconnect(),a.delete(o))}}(e,(function(e){return e&&v(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,i.requestIdleCallback)((function(){return v(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[f]),[h,f]};var o=n("q1tI"),i=n("0G5g"),c="undefined"!==typeof IntersectionObserver;var a=new Map}}]);