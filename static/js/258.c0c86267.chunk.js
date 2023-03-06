"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[258],{8258:function(n,e,r){r.r(e),r.d(e,{default:function(){return $}});var t,a,o,i,s,c,l,d,x,p,u,m,h=r(4270),f=r(2791),b=r(9434),g=r(5309),j=r(3634),Z=r(5218),v=r(5705),y=r(5282),w=(r(7427),r(2946)),P=r(168),z=r(6444),k=(0,z.ZP)(v.l0)(t||(t=(0,P.Z)(["\n  margin-bottom: 30px;\n  padding: 10px;\n  border-radius: 5px;\n  border: 2px solid #000000;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 20px;\n"]))),C=z.ZP.label(a||(a=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 18px;\n"]))),F=(0,z.ZP)(v.gN)(o||(o=(0,P.Z)(["\n  margin-top: 10px;\n  padding: 5px;\n  width: 200px;\n  color: #0000ff;\n  border: 1px solid #9ba2a8;\n  font-size: 16px;\n\n  :hover,\n  :focus {\n    box-shadow: 0px 1px 5px 2px #9ba2a8;\n  }\n"]))),A=z.ZP.p(i||(i=(0,P.Z)(["\n  font-size: 14px;\n  color: red;\n"]))),N=z.ZP.button(s||(s=(0,P.Z)(["\n  padding: 5px 20px;\n  display: inline;\n  align-items: center;\n  text-align: center;\n  font-family: inherit;\n  font-size: 16px;\n  border: 2px solid #9ba2a8;\n  border-radius: 5px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 250ms ease, box-shadow 250ms ease;\n\n  :hover,\n  :focus {\n    background-color: #b2b2ed;\n    box-shadow: 0px 4px 10px 4px #9ba2a8;\n  }\n"]))),q=r(184),I=y.object().shape({name:y.string().min(3).required(),number:y.string().phone("UA").required()}),_=function(n){var e=n.name;return(0,q.jsx)(v.Bc,{name:e,render:function(n){return(0,q.jsx)(A,{children:n})}})},L={name:"",number:""},S=function(){var n=(0,b.I0)(),e=(0,b.v9)(w.Af);return(0,q.jsx)(v.J9,{initialValues:L,validationSchema:I,onSubmit:function(r,t){var a=t.resetForm;!function(r){var t={name:r.name,number:r.number},a=t.name.toLowerCase(),o=e.some((function(n){var e=n.name;return a===e.toLowerCase()})),i=e.some((function(n){var e=n.number;return t.number===e})),s=e.find((function(n){var e=n.number;return t.number===e}));o?Z.ZP.error('"'.concat(t.name,'" is already in contacts')):i?Z.ZP.error('Number "'.concat(t.number,'" is already saved as "').concat(s.name,'"')):(Z.ZP.success('"'.concat(t.name,'" successfully added!')),n((0,j.uK)(t)))}(r),a()},children:(0,q.jsxs)(k,{children:[(0,q.jsxs)(C,{htmlFor:"name",children:["Name",(0,q.jsx)(F,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Name",required:!0}),(0,q.jsx)(_,{name:"name"})]}),(0,q.jsxs)(C,{htmlFor:"number",children:["Number",(0,q.jsx)(F,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Number",required:!0}),(0,q.jsx)(_,{name:"number"})]}),(0,q.jsx)(N,{type:"submit",children:"Add contact"})]})})},T=r(4808),B=z.ZP.label(c||(c=(0,P.Z)(["\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  gap: 5px;\n  font-size: 18px;\n"]))),D=z.ZP.input(l||(l=(0,P.Z)(["\n  padding: 5px;\n  color: #1f6451;\n  border: 1px solid #9ba2a8;\n\n  font-size: 16px;\n\n  :hover,\n  :focus {\n    box-shadow: 0px 1px 5px 2px #9ba2a8;\n  }\n"]))),J=function(){var n=(0,b.v9)(w.AD),e=(0,b.I0)();return(0,q.jsxs)(B,{htmlFor:"filter",children:["Find contacts by name",(0,q.jsx)(D,{type:"text",name:"filter",value:n,onChange:function(n){e((0,T.T)(n.currentTarget.value))},placeholder:"Put the name for search"})]})},K=z.ZP.div(d||(d=(0,P.Z)(["\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  border: 1px solid #9ba2a8;\n  font-size: 18px;\n  font-weight: 500;\n\n  :not(:last-child) {\n    border-bottom: none;\n  }\n"]))),E=z.ZP.span(x||(x=(0,P.Z)(["\n  margin-left: auto;\n"]))),G=z.ZP.button(p||(p=(0,P.Z)(["\n  margin-left: 40px;\n  padding: 0px 20px;\n  display: inline;\n  align-items: center;\n  text-align: center;\n  font-family: inherit;\n  font-size: 14px;\n  border: 2px solid #9ba2a8;\n  border-radius: 5px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 250ms ease, box-shadow 250ms ease;\n\n  :hover,\n  :focus {\n    background-color: #e26565;\n    box-shadow: 0px 4px 10px 4px #9ba2a8;\n  }\n"]))),M=function(n){var e=n.contact,r=e.id,t=e.name,a=e.number,o=(0,b.I0)();return(0,q.jsxs)(K,{children:[(0,q.jsxs)("span",{children:[t,": "]}),(0,q.jsx)(E,{children:a}),(0,q.jsx)(G,{type:"button",onClick:function(){return o((0,j.GK)(r))},children:"Delete"})]})},U=z.ZP.ul(u||(u=(0,P.Z)(["\n  padding: 5px;\n  height: 300px;\n  border-radius: 5px;\n  border: 2px solid #000000;\n  overflow-y: scroll;\n"]))),V=z.ZP.p(m||(m=(0,P.Z)(["\n  color: #330101;\n  font-size: 20px;\n  font-weight: 500;\n"]))),W=function(){var n=(0,g.g)().filter,e=(0,g.g)().visibleContacts;return e.length?(0,q.jsx)(q.Fragment,{children:(0,q.jsx)(U,{children:e.sort((function(n,e){return n.name.localeCompare(e.name)})).map((function(n){return(0,q.jsx)("li",{children:(0,q.jsx)(M,{contact:n})},n.id)}))})}):(0,q.jsx)(q.Fragment,{children:(0,q.jsxs)(V,{children:['No matches found for "',n,'"!']})})},Y=r(7129),$=function(){var n=(0,b.I0)(),e=(0,g.g)().items,r=(0,g.g)().isLoading,t=(0,g.g)().error,a=(0,g.g)().filter;return(0,f.useEffect)((function(){n((0,j.yF)())}),[n]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(h.q,{children:(0,q.jsx)("title",{children:"Your contacts"})}),(0,q.jsx)(S,{}),t&&(0,q.jsx)("p",{children:t}),e.length||a?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(J,{}),r&&!t&&(0,q.jsx)(Y.a,{}),!r&&!t&&(0,q.jsx)(W,{})]}):(0,q.jsx)("p",{style:{color:"#330101",fontSize:"20px",fontWeight:"500"},children:"There are no phone numbers in Contacts!"})]})}}}]);
//# sourceMappingURL=258.c0c86267.chunk.js.map