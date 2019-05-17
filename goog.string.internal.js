var window=global;var $CLJS=require("./cljs_env");require("./goog.base.js");
$CLJS.Kb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};