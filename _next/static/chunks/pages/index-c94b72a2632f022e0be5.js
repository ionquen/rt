_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"20a2":function(t,r,n){t.exports=n("nOHt")},"8oxB":function(t,r){var n,e,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(r){try{return n.call(null,t,0)}catch(r){return n.call(this,t,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(t){n=o}try{e="function"===typeof clearTimeout?clearTimeout:u}catch(t){e=u}}();var c,f=[],a=!1,l=-1;function h(){a&&c&&(a=!1,c.length?f=c.concat(f):l=-1,f.length&&p())}function p(){if(!a){var t=s(h);a=!0;for(var r=f.length;r;){for(c=f,f=[];++l<r;)c&&c[l].run();l=-1,r=f.length}c=null,a=!1,function(t){if(e===clearTimeout)return clearTimeout(t);if((e===u||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{e(t)}catch(r){try{return e.call(null,t)}catch(r){return e.call(this,t)}}}(t)}}function v(t,r){this.fun=t,this.array=r}function g(){}i.nextTick=function(t){var r=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)r[n-1]=arguments[n];f.push(new v(t,r)),1!==f.length||a||s(p)},v.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},RNiq:function(t,r,n){"use strict";n.r(r),n.d(r,"default",(function(){return u}));var e=n("nKUr"),i=n("20a2"),o=(n("tpqs"),n("q1tI"));function u(){var t=Object(i.useRouter)();return Object(o.useEffect)((function(){var r=/^.{2}/.exec(window.navigator.language)[0];history.pushState(r),t.reload()})),Object(e.jsx)("div",{})}},tpqs:function(t,r,n){(function(t){function n(t,r){for(var n=0,e=t.length-1;e>=0;e--){var i=t[e];"."===i?t.splice(e,1):".."===i?(t.splice(e,1),n++):n&&(t.splice(e,1),n--)}if(r)for(;n--;n)t.unshift("..");return t}function e(t,r){if(t.filter)return t.filter(r);for(var n=[],e=0;e<t.length;e++)r(t[e],e,t)&&n.push(t[e]);return n}r.resolve=function(){for(var r="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var u=o>=0?arguments[o]:t.cwd();if("string"!==typeof u)throw new TypeError("Arguments to path.resolve must be strings");u&&(r=u+"/"+r,i="/"===u.charAt(0))}return(i?"/":"")+(r=n(e(r.split("/"),(function(t){return!!t})),!i).join("/"))||"."},r.normalize=function(t){var o=r.isAbsolute(t),u="/"===i(t,-1);return(t=n(e(t.split("/"),(function(t){return!!t})),!o).join("/"))||o||(t="."),t&&u&&(t+="/"),(o?"/":"")+t},r.isAbsolute=function(t){return"/"===t.charAt(0)},r.join=function(){var t=Array.prototype.slice.call(arguments,0);return r.normalize(e(t,(function(t,r){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},r.relative=function(t,n){function e(t){for(var r=0;r<t.length&&""===t[r];r++);for(var n=t.length-1;n>=0&&""===t[n];n--);return r>n?[]:t.slice(r,n-r+1)}t=r.resolve(t).substr(1),n=r.resolve(n).substr(1);for(var i=e(t.split("/")),o=e(n.split("/")),u=Math.min(i.length,o.length),s=u,c=0;c<u;c++)if(i[c]!==o[c]){s=c;break}var f=[];for(c=s;c<i.length;c++)f.push("..");return(f=f.concat(o.slice(s))).join("/")},r.sep="/",r.delimiter=":",r.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var r=t.charCodeAt(0),n=47===r,e=-1,i=!0,o=t.length-1;o>=1;--o)if(47===(r=t.charCodeAt(o))){if(!i){e=o;break}}else i=!1;return-1===e?n?"/":".":n&&1===e?"/":t.slice(0,e)},r.basename=function(t,r){var n=function(t){"string"!==typeof t&&(t+="");var r,n=0,e=-1,i=!0;for(r=t.length-1;r>=0;--r)if(47===t.charCodeAt(r)){if(!i){n=r+1;break}}else-1===e&&(i=!1,e=r+1);return-1===e?"":t.slice(n,e)}(t);return r&&n.substr(-1*r.length)===r&&(n=n.substr(0,n.length-r.length)),n},r.extname=function(t){"string"!==typeof t&&(t+="");for(var r=-1,n=0,e=-1,i=!0,o=0,u=t.length-1;u>=0;--u){var s=t.charCodeAt(u);if(47!==s)-1===e&&(i=!1,e=u+1),46===s?-1===r?r=u:1!==o&&(o=1):-1!==r&&(o=-1);else if(!i){n=u+1;break}}return-1===r||-1===e||0===o||1===o&&r===e-1&&r===n+1?"":t.slice(r,e)};var i="b"==="ab".substr(-1)?function(t,r,n){return t.substr(r,n)}:function(t,r,n){return r<0&&(r=t.length+r),t.substr(r,n)}}).call(this,n("8oxB"))},vlRD:function(t,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1]]]);