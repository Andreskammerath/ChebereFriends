(this.webpackJsonpcheberefriends=this.webpackJsonpcheberefriends||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},function(e,t,n){},,function(e,t,n){e.exports=n.p+"static/media/SuperMario256.6c02f15f.ttf"},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),i=n.n(c),o=(n(13),n(3)),s=n(4),l=n(6),h=n(5),u=n(7),d=(n(14),n(15),function(e){return r.a.createElement("div",{className:"tc back-color-cards dib br3 pa2 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/set_set5/bgset_bg1/".concat(e.id,"?size=300x300")}),r.a.createElement("div",null,r.a.createElement("h3",null,e.name),r.a.createElement("p",null,e.email)))}),m=function(e){var t=e.friends,n=t.map((function(e,n){return r.a.createElement(d,{key:t[n].id,id:t[n].id,name:t[n].name,email:t[n].email})}));return r.a.createElement("div",null,n)},f=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search chebere friends",onChange:t}))},p=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"2px solid black",height:"500px"}},e.children)},b=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(h.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={friends:[],searchfield:""},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({friends:t})}))}},{key:"render",value:function(){var e=this,t=this.state.friends.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"MarioF f1"},"Chebere friends"),r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement(p,null,r.a.createElement(m,{friends:t})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(16),n(17);i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.61ef6e80.chunk.js.map