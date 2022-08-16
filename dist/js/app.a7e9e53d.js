(function(){"use strict";var e={3749:function(e,n,t){var o=t(9242),s=t(3396),r=t(4870),a=t(7139),i=t(1114),c=t(4543),l=t(4198),u=t(1989);t(499);const d={class:"home"},w={class:"home-content"},h=(0,s._)("div",{class:"home-content-title"},[(0,s._)("h1",null,"汽车展示与选配")],-1),f=(0,s._)("h2",null,"选择车身颜色",-1),m={class:"select"},v=["onClick"],p={class:"select-item-text"},g=(0,s._)("h2",null,"选择贴膜材质",-1),b={class:"select"},O=["onClick"],k={class:"select-item-btn"};var _={__name:"App",setup(e){let n,t=(0,r.iH)(null);const o=new i.xsS,_=new i.cPb(75,window.innerWidth/window.innerHeight,.1,1e3);_.position.set(0,2,6);const x=new i.CP7({antialias:!0});x.setSize(window.innerWidth,window.innerHeight);const y=()=>{x.render(o,_),n&&n.update(),requestAnimationFrame(y)};let C,E,D,M,R=[];const j=new i.EJi({color:255,metalness:1,roughness:.5,clearcoat:1,clearcoatRoughness:0}),I=new i.EJi({color:"gray",metalness:1,roughness:.5,clearcoat:1,clearcoatRoughness:0}),J=new i.EJi({color:"blue",metalness:1,roughness:.5,clearcoat:1,clearcoatRoughness:0}),S=new i.EJi({color:16777215,metalness:1,roughness:.5,clearcoat:1,clearcoatRoughness:0}),H=new i.EJi({color:16777215,transparent:!0,transmission:1,roughness:0,metalness:0});let P=["red","purple","green","blue","black","white","gray"],z=e=>{j.color=new i.Ilk(P[e]),I.color=new i.Ilk(P[e]),J.color=new i.Ilk(P[e]),H.color=new i.Ilk(P[e]),S.color=new i.Ilk(P[e])},U=[{name:"磨砂",value:0},{name:"冰晶",value:1}],A=e=>{j.clearcoatRoughness=U[e].value,I.clearcoatRoughness=U[e].value,J.clearcoatRoughness=U[e].value};return(0,s.bv)((()=>{t.value.appendChild(x.domElement),x.setClearColor("#000"),o.background=new i.Ilk("#ccc"),o.environment=new i.Ilk("#ccc"),y();const e=new i.VLJ(10,10);e.material.opacity=.2,e.material.transparent=!0,o.add(e),n=new c.z(_,x.domElement),n.update();const s=new l.E,r=new u._;r.setDecoderPath("./draco/gltf/"),s.setDRACOLoader(r),s.load("./model/bmw01.glb",(e=>{const n=e.scene;n.traverse((e=>{e.isMesh,e.isMesh&&e.name.includes("轮毂")&&(R.push(e),R.forEach((e=>{e.material=S}))),e.isMesh&&e.name.includes("Mesh002")&&(C=e,C.material=j),e.isMesh&&e.name.includes("前脸")&&(E=e,E.material=I),e.isMesh&&e.name.includes("引擎盖_1")&&(D=e,D.material=J),e.isMesh&&e.name.includes("挡风玻璃")&&(M=e,M.material=H)})),o.add(n)}));const a=new i.Ox3(16777215,1);a.position.set(0,0,10),o.add(a);const d=new i.Ox3(16777215,1);d.position.set(0,0,-10),o.add(d);const w=new i.Ox3(16777215,1);w.position.set(10,0,0),o.add(w);const h=new i.Ox3(16777215,1);h.position.set(-10,0,0),o.add(h);const f=new i.Ox3(16777215,1);f.position.set(0,10,0),o.add(f);const m=new i.Ox3(16777215,.3);m.position.set(5,10,0),o.add(m);const v=new i.Ox3(16777215,.3);v.position.set(0,10,5),o.add(v);const p=new i.Ox3(16777215,.3);p.position.set(0,10,-5),o.add(p);const g=new i.Ox3(16777215,.3);g.position.set(-5,10,0),o.add(g)})),(e,n)=>((0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("div",{class:"canvas-container",ref_key:"canvasDom",ref:t},null,512),(0,s._)("div",w,[h,f,(0,s._)("div",m,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,r.SU)(P),((e,n)=>((0,s.wg)(),(0,s.iD)("div",{class:"select-item",onClick:e=>(0,r.SU)(z)(n)},[(0,s._)("div",{class:"select-item-color",style:(0,a.j5)({backgroundColor:e})},null,4),(0,s._)("div",p,(0,a.zw)(e),1)],8,v)))),256))]),g,(0,s._)("div",b,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,r.SU)(U),((e,n)=>((0,s.wg)(),(0,s.iD)("div",{class:"select-item",onClick:e=>(0,r.SU)(A)(n)},[(0,s._)("button",k,(0,a.zw)(e.name),1)],8,O)))),256))])])]))}};const x=_;var y=x;(0,o.ri)(y).mount("#app")}},n={};function t(o){var s=n[o];if(void 0!==s)return s.exports;var r=n[o]={exports:{}};return e[o](r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(n,o,s,r){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],s=e[u][1],r=e[u][2];for(var i=!0,c=0;c<o.length;c++)(!1&r||a>=r)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(i=!1,r<a&&(a=r));if(i){e.splice(u--,1);var l=s();void 0!==l&&(n=l)}}return n}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,s,r]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var s,r,a=o[0],i=o[1],c=o[2],l=0;if(a.some((function(n){return 0!==e[n]}))){for(s in i)t.o(i,s)&&(t.m[s]=i[s]);if(c)var u=c(t)}for(n&&n(o);l<a.length;l++)r=a[l],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},o=self["webpackChunklearn_three"]=self["webpackChunklearn_three"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(3749)}));o=t.O(o)})();
//# sourceMappingURL=app.a7e9e53d.js.map