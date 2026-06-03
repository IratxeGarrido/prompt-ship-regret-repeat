import{o as _,ai as u,c as f,O as r,h as i,e,a1 as a,F as h,V as g,k as v,l as x,g as b}from"../modules/vue-DrKdfbVU.js";import{a2 as N,a1 as y,b as m,a as k}from"../index-KlA0JOz6.js";import{N as D}from"./NoteDisplay-BFAl_4ib.js";import"../modules/shiki-Dd3etIjU.js";const S=_({__name:"print",setup(d,{expose:n}){n();const{slides:l,total:o}=N();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),y({title:`Notes - ${m.title}`});const p=f(()=>l.value.map(t=>{var s;return(s=t.meta)==null?void 0:s.slide}).filter(t=>t!==void 0&&t.noteHTML!=="")),c={slides:l,total:o,slidesWithNote:p,get configs(){return m},NoteDisplay:D};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),V={id:"page-root"},w={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},H={class:"text-lg"},W={class:"font-bold flex gap-2"},j={class:"opacity-50"},C={key:0,class:"border-main mb-8"};function F(d,n,l,o,p,c){return r(),i("div",V,[e("div",w,[e("div",L,[e("h1",T,a(o.configs.title),1),e("div",B,a(new Date().toLocaleString()),1)]),(r(!0),i(h,null,g(o.slidesWithNote,(t,s)=>(r(),i("div",{key:s,class:"flex flex-col gap-4 break-inside-avoid-page"},[e("div",null,[e("h2",H,[e("div",W,[e("div",j,a(t==null?void 0:t.no)+"/"+a(o.total),1),v(" "+a(t==null?void 0:t.title)+" ",1),n[0]||(n[0]=e("div",{class:"flex-auto"},null,-1))])]),x(o.NoteDisplay,{"note-html":t.noteHTML,class:"max-w-full"},null,8,["note-html"])]),s<o.slidesWithNote.length-1?(r(),i("hr",C)):b("v-if",!0)]))),128))])])}const E=k(S,[["render",F],["__file","/Users/akela/Documents/presentations/prompt-ship-regret-repeat/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{E as default};
