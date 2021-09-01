(this.webpackJsonpknittygritty=this.webpackJsonpknittygritty||[]).push([[0],{27:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var i,r,c,o,s,a,l,d,u=n(2),j=n.n(u),b=n(16),h=n.n(b),f=(n(27),n(5)),m=n(3),O=n(8),x=n(6),g=n(4),v=m.c.div(i||(i=Object(g.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    margin: 0;\n    padding: 0;\n    position: relative;\n"]))),p=m.c.div(r||(r=Object(g.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    background: linear-gradient(90deg, #f88a71, #ff6271);\n    width: 100%;\n    /* padding: 1.5rem 0 7rem; */\n    padding: ",";\n    color: ",";\n\n    h1 {\n        font-size: 3rem;\n    }\n\n    #title {\n        color: inherit;\n        font-size: 1.5rem;\n        margin: 0.5rem 0;\n        line-height: 1;\n        padding: 0;\n        background-color: transparent;\n        text-align: center;\n        font-family: inherit;\n        border: 0;\n    }\n    #title:focus {\n        outline: none;\n        border-bottom: 2px solid white;\n    }\n\n    #stitches {\n        font-size: 5rem;\n        margin: 0.5rem 0;\n        line-height: 1;\n    }\n"])),(function(t){return"small"===t.size?"1.5rem 0 4rem":"1.5rem 0 7rem"}),(function(t){return t.theme.white})),w=m.c.div(c||(c=Object(g.a)(["\n    position: relative;\n    top: -7rem;\n    width: 100%;\n"]))),y=m.c.div(o||(o=Object(g.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: ",";\n    align-items: center;\n    margin: 1.5rem 0;\n    padding: 1rem;\n    width: calc(100% - 2rem);\n    border: 1px solid darkgray;\n    border-radius: ",";\n    margin-left: ",";\n    background-color: #FCFCFC;\n    cursor: ",";\n\n    & > * {\n        margin: 0 0.75rem;\n    }\n    p {\n        line-height: 1;\n        font-size: ",";\n        color: ",";\n    }\n    #save-text {\n        font-size: 1.5rem;\n    }\n    svg {\n        color: ",";\n    }\n    #stitch-plus {\n        margin-left: 0.25rem;\n        color: "," !important;\n    }\n    #notes-header {\n        font-size: 1.5rem;\n        margin: 0.5rem 0 1rem;\n    }\n    #notes {\n        font-size: 1.5rem;\n        font-family: inherit;\n        border: 0;\n        width: 100%;\n        overflow-y: hidden;\n    }\n"])),(function(t){return t.justifyContent||"flex-start"}),(function(t){return"left"===t.side?"0 15px 15px 0":"15px 0 0 15px"}),(function(t){return"left"===t.side?0:"2rem"}),(function(t){return t.button?"pointer":"auto"}),(function(t){return"small"===t.fontSize?"2rem":"2.5rem"}),(function(t){return t.theme.darkGray}),(function(t){return t.theme.darkGray}),(function(t){return t.theme.themeLight})),k=m.c.div(s||(s=Object(g.a)(["\n    cursor: pointer;\n    & > svg {\n        height: ",";\n        width: auto;\n    }\n"])),(function(t){return"xsmall"===t.size?"2rem":"small"===t.size?"3rem":"medium"===t.size?"4rem":"7rem"})),C=m.c.div(a||(a=Object(g.a)(["\n    position: absolute;\n    top: 1rem;\n    left: 1rem;\n    cursor: pointer;\n\n    & > svg {\n        height: 3rem;\n        width: auto;\n        color: ",";\n    }\n"])),(function(t){return t.theme.white})),z=n(9),S=n(21),F=n(20),D=n(1),G=m.c.path(l||(l=Object(g.a)(["\n    stroke: ",";\n    stroke-width: 10;\n"])),(function(t){return t.theme.darkGray})),B=m.c.path(d||(d=Object(g.a)(["\n    fill: ",";\n"])),(function(t){return t.theme.darkGray}));function I(){return Object(D.jsxs)("svg",{width:"127",height:"141",viewBox:"0 0 127 141",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(D.jsx)(G,{d:"M59.5868 22.3456C87.6086 22.3456 108.164 43.6974 108.164 71.6973C108.164 99.6972 88.1085 122.197 59.5868 122.197C59.5868 122.197 47.1085 122.197 37.1086 117.198","stroke-width":"9"}),Object(D.jsx)(B,{d:"M41.4333 23.4007L63.9333 42.8863L63.9333 3.91512L41.4333 23.4007Z"}),Object(D.jsx)(G,{d:"M34.6066 29.2405C7.10847 42.6975 -1.38971 86.6545 25.6085 109.697C25.6085 109.697 30.7064 114.541 39.4625 118.26","stroke-width":"9"})]})}function N(t){var e,n,i,r,c,o=t.data,s=t.project,a=t.navigateBack,l=t.setData,d=Object(u.useState)(null!==(e=null===s||void 0===s?void 0:s.title)&&void 0!==e?e:""),j=Object(f.a)(d,2),b=j[0],h=j[1],m=Object(u.useState)(null!==(n=null===s||void 0===s?void 0:s.titleDisplay)&&void 0!==n?n:""),g=Object(f.a)(m,2),G=g[0],B=g[1],N=Object(u.useState)(null!==(i=null===s||void 0===s?void 0:s.stitchCount)&&void 0!==i?i:0),M=Object(f.a)(N,2),P=M[0],J=M[1],L=Object(u.useState)(null!==(r=null===s||void 0===s?void 0:s.rowCount)&&void 0!==r?r:0),A=Object(f.a)(L,2),E=A[0],U=A[1],W=Object(u.useState)(null!==(c=null===s||void 0===s?void 0:s.notes)&&void 0!==c?c:""),H=Object(f.a)(W,2),K=H[0],R=H[1],T=Object(u.useState)(!0),Z=Object(f.a)(T,2),q=Z[0],Q=Z[1],V=function(){var t=Object(x.a)(Object(x.a)({},s),{},{stitchCount:P,rowCount:E,title:b,titleDisplay:G,notes:K}),e=Object(O.a)(o).filter((function(t){return t.id!==s.id}));l(e.concat(Object(x.a)({},t))),Q(!0)};return Object(D.jsxs)(v,{children:[Object(D.jsx)(C,{onClick:a,children:Object(D.jsx)(F.a,{})}),Object(D.jsxs)(p,{children:[Object(D.jsx)("input",{id:"title",type:"text",value:G,onFocus:function(){B(b)},onChange:function(t){return e=t.target.value,Q(!1),h(e),void B(e);var e},onBlur:function(t){var e;0===(e=t.target.value).length?(h(""),B("...")):e.length>21&&(h(e),B(e.substr(0,21)+"..."))}}),Object(D.jsx)("p",{id:"stitches",children:P})]}),Object(D.jsxs)(w,{children:[Object(D.jsxs)(y,{id:"stitch-banner",side:"left",children:[Object(D.jsx)(k,{size:"medium",id:"stitch-reset",onClick:function(){window.confirm("Are you sure you want to reset the stitch count?")&&(J(0),Q(!1))},children:Object(D.jsx)(I,{})}),Object(D.jsx)(k,{size:"medium",id:"stitch-minus",onClick:function(){Q(!1),J(P>0?P-1:0)},children:Object(D.jsx)(z.a,{})}),Object(D.jsx)(k,{size:"large",id:"stitch-plus",onClick:function(){Q(!1),J(P+1)},children:Object(D.jsx)(z.b,{})})]}),Object(D.jsxs)(y,{id:"row-banner",side:"right",children:[Object(D.jsx)(k,{size:"small",id:"row-reset",onClick:function(){window.confirm("Are you sure you want to reset the row count?")&&(U(0),Q(!1))},children:Object(D.jsx)(I,{})}),Object(D.jsx)(k,{size:"small",id:"row-minus",onClick:function(){Q(!1),U(E>0?E-1:0)},children:Object(D.jsx)(z.a,{})}),Object(D.jsx)(k,{size:"small",id:"row-plus",onClick:function(){Q(!1),U(E+1)},children:Object(D.jsx)(z.b,{})}),Object(D.jsx)("p",{id:"rows",children:E})]}),Object(D.jsxs)(y,{button:!0,id:"save-banner",side:"right",onClick:V,children:[Object(D.jsx)(k,{size:"small",id:"save",onClick:V,children:Object(D.jsx)(S.a,{})}),Object(D.jsx)("p",{id:"save-text",children:q?"Saved":"Save Progress"})]}),Object(D.jsx)(y,{id:"notes-banner",side:"right",children:Object(D.jsxs)("div",{style:{width:"100%"},children:[Object(D.jsx)("p",{id:"notes-header",children:"Project Notes:"}),Object(D.jsx)("textarea",{id:"notes",value:K,rows:"2",onChange:function(t){return e=t.target.value,Q(!1),void R(e);var e},placeholder:"Click to enter project notes"})]})})]})]})}var M,P=n(14),J=n(22),L=function t(e){Object(J.a)(this,t),this.id=e,this.stitchCount=0,this.rowCount=0,this.title="New Project",this.titleDisplay="New Project"};function A(t){var e=t.data,n=t.selectProject,i=t.setData;return Object(D.jsxs)(v,{children:[Object(D.jsx)(p,{size:"small",children:Object(D.jsx)("h1",{children:"Knitty Gritty"})}),Object(D.jsxs)(w,{children:[Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsx)(y,{side:"left",children:Object(D.jsx)("p",{children:"Select a Project:"})}),(null!==e&&void 0!==e?e:[]).map((function(t){var r=t.id,c=t.titleDisplay;return Object(D.jsxs)(y,{button:!0,side:"right",fontSize:"small",justifyContent:"space-between",onClick:function(){return n(r)},children:[Object(D.jsx)("p",{children:c}),Object(D.jsx)(k,{size:"xsmall",id:"delete-".concat(r),onClick:function(){return function(t){var n,r=null!==(n=e.find((function(e){return e.id===t})))&&void 0!==n?n:{title:"[Error]"};if(window.confirm("Are you sure you want to delete this project?\nTitle: ".concat(r.title))){var c=Object(O.a)(e).filter((function(e){return e.id!==t}));i(c)}return!1}(r)},children:Object(D.jsx)(P.b,{})})]},r)})),Object(D.jsxs)(y,{button:!0,side:"right",fontSize:"small",justifyContent:"space-between",onClick:function(){var t;do{t=Math.floor(1e7*Math.random())}while(e.find((function(e){return e.id===t})));var r=new L(t),c=[].concat(Object(O.a)(e),[Object(x.a)({},r)]);i(c),n(t)},children:[Object(D.jsx)("p",{children:"Create New"}),Object(D.jsx)(k,{size:"xsmall",id:"create-new-project",children:Object(D.jsx)(P.a,{})})]})]})]})}var E=Object(m.b)(M||(M=Object(g.a)(["\n    * {\n        box-sizing: border-box;\n    }\n\n    body {\n      margin: 0;\n      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n        sans-serif;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n      background-color: ",";\n      font-size: 14px;\n    }\n"])),(function(t){return t.theme.offWhite})),U={darkGray:"#333",lightGray:"#777",offWhite:"#F3F3F3",white:"#FFF",themeDark:"#F95B69",themeLight:"#FB7262"};function W(){var t=Object(u.useState)(null),e=Object(f.a)(t,2),n=e[0],i=e[1],r=Object(u.useState)(null),c=Object(f.a)(r,2),o=c[0],s=c[1],a={getItem:function(){var t=window.localStorage.getItem("knittyGritty-v2");return t&&"object"===typeof JSON.parse(t)?JSON.parse(t):[]},setItem:function(t){window.localStorage.setItem("knittyGritty-v2",JSON.stringify(t))}},l=a.getItem,d=a.setItem;Object(u.useEffect)((function(){var t=l();s(t)}),[]);var j=Object(u.useCallback)((function(){return i(null)}),[i]),b=Object(u.useCallback)((function(t){return i(t)}),[i]),h=Object(u.useCallback)((function(t){s(t),d(t)}),[s,d]);return Object(D.jsxs)(m.a,{theme:U,children:[Object(D.jsx)(E,{}),n&&o.find((function(t){return t.id===n}))?Object(D.jsx)(N,{data:o,project:o.find((function(t){return t.id===n})),navigateBack:j,setData:h}):Object(D.jsx)(A,{data:o,setData:h,selectProject:b})]})}h.a.render(Object(D.jsx)(j.a.StrictMode,{children:Object(D.jsx)(W,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.b6c268a4.chunk.js.map