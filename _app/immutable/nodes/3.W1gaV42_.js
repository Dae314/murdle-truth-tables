import{s as oe,f as b,g as w,j as u,i as T,B as M,y as Y,d as m,C as ge,D as pe,o as _e,p as ie,a as S,A as q,c as O,h as I,x as P,E as de,F as Z,z as ve,l as re,m as ce,G as $,n as he,H as ee}from"../chunks/scheduler.tkLZKF5o.js";import{S as ue,i as fe,f as ye,b as Ce,d as be,m as we,a as Pe,t as Ee,e as ke}from"../chunks/index.ju2EFUci.js";import{e as B,T as J}from"../chunks/TruthTableData.8c0WtXbg.js";import{H as Te}from"../chunks/control.pJ1mnnAb.js";import{b as xe}from"../chunks/paths.7zyB0UI6.js";function je(e,t){throw new Te(e,t)}new TextEncoder;function Se(e){let t,s,n;return{c(){t=b("input"),this.h()},l(r){t=w(r,"INPUT",{class:!0,type:!0}),this.h()},h(){u(t,"class","toggle svelte-1guxne2"),u(t,"type","checkbox")},m(r,i){T(r,t,i),e[6](t),t.checked=e[0],s||(n=[M(t,"change",e[7]),M(t,"change",e[2])],s=!0)},p(r,[i]){i&1&&(t.checked=r[0])},i:Y,o:Y,d(r){r&&m(t),e[6](null),s=!1,ge(n)}}}function Oe(e,t,s){let{size:n="medium"}=t,{state:r=!1}=t,{onColor:i}=t,{offColor:g}=t;const o=pe();let a;_e(async()=>{switch(i||s(3,i=window.getComputedStyle(document.documentElement).getPropertyValue("--appColorPrimary")),g||s(4,g=window.getComputedStyle(document.documentElement).getPropertyValue("--appAccentColor")),a.style.setProperty("--toggle-on-color",i),a.style.setProperty("--toggle-off-color",g),n){case"small":a.style.setProperty("--toggle-width","41px"),a.style.setProperty("--toggle-height","21px"),a.style.setProperty("--toggle-radius","33px"),a.style.setProperty("--toggle-inner-size","17.5px"),a.style.setProperty("--toggle-movement","21px");break;case"medium":a.style.setProperty("--toggle-width","62px"),a.style.setProperty("--toggle-height","32px"),a.style.setProperty("--toggle-radius","50px"),a.style.setProperty("--toggle-inner-size","28px"),a.style.setProperty("--toggle-movement","32px");break;case"large":a.style.setProperty("--toggle-width","93px"),a.style.setProperty("--toggle-height","48px"),a.style.setProperty("--toggle-radius","75px"),a.style.setProperty("--toggle-inner-size","44px"),a.style.setProperty("--toggle-movement","48px");break;default:je(400,{message:`ERROR: Invalid size property sent to ToggleSwitch component: ${n}`})}});function f(){o("toggleEvent",{data:{state:r}})}function p(_){ie[_?"unshift":"push"](()=>{a=_,s(1,a)})}function k(){r=this.checked,s(0,r)}return e.$$set=_=>{"size"in _&&s(5,n=_.size),"state"in _&&s(0,r=_.state),"onColor"in _&&s(3,i=_.onColor),"offColor"in _&&s(4,g=_.offColor)},[r,a,f,i,g,n,p,k]}class ze extends ue{constructor(t){super(),fe(this,t,Oe,Se,oe,{size:5,state:0,onColor:3,offColor:4})}}function te(e,t,s){const n=e.slice();return n[4]=t[s],n[5]=t,n[6]=s,n}function le(e,t,s){const n=e.slice();return n[4]=t[s],n[7]=t,n[8]=s,n}function se(e){let t,s,n,r,i,g,o,a=e[4].name+"",f,p,k,_,N;function D(){e[1].call(s,e[7],e[8])}return{c(){t=b("li"),s=b("input"),g=S(),o=b("label"),f=re(a),k=S(),this.h()},l(d){t=w(d,"LI",{class:!0});var h=I(t);s=w(h,"INPUT",{type:!0,class:!0,id:!0,name:!0}),g=O(h),o=w(h,"LABEL",{for:!0,class:!0});var x=I(o);f=ce(x,a),x.forEach(m),k=O(h),h.forEach(m),this.h()},h(){u(s,"type","checkbox"),u(s,"class","categoryPickerOption svelte-hajmr0"),u(s,"id",n=e[4].name),u(s,"name",r=e[4].name),s.disabled=i=e[4].name==="Suspects",u(o,"for",p=e[4].name),u(o,"class","svelte-hajmr0"),$(o,"selected",e[4].active),u(t,"class","svelte-hajmr0")},m(d,h){T(d,t,h),P(t,s),s.checked=e[4].active,P(t,g),P(t,o),P(o,f),P(t,k),_||(N=M(s,"change",D),_=!0)},p(d,h){e=d,h&1&&n!==(n=e[4].name)&&u(s,"id",n),h&1&&r!==(r=e[4].name)&&u(s,"name",r),h&1&&i!==(i=e[4].name==="Suspects")&&(s.disabled=i),h&1&&(s.checked=e[4].active),h&1&&a!==(a=e[4].name+"")&&he(f,a),h&1&&p!==(p=e[4].name)&&u(o,"for",p),h&1&&$(o,"selected",e[4].active)},d(d){d&&m(t),_=!1,N()}}}function ae(e){let t,s=e[4].name+"",n,r,i,g,o;function a(){e[2].call(i,e[5],e[6])}return{c(){t=b("h3"),n=re(s),r=S(),i=b("textarea"),this.h()},l(f){t=w(f,"H3",{class:!0});var p=I(t);n=ce(p,s),p.forEach(m),r=O(f),i=w(f,"TEXTAREA",{class:!0}),I(i).forEach(m),this.h()},h(){u(t,"class","svelte-hajmr0"),u(i,"class","svelte-hajmr0")},m(f,p){T(f,t,p),P(t,n),T(f,r,p),T(f,i,p),ee(i,e[4].rawOptions),g||(o=M(i,"input",a),g=!0)},p(f,p){e=f,p&1&&s!==(s=e[4].name+"")&&he(n,s),p&1&&ee(i,e[4].rawOptions)},d(f){f&&(m(t),m(r),m(i)),g=!1,o()}}}function Ie(e){let t,s="Setup Murdle Options",n,r,i,g,o,a,f="Category Options",p,k,_="List each option on a new line",N,D,d,h,x,K="Show simplified table:",F,z,G,X,A,Q="Next",U,L=B(e[0].murdle_categories),v=[];for(let l=0;l<L.length;l+=1)v[l]=se(le(e,L,l));let R=B(e[0].murdle_categories.filter(ne)),y=[];for(let l=0;l<R.length;l+=1)y[l]=ae(te(e,R,l));function me(l){e[3](l)}let W={size:"small"};return e[0].simplified!==void 0&&(W.state=e[0].simplified),z=new ze({props:W}),ie.push(()=>ye(z,"state",me)),{c(){t=b("h1"),t.textContent=s,n=S(),r=b("section"),i=b("ul");for(let l=0;l<v.length;l+=1)v[l].c();g=S(),o=b("section"),a=b("h2"),a.textContent=f,p=S(),k=b("p"),k.textContent=_,N=S();for(let l=0;l<y.length;l+=1)y[l].c();D=S(),d=b("section"),h=b("div"),x=b("p"),x.textContent=K,F=S(),Ce(z.$$.fragment),X=S(),A=b("a"),A.textContent=Q,this.h()},l(l){t=w(l,"H1",{"data-svelte-h":!0}),q(t)!=="svelte-1tatwh6"&&(t.textContent=s),n=O(l),r=w(l,"SECTION",{class:!0});var C=I(r);i=w(C,"UL",{class:!0});var E=I(i);for(let H=0;H<v.length;H+=1)v[H].l(E);E.forEach(m),C.forEach(m),g=O(l),o=w(l,"SECTION",{class:!0});var c=I(o);a=w(c,"H2",{class:!0,"data-svelte-h":!0}),q(a)!=="svelte-1xxy154"&&(a.textContent=f),p=O(c),k=w(c,"P",{class:!0,"data-svelte-h":!0}),q(k)!=="svelte-xnwkih"&&(k.textContent=_),N=O(c);for(let H=0;H<y.length;H+=1)y[H].l(c);c.forEach(m),D=O(l),d=w(l,"SECTION",{class:!0});var j=I(d);h=w(j,"DIV",{class:!0});var V=I(h);x=w(V,"P",{class:!0,"data-svelte-h":!0}),q(x)!=="svelte-1ocnyf"&&(x.textContent=K),F=O(V),be(z.$$.fragment,V),V.forEach(m),X=O(j),A=w(j,"A",{href:!0,class:!0,"data-svelte-h":!0}),q(A)!=="svelte-1qrtmtf"&&(A.textContent=Q),j.forEach(m),this.h()},h(){u(i,"class","svelte-hajmr0"),u(r,"class","categorySelect svelte-hajmr0"),u(a,"class","svelte-hajmr0"),u(k,"class","note svelte-hajmr0"),u(o,"class","categoryOptions svelte-hajmr0"),u(x,"class","svelte-hajmr0"),u(h,"class","simplifyToggleArea svelte-hajmr0"),u(A,"href",xe+"/step2"),u(A,"class","svelte-hajmr0"),u(d,"class","navigation svelte-hajmr0")},m(l,C){T(l,t,C),T(l,n,C),T(l,r,C),P(r,i);for(let E=0;E<v.length;E+=1)v[E]&&v[E].m(i,null);T(l,g,C),T(l,o,C),P(o,a),P(o,p),P(o,k),P(o,N);for(let E=0;E<y.length;E+=1)y[E]&&y[E].m(o,null);T(l,D,C),T(l,d,C),P(d,h),P(h,x),P(h,F),we(z,h,null),P(d,X),P(d,A),U=!0},p(l,[C]){if(C&1){L=B(l[0].murdle_categories);let c;for(c=0;c<L.length;c+=1){const j=le(l,L,c);v[c]?v[c].p(j,C):(v[c]=se(j),v[c].c(),v[c].m(i,null))}for(;c<v.length;c+=1)v[c].d(1);v.length=L.length}if(C&1){R=B(l[0].murdle_categories.filter(ne));let c;for(c=0;c<R.length;c+=1){const j=te(l,R,c);y[c]?y[c].p(j,C):(y[c]=ae(j),y[c].c(),y[c].m(o,null))}for(;c<y.length;c+=1)y[c].d(1);y.length=R.length}const E={};!G&&C&1&&(G=!0,E.state=l[0].simplified,de(()=>G=!1)),z.$set(E)},i(l){U||(Pe(z.$$.fragment,l),U=!0)},o(l){Ee(z.$$.fragment,l),U=!1},d(l){l&&(m(t),m(n),m(r),m(g),m(o),m(D),m(d)),Z(v,l),Z(y,l),ke(z)}}}const ne=e=>e.active;function Ae(e,t,s){let n;ve(e,J,o=>s(0,n=o));function r(o,a){o[a].active=this.checked,J.set(n)}function i(o,a){o[a].rawOptions=this.value}function g(o){e.$$.not_equal(n.simplified,o)&&(n.simplified=o,J.set(n))}return[n,r,i,g]}class qe extends ue{constructor(t){super(),fe(this,t,Ae,Ie,oe,{})}}export{qe as component};