(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{OAQO:function(e,t,n){"use strict";var r=n("q1tI"),i=n.n(r),o=n("17x9"),u=n.n(o);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,u=void 0===o?24:o,s=c(e,["color","size"]);return i.a.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),i.a.createElement("polyline",{points:"23 4 23 10 17 10"}),i.a.createElement("path",{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"}))}));s.propTypes={color:u.a.string,size:u.a.oneOfType([u.a.string,u.a.number])},s.displayName="RotateCw",t.a=s},QLaP:function(e,t,n){"use strict";e.exports=function(e,t,n,r,i,o,u,a){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,i,o,u,a],f=0;(c=new Error(t.replace(/%s/g,(function(){return s[f++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},"Qv+K":function(e,t,n){"use strict";n.d(t,"a",(function(){return K})),n.d(t,"b",(function(){return oe})),n.d(t,"c",(function(){return ae}));var r=n("q1tI");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=0,u=function(){return o++},a={},c="undefined"==typeof window;function s(){}var f=console||{error:s,warn:s,log:s};function l(e,t){return"function"==typeof e?e(t):e}function d(e,t){return h(t)?Object.assign.apply(Object,[{}].concat(Object.keys(t).sort().map((function(e){var n;return(n={})[e]=t[e],n})))):t}function h(e){return e&&"object"==typeof e&&!Array.isArray(e)}function v(){return"undefined"==typeof document||void 0===document.visibilityState||"visible"===document.visibilityState||"prerender"===document.visibilityState}function y(e){if(h(e[0])){var t=e[0];e=[t.queryKey,t.queryFn,t.config].concat(e.slice(1))}else if(h(e[1])){var n=e,r=n[0],o=n[1],u=n.slice(2);e=[r,void 0,o].concat(u)}var a=e,c=a[0],s=a[1],f=a[2],l=void 0===f?{}:f,d=a.slice(3);return[c,(s=s||l.queryFn)?i({},l,{queryFn:s}):l].concat(d)}function p(e){return{isLoading:"loading"===e,isSuccess:"success"===e,isError:"error"===e,isIdle:"idle"===e}}var g={shared:{suspense:!1},queries:{queryKeySerializerFn:function(e){if(!e)return[];Array.isArray(e)||(e=[e]);if(e.some((function(e){return"function"==typeof e})))throw new Error("A valid query key is required!");var t=(n=e,JSON.stringify(n,d));var n;if(e=JSON.parse(t),!t)return[];return[t,e]},queryFn:void 0,initialStale:void 0,enabled:!0,retry:3,retryDelay:function(e){return Math.min(1e3*Math.pow(2,e),3e4)},staleTime:0,cacheTime:3e5,refetchOnWindowFocus:!0,refetchInterval:!1,queryFnParamsFilter:function(e){return e},refetchOnMount:!0,isDataEqual:function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var r,i,o;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(i=r;0!=i--;)if(!e(t[i],n[i]))return!1;return!0}if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if((r=(o=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(i=r;0!=i--;)if(!Object.prototype.hasOwnProperty.call(n,o[i]))return!1;for(i=r;0!=i--;){var u=o[i];if(!e(t[u],n[u]))return!1}return!0}return t!=t&&n!=n},onError:s,onSuccess:s,onSettled:s,useErrorBoundary:!1},mutations:{throwOnError:!1,onMutate:s,onError:s,onSuccess:s,onSettled:s,useErrorBoundary:!1}},m={current:g};function b(){}function w(e,t){var n,r={id:u(),onStateUpdate:t};return r.clearInterval=function(){clearInterval(r.refetchIntervalId),delete r.refetchIntervalId},r.updateConfig=function(t){var n=r.config;if(r.config=t,!c){if((null==n?void 0:n.refetchInterval)===t.refetchInterval)return;e.clearIntervals();var i=Math.min.apply(Math,e.instances.map((function(e){return e.config.refetchInterval||1/0})));!r.refetchIntervalId&&i>0&&i<1/0&&(r.refetchIntervalId=setInterval((function(){e.instances.some((function(e){return e.config.enabled}))&&(v()||e.instances.some((function(e){return e.config.refetchIntervalInBackground})))&&e.fetch()}),i))}},r.run=(n=function(){return function(e){if(e&&e.then)return e.then(b)}(function(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}((function(){return t=function(){e.wasSuspended=!1},(n=function(){if(e.config.enabled&&!e.wasSuspended&&e.state.isStale&&(e.config.refetchOnMount||1===e.instances.length))return function(e,t){if(!t)return e&&e.then?e.then(b):Promise.resolve()}(e.fetch())}())&&n.then?n.then(t):t(n);var t,n}),(function(e){f.error(e)})))},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return Promise.resolve(n.apply(this,e))}catch(e){return Promise.reject(e)}}),r.unsubscribe=function(){e.instances=e.instances.filter((function(e){return e.id!==r.id})),e.instances.length||(e.clearIntervals(),e.cancel(),c||e.scheduleGarbageCollection())},r}function S(){}function E(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}function q(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(e){return Promise.reject(e)}}}function O(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function F(e,t){var n=e();return n&&n.then?n.then(t):t(n)}function I(e,t,n){if(!e.s){if(n instanceof C){if(!n.s)return void(n.o=I.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(I.bind(null,e,t),I.bind(null,e,2));e.s=t,e.v=n;var r=e.o;r&&r(e)}}var C=function(){function e(){}return e.prototype.then=function(t,n){var r=new e,i=this.s;if(i){var o=1&i?t:n;if(o){try{I(r,1,o(this.v))}catch(e){I(r,2,e)}return r}return this}return this.o=function(e){try{var i=e.v;1&e.s?I(r,1,t?t(i):i):n?I(r,1,n(i)):I(r,2,i)}catch(e){I(r,2,e)}},r},e}();function P(e){return e instanceof C&&1&e.s}function j(e,t){if(e)throw t;return t}function T(e,t){try{var n=e()}catch(e){return t(!0,e)}return n&&n.then?n.then(t.bind(null,!1),t.bind(null,!0)):t(!1,n)}function M(e){var t,n=e.queryCache,r=e.queryKey,o=e.queryHash,u=e.config,d=e.notifyGlobalListeners,h="function"==typeof u.initialData?u.initialData():u.initialData,y=void 0!==h,p=!u.enabled||("function"==typeof u.initialStale?u.initialStale():null!=(t=u.initialStale)?t:!y),g={queryKey:r,queryHash:o,config:u,instances:[],state:k(void 0,{type:"Init",initialStatus:y?"success":u.enabled?"loading":"idle",initialData:h,hasInitialData:y,isStale:p}),dispatch:function(e){g.state=k(g.state,e),g.instances.forEach((function(e){return e.onStateUpdate(g.state)})),d()},scheduleStaleTimeout:function(){c||(clearTimeout(g.staleTimeout),g.config.staleTime!==1/0&&(g.staleTimeout=setTimeout((function(){n.getQuery(g.queryKey)&&g.invalidate()}),g.config.staleTime)))},invalidate:function(){clearTimeout(g.staleTimeout),g.dispatch({type:"MarkStale"})},scheduleGarbageCollection:function(){n.queries[g.queryHash]&&g.config.cacheTime!==1/0&&(g.dispatch({type:"MarkGC"}),g.cacheTimeout=setTimeout((function(){n.removeQueries((function(e){return e.state.markedForGarbageCollection&&e.queryHash===g.queryHash}))}),void 0===g.state.data&&"error"!==g.state.status?0:g.config.cacheTime))}};g.refetch=q((function(){return function(e){if(e&&e.then)return e.then(S)}(E((function(){return function(e,t){if(!t)return e&&e.then?e.then(S):Promise.resolve()}(g.fetch())}),(function(e){f.error(e)})))})),g.heal=function(){clearTimeout(g.cacheTimeout),g.cancelled=null},g.cancel=function(){g.cancelled=a,g.cancelPromises&&g.cancelPromises(),delete g.promise},g.clearIntervals=function(){g.instances.forEach((function(e){e.clearInterval()}))},g.setState=function(e){return g.dispatch({type:"SetState",updater:e})},g.setData=function(e){g.dispatch({type:"Success",updater:e}),g.scheduleStaleTimeout()},g.clear=function(){clearTimeout(g.staleTimeout),clearTimeout(g.cacheTimeout),clearTimeout(g.retryTimeout),g.clearIntervals(),g.cancel(),g.dispatch=s,delete n.queries[g.queryHash],d()},g.subscribe=function(e){void 0===e&&(e=s);var t=w(g,e);return g.instances.push(t),g.heal(),t};var m=q((function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return E((function(){var t=e.apply(void 0,g.config.queryFnParamsFilter(n));return g.cancelPromises=function(){return null==t.cancel?void 0:t.cancel()},O(t,(function(e){if(delete g.shouldContinueRetryOnFocus,delete g.cancelPromises,g.cancelled)throw g.cancelled;return e}))}),(function(t){var r=!1;if(delete g.cancelPromises,g.cancelled)throw g.cancelled;return g.dispatch({type:"Failed"}),F((function(){if(!0===g.config.retry||g.state.failureCount<=g.config.retry||"function"==typeof g.config.retry&&g.config.retry(g.state.failureCount,t)){if(!v())return g.shouldContinueRetryOnFocus=!0,r=!0,new Promise(s);delete g.shouldContinueRetryOnFocus;var i=l(g.config.retryDelay,g.state.failureCount);return r=!0,O(new Promise((function(t,r){g.retryTimeout=setTimeout(q((function(){return g.cancelled?r(g.cancelled):E((function(){return O(m.apply(void 0,[e].concat(n)),(function(e){if(g.cancelled)return r(g.cancelled);t(e)}))}),(function(e){if(g.cancelled)return r(g.cancelled);r(e)}))})),i)})))}}),(function(e){if(r)return e;throw t}))}))}));return g.fetch=q((function(e){var t=(void 0===e?{}:e).fetchMore,n=g.config.queryFn;if(n){if(g.config.infinite){var r=n;n=q((function(){var e,t,n=!1,i=[],o=[].concat(g.pageVariables),u=[];return e=function(e,t){var n;do{var r=e();if(r&&r.then){if(!P(r)){n=!0;break}r=r.v}var i=t();if(P(i)&&(i=i.v),!i)return r}while(!i.then);var o=new C,u=I.bind(null,o,2);return(n?r.then(a):i.then(c)).then(void 0,u),o;function a(n){for(r=n;P(i=t())&&(i=i.v),i;){if(i.then)return void i.then(c).then(void 0,u);if((r=e())&&r.then){if(!P(r))return void r.then(a).then(void 0,u);r=r.v}}I(o,1,r)}function c(n){if(n){do{if((r=e())&&r.then){if(!P(r))return void r.then(a).then(void 0,u);r=r.v}if(P(n=t())&&(n=n.v),!n)return void I(o,1,r)}while(!n.then);n.then(c).then(void 0,u)}else I(o,1,r)}}((function(){var e=o.shift();return function(e){var t=e();if(t&&t.then)return t.then(S)}((function(){if(i.length){var t=g.config.getFetchMore(i[i.length-1],i);if(!t)return void(n=!0);var o=[].concat(e.slice(0,-1),[t]),a=i.push;return O(r.apply(void 0,o),(function(e){a.call(i,e),u.push(o)}))}var c=i.push;return O(r.apply(void 0,e),(function(t){c.call(i,t),u.push(e)}))}))}),(function(){return!n&&!!o.length})),t=function(){return g.state.canFetchMore=g.config.getFetchMore(i[i.length-1],i),g.pageVariables=u,i},e&&e.then?e.then(t):t(e)})),t&&(n=q((function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];var u=t.fetchMoreInfo,a=t.previous;return T((function(){g.setState((function(e){return i({},e,{isFetchingMore:a?"previous":"next"})}));var e=[].concat(n,[u]);return g.pageVariables[a?"unshift":"push"](e),O(r.apply(void 0,e),(function(e){var t=a?[e].concat(g.state.data):[].concat(g.state.data,[e]);return g.state.canFetchMore=g.config.getFetchMore(e,t),t}))}),(function(e,t){return g.setState((function(e){return i({},e,{isFetchingMore:!1})})),j(e,t)}))})))}return g.promise||(g.promise=q((function(){g.cancelled=null;var e=function(){var e=[].concat(g.instances);return g.wasSuspended&&e.unshift(g.fallbackInstance),e};return E((function(){return g.dispatch({type:"Fetch"}),O(m.apply(void 0,[n].concat(g.queryKey)),(function(t){return g.setData((function(e){return g.config.isDataEqual(e,t)?e:t})),e().forEach((function(e){return e.config.onSuccess&&e.config.onSuccess(g.state.data)})),e().forEach((function(e){return e.config.onSettled&&e.config.onSettled(g.state.data,null)})),delete g.promise,t}))}),(function(t){if(g.dispatch({type:"Error",cancelled:t===g.cancelled,error:t}),delete g.promise,t!==g.cancelled)throw e().forEach((function(e){return e.config.onError&&e.config.onError(t)})),e().forEach((function(e){return e.config.onSettled&&e.config.onSettled(void 0,t)})),t}))}))()),g.promise}})),g.config.infinite&&(g.fetchMore=function(e,t){void 0===e&&(e=g.state.canFetchMore);var n=(void 0===t?{}:t).previous,r=void 0!==n&&n;return g.fetch({fetchMore:{fetchMoreInfo:e,previous:r}})}),g}function k(e,t){var n=function(e,t){switch(t.type){case"Init":return{status:t.initialStatus,error:null,isFetching:"loading"===t.initialStatus,failureCount:0,isStale:t.isStale,markedForGarbageCollection:!1,data:t.initialData,updatedAt:t.hasInitialData?Date.now():0};case"Failed":return i({},e,{failureCount:e.failureCount+1});case"MarkStale":return i({},e,{isStale:!0});case"MarkGC":return i({},e,{markedForGarbageCollection:!0});case"Fetch":return i({},e,{status:void 0!==e.data?"success":"loading",isFetching:!0,failureCount:0});case"Success":return i({},e,{status:"success",data:l(t.updater,e.data),error:null,isStale:!1,isFetching:!1,updatedAt:Date.now(),failureCount:0});case"Error":return i({},e,{isFetching:!1,isStale:!0},!t.cancelled&&{status:"error",error:t.error,throwInErrorBoundary:!0});case"SetState":return l(t.updater,e);default:throw new Error}}(e,t);return Object.assign(n,p(n.status))}function Q(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}function D(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(e){return Promise.reject(e)}}}function x(){}function L(e,t){if(!t)return e&&e.then?e.then(x):Promise.resolve()}function A(e,t){var n=e();return n&&n.then?n.then(t):t(n)}var K=R(),B=[K];function R(e){var t=void 0===e?{}:e,n=t.frozen,r=void 0===n?c:n,o=t.defaultConfig,u=[],a=o?{current:i({},m.current,o)}:m,s={queries:{},isFetching:0},l=function(){s.isFetching=Object.values(s.queries).reduce((function(e,t){return t.state.isFetching?e+1:e}),0),u.forEach((function(e){return e(s)}))};return s.subscribe=function(e){return u.push(e),function(){u.splice(u.indexOf(e),1)}},s.clear=function(e){var t=(void 0===e?{}:e).notify,n=void 0===t||t;Object.values(s.queries).forEach((function(e){return e.clear()})),s.queries={},n&&l()},s.getQueries=function(e,t){var n=(void 0===t?{}:t).exact;if(!0===e)return Object.values(s.queries);if("function"!=typeof e){var r=a.current.queries.queryKeySerializerFn(e),i=r[0],o=r[1];e=function(e){return n?e.queryHash===i:function e(t,n){return t===n||typeof t==typeof n&&("object"==typeof t&&!Object.keys(n).some((function(r){return!e(t[r],n[r])})))}(e.queryKey,o)}}return Object.values(s.queries).filter(e)},s.getQuery=function(e){return s.getQueries(e,{exact:!0})[0]},s.getQueryData=function(e){var t;return null==(t=s.getQuery(e))?void 0:t.state.data},s.removeQueries=function(){s.getQueries.apply(s,arguments).forEach((function(e){return e.clear()}))},s.cancelQueries=function(){s.getQueries.apply(s,arguments).forEach((function(e){return e.cancel()}))},s.invalidateQueries=D((function(e,t){var n=void 0===t?{}:t,r=n.refetchActive,i=void 0===r||r,o=n.refetchInactive,u=void 0!==o&&o,a=n.exact,c=n.throwOnError;return Q((function(){return t=Promise.all(s.getQueries(e,{exact:a}).map((function(e){if(e.instances.length){if(i&&e.instances.some((function(e){return e.config.enabled})))return e.fetch()}else if(u)return e.fetch();return e.invalidate()}))),r?n?n(t):t:(t&&t.then||(t=Promise.resolve(t)),n?t.then(n):t);var t,n,r}),(function(e){if(c)throw e}))})),s.resetErrorBoundaries=function(){s.getQueries(!0).forEach((function(e){e.state.throwInErrorBoundary=!1}))},s.buildQuery=function(e,t){void 0===t&&(t={});var n=(t=i({},a.current.shared,a.current.queries,t)).queryKeySerializerFn(e),o=n[0],u=n[1],f=s.queries[o];return f?Object.assign(f,{config:t}):(f=M({queryCache:s,queryKey:u,queryHash:o,config:t,notifyGlobalListeners:l}),t.infinite&&(void 0===f.state.canFetchMore&&void 0!==f.state.data&&(f.state.canFetchMore=t.getFetchMore(f.state.data[f.state.data.length-1],f.state.data)),f.pageVariables||(f.pageVariables=[[].concat(f.queryKey)])),!c&&f.state.data&&(f.scheduleStaleTimeout(),f.heal(),f.scheduleGarbageCollection()),r||(s.queries[o]=f,c?l():setTimeout((function(){l()})))),f.fallbackInstance={config:{onSuccess:f.config.onSuccess,onError:f.config.onError,onSettled:f.config.onSettled}},f},s.prefetchQuery=D((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];h(t[1])&&(t[1].hasOwnProperty("throwOnError")||t[1].hasOwnProperty("force"))&&(t[3]=t[1],t[1]=void 0,t[2]=void 0);var r=y(t),i=r[0],o=r[1],u=r[2],a=(u=void 0===u?{}:u).force,c=u.throwOnError;return Q((function(){var e=s.buildQuery(i,o);return A((function(){if(a||e.state.isStale)return L(e.fetch())}),(function(){return e.state.data}))}),(function(e){if(c)throw e;f.error(e)}))})),s.setQueryData=function(e,t,n){void 0===n&&(n={});var r=s.getQuery(e);r||(r=s.buildQuery(e,n)),r.setData(t)},s}var G,H,z=function(){v()&&(void 0===navigator.onLine||navigator.onLine)&&B.forEach((function(e){return e.invalidateQueries((function(e){return!!e.instances.length&&(!!e.instances.some((function(e){return e.config.enabled}))&&(!!e.state.isStale&&(e.shouldContinueRetryOnFocus&&delete e.promise,e.config.refetchOnWindowFocus)))})).catch(f.error)}))};H=function(e){var t;if(!c&&(null==(t=window)?void 0:t.addEventListener))return window.addEventListener("visibilitychange",e,!1),window.addEventListener("focus",e,!1),function(){window.removeEventListener("visibilitychange",e),window.removeEventListener("focus",e)}},G&&G(),G=H(z);var V=r.createContext(K),J=function(){return r.useContext(V)};var N=r.createContext();function W(){return r.useContext(N)||m.current}function U(e){var t=r.useRef();return t.current=e,r.useCallback((function(){return t.current}),[])}function X(e){var t=W(),n=y(e),r=n[0],o=n[1],u=n.slice(2);return[r,o=i({},t.shared,t.queries,o)].concat(u)}function Y(e){var t=r.useRef(!1);return r[c?"useEffect":"useLayoutEffect"]((function(){return t.current=!0,function(){return t.current=!1}}),[]),r.useCallback((function(){return t.current?e.apply(void 0,arguments):void 0}),[e])}function Z(e){if(e.query.config.suspense||e.query.config.useErrorBoundary){if("error"===e.query.state.status&&e.query.state.throwInErrorBoundary)throw e.error;if(e.query.config.suspense&&"success"!==e.status&&e.query.config.enabled)throw e.query.wasSuspended=!0,e.query.fetch()}}function $(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}var _=function(){return{status:"idle",data:void 0,error:null}};var ee={};var te={},ne={},re={};function ie(e,t){if(t.type===ee)return{status:"idle",data:void 0,error:null};if(t.type===te)return{status:"loading"};if(t.type===ne)return{status:"success",data:t.data};if(t.type===re)return{status:"error",error:t.error};throw new Error}function oe(e,t){void 0===t&&(t={});var n,o=r.useReducer(ie,null,_),a=o[0],c=Y(o[1]),l=U(e),d=U(i({},W().shared,W().mutations,t)),h=r.useRef(),v=r.useCallback((n=function(e,t){var n=void 0===t?{}:t,r=n.onSuccess,i=void 0===r?s:r,o=n.onError,a=void 0===o?s:o,v=n.onSettled,y=void 0===v?s:v,p=n.throwOnError,g=d(),m=u();h.current=m;var b,w=function(){return h.current===m};return function(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}((function(){return c({type:te}),$(g.onMutate(e),(function(t){return b=t,$(l()(e),(function(t){return w()&&c({type:ne,data:t}),$(g.onSuccess(t,e),(function(){return $(i(t,e),(function(){return $(g.onSettled(t,null,e),(function(){return $(y(t,null,e),(function(){return t}))}))}))}))}))}))}),(function(t){return f.error(t),$(g.onError(t,e,b),(function(){return $(a(t,e,b),(function(){return $(g.onSettled(void 0,t,e,b),(function(){return $(y(void 0,t,e,b),(function(){if(w()&&c({type:re,error:t}),null!=p?p:g.throwOnError)throw t}))}))}))}))}))},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return Promise.resolve(n.apply(this,e))}catch(e){return Promise.reject(e)}}),[c,d,l]),y=r.useCallback((function(){return c({type:ee})}),[c]);return r.useEffect((function(){var e=d(),t=e.suspense,n=e.useErrorBoundary;if((null!=n?n:t)&&a.error)throw a.error}),[d,a.error]),[v,i({},a,{reset:y,isIdle:"idle"===a.status,isLoading:"loading"===a.status,isSuccess:"success"===a.status,isError:"error"===a.status})]}function ue(e,t){void 0===t&&(t={});var n=Y(r.useState()[1]),o=J().buildQuery(e,t),u=r.useRef();r.useEffect((function(){return u.current=o.subscribe((function(){return n({})})),u.current.unsubscribe}),[o,n]),r.useEffect((function(){u.current.updateConfig(t)}));var a=Boolean(t.enabled);return r.useEffect((function(){u.current.run()}),[a,o]),i({},o,o.state,{query:o})}function ae(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=ue.apply(void 0,X(t));return Z(r),r}}}]);