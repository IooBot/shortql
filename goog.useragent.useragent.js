var window=global;var $CLJS=require("./cljs_env");require("./goog.base.js");require("./goog.array.array.js");require("./goog.labs.useragent.util.js");require("./goog.string.internal.js");
var lw,nw;lw=function(a){return-1!=$CLJS.iw.toLowerCase().indexOf(a.toLowerCase())};$CLJS.mw=function(a){return-1!=$CLJS.iw.indexOf(a)};nw=function(){return $CLJS.mw("iPhone")&&!$CLJS.mw("iPod")&&!$CLJS.mw("iPad")};$CLJS.mw("Opera");$CLJS.mw("Trident")||$CLJS.mw("MSIE");$CLJS.mw("Edge");!$CLJS.mw("Gecko")||lw("WebKit")&&!$CLJS.mw("Edge")||$CLJS.mw("Trident")||$CLJS.mw("MSIE")||$CLJS.mw("Edge");lw("WebKit")&&!$CLJS.mw("Edge")&&$CLJS.mw("Mobile");$CLJS.mw("Macintosh");$CLJS.mw("Windows");
$CLJS.mw("Linux")||$CLJS.mw("CrOS");var kw=$CLJS.Cb.navigator||null;kw&&(kw.appVersion||"").indexOf("X11");$CLJS.mw("Android");nw();$CLJS.mw("iPad");$CLJS.mw("iPod");nw()||$CLJS.mw("iPad")||$CLJS.mw("iPod");lw("KaiOS");lw("GAFP");