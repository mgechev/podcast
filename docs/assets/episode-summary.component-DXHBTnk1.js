import{V as a,W as x,X as R,ɵ as z,Y as O,Z as B,B as A,a as p,C as v,E as S,G as L,d as u,c as l,f as F,g as V,_ as E,z as o,$ as f,a0 as T,a1 as m,y as b,U as j,t as I,u as Q,v as W,O as C,P as X,Q as k,e as Y,b as h,F as P,T as M,I as y,L as U}from"./vendor-uDbE0t2F.js";const G=["audio"],N=["progress"],i=50,d=class d{toggle(){this.playing=!this.playing,this.playing?this.audio()?.nativeElement.play():this.audio()?.nativeElement.pause()}get arrowStyle(){const e=this.radius()/8,n=this.radius()/8,t=this.radius()/5;return{"border-top-width":`${e}px`,"border-bottom-width":`${n}px`,"border-left-width":`${t}px`}}constructor(){this.radius=a(120),this.stroke=a(20),this.innerStroke=a(2),this.source=a(""),this.strokeColor=a("#fff"),this.progressStrokeColor=a("#858585"),this.innerStrokeColor=a("#eee"),this.audio=x("audio"),this.progress=x("progress"),this.playing=!1,R(()=>{const e=this.progress()?.nativeElement;if(!e||typeof e.getTotalLength!="function")return;const n=e.getTotalLength(),t=this.audio()?.nativeElement;e.setAttribute("stroke-dasharray",n),e.setAttribute("stroke-dashoffset",n),t.addEventListener("pause",()=>this.playing=!1),t.addEventListener("play",()=>this.playing=!0),t.addEventListener("timeupdate",()=>{const s=t.currentTime,c=t.duration,g=n-s/c*n;e.setAttribute("stroke-dashoffset",g)})})}seek(e){const n=this._calculateAngle(e)/360,t=this.audio()?.nativeElement,s=n*t.duration;t.currentTime=s}get centerX(){return 50}get centerY(){return 50}get circleRadius(){return 32}get pauseLeftBarSize(){return{width:`${this.radius()/10}px`,height:`${this.radius()/3.5}px`,left:`calc(50% - ${this.radius()/12}px)`}}get pauseRightBarSize(){return{width:`${this.radius()/10}px`,height:`${this.radius()/3.5}px`,left:`calc(50% + ${this.radius()/12}px)`}}get playButtonRadius(){return this.radius()-this.radius()/3+"px"}_calculateAngle(e){const n=i*2/(this.radius()/e.offsetX),t=i*2/(this.radius()/e.offsetY),s=(i-t)/(i-n),c=180*(Math.abs(Math.atan(s))/Math.PI);return n<=i&&t>=i?c:n>i&&t>=i?180-c:n>i&&t<=i?180+c:180+(180-c)}};d.ɵfac=function(n){return new(n||d)},d.ɵcmp=z({type:d,selectors:[["ngx-circular-player"]],viewQuery:function(n,t){n&1&&(O(t.audio,G,5),O(t.progress,N,5)),n&2&&B(2)},inputs:{radius:[1,"radius"],stroke:[1,"stroke"],innerStroke:[1,"innerStroke"],source:[1,"source"],strokeColor:[1,"strokeColor"],progressStrokeColor:[1,"progressStrokeColor"],innerStrokeColor:[1,"innerStrokeColor"]},decls:13,vars:27,consts:[["progress",""],["audio",""],[1,"play",3,"click"],[1,"arrow"],[1,"pause"],[1,"before"],[1,"after"],["version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","viewBox","0 0 100 100"],["fill","transparent"],["pointer-events","stroke","d",`M 50 50
       m -50, 0
       a 50,50 0 1,0 100,0
       a 50,50 0 1,0 -100,0`,"stroke-miterlimit","10","fill","transparent",2,"cursor","pointer",3,"click"],["d",`M 50 50
       m -50, 0
       a 50,50 0 1,0 100,0
       a 50,50 0 1,0 -100,0`,"fill","transparent"],["preload","auto"],["type","audio/mp3",3,"src"]],template:function(n,t){if(n&1){const s=A();p(0,"button",2),v("click",function(){return S(s),L(t.toggle())}),u(1,"div",3),p(2,"span",4),u(3,"span",5)(4,"span",6),l()(),F(),p(5,"svg",7),u(6,"circle",8),p(7,"path",9),v("click",function(g){return S(s),L(t.seek(g))}),l(),u(8,"path",10,0),l(),V(),p(10,"audio",11,1),u(12,"source",12),l()}n&2&&(E("width",t.playButtonRadius)("height",t.playButtonRadius),o(),f(t.arrowStyle),T("hidden-arrow",t.playing),o(),T("hidden",!t.playing),o(),f(t.pauseLeftBarSize),o(),f(t.pauseRightBarSize),o(),E("width",t.radius()),o(),m("cx",t.centerX)("cy",t.centerY)("r",t.circleRadius)("stroke",t.innerStrokeColor())("stroke-width",t.innerStroke()),o(),m("stroke",t.progressStrokeColor())("stroke-width",t.stroke()),o(),m("stroke-miterlimit",10)("stroke",t.strokeColor())("stroke-width",t.stroke()),o(4),b("src",t.source(),j))},styles:[`svg[_ngcontent-%COMP%] {
  position: absolute;
  top: 50%;
  left: 50%;
  stroke: #fff;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 0;
}

svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {
  cursor: pointer;
}

button[_ngcontent-%COMP%] {
  position: relative;
}

.play[_ngcontent-%COMP%] {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  background: transparent !important;
  cursor: pointer;
  transform: translate(-50%, -50%);
  outline: none;
  border: none;
}

.arrow[_ngcontent-%COMP%] {
  transition: all 0.3s;

  width: 0;
  height: 0;

  border-top-color: transparent;
  border-top-style: solid;
  border-bottom-color: transparent;
  border-bottom-style: solid;
  border-left-style: solid;
  border-left-color: #eee;

  margin: auto;
}

.play[_ngcontent-%COMP%], 
.pause[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.pause[_ngcontent-%COMP%] {
  transition: opacity 0.3s;
}



.play[_ngcontent-%COMP%], 
.pause[_ngcontent-%COMP%], 
.pause[_ngcontent-%COMP%]   .before[_ngcontent-%COMP%], 
.pause[_ngcontent-%COMP%]   .after[_ngcontent-%COMP%] {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.pause[_ngcontent-%COMP%]   .before[_ngcontent-%COMP%], 
.pause[_ngcontent-%COMP%]   .after[_ngcontent-%COMP%] {
  content: "";
  background-color: #eee;
  display: inline-block;
  opacity: 1;
}

.hidden-arrow[_ngcontent-%COMP%] {
  border-left-width: 0 !important;
}

.hidden[_ngcontent-%COMP%] {
  opacity: 0;
}`]});let w=d;const q=r=>["/episodes/",r];function D(r,e){if(r&1&&u(0,"ngx-circular-player",0),r&2){P(2);const n=M(0);b("source",n.attributes.audio)}}function H(r,e){if(r&1&&(p(0,"a",1),h(1,"Find more"),l()),r&2){P(2);const n=M(0);b("routerLink",U(1,q,n.slug))}}function Z(r,e){if(r&1&&(p(0,"section")(1,"h1")(2,"span"),h(3),l(),h(4),l(),C(5,D,1,1,"ngx-circular-player",0),l(),p(6,"summary"),h(7),C(8,H,2,3,"a",1),l()),r&2){const n=P(),t=M(0);o(3),y("Episode #",t.number,""),o(),y(" ",t.attributes.title," "),o(),k(n.showPlayer()?5:-1),o(2),y(" ",t.attributes.description," "),o(),k(n.preview?8:-1)}}const _=class _{constructor(){this._router=I(Q),this.episode=a(),this.showPlayer=a(!0)}get preview(){return this._router.routerState.snapshot.url!==`/episodes/${this.episode()?.slug}`}};_.ɵfac=function(n){return new(n||_)},_.ɵcmp=z({type:_,selectors:[["app-episode-summary"]],inputs:{episode:[1,"episode"],showPlayer:[1,"showPlayer"]},decls:2,vars:2,consts:[["width","120",3,"source"],[3,"routerLink"]],template:function(n,t){if(n&1&&(W(0),C(1,Z,9,5)),n&2){const s=X(t.episode());o(),k(s?1:-1)}},dependencies:[w,Y],styles:[`[_nghost-%COMP%] {
  display: flex;
  height: 40vh;
  background-color: #333333;
  flex-direction: column;
  justify-content: center;
}

section[_ngcontent-%COMP%] {
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
}

section[_ngcontent-%COMP%], 
summary[_ngcontent-%COMP%] {
  width: 50%;
  min-width: 300px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  height: 150px;
}

summary[_ngcontent-%COMP%] {
  display: block;
  color: #999;
  font-size: 1.1em;
  margin-top: 25px;
  height: 120px;
}

summary[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: #fff;
}

h1[_ngcontent-%COMP%] {
  display: inline-block;
  border-left: 2px solid #1ba8c4;
  padding-left: 7px;
  color: #fff;
  font-weight: 400;
  font-size: 3.5em;
  text-align: left;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 0.5em;
  font-weight: 200;
}

app-player[_ngcontent-%COMP%] {
  display: block;
  width: 120px;
  height: 120px;
  margin-top: 35px;
  position: relative;
}

ngx-circular-player[_ngcontent-%COMP%] {
  position: relative;
}`]});let $=_;export{$ as E};
