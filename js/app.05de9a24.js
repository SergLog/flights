(function(t){function a(a){for(var n,s,c=a[0],r=a[1],l=a[2],u=0,h=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&h.push(i[s][0]),i[s]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);d&&d(a);while(h.length)h.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],n=!0,c=1;c<e.length;c++){var r=e[c];0!==i[r]&&(n=!1)}n&&(o.splice(a--,1),t=s(s.s=e[0]))}return t}var n={},i={app:0},o=[];function s(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=n,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)s.d(e,n,function(a){return t[a]}.bind(null,n));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=a,c=c.slice();for(var l=0;l<c.length;l++)a(c[l]);var d=r;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0214":function(t,a,e){},"034f":function(t,a,e){"use strict";var n=e("0651"),i=e.n(n);i.a},"0651":function(t,a,e){},"0ca1":function(t,a,e){t.exports=e.p+"img/1.5106e489.png"},"14b4":function(t,a,e){"use strict";var n=e("b35a"),i=e.n(n);i.a},4400:function(t,a,e){"use strict";var n=e("0214"),i=e.n(n);i.a},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"m-0",staticStyle:{color:"#333"},attrs:{id:"app"}},[e("b-container",[e("b-row",[e("b-col",{staticStyle:{"background-color":"rgb(245 245 245)"},attrs:{cols:"12"}},[e("the-header",{staticClass:"mt-2 mb-2"})],1)],1),e("b-row",{staticClass:"mt-3"},[e("b-col",{attrs:{cols:"12"}},[t.location?e("div",[e("tabs",{attrs:{location:t.location,dataLocation:t.dataLocation,Activetab:t.Activetab}})],1):t._e()])],1)],1)],1)},o=[],s=(e("c5f6"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"tabs"}},[e("b-tabs",{attrs:{pills:"",align:"center"}},[e("b-tab",{attrs:{title:"О локации",align:"center"}}),e("b-tab",{attrs:{title:"Сегодня",active:""}},[e("b-alert",{staticClass:"mt-2",attrs:{variant:"secondary",show:"",size:"sm"}},[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.dataLocation.today))])]),e("main-board",{attrs:{type:"today",typeCount:"за день",location:t.location,dataLocation:t.dataLocation}})],1),e("b-tab",{attrs:{title:"Вчера"}},[e("b-alert",{staticClass:"mt-2",attrs:{variant:"secondary",show:""}},[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.dataLocation.yesterday))])]),e("main-board",{attrs:{type:"yesterday",typeCount:"за день",location:t.location,dataLocation:t.dataLocation}})],1),e("b-tab",{attrs:{title:"Месяц"}},[e("b-alert",{staticClass:"mt-2",attrs:{variant:"secondary",show:""}},[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.dataLocation.month))])]),e("main-board",{attrs:{type:"month",typeCount:"за месяц",location:t.location,dataLocation:t.dataLocation}})],1),e("b-tab",{attrs:{title:"Год"}},[e("b-alert",{staticClass:"mt-2",attrs:{variant:"secondary",show:""}},[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.dataLocation.year))])]),e("main-board",{attrs:{type:"year",typeCount:"за год",location:t.location,dataLocation:t.dataLocation}})],1)],1)],1)}),c=[],r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-container",[e("b-row",[e("b-col",{attrs:{cols:"12",sm:"12",md:"4"}},[e("aircraftCount",{staticClass:"mt-2 mb-2",attrs:{location:t.location,type:t.type,typeCount:t.typeCount,dataLocation:t.dataLocation}})],1),e("b-col",{attrs:{cols:"12",sm:"6",md:"4"}},[e("averageLatitude",{staticClass:"mt-2 mb-2",attrs:{type:t.type,typeCount:t.typeCount,dataLocation:t.dataLocation}})],1),e("b-col",{attrs:{cols:"12",sm:"6",md:"4"}},[e("average-speed",{staticClass:"mt-2 mb-2",attrs:{type:t.type,typeCount:t.typeCount,dataLocation:t.dataLocation}})],1)],1),e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("aircraftCountPeriods",{attrs:{type:t.type,typeCount:t.typeCount,dataLocation:t.dataLocation}})],1)],1)],1)],1)},l=[],d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"border rounded",staticStyle:{height:"80px"}},[e("div",[t._v("Количество самолетов")]),e("div"),e("div",{class:t.classCnt,staticStyle:{"font-size":"40px",color:"red"}},[t._v("\n    "+t._s(t.cnt)+"\n    "),e("span",{staticStyle:{"font-size":"20px",color:"red"}},[t._v(t._s(t.typeCount))])])])},u=[],h={name:"aircraftCount",props:{type:String,typeCount:String,dataLocation:{},location:Number},data:function(){return{cnt:Number,classSpinner:"",classCnt:"d-none"}},watch:{dataLocation:function(){this.classSpinner=this.dataLocation.classSpinner,this.classCnt=this.dataLocation.classCnt,"today"==this.type&&(this.cnt=this.dataLocation.cntToday),"yesterday"==this.type&&(this.cnt=this.dataLocation.cntYesterday),"month"==this.type&&(this.cnt=this.dataLocation.cntMonth),"year"==this.type&&(this.cnt=this.dataLocation.cntYear)}}},p=h,y=e("2877"),b=Object(y["a"])(p,d,u,!1,null,"69ba8c19",null),m=b.exports,v=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"border rounded",staticStyle:{height:"80px"}},[e("div",[e("div",{staticClass:"pt-3"},[t._v("Средняя высота")]),e("div"),e("div",{class:t.classCnt,staticStyle:{"font-size":"20px",color:"red"}},[t._v("\n        "+t._s(t.averLat)+" м\n      ")])])])])},f=[],L={name:"averageLatitude",props:{type:String,dataLocation:{}},data:function(){return{averLat:Number,classSpinner:"",classCnt:"d-none"}},watch:{dataLocation:function(){this.classSpinner=this.dataLocation.classSpinner,this.classCnt=this.dataLocation.classCnt,"today"==this.type&&(this.averLat=this.dataLocation.altitudeToday),"yesterday"==this.type&&(this.averLat=this.dataLocation.altitudeYesterday),"month"==this.type&&(this.averLat=this.dataLocation.altitudeMonth),"year"==this.type&&(this.averLat=this.dataLocation.altitudeYear)}}},C=L,g=Object(y["a"])(C,v,f,!1,null,"8c343292",null),_=g.exports,S=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"border rounded",staticStyle:{height:"80px"}},[e("div",{staticClass:"pt-3"},[t._v("Средняя скорость")]),e("div"),e("div",{class:t.classCnt,staticStyle:{"font-size":"20px",color:"red"}},[t._v("\n      "+t._s(t.averVelocity)+" км/ч\n    ")])])])},T=[],x={name:"averageSpeed",props:{type:String,dataLocation:{}},data:function(){return{averVelocity:Number,classSpinner:"",classCnt:"d-none"}},watch:{dataLocation:function(){this.classSpinner=this.dataLocation.classSpinner,this.classCnt=this.dataLocation.classCnt,"today"==this.type&&(this.averVelocity=this.dataLocation.velocityToday),"yesterday"==this.type&&(this.averVelocity=this.dataLocation.velocityYesterday),"month"==this.type&&(this.averVelocity=this.dataLocation.velocityMonth),"year"==this.type&&(this.averVelocity=this.dataLocation.velocityYear)}}},w=x,B=Object(y["a"])(w,S,T,!1,null,"4b1ddd78",null),j=B.exports,O=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"m-2 border rounded"},[t._v("\n  "+t._s(t.dataLocation.cnt1ByTimeToday1)+"\n  "),e("div",{staticClass:"mb-3"},[t._v("Распределение по времени")]),e("b-container",[e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("div",[e("b-button",{attrs:{variant:"light"}},[t._v("\n            C 00 до 07 - \n            "),e("b-badge",{attrs:{variant:"danger"}},[t._v(t._s(t.time1))])],1)],1)]),e("b-col",{attrs:{cols:"12"}},[e("div",{staticClass:"text-center mt-2"},[e("b-button",{attrs:{variant:"light"}},[t._v("\n            C 07 до 13 - \n            "),e("b-badge",{attrs:{variant:"warning"}},[t._v(t._s(t.time2))])],1)],1)]),e("b-col",{attrs:{cols:"12"}},[e("div",{staticClass:"text-center mt-2"},[e("b-button",{attrs:{variant:"light"}},[t._v("\n            C 13 до 15 - \n            "),e("b-badge",{attrs:{variant:"danger"}},[t._v(t._s(t.time3))])],1)],1)]),e("b-col",{attrs:{cols:"12"}},[e("div",{staticClass:"text-center mt-2"},[e("b-button",{attrs:{variant:"light"}},[t._v("\n            C 15 до 21 - \n            "),e("b-badge",{attrs:{variant:"warning"}},[t._v(t._s(t.time4))])],1)],1)]),e("b-col",{attrs:{cols:"12"}},[e("div",{staticClass:"text-center mt-2 mb-3"},[e("b-button",{attrs:{variant:"light"}},[t._v("\n            C 21 до 00 - \n            "),e("b-badge",{attrs:{variant:"danger"}},[t._v(t._s(t.time5))])],1)],1)])],1)],1)],1)},Y=[],M={name:"aircraftCountPeriods",props:{type:String,dataLocation:{}},data:function(){return{time1:0,time2:0,time3:0,time4:0,time5:0}},watch:{dataLocation:function(){"today"==this.type&&(this.time1=this.dataLocation.cntByTimeToday1,this.time2=this.dataLocation.cntByTimeToday2,this.time3=this.dataLocation.cntByTimeToday3,this.time4=this.dataLocation.cntByTimeToday4,this.time5=this.dataLocation.cntByTimeToday5),"yesterday"==this.type&&(this.time1=this.dataLocation.cntByTimeYesterday1,this.time2=this.dataLocation.cntByTimeYesterday2,this.time3=this.dataLocation.cntByTimeYesterday3,this.time4=this.dataLocation.cntByTimeYesterday4,this.time5=this.dataLocation.cntByTimeYesterday5),"month"==this.type&&(this.time1=this.dataLocation.cntByTimeMonth1,this.time2=this.dataLocation.cntByTimeMonth2,this.time3=this.dataLocation.cntByTimeMonth3,this.time4=this.dataLocation.cntByTimeMonth4,this.time5=this.dataLocation.cntByTimeMonth5),"year"==this.type&&(this.time1=this.dataLocation.cntByTimeYear1,this.time2=this.dataLocation.cntByTimeYear2,this.time3=this.dataLocation.cntByTimeYear3,this.time4=this.dataLocation.cntByTimeYear4,this.time5=this.dataLocation.cntByTimeYear5)}}},P=M,N=Object(y["a"])(P,O,Y,!1,null,"594eb0f1",null),$=N.exports,k={name:"mainBoard",props:{val:String,type:String,typeCount:String,obj:{},location:Number,dataLocation:{}},components:{aircraftCount:m,averageLatitude:_,averageSpeed:j,aircraftCountPeriods:$},data:function(){return{}},created:function(){}},E=k,V=Object(y["a"])(E,r,l,!1,null,"787d8814",null),z=V.exports,A={name:"tabs",components:{mainBoard:z},props:{location:Number,dataLocation:Object,aboutLocation:Number},data:function(){return{loc:""}}},D=A,H=(e("4400"),Object(y["a"])(D,s,c,!1,null,null,null)),J=H.exports,I=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("div",{staticStyle:{display:"inline-block"}},[n("img",{staticStyle:{"max-height":"30px"},attrs:{src:e("0ca1")}})]),n("div",{staticStyle:{display:"inline-block","vertical-align":"bottom"},attrs:{calss:"p-0 m-0"}},[n("b",{staticClass:"ml-2"},[n("h6",{staticStyle:{display:"inline"}},[t._v("\n            Полеты над жилыми домами Лобни\n          ")])])])]),n("b-col",{attrs:{cols:"12"}})],1)],1)},q=[],F={name:"TheHeader",props:{msg:String}},G=F,K=(e("14b4"),Object(y["a"])(G,I,q,!1,null,"2b7c7125",null)),Q=K.exports,R=e("bc3a"),U=e.n(R),W={name:"app",components:{tabs:J,TheHeader:Q},data:function(){return{componentName:"tabs",showAboutSite:!0,location:3,classSpinner:"",dataLocation:{},obj:{},aboutLocation:Number,Activetab:1,options:[{value:null,text:"Выберете локацию"},{value:3,text:"Город Лобня, Шереметьево"},{value:5,text:"Район Сходня (Химки), Шереметьево"},{value:4,text:"Город Видное, Домодедово"},{value:9,text:"Коммунарка, Внуково"}],objClasses:{classSpinner:"d-none",classCnt:""}}},created:function(){this.loadData()},methods:{loadData:function(){var t=this;U.a.get("https://u1164678.plsk.regruhosting.ru/api/flights/3").then((function(a){t.dataLocation=a.data[0]})).catch((function(a){null!=t.location&&alert(a+"Ошибка в получении данных! Попробуйте позже.")}))}}},X=W,Z=(e("034f"),Object(y["a"])(X,i,o,!1,null,null,null)),tt=Z.exports,at=e("5f5b"),et=(e("ab8b"),e("2dd8"),e("5c96")),nt=(e("0fae"),e("dccd")),it=e.n(nt),ot=e("4897"),st=e.n(ot);n["default"].use(at["a"]),n["default"].use(et["DatePicker"]),n["default"].use(et["Icon"]),st.a.use(it.a),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(tt)}}).$mount("#app")},b35a:function(t,a,e){}});
//# sourceMappingURL=app.05de9a24.js.map
