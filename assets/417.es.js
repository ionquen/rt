"use strict";(self.webpackChunkregtool=self.webpackChunkregtool||[]).push([[417],{7417:(s,e,l)=>{l.r(e),l.d(e,{Stopwatch:()=>j,StopwatchList:()=>g});var t=l(4246),i=l(3395),n=l(4764),a=l(3213),c=l(4847),o=l(866);const r="-tbWI",u="Cd9yP",d="_5q5HC",b="yC3FQ";var p=l(2667),m=l(8e3);function j(){const s=(0,m.PD)("stopwatch");(0,p.SZ)(s),(0,p.SZ)(s.itemsModel);const e=s.itemsModel.current,{laps:l,paused:i}=s.itemsModel.getItem(e);return(0,t.jsxs)(n._f,Object.assign({className:u,onKeyPress:function(e){e.preventDefault(),"Space"!==e.code&&"Enter"!==e.code||(e.shiftKey?s.lap():i?s.start():s.pause())},tabIndex:-1},{children:[(0,t.jsx)(a.S,{timestamp:null===i?l[0]:l[0]+Date.now()-i,paused:null!==i}),(0,t.jsxs)(n.gF,{children:[(0,t.jsx)(c.zx,Object.assign({color:"green",onClick:()=>s.start()},{children:"Empezar"})),(0,t.jsx)(c.zx,Object.assign({color:"yellow",onClick:()=>s.lap()},{children:"Círculo"})),(0,t.jsx)(c.zx,Object.assign({color:"blue",onClick:()=>s.pause()},{children:"Pausa"})),(0,t.jsx)(c.zx,Object.assign({color:"red",onClick:()=>s.reset()},{children:"Alivio"}))]}),(0,t.jsxs)(n.sg,{children:[(0,t.jsxs)("div",Object.assign({className:d},{children:[(0,t.jsx)("div",{children:"Círculo"}),(0,t.jsx)("div",{children:"Tiempo"}),(0,t.jsx)("div",{children:"Total"})]})),(0,t.jsxs)("div",Object.assign({className:d},{children:[(0,t.jsx)("div",Object.assign({className:b},{children:l.length})),(0,t.jsx)(a.S,{timestamp:null===i?l[l.length-1]:Date.now()-(i-l[l.length-1]),paused:null!==i}),(0,t.jsx)(a.S,{timestamp:null===i?l[0]:Date.now()-(i-l[0]),paused:null!==i})]})),(0,t.jsx)(o.n,{children:l.map(((s,e)=>0!==e?(0,t.jsx)(x,{timestamp:s,firstTimestamp:l[0],prevTimestamp:l[e-1],index:e},s):void 0)).reverse()})]})]}))}function g(){const s=(0,m.PD)("stopwatch");return(0,t.jsx)(i.sr,{model:s.itemsModel,createNull:!0,renderItem:({id:s,paused:e,laps:l})=>(0,t.jsxs)("div",Object.assign({className:r},{children:[(0,t.jsx)(a.S,{timestamp:null!==e?l[0]+Date.now()-e:l[0],paused:null!==e}),(0,t.jsx)(i.Tn,{color:null===e?"green":"blue",status:1})]}),s)})}function x({prevTimestamp:s,timestamp:e,firstTimestamp:l,index:i}){return(0,t.jsxs)("div",Object.assign({className:d},{children:[(0,t.jsx)("div",Object.assign({className:b},{children:i})),(0,t.jsx)(a.S,{timestamp:Date.now()-(e-s),paused:!0}),(0,t.jsx)(a.S,{timestamp:Date.now()-(e-l),paused:!0})]}))}}}]);