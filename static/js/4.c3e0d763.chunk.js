(this.webpackJsonpprojects=this.webpackJsonpprojects||[]).push([[4],{236:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return j})),n.d(e,"c",(function(){return p}));var s=n(3),r=n(2),a=n(237),i=(n(0),n(238)),c=n.n(i),o=n(111),u=function(t){t.input;var e=t.meta,n=e.touched,s=e.error,i=Object(a.a)(t,["input","meta"]),o=n&&s;return Object(r.jsxs)("div",{className:c.a.form_control+" "+(o?c.a.error:""),children:[Object(r.jsx)("div",{children:i.children}),o&&Object(r.jsx)("span",{children:s})]})},l=function(t){var e=t.input,n=(t.meta,Object(a.a)(t,["input","meta"]));return Object(r.jsx)(u,Object(s.a)(Object(s.a)({},t),{},{children:Object(r.jsx)("input",Object(s.a)(Object(s.a)({},e),n))}))},j=function(t){var e=t.input,n=(t.meta,Object(a.a)(t,["input","meta"]));return Object(r.jsx)(u,Object(s.a)(Object(s.a)({},t),{},{children:Object(r.jsx)("textarea",Object(s.a)(Object(s.a)({},e),n))}))},p=function(t,e,n,a){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(r.jsxs)("div",{children:[Object(r.jsx)(o.a,Object(s.a)({component:t,name:e,placeholder:n,validate:a},i))," ",c]})}},238:function(t,e,n){t.exports={form_control:"FormControls_form_control__3mBCI",error:"FormControls_error__1gX1z"}},240:function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var s=function(t){if(!t)return"Field is required"},r=function(t){return function(e){if(e&&e.length>t)return"Max length is ".concat(t," symbols")}},a=function(t){return function(e){if(e&&e.length<t)return"Min length is ".concat(t)}}},241:function(t,e,n){"use strict";var s=n(3),r=n(2),a=n(34),i=n(35),c=n(37),o=n(36),u=n(0),l=n.n(u),j=n(6),p=n(22),b=function(t){return{isAuth:t.auth.isAuth}};e.a=function(t){var e=function(e){Object(c.a)(u,e);var n=Object(o.a)(u);function u(){return Object(a.a)(this,u),n.apply(this,arguments)}return Object(i.a)(u,[{key:"render",value:function(){return this.props.isAuth?Object(r.jsx)(t,Object(s.a)({},this.props)):Object(r.jsx)(j.a,{to:"/login"})}}]),u}(l.a.Component);return Object(p.b)(b)(e)}},247:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var s=n(61);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],s=!0,r=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(s=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);s=!0);}catch(o){r=!0,a=o}finally{try{s||null==c.return||c.return()}finally{if(r)throw a}}return n}}(t,e)||Object(s.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},260:function(t,e,n){t.exports={profile_wrapper:"Profile_profile_wrapper__1DxPX"}},261:function(t,e,n){t.exports={main_img:"MainImage_main_img__1zUMd"}},262:function(t,e,n){t.exports={description:"Description_description__11nJ2",avatar:"Description_avatar__3FFMv",information:"Description_information__363JW",name_status:"Description_name_status__eA6SL",item:"Description_item__2H_mh"}},263:function(t,e,n){t.exports={status_wrapper:"ProfileStatus_status_wrapper__31Imj"}},264:function(t,e,n){t.exports={posts:"MyPosts_posts__2akrP"}},265:function(t,e,n){t.exports={publications:"Post_publications__R8mWL",post_item:"Post_post_item__3WBZO",avatar_mini:"Post_avatar_mini__sN3q-",post_body:"Post_post_body__3yYAl",text:"Post_text__1SqDo",buttons:"Post_buttons__2wnYM",btn_wrap:"Post_btn_wrap__X8YXB",btn_item:"Post_btn_item__1ZW3Y",quantity:"Post_quantity__vPb2D"}},266:function(t,e,n){t.exports={header:"NewPost_header__2DWL9"}},267:function(t,e,n){t.exports={new_post:"NewPostForm_new_post__1r6jd",textarea:"NewPostForm_textarea__312p6",publish_btn:"NewPostForm_publish_btn__irFRD"}},321:function(t,e,n){"use strict";n.r(e);var s=n(2),r=n(3),a=n(34),i=n(35),c=n(37),o=n(36),u=n(0),l=n.n(u),j=n(74),p=n(22),b=n(260),f=n.n(b),d=n(261),_=n.n(d),m=function(){return Object(s.jsx)("div",{className:_.a.main_img,children:Object(s.jsx)("img",{src:"https://avatanplus.com/files/resources/original/57bdc0a0e2b11156bd3874a1.png",alt:""})})},h=n(262),O=n.n(h),x=n(60),v=function(){return Object(s.jsx)("img",{src:x.a})},g=n(247),y=n(263),N=n.n(y),P=function(t){var e=Object(u.useState)(!1),n=Object(g.a)(e,2),r=n[0],a=n[1],i=Object(u.useState)(t.status),c=Object(g.a)(i,2),o=c[0],l=c[1];Object(u.useEffect)((function(){l(t.status)}),[t.status]);return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:N.a.status_wrapper,children:r?Object(s.jsx)("input",{onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){a(!1),t.updateUserStatus(o)},value:o}):Object(s.jsx)("span",{onClick:function(){a(!0)},children:t.status||"there will be status"})})})},w=function(t){return Object(s.jsxs)("div",{className:O.a.description,children:[Object(s.jsx)("div",{className:O.a.avatar,children:t.profileInfo.photos.large?Object(s.jsx)("img",{src:t.profileInfo.photos.large}):Object(s.jsx)(v,{})}),Object(s.jsxs)("div",{className:O.a.information,children:[Object(s.jsxs)("div",{className:O.a.name_status,children:[Object(s.jsx)("h2",{children:t.profileInfo.fullName}),Object(s.jsx)(P,{status:t.status,updateUserStatus:t.updateUserStatus})]}),Object(s.jsx)("div",{className:O.a.item,children:t.profileInfo.aboutMe}),Object(s.jsx)("div",{className:O.a.item,children:t.profileInfo.lookingForAJob?Object(s.jsx)("span",{children:t.profileInfo.lookingForAJobDescription}):null}),Object(s.jsxs)("div",{className:O.a.item,children:[t.profileInfo.contacts.facebook?Object(s.jsxs)("a",{href:t.profileInfo.contacts.facebook,target:"_blank",children:["facebook,"," "]}):null,t.profileInfo.contacts.vk?Object(s.jsxs)("a",{href:t.profileInfo.contacts.vk,target:"_blank",children:["vk,"," "]}):null,t.profileInfo.contacts.twitter?Object(s.jsxs)("a",{href:t.profileInfo.contacts.twitter,target:"_blank",children:["twitter,"," "]}):null,t.profileInfo.contacts.instagram?Object(s.jsxs)("a",{href:t.profileInfo.contacts.instagram,target:"_blank",children:["instagram,"," "]}):null,t.profileInfo.contacts.github?Object(s.jsx)("a",{href:t.profileInfo.contacts.github,target:"_blank",children:"github"}):null]})]})]})},I=n(264),k=n.n(I),S=n(265),U=n.n(S),F=function(t){return Object(s.jsx)("div",{className:U.a.publications,children:Object(s.jsxs)("div",{className:U.a.post_item,children:[Object(s.jsx)("img",{className:U.a.avatar_mini,src:t.avatar}),Object(s.jsxs)("div",{className:U.a.post_body,children:[Object(s.jsx)("h4",{children:t.name}),Object(s.jsx)("div",{className:U.a.text,children:t.text}),Object(s.jsxs)("div",{className:U.a.buttons,children:[Object(s.jsxs)("div",{className:U.a.btn_wrap,children:[Object(s.jsx)("img",{className:U.a.btn_item,src:"https://cdn0.iconfinder.com/data/icons/instagram-ui-1/24/Instagram-UI_like-512.png",alt:""}),Object(s.jsx)("span",{className:U.a.quantity,children:t.quantity_likes})]}),Object(s.jsxs)("div",{className:U.a.btn_wrap,children:[Object(s.jsx)("img",{className:U.a.btn_item,src:"https://cdn1.iconfinder.com/data/icons/social-rating/24/repost-re-post-retweet-512.png",alt:""}),Object(s.jsx)("span",{className:U.a.quantity,children:t.quantity_reposts})]}),Object(s.jsx)("img",{className:U.a.btn_item,src:"https://e7.pngegg.com/pngimages/32/955/png-clipart-computer-icons-share-icon-icon-design-shares-angle-triangle.png",alt:""})]})]})]})})},q=n(266),D=n.n(q),A=n(267),M=n.n(A),C=n(111),J=n(236),T=n(240),W=Object(T.a)(200),B=function(t){return Object(s.jsx)("div",{className:M.a.new_post,children:Object(s.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(s.jsx)("div",{children:Object(s.jsx)(C.a,{component:J.b,name:"newPostText",validate:[T.c,W]})}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{className:"c.publish_btn",children:"Publish"})})]})})},X=n(112),Y=Object(X.a)({form:"newPost"})(B),L=function(t){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{className:D.a.header,children:"My posts"}),Object(s.jsx)(Y,{onSubmit:function(e){t.addPost(e.newPostText),e.newPostText=""}})]})},z=function(t){var e=t.profile.posts.map((function(t){return Object(s.jsx)(F,{avatar:t.avatar,name:t.name,text:t.text,quantity_likes:t.quantity_likes,quantity_reposts:t.quantity_reposts})}));return Object(s.jsxs)("div",{className:k.a.posts,children:[Object(s.jsx)(L,{addPost:t.addPost}),e]})},E=function(t){return Object(s.jsxs)("div",{className:f.a.profile_wrapper,children:[Object(s.jsx)(m,{}),Object(s.jsx)(w,{profileInfo:t.profileInfo,status:t.status,updateUserStatus:t.updateUserStatus}),Object(s.jsx)(z,{profile:t.profile,addPost:t.addPost})]})},R=n(38),Z=n(6),H=n(241),G=n(19),K=function(t){return t.profile},Q=function(t){return t.auth.id},V=function(t){return t.auth.isAuth},$=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorisedUserId),this.props.getProfile(t),this.props.getUserStatus(t)}},{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:this.props.profile.profileInfo?Object(s.jsx)(E,Object(r.a)(Object(r.a)({},this.props),{},{profileInfo:this.props.profile.profileInfo,status:this.props.profile.status,updateUserStatus:this.props.updateUserStatus})):Object(s.jsx)(R.a,{})})}}]),n}(l.a.Component);e.default=Object(G.d)(Object(p.b)((function(t){return{profile:K(t),authorisedUserId:Q(t),isAuth:V(t)}}),{addPost:j.a,setUserProfile:j.e,getProfile:j.c,getUserStatus:j.d,updateUserStatus:j.f}),Z.f,H.a)($)}}]);
//# sourceMappingURL=4.c3e0d763.chunk.js.map