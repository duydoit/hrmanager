/*! For license information please see 518.d26a79df.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhrmanager=self.webpackChunkhrmanager||[]).push([[518],{2171:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(1413),o=r(5987),l=r(1060),a=r(2007),i=r.n(a),u=["color","size"],c=function(e){var t=e.color,r=e.size,a=(0,o.Z)(e,u);return l.createElement("svg",(0,n.Z)({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:t},a),l.createElement("path",{d:"M11.29,12l3.54-3.54a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L9.17,11.29a1,1,0,0,0,0,1.42L13.41,17a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41Z"}))};c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.defaultProps={color:"currentColor",size:"24"};var s=c,f=["color","size"],d=function(e){var t=e.color,r=e.size,a=(0,o.Z)(e,f);return l.createElement("svg",(0,n.Z)({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:t},a),l.createElement("path",{d:"M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"}))};d.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},d.defaultProps={color:"currentColor",size:"24"};var p=d,m=r(184);var y=function(e){var t=e.amountPerPage,r=e.currentPage,n=e.totalPages,o=e.paginate,l=e.amountItem,a=Math.ceil(n/t),i=(r-1)*t+1,u=r*t;return(0,m.jsxs)("div",{className:"flex item-content w-full justify-between",children:[(0,m.jsxs)("div",{className:"py-1.5 px-2 font-normal",children:["Hi\u1ec3n th\u1ecb k\u1ebft qu\u1ea3 t\u1eeb ",i," - ",u>n?n:u," tr\xean t\u1ed5ng ",n," m\u1ee5c"]}),(0,m.jsxs)("div",{className:"flex",children:[(0,m.jsxs)("ul",{className:"flex divide-x divide-violet-400 border border-violet-400 items-center w-fit",children:[(0,m.jsx)("li",{children:(0,m.jsx)("button",{disabled:r<=1,onClick:function(){return o(r-1)},className:"".concat(r<=1?"text-gray-400 bg-gray-100":"hover:bg-gray-200 text-violet-600","  py-1.5 px-2  "),children:(0,m.jsx)(s,{})})},"0"),(0,m.jsx)("li",{children:(0,m.jsx)("button",{disabled:r>=a,onClick:function(){return o(r+1)},className:"".concat(r>=a?"text-gray-400 bg-gray-100":"hover:bg-gray-200 text-violet-600","  py-1.5 px-2  "),children:(0,m.jsx)(p,{})})},a+1)]}),(0,m.jsxs)("select",{onChange:function(e){return l(parseInt(e.target.value))},className:"ml-3 border border-violet-400 py-1.5 px-2 bg-gray-50 font-medium text-violet-600 focus:outline-none",children:[(0,m.jsx)("option",{value:"10",children:"10 / page "}),(0,m.jsx)("option",{value:"15",children:"15 / page"}),(0,m.jsx)("option",{value:"25",children:"25 / page"})]})]})]})}},7438:function(e,t,r){var n=r(184);t.Z=function(e){var t=e.datas,r=e.columns;return e.loading,(0,n.jsx)("div",{className:"align-middle overflow-x-auto border first-letter rounded",children:(0,n.jsxs)("table",{className:"min-w-full divide-y divide-gray-200 ",children:[(0,n.jsx)("thead",{className:"bg-gray-100",children:(0,n.jsx)("tr",{children:r.map((function(e){return(0,n.jsx)("th",{className:"px-4 py-1.5 text-left text-xs text-gray-500 uppercase tracking-wider",children:e.title},e.key)}))})}),(0,n.jsx)("tbody",{className:"divide-y divide-slate-200",children:t.map((function(e,t){return(0,n.jsx)("tr",{className:"h-full",children:r.map((function(t){return t.render?(0,n.jsx)("td",{className:"px-4 py-1.5 whitespace-nowrap",children:t.render(e)},t.key):(0,n.jsx)("td",{className:"px-4 py-1.5 whitespace-nowrap text-gray-500",children:e[t.dataIndex]},t.key)}))},t)}))})]})})}},4518:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var n=r(1413),o=r(885),l=r(2791),a=r(3504),i=r(6030),u=r(5861),c=r(7757),s=r.n(c),f=r(6803),d=r(5608),p={getAll:function(e){return d.Z.get("timekeeper/",{params:e})},post:function(e){return d.Z.post("timekeeper/",e)},delete:function(e){var t="timekeeper/".concat(e,"/");return d.Z.delete(t)}},m=r(8839),y=r(7438),h=r(2171),v=r(5498),x=r.n(v),g=r(1134),b=r(5125),w=r(184);var j=function(){var e=(0,i.I0)();(0,l.useEffect)((function(){e(function(){var e=(0,u.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p.getAll().then((function(e){return t((r=e,{type:f.eE,payload:r}));var r})).catch((function(e){return t((0,m.s)({msg:"Kh\xf4ng k\u1ebft n\u1ed1i : ".concat(e.message," "),title:"error"}))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);var t=(0,i.v9)((function(e){return e.timekeepers.list})),r=(0,g.cI)(),c=r.register,d=r.handleSubmit,v=r.reset,j=(0,l.useState)({"type-search":"employee_name","value-search":"","value-date":""}),k=(0,o.Z)(j,2),N=k[0],S=k[1],C=t.filter((function(e){return e[N["type-search"]].toString().toLowerCase().indexOf(N["value-search"].toLowerCase())>-1&&e.days.toString().toLowerCase().indexOf(N["value-date"].toLowerCase())>-1})),_=(0,l.useState)(1),P=(0,o.Z)(_,2),E=P[0],Z=P[1],$=(0,l.useState)(10),R=(0,o.Z)($,2),I=R[0],O=R[1],L=E*I,A=L-I,z=C.slice(A,L),M=C.length;return(0,w.jsxs)("div",{children:[(0,w.jsx)("div",{className:"h-12 text-sm bg-slate-200 flex justify-end items-center px-5 shadow border-b border-gray-300",children:(0,w.jsxs)("div",{className:"text-white flex items-center ",children:[(0,w.jsx)(a.rU,{to:"create",className:"font-medium bg-violet-500 px-2 py-1  hover:bg-violet-600 ml-2",children:"Ch\u1ea5m C\xf4ng"}),(0,w.jsx)("button",{onClick:function(){var e=document.getElementById("list-timekeeper");x()(e).then((function(e){var t=e.toDataURL("img/png"),r=new b.ZP("l","pt","a4");r.addImage(t,"PNG",1,1),r.save("list-timekeeper.pdf")}))},className:"font-medium bg-violet-500 px-2 py-1  hover:bg-violet-600 ml-2",children:"Xu\u1ea5t PDF"})]})}),(0,w.jsxs)("div",{className:"bg-white mt-5  w-full container mx-auto rounded shadow-md",children:[(0,w.jsx)("div",{className:" border-b px-5 py-3 border-gray-300",children:(0,w.jsx)("span",{className:"font-medium text-xl text-violet-600",children:"L\u1ecbch s\u1eed ch\u1ea5m c\xf4ng"})}),(0,w.jsxs)("form",{onSubmit:d((function(e){return S(e)})),className:"flex items-center px-5 w-full mt-5",children:[(0,w.jsxs)("div",{className:"flex w-full border-gray-300 rounded divide-gray-300 divide-x border mr-3",children:[(0,w.jsxs)("select",(0,n.Z)((0,n.Z)({},c("type-search")),{},{className:"px-3 py-1 rounded-l w-44 focus:outline-violet-500",children:[(0,w.jsx)("option",{value:"employee_name",children:"T\xean nh\xe2n vi\xean"}),(0,w.jsx)("option",{value:"employee",children:"M\xe3 nh\xe2n vi\xean"})]})),(0,w.jsx)("input",(0,n.Z)((0,n.Z)({type:"text"},c("value-search")),{},{className:"w-full px-3 py-1 rounded-r focus:outline-violet-500 "}))]}),(0,w.jsxs)("div",{className:"flex w-80 items-center mr-5 flex-none",children:[(0,w.jsx)("div",{className:"px-3 py-1 flex-none font-normal",children:"Ng\xe0y ch\u1ea5m c\xf4ng"}),(0,w.jsx)("input",(0,n.Z)((0,n.Z)({type:"date"},c("value-date")),{},{className:"w-full px-3 py-1 rounded-r focus:outline-violet-500 border-gray-300  border"}))]}),(0,w.jsx)("button",{type:"submit",className:"font-medium  flex-none text-sm w-28 mx-2 text-white px-2.5 py-1.5 bg-violet-500 hover:bg-violet-600",children:"T\xecm ki\u1ebfm"}),(0,w.jsx)("button",{type:"button",onClick:function(){S({"type-search":"employee_name","value-search":"","value-date":""}),v({"value-search":"","value-date":""})},className:"font-medium  flex-none text-sm w-28 mx-2 px-2.5 py-1.5 bg-gray-100 border hover:bg-gray-200",children:"\u0110\u1eb7t l\u1ea1i"})]}),(0,w.jsxs)("div",{className:"px-5 py-6",id:"list-timekeeper",children:[(0,w.jsxs)("div",{className:"px-2 pb-5 text-2xl text-gray-700 font-medium",children:[M," B\u1ea3n ghi"]}),(0,w.jsx)(y.Z,{datas:z,columns:[{title:"M\xe3 nh\xe2n vi\xean",dataIndex:"employee",key:"id"},{title:"Nh\xe2n vi\xean",dataIndex:"employee_name",key:"employee"},{title:"Ng\xe0y",dataIndex:"days",key:"day"},{title:"th\u1eddi gian",dataIndex:"time_show",key:"time"}]}),(0,w.jsx)("div",{className:"mt-4",children:(0,w.jsx)(h.Z,{amountPerPage:I,currentPage:E,totalPages:M,paginate:function(e){return Z(e)},amountItem:function(e){return O(e)}})})]})]})]})}},4499:function(e,t,r){var n=r(1725),o="function"===typeof Symbol&&Symbol.for,l=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,d=o?Symbol.for("react.forward_ref"):60112,p=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,h="function"===typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function b(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||x}function w(){}function j(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||x}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=b.prototype;var k=j.prototype=new w;k.constructor=j,n(k,b.prototype),k.isPureReactComponent=!0;var N={current:null},S=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var n,o={},a=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)S.call(t,n)&&!C.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var c=Array(u),s=0;s<u;s++)c[s]=arguments[s+2];o.children=c}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:l,type:e,key:a,ref:i,props:o,_owner:N.current}}function P(e){return"object"===typeof e&&null!==e&&e.$$typeof===l}var E=/\/+/g,Z=[];function $(e,t,r,n){if(Z.length){var o=Z.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>Z.length&&Z.push(e)}function I(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case l:case a:i=!0}}if(i)return r(n,e,""===t?"."+L(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var c=t+L(o=e[u],u);i+=I(o,c,r,n)}else if(null===e||"object"!==typeof e?c=null:c="function"===typeof(c=h&&e[h]||e["@@iterator"])?c:null,"function"===typeof c)for(e=c.call(e),u=0;!(o=e.next()).done;)i+=I(o=o.value,c=t+L(o,u++),r,n);else if("object"===o)throw r=""+e,Error(v(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return i}function O(e,t,r){return null==e?0:I(e,"",t,r)}function L(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function z(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,n,r,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+r)),n.push(e))}function M(e,t,r,n,o){var l="";null!=r&&(l=(""+r).replace(E,"$&/")+"/"),O(e,z,t=$(t,l,n,o)),R(t)}var T={current:null};function U(){var e=T.current;if(null===e)throw Error(v(321));return e}var B={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:N,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return M(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;O(e,A,t=$(null,null,t,r)),R(t)},count:function(e){return O(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(v(143));return e}},t.Component=b,t.Fragment=i,t.Profiler=c,t.PureComponent=j,t.StrictMode=u,t.Suspense=p,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error(v(267,e));var o=n({},e.props),a=e.key,i=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,u=N.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)S.call(t,s)&&!C.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){c=Array(s);for(var f=0;f<s;f++)c[f]=arguments[f+2];o.children=c}return{$$typeof:l,type:e.type,key:a,ref:i,props:o,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return U().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,r){return U().useReducer(e,t,r)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.14.0"},1060:function(e,t,r){e.exports=r(4499)}}]);
//# sourceMappingURL=518.d26a79df.chunk.js.map