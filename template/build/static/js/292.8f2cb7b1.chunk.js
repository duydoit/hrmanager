"use strict";(self.webpackChunkhrmanager=self.webpackChunkhrmanager||[]).push([[292],{8292:function(e,n,t){t.r(n),t.d(n,{default:function(){return i}});var s=t(2791),r=t(6478),o=t(6030),c=t(3458),u=t(6871),a=t(184);function i(){var e=(0,u.UO)().employeeId,n=(0,o.I0)(),t=(0,o.v9)((function(e){return e.employees.detail}));(0,s.useEffect)((function(){n((0,c.DT)(e))}),[e]);var i="Ch\u1ec9nh s\u1eeda nh\xe2n vi\xean: ".concat(t.name);return(0,a.jsx)(r.Z,{employee:t,title:i,addSubmit:function(t){n((0,c.L9)(e,t))}})}},6478:function(e,n,t){t.d(n,{Z:function(){return b}});var s=t(1413),r=t(2791),o=t(1134),c=t(6871),u=t(6534),a=t(6030),i=t(3458),l=t(3706),d=t(5861),f=t(7757),p=t.n(f),h=t(6803),m=t(5608),x={getAll:function(e){return m.Z.get("wagerate/",{params:e})}},y=t(8839),v=t(9290),g=t(184);var b=function(e){var n=e.title,t=e.employee,f=e.addSubmit,m=(0,a.v9)((function(e){return e.employees.list})).filter((function(e){return 1==e.status})),b=(0,a.v9)((function(e){return e.departments.list})).filter((function(e){return 1==e.status})),j=(0,a.v9)((function(e){return e.wagerates.list})),N=(0,a.v9)((function(e){return e.accounts.list})),k=(0,a.v9)((function(e){return e.auth.user})),Z=(0,a.I0)();(0,r.useEffect)((function(){Z((0,i.$V)()),Z((0,l.jp)()),Z(function(){var e=(0,d.Z)(p().mark((function e(n){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x.getAll().then((function(e){return n((t=e,{type:h.iy,payload:t}));var t})).catch((function(e){return n((0,y.s)({msg:"Kh\xf4ng k\u1ebft n\u1ed1i : ".concat(e.message," "),title:"error"}))}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),Z((0,v.pO)())}),[]);var w=(0,u.VY)(),T=(0,c.s0)(),S=(0,o.cI)({defaultValues:t}),A=S.register,E=S.handleSubmit,C=S.formState.errors;return(0,g.jsxs)("div",{className:"mx-10 my-8 text-gray-600",children:[(0,g.jsx)("div",{className:"text-xl text-violet-600 font-medium mb-10",children:n}),(0,g.jsx)("div",{className:"text-rose-600",children:C.name&&C.birthday&&C.joindate&&C.email&&C.phone&&(0,g.jsx)("span",{children:"Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin"})}),(0,g.jsxs)("form",{onSubmit:E((function(e){w.show("B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n ho\xe0n th\xe0nh kh\xf4ng?",{closeCopy:"Hu\u1ef7",title:"T\u1ea1o m\u1edbi?",actions:[{copy:"\u0110\u1ed3ng \xfd",onClick:function(){return f(e)}}]})})),className:"",children:[(0,g.jsx)("div",{className:"grid-cols-2 grid my-3",children:(0,g.jsxs)("div",{className:"grid grid-cols-6 gap-4 ",children:[(0,g.jsxs)("div",{className:"col-span-6 flex flex-col",children:[(0,g.jsx)("span",{className:"text-sm mb-2",children:"H\u1ecd v\xe0 t\xean"}),(0,g.jsx)("input",(0,s.Z)({type:"text",className:"px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500"},A("name",{required:!0})))]}),(0,g.jsxs)("div",{className:"col-span-3 flex flex-col",children:[(0,g.jsx)("span",{className:"text-sm mb-2",children:"Gi\u1edbi t\xednh"}),(0,g.jsxs)("select",(0,s.Z)((0,s.Z)({},A("gender")),{},{className:"px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500",children:[(0,g.jsx)("option",{value:"male",children:"Nam"}),(0,g.jsx)("option",{value:"female",children:"N\u1eef"}),(0,g.jsx)("option",{value:"other",children:"Kh\xe1c"})]}))]}),(0,g.jsxs)("div",{className:"col-span-3 flex flex-col",children:[(0,g.jsx)("span",{className:"text-sm mb-2",children:"Tr\xecnh tr\u1ea1ng h\xf4n nh\xe2n"}),(0,g.jsxs)("select",(0,s.Z)((0,s.Z)({},A("marital")),{},{className:"px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500",children:[(0,g.jsx)("option",{value:"single",children:"\u0110\u1ed9c th\xe2n"}),(0,g.jsx)("option",{value:"married",children:"K\u1ebft h\xf4n"}),(0,g.jsx)("option",{value:"cohabitant",children:"S\u1ed1ng th\u1eed"}),(0,g.jsx)("option",{value:"divorced",children:"Ly d\u1ecb"})]}))]}),(0,g.jsxs)("div",{className:"col-span-3 flex flex-col",children:[(0,g.jsx)("span",{className:"text-sm mb-2",children:"Ng\xe0y sinh"}),(0,g.jsx)("input",(0,s.Z)({type:"date",className:"px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500"},A("birthday",{required:!0})))]}),(0,g.jsxs)("div",{className:"col-span-3 flex flex-col",children:[(0,g.jsx)("span",{className:"text-sm mb-2",children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),(0,g.jsx)("input",(0,s.Z)({type:"text",className:"px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500"},A("phone",{required:!0})))]}),(0,g.jsxs)("div",{className:"col-span-6 flex flex-col",children:[(0,g.jsx)("span",{className:"text-sm mb-2",children:"Email"}),(0,g.jsx)("input",(0,s.Z)({type:"text",className:"px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500"},A("email",{required:!0})))]}),(0,g.jsxs)("div",{className:"col-span-3 flex flex-col",children:[(0,g.jsx)("span",{className:"text-sm mb-2",children:"Th\u1ec3 lo\u1ea1i"}),(0,g.jsxs)("select",(0,s.Z)((0,s.Z)({},A("employee_type")),{},{className:"px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500",children:[(0,g.jsx)("option",{value:"employee",children:"Nh\xe2n vi\xean"}),(0,g.jsx)("option",{value:"student",children:"H\u1ecdc sinh"}),(0,g.jsx)("option",{value:"intern",children:"Th\u1ef1c t\u1eadp"}),(0,g.jsx)("option",{value:"freelancer",children:"L\xe0m t\u1ef1 do"})]}))]}),(0,g.jsxs)("div",{className:"col-span-3 flex flex-col",children:[(0,g.jsx)("span",{className:"text-sm mb-2",children:"Join Date"}),(0,g.jsx)("input",(0,s.Z)({type:"date",className:"px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500"},A("joindate",{required:!0})))]}),(0,g.jsxs)("div",{className:"col-span-3 flex flex-col",children:[(0,g.jsx)("span",{className:"text-sm mb-2",children:"Maneger"}),(0,g.jsxs)("select",(0,s.Z)((0,s.Z)({},A("parent",{setValueAs:function(e){return"0"!=e?parseInt(e):null}})),{},{className:"px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500 overflow-y-auto",children:[(0,g.jsx)("option",{value:"0",children:"None"}),m.map((function(e){return(0,g.jsx)("option",{value:e.id,children:e.name},e.id)}))]}))]}),(0,g.jsxs)("div",{className:"col-span-3 flex flex-col",children:[(0,g.jsx)("span",{className:"text-sm mb-2",children:"M\u1ee9c L\u01b0\u01a1ng"}),(0,g.jsxs)("select",(0,s.Z)((0,s.Z)({},A("wage_rate",{setValueAs:function(e){return e?parseInt(e):null}})),{},{className:"px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500 overflow-y-auto",children:[(0,g.jsx)("option",{value:"0",children:"None"}),j.map((function(e){return(0,g.jsx)("option",{value:e.wage_rate,children:"B\u1eadc: ".concat(e.wage_rate," - L\u01b0\u01a1ng: ").concat(e.basic_wage,"000\u0111")},e.wage_rate)}))]}))]}),(0,g.jsxs)("div",{className:"col-span-6 flex flex-col",children:[(0,g.jsx)("span",{className:"text-sm mb-2",children:"Department"}),(0,g.jsxs)("select",(0,s.Z)((0,s.Z)({},A("department",{setValueAs:function(e){return"0"!=e?parseInt(e):null}})),{},{className:"overflow-y-auto px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500",children:[(0,g.jsx)("option",{value:"0",children:"None"}),b.map((function(e){return(0,g.jsx)("option",{value:e.id,children:e.name},e.id)}))]}))]}),"admin"===k.role&&(0,g.jsxs)("div",{className:"col-span-6 flex flex-col",children:[(0,g.jsx)("span",{className:"text-sm mb-2",children:"Li\xean k\u1ebft t\xe0i kho\u1ea3n"}),(0,g.jsxs)("select",(0,s.Z)((0,s.Z)({},A("owner",{setValueAs:function(e){return"0"!=e?parseInt(e):null}})),{},{className:"overflow-y-auto px-2 py-2 border rounded focus:outline-none focus:border-2 focus:border-sky-400 focus:text-sky-500",children:[(0,g.jsx)("option",{value:"0",children:"None"}),N.map((function(e){return(0,g.jsx)("option",{value:e.id,children:e.username},e.id)}))]}))]}),(0,g.jsxs)("div",{className:"col-span-6",children:[(0,g.jsx)("span",{className:"text-sm mr-5",children:"Active Employee"}),(0,g.jsxs)("div",{className:"relative inline-block w-10 mr-2 align-middle select-none",children:[(0,g.jsx)("input",(0,s.Z)((0,s.Z)({},A("status")),{},{type:"checkbox",className:"checked:bg-violet-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"})),(0,g.jsx)("label",{className:"block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"})]})]})]})}),(0,g.jsxs)("div",{children:[(0,g.jsx)("button",{type:"submit",className:"mr-2 text-white font-medium w-36 h-10 bg-violet-500 rounded-full hover:bg-violet-600",children:"Save"}),(0,g.jsx)("button",{type:"button",onClick:function(){w.show("B\u1ea1n ch\u01b0a ho\xe0n th\xe0nh t\u1ea1o m\u1edbi. B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n r\u1eddi kh\u1ecfi khi ch\u01b0a ho\xe0n th\xe0nh kh\xf4ng?",{closeCopy:"Hu\u1ef7",title:"R\u1eddi kh\u1ecfi trang?",actions:[{copy:"\u0110\u1ed3ng \xfd",onClick:function(){return T("/employee")}}]})},className:"mr-2 text-gray-500  w-36 h-10 font-medium bg-gray-200 rounded-full hover:bg-gray-300",children:"Cancel"})]})]})]})}},3706:function(e,n,t){t.d(n,{BZ:function(){return f},If:function(){return p},$z:function(){return d},EP:function(){return h},jp:function(){return l}});var s=t(5861),r=t(7757),o=t.n(r),c=t(6803),u=t(5608),a={getAll:function(e){return u.Z.get("department/",{params:e})},post:function(e){return u.Z.post("department/",e)},get:function(e){var n="department/".concat(e,"/");return u.Z.get(n)},put:function(e,n){var t="department/".concat(e,"/");return u.Z.put(t,n)},delete:function(e){var n="department/".concat(e,"/");return u.Z.delete(n)}},i=t(8839),l=function(){return function(){var e=(0,s.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.getAll().then((function(e){return n((t=e,{type:c.hA,payload:t}));var t})).catch((function(e){return n((0,i.s)({msg:"disconnect fetch : ".concat(e.message," "),type:"error"}))}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},d=function(e){return function(n){a.get(e).then((function(e){n({type:c.ZW,payload:e})})).catch((function(e){n((0,i.s)({msg:e.response.statusText,title:"Error"}))}))}},f=function(e){return function(n){a.post(e).then((function(e){n((0,i.s)({msg:"\u0110\xe3 t\u1ea1o ph\xf2ng ban c\xf3 id ".concat(e.id),title:"Success"})),n({type:c.Wo,payload:e})})).catch((function(e){n((0,i.s)({msg:e.response.statusText,title:"Error"}))}))}},p=function(e){return function(n){a.delete(e).then((function(t){n((0,i.s)({msg:"Ph\xf2ng ban \u0111\xe3 \u0111\u01b0\u1ee3c xo\xe1 !",title:"Success"})),n({type:c.kT,payload:e})})).catch((function(e){return n((0,i.s)({msg:e.response.statusText,type:"error"}))}))}},h=function(e,n){return function(t){a.put(e,n).then((function(e){t({type:c.L2,payload:e})})).catch((function(e){t((0,i.s)({msg:e.response.statusText,title:"Error"}))}))}}},3458:function(e,n,t){t.d(n,{xk:function(){return d},P6:function(){return h},DT:function(){return f},$V:function(){return l},L9:function(){return p}});var s=t(5861),r=t(7757),o=t.n(r),c=t(6803),u=t(5608),a={getAll:function(e){return u.Z.get("employee/",{params:e})},post:function(e){return u.Z.post("employee/",e)},get:function(e){var n="employee/".concat(e,"/");return u.Z.get(n)},put:function(e,n){var t="employee/".concat(e,"/");return u.Z.put(t,n)},delete:function(e){var n="employee/".concat(e,"/");return u.Z.delete(n)}},i=t(8839),l=function(){return function(){var e=(0,s.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.getAll().then((function(e){return n((t=e,{type:c.S2,payload:t}));var t})).catch((function(e){return n((0,i.s)({msg:"disconnect fetch",type:"error"}))}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},d=function(e){return function(n){a.post(e).then((function(e){n((0,i.s)({msg:"\u0110\xe3 t\u1ea1o nh\xe2n vi\xean c\xf3 id ".concat(e.id),title:"Success"})),n({type:c.EC,payload:e})})).catch((function(e){n((0,i.s)({msg:e.response.statusText,title:"Error"}))}))}},f=function(e){return function(n){a.get(e).then((function(e){n({type:c.pz,payload:e})})).catch((function(e){n((0,i.s)({msg:e.response.statusText,title:"Error"}))}))}},p=function(e,n){return function(t){a.put(e,n).then((function(e){t((0,i.s)({msg:"Nh\xe2n vi\xean c\u1eadp nh\u1eadt th\xe0nh c\xf4ng !",title:"Success"})),t({type:c.Lm,payload:e})})).catch((function(e){t((0,i.s)({msg:e.response.statusText,title:"Error"}))}))}},h=function(e){return function(n){a.delete(e).then((function(t){n((0,i.s)({msg:"Nh\xe2n vi\xean \u0111\xe3 \u0111\u01b0\u1ee3c xo\xe1 !",title:"Success"})),n({type:c.UB,payload:e})})).catch((function(e){return n((0,i.s)({msg:e.response.statusText,type:"error"}))}))}}}}]);
//# sourceMappingURL=292.8f2cb7b1.chunk.js.map