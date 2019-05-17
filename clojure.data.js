var window=global;var $CLJS=require("./cljs_env");require("./goog.base.js");require("./cljs.core.js");require("./clojure.set.js");
var pw,rw,sw,uw,ww,yw,Aw,qw;pw=function(a,b){return $CLJS.ic(a)<$CLJS.ic(b)?$CLJS.Rc($CLJS.fh,b,a):$CLJS.Rc($CLJS.fh,a,b)};
$CLJS.$o=function(a,b,c){return function(){function d(m,n,p){return a.I?a.I(b,c,m,n,p):a(b,c,m,n,p)}function e(m,n){return a.s?a.s(b,c,m,n):a(b,c,m,n)}function f(m){return a.f?a.f(b,c,m):a(b,c,m)}function g(){return a.b?a.b(b,c):a(b,c)}var k=null,l=function(){function m(p,v,u,x){var D=null;if(3<arguments.length){D=0;for(var I=Array(arguments.length-3);D<I.length;)I[D]=arguments[D+3],++D;D=new $CLJS.Nb(I,0,null)}return n.call(this,p,v,u,D)}function n(p,v,u,x){return $CLJS.Kd(a,b,c,p,v,$CLJS.pc([u,
x]))}m.A=3;m.C=function(p){var v=$CLJS.H(p);p=$CLJS.K(p);var u=$CLJS.H(p);p=$CLJS.K(p);var x=$CLJS.H(p);p=$CLJS.Rb(p);return n(v,u,x,p)};m.j=n;return m}();k=function(m,n,p,v){switch(arguments.length){case 0:return g.call(this);case 1:return f.call(this,m);case 2:return e.call(this,m,n);case 3:return d.call(this,m,n,p);default:var u=null;if(3<arguments.length){u=0;for(var x=Array(arguments.length-3);u<x.length;)x[u]=arguments[u+3],++u;u=new $CLJS.Nb(x,0,null)}return l.j(m,n,p,u)}throw Error("Invalid arity: "+
arguments.length);};k.A=3;k.C=l.C;k.u=g;k.a=f;k.b=e;k.f=d;k.j=l.j;return k}()};rw=function(a,b){a=$CLJS.Hd(qw,a,b);return $CLJS.jd(a,$CLJS.Xh(function(c){return function(d){return c===d}}(a),b))};sw=function(a,b){return $CLJS.M.b(a,b)?new $CLJS.R(null,3,5,$CLJS.T,[null,null,a],null):new $CLJS.R(null,3,5,$CLJS.T,[a,b,null],null)};
uw=function(a){return $CLJS.F(a)?$CLJS.Rc(function(b,c){var d=$CLJS.uc(c,0,null);c=$CLJS.uc(c,1,null);return $CLJS.kg.f(b,d,c)},$CLJS.He($CLJS.Pp($CLJS.Gd($CLJS.tw,$CLJS.Lf(a)),null)),a):null};
ww=function(a,b,c){var d=$CLJS.N.b(a,c),e=$CLJS.N.b(b,c),f=$CLJS.vw(d,e),g=$CLJS.uc(f,0,null),k=$CLJS.uc(f,1,null);f=$CLJS.uc(f,2,null);a=$CLJS.Kc(a,c);b=$CLJS.Kc(b,c);d=a&&b&&(null!=f||null==d&&null==e);return new $CLJS.R(null,3,5,$CLJS.T,[!a||null==g&&d?null:$CLJS.$e([c,g]),!b||null==k&&d?null:$CLJS.$e([c,k]),d?$CLJS.$e([c,f]):null],null)};
yw=function(a,b){return $CLJS.He($CLJS.he.b(uw,xw.f($CLJS.Fc(a)?a:$CLJS.He(a),$CLJS.Fc(b)?b:$CLJS.He(b),$CLJS.pm(0,function(){var c=$CLJS.ic(a),d=$CLJS.ic(b);return c>d?c:d}(),1))))};Aw=function(a,b){return new $CLJS.R(null,3,5,$CLJS.T,[$CLJS.Hp($CLJS.Rm.b(a,b)),$CLJS.Hp($CLJS.Rm.b(b,a)),$CLJS.Hp(zw.b(a,b))],null)};$CLJS.vw=function(a,b){return $CLJS.M.b(a,b)?new $CLJS.R(null,3,5,$CLJS.T,[null,null,a],null):$CLJS.M.b(Bw(a),Bw(b))?Cw(a,b):sw(a,b)};
qw=function qw(a){switch(arguments.length){case 2:return qw.b(arguments[0],arguments[1]);case 3:return qw.f(arguments[0],arguments[1],arguments[2]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return qw.j(arguments[0],arguments[1],arguments[2],new $CLJS.Nb(c.slice(3),0,null))}};qw.b=function(a,b){return b};qw.f=function(a,b,c){return(a.a?a.a(b):a(b))>(a.a?a.a(c):a(c))?b:c};
qw.j=function(a,b,c,d){return $CLJS.Rc(function(e,f){return qw.f(a,e,f)},qw.f(a,b,c),d)};qw.C=function(a){var b=$CLJS.H(a),c=$CLJS.K(a);a=$CLJS.H(c);var d=$CLJS.K(c);c=$CLJS.H(d);d=$CLJS.K(d);return this.j(b,a,c,d)};qw.A=3;
$CLJS.tw=function tw(a){switch(arguments.length){case 1:return tw.a(arguments[0]);case 2:return tw.b(arguments[0],arguments[1]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return tw.j(arguments[0],arguments[1],new $CLJS.Nb(c.slice(2),0,null))}};$CLJS.tw.a=function(a){return a};$CLJS.tw.b=function(a,b){return a>b?a:b};$CLJS.tw.j=function(a,b,c){return $CLJS.Rc($CLJS.tw,a>b?a:b,c)};
$CLJS.tw.C=function(a){var b=$CLJS.H(a),c=$CLJS.K(a);a=$CLJS.H(c);c=$CLJS.K(c);return this.j(b,a,c)};$CLJS.tw.A=2;var zw=function zw(a){switch(arguments.length){case 1:return zw.a(arguments[0]);case 2:return zw.b(arguments[0],arguments[1]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return zw.j(arguments[0],arguments[1],new $CLJS.Nb(c.slice(2),0,null))}};zw.a=function(a){return a};
zw.b=function(a,b){for(;;)if($CLJS.ic(b)<$CLJS.ic(a)){var c=a;a=b;b=c}else return $CLJS.Rc(function(d,e){return function(f,g){return $CLJS.Kc(e,g)?f:$CLJS.Qm.b(f,g)}}(a,b),a,a)};zw.j=function(a,b,c){a=rw(function(d){return-$CLJS.ic(d)},$CLJS.fh.j(c,b,$CLJS.pc([a])));return $CLJS.Rc(zw,$CLJS.H(a),$CLJS.Rb(a))};zw.C=function(a){var b=$CLJS.H(a),c=$CLJS.K(a);a=$CLJS.H(c);c=$CLJS.K(c);return this.j(b,a,c)};zw.A=2;
var Dw=new $CLJS.Q(null,"sequential","sequential",-1082983960),Ew=new $CLJS.Q(null,"atom","atom",-397043653);var xw=function xw(a){switch(arguments.length){case 2:return xw.b(arguments[0],arguments[1]);case 3:return xw.f(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",$CLJS.z.a(arguments.length)].join(""));}};xw.b=function(a,b){return xw.f(a,b,pw($CLJS.Lf(a),$CLJS.Lf(b)))};xw.f=function(a,b,c){return $CLJS.Rc(function(d,e){return $CLJS.So($CLJS.he.f($CLJS.wp,d,e))},new $CLJS.R(null,3,5,$CLJS.T,[null,null,null],null),$CLJS.he.b($CLJS.$o(ww,a,b),c))};xw.A=3;
var Bw=function Bw(a){if(null!=a&&null!=a.Ee)return a.Ee(a);var c=Bw[$CLJS.Ca(null==a?null:a)];if(null!=c)return c.a?c.a(a):c(a);c=Bw._;if(null!=c)return c.a?c.a(a):c(a);throw $CLJS.ab("EqualityPartition.equality-partition",a);},Cw=function Cw(a,b){if(null!=a&&null!=a.De)return a.De(a,b);var d=Cw[$CLJS.Ca(null==a?null:a)];if(null!=d)return d.b?d.b(a,b):d(a,b);d=Cw._;if(null!=d)return d.b?d.b(a,b):d(a,b);throw $CLJS.ab("Diff.diff-similar",a);};Bw["null"]=function(){return Ew};Bw.string=function(){return Ew};
Bw.number=function(){return Ew};Bw.array=function(){return Dw};Bw["function"]=function(){return Ew};Bw["boolean"]=function(){return Ew};Bw._=function(a){return(null!=a?a.g&1024||$CLJS.Gb===a.Id||(a.g?0:$CLJS.Za($CLJS.ib,a)):$CLJS.Za($CLJS.ib,a))?$CLJS.Aq:(null!=a?a.g&4096||$CLJS.Gb===a.Md||(a.g?0:$CLJS.Za($CLJS.jb,a)):$CLJS.Za($CLJS.jb,a))?$CLJS.fq:(null!=a?a.g&16777216||$CLJS.Gb===a.pc||(a.g?0:$CLJS.Za($CLJS.pb,a)):$CLJS.Za($CLJS.pb,a))?Dw:Ew};Cw["null"]=function(a,b){return sw(a,b)};
Cw.string=function(a,b){return sw(a,b)};Cw.number=function(a,b){return sw(a,b)};Cw.array=function(a,b){return yw(a,b)};Cw["function"]=function(a,b){return sw(a,b)};Cw["boolean"]=function(a,b){return sw(a,b)};Cw._=function(a,b){var c=function(){var d=Bw(a);d=d instanceof $CLJS.Q?d.Ga:null;switch(d){case "atom":return sw;case "set":return Aw;case "sequential":return yw;case "map":return xw;default:throw Error(["No matching clause: ",$CLJS.z.a(d)].join(""));}}();return c.b?c.b(a,b):c(a,b)};