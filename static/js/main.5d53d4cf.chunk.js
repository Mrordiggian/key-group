(this["webpackJsonpkey-group"]=this["webpackJsonpkey-group"]||[]).push([[0],{141:function(e,t,n){e.exports=n(268)},146:function(e,t,n){},147:function(e,t,n){},268:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(47),c=n.n(o),l=(n(146),n(147),n(24)),u=n(18),s=n(54),i=n.n(s),m=n(9),p=n(51),f=n(48);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={isAuth:localStorage.getItem("username")},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_LOGIN":return localStorage.setItem("username","Admin"),localStorage.setItem("password","123456"),E({},e,{isAuth:!0});case"LOGOUT":return localStorage.removeItem("username"),E({},e,{isAuth:!1});default:return e}},h=Object(m.b)((function(e){return{isAuth:e.auth.isAuth}}),{logout:function(){return{type:"LOGOUT"}}})((function(e){var t=e.logout,n=e.isAuth;return a.a.createElement("div",{className:i.a.header},a.a.createElement(u.b,{to:"/"},"Main"),a.a.createElement(u.b,{to:"/posts"},"Posts"),a.a.createElement(u.b,{to:"/profile"},"Profile"),n&&a.a.createElement("span",{onClick:t,className:i.a.logout},"Logout"),!n&&a.a.createElement(u.b,{className:i.a.login,to:"/login"},"Login"))})),g=function(){return a.a.createElement("div",{className:"main"},a.a.createElement("h1",null,"Main"))},v=n(74),y=n.n(v),w=n(112),P=n(113),j=function(){return P.get("https://jsonplaceholder.typicode.com/posts")};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _={posts:null,pertOfPosts:null,counter:null},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_POSTS":return N({},e,{posts:t.posts,pertOfPosts:t.posts.slice(0,19),counter:0});case"SET_NEW_PART_POSTS":return e.counter>e.posts.length?e:N({},e,{counter:e.counter+10,pertOfPosts:e.posts.slice(0,e.counter)});default:return e}},k=Object(m.b)((function(e){return{pertOfPosts:e.posts.pertOfPosts}}),{getPosts:function(){return function(){var e=Object(w.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:n=e.sent,t({type:"SET_POSTS",posts:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getNewPartPosts:function(){return{type:"SET_NEW_PART_POSTS"}}})((function(e){var t=e.pertOfPosts,n=e.getPosts,o=e.getNewPartPosts;return Object(r.useEffect)((function(){n()}),[n]),Object(r.useEffect)((function(){function e(){document.documentElement.getBoundingClientRect().bottom<document.documentElement.clientHeight+100&&o()}return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),a.a.createElement("div",{className:"posts"},t&&t.map((function(e){return a.a.createElement(T,{key:e.id,title:e.title,body:e.body})})))})),T=function(e){var t=e.title,n=e.body;return a.a.createElement("div",{className:"post"},a.a.createElement("div",{className:"post_title"},t),a.a.createElement("div",{className:"post_body"},n))},D=n(7),L=Object(D.d)((function(e){return Object(m.b)((function(e){return{isAuth:e.auth.isAuth}}))((function(t){return t.isAuth?a.a.createElement(e,t):a.a.createElement(l.a,{to:"/login"})}))}))((function(){return a.a.createElement("div",{className:"profile"},a.a.createElement("h1",null,"Profile"))})),x=n(107),G=n(108),I=Object(m.b)((function(e){return{isAuth:e.auth.isAuth}}),{sendLogin:function(e){return function(t){"Admin"===e.username&&"123456"===e.password?t(function(e){return{type:"SEND_LOGIN",dataLogin:e}}(e)):t(Object(f.a)("login",{_error:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0432\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0435 \u0432\u0435\u0440\u043d\u043e "}))}}})((function(e){var t=e.isAuth,n=e.sendLogin;return t?a.a.createElement(l.a,{to:"/profile"}):a.a.createElement("div",{className:"main"},a.a.createElement(H,{onSubmit:function(e){n(e)}}))})),H=Object(G.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return a.a.createElement("form",{onSubmit:t},a.a.createElement("div",null,"Username"),a.a.createElement(x.a,{validate:[],name:"username",type:"text",placeholder:"username",component:"input"}),a.a.createElement("div",null,"Password"),a.a.createElement(x.a,{validate:[],name:"password",type:"password",placeholder:"password",component:"input"}),n&&a.a.createElement("div",null,n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))}));var U=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(h,null),a.a.createElement("div",{className:"App-content"},a.a.createElement(l.d,null,a.a.createElement(l.b,{exact:!0,path:"/",render:function(){return a.a.createElement(g,null)}}),a.a.createElement(l.b,{path:"/posts",render:function(){return a.a.createElement(k,null)}}),a.a.createElement(l.b,{path:"/profile",render:function(){return a.a.createElement(L,null)}}),a.a.createElement(l.b,{path:"/login",render:function(){return a.a.createElement(I,null)}}),a.a.createElement(l.b,{path:"*",render:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"404 NOT FOUND"))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=n(115),B=n(109),R=Object(D.c)({auth:O,posts:A,form:B.a}),C=Object(D.e)(R,Object(D.a)(W.a));c.a.render(a.a.createElement(u.a,null,a.a.createElement(m.a,{store:C},a.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})),window.store=C},54:function(e,t,n){e.exports={header:"Header_header__3ZfwD",logout:"Header_logout__2GdG5",login:"Header_login__2kGxk"}}},[[141,1,2]]]);
//# sourceMappingURL=main.5d53d4cf.chunk.js.map