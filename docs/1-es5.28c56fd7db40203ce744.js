function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _get(e,t,n){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=_superPropBase(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"6SFz":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return u})),n("mrSG");var r=n("ofXK"),i=n("fXoL"),o=["audio"],s=["progress"],a=function(){var e=function(){function e(){_classCallCheck(this,e),this.radius=120,this.stroke=20,this.innerStroke=2,this.strokeColor="#fff",this.progressStrokeColor="#858585",this.innerStrokeColor="#eee",this.playing=!1}return _createClass(e,[{key:"toggle",value:function(){this.playing=!this.playing,this.playing?this.audio.nativeElement.play():this.audio.nativeElement.pause()}},{key:"ngAfterViewInit",value:function(){var e=this,t=this.progress.nativeElement,n=t.getTotalLength(),r=this.audio.nativeElement;t.setAttribute("stroke-dasharray",n),t.setAttribute("stroke-dashoffset",n),r.addEventListener("pause",(function(){return e.playing=!1})),r.addEventListener("play",(function(){return e.playing=!0})),r.addEventListener("timeupdate",(function(){t.setAttribute("stroke-dashoffset",n-r.currentTime/r.duration*n)}))}},{key:"seek",value:function(e){var t=this._calculateAngle(e)/360,n=this.audio.nativeElement;n.currentTime=t*n.duration}},{key:"_calculateAngle",value:function(e){var t=100/(this.radius/e.offsetX),n=100/(this.radius/e.offsetY),r=Math.abs(Math.atan((50-n)/(50-t)))/Math.PI*180;return t<=50&&n>=50?r:t>50&&n>=50?180-r:t>50&&n<=50?180+r:180-r+180}},{key:"arrowStyle",get:function(){return{"border-top-width":"".concat(this.radius/8,"px"),"border-bottom-width":"".concat(this.radius/8,"px"),"border-left-width":"".concat(this.radius/5,"px")}}},{key:"drawn",get:function(){return""}},{key:"centerX",get:function(){return 50}},{key:"centerY",get:function(){return 50}},{key:"circleRadius",get:function(){return 32}},{key:"pauseLeftBarSize",get:function(){return{width:"".concat(this.radius/10,"px"),height:"".concat(this.radius/3.5,"px"),left:"calc(50% - ".concat(this.radius/12,"px)")}}},{key:"pauseRightBarSize",get:function(){return{width:"".concat(this.radius/10,"px"),height:"".concat(this.radius/3.5,"px"),left:"calc(50% + ".concat(this.radius/12,"px)")}}},{key:"playButtonRadius",get:function(){return this.radius-this.radius/3+"px"}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Cb({type:e,selectors:[["ngx-circular-player"]],viewQuery:function(e,t){var n;1&e&&(i.mc(o,!0),i.mc(s,!0)),2&e&&(i.cc(n=i.Tb())&&(t.audio=n.first),i.cc(n=i.Tb())&&(t.progress=n.first))},inputs:{radius:"radius",stroke:"stroke",innerStroke:"innerStroke",strokeColor:"strokeColor",progressStrokeColor:"progressStrokeColor",innerStrokeColor:"innerStrokeColor",source:"source"},decls:13,vars:19,consts:[[1,"play",3,"click"],[1,"arrow",3,"ngStyle"],[1,"pause"],[1,"before",3,"ngStyle"],[1,"after",3,"ngStyle"],["version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","viewBox","0 0 100 100"],["fill","transparent"],["pointer-events","stroke","d","M 50 50\n       m -50, 0\n       a 50,50 0 1,0 100,0\n       a 50,50 0 1,0 -100,0","stroke-miterlimit","10","fill","transparent",2,"cursor","pointer",3,"click"],["d","M 50 50\n       m -50, 0\n       a 50,50 0 1,0 100,0\n       a 50,50 0 1,0 -100,0","fill","transparent"],["progress",""],["preload","auto"],["audio",""],["type","audio/mp3",3,"src"]],template:function(e,t){1&e&&(i.Lb(0,"button",0),i.Sb("click",(function(e){return t.toggle()})),i.Jb(1,"div",1),i.Lb(2,"span",2),i.Jb(3,"span",3),i.Jb(4,"span",4),i.Kb(),i.Kb(),i.Vb(),i.Lb(5,"svg",5),i.Jb(6,"circle",6),i.Lb(7,"path",7),i.Sb("click",(function(e){return t.seek(e)})),i.Kb(),i.Jb(8,"path",8,9),i.Kb(),i.Ub(),i.Lb(10,"audio",10,11),i.Jb(12,"source",12),i.Kb()),2&e&&(i.hc("width",t.playButtonRadius)("height",t.playButtonRadius),i.wb(1),i.Ab("hidden-arrow",t.playing),i.bc("ngStyle",t.arrowStyle),i.wb(1),i.Ab("hidden",!t.playing),i.wb(1),i.bc("ngStyle",t.pauseLeftBarSize),i.wb(1),i.bc("ngStyle",t.pauseRightBarSize),i.wb(1),i.hc("width",t.radius),i.wb(1),i.yb("cx",t.centerX)("cy",t.centerY)("r",t.circleRadius)("stroke",t.innerStrokeColor)("stroke-width",t.innerStroke),i.wb(1),i.yb("stroke",t.progressStrokeColor)("stroke-width",t.stroke),i.wb(1),i.yb("stroke-miterlimit",10)("stroke",t.strokeColor)("stroke-width",t.stroke),i.wb(4),i.bc("src",t.source,i.ec))},directives:[r.k],styles:['svg[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;stroke:#fff;border-radius:100%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);pointer-events:none;z-index:0}svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{cursor:pointer}button[_ngcontent-%COMP%]{position:relative}.play[_ngcontent-%COMP%]{z-index:3;background:0 0!important;cursor:pointer;outline:0;border:none}.arrow[_ngcontent-%COMP%]{-webkit-transition:.3s;transition:.3s;width:0;height:0;border-top-color:transparent;border-top-style:solid;border-bottom-color:transparent;border-bottom-style:solid;border-left-style:solid;border-left-color:#eee;margin:auto}.pause[_ngcontent-%COMP%], .play[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%}.pause[_ngcontent-%COMP%]{-webkit-transition:opacity .3s;transition:opacity .3s}.pause[_ngcontent-%COMP%], .pause[_ngcontent-%COMP%]   .after[_ngcontent-%COMP%], .pause[_ngcontent-%COMP%]   .before[_ngcontent-%COMP%], .play[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.pause[_ngcontent-%COMP%]   .after[_ngcontent-%COMP%], .pause[_ngcontent-%COMP%]   .before[_ngcontent-%COMP%]{content:"";background-color:#eee;display:inline-block;opacity:1}.hidden-arrow[_ngcontent-%COMP%]{border-left-width:0!important}.hidden[_ngcontent-%COMP%]{opacity:0}'],changeDetection:0}),e}(),u=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=i.Gb({type:e}),e.\u0275inj=i.Fb({factory:function(t){return new(t||e)},imports:[[r.b]]}),e}()},PCNd:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n("UN6A");var r=n("ofXK"),i=n("tyNb"),o=n("6SFz"),s=n("syNF"),a=n("fXoL"),u=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=a.Gb({type:e}),e.\u0275inj=a.Fb({factory:function(t){return new(t||e)},providers:[{provide:s.a,useClass:s.a}],imports:[[r.b,i.e,o.b]]}),e}()},UN6A:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("fXoL"),i=n("tyNb"),o=n("ofXK"),s=n("6SFz");function a(e,t){if(1&e&&r.Jb(0,"ngx-circular-player",2),2&e){var n=r.Wb(2);r.bc("source",n.episode.audio)}}function u(e,t){if(1&e&&(r.Lb(0,"section"),r.Lb(1,"h1"),r.Lb(2,"span"),r.jc(3),r.Kb(),r.jc(4),r.Kb(),r.ic(5,a,1,1,"ngx-circular-player",1),r.Kb()),2&e){var n=r.Wb();r.wb(3),r.lc("Episode #",n.episode.number,""),r.wb(1),r.lc(" ",n.episode.title," "),r.wb(1),r.bc("ngIf",n.showPlayer)}}function c(e,t){if(1&e&&(r.Lb(0,"a",4),r.jc(1,"Find more"),r.Kb()),2&e){var n=r.Wb(2);r.bc("routerLink",n.episode.route)}}function l(e,t){if(1&e&&(r.Lb(0,"summary"),r.jc(1),r.ic(2,c,2,1,"a",3),r.Kb()),2&e){var n=r.Wb();r.wb(1),r.lc(" ",n.episode.description," "),r.wb(1),r.bc("ngIf",n.preview)}}var h=function(){var e=function(){function e(t){_classCallCheck(this,e),this._router=t,this.showPlayer=!0}return _createClass(e,[{key:"preview",get:function(){return this._router.routerState.snapshot.url!==this.episode.route}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.Ib(i.c))},e.\u0275cmp=r.Cb({type:e,selectors:[["app-episode-summary"]],inputs:{episode:"episode",showPlayer:"showPlayer"},decls:2,vars:2,consts:[[4,"ngIf"],["width","120",3,"source",4,"ngIf"],["width","120",3,"source"],[3,"routerLink",4,"ngIf"],[3,"routerLink"]],template:function(e,t){1&e&&(r.ic(0,u,6,3,"section",0),r.ic(1,l,3,2,"summary",0)),2&e&&(r.bc("ngIf",t.episode),r.wb(1),r.bc("ngIf",t.episode))},directives:[o.j,s.a,i.d],styles:["[_nghost-%COMP%]{display:-webkit-box;display:flex;height:40vh;background-color:#333;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center}section[_ngcontent-%COMP%]{text-align:left;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:justify;justify-content:space-between;position:relative}section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%]{width:50%;min-width:300px;max-width:1200px;margin-left:auto;margin-right:auto;height:150px}summary[_ngcontent-%COMP%]{display:block;color:#999;font-size:1.1em;margin-top:25px;height:120px}summary[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}h1[_ngcontent-%COMP%]{display:inline-block;border-left:2px solid #1ba8c4;padding-left:7px;color:#fff;font-weight:400;font-size:3.5em;text-align:left;margin-bottom:10px;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center}h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.5em;font-weight:200}app-player[_ngcontent-%COMP%]{display:block;width:120px;height:120px;margin-top:35px;position:relative}ngx-circular-player[_ngcontent-%COMP%]{position:relative}"]}),e}()},mrSG:function(e,t,n){"use strict";function r(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{u(r.next(e))}catch(t){o(t)}}function a(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){e.done?i(e.value):new n((function(t){t(e.value)})).then(s,a)}u((r=r.apply(e,t||[])).next())}))}n.d(t,"a",(function(){return r}))},sbAP:function(e,t,n){"use strict";var r,i=n("fXoL"),o=n("mrSG"),s=n("tyNb"),a=n("2Vo4"),u=n("XNiG"),c=n("quSY"),l=function(e){function t(e,n){var r;return _classCallCheck(this,t),(r=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e,n))).scheduler=e,r.work=n,r}return _inherits(t,e),_createClass(t,[{key:"schedule",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return n>0?_get(_getPrototypeOf(t.prototype),"schedule",this).call(this,e,n):(this.delay=n,this.state=e,this.scheduler.flush(this),this)}},{key:"execute",value:function(e,n){return n>0||this.closed?_get(_getPrototypeOf(t.prototype),"execute",this).call(this,e,n):this._execute(e,n)}},{key:"requestAsyncId",value:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return null!==r&&r>0||null===r&&this.delay>0?_get(_getPrototypeOf(t.prototype),"requestAsyncId",this).call(this,e,n,r):e.flush(this)}}]),t}(function(e){function t(e,n){var r;return _classCallCheck(this,t),(r=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e,n))).scheduler=e,r.work=n,r.pending=!1,r}return _inherits(t,e),_createClass(t,[{key:"schedule",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(this.closed)return this;this.state=e;var n=this.id,r=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(r,n,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(r,this.id,t),this}},{key:"requestAsyncId",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return setInterval(e.flush.bind(e,this),n)}},{key:"recycleAsyncId",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(null!==n&&this.delay===n&&!1===this.pending)return t;clearInterval(t)}},{key:"execute",value:function(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(e,t);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}},{key:"_execute",value:function(e,t){var n=!1,r=void 0;try{this.work(e)}catch(i){n=!0,r=!!i&&i||new Error(i)}if(n)return this.unsubscribe(),r}},{key:"_unsubscribe",value:function(){var e=this.id,t=this.scheduler,n=t.actions,r=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==r&&n.splice(r,1),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null}}]),t}(function(e){function t(e,n){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).call(this))}return _inherits(t,e),_createClass(t,[{key:"schedule",value:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this}}]),t}(c.a))),h=function(){var e=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.now;_classCallCheck(this,e),this.SchedulerAction=t,this.now=n}return _createClass(e,[{key:"schedule",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2?arguments[2]:void 0;return new this.SchedulerAction(this,e).schedule(n,t)}}]),e}();return e.now=function(){return Date.now()},e}(),f=new(function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),t}(function(e){function t(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h.now;return _classCallCheck(this,t),(n=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e,(function(){return t.delegate&&t.delegate!==_assertThisInitialized(n)?t.delegate.now():r()})))).actions=[],n.active=!1,n.scheduled=void 0,n}return _inherits(t,e),_createClass(t,[{key:"schedule",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0;return t.delegate&&t.delegate!==this?t.delegate.schedule(e,n,r):_get(_getPrototypeOf(t.prototype),"schedule",this).call(this,e,n,r)}},{key:"flush",value:function(e){var t=this.actions;if(this.active)t.push(e);else{var n;this.active=!0;do{if(n=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,n){for(;e=t.shift();)e.unsubscribe();throw n}}}}]),t}(h)))(l),d=n("7o/Q"),p=n("EY2u"),b=n("LRne"),v=n("HDdC"),y=((r=function(){function e(t,n,r){_classCallCheck(this,e),this.kind=t,this.value=n,this.error=r,this.hasValue="N"===t}return _createClass(e,[{key:"observe",value:function(e){switch(this.kind){case"N":return e.next&&e.next(this.value);case"E":return e.error&&e.error(this.error);case"C":return e.complete&&e.complete()}}},{key:"do",value:function(e,t,n){switch(this.kind){case"N":return e&&e(this.value);case"E":return t&&t(this.error);case"C":return n&&n()}}},{key:"accept",value:function(e,t,n){return e&&"function"==typeof e.next?this.observe(e):this.do(e,t,n)}},{key:"toObservable",value:function(){switch(this.kind){case"N":return Object(b.a)(this.value);case"E":return e=this.error,new v.a((function(t){return t.error(e)}));case"C":return Object(p.b)()}var e;throw new Error("unexpected notification kind value")}}],[{key:"createNext",value:function(t){return void 0!==t?new e("N",t):e.undefinedValueNotification}},{key:"createError",value:function(t){return new e("E",void 0,t)}},{key:"createComplete",value:function(){return e.completeNotification}}]),e}()).completeNotification=new r("C"),r.undefinedValueNotification=new r("N",void 0),r),g=function(e){function t(e,n){var r,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return _classCallCheck(this,t),(r=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e))).scheduler=n,r.delay=i,r}return _inherits(t,e),_createClass(t,[{key:"scheduleMessage",value:function(e){this.destination.add(this.scheduler.schedule(t.dispatch,this.delay,new w(e,this.destination)))}},{key:"_next",value:function(e){this.scheduleMessage(y.createNext(e))}},{key:"_error",value:function(e){this.scheduleMessage(y.createError(e)),this.unsubscribe()}},{key:"_complete",value:function(){this.scheduleMessage(y.createComplete()),this.unsubscribe()}}],[{key:"dispatch",value:function(e){var t=e.notification,n=e.destination;t.observe(n),this.unsubscribe()}}]),t}(d.a),w=function e(t,n){_classCallCheck(this,e),this.notification=t,this.destination=n},m=n("9ppp"),k=n("Ylt2"),_=function(e){function t(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Number.POSITIVE_INFINITY,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.POSITIVE_INFINITY,i=arguments.length>2?arguments[2]:void 0;return _classCallCheck(this,t),(e=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this))).scheduler=i,e._events=[],e._infiniteTimeWindow=!1,e._bufferSize=n<1?1:n,e._windowTime=r<1?1:r,r===Number.POSITIVE_INFINITY?(e._infiniteTimeWindow=!0,e.next=e.nextInfiniteTimeWindow):e.next=e.nextTimeWindow,e}return _inherits(t,e),_createClass(t,[{key:"nextInfiniteTimeWindow",value:function(e){var n=this._events;n.push(e),n.length>this._bufferSize&&n.shift(),_get(_getPrototypeOf(t.prototype),"next",this).call(this,e)}},{key:"nextTimeWindow",value:function(e){this._events.push(new C(this._getNow(),e)),this._trimBufferThenGetEvents(),_get(_getPrototypeOf(t.prototype),"next",this).call(this,e)}},{key:"_subscribe",value:function(e){var t,n=this._infiniteTimeWindow,r=n?this._events:this._trimBufferThenGetEvents(),i=this.scheduler,o=r.length;if(this.closed)throw new m.a;if(this.isStopped||this.hasError?t=c.a.EMPTY:(this.observers.push(e),t=new k.a(this,e)),i&&e.add(e=new g(e,i)),n)for(var s=0;s<o&&!e.closed;s++)e.next(r[s]);else for(var a=0;a<o&&!e.closed;a++)e.next(r[a].value);return this.hasError?e.error(this.thrownError):this.isStopped&&e.complete(),t}},{key:"_getNow",value:function(){return(this.scheduler||f).now()}},{key:"_trimBufferThenGetEvents",value:function(){for(var e=this._getNow(),t=this._bufferSize,n=this._windowTime,r=this._events,i=r.length,o=0;o<i&&!(e-r[o].time<n);)o++;return i>t&&(o=Math.max(o,i-t)),o>0&&r.splice(0,o),r}}]),t}(u.a),C=function e(t,n){_classCallCheck(this,e),this.time=t,this.value=n};n("DH7j");var O=n("lJxs");n("XoHu"),n("Cfvw");var x=n("pLZG"),P=n("vkgz"),S=n("IzEk"),I=n("eIep"),T=n("JIr8");function E(e,t,n){var r;return r=e&&"object"==typeof e?e:{bufferSize:e,windowTime:t,refCount:!1,scheduler:n},function(e){return e.lift(function(e){var t,n,r=e.bufferSize,i=void 0===r?Number.POSITIVE_INFINITY:r,o=e.windowTime,s=void 0===o?Number.POSITIVE_INFINITY:o,a=e.refCount,u=e.scheduler,c=0,l=!1,h=!1;return function(e){c++,t&&!l||(l=!1,t=new _(i,s,u),n=e.subscribe({next:function(e){t.next(e)},error:function(e){l=!0,t.error(e)},complete:function(){h=!0,n=void 0,t.complete()}}));var r=t.subscribe(this);this.add((function(){c--,r.unsubscribe(),n&&!h&&a&&0===c&&(n.unsubscribe(),n=void 0,t=void 0)}))}}(r))}}n("SxV6"),n("ofXK"),n.d(t,"a",(function(){return X})),n.d(t,"b",(function(){return B})),n.d(t,"c",(function(){return F}));var j,M=["*"],N=((j=function(){function e(t,n){var r=this;_classCallCheck(this,e),this.zone=t,this.router=n,this.imState=new a.a({idle:!1,timeOut:5e3}),this.idle$=this.imState.pipe(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.length;if(0===r)throw new Error("list of properties cannot be empty.");return function(e){return Object(O.a)(function(e,t){return function(n){for(var r=n,i=0;i<t;i++){var o=r[e[i]];if(void 0===o)return;r=o}return r}}(t,r))(e)}}("idle")),this.initApp=new Event("AngularInitialized",{bubbles:!0,cancelable:!1}),this.appReady=new Event("AngularReady",{bubbles:!0,cancelable:!1}),this.appTimeout=new Event("AngularTimeout",{bubbles:!0,cancelable:!1}),window&&(window.dispatchEvent(this.initApp),this.router.events.pipe(Object(x.a)((function(e){return e instanceof s.a&&void 0!==e.urlAfterRedirects})),Object(P.a)((function(){return r.zoneIdleCheck()}))).subscribe())}return _createClass(e,[{key:"init",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.idle$.pipe(Object(S.a)(1)).toPromise());case 1:case"end":return e.stop()}}),e,this)})))}},{key:"zoneIdleCheck",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==Zone){e.next=2;break}return e.abrupt("return",this.simpleTimeout());case 2:if(void 0!==(t=Zone.current.get("TaskTrackingZone"))){e.next=5;break}return e.abrupt("return",this.simpleTimeout());case 5:if(e.t0=this.imState.value.idle,!e.t0){e.next=9;break}return e.next=9,this.setState("idle",!1);case 9:this.zone.runOutsideAngular((function(){var e,r=0,i=Date.now();!function o(){clearTimeout(e),Date.now()-i>3e4?window.dispatchEvent(n.appTimeout):t.macroTasks.length>0&&void 0!==t.macroTasks.find((function(e){return e.source.includes("XMLHttpRequest")}))||r<1?e=setTimeout((function(){r+=1,o()}),50):(window.dispatchEvent(n.appReady),n.setState("idle",!0))}()}));case 10:case"end":return e.stop()}}),e,this)})))}},{key:"simpleTimeout",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.warn("Scully is using timeouts, add the needed polyfills instead!"),e.next=3,new Promise((function(e){return setTimeout(e,t.imState.value.timeOut)}));case 3:window.dispatchEvent(this.appReady);case 4:case"end":return e.stop()}}),e,this)})))}},{key:"setPupeteerTimoutValue",value:function(e){this.imState.next(Object.assign(Object.assign({},this.imState.value),{timeOut:e}))}},{key:"setState",value:function(e,t){this.imState.next(Object.assign(Object.assign({},this.imState.value),_defineProperty({},e,t)))}}]),e}()).\u0275fac=function(e){return new(e||j)(i.Ob(i.y),i.Ob(s.c))},j.\u0275prov=Object(i.Eb)({factory:function(){return new j(Object(i.Ob)(i.y),Object(i.Ob)(s.c))},token:j,providedIn:"root"}),j);function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"json";return new Promise((function(n,r){var i=new XMLHttpRequest;i.responseType=t,i.addEventListener("load",(function(e){return n(i.response)})),i.addEventListener("error",(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r(t)})),i.open("get",e,!0),i.send()}))}var L,A,z,F=((L=function(){function e(){_classCallCheck(this,e),this.refresh=new _(1),this.available$=this.refresh.pipe(Object(I.a)((function(){return R("/assets/scully-routes.json")})),Object(T.a)((function(){return console.warn("Scully routes file not found, are you running the in static version of your site?"),Object(b.a)([])})),E({refCount:!1,bufferSize:1})),this.topLevel$=this.available$.pipe(Object(O.a)((function(e){return e.filter((function(e){return!e.route.slice(1).includes("/")}))})),E({refCount:!1,bufferSize:1})),this.reload()}return _createClass(e,[{key:"getCurrent",value:function(){if(!location)return Object(b.a)();var e=location.pathname;return this.available$.pipe(Object(O.a)((function(t){return t.find((function(t){return e.trim()===t.route.trim()||t.slugs&&Array.isArray(t.slugs)&&void 0!==t.slugs.find((function(t){return e.includes(t)}))}))})))}},{key:"reload",value:function(){this.refresh.next()}}]),e}()).\u0275fac=function(e){return new(e||L)},L.\u0275prov=Object(i.Eb)({factory:function(){return new L},token:L,providedIn:"root"}),L),B=((z=function(){function e(t,n,r,i){_classCallCheck(this,e),this.elmRef=t,this.srs=n,this.router=r,this.idle=i,this.type="MD",this.elm=this.elmRef.nativeElement,this.routes=this.srs.available$.pipe(Object(S.a)(1)).toPromise()}return _createClass(e,[{key:"ngOnInit",value:function(){this.idle.init(),this.elm&&this.handlePage()}},{key:"handlePage",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r,i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=document.createElement("template"),!window.scullyContent){e.next=5;break}t.innerHTML=window.scullyContent,e.next=8;break;case 5:return n=location.href,e.next=8,R(n,"text").then((function(e){try{t.innerHTML=e.split("\x3c!--scullyContent-begin--\x3e")[1].split("\x3c!--scullyContent-end--\x3e")[0]}catch(n){t.innerHTML="<h2>Sorry, could not parse static page content</h2>\n            <p>This might happen if you are not using the static generated pages.</p>"}})).catch((function(e){t.innerHTML="<h2>Sorry, could not load static page content</h2>",console.error("problem during loading static scully content",e)}));case 8:r=this.elm.parentElement||document.body,i=document.createComment("scullyContent-begin"),o=document.createComment("scullyContent-end"),r.insertBefore(i,this.elm),r.insertBefore(t.content,this.elm),r.insertBefore(o,this.elm),document.querySelectorAll("[href]").forEach(this.upgradeToRoutelink.bind(this));case 10:case"end":return e.stop()}}),e,this)})))}},{key:"upgradeToRoutelink",value:function(e){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,r,i,o=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.routes;case 2:n=t.sent,r=e.getAttribute("href").toLowerCase(),i=n.find((function(e){return e.route.toLowerCase()===r})),r&&i&&(e.onclick=function(e){var t=i.route.split("/"),n=location.pathname.split("/");n.pop(),e.preventDefault(),o.router.navigate(t).catch((function(e){return console.error("routing error",e)})),n.every((function(e,n){return t[n]===e}))&&t.length>n.length&&setTimeout((function(){var e,t=o.elm.parentElement,n=function(e,t){for(var n,r=[],i=document.createNodeIterator(e,NodeFilter.SHOW_COMMENT,{acceptNode:function(e){return e.nodeValue&&!e.nodeValue.includes("scullyContent-begin")?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}});n=i.nextNode();)r.push(n);return r}(t)[0];do{e=n.nextSibling,t.removeChild(n),n=e}while(e&&e!==o.elm);window.scullyContent=void 0,o.handlePage()}),20)});case 6:case"end":return t.stop()}}),t,this)})))}},{key:"ngOnDestroy",value:function(){this.mutationSubscription&&this.mutationSubscription.unsubscribe()}}]),e}()).\u0275fac=function(e){return new(e||z)(i.Ib(i.k),i.Ib(F),i.Ib(s.c),i.Ib(N))},z.\u0275cmp=i.Cb({type:z,selectors:[["scully-content"]],inputs:{type:"type"},ngContentSelectors:M,decls:1,vars:0,template:function(e,t){1&e&&(i.ac(),i.Zb(0))},styles:["\n      :host {\n        display: none;\n      }\n      scully-content {\n        display: none;\n      }\n    "],encapsulation:2,changeDetection:0}),z),X=((A=function e(){_classCallCheck(this,e)}).\u0275mod=i.Gb({type:A}),A.\u0275inj=i.Fb({factory:function(e){return new(e||A)}}),A)},syNF:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("lJxs"),i=n("fXoL"),o=n("sbAP"),s=/(\d\d?-\d\d?-\d\d\d\d)/,a=function(){var e=function e(t){_classCallCheck(this,e),this._srs=t,this.episodes$=this._srs.available$.pipe(Object(r.a)((function(e){return(e=e.filter((function(e){return s.test(e.route)})).sort((function(e,t){var n=s.exec(e.route)[0],r=s.exec(t.route)[0];return new Date(r).getTime()-new Date(n).getTime()}))).filter((function(e){return e.route.startsWith("/episode/")})).map((function(t,n){return Object.assign(Object.assign({},t),{number:e.length-n})}))})))};return e.\u0275fac=function(t){return new(t||e)(i.Ob(o.c))},e.\u0275prov=i.Eb({token:e,factory:e.\u0275fac}),e}()}}]);