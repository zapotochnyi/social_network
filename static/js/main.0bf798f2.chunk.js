(this.webpackJsonpprojects=this.webpackJsonpprojects||[]).push([[1],{11:function(t,e,n){t.exports={nav:"NavBar_nav__2VNRw",item:"NavBar_item__1XmBb",active:"NavBar_active__MCeek"}},143:function(t,e,n){},144:function(t,e,n){},145:function(t,e,n){},146:function(t,e,n){},147:function(t,e,n){},235:function(t,e,n){"use strict";n.r(e);var r=n(2),a=n(0),c=n.n(a),s=n(45),i=n.n(s),u=(n(143),n(34)),o=n(35),d=n(37),l=n(36),f=(n(144),n(6)),b=n(9),p=(n(145),function(){return Object(r.jsx)("div",{children:"News"})}),j=(n(146),function(){return Object(r.jsx)("div",{children:"Music"})}),O=(n(147),function(){return Object(r.jsx)("div",{children:"Settings"})}),h=n(22),g=n(11),m=n.n(g),A=n(33),v=n.n(A),x=n(85),_=n.n(x),w=function(t){return Object(r.jsxs)("div",{className:_.a.friend_item,children:[Object(r.jsx)("img",{src:t.avatar}),Object(r.jsx)("h5",{children:t.name})]})},y=function(t){var e=t.friends.map((function(t){return Object(r.jsx)(w,{avatar:t.avatar,name:t.name})}));return Object(r.jsxs)("div",{className:v.a.friends_bar,children:[Object(r.jsx)("div",{className:v.a.friends_link,children:Object(r.jsx)(b.b,{activeClassName:v.a.active,to:"/friends",children:"Friends"})}),Object(r.jsx)("div",{className:v.a.friends_wrapper,children:e})]})},E=function(t){return Object(r.jsxs)("nav",{className:m.a.nav,children:[Object(r.jsx)("div",{className:m.a.item,children:Object(r.jsx)(b.b,{activeClassName:m.a.active,to:"/profile",children:"Profile"})}),Object(r.jsx)("div",{className:m.a.item,children:Object(r.jsx)(b.b,{activeClassName:m.a.active,to:"/messages",children:"Messages"})}),Object(r.jsx)("div",{className:m.a.item,children:Object(r.jsx)(b.b,{activeClassName:m.a.active,to:"/news",children:"News"})}),Object(r.jsx)("div",{className:m.a.item,children:Object(r.jsx)(b.b,{activeClassName:m.a.active,to:"/music",children:"Music"})}),Object(r.jsx)("div",{className:m.a.item,children:Object(r.jsx)(b.b,{activeClassName:m.a.active,to:"/settings",children:"Settings"})}),Object(r.jsx)("div",{className:m.a.item,children:Object(r.jsx)(b.b,{activeClassName:m.a.active,to:"/users",children:"Users"})}),Object(r.jsx)(y,{friends:t.navBar.friends})]})},C=Object(h.b)((function(t){return{navBar:t.navBar}}),(function(t){return{}}))(E),I=n(3),N=n(46),k=n.n(N),U=n.p+"static/media/Logo.14ac0d29.png",S=n(60),B=function(t){return Object(r.jsxs)("header",{className:k.a.header,children:[Object(r.jsx)("img",{src:U}),Object(r.jsx)("div",{className:k.a.login_block,children:t.isAuth?Object(r.jsxs)("div",{className:k.a.user_name,children:[Object(r.jsx)(b.b,{to:"/profile/".concat(t.id),children:t.login}),Object(r.jsx)("img",{src:null!=t.photo?t.photo:S.a}),Object(r.jsx)("span",{onClick:t.logout,children:"Logout"})]}):Object(r.jsx)(b.b,{to:"/login",children:"Login"})})]})},T=n(26),P=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsx)(B,Object(I.a)({},this.props))}}]),n}(c.a.Component),F=Object(h.b)((function(t){return{isAuth:t.auth.isAuth,id:t.auth.id,login:t.auth.login,photo:t.auth.photo}}),{logout:T.d})(P),L="INITIALIZED_SUCCESS",D={initialized:!1},Q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case L:return Object(I.a)(Object(I.a)({},t),{},{initialized:!0});default:return t}},G=n(19),M=n(38),z=n(74),H=n(75),V={friends:[{id:"1",avatar:"https://pbs.twimg.com/profile_images/616054956215418880/yj3QVKom_400x400.jpg",name:"Vasya"},{id:"2",avatar:"https://www.meme-arsenal.com/memes/c7b480944fe90f7e7c5e1ba5c8200cd2.jpg",name:"Nata"},{id:"3",avatar:"https://apkshki.com/storage/5005/icon_5f2c4f42ad9c2_5005_w256.png",name:"Vasylyna"}]},Y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V;return t},K=n(82),X=n(88),Z=n(81),W=Object(G.c)({profile:z.b,messages:H.b,navBar:Y,usersPage:K.a,auth:T.a,form:Z.a,app:Q}),q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||G.d,J=Object(G.e)(W,q(Object(G.a)(X.a))),R=function(t){return function(e){return Object(r.jsx)(c.a.Suspense,{fallback:Object(r.jsx)(M.a,{}),children:Object(r.jsx)(t,Object(I.a)({},e))})}},$=c.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,321))})),tt=c.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,322))})),et=c.a.lazy((function(){return n.e(6).then(n.bind(null,323))})),nt=c.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,324))})),rt=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(F,{}),Object(r.jsx)(C,{}),Object(r.jsx)(f.b,{path:"/profile/:userId?",render:R($)}),Object(r.jsx)(f.b,{path:"/messages",render:R(tt)}),Object(r.jsx)(f.b,{path:"/news",render:function(){return Object(r.jsx)(p,{})}}),Object(r.jsx)(f.b,{path:"/music",render:function(){return Object(r.jsx)(j,{})}}),Object(r.jsx)(f.b,{path:"/settings",render:function(){return Object(r.jsx)(O,{})}}),Object(r.jsx)(f.b,{path:"/users",render:R(et)}),Object(r.jsx)(f.b,{path:"/login",render:R(nt)})]}):Object(r.jsx)(M.a,{})}}]),n}(c.a.Component),at=Object(G.d)(f.f,Object(h.b)((function(t){return{initialized:t.app.initialized}}),{initializeApp:function(){return function(t){t(Object(T.b)()).then((function(){t({type:L})}))}}}))(rt),ct=function(){return Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(b.a,{children:Object(r.jsx)(h.a,{store:J,children:Object(r.jsx)(at,{})})})})};i.a.render(Object(r.jsx)(ct,{}),document.getElementById("root"))},26:function(t,e,n){"use strict";n.d(e,"b",(function(){return b})),n.d(e,"c",(function(){return p})),n.d(e,"d",(function(){return j}));var r=n(7),a=n.n(r),c=n(17),s=n(3),i=n(8),u=n(47),o="SET_AUTH_USER_DATA",d="SET_USER_PHOTO",l={id:null,email:null,login:null,photo:null,isAuth:!1},f=function(t,e,n,r){return{type:o,payload:{id:t,email:e,login:n,isAuth:r}}},b=function(){return function(t){return i.a.getAuthUserData().then((function(e){if(0===e.data.resultCode){var n=e.data.data,r=n.id,a=n.email,c=n.login;t(f(r,a,c,!0))}}))}},p=function(t,e,n){return function(){var r=Object(c.a)(a.a.mark((function r(c){var s,o,d;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.login(t,e,n);case 2:0===(s=r.sent).data.resultCode?c(b()):(o=s.data.messages.length>0?s.data.messages:"Undefined error",d=Object(u.a)("login",{_error:o}),c(d));case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},j=function(){return function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.logout();case 2:0===t.sent.data.resultCode&&e(f(null,null,null,!1));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o:return Object(s.a)(Object(s.a)({},t),e.payload);case d:return Object(s.a)(Object(s.a)({},t),{},{photo:e.photo});default:return t}}},33:function(t,e,n){t.exports={friends_bar:"FriendsBar_friends_bar__3Pods",friends_link:"FriendsBar_friends_link__LkfAu",active:"FriendsBar_active__1_nNS",friends_wrapper:"FriendsBar_friends_wrapper__1b6_U"}},38:function(t,e,n){"use strict";var r=n(2),a=(n(0),n(87)),c=n.n(a),s=n.p+"static/media/loading1.6fdf6f7f.gif";e.a=function(t){return Object(r.jsx)("div",{className:c.a.preloader_wrap,children:Object(r.jsx)("img",{src:s})})}},46:function(t,e,n){t.exports={header:"Header_header__2fk-M",login_block:"Header_login_block__5hPw6",user_name:"Header_user_name__1eErY"}},60:function(t,e,n){"use strict";e.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAgMAAACJFjxpAAAADFBMVEXFxcX////p6enW1tbAmiBwAAAFiElEQVR4AezAgQAAAACAoP2pF6kAAAAAAAAAAAAAAIDbu2MkvY0jiuMWWQoUmI50BB+BgRTpCAz4G6C8CJDrC3AEXGKPoMTlYA/gAJfwETawI8cuBs5Nk2KtvfiLW+gLfK9m+r3X82G653+JP/zjF8afP1S//y+An4/i51//AsB4aH+/QPD6EQAY/zwZwN8BAP50bh786KP4+VT+3fs4/noigEc+jnHeJrzxX+NWMDDh4g8+EXcnLcC9T8U5S/CdT8bcUeBEIrwBOiI8ki7Ba5+NrePgWUy89/nYyxQ8Iw3f+pWY4h1gb3eAW7sDTPEOsLc7wK1TIeDuDB+I/OA1QOUHv/dFsZQkhKkh4QlEfOULYz2nGj2/Nn1LmwR/86VxlCoAW6kCsHRGANx1RgCMo5Qh2EsZgrXNQZZShp5Liv7Il8eIc5C91EHY2hxk6bwYmNscZIReDBwtCdhbErC1JGBpScBcOgFMLQsZMQs5Whayd+UQsLYsZGlZyNyykKllISNmIUfAwifw8NXvTojAjGFrdYi11SGWVoeYWx1i6lmQCiEjFkKOVgjZ+xxIhZCtFULWHkCqxCw9gNQKmP9vNHzipdEPrRcxtVbAeDkAvve0iM2QozVD9hfjhp4YP/UrkJYDbD2AtBxgfSkAvvHEeNcDSAsilgtAWxIy91J8AXgZAJ5e33+4tuACcAG4AFwALgBXRXQB6AFcB5MXAuA6nl9/0Vx/011/1V5/1/dfTPJvRtdnu/zL6beeFO/7r+fXBYbrEkt/j+i6ytXfpuvvE/ZXOnsA/a3a/l5xf7O6v1t+Xe/vOyz6HpO8yyboM8o7rfJes77bru83THk48p7TvOs27zvOO6/73vO++z7l4cgnMPQzKPopHC0N9noSSz6LJp/Gk88jyicy5TOp6qlc+VyyfDJbPpuuns6XzyfMJzTmMyrrKZ35nNJ8Ums+q7af1tvPK+4nNodEnPKp3fnc8npyez67/qVP7+/fL8hfcMjfsOhf8cjfMclfcnn9+BkOnLECP8Q58OYeyJ40eoyF6Ee/En/JHlP6mIlRVXprF4BxtAvArV0AxtEuALd2ARhHuwDc2gVgHPX/hFv9fMBddjIGeKg/WCxlCsI46u+Ga5mCcJd+sIG9UkGAW32ZbApFAHhod4Bb3eo04h3god0BbiUHYApVCNjbHeBW+QDAXT4a7qg7r7e214057vg0QhkEHkoSwq0kIdydXw4/Q3H8hjYJ3vL0WConBJhCHQaOToeBrU0BljYFmEoVgHGUKgAPnREAt84IgLuqFgAYSUEOAHszDwuAtSkHAZhLGYIpdCLgKGUIHtocZG1zkLmUIRhxDnJU1RDA1uYga5uDzKUOwhTnIEfnxcDe5iBrcyQAYGlzkKkUYhhxDrKXQgxbSwLWUohhbknA1JKAEZOAvSUBW0sC1pYEzC0JmFoSMMJyCDhaFrK3JGDtyiFgaVnI3LKQqWUhI2YhR8tC9paFrC0LWVoWMrcsZGpZyIhZyNGykL2rSIGtlQHWVgZYWhlgbmWAqZUBRiwDHK0MsLcywNbKAGsOoNUhllaHmFsdYmp1iBHrEEerQ+w5gFYI2VodYm11iKXVIeYcQCuETK0QMmIh5MgBtELI3gohWyuErDmAVolZWiFkzgG0SszUKjGjfj6gVmKOVonZcwCtFbB9HQC+ozWDbz1bvGu9iKW1AuYcQOtFTLEX1GbIaFegN0OOHEBrhuw5gNYM2XIArRuz5gDacoB3bTnAEktxXQ4wfw0AvveM8b4tiJjSJOwLIsbXsAKeNeKCiOO3D+AVbUl0AfjGs8ZPbUnIdgFoa1LWC0BblfMuB9AeC1j6gqQE0J9LmC8AOYD2ZMb7i4bt2ZTpWoHfPoB7Tj2fXzT8N1X41vkq/QHOAAAAAElFTkSuQmCC"},74:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"e",(function(){return j})),n.d(e,"c",(function(){return h})),n.d(e,"d",(function(){return g})),n.d(e,"f",(function(){return m}));var r=n(7),a=n.n(r),c=n(17),s=n(27),i=n(3),u=n(8),o="ADD-POST",d="SET_USER_PROFILE",l="SET_USER_STATUS",f="DELETE_POST",b={posts:[{id:1,text:"\u041f\u043e\u043a\u0430 \u043d\u0435 \u0443\u0437\u043d\u0430\u044e, \u0441\u043a\u043e\u043b\u044c\u043a\u043e %, \u0441\u043f\u0430\u0442\u044c \u043d\u0435 \u043f\u043e\u0439\u0434\u0443. \u0412\u043e\u043b\u043d\u0443\u044e\u0441\u044c \u0436\u0435",quantity_likes:108,quantity_reposts:25,avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-OX8ltKbi4MdCQa9BeV8l_36Z76lF4Qjeg&usqp=CAU"},{id:2,text:"\u0421 \u044e\u0431\u0438\u043b\u0435\u0435\u043c \u0412\u0435\u043b\u0438\u043a\u043e\u0439 \u041f\u043e\u0431\u0435\u0434\u044b \u0432\u0430\u0441! \u041d\u0435 \u0437\u0430\u0431\u0443\u0434\u044c\u0442\u0435, \u0432 22.00 \u043f\u0440\u0430\u0437\u0434\u043d\u0438\u0447\u043d\u044b\u0439 \u0441\u0430\u043b\u044e\u0442",quantity_likes:584,quantity_reposts:56,avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-OX8ltKbi4MdCQa9BeV8l_36Z76lF4Qjeg&usqp=CAU"},{id:3,text:"\u041f\u043e\u0440\u043e\u0448\u0435\u043d\u043a\u043e \u043d\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u0435\u0442 \u043c\u043d\u0435 \u043a\u0430\u0440\u0442\u043e\u0448\u043a\u0443: \u043b\u0438\u0431\u043e \u043e\u0441\u0435\u043d\u044c\u044e \u0443\u0431\u0435\u0440\u0443\u0442, \u043b\u0438\u0431\u043e \u0437\u0438\u043c\u043e\u0439 \u0437\u0430\u043c\u0451\u0440\u0437\u043d\u0435\u0442",quantity_likes:497,quantity_reposts:14,avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-OX8ltKbi4MdCQa9BeV8l_36Z76lF4Qjeg&usqp=CAU"}],profileInfo:null,status:""},p=function(t){return{type:o,newPostText:t}},j=function(t){return{type:d,profileInfo:t}},O=function(t){return{type:l,status:t}},h=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.getProfile(t);case 2:r=e.sent,n(j(r.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.getStatus(t);case 2:r=e.sent,n(O(r.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.updateStatus(t);case 2:0===e.sent.data.resultCode&&n(O(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o:var n={id:4,text:e.newPostText,quantity_likes:0,quantity_reposts:0,avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-OX8ltKbi4MdCQa9BeV8l_36Z76lF4Qjeg&usqp=CAU"};return Object(i.a)(Object(i.a)({},t),{},{posts:[].concat(Object(s.a)(t.posts),[n])});case d:return Object(i.a)(Object(i.a)({},t),{},{profileInfo:e.profileInfo});case l:return Object(i.a)(Object(i.a)({},t),{},{status:e.status});case f:return Object(i.a)(Object(i.a)({},t),{},{posts:t.posts.filter((function(t){return t.id!==e.postId}))});default:return t}}},75:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(27),a=n(3),c="SEND-MESSAGE",s={dialogs:[{id:"1",avatar:"https://pbs.twimg.com/profile_images/616054956215418880/yj3QVKom_400x400.jpg",name:"Vasya"},{id:"2",avatar:"https://www.meme-arsenal.com/memes/c7b480944fe90f7e7c5e1ba5c8200cd2.jpg",name:"Nata"},{id:"3",avatar:"https://apkshki.com/storage/5005/icon_5f2c4f42ad9c2_5005_w256.png",name:"Vasylyna"},{id:"4",avatar:"https://c-sf.smule.com/rs-s78/arr/bd/78/520dbe69-9dfc-4b93-b350-6d295a0f8cda.jpg",name:"Anton"},{id:"5",avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu3oMDPyVHYOoxYaud9ZjO9PG9hyT05_y0GQ&usqp=CAU",name:"Igor"},{id:"6",avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-fBwuripjp81ckv2C-eE_ieYXuEll5zEb1w&usqp=CAU",name:"Gosha"}],messagesIn:[{idIn:1,textIn:"Hello!"},{idIn:2,textIn:"How you doing?"},{idIn:3,textIn:"Lets go drink some russian vodka!!!"}],messagesOut:[{idOut:1,textOut:"Okay, lets go!"},{idOut:2,textOut:"YEEE,BOOOZEE!!"}]},i=function(t){return{type:c,newMessageText:t}};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c:var n={idOut:3,textOut:e.newMessageText};return Object(a.a)(Object(a.a)({},t),{},{messagesOut:[].concat(Object(r.a)(t.messagesOut),[n])});default:return t}}},8:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return i}));var r=n(86),a=n.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"8808ca5d-2f26-47ca-8b67-924c9874edc5"}}),c={getUsers:function(t,e){return a.get("users?count=".concat(t,"&page=").concat(e))},followUser:function(t){return a.post("follow/".concat(t))},unfollowUser:function(t){return a.delete("follow/".concat(t))}},s={getProfile:function(t){return a.get("profile/"+t)},getStatus:function(t){return a.get("profile/status/"+t)},updateStatus:function(t){return a.put("profile/status",{status:t})}},i={getAuthUserData:function(){return a.get("auth/me")},setAuthUserPhoto:function(t){return a.get("profile/"+t)},login:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:t,password:e,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},82:function(t,e,n){"use strict";n.d(e,"d",(function(){return A})),n.d(e,"e",(function(){return x})),n.d(e,"c",(function(){return _})),n.d(e,"b",(function(){return y})),n.d(e,"f",(function(){return E}));var r=n(7),a=n.n(r),c=n(17),s=n(27),i=n(3),u=n(8),o=function(t,e,n,r){return t.map((function(t){return t[e]===n?Object(i.a)(Object(i.a)({},t),r):t}))},d="FOLLOW",l="UNFOLLOW",f="SET_USERS",b="SET_CURRENT_PAGE",p="SET_TOTAL_USERS_COUNT",j="TOGGLE_IS_FETCHING",O="TOGGLE_BUTTON_DISABLE",h={users:[],pageSize:20,totalUsersCount:0,currentPage:1,isFetching:!0,buttonDisableInProgress:[],portionSize:20},g=function(t){return{type:d,userId:t}},m=function(t){return{type:l,userId:t}},A=function(t){return{type:b,currentPage:t}},v=function(t){return{type:j,isFetching:t}},x=function(t,e){return{type:O,isFetching:t,userId:e}},_=function(t,e){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(v(!0)),n.next=3,u.c.getUsers(t,e);case 3:c=n.sent,r(v(!1)),r((s=c.data.items,{type:f,users:s})),r((a=c.data.totalCount,{type:p,count:a}));case 7:case"end":return n.stop()}var a,s}),n)})));return function(t){return n.apply(this,arguments)}}()},w=function(){var t=Object(c.a)(a.a.mark((function t(e,n,r,c){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(x(!0,n)),t.next=3,r(n);case 3:0===t.sent.data.resultCode&&e(c(n)),e(x(!1,n));case 7:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}(),y=function(t){return function(e){w(e,t,u.c.followUser.bind(u.c),g)}},E=function(t){return function(e){w(e,t,u.c.unfollowUser.bind(u.c),m)}};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:return Object(i.a)(Object(i.a)({},t),{},{users:o(t.users,"id",e.userId,{followed:!0})});case l:return Object(i.a)(Object(i.a)({},t),{},{users:o(t.users,"id",e.userId,{followed:!1})});case f:return Object(i.a)(Object(i.a)({},t),{},{users:e.users});case b:return Object(i.a)(Object(i.a)({},t),{},{currentPage:e.currentPage});case p:return Object(i.a)(Object(i.a)({},t),{},{totalUsersCount:e.count});case j:return Object(i.a)(Object(i.a)({},t),{},{isFetching:e.isFetching});case O:return Object(i.a)(Object(i.a)({},t),{},{buttonDisableInProgress:e.isFetching?[].concat(Object(s.a)(t.buttonDisableInProgress),[e.userId]):t.buttonDisableInProgress.filter((function(t){return t!=e.userId}))});default:return t}}},85:function(t,e,n){t.exports={friend_item:"FriendItem_friend_item__1UwSY"}},87:function(t,e,n){t.exports={preloader_wrap:"Preloader_preloader_wrap__2L6z2"}}},[[235,2,3]]]);
//# sourceMappingURL=main.0bf798f2.chunk.js.map