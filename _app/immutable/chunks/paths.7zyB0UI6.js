import{y as c,s as l}from"./scheduler.tkLZKF5o.js";const e=[];function h(i,f=c){let n;const o=new Set;function r(t){if(l(i,t)&&(i=t,n)){const b=!e.length;for(const s of o)s[1](),e.push(s,i);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function u(t){r(t(i))}function a(t,b=c){const s=[t,b];return o.add(s),o.size===1&&(n=f(r,u)||c),t(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:u,subscribe:a}}const _=globalThis.__sveltekit_b8g1kk?.base??"/murdle-truth-tables",k=globalThis.__sveltekit_b8g1kk?.assets??_;export{k as a,_ as b,h as w};
