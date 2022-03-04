/*! For license information please see 55.c27c5611.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhrmanager=self.webpackChunkhrmanager||[]).push([[55],{2171:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(1413),o=r(5987),l=r(1060),a=r(2007),i=r.n(a),u=["color","size"],c=function(e){var t=e.color,r=e.size,a=(0,o.Z)(e,u);return l.createElement("svg",(0,n.Z)({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:t},a),l.createElement("path",{d:"M11.29,12l3.54-3.54a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L9.17,11.29a1,1,0,0,0,0,1.42L13.41,17a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41Z"}))};c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.defaultProps={color:"currentColor",size:"24"};var s=c,f=["color","size"],d=function(e){var t=e.color,r=e.size,a=(0,o.Z)(e,f);return l.createElement("svg",(0,n.Z)({xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:t},a),l.createElement("path",{d:"M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"}))};d.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},d.defaultProps={color:"currentColor",size:"24"};var p=d,y=r(184);var m=function(e){var t=e.amountPerPage,r=e.currentPage,n=e.totalPages,o=e.paginate,l=e.amountItem,a=Math.ceil(n/t),i=(r-1)*t+1,u=r*t;return(0,y.jsxs)("div",{className:"flex item-content w-full justify-between",children:[(0,y.jsxs)("div",{className:"py-1.5 px-2 font-normal",children:["Hi\u1ec3n th\u1ecb k\u1ebft qu\u1ea3 t\u1eeb ",i," - ",u>n?n:u," tr\xean t\u1ed5ng ",n," m\u1ee5c"]}),(0,y.jsxs)("div",{className:"flex",children:[(0,y.jsxs)("ul",{className:"flex divide-x divide-violet-400 border border-violet-400 items-center w-fit",children:[(0,y.jsx)("li",{children:(0,y.jsx)("button",{disabled:r<=1,onClick:function(){return o(r-1)},className:"".concat(r<=1?"text-gray-400 bg-gray-100":"hover:bg-gray-200 text-violet-600","  py-1.5 px-2  "),children:(0,y.jsx)(s,{})})},"0"),(0,y.jsx)("li",{children:(0,y.jsx)("button",{disabled:r>=a,onClick:function(){return o(r+1)},className:"".concat(r>=a?"text-gray-400 bg-gray-100":"hover:bg-gray-200 text-violet-600","  py-1.5 px-2  "),children:(0,y.jsx)(p,{})})},a+1)]}),(0,y.jsxs)("select",{onChange:function(e){return l(parseInt(e.target.value))},className:"ml-3 border border-violet-400 py-1.5 px-2 bg-gray-50 font-medium text-violet-600 focus:outline-none",children:[(0,y.jsx)("option",{value:"10",children:"10 / page "}),(0,y.jsx)("option",{value:"15",children:"15 / page"}),(0,y.jsx)("option",{value:"25",children:"25 / page"})]})]})]})}},7438:function(e,t,r){var n=r(184);t.Z=function(e){var t=e.datas,r=e.columns;return e.loading,(0,n.jsx)("div",{className:"align-middle overflow-x-auto border first-letter rounded",children:(0,n.jsxs)("table",{className:"min-w-full divide-y divide-gray-200 ",children:[(0,n.jsx)("thead",{className:"bg-gray-100",children:(0,n.jsx)("tr",{children:r.map((function(e){return(0,n.jsx)("th",{className:"px-4 py-1.5 text-left text-xs text-gray-500 uppercase tracking-wider",children:e.title},e.key)}))})}),(0,n.jsx)("tbody",{className:"divide-y divide-slate-200",children:t.map((function(e,t){return(0,n.jsx)("tr",{className:"h-full",children:r.map((function(t){return t.render?(0,n.jsx)("td",{className:"px-4 py-1.5 whitespace-nowrap",children:t.render(e)},t.key):(0,n.jsx)("td",{className:"px-4 py-1.5 whitespace-nowrap text-gray-500",children:e[t.dataIndex]},t.key)}))},t)}))})]})})}},5055:function(e,t,r){r.r(t);var n=r(885),o=r(2791),l=r(3504),a=r(7438),i=r(2171),u=r(184);t.default=function(){var e=[{id:"11",employee_name:"\u0110\u1ed7 Anh Duy",ware:"3",luong:12e3,thuong:500,workday:18,count:Math.floor(11250)}],t=(0,o.useState)(1),r=(0,n.Z)(t,2),c=r[0],s=r[1],f=(0,o.useState)(10),d=(0,n.Z)(f,2),p=d[0],y=d[1],m=c*p,x=m-p,h=e.slice(x,m),v=e.length;return(0,u.jsxs)("div",{className:"font-medium",children:[(0,u.jsx)("div",{className:"h-12 text-sm bg-slate-200 flex justify-end items-center px-5 shadow border-b border-gray-300",children:(0,u.jsx)("div",{className:"text-white flex items-center ",children:(0,u.jsx)(l.rU,{to:"add",className:" bg-violet-500 px-2 py-1  hover:bg-violet-600 ml-2",children:"Xu\u1ea5t PDF"})})}),(0,u.jsxs)("div",{className:"bg-white mt-5  w-full container mx-auto rounded shadow-md",children:[(0,u.jsx)("div",{className:" border-b px-5 py-3 border-gray-300",children:(0,u.jsx)("span",{className:"text-xl text-violet-600",children:"Tra c\u1ee9u l\u01b0\u01a1ng"})}),(0,u.jsxs)("form",{className:"flex items-center px-5 w-full mt-5",children:[(0,u.jsxs)("div",{className:"flex w-full border-gray-300 rounded divide-gray-300 divide-x border mr-3",children:[(0,u.jsxs)("select",{className:"px-3 py-1 rounded-l w-44 focus:outline-violet-500",children:[(0,u.jsx)("option",{value:"name",children:"T\xean nh\xe2n vi\xean"}),(0,u.jsx)("option",{value:"id",children:"M\xe3 nh\xe2n vi\xean"})]}),(0,u.jsx)("input",{type:"text",className:"w-full px-3 py-1 rounded-r focus:outline-violet-500 "})]}),(0,u.jsxs)("div",{className:"flex w-60 items-center mr-5 flex-none",children:[(0,u.jsx)("div",{className:"px-3 py-1 flex-none font-normal",children:"Th\xe1ng"}),(0,u.jsx)("input",{type:"type",className:"w-full px-3 py-1 rounded-r focus:outline-violet-500 border-gray-300  border"})]}),(0,u.jsxs)("div",{className:"flex w-60 items-center mr-5 flex-none",children:[(0,u.jsx)("div",{className:"px-3 py-1 flex-none font-normal",children:"N\u0103m"}),(0,u.jsx)("input",{type:"type",className:"w-full px-3 py-1 rounded-r focus:outline-violet-500 border-gray-300  border"})]}),(0,u.jsx)("button",{className:"font-medium  flex-none text-sm w-28 mx-2 text-white px-2.5 py-1.5 bg-violet-500 hover:bg-violet-600",children:"T\xecm ki\u1ebfm"}),(0,u.jsx)("button",{className:"font-medium  flex-none text-sm w-28 mx-2 px-2.5 py-1.5 bg-gray-100 border hover:bg-gray-200",children:"\u0110\u1eb7t l\u1ea1i"})]}),(0,u.jsxs)("div",{className:"px-5 py-6",children:[(0,u.jsxs)("div",{className:"px-2 pb-5 text-2xl text-gray-700",children:[v," B\u1ea3n ghi"]}),(0,u.jsx)(a.Z,{datas:h,columns:[{title:"M\xe3 nh\xe2n vi\xean",dataIndex:"id",key:"id"},{title:"Nh\xe2n vi\xean",dataIndex:"employee_name",key:"employee"},{title:"B\u1eadc l\u01b0\u01a1ng",dataIndex:"ware",key:"ware"},{title:"L\u01b0\u01a1ng c\u01a1 b\u1ea3n (1:1000)",dataIndex:"luong",key:"luong"},{title:"Tr\u1ee3 c\u1ea5p (1:1000)",dataIndex:"thuong",key:"thuong"},{title:"S\u1ed1 ng\xe0y c\xf4ng",dataIndex:"workday",key:"workday"},{title:"T\u1ed5ng l\u01b0\u01a1ng (1:1000)",dataIndex:"count",key:"count"}]}),(0,u.jsx)("div",{className:"mt-4",children:(0,u.jsx)(i.Z,{amountPerPage:p,currentPage:c,totalPages:v,paginate:function(e){return s(e)},amountItem:function(e){return y(e)}})})]})]})]})}},4499:function(e,t,r){var n=r(1725),o="function"===typeof Symbol&&Symbol.for,l=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,d=o?Symbol.for("react.forward_ref"):60112,p=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,x="function"===typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function b(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||v}function w(){}function j(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||v}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=b.prototype;var k=j.prototype=new w;k.constructor=j,n(k,b.prototype),k.isPureReactComponent=!0;var N={current:null},S=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var n,o={},a=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)S.call(t,n)&&!_.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var c=Array(u),s=0;s<u;s++)c[s]=arguments[s+2];o.children=c}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:l,type:e,key:a,ref:i,props:o,_owner:N.current}}function P(e){return"object"===typeof e&&null!==e&&e.$$typeof===l}var E=/\/+/g,$=[];function R(e,t,r,n){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function O(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case l:case a:i=!0}}if(i)return r(n,e,""===t?"."+Z(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var c=t+Z(o=e[u],u);i+=O(o,c,r,n)}else if(null===e||"object"!==typeof e?c=null:c="function"===typeof(c=x&&e[x]||e["@@iterator"])?c:null,"function"===typeof c)for(e=c.call(e),u=0;!(o=e.next()).done;)i+=O(o=o.value,c=t+Z(o,u++),r,n);else if("object"===o)throw r=""+e,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return i}function T(e,t,r){return null==e?0:O(e,"",t,r)}function Z(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?z(e,n,r,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+r)),n.push(e))}function z(e,t,r,n,o){var l="";null!=r&&(l=(""+r).replace(E,"$&/")+"/"),T(e,M,t=R(t,l,n,o)),I(t)}var L={current:null};function U(){var e=L.current;if(null===e)throw Error(h(321));return e}var B={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:N,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return z(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;T(e,A,t=R(null,null,t,r)),I(t)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var t=[];return z(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(h(143));return e}},t.Component=b,t.Fragment=i,t.Profiler=c,t.PureComponent=j,t.StrictMode=u,t.Suspense=p,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error(h(267,e));var o=n({},e.props),a=e.key,i=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,u=N.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)S.call(t,s)&&!_.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){c=Array(s);for(var f=0;f<s;f++)c[f]=arguments[f+2];o.children=c}return{$$typeof:l,type:e.type,key:a,ref:i,props:o,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return U().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,r){return U().useReducer(e,t,r)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.14.0"},1060:function(e,t,r){e.exports=r(4499)}}]);
//# sourceMappingURL=55.c27c5611.chunk.js.map