(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{kW24:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var c=n("nKUr"),r=n("KQm4"),i=n("rePB"),a=n("q1tI"),s=n("YFqc"),o=n.n(s),u=n("20a2"),l=n("0FX9"),d=n.n(l),j=n("uXig"),b=n.n(j),h=n("Jq4i");function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e){e.props;var t=Object(a.useState)([]),n=t[0],s=t[1],l=Object(a.useState)(""),j=l[0],O=l[1],v=Object(a.useState)([]),p=v[0],x=v[1],y=Object(a.useState)(null),g=y[0],w=y[1],S=Object(a.useRef)(null),k=Object(a.useState)(!1),D=k[0],N=k[1],C=Object(a.useState)(!1),R=C[0],M=C[1],P=Object(a.useState)(Math.round(1e5*Math.random())),z=P[0],J=P[1],L=Object(a.useState)(Math.random().toString(36).substr(2)),q=L[0],E=L[1],T=Object(u.useRouter)();function I(){J(Math.round(1e5*Math.random())),E(Math.random().toString(36).substr(2)),M(!1)}function Q(e,t,n){s((function(c){return c.map((function(c){return c.code===e?f(f({},c),{},Object(i.a)({},t,n)):c}))}))}function U(e){p.includes(e)||x([].concat(Object(r.a)(p),[e])),O(e)}return Object(a.useEffect)((function(){var e=localStorage.getItem("transferConnections");""!==e&&s(JSON.parse(e));var t=new WebSocket("ws://rt-connection.herokuapp.com");return t.onmessage=function(e){var n=JSON.parse(e.data),c=n.type,i=n.content;switch(c){case"swap":s((function(e){return[{code:i,date:Date.now()}].concat(Object(r.a)(e))})),U(i),t.close(),N(!1)}},w(t),function(){return t.close()}}),[]),Object(a.useEffect)((function(){localStorage.setItem("transferConnections",JSON.stringify(n))}),[n]),Object(a.useEffect)((function(){void 0!==T.query.key&&(s((function(e){return[{code:T.query.key,date:Date.now()}].concat(Object(r.a)(e))})),T.replace(T.asPath.match(/^(.*)\?/)[1],void 0,{shallow:!0}),console.log(T.query.key),I(),U(T.query.key),M(!1))}),[T.query.key]),Object(c.jsxs)("div",{className:b.a.block,children:[Object(c.jsxs)("div",{className:b.a.main,children:[Object(c.jsx)("div",{children:"\u041e\u043d\u043b\u0430\u0439\u043d \u0447\u0430\u0442 \u0441 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435\u0439 \u0444\u0430\u0439\u043b\u043e\u0432"}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"".concat(b.a.new," ").concat(""===j?b.a.display:""),children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:"\u041e\u0431\u043c\u0435\u043d \u043a\u043e\u0434\u0430\u043c\u0438"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:"\u0427\u0442\u043e\u0431\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432, \u043e\u0431\u043c\u0435\u043d\u044f\u0439\u0442\u0435\u0441\u044c \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u043a\u043e\u0434\u0430\u043c\u0438 \u0441 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u043c"}),Object(c.jsxs)("div",{children:["\u0412\u0430\u0448 \u043a\u043e\u0434: ",Object(c.jsx)("span",{onClick:function(){navigator.clipboard.writeText("".concat(z))},"data-tooltip":"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0447\u0442\u043e\u0431\u044b \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c",className:b.a.code,children:z})]}),Object(c.jsx)("div",{children:"\u0412\u043f\u0438\u0448\u0438\u0442\u0435 \u0432 \u043f\u043e\u043b\u0435 \u043d\u0438\u0436\u0435 \u043a\u043e\u0434, \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u043c\u044b\u0439 \u0443 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430"}),D?Object(c.jsx)("div",{children:"\u041e\u0436\u0438\u0434\u0430\u043d\u0438\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430"}):Object(c.jsxs)("form",{className:b.a.form,onSubmit:function(e){e.preventDefault();var t,n,c=[e.target.code.value,z].sort().join("");t="swap",n=c,g.send(JSON.stringify({type:t,content:n})),N(!0)},children:[Object(c.jsx)("input",{autoComplete:"false",type:"number",name:"code"}),Object(c.jsx)("input",{type:"submit",value:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e"})]})]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:"\u041f\u043e \u0441\u0441\u044b\u043b\u043a\u0435 \u0438\u043b\u0438 QR \u043a\u043e\u0434"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:"QR \u043a\u043e\u0434 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0441\u044b\u043b\u043a\u0443, \u0441\u043e\u0441\u0442\u043e\u044f\u0449\u0443\u044e \u0438\u0437 \u043a\u043b\u044e\u0447\u0430, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0431\u0443\u0434\u0435\u0442 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435. \u042d\u0442\u0430 \u0436\u0435 \u0441\u0441\u044b\u043b\u043a\u0430 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0430 \u043d\u0438\u0436\u0435. \u041f\u0435\u0440\u0435\u0439\u0434\u044f \u043f\u043e \u043d\u0435\u0439 \u0432\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442."}),Object(c.jsx)("div",{children:"\u041f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e \u043a\u0430\u043a \u0432\u0430\u0448 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0434\u043e\u0431\u0430\u0432\u0438\u0442 \u043a\u043b\u044e\u0447 \u043a \u0441\u0435\u0431\u0435, \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0442\u043e\u0436\u0435 \u0435\u0433\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c, \u043f\u0435\u0440\u0435\u0439\u0434\u044f \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435, \u043b\u0438\u0431\u043e \u043e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0432 QR \u043a\u043e\u0434."}),Object(c.jsxs)("div",{children:[Object(c.jsx)(o.a,{href:{pathname:T.asPath,query:{key:q}},children:Object(c.jsxs)("a",{children:["https://regtool.net",T.asPath,"?key=",q]})}),Object(c.jsx)("button",{onClick:function(){navigator.clipboard.writeText("https://regtool.net".concat(T.asPath,"?key=").concat(q))},children:"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]}),Object(c.jsxs)("div",{className:R?b.a.qrTrue:b.a.qrFalse,children:[Object(c.jsx)("canvas",{ref:S}),Object(c.jsx)("button",{onClick:function(){d.a.toCanvas(S.current,"https://regtool.net/".concat(T.adPath,"?key=").concat(q)),M(!0)},children:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0447\u0442\u043e\u0431\u044b \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c QR \u043a\u043e\u0434"})]})]})]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:"\u0415\u0441\u043b\u0438 \u043a\u043b\u044e\u0447 \u0438\u043b\u0438 \u043a\u043e\u0434 \u043f\u043e\u043f\u0430\u043b\u0438 \u043a \u043f\u043e\u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u043c \u043b\u044e\u0434\u044f\u043c, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0445 \u043f\u0435\u0440\u0435\u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430 \u0441\u043d\u043e\u0432\u0430"}),Object(c.jsx)("button",{onClick:I,children:"\u041f\u0435\u0440\u0435\u0441\u043e\u0437\u0434\u0430\u0442\u044c"})]})]}),n.map((function(e){var t=e.code,n=e.name,r=e.date,i=e.last;return p.includes(t)?Object(c.jsx)(m,{display:j===t,code:t,name:n,date:r,last:i,contactEdit:Q},t):null}))]})]}),Object(c.jsxs)("div",{className:b.a.contacts,children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0451\u043d\u043d\u044b\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430"}),Object(c.jsx)("button",{onClick:function(){return O("")},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]}),Object(c.jsx)("div",{children:n.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{onClick:function(){return U(e.code)},children:void 0===e.name?"\u0411\u0435\u0437\u044b\u043c\u044f\u043d\u043d\u044b\u0439":e.name}),Object(c.jsx)("button",{onClick:function(t){var c;t.stopPropagation(),c=e.code,s(n.filter((function(e){return e.code!==c}))),O("")},children:Object(c.jsx)(h.a,{name:"var/x.svg"})}),Object(c.jsx)("div",{children:new Date(e.date).toLocaleTimeString(void 0,{month:"short",day:"numeric",weekday:"short",year:"numeric"})}),Object(c.jsx)("div",{children:void 0===e.last?"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u0435\u0449\u0435 \u043d\u0435 \u0431\u044b\u043b\u043e":new Date(e.last).toLocaleTimeString(void 0,{month:"short",day:"numeric",weekday:"short",year:"numeric"})})]},e.code)}))})]})]})}function m(e){var t=e.code,n=e.name,s=e.date,o=e.last,u=e.display,l=e.contactEdit,d=Object(a.useState)([]),j=d[0],O=d[1],v=Object(a.useState)([]),m=v[0],p=v[1],x=Object(a.useState)(!1),y=x[0],g=x[1],w=Object(a.useState)(0),S=w[0],k=w[1],D=Object(a.useRef)(null),N=Object(a.useRef)(null),C=Object(a.useRef)(null),R=function(){try{C.current.close(),N.current.close(),D.current.close()}catch(e){}},M=function(e){return O((function(t){return[].concat(Object(r.a)(t),[e])}))},P=function(e,t,n){return O((function(c){return c.map((function(c){return c.id===e?f(f({},c),{},Object(i.a)({},t,n)):c}))}))};function z(){var e=Date.now();return{date:6e4*Math.floor(e/6e4),id:e%1e5}}function J(e,t){var n=document.createElement("a");n.download=t,n.href=URL.createObjectURL(e),n.click(),URL.revokeObjectURL(n.href)}function L(){k(1);var e=new RTCPeerConnection({iceServers:[{url:"turn:numb.viagenie.ca",credential:"muazkh",username:"webrtc@live.com"},{urls:"stun:stun1.l.google.com:19302"}]});function n(e){var n,r={},i=0,a=[],s=1;e.onopen=function(){M({type:"sys",content:"\u041a\u0430\u043d\u0430\u043b \u043e\u0442\u043a\u0440\u044b\u0442"}),k(2),l(t,"last",Date.now()),c.close()},e.onclose=function(){R(),k(0),M({type:"sys",content:"\u041a\u0430\u043d\u0430\u043b \u0437\u0430\u043a\u0440\u044b\u0442"})},e.onmessage=function(e){try{var t=JSON.parse(e.data),c=t.type,o=t.content;"msg"===c&&M(f({type:c,content:o,current:!1},z())),"file"===c&&(a=[],i=0,r=o,(s=Math.ceil(r.chunks/100))<1&&(s=1),n=f({type:"file",current:!1,name:r.name,size:r.size},z()),M(n))}catch(u){a.push(e.data),++i%s===0&&P(n.id,"progress",Math.round(i/s)),i>=r.chunks&&(P(n.id,"progress",100),P(n.id,"blob",new Blob(a)))}},C.current=e}e.onicecandidate=function(e){return e.candidate?r("newice",e.candidate):null},e.ondatachannel=function(e){return n(e.channel)};var c=new WebSocket("ws://rt-connection.herokuapp.com"),r=function(e,t){return c.send(JSON.stringify({type:e,content:t}))};c.onopen=function(){return r("connect",t)},c.onmessage=function(t){var c=JSON.parse(t.data),i=c.type,a=c.content;switch(i){case"connect":n(e.createDataChannel("channel")),e.createOffer().then((function(t){return e.setLocalDescription(t)})).then((function(){return r("offer",e.localDescription)}));break;case"offer":e.setRemoteDescription(new RTCSessionDescription(a)).then((function(){return e.createAnswer()})).then((function(t){return e.setLocalDescription(t)})).then((function(){return r("answer",e.localDescription)}));break;case"answer":e.setRemoteDescription(new RTCSessionDescription(a));break;case"newice":e.addIceCandidate(new RTCIceCandidate(a))}},D.current=c,N.current=e}return Object(a.useEffect)((function(){return function(){return R()}}),[]),Object(c.jsxs)("div",{className:"".concat(b.a.element," ").concat(u?b.a.display:""),children:[Object(c.jsxs)("div",{className:b.a.info,children:[Object(c.jsx)("div",{children:void 0===n?"\u0411\u0435\u0437\u044b\u043c\u044f\u043d\u043d\u044b\u0439":n}),function(){switch(S){case 0:return Object(c.jsx)("button",{className:b.a.start,onClick:L,children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435"});case 1:return Object(c.jsx)("div",{className:b.a.waiting,children:"\u041e\u0436\u0438\u0434\u0430\u043d\u0438\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f"});case 2:return Object(c.jsx)("div",{children:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e"})}}(),Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:["\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d:",Object(c.jsx)("span",{children:new Date(s).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})})]}),Object(c.jsxs)("div",{children:["\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435:",void 0===o?Object(c.jsx)("span",{children:"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"}):Object(c.jsx)("span",{children:new Date(o).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})})]})]})]}),Object(c.jsxs)("div",{className:b.a.chat,children:[Object(c.jsx)("div",{children:j.map((function(e,t){switch(e.type){case"msg":return Object(c.jsxs)("div",{className:e.current?b.a.right:b.a.left,children:[Object(c.jsx)("div",{children:new Date(e.date).toLocaleTimeString(void 0,{minute:"numeric",hour:"numeric"})}),Object(c.jsx)("div",{children:e.content})]},t);case"file":return Object(c.jsxs)("div",{className:"".concat(e.current?b.a.right:b.a.left," ").concat(b.a.file),children:[Object(c.jsx)("div",{children:new Date(e.date).toLocaleTimeString(void 0,{minute:"numeric",hour:"numeric"})}),Object(c.jsx)(h.a,{name:"var/file.svg"}),Object(c.jsxs)("div",{onClick:100===e.progress||e.current?function(){return J(e.blob,e.name)}:null,children:[Object(c.jsx)("div",{children:e.name}),Object(c.jsxs)("div",{children:[e.progress,"%"]}),Object(c.jsxs)("div",{children:[Math.round(e.size/1024)," \u043a\u0431"]})]})]},t);case"sys":return Object(c.jsx)("div",{className:b.a.system,children:e.content},t)}}))}),Object(c.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),null===C.current)return M({type:"sys",content:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043d\u0435 \u0431\u044b\u043b\u043e \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440e\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f."});if(null!==C.current||"open"!==C.current.readyState)switch(C.current.readyState){case"connecting":return M({type:"sys",content:"\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435. \u041f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f"});case"closing":return M({type:"sys",content:"\u041f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f"});case"close":return M({type:"sys",content:"\u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0431\u044b\u043b\u043e \u0437\u0430\u043a\u0440\u044b\u0442\u043e"})}!function(e){if(""!==e&&(C.current.send(JSON.stringify({type:"msg",content:e})),M(f({type:"msg",content:e,current:!0},z()))),0!==m.length&&!y){var t,n=function(){0===r&&(C.current.send(JSON.stringify({type:"file",content:{name:m[i].name,chunks:Math.floor(m[i].size/s),size:m[i].size}})),t=f({type:"file",current:!0,blob:m[i],size:m[i].size,name:m[i].name},z()),a=Math.ceil(m[i].size/s/100),M(t));var e=s*r,n=Math.min(m[i].size,e+s);c.readAsArrayBuffer(m[i].slice(e,n))},c=new FileReader,r=0,i=0,a=0,s=8092;g(!0),c.onload=function(){C.current.send(c.result),r%a===0&&P(t.id,"progress",Math.round(r/a)),++r>Math.floor(m[i].size/s)?(P(t.id,"progress",100),i++,m.length>i?(r=0,n()):(p([]),g(!1))):n()},n()}}(e.target.msg.value),e.target.msg.value=""},children:[Object(c.jsx)("div",{style:y?{display:"none"}:{},children:m.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{onClick:function(){return J(e,e.name)},children:Object(c.jsx)(h.a,{name:"var/file.svg"})},e.lastModified),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:e.name}),Object(c.jsx)("button",{onClick:function(t){return function(e){return p((function(t){return t.filter((function(t){return t!==e}))}))}(e)},children:Object(c.jsx)(h.a,{name:"var/x.svg"})}),Object(c.jsxs)("div",{children:[Math.round(e.size/1024)," \u043a\u0431"]})]})]})}))}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("label",{"data-tooltip":"\u041f\u0440\u0438\u043a\u0440\u0435\u043f\u0438\u0442\u044c \u0444\u0430\u0439\u043b",children:[Object(c.jsx)("input",{disabled:y,type:"file",multiple:!0,onChange:function(e){return p((function(t){return[].concat(Object(r.a)(t),Object(r.a)(e.target.files))}))}}),Object(c.jsx)(h.a,{name:"var/clip.svg"})]}),Object(c.jsx)("input",{autoComplete:"false",type:"text",name:"msg"}),Object(c.jsxs)("label",{"data-tooltip":"\u041e\u0442\u043f\u0440\u0430\u0430\u0432\u0438\u0442\u044c",children:[Object(c.jsx)("input",{type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"}),Object(c.jsx)(h.a,{name:"var/send.svg"})]})]})]})]})]})}}}]);