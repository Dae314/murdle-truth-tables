import{s as W,n as B,e as Y}from"../chunks/scheduler.b82d157b.js";import{S as Z,i as ee,g as z,s as L,h as E,y as $,c as w,j as I,f as v,k as f,a as k,x as O,z as D,m as J,n as K,A as U,B as Q,o as V,C as j}from"../chunks/index.a145189e.js";import{e as M,T as q}from"../chunks/TruthTableData.24a536dc.js";import{b as te}from"../chunks/paths.f1374e7f.js";function R(t,a,s){const i=t.slice();return i[3]=a[s],i[4]=a,i[5]=s,i}function X(t,a,s){const i=t.slice();return i[3]=a[s],i[6]=a,i[7]=s,i}function x(t){let a,s,i,c,o,u,n,d=t[3].name+"",r,h,T,N,y;function A(){t[1].call(s,t[6],t[7])}return{c(){a=z("li"),s=z("input"),u=L(),n=z("label"),r=J(d),T=L(),this.h()},l(g){a=E(g,"LI",{class:!0});var _=I(a);s=E(_,"INPUT",{type:!0,class:!0,id:!0,name:!0}),u=w(_),n=E(_,"LABEL",{for:!0,class:!0});var S=I(n);r=K(S,d),S.forEach(v),T=w(_),_.forEach(v),this.h()},h(){f(s,"type","checkbox"),f(s,"class","categoryPickerOption svelte-1vvzieg"),f(s,"id",i=t[3].name),f(s,"name",c=t[3].name),s.disabled=o=t[3].name==="Suspects",f(n,"for",h=t[3].name),f(n,"class","svelte-1vvzieg"),U(n,"selected",t[3].active),f(a,"class","svelte-1vvzieg")},m(g,_){k(g,a,_),O(a,s),s.checked=t[3].active,O(a,u),O(a,n),O(n,r),O(a,T),N||(y=Q(s,"change",A),N=!0)},p(g,_){t=g,_&1&&i!==(i=t[3].name)&&f(s,"id",i),_&1&&c!==(c=t[3].name)&&f(s,"name",c),_&1&&o!==(o=t[3].name==="Suspects")&&(s.disabled=o),_&1&&(s.checked=t[3].active),_&1&&d!==(d=t[3].name+"")&&V(r,d),_&1&&h!==(h=t[3].name)&&f(n,"for",h),_&1&&U(n,"selected",t[3].active)},d(g){g&&v(a),N=!1,y()}}}function F(t){let a,s=t[3].name+"",i,c,o,u,n;function d(){t[2].call(o,t[4],t[5])}return{c(){a=z("h3"),i=J(s),c=L(),o=z("textarea"),this.h()},l(r){a=E(r,"H3",{class:!0});var h=I(a);i=K(h,s),h.forEach(v),c=w(r),o=E(r,"TEXTAREA",{class:!0}),I(o).forEach(v),this.h()},h(){f(a,"class","svelte-1vvzieg"),f(o,"class","svelte-1vvzieg")},m(r,h){k(r,a,h),O(a,i),k(r,c,h),k(r,o,h),j(o,t[3].rawOptions),u||(n=Q(o,"input",d),u=!0)},p(r,h){t=r,h&1&&s!==(s=t[3].name+"")&&V(i,s),h&1&&j(o,t[3].rawOptions)},d(r){r&&(v(a),v(c),v(o)),u=!1,n()}}}function le(t){let a,s="Setup Murdle Options",i,c,o,u,n,d,r="Category Options",h,T,N="List each option on a new line",y,A,g,_=`<a href="${te}/step2" class="svelte-1vvzieg">Next</a>`,S=M(t[0].murdle_categories),p=[];for(let e=0;e<S.length;e+=1)p[e]=x(X(t,S,e));let P=M(t[0].murdle_categories.filter(G)),m=[];for(let e=0;e<P.length;e+=1)m[e]=F(R(t,P,e));return{c(){a=z("h1"),a.textContent=s,i=L(),c=z("section"),o=z("ul");for(let e=0;e<p.length;e+=1)p[e].c();u=L(),n=z("section"),d=z("h2"),d.textContent=r,h=L(),T=z("p"),T.textContent=N,y=L();for(let e=0;e<m.length;e+=1)m[e].c();A=L(),g=z("section"),g.innerHTML=_,this.h()},l(e){a=E(e,"H1",{"data-svelte-h":!0}),$(a)!=="svelte-1tatwh6"&&(a.textContent=s),i=w(e),c=E(e,"SECTION",{class:!0});var b=I(c);o=E(b,"UL",{class:!0});var l=I(o);for(let H=0;H<p.length;H+=1)p[H].l(l);l.forEach(v),b.forEach(v),u=w(e),n=E(e,"SECTION",{class:!0});var C=I(n);d=E(C,"H2",{class:!0,"data-svelte-h":!0}),$(d)!=="svelte-1xxy154"&&(d.textContent=r),h=w(C),T=E(C,"P",{class:!0,"data-svelte-h":!0}),$(T)!=="svelte-xnwkih"&&(T.textContent=N),y=w(C);for(let H=0;H<m.length;H+=1)m[H].l(C);C.forEach(v),A=w(e),g=E(e,"SECTION",{class:!0,"data-svelte-h":!0}),$(g)!=="svelte-1l4c94e"&&(g.innerHTML=_),this.h()},h(){f(o,"class","svelte-1vvzieg"),f(c,"class","categorySelect svelte-1vvzieg"),f(d,"class","svelte-1vvzieg"),f(T,"class","note svelte-1vvzieg"),f(n,"class","categoryOptions svelte-1vvzieg"),f(g,"class","navigation svelte-1vvzieg")},m(e,b){k(e,a,b),k(e,i,b),k(e,c,b),O(c,o);for(let l=0;l<p.length;l+=1)p[l]&&p[l].m(o,null);k(e,u,b),k(e,n,b),O(n,d),O(n,h),O(n,T),O(n,y);for(let l=0;l<m.length;l+=1)m[l]&&m[l].m(n,null);k(e,A,b),k(e,g,b)},p(e,[b]){if(b&1){S=M(e[0].murdle_categories);let l;for(l=0;l<S.length;l+=1){const C=X(e,S,l);p[l]?p[l].p(C,b):(p[l]=x(C),p[l].c(),p[l].m(o,null))}for(;l<p.length;l+=1)p[l].d(1);p.length=S.length}if(b&1){P=M(e[0].murdle_categories.filter(G));let l;for(l=0;l<P.length;l+=1){const C=R(e,P,l);m[l]?m[l].p(C,b):(m[l]=F(C),m[l].c(),m[l].m(n,null))}for(;l<m.length;l+=1)m[l].d(1);m.length=P.length}},i:B,o:B,d(e){e&&(v(a),v(i),v(c),v(u),v(n),v(A),v(g)),D(p,e),D(m,e)}}}const G=t=>t.active;function ae(t,a,s){let i;Y(t,q,u=>s(0,i=u));function c(u,n){u[n].active=this.checked,q.set(i)}function o(u,n){u[n].rawOptions=this.value}return[i,c,o]}class ce extends Z{constructor(a){super(),ee(this,a,ae,le,W,{})}}export{ce as component};