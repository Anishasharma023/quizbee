(this.webpackJsonpquizbee=this.webpackJsonpquizbee||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(0),s=o(1),r=o.n(s),a=o(3),i=o.n(a),c=(o(14),o(4)),u=o(5),l=o(8),h=o(6),d=(o(15),[{question:"What does PHP stand for?",answer:["PHP Hypertex Processor","PHP Hyper Markup Processor","PHP Hyper Markup Preprocessor","PHP Hypertext Preprocessor"],correct:"PHP Hypertext Preprocessor",questionId:"001"},{question:"Who is known as the father of PHP?",answer:["Rasmus Lerdorf","Willam Makepiece","Drek Kolkevi","List Barely"],correct:"Rasmus Lerdorf",questionId:"002"},{question:"Which of the following method sends input to a script via a URL?",answer:["Get","Post","Both","None"],correct:"Both",questionId:"003"},{question:"What is ReactJS?",answer:["Server-side Framework","User-interface framework","Both","None"],correct:"Both",questionId:"004"},{question:"How can you access the state of a component from inside of a member function?",answer:["this.getState()","this.prototype.Value","this.state","this.values"],correct:"this.state",questionId:"005"},{question:"Which of the following API is a MUST for every ReactJS component?",answer:["getInitialState","render","renderComponent","None"],correct:"renderComponent",questionId:"006"},{question:"At the highest level, React components have lifecycle events that fall into",answer:["Initialization","State/Property Updates","Destruction","All of these"],correct:"All of these",questionId:"007"},{question:"React is a ________",answer:["Javascript library","Javascript framework","Both of above","None of above"],correct:"Javascript library",questionId:"008"},{question:"ReactJS uses _____ to increase performance",answer:["Virtual DOM","Original DOM","Both of above","None of above"],correct:"Virtual DOM",questionId:"009"},{question:"props in react can________",answer:["Be changed inside the component","Not be changed in the component","Be changed in side other component","None of above"],correct:"Not be changed in the component",questionId:"010"},{question:"componentDidMount lifecycle method is called when____",answer:["Component is created for the first time","Component is updated","Both of above","None of above"],correct:"Component is created for the first time",questionId:"011"},{question:"Everything in react is __________",answer:["Module","Component","Package","Class"],correct:"Component",questionId:"012"},{question:"How many elements does a react component returns?",answer:["1","0","Multiple elements with one root element","None of above"],correct:"Multiple elements with one root element",questionId:"013"},{question:"In React, Babel is a __________",answer:["interpreter","compiler","transpiler","None of above"],correct:"compiler",questionId:"014"},{question:"React Js is developed by",answer:["Google","Microsoft","Facebook","None of above"],correct:"Facebook",questionId:"015"},{question:"If JSX is used in React Js components then which of the following statements are true?",answer:["JSX is compiled into HTML","JSX is compiled in calls of React.createElement","Both of above","None of above"],correct:"JSX is compiled in calls of React.createElement",questionId:"016"},{question:"To update state in react forcefully, which method is used",answer:["setState","forceUpdate","Both of above","None of above"],correct:"setState",questionId:"017"}]),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return Promise.resolve(d.sort((function(){return.5-Math.random()})).slice(0,e))},f=o(7),m=(o(16),function(e){var t=e.question,o=e.options,r=e.selected,a=Object(s.useState)(o),i=Object(f.a)(a,2),c=i[0],u=i[1];return Object(n.jsxs)("div",{className:"questionBox",children:[Object(n.jsx)("div",{className:"question",children:t}),Object(n.jsx)("div",{children:"\xa0"}),c.map((function(e,t){return Object(n.jsx)("button",{className:"answerbtn",onClick:function(){u([e]),r(e)},children:e},t)}))]})}),b=(o(17),function(e){var t=e.score,o=e.playagain;return Object(n.jsxs)("div",{className:"scoreboard",children:[Object(n.jsxs)("div",{className:"score",children:["you scored ",t," / 5."]}),Object(n.jsx)("button",{className:"playbtn",onClick:o,children:"Play Again!"})]})}),v=function(e){Object(l.a)(o,e);var t=Object(h.a)(o);function o(){var e;Object(c.a)(this,o);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={questionBank:[],score:0,responses:0},e.getQuestion=function(){p().then((function(t){e.setState({questionBank:t})}))},e.computeanswer=function(t,o){t===o&&e.setState({score:e.state.score+1}),e.setState({responses:e.state.responses<5?e.state.responses+1:5})},e.playagain=function(){e.getQuestion(),e.setState({score:0,responses:0})},e}return Object(u.a)(o,[{key:"componentDidMount",value:function(){this.getQuestion()}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{className:"heading",children:"QUIZBEE"}),this.state.questionBank.length>0&&this.state.responses<5&&this.state.questionBank.map((function(t){var o=t.question,s=t.answer,r=t.correct,a=t.questionId;return Object(n.jsx)(m,{question:o,options:s,selected:function(t){return e.computeanswer(t,r)}},a)})),5===this.state.responses?Object(n.jsx)(b,{score:this.state.score,playagain:this.playagain}):null]})}}]),o}(r.a.Component),q=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,19)).then((function(t){var o=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;o(e),n(e),s(e),r(e),a(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),q()}],[[18,1,2]]]);
//# sourceMappingURL=main.244c0bbf.chunk.js.map