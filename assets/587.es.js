"use strict";(self.webpackChunkregtool=self.webpackChunkregtool||[]).push([[587],{9008:(e,t,o)=>{o.r(t),o.d(t,{Maps:()=>S,MapsList:()=>C});var l=o(4246),s=o(7378),n=o(4764),r=o(3395),c=o(5415),i=o(4794),a=o(3029),d=o(5622),u=o(6114),g=o(7663),m=o(82),b=o(2667),h=o(598),f=o(50);const v={bingo:"TAcOS",table:"v3Moq",textarea:"jkGb-",buttons:"qmsdn",mode:"QoXYD",check:"gi05r",checkGreen:"J18bM",checkRed:"wSquL",order:"DStlp",bottomPanel:"UUhmb",listElem:"Pqdqr"};var j=o(317),x=o(3302);function S(){var e,t;const o=(0,m.PD)("bingo"),{itemsModel:c,settingsModel:i}=o;(0,b.SZ)(c);const{current:a,currentData:u}=c,g=(0,s.useMemo)((()=>new d.z(Object.assign({table:{}},u))),[a,u]);(0,b.SZ)(g);const{columns:h,rows:j}=c.getCurrentItem(),{table:x,textStyle:S,cellStyle:y={},nameStyled:C}=g.data,[p,O]=(0,s.useState)(!1),M=(0,s.useMemo)((()=>{var e;const t=[];for(let o=0;o<j;o++)for(let s=0;s<h;s++){const n=null===(e=null==x?void 0:x[o])||void 0===e?void 0:e[s],r=o*h+s+1,i=new d.z(n);t.push((0,l.jsx)(b.LE,Object.assign({callback:()=>{x[o]||(x[o]={}),x[o][s]=i.data,c.editData(g.data)},model:i},{children:(0,l.jsx)(k,{order:r,cell:i,mode:p,settings:g})}),a+"-"+o+"-"+s))}return(0,l.jsx)(l.Fragment,{children:t})}),[x,a,h,j,p]);return(0,l.jsx)(n.wv,Object.assign({className:v.bingo},{children:(0,l.jsxs)("div",{children:[(0,l.jsx)(r.Hb,{current:a,model:c,defaultName:"loc.bingo",style:C?{fontFamily:null==S?void 0:S.fontFamily,color:null==S?void 0:S.color,borderStyle:"solid",borderColor:null!==(e=y.borderColor)&&void 0!==e?e:"#000",borderWidth:void 0!==y.borderWidth?2*y.borderWidth:void 0,backgroundColor:y.backgroundColor}:void 0}),(0,l.jsx)("div",Object.assign({className:(0,f.cn)(v.table,p&&v.mode),style:Object.assign(Object.assign({},y),{fontFamily:null==S?void 0:S.fontFamily,color:null==S?void 0:S.color,fontSize:null==S?void 0:S.fontSize,gridTemplateColumns:`repeat(${h}, ${150+2*(null!==(t=y.borderWidth)&&void 0!==t?t:1)}px)`})},{children:M}))]})}))}function y(e,t=!1){if(t)return{maxWidth:"99%",maxHeight:"99%"};switch(e){case u.g$.Bottom:return{top:"31%"};case u.g$.Middle:return{top:"50%"};case u.g$.Top:return{top:"69%"}}}function k({order:e,cell:t,mode:o,settings:r}){var d,m;(0,b.SZ)(t);const{text:S,textStyle:k,cellStyle:C={},selected:p,image:O}=t.data,[M,w]=(0,s.useState)(0),[E,z]=(0,s.useState)(),D=(0,s.useRef)(),N=(0,s.useRef)();(0,b.SZ)(r);const{textAlign:W,autoSize:P=!0,useCheckMark:L,orderStyle:Z,displayOrder:$=!0,fullSizeImage:q}=r.data;(0,s.useLayoutEffect)((()=>{z(P?+getComputedStyle(N.current).fontSize.match(/\d+/):void 0)}),[P]),(0,s.useLayoutEffect)((()=>{const e=D.current.offsetHeight,t=N.current.offsetHeight;W===u.g$.Bottom?w(t<e?0:t-e):W===u.g$.Top?w(0):w(t<e?0:t/2-e/2)}),[E,S,W]),(0,s.useLayoutEffect)((()=>{const{offsetHeight:e,offsetWidth:t}=D.current,o=N.current.offsetHeight,l=N.current.offsetWidth,s=Math.min(o/(e+20),l/(t+20));z(P?e=>(0,f.uZ)(Math.round(e*s*2)/2,0,34):void 0)}),[S,P,W]);const[F,H]=(0,s.useState)(!1);return(0,l.jsxs)("div",Object.assign({className:(0,f.cn)(p&&v.selected),style:Object.assign({color:null==k?void 0:k.color},C),onClick:()=>o&&t.set({selected:!p})},{children:[O&&(0,l.jsx)(g.cu,{id:O,style:y(W,q)}),(0,l.jsx)(a.f,{className:v.textarea,contentEditable:!o,spellCheck:!1,inlineProps:{style:{backgroundColor:null!==(d=null==k?void 0:k.backgroundColor)&&void 0!==d?d:null===(m=r.data.textStyle)||void 0===m?void 0:m.backgroundColor}},style:{paddingTop:M,fontSize:E,overflow:P?"hidden":"auto"},content:S,onChange:e=>t.set({text:e}),refSpan:D,refDiv:N,onDrop:e=>(0,g.TV)(e,g.WD.Image).then((([[e]])=>t.set({image:e}))),onFocus:()=>H(!0),onBlur:()=>H(!1)}),(0,l.jsx)(i.hU,Object.assign({circle:!0,display:F,className:v.buttons,onClick:e=>(0,h.mN)((()=>(0,l.jsx)(h.e1,Object.assign({e},{children:(0,l.jsxs)(n.Lr,{children:[(0,l.jsx)(c.E,{value:null==C?void 0:C.backgroundColor,i:"background",onChange:e=>t.set({cellStyle:{backgroundColor:e}})}),(0,l.jsx)(c.E,{value:null==k?void 0:k.color,i:"font",onChange:e=>t.set({textStyle:{color:e}})}),(0,l.jsx)(c.E,{value:null==k?void 0:k.backgroundColor,i:"underline",onChange:e=>t.set({textStyle:{backgroundColor:e}})}),(0,l.jsx)(c.E,{value:null==C?void 0:C.borderColor,i:"border",onChange:e=>t.set({cellStyle:{borderColor:e}})}),(0,l.jsx)(i.hU,Object.assign({onClick:()=>(0,g.Pq)({selected:[O],category:g.WD.Image,count:1}).then((([e])=>t.set({image:e})))},{children:(0,l.jsx)(j.Z,{})}))]})}))))},{children:(0,l.jsx)(x.Z,{})})),o&&p&&(0,l.jsx)(i.YJ,{checked:L,className:(0,f.cn)(v.check,L?v.checkGreen:v.checkRed)}),$&&(0,l.jsx)("div",Object.assign({className:v.order,style:(0,u.OX)(Z)},{children:e}))]}))}function C(){return(0,l.jsx)(r.sr,{model:(0,m.PD)("maps").itemsModel,deleteButton:!0,renderItem:({name:e,rows:t,columns:o})=>(0,l.jsx)(p,{name:e||"mano",columns:o,rows:t})})}function p({name:e,rows:t,columns:o}){return(0,l.jsxs)("div",Object.assign({className:v.listElem},{children:[(0,l.jsx)("div",{children:e}),(0,l.jsxs)("div",{children:[o," x ",t]})]}))}}}]);