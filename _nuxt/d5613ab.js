(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{352:function(t,e,n){"use strict";n.r(e);n(60),n(36);var r=n(0),o=n(122),l={props:{headers:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},headerKey:{type:String,default:"text"}},computed:{dataKeys:function(){var t=this;return this.headers.map((function(t){return t.value})).filter((function(e){return e!==t.headerKey}))}},methods:{formatDate:function(t){var e=Object(o.e)(t);return e.isValid()?this.$d(e.toDate(),"dateWithoutYear"):t}}},d=r.a.extend(l),c=(n(381),n(5)),h=n(32),T=n.n(h),f=n(660),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-data-table",{staticClass:"cardTable",attrs:{headers:t.headers,items:t.items,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"disable-sort":!0,"mobile-breakpoint":0,"item-key":"name"},scopedSlots:t._u([{key:"body",fn:function(e){var r=e.items;return[n("tbody",t._l(r,(function(e,i){return n("tr",{key:i},[n("th",{staticClass:"cardTable-header",attrs:{scope:"row"}},[t._v("\n          "+t._s(t.formatDate(e[t.headerKey]))+"\n        ")]),t._v(" "),t._l(t.dataKeys,(function(r,o){return n("td",{key:o,staticClass:"text-end"},[t._v("\n          "+t._s(e[r])+"\n        ")])}))],2)})),0)]}}])})}),[],!1,null,null,null);e.default=component.exports;T()(component,{VDataTable:f.a})},353:function(t,e,n){"use strict";n.r(e);n(47);var r=n(399),o={props:{displayData:{type:Object,required:!0},isWeekly:{type:Boolean,required:!1,default:!1}},data:function(){return{chartWidth:300,timerId:0}},watch:{displayData:function(){this.scrollRightSide()}},computed:{labelCount:function(){var t;return(null===(t=this.displayData.labels)||void 0===t?void 0:t.length)||0}},methods:{adjustChartWidth:function(){var t=this.$refs.chartContainer;if(t&&0!==t.clientWidth){var e=t.clientWidth;this.chartWidth=this.calcChartWidth(e,this.labelCount)}},calcChartWidth:function(t,e){var n=(t-38)/(this.isWeekly?24:60)*e+38;return Math.max(n,t)},scrollRightSide:function(){var t=this.$refs.scrollable;t&&(t.scrollLeft=this.chartWidth)},handleResize:function(){clearTimeout(this.timerId),this.timerId=window.setTimeout(this.adjustChartWidth,500)}},mounted:function(){var t=this;this.adjustChartWidth(),this.$on("update-width",this.scrollRightSide),window.addEventListener("resize",this.handleResize),r.a.$on(r.b,(function(){return setTimeout((function(){return t.adjustChartWidth()}))}))},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize),r.a.$off(r.b)}},l=(n(383),n(5)),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"chartContainer",staticClass:"LegendStickyChart"},[e("div",{ref:"scrollable",staticClass:"scrollable"},[e("div",{style:{width:this.chartWidth+"px"}},[this._t("chart",null,{chartWidth:this.chartWidth})],2)]),this._v(" "),this._t("sticky-chart")],2)}),[],!1,null,"1b3af3e9",null);e.default=component.exports},355:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return l}));n(81),n(237);function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t<0?function(t){return null==t?void 0:t.toFixed(0)}:t>20?function(t){return null==t?void 0:t.toFixed(20)}:function(e){return null==e?void 0:e.toFixed(t)}}function o(){return function(t){return null==t?void 0:t.toLocaleString()}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e){return Number(r(t)(e)).toLocaleString("en",{minimumFractionDigits:t})}}},357:function(t,e,n){"use strict";n.r(e);n(20),n(123),n(36),n(18),n(33);var r=n(100),o=n(11),l=n.n(o),d=n(0),c=n(366),h=n(351),T=n(354),f=n(352),Z=n(356),v=n(353),m=n(125),y=n(359),x=n(122),k=n(362),C=n(355),D={created:function(){this.canvas=!0,this.dataKind=this.$route.query.embed&&"cumulative"===this.$route.query.dataKind?"cumulative":"transition"},components:{DataView:h.default,DataSelector:c.default,DataViewDataSetPanel:T.default,DataViewTable:f.default,ScrollableChart:v.default,OpenDataLink:Z.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartId:{type:String,default:"time-bar-mixed-chart"},chartData:{type:Array,default:function(){return[]}},getFormatter:{type:Function,required:!1,default:function(t){return Object(C.c)()}},date:{type:String,required:!0},unit:{type:String,default:""},url:{type:String,default:""},dataLabels:{type:Array,default:function(){return[]}},yAxesBgPlugin:{type:Array,default:function(){return m.b}},byDate:{type:Boolean,default:!1}},data:function(){return{dataKind:"transition",canvas:!0}},computed:{displayInfo:function(){var t=Object(k.a)({displayData:this.displayData,dataIndex:1}),e=t.lastDay,n=t.lastDayData,r=t.dayBeforeRatio,o=this.$d(e,"dateWithoutYear");return"transition"===this.dataKind&&this.byDate?{lText:n,sText:"".concat(o," ").concat(this.$t("日別値"),"（").concat(this.$t("前日比"),": ").concat(r," ").concat(this.unit,"）"),unit:this.unit}:"transition"===this.dataKind?{lText:n,sText:"".concat(o," ").concat(this.$t("実績値"),"（").concat(this.$t("前日比"),": ").concat(r," ").concat(this.unit,"）"),unit:this.unit}:{lText:n,sText:"".concat(o," ").concat(this.$t("累計値"),"（").concat(this.$t("前日比"),": ").concat(r," ").concat(this.unit,"）"),unit:this.unit}},displayData:function(){var t=[Object(y.a)("A"),Object(y.a)("C"),Object(y.a)("E")];return"transition"===this.dataKind?{labels:this.chartData[0].map((function(t){return t.label})),datasets:[{type:"bar",label:this.dataLabels[0],data:this.chartData[0].map((function(t){return 0})),backgroundColor:t[0].fillColor,borderColor:t[0].strokeColor,borderWidth:0,minBarLength:this.chartData[0].map((function(t){return t.transition<=0?5:0})),order:1},{type:"bar",label:this.dataLabels[0],data:this.chartData[0].map((function(t){return t.transition})),backgroundColor:t[0].fillColor,borderColor:t[0].strokeColor,borderWidth:1,order:1},{type:"line",label:this.dataLabels[1],data:this.chartData[1].map((function(t){return t})),pointBackgroundColor:"rgba(0,0,0,0)",pointBorderColor:"rgba(0,0,0,0)",borderColor:t[2].strokeColor,borderWidth:3,fill:!1,order:0,lineTension:0}]}:{labels:this.chartData[0].map((function(t){return t.label})),datasets:[{type:"bar",label:this.dataLabels[0],data:this.chartData[0].map((function(t){return 0})),backgroundColor:t[0].fillColor,borderColor:t[0].strokeColor,borderWidth:0,minBarLength:this.chartData[0].map((function(t){return t.cumulative<=0?5:0}))},{type:"bar",label:this.dataLabels[0],data:this.chartData[0].map((function(t){return t.cumulative})),backgroundColor:t[0].fillColor,borderColor:t[0].strokeColor,borderWidth:1}]}},displayOption:function(){var t=this,e=this,n=this.unit,r=this.getFormatter,o={tooltips:{displayColors:!1,callbacks:{label:function(e){var o=e.datasetIndex-1,l=r(o)(parseFloat(e.value)),label="".concat(t.dataLabels[o]," : ").concat(l," ").concat(n);return label},title:function(t,data){if(t[0].datasetIndex<4){var label=data.labels[t[0].index];return e.$d(Object(x.d)(label),"dateWithoutYear")}return""}}},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,callback:function(label){return l()(label).format("D")}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold"},type:"time",time:{unit:"month",displayFormats:{month:"MMM"}}}],yAxes:[{stacked:!0,gridLines:{display:!0,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080",suggestedMax:this.scaledTicksYAxisMax}}]}};return"true"===this.$route.query.ogp&&Object.assign(o,{animation:{duration:0}}),o},displayDataHeader:function(){return"transition"===this.dataKind?{labels:["2020-01-01"],datasets:[{data:[Math.max.apply(Math,Object(r.a)(this.chartData[0].map((function(t){return t.transition}))))],backgroundColor:"transparent",borderWidth:0}]}:{labels:["2020-01-01"],datasets:[{data:[Math.max.apply(Math,Object(r.a)(this.chartData[0].map((function(t){return t.cumulative}))))],backgroundColor:"transparent",borderWidth:0}]}},displayOptionHeader:function(){return{maintainAspectRatio:!1,legend:{display:!1},tooltips:{enabled:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"transparent",maxRotation:0,minRotation:0,callback:function(label){return l()(label).format("D")}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!1,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"transparent",padding:13,fontStyle:"bold",callback:function(label){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].indexOf(label.split(" ")[0])+1+"月"}},type:"time",time:{unit:"month"}}],yAxes:[{stacked:!0,gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080"}}]},animation:{duration:0}}},scaledTicksYAxisMax:function(){var t="transition"===this.dataKind?"transition":"cumulative",e=this.chartData[0].map((function(e){return e[t]}));return Math.max.apply(Math,Object(r.a)(e))},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"},{text:"".concat(this.title," (").concat(this.$t("日別"),")"),value:"transition",align:"end"},{text:"".concat(this.title," (").concat(this.$t("累計"),")"),value:"cumulative",align:"end"},{text:"７日間平均",value:"weeklyAverage",align:"end"}]},tableData:function(){var t=this;return this.chartData[0].map((function(e,n){return{text:e.label,transition:e.transition.toLocaleString(),cumulative:e.cumulative.toLocaleString(),weeklyAverage:t.chartData[1][n]}})).sort((function(a,b){return l()(a.text).unix()-l()(b.text).unix()})).reverse()}},mounted:function(){var canvas=this.$refs.barChart.$el.querySelector("canvas"),t="".concat(this.titleId,"-graph");canvas&&(canvas.setAttribute("role","img"),canvas.setAttribute("aria-labelledby",t))}},w=d.a.extend(D),E=n(5),component=Object(E.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"attentionNote",fn:function(){return[t._t("attentionNote")]},proxy:!0},{key:"description",fn:function(){return[t._t("description")]},proxy:!0},{key:"button",fn:function(){return[n("data-selector",{style:{display:t.canvas?"inline-block":"none"},attrs:{"target-id":t.chartId},model:{value:t.dataKind,callback:function(e){t.dataKind=e},expression:"dataKind"}})]},proxy:!0},{key:"additionalDescription",fn:function(){return[t._t("additionalDescription")]},proxy:!0},{key:"dataTable",fn:function(){return[n("client-only",[n("data-view-table",{attrs:{headers:t.tableHeaders,items:t.tableData}})],1)]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-data-set-panel",{attrs:{"l-text":t.displayInfo.lText,"s-text":t.displayInfo.sText,unit:t.displayInfo.unit}}),t._v(" "),"cumulative"===t.dataKind?t._t("additionalInfoPanel"):t._e()]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{directives:[{name:"show",rawName:"v-show",value:t.url,expression:"url"}],attrs:{url:t.url}})]},proxy:!0}],null,!0)},[t._v(" "),t._v(" "),t._v(" "),n("h4",{staticClass:"visually-hidden",attrs:{id:t.titleId+"-graph"}},[t._v("\n    "+t._s(t.$t("{title}のグラフ",{title:t.title}))+"\n  ")]),t._v(" "),n("scrollable-chart",{directives:[{name:"show",rawName:"v-show",value:t.canvas,expression:"canvas"}],attrs:{"display-data":t.displayData},scopedSlots:t._u([{key:"chart",fn:function(e){var r=e.chartWidth;return[n("bar",{ref:"barChart",attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,height:240,width:r}})]}},{key:"sticky-chart",fn:function(){return[n("bar",{staticClass:"sticky-legend",attrs:{"chart-id":t.chartId+"-header","chart-data":t.displayDataHeader,options:t.displayOptionHeader,plugins:t.yAxesBgPlugin,height:240}})]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DataSelector:n(366).default,ScrollableChart:n(353).default,DataViewTable:n(352).default,DataViewDataSetPanel:n(354).default,OpenDataLink:n(356).default,DataView:n(351).default})},359:function(t,e,n){"use strict";n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return Z}));var r={strokeColor:"#E813A4",fillColor:"#E813A4"},o={strokeColor:"#E813A4",fillColor:"#ebc0df"},l={strokeColor:"#00A040",fillColor:"#00A040"},d={strokeColor:"#00A040",fillColor:"#00A040"},c={strokeColor:"#00A040",fillColor:"#00A040"},h={strokeColor:"#00A040",fillColor:"#00A040"},T={strokeColor:"#00A040",fillColor:"#00A040"};function f(t){switch(t){case 1:return[o];case 2:return[r,l];case 4:return[r,o,l,T];default:return[r,o,l]}}function Z(t){return{A:r,B:o,C:l,D:d,E:c,F:h,G:T}[t]}},362:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(82),n(385);var r=n(122),o=n(355),l=function(t){var e=t.displayData,n=t.dataIndex,l=void 0===n?0:n,c=t.digit,h=void 0===c?0:c,T=e.labels.slice(-1)[0],data=e.datasets[l].data,f=data.slice(-1)[0],Z=f-data.slice(-2)[0],v=Object(o.a)(h);return{lastDay:Object(r.e)(T).toDate(),lastDayData:v(f),dayBeforeRatio:d(Z,v)}};function d(t,e){var n=e(t);switch(Math.sign(t)){case 1:return"+".concat(n);case-1:default:return"".concat(n)}}},363:function(t,e,n){var content=n(377);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("59896903",content,!0,{sourceMap:!1})},364:function(t,e,n){var content=n(382);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("4f9a7631",content,!0,{sourceMap:!1})},365:function(t,e,n){var content=n(384);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("da6964fc",content,!0,{sourceMap:!1})},366:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({name:"DataSelector",props:{value:{type:String,default:"transition"},targetId:{type:String,default:function(t){return t&&""!==t?t:null}}}}),o=(n(376),n(5)),l=n(32),d=n.n(l),c=n(524),h=n(3),T=(n(378),n(397)),f=T.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return T.a.options.computed.classes.call(this)}},methods:{genData:T.a.options.methods.genData}}),Z=n(101),v=n(71);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x=Object(v.a)(f,Z.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return y(y({},f.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var data=this.setTextColor(this.color,y({},f.options.methods.genData.call(this)));return this.group?data:this.setBackgroundColor(this.backgroundColor,data)}}}),k=n(380),C=n.n(k),D=n(358),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn-toggle",{staticClass:"DataSelector",attrs:{"aria-controls":t.targetId,value:t.value,mandatory:""},on:{change:function(e){return t.$emit("input",e)}}},[n("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{"aria-pressed":"transition"===t.value?"true":"false",value:"transition"}},[t._v("\n    "+t._s(t.$t("日別"))+"\n  ")]),t._v(" "),n("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{"aria-pressed":"cumulative"===t.value?"true":"false",value:"cumulative"}},[t._v("\n    "+t._s(t.$t("累計"))+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:c.a,VBtnToggle:x}),C()(component,{Ripple:D.a})},376:function(t,e,n){"use strict";n(363)},377:function(t,e,n){(e=n(16)(!1)).push([t.i,".DataSelector{margin-top:20px;border:1px solid #d9d9d9;background-color:#fff}.DataSelector-Button{border:none!important;margin:2px;border-radius:4px!important;height:24px!important;color:#333!important;background-color:#fff!important;font-size:1.2rem!important}.DataSelector-Button:before{background-color:inherit}.DataSelector-Button:focus{outline:1px dotted #707070}.DataSelector .v-btn--active{background-color:#4d4d4d!important;color:#fff!important}",""]),t.exports=e},378:function(t,e,n){var content=n(379);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("01907af4",content,!0,{sourceMap:!1})},379:function(t,e,n){(e=n(16)(!1)).push([t.i,".theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:hsla(0,0%,100%,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:last-child,.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:first-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:last-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:not(:first-child),.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:not(:last-child){border-left-width:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px;min-height:0;min-width:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent!important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}",""]),t.exports=e},381:function(t,e,n){"use strict";n(364)},382:function(t,e,n){(e=n(16)(!1)).push([t.i,".cardTable-header{white-space:nowrap!important}.v-data-table .text-end{text-align:right}",""]),t.exports=e},383:function(t,e,n){"use strict";n(365)},384:function(t,e,n){(e=n(16)(!1)).push([t.i,".LegendStickyChart[data-v-1b3af3e9]{margin:16px 0;position:relative;overflow:hidden}.LegendStickyChart .scrollable[data-v-1b3af3e9]{overflow-x:scroll}.LegendStickyChart .sticky-legend[data-v-1b3af3e9]{position:absolute;top:0;pointer-events:none;width:100%}",""]),t.exports=e},385:function(t,e,n){n(4)({target:"Math",stat:!0},{sign:n(239)})},400:function(t){t.exports=JSON.parse('{"date":"2020/12/28 23:02","data":[{"日付":"2020-03-22T08:00:00.000Z","小計":1,"７日間平均":null},{"日付":"2020-03-23T08:00:00.000Z","小計":0,"７日間平均":null},{"日付":"2020-03-24T08:00:00.000Z","小計":0,"７日間平均":null},{"日付":"2020-03-25T08:00:00.000Z","小計":0,"７日間平均":null},{"日付":"2020-03-26T08:00:00.000Z","小計":0,"７日間平均":null},{"日付":"2020-03-27T08:00:00.000Z","小計":1,"７日間平均":null},{"日付":"2020-03-28T08:00:00.000Z","小計":1,"７日間平均":0.4},{"日付":"2020-03-29T08:00:00.000Z","小計":0,"７日間平均":0.3},{"日付":"2020-03-30T08:00:00.000Z","小計":1,"７日間平均":0.4},{"日付":"2020-03-31T08:00:00.000Z","小計":0,"７日間平均":0.4},{"日付":"2020-04-01T08:00:00.000Z","小計":1,"７日間平均":0.6},{"日付":"2020-04-02T08:00:00.000Z","小計":2,"７日間平均":0.9},{"日付":"2020-04-03T08:00:00.000Z","小計":2,"７日間平均":1},{"日付":"2020-04-04T08:00:00.000Z","小計":1,"７日間平均":1},{"日付":"2020-04-05T08:00:00.000Z","小計":1,"７日間平均":1.1},{"日付":"2020-04-06T08:00:00.000Z","小計":0,"７日間平均":1},{"日付":"2020-04-07T08:00:00.000Z","小計":1,"７日間平均":1.1},{"日付":"2020-04-08T08:00:00.000Z","小計":2,"７日間平均":1.3},{"日付":"2020-04-09T08:00:00.000Z","小計":1,"７日間平均":1.1},{"日付":"2020-04-10T08:00:00.000Z","小計":0,"７日間平均":0.9},{"日付":"2020-04-11T08:00:00.000Z","小計":0,"７日間平均":0.7},{"日付":"2020-04-12T08:00:00.000Z","小計":0,"７日間平均":0.6},{"日付":"2020-04-13T08:00:00.000Z","小計":0,"７日間平均":0.6},{"日付":"2020-04-14T08:00:00.000Z","小計":1,"７日間平均":0.6},{"日付":"2020-04-15T08:00:00.000Z","小計":0,"７日間平均":0.3},{"日付":"2020-04-16T08:00:00.000Z","小計":1,"７日間平均":0.3},{"日付":"2020-04-17T08:00:00.000Z","小計":1,"７日間平均":0.4},{"日付":"2020-04-18T08:00:00.000Z","小計":0,"７日間平均":0.4},{"日付":"2020-04-19T08:00:00.000Z","小計":1,"７日間平均":0.6},{"日付":"2020-04-20T08:00:00.000Z","小計":0,"７日間平均":0.6},{"日付":"2020-04-21T08:00:00.000Z","小計":0,"７日間平均":0.4},{"日付":"2020-04-22T08:00:00.000Z","小計":0,"７日間平均":0.4},{"日付":"2020-04-23T08:00:00.000Z","小計":0,"７日間平均":0.3},{"日付":"2020-04-24T08:00:00.000Z","小計":2,"７日間平均":0.4},{"日付":"2020-04-25T08:00:00.000Z","小計":0,"７日間平均":0.4},{"日付":"2020-04-26T08:00:00.000Z","小計":1,"７日間平均":0.4},{"日付":"2020-04-27T08:00:00.000Z","小計":0,"７日間平均":0.4},{"日付":"2020-04-28T08:00:00.000Z","小計":0,"７日間平均":0.4},{"日付":"2020-04-29T08:00:00.000Z","小計":1,"７日間平均":0.6},{"日付":"2020-04-30T08:00:00.000Z","小計":0,"７日間平均":0.6},{"日付":"2020-05-01T08:00:00.000Z","小計":0,"７日間平均":0.3},{"日付":"2020-05-02T08:00:00.000Z","小計":0,"７日間平均":0.3},{"日付":"2020-05-03T08:00:00.000Z","小計":0,"７日間平均":0.1},{"日付":"2020-05-04T08:00:00.000Z","小計":0,"７日間平均":0.1},{"日付":"2020-05-05T08:00:00.000Z","小計":0,"７日間平均":0.1},{"日付":"2020-05-06T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-05-07T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-05-08T08:00:00.000Z","小計":1,"７日間平均":0.1},{"日付":"2020-05-09T08:00:00.000Z","小計":0,"７日間平均":0.1},{"日付":"2020-05-10T08:00:00.000Z","小計":0,"７日間平均":0.1},{"日付":"2020-05-11T08:00:00.000Z","小計":1,"７日間平均":0.3},{"日付":"2020-05-12T08:00:00.000Z","小計":0,"７日間平均":0.3},{"日付":"2020-05-13T08:00:00.000Z","小計":0,"７日間平均":0.3},{"日付":"2020-05-14T08:00:00.000Z","小計":0,"７日間平均":0.3},{"日付":"2020-05-15T08:00:00.000Z","小計":0,"７日間平均":0.1},{"日付":"2020-05-16T08:00:00.000Z","小計":0,"７日間平均":0.1},{"日付":"2020-05-17T08:00:00.000Z","小計":0,"７日間平均":0.1},{"日付":"2020-05-18T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-05-19T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-05-20T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-05-21T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-05-22T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-05-23T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-05-24T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-05-25T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-05-26T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-05-27T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-05-28T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-05-29T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-05-30T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-05-31T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-06-01T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-06-02T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-06-03T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-06-04T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-06-05T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-06-06T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-06-07T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-06-08T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-06-09T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-06-10T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-06-11T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-06-12T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-06-13T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-06-14T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-06-15T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-06-16T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-06-17T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-06-18T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-06-19T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-06-20T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-06-21T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-06-22T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-06-23T08:00:00.000Z","小計":1,"７日間平均":0.1},{"日付":"2020-06-24T08:00:00.000Z","小計":0,"７日間平均":0.1},{"日付":"2020-06-25T08:00:00.000Z","小計":0,"７日間平均":0.1},{"日付":"2020-06-26T08:00:00.000Z","小計":0,"７日間平均":0.1},{"日付":"2020-06-27T08:00:00.000Z","小計":0,"７日間平均":0.1},{"日付":"2020-06-28T08:00:00.000Z","小計":0,"７日間平均":0.1},{"日付":"2020-06-29T08:00:00.000Z","小計":0,"７日間平均":0.1},{"日付":"2020-06-30T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-07-01T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-07-02T08:00:00.000Z","小計":2,"７日間平均":0.3},{"日付":"2020-07-03T08:00:00.000Z","小計":0,"７日間平均":0.3},{"日付":"2020-07-04T08:00:00.000Z","小計":0,"７日間平均":0.3},{"日付":"2020-07-05T08:00:00.000Z","小計":0,"７日間平均":0.3},{"日付":"2020-07-06T08:00:00.000Z","小計":0,"７日間平均":0.3},{"日付":"2020-07-07T08:00:00.000Z","小計":0,"７日間平均":0.3},{"日付":"2020-07-08T08:00:00.000Z","小計":0,"７日間平均":0.3},{"日付":"2020-07-09T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-07-10T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-07-11T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-07-12T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-07-13T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-07-14T08:00:00.000Z","小計":1,"７日間平均":0.1},{"日付":"2020-07-15T08:00:00.000Z","小計":1,"７日間平均":0.3},{"日付":"2020-07-16T08:00:00.000Z","小計":2,"７日間平均":0.6},{"日付":"2020-07-17T08:00:00.000Z","小計":2,"７日間平均":0.9},{"日付":"2020-07-18T08:00:00.000Z","小計":3,"７日間平均":1.3},{"日付":"2020-07-19T08:00:00.000Z","小計":4,"７日間平均":1.9},{"日付":"2020-07-20T08:00:00.000Z","小計":2,"７日間平均":2.1},{"日付":"2020-07-21T08:00:00.000Z","小計":1,"７日間平均":2.1},{"日付":"2020-07-22T08:00:00.000Z","小計":0,"７日間平均":2},{"日付":"2020-07-23T08:00:00.000Z","小計":1,"７日間平均":1.9},{"日付":"2020-07-24T08:00:00.000Z","小計":4,"７日間平均":2.1},{"日付":"2020-07-25T08:00:00.000Z","小計":10,"７日間平均":3.1},{"日付":"2020-07-26T08:00:00.000Z","小計":2,"７日間平均":2.9},{"日付":"2020-07-27T08:00:00.000Z","小計":3,"７日間平均":3},{"日付":"2020-07-28T08:00:00.000Z","小計":2,"７日間平均":3.1},{"日付":"2020-07-29T08:00:00.000Z","小計":5,"７日間平均":3.9},{"日付":"2020-07-30T08:00:00.000Z","小計":5,"７日間平均":4.4},{"日付":"2020-07-31T08:00:00.000Z","小計":3,"７日間平均":4.3},{"日付":"2020-08-01T08:00:00.000Z","小計":7,"７日間平均":3.9},{"日付":"2020-08-02T08:00:00.000Z","小計":2,"７日間平均":3.9},{"日付":"2020-08-03T08:00:00.000Z","小計":3,"７日間平均":3.9},{"日付":"2020-08-04T08:00:00.000Z","小計":3,"７日間平均":4},{"日付":"2020-08-05T08:00:00.000Z","小計":7,"７日間平均":4.3},{"日付":"2020-08-06T08:00:00.000Z","小計":2,"７日間平均":3.9},{"日付":"2020-08-07T08:00:00.000Z","小計":4,"７日間平均":4},{"日付":"2020-08-08T08:00:00.000Z","小計":3,"７日間平均":3.4},{"日付":"2020-08-09T08:00:00.000Z","小計":1,"７日間平均":3.3},{"日付":"2020-08-10T08:00:00.000Z","小計":2,"７日間平均":3.1},{"日付":"2020-08-11T08:00:00.000Z","小計":2,"７日間平均":3},{"日付":"2020-08-12T08:00:00.000Z","小計":2,"７日間平均":2.3},{"日付":"2020-08-13T08:00:00.000Z","小計":2,"７日間平均":2.3},{"日付":"2020-08-14T08:00:00.000Z","小計":4,"７日間平均":2.3},{"日付":"2020-08-15T08:00:00.000Z","小計":2,"７日間平均":2.1},{"日付":"2020-08-16T08:00:00.000Z","小計":1,"７日間平均":2.1},{"日付":"2020-08-17T08:00:00.000Z","小計":0,"７日間平均":1.9},{"日付":"2020-08-18T08:00:00.000Z","小計":2,"７日間平均":1.9},{"日付":"2020-08-19T08:00:00.000Z","小計":1,"７日間平均":1.7},{"日付":"2020-08-20T08:00:00.000Z","小計":2,"７日間平均":1.7},{"日付":"2020-08-21T08:00:00.000Z","小計":2,"７日間平均":1.4},{"日付":"2020-08-22T08:00:00.000Z","小計":2,"７日間平均":1.4},{"日付":"2020-08-23T08:00:00.000Z","小計":3,"７日間平均":1.7},{"日付":"2020-08-24T08:00:00.000Z","小計":3,"７日間平均":2.1},{"日付":"2020-08-25T08:00:00.000Z","小計":1,"７日間平均":2},{"日付":"2020-08-26T08:00:00.000Z","小計":0,"７日間平均":1.9},{"日付":"2020-08-27T08:00:00.000Z","小計":1,"７日間平均":1.7},{"日付":"2020-08-28T08:00:00.000Z","小計":2,"７日間平均":1.7},{"日付":"2020-08-29T08:00:00.000Z","小計":0,"７日間平均":1.4},{"日付":"2020-08-30T08:00:00.000Z","小計":0,"７日間平均":1},{"日付":"2020-08-31T08:00:00.000Z","小計":0,"７日間平均":0.6},{"日付":"2020-09-01T08:00:00.000Z","小計":0,"７日間平均":0.4},{"日付":"2020-09-02T08:00:00.000Z","小計":0,"７日間平均":0.4},{"日付":"2020-09-03T08:00:00.000Z","小計":1,"７日間平均":0.4},{"日付":"2020-09-04T08:00:00.000Z","小計":0,"７日間平均":0.1},{"日付":"2020-09-05T08:00:00.000Z","小計":0,"７日間平均":0.1},{"日付":"2020-09-06T08:00:00.000Z","小計":0,"７日間平均":0.1},{"日付":"2020-09-07T08:00:00.000Z","小計":0,"７日間平均":0.1},{"日付":"2020-09-08T08:00:00.000Z","小計":0,"７日間平均":0.1},{"日付":"2020-09-09T08:00:00.000Z","小計":0,"７日間平均":0.1},{"日付":"2020-09-10T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-09-11T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-09-12T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-09-13T08:00:00.000Z","小計":0,"７日間平均":0},{"日付":"2020-09-14T08:00:00.000Z","小計":1,"７日間平均":0.1},{"日付":"2020-09-15T08:00:00.000Z","小計":0,"７日間平均":0.1},{"日付":"2020-09-16T08:00:00.000Z","小計":0,"７日間平均":0.1},{"日付":"2020-09-17T08:00:00.000Z","小計":0,"７日間平均":0.1},{"日付":"2020-09-18T08:00:00.000Z","小計":1,"７日間平均":0.3},{"日付":"2020-09-19T08:00:00.000Z","小計":0,"７日間平均":0.3},{"日付":"2020-09-20T08:00:00.000Z","小計":0,"７日間平均":0.3},{"日付":"2020-09-21T08:00:00.000Z","小計":0,"７日間平均":0.1},{"日付":"2020-09-22T08:00:00.000Z","小計":0,"７日間平均":0.1},{"日付":"2020-09-23T08:00:00.000Z","小計":0,"７日間平均":0.1},{"日付":"2020-09-24T08:00:00.000Z","小計":1,"７日間平均":0.3},{"日付":"2020-09-25T08:00:00.000Z","小計":1,"７日間平均":0.3},{"日付":"2020-09-26T08:00:00.000Z","小計":2,"７日間平均":0.6},{"日付":"2020-09-27T08:00:00.000Z","小計":1,"７日間平均":0.7},{"日付":"2020-09-28T08:00:00.000Z","小計":1,"７日間平均":0.9},{"日付":"2020-09-29T08:00:00.000Z","小計":0,"７日間平均":0.9},{"日付":"2020-09-30T08:00:00.000Z","小計":3,"７日間平均":1.3},{"日付":"2020-10-01T08:00:00.000Z","小計":0,"７日間平均":1.1},{"日付":"2020-10-02T08:00:00.000Z","小計":0,"７日間平均":1},{"日付":"2020-10-03T08:00:00.000Z","小計":1,"７日間平均":0.9},{"日付":"2020-10-04T08:00:00.000Z","小計":0,"７日間平均":0.7},{"日付":"2020-10-05T08:00:00.000Z","小計":3,"７日間平均":1},{"日付":"2020-10-06T08:00:00.000Z","小計":0,"７日間平均":1},{"日付":"2020-10-07T08:00:00.000Z","小計":0,"７日間平均":0.6},{"日付":"2020-10-08T08:00:00.000Z","小計":1,"７日間平均":0.7},{"日付":"2020-10-09T08:00:00.000Z","小計":1,"７日間平均":0.9},{"日付":"2020-10-10T08:00:00.000Z","小計":0,"７日間平均":0.7},{"日付":"2020-10-11T08:00:00.000Z","小計":0,"７日間平均":0.7},{"日付":"2020-10-12T08:00:00.000Z","小計":0,"７日間平均":0.3},{"日付":"2020-10-13T08:00:00.000Z","小計":1,"７日間平均":0.4},{"日付":"2020-10-14T08:00:00.000Z","小計":4,"７日間平均":1},{"日付":"2020-10-15T08:00:00.000Z","小計":0,"７日間平均":0.9},{"日付":"2020-10-16T08:00:00.000Z","小計":2,"７日間平均":1},{"日付":"2020-10-17T08:00:00.000Z","小計":2,"７日間平均":1.3},{"日付":"2020-10-18T08:00:00.000Z","小計":1,"７日間平均":1.4},{"日付":"2020-10-19T08:00:00.000Z","小計":0,"７日間平均":1.4},{"日付":"2020-10-20T08:00:00.000Z","小計":1,"７日間平均":1.4},{"日付":"2020-10-21T08:00:00.000Z","小計":11,"７日間平均":2.4},{"日付":"2020-10-22T08:00:00.000Z","小計":3,"７日間平均":2.9},{"日付":"2020-10-23T08:00:00.000Z","小計":6,"７日間平均":3.4},{"日付":"2020-10-24T08:00:00.000Z","小計":4,"７日間平均":3.7},{"日付":"2020-10-25T08:00:00.000Z","小計":5,"７日間平均":4.3},{"日付":"2020-10-26T08:00:00.000Z","小計":3,"７日間平均":4.7},{"日付":"2020-10-27T08:00:00.000Z","小計":9,"７日間平均":5.9},{"日付":"2020-10-28T08:00:00.000Z","小計":15,"７日間平均":6.4},{"日付":"2020-10-29T08:00:00.000Z","小計":31,"７日間平均":10.4},{"日付":"2020-10-30T08:00:00.000Z","小計":12,"７日間平均":11.3},{"日付":"2020-10-31T08:00:00.000Z","小計":13,"７日間平均":12.6},{"日付":"2020-11-01T08:00:00.000Z","小計":5,"７日間平均":12.6},{"日付":"2020-11-02T08:00:00.000Z","小計":0,"７日間平均":12.1},{"日付":"2020-11-03T08:00:00.000Z","小計":12,"７日間平均":12.6},{"日付":"2020-11-04T08:00:00.000Z","小計":6,"７日間平均":11.3},{"日付":"2020-11-05T08:00:00.000Z","小計":6,"７日間平均":7.7},{"日付":"2020-11-06T08:00:00.000Z","小計":8,"７日間平均":7.1},{"日付":"2020-11-07T08:00:00.000Z","小計":9,"７日間平均":6.6},{"日付":"2020-11-08T08:00:00.000Z","小計":6,"７日間平均":6.7},{"日付":"2020-11-09T08:00:00.000Z","小計":2,"７日間平均":7},{"日付":"2020-11-10T08:00:00.000Z","小計":1,"７日間平均":5.4},{"日付":"2020-11-11T08:00:00.000Z","小計":7,"７日間平均":5.6},{"日付":"2020-11-12T08:00:00.000Z","小計":6,"７日間平均":5.6},{"日付":"2020-11-13T08:00:00.000Z","小計":13,"７日間平均":6.3},{"日付":"2020-11-14T08:00:00.000Z","小計":12,"７日間平均":6.7},{"日付":"2020-11-15T08:00:00.000Z","小計":17,"７日間平均":8.3},{"日付":"2020-11-16T08:00:00.000Z","小計":3,"７日間平均":8.4},{"日付":"2020-11-17T08:00:00.000Z","小計":7,"７日間平均":9.3},{"日付":"2020-11-18T08:00:00.000Z","小計":24,"７日間平均":11.7},{"日付":"2020-11-19T08:00:00.000Z","小計":15,"７日間平均":13},{"日付":"2020-11-20T08:00:00.000Z","小計":13,"７日間平均":13},{"日付":"2020-11-21T08:00:00.000Z","小計":27,"７日間平均":15.1},{"日付":"2020-11-22T08:00:00.000Z","小計":13,"７日間平均":14.6},{"日付":"2020-11-23T08:00:00.000Z","小計":10,"７日間平均":15.6},{"日付":"2020-11-24T08:00:00.000Z","小計":7,"７日間平均":15.6},{"日付":"2020-11-25T08:00:00.000Z","小計":15,"７日間平均":14.3},{"日付":"2020-11-26T08:00:00.000Z","小計":14,"７日間平均":14.1},{"日付":"2020-11-27T08:00:00.000Z","小計":24,"７日間平均":15.7},{"日付":"2020-11-28T08:00:00.000Z","小計":15,"７日間平均":14},{"日付":"2020-11-29T08:00:00.000Z","小計":9,"７日間平均":13.4},{"日付":"2020-11-30T08:00:00.000Z","小計":7,"７日間平均":13},{"日付":"2020-12-01T08:00:00.000Z","小計":10,"７日間平均":13.4},{"日付":"2020-12-02T08:00:00.000Z","小計":10,"７日間平均":12.7},{"日付":"2020-12-03T08:00:00.000Z","小計":10,"７日間平均":12.1},{"日付":"2020-12-04T08:00:00.000Z","小計":5,"７日間平均":9.4},{"日付":"2020-12-05T08:00:00.000Z","小計":11,"７日間平均":8.9},{"日付":"2020-12-06T08:00:00.000Z","小計":12,"７日間平均":9.3},{"日付":"2020-12-07T08:00:00.000Z","小計":9,"７日間平均":9.6},{"日付":"2020-12-08T08:00:00.000Z","小計":12,"７日間平均":9.9},{"日付":"2020-12-09T08:00:00.000Z","小計":11,"７日間平均":10},{"日付":"2020-12-10T08:00:00.000Z","小計":13,"７日間平均":10.4},{"日付":"2020-12-11T08:00:00.000Z","小計":16,"７日間平均":12},{"日付":"2020-12-12T08:00:00.000Z","小計":22,"７日間平均":13.6},{"日付":"2020-12-13T08:00:00.000Z","小計":38,"７日間平均":17.3},{"日付":"2020-12-14T08:00:00.000Z","小計":27,"７日間平均":19.9},{"日付":"2020-12-15T08:00:00.000Z","小計":21,"７日間平均":21.1},{"日付":"2020-12-16T08:00:00.000Z","小計":32,"７日間平均":24.1},{"日付":"2020-12-17T08:00:00.000Z","小計":27,"７日間平均":26.1},{"日付":"2020-12-18T08:00:00.000Z","小計":26,"７日間平均":27.6},{"日付":"2020-12-19T08:00:00.000Z","小計":60,"７日間平均":33},{"日付":"2020-12-20T08:00:00.000Z","小計":111,"７日間平均":43.4},{"日付":"2020-12-21T08:00:00.000Z","小計":29,"７日間平均":43.7},{"日付":"2020-12-22T08:00:00.000Z","小計":13,"７日間平均":42.6},{"日付":"2020-12-23T08:00:00.000Z","小計":35,"７日間平均":43},{"日付":"2020-12-24T08:00:00.000Z","小計":27,"７日間平均":43},{"日付":"2020-12-25T08:00:00.000Z","小計":31,"７日間平均":43.7},{"日付":"2020-12-26T08:00:00.000Z","小計":28,"７日間平均":39.1},{"日付":"2020-12-27T08:00:00.000Z","小計":21,"７日間平均":26.3},{"日付":"2020-12-28T08:00:00.000Z","小計":19,"７日間平均":24.9}]}')},423:function(t,e,n){var content=n(472);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("35e6b3b9",content,!0,{sourceMap:!1})},471:function(t,e,n){"use strict";n(423)},472:function(t,e,n){(e=n(16)(!1)).push([t.i,"",""]),t.exports=e},508:function(t,e,n){"use strict";n.r(e);n(36);var r=n(357),o=n(400),l=n(371),d={components:{TimeBarMixedChart:r.default},data:function(){var t=o.data.map((function(t){return t["７日間平均"]}));return{patientsGraph:[Object(l.a)(o.data),t],date:o.date,labels:[this.$t("新規陽性者数"),this.$t("７日間移動平均")]}}},c=(n(471),n(5)),h=n(32),T=n.n(h),f=n(658),component=Object(c.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("client-only",[e("time-bar-mixed-chart",{attrs:{title:this.$t("新規陽性者数"),"title-id":"number-of-confirmed-cases","chart-id":"time-bar-chart-patients","chart-data":this.patientsGraph,"data-labels":this.labels,date:this.date,unit:this.$t("人"),"by-date":!0,url:"http://www.okayama-opendata.jp/opendata/ga130PreAction.action?resourceName=%E6%84%9F%E6%9F%93%E8%80%85%E6%95%B0&keyTitle=d9c4776db7f09fff161953a2aaf03b80a9abad48&title=%E6%96%B0%E5%9E%8B%E3%82%B3%E3%83%AD%E3%83%8A%E3%82%A6%E3%82%A4%E3%83%AB%E3%82%B9%E6%84%9F%E6%9F%93%E7%97%87%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E3%83%87%E3%83%BC%E3%82%BF%EF%BC%88%E5%B2%A1%E5%B1%B1%E7%9C%8C%EF%BC%89&isParam=1&resourceId=0c728c2e-a366-421d-95df-86b6b5ad15fd&licenseTitle=%E3%82%AF%E3%83%AA%E3%82%A8%E3%82%A4%E3%83%86%E3%82%A3%E3%83%96%E3%83%BB%E3%82%B3%E3%83%A2%E3%83%B3%E3%82%BA+%E8%A1%A8%E7%A4%BA&datasetId=e6b3c1d2-2f1f-4735-b36e-e45d36d94761&checkFieldFormat=CSV"}})],1)],1)}),[],!1,null,"744f9a7c",null);e.default=component.exports;T()(component,{TimeBarMixedChart:n(357).default}),T()(component,{VCol:f.a})}}]);