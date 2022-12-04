"use strict";(self.webpackChunkregtool=self.webpackChunkregtool||[]).push([[8],{5415:(e,n,s)=>{s.d(n,{T:()=>y,E:()=>L});var t=s(4246),l=s(7378),i=s(3e3),o=s(4764),a=s(9612),r=s(4847),c=s(598),d=s(4794),u=s(7213),g=s(7056),h=s(9526),f=s(3131),j=s(9839),v=s(5072),m=s(6173),x=s(3662),b=s(50);const p="_0P6aj",C="dbvuf",O="KtHsg";function w({onChange:e,hueProp:n=0,saturationProp:s=1,lightnessProp:c=0,defaultValue:u}){const[g,h]=(0,l.useState)(n),[f,j]=(0,l.useState)(s),[C,O]=(0,l.useState)(c),[w,y,M]=(0,i.wX)(g,f,C),L=(0,i.CO)(w,y,M),[P,k]=(0,a.OT)();(0,a.Fd)((()=>e(L)),[P]);const S=(e,n,s)=>{h(e),j(n),O(s)},Z=(e,n,s)=>{S(...(0,i.XL)(null!=e?e:w,null!=n?n:y,null!=s?s:M))},[E,F,D]=(0,i.EV)(g,f,C);(0,l.useEffect)((()=>S(n,s,c)),[n,s,c]);const I=(0,l.useRef)(),R=(0,l.useRef)();return(0,t.jsxs)(o.gF,Object.assign({className:p},{children:[(0,t.jsxs)(o.sg,{children:[(0,t.jsxs)("div",Object.assign({style:{backgroundColor:`hsl(${360*g}, 100%, 50%)`},ref:I,onPointerDown:(0,a.sq)({onMove:e=>{const{left:n,top:s,width:t,height:l}=I.current.getBoundingClientRect(),o=(0,b.uZ)(e.clientX,n,n+t)-n,a=(0,b.uZ)(e.clientY,s,s+l)-s,[r,c,d]=(0,i.pL)(0,o/t,1-a/l);j(c),O(d)},onDrop:k})},{children:[(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{style:{left:100*F+"%",top:100-100*D+"%",backgroundColor:`hsl(${360*g}, ${100*f}%, ${100*C}%)`}})]})),(0,t.jsx)("div",Object.assign({ref:R,onPointerDown:(0,a.sq)({onMove:e=>{const{left:n,width:s}=R.current.getBoundingClientRect(),t=(0,b.uZ)(e.clientX,n,n+s)-n;h(t/s)},onDrop:k})},{children:(0,t.jsx)("div",{style:{left:100*g+"%",backgroundColor:`hsl(${360*g}, 100%, 50%)`}})})),(0,t.jsxs)(r.H7,Object.assign({label:"RGB"},{children:[(0,t.jsx)(r.Y2,{value:w,min:0,max:255,onChange:e=>Z(e),onChanged:k}),(0,t.jsx)(r.Y2,{value:y,min:0,max:255,onChange:e=>Z(void 0,e),onChanged:k}),(0,t.jsx)(r.Y2,{value:M,min:0,max:255,onChange:e=>Z(void 0,void 0,e),onChanged:k})]})),(0,t.jsxs)(r.H7,Object.assign({label:"HSL"},{children:[(0,t.jsx)(r.Y2,{value:Math.ceil(360*g),min:0,max:360,onChange:e=>h(e/360),onChanged:k}),(0,t.jsx)(r.Y2,{value:Math.ceil(100*f),min:0,max:100,onChange:e=>j(e/100),onChanged:k}),(0,t.jsx)(r.Y2,{value:Math.ceil(100*C),min:0,max:100,onChange:e=>O(e/100),onChanged:k})]})),(0,t.jsx)(r.H7,Object.assign({label:"HEX"},{children:(0,t.jsx)(r.II,{value:L,onChanged:e=>{const n=(0,i.wK)(e);n&&Z(...n),k()}})}))]}),(0,t.jsxs)(o.sg,{children:[(0,t.jsx)(d.hU,Object.assign({circle:!0,onClick:()=>{S(Math.random(),Math.random(),Math.random()),k()}},{children:(0,t.jsx)(v.Z,{})})),(0,t.jsx)(d.hU,Object.assign({circle:!0,display:u!==L,onClick:()=>{S(...(0,i.XL)(...(0,i.wK)(null!=u?u:"#ffffff"))),e(null!=u?u:void 0)}},{children:(0,t.jsx)(m.Z,{})})),(0,t.jsx)(d.hU,Object.assign({circle:!0,display:g!==n||f!==s||C!==c,onClick:()=>{S(n,s,c),k()}},{children:(0,t.jsx)(x.Z,{})}))]})]}))}function y({value:e,defaultValue:n,onChange:s}){var l;const[o,a,r]=(0,i.XL)(...(0,i.wK)(null!==(l=null!=e?e:n)&&void 0!==l?l:"#000000"));return(0,t.jsx)(w,{hueProp:o,saturationProp:a,lightnessProp:r,defaultValue:n,onChange:s})}const M={font:g.Z,border:f.Z,underline:u.Z,background:h.Z,square:({style:e})=>(0,t.jsx)("div",{className:O,style:{backgroundColor:e.fill}})};function L({i:e,onChange:n,value:s,defaultValue:i}){var o;const[a,r]=(0,l.useState)(s);(0,l.useEffect)((()=>r(s)),[s]);const u=null!==(o=M[e])&&void 0!==o?o:j.Z;return(0,t.jsxs)(d.hU,Object.assign({onClick:n?e=>function(e,n,s,l){return(0,c.mN)((()=>(0,t.jsx)(c.e1,Object.assign({e},{children:(0,t.jsx)(y,{value:n,defaultValue:s,onChange:l})}))))}(e,a,i,(e=>{n(e),r(e)})):void 0},{children:[(0,t.jsx)(u,{style:{fill:a}}),void 0===a&&(0,t.jsx)(m.Z,{className:C})]}))}},9008:(e,n,s)=>{s.r(n),s.d(n,{Maps:()=>L,MapsList:()=>S});var t=s(4246),l=s(7378),i=s(4764),o=s(4847),a=s(3395),r=s(5415),c=s(5622),d=s(4794),u=s(2667),g=s(50),h=s(9467),f=s(9612),j=s(8e3),v=s(42),m=s(6163),x=s(508),b=s(3573);const p="g3Rw4",C="vMCSL",O="_34fxc",w="_5E62X",y="Pqdqr";var M=s(183);function L(){const e=(0,j.PD)("maps"),{itemsModel:n}=e;(0,u.SZ)(n);const{current:s,currentData:i}=n,o=(0,l.useMemo)((()=>new c.z(i)),[s,i]);(0,l.useEffect)((()=>{e.setSelectedLegend([])}),[o]),(0,u.SZ)(o),(0,u.yl)(o,(()=>{n.editData(o.data)}),[o]);const{legends:a}=o.data,r=(0,l.useRef)();return(0,t.jsxs)("div",Object.assign({className:p,ref:r},{children:[(0,t.jsx)(h.L,{children:(0,t.jsx)("svg",Object.assign({className:C,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1010 666"},{children:(0,t.jsx)(k,{settings:o})}))}),Object.entries(a.items).map((([e,n])=>(0,t.jsx)(P,{id:e,fields:n.fields,settings:o,containerRef:r},e)))]}))}function P({fields:e,id:n,settings:s,containerRef:a}){var c;const h=(0,j.PD)("maps"),f=h.itemsModel.getCurrentItem(),p=null!==(c=null==f?void 0:f.name)&&void 0!==c?c:"Карта";(0,u.SZ)(h);const[C,y]=h.getSelectedLegend(),[L,P]=(0,l.useState)(!1),k=(0,l.useRef)();return(0,t.jsxs)("div",Object.assign({className:O,ref:k},{children:[(0,t.jsxs)(i.gF,{children:[L?(0,t.jsx)(o.II,{value:p,onChanged:e=>h.itemsModel.editItem(h.itemsModel.current,{name:e})}):(0,t.jsx)("div",{children:p}),(0,t.jsx)(d.hU,Object.assign({onClick:()=>P((e=>!e))},{children:L?(0,t.jsx)(x.Z,{}):(0,t.jsx)(b.Z,{})}))]}),(0,t.jsx)(i.sg,{children:e&&Object.entries(e).map((([e,l])=>(0,t.jsx)(i.gF,Object.assign({className:(0,g.cn)(C===n&&y===e&&w),onClick:()=>h.setSelectedLegend([n,e])},{children:L?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.E,{i:L?"underline":"background",value:null==l?void 0:l.color,onChange:t=>s.set({legends:{items:{[n]:{fields:{[e]:{color:t}}}}}},"changeLegendFieldColor")}),(0,t.jsx)(o.II,{value:null==l?void 0:l.name,onChanged:t=>s.set({legends:{items:{[n]:{fields:{[e]:{name:t}}}}}},"changeLegendFieldName")}),(0,t.jsx)(d.hU,Object.assign({onClick:()=>{s.set({legends:{items:{[n]:{fields:{[e]:void 0}}}}},"removeLegendField")}},{children:(0,t.jsx)(m.Z,{})}))]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.E,{i:"square",value:null==l?void 0:l.color}),(0,t.jsx)("div",{children:null==l?void 0:l.name})]})}),e)))}),L&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.zx,Object.assign({color:"green",onClick:()=>{s.set({legends:{items:{[n]:{fields:{[(0,g.Vj)()]:{name:"Метка",color:"#ff0000"}}}}}},"addLegendField")}},{children:(0,t.jsx)(v.Z,{})})),(0,t.jsx)(o.zx,Object.assign({color:"green",onClick:()=>{P(!1),(0,M.YM)(a.current).then((e=>(0,g.LR)(e,`${p}.png`))).finally((()=>P(!0)))}},{children:"Скачать"}))]})]}))}function k({settings:e}){const n=(0,j.PD)("maps"),s=(0,f.NW)();(0,u.yl)(n,(e=>"updateMap"===e&&s())),(0,u.yl)(e,(e=>{"removeLegendField"!==e&&"changeLegendFieldColor"!==e||s()}));const{countries:i,legends:o}=e.data;return(0,t.jsx)("g",{children:n.getCountryList().map((({id:n,path:s,name:a})=>{var r;let c=[];if(null===(r=i[n])||void 0===r?void 0:r.legends){const e=Object.entries(i[n].legends)[0];if(e){const[n,s]=e,t=Object.keys(s).map((e=>{var s,t,l,i;return null===(i=null===(l=null===(t=null===(s=null==o?void 0:o.items)||void 0===s?void 0:s[n])||void 0===t?void 0:t.fields)||void 0===l?void 0:l[e])||void 0===i?void 0:i.color})).filter((e=>void 0!==e));t.length>0&&(c=t)}}return(0,t.jsxs)(l.Fragment,{children:[c.length>1&&(0,t.jsx)("linearGradient",Object.assign({id:n+"grad",spreadMethod:"repeat",x2:"3",y2:"3",gradientUnits:"userSpaceOnUse"},{children:c.map(((e,n)=>(0,t.jsxs)(l.Fragment,{children:[(0,t.jsx)("stop",{stopColor:e,offset:100*n/c.length+"%"}),(0,t.jsx)("stop",{stopColor:e,offset:100*(n+1)/c.length+"%"})]},n)))})),(0,t.jsx)("path",Object.assign({d:s,strokeWidth:"0.3",style:{fill:c.length>1?`url('#${n+"grad"}')`:c[0]},onClick:()=>{var s,t,l;const[i,o]=(0,j.PD)("maps").getSelectedLegend();i&&o&&((null===(l=null===(t=null===(s=e.data.countries[n])||void 0===s?void 0:s.legends)||void 0===t?void 0:t[i])||void 0===l?void 0:l[o])?e.set({countries:{[n]:{legends:{[i]:{[o]:void 0}}}}}):e.set({countries:{[n]:{legends:{[i]:{[o]:!0}}}}}))}},{children:(0,t.jsx)("title",{children:a})}),n)]},n)}))})}function S(){return(0,t.jsx)(a.sr,{model:(0,j.PD)("maps").itemsModel,deleteButton:!0,renderItem:({name:e})=>(0,t.jsx)(Z,{name:e||"Карта"})})}function Z({name:e}){return(0,t.jsx)("div",Object.assign({className:y},{children:(0,t.jsx)("div",{children:e})}))}},3e3:(e,n,s)=>{function t(e,n,s){return"#"+(16777216+(e<<16|n<<8|s<<0)).toString(16).slice(1)}function l(e){const n=e.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);if(n)return n.slice(1).map((e=>parseInt(e,16)));const s=e.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);return s?s.slice(1).map((e=>17*parseInt(e,16))):void 0}function i(e,n,s){var t,l,i;if(0==n)t=l=i=s;else{var o=function(e,n,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?e+6*(n-e)*s:s<.5?n:s<2/3?e+(n-e)*(2/3-s)*6:e},a=s<.5?s*(1+n):s+n-s*n,r=2*s-a;t=o(r,a,e+1/3),l=o(r,a,e),i=o(r,a,e-1/3)}return[Math.round(255*t),Math.round(255*l),Math.round(255*i)]}function o(e,n,s){e/=255,n/=255,s/=255;var t,l,i=Math.max(e,n,s),o=Math.min(e,n,s),a=(i+o)/2;if(i==o)t=l=0;else{var r=i-o;switch(l=a>.5?r/(2-i-o):r/(i+o),i){case e:t=(n-s)/r+(n<s?6:0);break;case n:t=(s-e)/r+2;break;case s:t=(e-n)/r+4}t/=6}return[t,l,a]}function a(e,n,s){const t=n*Math.min(s,1-s)+s;return[e,t?2-2*s/t:0,t]}function r(e,n,s){const t=s-s*n/2,l=Math.min(t,1-t);return[e,l?(s-t)/l:0,t]}function c(e){const n=e.match(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i);if(n)return[+n[1],+n[2],+n[3]]}s.d(n,{CO:()=>t,EV:()=>a,XL:()=>o,cE:()=>c,pL:()=>r,wK:()=>l,wX:()=>i})},9467:(e,n,s)=>{s.d(n,{L:()=>a});var t=s(4246),l=s(7378),i=s(50),o=function(e,n){var s={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(s[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(s[t[l]]=e[t[l]])}return s};const a=l.forwardRef(((e,n)=>{var{children:s}=e,a=o(e,["children"]);const[[r,c,d],u]=(0,l.useState)([0,0,15]),[g,h]=(0,l.useState)(!1),f=(0,l.useRef)(null),[j,v]=(0,l.useState)(!1);(0,l.useImperativeHandle)(n,(()=>({setDefaultStatePromise:e=>{v(!0),e.finally((()=>v(!1)))}}))),(0,l.useLayoutEffect)((()=>{const e=e=>{if(e.ctrlKey){e.preventDefault();const n=e.deltaY>0;u((([e,s,t])=>{const l=Math.pow(t/15,2),o=(0,i.uZ)(t+(n?-1:1),1,30),a=Math.pow(o/15,2),{scrollTop:r,scrollLeft:c,clientHeight:d,clientWidth:u}=f.current;return[(c+u/2)/l*a-u/2,(r+d/2)/l*a-d/2,o]}))}};return f.current.addEventListener("wheel",e,{passive:!1}),()=>{f.current.removeEventListener("wheel",e)}}),[]);const m=Math.pow(d/15,2);return(0,l.useLayoutEffect)((()=>{const{scrollWidth:e,clientWidth:n,scrollHeight:s,clientHeight:t}=f.current;h(e>n||s>t),m>1&&f.current.scrollTo({left:r,top:c})}),[d]),(0,t.jsx)("div",Object.assign({ref:f,style:{position:"relative",overflow:"auto",width:"100%"}},{children:(0,t.jsx)("div",Object.assign({},a,{style:Object.assign(Object.assign({},a.style),{transform:!j&&`scale(${m})`,transformOrigin:g&&!j&&"left top",maxHeight:"100%"})},{children:s}))}))}))}}]);