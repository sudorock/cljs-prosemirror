goog.provide('com.fulcrologic.fulcro.algorithms.lookup');
goog.require('cljs.core');
goog.require('taoensso.timbre');
/**
 * Get the current value of a particular Fulcro plugin algorithm.  These are set by default and can be overridden
 *   when you create your fulcro app.
 * 
 *   `app` - The application
 *   `k` - the algorithm to obtain. This can be a plain keyword or a symbol of the algorithm desired.
 * 
 *   Supported algorithms that can be obtained/overridden in Fulcro (check the source of app/fulcro-app if you suspect this is out
 *   of date):
 * 
 *   - `:tx!` - Internal implementation of transaction submission. Default `app/default-tx!`
 *   - `:global-eql-transform` - A `(fn [tx] tx')` that is applied to all outgoing requests (when using default `tx!`).
 *   Defaults to stripping things like `:ui/*` and form state config joins.
 *   - `:remote-error?` - A `(fn [result] boolean)` that defines what a remote error is.
 *   - `:global-error-action` - A `(fn [env] ...)` that is run on any remote error (as defined by `remote-error?`).
 *   - `:optimized-render!` - The concrete render algorithm for optimized renders (not root refreshes)
 *   - `:render!` - The top-level render function. Calls root render or optimized render by default. Renders on the calling thread.
 *   - `:schedule-render!` - The call that schedules a render. Defaults to using `js/requestAnimationFrame`.
 *   - `:default-result-action!` -  The action used for remote results in all mutations that do not have a `result-action` section.
 *   - `:index-root!` - The algorithm that scans the current query from root an indexes all classes by their queries.
 *   - `:index-component!` - The algorithm that adds a component to indexes when it mounts.
 *   - `:drop-component!` - The algorithm that removes a component from indexes when it unmounts.
 *   - `:props-middleware` - Middleware that can modify `props` for all components.
 *   - `:render-middleware` - Middlware that wraps all `render` methods of `defsc` components.
 * 
 *   Returns nil if the algorithm is currently undefined.
 *   
 */
com.fulcrologic.fulcro.algorithms.lookup.app_algorithm = (function com$fulcrologic$fulcro$algorithms$lookup$app_algorithm(p__52402,k){
var map__52404 = p__52402;
var map__52404__$1 = (((((!((map__52404 == null))))?(((((map__52404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52404):map__52404);
var app__$1 = map__52404__$1;
var algorithms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52404__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","algorithms","com.fulcrologic.fulcro.application/algorithms",-397334538));
var temp__5735__auto__ = ((((typeof k === 'string') || ((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("com.fulcrologic.fulcro.algorithm",cljs.core.name(k)):null);
if(cljs.core.truth_(temp__5735__auto__)){
var nm = temp__5735__auto__;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","algorithms","com.fulcrologic.fulcro.application/algorithms",-397334538),nm], null),null);
} else {
return null;
}
});

//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.lookup.js.map
