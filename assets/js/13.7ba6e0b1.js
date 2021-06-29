(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{366:function(t,a,s){"use strict";s.r(a);var n=s(45),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"element-ui-table-组件闪动解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#element-ui-table-组件闪动解决方案"}},[t._v("#")]),t._v(" element-ui table 组件闪动解决方案")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("场景：表格数据需要根据筛选不同模式来显示/隐藏相应的列。")]),t._v(" "),s("p",[t._v("问题：起初是用v-show来判断，为了避免table组件频繁计算，发现没有效果，v-show起作用的本质是利用display:none控制隐藏，而element-ui table组件el-table-column的td是利用了display: table-cell 控制显示，而display：table-cell的优先级又高于display：none，所以v-show失效了，就改用了v-if，用了v-if后，切换不同模式时发现页面会有闪动。")]),t._v(" "),s("p",[t._v("解决：用v-if判断，每次切换模式前先将list置空再去重新请求数据就不会有闪动的效果。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("modeChange")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);