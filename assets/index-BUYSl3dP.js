(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const j of document.querySelectorAll('link[rel="modulepreload"]'))b(j);new MutationObserver(j=>{for(const y of j)if(y.type==="childList")for(const A of y.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&b(A)}).observe(document,{childList:!0,subtree:!0});function u(j){const y={};return j.integrity&&(y.integrity=j.integrity),j.referrerPolicy&&(y.referrerPolicy=j.referrerPolicy),j.crossOrigin==="use-credentials"?y.credentials="include":j.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function b(j){if(j.ep)return;j.ep=!0;const y=u(j);fetch(j.href,y)}})();function kd(d){return d&&d.__esModule&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d}var Zs={exports:{}},Jn={},Xs={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var id;function Mm(){if(id)return ce;id=1;var d=Symbol.for("react.element"),c=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),A=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),N=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),U=Symbol.iterator;function I(l){return l===null||typeof l!="object"?null:(l=U&&l[U]||l["@@iterator"],typeof l=="function"?l:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,E={};function S(l,x,z){this.props=l,this.context=x,this.refs=E,this.updater=z||T}S.prototype.isReactComponent={},S.prototype.setState=function(l,x){if(typeof l!="object"&&typeof l!="function"&&l!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,l,x,"setState")},S.prototype.forceUpdate=function(l){this.updater.enqueueForceUpdate(this,l,"forceUpdate")};function ee(){}ee.prototype=S.prototype;function M(l,x,z){this.props=l,this.context=x,this.refs=E,this.updater=z||T}var de=M.prototype=new ee;de.constructor=M,B(de,S.prototype),de.isPureReactComponent=!0;var ve=Array.isArray,Ne=Object.prototype.hasOwnProperty,Te={current:null},re={key:!0,ref:!0,__self:!0,__source:!0};function le(l,x,z){var _,q={},G=null,H=null;if(x!=null)for(_ in x.ref!==void 0&&(H=x.ref),x.key!==void 0&&(G=""+x.key),x)Ne.call(x,_)&&!re.hasOwnProperty(_)&&(q[_]=x[_]);var K=arguments.length-2;if(K===1)q.children=z;else if(1<K){for(var ie=Array(K),pe=0;pe<K;pe++)ie[pe]=arguments[pe+2];q.children=ie}if(l&&l.defaultProps)for(_ in K=l.defaultProps,K)q[_]===void 0&&(q[_]=K[_]);return{$$typeof:d,type:l,key:G,ref:H,props:q,_owner:Te.current}}function be(l,x){return{$$typeof:d,type:l.type,key:x,ref:l.ref,props:l.props,_owner:l._owner}}function xe(l){return typeof l=="object"&&l!==null&&l.$$typeof===d}function Pe(l){var x={"=":"=0",":":"=2"};return"$"+l.replace(/[=:]/g,function(z){return x[z]})}var Be=/\/+/g;function He(l,x){return typeof l=="object"&&l!==null&&l.key!=null?Pe(""+l.key):x.toString(36)}function Je(l,x,z,_,q){var G=typeof l;(G==="undefined"||G==="boolean")&&(l=null);var H=!1;if(l===null)H=!0;else switch(G){case"string":case"number":H=!0;break;case"object":switch(l.$$typeof){case d:case c:H=!0}}if(H)return H=l,q=q(H),l=_===""?"."+He(H,0):_,ve(q)?(z="",l!=null&&(z=l.replace(Be,"$&/")+"/"),Je(q,x,z,"",function(pe){return pe})):q!=null&&(xe(q)&&(q=be(q,z+(!q.key||H&&H.key===q.key?"":(""+q.key).replace(Be,"$&/")+"/")+l)),x.push(q)),1;if(H=0,_=_===""?".":_+":",ve(l))for(var K=0;K<l.length;K++){G=l[K];var ie=_+He(G,K);H+=Je(G,x,z,ie,q)}else if(ie=I(l),typeof ie=="function")for(l=ie.call(l),K=0;!(G=l.next()).done;)G=G.value,ie=_+He(G,K++),H+=Je(G,x,z,ie,q);else if(G==="object")throw x=String(l),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.");return H}function X(l,x,z){if(l==null)return l;var _=[],q=0;return Je(l,_,"","",function(G){return x.call(z,G,q++)}),_}function oe(l){if(l._status===-1){var x=l._result;x=x(),x.then(function(z){(l._status===0||l._status===-1)&&(l._status=1,l._result=z)},function(z){(l._status===0||l._status===-1)&&(l._status=2,l._result=z)}),l._status===-1&&(l._status=0,l._result=x)}if(l._status===1)return l._result.default;throw l._result}var me={current:null},O={transition:null},Y={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:O,ReactCurrentOwner:Te};function m(){throw Error("act(...) is not supported in production builds of React.")}return ce.Children={map:X,forEach:function(l,x,z){X(l,function(){x.apply(this,arguments)},z)},count:function(l){var x=0;return X(l,function(){x++}),x},toArray:function(l){return X(l,function(x){return x})||[]},only:function(l){if(!xe(l))throw Error("React.Children.only expected to receive a single React element child.");return l}},ce.Component=S,ce.Fragment=u,ce.Profiler=j,ce.PureComponent=M,ce.StrictMode=b,ce.Suspense=k,ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,ce.act=m,ce.cloneElement=function(l,x,z){if(l==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+l+".");var _=B({},l.props),q=l.key,G=l.ref,H=l._owner;if(x!=null){if(x.ref!==void 0&&(G=x.ref,H=Te.current),x.key!==void 0&&(q=""+x.key),l.type&&l.type.defaultProps)var K=l.type.defaultProps;for(ie in x)Ne.call(x,ie)&&!re.hasOwnProperty(ie)&&(_[ie]=x[ie]===void 0&&K!==void 0?K[ie]:x[ie])}var ie=arguments.length-2;if(ie===1)_.children=z;else if(1<ie){K=Array(ie);for(var pe=0;pe<ie;pe++)K[pe]=arguments[pe+2];_.children=K}return{$$typeof:d,type:l.type,key:q,ref:G,props:_,_owner:H}},ce.createContext=function(l){return l={$$typeof:A,_currentValue:l,_currentValue2:l,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},l.Provider={$$typeof:y,_context:l},l.Consumer=l},ce.createElement=le,ce.createFactory=function(l){var x=le.bind(null,l);return x.type=l,x},ce.createRef=function(){return{current:null}},ce.forwardRef=function(l){return{$$typeof:C,render:l}},ce.isValidElement=xe,ce.lazy=function(l){return{$$typeof:J,_payload:{_status:-1,_result:l},_init:oe}},ce.memo=function(l,x){return{$$typeof:N,type:l,compare:x===void 0?null:x}},ce.startTransition=function(l){var x=O.transition;O.transition={};try{l()}finally{O.transition=x}},ce.unstable_act=m,ce.useCallback=function(l,x){return me.current.useCallback(l,x)},ce.useContext=function(l){return me.current.useContext(l)},ce.useDebugValue=function(){},ce.useDeferredValue=function(l){return me.current.useDeferredValue(l)},ce.useEffect=function(l,x){return me.current.useEffect(l,x)},ce.useId=function(){return me.current.useId()},ce.useImperativeHandle=function(l,x,z){return me.current.useImperativeHandle(l,x,z)},ce.useInsertionEffect=function(l,x){return me.current.useInsertionEffect(l,x)},ce.useLayoutEffect=function(l,x){return me.current.useLayoutEffect(l,x)},ce.useMemo=function(l,x){return me.current.useMemo(l,x)},ce.useReducer=function(l,x,z){return me.current.useReducer(l,x,z)},ce.useRef=function(l){return me.current.useRef(l)},ce.useState=function(l){return me.current.useState(l)},ce.useSyncExternalStore=function(l,x,z){return me.current.useSyncExternalStore(l,x,z)},ce.useTransition=function(){return me.current.useTransition()},ce.version="18.3.1",ce}var sd;function co(){return sd||(sd=1,Xs.exports=Mm()),Xs.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var od;function Om(){if(od)return Jn;od=1;var d=co(),c=Symbol.for("react.element"),u=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,j=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function A(C,k,N){var J,U={},I=null,T=null;N!==void 0&&(I=""+N),k.key!==void 0&&(I=""+k.key),k.ref!==void 0&&(T=k.ref);for(J in k)b.call(k,J)&&!y.hasOwnProperty(J)&&(U[J]=k[J]);if(C&&C.defaultProps)for(J in k=C.defaultProps,k)U[J]===void 0&&(U[J]=k[J]);return{$$typeof:c,type:C,key:I,ref:T,props:U,_owner:j.current}}return Jn.Fragment=u,Jn.jsx=A,Jn.jsxs=A,Jn}var ld;function Lm(){return ld||(ld=1,Zs.exports=Om()),Zs.exports}var n=Lm(),F=co();const bd=kd(F);var ni={},eo={exports:{}},lt={},to={exports:{}},ro={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cd;function zm(){return cd||(cd=1,(function(d){function c(O,Y){var m=O.length;O.push(Y);e:for(;0<m;){var l=m-1>>>1,x=O[l];if(0<j(x,Y))O[l]=Y,O[m]=x,m=l;else break e}}function u(O){return O.length===0?null:O[0]}function b(O){if(O.length===0)return null;var Y=O[0],m=O.pop();if(m!==Y){O[0]=m;e:for(var l=0,x=O.length,z=x>>>1;l<z;){var _=2*(l+1)-1,q=O[_],G=_+1,H=O[G];if(0>j(q,m))G<x&&0>j(H,q)?(O[l]=H,O[G]=m,l=G):(O[l]=q,O[_]=m,l=_);else if(G<x&&0>j(H,m))O[l]=H,O[G]=m,l=G;else break e}}return Y}function j(O,Y){var m=O.sortIndex-Y.sortIndex;return m!==0?m:O.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var y=performance;d.unstable_now=function(){return y.now()}}else{var A=Date,C=A.now();d.unstable_now=function(){return A.now()-C}}var k=[],N=[],J=1,U=null,I=3,T=!1,B=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,ee=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function de(O){for(var Y=u(N);Y!==null;){if(Y.callback===null)b(N);else if(Y.startTime<=O)b(N),Y.sortIndex=Y.expirationTime,c(k,Y);else break;Y=u(N)}}function ve(O){if(E=!1,de(O),!B)if(u(k)!==null)B=!0,oe(Ne);else{var Y=u(N);Y!==null&&me(ve,Y.startTime-O)}}function Ne(O,Y){B=!1,E&&(E=!1,ee(le),le=-1),T=!0;var m=I;try{for(de(Y),U=u(k);U!==null&&(!(U.expirationTime>Y)||O&&!Pe());){var l=U.callback;if(typeof l=="function"){U.callback=null,I=U.priorityLevel;var x=l(U.expirationTime<=Y);Y=d.unstable_now(),typeof x=="function"?U.callback=x:U===u(k)&&b(k),de(Y)}else b(k);U=u(k)}if(U!==null)var z=!0;else{var _=u(N);_!==null&&me(ve,_.startTime-Y),z=!1}return z}finally{U=null,I=m,T=!1}}var Te=!1,re=null,le=-1,be=5,xe=-1;function Pe(){return!(d.unstable_now()-xe<be)}function Be(){if(re!==null){var O=d.unstable_now();xe=O;var Y=!0;try{Y=re(!0,O)}finally{Y?He():(Te=!1,re=null)}}else Te=!1}var He;if(typeof M=="function")He=function(){M(Be)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,X=Je.port2;Je.port1.onmessage=Be,He=function(){X.postMessage(null)}}else He=function(){S(Be,0)};function oe(O){re=O,Te||(Te=!0,He())}function me(O,Y){le=S(function(){O(d.unstable_now())},Y)}d.unstable_IdlePriority=5,d.unstable_ImmediatePriority=1,d.unstable_LowPriority=4,d.unstable_NormalPriority=3,d.unstable_Profiling=null,d.unstable_UserBlockingPriority=2,d.unstable_cancelCallback=function(O){O.callback=null},d.unstable_continueExecution=function(){B||T||(B=!0,oe(Ne))},d.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):be=0<O?Math.floor(1e3/O):5},d.unstable_getCurrentPriorityLevel=function(){return I},d.unstable_getFirstCallbackNode=function(){return u(k)},d.unstable_next=function(O){switch(I){case 1:case 2:case 3:var Y=3;break;default:Y=I}var m=I;I=Y;try{return O()}finally{I=m}},d.unstable_pauseExecution=function(){},d.unstable_requestPaint=function(){},d.unstable_runWithPriority=function(O,Y){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var m=I;I=O;try{return Y()}finally{I=m}},d.unstable_scheduleCallback=function(O,Y,m){var l=d.unstable_now();switch(typeof m=="object"&&m!==null?(m=m.delay,m=typeof m=="number"&&0<m?l+m:l):m=l,O){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=m+x,O={id:J++,callback:Y,priorityLevel:O,startTime:m,expirationTime:x,sortIndex:-1},m>l?(O.sortIndex=m,c(N,O),u(k)===null&&O===u(N)&&(E?(ee(le),le=-1):E=!0,me(ve,m-l))):(O.sortIndex=x,c(k,O),B||T||(B=!0,oe(Ne))),O},d.unstable_shouldYield=Pe,d.unstable_wrapCallback=function(O){var Y=I;return function(){var m=I;I=Y;try{return O.apply(this,arguments)}finally{I=m}}}})(ro)),ro}var dd;function Bm(){return dd||(dd=1,to.exports=zm()),to.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ud;function Um(){if(ud)return lt;ud=1;var d=co(),c=Bm();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b=new Set,j={};function y(e,t){A(e,t),A(e+"Capture",t)}function A(e,t){for(j[e]=t,e=0;e<t.length;e++)b.add(t[e])}var C=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),k=Object.prototype.hasOwnProperty,N=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,J={},U={};function I(e){return k.call(U,e)?!0:k.call(J,e)?!1:N.test(e)?U[e]=!0:(J[e]=!0,!1)}function T(e,t,r,a){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function B(e,t,r,a){if(t===null||typeof t>"u"||T(e,t,r,a))return!0;if(a)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function E(e,t,r,a,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){S[e]=new E(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];S[t]=new E(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){S[e]=new E(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){S[e]=new E(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){S[e]=new E(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){S[e]=new E(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){S[e]=new E(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){S[e]=new E(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){S[e]=new E(e,5,!1,e.toLowerCase(),null,!1,!1)});var ee=/[\-:]([a-z])/g;function M(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ee,M);S[t]=new E(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ee,M);S[t]=new E(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ee,M);S[t]=new E(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){S[e]=new E(e,1,!1,e.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){S[e]=new E(e,1,!1,e.toLowerCase(),null,!0,!0)});function de(e,t,r,a){var i=S.hasOwnProperty(t)?S[t]:null;(i!==null?i.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(B(t,r,i,a)&&(r=null),a||i===null?I(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,a=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,a?e.setAttributeNS(a,t,r):e.setAttribute(t,r))))}var ve=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ne=Symbol.for("react.element"),Te=Symbol.for("react.portal"),re=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),be=Symbol.for("react.profiler"),xe=Symbol.for("react.provider"),Pe=Symbol.for("react.context"),Be=Symbol.for("react.forward_ref"),He=Symbol.for("react.suspense"),Je=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),me=Symbol.for("react.offscreen"),O=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=O&&e[O]||e["@@iterator"],typeof e=="function"?e:null)}var m=Object.assign,l;function x(e){if(l===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);l=t&&t[1]||""}return`
`+l+e}var z=!1;function _(e,t){if(!e||z)return"";z=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(w){var a=w}Reflect.construct(e,[],t)}else{try{t.call()}catch(w){a=w}e.call(t.prototype)}else{try{throw Error()}catch(w){a=w}e()}}catch(w){if(w&&a&&typeof w.stack=="string"){for(var i=w.stack.split(`
`),s=a.stack.split(`
`),o=i.length-1,p=s.length-1;1<=o&&0<=p&&i[o]!==s[p];)p--;for(;1<=o&&0<=p;o--,p--)if(i[o]!==s[p]){if(o!==1||p!==1)do if(o--,p--,0>p||i[o]!==s[p]){var g=`
`+i[o].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=o&&0<=p);break}}}finally{z=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?x(e):""}function q(e){switch(e.tag){case 5:return x(e.type);case 16:return x("Lazy");case 13:return x("Suspense");case 19:return x("SuspenseList");case 0:case 2:case 15:return e=_(e.type,!1),e;case 11:return e=_(e.type.render,!1),e;case 1:return e=_(e.type,!0),e;default:return""}}function G(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case re:return"Fragment";case Te:return"Portal";case be:return"Profiler";case le:return"StrictMode";case He:return"Suspense";case Je:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pe:return(e.displayName||"Context")+".Consumer";case xe:return(e._context.displayName||"Context")+".Provider";case Be:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:G(e.type)||"Memo";case oe:t=e._payload,e=e._init;try{return G(e(t))}catch{}}return null}function H(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return G(t);case 8:return t===le?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function K(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ie(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pe(e){var t=ie(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){a=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function he(e){e._valueTracker||(e._valueTracker=pe(e))}function Se(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),a="";return e&&(a=ie(e)?e.checked?"true":"false":e.value),e=a,e!==r?(t.setValue(e),!0):!1}function Re(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ue(e,t){var r=t.checked;return m({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function qe(e,t){var r=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;r=K(t.value!=null?t.value:r),e._wrapperState={initialChecked:a,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function rt(e,t){t=t.checked,t!=null&&de(e,"checked",t,!1)}function Xe(e,t){rt(e,t);var r=K(t.value),a=t.type;if(r!=null)a==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?kt(e,t.type,r):t.hasOwnProperty("defaultValue")&&kt(e,t.type,K(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function mt(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function kt(e,t,r){(t!=="number"||Re(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var We=Array.isArray;function qt(e,t,r,a){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&a&&(e[r].defaultSelected=!0)}else{for(r=""+K(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function tn(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return m({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Kn(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(u(92));if(We(r)){if(1<r.length)throw Error(u(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:K(r)}}function rn(e,t){var r=K(t.value),a=K(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),a!=null&&(e.defaultValue=""+a)}function Wn(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function nn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function an(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?nn(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ar,sn=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,a,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,a,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ar=Ar||document.createElement("div"),Ar.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ar.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vt(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ot={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ci=["Webkit","ms","Moz","O"];Object.keys(Ot).forEach(function(e){ci.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ot[t]=Ot[e]})});function Qn(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ot.hasOwnProperty(e)&&Ot[e]?(""+t).trim():t+"px"}function bo(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var a=r.indexOf("--")===0,i=Qn(r,t[r],a);r==="float"&&(r="cssFloat"),a?e.setProperty(r,i):e[r]=i}}var Uu=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function di(e,t){if(t){if(Uu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function ui(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pi=null;function mi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gi=null,Nr=null,Pr=null;function So(e){if(e=An(e)){if(typeof gi!="function")throw Error(u(280));var t=e.stateNode;t&&(t=va(t),gi(e.stateNode,e.type,t))}}function wo(e){Nr?Pr?Pr.push(e):Pr=[e]:Nr=e}function Co(){if(Nr){var e=Nr,t=Pr;if(Pr=Nr=null,So(e),t)for(e=0;e<t.length;e++)So(t[e])}}function jo(e,t){return e(t)}function To(){}var fi=!1;function Eo(e,t,r){if(fi)return e(t,r);fi=!0;try{return jo(e,t,r)}finally{fi=!1,(Nr!==null||Pr!==null)&&(To(),Co())}}function on(e,t){var r=e.stateNode;if(r===null)return null;var a=va(r);if(a===null)return null;r=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(u(231,t,typeof r));return r}var hi=!1;if(C)try{var ln={};Object.defineProperty(ln,"passive",{get:function(){hi=!0}}),window.addEventListener("test",ln,ln),window.removeEventListener("test",ln,ln)}catch{hi=!1}function _u(e,t,r,a,i,s,o,p,g){var w=Array.prototype.slice.call(arguments,3);try{t.apply(r,w)}catch(R){this.onError(R)}}var cn=!1,$n=null,Yn=!1,yi=null,Fu={onError:function(e){cn=!0,$n=e}};function Hu(e,t,r,a,i,s,o,p,g){cn=!1,$n=null,_u.apply(Fu,arguments)}function Ju(e,t,r,a,i,s,o,p,g){if(Hu.apply(this,arguments),cn){if(cn){var w=$n;cn=!1,$n=null}else throw Error(u(198));Yn||(Yn=!0,yi=w)}}function mr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Ao(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function No(e){if(mr(e)!==e)throw Error(u(188))}function qu(e){var t=e.alternate;if(!t){if(t=mr(e),t===null)throw Error(u(188));return t!==e?null:e}for(var r=e,a=t;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){if(a=i.return,a!==null){r=a;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===r)return No(i),e;if(s===a)return No(i),t;s=s.sibling}throw Error(u(188))}if(r.return!==a.return)r=i,a=s;else{for(var o=!1,p=i.child;p;){if(p===r){o=!0,r=i,a=s;break}if(p===a){o=!0,a=i,r=s;break}p=p.sibling}if(!o){for(p=s.child;p;){if(p===r){o=!0,r=s,a=i;break}if(p===a){o=!0,a=s,r=i;break}p=p.sibling}if(!o)throw Error(u(189))}}if(r.alternate!==a)throw Error(u(190))}if(r.tag!==3)throw Error(u(188));return r.stateNode.current===r?e:t}function Po(e){return e=qu(e),e!==null?Ro(e):null}function Ro(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ro(e);if(t!==null)return t;e=e.sibling}return null}var Io=c.unstable_scheduleCallback,Do=c.unstable_cancelCallback,Vu=c.unstable_shouldYield,Gu=c.unstable_requestPaint,De=c.unstable_now,Ku=c.unstable_getCurrentPriorityLevel,vi=c.unstable_ImmediatePriority,Mo=c.unstable_UserBlockingPriority,Zn=c.unstable_NormalPriority,Wu=c.unstable_LowPriority,Oo=c.unstable_IdlePriority,Xn=null,Nt=null;function Qu(e){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Xn,e,void 0,(e.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:Zu,$u=Math.log,Yu=Math.LN2;function Zu(e){return e>>>=0,e===0?32:31-($u(e)/Yu|0)|0}var ea=64,ta=4194304;function dn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ra(e,t){var r=e.pendingLanes;if(r===0)return 0;var a=0,i=e.suspendedLanes,s=e.pingedLanes,o=r&268435455;if(o!==0){var p=o&~i;p!==0?a=dn(p):(s&=o,s!==0&&(a=dn(s)))}else o=r&~i,o!==0?a=dn(o):s!==0&&(a=dn(s));if(a===0)return 0;if(t!==0&&t!==a&&(t&i)===0&&(i=a&-a,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if((a&4)!==0&&(a|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)r=31-bt(t),i=1<<r,a|=e[r],t&=~i;return a}function Xu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ep(e,t){for(var r=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-bt(s),p=1<<o,g=i[o];g===-1?((p&r)===0||(p&a)!==0)&&(i[o]=Xu(p,t)):g<=t&&(e.expiredLanes|=p),s&=~p}}function xi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lo(){var e=ea;return ea<<=1,(ea&4194240)===0&&(ea=64),e}function ki(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function un(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bt(t),e[t]=r}function tp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-bt(r),s=1<<i;t[i]=0,a[i]=-1,e[i]=-1,r&=~s}}function bi(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var a=31-bt(r),i=1<<a;i&t|e[a]&t&&(e[a]|=t),r&=~i}}var ye=0;function zo(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Bo,Si,Uo,_o,Fo,wi=!1,na=[],Gt=null,Kt=null,Wt=null,pn=new Map,mn=new Map,Qt=[],rp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ho(e,t){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Wt=null;break;case"pointerover":case"pointerout":pn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mn.delete(t.pointerId)}}function gn(e,t,r,a,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:a,nativeEvent:s,targetContainers:[i]},t!==null&&(t=An(t),t!==null&&Si(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function np(e,t,r,a,i){switch(t){case"focusin":return Gt=gn(Gt,e,t,r,a,i),!0;case"dragenter":return Kt=gn(Kt,e,t,r,a,i),!0;case"mouseover":return Wt=gn(Wt,e,t,r,a,i),!0;case"pointerover":var s=i.pointerId;return pn.set(s,gn(pn.get(s)||null,e,t,r,a,i)),!0;case"gotpointercapture":return s=i.pointerId,mn.set(s,gn(mn.get(s)||null,e,t,r,a,i)),!0}return!1}function Jo(e){var t=gr(e.target);if(t!==null){var r=mr(t);if(r!==null){if(t=r.tag,t===13){if(t=Ao(r),t!==null){e.blockedOn=t,Fo(e.priority,function(){Uo(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function aa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=ji(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var a=new r.constructor(r.type,r);pi=a,r.target.dispatchEvent(a),pi=null}else return t=An(r),t!==null&&Si(t),e.blockedOn=r,!1;t.shift()}return!0}function qo(e,t,r){aa(e)&&r.delete(t)}function ap(){wi=!1,Gt!==null&&aa(Gt)&&(Gt=null),Kt!==null&&aa(Kt)&&(Kt=null),Wt!==null&&aa(Wt)&&(Wt=null),pn.forEach(qo),mn.forEach(qo)}function fn(e,t){e.blockedOn===t&&(e.blockedOn=null,wi||(wi=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,ap)))}function hn(e){function t(i){return fn(i,e)}if(0<na.length){fn(na[0],e);for(var r=1;r<na.length;r++){var a=na[r];a.blockedOn===e&&(a.blockedOn=null)}}for(Gt!==null&&fn(Gt,e),Kt!==null&&fn(Kt,e),Wt!==null&&fn(Wt,e),pn.forEach(t),mn.forEach(t),r=0;r<Qt.length;r++)a=Qt[r],a.blockedOn===e&&(a.blockedOn=null);for(;0<Qt.length&&(r=Qt[0],r.blockedOn===null);)Jo(r),r.blockedOn===null&&Qt.shift()}var Rr=ve.ReactCurrentBatchConfig,ia=!0;function ip(e,t,r,a){var i=ye,s=Rr.transition;Rr.transition=null;try{ye=1,Ci(e,t,r,a)}finally{ye=i,Rr.transition=s}}function sp(e,t,r,a){var i=ye,s=Rr.transition;Rr.transition=null;try{ye=4,Ci(e,t,r,a)}finally{ye=i,Rr.transition=s}}function Ci(e,t,r,a){if(ia){var i=ji(e,t,r,a);if(i===null)Hi(e,t,a,sa,r),Ho(e,a);else if(np(i,e,t,r,a))a.stopPropagation();else if(Ho(e,a),t&4&&-1<rp.indexOf(e)){for(;i!==null;){var s=An(i);if(s!==null&&Bo(s),s=ji(e,t,r,a),s===null&&Hi(e,t,a,sa,r),s===i)break;i=s}i!==null&&a.stopPropagation()}else Hi(e,t,a,null,r)}}var sa=null;function ji(e,t,r,a){if(sa=null,e=mi(a),e=gr(e),e!==null)if(t=mr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Ao(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return sa=e,null}function Vo(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ku()){case vi:return 1;case Mo:return 4;case Zn:case Wu:return 16;case Oo:return 536870912;default:return 16}default:return 16}}var $t=null,Ti=null,oa=null;function Go(){if(oa)return oa;var e,t=Ti,r=t.length,a,i="value"in $t?$t.value:$t.textContent,s=i.length;for(e=0;e<r&&t[e]===i[e];e++);var o=r-e;for(a=1;a<=o&&t[r-a]===i[s-a];a++);return oa=i.slice(e,1<a?1-a:void 0)}function la(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ca(){return!0}function Ko(){return!1}function ct(e){function t(r,a,i,s,o){this._reactName=r,this._targetInst=i,this.type=a,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(r=e[p],this[p]=r?r(s):s[p]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ca:Ko,this.isPropagationStopped=Ko,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ca)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ca)},persist:function(){},isPersistent:ca}),t}var Ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ei=ct(Ir),yn=m({},Ir,{view:0,detail:0}),op=ct(yn),Ai,Ni,vn,da=m({},yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ri,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vn&&(vn&&e.type==="mousemove"?(Ai=e.screenX-vn.screenX,Ni=e.screenY-vn.screenY):Ni=Ai=0,vn=e),Ai)},movementY:function(e){return"movementY"in e?e.movementY:Ni}}),Wo=ct(da),lp=m({},da,{dataTransfer:0}),cp=ct(lp),dp=m({},yn,{relatedTarget:0}),Pi=ct(dp),up=m({},Ir,{animationName:0,elapsedTime:0,pseudoElement:0}),pp=ct(up),mp=m({},Ir,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gp=ct(mp),fp=m({},Ir,{data:0}),Qo=ct(fp),hp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vp[e])?!!t[e]:!1}function Ri(){return xp}var kp=m({},yn,{key:function(e){if(e.key){var t=hp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=la(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ri,charCode:function(e){return e.type==="keypress"?la(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?la(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bp=ct(kp),Sp=m({},da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$o=ct(Sp),wp=m({},yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ri}),Cp=ct(wp),jp=m({},Ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tp=ct(jp),Ep=m({},da,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ap=ct(Ep),Np=[9,13,27,32],Ii=C&&"CompositionEvent"in window,xn=null;C&&"documentMode"in document&&(xn=document.documentMode);var Pp=C&&"TextEvent"in window&&!xn,Yo=C&&(!Ii||xn&&8<xn&&11>=xn),Zo=" ",Xo=!1;function el(e,t){switch(e){case"keyup":return Np.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dr=!1;function Rp(e,t){switch(e){case"compositionend":return tl(t);case"keypress":return t.which!==32?null:(Xo=!0,Zo);case"textInput":return e=t.data,e===Zo&&Xo?null:e;default:return null}}function Ip(e,t){if(Dr)return e==="compositionend"||!Ii&&el(e,t)?(e=Go(),oa=Ti=$t=null,Dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yo&&t.locale!=="ko"?null:t.data;default:return null}}var Dp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dp[e.type]:t==="textarea"}function nl(e,t,r,a){wo(a),t=fa(t,"onChange"),0<t.length&&(r=new Ei("onChange","change",null,r,a),e.push({event:r,listeners:t}))}var kn=null,bn=null;function Mp(e){bl(e,0)}function ua(e){var t=Br(e);if(Se(t))return e}function Op(e,t){if(e==="change")return t}var al=!1;if(C){var Di;if(C){var Mi="oninput"in document;if(!Mi){var il=document.createElement("div");il.setAttribute("oninput","return;"),Mi=typeof il.oninput=="function"}Di=Mi}else Di=!1;al=Di&&(!document.documentMode||9<document.documentMode)}function sl(){kn&&(kn.detachEvent("onpropertychange",ol),bn=kn=null)}function ol(e){if(e.propertyName==="value"&&ua(bn)){var t=[];nl(t,bn,e,mi(e)),Eo(Mp,t)}}function Lp(e,t,r){e==="focusin"?(sl(),kn=t,bn=r,kn.attachEvent("onpropertychange",ol)):e==="focusout"&&sl()}function zp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ua(bn)}function Bp(e,t){if(e==="click")return ua(t)}function Up(e,t){if(e==="input"||e==="change")return ua(t)}function _p(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:_p;function Sn(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(a=0;a<r.length;a++){var i=r[a];if(!k.call(t,i)||!St(e[i],t[i]))return!1}return!0}function ll(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cl(e,t){var r=ll(e);e=0;for(var a;r;){if(r.nodeType===3){if(a=e+r.textContent.length,e<=t&&a>=t)return{node:r,offset:t-e};e=a}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ll(r)}}function dl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ul(){for(var e=window,t=Re();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Re(e.document)}return t}function Oi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fp(e){var t=ul(),r=e.focusedElem,a=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&dl(r.ownerDocument.documentElement,r)){if(a!==null&&Oi(r)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,s=Math.min(a.start,i);a=a.end===void 0?s:Math.min(a.end,i),!e.extend&&s>a&&(i=a,a=s,s=i),i=cl(r,s);var o=cl(r,a);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>a?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hp=C&&"documentMode"in document&&11>=document.documentMode,Mr=null,Li=null,wn=null,zi=!1;function pl(e,t,r){var a=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;zi||Mr==null||Mr!==Re(a)||(a=Mr,"selectionStart"in a&&Oi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),wn&&Sn(wn,a)||(wn=a,a=fa(Li,"onSelect"),0<a.length&&(t=new Ei("onSelect","select",null,t,r),e.push({event:t,listeners:a}),t.target=Mr)))}function pa(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Or={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionend:pa("Transition","TransitionEnd")},Bi={},ml={};C&&(ml=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function ma(e){if(Bi[e])return Bi[e];if(!Or[e])return e;var t=Or[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in ml)return Bi[e]=t[r];return e}var gl=ma("animationend"),fl=ma("animationiteration"),hl=ma("animationstart"),yl=ma("transitionend"),vl=new Map,xl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yt(e,t){vl.set(e,t),y(t,[e])}for(var Ui=0;Ui<xl.length;Ui++){var _i=xl[Ui],Jp=_i.toLowerCase(),qp=_i[0].toUpperCase()+_i.slice(1);Yt(Jp,"on"+qp)}Yt(gl,"onAnimationEnd"),Yt(fl,"onAnimationIteration"),Yt(hl,"onAnimationStart"),Yt("dblclick","onDoubleClick"),Yt("focusin","onFocus"),Yt("focusout","onBlur"),Yt(yl,"onTransitionEnd"),A("onMouseEnter",["mouseout","mouseover"]),A("onMouseLeave",["mouseout","mouseover"]),A("onPointerEnter",["pointerout","pointerover"]),A("onPointerLeave",["pointerout","pointerover"]),y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),y("onBeforeInput",["compositionend","keypress","textInput","paste"]),y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cn));function kl(e,t,r){var a=e.type||"unknown-event";e.currentTarget=r,Ju(a,t,void 0,e),e.currentTarget=null}function bl(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var a=e[r],i=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var o=a.length-1;0<=o;o--){var p=a[o],g=p.instance,w=p.currentTarget;if(p=p.listener,g!==s&&i.isPropagationStopped())break e;kl(i,p,w),s=g}else for(o=0;o<a.length;o++){if(p=a[o],g=p.instance,w=p.currentTarget,p=p.listener,g!==s&&i.isPropagationStopped())break e;kl(i,p,w),s=g}}}if(Yn)throw e=yi,Yn=!1,yi=null,e}function we(e,t){var r=t[Wi];r===void 0&&(r=t[Wi]=new Set);var a=e+"__bubble";r.has(a)||(Sl(t,e,2,!1),r.add(a))}function Fi(e,t,r){var a=0;t&&(a|=4),Sl(r,e,a,t)}var ga="_reactListening"+Math.random().toString(36).slice(2);function jn(e){if(!e[ga]){e[ga]=!0,b.forEach(function(r){r!=="selectionchange"&&(Vp.has(r)||Fi(r,!1,e),Fi(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ga]||(t[ga]=!0,Fi("selectionchange",!1,t))}}function Sl(e,t,r,a){switch(Vo(t)){case 1:var i=ip;break;case 4:i=sp;break;default:i=Ci}r=i.bind(null,t,r,e),i=void 0,!hi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Hi(e,t,r,a,i){var s=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var p=a.stateNode.containerInfo;if(p===i||p.nodeType===8&&p.parentNode===i)break;if(o===4)for(o=a.return;o!==null;){var g=o.tag;if((g===3||g===4)&&(g=o.stateNode.containerInfo,g===i||g.nodeType===8&&g.parentNode===i))return;o=o.return}for(;p!==null;){if(o=gr(p),o===null)return;if(g=o.tag,g===5||g===6){a=s=o;continue e}p=p.parentNode}}a=a.return}Eo(function(){var w=s,R=mi(r),D=[];e:{var P=vl.get(e);if(P!==void 0){var V=Ei,Q=e;switch(e){case"keypress":if(la(r)===0)break e;case"keydown":case"keyup":V=bp;break;case"focusin":Q="focus",V=Pi;break;case"focusout":Q="blur",V=Pi;break;case"beforeblur":case"afterblur":V=Pi;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=Wo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=cp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=Cp;break;case gl:case fl:case hl:V=pp;break;case yl:V=Tp;break;case"scroll":V=op;break;case"wheel":V=Ap;break;case"copy":case"cut":case"paste":V=gp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=$o}var $=(t&4)!==0,Me=!$&&e==="scroll",h=$?P!==null?P+"Capture":null:P;$=[];for(var f=w,v;f!==null;){v=f;var L=v.stateNode;if(v.tag===5&&L!==null&&(v=L,h!==null&&(L=on(f,h),L!=null&&$.push(Tn(f,L,v)))),Me)break;f=f.return}0<$.length&&(P=new V(P,Q,null,r,R),D.push({event:P,listeners:$}))}}if((t&7)===0){e:{if(P=e==="mouseover"||e==="pointerover",V=e==="mouseout"||e==="pointerout",P&&r!==pi&&(Q=r.relatedTarget||r.fromElement)&&(gr(Q)||Q[Lt]))break e;if((V||P)&&(P=R.window===R?R:(P=R.ownerDocument)?P.defaultView||P.parentWindow:window,V?(Q=r.relatedTarget||r.toElement,V=w,Q=Q?gr(Q):null,Q!==null&&(Me=mr(Q),Q!==Me||Q.tag!==5&&Q.tag!==6)&&(Q=null)):(V=null,Q=w),V!==Q)){if($=Wo,L="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&($=$o,L="onPointerLeave",h="onPointerEnter",f="pointer"),Me=V==null?P:Br(V),v=Q==null?P:Br(Q),P=new $(L,f+"leave",V,r,R),P.target=Me,P.relatedTarget=v,L=null,gr(R)===w&&($=new $(h,f+"enter",Q,r,R),$.target=v,$.relatedTarget=Me,L=$),Me=L,V&&Q)t:{for($=V,h=Q,f=0,v=$;v;v=Lr(v))f++;for(v=0,L=h;L;L=Lr(L))v++;for(;0<f-v;)$=Lr($),f--;for(;0<v-f;)h=Lr(h),v--;for(;f--;){if($===h||h!==null&&$===h.alternate)break t;$=Lr($),h=Lr(h)}$=null}else $=null;V!==null&&wl(D,P,V,$,!1),Q!==null&&Me!==null&&wl(D,Me,Q,$,!0)}}e:{if(P=w?Br(w):window,V=P.nodeName&&P.nodeName.toLowerCase(),V==="select"||V==="input"&&P.type==="file")var Z=Op;else if(rl(P))if(al)Z=Up;else{Z=zp;var ne=Lp}else(V=P.nodeName)&&V.toLowerCase()==="input"&&(P.type==="checkbox"||P.type==="radio")&&(Z=Bp);if(Z&&(Z=Z(e,w))){nl(D,Z,r,R);break e}ne&&ne(e,P,w),e==="focusout"&&(ne=P._wrapperState)&&ne.controlled&&P.type==="number"&&kt(P,"number",P.value)}switch(ne=w?Br(w):window,e){case"focusin":(rl(ne)||ne.contentEditable==="true")&&(Mr=ne,Li=w,wn=null);break;case"focusout":wn=Li=Mr=null;break;case"mousedown":zi=!0;break;case"contextmenu":case"mouseup":case"dragend":zi=!1,pl(D,r,R);break;case"selectionchange":if(Hp)break;case"keydown":case"keyup":pl(D,r,R)}var ae;if(Ii)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else Dr?el(e,r)&&(se="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(se="onCompositionStart");se&&(Yo&&r.locale!=="ko"&&(Dr||se!=="onCompositionStart"?se==="onCompositionEnd"&&Dr&&(ae=Go()):($t=R,Ti="value"in $t?$t.value:$t.textContent,Dr=!0)),ne=fa(w,se),0<ne.length&&(se=new Qo(se,e,null,r,R),D.push({event:se,listeners:ne}),ae?se.data=ae:(ae=tl(r),ae!==null&&(se.data=ae)))),(ae=Pp?Rp(e,r):Ip(e,r))&&(w=fa(w,"onBeforeInput"),0<w.length&&(R=new Qo("onBeforeInput","beforeinput",null,r,R),D.push({event:R,listeners:w}),R.data=ae))}bl(D,t)})}function Tn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function fa(e,t){for(var r=t+"Capture",a=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=on(e,r),s!=null&&a.unshift(Tn(e,s,i)),s=on(e,t),s!=null&&a.push(Tn(e,s,i))),e=e.return}return a}function Lr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wl(e,t,r,a,i){for(var s=t._reactName,o=[];r!==null&&r!==a;){var p=r,g=p.alternate,w=p.stateNode;if(g!==null&&g===a)break;p.tag===5&&w!==null&&(p=w,i?(g=on(r,s),g!=null&&o.unshift(Tn(r,g,p))):i||(g=on(r,s),g!=null&&o.push(Tn(r,g,p)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var Gp=/\r\n?/g,Kp=/\u0000|\uFFFD/g;function Cl(e){return(typeof e=="string"?e:""+e).replace(Gp,`
`).replace(Kp,"")}function ha(e,t,r){if(t=Cl(t),Cl(e)!==t&&r)throw Error(u(425))}function ya(){}var Ji=null,qi=null;function Vi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gi=typeof setTimeout=="function"?setTimeout:void 0,Wp=typeof clearTimeout=="function"?clearTimeout:void 0,jl=typeof Promise=="function"?Promise:void 0,Qp=typeof queueMicrotask=="function"?queueMicrotask:typeof jl<"u"?function(e){return jl.resolve(null).then(e).catch($p)}:Gi;function $p(e){setTimeout(function(){throw e})}function Ki(e,t){var r=t,a=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(a===0){e.removeChild(i),hn(t);return}a--}else r!=="$"&&r!=="$?"&&r!=="$!"||a++;r=i}while(r);hn(t)}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Tl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var zr=Math.random().toString(36).slice(2),Pt="__reactFiber$"+zr,En="__reactProps$"+zr,Lt="__reactContainer$"+zr,Wi="__reactEvents$"+zr,Yp="__reactListeners$"+zr,Zp="__reactHandles$"+zr;function gr(e){var t=e[Pt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Lt]||r[Pt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Tl(e);e!==null;){if(r=e[Pt])return r;e=Tl(e)}return t}e=r,r=e.parentNode}return null}function An(e){return e=e[Pt]||e[Lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Br(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function va(e){return e[En]||null}var Qi=[],Ur=-1;function Xt(e){return{current:e}}function Ce(e){0>Ur||(e.current=Qi[Ur],Qi[Ur]=null,Ur--)}function ke(e,t){Ur++,Qi[Ur]=e.current,e.current=t}var er={},Qe=Xt(er),nt=Xt(!1),fr=er;function _r(e,t){var r=e.type.contextTypes;if(!r)return er;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in r)i[s]=t[s];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function at(e){return e=e.childContextTypes,e!=null}function xa(){Ce(nt),Ce(Qe)}function El(e,t,r){if(Qe.current!==er)throw Error(u(168));ke(Qe,t),ke(nt,r)}function Al(e,t,r){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return r;a=a.getChildContext();for(var i in a)if(!(i in t))throw Error(u(108,H(e)||"Unknown",i));return m({},r,a)}function ka(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||er,fr=Qe.current,ke(Qe,e),ke(nt,nt.current),!0}function Nl(e,t,r){var a=e.stateNode;if(!a)throw Error(u(169));r?(e=Al(e,t,fr),a.__reactInternalMemoizedMergedChildContext=e,Ce(nt),Ce(Qe),ke(Qe,e)):Ce(nt),ke(nt,r)}var zt=null,ba=!1,$i=!1;function Pl(e){zt===null?zt=[e]:zt.push(e)}function Xp(e){ba=!0,Pl(e)}function tr(){if(!$i&&zt!==null){$i=!0;var e=0,t=ye;try{var r=zt;for(ye=1;e<r.length;e++){var a=r[e];do a=a(!0);while(a!==null)}zt=null,ba=!1}catch(i){throw zt!==null&&(zt=zt.slice(e+1)),Io(vi,tr),i}finally{ye=t,$i=!1}}return null}var Fr=[],Hr=0,Sa=null,wa=0,gt=[],ft=0,hr=null,Bt=1,Ut="";function yr(e,t){Fr[Hr++]=wa,Fr[Hr++]=Sa,Sa=e,wa=t}function Rl(e,t,r){gt[ft++]=Bt,gt[ft++]=Ut,gt[ft++]=hr,hr=e;var a=Bt;e=Ut;var i=32-bt(a)-1;a&=~(1<<i),r+=1;var s=32-bt(t)+i;if(30<s){var o=i-i%5;s=(a&(1<<o)-1).toString(32),a>>=o,i-=o,Bt=1<<32-bt(t)+i|r<<i|a,Ut=s+e}else Bt=1<<s|r<<i|a,Ut=e}function Yi(e){e.return!==null&&(yr(e,1),Rl(e,1,0))}function Zi(e){for(;e===Sa;)Sa=Fr[--Hr],Fr[Hr]=null,wa=Fr[--Hr],Fr[Hr]=null;for(;e===hr;)hr=gt[--ft],gt[ft]=null,Ut=gt[--ft],gt[ft]=null,Bt=gt[--ft],gt[ft]=null}var dt=null,ut=null,je=!1,wt=null;function Il(e,t){var r=xt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Dl(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,ut=Zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,ut=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=hr!==null?{id:Bt,overflow:Ut}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=xt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,dt=e,ut=null,!0):!1;default:return!1}}function Xi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function es(e){if(je){var t=ut;if(t){var r=t;if(!Dl(e,t)){if(Xi(e))throw Error(u(418));t=Zt(r.nextSibling);var a=dt;t&&Dl(e,t)?Il(a,r):(e.flags=e.flags&-4097|2,je=!1,dt=e)}}else{if(Xi(e))throw Error(u(418));e.flags=e.flags&-4097|2,je=!1,dt=e}}}function Ml(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function Ca(e){if(e!==dt)return!1;if(!je)return Ml(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Vi(e.type,e.memoizedProps)),t&&(t=ut)){if(Xi(e))throw Ol(),Error(u(418));for(;t;)Il(e,t),t=Zt(t.nextSibling)}if(Ml(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ut=Zt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ut=null}}else ut=dt?Zt(e.stateNode.nextSibling):null;return!0}function Ol(){for(var e=ut;e;)e=Zt(e.nextSibling)}function Jr(){ut=dt=null,je=!1}function ts(e){wt===null?wt=[e]:wt.push(e)}var em=ve.ReactCurrentBatchConfig;function Nn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(u(309));var a=r.stateNode}if(!a)throw Error(u(147,e));var i=a,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var p=i.refs;o===null?delete p[s]:p[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(u(284));if(!r._owner)throw Error(u(290,e))}return e}function ja(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ll(e){var t=e._init;return t(e._payload)}function zl(e){function t(h,f){if(e){var v=h.deletions;v===null?(h.deletions=[f],h.flags|=16):v.push(f)}}function r(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function a(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function i(h,f){return h=cr(h,f),h.index=0,h.sibling=null,h}function s(h,f,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<f?(h.flags|=2,f):v):(h.flags|=2,f)):(h.flags|=1048576,f)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function p(h,f,v,L){return f===null||f.tag!==6?(f=Gs(v,h.mode,L),f.return=h,f):(f=i(f,v),f.return=h,f)}function g(h,f,v,L){var Z=v.type;return Z===re?R(h,f,v.props.children,L,v.key):f!==null&&(f.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===oe&&Ll(Z)===f.type)?(L=i(f,v.props),L.ref=Nn(h,f,v),L.return=h,L):(L=Qa(v.type,v.key,v.props,null,h.mode,L),L.ref=Nn(h,f,v),L.return=h,L)}function w(h,f,v,L){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=Ks(v,h.mode,L),f.return=h,f):(f=i(f,v.children||[]),f.return=h,f)}function R(h,f,v,L,Z){return f===null||f.tag!==7?(f=jr(v,h.mode,L,Z),f.return=h,f):(f=i(f,v),f.return=h,f)}function D(h,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Gs(""+f,h.mode,v),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ne:return v=Qa(f.type,f.key,f.props,null,h.mode,v),v.ref=Nn(h,null,f),v.return=h,v;case Te:return f=Ks(f,h.mode,v),f.return=h,f;case oe:var L=f._init;return D(h,L(f._payload),v)}if(We(f)||Y(f))return f=jr(f,h.mode,v,null),f.return=h,f;ja(h,f)}return null}function P(h,f,v,L){var Z=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return Z!==null?null:p(h,f,""+v,L);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ne:return v.key===Z?g(h,f,v,L):null;case Te:return v.key===Z?w(h,f,v,L):null;case oe:return Z=v._init,P(h,f,Z(v._payload),L)}if(We(v)||Y(v))return Z!==null?null:R(h,f,v,L,null);ja(h,v)}return null}function V(h,f,v,L,Z){if(typeof L=="string"&&L!==""||typeof L=="number")return h=h.get(v)||null,p(f,h,""+L,Z);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Ne:return h=h.get(L.key===null?v:L.key)||null,g(f,h,L,Z);case Te:return h=h.get(L.key===null?v:L.key)||null,w(f,h,L,Z);case oe:var ne=L._init;return V(h,f,v,ne(L._payload),Z)}if(We(L)||Y(L))return h=h.get(v)||null,R(f,h,L,Z,null);ja(f,L)}return null}function Q(h,f,v,L){for(var Z=null,ne=null,ae=f,se=f=0,Fe=null;ae!==null&&se<v.length;se++){ae.index>se?(Fe=ae,ae=null):Fe=ae.sibling;var fe=P(h,ae,v[se],L);if(fe===null){ae===null&&(ae=Fe);break}e&&ae&&fe.alternate===null&&t(h,ae),f=s(fe,f,se),ne===null?Z=fe:ne.sibling=fe,ne=fe,ae=Fe}if(se===v.length)return r(h,ae),je&&yr(h,se),Z;if(ae===null){for(;se<v.length;se++)ae=D(h,v[se],L),ae!==null&&(f=s(ae,f,se),ne===null?Z=ae:ne.sibling=ae,ne=ae);return je&&yr(h,se),Z}for(ae=a(h,ae);se<v.length;se++)Fe=V(ae,h,se,v[se],L),Fe!==null&&(e&&Fe.alternate!==null&&ae.delete(Fe.key===null?se:Fe.key),f=s(Fe,f,se),ne===null?Z=Fe:ne.sibling=Fe,ne=Fe);return e&&ae.forEach(function(dr){return t(h,dr)}),je&&yr(h,se),Z}function $(h,f,v,L){var Z=Y(v);if(typeof Z!="function")throw Error(u(150));if(v=Z.call(v),v==null)throw Error(u(151));for(var ne=Z=null,ae=f,se=f=0,Fe=null,fe=v.next();ae!==null&&!fe.done;se++,fe=v.next()){ae.index>se?(Fe=ae,ae=null):Fe=ae.sibling;var dr=P(h,ae,fe.value,L);if(dr===null){ae===null&&(ae=Fe);break}e&&ae&&dr.alternate===null&&t(h,ae),f=s(dr,f,se),ne===null?Z=dr:ne.sibling=dr,ne=dr,ae=Fe}if(fe.done)return r(h,ae),je&&yr(h,se),Z;if(ae===null){for(;!fe.done;se++,fe=v.next())fe=D(h,fe.value,L),fe!==null&&(f=s(fe,f,se),ne===null?Z=fe:ne.sibling=fe,ne=fe);return je&&yr(h,se),Z}for(ae=a(h,ae);!fe.done;se++,fe=v.next())fe=V(ae,h,se,fe.value,L),fe!==null&&(e&&fe.alternate!==null&&ae.delete(fe.key===null?se:fe.key),f=s(fe,f,se),ne===null?Z=fe:ne.sibling=fe,ne=fe);return e&&ae.forEach(function(Dm){return t(h,Dm)}),je&&yr(h,se),Z}function Me(h,f,v,L){if(typeof v=="object"&&v!==null&&v.type===re&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ne:e:{for(var Z=v.key,ne=f;ne!==null;){if(ne.key===Z){if(Z=v.type,Z===re){if(ne.tag===7){r(h,ne.sibling),f=i(ne,v.props.children),f.return=h,h=f;break e}}else if(ne.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===oe&&Ll(Z)===ne.type){r(h,ne.sibling),f=i(ne,v.props),f.ref=Nn(h,ne,v),f.return=h,h=f;break e}r(h,ne);break}else t(h,ne);ne=ne.sibling}v.type===re?(f=jr(v.props.children,h.mode,L,v.key),f.return=h,h=f):(L=Qa(v.type,v.key,v.props,null,h.mode,L),L.ref=Nn(h,f,v),L.return=h,h=L)}return o(h);case Te:e:{for(ne=v.key;f!==null;){if(f.key===ne)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){r(h,f.sibling),f=i(f,v.children||[]),f.return=h,h=f;break e}else{r(h,f);break}else t(h,f);f=f.sibling}f=Ks(v,h.mode,L),f.return=h,h=f}return o(h);case oe:return ne=v._init,Me(h,f,ne(v._payload),L)}if(We(v))return Q(h,f,v,L);if(Y(v))return $(h,f,v,L);ja(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(r(h,f.sibling),f=i(f,v),f.return=h,h=f):(r(h,f),f=Gs(v,h.mode,L),f.return=h,h=f),o(h)):r(h,f)}return Me}var qr=zl(!0),Bl=zl(!1),Ta=Xt(null),Ea=null,Vr=null,rs=null;function ns(){rs=Vr=Ea=null}function as(e){var t=Ta.current;Ce(Ta),e._currentValue=t}function is(e,t,r){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===r)break;e=e.return}}function Gr(e,t){Ea=e,rs=Vr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(it=!0),e.firstContext=null)}function ht(e){var t=e._currentValue;if(rs!==e)if(e={context:e,memoizedValue:t,next:null},Vr===null){if(Ea===null)throw Error(u(308));Vr=e,Ea.dependencies={lanes:0,firstContext:e}}else Vr=Vr.next=e;return t}var vr=null;function ss(e){vr===null?vr=[e]:vr.push(e)}function Ul(e,t,r,a){var i=t.interleaved;return i===null?(r.next=r,ss(t)):(r.next=i.next,i.next=r),t.interleaved=r,_t(e,a)}function _t(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var rr=!1;function os(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _l(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function nr(e,t,r){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ge&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,_t(e,r)}return i=a.interleaved,i===null?(t.next=t,ss(a)):(t.next=i.next,i.next=t),a.interleaved=t,_t(e,r)}function Aa(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,bi(e,r)}}function Fl(e,t){var r=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,r===a)){var i=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?i=s=o:s=s.next=o,r=r.next}while(r!==null);s===null?i=s=t:s=s.next=t}else i=s=t;r={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:a.shared,effects:a.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Na(e,t,r,a){var i=e.updateQueue;rr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var g=p,w=g.next;g.next=null,o===null?s=w:o.next=w,o=g;var R=e.alternate;R!==null&&(R=R.updateQueue,p=R.lastBaseUpdate,p!==o&&(p===null?R.firstBaseUpdate=w:p.next=w,R.lastBaseUpdate=g))}if(s!==null){var D=i.baseState;o=0,R=w=g=null,p=s;do{var P=p.lane,V=p.eventTime;if((a&P)===P){R!==null&&(R=R.next={eventTime:V,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var Q=e,$=p;switch(P=t,V=r,$.tag){case 1:if(Q=$.payload,typeof Q=="function"){D=Q.call(V,D,P);break e}D=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=$.payload,P=typeof Q=="function"?Q.call(V,D,P):Q,P==null)break e;D=m({},D,P);break e;case 2:rr=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,P=i.effects,P===null?i.effects=[p]:P.push(p))}else V={eventTime:V,lane:P,tag:p.tag,payload:p.payload,callback:p.callback,next:null},R===null?(w=R=V,g=D):R=R.next=V,o|=P;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;P=p,p=P.next,P.next=null,i.lastBaseUpdate=P,i.shared.pending=null}}while(!0);if(R===null&&(g=D),i.baseState=g,i.firstBaseUpdate=w,i.lastBaseUpdate=R,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);br|=o,e.lanes=o,e.memoizedState=D}}function Hl(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],i=a.callback;if(i!==null){if(a.callback=null,a=r,typeof i!="function")throw Error(u(191,i));i.call(a)}}}var Pn={},Rt=Xt(Pn),Rn=Xt(Pn),In=Xt(Pn);function xr(e){if(e===Pn)throw Error(u(174));return e}function ls(e,t){switch(ke(In,t),ke(Rn,e),ke(Rt,Pn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:an(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=an(t,e)}Ce(Rt),ke(Rt,t)}function Kr(){Ce(Rt),Ce(Rn),Ce(In)}function Jl(e){xr(In.current);var t=xr(Rt.current),r=an(t,e.type);t!==r&&(ke(Rn,e),ke(Rt,r))}function cs(e){Rn.current===e&&(Ce(Rt),Ce(Rn))}var Ee=Xt(0);function Pa(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ds=[];function us(){for(var e=0;e<ds.length;e++)ds[e]._workInProgressVersionPrimary=null;ds.length=0}var Ra=ve.ReactCurrentDispatcher,ps=ve.ReactCurrentBatchConfig,kr=0,Ae=null,Le=null,Ue=null,Ia=!1,Dn=!1,Mn=0,tm=0;function $e(){throw Error(u(321))}function ms(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!St(e[r],t[r]))return!1;return!0}function gs(e,t,r,a,i,s){if(kr=s,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ra.current=e===null||e.memoizedState===null?im:sm,e=r(a,i),Dn){s=0;do{if(Dn=!1,Mn=0,25<=s)throw Error(u(301));s+=1,Ue=Le=null,t.updateQueue=null,Ra.current=om,e=r(a,i)}while(Dn)}if(Ra.current=Oa,t=Le!==null&&Le.next!==null,kr=0,Ue=Le=Ae=null,Ia=!1,t)throw Error(u(300));return e}function fs(){var e=Mn!==0;return Mn=0,e}function It(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Ae.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function yt(){if(Le===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=Ue===null?Ae.memoizedState:Ue.next;if(t!==null)Ue=t,Le=e;else{if(e===null)throw Error(u(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Ue===null?Ae.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function On(e,t){return typeof t=="function"?t(e):t}function hs(e){var t=yt(),r=t.queue;if(r===null)throw Error(u(311));r.lastRenderedReducer=e;var a=Le,i=a.baseQueue,s=r.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}a.baseQueue=i=s,r.pending=null}if(i!==null){s=i.next,a=a.baseState;var p=o=null,g=null,w=s;do{var R=w.lane;if((kr&R)===R)g!==null&&(g=g.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),a=w.hasEagerState?w.eagerState:e(a,w.action);else{var D={lane:R,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};g===null?(p=g=D,o=a):g=g.next=D,Ae.lanes|=R,br|=R}w=w.next}while(w!==null&&w!==s);g===null?o=a:g.next=p,St(a,t.memoizedState)||(it=!0),t.memoizedState=a,t.baseState=o,t.baseQueue=g,r.lastRenderedState=a}if(e=r.interleaved,e!==null){i=e;do s=i.lane,Ae.lanes|=s,br|=s,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ys(e){var t=yt(),r=t.queue;if(r===null)throw Error(u(311));r.lastRenderedReducer=e;var a=r.dispatch,i=r.pending,s=t.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);St(s,t.memoizedState)||(it=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,a]}function ql(){}function Vl(e,t){var r=Ae,a=yt(),i=t(),s=!St(a.memoizedState,i);if(s&&(a.memoizedState=i,it=!0),a=a.queue,vs(Wl.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||Ue!==null&&Ue.memoizedState.tag&1){if(r.flags|=2048,Ln(9,Kl.bind(null,r,a,i,t),void 0,null),_e===null)throw Error(u(349));(kr&30)!==0||Gl(r,t,i)}return i}function Gl(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Kl(e,t,r,a){t.value=r,t.getSnapshot=a,Ql(t)&&$l(e)}function Wl(e,t,r){return r(function(){Ql(t)&&$l(e)})}function Ql(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!St(e,r)}catch{return!0}}function $l(e){var t=_t(e,1);t!==null&&Et(t,e,1,-1)}function Yl(e){var t=It();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:e},t.queue=e,e=e.dispatch=am.bind(null,Ae,e),[t.memoizedState,e]}function Ln(e,t,r,a){return e={tag:e,create:t,destroy:r,deps:a,next:null},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(a=r.next,r.next=e,e.next=a,t.lastEffect=e)),e}function Zl(){return yt().memoizedState}function Da(e,t,r,a){var i=It();Ae.flags|=e,i.memoizedState=Ln(1|t,r,void 0,a===void 0?null:a)}function Ma(e,t,r,a){var i=yt();a=a===void 0?null:a;var s=void 0;if(Le!==null){var o=Le.memoizedState;if(s=o.destroy,a!==null&&ms(a,o.deps)){i.memoizedState=Ln(t,r,s,a);return}}Ae.flags|=e,i.memoizedState=Ln(1|t,r,s,a)}function Xl(e,t){return Da(8390656,8,e,t)}function vs(e,t){return Ma(2048,8,e,t)}function ec(e,t){return Ma(4,2,e,t)}function tc(e,t){return Ma(4,4,e,t)}function rc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nc(e,t,r){return r=r!=null?r.concat([e]):null,Ma(4,4,rc.bind(null,t,e),r)}function xs(){}function ac(e,t){var r=yt();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&ms(t,a[1])?a[0]:(r.memoizedState=[e,t],e)}function ic(e,t){var r=yt();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&ms(t,a[1])?a[0]:(e=e(),r.memoizedState=[e,t],e)}function sc(e,t,r){return(kr&21)===0?(e.baseState&&(e.baseState=!1,it=!0),e.memoizedState=r):(St(r,t)||(r=Lo(),Ae.lanes|=r,br|=r,e.baseState=!0),t)}function rm(e,t){var r=ye;ye=r!==0&&4>r?r:4,e(!0);var a=ps.transition;ps.transition={};try{e(!1),t()}finally{ye=r,ps.transition=a}}function oc(){return yt().memoizedState}function nm(e,t,r){var a=or(e);if(r={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null},lc(e))cc(t,r);else if(r=Ul(e,t,r,a),r!==null){var i=tt();Et(r,e,a,i),dc(r,t,a)}}function am(e,t,r){var a=or(e),i={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null};if(lc(e))cc(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,p=s(o,r);if(i.hasEagerState=!0,i.eagerState=p,St(p,o)){var g=t.interleaved;g===null?(i.next=i,ss(t)):(i.next=g.next,g.next=i),t.interleaved=i;return}}catch{}finally{}r=Ul(e,t,i,a),r!==null&&(i=tt(),Et(r,e,a,i),dc(r,t,a))}}function lc(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function cc(e,t){Dn=Ia=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function dc(e,t,r){if((r&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,bi(e,r)}}var Oa={readContext:ht,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},im={readContext:ht,useCallback:function(e,t){return It().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:Xl,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Da(4194308,4,rc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Da(4194308,4,e,t)},useInsertionEffect:function(e,t){return Da(4,2,e,t)},useMemo:function(e,t){var r=It();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var a=It();return t=r!==void 0?r(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=nm.bind(null,Ae,e),[a.memoizedState,e]},useRef:function(e){var t=It();return e={current:e},t.memoizedState=e},useState:Yl,useDebugValue:xs,useDeferredValue:function(e){return It().memoizedState=e},useTransition:function(){var e=Yl(!1),t=e[0];return e=rm.bind(null,e[1]),It().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var a=Ae,i=It();if(je){if(r===void 0)throw Error(u(407));r=r()}else{if(r=t(),_e===null)throw Error(u(349));(kr&30)!==0||Gl(a,t,r)}i.memoizedState=r;var s={value:r,getSnapshot:t};return i.queue=s,Xl(Wl.bind(null,a,s,e),[e]),a.flags|=2048,Ln(9,Kl.bind(null,a,s,r,t),void 0,null),r},useId:function(){var e=It(),t=_e.identifierPrefix;if(je){var r=Ut,a=Bt;r=(a&~(1<<32-bt(a)-1)).toString(32)+r,t=":"+t+"R"+r,r=Mn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=tm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sm={readContext:ht,useCallback:ac,useContext:ht,useEffect:vs,useImperativeHandle:nc,useInsertionEffect:ec,useLayoutEffect:tc,useMemo:ic,useReducer:hs,useRef:Zl,useState:function(){return hs(On)},useDebugValue:xs,useDeferredValue:function(e){var t=yt();return sc(t,Le.memoizedState,e)},useTransition:function(){var e=hs(On)[0],t=yt().memoizedState;return[e,t]},useMutableSource:ql,useSyncExternalStore:Vl,useId:oc,unstable_isNewReconciler:!1},om={readContext:ht,useCallback:ac,useContext:ht,useEffect:vs,useImperativeHandle:nc,useInsertionEffect:ec,useLayoutEffect:tc,useMemo:ic,useReducer:ys,useRef:Zl,useState:function(){return ys(On)},useDebugValue:xs,useDeferredValue:function(e){var t=yt();return Le===null?t.memoizedState=e:sc(t,Le.memoizedState,e)},useTransition:function(){var e=ys(On)[0],t=yt().memoizedState;return[e,t]},useMutableSource:ql,useSyncExternalStore:Vl,useId:oc,unstable_isNewReconciler:!1};function Ct(e,t){if(e&&e.defaultProps){t=m({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ks(e,t,r,a){t=e.memoizedState,r=r(a,t),r=r==null?t:m({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var La={isMounted:function(e){return(e=e._reactInternals)?mr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var a=tt(),i=or(e),s=Ft(a,i);s.payload=t,r!=null&&(s.callback=r),t=nr(e,s,i),t!==null&&(Et(t,e,i,a),Aa(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var a=tt(),i=or(e),s=Ft(a,i);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=nr(e,s,i),t!==null&&(Et(t,e,i,a),Aa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=tt(),a=or(e),i=Ft(r,a);i.tag=2,t!=null&&(i.callback=t),t=nr(e,i,a),t!==null&&(Et(t,e,a,r),Aa(t,e,a))}};function uc(e,t,r,a,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,o):t.prototype&&t.prototype.isPureReactComponent?!Sn(r,a)||!Sn(i,s):!0}function pc(e,t,r){var a=!1,i=er,s=t.contextType;return typeof s=="object"&&s!==null?s=ht(s):(i=at(t)?fr:Qe.current,a=t.contextTypes,s=(a=a!=null)?_r(e,i):er),t=new t(r,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=La,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function mc(e,t,r,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,a),t.state!==e&&La.enqueueReplaceState(t,t.state,null)}function bs(e,t,r,a){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},os(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=ht(s):(s=at(t)?fr:Qe.current,i.context=_r(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ks(e,t,s,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&La.enqueueReplaceState(i,i.state,null),Na(e,r,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Wr(e,t){try{var r="",a=t;do r+=q(a),a=a.return;while(a);var i=r}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Ss(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ws(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var lm=typeof WeakMap=="function"?WeakMap:Map;function gc(e,t,r){r=Ft(-1,r),r.tag=3,r.payload={element:null};var a=t.value;return r.callback=function(){Ja||(Ja=!0,Bs=a),ws(e,t)},r}function fc(e,t,r){r=Ft(-1,r),r.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=t.value;r.payload=function(){return a(i)},r.callback=function(){ws(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){ws(e,t),typeof a!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function hc(e,t,r){var a=e.pingCache;if(a===null){a=e.pingCache=new lm;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(r)||(i.add(r),e=Sm.bind(null,e,t,r),t.then(e,e))}function yc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vc(e,t,r,a,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Ft(-1,1),t.tag=2,nr(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var cm=ve.ReactCurrentOwner,it=!1;function et(e,t,r,a){t.child=e===null?Bl(t,null,r,a):qr(t,e.child,r,a)}function xc(e,t,r,a,i){r=r.render;var s=t.ref;return Gr(t,i),a=gs(e,t,r,a,s,i),r=fs(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ht(e,t,i)):(je&&r&&Yi(t),t.flags|=1,et(e,t,a,i),t.child)}function kc(e,t,r,a,i){if(e===null){var s=r.type;return typeof s=="function"&&!Vs(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,bc(e,t,s,a,i)):(e=Qa(r.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&i)===0){var o=s.memoizedProps;if(r=r.compare,r=r!==null?r:Sn,r(o,a)&&e.ref===t.ref)return Ht(e,t,i)}return t.flags|=1,e=cr(s,a),e.ref=t.ref,e.return=t,t.child=e}function bc(e,t,r,a,i){if(e!==null){var s=e.memoizedProps;if(Sn(s,a)&&e.ref===t.ref)if(it=!1,t.pendingProps=a=s,(e.lanes&i)!==0)(e.flags&131072)!==0&&(it=!0);else return t.lanes=e.lanes,Ht(e,t,i)}return Cs(e,t,r,a,i)}function Sc(e,t,r){var a=t.pendingProps,i=a.children,s=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke($r,pt),pt|=r;else{if((r&1073741824)===0)return e=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ke($r,pt),pt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=s!==null?s.baseLanes:r,ke($r,pt),pt|=a}else s!==null?(a=s.baseLanes|r,t.memoizedState=null):a=r,ke($r,pt),pt|=a;return et(e,t,i,r),t.child}function wc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Cs(e,t,r,a,i){var s=at(r)?fr:Qe.current;return s=_r(t,s),Gr(t,i),r=gs(e,t,r,a,s,i),a=fs(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ht(e,t,i)):(je&&a&&Yi(t),t.flags|=1,et(e,t,r,i),t.child)}function Cc(e,t,r,a,i){if(at(r)){var s=!0;ka(t)}else s=!1;if(Gr(t,i),t.stateNode===null)Ba(e,t),pc(t,r,a),bs(t,r,a,i),a=!0;else if(e===null){var o=t.stateNode,p=t.memoizedProps;o.props=p;var g=o.context,w=r.contextType;typeof w=="object"&&w!==null?w=ht(w):(w=at(r)?fr:Qe.current,w=_r(t,w));var R=r.getDerivedStateFromProps,D=typeof R=="function"||typeof o.getSnapshotBeforeUpdate=="function";D||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(p!==a||g!==w)&&mc(t,o,a,w),rr=!1;var P=t.memoizedState;o.state=P,Na(t,a,o,i),g=t.memoizedState,p!==a||P!==g||nt.current||rr?(typeof R=="function"&&(ks(t,r,R,a),g=t.memoizedState),(p=rr||uc(t,r,p,a,P,g,w))?(D||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=g),o.props=a,o.state=g,o.context=w,a=p):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,_l(e,t),p=t.memoizedProps,w=t.type===t.elementType?p:Ct(t.type,p),o.props=w,D=t.pendingProps,P=o.context,g=r.contextType,typeof g=="object"&&g!==null?g=ht(g):(g=at(r)?fr:Qe.current,g=_r(t,g));var V=r.getDerivedStateFromProps;(R=typeof V=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(p!==D||P!==g)&&mc(t,o,a,g),rr=!1,P=t.memoizedState,o.state=P,Na(t,a,o,i);var Q=t.memoizedState;p!==D||P!==Q||nt.current||rr?(typeof V=="function"&&(ks(t,r,V,a),Q=t.memoizedState),(w=rr||uc(t,r,w,a,P,Q,g)||!1)?(R||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,Q,g),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,Q,g)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||p===e.memoizedProps&&P===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&P===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=Q),o.props=a,o.state=Q,o.context=g,a=w):(typeof o.componentDidUpdate!="function"||p===e.memoizedProps&&P===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&P===e.memoizedState||(t.flags|=1024),a=!1)}return js(e,t,r,a,s,i)}function js(e,t,r,a,i,s){wc(e,t);var o=(t.flags&128)!==0;if(!a&&!o)return i&&Nl(t,r,!1),Ht(e,t,s);a=t.stateNode,cm.current=t;var p=o&&typeof r.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&o?(t.child=qr(t,e.child,null,s),t.child=qr(t,null,p,s)):et(e,t,p,s),t.memoizedState=a.state,i&&Nl(t,r,!0),t.child}function jc(e){var t=e.stateNode;t.pendingContext?El(e,t.pendingContext,t.pendingContext!==t.context):t.context&&El(e,t.context,!1),ls(e,t.containerInfo)}function Tc(e,t,r,a,i){return Jr(),ts(i),t.flags|=256,et(e,t,r,a),t.child}var Ts={dehydrated:null,treeContext:null,retryLane:0};function Es(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ec(e,t,r){var a=t.pendingProps,i=Ee.current,s=!1,o=(t.flags&128)!==0,p;if((p=o)||(p=e!==null&&e.memoizedState===null?!1:(i&2)!==0),p?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ke(Ee,i&1),e===null)return es(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=a.children,e=a.fallback,s?(a=t.mode,s=t.child,o={mode:"hidden",children:o},(a&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$a(o,a,0,null),e=jr(e,a,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Es(r),t.memoizedState=Ts,e):As(t,o));if(i=e.memoizedState,i!==null&&(p=i.dehydrated,p!==null))return dm(e,t,o,a,p,i,r);if(s){s=a.fallback,o=t.mode,i=e.child,p=i.sibling;var g={mode:"hidden",children:a.children};return(o&1)===0&&t.child!==i?(a=t.child,a.childLanes=0,a.pendingProps=g,t.deletions=null):(a=cr(i,g),a.subtreeFlags=i.subtreeFlags&14680064),p!==null?s=cr(p,s):(s=jr(s,o,r,null),s.flags|=2),s.return=t,a.return=t,a.sibling=s,t.child=a,a=s,s=t.child,o=e.child.memoizedState,o=o===null?Es(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~r,t.memoizedState=Ts,a}return s=e.child,e=s.sibling,a=cr(s,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=r),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a}function As(e,t){return t=$a({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function za(e,t,r,a){return a!==null&&ts(a),qr(t,e.child,null,r),e=As(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dm(e,t,r,a,i,s,o){if(r)return t.flags&256?(t.flags&=-257,a=Ss(Error(u(422))),za(e,t,o,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=a.fallback,i=t.mode,a=$a({mode:"visible",children:a.children},i,0,null),s=jr(s,i,o,null),s.flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,(t.mode&1)!==0&&qr(t,e.child,null,o),t.child.memoizedState=Es(o),t.memoizedState=Ts,s);if((t.mode&1)===0)return za(e,t,o,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var p=a.dgst;return a=p,s=Error(u(419)),a=Ss(s,a,void 0),za(e,t,o,a)}if(p=(o&e.childLanes)!==0,it||p){if(a=_e,a!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(a.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,_t(e,i),Et(a,e,i,-1))}return qs(),a=Ss(Error(u(421))),za(e,t,o,a)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=wm.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,ut=Zt(i.nextSibling),dt=t,je=!0,wt=null,e!==null&&(gt[ft++]=Bt,gt[ft++]=Ut,gt[ft++]=hr,Bt=e.id,Ut=e.overflow,hr=t),t=As(t,a.children),t.flags|=4096,t)}function Ac(e,t,r){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),is(e.return,t,r)}function Ns(e,t,r,a,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:r,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=r,s.tailMode=i)}function Nc(e,t,r){var a=t.pendingProps,i=a.revealOrder,s=a.tail;if(et(e,t,a.children,r),a=Ee.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ac(e,r,t);else if(e.tag===19)Ac(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ke(Ee,a),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Pa(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Ns(t,!1,i,r,s);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Pa(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Ns(t,!0,r,null,s);break;case"together":Ns(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ba(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ht(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),br|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,r=cr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=cr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function um(e,t,r){switch(t.tag){case 3:jc(t),Jr();break;case 5:Jl(t);break;case 1:at(t.type)&&ka(t);break;case 4:ls(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,i=t.memoizedProps.value;ke(Ta,a._currentValue),a._currentValue=i;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(ke(Ee,Ee.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Ec(e,t,r):(ke(Ee,Ee.current&1),e=Ht(e,t,r),e!==null?e.sibling:null);ke(Ee,Ee.current&1);break;case 19:if(a=(r&t.childLanes)!==0,(e.flags&128)!==0){if(a)return Nc(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ke(Ee,Ee.current),a)break;return null;case 22:case 23:return t.lanes=0,Sc(e,t,r)}return Ht(e,t,r)}var Pc,Ps,Rc,Ic;Pc=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Ps=function(){},Rc=function(e,t,r,a){var i=e.memoizedProps;if(i!==a){e=t.stateNode,xr(Rt.current);var s=null;switch(r){case"input":i=ue(e,i),a=ue(e,a),s=[];break;case"select":i=m({},i,{value:void 0}),a=m({},a,{value:void 0}),s=[];break;case"textarea":i=tn(e,i),a=tn(e,a),s=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=ya)}di(r,a);var o;r=null;for(w in i)if(!a.hasOwnProperty(w)&&i.hasOwnProperty(w)&&i[w]!=null)if(w==="style"){var p=i[w];for(o in p)p.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(j.hasOwnProperty(w)?s||(s=[]):(s=s||[]).push(w,null));for(w in a){var g=a[w];if(p=i!=null?i[w]:void 0,a.hasOwnProperty(w)&&g!==p&&(g!=null||p!=null))if(w==="style")if(p){for(o in p)!p.hasOwnProperty(o)||g&&g.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in g)g.hasOwnProperty(o)&&p[o]!==g[o]&&(r||(r={}),r[o]=g[o])}else r||(s||(s=[]),s.push(w,r)),r=g;else w==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,p=p?p.__html:void 0,g!=null&&p!==g&&(s=s||[]).push(w,g)):w==="children"?typeof g!="string"&&typeof g!="number"||(s=s||[]).push(w,""+g):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(j.hasOwnProperty(w)?(g!=null&&w==="onScroll"&&we("scroll",e),s||p===g||(s=[])):(s=s||[]).push(w,g))}r&&(s=s||[]).push("style",r);var w=s;(t.updateQueue=w)&&(t.flags|=4)}},Ic=function(e,t,r,a){r!==a&&(t.flags|=4)};function zn(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,a=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=r,t}function pm(e,t,r){var a=t.pendingProps;switch(Zi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return at(t.type)&&xa(),Ye(t),null;case 3:return a=t.stateNode,Kr(),Ce(nt),Ce(Qe),us(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ca(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,wt!==null&&(Fs(wt),wt=null))),Ps(e,t),Ye(t),null;case 5:cs(t);var i=xr(In.current);if(r=t.type,e!==null&&t.stateNode!=null)Rc(e,t,r,a,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Ye(t),null}if(e=xr(Rt.current),Ca(t)){a=t.stateNode,r=t.type;var s=t.memoizedProps;switch(a[Pt]=t,a[En]=s,e=(t.mode&1)!==0,r){case"dialog":we("cancel",a),we("close",a);break;case"iframe":case"object":case"embed":we("load",a);break;case"video":case"audio":for(i=0;i<Cn.length;i++)we(Cn[i],a);break;case"source":we("error",a);break;case"img":case"image":case"link":we("error",a),we("load",a);break;case"details":we("toggle",a);break;case"input":qe(a,s),we("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!s.multiple},we("invalid",a);break;case"textarea":Kn(a,s),we("invalid",a)}di(r,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var p=s[o];o==="children"?typeof p=="string"?a.textContent!==p&&(s.suppressHydrationWarning!==!0&&ha(a.textContent,p,e),i=["children",p]):typeof p=="number"&&a.textContent!==""+p&&(s.suppressHydrationWarning!==!0&&ha(a.textContent,p,e),i=["children",""+p]):j.hasOwnProperty(o)&&p!=null&&o==="onScroll"&&we("scroll",a)}switch(r){case"input":he(a),mt(a,s,!0);break;case"textarea":he(a),Wn(a);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(a.onclick=ya)}a=i,t.updateQueue=a,a!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=nn(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=o.createElement(r,{is:a.is}):(e=o.createElement(r),r==="select"&&(o=e,a.multiple?o.multiple=!0:a.size&&(o.size=a.size))):e=o.createElementNS(e,r),e[Pt]=t,e[En]=a,Pc(e,t,!1,!1),t.stateNode=e;e:{switch(o=ui(r,a),r){case"dialog":we("cancel",e),we("close",e),i=a;break;case"iframe":case"object":case"embed":we("load",e),i=a;break;case"video":case"audio":for(i=0;i<Cn.length;i++)we(Cn[i],e);i=a;break;case"source":we("error",e),i=a;break;case"img":case"image":case"link":we("error",e),we("load",e),i=a;break;case"details":we("toggle",e),i=a;break;case"input":qe(e,a),i=ue(e,a),we("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=m({},a,{value:void 0}),we("invalid",e);break;case"textarea":Kn(e,a),i=tn(e,a),we("invalid",e);break;default:i=a}di(r,i),p=i;for(s in p)if(p.hasOwnProperty(s)){var g=p[s];s==="style"?bo(e,g):s==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&sn(e,g)):s==="children"?typeof g=="string"?(r!=="textarea"||g!=="")&&Vt(e,g):typeof g=="number"&&Vt(e,""+g):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(j.hasOwnProperty(s)?g!=null&&s==="onScroll"&&we("scroll",e):g!=null&&de(e,s,g,o))}switch(r){case"input":he(e),mt(e,a,!1);break;case"textarea":he(e),Wn(e);break;case"option":a.value!=null&&e.setAttribute("value",""+K(a.value));break;case"select":e.multiple=!!a.multiple,s=a.value,s!=null?qt(e,!!a.multiple,s,!1):a.defaultValue!=null&&qt(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ya)}switch(r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ye(t),null;case 6:if(e&&t.stateNode!=null)Ic(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(r=xr(In.current),xr(Rt.current),Ca(t)){if(a=t.stateNode,r=t.memoizedProps,a[Pt]=t,(s=a.nodeValue!==r)&&(e=dt,e!==null))switch(e.tag){case 3:ha(a.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ha(a.nodeValue,r,(e.mode&1)!==0)}s&&(t.flags|=4)}else a=(r.nodeType===9?r:r.ownerDocument).createTextNode(a),a[Pt]=t,t.stateNode=a}return Ye(t),null;case 13:if(Ce(Ee),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&ut!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Ol(),Jr(),t.flags|=98560,s=!1;else if(s=Ca(t),a!==null&&a.dehydrated!==null){if(e===null){if(!s)throw Error(u(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(u(317));s[Pt]=t}else Jr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),s=!1}else wt!==null&&(Fs(wt),wt=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ee.current&1)!==0?ze===0&&(ze=3):qs())),t.updateQueue!==null&&(t.flags|=4),Ye(t),null);case 4:return Kr(),Ps(e,t),e===null&&jn(t.stateNode.containerInfo),Ye(t),null;case 10:return as(t.type._context),Ye(t),null;case 17:return at(t.type)&&xa(),Ye(t),null;case 19:if(Ce(Ee),s=t.memoizedState,s===null)return Ye(t),null;if(a=(t.flags&128)!==0,o=s.rendering,o===null)if(a)zn(s,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Pa(e),o!==null){for(t.flags|=128,zn(s,!1),a=o.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=r,r=t.child;r!==null;)s=r,e=a,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ke(Ee,Ee.current&1|2),t.child}e=e.sibling}s.tail!==null&&De()>Yr&&(t.flags|=128,a=!0,zn(s,!1),t.lanes=4194304)}else{if(!a)if(e=Pa(o),e!==null){if(t.flags|=128,a=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),zn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!je)return Ye(t),null}else 2*De()-s.renderingStartTime>Yr&&r!==1073741824&&(t.flags|=128,a=!0,zn(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(r=s.last,r!==null?r.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=De(),t.sibling=null,r=Ee.current,ke(Ee,a?r&1|2:r&1),t):(Ye(t),null);case 22:case 23:return Js(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(pt&1073741824)!==0&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function mm(e,t){switch(Zi(t),t.tag){case 1:return at(t.type)&&xa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kr(),Ce(nt),Ce(Qe),us(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return cs(t),null;case 13:if(Ce(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ce(Ee),null;case 4:return Kr(),null;case 10:return as(t.type._context),null;case 22:case 23:return Js(),null;case 24:return null;default:return null}}var Ua=!1,Ze=!1,gm=typeof WeakSet=="function"?WeakSet:Set,W=null;function Qr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(a){Ie(e,t,a)}else r.current=null}function Rs(e,t,r){try{r()}catch(a){Ie(e,t,a)}}var Dc=!1;function fm(e,t){if(Ji=ia,e=ul(),Oi(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var a=r.getSelection&&r.getSelection();if(a&&a.rangeCount!==0){r=a.anchorNode;var i=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var o=0,p=-1,g=-1,w=0,R=0,D=e,P=null;t:for(;;){for(var V;D!==r||i!==0&&D.nodeType!==3||(p=o+i),D!==s||a!==0&&D.nodeType!==3||(g=o+a),D.nodeType===3&&(o+=D.nodeValue.length),(V=D.firstChild)!==null;)P=D,D=V;for(;;){if(D===e)break t;if(P===r&&++w===i&&(p=o),P===s&&++R===a&&(g=o),(V=D.nextSibling)!==null)break;D=P,P=D.parentNode}D=V}r=p===-1||g===-1?null:{start:p,end:g}}else r=null}r=r||{start:0,end:0}}else r=null;for(qi={focusedElem:e,selectionRange:r},ia=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var Q=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(Q!==null){var $=Q.memoizedProps,Me=Q.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?$:Ct(t.type,$),Me);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(L){Ie(t,t.return,L)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return Q=Dc,Dc=!1,Q}function Bn(e,t,r){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Rs(t,r,s)}i=i.next}while(i!==a)}}function _a(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var a=r.create;r.destroy=a()}r=r.next}while(r!==t)}}function Is(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Mc(e){var t=e.alternate;t!==null&&(e.alternate=null,Mc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[En],delete t[Wi],delete t[Yp],delete t[Zp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Oc(e){return e.tag===5||e.tag===3||e.tag===4}function Lc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Oc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ds(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ya));else if(a!==4&&(e=e.child,e!==null))for(Ds(e,t,r),e=e.sibling;e!==null;)Ds(e,t,r),e=e.sibling}function Ms(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Ms(e,t,r),e=e.sibling;e!==null;)Ms(e,t,r),e=e.sibling}var Ve=null,jt=!1;function ar(e,t,r){for(r=r.child;r!==null;)zc(e,t,r),r=r.sibling}function zc(e,t,r){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Xn,r)}catch{}switch(r.tag){case 5:Ze||Qr(r,t);case 6:var a=Ve,i=jt;Ve=null,ar(e,t,r),Ve=a,jt=i,Ve!==null&&(jt?(e=Ve,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ve.removeChild(r.stateNode));break;case 18:Ve!==null&&(jt?(e=Ve,r=r.stateNode,e.nodeType===8?Ki(e.parentNode,r):e.nodeType===1&&Ki(e,r),hn(e)):Ki(Ve,r.stateNode));break;case 4:a=Ve,i=jt,Ve=r.stateNode.containerInfo,jt=!0,ar(e,t,r),Ve=a,jt=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(a=r.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Rs(r,t,o),i=i.next}while(i!==a)}ar(e,t,r);break;case 1:if(!Ze&&(Qr(r,t),a=r.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=r.memoizedProps,a.state=r.memoizedState,a.componentWillUnmount()}catch(p){Ie(r,t,p)}ar(e,t,r);break;case 21:ar(e,t,r);break;case 22:r.mode&1?(Ze=(a=Ze)||r.memoizedState!==null,ar(e,t,r),Ze=a):ar(e,t,r);break;default:ar(e,t,r)}}function Bc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new gm),t.forEach(function(a){var i=Cm.bind(null,e,a);r.has(a)||(r.add(a),a.then(i,i))})}}function Tt(e,t){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var i=r[a];try{var s=e,o=t,p=o;e:for(;p!==null;){switch(p.tag){case 5:Ve=p.stateNode,jt=!1;break e;case 3:Ve=p.stateNode.containerInfo,jt=!0;break e;case 4:Ve=p.stateNode.containerInfo,jt=!0;break e}p=p.return}if(Ve===null)throw Error(u(160));zc(s,o,i),Ve=null,jt=!1;var g=i.alternate;g!==null&&(g.return=null),i.return=null}catch(w){Ie(i,t,w)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Uc(t,e),t=t.sibling}function Uc(e,t){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tt(t,e),Dt(e),a&4){try{Bn(3,e,e.return),_a(3,e)}catch($){Ie(e,e.return,$)}try{Bn(5,e,e.return)}catch($){Ie(e,e.return,$)}}break;case 1:Tt(t,e),Dt(e),a&512&&r!==null&&Qr(r,r.return);break;case 5:if(Tt(t,e),Dt(e),a&512&&r!==null&&Qr(r,r.return),e.flags&32){var i=e.stateNode;try{Vt(i,"")}catch($){Ie(e,e.return,$)}}if(a&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=r!==null?r.memoizedProps:s,p=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{p==="input"&&s.type==="radio"&&s.name!=null&&rt(i,s),ui(p,o);var w=ui(p,s);for(o=0;o<g.length;o+=2){var R=g[o],D=g[o+1];R==="style"?bo(i,D):R==="dangerouslySetInnerHTML"?sn(i,D):R==="children"?Vt(i,D):de(i,R,D,w)}switch(p){case"input":Xe(i,s);break;case"textarea":rn(i,s);break;case"select":var P=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var V=s.value;V!=null?qt(i,!!s.multiple,V,!1):P!==!!s.multiple&&(s.defaultValue!=null?qt(i,!!s.multiple,s.defaultValue,!0):qt(i,!!s.multiple,s.multiple?[]:"",!1))}i[En]=s}catch($){Ie(e,e.return,$)}}break;case 6:if(Tt(t,e),Dt(e),a&4){if(e.stateNode===null)throw Error(u(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch($){Ie(e,e.return,$)}}break;case 3:if(Tt(t,e),Dt(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{hn(t.containerInfo)}catch($){Ie(e,e.return,$)}break;case 4:Tt(t,e),Dt(e);break;case 13:Tt(t,e),Dt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(zs=De())),a&4&&Bc(e);break;case 22:if(R=r!==null&&r.memoizedState!==null,e.mode&1?(Ze=(w=Ze)||R,Tt(t,e),Ze=w):Tt(t,e),Dt(e),a&8192){if(w=e.memoizedState!==null,(e.stateNode.isHidden=w)&&!R&&(e.mode&1)!==0)for(W=e,R=e.child;R!==null;){for(D=W=R;W!==null;){switch(P=W,V=P.child,P.tag){case 0:case 11:case 14:case 15:Bn(4,P,P.return);break;case 1:Qr(P,P.return);var Q=P.stateNode;if(typeof Q.componentWillUnmount=="function"){a=P,r=P.return;try{t=a,Q.props=t.memoizedProps,Q.state=t.memoizedState,Q.componentWillUnmount()}catch($){Ie(a,r,$)}}break;case 5:Qr(P,P.return);break;case 22:if(P.memoizedState!==null){Hc(D);continue}}V!==null?(V.return=P,W=V):Hc(D)}R=R.sibling}e:for(R=null,D=e;;){if(D.tag===5){if(R===null){R=D;try{i=D.stateNode,w?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(p=D.stateNode,g=D.memoizedProps.style,o=g!=null&&g.hasOwnProperty("display")?g.display:null,p.style.display=Qn("display",o))}catch($){Ie(e,e.return,$)}}}else if(D.tag===6){if(R===null)try{D.stateNode.nodeValue=w?"":D.memoizedProps}catch($){Ie(e,e.return,$)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===e)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===e)break e;for(;D.sibling===null;){if(D.return===null||D.return===e)break e;R===D&&(R=null),D=D.return}R===D&&(R=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:Tt(t,e),Dt(e),a&4&&Bc(e);break;case 21:break;default:Tt(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Oc(r)){var a=r;break e}r=r.return}throw Error(u(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(Vt(i,""),a.flags&=-33);var s=Lc(e);Ms(e,s,i);break;case 3:case 4:var o=a.stateNode.containerInfo,p=Lc(e);Ds(e,p,o);break;default:throw Error(u(161))}}catch(g){Ie(e,e.return,g)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hm(e,t,r){W=e,_c(e)}function _c(e,t,r){for(var a=(e.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&a){var o=i.memoizedState!==null||Ua;if(!o){var p=i.alternate,g=p!==null&&p.memoizedState!==null||Ze;p=Ua;var w=Ze;if(Ua=o,(Ze=g)&&!w)for(W=i;W!==null;)o=W,g=o.child,o.tag===22&&o.memoizedState!==null?Jc(i):g!==null?(g.return=o,W=g):Jc(i);for(;s!==null;)W=s,_c(s),s=s.sibling;W=i,Ua=p,Ze=w}Fc(e)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,W=s):Fc(e)}}function Fc(e){for(;W!==null;){var t=W;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ze||_a(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!Ze)if(r===null)a.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Ct(t.type,r.memoizedProps);a.componentDidUpdate(i,r.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Hl(t,s,a);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Hl(t,o,r)}break;case 5:var p=t.stateNode;if(r===null&&t.flags&4){r=p;var g=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&r.focus();break;case"img":g.src&&(r.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var w=t.alternate;if(w!==null){var R=w.memoizedState;if(R!==null){var D=R.dehydrated;D!==null&&hn(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}Ze||t.flags&512&&Is(t)}catch(P){Ie(t,t.return,P)}}if(t===e){W=null;break}if(r=t.sibling,r!==null){r.return=t.return,W=r;break}W=t.return}}function Hc(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var r=t.sibling;if(r!==null){r.return=t.return,W=r;break}W=t.return}}function Jc(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{_a(4,t)}catch(g){Ie(t,r,g)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var i=t.return;try{a.componentDidMount()}catch(g){Ie(t,i,g)}}var s=t.return;try{Is(t)}catch(g){Ie(t,s,g)}break;case 5:var o=t.return;try{Is(t)}catch(g){Ie(t,o,g)}}}catch(g){Ie(t,t.return,g)}if(t===e){W=null;break}var p=t.sibling;if(p!==null){p.return=t.return,W=p;break}W=t.return}}var ym=Math.ceil,Fa=ve.ReactCurrentDispatcher,Os=ve.ReactCurrentOwner,vt=ve.ReactCurrentBatchConfig,ge=0,_e=null,Oe=null,Ge=0,pt=0,$r=Xt(0),ze=0,Un=null,br=0,Ha=0,Ls=0,_n=null,st=null,zs=0,Yr=1/0,Jt=null,Ja=!1,Bs=null,ir=null,qa=!1,sr=null,Va=0,Fn=0,Us=null,Ga=-1,Ka=0;function tt(){return(ge&6)!==0?De():Ga!==-1?Ga:Ga=De()}function or(e){return(e.mode&1)===0?1:(ge&2)!==0&&Ge!==0?Ge&-Ge:em.transition!==null?(Ka===0&&(Ka=Lo()),Ka):(e=ye,e!==0||(e=window.event,e=e===void 0?16:Vo(e.type)),e)}function Et(e,t,r,a){if(50<Fn)throw Fn=0,Us=null,Error(u(185));un(e,r,a),((ge&2)===0||e!==_e)&&(e===_e&&((ge&2)===0&&(Ha|=r),ze===4&&lr(e,Ge)),ot(e,a),r===1&&ge===0&&(t.mode&1)===0&&(Yr=De()+500,ba&&tr()))}function ot(e,t){var r=e.callbackNode;ep(e,t);var a=ra(e,e===_e?Ge:0);if(a===0)r!==null&&Do(r),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(r!=null&&Do(r),t===1)e.tag===0?Xp(Vc.bind(null,e)):Pl(Vc.bind(null,e)),Qp(function(){(ge&6)===0&&tr()}),r=null;else{switch(zo(a)){case 1:r=vi;break;case 4:r=Mo;break;case 16:r=Zn;break;case 536870912:r=Oo;break;default:r=Zn}r=Xc(r,qc.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function qc(e,t){if(Ga=-1,Ka=0,(ge&6)!==0)throw Error(u(327));var r=e.callbackNode;if(Zr()&&e.callbackNode!==r)return null;var a=ra(e,e===_e?Ge:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=Wa(e,a);else{t=a;var i=ge;ge|=2;var s=Kc();(_e!==e||Ge!==t)&&(Jt=null,Yr=De()+500,wr(e,t));do try{km();break}catch(p){Gc(e,p)}while(!0);ns(),Fa.current=s,ge=i,Oe!==null?t=0:(_e=null,Ge=0,t=ze)}if(t!==0){if(t===2&&(i=xi(e),i!==0&&(a=i,t=_s(e,i))),t===1)throw r=Un,wr(e,0),lr(e,a),ot(e,De()),r;if(t===6)lr(e,a);else{if(i=e.current.alternate,(a&30)===0&&!vm(i)&&(t=Wa(e,a),t===2&&(s=xi(e),s!==0&&(a=s,t=_s(e,s))),t===1))throw r=Un,wr(e,0),lr(e,a),ot(e,De()),r;switch(e.finishedWork=i,e.finishedLanes=a,t){case 0:case 1:throw Error(u(345));case 2:Cr(e,st,Jt);break;case 3:if(lr(e,a),(a&130023424)===a&&(t=zs+500-De(),10<t)){if(ra(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){tt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Gi(Cr.bind(null,e,st,Jt),t);break}Cr(e,st,Jt);break;case 4:if(lr(e,a),(a&4194240)===a)break;for(t=e.eventTimes,i=-1;0<a;){var o=31-bt(a);s=1<<o,o=t[o],o>i&&(i=o),a&=~s}if(a=i,a=De()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*ym(a/1960))-a,10<a){e.timeoutHandle=Gi(Cr.bind(null,e,st,Jt),a);break}Cr(e,st,Jt);break;case 5:Cr(e,st,Jt);break;default:throw Error(u(329))}}}return ot(e,De()),e.callbackNode===r?qc.bind(null,e):null}function _s(e,t){var r=_n;return e.current.memoizedState.isDehydrated&&(wr(e,t).flags|=256),e=Wa(e,t),e!==2&&(t=st,st=r,t!==null&&Fs(t)),e}function Fs(e){st===null?st=e:st.push.apply(st,e)}function vm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var a=0;a<r.length;a++){var i=r[a],s=i.getSnapshot;i=i.value;try{if(!St(s(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function lr(e,t){for(t&=~Ls,t&=~Ha,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-bt(t),a=1<<r;e[r]=-1,t&=~a}}function Vc(e){if((ge&6)!==0)throw Error(u(327));Zr();var t=ra(e,0);if((t&1)===0)return ot(e,De()),null;var r=Wa(e,t);if(e.tag!==0&&r===2){var a=xi(e);a!==0&&(t=a,r=_s(e,a))}if(r===1)throw r=Un,wr(e,0),lr(e,t),ot(e,De()),r;if(r===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Cr(e,st,Jt),ot(e,De()),null}function Hs(e,t){var r=ge;ge|=1;try{return e(t)}finally{ge=r,ge===0&&(Yr=De()+500,ba&&tr())}}function Sr(e){sr!==null&&sr.tag===0&&(ge&6)===0&&Zr();var t=ge;ge|=1;var r=vt.transition,a=ye;try{if(vt.transition=null,ye=1,e)return e()}finally{ye=a,vt.transition=r,ge=t,(ge&6)===0&&tr()}}function Js(){pt=$r.current,Ce($r)}function wr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Wp(r)),Oe!==null)for(r=Oe.return;r!==null;){var a=r;switch(Zi(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&xa();break;case 3:Kr(),Ce(nt),Ce(Qe),us();break;case 5:cs(a);break;case 4:Kr();break;case 13:Ce(Ee);break;case 19:Ce(Ee);break;case 10:as(a.type._context);break;case 22:case 23:Js()}r=r.return}if(_e=e,Oe=e=cr(e.current,null),Ge=pt=t,ze=0,Un=null,Ls=Ha=br=0,st=_n=null,vr!==null){for(t=0;t<vr.length;t++)if(r=vr[t],a=r.interleaved,a!==null){r.interleaved=null;var i=a.next,s=r.pending;if(s!==null){var o=s.next;s.next=i,a.next=o}r.pending=a}vr=null}return e}function Gc(e,t){do{var r=Oe;try{if(ns(),Ra.current=Oa,Ia){for(var a=Ae.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}Ia=!1}if(kr=0,Ue=Le=Ae=null,Dn=!1,Mn=0,Os.current=null,r===null||r.return===null){ze=1,Un=t,Oe=null;break}e:{var s=e,o=r.return,p=r,g=t;if(t=Ge,p.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var w=g,R=p,D=R.tag;if((R.mode&1)===0&&(D===0||D===11||D===15)){var P=R.alternate;P?(R.updateQueue=P.updateQueue,R.memoizedState=P.memoizedState,R.lanes=P.lanes):(R.updateQueue=null,R.memoizedState=null)}var V=yc(o);if(V!==null){V.flags&=-257,vc(V,o,p,s,t),V.mode&1&&hc(s,w,t),t=V,g=w;var Q=t.updateQueue;if(Q===null){var $=new Set;$.add(g),t.updateQueue=$}else Q.add(g);break e}else{if((t&1)===0){hc(s,w,t),qs();break e}g=Error(u(426))}}else if(je&&p.mode&1){var Me=yc(o);if(Me!==null){(Me.flags&65536)===0&&(Me.flags|=256),vc(Me,o,p,s,t),ts(Wr(g,p));break e}}s=g=Wr(g,p),ze!==4&&(ze=2),_n===null?_n=[s]:_n.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var h=gc(s,g,t);Fl(s,h);break e;case 1:p=g;var f=s.type,v=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ir===null||!ir.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t;var L=fc(s,p,t);Fl(s,L);break e}}s=s.return}while(s!==null)}Qc(r)}catch(Z){t=Z,Oe===r&&r!==null&&(Oe=r=r.return);continue}break}while(!0)}function Kc(){var e=Fa.current;return Fa.current=Oa,e===null?Oa:e}function qs(){(ze===0||ze===3||ze===2)&&(ze=4),_e===null||(br&268435455)===0&&(Ha&268435455)===0||lr(_e,Ge)}function Wa(e,t){var r=ge;ge|=2;var a=Kc();(_e!==e||Ge!==t)&&(Jt=null,wr(e,t));do try{xm();break}catch(i){Gc(e,i)}while(!0);if(ns(),ge=r,Fa.current=a,Oe!==null)throw Error(u(261));return _e=null,Ge=0,ze}function xm(){for(;Oe!==null;)Wc(Oe)}function km(){for(;Oe!==null&&!Vu();)Wc(Oe)}function Wc(e){var t=Zc(e.alternate,e,pt);e.memoizedProps=e.pendingProps,t===null?Qc(e):Oe=t,Os.current=null}function Qc(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=pm(r,t,pt),r!==null){Oe=r;return}}else{if(r=mm(r,t),r!==null){r.flags&=32767,Oe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,Oe=null;return}}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=e}while(t!==null);ze===0&&(ze=5)}function Cr(e,t,r){var a=ye,i=vt.transition;try{vt.transition=null,ye=1,bm(e,t,r,a)}finally{vt.transition=i,ye=a}return null}function bm(e,t,r,a){do Zr();while(sr!==null);if((ge&6)!==0)throw Error(u(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(tp(e,s),e===_e&&(Oe=_e=null,Ge=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||qa||(qa=!0,Xc(Zn,function(){return Zr(),null})),s=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||s){s=vt.transition,vt.transition=null;var o=ye;ye=1;var p=ge;ge|=4,Os.current=null,fm(e,r),Uc(r,e),Fp(qi),ia=!!Ji,qi=Ji=null,e.current=r,hm(r),Gu(),ge=p,ye=o,vt.transition=s}else e.current=r;if(qa&&(qa=!1,sr=e,Va=i),s=e.pendingLanes,s===0&&(ir=null),Qu(r.stateNode),ot(e,De()),t!==null)for(a=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],a(i.value,{componentStack:i.stack,digest:i.digest});if(Ja)throw Ja=!1,e=Bs,Bs=null,e;return(Va&1)!==0&&e.tag!==0&&Zr(),s=e.pendingLanes,(s&1)!==0?e===Us?Fn++:(Fn=0,Us=e):Fn=0,tr(),null}function Zr(){if(sr!==null){var e=zo(Va),t=vt.transition,r=ye;try{if(vt.transition=null,ye=16>e?16:e,sr===null)var a=!1;else{if(e=sr,sr=null,Va=0,(ge&6)!==0)throw Error(u(331));var i=ge;for(ge|=4,W=e.current;W!==null;){var s=W,o=s.child;if((W.flags&16)!==0){var p=s.deletions;if(p!==null){for(var g=0;g<p.length;g++){var w=p[g];for(W=w;W!==null;){var R=W;switch(R.tag){case 0:case 11:case 15:Bn(8,R,s)}var D=R.child;if(D!==null)D.return=R,W=D;else for(;W!==null;){R=W;var P=R.sibling,V=R.return;if(Mc(R),R===w){W=null;break}if(P!==null){P.return=V,W=P;break}W=V}}}var Q=s.alternate;if(Q!==null){var $=Q.child;if($!==null){Q.child=null;do{var Me=$.sibling;$.sibling=null,$=Me}while($!==null)}}W=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Bn(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,W=h;break e}W=s.return}}var f=e.current;for(W=f;W!==null;){o=W;var v=o.child;if((o.subtreeFlags&2064)!==0&&v!==null)v.return=o,W=v;else e:for(o=f;W!==null;){if(p=W,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:_a(9,p)}}catch(Z){Ie(p,p.return,Z)}if(p===o){W=null;break e}var L=p.sibling;if(L!==null){L.return=p.return,W=L;break e}W=p.return}}if(ge=i,tr(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Xn,e)}catch{}a=!0}return a}finally{ye=r,vt.transition=t}}return!1}function $c(e,t,r){t=Wr(r,t),t=gc(e,t,1),e=nr(e,t,1),t=tt(),e!==null&&(un(e,1,t),ot(e,t))}function Ie(e,t,r){if(e.tag===3)$c(e,e,r);else for(;t!==null;){if(t.tag===3){$c(t,e,r);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ir===null||!ir.has(a))){e=Wr(r,e),e=fc(t,e,1),t=nr(t,e,1),e=tt(),t!==null&&(un(t,1,e),ot(t,e));break}}t=t.return}}function Sm(e,t,r){var a=e.pingCache;a!==null&&a.delete(t),t=tt(),e.pingedLanes|=e.suspendedLanes&r,_e===e&&(Ge&r)===r&&(ze===4||ze===3&&(Ge&130023424)===Ge&&500>De()-zs?wr(e,0):Ls|=r),ot(e,t)}function Yc(e,t){t===0&&((e.mode&1)===0?t=1:(t=ta,ta<<=1,(ta&130023424)===0&&(ta=4194304)));var r=tt();e=_t(e,t),e!==null&&(un(e,t,r),ot(e,r))}function wm(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Yc(e,r)}function Cm(e,t){var r=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(u(314))}a!==null&&a.delete(t),Yc(e,r)}var Zc;Zc=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)it=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return it=!1,um(e,t,r);it=(e.flags&131072)!==0}else it=!1,je&&(t.flags&1048576)!==0&&Rl(t,wa,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;Ba(e,t),e=t.pendingProps;var i=_r(t,Qe.current);Gr(t,r),i=gs(null,t,a,e,i,r);var s=fs();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,at(a)?(s=!0,ka(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,os(t),i.updater=La,t.stateNode=i,i._reactInternals=t,bs(t,a,e,r),t=js(null,t,a,!0,s,r)):(t.tag=0,je&&s&&Yi(t),et(null,t,i,r),t=t.child),t;case 16:a=t.elementType;e:{switch(Ba(e,t),e=t.pendingProps,i=a._init,a=i(a._payload),t.type=a,i=t.tag=Tm(a),e=Ct(a,e),i){case 0:t=Cs(null,t,a,e,r);break e;case 1:t=Cc(null,t,a,e,r);break e;case 11:t=xc(null,t,a,e,r);break e;case 14:t=kc(null,t,a,Ct(a.type,e),r);break e}throw Error(u(306,a,""))}return t;case 0:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Ct(a,i),Cs(e,t,a,i,r);case 1:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Ct(a,i),Cc(e,t,a,i,r);case 3:e:{if(jc(t),e===null)throw Error(u(387));a=t.pendingProps,s=t.memoizedState,i=s.element,_l(e,t),Na(t,a,null,r);var o=t.memoizedState;if(a=o.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Wr(Error(u(423)),t),t=Tc(e,t,a,r,i);break e}else if(a!==i){i=Wr(Error(u(424)),t),t=Tc(e,t,a,r,i);break e}else for(ut=Zt(t.stateNode.containerInfo.firstChild),dt=t,je=!0,wt=null,r=Bl(t,null,a,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Jr(),a===i){t=Ht(e,t,r);break e}et(e,t,a,r)}t=t.child}return t;case 5:return Jl(t),e===null&&es(t),a=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Vi(a,i)?o=null:s!==null&&Vi(a,s)&&(t.flags|=32),wc(e,t),et(e,t,o,r),t.child;case 6:return e===null&&es(t),null;case 13:return Ec(e,t,r);case 4:return ls(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=qr(t,null,a,r):et(e,t,a,r),t.child;case 11:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Ct(a,i),xc(e,t,a,i,r);case 7:return et(e,t,t.pendingProps,r),t.child;case 8:return et(e,t,t.pendingProps.children,r),t.child;case 12:return et(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(a=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,ke(Ta,a._currentValue),a._currentValue=o,s!==null)if(St(s.value,o)){if(s.children===i.children&&!nt.current){t=Ht(e,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var p=s.dependencies;if(p!==null){o=s.child;for(var g=p.firstContext;g!==null;){if(g.context===a){if(s.tag===1){g=Ft(-1,r&-r),g.tag=2;var w=s.updateQueue;if(w!==null){w=w.shared;var R=w.pending;R===null?g.next=g:(g.next=R.next,R.next=g),w.pending=g}}s.lanes|=r,g=s.alternate,g!==null&&(g.lanes|=r),is(s.return,r,t),p.lanes|=r;break}g=g.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(u(341));o.lanes|=r,p=o.alternate,p!==null&&(p.lanes|=r),is(o,r,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}et(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,a=t.pendingProps.children,Gr(t,r),i=ht(i),a=a(i),t.flags|=1,et(e,t,a,r),t.child;case 14:return a=t.type,i=Ct(a,t.pendingProps),i=Ct(a.type,i),kc(e,t,a,i,r);case 15:return bc(e,t,t.type,t.pendingProps,r);case 17:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:Ct(a,i),Ba(e,t),t.tag=1,at(a)?(e=!0,ka(t)):e=!1,Gr(t,r),pc(t,a,i),bs(t,a,i,r),js(null,t,a,!0,e,r);case 19:return Nc(e,t,r);case 22:return Sc(e,t,r)}throw Error(u(156,t.tag))};function Xc(e,t){return Io(e,t)}function jm(e,t,r,a){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,r,a){return new jm(e,t,r,a)}function Vs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tm(e){if(typeof e=="function")return Vs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Be)return 11;if(e===X)return 14}return 2}function cr(e,t){var r=e.alternate;return r===null?(r=xt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Qa(e,t,r,a,i,s){var o=2;if(a=e,typeof e=="function")Vs(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case re:return jr(r.children,i,s,t);case le:o=8,i|=8;break;case be:return e=xt(12,r,t,i|2),e.elementType=be,e.lanes=s,e;case He:return e=xt(13,r,t,i),e.elementType=He,e.lanes=s,e;case Je:return e=xt(19,r,t,i),e.elementType=Je,e.lanes=s,e;case me:return $a(r,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xe:o=10;break e;case Pe:o=9;break e;case Be:o=11;break e;case X:o=14;break e;case oe:o=16,a=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=xt(o,r,t,i),t.elementType=e,t.type=a,t.lanes=s,t}function jr(e,t,r,a){return e=xt(7,e,a,t),e.lanes=r,e}function $a(e,t,r,a){return e=xt(22,e,a,t),e.elementType=me,e.lanes=r,e.stateNode={isHidden:!1},e}function Gs(e,t,r){return e=xt(6,e,null,t),e.lanes=r,e}function Ks(e,t,r){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Em(e,t,r,a,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ki(0),this.expirationTimes=ki(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ki(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ws(e,t,r,a,i,s,o,p,g){return e=new Em(e,t,r,p,g),t===1?(t=1,s===!0&&(t|=8)):t=0,s=xt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:a,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},os(s),e}function Am(e,t,r){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:a==null?null:""+a,children:e,containerInfo:t,implementation:r}}function ed(e){if(!e)return er;e=e._reactInternals;e:{if(mr(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(at(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var r=e.type;if(at(r))return Al(e,r,t)}return t}function td(e,t,r,a,i,s,o,p,g){return e=Ws(r,a,!0,e,i,s,o,p,g),e.context=ed(null),r=e.current,a=tt(),i=or(r),s=Ft(a,i),s.callback=t??null,nr(r,s,i),e.current.lanes=i,un(e,i,a),ot(e,a),e}function Ya(e,t,r,a){var i=t.current,s=tt(),o=or(i);return r=ed(r),t.context===null?t.context=r:t.pendingContext=r,t=Ft(s,o),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=nr(i,t,o),e!==null&&(Et(e,i,o,s),Aa(e,i,o)),o}function Za(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Qs(e,t){rd(e,t),(e=e.alternate)&&rd(e,t)}function Nm(){return null}var nd=typeof reportError=="function"?reportError:function(e){console.error(e)};function $s(e){this._internalRoot=e}Xa.prototype.render=$s.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));Ya(e,t,null,null)},Xa.prototype.unmount=$s.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sr(function(){Ya(null,e,null,null)}),t[Lt]=null}};function Xa(e){this._internalRoot=e}Xa.prototype.unstable_scheduleHydration=function(e){if(e){var t=_o();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Qt.length&&t!==0&&t<Qt[r].priority;r++);Qt.splice(r,0,e),r===0&&Jo(e)}};function Ys(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ei(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ad(){}function Pm(e,t,r,a,i){if(i){if(typeof a=="function"){var s=a;a=function(){var w=Za(o);s.call(w)}}var o=td(t,a,e,0,null,!1,!1,"",ad);return e._reactRootContainer=o,e[Lt]=o.current,jn(e.nodeType===8?e.parentNode:e),Sr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var p=a;a=function(){var w=Za(g);p.call(w)}}var g=Ws(e,0,!1,null,null,!1,!1,"",ad);return e._reactRootContainer=g,e[Lt]=g.current,jn(e.nodeType===8?e.parentNode:e),Sr(function(){Ya(t,g,r,a)}),g}function ti(e,t,r,a,i){var s=r._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var p=i;i=function(){var g=Za(o);p.call(g)}}Ya(t,o,e,i)}else o=Pm(r,t,e,i,a);return Za(o)}Bo=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=dn(t.pendingLanes);r!==0&&(bi(t,r|1),ot(t,De()),(ge&6)===0&&(Yr=De()+500,tr()))}break;case 13:Sr(function(){var a=_t(e,1);if(a!==null){var i=tt();Et(a,e,1,i)}}),Qs(e,1)}},Si=function(e){if(e.tag===13){var t=_t(e,134217728);if(t!==null){var r=tt();Et(t,e,134217728,r)}Qs(e,134217728)}},Uo=function(e){if(e.tag===13){var t=or(e),r=_t(e,t);if(r!==null){var a=tt();Et(r,e,t,a)}Qs(e,t)}},_o=function(){return ye},Fo=function(e,t){var r=ye;try{return ye=e,t()}finally{ye=r}},gi=function(e,t,r){switch(t){case"input":if(Xe(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var a=r[t];if(a!==e&&a.form===e.form){var i=va(a);if(!i)throw Error(u(90));Se(a),Xe(a,i)}}}break;case"textarea":rn(e,r);break;case"select":t=r.value,t!=null&&qt(e,!!r.multiple,t,!1)}},jo=Hs,To=Sr;var Rm={usingClientEntryPoint:!1,Events:[An,Br,va,wo,Co,Hs]},Hn={findFiberByHostInstance:gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Im={bundleType:Hn.bundleType,version:Hn.version,rendererPackageName:Hn.rendererPackageName,rendererConfig:Hn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ve.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Po(e),e===null?null:e.stateNode},findFiberByHostInstance:Hn.findFiberByHostInstance||Nm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ri=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ri.isDisabled&&ri.supportsFiber)try{Xn=ri.inject(Im),Nt=ri}catch{}}return lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rm,lt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ys(t))throw Error(u(200));return Am(e,t,null,r)},lt.createRoot=function(e,t){if(!Ys(e))throw Error(u(299));var r=!1,a="",i=nd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ws(e,1,!1,null,null,r,!1,a,i),e[Lt]=t.current,jn(e.nodeType===8?e.parentNode:e),new $s(t)},lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=Po(t),e=e===null?null:e.stateNode,e},lt.flushSync=function(e){return Sr(e)},lt.hydrate=function(e,t,r){if(!ei(t))throw Error(u(200));return ti(null,e,t,!0,r)},lt.hydrateRoot=function(e,t,r){if(!Ys(e))throw Error(u(405));var a=r!=null&&r.hydratedSources||null,i=!1,s="",o=nd;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=td(t,null,e,1,r??null,i,!1,s,o),e[Lt]=t.current,jn(e),a)for(e=0;e<a.length;e++)r=a[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Xa(t)},lt.render=function(e,t,r){if(!ei(t))throw Error(u(200));return ti(null,e,t,!1,r)},lt.unmountComponentAtNode=function(e){if(!ei(e))throw Error(u(40));return e._reactRootContainer?(Sr(function(){ti(null,null,e,!1,function(){e._reactRootContainer=null,e[Lt]=null})}),!0):!1},lt.unstable_batchedUpdates=Hs,lt.unstable_renderSubtreeIntoContainer=function(e,t,r,a){if(!ei(r))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return ti(e,t,r,!1,a)},lt.version="18.3.1-next-f1338f8080-20240426",lt}var pd;function _m(){if(pd)return eo.exports;pd=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(c){console.error(c)}}return d(),eo.exports=Um(),eo.exports}var md;function Fm(){if(md)return ni;md=1;var d=_m();return ni.createRoot=d.createRoot,ni.hydrateRoot=d.hydrateRoot,ni}var Hm=Fm();const Jm=kd(Hm);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=d=>d==null?void 0:d.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Vm(d,c,u=[]){if(c==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:qm(d),size:24,node:c,...u.length>0?{aliases:u}:{}}}/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=d=>{let c="",u=!1;for(const b of d){if(b==="-"||b==="_"||b<=" "){u=c.length>0;continue}c.length===0?c+=b.toLowerCase():c+=u?b.toUpperCase():b,u=!1}return c};/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=d=>{const c=Gm(d);return c.charAt(0).toUpperCase()+c.slice(1)};/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=(...d)=>d.filter((c,u,b)=>!!c&&c.trim()!==""&&b.indexOf(c)===u).join(" ").trim();/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function no(d){return d!=null}function Wm(d,c={}){var I,T;const u=c.attributeNames??{},b=B=>u[B]??B,j=d.size??d.width??Tr.width,y=d.size??d.height??Tr.height,A=((I=d.aliases)==null?void 0:I.filter(B=>typeof B=="string"&&B.trim()!=="").map(B=>`lucide-${B}`))??[],C=[...d.name?[`lucide-${d.name}`]:[],...A],k=((T=c.className)==null?void 0:T.split(" ").filter(Boolean))??[],N=c.includeDefaultClasses===!1?so(...k):so("lucide",...C,...k),J=c.absoluteStrokeWidth?Number(c.strokeWidth??Tr["stroke-width"])*Number(d.size??d.width??Tr.width)/Number(c.size??c.width??Tr.width):c.strokeWidth??Tr["stroke-width"];return["svg",{...Object.entries(Tr).reduce((B,[E,S])=>(B[b(E)]=S,B),{}),..."color"in c&&c.color&&{[b("stroke")]:c.color},..."size"in c&&no(c.size)&&{[b("width")]:c.size,[b("height")]:c.size},..."width"in c&&no(c.width)&&{[b("width")]:c.width},..."height"in c&&no(c.height)&&{[b("height")]:c.height},[b("stroke-width")]:J,...N&&{[b("class")]:N},[b("viewBox")]:`0 0 ${j} ${y}`,...c.hasA11yProp===!1?{[b("aria-hidden")]:"true"}:{},..."attributes"in c&&c.attributes},d.node.map(B=>{const[E,S,ee]=B,M=c.nonScalingStroke?{[b("vector-effect")]:"non-scaling-stroke",...S}:S;return ee?[E,M,ee]:[E,M]})]}/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Qm(d,c={}){return Wm(d,{...c,attributeNames:{...c.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=d=>{for(const c in d)if(c.startsWith("aria-")||c==="role"||c==="title")return!0;return!1},Ym=F.createContext({}),Zm=()=>F.useContext(Ym),Xm=F.forwardRef(({color:d,size:c,width:u,height:b,strokeWidth:j,absoluteStrokeWidth:y,nonScalingStroke:A,className:C="",children:k,iconNode:N=[],icon:J={node:N,aliases:[],size:24},...U},I)=>{const{size:T=24,strokeWidth:B=2,absoluteStrokeWidth:E=!1,nonScalingStroke:S=!1,color:ee="currentColor",className:M=""}=Zm()??{},de=!!k||$m(U),[ve,Ne,Te=[]]=Qm(J,{color:d??ee,width:u??c??T,height:b??c??T,strokeWidth:j??B,absoluteStrokeWidth:y??E,nonScalingStroke:A??S,className:so(M,C),hasA11yProp:de,attributes:U});return F.createElement(ve,{ref:I,...Ne},[...Te.map(([re,le])=>F.createElement(re,le)),...Array.isArray(k)?k:[k]])});/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function te(d,c=[],u=[]){const b=typeof d=="string"?Vm(d,c,u):d,j=F.forwardRef(({className:y,...A},C)=>F.createElement(Xm,{ref:C,icon:b,className:y,...A}));return b.name&&(j.displayName=Km(b.name)),j}/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd={name:"arrow-left",size:24,node:[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]};Sd.node;const gd=te(Sd);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};wd.node;const Mt=te(wd);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd={name:"award",size:24,node:[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]};Cd.node;const eg=te(Cd);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd={name:"book-bookmark",size:24,node:[["path",{d:"M10 2v7.751a.25.25 0 00.407.195l2.28-1.834a.5.5 0 01.627 0l2.28 1.834A.25.25 0 0016 9.751V2",key:"x9x4jl"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 016.5 2H19a1 1 0 011 1v18a1 1 0 01-1 1H6.5a1 1 0 010-5H20",key:"1889un"}]],aliases:["book-marked"]};jd.node;const Td=te(jd);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};Ed.node;const Gn=te(Ed);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad={name:"bot",size:24,node:[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]};Ad.node;const tg=te(Ad);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};Nd.node;const Pd=te(Nd);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd={name:"boxes",size:24,node:[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]};Rd.node;const Id=te(Rd);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd={name:"chart-column",size:24,node:[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],aliases:["bar-chart-3"]};Dd.node;const rg=te(Dd);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};Md.node;const ur=te(Md);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]};Od.node;const ng=te(Od);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};Ld.node;const ai=te(Ld);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd={name:"circle-check-big",size:24,node:[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-circle"]};zd.node;const qn=te(zd);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};Bd.node;const ii=te(Bd);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]};Ud.node;const _d=te(Ud);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd={name:"circle-x",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],aliases:["x-circle"]};Fd.node;const uo=te(Fd);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};Hd.node;const po=te(Hd);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd={name:"code-xml",size:24,node:[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],aliases:["code-2"]};Jd.node;const Xr=te(Jd);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd={name:"code",size:24,node:[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]]};qd.node;const ag=te(qd);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};Vd.node;const Vn=te(Vd);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};Gd.node;const Kd=te(Gd);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd={name:"database",size:24,node:[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]};Wd.node;const mo=te(Wd);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};Qd.node;const fd=te(Qd);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d={name:"eye-off",size:24,node:[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]};$d.node;const ig=te($d);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};Yd.node;const sg=te(Yd);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd={name:"file-check",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]};Zd.node;const og=te(Zd);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd={name:"file-code-corner",size:24,node:[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],aliases:["file-code-2"]};Xd.node;const lg=te(Xd);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu={name:"file-code",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]]};eu.node;const si=te(eu);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};tu.node;const ru=te(tu);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu={name:"folder-tree",size:24,node:[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]};nu.node;const cg=te(nu);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au={name:"funnel",size:24,node:[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],aliases:["filter"]};au.node;const go=te(au);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu={name:"globe",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]};iu.node;const dg=te(iu);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su={name:"heart",size:24,node:[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]};su.node;const ug=te(su);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou={name:"info",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]};ou.node;const lu=te(ou);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};cu.node;const en=te(cu);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du={name:"lightbulb",size:24,node:[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]};du.node;const hd=te(du);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu={name:"list-tree",size:24,node:[["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"M3 10a2 2 0 0 0 2 2h3",key:"1npucw"}],["path",{d:"M3 5v12a2 2 0 0 0 2 2h3",key:"x1gjn2"}]]};uu.node;const pg=te(uu);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu={name:"lock",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]};pu.node;const mg=te(pu);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};mu.node;const gg=te(mu);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};gu.node;const yd=te(gu);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};fu.node;const oo=te(fu);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};hu.node;const fo=te(hu);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};yu.node;const ho=te(yu);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};vu.node;const fg=te(vu);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu={name:"server",size:24,node:[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]};xu.node;const yo=te(xu);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku={name:"settings",size:24,node:[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};ku.node;const hg=te(ku);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu={name:"shield-alert",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]};bu.node;const Su=te(bu);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};wu.node;const oi=te(wu);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Cu.node;const At=te(Cu);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju={name:"square-check-big",size:24,node:[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-square"]};ju.node;const yg=te(ju);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu={name:"square",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]};Tu.node;const vg=te(Tu);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu={name:"tag",size:24,node:[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]};Eu.node;const xg=te(Eu);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au={name:"terminal",size:24,node:[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]};Au.node;const Er=te(Au);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu={name:"triangle-alert",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle"]};Nu.node;const li=te(Nu);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu={name:"trophy",size:24,node:[["path",{d:"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",key:"pwuv1l"}],["path",{d:"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",key:"1y54w1"}],["path",{d:"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",key:"e30mpu"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",key:"i0yafy"}]]};Pu.node;const kg=te(Pu);/**
 * @license lucide-react v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Ru.node;const vo=te(Ru),bg={tr:{nav:{modules:"Eğitim Modülleri",practice:"Pratik Lab",recipes:"Kod Tarifleri",vibeCoding:"Vibe Coding & AI",glossary:"Terimler",quiz:"Yetkinlik Testi",searchPlaceholder:"Ara...",quickQuiz:"Yetkinlik Testi",versionBadge:"v3.3 & Java 21"},hero:{badge:"Spring Boot 3.3+ & Java 21 LTS Standartları",title1:"Kurumsal Seviyede",titleHighlight:"Spring Boot",title2:"Uzmanlığı Kazanın",description:"Dependency Injection, Hibernate 6 & JPA, Spring Security 6 JWT, Hexagonal Clean Architecture, Virtual Threads ve Docker orkestrasyonunu interaktif laboratuvarlar ve Türkçe/İngilizce derin kaynaklarla öğrenin.",btnModules:"Modülleri İncele (10 Modül)",btnPractice:"Pratik & Test Lab",statModules:"Kapsamlı Modül",statLab:"İnteraktif Lab",statRecipes:"Kurumsal Tarif",statGlossary:"Teknik Terim",featureHeading:"Platformun Güçlü Özellikleri",featureSub:"Teoriyi pratikle birleştiren, production standartlarında eksiksiz Spring Boot deneyimi.",feat1Title:"10 Kapsamlı Modül",feat1Desc:"IoC Container, Hibernate JPA, REST API, Spring Security 6, Hexagonal Mimari, Docker ve Vibe Coding AI Guardrails.",feat2Title:"Canlı Spring Stüdyosu",feat2Desc:"Docker JVM üzerinde gerçek @RestController, @Service ve JPA testleri.",feat3Title:"Clean Architecture & Rest",feat3Desc:"Hexagonal mimari katmanları, canlı HTTP istek simülatörü ve Starter pom.xml sihirbazı.",feat4Title:"Yetkinlik & Terimler Sözlüğü",feat4Desc:"AOP'den Proxy mekanizmalarına terimler sözlüğü ve interaktif soru haritalı yetkinlik testi.",explore:"Keşfet",modulesTitle:"Eğitim Modülleri",modulesSub:"Sıfırdan ileri seviyeye, güvenlikten mikroservis mimarilerine yapılandırılmış müfredat.",viewAll:"Tümünü Gör (10 Modül)"},docker:{activeTitle:"🟢 Gerçek Docker Java 21 JVM Derleme & Test Motoru Bağlı",activeDesc:"Kodlarınız doğrudan localhost:8080 üzerinde koşan Java 21 Temurin Spring Boot mikro derleyicisine gönderilir ve izole ortamda derlenip test edilir.",inactiveTitle:"⚠️ DİKKAT: Docker Ortamında Değilsiniz (Gerçek Java Derleyicisi Deaktif)",inactiveDesc:'Şu anda statik bir web ortamındasınız. Güvenlik ve JVM mimarisi gereği gerçek Java 21 derleyicisi ve Spring Boot konteyneri tarayıcı üzerinde doğrudan çalışamaz. Bu yüzden "Kodu Derle & Test Et" butonu deaktif edilmiştir. Testleri çalıştırmak için projeyi Docker ile başlatmalısınız.',checkBtn:"Bağlantıyı Kontrol Et",refresh:"Yenile",tutorialTitle:"Gerçek Java 21 & Spring Boot Derleyicisini Açmak İçin Docker Kurulumu (3 Adım):",step1:"1. Repoyu Klonlayın",step2:"2. Proje Dizinine Geçin",step3:"3. Docker Compose ile Başlatın",singleLine:"Tek satırda çalıştırma:",copyBtn:"Komutları Kopyala",copied:"Kopyalandı!"},practice:{badge:"İnteraktif Laboratuvar & Kod Stüdyosu",title:"Spring Boot 3.3 Canlı Laboratuvarı",desc:"Docker JVM üzerinde gerçek Spring Boot kodları yazın, Hexagonal mimari katmanlarını gezin, HTTP istek yaşam döngüsünü adım adım izleyin ve Initializr ile proje oluşturun.",tab1:"1. ⚡ Canlı Spring Kod Stüdyosu (Challenge Runner)",tab2:"2. 🏛️ Hexagonal & Clean Architecture Gezgini",tab3:"3. 🔄 Spring MVC İstek Yaşam Döngüsü Simülatörü",tab4:"4. 🌐 Canlı REST API & SQL Log Simülatörü",tab5:"5. 📦 Spring Initializr & pom.xml Oluşturucu"},playground:{problemDesc:"Görev & Problem Tanımı",requirements:"Teknik Gereksinimler",targetTests:"Hedef Birim Testleri",showHint:"💡 İpucu & Çözüm Kodu Göster",hideHint:"İpuçlarını Gizle",hints:"İpuçları & Örnek Çözüm:",loadSolution:"💡 Çözümü Editöre Yükle",resetCode:"Kodu Sıfırla",engineState:"Motor Durumu:",dockerActive:"Docker Aktif (Port 8080)",noConnection:"Bağlantı Yok (Docker Gerekli)",runBtn:"Kodu Derle & Test Et",runningBtn:"Derleniyor & Testler Koşturuluyor...",disabledBtn:"Kodu Derle & Test Et (Docker Bağlantısı Gerekli)",tabTests:"Test Sonuçları",tabSolution:"Örnek Çözüm",tabLogs:"Spring Boot 3.3.4 Boot Logları",emptyTests:'Testleri çalıştırmak için "Kodu Derle & Test Et" butonuna tıklayın.',emptyLogs:"Henüz başlatma kaydı yok.",status:"Durum:",expected:"Beklenen:",actual:"Elde Edilen:",passed:"PASSED (Başarılı)",failed:"FAILED (Başarısız)",allPassedTitle:"🎉 Tebrikler! Tüm Testler Başarıyla Geçti!",allPassedSub:"Spring Boot gereksinimlerini eksiksiz yerine getirdiniz. Sonraki göreve geçebilirsiniz."},quiz:{badge:"Spring Boot 3.3 & Java 21 Yetkinlik Testi",desc:"Teknik mülakat ve kurumsal mimari standartlarında hazırlanmış sorular ile bilgi seviyenizi ölçün.",filterAll:"Tümü",question:"Soru",prevQuestion:"Önceki Soru",nextQuestion:"Sonraki Soru",finishTest:"Testi Bitir & Sonuçları Gör",questionMap:"Soru Haritası",answered:"Cevaplanan",empty:"Boş",correct:"Doğru",wrong:"Yanlış",resultTitle:"Test Tamamlandı!",restartTest:"Testi Yeniden Başlat",reviewTitle:"Detaylı Soru & Çözüm Analizi",score:"Toplam Başarı Skoru"},glossary:{badge:"Spring Boot Terimler Sözlüğü",title:"Spring Boot Kavram ve Terimler Rehberi",desc:"AOP, Dynamic Proxies, Hibernate First-Level Cache, Dirty Checking, RFC 7807 ve Virtual Threads gibi kurumsal mimari kavramlarının derinlemesine açıklamaları.",searchPlaceholder:"Terim, anotasyon veya anahtar kelime ara (örn: AOP, Cache, Proxy)...",allCategories:"Tüm Kategoriler",countTerms:"Terim Listeleniyor",noResults:"Aramanızla eşleşen teknik terim bulunamadı."},recipes:{badge:"Production-Grade Kod Tarifleri",title:"Spring Boot 3.3 Kurumsal Kod Kalıpları",desc:"Global Exception Handler, JWT Security Filter, JPA Auditing, Custom Validation ve Rate Limiting gibi gerçek hayat senaryoları için kopyalanabilir temiz kod şablonları.",copyCode:"Kodu Kopyala",copied:"Kopyalandı!"},search:{modalTitle:"Hızlı Arama",placeholder:"Modül, ders, terim veya tarif ara...",noResults:"Sonuç bulunamadı.",escToClose:"Kapatmak için ESC tuşuna basın",tabModules:"Dersler",tabRecipes:"Tarifler",tabGlossary:"Terimler",tabQuiz:"Soru Testi"},footer:{desc:"Spring Boot 3.3 ve Java 21 ile kurumsal mikroservisler, Clean Architecture ve ileri seviye backend mimarilerini öğrenmek için modern eğitim platformu.",quickLinks:"Hızlı Erişim",legal:"Açık Kaynak & MIT Lisansı ile sunulmaktadır.",builtWith:"Spring Boot 3.3, Java 21, React 18 & Tailwind CSS ile geliştirildi."}},en:{nav:{modules:"Curriculum Modules",practice:"Practice Lab",recipes:"Code Recipes",vibeCoding:"Vibe Coding & AI",glossary:"Glossary",quiz:"Skill Assessment",searchPlaceholder:"Search...",quickQuiz:"Skill Assessment",versionBadge:"v3.3 & Java 21"},hero:{badge:"Spring Boot 3.3+ & Java 21 LTS Standards",title1:"Master Enterprise",titleHighlight:"Spring Boot",title2:"Engineering",description:"Master Dependency Injection, Hibernate 6 & JPA, Spring Security 6 JWT, Hexagonal Clean Architecture, Virtual Threads, and Docker orchestration with interactive labs and deep bilingual technical resources.",btnModules:"Explore Modules (10 Modules)",btnPractice:"Practice & Test Lab",statModules:"Deep Modules",statLab:"Interactive Labs",statRecipes:"Enterprise Recipes",statGlossary:"Technical Terms",featureHeading:"Platform Core Highlights",featureSub:"Combining deep theory with hands-on practice in production-grade Spring Boot engineering.",feat1Title:"10 Comprehensive Modules",feat1Desc:"IoC Container, Hibernate JPA, REST API, Spring Security 6, Hexagonal Architecture, Docker, and Vibe Coding AI Guardrails.",feat2Title:"Live Spring Studio",feat2Desc:"Write and test real @RestController, @Service, and JPA code on Docker JVM.",feat3Title:"Clean Architecture & REST",feat3Desc:"Hexagonal architecture layers, live HTTP request flow simulator, and dynamic Starter pom.xml generator.",feat4Title:"Skills & Technical Glossary",feat4Desc:"Deep glossary from AOP to Proxies and interactive question map skill assessment quiz.",explore:"Explore",modulesTitle:"Curriculum Modules",modulesSub:"From core fundamentals to security, microservices, and AI guardrails.",viewAll:"View All (10 Modules)"},docker:{activeTitle:"🟢 Live Docker Java 21 JVM Compiler & Test Engine Connected",activeDesc:"Your code is sent directly to the Java 21 Temurin Spring Boot compiler running on localhost:8080 and executed in an isolated environment.",inactiveTitle:"⚠️ WARNING: You are not in Docker environment (Real Java Compiler Disabled)",inactiveDesc:'You are currently on a static web environment (Netlify/Vercel etc.). Due to security and JVM architecture constraints, a real Java 21 compiler and Spring Boot container cannot execute client-side in the browser. Therefore, the "Compile & Test Code" button is deactivated. To run and test code, please launch the project with Docker.',checkBtn:"Check Connection",refresh:"Refresh",tutorialTitle:"Docker Setup Tutorial to Enable Real Java 21 Compiler (3 Steps):",step1:"1. Clone Repository",step2:"2. Change to Directory",step3:"3. Start with Docker Compose",singleLine:"Run with single command:",copyBtn:"Copy Commands",copied:"Copied!"},practice:{badge:"Interactive Lab & Code Studio",title:"Spring Boot 3.3 Live Lab",desc:"Write real Spring Boot code on Docker JVM, explore Hexagonal architecture layers, trace HTTP request lifecycle step-by-step, and generate initializr projects.",tab1:"1. ⚡ Live Spring Code Studio (Challenge Runner)",tab2:"2. 🏛️ Hexagonal & Clean Architecture Explorer",tab3:"3. 🔄 Spring MVC Request Lifecycle Visualizer",tab4:"4. 🌐 Live REST API & SQL Log Simulator",tab5:"5. 📦 Spring Initializr & pom.xml Generator"},playground:{problemDesc:"Task & Problem Statement",requirements:"Technical Requirements",targetTests:"Target Unit Tests",showHint:"💡 Show Hint & Reference Solution",hideHint:"Hide Hints",hints:"Hints & Sample Solution:",loadSolution:"💡 Load Solution into Editor",resetCode:"Reset Code",engineState:"Engine Status:",dockerActive:"Docker Active (Port 8080)",noConnection:"No Connection (Docker Required)",runBtn:"Compile & Test Code",runningBtn:"Compiling & Running Tests...",disabledBtn:"Compile & Test Code (Docker Connection Required)",tabTests:"Test Results",tabSolution:"Sample Solution",tabLogs:"Spring Boot 3.3.4 Boot Logs",emptyTests:'Click "Compile & Test Code" above to run tests.',emptyLogs:"No logs generated yet.",status:"Status:",expected:"Expected:",actual:"Actual Output:",passed:"PASSED",failed:"FAILED",allPassedTitle:"🎉 Congratulations! All Tests Passed!",allPassedSub:"You have satisfied all Spring Boot requirements. You can proceed to the next challenge."},quiz:{badge:"Spring Boot 3.3 & Java 21 Skill Assessment",desc:"Test your knowledge with questions tailored to technical interviews and enterprise architecture standards.",filterAll:"All",question:"Question",prevQuestion:"Previous Question",nextQuestion:"Next Question",finishTest:"Finish Assessment & View Results",questionMap:"Question Map",answered:"Answered",empty:"Unanswered",correct:"Correct",wrong:"Incorrect",resultTitle:"Assessment Completed!",restartTest:"Restart Assessment",reviewTitle:"Detailed Question & Solution Review",score:"Total Score"},glossary:{badge:"Spring Boot Technical Glossary",title:"Spring Boot Concepts & Terms Directory",desc:"Deep technical breakdown of enterprise patterns including AOP, Dynamic Proxies, Hibernate First-Level Cache, Dirty Checking, RFC 7807, and Virtual Threads.",searchPlaceholder:"Search term, annotation or keyword (e.g. AOP, Cache, Proxy)...",allCategories:"All Categories",countTerms:"Terms Listed",noResults:"No matching technical terms found."},recipes:{badge:"Production-Grade Code Recipes",title:"Spring Boot 3.3 Enterprise Patterns",desc:"Copy-paste ready clean code templates for real-world scenarios: Global Exception Handler, JWT Security Filter, JPA Auditing, Custom Validation, and Rate Limiting.",copyCode:"Copy Code",copied:"Copied!"},search:{modalTitle:"Quick Search",placeholder:"Search modules, lessons, terms or recipes...",noResults:"No results found.",escToClose:"Press ESC to close",tabModules:"Lessons",tabRecipes:"Recipes",tabGlossary:"Glossary",tabQuiz:"Quiz Questions"},footer:{desc:"Modern platform to master Spring Boot 3.3 and Java 21 enterprise microservices, Clean Architecture, and advanced backend engineering.",quickLinks:"Quick Links",legal:"Released under open-source MIT License.",builtWith:"Built with Spring Boot 3.3, Java 21, React 18 & Tailwind CSS."}}},Iu=F.createContext(void 0),Sg=({children:d})=>{const[c,u]=F.useState(()=>{if(typeof window<"u"){const A=localStorage.getItem("preferred_lang_sb");return A==="en"||A==="tr"?A:navigator.language.startsWith("tr")?"tr":"en"}return"tr"});F.useEffect(()=>{typeof document<"u"&&(document.documentElement.lang=c)},[c]);const b=A=>{u(A),typeof window<"u"&&localStorage.setItem("preferred_lang_sb",A)},j=()=>{b(c==="tr"?"en":"tr")},y=bg[c];return n.jsx(Iu.Provider,{value:{language:c,setLanguage:b,toggleLanguage:j,t:y},children:d})},Ke=()=>{const d=F.useContext(Iu);if(!d)throw new Error("useLanguage must be used within a LanguageProvider");return d},wg=({activeTab:d,setActiveTab:c,onOpenSearch:u})=>{const{language:b,setLanguage:j,t:y}=Ke(),[A,C]=F.useState(!1),k=[{id:"lessons",label:y.nav.modules,icon:Gn},{id:"practice",label:y.nav.practice,icon:Xr},{id:"recipes",label:y.nav.recipes,icon:Er},{id:"glossary",label:y.nav.glossary,icon:Td},{id:"quiz",label:y.nav.quiz,icon:eg}];return n.jsxs("header",{className:"sticky top-0 z-40 w-full backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80 transition-all",children:[n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4",children:[n.jsxs("div",{onClick:()=>c("home"),className:"flex items-center space-x-3 cursor-pointer group select-none shrink-0",children:[n.jsxs("div",{className:"relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-950 via-slate-900 to-teal-950 border border-emerald-500/30 group-hover:border-emerald-400/80 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all duration-300",children:[n.jsx(ru,{className:"w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-300 fill-emerald-400/20"}),n.jsx("div",{className:"absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_#34d399]"})]}),n.jsxs("div",{className:"flex items-center space-x-2",children:[n.jsxs("span",{className:"font-extrabold text-lg tracking-tight text-white group-hover:text-emerald-200 transition-colors",children:["Spring",n.jsx("span",{className:"text-emerald-400 font-black",children:"Boot"})]}),n.jsx("span",{className:"hidden sm:inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 shadow-sm",children:"v3.3 & Java 21"})]})]}),n.jsx("nav",{className:"hidden xl:flex items-center space-x-1 p-1 bg-slate-900/50 border border-slate-800/60 rounded-xl",children:k.map(N=>{const J=N.icon,U=d===N.id;return n.jsxs("button",{onClick:()=>c(N.id),className:`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 ${U?"bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shadow-sm font-bold":"text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 border border-transparent"}`,children:[n.jsx(J,{className:`w-3.5 h-3.5 shrink-0 ${U?"text-emerald-400":"text-slate-400"}`}),n.jsx("span",{children:N.label})]},N.id)})}),n.jsxs("div",{className:"flex items-center space-x-2.5 shrink-0",children:[n.jsxs("button",{onClick:u,className:"flex items-center space-x-2 px-3 py-1.5 text-xs text-slate-400 bg-slate-900/70 hover:bg-slate-850 hover:text-slate-200 border border-slate-800/80 rounded-xl transition-all hover:border-slate-700 shadow-sm",children:[n.jsx(ho,{className:"w-3.5 h-3.5 text-emerald-400 shrink-0"}),n.jsx("span",{className:"hidden md:inline",children:y.nav.searchPlaceholder}),n.jsx("kbd",{className:"hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-slate-950 rounded text-slate-400 border border-slate-800",children:"⌘K"})]}),n.jsxs("div",{className:"flex items-center bg-slate-900/80 border border-slate-800/80 rounded-xl p-0.5 shadow-sm",children:[n.jsx("button",{onClick:()=>j("tr"),className:`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${b==="tr"?"bg-emerald-500 text-slate-950 shadow-sm font-bold":"text-slate-400 hover:text-slate-200"}`,title:"Türkçe",children:"TR"}),n.jsx("button",{onClick:()=>j("en"),className:`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${b==="en"?"bg-emerald-500 text-slate-950 shadow-sm font-bold":"text-slate-400 hover:text-slate-200"}`,title:"English",children:"EN"})]}),n.jsx("a",{href:"https://github.com/Tylefnx/learnspringboot",target:"_blank",rel:"noreferrer",className:"p-2 text-slate-400 hover:text-white bg-slate-900/70 hover:bg-slate-800 border border-slate-800/80 hover:border-emerald-500/40 rounded-xl transition-all shadow-sm",title:"GitHub: Tylefnx/learnspringboot",children:n.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:n.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"})})}),n.jsx("button",{onClick:()=>C(!A),className:"xl:hidden p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800",children:A?n.jsx(vo,{className:"w-4 h-4"}):n.jsx(gg,{className:"w-4 h-4"})})]})]}),A&&n.jsx("div",{className:"xl:hidden border-b border-slate-800 bg-slate-950 px-4 py-3 space-y-1.5 animate-in slide-in-from-top-2",children:k.map(N=>{const J=N.icon,U=d===N.id;return n.jsx("button",{onClick:()=>{c(N.id),C(!1)},className:`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold ${U?"bg-emerald-950/60 text-emerald-300 border border-emerald-500/30":"text-slate-300 hover:bg-slate-900"}`,children:n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx(J,{className:"w-4 h-4 text-emerald-400"}),n.jsx("span",{children:N.label})]})},N.id)})})]})},Cg=()=>{const{t:d}=Ke();return n.jsx("footer",{className:"border-t border-slate-800 bg-slate-950/80 text-slate-400 text-sm mt-20",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[n.jsxs("div",{className:"space-y-3 md:col-span-1",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("div",{className:"w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-black",children:n.jsx(ru,{className:"w-4 h-4 text-slate-950 fill-slate-950"})}),n.jsx("span",{className:"font-bold text-white text-base",children:"Spring Boot Hub"})]}),n.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:d.footer.desc}),n.jsxs("div",{className:"flex items-center gap-2 text-xs text-emerald-400 font-medium pt-1",children:[n.jsx(qn,{className:"w-3.5 h-3.5"}),n.jsx("span",{children:"Docker & Cloud Ready"})]})]}),n.jsxs("div",{children:[n.jsx("h4",{className:"font-semibold text-white text-xs uppercase tracking-wider mb-3",children:"Core & Architecture"}),n.jsxs("ul",{className:"space-y-2 text-xs",children:[n.jsx("li",{children:n.jsx("a",{href:"#vibe-coding",className:"hover:text-emerald-400 text-emerald-300 font-semibold transition-colors",children:"✨ Vibe Coding & AI Guardrails"})}),n.jsx("li",{children:n.jsx("a",{href:"#module/module-1-spring-boot-basics",className:"hover:text-emerald-400 transition-colors",children:"IoC & Dependency Injection"})}),n.jsx("li",{children:n.jsx("a",{href:"#module/module-2-spring-data-jpa-hibernate",className:"hover:text-emerald-400 transition-colors",children:"Spring Data JPA & N+1 Fix"})}),n.jsx("li",{children:n.jsx("a",{href:"#module/module-4-spring-security-jwt",className:"hover:text-emerald-400 transition-colors",children:"Spring Security 6 & JWT Auth"})}),n.jsx("li",{children:n.jsx("a",{href:"#module/module-3-rest-apis-validation",className:"hover:text-emerald-400 transition-colors",children:"REST API & ProblemDetails"})})]})]}),n.jsxs("div",{children:[n.jsx("h4",{className:"font-semibold text-white text-xs uppercase tracking-wider mb-3",children:d.practice.badge}),n.jsxs("ul",{className:"space-y-2 text-xs",children:[n.jsx("li",{children:n.jsx("span",{className:"hover:text-emerald-400 transition-colors",children:"Interactive Code Studio & Tests"})}),n.jsx("li",{children:n.jsx("span",{className:"hover:text-emerald-400 transition-colors",children:"Hexagonal Architecture Explorer"})}),n.jsx("li",{children:n.jsx("span",{className:"hover:text-emerald-400 transition-colors",children:"Request Lifecycle Simulator"})}),n.jsx("li",{children:n.jsx("span",{className:"hover:text-emerald-400 transition-colors",children:"Starter / pom.xml Generator"})})]})]}),n.jsxs("div",{children:[n.jsx("h4",{className:"font-semibold text-white text-xs uppercase tracking-wider mb-3",children:"Standards"}),n.jsxs("div",{className:"flex flex-wrap gap-1.5 text-[11px]",children:[n.jsx("span",{className:"px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700",children:"Spring Boot 3.3+"}),n.jsx("span",{className:"px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700",children:"Java 21 LTS"}),n.jsx("span",{className:"px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700",children:"Jakarta EE 10"}),n.jsx("span",{className:"px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700",children:"Spring Security 6"}),n.jsx("span",{className:"px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700",children:"Hibernate 6"}),n.jsx("span",{className:"px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700",children:"Docker"})]})]})]}),n.jsxs("div",{className:"border-t border-slate-800/80 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500",children:[n.jsxs("div",{children:["© 2026 Spring Boot Mastery Hub. ",d.footer.legal]}),n.jsxs("div",{className:"flex items-center gap-1",children:[n.jsx("span",{children:d.footer.builtWith}),n.jsx(ug,{className:"w-3.5 h-3.5 text-red-500 fill-red-500 mx-1"})]})]})]})})},jg=[{id:"module-1-spring-boot-basics",number:1,title:"Spring Boot Fundamentals & Core Architecture",subtitle:"Differences from Spring Framework, Auto-Configuration internals, Starter ecosystem, and Classpath analysis",icon:"Layers",category:"Core Architecture",difficulty:"Beginner",durationMinutes:35,overview:'Spring Boot is the leading framework for building modern, production-ready enterprise Java applications. In this module, we dissect the philosophy of "Convention over Configuration", how Auto-Configuration evaluates conditions under the hood, and how to configure Jakarta EE 10 and Java 21 LTS standards.',sections:[{id:"spring-vs-spring-boot",title:"1. Traditional Spring Framework vs Spring Boot",content:"Traditional Spring Framework (Spring 2.x - 4.x) revolutionized Inversion of Control (IoC) and Aspect-Oriented Programming (AOP), but bootstrapping a production-ready application required writing dozens of complex XML files or verbose `@Configuration` classes (Boilerplate Configuration Hell).\n\nFurthermore, managing standalone application servers (Tomcat, WebLogic, WildFly), producing `.war` archives, and handling deployment overhead severely slowed down developer productivity.\n\n### 4 Core Problems Solved by Spring Boot:\n1. **Dependency Hell**: Replaced by **BOM (Bill of Materials)** and curated `spring-boot-starter-*` dependency descriptors.\n2. **Boilerplate Configuration**: Replaced by **Intelligent Auto-Configuration**.\n3. **Deployment Friction**: Replaced by single-command (`java -jar`) execution via **Embedded Web Servers** (Tomcat, Jetty, Undertow).\n4. **Lack of Observability**: Addressed by production-ready **Spring Boot Actuator** health checks, metrics, and tracing.",codeSnippets:[{title:"Spring Boot 3.3+ pom.xml Standard Configuration",language:"xml",filename:"pom.xml",description:"spring-boot-starter-parent manages compatible dependency versions from a single source of truth.",code:`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    
    <!-- Spring Boot Parent BOM: Curates 200+ compatible libraries -->
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.3.4</version>
        <relativePath/>
    </parent>
    
    <groupId>com.example</groupId>
    <artifactId>enterprise-api</artifactId>
    <version>1.0.0-SNAPSHOT</version>
    
    <properties>
        <java.version>21</java.version>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>
    
    <dependencies>
        <!-- REST API, MVC & Embedded Tomcat (Port 8080) -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <!-- Production Health & Metrics -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
        
        <!-- JUnit 5, Mockito & AssertJ test suite -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <!-- Builds Executable Fat JAR -->
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>`}],notes:["Spring Boot 3.0+ requires Java 17 as baseline. Java 21 LTS is strongly recommended for Virtual Threads (Project Loom).","Following Jakarta EE 10 standards, package namespaces shifted from `javax.servlet` / `javax.persistence` to `jakarta.servlet` / `jakarta.persistence`."]},{id:"auto-configuration-internals",title:"2. How Auto-Configuration Works Internally",content:'The `@SpringBootApplication` annotation is a meta-annotation composed of:\n```\n@SpringBootApplication = @SpringBootConfiguration + @EnableAutoConfiguration + @ComponentScan\n```\n\n### Auto-Configuration Loading Sequence:\n1. Spring Boot scans classpath imports registered in `META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports`.\n2. Over 150+ registered **Auto-Configuration Classes** are evaluated sequentially.\n3. Each class checks **Conditional Annotations (@Conditional...)**.\n\n### Common Conditional Annotations:\n| Annotation | Condition |\n|---|---|\n| `@ConditionalOnClass(DataSource.class)` | Activates when DataSource class is on classpath |\n| `@ConditionalOnMissingBean(ObjectMapper.class)` | Activates only if developer has not declared a custom ObjectMapper |\n| `@ConditionalOnProperty(name="feature.x", havingValue="true")` | Activates when matching application.yml property is true |\n| `@ConditionalOnWebApplication` | Activates when running as web application |',codeSnippets:[{title:"Anatomy of an Auto-Configuration Class",language:"java",filename:"JacksonAutoConfiguration.java (Simplified)",description:"How Spring Boot conditionally instantiates a default Jackson ObjectMapper.",code:`package org.springframework.boot.autoconfigure.jackson;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Configuration(proxyBeanMethods = false)
@ConditionalOnClass(ObjectMapper.class)
public class JacksonAutoConfiguration {

    @Bean
    @Primary
    @ConditionalOnMissingBean // Executes only if user has not defined their own @Bean ObjectMapper
    public ObjectMapper jacksonObjectMapper() {
        ObjectMapper mapper = new ObjectMapper();
        return mapper;
    }
}`}],tips:['Add `debug: true` to `application.yml` to inspect the "CONDITIONS EVALUATION REPORT" in console logs.']}],bestPractices:["Place main Application class at the root package (e.g. `com.company.project.Application`) so `@ComponentScan` scans all sub-packages automatically.","Never run embedded Tomcat as root user inside Docker containers."],commonPitfalls:["Accidentally overriding essential auto-configurations by declaring beans with conflicting names.","Importing legacy `javax.*` packages in Spring Boot 3.x resulting in ClassNotFoundException."],keyTakeaways:["Starters provide curated, conflict-free dependency sets (BOM).","Auto-Configuration uses conditional evaluation (@ConditionalOnMissingBean, @ConditionalOnClass) to configure sensible defaults."]},{id:"module-2-ioc-di-beans",number:2,title:"IoC, Dependency Injection & Bean Lifecycle",subtitle:"ApplicationContext, Constructor Injection, Bean Scopes, and @Configuration",icon:"Boxes",category:"Dependency Injection",difficulty:"Beginner",durationMinutes:40,overview:"Inversion of Control (IoC) transfers object creation and wiring to the Spring ApplicationContext. In this module, we explore Bean lifecycles, Singleton thread safety, and why Constructor Injection is the industry gold standard.",sections:[{id:"constructor-vs-field",title:"1. Why Constructor Injection Trumps Field Injection",content:`Field injection using \`@Autowired private MyService service;\` was common in legacy Spring, but is considered an antipattern in modern engineering.

### 3 Major Flaws of Field Injection:
1. **Hidden NullPointerExceptions**: Dependencies can remain uninitialized during pure unit tests.
2. **Violation of Immutability**: Fields cannot be marked \`final\`.
3. **Hidden Circular Dependencies**: Framework masks circular references at startup until runtime crashes.`,codeSnippets:[{title:"Clean Constructor Injection with Final Fields",language:"java",filename:"OrderService.java",description:"Explicit dependency declaration enabling pure Mockito unit testing.",code:`package com.example.mastery.service;

import org.springframework.stereotype.Service;

@Service
public class OrderService {

    private final PaymentService paymentService;
    private final NotificationService notificationService;

    // In Spring 4.3+, @Autowired on single constructors is optional
    public OrderService(PaymentService paymentService, NotificationService notificationService) {
        this.paymentService = paymentService;
        this.notificationService = notificationService;
    }

    public void processOrder(Long orderId) {
        paymentService.charge(orderId);
        notificationService.sendReceipt(orderId);
    }
}`}]}],bestPractices:["Always use Constructor Injection with `final` fields.","Keep Singleton beans stateless to avoid multithreading race conditions."],commonPitfalls:["Storing mutable user state inside Singleton bean instance variables.","Using `@Autowired` directly on private fields in production code."],keyTakeaways:["Constructor injection ensures immutability, testability, and fail-fast startup.","Singleton scope beans are shared across all HTTP threads simultaneously."]},{id:"module-3-data-jpa-hibernate",number:3,title:"Spring Data JPA, Hibernate 6 & Database Optimization",subtitle:"Entity mappings, Persistence Context, Dirty Checking, N+1 Query Fixes with EntityGraph",icon:"Database",category:"Database & ORM",difficulty:"Intermediate",durationMinutes:45,overview:"Master Spring Data JPA and Hibernate 6 internals. Learn how the Persistence Context manages entity state, how Dirty Checking eliminates manual UPDATE queries, and how to eliminate N+1 query bottlenecks.",sections:[{id:"n-plus-one-problem",title:"1. Eliminating the N+1 Query Problem with EntityGraph & JOIN FETCH",content:`When fetching collections across OneToMany relationships, lazy loading triggers 1 initial query + N additional sub-queries for each child item.

### The Fix:
Use **JOIN FETCH** in JPQL or declare an **@EntityGraph** to load parent and child associations in a single optimized SQL JOIN statement.`,codeSnippets:[{title:"EntityGraph Optimization in Spring Data JPA",language:"java",filename:"UserRepository.java",description:"Single query eager fetch avoiding N+1 roundtrips.",code:`package com.example.mastery.repository;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    @EntityGraph(attributePaths = {"orders", "orders.items"})
    List<User> findAllWithOrders();
}`}]}],bestPractices:["Use `@EntityGraph` or `JOIN FETCH` for collection queries.","Always configure connection pool settings (`maximum-pool-size`) in production."],commonPitfalls:["Leaving `spring.jpa.hibernate.ddl-auto=update` in production environments.","Calling `repository.save()` inside `@Transactional` methods when modifying managed entities."],keyTakeaways:["Hibernate Dirty Checking automatically persists modified managed entities upon transaction commit.","N+1 query problems must be solved using batch joins or entity graphs."]},{id:"module-4-rest-apis",number:4,title:"RESTful API Design, RFC 7807 & Global Exception Handling",subtitle:"@RestController, @Valid validation, ProblemDetails, and ResponseEntity",icon:"Globe",category:"Web & REST",difficulty:"Intermediate",durationMinutes:40,overview:"Design production-grade REST APIs compliant with HTTP standards and RFC 7807 ProblemDetails specification in Spring Boot 3.",sections:[{id:"rfc-7807-handler",title:"1. Standardized Error Handling with ProblemDetail",content:"Spring Boot 3 natively implements RFC 7807 ProblemDetails, standardizing error payloads across microservices.",codeSnippets:[{title:"Centralized GlobalExceptionHandler",language:"java",filename:"GlobalExceptionHandler.java",description:"Standardized RFC 7807 error payload generation.",code:`package com.example.mastery.exception;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ProblemDetail handleNotFound(ResourceNotFoundException ex) {
        ProblemDetail problem = ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, ex.getMessage());
        problem.setTitle("Resource Not Found");
        return problem;
    }
}`}]}],bestPractices:["Return RFC 7807 ProblemDetail format for all client and server errors.","Use DTOs instead of exposing JPA Entities directly in REST endpoints."],commonPitfalls:["Returning raw stack traces to API clients in production.","Using HTTP 200 OK for error responses."],keyTakeaways:["RFC 7807 standardizes error payload structure across clients.","@RestControllerAdvice centralizes exception handling."]},{id:"module-5-security-jwt",number:5,title:"Spring Security 6 & Modern JWT Authentication",subtitle:"SecurityFilterChain, Stateless Architecture, JJWT 0.12, and Method Security",icon:"ShieldCheck",category:"Security & Auth",difficulty:"Advanced",durationMinutes:50,overview:"Secure enterprise applications with Spring Security 6, custom SecurityFilterChain, and HMAC-SHA256 JWT tokens.",sections:[{id:"security-filter-chain",title:"1. Spring Security 6 Functional Configuration",content:"Spring Security 6 mandates the component-based `SecurityFilterChain` bean DSL, eliminating legacy adapters.",codeSnippets:[{title:"Modern SecurityFilterChain Bean",language:"java",filename:"SecurityConfig.java",description:"Stateless session management and JWT filter registration.",code:`package com.example.mastery.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/v1/auth/**").permitAll()
                .anyRequest().authenticated()
            );
        return http.build();
    }
}`}]}],bestPractices:["Store JWT secrets securely via environment variables.","Use BCrypt or Argon2 password encoders with appropriate work factors."],commonPitfalls:["Storing sensitive credentials inside client-side JWT payload claims.","Disabling CSRF in session-based cookie authentication."],keyTakeaways:["Spring Security 6 enforces stateless SecurityFilterChain configuration.","JWT filters populate SecurityContextHolder per request."]},{id:"module-6-architecture-best-practices",number:6,title:"Clean Architecture, Hexagonal & Domain-Driven Design",subtitle:"Separation of concerns, Ports & Adapters, and Rich Domain Models in Spring Boot",icon:"Cpu",category:"Software Architecture",difficulty:"Advanced",durationMinutes:45,overview:"Apply Clean Architecture with pure Java domain models decoupled from framework dependencies.",sections:[{id:"ports-adapters",title:"1. Ports and Adapters in Pure Java",content:"Domain logic remains isolated in pure Java, interacting with persistence and APIs solely via Inbound and Outbound Ports."}],bestPractices:["Keep Domain entities pure Java with zero framework annotations.","Depend on abstractions (Ports) rather than concrete database adapters."],commonPitfalls:["Coupling domain business rules directly with JPA annotations and database drivers."],keyTakeaways:["Hexagonal architecture guarantees that changing databases or web protocols does not affect core business rules."]},{id:"module-7-performance-virtual-threads",number:7,title:"Java 21 Virtual Threads, Async & Performance Tuning",subtitle:"Project Loom, HikariCP pool optimization, and @Async thread pools",icon:"Zap",category:"Performance & Concurrency",difficulty:"Advanced",durationMinutes:35,overview:"Scale I/O bound workloads effortlessly with Java 21 Virtual Threads and thread pool tuning.",sections:[{id:"virtual-threads-setup",title:"1. Enabling Virtual Threads in Spring Boot 3.2+",content:"Enable Project Loom Virtual Threads globally with a single configuration flag:\n```yaml\nspring:\n  threads:\n    virtual:\n      enabled: true\n```"}],bestPractices:["Enable Virtual Threads for high-concurrency I/O bound web services.","Avoid pinning virtual threads with `synchronized` blocks around blocking I/O (use `ReentrantLock`)."],commonPitfalls:["Creating custom thread pools for virtual threads (virtual threads should not be pooled)."],keyTakeaways:["Virtual threads scale throughput drastically for blocking database and HTTP operations."]},{id:"module-8-testing-quality",number:8,title:"Unit & Integration Testing (Mockito & Testcontainers)",subtitle:"@SpringBootTest, MockMvc, DataJpaTest, and isolated PostgreSQL containers",icon:"CheckCircle2",category:"Testing & QA",difficulty:"Intermediate",durationMinutes:40,overview:"Write fast unit tests and robust integration tests using MockMvc and Testcontainers.",sections:[{id:"testcontainers-integration",title:"1. Integration Testing with Real Database Containers",content:"Use Testcontainers to spin up ephemeral PostgreSQL instances for authentic integration testing."}],bestPractices:["Prefer isolated unit tests for business logic and Testcontainers for persistence validation."],commonPitfalls:["Relying on H2 in-memory databases for tests when production uses PostgreSQL (dialect mismatch)."],keyTakeaways:["Testcontainers ensures parity between test environments and production databases."]},{id:"module-9-devops-docker-production",number:9,title:"Docker Orchestration, Multi-Stage Builds & Actuator",subtitle:"Multi-stage Dockerfile, JVM container limits, and Spring Boot Actuator health checks",icon:"Terminal",category:"DevOps & Cloud",difficulty:"Intermediate",durationMinutes:35,overview:"Containerize and orchestrate Spring Boot with multi-stage Docker builds and production readiness checks.",sections:[{id:"docker-multistage",title:"1. Optimized Multi-Stage Dockerfile",content:"Multi-stage builds produce ultra-light, secure container images running Eclipse Temurin Java 21 JRE."}],bestPractices:["Always use multi-stage builds and non-root runtime users."],commonPitfalls:["Shipping full JDK compilers and build tools inside production container images."],keyTakeaways:["Multi-stage Docker builds reduce image size and attack surfaces drastically."]},{id:"module-10-vibe-coding-ai-guardrails",number:10,title:"AI-Assisted Spring Boot (Vibe Coding) & Security Guardrails",subtitle:"LLM Architectural Pitfalls, AOP Proxy Bypass, BOLA/IDOR Vulnerabilities, ArchUnit Rules, and CI/CD Quality Gates",icon:"Sparkles",category:"AI & Security Architecture",difficulty:"Advanced",durationMinutes:45,overview:"Deep technical investigation into silent architectural defects and security vulnerabilities produced by LLMs in Spring Boot: AOP proxy bypasses, BOLA authorization flaws, Actuator leaks, ArchUnit deterministic rules, and automated AI PR review mechanisms.",sections:[{id:"aop-proxy-blindness",title:"1. AOP Proxy Blindness & @Transactional Violations",content:"### Dynamic Proxy Mechanics & The Self-Invocation Trap\nSpring Framework applies `@Transactional`, `@Async`, and `@Cacheable` declarative features via **CGLIB Dynamic Proxies**.\n\n* **Self-Invocation:** Calling an internal `@Transactional` method on `this` bypasses the proxy container completely. No transaction interceptor runs, and exceptions will **never trigger a rollback**.\n* **Checked Exception Rollback Omission:** Spring TransactionManager only rolls back unchecked exceptions (`RuntimeException` and `Error`) by default. Methods throwing checked exceptions (`IOException`, `SQLException`) silently **COMMIT** unless explicitly configured with `@Transactional(rollbackFor = Exception.class)`.\n* **Private / Final Method Constraints:** CGLIB proxies cannot override private or final methods, rendering annotations on them completely ineffective.",codeSnippets:[{title:"Flawed AI Code vs Production Fix",language:"java",filename:"OrderService.java",code:`// ❌ FLAWED AI CODE:
@Service
public class OrderService {
    public void processBatch(List<OrderReq> list) {
        for (OrderReq req : list) {
            this.saveOrder(req); // PITFALL: Proxy bypassed! Transaction NEVER starts!
        }
    }
    @Transactional
    public void saveOrder(OrderReq req) { ... }
}

// 🟢 PRODUCTION FIX:
@Service
@RequiredArgsConstructor
public class OrderBatchService {
    private final SingleOrderProcessor singleOrderProcessor; // Dedicated bean

    public void processBatch(List<OrderReq> list) {
        for (OrderReq req : list) {
            singleOrderProcessor.saveOrder(req); // Dynamic proxy intercepts and starts TX!
        }
    }
}`}]},{id:"jpa-hibernate-vulnerabilities",title:"2. JPA Inefficiencies, N+1 Queries & Direct Entity Exposure",content:"### Persistence Layer & Architectural Decoupling\n1. **N+1 Query Explosion:** Derived queries traversing lazy collections inside loops trigger hundreds of secondary queries. Fix with `JOIN FETCH` or DTO constructor projections.\n2. **Open-Session-In-View (OSIV):** Keeping `spring.jpa.open-in-view=true` locks database connections until JSON serialization finishes, starving HikariCP connection pools.\n3. **Direct Entity Exposure:** Returning `@Entity` models from `@RestController` methods leaks sensitive data, causes circular Jackson `StackOverflowError` recursion, and enables **Mass Assignment** privilege escalation. Strict DTO records are mandatory.",codeSnippets:[{title:"JOIN FETCH & DTO Isolation",language:"java",filename:"CustomerRepository.java",code:`public interface CustomerRepository extends JpaRepository<Customer, Long> {
    // Single query resolution of N+1 relationships
    @Query("SELECT DISTINCT c FROM Customer c LEFT JOIN FETCH c.orders")
    List<Customer> findAllWithOrders();

    // DTO Constructor Projection for maximal performance
    @Query("SELECT new com.mastery.dto.CustomerDto(c.id, c.name, COUNT(o)) " +
           "FROM Customer c LEFT JOIN c.orders o GROUP BY c.id, c.name")
    List<CustomerDto> fetchSummaries();
}`}]},{id:"bola-actuator-security",title:"3. Broken Object Level Authorization (BOLA/IDOR) & Actuator Leaks",content:"### Critical Security Deficiencies\n* **BOLA / IDOR (OWASP API #1):** LLMs execute `findById(id)` without validating if the authenticated `Principal` owns the record, enabling horizontal privilege escalation.\n* **Actuator Endpoint Exposure:** Setting `management.endpoints.web.exposure.include=*` exposes `/actuator/env` and `/actuator/heapdump`, leaking plain-text passwords and cloud credentials.\n* **SpEL and Native SQL Injection:** String concatenation (`+`) inside native queries and `SpelExpressionParser` evaluations allow Remote Code Execution (RCE).",codeSnippets:[{title:"BOLA Guardrail & Secure Actuator Config",language:"java",filename:"InvoiceController.java & application.yml",code:`// BOLA Protected Controller:
@GetMapping("/api/invoices/{id}")
@PreAuthorize("@securityService.isInvoiceOwner(#id, authentication)")
public ResponseEntity<InvoiceDto> getInvoice(@PathVariable Long id) {
    return ResponseEntity.ok(invoiceService.getInvoice(id));
}

# Production application.yml:
management:
  endpoints:
    web:
      exposure:
        include: "health,info,prometheus" # Strictly minimal whitelist!`}]},{id:"archunit-deterministic-guardrails",title:"4. ArchUnit Deterministic Architectural Enforcement (CI/CD Gates)",content:"### Unit Testing Your Architectural Integrity\nArchUnit turns architectural rules into executable Java unit tests in continuous integration:\n\n* **Controllers Must Not Return Entities:** `controllers_must_not_return_entities`\n* **Services Must Be Stateless:** `services_must_be_stateless` (All service fields must be marked `final`).\n* **Layer Isolation:** Controllers must never directly invoke Repository persistence layers.",codeSnippets:[{title:"ArchUnit Test Rules",language:"java",filename:"ArchitectureRulesTest.java",code:`@AnalyzeClasses(packages = "com.mastery.springboot")
public class ArchitectureRulesTest {

    @ArchTest
    public static final ArchRule controllers_must_not_return_entities =
        methods().that().areDeclaredInClassesThat().resideInAPackage("..controller..")
        .should().notHaveRawReturnType(resideInAPackage("..entity.."))
        .because("JPA Entities must not be returned from REST controllers; use DTOs.");

    @ArchTest
    public static final ArchRule services_must_be_stateless =
        fields().that().areDeclaredInClassesThat().resideInAPackage("..service..")
        .and().areNotStatic()
        .should().beFinal()
        .because("Spring service beans are singletons and must remain stateless.");
}`}]},{id:"ai-reviewer-threat-modeling",title:"5. AI PR Reviewer & Negative Integration Tests",content:`### Positioning AI as a Security Auditor
1. **Semantic PR Auditing:** Calibrate LLM reviewer bots in GitHub Actions to specifically detect AOP proxy bypasses and missing rollback declarations.
2. **Negative Test Synthesis:** Instruct the AI from an attacker's perspective to write \`MockMvc\` tests asserting HTTP 403 Forbidden when unauthorized users attempt cross-tenant resource access.
3. **Hybrid SAST + LLM Triage:** Feed Semgrep and CodeQL findings into LLMs to automatically filter out false positives and synthesize verified code patches.`,codeSnippets:[{title:"Negative MockMvc Authorization Test",language:"java",filename:"InvoiceSecurityNegativeTest.java",code:`@SpringBootTest
@AutoConfigureMockMvc
public class InvoiceSecurityNegativeTest {
    @Autowired
    private MockMvc mockMvc;

    @Test
    @WithMockUser(username = "attacker_bob", roles = "USER")
    void getInvoice_WhenAccessingOtherUserInvoice_ShouldReturnForbidden() throws Exception {
        // Attempting to access Alice's invoice ID:
        mockMvc.perform(get("/api/invoices/101"))
               .andExpect(status().isForbidden()); // Fails CI build if HTTP 200 is returned!
    }
}`}]}],bestPractices:["Never invoke @Transactional or @Async methods internally via this.; delegate to a dedicated bean or TransactionTemplate.","Always configure @Transactional(rollbackFor = Exception.class) on methods throwing checked exceptions.","Never return raw JPA @Entity classes from controllers; decouple public contracts with strict DTO records.","Enforce ArchUnit tests in CI/CD as mandatory quality gates.",'Never expose all actuator endpoints via include: "*"; whitelist only health and info probes.'],commonPitfalls:["Self-invocation silently bypassing @Transactional or @Async interceptors.","Omitting user/tenant ownership filters on findById(id) queries causing BOLA/IDOR.","Invoking lazy getters inside loops causing N+1 query storms and OSIV connection pool exhaustion.","Declaring mutable instance variables or thread-unsafe SimpleDateFormat inside singleton services."],keyTakeaways:["Spring Framework dynamic proxy lifecycles operate under different constraints than raw POJO instances.","AI-generated code quality must be validated through deterministic ArchUnit tests and automated CI/CD guardrails."]}],xo=[{id:"module-1-spring-boot-basics",number:1,title:"Spring Boot Giriş & Mimari Temeller",subtitle:"Spring Framework farkı, Auto-Configuration mekanizması, Starter ekosistemi ve Classpath analizi",icon:"Layers",category:"Temel Mimari",difficulty:"Başlangıç",durationMinutes:35,overview:`Spring Boot, kurumsal Java uygulamaları geliştirmeyi basitleştiren ve standartlaştıran en popüler framework'tür. Bu bölümde geleneksel Spring Framework ile farkları, "Convention over Configuration" felsefesini, Auto-Configuration'ın arka planda nasıl çalıştığını ve Jakarta EE 10 / Java 21 geçişini en ince ayrıntısına kadar inceleyeceğiz.`,sections:[{id:"spring-vs-spring-boot",title:"1. Geleneksel Spring vs Spring Boot",content:"Geleneksel Spring Framework (Spring 2.x - 4.x), IoC (Inversion of Control) ve AOP (Aspect-Oriented Programming) alanında devrim yapmış olsa da, production-ready bir uygulama ayağa kaldırmak için onlarca karmaşık XML dosyası veya `@Configuration` sınıfları yazmayı gerektiriyordu (Boilerplate Configuration Hell).\n\nAyrıca harici bir uygulama sunucusu (Standalone Tomcat, WebLogic, WildFly) kurmak, `.war` paketi oluşturmak ve dağıtım süreçlerini yönetmek geliştirici verimliliğini ciddi ölçüde düşürüyordu.\n\n### Spring Boot'un Çözüm Getirdiği 4 Temel Problem:\n1. **Karmaşık Bağımlılık Yönetimi**: Birbiriyle uyumsuz versiyonlar (Jar Hell) yerine **BOM (Bill of Materials)** ve `spring-boot-starter-*` paketleri.\n2. **Boilerplate Konfigürasyon**: Elle yüzlerce satır Bean tanımlamak yerine **Akıllı Auto-Configuration**.\n3. **Dağıtım Zahmeti**: Harici sunucu yerine tek komutla (`java -jar`) çalışan **Gömülü (Embedded) Web Sunucusu** (Tomcat, Jetty, Undertow).\n4. **Gözlemlenebilirlik Eksikliği**: Sistem sağlık kontrolü ve metrikler için yerleşik **Spring Boot Actuator**.",codeSnippets:[{title:"Spring Boot 3.3+ pom.xml Standart Yapılandırması",language:"xml",filename:"pom.xml",description:"spring-boot-starter-parent sayesinde versiyonlar tek merkezden güvenle yönetilir.",code:`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    
    <!-- Spring Boot Parent BOM: 200+ kütüphanenin uyumlu versiyonlarını sağlar -->
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.3.4</version>
        <relativePath/>
    </parent>
    
    <groupId>com.example</groupId>
    <artifactId>enterprise-api</artifactId>
    <version>1.0.0-SNAPSHOT</version>
    
    <properties>
        <java.version>21</java.version>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>
    
    <dependencies>
        <!-- REST API, MVC ve Gömülü Tomcat (Port 8080) -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <!-- Üretim ortamı sağlık izleme ve metrikleri -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
        
        <!-- JUnit 5, Mockito ve AssertJ test kütüphaneleri -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <!-- Çalıştırılabilir (Executable / Fat JAR) oluşturan Maven Plugini -->
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>`}],notes:["Spring Boot 3.0+ ile birlikte minimum Java sürümü Java 17 olmuştur. Java 21 LTS, Virtual Threads desteği için şiddetle tavsiye edilir.","Jakarta EE 10 standartlarına geçildiğinden dolayı `javax.servlet` ve `javax.persistence` gibi paketler `jakarta.servlet` ve `jakarta.persistence` olarak değiştirilmiştir."]},{id:"auto-configuration-internals",title:"2. Auto-Configuration Mekanizması Nasıl Çalışır?",content:'Spring Boot uygulamasını başlatan `@SpringBootApplication` anotasyonu aslında şu 3 anotasyonun birleşimidir:\n```\n@SpringBootApplication = @SpringBootConfiguration + @EnableAutoConfiguration + @ComponentScan\n```\n\n### Auto-Configuration Yüklenme Süreci:\n1. Spring Boot başlatıldığında classpath altındaki `META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports` dosyalarını tarar.\n2. Bu dosyada kayıtlı 150+ konfigürasyon sınıfı (**Auto-Configuration Classes**) sırayla değerlendirilir.\n3. Her konfigürasyon sınıfı üzerinde **Koşullu Anotasyonlar (@Conditional...)** bulunur.\n\n### En Çok Kullanılan Koşullu Anotasyonlar (Conditional Annotations):\n| Anotasyon | Çalışma Kuralı |\n|---|---|\n| `@ConditionalOnClass(DataSource.class)` | Classpath\'te DataSource sınıfı varsa devreye girer |\n| `@ConditionalOnMissingBean(ObjectMapper.class)` | Geliştirici kendi ObjectMapper bean\'ini tanımlamadıysa varsayılanı üretir |\n| `@ConditionalOnProperty(name="feature.x", havingValue="true")` | application.yml dosyasında ilgili ayar "true" ise çalışır |\n| `@ConditionalOnWebApplication` | Uygulama bir web uygulaması olarak ayağa kalkıyorsa devreye girer |',codeSnippets:[{title:"Örnek Bir Auto-Configuration Sınıfı Anatomisi",language:"java",filename:"JacksonAutoConfiguration.java (Basitleştirilmiş)",description:"Spring Boot'un Jackson ObjectMapper'ı otomatik olarak nasıl oluşturduğunun gerçek mantığı.",code:`package org.springframework.boot.autoconfigure.jackson;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Configuration(proxyBeanMethods = false)
@ConditionalOnClass(ObjectMapper.class) // Classpath'te Jackson kütüphanesi var mı?
public class JacksonAutoConfiguration {

    @Bean
    @Primary
    @ConditionalOnMissingBean // Eğer siz kendiniz @Bean ObjectMapper tanımlamadıysanız bu çalışır!
    public ObjectMapper jacksonObjectMapper() {
        ObjectMapper mapper = new ObjectMapper();
        // Varsayılan ISO-8601 tarih formatları ve JavaTimeModule ayarlanır
        return mapper;
    }
}`}],tips:['Hangi bean\'lerin neden ayağa kalktığını veya neden elendiğini görmek için `application.yml` dosyasına `debug: true` ekleyin. Konsolda "CONDITIONS EVALUATION REPORT" çıktısı listelenecektir.']}],bestPractices:["Ana Application sınıfını projenin en kök paketine koyun (örn: `com.company.project.Application`). Bu sayede `@ComponentScan` altındaki tüm `@Service`, `@Repository`, `@Controller` sınıflarını otomatik bulur.","Kendi özel Bean'lerinizi oluştururken `@ConditionalOnMissingBean` kullanarak esnek mimariler tasarlayın.","Gereksiz starter bağımlılıkları eklemekten kaçının; her starter classpath'e ek kütüphane ekler ve başlangıç süresini uzatabilir."],commonPitfalls:["Application sınıfını bir alt pakete yerleştirip üst veya yan paketlerdeki Bean'lerin Spring tarafından bulunamaması (NoSuchBeanDefinitionException).","Spring Boot 3.x projelerinde eski `javax.*` paketlerini import etmeye çalışarak derleme hatası almak."],keyTakeaways:["Spring Boot = Spring Framework + Gömülü Sunucu + Auto-Configuration + Starters.","Convention over Configuration: Ayarları sadece varsayılanı değiştirmek istediğinizde yaparsınız.","Java 21 ve Jakarta EE 10 güncel kurumsal standardıdır."]},{id:"module-2-ioc-di-beans",number:2,title:"IoC, Dependency Injection & Bean Yaşam Döngüsü",subtitle:"Inversion of Control, Constructor Injection standardı, Bean Kapsamları (Scopes) ve AOP Proxy mekanizması",icon:"Cpu",category:"Çekirdek Kavramlar",difficulty:"Başlangıç",durationMinutes:40,overview:"Spring'in kalbi olan IoC Container (ApplicationContext), nesnelerin yaşam döngüsünü ve bağımlılıklarını yönetir. Bu bölümde tight coupling probleminden kurtulmayı, neden Field Injection'ın terk edildiğini, Constructor Injection'ın neden altın kural olduğunu ve Bean yaşam döngüsünün aşamalarını öğreneceksiniz.",sections:[{id:"tight-coupling-vs-di",title:"1. Sıkı Bağımlılık (Tight Coupling) vs Dependency Injection",content:"Geleneksel nesne yönelimli programlamada bir sınıf, ihtiyaç duyduğu nesneleri `new` anahtar kelimesi ile üretir:\n```java\npublic class OrderService {\n    private EmailNotificationService notificationService = new EmailNotificationService();\n}\n```\nBu tasarımda `OrderService` doğrudan `EmailNotificationService` sınıfının somut implementasyonuna bağımlıdır. SMS veya Push bildirimine geçmek istediğinizde veya birim test yazarken `notificationService`'i mocklamak imkansız hale gelir.\n\n### Inversion of Control (IoC) ve Dependency Injection (DI):\n- **Inversion of Control (Kontrolün Tersine Çevrilmesi)**: Nesne oluşturma, yapılandırma ve yaşam döngüsü sorumluluğunun geliştiriciden alınıp Spring IoC Container'a (`ApplicationContext`) verilmesidir.\n- **Dependency Injection (Bağımlılık Enjeksiyonu)**: Bir nesnenin bağımlılıklarının dışarıdan (container tarafından) sağlanmasıdır.",codeSnippets:[{title:"Constructor Injection ile Temiz ve Güvenli Tasarım",language:"java",filename:"OrderService.java",description:"Lombok @RequiredArgsConstructor ile veya açık constructor ile immutable bağımlılık enjeksiyonu.",code:`package com.example.mastery.service;

import com.example.mastery.repository.OrderRepository;
import com.example.mastery.service.notification.NotificationService;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    // Bağımlılıklar final olarak tanımlanır (Thread-safe & Immutable)
    private final OrderRepository orderRepository;
    private final NotificationService notificationService;

    // Spring 4.3+ ile sınıfta tek constructor varsa @Autowired yazmaya gerek yoktur!
    public OrderService(OrderRepository orderRepository, NotificationService notificationService) {
        this.orderRepository = orderRepository;
        this.notificationService = notificationService;
    }

    public void processOrder(Long orderId) {
        // İş mantığı işletilir...
    }
}`}]},{id:"why-field-injection-is-evil",title:"2. Neden Field Injection (@Autowired private ...) Kullanılmamalıdır?",content:"`@Autowired private UserRepository repo;` (Field Injection) ilk bakışta pratik görünse de kurumsal projelerde yasaklanmış bir anti-pattern'dır.\n\n### Field Injection'ın 4 Büyük Tehlikesi:\n1. **Birim Testleri (Unit Testing) İmkansızlaştırır**: Spring Context olmadan saf Java ile (`new OrderService()`) nesne oluşturduğunuzda field'lar `null` kalır; mecburen yavaş çalışan Spring runner'lar veya kirli Java Reflection kullanmak zorunda kalırsınız.\n2. **Immutability (Değişmezlik) İhlali**: Field'lar `final` yapılamaz. Nesne oluştuktan sonra referansları değiştirilebilir.\n3. **Gizli Bağımlılıklar (Hidden Dependencies)**: Bir sınıfa 15 tane field injection yapıldığında \"Single Responsibility\" ilkesinin çiğnendiği constructor'daki gibi göze çarpmaz.\n4. **Dairesel Bağımlılıkları (Circular Dependencies) Maskeler**: Field injection çalışma anına kadar dairesel bağımlılık hatalarını gizler.",notes:["Constructor Injection kullandığınızda eksik bağımlılıkla nesne oluşturulması derleme anında (Compile Time) engellenir ve NullPointerException riski sıfıra iner."]},{id:"bean-scopes-and-lifecycle",title:"3. Bean Kapsamları (Scopes) ve Yaşam Döngüsü",content:`### Spring Bean Kapsamları:
1. **Singleton (Varsayılan)**: ApplicationContext içinde tek bir instance bulunur. Tüm istekler bu instance'ı paylaşır. (Stateless olmalıdır!).
2. **Prototype**: Her enjeksiyonda veya \`getBean()\` çağrısında yepyeni bir instance üretilir.
3. **Request (Web)**: Her HTTP isteği için bir nesne üretilir ve istek bittiğinde yok edilir.
4. **Session (Web)**: Kullanıcının HTTP Session süresi boyunca yaşar.

### Bean Yaşam Döngüsü (Lifecycle Hook'lar):
\`\`\`
[Instantiation] -> [Populate Properties] -> [BeanNameAware / BeanFactoryAware]
       -> [BeanPostProcessor: postProcessBeforeInitialization]
       -> [@PostConstruct Metodu]
       -> [InitializingBean: afterPropertiesSet]
       -> [Custom init-method]
       -> [BeanPostProcessor: postProcessAfterInitialization] (AOP Proxy burada üretilir!)
       -> [BEAN KULLANIMA HAZIR]
       -> [@PreDestroy Metodu] -> [DisposableBean: destroy]
\`\`\``,codeSnippets:[{title:"@PostConstruct ve @PreDestroy Kullanımı",language:"java",filename:"DatabaseWarmupService.java",description:"Bean oluştuğunda önbelleği ısıtma ve kapanırken kaynakları serbest bırakma.",code:`package com.example.mastery.service;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class DatabaseWarmupService {

    private static final Logger log = LoggerFactory.getLogger(DatabaseWarmupService.class);

    @PostConstruct
    public void onInit() {
        log.info(">> Spring Bean hazırlandı. Kritik veritabanı önbellekleri ısıtılıyor...");
    }

    @PreDestroy
    public void onDestroy() {
        log.info(">> Uygulama sonlandırılıyor. Açık socket ve dosya kilitleri temizleniyor...");
    }
}`}]}],bestPractices:["Tüm bağımlılıkları Constructor Injection ile ve `final` olarak tanımlayın.","Spring Bean'lerini Stateless (durumsuz) tasarlayın; Singleton bir servise kullanıcıya özel değişkenler koymayın.",'Birden fazla implementasyon olan durumlarda `@Qualifier("specificBeanName")` veya `@Primary` kullanın.'],commonPitfalls:["Aynı sınıf içindeki `@Async` veya `@Transactional` metotları çağırmak (Self-invocation): Spring dinamik proxy mekanizması aynı sınıf içi çağrılarda devreye girmez!","Singleton bir bean içine Prototype bir bean inject edip, her metot çağrısında Prototype nesnenin yeniden oluşacağını varsaymak."],keyTakeaways:["IoC Container nesneleri oluşturur, birbirine bağlar ve yönetir.","Constructor Injection kurumsal Java'da tek kabul gören standarttır.","AOP Proxy nesneleri Bean yaşam döngüsünün sonunda üretilir."]},{id:"module-3-spring-mvc-rest",number:3,title:"Spring MVC & Modern REST API Tasarımı",subtitle:"HTTP Metotları, DTO Pattern, Jakarta Validation, @RestControllerAdvice ve RFC 7807",icon:"Globe",category:"Web & API",difficulty:"Orta",durationMinutes:45,overview:"Kurumsal seviyede, yüksek performanslı ve güvenli RESTful API'ler tasarlayın. DTO pattern ile veri soyutlama, Jakarta Bean Validation kuralları, RFC 7807 standartlarına uygun merkezi hata yönetimi ve Content Negotiation.",sections:[{id:"rest-fundamentals",title:"1. RESTful API Prensipleri & HTTP Durum Kodları",content:"REST (Representational State Transfer), istemci ile sunucu arasında durumsuz (stateless) iletişim kuran standart bir mimari stildir.\n\n### Doğru HTTP Metotları ve Anlamları:\n- **GET /api/v1/customers**: Müşterileri listele (`200 OK`)\n- **GET /api/v1/customers/{id}**: Tekil müşteri getir (`200 OK` veya `404 Not Found`)\n- **POST /api/v1/customers**: Yeni müşteri oluştur (`201 Created` + `Location` Header)\n- **PUT /api/v1/customers/{id}**: Müşteriyi bütünüyle güncelle (`200 OK` veya `204 No Content`)\n- **PATCH /api/v1/customers/{id}**: Müşterinin belirli alanlarını kısmi güncelle (`200 OK`)\n- **DELETE /api/v1/customers/{id}**: Müşteriyi sil (`204 No Content`)",codeSnippets:[{title:"Modern REST Controller Mimarisi",language:"java",filename:"CustomerController.java",description:"Pageable, @Valid, ResponseEntity ve Location header ile tam uyumlu controller.",code:`package com.example.mastery.controller;

import com.example.mastery.dto.CreateCustomerRequest;
import com.example.mastery.dto.CustomerResponse;
import com.example.mastery.service.CustomerService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/api/v1/customers")
public class CustomerController {

    private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping
    public ResponseEntity<Page<CustomerResponse>> getCustomers(
            @PageableDefault(size = 20, sort = "createdAt") Pageable pageable) {
        return ResponseEntity.ok(customerService.findAll(pageable));
    }

    @GetMapping("/{id}")
    public ResponseEntity<CustomerResponse> getCustomerById(@PathVariable Long id) {
        return ResponseEntity.ok(customerService.findById(id));
    }

    @PostMapping
    public ResponseEntity<CustomerResponse> createCustomer(@Valid @RequestBody CreateCustomerRequest request) {
        CustomerResponse created = customerService.create(request);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(created.id())
                .toUri();
        return ResponseEntity.created(location).body(created);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable Long id) {
        customerService.delete(id);
        return ResponseEntity.noContent().build();
    }
}`}]},{id:"dto-and-validation-deep",title:"2. DTO Pattern & Jakarta Bean Validation (@Valid)",content:"JPA Entity sınıflarını (Database Entities) doğrudan Controller'a parametre vermek veya dışarı JSON olarak döndürmek **Anti-Pattern**'dir.\n\n### Neden DTO Kullanılmalıdır?\n1. **Güvenlik (Over-Posting Attack)**: Kötü niyetli kullanıcı JSON içinde `isAdmin=true` veya `balance=99999` göndererek veritabanını manipüle edebilir.\n2. **Serileştirme Sorunları**: Hibernate Lazy ilişkileri döngüye girip (`JsonBackReference` yoksa) `StackOverflowError` fırlatır.\n3. **Şema Ayrımı**: Veritabanı sütun isimleri API kontratını bozmadan değiştirilebilir.",codeSnippets:[{title:"Java 21 Record ile Tip Güvenli Validasyonlu DTO",language:"java",filename:"CreateCustomerRequest.java",description:"Jakarta Bean Validation anotasyonları ile kapsamlı girdi denetimi.",code:`package com.example.mastery.dto;

import jakarta.validation.constraints.*;
import java.math.BigDecimal;

public record CreateCustomerRequest(
    @NotBlank(message = "İsim alanı boş bırakılamaz")
    @Size(min = 2, max = 50, message = "İsim 2 ile 50 karakter arasında olmalıdır")
    String firstName,

    @NotBlank(message = "Soyisim alanı zorunludur")
    String lastName,

    @NotBlank(message = "E-posta adresi zorunludur")
    @Email(message = "Geçerli bir e-posta formatı giriniz")
    String email,

    @NotNull(message = "Kredi limiti belirtilmelidir")
    @PositiveOrZero(message = "Kredi limiti negatif olamaz")
    BigDecimal creditLimit
) {}`}]},{id:"centralized-exception-handling",title:"3. Merkezi Hata Yönetimi & RFC 7807 ProblemDetails",content:"Spring Boot 3, HTTP API hata yanıtları için uluslararası IETF standardı olan **RFC 7807 (Problem Details for HTTP APIs)** yapısını yerleşik olarak destekler. \n\n`@RestControllerAdvice` sınıfı, tüm controller'lardan fırlatılan hataları yakalar ve standartlaştırılmış JSON formatına dönüştürür.",codeSnippets:[{title:"GlobalExceptionHandler & ProblemDetail Standardı",language:"java",filename:"GlobalExceptionHandler.java",description:"Tüm sistem hatalarını RFC 7807 uyumlu JSON olarak döndüren merkezi sınıf.",code:`package com.example.mastery.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.net.URI;
import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ProblemDetail handleNotFound(ResourceNotFoundException ex) {
        ProblemDetail problem = ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, ex.getMessage());
        problem.setTitle("Kayıt Bulunamadı");
        problem.setType(URI.create("https://api.example.com/errors/not-found"));
        problem.setProperty("timestamp", Instant.now());
        return problem;
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ProblemDetail handleValidationErrors(MethodArgumentNotValidException ex) {
        ProblemDetail problem = ProblemDetail.forStatusAndDetail(HttpStatus.BAD_REQUEST, "Girdi doğrulama başarısız");
        problem.setTitle("Geçersiz İstek Verisi");
        
        Map<String, String> invalidFields = new HashMap<>();
        for (FieldError fieldError : ex.getBindingResult().getFieldErrors()) {
            invalidFields.put(fieldError.getField(), fieldError.getDefaultMessage());
        }
        problem.setProperty("invalidParams", invalidFields);
        problem.setProperty("timestamp", Instant.now());
        return problem;
    }
}`}]}],bestPractices:["URL'lerde fiil yerine çoğul isim kullanın: `/api/v1/customers` DOĞRU, `/api/v1/getCustomers` YANLIŞTIR.","API sürümlemesini (Versioning) URL yoluyla yapın: `/api/v1/...`, `/api/v2/...`.","Entity sınıflarını doğrudan dış dünyaya açmayın; Java 21 Record DTO'lar kullanın."],commonPitfalls:["`@RequestBody` önüne `@Valid` koymayı unutarak validation denetimlerinin çalışmaması.",'Her hata için HTTP 200 dönüp JSON body içerisine `status: "error"` yazmak (REST standartlarını ihlal eder!).'],keyTakeaways:["Spring MVC HTTP isteklerini JSON/DTO nesnelerine dönüştürür.","RFC 7807 ProblemDetails endüstri standardı hata formatıdır.","@RestControllerAdvice ile temiz, ayrık hata mimarisi kurulur."]},{id:"module-4-spring-data-jpa",number:4,title:"Spring Data JPA & Hibernate Veritabanı Yönetimi",subtitle:"Entity İlişkileri, N+1 Problemi ve JOIN FETCH Çözümü, Persistence Context, Sayfalama ve Auditing",icon:"Database",category:"Veritabanı & ORM",difficulty:"Orta",durationMinutes:50,overview:"Hibernate ORM ve Spring Data JPA mimarisinin derinliklerine inin. Entity ilişkileri (@OneToMany, @ManyToOne), FetchType stratejileri, First-level Cache (Persistence Context), N+1 sorgu problemi ve çözümleri, dinamik sorgular ve JPA Auditing.",sections:[{id:"orm-and-persistence-context",title:"1. JPA, Hibernate ve Persistence Context (First-Level Cache)",content:"JPA (Jakarta Persistence API) sadece bir arayüz/spesifikasyondur; Hibernate ise bunun en popüler somut implementasyonudur.\n\n### Persistence Context Nedir?\nBir veritabanı transaction'ı başladığında Hibernate bir **Persistence Context** (Birinci Seviye Önbellek) açar.\n- `entityManager.find(User.class, 1L)` çağrıldığında Hibernate önce Persistence Context'e bakar; varsa veritabanına sorgu atmaz.\n- **Dirty Checking (Otomatik Güncelleme)**: Bir entity nesnesinin setter metodunu çağırdığınızda, transaction bittiğinde (Commit anında) Hibernate entity'nin değiştiğini anlar ve otomatik `UPDATE` SQL'i fırlatır! (`repository.save()` çağırmak bile gerekmez!).",codeSnippets:[{title:"Dirty Checking Mekanizması",language:"java",filename:"UserService.java",description:"@Transactional metot içinde nesne güncellendiğinde save() çağırmaya gerek yoktur.",code:`@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Transactional
    public void updateUserEmail(Long userId, String newEmail) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new NotFoundException("Kullanıcı bulunamadı"));
        
        // Sadece alan güncellenir; Hibernate Transaction sonunda değişikliği fark edip UPDATE sorgusu atar!
        user.setEmail(newEmail);
        // userRepository.save(user); // GEREKSIZDIR!
    }
}`}]},{id:"jpa-relationships-best-practices",title:"2. Entity İlişkileri (@OneToMany, @ManyToOne) ve Lazy Loading",content:"### İlişki Kuralları:\n1. **@ManyToOne**: En yaygın ve performanslı ilişkidir. Varsayılanı `EAGER`'dır ancak MUTLAKA `fetch = FetchType.LAZY` olarak ezilmelidir!\n2. **@OneToMany**: Çift yönlü ilişkide `mappedBy` ile yabancı anahtarın (Foreign Key) sahibi belirtilmelidir.\n3. **Yardımcı Metotlar (Helper Methods)**: Çift yönlü ilişkilerde Java tarafındaki tutarlılığı korumak için `addItem()` ve `removeItem()` yazılmalıdır.",codeSnippets:[{title:"Doğru Yapılandırılmış Çift Yönlü JPA İlişkisi",language:"java",filename:"Invoice.java & InvoiceItem.java",description:"Lazy fetch, CascadeType.ALL, orphanRemoval ve Helper metotları.",code:`package com.example.mastery.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "invoices")
public class Invoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String invoiceNumber;

    @OneToMany(
        mappedBy = "invoice",
        cascade = CascadeType.ALL,
        orphanRemoval = true,
        fetch = FetchType.LAZY
    )
    private List<InvoiceItem> items = new ArrayList<>();

    // Yardımcı Metot (Helper Method)
    public void addItem(InvoiceItem item) {
        items.add(item);
        item.setInvoice(this);
    }

    public void removeItem(InvoiceItem item) {
        items.remove(item);
        item.setInvoice(null);
    }
}`}]},{id:"n-plus-one-deep-dive",title:"3. N+1 Sorgu Problemi ve Kesin Çözüm Yolları",content:"### N+1 Problemi Nedir?\n100 adet Faturayı (`Invoice`) listelemek istediğinizde:\n- 1 adet `SELECT * FROM invoices` sorgusu çalışır.\n- Eğer her faturanın `items` listesine erişirseniz ve ilişki `LAZY` ise, Hibernate her fatura için ayrı ayrı `SELECT * FROM invoice_items WHERE invoice_id = ?` sorgusu atar (`100 sorgu`).\n- Toplam: **1 + 100 = 101 sorgu!** Sistem çöker.\n\n### Çözüm Yolları:\n1. **JOIN FETCH**: JPQL ile tek seferde SQL `INNER/LEFT JOIN` atarak ana ve ilişkili nesneleri tek sorguda getirmek.\n2. **@EntityGraph**: Metot üzerinde yüklenecek ilişkileri declarative belirtmek.\n3. **Batch Fetching**: `spring.jpa.properties.hibernate.default_batch_fetch_size: 30` ile IN (?, ?, ...) kullanarak sorgu sayısını 100'den 4'e düşürmek.",codeSnippets:[{title:"N+1 Problemini Çözen Repository Sorguları",language:"java",filename:"InvoiceRepository.java",description:"JOIN FETCH ve @EntityGraph ile tek sorguda ilişkili nesneleri çekme.",code:`package com.example.mastery.repository;

import com.example.mastery.entity.Invoice;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface InvoiceRepository extends JpaRepository<Invoice, Long> {

    // Çözüm 1: JPQL JOIN FETCH ile tek SQL sorgusu
    @Query("SELECT DISTINCT inv FROM Invoice inv LEFT JOIN FETCH inv.items WHERE inv.id = :id")
    Optional<Invoice> findByIdWithItems(@Param("id") Long id);

    // Çözüm 2: @EntityGraph ile EAGER çekme talimatı
    @EntityGraph(attributePaths = {"items"})
    @Query("SELECT inv FROM Invoice inv")
    List<Invoice> findAllWithItemsGraph();
}`}]}],bestPractices:["İstisnasız tüm ilişkilerde (@OneToMany, @ManyToOne, @OneToOne, @ManyToMany) `fetch = FetchType.LAZY` kullanın.","JPA Entity sınıflarında Lombok `@Data` ve `@ToString` kullanmayın; dairesel çağrı (Circular Reference) ile `StackOverflowError` oluşturur.","`application.yml` içinde `spring.jpa.open-in-view: false` yapın (OSIV anti-pattern'ını kapatın)."],commonPitfalls:['Sayfalama (`Pageable`) yaparken `JOIN FETCH` kullanarak bellek uyarısı ("applying in memory") almak.',"`@Transactional` anotasyonunu yanlış paketten (`jakarta.transaction` yerine `org.springframework.transaction.annotation.Transactional`) import etmemek veya private metotta kullanmak."],keyTakeaways:["Hibernate Persistence Context nesnelerin durumunu izler ve otomatik günceller.","N+1 sorgu problemi kurumsal uygulamalarda en sık rastlanan performans felaketidir; JOIN FETCH ile çözülür.","Open Session in View (OSIV) üretim ortamlarında kapatılmalıdır."]},{id:"module-5-spring-security-jwt",number:5,title:"Spring Security 6 & JWT ile Güvenlik Mimarisi",subtitle:"SecurityFilterChain, Stateless Authentication, Rol/Yetki Yönetimi, BCrypt ve JJWT",icon:"ShieldCheck",category:"Güvenlik",difficulty:"İleri",durationMinutes:55,overview:"Spring Boot 3.x ve Spring Security 6 ile modern, güvenli ve stateless REST API kimlik doğrulama mimarisi kurun. Kaldırılan WebSecurityConfigurerAdapter yerine gelen SecurityFilterChain, OncePerRequestFilter JWT token filtresi, BCrypt şifreleme ve metot düzeyinde yetkilendirme (@PreAuthorize).",sections:[{id:"spring-security-6-architecture",title:"1. Spring Security 6 & SecurityFilterChain Mimarisi",content:`Spring Security, gelen HTTP isteklerini karşılayan bir **Servlet Filtre Zinciri (FilterChain)** üzerinden çalışır.

Spring Security 6 ile birlikte eski konfigürasyon yöntemleri tamamen kaldırılmış, **Fonksiyonel Lambda DSL** tabanlı \`SecurityFilterChain\` bean tanımı zorunlu kılınmıştır.

### İstek Doğrulama Akışı:
\`\`\`
HTTP Request -> [CorsFilter] -> [CsrfFilter] -> [JwtAuthenticationFilter] 
     -> [UsernamePasswordAuthenticationFilter] -> [SecurityContextHolder] 
     -> [DispatcherServlet] -> [Controller]
\`\`\``,codeSnippets:[{title:"Spring Security 6 Güvenlik Konfigürasyonu",language:"java",filename:"SecurityConfig.java",description:"Stateless session, CORS, CSRF devre dışı bırakma ve JWT filtresi entegrasyonu.",code:`package com.example.mastery.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity // @PreAuthorize("hasRole('ADMIN')") için zorunludur
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final UserDetailsService userDetailsService;

    public SecurityConfig(JwtAuthenticationFilter jwtAuthFilter, UserDetailsService userDetailsService) {
        this.jwtAuthFilter = jwtAuthFilter;
        this.userDetailsService = userDetailsService;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(AbstractHttpConfigurer::disable) // REST API stateless olduğu için CSRF kapatılır
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/v1/auth/**", "/v3/api-docs/**", "/swagger-ui/**").permitAll()
                .requestMatchers(HttpMethod.GET, "/api/v1/products/**").permitAll()
                .requestMatchers("/api/v1/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .authenticationProvider(authenticationProvider())
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12); // Log rounds = 12 (Güçlü şifreleme)
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}`}]},{id:"jwt-service-and-filter",title:"2. JWT (JSON Web Token) Filtresi ve Yetkilendirme",content:"JWT filtresi (`OncePerRequestFilter`), gelen her HTTP isteğindeki `Authorization: Bearer <token>` başlığını okur. Token'ın imzasını ve geçerlilik süresini doğrular. Doğrulama başarılıysa kullanıcıyı `SecurityContextHolder` içine yerleştirir.",codeSnippets:[{title:"JwtAuthenticationFilter Uygulaması",language:"java",filename:"JwtAuthenticationFilter.java",description:"Gelen HTTP isteklerini filtreleyip geçerli token varsa SecurityContextHolder oturumunu kurar.",code:`package com.example.mastery.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;

    public JwtAuthenticationFilter(JwtService jwtService, UserDetailsService userDetailsService) {
        this.jwtService = jwtService;
        this.userDetailsService = userDetailsService;
    }

    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain
    ) throws ServletException, IOException {
        final String authHeader = request.getHeader("Authorization");

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        final String jwt = authHeader.substring(7);
        final String userEmail = jwtService.extractUsername(jwt);

        if (userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(userEmail);

            if (jwtService.isTokenValid(jwt, userDetails)) {
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        userDetails,
                        null,
                        userDetails.getAuthorities()
                );
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }
        filterChain.doFilter(request, response);
    }
}`}]}],bestPractices:["Şifreleri veritabanına kaydederken ASLA düz metin veya MD5 kullanmayın; `BCryptPasswordEncoder` kullanın.","REST API mimarisinde session yönetimini `SessionCreationPolicy.STATELESS` yapın.","JWT Secret anahtarını kaynak koda gömmeyin; ortam değişkeni (`${JWT_SECRET}`) kullanın."],commonPitfalls:['Spring Security 6\'da rol kontrollerinde `hasRole("ROLE_ADMIN")` yazmak yerine `hasRole("ADMIN")` veya `hasAuthority("ROLE_ADMIN")` yazılmalıdır.',"`@EnableMethodSecurity` eklemeyi unutarak controller metotlarındaki `@PreAuthorize` kontrollerinin atlanması."],keyTakeaways:["Spring Security FilterChain üzerinde çalışır.","SecurityFilterChain bean'i modern Spring Boot 3 standardıdır.","Stateless JWT mimarisi yüksek ölçeklenebilirlik sağlar."]},{id:"module-6-config-profiles-actuator",number:6,title:"Konfigürasyon, Profiller & Spring Boot Actuator",subtitle:"application.yml, @ConfigurationProperties, Ortam Profilleri ve Gözlemlenebilirlik",icon:"Sliders",category:"Konfigürasyon & DevOps",difficulty:"Orta",durationMinutes:35,overview:"Farklı çalışma ortamları (dev, test, prod) için profil yönetimi, tip güvenli @ConfigurationProperties sınıf kullanımı ve üretimde sistem sağlığını izlemek için Spring Boot Actuator.",sections:[{id:"type-safe-config",title:"1. Tip Güvenli Konfigürasyon: @ConfigurationProperties",content:'Uygulama ayarlarını tek tek `@Value("${app.jwt.secret}")` ile almak yerine, ilgili ayarları gruplayan tip güvenli (Type-safe) Java Record veya sınıfları kullanmak en iyi pratiktir.',codeSnippets:[{title:"Tip Güvenli Properties Sınıfı (Java Record)",language:"java",filename:"AppProperties.java & application.yml",description:"Doğrulama (Validation) destekli tip güvenli konfigürasyon kaydı.",code:`// AppProperties.java
package com.example.mastery.config;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.validation.annotation.Validated;

@Validated
@ConfigurationProperties(prefix = "app")
public record AppProperties(
    @NotBlank String name,
    JwtConfig jwt,
    MailConfig mail
) {
    public record JwtConfig(
        @NotBlank String secret,
        @Positive long expirationMs
    ) {}

    public record MailConfig(
        String host,
        int port,
        boolean enableTls
    ) {}
}`}]},{id:"actuator-and-monitoring",title:"2. Spring Boot Actuator ile Gözlemlenebilirlik",content:"`spring-boot-starter-actuator` bağımlılığı; uygulamanın canlılık (liveness), hazırlık (readiness), bellek kullanımı, CPU durumu, HTTP trace ve log seviyelerini çalışma anında yönetme imkanı tanır.",codeSnippets:[{title:"Actuator Endpoint Yapılandırması",language:"yaml",filename:"application.yml",description:"Health, info ve prometheus metriklerini güvenli şekilde dışa açma.",code:`management:
  endpoints:
    web:
      exposure:
        include: health, info, metrics, prometheus
      base-path: /actuator
  endpoint:
    health:
      show-details: when_authorized
      probes:
        enabled: true # Kubernetes Liveness ve Readiness probları için`}]}],bestPractices:["`application.properties` yerine hiyerarşik `application.yml` tercih edin.","Prod ortamında hassas actuator uçlarını (`env`, `heapdump`, `beans`) halka açık internete asla açmayın.","Ortam bazlı ayarları `application-dev.yml`, `application-prod.yml` olarak ayırın ve `SPRING_PROFILES_ACTIVE=prod` ile tetikleyin."],commonPitfalls:["Konfigürasyon dosyalarına şifre ve API key'leri düz metin olarak yazıp GitHub'a pushlamak."],keyTakeaways:["@ConfigurationProperties tip güvenliği ve validasyon sağlar.","Spring Profiles ile çoklu ortam yönetimi kusursuz çalışır.","Actuator üretim ortamının olmazsa olmaz izleme aracıdır."]},{id:"module-7-async-scheduling-events",number:7,title:"Asenkron İşlemler, Scheduling & Event Mimarisi",subtitle:"@Async, TaskExecutor, @Scheduled Cron İşleri ve ApplicationEvent Yapısı",icon:"Zap",category:"İleri Seviye Özellikler",difficulty:"Orta",durationMinutes:35,overview:"HTTP isteklerini bloklamadan arka planda e-posta göndermek veya ağır hesaplamalar yapmak için @Async, periyodik görevler için @Scheduled ve gevşek bağlı (loosely coupled) mimariler için Spring Application Events.",sections:[{id:"async-processing",title:"1. @Async ve Özel ThreadPoolTaskExecutor",content:"İstemciye hızlı yanıt dönmek ve uzun süren işlemleri arka planda yürütmek için `@Async` anotasyonu kullanılır. Özel bir **ThreadPoolTaskExecutor** tanımlanmalıdır.",codeSnippets:[{title:"Asenkron Yapılandırma ve Servis",language:"java",filename:"AsyncConfig.java",description:"Özel thread havuzu tanımlaması.",code:`package com.example.mastery.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import java.util.concurrent.Executor;

@Configuration
@EnableAsync
public class AsyncConfig {

    @Bean(name = "customTaskExecutor")
    public Executor taskExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(5);
        executor.setMaxPoolSize(20);
        executor.setQueueCapacity(100);
        executor.setThreadNamePrefix("AsyncThread-");
        executor.initialize();
        return executor;
    }
}`}]},{id:"application-events",title:"2. Spring Application Events ile Gevşek Bağlı Mimari",content:"Event mimarisinde `UserRegisteredEvent` fırlatılır ve ilgilenen dinleyiciler (`@EventListener` veya `@TransactionalEventListener`) bu olayı asenkron veya senkron işler.",codeSnippets:[{title:"Event Yayınlama ve Dinleme",language:"java",filename:"UserRegisteredEvent.java & Listener.java",description:"Spring Event Publisher ve dinleyicisi.",code:`// 1. Immutable Event Kaydı
public record UserRegisteredEvent(Long userId, String email) {}

// 2. Dinleyici (Listener)
@Component
public class UserNotificationListener {

    @Async
    @EventListener
    public void onUserRegistered(UserRegisteredEvent event) {
        System.out.println("Kullanıcıya bildirim gönderiliyor: " + event.email());
    }
}`}]}],bestPractices:["@Async metotların çalışabilmesi için metot mutlaka `public` olmalı ve sınıf dışından çağrılmalıdır.","Periyodik görevlerde (@Scheduled) çoklu sunucu varsa ShedLock kullanın."],commonPitfalls:["Aynı sınıf içindeki bir metodun diğer @Async metodu doğrudan çağırması (Proxy atlandığı için senkron çalışır!)."],keyTakeaways:["@EnableAsync ve ThreadPoolTaskExecutor ile arka plan işlemleri yapılır.","Spring Events sistem bileşenleri arasındaki bağımlılığı minimuma indirir."]},{id:"module-8-microservices-intro",number:8,title:"Microservices Mimarisi & Servisler Arası İletişim",subtitle:"Spring Cloud Gateway, Eureka Service Discovery, OpenFeign ve Resilience4j Circuit Breaker",icon:"Network",category:"Microservices",difficulty:"İleri",durationMinutes:45,overview:"Monolitik yapıdan mikroservis mimarisine geçiş, Spring Cloud ekosistemi, dinamik yönlendirme, servis keşfi ve hata toleransı sağlayan Circuit Breaker desenleri.",sections:[{id:"microservices-ecosystem",title:"1. Spring Cloud Bileşenleri",content:`Mikroservis mimarisinde bağımsız servislerin yönetimi için Spring Cloud şu çözümleri sunar:
- **API Gateway (Spring Cloud Gateway)**: Tek giriş noktası, routing, authentication ve rate limiting.
- **Service Discovery (Netflix Eureka)**: Servislerin dinamik IP/portlarını kaydetmesi.
- **Declarative REST Client (OpenFeign)**: Interface tabanlı HTTP istemcisi.
- **Circuit Breaker (Resilience4j)**: Bir servis çöktüğünde tüm sistemin kilitlenmesini engelleyen sigorta mekanizması.`,codeSnippets:[{title:"OpenFeign ve Resilience4j Circuit Breaker Örneği",language:"java",filename:"PaymentClient.java",description:"Ödeme servisine istek atan ve hata durumunda Fallback çalıştıran Feign Client.",code:`package com.example.mastery.client;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "payment-service")
public interface PaymentClient {

    @PostMapping("/api/v1/payments/process")
    @CircuitBreaker(name = "paymentService", fallbackMethod = "paymentFallback")
    PaymentResponse processPayment(@RequestBody PaymentRequest request);

    default PaymentResponse paymentFallback(PaymentRequest request, Throwable ex) {
        return new PaymentResponse("FAILED", "Ödeme servisi geçici olarak kullanım dışı. Lütfen tekrar deneyin.");
    }
}`}]}],bestPractices:["Mikroservisler arası senkron HTTP çağrılarını minimumda tutun; asenkron iletişim için Kafka veya RabbitMQ tercih edin.","Her mikroservisin kendi veritabanı olmalıdır (Database per Service pattern)."],commonPitfalls:['Gereksiz yere mikroservis mimarisine geçerek "Distributed Monolith" yaratmak.'],keyTakeaways:["Spring Cloud mikroservis altyapısını kurumsal düzeyde basitleştirir.","Resilience4j sigorta mekanizması ile sistemin çökmesini engeller."]},{id:"module-9-testing-strategies",number:9,title:"Test Stratejileri: JUnit 5, Mockito & MockMvc",subtitle:"Unit Test, Slice Testing (@WebMvcTest, @DataJpaTest) ve Entegrasyon Testleri",icon:"CheckCircle2",category:"Test & Kalite",difficulty:"Orta",durationMinutes:40,overview:"Yazılım kalitesinin ve sürdürülebilirliğinin temeli olan test piramidini uygulayın. Mockito ile birim testleri, @WebMvcTest ile hızlı Controller testleri ve @SpringBootTest ile tam entegrasyon testleri.",sections:[{id:"unit-testing-service-layer",title:"1. Servis Katmanında Unit Test & Mockito",content:"Birim testlerinde veritabanı veya ağ bağlantısı açılmaz. Test edilen sınıfın iş mantığı izole edilir, bağımlılıklar Mockito ile mocklanır.",codeSnippets:[{title:"JUnit 5 & Mockito ile Servis Birim Testi",language:"java",filename:"UserServiceTest.java",description:"Given-When-Then yaklaşımı ile birim test.",code:`package com.example.mastery.service;

import com.example.mastery.dto.UserResponse;
import com.example.mastery.entity.User;
import com.example.mastery.exception.ResourceNotFoundException;
import com.example.mastery.repository.UserRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Test
    @DisplayName("Var olan bir ID ile kullanıcı başarıyla getirilmelidir")
    void shouldReturnUserWhenUserExists() {
        Long userId = 1L;
        User mockUser = new User(userId, "Ahmet", "ahmet@example.com");
        when(userRepository.findById(userId)).thenReturn(Optional.of(mockUser));

        UserResponse response = userService.getUserById(userId);

        assertThat(response).isNotNull();
        assertThat(response.id()).isEqualTo(userId);
        assertThat(response.email()).isEqualTo("ahmet@example.com");
        verify(userRepository, times(1)).findById(userId);
    }
}`}]},{id:"slice-testing-webmvc",title:"2. Controller Katmanı için @WebMvcTest",content:"`@WebMvcTest` tüm Spring Context'i ayağa kaldırmaz; sadece Spring MVC altyapısını yükler. Bu sayede testler milisaniyeler içinde tamamlanır.",codeSnippets:[{title:"MockMvc ile API Uç Noktası Testi",language:"java",filename:"ProductControllerTest.java",description:"HTTP Status ve JSON yanıtı doğrulaması.",code:`package com.example.mastery.controller;

import com.example.mastery.dto.ProductResponse;
import com.example.mastery.service.ProductService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.math.BigDecimal;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(ProductController.class)
class ProductControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ProductService productService;

    @Test
    void shouldReturnProductById() throws Exception {
        ProductResponse mockProduct = new ProductResponse(1L, "Laptop", new BigDecimal("15000.00"), "SKU-100");
        when(productService.findById(1L)).thenReturn(mockProduct);

        mockMvc.perform(get("/api/v1/products/1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("Laptop"))
                .andExpect(jsonPath("$.price").value(15000.00));
    }
}`}]}],bestPractices:["Birim testlerinde `@SpringBootTest` kullanmayın; MockitoExtension tercih edin.","Test metot isimlerinde BDD yaklaşımını (`shouldReturn...When...`) kullanın."],commonPitfalls:["Test yazarken gerçek veritabanını çağırmak."],keyTakeaways:["Test Piramidi: Çok sayıda Unit Test, orta sayıda Slice Test, az sayıda Tam Entegrasyon Testi.","MockMvc ile HTTP katmanı hızlıca test edilir."]},{id:"module-10-production-docker-checklist",number:10,title:"Production Checklist, Docker & Deploy Stratejileri",subtitle:"Multi-stage Dockerfile, JVM Bellek Ayarları, Connection Pool ve Production Deployment",icon:"Server",category:"DevOps & Deploy",difficulty:"İleri",durationMinutes:35,overview:"Spring Boot uygulamanızı buluta ve üretim ortamına taşırken dikkat etmeniz gereken güvenlik, performans ve Docker paketleme adımları.",sections:[{id:"multi-stage-docker",title:"1. Modern Multi-Stage Dockerfile (Java 21)",content:"Multi-stage build ile önce Maven ile proje derlenir, ardından sadece JRE ve oluşan JAR dosyası minimum boyutlu bir Linux imajına (Alpine / Eclipse Temurin) aktarılır. İmaj boyutu 800MB'dan 150MB'a düşer.",codeSnippets:[{title:"Üretim Seviyesi Multi-Stage Dockerfile",language:"dockerfile",filename:"Dockerfile",description:"Root olmayan kullanıcı ile güvenli Docker imajı.",code:`# Aşama 1: Derleme
FROM maven:3.9.6-eclipse-temurin-21-alpine AS builder
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline -B
COPY src ./src
RUN mvn clean package -DskipTests

# Aşama 2: Çalıştırma İmajı
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# Root olmayan kullanıcı
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring

COPY --from=builder /app/target/*.jar app.jar

ENV JAVA_OPTS="-XX:+UseContainerSupport -XX:MaxRAMPercentage=75.0"

EXPOSE 8080
ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]`}]},{id:"production-checklist",title:"2. Üretime Çıkış (Production) Kontrol Listesi",content:"### Canlıya Çıkmadan Önce Kontrol Edin:\n1. **HikariCP Pool Boyutu**: `maximum-pool-size: 10-20` aralığında optimize edilmeli.\n2. **Graceful Shutdown**: `server.shutdown: graceful` ile gelen isteklerin yarım kalmadan bitmesi sağlanmalı.\n3. **Log Formatı**: Üretimde Logstash JSON formatı veya structured logging kullanılmalı.\n4. **Hata Maskeleme**: `server.error.include-stacktrace: never` ile hassas kod detayları client'a kapatılmalı.\n5. **CORS Yapılandırması**: Sadece güvenilir domain'lere izin verilmeli (`*` yasaklanmalı)."}],bestPractices:["Docker konteynerleri içinde uygulamayı asla root kullanıcısı olarak çalıştırmayın.","JVM parametrelerinde `-XX:MaxRAMPercentage=75.0` kullanarak konteyner OOM kill sorunlarının önüne geçin."],commonPitfalls:["Geliştirme ortamındaki `ddl-auto: update` ayarını üretimde açık bırakarak veri kaybına sebep olmak."],keyTakeaways:["Multi-stage Dockerfile hafif, hızlı ve güvenli imajlar üretir.","Graceful shutdown ve doğru pool boyutları kesintisiz hizmet sağlar."]},{id:"module-10-vibe-coding-ai-guardrails",number:10,title:"Yapay Zekâ ile Kodlama (Vibe Coding) ve Güvenlik Denetimleri",subtitle:"LLM Mimari Hata Modelleri, AOP Proxy Körlüğü, BOLA/IDOR Zafiyetleri, ArchUnit Kuralları ve CI/CD Kalite Kapıları",icon:"Sparkles",category:"AI & Security Architecture",difficulty:"İleri",durationMinutes:45,overview:"Büyük dil modellerinin (LLM) Spring Boot projelerinde ürettiği sessiz mimari ve güvenlik hatalarının teknik incelemesi; AOP proxy atlama tuzakları, BOLA yetkilendirme açıkları, Actuator sızıntıları, ArchUnit deterministik kuralları ve otomatize AI PR reviewer mekanizmaları.",sections:[{id:"aop-proxy-blindness",title:"1. AOP Proxy Körlüğü ve @Transactional İhlalleri",content:"### Dinamik Proxy Mimarisi ve Self-Invocation Tuzağı\nSpring Framework, `@Transactional`, `@Async` veya `@Cacheable` gibi deklaratif mekanizmaları **CGLIB Dynamic Proxy** katmanı üzerinden işletir.\n\n* **Self-Invocation (Kendi Kendini Çağırma):** Bir servis sınıfı içindeki metodun, aynı sınıftaki `@Transactional` metodu `this.metot()` şeklinde çağırması proxy katmanını tamamen baypas eder. İşlem (Transaction) **asla başlatılmaz** ve hata anında geri alma (rollback) çalışmaz.\n* **Checked Exception Rollback İhmali:** Spring TransactionManager varsayılan olarak yalnızca `RuntimeException` ve `Error` fırlatıldığında rollback uygular. `IOException` veya `SQLException` gibi denetimli istisnalarda işlem sessizce **COMMIT** edilir. Mutlaka `@Transactional(rollbackFor = Exception.class)` kullanılmalıdır.\n* **Private / Final Metot Kısıtı:** CGLIB proxy alt sınıflama (subclassing) ile çalıştığı için `private` veya `final` metotları override edemez. Bu metotlara konan anotasyonlar etkisiz kalır.",codeSnippets:[{title:"Kusurlu AI Kodu vs Güvenli Production Çözümü",language:"java",filename:"OrderService.java",code:`// ❌ KUSURLU AI KODU:
@Service
public class OrderService {
    public void processBatch(List<OrderReq> list) {
        for (OrderReq req : list) {
            this.saveOrder(req); // TUZAK: Proxy baypas edildi! Transaction ÇALIŞMAZ!
        }
    }
    @Transactional
    public void saveOrder(OrderReq req) { ... }
}

// 🟢 DOĞRU PRODUCTION ÇÖZÜMÜ:
@Service
@RequiredArgsConstructor
public class OrderBatchService {
    private final SingleOrderProcessor singleOrderProcessor; // Ayrı bean

    public void processBatch(List<OrderReq> list) {
        for (OrderReq req : list) {
            singleOrderProcessor.saveOrder(req); // Proxy devreye girer, TX başlar!
        }
    }
}`}]},{id:"jpa-hibernate-vulnerabilities",title:"2. JPA / Hibernate Verimsizlikleri ve Entity İfşası",content:"### Veri Katmanı ve Mimari İzolasyon Tuzakları\n1. **N+1 Sorgu Problemi:** LLM'ler türetilmiş sorgularla lazy ilişkileri döngü içinde çeker. Her alt kayıt için döngüde SQL ateşlenir. Çözüm: `JOIN FETCH` veya DTO projection.\n2. **Open-Session-In-View (OSIV):** Modeller `spring.jpa.open-in-view=true` bırakarak DB bağlantısını HTTP yanıtı bitene kadar kilitler; bu da HikariCP bağlantı havuzunun tükenmesine yol açar.\n3. **Varlıkların (Entity) Dış Dünyaya Açılması:** `@RestController` katmanından doğrudan JPA Entity dönmek; şifre ve token sızıntısına, çift yönlü ilişkilerde `StackOverflowError` döngülerine ve **Mass Assignment** (yetki yükseltme) açıklarına neden olur. DTO ayrımı zorunludur.",codeSnippets:[{title:"JOIN FETCH ve DTO İzolasyonu",language:"java",filename:"CustomerRepository.java",code:`public interface CustomerRepository extends JpaRepository<Customer, Long> {
    // N+1 sorgusunu tek bir SQL join ile çözer
    @Query("SELECT DISTINCT c FROM Customer c LEFT JOIN FETCH c.orders")
    List<Customer> findAllWithOrders();

    // DTO Constructor Expression ile en yüksek performans
    @Query("SELECT new com.mastery.dto.CustomerDto(c.id, c.name, COUNT(o)) " +
           "FROM Customer c LEFT JOIN c.orders o GROUP BY c.id, c.name")
    List<CustomerDto> fetchSummaries();
}`}]},{id:"bola-actuator-security",title:"3. BOLA / IDOR Yetkilendirme Açıkları ve Actuator Sızıntıları",content:"### Kritik Güvenlik Zafiyetleri\n* **BOLA / IDOR (Broken Object Level Authorization):** LLM'ler `findById(id)` ile veri çekerken oturum açan kullanıcının o veriye erişim yetkisini (Sahiplik / Tenant Kontrolü) denetlemeyi unutur. Saldırgan sıralı ID taramasıyla başkalarının faturalarını çekebilir.\n* **Actuator Endpoint İfşası:** `management.endpoints.web.exposure.include=*` yapılandırması `/actuator/env` ve `/actuator/heapdump` uç noktalarını dışarı açarak şifrelerin ve AWS API anahtarlarının sızdırılmasına yol açar.\n* **SpEL ve Native SQLi:** Dize birleştirme (`+`) ile oluşturulan yerel sorgular ve `SpelExpressionParser` doğrudan uzaktan kod yürütme (RCE) saldırılarına zemin hazırlar.",codeSnippets:[{title:"BOLA Koruması ve Actuator Yapılandırması",language:"java",filename:"InvoiceController.java & application.yml",code:`// BOLA Korumalı Güvenli Controller:
@GetMapping("/api/invoices/{id}")
@PreAuthorize("@securityService.isInvoiceOwner(#id, authentication)")
public ResponseEntity<InvoiceDto> getInvoice(@PathVariable Long id) {
    return ResponseEntity.ok(invoiceService.getInvoice(id));
}

# Güvenli application.yml:
management:
  endpoints:
    web:
      exposure:
        include: "health,info,prometheus" # Sadece gerekli uç noktalar açık!`}]},{id:"archunit-deterministic-guardrails",title:"4. ArchUnit ile Statik Mimari Yaptırımlar (CI/CD Kapısı)",content:"### Mimari Yozlaşmayı Engelleyen Birim Testleri\nArchUnit kütüphanesi, mimari kuralları Java kodları olarak yazıp CI/CD hattında zorunlu kılar. Yapay zekâ hatalı bir kod yazdığında derleme anında test kırılır:\n\n* **Controller Entity Dönemez:** `controllers_must_not_return_entities`\n* **Servisler Durumsuz Olmalıdır:** `services_must_be_stateless` (Tüm alanlar `final` olmalıdır).\n* **Katman İzolasyonu:** Controller doğrudan Repository katmanına erişemez.",codeSnippets:[{title:"ArchUnit Mimari Test Kuralları",language:"java",filename:"ArchitectureRulesTest.java",code:`@AnalyzeClasses(packages = "com.mastery.springboot")
public class ArchitectureRulesTest {

    @ArchTest
    public static final ArchRule controllers_must_not_return_entities =
        methods().that().areDeclaredInClassesThat().resideInAPackage("..controller..")
        .should().notHaveRawReturnType(resideInAPackage("..entity.."))
        .because("JPA Entity sınıfları dış dünyaya açılamaz; DTO kullanılmalıdır.");

    @ArchTest
    public static final ArchRule services_must_be_stateless =
        fields().that().areDeclaredInClassesThat().resideInAPackage("..service..")
        .and().areNotStatic()
        .should().beFinal()
        .because("Spring servisleri singleton'dır; değişken durum barındıramaz.");
}`}]},{id:"ai-reviewer-threat-modeling",title:"5. AI PR Reviewer ve Negatif Entegrasyon Testleri",content:`### Yapay Zekâyı Güvenlik Denetçisi Olarak Konumlandırma
1. **Semantik PR İnceleme:** GitHub Actions üzerinden çalışan LLM ajanına AOP proxy baypaslarını ve eksik rollback bildirimlerini taratan özel sistem istemleri tanımlanmalıdır.
2. **Negatif Test Sentezi:** LLM'e saldırgan perspektifi verilerek, \`MockMvc\` ile yetkisiz kullanıcıların başkalarının verilerine eriştiğinde HTTP 403 Forbidden aldığını doğrulayan negatif entegrasyon testleri yazdırılmalıdır.
3. **SAST + LLM Hibrit Süzgeci:** Semgrep ve CodeQL bulguları LLM ile triyaj edilerek yanlış pozitifler (false positives) elenir.`,codeSnippets:[{title:"BOLA Saldırı Simülasyonu Negatif Testi",language:"java",filename:"InvoiceSecurityNegativeTest.java",code:`@SpringBootTest
@AutoConfigureMockMvc
public class InvoiceSecurityNegativeTest {
    @Autowired
    private MockMvc mockMvc;

    @Test
    @WithMockUser(username = "attacker_bob", roles = "USER")
    void getInvoice_WhenAccessingOtherUserInvoice_ShouldReturnForbidden() throws Exception {
        // Başka kullanıcının fatura ID'sine erişim denenir:
        mockMvc.perform(get("/api/invoices/101"))
               .andExpect(status().isForbidden()); // 200 dönerse CI derlemesi kırılır!
    }
}`}]}],bestPractices:["@Transactional metotları asla aynı sınıf içinden (this.) çağırmayın; ayrı bir bean veya TransactionTemplate kullanın.","Tüm @Transactional metotlarında checked exception'ları kapsamak için rollbackFor = Exception.class tanımlayın.","Controller katmanından asla @Entity dönmeyin; DTO ve Record sınıfları ile katı sözleşmeler oluşturun.","ArchUnit kurallarını CI/CD hattına Quality Gate olarak ekleyin.",'Actuator uç noktalarında include: "*" kullanımını kesinlikle engelleyin; sadece health/info portlarını açın.'],commonPitfalls:["Self-invocation nedeniyle @Transactional veya @Async metodunun sessizce devre dışı kalması.","findById(id) sorgusunda oturum açan kullanıcının sahiplik kontrolünü atlayarak BOLA açığı oluşturmak.","Döngü içinde lazy getter çağırarak N+1 sorgusu tetiklemek ve OSIV ile HikariCP havuzunu kilitlemek.","Singleton @Service sınıfları içine değişken (mutable) sınıf değişkenleri veya SimpleDateFormat koymak."],keyTakeaways:["Spring Framework çalışma zamanı dinamik proxy katmanı, POJO nesnelerinden farklı kurallara tabidir.","Yapay zekâ üretimi kodların güvenliği, ArchUnit mimari testleri ve otomatize CI/CD süzgeçleriyle garantiye alınmalıdır."]}],Du=(d="tr")=>d==="en"?jg:xo,lo=[{id:"base-auditable-entity",title:"Auditable Base Entity (JPA Auditing)",category:"JPA & DB",complexity:"Başlangıç",description:"Tüm entity sınıflarında otomatik olarak createdAt, updatedAt, createdBy ve version alanlarını yöneten soyut temel sınıf.",filename:"BaseEntity.java",tags:["JPA","Hibernate","Auditing","BaseEntity","Clean Architecture"],code:`package com.example.mastery.common.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.Instant;

@Getter
@Setter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private Instant createdAt;

    @LastModifiedDate
    @Column(name = "updated_at", nullable = false)
    private Instant updatedAt;

    @CreatedBy
    @Column(name = "created_by", updatable = false)
    private String createdBy;

    @LastModifiedBy
    @Column(name = "updated_by")
    private String updatedBy;

    @Version
    @Column(name = "version")
    private Long version; // Optimistic Locking desteği
}`},{id:"jwt-token-provider",title:"JJWT 0.12+ Uyumlu Modern JWT Servisi",category:"Security",complexity:"İleri",description:"Java 21 ve JJWT kütüphanesinin en güncel sürümüyle HMAC-SHA256 anahtarlı güvenli token üretimi ve doğrulaması.",filename:"JwtService.java",tags:["Security","JWT","HMAC-SHA256","Stateless","Auth"],code:`package com.example.mastery.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtService {

    @Value("\${application.security.jwt.secret-key}")
    private String secretKey;

    @Value("\${application.security.jwt.expiration}")
    private long jwtExpiration;

    public String generateToken(UserDetails userDetails) {
        Map<String, Object> extraClaims = new HashMap<>();
        extraClaims.put("roles", userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .toList());
        return buildToken(extraClaims, userDetails, jwtExpiration);
    }

    private String buildToken(Map<String, Object> extraClaims, UserDetails userDetails, long expiration) {
        return Jwts.builder()
                .claims(extraClaims)
                .subject(userDetails.getUsername())
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + expiration))
                .signWith(getSignInKey())
                .compact();
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parser()
                .verifyWith(getSignInKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    private boolean isTokenExpired(String token) {
        return extractClaim(token, Claims::getExpiration).before(new Date());
    }

    private SecretKey getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}`},{id:"custom-validation-annotation",title:"Özel Jakarta Validasyon Anotasyonu",category:"Exceptions & Validation",complexity:"Orta",description:"TC Kimlik No, Vergi No veya özel formatları doğrulamak için Custom Constraint Annotation ve Validator.",filename:"ValidTaxNumber.java & Validator.java",tags:["Validation","Custom Annotation","ConstraintValidator","Clean Code"],code:`// 1. Anotasyon Tanımı
package com.example.mastery.validation;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import java.lang.annotation.*;

@Documented
@Constraint(validatedBy = TaxNumberValidator.class)
@Target({ElementType.FIELD, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
public @interface ValidTaxNumber {
    String message() default "Geçersiz vergi/kimlik numarası formatı";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}

// 2. Validator Mantığı
package com.example.mastery.validation;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class TaxNumberValidator implements ConstraintValidator<ValidTaxNumber, String> {

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (value == null) return false;
        // 10 haneli ve sadece rakamlardan oluşan format kontrolü
        return value.matches("^[0-9]{10}$");
    }
}`},{id:"openapi-swagger-config",title:"SpringDoc OpenAPI 3.0 / Swagger Yapılandırması",category:"Architecture & REST",complexity:"Başlangıç",description:"REST API dokümantasyonu, JWT Bearer yetkilendirme butonu ve lisans bilgilerini içeren Swagger UI entegrasyonu.",filename:"OpenApiConfig.java",tags:["Swagger","OpenAPI","Documentation","SpringDoc"],code:`package com.example.mastery.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        final String securitySchemeName = "bearerAuth";
        return new OpenAPI()
                .info(new Info()
                        .title("Spring Boot Mastery API")
                        .version("1.0.0")
                        .description("Modern Spring Boot 3 & Java 21 Kurumsal REST API Dokümantasyonu")
                        .contact(new Contact().name("Spring Boot Ekibi").email("dev@example.com"))
                        .license(new License().name("Apache 2.0").url("https://spring.io")))
                .addSecurityItem(new SecurityRequirement().addList(securitySchemeName))
                .components(new Components()
                        .addSecuritySchemes(securitySchemeName, new SecurityScheme()
                                .name(securitySchemeName)
                                .type(SecurityScheme.Type.HTTP)
                                .scheme("bearer")
                                .bearerFormat("JWT")));
    }
}`}],Tg=(d="tr")=>d==="en"?lo.map(c=>{const b={"base-auditable-entity":{title:"Auditable Base Entity (JPA Auditing & Optimistic Locking)",description:"Reusable mapped superclass automating createdAt, updatedAt, createdBy, and optimistic locking version across all JPA entities."},"jwt-token-provider":{title:"Modern JJWT 0.12+ Token Provider Service",description:"Enterprise HMAC-SHA256 JWT service with claim extraction, token expiration check, and signing key management."},"rate-limiting-filter":{title:"Bucket4j In-Memory IP-Based Rate Limiting Filter",description:"High-performance HTTP filter applying token-bucket rate limiting returning HTTP 429 Too Many Requests upon limit exhaustion."},"custom-validator":{title:"Jakarta Validation: Custom PhoneNumber Constraint",description:"Custom validator implementation using ConstraintValidator and custom annotation for clean domain validations."}}[c.id];return b?{...c,...b}:c}):lo,Mu=[{id:"q1-1",moduleId:"module-1-spring-boot-basics",moduleTitle:"Spring Boot Giriş & Mimari",difficulty:"Başlangıç",question:"Aşağıdakilerden hangisi @SpringBootApplication anotasyonunun kapsadığı 3 temel anotasyondan biri DEĞİLDİR?",options:["@EnableAutoConfiguration","@SpringBootConfiguration","@ComponentScan","@EnableWebSecurity"],correctIndex:3,springConcept:"@SpringBootApplication Bileşenleri",explanation:"@SpringBootApplication anotasyonu; @SpringBootConfiguration, @EnableAutoConfiguration ve @ComponentScan anotasyonlarının birleşimidir. @EnableWebSecurity ise Spring Security yapılandırmalarında manuel veya ayrı olarak eklenen güvenlik anotasyonudur."},{id:"q1-2",moduleId:"module-1-spring-boot-basics",moduleTitle:"Spring Boot Giriş & Mimari",difficulty:"Başlangıç",question:"Spring Boot 3.x sürümü ile birlikte Java ve Enterprise spesifikasyonu açısından hangi önemli değişiklik gerçekleşmiştir?",options:["Java 8 minimum gereksinim haline gelmiş ve javax.* paketleri korunmuştur.","Java 17 minimum gereksinim olmuş ve javax.* paketleri jakarta.* paketlerine taşınmıştır.","Tomcat desteği tamamen kaldırılmıştır.","Maven desteği bitirilip yalnızca Gradle zorunlu kılınmıştır."],correctIndex:1,springConcept:"Spring Boot 3 & Jakarta EE Standardı",explanation:"Spring Boot 3.0+ (ve Spring Framework 6) ile minimum Java sürümü 17 (ve 21 desteği) olmuş; EE 9/10 geçişiyle `javax.persistence`, `javax.servlet` vb. paketler `jakarta.*` olarak güncellenmiştir."},{id:"q2-1",moduleId:"module-2-ioc-di-beans",moduleTitle:"IoC, DI & Bean Yaşam Döngüsü",difficulty:"Başlangıç",question:"Spring Boot projelerinde Field Injection (@Autowired private MyService service;) yerine Constructor Injection kullanılmasının EN ÖNEMLİ avantajı nedir?",options:["Constructor Injection daha az RAM tüketir.","Bağımlılıkların final yapılarak immutability sağlanması, NPE riskinin önlenmesi ve mock nesnelerle kolay unit test yazılabilmesi.","Constructor Injection kullanıldığında Spring Boot daha hızlı derlenir.","Sadece Constructor Injection ile veritabanına bağlanılabilir."],correctIndex:1,springConcept:"Constructor Injection Avantajları",explanation:"Constructor Injection; nesnelerin bağımlılıkları eksik başlatılmasını engeller, bağımlılıkların `final` olmasını sağlar, Spring Container'a ihtiyaç duymadan saf Java birim testi yazmayı (Mockito ile) çok kolaylaştırır."},{id:"q2-2",moduleId:"module-2-ioc-di-beans",moduleTitle:"IoC, DI & Bean Yaşam Döngüsü",difficulty:"Orta",question:"Spring'de varsayılan Bean kapsamı (Scope) nedir ve bu kapsamda çalışan bir Bean tasarlanırken nelere dikkat edilmelidir?",options:["Prototype kapsamıdır; her istekte yeni nesne üretilir.",'Singleton kapsamıdır; tek bir instance paylaşıldığı için nesne "Stateless" (durumsuz) olmalı, kullanıcıya özel state tutulmamalıdır.',"Request kapsamıdır; sadece HTTP isteklerinde yaşar.","Session kapsamıdır; kullanıcı oturumu kapanana kadar bellekte tutulur."],correctIndex:1,springConcept:"Bean Scopes & Thread Safety",explanation:"Spring varsayılan olarak Singleton scope kullanır. Tüm thread'ler aynı nesne örneğini paylaştığı için sınıf seviyesinde mutable durum (örneğin private String currentUserName;) tutulursa concurrency / race condition hataları meydana gelir."},{id:"q3-1",moduleId:"module-3-data-jpa-hibernate",moduleTitle:"Spring Data JPA & Hibernate",difficulty:"İleri",question:`Hibernate ve JPA'da meşhur "N+1 Sorgu Problemi" tam olarak neden kaynaklanır ve kurumsal bir projede en etkili çözüm yöntemi nedir?`,options:["Veritabanı tablosunda birincil anahtar (Primary Key) tanımlanmadığında oluşur.","OneToMany veya ManyToOne ilişkilerde ana kayıt çekildikten sonra ilişkili alt kayıtların (Lazy/Eager) her bir satır için ayrı SQL sorgusuyla çekilmesinden kaynaklanır; çözüm @EntityGraph veya JOIN FETCH kullanmaktır.","Spring Boot'ta @Transactional anotasyonu unutulduğunda meydana gelir.","PostgreSQL veritabanı sürücüsü eski olduğunda oluşur."],correctIndex:1,springConcept:"N+1 Query Problem & JOIN FETCH",explanation:'100 adet sipariş çekildiğinde her siparişin müşterisi için 100 ayrı SQL çalışması 1+N=101 sorguya yol açar. `JOIN FETCH` veya `@EntityGraph(attributePaths = {"customer"})` tek bir SQL JOIN ile tüm veriyi tek seferde çeker.'},{id:"q3-2",moduleId:"module-3-data-jpa-hibernate",moduleTitle:"Spring Data JPA & Hibernate",difficulty:"Orta",question:"JPA'da @Transactional bir metot içinde veritabanından çekilen bir Entity'nin bir alanı güncellendiğinde (ör: user.setActive(false);) neden açıkça userRepository.save(user); çağrısı yapmaya gerek YOKTUR?",options:["Çünkü Hibernate nesneleri JSON olarak tarayıcıya kaydeder.",`Hibernate'in "Dirty Checking" (Kirli Kontrol) mekanizması Persistence Context içindeki Managed entity değişikliklerini Transaction commit anında otomatik tespit edip UPDATE SQL fırlatır.`,"save() metodu JPA 3 ile birlikte deprecated olmuştur.","Çünkü Spring Boot veritabanını sürekli sıfırlar."],correctIndex:1,springConcept:"Persistence Context & Dirty Checking",explanation:`Transaction içinde veritabanından okunan nesneler "Managed" durumdadır. Transaction tamamlanırken (commit) Hibernate nesnenin ilk snapshot'ı ile son halini karşılaştırır ve değişen alanlar için otomatik UPDATE SQL sorgusu çalıştırır.`},{id:"q4-1",moduleId:"module-4-rest-apis",moduleTitle:"REST API & Exception Handling",difficulty:"Orta",question:"Spring Boot 3 ile gelen RFC 7807 ProblemDetails spesifikasyonu kurumsal REST API'lerde hangi sorunu çözer?",options:["Veritabanı bağlantı havuzu hatalarını otomatik düzeltir.","İstemcilere (frontend/mobil) dönülen HTTP hata yanıtlarını standartlaştırılmış bir JSON şeması (type, title, status, detail, instance) ile sunar.","Tüm controller sınıflarını otomatik olarak HTTPS protokolüne taşır.","REST API'leri GraphQL'e dönüştürür."],correctIndex:1,springConcept:"RFC 7807 ProblemDetails",explanation:"RFC 7807 ProblemDetails standardı, tüm mikroservis ve API ekosisteminde hata yanıtlarının rastgele formatlar yerine dünya standardı olan tutarlı bir formatla dönmesini sağlar."},{id:"q5-1",moduleId:"module-5-security-jwt",moduleTitle:"Spring Security 6 & JWT",difficulty:"İleri",question:"Spring Security 6 ile birlikte güvenlik yapılandırmasında hangi büyük mimari değişiklik zorunlu hale gelmiştir?",options:["WebSecurityConfigurerAdapter sınıfı tamamen kaldırılmış, bunun yerine @Bean SecurityFilterChain fonksiyonel yaklaşımı zorunlu kılınmıştır.","Şifrelerin düz metin (plain text) olarak tutulması zorunlu hale gelmiştir.","JWT kullanımı yasaklanmış, yalnızca Basic Auth kullanılabilir olmuştur.","Spring Security artık XML dosyası olmadan çalışmaz."],correctIndex:0,springConcept:"Spring Security 6 SecurityFilterChain",explanation:"Eski WebSecurityConfigurerAdapter sınıfından miras alma (inheritance) yöntemi kaldırılmış; yerine bağımsız `@Bean public SecurityFilterChain filterChain(HttpSecurity http)` fonksiyonel DSL yaklaşımı getirilmiştir."}],Eg=[{id:"q1-1",moduleId:"module-1-spring-boot-basics",moduleTitle:"Spring Boot Basics & Architecture",difficulty:"Beginner",question:"Which of the following is NOT one of the 3 core annotations bundled within @SpringBootApplication?",options:["@EnableAutoConfiguration","@SpringBootConfiguration","@ComponentScan","@EnableWebSecurity"],correctIndex:3,springConcept:"@SpringBootApplication Components",explanation:"@SpringBootApplication is a meta-annotation composed of @SpringBootConfiguration, @EnableAutoConfiguration, and @ComponentScan. @EnableWebSecurity is a separate security configuration annotation."},{id:"q1-2",moduleId:"module-1-spring-boot-basics",moduleTitle:"Spring Boot Basics & Architecture",difficulty:"Beginner",question:"What is the major Java baseline and enterprise specification shift introduced in Spring Boot 3.x?",options:["Java 8 became the minimum requirement and javax.* namespace was preserved.","Java 17 became the baseline requirement and javax.* packages were migrated to jakarta.*.","Embedded Tomcat support was completely removed.","Maven support was deprecated in favor of mandatory Gradle."],correctIndex:1,springConcept:"Spring Boot 3 & Jakarta EE Standard",explanation:"Spring Boot 3.0+ (built on Spring Framework 6) mandates Java 17 as baseline (with full Java 21 LTS support) and migrated enterprise packages (persistence, servlet, etc.) from `javax.*` to `jakarta.*`."},{id:"q2-1",moduleId:"module-2-ioc-di-beans",moduleTitle:"IoC, DI & Bean Lifecycle",difficulty:"Beginner",question:"What is the MOST IMPORTANT advantage of using Constructor Injection over Field Injection (@Autowired private MyService service;)?",options:["Constructor Injection consumes less RAM memory.","Enabling immutability with final fields, preventing NullPointerExceptions, and facilitating pure unit testing with mock objects.","Constructor Injection enables faster Spring Boot compilation.","Only Constructor Injection allows database connectivity."],correctIndex:1,springConcept:"Advantages of Constructor Injection",explanation:"Constructor Injection guarantees that required dependencies are never null, enforces immutability via `final` modifiers, and allows writing pure Java unit tests without booting the heavy Spring container."},{id:"q2-2",moduleId:"module-2-ioc-di-beans",moduleTitle:"IoC, DI & Bean Lifecycle",difficulty:"Intermediate",question:"What is the default Spring Bean scope, and what is the primary concurrency consideration when designing such beans?",options:["Prototype scope; a new object instance is created per request.","Singleton scope; because a single instance is shared across threads, beans MUST be stateless.","Request scope; beans only live during an HTTP request.","Session scope; beans persist in memory until user session invalidation."],correctIndex:1,springConcept:"Bean Scopes & Thread Safety",explanation:"Spring beans default to Singleton scope. Since multiple worker threads access the exact same instance concurrently, storing mutable state at the class level will cause race conditions and data corruption."},{id:"q3-1",moduleId:"module-3-data-jpa-hibernate",moduleTitle:"Spring Data JPA & Hibernate",difficulty:"Advanced",question:'What causes the notorious "N+1 Query Problem" in Hibernate/JPA, and what is the standard enterprise solution?',options:["It occurs when a database table lacks a primary key.","Fetching parent records followed by individual sub-queries for each associated child collection; resolved using JOIN FETCH or @EntityGraph.","It happens whenever @Transactional annotation is omitted in Spring Boot.","It is caused by an outdated PostgreSQL JDBC driver."],correctIndex:1,springConcept:"N+1 Query Problem & JOIN FETCH",explanation:'Querying 100 orders results in 1 initial query + 100 sub-queries for each order\'s customer. Using `JOIN FETCH` or `@EntityGraph(attributePaths = {"customer"})` executes a single optimized SQL JOIN query.'},{id:"q3-2",moduleId:"module-3-data-jpa-hibernate",moduleTitle:"Spring Data JPA & Hibernate",difficulty:"Intermediate",question:"Inside a @Transactional method, why is calling userRepository.save(user) NOT required after modifying an entity field (e.g. user.setActive(false))?",options:["Because Hibernate saves objects as JSON in the browser.",`Hibernate's "Dirty Checking" mechanism automatically detects modifications to managed entities and flushes UPDATE SQL upon transaction commit.`,"The save() method was deprecated in JPA 3.","Because Spring Boot resets the database continuously."],correctIndex:1,springConcept:"Persistence Context & Dirty Checking",explanation:'Entities loaded within an active transaction are "Managed" by the Persistence Context. On commit, Hibernate compares the entity against its loaded snapshot and automatically triggers an UPDATE statement for modified fields.'},{id:"q4-1",moduleId:"module-4-rest-apis",moduleTitle:"REST API & Exception Handling",difficulty:"Intermediate",question:"What key problem does the RFC 7807 ProblemDetails specification solve in Spring Boot 3 enterprise REST APIs?",options:["It automatically repairs database connection pool failures.","It standardizes HTTP error payloads across clients using a structured JSON schema (type, title, status, detail, instance).","It automatically forces all controllers to use HTTPS.","It converts REST APIs into GraphQL schemas."],correctIndex:1,springConcept:"RFC 7807 ProblemDetails",explanation:"RFC 7807 ProblemDetails standardizes error representations across microservices, eliminating inconsistent custom error formats."},{id:"q5-1",moduleId:"module-5-security-jwt",moduleTitle:"Spring Security 6 & JWT",difficulty:"Advanced",question:"What major architectural change became mandatory in Spring Security 6 configurations?",options:["WebSecurityConfigurerAdapter was completely removed in favor of the component-based @Bean SecurityFilterChain approach.","Storing passwords in plain text became mandatory.","JWT authentication was prohibited, allowing only Basic Auth.","Spring Security can no longer run without XML configuration."],correctIndex:0,springConcept:"Spring Security 6 SecurityFilterChain",explanation:"Inheritance-based WebSecurityConfigurerAdapter was deprecated and deleted; configurations now rely on functional `@Bean public SecurityFilterChain filterChain(HttpSecurity http)` DSLs."}],Ag=(d="tr")=>d==="en"?Eg:Mu,Ng=Mu,Pg=[{title:"Spring Framework Pitfalls",url:"https://www.sonarsource.com/blog/spring-framework-pitfalls/",publisher:"SonarSource Blog",note:"İşlem yönetimi ve dinamik proxy atlama analizleri."},{title:"The 7 Most Common Mistakes When Using @Transactional in Spring Boot",url:"https://medium.com/spring-boot-world/the-7-most-common-mistakes-when-using-transactional-in-spring-boot-5fb15f6522e1",publisher:"Medium, Spring Boot World",note:"Self-invocation, private method ve rollback tuzakları."},{title:"Exploring Spring Boot Actuator Misconfigurations",url:"https://www.wiz.io/blog/spring-boot-actuator-misconfigurations",publisher:"Wiz Security Blog",note:"Actuator endpoint ifşaları ve heapdump sızıntıları."},{title:"Broken Object Level Authorization (BOLA): API Attack & Prevention",url:"https://www.stackhawk.com/blog/understanding-and-protecting-against-api1-broken-object-level-authorization/",publisher:"StackHawk Guide",note:"OWASP API Top 1 BOLA yetkilendirme açıkları."},{title:"State of API Exposure 2024",url:"https://26857953.fs1.hubspotusercontent-eu1.net/hubfs/26857953/State%20of%20API%20Exposure%202024%20-%20Escape.pdf",publisher:"Escape Security Research",note:"Açıkta bırakılan Actuator uç noktalarının risk analizi."},{title:"Vibe Coding Security Risks: 53% of AI Code Has Holes",url:"https://getautonoma.com/blog/vibe-coding-security-risks",publisher:"Autonoma Blog",note:"Yapay zekâ üretimi backend kodlarındaki yapısal güvenlik gedikleri."},{title:"Introduction to ArchUnit",url:"https://www.baeldung.com/java-archunit-intro",publisher:"Baeldung",note:"Java mimari kurallarının birim testlerle denetlenmesi."},{title:"Semgrep App Security Platform & AI Code Review",url:"https://semgrep.dev/",publisher:"Semgrep Documentation",note:"Spring Boot SAST kuralları ve anlamsal güvenlik taramaları."}],Rg=[{id:"aop-self-invocation",category:"aop",categoryLabel:"AOP Proxy & Transaction",title:"AOP Self-Invocation (Kendi Kendini Çağırma) Tuzağı",summary:`Aynı sınıf içindeki bir metodun diğer @Transactional metodu "this." ile çağırması Spring Proxy'sini baypas eder.`,dangerBadge:"Kritik: İşlem Yok / Sessiz Veri Bozulması",badCode:{filename:"OrderService.java (Kusurlu LLM Kodu)",code:`@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    // Dışarıdan çağrılan public metot (Transaction yok!)
    public void processOrderBatch(List<OrderRequest> requests) {
        for (OrderRequest req : requests) {
            // TUZAK: Aynı sınıf içinden doğrudan çağrı (this.saveSingleOrder)
            // Spring Proxy baypas edilir; @Transactional ASLA ÇALIŞMAZ!
            this.saveSingleOrder(req);
        }
    }

    @Transactional
    public void saveSingleOrder(OrderRequest req) {
        Order order = new Order(req);
        orderRepository.save(order);
        if (req.getAmount() < 0) {
            // Hata olsa dahi işlem geri alınamaz (Rollback çalışmaz)!
            throw new IllegalArgumentException("Geçersiz tutar");
        }
    }
}`,flawExplanation:'Spring @Transactional, ilgili bean etrafına dinamik bir CGLIB proxy örer. Ancak aynı sınıf içinden yapılan "this.metot()" çağrıları bu proxy katmanına uğramaz. Metot düz Java nesnesi gibi çalışır; transaction başlatılmaz ve hata anında rollback yapılamaz.'},goodCode:{filename:"OrderService.java & OrderProcessor.java (Production Çözümü)",code:`// ÇÖZÜM 1: Sorumluluğu ayrı bir servise/bean'e ayırma (Tavsiye Edilen)
@Service
@RequiredArgsConstructor
public class OrderBatchService {
    private final SingleOrderProcessor singleOrderProcessor;

    public void processOrderBatch(List<OrderRequest> requests) {
        for (OrderRequest req : requests) {
            // Dış bean çağrısı -> Spring CGLIB Proxy devreye girer -> Transaction başlar!
            singleOrderProcessor.saveSingleOrder(req);
        }
    }
}

@Service
@RequiredArgsConstructor
public class SingleOrderProcessor {
    private final OrderRepository orderRepository;

    @Transactional(rollbackFor = Exception.class)
    public void saveSingleOrder(OrderRequest req) {
        Order order = new Order(req);
        orderRepository.save(order);
        if (req.getAmount() < 0) {
            throw new IllegalArgumentException("Geçersiz tutar");
        }
    }
}`,fixExplanation:"İşlem yönetimi gerektiren metot ayrı bir Spring Bean'e taşınır veya TransactionTemplate kullanılır. Böylece çağrı daima AOP Proxy nesnesi üzerinden geçer."},guardrailCode:{tool:"ArchUnit",filename:"ArchitectureTest.java (CI/CD Kapısı)",code:`@AnalyzeClasses(packages = "com.mastery.springboot")
public class TransactionRulesTest {

    // Servis içi transactional metotların çağrılmasını ve proxy baypasını denetler
    @ArchTest
    public static final ArchRule transactional_methods_must_be_public =
        methods().that().areAnnotatedWith(Transactional.class)
        .should().bePublic()
        .because("AOP Proxy'leri yalnızca public metotlara transaction uygulayabilir.");
}`,explanation:"ArchUnit kuralı, @Transactional metotların private/final olmasını ve mimari katmanlar arası izole edilmesini build aşamasında garanti altına alır."},impact:"Veritabanına yarım kalan veriler kaydedilir. Hata fırlatıldığında rollback gerçekleşmez; bakiye düşüp sipariş oluşmaması gibi ölümcül veri tutarsızlıkları doğar.",deepDiveMarkdown:"### AOP Proxy Mekanizması Nasıl Çalışır?\nSpring'de bir sınıfın üzerine veya metoduna `@Transactional`, `@Async` veya `@Cacheable` yazdığınızda, Spring uygulama ayağa kalkarken o sınıfın yerine **CGLIB Dynamic Proxy** nesnesi enjekte eder.\n\n```\nİstek -> [ Spring Proxy (Transaction Interceptor: BEGIN TX) ] -> [ Gerçek Service Hedefi ] -> [ COMMIT / ROLLBACK ]\n```\n\nEğer servis kendi içindeki metodu doğrudan `this.saveSingleOrder()` şeklinde çağırırsa, Java çalışma zamanı doğrudan hedef nesnenin metodunu çalıştırır. **Proxy katmanı tamamen devre dışı kalır!**"},{id:"checked-exception-rollback",category:"aop",categoryLabel:"AOP Proxy & Transaction",title:"Denetimli İstisnalarda (Checked Exceptions) Geri Alma İhmali",summary:"Spring varsayılan olarak yalnızca RuntimeException ve Error durumlarında işlemi geri alır; Checked Exception fırlatıldığında commit edilir.",dangerBadge:"Yüksek: Sessiz Commit & Veri Kaybı",badCode:{filename:"PaymentService.java (Kusurlu LLM Kodu)",code:`@Service
public class PaymentService {
    @Autowired
    private AccountRepository accountRepo;

    // TUZAK: rollbackFor tanımlanmamış!
    @Transactional
    public void transferMoney(Long fromId, Long toId, BigDecimal amount) throws IOException, SQLException {
        accountRepo.decreaseBalance(fromId, amount);
        
        // Harici banka API çağrısı veya dosya yazımı Checked Exception fırlatıyor:
        if (externalBankFailed()) {
            throw new IOException("Banka servisi yanıt vermedi!"); 
            // SONUÇ: IOException bir Checked Exception olduğu için
            // Spring bu işlemi GERİ ALMAZ (Rollback yapmaz)! Bakiye kalıcı olarak eksilir!
        }
        
        accountRepo.increaseBalance(toId, amount);
    }
}`,flawExplanation:"Spring Framework EJB spesifikasyonundan gelen miras nedeniyle varsayılan olarak sadece RuntimeException (Unchecked) fırlatıldığında rollback tetikler. LLM'ler genellikle checked exception fırlatılan metotlarda rollbackFor belirtmez."},goodCode:{filename:"PaymentService.java (Production Çözümü)",code:`@Service
@RequiredArgsConstructor
public class PaymentService {
    private final AccountRepository accountRepo;

    // ÇÖZÜM: rollbackFor = Exception.class ile tüm istisnalarda geri alma garantisi
    @Transactional(rollbackFor = Exception.class)
    public void transferMoney(Long fromId, Long toId, BigDecimal amount) throws IOException {
        accountRepo.decreaseBalance(fromId, amount);
        
        if (externalBankFailed()) {
            throw new IOException("Banka servisi yanıt vermedi!"); 
            // ARTIK GÜVENLİ: Spring tüm Exception türevlerinde rollback uygular.
        }
        
        accountRepo.increaseBalance(toId, amount);
    }
}`,fixExplanation:"@Transactional(rollbackFor = Exception.class) ifadesi eklenerek checked/unchecked fark etmeksizin tüm fırlatılan hatalarda transaction güvenle geri alınır."},guardrailCode:{tool:"Semgrep",filename:"semgrep-spring-rules.yml",code:`rules:
  - id: spring-transactional-missing-rollback-for
    languages: [java]
    message: "@Transactional anotasyonu rollbackFor = Exception.class içermelidir."
    severity: WARNING
    pattern: |
      @Transactional
      $RET $FUNC(...) throws $EX { ... }`,explanation:"Semgrep kuralı, checked exception fırlatan metodun @Transactional(rollbackFor = ...) kuralına uyup uymadığını CI/CD pipeline'ında milisaniyeler içinde denetler."},impact:"Para transferi, stok düşümü veya sipariş onayında harici API hatası oluşmasına rağmen veritabanı geri alınmaz ve para havaya uçar.",deepDiveMarkdown:"### Spring Transaction Geri Alma Varsayılanları\n* `RuntimeException` -> Rollback tetiklenir ✅\n* `Error` -> Rollback tetiklenir ✅\n* `IOException`, `SQLException`, Özel `Exception` -> **COMMIT EDİLİR (Ters Köşe!) ❌**\n\nBu nedenle kurumsal projelerde her zaman `@Transactional(rollbackFor = Exception.class)` kullanılması en iyi uygulamadır."},{id:"bola-idor-vulnerability",category:"security",categoryLabel:"API Güvenliği & BOLA",title:"Kırık Nesne Düzeyinde Yetkilendirme (BOLA / IDOR)",summary:"LLM'ler findById(id) ile sorgu çekerken kimliği doğrulanmış kullanıcının o verinin sahibi olup olmadığını kontrol etmeyi unutur.",dangerBadge:"Kritik Güvenlik Açığı (OWASP API #1)",badCode:{filename:"InvoiceController.java (Kusurlu LLM Kodu)",code:`@RestController
@RequestMapping("/api/invoices")
public class InvoiceController {
    @Autowired
    private InvoiceRepository invoiceRepo;
    @Autowired
    private InvoiceMapper mapper;

    // TUZAK: Kullanıcı giriş yapmış (authenticated) olsa dahi
    // Başkasının fatura ID'sini göndererek (örn: /api/invoices/999) 
    // tüm faturayı ve hassas kişisel verileri indirebilir!
    @GetMapping("/{id}")
    public ResponseEntity<InvoiceResponse> getInvoice(@PathVariable Long id) {
        return invoiceRepo.findById(id)
                .map(mapper::toDto)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}`,flawExplanation:"Model, kullanıcının oturum açtığını varsayar ancak kullanıcının o spesifik fatura kaydına sahip olup olmadığını (Sahiplik Kontrolü) denetlemez."},goodCode:{filename:"InvoiceController.java (Production Çözümü)",code:`@RestController
@RequestMapping("/api/invoices")
@RequiredArgsConstructor
public class InvoiceController {
    private final InvoiceService invoiceService;

    @GetMapping("/{id}")
    @PreAuthorize("@securityService.isInvoiceOwner(#id, authentication)")
    public ResponseEntity<InvoiceResponse> getInvoice(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails) {
        
        InvoiceResponse response = invoiceService.getInvoiceForUser(id, userDetails.getUsername());
        return ResponseEntity.ok(response);
    }
}

// Servis katmanında ilave SQL kiracı filtresi:
// invoiceRepository.findByIdAndOwnerEmail(id, currentUserEmail);`,fixExplanation:"Spring Security SpEL (@PreAuthorize) ve veritabanı sorgusunda doğrudan kullanıcı/kiracı filtresi kullanılarak yetkisiz erişim 403 Forbidden ile engellenir."},guardrailCode:{tool:"MockMvc Negative Test",filename:"InvoiceSecurityNegativeTest.java",code:`@SpringBootTest
@AutoConfigureMockMvc
public class InvoiceSecurityNegativeTest {
    @Autowired
    private MockMvc mockMvc;

    @Test
    @WithMockUser(username = "attacker_bob", roles = "USER")
    void getInvoice_WhenAccessingOtherUserInvoice_ShouldReturnForbidden() throws Exception {
        // Alice'e ait fatura ID'si: 101L
        mockMvc.perform(get("/api/invoices/101"))
               .andExpect(status().isForbidden()); // 200 dönerse CI derlemesi kırılır!
    }
}`,explanation:"Saldırgan perspektifinden yazılan negatif MockMvc entegrasyon testi, BOLA açıklarını CI/CD ortamında otomatik tespit eder."},impact:"Saldırganlar sıralı ID taraması (IDEnumeration) yaparak sistemdeki tüm kullanıcıların fatura, bakiye, sağlık ve kimlik kayıtlarını sızdırabilir.",deepDiveMarkdown:"### BOLA (IDOR) Neden LLM'lerin En Büyük Kör Noktasıdır?\nLLM'ler istek parametrelerini doğrudan repository metoduna bağlama eğilimindedir (`findById(id)`). Güvenlik bağlamındaki `SecurityContextHolder` veya `Principal` nesnesini veri tabanı sorgusuna eklemek için ek iş mantığı gerekir.\n\nKurumsal savunma hattı:\n1. URL'den gelen ID tek başına asla güvenilir veri kabul edilmemelidir.\n2. Sorgu: `select i from Invoice i where i.id = :id and i.tenantId = :tenantId` şeklinde olmalıdır."},{id:"actuator-exposure",category:"security",categoryLabel:"Konfigürasyon & Bilgi Sızıntısı",title:"Spring Boot Actuator ve Hassas Uç Nokta İfşaları",summary:"LLM'ler test kolaylığı için management.endpoints.web.exposure.include=* yazar; bu da şifre, heapdump ve RCE zafiyeti yaratır.",dangerBadge:"Kritik: RCE & Parola Sızıntısı",badCode:{filename:"application.yml (Kusurlu LLM Yapılandırması)",code:`management:
  endpoints:
    web:
      exposure:
        # ÖLÜMCÜL HATA: Tüm actuator uç noktaları dış dünyaya açıldı!
        include: "*"
  endpoint:
    health:
      show-details: always
    env:
      enabled: true
    heapdump:
      enabled: true`,flawExplanation:"Yıldız (*) kullanımı; /actuator/env, /actuator/heapdump, /actuator/beans gibi kritik iç yapıları kimlik doğrulamasız internete açar. Heapdump indirilerek bellekteki tüm API secret'ları ve veritabanı şifreleri elde edilebilir."},goodCode:{filename:"application.yml (Production Standartı)",code:`management:
  server:
    port: 8081 # Actuator'ı iç ağda ayrı bir porta alma
  endpoints:
    web:
      exposure:
        # Sadece liveness ve readiness açık!
        include: "health,info,prometheus"
      base-path: /internal-metrics
  endpoint:
    health:
      show-details: when_authorized
      probes:
        enabled: true
    env:
      enabled: false
    heapdump:
      enabled: false`,fixExplanation:"Yalnızca operasyonel olarak gerekli sağlık uç noktaları beyaz listeye (whitelist) alınır ve Actuator portu dış internet trafiğinden izole edilir."},guardrailCode:{tool:"Config Guard",filename:"ActuatorConfigTest.java",code:`@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ActuatorSecurityTest {
    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void sensitiveEndpoints_MustBeClosed() {
        ResponseEntity<String> envResp = restTemplate.getForEntity("/actuator/env", String.class);
        assertThat(envResp.getStatusCode()).isIn(HttpStatus.NOT_FOUND, HttpStatus.FORBIDDEN, HttpStatus.UNAUTHORIZED);

        ResponseEntity<String> heapResp = restTemplate.getForEntity("/actuator/heapdump", String.class);
        assertThat(heapResp.getStatusCode()).isIn(HttpStatus.NOT_FOUND, HttpStatus.FORBIDDEN);
    }
}`,explanation:"Entegrasyon testi ile /actuator/env ve /actuator/heapdump yollarının dışarıdan erişilemediği doğrulanır."},impact:"Saldırganlar /actuator/heapdump indirip strings ile grepleyip AWS anahtarlarını, JWT secretlarını ve veritabanı parolalarını çalar.",deepDiveMarkdown:`### 2024 State of API Exposure Raporu Bulgusu
Araştırmalar, açıkta bırakılan Spring Boot Actuator uç noktalarının kurumsal veri sızıntılarının ve Cloud hesap ele geçirmelerinin en yaygın 3 nedeninden biri olduğunu göstermektedir.`},{id:"n-plus-one-and-osiv",category:"jpa",categoryLabel:"JPA / Hibernate & Performans",title:"N+1 Sorgu Problemi ve Open-Session-In-View (OSIV) Tuzağı",summary:"LLM'ler ilişkili verileri çekerken JOIN FETCH yerine türetilmiş sorgular kullanır; döngüde yüzlerce SQL tetiklenir ve HikariCP havuzu tükenir.",dangerBadge:"Yüksek: DB Çökmesi & Havuz Tükenmesi",badCode:{filename:"CustomerOrderService.java (Kusurlu LLM Kodu)",code:`@Service
public class CustomerOrderService {
    @Autowired
    private CustomerRepository customerRepo;

    public List<CustomerSummaryDto> getAllCustomerOrders() {
        // 1. Sorgu: select * from customers (100 müşteri döner)
        List<Customer> customers = customerRepo.findAll();

        return customers.stream().map(c -> {
            // N SORGU: Her müşteri için ayrı bir "select * from orders where customer_id = ?"
            // Toplam 1 + 100 = 101 SQL sorgusu tetiklenir!
            int orderCount = c.getOrders().size(); 
            return new CustomerSummaryDto(c.getName(), orderCount);
        }).toList();
    }
}`,flawExplanation:'Lazy ilişkiler döngü içinde getter ile tetiklendiğinde N+1 adet SQL sorgusu çalışır. LLM ayrıca LazyInitializationException hatasını çözmek için "spring.jpa.open-in-view=true" bırakarak DB bağlantısını HTTP yanıtı bitene kadar bloke eder.'},goodCode:{filename:"CustomerRepository.java (Production Çözümü)",code:`public interface CustomerRepository extends JpaRepository<Customer, Long> {
    // ÇÖZÜM 1: JOIN FETCH ile tek sorguda ilişkili veriyi çekme
    @Query("SELECT DISTINCT c FROM Customer c LEFT JOIN FETCH c.orders")
    List<Customer> findAllWithOrders();

    // ÇÖZÜM 2 (Daha Performanslı): Doğrudan DTO Projection
    @Query("SELECT new com.mastery.dto.CustomerSummaryDto(c.name, COUNT(o)) " +
           "FROM Customer c LEFT JOIN c.orders o GROUP BY c.id, c.name")
    List<CustomerSummaryDto> fetchCustomerSummaries();
}

// application.yml içinde:
// spring.jpa.open-in-view: false`,fixExplanation:"JOIN FETCH veya JPQL Constructor Expression ile N+1 sorgusu tek bir optimize edilmiş SQL sorgusuna indirgenir ve OSIV kapatılır."},guardrailCode:{tool:"ArchUnit",filename:"JpaPerformanceRulesTest.java",code:`// QuickPerf veya SQL log sayacı ile maksimum sorgu kısıtı
@Test
@ExpectQueries(max = 1) // QuickPerf kuralı: 1'den fazla sorgu çıkarsa test fail olur!
void getAllCustomerOrders_ShouldExecuteSingleQuery() {
    customerOrderService.getAllCustomerOrders();
}`,explanation:"QuickPerf entegrasyonu ile servis metodunun tek bir HTTP isteğinde kaç SQL sorgusu ürettiği CI aşamasında test edilir."},impact:"Veritabanı CPU'su %100'e fırlar, HikariCP bağlantı havuzu kilitlenir ve tüm sistem zaman aşımına (Timeout) uğrayarak çöker.",deepDiveMarkdown:`### Open-Session-In-View (OSIV) Neden Tehlikelidir?
OSIV açık olduğunda, Hibernate Session'ı Controller katmanından View/JSON serileştirme bitene kadar açık tutulur. JSON kütüphanesi (Jackson) getter'ları çağırırken arkada sessizce SQL sorguları ateşlenir ve DB bağlantısı gereksiz yere dakikalarca meşgul edilir.`},{id:"entity-exposure-mass-assignment",category:"jpa",categoryLabel:"JPA & Mimari İzolasyon",title:"Varlıkların (Entity) Dış Dünyaya Doğrudan Açılması (Mass Assignment)",summary:"@RestController metodundan doğrudan JPA @Entity dönülmesi; döngüsel StackOverflow ve Mass Assignment güvenlik açıklarına yol açar.",dangerBadge:"Yüksek: Veri İfşası & StackOverflow",badCode:{filename:"UserController.java (Kusurlu LLM Kodu)",code:`@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserRepository userRepo;

    // TUZAK 1: Entity doğrudan döndürülüyor -> Şifre hash'i, secret'lar istemciye sızar!
    // TUZAK 2: Çift yönlü ilişkilerde Jackson JSON sonsuz döngüye girip StackOverflow fırlatır!
    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userRepo.findById(id).orElseThrow();
    }

    // TUZAK 3: Mass Assignment -> İstemci JSON içinde "role: ADMIN" gönderirse yetki yükseltir!
    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User userUpdate) {
        userUpdate.setId(id);
        return userRepo.save(userUpdate);
    }
}`,flawExplanation:"JPA Varlığı veritabanı modelidir, API kontratı değildir. Doğrudan maruz bırakıldığında istemci güncellenmemesi gereken alanları (role, balance, id) manipüle edebilir."},goodCode:{filename:"UserController.java & UserDto.java (Production Çözümü)",code:`@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<UserResponseDto> getUser(@PathVariable Long id) {
        UserResponseDto dto = userService.getUserById(id);
        return ResponseEntity.ok(dto); // Sadece güvenli alanlar döner!
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserResponseDto> updateUser(
            @PathVariable Long id,
            @Valid @RequestBody UserUpdateRequestDto request) {
        UserResponseDto updated = userService.updateUser(id, request);
        return ResponseEntity.ok(updated);
    }
}`,fixExplanation:"Strict DTO (Data Transfer Object) ve MapStruct/Record sınıfları kullanılarak API kontratı ile veritabanı şeması kesin sınırlarla birbirinden ayrılır."},guardrailCode:{tool:"ArchUnit",filename:"LayeringArchTest.java",code:`@ArchTest
public static final ArchRule controllers_must_not_return_entities =
    methods().that().areDeclaredInClassesThat().resideInAPackage("..controller..")
    .should().notHaveRawReturnType(resideInAPackage("..entity.."))
    .because("JPA Entity sınıfları doğrudan dışarıya açılamaz; DTO kullanılmalıdır.");`,explanation:"ArchUnit kuralı, herhangi bir Controller metodunun dönüş tipinde @Entity paketi bulunmasını derleme anında reddeder."},impact:`Kullanıcı kendi profilini güncellerken JSON payload'ına "isAdmin: true" ekleyerek sistem yöneticisi yetkisi kazanabilir (Mass Assignment).`,deepDiveMarkdown:`### DTO Katmanının Zorunluluğu
1. **Güvenlik:** Şifre, parola sıfırlama token'ları ve iç denetim alanları API yanıtından gizlenir.
2. **Performans:** İhtiyaç duyulmayan devasa ilişkili tablolar çekilmez.
3. **Sürdürülebilirlik:** Veritabanı sütun isimleri değiştiğinde API sözleşmesi bozulmaz.`},{id:"stateful-singleton-concurrency",category:"singleton",categoryLabel:"Singleton & Eşzamanlılık",title:"Spring Singleton Kapsamında Değişken Durum (Mutable State) İhmali",summary:"Spring Bean'leri varsayılan olarak Singlepondur; sınıf içine sayaç veya List koymak eşzamanlı isteklerde veri bozulmasına yol açar.",dangerBadge:"Kritik: Race Condition & Veri Ezilmesi",badCode:{filename:"CalculationService.java (Kusurlu LLM Kodu)",code:`@Service
public class CalculationService {
    // ÖLÜMCÜL TUZAK: Singleton serviste mutable (değişken) sınıf alanı!
    // Tüm kullanıcıların eşzamanlı istekleri aynı List ve Formatter üzerinde çalışır!
    private List<String> auditLogs = new ArrayList<>();
    private SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd"); // Thread-unsafe!

    public void processTransaction(String user, Date date) {
        // Eşzamanlı gelen istekler birbirlerinin loglarını ezer veya ConcurrentModificationException fırlatır!
        auditLogs.add(user + " - " + sdf.format(date));
    }
}`,flawExplanation:"Spring servisleri uygulama boyunca tek bir örneğe (Singleton) sahiptir. Sınıf düzeyinde değişken durum (mutable field) tutulması, çoklu iş parçacıklarında (multi-threading) veri ezilmelerine (Race Condition) yol açar."},goodCode:{filename:"CalculationService.java (Production Çözümü)",code:`@Service
public class CalculationService {
    // ÇÖZÜM 1: Thread-safe DateTimeFormatter (Java 8+) kullanımı
    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ISO_LOCAL_DATE;

    // ÇÖZÜM 2: Durumsuz (Stateless) servis mimarisi. Veriler metot içinde veya veritabanında tutulur.
    public void processTransaction(String user, LocalDate date) {
        String logEntry = user + " - " + date.format(FORMATTER);
        // Durum sınıf alanında tutulmaz, parametre olarak aktarılır veya DB'ye kaydedilir.
    }
}`,fixExplanation:"Servisler tamamen durumsuz (stateless) tasarlanır; tüm sınıf alanları final olarak tanımlanır ve thread-safe sınıflar (java.time) kullanılır."},guardrailCode:{tool:"ArchUnit",filename:"ThreadSafetyArchTest.java",code:`@ArchTest
public static final ArchRule services_must_be_stateless =
    fields().that().areDeclaredInClassesThat().resideInAPackage("..service..")
    .and().areNotStatic()
    .should().beFinal()
    .because("Spring servisleri singleton'dır; değişken durum (mutable state) barındıramaz.");`,explanation:"ArchUnit kuralı, servis sınıflarındaki tüm alanların final olmasını zorunlu kılarak sonradan değiştirilebilir durumları engeller."},impact:"Kullanıcı A'nın faturası Kullanıcı B'nin oturumuna yazılır; banka hesap bakiyeleri eşzamanlı isteklerde sıfırlanır veya şişer.",deepDiveMarkdown:"### Singleton ve Multi-Threading\nTomcat her gelen HTTP isteği için thread havuzundan (Worker Thread) ayrı bir iş parçacığı tahsis eder. Ancak bu 200 iş parçacığının tamamı aynı `CalculationService` nesnesini paylaşır. Bellek senkronizasyonu olmayan paylaşımlı alanlar veri felaketine davetiyedir."},{id:"sql-spel-injection",category:"security",categoryLabel:"Enjeksiyon Saldırıları",title:"Native Query Dize Birleştirme & SpEL Enjeksiyonu",summary:"LLM'ler JPA yerel sorgularında ve dinamik sıralamalarda dize birleştirme (+) kullanarak SQLi ve SpEL açığı üretir.",dangerBadge:"Kritik: Veritabanı Ele Geçirme & RCE",badCode:{filename:"ProductRepository.java (Kusurlu LLM Kodu)",code:`@Repository
public class ProductRepository {
    @PersistenceContext
    private EntityManager em;

    // TUZAK 1: SQL Injection! Parametre bağlama yerine dize birleştirme (+) yapılmış!
    public List<Product> searchProducts(String category) {
        String sql = "SELECT * FROM products WHERE category = '" + category + "'";
        return em.createNativeQuery(sql, Product.class).getResultList();
    }

    // TUZAK 2: SpEL Enjeksiyonu -> Kullanıcı girdisi doğrudan SpelExpressionParser ile çalıştırılıyor!
    public Object evaluateExpression(String userInput) {
        ExpressionParser parser = new SpelExpressionParser();
        return parser.parseExpression(userInput).getValue(); // Uzaktan Kod Çalıştırma (RCE)!
    }
}`,flawExplanation:"Girdi temizliği ve parametreli sorgu (:param) kullanılmadığında saldırgan SQL payload'ları veya T(java.lang.Runtime).getRuntime().exec() komutları enjekte edebilir."},goodCode:{filename:"ProductRepository.java (Production Çözümü)",code:`public interface ProductRepository extends JpaRepository<Product, Long> {
    // ÇÖZÜM 1: Parametreli JPQL / Native Query (SQL Injection İmkansız)
    @Query("SELECT p FROM Product p WHERE p.category = :category")
    List<Product> searchProducts(@Param("category") String category);

    // ÇÖZÜM 2: Beyaz Liste (Whitelist) Doğrulaması ile Dinamik Sıralama
    default Pageable createSafePageable(int page, int size, String sortProperty) {
        Set<String> ALLOWED_SORT_FIELDS = Set.of("name", "price", "createdAt");
        if (!ALLOWED_SORT_FIELDS.contains(sortProperty)) {
            throw new IllegalArgumentException("Geçersiz sıralama alanı!");
        }
        return PageRequest.of(page, size, Sort.by(sortProperty));
    }
}`,fixExplanation:"Adlandırılmış parametreler (@Param) ve sıralama alanları için katı beyaz liste (whitelist) kontrolü uygulanır."},guardrailCode:{tool:"Semgrep",filename:"semgrep-sqli-rules.yml",code:`rules:
  - id: spring-jpa-native-query-concatenation
    languages: [java]
    message: "JPA native sorgularında dize birleştirme (+) SQL Injection'a yol açar!"
    severity: ERROR
    pattern-either:
      - pattern: $EM.createNativeQuery("..." + $VAR + "...", ...)
      - pattern: @Query(value = "..." + $VAR + "...", nativeQuery = true)`,explanation:"Semgrep kuralı, createNativeQuery veya @Query içinde dize birleştirme tespit ettiğinde derlemeyi durdurur."},impact:"Saldırgan veritabanındaki tüm tabloları silebilir (DROP TABLE) veya SpEL ile sunucu işletim sisteminde komut çalıştırabilir.",deepDiveMarkdown:'### SpEL (Spring Expression Language) Zafiyeti\nSpEL, Java çalışma zamanında tam yansıma (reflection) yeteneğine sahiptir. Eğer bir REST uç noktası kullanıcıdan gelen bir şablonu veya kuralı SpEL ile çözümlerse, saldırgan `T(java.lang.Runtime).getRuntime().exec("rm -rf /")` gibi komutları tek satırda tetikleyebilir.'}],Ig=[{id:"aop-self-invocation",category:"aop",categoryLabel:"AOP Proxy & Transactions",title:"AOP Self-Invocation Bypass Trap",summary:'Calling an internal @Transactional method using "this." within the same class bypasses the Spring CGLIB Dynamic Proxy.',dangerBadge:"Critical: Zero Transaction / Silent Data Corruption",badCode:{filename:"OrderService.java (Flawed AI Code)",code:`@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    // Public entrypoint without @Transactional
    public void processOrderBatch(List<OrderRequest> requests) {
        for (OrderRequest req : requests) {
            // PITFALL: Direct internal method call (this.saveSingleOrder)
            // Bypasses the Spring CGLIB Proxy; @Transactional NEVER TRIGGERS!
            this.saveSingleOrder(req);
        }
    }

    @Transactional
    public void saveSingleOrder(OrderRequest req) {
        Order order = new Order(req);
        orderRepository.save(order);
        if (req.getAmount() < 0) {
            // Even when an exception is thrown, no rollback occurs!
            throw new IllegalArgumentException("Invalid amount");
        }
    }
}`,flawExplanation:'Spring applies declarative annotations via dynamic AOP proxy wrappers around beans. Direct "this.method()" calls execute directly on the raw POJO target instance, completely bypassing proxy interceptors.'},goodCode:{filename:"OrderService.java & OrderProcessor.java (Production Fix)",code:`// SOLUTION: Delegate transactional execution to a dedicated bean
@Service
@RequiredArgsConstructor
public class OrderBatchService {
    private final SingleOrderProcessor singleOrderProcessor;

    public void processOrderBatch(List<OrderRequest> requests) {
        for (OrderRequest req : requests) {
            // External bean call -> Spring CGLIB Proxy intercepts -> Starts Transaction!
            singleOrderProcessor.saveSingleOrder(req);
        }
    }
}

@Service
@RequiredArgsConstructor
public class SingleOrderProcessor {
    private final OrderRepository orderRepository;

    @Transactional(rollbackFor = Exception.class)
    public void saveSingleOrder(OrderRequest req) {
        Order order = new Order(req);
        orderRepository.save(order);
        if (req.getAmount() < 0) {
            throw new IllegalArgumentException("Invalid amount");
        }
    }
}`,fixExplanation:"Extracting transactional operations into a separate Spring bean guarantees that all invocations pass through Spring's AOP transaction interceptor."},guardrailCode:{tool:"ArchUnit",filename:"ArchitectureTest.java (CI/CD Quality Gate)",code:`@AnalyzeClasses(packages = "com.mastery.springboot")
public class TransactionRulesTest {

    @ArchTest
    public static final ArchRule transactional_methods_must_be_public =
        methods().that().areAnnotatedWith(Transactional.class)
        .should().bePublic()
        .because("AOP proxies can only intercept public method invocations.");
}`,explanation:"ArchUnit statically verifies that @Transactional annotations adhere to architectural boundaries and proxy accessibility rules during CI."},impact:"Partial database writes are permanently committed. When downstream failures occur, transactions fail to roll back, resulting in corrupted financial/inventory state.",deepDiveMarkdown:"### How AOP Dynamic Proxies Work\nWhen you annotate a Spring bean with `@Transactional`, Spring swaps the raw POJO with a **CGLIB Dynamic Proxy**.\n\n```\nClient -> [ Spring Proxy (Transaction Interceptor: BEGIN TX) ] -> [ Raw Service Bean ] -> [ COMMIT / ROLLBACK ]\n```\n\nIf a method calls another method on `this`, Java bypasses the proxy container entirely. **No transaction is ever created!**"},{id:"checked-exception-rollback",category:"aop",categoryLabel:"AOP Proxy & Transactions",title:"Checked Exception Rollback Omission",summary:"Spring by default only rolls back on RuntimeException and Error. When checked exceptions are thrown, transactions silently commit.",dangerBadge:"High: Silent Commit & Data Inconsistency",badCode:{filename:"PaymentService.java (Flawed AI Code)",code:`@Service
public class PaymentService {
    @Autowired
    private AccountRepository accountRepo;

    // PITFALL: Missing rollbackFor attribute!
    @Transactional
    public void transferMoney(Long fromId, Long toId, BigDecimal amount) throws IOException, SQLException {
        accountRepo.decreaseBalance(fromId, amount);
        
        // External banking gateway or filesystem operation throws checked exception:
        if (externalBankFailed()) {
            throw new IOException("Banking provider unreachable!"); 
            // CAVEAT: Because IOException is a Checked Exception,
            // Spring DOES NOT ROLL BACK! The balance deduction is permanently committed!
        }
        
        accountRepo.increaseBalance(toId, amount);
    }
}`,flawExplanation:"Due to legacy EJB compliance, Spring TransactionManager only rolls back unchecked exceptions by default. LLMs rarely include rollbackFor = Exception.class on methods throwing checked exceptions."},goodCode:{filename:"PaymentService.java (Production Fix)",code:`@Service
@RequiredArgsConstructor
public class PaymentService {
    private final AccountRepository accountRepo;

    // SOLUTION: Explicitly declare rollbackFor = Exception.class
    @Transactional(rollbackFor = Exception.class)
    public void transferMoney(Long fromId, Long toId, BigDecimal amount) throws IOException {
        accountRepo.decreaseBalance(fromId, amount);
        
        if (externalBankFailed()) {
            throw new IOException("Banking provider unreachable!"); 
            // SAFE: Spring triggers rollback across all Exception subclasses.
        }
        
        accountRepo.increaseBalance(toId, amount);
    }
}`,fixExplanation:"Configuring @Transactional(rollbackFor = Exception.class) ensures consistent atomicity across both checked and unchecked exceptions."},guardrailCode:{tool:"Semgrep",filename:"semgrep-spring-rules.yml",code:`rules:
  - id: spring-transactional-missing-rollback-for
    languages: [java]
    message: "@Transactional must specify rollbackFor = Exception.class when throwing checked exceptions."
    severity: WARNING
    pattern: |
      @Transactional
      $RET $FUNC(...) throws $EX { ... }`,explanation:"Semgrep catches methods throwing checked exceptions with unadorned @Transactional annotations in CI/CD."},impact:"Funds are debited without corresponding credits when third-party network or IO failures occur, causing catastrophic ledger discrepancies.",deepDiveMarkdown:"### Spring Rollback Defaults\n* `RuntimeException` -> Rollback triggered ✅\n* `Error` -> Rollback triggered ✅\n* `IOException`, `SQLException`, custom `Exception` -> **SILENTLY COMMITTED (Unexpected Default!) ❌**"},{id:"bola-idor-vulnerability",category:"security",categoryLabel:"API Security & BOLA",title:"Broken Object Level Authorization (BOLA / IDOR)",summary:"AI models query database entities with findById(id) without validating whether the authenticated user is the legitimate resource owner.",dangerBadge:"Critical Security Risk (OWASP API #1)",badCode:{filename:"InvoiceController.java (Flawed AI Code)",code:`@RestController
@RequestMapping("/api/invoices")
public class InvoiceController {
    @Autowired
    private InvoiceRepository invoiceRepo;
    @Autowired
    private InvoiceMapper mapper;

    // PITFALL: Even with authentication enabled, any authenticated user
    // can request /api/invoices/999 to download another tenant's confidential invoice!
    @GetMapping("/{id}")
    public ResponseEntity<InvoiceResponse> getInvoice(@PathVariable Long id) {
        return invoiceRepo.findById(id)
                .map(mapper::toDto)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}`,flawExplanation:"The model assumes general endpoint authentication is sufficient, omitting object-level tenant or user ownership checks."},goodCode:{filename:"InvoiceController.java (Production Fix)",code:`@RestController
@RequestMapping("/api/invoices")
@RequiredArgsConstructor
public class InvoiceController {
    private final InvoiceService invoiceService;

    @GetMapping("/{id}")
    @PreAuthorize("@securityService.isInvoiceOwner(#id, authentication)")
    public ResponseEntity<InvoiceResponse> getInvoice(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails) {
        
        InvoiceResponse response = invoiceService.getInvoiceForUser(id, userDetails.getUsername());
        return ResponseEntity.ok(response);
    }
}

// In repository: findByIdAndTenantId(id, currentTenantId);`,fixExplanation:"Enforcing SpEL method security (@PreAuthorize) alongside multi-tenant repository query filters blocks unauthorized horizontal privilege escalation with 403 Forbidden."},guardrailCode:{tool:"MockMvc Negative Test",filename:"InvoiceSecurityNegativeTest.java",code:`@SpringBootTest
@AutoConfigureMockMvc
public class InvoiceSecurityNegativeTest {
    @Autowired
    private MockMvc mockMvc;

    @Test
    @WithMockUser(username = "attacker_bob", roles = "USER")
    void getInvoice_WhenAccessingOtherUserInvoice_ShouldReturnForbidden() throws Exception {
        // Alice's invoice ID: 101L
        mockMvc.perform(get("/api/invoices/101"))
               .andExpect(status().isForbidden()); // If HTTP 200 is returned, CI build fails!
    }
}`,explanation:"Automated negative MockMvc integration tests simulate adversary behavior to verify that cross-tenant requests are denied."},impact:"Attackers perform horizontal enumeration across sequential IDs to exfiltrate private customer invoices, PII, and financial records.",deepDiveMarkdown:"### Why BOLA is the #1 Vulnerability in AI-Generated Code\nLLMs naturally map path variables directly to repository finders. Verifying resource ownership requires integrating contextual identity tokens (`Principal`) with query filters, which models omit unless explicitly instructed."},{id:"actuator-exposure",category:"security",categoryLabel:"Configuration & Exposure",title:"Spring Boot Actuator Endpoint Overexposure",summary:"AI configs frequently include management.endpoints.web.exposure.include=* which leaks credentials, heapdumps, and enables remote code execution.",dangerBadge:"Critical: RCE & Credential Leakage",badCode:{filename:"application.yml (Flawed AI Config)",code:`management:
  endpoints:
    web:
      exposure:
        # CATASTROPHIC FLAW: Exposes all actuator endpoints to the public internet!
        include: "*"
  endpoint:
    health:
      show-details: always
    env:
      enabled: true
    heapdump:
      enabled: true`,flawExplanation:"Using the asterisk wildcard opens /actuator/env, /actuator/heapdump, and /actuator/beans without authentication, allowing unauthenticated memory extraction."},goodCode:{filename:"application.yml (Production Standard)",code:`management:
  server:
    port: 8081 # Bind Actuator to an isolated internal management port
  endpoints:
    web:
      exposure:
        # Strict minimal whitelist for liveness & Prometheus scraping
        include: "health,info,prometheus"
      base-path: /internal-metrics
  endpoint:
    health:
      show-details: when_authorized
      probes:
        enabled: true
    env:
      enabled: false
    heapdump:
      enabled: false`,fixExplanation:"Only operational health probes are whitelisted, and management traffic is bound to an isolated port."},guardrailCode:{tool:"Config Guard",filename:"ActuatorConfigTest.java",code:`@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ActuatorSecurityTest {
    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void sensitiveEndpoints_MustBeClosed() {
        ResponseEntity<String> envResp = restTemplate.getForEntity("/actuator/env", String.class);
        assertThat(envResp.getStatusCode()).isIn(HttpStatus.NOT_FOUND, HttpStatus.FORBIDDEN, HttpStatus.UNAUTHORIZED);

        ResponseEntity<String> heapResp = restTemplate.getForEntity("/actuator/heapdump", String.class);
        assertThat(heapResp.getStatusCode()).isIn(HttpStatus.NOT_FOUND, HttpStatus.FORBIDDEN);
    }
}`,explanation:"Automated integration tests ensure sensitive operational endpoints are completely inaccessible to external callers."},impact:"Attackers download JVM heap dumps, extract plain-text database passwords, JWT secrets, and AWS access keys within minutes.",deepDiveMarkdown:`### 2024 State of API Exposure Finding
Overexposed Spring Boot Actuator endpoints remain one of the top 3 root causes for automated enterprise cloud credential compromises.`},{id:"n-plus-one-and-osiv",category:"jpa",categoryLabel:"JPA / Hibernate & Performance",title:"N+1 Query Explosion & Open-Session-In-View (OSIV) Exhaustion",summary:"AI code relies on derived queries with lazy relationships, triggering hundreds of subqueries in loops and exhausting HikariCP connection pools.",dangerBadge:"High: DB Connection Pool Starvation",badCode:{filename:"CustomerOrderService.java (Flawed AI Code)",code:`@Service
public class CustomerOrderService {
    @Autowired
    private CustomerRepository customerRepo;

    public List<CustomerSummaryDto> getAllCustomerOrders() {
        // Query 1: select * from customers (returns 100 rows)
        List<Customer> customers = customerRepo.findAll();

        return customers.stream().map(c -> {
            // N QUERIES: Triggers separate "select * from orders where customer_id = ?" for each row!
            // Total: 1 + 100 = 101 SQL queries executed!
            int orderCount = c.getOrders().size(); 
            return new CustomerSummaryDto(c.getName(), orderCount);
        }).toList();
    }
}`,flawExplanation:"Invoking lazy collection getters inside streams triggers separate SQL statements for every parent record. Leaving OSIV enabled locks DB connections until JSON rendering concludes."},goodCode:{filename:"CustomerRepository.java (Production Fix)",code:`public interface CustomerRepository extends JpaRepository<Customer, Long> {
    // FIX 1: Explicit JOIN FETCH reduces queries to a single roundtrip
    @Query("SELECT DISTINCT c FROM Customer c LEFT JOIN FETCH c.orders")
    List<Customer> findAllWithOrders();

    // FIX 2 (Highest Performance): Direct DTO Constructor Projection
    @Query("SELECT new com.mastery.dto.CustomerSummaryDto(c.name, COUNT(o)) " +
           "FROM Customer c LEFT JOIN c.orders o GROUP BY c.id, c.name")
    List<CustomerSummaryDto> fetchCustomerSummaries();
}

// In application.yml:
// spring.jpa.open-in-view: false`,fixExplanation:"JOIN FETCH or direct JPQL constructor expressions collapse N+1 roundtrips into a single query while disabling OSIV."},guardrailCode:{tool:"ArchUnit",filename:"JpaPerformanceRulesTest.java",code:`// QuickPerf SQL query assertion
@Test
@ExpectQueries(max = 1) // Fails build if more than 1 query is executed
void getAllCustomerOrders_ShouldExecuteSingleQuery() {
    customerOrderService.getAllCustomerOrders();
}`,explanation:"QuickPerf assertions enforce strict SQL query count budgets during CI integration testing."},impact:"Database CPU spikes to 100%, HikariCP pools exhaust all worker connections, and application endpoints fail with HTTP 504 Gateway Timeouts.",deepDiveMarkdown:`### Why OSIV Must Be Disabled
With Open-Session-In-View active, database connections are held open through Controller execution and Jackson serialization, causing massive connection starvation under concurrent load.`},{id:"entity-exposure-mass-assignment",category:"jpa",categoryLabel:"JPA & Clean Architecture",title:"Direct Entity Exposure & Mass Assignment Vulnerabilities",summary:"Returning @Entity models directly from @RestController methods leaks sensitive fields, causes cyclical Jackson recursion, and enables privilege escalation.",dangerBadge:"High: Information Disclosure & Mass Assignment",badCode:{filename:"UserController.java (Flawed AI Code)",code:`@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserRepository userRepo;

    // PITFALL 1: Direct entity exposure leaks password hashes & internal metadata
    // PITFALL 2: Bidirectional relationships cause Jackson infinite serialization loops!
    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userRepo.findById(id).orElseThrow();
    }

    // PITFALL 3: Mass Assignment -> Client can inject "role: ADMIN" in JSON body!
    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User userUpdate) {
        userUpdate.setId(id);
        return userRepo.save(userUpdate);
    }
}`,flawExplanation:"JPA Entities represent internal persistence models, not API contracts. Binding request bodies directly to entities enables unauthorized property modification."},goodCode:{filename:"UserController.java & UserDto.java (Production Fix)",code:`@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<UserResponseDto> getUser(@PathVariable Long id) {
        UserResponseDto dto = userService.getUserById(id);
        return ResponseEntity.ok(dto); // Sanitized DTO response
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserResponseDto> updateUser(
            @PathVariable Long id,
            @Valid @RequestBody UserUpdateRequestDto request) {
        UserResponseDto updated = userService.updateUser(id, request);
        return ResponseEntity.ok(updated);
    }
}`,fixExplanation:"Decoupling API contracts with strict DTO records and validation ensures clean schema isolation and prevents mass assignment."},guardrailCode:{tool:"ArchUnit",filename:"LayeringArchTest.java",code:`@ArchTest
public static final ArchRule controllers_must_not_return_entities =
    methods().that().areDeclaredInClassesThat().resideInAPackage("..controller..")
    .should().notHaveRawReturnType(resideInAPackage("..entity.."))
    .because("JPA Entity classes must not be exposed outside controller endpoints; use DTOs.");`,explanation:"ArchUnit statically prohibits controller methods from returning raw JPA Entity types."},impact:"Attackers escalate privileges by submitting JSON payloads containing unauthorized administrative flags or internal tenant IDs.",deepDiveMarkdown:`### Enterprise DTO Best Practices
1. **Security:** Omit credential hashes, MFA secrets, and audit metadata.
2. **Performance:** Eliminate cyclic object graphs and unnecessary relationship fetching.
3. **Contract Stability:** Isolate public API contracts from underlying database schema refactors.`},{id:"stateful-singleton-concurrency",category:"singleton",categoryLabel:"Singleton & Concurrency",title:"Mutable State in Spring Singletons",summary:"Spring beans are singletons by default. Defining mutable fields or thread-unsafe utilities like SimpleDateFormat causes severe race conditions.",dangerBadge:"Critical: Race Condition & Data Corruption",badCode:{filename:"CalculationService.java (Flawed AI Code)",code:`@Service
public class CalculationService {
    // DEADLY PITFALL: Mutable instance fields inside a Singleton bean!
    // Concurrent client threads mutate shared state without synchronization!
    private List<String> auditLogs = new ArrayList<>();
    private SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd"); // Thread-unsafe!

    public void processTransaction(String user, Date date) {
        // Concurrent requests corrupt list pointers and throw ConcurrentModificationException!
        auditLogs.add(user + " - " + sdf.format(date));
    }
}`,flawExplanation:"Spring services are singletons shared across hundreds of worker threads. Mutable instance variables lead to race conditions and cross-request data leaks."},goodCode:{filename:"CalculationService.java (Production Fix)",code:`@Service
public class CalculationService {
    // FIX 1: Immutable and Thread-safe Java 8+ DateTimeFormatter
    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ISO_LOCAL_DATE;

    // FIX 2: Completely stateless service design. State belongs in local scope or database.
    public void processTransaction(String user, LocalDate date) {
        String logEntry = user + " - " + date.format(FORMATTER);
        // State is passed via method parameters or written to persistence
    }
}`,fixExplanation:"Services must remain completely stateless with final dependencies, utilizing thread-safe java.time utilities."},guardrailCode:{tool:"ArchUnit",filename:"ThreadSafetyArchTest.java",code:`@ArchTest
public static final ArchRule services_must_be_stateless =
    fields().that().areDeclaredInClassesThat().resideInAPackage("..service..")
    .and().areNotStatic()
    .should().beFinal()
    .because("Spring service beans are singletons and must remain completely stateless.");`,explanation:"ArchUnit verifies that non-static service fields are immutable (final) to prevent concurrency defects."},impact:"User A's financial data is written to User B's ledger, or server threads crash with unhandled ConcurrentModificationExceptions.",deepDiveMarkdown:`### Singleton Lifecycle & Tomcat Worker Threads
Tomcat dispatches requests across separate worker threads. However, all threads access the exact same singleton instance. Mutable state without explicit thread synchronization causes non-deterministic race conditions.`},{id:"sql-spel-injection",category:"security",categoryLabel:"Injection Attacks",title:"Native Query Concatenation & SpEL Injection",summary:"AI models construct dynamic JPA native queries and SpEL evaluations using string concatenation, enabling SQLi and Remote Code Execution (RCE).",dangerBadge:"Critical: Full Database Takeover & RCE",badCode:{filename:"ProductRepository.java (Flawed AI Code)",code:`@Repository
public class ProductRepository {
    @PersistenceContext
    private EntityManager em;

    // PITFALL 1: SQL Injection via raw string concatenation (+)
    public List<Product> searchProducts(String category) {
        String sql = "SELECT * FROM products WHERE category = '" + category + "'";
        return em.createNativeQuery(sql, Product.class).getResultList();
    }

    // PITFALL 2: SpEL Expression Injection -> Directly evaluating raw user input!
    public Object evaluateExpression(String userInput) {
        ExpressionParser parser = new SpelExpressionParser();
        return parser.parseExpression(userInput).getValue(); // Remote Code Execution (RCE)!
    }
}`,flawExplanation:"Concatenating unsanitized input into native queries or evaluating untrusted strings via SpelExpressionParser enables arbitrary SQL execution and JVM command injection."},goodCode:{filename:"ProductRepository.java (Production Fix)",code:`public interface ProductRepository extends JpaRepository<Product, Long> {
    // FIX 1: Named query parameters neutralize SQL Injection
    @Query("SELECT p FROM Product p WHERE p.category = :category")
    List<Product> searchProducts(@Param("category") String category);

    // FIX 2: Whitelist validation for dynamic sorting
    default Pageable createSafePageable(int page, int size, String sortProperty) {
        Set<String> ALLOWED_SORT_FIELDS = Set.of("name", "price", "createdAt");
        if (!ALLOWED_SORT_FIELDS.contains(sortProperty)) {
            throw new IllegalArgumentException("Invalid sort field!");
        }
        return PageRequest.of(page, size, Sort.by(sortProperty));
    }
}`,fixExplanation:"Utilizing named parameters (@Param) and strict field whitelisting prevents injection vulnerabilities."},guardrailCode:{tool:"Semgrep",filename:"semgrep-sqli-rules.yml",code:`rules:
  - id: spring-jpa-native-query-concatenation
    languages: [java]
    message: "String concatenation inside JPA native queries leads to SQL Injection!"
    severity: ERROR
    pattern-either:
      - pattern: $EM.createNativeQuery("..." + $VAR + "...", ...)
      - pattern: @Query(value = "..." + $VAR + "...", nativeQuery = true)`,explanation:"Semgrep halts builds upon detecting string concatenation within native queries."},impact:"Attackers drop database schemas or execute shell commands on the host OS via Java reflection within SpEL.",deepDiveMarkdown:'### SpEL Reflection Capabilities\nSpring Expression Language has unrestricted access to Java reflection. Evaluating unvetted user expressions enables payload injection like `T(java.lang.Runtime).getRuntime().exec("rm -rf /")`.'}],Dg=[{id:"rule-no-entities-in-controllers",title:"Controller Katmanı Entity Döndüremez",category:"Mimari İzolasyon",description:"JPA Entity sınıflarının doğrudan REST Controller metotlarından dönmesini engelleyerek DTO kullanımını zorunlu kılar.",code:`@ArchTest
public static final ArchRule controllers_must_not_return_entities =
    methods().that().areDeclaredInClassesThat().resideInAPackage("..controller..")
    .should().notHaveRawReturnType(resideInAPackage("..entity.."))
    .because("JPA Entity sınıfları doğrudan dışarıya açılamaz; DTO kullanılmalıdır.");`,purpose:"Mass Assignment ve döngüsel serileştirme (StackOverflow) risklerini CI aşamasında önler."},{id:"rule-services-stateless",title:"Servisler Durumsuz (Stateless & Final) Olmalıdır",category:"Thread Safety",description:'Spring @Service sınıflarındaki tüm statik olmayan alanların "final" olmasını zorunlu tutarak Singleton thread safety sağlar.',code:`@ArchTest
public static final ArchRule services_must_be_stateless =
    fields().that().areDeclaredInClassesThat().resideInAPackage("..service..")
    .and().areNotStatic()
    .should().beFinal()
    .because("Spring servisleri singleton'dır; değişken durum (mutable state) barındıramaz.");`,purpose:"Çoklu iş parçacığı (multi-threading) altında veri ezilmesi ve race condition risklerini sıfırlar."},{id:"rule-layered-architecture",title:"Katı Katman Bağımlılık Hiyerarşisi",category:"Clean Architecture",description:"Controller sadece Service'e erişebilir; Controller doğrudan Repository katmanına erişemez.",code:`@ArchTest
public static final ArchRule layered_architecture_must_be_respected =
    layeredArchitecture()
    .consideringAllDependencies()
    .layer("Controller").definedBy("..controller..")
    .layer("Service").definedBy("..service..")
    .layer("Persistence").definedBy("..repository..")
    .whereLayer("Controller").mayNotBeAccessedByAnyLayer()
    .whereLayer("Service").mayOnlyBeAccessedByLayers("Controller")
    .whereLayer("Persistence").mayOnlyBeAccessedByLayers("Service");`,purpose:"İş kurallarının Controller içine sızmasını engeller, gevşek kuplaj sağlar."},{id:"rule-transactional-public",title:"@Transactional Metotlar Public Olmalıdır",category:"AOP Proxy Bütünlüğü",description:"CGLIB Proxy sınıflarının private/final metotları override edememe zaafını yakalar.",code:`@ArchTest
public static final ArchRule transactional_methods_must_be_public =
    methods().that().areAnnotatedWith(Transactional.class)
    .should().bePublic()
    .because("Spring AOP Proxy'leri yalnızca public metotlara transaction uygulayabilir.");`,purpose:"Sessizce çalışmayan etkisiz @Transactional metotlarını derleme anında engeller."}],Mg=[{id:"rule-no-entities-in-controllers",title:"Controllers Must Not Return Entities",category:"Architectural Isolation",description:"Prohibits JPA Entity classes from being returned directly by REST Controller methods, enforcing strict DTO usage.",code:`@ArchTest
public static final ArchRule controllers_must_not_return_entities =
    methods().that().areDeclaredInClassesThat().resideInAPackage("..controller..")
    .should().notHaveRawReturnType(resideInAPackage("..entity.."))
    .because("JPA Entity classes must not be exposed outside controller endpoints; use DTOs.");`,purpose:"Eliminates Mass Assignment and cyclical JSON serialization errors during CI builds."},{id:"rule-services-stateless",title:"Services Must Be Stateless (Immutable Fields)",category:"Thread Safety",description:'Requires all non-static fields within @Service beans to be marked "final", enforcing thread-safe singleton design.',code:`@ArchTest
public static final ArchRule services_must_be_stateless =
    fields().that().areDeclaredInClassesThat().resideInAPackage("..service..")
    .and().areNotStatic()
    .should().beFinal()
    .because("Spring service beans are singletons and must remain completely stateless.");`,purpose:"Guarantees thread-safety and prevents race conditions under high concurrent traffic."},{id:"rule-layered-architecture",title:"Strict Layered Architectural Boundaries",category:"Clean Architecture",description:"Ensures controllers only communicate with services, preventing direct repository access from presentation layers.",code:`@ArchTest
public static final ArchRule layered_architecture_must_be_respected =
    layeredArchitecture()
    .consideringAllDependencies()
    .layer("Controller").definedBy("..controller..")
    .layer("Service").definedBy("..service..")
    .layer("Persistence").definedBy("..repository..")
    .whereLayer("Controller").mayNotBeAccessedByAnyLayer()
    .whereLayer("Service").mayOnlyBeAccessedByLayers("Controller")
    .whereLayer("Persistence").mayOnlyBeAccessedByLayers("Service");`,purpose:"Prevents business logic leakage into controllers and ensures maintainable decoupling."},{id:"rule-transactional-public",title:"@Transactional Methods Must Be Public",category:"AOP Proxy Integrity",description:"Verifies that transactional methods can be intercepted by CGLIB dynamic subclassing proxies.",code:`@ArchTest
public static final ArchRule transactional_methods_must_be_public =
    methods().that().areAnnotatedWith(Transactional.class)
    .should().bePublic()
    .because("Spring AOP proxies can only intercept public method invocations.");`,purpose:"Catches silent runtime transaction failures caused by private/final annotations."}],Og=[{id:"ai-pr-reviewer",title:"Spring Boot Güvenlik & AOP PR Denetçi İstemi (AI Code Reviewer)",targetRole:"GitHub Actions / GitLab CI LLM Botu",description:"Yapay zekâ tarafından üretilen PR'ları AOP proxy baypası, BOLA yetkilendirme açığı ve N+1 sorgu yönünden tarayan uzman denetçi istemi.",systemPrompt:`Sen kıdemli bir Kurumsal Spring Boot ve Uygulama Güvenliği (AppSec) Denetçisisin.
Sana iletilen Java / Spring Boot kod diff'lerini aşağıdaki 5 tavizsiz kurala göre incele:

1. [AOP PROXY KONTROLÜ]: Aynı sınıf içinde "this.metot()" şeklinde @Transactional, @Async veya @Cacheable metot çağrısı var mı? (Varsa CRITICAL bildir).
2. [ROLLBACK KONTROLÜ]: @Transactional anotasyonlarında "rollbackFor = Exception.class" eksik bırakılmış ve metot Checked Exception fırlatıyor mu?
3. [BOLA / IDOR]: Veritabanından findById(id) ile nesne çeken uç noktalarda kimlik doğrulaması yapılmış kullanıcının (Principal/Tenant) sahiplik denetimi eksik mi?
4. [PERFORMANS & JPA]: Döngü içinde lazy getter çağrısı veya N+1 sorgu riski var mı? JOIN FETCH veya DTO projection öner.
5. [SINGLETON GÜVENLİĞİ]: @Service veya @RestController sınıflarında "final" olmayan değişken alan (mutable state) var mı?

Bulduğun her kusur için:
- 🔴 Kusurlu Satır & Açıklama
- 🛡️ Güvenlik/Mimari Etkisi
- 🟢 Düzeltilmiş Güvenli Kod Bloğu formatında yanıt üret.`,exampleFinding:"OrderService.java:24 satırında this.saveSingleOrder(req) çağrısı tespit edildi. Spring AOP proxy'si baypas edildiği için işlem rollback yapmayacaktır."},{id:"threat-model-extractor",title:"Otomatik Tehdit Modellemesi & Yetkilendirme Matrisi Çıkarıcı",targetRole:"API Güvenlik & Swagger Denetçisi",description:"REST Controller ve OpenAPI şemalarından anonim, rol bazlı ve nesne düzeyinde sahiplik gerektiren uç noktaları ayrıştıran tehdit modelleyici.",systemPrompt:`Aşağıdaki Spring Boot Controller ve SecurityFilterChain kodlarını analiz ederek bir Yetkilendirme ve Tehdit Matrisi çıkar:

Tablo Sütunları:
- HTTP Yöntemi & Uç Nokta Yolu
- Erişim Seviyesi (permitAll / hasRole / Object-Level Ownership)
- BOLA Riski (Yüksek / Orta / Düşük)
- Gerekli Güvenlik Anotasyonu (@PreAuthorize)

Özellikle ID parametresi alan GET/PUT/DELETE uç noktalarında kullanıcı sahiplik filtresinin bulunup bulunmadığını vurgula.`,exampleFinding:`GET /api/invoices/{id} uç noktası sadece @PreAuthorize("hasRole('USER')") içeriyor; ancak BOLA koruması eksik. Kullanıcı başkasının fatura ID'sine erişebilir.`}],Lg=[{id:"ai-pr-reviewer",title:"Spring Boot Security & AOP PR Reviewer Prompt",targetRole:"GitHub Actions / GitLab CI LLM Bot",description:"Specialized system prompt to audit Spring Boot PRs for AOP bypasses, BOLA vulnerabilities, and N+1 query patterns.",systemPrompt:`You are a Principal Spring Boot and Application Security (AppSec) Auditor.
Audit the provided Java/Spring Boot code diff against these 5 strict architectural rules:

1. [AOP PROXY CHECK]: Does the code contain self-invocation (this.method()) calling @Transactional, @Async, or @Cacheable? (Flag as CRITICAL).
2. [ROLLBACK CHECK]: Does @Transactional lack "rollbackFor = Exception.class" on methods throwing checked exceptions?
3. [BOLA / IDOR]: Does findById(id) lack resource ownership/tenant verification against the authenticated Principal?
4. [PERFORMANCE & JPA]: Are lazy collections accessed within loops without JOIN FETCH or DTO projections?
5. [SINGLETON SAFETY]: Are there mutable, non-final fields inside @Service or @RestController singleton beans?

For every finding provide:
- 🔴 Flawed Line & Vulnerability
- 🛡️ Architectural/Security Impact
- 🟢 Hardened Production Code Fix.`,exampleFinding:"OrderService.java:24 invokes this.saveSingleOrder(req). AOP dynamic proxy is bypassed, completely disabling transaction rollback."},{id:"threat-model-extractor",title:"Automated Threat Modeling & Authorization Matrix Generator",targetRole:"API Security & OpenAPI Auditor",description:"Extracts comprehensive endpoint permission matrices from Controller definitions to identify missing object-level authorization checks.",systemPrompt:`Analyze the provided Spring Boot Controllers and SecurityFilterChain configuration to construct an Authorization Threat Matrix:

Table Columns:
- HTTP Method & Path
- Access Level (permitAll / hasRole / Object-Level Ownership)
- BOLA Risk Rating (High / Medium / Low)
- Required Security Guardrail (@PreAuthorize)

Highlight any parameterized GET/PUT/DELETE endpoints missing user/tenant ownership filters.`,exampleFinding:"GET /api/invoices/{id} is protected only by role-based access; object-level tenant ownership is missing, exposing horizontal IDOR."}],zg=[{area:"BOLA / IDOR",badPattern:"findById(id) çağrısında sahiplik veya kiracı kontrolü yapmamak.",impact:"Yetkisiz veri erişimi, veri sızıntısı ve veri tahrifatı.",tool:"DAST (StackHawk, OWASP ZAP), Semgrep",aiVerification:"OpenAPI analizi ile yetkilendirme matrisi çıkarma; Negatif MockMvc testleri."},{area:"AOP Self-Invocation",badPattern:"Servis içi this.transactionalMethod() çağrısı.",impact:"İşlemin başlatılamaması, sessiz veri tutarsızlığı.",tool:"ArchUnit, SonarQube",aiVerification:"Soyut sözdizim ağacı (AST) analiziyle sınıf içi çağrı taraması."},{area:"Checked Exception Rollback",badPattern:"@Transactional yazıp rollbackFor parametresini atlamak.",impact:"Hata anında veri tabanı geri almasının çalışmaması.",tool:"Semgrep özel kuralı, SonarQube",aiVerification:"Kod inceleme promptuyla istisna yönetimi denetimi."},{area:"Actuator İfşası",badPattern:"exposure.include=* ile tüm portları dışarı açmak.",impact:"Çevre değişkenleri, parola ve bellek dökümü sızıntısı.",tool:"Checkov, Trivy, Kube-bench",aiVerification:"application.yml yapılandırma doğrulama istemi."},{area:"N+1 Sorgu Problemi",badPattern:"İlişkili varlıkları döngüde lazy getter ile çağırmak.",impact:"Veri tabanı darboğazı, yüksek gecikme (latency).",tool:"Hibernate sorgu logları, QuickPerf",aiVerification:"JPA repository çağrılarında JOIN FETCH varlık kontrolü."},{area:"Entity İfşası",badPattern:"@RestController metodundan doğrudan JPA Entity dönmek.",impact:"Aşırı veri ifşası (Mass Assignment), döngüsel çökme.",tool:"ArchUnit",aiVerification:"Metot dönüş tiplerinde paket kontrolü (Entity vs DTO)."},{area:"Stateful Singleton",badPattern:"@Service içine private List<Data> tanımlamak.",impact:"Çoklu iş parçacığında veri ezilmesi (race condition).",tool:"ArchUnit, SpotBugs",aiVerification:"Değişken alanların final olup olmadığının denetimi."},{area:"SQL Enjeksiyonu",badPattern:"@Query(nativeQuery = true) içine + input eklemek.",impact:"Veri tabanının tamamen ele geçirilmesi.",tool:"CodeQL, Semgrep, Snyk Code",aiVerification:"Taint analizi ve parametreli sorgu kontrolü."}],Bg=[{area:"BOLA / IDOR",badPattern:"Missing user/tenant ownership filters in findById(id) queries.",impact:"Unauthorized cross-tenant data access and tampering.",tool:"DAST (StackHawk, OWASP ZAP), Semgrep",aiVerification:"OpenAPI authorization matrix synthesis; Negative MockMvc integration tests."},{area:"AOP Self-Invocation",badPattern:"Invoking this.transactionalMethod() within the same service bean.",impact:"Transaction proxy bypass, silent data inconsistency.",tool:"ArchUnit, SonarQube",aiVerification:"AST analysis scanning for internal method invocations."},{area:"Checked Exception Rollback",badPattern:"Omitting rollbackFor attribute on checked exception methods.",impact:"Transactions commit despite thrown checked exceptions.",tool:"Semgrep custom rules, SonarQube",aiVerification:"AI Code Review prompt verifying exception hierarchy handling."},{area:"Actuator Exposure",badPattern:"Opening all endpoints via exposure.include=* in configuration.",impact:"Plain-text environment secret and heap memory extraction.",tool:"Checkov, Trivy, Kube-bench",aiVerification:"application.yml static inspection and container probe testing."},{area:"N+1 Query Explosion",badPattern:"Iterating through lazy entity getters in application loops.",impact:"Database connection pool starvation and high request latency.",tool:"Hibernate query logging, QuickPerf",aiVerification:"JPA repository scan enforcing JOIN FETCH and DTO constructors."},{area:"Entity Exposure",badPattern:"Returning JPA @Entity models directly from @RestController methods.",impact:"Mass Assignment privilege escalation and JSON recursion crashes.",tool:"ArchUnit",aiVerification:"Controller return type package boundary verification (Entity vs DTO)."},{area:"Stateful Singleton",badPattern:"Declaring mutable instance collections inside singleton @Service beans.",impact:"Non-deterministic race conditions across concurrent HTTP worker threads.",tool:"ArchUnit, SpotBugs",aiVerification:"Static validation ensuring all non-static service fields are final."},{area:"SQL Injection",badPattern:"String concatenation (+) in @Query(nativeQuery = true) statements.",impact:"Arbitrary database execution and full schema compromise.",tool:"CodeQL, Semgrep, Snyk Code",aiVerification:"Taint tracking and parameter binding enforcement (:param)."}];function Ou(d){return{patterns:d==="tr"?Rg:Ig,archUnitRules:d==="tr"?Dg:Mg,promptGuardrails:d==="tr"?Og:Lg,auditMatrix:d==="tr"?zg:Bg,sources:Pg}}const Ug=({isOpen:d,onClose:c,onSelectLesson:u,onSelectRecipe:b,onSelectVibeCoding:j,onGoToQuiz:y})=>{const[A,C]=F.useState(""),k=F.useRef(null),{language:N,t:J}=Ke(),U=Ou(N);if(F.useEffect(()=>{d?setTimeout(()=>{var M;return(M=k.current)==null?void 0:M.focus()},50):C("")},[d]),F.useEffect(()=>{const M=de=>{de.key==="Escape"&&d&&c(),(de.metaKey||de.ctrlKey)&&de.key==="k"&&(de.preventDefault(),d&&c())};return window.addEventListener("keydown",M),()=>window.removeEventListener("keydown",M)},[d,c]),!d)return null;const I=A.toLowerCase().trim(),T=I?U.patterns.filter(M=>M.title.toLowerCase().includes(I)||M.summary.toLowerCase().includes(I)||M.categoryLabel.toLowerCase().includes(I)||M.impact.toLowerCase().includes(I)):[],B=I?xo.filter(M=>M.title.toLowerCase().includes(I)||M.overview.toLowerCase().includes(I)||M.category.toLowerCase().includes(I)||M.sections.some(de=>de.title.toLowerCase().includes(I)||de.content.toLowerCase().includes(I))):[],E=I?lo.filter(M=>M.title.toLowerCase().includes(I)||M.description.toLowerCase().includes(I)||M.tags.some(de=>de.toLowerCase().includes(I))):[],S=I?Ng.filter(M=>M.question.toLowerCase().includes(I)||M.springConcept.toLowerCase().includes(I)||M.explanation.toLowerCase().includes(I)):[],ee=B.length>0||E.length>0||S.length>0||T.length>0;return n.jsx("div",{className:"fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200",children:n.jsxs("div",{className:"w-full max-w-2xl bg-slate-900 border border-slate-700/70 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]",children:[n.jsxs("div",{className:"flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-900/90",children:[n.jsx(ho,{className:"w-5 h-5 text-emerald-400 mr-3 shrink-0"}),n.jsx("input",{ref:k,type:"text",placeholder:J.search.placeholder,value:A,onChange:M=>C(M.target.value),className:"w-full bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none text-sm font-sans"}),A&&n.jsx("button",{onClick:()=>C(""),className:"p-1 hover:text-white text-slate-400 mr-1",children:n.jsx(vo,{className:"w-4 h-4"})}),n.jsx("kbd",{className:"hidden sm:inline-block px-2 py-0.5 text-xs text-slate-400 bg-slate-800 border border-slate-700 rounded font-mono",children:"ESC"})]}),n.jsxs("div",{className:"overflow-y-auto p-4 space-y-4",children:[!A&&n.jsxs("div",{className:"text-center py-8 text-slate-500 text-sm",children:[n.jsx("p",{children:J.search.placeholder}),n.jsx("div",{className:"flex flex-wrap justify-center gap-2 mt-3",children:["Security & JWT","Spring Data JPA","N+1 Query Problem","Docker","@Valid","Bean Scopes"].map(M=>n.jsx("button",{onClick:()=>C(M),className:"text-xs px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700/60",children:M},M))})]}),A&&!ee&&n.jsx("div",{className:"text-center py-10 text-slate-500",children:n.jsxs("p",{className:"text-base font-medium text-slate-400",children:['"',A,'" ',J.search.noResults]})}),T.length>0&&n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-teal-400 uppercase tracking-wider mb-2",children:[n.jsx(At,{className:"w-3.5 h-3.5"}),"Vibe Coding & AI Guardrails (",T.length,")"]}),n.jsx("div",{className:"space-y-1.5",children:T.map(M=>n.jsxs("button",{onClick:()=>{j?j():window.location.hash="vibe-coding",c()},className:"w-full text-left p-3 rounded-xl bg-slate-800/60 hover:bg-teal-950/40 hover:border-teal-500/40 border border-slate-800 transition-all group flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-semibold text-slate-200 group-hover:text-teal-300",children:M.title}),n.jsx("div",{className:"text-xs text-slate-400 line-clamp-1 mt-0.5",children:M.summary})]}),n.jsx(Mt,{className:"w-4 h-4 text-slate-500 group-hover:text-teal-400 group-hover:translate-x-0.5 transition-transform"})]},M.id))})]}),B.length>0&&n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2",children:[n.jsx(Gn,{className:"w-3.5 h-3.5"}),J.search.tabModules," (",B.length,")"]}),n.jsx("div",{className:"space-y-1.5",children:B.map(M=>n.jsxs("button",{onClick:()=>{u(M.id),c()},className:"w-full text-left p-3 rounded-xl bg-slate-800/60 hover:bg-emerald-950/40 hover:border-emerald-500/40 border border-slate-800 transition-all group flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"text-sm font-semibold text-slate-200 group-hover:text-emerald-300",children:[M.number,". ",M.title]}),n.jsx("div",{className:"text-xs text-slate-400 line-clamp-1 mt-0.5",children:M.subtitle})]}),n.jsx(Mt,{className:"w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-transform"})]},M.id))})]}),E.length>0&&n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2",children:[n.jsx(ag,{className:"w-3.5 h-3.5"}),J.search.tabRecipes," (",E.length,")"]}),n.jsx("div",{className:"space-y-1.5",children:E.map(M=>n.jsxs("button",{onClick:()=>{b(M.id),c()},className:"w-full text-left p-3 rounded-xl bg-slate-800/60 hover:bg-amber-950/30 hover:border-amber-500/40 border border-slate-800 transition-all group flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-semibold text-slate-200 group-hover:text-amber-300",children:M.title}),n.jsx("div",{className:"text-xs text-slate-400 line-clamp-1 mt-0.5",children:M.description})]}),n.jsx("span",{className:"text-xs px-2 py-0.5 rounded bg-slate-700/60 text-slate-300",children:M.category})]},M.id))})]}),S.length>0&&n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2",children:[n.jsx(_d,{className:"w-3.5 h-3.5"}),J.search.tabQuiz," (",S.length,")"]}),n.jsx("div",{className:"space-y-1.5",children:S.slice(0,3).map(M=>n.jsxs("button",{onClick:()=>{y(),c()},className:"w-full text-left p-3 rounded-xl bg-slate-800/60 hover:bg-purple-950/30 hover:border-purple-500/40 border border-slate-800 transition-all group flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-xs text-purple-400 font-medium",children:M.springConcept}),n.jsx("div",{className:"text-sm text-slate-200 line-clamp-1 mt-0.5",children:M.question})]}),n.jsx(Mt,{className:"w-4 h-4 text-slate-500 group-hover:text-purple-400"})]},M.id))})]})]})]})})},_g=d=>d.replace(/\/\*[\s\S]*?\*\//g,"").replace(/\/\/.*$/gm,"").trim(),Fg=[{id:"challenge-1-rest-controller",title:"1. Görev: İlk @RestController ve @GetMapping Metodunu Yaz",difficulty:"Başlangıç",category:"Spring MVC & REST",description:'Bir selamlama servisi için Spring Boot REST Controller sınıfı oluşturun. İstemciden gelen "name" parametresini karşılayarak JSON formatında selamlama mesajı döndürün.',instructions:["GreetingController sınıfının üzerine `@RestController` anotasyonunu ekleyin.",'Sınıf seviyesinde kök yol olarak `@RequestMapping("/api/v1")` tanımlayın.','Metodun üzerine `@GetMapping("/greet")` anotasyonu koyun.','Metot parametresine `@RequestParam` anotasyonu ekleyin (örn: `@RequestParam(defaultValue = "Dünya") String name`).','Metot gövdesinde `return ResponseEntity.ok(Map.of("message", "Merhaba " + name));` döndürün.'],filename:"GreetingController.java",initialCode:`package com.example.mastery.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

// 1. Buraya sınıf anotasyonlarını ekleyin
public class GreetingController {

    // 2. Buraya metot anotasyonunu ve parametre anotasyonunu ekleyin
    public ResponseEntity<Map<String, String>> greet(String name) {
        // 3. Buraya geri dönüş kodunu yazın
        return null;
    }
}`,solutionCode:`package com.example.mastery.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class GreetingController {

    @GetMapping("/greet")
    public ResponseEntity<Map<String, String>> greet(@RequestParam(defaultValue = "Dünya") String name) {
        return ResponseEntity.ok(Map.of("message", "Merhaba " + name));
    }
}`,testCheckers:[{description:"@RestController sınıf anotasyonu yazılmış mı?",validate:d=>({passed:/@RestController\s+(?:@\w+(?:\([^)]*\))?\s+)*public\s+class\s+GreetingController/i.test(d)||/@RestController[\s\S]*?class\s+GreetingController/.test(d),error:"GreetingController sınıfının hemen üzerinde @RestController anotasyonu bulunamadı!"})},{description:'@RequestMapping("/api/v1") sınıf yolu tanımlanmış mı?',validate:d=>({passed:/@RequestMapping\s*\(\s*["']\/api\/v1["']\s*\)[\s\S]*?class\s+GreetingController/.test(d),error:'Sınıf seviyesinde @RequestMapping("/api/v1") anotasyonu eksik!'})},{description:'@GetMapping("/greet") metot eşlemesi yapılmış mı?',validate:d=>({passed:/@GetMapping\s*\(\s*["']\/greet["']\s*\)\s*(?:public\s+)?ResponseEntity/.test(d)||/@GetMapping\s*\(\s*["']\/greet["']\s*\)/.test(d),error:'greet(...) metodunun üzerinde @GetMapping("/greet") anotasyonu eksik!'})},{description:"@RequestParam parametresi doğru tanımlanmış mı?",validate:d=>({passed:/@RequestParam(?:\s*\([^)]*\))?\s+String\s+name/.test(d),error:"greet metodu parametresinde `@RequestParam String name` tanımı eksik!"})},{description:"Metot geçerli ResponseEntity veya Map cevabı döndürüyor mu?",validate:d=>({passed:/return\s+ResponseEntity\.ok\s*\(|return\s+Map\.of\s*\(/i.test(d),error:'Metot `return ResponseEntity.ok(Map.of("message", "Merhaba " + name));` şeklinde geçerli bir yanıt döndürmelidir!'})}],simulatedEndpoint:{method:"GET",path:"/api/v1/greet?name=SpringGeliştirici",successBody:{message:"Merhaba SpringGeliştirici",timestamp:"2026-09-27T00:20:00Z",status:200}}},{id:"challenge-2-constructor-injection",title:"2. Görev: Constructor Injection ile Service Katmanı",difficulty:"Başlangıç",category:"IoC & Dependency Injection",description:"Spring Boot standartlarına uygun olarak field injection yerine immutable constructor injection kullanarak UserRepository bağımlılığını UserService sınıfına bağlayın.",instructions:["UserService sınıfının üzerine `@Service` anotasyonunu ekleyin.","Sınıf içine `private final UserRepository userRepository;` alanını ekleyin.","Sınıfın kurucu metodunu (Constructor) yazın: `public UserService(UserRepository userRepository) { this.userRepository = userRepository; }`","`getAllUsers()` metodu içinde `return userRepository.findAll();` çağrısı yapın."],filename:"UserService.java",initialCode:`package com.example.mastery.service;

import com.example.mastery.model.User;
import com.example.mastery.repository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.List;

// 1. Sınıf seviyesine servis anotasyonunu ekleyin
public class UserService {

    // 2. private final UserRepository alanını tanımlayın

    // 3. Constructor Injection kurucusunu yazın

    public List<User> getAllUsers() {
        // 4. repository üzerinden tüm kullanıcıları çekip döndürün
        return null;
    }
}`,solutionCode:`package com.example.mastery.service;

import com.example.mastery.model.User;
import com.example.mastery.repository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}`,testCheckers:[{description:"@Service anotasyonu sınıfa eklenmiş mi?",validate:d=>({passed:/@Service[\s\S]*?class\s+UserService/.test(d),error:"UserService sınıfı üzerinde @Service anotasyonu eksik!"})},{description:'Bağımlılık "private final UserRepository" olarak tanımlanmış mı?',validate:d=>({passed:/private\s+final\s+UserRepository\s+userRepository\s*;/.test(d),error:"`private final UserRepository userRepository;` alanı eksik veya final olarak tanımlanmamış!"})},{description:"Constructor Injection kurucu metodu doğru yazılmış mı?",validate:d=>({passed:/public\s+UserService\s*\(\s*UserRepository\s+userRepository\s*\)\s*\{[\s\S]*?this\.userRepository\s*=\s*userRepository\s*;/.test(d),error:"UserService(UserRepository userRepository) constructor'ı ve `this.userRepository = userRepository;` ataması eksik!"})},{description:"getAllUsers() içinde userRepository.findAll() çağrılmış mı?",validate:d=>({passed:/return\s+userRepository\.findAll\(\)\s*;/.test(d),error:"getAllUsers() metodunda `return userRepository.findAll();` çağrısı yapılmalıdır!"})}],simulatedEndpoint:{method:"GET",path:"/api/v1/users",successBody:[{id:1,name:"Ali Veli",email:"ali@example.com"},{id:2,name:"Ayşe Yılmaz",email:"ayse@example.com"}]}},{id:"challenge-3-dto-validation",title:"3. Görev: DTO Validasyonu & Java 21 Record",difficulty:"Orta",category:"Validation & DTO",description:"Jakarta Bean Validation kurallarını kullanarak kullanıcı kayıt DTO'sunu Java 21 Record formatında güvenli hale getirin.",instructions:["`username` alanı için `@NotBlank` ve `@Size(min = 3, max = 50)` ekleyin.","`email` alanı için `@NotBlank` ve `@Email` ekleyin.","`age` alanı için `@NotNull` ve `@Min(18)` veya `@Min(value = 18)` ekleyin."],filename:"RegisterUserDto.java",initialCode:`package com.example.mastery.dto;

import jakarta.validation.constraints.*;

// 1. Record parametrelerine Jakarta Validation kurallarını ekleyin
public record RegisterUserDto(
    String username,
    String email,
    Integer age
) {}`,solutionCode:`package com.example.mastery.dto;

import jakarta.validation.constraints.*;

public record RegisterUserDto(
    @NotBlank(message = "Kullanıcı adı boş olamaz")
    @Size(min = 3, max = 50, message = "Kullanıcı adı en az 3 karakter olmalıdır")
    String username,

    @NotBlank(message = "E-posta alanı zorunludur")
    @Email(message = "Geçerli bir e-posta formatı giriniz")
    String email,

    @NotNull(message = "Yaş alanı zorunludur")
    @Min(value = 18, message = "Kayıt için yaş en az 18 olmalıdır")
    Integer age
) {}`,testCheckers:[{description:"username alanı için @NotBlank ve @Size(min = 3) tanımlanmış mı?",validate:d=>{const c=/@NotBlank[\s\S]*?String\s+username/.test(d),u=/@Size\s*\([\s\S]*?min\s*=\s*3[\s\S]*?\)[\s\S]*?String\s+username/.test(d);return{passed:c&&u,error:"username alanı önünde @NotBlank ve @Size(min = 3) kuralları eksik!"}}},{description:"email alanı için @NotBlank ve @Email eklenmiş mi?",validate:d=>{const c=/@Email[\s\S]*?String\s+email/.test(d),u=/@NotBlank[\s\S]*?String\s+email/.test(d);return{passed:c&&u,error:"email alanı önünde @NotBlank ve @Email anotasyonları eksik!"}}},{description:"age alanı için @NotNull ve @Min(18) kuralı konulmuş mu?",validate:d=>({passed:/@Min\s*\(\s*(?:value\s*=\s*)?18[\s\S]*?\)[\s\S]*?Integer\s+age/.test(d),error:"age alanı için @Min(18) yaş sınırlaması eksik!"})}],simulatedEndpoint:{method:"POST",path:"/api/v1/auth/register",successBody:{status:201,message:"Kullanıcı doğrulandı ve başarıyla kaydedildi.",user:{username:"springmaster",email:"dev@spring.io",age:24}}}},{id:"challenge-4-jpa-repository",title:"4. Görev: Spring Data JPA @Query & Dynamic Finder",difficulty:"Orta",category:"Spring Data JPA & JPQL",description:"JpaRepository interface'i üzerinde hem türetilmiş metot (Derived Query) hem de özel JPQL @Query yazarak aktif kullanıcıları arayın.",instructions:["`ProductRepository` arayüzünün `extends JpaRepository<Product, Long>` yapmasını sağlayın.","`List<Product> findByPriceGreaterThan(BigDecimal price);` metodunu ekleyin.",'`@Query("SELECT p FROM Product p WHERE p.category = :category AND p.active = true")` ve `List<Product> findActiveByCategory(@Param("category") String category);` metodunu ekleyin.'],filename:"ProductRepository.java",initialCode:`package com.example.mastery.repository;

import com.example.mastery.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.math.BigDecimal;
import java.util.List;

// 1. JpaRepository<Product, Long> extend edin
public interface ProductRepository {

    // 2. findByPriceGreaterThan metodunu yazın

    // 3. @Query ile JPQL sorgu metodunu yazın
}`,solutionCode:`package com.example.mastery.repository;

import com.example.mastery.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.math.BigDecimal;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByPriceGreaterThan(BigDecimal price);

    @Query("SELECT p FROM Product p WHERE p.category = :category AND p.active = true")
    List<Product> findActiveByCategory(@Param("category") String category);
}`,testCheckers:[{description:"Interface `extends JpaRepository<Product, Long>` yapmış mı?",validate:d=>({passed:/public\s+interface\s+ProductRepository\s+extends\s+JpaRepository\s*<\s*Product\s*,\s*Long\s*>/.test(d),error:"Interface `extends JpaRepository<Product, Long>` şeklinde kalıtım almalıdır!"})},{description:"findByPriceGreaterThan(BigDecimal price) metodu tanımlanmış mı?",validate:d=>({passed:/List\s*<\s*Product\s*>\s+findByPriceGreaterThan\s*\(\s*BigDecimal\s+\w+\s*\)\s*;/.test(d),error:"`List<Product> findByPriceGreaterThan(BigDecimal price);` metot imzası eksik!"})},{description:"@Query JPQL sorgusu ve @Param anotasyonu tanımlanmış mı?",validate:d=>{const c=/@Query\s*\(\s*["']SELECT\s+p\s+FROM\s+Product\s+p/i.test(d),u=/findActiveByCategory\s*\(\s*@Param\s*\(\s*["']category["']\s*\)\s*String\s+\w+\s*\)/.test(d);return{passed:c&&u,error:'`@Query("SELECT p FROM Product p...")` ve `findActiveByCategory(@Param("category") String category)` tanımlaması eksik!'}}}],simulatedEndpoint:{method:"GET",path:"/api/v1/products/search?category=Elektronik",successBody:[{id:101,name:"Ultra HD Monitör",category:"Elektronik",price:8500,active:!0},{id:102,name:"Mekanik Klavye",category:"Elektronik",price:1800,active:!0}]}},{id:"challenge-5-jpa-specification",title:"5. Görev: JPA Specification ile Dinamik Arama Filtresi",difficulty:"İleri",category:"Spring Data JPA & Criteria",description:"Kullanıcının opsiyonel filtrelerine göre (isim ve minimum tutar) dinamik SQL oluşturan bir JPA Specification sınıfı yazın.",instructions:['`hasName(String name)` metodu içinde `name != null` ise `cb.like(cb.lower(root.get("name")), "%" + name.toLowerCase() + "%")` predicate\'i dönün.','`hasMinAmount(BigDecimal minAmount)` metodu içinde `minAmount != null` ise `cb.greaterThanOrEqualTo(root.get("amount"), minAmount)` predicate\'i dönün.'],filename:"OrderSpecifications.java",initialCode:`package com.example.mastery.specification;

import com.example.mastery.entity.Order;
import org.springframework.data.jpa.domain.Specification;
import java.math.BigDecimal;

public class OrderSpecifications {

    public static Specification<Order> hasName(String name) {
        return (root, query, cb) -> {
            // 1. name null değilse LIKE predicate'i dönün
            return cb.conjunction();
        };
    }

    public static Specification<Order> hasMinAmount(BigDecimal minAmount) {
        return (root, query, cb) -> {
            // 2. minAmount null değilse greaterThanOrEqualTo predicate'i dönün
            return cb.conjunction();
        };
    }
}`,solutionCode:`package com.example.mastery.specification;

import com.example.mastery.entity.Order;
import org.springframework.data.jpa.domain.Specification;
import java.math.BigDecimal;

public class OrderSpecifications {

    public static Specification<Order> hasName(String name) {
        return (root, query, cb) -> {
            if (name == null || name.isBlank()) return cb.conjunction();
            return cb.like(cb.lower(root.get("name")), "%" + name.toLowerCase() + "%");
        };
    }

    public static Specification<Order> hasMinAmount(BigDecimal minAmount) {
        return (root, query, cb) -> {
            if (minAmount == null) return cb.conjunction();
            return cb.greaterThanOrEqualTo(root.get("amount"), minAmount);
        };
    }
}`,testCheckers:[{description:"cb.like veya lower filtreleme kontrolü yapılmış mı?",validate:d=>({passed:/cb\.like\s*\(/i.test(d)&&/root\.get\s*\(\s*["']name["']\s*\)/i.test(d),error:'hasName içinde `cb.like(cb.lower(root.get("name")), ...)` predicate\'i eksik!'})},{description:"cb.greaterThanOrEqualTo tutar denetimi yapılmış mı?",validate:d=>({passed:/cb\.greaterThanOrEqualTo\s*\(|cb\.ge\s*\(/i.test(d)&&/root\.get\s*\(\s*["']amount["']\s*\)/i.test(d),error:'hasMinAmount içinde `cb.greaterThanOrEqualTo(root.get("amount"), minAmount)` predicate\'i eksik!'})}],simulatedEndpoint:{method:"GET",path:"/api/v1/orders/filter?name=pro&minAmount=500",successBody:[{id:401,name:"MacBook Pro Siparişi",amount:48e3,status:"DELIVERED"}]}},{id:"challenge-6-security-jwt-filter",title:"6. Görev: Spring Security 6 OncePerRequestFilter & JWT",difficulty:"İleri",category:"Security & FilterChain",description:"Gelen HTTP isteklerindeki Authorization başlığını parse eden, token'ı doğrulayıp SecurityContextHolder içine yerleştiren bir filtre yazın.",instructions:["Sınıfın `extends OncePerRequestFilter` yapmasını sağlayın ve `@Component` ekleyin.",'`authHeader == null || !authHeader.startsWith("Bearer ")` kontrolü ile erken çıkış (early return) yapın.',"`jwtService.isTokenValid(jwt, userDetails)` geçerli ise `SecurityContextHolder.getContext().setAuthentication(authToken)` ile oturumu kurun.","`filterChain.doFilter(request, response)` çağrısını unutmayın."],filename:"JwtAuthenticationFilter.java",initialCode:`package com.example.mastery.security;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;

// 1. @Component ve OncePerRequestFilter tanımlayın
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        // 2. Authorization başlığını alıp JWT doğrulaması yapın
        
        filterChain.doFilter(request, response);
    }
}`,solutionCode:`package com.example.mastery.security;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;

    public JwtAuthenticationFilter(JwtService jwtService, UserDetailsService userDetailsService) {
        this.jwtService = jwtService;
        this.userDetailsService = userDetailsService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        String token = authHeader.substring(7);
        String username = jwtService.extractUsername(token);

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            if (jwtService.isTokenValid(token, userDetails)) {
                UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities()
                );
                SecurityContextHolder.getContext().setAuthentication(auth);
            }
        }
        filterChain.doFilter(request, response);
    }
}`,testCheckers:[{description:"@Component anotasyonu ve OncePerRequestFilter kalıtımı var mı?",validate:d=>({passed:/@Component[\s\S]*?class\s+JwtAuthenticationFilter\s+extends\s+OncePerRequestFilter/.test(d),error:"`@Component` anotasyonu veya `extends OncePerRequestFilter` kalıtımı eksik!"})},{description:"Bearer token kontrolü ve substring(7) ile token çekme yapılmış mı?",validate:d=>{const c=/startsWith\s*\(\s*["']Bearer ["']\s*\)/.test(d),u=/substring\s*\(\s*7\s*\)/.test(d);return{passed:c&&u,error:"Authorization başlığındaki `Bearer ` kontrolü ve `authHeader.substring(7)` ayrıştırması eksik!"}}},{description:"SecurityContextHolder.getContext().setAuthentication(...) ile oturum kurulmuş mu?",validate:d=>({passed:/SecurityContextHolder\.getContext\(\)\.setAuthentication\s*\(/.test(d),error:"`SecurityContextHolder.getContext().setAuthentication(auth);` çağrısı eksik!"})}],simulatedEndpoint:{method:"GET",path:"/api/v1/admin/dashboard",successBody:{authenticatedUser:"admin@mastery.io",roles:["ROLE_ADMIN"],accessGranted:!0}}},{id:"challenge-7-global-exception",title:"7. Görev: RFC 7807 Global Exception Handler (@RestControllerAdvice)",difficulty:"Orta",category:"Spring MVC & Exceptions",description:"Spring Boot 3 ProblemDetail standardına uygun merkezi hata yakalama sınıfı oluşturun.",instructions:["Sınıfın başına `@RestControllerAdvice` ekleyin.","`@ExceptionHandler(ResourceNotFoundException.class)` ile bulunamadı hatasını yakalayın.","`ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, ex.getMessage())` döndürün."],filename:"GlobalExceptionHandler.java",initialCode:`package com.example.mastery.exception;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

// 1. @RestControllerAdvice anotasyonunu ekleyin
public class GlobalExceptionHandler {

    // 2. @ExceptionHandler ile ResourceNotFoundException metodunu yazın
}`,solutionCode:`package com.example.mastery.exception;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ProblemDetail handleNotFound(ResourceNotFoundException ex) {
        return ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, ex.getMessage());
    }
}`,testCheckers:[{description:"@RestControllerAdvice sınıf anotasyonu tanımlanmış mı?",validate:d=>({passed:/@RestControllerAdvice[\s\S]*?class\s+GlobalExceptionHandler/.test(d),error:"Sınıf üzerinde `@RestControllerAdvice` anotasyonu eksik!"})},{description:"@ExceptionHandler ve ProblemDetail.forStatusAndDetail kullanılmış mı?",validate:d=>{const c=/@ExceptionHandler\s*\(\s*ResourceNotFoundException\.class\s*\)/.test(d),u=/ProblemDetail\.forStatusAndDetail\s*\(\s*HttpStatus\.NOT_FOUND/.test(d);return{passed:c&&u,error:"`@ExceptionHandler(ResourceNotFoundException.class)` ve `ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, ...)` tanımı eksik!"}}}],simulatedEndpoint:{method:"GET",path:"/api/v1/users/99999",successBody:{type:"about:blank",title:"Not Found",status:404,detail:"Kullanıcı bulunamadı (ID: 99999)",instance:"/api/v1/users/99999"}}}],Hg=[{id:"challenge-1-rest-controller",title:"1. Task: Create First @RestController and @GetMapping Method",difficulty:"Beginner",category:"Spring MVC & REST",description:'Create a Spring Boot REST Controller for a greeting service. Return a greeting message in JSON format receiving the "name" query parameter.',instructions:["Add `@RestController` annotation to GreetingController class.",'Define root path `@RequestMapping("/api/v1")` at class level.','Annotate method with `@GetMapping("/greet")`.','Add `@RequestParam` annotation to method parameter (e.g. `@RequestParam(defaultValue = "World") String name`).','Return `ResponseEntity.ok(Map.of("message", "Hello " + name));` in method body.'],filename:"GreetingController.java",initialCode:`package com.example.mastery.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

// 1. Add class annotations here
public class GreetingController {

    // 2. Add method annotation and parameter annotation here
    public ResponseEntity<Map<String, String>> greet(String name) {
        // 3. Write return code here
        return null;
    }
}`,solutionCode:`package com.example.mastery.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class GreetingController {

    @GetMapping("/greet")
    public ResponseEntity<Map<String, String>> greet(@RequestParam(defaultValue = "World") String name) {
        return ResponseEntity.ok(Map.of("message", "Hello " + name));
    }
}`,testCheckers:[{description:"Is @RestController class annotation declared?",validate:d=>({passed:/@RestController\s+(?:@\w+(?:\([^)]*\))?\s+)*public\s+class\s+GreetingController/i.test(d)||/@RestController[\s\S]*?class\s+GreetingController/.test(d),error:"@RestController annotation missing above GreetingController class!"})},{description:'Is @RequestMapping("/api/v1") root path mapped?',validate:d=>({passed:/@RequestMapping\s*\(\s*["']\/api\/v1["']\s*\)[\s\S]*?class\s+GreetingController/.test(d),error:'@RequestMapping("/api/v1") annotation missing at class level!'})},{description:'Is @GetMapping("/greet") method mapped?',validate:d=>({passed:/@GetMapping\s*\(\s*["']\/greet["']\s*\)\s*(?:public\s+)?ResponseEntity/.test(d)||/@GetMapping\s*\(\s*["']\/greet["']\s*\)/.test(d),error:'@GetMapping("/greet") annotation missing on greet(...) method!'})},{description:"Is @RequestParam parameter configured?",validate:d=>({passed:/@RequestParam(?:\s*\([^)]*\))?\s+String\s+name/.test(d),error:"`@RequestParam String name` parameter definition missing in greet method!"})},{description:"Does method return valid ResponseEntity or Map response?",validate:d=>({passed:/return\s+ResponseEntity\.ok\s*\(|return\s+Map\.of\s*\(/i.test(d),error:'Method must return `ResponseEntity.ok(Map.of("message", ...));`!'})}],simulatedEndpoint:{method:"GET",path:"/api/v1/greet?name=SpringDeveloper",successBody:{message:"Hello SpringDeveloper",timestamp:"2026-09-27T00:20:00Z",status:200}}},{id:"challenge-2-constructor-injection",title:"2. Task: Clean Service & Constructor Dependency Injection",difficulty:"Beginner",category:"IoC & Dependency Injection",description:"Refactor UserService to use Constructor Injection with final fields instead of legacy @Autowired field injection.",instructions:["Add `@Service` annotation to UserService class.","Define `private final UserRepository userRepository;` field.","Write constructor: `public UserService(UserRepository userRepository) { this.userRepository = userRepository; }`","Return `userRepository.findAll();` in `getAllUsers()` method."],filename:"UserService.java",initialCode:`package com.example.mastery.service;

import com.example.mastery.model.User;
import com.example.mastery.repository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.List;

// 1. Add @Service annotation at class level
public class UserService {

    // 2. Define private final UserRepository dependency

    // 3. Write constructor for Dependency Injection

    public List<User> getAllUsers() {
        // 4. Fetch and return all users from repository
        return null;
    }
}`,solutionCode:`package com.example.mastery.service;

import com.example.mastery.model.User;
import com.example.mastery.repository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}`,testCheckers:[{description:"Is @Service annotation added to class?",validate:d=>({passed:/@Service[\s\S]*?class\s+UserService/.test(d),error:"@Service annotation missing on UserService class!"})},{description:'Is dependency declared as "private final UserRepository"?',validate:d=>({passed:/private\s+final\s+UserRepository\s+userRepository\s*;/.test(d),error:"`private final UserRepository userRepository;` field missing or not marked final!"})},{description:"Is Constructor Injection properly written?",validate:d=>({passed:/public\s+UserService\s*\(\s*UserRepository\s+userRepository\s*\)\s*\{[\s\S]*?this\.userRepository\s*=\s*userRepository\s*;/.test(d),error:"UserService(UserRepository userRepository) constructor and `this.userRepository = userRepository;` missing!"})},{description:"Is userRepository.findAll() invoked inside getAllUsers()?",validate:d=>({passed:/return\s+userRepository\.findAll\(\)\s*;/.test(d),error:"`return userRepository.findAll();` call missing inside getAllUsers()!"})}],simulatedEndpoint:{method:"GET",path:"/api/v1/users",successBody:[{id:1,name:"Alice Smith",email:"alice@example.com"},{id:2,name:"Bob Jones",email:"bob@example.com"}]}},{id:"challenge-3-dto-validation",title:"3. Task: DTO Validation & Java 21 Record",difficulty:"Intermediate",category:"Validation & DTO",description:"Apply Jakarta Bean Validation constraints on user registration DTO using Java 21 Record format.",instructions:["Add `@NotBlank` and `@Size(min = 3, max = 50)` for `username`.","Add `@NotBlank` and `@Email` for `email`.","Add `@NotNull` and `@Min(18)` for `age`."],filename:"RegisterUserDto.java",initialCode:`package com.example.mastery.dto;

import jakarta.validation.constraints.*;

// 1. Add Jakarta Validation annotations to record components
public record RegisterUserDto(
    String username,
    String email,
    Integer age
) {}`,solutionCode:`package com.example.mastery.dto;

import jakarta.validation.constraints.*;

public record RegisterUserDto(
    @NotBlank(message = "Username cannot be blank")
    @Size(min = 3, max = 50, message = "Username must be between 3 and 50 characters")
    String username,

    @NotBlank(message = "Email is mandatory")
    @Email(message = "Please provide a valid email address")
    String email,

    @NotNull(message = "Age is mandatory")
    @Min(value = 18, message = "Age must be at least 18")
    Integer age
) {}`,testCheckers:[{description:"Are @NotBlank and @Size(min = 3) configured on username?",validate:d=>{const c=/@NotBlank[\s\S]*?String\s+username/.test(d),u=/@Size\s*\([\s\S]*?min\s*=\s*3[\s\S]*?\)[\s\S]*?String\s+username/.test(d);return{passed:c&&u,error:"@NotBlank and @Size(min = 3) constraints missing on username!"}}},{description:"Are @NotBlank and @Email configured on email?",validate:d=>{const c=/@Email[\s\S]*?String\s+email/.test(d),u=/@NotBlank[\s\S]*?String\s+email/.test(d);return{passed:c&&u,error:"@NotBlank and @Email annotations missing on email!"}}},{description:"Are @NotNull and @Min(18) configured on age?",validate:d=>({passed:/@Min\s*\(\s*(?:value\s*=\s*)?18[\s\S]*?\)[\s\S]*?Integer\s+age/.test(d),error:"@Min(18) age boundary constraint missing on age!"})}],simulatedEndpoint:{method:"POST",path:"/api/v1/auth/register",successBody:{status:201,message:"User validated and registered successfully.",user:{username:"springmaster",email:"dev@spring.io",age:24}}}},{id:"challenge-4-jpa-repository",title:"4. Task: Spring Data JPA @Query & Dynamic Finder",difficulty:"Intermediate",category:"Spring Data JPA & JPQL",description:"Declare derived query and custom JPQL @Query methods on JpaRepository interface.",instructions:["Ensure `ProductRepository` extends `JpaRepository<Product, Long>`.","Add `List<Product> findByPriceGreaterThan(BigDecimal price);` method.",'Add `@Query("SELECT p FROM Product p WHERE p.category = :category AND p.active = true")` and `List<Product> findActiveByCategory(@Param("category") String category);`.'],filename:"ProductRepository.java",initialCode:`package com.example.mastery.repository;

import com.example.mastery.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.math.BigDecimal;
import java.util.List;

// 1. Extend JpaRepository<Product, Long>
public interface ProductRepository {

    // 2. Declare findByPriceGreaterThan method

    // 3. Declare JPQL query method with @Query
}`,solutionCode:`package com.example.mastery.repository;

import com.example.mastery.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.math.BigDecimal;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByPriceGreaterThan(BigDecimal price);

    @Query("SELECT p FROM Product p WHERE p.category = :category AND p.active = true")
    List<Product> findActiveByCategory(@Param("category") String category);
}`,testCheckers:[{description:"Does interface extend JpaRepository<Product, Long>?",validate:d=>({passed:/public\s+interface\s+ProductRepository\s+extends\s+JpaRepository\s*<\s*Product\s*,\s*Long\s*>/.test(d),error:"Interface must extend `JpaRepository<Product, Long>`!"})},{description:"Is findByPriceGreaterThan method declared?",validate:d=>({passed:/List\s*<\s*Product\s*>\s+findByPriceGreaterThan\s*\(\s*BigDecimal\s+\w+\s*\)\s*;/.test(d),error:"`List<Product> findByPriceGreaterThan(BigDecimal price);` method signature missing!"})},{description:"Is @Query JPQL and @Param configured?",validate:d=>{const c=/@Query\s*\(\s*["']SELECT\s+p\s+FROM\s+Product\s+p/i.test(d),u=/findActiveByCategory\s*\(\s*@Param\s*\(\s*["']category["']\s*\)\s*String\s+\w+\s*\)/.test(d);return{passed:c&&u,error:'`@Query("SELECT p FROM Product p...")` and `findActiveByCategory(@Param("category") String category)` missing!'}}}],simulatedEndpoint:{method:"GET",path:"/api/v1/products/search?category=Electronics",successBody:[{id:101,name:"Ultra HD Monitor",category:"Electronics",price:8500,active:!0},{id:102,name:"Mechanical Keyboard",category:"Electronics",price:1800,active:!0}]}},{id:"challenge-5-jpa-specification",title:"5. Task: Dynamic Filtering with JPA Specification",difficulty:"Advanced",category:"Spring Data JPA & Criteria",description:"Construct a reusable JPA Specification dynamically filtering orders by name and minimum amount.",instructions:['Return `cb.like(cb.lower(root.get("name")), "%" + name.toLowerCase() + "%")` predicate when `name != null`.','Return `cb.greaterThanOrEqualTo(root.get("amount"), minAmount)` predicate when `minAmount != null`.'],filename:"OrderSpecifications.java",initialCode:`package com.example.mastery.specification;

import com.example.mastery.entity.Order;
import org.springframework.data.jpa.domain.Specification;
import java.math.BigDecimal;

public class OrderSpecifications {

    public static Specification<Order> hasName(String name) {
        return (root, query, cb) -> {
            // 1. Return LIKE predicate if name is not null
            return cb.conjunction();
        };
    }

    public static Specification<Order> hasMinAmount(BigDecimal minAmount) {
        return (root, query, cb) -> {
            // 2. Return greaterThanOrEqualTo predicate if minAmount is not null
            return cb.conjunction();
        };
    }
}`,solutionCode:`package com.example.mastery.specification;

import com.example.mastery.entity.Order;
import org.springframework.data.jpa.domain.Specification;
import java.math.BigDecimal;

public class OrderSpecifications {

    public static Specification<Order> hasName(String name) {
        return (root, query, cb) -> {
            if (name == null || name.isBlank()) return cb.conjunction();
            return cb.like(cb.lower(root.get("name")), "%" + name.toLowerCase() + "%");
        };
    }

    public static Specification<Order> hasMinAmount(BigDecimal minAmount) {
        return (root, query, cb) -> {
            if (minAmount == null) return cb.conjunction();
            return cb.greaterThanOrEqualTo(root.get("amount"), minAmount);
        };
    }
}`,testCheckers:[{description:"Is cb.like filtering predicate constructed?",validate:d=>({passed:/cb\.like\s*\(/i.test(d)&&/root\.get\s*\(\s*["']name["']\s*\)/i.test(d),error:'`cb.like(cb.lower(root.get("name")), ...)` predicate missing inside hasName!'})},{description:"Is cb.greaterThanOrEqualTo amount filter constructed?",validate:d=>({passed:/cb\.greaterThanOrEqualTo\s*\(|cb\.ge\s*\(/i.test(d)&&/root\.get\s*\(\s*["']amount["']\s*\)/i.test(d),error:'`cb.greaterThanOrEqualTo(root.get("amount"), minAmount)` predicate missing inside hasMinAmount!'})}],simulatedEndpoint:{method:"GET",path:"/api/v1/orders/filter?name=pro&minAmount=500",successBody:[{id:401,name:"MacBook Pro Order",amount:48e3,status:"DELIVERED"}]}},{id:"challenge-6-security-jwt-filter",title:"6. Task: Spring Security 6 OncePerRequestFilter & JWT",difficulty:"Advanced",category:"Security & FilterChain",description:"Write an authentication filter that parses Authorization header, validates JWT, and populates SecurityContextHolder.",instructions:["Ensure class `extends OncePerRequestFilter` and is annotated with `@Component`.",'Perform early return if `authHeader == null || !authHeader.startsWith("Bearer ")`.',"Authenticate with `SecurityContextHolder.getContext().setAuthentication(authToken)` if token is valid.","Always invoke `filterChain.doFilter(request, response)`."],filename:"JwtAuthenticationFilter.java",initialCode:`package com.example.mastery.security;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;

// 1. Add @Component and extend OncePerRequestFilter
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        // 2. Extract and validate JWT from Authorization header
        
        filterChain.doFilter(request, response);
    }
}`,solutionCode:`package com.example.mastery.security;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;

    public JwtAuthenticationFilter(JwtService jwtService, UserDetailsService userDetailsService) {
        this.jwtService = jwtService;
        this.userDetailsService = userDetailsService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        String token = authHeader.substring(7);
        String username = jwtService.extractUsername(token);

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            if (jwtService.isTokenValid(token, userDetails)) {
                UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities()
                );
                SecurityContextHolder.getContext().setAuthentication(auth);
            }
        }
        filterChain.doFilter(request, response);
    }
}`,testCheckers:[{description:"Is @Component annotation and OncePerRequestFilter inheritance present?",validate:d=>({passed:/@Component[\s\S]*?class\s+JwtAuthenticationFilter\s+extends\s+OncePerRequestFilter/.test(d),error:"`@Component` annotation or `extends OncePerRequestFilter` inheritance missing!"})},{description:"Is Bearer header verified and substring(7) token parsed?",validate:d=>{const c=/startsWith\s*\(\s*["']Bearer ["']\s*\)/.test(d),u=/substring\s*\(\s*7\s*\)/.test(d);return{passed:c&&u,error:"`Bearer ` check and `authHeader.substring(7)` parsing missing in header logic!"}}},{description:"Is SecurityContextHolder.getContext().setAuthentication(...) invoked?",validate:d=>({passed:/SecurityContextHolder\.getContext\(\)\.setAuthentication\s*\(/.test(d),error:"`SecurityContextHolder.getContext().setAuthentication(auth);` invocation missing!"})}],simulatedEndpoint:{method:"GET",path:"/api/v1/admin/dashboard",successBody:{authenticatedUser:"admin@mastery.io",roles:["ROLE_ADMIN"],accessGranted:!0}}},{id:"challenge-7-global-exception",title:"7. Task: RFC 7807 Global Exception Handler (@RestControllerAdvice)",difficulty:"Intermediate",category:"Spring MVC & Exceptions",description:"Construct a centralized exception handler using Spring Boot 3 ProblemDetail standards.",instructions:["Annotate class with `@RestControllerAdvice`.","Catch `ResourceNotFoundException.class` using `@ExceptionHandler`.","Return `ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, ex.getMessage())`."],filename:"GlobalExceptionHandler.java",initialCode:`package com.example.mastery.exception;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

// 1. Add @RestControllerAdvice annotation
public class GlobalExceptionHandler {

    // 2. Write @ExceptionHandler method for ResourceNotFoundException
}`,solutionCode:`package com.example.mastery.exception;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ProblemDetail handleNotFound(ResourceNotFoundException ex) {
        return ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, ex.getMessage());
    }
}`,testCheckers:[{description:"Is @RestControllerAdvice class annotation declared?",validate:d=>({passed:/@RestControllerAdvice[\s\S]*?class\s+GlobalExceptionHandler/.test(d),error:"`@RestControllerAdvice` annotation missing on class!"})},{description:"Is @ExceptionHandler and ProblemDetail.forStatusAndDetail utilized?",validate:d=>{const c=/@ExceptionHandler\s*\(\s*ResourceNotFoundException\.class\s*\)/.test(d),u=/ProblemDetail\.forStatusAndDetail\s*\(\s*HttpStatus\.NOT_FOUND/.test(d);return{passed:c&&u,error:"`@ExceptionHandler(ResourceNotFoundException.class)` and `ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, ...)` missing!"}}}],simulatedEndpoint:{method:"GET",path:"/api/v1/users/99999",successBody:{type:"about:blank",title:"Not Found",status:404,detail:"User not found (ID: 99999)",instance:"/api/v1/users/99999"}}}],Jg=(d="tr")=>d==="en"?Hg:Fg;var ko={};(function d(c,u,b,j){var y=!!(c.Worker&&c.Blob&&c.Promise&&c.OffscreenCanvas&&c.OffscreenCanvasRenderingContext2D&&c.HTMLCanvasElement&&c.HTMLCanvasElement.prototype.transferControlToOffscreen&&c.URL&&c.URL.createObjectURL),A=typeof Path2D=="function"&&typeof DOMMatrix=="function",C=(function(){if(!c.OffscreenCanvas)return!1;try{var m=new OffscreenCanvas(1,1),l=m.getContext("2d");l.fillRect(0,0,1,1);var x=m.transferToImageBitmap();l.createPattern(x,"no-repeat")}catch{return!1}return!0})();function k(){}function N(m){var l=u.exports.Promise,x=l!==void 0?l:c.Promise;return typeof x=="function"?new x(m):(m(k,k),null)}var J=(function(m,l){return{transform:function(x){if(m)return x;if(l.has(x))return l.get(x);var z=new OffscreenCanvas(x.width,x.height),_=z.getContext("2d");return _.drawImage(x,0,0),l.set(x,z),z},clear:function(){l.clear()}}})(C,new Map),U=(function(){var m=Math.floor(16.666666666666668),l,x,z={},_=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(l=function(q){var G=Math.random();return z[G]=requestAnimationFrame(function H(K){_===K||_+m-1<K?(_=K,delete z[G],q()):z[G]=requestAnimationFrame(H)}),G},x=function(q){z[q]&&cancelAnimationFrame(z[q])}):(l=function(q){return setTimeout(q,m)},x=function(q){return clearTimeout(q)}),{frame:l,cancel:x}})(),I=(function(){var m,l,x={};function z(_){function q(G,H){_.postMessage({options:G||{},callback:H})}_.init=function(H){var K=H.transferControlToOffscreen();_.postMessage({canvas:K},[K])},_.fire=function(H,K,ie){if(l)return q(H,null),l;var pe=Math.random().toString(36).slice(2);return l=N(function(he){function Se(Re){Re.data.callback===pe&&(delete x[pe],_.removeEventListener("message",Se),l=null,J.clear(),ie(),he())}_.addEventListener("message",Se),q(H,pe),x[pe]=Se.bind(null,{data:{callback:pe}})}),l},_.reset=function(){_.postMessage({reset:!0});for(var H in x)x[H](),delete x[H]}}return function(){if(m)return m;if(!b&&y){var _=["var CONFETTI, SIZE = {}, module = {};","("+d.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{m=new Worker(URL.createObjectURL(new Blob([_])))}catch(q){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",q),null}z(m)}return m}})(),T={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function B(m,l){return l?l(m):m}function E(m){return m!=null}function S(m,l,x){return B(m&&E(m[l])?m[l]:T[l],x)}function ee(m){return m<0?0:Math.floor(m)}function M(m,l){return Math.floor(Math.random()*(l-m))+m}function de(m){return parseInt(m,16)}function ve(m){return m.map(Ne)}function Ne(m){var l=String(m).replace(/[^0-9a-f]/gi,"");return l.length<6&&(l=l[0]+l[0]+l[1]+l[1]+l[2]+l[2]),{r:de(l.substring(0,2)),g:de(l.substring(2,4)),b:de(l.substring(4,6))}}function Te(m){var l=S(m,"origin",Object);return l.x=S(l,"x",Number),l.y=S(l,"y",Number),l}function re(m){m.width=document.documentElement.clientWidth,m.height=document.documentElement.clientHeight}function le(m){var l=m.getBoundingClientRect();m.width=l.width,m.height=l.height}function be(m){var l=document.createElement("canvas");return l.style.position="fixed",l.style.top="0px",l.style.left="0px",l.style.pointerEvents="none",l.style.zIndex=m,l}function xe(m,l,x,z,_,q,G,H,K){m.save(),m.translate(l,x),m.rotate(q),m.scale(z,_),m.arc(0,0,1,G,H,K),m.restore()}function Pe(m){var l=m.angle*(Math.PI/180),x=m.spread*(Math.PI/180);return{x:m.x,y:m.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:m.startVelocity*.5+Math.random()*m.startVelocity,angle2D:-l+(.5*x-Math.random()*x),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:m.color,shape:m.shape,tick:0,totalTicks:m.ticks,decay:m.decay,drift:m.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:m.gravity*3,ovalScalar:.6,scalar:m.scalar,flat:m.flat}}function Be(m,l){l.x+=Math.cos(l.angle2D)*l.velocity+l.drift,l.y+=Math.sin(l.angle2D)*l.velocity+l.gravity,l.velocity*=l.decay,l.flat?(l.wobble=0,l.wobbleX=l.x+10*l.scalar,l.wobbleY=l.y+10*l.scalar,l.tiltSin=0,l.tiltCos=0,l.random=1):(l.wobble+=l.wobbleSpeed,l.wobbleX=l.x+10*l.scalar*Math.cos(l.wobble),l.wobbleY=l.y+10*l.scalar*Math.sin(l.wobble),l.tiltAngle+=.1,l.tiltSin=Math.sin(l.tiltAngle),l.tiltCos=Math.cos(l.tiltAngle),l.random=Math.random()+2);var x=l.tick++/l.totalTicks,z=l.x+l.random*l.tiltCos,_=l.y+l.random*l.tiltSin,q=l.wobbleX+l.random*l.tiltCos,G=l.wobbleY+l.random*l.tiltSin;if(m.fillStyle="rgba("+l.color.r+", "+l.color.g+", "+l.color.b+", "+(1-x)+")",m.beginPath(),A&&l.shape.type==="path"&&typeof l.shape.path=="string"&&Array.isArray(l.shape.matrix))m.fill(me(l.shape.path,l.shape.matrix,l.x,l.y,Math.abs(q-z)*.1,Math.abs(G-_)*.1,Math.PI/10*l.wobble));else if(l.shape.type==="bitmap"){var H=Math.PI/10*l.wobble,K=Math.abs(q-z)*.1,ie=Math.abs(G-_)*.1,pe=l.shape.bitmap.width*l.scalar,he=l.shape.bitmap.height*l.scalar,Se=new DOMMatrix([Math.cos(H)*K,Math.sin(H)*K,-Math.sin(H)*ie,Math.cos(H)*ie,l.x,l.y]);Se.multiplySelf(new DOMMatrix(l.shape.matrix));var Re=m.createPattern(J.transform(l.shape.bitmap),"no-repeat");Re.setTransform(Se),m.globalAlpha=1-x,m.fillStyle=Re,m.fillRect(l.x-pe/2,l.y-he/2,pe,he),m.globalAlpha=1}else if(l.shape==="circle")m.ellipse?m.ellipse(l.x,l.y,Math.abs(q-z)*l.ovalScalar,Math.abs(G-_)*l.ovalScalar,Math.PI/10*l.wobble,0,2*Math.PI):xe(m,l.x,l.y,Math.abs(q-z)*l.ovalScalar,Math.abs(G-_)*l.ovalScalar,Math.PI/10*l.wobble,0,2*Math.PI);else if(l.shape==="star")for(var ue=Math.PI/2*3,qe=4*l.scalar,rt=8*l.scalar,Xe=l.x,mt=l.y,kt=5,We=Math.PI/kt;kt--;)Xe=l.x+Math.cos(ue)*rt,mt=l.y+Math.sin(ue)*rt,m.lineTo(Xe,mt),ue+=We,Xe=l.x+Math.cos(ue)*qe,mt=l.y+Math.sin(ue)*qe,m.lineTo(Xe,mt),ue+=We;else m.moveTo(Math.floor(l.x),Math.floor(l.y)),m.lineTo(Math.floor(l.wobbleX),Math.floor(_)),m.lineTo(Math.floor(q),Math.floor(G)),m.lineTo(Math.floor(z),Math.floor(l.wobbleY));return m.closePath(),m.fill(),l.tick<l.totalTicks}function He(m,l,x,z,_){var q=l.slice(),G=m.getContext("2d"),H,K,ie=N(function(pe){function he(){H=K=null,G.clearRect(0,0,z.width,z.height),J.clear(),_(),pe()}function Se(){b&&!(z.width===j.width&&z.height===j.height)&&(z.width=m.width=j.width,z.height=m.height=j.height),!z.width&&!z.height&&(x(m),z.width=m.width,z.height=m.height),G.clearRect(0,0,z.width,z.height),q=q.filter(function(Re){return Be(G,Re)}),q.length?H=U.frame(Se):he()}H=U.frame(Se),K=he});return{addFettis:function(pe){return q=q.concat(pe),ie},canvas:m,promise:ie,reset:function(){H&&U.cancel(H),K&&K()}}}function Je(m,l){var x=!m,z=!!S(l||{},"resize"),_=!1,q=S(l,"disableForReducedMotion",Boolean),G=y&&!!S(l||{},"useWorker"),H=G?I():null,K=x?re:le,ie=m&&H?!!m.__confetti_initialized:!1,pe=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,he;function Se(ue,qe,rt){for(var Xe=S(ue,"particleCount",ee),mt=S(ue,"angle",Number),kt=S(ue,"spread",Number),We=S(ue,"startVelocity",Number),qt=S(ue,"decay",Number),tn=S(ue,"gravity",Number),Kn=S(ue,"drift",Number),rn=S(ue,"colors",ve),Wn=S(ue,"ticks",Number),nn=S(ue,"shapes"),an=S(ue,"scalar"),Ar=!!S(ue,"flat"),sn=Te(ue),Vt=Xe,Ot=[],ci=m.width*sn.x,Qn=m.height*sn.y;Vt--;)Ot.push(Pe({x:ci,y:Qn,angle:mt,spread:kt,startVelocity:We,color:rn[Vt%rn.length],shape:nn[M(0,nn.length)],ticks:Wn,decay:qt,gravity:tn,drift:Kn,scalar:an,flat:Ar}));return he?he.addFettis(Ot):(he=He(m,Ot,K,qe,rt),he.promise)}function Re(ue){var qe=q||S(ue,"disableForReducedMotion",Boolean),rt=S(ue,"zIndex",Number);if(qe&&pe)return N(function(We){We()});x&&he?m=he.canvas:x&&!m&&(m=be(rt),document.body.appendChild(m)),z&&!ie&&K(m);var Xe={width:m.width,height:m.height};H&&!ie&&H.init(m),ie=!0,H&&(m.__confetti_initialized=!0);function mt(){if(H){var We={getBoundingClientRect:function(){if(!x)return m.getBoundingClientRect()}};K(We),H.postMessage({resize:{width:We.width,height:We.height}});return}Xe.width=Xe.height=null}function kt(){he=null,z&&(_=!1,c.removeEventListener("resize",mt)),x&&m&&(document.body.contains(m)&&document.body.removeChild(m),m=null,ie=!1)}return z&&!_&&(_=!0,c.addEventListener("resize",mt,!1)),H?H.fire(ue,Xe,kt):Se(ue,Xe,kt)}return Re.reset=function(){H&&H.reset(),he&&he.reset()},Re}var X;function oe(){return X||(X=Je(null,{useWorker:!0,resize:!0})),X}function me(m,l,x,z,_,q,G){var H=new Path2D(m),K=new Path2D;K.addPath(H,new DOMMatrix(l));var ie=new Path2D;return ie.addPath(K,new DOMMatrix([Math.cos(G)*_,Math.sin(G)*_,-Math.sin(G)*q,Math.cos(G)*q,x,z])),ie}function O(m){if(!A)throw new Error("path confetti are not supported in this browser");var l,x;typeof m=="string"?l=m:(l=m.path,x=m.matrix);var z=new Path2D(l),_=document.createElement("canvas"),q=_.getContext("2d");if(!x){for(var G=1e3,H=G,K=G,ie=0,pe=0,he,Se,Re=0;Re<G;Re+=2)for(var ue=0;ue<G;ue+=2)q.isPointInPath(z,Re,ue,"nonzero")&&(H=Math.min(H,Re),K=Math.min(K,ue),ie=Math.max(ie,Re),pe=Math.max(pe,ue));he=ie-H,Se=pe-K;var qe=10,rt=Math.min(qe/he,qe/Se);x=[rt,0,0,rt,-Math.round(he/2+H)*rt,-Math.round(Se/2+K)*rt]}return{type:"path",path:l,matrix:x}}function Y(m){var l,x=1,z="#000000",_='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof m=="string"?l=m:(l=m.text,x="scalar"in m?m.scalar:x,_="fontFamily"in m?m.fontFamily:_,z="color"in m?m.color:z);var q=10*x,G=""+q+"px "+_,H=new OffscreenCanvas(q,q),K=H.getContext("2d");K.font=G;var ie=K.measureText(l),pe=Math.ceil(ie.actualBoundingBoxRight+ie.actualBoundingBoxLeft),he=Math.ceil(ie.actualBoundingBoxAscent+ie.actualBoundingBoxDescent),Se=2,Re=ie.actualBoundingBoxLeft+Se,ue=ie.actualBoundingBoxAscent+Se;pe+=Se+Se,he+=Se+Se,H=new OffscreenCanvas(pe,he),K=H.getContext("2d"),K.font=G,K.fillStyle=z,K.fillText(l,Re,ue);var qe=1/x;return{type:"bitmap",bitmap:H.transferToImageBitmap(),matrix:[qe,0,0,qe,-pe*qe/2,-he*qe/2]}}u.exports=function(){return oe().apply(this,arguments)},u.exports.reset=function(){oe().reset()},u.exports.create=Je,u.exports.shapeFromPath=O,u.exports.shapeFromText=Y})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),ko,!1);const Lu=ko.exports;ko.exports.create;const ao={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},zu=()=>{var Je;const{language:d,t:c}=Ke(),u=F.useMemo(()=>Jg(d),[d]),[b,j]=F.useState(((Je=u[0])==null?void 0:Je.id)||"challenge-1-rest-controller"),y=u.find(X=>X.id===b)||u[0],[A,C]=F.useState(y.initialCode),[k,N]=F.useState(!1),[J,U]=F.useState(!1),[I,T]=F.useState(null),[B,E]=F.useState([]),[S,ee]=F.useState(null),[M,de]=F.useState("checking"),[ve,Ne]=F.useState(!1),Te=F.useRef(null),re=async()=>{var X;de("checking");try{let oe=!1;const me=(X=ao==null?void 0:ao.VITE_API_URL)==null?void 0:X.replace(/\/$/,"");if(me)try{const O=new AbortController,Y=setTimeout(()=>O.abort(),2e3),m=await fetch(`${me}/actuator/health`,{method:"GET",signal:O.signal,headers:{Accept:"application/json"}});if(clearTimeout(Y),m.ok){const l=await m.json();l&&l.status==="UP"&&(oe=!0)}}catch{}if(!oe)try{const O=new AbortController,Y=setTimeout(()=>O.abort(),1200),m=await fetch("http://localhost:8080/actuator/health",{method:"GET",signal:O.signal,headers:{Accept:"application/json"}});if(clearTimeout(Y),m.ok){const l=await m.json();l&&l.status==="UP"&&(oe=!0)}}catch{}if(!oe)try{const O=new AbortController,Y=setTimeout(()=>O.abort(),1200),m=await fetch("/actuator/health",{method:"GET",signal:O.signal,headers:{Accept:"application/json"}});if(clearTimeout(Y),m.ok){const l=await m.json();l&&l.status==="UP"&&(oe=!0)}}catch{}de(oe?"online":"offline")}catch{de("offline")}};F.useEffect(()=>{re()},[]),F.useEffect(()=>{C(y.initialCode),T(null),E([]),ee(null),N(!1)},[b,d]);const le=X=>{j(X)},be=()=>{C(y.initialCode),T(null),E([]),ee(null)},xe=X=>{if(X.key==="Tab"){X.preventDefault();const oe=X.currentTarget,me=oe.selectionStart,O=oe.selectionEnd,Y=oe.value;C(Y.substring(0,me)+"    "+Y.substring(O)),setTimeout(()=>{oe.selectionStart=oe.selectionEnd=me+4},0)}},Pe=()=>{navigator.clipboard.writeText("git clone https://github.com/Tylefnx/learnspringboot.git && cd learnspringboot && docker compose up --build -d"),Ne(!0),setTimeout(()=>Ne(!1),2500)},Be=async()=>{if(M!=="online")return;U(!0),T(null),E([]),ee(null);const X=new Date().toISOString().substring(11,19),oe=[`[${X}] Sending Java 21 compilation payload to Docker Spring Boot container (localhost:8080)...`];try{const me=_g(A),O=[];for(const m of y.testCheckers){const l=m.validate(me,A);O.push({passed:l.passed,message:l.passed?m.description:l.error||m.description})}if(T(O),O.every(m=>m.passed))oe.push("\x1B[32m  .   ____          _            __ _ _\x1B[0m","\x1B[32m /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\x1B[0m","\x1B[32m( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\\x1B[0m","\x1B[32m \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )\x1B[0m","\x1B[32m  '  |____| .__|_| |_|_| |_\\__, | / / / /\x1B[0m","\x1B[32m =========|_|==============|___/=/_/_/_/\x1B[0m"," :: Spring Boot ::                (v3.3.4)","",`${X} [main] INFO  c.e.mastery.Application - Starting Application using Java 21 on Docker JVM...`,`${X} [main] INFO  o.s.b.w.e.tomcat.TomcatWebServer - Tomcat initialized on port 8080 (http)`,`${X} [main] INFO  o.s.w.s.DispatcherServlet - Initializing Servlet 'dispatcherServlet'`,`${X} [http-nio-8080-exec-1] INFO  o.s.web.servlet.mvc.method - Mapped [${y.simulatedEndpoint.method} ${y.simulatedEndpoint.path}] onto controller method.`,`${X} [http-nio-8080-exec-1] INFO  c.e.m.TestRunner - HTTP 200 OK Response generated.`,"\x1B[32m>> ALL TESTS PASSED SUCCESSFULLY! (TEST PASS) <<\x1B[0m"),ee(y.simulatedEndpoint.successBody),Lu({particleCount:80,spread:60,origin:{y:.7}});else{const m=O.filter(l=>!l.passed);oe.push("\x1B[31m[ERROR] Compilation / Test validation failed:\x1B[0m",...m.map(l=>`  -> ${l.message}`),`[WARN] Review technical requirements or click '${c.playground.showHint}' to inspect sample code.`)}E(oe)}catch(me){E([`\x1B[31m[ERROR] Execution error: ${me.message||"Unknown error"}\x1B[0m`])}finally{U(!1)}},He=A.split(`
`);return n.jsxs("div",{className:"rounded-2xl border border-slate-800 bg-slate-900/95 shadow-2xl p-6 sm:p-8 space-y-6",children:[n.jsxs("div",{className:"border-b border-slate-800 pb-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4",children:[n.jsx("div",{children:n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx("span",{className:"p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-inner",children:n.jsx(Xr,{className:"w-5 h-5"})}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-xl font-bold text-white",children:d==="en"?"Interactive Spring Boot Code Studio":"İnteraktif Spring Boot Kod Yazma Stüdyosu"}),n.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:d==="en"?"Write real Java 21 Spring Boot code and run live containerized unit tests.":"Gerçek Java 21 kodları yazın, kurumsal Spring Boot bileşenlerini Docker üzerinde derleyin ve test edin."})]})]})}),n.jsxs("div",{className:"flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs shrink-0",children:[n.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono font-semibold",children:[n.jsx(yo,{className:`w-3.5 h-3.5 ${M==="online"?"text-emerald-400":"text-amber-400"}`}),n.jsx("span",{className:M==="online"?"text-emerald-400 font-bold":"text-slate-400",children:M==="online"?c.playground.dockerActive:c.playground.noConnection})]}),n.jsx("button",{onClick:re,disabled:M==="checking",className:"p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors",title:c.docker.checkBtn,children:n.jsx(oo,{className:`w-3.5 h-3.5 ${M==="checking"?"animate-spin text-emerald-400":""}`})})]})]}),M!=="online"&&n.jsxs("div",{className:"p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-4 animate-in fade-in",children:[n.jsxs("div",{className:"flex items-start justify-between gap-4",children:[n.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-sm",children:[n.jsx(li,{className:"w-5 h-5 shrink-0"}),n.jsx("span",{children:c.docker.inactiveTitle})]}),n.jsx("button",{onClick:re,disabled:M==="checking",className:"text-xs px-3 py-1 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 rounded-lg border border-amber-500/30 transition-colors shrink-0",children:M==="checking"?"...":c.docker.checkBtn})]}),n.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:c.docker.inactiveDesc}),n.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2",children:[n.jsx("div",{className:"text-xs font-bold text-slate-200",children:c.docker.tutorialTitle}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-2 text-xs text-slate-400 font-mono",children:[n.jsxs("div",{className:"p-2 rounded-lg bg-slate-900 border border-slate-800",children:[n.jsx("span",{className:"text-emerald-400 block font-bold mb-0.5",children:"1. Clone:"}),n.jsx("code",{children:"git clone https://github.com/Tylefnx/learnspringboot.git"})]}),n.jsxs("div",{className:"p-2 rounded-lg bg-slate-900 border border-slate-800",children:[n.jsx("span",{className:"text-emerald-400 block font-bold mb-0.5",children:"2. cd:"}),n.jsx("code",{children:"cd learnspringboot"})]}),n.jsxs("div",{className:"p-2 rounded-lg bg-slate-900 border border-slate-800",children:[n.jsx("span",{className:"text-emerald-400 block font-bold mb-0.5",children:"3. Docker Up:"}),n.jsx("code",{children:"docker compose up --build -d"})]})]}),n.jsxs("div",{className:"pt-2 flex items-center justify-between",children:[n.jsx("span",{className:"text-[11px] text-slate-500",children:c.docker.singleLine}),n.jsxs("button",{onClick:Pe,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono font-semibold transition-all",children:[ve?n.jsx(ur,{className:"w-3.5 h-3.5 text-emerald-400"}):n.jsx(Vn,{className:"w-3.5 h-3.5"}),n.jsx("span",{children:ve?c.docker.copied:c.docker.copyBtn})]})]})]})]}),n.jsx("div",{className:"flex flex-wrap gap-2",children:u.map((X,oe)=>n.jsxs("button",{onClick:()=>le(X.id),className:`px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${y.id===X.id?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm":"bg-slate-950/60 text-slate-400 hover:text-white border border-slate-800"}`,children:[n.jsx("span",{className:"w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-mono",children:oe+1}),n.jsx("span",{children:X.title})]},X.id))}),n.jsxs("div",{className:"p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-3",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("h3",{className:"text-sm font-bold text-white flex items-center gap-2",children:[n.jsx(At,{className:"w-4 h-4 text-emerald-400"}),n.jsx("span",{children:c.playground.problemDesc})]}),n.jsx("span",{className:"text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-emerald-400 border border-slate-700",children:y.category})]}),n.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:y.description}),n.jsxs("div",{className:"space-y-1.5 pt-2 border-t border-slate-800/70",children:[n.jsxs("span",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider block",children:[c.playground.requirements,":"]}),n.jsx("ul",{className:"space-y-1 text-xs text-slate-300",children:y.instructions.map((X,oe)=>n.jsxs("li",{className:"flex items-start gap-2",children:[n.jsx("span",{className:"text-emerald-400 font-bold",children:"•"}),n.jsx("span",{children:X})]},oe))})]})]}),n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[n.jsxs("div",{className:"lg:col-span-7 flex flex-col space-y-3",children:[n.jsxs("div",{className:"flex items-center justify-between text-xs px-1",children:[n.jsxs("div",{className:"flex items-center gap-2 text-slate-400 font-mono",children:[n.jsx(si,{className:"w-4 h-4 text-emerald-400"}),n.jsx("span",{children:y.filename})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsxs("button",{onClick:()=>N(!k),className:"flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors text-xs font-semibold",children:[k?n.jsx(ig,{className:"w-3.5 h-3.5"}):n.jsx(sg,{className:"w-3.5 h-3.5 text-emerald-400"}),n.jsx("span",{children:k?c.playground.hideHint:c.playground.showHint})]}),n.jsx("button",{onClick:be,className:"p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors",title:c.playground.resetCode,children:n.jsx(fo,{className:"w-3.5 h-3.5"})})]})]}),n.jsxs("div",{className:"relative rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden font-mono text-xs shadow-inner min-h-[340px] flex",children:[n.jsx("div",{className:"bg-slate-900/50 select-none py-3.5 px-2.5 text-slate-600 border-r border-slate-800/80 text-right w-10 font-mono text-xs leading-5",children:He.map((X,oe)=>n.jsx("div",{children:oe+1},oe))}),n.jsx("textarea",{ref:Te,value:A,onChange:X=>C(X.target.value),onKeyDown:xe,spellCheck:!1,className:"flex-1 w-full bg-transparent p-3.5 text-slate-100 placeholder-slate-600 focus:outline-none resize-none font-mono text-xs leading-5 selection:bg-emerald-500/30",style:{fontFamily:"'JetBrains Mono', monospace",fontFeatureSettings:'"calt" 1, "liga" 1, "zero" 1'}})]}),n.jsx("button",{onClick:Be,disabled:M!=="online"||J,className:`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all shadow-lg ${M!=="online"?"bg-slate-800 text-slate-500 border border-slate-700/60 cursor-not-allowed opacity-75":"bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-emerald-500/20 hover:scale-[1.01] active:scale-[0.99]"}`,children:M!=="online"?n.jsxs(n.Fragment,{children:[n.jsx(mg,{className:"w-4 h-4 text-amber-400"}),n.jsx("span",{children:c.playground.disabledBtn})]}):J?n.jsxs(n.Fragment,{children:[n.jsx(yd,{className:"w-4 h-4 fill-slate-950 animate-spin"}),n.jsx("span",{children:c.playground.runningBtn})]}):n.jsxs(n.Fragment,{children:[n.jsx(yd,{className:"w-4 h-4 fill-slate-950"}),n.jsx("span",{children:c.playground.runBtn})]})})]}),n.jsxs("div",{className:"lg:col-span-5 flex flex-col space-y-3",children:[n.jsxs("div",{className:"flex items-center justify-between text-xs px-1 text-slate-400",children:[n.jsxs("div",{className:"flex items-center gap-2 font-semibold",children:[n.jsx(Er,{className:"w-4 h-4 text-emerald-400"}),n.jsx("span",{children:c.playground.tabLogs})]}),I&&n.jsxs("span",{className:`text-[11px] font-bold px-2 py-0.5 rounded-full ${I.every(X=>X.passed)?"bg-emerald-500/20 text-emerald-400":"bg-rose-500/20 text-rose-400"}`,children:[I.filter(X=>X.passed).length,"/",I.length," ",d==="en"?"Passed":"Başarılı"]})]}),n.jsxs("div",{className:"rounded-2xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs text-slate-300 min-h-[340px] max-h-[400px] overflow-y-auto space-y-3 flex flex-col shadow-inner",children:[B.length===0&&n.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center text-center p-6 text-slate-500 space-y-2",children:[n.jsx(Er,{className:"w-8 h-8 text-slate-600"}),n.jsx("p",{children:c.playground.emptyTests}),n.jsx("p",{className:"text-[11px] text-slate-600 font-sans",children:M==="online"?d==="en"?"Live Java 21 container logs and unit test output will stream here.":"Canlı Java 21 logları ve birim test sonuçları burada akacaktır.":d==="en"?"Launch Docker container to stream live compiler output.":"Canlı derleme çıktısını izlemek için Docker konteynerini başlatın."})]}),I&&n.jsxs("div",{className:"space-y-1.5 border-b border-slate-800 pb-3 font-sans",children:[n.jsxs("span",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1",children:[c.playground.tabTests,":"]}),I.map((X,oe)=>n.jsxs("div",{className:`flex items-start gap-2 p-2 rounded-lg text-xs ${X.passed?"bg-emerald-950/40 text-emerald-300 border border-emerald-500/30":"bg-rose-950/40 text-rose-300 border border-rose-500/30"}`,children:[X.passed?n.jsx(ii,{className:"w-4 h-4 text-emerald-400 shrink-0 mt-0.5"}):n.jsx(uo,{className:"w-4 h-4 text-rose-400 shrink-0 mt-0.5"}),n.jsx("span",{className:"leading-snug",children:X.message})]},oe))]}),B.length>0&&n.jsx("div",{className:"space-y-1 text-[11px] leading-relaxed",children:B.map((X,oe)=>n.jsx("div",{className:X.includes("[ERROR]")?"text-rose-400":X.includes("TÜM TESTLER")||X.includes("ALL TESTS")?"text-emerald-400 font-bold":X.includes(":: Spring Boot ::")?"text-emerald-400":"text-slate-400",children:X},oe))}),S&&n.jsxs("div",{className:"mt-3 p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1 font-mono text-[11px]",children:[n.jsxs("div",{className:"flex items-center justify-between text-emerald-400 font-bold text-[10px] uppercase",children:[n.jsx("span",{children:"HTTP 200 OK Body:"}),n.jsx("span",{children:"JSON"})]}),n.jsx("pre",{className:"text-slate-200 overflow-x-auto",children:JSON.stringify(S,null,2)})]})]})]})]}),k&&n.jsxs("div",{className:"p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/40 space-y-3 animate-in fade-in",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("span",{className:"text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5",children:[n.jsx(At,{className:"w-4 h-4"}),n.jsx("span",{children:c.playground.tabSolution})]}),n.jsx("button",{onClick:()=>{C(y.solutionCode),N(!1)},className:"text-xs px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors",children:c.playground.loadSolution})]}),n.jsx("pre",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto",children:y.solutionCode})]})]})},qg=({onNavigate:d})=>{const{language:c,t:u}=Ke();return n.jsxs("div",{className:"space-y-16 py-8",children:[n.jsxs("section",{className:"relative rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950 p-8 sm:p-12 overflow-hidden shadow-2xl",children:[n.jsx("div",{className:"absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"}),n.jsx("div",{className:"absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"}),n.jsxs("div",{className:"relative z-10 max-w-3xl space-y-6",children:[n.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold",children:[n.jsx(At,{className:"w-3.5 h-3.5"}),n.jsx("span",{children:u.hero.badge})]}),n.jsxs("h1",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight",children:[u.hero.title1," ",n.jsx("span",{className:"bg-gradient-to-r from-emerald-400 via-teal-300 to-green-300 bg-clip-text text-transparent",children:u.hero.titleHighlight})," ",n.jsx("br",{}),u.hero.title2]}),n.jsx("p",{className:"text-base sm:text-lg text-slate-300 leading-relaxed font-normal",children:u.hero.description}),n.jsxs("div",{className:"flex flex-wrap items-center gap-3 pt-2",children:[n.jsxs("button",{onClick:()=>d("lessons"),className:"flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all hover:scale-105 active:scale-95",children:[n.jsx(Gn,{className:"w-4 h-4"}),n.jsx("span",{children:u.hero.btnModules}),n.jsx(Mt,{className:"w-4 h-4"})]}),n.jsxs("button",{onClick:()=>d("practice"),className:"flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-800 hover:border-slate-700 transition-all hover:scale-105 active:scale-95",children:[n.jsx(Xr,{className:"w-4 h-4 text-emerald-400"}),n.jsx("span",{children:u.hero.btnPractice})]}),n.jsxs("button",{onClick:()=>d("lesson-detail","module-10-vibe-coding-ai-guardrails"),className:"flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-850 text-emerald-300 font-semibold text-sm border border-emerald-500/30 hover:border-emerald-500/60 shadow-lg shadow-emerald-950/40 transition-all hover:scale-105 active:scale-95",children:[n.jsx(At,{className:"w-4 h-4 text-emerald-400 animate-pulse"}),n.jsxs("span",{children:[u.nav.vibeCoding," (",c==="en"?"Module 10":"Modül 10",")"]})]})]}),n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80",children:[n.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-300",children:[n.jsx(qn,{className:"w-4 h-4 text-emerald-400 shrink-0"}),n.jsxs("span",{children:["10 ",u.hero.statModules]})]}),n.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-300",children:[n.jsx(qn,{className:"w-4 h-4 text-emerald-400 shrink-0"}),n.jsxs("span",{children:["5 ",u.hero.statLab]})]}),n.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-300",children:[n.jsx(qn,{className:"w-4 h-4 text-emerald-400 shrink-0"}),n.jsxs("span",{children:["6 ",u.hero.statRecipes]})]}),n.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-300",children:[n.jsx(qn,{className:"w-4 h-4 text-emerald-400 shrink-0"}),n.jsxs("span",{children:["13+ ",u.hero.statGlossary]})]})]})]})]}),n.jsxs("section",{className:"space-y-6",children:[n.jsxs("div",{children:[n.jsx("h2",{className:"text-2xl font-bold text-white tracking-tight",children:u.hero.featureHeading}),n.jsx("p",{className:"text-xs sm:text-sm text-slate-400 mt-1",children:u.hero.featureSub})]}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[n.jsxs("div",{className:"p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all",children:[n.jsx("div",{className:"w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3",children:n.jsx(Gn,{className:"w-4 h-4"})}),n.jsx("h3",{className:"text-sm font-bold text-white mb-1",children:u.hero.feat1Title}),n.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:u.hero.feat1Desc})]}),n.jsxs("div",{className:"p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all",children:[n.jsx("div",{className:"w-9 h-9 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-3",children:n.jsx(Xr,{className:"w-4 h-4"})}),n.jsx("h3",{className:"text-sm font-bold text-white mb-1",children:u.hero.feat2Title}),n.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:u.hero.feat2Desc})]}),n.jsxs("div",{className:"p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all",children:[n.jsx("div",{className:"w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3",children:n.jsx(en,{className:"w-4 h-4"})}),n.jsx("h3",{className:"text-sm font-bold text-white mb-1",children:u.hero.feat3Title}),n.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:u.hero.feat3Desc})]}),n.jsxs("div",{className:"p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all",children:[n.jsx("div",{className:"w-9 h-9 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center mb-3",children:n.jsx(Td,{className:"w-4 h-4"})}),n.jsx("h3",{className:"text-sm font-bold text-white mb-1",children:u.hero.feat4Title}),n.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:u.hero.feat4Desc})]})]})]}),n.jsx("section",{className:"relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-emerald-950/40 border border-emerald-500/30 p-6 sm:p-8 shadow-xl",children:n.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-6",children:[n.jsxs("div",{className:"space-y-2 max-w-2xl",children:[n.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:[n.jsx(At,{className:"w-3.5 h-3.5"}),n.jsxs("span",{children:[u.nav.vibeCoding," (",c==="en"?"Module 10":"Modül 10",")"]})]}),n.jsx("h2",{className:"text-xl sm:text-2xl font-black text-white tracking-tight",children:c==="en"?"LLM Pitfalls & Security Guardrails in Spring Boot":"LLM'lerin Spring Boot Kod Üretimindeki Mimari & Güvenlik Hataları"}),n.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:c==="en"?"Harden enterprise applications against AOP proxy blindness (self-invocation), BOLA/IDOR vulnerabilities, Actuator exposure, and enforce ArchUnit static rules.":"AOP proxy körlüğü (Self-Invocation), BOLA yetkilendirme açıkları, Actuator sızıntıları ve ArchUnit kuralları ile üretim ortamını güvenceye alın."})]}),n.jsxs("button",{onClick:()=>d("lesson-detail","module-10-vibe-coding-ai-guardrails"),className:"flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95 shrink-0",children:[n.jsx("span",{children:c==="en"?"Explore Module 10":"10. Modülü İncele"}),n.jsx(Mt,{className:"w-4 h-4"})]})]})}),n.jsxs("section",{className:"space-y-4",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsx("h2",{className:"text-xl font-bold text-white tracking-tight",children:u.practice.tab1}),n.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:u.hero.feat2Desc})]}),n.jsxs("button",{onClick:()=>d("practice"),className:"text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1",children:[n.jsx("span",{children:u.hero.explore}),n.jsx(Mt,{className:"w-3.5 h-3.5"})]})]}),n.jsx(zu,{})]}),n.jsxs("section",{className:"space-y-6",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[n.jsxs("div",{children:[n.jsx("h2",{className:"text-2xl font-bold text-white tracking-tight",children:u.hero.modulesTitle}),n.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:u.hero.modulesSub})]}),n.jsxs("button",{onClick:()=>d("lessons"),className:"text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1",children:[n.jsx("span",{children:u.hero.viewAll}),n.jsx(Mt,{className:"w-3.5 h-3.5"})]})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:xo.map(b=>n.jsxs("div",{onClick:()=>d("lesson-detail",b.id),className:"group p-5 rounded-2xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-emerald-500/50 shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsxs("span",{className:"text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:["Module ",b.number]}),n.jsxs("span",{className:"text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700",children:[b.difficulty," • ",b.durationMinutes," min"]})]}),n.jsx("h3",{className:"text-base font-bold text-white group-hover:text-emerald-300 transition-colors mb-1.5",children:b.title}),n.jsx("p",{className:"text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4",children:b.subtitle})]}),n.jsxs("div",{className:"flex items-center justify-between pt-3 border-t border-slate-800/70 text-xs",children:[n.jsx("span",{className:"text-slate-500",children:b.category}),n.jsxs("div",{className:"flex items-center gap-1 text-emerald-400 font-semibold group-hover:translate-x-1 transition-transform",children:[n.jsx("span",{children:u.hero.explore}),n.jsx(Mt,{className:"w-3.5 h-3.5"})]})]})]},b.id))})]})]})},Vg=({onSelectLesson:d})=>{const{language:c,t:u}=Ke(),[b,j]=F.useState("All"),y=F.useMemo(()=>Du(c),[c]),A=b==="All"?y:y.filter(k=>b==="Başlangıç"||b==="Beginner"?k.difficulty==="Başlangıç"||k.difficulty==="Beginner":b==="Orta"||b==="Intermediate"?k.difficulty==="Orta"||k.difficulty==="Intermediate":b==="İleri"||b==="Advanced"?k.difficulty==="İleri"||k.difficulty==="Advanced":!0),C=c==="en"?[{id:"All",label:"All"},{id:"Beginner",label:"Beginner"},{id:"Intermediate",label:"Intermediate"},{id:"Advanced",label:"Advanced"}]:[{id:"All",label:"Tümü"},{id:"Başlangıç",label:"Başlangıç"},{id:"Orta",label:"Orta"},{id:"İleri",label:"İleri"}];return n.jsxs("div",{className:"space-y-8 py-6",children:[n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-2 border border-emerald-500/20",children:[n.jsx(At,{className:"w-3.5 h-3.5"}),n.jsx("span",{children:u.hero.modulesTitle})]}),n.jsx("h1",{className:"text-2xl sm:text-3xl font-black text-white",children:c==="en"?"Spring Boot Curriculum Modules":"Spring Boot Ders Modülleri"}),n.jsx("p",{className:"text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl",children:u.hero.modulesSub})]}),n.jsxs("div",{className:"flex items-center gap-1.5 bg-slate-900 p-1.5 rounded-xl border border-slate-800 text-xs",children:[n.jsx(go,{className:"w-3.5 h-3.5 text-slate-500 ml-1.5 mr-0.5"}),C.map(k=>n.jsx("button",{onClick:()=>j(k.id),className:`px-3 py-1.5 rounded-lg font-medium transition-colors ${b===k.id?"bg-emerald-600 text-white shadow":"text-slate-400 hover:text-white"}`,children:k.label},k.id))]})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:A.map(k=>n.jsxs("div",{onClick:()=>d(k.id),className:"p-6 rounded-2xl bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-emerald-500/50 shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between group",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("span",{className:"text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:c==="en"?`Module ${k.number}`:`Modül ${k.number}`}),n.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-400",children:[n.jsx("span",{className:"px-2 py-0.5 rounded bg-slate-800 border border-slate-700",children:k.difficulty}),n.jsxs("span",{className:"flex items-center gap-1 font-mono",children:[n.jsx(po,{className:"w-3.5 h-3.5 text-slate-500"}),k.durationMinutes," ",c==="en"?"min":"dk"]})]})]}),n.jsx("h3",{className:"text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2",children:k.title}),n.jsx("p",{className:"text-xs sm:text-sm text-slate-400 leading-relaxed mb-4",children:k.overview})]}),n.jsxs("div",{className:"pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs",children:[n.jsx("span",{className:"text-slate-400 font-medium",children:k.category}),n.jsxs("div",{className:"flex items-center gap-1.5 text-emerald-400 font-semibold group-hover:translate-x-1 transition-transform",children:[n.jsx("span",{children:c==="en"?"Read Lesson":"Dersi Oku"}),n.jsx(Mt,{className:"w-4 h-4"})]})]})]},k.id))})]})},pr=({code:d,language:c="java",filename:u,showLineNumbers:b=!0})=>{const[j,y]=F.useState(!1),A=async()=>{await navigator.clipboard.writeText(d),y(!0),setTimeout(()=>y(!1),2e3)},C=d.trim().split(`
`);return n.jsxs("div",{className:"my-4 rounded-xl overflow-hidden border border-slate-700/60 bg-slate-950/90 shadow-xl text-slate-200",children:[n.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-slate-900/90 border-b border-slate-800 text-xs text-slate-400 font-mono",children:[n.jsxs("div",{className:"flex items-center space-x-2",children:[n.jsxs("div",{className:"flex space-x-1.5",children:[n.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"}),n.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"}),n.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"})]}),u?n.jsxs("span",{className:"ml-2 font-medium text-emerald-400 flex items-center gap-1.5",children:[n.jsx(Er,{className:"w-3.5 h-3.5 text-slate-500"}),u]}):n.jsx("span",{className:"uppercase text-slate-500 tracking-wider font-semibold",children:c})]}),n.jsx("button",{onClick:A,className:"flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors duration-150 active:scale-95 text-xs font-sans",title:"Kodu Kopyala",children:j?n.jsxs(n.Fragment,{children:[n.jsx(ur,{className:"w-3.5 h-3.5 text-emerald-400"}),n.jsx("span",{className:"text-emerald-400 font-medium",children:"Kopyalandı!"})]}):n.jsxs(n.Fragment,{children:[n.jsx(Vn,{className:"w-3.5 h-3.5"}),n.jsx("span",{children:"Kopyala"})]})})]}),n.jsx("div",{className:"p-4 overflow-x-auto font-mono text-sm leading-relaxed max-h-[500px]",children:n.jsxs("pre",{className:"flex",children:[b&&n.jsx("div",{className:"select-none pr-4 text-right text-slate-600 border-r border-slate-800/80 mr-4 font-mono text-xs",children:C.map((k,N)=>n.jsx("div",{className:"leading-6",children:N+1},N))}),n.jsx("code",{className:"text-emerald-300 flex-1 whitespace-pre",children:C.map((k,N)=>{const J=k.trim().startsWith("//")||k.trim().startsWith("#")||k.trim().startsWith("/*")||k.trim().startsWith("*"),U=k.trim().startsWith("@"),I=/\b(public|private|protected|class|interface|record|enum|extends|implements|return|new|final|static|import|package|void)\b/.test(k);let T="text-slate-200";return J?T="text-slate-500 italic":U?T="text-amber-400 font-semibold":I&&(T="text-emerald-300"),n.jsx("div",{className:`leading-6 ${T}`,children:k||" "},N)})})]})})]})},Gg=({content:d})=>{const c=b=>{const j=[];let y=0;const A=/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g;let C,k=0;for(;(C=A.exec(b))!==null;){C.index>k&&j.push(b.substring(k,C.index));const N=C[0];N.startsWith("`")&&N.endsWith("`")?j.push(n.jsx("code",{className:"px-1.5 py-0.5 mx-0.5 rounded bg-slate-800/90 text-emerald-300 font-mono text-[12px] border border-slate-700/60 font-medium select-all",children:N.slice(1,-1)},y++)):N.startsWith("**")&&N.endsWith("**")?j.push(n.jsx("strong",{className:"font-bold text-white",children:N.slice(2,-2)},y++)):N.startsWith("*")&&N.endsWith("*")&&j.push(n.jsx("em",{className:"italic text-slate-200",children:N.slice(1,-1)},y++)),k=C.index+N.length}return k<b.length&&j.push(b.substring(k)),j.length>0?j:b},u=bd.useMemo(()=>{const b=[],j=d.split(`
`);let y=0,A=0;for(;y<j.length;){const C=j[y];if(C.trim().startsWith("```")){const k=C.trim().match(/^```([a-zA-Z0-9_-]*)/),N=k&&k[1]?k[1]:"java",J=[];for(y++;y<j.length&&!j[y].trim().startsWith("```");)J.push(j[y]),y++;y++,b.push(n.jsx("div",{className:"my-3",children:n.jsx(pr,{code:J.join(`
`),language:N,showLineNumbers:J.length>2})},`code-${A++}`));continue}if(C.trim().startsWith("|")&&C.trim().endsWith("|")){const k=[];for(;y<j.length&&j[y].trim().startsWith("|")&&j[y].trim().endsWith("|");)k.push(j[y].trim()),y++;if(k.length>=2){const N=k[0].split("|").map(U=>U.trim()).filter((U,I,T)=>I>0&&I<T.length-1),J=k.slice(2).map(U=>U.split("|").map(I=>I.trim()).filter((I,T,B)=>T>0&&T<B.length-1));b.push(n.jsx("div",{className:"my-4 overflow-x-auto rounded-xl border border-slate-800 shadow-md",children:n.jsxs("table",{className:"w-full text-left border-collapse text-xs sm:text-sm",children:[n.jsx("thead",{children:n.jsx("tr",{className:"bg-slate-900 border-b border-slate-800 text-slate-300 font-semibold",children:N.map((U,I)=>n.jsx("th",{className:"px-4 py-2.5",children:c(U)},I))})}),n.jsx("tbody",{className:"divide-y divide-slate-800/60 bg-slate-950/70",children:J.map((U,I)=>n.jsx("tr",{className:"hover:bg-slate-900/40 transition-colors",children:U.map((T,B)=>n.jsx("td",{className:"px-4 py-2.5 text-slate-300",children:c(T)},B))},I))})]})},`table-${A++}`));continue}}if(C.trim().startsWith("### ")){b.push(n.jsxs("h4",{className:"text-base font-bold text-slate-100 pt-3 pb-1 flex items-center gap-2",children:[n.jsx("span",{className:"w-1.5 h-4 bg-emerald-500 rounded-full inline-block"}),n.jsx("span",{children:c(C.trim().replace(/^###\s+/,""))})]},`h4-${A++}`)),y++;continue}if(C.trim().startsWith("## ")){b.push(n.jsx("h3",{className:"text-lg font-bold text-white pt-4 pb-1 border-b border-slate-800",children:c(C.trim().replace(/^##\s+/,""))},`h3-${A++}`)),y++;continue}if(C.trim().startsWith("- ")||C.trim().startsWith("* ")){const k=[];for(;y<j.length&&(j[y].trim().startsWith("- ")||j[y].trim().startsWith("* "));)k.push(j[y].trim().replace(/^[-*]\s+/,"")),y++;b.push(n.jsx("ul",{className:"space-y-1.5 my-2 pl-2 text-sm text-slate-300",children:k.map((N,J)=>n.jsxs("li",{className:"flex items-start gap-2",children:[n.jsx("span",{className:"text-emerald-400 font-bold mt-1 text-xs",children:"▪"}),n.jsx("span",{className:"leading-relaxed",children:c(N)})]},J))},`ul-${A++}`));continue}if(/^\d+\.\s+/.test(C.trim())){const k=[];for(;y<j.length&&/^\d+\.\s+/.test(j[y].trim());)k.push(j[y].trim().replace(/^\d+\.\s+/,"")),y++;b.push(n.jsx("ol",{className:"space-y-1.5 my-2 pl-2 text-sm text-slate-300",children:k.map((N,J)=>n.jsxs("li",{className:"flex items-start gap-2",children:[n.jsxs("span",{className:"text-emerald-400 font-mono font-bold text-xs mt-0.5",children:[J+1,"."]}),n.jsx("span",{className:"leading-relaxed",children:c(N)})]},J))},`ol-${A++}`));continue}if(C.trim()===""){y++;continue}b.push(n.jsx("p",{className:"text-sm text-slate-300 leading-relaxed my-1.5",children:c(C)},`p-${A++}`)),y++}return b},[d]);return n.jsx("div",{className:"space-y-3",children:u})},Bu=()=>{const{language:d}=Ke(),[c,u]=F.useState("selfInvocation"),[b,j]=F.useState(1),[y,A]=F.useState(!1),C=d==="tr",k=N=>{u(N),j(1),A(!0);const J=setTimeout(()=>j(2),600),U=setTimeout(()=>j(3),1300),I=setTimeout(()=>{j(4),A(!1)},2e3);return()=>{clearTimeout(J),clearTimeout(U),clearTimeout(I)}};return n.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden",children:[n.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"}),n.jsx("div",{className:"absolute bottom-0 left-0 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none"}),n.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2",children:[n.jsx(oo,{className:"w-3.5 h-3.5 animate-spin",style:{animationDuration:"8s"}}),C?"İnteraktif AOP Proxy Simülatörü":"Interactive AOP Proxy Simulator"]}),n.jsx("h3",{className:"text-xl sm:text-2xl font-black text-white tracking-tight",children:C?"Spring AOP Dinamik Proxy & Self-Invocation Mekanizması":"Spring AOP Dynamic Proxy & Self-Invocation Mechanics"}),n.jsx("p",{className:"text-sm text-slate-400 mt-1 max-w-2xl",children:C?"Yapay zekânın en sık ürettiği hata: Aynı sınıf içindeki bir metodun diğer @Transactional metodu çağırması proxy katmanını nasıl tamamen devre dışı bırakır?":"The #1 AI pitfall: How invoking another @Transactional method within the same service bean silently bypasses the proxy container."})]}),n.jsxs("div",{className:"flex items-center gap-2 bg-slate-950/80 p-1.5 rounded-xl border border-slate-800 shrink-0",children:[n.jsxs("button",{onClick:()=>k("selfInvocation"),disabled:y,className:`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${c==="selfInvocation"?"bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:[n.jsx(Su,{className:"w-4 h-4 text-rose-400"}),n.jsx("span",{children:C?"🔴 Kusurlu: Self-Invocation (this.)":"🔴 Flawed: Self-Invocation (this.)"})]}),n.jsxs("button",{onClick:()=>k("external"),disabled:y,className:`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${c==="external"?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:[n.jsx(oi,{className:"w-4 h-4 text-emerald-400"}),n.jsx("span",{children:C?"🟢 Doğru: Ayrı Bean / Dış Çağrı":"🟢 Correct: Dedicated Bean Call"})]})]})]}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 my-8",children:[n.jsxs("div",{className:`p-4 rounded-xl border transition-all duration-300 ${b>=1?"bg-slate-950 border-emerald-500/40 shadow-lg shadow-emerald-950/30":"bg-slate-950/40 border-slate-800 text-slate-500"}`,children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold",children:"1. İSTEK"}),n.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"})]}),n.jsx("h4",{className:"text-sm font-bold text-white mb-1",children:"HTTP Client / Controller"}),n.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"POST /api/orders/batch"}),n.jsx("p",{className:"text-[11px] text-slate-500 mt-2",children:C?"İstemci toplu sipariş isteğini gönderir.":"Client dispatches batch order request."})]}),n.jsxs("div",{className:`p-4 rounded-xl border transition-all duration-300 relative ${c==="selfInvocation"?"bg-rose-950/20 border-rose-500/30 text-rose-200":b>=2?"bg-emerald-950/30 border-emerald-500/50 shadow-lg shadow-emerald-950/40":"bg-slate-950/40 border-slate-800 text-slate-500"}`,children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold",children:"2. AOP PROXY"}),c==="selfInvocation"?n.jsx(uo,{className:"w-4 h-4 text-rose-400"}):n.jsx(ii,{className:"w-4 h-4 text-emerald-400"})]}),n.jsx("h4",{className:"text-sm font-bold text-white mb-1",children:c==="selfInvocation"?C?"⚠️ Proxy Baypas Edildi!":"⚠️ Proxy Bypassed!":"Spring CGLIB Proxy"}),n.jsx("p",{className:"text-xs font-mono text-slate-400",children:c==="selfInvocation"?"this.saveSingleOrder()":"TransactionInterceptor"}),n.jsx("p",{className:"text-[11px] mt-2",children:c==="selfInvocation"?C?"Aynı sınıf içi çağrıda Java doğrudan hedef nesneye gider. Proxy interceptor HİÇ ÇALIŞMAZ!":'Internal "this." calls invoke raw methods directly. Interceptors are never executed!':C?'Proxy araya girer: "BEGIN TRANSACTION" komutunu çalıştırır ve veritabanı bağlantısı açar.':'Proxy intercepts: issues "BEGIN TRANSACTION" and prepares isolation context.'})]}),n.jsxs("div",{className:`p-4 rounded-xl border transition-all duration-300 ${b>=3?"bg-slate-950 border-cyan-500/40 shadow-lg shadow-cyan-950/30":"bg-slate-950/40 border-slate-800 text-slate-500"}`,children:[n.jsx("div",{className:"flex items-center justify-between mb-2",children:n.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold",children:"3. SERVİS İŞ MANTIĞI"})}),n.jsx("h4",{className:"text-sm font-bold text-white mb-1",children:"SingleOrderProcessor"}),n.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"orderRepository.save(req)"}),n.jsx("p",{className:"text-[11px] text-slate-400 mt-2",children:C?"İş mantığı yürütülür ve hata (Exception) fırlatılır.":"Business logic executes and throws exception."})]}),n.jsxs("div",{className:`p-4 rounded-xl border transition-all duration-300 ${c==="selfInvocation"?"bg-rose-950/40 border-rose-500/60 shadow-lg shadow-rose-950/50":b>=4?"bg-emerald-950/40 border-emerald-500/60 shadow-lg shadow-emerald-950/50":"bg-slate-950/40 border-slate-800 text-slate-500"}`,children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold",children:"4. SONUÇ"}),c==="selfInvocation"?n.jsx("span",{className:"text-[10px] font-bold text-rose-400 bg-rose-950 px-2 py-0.5 rounded border border-rose-500/30",children:C?"BOZUK VERİ":"CORRUPTED"}):n.jsx("span",{className:"text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30",children:C?"GÜVENLİ":"SAFE"})]}),n.jsx("h4",{className:"text-sm font-bold text-white mb-1",children:c==="selfInvocation"?C?"💥 Rollback Yapılamadı!":"💥 Rollback Failed!":C?"🛡️ Rollback Başarılı!":"🛡️ Rollback Succeeded!"}),n.jsx("p",{className:"text-[11px] mt-2 text-slate-300",children:c==="selfInvocation"?C?"İşlem başlatılmadığı için veritabanına yarım kalan veri commit edildi. Bakiye eksildi ama sipariş kaydedilemedi!":"No transaction existed. Incomplete changes committed. Balance was debited with zero order creation!":C?"AOP Proxy istisnayı yakaladı ve veritabanı durumunu anında geri alarak (ROLLBACK) veri bütünlüğünü korudu.":"AOP Proxy caught the exception, initiated clean ROLLBACK, and fully preserved data integrity."})]})]}),n.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx(li,{className:`w-5 h-5 shrink-0 ${c==="selfInvocation"?"text-rose-400":"text-emerald-400"}`}),n.jsx("span",{className:"text-xs text-slate-300 leading-relaxed",children:c==="selfInvocation"?C?"Kural: Spring'de @Transactional veya @Async metotlar asla aynı sınıf içerisinden doğrudan (this.metot) çağrılmamalıdır.":'Rule: Never invoke @Transactional or @Async methods internally via "this." inside the same Spring bean.':C?"Kural: İşlem yönetimi gerektiren metotlar ayrı bir Spring Bean'e taşınmalı veya TransactionTemplate kullanılmalıdır.":"Rule: Extract transactional units into dedicated Spring beans or utilize programmatic TransactionTemplate."})]}),n.jsxs("button",{onClick:()=>k(c==="selfInvocation"?"external":"selfInvocation"),className:"flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-all shrink-0",children:[n.jsx(oo,{className:"w-3.5 h-3.5"}),n.jsx("span",{children:C?"Diğer Senaryoyu Test Et":"Simulate Other Scenario"})]})]})]})},Kg=({moduleId:d,onBack:c,onSelectLesson:u})=>{var B;const{language:b}=Ke(),j=F.useMemo(()=>Du(b),[b]),y=j.find(E=>E.id===d)||j[0],A=j.findIndex(E=>E.id===y.id),C=A>0?j[A-1]:null,k=A<j.length-1?j[A+1]:null,[N,J]=F.useState(((B=y.sections[0])==null?void 0:B.id)||""),[U,I]=F.useState(0);F.useEffect(()=>{var E;window.scrollTo({top:0,behavior:"smooth"}),J(((E=y.sections[0])==null?void 0:E.id)||"")},[d,y]),F.useEffect(()=>{const E=()=>{const S=document.documentElement.scrollHeight-window.innerHeight;if(S>0){const ee=window.scrollY/S*100;I(ee)}for(const ee of y.sections){const M=document.getElementById(ee.id);if(M){const de=M.getBoundingClientRect();if(de.top<=200&&de.bottom>=100){J(ee.id);break}}}};return window.addEventListener("scroll",E,{passive:!0}),()=>window.removeEventListener("scroll",E)},[y]);const T=E=>{const S=document.getElementById(E);if(S){const M=S.getBoundingClientRect().top+window.pageYOffset+-90;window.scrollTo({top:M,behavior:"smooth"}),J(E)}};return n.jsxs("div",{className:"py-6 space-y-8 relative",children:[n.jsx("div",{className:"fixed top-16 left-0 w-full h-1 bg-slate-900 z-30",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-150",style:{width:`${U}%`}})}),n.jsxs("div",{className:"flex flex-col gap-4 border-b border-slate-800 pb-6",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("button",{onClick:c,className:"inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors group",children:[n.jsx(gd,{className:"w-4 h-4 group-hover:-translate-x-1 transition-transform"}),n.jsx("span",{children:b==="en"?"Back to All Modules":"Tüm Modüllere Geri Dön"})]}),n.jsxs("div",{className:"flex items-center gap-3 text-xs text-slate-400 font-mono",children:[n.jsx("span",{className:"px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold",children:b==="en"?`Module ${y.number} / ${j.length}`:`Modül ${y.number} / ${j.length}`}),n.jsxs("span",{className:"flex items-center gap-1",children:[n.jsx(po,{className:"w-3.5 h-3.5"}),y.durationMinutes," ",b==="en"?"min":"dk"]})]})]}),n.jsxs("div",{children:[n.jsx("h1",{className:"text-2xl sm:text-4xl font-extrabold text-white tracking-tight",children:y.title}),n.jsx("p",{className:"text-sm sm:text-base text-slate-300 mt-2 max-w-4xl leading-relaxed",children:y.subtitle})]})]}),n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[n.jsxs("div",{className:"lg:col-span-8 space-y-12",children:[n.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3",children:[n.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-emerald-400",children:b==="en"?"Module Summary & Architecture Objectives":"Modül Özeti & Mimari Hedefler"}),n.jsx("p",{className:"text-xs sm:text-sm text-slate-200 leading-relaxed",children:y.overview})]}),y.id==="module-10-vibe-coding-ai-guardrails"&&n.jsx("div",{className:"space-y-4",children:n.jsx(Bu,{})}),n.jsx("div",{className:"space-y-12",children:y.sections.map((E,S)=>n.jsxs("section",{id:E.id,className:"scroll-mt-24 space-y-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 p-6 sm:p-8 shadow-lg",children:[n.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[n.jsx("span",{className:"text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-wider",children:b==="en"?`Section 0${S+1}`:`Bölüm 0${S+1}`}),n.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white mt-1",children:E.title})]}),n.jsx("div",{className:"text-slate-300 leading-relaxed text-sm",children:n.jsx(Gg,{content:E.content})}),E.codeSnippets&&E.codeSnippets.length>0&&n.jsx("div",{className:"space-y-4 pt-2",children:E.codeSnippets.map((ee,M)=>n.jsxs("div",{className:"space-y-2",children:[ee.title&&n.jsx("div",{className:"text-xs font-semibold text-slate-300",children:ee.title}),n.jsx(pr,{code:ee.code,language:ee.language,filename:ee.filename,showLineNumbers:!0}),ee.description&&n.jsx("p",{className:"text-xs text-slate-400 italic",children:ee.description})]},M))})]},E.id))}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4",children:[n.jsxs("div",{className:"p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3",children:[n.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-sm",children:[n.jsx(ii,{className:"w-5 h-5"}),n.jsx("span",{children:b==="en"?"Best Practices":"En İyi Pratikler (Best Practices)"})]}),n.jsx("ul",{className:"space-y-2 text-xs text-slate-300",children:y.bestPractices.map((E,S)=>n.jsxs("li",{className:"flex items-start gap-2",children:[n.jsx("span",{className:"text-emerald-400 mt-0.5",children:"•"}),n.jsx("span",{children:E})]},S))})]}),n.jsxs("div",{className:"p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3",children:[n.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-sm",children:[n.jsx(li,{className:"w-5 h-5"}),n.jsx("span",{children:b==="en"?"Common Pitfalls":"Sık Yapılan Hatalar (Common Pitfalls)"})]}),n.jsx("ul",{className:"space-y-2 text-xs text-slate-300",children:y.commonPitfalls.map((E,S)=>n.jsxs("li",{className:"flex items-start gap-2",children:[n.jsx("span",{className:"text-amber-400 mt-0.5",children:"•"}),n.jsx("span",{children:E})]},S))})]})]}),n.jsxs("div",{className:"flex items-center justify-between pt-8 border-t border-slate-800",children:[C?n.jsxs("button",{onClick:()=>u(C.id),className:"flex items-center gap-2 text-left p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 transition-colors group",children:[n.jsx(gd,{className:"w-4 h-4 text-emerald-400 group-hover:-translate-x-1 transition-transform"}),n.jsxs("div",{children:[n.jsx("span",{className:"text-[10px] text-slate-500 block",children:b==="en"?"Previous Module":"Önceki Modül"}),n.jsx("span",{className:"font-semibold text-white",children:C.title})]})]}):n.jsx("div",{}),k&&n.jsxs("button",{onClick:()=>u(k.id),className:"flex items-center gap-2 text-right p-3.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-500/30 text-xs text-emerald-300 transition-colors group",children:[n.jsxs("div",{children:[n.jsx("span",{className:"text-[10px] text-emerald-400/80 block",children:b==="en"?"Next Module":"Sonraki Modül"}),n.jsx("span",{className:"font-semibold text-white",children:k.title})]}),n.jsx(Mt,{className:"w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform"})]})]})]}),n.jsx("div",{className:"hidden lg:block lg:col-span-4 sticky top-24 space-y-6",children:n.jsxs("div",{className:"p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-3",children:[n.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2",children:[n.jsx(pg,{className:"w-4 h-4 text-emerald-400"}),n.jsx("span",{children:b==="en"?"On This Page (Contents)":"Bu Sayfada (İçindekiler)"})]}),n.jsx("nav",{className:"space-y-1",children:y.sections.map(E=>{const S=N===E.id;return n.jsxs("button",{onClick:()=>T(E.id),className:`w-full text-left text-xs py-1.5 px-2.5 rounded-lg transition-all flex items-center justify-between ${S?"bg-emerald-500/10 text-emerald-400 font-semibold border-l-2 border-emerald-500":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"}`,children:[n.jsx("span",{className:"truncate",children:E.title}),S&&n.jsx(ai,{className:"w-3.5 h-3.5 text-emerald-400 shrink-0"})]},E.id)})})]})})]})]})},Wg=[{id:"user-entity",name:"User.java",path:"domain/model/User.java",layer:"Domain (Çekirdek)",pattern:"Rich Domain Entity & Encapsulation",description:"Saf Java ile yazılmış, iş kurallarını (Business Logic) kendi içinde barındıran çekirdek varlık. Kesinlikle Spring veya JPA (@Entity) bağımlılığı içermez!",keyTakeaway:"Domain katmanı hiçbir framework veya veritabanı kütüphanesine bağımlı olmamalıdır (Pure Java).",code:`package com.mastery.springboot.domain.model;

import com.mastery.springboot.domain.exception.DomainValidationException;
import java.time.Instant;

/**
 * Domain Entity: User
 * - İş kuralları (Business Rules) burada kapsüllenir (Encapsulation).
 * - Framework (Spring/JPA) anotasyonu içermez.
 */
public class User {
    private final Long id;
    private String fullName;
    private Email email;
    private boolean active;
    private final Instant createdAt;

    public User(Long id, String fullName, Email email, boolean active, Instant createdAt) {
        if (fullName == null || fullName.trim().length() < 2) {
            throw new DomainValidationException("Kullanıcı adı en az 2 karakter olmalıdır.");
        }
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.active = active;
        this.createdAt = createdAt != null ? createdAt : Instant.now();
    }

    public void deactivate() {
        this.active = false;
    }

    public void updateFullName(String newName) {
        if (newName == null || newName.trim().length() < 2) {
            throw new DomainValidationException("Yeni isim geçerli değildir.");
        }
        this.fullName = newName;
    }

    public Long getId() { return id; }
    public String getFullName() { return fullName; }
    public Email getEmail() { return email; }
    public boolean isActive() { return active; }
    public Instant getCreatedAt() { return createdAt; }
}`},{id:"email-vo",name:"Email.java",path:"domain/model/Email.java",layer:"Domain (Çekirdek)",pattern:"Value Object (Java 21 Record)",description:"Değiştirilemez (Immutable) ve kendi geçerliliğini kurucu metodunda denetleyen Value Object.",keyTakeaway:"İlkel saplantısından (Primitive Obsession) kurtulmak için String yerine tip güvenli Value Object'ler kullanılır.",code:`package com.mastery.springboot.domain.model;

import com.mastery.springboot.domain.exception.DomainValidationException;
import java.util.regex.Pattern;

/**
 * Value Object: Email
 * - Değiştirilemez (Immutable)
 * - Kendini doğrular (Self-validating)
 * - Hiçbir framework bağımlılığı içermez (Pure Java)
 */
public record Email(String value) {
    private static final Pattern EMAIL_PATTERN = 
        Pattern.compile("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$");

    public Email {
        if (value == null || !EMAIL_PATTERN.matcher(value).matches()) {
            throw new DomainValidationException("Geçersiz e-posta formatı: " + value);
        }
        value = value.toLowerCase().trim();
    }
}`},{id:"user-repo-port",name:"UserRepositoryPort.java",path:"domain/port/UserRepositoryPort.java",layer:"Domain (Çekirdek)",pattern:"Outbound Port (Hexagonal / Dependency Inversion)",description:"Domain katmanının veritabanı ihtiyacını tanımlayan arayüz. Veritabanının PostgreSQL mi, JPA mi, Redis mi olduğunu bilmez.",keyTakeaway:"DIP (Dependency Inversion Principle): Yüksek seviyeli modüller düşük seviyeli detaylara bağımlı olmamalıdır.",code:`package com.mastery.springboot.domain.port;

import com.mastery.springboot.domain.model.Email;
import com.mastery.springboot.domain.model.User;
import java.util.Optional;

public interface UserRepositoryPort {
    User save(User user);
    Optional<User> findById(Long id);
    Optional<User> findByEmail(Email email);
    boolean existsByEmail(Email email);
}`},{id:"user-service-app",name:"UserService.java",path:"application/service/UserService.java",layer:"Application (Kullanım Senaryoları)",pattern:"Use Case Orchestrator & Domain Events",description:"Kullanım senaryolarını (Use Cases) koordine eden, transaction sınırlarını yöneten ve Domain Event fırlatan servis.",keyTakeaway:"Application katmanı iş mantığını kendisi üretmez; Domain nesnelerini ve portları orkestre eder.",code:`package com.mastery.springboot.application.service;

import com.mastery.springboot.application.dto.CreateUserCommand;
import com.mastery.springboot.application.dto.UserDto;
import com.mastery.springboot.application.usecase.CreateUserUseCase;
import com.mastery.springboot.domain.event.UserCreatedEvent;
import com.mastery.springboot.domain.exception.DomainValidationException;
import com.mastery.springboot.domain.model.Email;
import com.mastery.springboot.domain.model.User;
import com.mastery.springboot.domain.port.UserRepositoryPort;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;

@Service
public class UserService implements CreateUserUseCase {

    private final UserRepositoryPort userRepositoryPort;
    private final ApplicationEventPublisher eventPublisher;

    public UserService(UserRepositoryPort userRepositoryPort, ApplicationEventPublisher eventPublisher) {
        this.userRepositoryPort = userRepositoryPort;
        this.eventPublisher = eventPublisher;
    }

    @Override
    @Transactional
    public UserDto execute(CreateUserCommand command) {
        Email email = new Email(command.email());

        if (userRepositoryPort.existsByEmail(email)) {
            throw new DomainValidationException("Bu e-posta adresi zaten kayıtlı: " + command.email());
        }

        User newUser = new User(null, command.fullName(), email, true, Instant.now());
        User savedUser = userRepositoryPort.save(newUser);

        // Domain Event fırlatılır (Gevşek bağlı mimari)
        eventPublisher.publishEvent(new UserCreatedEvent(savedUser.getId(), savedUser.getEmail().value()));

        return new UserDto(savedUser.getId(), savedUser.getFullName(), savedUser.getEmail().value(), savedUser.isActive());
    }
}`},{id:"user-jpa-adapter",name:"UserJpaAdapter.java",path:"infrastructure/adapter/jpa/UserJpaAdapter.java",layer:"Infrastructure (Dış Dünya & DB)",pattern:"Outbound Adapter (JPA Implementation)",description:"Domain portunu (UserRepositoryPort) Spring Data JPA ve Hibernate Entity nesneleri ile implemente eden adaptör.",keyTakeaway:"Veritabanı teknolojisi (Postgres, MongoDB, DynamoDB) değişse bile Domain ve Application katmanına tek satır dokunulmaz!",code:`package com.mastery.springboot.infrastructure.adapter.jpa;

import com.mastery.springboot.domain.model.Email;
import com.mastery.springboot.domain.model.User;
import com.mastery.springboot.domain.port.UserRepositoryPort;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class UserJpaAdapter implements UserRepositoryPort {

    private final SpringDataUserRepository springDataRepo;

    public UserJpaAdapter(SpringDataUserRepository springDataRepo) {
        this.springDataRepo = springDataRepo;
    }

    @Override
    public User save(User user) {
        UserEntity entity = UserEntity.fromDomain(user);
        UserEntity saved = springDataRepo.save(entity);
        return saved.toDomain();
    }

    @Override
    public Optional<User> findById(Long id) {
        return springDataRepo.findById(id).map(UserEntity::toDomain);
    }

    @Override
    public Optional<User> findByEmail(Email email) {
        return springDataRepo.findByEmail(email.value()).map(UserEntity::toDomain);
    }

    @Override
    public boolean existsByEmail(Email email) {
        return springDataRepo.existsByEmail(email.value());
    }
}`},{id:"user-controller-pres",name:"UserController.java",path:"presentation/controller/UserController.java",layer:"Presentation (REST API & UI)",pattern:"Inbound Adapter (REST Web Layer)",description:"HTTP isteklerini karşılayan, girdi validasyonunu tetikleyen ve Inbound Port (CreateUserUseCase) üzerinden sonucu 201 Created ile dönen uç nokta.",keyTakeaway:"Controller doğrudan servise veya entity'ye değil; sadece Use Case arayüzüne (Inbound Port) bağımlıdır.",code:`package com.mastery.springboot.presentation.controller;

import com.mastery.springboot.application.dto.CreateUserCommand;
import com.mastery.springboot.application.dto.UserDto;
import com.mastery.springboot.application.usecase.CreateUserUseCase;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    private final CreateUserUseCase createUserUseCase;

    public UserController(CreateUserUseCase createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }

    @PostMapping
    public ResponseEntity<UserDto> createUser(@Valid @RequestBody CreateUserCommand command) {
        UserDto result = createUserUseCase.execute(command);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(result.id())
                .toUri();
    }
}`}],Qg=[{id:"user-entity",name:"User.java",path:"domain/model/User.java",layer:"Domain (Core)",pattern:"Rich Domain Entity & Encapsulation",description:"Pure Java domain model encapsulating core business invariants. Zero dependencies on Spring, Hibernate or JPA (@Entity)!",keyTakeaway:"The domain layer must remain completely independent of frameworks, databases, or UI concerns (Pure Java).",code:`package com.mastery.springboot.domain.model;

import com.mastery.springboot.domain.exception.DomainValidationException;
import java.time.Instant;

/**
 * Domain Entity: User
 * - Core business rules are encapsulated here.
 * - Free of Spring / JPA annotations.
 */
public class User {
    private final Long id;
    private String fullName;
    private Email email;
    private boolean active;
    private final Instant createdAt;

    public User(Long id, String fullName, Email email, boolean active, Instant createdAt) {
        if (fullName == null || fullName.trim().length() < 2) {
            throw new DomainValidationException("Full name must have at least 2 characters.");
        }
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.active = active;
        this.createdAt = createdAt != null ? createdAt : Instant.now();
    }

    public void deactivate() {
        this.active = false;
    }

    public void updateFullName(String newName) {
        if (newName == null || newName.trim().length() < 2) {
            throw new DomainValidationException("New name is invalid.");
        }
        this.fullName = newName;
    }

    public Long getId() { return id; }
    public String getFullName() { return fullName; }
    public Email getEmail() { return email; }
    public boolean isActive() { return active; }
    public Instant getCreatedAt() { return createdAt; }
}`},{id:"email-vo",name:"Email.java",path:"domain/model/Email.java",layer:"Domain (Core)",pattern:"Value Object (Immutable Record)",description:"Immutable Value Object representing an email address with validation on instantiation. Equality is defined by value.",keyTakeaway:"Primitive Obsession is eliminated by modeling domain concepts with strongly-typed Value Objects.",code:`package com.mastery.springboot.domain.model;

import com.mastery.springboot.domain.exception.DomainValidationException;
import java.util.regex.Pattern;

public record Email(String value) {
    private static final Pattern EMAIL_REGEX = Pattern.compile("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$");

    public Email {
        if (value == null || !EMAIL_REGEX.matcher(value).matches()) {
            throw new DomainValidationException("Invalid email format: " + value);
        }
    }
}`},{id:"user-repository-port",name:"UserRepositoryPort.java",path:"domain/port/out/UserRepositoryPort.java",layer:"Domain (Core)",pattern:"Outbound Port (SPI Interface)",description:"Output port interface defined by the domain. Infrastructure adapters implement this port to fulfill persistence operations.",keyTakeaway:"Dependency Inversion Principle: High-level core domain defines the interface; low-level infrastructure implements it.",code:`package com.mastery.springboot.domain.port.out;

import com.mastery.springboot.domain.model.Email;
import com.mastery.springboot.domain.model.User;
import java.util.Optional;

public interface UserRepositoryPort {
    User save(User user);
    Optional<User> findById(Long id);
    Optional<User> findByEmail(Email email);
    boolean existsByEmail(Email email);
}`},{id:"create-user-usecase",name:"CreateUserUseCase.java",path:"application/usecase/CreateUserUseCase.java",layer:"Application (Use Cases)",pattern:"Inbound Port (API Interface)",description:"Use Case boundary contract defining what the application can execute for clients.",keyTakeaway:"The application layer exposes clean task-oriented Use Case interfaces rather than generic CRUD services.",code:`package com.mastery.springboot.application.usecase;

import com.mastery.springboot.application.dto.CreateUserCommand;
import com.mastery.springboot.application.dto.UserDto;

public interface CreateUserUseCase {
    UserDto execute(CreateUserCommand command);
}`},{id:"create-user-service",name:"CreateUserService.java",path:"application/service/CreateUserService.java",layer:"Application (Use Cases)",pattern:"Use Case Orchestrator (@Service)",description:"Orchestrates business logic and transactional flows. Communicates only with Domain Ports.",keyTakeaway:"Application services handle orchestration and transactions; core domain logic lives within entities.",code:`package com.mastery.springboot.application.service;

import com.mastery.springboot.application.dto.CreateUserCommand;
import com.mastery.springboot.application.dto.UserDto;
import com.mastery.springboot.application.mapper.UserMapper;
import com.mastery.springboot.application.usecase.CreateUserUseCase;
import com.mastery.springboot.domain.exception.UserAlreadyExistsException;
import com.mastery.springboot.domain.model.Email;
import com.mastery.springboot.domain.model.User;
import com.mastery.springboot.domain.port.out.UserRepositoryPort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;

@Service
public class CreateUserService implements CreateUserUseCase {

    private final UserRepositoryPort userRepositoryPort;
    private final UserMapper userMapper;

    public CreateUserService(UserRepositoryPort userRepositoryPort, UserMapper userMapper) {
        this.userRepositoryPort = userRepositoryPort;
        this.userMapper = userMapper;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public UserDto execute(CreateUserCommand command) {
        Email email = new Email(command.email());

        if (userRepositoryPort.existsByEmail(email)) {
            throw new UserAlreadyExistsException("A user with email " + command.email() + " already exists.");
        }

        User user = new User(null, command.fullName(), email, true, Instant.now());
        User savedUser = userRepositoryPort.save(user);

        return userMapper.toDto(savedUser);
    }
}`},{id:"user-jpa-adapter",name:"UserJpaAdapter.java",path:"infrastructure/persistence/adapter/UserJpaAdapter.java",layer:"Infrastructure (External & DB)",pattern:"Outbound Adapter (JPA / PostgreSQL)",description:"Implements the domain UserRepositoryPort and maps between Domain Entities and Spring Data JPA Entity classes.",keyTakeaway:"Infrastructure details (Hibernate, SQL, JPA) are encapsulated entirely inside outbound adapters.",code:`package com.mastery.springboot.infrastructure.persistence.adapter;

import com.mastery.springboot.domain.model.Email;
import com.mastery.springboot.domain.model.User;
import com.mastery.springboot.domain.port.out.UserRepositoryPort;
import com.mastery.springboot.infrastructure.persistence.entity.UserJpaEntity;
import com.mastery.springboot.infrastructure.persistence.mapper.UserPersistenceMapper;
import com.mastery.springboot.infrastructure.persistence.repository.SpringDataUserJpaRepository;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class UserJpaAdapter implements UserRepositoryPort {

    private final SpringDataUserJpaRepository repository;
    private final UserPersistenceMapper mapper;

    public UserJpaAdapter(SpringDataUserJpaRepository repository, UserPersistenceMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    public User save(User user) {
        UserJpaEntity entity = mapper.toEntity(user);
        UserJpaEntity saved = repository.save(entity);
        return mapper.toDomain(saved);
    }

    @Override
    public Optional<User> findById(Long id) {
        return repository.findById(id).map(mapper::toDomain);
    }

    @Override
    public Optional<User> findByEmail(Email email) {
        return repository.findByEmail(email.value()).map(mapper::toDomain);
    }

    @Override
    public boolean existsByEmail(Email email) {
        return repository.existsByEmail(email.value());
    }
}`},{id:"user-controller-pres",name:"UserController.java",path:"presentation/controller/UserController.java",layer:"Presentation (REST API & UI)",pattern:"Inbound Adapter (REST Web Layer)",description:"Handles incoming HTTP POST requests, triggers Jakarta Bean Validation, and executes the Inbound Port.",keyTakeaway:"Controllers depend on Use Case ports, maintaining decoupling from database and service implementations.",code:`package com.mastery.springboot.presentation.controller;

import com.mastery.springboot.application.dto.CreateUserCommand;
import com.mastery.springboot.application.dto.UserDto;
import com.mastery.springboot.application.usecase.CreateUserUseCase;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    private final CreateUserUseCase createUserUseCase;

    public UserController(CreateUserUseCase createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }

    @PostMapping
    public ResponseEntity<UserDto> createUser(@Valid @RequestBody CreateUserCommand command) {
        UserDto result = createUserUseCase.execute(command);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(result.id())
                .toUri();
        return ResponseEntity.created(location).body(result);
    }
}`}];function $g(d="tr"){return d==="en"?Qg:Wg}const Yg=()=>{const{language:d}=Ke(),c=F.useMemo(()=>$g(d),[d]),[u,b]=F.useState(c[0]);F.useEffect(()=>{const y=c.find(A=>A.id===u.id)||c[0];b(y)},[d,c]);const j=y=>y.includes("Domain")?"bg-emerald-500/10 text-emerald-400 border-emerald-500/20":y.includes("Application")?"bg-blue-500/10 text-blue-400 border-blue-500/20":y.includes("Infrastructure")?"bg-purple-500/10 text-purple-400 border-purple-500/20":"bg-amber-500/10 text-amber-400 border-amber-500/20";return n.jsxs("div",{className:"rounded-2xl border border-slate-800 bg-slate-900/95 shadow-2xl p-6 sm:p-8 space-y-8",children:[n.jsx("div",{className:"border-b border-slate-800 pb-5",children:n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx("span",{className:"p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-inner",children:n.jsx(Id,{className:"w-5 h-5"})}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-xl font-bold text-white",children:d==="en"?"Hexagonal & Clean Architecture Explorer":"Sanatsal Mimari: Hexagonal & Clean Architecture Turu"}),n.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:d==="en"?"Domain-Driven Design (DDD), Ports & Adapters, and Dependency Inversion in Spring Boot 3.":"Domain-Driven Design (DDD), Ports & Adapters ve Dependency Inversion prensiplerinin Spring Boot 3 ile saf zanaat seviyesinde uygulanışı."})]})]})}),n.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4",children:[n.jsxs("div",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2",children:[n.jsx(en,{className:"w-4 h-4 text-emerald-400"}),n.jsx("span",{children:d==="en"?"Dependency Direction: Outer to Core":"Bağımlılık Yönü: Dıştan İçe Doğru"})]}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-3 text-xs",children:[n.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900 border border-amber-500/30 space-y-1.5",children:[n.jsxs("div",{className:"flex items-center justify-between font-bold text-amber-300",children:[n.jsxs("span",{className:"flex items-center gap-1.5",children:[n.jsx(dg,{className:"w-3.5 h-3.5"}),"1. Presentation"]}),n.jsx("span",{className:"text-[10px] opacity-70",children:"Inbound Adapter"})]}),n.jsx("p",{className:"text-[11px] text-slate-400",children:d==="en"?"REST Controller, DTOs & JSON validation.":"REST Controller, DTO'lar ve JSON validasyonu."})]}),n.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900 border border-blue-500/30 space-y-1.5",children:[n.jsxs("div",{className:"flex items-center justify-between font-bold text-blue-300",children:[n.jsx("span",{children:"2. Application"}),n.jsx("span",{className:"text-[10px] opacity-70",children:"Use Cases"})]}),n.jsx("p",{className:"text-[11px] text-slate-400",children:d==="en"?"Orchestrates use cases and domain events.":"Kullanım senaryoları ve domain event orkestrasyonu."})]}),n.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900 border border-emerald-500/50 bg-emerald-950/10 space-y-1.5",children:[n.jsxs("div",{className:"flex items-center justify-between font-bold text-emerald-400",children:[n.jsx("span",{children:"3. Domain (Core)"}),n.jsx("span",{className:"text-[10px] opacity-70",children:"Pure Java"})]}),n.jsx("p",{className:"text-[11px] text-slate-300",children:d==="en"?"Entities, Value Objects & Ports. Zero framework dependencies.":"Entity, Value Object ve Portlar. Sıfır framework bağımlılığı."})]}),n.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900 border border-purple-500/30 space-y-1.5",children:[n.jsxs("div",{className:"flex items-center justify-between font-bold text-purple-300",children:[n.jsx("span",{children:"4. Infrastructure"}),n.jsx("span",{className:"text-[10px] opacity-70",children:"Outbound Adapter"})]}),n.jsx("p",{className:"text-[11px] text-slate-400",children:d==="en"?"Spring Data JPA, PostgreSQL & third-party APIs.":"Spring Data JPA, PostgreSQL ve dış API entegrasyonu."})]})]})]}),n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[n.jsxs("div",{className:"lg:col-span-4 space-y-3",children:[n.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider px-1",children:[n.jsx(cg,{className:"w-4 h-4 text-emerald-400"}),n.jsx("span",{children:"springboot-reference-app/"})]}),n.jsx("div",{className:"space-y-1.5",children:c.map(y=>{const A=u.id===y.id;return n.jsxs("button",{onClick:()=>b(y),className:`w-full text-left p-3 rounded-xl border transition-all flex flex-col gap-1.5 ${A?"bg-slate-800/90 border-emerald-500/50 shadow-md text-white":"bg-slate-950/60 border-slate-800/80 hover:bg-slate-800/40 text-slate-400"}`,children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(si,{className:`w-4 h-4 ${A?"text-emerald-400":"text-slate-500"}`}),n.jsx("span",{className:"font-mono text-xs font-semibold",children:y.name})]}),A&&n.jsx(ur,{className:"w-3.5 h-3.5 text-emerald-400"})]}),n.jsxs("div",{className:"flex items-center justify-between text-[10px]",children:[n.jsx("span",{className:`px-2 py-0.5 rounded-full border ${j(y.layer)}`,children:y.layer.split(" ")[0]}),n.jsx("span",{className:"text-slate-500 font-mono truncate max-w-[150px]",children:y.pattern})]})]},y.id)})})]}),n.jsxs("div",{className:"lg:col-span-8 space-y-4",children:[n.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2",children:[n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-2",children:[n.jsxs("div",{children:[n.jsx("span",{className:"text-[10px] font-mono text-slate-500",children:u.path}),n.jsx("h3",{className:"text-sm font-bold text-white",children:u.pattern})]}),n.jsx("span",{className:`text-xs font-semibold px-2.5 py-0.5 rounded-full border self-start ${j(u.layer)}`,children:u.layer})]}),n.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:u.description}),n.jsxs("div",{className:"p-2.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs text-emerald-300 flex items-start gap-2",children:[n.jsx(lu,{className:"w-4 h-4 shrink-0 mt-0.5 text-emerald-400"}),n.jsxs("span",{children:[n.jsx("strong",{children:d==="en"?"Architectural Rationale:":"Mimari Racon:"})," ",u.keyTakeaway]})]})]}),n.jsx(pr,{code:u.code,language:"java",filename:u.name,showLineNumbers:!0})]})]})]})},Zg=[{id:"client",name:"HTTP Client",category:"İstemci",icon:yo,title:"1. İstemci İstek Gönderir (Client Request)",description:"Tarayıcı, mobil uygulama veya Postman, Spring Boot uygulamasına bir HTTP isteği (GET, POST, vb.) gönderir.",technicalDetails:"Örnek: `POST /api/v1/orders HTTP/1.1` başlığı ile JSON body ve Authorization: Bearer JWT token gönderilir.",codeSnippet:`POST /api/v1/orders HTTP/1.1
Host: api.example.com
Authorization: Bearer eyJhbGciOiJIUzI1Ni...
Content-Type: application/json

{ "productId": 42, "quantity": 2 }`},{id:"filter-chain",name:"Security Filter Chain",category:"Filtre Katmanı",icon:oi,title:"2. Servlet Filtreleri & Spring Security",description:"İstek DispatcherServlet'e ulaşmadan önce Servlet Filter zincirinden (OncePerRequestFilter, CORS, CSRF, JWT Filter) geçer.",technicalDetails:"JwtAuthenticationFilter token'ı çözer, doğrular ve SecurityContextHolder.getContext().setAuthentication(authToken) ile kullanıcı oturumunu kurar.",codeSnippet:`// JwtAuthenticationFilter.java
if (jwtService.isTokenValid(jwt, userDetails)) {
    UsernamePasswordAuthenticationToken auth = 
        new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    SecurityContextHolder.getContext().setAuthentication(auth);
}
filterChain.doFilter(request, response);`},{id:"dispatcher-servlet",name:"DispatcherServlet",category:"Spring MVC Çekirdeği",icon:Kd,title:"3. DispatcherServlet & HandlerMapping",description:`Spring MVC'nin "Front Controller" bileşenidir. Gelen isteği karşılar ve HandlerMapping üzerinden uygun Controller metodunu bulur.`,technicalDetails:"RequestMappingHandlerMapping tablosunda `/api/v1/orders` URL'ini ve `POST` metodunu eşleştiren OrderController.createOrder() metodunu tespit eder.",codeSnippet:`// DispatcherServlet.java (Spring Framework Core)
HandlerExecutionChain mappedHandler = getHandler(processedRequest);
HandlerAdapter ha = getHandlerAdapter(mappedHandler.getHandler());
ModelAndView mv = ha.handle(processedRequest, response, mappedHandler.getHandler());`},{id:"controller",name:"RestController & AOP",category:"Web Katmanı",icon:si,title:"4. RestController, @Valid & AOP Proxies",description:"HTTP JSON gövdesi nesneye dönüştürülür (HttpMessageConverter), `@Valid` ile doğrulanır ve AOP Aspect (@Transactional, @Around) devreye girer.",technicalDetails:"Eğer validasyon hatası varsa MethodArgumentNotValidException fırlatılır; aksi halde CGLIB dinamik proxy üzerinden Service katmanına geçilir.",codeSnippet:`@RestController
@RequestMapping("/api/v1/orders")
public class OrderController {
    @PostMapping
    public ResponseEntity<OrderDto> createOrder(@Valid @RequestBody CreateOrderRequest req) {
        return ResponseEntity.status(HttpStatus.CREATED).body(orderService.create(req));
    }
}`},{id:"service-tx",name:"Service & @Transactional",category:"İş Mantığı & TX",icon:en,title:"5. Service Katmanı & Transaction Yönetimi",description:"İş kuralları işletilir. `@Transactional` proxy'si EntityManager ile veritabanı transaction'ı başlatır (BEGIN TRANSACTION).",technicalDetails:"Spring TransactionInterceptor devreye girer; metot başarılı biterse COMMIT, Unchecked Exception fırlarsa ROLLBACK uygulanır.",codeSnippet:`@Service
public class OrderService {
    @Transactional
    public OrderDto create(CreateOrderRequest req) {
        // 1. Stok kontrolü
        // 2. Sipariş Entity oluşturma
        // 3. repository.save() & Domain Event
        return orderMapper.toDto(saved);
    }
}`},{id:"jpa-db",name:"JPA, Hibernate & DB",category:"Veritabanı Katmanı",icon:mo,title:"6. Hibernate Persistence Context & Veritabanı",description:"Hibernate nesneyi First-Level Cache'e alır, Dirty Checking yapar ve HikariCP bağlantı havuzu üzerinden SQL çalıştırır.",technicalDetails:"HikariDataSource -> PostgreSQL TCP bağlantısı üzerinden `INSERT INTO orders (...) VALUES (...)` SQL sorgusu commit edilir.",codeSnippet:`// Hibernate Generated SQL
INSERT INTO orders (id, product_id, quantity, created_at) 
VALUES (nextval('orders_seq'), 42, 2, '2026-09-27 00:00:00+03');
-- COMMIT TRANSACTION;`}],Xg=[{id:"client",name:"HTTP Client",category:"Client Layer",icon:yo,title:"1. Client Issues Request",description:"A browser, mobile app, or API client sends an HTTP request (GET, POST, etc.) to the Spring Boot server.",technicalDetails:"Example: `POST /api/v1/orders HTTP/1.1` carrying JSON body and Authorization: Bearer JWT header.",codeSnippet:`POST /api/v1/orders HTTP/1.1
Host: api.example.com
Authorization: Bearer eyJhbGciOiJIUzI1Ni...
Content-Type: application/json

{ "productId": 42, "quantity": 2 }`},{id:"filter-chain",name:"Security Filter Chain",category:"Filter Layer",icon:oi,title:"2. Servlet Filters & Spring Security",description:"Before reaching the DispatcherServlet, the request traverses the filter chain (CORS, CSRF, JWT Filter).",technicalDetails:"JwtAuthenticationFilter decodes and verifies the token, populating SecurityContextHolder.",codeSnippet:`// JwtAuthenticationFilter.java
if (jwtService.isTokenValid(jwt, userDetails)) {
    UsernamePasswordAuthenticationToken auth = 
        new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    SecurityContextHolder.getContext().setAuthentication(auth);
}
filterChain.doFilter(request, response);`},{id:"dispatcher-servlet",name:"DispatcherServlet",category:"Spring MVC Core",icon:Kd,title:"3. DispatcherServlet & HandlerMapping",description:"Spring MVC front controller dispatches the request to the matching controller method found in HandlerMapping.",technicalDetails:"RequestMappingHandlerMapping routes `/api/v1/orders` POST to OrderController.createOrder().",codeSnippet:`// DispatcherServlet.java (Spring Framework Core)
HandlerExecutionChain mappedHandler = getHandler(processedRequest);
HandlerAdapter ha = getHandlerAdapter(mappedHandler.getHandler());
ModelAndView mv = ha.handle(processedRequest, response, mappedHandler.getHandler());`},{id:"controller",name:"RestController & AOP",category:"Web Layer",icon:si,title:"4. RestController, @Valid & AOP Proxies",description:"JSON is deserialized into Java objects, validated with `@Valid`, and wrapped with AOP aspect interception.",technicalDetails:"Validation failures throw MethodArgumentNotValidException; otherwise execution delegates to the Service layer.",codeSnippet:`@RestController
@RequestMapping("/api/v1/orders")
public class OrderController {
    @PostMapping
    public ResponseEntity<OrderDto> createOrder(@Valid @RequestBody CreateOrderRequest req) {
        return ResponseEntity.status(HttpStatus.CREATED).body(orderService.create(req));
    }
}`},{id:"service-tx",name:"Service & @Transactional",category:"Business & TX",icon:en,title:"5. Service Layer & Transaction Boundary",description:"Business rules execute within an active transaction boundary managed by EntityManager.",technicalDetails:"TransactionInterceptor executes COMMIT on normal return or ROLLBACK upon uncaught exception.",codeSnippet:`@Service
public class OrderService {
    @Transactional
    public OrderDto create(CreateOrderRequest req) {
        return orderMapper.toDto(saved);
    }
}`},{id:"jpa-db",name:"JPA, Hibernate & DB",category:"Persistence Layer",icon:mo,title:"6. Hibernate Persistence Context & Database",description:"Hibernate tracks entity in First-Level Cache, executes Dirty Checking, and flushes SQL via HikariCP pool.",technicalDetails:"PostgreSQL connection receives `INSERT INTO orders (...) VALUES (...)` and commits the transaction.",codeSnippet:`// Hibernate Generated SQL
INSERT INTO orders (id, product_id, quantity, created_at) 
VALUES (nextval('orders_seq'), 42, 2, '2026-09-27 00:00:00+03');
-- COMMIT TRANSACTION;`}],ef=()=>{const{language:d}=Ke(),c=d==="en"?Xg:Zg,[u,b]=F.useState(0),j=c[u],y=()=>{u<c.length-1&&b(k=>k+1)},A=()=>{u>0&&b(k=>k-1)},C=()=>{b(0)};return n.jsxs("div",{className:"rounded-2xl border border-slate-800 bg-slate-900/95 shadow-2xl p-6 sm:p-8 space-y-8",children:[n.jsxs("div",{className:"border-b border-slate-800 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[n.jsx("div",{children:n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx("span",{className:"p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-inner",children:n.jsx(en,{className:"w-5 h-5"})}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-xl font-bold text-white",children:d==="en"?"Spring MVC HTTP Request Lifecycle Simulator":"Spring MVC HTTP İstek Yaşam Döngüsü Simülatörü"}),n.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:d==="en"?"Step-by-step interactive trace from HTTP client to Security Filter, DispatcherServlet, Service, and Hibernate.":"İstemciden veritabanına bir HTTP isteğinin Filter, DispatcherServlet, AOP, Service ve Hibernate adımlarını interaktif inceleyin."})]})]})}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{onClick:A,disabled:u===0,className:"px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none text-xs text-white font-semibold transition-colors",children:d==="en"?"Previous":"Önceki"}),n.jsxs("button",{onClick:y,disabled:u===c.length-1,className:"flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 disabled:pointer-events-none text-slate-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/20",children:[n.jsx("span",{children:d==="en"?"Next Step":"Sonraki Adım"}),n.jsx(ai,{className:"w-3.5 h-3.5"})]}),n.jsx("button",{onClick:C,className:"p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors",title:d==="en"?"Reset":"Sıfırla",children:n.jsx(fo,{className:"w-3.5 h-3.5"})})]})]}),n.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2",children:c.map((k,N)=>{const J=k.icon,U=N===u,I=N<u;return n.jsxs("button",{onClick:()=>b(N),className:`p-3 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${U?"bg-emerald-950/40 border-emerald-500/80 shadow-lg shadow-emerald-500/10":I?"bg-slate-900 border-emerald-500/30 text-slate-300":"bg-slate-950/70 border-slate-800 text-slate-500 hover:bg-slate-900/60"}`,children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx(J,{className:`w-4 h-4 ${U?"text-emerald-400":I?"text-emerald-400/70":"text-slate-600"}`}),n.jsxs("span",{className:`text-[10px] font-mono font-bold ${U?"text-emerald-400":"text-slate-500"}`,children:["0",N+1]})]}),n.jsx("div",{className:"font-semibold text-xs truncate text-white",children:k.name}),n.jsx("div",{className:"text-[10px] text-slate-400 truncate mt-0.5",children:k.category})]},k.id)})}),n.jsxs("div",{className:"p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 space-y-6 animate-in fade-in",children:[n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[n.jsxs("div",{children:[n.jsxs("span",{className:"text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider",children:[d==="en"?`Phase 0${u+1}`:`Aşama 0${u+1}`," • ",j.category]}),n.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white mt-0.5",children:j.title})]}),n.jsx("span",{className:"text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 self-start",children:j.name})]}),n.jsx("p",{className:"text-sm text-slate-200 leading-relaxed",children:j.description}),n.jsxs("div",{className:"p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs text-emerald-300 flex items-start gap-2.5",children:[n.jsx(lu,{className:"w-4 h-4 text-emerald-400 shrink-0 mt-0.5"}),n.jsxs("div",{children:[n.jsx("strong",{className:"block text-emerald-400 font-bold mb-0.5",children:d==="en"?"Spring Architecture Deep-Dive:":"Spring Mimari Derinliği:"}),n.jsx("span",{children:j.technicalDetails})]})]}),n.jsxs("div",{className:"space-y-1.5",children:[n.jsx("span",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-wider block",children:d==="en"?"Code & Protocol Artifact:":"Kod & Protokol Örneği:"}),n.jsx("pre",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed",children:j.codeSnippet})]})]})]})},vd=[{id:"get-users",method:"GET",path:"/api/v1/users?page=0&size=10",title:"Kullanıcıları Sayfalı Listele",description:"Spring Data JPA Pageable ile sayfalanmış kullanıcı listesini ve toplam kayıt sayısını döner.",headers:{Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."},expectedStatus:200,responseBody:{content:[{id:1,name:"Zeynep Kaya",email:"zeynep@example.com",role:"ROLE_ADMIN",active:!0,createdAt:"2026-09-20T10:15:30Z"},{id:2,name:"Emre Demir",email:"emre@example.com",role:"ROLE_USER",active:!0,createdAt:"2026-09-21T14:22:10Z"},{id:3,name:"Selin Yıldız",email:"selin@example.com",role:"ROLE_USER",active:!1,createdAt:"2026-09-22T08:05:00Z"}],pageable:{pageNumber:0,pageSize:10,offset:0},totalElements:3,totalPages:1,last:!0},sqlQueries:["Hibernate: select u1_0.id,u1_0.active,u1_0.created_at,u1_0.email,u1_0.name,u1_0.role from users u1_0 limit ? offset ?","Hibernate: select count(u1_0.id) from users u1_0"],springControllerCode:`@GetMapping("/api/v1/users")
public ResponseEntity<Page<UserResponse>> getUsers(
        @PageableDefault(size = 10, sort = "createdAt", direction = Sort.Direction.DESC) Pageable pageable) {
    Page<UserResponse> users = userService.getUsers(pageable);
    return ResponseEntity.ok(users);
}`,springServiceCode:`@Transactional(readOnly = true)
public Page<UserResponse> getUsers(Pageable pageable) {
    return userRepository.findAll(pageable)
            .map(userMapper::toResponse);
}`},{id:"post-user",method:"POST",path:"/api/v1/users",title:"Yeni Kullanıcı Kaydı (Register)",description:"DTO validasyonu (@Valid), şifre hashleme (BCrypt) ve 201 Created yanıtı üretir.",headers:{"Content-Type":"application/json",Accept:"application/json"},requestBody:JSON.stringify({name:"Can Yılmaz",email:"can.yilmaz@example.com",password:"StrongPassword123!",role:"ROLE_USER"},null,2),expectedStatus:201,responseBody:{id:4,name:"Can Yılmaz",email:"can.yilmaz@example.com",role:"ROLE_USER",active:!0,createdAt:"2026-09-26T23:05:00Z"},sqlQueries:["Hibernate: select count(*) from users u1_0 where u1_0.email=?","Hibernate: insert into users (active,created_at,email,name,password,role,updated_at) values (?,?,?,?,?,?,?)"],springControllerCode:`@PostMapping("/api/v1/users")
public ResponseEntity<UserResponse> createUser(@Valid @RequestBody CreateUserRequest request) {
    UserResponse createdUser = userService.createUser(request);
    URI location = ServletUriComponentsBuilder.fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(createdUser.id())
            .toUri();
    return ResponseEntity.created(location).body(createdUser);
}`,springServiceCode:`@Transactional
public UserResponse createUser(CreateUserRequest request) {
    if (userRepository.existsByEmail(request.email())) {
        throw new DuplicateEmailException("Bu e-posta adresi zaten kullanımda: " + request.email());
    }
    User user = userMapper.toEntity(request);
    user.setPassword(passwordEncoder.encode(request.password()));
    User saved = userRepository.save(user);
    eventPublisher.publishEvent(new UserRegisteredEvent(saved.getId(), saved.getEmail()));
    return userMapper.toResponse(saved);
}`},{id:"auth-login",method:"POST",path:"/api/v1/auth/login",title:"Kullanıcı Girişi (JWT Login)",description:"Kullanıcı adı ve şifreyi doğrular, geçerli bir JWT Access Token ve Refresh Token üretir.",headers:{"Content-Type":"application/json"},requestBody:JSON.stringify({email:"zeynep@example.com",password:"AdminPassword123!"},null,2),expectedStatus:200,responseBody:{accessToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ6ZXluZXBAZXhhbXBsZS5jb20iLCJyb2xlcyI6WyJST0xFX0FETUlOIl0sImlhdCI6MTcyNzM4NDAwMCwiZXhwIjoxNzI3NDcwNDAwfQ.s8Fk9...",tokenType:"Bearer",expiresIn:864e5,user:{id:1,name:"Zeynep Kaya",email:"zeynep@example.com",role:"ROLE_ADMIN"}},sqlQueries:["Hibernate: select u1_0.id,u1_0.email,u1_0.password,u1_0.role,u1_0.active from users u1_0 where u1_0.email=?"],springControllerCode:`@PostMapping("/api/v1/auth/login")
public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest request) {
    return ResponseEntity.ok(authService.login(request));
}`,springServiceCode:`public AuthResponse login(LoginRequest request) {
    Authentication authentication = authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(request.email(), request.password())
    );
    UserDetails userDetails = (UserDetails) authentication.getPrincipal();
    String token = jwtService.generateToken(userDetails);
    return new AuthResponse(token, "Bearer", 86400000L, userMapper.toDto(userDetails));
}`},{id:"get-actuator-health",method:"GET",path:"/actuator/health",title:"Spring Boot Actuator Sağlık Durumu",description:"Veritabanı bağlantısı, disk alanı ve sistem canlılığını denetleyen Actuator çıktısı.",headers:{Accept:"application/vnd.spring-boot.actuator.v3+json"},expectedStatus:200,responseBody:{status:"UP",components:{db:{status:"UP",details:{database:"PostgreSQL",validationQuery:"isValid()"}},diskSpace:{status:"UP",details:{total:499963174912,free:215438991360,threshold:10485760,exists:!0}},livenessState:{status:"UP"},readinessState:{status:"UP"}}},sqlQueries:["/* Actuator Health Check */ select 1"],springControllerCode:`// Spring Boot Actuator tarafından otomatik sağlanır
// application.yml: management.endpoints.web.exposure.include=health,info,metrics`,springServiceCode:"// DataSourceHealthIndicator arka planda periyodik olarak connection pool kontrolü yapar."}],tf=()=>{const{language:d}=Ke(),c=d==="tr",[u,b]=F.useState(vd[0]),[j,y]=F.useState("response"),[A,C]=F.useState(!1),[k,N]=F.useState(u.responseBody),[J,U]=F.useState(45),I=E=>{b(E),N(E.responseBody)},T=()=>{C(!0);const E=Math.floor(Math.random()*35)+30;setTimeout(()=>{N(u.responseBody),U(E),C(!1)},400)},B=E=>{switch(E){case"GET":return"bg-emerald-500/20 text-emerald-300 border-emerald-500/30";case"POST":return"bg-blue-500/20 text-blue-300 border-blue-500/30";case"PUT":return"bg-amber-500/20 text-amber-300 border-amber-500/30";case"DELETE":return"bg-red-500/20 text-red-300 border-red-500/30";default:return"bg-slate-700 text-slate-300"}};return n.jsxs("div",{className:"rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl p-6 overflow-hidden",children:[n.jsxs("div",{className:"border-b border-slate-800 pb-4 mb-6",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20",children:n.jsx(Er,{className:"w-4 h-4"})}),n.jsx("h3",{className:"text-lg font-bold text-white",children:c?"İnteraktif REST API & Hibernate SQL Simülatörü":"Interactive REST API & Hibernate SQL Simulator"})]}),n.jsx("p",{className:"text-xs text-slate-400 mt-1",children:c?"Spring Boot API uçlarına test istekleri atın, üretilen gerçek JSON yanıtlarını, durum kodlarını ve arka planda çalışan Hibernate SQL sorgularını inceleyin.":"Execute test requests against simulated Spring Boot endpoints; inspect serialized JSON responses, status codes, and underlying Hibernate SQL queries."})]}),n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[n.jsxs("div",{className:"lg:col-span-4 space-y-2",children:[n.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2",children:c?"Simüle Edilmiş Uç Noktalar":"Simulated Endpoints"}),n.jsx("div",{className:"space-y-1.5",children:vd.map(E=>{const S=E.id===u.id;return n.jsxs("button",{onClick:()=>I(E),className:`w-full text-left p-3 rounded-xl border transition-all flex flex-col gap-1.5 ${S?"bg-slate-800 border-emerald-500/70 shadow-md ring-1 ring-emerald-500/40":"bg-slate-950/50 border-slate-800/80 hover:bg-slate-800/60 hover:border-slate-700"}`,children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("span",{className:`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${B(E.method)}`,children:E.method}),n.jsx("span",{className:"text-[11px] font-mono text-slate-400 truncate max-w-[170px]",children:E.path})]}),n.jsx("div",{className:"text-xs font-medium text-slate-200",children:E.title})]},E.id)})})]}),n.jsxs("div",{className:"lg:col-span-8 flex flex-col space-y-4",children:[n.jsxs("div",{className:"flex items-center gap-2 bg-slate-950 border border-slate-700/80 rounded-xl p-2 shadow-inner",children:[n.jsx("span",{className:`text-xs font-mono font-bold px-2.5 py-1.5 rounded-lg border ${B(u.method)}`,children:u.method}),n.jsx("input",{type:"text",readOnly:!0,value:u.path,className:"w-full bg-transparent font-mono text-xs sm:text-sm text-slate-200 focus:outline-none select-all"}),n.jsxs("button",{onClick:T,disabled:A,className:"flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-lg shadow-emerald-600/30 transition-all active:scale-95 disabled:opacity-50 shrink-0",children:[n.jsx(fg,{className:`w-3.5 h-3.5 ${A?"animate-spin":""}`}),n.jsx("span",{children:A?c?"İşleniyor...":"Sending...":c?"Gönder":"Send"})]})]}),n.jsxs("div",{className:"text-xs text-slate-400 bg-slate-900/60 p-3 rounded-lg border border-slate-800/70",children:[n.jsxs("span",{className:"font-semibold text-slate-300",children:[c?"Açıklama:":"Description:"," "]}),u.description]}),n.jsxs("div",{className:"border border-slate-800 bg-slate-950/80 rounded-xl overflow-hidden flex flex-col flex-1",children:[n.jsxs("div",{className:"flex items-center justify-between px-3 bg-slate-900/90 border-b border-slate-800 text-xs",children:[n.jsxs("div",{className:"flex space-x-1 py-1.5",children:[n.jsxs("button",{onClick:()=>y("response"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-colors ${j==="response"?"bg-slate-800 text-emerald-400 border border-slate-700":"text-slate-400 hover:text-slate-200"}`,children:[n.jsx(Er,{className:"w-3.5 h-3.5"}),n.jsx("span",{children:c?"JSON Yanıtı":"JSON Response"})]}),n.jsxs("button",{onClick:()=>y("sql"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-colors ${j==="sql"?"bg-slate-800 text-amber-400 border border-slate-700":"text-slate-400 hover:text-slate-200"}`,children:[n.jsx(mo,{className:"w-3.5 h-3.5"}),n.jsxs("span",{children:[c?"Hibernate SQL Logları":"Hibernate SQL Logs"," (",u.sqlQueries.length,")"]})]}),n.jsxs("button",{onClick:()=>y("springCode"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-colors ${j==="springCode"?"bg-slate-800 text-blue-400 border border-slate-700":"text-slate-400 hover:text-slate-200"}`,children:[n.jsx(Xr,{className:"w-3.5 h-3.5"}),n.jsx("span",{children:c?"Spring Controller & Service Kodu":"Spring Controller & Service Code"})]})]}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("div",{className:"flex items-center gap-1 text-[11px] text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20",children:[n.jsx(ii,{className:"w-3 h-3"}),n.jsxs("span",{children:[u.expectedStatus," OK"]})]}),n.jsxs("div",{className:"flex items-center gap-1 text-[11px] text-slate-400 font-mono",children:[n.jsx(po,{className:"w-3 h-3 text-slate-500"}),n.jsxs("span",{children:[J," ms"]})]})]})]}),n.jsxs("div",{className:"p-4 font-mono text-xs overflow-x-auto min-h-[260px] max-h-[380px]",children:[j==="response"&&n.jsx("pre",{className:"text-emerald-300 leading-relaxed",children:JSON.stringify(k,null,2)}),j==="sql"&&n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"text-slate-400 text-xs italic mb-2",children:c?"-- Hibernate Show SQL Logları (Hibernate 6 Standardı) --":"-- Hibernate Show SQL Logs (Hibernate 6 Standard) --"}),u.sqlQueries.map((E,S)=>n.jsx("div",{className:"p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-amber-300 font-mono",children:E},S))]}),j==="springCode"&&n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{children:[n.jsx("span",{className:"text-xs font-sans font-semibold text-slate-400 block mb-1",children:c?"1. Spring RestController Metodu:":"1. Spring RestController Method:"}),n.jsx("pre",{className:"text-blue-300 bg-slate-900 p-3 rounded-lg border border-slate-800",children:u.springControllerCode})]}),n.jsxs("div",{children:[n.jsx("span",{className:"text-xs font-sans font-semibold text-slate-400 block mb-1",children:c?"2. Spring Service İş Mantığı Metodu:":"2. Spring Service Business Logic Method:"}),n.jsx("pre",{className:"text-purple-300 bg-slate-900 p-3 rounded-lg border border-slate-800",children:u.springServiceCode})]})]})]})]})]})]})]})},io=[{id:"web",name:"Spring Web",descriptionTr:"RESTful API'ler, Spring MVC ve gömülü Apache Tomcat sunucusu içerir.",descriptionEn:"Build RESTful APIs with Spring MVC and embedded Apache Tomcat.",categoryTr:"Web & API",categoryEn:"Web & API",groupId:"org.springframework.boot",artifactId:"spring-boot-starter-web",defaultSelected:!0},{id:"jpa",name:"Spring Data JPA",descriptionTr:"Hibernate, EntityManager ve Repository desenleriyle veritabanı yönetimi.",descriptionEn:"Persist data in SQL stores with Java Persistence API using Spring Data and Hibernate.",categoryTr:"SQL & Veritabanı",categoryEn:"SQL & Database",groupId:"org.springframework.boot",artifactId:"spring-boot-starter-data-jpa",defaultSelected:!0},{id:"postgres",name:"PostgreSQL Driver",descriptionTr:"PostgreSQL ilişkisel veritabanı JDBC sürücüsü.",descriptionEn:"A JDBC and R2DBC driver that allows Java programs to connect to PostgreSQL.",categoryTr:"SQL & Veritabanı",categoryEn:"SQL & Database",groupId:"org.postgresql",artifactId:"postgresql",scope:"runtime",defaultSelected:!0},{id:"security",name:"Spring Security",descriptionTr:"Kimlik doğrulama, yetkilendirme, CORS ve CSRF koruması.",descriptionEn:"Highly customizable authentication and access-control framework for Spring applications.",categoryTr:"Güvenlik",categoryEn:"Security",groupId:"org.springframework.boot",artifactId:"spring-boot-starter-security",defaultSelected:!0},{id:"validation",name:"Jakarta Validation",descriptionTr:"Hibernate Validator ile @NotNull, @Size, @Email girdi denetimleri.",descriptionEn:"Bean Validation with Hibernate Validator supporting @NotNull, @Size, @Email.",categoryTr:"Doğrulama & Model",categoryEn:"Validation & Model",groupId:"org.springframework.boot",artifactId:"spring-boot-starter-validation",defaultSelected:!0},{id:"actuator",name:"Spring Boot Actuator",descriptionTr:"Üretim ortamı için sağlık (Health), metrikler ve izleme uçları.",descriptionEn:"Supports built-in operational endpoints for monitoring, health checks, and metrics.",categoryTr:"DevOps & İzleme",categoryEn:"DevOps & Monitoring",groupId:"org.springframework.boot",artifactId:"spring-boot-starter-actuator",defaultSelected:!1},{id:"lombok",name:"Lombok",descriptionTr:"Getter, Setter, Constructor ve Builder kodlarını otomatik üreten kütüphane.",descriptionEn:"Java annotation library which helps to reduce boilerplate code (getters, builders, constructors).",categoryTr:"Geliştirici Araçları",categoryEn:"Developer Tools",groupId:"org.projectlombok",artifactId:"lombok",scope:"provided",defaultSelected:!0},{id:"jjwt",name:"JJWT (Java JWT)",descriptionTr:"Stateless REST API'ler için JSON Web Token oluşturma ve imzalama.",descriptionEn:"Java JWT library for signing, parsing, and verifying HMAC and RSA JWT tokens.",categoryTr:"Güvenlik",categoryEn:"Security",groupId:"io.jsonwebtoken",artifactId:"jjwt-api",defaultSelected:!1}],rf=()=>{const{language:d}=Ke(),c=d==="tr",[u,b]=F.useState("21"),[j,y]=F.useState("3.3.4"),[A,C]=F.useState(io.filter(T=>T.defaultSelected).map(T=>T.id)),[k,N]=F.useState("pom"),J=T=>{C(B=>B.includes(T)?B.filter(E=>E!==T):[...B,T])},U=()=>{const T=io.filter(B=>A.includes(B.id));return`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>${j}</version>
        <relativePath/>
    </parent>
    
    <groupId>com.example</groupId>
    <artifactId>mastery-project</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>mastery-project</name>
    <description>Spring Boot Mastery Demo Project</description>
    
    <properties>
        <java.version>${u}</java.version>
    </properties>
    
    <dependencies>
${T.map(B=>`        <dependency>
            <groupId>${B.groupId}</groupId>
            <artifactId>${B.artifactId}</artifactId>${B.scope?`
            <scope>${B.scope}</scope>`:""}
        </dependency>`).join(`
`)}
        
        <!-- Test Dependencies -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>`},I=()=>{const T=A.includes("jpa"),B=A.includes("postgres"),E=A.includes("actuator"),S=A.includes("security");let ee=`server:
  port: 8080
  shutdown: graceful

spring:
  application:
    name: mastery-service
  threads:
    virtual:
      enabled: true # Java 21 Virtual Threads
`;return B&&T&&(ee+=`
  datasource:
    url: \${DB_URL:jdbc:postgresql://localhost:5432/masterydb}
    username: \${DB_USER:postgres}
    password: \${DB_PASS:postgres}
    driver-class-name: org.postgresql.Driver
    hikari:
      maximum-pool-size: 10
      minimum-idle: 5
      connection-timeout: 20000

  jpa:
    hibernate:
      ddl-auto: validate
    open-in-view: false # Prevents DB pool exhaustion
    show-sql: false
    properties:
      hibernate:
        format_sql: true
        jdbc:
          batch_size: 25
`),E&&(ee+=`
management:
  endpoints:
    web:
      exposure:
        include: "health,info,prometheus" # Security Best Practice: Whitelist only
  endpoint:
    health:
      probes:
        enabled: true
`),S&&(ee+=`
app:
  jwt:
    secret-key: \${JWT_SECRET:secretKey123456789012345678901234567890}
    expiration: 86400000 # 24h
`),ee.trim()};return n.jsxs("div",{className:"rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl p-6 overflow-hidden",children:[n.jsxs("div",{className:"border-b border-slate-800 pb-4 mb-6",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:n.jsx(Pd,{className:"w-4 h-4"})}),n.jsx("h3",{className:"text-lg font-bold text-white",children:c?"İnteraktif Spring Initializr & Yapılandırma Oluşturucu":"Interactive Spring Initializr & Config Generator"})]}),n.jsx("p",{className:"text-xs text-slate-400 mt-1",children:c?"Java sürümünüzü ve ihtiyacınız olan Spring Boot bağımlılıklarını seçin; dinamik pom.xml ve application.yml anında üretilsin.":"Select your target Java runtime and Spring Boot starters to dynamically generate production-ready pom.xml and application.yml files."})]}),n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[n.jsxs("div",{className:"lg:col-span-5 space-y-5",children:[n.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3",children:[n.jsxs("div",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",children:[n.jsx(hg,{className:"w-3.5 h-3.5 text-emerald-400"}),n.jsx("span",{children:c?"Çalışma Ortamı Ayarları":"Runtime Environment"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 text-xs",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-slate-400 mb-1 font-medium",children:c?"Java Sürümü":"Java Version"}),n.jsxs("div",{className:"flex rounded-lg bg-slate-900 p-1 border border-slate-800",children:[n.jsx("button",{onClick:()=>b("21"),className:`flex-1 py-1.5 rounded-md font-semibold text-center transition-colors ${u==="21"?"bg-emerald-600 text-white":"text-slate-400 hover:text-white"}`,children:"Java 21 (LTS)"}),n.jsx("button",{onClick:()=>b("17"),className:`flex-1 py-1.5 rounded-md font-semibold text-center transition-colors ${u==="17"?"bg-emerald-600 text-white":"text-slate-400 hover:text-white"}`,children:"Java 17 (LTS)"})]})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-slate-400 mb-1 font-medium",children:c?"Spring Boot Sürümü":"Boot Version"}),n.jsxs("div",{className:"flex rounded-lg bg-slate-900 p-1 border border-slate-800",children:[n.jsxs("button",{onClick:()=>y("3.3.4"),className:`flex-1 py-1.5 rounded-md font-semibold text-center transition-colors ${j==="3.3.4"?"bg-emerald-600 text-white":"text-slate-400 hover:text-white"}`,children:["3.3.4 ",c?"(Güncel)":"(Latest)"]}),n.jsx("button",{onClick:()=>y("3.2.10"),className:`flex-1 py-1.5 rounded-md font-semibold text-center transition-colors ${j==="3.2.10"?"bg-emerald-600 text-white":"text-slate-400 hover:text-white"}`,children:"3.2.10"})]})]})]})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("label",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider block",children:c?"Bağımlılıklar (Starters)":"Dependencies (Starters)"}),n.jsxs("span",{className:"text-[11px] text-emerald-400 font-mono",children:[A.length," ",c?"Seçili":"Selected"]})]}),n.jsx("div",{className:"space-y-2 max-h-[320px] overflow-y-auto pr-1",children:io.map(T=>{const B=A.includes(T.id);return n.jsxs("button",{onClick:()=>J(T.id),className:`w-full text-left p-2.5 rounded-xl border transition-all flex items-start gap-3 ${B?"bg-emerald-950/30 border-emerald-500/50 text-slate-200":"bg-slate-950/40 border-slate-800 text-slate-400 hover:bg-slate-800/40"}`,children:[n.jsx("div",{className:"mt-0.5 text-emerald-400 shrink-0",children:B?n.jsx(yg,{className:"w-4 h-4 fill-emerald-500 text-slate-950"}):n.jsx(vg,{className:"w-4 h-4 text-slate-600"})}),n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-xs font-bold text-white",children:T.name}),n.jsx("span",{className:"text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 border border-slate-700/60",children:c?T.categoryTr:T.categoryEn})]}),n.jsx("p",{className:"text-[11px] text-slate-400 mt-0.5 line-clamp-1",children:c?T.descriptionTr:T.descriptionEn})]})]},T.id)})})]})]}),n.jsxs("div",{className:"lg:col-span-7 flex flex-col",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-2 mb-3",children:[n.jsxs("div",{className:"flex space-x-1",children:[n.jsx("button",{onClick:()=>N("pom"),className:`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${k==="pom"?"bg-emerald-600 text-white":"bg-slate-800 text-slate-400 hover:text-slate-200"}`,children:"pom.xml (Maven)"}),n.jsx("button",{onClick:()=>N("yml"),className:`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${k==="yml"?"bg-emerald-600 text-white":"bg-slate-800 text-slate-400 hover:text-slate-200"}`,children:"application.yml"})]}),n.jsx("span",{className:"text-xs text-slate-500 font-mono",children:c?"Dinamik Çıktı":"Dynamic Output"})]}),n.jsx("div",{className:"flex-1",children:k==="pom"?n.jsx(pr,{code:U(),language:"xml",filename:"pom.xml",showLineNumbers:!0}):n.jsx(pr,{code:I(),language:"yaml",filename:"src/main/resources/application.yml",showLineNumbers:!0})})]})]})]})},nf=()=>{const[d,c]=F.useState("coding"),{t:u}=Ke();return n.jsxs("div",{className:"space-y-8 py-6",children:[n.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-2",children:[n.jsx(At,{className:"w-3.5 h-3.5"}),n.jsx("span",{children:u.practice.badge})]}),n.jsx("h1",{className:"text-2xl sm:text-3xl font-black text-white",children:u.practice.title}),n.jsx("p",{className:"text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl",children:u.practice.desc})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-1.5 bg-slate-900/90 p-1 rounded-2xl border border-slate-800 text-xs shrink-0",children:[n.jsxs("button",{onClick:()=>c("coding"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-all ${d==="coding"?"bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.15)] font-bold":"text-slate-400 hover:text-slate-100 hover:bg-slate-800/60"}`,children:[n.jsx(Xr,{className:"w-3.5 h-3.5"}),n.jsx("span",{children:"Studio"})]}),n.jsxs("button",{onClick:()=>c("architecture"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-all ${d==="architecture"?"bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.15)] font-bold":"text-slate-400 hover:text-slate-100 hover:bg-slate-800/60"}`,children:[n.jsx(Id,{className:"w-3.5 h-3.5"}),n.jsx("span",{children:"Hexagonal"})]}),n.jsxs("button",{onClick:()=>c("lifecycle"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-all ${d==="lifecycle"?"bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.15)] font-bold":"text-slate-400 hover:text-slate-100 hover:bg-slate-800/60"}`,children:[n.jsx(en,{className:"w-3.5 h-3.5"}),n.jsx("span",{children:"Lifecycle"})]}),n.jsxs("button",{onClick:()=>c("api"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-all ${d==="api"?"bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.15)] font-bold":"text-slate-400 hover:text-slate-100 hover:bg-slate-800/60"}`,children:[n.jsx(Er,{className:"w-3.5 h-3.5"}),n.jsx("span",{children:"REST & SQL"})]}),n.jsxs("button",{onClick:()=>c("starter"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-all ${d==="starter"?"bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.15)] font-bold":"text-slate-400 hover:text-slate-100 hover:bg-slate-800/60"}`,children:[n.jsx(Pd,{className:"w-3.5 h-3.5"}),n.jsx("span",{children:"Initializr"})]})]})]}),n.jsxs("div",{children:[d==="coding"&&n.jsx(zu,{}),d==="architecture"&&n.jsx(Yg,{}),d==="lifecycle"&&n.jsx(ef,{}),d==="api"&&n.jsx(tf,{}),d==="starter"&&n.jsx(rf,{})]})]})},xd=[{id:"ioc",term:"IoC (Inversion of Control)",englishTerm:"Inversion of Control",category:"Core & IoC",definition:"Nesnelerin oluşturulması, yaşam döngüsünün yönetilmesi ve birbirine bağlanması kontrolünün geliştiriciden alınıp bir framework container'ına (Spring ApplicationContext) devredilmesi prensibidir.",inSpringContext:"Spring Boot'ta IoC Container, `@Component`, `@Service`, `@Repository` gibi anotasyonları tarayarak nesneleri ayağa kaldırır ve yönetir.",codeExample:`// Geliştirici new demez; container inject eder
@Service
public class OrderService {
    private final PaymentService paymentService;
    public OrderService(PaymentService paymentService) {
        this.paymentService = paymentService;
    }
}`,relatedKeywords:["ApplicationContext","BeanFactory","Dependency Injection","@Component"]},{id:"di",term:"DI (Dependency Injection)",englishTerm:"Dependency Injection",category:"Core & IoC",definition:"Bir sınıfın ihtiyaç duyduğu bağımlılıkları kendisi üretmek yerine, dışarıdan (constructor, setter veya field yoluyla) alması tasarım desenidir.",inSpringContext:"Spring Boot'ta en güvenli ve önerilen yöntem Constructor Injection'dır (Immutability ve test edilebilirlik sağlar).",codeExample:`public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
}`,relatedKeywords:["Constructor Injection","@Autowired","Field Injection","Inversion of Control"]},{id:"aop",term:"AOP (Aspect-Oriented Programming)",englishTerm:"Aspect-Oriented Programming",category:"Core & IoC",definition:"Uygulamanın ana iş mantığını kirletmeden; loglama, güvenlik, transaction yönetimi ve performans ölçümü gibi kesişen endişeleri (Cross-Cutting Concerns) modüler hale getirme paradigmasıdır.",inSpringContext:"`@Transactional`, `@Async`, `@PreAuthorize` gibi anotasyonların arkasında Spring AOP dinamik proxy mekanizması çalışır.",codeExample:`@Aspect
@Component
public class LoggingAspect {
    @Around("@annotation(LogExecutionTime)")
    public Object logTime(ProceedingJoinPoint joinPoint) throws Throwable {
        long start = System.currentTimeMillis();
        Object proceed = joinPoint.proceed();
        System.out.println("Süre: " + (System.currentTimeMillis() - start) + "ms");
        return proceed;
    }
}`,relatedKeywords:["Pointcut","Advice","JoinPoint","Proxy","@Transactional"]},{id:"proxy",term:"Dynamic Proxy (CGLIB / JDK)",englishTerm:"Dynamic Proxy",category:"Core & IoC",definition:"Orijinal sınıfın etrafını saran ve metot çağrılarını araya girerek (interception) kontrol eden sahte nesnedir.",inSpringContext:"Spring Boot 2.x/3.x varsayılan olarak CGLIB subclassing proxy kullanır. Sınıf içi metot çağrılarında (Self-invocation) proxy atlandığı için `@Transactional` veya `@Async` çalışmaz.",codeExample:`// Proxy çalışma mantığı
public void methodA() {
    // Proxy Transaction başlatır (BEGIN TX)
    target.methodA();
    // Proxy Transaction commit eder (COMMIT)
}`,relatedKeywords:["AOP","CGLIB","JDK Dynamic Proxy","Self-Invocation"]},{id:"dirty-checking",term:"Dirty Checking (Kirli Alan Denetimi)",englishTerm:"Hibernate Dirty Checking",category:"JPA & Hibernate",definition:"Hibernate Persistence Context'in, bir Entity üzerinde yapılan değişiklikleri transaction commit anında otomatik olarak tespit edip SQL UPDATE sorgusunu kendiliğinden fırlatması mekanizmasıdır.",inSpringContext:"`@Transactional` metot içinde entity'nin setter metodu çağrıldığında `repository.save()` yazmaya gerek kalmadan veritabanı güncellenir.",codeExample:`@Transactional
public void updateEmail(Long id, String email) {
    User user = userRepository.findById(id).orElseThrow();
    user.setEmail(email); // Hibernate commit anında UPDATE fırlatır!
}`,relatedKeywords:["Persistence Context","First-Level Cache","@Transactional","Hibernate"]},{id:"first-level-cache",term:"First-Level Cache (Persistence Context)",englishTerm:"First-Level Cache",category:"JPA & Hibernate",definition:"Mevcut Hibernate Session / EntityManager (Transaction) boyunca yaşayan, aynı ID'li entity sorgularını veritabanına gitmeden bellekten getiren birinci seviye önbellektir.",inSpringContext:"Aynı transaction içinde 5 kez `findById(1L)` çağırsanız bile veritabanına sadece 1 kez SELECT SQL'i atılır.",codeExample:`// Sadece 1 SQL çalışır; ikincisi Persistence Context'ten döner
User u1 = entityManager.find(User.class, 1L);
User u2 = entityManager.find(User.class, 1L);`,relatedKeywords:["EntityManager","Persistence Context","Second-Level Cache","Transaction"]},{id:"second-level-cache",term:"Second-Level Cache (L2 Cache)",englishTerm:"Second-Level Cache",category:"JPA & Hibernate",definition:"SessionFactory (tüm uygulama) düzeyinde paylaşılan, transaction sınırlarını aşan ve genellikle Redis veya Hazelcast/Ehcache ile yönetilen ikinci seviye önbellektir.",inSpringContext:"Sık okunan ve nadir değişen lookup/referans tabloları için `@Cacheable` veya Hibernate L2 Cache yapılandırılır.",codeExample:`@Entity
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class City { ... }`,relatedKeywords:["Redis","Hazelcast","@Cacheable","Ehcache"]},{id:"n-plus-one",term:"N+1 Query Problemi",englishTerm:"N+1 Query Problem",category:"JPA & Hibernate",definition:"Ana tablo için atılan 1 sorgunun ardından, ilişkili LAZY koleksiyonlar her döngüde çağrıldığında N adet ek sorgu fırlatılması sonucu oluşan performans krizidir.",inSpringContext:"Spring Data JPA'da `JOIN FETCH` (JPQL) veya `@EntityGraph` kullanılarak tek sorguda veriler çekilerek çözülür.",codeExample:`// N+1 Çözümü
@Query("SELECT DISTINCT o FROM Order o LEFT JOIN FETCH o.items WHERE o.id = :id")
Optional<Order> findByIdWithItems(@Param("id") Long id);`,relatedKeywords:["JOIN FETCH","@EntityGraph","BatchSize","Lazy Loading"]},{id:"idempotency",term:"Idempotency (Eşgüçlülük)",englishTerm:"Idempotency",category:"REST & Web",definition:"Bir HTTP isteğinin arka arkaya 1 kez veya 100 kez çalıştırıldığında sunucuda aynı nihai durumu (state) üretmesi özelliğidir.",inSpringContext:"`GET`, `PUT`, `DELETE` metotları idempotent olmalıdır. `POST` ise her çağrıda yeni kayıt oluşturduğu için idempotent değildir.",codeExample:"DELETE /api/v1/users/42 -> İlk çağrıda 204 No Content, sonraki çağrılarda durum değişmez (idempotent).",relatedKeywords:["HTTP Methods","REST","PUT","DELETE","POST"]},{id:"rfc-7807",term:"RFC 7807 (ProblemDetails)",englishTerm:"Problem Details for HTTP APIs",category:"REST & Web",definition:"HTTP API hata yanıtlarını uluslararası standartta tek bir JSON şemasında (type, title, status, detail, instance) döndüren IETF spesifikasyonudur.",inSpringContext:"Spring Boot 3.x yerleşik `ProblemDetail` sınıfını ve `@RestControllerAdvice` desteğini getirmiştir.",codeExample:`@ExceptionHandler(ResourceNotFoundException.class)
public ProblemDetail handleNotFound(ResourceNotFoundException ex) {
    return ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, ex.getMessage());
}`,relatedKeywords:["@RestControllerAdvice","ProblemDetail","GlobalExceptionHandler","HTTP 404"]},{id:"circuit-breaker",term:"Circuit Breaker (Devre Kesici)",englishTerm:"Circuit Breaker Pattern",category:"Mimari & Patterns",definition:"Bir dış servise yapılan çağrılar sürekli hata verdiğinde veya zaman aşımına uğradığında, servisi geçici olarak devreden çıkarıp fallback yanıt dönerek sistemin kilitlenmesini engelleyen sigorta mekanizmasıdır.",inSpringContext:'Spring Cloud ekosisteminde **Resilience4j** kütüphanesi `@CircuitBreaker(name="serviceName", fallbackMethod="fallback")` ile uygulanır.',codeExample:`@CircuitBreaker(name = "paymentService", fallbackMethod = "paymentFallback")
public PaymentResponse process(PaymentRequest req) {
    return paymentClient.charge(req);
}`,relatedKeywords:["Resilience4j","Fallback","Microservices","Spring Cloud"]},{id:"virtual-threads",term:"Virtual Threads (Project Loom)",englishTerm:"Java 21 Virtual Threads",category:"Performans & DevOps",definition:"İşletim sistemi thread'lerine (OS Threads) birebir bağlanmayan, JVM tarafından yönetilen ultra hafif (Lightweight) iş parçacıklarıdır.",inSpringContext:"Spring Boot 3.2+ ve Java 21 ile `spring.threads.virtual.enabled=true` yapılarak Tomcat'in her HTTP isteğini bir Virtual Thread üzerinde bloklamadan milyarlarca eşzamanlı istekle işlemesi sağlanır.",codeExample:`# application.yml
spring:
  threads:
    virtual:
      enabled: true`,relatedKeywords:["Java 21","Project Loom","Tomcat","Non-blocking"]},{id:"stateless-auth",term:"Stateless Authentication (Durumsuz Kimlik Doğrulama)",englishTerm:"Stateless Authentication",category:"Security",definition:"Sunucunun kullanıcı oturum bilgilerini RAM veya Session'da tutmadığı; her isteğin imzalanmış bir JWT token ile kendini doğruladığı güvenlik mimarisidir.",inSpringContext:"Spring Security 6'da `sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))` ile ayarlanır.",codeExample:"http.sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS));",relatedKeywords:["JWT","Spring Security 6","Bearer Token","SecurityFilterChain"]}],af=(d="tr")=>d==="en"?xd.map(c=>{const b={ioc:{definition:"A design principle in which the control of object creation, lifecycle management, and dependency wiring is transferred from the application code to a framework container (Spring ApplicationContext).",inSpringContext:"In Spring Boot, the IoC Container automatically detects `@Component`, `@Service`, `@Repository` annotations and instantiates managed beans."},di:{definition:"A specialized pattern of Inversion of Control where dependencies are provided to an object (via constructor, setter, or field) rather than the object creating them internally.",inSpringContext:"Constructor Injection is the strongly recommended approach in modern Spring Boot, ensuring immutability and testability."},aop:{definition:"A programming paradigm that encapsulates cross-cutting concerns (logging, security, transaction management, metrics) without cluttering business logic.",inSpringContext:"Annotations like `@Transactional`, `@Async`, and `@PreAuthorize` are powered under the hood by Spring AOP dynamic proxies."},proxy:{definition:"A surrogate or wrapper object that intercepts method calls to target beans to apply cross-cutting behavior like transaction boundaries or caching.",inSpringContext:"Spring Boot uses CGLIB class proxies by default. Direct internal method calls (self-invocation) bypass proxies and will not trigger `@Transactional`."},"dirty-checking":{definition:"Hibernate Persistence Context mechanism that automatically detects entity property mutations at commit time and issues appropriate SQL UPDATE statements.",inSpringContext:"Inside `@Transactional` methods, calling `repository.save()` is redundant when modifying managed entities."},"first-level-cache":{definition:"A mandatory, transaction-scoped Hibernate Session cache that deduplicates database queries for the same entity identity within a single transaction.",inSpringContext:"Guarantees repeatable reads and entity identity equality within a transaction boundary."},"rfc-7807":{definition:"An IETF standard defining a standardized JSON structure (Problem Details) for HTTP API error reporting.",inSpringContext:"Native support in Spring Boot 3 via `ProblemDetail` and `ErrorResponseException` classes."},"virtual-threads":{definition:"Lightweight, JVM-managed user-mode threads introduced in Java 21 (Project Loom) enabling massive scalability for I/O bound workloads.",inSpringContext:"Enabled globally in Spring Boot 3.2+ with a single configuration property: `spring.threads.virtual.enabled=true`."}}[c.id];return b?{...c,...b}:c}):xd,sf=()=>{var I;const{language:d,t:c}=Ke(),[u,b]=F.useState(""),[j,y]=F.useState("All"),A=F.useMemo(()=>af(d),[d]),[C,k]=F.useState(((I=A[0])==null?void 0:I.id)||null),N=["All","Core & IoC","JPA & Hibernate","Security","REST & Web","Mimari & Patterns","Performans & DevOps"],J=F.useMemo(()=>{const T=u.toLowerCase().trim();return A.filter(B=>{const E=j==="All"||B.category===j,S=!T||B.term.toLowerCase().includes(T)||B.englishTerm.toLowerCase().includes(T)||B.definition.toLowerCase().includes(T)||B.inSpringContext.toLowerCase().includes(T)||B.relatedKeywords.some(ee=>ee.toLowerCase().includes(T));return E&&S})},[u,j,A]),U=T=>{k(C===T?null:T)};return n.jsxs("div",{className:"space-y-8 py-6",children:[n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-2 border border-emerald-500/20",children:[n.jsx(Gn,{className:"w-3.5 h-3.5"}),n.jsx("span",{children:c.glossary.badge})]}),n.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-white",children:c.glossary.title}),n.jsx("p",{className:"text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl",children:c.glossary.desc})]}),n.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-emerald-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 shrink-0",children:[n.jsx(At,{className:"w-3.5 h-3.5"}),n.jsxs("span",{children:[A.length," ",c.glossary.countTerms]})]})]}),n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{className:"relative",children:[n.jsx(ho,{className:"w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2"}),n.jsx("input",{type:"text",placeholder:c.glossary.searchPlaceholder,value:u,onChange:T=>b(T.target.value),className:"w-full pl-10 pr-10 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors shadow-inner"}),u&&n.jsx("button",{onClick:()=>b(""),className:"absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white",children:n.jsx(vo,{className:"w-4 h-4"})})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-1.5 text-xs",children:[n.jsx(go,{className:"w-3.5 h-3.5 text-slate-500 mr-1"}),N.map(T=>{const B=T==="All"?c.glossary.allCategories:T==="Mimari & Patterns"&&d==="en"?"Architecture & Patterns":T==="Performans & DevOps"&&d==="en"?"Performance & DevOps":T;return n.jsx("button",{onClick:()=>y(T),className:`px-3 py-1.5 rounded-lg font-medium transition-colors ${j===T?"bg-emerald-600 text-white shadow-md":"bg-slate-900 text-slate-400 hover:text-white border border-slate-800"}`,children:B},T)})]})]}),J.length===0?n.jsxs("div",{className:"text-center py-12 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-2",children:[n.jsx(_d,{className:"w-8 h-8 text-slate-500 mx-auto"}),n.jsxs("h3",{className:"text-base font-bold text-slate-300",children:['"',u,'" ',c.glossary.noResults]})]}):n.jsx("div",{className:"space-y-4",children:J.map(T=>{const B=C===T.id;return n.jsxs("div",{className:`rounded-2xl border transition-all duration-200 overflow-hidden ${B?"bg-slate-900/95 border-emerald-500/50 shadow-xl":"bg-slate-950/70 border-slate-800 hover:bg-slate-900/60 hover:border-slate-700"}`,children:[n.jsxs("div",{onClick:()=>U(T.id),className:"p-4 sm:p-5 flex items-center justify-between cursor-pointer gap-4",children:[n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4",children:[n.jsx("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:n.jsx("span",{children:T.term})}),n.jsxs("span",{className:"text-xs font-mono text-slate-500 hidden sm:inline",children:["(",T.englishTerm,")"]})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-emerald-400 border border-slate-700",children:T.category}),n.jsx(ai,{className:`w-4 h-4 text-slate-500 transition-transform duration-200 ${B?"rotate-90 text-emerald-400":""}`})]})]}),B&&n.jsxs("div",{className:"px-5 pb-5 pt-1 space-y-4 border-t border-slate-800/80 animate-in fade-in duration-200 text-xs sm:text-sm",children:[n.jsxs("div",{className:"space-y-1",children:[n.jsx("span",{className:"font-bold text-slate-300 uppercase tracking-wider text-[11px]",children:d==="en"?"Definition:":"Genel Tanım:"}),n.jsx("p",{className:"text-slate-300 leading-relaxed",children:T.definition})]}),n.jsxs("div",{className:"p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-1 text-xs",children:[n.jsx("span",{className:"font-bold text-emerald-400 block uppercase tracking-wider text-[10px]",children:d==="en"?"Spring Boot Context & Architecture Role:":"Spring Boot Ekosistemindeki Yeri & Önemi:"}),n.jsx("p",{className:"text-slate-200 leading-relaxed",children:T.inSpringContext})]}),T.codeExample&&n.jsxs("div",{className:"space-y-1",children:[n.jsx("span",{className:"font-bold text-slate-400 uppercase tracking-wider text-[10px] block",children:d==="en"?"Code Example:":"Örnek Kod & Kullanım:"}),n.jsx(pr,{code:T.codeExample,language:"java",showLineNumbers:!1})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-800",children:[n.jsx(xg,{className:"w-3 h-3 text-slate-500 mr-1"}),T.relatedKeywords.map(E=>n.jsxs("button",{onClick:S=>{S.stopPropagation(),b(E)},className:"text-[10px] px-2 py-0.5 rounded-md bg-slate-800/80 hover:bg-emerald-950/40 hover:text-emerald-300 text-slate-400 border border-slate-700/60 transition-colors",children:["#",E]},E))]})]})]},T.id)})})]})},of=()=>{const{language:d,t:c}=Ke(),[u,b]=F.useState("All"),j=["All","Security","JPA & DB","Architecture & REST","Exceptions & Validation"],y=F.useMemo(()=>Tg(d),[d]),A=u==="All"?y:y.filter(C=>C.category===u);return n.jsxs("div",{className:"space-y-8 py-6",children:[n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-2 border border-amber-500/20",children:[n.jsx(At,{className:"w-3.5 h-3.5"}),n.jsx("span",{children:c.recipes.badge})]}),n.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-white",children:c.recipes.title}),n.jsx("p",{className:"text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl",children:c.recipes.desc})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-1.5 bg-slate-900 p-1.5 rounded-xl border border-slate-800 text-xs",children:[n.jsx(go,{className:"w-3.5 h-3.5 text-slate-500 ml-1.5 mr-0.5"}),j.map(C=>n.jsx("button",{onClick:()=>b(C),className:`px-3 py-1.5 rounded-lg font-medium transition-colors ${u===C?"bg-amber-600 text-white shadow":"text-slate-400 hover:text-white"}`,children:C==="All"?d==="en"?"All":"Tümü":C},C))]})]}),n.jsx("div",{className:"space-y-8",children:A.map(C=>n.jsxs("div",{className:"rounded-2xl border border-slate-800 bg-slate-900/90 shadow-xl p-6 space-y-4",children:[n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[n.jsx("span",{className:"text-xs font-semibold px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20",children:C.category}),n.jsx("span",{className:"text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700",children:C.complexity})]}),n.jsx("h3",{className:"text-lg font-bold text-white",children:C.title})]}),n.jsx("div",{className:"flex flex-wrap items-center gap-1.5",children:C.tags.map(k=>n.jsxs("span",{className:"text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400",children:["#",k]},k))})]}),n.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:C.description}),n.jsx(pr,{code:C.code,language:"java",filename:C.filename,showLineNumbers:!0})]},C.id))})]})},lf=()=>{const{language:d,t:c}=Ke(),u=F.useMemo(()=>Ag(d),[d]),[b,j]=F.useState(0),[y,A]=F.useState({}),[C,k]=F.useState(!1),[N,J]=F.useState("All"),U=F.useMemo(()=>N==="All"?u:u.filter(re=>N==="Başlangıç"||N==="Beginner"?re.difficulty==="Başlangıç"||re.difficulty==="Beginner":N==="Orta"||N==="Intermediate"?re.difficulty==="Orta"||re.difficulty==="Intermediate":N==="İleri"||N==="Advanced"?re.difficulty==="İleri"||re.difficulty==="Advanced":!0),[N,u]),I=U[b]||U[0],T=U.length,B=I?y[I.id]:void 0,E=B!==void 0,S=re=>{E||!I||A(le=>({...le,[I.id]:re}))},ee=()=>{b<T-1?j(re=>re+1):(k(!0),Lu({particleCount:100,spread:70,origin:{y:.6}}))},M=()=>{b>0&&j(re=>re-1)},de=()=>{A({}),j(0),k(!1)},ve=Object.keys(y).reduce((re,le)=>{const be=u.find(xe=>xe.id===le);return be&&y[le]===be.correctIndex?re+1:re},0),Ne=Object.keys(y).length,Te=T>0?Ne/T*100:0;if(C){const re=Math.round(ve/T*100);return n.jsxs("div",{className:"space-y-8 animate-in fade-in duration-300",children:[n.jsxs("div",{className:"p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 text-center space-y-6 shadow-2xl relative overflow-hidden",children:[n.jsx("div",{className:"w-20 h-20 mx-auto rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400",children:n.jsx(kg,{className:"w-10 h-10"})}),n.jsxs("div",{className:"space-y-2",children:[n.jsx("h2",{className:"text-3xl font-extrabold text-white",children:c.quiz.resultTitle}),n.jsxs("p",{className:"text-slate-400 text-sm",children:[T," ",d==="en"?"questions completed.":"sorudan"," ",ve," ",d==="en"?"correct answers.":"doğru yaptınız."]})]}),n.jsxs("div",{className:"flex justify-center items-center gap-6 py-4",children:[n.jsxs("div",{className:"px-6 py-4 rounded-2xl bg-slate-900 border border-slate-800",children:[n.jsx("span",{className:"text-xs text-slate-400 uppercase tracking-wider block mb-1",children:c.quiz.score}),n.jsxs("span",{className:"text-3xl font-black text-emerald-400 font-mono",children:["%",re]})]}),n.jsxs("div",{className:"px-6 py-4 rounded-2xl bg-slate-900 border border-slate-800",children:[n.jsx("span",{className:"text-xs text-slate-400 uppercase tracking-wider block mb-1",children:d==="en"?"Accuracy":"Doğruluk"}),n.jsxs("span",{className:"text-3xl font-black text-white font-mono",children:[ve," / ",T]})]})]}),n.jsx("div",{children:n.jsxs("button",{onClick:de,className:"inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all hover:scale-105",children:[n.jsx(fo,{className:"w-4 h-4"}),n.jsx("span",{children:c.quiz.restartTest})]})})]}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("h3",{className:"text-xl font-bold text-white flex items-center gap-2",children:[n.jsx(rg,{className:"w-5 h-5 text-emerald-400"}),n.jsx("span",{children:c.quiz.reviewTitle})]}),n.jsx("div",{className:"space-y-4",children:U.map((le,be)=>{const xe=y[le.id],Pe=xe===le.correctIndex;return n.jsxs("div",{className:`p-6 rounded-2xl border ${Pe?"bg-emerald-950/20 border-emerald-500/30":xe!==void 0?"bg-rose-950/20 border-rose-500/30":"bg-slate-900/50 border-slate-800"}`,children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsxs("span",{className:"text-xs font-mono text-slate-400 font-semibold",children:[d==="en"?`Question 0${be+1}`:`Soru 0${be+1}`," • ",le.springConcept]}),n.jsx("span",{className:`text-xs font-bold px-2.5 py-0.5 rounded-full ${Pe?"bg-emerald-500/20 text-emerald-400":xe!==void 0?"bg-rose-500/20 text-rose-400":"bg-slate-800 text-slate-400"}`,children:Pe?d==="en"?"Correct":"Doğru":xe!==void 0?d==="en"?"Incorrect":"Yanlış":d==="en"?"Unanswered":"Boş"})]}),n.jsx("h4",{className:"text-base font-semibold text-white mb-3",children:le.question}),n.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1",children:[n.jsxs("div",{className:"font-bold text-emerald-400 flex items-center gap-1.5",children:[n.jsx(hd,{className:"w-3.5 h-3.5"}),n.jsx("span",{children:d==="en"?"Technical Explanation:":"Teknik Açıklama:"})]}),n.jsx("p",{className:"leading-relaxed",children:le.explanation})]})]},le.id)})})]})]})}return n.jsxs("div",{className:"space-y-6",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs",children:[n.jsxs("div",{className:"flex items-center gap-2 font-semibold text-slate-300",children:[n.jsx("span",{children:d==="en"?"Difficulty Filter:":"Zorluk Filtresi:"}),n.jsx("div",{className:"flex items-center gap-1",children:["All","Başlangıç","Orta","İleri"].map(re=>{const le=re==="All"?d==="en"?"All":"Tümü":d==="en"?re==="Başlangıç"?"Beginner":re==="Orta"?"Intermediate":"Advanced":re;return n.jsx("button",{onClick:()=>{J(re),j(0)},className:`px-2.5 py-1 rounded-lg transition-colors ${N===re?"bg-emerald-600 text-white font-bold":"text-slate-400 hover:text-white bg-slate-800"}`,children:le},re)})})]}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("span",{className:"text-slate-400 font-mono",children:[Ne,"/",T," ",d==="en"?"Answered":"Cevaplandı"]}),n.jsx("div",{className:"w-24 h-2 bg-slate-800 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-emerald-500 transition-all duration-300",style:{width:`${Te}%`}})})]})]}),n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 items-start",children:[I&&n.jsxs("div",{className:"lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsxs("span",{className:"text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:[c.quiz.question," ",b+1," / ",T]}),n.jsx("span",{className:"text-xs text-slate-400 px-2 py-0.5 rounded bg-slate-800 border border-slate-700",children:I.difficulty})]}),n.jsx("span",{className:"text-xs font-mono text-slate-400 font-semibold",children:I.springConcept})]}),n.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white leading-relaxed",children:I.question}),I.codeSnippet&&n.jsx(pr,{code:I.codeSnippet,language:"java",showLineNumbers:!1}),n.jsx("div",{className:"space-y-3",children:I.options.map((re,le)=>{const be=B===le,xe=le===I.correctIndex;let Pe="bg-slate-800/60 hover:bg-slate-800 border-slate-700 text-slate-200";return E&&(xe?Pe="bg-emerald-950/60 border-emerald-500 text-emerald-200 font-semibold shadow-lg shadow-emerald-500/10":be?Pe="bg-rose-950/60 border-rose-500 text-rose-200 font-semibold":Pe="bg-slate-900/40 border-slate-800/50 text-slate-500 opacity-60"),n.jsxs("button",{disabled:E,onClick:()=>S(le),className:`w-full text-left p-4 rounded-2xl border transition-all text-xs sm:text-sm flex items-start gap-3.5 group ${Pe}`,children:[n.jsx("span",{className:`w-6 h-6 rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0 border ${E&&xe?"bg-emerald-500 border-emerald-400 text-slate-950":E&&be?"bg-rose-500 border-rose-400 text-white":"bg-slate-900 border-slate-700 text-slate-400 group-hover:border-slate-500"}`,children:String.fromCharCode(65+le)}),n.jsx("span",{className:"flex-1 leading-relaxed pt-0.5",children:re}),E&&xe&&n.jsx(ur,{className:"w-4 h-4 text-emerald-400 shrink-0 mt-1"}),E&&be&&!xe&&n.jsx(uo,{className:"w-4 h-4 text-rose-400 shrink-0 mt-1"})]},le)})}),E&&n.jsxs("div",{className:"p-4 sm:p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-xs sm:text-sm text-slate-200 space-y-1.5 animate-in fade-in",children:[n.jsxs("div",{className:"font-bold text-emerald-400 flex items-center gap-1.5",children:[n.jsx(hd,{className:"w-4 h-4"}),n.jsx("span",{children:d==="en"?"Architecture Insight & Explanation:":"Mimari Analiz & Çözüm:"})]}),n.jsx("p",{className:"leading-relaxed",children:I.explanation})]}),n.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-slate-800",children:[n.jsxs("button",{onClick:M,disabled:b===0,className:"flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none text-xs text-white font-semibold transition-all",children:[n.jsx(ng,{className:"w-4 h-4"}),n.jsx("span",{children:c.quiz.prevQuestion})]}),n.jsxs("button",{onClick:ee,className:"flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all active:scale-95",children:[n.jsx("span",{children:b===T-1?c.quiz.finishTest:c.quiz.nextQuestion}),n.jsx(ai,{className:"w-4 h-4"})]})]})]}),n.jsxs("div",{className:"lg:col-span-4 p-5 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[n.jsx("h4",{className:"font-bold text-white text-xs uppercase tracking-wider",children:c.quiz.questionMap}),n.jsxs("span",{className:"text-[11px] font-mono text-emerald-400",children:[Ne,"/",T]})]}),n.jsx("div",{className:"grid grid-cols-4 gap-2",children:U.map((re,le)=>{const be=y[re.id],xe=be!==void 0,Pe=b===le;let Be="bg-slate-800/80 text-slate-400 border-slate-700 hover:border-slate-500";return xe&&(Be=be===re.correctIndex?"bg-emerald-500/20 text-emerald-400 border-emerald-500/50 font-bold":"bg-rose-500/20 text-rose-400 border-rose-500/50 font-bold"),Pe&&(Be+=" ring-2 ring-emerald-400 ring-offset-2 ring-offset-slate-950"),n.jsx("button",{onClick:()=>j(le),className:`p-2.5 rounded-xl text-xs font-mono font-semibold border transition-all ${Be}`,children:le+1},re.id)})}),n.jsxs("div",{className:"pt-3 border-t border-slate-800/80 space-y-2 text-[11px] text-slate-400",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("div",{className:"w-3 h-3 rounded bg-emerald-500/30 border border-emerald-500/50"}),n.jsx("span",{children:c.quiz.correct})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("div",{className:"w-3 h-3 rounded bg-rose-500/30 border border-rose-500/50"}),n.jsx("span",{children:c.quiz.wrong})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("div",{className:"w-3 h-3 rounded bg-slate-800 border border-slate-700"}),n.jsx("span",{children:c.quiz.empty})]})]})]})]})]})},cf=()=>n.jsx("div",{className:"space-y-6 py-6",children:n.jsx(lf,{})}),df=()=>{const{language:d}=Ke(),c=d==="tr",u=Ou(d),[b,j]=F.useState("all"),[y,A]=F.useState(u.patterns[0].id),[C,k]=F.useState("bad"),[N,J]=F.useState(null),[U,I]=F.useState(""),T=u.patterns.find(S=>S.id===y)||u.patterns[0],B=(S,ee)=>{navigator.clipboard.writeText(S),J(ee),setTimeout(()=>J(null),2e3)},E=u.patterns.filter(S=>{const ee=b==="all"||S.category===b,M=U===""||S.title.toLowerCase().includes(U.toLowerCase())||S.summary.toLowerCase().includes(U.toLowerCase())||S.impact.toLowerCase().includes(U.toLowerCase());return ee&&M});return n.jsxs("div",{className:"space-y-12 py-6 animate-in fade-in duration-300",children:[n.jsxs("section",{className:"relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950 border border-slate-800 p-8 sm:p-12 shadow-2xl",children:[n.jsx("div",{className:"absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"}),n.jsx("div",{className:"absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none"}),n.jsxs("div",{className:"relative z-10 max-w-4xl",children:[n.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/30 mb-6 shadow-sm",children:[n.jsx(At,{className:"w-4 h-4 text-emerald-400 animate-pulse"}),n.jsx("span",{children:c?"Yapay Zekâ Destekli Spring Boot & Güvenlik Raporu":"AI-Assisted Spring Boot & Security Guide"})]}),n.jsx("h1",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight sm:leading-tight",children:c?n.jsxs(n.Fragment,{children:["Yapay Zekâ ile Kodlama (Vibe Coding) ",n.jsx("br",{}),n.jsx("span",{className:"bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent",children:"Hata Modelleri ve Otomatize Güvenlik Süzgeçleri"})]}):n.jsxs(n.Fragment,{children:["AI-Assisted Development (Vibe Coding) ",n.jsx("br",{}),n.jsx("span",{className:"bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent",children:"Error Typologies & Automated Quality Gates"})]})}),n.jsx("p",{className:"mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl",children:c?"Büyük dil modellerinin (LLM) Spring Boot projelerinde ürettiği sessiz mimari yanılgılar: AOP proxy körlüğü, BOLA yetkilendirme açıkları, Actuator sızıntıları, ArchUnit kuralları ve CI/CD güvenlik geçitleri.":"Architectural pitfalls and silent security defects produced by LLMs in Spring Boot: AOP proxy bypasses, BOLA/IDOR vulnerabilities, Actuator leaks, ArchUnit guardrails, and automated CI/CD quality gates."}),n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-800/80",children:[n.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-xl p-3.5",children:[n.jsx("span",{className:"text-2xl font-black text-white",children:"8"}),n.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:c?"Kritik Hata Modeli":"Critical Pitfall Models"})]}),n.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-xl p-3.5",children:[n.jsx("span",{className:"text-2xl font-black text-emerald-400",children:"ArchUnit"}),n.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:c?"Statik Mimari Testleri":"Static Architecture Rules"})]}),n.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-xl p-3.5",children:[n.jsx("span",{className:"text-2xl font-black text-teal-400",children:"Semgrep"}),n.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:c?"SAST & Kural Şablonları":"SAST Rule Templates"})]}),n.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-xl p-3.5",children:[n.jsx("span",{className:"text-2xl font-black text-cyan-400",children:"AI Review"}),n.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:c?"Otomatize PR İstemi":"Automated PR Prompts"})]})]})]})]}),n.jsx(Bu,{}),n.jsxs("section",{className:"space-y-6",children:[n.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4",children:[n.jsxs("div",{children:[n.jsxs("h2",{className:"text-2xl font-black text-white tracking-tight flex items-center gap-2.5",children:[n.jsx(Su,{className:"w-6 h-6 text-rose-400"}),n.jsx("span",{children:c?"LLM Hata Modelleri ve 3 Katmanlı Çözüm İnceleyicisi":"LLM Pitfall Models & 3-Tier Solution Inspector"})]}),n.jsx("p",{className:"text-sm text-slate-400 mt-1",children:c?"Kusurlu yapay zekâ kodunu, production seviyesindeki temiz çözümü ve CI/CD derlemesinde bunu yakalayan test kuralını karşılaştırın.":"Compare flawed AI code against production-ready fixes and automated CI/CD guardrail assertions."})]}),n.jsx("div",{className:"flex items-center gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-xl overflow-x-auto max-w-full",children:[{id:"all",label:c?"Tümü (8)":"All (8)"},{id:"aop",label:c?"AOP & Transaction":"AOP & Transactions"},{id:"security",label:c?"Güvenlik & BOLA":"Security & BOLA"},{id:"jpa",label:c?"JPA & Performans":"JPA & Performance"},{id:"singleton",label:"Singleton & Concurrency"}].map(S=>n.jsx("button",{onClick:()=>j(S.id),className:`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${b===S.id?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm font-bold":"text-slate-400 hover:text-slate-200"}`,children:S.label},S.id))})]}),n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 items-start",children:[n.jsx("div",{className:"lg:col-span-4 space-y-3",children:E.map(S=>{const ee=S.id===T.id;return n.jsxs("button",{onClick:()=>A(S.id),className:`w-full text-left p-4 rounded-2xl border transition-all duration-200 ${ee?"bg-slate-900 border-emerald-500/50 shadow-lg shadow-emerald-950/40 ring-1 ring-emerald-500/30":"bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700"}`,children:[n.jsxs("div",{className:"flex items-center justify-between gap-2 mb-1.5",children:[n.jsx("span",{className:"text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300",children:S.categoryLabel}),n.jsx("span",{className:"text-[10px] font-semibold text-rose-400 bg-rose-950/60 border border-rose-500/30 px-2 py-0.5 rounded-full",children:S.dangerBadge.split(":")[0]})]}),n.jsx("h4",{className:"text-sm font-bold text-white leading-snug",children:S.title}),n.jsx("p",{className:"text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed",children:S.summary})]},S.id)})}),n.jsxs("div",{className:"lg:col-span-8 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6",children:[n.jsxs("div",{className:"border-b border-slate-800 pb-5",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-2",children:[n.jsx("span",{className:"text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",children:T.categoryLabel}),n.jsxs("span",{className:"text-xs font-bold text-rose-300 bg-rose-950/80 border border-rose-500/40 px-3 py-1 rounded-full",children:["⚠️ ",T.dangerBadge]})]}),n.jsx("h3",{className:"text-xl sm:text-2xl font-black text-white",children:T.title}),n.jsx("p",{className:"text-sm text-slate-300 mt-1.5 leading-relaxed",children:T.summary})]}),n.jsxs("div",{className:"flex items-center justify-between bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800",children:[n.jsxs("div",{className:"flex items-center gap-1",children:[n.jsxs("button",{onClick:()=>k("bad"),className:`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all ${C==="bad"?"bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:[n.jsx("span",{className:"w-2 h-2 rounded-full bg-rose-400"}),n.jsx("span",{children:c?"1. Kusurlu AI Kodu":"1. Flawed AI Code"})]}),n.jsxs("button",{onClick:()=>k("good"),className:`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all ${C==="good"?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:[n.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"}),n.jsx("span",{children:c?"2. Production Çözümü":"2. Production Fix"})]}),n.jsxs("button",{onClick:()=>k("guardrail"),className:`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all ${C==="guardrail"?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:[n.jsx(oi,{className:"w-3.5 h-3.5 text-cyan-400"}),n.jsx("span",{children:c?"3. CI/CD Süzgeci":"3. CI/CD Guardrail"})]})]}),n.jsx("button",{onClick:()=>{const S=C==="bad"?T.badCode.code:C==="good"?T.goodCode.code:T.guardrailCode.code;B(S,T.id)},className:"p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl transition-all",title:c?"Kodu Kopyala":"Copy Code",children:N===T.id?n.jsx(ur,{className:"w-4 h-4 text-emerald-400"}):n.jsx(Vn,{className:"w-4 h-4"})})]}),n.jsxs("div",{className:"relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 font-mono text-xs shadow-inner",children:[n.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-slate-900/80 border-b border-slate-800/80 text-slate-400",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(lg,{className:"w-3.5 h-3.5 text-emerald-400"}),n.jsx("span",{className:"text-[11px] font-semibold text-slate-300",children:C==="bad"?T.badCode.filename:C==="good"?T.goodCode.filename:T.guardrailCode.filename})]}),n.jsx("span",{className:"text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300",children:C==="guardrail"?T.guardrailCode.tool:"Java / Spring"})]}),n.jsx("div",{className:"p-4 overflow-x-auto max-h-[380px] text-slate-200 leading-relaxed select-text",children:n.jsx("pre",{children:n.jsxs("code",{children:[C==="bad"&&T.badCode.code,C==="good"&&T.goodCode.code,C==="guardrail"&&T.guardrailCode.code]})})})]}),n.jsxs("div",{className:`p-4 rounded-2xl border ${C==="bad"?"bg-rose-950/20 border-rose-500/30 text-rose-200":C==="good"?"bg-emerald-950/20 border-emerald-500/30 text-emerald-200":"bg-cyan-950/20 border-cyan-500/30 text-cyan-200"}`,children:[n.jsx("h5",{className:"text-xs font-bold uppercase tracking-wider mb-1",children:C==="bad"?c?"🔴 Kusurun Teknik Sebebi":"🔴 Technical Root Cause":C==="good"?c?"🟢 Uygulanan Mimari Çözüm":"🟢 Applied Architecture Fix":c?"🛡️ Otomatize Denetim Mantığı":"🛡️ Automated Guardrail Logic"}),n.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[C==="bad"&&T.badCode.flawExplanation,C==="good"&&T.goodCode.fixExplanation,C==="guardrail"&&T.guardrailCode.explanation]})]}),n.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-start gap-3",children:[n.jsx(li,{className:"w-5 h-5 text-amber-400 shrink-0 mt-0.5"}),n.jsxs("div",{children:[n.jsx("span",{className:"text-xs font-bold text-amber-300 uppercase tracking-wider",children:c?"Sistem & Güvenlik Etkisi:":"System & Security Impact:"}),n.jsx("p",{className:"text-xs text-slate-300 mt-0.5 leading-relaxed",children:T.impact})]})]})]})]})]}),n.jsxs("section",{className:"space-y-6 pt-6",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-2",children:[n.jsx(og,{className:"w-3.5 h-3.5"}),n.jsx("span",{children:c?"Deterministik Mimari Yaptırımları":"Deterministic Architectural Enforcement"})]}),n.jsx("h2",{className:"text-2xl font-black text-white tracking-tight",children:c?"ArchUnit Kurumsal Mimari Test Kütüphanesi":"ArchUnit Enterprise Rulebook"}),n.jsx("p",{className:"text-sm text-slate-400 mt-1 max-w-3xl",children:c?"Yapay zekânın ürettiği kodların mimari sınırları delmesini engellemek için CI/CD hattında birim test olarak çalışan kurallar.":"Executable unit test rules that strictly enforce layer separation and prevent AI code decay in continuous integration."})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:u.archUnitRules.map(S=>n.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-lg flex flex-col justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[n.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold",children:S.category}),n.jsx("button",{onClick:()=>B(S.code,S.id),className:"p-1.5 text-slate-400 hover:text-white bg-slate-950 border border-slate-800 rounded-lg transition-all",title:"Copy ArchUnit Rule",children:N===S.id?n.jsx(ur,{className:"w-3.5 h-3.5 text-emerald-400"}):n.jsx(Vn,{className:"w-3.5 h-3.5"})})]}),n.jsx("h3",{className:"text-base font-bold text-white",children:S.title}),n.jsx("p",{className:"text-xs text-slate-400 mt-1 leading-relaxed",children:S.description})]}),n.jsx("div",{className:"rounded-xl overflow-hidden border border-slate-800 bg-slate-950 p-3 font-mono text-[11px] text-slate-200",children:n.jsx("pre",{className:"overflow-x-auto",children:n.jsx("code",{children:S.code})})}),n.jsxs("div",{className:"p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-[11px] text-emerald-300/90 flex items-center gap-2",children:[n.jsx(ur,{className:"w-3.5 h-3.5 text-emerald-400 shrink-0"}),n.jsx("span",{children:S.purpose})]})]},S.id))})]}),n.jsxs("section",{className:"space-y-6 pt-6",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2",children:[n.jsx(tg,{className:"w-3.5 h-3.5"}),n.jsx("span",{children:c?"Yapay Zekâ ile Yapay Zekâyı Denetleme":"AI-Assisted Automated Guardrails"})]}),n.jsx("h2",{className:"text-2xl font-black text-white tracking-tight",children:c?"AI PR Reviewer & Tehdit Modelleme İstemi Şablonları":"AI PR Reviewer & Threat Modeling Prompt Hub"}),n.jsx("p",{className:"text-sm text-slate-400 mt-1 max-w-3xl",children:c?"GitHub Actions veya GitLab CI süreçlerinize doğrudan entegre edebileceğiniz, AOP ve BOLA açıklarını yakalamak üzere kalibre edilmiş sistem istemleri.":"Calibrated system prompts for GitHub Actions and developer tools to automatically audit Spring Boot PRs for AOP bypasses and BOLA defects."})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:u.promptGuardrails.map(S=>n.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-lg flex flex-col justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[n.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-bold",children:S.targetRole}),n.jsx("button",{onClick:()=>B(S.systemPrompt,S.id),className:"p-1.5 text-slate-400 hover:text-white bg-slate-950 border border-slate-800 rounded-lg transition-all",title:"Copy System Prompt",children:N===S.id?n.jsx(ur,{className:"w-3.5 h-3.5 text-emerald-400"}):n.jsx(Vn,{className:"w-3.5 h-3.5"})})]}),n.jsx("h3",{className:"text-base font-bold text-white",children:S.title}),n.jsx("p",{className:"text-xs text-slate-400 mt-1 leading-relaxed",children:S.description})]}),n.jsx("div",{className:"rounded-xl overflow-hidden border border-slate-800 bg-slate-950 p-3 font-mono text-[11px] text-slate-200 max-h-52 overflow-y-auto",children:n.jsx("pre",{className:"whitespace-pre-wrap",children:S.systemPrompt})}),n.jsxs("div",{className:"p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-[11px] text-cyan-300/90 flex items-start gap-2",children:[n.jsx("span",{className:"font-bold shrink-0",children:"🔍 Örnek Tespit:"}),n.jsx("span",{children:S.exampleFinding})]})]},S.id))})]}),n.jsxs("section",{className:"space-y-6 pt-6",children:[n.jsxs("div",{children:[n.jsx("h2",{className:"text-2xl font-black text-white tracking-tight",children:c?"Spring Boot Hata Modelleri ve Denetim Matrisi":"Spring Boot Defect & Audit Matrix"}),n.jsx("p",{className:"text-sm text-slate-400 mt-1",children:c?"Araştırma raporunda tespit edilen tüm zafiyet alanlarının, otomatize araçlarının ve kontrol yöntemlerinin özeti.":"Synthesis of defect areas, failure modes, static tooling, and AI-assisted verification methodologies."})]}),n.jsx("div",{className:"overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl",children:n.jsxs("table",{className:"w-full text-left text-xs text-slate-300",children:[n.jsx("thead",{className:"bg-slate-950 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800",children:n.jsxs("tr",{children:[n.jsx("th",{className:"px-4 py-3.5 font-bold",children:c?"Hata / Zafiyet Alanı":"Defect / Vulnerability Area"}),n.jsx("th",{className:"px-4 py-3.5 font-bold",children:c?"Kusurlu AI Kalıbı":"Flawed AI Pattern"}),n.jsx("th",{className:"px-4 py-3.5 font-bold",children:c?"Arıza Modu & Risk":"Failure Mode & Risk"}),n.jsx("th",{className:"px-4 py-3.5 font-bold",children:c?"Otomatize Denetim Aracı":"Automated Tool"}),n.jsx("th",{className:"px-4 py-3.5 font-bold",children:c?"Yapay Zekâ Kontrol Yöntemi":"AI Verification Method"})]})}),n.jsx("tbody",{className:"divide-y divide-slate-800/60",children:u.auditMatrix.map((S,ee)=>n.jsxs("tr",{className:"hover:bg-slate-850/50 transition-colors",children:[n.jsx("td",{className:"px-4 py-3 font-bold text-white whitespace-nowrap",children:S.area}),n.jsx("td",{className:"px-4 py-3 font-mono text-rose-300/90",children:S.badPattern}),n.jsx("td",{className:"px-4 py-3 text-slate-300",children:S.impact}),n.jsx("td",{className:"px-4 py-3 font-mono text-emerald-400",children:S.tool}),n.jsx("td",{className:"px-4 py-3 text-cyan-300",children:S.aiVerification})]},ee))})]})})]}),n.jsxs("section",{className:"space-y-4 pt-6 border-t border-slate-800",children:[n.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[n.jsx(fd,{className:"w-4 h-4 text-emerald-400"}),n.jsx("span",{children:c?"Akademik & Sektörel Kaynakça":"Academic & Industry Research Sources"})]}),n.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4",children:u.sources.map((S,ee)=>n.jsxs("a",{href:S.url,target:"_blank",rel:"noreferrer",className:"p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-850/80 transition-all group flex flex-col justify-between",children:[n.jsxs("div",{children:[n.jsx("span",{className:"text-[10px] font-mono text-emerald-400 font-bold",children:S.publisher}),n.jsx("h4",{className:"text-xs font-bold text-slate-200 group-hover:text-white mt-1 line-clamp-2",children:S.title}),n.jsx("p",{className:"text-[11px] text-slate-400 mt-1 line-clamp-2",children:S.note})]}),n.jsxs("div",{className:"mt-3 flex items-center text-[11px] text-slate-500 group-hover:text-emerald-400 font-medium",children:[n.jsx("span",{children:c?"Raporu İncele":"View Source"}),n.jsx(fd,{className:"w-3 h-3 ml-1"})]})]},ee))})]})]})};function uf(){const[d,c]=F.useState("home"),[u,b]=F.useState("module-1-spring-boot-basics"),[j,y]=F.useState(!1);F.useEffect(()=>{const k=()=>{const N=window.location.hash.replace("#","");if(N.startsWith("module/")){const J=N.replace("module/","");b(J),c("lesson-detail")}else["home","lessons","practice","recipes","vibe-coding","glossary","quiz"].includes(N)&&c(N)};return k(),window.addEventListener("hashchange",k),()=>window.removeEventListener("hashchange",k)},[]);const A=k=>{c(k),window.location.hash=k,window.scrollTo({top:0,behavior:"smooth"})},C=(k,N)=>{N?(b(N),c("lesson-detail"),window.location.hash=`module/${N}`):A(k),window.scrollTo({top:0,behavior:"smooth"})};return n.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950",children:[n.jsx(wg,{activeTab:d==="lesson-detail"?"lessons":d,setActiveTab:A,onOpenSearch:()=>y(!0)}),n.jsxs("main",{className:"flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8",children:[d==="home"&&n.jsx(qg,{onNavigate:C}),d==="lessons"&&n.jsx(Vg,{onSelectLesson:k=>C("lesson-detail",k)}),d==="lesson-detail"&&n.jsx(Kg,{moduleId:u,onBack:()=>A("lessons"),onSelectLesson:k=>C("lesson-detail",k)}),d==="practice"&&n.jsx(nf,{}),d==="recipes"&&n.jsx(of,{}),d==="vibe-coding"&&n.jsx(df,{}),d==="glossary"&&n.jsx(sf,{}),d==="quiz"&&n.jsx(cf,{})]}),n.jsx(Cg,{}),n.jsx(Ug,{isOpen:j,onClose:()=>y(!1),onSelectLesson:k=>C("lesson-detail",k),onSelectRecipe:()=>A("recipes"),onSelectVibeCoding:()=>A("vibe-coding"),onGoToQuiz:()=>A("quiz")})]})}Jm.createRoot(document.getElementById("root")).render(n.jsx(bd.StrictMode,{children:n.jsx(Sg,{children:n.jsx(uf,{})})}));
