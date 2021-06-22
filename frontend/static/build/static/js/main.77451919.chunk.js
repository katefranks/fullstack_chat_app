(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{18:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),i=n(12),r=n.n(i),c=(n(18),n(13)),o=n(4),u=n(5),l=n(6),h=n(1),p=n(8),d=n(7),j=n(3),b=n.n(j),m=n(9),g=n.n(m),O=n(10),x=n(0),f=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},a.handleRegistration=a.handleRegistration.bind(Object(h.a)(a)),a.handleInput=a.handleInput.bind(Object(h.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(o.a)({},e.target.name,e.target.value))}},{key:"handleRegistration",value:function(){var e=Object(O.a)(g.a.mark((function e(t){var n,a,s,i,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:this.state.username,email:this.state.email,password1:this.state.password1,password2:this.state.password2},a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":b.a.get("csrftoken")},body:JSON.stringify(n)},s=function(e){return console.warn(e)},e.next=6,fetch("/rest-auth/registration/",a).catch(s);case 6:return i=e.sent,e.next=9,i.json().catch(s);case 9:r=e.sent,console.log(n),r.key&&b.a.set("Authorization","Token ".concat(r.key));case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(x.jsxs)("form",{onSubmit:this.handleRegistration,children:[Object(x.jsx)("label",{htmlFor:"",children:"Registration"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:"registration-input",placeholder:"username",name:"username",type:"text",value:this.state.username,onChange:this.handleInput}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:"registration-input",placeholder:"email",type:"email",name:"email",value:this.state.email,onChange:this.handleInput}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:"registration-input",placeholder:"password",type:"password",name:"password1",value:this.state.password1,onChange:this.handleInput}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:"registration-input",placeholder:"repeat password",type:"password",name:"password2",value:this.state.password2,onChange:this.handleInput}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{type:"submit",children:"Submit"})]})}}]),n}(s.a.Component),v=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password:""},a.handleLogin=a.handleLogin.bind(Object(h.a)(a)),a.handleInput=a.handleInput.bind(Object(h.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(o.a)({},e.target.name,e.target.value))}},{key:"handleLogin",value:function(){var e=Object(O.a)(g.a.mark((function e(t){var n,a,s,i,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:this.state.username,email:this.state.email,password:this.state.password},a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":b.a.get("csrftoken")},body:JSON.stringify(n)},s=function(e){return console.warn(e)},e.next=6,fetch("/rest-auth/login/",a).catch(s);case 6:return i=e.sent,e.next=9,i.json().catch(s);case 9:r=e.sent,console.log(n),r.key&&b.a.set("Authorization","Token ".concat(r.key));case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(x.jsxs)("form",{onSubmit:this.handleLogin,children:[Object(x.jsx)("label",{htmlFor:"",children:"Login"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:"login-input",placeholder:"username",name:"username",type:"text",value:this.state.username,onChange:this.handleInput}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:"login-input",placeholder:"email",type:"email",name:"email",value:this.state.email,onChange:this.handleInput}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:"login-input",placeholder:"password",type:"password",name:"password",value:this.state.password,onChange:this.handleInput}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{type:"submit",children:"Submit"})]})}}]),n}(s.a.Component),y=(n(21),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={instantMessages:[],instantMessage:[]},a.addInstantMessage=a.addInstantMessage.bind(Object(h.a)(a)),a.handleInput=a.handleInput.bind(Object(h.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/instantMessages/").then((function(e){return e.json()})).then((function(t){return e.setState({instantMessages:t})}))}},{key:"handleInput",value:function(e){this.setState(Object(o.a)({},e.target.name,e.target.value))}},{key:"addInstantMessage",value:function(e){var t=this;e.preventDefault();var n={username:this.state.username,message_text:this.state.message_text},a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":b.a.get("csrftoken")},body:JSON.stringify(n)};fetch("/api/v1/instantMessages/",a).then((function(e){return e.json()})).then((function(e){console.log(e);var n=Object(c.a)(t.state.instantMessages);n.push(e),t.setState({instantMessages:n})}))}},{key:"render",value:function(){var e=this.state.instantMessages.map((function(e){return Object(x.jsxs)("li",{className:"instant-messages",children:[Object(x.jsxs)("p",{children:["Sent at: ",e.created_at]}),Object(x.jsx)("p",{className:"user_image",children:e.username}),Object(x.jsx)("p",{className:"instant-message-text-display",children:e.message_text})]},e.id)}));return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(f,{}),Object(x.jsx)(v,{}),Object(x.jsxs)("div",{className:"chat-app-container",children:[Object(x.jsx)("header",{className:"chat-app-header",children:Object(x.jsx)("p",{id:"header-text",children:"Instant Messenger"})}),Object(x.jsx)("ul",{instantmessages:this.state.instantMessages,className:"instant-message-window",children:e}),Object(x.jsxs)("form",{className:"input-form",onSubmit:this.addInstantMessage,children:[Object(x.jsx)("input",{className:"input-box",type:"text",name:"message_text",value:this.state.message_text,onChange:this.handleInput,placeholder:"Enter Text"}),Object(x.jsx)("button",{className:"form-button",type:"submit",value:"Submit",children:"SEND"})]})]})]})}}]),n}(s.a.Component)),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};r.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root")),w()}},[[22,1,2]]]);
//# sourceMappingURL=main.77451919.chunk.js.map