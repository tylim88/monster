(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,function(e,n,t){e.exports=t(17)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(2),c=t.n(r),s=(t(12),t(3)),i=t(4),l=t(5),u=t(6),h=(t(13),t(14),t(15),function(e){return o.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){})))}),m=(t(16),function(e){var n=e.placeholder,t=e.handleChange;return o.a.createElement("input",{className:"search",type:"search",placeholder:n,onChange:t})}),d=function(e){Object(u.a)(t,e);var n=Object(l.a)(t);function t(){var e;return Object(s.a)(this,t),(e=n.call(this)).handleChange=function(n){e.setState({searchField:n.target.value})},e.state={monsters:[],searchField:""},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({monsters:n})}))}},{key:"render",value:function(){var e=this.state,n=e.monsters,t=e.searchField,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null," Monsters Rolodex "),o.a.createElement(m,{placeholder:"Search Monsters",handleChange:this.handleChange}),o.a.createElement(h,{monsters:a}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.127f6d11.chunk.js.map