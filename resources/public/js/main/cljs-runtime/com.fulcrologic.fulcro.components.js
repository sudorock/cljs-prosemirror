goog.provide('com.fulcrologic.fulcro.components');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljsjs.react');
goog.require('edn_query_language.core');
goog.require('cljs.spec.alpha');
goog.require('taoensso.timbre');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('com.fulcrologic.fulcro.algorithms.do_not_use');
goog.require('com.fulcrologic.fulcro.algorithms.denormalize');
goog.require('com.fulcrologic.fulcro.algorithms.lookup');
goog.require('com.fulcrologic.guardrails.core');
goog.require('clojure.set');
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.components !== 'undefined') && (typeof com.fulcrologic.fulcro.components.component_registry !== 'undefined')){
} else {
com.fulcrologic.fulcro.components.component_registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
com.fulcrologic.fulcro.components._STAR_query_state_STAR_ = null;
com.fulcrologic.fulcro.components._STAR_app_STAR_ = null;
com.fulcrologic.fulcro.components._STAR_parent_STAR_ = null;
com.fulcrologic.fulcro.components._STAR_depth_STAR_ = null;
com.fulcrologic.fulcro.components._STAR_shared_STAR_ = null;
com.fulcrologic.fulcro.components._STAR_blindly_render_STAR_ = false;
/**
 * Like get-in, but for js objects, and in CLJC. In clj, it is just get-in. In cljs it is
 *   gobj/getValueByKeys.
 */
com.fulcrologic.fulcro.components.isoget_in = (function com$fulcrologic$fulcro$components$isoget_in(var_args){
var G__56934 = arguments.length;
switch (G__56934) {
case 2:
return com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,kvs){
return com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$3(obj,kvs,null);
}));

(com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,kvs,default$){
var ks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (k){
var G__56937 = k;
if((G__56937 == null)){
return null;
} else {
return cljs.core.name(G__56937);
}
}),kvs);
var or__4120__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,obj,ks);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return default$;
}
}));

(com.fulcrologic.fulcro.components.isoget_in.cljs$lang$maxFixedArity = 3);

/**
 * Like get, but for js objects, and in CLJC. In clj, it is just `get`. In cljs it is
 *   `gobj/get`.
 */
com.fulcrologic.fulcro.components.isoget = (function com$fulcrologic$fulcro$components$isoget(var_args){
var G__56940 = arguments.length;
switch (G__56940) {
case 2:
return com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
return com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$3(obj,k,null);
}));

(com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,default$){
var or__4120__auto__ = goog.object.get(obj,(function (){var G__56944 = k;
if((G__56944 == null)){
return null;
} else {
return cljs.core.name(G__56944);
}
})());
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return default$;
}
}));

(com.fulcrologic.fulcro.components.isoget.cljs$lang$maxFixedArity = 3);

/**
 * Add a component to Fulcro's component registry.  This is used by defsc to ensure that all Fulcro classes
 *   that have been compiled (transitively required) will be accessible for lookup by fully-qualified symbol/keyword.
 *   Not meant for public use, unless you're creating your own component macro that doesn't directly leverage defsc.
 */
com.fulcrologic.fulcro.components.register_component_BANG_ = (function com$fulcrologic$fulcro$components$register_component_BANG_(k,component_class){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.components.component_registry,cljs.core.assoc,k,component_class);

return component_class;
});
/**
 * Utility function that will force a lazy sequence of children (recursively) into realized
 *   vectors (React cannot deal with lazy seqs in production mode)
 */
com.fulcrologic.fulcro.components.force_children = (function com$fulcrologic$fulcro$components$force_children(x){
var G__56945 = x;
if(cljs.core.seq_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.force_children),G__56945);
} else {
return G__56945;
}
});
/**
 * Returns whichever of the given Fulcro props were most recently generated according to `denormalization-time`. This
 *   is part of props 'tunnelling', an optimization to get updated props to instances without going through the root.
 */
com.fulcrologic.fulcro.components.newer_props = (function com$fulcrologic$fulcro$components$newer_props(props_a,props_b){
if((props_a == null)){
return props_b;
} else {
if((props_b == null)){
return props_a;
} else {
if(((function (){var or__4120__auto__ = com.fulcrologic.fulcro.algorithms.denormalize.denormalization_time(props_a);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (2);
}
})() > (function (){var or__4120__auto__ = com.fulcrologic.fulcro.algorithms.denormalize.denormalization_time(props_b);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (1);
}
})())){
return props_a;
} else {
return props_b;

}
}
}
});
/**
 * Returns true if the argument is a component. A component is defined as a *mounted component*.
 * This function returns false for component classes, and also returns false for the output of a Fulcro component factory.
 */
com.fulcrologic.fulcro.components.component_instance_QMARK_ = (function com$fulcrologic$fulcro$components$component_instance_QMARK_(x){
if((!((x == null)))){
return goog.object.get(x,"fulcro$isComponent") === true;
} else {
return false;
}
});
/**
 * Returns true if the argument is a component instance.
 * 
 * DEPRECATED for terminology clarity. Use `component-instance?` instead.
 */
com.fulcrologic.fulcro.components.component_QMARK_ = com.fulcrologic.fulcro.components.component_instance_QMARK_;
/**
 * Returns true if the argument is a component class.
 */
com.fulcrologic.fulcro.components.component_class_QMARK_ = (function com$fulcrologic$fulcro$components$component_class_QMARK_(x){
return cljs.core.boolean$(goog.object.containsKey(x,"fulcro$class"));
});
/**
 * Returns a string version of the given react component's name. Works on component instances and classes.
 */
com.fulcrologic.fulcro.components.component_name = (function com$fulcrologic$fulcro$components$component_name(class$){
return com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(class$,new cljs.core.Keyword(null,"displayName","displayName",-809144601));
});
/**
 * Returns the registry key for the given component class.
 */
com.fulcrologic.fulcro.components.class__GT_registry_key = (function com$fulcrologic$fulcro$components$class__GT_registry_key(class$){
return com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(class$,new cljs.core.Keyword(null,"fulcro$registryKey","fulcro$registryKey",-155509270));
});
/**
 * Look up the given component in Fulcro's global component registry. Will only be able to find components that have
 *   been (transitively) required by your application.
 * 
 *   `classname` can be a fully-qualified keyword or symbol.
 */
com.fulcrologic.fulcro.components.registry_key__GT_class = (function com$fulcrologic$fulcro$components$registry_key__GT_class(classname){
if((classname instanceof cljs.core.Keyword)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.components.component_registry),classname);
} else {
if((classname instanceof cljs.core.Symbol)){
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(classname),cljs.core.name(classname));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.components.component_registry),k);
} else {
return null;

}
}
});
/**
 * Add computed properties to props. This will *replace* any pre-existing computed properties. Computed props are
 *   necessary when a parent component wishes to pass callbacks or other data to children that *have a query*. This
 *   is not necessary for "stateless" components, though it will work properly for both.
 * 
 *   Computed props are "remembered" so that a targeted update (which can only happen on a component with a query
 *   and ident) can use new props from the database without "losing" the computed props that were originally passed
 *   from the parent. If you pass things like callbacks through normal props, then targeted updates will seem to "lose
 *   track of" them.
 *   
 */
com.fulcrologic.fulcro.components.computed = (function com$fulcrologic$fulcro$components$computed(props,computed_map){
if((props == null)){
return null;
} else {
if(cljs.core.vector_QMARK_(props)){
var G__56948 = props;
if((!(cljs.core.empty_QMARK_(computed_map)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__56948,cljs.core.assoc,new cljs.core.Keyword("fulcro.client.primitives","computed","fulcro.client.primitives/computed",201987962),computed_map);
} else {
return G__56948;
}
} else {
var G__56949 = props;
if((!(cljs.core.empty_QMARK_(computed_map)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56949,new cljs.core.Keyword("fulcro.client.primitives","computed","fulcro.client.primitives/computed",201987962),computed_map);
} else {
return G__56949;
}
}
}
});
/**
 * Return the computed properties on a component or its props.
 */
com.fulcrologic.fulcro.components.get_computed = (function com$fulcrologic$fulcro$components$get_computed(var_args){
var G__56951 = arguments.length;
switch (G__56951) {
case 1:
return com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 = (function (x){
return com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentVector.EMPTY);
}));

(com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2 = (function (x,k_or_ks){
if((x == null)){
return null;
} else {
var props = (function (){var G__56952 = x;
if(com.fulcrologic.fulcro.components.component_instance_QMARK_(x)){
return (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(G__56952) : com.fulcrologic.fulcro.components.props.call(null,G__56952));
} else {
return G__56952;
}
})();
var ks = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","computed","fulcro.client.primitives/computed",201987962)], null),(function (){var G__56953 = k_or_ks;
if((!(cljs.core.sequential_QMARK_(k_or_ks)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__56953],null));
} else {
return G__56953;
}
})());
if(cljs.core.vector_QMARK_(props)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(props),ks);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,ks);
}
}
}));

(com.fulcrologic.fulcro.components.get_computed.cljs$lang$maxFixedArity = 2);

/**
 * Get any data (as a map) that props extensions have associated with the given Fulcro component. Extra props will
 *   be empty unless you've installed props-middleware (on your app) that sets them.
 */
com.fulcrologic.fulcro.components.get_extra_props = (function com$fulcrologic$fulcro$components$get_extra_props(this$){
return com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$3(this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"fulcro$extra_props","fulcro$extra_props",-499585470)], null),cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Return a component's props.
 */
com.fulcrologic.fulcro.components.props = (function com$fulcrologic$fulcro$components$props(component){
var props_from_parent = com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"fulcro$value","fulcro$value",818270554)], null));
var computed_from_parent = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(props_from_parent);
var props_from_updates = com.fulcrologic.fulcro.components.computed(com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"fulcro$value","fulcro$value",818270554)], null)),computed_from_parent);
return com.fulcrologic.fulcro.components.newer_props(props_from_parent,props_from_updates);
});
/**
 * Get the sequence of react children of the given component.
 */
com.fulcrologic.fulcro.components.children = (function com$fulcrologic$fulcro$components$children(component){
var cs = goog.object.getValueByKeys(component,"props","children");
if(((cljs.core.coll_QMARK_(cs)) || (cljs.core.array_QMARK_(cs)))){
return cs;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cs], null);
}
});
/**
 * Returns the component type, regardless of whether the component has been
 * mounted
 */
com.fulcrologic.fulcro.components.react_type = (function com$fulcrologic$fulcro$components$react_type(x){
var or__4120__auto__ = goog.object.get(x,"type");
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.type(x);
}
});
/**
 * Returns the map of options that was specified (via `defsc`) for the component class.
 */
com.fulcrologic.fulcro.components.component_options = (function com$fulcrologic$fulcro$components$component_options(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57133 = arguments.length;
var i__4731__auto___57137 = (0);
while(true){
if((i__4731__auto___57137 < len__4730__auto___57133)){
args__4736__auto__.push((arguments[i__4731__auto___57137]));

var G__57138 = (i__4731__auto___57137 + (1));
i__4731__auto___57137 = G__57138;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic = (function (instance_or_class,ks){
var c = com.fulcrologic.fulcro.components.react_type(instance_or_class);
var options = (function (){var or__4120__auto__ = com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(instance_or_class,new cljs.core.Keyword(null,"fulcro$options","fulcro$options",-1332196811));
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"fulcro$options","fulcro$options",-1332196811));
}
})();
if(cljs.core.seq(options)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options,cljs.core.vec(ks));
} else {
return options;
}
}));

(com.fulcrologic.fulcro.components.component_options.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.fulcro.components.component_options.cljs$lang$applyTo = (function (seq56964){
var G__56965 = cljs.core.first(seq56964);
var seq56964__$1 = cljs.core.next(seq56964);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56965,seq56964__$1);
}));

com.fulcrologic.fulcro.components.has_feature_QMARK_ = (function com$fulcrologic$fulcro$components$has_feature_QMARK_(component,option_key){
return cljs.core.contains_QMARK_(com.fulcrologic.fulcro.components.component_options(component),option_key);
});
com.fulcrologic.fulcro.components.has_initial_app_state_QMARK_ = (function com$fulcrologic$fulcro$components$has_initial_app_state_QMARK_(component){
return com.fulcrologic.fulcro.components.has_feature_QMARK_(component,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806));
});
com.fulcrologic.fulcro.components.has_ident_QMARK_ = (function com$fulcrologic$fulcro$components$has_ident_QMARK_(component){
return com.fulcrologic.fulcro.components.has_feature_QMARK_(component,new cljs.core.Keyword(null,"ident","ident",-742346));
});
com.fulcrologic.fulcro.components.has_query_QMARK_ = (function com$fulcrologic$fulcro$components$has_query_QMARK_(component){
return com.fulcrologic.fulcro.components.has_feature_QMARK_(component,new cljs.core.Keyword(null,"query","query",-1288509510));
});
com.fulcrologic.fulcro.components.has_pre_merge_QMARK_ = (function com$fulcrologic$fulcro$components$has_pre_merge_QMARK_(component){
return com.fulcrologic.fulcro.components.has_feature_QMARK_(component,new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148));
});
com.fulcrologic.fulcro.components.ident = (function com$fulcrologic$fulcro$components$ident(this$,props){
if(com.fulcrologic.fulcro.components.has_feature_QMARK_(this$,new cljs.core.Keyword(null,"ident","ident",-742346))){
var fexpr__56966 = com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ident","ident",-742346)], 0));
return (fexpr__56966.cljs$core$IFn$_invoke$arity$2 ? fexpr__56966.cljs$core$IFn$_invoke$arity$2(this$,props) : fexpr__56966.call(null,this$,props));
} else {
return null;
}
});
com.fulcrologic.fulcro.components.query = (function com$fulcrologic$fulcro$components$query(this$){
if(com.fulcrologic.fulcro.components.has_feature_QMARK_(this$,new cljs.core.Keyword(null,"query","query",-1288509510))){
var fexpr__56968 = com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"query","query",-1288509510)], 0));
return (fexpr__56968.cljs$core$IFn$_invoke$arity$1 ? fexpr__56968.cljs$core$IFn$_invoke$arity$1(this$) : fexpr__56968.call(null,this$));
} else {
return null;
}
});
com.fulcrologic.fulcro.components.initial_state = (function com$fulcrologic$fulcro$components$initial_state(clz,params){
if(com.fulcrologic.fulcro.components.has_feature_QMARK_(clz,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806))){
var fexpr__56970 = com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(clz,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806)], 0));
return (fexpr__56970.cljs$core$IFn$_invoke$arity$1 ? fexpr__56970.cljs$core$IFn$_invoke$arity$1(params) : fexpr__56970.call(null,params));
} else {
return null;
}
});
com.fulcrologic.fulcro.components.pre_merge = (function com$fulcrologic$fulcro$components$pre_merge(this$,data){
if(com.fulcrologic.fulcro.components.has_feature_QMARK_(this$,new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148))){
var fexpr__56971 = com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148)], 0));
return (fexpr__56971.cljs$core$IFn$_invoke$arity$1 ? fexpr__56971.cljs$core$IFn$_invoke$arity$1(data) : fexpr__56971.call(null,data));
} else {
return null;
}
});
com.fulcrologic.fulcro.components.depth = (function com$fulcrologic$fulcro$components$depth(this$){
return com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"fulcro$depth","fulcro$depth",1963025807)], null));
});
/**
 * GET a RAW react prop. Used internally.
 */
com.fulcrologic.fulcro.components.get_raw_react_prop = (function com$fulcrologic$fulcro$components$get_raw_react_prop(c,k){
return com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),k], null));
});
/**
 * Attempt to coerce `x` to an app.  Legal inputs are a fulcro application, a mounted component,
 *   or an atom holding any of the above.
 */
com.fulcrologic.fulcro.components.any__GT_app = (function com$fulcrologic$fulcro$components$any__GT_app(x){
var fulcro_app_QMARK_ = (function com$fulcrologic$fulcro$components$any__GT_app_$_fulcro_app_QMARK_(x__$1){
return ((cljs.core.map_QMARK_(x__$1)) && (cljs.core.contains_QMARK_(x__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366))));
});
if(com.fulcrologic.fulcro.components.component_instance_QMARK_(x)){
return com.fulcrologic.fulcro.components.get_raw_react_prop(x,new cljs.core.Keyword(null,"fulcro$app","fulcro$app",-1270465306));
} else {
if(cljs.core.truth_(fulcro_app_QMARK_(x))){
return x;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x))){
var G__56974 = cljs.core.deref(x);
return (com.fulcrologic.fulcro.components.any__GT_app.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.any__GT_app.cljs$core$IFn$_invoke$arity$1(G__56974) : com.fulcrologic.fulcro.components.any__GT_app.call(null,G__56974));
} else {
return null;
}
}
}
});
/**
 * Using raw react props/state returns the newest Fulcro props. This is part of "props tunneling", where component
 *   local state is leveraged as a communication mechanism of updated props directly to a component that has an ident.
 *   This function will return the correct version of props based on timestamps.
 */
com.fulcrologic.fulcro.components.raw__GT_newest_props = (function com$fulcrologic$fulcro$components$raw__GT_newest_props(raw_props,raw_state){
var next_props = goog.object.get(raw_props,"fulcro$value");
var opt_props = goog.object.get(raw_state,"fulcro$value");
return com.fulcrologic.fulcro.components.newer_props(next_props,opt_props);
});
/**
 * Return the global shared properties of the root. See :shared and
 * :shared-fn app options. NOTE: Shared props only update on root render and by explicit calls to
 * `app/update-shared!`
 */
com.fulcrologic.fulcro.components.shared = (function com$fulcrologic$fulcro$components$shared(var_args){
var G__56976 = arguments.length;
switch (G__56976) {
case 1:
return com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1 = (function (component){
return com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentVector.EMPTY);
}));

(com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(com.fulcrologic.fulcro.components.component_instance_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component-instance? component)"));
}

var shared = com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"fulcro$shared","fulcro$shared",591729181)], null));
var ks = (function (){var G__56977 = k_or_ks;
if((!(cljs.core.sequential_QMARK_(k_or_ks)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__56977],null));
} else {
return G__56977;
}
})();
var G__56978 = shared;
if((!(cljs.core.empty_QMARK_(ks)))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__56978,ks);
} else {
return G__56978;
}
}));

(com.fulcrologic.fulcro.components.shared.cljs$lang$maxFixedArity = 2);

var static_wrap_props_state_handler = (function com$fulcrologic$fulcro$components$static_wrap_props_state_handler(handler){
return (function (raw_props,raw_state){
var props = com.fulcrologic.fulcro.components.raw__GT_newest_props(raw_props,raw_state);
var state = goog.object.get(raw_state,"fulcro$state");
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(props,state) : handler.call(null,props,state));
});
});
var wrap_props_state_handler = (function() {
var com$fulcrologic$fulcro$components$wrap_props_state_handler = null;
var com$fulcrologic$fulcro$components$wrap_props_state_handler__1 = (function (handler){
return com$fulcrologic$fulcro$components$wrap_props_state_handler.cljs$core$IFn$_invoke$arity$2(handler,true);
});
var com$fulcrologic$fulcro$components$wrap_props_state_handler__2 = (function (handler,check_for_fresh_props_in_state_QMARK_){
return (function (raw_props,raw_state){
var this$ = this;
var props = (cljs.core.truth_(check_for_fresh_props_in_state_QMARK_)?com.fulcrologic.fulcro.components.raw__GT_newest_props(raw_props,raw_state):goog.object.get(raw_props,"fulcro$props"));
var state = goog.object.get(raw_state,"fulcro$state");
return (handler.cljs$core$IFn$_invoke$arity$3 ? handler.cljs$core$IFn$_invoke$arity$3(this$,props,state) : handler.call(null,this$,props,state));
});
});
com$fulcrologic$fulcro$components$wrap_props_state_handler = function(handler,check_for_fresh_props_in_state_QMARK_){
switch(arguments.length){
case 1:
return com$fulcrologic$fulcro$components$wrap_props_state_handler__1.call(this,handler);
case 2:
return com$fulcrologic$fulcro$components$wrap_props_state_handler__2.call(this,handler,check_for_fresh_props_in_state_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$fulcro$components$wrap_props_state_handler.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$fulcro$components$wrap_props_state_handler__1;
com$fulcrologic$fulcro$components$wrap_props_state_handler.cljs$core$IFn$_invoke$arity$2 = com$fulcrologic$fulcro$components$wrap_props_state_handler__2;
return com$fulcrologic$fulcro$components$wrap_props_state_handler;
})()
;
var component_did_mount = (function com$fulcrologic$fulcro$components$component_did_mount(){
var this$ = this;
goog.object.set(this$,"fulcro$mounted",true);

var map__57008 = com.fulcrologic.fulcro.components.component_options(this$);
var map__57008__$1 = (((((!((map__57008 == null))))?(((((map__57008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57008):map__57008);
var componentDidMount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57008__$1,new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936));
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(this$);
var index_component_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"index-component!","index-component!",-1202750708));
(index_component_BANG_.cljs$core$IFn$_invoke$arity$1 ? index_component_BANG_.cljs$core$IFn$_invoke$arity$1(this$) : index_component_BANG_.call(null,this$));

if(cljs.core.truth_(componentDidMount)){
return (componentDidMount.cljs$core$IFn$_invoke$arity$1 ? componentDidMount.cljs$core$IFn$_invoke$arity$1(this$) : componentDidMount.call(null,this$));
} else {
return null;
}
});
var component_did_update = (function com$fulcrologic$fulcro$components$component_did_update(raw_prev_props,raw_prev_state,snapshot){
var this$ = this;
var map__57010 = com.fulcrologic.fulcro.components.component_options(this$);
var map__57010__$1 = (((((!((map__57010 == null))))?(((((map__57010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57010):map__57010);
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57010__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
var componentDidUpdate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57010__$1,new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981));
var prev_state = goog.object.get(raw_prev_state,"fulcro$state");
var prev_props = com.fulcrologic.fulcro.components.raw__GT_newest_props(raw_prev_props,raw_prev_state);
if(cljs.core.truth_(componentDidUpdate)){
(componentDidUpdate.cljs$core$IFn$_invoke$arity$4 ? componentDidUpdate.cljs$core$IFn$_invoke$arity$4(this$,prev_props,prev_state,snapshot) : componentDidUpdate.call(null,this$,prev_props,prev_state,snapshot));
} else {
}

if(cljs.core.truth_(ident)){
var old_ident = (ident.cljs$core$IFn$_invoke$arity$2 ? ident.cljs$core$IFn$_invoke$arity$2(this$,prev_props) : ident.call(null,this$,prev_props));
var next_ident = (function (){var G__57012 = this$;
var G__57013 = com.fulcrologic.fulcro.components.props(this$);
return (ident.cljs$core$IFn$_invoke$arity$2 ? ident.cljs$core$IFn$_invoke$arity$2(G__57012,G__57013) : ident.call(null,G__57012,G__57013));
})();
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(this$);
var drop_component_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"drop-component!","drop-component!",183893156));
var index_component_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"index-component!","index-component!",-1202750708));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_ident,next_ident)){
(drop_component_BANG_.cljs$core$IFn$_invoke$arity$2 ? drop_component_BANG_.cljs$core$IFn$_invoke$arity$2(this$,old_ident) : drop_component_BANG_.call(null,this$,old_ident));

return (index_component_BANG_.cljs$core$IFn$_invoke$arity$1 ? index_component_BANG_.cljs$core$IFn$_invoke$arity$1(this$) : index_component_BANG_.call(null,this$));
} else {
return null;
}
} else {
return null;
}
});
var should_component_update_QMARK_ = (function com$fulcrologic$fulcro$components$should_component_update_QMARK_(raw_next_props,raw_next_state){
if(cljs.core.truth_(com.fulcrologic.fulcro.components._STAR_blindly_render_STAR_)){
return true;
} else {
var this$ = this;
var current_props = com.fulcrologic.fulcro.components.props(this$);
var next_props = com.fulcrologic.fulcro.components.raw__GT_newest_props(raw_next_props,raw_next_state);
var next_state = goog.object.get(raw_next_state,"fulcro$state");
var current_state = goog.object.getValueByKeys(this$,"state","fulcro$state");
var props_changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props,next_props);
var state_changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_state,next_state);
var next_children = goog.object.get(raw_next_props,"children");
var children_changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(goog.object.getValueByKeys(this$,"props","children"),next_children);
return ((props_changed_QMARK_) || (state_changed_QMARK_) || (children_changed_QMARK_));
}
});
var wrap_props_handler = (function() {
var com$fulcrologic$fulcro$components$wrap_props_handler = null;
var com$fulcrologic$fulcro$components$wrap_props_handler__1 = (function (handler){
return com$fulcrologic$fulcro$components$wrap_props_handler.cljs$core$IFn$_invoke$arity$2(handler,true);
});
var com$fulcrologic$fulcro$components$wrap_props_handler__2 = (function (handler,check_for_fresh_props_in_state_QMARK_){
return (function (raw_props){
var this$ = this;
var raw_state = this$.state;
var props = (cljs.core.truth_(check_for_fresh_props_in_state_QMARK_)?com.fulcrologic.fulcro.components.raw__GT_newest_props(raw_props,raw_state):goog.object.get(raw_props,"fulcro$props"));
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(this$,props) : handler.call(null,this$,props));
});
});
com$fulcrologic$fulcro$components$wrap_props_handler = function(handler,check_for_fresh_props_in_state_QMARK_){
switch(arguments.length){
case 1:
return com$fulcrologic$fulcro$components$wrap_props_handler__1.call(this,handler);
case 2:
return com$fulcrologic$fulcro$components$wrap_props_handler__2.call(this,handler,check_for_fresh_props_in_state_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$fulcro$components$wrap_props_handler.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$fulcro$components$wrap_props_handler__1;
com$fulcrologic$fulcro$components$wrap_props_handler.cljs$core$IFn$_invoke$arity$2 = com$fulcrologic$fulcro$components$wrap_props_handler__2;
return com$fulcrologic$fulcro$components$wrap_props_handler;
})()
;
var wrap_this = (function com$fulcrologic$fulcro$components$wrap_this(handler){
return (function() { 
var G__57157__delegate = function (args){
var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(handler,this$,args);
};
var G__57157 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57158__i = 0, G__57158__a = new Array(arguments.length -  0);
while (G__57158__i < G__57158__a.length) {G__57158__a[G__57158__i] = arguments[G__57158__i + 0]; ++G__57158__i;}
  args = new cljs.core.IndexedSeq(G__57158__a,0,null);
} 
return G__57157__delegate.call(this,args);};
G__57157.cljs$lang$maxFixedArity = 0;
G__57157.cljs$lang$applyTo = (function (arglist__57159){
var args = cljs.core.seq(arglist__57159);
return G__57157__delegate(args);
});
G__57157.cljs$core$IFn$_invoke$arity$variadic = G__57157__delegate;
return G__57157;
})()
;
});
var wrap_base_render = (function com$fulcrologic$fulcro$components$wrap_base_render(render){
return (function() { 
var G__57160__delegate = function (args){
var this$ = this;
var temp__5733__auto__ = com.fulcrologic.fulcro.components.any__GT_app(this$);
if(cljs.core.truth_(temp__5733__auto__)){
var app__$1 = temp__5733__auto__;
var _STAR_app_STAR__orig_val__57014 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_depth_STAR__orig_val__57015 = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57016 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_query_state_STAR__orig_val__57017 = com.fulcrologic.fulcro.components._STAR_query_state_STAR_;
var _STAR_parent_STAR__orig_val__57018 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_app_STAR__temp_val__57019 = app__$1;
var _STAR_depth_STAR__temp_val__57020 = (com.fulcrologic.fulcro.components.depth(this$) + (1));
var _STAR_shared_STAR__temp_val__57021 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(this$);
var _STAR_query_state_STAR__temp_val__57022 = cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1));
var _STAR_parent_STAR__temp_val__57023 = this$;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__57019);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57020);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57021);

(com.fulcrologic.fulcro.components._STAR_query_state_STAR_ = _STAR_query_state_STAR__temp_val__57022);

(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57023);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render,this$,args);
}finally {(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57018);

(com.fulcrologic.fulcro.components._STAR_query_state_STAR_ = _STAR_query_state_STAR__orig_val__57017);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57016);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57015);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__57014);
}} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"fatal","fatal",1874419888),"com.fulcrologic.fulcro.components",null,354,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot find app on component!"], null);
}),null)),null,645936844);
}
};
var G__57160 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57161__i = 0, G__57161__a = new Array(arguments.length -  0);
while (G__57161__i < G__57161__a.length) {G__57161__a[G__57161__i] = arguments[G__57161__i + 0]; ++G__57161__i;}
  args = new cljs.core.IndexedSeq(G__57161__a,0,null);
} 
return G__57160__delegate.call(this,args);};
G__57160.cljs$lang$maxFixedArity = 0;
G__57160.cljs$lang$applyTo = (function (arglist__57162){
var args = cljs.core.seq(arglist__57162);
return G__57160__delegate(args);
});
G__57160.cljs$core$IFn$_invoke$arity$variadic = G__57160__delegate;
return G__57160;
})()
;
});
var component_will_unmount = (function com$fulcrologic$fulcro$components$component_will_unmount(){
var this$ = this;
var map__57024 = com.fulcrologic.fulcro.components.component_options(this$);
var map__57024__$1 = (((((!((map__57024 == null))))?(((((map__57024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57024):map__57024);
var componentWillUnmount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57024__$1,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814));
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(this$);
var drop_component_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"drop-component!","drop-component!",183893156));
if(cljs.core.truth_(componentWillUnmount)){
(componentWillUnmount.cljs$core$IFn$_invoke$arity$1 ? componentWillUnmount.cljs$core$IFn$_invoke$arity$1(this$) : componentWillUnmount.call(null,this$));
} else {
}

goog.object.set(this$,"fulcro$mounted",false);

return (drop_component_BANG_.cljs$core$IFn$_invoke$arity$1 ? drop_component_BANG_.cljs$core$IFn$_invoke$arity$1(this$) : drop_component_BANG_.call(null,this$));
});
/**
 * Configure the given `cls` (a function) to act as a react component within the Fulcro ecosystem.
 * 
 *  cls - A js function (in clj, this is ignored)
 *  fqkw - A keyword that shares the exact fully-qualified name of the component class
 *  options - A component options map (no magic) containing things like `:query` and `:ident`.
 * 
 * 
 *  NOTE: the `options` map expects proper function signatures for:
 * 
 *  `:query` - (fn [this] ...)
 *  `:ident` - (fn [this props] ...)
 *  `:initial-state` - (fn [cls params] ...)
 * 
 *  Returns (and registers) a new react class.
 *  
 */
com.fulcrologic.fulcro.components.configure_component_BANG_ = (function com$fulcrologic$fulcro$components$configure_component_BANG_(cls,fqkw,options){
var map__57026 = options;
var map__57026__$1 = (((((!((map__57026 == null))))?(((((map__57026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57026):map__57026);
var initLocalState = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57026__$1,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
var componentWillMount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57026__$1,new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619));
var componentDidCatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57026__$1,new cljs.core.Keyword(null,"componentDidCatch","componentDidCatch",821717733));
var UNSAFE_componentWillMount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57026__$1,new cljs.core.Keyword(null,"UNSAFE_componentWillMount","UNSAFE_componentWillMount",1700079910));
var getSnapshotBeforeUpdate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57026__$1,new cljs.core.Keyword(null,"getSnapshotBeforeUpdate","getSnapshotBeforeUpdate",861122184));
var UNSAFE_componentWillUpdate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57026__$1,new cljs.core.Keyword(null,"UNSAFE_componentWillUpdate","UNSAFE_componentWillUpdate",-271932214));
var getDerivedStateFromProps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57026__$1,new cljs.core.Keyword(null,"getDerivedStateFromProps","getDerivedStateFromProps",-991834739));
var getDerivedStateFromError = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57026__$1,new cljs.core.Keyword(null,"getDerivedStateFromError","getDerivedStateFromError",166658477));
var componentWillReceiveProps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57026__$1,new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974));
var shouldComponentUpdate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57026__$1,new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57026__$1,new cljs.core.Keyword(null,"render","render",-1408033454));
var componentWillUpdate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57026__$1,new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932));
var UNSAFE_componentWillReceiveProps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57026__$1,new cljs.core.Keyword(null,"UNSAFE_componentWillReceiveProps","UNSAFE_componentWillReceiveProps",349396983));
var name = clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.namespace(fqkw),cljs.core.name(fqkw)], null));
var js_instance_props = cljs.core.clj__GT_js((function (){var G__57028 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),component_did_mount,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),component_will_unmount,new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),component_did_update,new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(cljs.core.truth_(shouldComponentUpdate)?wrap_props_state_handler(shouldComponentUpdate):should_component_update_QMARK_),new cljs.core.Keyword(null,"fulcro$isComponent","fulcro$isComponent",2094954844),true,new cljs.core.Keyword(null,"type","type",1174270348),cls,new cljs.core.Keyword(null,"displayName","displayName",-809144601),name], null);
var G__57028__$1 = (cljs.core.truth_(render)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57028,new cljs.core.Keyword(null,"render","render",-1408033454),wrap_base_render(render)):G__57028);
var G__57028__$2 = (cljs.core.truth_(getSnapshotBeforeUpdate)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57028__$1,new cljs.core.Keyword(null,"getSnapshotBeforeUpdate","getSnapshotBeforeUpdate",861122184),wrap_props_state_handler(getSnapshotBeforeUpdate)):G__57028__$1);
var G__57028__$3 = (cljs.core.truth_(componentDidCatch)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57028__$2,new cljs.core.Keyword(null,"componentDidCatch","componentDidCatch",821717733),wrap_this(componentDidCatch)):G__57028__$2);
var G__57028__$4 = (cljs.core.truth_(UNSAFE_componentWillMount)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57028__$3,new cljs.core.Keyword(null,"UNSAFE_componentWillMount","UNSAFE_componentWillMount",1700079910),wrap_this(UNSAFE_componentWillMount)):G__57028__$3);
var G__57028__$5 = (cljs.core.truth_(UNSAFE_componentWillUpdate)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57028__$4,new cljs.core.Keyword(null,"UNSAFE_componentWillUpdate","UNSAFE_componentWillUpdate",-271932214),wrap_props_state_handler(UNSAFE_componentWillUpdate)):G__57028__$4);
var G__57028__$6 = (cljs.core.truth_(UNSAFE_componentWillReceiveProps)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57028__$5,new cljs.core.Keyword(null,"UNSAFE_componentWillReceiveProps","UNSAFE_componentWillReceiveProps",349396983),wrap_props_handler(UNSAFE_componentWillReceiveProps)):G__57028__$5);
var G__57028__$7 = (cljs.core.truth_(componentWillMount)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57028__$6,new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),wrap_this(componentWillMount)):G__57028__$6);
var G__57028__$8 = (cljs.core.truth_(componentWillUpdate)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57028__$7,new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),wrap_this(componentWillUpdate)):G__57028__$7);
var G__57028__$9 = (cljs.core.truth_(componentWillReceiveProps)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57028__$8,new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),wrap_props_handler(componentWillReceiveProps)):G__57028__$8);
if(cljs.core.truth_(initLocalState)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57028__$9,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876),wrap_this(initLocalState));
} else {
return G__57028__$9;
}
})());
var statics = (function (){var G__57029 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"displayName","displayName",-809144601),name,new cljs.core.Keyword(null,"fulcro$class","fulcro$class",-1213203837),cls,new cljs.core.Keyword(null,"cljs$lang$type","cljs$lang$type",2136418717),true,new cljs.core.Keyword(null,"cljs$lang$ctorStr","cljs$lang$ctorStr",1406571315),name,new cljs.core.Keyword(null,"cljs$lang$ctorPrWriter","cljs$lang$ctorPrWriter",-112192216),(function (_,writer,___$1){
return cljs.core._write(writer,name);
})], null);
var G__57029__$1 = (cljs.core.truth_(getDerivedStateFromError)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57029,new cljs.core.Keyword(null,"getDerivedStateFromError","getDerivedStateFromError",166658477),getDerivedStateFromError):G__57029);
if(cljs.core.truth_(getDerivedStateFromProps)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57029__$1,new cljs.core.Keyword(null,"getDerivedStateFromProps","getDerivedStateFromProps",-991834739),static_wrap_props_state_handler(getDerivedStateFromProps));
} else {
return G__57029__$1;
}
})();
goog.object.extend(cls.prototype,React.Component.prototype,js_instance_props,({"fulcro$options": options}));

goog.object.extend(cls,cljs.core.clj__GT_js(statics),({"fulcro$options": options}));

goog.object.set(cls,"fulcro$registryKey",fqkw);

return com.fulcrologic.fulcro.components.register_component_BANG_(fqkw,cls);
});
/**
 * Returns true if the given component instance is mounted on the DOM.
 */
com.fulcrologic.fulcro.components.mounted_QMARK_ = (function com$fulcrologic$fulcro$components$mounted_QMARK_(this$){
return goog.object.get(this$,"fulcro$mounted",false);
});
/**
 * Set React component-local state.  The `new-state` is actually merged with the existing state (as per React docs),
 *   but is wrapped so that cljs maps are used (instead of js objs).  `callback` is an optional callback that will be
 *   called as per the React docs on setState.
 */
com.fulcrologic.fulcro.components.set_state_BANG_ = (function com$fulcrologic$fulcro$components$set_state_BANG_(var_args){
var G__57031 = arguments.length;
switch (G__57031) {
case 3:
return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,callback){
if(cljs.core.truth_(com.fulcrologic.fulcro.components.mounted_QMARK_(component))){
return component.setState((function (prev_state,props){
return ({"fulcro$state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([goog.object.get(prev_state,"fulcro$state"),new_state], 0))});
}),callback);
} else {
return null;
}
}));

(com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(component,new_state,null);
}));

(com.fulcrologic.fulcro.components.set_state_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state. NOTE: This is Fulcro's wrapped component
 * local state. The low-level React state is as described in the React docs (e.g. `(.-state this)`).
 */
com.fulcrologic.fulcro.components.get_state = (function com$fulcrologic$fulcro$components$get_state(var_args){
var G__57033 = arguments.length;
switch (G__57033) {
case 1:
return com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentVector.EMPTY);
}));

(com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
var cst = goog.object.getValueByKeys(component,"state","fulcro$state");
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cst,((cljs.core.sequential_QMARK_(k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
}));

(com.fulcrologic.fulcro.components.get_state.cljs$lang$maxFixedArity = 2);

var update_fn_57186 = (function (component,f,args){
return component.setState((function (prev_state,props){
return ({"fulcro$state": cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,goog.object.get(prev_state,"fulcro$state"),args)});
}));
});
/**
 * Update a component's local state. Similar to Clojure(Script)'s swap!
 * 
 *  This function affects a managed cljs map maintained in React state.  If you want to affect the low-level
 *  js state itself use React's own `.setState` directly on the component.
 */
com.fulcrologic.fulcro.components.update_state_BANG_ = (function com$fulcrologic$fulcro$components$update_state_BANG_(var_args){
var G__57038 = arguments.length;
switch (G__57038) {
case 2:
return com.fulcrologic.fulcro.components.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___57188 = arguments.length;
var i__4731__auto___57189 = (0);
while(true){
if((i__4731__auto___57189 < len__4730__auto___57188)){
args_arr__4751__auto__.push((arguments[i__4731__auto___57189]));

var G__57190 = (i__4731__auto___57189 + (1));
i__4731__auto___57189 = G__57190;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.components.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

(com.fulcrologic.fulcro.components.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return update_fn_57186(component,f,cljs.core.PersistentVector.EMPTY);
}));

(com.fulcrologic.fulcro.components.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,args){
return update_fn_57186(component,f,args);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.components.update_state_BANG_.cljs$lang$applyTo = (function (seq57035){
var G__57036 = cljs.core.first(seq57035);
var seq57035__$1 = cljs.core.next(seq57035);
var G__57037 = cljs.core.first(seq57035__$1);
var seq57035__$2 = cljs.core.next(seq57035__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57036,G__57037,seq57035__$2);
}));

(com.fulcrologic.fulcro.components.update_state_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Get the declared :initial-state value for a component.
 */
com.fulcrologic.fulcro.components.get_initial_state = (function com$fulcrologic$fulcro$components$get_initial_state(var_args){
var G__57040 = arguments.length;
switch (G__57040) {
case 1:
return com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$1 = (function (class$){
var G__57041 = com.fulcrologic.fulcro.components.initial_state(class$,cljs.core.PersistentArrayMap.EMPTY);
if((G__57041 == null)){
return null;
} else {
return cljs.core.with_meta(G__57041,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"computed","computed",-1482016762),true], null));
}
}));

(com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 = (function (class$,params){
var G__57042 = com.fulcrologic.fulcro.components.initial_state(class$,params);
if((G__57042 == null)){
return null;
} else {
return cljs.core.with_meta(G__57042,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"computed","computed",-1482016762),true], null));
}
}));

(com.fulcrologic.fulcro.components.get_initial_state.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if the given initial state was returned from a call to get-initial-state. This is used by internal
 *   algorithms when interpreting initial state shorthand in `defsc`.
 */
com.fulcrologic.fulcro.components.computed_initial_state_QMARK_ = (function com$fulcrologic$fulcro$components$computed_initial_state_QMARK_(s){
if(cljs.core.map_QMARK_(s)){
var G__57044 = s;
var G__57044__$1 = (((G__57044 == null))?null:cljs.core.meta(G__57044));
if((G__57044__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"computed","computed",-1482016762).cljs$core$IFn$_invoke$arity$1(G__57044__$1);
}
} else {
return false;
}
});
/**
 * Get the ident for a mounted component OR using a component class.
 * 
 *   That arity-2 will return the ident using the supplied props map.
 * 
 *   The single-arity version should only be used with a mounted component (e.g. `this` from `render`), and will derive the
 *   props that were sent to it most recently.
 */
com.fulcrologic.fulcro.components.get_ident = (function com$fulcrologic$fulcro$components$get_ident(var_args){
var G__57046 = arguments.length;
switch (G__57046) {
case 1:
return com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(com.fulcrologic.fulcro.components.component_instance_QMARK_(x)){
} else {
throw (new Error("Assert failed: (component-instance? x)"));
}

var temp__5733__auto__ = com.fulcrologic.fulcro.components.props(x);
if(cljs.core.truth_(temp__5733__auto__)){
var m = temp__5733__auto__;
return com.fulcrologic.fulcro.components.ident(x,m);
} else {
if(cljs.core.truth_(goog.DEBUG)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.components",null,496,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["get-ident was invoked on ",com.fulcrologic.fulcro.components.component_name(x)," with nil props (this could mean it wasn't yet mounted): ",x], null);
}),null)),null,-256273417);
} else {
return null;
}
}
}));

(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 = (function (class$,props){
var temp__5733__auto__ = com.fulcrologic.fulcro.components.ident(class$,props);
if(cljs.core.truth_(temp__5733__auto__)){
var id = temp__5733__auto__;
if(cljs.core.truth_((function (){var and__4109__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__4109__auto__)){
return (!(edn_query_language.core.ident_QMARK_(id)));
} else {
return and__4109__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.components",null,501,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["get-ident returned an invalid ident:",id,new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.component_options(class$))], null);
}),null)),null,-753058407);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437),cljs.core.second(id))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(id),null], null);
} else {
return id;
}
} else {
if(cljs.core.truth_(goog.DEBUG)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.components",null,504,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["get-ident called with something that is either not a class or does not implement ident: ",class$], null);
}),null)),null,1887845451);

return null;
} else {
return null;
}
}
}));

(com.fulcrologic.fulcro.components.get_ident.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if the given argument is a component factory.
 */
com.fulcrologic.fulcro.components.is_factory_QMARK_ = (function com$fulcrologic$fulcro$components$is_factory_QMARK_(class_or_factory){
return ((cljs.core.fn_QMARK_(class_or_factory)) && (cljs.core.contains_QMARK_(cljs.core.meta(class_or_factory),new cljs.core.Keyword(null,"qualifier","qualifier",125841738))));
});
/**
 * Returns a string ID for the query of the given class with qualifier.
 */
com.fulcrologic.fulcro.components.query_id = (function com$fulcrologic$fulcro$components$query_id(class$,qualifier){
if((class$ == null)){
if(cljs.core.truth_(goog.DEBUG)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.components",null,518,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query ID received no class (if you see this warning, it probably means metadata was lost on your query)",cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY)], null);
}),null)),null,-648431328);
} else {
return null;
}
} else {
var temp__5735__auto__ = com.fulcrologic.fulcro.components.component_name(class$);
if(cljs.core.truth_(temp__5735__auto__)){
var classname = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(classname),(cljs.core.truth_(qualifier)?["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qualifier)].join(''):null)].join('');
} else {
return null;
}
}
});
/**
 * Takes a state map that may contain normalized queries and a query ID. Returns the stored query or nil.
 */
com.fulcrologic.fulcro.components.denormalize_query = (function com$fulcrologic$fulcro$components$denormalize_query(state_map,ID){
var get_stored_query = (function (id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452),id,new cljs.core.Keyword(null,"query","query",-1288509510)], null));
});
var temp__5735__auto__ = get_stored_query(ID);
if(cljs.core.truth_(temp__5735__auto__)){
var normalized_query = temp__5735__auto__;
return clojure.walk.prewalk((function (ele){
var temp__5733__auto__ = ((typeof ele === 'string')?get_stored_query(ele):false);
if(cljs.core.truth_(temp__5733__auto__)){
var q = temp__5733__auto__;
return q;
} else {
return ele;
}
}),normalized_query);
} else {
return null;
}
});
/**
 * Get the query id that is cached in the component's props.
 */
com.fulcrologic.fulcro.components.get_query_id = (function com$fulcrologic$fulcro$components$get_query_id(component){
return com.fulcrologic.fulcro.components.get_raw_react_prop(component,"fulcro$queryid");
});
com.fulcrologic.fulcro.components.get_query_by_id = (function com$fulcrologic$fulcro$components$get_query_by_id(state_map,class$,queryid){
var query = (function (){var or__4120__auto__ = com.fulcrologic.fulcro.components.denormalize_query(state_map,queryid);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return com.fulcrologic.fulcro.components.query(class$);
}
})();
return cljs.core.with_meta(query,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),class$,new cljs.core.Keyword(null,"queryid","queryid",-271432056),queryid], null));
});
/**
 * Get the query for the given class or factory. If called without a state map, then you'll get the declared static
 *   query of the class. If a state map is supplied, then the dynamically set queries in that state will result in
 *   the current dynamically-set query according to that state.
 */
com.fulcrologic.fulcro.components.get_query = (function com$fulcrologic$fulcro$components$get_query(var_args){
var G__57048 = arguments.length;
switch (G__57048) {
case 1:
return com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1 = (function (class_or_factory){
return com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(class_or_factory,(function (){var or__4120__auto__ = com.fulcrologic.fulcro.components._STAR_query_state_STAR_;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
}));

(com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2 = (function (class_or_factory,state_map){
if((class_or_factory == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("nil passed to get-query",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var _STAR_query_state_STAR__orig_val__57049 = com.fulcrologic.fulcro.components._STAR_query_state_STAR_;
var _STAR_query_state_STAR__temp_val__57050 = state_map;
(com.fulcrologic.fulcro.components._STAR_query_state_STAR_ = _STAR_query_state_STAR__temp_val__57050);

try{var class$ = ((com.fulcrologic.fulcro.components.is_factory_QMARK_(class_or_factory))?new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(class_or_factory)):((com.fulcrologic.fulcro.components.component_instance_QMARK_(class_or_factory))?com.fulcrologic.fulcro.components.react_type(class_or_factory):class_or_factory
));
var class$__$1 = (cljs.core.truth_(goog.DEBUG)?com.fulcrologic.fulcro.components.registry_key__GT_class(com.fulcrologic.fulcro.components.class__GT_registry_key(class$)):class$);
var qualifier = ((com.fulcrologic.fulcro.components.is_factory_QMARK_(class_or_factory))?new cljs.core.Keyword(null,"qualifier","qualifier",125841738).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(class_or_factory)):null);
var queryid = ((com.fulcrologic.fulcro.components.component_instance_QMARK_(class_or_factory))?com.fulcrologic.fulcro.components.get_query_id(class_or_factory):com.fulcrologic.fulcro.components.query_id(class$__$1,qualifier));
if(cljs.core.truth_((function (){var and__4109__auto__ = class$__$1;
if(cljs.core.truth_(and__4109__auto__)){
return com.fulcrologic.fulcro.components.has_query_QMARK_(class$__$1);
} else {
return and__4109__auto__;
}
})())){
return com.fulcrologic.fulcro.components.get_query_by_id(state_map,class$__$1,queryid);
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_query_state_STAR_ = _STAR_query_state_STAR__orig_val__57049);
}}));

(com.fulcrologic.fulcro.components.get_query.cljs$lang$maxFixedArity = 2);

/**
 * Build a component's initial state using the defsc initial-state-data from
 *   options, the children from options, and the params from the invocation of get-initial-state.
 */
com.fulcrologic.fulcro.components.make_state_map = (function com$fulcrologic$fulcro$components$make_state_map(initial_state,children_by_query_key,params){
var join_keys = cljs.core.set(cljs.core.keys(children_by_query_key));
var init_keys = cljs.core.set(cljs.core.keys(initial_state));
var is_child_QMARK_ = (function (k){
return cljs.core.contains_QMARK_(join_keys,k);
});
var value_of = (function com$fulcrologic$fulcro$components$make_state_map_$_value_of_STAR_(p__57051){
var vec__57052 = p__57051;
var isk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57052,(0),null);
var isv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57052,(1),null);
var param_name = (function (v){
if((v instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("param",cljs.core.namespace(v))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(v));
} else {
return false;
}
} else {
return false;
}
});
var substitute = (function (ele){
var temp__5733__auto__ = param_name(ele);
if(cljs.core.truth_(temp__5733__auto__)){
var k = temp__5733__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,k);
} else {
return ele;
}
});
var param_key = param_name(isv);
var param_exists_QMARK_ = cljs.core.contains_QMARK_(params,param_key);
var param_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,param_key);
var child_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(children_by_query_key,isk);
if(cljs.core.truth_((function (){var and__4109__auto__ = param_key;
if(cljs.core.truth_(and__4109__auto__)){
return (!(param_exists_QMARK_));
} else {
return and__4109__auto__;
}
})())){
return null;
} else {
if(((cljs.core.map_QMARK_(isv)) && (is_child_QMARK_(isk)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(child_class,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(com$fulcrologic$fulcro$components$make_state_map_$_value_of_STAR_,isv)))], null);
} else {
if(cljs.core.map_QMARK_(isv)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(com$fulcrologic$fulcro$components$make_state_map_$_value_of_STAR_,isv))], null);
} else {
if(((cljs.core.vector_QMARK_(isv)) && (is_child_QMARK_(isk)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (m){
return com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(child_class,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(com$fulcrologic$fulcro$components$make_state_map_$_value_of_STAR_,m)));
}),isv)], null);
} else {
if(((cljs.core.vector_QMARK_(param_value)) && (is_child_QMARK_(isk)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (params__$1){
if(cljs.core.truth_(com.fulcrologic.fulcro.components.computed_initial_state_QMARK_(params__$1))){
return params__$1;
} else {
return com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(child_class,params__$1);
}
}),param_value)], null);
} else {
if(cljs.core.vector_QMARK_(isv)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (ele){
return substitute(ele);
}),isv)], null);
} else {
if(cljs.core.truth_((function (){var and__4109__auto__ = param_key;
if(cljs.core.truth_(and__4109__auto__)){
return ((is_child_QMARK_(isk)) && (param_exists_QMARK_));
} else {
return and__4109__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,(cljs.core.truth_(com.fulcrologic.fulcro.components.computed_initial_state_QMARK_(param_value))?param_value:com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(child_class,param_value))], null);
} else {
if(cljs.core.truth_(param_key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,param_value], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [isk,isv], null);

}
}
}
}
}
}
}
}
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(value_of,initial_state));
});
/**
 * Run `real-render`, possibly through :render-middleware configured on your app.
 */
com.fulcrologic.fulcro.components.wrapped_render = (function com$fulcrologic$fulcro$components$wrapped_render(this$,real_render){
var app__$1 = goog.object.getValueByKeys(this$,"props","fulcro$app");
var render_middleware = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"render-middleware","render-middleware",1183628797));
if(cljs.core.truth_(render_middleware)){
return (render_middleware.cljs$core$IFn$_invoke$arity$2 ? render_middleware.cljs$core$IFn$_invoke$arity$2(this$,real_render) : render_middleware.call(null,this$,real_render));
} else {
return (real_render.cljs$core$IFn$_invoke$arity$0 ? real_render.cljs$core$IFn$_invoke$arity$0() : real_render.call(null));
}
});
/**
 * Create a react element for a Fulcro class.  In CLJ this returns the same thing as a mounted instance, whereas in CLJS it is an
 *   element (which has yet to instantiate an instance).
 */
com.fulcrologic.fulcro.components.create_element = (function com$fulcrologic$fulcro$components$create_element(class$,props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,class$,props,com.fulcrologic.fulcro.components.force_children(children));
});
/**
 * Create a factory constructor from a component class created with
 * defsc.
 */
com.fulcrologic.fulcro.components.factory = (function com$fulcrologic$fulcro$components$factory(var_args){
var G__57056 = arguments.length;
switch (G__57056) {
case 1:
return com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(class$,null);
}));

(com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__57057){
var map__57058 = p__57057;
var map__57058__$1 = (((((!((map__57058 == null))))?(((((map__57058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57058):map__57058);
var opts = map__57058__$1;
var keyfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57058__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332));
var qualifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57058__$1,new cljs.core.Keyword(null,"qualifier","qualifier",125841738));
var qid = com.fulcrologic.fulcro.components.query_id(class$,qualifier);
return cljs.core.with_meta((function() { 
var com$fulcrologic$fulcro$components$element_factory__delegate = function (props,children){
var key = new cljs.core.Keyword(null,"react-key","react-key",1337881348).cljs$core$IFn$_invoke$arity$1(props);
var key__$1 = (cljs.core.truth_(key)?key:(cljs.core.truth_(keyfn)?(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(props) : keyfn.call(null,props)):null));
var ref = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__57060 = ref;
if((ref instanceof cljs.core.Keyword)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57060);
} else {
return G__57060;
}
})();
var props_middleware = (function (){var G__57061 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if((G__57061 == null)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(G__57061,new cljs.core.Keyword(null,"props-middleware","props-middleware",358176739));
}
})();
var props__$1 = ({"fulcro$value": props, "fulcro$queryid": qid, "fulcro$app": com.fulcrologic.fulcro.components._STAR_app_STAR_, "fulcro$shared": com.fulcrologic.fulcro.components._STAR_shared_STAR_, "fulcro$parent": com.fulcrologic.fulcro.components._STAR_parent_STAR_, "fulcro$depth": com.fulcrologic.fulcro.components._STAR_depth_STAR_});
var props__$2 = (cljs.core.truth_(props_middleware)?(props_middleware.cljs$core$IFn$_invoke$arity$2 ? props_middleware.cljs$core$IFn$_invoke$arity$2(class$,props__$1) : props_middleware.call(null,class$,props__$1)):props__$1);
if(cljs.core.truth_(key__$1)){
goog.object.set(props__$2,"key",key__$1);
} else {
}

if(cljs.core.truth_(ref__$1)){
goog.object.set(props__$2,"ref",ref__$1);
} else {
}

if(cljs.core.truth_(goog.DEBUG)){
if((com.fulcrologic.fulcro.components._STAR_app_STAR_ == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.components",null,682,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A Fulcro component was rendered outside of a parent context. This probably means you are using a library that has you pass rendering code to it as a lambda. Use `with-parent-context` to fix this."], null);
}),null)),null,-1444721028);
} else {
}

if(((cljs.core.map_QMARK_(key__$1)) || (cljs.core.vector_QMARK_(key__$1)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.components",null,684,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["React key for ",com.fulcrologic.fulcro.components.component_name(class$)," is not a simple scalar value. This could cause spurious component remounts."], null);
}),null)),null,1529855761);
} else {
}

if(typeof ref__$1 === 'string'){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.components",null,687,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String ref on ",com.fulcrologic.fulcro.components.component_name(class$)," should be a function."], null);
}),null)),null,1081912426);
} else {
}

if((((props__$2 == null)) || (cljs.core.not(goog.object.containsKey(props__$2,"fulcro$value"))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.components",null,690,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Props middleware seems to have the corrupted props for ",com.fulcrologic.fulcro.components.component_name(class$)], null);
}),null)),null,-589563139);
} else {
}
} else {
}

return com.fulcrologic.fulcro.components.create_element(class$,props__$2,children);
};
var com$fulcrologic$fulcro$components$element_factory = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__57221__i = 0, G__57221__a = new Array(arguments.length -  1);
while (G__57221__i < G__57221__a.length) {G__57221__a[G__57221__i] = arguments[G__57221__i + 1]; ++G__57221__i;}
  children = new cljs.core.IndexedSeq(G__57221__a,0,null);
} 
return com$fulcrologic$fulcro$components$element_factory__delegate.call(this,props,children);};
com$fulcrologic$fulcro$components$element_factory.cljs$lang$maxFixedArity = 1;
com$fulcrologic$fulcro$components$element_factory.cljs$lang$applyTo = (function (arglist__57222){
var props = cljs.core.first(arglist__57222);
var children = cljs.core.rest(arglist__57222);
return com$fulcrologic$fulcro$components$element_factory__delegate(props,children);
});
com$fulcrologic$fulcro$components$element_factory.cljs$core$IFn$_invoke$arity$variadic = com$fulcrologic$fulcro$components$element_factory__delegate;
return com$fulcrologic$fulcro$components$element_factory;
})()
,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"queryid","queryid",-271432056),qid,new cljs.core.Keyword(null,"qualifier","qualifier",125841738),qualifier], null));
}));

(com.fulcrologic.fulcro.components.factory.cljs$lang$maxFixedArity = 2);

/**
 * Similar to factory, but returns a function with the signature
 *   [props computed & children] instead of default [props & children].
 *   This makes easier to send computed.
 */
com.fulcrologic.fulcro.components.computed_factory = (function com$fulcrologic$fulcro$components$computed_factory(var_args){
var G__57063 = arguments.length;
switch (G__57063) {
case 1:
return com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$2(class$,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,options){
var real_factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(class$,options);
return (function() {
var G__57226 = null;
var G__57226__1 = (function (props){
return (real_factory.cljs$core$IFn$_invoke$arity$1 ? real_factory.cljs$core$IFn$_invoke$arity$1(props) : real_factory.call(null,props));
});
var G__57226__2 = (function (props,computed_props){
var G__57064 = com.fulcrologic.fulcro.components.computed(props,computed_props);
return (real_factory.cljs$core$IFn$_invoke$arity$1 ? real_factory.cljs$core$IFn$_invoke$arity$1(G__57064) : real_factory.call(null,G__57064));
});
var G__57226__3 = (function() { 
var G__57227__delegate = function (props,computed_props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,com.fulcrologic.fulcro.components.computed(props,computed_props),children);
};
var G__57227 = function (props,computed_props,var_args){
var children = null;
if (arguments.length > 2) {
var G__57228__i = 0, G__57228__a = new Array(arguments.length -  2);
while (G__57228__i < G__57228__a.length) {G__57228__a[G__57228__i] = arguments[G__57228__i + 2]; ++G__57228__i;}
  children = new cljs.core.IndexedSeq(G__57228__a,0,null);
} 
return G__57227__delegate.call(this,props,computed_props,children);};
G__57227.cljs$lang$maxFixedArity = 2;
G__57227.cljs$lang$applyTo = (function (arglist__57230){
var props = cljs.core.first(arglist__57230);
arglist__57230 = cljs.core.next(arglist__57230);
var computed_props = cljs.core.first(arglist__57230);
var children = cljs.core.rest(arglist__57230);
return G__57227__delegate(props,computed_props,children);
});
G__57227.cljs$core$IFn$_invoke$arity$variadic = G__57227__delegate;
return G__57227;
})()
;
G__57226 = function(props,computed_props,var_args){
var children = var_args;
switch(arguments.length){
case 1:
return G__57226__1.call(this,props);
case 2:
return G__57226__2.call(this,props,computed_props);
default:
var G__57233 = null;
if (arguments.length > 2) {
var G__57234__i = 0, G__57234__a = new Array(arguments.length -  2);
while (G__57234__i < G__57234__a.length) {G__57234__a[G__57234__i] = arguments[G__57234__i + 2]; ++G__57234__i;}
G__57233 = new cljs.core.IndexedSeq(G__57234__a,0,null);
}
return G__57226__3.cljs$core$IFn$_invoke$arity$variadic(props,computed_props, G__57233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__57226.cljs$lang$maxFixedArity = 2;
G__57226.cljs$lang$applyTo = G__57226__3.cljs$lang$applyTo;
G__57226.cljs$core$IFn$_invoke$arity$1 = G__57226__1;
G__57226.cljs$core$IFn$_invoke$arity$2 = G__57226__2;
G__57226.cljs$core$IFn$_invoke$arity$variadic = G__57226__3.cljs$core$IFn$_invoke$arity$variadic;
return G__57226;
})()
}));

(com.fulcrologic.fulcro.components.computed_factory.cljs$lang$maxFixedArity = 2);

/**
 * Submit a transaction for processing.
 * 
 *   The underlying transaction system is pluggable, but the default supported options are:
 * 
 *   - `:optimistic?` - boolean. Should the transaction be processed optimistically?
 *   - `:ref` - ident. The ident of the component used to submit this transaction. This is set automatically if you use a component to call this function.
 *   - `:component` - React element. Set automatically if you call this function using a component.
 *   - `:refresh` - Vector containing idents (of components) and keywords (of props). Things that have changed and should be re-rendered
 *  on screen. Only necessary when the underlying rendering algorithm won't auto-detect, such as when UI is derived from the
 *  state of other components or outside of the directly queried props. Interpretation depends on the renderer selected:
 *  The ident-optimized render treats these as "extras".
 *   - `:only-refresh` - Vector of idents/keywords.  If the underlying rendering configured algorithm supports it: The
 *  components using these are the *only* things that will be refreshed in the UI.
 *  This can be used to avoid the overhead of looking for stale data when you know exactly what
 *  you want to refresh on screen as an extra optimization. Idents are *not* checked against queries.
 *   - `:abort-id` - An ID (you make up) that makes it possible (if the plugins you're using support it) to cancel
 *  the network portion of the transaction (assuming it has not already completed).
 *   - `:compressible?` - boolean. Check compressible-transact! docs.
 * 
 *   NOTE: This function calls the application's `tx!` function (which is configurable). Fulcro 2 'follow-on reads' are
 *   supported by the default version and are added to the `:refresh` entries. Your choice of rendering algorithm will
 *   influence their necessity.
 * 
 *   Returns the transaction ID of the submitted transaction.
 *   
 */
com.fulcrologic.fulcro.components.transact_BANG_ = (function com$fulcrologic$fulcro$components$transact_BANG_(var_args){
var G__57066 = arguments.length;
switch (G__57066) {
case 3:
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app_or_component,tx,options){
var temp__5735__auto__ = com.fulcrologic.fulcro.components.any__GT_app(app_or_component);
if(cljs.core.truth_(temp__5735__auto__)){
var app__$1 = temp__5735__auto__;
var tx_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"tx!","tx!",-1308106263));
var options__$1 = (function (){var G__57067 = options;
var G__57067__$1 = (((((new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(options) == null)) && (com.fulcrologic.fulcro.components.has_ident_QMARK_(app_or_component))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57067,new cljs.core.Keyword(null,"ref","ref",1289896967),com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(app_or_component)):G__57067);
if((((new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(options) == null)) && (com.fulcrologic.fulcro.components.component_instance_QMARK_(app_or_component)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57067__$1,new cljs.core.Keyword(null,"component","component",1555936782),app_or_component);
} else {
return G__57067__$1;
}
})();
return (tx_BANG_.cljs$core$IFn$_invoke$arity$3 ? tx_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,tx,options__$1) : tx_BANG_.call(null,app__$1,tx,options__$1));
} else {
return null;
}
}));

(com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app_or_comp,tx){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app_or_comp,tx,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.components.transact_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Part of internal implementation of dynamic queries.
 */
com.fulcrologic.fulcro.components.link_element = (function com$fulcrologic$fulcro$components$link_element(element){
return clojure.walk.prewalk((function com$fulcrologic$fulcro$components$link_element_$_link_element_helper(ele){
var map__57068 = cljs.core.meta(ele);
var map__57068__$1 = (((((!((map__57068 == null))))?(((((map__57068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57068):map__57068);
var queryid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57068__$1,new cljs.core.Keyword(null,"queryid","queryid",-271432056));
if(cljs.core.truth_(queryid)){
return queryid;
} else {
return ele;
}
}),element);
});
/**
 * Part of internal implementation of dynamic queries.
 * 
 *   Determines if there are query elements in the `query` that need to be normalized. If so, it does so.
 * 
 *   Returns the new state map containing potentially-updated normalized queries.
 */
com.fulcrologic.fulcro.components.normalize_query_elements = (function com$fulcrologic$fulcro$components$normalize_query_elements(state_map,query){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function com$fulcrologic$fulcro$components$normalize_query_elements_$_normalize_query_elements_reducer(state,ele){
try{var parameterized_QMARK_ = cljs.core.seq_QMARK_(ele);
var raw_element = ((parameterized_QMARK_)?cljs.core.first(ele):ele);
if(com.fulcrologic.fulcro.algorithms.do_not_use.union_QMARK_(raw_element)){
var union_alternates = cljs.core.first(cljs.core.vals(raw_element));
var union_meta = cljs.core.meta(union_alternates);
var normalized_union_alternates = cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.link_element,union_alternates)),union_meta);
var union_query_id = new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(union_alternates));
if(cljs.core.truth_(union_query_id)){
} else {
throw (new Error(["Assert failed: ","Union query has an ID. Did you use extended get-query?","\n","union-query-id"].join('')));
}

return com.fulcrologic.fulcro.algorithms.do_not_use.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452),cljs.core.PersistentArrayMap.createAsIfByAssoc([union_query_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),normalized_union_alternates,new cljs.core.Keyword(null,"id","id",-1388402092),union_query_id], null)])], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function com$fulcrologic$fulcro$components$normalize_query_elements_$_normalize_query_elements_reducer_$_normalize_union_reducer(s,p__57071){
var vec__57072 = p__57071;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57072,(0),null);
var subquery = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57072,(1),null);
return (com.fulcrologic.fulcro.components.normalize_query.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.normalize_query.cljs$core$IFn$_invoke$arity$2(s,subquery) : com.fulcrologic.fulcro.components.normalize_query.call(null,s,subquery));
}),state,union_alternates)], 0));
} else {
if(((com.fulcrologic.fulcro.algorithms.do_not_use.join_QMARK_(raw_element)) && (com.fulcrologic.fulcro.algorithms.do_not_use.recursion_QMARK_(com.fulcrologic.fulcro.algorithms.do_not_use.join_value(raw_element))))){
return state;
} else {
if(com.fulcrologic.fulcro.algorithms.do_not_use.join_QMARK_(raw_element)){
var G__57075 = state;
var G__57076 = com.fulcrologic.fulcro.algorithms.do_not_use.join_value(raw_element);
return (com.fulcrologic.fulcro.components.normalize_query.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.normalize_query.cljs$core$IFn$_invoke$arity$2(G__57075,G__57076) : com.fulcrologic.fulcro.components.normalize_query.call(null,G__57075,G__57076));
} else {
return state;

}
}
}
}catch (e57070){var e = e57070;
if(cljs.core.truth_(goog.DEBUG)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.components",null,786,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Query normalization failed. Perhaps you tried to set a query with a syntax error?"], null);
}),null)),null,1647247880);
} else {
return null;
}
}}),state_map,query);
});
/**
 * Part of dyn query implementation. Find all of the elements (only at the top level) of the given query and replace them
 *   with their query ID.
 */
com.fulcrologic.fulcro.components.link_query = (function com$fulcrologic$fulcro$components$link_query(query){
var metadata = cljs.core.meta(query);
return cljs.core.with_meta(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.link_element,query),metadata);
});
/**
 * Given a state map and a query, returns a state map with the query normalized into the database. Query fragments
 *   that already appear in the state will not be added.  Part of dynamic query implementation.
 */
com.fulcrologic.fulcro.components.normalize_query = (function com$fulcrologic$fulcro$components$normalize_query(state_map,query){
var new_state = com.fulcrologic.fulcro.components.normalize_query_elements(state_map,query);
var new_state__$1 = (((new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452).cljs$core$IFn$_invoke$arity$1(new_state) == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452),cljs.core.PersistentArrayMap.EMPTY):new_state);
var top_query = com.fulcrologic.fulcro.components.link_query(query);
var temp__5733__auto__ = (function (){var G__57077 = query;
var G__57077__$1 = (((G__57077 == null))?null:cljs.core.meta(G__57077));
if((G__57077__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(G__57077__$1);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var queryid = temp__5733__auto__;
return com.fulcrologic.fulcro.algorithms.do_not_use.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452),cljs.core.PersistentArrayMap.createAsIfByAssoc([queryid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),top_query,new cljs.core.Keyword(null,"id","id",-1388402092),queryid], null)])], null),new_state__$1], 0));
} else {
return new_state__$1;
}
});
/**
 * Put a query in app state.
 * 
 *   NOTE: Indexes must be rebuilt after setting a query, so this function should primarily be used to build
 *   up an initial app state.
 */
com.fulcrologic.fulcro.components.set_query_STAR_ = (function com$fulcrologic$fulcro$components$set_query_STAR_(state_map,class_or_factory,p__57078){
var map__57079 = p__57078;
var map__57079__$1 = (((((!((map__57079 == null))))?(((((map__57079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57079):map__57079);
var args = map__57079__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57079__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var queryid = (((class_or_factory == null))?null:(cljs.core.truth_((function (){var G__57081 = class_or_factory;
var G__57081__$1 = (((G__57081 == null))?null:cljs.core.meta(G__57081));
if((G__57081__$1 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__57081__$1,new cljs.core.Keyword(null,"queryid","queryid",-271432056));
}
})())?(function (){var G__57082 = class_or_factory;
var G__57082__$1 = (((G__57082 == null))?null:cljs.core.meta(G__57082));
if((G__57082__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(G__57082__$1);
}
})():com.fulcrologic.fulcro.components.query_id(class_or_factory,null)
));
var component = (function (){var or__4120__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(class_or_factory));
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return class_or_factory;
}
})();
var setq_STAR_ = (function (state){
return com.fulcrologic.fulcro.components.normalize_query(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword("com.fulcrologic.fulcro.components","queries","com.fulcrologic.fulcro.components/queries",-1435852452),cljs.core.dissoc,queryid),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(query,cljs.core.assoc,new cljs.core.Keyword(null,"queryid","queryid",-271432056),queryid,new cljs.core.Keyword(null,"component","component",1555936782),component));
});
if(typeof queryid === 'string'){
var G__57083 = state_map;
if(cljs.core.contains_QMARK_(args,new cljs.core.Keyword(null,"query","query",-1288509510))){
return setq_STAR_(G__57083);
} else {
return G__57083;
}
} else {
if(cljs.core.truth_(goog.DEBUG)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.components",null,835,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Set query failed. There was no query ID. Use a class or factory for the second argument."], null);
}),null)),null,1777223842);
} else {
}

return state_map;
}
});
/**
 * Public API for setting a dynamic query on a component. This function alters the query and rebuilds internal indexes.
 * 
 *   * `x` : is anything that any->app accepts.
 *   * `class-or-factory` : A component class or factory for that class (if using query qualifiers)
 *   * `opts` : A map with `query` and optionally `params` (substitutions on queries)
 *   
 */
com.fulcrologic.fulcro.components.set_query_BANG_ = (function com$fulcrologic$fulcro$components$set_query_BANG_(x,class_or_factory,p__57084){
var map__57085 = p__57084;
var map__57085__$1 = (((((!((map__57085 == null))))?(((((map__57085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57085):map__57085);
var opts = map__57085__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57085__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57085__$1,new cljs.core.Keyword(null,"params","params",710516235));
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(x);
var state_atom = new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1);
var queryid = ((typeof class_or_factory === 'string')?class_or_factory:(cljs.core.truth_((function (){var G__57087 = class_or_factory;
var G__57087__$1 = (((G__57087 == null))?null:cljs.core.meta(G__57087));
if((G__57087__$1 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__57087__$1,new cljs.core.Keyword(null,"queryid","queryid",-271432056));
}
})())?(function (){var G__57088 = class_or_factory;
var G__57088__$1 = (((G__57088 == null))?null:cljs.core.meta(G__57088));
if((G__57088__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"queryid","queryid",-271432056).cljs$core$IFn$_invoke$arity$1(G__57088__$1);
}
})():com.fulcrologic.fulcro.components.query_id(class_or_factory,null)
));
if(cljs.core.truth_(((typeof queryid === 'string')?(function (){var or__4120__auto__ = query;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return params;
}
})():false))){
var index_root_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"index-root!","index-root!",-981026266));
var schedule_render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,com.fulcrologic.fulcro.components.set_query_STAR_,class_or_factory,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"queryid","queryid",-271432056),queryid,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"params","params",710516235),params], null));

if(cljs.core.truth_(index_root_BANG_)){
(index_root_BANG_.cljs$core$IFn$_invoke$arity$1 ? index_root_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1) : index_root_BANG_.call(null,app__$1));
} else {
}

if(cljs.core.truth_(schedule_render_BANG_)){
var G__57089 = app__$1;
var G__57090 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
return (schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2(G__57089,G__57090) : schedule_render_BANG_.call(null,G__57089,G__57090));
} else {
return null;
}
} else {
if(cljs.core.truth_(goog.DEBUG)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.components",null,859,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to set query. Invalid arguments."], null);
}),null)),null,679029832);
} else {
return null;
}
}
});
/**
 * Get all of the indexes from a component instance or app. See also `ident->any`, `class->any`, etc.
 */
com.fulcrologic.fulcro.components.get_indexes = (function com$fulcrologic$fulcro$components$get_indexes(x){
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(x);
var G__57091 = app__$1;
var G__57091__$1 = (((G__57091 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__57091));
var G__57091__$2 = (((G__57091__$1 == null))?null:cljs.core.deref(G__57091__$1));
if((G__57091__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938).cljs$core$IFn$_invoke$arity$1(G__57091__$2);
}
});
/**
 * Return all on-screen component instances that are rendering the data for a given ident. `x` is anything any->app accepts.
 */
com.fulcrologic.fulcro.components.ident__GT_components = (function com$fulcrologic$fulcro$components$ident__GT_components(x,ident){
var G__57092 = com.fulcrologic.fulcro.components.get_indexes(x);
var G__57092__$1 = (((G__57092 == null))?null:new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224).cljs$core$IFn$_invoke$arity$1(G__57092));
if((G__57092__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__57092__$1,ident);
}
});
/**
 * Return some (random) on-screen components that uses the given ident. `x` is anything any->app accepts.
 */
com.fulcrologic.fulcro.components.ident__GT_any = (function com$fulcrologic$fulcro$components$ident__GT_any(x,ident){
return cljs.core.first(com.fulcrologic.fulcro.components.ident__GT_components(x,ident));
});
/**
 * Get all component classes that query for the given prop.
 *   `x` can be anything `any->app` is ok with.
 * 
 *   Returns all classes that query for that prop (or ident)
 */
com.fulcrologic.fulcro.components.prop__GT_classes = (function com$fulcrologic$fulcro$components$prop__GT_classes(x,prop){
var G__57093 = com.fulcrologic.fulcro.components.get_indexes(x);
var G__57093__$1 = (((G__57093 == null))?null:new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717).cljs$core$IFn$_invoke$arity$1(G__57093));
if((G__57093__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__57093__$1,prop);
}
});
/**
 * Get all of the on-screen component instances from the indexes that have the type of the component class.
 *   `x` can be anything `any->app` is ok with.
 */
com.fulcrologic.fulcro.components.class__GT_all = (function com$fulcrologic$fulcro$components$class__GT_all(x,class$){
var k = com.fulcrologic.fulcro.components.class__GT_registry_key(class$);
var G__57094 = com.fulcrologic.fulcro.components.get_indexes(x);
var G__57094__$1 = (((G__57094 == null))?null:new cljs.core.Keyword(null,"class->components","class->components",436435919).cljs$core$IFn$_invoke$arity$1(G__57094));
if((G__57094__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__57094__$1,k);
}
});
/**
 * Get a (random) on-screen component instance from the indexes that has type of the given component class.
 *   `x` can be anything `any->app` is ok with.
 */
com.fulcrologic.fulcro.components.class__GT_any = (function com$fulcrologic$fulcro$components$class__GT_any(x,cls){
return cljs.core.first(com.fulcrologic.fulcro.components.class__GT_all(x,cls));
});
/**
 * Returns the current value of the state map via a component instance. Note that it is not safe to render
 *   arbitrary data from the state map since Fulcro will have no idea that it should refresh a component that
 *   does so; however, it is sometimes useful to look at the state map for information that doesn't
 *   change over time.
 */
com.fulcrologic.fulcro.components.component__GT_state_map = (function com$fulcrologic$fulcro$components$component__GT_state_map(this$){
var G__57095 = this$;
var G__57095__$1 = (((G__57095 == null))?null:com.fulcrologic.fulcro.components.any__GT_app(G__57095));
var G__57095__$2 = (((G__57095__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__57095__$1));
if((G__57095__$2 == null)){
return null;
} else {
return cljs.core.deref(G__57095__$2);
}
});
/**
 * Wrap the props middleware such that `f` is called to get extra props that should be placed
 *   in the extra-props arg of the component.
 * 
 *   `handler` - (optional) The next item in the props middleware chain.
 *   `f` - A (fn [cls extra-props] new-extra-props)
 * 
 *   `f` will be passed the class being rendered and the current map of extra props. It should augment
 *   those and return a new version.
 */
com.fulcrologic.fulcro.components.wrap_update_extra_props = (function com$fulcrologic$fulcro$components$wrap_update_extra_props(var_args){
var G__57097 = arguments.length;
switch (G__57097) {
case 1:
return com.fulcrologic.fulcro.components.wrap_update_extra_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.components.wrap_update_extra_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.wrap_update_extra_props.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (cls,raw_props){
var existing = (function (){var or__4120__auto__ = goog.object.get(raw_props,"fulcro$extra_props");
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var new$ = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cls,existing) : f.call(null,cls,existing));
goog.object.set(raw_props,"fulcro$extra_props",new$);

return raw_props;
});
}));

(com.fulcrologic.fulcro.components.wrap_update_extra_props.cljs$core$IFn$_invoke$arity$2 = (function (handler,f){
return (function (cls,raw_props){
var existing = (function (){var or__4120__auto__ = goog.object.get(raw_props,"fulcro$extra_props");
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var new$ = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cls,existing) : f.call(null,cls,existing));
goog.object.set(raw_props,"fulcro$extra_props",new$);

return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(cls,raw_props) : handler.call(null,cls,raw_props));
});
}));

(com.fulcrologic.fulcro.components.wrap_update_extra_props.cljs$lang$maxFixedArity = 2);

/**
 * Wraps children in a React.Fragment. Props are optional, like normal DOM elements.
 */
com.fulcrologic.fulcro.components.fragment = (function com$fulcrologic$fulcro$components$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57285 = arguments.length;
var i__4731__auto___57286 = (0);
while(true){
if((i__4731__auto___57286 < len__4730__auto___57285)){
args__4736__auto__.push((arguments[i__4731__auto___57286]));

var G__57287 = (i__4731__auto___57286 + (1));
i__4731__auto___57286 = G__57287;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__57099 = ((cljs.core.map_QMARK_(cljs.core.first(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.rest(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({}),args], null));
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57099,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57099,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,React.Fragment,cljs.core.clj__GT_js(props),com.fulcrologic.fulcro.components.force_children(children));
}));

(com.fulcrologic.fulcro.components.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.components.fragment.cljs$lang$applyTo = (function (seq57098){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57098));
}));

/**
 * 
 *   DEPRECATED: Generally use `result-action` in mutations to chain sequences instead. This call is equivalent
 *   to `transact!` with an `:optimistic? false` option.
 * 
 *   Like `transact!`, but ensures each call completes (in a full-stack, pessimistic manner) before the next call starts
 *   in any way. Note that two calls of this function have no guaranteed relationship to each other. They could end up
 *   intermingled at runtime. The only guarantee is that for *a single call* to `ptransact!`, the calls in the given tx will run
 *   pessimistically (one at a time) in the order given. Follow-on reads in the given transaction will be repeated after each remote
 *   interaction.
 * 
 *   `component-or-app` a mounted component or the app
 *   `tx` the tx to run
 *   `ref` the ident (ref context) in which to run the transaction (including all deferrals)
 */
com.fulcrologic.fulcro.components.ptransact_BANG_ = (function com$fulcrologic$fulcro$components$ptransact_BANG_(var_args){
var G__57108 = arguments.length;
switch (G__57108) {
case 2:
return com.fulcrologic.fulcro.components.ptransact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.components.ptransact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.ptransact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component_or_app,tx){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(component_or_app,tx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869),false], null));
}));

(com.fulcrologic.fulcro.components.ptransact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component_or_app,ref,tx){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(component_or_app,tx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869),false,new cljs.core.Keyword(null,"ref","ref",1289896967),ref], null));
}));

(com.fulcrologic.fulcro.components.ptransact_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Identical to `transact!` with `:compressible? true` option. This means that if more than one
 *   adjacent history transition edge is compressible, only the more recent of the sequence of them is kept. This
 *   is useful for things like form input fields, where storing every keystoke in history is undesirable. This
 *   also compress the transactions in Fulcro Inspect.
 * 
 *   NOTE: history events that trigger remote interactions are not compressible, since they may be needed for
 *   automatic network error recovery handling.
 */
com.fulcrologic.fulcro.components.compressible_transact_BANG_ = (function com$fulcrologic$fulcro$components$compressible_transact_BANG_(var_args){
var G__57110 = arguments.length;
switch (G__57110) {
case 2:
return com.fulcrologic.fulcro.components.compressible_transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.components.compressible_transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.components.compressible_transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app_ish,tx){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app_ish,tx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true], null));
}));

(com.fulcrologic.fulcro.components.compressible_transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app_ish,ref,tx){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app_ish,tx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"compressible?","compressible?",153543246),true,new cljs.core.Keyword(null,"ref","ref",1289896967),ref], null));
}));

(com.fulcrologic.fulcro.components.compressible_transact_BANG_.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=com.fulcrologic.fulcro.components.js.map
