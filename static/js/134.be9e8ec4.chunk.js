(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[134],{298:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r="MovieList_movieList__uFrOZ",i="MovieList_movieElement__lg+-Q",o="MovieList_movieLink__kzavH",u=n(689),c=n(87),a=n(184),s=function(e){var t=e.movies,n=(0,u.TH)();return(0,a.jsx)("div",{children:(0,a.jsx)("ul",{className:r,children:t.map((function(e){return(0,a.jsx)("li",{className:i,children:(0,a.jsx)(c.rU,{to:"/movies/".concat(e.id),className:o,state:{from:n},children:e.title})},e.id)}))})})}},134:function(e,t,n){"use strict";n.r(t);var r=n(861),i=n(439),o=n(757),u=n.n(o),c=n(87),a=n(95),s=n.n(a),f=n(57),l=n(791),v=n(298),p=n(184);t.default=function(){var e=(0,c.lr)(),t=(0,i.Z)(e,2),n=t[0],o=t[1],a=(0,l.useState)(n.get("query")||""),m=(0,i.Z)(a,2),d=m[0],h=m[1],b=(0,l.useState)(),x=(0,i.Z)(b,2),y=x[0],j=x[1];(0,l.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,""===t){e.next=9;break}return e.next=4,(0,f.z1)(t);case 4:n=e.sent,j(n.results),console.log("search",n),e.next=10;break;case 9:j(null);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("fetchSearchedMovies",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();e(d)}),[d]);var g=s()((function(e){o({query:e}),h(e)}),500);return(0,p.jsxs)("div",{children:[(0,p.jsxs)("form",{children:[(0,p.jsx)("input",{defaultValue:d,type:"text",placeholder:"Type the movie name here...",onChange:function(e){g(e.target.value)}}),(0,p.jsx)("button",{type:"submit",disabled:!0,children:"Search"})]}),y&&(0,p.jsx)(v.Z,{movies:y})]})}},95:function(e,t,n){var r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,s="object"==typeof self&&self&&self.Object===Object&&self,f=a||s||Function("return this")(),l=Object.prototype.toString,v=Math.max,p=Math.min,m=function(){return f.Date.now()};function d(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(d(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=d(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||u.test(e)?c(e.slice(2),n?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,n){var r,i,o,u,c,a,s=0,f=!1,l=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function x(t){var n=r,o=i;return r=i=void 0,s=t,u=e.apply(o,n)}function y(e){return s=e,c=setTimeout(g,t),f?x(e):u}function j(e){var n=e-a;return void 0===a||n>=t||n<0||l&&e-s>=o}function g(){var e=m();if(j(e))return _(e);c=setTimeout(g,function(e){var n=t-(e-a);return l?p(n,o-(e-s)):n}(e))}function _(e){return c=void 0,b&&r?x(e):(r=i=void 0,u)}function k(){var e=m(),n=j(e);if(r=arguments,i=this,a=e,n){if(void 0===c)return y(a);if(l)return c=setTimeout(g,t),x(a)}return void 0===c&&(c=setTimeout(g,t)),u}return t=h(t)||0,d(n)&&(f=!!n.leading,o=(l="maxWait"in n)?v(h(n.maxWait)||0,t):o,b="trailing"in n?!!n.trailing:b),k.cancel=function(){void 0!==c&&clearTimeout(c),s=0,r=a=i=c=void 0},k.flush=function(){return void 0===c?u:_(m())},k}}}]);
//# sourceMappingURL=134.be9e8ec4.chunk.js.map