import{M as g,N as x,ɵ as f,v as C,b as n,O as _,P as y,z as o,Q as m,S as h,a,c as s,d as r,F as w,T as E,y as p,U as P}from"./vendor-uDbE0t2F.js";import{E as b}from"./episode-summary.component-DXHBTnk1.js";function v(i,d){i&1&&(n(0,`
    `),a(1,"div",5),n(2,`
      Loading...
    `),s(),n(3,`
  `))}function M(i,d){if(i&1&&(n(0,`
  `),a(1,"div"),n(2,`
    `),a(3,"app-episode-summary",0)(4,"app-episode-summary"),n(5," "),s()(),n(6,`
    `),a(7,"section",1),n(8,`
      `),a(9,"audio",2),n(10,`
        `),r(11,"source",3),n(12,`
      `),s(),n(13,`
      `),r(14,"analog-markdown",4),n(15,`
    `),s(),n(16,`
  `),s(),n(17,`
  `),_(18,v,4,0)),i&2){w();const e=E(0);o(3),p("episode",e)("showPlayer",!1),o(8),p("src",e.attributes.audio,P),o(3),p("content",e.content),o(4),m(e?-1:18)}}const t=class t{constructor(){this.currentEpisode=g(x({param:"slug",subdirectory:"episodes"}))}};t.ɵfac=function(e){return new(e||t)},t.ɵcmp=f({type:t,selectors:[["app-episode"]],decls:3,vars:2,consts:[[3,"episode","showPlayer"],[1,"episode-content"],["preload","auto","controls",""],["type","audio/mp3",3,"src"],[3,"content"],[1,"loading"]],template:function(e,l){if(e&1&&(C(0),n(1,`

`),_(2,M,19,5)),e&2){const u=y(l.currentEpisode());o(2),m(u?2:-1)}},dependencies:[b,h],styles:[`.loading[_ngcontent-%COMP%] {
  text-align: center;
}

.episode-content[_ngcontent-%COMP%] {
  margin-top: 10px;
  padding: 20px;
  border-radius: 5px;
  font-size: 1.4em;
  width: 60%;
  max-width: 1200px;
  min-width: 300px;
  margin: auto;
}

audio[_ngcontent-%COMP%] {
  width: 100%;
  margin-bottom: 20px;
}`]});let c=t;export{c as default};
