"use strict";(self.webpackChunkregtool=self.webpackChunkregtool||[]).push([[880],{3880:(e,n,c)=>{c.r(n),c.d(n,{Calc:()=>m,CalcList:()=>p});var r=c(4246),s=c(7378),t=c(4764),a=c(4847);const l="_041Of",i="_9vJWE",u="xEV9a",o="NFqi8";var d=c(2667),g=c(8e3);function m(){const e=(0,g.PD)("calc");(0,d.SZ)(e);const n=(0,s.useRef)(null);return(0,s.useEffect)((()=>{e.ref=n}),[e,n]),(0,s.useEffect)((()=>{e.focusInput()}),[]),(0,r.jsx)(t.wv,Object.assign({tabIndex:-1,onKeyDown:function({code:n,shiftKey:c=!1,altKey:r=!1,ctrlKey:s=!1}){r||e.inputCode(function(e,n,c){switch(e){case"Backspace":return"--";case"Delete":return"delete";case"Numpad1":return"1";case"Numpad2":return"2";case"Numpad3":return"3";case"Numpad4":return"4";case"Numpad5":return"5";case"Numpad6":return"6";case"Numpad7":return"7";case"Numpad8":return"8";case"Numpad9":return"9";case"Numpad0":return"0";case"NumpadDecimal":return".";case"NumpadEnter":return"=";case"NumpadAdd":return"+";case"NumpadSubtract":return"-";case"NumpadMultiply":return"*";case"NumpadDivide":return"/";case"Digit0":return n?")":"0";case"Digit1":return n?"!":"1";case"Digit2":return"2";case"Digit3":return"3";case"Digit4":return"4";case"Digit5":return n?"%":"5";case"Digit6":return n?"^":"6";case"Digit7":return"7";case"Digit8":return n?"*":"8";case"Digit9":return n?"(":"9";case"Minus":return"-";case"Equal":if(n)return"+";case"Enter":return"=";case"Period":return".";case"Slash":return"/";case"KeyS":return"sin";case"KeyC":return c?void 0:"cos";case"KeyT":return"tan";case"KeyP":return"pi";case"KeyE":return"e";case"KeyL":return n?"log":"ln";case"KeyM":return n?"rm":"m";case"KeyR":return"rand";case"Home":return"c";default:return"none"}}(n,c,s))}},{children:(0,r.jsxs)("div",Object.assign({className:l},{children:[(0,r.jsxs)("div",Object.assign({className:e.animateResult?i:""},{children:[(0,r.jsx)("div",{children:(0,r.jsx)("input",{type:"text",ref:n,value:e.input,onChange:function(n){if(n.target.value.length-1===e.input.length||n.target.value.length+1===e.input.length)return!1;e.calc(n.target.value)}})}),(0,r.jsx)("div",Object.assign({"data-tooltip":"Copiar",onClick:j},{children:e.result}))]})),(0,r.jsx)(h,{model:e})]}))}))}function p(){const e=(0,g.PD)("calc");return(0,r.jsxs)("div",Object.assign({className:u},{children:[(0,r.jsx)(b,{label:"Historia",model:e.itemsHistoryModel,parentModel:e}),(0,r.jsx)(b,{label:"Memoria",model:e.itemsMemoryModel,parentModel:e})]}))}function b({label:e,model:n,parentModel:c}){return(0,d.SZ)(n),(0,r.jsxs)("div",{children:[(0,r.jsxs)(t.gF,{children:[(0,r.jsx)("div",{children:e}),0!==n.items.length&&(0,r.jsx)(a.zx,Object.assign({onClick:()=>n.clear()},{children:"Limpiar"}))]}),(0,r.jsxs)("div",{children:[n.items.map((({id:e,query:n,result:s})=>(0,r.jsxs)("div",{children:[n&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",Object.assign({onClick:()=>c.calc(String(n))},{children:n})),(0,r.jsx)("span",{children:" = "})]}),(0,r.jsx)("div",Object.assign({onClick:()=>c.inputCode(String(s))},{children:s}))]},e))),0===n.items.length?(0,r.jsx)("div",Object.assign({className:o},{children:"Está vacío"})):null]})]})}function h({model:e}){return(0,r.jsx)("div",{children:[{c:"ln",n:"ln"},{c:"(",n:"("},{c:")",n:")"},{c:"c",n:"C"},{c:"m",n:"M"},{c:"--",n:"←"},{c:"%",n:"%"},{c:"log",n:"log"},{c:"tan",n:"tg"},{c:"^",n:"^"},{c:"7",n:"7",color:!0},{c:"8",n:"8",color:!0},{c:"9",n:"9",color:!0},{c:"/",n:"/"},{c:"e",n:"e"},{c:"cos",n:"cos"},{c:"sqrt",n:"√"},{c:"4",n:"4",color:!0},{c:"5",n:"5",color:!0},{c:"6",n:"6",color:!0},{c:"*",n:"*"},{c:"pi",n:"π"},{c:"sin",n:"sin"},{c:"!",n:"!"},{c:"1",n:"1",color:!0},{c:"2",n:"2",color:!0},{c:"3",n:"3",color:!0},{c:"-",n:"-"},{},{c:"rm",n:"RM"},{c:"rand",n:"rand"},{c:".",n:".",color:!0},{c:"0",n:"0",color:!0},{c:"=",n:"=",color:!1},{c:"+",n:"+"}].map((({n,c,color:s},t)=>(0,r.jsx)(a.zx,Object.assign({color:void 0===s?"gray":s?"white":"orange",onClick:()=>e.inputCode(c)},{children:n}),t)))})}function j(e){navigator.clipboard.writeText(e.target.innerText)}}}]);