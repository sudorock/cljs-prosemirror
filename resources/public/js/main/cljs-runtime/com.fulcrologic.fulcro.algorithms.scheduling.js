goog.provide('com.fulcrologic.fulcro.algorithms.scheduling');
goog.require('cljs.core');
goog.require('com.fulcrologic.guardrails.core');
goog.require('cljs.core.async');
goog.require('taoensso.timbre');
/**
 * Schedule f to run in `tm` ms.
 */
com.fulcrologic.fulcro.algorithms.scheduling.defer = (function com$fulcrologic$fulcro$algorithms$scheduling$defer(f,tm){
return setTimeout(f,tm);
});
/**
 * Schedule the processing of a specific action in the runtime atom. This is a no-op if the item is already scheduled.
 *   When the timeout arrives it runs the given action and sets the given flag back to false.
 * 
 *   - `scheduled-key` - The runtime flag that tracks scheduling for the processing.
 *   - `action` - The function to run when the scheduled time comes.
 *   - `tm` - Number of ms to delay (default 0).
 */
com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_ = (function com$fulcrologic$fulcro$algorithms$scheduling$schedule_BANG_(var_args){
var G__56935 = arguments.length;
switch (G__56935) {
case 4:
return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (app__$1,scheduled_key,action,tm){
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.keyword_QMARK_,cljs.core.fn_QMARK_,cljs.core.int_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var map__56936 = app__$1;
var map__56936__$1 = (((((!((map__56936 == null))))?(((((map__56936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56936):map__56936);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56936__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(runtime_atom),scheduled_key))){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,scheduled_key,true);

return com.fulcrologic.fulcro.algorithms.scheduling.defer((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,scheduled_key,false);

return (action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(app__$1) : action.call(null,app__$1));
}),tm);
}
}));

(com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app__$1,scheduled_key,action){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.keyword_QMARK_,cljs.core.fn_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,scheduled_key,action,(0));
}));

(com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Schedule the processing of a specific action in the runtime atom on the next animation frame.
 * 
 *   - `scheduled-key` - The runtime flag that tracks scheduling for the processing.
 *   - `action` - The function to run when the scheduled time comes.
 */
com.fulcrologic.fulcro.algorithms.scheduling.schedule_animation_BANG_ = (function com$fulcrologic$fulcro$algorithms$scheduling$schedule_animation_BANG_(app__$1,scheduled_key,action){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.keyword_QMARK_,cljs.core.fn_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var map__56941 = app__$1;
var map__56941__$1 = (((((!((map__56941 == null))))?(((((map__56941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56941):map__56941);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56941__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(runtime_atom),scheduled_key))){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,scheduled_key,true);

var f = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,scheduled_key,false);

return (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
});
if((!((typeof requestAnimationFrame !== 'undefined')))){
return com.fulcrologic.fulcro.algorithms.scheduling.defer(f,(16));
} else {
return requestAnimationFrame(f);
}
}
});

//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.scheduling.js.map
