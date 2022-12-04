"use strict";(self.webpackChunkregtool=self.webpackChunkregtool||[]).push([[401],{5415:(e,t,n)=>{n.d(t,{T:()=>O,E:()=>N});var s=n(4246),r=n(7378),o=n(3e3),i=n(4764),a=n(9612),l=n(4847),c=n(598),d=n(4794),u=n(7213),h=n(7056),g=n(9526),f=n(3131),p=n(9839),j=n(5072),m=n(6173),x=n(3662),b=n(50);const y="_0P6aj",C="dbvuf",v="KtHsg";function k({onChange:e,hueProp:t=0,saturationProp:n=1,lightnessProp:c=0,defaultValue:u}){const[h,g]=(0,r.useState)(t),[f,p]=(0,r.useState)(n),[C,v]=(0,r.useState)(c),[k,O,L]=(0,o.wX)(h,f,C),N=(0,o.CO)(k,O,L),[P,M]=(0,a.OT)();(0,a.Fd)((()=>e(N)),[P]);const w=(e,t,n)=>{g(e),p(t),v(n)},Z=(e,t,n)=>{w(...(0,o.XL)(null!=e?e:k,null!=t?t:O,null!=n?n:L))},[S,R,U]=(0,o.EV)(h,f,C);(0,r.useEffect)((()=>w(t,n,c)),[t,n,c]);const D=(0,r.useRef)(),z=(0,r.useRef)();return(0,s.jsxs)(i.gF,Object.assign({className:y},{children:[(0,s.jsxs)(i.sg,{children:[(0,s.jsxs)("div",Object.assign({style:{backgroundColor:`hsl(${360*h}, 100%, 50%)`},ref:D,onPointerDown:(0,a.sq)({onMove:e=>{const{left:t,top:n,width:s,height:r}=D.current.getBoundingClientRect(),i=(0,b.uZ)(e.clientX,t,t+s)-t,a=(0,b.uZ)(e.clientY,n,n+r)-n,[l,c,d]=(0,o.pL)(0,i/s,1-a/r);p(c),v(d)},onDrop:M})},{children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{style:{left:100*R+"%",top:100-100*U+"%",backgroundColor:`hsl(${360*h}, ${100*f}%, ${100*C}%)`}})]})),(0,s.jsx)("div",Object.assign({ref:z,onPointerDown:(0,a.sq)({onMove:e=>{const{left:t,width:n}=z.current.getBoundingClientRect(),s=(0,b.uZ)(e.clientX,t,t+n)-t;g(s/n)},onDrop:M})},{children:(0,s.jsx)("div",{style:{left:100*h+"%",backgroundColor:`hsl(${360*h}, 100%, 50%)`}})})),(0,s.jsxs)(l.H7,Object.assign({label:"RGB"},{children:[(0,s.jsx)(l.Y2,{value:k,min:0,max:255,onChange:e=>Z(e),onChanged:M}),(0,s.jsx)(l.Y2,{value:O,min:0,max:255,onChange:e=>Z(void 0,e),onChanged:M}),(0,s.jsx)(l.Y2,{value:L,min:0,max:255,onChange:e=>Z(void 0,void 0,e),onChanged:M})]})),(0,s.jsxs)(l.H7,Object.assign({label:"HSL"},{children:[(0,s.jsx)(l.Y2,{value:Math.ceil(360*h),min:0,max:360,onChange:e=>g(e/360),onChanged:M}),(0,s.jsx)(l.Y2,{value:Math.ceil(100*f),min:0,max:100,onChange:e=>p(e/100),onChanged:M}),(0,s.jsx)(l.Y2,{value:Math.ceil(100*C),min:0,max:100,onChange:e=>v(e/100),onChanged:M})]})),(0,s.jsx)(l.H7,Object.assign({label:"HEX"},{children:(0,s.jsx)(l.II,{value:N,onChanged:e=>{const t=(0,o.wK)(e);t&&Z(...t),M()}})}))]}),(0,s.jsxs)(i.sg,{children:[(0,s.jsx)(d.hU,Object.assign({circle:!0,onClick:()=>{w(Math.random(),Math.random(),Math.random()),M()}},{children:(0,s.jsx)(j.Z,{})})),(0,s.jsx)(d.hU,Object.assign({circle:!0,display:u!==N,onClick:()=>{w(...(0,o.XL)(...(0,o.wK)(null!=u?u:"#ffffff"))),e(null!=u?u:void 0)}},{children:(0,s.jsx)(m.Z,{})})),(0,s.jsx)(d.hU,Object.assign({circle:!0,display:h!==t||f!==n||C!==c,onClick:()=>{w(t,n,c),M()}},{children:(0,s.jsx)(x.Z,{})}))]})]}))}function O({value:e,defaultValue:t,onChange:n}){var r;const[i,a,l]=(0,o.XL)(...(0,o.wK)(null!==(r=null!=e?e:t)&&void 0!==r?r:"#000000"));return(0,s.jsx)(k,{hueProp:i,saturationProp:a,lightnessProp:l,defaultValue:t,onChange:n})}const L={font:h.Z,border:f.Z,underline:u.Z,background:g.Z,square:({style:e})=>(0,s.jsx)("div",{className:v,style:{backgroundColor:e.fill}})};function N({i:e,onChange:t,value:n,defaultValue:o}){var i;const[a,l]=(0,r.useState)(n);(0,r.useEffect)((()=>l(n)),[n]);const u=null!==(i=L[e])&&void 0!==i?i:p.Z;return(0,s.jsxs)(d.hU,Object.assign({onClick:t?e=>function(e,t,n,r){return(0,c.mN)((()=>(0,s.jsx)(c.e1,Object.assign({e},{children:(0,s.jsx)(O,{value:t,defaultValue:n,onChange:r})}))))}(e,a,o,(e=>{t(e),l(e)})):void 0},{children:[(0,s.jsx)(u,{style:{fill:a}}),void 0===a&&(0,s.jsx)(m.Z,{className:C})]}))}},6114:(e,t,n)=>{n.d(t,{Cr:()=>y,mi:()=>C,rs:()=>v,Kq:()=>g,g$:()=>h,Ve:()=>b,OX:()=>x});var s=n(4246),r=n(5450),o=n(5376),i=n(10),a=n(5451),l=n(7328),c=n(1716);const d=["Times New Roman","Arial","Arial Black","Bookman Old Style","Century Gothic","Comic Sans MS","Courier","Courier New","Garamond","Georgia","Impact","Lucida Console","MS Sans Serif","MS Serif","Palatino Linotype","Tahoma","Trebuchet MS","Verdana"],u=[6,8,10,12,14,16,18,20,22,24,26,30,34,38,42,46,52,56,64,72,108];var h,g,f=n(4847),p=n(4794),j=n(7378),m=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]])}return n};function x(e){if(!e)return;const{fontStyle:t,fontWeight:n}=e,s=m(e,["fontStyle","fontWeight"]);return t&&(s.fontStyle="italic"),n&&(s.fontWeight="bold"),s}function b({onChange:e,value:t}){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p.hU,{children:(0,s.jsx)(i.Z,{onClick:()=>e(h.Top)})}),(0,s.jsx)(p.hU,{children:(0,s.jsx)(o.Z,{onClick:()=>e(h.Middle)})}),(0,s.jsx)(p.hU,{children:(0,s.jsx)(r.Z,{onClick:()=>e(h.Bottom)})})]})}function y({onChange:e,value:t,left:n,right:r,center:o,display:i}){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p.hU,Object.assign({display:i},{children:(0,s.jsx)(a.Z,{onClick:()=>e(n)})})),(0,s.jsx)(p.hU,Object.assign({display:i},{children:(0,s.jsx)(l.Z,{onClick:()=>e(o)})})),(0,s.jsx)(p.hU,Object.assign({display:i},{children:(0,s.jsx)(c.Z,{onClick:()=>e(r)})}))]})}function C({value:e,onChange:t,nullable:n}){const r=(0,j.useMemo)((()=>{const e=d.map((e=>({value:e,label:e})));return n&&e.unshift({label:"Nollata ",value:void 0}),e}),[n]);return(0,s.jsx)(f.EI,{items:r,selected:null!=e?e:"Fontti ",onSelect:e=>t(e),style:{minWidth:200}})}function v({value:e,onChange:t,nullable:n}){const r=(0,j.useMemo)((()=>{const e=u.map((e=>({value:e,label:String(e)})));return n&&e.unshift({label:"Nollata ",value:void 0}),e}),[n]);return(0,s.jsx)(f.EI,{items:r,selected:null!=e?e:"Fonttikoko ",onSelect:e=>t(e),style:{minWidth:100}})}!function(e){e[e.Top=0]="Top",e[e.Middle=1]="Middle",e[e.Bottom=2]="Bottom"}(h||(h={})),function(e){e[e.Left=0]="Left",e[e.Center=1]="Center",e[e.Right=2]="Right"}(g||(g={}))},5401:(e,t,n)=>{n.r(t),n.d(t,{Notepad:()=>xe,NotepadList:()=>be});var s=n(4246),r=n(7378),o=n(4794),i=n(4764),a=n(4847),l=n(3395),c=n(8e3),d=n(9399),u=n(7232),h=n(6990),g=n(2667);const f="lUadF",p="_5zW3J",j="ifmWx",m="_1R5VB",x="+yjey",b="ZR-NN";function y(e,[t,n]){if(!d.ML.isBlock(e,t)||t.type!==ce.Ol&&t.type!==ce.Ul)return;Array.from(d.NB.children(e,n)).forEach((([t,n])=>{t.type!==ce.Li&&d.YR.wrapNodes(e,{type:ce.Li},{at:n})}))}function C(e,[t,n]){if(!d.ML.isBlock(e,t)||t.type!==ce.Li)return;const[s,r]=d.ML.parent(e,n);s.type!==ce.Ol&&s.type!==ce.Ul&&d.YR.unwrapNodes(e,{at:n})}function v(e,[t,n]){if(!d.ML.isBlock(e,t)||t.type!==ce.Image)return;const[s,r]=d.ML.parent(e,n);s.type!==ce.Paragraph&&d.YR.wrapNodes(e,{type:ce.Paragraph},{at:n})}function k(e,[t,n]){if(!d.ML.isBlock(e,t)||t.type!==ce.Paragraph)return;const[s,r]=d.ML.parent(e,n);s.type===ce.Paragraph&&d.YR.unwrapNodes(e,{at:r})}function O(e,[t,n]){if(!d.xv.isText(t))return;const[s,r]=d.ML.parent(e,n);s.type!==ce.Paragraph&&d.YR.wrapNodes(e,{type:ce.Paragraph},{at:n})}function L(e){const{setFragmentData:t,normalizeNode:n,isVoid:s}=e;return e.setFragmentData=e=>{!function(e){const t=function(){const e=Range.prototype.cloneContents;return Range.prototype.cloneContents=function(){const t=e.apply(this);return"OL"===this.commonAncestorContainer.nodeName||"UL"===this.commonAncestorContainer.nodeName?N([P([...t.childNodes],this.commonAncestorContainer.nodeName)]):"LI"!==this.commonAncestorContainer.nodeName||!this.commonAncestorContainer.parentElement||"OL"!==this.commonAncestorContainer.parentElement.nodeName&&"UL"!==this.commonAncestorContainer.parentElement.nodeName?t:N([P([M([...t.childNodes])],this.commonAncestorContainer.parentElement.nodeName)])},function(){Range.prototype.cloneContents=e}}();try{e()}finally{t()}}((function(){t(e)}))},e.normalizeNode=t=>{n(t),function(e,t){[y,C,v,k,O].forEach((n=>n(e,t)))}(e,t)},e.isVoid=e=>e.type===ce.Image||s(e),e}function N(e){const t=document.createDocumentFragment();return t.append(...e),t}function P(e,t){const n=document.createElement(t);return n.append(...e),n}function M(e){const t=document.createElement("li");return t.append(...e),t}var w=n(7663),Z=n(6114),S=n(2082),R=n(9612),U=n(50),D=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]])}return n};function z(e){switch(e.align){case Z.Kq.Center:return"center";case Z.Kq.Right:return"right";default:return}}function E({element:e,attributes:t,children:n}){return(0,s.jsx)("div",Object.assign({className:j,style:{textAlign:z(e)}},t,{children:n}))}function T({leaf:e,attributes:t,children:n}){return(0,s.jsx)("span",Object.assign({},t,{style:{fontWeight:e.bold&&"bold",color:e.color,fontFamily:e.font,fontSize:e.size,backgroundColor:e.backgroundColor,textDecoration:e.underline||e.strikethrough?`${e.underline?"underline ":""}${e.strikethrough?"line-through":""}`:void 0,fontStyle:e.italic?"italic":void 0}},{children:n}))}function I({element:e,attributes:t,children:n,editor:i}){const a=(0,u.vt)(),l=(0,u.UE)(),c=e,{id:h,float:g}=c,f=D(c,["id","float"]),[p,j]=(0,r.useState)(f.maxHeight);return(0,s.jsxs)("div",Object.assign({},t,{className:m,style:{float:g===de.Left?"left":g===de.Right?"right":void 0}},{children:[(0,s.jsx)("div",Object.assign({contentEditable:!1,style:{maxHeight:p}},{children:(0,s.jsx)(w.cu,{id:h,className:a&&l&&x})})),(0,s.jsx)(o.hU,Object.assign({circle:!0,display:a&&l,className:b,onPointerDown:(0,R.sq)({onDrop:()=>j((e=>(d.YR.setNodes(i,{maxHeight:e}),e))),onMove:e=>{e.preventDefault();const{top:n}=t.ref.current.getBoundingClientRect();j((0,U.uZ)(e.clientY-n,40,1/0))}})},{children:(0,s.jsx)(S.Z,{})})),n]}))}function Y({element:e,attributes:t,children:n}){const[o,i]=(0,r.useState)(!1);return(0,s.jsx)("a",Object.assign({href:e.href,style:{cursor:o?"pointer":void 0},onClick:t=>t.ctrlKey&&window.open(e.href)},t,{onMouseMove:e=>i(e.ctrlKey)},{children:n}))}const A=e=>(0,s.jsx)(T,Object.assign({},e));var B=n(5415),K=n(4953),F=n(6738),V=n(5338),H=n(613),W=n(2532),X=n(8786),_=n(7029),q=n(1947),$=n(6692),G=n(3590),J=n(2620),Q=n(317),ee=n(9337),te=n(598),ne=n(922);function se(e,t,n){let s=null;for(let r of e){const e=r[0][n]||t;if(null===s&&(s=e),e!==s){s=void 0;break}}return s}function re({obs:e,editor:t,spellCheckToggle:n,spellCheck:r}){(0,g.SZ)(e);const a=d.ML.nodes(t,{match:e=>d.xv.isText(e)}),l=Array.from(a),c=l.length&&l.every((e=>e[0].bold)),u=l.length&&l.every((e=>e[0].underline)),h=l.length&&l.every((e=>e[0].italic)),p=l.length&&l.every((e=>e[0].strikethrough)),j=se(l,"Arial","font"),m=se(l,18,"size"),x=se(l,void 0,"color"),b=se(l,void 0,"backgroundColor"),[y]=d.ML.nodes(t,{match:e=>d.ML.isBlock(t,e)&&e.type===ce.Image});return(0,s.jsxs)(i.gF,Object.assign({className:f},{children:[(0,s.jsxs)(i.Lr,{children:[(0,s.jsx)(o.hU,Object.assign({onClick:()=>t.undo()},{children:(0,s.jsx)(K.Z,{})})),(0,s.jsx)(o.hU,Object.assign({onClick:()=>t.redo()},{children:(0,s.jsx)(F.Z,{})}))]}),(0,s.jsxs)(i.Lr,{children:[(0,s.jsx)(o.hU,Object.assign({selected:c,onClick:()=>ue.toggleProp(t,"bold")},{children:(0,s.jsx)(V.Z,{})})),(0,s.jsx)(o.hU,Object.assign({selected:u,onClick:()=>ue.toggleProp(t,"underline")},{children:(0,s.jsx)(H.Z,{})})),(0,s.jsx)(o.hU,Object.assign({selected:h,onClick:()=>ue.toggleProp(t,"italic")},{children:(0,s.jsx)(W.Z,{})})),(0,s.jsx)(o.hU,Object.assign({selected:p,onClick:()=>ue.toggleProp(t,"strikethrough")},{children:(0,s.jsx)(X.Z,{})}))]}),(0,s.jsxs)(i.Lr,{children:[(0,s.jsx)(Z.rs,{value:m,onChange:e=>ue.setProp(t,"size",e)}),(0,s.jsx)(Z.mi,{value:j,onChange:e=>ue.setProp(t,"font",e)})]}),(0,s.jsxs)(i.Lr,{children:[(0,s.jsx)(B.E,{i:"font",value:x,onChange:e=>ue.setProp(t,"color",e)}),(0,s.jsx)(B.E,{i:"background",value:b,onChange:e=>ue.setProp(t,"backgroundColor",e)})]}),(0,s.jsx)(i.Lr,{children:(0,s.jsx)(Z.Cr,{center:Z.Kq.Center,right:Z.Kq.Right,value:void 0,onChange:e=>d.YR.setNodes(t,{align:e},{match:e=>d.ML.isBlock(t,e)&&e.type===ce.Paragraph,mode:"lowest"})})}),(0,s.jsxs)(i.Lr,{children:[(0,s.jsx)(o.hU,Object.assign({onClick:()=>ue.setList(t,ce.Ol)},{children:(0,s.jsx)(q.Z,{})})),(0,s.jsx)(o.hU,Object.assign({onClick:()=>ue.setList(t,ce.Ul)},{children:(0,s.jsx)(_.Z,{})}))]}),(0,s.jsxs)(i.Lr,Object.assign({style:{backgroundColor:y?"rgba(255, 125, 0, 0.8)":void 0}},{children:[(0,s.jsx)(o.hU,Object.assign({onClick:()=>(0,w.Pq)({category:w.WD.Image,count:1}).then((e=>ue.insertImage(t,e)))},{children:(0,s.jsx)(Q.Z,{})})),(0,s.jsx)(Z.Cr,{left:de.Left,right:de.Right,value:void 0,onChange:e=>d.YR.setNodes(t,{float:e},{match:e=>d.ML.isBlock(t,e)&&e.type===ce.Image}),display:!!y})]})),(0,s.jsxs)(i.Lr,{children:[(0,s.jsx)(o.hU,Object.assign({onClick:()=>ue.formatClear(t)},{children:(0,s.jsx)($.Z,{})})),(0,s.jsx)(o.hU,Object.assign({onClick:()=>window.print()},{children:(0,s.jsx)(G.Z,{})})),(0,s.jsx)(o.hU,Object.assign({selected:r,onClick:()=>n((e=>!e))},{children:(0,s.jsx)(J.Z,{})}))]}),(0,s.jsx)(i.Lr,{children:(0,s.jsx)(o.hU,Object.assign({onClick:()=>function({link:e,title:t}){return(0,te.mN)(((n,r)=>(0,s.jsx)(oe,{title:t,link:e,onSubmit:n,onCancel:r})))}({title:d.ML.string(t,t.selection.anchor.path),link:"https://"}).then((({title:e,link:n})=>d.YR.insertNodes(t,{type:ce.Link,href:n,children:[{text:e}]})))},{children:(0,s.jsx)(ee.Z,{})}))})]}))}function oe({title:e,link:t,onSubmit:n,onCancel:o}){const[l,c]=(0,r.useState)(e),[d,u]=(0,r.useState)(t);return(0,s.jsxs)(ne.hO,Object.assign({style:{maxWidth:400}},{children:[(0,s.jsxs)(i.sg,{children:[(0,s.jsx)(i.__,Object.assign({label:"Название"},{children:(0,s.jsx)(a.II,{value:l,onChanged:c})})),(0,s.jsx)(i.__,Object.assign({label:"Ссылка"},{children:(0,s.jsx)(a.II,{value:d,onChanged:u})}))]}),(0,s.jsxs)(ne.u2,{children:[(0,s.jsx)(a.zx,Object.assign({color:"red",onClick:o},{children:"Отмена"})),(0,s.jsx)(a.zx,Object.assign({color:"green",onClick:()=>n({title:l,link:d})},{children:"Применить"}))]})]}))}var ie=n(6429),ae=n(3e3);const le=(e,t={})=>{if(e.nodeType===Node.TEXT_NODE)return(0,ie.tZ)("element",{type:ce.Paragraph},[(0,ie.tZ)("text",t,e.textContent)]);if(e.nodeType!==Node.ELEMENT_NODE)return null;const n=Object.assign({},t);switch(e.nodeName){case"STRONG":case"B":n.bold=!0;break;case"FONT":n.font=e.face;break;case"I":n.italic=!0;break;case"U":n.underline=!0;break;case"STRIKE":n.strikethrough=!0}[...e.style].forEach((t=>{switch(t){case"color":{const t=(0,ae.cE)(e.style.color);t&&(n.color=(0,ae.CO)(...t));break}case"background-color":{const t=(0,ae.cE)(e.style.backgroundColor);t&&(n.backgroundColor=(0,ae.CO)(...t));break}case"font-family":n.font=e.style.fontFamily;break;case"font-size":switch(e.style.fontSize){case"xx-small":n.size=10;break;case"x-small":n.size=14;break;case"small":n.size=18;break;case"medium":n.size=24;break;case"large":n.size=28;break;case"x-large":n.size=32;break;case"xx-large":n.size=36;break;case"xxx-large":n.size=40}}}));const s=Array.from(e.childNodes).map((e=>le(e,n))).flat();switch(0===s.length&&s.push((0,ie.tZ)("text",n,"")),e.nodeName){case"BODY":return(0,ie.tZ)("fragment",{},s);case"BR":return"\n";case"P":return(0,ie.tZ)("element",{type:ce.Paragraph},s);case"OL":return(0,ie.tZ)("element",{type:ce.Ol},s);case"UL":return(0,ie.tZ)("element",{type:ce.Ul},s);case"LI":return(0,ie.tZ)("element",{type:ce.Li},s);case"A":return(0,ie.tZ)("element",{type:ce.Link,href:e.getAttribute("href")},s);case"DIV":return(0,ie.tZ)("fragment",{type:ce.Paragraph},s);default:return s}};var ce,de;!function(e){e.Paragraph="paragraph",e.Ol="ol",e.Ul="ul",e.Li="li",e.Link="link",e.Image="image"}(ce||(ce={})),function(e){e[e.Left=0]="Left",e[e.Right=1]="Right"}(de||(de={}));const ue={setProp(e,t,n){d.YR.setNodes(e,{[t]:n},{match:e=>d.xv.isText(e),split:!0})},toggleProp(e,t){const[n]=d.ML.nodes(e,{match:e=>d.xv.isText(e)&&!e[t]});d.YR.setNodes(e,{[t]:!!n},{match:e=>d.xv.isText(e),split:!0})},insertImage(e,t){t.forEach((t=>t&&d.YR.insertNodes(e,{type:ce.Paragraph,children:[{type:ce.Image,id:t,children:[{text:""}]}]},{select:!0})))},formatClear(e){d.YR.unsetNodes(e,["size","font","color","backgroundColor","italic","bold","strikethrough","underline"],{match:e=>d.xv.isText(e),split:!0})},isListType:(e,t)=>d.ML.isBlock(e,t)&&(t.type===ce.Ol||t.type===ce.Ul),setList(e,t){const[n]=d.ML.nodes(e,{match:t=>ue.isListType(e,t)});if(n){const{selection:n}=e,s=Math.min(n.anchor.path.length,n.focus.path.length),[r]=d.ML.nodes(e,{match:(t,n)=>ue.isListType(e,t)&&n.length<s,mode:"lowest"});r&&(r[0].type===t?d.YR.unwrapNodes(e,{at:r[1]}):d.YR.setNodes(e,{type:t},{at:r[1]}))}else d.YR.wrapNodes(e,{type:t})}},he=[{type:ce.Paragraph,children:[{text:""}]}];function ge({value:e=he,onChange:t}){const[n]=(0,r.useState)((()=>L((0,u.BU)((0,h.VC)((0,d.Jh)()))))),o=new g.Qj,i="string"==typeof e?function(e){const t=(new DOMParser).parseFromString(e,"text/html");return le(t.body)}(e):e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.mH,Object.assign({editor:n,value:i,onChange:e=>{o.notify(),t(e)}},{children:(0,s.jsx)(fe,{obs:o,editor:n})})),(0,s.jsx)("div",{style:{position:"sticky",top:0}})]})}function fe({obs:e,editor:t}){const[n,o]=(0,r.useState)(!0);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(re,{obs:e,editor:t,spellCheckToggle:o,spellCheck:n}),(0,s.jsx)(u.CX,{renderLeaf:A,renderElement:e=>((e,t)=>{switch(e.element.type){case ce.Ol:return(0,s.jsx)("ol",Object.assign({},e.attributes,{children:e.children}));case ce.Ul:return(0,s.jsx)("ul",Object.assign({},e.attributes,{children:e.children}));case ce.Li:return(0,s.jsx)("li",Object.assign({},e.attributes,{children:e.children}));case ce.Link:return(0,s.jsx)(Y,Object.assign({},e));case ce.Image:return(0,s.jsx)(I,Object.assign({},e,{editor:t}));case ce.Paragraph:default:return(0,s.jsx)(E,Object.assign({},e))}})(e,t),className:p,onSelect:()=>e.notify(),spellCheck:n,onDrop:e=>{e.dataTransfer.types.includes("text/plain")||e.dataTransfer.types.includes("text/html")||(e.preventDefault(),(0,w.TV)(e.dataTransfer,w.WD.Image).then((([...e])=>ue.insertImage(t,e))))},onKeyDown:e=>{if("Enter"===e.key&&!e.shiftKey){const[n]=d.ML.nodes(t,{match:e=>d.ML.isBlock(t,e)&&e.type===ce.Li});if(n){e.preventDefault();const[n]=d.ML.nodes(t,{match:e=>d.ML.isBlock(t,e)&&e.type===ce.Paragraph});d.ML.isStart(t,t.selection.anchor,n[1])?d.YR.unwrapNodes(t,{match:e=>ue.isListType(t,e),split:!0}):d.YR.splitNodes(t,{match:e=>d.ML.isBlock(t,e)&&e.type===ce.Li,mode:"lowest",always:!0})}}if("Tab"===e.key){e.preventDefault();const[n]=d.ML.nodes(t,{match:e=>ue.isListType(t,e),mode:"lowest"});n&&(e.shiftKey?d.YR.unwrapNodes(t,{at:n[1]}):d.YR.wrapNodes(t,{type:n[0].type},{split:!0}))}if(e.ctrlKey)switch(e.key){case"b":e.preventDefault(),ue.toggleProp(t,"bold");break;case"s":e.preventDefault(),ue.toggleProp(t,"strikethrough");break;case"u":e.preventDefault(),ue.toggleProp(t,"underline");break;case"i":e.preventDefault(),ue.toggleProp(t,"italic");break;case"z":e.preventDefault(),e.shiftKey?t.redo():t.undo();break;case"o":e.preventDefault(),ue.setList(t,ce.Ol);break;case"m":e.preventDefault(),ue.setList(t,ce.Ul);break;case"'":e.preventDefault(),o((e=>!e))}}})]})}const pe="TH1Yz",je="k35f4";var me=n(4357);function xe(){const e=(0,c.PD)("notepad");(0,g.SZ)(e.itemsModel);const{modify:t,created:n}=e.itemsModel.getCurrentItem(),{current:d,currentData:u}=e.itemsModel,{content:h,oldData:f}=u||{};return(0,s.jsxs)(i.Np,Object.assign({className:je},{children:[(0,s.jsxs)("div",Object.assign({style:{display:"flex",alignItems:"center"}},{children:[(0,s.jsx)(l.Hb,{model:e.itemsModel,current:d,defaultName:"Muistikirja "}),f&&(0,s.jsx)(o.hU,Object.assign({onClick:()=>(0,te.mN)((e=>(0,s.jsxs)(ne.hO,Object.assign({style:{maxWidth:800}},{children:[(0,s.jsx)(ne.Cd,{children:"Сохраненные данные"}),(0,s.jsx)(ne.pP,{children:(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:f}})}),(0,s.jsx)(ne.u2,{children:(0,s.jsx)(a.zx,Object.assign({onClick:e},{children:"Ok"}))})]}))))},{children:(0,s.jsx)(me.Z,{})}))]})),(0,s.jsx)(ge,{value:h,onChange:(0,r.useCallback)((t=>e.itemsModel.editData({content:t})),[d])},d)]}))}function be(){const e=(0,c.PD)("notepad");return(0,s.jsx)(l.sr,{model:e.itemsModel,deleteButton:!0,renderItem:({name:e,modify:t})=>{return(0,s.jsxs)(i.sg,Object.assign({className:pe},{children:[(0,s.jsx)("div",{children:e||"Muistikirja "}),(0,s.jsx)("div",{children:(n=t,new Date(n).toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"}))})]}));var n}})}},3e3:(e,t,n)=>{function s(e,t,n){return"#"+(16777216+(e<<16|t<<8|n<<0)).toString(16).slice(1)}function r(e){const t=e.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);if(t)return t.slice(1).map((e=>parseInt(e,16)));const n=e.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);return n?n.slice(1).map((e=>17*parseInt(e,16))):void 0}function o(e,t,n){var s,r,o;if(0==t)s=r=o=n;else{var i=function(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e},a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;s=i(l,a,e+1/3),r=i(l,a,e),o=i(l,a,e-1/3)}return[Math.round(255*s),Math.round(255*r),Math.round(255*o)]}function i(e,t,n){e/=255,t/=255,n/=255;var s,r,o=Math.max(e,t,n),i=Math.min(e,t,n),a=(o+i)/2;if(o==i)s=r=0;else{var l=o-i;switch(r=a>.5?l/(2-o-i):l/(o+i),o){case e:s=(t-n)/l+(t<n?6:0);break;case t:s=(n-e)/l+2;break;case n:s=(e-t)/l+4}s/=6}return[s,r,a]}function a(e,t,n){const s=t*Math.min(n,1-n)+n;return[e,s?2-2*n/s:0,s]}function l(e,t,n){const s=n-n*t/2,r=Math.min(s,1-s);return[e,r?(n-s)/r:0,s]}function c(e){const t=e.match(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i);if(t)return[+t[1],+t[2],+t[3]]}n.d(t,{CO:()=>s,EV:()=>a,XL:()=>i,cE:()=>c,pL:()=>l,wK:()=>r,wX:()=>o})}}]);