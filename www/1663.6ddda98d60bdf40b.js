"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1663],{1663:(q,O,h)=>{h.r(O),h.d(O,{startInputShims:()=>X});var b=h(5861),A=h(2055),g=h(3577),m=h(3457),p=(()=>{return(e=p||(p={})).Body="body",e.Ionic="ionic",e.Native="native",e.None="none",p;var e})();const j={getEngine(){var e;return(null===(e=null==m.w?void 0:m.w.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Keyboard"))&&(null==m.w?void 0:m.w.Capacitor.Plugins.Keyboard)},getResizeMode(){const e=this.getEngine();return e&&e.getResizeMode?e.getResizeMode():Promise.resolve(void 0)}},I=new WeakMap,M=(e,n,t,o=0,s=!1)=>{I.has(e)!==t&&(t?F(e,n,o,s):H(e,n))},F=(e,n,t,o=!1)=>{const s=n.parentNode,i=n.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,o&&(i.disabled=!0),s.appendChild(i),I.set(e,i);const d="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",n.style.transform=`translate3d(${d}px,${t}px,0) scale(0)`},H=(e,n)=>{const t=I.get(e);t&&(I.delete(e),t.remove()),e.style.pointerEvents="",n.style.transform=""},C="input, textarea, [no-blur], [contenteditable]",R="$ionPaddingTimer",T=(e,n,t)=>{const o=e[R];o&&clearTimeout(o),n>0?e.style.setProperty("--keyboard-offset",`${n}px`):e[R]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),t&&t()},120)},N=(e,n,t)=>{e.addEventListener("focusout",()=>{n&&T(n,0,t)},{once:!0})};let y=0;const V=(e,n,t,o,s,i,a,d=!1)=>{const r=i&&(void 0===a||a.mode===p.None),_=function(){var u=(0,b.Z)(function*(){J(e,n,t,o,s,r,d)});return function(){return u.apply(this,arguments)}}();return e.addEventListener("focusin",_,!0),()=>{e.removeEventListener("focusin",_,!0)}},J=function(){var e=(0,b.Z)(function*(n,t,o,s,i,a,d=!1){if(!o&&!s)return;const r=((e,n,t)=>{var o;return((e,n,t,o)=>{const s=e.top,i=e.bottom,a=n.top,r=a+15,u=Math.min(n.bottom,o-t)-50-i,S=r-s,l=Math.round(u<0?-u:S>0?-S:0),v=Math.min(l,s-a),P=Math.abs(v)/.3;return{scrollAmount:v,scrollDuration:Math.min(400,Math.max(150,P)),scrollPadding:t,inputSafeY:4-(s-r)}})((null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e).getBoundingClientRect(),n.getBoundingClientRect(),t,e.ownerDocument.defaultView.innerHeight)})(n,o||s,i);if(o&&Math.abs(r.scrollAmount)<4)return t.focus(),void(a&&null!==o&&(y+=r.scrollPadding,T(o,y),N(t,o,()=>y=0)));if(M(n,t,!0,r.inputSafeY,d),t.focus(),(0,g.r)(()=>n.click()),a&&o&&(y+=r.scrollPadding,T(o,y)),typeof window<"u"){let _;const u=function(){var l=(0,b.Z)(function*(){void 0!==_&&clearTimeout(_),window.removeEventListener("ionKeyboardDidShow",S),window.removeEventListener("ionKeyboardDidShow",u),o&&(yield(0,A.c)(o,0,r.scrollAmount,r.scrollDuration)),M(n,t,!1,r.inputSafeY),t.focus(),a&&N(t,o,()=>y=0)});return function(){return l.apply(this,arguments)}}(),S=()=>{window.removeEventListener("ionKeyboardDidShow",S),window.addEventListener("ionKeyboardDidShow",u)};if(o){const l=yield(0,A.g)(o);if(r.scrollAmount>l.scrollHeight-l.clientHeight-l.scrollTop)return"password"===t.type?(r.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",S)):window.addEventListener("ionKeyboardDidShow",u),void(_=setTimeout(u,1e3))}u()}});return function(t,o,s,i,a,d){return e.apply(this,arguments)}}(),X=function(){var e=(0,b.Z)(function*(n,t){const o=document,s="ios"===t,i="android"===t,a=n.getNumber("keyboardHeight",290),d=n.getBoolean("scrollAssist",!0),r=n.getBoolean("hideCaretOnScroll",s),_=n.getBoolean("inputBlurring",s),u=n.getBoolean("scrollPadding",!0),S=Array.from(o.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,v=new WeakMap,U=yield j.getResizeMode(),P=function(){var f=(0,b.Z)(function*(c){yield new Promise(D=>(0,g.c)(c,D));const x=c.shadowRoot||c,w=x.querySelector("input")||x.querySelector("textarea"),L=(0,A.f)(c),W=L?null:c.closest("ion-footer");if(w){if(L&&r&&!l.has(c)){const D=((e,n,t)=>{if(!t||!n)return()=>{};const o=d=>{(e=>e===e.getRootNode().activeElement)(n)&&M(e,n,d)},s=()=>M(e,n,!1),i=()=>o(!0),a=()=>o(!1);return(0,g.a)(t,"ionScrollStart",i),(0,g.a)(t,"ionScrollEnd",a),n.addEventListener("blur",s),()=>{(0,g.b)(t,"ionScrollStart",i),(0,g.b)(t,"ionScrollEnd",a),n.removeEventListener("blur",s)}})(c,w,L);l.set(c,D)}if("date"!==w.type&&"datetime-local"!==w.type&&(L||W)&&d&&!v.has(c)){const D=V(c,w,L,W,a,u,U,i);v.set(c,D)}}});return function(x){return f.apply(this,arguments)}}();_&&(()=>{let e=!0,n=!1;const t=document;(0,g.a)(t,"ionScrollStart",()=>{n=!0}),t.addEventListener("focusin",()=>{e=!0},!0),t.addEventListener("touchend",a=>{if(n)return void(n=!1);const d=t.activeElement;if(!d||d.matches(C))return;const r=a.target;r!==d&&(r.matches(C)||r.closest(C)||(e=!1,setTimeout(()=>{e||d.blur()},50)))},!1)})();for(const f of S)P(f);o.addEventListener("ionInputDidLoad",f=>{P(f.detail)}),o.addEventListener("ionInputDidUnload",f=>{(f=>{if(r){const c=l.get(f);c&&c(),l.delete(f)}if(d){const c=v.get(f);c&&c(),v.delete(f)}})(f.detail)})});return function(t,o){return e.apply(this,arguments)}}()}}]);