import{k as m,p as y,s as f,t as v,v as b,o as a,x as o,c as r,b as h,z as g,f as i,A as C,a0 as l,C as d,B as c,_ as E,G as B}from"./index-f66634d2.js";const L=m({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:Boolean,href:{type:String,default:""},target:{type:String,default:"_self"},icon:{type:y}}),S={click:t=>t instanceof MouseEvent},$=f({name:"ElLink"}),w=f({...$,props:L,emits:S,setup(t,{emit:u}){const s=t,n=v("link"),p=b(()=>[n.b(),n.m(s.type),n.is("disabled",s.disabled),n.is("underline",s.underline&&!s.disabled)]);function k(e){s.disabled||u("click",e)}return(e,_)=>(a(),o("a",{class:d(i(p)),href:e.disabled||!e.href?void 0:e.href,target:e.disabled||!e.href?void 0:e.target,onClick:k},[e.icon?(a(),r(i(C),{key:0},{default:h(()=>[(a(),r(g(e.icon)))]),_:1})):l("v-if",!0),e.$slots.default?(a(),o("span",{key:1,class:d(i(n).e("inner"))},[c(e.$slots,"default")],2)):l("v-if",!0),e.$slots.icon?c(e.$slots,"icon",{key:2}):l("v-if",!0)],10,["href","target"]))}});var P=E(w,[["__file","link.vue"]]);const I=B(P);export{I as E};
