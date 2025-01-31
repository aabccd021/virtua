import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{I as v,D as H,H as S,a as j,b as h,S as V}from"./common-zLr-SM5z.js";import{V as n}from"./virtua-Dy7D_edX.js";import"./index-DRjF_FHU.js";import"./chunk-V7CXVCGC-BNtkIWul.js";import"./index-uWwxbAOW.js";const k={component:n,decorators:[r=>e.jsx("div",{style:{height:"100vh"},children:e.jsx(r,{})})]},t={render:()=>e.jsx(n,{count:1e4,Component:v})},o={render:()=>e.jsx(n,{count:1e4,Component:H})},s={render:()=>e.jsx(n,{count:1e4,Component:S})},a={render:()=>e.jsx(n,{count:1e4,Component:j})},c={render:()=>e.jsx(n,{count:1e4,Component:h})},m={render:()=>e.jsx(n,{count:1e6,Component:V})};var i,u,O;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <VirtuaList count={ROW_COUNT} Component={ItemWithRenderCount} />;
  }
}`,...(O=(u=t.parameters)==null?void 0:u.docs)==null?void 0:O.source}}};var p,d,C;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <VirtuaList count={ROW_COUNT} Component={DynamicItem} />;
  }
}`,...(C=(d=o.parameters)==null?void 0:d.docs)==null?void 0:C.source}}};var R,_,W;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <VirtuaList count={ROW_COUNT} Component={HeavyDOMItem} />;
  }
}`,...(W=(_=s.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var N,T,U;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <VirtuaList count={ROW_COUNT} Component={HeavyJsItem} />;
  }
}`,...(U=(T=a.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};var y,I,l;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <VirtuaList count={ROW_COUNT} Component={DynamicImageItem} />;
  }
}`,...(l=(I=c.parameters)==null?void 0:I.docs)==null?void 0:l.source}}};var g,D,x;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <VirtuaList count={ROW_COUNT} Component={SimpleItem} />;
  }
}`,...(x=(D=m.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};const q=["RenderCount","DynamicHeight","HeavyDOM","HeavyJS","DynamicImage","OneMillion"];export{o as DynamicHeight,c as DynamicImage,s as HeavyDOM,a as HeavyJS,m as OneMillion,t as RenderCount,q as __namedExportsOrder,k as default};
