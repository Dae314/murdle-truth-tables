import{s as E,f as b,l as _,a as x,g as d,h as f,m as g,d as p,c as S,i as u,x as h,n as v,y as $,z as y}from"../chunks/scheduler.tkLZKF5o.js";import{S as q,i as z}from"../chunks/index.ju2EFUci.js";import{d as C}from"../chunks/singletons.P_4SXB6W.js";const H=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},P={subscribe(s){return H().page.subscribe(s)}};function j(s){let t,r=s[0].status+"",o,n,i,c=s[0].error?.message+"",l;return{c(){t=b("h1"),o=_(r),n=x(),i=b("p"),l=_(c)},l(e){t=d(e,"H1",{});var a=f(t);o=g(a,r),a.forEach(p),n=S(e),i=d(e,"P",{});var m=f(i);l=g(m,c),m.forEach(p)},m(e,a){u(e,t,a),h(t,o),u(e,n,a),u(e,i,a),h(i,l)},p(e,[a]){a&1&&r!==(r=e[0].status+"")&&v(o,r),a&1&&c!==(c=e[0].error?.message+"")&&v(l,c)},i:$,o:$,d(e){e&&(p(t),p(n),p(i))}}}function k(s,t,r){let o;return y(s,P,n=>r(0,o=n)),[o]}let D=class extends q{constructor(t){super(),z(this,t,k,j,E,{})}};export{D as component};
