(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{360:function(t,e,n){var content=n(369);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("b35a52c0",content,!0,{sourceMap:!1})},361:function(t,e,n){"use strict";n.r(e);var o=n(0).a.extend({props:{iconPath:{type:String,required:!1,default:""}}}),r=(n(368),n(5)),l=n(32),c=n.n(l),d=n(342),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.iconPath?e("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[this._v("\n      "+this._s(this.iconPath)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"d5283664",null);e.default=component.exports;c()(component,{VIcon:d.a})},368:function(t,e,n){"use strict";n(360)},369:function(t,e,n){(e=n(16)(!1)).push([t.i,".header[data-v-d5283664]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-d5283664]{font-size:3rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:400;margin:0 .5em 0 0}@media screen and (max-width:600px){.pageTitle[data-v-d5283664]{font-size:2rem}}",""]),t.exports=e},380:function(t,e){t.exports=function(component,t){var e="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(e.directives=component.exports.options.directives),e.directives=e.directives||{},t)e.directives[i]=e.directives[i]||t[i]}},421:function(t,e,n){var content=n(460);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("e82c3dae",content,!0,{sourceMap:!1})},422:function(t,e,n){var content=n(462);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("0ffcf5da",content,!0,{sourceMap:!1})},428:function(t,e,n){"use strict";n.r(e);var o=n(37),r=n(0),l=n(46),c=n(122),d=r.a.extend({components:{AppLink:l.default},props:{items:{type:Array,required:!0},isEmergency:{type:Boolean,required:!1,default:!1}},data:function(){return{mdiInformation:o.j}},methods:{formattedDate:function(t){return Object(c.a)(t)},formattedDateForDisplay:function(t){return this.$d(new Date(t),"date")}}}),f=(n(461),n(5)),h=n(32),m=n.n(h),x=n(342),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"WhatsNew"},[n("div",{staticClass:"WhatsNew-heading"},[n("h3",{staticClass:"WhatsNew-title"},[n("v-icon",{staticClass:"WhatsNew-title-icon",attrs:{size:"2.4rem"}},[t._v("\n        "+t._s(t.mdiInformation)+"\n      ")]),t._v("\n      "+t._s(t.$t("最新のお知らせ"))+"\n    ")],1),t._v(" "),n("div",{staticClass:"WhatsNew-linkGroup"},[t.isEmergency?n("lazy-link-to-information-about-emergency-measure"):t._e()],1)]),t._v(" "),n("ul",{staticClass:"WhatsNew-list"},t._l(t.items,(function(e,i){return n("li",{key:i,staticClass:"WhatsNew-list-item"},[n("app-link",{staticClass:"WhatsNew-list-item-anchor",attrs:{to:e.url}},[n("time",{staticClass:"WhatsNew-list-item-anchor-time px-2",attrs:{datetime:t.formattedDate(e.date)}},[t._v("\n          "+t._s(t.formattedDateForDisplay(e.date))+"\n        ")]),t._v(" "),n("span",{staticClass:"WhatsNew-list-item-anchor-link"},[t._v("\n          "+t._s(e.text)+"\n        ")])])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;m()(component,{LazyLinkToInformationAboutEmergencyMeasure:function(){return n.e(19).then(n.bind(null,666)).then((function(t){return t.default||t}))},AppLink:n(46).default}),m()(component,{VIcon:x.a})},429:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(46),l=o.a.extend({components:{AppLink:r.default},props:{url:{type:String,default:""},text:{type:String,default:""},btnText:{type:String,default:""}}}),c=(n(459),n(5)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"StaticInfo"},[n("span",[t._v(t._s(t.text))]),t._v(" "),t.btnText?n("div",{staticClass:"StaticInfo-Button"},[n("app-link",{staticClass:"StaticInfo",attrs:{to:t.url}},[t._v("\n      "+t._s(t.btnText)+"\n    ")])],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppLink:n(46).default})},459:function(t,e,n){"use strict";n(421)},460:function(t,e,n){(e=n(16)(!1)).push([t.i,".StaticInfo{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;background-color:#fff;border:1px solid #d9d9d9;box-shadow:0 0 2px rgba(0,0,0,.15);border-radius:4px;padding:.5em 1em;font-size:1.4rem}.StaticInfo-Button{flex:1 0 auto;text-align:right}.StaticInfo-Button>a{text-decoration:none;color:#e813a4!important;padding:4px 8px;font-size:1.4rem;display:inline-block;border-radius:4px;background-color:#fff;border:1px solid #e813a4;color:#e813a4;cursor:pointer}.StaticInfo-Button>a:hover{background-color:#e813a4;color:#fff}.StaticInfo-Button>a:hover,.StaticInfo-Button>a:hover>i{color:#fff!important}@media screen and (max-width:600px){.StaticInfo-Button{margin-top:4px}}",""]),t.exports=e},461:function(t,e,n){"use strict";n(422)},462:function(t,e,n){(e=n(16)(!1)).push([t.i,".WhatsNew{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;padding:10px;margin-bottom:20px}.WhatsNew .WhatsNew-heading{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;margin-bottom:12px}.WhatsNew .WhatsNew-heading .WhatsNew-title{display:flex;align-items:center;font-size:1.9rem;color:#4d4d4d;font-weight:700}.WhatsNew .WhatsNew-heading .WhatsNew-title-icon{margin:3px}.WhatsNew .WhatsNew-heading .WhatsNew-linkGroup{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end}@media screen and (max-width:768px){.WhatsNew .WhatsNew-heading .WhatsNew-linkGroup{justify-content:flex-start}}.WhatsNew .WhatsNew-list{padding-left:0;list-style-type:none}.WhatsNew .WhatsNew-list-item-anchor{text-decoration:none;margin:5px;font-size:1.4rem}@media screen and (max-width:768px){.WhatsNew .WhatsNew-list-item-anchor{display:flex;flex-wrap:wrap}}.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 90px;color:#333}@media screen and (max-width:768px){.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 100%}}.WhatsNew .WhatsNew-list-item-anchor-link{flex:0 1 auto;font-size:1.4rem;color:#006ca8!important;text-decoration:none}.WhatsNew .WhatsNew-list-item-anchor-link:hover{text-decoration:underline}@media screen and (max-width:768px){.WhatsNew .WhatsNew-list-item-anchor-link{padding-left:8px}}",""]),t.exports=e},463:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2021/01/12","url":"https://8092-okayama.jp/","text":"「岡山発見かるた」読み札募集中"},{"date":"2021/01/08","url":"https://www.pref.okayama.jp/uploaded/attachment/285441.pdf","text":"県民の皆さまへ知事からのメッセージ（テキスト版）"},{"date":"2021/01/08","url":"https://youtu.be/6lLdljE1p0Y","text":"県民の皆さまへ知事からのメッセージ（動画）"}]}')},481:function(t,e,n){"use strict";var o=n(22);var r={inserted:function(t,e){var n=(e.modifiers||{}).self,r=void 0!==n&&n,l=e.value,c="object"===Object(o.a)(l)&&l.options||{passive:!0},d="function"==typeof l||"handleEvent"in l?l:l.handler,f=r?t:e.arg?document.querySelector(e.arg):window;f&&(f.addEventListener("scroll",d,c),t._onScroll={handler:d,options:c,target:r?void 0:f})},unbind:function(t){if(t._onScroll){var e=t._onScroll,n=e.handler,o=e.options,r=e.target;(void 0===r?t:r).removeEventListener("scroll",n,o),delete t._onScroll}}};e.a=r},494:function(t,e,n){var content=n(629);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("e9bdbc2a",content,!0,{sourceMap:!1})},495:function(t){t.exports=JSON.parse('{"step":3,"changed":"2020-06-12T00:00:00+09:00","alert":true,"description":{"@ja":"「医療非常事態宣言」は、県内の医療体制が逼迫していることから医療崩壊を防ぎ県民の命を守るために岡山県が発令したものです。手洗いの徹底とマスクの着用、ソーシャルディスタンスの確保、「３つの密」の危険がある場所には十分注意することなど、「新しい日常」の徹底にご協力をお願いいたします。","@en":""}}')},496:function(t,e,n){var content=n(631);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("d5638c86",content,!0,{sourceMap:!1})},497:function(t,e,n){var content=n(634);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("94fa5b46",content,!0,{sourceMap:!1})},502:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(5),l=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",this._g({attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},this.$listeners),[e("path",{attrs:{d:"M12 7.5c.69 0 1.27.23 1.76.7s.74 1.07.74 1.8c0 1.05-.5 1.81-1.5 2.28V21h-2v-8.72c-1-.47-1.5-1.23-1.5-2.28 0-.73.26-1.33.74-1.8s1.07-.7 1.76-.7zm4.69-2.2c1.25 1.25 1.92 2.81 2.01 4.7 0 1.8-.67 3.38-2.01 4.72L15.5 13.5c1-.91 1.5-2.08 1.5-3.5 0-1.33-.5-2.5-1.5-3.5l1.19-1.2zM6.09 4.08C4.5 5.67 3.7 7.64 3.7 10s.8 4.3 2.39 5.89l-1.17 1.22C3 15.08 2 12.7 2 10s1-5.06 2.92-7.09l1.17 1.17zm12.99-1.17C21 4.94 22 7.3 22 10c0 2.8-1 5.17-2.92 7.11l-1.17-1.22C19.5 14.3 20.3 12.33 20.3 10c0-2.33-.8-4.33-2.39-5.92l1.17-1.17zM7.31 5.3L8.5 6.5C7.5 7.42 7 8.58 7 10c0 1.33.5 2.5 1.5 3.5l-1.19 1.22C5.97 13.38 5.3 11.8 5.3 10c0-1.8.67-3.36 2.01-4.7z",fill:"#000"}})])}),[],!1,null,null,null).exports,c=o.a.extend({components:{AntennaIcon:l}}),d=(n(628),Object(r.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"linkButton"},[e("antenna-icon",{staticClass:"svgIcon",attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{staticClass:"text"},[this._v("\n    "+this._s(this.$t("医療非常事態宣言発令中"))+"\n  ")])],1)}),[],!1,null,"68dca7b8",null));e.default=d.exports},523:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(502),l=n(495),c=o.a.extend({components:{ActiveTokyoAlert:r.default},data:function(){return{tokyoAlert:l}}}),d=(n(630),n(5)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"TokyoAlert"},[n("div",{staticClass:"TokyoAlert-heading"},[n("h3",{staticClass:"TokyoAlert-title"},[t._v("\n      "+t._s(t.$t("医療非常事態宣言"))+"\n    ")]),t._v(" "),n("div",{staticClass:"TokyoAlert-link"},[n("active-tokyo-alert")],1)]),t._v(" "),n("div",{staticClass:"TokyoAlert-description"},[["ja","ja-basic"].includes(t.$i18n.locale)?n("p",[t._v("\n      "+t._s(t.tokyoAlert.description["@ja"])+"\n    ")]):n("p",[t._v(t._s(t.tokyoAlert.description["@en"]))])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ActiveTokyoAlert:n(502).default})},628:function(t,e,n){"use strict";n(494)},629:function(t,e,n){(e=n(16)(!1)).push([t.i,".linkButton[data-v-68dca7b8]{background-color:#ad2121;border:2px solid #ad2121;color:#fff;border-radius:3em;padding:4px 8px;margin-right:8px;display:inline-flex;font-weight:700;font-size:1.4rem}.linkButton .svgIcon[data-v-68dca7b8] path{fill:#fff}.linkButton[data-v-68dca7b8]:hover{background-color:#fff;color:#ad2121}.linkButton:hover .svgIcon[data-v-68dca7b8] path{fill:#ad2121}.linkButton .text[data-v-68dca7b8]{margin:0 4px}@media screen and (max-width:768px){.linkButton[data-v-68dca7b8]{margin-top:8px}}",""]),t.exports=e},630:function(t,e,n){"use strict";n(496)},631:function(t,e,n){(e=n(16)(!1)).push([t.i,".TokyoAlert{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;padding:10px;margin-bottom:20px}.TokyoAlert .TokyoAlert-heading{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;margin-bottom:12px}.TokyoAlert .TokyoAlert-heading .TokyoAlert-title{display:flex;align-items:center;padding:12px;font-size:1.9rem;color:#4d4d4d;font-weight:700}.TokyoAlert .TokyoAlert-heading .TokyoAlert-link{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding-left:12px}@media screen and (max-width:768px){.TokyoAlert .TokyoAlert-heading .TokyoAlert-link{justify-content:flex-start}}.TokyoAlert .TokyoAlert-description{padding:12px;font-size:1.4rem}",""]),t.exports=e},632:function(t){t.exports=JSON.parse('{"date":"2021/01/12 13:24"}')},633:function(t,e,n){"use strict";n(497)},634:function(t,e,n){(e=n(16)(!1)).push([t.i,".MainPage .Header[data-v-ac062fa0]{display:flex;flex-wrap:wrap;align-items:flex-end}@media screen and (max-width:600px){.MainPage .Header[data-v-ac062fa0]{flex-direction:column;align-items:baseline}}.MainPage .UpdatedAt[data-v-ac062fa0]{font-size:1.4rem;color:#707070;margin-bottom:.2rem}.MainPage .Annotation[data-v-ac062fa0]{font-size:1.2rem;color:#707070}@media screen and (min-width:601px){.MainPage .Annotation[data-v-ac062fa0]{margin:0 0 0 auto}}",""]),t.exports=e},648:function(t,e,n){"use strict";n.r(e);var o=n(37),r=n(0),l=n(361),c=n(429),d=n(523),f=n(428),h=n(632),m=n(463),x=n(495),v=n(122),w=r.a.extend({components:{PageHeader:l.default,WhatsNew:f.default,StaticInfo:c.default,TokyoAlertCard:d.default},data:function(){var t=h.date;return{Data:h,TokyoAlert:x,headerItem:{iconPath:o.d,title:this.$t("県内の最新感染動向")},lastUpdate:t,newsItems:m.newsItems,showStaticInfo:!1}},computed:{updatedAt:function(){return Object(v.c)(this.$data.lastUpdate)},formattedDateForDisplay:function(){return"".concat(this.$d(new Date(this.$data.lastUpdate),"dateTime")," JST")}},methods:{onScroll:function(){this.showStaticInfo=!1}},head:function(){return{title:this.$t("県内の最新感染動向")}}}),y=(n(633),n(5)),_=n(380),k=n.n(_),N=n(481),component=Object(y.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],staticClass:"MainPage"},[n("div",{staticClass:"Header mb-3"},[n("client-only",[n("page-header",{attrs:{"icon-path":t.headerItem.iconPath}},[t._v("\n        "+t._s(t.headerItem.title)+"\n      ")])],1),t._v(" "),n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新")))]),t._v(" "),n("time",{attrs:{datetime:t.updatedAt}},[t._v(t._s(t.formattedDateForDisplay))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("注釈")))])])],1),t._v(" "),n("whats-new",{staticClass:"mb-4",attrs:{items:t.newsItems,"is-emergency":!1}}),t._v(" "),n("client-only",[t.TokyoAlert.alert?n("tokyo-alert-card"):t._e()],1),t._v(" "),n("static-info",{staticClass:"mb-4",attrs:{url:"/flow",text:t.$t("自分や家族の症状に不安や心配があればまずは電話相談をどうぞ"),"btn-text":t.$t("相談の手順を見る")}})],1)}),[],!1,null,"ac062fa0",null);e.default=component.exports;installComponents(component,{PageHeader:n(361).default,WhatsNew:n(428).default,TokyoAlertCard:n(523).default,StaticInfo:n(429).default}),k()(component,{Scroll:N.a})},663:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{showCardsTab:!1}},methods:{onScroll:function(){this.showCardsTab=!0}}},r=n(5),l=n(380),c=n.n(l),d=n(481),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"scroll",rawName:"v-scroll",value:this.onScroll,expression:"onScroll"}]},[e("site-top-upper"),this._v(" "),e("lazy-cards-tab")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SiteTopUpper:n(648).default,LazyCardsTab:function(){return n.e(18).then(n.bind(null,664)).then((function(t){return t.default||t}))}}),c()(component,{Scroll:d.a})}}]);