import{j as p}from"./jsx-runtime-DR9Q75dM.js";import{r as l}from"./index-DRjF_FHU.js";import{c as tt,u as se,P as C,a as G,b as ce,R as rt,S as nt,h as ot,d as lt,F as at,D as it,e as ut,f as st,g as k,i as ct}from"./index-xj-3vyjA.js";import{f as dt}from"./chunk-V7CXVCGC-BNtkIWul.js";import{V as Ne}from"./Virtualizer-BkXgswsV.js";import"./index-uWwxbAOW.js";import"./useRerender-BbgBh9jx.js";import"./useChildren-4-uX3Van.js";var Re=1,ft=.9,mt=.8,pt=.17,ne=.1,oe=.999,vt=.9999,gt=.99,ht=/[\\\/_+.#"@\[\(\{&]/,bt=/[\\\/_+.#"@\[\(\{&]/g,xt=/[\s-]/,Oe=/[\s-]/g;function ie(e,r,t,i,n,a,u){if(a===r.length)return n===e.length?Re:gt;var c=`${n},${a}`;if(u[c]!==void 0)return u[c];for(var v=i.charAt(a),m=t.indexOf(v,n),f=0,h,D,w,I;m>=0;)h=ie(e,r,t,i,m+1,a+1,u),h>f&&(m===n?h*=Re:ht.test(e.charAt(m-1))?(h*=mt,w=e.slice(n,m-1).match(bt),w&&n>0&&(h*=Math.pow(oe,w.length))):xt.test(e.charAt(m-1))?(h*=ft,I=e.slice(n,m-1).match(Oe),I&&n>0&&(h*=Math.pow(oe,I.length))):(h*=pt,n>0&&(h*=Math.pow(oe,m-n))),e.charAt(m)!==r.charAt(a)&&(h*=vt)),(h<ne&&t.charAt(m-1)===i.charAt(a+1)||i.charAt(a+1)===i.charAt(a)&&t.charAt(m-1)!==i.charAt(a))&&(D=ie(e,r,t,i,m+1,a+2,u),D*ne>h&&(h=D*ne)),h>f&&(f=h),m=t.indexOf(v,m+1);return u[c]=f,f}function ke(e){return e.toLowerCase().replace(Oe," ")}function yt(e,r,t){return e=t&&t.length>0?`${e+" "+t.join(" ")}`:e,ie(e,r,ke(e),ke(r),0,0,{})}var de="Dialog",[_e,hr]=tt(de),[Et,R]=_e(de),Fe=e=>{const{__scopeDialog:r,children:t,open:i,defaultOpen:n,onOpenChange:a,modal:u=!0}=e,c=l.useRef(null),v=l.useRef(null),[m=!1,f]=st({prop:i,defaultProp:n,onChange:a});return p.jsx(Et,{scope:r,triggerRef:c,contentRef:v,contentId:k(),titleId:k(),descriptionId:k(),open:m,onOpenChange:f,onOpenToggle:l.useCallback(()=>f(h=>!h),[f]),modal:u,children:t})};Fe.displayName=de;var Te="DialogTrigger",Ct=l.forwardRef((e,r)=>{const{__scopeDialog:t,...i}=e,n=R(Te,t),a=se(r,n.triggerRef);return p.jsx(C.button,{type:"button","aria-haspopup":"dialog","aria-expanded":n.open,"aria-controls":n.contentId,"data-state":pe(n.open),...i,ref:a,onClick:G(e.onClick,n.onOpenToggle)})});Ct.displayName=Te;var fe="DialogPortal",[wt,$e]=_e(fe,{forceMount:void 0}),Ve=e=>{const{__scopeDialog:r,forceMount:t,children:i,container:n}=e,a=R(fe,r);return p.jsx(wt,{scope:r,forceMount:t,children:l.Children.map(i,u=>p.jsx(ce,{present:t||a.open,children:p.jsx(ct,{asChild:!0,container:n,children:u})}))})};Ve.displayName=fe;var U="DialogOverlay",Le=l.forwardRef((e,r)=>{const t=$e(U,e.__scopeDialog),{forceMount:i=t.forceMount,...n}=e,a=R(U,e.__scopeDialog);return a.modal?p.jsx(ce,{present:i||a.open,children:p.jsx(St,{...n,ref:r})}):null});Le.displayName=U;var St=l.forwardRef((e,r)=>{const{__scopeDialog:t,...i}=e,n=R(U,t);return p.jsx(rt,{as:nt,allowPinchZoom:!0,shards:[n.contentRef],children:p.jsx(C.div,{"data-state":pe(n.open),...i,ref:r,style:{pointerEvents:"auto",...i.style}})})}),N="DialogContent",We=l.forwardRef((e,r)=>{const t=$e(N,e.__scopeDialog),{forceMount:i=t.forceMount,...n}=e,a=R(N,e.__scopeDialog);return p.jsx(ce,{present:i||a.open,children:a.modal?p.jsx(Dt,{...n,ref:r}):p.jsx(Rt,{...n,ref:r})})});We.displayName=N;var Dt=l.forwardRef((e,r)=>{const t=R(N,e.__scopeDialog),i=l.useRef(null),n=se(r,t.contentRef,i);return l.useEffect(()=>{const a=i.current;if(a)return ot(a)},[]),p.jsx(Ge,{...e,ref:n,trapFocus:t.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:G(e.onCloseAutoFocus,a=>{var u;a.preventDefault(),(u=t.triggerRef.current)==null||u.focus()}),onPointerDownOutside:G(e.onPointerDownOutside,a=>{const u=a.detail.originalEvent,c=u.button===0&&u.ctrlKey===!0;(u.button===2||c)&&a.preventDefault()}),onFocusOutside:G(e.onFocusOutside,a=>a.preventDefault())})}),Rt=l.forwardRef((e,r)=>{const t=R(N,e.__scopeDialog),i=l.useRef(!1),n=l.useRef(!1);return p.jsx(Ge,{...e,ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var u,c;(u=e.onCloseAutoFocus)==null||u.call(e,a),a.defaultPrevented||(i.current||(c=t.triggerRef.current)==null||c.focus(),a.preventDefault()),i.current=!1,n.current=!1},onInteractOutside:a=>{var v,m;(v=e.onInteractOutside)==null||v.call(e,a),a.defaultPrevented||(i.current=!0,a.detail.originalEvent.type==="pointerdown"&&(n.current=!0));const u=a.target;((m=t.triggerRef.current)==null?void 0:m.contains(u))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&n.current&&a.preventDefault()}})}),Ge=l.forwardRef((e,r)=>{const{__scopeDialog:t,trapFocus:i,onOpenAutoFocus:n,onCloseAutoFocus:a,...u}=e,c=R(N,t),v=l.useRef(null),m=se(r,v);return lt(),p.jsxs(p.Fragment,{children:[p.jsx(at,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:n,onUnmountAutoFocus:a,children:p.jsx(it,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":pe(c.open),...u,ref:m,onDismiss:()=>c.onOpenChange(!1)})}),p.jsxs(p.Fragment,{children:[p.jsx(Mt,{titleId:c.titleId}),p.jsx(jt,{contentRef:v,descriptionId:c.descriptionId})]})]})}),me="DialogTitle",kt=l.forwardRef((e,r)=>{const{__scopeDialog:t,...i}=e,n=R(me,t);return p.jsx(C.h2,{id:n.titleId,...i,ref:r})});kt.displayName=me;var Ke="DialogDescription",It=l.forwardRef((e,r)=>{const{__scopeDialog:t,...i}=e,n=R(Ke,t);return p.jsx(C.p,{id:n.descriptionId,...i,ref:r})});It.displayName=Ke;var qe="DialogClose",At=l.forwardRef((e,r)=>{const{__scopeDialog:t,...i}=e,n=R(qe,t);return p.jsx(C.button,{type:"button",...i,ref:r,onClick:G(e.onClick,()=>n.onOpenChange(!1))})});At.displayName=qe;function pe(e){return e?"open":"closed"}var ze="DialogTitleWarning",[br,He]=ut(ze,{contentName:N,titleName:me,docsSlug:"dialog"}),Mt=({titleId:e})=>{const r=He(ze),t=`\`${r.contentName}\` requires a \`${r.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${r.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${r.docsSlug}`;return l.useEffect(()=>{e&&(document.getElementById(e)||console.error(t))},[t,e]),null},Pt="DialogDescriptionWarning",jt=({contentRef:e,descriptionId:r})=>{const i=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${He(Pt).contentName}}.`;return l.useEffect(()=>{var a;const n=(a=e.current)==null?void 0:a.getAttribute("aria-describedby");r&&n&&(document.getElementById(r)||console.warn(i))},[i,e,r]),null},Nt=Fe,Ot=Ve,_t=Le,Ft=We,Be={exports:{}},Ue={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T=l;function Tt(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var $t=typeof Object.is=="function"?Object.is:Tt,Vt=T.useState,Lt=T.useEffect,Wt=T.useLayoutEffect,Gt=T.useDebugValue;function Kt(e,r){var t=r(),i=Vt({inst:{value:t,getSnapshot:r}}),n=i[0].inst,a=i[1];return Wt(function(){n.value=t,n.getSnapshot=r,le(n)&&a({inst:n})},[e,t,r]),Lt(function(){return le(n)&&a({inst:n}),e(function(){le(n)&&a({inst:n})})},[e]),Gt(t),t}function le(e){var r=e.getSnapshot;e=e.value;try{var t=r();return!$t(e,t)}catch{return!0}}function qt(e,r){return r()}var zt=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?qt:Kt;Ue.useSyncExternalStore=T.useSyncExternalStore!==void 0?T.useSyncExternalStore:zt;Be.exports=Ue;var Ht=Be.exports,L='[cmdk-group=""]',ae='[cmdk-group-items=""]',Bt='[cmdk-group-heading=""]',ve='[cmdk-item=""]',Ie=`${ve}:not([aria-disabled="true"])`,ue="cmdk-item-select",j="data-value",Ut=(e,r,t)=>yt(e,r,t),Ye=l.createContext(void 0),q=()=>l.useContext(Ye),Je=l.createContext(void 0),ge=()=>l.useContext(Je),Xe=l.createContext(void 0),Ze=l.forwardRef((e,r)=>{let t=F(()=>{var o,d;return{search:"",value:(d=(o=e.value)!=null?o:e.defaultValue)!=null?d:"",filtered:{count:0,items:new Map,groups:new Set}}}),i=F(()=>new Set),n=F(()=>new Map),a=F(()=>new Map),u=F(()=>new Set),c=Qe(e),{label:v,children:m,value:f,onValueChange:h,filter:D,shouldFilter:w,loop:I,disablePointerSelection:J=!1,vimBindings:A=!0,...z}=e,he=k(),be=k(),xe=k(),M=l.useRef(null),y=lr();O(()=>{if(f!==void 0){let o=f.trim();t.current.value=o,E.emit()}},[f]),O(()=>{y(6,Ee)},[]);let E=l.useMemo(()=>({subscribe:o=>(u.current.add(o),()=>u.current.delete(o)),snapshot:()=>t.current,setState:(o,d,g)=>{var s,b,x;if(!Object.is(t.current[o],d)){if(t.current[o]=d,o==="search")ee(),Z(),y(1,Q);else if(o==="value"&&(g||y(5,Ee),((s=c.current)==null?void 0:s.value)!==void 0)){let S=d??"";(x=(b=c.current).onValueChange)==null||x.call(b,S);return}E.emit()}},emit:()=>{u.current.forEach(o=>o())}}),[]),X=l.useMemo(()=>({value:(o,d,g)=>{var s;d!==((s=a.current.get(o))==null?void 0:s.value)&&(a.current.set(o,{value:d,keywords:g}),t.current.filtered.items.set(o,ye(d,g)),y(2,()=>{Z(),E.emit()}))},item:(o,d)=>(i.current.add(o),d&&(n.current.has(d)?n.current.get(d).add(o):n.current.set(d,new Set([o]))),y(3,()=>{ee(),Z(),t.current.value||Q(),E.emit()}),()=>{a.current.delete(o),i.current.delete(o),t.current.filtered.items.delete(o);let g=$();y(4,()=>{ee(),(g==null?void 0:g.getAttribute("id"))===o&&Q(),E.emit()})}),group:o=>(n.current.has(o)||n.current.set(o,new Set),()=>{a.current.delete(o),n.current.delete(o)}),filter:()=>c.current.shouldFilter,label:v||e["aria-label"],getDisablePointerSelection:()=>c.current.disablePointerSelection,listId:he,inputId:xe,labelId:be,listInnerRef:M}),[]);function ye(o,d){var g,s;let b=(s=(g=c.current)==null?void 0:g.filter)!=null?s:Ut;return o?b(o,t.current.search,d):0}function Z(){if(!t.current.search||c.current.shouldFilter===!1)return;let o=t.current.filtered.items,d=[];t.current.filtered.groups.forEach(s=>{let b=n.current.get(s),x=0;b.forEach(S=>{let P=o.get(S);x=Math.max(P,x)}),d.push([s,x])});let g=M.current;V().sort((s,b)=>{var x,S;let P=s.getAttribute("id"),H=b.getAttribute("id");return((x=o.get(H))!=null?x:0)-((S=o.get(P))!=null?S:0)}).forEach(s=>{let b=s.closest(ae);b?b.appendChild(s.parentElement===b?s:s.closest(`${ae} > *`)):g.appendChild(s.parentElement===g?s:s.closest(`${ae} > *`))}),d.sort((s,b)=>b[1]-s[1]).forEach(s=>{var b;let x=(b=M.current)==null?void 0:b.querySelector(`${L}[${j}="${encodeURIComponent(s[0])}"]`);x==null||x.parentElement.appendChild(x)})}function Q(){let o=V().find(g=>g.getAttribute("aria-disabled")!=="true"),d=o==null?void 0:o.getAttribute(j);E.setState("value",d||void 0)}function ee(){var o,d,g,s;if(!t.current.search||c.current.shouldFilter===!1){t.current.filtered.count=i.current.size;return}t.current.filtered.groups=new Set;let b=0;for(let x of i.current){let S=(d=(o=a.current.get(x))==null?void 0:o.value)!=null?d:"",P=(s=(g=a.current.get(x))==null?void 0:g.keywords)!=null?s:[],H=ye(S,P);t.current.filtered.items.set(x,H),H>0&&b++}for(let[x,S]of n.current)for(let P of S)if(t.current.filtered.items.get(P)>0){t.current.filtered.groups.add(x);break}t.current.filtered.count=b}function Ee(){var o,d,g;let s=$();s&&(((o=s.parentElement)==null?void 0:o.firstChild)===s&&((g=(d=s.closest(L))==null?void 0:d.querySelector(Bt))==null||g.scrollIntoView({block:"nearest"})),s.scrollIntoView({block:"nearest"}))}function $(){var o;return(o=M.current)==null?void 0:o.querySelector(`${ve}[aria-selected="true"]`)}function V(){var o;return Array.from(((o=M.current)==null?void 0:o.querySelectorAll(Ie))||[])}function te(o){let d=V()[o];d&&E.setState("value",d.getAttribute(j))}function re(o){var d;let g=$(),s=V(),b=s.findIndex(S=>S===g),x=s[b+o];(d=c.current)!=null&&d.loop&&(x=b+o<0?s[s.length-1]:b+o===s.length?s[0]:s[b+o]),x&&E.setState("value",x.getAttribute(j))}function Ce(o){let d=$(),g=d==null?void 0:d.closest(L),s;for(;g&&!s;)g=o>0?nr(g,L):or(g,L),s=g==null?void 0:g.querySelector(Ie);s?E.setState("value",s.getAttribute(j)):re(o)}let we=()=>te(V().length-1),Se=o=>{o.preventDefault(),o.metaKey?we():o.altKey?Ce(1):re(1)},De=o=>{o.preventDefault(),o.metaKey?te(0):o.altKey?Ce(-1):re(-1)};return l.createElement(C.div,{ref:r,tabIndex:-1,...z,"cmdk-root":"",onKeyDown:o=>{var d;if((d=z.onKeyDown)==null||d.call(z,o),!o.defaultPrevented)switch(o.key){case"n":case"j":{A&&o.ctrlKey&&Se(o);break}case"ArrowDown":{Se(o);break}case"p":case"k":{A&&o.ctrlKey&&De(o);break}case"ArrowUp":{De(o);break}case"Home":{o.preventDefault(),te(0);break}case"End":{o.preventDefault(),we();break}case"Enter":if(!o.nativeEvent.isComposing&&o.keyCode!==229){o.preventDefault();let g=$();if(g){let s=new Event(ue);g.dispatchEvent(s)}}}}},l.createElement("label",{"cmdk-label":"",htmlFor:X.inputId,id:X.labelId,style:ir},v),Y(e,o=>l.createElement(Je.Provider,{value:E},l.createElement(Ye.Provider,{value:X},o))))}),Yt=l.forwardRef((e,r)=>{var t,i;let n=k(),a=l.useRef(null),u=l.useContext(Xe),c=q(),v=Qe(e),m=(i=(t=v.current)==null?void 0:t.forceMount)!=null?i:u==null?void 0:u.forceMount;O(()=>{if(!m)return c.item(n,u==null?void 0:u.id)},[m]);let f=et(n,a,[e.value,e.children,a],e.keywords),h=ge(),D=_(y=>y.value&&y.value===f.current),w=_(y=>m||c.filter()===!1?!0:y.search?y.filtered.items.get(n)>0:!0);l.useEffect(()=>{let y=a.current;if(!(!y||e.disabled))return y.addEventListener(ue,I),()=>y.removeEventListener(ue,I)},[w,e.onSelect,e.disabled]);function I(){var y,E;J(),(E=(y=v.current).onSelect)==null||E.call(y,f.current)}function J(){h.setState("value",f.current,!0)}if(!w)return null;let{disabled:A,value:z,onSelect:he,forceMount:be,keywords:xe,...M}=e;return l.createElement(C.div,{ref:K([a,r]),...M,id:n,"cmdk-item":"",role:"option","aria-disabled":!!A,"aria-selected":!!D,"data-disabled":!!A,"data-selected":!!D,onPointerMove:A||c.getDisablePointerSelection()?void 0:J,onClick:A?void 0:I},e.children)}),Jt=l.forwardRef((e,r)=>{let{heading:t,children:i,forceMount:n,...a}=e,u=k(),c=l.useRef(null),v=l.useRef(null),m=k(),f=q(),h=_(w=>n||f.filter()===!1?!0:w.search?w.filtered.groups.has(u):!0);O(()=>f.group(u),[]),et(u,c,[e.value,e.heading,v]);let D=l.useMemo(()=>({id:u,forceMount:n}),[n]);return l.createElement(C.div,{ref:K([c,r]),...a,"cmdk-group":"",role:"presentation",hidden:h?void 0:!0},t&&l.createElement("div",{ref:v,"cmdk-group-heading":"","aria-hidden":!0,id:m},t),Y(e,w=>l.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":t?m:void 0},l.createElement(Xe.Provider,{value:D},w))))}),Xt=l.forwardRef((e,r)=>{let{alwaysRender:t,...i}=e,n=l.useRef(null),a=_(u=>!u.search);return!t&&!a?null:l.createElement(C.div,{ref:K([n,r]),...i,"cmdk-separator":"",role:"separator"})}),Zt=l.forwardRef((e,r)=>{let{onValueChange:t,...i}=e,n=e.value!=null,a=ge(),u=_(f=>f.search),c=_(f=>f.value),v=q(),m=l.useMemo(()=>{var f;let h=(f=v.listInnerRef.current)==null?void 0:f.querySelector(`${ve}[${j}="${encodeURIComponent(c)}"]`);return h==null?void 0:h.getAttribute("id")},[]);return l.useEffect(()=>{e.value!=null&&a.setState("search",e.value)},[e.value]),l.createElement(C.input,{ref:r,...i,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":v.listId,"aria-labelledby":v.labelId,"aria-activedescendant":m,id:v.inputId,type:"text",value:n?e.value:u,onChange:f=>{n||a.setState("search",f.target.value),t==null||t(f.target.value)}})}),Qt=l.forwardRef((e,r)=>{let{children:t,label:i="Suggestions",...n}=e,a=l.useRef(null),u=l.useRef(null),c=q();return l.useEffect(()=>{if(u.current&&a.current){let v=u.current,m=a.current,f,h=new ResizeObserver(()=>{f=requestAnimationFrame(()=>{let D=v.offsetHeight;m.style.setProperty("--cmdk-list-height",D.toFixed(1)+"px")})});return h.observe(v),()=>{cancelAnimationFrame(f),h.unobserve(v)}}},[]),l.createElement(C.div,{ref:K([a,r]),...n,"cmdk-list":"",role:"listbox","aria-label":i,id:c.listId},Y(e,v=>l.createElement("div",{ref:K([u,c.listInnerRef]),"cmdk-list-sizer":""},v)))}),er=l.forwardRef((e,r)=>{let{open:t,onOpenChange:i,overlayClassName:n,contentClassName:a,container:u,...c}=e;return l.createElement(Nt,{open:t,onOpenChange:i},l.createElement(Ot,{container:u},l.createElement(_t,{"cmdk-overlay":"",className:n}),l.createElement(Ft,{"aria-label":e.label,"cmdk-dialog":"",className:a},l.createElement(Ze,{ref:r,...c}))))}),tr=l.forwardRef((e,r)=>_(t=>t.filtered.count===0)?l.createElement(C.div,{ref:r,...e,"cmdk-empty":"",role:"presentation"}):null),rr=l.forwardRef((e,r)=>{let{progress:t,children:i,label:n="Loading...",...a}=e;return l.createElement(C.div,{ref:r,...a,"cmdk-loading":"",role:"progressbar","aria-valuenow":t,"aria-valuemin":0,"aria-valuemax":100,"aria-label":n},Y(e,u=>l.createElement("div",{"aria-hidden":!0},u)))}),W=Object.assign(Ze,{List:Qt,Item:Yt,Input:Zt,Group:Jt,Separator:Xt,Dialog:er,Empty:tr,Loading:rr});function nr(e,r){let t=e.nextElementSibling;for(;t;){if(t.matches(r))return t;t=t.nextElementSibling}}function or(e,r){let t=e.previousElementSibling;for(;t;){if(t.matches(r))return t;t=t.previousElementSibling}}function Qe(e){let r=l.useRef(e);return O(()=>{r.current=e}),r}var O=typeof window>"u"?l.useEffect:l.useLayoutEffect;function F(e){let r=l.useRef();return r.current===void 0&&(r.current=e()),r}function K(e){return r=>{e.forEach(t=>{typeof t=="function"?t(r):t!=null&&(t.current=r)})}}function _(e){let r=ge(),t=()=>e(r.snapshot());return Ht.useSyncExternalStore(r.subscribe,t,t)}function et(e,r,t,i=[]){let n=l.useRef(),a=q();return O(()=>{var u;let c=(()=>{var m;for(let f of t){if(typeof f=="string")return f.trim();if(typeof f=="object"&&"current"in f)return f.current?(m=f.current.textContent)==null?void 0:m.trim():n.current}})(),v=i.map(m=>m.trim());a.value(e,c,v),(u=r.current)==null||u.setAttribute(j,c),n.current=c}),n}var lr=()=>{let[e,r]=l.useState(),t=F(()=>new Map);return O(()=>{t.current.forEach(i=>i()),t.current=new Map},[e]),(i,n)=>{t.current.set(i,n),r({})}};function ar(e){let r=e.type;return typeof r=="function"?r(e.props):"render"in r?r.render(e.props):e}function Y({asChild:e,children:r},t){return e&&l.isValidElement(r)?l.cloneElement(ar(r),{ref:r.ref},t(r.props.children)):t(r)}var ir={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};const Ae=Array.from({length:1e3}).map((e,r)=>({id:String(r),label:dt.person.fullName()})),ur=l.forwardRef(({children:e,style:r},t)=>(e=e,l.cloneElement(e,{ref:t,style:{...e.props.style,...r}}))),xr={component:Ne},B={name:"With cmdk",render:()=>{const e=l.useRef(null),[r,t]=l.useState(""),[i,n]=l.useState(""),a=l.useMemo(()=>{if(!i)return Ae;const u=i.toLowerCase();return Ae.filter(c=>c.label.toLowerCase().includes(u))},[i]);return p.jsxs(p.Fragment,{children:[p.jsxs(W,{label:"Command Menu",value:r,shouldFilter:!1,children:[p.jsx(W.Input,{value:i,onValueChange:n}),p.jsx(W.Empty,{children:"No results found."}),p.jsx(W.List,{ref:e,children:p.jsx(Ne,{scrollRef:e,item:ur,children:a.map(u=>p.jsx(W.Item,{onSelect:t,children:u.label},u.id))})})]}),p.jsx("style",{children:`
[cmdk-root] {
  width: 400px;
  background: white;
  border-radius: 12px;
  padding: 8px 0;
}
[cmdk-list] {
  overflow-y: auto;
  height: 400px;
}
[cmdk-item] {
  height: 40px;
  cursor: pointer;
}
[cmdk-item][data-selected] {
  background: skyblue;
}
`})]})}};var Me,Pe,je;B.parameters={...B.parameters,docs:{...(Me=B.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  name: "With cmdk",
  render: () => {
    const ref = useRef<HTMLDivElement>(null);
    const [selected, setSelected] = useState("");
    const [value, setValue] = useState("");
    const filtered = useMemo(() => {
      if (!value) return TAGS;
      const normalizedValue = value.toLowerCase();
      return TAGS.filter(t => t.label.toLowerCase().includes(normalizedValue));
    }, [value]);
    return <>
        <Command label="Command Menu" value={selected} shouldFilter={false}>
          <Command.Input value={value} onValueChange={setValue} />
          <Command.Empty>No results found.</Command.Empty>
          <Command.List ref={ref}>
            <Virtualizer scrollRef={ref} item={Item}>
              {filtered.map(t => <Command.Item key={t.id} onSelect={setSelected}>
                  {t.label}
                </Command.Item>)}
            </Virtualizer>
          </Command.List>
        </Command>
        <style>{\`
[cmdk-root] {
  width: 400px;
  background: white;
  border-radius: 12px;
  padding: 8px 0;
}
[cmdk-list] {
  overflow-y: auto;
  height: 400px;
}
[cmdk-item] {
  height: 40px;
  cursor: pointer;
}
[cmdk-item][data-selected] {
  background: skyblue;
}
\`}</style>
      </>;
  }
}`,...(je=(Pe=B.parameters)==null?void 0:Pe.docs)==null?void 0:je.source}}};const yr=["Default"];export{B as Default,yr as __namedExportsOrder,xr as default};
