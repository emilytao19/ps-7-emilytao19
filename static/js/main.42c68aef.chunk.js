(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(34)},27:function(e,t,n){},29:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(6),c=n.n(r),l=(n(27),n(8)),i=n(9),u=n(11),s=n(10),m=n(12),h=(n(29),n(38)),p=n(36),b=n(37),d=n(21),E=n(7),f=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={data:[]},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a("data/sites.csv").then(function(t){e.setState({data:t})})}},{key:"render",value:function(){return console.log(this.state.data),o.a.createElement("div",{className:"container"},"Sites",this.state.data.map(function(e,t){return o.a.createElement(E.f,{sm:"6",key:"project"+t},o.a.createElement(E.b,null,o.a.createElement(E.c,null,o.a.createElement(E.e,null,e.Site),o.a.createElement(E.d,null,e.Description),o.a.createElement("a",{target:"_blank",href:e.Link},o.a.createElement(E.a,null,"Link")))),o.a.createElement("br",null))}))}}]),t}(a.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"Welcome to my website! I hope you enjoy learning more about me.")}}]),t}(a.Component);function y(){return o.a.createElement("div",null,o.a.createElement("h1",null,"About Me!"),o.a.createElement("p",null,"My name is Emily Tao. My hobbies include skiing, running, and hanging out with friends."),o.a.createElement("p",null,"My favorite places to ski are Crystal Mountain, Stevens Pass, Sun Peaks, and Whistler."),o.a.createElement("p",null,"This winter, I hope to ski at least twenty days total."))}var j=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(h.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{to:"/"},"Home"),o.a.createElement(p.a,{to:"/about"},"About"),o.a.createElement(p.a,{to:"/sites"},"Sites"),o.a.createElement(b.a,{path:"/about",component:y}),o.a.createElement(b.a,{path:"/sites",component:f}),o.a.createElement(b.a,{exact:!0,path:"/",component:v}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.42c68aef.chunk.js.map