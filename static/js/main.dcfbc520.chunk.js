(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){},33:function(e,t,n){e.exports=n(67)},39:function(e,t,n){},46:function(e,t,n){var a={"./RainbowGeneric_Black.png":47,"./RainbowGeneric_Blue.png":48,"./RainbowGeneric_Brown.png":49,"./RainbowGeneric_Green.png":50,"./RainbowGeneric_Orange.png":51,"./RainbowGeneric_Purple.png":52,"./RainbowGeneric_Red.png":53,"./RainbowGeneric_Yellow.png":54};function r(e){var t=i(e);return n(t)}function i(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=46},47:function(e,t,n){e.exports=n.p+"static/media/RainbowGeneric_Black.40ac4c90.png"},48:function(e,t,n){e.exports=n.p+"static/media/RainbowGeneric_Blue.d8b9181d.png"},49:function(e,t,n){e.exports=n.p+"static/media/RainbowGeneric_Brown.e363ecb8.png"},50:function(e,t,n){e.exports=n.p+"static/media/RainbowGeneric_Green.efa46d48.png"},51:function(e,t,n){e.exports=n.p+"static/media/RainbowGeneric_Orange.f8f0fbd4.png"},52:function(e,t,n){e.exports=n.p+"static/media/RainbowGeneric_Purple.9b6d3012.png"},53:function(e,t,n){e.exports=n.p+"static/media/RainbowGeneric_Red.4a8cab5b.png"},54:function(e,t,n){e.exports=n.p+"static/media/RainbowGeneric_Yellow.f77440e9.png"},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(21),o=n.n(i),c=(n(39),n(9)),s=n(10),l=n(12),u=n(11),d=n(13),p=n(29),m=n.n(p),h=n(19),g=n.n(h),f=n(32),b={getMonth:function(e){return e.toLocaleString("en-us",{month:"long"})},selectFromContext:function(e){return e(this.select(e.keys()))},select:function(e){return e[this.randomWithin(0,e.length-1)]},randomWithin:function(e,t){return e+Math.floor(Math.random()*(t-e)+1)}},w=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).options=["red","blue","yellow","green","orange","purple","brown","black","rbg(58,222,243)","rgb(265,167,198)"],n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(g.a,Object.assign({},this.props,{style:Object(f.a)({},this.props.style,{borderColor:b.select(this.options)})}))}}]),t}(a.Component),y=(n(24),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,{sm:12,md:6},r.a.createElement(w,null,r.a.createElement(g.a.Body,{className:"faq"},r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("b",null,"Question:\xa0")),r.a.createElement("span",null,this.props.question)),r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("b",null,"Answer:\xa0")),r.a.createElement("span",null,this.props.answer)))))}}]),t}(a.Component)),E=n(69),v=n(70),k=n(71),O=n(72),R=n(74),G=n(73),C=n(46),j=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E.a,null,this.renderWelcome(),this.renderTOC(),this.renderDetails(),this.renderRegister(),this.renderDescription(),this.renderFaq(),this.renderContact()))}},{key:"renderWelcome",value:function(){return r.a.createElement(v.a,{className:"show-grid center"},r.a.createElement(k.a,null,r.a.createElement(O.a,null,r.a.createElement("img",{className:"splash",src:b.selectFromContext(C),style:{maxWidth:"90%"},alt:"Rainbow Camp Logo, with the text Rainbow Camp where the 'o' has a pride flag pattern inside"}),r.a.createElement("p",{className:"splash"},"A 5 day faith experience for LGBTQ Youth and Young Adults."))))}},{key:"renderTOC",value:function(){}},{key:"renderDetails",value:function(){return r.a.createElement(v.a,{className:"show-grid center",style:{height:140,marginBottom:25}},r.a.createElement(k.a,{sm:12,md:6},this.renderDates(140)),r.a.createElement(k.a,{sm:12,md:6},this.renderLocation(140)))}},{key:"renderDates",value:function(e){var t=new Date(2019,5,24),n=new Date(2019,5,28),a=new Date;return r.a.createElement(w,{style:{height:e}},r.a.createElement(R.a.Body,{style:{fontSize:36,height:98}},this.renderDateMessage(t,n,a)))}},{key:"renderDateMessage",value:function(e,t,n){return n<t?"".concat(b.getMonth(e)," ").concat(e.getDate()," - ").concat(t.getDate(),", ").concat(e.getFullYear()):"Check back later for ".concat(t.getFullYear()+1)}},{key:"renderLocation",value:function(e){return r.a.createElement(w,{style:{height:e}},r.a.createElement(R.a.Body,null,r.a.createElement("a",{href:"http://opretreat.org"},r.a.createElement("img",{src:"http://opretreat.org/wp-content/uploads/2017/01/cropped-OP-WEb-Logo-68pxhigh.png",alt:"Ocean Park Retreat Center",style:{width:"100%"}}))))}},{key:"renderRegister",value:function(){return r.a.createElement(v.a,{className:"show-grid center"},r.a.createElement(k.a,null,r.a.createElement(G.a,{variant:"primary",style:{fontSize:48},onClick:function(){}},"Registration Coming Soon!")))}},{key:"renderDescription",value:function(){return r.a.createElement(v.a,{className:"show-grid description"},r.a.createElement(k.a,null,r.a.createElement(w,null,r.a.createElement(R.a.Body,{style:{textIndent:35}},r.a.createElement("div",null,"Come experience a safe space where LGBTQ+ youth you can be in community with one another other LGBTQ+ youth, explore your spiritual life, and leave knowing that you are of sacred worth, loved by God, and you are important in the body of Christ."),r.a.createElement("div",null,"Build friendships, learn about one another and yourself, find your place in the world, all while kayaking, wave jumping in the ocean, dancing, singing, creating crafts, testing your archery skills, rock wall climbing, zip lining, worshipping in a community, diving into deep discussions with small groups, and enjoying the beautiful smell of the outdoors.")))))}},{key:"renderFaq",value:function(){return r.a.createElement(v.a,{className:"show-grid equal"},r.a.createElement(y,{question:"Are there minimum age requirements to register for the camp?",answer:"All campers must be between the ages of 12 and 21 years old. For group discussions and sleeping times, campers will be in cabins designated by age."}),r.a.createElement(y,{question:"What are my transportation options for getting to and from the camp?",answer:"You are responsible for getting yourself to camp. If you need a ride, we can help you find a carpool option. If you drive your own vehicle, there is parking available. High school aged drivers will need to turn their keys into leaders for their safety and the keys will be returned at the end of the camp. College aged drivers can turn their keys in for safe keeping or keep them in their posession, but must understand that driving other youth during camp is strictly forbidden."}),r.a.createElement(y,{question:"What should I bring to camp?",answer:"You will be sent a list of items to bring to camp as we get closer to the dates. There will be a camp store with various clothing and items for sale. You can bring cash or a credit RainbowCard to purchase items."}),r.a.createElement(y,{question:"What can't I bring into the camp?",answer:"We advise not bringing expensive electronics as they can get lost, damaged, or possibly stolen, but the main reason we encourage you not to bring them is so that you fully participate in all the group activities."}))}},{key:"renderContact",value:function(){}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,2,1]]]);
//# sourceMappingURL=main.dcfbc520.chunk.js.map