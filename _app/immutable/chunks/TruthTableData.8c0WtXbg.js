import{w as o}from"./paths.7zyB0UI6.js";function v(e){return e?.length!==void 0?e:Array.from(e)}let a;const m=new Uint8Array(16);function p(){if(!a&&(a=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!a))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(m)}const t=[];for(let e=0;e<256;++e)t.push((e+256).toString(16).slice(1));function c(e,n=0){return t[e[n+0]]+t[e[n+1]]+t[e[n+2]]+t[e[n+3]]+"-"+t[e[n+4]]+t[e[n+5]]+"-"+t[e[n+6]]+t[e[n+7]]+"-"+t[e[n+8]]+t[e[n+9]]+"-"+t[e[n+10]]+t[e[n+11]]+t[e[n+12]]+t[e[n+13]]+t[e[n+14]]+t[e[n+15]]}const l=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),r={randomUUID:l};function y(e,n,s){if(r.randomUUID&&!n&&!e)return r.randomUUID();e=e||{};const i=e.random||(e.rng||p)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,n){s=s||0;for(let d=0;d<16;++d)n[s+d]=i[d];return n}return c(i)}class u{constructor(n){this.id="id"in n?n.id:y(),this.name="name"in n?n.name:"",this.active="active"in n?n.active:!1,this.options="options"in n?n.options:[],this.rawOptions="rawOptions"in n?n.options:"",this.key="key"in n?n.key:!1}}const w=o({murdle_categories:[new u({id:0,name:"Suspects",active:!0}),new u({id:1,name:"Weapons",active:!0}),new u({id:2,name:"Locations",active:!0}),new u({id:3,name:"Motives",active:!1})],truth_tables:[],simplified:!1});export{w as T,v as e};
