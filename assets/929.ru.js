"use strict";(self.webpackChunkregtool=self.webpackChunkregtool||[]).push([[929],{386:(e,l,s)=>{s.r(l),s.d(l,{Bingo:()=>A,BingoList:()=>p});var t=s(4246),o=s(7378),n=s(4764),i=s(6223),c=s(3395),a=s(8746),r=s(5415),d=s(922),u=s(4794),b=s(3029),g=s(5622),h=s(6114),m=s(7663),x=s(8659),j=s(2667),f=s(598),v=s(50);const z={bingo:"fEz5D",table:"XfOPd",textarea:"fLJto",buttons:"rWTB0",mode:"X-sFd",check:"Ym3Fv",checkGreen:"cG0vT",checkRed:"nmSBh",order:"npxBm",bottomPanel:"-pbtG",listElem:"LpZ2L"};var y=s(317),C=s(3302);function A(){var e,l;const s=(0,x.PD)("bingo"),{itemsModel:a,settingsModel:r}=s;(0,j.SZ)(a);const{current:u,currentData:b}=a,h=(0,o.useMemo)((()=>new g.z(Object.assign({table:{}},b))),[u,b]);(0,j.SZ)(h),(0,j.yl)(h,(()=>{a.editData(h.data)}),[h]);const{columns:m,rows:y}=a.getCurrentItem(),{table:C,textStyle:A,cellStyle:k={},nameStyled:O}=h.data,[p,w]=(0,o.useState)(!1);(0,j.yl)(s.settingsModel,(()=>{w(s.settingsModel.get("mode"))}));const M=(0,o.useMemo)((()=>{var e;const l=[];for(let s=0;s<y;s++)for(let o=0;o<m;o++){const n=null===(e=null==C?void 0:C[s])||void 0===e?void 0:e[o],i=s*m+o+1,c=new g.z(n);l.push((0,t.jsx)(j.LE,Object.assign({callback:()=>{C[s]||(C[s]={}),C[s][o]=c.data,a.editData(h.data)},model:c},{children:(0,t.jsx)(S,{order:i,cell:c,mode:p,settings:h})}),u+"-"+s+"-"+o))}return(0,t.jsx)(t.Fragment,{children:l})}),[C,u,m,y,p]);return(0,t.jsx)(n.wv,Object.assign({className:z.bingo},{children:(0,t.jsxs)("div",{children:[(0,t.jsx)(c.Hb,{current:u,model:a,defaultName:"Бинго",style:O?{fontFamily:null==A?void 0:A.fontFamily,color:null==A?void 0:A.color,borderStyle:"solid",borderColor:null!==(e=k.borderColor)&&void 0!==e?e:"#000",borderWidth:void 0!==k.borderWidth?2*k.borderWidth:void 0,backgroundColor:k.backgroundColor}:void 0}),(0,t.jsx)("div",Object.assign({className:(0,v.cn)(z.table,p&&z.mode),style:Object.assign(Object.assign({},k),{fontFamily:null==A?void 0:A.fontFamily,color:null==A?void 0:A.color,fontSize:null==A?void 0:A.fontSize,gridTemplateColumns:`repeat(${m}, ${150+2*(null!==(l=k.borderWidth)&&void 0!==l?l:1)}px)`})},{children:M})),(0,t.jsxs)(n.gF,Object.assign({className:z.bottomPanel},{children:[(0,t.jsx)(i.zx,Object.assign({color:p?"orange":"blue",onClick:()=>r.set({mode:!p})},{children:p?"Режим редактирования":"Режим выделения"})),(0,t.jsx)(i.zx,Object.assign({color:"green",onClick:()=>(0,f.mN)((e=>(0,t.jsxs)(d.hO,Object.assign({style:{maxWidth:400}},{children:[(0,t.jsx)(d.Cd,{children:"Настройки"}),(0,t.jsx)(P,{settings:h}),(0,t.jsx)(d.u2,{children:(0,t.jsx)(i.zx,Object.assign({color:"blue",onClick:e},{children:"Закрыть"}))})]}))))},{children:"Настройки"}))]}))]})}))}function k(e,l=!1){if(l)return{maxWidth:"99%",maxHeight:"99%"};switch(e){case h.g$.Bottom:return{top:"31%"};case h.g$.Middle:return{top:"50%"};case h.g$.Top:return{top:"69%"}}}function S({order:e,cell:l,mode:s,settings:i}){var c,a;(0,j.SZ)(l);const{text:d,textStyle:g,cellStyle:x={},selected:A,image:S}=l.data,[P,O]=(0,o.useState)(0),[p,w]=(0,o.useState)(),M=(0,o.useRef)(),Z=(0,o.useRef)();(0,j.SZ)(i);const{textAlign:E,autoSize:N=!0,useCheckMark:W,orderStyle:_,displayOrder:D=!0,fullSizeImage:L}=i.data;(0,o.useLayoutEffect)((()=>{w(N?+getComputedStyle(Z.current).fontSize.match(/\d+/):void 0)}),[N]),(0,o.useLayoutEffect)((()=>{const e=M.current.offsetHeight,l=Z.current.offsetHeight;E===h.g$.Bottom?O(l<e?0:l-e):E===h.g$.Top?O(0):O(l<e?0:l/2-e/2)}),[p,d,E]),(0,o.useLayoutEffect)((()=>{const{offsetHeight:e,offsetWidth:l}=M.current,s=Z.current.offsetHeight,t=Z.current.offsetWidth,o=Math.min(s/(e+20),t/(l+20));w(N?e=>(0,v.uZ)(Math.round(e*o*2)/2,0,34):void 0)}),[d,N,E]);const[F,I]=(0,o.useState)(!1);return(0,t.jsxs)("div",Object.assign({className:(0,v.cn)(A&&z.selected),style:Object.assign({color:null==g?void 0:g.color},x),onClick:()=>s&&l.set({selected:!A})},{children:[S&&(0,t.jsx)(m.cu,{id:S,style:k(E,L)}),(0,t.jsx)(b.f,{className:z.textarea,contentEditable:!s,spellCheck:!1,inlineProps:{style:{backgroundColor:null!==(c=null==g?void 0:g.backgroundColor)&&void 0!==c?c:null===(a=i.data.textStyle)||void 0===a?void 0:a.backgroundColor}},style:{paddingTop:P,fontSize:p,overflow:N?"hidden":"auto"},content:d,onChange:e=>l.set({text:e}),refSpan:M,refDiv:Z,onDrop:e=>(0,m.TV)(e,m.WD.Image).then((([[e]])=>l.set({image:e}))),onFocus:()=>I(!0),onBlur:()=>I(!1)}),(0,t.jsx)(u.hU,Object.assign({circle:!0,display:F,className:z.buttons,onClick:e=>(0,f.mN)((()=>(0,t.jsx)(f.e1,Object.assign({e},{children:(0,t.jsxs)(n.Lr,{children:[(0,t.jsx)(r.E,{value:null==x?void 0:x.backgroundColor,i:"background",onChange:e=>l.set({cellStyle:{backgroundColor:e}})}),(0,t.jsx)(r.E,{value:null==g?void 0:g.color,i:"font",onChange:e=>l.set({textStyle:{color:e}})}),(0,t.jsx)(r.E,{value:null==g?void 0:g.backgroundColor,i:"underline",onChange:e=>l.set({textStyle:{backgroundColor:e}})}),(0,t.jsx)(r.E,{value:null==x?void 0:x.borderColor,i:"border",onChange:e=>l.set({cellStyle:{borderColor:e}})}),(0,t.jsx)(u.hU,Object.assign({onClick:()=>(0,m.Pq)({selected:[S],category:m.WD.Image,count:1}).then((([e])=>l.set({image:e})))},{children:(0,t.jsx)(y.Z,{})}))]})}))))},{children:(0,t.jsx)(C.Z,{})})),s&&A&&(0,t.jsx)(u.YJ,{checked:W,className:(0,v.cn)(z.check,W?z.checkGreen:z.checkRed)}),D&&(0,t.jsx)("div",Object.assign({className:z.order,style:(0,h.OX)(_)},{children:e}))]}))}function P({settings:e}){var l;const s=(0,x.PD)("bingo").itemsModel,{currentData:c,current:u}=s,b=s.getCurrentItem();(0,j.SZ)(s),(0,j.SZ)(e);const{table:g,cellStyle:m,textStyle:z,displayOrder:y=!0,useCheckMark:C=!1,orderStyle:A,autoSize:k=!0,textAlign:S=h.g$.Middle,fullSizeImage:P=!1,nameStyled:p=!1}=e.data;return(0,t.jsx)(d.pP,{children:(0,t.jsxs)(n.sg,{children:[(0,t.jsx)(n.__,Object.assign({label:"Число колонок"},{children:(0,t.jsx)(i.Af,{min:1,max:20,value:b.columns,onChange:e=>s.editItem(u,{columns:e})})})),(0,t.jsx)(n.__,Object.assign({label:"Число строк"},{children:(0,t.jsx)(i.Af,{min:1,max:20,value:b.rows,onChange:e=>s.editItem(u,{rows:e})})})),(0,t.jsxs)(n.ZA,Object.assign({label:"Общее"},{children:[(0,t.jsx)(n.__,Object.assign({label:"Изображения на всю ячейку"},{children:(0,t.jsx)(i.XZ,{checked:P,onChange:l=>e.set({fullSizeImage:l})})})),(0,t.jsx)(n.__,Object.assign({label:"Стилизовать название"},{children:(0,t.jsx)(i.XZ,{checked:p,onChange:l=>e.set({nameStyled:l})})}))]})),(0,t.jsx)(n.nA,Object.assign({label:"Порядковый номер",checked:y,onChange:l=>e.set({displayOrder:l})},{children:(0,t.jsx)(O,{settings:e,fieldName:"orderStyle"})})),(0,t.jsx)(n.__,Object.assign({label:"Помечать галочкой"},{children:(0,t.jsx)(i.XZ,{checked:C,onChange:l=>e.set({useCheckMark:l})})})),(0,t.jsx)(n.__,Object.assign({label:"Автоматически изменять размер"},{children:(0,t.jsx)(i.XZ,{checked:k,onChange:l=>e.set({autoSize:l})})})),(0,t.jsx)(n.ZA,Object.assign({label:"Оформление текста"},{children:(0,t.jsx)(O,{settings:e,fieldName:"textStyle"})})),(0,t.jsxs)(n.ZA,Object.assign({label:"Оформление ячейки"},{children:[(0,t.jsxs)(n.Lr,{children:[(0,t.jsx)(r.E,{value:null==m?void 0:m.backgroundColor,i:"background",onChange:l=>e.set({cellStyle:{backgroundColor:l}})}),(0,t.jsx)(r.E,{value:null==m?void 0:m.borderColor,i:"border",onChange:l=>e.set({cellStyle:{borderColor:l}})}),(0,t.jsx)(i.Af,{min:0,max:8,value:null!==(l=null==m?void 0:m.borderWidth)&&void 0!==l?l:1,onChange:l=>e.set({cellStyle:{borderWidth:l}})})]}),(0,t.jsx)(n.Lr,{children:(0,t.jsx)(h.Ve,{value:S,onChange:l=>e.set({textAlign:l})})})]})),(0,t.jsx)(i.zx,Object.assign({color:"red",onClick:()=>{const l=a.m.forCellExists(g,b.rows,b.columns,(e=>(null==e||delete e.textStyle,null==e||delete e.cellStyle,e)));e.setOnly({table:l})}},{children:"Сбросить стили ячеек"})),(0,t.jsx)(i.zx,Object.assign({color:"orange",onClick:()=>{const l=(0,v.Sy)([...Array(b.columns*b.rows).keys()]).reduce(((l,s,t)=>{var o,n;const i=t%b.columns,c=Math.floor(t/b.columns),r=s%b.columns,d=Math.floor(s/b.columns),u=null===(n=null===(o=e.data.table)||void 0===o?void 0:o[c])||void 0===n?void 0:n[i];return a.m.setCell(l,d,r,u)}),{});e.setOnly({table:l})}},{children:"Перемешать ячейки"})),(0,t.jsx)(i.zx,Object.assign({color:"orange",onClick:()=>{(0,f.mN)((e=>{const[l,s]=(0,o.useState)(b.columns*b.rows);return(0,t.jsxs)(d.hO,Object.assign({style:{maxWidth:400}},{children:[(0,t.jsx)(n.__,Object.assign({label:"Максимальное число"},{children:(0,t.jsx)(i.Af,{value:l,min:0,onChange:s})})),(0,t.jsx)(d.u2,{children:(0,t.jsx)(i.zx,Object.assign({color:"green",onClick:()=>e(l)},{children:"Применить"}))})]}))})).then((l=>{const s=[];if(l>b.columns*b.rows)for(;;){const e=~~(Math.random()*l);if(s.includes(e)||s.push(e),s.length>=b.columns*b.rows)break}else s.push(...(0,v.Sy)([...Array(Math.min(b.columns*b.rows,l)).keys()]));let t=0;const o=a.m.forCell(g,b.rows,b.columns,((e={})=>(void 0!==(null==e?void 0:e.text)&&""!==e.text||void 0===s[t]||(e.text=s[t].toString(),t++),e)));e.setOnly({table:o})}))}},{children:"Заполнить пустые ячейки случайными числами"}))]})})}function O({settings:e,fieldName:l}){(0,j.SZ)(e);const s=e.data[l];return(0,t.jsxs)(n.Lr,{children:[(0,t.jsx)(r.E,{value:null==s?void 0:s.color,i:"font",onChange:s=>e.set({[l]:{color:s}})}),(0,t.jsx)(r.E,{value:null==s?void 0:s.backgroundColor,i:"background",onChange:s=>e.set({[l]:{backgroundColor:s}})}),(0,t.jsx)(h.rs,{value:null==s?void 0:s.fontSize,onChange:s=>e.set({[l]:{fontSize:s}}),nullable:!0}),(0,t.jsx)(h.mi,{value:null==s?void 0:s.fontFamily,onChange:s=>e.set({[l]:{fontFamily:s}}),nullable:!0})]})}function p(){return(0,t.jsx)(c.sr,{model:(0,x.PD)("bingo").itemsModel,deleteButton:!0,renderItem:({name:e,rows:l,columns:s})=>(0,t.jsx)(w,{name:e||"Бинго",columns:s,rows:l})})}function w({name:e,rows:l,columns:s}){return(0,t.jsxs)("div",Object.assign({className:z.listElem},{children:[(0,t.jsx)("div",{children:e}),(0,t.jsxs)("div",{children:[s," x ",l]})]}))}}}]);