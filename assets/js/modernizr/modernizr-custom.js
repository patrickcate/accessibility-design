!function(e,t,n){function o(e,t){return typeof e===t}function i(e){var t=h.className,n=d._config.classPrefix||"";if(m&&(t=t.baseVal),d._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(o,"$1"+n+"js$2")}d._config.enableClasses&&(t+=" "+n+e.join(" "+n),m?h.className.baseVal=t:h.className=t)}function s(e,t){if("object"==typeof e)for(var n in e)c(e,n)&&s(n,e[n]);else{var o=(e=e.toLowerCase()).split("."),a=d[o[0]];if(2==o.length&&(a=a[o[1]]),void 0!==a)return d;t="function"==typeof t?t():t,1==o.length?d[o[0]]=t:(!d[o[0]]||d[o[0]]instanceof Boolean||(d[o[0]]=new Boolean(d[o[0]])),d[o[0]][o[1]]=t),i([(t&&0!=t?"":"no-")+o.join("-")]),d._trigger(e,t)}return d}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):m?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function r(){var e=t.body;return e||((e=a(m?"svg":"body")).fake=!0),e}function l(e,n,o,i){var s,l,f,u,d="modernizr",c=a("div"),p=r();if(parseInt(o,10))for(;o--;)(f=a("div")).id=i?i[o]:d+(o+1),c.appendChild(f);return s=a("style"),s.type="text/css",s.id="s"+d,(p.fake?p:c).appendChild(s),p.appendChild(c),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),c.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",u=h.style.overflow,h.style.overflow="hidden",h.appendChild(p)),l=n(c,e),p.fake?(p.parentNode.removeChild(p),h.style.overflow=u,h.offsetHeight):c.parentNode.removeChild(c),!!l}var f=[],u={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){f.push({name:e,fn:t,options:n})},addAsyncTest:function(e){f.push({name:null,fn:e})}},d=function(){};d.prototype=u,d=new d;var c,p=[],h=t.documentElement,m="svg"===h.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;c=o(e,"undefined")||o(e.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),u._l={},u.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),d.hasOwnProperty(e)&&setTimeout(function(){d._trigger(e,d[e])},0)},u._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},d._q.push(function(){u.addTest=s});var v=u._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];u._prefixes=v;var y=u.testStyles=l,y=u.testStyles=l;d.addTest("details",function(){var e,t=a("details");return"open"in t&&(y("#modernizr details{display:block}",function(n){n.appendChild(t),t.innerHTML="<summary>a</summary>b",e=t.offsetHeight,t.open=!0,e=e!=t.offsetHeight}),e)}),d.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var o=["@media (",v.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");y(o,function(e){n=9===e.offsetTop})}return n});var g=a("input"),w="search tel url email datetime date month week time datetime-local number range color".split(" "),b={};d.inputtypes=function(e){for(var n,o,i,s=e.length,a=0;a<s;a++)g.setAttribute("type",n=e[a]),(i="text"!==g.type&&"style"in g)&&(g.value="1)",g.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(n)&&void 0!==g.style.WebkitAppearance?(h.appendChild(g),i=(o=t.defaultView).getComputedStyle&&"textfield"!==o.getComputedStyle(g,null).WebkitAppearance&&0!==g.offsetHeight,h.removeChild(g)):/^(search|tel)$/.test(n)||(i=/^(url|email)$/.test(n)?g.checkValidity&&!1===g.checkValidity():"1)"!=g.value)),b[e[a]]=!!i;return b}(w),function(){var e,t,n,i,s,a;for(var r in f)if(f.hasOwnProperty(r)){if(e=[],(t=f[r]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=o(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)1===(a=e[s].split(".")).length?d[a[0]]=i:(!d[a[0]]||d[a[0]]instanceof Boolean||(d[a[0]]=new Boolean(d[a[0]])),d[a[0]][a[1]]=i),p.push((i?"":"no-")+a.join("-"))}}(),i(p),delete u.addTest,delete u.addAsyncTest;for(var _=0;_<d._q.length;_++)d._q[_]();e.Modernizr=d}(window,document);
//# sourceMappingURL=../_sourcemaps/modernizr/modernizr-custom.js.map