import{t as d,u as h,ɵ as g,d as f,b as e,a as s,c as o,v as x,x as C,y as m,z as i,A as w,e as E,D as P,B as b,C as y,E as k,F as v,G as M,H as O,I as F,J as c,K as L,L as z}from"./vendor-uDbE0t2F.js";import{E as T}from"./episode-summary.component-DXHBTnk1.js";import{E as $}from"./index-dIpEwSw_.js";const B=(a,t)=>t.slug,D=a=>["/episodes",a];function I(a,t){if(a&1){const n=b();e(0,`
  `),s(1,"article",1),y("click",function(){const p=k(n).$implicit,u=v();return M(u.goto(p))}),e(2,`
    `),s(3,"h3"),e(4),o(),e(5,`
    `),s(6,"h2"),e(7),o(),e(8,`
    `),s(9,"h4"),e(10),O(11,"date"),o(),e(12,`
    `),s(13,"p"),e(14),o(),e(15,`
    `),s(16,"p")(17,"a",2),e(18,"Find more"),o()(),e(19,`
  `),o(),e(20,`
`)}if(a&2){const n=t.$implicit;i(4),F("Episode #",n.number,""),i(3),c(n.attributes.title),i(3),c(L(11,5,n.published,"shortDate")),i(4),c(n.attributes.description),i(3),m("routerLink",z(8,D,n.slug))}}const r=class r{constructor(){this._episodes=d($),this._router=d(h),this.episodes=this._episodes.episodes}goto(t){this._router.navigateByUrl(`/episodes/${t.slug}`)}};r.ɵfac=function(n){return new(n||r)},r.ɵcmp=g({type:r,selectors:[["app-episode"]],decls:9,vars:1,consts:[[3,"episode"],[3,"click"],[3,"routerLink"]],template:function(n,_){if(n&1&&(f(0,"app-episode-summary",0),e(1,`

`),s(2,"h1"),e(3,"Previous Episodes"),o(),e(4,`

`),x(5),e(6,`

`),C(7,I,21,10,null,null,B)),n&2){m("episode",_.episodes()[0]);const p=_.episodes().slice(1,_.episodes().length);i(7),w(p)}},dependencies:[T,E,P],styles:[`h1[_ngcontent-%COMP%] {
  font-weight: 400;
  font-size: 3em;
  text-align: center;
}

h2[_ngcontent-%COMP%] {
  font-size: 1.8em;
  font-weight: 300;
}

article[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-weight: 200;
  color: #444;
}

article[_ngcontent-%COMP%] {
  border: 1px solid #eee;
  padding: 20px;
  border-radius: 5px;
  font-size: 1.2em;
  width: 60%;
  max-width: 1200px;
  min-width: 300px;
  margin: auto;
  margin-bottom: 20px;
}

a[_ngcontent-%COMP%] {
  color: #222;
}

a[_ngcontent-%COMP%]:hover {
  color: #000;
}`]});let l=r;export{l as default};
