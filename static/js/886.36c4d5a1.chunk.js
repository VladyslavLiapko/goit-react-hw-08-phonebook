"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[886],{8886:function(n,e,r){r.r(e),r.d(e,{default:function(){return q}});var t,i,o,a,s,c,u,p,x,l,d,f=r(5861),h=r(4687),b=r.n(h),m=r(168),v=r(8789),j=(0,v.ZP)("div")(t||(t=(0,m.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),g=(0,v.ZP)("button")(i||(i=(0,m.Z)(["\n  padding: 8px;\n  display: inline-flex;\n  font-size: 20px;\n  border: none;\n  background-color: #dc143c;\n  border-radius: 50%;\n  cursor: pointer;\n  color: white;\n"]))),y=(0,v.ZP)("span")(o||(o=(0,m.Z)(["\n  font-size: 20px;\n  font-weight: 400;\n  width: 180px;\n"]))),Z=(0,v.ZP)("span")(a||(a=(0,m.Z)(["\n  font-weight: 600;\n  font-size: 20px;\n"]))),w=r(5264),k=r(7247),P=r(9434),z=r(2195),C=r(184),F=function(n){var e=n.contact,r=(0,P.I0)(),t=function(){var n=(0,f.Z)(b().mark((function n(){return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r((0,z.GK)(e.id));case 3:w.Notify.success("Contact was delete from your phonebook"),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),w.Notify.failure("Something wrong. Please, try again");case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}();return(0,C.jsxs)(j,{children:[(0,C.jsxs)(y,{children:[e.name,":"]}),(0,C.jsx)(Z,{children:e.number}),(0,C.jsx)(g,{onClick:t,children:(0,C.jsx)(k.Z,{})})]})},N=(0,v.ZP)("ul")(s||(s=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  list-style: none;\n"]))),I=r(2791),K=r(4217),A=function(){var n=(0,P.I0)(),e=(0,P.v9)(K.Af),r=(0,P.v9)(K.zK).filter;if((0,I.useEffect)((function(){n((0,z.yF)())}),[n]),!e)return null;var t=e.filter((function(n){return n.name.toLowerCase().includes(r.toLowerCase())}));return(0,C.jsx)("div",{children:(0,C.jsx)(N,{children:t.map((function(n){return(0,C.jsx)("li",{children:(0,C.jsx)(F,{contact:n})},n.id)}))})})},D=r(4988),E=function(){var n=(0,P.I0)();return(0,C.jsxs)("div",{children:[(0,C.jsx)("label",{children:"Find contacts by name: "}),(0,C.jsx)("input",{type:"text",autoComplete:"off",onChange:function(e){e.preventDefault();var r=e.target.value;n((0,D.KJ)(r))},name:"name"})]})},H=(0,v.ZP)("form")(c||(c=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 250px;\n  // gap: 30px;\n  padding: 40px;\n  border-radius: 15px;\n  backdrop-filter: blur(50px);\n  box-shadow: 0px 2px 8px 1px grey;\n"]))),L=(0,v.ZP)("label")(u||(u=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 20px;\n  width: 350px;\n  gap: 10px;\n"]))),M=(0,v.ZP)("input")(p||(p=(0,m.Z)(["\n  padding: 10px 10px;\n  border: none;\n  font-size: 20px;\n  box-shadow: 0px 2px 18px 0px grey;\n  border-radius: 25px;\n  &:focus {\n    outline: none;\n  }\n"]))),S=(0,v.ZP)("button")(x||(x=(0,m.Z)(["\n  padding: 15px 25px;\n  font-size: 20px;\n  border: none;\n  background-color: #1E90FF;\n  border-radius: 25px;\n  cursor: pointer;\n  color: white;\n"]))),V=function(){var n=(0,P.v9)(K.Af),e=(0,P.I0)(),r=function(){var r=(0,f.Z)(b().mark((function r(t){var i,o,a,s;return b().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.preventDefault(),i=t.target,o=i.elements.name.value,a=i.elements.number.value,s={name:o,number:a},i.reset(),!n.find((function(n){return n.name===o}))){r.next=9;break}return w.Notify.warning("".concat(o," is already in contacts")),r.abrupt("return",!1);case 9:e((0,z.uK)(s)),i.reset();case 11:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}();return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(H,{onSubmit:r,autoComplete:"off",children:[(0,C.jsx)(L,{children:"Name"}),(0,C.jsx)("br",{}),(0,C.jsx)(M,{id:"name",type:"text",name:"name"}),(0,C.jsx)("br",{}),(0,C.jsx)(L,{children:"Number"}),(0,C.jsx)("br",{}),(0,C.jsx)(M,{id:"number",type:"tel",name:"number"}),(0,C.jsx)("br",{}),(0,C.jsx)(S,{type:"submit",children:"Add contact"})]})})},G=(0,v.ZP)("div")(l||(l=(0,m.Z)(["\n  padding: 158px 60px 0;\n  display: flex;\n  justify-content: space-around;\n"]))),J=(0,v.ZP)("div")(d||(d=(0,m.Z)(["\n  gap: 30px;\n  padding: 40px;\n  border-radius: 15px;\n  backdrop-filter: blur(50px);\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 2px 8px 1px grey;\n  max-height: 600px;\n  overflow-y: auto;\n"]))),q=function(){return(0,C.jsxs)(G,{children:[(0,C.jsx)(V,{}),(0,C.jsxs)(J,{children:[(0,C.jsx)(E,{}),(0,C.jsx)(A,{})]})]})}},7247:function(n,e,r){var t=r(4836);e.Z=void 0;var i=t(r(5649)),o=r(184),a=(0,i.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=a}}]);
//# sourceMappingURL=886.36c4d5a1.chunk.js.map