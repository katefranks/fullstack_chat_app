(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{19:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),i=n(13),r=n.n(i),c=(n(19),n(8)),o=n.n(c),u=n(10),l=n(4),h=n(5),d=n(1),b=n(7),j=n(6),p=n(3),g=n.n(p),m=n(9),O=n(0),f=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleInput=a.handleInput.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleRegistration(this.state)}},{key:"render",value:function(){var e=this;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsx)("label",{htmlFor:"",children:"Registration"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{className:"registration-input",placeholder:"username",name:"username",type:"text",value:this.state.username,onChange:this.handleInput}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{className:"registration-input",placeholder:"email",type:"email",name:"email",value:this.state.email,onChange:this.handleInput}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{className:"registration-input",placeholder:"password",type:"password",name:"password1",value:this.state.password1,onChange:this.handleInput}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{className:"registration-input",placeholder:"repeat password",type:"password",name:"password2",value:this.state.password2,onChange:this.handleInput}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{type:"submit",children:"Submit"})]}),Object(O.jsx)("button",{className:"toggle-login",onClick:function(){return e.props.handleNavigation("login")},children:"Current User Login"})]})}}]),n}(s.a.Component),v=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password:""},a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleInput=a.handleInput.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleLogin(this.state)}},{key:"render",value:function(){var e=this;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsx)("label",{htmlFor:"",children:"Login"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{className:"login-input",placeholder:"username",name:"username",type:"text",value:this.state.username,onChange:this.handleInput}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{className:"login-input",placeholder:"email",type:"email",name:"email",value:this.state.email,onChange:this.handleInput}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{className:"login-input",placeholder:"password",type:"password",name:"password",value:this.state.password,onChange:this.handleInput}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{type:"submit",children:"Submit"})]}),Object(O.jsx)("button",{className:"toggle-register",onClick:function(){return e.props.handleNavigation("register")},children:"Create New Account"})]})}}]),n}(s.a.Component),x=n(12),y=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={message_text:""},a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleInput=a.handleInput.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.addInstantMessage(this.state),this.setState({message_text:""})}},{key:"render",value:function(){return Object(O.jsxs)("form",{className:"input-form",onSubmit:this.handleSubmit,children:[Object(O.jsx)("input",{className:"input-box",type:"text",name:"message_text",value:this.state.message_text,onChange:this.handleInput,placeholder:"Enter Text"}),Object(O.jsx)("button",{className:"form-button",type:"submit",value:"Submit",children:"SEND"})]})}}]),n}(s.a.Component),k=n(14),S=n.n(k),N=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={instantMessages:[]},a.addInstantMessage=a.addInstantMessage.bind(Object(d.a)(a)),a.deleteMessage=a.deleteMessage.bind(Object(d.a)(a)),a.editMessage=a.editMessage.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"addInstantMessage",value:function(e){var t=this,n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(e)};fetch("/api/v1/instantMessages/",n).then((function(e){return e.json()})).then((function(e){console.log(e);var n=Object(x.a)(t.state.instantMessages);n.push(e),t.setState({instantMessages:n})}))}},{key:"deleteMessage",value:function(e){var t=this,n={method:"DELETE",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")}};fetch("/api/v1/instantMessages/".concat(e),n).then((function(n){var a=Object(x.a)(t.state.instantMessages),s=a.findIndex((function(t){return t.id===e}));a.splice(s,1),t.setState({instantMessages:a})})).catch((function(e){console.error("Error: ",e)}))}},{key:"editMessage",value:function(e){g.a.get("csrftoken"),JSON.stringify({message_text:""})}},{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/instantMessages/").then((function(e){return e.json()})).then((function(t){return e.setState({instantMessages:t})}))}},{key:"render",value:function(){var e=this,t=this.state.instantMessages.map((function(t){return Object(O.jsxs)("li",{className:"instant-messages",children:[Object(O.jsx)(S.a,{format:"MM/DD/YYYY  hh:mm:ss",children:t.created_at}),Object(O.jsx)("p",{className:"user_image",children:t.username}),Object(O.jsx)("p",{className:"instant-message-text-display",children:t.message_text}),Object(O.jsx)("button",{type:"button",onClick:function(){return e.deleteMessage(t.id)},children:"DELETE"}),Object(O.jsx)("button",{children:"EDIT"})]},t.id)}));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("ul",{instantmessages:this.state.instantMessages,className:"instant-message-window",children:t}),Object(O.jsx)(y,{addInstantMessage:this.addInstantMessage})]})}}]),n}(s.a.Component),C=(n(24),function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={selection:g.a.get("Authorization")?"messages":"login"},a.handleLogin=a.handleLogin.bind(Object(d.a)(a)),a.handleLogout=a.handleLogout.bind(Object(d.a)(a)),a.handleNavigation=a.handleNavigation.bind(Object(d.a)(a)),a.handleRegistration=a.handleRegistration.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"handleNavigation",value:function(e){this.setState({selection:e})}},{key:"handleLogin",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/login/",n).catch(a);case 4:if(!(s=e.sent).ok){e.next=13;break}return e.next=8,s.json().catch(a);case 8:i=e.sent,g.a.set("Authorization","Token ".concat(i.key)),this.setState({selection:"messages"}),e.next=14;break;case 13:alert("Incorrect Username or Password, Please Try Again!");case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleRegistration",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/registration/",n).catch(a);case 4:if(!(s=e.sent).ok){e.next=13;break}return e.next=8,s.json().catch(a);case 8:i=e.sent,g.a.set("Authorization","Token ".concat(i.key)),this.setState({selection:"messages"}),e.next=13;break;case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleLogout",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")}},n=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/logout/",t).catch(n);case 4:e.sent.ok&&(g.a.remove("Authorization"),this.setState({selection:"login"}));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"signin-view",children:["register"===this.state.selection&&Object(O.jsx)("div",{children:Object(O.jsx)(f,{handleRegistration:this.handleRegistration,handleNavigation:this.handleNavigation})}),"login"===this.state.selection&&Object(O.jsx)("div",{children:Object(O.jsx)(v,{handleLogin:this.handleLogin,handleNavigation:this.handleNavigation})}),Object(O.jsx)("button",{className:"logout-button",onClick:this.handleLogout,children:"Logout"})]}),"messages"===this.state.selection&&Object(O.jsxs)("div",{className:"chat-app-container",children:[Object(O.jsx)("header",{className:"chat-app-header",children:Object(O.jsx)("p",{id:"header-text",children:"Instant Messenger"})}),Object(O.jsx)(N,{}),"}"]})]})}}]),n}(s.a.Component)),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root")),w()}},[[25,1,2]]]);
//# sourceMappingURL=main.d1f91e63.chunk.js.map