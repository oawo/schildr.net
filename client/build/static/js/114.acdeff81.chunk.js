"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[114],{7114:function(n,e,a){a.r(e);var t=a(4165),s=a(5861),r=a(1413),i=a(885),l=a(2791),c=a(7689),d=a(1898),o=a(9365),u=a(3057),m=a(5702),h=a(4162),x=a(6015),f=a(5017),v=a(7205),p=a(4565),Z=a(456),j=a(439),g=a(7154),w=a(6119),P=a(184),b=["Project Manager","Portfolio manager","Project member"];e.default=function(){var n=(0,g.Z)(),e=n.user,a=n.setUser,y=(0,c.s0)(),C=(0,l.useState)({firstName:"",lastName:"",email:"",password:"",confirm:"",role:"",skills:"",invalidPass:[]}),k=(0,i.Z)(C,2),N=k[0],I=k[1],S=N.email,R=N.password,T=N.invalidPass,Y=N.firstName,_=N.lastName,z=N.role,A=N.confirm,D=N.skills,E=function(n){I((0,r.Z)((0,r.Z)({},N),n))},U=function(){var n=(0,s.Z)((0,t.Z)().mark((function n(e){var s;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),R===A){n.next=4;break}return E({invalidPass:["Please check password and confirm password again"]}),n.abrupt("return");case 4:return n.next=6,(0,Z.z2)(N);case 6:(s=n.sent).status?(a(s.data),(0,w.KY)(s.data._id),window.location.href="/main"):E({invalidPass:s.data.map((function(n){return n.msg}))});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,l.useEffect)((function(){e&&e.token&&(window.location.href="/main")}),[e]),(0,P.jsxs)(h.Z,{alignItems:"center",justifyContent:"center",sx:{height:"100%"},children:[(0,P.jsx)(h.Z,{alignItems:"center",justifyContent:"center",children:(0,P.jsx)(x.Z,{component:"img",src:j,sx:{width:200,mb:2}})}),(0,P.jsx)(h.Z,{alignItems:"center",justifyContent:"center",sx:{width:"100%"},children:(0,P.jsxs)("form",{onSubmit:U,children:[(0,P.jsxs)(h.Z,{spacing:3,children:[(0,P.jsx)(x.Z,{sm:1,children:(0,P.jsx)(f.Z,{label:"First Name",variant:"standard",sx:{width:{md:400,sm:300,xs:250}},type:"text",value:Y,onChange:function(n){return E({firstName:n.target.value,invalidPass:[]})}})}),(0,P.jsx)(x.Z,{sm:1,children:(0,P.jsx)(f.Z,{label:"Last Name",variant:"standard",sx:{width:{md:400,sm:300,xs:250}},type:"text",value:_,onChange:function(n){return E({lastName:n.target.value,invalidPass:[]})}})}),(0,P.jsx)(x.Z,{sm:1,children:(0,P.jsx)(f.Z,{label:"Your Email",variant:"standard",sx:{width:{md:400,sm:300,xs:250}},type:"email",value:S,onChange:function(n){return E({email:n.target.value,invalidPass:[]})}})}),(0,P.jsx)(x.Z,{sm:1,children:(0,P.jsx)(f.Z,{label:"Password",variant:"standard",sx:{width:{md:400,sm:300,xs:250}},type:"password",value:R,onChange:function(n){return E({password:n.target.value,invalidPass:[]})}})}),(0,P.jsx)(x.Z,{sm:1,children:(0,P.jsx)(f.Z,{label:"Confirm Password",variant:"standard",sx:{width:{md:400,sm:300,xs:250}},type:"password",value:A,onChange:function(n){return E({confirm:n.target.value,invalidPass:[]})}})}),(0,P.jsx)(x.Z,{sm:1,children:(0,P.jsxs)(d.Z,{fullWidth:!0,variant:"standard",children:[(0,P.jsx)(o.Z,{children:"Role"}),(0,P.jsx)(u.Z,{value:z,onChange:function(n){var e=n.target.value;E({role:e})},children:b.map((function(n,e){return(0,P.jsxs)(m.Z,{value:n,children:[" ",n," "]},e)}))})]})}),"Developer"===z&&(0,P.jsx)(x.Z,{children:(0,P.jsx)(f.Z,{label:"Your Skills",fullWidth:!0,multiline:!0,rows:4,placeholder:"React, Node, PHP, etc...",variant:"standard",value:D,onChange:function(n){return E({skills:n.target.value,invalidPass:[]})}})}),(0,P.jsx)(h.Z,{alignItems:"center",marginTop:5,sx:{width:"100%"},children:(0,P.jsx)(v.Z,{variant:"contained",color:"primary",sx:{mx:"auto",width:{md:300,xs:200},textTransform:"capitalize"},type:"submit",children:"Sign Up"})})]}),T.length?T.map((function(n,e){return(0,P.jsx)(x.Z,{sx:{my:1,bgcolor:"#ff4c4c",borderRadius:1,p:1},children:(0,P.jsx)(p.Z,{variant:"h7",sx:{color:"#fff"},children:n})},e)})):null,(0,P.jsx)(x.Z,{marginTop:3,textAlign:"center",children:(0,P.jsxs)(p.Z,{variant:"h7",align:"center",sx:{cursor:"pointer"},children:["Already have an account? ",(0,P.jsx)(p.Z,{variant:"span",onClick:function(){return y("/auth/login")},children:"Sign In!"})]})})]})})]})}}}]);
//# sourceMappingURL=114.acdeff81.chunk.js.map