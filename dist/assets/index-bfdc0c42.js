(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function Li(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Ad(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Fn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Vs={duration:.5,overwrite:!1,delay:0},hu,tn,Rt,qn=1e8,_t=1/qn,wc=Math.PI*2,zm=wc/4,Hm=0,wd=Math.sqrt,Gm=Math.cos,Vm=Math.sin,Wt=function(e){return typeof e=="string"},Ct=function(e){return typeof e=="function"},Gi=function(e){return typeof e=="number"},fu=function(e){return typeof e>"u"},gi=function(e){return typeof e=="object"},Sn=function(e){return e!==!1},du=function(){return typeof window<"u"},sa=function(e){return Ct(e)||Wt(e)},Rd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},nn=Array.isArray,Rc=/(?:-?\.?\d|\.)+/gi,Cd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ps=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Rl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Pd=/[+-]=-?[.\d]+/,Ld=/[^,'"\[\]\s]+/gi,Wm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,bt,Hn,Cc,pu,Bn={},tl={},Dd,Id=function(e){return(tl=$r(e,Bn))&&An},mu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},nl=function(e,t){return!t&&console.warn(e)},Ud=function(e,t){return e&&(Bn[e]=t)&&tl&&(tl[e]=t)||Bn},Go=function(){return 0},Xm={suppressEvents:!0,isStart:!0,kill:!1},Va={suppressEvents:!0,kill:!1},Ym={suppressEvents:!0},_u={},ar=[],Pc={},Nd,Un={},Cl={},Qu=30,Wa=[],gu="",xu=function(e){var t=e[0],n,i;if(gi(t)||Ct(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Wa.length;i--&&!Wa[i].targetTest(t););n=Wa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new sp(e[i],n)))||e.splice(i,1);return e},kr=function(e){return e._gsap||xu(jn(e))[0]._gsap},Od=function(e,t,n){return(n=e[t])&&Ct(n)?e[t]():fu(n)&&e.getAttribute&&e.getAttribute(t)||n},Tn=function(e,t){return(e=e.split(",")).forEach(t)||e},Lt=function(e){return Math.round(e*1e5)/1e5||0},qt=function(e){return Math.round(e*1e7)/1e7||0},Ns=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},qm=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},il=function(){var e=ar.length,t=ar.slice(0),n,i;for(Pc={},ar.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Fd=function(e,t,n,i){ar.length&&!tn&&il(),e.render(t,n,i||tn&&t<0&&(e._initted||e._startAt)),ar.length&&!tn&&il()},Bd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ld).length<2?t:Wt(e)?e.trim():e},kd=function(e){return e},Jn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},jm=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},$r=function(e,t){for(var n in t)e[n]=t[n];return e},eh=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=gi(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},rl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ro=function(e){var t=e.parent||bt,n=e.keyframes?jm(nn(e.keyframes)):Jn;if(Sn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Km=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},zd=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},_l=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},fr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},zr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},$m=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Lc=function(e,t,n,i){return e._startAt&&(tn?e._startAt.revert(Va):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Zm=function s(e){return!e||e._ts&&s(e.parent)},th=function(e){return e._repeat?Ws(e._tTime,e=e.duration()+e._rDelay)*e:0},Ws=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},sl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},gl=function(e){return e._end=qt(e._start+(e._tDur/Math.abs(e._ts||e._rts||_t)||0))},xl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=qt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),gl(e),n._dirty||zr(n,e)),e},Hd=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=sl(e.rawTime(),t),(!t._dur||ta(0,t.totalDuration(),n)-t._tTime>_t)&&t.render(n,!0)),zr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-_t}},ui=function(e,t,n,i){return t.parent&&fr(t),t._start=qt((Gi(n)?n:n||e!==bt?zn(e,n,t):e._time)+t._delay),t._end=qt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),zd(e,t,"_first","_last",e._sort?"_start":0),Dc(t)||(e._recent=t),i||Hd(e,t),e._ts<0&&xl(e,e._tTime),e},Gd=function(e,t){return(Bn.ScrollTrigger||mu("scrollTrigger",t))&&Bn.ScrollTrigger.create(t,e)},Vd=function(e,t,n,i,r){if(Mu(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!tn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Nd!==Nn.frame)return ar.push(e),e._lazy=[r,i],1},Jm=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Dc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Qm=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&Jm(e)&&!(!e._initted&&Dc(e))||(e._ts<0||e._dp._ts<0)&&!Dc(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=ta(0,e._tDur,t),u=Ws(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ws(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||tn||i||e._zTime===_t||!t&&e._zTime){if(!e._initted&&Vd(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?_t:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Lc(e,t,n,!0),e._onUpdate&&!n&&Kn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Kn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&fr(e,1),!n&&!tn&&(Kn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},e_=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Xs=function(e,t,n,i){var r=e._repeat,o=qt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:qt(o*(r+1)+e._rDelay*r):o,a>0&&!i&&xl(e,e._tTime=e._tDur*a),e.parent&&gl(e),n||zr(e.parent,e),e},nh=function(e){return e instanceof dn?zr(e):Xs(e,e._dur)},t_={_start:0,endTime:Go,totalDuration:Go},zn=function s(e,t,n){var i=e.labels,r=e._recent||t_,o=e.duration()>=qn?r.endTime(!1):e._dur,a,l,c;return Wt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(nn(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Co=function(e,t,n){var i=Gi(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Sn(l.vars.inherit)&&l.parent;o.immediateRender=Sn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new Ut(t[0],o,t[r+1])},mr=function(e,t){return e||e===0?t(e):t},ta=function(e,t,n){return n<e?e:n>t?t:n},en=function(e,t){return!Wt(e)||!(t=Wm.exec(e))?"":t[1]},n_=function(e,t,n){return mr(n,function(i){return ta(e,t,i)})},Ic=[].slice,Wd=function(e,t){return e&&gi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&gi(e[0]))&&!e.nodeType&&e!==Hn},i_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Wt(i)&&!t||Wd(i,1)?(r=n).push.apply(r,jn(i)):n.push(i)})||n},jn=function(e,t,n){return Rt&&!t&&Rt.selector?Rt.selector(e):Wt(e)&&!n&&(Cc||!Ys())?Ic.call((t||pu).querySelectorAll(e),0):nn(e)?i_(e,n):Wd(e)?Ic.call(e,0):e?[e]:[]},Uc=function(e){return e=jn(e)[0]||nl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return jn(t,n.querySelectorAll?n:n===e?nl("Invalid scope")||pu.createElement("div"):e)}},Xd=function(e){return e.sort(function(){return .5-Math.random()})},Yd=function(e){if(Ct(e))return e;var t=gi(e)?e:{each:e},n=Hr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return Wt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||t).length,m=o[_],p,y,x,v,S,w,A,P,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,qn])[1],!M){for(A=-qn;A<(A=g[M++].getBoundingClientRect().left)&&M<_;);M--}for(m=o[_]=[],p=l?Math.min(M,_)*u-.5:i%M,y=M===qn?0:l?_*h/M-.5:i/M|0,A=0,P=qn,w=0;w<_;w++)x=w%M-p,v=y-(w/M|0),m[w]=S=c?Math.abs(c==="y"?v:x):wd(x*x+v*v),S>A&&(A=S),S<P&&(P=S);i==="random"&&Xd(m),m.max=A-P,m.min=P,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=en(t.amount||t.each)||0,n=n&&_<0?np(n):n}return _=(m[f]-m.min)/m.max||0,qt(m.b+(n?n(_):_)*m.v)+m.u}},Nc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=qt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Gi(n)?0:en(n))}},qd=function(e,t){var n=nn(e),i,r;return!n&&gi(e)&&(i=n=e.radius||qn,e.values?(e=jn(e.values),(r=!Gi(e[0]))&&(i*=i)):e=Nc(e.increment)),mr(t,n?Ct(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=qn,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,r||u===o||Gi(o)?u:u+en(o)}:Nc(e))},jd=function(e,t,n,i){return mr(nn(e)?!t:n===!0?!!(n=0):!i,function(){return nn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},r_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},s_=function(e,t){return function(n){return e(parseFloat(n))+(t||en(n))}},o_=function(e,t,n){return $d(e,t,0,1,n)},Kd=function(e,t,n){return mr(n,function(i){return e[~~t(i)]})},a_=function s(e,t,n){var i=t-e;return nn(e)?Kd(e,s(0,e.length),t):mr(n,function(r){return(i+(r-e)%i)%i+e})},l_=function s(e,t,n){var i=t-e,r=i*2;return nn(e)?Kd(e,s(0,e.length-1),t):mr(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},Vo=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?Ld:Rc),n+=e.substr(t,i-t)+jd(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},$d=function(e,t,n,i,r){var o=t-e,a=i-n;return mr(r,function(l){return n+((l-e)/o*a||0)})},c_=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var o=Wt(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(nn(e)&&!nn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=$r(nn(e)?[]:{},e));if(!u){for(l in t)vu.call(a,e,l,"get",t[l]);r=function(g){return Tu(g,a)||(o?e.p:e)}}}return mr(n,r)},ih=function(e,t,n){var i=e.labels,r=qn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Kn=function(e,t,n){var i=e.vars,r=i[t],o=Rt,a=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&ar.length&&il(),a&&(Rt=a),u=l?r.apply(c,l):r.call(c),Rt=o,u},So=function(e){return fr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!tn),e.progress()<1&&Kn(e,"onInterrupt"),e},Ls,Zd=[],Jd=function(e){if(du()&&e){e=!e.name&&e.default||e;var t=e.name,n=Ct(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Go,render:Tu,add:vu,kill:b_,modifier:E_,rawVars:0},o={targetTest:0,get:0,getSetter:Su,aliases:{},register:0};if(Ys(),e!==i){if(Un[t])return;Jn(i,Jn(rl(e,r),o)),$r(i.prototype,$r(r,rl(e,o))),Un[i.prop=t]=i,e.targetTest&&(Wa.push(i),_u[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ud(t,i),e.register&&e.register(An,i,En)}else e&&Zd.push(e)},pt=255,To={aqua:[0,pt,pt],lime:[0,pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,pt],navy:[0,0,128],white:[pt,pt,pt],olive:[128,128,0],yellow:[pt,pt,0],orange:[pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[pt,0,0],pink:[pt,192,203],cyan:[0,pt,pt],transparent:[pt,pt,pt,0]},Pl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*pt+.5|0},Qd=function(e,t,n){var i=e?Gi(e)?[e>>16,e>>8&pt,e&pt]:0:To.black,r,o,a,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),To[e])i=To[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&pt,i&pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&pt,e&pt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Rc),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=Pl(l+1/3,r,o),i[1]=Pl(l,r,o),i[2]=Pl(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(Cd),n&&i.length<4&&(i[3]=1),i}else i=e.match(Rc)||To.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/pt,o=i[1]/pt,a=i[2]/pt,h=Math.max(r,o,a),f=Math.min(r,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(o-a)/d+(o<a?6:0):h===o?(a-r)/d+2:(r-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},ep=function(e){var t=[],n=[],i=-1;return e.split(lr).forEach(function(r){var o=r.match(Ps)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},rh=function(e,t,n){var i="",r=(e+i).match(lr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=Qd(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=ep(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(lr,"1").split(Ps),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(lr),h=c.length-1;a<h;a++)i+=c[a]+r[a];return i+c[h]},lr=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in To)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),u_=/hsl[a]?\(/,tp=function(e){var t=e.join(" "),n;if(lr.lastIndex=0,lr.test(t))return n=u_.test(t),e[1]=rh(e[1],n),e[0]=rh(e[0],n,ep(e[1])),!0},Wo,Nn=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,u,h,f,d,g=function _(m){var p=s()-i,y=m===!0,x,v,S,w;if(p>e&&(n+=p-t),i+=p,S=i-n,x=S-o,(x>0||y)&&(w=++h.frame,f=S-h.time*1e3,h.time=S=S/1e3,o+=x+(x>=r?4:r-x),v=1),y||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](S,f,w,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Dd&&(!Cc&&du()&&(Hn=Cc=window,pu=Hn.document||{},Bn.gsap=An,(Hn.gsapVersions||(Hn.gsapVersions=[])).push(An.version),Id(tl||Hn.GreenSockGlobals||!Hn.gsap&&Hn||{}),u=Hn.requestAnimationFrame,Zd.forEach(Jd)),l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Wo=1,g(2))},sleep:function(){(u?Hn.cancelAnimationFrame:clearTimeout)(l),Wo=0,c=Go},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),o=h.time*1e3+r},add:function(m,p,y){var x=p?function(v,S,w,A){m(v,S,w,A),h.remove(x)}:m;return h.remove(m),a[y?"unshift":"push"](x),Ys(),x},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h}(),Ys=function(){return!Wo&&Nn.wake()},at={},h_=/^[\d.\-M][\d.\-,\s]/,f_=/["']/g,d_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(f_,"").trim():+c,i=l.substr(a+1).trim();return t},p_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},m_=function(e){var t=(e+"").split("("),n=at[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[d_(t[1])]:p_(e).split(",").map(Bd)):at._CE&&h_.test(e)?at._CE("",e):n},np=function(e){return function(t){return 1-e(1-t)}},ip=function s(e,t){for(var n=e._first,i;n;)n instanceof dn?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Hr=function(e,t){return e&&(Ct(e)?e:at[e]||m_(e))||t},rs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Tn(e,function(a){at[a]=Bn[a]=r,at[o=a.toLowerCase()]=n;for(var l in r)at[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=at[a+"."+l]=r[l]}),r},rp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ll=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/wc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Vm((u-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:rp(a);return r=wc/r,l.config=function(c,u){return s(e,c,u)},l},Dl=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:rp(n);return i.config=function(r){return s(e,r)},i};Tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;rs(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});at.Linear.easeNone=at.none=at.Linear.easeIn;rs("Elastic",Ll("in"),Ll("out"),Ll());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};rs("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);rs("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});rs("Circ",function(s){return-(wd(1-s*s)-1)});rs("Sine",function(s){return s===1?1:-Gm(s*zm)+1});rs("Back",Dl("in"),Dl("out"),Dl());at.SteppedEase=at.steps=Bn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-_t;return function(a){return((i*ta(0,o,a)|0)+r)*n}}};Vs.ease=at["quad.out"];Tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return gu+=s+","+s+"Params,"});var sp=function(e,t){this.id=Hm++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Od,this.set=t?t.getSetter:Su},Xo=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Xs(this,+t.duration,1,1),this.data=t.data,Rt&&(this._ctx=Rt,Rt.data.push(this)),Wo||Nn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Xs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ys(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(xl(this,n),!r._dp||r.parent||Hd(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ui(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===_t||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Fd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+th(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+th(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ws(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-_t?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?sl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-_t?0:this._rts,this.totalTime(ta(-Math.abs(this._delay),this._tDur,i),!0),gl(this),$m(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ys(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==_t&&(this._tTime-=_t)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ui(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Sn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?sl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Ym);var i=tn;return tn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),tn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,nh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,nh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(zn(this,n),Sn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Sn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-_t:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-_t,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-_t)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=Ct(n)?n:kd,a=function(){var c=i.then;i.then=null,Ct(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){So(this)},s}();Jn(Xo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_t,_prom:0,_ps:!1,_rts:1});var dn=function(s){Ad(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Sn(n.sortChildren),bt&&ui(n.parent||bt,Li(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Gd(Li(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return Co(0,arguments,this),this},t.from=function(i,r,o){return Co(1,arguments,this),this},t.fromTo=function(i,r,o,a){return Co(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,Ro(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ut(i,r,zn(this,o),1),this},t.call=function(i,r,o){return ui(this,Ut.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ut(i,o,zn(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,u){return o.runBackwards=1,Ro(o).immediateRender=Sn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,u)},t.staggerFromTo=function(i,r,o,a,l,c,u,h){return a.startAt=o,Ro(a).immediateRender=Sn(a.immediateRender),this.staggerTo(i,r,a,l,c,u,h)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:qt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,y,x,v,S,w,A;if(this!==bt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,v=this._start,x=this._ts,p=!x,h&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(f=qt(u%m),u===l?(_=this._repeat,f=c):(_=~~(u/m),_&&_===u/m&&(f=c,_--),f>c&&(f=c)),S=Ws(this._tTime,m),!a&&this._tTime&&S!==_&&this._tTime-S*m-this._dur<=0&&(S=_),w&&_&1&&(f=c-f,A=1),_!==S&&!this._lock){var P=w&&S&1,M=P===(w&&_&1);if(_<S&&(P=!P),a=P?0:c,this._lock=1,this.render(a||(A?0:qt(_*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Kn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;ip(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=e_(this,qt(a),qt(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!r&&!_&&(Kn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,o),f!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=-_t);break}}d=g}else{d=this._last;for(var T=i<0?i:f;d;){if(g=d._prev,(d._act||T<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(T-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(T-d._start)*d._ts,r,o||tn&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=T?-_t:_t);break}}d=g}}if(y&&!r&&(this.pause(),y.render(f>=a?0:-_t)._zTime=f>=a?1:-1,this._ts))return this._start=v,gl(this),this.render(i,r,o);this._onUpdate&&!r&&Kn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&fr(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(Kn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(Gi(r)||(r=zn(this,r,i)),!(i instanceof Xo)){if(nn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(Wt(i))return this.addLabel(i,r);if(Ct(i))i=Ut.delayedCall(0,i);else return this}return this!==i?ui(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-qn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ut?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return Wt(i)?this.removeLabel(i):Ct(i)?this.killTweensOf(i):(_l(this,i),i===this._recent&&(this._recent=this._last),zr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=qt(Nn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=zn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=Ut.delayedCall(0,r||Go,o);return a.data="isPause",this._hasPause=1,ui(this,a,zn(this,i))},t.removePause=function(i){var r=this._first;for(i=zn(this,i);r;)r._start===i&&r.data==="isPause"&&fr(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)tr!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=jn(i),l=this._first,c=Gi(r),u;l;)l instanceof Ut?qm(l._targets,a)&&(c?(!tr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=zn(o,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Ut.to(o,Jn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||_t,onStart:function(){if(o.pause(),!d){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Xs(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,Jn({startAt:{time:zn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),ih(this,zn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),ih(this,zn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+_t)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return zr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),zr(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=qn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ui(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Xs(o,o===bt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(bt._ts&&(Fd(bt,sl(i,bt)),Nd=Nn.frame),Nn.frame>=Qu){Qu+=Fn.autoSleep||120;var r=bt._first;if((!r||!r._ts)&&Fn.autoSleep&&Nn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Nn.sleep()}}},e}(Xo);Jn(dn.prototype,{_lock:0,_hasPause:0,_forcing:0});var __=function(e,t,n,i,r,o,a){var l=new En(this._pt,e,t,0,1,hp,null,r),c=0,u=0,h,f,d,g,_,m,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Vo(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),f=n.match(Rl)||[];h=Rl.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Ns(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Rl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Pd.test(i)||p)&&(l.e=0),this._pt=l,l},vu=function(e,t,n,i,r,o,a,l,c,u){Ct(i)&&(i=i(r||0,e,o));var h=e[t],f=n!=="get"?n:Ct(h)?c?e[t.indexOf("set")||!Ct(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Ct(h)?c?y_:cp:yu,g;if(Wt(i)&&(~i.indexOf("random(")&&(i=Vo(i)),i.charAt(1)==="="&&(g=Ns(f,i)+(en(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Oc)return!isNaN(f*i)&&i!==""?(g=new En(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?T_:up,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&mu(t,i),__.call(this,e,t,f,i,d,l||Fn.stringFilter,c))},g_=function(e,t,n,i,r){if(Ct(e)&&(e=Po(e,r,t,n,i)),!gi(e)||e.style&&e.nodeType||nn(e)||Rd(e))return Wt(e)?Po(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=Po(e[a],r,t,n,i);return o},op=function(e,t,n,i,r,o){var a,l,c,u;if(Un[e]&&(a=new Un[e]).init(r,a.rawVars?t[e]:g_(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new En(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==Ls))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},tr,Oc,Mu=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,d=i.yoyoEase,g=i.keyframes,_=i.autoRevert,m=e._dur,p=e._startAt,y=e._targets,x=e.parent,v=x&&x.data==="nested"?x.vars.targets:y,S=e._overwrite==="auto"&&!hu,w=e.timeline,A,P,M,T,G,B,D,O,N,K,F,Y,Z;if(w&&(!g||!r)&&(r="none"),e._ease=Hr(r,Vs.ease),e._yEase=d?np(Hr(d===!0?r:d,Vs.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!w&&!!i.runBackwards,!w||g&&!i.stagger){if(O=y[0]?kr(y[0]).harness:0,Y=O&&i[O.prop],A=rl(i,_u),p&&(p._zTime<0&&p.progress(1),t<0&&f&&a&&!_?p.render(-1,!0):p.revert(f&&m?Va:Xm),p._lazy=0),o){if(fr(e._startAt=Ut.set(y,Jn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!p&&Sn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(tn||!a&&!_)&&e._startAt.revert(Va),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!p){if(t&&(a=!1),M=Jn({overwrite:!1,data:"isFromStart",lazy:a&&!p&&Sn(l),immediateRender:a,stagger:0,parent:x},A),Y&&(M[O.prop]=Y),fr(e._startAt=Ut.set(y,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(tn?e._startAt.revert(Va):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,_t,_t);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Sn(l)||l&&!m,P=0;P<y.length;P++){if(G=y[P],D=G._gsap||xu(y)[P]._gsap,e._ptLookup[P]=K={},Pc[D.id]&&ar.length&&il(),F=v===y?P:v.indexOf(G),O&&(N=new O).init(G,Y||A,e,F,v)!==!1&&(e._pt=T=new En(e._pt,G,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(R){K[R]=T}),N.priority&&(B=1)),!O||Y)for(M in A)Un[M]&&(N=op(M,A,e,F,G,v))?N.priority&&(B=1):K[M]=T=vu.call(e,G,M,"get",A[M],F,v,0,i.stringFilter);e._op&&e._op[P]&&e.kill(G,e._op[P]),S&&e._pt&&(tr=e,bt.killTweensOf(G,K,e.globalTime(t)),Z=!e.parent,tr=0),e._pt&&l&&(Pc[D.id]=1)}B&&fp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Z,g&&t<=0&&w.render(qn,!0,!0)},x_=function(e,t,n,i,r,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Oc=1,e.vars[t]="+=0",Mu(e,a),Oc=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=Lt(n)+en(u.e)),u.b&&(u.b=c.s+en(u.b))},v_=function(e,t){var n=e[0]?kr(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=$r({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},M_=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(nn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},Po=function(e,t,n,i,r){return Ct(e)?e.call(t,n,i,r):Wt(e)&&~e.indexOf("random(")?Vo(e):e},ap=gu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",lp={};Tn(ap+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return lp[s]=1});var Ut=function(s){Ad(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Ro(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=i.parent||bt,x=(nn(n)||Rd(n)?Gi(n[0]):"length"in i)?[n]:jn(n),v,S,w,A,P,M,T,G;if(a._targets=x.length?xu(x):nl("GSAP target "+n+" not found. https://greensock.com",!Fn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||sa(c)||sa(u)){if(i=a.vars,v=a.timeline=new dn({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:x}),v.kill(),v.parent=v._dp=Li(a),v._start=0,f||sa(c)||sa(u)){if(A=x.length,T=f&&Yd(f),gi(f))for(P in f)~ap.indexOf(P)&&(G||(G={}),G[P]=f[P]);for(S=0;S<A;S++)w=rl(i,lp),w.stagger=0,p&&(w.yoyoEase=p),G&&$r(w,G),M=x[S],w.duration=+Po(c,Li(a),S,M,x),w.delay=(+Po(u,Li(a),S,M,x)||0)-a._delay,!f&&A===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),v.to(M,w,T?T(S,M,x):0),v._ease=at.none;v.duration()?c=u=0:a.timeline=0}else if(g){Ro(Jn(v.vars.defaults,{ease:"none"})),v._ease=Hr(g.ease||i.ease||"none");var B=0,D,O,N;if(nn(g))g.forEach(function(K){return v.to(x,K,">")}),v.duration();else{w={};for(P in g)P==="ease"||P==="easeEach"||M_(P,g[P],w,g.easeEach);for(P in w)for(D=w[P].sort(function(K,F){return K.t-F.t}),B=0,S=0;S<D.length;S++)O=D[S],N={ease:O.e,duration:(O.t-(S?D[S-1].t:0))/100*c},N[P]=O.v,v.to(x,N,B),B+=N.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!hu&&(tr=Li(a),bt.killTweensOf(x),tr=0),ui(y,Li(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===qt(y._time)&&Sn(h)&&Zm(Li(a))&&y.data!=="nested")&&(a._tTime=-_t,a.render(Math.max(0,-u)||0)),m&&Gd(Li(a),m),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-_t&&!u?l:i<_t?0:i,f,d,g,_,m,p,y,x,v;if(!c)Qm(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,r,o);if(f=qt(h%_),h===l?(g=this._repeat,f=c):(g=~~(h/_),g&&g===h/_&&(f=c,g--),f>c&&(f=c)),p=this._yoyo&&g&1,p&&(v=this._yEase,f=c-f),m=Ws(this._tTime,_),f===a&&!o&&this._initted)return this._tTime=h,this;g!==m&&(x&&this._yEase&&ip(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=o=1,this.render(qt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Vd(this,u?i:f,o,r,h))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(v||this._ease)(f/c),this._from&&(this.ratio=y=1-y),f&&!a&&!r&&!g&&(Kn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;x&&x.render(i<0?i:!f&&p?-_t:x._dur*x._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Lc(this,i,r,o),Kn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&Kn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Lc(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&fr(this,1),!r&&!(u&&!a)&&(h||a||p)&&(Kn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a){Wo||Nn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Mu(this,l),c=this._ease(l/this._dur),x_(this,i,r,o,a,c,l)?this.resetTo(i,r,o,a):(xl(this,0),this.parent||zd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?So(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,tr&&tr.vars.overwrite!==!0)._first||So(this),this.parent&&o!==this.timeline.totalDuration()&&Xs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?jn(i):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!r||r==="all")&&Km(a,l))return r==="all"&&(this._pt=0),So(this);for(h=this._op=this._op||[],r!=="all"&&(Wt(r)&&(_={},Tn(r,function(y){return _[y]=1}),r=_),r=v_(a,r)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],r==="all"?(h[p]=r,g=f,d={}):(d=h[p]=h[p]||{},g=r);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&_l(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&So(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Co(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return Co(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return bt.killTweensOf(i,r,o)},e}(Xo);Jn(Ut.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Tn("staggerTo,staggerFrom,staggerFromTo",function(s){Ut[s]=function(){var e=new dn,t=Ic.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var yu=function(e,t,n){return e[t]=n},cp=function(e,t,n){return e[t](n)},y_=function(e,t,n,i){return e[t](i.fp,n)},S_=function(e,t,n){return e.setAttribute(t,n)},Su=function(e,t){return Ct(e[t])?cp:fu(e[t])&&e.setAttribute?S_:yu},up=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},T_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},hp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Tu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},E_=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},b_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?_l(this,t,"_pt"):t.dep||(n=1),t=i;return!n},A_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},fp=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},En=function(){function s(t,n,i,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||up,this.d=l||this,this.set=c||yu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=A_,this.m=n,this.mt=r,this.tween=i},s}();Tn(gu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return _u[s]=1});Bn.TweenMax=Bn.TweenLite=Ut;Bn.TimelineLite=Bn.TimelineMax=dn;bt=new dn({sortChildren:!1,defaults:Vs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Fn.stringFilter=tp;var Gr=[],Xa={},w_=[],sh=0,R_=0,Il=function(e){return(Xa[e]||w_).map(function(t){return t()})},Fc=function(){var e=Date.now(),t=[];e-sh>2&&(Il("matchMediaInit"),Gr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Hn.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Il("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),sh=e,Il("matchMedia"))},dp=function(){function s(t,n){this.selector=n&&Uc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=R_++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Ct(n)&&(r=i,i=n,n=Ct);var o=this,a=function(){var c=Rt,u=o.selector,h;return c&&c!==o&&c.data.push(o),r&&(o.selector=Uc(r)),Rt=o,h=i.apply(o,arguments),Ct(h)&&o._r.push(h),Rt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ct?a(o):n?o[n]=a:a},e.ignore=function(n){var i=Rt;Rt=null,n(this),Rt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Ut&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return l instanceof dn?l.data!=="nested"&&l.kill():!(l instanceof Ut)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var a=Gr.length;a--;)Gr[a].id===this.id&&Gr.splice(a,1)},e.revert=function(n){this.kill(n||{})},s}(),C_=function(){function s(t){this.contexts=[],this.scope=t}var e=s.prototype;return e.add=function(n,i,r){gi(n)||(n={matches:n});var o=new dp(0,r||this.scope),a=o.conditions={},l,c,u;Rt&&!o.selector&&(o.selector=Rt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Hn.matchMedia(n[c]),l&&(Gr.indexOf(o)<0&&Gr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Fc):l.addEventListener("change",Fc)));return u&&i(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),ol={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Jd(i)})},timeline:function(e){return new dn(e)},getTweensOf:function(e,t){return bt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Wt(e)&&(e=jn(e)[0]);var r=kr(e||{}).get,o=n?kd:Bd;return n==="native"&&(n=""),e&&(t?o((Un[t]&&Un[t].get||r)(e,t,n,i)):function(a,l,c){return o((Un[a]&&Un[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=jn(e),e.length>1){var i=e.map(function(u){return An.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var o=Un[t],a=kr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Ls._pt=0,h.init(e,n?u+n:u,Ls,0,[e]),h.render(1,h),Ls._pt&&Tu(1,Ls)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=An.to(e,$r((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Hr(e.ease,Vs.ease)),eh(Vs,e||{})},config:function(e){return eh(Fn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Un[a]&&!Bn[a]&&nl(t+" effect requires "+a+" plugin.")}),Cl[t]=function(a,l,c){return n(jn(a),Jn(l||{},r),c)},o&&(dn.prototype[t]=function(a,l,c){return this.add(Cl[t](a,gi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){at[e]=Hr(t)},parseEase:function(e,t){return arguments.length?Hr(e,t):at},getById:function(e){return bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new dn(e),i,r;for(n.smoothChildTiming=Sn(e.smoothChildTiming),bt.remove(n),n._dp=0,n._time=n._tTime=bt._time,i=bt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Ut&&i.vars.onComplete===i._targets[0]))&&ui(n,i,i._start-i._delay),i=r;return ui(bt,n,0),n},context:function(e,t){return e?new dp(e,t):Rt},matchMedia:function(e){return new C_(e)},matchMediaRefresh:function(){return Gr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Fc()},addEventListener:function(e,t){var n=Xa[e]||(Xa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Xa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:a_,wrapYoyo:l_,distribute:Yd,random:jd,snap:qd,normalize:o_,getUnit:en,clamp:n_,splitColor:Qd,toArray:jn,selector:Uc,mapRange:$d,pipe:r_,unitize:s_,interpolate:c_,shuffle:Xd},install:Id,effects:Cl,ticker:Nn,updateRoot:dn.updateRoot,plugins:Un,globalTimeline:bt,core:{PropTween:En,globals:Ud,Tween:Ut,Timeline:dn,Animation:Xo,getCache:kr,_removeLinkedListItem:_l,reverting:function(){return tn},context:function(e){return e&&Rt&&(Rt.data.push(e),e._ctx=Rt),Rt},suppressOverwrites:function(e){return hu=e}}};Tn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return ol[s]=Ut[s]});Nn.add(dn.updateRoot);Ls=ol.to({},{duration:0});var P_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},L_=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=P_(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},Ul=function(e,t){return{name:e,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(Wt(r)&&(l={},Tn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}L_(a,r)}}}},An=ol.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)tn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ul("roundProps",Nc),Ul("modifiers"),Ul("snap",qd))||ol;Ut.version=dn.version=An.version="3.12.1";Dd=1;du()&&Ys();at.Power0;at.Power1;at.Power2;at.Power3;at.Power4;at.Linear;at.Quad;at.Cubic;at.Quart;at.Quint;at.Strong;at.Elastic;at.Back;at.SteppedEase;at.Bounce;at.Sine;at.Expo;at.Circ;/*!
 * CSSPlugin 3.12.1
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var oh,nr,Os,Eu,Or,ah,bu,D_=function(){return typeof window<"u"},Vi={},Cr=180/Math.PI,Fs=Math.PI/180,ss=Math.atan2,lh=1e8,Au=/([A-Z])/g,I_=/(left|right|width|margin|padding|x)/i,U_=/[\s,\(]\S/,fi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Bc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},N_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},O_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},F_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},pp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},mp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},B_=function(e,t,n){return e.style[t]=n},k_=function(e,t,n){return e.style.setProperty(t,n)},z_=function(e,t,n){return e._gsap[t]=n},H_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},G_=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},V_=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},At="transform",oi=At+"Origin",W_=function s(e,t){var n=this,i=this.target,r=i.style;if(e in Vi&&r){if(this.tfm=this.tfm||{},e!=="transform")e=fi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Di(i,o)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Di(i,e);else return fi.transform.split(",").forEach(function(o){return s.call(n,o,t)});if(this.props.indexOf(At)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(oi,t,"")),e=At}(r||t)&&this.props.push(e,t,r[e])},_p=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},X_=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Au,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=bu(),(!r||!r.isStart)&&!n[At]&&(_p(n),i.uncache=1)}},gp=function(e,t){var n={target:e,props:[],revert:X_,save:W_};return e._gsap||An.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},xp,kc=function(e,t){var n=nr.createElementNS?nr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):nr.createElement(e);return n.style?n:nr.createElement(e)},pi=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Au,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,qs(t)||t,1)||""},ch="O,Moz,ms,Ms,Webkit".split(","),qs=function(e,t,n){var i=t||Or,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ch[o]+e in r););return o<0?null:(o===3?"ms":o>=0?ch[o]:"")+e},zc=function(){D_()&&window.document&&(oh=window,nr=oh.document,Os=nr.documentElement,Or=kc("div")||{style:{}},kc("div"),At=qs(At),oi=At+"Origin",Or.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",xp=!!qs("perspective"),bu=An.core.reverting,Eu=1)},Nl=function s(e){var t=kc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(Os.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Os.removeChild(t),this.style.cssText=r,o},uh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},vp=function(e){var t;try{t=e.getBBox()}catch{t=Nl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Nl||(t=Nl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+uh(e,["x","cx","x1"])||0,y:+uh(e,["y","cy","y1"])||0,width:0,height:0}:t},Mp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&vp(e))},Yo=function(e,t){if(t){var n=e.style;t in Vi&&t!==oi&&(t=At),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Au,"-$1").toLowerCase())):n.removeAttribute(t)}},ir=function(e,t,n,i,r,o){var a=new En(e._pt,t,n,0,1,o?mp:pp);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},hh={deg:1,rad:1,turn:1},Y_={grid:1,flex:1},dr=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Or.style,l=I_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,m,p;return i===o||!r||hh[i]||hh[o]?r:(o!=="px"&&!f&&(r=s(e,t,n,"px")),p=e.getCTM&&Mp(e),(d||o==="%")&&(Vi[t]||~t.indexOf("adius"))?(g=p?e.getBBox()[l?"width":"height"]:e[u],Lt(d?r/g*h:r/100*g)):(a[l?"width":"height"]=h+(f?o:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===nr||!_.appendChild)&&(_=nr.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Nn.time&&!m.uncache?Lt(r/m.width*h):((d||o==="%")&&!Y_[pi(_,"display")]&&(a.position=pi(e,"position")),_===e&&(a.position="static"),_.appendChild(Or),g=Or[u],_.removeChild(Or),a.position="absolute",l&&d&&(m=kr(_),m.time=Nn.time,m.width=_[u]),Lt(f?g*r/h:g&&r?h/g*r:0))))},Di=function(e,t,n,i){var r;return Eu||zc(),t in fi&&t!=="transform"&&(t=fi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Vi[t]&&t!=="transform"?(r=jo(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:ll(pi(e,oi))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=al[t]&&al[t](e,t,n)||pi(e,t)||Od(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?dr(e,t,r,n)+n:r},q_=function(e,t,n,i){if(!n||n==="none"){var r=qs(t,e,1),o=r&&pi(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=pi(e,"borderTopColor"))}var a=new En(this._pt,e.style,t,0,1,hp),l=0,c=0,u,h,f,d,g,_,m,p,y,x,v,S;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=pi(e,t)||i,e.style[t]=n),u=[n,i],tp(u),n=u[0],i=u[1],f=n.match(Ps)||[],S=i.match(Ps)||[],S.length){for(;h=Ps.exec(i);)m=h[0],y=i.substring(l,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=Ns(d,m)+v),p=parseFloat(m),x=m.substr((p+"").length),l=Ps.lastIndex-x.length,x||(x=x||Fn.units[t]||v,l===i.length&&(i+=x,a.e+=x)),v!==x&&(d=dr(e,t,_,x)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?mp:pp;return Pd.test(i)&&(a.e=0),this._pt=a,a},fh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},j_=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=fh[n]||n,t[1]=fh[i]||i,t.join(" ")},K_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Vi[a]&&(l=1,a=a==="transformOrigin"?oi:At),Yo(n,a);l&&(Yo(n,At),o&&(o.svg&&n.removeAttribute("transform"),jo(n,1),o.uncache=1,_p(i)))}},al={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new En(e._pt,t,n,0,0,K_);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},qo=[1,0,0,1,0,0],yp={},Sp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},dh=function(e){var t=pi(e,At);return Sp(t)?qo:t.substr(7).match(Cd).map(Lt)},wu=function(e,t){var n=e._gsap||kr(e),i=e.style,r=dh(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?qo:r):(r===qo&&!e.offsetParent&&e!==Os&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Os.appendChild(e)),r=dh(e),l?i.display=l:Yo(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Os.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Hc=function(e,t,n,i,r,o){var a=e._gsap,l=r||wu(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],y=l[5],x=t.split(" "),v=parseFloat(x[0])||0,S=parseFloat(x[1])||0,w,A,P,M;n?l!==qo&&(A=d*m-g*_)&&(P=v*(m/A)+S*(-_/A)+(_*y-m*p)/A,M=v*(-g/A)+S*(d/A)-(d*y-g*p)/A,v=P,S=M):(w=vp(e),v=w.x+(~x[0].indexOf("%")?v/100*w.width:v),S=w.y+(~(x[1]||x[0]).indexOf("%")?S/100*w.height:S)),i||i!==!1&&a.smooth?(p=v-c,y=S-u,a.xOffset=h+(p*d+y*_)-p,a.yOffset=f+(p*g+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=S,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[oi]="0px 0px",o&&(ir(o,a,"xOrigin",c,v),ir(o,a,"yOrigin",u,S),ir(o,a,"xOffset",h,a.xOffset),ir(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+S)},jo=function(e,t){var n=e._gsap||new sp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=pi(e,oi)||"0",u,h,f,d,g,_,m,p,y,x,v,S,w,A,P,M,T,G,B,D,O,N,K,F,Y,Z,R,le,H,ee,J,se;return u=h=f=_=m=p=y=x=v=0,d=g=1,n.svg=!!(e.getCTM&&Mp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[At]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[At]!=="none"?l[At]:"")),i.scale=i.rotate=i.translate="none"),A=wu(e,n.svg),n.svg&&(n.uncache?(Y=e.getBBox(),c=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",F=""):F=!t&&e.getAttribute("data-svg-origin"),Hc(e,F||c,!!F||n.originIsAbsolute,n.smooth!==!1,A)),S=n.xOrigin||0,w=n.yOrigin||0,A!==qo&&(G=A[0],B=A[1],D=A[2],O=A[3],u=N=A[4],h=K=A[5],A.length===6?(d=Math.sqrt(G*G+B*B),g=Math.sqrt(O*O+D*D),_=G||B?ss(B,G)*Cr:0,y=D||O?ss(D,O)*Cr+_:0,y&&(g*=Math.abs(Math.cos(y*Fs))),n.svg&&(u-=S-(S*G+w*D),h-=w-(S*B+w*O))):(se=A[6],ee=A[7],R=A[8],le=A[9],H=A[10],J=A[11],u=A[12],h=A[13],f=A[14],P=ss(se,H),m=P*Cr,P&&(M=Math.cos(-P),T=Math.sin(-P),F=N*M+R*T,Y=K*M+le*T,Z=se*M+H*T,R=N*-T+R*M,le=K*-T+le*M,H=se*-T+H*M,J=ee*-T+J*M,N=F,K=Y,se=Z),P=ss(-D,H),p=P*Cr,P&&(M=Math.cos(-P),T=Math.sin(-P),F=G*M-R*T,Y=B*M-le*T,Z=D*M-H*T,J=O*T+J*M,G=F,B=Y,D=Z),P=ss(B,G),_=P*Cr,P&&(M=Math.cos(P),T=Math.sin(P),F=G*M+B*T,Y=N*M+K*T,B=B*M-G*T,K=K*M-N*T,G=F,N=Y),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Lt(Math.sqrt(G*G+B*B+D*D)),g=Lt(Math.sqrt(K*K+se*se)),P=ss(N,K),y=Math.abs(P)>2e-4?P*Cr:0,v=J?1/(J<0?-J:J):0),n.svg&&(F=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Sp(pi(e,At)),F&&e.setAttribute("transform",F))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Lt(d),n.scaleY=Lt(g),n.rotation=Lt(_)+a,n.rotationX=Lt(m)+a,n.rotationY=Lt(p)+a,n.skewX=y+a,n.skewY=x+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[oi]=ll(c)),n.xOffset=n.yOffset=0,n.force3D=Fn.force3D,n.renderTransform=n.svg?Z_:xp?Tp:$_,n.uncache=0,n},ll=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ol=function(e,t,n){var i=en(t);return Lt(parseFloat(t)+parseFloat(dr(e,"x",n+"px",i)))+i},$_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Tp(e,t)},yr="0deg",uo="0px",Sr=") ",Tp=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,x=n.zOrigin,v="",S=p==="auto"&&e&&e!==1||p===!0;if(x&&(h!==yr||u!==yr)){var w=parseFloat(u)*Fs,A=Math.sin(w),P=Math.cos(w),M;w=parseFloat(h)*Fs,M=Math.cos(w),o=Ol(y,o,A*M*-x),a=Ol(y,a,-Math.sin(w)*-x),l=Ol(y,l,P*M*-x+x)}m!==uo&&(v+="perspective("+m+Sr),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(S||o!==uo||a!==uo||l!==uo)&&(v+=l!==uo||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Sr),c!==yr&&(v+="rotate("+c+Sr),u!==yr&&(v+="rotateY("+u+Sr),h!==yr&&(v+="rotateX("+h+Sr),(f!==yr||d!==yr)&&(v+="skew("+f+", "+d+Sr),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Sr),y.style[At]=v||"translate(0, 0)"},Z_=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,x=parseFloat(o),v=parseFloat(a),S,w,A,P,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Fs,c*=Fs,S=Math.cos(l)*h,w=Math.sin(l)*h,A=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=Fs,M=Math.tan(c-u),M=Math.sqrt(1+M*M),A*=M,P*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),S*=M,w*=M)),S=Lt(S),w=Lt(w),A=Lt(A),P=Lt(P)):(S=h,P=f,w=A=0),(x&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(x=dr(d,"x",o,"px"),v=dr(d,"y",a,"px")),(g||_||m||p)&&(x=Lt(x+g-(g*S+_*A)+m),v=Lt(v+_-(g*w+_*P)+p)),(i||r)&&(M=d.getBBox(),x=Lt(x+i/100*M.width),v=Lt(v+r/100*M.height)),M="matrix("+S+","+w+","+A+","+P+","+x+","+v+")",d.setAttribute("transform",M),y&&(d.style[At]=M)},J_=function(e,t,n,i,r){var o=360,a=Wt(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Cr:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=r.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*lh)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*lh)%o-~~(c/o)*o)),e._pt=f=new En(e._pt,t,n,i,c,N_),f.e=u,f.u="deg",e._props.push(n),f},ph=function(e,t){for(var n in t)e[n]=t[n];return e},Q_=function(e,t,n){var i=ph({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[At]=t,a=jo(n,1),Yo(n,At),n.setAttribute("transform",c)):(c=getComputedStyle(n)[At],o[At]=t,a=jo(n,1),o[At]=c);for(l in Vi)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(d=en(c),g=en(u),h=d!==g?dr(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new En(e._pt,a,l,h,f-h,Bc),e._pt.u=g||0,e._props.push(l));ph(a,i)};Tn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});al[e>1?"border"+s:s]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return Di(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var Ep={name:"css",register:zc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,m,p,y,x,v,S,w,A,P;Eu||zc(),this.styles=this.styles||gp(e),P=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Un[_]&&op(_,t,n,i,e,r)))){if(d=typeof u,g=al[_],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Vo(u)),g)g(this,e,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",lr.lastIndex=0,lr.test(c)||(m=en(c),p=en(u)),p?m!==p&&(c=dr(e,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,i,r,0,0,_),o.push(_),P.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],Wt(c)&&~c.indexOf("random(")&&(c=Vo(c)),en(c+"")||(c+=Fn.units[_]||en(Di(e,_))||""),(c+"").charAt(1)==="="&&(c=Di(e,_))):c=Di(e,_),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in fi&&(_==="autoAlpha"&&(f===1&&Di(e,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,a.visibility),ir(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=fi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Vi,x){if(this.styles.save(_),v||(S=e._gsap,S.renderTransform&&!t.parseTransform||jo(e,t.parseTransform),w=t.smoothOrigin!==!1&&S.smooth,v=this._pt=new En(this._pt,a,At,0,1,S.renderTransform,S,0,-1),v.dep=1),_==="scale")this._pt=new En(this._pt,S,"scaleY",S.scaleY,(y?Ns(S.scaleY,y+h):h)-S.scaleY||0,Bc),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(oi,0,a[oi]),u=j_(u),S.svg?Hc(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==S.zOrigin&&ir(this,S,"zOrigin",S.zOrigin,p),ir(this,a,_,ll(c),ll(u)));continue}else if(_==="svgOrigin"){Hc(e,u,1,w,0,this);continue}else if(_ in yp){J_(this,S,_,f,y?Ns(f,y+u):u);continue}else if(_==="smoothOrigin"){ir(this,S,"smooth",S.smooth,u);continue}else if(_==="force3D"){S[_]=u;continue}else if(_==="transform"){Q_(this,u,e);continue}}else _ in a||(_=qs(_)||_);if(x||(h||h===0)&&(f||f===0)&&!U_.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),p=en(u)||(_ in Fn.units?Fn.units[_]:m),m!==p&&(f=dr(e,_,c,p)),this._pt=new En(this._pt,x?S:a,_,f,(y?Ns(f,y+h):h)-f,!x&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?F_:Bc),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=O_);else if(_ in a)q_.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,i,r);else if(_!=="parseTransform"){mu(_,u);continue}x||(_ in a?P.push(_,0,a[_]):P.push(_,1,c||e[_])),o.push(_)}}A&&fp(this)},render:function(e,t){if(t.tween._time||!bu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Di,aliases:fi,getSetter:function(e,t,n){var i=fi[t];return i&&i.indexOf(",")<0&&(t=i),t in Vi&&t!==oi&&(e._gsap.x||Di(e,"x"))?n&&ah===n?t==="scale"?H_:z_:(ah=n||{})&&(t==="scale"?G_:V_):e.style&&!fu(e.style[t])?B_:~t.indexOf("-")?k_:Su(e,t)},core:{_removeProperty:Yo,_getMatrix:wu}};An.utils.checkPrefix=qs;An.core.getStyleSaver=gp;(function(s,e,t,n){var i=Tn(s+","+e+","+t,function(r){Vi[r]=1});Tn(e,function(r){Fn.units[r]="deg",yp[r]=1}),fi[i[13]]=s+","+e,Tn(n,function(r){var o=r.split(":");fi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Fn.units[s]="px"});An.registerPlugin(Ep);var wn=An.registerPlugin(Ep)||An;wn.core.Tween;function mh(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function eg(s,e,t){return e&&mh(s.prototype,e),t&&mh(s,t),s}/*!
 * Observer 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var jt,Gc,On,rr,sr,Bs,bp,Pr,Lo,Ap,Ui,ii,wp,Rp=function(){return jt||typeof window<"u"&&(jt=window.gsap)&&jt.registerPlugin&&jt},Cp=1,Ds=[],et=[],mi=[],Do=Date.now,Vc=function(e,t){return t},tg=function(){var e=Lo.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,et),i.push.apply(i,mi),et=n,mi=i,Vc=function(o,a){return t[o](a)}},cr=function(e,t){return~mi.indexOf(e)&&mi[mi.indexOf(e)+1][t]},Io=function(e){return!!~Ap.indexOf(e)},vn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},on=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},oa="scrollLeft",aa="scrollTop",Wc=function(){return Ui&&Ui.isPressed||et.cache++},cl=function(e,t){var n=function i(r){if(r||r===0){Cp&&(On.history.scrollRestoration="manual");var o=Ui&&Ui.isPressed;r=i.v=Math.round(r)||(Ui&&Ui.iOS?1:0),e(r),i.cacheID=et.cache,o&&Vc("ss",r)}else(t||et.cache!==i.cacheID||Vc("ref"))&&(i.cacheID=et.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},pn={s:oa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:cl(function(s){return arguments.length?On.scrollTo(s,Ft.sc()):On.pageXOffset||rr[oa]||sr[oa]||Bs[oa]||0})},Ft={s:aa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:pn,sc:cl(function(s){return arguments.length?On.scrollTo(pn.sc(),s):On.pageYOffset||rr[aa]||sr[aa]||Bs[aa]||0})},Mn=function(e,t){return(t&&t._ctx&&t._ctx.selector||jt.utils.toArray)(e)[0]||(typeof e=="string"&&jt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},pr=function(e,t){var n=t.s,i=t.sc;Io(e)&&(e=rr.scrollingElement||sr);var r=et.indexOf(e),o=i===Ft.sc?1:2;!~r&&(r=et.push(e)-1),et[r+o]||e.addEventListener("scroll",Wc);var a=et[r+o],l=a||(et[r+o]=cl(cr(e,n),!0)||(Io(e)?i:cl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=jt.getProperty(e,"scrollBehavior")==="smooth"),l},Xc=function(e,t,n){var i=e,r=e,o=Do(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=Do();_||m-o>l?(r=i,i=g,a=o,o=m):n?i+=g:i=r+(g-r)/(m-a)*(o-a)},h=function(){r=i=n?0:i,a=o=0},f=function(g){var _=a,m=r,p=Do();return(g||g===0)&&g!==i&&u(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},ho=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},_h=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Pp=function(){Lo=jt.core.globals().ScrollTrigger,Lo&&Lo.core&&tg()},Lp=function(e){return jt=e||Rp(),jt&&typeof document<"u"&&document.body&&(On=window,rr=document,sr=rr.documentElement,Bs=rr.body,Ap=[On,rr,sr,Bs],jt.utils.clamp,wp=jt.core.context||function(){},Pr="onpointerenter"in Bs?"pointer":"mouse",bp=Nt.isTouch=On.matchMedia&&On.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in On||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ii=Nt.eventTypes=("ontouchstart"in sr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in sr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Cp=0},500),Pp(),Gc=1),Gc};pn.op=Ft;et.cache=0;var Nt=function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){Gc||Lp(jt)||console.warn("Please gsap.registerPlugin(Observer)"),Lo||Pp();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,y=n.onDrag,x=n.onPress,v=n.onRelease,S=n.onRight,w=n.onLeft,A=n.onUp,P=n.onDown,M=n.onChangeX,T=n.onChangeY,G=n.onChange,B=n.onToggleX,D=n.onToggleY,O=n.onHover,N=n.onHoverEnd,K=n.onMove,F=n.ignoreCheck,Y=n.isNormalizer,Z=n.onGestureStart,R=n.onGestureEnd,le=n.onWheel,H=n.onEnable,ee=n.onDisable,J=n.onClick,se=n.scrollSpeed,ce=n.capture,de=n.allowClicks,Ce=n.lockAxis,Te=n.onLockAxis;this.target=a=Mn(a)||sr,this.vars=n,d&&(d=jt.utils.toArray(d)),i=i||1e-9,r=r||0,g=g||1,se=se||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(On.getComputedStyle(Bs).lineHeight)||22);var dt,Oe,k,De,pe,Pe,Ae,V=this,Ie=0,Ue=0,rt=pr(a,pn),Ye=pr(a,Ft),Mt=rt(),C=Ye(),b=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ii[0]==="pointerdown",q=Io(a),Q=a.ownerDocument||rr,te=[0,0,0],ie=[0,0,0],ye=0,oe=function(){return ye=Do()},$=function(fe,ze){return(V.event=fe)&&d&&~d.indexOf(fe.target)||ze&&b&&fe.pointerType!=="touch"||F&&F(fe,ze)},ve=function(){V._vx.reset(),V._vy.reset(),Oe.pause(),h&&h(V)},we=function(){var fe=V.deltaX=_h(te),ze=V.deltaY=_h(ie),je=Math.abs(fe)>=i,_e=Math.abs(ze)>=i;G&&(je||_e)&&G(V,fe,ze,te,ie),je&&(S&&V.deltaX>0&&S(V),w&&V.deltaX<0&&w(V),M&&M(V),B&&V.deltaX<0!=Ie<0&&B(V),Ie=V.deltaX,te[0]=te[1]=te[2]=0),_e&&(P&&V.deltaY>0&&P(V),A&&V.deltaY<0&&A(V),T&&T(V),D&&V.deltaY<0!=Ue<0&&D(V),Ue=V.deltaY,ie[0]=ie[1]=ie[2]=0),(De||k)&&(K&&K(V),k&&(y(V),k=!1),De=!1),Pe&&!(Pe=!1)&&Te&&Te(V),pe&&(le(V),pe=!1),dt=0},Re=function(fe,ze,je){te[je]+=fe,ie[je]+=ze,V._vx.update(fe),V._vy.update(ze),c?dt||(dt=requestAnimationFrame(we)):we()},xe=function(fe,ze){Ce&&!Ae&&(V.axis=Ae=Math.abs(fe)>Math.abs(ze)?"x":"y",Pe=!0),Ae!=="y"&&(te[2]+=fe,V._vx.update(fe,!0)),Ae!=="x"&&(ie[2]+=ze,V._vy.update(ze,!0)),c?dt||(dt=requestAnimationFrame(we)):we()},me=function(fe){if(!$(fe,1)){fe=ho(fe,u);var ze=fe.clientX,je=fe.clientY,_e=ze-V.x,Qe=je-V.y,Fe=V.isDragging;V.x=ze,V.y=je,(Fe||Math.abs(V.startX-ze)>=r||Math.abs(V.startY-je)>=r)&&(y&&(k=!0),Fe||(V.isDragging=!0),xe(_e,Qe),Fe||m&&m(V))}},Be=V.onPress=function(Ne){$(Ne,1)||Ne&&Ne.button||(V.axis=Ae=null,Oe.pause(),V.isPressed=!0,Ne=ho(Ne),Ie=Ue=0,V.startX=V.x=Ne.clientX,V.startY=V.y=Ne.clientY,V._vx.reset(),V._vy.reset(),vn(Y?a:Q,ii[1],me,u,!0),V.deltaX=V.deltaY=0,x&&x(V))},st=V.onRelease=function(Ne){if(!$(Ne,1)){on(Y?a:Q,ii[1],me,!0);var fe=!isNaN(V.y-V.startY),ze=V.isDragging&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),je=ho(Ne);!ze&&fe&&(V._vx.reset(),V._vy.reset(),u&&de&&jt.delayedCall(.08,function(){if(Do()-ye>300&&!Ne.defaultPrevented){if(Ne.target.click)Ne.target.click();else if(Q.createEvent){var _e=Q.createEvent("MouseEvents");_e.initMouseEvent("click",!0,!0,On,1,je.screenX,je.screenY,je.clientX,je.clientY,!1,!1,!1,!1,0,null),Ne.target.dispatchEvent(_e)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,h&&!Y&&Oe.restart(!0),p&&ze&&p(V),v&&v(V,ze)}},L=function(fe){return fe.touches&&fe.touches.length>1&&(V.isGesturing=!0)&&Z(fe,V.isDragging)},ae=function(){return(V.isGesturing=!1)||R(V)},W=function(fe){if(!$(fe)){var ze=rt(),je=Ye();Re((ze-Mt)*se,(je-C)*se,1),Mt=ze,C=je,h&&Oe.restart(!0)}},ne=function(fe){if(!$(fe)){fe=ho(fe,u),le&&(pe=!0);var ze=(fe.deltaMode===1?l:fe.deltaMode===2?On.innerHeight:1)*g;Re(fe.deltaX*ze,fe.deltaY*ze,0),h&&!Y&&Oe.restart(!0)}},re=function(fe){if(!$(fe)){var ze=fe.clientX,je=fe.clientY,_e=ze-V.x,Qe=je-V.y;V.x=ze,V.y=je,De=!0,(_e||Qe)&&xe(_e,Qe)}},Ve=function(fe){V.event=fe,O(V)},ht=function(fe){V.event=fe,N(V)},ut=function(fe){return $(fe)||ho(fe,u)&&J(V)};Oe=V._dc=jt.delayedCall(f||.25,ve).pause(),V.deltaX=V.deltaY=0,V._vx=Xc(0,50,!0),V._vy=Xc(0,50,!0),V.scrollX=rt,V.scrollY=Ye,V.isDragging=V.isGesturing=V.isPressed=!1,wp(this),V.enable=function(Ne){return V.isEnabled||(vn(q?Q:a,"scroll",Wc),o.indexOf("scroll")>=0&&vn(q?Q:a,"scroll",W,u,ce),o.indexOf("wheel")>=0&&vn(a,"wheel",ne,u,ce),(o.indexOf("touch")>=0&&bp||o.indexOf("pointer")>=0)&&(vn(a,ii[0],Be,u,ce),vn(Q,ii[2],st),vn(Q,ii[3],st),de&&vn(a,"click",oe,!1,!0),J&&vn(a,"click",ut),Z&&vn(Q,"gesturestart",L),R&&vn(Q,"gestureend",ae),O&&vn(a,Pr+"enter",Ve),N&&vn(a,Pr+"leave",ht),K&&vn(a,Pr+"move",re)),V.isEnabled=!0,Ne&&Ne.type&&Be(Ne),H&&H(V)),V},V.disable=function(){V.isEnabled&&(Ds.filter(function(Ne){return Ne!==V&&Io(Ne.target)}).length||on(q?Q:a,"scroll",Wc),V.isPressed&&(V._vx.reset(),V._vy.reset(),on(Y?a:Q,ii[1],me,!0)),on(q?Q:a,"scroll",W,ce),on(a,"wheel",ne,ce),on(a,ii[0],Be,ce),on(Q,ii[2],st),on(Q,ii[3],st),on(a,"click",oe,!0),on(a,"click",ut),on(Q,"gesturestart",L),on(Q,"gestureend",ae),on(a,Pr+"enter",Ve),on(a,Pr+"leave",ht),on(a,Pr+"move",re),V.isEnabled=V.isPressed=V.isDragging=!1,ee&&ee(V))},V.kill=V.revert=function(){V.disable();var Ne=Ds.indexOf(V);Ne>=0&&Ds.splice(Ne,1),Ui===V&&(Ui=0)},Ds.push(V),Y&&Io(a)&&(Ui=V),V.enable(_)},eg(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();Nt.version="3.12.1";Nt.create=function(s){return new Nt(s)};Nt.register=Lp;Nt.getAll=function(){return Ds.slice()};Nt.getById=function(s){return Ds.filter(function(e){return e.vars.id===s})[0]};Rp()&&jt.registerPlugin(Nt);/*!
 * ScrollTrigger 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Me,As,it,Tt,ri,Et,Dp,ul,hl,Is,Ya,la,Jt,vl,Yc,cn,gh,xh,ws,Ip,Fl,Up,Ln,Np,Op,Fp,Qi,qc,Ru,Bl,ca=1,hn=Date.now,kl=hn(),Zn=0,Eo=0,vh=function(e,t,n){var i=In(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Mh=function(e,t){return t&&(!In(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},ng=function s(){return Eo&&requestAnimationFrame(s)},yh=function(){return vl=1},Sh=function(){return vl=0},li=function(e){return e},bo=function(e){return Math.round(e*1e5)/1e5||0},Bp=function(){return typeof window<"u"},kp=function(){return Me||Bp()&&(Me=window.gsap)&&Me.registerPlugin&&Me},Zr=function(e){return!!~Dp.indexOf(e)},zp=function(e){return cr(e,"getBoundingClientRect")||(Zr(e)?function(){return Ja.width=it.innerWidth,Ja.height=it.innerHeight,Ja}:function(){return Ii(e)})},ig=function(e,t,n){var i=n.d,r=n.d2,o=n.a;return(o=cr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?it["inner"+r]:e["client"+r])||0}},rg=function(e,t){return!t||~mi.indexOf(e)?zp(e):function(){return Ja}},Ni=function(e,t){var n=t.s,i=t.d2,r=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=cr(e,n))?o()-zp(e)()[r]:Zr(e)?(ri[n]||Et[n])-(it["inner"+i]||ri["client"+i]||Et["client"+i]):e[n]-e["offset"+i])},ua=function(e,t){for(var n=0;n<ws.length;n+=3)(!t||~t.indexOf(ws[n+1]))&&e(ws[n],ws[n+1],ws[n+2])},In=function(e){return typeof e=="string"},mn=function(e){return typeof e=="function"},qa=function(e){return typeof e=="number"},Lr=function(e){return typeof e=="object"},fo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},zl=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},os=Math.abs,Hp="left",Gp="top",Cu="right",Pu="bottom",Vr="width",Wr="height",Uo="Right",No="Left",Oo="Top",Fo="Bottom",It="padding",Vn="margin",js="Width",Lu="Height",Yt="px",Wn=function(e){return it.getComputedStyle(e)},sg=function(e){var t=Wn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Th=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ii=function(e,t){var n=t&&Wn(e)[Yc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Me.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},jc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Vp=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},og=function(e){return function(t){return Me.utils.snap(Vp(e),t)}},Du=function(e){var t=Me.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return t(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=t(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:t(r<0?i-e:i+e)}},ag=function(e){return function(t,n){return Du(Vp(e))(t,n.direction)}},ha=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},Gt=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Ht=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},fa=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Eh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},da={toggleActions:"play",anticipatePin:0},fl={top:0,left:0,center:.5,bottom:1,right:1},ja=function(e,t){if(In(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in fl?fl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},pa=function(e,t,n,i,r,o,a,l){var c=r.startColor,u=r.endColor,h=r.fontSize,f=r.indent,d=r.fontWeight,g=Tt.createElement("div"),_=Zr(n)||cr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?Et:n,y=e.indexOf("start")!==-1,x=y?c:u,v="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(i===Ft?Cu:Pu)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=v,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Ka(g,0,i,y),g},Ka=function(e,t,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+js]=1,r["border"+a+js]=0,r[n.p]=t+"px",Me.set(e,r)},$e=[],Kc={},Ko,bh=function(){return hn()-Zn>34&&(Ko||(Ko=requestAnimationFrame(ki)))},as=function(){(!Ln||!Ln.isPressed||Ln.startX>Et.clientWidth)&&(et.cache++,Ln?Ko||(Ko=requestAnimationFrame(ki)):ki(),Zn||Qr("scrollStart"),Zn=hn())},Hl=function(){Fp=it.innerWidth,Op=it.innerHeight},Ao=function(){et.cache++,!Jt&&!Up&&!Tt.fullscreenElement&&!Tt.webkitFullscreenElement&&(!Np||Fp!==it.innerWidth||Math.abs(it.innerHeight-Op)>it.innerHeight*.25)&&ul.restart(!0)},Jr={},lg=[],Wp=function s(){return Ht(tt,"scrollEnd",s)||Fr(!0)},Qr=function(e){return Jr[e]&&Jr[e].map(function(t){return t()})||lg},Dn=[],Xp=function(e){for(var t=0;t<Dn.length;t+=5)(!e||Dn[t+4]&&Dn[t+4].query===e)&&(Dn[t].style.cssText=Dn[t+1],Dn[t].getBBox&&Dn[t].setAttribute("transform",Dn[t+2]||""),Dn[t+3].uncache=1)},Iu=function(e,t){var n;for(cn=0;cn<$e.length;cn++)n=$e[cn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&Xp(t),t||Qr("revert")},Yp=function(e,t){et.cache++,(t||!un)&&et.forEach(function(n){return mn(n)&&n.cacheID++&&(n.rec=0)}),In(e)&&(it.history.scrollRestoration=Ru=e)},un,Xr=0,Ah,cg=function(){if(Ah!==Xr){var e=Ah=Xr;requestAnimationFrame(function(){return e===Xr&&Fr(!0)})}},Fr=function(e,t){if(Zn&&!e){Gt(tt,"scrollEnd",Wp);return}un=tt.isRefreshing=!0,et.forEach(function(i){return mn(i)&&++i.cacheID&&(i.rec=i())});var n=Qr("refreshInit");Ip&&tt.sort(),t||Iu(),et.forEach(function(i){mn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),$e.slice(0).forEach(function(i){return i.refresh()}),$e.forEach(function(i,r){if(i._subPinOffset&&i.pin){var o=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[o];i.revert(!0,1),i.adjustPinSpacing(i.pin[o]-a),i.refresh()}}),$e.forEach(function(i){var r=Ni(i.scroller,i._dir);(i.vars.end==="max"||i._endClamp&&i.end>r)&&i.setPositions(i.start,Math.max(i.start+1,r),!0)}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),et.forEach(function(i){mn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Yp(Ru,1),ul.pause(),Xr++,un=2,ki(2),$e.forEach(function(i){return mn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),un=tt.isRefreshing=!1,Qr("refresh")},$c=0,$a=1,Bo,ki=function(e){if(!un||e===2){tt.isUpdating=!0,Bo&&Bo.update(0);var t=$e.length,n=hn(),i=n-kl>=50,r=t&&$e[0].scroll();if($a=$c>r?-1:1,un||($c=r),i&&(Zn&&!vl&&n-Zn>200&&(Zn=0,Qr("scrollEnd")),Ya=kl,kl=n),$a<0){for(cn=t;cn-- >0;)$e[cn]&&$e[cn].update(0,i);$a=1}else for(cn=0;cn<t;cn++)$e[cn]&&$e[cn].update(0,i);tt.isUpdating=!1}Ko=0},Zc=[Hp,Gp,Pu,Cu,Vn+Fo,Vn+Uo,Vn+Oo,Vn+No,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Za=Zc.concat([Vr,Wr,"boxSizing","max"+js,"max"+Lu,"position",Vn,It,It+Oo,It+Uo,It+Fo,It+No]),ug=function(e,t,n){ks(n);var i=e._gsap;if(i.spacerIsNative)ks(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Gl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=Zc.length,o=t.style,a=e.style,l;r--;)l=Zc[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Pu]=a[Cu]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Vr]=jc(e,pn)+Yt,o[Wr]=jc(e,Ft)+Yt,o[It]=a[Vn]=a[Gp]=a[Hp]="0",ks(i),a[Vr]=a["max"+js]=n[Vr],a[Wr]=a["max"+Lu]=n[Wr],a[It]=n[It],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},hg=/([A-Z])/g,ks=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,o;for((e.t._gsap||Me.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],r=e[i],o?t[r]=o:t[r]&&t.removeProperty(r.replace(hg,"-$1").toLowerCase())}},ma=function(e){for(var t=Za.length,n=e.style,i=[],r=0;r<t;r++)i.push(Za[r],n[Za[r]]);return i.t=e,i},fg=function(e,t,n){for(var i=[],r=e.length,o=n?8:0,a;o<r;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Ja={left:0,top:0},wh=function(e,t,n,i,r,o,a,l,c,u,h,f,d,g){mn(e)&&(e=e(l)),In(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?ja("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,y;if(d&&d.seek(0),isNaN(e)||(e=+e),qa(e))d&&(e=Me.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Ka(a,n,i,!0);else{mn(t)&&(t=t(l));var x=(e||"0").split(" "),v,S,w,A;y=Mn(t,l)||Et,v=Ii(y)||{},(!v||!v.left&&!v.top)&&Wn(y).display==="none"&&(A=y.style.display,y.style.display="block",v=Ii(y),A?y.style.display=A:y.style.removeProperty("display")),S=ja(x[0],v[i.d]),w=ja(x[1]||"0",n),e=v[i.p]-c[i.p]-u+S+r-w,a&&Ka(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var P=e+n,M=o._isStart;m="scroll"+i.d2,Ka(o,P,i,M&&P>20||!M&&(h?Math.max(Et[m],ri[m]):o.parentNode[m])<=P+1),h&&(c=Ii(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Yt))}return d&&y&&(m=Ii(y),d.seek(f),p=Ii(y),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},dg=/(webkit|moz|length|cssText|inset)/i,Rh=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,o,a;if(t===Et){e._stOrig=r.cssText,a=Wn(e);for(o in a)!+o&&!dg.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=e._stOrig;Me.core.getCache(e).uncache=1,t.appendChild(e)}},qp=function(e,t,n){var i=t,r=i;return function(o){var a=Math.round(e());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=o,o}},_a=function(e,t,n){var i={};i[t.p]="+="+n,Me.set(e,i)},Ch=function(e,t){var n=pr(e,t),i="_scroll"+t.p2,r=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,g={};c=c||n();var _=qp(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.modifiers=g,g[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){et.cache++,ki()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Me.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},Gt(e,"wheel",n.wheelHandler),tt.isTouch&&Gt(e,"touchmove",n.wheelHandler),r},tt=function(){function s(t,n){As||s.register(Me)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),qc(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Eo){this.update=this.refresh=this.kill=li;return}n=Th(In(n)||qa(n)||n.nodeType?{trigger:n}:n,da);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,h=r.scrub,f=r.trigger,d=r.pin,g=r.pinSpacing,_=r.invalidateOnRefresh,m=r.anticipatePin,p=r.onScrubComplete,y=r.onSnapComplete,x=r.once,v=r.snap,S=r.pinReparent,w=r.pinSpacer,A=r.containerAnimation,P=r.fastScrollEnd,M=r.preventOverlaps,T=n.horizontal||n.containerAnimation&&n.horizontal!==!1?pn:Ft,G=!h&&h!==0,B=Mn(n.scroller||it),D=Me.core.getCache(B),O=Zr(B),N=("pinType"in n?n.pinType:cr(B,"pinType")||O&&"fixed")==="fixed",K=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],F=G&&n.toggleActions.split(" "),Y="markers"in n?n.markers:da.markers,Z=O?0:parseFloat(Wn(B)["border"+T.p2+js])||0,R=this,le=n.onRefreshInit&&function(){return n.onRefreshInit(R)},H=ig(B,O,T),ee=rg(B,O),J=0,se=0,ce=0,de=pr(B,T),Ce,Te,dt,Oe,k,De,pe,Pe,Ae,V,Ie,Ue,rt,Ye,Mt,C,b,q,Q,te,ie,ye,oe,$,ve,we,Re,xe,me,Be,st,L,ae,W,ne,re,Ve,ht,ut;if(R._startClamp=R._endClamp=!1,R._dir=T,m*=45,R.scroller=B,R.scroll=A?A.time.bind(A):de,Oe=de(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(Ip=1,n.refreshPriority===-9999&&(Bo=R)),D.tweenScroll=D.tweenScroll||{top:Ch(B,Ft),left:Ch(B,pn)},R.tweenTo=Ce=D.tweenScroll[T.p],R.scrubDuration=function(_e){ae=qa(_e)&&_e,ae?L?L.duration(_e):L=Me.to(i,{ease:"expo",totalProgress:"+=0",duration:ae,paused:!0,onComplete:function(){return p&&p(R)}}):(L&&L.progress(1).kill(),L=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(h),Be=0,l||(l=i.vars.id)),v&&((!Lr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Et.style&&Me.set(O?[Et,ri]:B,{scrollBehavior:"auto"}),et.forEach(function(_e){return mn(_e)&&_e.target===(O?Tt.scrollingElement||ri:B)&&(_e.smooth=!1)}),dt=mn(v.snapTo)?v.snapTo:v.snapTo==="labels"?og(i):v.snapTo==="labelsDirectional"?ag(i):v.directional!==!1?function(_e,Qe){return Du(v.snapTo)(_e,hn()-se<500?0:Qe.direction)}:Me.utils.snap(v.snapTo),W=v.duration||{min:.1,max:2},W=Lr(W)?Is(W.min,W.max):Is(W,W),ne=Me.delayedCall(v.delay||ae/2||.1,function(){var _e=de(),Qe=hn()-se<500,Fe=Ce.tween;if((Qe||Math.abs(R.getVelocity())<10)&&!Fe&&!vl&&J!==_e){var He=(_e-De)/Ye,Pt=i&&!G?i.totalProgress():He,Ke=Qe?0:(Pt-st)/(hn()-Ya)*1e3||0,yt=Me.utils.clamp(-He,1-He,os(Ke/2)*Ke/.185),Xt=He+(v.inertia===!1?0:yt),Ot=Is(0,1,dt(Xt,R)),xt=Math.round(De+Ot*Ye),E=v,z=E.onStart,X=E.onInterrupt,I=E.onComplete;if(_e<=pe&&_e>=De&&xt!==_e){if(Fe&&!Fe._initted&&Fe.data<=os(xt-_e))return;v.inertia===!1&&(yt=Ot-He),Ce(xt,{duration:W(os(Math.max(os(Xt-Pt),os(Ot-Pt))*.185/Ke/.05||0)),ease:v.ease||"power3",data:os(xt-_e),onInterrupt:function(){return ne.restart(!0)&&X&&X(R)},onComplete:function(){R.update(),J=de(),Be=st=i&&!G?i.totalProgress():R.progress,y&&y(R),I&&I(R)}},_e,yt*Ye,xt-_e-yt*Ye),z&&z(R,Ce.tween)}}else R.isActive&&J!==_e&&ne.restart(!0)}).pause()),l&&(Kc[l]=R),f=R.trigger=Mn(f||d!==!0&&d),ut=f&&f._gsap&&f._gsap.stRevert,ut&&(ut=ut(R)),d=d===!0?f:Mn(d),In(a)&&(a={targets:f,className:a}),d&&(g===!1||g===Vn||(g=!g&&d.parentNode&&d.parentNode.style&&Wn(d.parentNode).display==="flex"?!1:It),R.pin=d,Te=Me.core.getCache(d),Te.spacer?Mt=Te.pinState:(w&&(w=Mn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Te.spacerIsNative=!!w,w&&(Te.spacerState=ma(w))),Te.spacer=q=w||Tt.createElement("div"),q.classList.add("pin-spacer"),l&&q.classList.add("pin-spacer-"+l),Te.pinState=Mt=ma(d)),n.force3D!==!1&&Me.set(d,{force3D:!0}),R.spacer=q=Te.spacer,me=Wn(d),$=me[g+T.os2],te=Me.getProperty(d),ie=Me.quickSetter(d,T.a,Yt),Gl(d,q,me),b=ma(d)),Y){Ue=Lr(Y)?Th(Y,Eh):Eh,V=pa("scroller-start",l,B,T,Ue,0),Ie=pa("scroller-end",l,B,T,Ue,0,V),Q=V["offset"+T.op.d2];var Ne=Mn(cr(B,"content")||B);Pe=this.markerStart=pa("start",l,Ne,T,Ue,Q,0,A),Ae=this.markerEnd=pa("end",l,Ne,T,Ue,Q,0,A),A&&(ht=Me.quickSetter([Pe,Ae],T.a,Yt)),!N&&!(mi.length&&cr(B,"fixedMarkers")===!0)&&(sg(O?Et:B),Me.set([V,Ie],{force3D:!0}),we=Me.quickSetter(V,T.a,Yt),xe=Me.quickSetter(Ie,T.a,Yt))}if(A){var fe=A.vars.onUpdate,ze=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){R.update(0,0,1),fe&&fe.apply(A,ze||[])})}if(R.previous=function(){return $e[$e.indexOf(R)-1]},R.next=function(){return $e[$e.indexOf(R)+1]},R.revert=function(_e,Qe){if(!Qe)return R.kill(!0);var Fe=_e!==!1||!R.enabled,He=Jt;Fe!==R.isReverted&&(Fe&&(re=Math.max(de(),R.scroll.rec||0),ce=R.progress,Ve=i&&i.progress()),Pe&&[Pe,Ae,V,Ie].forEach(function(Pt){return Pt.style.display=Fe?"none":"block"}),Fe&&(Jt=R,R.update(Fe)),d&&(!S||!R.isActive)&&(Fe?ug(d,q,Mt):Gl(d,q,Wn(d),ve)),Fe||R.update(Fe),Jt=He,R.isReverted=Fe)},R.refresh=function(_e,Qe,Fe,He){if(!((Jt||!R.enabled)&&!Qe)){if(d&&_e&&Zn){Gt(s,"scrollEnd",Wp);return}!un&&le&&le(R),Jt=R,Ce.tween&&(Ce.tween.kill(),Ce.tween=0),L&&L.pause(),_&&i&&i.revert({kill:!1}).invalidate(),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Pt=H(),Ke=ee(),yt=A?A.duration():Ni(B,T),Xt=Ye<=.01,Ot=0,xt=He||0,E=Lr(Fe)?Fe.end:n.end,z=n.endTrigger||f,X=Lr(Fe)?Fe.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),I=R.pinnedContainer=n.pinnedContainer&&Mn(n.pinnedContainer,R),j=f&&Math.max(0,$e.indexOf(R))||0,ue=j,ge,Se,Le,Ge,be,Ee,nt,vt,xn,rn,ct,We,Yi;for(Y&&Lr(Fe)&&(We=Me.getProperty(V,T.p),Yi=Me.getProperty(Ie,T.p));ue--;)Ee=$e[ue],Ee.end||Ee.refresh(0,1)||(Jt=R),nt=Ee.pin,nt&&(nt===f||nt===d||nt===I)&&!Ee.isReverted&&(rn||(rn=[]),rn.unshift(Ee),Ee.revert(!0,!0)),Ee!==$e[ue]&&(j--,ue--);for(mn(X)&&(X=X(R)),X=vh(X,"start",R),De=wh(X,f,Pt,T,de(),Pe,V,R,Ke,Z,N,yt,A,R._startClamp&&"_startClamp")||(d?-.001:0),mn(E)&&(E=E(R)),In(E)&&!E.indexOf("+=")&&(~E.indexOf(" ")?E=(In(X)?X.split(" ")[0]:"")+E:(Ot=ja(E.substr(2),Pt),E=In(X)?X:(A?Me.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,De):De)+Ot,z=f)),E=vh(E,"end",R),pe=Math.max(De,wh(E||(z?"100% 0":yt),z,Pt,T,de()+Ot,Ae,Ie,R,Ke,Z,N,yt,A,R._endClamp&&"_endClamp"))||-.001,Ot=0,ue=j;ue--;)Ee=$e[ue],nt=Ee.pin,nt&&Ee.start-Ee._pinPush<=De&&!A&&Ee.end>0&&(ge=Ee.end-(R._startClamp?Math.max(0,Ee.start):Ee.start),(nt===f&&Ee.start-Ee._pinPush<De||nt===I)&&isNaN(X)&&(Ot+=ge*(1-Ee.progress)),nt===d&&(xt+=ge));if(De+=Ot,pe+=Ot,R._startClamp&&(R._startClamp+=Ot),R._endClamp&&!un&&(R._endClamp=pe||-.001,pe=Math.min(pe,Ni(B,T))),Ye=pe-De||(De-=.01)&&.001,Xt&&(ce=Me.utils.clamp(0,1,Me.utils.normalize(De,pe,re))),R._pinPush=xt,Pe&&Ot&&(ge={},ge[T.a]="+="+Ot,I&&(ge[T.p]="-="+de()),Me.set([Pe,Ae],ge)),d)ge=Wn(d),Ge=T===Ft,Le=de(),ye=parseFloat(te(T.a))+xt,!yt&&pe>1&&(ct=(O?Tt.scrollingElement||ri:B).style,ct={style:ct,value:ct["overflow"+T.a.toUpperCase()]},O&&Wn(Et)["overflow"+T.a.toUpperCase()]!=="scroll"&&(ct.style["overflow"+T.a.toUpperCase()]="scroll")),Gl(d,q,ge),b=ma(d),Se=Ii(d,!0),vt=N&&pr(B,Ge?pn:Ft)(),g&&(ve=[g+T.os2,Ye+xt+Yt],ve.t=q,ue=g===It?jc(d,T)+Ye+xt:0,ue&&ve.push(T.d,ue+Yt),ks(ve),I&&$e.forEach(function(St){St.pin===I&&St.vars.pinSpacing!==!1&&(St._subPinOffset=!0)}),N&&de(re)),N&&(be={top:Se.top+(Ge?Le-De:vt)+Yt,left:Se.left+(Ge?vt:Le-De)+Yt,boxSizing:"border-box",position:"fixed"},be[Vr]=be["max"+js]=Math.ceil(Se.width)+Yt,be[Wr]=be["max"+Lu]=Math.ceil(Se.height)+Yt,be[Vn]=be[Vn+Oo]=be[Vn+Uo]=be[Vn+Fo]=be[Vn+No]="0",be[It]=ge[It],be[It+Oo]=ge[It+Oo],be[It+Uo]=ge[It+Uo],be[It+Fo]=ge[It+Fo],be[It+No]=ge[It+No],C=fg(Mt,be,S),un&&de(0)),i?(xn=i._initted,Fl(1),i.render(i.duration(),!0,!0),oe=te(T.a)-ye+Ye+xt,Re=Math.abs(Ye-oe)>1,N&&Re&&C.splice(C.length-2,2),i.render(0,!0,!0),xn||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Fl(0)):oe=Ye,ct&&(ct.value?ct.style["overflow"+T.a.toUpperCase()]=ct.value:ct.style.removeProperty("overflow-"+T.a));else if(f&&de()&&!A)for(Se=f.parentNode;Se&&Se!==Et;)Se._pinOffset&&(De-=Se._pinOffset,pe-=Se._pinOffset),Se=Se.parentNode;rn&&rn.forEach(function(St){return St.revert(!1,!0)}),R.start=De,R.end=pe,Oe=k=un?re:de(),!A&&!un&&(Oe<re&&de(re),R.scroll.rec=0),R.revert(!1,!0),se=hn(),ne&&(J=-1,R.isActive&&de(De+Ye*ce),ne.restart(!0)),Jt=0,i&&G&&(i._initted||Ve)&&i.progress()!==Ve&&i.progress(Ve||0,!0).render(i.time(),!0,!0),(Xt||ce!==R.progress||A)&&(i&&!G&&i.totalProgress(A&&De<-.001&&!ce?Me.utils.normalize(De,pe,0):ce,!0),R.progress=Xt||(Oe-De)/Ye===ce?0:ce),d&&g&&(q._pinOffset=Math.round(R.progress*oe)),L&&L.invalidate(),isNaN(We)||(We-=Me.getProperty(V,T.p),Yi-=Me.getProperty(Ie,T.p),_a(V,T,We),_a(Pe,T,We-(He||0)),_a(Ie,T,Yi),_a(Ae,T,Yi-(He||0))),Xt&&!un&&R.update(),u&&!un&&!rt&&(rt=!0,u(R),rt=!1)}},R.getVelocity=function(){return(de()-k)/(hn()-Ya)*1e3||0},R.endAnimation=function(){fo(R.callbackAnimation),i&&(L?L.progress(1):i.paused()?G||fo(i,R.direction<0,1):fo(i,i.reversed()))},R.labelToScroll=function(_e){return i&&i.labels&&(De||R.refresh()||De)+i.labels[_e]/i.duration()*Ye||0},R.getTrailing=function(_e){var Qe=$e.indexOf(R),Fe=R.direction>0?$e.slice(0,Qe).reverse():$e.slice(Qe+1);return(In(_e)?Fe.filter(function(He){return He.vars.preventOverlaps===_e}):Fe).filter(function(He){return R.direction>0?He.end<=De:He.start>=pe})},R.update=function(_e,Qe,Fe){if(!(A&&!Fe&&!_e)){var He=un===!0?re:R.scroll(),Pt=_e?0:(He-De)/Ye,Ke=Pt<0?0:Pt>1?1:Pt||0,yt=R.progress,Xt,Ot,xt,E,z,X,I,j;if(Qe&&(k=Oe,Oe=A?de():He,v&&(st=Be,Be=i&&!G?i.totalProgress():Ke)),m&&!Ke&&d&&!Jt&&!ca&&Zn&&De<He+(He-k)/(hn()-Ya)*m&&(Ke=1e-4),Ke!==yt&&R.enabled){if(Xt=R.isActive=!!Ke&&Ke<1,Ot=!!yt&&yt<1,X=Xt!==Ot,z=X||!!Ke!=!!yt,R.direction=Ke>yt?1:-1,R.progress=Ke,z&&!Jt&&(xt=Ke&&!yt?0:Ke===1?1:yt===1?2:3,G&&(E=!X&&F[xt+1]!=="none"&&F[xt+1]||F[xt],j=i&&(E==="complete"||E==="reset"||E in i))),M&&(X||j)&&(j||h||!i)&&(mn(M)?M(R):R.getTrailing(M).forEach(function(Le){return Le.endAnimation()})),G||(L&&!Jt&&!ca?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",Ke,i._tTime/i._tDur):(L.vars.totalProgress=Ke,L.invalidate().restart())):i&&i.totalProgress(Ke,!!(Jt&&(se||_e)))),d){if(_e&&g&&(q.style[g+T.os2]=$),!N)ie(bo(ye+oe*Ke));else if(z){if(I=!_e&&Ke>yt&&pe+1>He&&He+1>=Ni(B,T),S)if(!_e&&(Xt||I)){var ue=Ii(d,!0),ge=He-De;Rh(d,Et,ue.top+(T===Ft?ge:0)+Yt,ue.left+(T===Ft?0:ge)+Yt)}else Rh(d,q);ks(Xt||I?C:b),Re&&Ke<1&&Xt||ie(ye+(Ke===1&&!I?oe:0))}}v&&!Ce.tween&&!Jt&&!ca&&ne.restart(!0),a&&(X||x&&Ke&&(Ke<1||!Bl))&&hl(a.targets).forEach(function(Le){return Le.classList[Xt||x?"add":"remove"](a.className)}),o&&!G&&!_e&&o(R),z&&!Jt?(G&&(j&&(E==="complete"?i.pause().totalProgress(1):E==="reset"?i.restart(!0).pause():E==="restart"?i.restart(!0):i[E]()),o&&o(R)),(X||!Bl)&&(c&&X&&zl(R,c),K[xt]&&zl(R,K[xt]),x&&(Ke===1?R.kill(!1,1):K[xt]=0),X||(xt=Ke===1?1:3,K[xt]&&zl(R,K[xt]))),P&&!Xt&&Math.abs(R.getVelocity())>(qa(P)?P:2500)&&(fo(R.callbackAnimation),L?L.progress(1):fo(i,E==="reverse"?1:!Ke,1))):G&&o&&!Jt&&o(R)}if(xe){var Se=A?He/A.duration()*(A._caScrollDist||0):He;we(Se+(V._isFlipped?1:0)),xe(Se)}ht&&ht(-He/A.duration()*(A._caScrollDist||0))}},R.enable=function(_e,Qe){R.enabled||(R.enabled=!0,Gt(B,"resize",Ao),Gt(O?Tt:B,"scroll",as),le&&Gt(s,"refreshInit",le),_e!==!1&&(R.progress=ce=0,Oe=k=J=de()),Qe!==!1&&R.refresh())},R.getTween=function(_e){return _e&&Ce?Ce.tween:L},R.setPositions=function(_e,Qe,Fe,He){if(A){var Pt=A.scrollTrigger,Ke=A.duration(),yt=Pt.end-Pt.start;_e=Pt.start+yt*_e/Ke,Qe=Pt.start+yt*Qe/Ke}R.refresh(!1,!1,{start:Mh(_e,Fe&&!!R._startClamp),end:Mh(Qe,Fe&&!!R._endClamp)},He),R.update()},R.adjustPinSpacing=function(_e){if(ve&&_e){var Qe=ve.indexOf(T.d)+1;ve[Qe]=parseFloat(ve[Qe])+_e+Yt,ve[1]=parseFloat(ve[1])+_e+Yt,ks(ve)}},R.disable=function(_e,Qe){if(R.enabled&&(_e!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,Qe||L&&L.pause(),re=0,Te&&(Te.uncache=1),le&&Ht(s,"refreshInit",le),ne&&(ne.pause(),Ce.tween&&Ce.tween.kill()&&(Ce.tween=0)),!O)){for(var Fe=$e.length;Fe--;)if($e[Fe].scroller===B&&$e[Fe]!==R)return;Ht(B,"resize",Ao),Ht(B,"scroll",as)}},R.kill=function(_e,Qe){R.disable(_e,Qe),L&&!Qe&&L.kill(),l&&delete Kc[l];var Fe=$e.indexOf(R);Fe>=0&&$e.splice(Fe,1),Fe===cn&&$a>0&&cn--,Fe=0,$e.forEach(function(He){return He.scroller===R.scroller&&(Fe=1)}),Fe||un||(R.scroll.rec=0),i&&(i.scrollTrigger=null,_e&&i.revert({kill:!1}),Qe||i.kill()),Pe&&[Pe,Ae,V,Ie].forEach(function(He){return He.parentNode&&He.parentNode.removeChild(He)}),Bo===R&&(Bo=0),d&&(Te&&(Te.uncache=1),Fe=0,$e.forEach(function(He){return He.pin===d&&Fe++}),Fe||(Te.spacer=0)),n.onKill&&n.onKill(R)},$e.push(R),R.enable(!1,!1),ut&&ut(R),i&&i.add&&!Ye){var je=R.update;R.update=function(){R.update=je,De||pe||R.refresh()},Me.delayedCall(.01,R.update),Ye=.01,De=pe=0}else R.refresh();d&&cg()},s.register=function(n){return As||(Me=n||kp(),Bp()&&window.document&&s.enable(),As=Eo),As},s.defaults=function(n){if(n)for(var i in n)da[i]=n[i];return da},s.disable=function(n,i){Eo=0,$e.forEach(function(o){return o[i?"kill":"disable"](n)}),Ht(it,"wheel",as),Ht(Tt,"scroll",as),clearInterval(la),Ht(Tt,"touchcancel",li),Ht(Et,"touchstart",li),ha(Ht,Tt,"pointerdown,touchstart,mousedown",yh),ha(Ht,Tt,"pointerup,touchend,mouseup",Sh),ul.kill(),ua(Ht);for(var r=0;r<et.length;r+=3)fa(Ht,et[r],et[r+1]),fa(Ht,et[r],et[r+2])},s.enable=function(){if(it=window,Tt=document,ri=Tt.documentElement,Et=Tt.body,Me&&(hl=Me.utils.toArray,Is=Me.utils.clamp,qc=Me.core.context||li,Fl=Me.core.suppressOverwrites||li,Ru=it.history.scrollRestoration||"auto",$c=it.pageYOffset,Me.core.globals("ScrollTrigger",s),Et)){Eo=1,ng(),Nt.register(Me),s.isTouch=Nt.isTouch,Qi=Nt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Gt(it,"wheel",as),Dp=[it,Tt,ri,Et],Me.matchMedia?(s.matchMedia=function(l){var c=Me.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Me.addEventListener("matchMediaInit",function(){return Iu()}),Me.addEventListener("matchMediaRevert",function(){return Xp()}),Me.addEventListener("matchMedia",function(){Fr(0,1),Qr("matchMedia")}),Me.matchMedia("(orientation: portrait)",function(){return Hl(),Hl})):console.warn("Requires GSAP 3.11.0 or later"),Hl(),Gt(Tt,"scroll",as);var n=Et.style,i=n.borderTopStyle,r=Me.core.Animation.prototype,o,a;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Ii(Et),Ft.m=Math.round(o.top+Ft.sc())||0,pn.m=Math.round(o.left+pn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),la=setInterval(bh,250),Me.delayedCall(.5,function(){return ca=0}),Gt(Tt,"touchcancel",li),Gt(Et,"touchstart",li),ha(Gt,Tt,"pointerdown,touchstart,mousedown",yh),ha(Gt,Tt,"pointerup,touchend,mouseup",Sh),Yc=Me.utils.checkPrefix("transform"),Za.push(Yc),As=hn(),ul=Me.delayedCall(.2,Fr).pause(),ws=[Tt,"visibilitychange",function(){var l=it.innerWidth,c=it.innerHeight;Tt.hidden?(gh=l,xh=c):(gh!==l||xh!==c)&&Ao()},Tt,"DOMContentLoaded",Fr,it,"load",Fr,it,"resize",Ao],ua(Gt),$e.forEach(function(l){return l.enable(0,1)}),a=0;a<et.length;a+=3)fa(Ht,et[a],et[a+1]),fa(Ht,et[a],et[a+2])}},s.config=function(n){"limitCallbacks"in n&&(Bl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(la)||(la=i)&&setInterval(bh,i),"ignoreMobileResize"in n&&(Np=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ua(Ht)||ua(Gt,n.autoRefreshEvents||"none"),Up=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Mn(n),o=et.indexOf(r),a=Zr(r);~o&&et.splice(o,a?6:2),i&&(a?mi.unshift(it,i,Et,i,ri,i):mi.unshift(r,i))},s.clearMatchMedia=function(n){$e.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(In(n)?Mn(n):n).getBoundingClientRect(),a=o[r?Vr:Wr]*i||0;return r?o.right-a>0&&o.left+a<it.innerWidth:o.bottom-a>0&&o.top+a<it.innerHeight},s.positionInViewport=function(n,i,r){In(n)&&(n=Mn(n));var o=n.getBoundingClientRect(),a=o[r?Vr:Wr],l=i==null?a/2:i in fl?fl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/it.innerWidth:(o.top+l)/it.innerHeight},s.killAll=function(n){if($e.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Jr.killAll||[];Jr={},i.forEach(function(r){return r()})}},s}();tt.version="3.12.1";tt.saveStyles=function(s){return s?hl(s).forEach(function(e){if(e&&e.style){var t=Dn.indexOf(e);t>=0&&Dn.splice(t,5),Dn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Me.core.getCache(e),qc())}}):Dn};tt.revert=function(s,e){return Iu(!s,e)};tt.create=function(s,e){return new tt(s,e)};tt.refresh=function(s){return s?Ao():(As||tt.register())&&Fr(!0)};tt.update=function(s){return++et.cache&&ki(s===!0?2:0)};tt.clearScrollMemory=Yp;tt.maxScroll=function(s,e){return Ni(s,e?pn:Ft)};tt.getScrollFunc=function(s,e){return pr(Mn(s),e?pn:Ft)};tt.getById=function(s){return Kc[s]};tt.getAll=function(){return $e.filter(function(s){return s.vars.id!=="ScrollSmoother"})};tt.isScrolling=function(){return!!Zn};tt.snapDirectional=Du;tt.addEventListener=function(s,e){var t=Jr[s]||(Jr[s]=[]);~t.indexOf(e)||t.push(e)};tt.removeEventListener=function(s,e){var t=Jr[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};tt.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Me.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),r<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&mn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return mn(r)&&(r=r(),Gt(tt,"refresh",function(){return r=e.batchMax()})),hl(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(tt.create(c))}),t};var Ph=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Vl=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Nt.isTouch?" pinch-zoom":""):"none",e===ri&&s(Et,t)},ga={auto:1,scroll:1},pg=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||Me.core.getCache(r),a=hn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==Et&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(ga[(l=Wn(r)).overflowY]||ga[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!Zr(r)&&(ga[(l=Wn(r)).overflowY]||ga[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},jp=function(e,t,n,i){return Nt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&pg,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Gt(Tt,Nt.eventTypes[0],Dh,!1,!0)},onDisable:function(){return Ht(Tt,Nt.eventTypes[0],Dh,!0)}})},mg=/(input|label|select|textarea)/i,Lh,Dh=function(e){var t=mg.test(e.target.tagName);(t||Lh)&&(e._gsapAllow=!0,Lh=t)},_g=function(e){Lr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,l,c=Mn(e.target)||ri,u=Me.core.globals().ScrollSmoother,h=u&&u.get(),f=Qi&&(e.content&&Mn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=pr(c,Ft),g=pr(c,pn),_=1,m=(Nt.isTouch&&it.visualViewport?it.visualViewport.scale*it.visualViewport.width:it.outerWidth)/it.innerWidth,p=0,y=mn(i)?function(){return i(a)}:function(){return i||2.8},x,v,S=jp(c,e.type,!0,r),w=function(){return v=!1},A=li,P=li,M=function(){l=Ni(c,Ft),P=Is(Qi?1:0,l),n&&(A=Is(0,Ni(c,pn))),x=Xr},T=function(){f._gsap.y=bo(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},G=function(){if(v){requestAnimationFrame(w);var Y=bo(a.deltaY/2),Z=P(d.v-Y);if(f&&Z!==d.v+d.offset){d.offset=Z-d.v;var R=bo((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",f._gsap.y=R+"px",d.cacheID=et.cache,ki()}return!0}d.offset&&T(),v=!0},B,D,O,N,K=function(){M(),B.isActive()&&B.vars.scrollY>l&&(d()>l?B.progress(1)&&d(l):B.resetTo("scrollY",l))};return f&&Me.set(f,{y:"+=0"}),e.ignoreCheck=function(F){return Qi&&F.type==="touchmove"&&G()||_>1.05&&F.type!=="touchstart"||a.isGesturing||F.touches&&F.touches.length>1},e.onPress=function(){v=!1;var F=_;_=bo((it.visualViewport&&it.visualViewport.scale||1)/m),B.pause(),F!==_&&Vl(c,_>1.01?!0:n?!1:"x"),D=g(),O=d(),M(),x=Xr},e.onRelease=e.onGestureStart=function(F,Y){if(d.offset&&T(),!Y)N.restart(!0);else{et.cache++;var Z=y(),R,le;n&&(R=g(),le=R+Z*.05*-F.velocityX/.227,Z*=Ph(g,R,le,Ni(c,pn)),B.vars.scrollX=A(le)),R=d(),le=R+Z*.05*-F.velocityY/.227,Z*=Ph(d,R,le,Ni(c,Ft)),B.vars.scrollY=P(le),B.invalidate().duration(Z).play(.01),(Qi&&B.vars.scrollY>=l||R>=l-1)&&Me.to({},{onUpdate:K,duration:Z})}o&&o(F)},e.onWheel=function(){B._ts&&B.pause(),hn()-p>1e3&&(x=0,p=hn())},e.onChange=function(F,Y,Z,R,le){if(Xr!==x&&M(),Y&&n&&g(A(R[2]===Y?D+(F.startX-F.x):g()+Y-R[1])),Z){d.offset&&T();var H=le[2]===Z,ee=H?O+F.startY-F.y:d()+Z-le[1],J=P(ee);H&&ee!==J&&(O+=J-ee),d(J)}(Z||Y)&&ki()},e.onEnable=function(){Vl(c,n?!1:"x"),tt.addEventListener("refresh",K),Gt(it,"resize",K),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),S.enable()},e.onDisable=function(){Vl(c,!0),Ht(it,"resize",K),tt.removeEventListener("refresh",K),S.kill()},e.lockAxis=e.lockAxis!==!1,a=new Nt(e),a.iOS=Qi,Qi&&!d()&&d(1),Qi&&Me.ticker.add(li),N=a._dc,B=Me.to(a,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:qp(d,d(),function(){return B.pause()})},onUpdate:ki,onComplete:N.vars.onComplete}),a};tt.sort=function(s){return $e.sort(s||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};tt.observe=function(s){return new Nt(s)};tt.normalizeScroll=function(s){if(typeof s>"u")return Ln;if(s===!0&&Ln)return Ln.enable();if(s===!1)return Ln&&Ln.kill();var e=s instanceof Nt?s:_g(s);return Ln&&Ln.target===e.target&&Ln.kill(),Zr(e.target)&&(Ln=e),e};tt.core={_getVelocityProp:Xc,_inputObserver:jp,_scrollers:et,_proxies:mi,bridge:{ss:function(){Zn||Qr("scrollStart"),Zn=hn()},ref:function(){return Jt}}};kp()&&Me.registerPlugin(tt);console.log("linked!");const Ih="!@#$%^&*()_+-={}|:\"<>?[]\\;',./`~";function $n(s,e,t){const n=document.getElementById(e);if(!n){console.log(`element ${e} not found :(`);return}s.length==0&&console.log("empty string"),n.innerHTML="";for(let i=0;i<=s.length;i++)setTimeout(()=>{let r=document.createElement("span");r.classList.add("black");for(let o=0;o<5;o++)setTimeout(()=>{if(n.appendChild(r),i!=s.length){if(o==4){r.innerHTML=s.split("")[i];return}let a=Ih[Math.floor(Math.random()*Ih.length)];r.innerHTML=a}},o*(t/5));i==s.length-1&&r.classList.add("black-final")},t*i)}wn.registerPlugin(tt);tt.defaults({scroller:".panel-container"});setTimeout(()=>{$n("2023 portfolio.","hero",100)},1e3);setTimeout(()=>{$n("• frontend design & backend development.","text",50)},3e3);setTimeout(()=>{$n("• javascript, three.js, gsap.","text-2",50)},3e3);setTimeout(()=>{$n("• postgresql, express, node.","text-3",50)},3e3);wn.from(".js-img",{opacity:0,duration:2,delay:3});wn.from("#line1, #line2, #line3, #line4, #line5",{width:0,duration:2,ease:"power2.inOut"});wn.from("header, footer",{opacity:0,duration:2,ease:"power2.inOut"});wn.from(".scroll-wrapper",{opacity:0,duration:2,delay:3.5});wn.to("#line1, #line5",{width:"29vw",duration:3,repeat:-1,yoyo:!0,delay:2,ease:"sine.inOut"});wn.to("#line4",{width:"10vw",duration:2.5,repeat:-1,yoyo:!0,delay:2,ease:"sine.inOut"});wn.to("#line3",{width:"1vw",duration:1.5,repeat:-1,yoyo:!0,delay:2,ease:"sine.inOut"});wn.from(".about-wrapper",{scrollTrigger:{trigger:".about-wrapper",onEnter:()=>{setTimeout(()=>{$n("hi. i'm anthony, a 27 year old web developer from new york.","about-1",50)},1e3),setTimeout(()=>{$n("i enjoy working on challenging and engaging designs, and experimenting with bleeding edge backend solutions.","about-2",50)},1e3),setTimeout(()=>{$n("my designs take massive inspiration from the 2000s web aesthetic, but implemented on modern tech.","about-3",50)},1e3),setTimeout(()=>{$n("wanna see what i've been working on? keep swiping.","about-4",50)},1e3)},once:!0}});wn.from("#p1-t4",{scrollTrigger:{trigger:"#p1-t4",onEnter:()=>{setTimeout(()=>{$n("A site where anonymous users submit messages which are then read and judged by other anonymous users.","p1-t1",50)},1e3),setTimeout(()=>{$n("Front end: Vanilla HTML, CSS, Greensock Animation Platform.","p1-t2",50)},1e3),setTimeout(()=>{$n("Back end: Node.js, Express.js, PostgreSQL, EJS Templating.","p1-t3",50)},1e3),setTimeout(()=>{$n("Hosted on a Debian VPS using Nginx as a reverse proxy and PM2 process manager for persistance.","p1-t4",50)},1e3)},once:!0}});wn.from("header",{scrollTrigger:{trigger:"header",onEnter:()=>{console.log("enter 1"),document.getElementById("footer-left").innerHTML="01 / 06"},onEnterBack:()=>{console.log("enter 1"),document.getElementById("footer-left").innerHTML="01 / 06"}}});wn.from("#about-2",{scrollTrigger:{trigger:"#about-2",onEnter:()=>{console.log("enter 2"),document.getElementById("footer-left").innerHTML="02 / 06"},onEnterBack:()=>{console.log("enter 2"),document.getElementById("footer-left").innerHTML="02 / 06"}}});wn.from("#p1-t4",{scrollTrigger:{trigger:"#p1-t4",onEnter:()=>{console.log("enter 3"),document.getElementById("footer-left").innerHTML="03 / 06"},onEnterBack:()=>{console.log("enter 3"),document.getElementById("footer-left").innerHTML="03 / 06"}}});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uu="153",gg=0,Uh=1,xg=2,Kp=1,vg=2,Pi=3,Wi=0,bn=1,hi=2,ur=0,zs=1,Nh=2,Oh=3,Fh=4,Mg=5,Rs=100,yg=101,Sg=102,Bh=103,kh=104,Tg=200,Eg=201,bg=202,Ag=203,$p=204,Zp=205,wg=206,Rg=207,Cg=208,Pg=209,Lg=210,Dg=0,Ig=1,Ug=2,Jc=3,Ng=4,Og=5,Fg=6,Bg=7,Jp=0,kg=1,zg=2,zi=0,Hg=1,Gg=2,Vg=3,Wg=4,Xg=5,Qp=300,Ks=301,$s=302,Qc=303,eu=304,Ml=306,Zs=1e3,Xn=1001,dl=1002,Vt=1003,tu=1004,Qa=1005,yn=1006,em=1007,es=1008,hr=1009,Yg=1010,qg=1011,Nu=1012,tm=1013,or=1014,Oi=1015,$o=1016,nm=1017,im=1018,Yr=1020,jg=1021,Yn=1023,Kg=1024,$g=1025,qr=1026,Js=1027,Zg=1028,rm=1029,Jg=1030,sm=1031,om=1033,Wl=33776,Xl=33777,Yl=33778,ql=33779,zh=35840,Hh=35841,Gh=35842,Vh=35843,Qg=36196,Wh=37492,Xh=37496,Yh=37808,qh=37809,jh=37810,Kh=37811,$h=37812,Zh=37813,Jh=37814,Qh=37815,ef=37816,tf=37817,nf=37818,rf=37819,sf=37820,of=37821,jl=36492,e0=36283,af=36284,lf=36285,cf=36286,Zo=2300,Qs=2301,Kl=2302,uf=2400,hf=2401,ff=2402,t0=2500,n0=0,am=1,nu=2,lm=3e3,jr=3001,i0=3200,r0=3201,cm=0,s0=1,Kr="",ke="srgb",xi="srgb-linear",um="display-p3",$l=7680,o0=519,a0=512,l0=513,c0=514,u0=515,h0=516,f0=517,d0=518,p0=519,iu=35044,df="300 es",ru=1035,Fi=2e3,pl=2001;class ro{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pf=1234567;const ko=Math.PI/180,eo=180/Math.PI;function ai(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[s&255]+$t[s>>8&255]+$t[s>>16&255]+$t[s>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function Qt(s,e,t){return Math.max(e,Math.min(t,s))}function Ou(s,e){return(s%e+e)%e}function m0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function _0(s,e,t){return s!==e?(t-s)/(e-s):0}function zo(s,e,t){return(1-t)*s+t*e}function g0(s,e,t,n){return zo(s,e,1-Math.exp(-t*n))}function x0(s,e=1){return e-Math.abs(Ou(s,e*2)-e)}function v0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function M0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function y0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function S0(s,e){return s+Math.random()*(e-s)}function T0(s){return s*(.5-Math.random())}function E0(s){s!==void 0&&(pf=s);let e=pf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function b0(s){return s*ko}function A0(s){return s*eo}function su(s){return(s&s-1)===0&&s!==0}function hm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ml(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function w0(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Bi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function mt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const R0={DEG2RAD:ko,RAD2DEG:eo,generateUUID:ai,clamp:Qt,euclideanModulo:Ou,mapLinear:m0,inverseLerp:_0,lerp:zo,damp:g0,pingpong:x0,smoothstep:v0,smootherstep:M0,randInt:y0,randFloat:S0,randFloatSpread:T0,seededRandom:E0,degToRad:b0,radToDeg:A0,isPowerOfTwo:su,ceilPowerOfTwo:hm,floorPowerOfTwo:ml,setQuaternionFromProperEuler:w0,normalize:mt,denormalize:Bi};class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,n,i,r,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],x=i[4],v=i[7],S=i[2],w=i[5],A=i[8];return r[0]=o*_+a*y+l*S,r[3]=o*m+a*x+l*w,r[6]=o*p+a*v+l*A,r[1]=c*_+u*y+h*S,r[4]=c*m+u*x+h*w,r[7]=c*p+u*v+h*A,r[2]=f*_+d*y+g*S,r[5]=f*m+d*x+g*w,r[8]=f*p+d*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Zl.makeScale(e,t)),this}rotate(e){return this.premultiply(Zl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zl=new Ze;function fm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Jo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const mf={};function Ho(s){s in mf||(mf[s]=!0,console.warn(s))}function Hs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Jl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const C0=new Ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),P0=new Ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function L0(s){return s.convertSRGBToLinear().applyMatrix3(P0)}function D0(s){return s.applyMatrix3(C0).convertLinearToSRGB()}const I0={[xi]:s=>s,[ke]:s=>s.convertSRGBToLinear(),[um]:L0},U0={[xi]:s=>s,[ke]:s=>s.convertLinearToSRGB(),[um]:D0},Qn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return xi},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=I0[e],i=U0[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let ls;class dm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ls===void 0&&(ls=Jo("canvas")),ls.width=e.width,ls.height=e.height;const n=ls.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Hs(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hs(t[n]/255)*255):t[n]=Hs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let N0=0;class pm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=ai(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ql(i[o].image)):r.push(Ql(i[o]))}else r=Ql(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ql(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let O0=0;class Kt extends ro{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,n=Xn,i=Xn,r=yn,o=es,a=Yn,l=hr,c=Kt.DEFAULT_ANISOTROPY,u=Kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=ai(),this.name="",this.source=new pm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ho("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===jr?ke:Kr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zs:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zs:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ho("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ke?jr:lm}set encoding(e){Ho("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===jr?ke:Kr}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Qp;Kt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,n=0,i=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(d+1)/2,S=(p+1)/2,w=(u+f)/4,A=(h+_)/4,P=(g+m)/4;return x>v&&x>S?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=w/n,r=A/n):v>S?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=P/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=A/r,i=P/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ts extends ro{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ho("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===jr?ke:Kr),this.texture=new Kt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:yn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new pm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mm extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class F0 extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _r{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const S=Math.sqrt(x),w=Math.atan2(S,p*y);m=Math.sin(m*w)/S,a=Math.sin(a*w)/S}const v=a*y;if(l=l*m+f*v,c=c*m+d*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_f.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_f.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-r*i,h=l*i+r*n-o*t,f=-r*t-o*n-a*i;return this.x=c*l+f*-r+u*-a-h*-o,this.y=u*l+f*-o+h*-r-c*-a,this.z=h*l+f*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ec.copy(this).projectOnVector(e),this.sub(ec)}reflect(e){return this.sub(ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ec=new U,_f=new _r;class Xi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),cs.copy(e.boundingBox),cs.applyMatrix4(e.matrixWorld),this.union(cs);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)Ti.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Ti)}else i.boundingBox===null&&i.computeBoundingBox(),cs.copy(i.boundingBox),cs.applyMatrix4(e.matrixWorld),this.union(cs)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(po),xa.subVectors(this.max,po),us.subVectors(e.a,po),hs.subVectors(e.b,po),fs.subVectors(e.c,po),qi.subVectors(hs,us),ji.subVectors(fs,hs),Tr.subVectors(us,fs);let t=[0,-qi.z,qi.y,0,-ji.z,ji.y,0,-Tr.z,Tr.y,qi.z,0,-qi.x,ji.z,0,-ji.x,Tr.z,0,-Tr.x,-qi.y,qi.x,0,-ji.y,ji.x,0,-Tr.y,Tr.x,0];return!tc(t,us,hs,fs,xa)||(t=[1,0,0,0,1,0,0,0,1],!tc(t,us,hs,fs,xa))?!1:(va.crossVectors(qi,ji),t=[va.x,va.y,va.z],tc(t,us,hs,fs,xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Si=[new U,new U,new U,new U,new U,new U,new U,new U],Ti=new U,cs=new Xi,us=new U,hs=new U,fs=new U,qi=new U,ji=new U,Tr=new U,po=new U,xa=new U,va=new U,Er=new U;function tc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Er.fromArray(s,r);const a=i.x*Math.abs(Er.x)+i.y*Math.abs(Er.y)+i.z*Math.abs(Er.z),l=e.dot(Er),c=t.dot(Er),u=n.dot(Er);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const B0=new Xi,mo=new U,nc=new U;class vi{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):B0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mo.subVectors(e,this.center);const t=mo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(mo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mo.copy(e.center).add(nc)),this.expandByPoint(mo.copy(e.center).sub(nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new U,ic=new U,Ma=new U,Ki=new U,rc=new U,ya=new U,sc=new U;class yl{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ic.copy(e).add(t).multiplyScalar(.5),Ma.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(ic);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ma),a=Ki.dot(this.direction),l=-Ki.dot(Ma),c=Ki.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ic).addScaledVector(Ma,f),d}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);const n=Ei.dot(this.direction),i=Ei.dot(Ei)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,n,i,r){rc.subVectors(t,e),ya.subVectors(n,e),sc.crossVectors(rc,ya);let o=this.direction.dot(sc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,e);const l=a*this.direction.dot(ya.crossVectors(Ki,ya));if(l<0)return null;const c=a*this.direction.dot(rc.cross(Ki));if(c<0||l+c>o)return null;const u=-a*Ki.dot(sc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,t,n,i,r,o,a,l,c,u,h,f,d,g,_,m){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,n,i,r,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ds.setFromMatrixColumn(e,0).length(),r=1/ds.setFromMatrixColumn(e,1).length(),o=1/ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(k0,e,z0)}lookAt(e,t,n){const i=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),$i.crossVectors(n,Cn),$i.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),$i.crossVectors(n,Cn)),$i.normalize(),Sa.crossVectors(Cn,$i),i[0]=$i.x,i[4]=Sa.x,i[8]=Cn.x,i[1]=$i.y,i[5]=Sa.y,i[9]=Cn.y,i[2]=$i.z,i[6]=Sa.z,i[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],x=n[7],v=n[11],S=n[15],w=i[0],A=i[4],P=i[8],M=i[12],T=i[1],G=i[5],B=i[9],D=i[13],O=i[2],N=i[6],K=i[10],F=i[14],Y=i[3],Z=i[7],R=i[11],le=i[15];return r[0]=o*w+a*T+l*O+c*Y,r[4]=o*A+a*G+l*N+c*Z,r[8]=o*P+a*B+l*K+c*R,r[12]=o*M+a*D+l*F+c*le,r[1]=u*w+h*T+f*O+d*Y,r[5]=u*A+h*G+f*N+d*Z,r[9]=u*P+h*B+f*K+d*R,r[13]=u*M+h*D+f*F+d*le,r[2]=g*w+_*T+m*O+p*Y,r[6]=g*A+_*G+m*N+p*Z,r[10]=g*P+_*B+m*K+p*R,r[14]=g*M+_*D+m*F+p*le,r[3]=y*w+x*T+v*O+S*Y,r[7]=y*A+x*G+v*N+S*Z,r[11]=y*P+x*B+v*K+S*R,r[15]=y*M+x*D+v*F+S*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*d-n*l*d)+_*(+t*l*d-t*c*f+r*o*f-i*o*d+i*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,x=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,v=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,S=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,w=t*y+n*x+i*v+r*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=y*A,e[1]=(_*f*r-h*m*r-_*i*d+n*m*d+h*i*p-n*f*p)*A,e[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*A,e[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*d-n*l*d)*A,e[4]=x*A,e[5]=(u*m*r-g*f*r+g*i*d-t*m*d-u*i*p+t*f*p)*A,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*A,e[7]=(o*f*r-u*l*r+u*i*c-t*f*c-o*i*d+t*l*d)*A,e[8]=v*A,e[9]=(g*h*r-u*_*r-g*n*d+t*_*d+u*n*p-t*h*p)*A,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*A,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*d-t*a*d)*A,e[12]=S*A,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*m+t*h*m)*A,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*A,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,y=l*c,x=l*u,v=l*h,S=n.x,w=n.y,A=n.z;return i[0]=(1-(_+p))*S,i[1]=(d+v)*S,i[2]=(g-x)*S,i[3]=0,i[4]=(d-v)*w,i[5]=(1-(f+p))*w,i[6]=(m+y)*w,i[7]=0,i[8]=(g+x)*A,i[9]=(m-y)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ds.set(i[0],i[1],i[2]).length();const o=ds.set(i[4],i[5],i[6]).length(),a=ds.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],ei.copy(this);const c=1/r,u=1/o,h=1/a;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=h,ei.elements[9]*=h,ei.elements[10]*=h,t.setFromRotationMatrix(ei),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Fi){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,g;if(a===Fi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===pl)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Fi){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-r),f=(t+e)*c,d=(n+i)*u;let g,_;if(a===Fi)g=(o+r)*h,_=-2*h;else if(a===pl)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ds=new U,ei=new Je,k0=new U(0,0,0),z0=new U(1,1,1),$i=new U,Sa=new U,Cn=new U,gf=new Je,xf=new _r;class Sl{constructor(e=0,t=0,n=0,i=Sl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xf.setFromEuler(this),this.setFromQuaternion(xf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sl.DEFAULT_ORDER="XYZ";class _m{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let H0=0;const vf=new U,ps=new _r,bi=new Je,Ta=new U,_o=new U,G0=new U,V0=new _r,Mf=new U(1,0,0),yf=new U(0,1,0),Sf=new U(0,0,1),W0={type:"added"},Tf={type:"removed"};class wt extends ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new U,t=new Sl,n=new _r,i=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new Ze}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new _m,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(Mf,e)}rotateY(e){return this.rotateOnAxis(yf,e)}rotateZ(e){return this.rotateOnAxis(Sf,e)}translateOnAxis(e,t){return vf.copy(e).applyQuaternion(this.quaternion),this.position.add(vf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mf,e)}translateY(e){return this.translateOnAxis(yf,e)}translateZ(e){return this.translateOnAxis(Sf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ta.copy(e):Ta.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(_o,Ta,this.up):bi.lookAt(Ta,_o,this.up),this.quaternion.setFromRotationMatrix(bi),i&&(bi.extractRotation(i.matrixWorld),ps.setFromRotationMatrix(bi),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(W0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Tf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,e,G0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,V0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}wt.DEFAULT_UP=new U(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new U,Ai=new U,oc=new U,wi=new U,ms=new U,_s=new U,Ef=new U,ac=new U,lc=new U,cc=new U;let Ea=!1;class si{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ti.subVectors(e,t),i.cross(ti);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ti.subVectors(i,t),Ai.subVectors(n,t),oc.subVectors(e,t);const o=ti.dot(ti),a=ti.dot(Ai),l=ti.dot(oc),c=Ai.dot(Ai),u=Ai.dot(oc),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,wi),wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getUV(e,t,n,i,r,o,a,l){return Ea===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ea=!0),this.getInterpolation(e,t,n,i,r,o,a,l)}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,wi),l.setScalar(0),l.addScaledVector(r,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(a,wi.z),l}static isFrontFacing(e,t,n,i){return ti.subVectors(n,t),Ai.subVectors(e,t),ti.cross(Ai).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),ti.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return si.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Ea===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ea=!0),si.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return si.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ms.subVectors(i,n),_s.subVectors(r,n),ac.subVectors(e,n);const l=ms.dot(ac),c=_s.dot(ac);if(l<=0&&c<=0)return t.copy(n);lc.subVectors(e,i);const u=ms.dot(lc),h=_s.dot(lc);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ms,o);cc.subVectors(e,r);const d=ms.dot(cc),g=_s.dot(cc);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(_s,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Ef.subVectors(r,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(Ef,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(ms,o).addScaledVector(_s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let X0=0;class _i extends ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=zs,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=$p,this.blendDst=Zp,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Jc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=o0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$l,this.stencilZFail=$l,this.stencilZPass=$l,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(n.blending=this.blending),this.side!==Wi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const gm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},ba={h:0,s:0,l:0};function uc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ke){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Qn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Qn.workingColorSpace){if(e=Ou(e,1),t=Qt(t,0,1),n=Qt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=uc(o,r,e+1/3),this.g=uc(o,r,e),this.b=uc(o,r,e-1/3)}return Qn.toWorkingColorSpace(this,i),this}setStyle(e,t=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ke){const n=gm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}copyLinearToSRGB(e){return this.r=Jl(e.r),this.g=Jl(e.g),this.b=Jl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ke){return Qn.fromWorkingColorSpace(Zt.copy(this),e),Math.round(Qt(Zt.r*255,0,255))*65536+Math.round(Qt(Zt.g*255,0,255))*256+Math.round(Qt(Zt.b*255,0,255))}getHexString(e=ke){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qn.workingColorSpace){Qn.fromWorkingColorSpace(Zt.copy(this),t);const n=Zt.r,i=Zt.g,r=Zt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qn.workingColorSpace){return Qn.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=ke){Qn.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,i=Zt.b;return e!==ke?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ni),ni.h+=e,ni.s+=t,ni.l+=n,this.setHSL(ni.h,ni.s,ni.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(ba);const n=zo(ni.h,ba.h,t),i=zo(ni.s,ba.s,t),r=zo(ni.l,ba.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Xe;Xe.NAMES=gm;class di extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new U,Aa=new lt;class gn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=iu,this.updateRange={offset:0,count:-1},this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Aa.fromBufferAttribute(this,t),Aa.applyMatrix3(e),this.setXY(t,Aa.x,Aa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==iu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class xm extends gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vm extends gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Hi extends gn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Y0=0;const kn=new Je,hc=new wt,gs=new U,Pn=new Xi,go=new Xi,zt=new U;class Mi extends ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fm(e)?vm:xm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,n){return kn.makeTranslation(e,t,n),this.applyMatrix4(kn),this}scale(e,t,n){return kn.makeScale(e,t,n),this.applyMatrix4(kn),this}lookAt(e){return hc.lookAt(e),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Hi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];go.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(Pn.min,go.min),Pn.expandByPoint(zt),zt.addVectors(Pn.max,go.max),Pn.expandByPoint(zt)):(Pn.expandByPoint(go.min),Pn.expandByPoint(go.max))}Pn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)zt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(gs.fromBufferAttribute(e,c),zt.add(gs)),i=Math.max(i,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<a;T++)c[T]=new U,u[T]=new U;const h=new U,f=new U,d=new U,g=new lt,_=new lt,m=new lt,p=new U,y=new U;function x(T,G,B){h.fromArray(i,T*3),f.fromArray(i,G*3),d.fromArray(i,B*3),g.fromArray(o,T*2),_.fromArray(o,G*2),m.fromArray(o,B*2),f.sub(h),d.sub(h),_.sub(g),m.sub(g);const D=1/(_.x*m.y-m.x*_.y);isFinite(D)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(D),y.copy(d).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(D),c[T].add(p),c[G].add(p),c[B].add(p),u[T].add(y),u[G].add(y),u[B].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let T=0,G=v.length;T<G;++T){const B=v[T],D=B.start,O=B.count;for(let N=D,K=D+O;N<K;N+=3)x(n[N+0],n[N+1],n[N+2])}const S=new U,w=new U,A=new U,P=new U;function M(T){A.fromArray(r,T*3),P.copy(A);const G=c[T];S.copy(G),S.sub(A.multiplyScalar(A.dot(G))).normalize(),w.crossVectors(P,G);const D=w.dot(u[T])<0?-1:1;l[T*4]=S.x,l[T*4+1]=S.y,l[T*4+2]=S.z,l[T*4+3]=D}for(let T=0,G=v.length;T<G;++T){const B=v[T],D=B.start,O=B.count;for(let N=D,K=D+O;N<K;N+=3)M(n[N+0]),M(n[N+1]),M(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new U,r=new U,o=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new gn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mi,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bf=new Je,br=new yl,wa=new vi,Af=new U,xs=new U,vs=new U,Ms=new U,fc=new U,Ra=new U,Ca=new lt,Pa=new lt,La=new lt,wf=new U,Rf=new U,Cf=new U,Da=new U,Ia=new U;class _n extends wt{constructor(e=new Mi,t=new di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Ra.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(fc.fromBufferAttribute(h,e),o?Ra.addScaledVector(fc,u):Ra.addScaledVector(fc.sub(t),u))}t.add(Ra)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(r),br.copy(e.ray).recast(e.near),!(wa.containsPoint(br.origin)===!1&&(br.intersectSphere(wa,Af)===null||br.origin.distanceToSquared(Af)>(e.far-e.near)**2))&&(bf.copy(r).invert(),br.copy(e.ray).applyMatrix4(bf),!(n.boundingBox!==null&&br.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,br)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,S=x;v<S;v+=3){const w=a.getX(v),A=a.getX(v+1),P=a.getX(v+2);i=Ua(this,p,e,n,c,u,h,w,A,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);i=Ua(this,o,e,n,c,u,h,y,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,S=x;v<S;v+=3){const w=v,A=v+1,P=v+2;i=Ua(this,p,e,n,c,u,h,w,A,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=m,x=m+1,v=m+2;i=Ua(this,o,e,n,c,u,h,y,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function q0(s,e,t,n,i,r,o,a){let l;if(e.side===bn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Wi,a),l===null)return null;Ia.copy(a),Ia.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ia);return c<t.near||c>t.far?null:{distance:c,point:Ia.clone(),object:s}}function Ua(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,xs),s.getVertexPosition(l,vs),s.getVertexPosition(c,Ms);const u=q0(s,e,t,n,xs,vs,Ms,Da);if(u){i&&(Ca.fromBufferAttribute(i,a),Pa.fromBufferAttribute(i,l),La.fromBufferAttribute(i,c),u.uv=si.getInterpolation(Da,xs,vs,Ms,Ca,Pa,La,new lt)),r&&(Ca.fromBufferAttribute(r,a),Pa.fromBufferAttribute(r,l),La.fromBufferAttribute(r,c),u.uv1=si.getInterpolation(Da,xs,vs,Ms,Ca,Pa,La,new lt),u.uv2=u.uv1),o&&(wf.fromBufferAttribute(o,a),Rf.fromBufferAttribute(o,l),Cf.fromBufferAttribute(o,c),u.normal=si.getInterpolation(Da,xs,vs,Ms,wf,Rf,Cf,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new U,materialIndex:0};si.getNormal(xs,vs,Ms,h.normal),u.face=h}return u}class gr extends Mi{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Hi(c,3)),this.setAttribute("normal",new Hi(u,3)),this.setAttribute("uv",new Hi(h,2));function g(_,m,p,y,x,v,S,w,A,P,M){const T=v/A,G=S/P,B=v/2,D=S/2,O=w/2,N=A+1,K=P+1;let F=0,Y=0;const Z=new U;for(let R=0;R<K;R++){const le=R*G-D;for(let H=0;H<N;H++){const ee=H*T-B;Z[_]=ee*y,Z[m]=le*x,Z[p]=O,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[p]=w>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(H/A),h.push(1-R/P),F+=1}}for(let R=0;R<P;R++)for(let le=0;le<A;le++){const H=f+le+N*R,ee=f+le+N*(R+1),J=f+(le+1)+N*(R+1),se=f+(le+1)+N*R;l.push(H,ee,se),l.push(ee,J,se),Y+=6}a.addGroup(d,Y,M),d+=Y,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function to(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ln(s){const e={};for(let t=0;t<s.length;t++){const n=to(s[t]);for(const i in n)e[i]=n[i]}return e}function j0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Mm(s){return s.getRenderTarget()===null?s.outputColorSpace:xi}const K0={clone:to,merge:ln};var $0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Z0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ns extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$0,this.fragmentShader=Z0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=j0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ym extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class fn extends ym{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ko*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ys=-90,Ss=1;class J0 extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new fn(ys,Ss,e,t);i.layers=this.layers,this.add(i);const r=new fn(ys,Ss,e,t);r.layers=this.layers,this.add(r);const o=new fn(ys,Ss,e,t);o.layers=this.layers,this.add(o);const a=new fn(ys,Ss,e,t);a.layers=this.layers,this.add(a);const l=new fn(ys,Ss,e,t);l.layers=this.layers,this.add(l);const c=new fn(ys,Ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,r,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=zi,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Sm extends Kt{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ks,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Q0 extends ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ho("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===jr?ke:Kr),this.texture=new Sm(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new gr(5,5,5),r=new ns({name:"CubemapFromEquirect",uniforms:to(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:ur});r.uniforms.tEquirect.value=t;const o=new _n(i,r),a=t.minFilter;return t.minFilter===es&&(t.minFilter=yn),new J0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const dc=new U,ex=new U,tx=new Ze;class Dr{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=dc.subVectors(n,t).cross(ex.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(dc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||tx.getNormalMatrix(e),i=this.coplanarPoint(dc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new vi,Na=new U;class Fu{constructor(e=new Dr,t=new Dr,n=new Dr,i=new Dr,r=new Dr,o=new Dr){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fi){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],y=i[13],x=i[14],v=i[15];if(n[0].setComponents(l-r,f-c,m-d,v-p).normalize(),n[1].setComponents(l+r,f+c,m+d,v+p).normalize(),n[2].setComponents(l+o,f+u,m+g,v+y).normalize(),n[3].setComponents(l-o,f-u,m-g,v-y).normalize(),n[4].setComponents(l-a,f-h,m-_,v-x).normalize(),t===Fi)n[5].setComponents(l+a,f+h,m+_,v+x).normalize();else if(t===pl)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(e){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Na.x=i.normal.x>0?e.max.x:e.min.x,Na.y=i.normal.y>0?e.max.y:e.min.y,Na.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tm(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function nx(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=s.createBuffer();s.bindBuffer(u,d),s.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=s.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=s.SHORT;else if(h instanceof Uint32Array)g=s.UNSIGNED_INT;else if(h instanceof Int32Array)g=s.INT;else if(h instanceof Int8Array)g=s.BYTE;else if(h instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,d=u.updateRange;s.bindBuffer(h,c),d.count===-1?s.bufferSubData(h,0,f):(t?s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Bu extends Mi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*f-o;for(let x=0;x<c;x++){const v=x*h-r;g.push(v,-y,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const x=y+c*p,v=y+c*(p+1),S=y+1+c*(p+1),w=y+1+c*p;d.push(x,v,w),d.push(v,S,w)}this.setIndex(d),this.setAttribute("position",new Hi(g,3)),this.setAttribute("normal",new Hi(_,3)),this.setAttribute("uv",new Hi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bu(e.width,e.height,e.widthSegments,e.heightSegments)}}var ix=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ox=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ax=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cx="vec3 transformed = vec3( position );",ux=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ex=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ax=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Px=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ix=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ux=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ox=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Gx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$x=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Jx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qx=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ev=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,nv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,sv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ov=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,av=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,pv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,mv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,_v=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,gv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Tv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ev=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Av=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Nv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ov=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,zv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jv=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kv=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$v=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rM=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,oM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,aM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,uM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fM=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_M=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,TM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RM=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,PM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,qe={alphamap_fragment:ix,alphamap_pars_fragment:rx,alphatest_fragment:sx,alphatest_pars_fragment:ox,aomap_fragment:ax,aomap_pars_fragment:lx,begin_vertex:cx,beginnormal_vertex:ux,bsdfs:hx,iridescence_fragment:fx,bumpmap_pars_fragment:dx,clipping_planes_fragment:px,clipping_planes_pars_fragment:mx,clipping_planes_pars_vertex:_x,clipping_planes_vertex:gx,color_fragment:xx,color_pars_fragment:vx,color_pars_vertex:Mx,color_vertex:yx,common:Sx,cube_uv_reflection_fragment:Tx,defaultnormal_vertex:Ex,displacementmap_pars_vertex:bx,displacementmap_vertex:Ax,emissivemap_fragment:wx,emissivemap_pars_fragment:Rx,encodings_fragment:Cx,encodings_pars_fragment:Px,envmap_fragment:Lx,envmap_common_pars_fragment:Dx,envmap_pars_fragment:Ix,envmap_pars_vertex:Ux,envmap_physical_pars_fragment:Yx,envmap_vertex:Nx,fog_vertex:Ox,fog_pars_vertex:Fx,fog_fragment:Bx,fog_pars_fragment:kx,gradientmap_pars_fragment:zx,lightmap_fragment:Hx,lightmap_pars_fragment:Gx,lights_lambert_fragment:Vx,lights_lambert_pars_fragment:Wx,lights_pars_begin:Xx,lights_toon_fragment:qx,lights_toon_pars_fragment:jx,lights_phong_fragment:Kx,lights_phong_pars_fragment:$x,lights_physical_fragment:Zx,lights_physical_pars_fragment:Jx,lights_fragment_begin:Qx,lights_fragment_maps:ev,lights_fragment_end:tv,logdepthbuf_fragment:nv,logdepthbuf_pars_fragment:iv,logdepthbuf_pars_vertex:rv,logdepthbuf_vertex:sv,map_fragment:ov,map_pars_fragment:av,map_particle_fragment:lv,map_particle_pars_fragment:cv,metalnessmap_fragment:uv,metalnessmap_pars_fragment:hv,morphcolor_vertex:fv,morphnormal_vertex:dv,morphtarget_pars_vertex:pv,morphtarget_vertex:mv,normal_fragment_begin:_v,normal_fragment_maps:gv,normal_pars_fragment:xv,normal_pars_vertex:vv,normal_vertex:Mv,normalmap_pars_fragment:yv,clearcoat_normal_fragment_begin:Sv,clearcoat_normal_fragment_maps:Tv,clearcoat_pars_fragment:Ev,iridescence_pars_fragment:bv,output_fragment:Av,packing:wv,premultiplied_alpha_fragment:Rv,project_vertex:Cv,dithering_fragment:Pv,dithering_pars_fragment:Lv,roughnessmap_fragment:Dv,roughnessmap_pars_fragment:Iv,shadowmap_pars_fragment:Uv,shadowmap_pars_vertex:Nv,shadowmap_vertex:Ov,shadowmask_pars_fragment:Fv,skinbase_vertex:Bv,skinning_pars_vertex:kv,skinning_vertex:zv,skinnormal_vertex:Hv,specularmap_fragment:Gv,specularmap_pars_fragment:Vv,tonemapping_fragment:Wv,tonemapping_pars_fragment:Xv,transmission_fragment:Yv,transmission_pars_fragment:qv,uv_pars_fragment:jv,uv_pars_vertex:Kv,uv_vertex:$v,worldpos_vertex:Zv,background_vert:Jv,background_frag:Qv,backgroundCube_vert:eM,backgroundCube_frag:tM,cube_vert:nM,cube_frag:iM,depth_vert:rM,depth_frag:sM,distanceRGBA_vert:oM,distanceRGBA_frag:aM,equirect_vert:lM,equirect_frag:cM,linedashed_vert:uM,linedashed_frag:hM,meshbasic_vert:fM,meshbasic_frag:dM,meshlambert_vert:pM,meshlambert_frag:mM,meshmatcap_vert:_M,meshmatcap_frag:gM,meshnormal_vert:xM,meshnormal_frag:vM,meshphong_vert:MM,meshphong_frag:yM,meshphysical_vert:SM,meshphysical_frag:TM,meshtoon_vert:EM,meshtoon_frag:bM,points_vert:AM,points_frag:wM,shadow_vert:RM,shadow_frag:CM,sprite_vert:PM,sprite_frag:LM},he={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},ci={basic:{uniforms:ln([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:ln([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Xe(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:ln([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:ln([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:ln([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Xe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:ln([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:ln([he.points,he.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:ln([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:ln([he.common,he.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:ln([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:ln([he.sprite,he.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:ln([he.common,he.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:ln([he.lights,he.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};ci.physical={uniforms:ln([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Oa={r:0,b:0,g:0};function DM(s,e,t,n,i,r,o){const a=new Xe(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(m,p){let y=!1,x=p.isScene===!0?p.background:null;switch(x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),y=!0),s.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),y=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),y=!0;break}(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ml)?(u===void 0&&(u=new _n(new gr(1,1,1),new ns({name:"BackgroundCubeMaterial",uniforms:to(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=x.colorSpace!==ke,(h!==x||f!==x.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new _n(new Bu(2,2),new ns({name:"BackgroundMaterial",uniforms:to(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=x.colorSpace!==ke,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,d=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(Oa,Mm(s)),n.buffers.color.setClear(Oa.r,Oa.g,Oa.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function IM(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function h(O,N,K,F,Y){let Z=!1;if(o){const R=_(F,K,N);c!==R&&(c=R,d(c.object)),Z=p(O,F,K,Y),Z&&y(O,F,K,Y)}else{const R=N.wireframe===!0;(c.geometry!==F.id||c.program!==K.id||c.wireframe!==R)&&(c.geometry=F.id,c.program=K.id,c.wireframe=R,Z=!0)}Y!==null&&t.update(Y,s.ELEMENT_ARRAY_BUFFER),(Z||u)&&(u=!1,P(O,N,K,F),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(O){return n.isWebGL2?s.bindVertexArray(O):r.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?s.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function _(O,N,K){const F=K.wireframe===!0;let Y=a[O.id];Y===void 0&&(Y={},a[O.id]=Y);let Z=Y[N.id];Z===void 0&&(Z={},Y[N.id]=Z);let R=Z[F];return R===void 0&&(R=m(f()),Z[F]=R),R}function m(O){const N=[],K=[],F=[];for(let Y=0;Y<i;Y++)N[Y]=0,K[Y]=0,F[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:K,attributeDivisors:F,object:O,attributes:{},index:null}}function p(O,N,K,F){const Y=c.attributes,Z=N.attributes;let R=0;const le=K.getAttributes();for(const H in le)if(le[H].location>=0){const J=Y[H];let se=Z[H];if(se===void 0&&(H==="instanceMatrix"&&O.instanceMatrix&&(se=O.instanceMatrix),H==="instanceColor"&&O.instanceColor&&(se=O.instanceColor)),J===void 0||J.attribute!==se||se&&J.data!==se.data)return!0;R++}return c.attributesNum!==R||c.index!==F}function y(O,N,K,F){const Y={},Z=N.attributes;let R=0;const le=K.getAttributes();for(const H in le)if(le[H].location>=0){let J=Z[H];J===void 0&&(H==="instanceMatrix"&&O.instanceMatrix&&(J=O.instanceMatrix),H==="instanceColor"&&O.instanceColor&&(J=O.instanceColor));const se={};se.attribute=J,J&&J.data&&(se.data=J.data),Y[H]=se,R++}c.attributes=Y,c.attributesNum=R,c.index=F}function x(){const O=c.newAttributes;for(let N=0,K=O.length;N<K;N++)O[N]=0}function v(O){S(O,0)}function S(O,N){const K=c.newAttributes,F=c.enabledAttributes,Y=c.attributeDivisors;K[O]=1,F[O]===0&&(s.enableVertexAttribArray(O),F[O]=1),Y[O]!==N&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,N),Y[O]=N)}function w(){const O=c.newAttributes,N=c.enabledAttributes;for(let K=0,F=N.length;K<F;K++)N[K]!==O[K]&&(s.disableVertexAttribArray(K),N[K]=0)}function A(O,N,K,F,Y,Z,R){R===!0?s.vertexAttribIPointer(O,N,K,Y,Z):s.vertexAttribPointer(O,N,K,F,Y,Z)}function P(O,N,K,F){if(n.isWebGL2===!1&&(O.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const Y=F.attributes,Z=K.getAttributes(),R=N.defaultAttributeValues;for(const le in Z){const H=Z[le];if(H.location>=0){let ee=Y[le];if(ee===void 0&&(le==="instanceMatrix"&&O.instanceMatrix&&(ee=O.instanceMatrix),le==="instanceColor"&&O.instanceColor&&(ee=O.instanceColor)),ee!==void 0){const J=ee.normalized,se=ee.itemSize,ce=t.get(ee);if(ce===void 0)continue;const de=ce.buffer,Ce=ce.type,Te=ce.bytesPerElement,dt=n.isWebGL2===!0&&(Ce===s.INT||Ce===s.UNSIGNED_INT||ee.gpuType===tm);if(ee.isInterleavedBufferAttribute){const Oe=ee.data,k=Oe.stride,De=ee.offset;if(Oe.isInstancedInterleavedBuffer){for(let pe=0;pe<H.locationSize;pe++)S(H.location+pe,Oe.meshPerAttribute);O.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let pe=0;pe<H.locationSize;pe++)v(H.location+pe);s.bindBuffer(s.ARRAY_BUFFER,de);for(let pe=0;pe<H.locationSize;pe++)A(H.location+pe,se/H.locationSize,Ce,J,k*Te,(De+se/H.locationSize*pe)*Te,dt)}else{if(ee.isInstancedBufferAttribute){for(let Oe=0;Oe<H.locationSize;Oe++)S(H.location+Oe,ee.meshPerAttribute);O.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Oe=0;Oe<H.locationSize;Oe++)v(H.location+Oe);s.bindBuffer(s.ARRAY_BUFFER,de);for(let Oe=0;Oe<H.locationSize;Oe++)A(H.location+Oe,se/H.locationSize,Ce,J,se*Te,se/H.locationSize*Oe*Te,dt)}}else if(R!==void 0){const J=R[le];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(H.location,J);break;case 3:s.vertexAttrib3fv(H.location,J);break;case 4:s.vertexAttrib4fv(H.location,J);break;default:s.vertexAttrib1fv(H.location,J)}}}}w()}function M(){B();for(const O in a){const N=a[O];for(const K in N){const F=N[K];for(const Y in F)g(F[Y].object),delete F[Y];delete N[K]}delete a[O]}}function T(O){if(a[O.id]===void 0)return;const N=a[O.id];for(const K in N){const F=N[K];for(const Y in F)g(F[Y].object),delete F[Y];delete N[K]}delete a[O.id]}function G(O){for(const N in a){const K=a[N];if(K[O.id]===void 0)continue;const F=K[O.id];for(const Y in F)g(F[Y].object),delete F[Y];delete K[O.id]}}function B(){D(),u=!0,c!==l&&(c=l,d(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:B,resetDefaultState:D,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:G,initAttributes:x,enableAttribute:v,disableUnusedAttributes:w}}function UM(s,e,t,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,d;if(i)f=s,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,c,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function NM(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,v=o||e.has("OES_texture_float"),S=x&&v,w=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:S,maxSamples:w}}function OM(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Dr,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const y=r?0:n,x=y*4;let v=p.clippingState||null;l.value=v,v=u(g,f,x,d);for(let S=0;S!==x;++S)v[S]=t[S];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==_;++x,v+=4)o.copy(h[x]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function FM(s){let e=new WeakMap;function t(o,a){return a===Qc?o.mapping=Ks:a===eu&&(o.mapping=$s),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Qc||a===eu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Q0(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ku extends ym{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Us=4,Pf=[.125,.215,.35,.446,.526,.582],Ur=20,pc=new ku,Lf=new Xe;let mc=null;const Ir=(1+Math.sqrt(5))/2,Ts=1/Ir,Df=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Ir,Ts),new U(0,Ir,-Ts),new U(Ts,0,Ir),new U(-Ts,0,Ir),new U(Ir,Ts,0),new U(-Ir,Ts,0)];class If{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){mc=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Of(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mc),e.scissorTest=!1,Fa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mc=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:$o,format:Yn,colorSpace:xi,depthBuffer:!1},i=Uf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uf(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BM(r)),this._blurMaterial=kM(r,e,t)}return i}_compileMaterial(e){const t=new _n(this._lodPlanes[0],e);this._renderer.compile(t,pc)}_sceneToCubeUV(e,t,n,i){const a=new fn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Lf),u.toneMapping=zi,u.autoClear=!1;const d=new di({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),g=new _n(new gr,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Lf),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;Fa(i,y*x,p>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ks||e.mapping===$s;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Of()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nf());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new _n(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Fa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,pc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Df[(i-1)%Df.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new _n(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ur-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Ur;m>Ur&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ur}`);const p=[];let y=0;for(let A=0;A<Ur;++A){const P=A/_,M=Math.exp(-P*P/2);p.push(M),A===0?y+=M:A<m&&(y+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const v=this._sizeLods[i],S=3*v*(i>x-Us?i-x+Us:0),w=4*(this._cubeSize-v);Fa(t,S,w,3*v,2*v),l.setRenderTarget(t),l.render(h,pc)}}function BM(s){const e=[],t=[],n=[];let i=s;const r=s-Us+1+Pf.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Us?l=Pf[o-s+Us-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),x=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let w=0;w<d;w++){const A=w%3*2/3-1,P=w>2?0:-1,M=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];y.set(M,_*g*w),x.set(f,m*g*w);const T=[w,w,w,w,w,w];v.set(T,p*g*w)}const S=new Mi;S.setAttribute("position",new gn(y,_)),S.setAttribute("uv",new gn(x,m)),S.setAttribute("faceIndex",new gn(v,p)),e.push(S),i>Us&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Uf(s,e,t){const n=new ts(s,e,t);return n.texture.mapping=Ml,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fa(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function kM(s,e,t){const n=new Float32Array(Ur),i=new U(0,1,0);return new ns({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Nf(){return new ns({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Of(){return new ns({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function zu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zM(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qc||l===eu,u=l===Ks||l===$s;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new If(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new If(s));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function HM(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function GM(s,e,t,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],s.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let x=0,v=y.length;x<v;x+=3){const S=y[x+0],w=y[x+1],A=y[x+2];f.push(S,w,w,A,A,S)}}else{const y=g.array;_=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const S=x+0,w=x+1,A=x+2;f.push(S,w,w,A,A,S)}}const m=new(fm(f)?vm:xm)(f,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function VM(s,e,t,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){s.drawElements(r,d,a,f*l),t.update(d,r,1)}function h(f,d,g){if(g===0)return;let _,m;if(i)_=s,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](r,d,a,f*l,g),t.update(d,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function WM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function XM(s,e){return s[0]-e[0]}function YM(s,e){return Math.abs(e[1])-Math.abs(s[1])}function qM(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new gt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(u);if(m===void 0||m.count!==_){let N=function(){D.dispose(),r.delete(u),u.removeEventListener("dispose",N)};var d=N;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let M=0;x===!0&&(M=1),v===!0&&(M=2),S===!0&&(M=3);let T=u.attributes.position.count*M,G=1;T>e.maxTextureSize&&(G=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const B=new Float32Array(T*G*4*_),D=new mm(B,T,G,_);D.type=Oi,D.needsUpdate=!0;const O=M*4;for(let K=0;K<_;K++){const F=w[K],Y=A[K],Z=P[K],R=T*G*4*K;for(let le=0;le<F.count;le++){const H=le*O;x===!0&&(o.fromBufferAttribute(F,le),B[R+H+0]=o.x,B[R+H+1]=o.y,B[R+H+2]=o.z,B[R+H+3]=0),v===!0&&(o.fromBufferAttribute(Y,le),B[R+H+4]=o.x,B[R+H+5]=o.y,B[R+H+6]=o.z,B[R+H+7]=0),S===!0&&(o.fromBufferAttribute(Z,le),B[R+H+8]=o.x,B[R+H+9]=o.y,B[R+H+10]=o.z,B[R+H+11]=Z.itemSize===4?o.w:1)}}m={count:_,texture:D,size:new lt(T,G)},r.set(u,m),u.addEventListener("dispose",N)}let p=0;for(let x=0;x<f.length;x++)p+=f[x];const y=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(s,"morphTargetBaseInfluence",y),h.getUniforms().setValue(s,"morphTargetInfluences",f),h.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let v=0;v<g;v++)_[v]=[v,0];n[u.id]=_}for(let v=0;v<g;v++){const S=_[v];S[0]=v,S[1]=f[v]}_.sort(YM);for(let v=0;v<8;v++)v<g&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(XM);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let y=0;for(let v=0;v<8;v++){const S=a[v],w=S[0],A=S[1];w!==Number.MAX_SAFE_INTEGER&&A?(m&&u.getAttribute("morphTarget"+v)!==m[w]&&u.setAttribute("morphTarget"+v,m[w]),p&&u.getAttribute("morphNormal"+v)!==p[w]&&u.setAttribute("morphNormal"+v,p[w]),i[v]=A,y+=A):(m&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const x=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(s,"morphTargetBaseInfluence",x),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function jM(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER)),h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Em=new Kt,bm=new mm,Am=new F0,wm=new Sm,Ff=[],Bf=[],kf=new Float32Array(16),zf=new Float32Array(9),Hf=new Float32Array(4);function so(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ff[i];if(r===void 0&&(r=new Float32Array(i),Ff[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Bt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function kt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Tl(s,e){let t=Bf[e];t===void 0&&(t=new Int32Array(e),Bf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function KM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function $M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2fv(this.addr,e),kt(t,e)}}function ZM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;s.uniform3fv(this.addr,e),kt(t,e)}}function JM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4fv(this.addr,e),kt(t,e)}}function QM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;Hf.set(n),s.uniformMatrix2fv(this.addr,!1,Hf),kt(t,n)}}function ey(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;zf.set(n),s.uniformMatrix3fv(this.addr,!1,zf),kt(t,n)}}function ty(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;kf.set(n),s.uniformMatrix4fv(this.addr,!1,kf),kt(t,n)}}function ny(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function iy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2iv(this.addr,e),kt(t,e)}}function ry(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3iv(this.addr,e),kt(t,e)}}function sy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4iv(this.addr,e),kt(t,e)}}function oy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ay(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2uiv(this.addr,e),kt(t,e)}}function ly(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3uiv(this.addr,e),kt(t,e)}}function cy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4uiv(this.addr,e),kt(t,e)}}function uy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Em,i)}function hy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Am,i)}function fy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||wm,i)}function dy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||bm,i)}function py(s){switch(s){case 5126:return KM;case 35664:return $M;case 35665:return ZM;case 35666:return JM;case 35674:return QM;case 35675:return ey;case 35676:return ty;case 5124:case 35670:return ny;case 35667:case 35671:return iy;case 35668:case 35672:return ry;case 35669:case 35673:return sy;case 5125:return oy;case 36294:return ay;case 36295:return ly;case 36296:return cy;case 35678:case 36198:case 36298:case 36306:case 35682:return uy;case 35679:case 36299:case 36307:return hy;case 35680:case 36300:case 36308:case 36293:return fy;case 36289:case 36303:case 36311:case 36292:return dy}}function my(s,e){s.uniform1fv(this.addr,e)}function _y(s,e){const t=so(e,this.size,2);s.uniform2fv(this.addr,t)}function gy(s,e){const t=so(e,this.size,3);s.uniform3fv(this.addr,t)}function xy(s,e){const t=so(e,this.size,4);s.uniform4fv(this.addr,t)}function vy(s,e){const t=so(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function My(s,e){const t=so(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function yy(s,e){const t=so(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Sy(s,e){s.uniform1iv(this.addr,e)}function Ty(s,e){s.uniform2iv(this.addr,e)}function Ey(s,e){s.uniform3iv(this.addr,e)}function by(s,e){s.uniform4iv(this.addr,e)}function Ay(s,e){s.uniform1uiv(this.addr,e)}function wy(s,e){s.uniform2uiv(this.addr,e)}function Ry(s,e){s.uniform3uiv(this.addr,e)}function Cy(s,e){s.uniform4uiv(this.addr,e)}function Py(s,e,t){const n=this.cache,i=e.length,r=Tl(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Em,r[o])}function Ly(s,e,t){const n=this.cache,i=e.length,r=Tl(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Am,r[o])}function Dy(s,e,t){const n=this.cache,i=e.length,r=Tl(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||wm,r[o])}function Iy(s,e,t){const n=this.cache,i=e.length,r=Tl(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||bm,r[o])}function Uy(s){switch(s){case 5126:return my;case 35664:return _y;case 35665:return gy;case 35666:return xy;case 35674:return vy;case 35675:return My;case 35676:return yy;case 5124:case 35670:return Sy;case 35667:case 35671:return Ty;case 35668:case 35672:return Ey;case 35669:case 35673:return by;case 5125:return Ay;case 36294:return wy;case 36295:return Ry;case 36296:return Cy;case 35678:case 36198:case 36298:case 36306:case 35682:return Py;case 35679:case 36299:case 36307:return Ly;case 35680:case 36300:case 36308:case 36293:return Dy;case 36289:case 36303:case 36311:case 36292:return Iy}}class Ny{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=py(t.type)}}class Oy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Uy(t.type)}}class Fy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const _c=/(\w+)(\])?(\[|\.)?/g;function Gf(s,e){s.seq.push(e),s.map[e.id]=e}function By(s,e,t){const n=s.name,i=n.length;for(_c.lastIndex=0;;){const r=_c.exec(n),o=_c.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Gf(t,c===void 0?new Ny(a,s,e):new Oy(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Fy(a),Gf(t,h)),t=h}}}class el{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);By(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Vf(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let ky=0;function zy(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Hy(s){switch(s){case xi:return["Linear","( value )"];case ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function Wf(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+zy(s.getShaderSource(e),o)}else return i}function Gy(s,e){const t=Hy(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Vy(s,e){let t;switch(e){case Hg:t="Linear";break;case Gg:t="Reinhard";break;case Vg:t="OptimizedCineon";break;case Wg:t="ACESFilmic";break;case Xg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Wy(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wo).join(`
`)}function Xy(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yy(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function wo(s){return s!==""}function Xf(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qy=/^[ \t]*#include +<([\w\d./]+)>/gm;function ou(s){return s.replace(qy,jy)}function jy(s,e){const t=qe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ou(t)}const Ky=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qf(s){return s.replace(Ky,$y)}function $y(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function jf(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zy(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Kp?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===vg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function Jy(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ks:case $s:e="ENVMAP_TYPE_CUBE";break;case Ml:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qy(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function eS(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Jp:e="ENVMAP_BLENDING_MULTIPLY";break;case kg:e="ENVMAP_BLENDING_MIX";break;case zg:e="ENVMAP_BLENDING_ADD";break}return e}function tS(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function nS(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Zy(t),c=Jy(t),u=Qy(t),h=eS(t),f=tS(t),d=t.isWebGL2?"":Wy(t),g=Xy(r),_=i.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wo).join(`
`),m.length>0&&(m+=`
`),p=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wo).join(`
`),p.length>0&&(p+=`
`)):(m=[jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),p=[d,jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?qe.tonemapping_pars_fragment:"",t.toneMapping!==zi?Vy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.encodings_pars_fragment,Gy("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wo).join(`
`)),o=ou(o),o=Xf(o,t),o=Yf(o,t),a=ou(a),a=Xf(a,t),a=Yf(a,t),o=qf(o),a=qf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===df?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+o,v=y+p+a,S=Vf(i,i.VERTEX_SHADER,x),w=Vf(i,i.FRAGMENT_SHADER,v);if(i.attachShader(_,S),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),s.debug.checkShaderErrors){const M=i.getProgramInfoLog(_).trim(),T=i.getShaderInfoLog(S).trim(),G=i.getShaderInfoLog(w).trim();let B=!0,D=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,S,w);else{const O=Wf(i,S,"vertex"),N=Wf(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+O+`
`+N)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(T===""||G==="")&&(D=!1);D&&(this.diagnostics={runnable:B,programLog:M,vertexShader:{log:T,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(S),i.deleteShader(w);let A;this.getUniforms=function(){return A===void 0&&(A=new el(i,_)),A};let P;return this.getAttributes=function(){return P===void 0&&(P=Yy(i,_)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ky++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=w,this}let iS=0;class rS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sS(e),t.set(e,n)),n}}class sS{constructor(e){this.id=iS++,this.code=e,this.usedTimes=0}}function oS(s,e,t,n,i,r,o){const a=new _m,l=new rS,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,T,G,B,D){const O=B.fog,N=D.geometry,K=M.isMeshStandardMaterial?B.environment:null,F=(M.isMeshStandardMaterial?t:e).get(M.envMap||K),Y=F&&F.mapping===Ml?F.image.height:null,Z=g[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const R=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,le=R!==void 0?R.length:0;let H=0;N.morphAttributes.position!==void 0&&(H=1),N.morphAttributes.normal!==void 0&&(H=2),N.morphAttributes.color!==void 0&&(H=3);let ee,J,se,ce;if(Z){const ut=ci[Z];ee=ut.vertexShader,J=ut.fragmentShader}else ee=M.vertexShader,J=M.fragmentShader,l.update(M),se=l.getVertexShaderID(M),ce=l.getFragmentShaderID(M);const de=s.getRenderTarget(),Ce=D.isInstancedMesh===!0,Te=!!M.map,dt=!!M.matcap,Oe=!!F,k=!!M.aoMap,De=!!M.lightMap,pe=!!M.bumpMap,Pe=!!M.normalMap,Ae=!!M.displacementMap,V=!!M.emissiveMap,Ie=!!M.metalnessMap,Ue=!!M.roughnessMap,rt=M.anisotropy>0,Ye=M.clearcoat>0,Mt=M.iridescence>0,C=M.sheen>0,b=M.transmission>0,q=rt&&!!M.anisotropyMap,Q=Ye&&!!M.clearcoatMap,te=Ye&&!!M.clearcoatNormalMap,ie=Ye&&!!M.clearcoatRoughnessMap,ye=Mt&&!!M.iridescenceMap,oe=Mt&&!!M.iridescenceThicknessMap,$=C&&!!M.sheenColorMap,ve=C&&!!M.sheenRoughnessMap,we=!!M.specularMap,Re=!!M.specularColorMap,xe=!!M.specularIntensityMap,me=b&&!!M.transmissionMap,Be=b&&!!M.thicknessMap,st=!!M.gradientMap,L=!!M.alphaMap,ae=M.alphaTest>0,W=!!M.extensions,ne=!!N.attributes.uv1,re=!!N.attributes.uv2,Ve=!!N.attributes.uv3;return{isWebGL2:u,shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:ee,fragmentShader:J,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:ce,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,instancing:Ce,instancingColor:Ce&&D.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:xi,map:Te,matcap:dt,envMap:Oe,envMapMode:Oe&&F.mapping,envMapCubeUVHeight:Y,aoMap:k,lightMap:De,bumpMap:pe,normalMap:Pe,displacementMap:f&&Ae,emissiveMap:V,normalMapObjectSpace:Pe&&M.normalMapType===s0,normalMapTangentSpace:Pe&&M.normalMapType===cm,metalnessMap:Ie,roughnessMap:Ue,anisotropy:rt,anisotropyMap:q,clearcoat:Ye,clearcoatMap:Q,clearcoatNormalMap:te,clearcoatRoughnessMap:ie,iridescence:Mt,iridescenceMap:ye,iridescenceThicknessMap:oe,sheen:C,sheenColorMap:$,sheenRoughnessMap:ve,specularMap:we,specularColorMap:Re,specularIntensityMap:xe,transmission:b,transmissionMap:me,thicknessMap:Be,gradientMap:st,opaque:M.transparent===!1&&M.blending===zs,alphaMap:L,alphaTest:ae,combine:M.combine,mapUv:Te&&_(M.map.channel),aoMapUv:k&&_(M.aoMap.channel),lightMapUv:De&&_(M.lightMap.channel),bumpMapUv:pe&&_(M.bumpMap.channel),normalMapUv:Pe&&_(M.normalMap.channel),displacementMapUv:Ae&&_(M.displacementMap.channel),emissiveMapUv:V&&_(M.emissiveMap.channel),metalnessMapUv:Ie&&_(M.metalnessMap.channel),roughnessMapUv:Ue&&_(M.roughnessMap.channel),anisotropyMapUv:q&&_(M.anisotropyMap.channel),clearcoatMapUv:Q&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:$&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(M.sheenRoughnessMap.channel),specularMapUv:we&&_(M.specularMap.channel),specularColorMapUv:Re&&_(M.specularColorMap.channel),specularIntensityMapUv:xe&&_(M.specularIntensityMap.channel),transmissionMapUv:me&&_(M.transmissionMap.channel),thicknessMapUv:Be&&_(M.thicknessMap.channel),alphaMapUv:L&&_(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Pe||rt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:ne,vertexUv2s:re,vertexUv3s:Ve,pointsUvs:D.isPoints===!0&&!!N.attributes.uv&&(Te||L),fog:!!O,useFog:M.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:H,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:M.toneMapped?s.toneMapping:zi,useLegacyLights:s.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===hi,flipSided:M.side===bn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:W&&M.extensions.derivatives===!0,extensionFragDepth:W&&M.extensions.fragDepth===!0,extensionDrawBuffers:W&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:W&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const G in M.defines)T.push(G),T.push(M.defines[G]);return M.isRawShaderMaterial===!1&&(y(T,M),x(T,M),T.push(s.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function y(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function x(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),M.push(a.mask)}function v(M){const T=g[M.type];let G;if(T){const B=ci[T];G=K0.clone(B.uniforms)}else G=M.uniforms;return G}function S(M,T){let G;for(let B=0,D=c.length;B<D;B++){const O=c[B];if(O.cacheKey===T){G=O,++G.usedTimes;break}}return G===void 0&&(G=new nS(s,T,M,r),c.push(G)),G}function w(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:S,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:P}}function aS(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function lS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Kf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function $f(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,g,_,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||lS),n.length>1&&n.sort(f||Kf),i.length>1&&i.sort(f||Kf)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function cS(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new $f,s.set(n,[o])):i>=r.length?(o=new $f,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function uS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Xe};break;case"SpotLight":t={position:new U,direction:new U,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new U,halfWidth:new U,halfHeight:new U};break}return s[e.id]=t,t}}}function hS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let fS=0;function dS(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function pS(s,e){const t=new uS,n=hS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new U);const r=new U,o=new Je,a=new Je;function l(u,h){let f=0,d=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let _=0,m=0,p=0,y=0,x=0,v=0,S=0,w=0,A=0,P=0;u.sort(dS);const M=h===!0?Math.PI:1;for(let G=0,B=u.length;G<B;G++){const D=u[G],O=D.color,N=D.intensity,K=D.distance,F=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=O.r*N*M,d+=O.g*N*M,g+=O.b*N*M;else if(D.isLightProbe)for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(D.sh.coefficients[Y],N);else if(D.isDirectionalLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity*M),D.castShadow){const Z=D.shadow,R=n.get(D);R.shadowBias=Z.bias,R.shadowNormalBias=Z.normalBias,R.shadowRadius=Z.radius,R.shadowMapSize=Z.mapSize,i.directionalShadow[_]=R,i.directionalShadowMap[_]=F,i.directionalShadowMatrix[_]=D.shadow.matrix,v++}i.directional[_]=Y,_++}else if(D.isSpotLight){const Y=t.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(O).multiplyScalar(N*M),Y.distance=K,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,i.spot[p]=Y;const Z=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,Z.updateMatrices(D),D.castShadow&&P++),i.spotLightMatrix[p]=Z.matrix,D.castShadow){const R=n.get(D);R.shadowBias=Z.bias,R.shadowNormalBias=Z.normalBias,R.shadowRadius=Z.radius,R.shadowMapSize=Z.mapSize,i.spotShadow[p]=R,i.spotShadowMap[p]=F,w++}p++}else if(D.isRectAreaLight){const Y=t.get(D);Y.color.copy(O).multiplyScalar(N),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),i.rectArea[y]=Y,y++}else if(D.isPointLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity*M),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const Z=D.shadow,R=n.get(D);R.shadowBias=Z.bias,R.shadowNormalBias=Z.normalBias,R.shadowRadius=Z.radius,R.shadowMapSize=Z.mapSize,R.shadowCameraNear=Z.camera.near,R.shadowCameraFar=Z.camera.far,i.pointShadow[m]=R,i.pointShadowMap[m]=F,i.pointShadowMatrix[m]=D.shadow.matrix,S++}i.point[m]=Y,m++}else if(D.isHemisphereLight){const Y=t.get(D);Y.skyColor.copy(D.color).multiplyScalar(N*M),Y.groundColor.copy(D.groundColor).multiplyScalar(N*M),i.hemi[x]=Y,x++}}y>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;const T=i.hash;(T.directionalLength!==_||T.pointLength!==m||T.spotLength!==p||T.rectAreaLength!==y||T.hemiLength!==x||T.numDirectionalShadows!==v||T.numPointShadows!==S||T.numSpotShadows!==w||T.numSpotMaps!==A)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=y,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=w+A-P,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=P,T.directionalLength=_,T.pointLength=m,T.spotLength=p,T.rectAreaLength=y,T.hemiLength=x,T.numDirectionalShadows=v,T.numPointShadows=S,T.numSpotShadows=w,T.numSpotMaps=A,i.version=fS++)}function c(u,h){let f=0,d=0,g=0,_=0,m=0;const p=h.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){const v=u[y];if(v.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),f++}else if(v.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),g++}else if(v.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),a.identity(),o.copy(v.matrixWorld),o.premultiply(p),a.extractRotation(o),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Zf(s,e){const t=new pS(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function mS(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Zf(s,e),t.set(r,[l])):o>=a.length?(l=new Zf(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class _S extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=i0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gS extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function MS(s,e,t){let n=new Fu;const i=new lt,r=new lt,o=new gt,a=new _S({depthPacking:r0}),l=new gS,c={},u=t.maxTextureSize,h={[Wi]:bn,[bn]:Wi,[hi]:hi},f=new ns({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:xS,fragmentShader:vS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Mi;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _n(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kp;let p=this.type;this.render=function(S,w,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const P=s.getRenderTarget(),M=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),G=s.state;G.setBlending(ur),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const B=p!==Pi&&this.type===Pi,D=p===Pi&&this.type!==Pi;for(let O=0,N=S.length;O<N;O++){const K=S[O],F=K.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const Y=F.getFrameExtents();if(i.multiply(Y),r.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Y.x),i.x=r.x*Y.x,F.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Y.y),i.y=r.y*Y.y,F.mapSize.y=r.y)),F.map===null||B===!0||D===!0){const R=this.type!==Pi?{minFilter:Vt,magFilter:Vt}:{};F.map!==null&&F.map.dispose(),F.map=new ts(i.x,i.y,R),F.map.texture.name=K.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();const Z=F.getViewportCount();for(let R=0;R<Z;R++){const le=F.getViewport(R);o.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),G.viewport(o),F.updateMatrices(K,R),n=F.getFrustum(),v(w,A,F.camera,K,this.type)}F.isPointLightShadow!==!0&&this.type===Pi&&y(F,A),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(P,M,T)};function y(S,w){const A=e.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ts(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(w,null,A,f,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(w,null,A,d,_,null)}function x(S,w,A,P){let M=null;const T=A.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)M=T;else if(M=A.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const G=M.uuid,B=w.uuid;let D=c[G];D===void 0&&(D={},c[G]=D);let O=D[B];O===void 0&&(O=M.clone(),D[B]=O),M=O}if(M.visible=w.visible,M.wireframe=w.wireframe,P===Pi?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:h[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=s.properties.get(M);G.light=A}return M}function v(S,w,A,P,M){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===Pi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,S.matrixWorld);const B=e.update(S),D=S.material;if(Array.isArray(D)){const O=B.groups;for(let N=0,K=O.length;N<K;N++){const F=O[N],Y=D[F.materialIndex];if(Y&&Y.visible){const Z=x(S,Y,P,M);s.renderBufferDirect(A,null,B,Z,S,F)}}}else if(D.visible){const O=x(S,D,P,M);s.renderBufferDirect(A,null,B,O,S,null)}}const G=S.children;for(let B=0,D=G.length;B<D;B++)v(G[B],w,A,P,M)}}function yS(s,e,t){const n=t.isWebGL2;function i(){let L=!1;const ae=new gt;let W=null;const ne=new gt(0,0,0,0);return{setMask:function(re){W!==re&&!L&&(s.colorMask(re,re,re,re),W=re)},setLocked:function(re){L=re},setClear:function(re,Ve,ht,ut,Ne){Ne===!0&&(re*=ut,Ve*=ut,ht*=ut),ae.set(re,Ve,ht,ut),ne.equals(ae)===!1&&(s.clearColor(re,Ve,ht,ut),ne.copy(ae))},reset:function(){L=!1,W=null,ne.set(-1,0,0,0)}}}function r(){let L=!1,ae=null,W=null,ne=null;return{setTest:function(re){re?de(s.DEPTH_TEST):Ce(s.DEPTH_TEST)},setMask:function(re){ae!==re&&!L&&(s.depthMask(re),ae=re)},setFunc:function(re){if(W!==re){switch(re){case Dg:s.depthFunc(s.NEVER);break;case Ig:s.depthFunc(s.ALWAYS);break;case Ug:s.depthFunc(s.LESS);break;case Jc:s.depthFunc(s.LEQUAL);break;case Ng:s.depthFunc(s.EQUAL);break;case Og:s.depthFunc(s.GEQUAL);break;case Fg:s.depthFunc(s.GREATER);break;case Bg:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}W=re}},setLocked:function(re){L=re},setClear:function(re){ne!==re&&(s.clearDepth(re),ne=re)},reset:function(){L=!1,ae=null,W=null,ne=null}}}function o(){let L=!1,ae=null,W=null,ne=null,re=null,Ve=null,ht=null,ut=null,Ne=null;return{setTest:function(fe){L||(fe?de(s.STENCIL_TEST):Ce(s.STENCIL_TEST))},setMask:function(fe){ae!==fe&&!L&&(s.stencilMask(fe),ae=fe)},setFunc:function(fe,ze,je){(W!==fe||ne!==ze||re!==je)&&(s.stencilFunc(fe,ze,je),W=fe,ne=ze,re=je)},setOp:function(fe,ze,je){(Ve!==fe||ht!==ze||ut!==je)&&(s.stencilOp(fe,ze,je),Ve=fe,ht=ze,ut=je)},setLocked:function(fe){L=fe},setClear:function(fe){Ne!==fe&&(s.clearStencil(fe),Ne=fe)},reset:function(){L=!1,ae=null,W=null,ne=null,re=null,Ve=null,ht=null,ut=null,Ne=null}}}const a=new i,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,v=null,S=null,w=null,A=null,P=null,M=!1,T=null,G=null,B=null,D=null,O=null;const N=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,F=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(Y)[1]),K=F>=1):Y.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),K=F>=2);let Z=null,R={};const le=s.getParameter(s.SCISSOR_BOX),H=s.getParameter(s.VIEWPORT),ee=new gt().fromArray(le),J=new gt().fromArray(H);function se(L,ae,W,ne){const re=new Uint8Array(4),Ve=s.createTexture();s.bindTexture(L,Ve),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ht=0;ht<W;ht++)n&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(ae,0,s.RGBA,1,1,ne,0,s.RGBA,s.UNSIGNED_BYTE,re):s.texImage2D(ae+ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,re);return Ve}const ce={};ce[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ce[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),de(s.DEPTH_TEST),l.setFunc(Jc),Ae(!1),V(Uh),de(s.CULL_FACE),pe(ur);function de(L){f[L]!==!0&&(s.enable(L),f[L]=!0)}function Ce(L){f[L]!==!1&&(s.disable(L),f[L]=!1)}function Te(L,ae){return d[L]!==ae?(s.bindFramebuffer(L,ae),d[L]=ae,n&&(L===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ae),L===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ae)),!0):!1}function dt(L,ae){let W=_,ne=!1;if(L)if(W=g.get(ae),W===void 0&&(W=[],g.set(ae,W)),L.isWebGLMultipleRenderTargets){const re=L.texture;if(W.length!==re.length||W[0]!==s.COLOR_ATTACHMENT0){for(let Ve=0,ht=re.length;Ve<ht;Ve++)W[Ve]=s.COLOR_ATTACHMENT0+Ve;W.length=re.length,ne=!0}}else W[0]!==s.COLOR_ATTACHMENT0&&(W[0]=s.COLOR_ATTACHMENT0,ne=!0);else W[0]!==s.BACK&&(W[0]=s.BACK,ne=!0);ne&&(t.isWebGL2?s.drawBuffers(W):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(W))}function Oe(L){return m!==L?(s.useProgram(L),m=L,!0):!1}const k={[Rs]:s.FUNC_ADD,[yg]:s.FUNC_SUBTRACT,[Sg]:s.FUNC_REVERSE_SUBTRACT};if(n)k[Bh]=s.MIN,k[kh]=s.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(k[Bh]=L.MIN_EXT,k[kh]=L.MAX_EXT)}const De={[Tg]:s.ZERO,[Eg]:s.ONE,[bg]:s.SRC_COLOR,[$p]:s.SRC_ALPHA,[Lg]:s.SRC_ALPHA_SATURATE,[Cg]:s.DST_COLOR,[wg]:s.DST_ALPHA,[Ag]:s.ONE_MINUS_SRC_COLOR,[Zp]:s.ONE_MINUS_SRC_ALPHA,[Pg]:s.ONE_MINUS_DST_COLOR,[Rg]:s.ONE_MINUS_DST_ALPHA};function pe(L,ae,W,ne,re,Ve,ht,ut){if(L===ur){p===!0&&(Ce(s.BLEND),p=!1);return}if(p===!1&&(de(s.BLEND),p=!0),L!==Mg){if(L!==y||ut!==M){if((x!==Rs||w!==Rs)&&(s.blendEquation(s.FUNC_ADD),x=Rs,w=Rs),ut)switch(L){case zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nh:s.blendFunc(s.ONE,s.ONE);break;case Oh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Oh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,S=null,A=null,P=null,y=L,M=ut}return}re=re||ae,Ve=Ve||W,ht=ht||ne,(ae!==x||re!==w)&&(s.blendEquationSeparate(k[ae],k[re]),x=ae,w=re),(W!==v||ne!==S||Ve!==A||ht!==P)&&(s.blendFuncSeparate(De[W],De[ne],De[Ve],De[ht]),v=W,S=ne,A=Ve,P=ht),y=L,M=!1}function Pe(L,ae){L.side===hi?Ce(s.CULL_FACE):de(s.CULL_FACE);let W=L.side===bn;ae&&(W=!W),Ae(W),L.blending===zs&&L.transparent===!1?pe(ur):pe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const ne=L.stencilWrite;c.setTest(ne),ne&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ue(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):Ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(L){T!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),T=L)}function V(L){L!==gg?(de(s.CULL_FACE),L!==G&&(L===Uh?s.cullFace(s.BACK):L===xg?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ce(s.CULL_FACE),G=L}function Ie(L){L!==B&&(K&&s.lineWidth(L),B=L)}function Ue(L,ae,W){L?(de(s.POLYGON_OFFSET_FILL),(D!==ae||O!==W)&&(s.polygonOffset(ae,W),D=ae,O=W)):Ce(s.POLYGON_OFFSET_FILL)}function rt(L){L?de(s.SCISSOR_TEST):Ce(s.SCISSOR_TEST)}function Ye(L){L===void 0&&(L=s.TEXTURE0+N-1),Z!==L&&(s.activeTexture(L),Z=L)}function Mt(L,ae,W){W===void 0&&(Z===null?W=s.TEXTURE0+N-1:W=Z);let ne=R[W];ne===void 0&&(ne={type:void 0,texture:void 0},R[W]=ne),(ne.type!==L||ne.texture!==ae)&&(Z!==W&&(s.activeTexture(W),Z=W),s.bindTexture(L,ae||ce[L]),ne.type=L,ne.texture=ae)}function C(){const L=R[Z];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function b(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(L){ee.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),ee.copy(L))}function xe(L){J.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),J.copy(L))}function me(L,ae){let W=h.get(ae);W===void 0&&(W=new WeakMap,h.set(ae,W));let ne=W.get(L);ne===void 0&&(ne=s.getUniformBlockIndex(ae,L.name),W.set(L,ne))}function Be(L,ae){const ne=h.get(ae).get(L);u.get(ae)!==ne&&(s.uniformBlockBinding(ae,ne,L.__bindingPointIndex),u.set(ae,ne))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},Z=null,R={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,v=null,S=null,w=null,A=null,P=null,M=!1,T=null,G=null,B=null,D=null,O=null,ee.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:de,disable:Ce,bindFramebuffer:Te,drawBuffers:dt,useProgram:Oe,setBlending:pe,setMaterial:Pe,setFlipSided:Ae,setCullFace:V,setLineWidth:Ie,setPolygonOffset:Ue,setScissorTest:rt,activeTexture:Ye,bindTexture:Mt,unbindTexture:C,compressedTexImage2D:b,compressedTexImage3D:q,texImage2D:ve,texImage3D:we,updateUBOMapping:me,uniformBlockBinding:Be,texStorage2D:oe,texStorage3D:$,texSubImage2D:Q,texSubImage3D:te,compressedTexSubImage2D:ie,compressedTexSubImage3D:ye,scissor:Re,viewport:xe,reset:st}}function SS(s,e,t,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,b){return p?new OffscreenCanvas(C,b):Jo("canvas")}function x(C,b,q,Q){let te=1;if((C.width>Q||C.height>Q)&&(te=Q/Math.max(C.width,C.height)),te<1||b===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ie=b?ml:Math.floor,ye=ie(te*C.width),oe=ie(te*C.height);_===void 0&&(_=y(ye,oe));const $=q?y(ye,oe):_;return $.width=ye,$.height=oe,$.getContext("2d").drawImage(C,0,0,ye,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ye+"x"+oe+")."),$}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function v(C){return su(C.width)&&su(C.height)}function S(C){return a?!1:C.wrapS!==Xn||C.wrapT!==Xn||C.minFilter!==Vt&&C.minFilter!==yn}function w(C,b){return C.generateMipmaps&&b&&C.minFilter!==Vt&&C.minFilter!==yn}function A(C){s.generateMipmap(C)}function P(C,b,q,Q,te=!1){if(a===!1)return b;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ie=b;return b===s.RED&&(q===s.FLOAT&&(ie=s.R32F),q===s.HALF_FLOAT&&(ie=s.R16F),q===s.UNSIGNED_BYTE&&(ie=s.R8)),b===s.RG&&(q===s.FLOAT&&(ie=s.RG32F),q===s.HALF_FLOAT&&(ie=s.RG16F),q===s.UNSIGNED_BYTE&&(ie=s.RG8)),b===s.RGBA&&(q===s.FLOAT&&(ie=s.RGBA32F),q===s.HALF_FLOAT&&(ie=s.RGBA16F),q===s.UNSIGNED_BYTE&&(ie=Q===ke&&te===!1?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(ie=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(ie=s.RGB5_A1)),(ie===s.R16F||ie===s.R32F||ie===s.RG16F||ie===s.RG32F||ie===s.RGBA16F||ie===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function M(C,b,q){return w(C,q)===!0||C.isFramebufferTexture&&C.minFilter!==Vt&&C.minFilter!==yn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function T(C){return C===Vt||C===tu||C===Qa?s.NEAREST:s.LINEAR}function G(C){const b=C.target;b.removeEventListener("dispose",G),D(b),b.isVideoTexture&&g.delete(b)}function B(C){const b=C.target;b.removeEventListener("dispose",B),N(b)}function D(C){const b=n.get(C);if(b.__webglInit===void 0)return;const q=C.source,Q=m.get(q);if(Q){const te=Q[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&O(C),Object.keys(Q).length===0&&m.delete(q)}n.remove(C)}function O(C){const b=n.get(C);s.deleteTexture(b.__webglTexture);const q=C.source,Q=m.get(q);delete Q[b.__cacheKey],o.memory.textures--}function N(C){const b=C.texture,q=n.get(C),Q=n.get(b);if(Q.__webglTexture!==void 0&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)s.deleteFramebuffer(q.__webglFramebuffer[te]),q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer[te]);else{if(s.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&s.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let te=0;te<q.__webglColorRenderbuffer.length;te++)q.__webglColorRenderbuffer[te]&&s.deleteRenderbuffer(q.__webglColorRenderbuffer[te]);q.__webglDepthRenderbuffer&&s.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let te=0,ie=b.length;te<ie;te++){const ye=n.get(b[te]);ye.__webglTexture&&(s.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(b[te])}n.remove(b),n.remove(C)}let K=0;function F(){K=0}function Y(){const C=K;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),K+=1,C}function Z(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function R(C,b){const q=n.get(C);if(C.isVideoTexture&&Ye(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(q,C,b);return}}t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+b)}function le(C,b){const q=n.get(C);if(C.version>0&&q.__version!==C.version){Te(q,C,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+b)}function H(C,b){const q=n.get(C);if(C.version>0&&q.__version!==C.version){Te(q,C,b);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+b)}function ee(C,b){const q=n.get(C);if(C.version>0&&q.__version!==C.version){dt(q,C,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+b)}const J={[Zs]:s.REPEAT,[Xn]:s.CLAMP_TO_EDGE,[dl]:s.MIRRORED_REPEAT},se={[Vt]:s.NEAREST,[tu]:s.NEAREST_MIPMAP_NEAREST,[Qa]:s.NEAREST_MIPMAP_LINEAR,[yn]:s.LINEAR,[em]:s.LINEAR_MIPMAP_NEAREST,[es]:s.LINEAR_MIPMAP_LINEAR},ce={[a0]:s.NEVER,[p0]:s.ALWAYS,[l0]:s.LESS,[u0]:s.LEQUAL,[c0]:s.EQUAL,[d0]:s.GEQUAL,[h0]:s.GREATER,[f0]:s.NOTEQUAL};function de(C,b,q){if(q?(s.texParameteri(C,s.TEXTURE_WRAP_S,J[b.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,J[b.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,J[b.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,se[b.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,se[b.minFilter])):(s.texParameteri(C,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(C,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(b.wrapS!==Xn||b.wrapT!==Xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,s.TEXTURE_MAG_FILTER,T(b.magFilter)),s.texParameteri(C,s.TEXTURE_MIN_FILTER,T(b.minFilter)),b.minFilter!==Vt&&b.minFilter!==yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ce[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Vt||b.minFilter!==Qa&&b.minFilter!==es||b.type===Oi&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===$o&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(s.texParameterf(C,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function Ce(C,b){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",G));const Q=b.source;let te=m.get(Q);te===void 0&&(te={},m.set(Q,te));const ie=Z(b);if(ie!==C.__cacheKey){te[ie]===void 0&&(te[ie]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),te[ie].usedTimes++;const ye=te[C.__cacheKey];ye!==void 0&&(te[C.__cacheKey].usedTimes--,ye.usedTimes===0&&O(b)),C.__cacheKey=ie,C.__webglTexture=te[ie].texture}return q}function Te(C,b,q){let Q=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=s.TEXTURE_3D);const te=Ce(C,b),ie=b.source;t.bindTexture(Q,C.__webglTexture,s.TEXTURE0+q);const ye=n.get(ie);if(ie.version!==ye.__version||te===!0){t.activeTexture(s.TEXTURE0+q),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const oe=S(b)&&v(b.image)===!1;let $=x(b.image,oe,!1,u);$=Mt(b,$);const ve=v($)||a,we=r.convert(b.format,b.colorSpace);let Re=r.convert(b.type),xe=P(b.internalFormat,we,Re,b.colorSpace);de(Q,b,ve);let me;const Be=b.mipmaps,st=a&&b.isVideoTexture!==!0,L=ye.__version===void 0||te===!0,ae=M(b,$,ve);if(b.isDepthTexture)xe=s.DEPTH_COMPONENT,a?b.type===Oi?xe=s.DEPTH_COMPONENT32F:b.type===or?xe=s.DEPTH_COMPONENT24:b.type===Yr?xe=s.DEPTH24_STENCIL8:xe=s.DEPTH_COMPONENT16:b.type===Oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===qr&&xe===s.DEPTH_COMPONENT&&b.type!==Nu&&b.type!==or&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=or,Re=r.convert(b.type)),b.format===Js&&xe===s.DEPTH_COMPONENT&&(xe=s.DEPTH_STENCIL,b.type!==Yr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Yr,Re=r.convert(b.type))),L&&(st?t.texStorage2D(s.TEXTURE_2D,1,xe,$.width,$.height):t.texImage2D(s.TEXTURE_2D,0,xe,$.width,$.height,0,we,Re,null));else if(b.isDataTexture)if(Be.length>0&&ve){st&&L&&t.texStorage2D(s.TEXTURE_2D,ae,xe,Be[0].width,Be[0].height);for(let W=0,ne=Be.length;W<ne;W++)me=Be[W],st?t.texSubImage2D(s.TEXTURE_2D,W,0,0,me.width,me.height,we,Re,me.data):t.texImage2D(s.TEXTURE_2D,W,xe,me.width,me.height,0,we,Re,me.data);b.generateMipmaps=!1}else st?(L&&t.texStorage2D(s.TEXTURE_2D,ae,xe,$.width,$.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,$.width,$.height,we,Re,$.data)):t.texImage2D(s.TEXTURE_2D,0,xe,$.width,$.height,0,we,Re,$.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){st&&L&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ae,xe,Be[0].width,Be[0].height,$.depth);for(let W=0,ne=Be.length;W<ne;W++)me=Be[W],b.format!==Yn?we!==null?st?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,me.width,me.height,$.depth,we,me.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,W,xe,me.width,me.height,$.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?t.texSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,me.width,me.height,$.depth,we,Re,me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,W,xe,me.width,me.height,$.depth,0,we,Re,me.data)}else{st&&L&&t.texStorage2D(s.TEXTURE_2D,ae,xe,Be[0].width,Be[0].height);for(let W=0,ne=Be.length;W<ne;W++)me=Be[W],b.format!==Yn?we!==null?st?t.compressedTexSubImage2D(s.TEXTURE_2D,W,0,0,me.width,me.height,we,me.data):t.compressedTexImage2D(s.TEXTURE_2D,W,xe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?t.texSubImage2D(s.TEXTURE_2D,W,0,0,me.width,me.height,we,Re,me.data):t.texImage2D(s.TEXTURE_2D,W,xe,me.width,me.height,0,we,Re,me.data)}else if(b.isDataArrayTexture)st?(L&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ae,xe,$.width,$.height,$.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,we,Re,$.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,xe,$.width,$.height,$.depth,0,we,Re,$.data);else if(b.isData3DTexture)st?(L&&t.texStorage3D(s.TEXTURE_3D,ae,xe,$.width,$.height,$.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,we,Re,$.data)):t.texImage3D(s.TEXTURE_3D,0,xe,$.width,$.height,$.depth,0,we,Re,$.data);else if(b.isFramebufferTexture){if(L)if(st)t.texStorage2D(s.TEXTURE_2D,ae,xe,$.width,$.height);else{let W=$.width,ne=$.height;for(let re=0;re<ae;re++)t.texImage2D(s.TEXTURE_2D,re,xe,W,ne,0,we,Re,null),W>>=1,ne>>=1}}else if(Be.length>0&&ve){st&&L&&t.texStorage2D(s.TEXTURE_2D,ae,xe,Be[0].width,Be[0].height);for(let W=0,ne=Be.length;W<ne;W++)me=Be[W],st?t.texSubImage2D(s.TEXTURE_2D,W,0,0,we,Re,me):t.texImage2D(s.TEXTURE_2D,W,xe,we,Re,me);b.generateMipmaps=!1}else st?(L&&t.texStorage2D(s.TEXTURE_2D,ae,xe,$.width,$.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,we,Re,$)):t.texImage2D(s.TEXTURE_2D,0,xe,we,Re,$);w(b,ve)&&A(Q),ye.__version=ie.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function dt(C,b,q){if(b.image.length!==6)return;const Q=Ce(C,b),te=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+q);const ie=n.get(te);if(te.version!==ie.__version||Q===!0){t.activeTexture(s.TEXTURE0+q),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const ye=b.isCompressedTexture||b.image[0].isCompressedTexture,oe=b.image[0]&&b.image[0].isDataTexture,$=[];for(let W=0;W<6;W++)!ye&&!oe?$[W]=x(b.image[W],!1,!0,c):$[W]=oe?b.image[W].image:b.image[W],$[W]=Mt(b,$[W]);const ve=$[0],we=v(ve)||a,Re=r.convert(b.format,b.colorSpace),xe=r.convert(b.type),me=P(b.internalFormat,Re,xe,b.colorSpace),Be=a&&b.isVideoTexture!==!0,st=ie.__version===void 0||Q===!0;let L=M(b,ve,we);de(s.TEXTURE_CUBE_MAP,b,we);let ae;if(ye){Be&&st&&t.texStorage2D(s.TEXTURE_CUBE_MAP,L,me,ve.width,ve.height);for(let W=0;W<6;W++){ae=$[W].mipmaps;for(let ne=0;ne<ae.length;ne++){const re=ae[ne];b.format!==Yn?Re!==null?Be?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne,0,0,re.width,re.height,Re,re.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne,me,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne,0,0,re.width,re.height,Re,xe,re.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne,me,re.width,re.height,0,Re,xe,re.data)}}}else{ae=b.mipmaps,Be&&st&&(ae.length>0&&L++,t.texStorage2D(s.TEXTURE_CUBE_MAP,L,me,$[0].width,$[0].height));for(let W=0;W<6;W++)if(oe){Be?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,$[W].width,$[W].height,Re,xe,$[W].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,me,$[W].width,$[W].height,0,Re,xe,$[W].data);for(let ne=0;ne<ae.length;ne++){const Ve=ae[ne].image[W].image;Be?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne+1,0,0,Ve.width,Ve.height,Re,xe,Ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne+1,me,Ve.width,Ve.height,0,Re,xe,Ve.data)}}else{Be?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Re,xe,$[W]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,me,Re,xe,$[W]);for(let ne=0;ne<ae.length;ne++){const re=ae[ne];Be?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne+1,0,0,Re,xe,re.image[W]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne+1,me,Re,xe,re.image[W])}}}w(b,we)&&A(s.TEXTURE_CUBE_MAP),ie.__version=te.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Oe(C,b,q,Q,te){const ie=r.convert(q.format,q.colorSpace),ye=r.convert(q.type),oe=P(q.internalFormat,ie,ye,q.colorSpace);n.get(b).__hasExternalTextures||(te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,0,oe,b.width,b.height,b.depth,0,ie,ye,null):t.texImage2D(te,0,oe,b.width,b.height,0,ie,ye,null)),t.bindFramebuffer(s.FRAMEBUFFER,C),rt(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,te,n.get(q).__webglTexture,0,Ue(b)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,te,n.get(q).__webglTexture,0),t.bindFramebuffer(s.FRAMEBUFFER,null)}function k(C,b,q){if(s.bindRenderbuffer(s.RENDERBUFFER,C),b.depthBuffer&&!b.stencilBuffer){let Q=s.DEPTH_COMPONENT16;if(q||rt(b)){const te=b.depthTexture;te&&te.isDepthTexture&&(te.type===Oi?Q=s.DEPTH_COMPONENT32F:te.type===or&&(Q=s.DEPTH_COMPONENT24));const ie=Ue(b);rt(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ie,Q,b.width,b.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,Q,b.width,b.height)}else s.renderbufferStorage(s.RENDERBUFFER,Q,b.width,b.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(b.depthBuffer&&b.stencilBuffer){const Q=Ue(b);q&&rt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,b.width,b.height):rt(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{const Q=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let te=0;te<Q.length;te++){const ie=Q[te],ye=r.convert(ie.format,ie.colorSpace),oe=r.convert(ie.type),$=P(ie.internalFormat,ye,oe,ie.colorSpace),ve=Ue(b);q&&rt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,$,b.width,b.height):rt(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,$,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,$,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function De(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),R(b.depthTexture,0);const Q=n.get(b.depthTexture).__webglTexture,te=Ue(b);if(b.depthTexture.format===qr)rt(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(b.depthTexture.format===Js)rt(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function pe(C){const b=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");De(b.__webglFramebuffer,C)}else if(q){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]=s.createRenderbuffer(),k(b.__webglDepthbuffer[Q],C,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),k(b.__webglDepthbuffer,C,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Pe(C,b,q){const Q=n.get(C);b!==void 0&&Oe(Q.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),q!==void 0&&pe(C)}function Ae(C){const b=C.texture,q=n.get(C),Q=n.get(b);C.addEventListener("dispose",B),C.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=b.version,o.memory.textures++);const te=C.isWebGLCubeRenderTarget===!0,ie=C.isWebGLMultipleRenderTargets===!0,ye=v(C)||a;if(te){q.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)q.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(q.__webglFramebuffer=s.createFramebuffer(),ie)if(i.drawBuffers){const oe=C.texture;for(let $=0,ve=oe.length;$<ve;$++){const we=n.get(oe[$]);we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&rt(C)===!1){const oe=ie?b:[b];q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let $=0;$<oe.length;$++){const ve=oe[$];q.__webglColorRenderbuffer[$]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[$]);const we=r.convert(ve.format,ve.colorSpace),Re=r.convert(ve.type),xe=P(ve.internalFormat,we,Re,ve.colorSpace,C.isXRRenderTarget===!0),me=Ue(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,me,xe,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.RENDERBUFFER,q.__webglColorRenderbuffer[$])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),k(q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(te){t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),de(s.TEXTURE_CUBE_MAP,b,ye);for(let oe=0;oe<6;oe++)Oe(q.__webglFramebuffer[oe],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe);w(b,ye)&&A(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const oe=C.texture;for(let $=0,ve=oe.length;$<ve;$++){const we=oe[$],Re=n.get(we);t.bindTexture(s.TEXTURE_2D,Re.__webglTexture),de(s.TEXTURE_2D,we,ye),Oe(q.__webglFramebuffer,C,we,s.COLOR_ATTACHMENT0+$,s.TEXTURE_2D),w(we,ye)&&A(s.TEXTURE_2D)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?oe=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,Q.__webglTexture),de(oe,b,ye),Oe(q.__webglFramebuffer,C,b,s.COLOR_ATTACHMENT0,oe),w(b,ye)&&A(oe),t.unbindTexture()}C.depthBuffer&&pe(C)}function V(C){const b=v(C)||a,q=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Q=0,te=q.length;Q<te;Q++){const ie=q[Q];if(w(ie,b)){const ye=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,oe=n.get(ie).__webglTexture;t.bindTexture(ye,oe),A(ye),t.unbindTexture()}}}function Ie(C){if(a&&C.samples>0&&rt(C)===!1){const b=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],q=C.width,Q=C.height;let te=s.COLOR_BUFFER_BIT;const ie=[],ye=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=n.get(C),$=C.isWebGLMultipleRenderTargets===!0;if($)for(let ve=0;ve<b.length;ve++)t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ve=0;ve<b.length;ve++){ie.push(s.COLOR_ATTACHMENT0+ve),C.depthBuffer&&ie.push(ye);const we=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(we===!1&&(C.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),$&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,oe.__webglColorRenderbuffer[ve]),we===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ye]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ye])),$){const Re=n.get(b[ve]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Re,0)}s.blitFramebuffer(0,0,q,Q,0,0,q,Q,te,s.NEAREST),d&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),$)for(let ve=0;ve<b.length;ve++){t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,oe.__webglColorRenderbuffer[ve]);const we=n.get(b[ve]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,we,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Ue(C){return Math.min(h,C.samples)}function rt(C){const b=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ye(C){const b=o.render.frame;g.get(C)!==b&&(g.set(C,b),C.update())}function Mt(C,b){const q=C.colorSpace,Q=C.format,te=C.type;return C.isCompressedTexture===!0||C.format===ru||q!==xi&&q!==Kr&&(q===ke?a===!1?e.has("EXT_sRGB")===!0&&Q===Yn?(C.format=ru,C.minFilter=yn,C.generateMipmaps=!1):b=dm.sRGBToLinear(b):(Q!==Yn||te!==hr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}this.allocateTextureUnit=Y,this.resetTextureUnits=F,this.setTexture2D=R,this.setTexture2DArray=le,this.setTexture3D=H,this.setTextureCube=ee,this.rebindTextures=Pe,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=rt}function TS(s,e,t){const n=t.isWebGL2;function i(r,o=Kr){let a;if(r===hr)return s.UNSIGNED_BYTE;if(r===nm)return s.UNSIGNED_SHORT_4_4_4_4;if(r===im)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Yg)return s.BYTE;if(r===qg)return s.SHORT;if(r===Nu)return s.UNSIGNED_SHORT;if(r===tm)return s.INT;if(r===or)return s.UNSIGNED_INT;if(r===Oi)return s.FLOAT;if(r===$o)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===jg)return s.ALPHA;if(r===Yn)return s.RGBA;if(r===Kg)return s.LUMINANCE;if(r===$g)return s.LUMINANCE_ALPHA;if(r===qr)return s.DEPTH_COMPONENT;if(r===Js)return s.DEPTH_STENCIL;if(r===ru)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Zg)return s.RED;if(r===rm)return s.RED_INTEGER;if(r===Jg)return s.RG;if(r===sm)return s.RG_INTEGER;if(r===om)return s.RGBA_INTEGER;if(r===Wl||r===Xl||r===Yl||r===ql)if(o===ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Wl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ql)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Wl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ql)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zh||r===Hh||r===Gh||r===Vh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===zh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Hh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Vh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Qg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Wh||r===Xh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Wh)return o===ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Xh)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Yh||r===qh||r===jh||r===Kh||r===$h||r===Zh||r===Jh||r===Qh||r===ef||r===tf||r===nf||r===rf||r===sf||r===of)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Yh)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qh)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===jh)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Kh)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===$h)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Zh)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Jh)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Qh)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ef)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===tf)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===nf)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===rf)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===sf)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===of)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===jl)return o===ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===e0||r===af||r===lf||r===cf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===jl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===af)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===lf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===cf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Yr?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class ES extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Br extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bS={type:"move"};class gc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Br;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class AS extends Kt{constructor(e,t,n,i,r,o,a,l,c,u){if(u=u!==void 0?u:qr,u!==qr&&u!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===qr&&(n=or),n===void 0&&u===Js&&(n=Yr),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wS extends ro{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const y=[],x=[];let v=null;const S=new fn;S.layers.enable(1),S.viewport=new gt;const w=new fn;w.layers.enable(2),w.viewport=new gt;const A=[S,w],P=new ES;P.layers.enable(1),P.layers.enable(2);let M=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(H){v=H},this.getController=function(H){let ee=y[H];return ee===void 0&&(ee=new gc,y[H]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(H){let ee=y[H];return ee===void 0&&(ee=new gc,y[H]=ee),ee.getGripSpace()},this.getHand=function(H){let ee=y[H];return ee===void 0&&(ee=new gc,y[H]=ee),ee.getHandSpace()};function G(H){const ee=x.indexOf(H.inputSource);if(ee===-1)return;const J=y[ee];J!==void 0&&(J.update(H.inputSource,H.frame,c||o),J.dispatchEvent({type:H.type,data:H.inputSource}))}function B(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",D);for(let H=0;H<y.length;H++){const ee=x[H];ee!==null&&(x[H]=null,y[H].disconnect(ee))}M=null,T=null,e.setRenderTarget(m),d=null,f=null,h=null,i=null,p=null,le.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",B),i.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:d}),p=new ts(d.framebufferWidth,d.framebufferHeight,{format:Yn,type:hr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ee=null,J=null,se=null;_.depth&&(se=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=_.stencil?Js:qr,J=_.stencil?Yr:or);const ce={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(ce),i.updateRenderState({layers:[f]}),p=new ts(f.textureWidth,f.textureHeight,{format:Yn,type:hr,depthTexture:new AS(f.textureWidth,f.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const de=e.properties.get(p);de.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),le.setContext(i),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(H){for(let ee=0;ee<H.removed.length;ee++){const J=H.removed[ee],se=x.indexOf(J);se>=0&&(x[se]=null,y[se].disconnect(J))}for(let ee=0;ee<H.added.length;ee++){const J=H.added[ee];let se=x.indexOf(J);if(se===-1){for(let de=0;de<y.length;de++)if(de>=x.length){x.push(J),se=de;break}else if(x[de]===null){x[de]=J,se=de;break}if(se===-1)break}const ce=y[se];ce&&ce.connect(J)}}const O=new U,N=new U;function K(H,ee,J){O.setFromMatrixPosition(ee.matrixWorld),N.setFromMatrixPosition(J.matrixWorld);const se=O.distanceTo(N),ce=ee.projectionMatrix.elements,de=J.projectionMatrix.elements,Ce=ce[14]/(ce[10]-1),Te=ce[14]/(ce[10]+1),dt=(ce[9]+1)/ce[5],Oe=(ce[9]-1)/ce[5],k=(ce[8]-1)/ce[0],De=(de[8]+1)/de[0],pe=Ce*k,Pe=Ce*De,Ae=se/(-k+De),V=Ae*-k;ee.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(V),H.translateZ(Ae),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const Ie=Ce+Ae,Ue=Te+Ae,rt=pe-V,Ye=Pe+(se-V),Mt=dt*Te/Ue*Ie,C=Oe*Te/Ue*Ie;H.projectionMatrix.makePerspective(rt,Ye,Mt,C,Ie,Ue),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function F(H,ee){ee===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ee.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCameraXR=function(H){if(i===null)return H;v&&(H=v),P.near=w.near=S.near=H.near,P.far=w.far=S.far=H.far,(M!==P.near||T!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),M=P.near,T=P.far);const ee=H.parent,J=P.cameras;F(P,ee);for(let se=0;se<J.length;se++)F(J[se],ee);return J.length===2?K(P,S,w):P.projectionMatrix.copy(S.projectionMatrix),v&&Y(P,ee),P};function Y(H,ee){const J=v;ee===null?J.matrix.copy(H.matrixWorld):(J.matrix.copy(ee.matrixWorld),J.matrix.invert(),J.matrix.multiply(H.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0);const se=J.children;for(let ce=0,de=se.length;ce<de;ce++)se[ce].updateMatrixWorld(!0);J.projectionMatrix.copy(H.projectionMatrix),J.projectionMatrixInverse.copy(H.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=eo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)};let Z=null;function R(H,ee){if(u=ee.getViewerPose(c||o),g=ee,u!==null){const J=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let se=!1;J.length!==P.cameras.length&&(P.cameras.length=0,se=!0);for(let ce=0;ce<J.length;ce++){const de=J[ce];let Ce=null;if(d!==null)Ce=d.getViewport(de);else{const dt=h.getViewSubImage(f,de);Ce=dt.viewport,ce===0&&(e.setRenderTargetTextures(p,dt.colorTexture,f.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(p))}let Te=A[ce];Te===void 0&&(Te=new fn,Te.layers.enable(ce),Te.viewport=new gt,A[ce]=Te),Te.matrix.fromArray(de.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(de.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),ce===0&&(P.matrix.copy(Te.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),se===!0&&P.cameras.push(Te)}}for(let J=0;J<y.length;J++){const se=x[J],ce=y[J];se!==null&&ce!==void 0&&ce.update(se,ee,c||o)}Z&&Z(H,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const le=new Tm;le.setAnimationLoop(R),this.setAnimationLoop=function(H){Z=H},this.dispose=function(){}}}function RS(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Mm(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===bn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===bn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=s.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===bn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function CS(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function c(y,x){let v=i[y.id];v===void 0&&(g(y),v=u(y),i[y.id]=v,y.addEventListener("dispose",m));const S=x.program;n.updateUBOMapping(y,S);const w=e.render.frame;r[y.id]!==w&&(f(y),r[y.id]=w)}function u(y){const x=h();y.__bindingPointIndex=x;const v=s.createBuffer(),S=y.__size,w=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,S,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,v),v}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=i[y.id],v=y.uniforms,S=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let w=0,A=v.length;w<A;w++){const P=v[w];if(d(P,w,S)===!0){const M=P.__offset,T=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let B=0;B<T.length;B++){const D=T[B],O=_(D);typeof D=="number"?(P.__data[0]=D,s.bufferSubData(s.UNIFORM_BUFFER,M+G,P.__data)):D.isMatrix3?(P.__data[0]=D.elements[0],P.__data[1]=D.elements[1],P.__data[2]=D.elements[2],P.__data[3]=D.elements[0],P.__data[4]=D.elements[3],P.__data[5]=D.elements[4],P.__data[6]=D.elements[5],P.__data[7]=D.elements[0],P.__data[8]=D.elements[6],P.__data[9]=D.elements[7],P.__data[10]=D.elements[8],P.__data[11]=D.elements[0]):(D.toArray(P.__data,G),G+=O.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,M,P.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,x,v){const S=y.value;if(v[x]===void 0){if(typeof S=="number")v[x]=S;else{const w=Array.isArray(S)?S:[S],A=[];for(let P=0;P<w.length;P++)A.push(w[P].clone());v[x]=A}return!0}else if(typeof S=="number"){if(v[x]!==S)return v[x]=S,!0}else{const w=Array.isArray(v[x])?v[x]:[v[x]],A=Array.isArray(S)?S:[S];for(let P=0;P<w.length;P++){const M=w[P];if(M.equals(A[P])===!1)return M.copy(A[P]),!0}}return!1}function g(y){const x=y.uniforms;let v=0;const S=16;let w=0;for(let A=0,P=x.length;A<P;A++){const M=x[A],T={boundary:0,storage:0},G=Array.isArray(M.value)?M.value:[M.value];for(let B=0,D=G.length;B<D;B++){const O=G[B],N=_(O);T.boundary+=N.boundary,T.storage+=N.storage}if(M.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=v,A>0){w=v%S;const B=S-w;w!==0&&B-T.boundary<0&&(v+=S-w,M.__offset=v)}v+=T.storage}return w=v%S,w>0&&(v+=S-w),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}function PS(){const s=Jo("canvas");return s.style.display="block",s}class Rm{constructor(e={}){const{canvas:t=PS(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ke,this.useLegacyLights=!0,this.toneMapping=zi,this.toneMappingExposure=1;const x=this;let v=!1,S=0,w=0,A=null,P=-1,M=null;const T=new gt,G=new gt;let B=null;const D=new Xe(0);let O=0,N=t.width,K=t.height,F=1,Y=null,Z=null;const R=new gt(0,0,N,K),le=new gt(0,0,N,K);let H=!1;const ee=new Fu;let J=!1,se=!1,ce=null;const de=new Je,Ce=new lt,Te=new U,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return A===null?F:1}let k=n;function De(E,z){for(let X=0;X<E.length;X++){const I=E[X],j=t.getContext(I,z);if(j!==null)return j}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uu}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",W,!1),t.addEventListener("webglcontextcreationerror",ne,!1),k===null){const z=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&z.shift(),k=De(z,E),k===null)throw De(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let pe,Pe,Ae,V,Ie,Ue,rt,Ye,Mt,C,b,q,Q,te,ie,ye,oe,$,ve,we,Re,xe,me,Be;function st(){pe=new HM(k),Pe=new NM(k,pe,e),pe.init(Pe),xe=new TS(k,pe,Pe),Ae=new yS(k,pe,Pe),V=new WM(k),Ie=new aS,Ue=new SS(k,pe,Ae,Ie,Pe,xe,V),rt=new FM(x),Ye=new zM(x),Mt=new nx(k,Pe),me=new IM(k,pe,Mt,Pe),C=new GM(k,Mt,V,me),b=new jM(k,C,Mt,V),ve=new qM(k,Pe,Ue),ye=new OM(Ie),q=new oS(x,rt,Ye,pe,Pe,me,ye),Q=new RS(x,Ie),te=new cS,ie=new mS(pe,Pe),$=new DM(x,rt,Ye,Ae,b,f,l),oe=new MS(x,b,Pe),Be=new CS(k,V,Pe,Ae),we=new UM(k,pe,V,Pe),Re=new VM(k,pe,V,Pe),V.programs=q.programs,x.capabilities=Pe,x.extensions=pe,x.properties=Ie,x.renderLists=te,x.shadowMap=oe,x.state=Ae,x.info=V}st();const L=new wS(x,k);this.xr=L,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const E=pe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=pe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(E){E!==void 0&&(F=E,this.setSize(N,K,!1))},this.getSize=function(E){return E.set(N,K)},this.setSize=function(E,z,X=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,K=z,t.width=Math.floor(E*F),t.height=Math.floor(z*F),X===!0&&(t.style.width=E+"px",t.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(N*F,K*F).floor()},this.setDrawingBufferSize=function(E,z,X){N=E,K=z,F=X,t.width=Math.floor(E*X),t.height=Math.floor(z*X),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(R)},this.setViewport=function(E,z,X,I){E.isVector4?R.set(E.x,E.y,E.z,E.w):R.set(E,z,X,I),Ae.viewport(T.copy(R).multiplyScalar(F).floor())},this.getScissor=function(E){return E.copy(le)},this.setScissor=function(E,z,X,I){E.isVector4?le.set(E.x,E.y,E.z,E.w):le.set(E,z,X,I),Ae.scissor(G.copy(le).multiplyScalar(F).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(E){Ae.setScissorTest(H=E)},this.setOpaqueSort=function(E){Y=E},this.setTransparentSort=function(E){Z=E},this.getClearColor=function(E){return E.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(E=!0,z=!0,X=!0){let I=0;if(E){let j=!1;if(A!==null){const ue=A.texture.format;j=ue===om||ue===sm||ue===rm}if(j){const ue=A.texture.type,ge=ue===hr||ue===or||ue===Nu||ue===Yr||ue===nm||ue===im,Se=$.getClearColor(),Le=$.getClearAlpha(),Ge=Se.r,be=Se.g,Ee=Se.b,nt=Ie.get(A).__webglFramebuffer;ge?(d[0]=Ge,d[1]=be,d[2]=Ee,d[3]=Le,k.clearBufferuiv(k.COLOR,nt,d)):(g[0]=Ge,g[1]=be,g[2]=Ee,g[3]=Le,k.clearBufferiv(k.COLOR,nt,g))}else I|=k.COLOR_BUFFER_BIT}z&&(I|=k.DEPTH_BUFFER_BIT),X&&(I|=k.STENCIL_BUFFER_BIT),k.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",W,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),te.dispose(),ie.dispose(),Ie.dispose(),rt.dispose(),Ye.dispose(),b.dispose(),me.dispose(),Be.dispose(),q.dispose(),L.dispose(),L.removeEventListener("sessionstart",fe),L.removeEventListener("sessionend",ze),ce&&(ce.dispose(),ce=null),je.stop()};function ae(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const E=V.autoReset,z=oe.enabled,X=oe.autoUpdate,I=oe.needsUpdate,j=oe.type;st(),V.autoReset=E,oe.enabled=z,oe.autoUpdate=X,oe.needsUpdate=I,oe.type=j}function ne(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function re(E){const z=E.target;z.removeEventListener("dispose",re),Ve(z)}function Ve(E){ht(E),Ie.remove(E)}function ht(E){const z=Ie.get(E).programs;z!==void 0&&(z.forEach(function(X){q.releaseProgram(X)}),E.isShaderMaterial&&q.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,X,I,j,ue){z===null&&(z=dt);const ge=j.isMesh&&j.matrixWorld.determinant()<0,Se=Xt(E,z,X,I,j);Ae.setMaterial(I,ge);let Le=X.index,Ge=1;I.wireframe===!0&&(Le=C.getWireframeAttribute(X),Ge=2);const be=X.drawRange,Ee=X.attributes.position;let nt=be.start*Ge,vt=(be.start+be.count)*Ge;ue!==null&&(nt=Math.max(nt,ue.start*Ge),vt=Math.min(vt,(ue.start+ue.count)*Ge)),Le!==null?(nt=Math.max(nt,0),vt=Math.min(vt,Le.count)):Ee!=null&&(nt=Math.max(nt,0),vt=Math.min(vt,Ee.count));const xn=vt-nt;if(xn<0||xn===1/0)return;me.setup(j,I,Se,X,Le);let rn,ct=we;if(Le!==null&&(rn=Mt.get(Le),ct=Re,ct.setIndex(rn)),j.isMesh)I.wireframe===!0?(Ae.setLineWidth(I.wireframeLinewidth*Oe()),ct.setMode(k.LINES)):ct.setMode(k.TRIANGLES);else if(j.isLine){let We=I.linewidth;We===void 0&&(We=1),Ae.setLineWidth(We*Oe()),j.isLineSegments?ct.setMode(k.LINES):j.isLineLoop?ct.setMode(k.LINE_LOOP):ct.setMode(k.LINE_STRIP)}else j.isPoints?ct.setMode(k.POINTS):j.isSprite&&ct.setMode(k.TRIANGLES);if(j.isInstancedMesh)ct.renderInstances(nt,xn,j.count);else if(X.isInstancedBufferGeometry){const We=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Yi=Math.min(X.instanceCount,We);ct.renderInstances(nt,xn,Yi)}else ct.render(nt,xn)},this.compile=function(E,z){function X(I,j,ue){I.transparent===!0&&I.side===hi&&I.forceSinglePass===!1?(I.side=bn,I.needsUpdate=!0,Ke(I,j,ue),I.side=Wi,I.needsUpdate=!0,Ke(I,j,ue),I.side=hi):Ke(I,j,ue)}m=ie.get(E),m.init(),y.push(m),E.traverseVisible(function(I){I.isLight&&I.layers.test(z.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),m.setupLights(x.useLegacyLights),E.traverse(function(I){const j=I.material;if(j)if(Array.isArray(j))for(let ue=0;ue<j.length;ue++){const ge=j[ue];X(ge,E,I)}else X(j,E,I)}),y.pop(),m=null};let ut=null;function Ne(E){ut&&ut(E)}function fe(){je.stop()}function ze(){je.start()}const je=new Tm;je.setAnimationLoop(Ne),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(E){ut=E,L.setAnimationLoop(E),E===null?je.stop():je.start()},L.addEventListener("sessionstart",fe),L.addEventListener("sessionend",ze),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(z=L.updateCameraXR(z)),E.isScene===!0&&E.onBeforeRender(x,E,z,A),m=ie.get(E,y.length),m.init(),y.push(m),de.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ee.setFromProjectionMatrix(de),se=this.localClippingEnabled,J=ye.init(this.clippingPlanes,se),_=te.get(E,p.length),_.init(),p.push(_),_e(E,z,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(Y,Z),J===!0&&ye.beginShadows();const X=m.state.shadowsArray;if(oe.render(X,E,z),J===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,$.render(_,E),m.setupLights(x.useLegacyLights),z.isArrayCamera){const I=z.cameras;for(let j=0,ue=I.length;j<ue;j++){const ge=I[j];Qe(_,E,ge,ge.viewport)}}else Qe(_,E,z);A!==null&&(Ue.updateMultisampleRenderTarget(A),Ue.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(x,E,z),me.resetDefaultState(),P=-1,M=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function _e(E,z,X,I){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ee.intersectsSprite(E)){I&&Te.setFromMatrixPosition(E.matrixWorld).applyMatrix4(de);const ge=b.update(E),Se=E.material;Se.visible&&_.push(E,ge,Se,X,Te.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ee.intersectsObject(E))){E.isSkinnedMesh&&E.skeleton.frame!==V.render.frame&&(E.skeleton.update(),E.skeleton.frame=V.render.frame);const ge=b.update(E),Se=E.material;if(I&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Te.copy(E.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Te.copy(ge.boundingSphere.center)),Te.applyMatrix4(E.matrixWorld).applyMatrix4(de)),Array.isArray(Se)){const Le=ge.groups;for(let Ge=0,be=Le.length;Ge<be;Ge++){const Ee=Le[Ge],nt=Se[Ee.materialIndex];nt&&nt.visible&&_.push(E,ge,nt,X,Te.z,Ee)}}else Se.visible&&_.push(E,ge,Se,X,Te.z,null)}}const ue=E.children;for(let ge=0,Se=ue.length;ge<Se;ge++)_e(ue[ge],z,X,I)}function Qe(E,z,X,I){const j=E.opaque,ue=E.transmissive,ge=E.transparent;m.setupLightsView(X),J===!0&&ye.setGlobalState(x.clippingPlanes,X),ue.length>0&&Fe(j,ue,z,X),I&&Ae.viewport(T.copy(I)),j.length>0&&He(j,z,X),ue.length>0&&He(ue,z,X),ge.length>0&&He(ge,z,X),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Fe(E,z,X,I){const j=Pe.isWebGL2;ce===null&&(ce=new ts(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?$o:hr,minFilter:es,samples:j&&a===!0?4:0})),x.getDrawingBufferSize(Ce),j?ce.setSize(Ce.x,Ce.y):ce.setSize(ml(Ce.x),ml(Ce.y));const ue=x.getRenderTarget();x.setRenderTarget(ce),x.getClearColor(D),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear();const ge=x.toneMapping;x.toneMapping=zi,He(E,X,I),Ue.updateMultisampleRenderTarget(ce),Ue.updateRenderTargetMipmap(ce);let Se=!1;for(let Le=0,Ge=z.length;Le<Ge;Le++){const be=z[Le],Ee=be.object,nt=be.geometry,vt=be.material,xn=be.group;if(vt.side===hi&&Ee.layers.test(I.layers)){const rn=vt.side;vt.side=bn,vt.needsUpdate=!0,Pt(Ee,X,I,nt,vt,xn),vt.side=rn,vt.needsUpdate=!0,Se=!0}}Se===!0&&(Ue.updateMultisampleRenderTarget(ce),Ue.updateRenderTargetMipmap(ce)),x.setRenderTarget(ue),x.setClearColor(D,O),x.toneMapping=ge}function He(E,z,X){const I=z.isScene===!0?z.overrideMaterial:null;for(let j=0,ue=E.length;j<ue;j++){const ge=E[j],Se=ge.object,Le=ge.geometry,Ge=I===null?ge.material:I,be=ge.group;Se.layers.test(X.layers)&&Pt(Se,z,X,Le,Ge,be)}}function Pt(E,z,X,I,j,ue){E.onBeforeRender(x,z,X,I,j,ue),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(x,z,X,I,E,ue),j.transparent===!0&&j.side===hi&&j.forceSinglePass===!1?(j.side=bn,j.needsUpdate=!0,x.renderBufferDirect(X,z,I,j,E,ue),j.side=Wi,j.needsUpdate=!0,x.renderBufferDirect(X,z,I,j,E,ue),j.side=hi):x.renderBufferDirect(X,z,I,j,E,ue),E.onAfterRender(x,z,X,I,j,ue)}function Ke(E,z,X){z.isScene!==!0&&(z=dt);const I=Ie.get(E),j=m.state.lights,ue=m.state.shadowsArray,ge=j.state.version,Se=q.getParameters(E,j.state,ue,z,X),Le=q.getProgramCacheKey(Se);let Ge=I.programs;I.environment=E.isMeshStandardMaterial?z.environment:null,I.fog=z.fog,I.envMap=(E.isMeshStandardMaterial?Ye:rt).get(E.envMap||I.environment),Ge===void 0&&(E.addEventListener("dispose",re),Ge=new Map,I.programs=Ge);let be=Ge.get(Le);if(be!==void 0){if(I.currentProgram===be&&I.lightsStateVersion===ge)return yt(E,Se),be}else Se.uniforms=q.getUniforms(E),E.onBuild(X,Se,x),E.onBeforeCompile(Se,x),be=q.acquireProgram(Se,Le),Ge.set(Le,be),I.uniforms=Se.uniforms;const Ee=I.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ee.clippingPlanes=ye.uniform),yt(E,Se),I.needsLights=xt(E),I.lightsStateVersion=ge,I.needsLights&&(Ee.ambientLightColor.value=j.state.ambient,Ee.lightProbe.value=j.state.probe,Ee.directionalLights.value=j.state.directional,Ee.directionalLightShadows.value=j.state.directionalShadow,Ee.spotLights.value=j.state.spot,Ee.spotLightShadows.value=j.state.spotShadow,Ee.rectAreaLights.value=j.state.rectArea,Ee.ltc_1.value=j.state.rectAreaLTC1,Ee.ltc_2.value=j.state.rectAreaLTC2,Ee.pointLights.value=j.state.point,Ee.pointLightShadows.value=j.state.pointShadow,Ee.hemisphereLights.value=j.state.hemi,Ee.directionalShadowMap.value=j.state.directionalShadowMap,Ee.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ee.spotShadowMap.value=j.state.spotShadowMap,Ee.spotLightMatrix.value=j.state.spotLightMatrix,Ee.spotLightMap.value=j.state.spotLightMap,Ee.pointShadowMap.value=j.state.pointShadowMap,Ee.pointShadowMatrix.value=j.state.pointShadowMatrix);const nt=be.getUniforms(),vt=el.seqWithValue(nt.seq,Ee);return I.currentProgram=be,I.uniformsList=vt,be}function yt(E,z){const X=Ie.get(E);X.outputColorSpace=z.outputColorSpace,X.instancing=z.instancing,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function Xt(E,z,X,I,j){z.isScene!==!0&&(z=dt),Ue.resetTextureUnits();const ue=z.fog,ge=I.isMeshStandardMaterial?z.environment:null,Se=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:xi,Le=(I.isMeshStandardMaterial?Ye:rt).get(I.envMap||ge),Ge=I.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,be=!!X.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),Ee=!!X.morphAttributes.position,nt=!!X.morphAttributes.normal,vt=!!X.morphAttributes.color,xn=I.toneMapped?x.toneMapping:zi,rn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ct=rn!==void 0?rn.length:0,We=Ie.get(I),Yi=m.state.lights;if(J===!0&&(se===!0||E!==M)){const Rn=E===M&&I.id===P;ye.setState(I,E,Rn)}let St=!1;I.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Yi.state.version||We.outputColorSpace!==Se||j.isInstancedMesh&&We.instancing===!1||!j.isInstancedMesh&&We.instancing===!0||j.isSkinnedMesh&&We.skinning===!1||!j.isSkinnedMesh&&We.skinning===!0||We.envMap!==Le||I.fog===!0&&We.fog!==ue||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ye.numPlanes||We.numIntersection!==ye.numIntersection)||We.vertexAlphas!==Ge||We.vertexTangents!==be||We.morphTargets!==Ee||We.morphNormals!==nt||We.morphColors!==vt||We.toneMapping!==xn||Pe.isWebGL2===!0&&We.morphTargetsCount!==ct)&&(St=!0):(St=!0,We.__version=I.version);let vr=We.currentProgram;St===!0&&(vr=Ke(I,z,j));let Zu=!1,co=!1,bl=!1;const sn=vr.getUniforms(),Mr=We.uniforms;if(Ae.useProgram(vr.program)&&(Zu=!0,co=!0,bl=!0),I.id!==P&&(P=I.id,co=!0),Zu||M!==E){if(sn.setValue(k,"projectionMatrix",E.projectionMatrix),Pe.logarithmicDepthBuffer&&sn.setValue(k,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),M!==E&&(M=E,co=!0,bl=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const Rn=sn.map.cameraPosition;Rn!==void 0&&Rn.setValue(k,Te.setFromMatrixPosition(E.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&sn.setValue(k,"isOrthographic",E.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||j.isSkinnedMesh)&&sn.setValue(k,"viewMatrix",E.matrixWorldInverse)}if(j.isSkinnedMesh){sn.setOptional(k,j,"bindMatrix"),sn.setOptional(k,j,"bindMatrixInverse");const Rn=j.skeleton;Rn&&(Pe.floatVertexTextures?(Rn.boneTexture===null&&Rn.computeBoneTexture(),sn.setValue(k,"boneTexture",Rn.boneTexture,Ue),sn.setValue(k,"boneTextureSize",Rn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Al=X.morphAttributes;if((Al.position!==void 0||Al.normal!==void 0||Al.color!==void 0&&Pe.isWebGL2===!0)&&ve.update(j,X,vr),(co||We.receiveShadow!==j.receiveShadow)&&(We.receiveShadow=j.receiveShadow,sn.setValue(k,"receiveShadow",j.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(Mr.envMap.value=Le,Mr.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),co&&(sn.setValue(k,"toneMappingExposure",x.toneMappingExposure),We.needsLights&&Ot(Mr,bl),ue&&I.fog===!0&&Q.refreshFogUniforms(Mr,ue),Q.refreshMaterialUniforms(Mr,I,F,K,ce),el.upload(k,We.uniformsList,Mr,Ue)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(el.upload(k,We.uniformsList,Mr,Ue),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&sn.setValue(k,"center",j.center),sn.setValue(k,"modelViewMatrix",j.modelViewMatrix),sn.setValue(k,"normalMatrix",j.normalMatrix),sn.setValue(k,"modelMatrix",j.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const Rn=I.uniformsGroups;for(let wl=0,km=Rn.length;wl<km;wl++)if(Pe.isWebGL2){const Ju=Rn[wl];Be.update(Ju,vr),Be.bind(Ju,vr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vr}function Ot(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function xt(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,z,X){Ie.get(E.texture).__webglTexture=z,Ie.get(E.depthTexture).__webglTexture=X;const I=Ie.get(E);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=X===void 0,I.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,z){const X=Ie.get(E);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,X=0){A=E,S=z,w=X;let I=!0,j=null,ue=!1,ge=!1;if(E){const Le=Ie.get(E);Le.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(k.FRAMEBUFFER,null),I=!1):Le.__webglFramebuffer===void 0?Ue.setupRenderTarget(E):Le.__hasExternalTextures&&Ue.rebindTextures(E,Ie.get(E.texture).__webglTexture,Ie.get(E.depthTexture).__webglTexture);const Ge=E.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(ge=!0);const be=Ie.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(j=be[z],ue=!0):Pe.isWebGL2&&E.samples>0&&Ue.useMultisampledRTT(E)===!1?j=Ie.get(E).__webglMultisampledFramebuffer:j=be,T.copy(E.viewport),G.copy(E.scissor),B=E.scissorTest}else T.copy(R).multiplyScalar(F).floor(),G.copy(le).multiplyScalar(F).floor(),B=H;if(Ae.bindFramebuffer(k.FRAMEBUFFER,j)&&Pe.drawBuffers&&I&&Ae.drawBuffers(E,j),Ae.viewport(T),Ae.scissor(G),Ae.setScissorTest(B),ue){const Le=Ie.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+z,Le.__webglTexture,X)}else if(ge){const Le=Ie.get(E.texture),Ge=z||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Le.__webglTexture,X||0,Ge)}P=-1},this.readRenderTargetPixels=function(E,z,X,I,j,ue,ge){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ie.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){Ae.bindFramebuffer(k.FRAMEBUFFER,Se);try{const Le=E.texture,Ge=Le.format,be=Le.type;if(Ge!==Yn&&xe.convert(Ge)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ee=be===$o&&(pe.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&pe.has("EXT_color_buffer_float"));if(be!==hr&&xe.convert(be)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(be===Oi&&(Pe.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!Ee){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-I&&X>=0&&X<=E.height-j&&k.readPixels(z,X,I,j,xe.convert(Ge),xe.convert(be),ue)}finally{const Le=A!==null?Ie.get(A).__webglFramebuffer:null;Ae.bindFramebuffer(k.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(E,z,X=0){const I=Math.pow(2,-X),j=Math.floor(z.image.width*I),ue=Math.floor(z.image.height*I);Ue.setTexture2D(z,0),k.copyTexSubImage2D(k.TEXTURE_2D,X,0,0,E.x,E.y,j,ue),Ae.unbindTexture()},this.copyTextureToTexture=function(E,z,X,I=0){const j=z.image.width,ue=z.image.height,ge=xe.convert(X.format),Se=xe.convert(X.type);Ue.setTexture2D(X,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment),z.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,I,E.x,E.y,j,ue,ge,Se,z.image.data):z.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,I,E.x,E.y,z.mipmaps[0].width,z.mipmaps[0].height,ge,z.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,I,E.x,E.y,ge,Se,z.image),I===0&&X.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(E,z,X,I,j=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=E.max.x-E.min.x+1,ge=E.max.y-E.min.y+1,Se=E.max.z-E.min.z+1,Le=xe.convert(I.format),Ge=xe.convert(I.type);let be;if(I.isData3DTexture)Ue.setTexture3D(I,0),be=k.TEXTURE_3D;else if(I.isDataArrayTexture)Ue.setTexture2DArray(I,0),be=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,I.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,I.unpackAlignment);const Ee=k.getParameter(k.UNPACK_ROW_LENGTH),nt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),vt=k.getParameter(k.UNPACK_SKIP_PIXELS),xn=k.getParameter(k.UNPACK_SKIP_ROWS),rn=k.getParameter(k.UNPACK_SKIP_IMAGES),ct=X.isCompressedTexture?X.mipmaps[0]:X.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ct.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ct.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,E.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,E.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,E.min.z),X.isDataTexture||X.isData3DTexture?k.texSubImage3D(be,j,z.x,z.y,z.z,ue,ge,Se,Le,Ge,ct.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(be,j,z.x,z.y,z.z,ue,ge,Se,Le,ct.data)):k.texSubImage3D(be,j,z.x,z.y,z.z,ue,ge,Se,Le,Ge,ct),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ee),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,nt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,vt),k.pixelStorei(k.UNPACK_SKIP_ROWS,xn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,rn),j===0&&I.generateMipmaps&&k.generateMipmap(be),Ae.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Ue.setTextureCube(E,0):E.isData3DTexture?Ue.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ue.setTexture2DArray(E,0):Ue.setTexture2D(E,0),Ae.unbindTexture()},this.resetState=function(){S=0,w=0,A=null,Ae.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ke?jr:lm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===jr?ke:xi}}class LS extends Rm{}LS.prototype.isWebGL1Renderer=!0;class DS extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class IS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=iu,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const an=new U;class Hu{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new gn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Hu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Jf=new U,Qf=new gt,ed=new gt,US=new U,td=new Je,Es=new U,xc=new vi,nd=new Je,vc=new yl;class NS extends _n{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Es.fromBufferAttribute(t,n),this.applyBoneTransform(n,Es),this.boundingBox.expandByPoint(Es)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Es.fromBufferAttribute(t,n),this.applyBoneTransform(n,Es),this.boundingSphere.expandByPoint(Es)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xc.copy(this.boundingSphere),xc.applyMatrix4(i),e.ray.intersectsSphere(xc)!==!1&&(nd.copy(i).invert(),vc.copy(e.ray).applyMatrix4(nd),!(this.boundingBox!==null&&vc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,vc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new gt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Qf.fromBufferAttribute(i.attributes.skinIndex,e),ed.fromBufferAttribute(i.attributes.skinWeight,e),Jf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=ed.getComponent(r);if(o!==0){const a=Qf.getComponent(r);td.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(US.copy(Jf).applyMatrix4(td),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Cm extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class OS extends Kt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Vt,u=Vt,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const id=new Je,FS=new Je;class Gu{constructor(e=[],t=[]){this.uuid=ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:FS;id.multiplyMatrices(a,t[r]),id.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Gu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=hm(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new OS(t,e,e,Yn,Oi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Cm),this.bones.push(o),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class rd extends gn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const bs=new Je,sd=new Je,Ba=[],od=new Xi,BS=new Je,xo=new _n,vo=new vi;class kS extends _n{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rd(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,BS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),od.copy(e.boundingBox).applyMatrix4(bs),this.boundingBox.union(od)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),vo.copy(e.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(vo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(xo.geometry=this.geometry,xo.material=this.material,xo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vo.copy(this.boundingSphere),vo.applyMatrix4(n),e.ray.intersectsSphere(vo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,bs),sd.multiplyMatrices(n,bs),xo.matrixWorld=sd,xo.raycast(e,Ba);for(let o=0,a=Ba.length;o<a;o++){const l=Ba[o];l.instanceId=r,l.object=this,t.push(l)}Ba.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new rd(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Pm extends _i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ad=new U,ld=new U,cd=new Je,Mc=new yl,ka=new vi;class Vu extends wt{constructor(e=new Mi,t=new Pm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ad.fromBufferAttribute(t,i-1),ld.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ad.distanceTo(ld);e.setAttribute("lineDistance",new Hi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(i),ka.radius+=r,e.ray.intersectsSphere(ka)===!1)return;cd.copy(i).invert(),Mc.copy(e.ray).applyMatrix4(cd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new U,u=new U,h=new U,f=new U,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let x=p,v=y-1;x<v;x+=d){const S=g.getX(x),w=g.getX(x+1);if(c.fromBufferAttribute(m,S),u.fromBufferAttribute(m,w),Mc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let x=p,v=y-1;x<v;x+=d){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),Mc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const ud=new U,hd=new U;class zS extends Vu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ud.fromBufferAttribute(t,i),hd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ud.distanceTo(hd);e.setAttribute("lineDistance",new Hi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class HS extends Vu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Lm extends _i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fd=new Je,au=new yl,za=new vi,Ha=new U;class GS extends wt{constructor(e=new Mi,t=new Lm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(i),za.radius+=r,e.ray.intersectsSphere(za)===!1)return;fd.copy(i).invert(),au.copy(e.ray).applyMatrix4(fd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Ha.fromBufferAttribute(h,m),dd(Ha,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Ha.fromBufferAttribute(h,g),dd(Ha,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function dd(s,e,t,n,i,r,o){const a=au.distanceSqToPoint(s);if(a<t){const l=new U;au.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Wu extends _i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cm,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xr extends Wu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Zi(s,e,t){return Dm(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function Ga(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Dm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function VS(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function pd(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Im(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class na{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class WS extends na{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uf,endingEnd:uf}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case hf:r=e,a=2*t-n;break;case ff:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hf:o=e,l=2*n-t;break;case ff:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*_+.5*g,v=d*m-d*_;for(let S=0;S!==a;++S)r[S]=p*o[u+S]+y*o[c+S]+x*o[l+S]+v*o[h+S];return r}}class XS extends na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class YS extends na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class yi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ga(t,this.TimeBufferType),this.values=Ga(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ga(e.times,Array),values:Ga(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new YS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new XS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new WS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Zo:t=this.InterpolantFactoryMethodDiscrete;break;case Qs:t=this.InterpolantFactoryMethodLinear;break;case Kl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zo;case this.InterpolantFactoryMethodLinear:return Qs;case this.InterpolantFactoryMethodSmooth:return Kl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=Zi(n,r,o),this.values=Zi(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Dm(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Zi(this.times),t=Zi(this.values),n=this.getValueSize(),i=this.getInterpolation()===Kl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Zi(e,0,o),this.values=Zi(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Zi(this.times,0),t=Zi(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}yi.prototype.TimeBufferType=Float32Array;yi.prototype.ValueBufferType=Float32Array;yi.prototype.DefaultInterpolation=Qs;class oo extends yi{}oo.prototype.ValueTypeName="bool";oo.prototype.ValueBufferType=Array;oo.prototype.DefaultInterpolation=Zo;oo.prototype.InterpolantFactoryMethodLinear=void 0;oo.prototype.InterpolantFactoryMethodSmooth=void 0;class Um extends yi{}Um.prototype.ValueTypeName="color";class Qo extends yi{}Qo.prototype.ValueTypeName="number";class qS extends na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)_r.slerpFlat(r,0,o,c-a,o,c,l);return r}}class is extends yi{InterpolantFactoryMethodLinear(e){return new qS(this.times,this.values,this.getValueSize(),e)}}is.prototype.ValueTypeName="quaternion";is.prototype.DefaultInterpolation=Qs;is.prototype.InterpolantFactoryMethodSmooth=void 0;class ao extends yi{}ao.prototype.ValueTypeName="string";ao.prototype.ValueBufferType=Array;ao.prototype.DefaultInterpolation=Zo;ao.prototype.InterpolantFactoryMethodLinear=void 0;ao.prototype.InterpolantFactoryMethodSmooth=void 0;class ea extends yi{}ea.prototype.ValueTypeName="vector";class jS{constructor(e,t=-1,n,i=t0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ai(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push($S(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(yi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=VS(l);l=pd(l,1,u),c=pd(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Qo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];Im(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let y=0;y!==f[g].morphTargets.length;++y){const x=f[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new Qo(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(ea,d+".position",f,"pos",i),n(is,d+".quaternion",f,"rot",i),n(ea,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function KS(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qo;case"vector":case"vector2":case"vector3":case"vector4":return ea;case"color":return Um;case"quaternion":return is;case"bool":case"boolean":return oo;case"string":return ao}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function $S(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=KS(s.type);if(s.times===void 0){const t=[],n=[];Im(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const no={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class ZS{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const JS=new ZS;class ia{constructor(e){this.manager=e!==void 0?e:JS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Ri={};class QS extends Error{constructor(e,t){super(e),this.response=t}}class Nm extends ia{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=no.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ri[e]!==void 0){Ri[e].push({onLoad:t,onProgress:n,onError:i});return}Ri[e]=[],Ri[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ri[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){h.read().then(({done:x,value:v})=>{if(x)p.close();else{_+=v.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let w=0,A=u.length;w<A;w++){const P=u[w];P.onProgress&&P.onProgress(S)}p.enqueue(v),y()}})}}});return new Response(m)}else throw new QS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{no.add(e,c);const u=Ri[e];delete Ri[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Ri[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ri[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class eT extends ia{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=no.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Jo("img");function l(){u(),no.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class tT extends ia{constructor(e){super(e)}load(e,t,n,i){const r=new Kt,o=new eT(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Xu extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const yc=new Je,md=new U,_d=new U;class Yu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fu,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;md.setFromMatrixPosition(e.matrixWorld),t.position.copy(md),_d.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_d),t.updateMatrixWorld(),yc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class nT extends Yu{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=eo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class iT extends Xu{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new nT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const gd=new Je,Mo=new U,Sc=new U;class rT extends Yu{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Mo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Mo),Sc.copy(n.position),Sc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Sc),n.updateMatrixWorld(),i.makeTranslation(-Mo.x,-Mo.y,-Mo.z),gd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gd)}}class sT extends Xu{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new rT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class oT extends Yu{constructor(){super(new ku(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class aT extends Xu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new oT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lu{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class lT extends ia{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=no.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){no.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class cT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=xd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function xd(){return(typeof performance>"u"?Date:performance).now()}const qu="\\[\\]\\.:\\/",uT=new RegExp("["+qu+"]","g"),ju="[^"+qu+"]",hT="[^"+qu.replace("\\.","")+"]",fT=/((?:WC+[\/:])*)/.source.replace("WC",ju),dT=/(WCOD+)?/.source.replace("WCOD",hT),pT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ju),mT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ju),_T=new RegExp("^"+fT+dT+pT+mT+"$"),gT=["material","materials","bones","map"];class xT{constructor(e,t,n){const i=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ft{constructor(e,t,n){this.path=t,this.parsedPath=n||ft.parseTrackName(t),this.node=ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ft.Composite(e,t,n):new ft(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(uT,"")}static parseTrackName(e){const t=_T.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);gT.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ft.Composite=xT;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uu);function vd(s,e){if(e===n0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===nu||e===am){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===nu)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class vT extends ia{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ET(t)}),this.register(function(t){return new DT(t)}),this.register(function(t){return new IT(t)}),this.register(function(t){return new UT(t)}),this.register(function(t){return new AT(t)}),this.register(function(t){return new wT(t)}),this.register(function(t){return new RT(t)}),this.register(function(t){return new CT(t)}),this.register(function(t){return new TT(t)}),this.register(function(t){return new PT(t)}),this.register(function(t){return new bT(t)}),this.register(function(t){return new LT(t)}),this.register(function(t){return new yT(t)}),this.register(function(t){return new NT(t)}),this.register(function(t){return new OT(t)})}load(e,t,n,i){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=lu.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Nm(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Om){try{o[ot.KHR_BINARY_GLTF]=new FT(e)}catch(h){i&&i(h);return}r=JSON.parse(o[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new $T(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case ot.KHR_MATERIALS_UNLIT:o[h]=new ST;break;case ot.KHR_DRACO_MESH_COMPRESSION:o[h]=new BT(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:o[h]=new kT;break;case ot.KHR_MESH_QUANTIZATION:o[h]=new zT;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function MT(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class yT{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Xe(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new aT(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new sT(u),c.distance=h;break;case"spot":c=new iT(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,er(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class ST{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return di}extendParams(e,t,n){const i=[];e.color=new Xe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,ke))}return Promise.all(i)}}class TT{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class ET{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new lt(a,a)}return Promise.all(r)}}class bT{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class AT{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Xe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ke)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class wT{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class RT{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Xe(a[0],a[1],a[2]),Promise.all(r)}}class CT{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class PT{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Xe(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,ke)),Promise.all(r)}}class LT{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class DT{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class IT{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class UT{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class NT{constructor(e){this.name=ot.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class OT{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Gn.TRIANGLES&&c.mode!==Gn.TRIANGLE_STRIP&&c.mode!==Gn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new Je,m=new U,p=new _r,y=new U(1,1,1),x=new kS(g.geometry,g.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&y.fromBufferAttribute(l.SCALE,v),x.setMatrixAt(v,_.compose(m,p,y));for(const v in l)v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);wt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),d.push(x)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Om="glTF",yo=12,Md={JSON:1313821514,BIN:5130562};class FT{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,yo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Om)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-yo,r=new DataView(e,yo);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Md.JSON){const c=new Uint8Array(e,yo+o,a);this.content=n.decode(c)}else if(l===Md.BIN){const c=yo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class BT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=cu[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=cu[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Gs[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(const d in f.attributes){const g=f.attributes[d],_=l[d];_!==void 0&&(g.normalized=_)}h(f)},a,c)})})}}class kT{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class zT{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}}class Fm extends na{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,y=1-m,x=p-f+h;for(let v=0;v!==a;v++){const S=o[_+v+a],w=o[_+v+l]*u,A=o[g+v+a],P=o[g+v]*u;r[v]=y*S+x*w+m*A+p*P}return r}}const HT=new _r;class GT extends Fm{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return HT.fromArray(r).normalize().toArray(r),r}}const Gn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Gs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yd={9728:Vt,9729:yn,9984:tu,9985:em,9986:Qa,9987:es},Sd={33071:Xn,33648:dl,10497:Zs},Tc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},VT={CUBICSPLINE:void 0,LINEAR:Qs,STEP:Zo},Ec={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function WT(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Wu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Wi})),s.DefaultMaterial}function wr(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function er(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function XT(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function YT(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function qT(s){let e;const t=s.extensions&&s.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+bc(t.attributes):e=s.indices+":"+bc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+bc(s.targets[n]);return e}function bc(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function uu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function jT(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const KT=new Je;class $T{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new MT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new tT(this.options.manager):this.textureLoader=new lT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Nm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};wr(r,a,i),er(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(lu.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Tc[i.type],a=Gs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new gn(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Tc[i.type],c=Gs[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(d&&d!==h){const p=Math.floor(f/d),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(y);x||(_=new c(a,p*d,i.count*d/u),x=new IS(_,d/u),t.cache.add(y,x)),m=new Hu(x,l,f%d/u,g)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),m=new gn(_,l,g);if(i.sparse!==void 0){const p=Tc.SCALAR,y=Gs[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,S=new y(o[1],x,i.sparse.count*p),w=new c(o[2],v,i.sparse.count*l);a!==null&&(m=new gn(m.array.slice(),m.itemSize,m.normalized));for(let A=0,P=S.length;A<P;A++){const M=S[A];if(m.setX(M,w[A*l]),l>=2&&m.setY(M,w[A*l+1]),l>=3&&m.setZ(M,w[A*l+2]),l>=4&&m.setW(M,w[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=yd[f.magFilter]||yn,u.minFilter=yd[f.minFilter]||es,u.wrapS=Sd[f.wrapS]||Zs,u.wrapT=Sd[f.wrapT]||Zs,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Kt(_);m.needsUpdate=!0,f(m)}),t.load(lu.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||jT(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Lm,_i.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Pm,_i.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Wu}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[ot.KHR_MATERIALS_UNLIT]){const h=i[ot.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Xe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.fromArray(f),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,ke)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=hi);const u=r.alphaMode||Ec.OPAQUE;if(u===Ec.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ec.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==di&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new lt(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&o!==di&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==di&&(a.emissive=new Xe().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==di&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ke)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),er(h,r),t.associations.set(h,{materials:e}),r.extensions&&wr(i,h,r),h})}createUniqueName(e){const t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Td(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=qT(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Td(new Mi,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?WT(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=o[d];let p;const y=c[d];if(m.mode===Gn.TRIANGLES||m.mode===Gn.TRIANGLE_STRIP||m.mode===Gn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new NS(_,y):new _n(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Gn.TRIANGLE_STRIP?p.geometry=vd(p.geometry,am):m.mode===Gn.TRIANGLE_FAN&&(p.geometry=vd(p.geometry,nu));else if(m.mode===Gn.LINES)p=new zS(_,y);else if(m.mode===Gn.LINE_STRIP)p=new Vu(_,y);else if(m.mode===Gn.LINE_LOOP)p=new HS(_,y);else if(m.mode===Gn.POINTS)p=new GS(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&YT(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),er(p,r),m.extensions&&wr(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&wr(i,h[0],r),h[0];const f=new Br;r.extensions&&wr(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new fn(R0.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ku(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),er(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new Je;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Gu(a,l)})}loadAnimation(e){const n=this.json.animations[e],i=n.name?n.name:"animation_"+e,r=[],o=[],a=[],l=[],c=[];for(let u=0,h=n.channels.length;u<h;u++){const f=n.channels[u],d=n.samplers[f.sampler],g=f.target,_=g.node,m=n.parameters!==void 0?n.parameters[d.input]:d.input,p=n.parameters!==void 0?n.parameters[d.output]:d.output;g.node!==void 0&&(r.push(this.getDependency("node",_)),o.push(this.getDependency("accessor",m)),a.push(this.getDependency("accessor",p)),l.push(d),c.push(g))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c)]).then(function(u){const h=u[0],f=u[1],d=u[2],g=u[3],_=u[4],m=[];for(let p=0,y=h.length;p<y;p++){const x=h[p],v=f[p],S=d[p],w=g[p],A=_[p];if(x===void 0)continue;x.updateMatrix();let P;switch(Ji[A.path]){case Ji.weights:P=Qo;break;case Ji.rotation:P=is;break;case Ji.position:case Ji.scale:default:P=ea;break}const M=x.name?x.name:x.uuid,T=w.interpolation!==void 0?VT[w.interpolation]:Qs,G=[];Ji[A.path]===Ji.weights?x.traverse(function(D){D.morphTargetInfluences&&G.push(D.name?D.name:D.uuid)}):G.push(M);let B=S.array;if(S.normalized){const D=uu(B.constructor),O=new Float32Array(B.length);for(let N=0,K=B.length;N<K;N++)O[N]=B[N]*D;B=O}for(let D=0,O=G.length;D<O;D++){const N=new P(G[D]+"."+Ji[A.path],v.array,B,T);w.interpolation==="CUBICSPLINE"&&(N.createInterpolant=function(F){const Y=this instanceof is?GT:Fm;return new Y(this.times,this.values,this.getValueSize()/3,F)},N.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(N)}}return new jS(i,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,KT)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Cm:c.length>1?u=new Br:c.length===1?u=c[0]:u=new wt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),er(u,r),r.extensions&&wr(n,u,r),r.matrix!==void 0){const h=new Je;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Br;n.name&&(r.name=i.createUniqueName(n.name)),er(r,n),n.extensions&&wr(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof _i||f instanceof Kt)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}}function ZT(s,e,t){const n=e.attributes,i=new Xi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),a.normalized){const u=uu(Gs[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new U,l=new U;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=uu(Gs[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new vi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Td(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=cu[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return er(s,e),ZT(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?XT(s,e.targets,t):s})}console.log("three loaded!");new vT;const Ed=new cT;let Ac=0;const[JT]=document.getElementsByTagName("canvas"),El=new DS,Nr=new fn(75,window.innerWidth/window.innerHeight,.1,1e3),ra=new Rm({canvas:JT});ra.setPixelRatio(window.devicePixelRatio);ra.setClearColor("#ffffff");ra.setSize(window.innerWidth,window.innerHeight);const Ku=new gr(1,1,1),$u=new di({color:16720622,wireframe:!0}),Cs=new _n(Ku,$u);new gr(1,1,1);new di({color:2293555,wireframe:!0});const io=new _n(Ku,$u);io.translateX(2);io.translateY(2);io.scale.set(.3,.3,.3);new gr(1,1,1);new di({color:2293555,wireframe:!0});const lo=new _n(Ku,$u);lo.translateX(-5);lo.translateY(-5);lo.translateZ(-5);lo.scale.set(6,6,6);El.add(Cs);El.add(io);El.add(lo);var Ci={x:0,y:0,z:0},Rr={x:7,y:7,z:7},bd=.2;window.addEventListener("resize",()=>{Nr.aspect=window.innerWidth/window.innerHeight,Nr.updateProjectionMatrix(),ra.setSize(window.innerWidth,window.innerHeight)});function Bm(){requestAnimationFrame(Bm),Ed.getDelta(),Ac=Ed.elapsedTime.toFixed(2),ra.render(El,Nr),Cs.rotateX(.01),Cs.rotateY(.01),io.rotateZ(.005),io.rotateX(.01),lo.rotateY(.01),Ci.x=Cs.position.x,Ci.y=Cs.position.y,Ci.z=Cs.position.z,Nr.position.x=Ci.x+Rr.x*Math.sin(Ac*bd),Nr.position.z=Ci.z+Rr.z*Math.cos(Ac*bd),Nr.position.y=Ci.y+Rr.y,Nr.lookAt(Ci.x,Ci.y,Ci.z),Math.floor(Math.random()*1e3)==15&&(console.log("GYAT"),Rr={x:-Rr.x,y:-Rr.y,z:-Rr.z})}Bm();
