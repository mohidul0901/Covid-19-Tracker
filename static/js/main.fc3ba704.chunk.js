(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{11:function(e,t,a){e.exports={container:"Cards_container__1hcUH",card:"Cards_card__lfh6k",infected:"Cards_infected__1Dnrc",recovered:"Cards_recovered__1DHO0",deaths:"Cards_deaths__1uWn1",cardheading:"Cards_cardheading__1NeaQ"}},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(70),o=a.n(c),u=a(5),s=a.n(u),i=a(10),d=a(71),l=a(72),m=a(81),p=a(80),f=a(73),v=a.n(f),h=a(11),b=a.n(h),g=a(30),E=a.n(g),y=a(225),_=a(229),C=a(226),x=a(227),w=a(31),O=a.n(w),k=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:b.a.container},r.a.createElement(y.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(y.a,{item:!0,component:_.a,xs:12,md:3,className:E()(b.a.card,b.a.infected)},r.a.createElement(C.a,null,r.a.createElement(x.a,{color:"textSecondary",gutterBottom:!0},r.a.createElement("p",{className:b.a.cardheading},"Infected")),r.a.createElement(x.a,{varaint:"h5"},r.a.createElement(O.a,{start:0,end:a.value,duration:2,seperator:","})),r.a.createElement(x.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(x.a,{variant:"body2"},"Number of confirmed cases of Covid-19"))),r.a.createElement(y.a,{item:!0,component:_.a,xs:12,md:3,className:E()(b.a.card,b.a.recovered)},r.a.createElement(C.a,null,r.a.createElement(x.a,{color:"textSecondary",gutterBottom:!0},r.a.createElement("p",{className:b.a.cardheading}," Recovered ")),r.a.createElement(x.a,{varaint:"h5"},r.a.createElement(O.a,{start:0,end:n.value,duration:2,seperator:","})),r.a.createElement(x.a,{color:"textSecondary"},new Date(o).toDateString(),"v"),r.a.createElement(x.a,{variant:"body2"},"Number of recovered from Covid-19"))),r.a.createElement(y.a,{item:!0,component:_.a,xs:12,md:3,className:E()(b.a.card,b.a.deaths)},r.a.createElement(C.a,null,r.a.createElement(x.a,{color:"textSecondary",gutterBottom:!0},r.a.createElement("p",{className:b.a.cardheading},"Deaths")),r.a.createElement(x.a,{varaint:"h5"},r.a.createElement(O.a,{start:0,end:c.value,duration:2,seperator:","})),r.a.createElement(x.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(x.a,{variant:"body2"},"Number of Deaths caused by Covid-19"))))):"loading...."},j=a(29),D=a(44),N=a(32),S=a.n(N),A="https://covid19.mathdro.id/api",B=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=A,t&&(a="".concat(A,"/countries/").concat(t)),e.prev=2,e.next=5,S.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(A,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,date:n}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(A,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),P=a(78),H=a.n(P),J=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,d=Object(n.useState)({}),l=Object(j.a)(d,2),m=l[0],p=l[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=a?r.a.createElement(D.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null,v=m[0]?r.a.createElement(D.Line,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:H.a.container},u?f:v)},R=a(230),V=a(228),W=a(79),q=a.n(W),z=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(j.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,U();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(R.a,{className:q.a.formControl},r.a.createElement(V.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},G=a(33),L=a.n(G),M=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:L.a.container},r.a.createElement("img",{className:L.a.headingimage,src:v.a,alt:"COVID-19"}),r.a.createElement("h1",{className:L.a.heading},"Covid-19 Tracker"),r.a.createElement(k,{data:t}),r.a.createElement(z,{handleCountryChange:this.handleCountryChange}),r.a.createElement(J,{data:t,country:a}))}}]),a}(n.Component);o.a.render(r.a.createElement(M,null),document.getElementById("root"))},33:function(e,t,a){e.exports={container:"App_container__2SP1t",heading:"App_heading__2lbOA",headingimage:"App_headingimage__1q9x9"}},73:function(e,t,a){e.exports=a.p+"static/media/image.572c50c6.png"},78:function(e,t,a){e.exports={container:"Chart_container__3sSzC"}},79:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__1WDo0"}},84:function(e,t,a){e.exports=a(207)}},[[84,1,2]]]);
//# sourceMappingURL=main.fc3ba704.chunk.js.map