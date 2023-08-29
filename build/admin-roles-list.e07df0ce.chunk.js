"use strict";(self.webpackChunkhm_cms=self.webpackChunkhm_cms||[]).push([[3455],{98906:(N,M,t)=>{t.r(M),t.d(M,{default:()=>me});var e=t(67294),n=t(87631),f=t(87751),x=t(65186),O=t(4585),W=t(20022),j=t(96315),B=t(185),U=t(53979),g=t(29728),S=t(36989),F=t(49066),Q=t(38939),z=t(49386),X=t(8060),k=t(79031),C=t(37909),P=t(75515),G=t(63237),J=t(15234),Y=t(27361),w=t.n(Y),I=t(86896),q=t(16550),_=t(95428);const ee=()=>"todo empty role";var te=t(45697),L=t.n(te),ne=t(11047),le=t(41580),se=t(12028);const K=({id:a,name:o,description:l,usersCount:E,icons:r,rowIndex:u,canUpdate:h})=>{const{formatMessage:R}=(0,I.Z)(),[,i]=r,D=R({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {#  user} one {#  user} other {# users}}"},{number:E});return e.createElement(k.Tr,{"aria-rowindex":u,key:a,...h?(0,n.X7)({fn:i.onClick}):{}},e.createElement(C.Td,{maxWidth:(0,n.Q1)(130)},e.createElement(P.Z,{ellipsis:!0,textColor:"neutral800"},o)),e.createElement(C.Td,{maxWidth:(0,n.Q1)(250)},e.createElement(P.Z,{ellipsis:!0,textColor:"neutral800"},l)),e.createElement(C.Td,null,e.createElement(P.Z,{textColor:"neutral800"},D)),e.createElement(C.Td,null,e.createElement(ne.k,{justifyContent:"flex-end",...n.UW},r.map((d,T)=>d?e.createElement(le.x,{key:d.label,paddingLeft:T===0?0:1},e.createElement(se.h,{onClick:d.onClick,label:d.label,noBorder:!0,icon:d.icon})):null))))};K.propTypes={id:L().number.isRequired,name:L().string.isRequired,description:L().string.isRequired,usersCount:L().number.isRequired,icons:L().array.isRequired,rowIndex:L().number.isRequired,canUpdate:L().bool},K.defaultProps={canUpdate:!1};const ae=K;var oe=t(18172);const re={roleToDelete:null,showModalConfirmButtonLoading:!1,shouldRefetchData:!1},ie=(a,o)=>(0,oe.ZP)(a,l=>{switch(o.type){case"ON_REMOVE_ROLES":{l.showModalConfirmButtonLoading=!0;break}case"ON_REMOVE_ROLES_SUCCEEDED":{l.shouldRefetchData=!0,l.roleToDelete=null;break}case"RESET_DATA_TO_DELETE":{l.shouldRefetchData=!1,l.roleToDelete=null,l.showModalConfirmButtonLoading=!1;break}case"SET_ROLE_TO_DELETE":{l.roleToDelete=o.id;break}default:return l}}),de=()=>{(0,n.go)();const{locale:a}=(0,I.Z)(),{isLoading:o,allowedActions:{canCreate:l,canDelete:E,canRead:r,canUpdate:u}}=(0,n.ss)(f.Z.settings.roles),{getData:h,roles:R,isLoading:i}=(0,_.bF)(!1),[{query:D}]=(0,n.Kx)(),d=D?._q||"",{includes:T}=(0,n.L0)(a,{sensitivity:"base"}),v=(0,n.Xe)(a,{sensitivity:"base"}),A=(R||[]).filter(p=>T(p.name,d)||T(p.description,d)).sort((p,y)=>v.compare(p.name,y.name)||v.compare(p.description,y.description));return(0,e.useEffect)(()=>{!o&&r&&h()},[o,r,h]),{isLoadingForPermissions:o,canCreate:l,canDelete:E,canRead:r,canUpdate:u,isLoading:i,getData:h,sortedRoles:A,roles:R}},ce=({getData:a,canCreate:o,canDelete:l,canUpdate:E})=>{const{formatMessage:r}=(0,I.Z)(),u=(0,n.lm)(),[h,R]=(0,e.useState)(!1),{push:i}=(0,q.k6)(),[{selectedRoles:D,showModalConfirmButtonLoading:d,roleToDelete:T},v]=(0,e.useReducer)(ie,re),{post:A}=(0,n.tg)(),p=async()=>{try{v({type:"ON_REMOVE_ROLES"}),await A("/admin/roles/batch-delete",{ids:[T]}),await a(),v({type:"RESET_DATA_TO_DELETE"})}catch(s){const c=w()(s,["response","payload","data","ids"],null);if(c&&Array.isArray(c)){const Ee=c.join(`
`);u({type:"warning",message:Ee})}else u({type:"warning",message:{id:"notification.error"}})}m()},y=(0,e.useCallback)(s=>{i(`/settings/roles/duplicate/${s}`)},[i]),$=()=>i("/settings/roles/new"),Z=(0,e.useCallback)(s=>{v({type:"SET_ROLE_TO_DELETE",id:s}),m()},[]),m=()=>R(s=>!s),b=(0,e.useCallback)(s=>{i(`/settings/roles/${s}`)},[i]),V=(0,e.useCallback)((s,c)=>{s.preventDefault(),s.stopPropagation(),c.usersCount?u({type:"info",message:{id:"Roles.ListPage.notification.delete-not-allowed"}}):Z(c.id)},[u,Z]),H=(0,e.useCallback)((s,c)=>{s.preventDefault(),s.stopPropagation(),y(c.id)},[y]),ge=(0,e.useCallback)(s=>[...o?[{onClick:c=>H(c,s),label:r({id:"app.utils.duplicate",defaultMessage:"Duplicate"}),icon:e.createElement(x.Z,null)}]:[],...E?[{onClick:()=>b(s.id),label:r({id:"app.utils.edit",defaultMessage:"Edit"}),icon:e.createElement(O.Z,null)}]:[],...l?[{onClick:c=>V(c,s),label:r({id:"global.delete",defaultMessage:"Delete"}),icon:e.createElement(W.Z,null)}]:[]],[r,V,H,b,o,E,l]);return{handleNewRoleClick:$,getIcons:ge,selectedRoles:D,isWarningDeleteAllOpened:h,showModalConfirmButtonLoading:d,handleToggleModal:m,handleDeleteData:p}},ue=()=>{const{formatMessage:a}=(0,I.Z)(),{isLoadingForPermissions:o,canCreate:l,canRead:E,canDelete:r,canUpdate:u,isLoading:h,getData:R,sortedRoles:i}=de(),{handleNewRoleClick:D,getIcons:d,isWarningDeleteAllOpened:T,showModalConfirmButtonLoading:v,handleToggleModal:A,handleDeleteData:p}=ce({getData:R,canCreate:l,canDelete:r,canUpdate:u}),y=i.length+1,$=6;if(o)return e.createElement(B.o,null,e.createElement(n.dO,null));const Z=a({id:"global.roles",defaultMessage:"roles"});return e.createElement(B.o,null,e.createElement(n.SL,{name:"Roles"}),e.createElement(U.T,{primaryAction:l?e.createElement(g.z,{onClick:D,startIcon:e.createElement(j.Z,null),size:"S"},a({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})):null,title:Z,subtitle:a({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),as:"h2"}),E&&e.createElement(S.Z,{startActions:e.createElement(n.m,{label:a({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:Z})})}),E&&e.createElement(F.D,null,e.createElement(Q.i,{colCount:$,rowCount:y,footer:l?e.createElement(z.c,{onClick:D,icon:e.createElement(j.Z,null)},a({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})):null},e.createElement(X.h,null,e.createElement(k.Tr,{"aria-rowindex":1},e.createElement(C.Th,null,e.createElement(P.Z,{variant:"sigma",textColor:"neutral600"},a({id:"global.name",defaultMessage:"Name"}))),e.createElement(C.Th,null,e.createElement(P.Z,{variant:"sigma",textColor:"neutral600"},a({id:"global.description",defaultMessage:"Description"}))),e.createElement(C.Th,null,e.createElement(P.Z,{variant:"sigma",textColor:"neutral600"},a({id:"global.users",defaultMessage:"Users"}))),e.createElement(C.Th,null,e.createElement(G.T,null,a({id:"global.actions",defaultMessage:"Actions"}))))),e.createElement(J.p,null,i?.map((m,b)=>e.createElement(ae,{key:m.id,id:m.id,name:m.name,description:m.description,usersCount:m.usersCount,icons:d(m),rowIndex:b+2,canUpdate:u})))),!y&&!h&&e.createElement(ee,null)),e.createElement(n.QH,{isOpen:T,onConfirm:p,isConfirmButtonLoading:v,onToggleDialog:A}))},me=()=>e.createElement(n.O4,{permissions:f.Z.settings.roles.main},e.createElement(ue,null))},36989:(N,M,t)=>{t.d(M,{Z:()=>f});var e=t(85893),n=t(11047);const f=({startActions:x,endActions:O})=>!x&&!O?null:(0,e.jsxs)(n.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(n.k,{gap:2,wrap:"wrap",children:x}),(0,e.jsx)(n.k,{gap:2,shrink:0,wrap:"wrap",children:O})]})},49386:(N,M,t)=>{t.d(M,{c:()=>U});var e=t(85893),n=t(71997),f=t(41580),x=t(70004),O=t(11047),W=t(75515);const j=(0,n.ZP)(f.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:g})=>g.colors.primary600};
  }
`,B=(0,n.ZP)(f.x)`
  border-radius: 0 0 ${({theme:g})=>g.borderRadius} ${({theme:g})=>g.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,U=({children:g,icon:S,...F})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(x.i,{}),(0,e.jsx)(B,{as:"button",background:"primary100",padding:5,...F,children:(0,e.jsxs)(O.k,{children:[(0,e.jsx)(j,{"aria-hidden":!0,background:"primary200",children:S}),(0,e.jsx)(f.x,{paddingLeft:3,children:(0,e.jsx)(W.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:g})})]})})]})}}]);
