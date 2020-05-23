goog.provide('com.fulcrologic.fulcro.algorithms.transit');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('com.fulcrologic.fulcro.algorithms.tempid');

/**
* @constructor
*/
com.fulcrologic.fulcro.algorithms.transit.TempIdHandler = (function (){
});
(com.fulcrologic.fulcro.algorithms.transit.TempIdHandler.prototype.tag = (function (_){
var self__ = this;
var ___$1 = this;
return com.fulcrologic.fulcro.algorithms.tempid.tag;
}));

(com.fulcrologic.fulcro.algorithms.transit.TempIdHandler.prototype.rep = (function (r){
var self__ = this;
var _ = this;
return r.id;
}));

(com.fulcrologic.fulcro.algorithms.transit.TempIdHandler.prototype.stringRep = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(com.fulcrologic.fulcro.algorithms.transit.TempIdHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(com.fulcrologic.fulcro.algorithms.transit.TempIdHandler.cljs$lang$type = true);

(com.fulcrologic.fulcro.algorithms.transit.TempIdHandler.cljs$lang$ctorStr = "com.fulcrologic.fulcro.algorithms.transit/TempIdHandler");

(com.fulcrologic.fulcro.algorithms.transit.TempIdHandler.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"com.fulcrologic.fulcro.algorithms.transit/TempIdHandler");
}));

/**
 * Positional factory function for com.fulcrologic.fulcro.algorithms.transit/TempIdHandler.
 */
com.fulcrologic.fulcro.algorithms.transit.__GT_TempIdHandler = (function com$fulcrologic$fulcro$algorithms$transit$__GT_TempIdHandler(){
return (new com.fulcrologic.fulcro.algorithms.transit.TempIdHandler());
});

/**
 * Create a transit writer.
 * 
 *   - `out`: An acceptable output for transit writers.
 *   - `opts`: (optional) options to pass to `cognitect.transit/writer` (such as handlers).
 */
com.fulcrologic.fulcro.algorithms.transit.writer = (function com$fulcrologic$fulcro$algorithms$transit$writer(var_args){
var G__52463 = arguments.length;
switch (G__52463) {
case 0:
return com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),cljs.core.assoc_in(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),com.fulcrologic.fulcro.algorithms.tempid.TempId], null),(new com.fulcrologic.fulcro.algorithms.transit.TempIdHandler())));
}));

(com.fulcrologic.fulcro.algorithms.transit.writer.cljs$lang$maxFixedArity = 1);

/**
 * Create a transit reader.
 * 
 *   - `opts`: (optional) options to pass to `cognitect.transit/reader` (such as data type handlers).
 */
com.fulcrologic.fulcro.algorithms.transit.reader = (function com$fulcrologic$fulcro$algorithms$transit$reader(var_args){
var G__52475 = arguments.length;
switch (G__52475) {
case 0:
return com.fulcrologic.fulcro.algorithms.transit.reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.fulcrologic.fulcro.algorithms.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.transit.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.fulcrologic.fulcro.algorithms.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),cljs.core.assoc_in(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),com.fulcrologic.fulcro.algorithms.tempid.tag], null),(function (id){
return com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$1(id);
})));
}));

(com.fulcrologic.fulcro.algorithms.transit.reader.cljs$lang$maxFixedArity = 1);

/**
 * Checks to see that the value in question can be serialized by the default fulcro writer by actually attempting to
 *   serialize it.  This is *not* an efficient check.
 */
com.fulcrologic.fulcro.algorithms.transit.serializable_QMARK_ = (function com$fulcrologic$fulcro$algorithms$transit$serializable_QMARK_(v){
try{com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$0().write(v);

return true;
}catch (e52478){var e = e52478;
return false;
}});
/**
 * Use transit to encode clj data as a string. Useful for encoding initial app state from server-side rendering.
 * 
 *   - `data`: Arbitrary data
 *   - `opts`: (optional) Options to send when creating a `writer`. Always preserves metadata.
 * 
 *   WARNING: metadata encoding will not work in CLJS if you don't use the latest transit-js. If using
 *   shadow-cljs, this means placing that in your package.json file (not relying on the jar version).
 */
com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str = (function com$fulcrologic$fulcro$algorithms$transit$transit_clj__GT_str(var_args){
var G__52481 = arguments.length;
switch (G__52481) {
case 1:
return com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$1 = (function (data){
return com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$2(data,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$2 = (function (data,opts){
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"transform","transform",1381301764),cognitect.transit.write_meta);
return cognitect.transit.write(com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$1(opts__$1),data);
}));

(com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$lang$maxFixedArity = 2);

/**
 * Use transit to decode a string into a clj data structure. Useful for decoding initial app state
 * when starting from a server-side rendering.
 */
com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj = (function com$fulcrologic$fulcro$algorithms$transit$transit_str__GT_clj(var_args){
var G__52486 = arguments.length;
switch (G__52486) {
case 1:
return com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$core$IFn$_invoke$arity$1 = (function (str){
return com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$core$IFn$_invoke$arity$2(str,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$core$IFn$_invoke$arity$2 = (function (str,opts){
return cognitect.transit.read(com.fulcrologic.fulcro.algorithms.transit.reader.cljs$core$IFn$_invoke$arity$1(opts),str);
}));

(com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.transit.js.map
