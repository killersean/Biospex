/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
/*! jQuery UI - v1.11.4 - 2015-03-11
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, draggable.js, droppable.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js, menu.js, progressbar.js, resizable.js, selectable.js, selectmenu.js, slider.js, sortable.js, spinner.js, tabs.js, tooltip.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/^(input|select|textarea|button|object)$/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}function s(e){for(var t,i;e.length&&e[0]!==document;){if(t=e.css("position"),("absolute"===t||"relative"===t||"fixed"===t)&&(i=parseInt(e.css("zIndex"),10),!isNaN(i)&&0!==i))return i;e=e.parent()}return 0}function n(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.regional.en=e.extend(!0,{},this.regional[""]),this.regional["en-US"]=e.extend(!0,{},this.regional.en),this.dpDiv=a(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function a(t){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(i,"mouseout",function(){e(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",o)}function o(){e.datepicker._isDisabledDatepicker(v.inline?v.dpDiv.parent()[0]:v.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).addClass("ui-datepicker-next-hover"))}function r(t,i){e.extend(t,i);for(var s in i)null==i[s]&&(t[s]=i[s]);return t}function h(e){return function(){var t=this.element.val();e.apply(this,arguments),this._refresh(),t!==this.element.val()&&this._trigger("change")}}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var l=0,u=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=e._data(n,"events"),s&&s.remove&&e(n).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],n=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},a=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,a,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:n}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,n=u.call(arguments,1),a=0,o=n.length;o>a;a++)for(i in n[a])s=n[a][i],n[a].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(n){var a="string"==typeof n,o=u.call(arguments,1),r=this;return a?this.each(function(){var i,a=e.data(this,s);return"instance"===n?(r=a,!1):a?e.isFunction(a[n])&&"_"!==n.charAt(0)?(i=a[n].apply(a,o),i!==a&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+n+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+n+"'")}):(o.length&&(n=e.widget.extend.apply(null,[n].concat(o))),this.each(function(){var t=e.data(this,s);t?(t.option(n||{}),t._init&&t._init()):e.data(this,s,new i(n,this))})),r}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=l++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function r(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget;var d=!1;e(document).mouseup(function(){d=!1}),e.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!d){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var i=this,s=1===t.which,n="string"==typeof this.options.cancel&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(t)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(t)!==!1,!this._mouseStarted)?(t.preventDefault(),!0):(!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return i._mouseMove(e)},this._mouseUpDelegate=function(e){return i._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),d=!0,!0)):!0}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),d=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),function(){function t(e,t,i){return[parseFloat(e[0])*(p.test(e[0])?t/100:1),parseFloat(e[1])*(p.test(e[1])?i/100:1)]}function i(t,i){return parseInt(e.css(t,i),10)||0}function s(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,u=/top|center|bottom/,d=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,p=/%$/,f=e.fn.position;e.position={scrollbarWidth:function(){if(void 0!==n)return n;var t,i,s=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=s.children()[0];return e("body").append(s),t=a.offsetWidth,s.css("overflow","scroll"),i=a.offsetWidth,t===i&&(i=s[0].clientWidth),s.remove(),n=t-i},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),s=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),n="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,a="scroll"===s||"auto"===s&&t.height<t.element[0].scrollHeight;return{width:a?e.position.scrollbarWidth():0,height:n?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),s=e.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s||n?i.width():i.outerWidth(),height:s||n?i.height():i.outerHeight()}}},e.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=e.extend({},n);var p,m,g,v,y,b,_=e(n.of),x=e.position.getWithinInfo(n.within),w=e.position.getScrollInfo(x),k=(n.collision||"flip").split(" "),T={};return b=s(_),_[0].preventDefault&&(n.at="left top"),m=b.width,g=b.height,v=b.offset,y=e.extend({},v),e.each(["my","at"],function(){var e,t,i=(n[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):u.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=u.test(i[1])?i[1]:"center",e=d.exec(i[0]),t=d.exec(i[1]),T[this]=[e?e[0]:0,t?t[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===n.at[0]?y.left+=m:"center"===n.at[0]&&(y.left+=m/2),"bottom"===n.at[1]?y.top+=g:"center"===n.at[1]&&(y.top+=g/2),p=t(T.at,m,g),y.left+=p[0],y.top+=p[1],this.each(function(){var s,l,u=e(this),d=u.outerWidth(),c=u.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),D=d+f+i(this,"marginRight")+w.width,S=c+b+i(this,"marginBottom")+w.height,M=e.extend({},y),C=t(T.my,u.outerWidth(),u.outerHeight());"right"===n.my[0]?M.left-=d:"center"===n.my[0]&&(M.left-=d/2),"bottom"===n.my[1]?M.top-=c:"center"===n.my[1]&&(M.top-=c/2),M.left+=C[0],M.top+=C[1],a||(M.left=h(M.left),M.top=h(M.top)),s={marginLeft:f,marginTop:b},e.each(["left","top"],function(t,i){e.ui.position[k[t]]&&e.ui.position[k[t]][i](M,{targetWidth:m,targetHeight:g,elemWidth:d,elemHeight:c,collisionPosition:s,collisionWidth:D,collisionHeight:S,offset:[p[0]+C[0],p[1]+C[1]],my:n.my,at:n.at,within:x,elem:u})}),n.using&&(l=function(e){var t=v.left-M.left,i=t+m-d,s=v.top-M.top,a=s+g-c,h={target:{element:_,left:v.left,top:v.top,width:m,height:g},element:{element:u,left:M.left,top:M.top,width:d,height:c},horizontal:0>i?"left":t>0?"right":"center",vertical:0>a?"top":s>0?"bottom":"middle"};d>m&&m>r(t+i)&&(h.horizontal="center"),c>g&&g>r(s+a)&&(h.vertical="middle"),h.important=o(r(t),r(i))>o(r(s),r(a))?"horizontal":"vertical",n.using.call(this,e,h)}),u.offset(e.extend(M,{using:l}))})},e.ui.position={fit:{left:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=e.left-t.collisionPosition.marginLeft,h=n-r,l=r+t.collisionWidth-a-n;t.collisionWidth>a?h>0&&0>=l?(i=e.left+h+t.collisionWidth-a-n,e.left+=h-i):e.left=l>0&&0>=h?n:h>l?n+a-t.collisionWidth:n:h>0?e.left+=h:l>0?e.left-=l:e.left=o(e.left-r,e.left)},top:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollTop:s.offset.top,a=t.within.height,r=e.top-t.collisionPosition.marginTop,h=n-r,l=r+t.collisionHeight-a-n;t.collisionHeight>a?h>0&&0>=l?(i=e.top+h+t.collisionHeight-a-n,e.top+=h-i):e.top=l>0&&0>=h?n:h>l?n+a-t.collisionHeight:n:h>0?e.top+=h:l>0?e.top-=l:e.top=o(e.top-r,e.top)}},flip:{left:function(e,t){var i,s,n=t.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=e.left-t.collisionPosition.marginLeft,u=l-h,d=l+t.collisionWidth-o-h,c="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,f=-2*t.offset[0];0>u?(i=e.left+c+p+f+t.collisionWidth-o-a,(0>i||r(u)>i)&&(e.left+=c+p+f)):d>0&&(s=e.left-t.collisionPosition.marginLeft+c+p+f-h,(s>0||d>r(s))&&(e.left+=c+p+f))},top:function(e,t){var i,s,n=t.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=e.top-t.collisionPosition.marginTop,u=l-h,d=l+t.collisionHeight-o-h,c="top"===t.my[1],p=c?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,f="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>u?(s=e.top+p+f+m+t.collisionHeight-o-a,(0>s||r(u)>s)&&(e.top+=p+f+m)):d>0&&(i=e.top-t.collisionPosition.marginTop+p+f+m-h,(i>0||d>r(i))&&(e.top+=p+f+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,s,n,o,r=document.getElementsByTagName("body")[0],h=document.createElement("div");t=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&e.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)t.style[o]=s[o];t.appendChild(h),i=r||document.documentElement,i.insertBefore(t,i.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",n=e(h).offset().left,a=n>10&&11>n,t.innerHTML="",i.removeChild(t)}()}(),e.ui.position,e.widget("ui.accordion",{version:"1.11.4",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var t=this.options;this.prevShow=this.prevHide=e(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),t.collapsible||t.active!==!1&&null!=t.active||(t.active=0),this._processPanels(),0>t.active&&(t.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():e()}},_createIcons:function(){var t=this.options.icons;t&&(e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(),this._destroyIcons(),e=this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&e.css("height","")},_setOption:function(e,t){return"active"===e?(this._activate(t),void 0):("event"===e&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),"collapsible"!==e||t||this.options.active!==!1||this._activate(0),"icons"===e&&(this._destroyIcons(),t&&this._createIcons()),"disabled"===e&&(this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t)),void 0)},_keydown:function(t){if(!t.altKey&&!t.ctrlKey){var i=e.ui.keyCode,s=this.headers.length,n=this.headers.index(t.target),a=!1;switch(t.keyCode){case i.RIGHT:case i.DOWN:a=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:a=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(t);break;case i.HOME:a=this.headers[0];break;case i.END:a=this.headers[s-1]}a&&(e(t.target).attr("tabIndex",-1),e(a).attr("tabIndex",0),a.focus(),t.preventDefault())}},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().focus()},refresh:function(){var t=this.options;this._processPanels(),t.active===!1&&t.collapsible===!0||!this.headers.length?(t.active=!1,this.active=e()):t.active===!1?this._activate(0):this.active.length&&!e.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=e()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var e=this.headers,t=this.panels;this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"),this.panels=this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(),t&&(this._off(e.not(this.headers)),this._off(t.not(this.panels)))},_refresh:function(){var t,i=this.options,s=i.heightStyle,n=this.element.parent();this.active=this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(){var t=e(this),i=t.uniqueId().attr("id"),s=t.next(),n=s.uniqueId().attr("id");t.attr("aria-controls",n),s.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===s?(t=n.height(),this.element.siblings(":visible").each(function(){var i=e(this),s=i.css("position");"absolute"!==s&&"fixed"!==s&&(t-=i.outerHeight(!0))}),this.headers.each(function(){t-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,t-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===s&&(t=0,this.headers.next().each(function(){t=Math.max(t,e(this).css("height","").height())}).height(t))},_activate:function(t){var i=this._findActive(t)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return"number"==typeof t?this.headers.eq(t):e()},_setupEvents:function(t){var i={keydown:"_keydown"};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(t){var i=this.options,s=this.active,n=e(t.currentTarget),a=n[0]===s[0],o=a&&i.collapsible,r=o?e():n.next(),h=s.next(),l={oldHeader:s,oldPanel:h,newHeader:o?e():n,newPanel:r};t.preventDefault(),a&&!i.collapsible||this._trigger("beforeActivate",t,l)===!1||(i.active=o?!1:this.headers.index(n),this.active=a?e():n,this._toggle(l),s.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),a||(n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),n.next().addClass("ui-accordion-content-active")))},_toggle:function(t){var i=t.newPanel,s=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,t):(s.hide(),i.show(),this._toggleComplete(t)),s.attr({"aria-hidden":"true"}),s.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===parseInt(e(this).attr("tabIndex"),10)}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(e,t,i){var s,n,a,o=this,r=0,h=e.css("box-sizing"),l=e.length&&(!t.length||e.index()<t.index()),u=this.options.animate||{},d=l&&u.down||u,c=function(){o._toggleComplete(i)};return"number"==typeof d&&(a=d),"string"==typeof d&&(n=d),n=n||d.easing||u.easing,a=a||d.duration||u.duration,t.length?e.length?(s=e.show().outerHeight(),t.animate(this.hideProps,{duration:a,easing:n,step:function(e,t){t.now=Math.round(e)}}),e.hide().animate(this.showProps,{duration:a,easing:n,complete:c,step:function(e,i){i.now=Math.round(e),"height"!==i.prop?"content-box"===h&&(r+=i.now):"content"!==o.options.heightStyle&&(i.now=Math.round(s-t.outerHeight()-r),r=0)}}),void 0):t.animate(this.hideProps,a,n,c):e.animate(this.showProps,a,n,c)},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}}),e.widget("ui.menu",{version:"1.11.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(e){e.preventDefault()},"click .ui-menu-item":function(t){var i=e(t.target);!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&e(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){if(!this.previousFilter){var i=e(t.currentTarget);
i.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(t,i)}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var i=this.active||this.element.find(this.options.items).eq(0);t||this.focus(e,i)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){this._closeOnDocumentClick(e)&&this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){var i,s,n,a,o=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:o=!1,s=this.previousFilter||"",n=String.fromCharCode(t.keyCode),a=!1,clearTimeout(this.filterTimer),n===s?a=!0:n=s+n,i=this._filterMenuItems(n),i=a&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(t.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(t,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}o&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(e):this.select(e))},refresh:function(){var t,i,s=this,n=this.options.icons.submenu,a=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),i=t.parent(),s=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);i.attr("aria-haspopup","true").prepend(s),t.attr("aria-labelledby",i.attr("id"))}),t=a.add(this.element),i=t.find(this.options.items),i.not(".ui-menu-item").each(function(){var t=e(this);s._isDivider(t)&&t.addClass("ui-widget-content ui-menu-divider")}),i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){"icons"===e&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},focus:function(e,t){var i,s;this.blur(e,e&&"focus"===e.type),this._scrollIntoView(t),this.active=t.first(),s=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),e&&"keydown"===e.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=t.children(".ui-menu"),i.length&&e&&/^mouse/.test(e.type)&&this._startOpening(i),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,n=t.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=t.outerHeight(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(e,t){t||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active}))},_startOpening:function(e){clearTimeout(this.timer),"true"===e.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(e)},this.delay))},_open:function(t){var i=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(t,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(t),this.activeMenu=s},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(t){return!e(t.target).closest(".ui-menu").length},_isDivider:function(e){return!/[^\-\u2014\u2013\s]/.test(e.text())},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,i){var s;this.active&&(s="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[e+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[t]()),this.focus(i,s)},nextPage:function(t){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=e(this),0>i.offset().top-s-n}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(t),void 0)},previousPage:function(t){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=e(this),i.offset().top-s+n>0}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items).first())),void 0):(this.next(t),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,i)},_filterMenuItems:function(t){var i=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(e.trim(e(this).text()))})}}),e.widget("ui.autocomplete",{version:"1.11.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var t,i,s,n=this.element[0].nodeName.toLowerCase(),a="textarea"===n,o="input"===n;this.isMultiLine=a?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[a||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return t=!0,s=!0,i=!0,void 0;t=!1,s=!1,i=!1;var a=e.ui.keyCode;switch(n.keyCode){case a.PAGE_UP:t=!0,this._move("previousPage",n);break;case a.PAGE_DOWN:t=!0,this._move("nextPage",n);break;case a.UP:t=!0,this._keyEvent("previous",n);break;case a.DOWN:t=!0,this._keyEvent("next",n);break;case a.ENTER:this.menu.active&&(t=!0,n.preventDefault(),this.menu.select(n));break;case a.TAB:this.menu.active&&this.menu.select(n);break;case a.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(t)return t=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(e){return s?(s=!1,e.preventDefault(),void 0):(this._searchTimeout(e),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(e),this._change(e),void 0)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(s){s.target===t.element[0]||s.target===i||e.contains(i,s.target)||t.close()})})},menufocus:function(t,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",t,{item:n})&&t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&e.trim(s).length&&(this.liveRegion.children().hide(),e("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=e("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,s=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,s){s(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,n){s.xhr&&s.xhr.abort(),s.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){n(e)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){var t=this.term===this._value(),i=this.menu.element.is(":visible"),s=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey;(!t||t&&!i&&!s)&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):this._trigger("search",t)!==!1?this._search(e):void 0},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex;return e.proxy(function(e){t===this.requestIndex&&this.__response(e),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return"string"==typeof t?{label:t,value:t}:e.extend({},t,{label:t.label||t.value,value:t.value||t.label})})},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var s=this;e.each(i,function(e,i){s._renderItemData(t,i)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").text(i.label).appendTo(t)},_move:function(e,t){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[e](t),void 0):(this.search(null,t),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(e,t),t.preventDefault())}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var s=RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,function(e){return s.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.children().hide(),e("<div>").text(i).appendTo(this.liveRegion))}}),e.ui.autocomplete;var c,p="ui-button ui-widget ui-state-default ui-corner-all",f="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",m=function(){var t=e(this);setTimeout(function(){t.find(":ui-button").button("refresh")},1)},g=function(t){var i=t.name,s=t.form,n=e([]);return i&&(i=i.replace(/'/g,"\\'"),n=s?e(s).find("[name='"+i+"'][type=radio]"):e("[name='"+i+"'][type=radio]",t.ownerDocument).filter(function(){return!this.form})),n};e.widget("ui.button",{version:"1.11.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,m),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var t=this,i=this.options,s="checkbox"===this.type||"radio"===this.type,n=s?"":"ui-state-active";null===i.label&&(i.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(p).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){i.disabled||this===c&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){i.disabled||e(this).removeClass(n)}).bind("click"+this.eventNamespace,function(e){i.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),s&&this.element.bind("change"+this.eventNamespace,function(){t.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return i.disabled?!1:void 0}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(i.disabled)return!1;e(this).addClass("ui-state-active"),t.buttonElement.attr("aria-pressed","true");var s=t.element[0];g(s).not(s).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return i.disabled?!1:(e(this).addClass("ui-state-active"),c=this,t.document.one("mouseup",function(){c=null}),void 0)}).bind("mouseup"+this.eventNamespace,function(){return i.disabled?!1:(e(this).removeClass("ui-state-active"),void 0)}).bind("keydown"+this.eventNamespace,function(t){return i.disabled?!1:((t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active"),void 0)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",i.disabled),this._resetButton()},_determineButtonType:function(){var e,t,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(p+" ui-state-active "+f).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){return this._super(e,t),"disabled"===e?(this.widget().toggleClass("ui-state-disabled",!!t),this.element.prop("disabled",!!t),t&&("checkbox"===this.type||"radio"===this.type?this.buttonElement.removeClass("ui-state-focus"):this.buttonElement.removeClass("ui-state-focus ui-state-active")),void 0):(this._resetButton(),void 0)},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),"radio"===this.type?g(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),void 0;var t=this.buttonElement.removeClass(f),i=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),s=this.options.icons,n=s.primary&&s.secondary,a=[];s.primary||s.secondary?(this.options.text&&a.push("ui-button-text-icon"+(n?"s":s.primary?"-primary":"-secondary")),s.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+s.primary+"'></span>"),s.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+s.secondary+"'></span>"),this.options.text||(a.push(n?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(i)))):a.push("ui-button-text-only"),t.addClass(a.join(" "))}}),e.widget("ui.buttonset",{version:"1.11.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){"disabled"===e&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t="rtl"===this.element.css("direction"),i=this.element.find(this.options.items),s=i.filter(":ui-button");i.not(":ui-button").button(),s.button("refresh"),this.buttons=i.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}}),e.ui.button,e.extend(e.ui,{datepicker:{version:"1.11.4"}});var v;e.extend(n.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return r(this._defaults,e||{}),this},_attachDatepicker:function(t,i){var s,n,a;s=t.nodeName.toLowerCase(),n="div"===s||"span"===s,t.id||(this.uuid+=1,t.id="dp"+this.uuid),a=this._newInst(e(t),n),a.settings=e.extend({},i||{}),"input"===s?this._connectDatepicker(t,a):n&&this._inlineDatepicker(t,a)},_newInst:function(t,i){var s=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?a(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,i){var s=e(t);i.append=e([]),i.trigger=e([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),e.data(t,"datepicker",i),i.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,i){var s,n,a,o=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),o&&(i.append=e("<span class='"+this._appendClass+"'>"+o+"</span>"),t[r?"before":"after"](i.append)),t.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&t.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),a=this._get(i,"buttonImage"),i.trigger=e(this._get(i,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:a,alt:n,title:n}):e("<button type='button'></button>").addClass(this._triggerClass).html(a?e("<img/>").attr({src:a,alt:n,title:n}):n)),t[r?"before":"after"](i.trigger),i.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1}))},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,i,s,n,a=new Date(2009,11,20),o=this._get(e,"dateFormat");o.match(/[DM]/)&&(t=function(e){for(i=0,s=0,n=0;e.length>n;n++)e[n].length>i&&(i=e[n].length,s=n);return s},a.setMonth(t(this._get(e,o.match(/MM/)?"monthNames":"monthNamesShort"))),a.setDate(t(this._get(e,o.match(/DD/)?"dayNames":"dayNamesShort"))+20-a.getDay())),e.input.attr("size",this._formatDate(e,a).length)}},_inlineDatepicker:function(t,i){var s=e(t);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),e.data(t,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(t),i.dpDiv.css("display","block"))},_dialogDatepicker:function(t,i,s,n,a){var o,h,l,u,d,c=this._dialogInst;return c||(this.uuid+=1,o="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+o+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),c=this._dialogInst=this._newInst(this._dialogInput,!1),c.settings={},e.data(this._dialogInput[0],"datepicker",c)),r(c.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(c,i):i,this._dialogInput.val(i),this._pos=a?a.length?a:[a.pageX,a.pageY]:null,this._pos||(h=document.documentElement.clientWidth,l=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[h/2-100+u,l/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),c.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],"datepicker",c),this},_destroyDatepicker:function(t){var i,s=e(t),n=e.data(t,"datepicker");s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),e.removeData(t,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),v===n&&(v=null))},_enableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!1,a.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}))},_disableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!0,a.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;this._disabledInputs.length>t;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(t,i,s){var n,a,o,h,l=this._getInst(t);return 2===arguments.length&&"string"==typeof i?"defaults"===i?e.extend({},e.datepicker._defaults):l?"all"===i?e.extend({},l.settings):this._get(l,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),l&&(this._curInst===l&&this._hideDatepicker(),a=this._getDateDatepicker(t,!0),o=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),r(l.settings,n),null!==o&&void 0!==n.dateFormat&&void 0===n.minDate&&(l.settings.minDate=this._formatDate(l,o)),null!==h&&void 0!==n.dateFormat&&void 0===n.maxDate&&(l.settings.maxDate=this._formatDate(l,h)),"disabled"in n&&(n.disabled?this._disableDatepicker(t):this._enableDatepicker(t)),this._attachments(e(t),l),this._autoSize(l),this._setDate(l,a),this._updateAlternate(l),this._updateDatepicker(l)),void 0)},_changeDatepicker:function(e,t,i){this._optionDatepicker(e,t,i)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var i=this._getInst(e);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(e,t){var i=this._getInst(e);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(t){var i,s,n,a=e.datepicker._getInst(t.target),o=!0,r=a.dpDiv.is(".ui-datepicker-rtl");if(a._keyEvent=!0,e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),o=!1;break;case 13:return n=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",a.dpDiv),n[0]&&e.datepicker._selectDay(t.target,a.selectedMonth,a.selectedYear,n[0]),i=e.datepicker._get(a,"onSelect"),i?(s=e.datepicker._formatDate(a),i.apply(a.input?a.input[0]:null,[s,a])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),o=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),o=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?1:-1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),o=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?-1:1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),o=t.ctrlKey||t.metaKey;break;default:o=!1}else 36===t.keyCode&&t.ctrlKey?e.datepicker._showDatepicker(this):o=!1;o&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(t){var i,s,n=e.datepicker._getInst(t.target);
return e.datepicker._get(n,"constrainInput")?(i=e.datepicker._possibleChars(e.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==t.charCode?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(t){var i,s=e.datepicker._getInst(t.target);if(s.input.val()!==s.lastVal)try{i=e.datepicker.parseDate(e.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,e.datepicker._getFormatConfig(s)),i&&(e.datepicker._setDateFromField(s),e.datepicker._updateAlternate(s),e.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(t){if(t=t.target||t,"input"!==t.nodeName.toLowerCase()&&(t=e("input",t.parentNode)[0]),!e.datepicker._isDisabledDatepicker(t)&&e.datepicker._lastInput!==t){var i,n,a,o,h,l,u;i=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==i&&(e.datepicker._curInst.dpDiv.stop(!0,!0),i&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),n=e.datepicker._get(i,"beforeShow"),a=n?n.apply(t,[t,i]):{},a!==!1&&(r(i.settings,a),i.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(i),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),o=!1,e(t).parents().each(function(){return o|="fixed"===e(this).css("position"),!o}),h={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(i),h=e.datepicker._checkOffset(i,h,o),i.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":o?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),i.inline||(l=e.datepicker._get(i,"showAnim"),u=e.datepicker._get(i,"duration"),i.dpDiv.css("z-index",s(e(t))+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[l]?i.dpDiv.show(l,e.datepicker._get(i,"showOptions"),u):i.dpDiv[l||"show"](l?u:null),e.datepicker._shouldFocusInput(i)&&i.input.focus(),e.datepicker._curInst=i))}},_updateDatepicker:function(t){this.maxRows=4,v=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t);var i,s=this._getNumberOfMonths(t),n=s[1],a=17,r=t.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&o.apply(r.get(0)),t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&t.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),t.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(t)&&t.input.focus(),t.yearshtml&&(i=t.yearshtml,setTimeout(function(){i===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),i=t.yearshtml=null},0))},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(t,i,s){var n=t.dpDiv.outerWidth(),a=t.dpDiv.outerHeight(),o=t.input?t.input.outerWidth():0,r=t.input?t.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:e(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:e(document).scrollTop());return i.left-=this._get(t,"isRTL")?n-o:0,i.left-=s&&i.left===t.input.offset().left?e(document).scrollLeft():0,i.top-=s&&i.top===t.input.offset().top+r?e(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+a>l&&l>a?Math.abs(a+r):0),i},_findPos:function(t){for(var i,s=this._getInst(t),n=this._get(s,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||e.expr.filters.hidden(t));)t=t[n?"previousSibling":"nextSibling"];return i=e(t).offset(),[i.left,i.top]},_hideDatepicker:function(t){var i,s,n,a,o=this._curInst;!o||t&&o!==e.data(t,"datepicker")||this._datepickerShowing&&(i=this._get(o,"showAnim"),s=this._get(o,"duration"),n=function(){e.datepicker._tidyDialog(o)},e.effects&&(e.effects.effect[i]||e.effects[i])?o.dpDiv.hide(i,e.datepicker._get(o,"showOptions"),s,n):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,a=this._get(o,"onClose"),a&&a.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(e.datepicker._curInst){var i=e(t.target),s=e.datepicker._getInst(i[0]);(i[0].id!==e.datepicker._mainDivId&&0===i.parents("#"+e.datepicker._mainDivId).length&&!i.hasClass(e.datepicker.markerClassName)&&!i.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||i.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==s)&&e.datepicker._hideDatepicker()}},_adjustDate:function(t,i,s){var n=e(t),a=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(a,i+("M"===s?this._get(a,"showCurrentAtPos"):0),s),this._updateDatepicker(a))},_gotoToday:function(t){var i,s=e(t),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(t,i,s){var n=e(t),a=this._getInst(n[0]);a["selected"+("M"===s?"Month":"Year")]=a["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(a),this._adjustDate(n)},_selectDay:function(t,i,s,n){var a,o=e(t);e(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])||(a=this._getInst(o[0]),a.selectedDay=a.currentDay=e("a",n).html(),a.selectedMonth=a.currentMonth=i,a.selectedYear=a.currentYear=s,this._selectDate(t,this._formatDate(a,a.currentDay,a.currentMonth,a.currentYear)))},_clearDate:function(t){var i=e(t);this._selectDate(i,"")},_selectDate:function(t,i){var s,n=e(t),a=this._getInst(n[0]);i=null!=i?i:this._formatDate(a),a.input&&a.input.val(i),this._updateAlternate(a),s=this._get(a,"onSelect"),s?s.apply(a.input?a.input[0]:null,[i,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var i,s,n,a=this._get(t,"altField");a&&(i=this._get(t,"altFormat")||this._get(t,"dateFormat"),s=this._getDate(t),n=this.formatDate(i,s,this._getFormatConfig(t)),e(a).each(function(){e(this).val(n)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&6>t,""]},iso8601Week:function(e){var t,i=new Date(e.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),t=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((t-i)/864e5)/7)+1},parseDate:function(t,i,s){if(null==t||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,a,o,r,h=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),d=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,c=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,m=-1,g=-1,v=-1,y=-1,b=!1,_=function(e){var i=t.length>n+1&&t.charAt(n+1)===e;return i&&n++,i},x=function(e){var t=_(e),s="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,n="y"===e?s:1,a=RegExp("^\\d{"+n+","+s+"}"),o=i.substring(h).match(a);if(!o)throw"Missing number at position "+h;return h+=o[0].length,parseInt(o[0],10)},w=function(t,s,n){var a=-1,o=e.map(_(t)?n:s,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});if(e.each(o,function(e,t){var s=t[1];return i.substr(h,s.length).toLowerCase()===s.toLowerCase()?(a=t[0],h+=s.length,!1):void 0}),-1!==a)return a+1;throw"Unknown name at position "+h},k=function(){if(i.charAt(h)!==t.charAt(n))throw"Unexpected literal at position "+h;h++};for(n=0;t.length>n;n++)if(b)"'"!==t.charAt(n)||_("'")?k():b=!1;else switch(t.charAt(n)){case"d":v=x("d");break;case"D":w("D",d,c);break;case"o":y=x("o");break;case"m":g=x("m");break;case"M":g=w("M",p,f);break;case"y":m=x("y");break;case"@":r=new Date(x("@")),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"!":r=new Date((x("!")-this._ticksTo1970)/1e4),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"'":_("'")?k():b=!0;break;default:k()}if(i.length>h&&(o=i.substr(h),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===m?m=(new Date).getFullYear():100>m&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=m?0:-100)),y>-1)for(g=1,v=y;;){if(a=this._getDaysInMonth(m,g-1),a>=v)break;g++,v-=a}if(r=this._daylightSavingAdjust(new Date(m,g-1,v)),r.getFullYear()!==m||r.getMonth()+1!==g||r.getDate()!==v)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(e,t,i){if(!t)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,a=(i?i.dayNames:null)||this._defaults.dayNames,o=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(t){var i=e.length>s+1&&e.charAt(s+1)===t;return i&&s++,i},l=function(e,t,i){var s=""+t;if(h(e))for(;i>s.length;)s="0"+s;return s},u=function(e,t,i,s){return h(e)?s[t]:i[t]},d="",c=!1;if(t)for(s=0;e.length>s;s++)if(c)"'"!==e.charAt(s)||h("'")?d+=e.charAt(s):c=!1;else switch(e.charAt(s)){case"d":d+=l("d",t.getDate(),2);break;case"D":d+=u("D",t.getDay(),n,a);break;case"o":d+=l("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":d+=l("m",t.getMonth()+1,2);break;case"M":d+=u("M",t.getMonth(),o,r);break;case"y":d+=h("y")?t.getFullYear():(10>t.getYear()%100?"0":"")+t.getYear()%100;break;case"@":d+=t.getTime();break;case"!":d+=1e4*t.getTime()+this._ticksTo1970;break;case"'":h("'")?d+="'":c=!0;break;default:d+=e.charAt(s)}return d},_possibleChars:function(e){var t,i="",s=!1,n=function(i){var s=e.length>t+1&&e.charAt(t+1)===i;return s&&t++,s};for(t=0;e.length>t;t++)if(s)"'"!==e.charAt(t)||n("'")?i+=e.charAt(t):s=!1;else switch(e.charAt(t)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=e.charAt(t)}return i},_get:function(e,t){return void 0!==e.settings[t]?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var i=this._get(e,"dateFormat"),s=e.lastVal=e.input?e.input.val():null,n=this._getDefaultDate(e),a=n,o=this._getFormatConfig(e);try{a=this.parseDate(i,s,o)||n}catch(r){s=t?"":s}e.selectedDay=a.getDate(),e.drawMonth=e.selectedMonth=a.getMonth(),e.drawYear=e.selectedYear=a.getFullYear(),e.currentDay=s?a.getDate():0,e.currentMonth=s?a.getMonth():0,e.currentYear=s?a.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,i,s){var n=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},a=function(i){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),i,e.datepicker._getFormatConfig(t))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,a=n.getFullYear(),o=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":o+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o));break;case"y":case"Y":a+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o))}l=h.exec(i)}return new Date(a,o,r)},o=null==i||""===i?s:"string"==typeof i?a(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return o=o&&"Invalid Date"==""+o?s:o,o&&(o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0)),this._daylightSavingAdjust(o)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,i){var s=!t,n=e.selectedMonth,a=e.selectedYear,o=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=o.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth(),e.drawYear=e.selectedYear=e.currentYear=o.getFullYear(),n===e.selectedMonth&&a===e.selectedYear||i||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(s?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var i=this._get(t,"stepMonths"),s="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(s,-i,"M")},next:function(){e.datepicker._adjustDate(s,+i,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(s)},selectDay:function(){return e.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return e.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return e.datepicker._selectMonthYear(s,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,i,s,n,a,o,r,h,l,u,d,c,p,f,m,g,v,y,b,_,x,w,k,T,D,S,M,C,N,A,P,I,H,z,F,E,O,j,W,L=new Date,R=this._daylightSavingAdjust(new Date(L.getFullYear(),L.getMonth(),L.getDate())),Y=this._get(e,"isRTL"),B=this._get(e,"showButtonPanel"),J=this._get(e,"hideIfNoPrevNext"),q=this._get(e,"navigationAsDateFormat"),K=this._getNumberOfMonths(e),V=this._get(e,"showCurrentAtPos"),U=this._get(e,"stepMonths"),Q=1!==K[0]||1!==K[1],G=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),X=this._getMinMaxDate(e,"min"),$=this._getMinMaxDate(e,"max"),Z=e.drawMonth-V,et=e.drawYear;if(0>Z&&(Z+=12,et--),$)for(t=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-K[0]*K[1]+1,$.getDate())),t=X&&X>t?X:t;this._daylightSavingAdjust(new Date(et,Z,1))>t;)Z--,0>Z&&(Z=11,et--);for(e.drawMonth=Z,e.drawYear=et,i=this._get(e,"prevText"),i=q?this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z-U,1)),this._getFormatConfig(e)):i,s=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":J?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(e,"nextText"),n=q?this.formatDate(n,this._daylightSavingAdjust(new Date(et,Z+U,1)),this._getFormatConfig(e)):n,a=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":J?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",o=this._get(e,"currentText"),r=this._get(e,"gotoCurrent")&&e.currentDay?G:R,o=q?this.formatDate(o,r,this._getFormatConfig(e)):o,h=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",l=B?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(e,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+o+"</button>":"")+(Y?"":h)+"</div>":"",u=parseInt(this._get(e,"firstDay"),10),u=isNaN(u)?0:u,d=this._get(e,"showWeek"),c=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),f=this._get(e,"monthNames"),m=this._get(e,"monthNamesShort"),g=this._get(e,"beforeShowDay"),v=this._get(e,"showOtherMonths"),y=this._get(e,"selectOtherMonths"),b=this._getDefaultDate(e),_="",w=0;K[0]>w;w++){for(k="",this.maxRows=4,T=0;K[1]>T;T++){if(D=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),S=" ui-corner-all",M="",Q){if(M+="<div class='ui-datepicker-group",K[1]>1)switch(T){case 0:M+=" ui-datepicker-group-first",S=" ui-corner-"+(Y?"right":"left");break;case K[1]-1:M+=" ui-datepicker-group-last",S=" ui-corner-"+(Y?"left":"right");break;default:M+=" ui-datepicker-group-middle",S=""}M+="'>"}for(M+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+S+"'>"+(/all|left/.test(S)&&0===w?Y?a:s:"")+(/all|right/.test(S)&&0===w?Y?s:a:"")+this._generateMonthYearHeader(e,Z,et,X,$,w>0||T>0,f,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",C=d?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"",x=0;7>x;x++)N=(x+u)%7,C+="<th scope='col'"+((x+u+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+c[N]+"'>"+p[N]+"</span></th>";for(M+=C+"</tr></thead><tbody>",A=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,A)),P=(this._getFirstDayOfMonth(et,Z)-u+7)%7,I=Math.ceil((P+A)/7),H=Q?this.maxRows>I?this.maxRows:I:I,this.maxRows=H,z=this._daylightSavingAdjust(new Date(et,Z,1-P)),F=0;H>F;F++){for(M+="<tr>",E=d?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(z)+"</td>":"",x=0;7>x;x++)O=g?g.apply(e.input?e.input[0]:null,[z]):[!0,""],j=z.getMonth()!==Z,W=j&&!y||!O[0]||X&&X>z||$&&z>$,E+="<td class='"+((x+u+6)%7>=5?" ui-datepicker-week-end":"")+(j?" ui-datepicker-other-month":"")+(z.getTime()===D.getTime()&&Z===e.selectedMonth&&e._keyEvent||b.getTime()===z.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(W?" "+this._unselectableClass+" ui-state-disabled":"")+(j&&!v?"":" "+O[1]+(z.getTime()===G.getTime()?" "+this._currentClass:"")+(z.getTime()===R.getTime()?" ui-datepicker-today":""))+"'"+(j&&!v||!O[2]?"":" title='"+O[2].replace(/'/g,"&#39;")+"'")+(W?"":" data-handler='selectDay' data-event='click' data-month='"+z.getMonth()+"' data-year='"+z.getFullYear()+"'")+">"+(j&&!v?"&#xa0;":W?"<span class='ui-state-default'>"+z.getDate()+"</span>":"<a class='ui-state-default"+(z.getTime()===R.getTime()?" ui-state-highlight":"")+(z.getTime()===G.getTime()?" ui-state-active":"")+(j?" ui-priority-secondary":"")+"' href='#'>"+z.getDate()+"</a>")+"</td>",z.setDate(z.getDate()+1),z=this._daylightSavingAdjust(z);M+=E+"</tr>"}Z++,Z>11&&(Z=0,et++),M+="</tbody></table>"+(Q?"</div>"+(K[0]>0&&T===K[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),k+=M}_+=k}return _+=l,e._keyEvent=!1,_},_generateMonthYearHeader:function(e,t,i,s,n,a,o,r){var h,l,u,d,c,p,f,m,g=this._get(e,"changeMonth"),v=this._get(e,"changeYear"),y=this._get(e,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",_="";if(a||!g)_+="<span class='ui-datepicker-month'>"+o[t]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,_+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",u=0;12>u;u++)(!h||u>=s.getMonth())&&(!l||n.getMonth()>=u)&&(_+="<option value='"+u+"'"+(u===t?" selected='selected'":"")+">"+r[u]+"</option>");_+="</select>"}if(y||(b+=_+(!a&&g&&v?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",a||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(d=this._get(e,"yearRange").split(":"),c=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?i+parseInt(e.substring(1),10):e.match(/[+\-].*/)?c+parseInt(e,10):parseInt(e,10);return isNaN(t)?c:t},f=p(d[0]),m=Math.max(f,p(d[1]||"")),f=s?Math.max(f,s.getFullYear()):f,m=n?Math.min(m,n.getFullYear()):m,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=f;f++)e.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";e.yearshtml+="</select>",b+=e.yearshtml,e.yearshtml=null}return b+=this._get(e,"yearSuffix"),y&&(b+=(!a&&g&&v?"":"&#xa0;")+_),b+="</div>"},_adjustInstDate:function(e,t,i){var s=e.drawYear+("Y"===i?t:0),n=e.drawMonth+("M"===i?t:0),a=Math.min(e.selectedDay,this._getDaysInMonth(s,n))+("D"===i?t:0),o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(s,n,a)));e.selectedDay=o.getDate(),e.drawMonth=e.selectedMonth=o.getMonth(),e.drawYear=e.selectedYear=o.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(e)},_restrictMinMax:function(e,t){var i=this._getMinMaxDate(e,"min"),s=this._getMinMaxDate(e,"max"),n=i&&i>t?i:t;return s&&n>s?s:n},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,i,s){var n=this._getNumberOfMonths(e),a=this._daylightSavingAdjust(new Date(i,s+(0>t?t:n[0]*n[1]),1));return 0>t&&a.setDate(this._getDaysInMonth(a.getFullYear(),a.getMonth())),this._isInRange(e,a)},_isInRange:function(e,t){var i,s,n=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max"),o=null,r=null,h=this._get(e,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),o=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(o+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||t.getTime()>=n.getTime())&&(!a||t.getTime()<=a.getTime())&&(!o||t.getFullYear()>=o)&&(!r||r>=t.getFullYear())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,i,s){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var n=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(s,i,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),n,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),0===e("#"+e.datepicker._mainDivId).length&&e("body").append(e.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof t?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(i)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i))},e.datepicker=new n,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.11.4",e.datepicker,e.widget("ui.draggable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(e,t){this._super(e,t),"handle"===e&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(t){var i=this.options;return this._blurActiveElement(t),this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=e(this);return e("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var i=this.document[0];if(this.handleElement.is(t.target))try{i.activeElement&&"body"!==i.activeElement.nodeName.toLowerCase()&&e(i.activeElement).blur()}catch(s){}},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===e(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._normalizeRightBottom(),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(e){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:e.pageX-this.offset.left,top:e.pageY-this.offset.top}},_mouseDrag:function(t,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,s=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.focus(),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper),n=s?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(e){return/(html|body)/i.test(e.tagName)||e===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var e=this.element.position(),t=this._isRootNode(this.scrollParent[0]);return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+(t?0:this.scrollParent.scrollTop()),left:e.left-(parseInt(this.helper.css("left"),10)||0)+(t?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options,a=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,e(a).width()-this.helperProportions.width-this.margins.left,(e(a).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=e(n.containment),s=i[0],s&&(t=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)
},_convertPositionTo:function(e,t){t||(t=this.position);var i="absolute"===e?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:t.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:t.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(e,t){var i,s,n,a,o=this.options,r=this._isRootNode(this.scrollParent[0]),h=e.pageX,l=e.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),t&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,h=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a),"y"===o.axis&&(h=this.originalPageX),"x"===o.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i,s){var n=e.extend({},i,{item:s.element});s.sortables=[],e(s.options.connectToSortable).each(function(){var i=e(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",t,n))})},stop:function(t,i,s){var n=e.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,e.each(s.sortables,function(){var e=this;e.isOver?(e.isOver=0,s.cancelHelperRemoval=!0,e.cancelHelperRemoval=!1,e._storedCSS={position:e.placeholder.css("position"),top:e.placeholder.css("top"),left:e.placeholder.css("left")},e._mouseStop(t),e.options.helper=e.options._helper):(e.cancelHelperRemoval=!0,e._trigger("deactivate",t,n))})},drag:function(t,i,s){e.each(s.sortables,function(){var n=!1,a=this;a.positionAbs=s.positionAbs,a.helperProportions=s.helperProportions,a.offset.click=s.offset.click,a._intersectsWith(a.containerCache)&&(n=!0,e.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==a&&this._intersectsWith(this.containerCache)&&e.contains(a.element[0],this.element[0])&&(n=!1),n})),n?(a.isOver||(a.isOver=1,s._parent=i.helper.parent(),a.currentItem=i.helper.appendTo(a.element).data("ui-sortable-item",!0),a.options._helper=a.options.helper,a.options.helper=function(){return i.helper[0]},t.target=a.currentItem[0],a._mouseCapture(t,!0),a._mouseStart(t,!0,!0),a.offset.click.top=s.offset.click.top,a.offset.click.left=s.offset.click.left,a.offset.parent.left-=s.offset.parent.left-a.offset.parent.left,a.offset.parent.top-=s.offset.parent.top-a.offset.parent.top,s._trigger("toSortable",t),s.dropped=a.element,e.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,a.fromOutside=s),a.currentItem&&(a._mouseDrag(t),i.position=a.position)):a.isOver&&(a.isOver=0,a.cancelHelperRemoval=!0,a.options._revert=a.options.revert,a.options.revert=!1,a._trigger("out",t,a._uiHash(a)),a._mouseStop(t,!0),a.options.revert=a.options._revert,a.options.helper=a.options._helper,a.placeholder&&a.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(t),i.position=s._generatePosition(t,!0),s._trigger("fromSortable",t),s.dropped=!1,e.each(s.sortables,function(){this.refreshPositions()}))})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,i,s){var n=e("body"),a=s.options;n.css("cursor")&&(a._cursor=n.css("cursor")),n.css("cursor",a.cursor)},stop:function(t,i,s){var n=s.options;n._cursor&&e("body").css("cursor",n._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("opacity")&&(a._opacity=n.css("opacity")),n.css("opacity",a.opacity)},stop:function(t,i,s){var n=s.options;n._opacity&&e(i.helper).css("opacity",n._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(e,t,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(t,i,s){var n=s.options,a=!1,o=s.scrollParentNotHidden[0],r=s.document[0];o!==r&&"HTML"!==o.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+o.offsetHeight-t.pageY<n.scrollSensitivity?o.scrollTop=a=o.scrollTop+n.scrollSpeed:t.pageY-s.overflowOffset.top<n.scrollSensitivity&&(o.scrollTop=a=o.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+o.offsetWidth-t.pageX<n.scrollSensitivity?o.scrollLeft=a=o.scrollLeft+n.scrollSpeed:t.pageX-s.overflowOffset.left<n.scrollSensitivity&&(o.scrollLeft=a=o.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(t.pageY-e(r).scrollTop()<n.scrollSensitivity?a=e(r).scrollTop(e(r).scrollTop()-n.scrollSpeed):e(window).height()-(t.pageY-e(r).scrollTop())<n.scrollSensitivity&&(a=e(r).scrollTop(e(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(t.pageX-e(r).scrollLeft()<n.scrollSensitivity?a=e(r).scrollLeft(e(r).scrollLeft()-n.scrollSpeed):e(window).width()-(t.pageX-e(r).scrollLeft())<n.scrollSensitivity&&(a=e(r).scrollLeft(e(r).scrollLeft()+n.scrollSpeed)))),a!==!1&&e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(s,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,i,s){var n=s.options;s.snapElements=[],e(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var t=e(this),i=t.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:i.top,left:i.left})})},drag:function(t,i,s){var n,a,o,r,h,l,u,d,c,p,f=s.options,m=f.snapTolerance,g=i.offset.left,v=g+s.helperProportions.width,y=i.offset.top,b=y+s.helperProportions.height;for(c=s.snapElements.length-1;c>=0;c--)h=s.snapElements[c].left-s.margins.left,l=h+s.snapElements[c].width,u=s.snapElements[c].top-s.margins.top,d=u+s.snapElements[c].height,h-m>v||g>l+m||u-m>b||y>d+m||!e.contains(s.snapElements[c].item.ownerDocument,s.snapElements[c].item)?(s.snapElements[c].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=!1):("inner"!==f.snapMode&&(n=m>=Math.abs(u-b),a=m>=Math.abs(d-y),o=m>=Math.abs(h-v),r=m>=Math.abs(l-g),n&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),p=n||a||o||r,"outer"!==f.snapMode&&(n=m>=Math.abs(u-y),a=m>=Math.abs(d-b),o=m>=Math.abs(h-g),r=m>=Math.abs(l-v),n&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d-s.helperProportions.height,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[c].snapping&&(n||a||o||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=n||a||o||r||p)}}),e.ui.plugin.add("draggable","stack",{start:function(t,i,s){var n,a=s.options,o=e.makeArray(e(a.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});o.length&&(n=parseInt(e(o[0]).css("zIndex"),10)||0,e(o).each(function(t){e(this).css("zIndex",n+t)}),this.css("zIndex",n+o.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("zIndex")&&(a._zIndex=n.css("zIndex")),n.css("zIndex",a.zIndex)},stop:function(t,i,s){var n=s.options;n._zIndex&&e(i.helper).css("zIndex",n._zIndex)}}),e.ui.draggable,e.widget("ui.resizable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(e){return parseInt(e,10)||0},_isNumber:function(e){return!isNaN(parseInt(e,10))},_hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return t[s]>0?!0:(t[s]=1,n=t[s]>0,t[s]=0,n)},_create:function(){var t,i,s,n,a,o=this,r=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=e(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;t.length>i;i++)s=e.trim(t[i]),a="ui-resizable-"+s,n=e("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(t){var i,s,n,a;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=e(this.handles[i]),this._on(this.handles[i],{mousedown:o._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=e(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(n,a),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(e(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){r.disabled||o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,s,n=!1;for(i in this.handles)s=e(this.handles[i])[0],(s===t.target||e.contains(s,t.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(t){var i,s,n,a=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),a.containment&&(i+=e(a.containment).scrollLeft()||0,s+=e(a.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio="number"==typeof a.aspectRatio?a.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===n?this.axis+"-resize":n),o.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var i,s,n=this.originalMousePosition,a=this.axis,o=t.pageX-n.left||0,r=t.pageY-n.top||0,h=this._change[a];return this._updatePrevProperties(),h?(i=h.apply(this,[t,o,r]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",t,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,s,n,a,o,r,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:u.sizeDiff.height,a=s?0:u.sizeDiff.width,o={width:u.helper.width()-a,height:u.helper.height()-n},r=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(e.extend(o,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var e={};return this.position.top!==this.prevPosition.top&&(e.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(e.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(e.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(e.height=this.size.height+"px"),this.helper.css(e),e},_updateVirtualBoundaries:function(e){var t,i,s,n,a,o=this.options;a={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:1/0,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||e)&&(t=a.minHeight*this.aspectRatio,s=a.minWidth/this.aspectRatio,i=a.maxHeight*this.aspectRatio,n=a.maxWidth/this.aspectRatio,t>a.minWidth&&(a.minWidth=t),s>a.minHeight&&(a.minHeight=s),a.maxWidth>i&&(a.maxWidth=i),a.maxHeight>n&&(a.maxHeight=n)),this._vBoundaries=a},_updateCache:function(e){this.offset=this.helper.offset(),this._isNumber(e.left)&&(this.position.left=e.left),this._isNumber(e.top)&&(this.position.top=e.top),this._isNumber(e.height)&&(this.size.height=e.height),this._isNumber(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,i=this.size,s=this.axis;return this._isNumber(e.height)?e.width=e.height*this.aspectRatio:this._isNumber(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===s&&(e.left=t.left+(i.width-e.width),e.top=null),"nw"===s&&(e.top=t.top+(i.height-e.height),e.left=t.left+(i.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,i=this.axis,s=this._isNumber(e.width)&&t.maxWidth&&t.maxWidth<e.width,n=this._isNumber(e.height)&&t.maxHeight&&t.maxHeight<e.height,a=this._isNumber(e.width)&&t.minWidth&&t.minWidth>e.width,o=this._isNumber(e.height)&&t.minHeight&&t.minHeight>e.height,r=this.originalPosition.left+this.originalSize.width,h=this.position.top+this.size.height,l=/sw|nw|w/.test(i),u=/nw|ne|n/.test(i);return a&&(e.width=t.minWidth),o&&(e.height=t.minHeight),s&&(e.width=t.maxWidth),n&&(e.height=t.maxHeight),a&&l&&(e.left=r-t.minWidth),s&&l&&(e.left=r-t.maxWidth),o&&u&&(e.top=h-t.minHeight),n&&u&&(e.top=h-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_getPaddingPlusBorderDimensions:function(e){for(var t=0,i=[],s=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],n=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];4>t;t++)i[t]=parseInt(s[t],10)||0,i[t]+=parseInt(n[t],10)||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var e,t=0,i=this.helper||this.element;this._proportionallyResizeElements.length>t;t++)e=this._proportionallyResizeElements[t],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(e)),e.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&e(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var t,i,s,n,a,o,r,h=e(this).resizable("instance"),l=h.options,u=h.element,d=l.containment,c=d instanceof e?d.get(0):/parent/.test(d)?u.parent().get(0):d;c&&(h.containerElement=e(c),/document/.test(d)||d===document?(h.containerOffset={left:0,top:0},h.containerPosition={left:0,top:0},h.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(t=e(c),i=[],e(["Top","Right","Left","Bottom"]).each(function(e,s){i[e]=h._num(t.css("padding"+s))}),h.containerOffset=t.offset(),h.containerPosition=t.position(),h.containerSize={height:t.innerHeight()-i[3],width:t.innerWidth()-i[1]},s=h.containerOffset,n=h.containerSize.height,a=h.containerSize.width,o=h._hasScroll(c,"left")?c.scrollWidth:a,r=h._hasScroll(c)?c.scrollHeight:n,h.parentData={element:c,left:s.left,top:s.top,width:o,height:r}))},resize:function(t){var i,s,n,a,o=e(this).resizable("instance"),r=o.options,h=o.containerOffset,l=o.position,u=o._aspectRatio||t.shiftKey,d={top:0,left:0},c=o.containerElement,p=!0;c[0]!==document&&/static/.test(c.css("position"))&&(d=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-d.left),u&&(o.size.height=o.size.width/o.aspectRatio,p=!1),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),u&&(o.size.width=o.size.height*o.aspectRatio,p=!1),o.position.top=o._helper?h.top:0),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),i=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-d.left:o.offset.left-h.left)),s=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-d.top:o.offset.top-h.top)),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,u&&(o.size.height=o.size.width/o.aspectRatio,p=!1)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,u&&(o.size.width=o.size.height*o.aspectRatio,p=!1)),p||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var t=e(this).resizable("instance"),i=t.options,s=t.containerOffset,n=t.containerPosition,a=t.containerElement,o=e(t.helper),r=o.offset(),h=o.outerWidth()-t.sizeDiff.width,l=o.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).resizable("instance"),i=t.options;e(i.alsoResize).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})},resize:function(t,i){var s=e(this).resizable("instance"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0};e(n.alsoResize).each(function(){var t=e(this),s=e(this).data("ui-resizable-alsoresize"),n={},a=t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(a,function(e,t){var i=(s[t]||0)+(r[t]||0);i&&i>=0&&(n[t]=i||null)}),t.css(n)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).resizable("instance"),i=t.options,s=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).resizable("instance");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).resizable("instance");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t,i=e(this).resizable("instance"),s=i.options,n=i.size,a=i.originalSize,o=i.originalPosition,r=i.axis,h="number"==typeof s.grid?[s.grid,s.grid]:s.grid,l=h[0]||1,u=h[1]||1,d=Math.round((n.width-a.width)/l)*l,c=Math.round((n.height-a.height)/u)*u,p=a.width+d,f=a.height+c,m=s.maxWidth&&p>s.maxWidth,g=s.maxHeight&&f>s.maxHeight,v=s.minWidth&&s.minWidth>p,y=s.minHeight&&s.minHeight>f;s.grid=h,v&&(p+=l),y&&(f+=u),m&&(p-=l),g&&(f-=u),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=o.top-c):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=o.left-d):((0>=f-u||0>=p-l)&&(t=i._getPaddingPlusBorderDimensions(this)),f-u>0?(i.size.height=f,i.position.top=o.top-c):(f=u-t.height,i.size.height=f,i.position.top=o.top+a.height-f),p-l>0?(i.size.width=p,i.position.left=o.left-d):(p=l-t.width,i.size.width=p,i.position.left=o.left+a.width-p))}}),e.ui.resizable,e.widget("ui.dialog",{version:"1.11.4",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"Close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var i=e(this).css(t).offset().top;0>i&&e(this).css("top",t.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&e.fn.draggable&&this._makeDraggable(),this.options.resizable&&e.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?e(t):this.document.find(t||"body").eq(0)},_destroy:function(){var e,t=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:e.noop,enable:e.noop,close:function(t){var i,s=this;if(this._isOpen&&this._trigger("beforeClose",t)!==!1){if(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),!this.opener.filter(":focusable").focus().length)try{i=this.document[0].activeElement,i&&"body"!==i.nodeName.toLowerCase()&&e(i).blur()}catch(n){}this._hide(this.uiDialog,this.options.hide,function(){s._trigger("close",t)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,i){var s=!1,n=this.uiDialog.siblings(".ui-front:visible").map(function(){return+e(this).css("z-index")}).get(),a=Math.max.apply(null,n);return a>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",a+1),s=!0),s&&!i&&this._trigger("focus",t),s},open:function(){var t=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),void 0):(this._isOpen=!0,this.opener=e(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){t._focusTabbable(),t._trigger("focus")}),this._makeFocusTarget(),this._trigger("open"),void 0)},_focusTabbable:function(){var e=this._focusedElement;e||(e=this.element.find("[autofocus]")),e.length||(e=this.element.find(":tabbable")),e.length||(e=this.uiDialogButtonPane.find(":tabbable")),e.length||(e=this.uiDialogTitlebarClose.filter(":tabbable")),e.length||(e=this.uiDialog),e.eq(0).focus()},_keepFocus:function(t){function i(){var t=this.document[0].activeElement,i=this.uiDialog[0]===t||e.contains(this.uiDialog[0],t);i||this._focusTabbable()}t.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE)return t.preventDefault(),this.close(t),void 0;
if(t.keyCode===e.ui.keyCode.TAB&&!t.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");t.target!==n[0]&&t.target!==this.uiDialog[0]||t.shiftKey?t.target!==s[0]&&t.target!==this.uiDialog[0]||!t.shiftKey||(this._delay(function(){n.focus()}),t.preventDefault()):(this._delay(function(){s.focus()}),t.preventDefault())}},mousedown:function(e){this._moveToTop(e)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(t){e(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=e("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(e){e.preventDefault(),this.close(e)}}),t=e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(t),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(e){this.options.title||e.html("&#160;"),e.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var t=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),e.isEmptyObject(i)||e.isArray(i)&&!i.length?(this.uiDialog.removeClass("ui-dialog-buttons"),void 0):(e.each(i,function(i,s){var n,a;s=e.isFunction(s)?{click:s,text:i}:s,s=e.extend({type:"button"},s),n=s.click,s.click=function(){n.apply(t.element[0],arguments)},a={icons:s.icons,text:s.showText},delete s.icons,delete s.showText,e("<button></button>",s).button(a).appendTo(t.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),void 0)},_makeDraggable:function(){function t(e){return{position:e.position,offset:e.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){e(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,t(n))},drag:function(e,s){i._trigger("drag",e,t(s))},stop:function(n,a){var o=a.offset.left-i.document.scrollLeft(),r=a.offset.top-i.document.scrollTop();s.position={my:"left top",at:"left"+(o>=0?"+":"")+o+" "+"top"+(r>=0?"+":"")+r,of:i.window},e(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,t(a))}})},_makeResizable:function(){function t(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}var i=this,s=this.options,n=s.resizable,a=this.uiDialog.css("position"),o="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:o,start:function(s,n){e(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,t(n))},resize:function(e,s){i._trigger("resize",e,t(s))},stop:function(n,a){var o=i.uiDialog.offset(),r=o.left-i.document.scrollLeft(),h=o.top-i.document.scrollTop();s.height=i.uiDialog.height(),s.width=i.uiDialog.width(),s.position={my:"left top",at:"left"+(r>=0?"+":"")+r+" "+"top"+(h>=0?"+":"")+h,of:i.window},e(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,t(a))}}).css("position",a)},_trackFocus:function(){this._on(this.widget(),{focusin:function(t){this._makeFocusTarget(),this._focusedElement=e(t.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var t=this._trackingInstances(),i=e.inArray(this,t);-1!==i&&t.splice(i,1)},_trackingInstances:function(){var e=this.document.data("ui-dialog-instances");return e||(e=[],this.document.data("ui-dialog-instances",e)),e},_minHeight:function(){var e=this.options;return"auto"===e.height?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(){var e=this.uiDialog.is(":visible");e||this.uiDialog.show(),this.uiDialog.position(this.options.position),e||this.uiDialog.hide()},_setOptions:function(t){var i=this,s=!1,n={};e.each(t,function(e,t){i._setOption(e,t),e in i.sizeRelatedOptions&&(s=!0),e in i.resizableRelatedOptions&&(n[e]=t)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",n)},_setOption:function(e,t){var i,s,n=this.uiDialog;"dialogClass"===e&&n.removeClass(this.options.dialogClass).addClass(t),"disabled"!==e&&(this._super(e,t),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:""+t}),"draggable"===e&&(i=n.is(":data(ui-draggable)"),i&&!t&&n.draggable("destroy"),!i&&t&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(s=n.is(":data(ui-resizable)"),s&&!t&&n.resizable("destroy"),s&&"string"==typeof t&&n.resizable("option","handles",t),s||t===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var e,t,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),e=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),t=Math.max(0,s.minHeight-e),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-e):"none","auto"===s.height?this.element.css({minHeight:t,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-e)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=e(this);return e("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return e(t.target).closest(".ui-dialog").length?!0:!!e(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var t=!0;this._delay(function(){t=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(e){t||this._allowInteraction(e)||(e.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var e=this.document.data("ui-dialog-overlays")-1;e?this.document.data("ui-dialog-overlays",e):this.document.unbind("focusin").removeData("ui-dialog-overlays"),this.overlay.remove(),this.overlay=null}}}),e.widget("ui.droppable",{version:"1.11.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=e.isFunction(s)?s:function(e){return e.is(s)},this.proportions=function(){return arguments.length?(t=arguments[0],void 0):t?t:t={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&&this.element.addClass("ui-droppable")},_addToManager:function(t){e.ui.ddmanager.droppables[t]=e.ui.ddmanager.droppables[t]||[],e.ui.ddmanager.droppables[t].push(this)},_splice:function(e){for(var t=0;e.length>t;t++)e[t]===this&&e.splice(t,1)},_destroy:function(){var t=e.ui.ddmanager.droppables[this.options.scope];this._splice(t),this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,i){if("accept"===t)this.accept=e.isFunction(i)?i:function(e){return e.is(i)};else if("scope"===t){var s=e.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(t,i)},_activate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var s=i||e.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=e(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&e.ui.intersect(s,e.extend(i,{offset:i.element.offset()}),i.options.tolerance,t)?(n=!0,!1):void 0}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(s)),this.element):!1):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(){function e(e,t,i){return e>=t&&t+i>e}return function(t,i,s,n){if(!i.offset)return!1;var a=(t.positionAbs||t.position.absolute).left+t.margins.left,o=(t.positionAbs||t.position.absolute).top+t.margins.top,r=a+t.helperProportions.width,h=o+t.helperProportions.height,l=i.offset.left,u=i.offset.top,d=l+i.proportions().width,c=u+i.proportions().height;switch(s){case"fit":return a>=l&&d>=r&&o>=u&&c>=h;case"intersect":return a+t.helperProportions.width/2>l&&d>r-t.helperProportions.width/2&&o+t.helperProportions.height/2>u&&c>h-t.helperProportions.height/2;case"pointer":return e(n.pageY,u,i.proportions().height)&&e(n.pageX,l,i.proportions().width);case"touch":return(o>=u&&c>=o||h>=u&&c>=h||u>o&&h>c)&&(a>=l&&d>=a||r>=l&&d>=r||l>a&&r>d);default:return!1}}}(),e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,i){var s,n,a=e.ui.ddmanager.droppables[t.options.scope]||[],o=i?i.type:null,r=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(s=0;a.length>s;s++)if(!(a[s].options.disabled||t&&!a[s].accept.call(a[s].element[0],t.currentItem||t.element))){for(n=0;r.length>n;n++)if(r[n]===a[s].element[0]){a[s].proportions().height=0;continue e}a[s].visible="none"!==a[s].element.css("display"),a[s].visible&&("mousedown"===o&&a[s]._activate.call(a[s],i),a[s].offset=a[s].element.offset(),a[s].proportions({width:a[s].element[0].offsetWidth,height:a[s].element[0].offsetHeight}))}},drop:function(t,i){var s=!1;return e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(t,i){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)})},drag:function(t,i){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,i),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,a,o=e.ui.intersect(t,this,this.options.tolerance,i),r=!o&&this.isover?"isout":o&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,a=this.element.parents(":data(ui-droppable)").filter(function(){return e(this).droppable("instance").options.scope===n}),a.length&&(s=e(a[0]).droppable("instance"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(t,i){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}},e.ui.droppable;var y="ui-effects-",b=e;e.effects={effect:{}},function(e,t){function i(e,t,i){var s=d[t.type]||{};return null==e?i||!t.def?null:t.def:(e=s.floor?~~e:parseFloat(e),isNaN(e)?t.def:s.mod?(e+s.mod)%s.mod:0>e?0:e>s.max?s.max:e)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(e,a){var o,r=a.re.exec(i),h=r&&a.parse(r),l=a.space||"rgba";return h?(o=s[l](h),s[u[l].cache]=o[u[l].cache],n=s._rgba=o._rgba,!1):t}),n.length?("0,0,0,0"===n.join()&&e.extend(n,a.transparent),s):a[i]}function n(e,t,i){return i=(i+1)%1,1>6*i?e+6*(t-e)*i:1>2*i?t:2>3*i?e+6*(t-e)*(2/3-i):e}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],l=e.Color=function(t,i,s,n){return new e.Color.fn.parse(t,i,s,n)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},d={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},c=l.support={},p=e("<p>")[0],f=e.each;p.style.cssText="background-color:rgba(1,1,1,.5)",c.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(u,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),l.fn=e.extend(l.prototype,{parse:function(n,o,r,h){if(n===t)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=e(n).css(o),o=t);var d=this,c=e.type(n),p=this._rgba=[];return o!==t&&(n=[n,o,r,h],c="array"),"string"===c?this.parse(s(n)||a._default):"array"===c?(f(u.rgba.props,function(e,t){p[t.idx]=i(n[t.idx],t)}),this):"object"===c?(n instanceof l?f(u,function(e,t){n[t.cache]&&(d[t.cache]=n[t.cache].slice())}):f(u,function(t,s){var a=s.cache;f(s.props,function(e,t){if(!d[a]&&s.to){if("alpha"===e||null==n[e])return;d[a]=s.to(d._rgba)}d[a][t.idx]=i(n[e],t,!0)}),d[a]&&0>e.inArray(null,d[a].slice(0,3))&&(d[a][3]=1,s.from&&(d._rgba=s.from(d[a])))}),this):t},is:function(e){var i=l(e),s=!0,n=this;return f(u,function(e,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(e,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:t})),s}),s},_space:function(){var e=[],t=this;return f(u,function(i,s){t[s.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var s=l(e),n=s._space(),a=u[n],o=0===this.alpha()?l("transparent"):this,r=o[a.cache]||a.to(o._rgba),h=r.slice();return s=s[a.cache],f(a.props,function(e,n){var a=n.idx,o=r[a],l=s[a],u=d[n.type]||{};null!==l&&(null===o?h[a]=l:(u.mod&&(l-o>u.mod/2?o+=u.mod:o-l>u.mod/2&&(o-=u.mod)),h[a]=i((l-o)*t+o,n)))}),this[n](h)},blend:function(t){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(t)._rgba;return l(e.map(i,function(e,t){return(1-s)*n[t]+s*e}))},toRgbaString:function(){var t="rgba(",i=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),t="rgb("),t+i.join()+")"},toHslaString:function(){var t="hsla(",i=e.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),t="hsl("),t+i.join()+")"},toHexString:function(t){var i=this._rgba.slice(),s=i.pop();return t&&i.push(~~(255*s)),"#"+e.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,u.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,s=e[0]/255,n=e[1]/255,a=e[2]/255,o=e[3],r=Math.max(s,n,a),h=Math.min(s,n,a),l=r-h,u=r+h,d=.5*u;return t=h===r?0:s===r?60*(n-a)/l+360:n===r?60*(a-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=d?l/u:l/(2-u),[Math.round(t)%360,i,d,null==o?1:o]},u.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],s=e[2],a=e[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,t+1/3)),Math.round(255*n(r,o,t)),Math.round(255*n(r,o,t-1/3)),a]},f(u,function(s,n){var a=n.props,o=n.cache,h=n.to,u=n.from;l.fn[s]=function(s){if(h&&!this[o]&&(this[o]=h(this._rgba)),s===t)return this[o].slice();var n,r=e.type(s),d="array"===r||"object"===r?s:arguments,c=this[o].slice();return f(a,function(e,t){var s=d["object"===r?e:t.idx];null==s&&(s=c[t.idx]),c[t.idx]=i(s,t)}),u?(n=l(u(c)),n[o]=c,n):l(c)},f(a,function(t,i){l.fn[t]||(l.fn[t]=function(n){var a,o=e.type(n),h="alpha"===t?this._hsla?"hsla":"rgba":s,l=this[h](),u=l[i.idx];return"undefined"===o?u:("function"===o&&(n=n.call(this,u),o=e.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=u+parseFloat(a[2])*("+"===a[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(t){var i=t.split(" ");f(i,function(t,i){e.cssHooks[i]={set:function(t,n){var a,o,r="";if("transparent"!==n&&("string"!==e.type(n)||(a=s(n)))){if(n=l(a||n),!c.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?t.parentNode:t;(""===r||"transparent"===r)&&o&&o.style;)try{r=e.css(o,"backgroundColor"),o=o.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{t.style[i]=n}catch(h){}}},e.fx.step[i]=function(t){t.colorInit||(t.start=l(t.elem,i),t.end=l(t.end),t.colorInit=!0),e.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}})},l.hook(o),e.cssHooks.borderColor={expand:function(e){var t={};return f(["Top","Right","Bottom","Left"],function(i,s){t["border"+s+"Color"]=e}),t}},a=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(b),function(){function t(t){var i,s,n=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[e.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function i(t,i){var s,a,o={};for(s in i)a=i[s],t[s]!==a&&(n[s]||(e.fx.step[s]||!isNaN(parseFloat(a)))&&(o[s]=a));return o}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,i){e.fx.step[i]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(b.style(e.elem,i,e.end),e.setAttr=!0)}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(n,a,o,r){var h=e.speed(a,o,r);return this.queue(function(){var a,o=e(this),r=o.attr("class")||"",l=h.children?o.find("*").addBack():o;l=l.map(function(){var i=e(this);return{el:i,start:t(this)}}),a=function(){e.each(s,function(e,t){n[t]&&o[t+"Class"](n[t])})},a(),l=l.map(function(){return this.end=t(this.el[0]),this.diff=i(this.start,this.end),this}),o.attr("class",r),l=l.map(function(){var t=this,i=e.Deferred(),s=e.extend({},h,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,s),i.promise()}),e.when.apply(e,l.get()).done(function(){a(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),h.complete.call(o[0])})})},e.fn.extend({addClass:function(t){return function(i,s,n,a){return s?e.effects.animateClass.call(this,{add:i},s,n,a):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(i,s,n,a){return arguments.length>1?e.effects.animateClass.call(this,{remove:i},s,n,a):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(t){return function(i,s,n,a,o){return"boolean"==typeof s||void 0===s?n?e.effects.animateClass.call(this,s?{add:i}:{remove:i},n,a,o):t.apply(this,arguments):e.effects.animateClass.call(this,{toggle:i},s,n,a)}}(e.fn.toggleClass),switchClass:function(t,i,s,n,a){return e.effects.animateClass.call(this,{add:i,remove:t},s,n,a)}})}(),function(){function t(t,i,s,n){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(n=s,s=i,i={}),e.isFunction(s)&&(n=s,s=null),i&&e.extend(t,i),s=s||i.duration,t.duration=e.fx.off?0:"number"==typeof s?s:s in e.fx.speeds?e.fx.speeds[s]:e.fx.speeds._default,t.complete=n||i.complete,t}function i(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?e.isFunction(t)?!0:"object"!=typeof t||t.effect?!1:!0:!0}e.extend(e.effects,{version:"1.11.4",save:function(e,t){for(var i=0;t.length>i;i++)null!==t[i]&&e.data(y+t[i],e[0].style[t[i]])},restore:function(e,t){var i,s;for(s=0;t.length>s;s++)null!==t[s]&&(i=e.data(y+t[s]),void 0===i&&(i=""),e.css(t[s],i))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,s;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=e[1]/t.width}return{x:s,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},s=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:t.width(),height:t.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return t.wrap(s),(t[0]===a||e.contains(t[0],a))&&e(a).focus(),s=t.parent(),"static"===t.css("position")?(s.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,s){i[s]=t.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(n),s.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,s,n){return n=n||{},e.each(i,function(e,i){var a=t.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),e.fn.extend({effect:function(){function i(t){function i(){e.isFunction(a)&&a.call(n[0]),e.isFunction(t)&&t()}var n=e(this),a=s.complete,r=s.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),i()):o.call(n[0],s,i)}var s=t.apply(this,arguments),n=s.mode,a=s.queue,o=e.effects.effect[s.effect];return e.fx.off||!o?n?this[n](s.duration,s.complete):this.each(function(){s.complete&&s.complete.call(this)}):a===!1?this.each(i):this.queue(a||"fx",i)},show:function(e){return function(s){if(i(s))return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="show",this.effect.call(this,n)}}(e.fn.show),hide:function(e){return function(s){if(i(s))return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(e.fn.hide),toggle:function(e){return function(s){if(i(s)||"boolean"==typeof s)return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(e.fn.toggle),cssUnit:function(t){var i=this.css(t),s=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(s=[parseFloat(i),t])}),s}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;((t=Math.pow(2,--i))-1)/11>e;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?i(2*e)/2:1-i(-2*e+2)/2}})}(),e.effects,e.effects.effect.blind=function(t,i){var s,n,a,o=e(this),r=/up|down|vertical/,h=/up|left|vertical|horizontal/,l=["position","top","bottom","left","right","height","width"],u=e.effects.setMode(o,t.mode||"hide"),d=t.direction||"up",c=r.test(d),p=c?"height":"width",f=c?"top":"left",m=h.test(d),g={},v="show"===u;o.parent().is(".ui-effects-wrapper")?e.effects.save(o.parent(),l):e.effects.save(o,l),o.show(),s=e.effects.createWrapper(o).css({overflow:"hidden"}),n=s[p](),a=parseFloat(s.css(f))||0,g[p]=v?n:0,m||(o.css(c?"bottom":"right",0).css(c?"top":"left","auto").css({position:"absolute"}),g[f]=v?a:n+a),v&&(s.css(p,0),m||s.css(f,a+n)),s.animate(g,{duration:t.duration,easing:t.easing,queue:!1,complete:function(){"hide"===u&&o.hide(),e.effects.restore(o,l),e.effects.removeWrapper(o),i()}})},e.effects.effect.bounce=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","height","width"],h=e.effects.setMode(o,t.mode||"effect"),l="hide"===h,u="show"===h,d=t.direction||"up",c=t.distance,p=t.times||5,f=2*p+(u||l?1:0),m=t.duration/f,g=t.easing,v="up"===d||"down"===d?"top":"left",y="up"===d||"left"===d,b=o.queue(),_=b.length;for((u||l)&&r.push("opacity"),e.effects.save(o,r),o.show(),e.effects.createWrapper(o),c||(c=o["top"===v?"outerHeight":"outerWidth"]()/3),u&&(a={opacity:1},a[v]=0,o.css("opacity",0).css(v,y?2*-c:2*c).animate(a,m,g)),l&&(c/=Math.pow(2,p-1)),a={},a[v]=0,s=0;p>s;s++)n={},n[v]=(y?"-=":"+=")+c,o.animate(n,m,g).animate(a,m,g),c=l?2*c:c/2;l&&(n={opacity:0},n[v]=(y?"-=":"+=")+c,o.animate(n,m,g)),o.queue(function(){l&&o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}),_>1&&b.splice.apply(b,[1,0].concat(b.splice(_,f+1))),o.dequeue()},e.effects.effect.clip=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","height","width"],h=e.effects.setMode(o,t.mode||"hide"),l="show"===h,u=t.direction||"vertical",d="vertical"===u,c=d?"height":"width",p=d?"top":"left",f={};e.effects.save(o,r),o.show(),s=e.effects.createWrapper(o).css({overflow:"hidden"}),n="IMG"===o[0].tagName?s:o,a=n[c](),l&&(n.css(c,0),n.css(p,a/2)),f[c]=l?a:0,f[p]=l?0:a/2,n.animate(f,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){l||o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}})},e.effects.effect.drop=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","opacity","height","width"],o=e.effects.setMode(n,t.mode||"hide"),r="show"===o,h=t.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h?"pos":"neg",d={opacity:r?1:0};e.effects.save(n,a),n.show(),e.effects.createWrapper(n),s=t.distance||n["top"===l?"outerHeight":"outerWidth"](!0)/2,r&&n.css("opacity",0).css(l,"pos"===u?-s:s),d[l]=(r?"pos"===u?"+=":"-=":"pos"===u?"-=":"+=")+s,n.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}})},e.effects.effect.explode=function(t,i){function s(){b.push(this),b.length===d*c&&n()}function n(){p.css({visibility:"visible"}),e(b).remove(),m||p.hide(),i()}var a,o,r,h,l,u,d=t.pieces?Math.round(Math.sqrt(t.pieces)):3,c=d,p=e(this),f=e.effects.setMode(p,t.mode||"hide"),m="show"===f,g=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/c),y=Math.ceil(p.outerHeight()/d),b=[];for(a=0;d>a;a++)for(h=g.top+a*y,u=a-(d-1)/2,o=0;c>o;o++)r=g.left+o*v,l=o-(c-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*v,top:-a*y}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:y,left:r+(m?l*v:0),top:h+(m?u*y:0),opacity:m?0:1}).animate({left:r+(m?0:l*v),top:h+(m?0:u*y),opacity:m?1:0},t.duration||500,t.easing,s)},e.effects.effect.fade=function(t,i){var s=e(this),n=e.effects.setMode(s,t.mode||"toggle");s.animate({opacity:n},{queue:!1,duration:t.duration,easing:t.easing,complete:i})},e.effects.effect.fold=function(t,i){var s,n,a=e(this),o=["position","top","bottom","left","right","height","width"],r=e.effects.setMode(a,t.mode||"hide"),h="show"===r,l="hide"===r,u=t.size||15,d=/([0-9]+)%/.exec(u),c=!!t.horizFirst,p=h!==c,f=p?["width","height"]:["height","width"],m=t.duration/2,g={},v={};e.effects.save(a,o),a.show(),s=e.effects.createWrapper(a).css({overflow:"hidden"}),n=p?[s.width(),s.height()]:[s.height(),s.width()],d&&(u=parseInt(d[1],10)/100*n[l?0:1]),h&&s.css(c?{height:0,width:u}:{height:u,width:0}),g[f[0]]=h?n[0]:u,v[f[1]]=h?n[1]:0,s.animate(g,m,t.easing).animate(v,m,t.easing,function(){l&&a.hide(),e.effects.restore(a,o),e.effects.removeWrapper(a),i()})},e.effects.effect.highlight=function(t,i){var s=e(this),n=["backgroundImage","backgroundColor","opacity"],a=e.effects.setMode(s,t.mode||"show"),o={backgroundColor:s.css("backgroundColor")};"hide"===a&&(o.opacity=0),e.effects.save(s,n),s.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(o,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===a&&s.hide(),e.effects.restore(s,n),i()}})},e.effects.effect.size=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","width","height","overflow","opacity"],h=["position","top","bottom","left","right","overflow","opacity"],l=["width","height","overflow"],u=["fontSize"],d=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],c=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=e.effects.setMode(o,t.mode||"effect"),f=t.restore||"effect"!==p,m=t.scale||"both",g=t.origin||["middle","center"],v=o.css("position"),y=f?r:h,b={height:0,width:0,outerHeight:0,outerWidth:0};"show"===p&&o.show(),s={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},"toggle"===t.mode&&"show"===p?(o.from=t.to||b,o.to=t.from||s):(o.from=t.from||("show"===p?b:s),o.to=t.to||("hide"===p?b:s)),a={from:{y:o.from.height/s.height,x:o.from.width/s.width},to:{y:o.to.height/s.height,x:o.to.width/s.width}},("box"===m||"both"===m)&&(a.from.y!==a.to.y&&(y=y.concat(d),o.from=e.effects.setTransition(o,d,a.from.y,o.from),o.to=e.effects.setTransition(o,d,a.to.y,o.to)),a.from.x!==a.to.x&&(y=y.concat(c),o.from=e.effects.setTransition(o,c,a.from.x,o.from),o.to=e.effects.setTransition(o,c,a.to.x,o.to))),("content"===m||"both"===m)&&a.from.y!==a.to.y&&(y=y.concat(u).concat(l),o.from=e.effects.setTransition(o,u,a.from.y,o.from),o.to=e.effects.setTransition(o,u,a.to.y,o.to)),e.effects.save(o,y),o.show(),e.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),g&&(n=e.effects.getBaseline(g,s),o.from.top=(s.outerHeight-o.outerHeight())*n.y,o.from.left=(s.outerWidth-o.outerWidth())*n.x,o.to.top=(s.outerHeight-o.to.outerHeight)*n.y,o.to.left=(s.outerWidth-o.to.outerWidth)*n.x),o.css(o.from),("content"===m||"both"===m)&&(d=d.concat(["marginTop","marginBottom"]).concat(u),c=c.concat(["marginLeft","marginRight"]),l=r.concat(d).concat(c),o.find("*[width]").each(function(){var i=e(this),s={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};
f&&e.effects.save(i,l),i.from={height:s.height*a.from.y,width:s.width*a.from.x,outerHeight:s.outerHeight*a.from.y,outerWidth:s.outerWidth*a.from.x},i.to={height:s.height*a.to.y,width:s.width*a.to.x,outerHeight:s.height*a.to.y,outerWidth:s.width*a.to.x},a.from.y!==a.to.y&&(i.from=e.effects.setTransition(i,d,a.from.y,i.from),i.to=e.effects.setTransition(i,d,a.to.y,i.to)),a.from.x!==a.to.x&&(i.from=e.effects.setTransition(i,c,a.from.x,i.from),i.to=e.effects.setTransition(i,c,a.to.x,i.to)),i.css(i.from),i.animate(i.to,t.duration,t.easing,function(){f&&e.effects.restore(i,l)})})),o.animate(o.to,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){0===o.to.opacity&&o.css("opacity",o.from.opacity),"hide"===p&&o.hide(),e.effects.restore(o,y),f||("static"===v?o.css({position:"relative",top:o.to.top,left:o.to.left}):e.each(["top","left"],function(e,t){o.css(t,function(t,i){var s=parseInt(i,10),n=e?o.to.left:o.to.top;return"auto"===i?n+"px":s+n+"px"})})),e.effects.removeWrapper(o),i()}})},e.effects.effect.scale=function(t,i){var s=e(this),n=e.extend(!0,{},t),a=e.effects.setMode(s,t.mode||"effect"),o=parseInt(t.percent,10)||(0===parseInt(t.percent,10)?0:"hide"===a?0:100),r=t.direction||"both",h=t.origin,l={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},u={y:"horizontal"!==r?o/100:1,x:"vertical"!==r?o/100:1};n.effect="size",n.queue=!1,n.complete=i,"effect"!==a&&(n.origin=h||["middle","center"],n.restore=!0),n.from=t.from||("show"===a?{height:0,width:0,outerHeight:0,outerWidth:0}:l),n.to={height:l.height*u.y,width:l.width*u.x,outerHeight:l.outerHeight*u.y,outerWidth:l.outerWidth*u.x},n.fade&&("show"===a&&(n.from.opacity=0,n.to.opacity=1),"hide"===a&&(n.from.opacity=1,n.to.opacity=0)),s.effect(n)},e.effects.effect.puff=function(t,i){var s=e(this),n=e.effects.setMode(s,t.mode||"hide"),a="hide"===n,o=parseInt(t.percent,10)||150,r=o/100,h={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()};e.extend(t,{effect:"scale",queue:!1,fade:!0,mode:n,complete:i,percent:a?o:100,from:a?h:{height:h.height*r,width:h.width*r,outerHeight:h.outerHeight*r,outerWidth:h.outerWidth*r}}),s.effect(t)},e.effects.effect.pulsate=function(t,i){var s,n=e(this),a=e.effects.setMode(n,t.mode||"show"),o="show"===a,r="hide"===a,h=o||"hide"===a,l=2*(t.times||5)+(h?1:0),u=t.duration/l,d=0,c=n.queue(),p=c.length;for((o||!n.is(":visible"))&&(n.css("opacity",0).show(),d=1),s=1;l>s;s++)n.animate({opacity:d},u,t.easing),d=1-d;n.animate({opacity:d},u,t.easing),n.queue(function(){r&&n.hide(),i()}),p>1&&c.splice.apply(c,[1,0].concat(c.splice(p,l+1))),n.dequeue()},e.effects.effect.shake=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","height","width"],o=e.effects.setMode(n,t.mode||"effect"),r=t.direction||"left",h=t.distance||20,l=t.times||3,u=2*l+1,d=Math.round(t.duration/u),c="up"===r||"down"===r?"top":"left",p="up"===r||"left"===r,f={},m={},g={},v=n.queue(),y=v.length;for(e.effects.save(n,a),n.show(),e.effects.createWrapper(n),f[c]=(p?"-=":"+=")+h,m[c]=(p?"+=":"-=")+2*h,g[c]=(p?"-=":"+=")+2*h,n.animate(f,d,t.easing),s=1;l>s;s++)n.animate(m,d,t.easing).animate(g,d,t.easing);n.animate(m,d,t.easing).animate(f,d/2,t.easing).queue(function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}),y>1&&v.splice.apply(v,[1,0].concat(v.splice(y,u+1))),n.dequeue()},e.effects.effect.slide=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","width","height"],o=e.effects.setMode(n,t.mode||"show"),r="show"===o,h=t.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h,d={};e.effects.save(n,a),n.show(),s=t.distance||n["top"===l?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(l,u?isNaN(s)?"-"+s:-s:s),d[l]=(r?u?"+=":"-=":u?"-=":"+=")+s,n.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}})},e.effects.effect.transfer=function(t,i){var s=e(this),n=e(t.to),a="fixed"===n.css("position"),o=e("body"),r=a?o.scrollTop():0,h=a?o.scrollLeft():0,l=n.offset(),u={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},d=s.offset(),c=e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({top:d.top-r,left:d.left-h,height:s.innerHeight(),width:s.innerWidth(),position:a?"fixed":"absolute"}).animate(u,t.duration,t.easing,function(){c.remove(),i()})},e.widget("ui.progressbar",{version:"1.11.4",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(e){return void 0===e?this.options.value:(this.options.value=this._constrainedValue(e),this._refreshValue(),void 0)},_constrainedValue:function(e){return void 0===e&&(e=this.options.value),this.indeterminate=e===!1,"number"!=typeof e&&(e=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,e))},_setOptions:function(e){var t=e.value;delete e.value,this._super(e),this.options.value=this._constrainedValue(t),this._refreshValue()},_setOption:function(e,t){"max"===e&&(t=Math.max(this.min,t)),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var t=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||t>this.min).toggleClass("ui-corner-right",t===this.options.max).width(i.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":t}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==t&&(this.oldValue=t,this._trigger("change")),t===this.options.max&&this._trigger("complete")}}),e.widget("ui.selectable",e.ui.mouse,{version:"1.11.4",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t,i=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){t=e(i.options.filter,i.element[0]),t.addClass("ui-selectee"),t.each(function(){var t=e(this),i=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:i.left,top:i.top,right:i.left+t.outerWidth(),bottom:i.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=t.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(t){var i=this,s=this.options;this.opos=[t.pageX,t.pageY],this.options.disabled||(this.selectees=e(s.filter,this.element[0]),this._trigger("start",t),e(s.appendTo).append(this.helper),this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=e.data(this,"selectable-item");s.startselected=!0,t.metaKey||t.ctrlKey||(s.$element.removeClass("ui-selected"),s.selected=!1,s.$element.addClass("ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",t,{unselecting:s.element}))}),e(t.target).parents().addBack().each(function(){var s,n=e.data(this,"selectable-item");return n?(s=!t.metaKey&&!t.ctrlKey||!n.$element.hasClass("ui-selected"),n.$element.removeClass(s?"ui-unselecting":"ui-selected").addClass(s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",t,{selecting:n.element}):i._trigger("unselecting",t,{unselecting:n.element}),!1):void 0}))},_mouseDrag:function(t){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,a=this.opos[0],o=this.opos[1],r=t.pageX,h=t.pageY;return a>r&&(i=r,r=a,a=i),o>h&&(i=h,h=o,o=i),this.helper.css({left:a,top:o,width:r-a,height:h-o}),this.selectees.each(function(){var i=e.data(this,"selectable-item"),l=!1;i&&i.element!==s.element[0]&&("touch"===n.tolerance?l=!(i.left>r||a>i.right||i.top>h||o>i.bottom):"fit"===n.tolerance&&(l=i.left>a&&r>i.right&&i.top>o&&h>i.bottom),l?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,s._trigger("selecting",t,{selecting:i.element}))):(i.selecting&&((t.metaKey||t.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",t,{unselecting:i.element}))),i.selected&&(t.metaKey||t.ctrlKey||i.startselected||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",t,{unselecting:i.element})))))}),!1}},_mouseStop:function(t){var i=this;return this.dragged=!1,e(".ui-unselecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",t,{unselected:s.element})}),e(".ui-selecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",t,{selected:s.element})}),this._trigger("stop",t),this.helper.remove(),!1}}),e.widget("ui.selectmenu",{version:"1.11.4",defaultElement:"<select>",options:{appendTo:null,disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:null,change:null,close:null,focus:null,open:null,select:null},_create:function(){var e=this.element.uniqueId().attr("id");this.ids={element:e,button:e+"-button",menu:e+"-menu"},this._drawButton(),this._drawMenu(),this.options.disabled&&this.disable()},_drawButton:function(){var t=this;this.label=e("label[for='"+this.ids.element+"']").attr("for",this.ids.button),this._on(this.label,{click:function(e){this.button.focus(),e.preventDefault()}}),this.element.hide(),this.button=e("<span>",{"class":"ui-selectmenu-button ui-widget ui-state-default ui-corner-all",tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true"}).insertAfter(this.element),e("<span>",{"class":"ui-icon "+this.options.icons.button}).prependTo(this.button),this.buttonText=e("<span>",{"class":"ui-selectmenu-text"}).appendTo(this.button),this._setText(this.buttonText,this.element.find("option:selected").text()),this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){t.menuItems||t._refreshMenu()}),this._hoverable(this.button),this._focusable(this.button)},_drawMenu:function(){var t=this;this.menu=e("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=e("<div>",{"class":"ui-selectmenu-menu ui-front"}).append(this.menu).appendTo(this._appendTo()),this.menuInstance=this.menu.menu({role:"listbox",select:function(e,i){e.preventDefault(),t._setSelection(),t._select(i.item.data("ui-selectmenu-item"),e)},focus:function(e,i){var s=i.item.data("ui-selectmenu-item");null!=t.focusIndex&&s.index!==t.focusIndex&&(t._trigger("focus",e,{item:s}),t.isOpen||t._select(s,e)),t.focusIndex=s.index,t.button.attr("aria-activedescendant",t.menuItems.eq(s.index).attr("id"))}}).menu("instance"),this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this._setText(this.buttonText,this._getSelectedItem().text()),this.options.width||this._resizeButton()},_refreshMenu:function(){this.menu.empty();var e,t=this.element.find("option");t.length&&(this._parseOptions(t),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup"),e=this._getSelectedItem(),this.menuInstance.focus(null,e),this._setAria(e.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(e){this.options.disabled||(this.menuItems?(this.menu.find(".ui-state-focus").removeClass("ui-state-focus"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",e))},_position:function(){this.menuWrap.position(e.extend({of:this.button},this.options.position))},close:function(e){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",e))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderMenu:function(t,i){var s=this,n="";e.each(i,function(i,a){a.optgroup!==n&&(e("<li>",{"class":"ui-selectmenu-optgroup ui-menu-divider"+(a.element.parent("optgroup").prop("disabled")?" ui-state-disabled":""),text:a.optgroup}).appendTo(t),n=a.optgroup),s._renderItemData(t,a)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-selectmenu-item",t)},_renderItem:function(t,i){var s=e("<li>");return i.disabled&&s.addClass("ui-state-disabled"),this._setText(s,i.label),s.appendTo(t)},_setText:function(e,t){t?e.text(t):e.html("&#160;")},_move:function(e,t){var i,s,n=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex):(i=this.menuItems.eq(this.element[0].selectedIndex),n+=":not(.ui-state-disabled)"),s="first"===e||"last"===e?i["first"===e?"prevAll":"nextAll"](n).eq(-1):i[e+"All"](n).eq(0),s.length&&this.menuInstance.focus(t,s)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex)},_toggle:function(e){this[this.isOpen?"close":"open"](e)},_setSelection:function(){var e;this.range&&(window.getSelection?(e=window.getSelection(),e.removeAllRanges(),e.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(t){this.isOpen&&(e(t.target).closest(".ui-selectmenu-menu, #"+this.ids.button).length||this.close(t))}},_buttonEvents:{mousedown:function(){var e;window.getSelection?(e=window.getSelection(),e.rangeCount&&(this.range=e.getRangeAt(0))):this.range=document.selection.createRange()},click:function(e){this._setSelection(),this._toggle(e)},keydown:function(t){var i=!0;switch(t.keyCode){case e.ui.keyCode.TAB:case e.ui.keyCode.ESCAPE:this.close(t),i=!1;break;case e.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(t);break;case e.ui.keyCode.UP:t.altKey?this._toggle(t):this._move("prev",t);break;case e.ui.keyCode.DOWN:t.altKey?this._toggle(t):this._move("next",t);break;case e.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(t):this._toggle(t);break;case e.ui.keyCode.LEFT:this._move("prev",t);break;case e.ui.keyCode.RIGHT:this._move("next",t);break;case e.ui.keyCode.HOME:case e.ui.keyCode.PAGE_UP:this._move("first",t);break;case e.ui.keyCode.END:case e.ui.keyCode.PAGE_DOWN:this._move("last",t);break;default:this.menu.trigger(t),i=!1}i&&t.preventDefault()}},_selectFocusedItem:function(e){var t=this.menuItems.eq(this.focusIndex);t.hasClass("ui-state-disabled")||this._select(t.data("ui-selectmenu-item"),e)},_select:function(e,t){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=e.index,this._setText(this.buttonText,e.label),this._setAria(e),this._trigger("select",t,{item:e}),e.index!==i&&this._trigger("change",t,{item:e}),this.close(t)},_setAria:function(e){var t=this.menuItems.eq(e.index).attr("id");this.button.attr({"aria-labelledby":t,"aria-activedescendant":t}),this.menu.attr("aria-activedescendant",t)},_setOption:function(e,t){"icons"===e&&this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(t.button),this._super(e,t),"appendTo"===e&&this.menuWrap.appendTo(this._appendTo()),"disabled"===e&&(this.menuInstance.option("disabled",t),this.button.toggleClass("ui-state-disabled",t).attr("aria-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)),"width"===e&&this._resizeButton()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_toggleAttr:function(){this.button.toggleClass("ui-corner-top",this.isOpen).toggleClass("ui-corner-all",!this.isOpen).attr("aria-expanded",this.isOpen),this.menuWrap.toggleClass("ui-selectmenu-open",this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var e=this.options.width;e||(e=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(e)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){return{disabled:this.element.prop("disabled")}},_parseOptions:function(t){var i=[];t.each(function(t,s){var n=e(s),a=n.parent("optgroup");i.push({element:n,index:t,value:n.val(),label:n.text(),optgroup:a.attr("label")||"",disabled:a.prop("disabled")||n.prop("disabled")})}),this.items=i},_destroy:function(){this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.label.attr("for",this.ids.element)}}),e.widget("ui.slider",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),t=n.length;i>t;t++)o.push(a);this.handles=n.add(e(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,i="";t.range?(t.range===!0&&(t.values?t.values.length&&2!==t.values.length?t.values=[t.values[0],t.values[0]]:e.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=e("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===t.range||"max"===t.range?" ui-slider-range-"+t.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var i,s,n,a,o,r,h,l,u=this,d=this.options;return d.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:t.pageX,y:t.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var i=Math.abs(s-u.values(t));(n>i||n===i&&(t===u._lastChangedValue||u.values(t)===d.min))&&(n=i,a=e(this),o=t)}),r=this._start(t,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:t.pageX-h.left-a.width()/2,top:t.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},i=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,i),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,i,s,n,a;return"horizontal"===this.orientation?(t=this.elementSize.width,i=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,i=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/t,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(e,t){var i={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("start",e,i)},_slide:function(e,t,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(t?0:1),2===this.options.values.length&&this.options.range===!0&&(0===t&&i>s||1===t&&s>i)&&(i=s),i!==this.values(t)&&(n=this.values(),n[t]=i,a=this._trigger("slide",e,{handle:this.handles[t],value:i,values:n}),s=this.values(t?0:1),a!==!1&&this.values(t,i))):i!==this.value()&&(a=this._trigger("slide",e,{handle:this.handles[t],value:i}),a!==!1&&this.value(i))},_stop:function(e,t){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("stop",e,i)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._lastChangedValue=t,this._trigger("change",e,i)}},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(t,i){var s,n,a;if(arguments.length>1)return this.options.values[t]=this._trimAlignValue(i),this._refreshValue(),this._change(null,t),void 0;if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(t,i){var s,n=0;switch("range"===t&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),e.isArray(this.options.values)&&(n=this.options.values.length),"disabled"===t&&this.element.toggleClass("ui-state-disabled",!!i),this._super(t,i),t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e)},_values:function(e){var t,i,s;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(e){if(this._valueMin()>=e)return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,i=(e-this._valueMin())%t,s=e-i;return 2*Math.abs(i)>=t&&(s+=i>0?t:-t),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var e=this.options.max,t=this._valueMin(),i=this.options.step,s=Math.floor(+(e-t).toFixed(this._precision())/i)*i;e=s+t,this.max=parseFloat(e.toFixed(this._precision()))},_precision:function(){var e=this._precisionOf(this.options.step);return null!==this.options.min&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=""+e,i=t.indexOf(".");return-1===i?0:t.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var t,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",e(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-t+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-t+"%"},{queue:!1,duration:r.animate}))),t=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(t){var i,s,n,a,o=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(t.preventDefault(),!this._keySliding&&(this._keySliding=!0,e(t.target).addClass("ui-state-active"),i=this._start(t,o),i===!1))return}switch(a=this.options.step,s=n=this.options.values&&this.options.values.length?this.values(o):this.value(),t.keyCode){case e.ui.keyCode.HOME:n=this._valueMin();break;case e.ui.keyCode.END:n=this._valueMax();break;case e.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+a);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-a)}this._slide(t,o,n)},keyup:function(t){var i=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,i),this._change(t,i),e(t.target).removeClass("ui-state-active"))}}}),e.widget("ui.sortable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(e,t,i){return e>=t&&t+i>e},_isFloating:function(e){return/left|right/.test(e.css("float"))||/inline|table-cell/.test(e.css("display"))},_create:function(){this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(e,t){this._super(e,t),"handle"===e&&this._setHandleClassName()},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),e.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")})},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(t,i){var s=null,n=!1,a=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(t),e(t.target).parents().each(function(){return e.data(this,a.widgetName+"-item")===a?(s=e(this),!1):void 0}),e.data(t.target,a.widgetName+"-item")===a&&(s=e(t.target)),s?!this.options.handle||i||(e(this.options.handle,s).find("*").addBack().each(function(){this===t.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(t,i,s){var n,a,o=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(a=this.document.find("body"),this.storedCursor=a.css("cursor"),a.css("cursor",o.cursor),this.storedStylesheet=e("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(a)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",t,this._uiHash(this));
return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var i,s,n,a,o=this.options,r=!1;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+o.scrollSpeed:t.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+o.scrollSpeed:t.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(t.pageY-this.document.scrollTop()<o.scrollSensitivity?r=this.document.scrollTop(this.document.scrollTop()-o.scrollSpeed):this.window.height()-(t.pageY-this.document.scrollTop())<o.scrollSensitivity&&(r=this.document.scrollTop(this.document.scrollTop()+o.scrollSpeed)),t.pageX-this.document.scrollLeft()<o.scrollSensitivity?r=this.document.scrollLeft(this.document.scrollLeft()-o.scrollSpeed):this.window.width()-(t.pageX-this.document.scrollLeft())<o.scrollSensitivity&&(r=this.document.scrollLeft(this.document.scrollLeft()+o.scrollSpeed))),r!==!1&&e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],a=this._intersectsWithPointer(s),a&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===a?"next":"prev"]()[0]!==n&&!e.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!e.contains(this.element[0],n):!0)){if(this.direction=1===a?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(t,s),this._trigger("change",t,this._uiHash());break}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,i){if(t){if(e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t),this.options.revert){var s=this,n=this.placeholder.offset(),a=this.options.axis,o={};a&&"x"!==a||(o.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),a&&"y"!==a||(o.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,e(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){s._clear(t)})}else this._clear(t,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},e(i).each(function(){var i=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);i&&s.push((t.key||i[1]+"[]")+"="+(t.key&&t.expression?i[1]:i[2]))}),!s.length&&t.key&&s.push(t.key+"="),s.join("&")},toArray:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},i.each(function(){s.push(e(t.item||this).attr(t.attribute||"id")||"")}),s},_intersectsWith:function(e){var t=this.positionAbs.left,i=t+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,a=e.left,o=a+e.width,r=e.top,h=r+e.height,l=this.offset.click.top,u=this.offset.click.left,d="x"===this.options.axis||s+l>r&&h>s+l,c="y"===this.options.axis||t+u>a&&o>t+u,p=d&&c;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?p:t+this.helperProportions.width/2>a&&o>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(e){var t="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height),i="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),s=t&&i,n=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return s?this.floating?a&&"right"===a||"down"===n?2:1:n&&("down"===n?2:1):!1},_intersectsWithSides:function(e){var t=this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&t||"up"===s&&!t)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return 0!==e&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return 0!==e&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){function i(){r.push(this)}var s,n,a,o,r=[],h=[],l=this._connectWith();if(l&&t)for(s=l.length-1;s>=0;s--)for(a=e(l[s],this.document[0]),n=a.length-1;n>=0;n--)o=e.data(a[n],this.widgetFullName),o&&o!==this&&!o.options.disabled&&h.push([e.isFunction(o.options.items)?o.options.items.call(o.element):e(o.options.items,o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),o]);for(h.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return e(r)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var i=0;t.length>i;i++)if(t[i]===e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var i,s,n,a,o,r,h,l,u=this.items,d=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],c=this._connectWith();if(c&&this.ready)for(i=c.length-1;i>=0;i--)for(n=e(c[i],this.document[0]),s=n.length-1;s>=0;s--)a=e.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&(d.push([e.isFunction(a.options.items)?a.options.items.call(a.element[0],t,{item:this.currentItem}):e(a.options.items,a.element),a]),this.containers.push(a));for(i=d.length-1;i>=0;i--)for(o=d[i][1],r=d[i][0],s=0,l=r.length;l>s;s++)h=e(r[s]),h.data(this.widgetName+"-item",o),u.push({item:h,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(t){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,a;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?e(this.options.toleranceElement,s.item):s.item,t||(s.width=n.outerWidth(),s.height=n.outerHeight()),a=n.offset(),s.left=a.left,s.top=a.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)a=this.containers[i].element.offset(),this.containers[i].containerCache.left=a.left,this.containers[i].containerCache.top=a.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(t){t=t||this;var i,s=t.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=t.currentItem[0].nodeName.toLowerCase(),n=e("<"+s+">",t.document[0]).addClass(i||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tbody"===s?t._createTrPlaceholder(t.currentItem.find("tr").eq(0),e("<tr>",t.document[0]).appendTo(n)):"tr"===s?t._createTrPlaceholder(t.currentItem,n):"img"===s&&n.attr("src",t.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(e,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10)))}}),t.placeholder=e(s.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),s.placeholder.update(t,t.placeholder)},_createTrPlaceholder:function(t,i){var s=this;t.children().each(function(){e("<td>&#160;</td>",s.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(i)})},_contactContainers:function(t){var i,s,n,a,o,r,h,l,u,d,c=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!e.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(c&&e.contains(this.containers[i].element[0],c.element[0]))continue;c=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",t,this._uiHash(this)),this.containers[i].containerCache.over=0);if(c)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,a=null,u=c.floating||this._isFloating(this.currentItem),o=u?"left":"top",r=u?"width":"height",d=u?"clientX":"clientY",s=this.items.length-1;s>=0;s--)e.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(h=this.items[s].item.offset()[o],l=!1,t[d]-h>this.items[s][r]/2&&(l=!0),n>Math.abs(t[d]-h)&&(n=Math.abs(t[d]-h),a=this.items[s],this.direction=l?"up":"down"));if(!a&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;a?this._rearrange(t,a,null,!0):this._rearrange(t,null,this.containers[p].element,!0),this._trigger("change",t,this._uiHash()),this.containers[p]._trigger("change",t,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||e("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===n.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===n.containment?this.document.width():this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(t=e(n.containment)[0],i=e(n.containment).offset(),s="hidden"!==e(t).css("overflow"),this.containment=[i.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(t){var i,s,n=this.options,a=t.pageX,o=t.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(a=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(a=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1],o=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((a-this.originalPageX)/n.grid[0])*n.grid[0],a=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(e,t,i,s){i?i[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(e,t){function i(e,t,i){return function(s){i._trigger(e,s,t._uiHash(t))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!t&&n.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||t||n.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(t||(n.push(function(e){this._trigger("remove",e,this._uiHash())}),n.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)t||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,t||this._trigger("beforeStop",e,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!t){for(s=0;n.length>s;s++)n[s].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var i=t||this;return{helper:i.helper,placeholder:i.placeholder||e([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:t?t.element:null}}}),e.widget("ui.spinner",{version:"1.11.4",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var t={},i=this.element;return e.each(["min","max","step"],function(e,s){var n=i.attr(s);void 0!==n&&n.length&&(t[s]=n)}),t},_events:{keydown:function(e){this._start(e)&&this._keydown(e)&&e.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",e),void 0)},mousewheel:function(e,t){if(t){if(!this.spinning&&!this._start(e))return!1;this._spin((t>0?1:-1)*this.options.step,e),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(e)},100),e.preventDefault()}},"mousedown .ui-spinner-button":function(t){function i(){var e=this.element[0]===this.document[0].activeElement;e||(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),t.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(t)!==!1&&this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(t){return e(t.currentTarget).hasClass("ui-state-active")?this._start(t)===!1?!1:(this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var e=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=e.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*e.height())&&e.height()>0&&e.height(e.height()),this.options.disabled&&this.disable()},_keydown:function(t){var i=this.options,s=e.ui.keyCode;switch(t.keyCode){case s.UP:return this._repeat(null,1,t),!0;case s.DOWN:return this._repeat(null,-1,t),!0;case s.PAGE_UP:return this._repeat(null,i.page,t),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,t),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(e){return this.spinning||this._trigger("start",e)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(e,t,i){e=e||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,t,i)},e),this._spin(t*this.options.step,i)},_spin:function(e,t){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+e*this._increment(this.counter)),this.spinning&&this._trigger("spin",t,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(t){var i=this.options.incremental;return i?e.isFunction(i)?i(t):Math.floor(t*t*t/5e4-t*t/500+17*t/200+1):1},_precision:function(){var e=this._precisionOf(this.options.step);return null!==this.options.min&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=""+e,i=t.indexOf(".");return-1===i?0:t.length-i-1},_adjustValue:function(e){var t,i,s=this.options;return t=null!==s.min?s.min:0,i=e-t,i=Math.round(i/s.step)*s.step,e=t+i,e=parseFloat(e.toFixed(this._precision())),null!==s.max&&e>s.max?s.max:null!==s.min&&s.min>e?s.min:e},_stop:function(e){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",e))},_setOption:function(e,t){if("culture"===e||"numberFormat"===e){var i=this._parse(this.element.val());return this.options[e]=t,this.element.val(this._format(i)),void 0}("max"===e||"min"===e||"step"===e)&&"string"==typeof t&&(t=this._parse(t)),"icons"===e&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)),this._super(e,t),"disabled"===e&&(this.widget().toggleClass("ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable"))},_setOptions:h(function(e){this._super(e)}),_parse:function(e){return"string"==typeof e&&""!==e&&(e=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(e,10,this.options.culture):+e),""===e||isNaN(e)?null:e},_format:function(e){return""===e?"":window.Globalize&&this.options.numberFormat?Globalize.format(e,this.options.numberFormat,this.options.culture):e},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var e=this.value();return null===e?!1:e===this._adjustValue(e)},_value:function(e,t){var i;""!==e&&(i=this._parse(e),null!==i&&(t||(i=this._adjustValue(i)),e=this._format(i))),this.element.val(e),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:h(function(e){this._stepUp(e)}),_stepUp:function(e){this._start()&&(this._spin((e||1)*this.options.step),this._stop())},stepDown:h(function(e){this._stepDown(e)}),_stepDown:function(e){this._start()&&(this._spin((e||1)*-this.options.step),this._stop())},pageUp:h(function(e){this._stepUp((e||1)*this.options.page)}),pageDown:h(function(e){this._stepDown((e||1)*this.options.page)}),value:function(e){return arguments.length?(h(this._value).call(this,e),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),e.widget("ui.tabs",{version:"1.11.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var e=/#.*$/;return function(t){var i,s;t=t.cloneNode(!1),i=t.href.replace(e,""),s=location.href.replace(e,"");try{i=decodeURIComponent(i)}catch(n){}try{s=decodeURIComponent(s)}catch(n){}return t.hash.length>1&&i===s}}(),_create:function(){var t=this,i=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible),this._processTabs(),i.active=this._initialActive(),e.isArray(i.disabled)&&(i.disabled=e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"),function(e){return t.tabs.index(e)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):e(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var t=this.options.active,i=this.options.collapsible,s=location.hash.substring(1);return null===t&&(s&&this.tabs.each(function(i,n){return e(n).attr("aria-controls")===s?(t=i,!1):void 0}),null===t&&(t=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===t||-1===t)&&(t=this.tabs.length?0:!1)),t!==!1&&(t=this.tabs.index(this.tabs.eq(t)),-1===t&&(t=i?!1:0)),!i&&t===!1&&this.anchors.length&&(t=0),t},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):e()}},_tabKeydown:function(t){var i=e(this.document[0].activeElement).closest("li"),s=this.tabs.index(i),n=!0;if(!this._handlePageNav(t)){switch(t.keyCode){case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:s++;break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:n=!1,s--;break;case e.ui.keyCode.END:s=this.anchors.length-1;break;case e.ui.keyCode.HOME:s=0;break;case e.ui.keyCode.SPACE:return t.preventDefault(),clearTimeout(this.activating),this._activate(s),void 0;case e.ui.keyCode.ENTER:return t.preventDefault(),clearTimeout(this.activating),this._activate(s===this.options.active?!1:s),void 0;default:return}t.preventDefault(),clearTimeout(this.activating),s=this._focusNextTab(s,n),t.ctrlKey||t.metaKey||(i.attr("aria-selected","false"),this.tabs.eq(s).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",s)},this.delay))}},_panelKeydown:function(t){this._handlePageNav(t)||t.ctrlKey&&t.keyCode===e.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(t){return t.altKey&&t.keyCode===e.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):t.altKey&&t.keyCode===e.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(t,i){function s(){return t>n&&(t=0),0>t&&(t=n),t}for(var n=this.tabs.length-1;-1!==e.inArray(s(),this.options.disabled);)t=i?t+1:t-1;return t},_focusNextTab:function(e,t){return e=this._findNextTab(e,t),this.tabs.eq(e).focus(),e},_setOption:function(e,t){return"active"===e?(this._activate(t),void 0):"disabled"===e?(this._setupDisabled(t),void 0):(this._super(e,t),"collapsible"===e&&(this.element.toggleClass("ui-tabs-collapsible",t),t||this.options.active!==!1||this._activate(0)),"event"===e&&this._setupEvents(t),"heightStyle"===e&&this._setupHeightStyle(t),void 0)},_sanitizeSelector:function(e){return e?e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,i=this.tablist.children(":has(a[href])");t.disabled=e.map(i.filter(".ui-state-disabled"),function(e){return i.index(e)}),this._processTabs(),t.active!==!1&&this.anchors.length?this.active.length&&!e.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=e()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active):(t.active=!1,this.active=e()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var t=this,i=this.tabs,s=this.anchors,n=this.panels;
this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist").delegate("> li","mousedown"+this.eventNamespace,function(t){e(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){e(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return e("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=e(),this.anchors.each(function(i,s){var n,a,o,r=e(s).uniqueId().attr("id"),h=e(s).closest("li"),l=h.attr("aria-controls");t._isLocal(s)?(n=s.hash,o=n.substring(1),a=t.element.find(t._sanitizeSelector(n))):(o=h.attr("aria-controls")||e({}).uniqueId()[0].id,n="#"+o,a=t.element.find(n),a.length||(a=t._createPanel(o),a.insertAfter(t.panels[i-1]||t.tablist)),a.attr("aria-live","polite")),a.length&&(t.panels=t.panels.add(a)),l&&h.data("ui-tabs-aria-controls",l),h.attr({"aria-controls":o,"aria-labelledby":r}),a.attr("aria-labelledby",r)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel"),i&&(this._off(i.not(this.tabs)),this._off(s.not(this.anchors)),this._off(n.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(t){return e("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){e.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var i,s=0;i=this.tabs[s];s++)t===!0||-1!==e.inArray(s,t)?e(i).addClass("ui-state-disabled").attr("aria-disabled","true"):e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var i={};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(e){e.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var i,s=this.element.parent();"fill"===t?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var t=e(this),s=t.css("position");"absolute"!==s&&"fixed"!==s&&(i-=t.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=e(this).outerHeight(!0)}),this.panels.each(function(){e(this).height(Math.max(0,i-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===t&&(i=0,this.panels.each(function(){i=Math.max(i,e(this).height("").height())}).height(i))},_eventHandler:function(t){var i=this.options,s=this.active,n=e(t.currentTarget),a=n.closest("li"),o=a[0]===s[0],r=o&&i.collapsible,h=r?e():this._getPanelForTab(a),l=s.length?this._getPanelForTab(s):e(),u={oldTab:s,oldPanel:l,newTab:r?e():a,newPanel:h};t.preventDefault(),a.hasClass("ui-state-disabled")||a.hasClass("ui-tabs-loading")||this.running||o&&!i.collapsible||this._trigger("beforeActivate",t,u)===!1||(i.active=r?!1:this.tabs.index(a),this.active=o?e():a,this.xhr&&this.xhr.abort(),l.length||h.length||e.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(a),t),this._toggle(t,u))},_toggle:function(t,i){function s(){a.running=!1,a._trigger("activate",t,i)}function n(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),o.length&&a.options.show?a._show(o,a.options.show,s):(o.show(),s())}var a=this,o=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),n()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r.hide(),n()),r.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),o.length&&r.length?i.oldTab.attr("tabIndex",-1):o.length&&this.tabs.filter(function(){return 0===e(this).attr("tabIndex")}).attr("tabIndex",-1),o.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(t){var i,s=this._findActive(t);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return t===!1?e():this.tabs.eq(t)},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+e+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tablist.unbind(this.eventNamespace),this.tabs.add(this.panels).each(function(){e.data(this,"ui-tabs-destroy")?e(this).remove():e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var t=e(this),i=t.data("ui-tabs-aria-controls");i?t.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):t.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(t){var i=this.options.disabled;i!==!1&&(void 0===t?i=!1:(t=this._getIndex(t),i=e.isArray(i)?e.map(i,function(e){return e!==t?e:null}):e.map(this.tabs,function(e,i){return i!==t?i:null})),this._setupDisabled(i))},disable:function(t){var i=this.options.disabled;if(i!==!0){if(void 0===t)i=!0;else{if(t=this._getIndex(t),-1!==e.inArray(t,i))return;i=e.isArray(i)?e.merge([t],i).sort():[t]}this._setupDisabled(i)}},load:function(t,i){t=this._getIndex(t);var s=this,n=this.tabs.eq(t),a=n.find(".ui-tabs-anchor"),o=this._getPanelForTab(n),r={tab:n,panel:o},h=function(e,t){"abort"===t&&s.panels.stop(!1,!0),n.removeClass("ui-tabs-loading"),o.removeAttr("aria-busy"),e===s.xhr&&delete s.xhr};this._isLocal(a[0])||(this.xhr=e.ajax(this._ajaxSettings(a,i,r)),this.xhr&&"canceled"!==this.xhr.statusText&&(n.addClass("ui-tabs-loading"),o.attr("aria-busy","true"),this.xhr.done(function(e,t,n){setTimeout(function(){o.html(e),s._trigger("load",i,r),h(n,t)},1)}).fail(function(e,t){setTimeout(function(){h(e,t)},1)})))},_ajaxSettings:function(t,i,s){var n=this;return{url:t.attr("href"),beforeSend:function(t,a){return n._trigger("beforeLoad",i,e.extend({jqXHR:t,ajaxSettings:a},s))}}},_getPanelForTab:function(t){var i=e(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),e.widget("ui.tooltip",{version:"1.11.4",options:{content:function(){var t=e(this).attr("title")||"";return e("<a>").text(t).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_addDescribedBy:function(t,i){var s=(t.attr("aria-describedby")||"").split(/\s+/);s.push(i),t.data("ui-tooltip-id",i).attr("aria-describedby",e.trim(s.join(" ")))},_removeDescribedBy:function(t){var i=t.data("ui-tooltip-id"),s=(t.attr("aria-describedby")||"").split(/\s+/),n=e.inArray(i,s);-1!==n&&s.splice(n,1),t.removeData("ui-tooltip-id"),s=e.trim(s.join(" ")),s?t.attr("aria-describedby",s):t.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable(),this.liveRegion=e("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)},_setOption:function(t,i){var s=this;return"disabled"===t?(this[i?"_disable":"_enable"](),this.options[t]=i,void 0):(this._super(t,i),"content"===t&&e.each(this.tooltips,function(e,t){s._updateContent(t.element)}),void 0)},_disable:function(){var t=this;e.each(this.tooltips,function(i,s){var n=e.Event("blur");n.target=n.currentTarget=s.element[0],t.close(n,!0)}),this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.is("[title]")&&t.data("ui-tooltip-title",t.attr("title")).removeAttr("title")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))})},open:function(t){var i=this,s=e(t?t.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),t&&"mouseover"===t.type&&s.parents().each(function(){var t,s=e(this);s.data("ui-tooltip-open")&&(t=e.Event("blur"),t.target=t.currentTarget=this,i.close(t,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._registerCloseHandlers(t,s),this._updateContent(s,t))},_updateContent:function(e,t){var i,s=this.options.content,n=this,a=t?t.type:null;return"string"==typeof s?this._open(t,e,s):(i=s.call(e[0],function(i){n._delay(function(){e.data("ui-tooltip-open")&&(t&&(t.type=a),this._open(t,e,i))})}),i&&this._open(t,e,i),void 0)},_open:function(t,i,s){function n(e){l.of=e,o.is(":hidden")||o.position(l)}var a,o,r,h,l=e.extend({},this.options.position);if(s){if(a=this._find(i))return a.tooltip.find(".ui-tooltip-content").html(s),void 0;i.is("[title]")&&(t&&"mouseover"===t.type?i.attr("title",""):i.removeAttr("title")),a=this._tooltip(i),o=a.tooltip,this._addDescribedBy(i,o.attr("id")),o.find(".ui-tooltip-content").html(s),this.liveRegion.children().hide(),s.clone?(h=s.clone(),h.removeAttr("id").find("[id]").removeAttr("id")):h=s,e("<div>").html(h).appendTo(this.liveRegion),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:n}),n(t)):o.position(e.extend({of:i},this.options.position)),o.hide(),this._show(o,this.options.show),this.options.show&&this.options.show.delay&&(r=this.delayedShow=setInterval(function(){o.is(":visible")&&(n(l.of),clearInterval(r))},e.fx.interval)),this._trigger("open",t,{tooltip:o})}},_registerCloseHandlers:function(t,i){var s={keyup:function(t){if(t.keyCode===e.ui.keyCode.ESCAPE){var s=e.Event(t);s.currentTarget=i[0],this.close(s,!0)}}};i[0]!==this.element[0]&&(s.remove=function(){this._removeTooltip(this._find(i).tooltip)}),t&&"mouseover"!==t.type||(s.mouseleave="close"),t&&"focusin"!==t.type||(s.focusout="close"),this._on(!0,i,s)},close:function(t){var i,s=this,n=e(t?t.currentTarget:this.element),a=this._find(n);return a?(i=a.tooltip,a.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&!n.attr("title")&&n.attr("title",n.data("ui-tooltip-title")),this._removeDescribedBy(n),a.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){s._removeTooltip(e(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),t&&"mouseleave"===t.type&&e.each(this.parents,function(t,i){e(i.element).attr("title",i.title),delete s.parents[t]}),a.closing=!0,this._trigger("close",t,{tooltip:i}),a.hiding||(a.closing=!1)),void 0):(n.removeData("ui-tooltip-open"),void 0)},_tooltip:function(t){var i=e("<div>").attr("role","tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||"")),s=i.uniqueId().attr("id");return e("<div>").addClass("ui-tooltip-content").appendTo(i),i.appendTo(this.document[0].body),this.tooltips[s]={element:t,tooltip:i}},_find:function(e){var t=e.data("ui-tooltip-id");return t?this.tooltips[t]:null},_removeTooltip:function(e){e.remove(),delete this.tooltips[e.attr("id")]},_destroy:function(){var t=this;e.each(this.tooltips,function(i,s){var n=e.Event("blur"),a=s.element;n.target=n.currentTarget=a[0],t.close(n,!0),e("#"+i).remove(),a.data("ui-tooltip-title")&&(a.attr("title")||a.attr("title",a.data("ui-tooltip-title")),a.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}})});
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */

;(function() {
/*jshint eqeqeq:false curly:false latedef:false */
"use strict";

	function setup($) {
		$.fn._fadeIn = $.fn.fadeIn;

		var noOp = $.noop || function() {};

		// this bit is to ensure we don't call setExpression when we shouldn't (with extra muscle to handle
		// confusing userAgent strings on Vista)
		var msie = /MSIE/.test(navigator.userAgent);
		var ie6  = /MSIE 6.0/.test(navigator.userAgent) && ! /MSIE 8.0/.test(navigator.userAgent);
		var mode = document.documentMode || 0;
		var setExpr = $.isFunction( document.createElement('div').style.setExpression );

		// global $ methods for blocking/unblocking the entire page
		$.blockUI   = function(opts) { install(window, opts); };
		$.unblockUI = function(opts) { remove(window, opts); };

		// convenience method for quick growl-like notifications  (http://www.google.com/search?q=growl)
		$.growlUI = function(title, message, timeout, onClose) {
			var $m = $('<div class="growlUI"></div>');
			if (title) $m.append('<h1>'+title+'</h1>');
			if (message) $m.append('<h2>'+message+'</h2>');
			if (timeout === undefined) timeout = 3000;

			// Added by konapun: Set timeout to 30 seconds if this growl is moused over, like normal toast notifications
			var callBlock = function(opts) {
				opts = opts || {};

				$.blockUI({
					message: $m,
					fadeIn : typeof opts.fadeIn  !== 'undefined' ? opts.fadeIn  : 700,
					fadeOut: typeof opts.fadeOut !== 'undefined' ? opts.fadeOut : 1000,
					timeout: typeof opts.timeout !== 'undefined' ? opts.timeout : timeout,
					centerY: false,
					showOverlay: false,
					onUnblock: onClose,
					css: $.blockUI.defaults.growlCSS
				});
			};

			callBlock();
			var nonmousedOpacity = $m.css('opacity');
			$m.mouseover(function() {
				callBlock({
					fadeIn: 0,
					timeout: 30000
				});

				var displayBlock = $('.blockMsg');
				displayBlock.stop(); // cancel fadeout if it has started
				displayBlock.fadeTo(300, 1); // make it easier to read the message by removing transparency
			}).mouseout(function() {
				$('.blockMsg').fadeOut(1000);
			});
			// End konapun additions
		};

		// plugin method for blocking element content
		$.fn.block = function(opts) {
			if ( this[0] === window ) {
				$.blockUI( opts );
				return this;
			}
			var fullOpts = $.extend({}, $.blockUI.defaults, opts || {});
			this.each(function() {
				var $el = $(this);
				if (fullOpts.ignoreIfBlocked && $el.data('blockUI.isBlocked'))
					return;
				$el.unblock({ fadeOut: 0 });
			});

			return this.each(function() {
				if ($.css(this,'position') == 'static') {
					this.style.position = 'relative';
					$(this).data('blockUI.static', true);
				}
				this.style.zoom = 1; // force 'hasLayout' in ie
				install(this, opts);
			});
		};

		// plugin method for unblocking element content
		$.fn.unblock = function(opts) {
			if ( this[0] === window ) {
				$.unblockUI( opts );
				return this;
			}
			return this.each(function() {
				remove(this, opts);
			});
		};

		$.blockUI.version = 2.70; // 2nd generation blocking at no extra cost!

		// override these in your code to change the default behavior and style
		$.blockUI.defaults = {
			// message displayed when blocking (use null for no message)
			message:  '<h1>Please wait...</h1>',

			title: null,		// title string; only used when theme == true
			draggable: true,	// only used when theme == true (requires jquery-ui.js to be loaded)

			theme: false, // set to true to use with jQuery UI themes

			// styles for the message when blocking; if you wish to disable
			// these and use an external stylesheet then do this in your code:
			// $.blockUI.defaults.css = {};
			css: {
				padding:	0,
				margin:		0,
				width:		'30%',
				top:		'40%',
				left:		'35%',
				textAlign:	'center',
				color:		'#000',
				border:		'3px solid #aaa',
				backgroundColor:'#fff',
				cursor:		'wait'
			},

			// minimal style set used when themes are used
			themedCSS: {
				width:	'30%',
				top:	'40%',
				left:	'35%'
			},

			// styles for the overlay
			overlayCSS:  {
				backgroundColor:	'#000',
				opacity:			0.6,
				cursor:				'wait'
			},

			// style to replace wait cursor before unblocking to correct issue
			// of lingering wait cursor
			cursorReset: 'default',

			// styles applied when using $.growlUI
			growlCSS: {
				width:		'350px',
				top:		'10px',
				left:		'',
				right:		'10px',
				border:		'none',
				padding:	'5px',
				opacity:	0.6,
				cursor:		'default',
				color:		'#fff',
				backgroundColor: '#000',
				'-webkit-border-radius':'10px',
				'-moz-border-radius':	'10px',
				'border-radius':		'10px'
			},

			// IE issues: 'about:blank' fails on HTTPS and javascript:false is s-l-o-w
			// (hat tip to Jorge H. N. de Vasconcelos)
			/*jshint scripturl:true */
			iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank',

			// force usage of iframe in non-IE browsers (handy for blocking applets)
			forceIframe: false,

			// z-index for the blocking overlay
			baseZ: 1000,

			// set these to true to have the message automatically centered
			centerX: true, // <-- only effects element blocking (page block controlled via css above)
			centerY: true,

			// allow body element to be stetched in ie6; this makes blocking look better
			// on "short" pages.  disable if you wish to prevent changes to the body height
			allowBodyStretch: true,

			// enable if you want key and mouse events to be disabled for content that is blocked
			bindEvents: true,

			// be default blockUI will supress tab navigation from leaving blocking content
			// (if bindEvents is true)
			constrainTabKey: true,

			// fadeIn time in millis; set to 0 to disable fadeIn on block
			fadeIn:  200,

			// fadeOut time in millis; set to 0 to disable fadeOut on unblock
			fadeOut:  400,

			// time in millis to wait before auto-unblocking; set to 0 to disable auto-unblock
			timeout: 0,

			// disable if you don't want to show the overlay
			showOverlay: true,

			// if true, focus will be placed in the first available input field when
			// page blocking
			focusInput: true,

            // elements that can receive focus
            focusableElements: ':input:enabled:visible',

			// suppresses the use of overlay styles on FF/Linux (due to performance issues with opacity)
			// no longer needed in 2012
			// applyPlatformOpacityRules: true,

			// callback method invoked when fadeIn has completed and blocking message is visible
			onBlock: null,

			// callback method invoked when unblocking has completed; the callback is
			// passed the element that has been unblocked (which is the window object for page
			// blocks) and the options that were passed to the unblock call:
			//	onUnblock(element, options)
			onUnblock: null,

			// callback method invoked when the overlay area is clicked.
			// setting this will turn the cursor to a pointer, otherwise cursor defined in overlayCss will be used.
			onOverlayClick: null,

			// don't ask; if you really must know: http://groups.google.com/group/jquery-en/browse_thread/thread/36640a8730503595/2f6a79a77a78e493#2f6a79a77a78e493
			quirksmodeOffsetHack: 4,

			// class name of the message block
			blockMsgClass: 'blockMsg',

			// if it is already blocked, then ignore it (don't unblock and reblock)
			ignoreIfBlocked: false
		};

		// private data and functions follow...

		var pageBlock = null;
		var pageBlockEls = [];

		function install(el, opts) {
			var css, themedCSS;
			var full = (el == window);
			var msg = (opts && opts.message !== undefined ? opts.message : undefined);
			opts = $.extend({}, $.blockUI.defaults, opts || {});

			if (opts.ignoreIfBlocked && $(el).data('blockUI.isBlocked'))
				return;

			opts.overlayCSS = $.extend({}, $.blockUI.defaults.overlayCSS, opts.overlayCSS || {});
			css = $.extend({}, $.blockUI.defaults.css, opts.css || {});
			if (opts.onOverlayClick)
				opts.overlayCSS.cursor = 'pointer';

			themedCSS = $.extend({}, $.blockUI.defaults.themedCSS, opts.themedCSS || {});
			msg = msg === undefined ? opts.message : msg;

			// remove the current block (if there is one)
			if (full && pageBlock)
				remove(window, {fadeOut:0});

			// if an existing element is being used as the blocking content then we capture
			// its current place in the DOM (and current display style) so we can restore
			// it when we unblock
			if (msg && typeof msg != 'string' && (msg.parentNode || msg.jquery)) {
				var node = msg.jquery ? msg[0] : msg;
				var data = {};
				$(el).data('blockUI.history', data);
				data.el = node;
				data.parent = node.parentNode;
				data.display = node.style.display;
				data.position = node.style.position;
				if (data.parent)
					data.parent.removeChild(node);
			}

			$(el).data('blockUI.onUnblock', opts.onUnblock);
			var z = opts.baseZ;

			// blockUI uses 3 layers for blocking, for simplicity they are all used on every platform;
			// layer1 is the iframe layer which is used to supress bleed through of underlying content
			// layer2 is the overlay layer which has opacity and a wait cursor (by default)
			// layer3 is the message content that is displayed while blocking
			var lyr1, lyr2, lyr3, s;
			if (msie || opts.forceIframe)
				lyr1 = $('<iframe class="blockUI" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+opts.iframeSrc+'"></iframe>');
			else
				lyr1 = $('<div class="blockUI" style="display:none"></div>');

			if (opts.theme)
				lyr2 = $('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+ (z++) +';display:none"></div>');
			else
				lyr2 = $('<div class="blockUI blockOverlay" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');

			if (opts.theme && full) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(z+10)+';display:none;position:fixed">';
				if ( opts.title ) {
					s += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(opts.title || '&nbsp;')+'</div>';
				}
				s += '<div class="ui-widget-content ui-dialog-content"></div>';
				s += '</div>';
			}
			else if (opts.theme) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(z+10)+';display:none;position:absolute">';
				if ( opts.title ) {
					s += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(opts.title || '&nbsp;')+'</div>';
				}
				s += '<div class="ui-widget-content ui-dialog-content"></div>';
				s += '</div>';
			}
			else if (full) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage" style="z-index:'+(z+10)+';display:none;position:fixed"></div>';
			}
			else {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement" style="z-index:'+(z+10)+';display:none;position:absolute"></div>';
			}
			lyr3 = $(s);

			// if we have a message, style it
			if (msg) {
				if (opts.theme) {
					lyr3.css(themedCSS);
					lyr3.addClass('ui-widget-content');
				}
				else
					lyr3.css(css);
			}

			// style the overlay
			if (!opts.theme /*&& (!opts.applyPlatformOpacityRules)*/)
				lyr2.css(opts.overlayCSS);
			lyr2.css('position', full ? 'fixed' : 'absolute');

			// make iframe layer transparent in IE
			if (msie || opts.forceIframe)
				lyr1.css('opacity',0.0);

			//$([lyr1[0],lyr2[0],lyr3[0]]).appendTo(full ? 'body' : el);
			var layers = [lyr1,lyr2,lyr3], $par = full ? $('body') : $(el);
			$.each(layers, function() {
				this.appendTo($par);
			});

			if (opts.theme && opts.draggable && $.fn.draggable) {
				lyr3.draggable({
					handle: '.ui-dialog-titlebar',
					cancel: 'li'
				});
			}

			// ie7 must use absolute positioning in quirks mode and to account for activex issues (when scrolling)
			var expr = setExpr && (!$.support.boxModel || $('object,embed', full ? null : el).length > 0);
			if (ie6 || expr) {
				// give body 100% height
				if (full && opts.allowBodyStretch && $.support.boxModel)
					$('html,body').css('height','100%');

				// fix ie6 issue when blocked element has a border width
				if ((ie6 || !$.support.boxModel) && !full) {
					var t = sz(el,'borderTopWidth'), l = sz(el,'borderLeftWidth');
					var fixT = t ? '(0 - '+t+')' : 0;
					var fixL = l ? '(0 - '+l+')' : 0;
				}

				// simulate fixed position
				$.each(layers, function(i,o) {
					var s = o[0].style;
					s.position = 'absolute';
					if (i < 2) {
						if (full)
							s.setExpression('height','Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:'+opts.quirksmodeOffsetHack+') + "px"');
						else
							s.setExpression('height','this.parentNode.offsetHeight + "px"');
						if (full)
							s.setExpression('width','jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"');
						else
							s.setExpression('width','this.parentNode.offsetWidth + "px"');
						if (fixL) s.setExpression('left', fixL);
						if (fixT) s.setExpression('top', fixT);
					}
					else if (opts.centerY) {
						if (full) s.setExpression('top','(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');
						s.marginTop = 0;
					}
					else if (!opts.centerY && full) {
						var top = (opts.css && opts.css.top) ? parseInt(opts.css.top, 10) : 0;
						var expression = '((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + '+top+') + "px"';
						s.setExpression('top',expression);
					}
				});
			}

			// show the message
			if (msg) {
				if (opts.theme)
					lyr3.find('.ui-widget-content').append(msg);
				else
					lyr3.append(msg);
				if (msg.jquery || msg.nodeType)
					$(msg).show();
			}

			if ((msie || opts.forceIframe) && opts.showOverlay)
				lyr1.show(); // opacity is zero
			if (opts.fadeIn) {
				var cb = opts.onBlock ? opts.onBlock : noOp;
				var cb1 = (opts.showOverlay && !msg) ? cb : noOp;
				var cb2 = msg ? cb : noOp;
				if (opts.showOverlay)
					lyr2._fadeIn(opts.fadeIn, cb1);
				if (msg)
					lyr3._fadeIn(opts.fadeIn, cb2);
			}
			else {
				if (opts.showOverlay)
					lyr2.show();
				if (msg)
					lyr3.show();
				if (opts.onBlock)
					opts.onBlock.bind(lyr3)();
			}

			// bind key and mouse events
			bind(1, el, opts);

			if (full) {
				pageBlock = lyr3[0];
				pageBlockEls = $(opts.focusableElements,pageBlock);
				if (opts.focusInput)
					setTimeout(focus, 20);
			}
			else
				center(lyr3[0], opts.centerX, opts.centerY);

			if (opts.timeout) {
				// auto-unblock
				var to = setTimeout(function() {
					if (full)
						$.unblockUI(opts);
					else
						$(el).unblock(opts);
				}, opts.timeout);
				$(el).data('blockUI.timeout', to);
			}
		}

		// remove the block
		function remove(el, opts) {
			var count;
			var full = (el == window);
			var $el = $(el);
			var data = $el.data('blockUI.history');
			var to = $el.data('blockUI.timeout');
			if (to) {
				clearTimeout(to);
				$el.removeData('blockUI.timeout');
			}
			opts = $.extend({}, $.blockUI.defaults, opts || {});
			bind(0, el, opts); // unbind events

			if (opts.onUnblock === null) {
				opts.onUnblock = $el.data('blockUI.onUnblock');
				$el.removeData('blockUI.onUnblock');
			}

			var els;
			if (full) // crazy selector to handle odd field errors in ie6/7
				els = $('body').children().filter('.blockUI').add('body > .blockUI');
			else
				els = $el.find('>.blockUI');

			// fix cursor issue
			if ( opts.cursorReset ) {
				if ( els.length > 1 )
					els[1].style.cursor = opts.cursorReset;
				if ( els.length > 2 )
					els[2].style.cursor = opts.cursorReset;
			}

			if (full)
				pageBlock = pageBlockEls = null;

			if (opts.fadeOut) {
				count = els.length;
				els.stop().fadeOut(opts.fadeOut, function() {
					if ( --count === 0)
						reset(els,data,opts,el);
				});
			}
			else
				reset(els, data, opts, el);
		}

		// move blocking element back into the DOM where it started
		function reset(els,data,opts,el) {
			var $el = $(el);
			if ( $el.data('blockUI.isBlocked') )
				return;

			els.each(function(i,o) {
				// remove via DOM calls so we don't lose event handlers
				if (this.parentNode)
					this.parentNode.removeChild(this);
			});

			if (data && data.el) {
				data.el.style.display = data.display;
				data.el.style.position = data.position;
				data.el.style.cursor = 'default'; // #59
				if (data.parent)
					data.parent.appendChild(data.el);
				$el.removeData('blockUI.history');
			}

			if ($el.data('blockUI.static')) {
				$el.css('position', 'static'); // #22
			}

			if (typeof opts.onUnblock == 'function')
				opts.onUnblock(el,opts);

			// fix issue in Safari 6 where block artifacts remain until reflow
			var body = $(document.body), w = body.width(), cssW = body[0].style.width;
			body.width(w-1).width(w);
			body[0].style.width = cssW;
		}

		// bind/unbind the handler
		function bind(b, el, opts) {
			var full = el == window, $el = $(el);

			// don't bother unbinding if there is nothing to unbind
			if (!b && (full && !pageBlock || !full && !$el.data('blockUI.isBlocked')))
				return;

			$el.data('blockUI.isBlocked', b);

			// don't bind events when overlay is not in use or if bindEvents is false
			if (!full || !opts.bindEvents || (b && !opts.showOverlay))
				return;

			// bind anchors and inputs for mouse and key events
			var events = 'mousedown mouseup keydown keypress keyup touchstart touchend touchmove';
			if (b)
				$(document).bind(events, opts, handler);
			else
				$(document).unbind(events, handler);

		// former impl...
		//		var $e = $('a,:input');
		//		b ? $e.bind(events, opts, handler) : $e.unbind(events, handler);
		}

		// event handler to suppress keyboard/mouse events when blocking
		function handler(e) {
			// allow tab navigation (conditionally)
			if (e.type === 'keydown' && e.keyCode && e.keyCode == 9) {
				if (pageBlock && e.data.constrainTabKey) {
					var els = pageBlockEls;
					var fwd = !e.shiftKey && e.target === els[els.length-1];
					var back = e.shiftKey && e.target === els[0];
					if (fwd || back) {
						setTimeout(function(){focus(back);},10);
						return false;
					}
				}
			}
			var opts = e.data;
			var target = $(e.target);
			if (target.hasClass('blockOverlay') && opts.onOverlayClick)
				opts.onOverlayClick(e);

			// allow events within the message content
			if (target.parents('div.' + opts.blockMsgClass).length > 0)
				return true;

			// allow events for content that is not being blocked
			return target.parents().children().filter('div.blockUI').length === 0;
		}

		function focus(back) {
			if (!pageBlockEls)
				return;
			var e = pageBlockEls[back===true ? pageBlockEls.length-1 : 0];
			if (e)
				e.focus();
		}

		function center(el, x, y) {
			var p = el.parentNode, s = el.style;
			var l = ((p.offsetWidth - el.offsetWidth)/2) - sz(p,'borderLeftWidth');
			var t = ((p.offsetHeight - el.offsetHeight)/2) - sz(p,'borderTopWidth');
			if (x) s.left = l > 0 ? (l+'px') : '0';
			if (y) s.top  = t > 0 ? (t+'px') : '0';
		}

		function sz(el, p) {
			return parseInt($.css(el,p),10)||0;
		}

	}


	/*global define:true */
	if (typeof define === 'function' && define.amd && define.amd.jQuery) {
		define(['jquery'], setup);
	} else {
		setup(jQuery);
	}

})();

/*! jQuery Validation Plugin - v1.13.1 - 10/14/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.validateDelegate(":submit","click",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(b.target).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(b.target).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.submit(function(b){function d(){var d,e;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),e=c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),void 0!==e?e:!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c;return a(this[0]).is("form")?b=this.validate().form():(b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b})),b},removeAttrs:function(b){var c={},d=this;return a.each(b.split(/\s/),function(a,b){c[b]=d.attr(b),d.removeAttr(b)}),c},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){return!!a.trim(""+a(b).val())},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(a,b){(9!==b.which||""!==this.elementValue(a))&&(a.name in this.submitted||a===this.lastElement)&&this.element(a)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c=a.data(this[0].form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!this.is(e.ignore)&&e[d].call(c,this[0],b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']","focusin focusout keyup",b).validateDelegate("select, option, [type='radio'], [type='checkbox']","click",b),this.settings.invalidHandler&&a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c=this.clean(b),d=this.validationTargetFor(c),e=!0;return this.lastElement=d,void 0===d?delete this.invalid[c.name]:(this.prepareElement(d),this.currentElements=a(d),e=this.check(d)!==!1,e?delete this.invalid[d.name]:this.invalid[d.name]=!0),a(b).attr("aria-invalid",!e),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),e},showErrors:function(b){if(b){a.extend(this.errorMap,b),this.errorList=[];for(var c in b)this.errorList.push({message:b[c],element:this.findByName(c)[0]});this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function(){return!this.name&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in c||!b.objectLength(a(this).rules())?!1:(c[this.name]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([]),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d=a(b),e=b.type;return"radio"===e||"checkbox"===e?a("input[name='"+b.name+"']:checked").val():"number"===e&&"undefined"!=typeof b.validity?b.validity.badInput?!1:d.val():(c=d.val(),"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a];return void 0},defaultMessage:function(b,c){return this.findDefined(this.customMessage(b.name,c),this.customDataMessage(b,c),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")},formatAndAdd:function(b,c){var d=this.defaultMessage(b,c.method),e=/\$?\{(\d+)\}/g;"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),this.errorList.push({message:d,element:b,method:c.method}),this.errorMap[b.name]=d,this.submitted[b.name]=d},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g=this.errorsFor(b),h=this.idOrName(b),i=a(b).attr("aria-describedby");g.length?(g.removeClass(this.settings.validClass).addClass(this.settings.errorClass),g.html(c)):(g=a("<"+this.settings.errorElement+">").attr("id",h+"-error").addClass(this.settings.errorClass).html(c||""),d=g,this.settings.wrapper&&(d=g.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b),g.is("label")?g.attr("for",h):0===g.parents("label[for='"+h+"']").length&&(f=g.attr("id").replace(/(:|\.|\[|\])/g,"\\$1"),i?i.match(new RegExp("\\b"+f+"\\b"))||(i+=" "+f):i=f,a(b).attr("aria-describedby",i),e=this.groups[b.name],e&&a.each(this.groups,function(b,c){c===e&&a("[name='"+b+"']",this.currentForm).attr("aria-describedby",g.attr("id"))}))),!c&&this.settings.success&&(g.text(""),"string"==typeof this.settings.success?g.addClass(this.settings.success):this.settings.success(g,b)),this.toShow=this.toShow.add(g)},errorsFor:function(b){var c=this.idOrName(b),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+d.replace(/\s+/g,", #")),this.errors().filter(e)},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+b+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(a){this.pending[a.name]||(this.pendingRequest++,this.pending[a.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),/min|max/.test(c)&&(null===g||/number|range|text/.test(g))&&(d=Number(d)),d||0===d?e[c]=d:g===c&&"range"!==g&&(e[c]=!0);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b);for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),void 0!==d&&(e[c]=d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:delete b[d]}}),a.each(b,function(d,e){b[d]=a.isFunction(e)?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:a.trim(b).length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c,d,e=0,f=0,g=!1;if(a=a.replace(/\D/g,""),a.length<13||a.length>19)return!1;for(c=a.length-1;c>=0;c--)d=a.charAt(c),f=parseInt(d,10),g&&(f*=2)>9&&(f-=9),e+=f,g=!g;return e%10===0},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||d>=e},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||c>=a},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d){if(this.optional(c))return"dependency-mismatch";var e,f,g=this.previousValue(c);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),g.originalMessage=this.settings.messages[c.name].remote,this.settings.messages[c.name].remote=g.message,d="string"==typeof d&&{url:d}||d,g.old===b?g.valid:(g.old=b,e=this,this.startRequest(c),f={},f[c.name]=b,a.ajax(a.extend(!0,{url:d,mode:"abort",port:"validate"+c.name,dataType:"json",data:f,context:e.currentForm,success:function(d){var f,h,i,j=d===!0||"true"===d;e.settings.messages[c.name].remote=g.originalMessage,j?(i=e.formSubmitted,e.prepareElement(c),e.formSubmitted=i,e.successList.push(c),delete e.invalid[c.name],e.showErrors()):(f={},h=d||e.defaultMessage(c,"remote"),f[c.name]=g.message=a.isFunction(h)?h(b):h,e.invalid[c.name]=!0,e.showErrors(f)),g.valid=j,e.stopRequest(c,j)}},d)),"pending")}}}),a.format=function(){throw"$.format has been deprecated. Please use $.validator.format instead."};var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a.extend(a.fn,{validateDelegate:function(b,c,d){return this.bind(c,function(c){var e=a(c.target);return e.is(b)?d.apply(e,arguments):void 0})}})});
/*! jQuery Validation Plugin - v1.13.1 - 10/14/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./jquery.validate.min"],a):a(jQuery)}(function(a){!function(){function b(a){return a.replace(/<.[^<>]*?>/g," ").replace(/&nbsp;|&#160;/gi," ").replace(/[.(),;:!?%#$'\"_+=\/\-“”’]*/g,"")}a.validator.addMethod("maxWords",function(a,c,d){return this.optional(c)||b(a).match(/\b\w+\b/g).length<=d},a.validator.format("Please enter {0} words or less.")),a.validator.addMethod("minWords",function(a,c,d){return this.optional(c)||b(a).match(/\b\w+\b/g).length>=d},a.validator.format("Please enter at least {0} words.")),a.validator.addMethod("rangeWords",function(a,c,d){var e=b(a),f=/\b\w+\b/g;return this.optional(c)||e.match(f).length>=d[0]&&e.match(f).length<=d[1]},a.validator.format("Please enter between {0} and {1} words."))}(),a.validator.addMethod("accept",function(b,c,d){var e,f,g="string"==typeof d?d.replace(/\s/g,"").replace(/,/g,"|"):"image/*",h=this.optional(c);if(h)return h;if("file"===a(c).attr("type")&&(g=g.replace(/\*/g,".*"),c.files&&c.files.length))for(e=0;e<c.files.length;e++)if(f=c.files[e],!f.type.match(new RegExp(".?("+g+")$","i")))return!1;return!0},a.validator.format("Please enter a value with a valid mimetype.")),a.validator.addMethod("alphanumeric",function(a,b){return this.optional(b)||/^\w+$/i.test(a)},"Letters, numbers, and underscores only please"),a.validator.addMethod("bankaccountNL",function(a,b){if(this.optional(b))return!0;if(!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(a))return!1;var c,d,e,f=a.replace(/ /g,""),g=0,h=f.length;for(c=0;h>c;c++)d=h-c,e=f.substring(c,c+1),g+=d*e;return g%11===0},"Please specify a valid bank account number"),a.validator.addMethod("bankorgiroaccountNL",function(b,c){return this.optional(c)||a.validator.methods.bankaccountNL.call(this,b,c)||a.validator.methods.giroaccountNL.call(this,b,c)},"Please specify a valid bank or giro account number"),a.validator.addMethod("bic",function(a,b){return this.optional(b)||/^([A-Z]{6}[A-Z2-9][A-NP-Z1-2])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(a)},"Please specify a valid BIC code"),a.validator.addMethod("cifES",function(a){"use strict";var b,c,d,e,f,g,h=[];if(a=a.toUpperCase(),!a.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)"))return!1;for(d=0;9>d;d++)h[d]=parseInt(a.charAt(d),10);for(c=h[2]+h[4]+h[6],e=1;8>e;e+=2)f=(2*h[e]).toString(),g=f.charAt(1),c+=parseInt(f.charAt(0),10)+(""===g?0:parseInt(g,10));return/^[ABCDEFGHJNPQRSUVW]{1}/.test(a)?(c+="",b=10-parseInt(c.charAt(c.length-1),10),a+=b,h[8].toString()===String.fromCharCode(64+b)||h[8].toString()===a.charAt(a.length-1)):!1},"Please specify a valid CIF number."),a.validator.addMethod("creditcardtypes",function(a,b,c){if(/[^0-9\-]+/.test(a))return!1;a=a.replace(/\D/g,"");var d=0;return c.mastercard&&(d|=1),c.visa&&(d|=2),c.amex&&(d|=4),c.dinersclub&&(d|=8),c.enroute&&(d|=16),c.discover&&(d|=32),c.jcb&&(d|=64),c.unknown&&(d|=128),c.all&&(d=255),1&d&&/^(5[12345])/.test(a)?16===a.length:2&d&&/^(4)/.test(a)?16===a.length:4&d&&/^(3[47])/.test(a)?15===a.length:8&d&&/^(3(0[012345]|[68]))/.test(a)?14===a.length:16&d&&/^(2(014|149))/.test(a)?15===a.length:32&d&&/^(6011)/.test(a)?16===a.length:64&d&&/^(3)/.test(a)?16===a.length:64&d&&/^(2131|1800)/.test(a)?15===a.length:128&d?!0:!1},"Please enter a valid credit card number."),a.validator.addMethod("currency",function(a,b,c){var d,e="string"==typeof c,f=e?c:c[0],g=e?!0:c[1];return f=f.replace(/,/g,""),f=g?f+"]":f+"]?",d="^["+f+"([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$",d=new RegExp(d),this.optional(b)||d.test(a)},"Please specify a valid currency"),a.validator.addMethod("dateFA",function(a,b){return this.optional(b)||/^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(a)},"Please enter a correct date"),a.validator.addMethod("dateITA",function(a,b){var c,d,e,f,g,h=!1,i=/^\d{1,2}\/\d{1,2}\/\d{4}$/;return i.test(a)?(c=a.split("/"),d=parseInt(c[0],10),e=parseInt(c[1],10),f=parseInt(c[2],10),g=new Date(f,e-1,d,12,0,0,0),h=g.getUTCFullYear()===f&&g.getUTCMonth()===e-1&&g.getUTCDate()===d?!0:!1):h=!1,this.optional(b)||h},"Please enter a correct date"),a.validator.addMethod("dateNL",function(a,b){return this.optional(b)||/^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(a)},"Please enter a correct date"),a.validator.addMethod("extension",function(a,b,c){return c="string"==typeof c?c.replace(/,/g,"|"):"png|jpe?g|gif",this.optional(b)||a.match(new RegExp(".("+c+")$","i"))},a.validator.format("Please enter a value with a valid extension.")),a.validator.addMethod("giroaccountNL",function(a,b){return this.optional(b)||/^[0-9]{1,7}$/.test(a)},"Please specify a valid giro account number"),a.validator.addMethod("iban",function(a,b){if(this.optional(b))return!0;var c,d,e,f,g,h,i,j,k,l=a.replace(/ /g,"").toUpperCase(),m="",n=!0,o="",p="";if(!/^([a-zA-Z0-9]{4} ){2,8}[a-zA-Z0-9]{1,4}|[a-zA-Z0-9]{12,34}$/.test(l))return!1;if(c=l.substring(0,2),h={AL:"\\d{8}[\\dA-Z]{16}",AD:"\\d{8}[\\dA-Z]{12}",AT:"\\d{16}",AZ:"[\\dA-Z]{4}\\d{20}",BE:"\\d{12}",BH:"[A-Z]{4}[\\dA-Z]{14}",BA:"\\d{16}",BR:"\\d{23}[A-Z][\\dA-Z]",BG:"[A-Z]{4}\\d{6}[\\dA-Z]{8}",CR:"\\d{17}",HR:"\\d{17}",CY:"\\d{8}[\\dA-Z]{16}",CZ:"\\d{20}",DK:"\\d{14}",DO:"[A-Z]{4}\\d{20}",EE:"\\d{16}",FO:"\\d{14}",FI:"\\d{14}",FR:"\\d{10}[\\dA-Z]{11}\\d{2}",GE:"[\\dA-Z]{2}\\d{16}",DE:"\\d{18}",GI:"[A-Z]{4}[\\dA-Z]{15}",GR:"\\d{7}[\\dA-Z]{16}",GL:"\\d{14}",GT:"[\\dA-Z]{4}[\\dA-Z]{20}",HU:"\\d{24}",IS:"\\d{22}",IE:"[\\dA-Z]{4}\\d{14}",IL:"\\d{19}",IT:"[A-Z]\\d{10}[\\dA-Z]{12}",KZ:"\\d{3}[\\dA-Z]{13}",KW:"[A-Z]{4}[\\dA-Z]{22}",LV:"[A-Z]{4}[\\dA-Z]{13}",LB:"\\d{4}[\\dA-Z]{20}",LI:"\\d{5}[\\dA-Z]{12}",LT:"\\d{16}",LU:"\\d{3}[\\dA-Z]{13}",MK:"\\d{3}[\\dA-Z]{10}\\d{2}",MT:"[A-Z]{4}\\d{5}[\\dA-Z]{18}",MR:"\\d{23}",MU:"[A-Z]{4}\\d{19}[A-Z]{3}",MC:"\\d{10}[\\dA-Z]{11}\\d{2}",MD:"[\\dA-Z]{2}\\d{18}",ME:"\\d{18}",NL:"[A-Z]{4}\\d{10}",NO:"\\d{11}",PK:"[\\dA-Z]{4}\\d{16}",PS:"[\\dA-Z]{4}\\d{21}",PL:"\\d{24}",PT:"\\d{21}",RO:"[A-Z]{4}[\\dA-Z]{16}",SM:"[A-Z]\\d{10}[\\dA-Z]{12}",SA:"\\d{2}[\\dA-Z]{18}",RS:"\\d{18}",SK:"\\d{20}",SI:"\\d{15}",ES:"\\d{20}",SE:"\\d{20}",CH:"\\d{5}[\\dA-Z]{12}",TN:"\\d{20}",TR:"\\d{5}[\\dA-Z]{17}",AE:"\\d{3}\\d{16}",GB:"[A-Z]{4}\\d{14}",VG:"[\\dA-Z]{4}\\d{16}"},g=h[c],"undefined"!=typeof g&&(i=new RegExp("^[A-Z]{2}\\d{2}"+g+"$",""),!i.test(l)))return!1;for(d=l.substring(4,l.length)+l.substring(0,4),j=0;j<d.length;j++)e=d.charAt(j),"0"!==e&&(n=!1),n||(m+="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(e));for(k=0;k<m.length;k++)f=m.charAt(k),p=""+o+f,o=p%97;return 1===o},"Please specify a valid IBAN"),a.validator.addMethod("integer",function(a,b){return this.optional(b)||/^-?\d+$/.test(a)},"A positive or negative non-decimal number please"),a.validator.addMethod("ipv4",function(a,b){return this.optional(b)||/^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(a)},"Please enter a valid IP v4 address."),a.validator.addMethod("ipv6",function(a,b){return this.optional(b)||/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(a)},"Please enter a valid IP v6 address."),a.validator.addMethod("lettersonly",function(a,b){return this.optional(b)||/^[a-z]+$/i.test(a)},"Letters only please"),a.validator.addMethod("letterswithbasicpunc",function(a,b){return this.optional(b)||/^[a-z\-.,()'"\s]+$/i.test(a)},"Letters or punctuation only please"),a.validator.addMethod("mobileNL",function(a,b){return this.optional(b)||/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(a)},"Please specify a valid mobile number"),a.validator.addMethod("mobileUK",function(a,b){return a=a.replace(/\(|\)|\s+|-/g,""),this.optional(b)||a.length>9&&a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/)},"Please specify a valid mobile number"),a.validator.addMethod("nieES",function(a){"use strict";return a=a.toUpperCase(),a.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)")?/^[T]{1}/.test(a)?a[8]===/^[T]{1}[A-Z0-9]{8}$/.test(a):/^[XYZ]{1}/.test(a)?a[8]==="TRWAGMYFPDXBNJZSQVHLCKE".charAt(a.replace("X","0").replace("Y","1").replace("Z","2").substring(0,8)%23):!1:!1},"Please specify a valid NIE number."),a.validator.addMethod("nifES",function(a){"use strict";return a=a.toUpperCase(),a.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)")?/^[0-9]{8}[A-Z]{1}$/.test(a)?"TRWAGMYFPDXBNJZSQVHLCKE".charAt(a.substring(8,0)%23)===a.charAt(8):/^[KLM]{1}/.test(a)?a[8]===String.fromCharCode(64):!1:!1},"Please specify a valid NIF number."),a.validator.addMethod("nowhitespace",function(a,b){return this.optional(b)||/^\S+$/i.test(a)},"No white space please"),a.validator.addMethod("pattern",function(a,b,c){return this.optional(b)?!0:("string"==typeof c&&(c=new RegExp("^(?:"+c+")$")),c.test(a))},"Invalid format."),a.validator.addMethod("phoneNL",function(a,b){return this.optional(b)||/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(a)},"Please specify a valid phone number."),a.validator.addMethod("phoneUK",function(a,b){return a=a.replace(/\(|\)|\s+|-/g,""),this.optional(b)||a.length>9&&a.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)},"Please specify a valid phone number"),a.validator.addMethod("phoneUS",function(a,b){return a=a.replace(/\s+/g,""),this.optional(b)||a.length>9&&a.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/)},"Please specify a valid phone number"),a.validator.addMethod("phonesUK",function(a,b){return a=a.replace(/\(|\)|\s+|-/g,""),this.optional(b)||a.length>9&&a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/)},"Please specify a valid uk phone number"),a.validator.addMethod("postalCodeCA",function(a,b){return this.optional(b)||/^[ABCEGHJKLMNPRSTVXY]\d[A-Z] \d[A-Z]\d$/.test(a)},"Please specify a valid postal code"),a.validator.addMethod("postalcodeBR",function(a,b){return this.optional(b)||/^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test(a)},"Informe um CEP válido."),a.validator.addMethod("postalcodeIT",function(a,b){return this.optional(b)||/^\d{5}$/.test(a)},"Please specify a valid postal code"),a.validator.addMethod("postalcodeNL",function(a,b){return this.optional(b)||/^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(a)},"Please specify a valid postal code"),a.validator.addMethod("postcodeUK",function(a,b){return this.optional(b)||/^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(a)},"Please specify a valid UK postcode"),a.validator.addMethod("require_from_group",function(b,c,d){var e=a(d[1],c.form),f=e.eq(0),g=f.data("valid_req_grp")?f.data("valid_req_grp"):a.extend({},this),h=e.filter(function(){return g.elementValue(this)}).length>=d[0];return f.data("valid_req_grp",g),a(c).data("being_validated")||(e.data("being_validated",!0),e.each(function(){g.element(this)}),e.data("being_validated",!1)),h},a.validator.format("Please fill at least {0} of these fields.")),a.validator.addMethod("skip_or_fill_minimum",function(b,c,d){var e=a(d[1],c.form),f=e.eq(0),g=f.data("valid_skip")?f.data("valid_skip"):a.extend({},this),h=e.filter(function(){return g.elementValue(this)}).length,i=0===h||h>=d[0];return f.data("valid_skip",g),a(c).data("being_validated")||(e.data("being_validated",!0),e.each(function(){g.element(this)}),e.data("being_validated",!1)),i},a.validator.format("Please either skip these fields or fill at least {0} of them.")),jQuery.validator.addMethod("stateUS",function(a,b,c){var d,e="undefined"==typeof c,f=e||"undefined"==typeof c.caseSensitive?!1:c.caseSensitive,g=e||"undefined"==typeof c.includeTerritories?!1:c.includeTerritories,h=e||"undefined"==typeof c.includeMilitary?!1:c.includeMilitary;return d=g||h?g&&h?"^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$":g?"^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$":"^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$":"^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$",d=f?new RegExp(d):new RegExp(d,"i"),this.optional(b)||d.test(a)},"Please specify a valid state"),a.validator.addMethod("strippedminlength",function(b,c,d){return a(b).text().length>=d},a.validator.format("Please enter at least {0} characters")),a.validator.addMethod("time",function(a,b){return this.optional(b)||/^([01]\d|2[0-3])(:[0-5]\d){1,2}$/.test(a)},"Please enter a valid time, between 00:00 and 23:59"),a.validator.addMethod("time12h",function(a,b){return this.optional(b)||/^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(a)},"Please enter a valid time in 12-hour am/pm format"),a.validator.addMethod("url2",function(a,b){return this.optional(b)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},a.validator.messages.url),a.validator.addMethod("vinUS",function(a){if(17!==a.length)return!1;var b,c,d,e,f,g,h=["A","B","C","D","E","F","G","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y","Z"],i=[1,2,3,4,5,6,7,8,1,2,3,4,5,7,9,2,3,4,5,6,7,8,9],j=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2],k=0;for(b=0;17>b;b++){if(e=j[b],d=a.slice(b,b+1),8===b&&(g=d),isNaN(d)){for(c=0;c<h.length;c++)if(d.toUpperCase()===h[c]){d=i[c],d*=e,isNaN(g)&&8===c&&(g=h[c]);break}}else d*=e;k+=d}return f=k%11,10===f&&(f="X"),f===g?!0:!1},"The specified vehicle identification number (VIN) is invalid."),a.validator.addMethod("zipcodeUS",function(a,b){return this.optional(b)||/^\d{5}(-\d{4})?$/.test(a)},"The specified US ZIP Code is invalid"),a.validator.addMethod("ziprange",function(a,b){return this.optional(b)||/^90[2-5]\d\{2\}-\d{4}$/.test(a)},"Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx")});
/**
 * jqGrid English Translation
 * Tony Tomov tony@trirand.com
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
/*global jQuery, define */
(function( factory ) {
	"use strict";
	if ( typeof define === "function" && define.amd ) {
		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"../grid.base"
		], factory );
	} else {
		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

$.jgrid = $.jgrid || {};
if(!$.jgrid.hasOwnProperty("regional")) {
	$.jgrid.regional = [];
}
$.jgrid.regional["en"] = {
	defaults : {
		recordtext: "View {0} - {1} of {2}",
		emptyrecords: "No records to view",
		loadtext: "Loading...",
		savetext: "Saving...",
		pgtext : "Page {0} of {1}",
		pgfirst : "First Page",
		pglast : "Last Page",
		pgnext : "Next Page",
		pgprev : "Previous Page",
		pgrecs : "Records per Page",
		showhide: "Toggle Expand Collapse Grid",
		// mobile
		pagerCaption : "Grid::Page Settings",
		pageText : "Page:",
		recordPage : "Records per Page",
		nomorerecs : "No more records...",
		scrollPullup: "Pull up to load more...",
		scrollPulldown : "Pull down to refresh...",
		scrollRefresh : "Release to refresh..."
	},
	search : {
		caption: "Search...",
		Find: "Find",
		Reset: "Reset",
		odata: [{ oper:'eq', text:'equal'},{ oper:'ne', text:'not equal'},{ oper:'lt', text:'less'},{ oper:'le', text:'less or equal'},{ oper:'gt', text:'greater'},{ oper:'ge', text:'greater or equal'},{ oper:'bw', text:'begins with'},{ oper:'bn', text:'does not begin with'},{ oper:'in', text:'is in'},{ oper:'ni', text:'is not in'},{ oper:'ew', text:'ends with'},{ oper:'en', text:'does not end with'},{ oper:'cn', text:'contains'},{ oper:'nc', text:'does not contain'},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}],
		groupOps: [{ op: "AND", text: "all" },{ op: "OR",  text: "any" }],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value"
	},
	edit : {
		addCaption: "Add Record",
		editCaption: "Edit Record",
		bSubmit: "Submit",
		bCancel: "Cancel",
		bClose: "Close",
		saveData: "Data has been changed! Save changes?",
		bYes : "Yes",
		bNo : "No",
		bExit : "Cancel",
		msg: {
			required:"Field is required",
			number:"Please, enter valid number",
			minValue:"value must be greater than or equal to ",
			maxValue:"value must be less than or equal to",
			email: "is not a valid e-mail",
			integer: "Please, enter valid integer value",
			date: "Please, enter valid date value",
			url: "is not a valid URL. Prefix required ('http://' or 'https://')",
			nodefined : " is not defined!",
			novalue : " return value is required!",
			customarray : "Custom function should return array!",
			customfcheck : "Custom function should be present in case of custom checking!"
			
		}
	},
	view : {
		caption: "View Record",
		bClose: "Close"
	},
	del : {
		caption: "Delete",
		msg: "Delete selected record(s)?",
		bSubmit: "Delete",
		bCancel: "Cancel"
	},
	nav : {
		edittext: "",
		edittitle: "Edit selected row",
		addtext:"",
		addtitle: "Add new row",
		deltext: "",
		deltitle: "Delete selected row",
		searchtext: "",
		searchtitle: "Find records",
		refreshtext: "",
		refreshtitle: "Reload Grid",
		alertcap: "Warning",
		alerttext: "Please, select row",
		viewtext: "",
		viewtitle: "View selected row",
		savetext: "",
		savetitle: "Save row",
		canceltext: "",
		canceltitle : "Cancel row editing",
		selectcaption : "Actions..."
	},
	col : {
		caption: "Select columns",
		bSubmit: "Ok",
		bCancel: "Cancel"
	},
	errors : {
		errcap : "Error",
		nourl : "No url is set",
		norecords: "No records to process",
		model : "Length of colNames <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: ",", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat",
				"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
			],
			monthNames: [
				"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
				"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
			],
			AmPm : ["am","pm","AM","PM"],
			S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th';},
			srcformat: 'Y-m-d',
			newformat: 'n/j/Y',
			parseRe : /[#%\\\/:_;.,\t\s-]/,
			masks : {
				// see http://php.net/manual/en/function.date.php for PHP format used in jqGrid
				// and see http://docs.jquery.com/UI/Datepicker/formatDate
				// and https://github.com/jquery/globalize#dates for alternative formats used frequently
				// one can find on https://github.com/jquery/globalize/tree/master/lib/cultures many
				// information about date, time, numbers and currency formats used in different countries
				// one should just convert the information in PHP format
				ISO8601Long:"Y-m-d H:i:s",
				ISO8601Short:"Y-m-d",
				// short date:
				//    n - Numeric representation of a month, without leading zeros
				//    j - Day of the month without leading zeros
				//    Y - A full numeric representation of a year, 4 digits
				// example: 3/1/2012 which means 1 March 2012
				ShortDate: "n/j/Y", // in jQuery UI Datepicker: "M/d/yyyy"
				// long date:
				//    l - A full textual representation of the day of the week
				//    F - A full textual representation of a month
				//    d - Day of the month, 2 digits with leading zeros
				//    Y - A full numeric representation of a year, 4 digits
				LongDate: "l, F d, Y", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy"
				// long date with long time:
				//    l - A full textual representation of the day of the week
				//    F - A full textual representation of a month
				//    d - Day of the month, 2 digits with leading zeros
				//    Y - A full numeric representation of a year, 4 digits
				//    g - 12-hour format of an hour without leading zeros
				//    i - Minutes with leading zeros
				//    s - Seconds, with leading zeros
				//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
				FullDateTime: "l, F d, Y g:i:s A", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy h:mm:ss tt"
				// month day:
				//    F - A full textual representation of a month
				//    d - Day of the month, 2 digits with leading zeros
				MonthDay: "F d", // in jQuery UI Datepicker: "MMMM dd"
				// short time (without seconds)
				//    g - 12-hour format of an hour without leading zeros
				//    i - Minutes with leading zeros
				//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
				ShortTime: "g:i A", // in jQuery UI Datepicker: "h:mm tt"
				// long time (with seconds)
				//    g - 12-hour format of an hour without leading zeros
				//    i - Minutes with leading zeros
				//    s - Seconds, with leading zeros
				//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
				LongTime: "g:i:s A", // in jQuery UI Datepicker: "h:mm:ss tt"
				SortableDateTime: "Y-m-d\\TH:i:s",
				UniversalSortableDateTime: "Y-m-d H:i:sO",
				// month with year
				//    Y - A full numeric representation of a year, 4 digits
				//    F - A full textual representation of a month
				YearMonth: "F, Y" // in jQuery UI Datepicker: "MMMM, yyyy"
			},
			reformatAfterEdit : false,
			userLocalTime : false
		},
		baseLinkUrl: '',
		showAction: '',
		target: '',
		checkbox : {disabled:true},
		idName : 'id'
	}
};
}));

/* 
* jqGrid  5.0.2  
* Copyright (c) 2008, Tony Tomov, tony@trirand.com 
*  License: http://guriddo.net/?page_id=103334 
*
* Modules: grid.base.js; jquery.fmatter.js; grid.common.js; grid.formedit.js; grid.filter.js; grid.inlinedit.js; grid.celledit.js; jqModal.js; jqDnR.js; grid.subgrid.js; grid.grouping.js; grid.treegrid.js; grid.pivot.js; grid.import.js; grid.utils.js; grid.jqueryui.js;
*/
!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery"],a):a(jQuery)}(function($){"use strict";$.jgrid=$.jgrid||{},$.jgrid.hasOwnProperty("defaults")||($.jgrid.defaults={}),$.extend($.jgrid,{version:"5.0.2",htmlDecode:function(a){return a&&("&nbsp;"===a||"&#160;"===a||1===a.length&&160===a.charCodeAt(0))?"":a?String(a).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&quot;/g,'"').replace(/&amp;/g,"&"):a},htmlEncode:function(a){return a?String(a).replace(/&/g,"&amp;").replace(/\"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):a},template:function(a){var
b,c=$.makeArray(arguments).slice(1),d=c.length;return null==a&&(a=""),a.replace(/\{([\w\-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}/g,function(a,e){if(!isNaN(parseInt(e,10)))return c[parseInt(e,10)];for(b=0;d>b;b++)if($.isArray(c[b]))for(var
f=c[b],g=f.length;g--;)if(e===f[g].nm)return f[g].v})},msie:"Microsoft Internet Explorer"===navigator.appName,msiever:function(){var
a=-1,b=navigator.userAgent,c=new
RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");return null!=c.exec(b)&&(a=parseFloat(RegExp.$1)),a},getCellIndex:function(a){var
b=$(a);return b.is("tr")?-1:(b=(b.is("td")||b.is("th")?b:b.closest("td,th"))[0],$.jgrid.msie?$.inArray(b,b.parentNode.cells):b.cellIndex)},stripHtml:function(a){a=String(a);var
b=/<("[^"]*"|'[^']*'|[^'">])*>/gi;return a?(a=a.replace(b,""),a&&"&nbsp;"!==a&&"&#160;"!==a?a.replace(/\"/g,"'"):""):a},stripPref:function(a,b){var
c=$.type(a);return("string"===c||"number"===c)&&(a=String(a),b=""!==a?String(b).replace(String(a),""):b),b},parse:function(jsonString){var
js=jsonString;return"while(1);"===js.substr(0,9)&&(js=js.substr(9)),"/*"===js.substr(0,2)&&(js=js.substr(2,js.length-4)),js||(js="{}"),$.jgrid.useJSON===!0&&"object"==typeof
JSON&&"function"==typeof
JSON.parse?JSON.parse(js):eval("("+js+")")},parseDate:function(a,b,c,d){var
e,f,g,h=/\\.|[dDjlNSwzWFmMntLoYyaABgGhHisueIOPTZcrU]/g,i=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,j=/[^-+\dA-Z]/g,k=new
RegExp("^/Date\\((([-+])?[0-9]+)(([-+])([0-9]{2})([0-9]{2}))?\\)/$"),l="string"==typeof
b?b.match(k):null,m=function(a,b){for(a=String(a),b=parseInt(b,10)||2;a.length<b;)a="0"+a;return a},n={m:1,d:1,y:1970,h:0,i:0,s:0,u:0},o=0,p=function(a,b){return 0===a?12===b&&(b=0):12!==b&&(b+=12),b},q=0;if(void
0===d&&(d=$.jgrid.getRegional(this,"formatter.date")),void
0===d.parseRe&&(d.parseRe=/[#%\\\/:_;.,\t\s-]/),d.masks.hasOwnProperty(a)&&(a=d.masks[a]),b&&null!=b)if(isNaN(b-0)||"u"!==String(a).toLowerCase())if(b.constructor===Date)o=b;else
if(null!==l)o=new
Date(parseInt(l[1],10)),l[3]&&(q=60*Number(l[5])+Number(l[6]),q*="-"===l[4]?1:-1,q-=o.getTimezoneOffset(),o.setTime(Number(Number(o)+60*q*1e3)));else{for("ISO8601Long"===d.srcformat&&"Z"===b.charAt(b.length-1)&&(q-=(new
Date).getTimezoneOffset()),b=String(b).replace(/\T/g,"#").replace(/\t/,"%").split(d.parseRe),a=a.replace(/\T/g,"#").replace(/\t/,"%").split(d.parseRe),f=0,g=a.length;g>f;f++){switch(a[f]){case"M":e=$.inArray(b[f],d.monthNames),-1!==e&&12>e&&(b[f]=e+1,n.m=b[f]);break;case"F":e=$.inArray(b[f],d.monthNames,12),-1!==e&&e>11&&(b[f]=e+1-12,n.m=b[f]);break;case"n":a[f]="m";break;case"j":a[f]="d";break;case"a":e=$.inArray(b[f],d.AmPm),-1!==e&&2>e&&b[f]===d.AmPm[e]&&(b[f]=e,n.h=p(b[f],n.h));break;case"A":e=$.inArray(b[f],d.AmPm),-1!==e&&e>1&&b[f]===d.AmPm[e]&&(b[f]=e-2,n.h=p(b[f],n.h));break;case"g":n.h=parseInt(b[f],10)}void
0!==b[f]&&(n[a[f].toLowerCase()]=parseInt(b[f],10))}if(n.f&&(n.m=n.f),0===n.m&&0===n.y&&0===n.d)return"&#160;";n.m=parseInt(n.m,10)-1;var
r=n.y;r>=70&&99>=r?n.y=1900+n.y:r>=0&&69>=r&&(n.y=2e3+n.y),o=new
Date(n.y,n.m,n.d,n.h,n.i,n.s,n.u),q>0&&o.setTime(Number(Number(o)+60*q*1e3))}else
o=new
Date(1e3*parseFloat(b));else
o=new
Date(n.y,n.m,n.d,n.h,n.i,n.s,n.u);if(d.userLocalTime&&0===q&&(q-=(new
Date).getTimezoneOffset(),q>0&&o.setTime(Number(Number(o)+60*q*1e3))),void
0===c)return o;d.masks.hasOwnProperty(c)?c=d.masks[c]:c||(c="Y-m-d");var
s=o.getHours(),t=o.getMinutes(),u=o.getDate(),v=o.getMonth()+1,w=o.getTimezoneOffset(),x=o.getSeconds(),y=o.getMilliseconds(),z=o.getDay(),A=o.getFullYear(),B=(z+6)%7+1,C=(new
Date(A,v-1,u)-new
Date(A,0,1))/864e5,D={d:m(u),D:d.dayNames[z],j:u,l:d.dayNames[z+7],N:B,S:d.S(u),w:z,z:C,W:5>B?Math.floor((C+B-1)/7)+1:Math.floor((C+B-1)/7)||((new
Date(A-1,0,1).getDay()+6)%7<4?53:52),F:d.monthNames[v-1+12],m:m(v),M:d.monthNames[v-1],n:v,t:"?",L:"?",o:"?",Y:A,y:String(A).substring(2),a:12>s?d.AmPm[0]:d.AmPm[1],A:12>s?d.AmPm[2]:d.AmPm[3],B:"?",g:s%12||12,G:s,h:m(s%12||12),H:m(s),i:m(t),s:m(x),u:y,e:"?",I:"?",O:(w>0?"-":"+")+m(100*Math.floor(Math.abs(w)/60)+Math.abs(w)%60,4),P:"?",T:(String(o).match(i)||[""]).pop().replace(j,""),Z:"?",c:"?",r:"?",U:Math.floor(o/1e3)};return c.replace(h,function(a){return D.hasOwnProperty(a)?D[a]:a.substring(1)})},jqID:function(a){return String(a).replace(/[!"#$%&'()*+,.\/:; <=>?@\[\\\]\^`{|}~]/g,"\\$&")},guid:1,uidPref:"jqg",randId:function(a){return(a||$.jgrid.uidPref)+$.jgrid.guid++},getAccessor:function(a,b){var
c,d,e,f=[];if("function"==typeof
b)return b(a);if(c=a[b],void
0===c)try{if("string"==typeof
b&&(f=b.split(".")),e=f.length)for(c=a;c&&e--;)d=f.shift(),c=c[d]}catch(g){}return c},getXmlData:function(a,b,c){var
d,e="string"==typeof
b?b.match(/^(.*)\[(\w+)\]$/):null;return"function"==typeof
b?b(a):e&&e[2]?e[1]?$(e[1],a).attr(e[2]):$(a).attr(e[2]):(d=$(b,a),c?d:d.length>0?$(d).text():void
0)},cellWidth:function(){var
a=$("<div class='ui-jqgrid' style='left:10000px'><table class='ui-jqgrid-btable ui-common-table' style='width:5px;'><tr class='jqgrow'><td style='width:5px;display:block;'></td></tr></table></div>"),b=a.appendTo("body").find("td").width();return a.remove(),Math.abs(b-5)>.1},isLocalStorage:function(){try{return"localStorage"in
window&&null!==window.localStorage}catch(a){return!1}},getRegional:function(a,b,c){var
d;return void
0!==c?c:(a.p&&a.p.regional&&$.jgrid.regional&&(d=$.jgrid.getAccessor($.jgrid.regional[a.p.regional]||{},b)),void
0===d&&(d=$.jgrid.getAccessor($.jgrid,b)),d)},isMobile:function(){try{return/Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent)?!0:!1}catch(a){return!1}},cell_width:!0,ajaxOptions:{},from:function(source){var
$t=this,QueryObject=function(d,q){"string"==typeof
d&&(d=$.data(d));var
self=this,_data=d,_usecase=!0,_trim=!1,_query=q,_stripNum=/[\$,%]/g,_lastCommand=null,_lastField=null,_orDepth=0,_negate=!1,_queuedOperator="",_sorting=[],_useProperties=!0;if("object"!=typeof
d||!d.push)throw"data provides is not an array";return d.length>0&&(_useProperties="object"!=typeof
d[0]?!1:!0),this._hasData=function(){return null===_data?!1:0===_data.length?!1:!0},this._getStr=function(a){var
b=[];return _trim&&b.push("jQuery.trim("),b.push("String("+a+")"),_trim&&b.push(")"),_usecase||b.push(".toLowerCase()"),b.join("")},this._strComp=function(a){return"string"==typeof
a?".toString()":""},this._group=function(a,b){return{field:a.toString(),unique:b,items:[]}},this._toStr=function(a){return _trim&&(a=$.trim(a)),a=a.toString().replace(/\\/g,"\\\\").replace(/\"/g,'\\"'),_usecase?a:a.toLowerCase()},this._funcLoop=function(a){var
b=[];return $.each(_data,function(c,d){b.push(a(d))}),b},this._append=function(a){var
b;for(null===_query?_query="":_query+=""===_queuedOperator?" && ":_queuedOperator,b=0;_orDepth>b;b++)_query+="(";_negate&&(_query+="!"),_query+="("+a+")",_negate=!1,_queuedOperator="",_orDepth=0},this._setCommand=function(a,b){_lastCommand=a,_lastField=b},this._resetNegate=function(){_negate=!1},this._repeatCommand=function(a,b){return null===_lastCommand?self:null!==a&&null!==b?_lastCommand(a,b):null===_lastField?_lastCommand(a):_useProperties?_lastCommand(_lastField,a):_lastCommand(a)},this._equals=function(a,b){return 0===self._compare(a,b,1)},this._compare=function(a,b,c){var
d=Object.prototype.toString;return void
0===c&&(c=1),void
0===a&&(a=null),void
0===b&&(b=null),null===a&&null===b?0:null===a&&null!==b?1:null!==a&&null===b?-1:"[object Date]"===d.call(a)&&"[object Date]"===d.call(b)?b>a?-c:a>b?c:0:(_usecase||"number"==typeof
a||"number"==typeof
b||(a=String(a),b=String(b)),b>a?-c:a>b?c:0)},this._performSort=function(){0!==_sorting.length&&(_data=self._doSort(_data,0))},this._doSort=function(a,b){var
c=_sorting[b].by,d=_sorting[b].dir,e=_sorting[b].type,f=_sorting[b].datefmt,g=_sorting[b].sfunc;if(b===_sorting.length-1)return self._getOrder(a,c,d,e,f,g);b++;var
h,i,j,k=self._getGroup(a,c,d,e,f),l=[];for(h=0;h<k.length;h++)for(j=self._doSort(k[h].items,b),i=0;i<j.length;i++)l.push(j[i]);return l},this._getOrder=function(a,b,c,d,e,f){var
g,h,i,j,k=[],l=[],m="a"===c?1:-1;void
0===d&&(d="text"),j="float"===d||"number"===d||"currency"===d||"numeric"===d?function(a){var
b=parseFloat(String(a).replace(_stripNum,""));return isNaN(b)?Number.NEGATIVE_INFINITY:b}:"int"===d||"integer"===d?function(a){return a?parseFloat(String(a).replace(_stripNum,"")):Number.NEGATIVE_INFINITY}:"date"===d||"datetime"===d?function(a){return $.jgrid.parseDate.call($t,e,a).getTime()}:$.isFunction(d)?d:function(a){return a=a?$.trim(String(a)):"",_usecase?a:a.toLowerCase()},$.each(a,function(a,c){h=""!==b?$.jgrid.getAccessor(c,b):c,void
0===h&&(h=""),h=j(h,c),l.push({vSort:h,index:a})}),$.isFunction(f)?l.sort(function(a,b){return a=a.vSort,b=b.vSort,f.call(this,a,b,m)}):l.sort(function(a,b){return a=a.vSort,b=b.vSort,self._compare(a,b,m)}),i=0;for(var
n=a.length;n>i;)g=l[i].index,k.push(a[g]),i++;return k},this._getGroup=function(a,b,c,d,e){var
f,g=[],h=null,i=null;return $.each(self._getOrder(a,b,c,d,e),function(a,c){f=$.jgrid.getAccessor(c,b),null==f&&(f=""),self._equals(i,f)||(i=f,null!==h&&g.push(h),h=self._group(b,f)),h.items.push(c)}),null!==h&&g.push(h),g},this.ignoreCase=function(){return _usecase=!1,self},this.useCase=function(){return _usecase=!0,self},this.trim=function(){return _trim=!0,self},this.noTrim=function(){return _trim=!1,self},this.execute=function(){var
match=_query,results=[];return null===match?self:($.each(_data,function(){eval(match)&&results.push(this)}),_data=results,self)},this.data=function(){return _data},this.select=function(a){if(self._performSort(),!self._hasData())return[];if(self.execute(),$.isFunction(a)){var
b=[];return $.each(_data,function(c,d){b.push(a(d))}),b}return _data},this.hasMatch=function(){return self._hasData()?(self.execute(),_data.length>0):!1},this.andNot=function(a,b,c){return _negate=!_negate,self.and(a,b,c)},this.orNot=function(a,b,c){return _negate=!_negate,self.or(a,b,c)},this.not=function(a,b,c){return self.andNot(a,b,c)},this.and=function(a,b,c){return _queuedOperator=" && ",void
0===a?self:self._repeatCommand(a,b,c)},this.or=function(a,b,c){return _queuedOperator=" || ",void
0===a?self:self._repeatCommand(a,b,c)},this.orBegin=function(){return _orDepth++,self},this.orEnd=function(){return null!==_query&&(_query+=")"),self},this.isNot=function(a){return _negate=!_negate,self.is(a)},this.is=function(a){return self._append("this."+a),self._resetNegate(),self},this._compareValues=function(a,b,c,d,e){var
f;f=_useProperties?"jQuery.jgrid.getAccessor(this,'"+b+"')":"this",void
0===c&&(c=null);var
g=c,h=void
0===e.stype?"text":e.stype;if(null!==c)switch(h){case"int":case"integer":g=isNaN(Number(g))||""===g?"0":g,f="parseInt("+f+",10)",g="parseInt("+g+",10)";break;case"float":case"number":case"numeric":g=String(g).replace(_stripNum,""),g=isNaN(Number(g))||""===g?"0":g,f="parseFloat("+f+")",g="parseFloat("+g+")";break;case"date":case"datetime":g=String($.jgrid.parseDate.call($t,e.srcfmt||"Y-m-d",g).getTime()),f='jQuery.jgrid.parseDate.call(jQuery("#'+$.jgrid.jqID($t.p.id)+'")[0],"'+e.srcfmt+'",'+f+").getTime()";break;default:f=self._getStr(f),g=self._getStr('"'+self._toStr(g)+'"')}return self._append(f+" "+d+" "+g),self._setCommand(a,b),self._resetNegate(),self},this.equals=function(a,b,c){return self._compareValues(self.equals,a,b,"==",c)},this.notEquals=function(a,b,c){return self._compareValues(self.equals,a,b,"!==",c)},this.isNull=function(a,b,c){return self._compareValues(self.equals,a,null,"===",c)},this.greater=function(a,b,c){return self._compareValues(self.greater,a,b,">",c)},this.less=function(a,b,c){return self._compareValues(self.less,a,b,"<",c)},this.greaterOrEquals=function(a,b,c){return self._compareValues(self.greaterOrEquals,a,b,">=",c)},this.lessOrEquals=function(a,b,c){return self._compareValues(self.lessOrEquals,a,b,"<=",c)},this.startsWith=function(a,b){var
c=null==b?a:b,d=_trim?$.trim(c.toString()).length:c.toString().length;return _useProperties?self._append(self._getStr("jQuery.jgrid.getAccessor(this,'"+a+"')")+".substr(0,"+d+") == "+self._getStr('"'+self._toStr(b)+'"')):(null!=b&&(d=_trim?$.trim(b.toString()).length:b.toString().length),self._append(self._getStr("this")+".substr(0,"+d+") == "+self._getStr('"'+self._toStr(a)+'"'))),self._setCommand(self.startsWith,a),self._resetNegate(),self},this.endsWith=function(a,b){var
c=null==b?a:b,d=_trim?$.trim(c.toString()).length:c.toString().length;return _useProperties?self._append(self._getStr("jQuery.jgrid.getAccessor(this,'"+a+"')")+".substr("+self._getStr("jQuery.jgrid.getAccessor(this,'"+a+"')")+".length-"+d+","+d+') == "'+self._toStr(b)+'"'):self._append(self._getStr("this")+".substr("+self._getStr("this")+'.length-"'+self._toStr(a)+'".length,"'+self._toStr(a)+'".length) == "'+self._toStr(a)+'"'),self._setCommand(self.endsWith,a),self._resetNegate(),self},this.contains=function(a,b){return _useProperties?self._append(self._getStr("jQuery.jgrid.getAccessor(this,'"+a+"')")+'.indexOf("'+self._toStr(b)+'",0) > -1'):self._append(self._getStr("this")+'.indexOf("'+self._toStr(a)+'",0) > -1'),self._setCommand(self.contains,a),self._resetNegate(),self},this.groupBy=function(a,b,c,d){return self._hasData()?self._getGroup(_data,a,b,c,d):null},this.orderBy=function(a,b,c,d,e){return b=null==b?"a":$.trim(b.toString().toLowerCase()),null==c&&(c="text"),null==d&&(d="Y-m-d"),null==e&&(e=!1),("desc"===b||"descending"===b)&&(b="d"),("asc"===b||"ascending"===b)&&(b="a"),_sorting.push({by:a,dir:b,type:c,datefmt:d,sfunc:e}),self},self};return new
QueryObject(source,null)},getMethod:function(a){return this.getAccessor($.fn.jqGrid,a)},extend:function(a){$.extend($.fn.jqGrid,a),this.no_legacy_api||$.fn.extend(a)},clearBeforeUnload:function(a){var
b,c=$("#"+$.jgrid.jqID(a))[0];if(c.grid){b=c.grid,$.isFunction(b.emptyRows)&&b.emptyRows.call(c,!0,!0),$(document).unbind("mouseup.jqGrid"+c.p.id),$(b.hDiv).unbind("mousemove"),$(c).unbind();var
d,e=b.headers.length,f=["formatCol","sortData","updatepager","refreshIndex","setHeadCheckBox","constructTr","formatter","addXmlData","addJSONData","grid","p"];for(d=0;e>d;d++)b.headers[d].el=null;for(d
in
b)b.hasOwnProperty(d)&&(b[d]=null);for(d
in
c.p)c.p.hasOwnProperty(d)&&(c.p[d]=$.isArray(c.p[d])?[]:null);for(e=f.length,d=0;e>d;d++)c.hasOwnProperty(f[d])&&(c[f[d]]=null,delete
c[f[d]])}},gridUnload:function(a){if(a){a=$.trim(a),0===a.indexOf("#")&&(a=a.substring(1));var
b=$("#"+$.jgrid.jqID(a))[0];if(b.grid){var
c={id:$(b).attr("id"),cl:$(b).attr("class")};b.p.pager&&$(b.p.pager).unbind().empty().removeClass("ui-state-default ui-jqgrid-pager ui-corner-bottom");var
d=document.createElement("table");d.className=c.cl;var
e=$.jgrid.jqID(b.id);$(d).removeClass("ui-jqgrid-btable ui-common-table").insertBefore("#gbox_"+e),1===$(b.p.pager).parents("#gbox_"+e).length&&$(b.p.pager).insertBefore("#gbox_"+e),$.jgrid.clearBeforeUnload(a),$("#gbox_"+e).remove(),$(d).attr({id:c.id}),$("#alertmod_"+$.jgrid.jqID(a)).remove()}}},gridDestroy:function(a){if(a){a=$.trim(a),0===a.indexOf("#")&&(a=a.substring(1));var
b=$("#"+$.jgrid.jqID(a))[0];if(b.grid){b.p.pager&&$(b.p.pager).remove();try{$.jgrid.clearBeforeUnload(a),$("#gbox_"+$.jgrid.jqID(a)).remove()}catch(c){}}}},styleUI:{jQueryUI:{common:{disabled:"ui-state-disabled",highlight:"ui-state-highlight",hover:"ui-state-hover",cornerall:"ui-corner-all",cornertop:"ui-corner-top",cornerbottom:"ui-corner-bottom",hidden:"ui-helper-hidden",icon_base:"ui-icon",overlay:"ui-widget-overlay",active:"ui-state-active",error:"ui-state-error",button:"ui-state-default ui-corner-all",content:"ui-widget-content"},base:{entrieBox:"ui-widget ui-widget-content ui-corner-all",viewBox:"",headerTable:"",headerBox:"ui-state-default",rowTable:"",rowBox:"ui-widget-content",footerTable:"",footerBox:"ui-widget-content",headerDiv:"ui-state-default",gridtitleBox:"ui-widget-header ui-corner-top ui-helper-clearfix",customtoolbarBox:"ui-state-default",loadingBox:"ui-state-default ui-state-active",rownumBox:"ui-state-default",scrollBox:"ui-widget-content",multiBox:"cbox",pagerBox:"ui-state-default ui-corner-bottom",pagerTable:"",toppagerBox:"ui-state-default",pgInput:"ui-corner-all",pgSelectBox:"ui-widget-content ui-corner-all",pgButtonBox:"ui-corner-all",icon_first:"ui-icon-seek-first",icon_prev:"ui-icon-seek-prev",icon_next:"ui-icon-seek-next",icon_end:"ui-icon-seek-end",icon_asc:"ui-icon-triangle-1-n",icon_desc:"ui-icon-triangle-1-s",icon_caption_open:"ui-icon-circle-triangle-n",icon_caption_close:"ui-icon-circle-triangle-s"},modal:{modal:"ui-widget ui-widget-content ui-corner-all",header:"ui-widget-header ui-corner-all ui-helper-clearfix",content:"ui-widget-content",resizable:"ui-resizable-handle ui-resizable-se",icon_close:"ui-icon-closethick",icon_resizable:"ui-icon-gripsmall-diagonal-se"},celledit:{inputClass:"ui-widget-content ui-corner-all"},inlinedit:{inputClass:"ui-widget-content ui-corner-all",icon_edit_nav:"ui-icon-pencil",icon_add_nav:"ui-icon-plus",icon_save_nav:"ui-icon-disk",icon_cancel_nav:"ui-icon-cancel"},formedit:{inputClass:"ui-widget-content ui-corner-all",icon_prev:"ui-icon-triangle-1-w",icon_next:"ui-icon-triangle-1-e",icon_save:"ui-icon-disk",icon_close:"ui-icon-close",icon_del:"ui-icon-scissors",icon_cancel:"ui-icon-cancel"},navigator:{icon_edit_nav:"ui-icon-pencil",icon_add_nav:"ui-icon-plus",icon_del_nav:"ui-icon-trash",icon_search_nav:"ui-icon-search",icon_refresh_nav:"ui-icon-refresh",icon_view_nav:"ui-icon-document",icon_newbutton_nav:"ui-icon-newwin"},grouping:{icon_plus:"ui-icon-circlesmall-plus",icon_minus:"ui-icon-circlesmall-minus"},filter:{table_widget:"ui-widget ui-widget-content",srSelect:"ui-widget-content ui-corner-all",srInput:"ui-widget-content ui-corner-all",menu_widget:"ui-widget ui-widget-content ui-corner-all",icon_search:"ui-icon-search",icon_reset:"ui-icon-arrowreturnthick-1-w",icon_query:"ui-icon-comment"},subgrid:{icon_plus:"ui-icon-plus",icon_minus:"ui-icon-minus",icon_open:"ui-icon-carat-1-sw"},treegrid:{icon_plus:"ui-icon-triangle-1-",icon_minus:"ui-icon-triangle-1-s",icon_leaf:"ui-icon-radio-off"},fmatter:{icon_edit:"ui-icon-pencil",icon_add:"ui-icon-plus",icon_save:"ui-icon-disk",icon_cancel:"ui-icon-cancel",icon_del:"ui-icon-trash"}},Bootstrap:{common:{disabled:"ui-disabled",highlight:"success",hover:"active",cornerall:"",cornertop:"",cornerbottom:"",hidden:"",icon_base:"glyphicon",overlay:"ui-overlay",active:"active",error:"bg-danger",button:"btn btn-default",content:""},base:{entrieBox:"",viewBox:"table-responsive",headerTable:"table table-bordered",headerBox:"",rowTable:"table table-bordered",rowBox:"",footerTable:"table table-bordered",footerBox:"",headerDiv:"",gridtitleBox:"",customtoolbarBox:"",loadingBox:"row",rownumBox:"active",scrollBox:"",multiBox:"checkbox",pagerBox:"",pagerTable:"table",toppagerBox:"",pgInput:"form-control",pgSelectBox:"form-control",pgButtonBox:"",icon_first:"glyphicon-step-backward",icon_prev:"glyphicon-backward",icon_next:"glyphicon-forward",icon_end:"glyphicon-step-forward",icon_asc:"glyphicon-triangle-top",icon_desc:"glyphicon-triangle-bottom",icon_caption_open:"glyphicon-circle-arrow-up",icon_caption_close:"glyphicon-circle-arrow-down"},modal:{modal:"modal-content",header:"modal-header",title:"modal-title",content:"modal-body",resizable:"ui-resizable-handle ui-resizable-se",icon_close:"glyphicon-remove-circle",icon_resizable:"glyphicon-import"},celledit:{inputClass:"form-control"},inlinedit:{inputClass:"form-control",icon_edit_nav:"glyphicon-edit",icon_add_nav:"glyphicon-plus",icon_save_nav:"glyphicon-save",icon_cancel_nav:"glyphicon-remove-circle"},formedit:{inputClass:"form-control",icon_prev:"glyphicon-step-backward",icon_next:"glyphicon-step-forward",icon_save:"glyphicon-save",icon_close:"glyphicon-remove-circle",icon_del:"glyphicon-trash",icon_cancel:"glyphicon-remove-circle"},navigator:{icon_edit_nav:"glyphicon-edit",icon_add_nav:"glyphicon-plus",icon_del_nav:"glyphicon-trash",icon_search_nav:"glyphicon-search",icon_refresh_nav:"glyphicon-refresh",icon_view_nav:"glyphicon-info-sign",icon_newbutton_nav:"glyphicon-new-window"},grouping:{icon_plus:"glyphicon-triangle-right",icon_minus:"glyphicon-triangle-bottom"},filter:{table_widget:"table table-condensed",srSelect:"form-control",srInput:"form-control",menu_widget:"",icon_search:"glyphicon-search",icon_reset:"glyphicon-refresh",icon_query:"glyphicon-comment"},subgrid:{icon_plus:"glyphicon-triangle-right",icon_minus:"glyphicon-triangle-bottom",icon_open:"glyphicon-indent-left"},treegrid:{icon_plus:"glyphicon-triangle-right",icon_minus:"glyphicon-triangle-bottom",icon_leaf:"glyphicon-unchecked"},fmatter:{icon_edit:"glyphicon-edit",icon_add:"glyphicon-plus",icon_save:"glyphicon-save",icon_cancel:"glyphicon-remove-circle",icon_del:"glyphicon-trash"}}}}),$.fn.jqGrid=function(a){if("string"==typeof
a){var
b=$.jgrid.getMethod(a);if(!b)throw"jqGrid - No such method: "+a;var
c=$.makeArray(arguments).slice(1);return b.apply(this,c)}return this.each(function(){if(!this.grid){var
b;null!=a&&void
0!==a.data&&(b=a.data,a.data=[]);var
c=$.extend(!0,{url:"",height:150,page:1,rowNum:20,rowTotal:null,records:0,pager:"",pgbuttons:!0,pginput:!0,colModel:[],rowList:[],colNames:[],sortorder:"asc",sortname:"",datatype:"xml",mtype:"GET",altRows:!1,selarrrow:[],savedRow:[],shrinkToFit:!0,xmlReader:{},jsonReader:{},subGrid:!1,subGridModel:[],reccount:0,lastpage:0,lastsort:0,selrow:null,beforeSelectRow:null,onSelectRow:null,onSortCol:null,ondblClickRow:null,onRightClickRow:null,onPaging:null,onSelectAll:null,onInitGrid:null,loadComplete:null,gridComplete:null,loadError:null,loadBeforeSend:null,afterInsertRow:null,beforeRequest:null,beforeProcessing:null,onHeaderClick:null,viewrecords:!1,loadonce:!1,multiselect:!1,multikey:!1,editurl:null,search:!1,caption:"",hidegrid:!0,hiddengrid:!1,postData:{},userData:{},treeGrid:!1,treeGridModel:"nested",treeReader:{},treeANode:-1,ExpandColumn:null,tree_root_level:0,prmNames:{page:"page",rows:"rows",sort:"sidx",order:"sord",search:"_search",nd:"nd",id:"id",oper:"oper",editoper:"edit",addoper:"add",deloper:"del",subgridid:"id",npage:null,totalrows:"totalrows"},forceFit:!1,gridstate:"visible",cellEdit:!1,cellsubmit:"remote",nv:0,loadui:"enable",toolbar:[!1,""],scroll:!1,multiboxonly:!1,deselectAfterSort:!0,scrollrows:!1,autowidth:!1,scrollOffset:18,cellLayout:5,subGridWidth:20,multiselectWidth:30,gridview:!0,rownumWidth:35,rownumbers:!1,pagerpos:"center",recordpos:"right",footerrow:!1,userDataOnFooter:!1,hoverrows:!0,altclass:"ui-priority-secondary",viewsortcols:[!1,"vertical",!0],resizeclass:"",autoencode:!1,remapColumns:[],ajaxGridOptions:{},direction:"ltr",toppager:!1,headertitles:!1,scrollTimeout:40,data:[],_index:{},grouping:!1,groupingView:{groupField:[],groupOrder:[],groupText:[],groupColumnShow:[],groupSummary:[],showSummaryOnHide:!1,sortitems:[],sortnames:[],summary:[],summaryval:[],plusicon:"",minusicon:"",displayField:[],groupSummaryPos:[],formatDisplayField:[],_locgr:!1},ignoreCase:!0,cmTemplate:{},idPrefix:"",multiSort:!1,minColWidth:33,scrollPopUp:!1,scrollTopOffset:0,scrollLeftOffset:"100%",storeNavOptions:!1,regional:"en",styleUI:"jQueryUI",responsive:!1,restoreCellonFail:!0},$.jgrid.defaults,a);void
0!==b&&(c.data=b,a.data=b);var
d=this,e={headers:[],cols:[],footers:[],dragStart:function(a,b,e){var
f=$(this.bDiv).offset().left;this.resizing={idx:a,startX:b.pageX,sOL:b.pageX-f},this.hDiv.style.cursor="col-resize",this.curGbox=$("#rs_m"+$.jgrid.jqID(c.id),"#gbox_"+$.jgrid.jqID(c.id)),this.curGbox.css({display:"block",left:b.pageX-f,top:e[1],height:e[2]}),$(d).triggerHandler("jqGridResizeStart",[b,a]),$.isFunction(c.resizeStart)&&c.resizeStart.call(d,b,a),document.onselectstart=function(){return!1}},dragMove:function(a){if(this.resizing){var
b,d,e=a.pageX-this.resizing.startX,f=this.headers[this.resizing.idx],g="ltr"===c.direction?f.width+e:f.width-e;g>33&&(this.curGbox.css({left:this.resizing.sOL+e}),c.forceFit===!0?(b=this.headers[this.resizing.idx+c.nv],d="ltr"===c.direction?b.width-e:b.width+e,d>c.minColWidth&&(f.newWidth=g,b.newWidth=d)):(this.newWidth="ltr"===c.direction?c.tblwidth+e:c.tblwidth-e,f.newWidth=g))}},dragEnd:function(a){if(this.hDiv.style.cursor="default",this.resizing){var
b=this.resizing.idx,e=this.headers[b].newWidth||this.headers[b].width;e=parseInt(e,10),this.resizing=!1,$("#rs_m"+$.jgrid.jqID(c.id)).css("display","none"),c.colModel[b].width=e,this.headers[b].width=e,this.headers[b].el.style.width=e+"px",this.cols[b].style.width=e+"px",this.footers.length>0&&(this.footers[b].style.width=e+"px"),c.forceFit===!0?(e=this.headers[b+c.nv].newWidth||this.headers[b+c.nv].width,this.headers[b+c.nv].width=e,this.headers[b+c.nv].el.style.width=e+"px",this.cols[b+c.nv].style.width=e+"px",this.footers.length>0&&(this.footers[b+c.nv].style.width=e+"px"),c.colModel[b+c.nv].width=e):(c.tblwidth=this.newWidth||c.tblwidth,$("table:first",this.bDiv).css("width",c.tblwidth+"px"),$("table:first",this.hDiv).css("width",c.tblwidth+"px"),this.hDiv.scrollLeft=this.bDiv.scrollLeft,c.footerrow&&($("table:first",this.sDiv).css("width",c.tblwidth+"px"),this.sDiv.scrollLeft=this.bDiv.scrollLeft)),a&&($(d).triggerHandler("jqGridResizeStop",[e,b]),$.isFunction(c.resizeStop)&&c.resizeStop.call(d,e,b))}this.curGbox=null,document.onselectstart=function(){return!0}},populateVisible:function(){e.timer&&clearTimeout(e.timer),e.timer=null;var
a=$(e.bDiv).height();if(a){var
b,f,g=$("table:first",e.bDiv);if(g[0].rows.length)try{b=g[0].rows[1],f=b?$(b).outerHeight()||e.prevRowHeight:e.prevRowHeight}catch(h){f=e.prevRowHeight}if(f){e.prevRowHeight=f;var
i,j,k,l=c.rowNum,m=e.scrollTop=e.bDiv.scrollTop,n=Math.round(g.position().top)-m,o=n+g.height(),p=f*l;if(a>o&&0>=n&&(void
0===c.lastpage||(parseInt((o+m+p-1)/p,10)||0)<=c.lastpage)&&(j=parseInt((a-o+p-1)/p,10)||1,o>=0||2>j||c.scroll===!0?(i=(Math.round((o+m)/p)||0)+1,n=-1):n=1),n>0&&(i=(parseInt(m/p,10)||0)+1,j=(parseInt((m+a)/p,10)||0)+2-i,k=!0),j){if(c.lastpage&&(i>c.lastpage||1===c.lastpage||i===c.page&&i===c.lastpage))return;e.hDiv.loading?e.timer=setTimeout(e.populateVisible,c.scrollTimeout):(c.page=i,k&&(e.selectionPreserver(g[0]),e.emptyRows.call(g[0],!1,!1)),e.populate(j)),c.scrollPopUp&&null!=c.lastpage&&($("#scroll_g"+c.id).show().html($.jgrid.template($.jgrid.getRegional(d,"defaults.pgtext",c.pgtext),c.page,c.lastpage)).css({top:c.scrollTopOffset+m*((parseInt(c.height,10)-45)/(parseInt(f,10)*parseInt(c.records,10)))+"px",left:c.scrollLeftOffset}),$(this).mouseout(function(){$("#scroll_g"+c.id).hide()}))}}}},scrollGrid:function(a){if(c.scroll){var
b=e.bDiv.scrollTop;void
0===e.scrollTop&&(e.scrollTop=0),b!==e.scrollTop&&(e.scrollTop=b,e.timer&&clearTimeout(e.timer),e.timer=setTimeout(e.populateVisible,c.scrollTimeout))}e.hDiv.scrollLeft=e.bDiv.scrollLeft,c.footerrow&&(e.sDiv.scrollLeft=e.bDiv.scrollLeft),c.frozenColumns&&$(e.fbDiv).scrollTop(e.bDiv.scrollTop),a&&a.stopPropagation()},selectionPreserver:function(a){var
b=a.p,c=b.selrow,d=b.selarrrow?$.makeArray(b.selarrrow):null,e=a.grid.bDiv.scrollLeft,f=function(){var
g;if(b.selrow=null,b.selarrrow=[],b.multiselect&&d&&d.length>0)for(g=0;g<d.length;g++)d[g]!==c&&$(a).jqGrid("setSelection",d[g],!1,null);c&&$(a).jqGrid("setSelection",c,!1,null),a.grid.bDiv.scrollLeft=e,$(a).unbind(".selectionPreserver",f)};$(a).bind("jqGridGridComplete.selectionPreserver",f)}};if("TABLE"!==this.tagName.toUpperCase()||null==this.id)return void
alert("Element is not a table or has no id!");if(void
0!==document.documentMode&&document.documentMode<=5)return void
alert("Grid can not be used in this ('quirks') mode!");var
f,g,h,i=0;for(g
in
$.jgrid.regional)$.jgrid.regional.hasOwnProperty(g)&&(0===i&&(f=g),i++);if(1===i&&f!==c.regional&&(c.regional=f),$(this).empty().attr("tabindex","0"),this.p=c,this.p.useProp=!!$.fn.prop,0===this.p.colNames.length)for(i=0;i<this.p.colModel.length;i++)this.p.colNames[i]=this.p.colModel[i].label||this.p.colModel[i].name;if(this.p.colNames.length!==this.p.colModel.length)return void
alert($.jgrid.getRegional(this,"errors.model"));var
j,k=$.jgrid.getMethod("getStyleUI"),l=d.p.styleUI+".common",m=k(l,"disabled",!0),n=k(l,"highlight",!0),o=k(l,"hover",!0),p=k(l,"cornerall",!0),q=k(l,"icon_base",!0),r=$.jgrid.msie,s=[],t=[],u=[];l=d.p.styleUI+".base",j=$("<div "+k(l,"viewBox",!1,"ui-jqgrid-view")+" role='grid'></div>"),d.p.direction=$.trim(d.p.direction.toLowerCase()),d.p._ald=!1,-1===$.inArray(d.p.direction,["ltr","rtl"])&&(d.p.direction="ltr"),h=d.p.direction,$(j).insertBefore(this),$(this).appendTo(j);var
v=$("<div "+k(l,"entrieBox",!1,"ui-jqgrid")+"></div>");$(v).attr({id:"gbox_"+this.id,dir:h}).insertBefore(j),$(j).attr("id","gview_"+this.id).appendTo(v),$("<div "+k(d.p.styleUI+".common","overlay",!1,"jqgrid-overlay")+" id='lui_"+this.id+"'></div>").insertBefore(j),$("<div "+k(l,"loadingBox",!1,"loading")+" id='load_"+this.id+"'>"+$.jgrid.getRegional(d,"defaults.loadtext",this.p.loadtext)+"</div>").insertBefore(j),$(this).attr({role:"presentation","aria-multiselectable":!!this.p.multiselect,"aria-labelledby":"gbox_"+this.id});var
w,x=["shiftKey","altKey","ctrlKey"],y=function(a,b){return a=parseInt(a,10),isNaN(a)?b||0:a},z=function(a,b,c,f,g,h){var
i,j,k=d.p.colModel[a],l=k.align,m='style="',n=k.classes,o=k.name,p=[];return l&&(m+="text-align:"+l+";"),k.hidden===!0&&(m+="display:none;"),0===b?m+="width: "+e.headers[a].width+"px;":($.isFunction(k.cellattr)||"string"==typeof
k.cellattr&&null!=$.jgrid.cellattr&&$.isFunction($.jgrid.cellattr[k.cellattr]))&&(i=$.isFunction(k.cellattr)?k.cellattr:$.jgrid.cellattr[k.cellattr],j=i.call(d,g,c,f,k,h),j&&"string"==typeof
j&&(j=j.replace(/style/i,"style").replace(/title/i,"title"),j.indexOf("title")>-1&&(k.title=!1),j.indexOf("class")>-1&&(n=void
0),p=j.replace(/\-style/g,"-sti").split(/style/),2===p.length?(p[1]=$.trim(p[1].replace(/\-sti/g,"-style").replace("=","")),(0===p[1].indexOf("'")||0===p[1].indexOf('"'))&&(p[1]=p[1].substring(1)),m+=p[1].replace(/'/gi,'"')):m+='"')),p.length||(p[0]="",m+='"'),m+=(void
0!==n?' class="'+n+'"':"")+(k.title&&c?' title="'+$.jgrid.stripHtml(c)+'"':""),m+=' aria-describedby="'+d.p.id+"_"+o+'"',m+p[0]},A=function(a){return null==a||""===a?"&#160;":d.p.autoencode?$.jgrid.htmlEncode(a):String(a)},B=function(a,b,c,e,f){var
g,h=d.p.colModel[c];if(void
0!==h.formatter){a=""!==String(d.p.idPrefix)?$.jgrid.stripPref(d.p.idPrefix,a):a;var
i={rowId:a,colModel:h,gid:d.p.id,pos:c,styleUI:d.p.styleUI};g=$.isFunction(h.formatter)?h.formatter.call(d,b,i,e,f):$.fmatter?$.fn.fmatter.call(d,h.formatter,b,i,e,f):A(b)}else
g=A(b);return g},C=function(a,b,c,d,e,f){var
g,h;return g=B(a,b,c,e,"add"),h=z(c,d,g,e,a,f),'<td role="gridcell" '+h+">"+g+"</td>"},D=function(a,b,c,e,f){var
g='<input role="checkbox" type="checkbox" id="jqg_'+d.p.id+"_"+a+'" '+f+' name="jqg_'+d.p.id+"_"+a+'"'+(e?'checked="checked"':"")+"/>",h=z(b,c,"",null,a,!0);return'<td role="gridcell" '+h+">"+g+"</td>"},E=function(a,b,c,d,e){var
f=(parseInt(c,10)-1)*parseInt(d,10)+1+b,g=z(a,b,f,null,b,!0);return'<td role="gridcell" '+e+" "+g+">"+f+"</td>"},F=function(a){var
b,c,e=[],f=0;for(c=0;c<d.p.colModel.length;c++)b=d.p.colModel[c],"cb"!==b.name&&"subgrid"!==b.name&&"rn"!==b.name&&(e[f]="local"===a?b.name:"xml"===a||"xmlstring"===a?b.xmlmap||b.name:b.jsonmap||b.name,d.p.keyName!==!1&&b.key===!0&&(d.p.keyName=e[f]),f++);return e},G=function(a){var
b=d.p.remapColumns;return b&&b.length||(b=$.map(d.p.colModel,function(a,b){return b})),a&&(b=$.map(b,function(b){return a>b?null:b-a})),b},H=function(a,b){var
c;this.p.deepempty?$(this.rows).slice(1).remove():(c=this.rows.length>0?this.rows[0]:null,$(this.firstChild).empty().append(c)),a&&this.p.scroll&&($(this.grid.bDiv.firstChild).css({height:"auto"}),$(this.grid.bDiv.firstChild.firstChild).css({height:"0px",display:"none"}),0!==this.grid.bDiv.scrollTop&&(this.grid.bDiv.scrollTop=0)),b===!0&&this.p.treeGrid&&!this.p.loadonce&&(this.p.data=[],this.p._index={})},I=function(){var
a,b,c,e,f,g,h,i,j,k,l,m=d.p,n=m.data,o=n.length,p=m.localReader,q=m.colModel,r=p.cell,s=(m.multiselect===!0?1:0)+(m.subGrid===!0?1:0)+(m.rownumbers===!0?1:0),t=m.scroll?$.jgrid.randId():1;if("local"===m.datatype&&p.repeatitems===!0)for(j=G(s),k=F("local"),e=m.keyIndex===!1?$.isFunction(p.id)?p.id.call(d,n):p.id:m.keyIndex,a=0;o>a;a++){for(c=n[a],f=$.jgrid.getAccessor(c,e),void
0===f&&("number"==typeof
e&&null!=q[e+s]&&(f=$.jgrid.getAccessor(c,q[e+s].name)),void
0===f&&(f=t+a,r&&(g=$.jgrid.getAccessor(c,r)||c,f=null!=g&&void
0!==g[e]?g[e]:f,g=null))),i={},i[p.id]=f,r&&(c=$.jgrid.getAccessor(c,r)||c),l=$.isArray(c)?j:k,b=0;b<l.length;b++)h=$.jgrid.getAccessor(c,l[b]),i[q[b+s].name]=h;$.extend(!0,n[a],i)}},J=function(){var
a,b,c,e=d.p.data.length;for(a=d.p.keyName===!1||d.p.loadonce===!0?d.p.localReader.id:d.p.keyName,d.p._index=[],b=0;e>b;b++)c=$.jgrid.getAccessor(d.p.data[b],a),void
0===c&&(c=String(b+1)),d.p._index[c]=b},K=function(a,b,c,e,f){var
g,h="-1",i="",j=b?"display:none;":"",k=$(d).triggerHandler("jqGridRowAttr",[e,f,a]);if("object"!=typeof
k&&(k=$.isFunction(d.p.rowattr)?d.p.rowattr.call(d,e,f,a):"string"==typeof
d.p.rowattr&&null!=$.jgrid.rowattr&&$.isFunction($.jgrid.rowattr[d.p.rowattr])?$.jgrid.rowattr[d.p.rowattr].call(d,e,f,a):{}),!$.isEmptyObject(k)){k.hasOwnProperty("id")&&(a=k.id,delete
k.id),k.hasOwnProperty("tabindex")&&(h=k.tabindex,delete
k.tabindex),k.hasOwnProperty("style")&&(j+=k.style,delete
k.style),k.hasOwnProperty("class")&&(c+=" "+k["class"],delete
k["class"]);try{delete
k.role}catch(l){}for(g
in
k)k.hasOwnProperty(g)&&(i+=" "+g+"="+k[g])}return'<tr role="row" id="'+a+'" tabindex="'+h+'" class="'+c+'"'+(""===j?"":' style="'+j+'"')+i+">"},L=function(a,b,c,e){var
f=new
Date,g="local"!==d.p.datatype&&d.p.loadonce||"xmlstring"===d.p.datatype,h="_id_",i=d.p.xmlReader,j="local"===d.p.datatype?"local":"xml";if(g&&(d.p.data=[],d.p._index={},d.p.localReader.id=h),d.p.reccount=0,$.isXMLDoc(a)){-1!==d.p.treeANode||d.p.scroll?b=b>1?b:1:(H.call(d,!1,!0),b=1);var
m,n,o,p,q,r,s,t,u,v,w=$(d),x=0,z=d.p.multiselect===!0?1:0,A=0,B=d.p.rownumbers===!0?1:0,I=[],J={},L=[],M=d.p.altRows===!0?d.p.altclass:"",N=k(l,"rowBox",!0,"jqgrow ui-row-"+d.p.direction);d.p.subGrid===!0&&(A=1,p=$.jgrid.getMethod("addSubGridCell")),i.repeatitems||(I=F(j)),q=d.p.keyName===!1?$.isFunction(i.id)?i.id.call(d,a):i.id:d.p.keyName,r=-1===String(q).indexOf("[")?I.length?function(a,b){return $(q,a).text()||b}:function(a,b){return $(i.cell,a).eq(q).text()||b}:function(a,b){return a.getAttribute(q.replace(/[\[\]]/g,""))||b},d.p.userData={},d.p.page=y($.jgrid.getXmlData(a,i.page),d.p.page),d.p.lastpage=y($.jgrid.getXmlData(a,i.total),1),d.p.records=y($.jgrid.getXmlData(a,i.records)),$.isFunction(i.userdata)?d.p.userData=i.userdata.call(d,a)||{}:$.jgrid.getXmlData(a,i.userdata,!0).each(function(){d.p.userData[this.getAttribute("name")]=$(this).text()});var
O=$.jgrid.getXmlData(a,i.root,!0);O=$.jgrid.getXmlData(O,i.row,!0),O||(O=[]);var
P,Q=O.length,R=0,S=[],T=parseInt(d.p.rowNum,10),U=d.p.scroll?$.jgrid.randId():1,V=$("#"+$.jgrid.jqID(d.p.id)+" tbody:first");if(Q>0&&d.p.page<=0&&(d.p.page=1),O&&Q){e&&(T*=e+1);var
W,X=$.isFunction(d.p.afterInsertRow),Y=!1,Z=B?k(l,"rownumBox",!1,"jqgrid-rownum"):"",_=z?k(l,"multiBox",!1,"cbox"):"";for(d.p.grouping&&(Y=d.p.groupingView.groupCollapse===!0,W=$.jgrid.getMethod("groupingPrepare"));Q>R;){t=O[R],u=r(t,U+R),u=d.p.idPrefix+u,P=0===b?0:b+1,v=N+((P+R)%2===1?" "+M:"");var
aa=L.length;if(L.push(""),B&&L.push(E(0,R,d.p.page,d.p.rowNum,Z)),z&&L.push(D(u,B,R,!1,_)),A&&L.push(p.call(w,z+B,R+b)),i.repeatitems){s||(s=G(z+A+B));var
ba=$.jgrid.getXmlData(t,i.cell,!0);$.each(s,function(a){var
c=ba[this];return c?(o=c.textContent||c.text,J[d.p.colModel[a+z+A+B].name]=o,void
L.push(C(u,o,a+z+A+B,R+b,t,J))):!1})}else
for(m=0;m<I.length;m++)o=$.jgrid.getXmlData(t,I[m]),J[d.p.colModel[m+z+A+B].name]=o,L.push(C(u,o,m+z+A+B,R+b,t,J));if(L[aa]=K(u,Y,v,J,t),L.push("</tr>"),d.p.grouping&&(S.push(L),d.p.groupingView._locgr||W.call(w,J,R),L=[]),(g||d.p.treeGrid===!0&&!d.p._ald)&&(J[h]=$.jgrid.stripPref(d.p.idPrefix,u),d.p.data.push(J),d.p._index[J[h]]=d.p.data.length-1),d.p.gridview===!1&&(V.append(L.join("")),w.triggerHandler("jqGridAfterInsertRow",[u,J,t]),X&&d.p.afterInsertRow.call(d,u,J,t),L=[]),J={},x++,R++,x===T)break}}if(d.p.gridview===!0&&(n=d.p.treeANode>-1?d.p.treeANode:0,d.p.grouping?g||(w.jqGrid("groupingRender",S,d.p.colModel.length,d.p.page,T),S=null):d.p.treeGrid===!0&&n>0?$(d.rows[n]).after(L.join("")):(V.append(L.join("")),d.grid.cols=d.rows[0].cells)),d.p.subGrid===!0)try{w.jqGrid("addSubGrid",z+B)}catch(ca){}if(d.p.totaltime=new
Date-f,x>0&&0===d.p.records&&(d.p.records=Q),L=null,d.p.treeGrid===!0)try{w.jqGrid("setTreeNode",n+1,x+n+1)}catch(da){}if(d.p.reccount=x,d.p.treeANode=-1,d.p.userDataOnFooter&&w.jqGrid("footerData","set",d.p.userData,!0),g&&(d.p.records=Q,d.p.lastpage=Math.ceil(Q/T)),c||d.updatepager(!1,!0),g){for(;Q>x;){if(t=O[x],u=r(t,x+U),u=d.p.idPrefix+u,i.repeatitems){s||(s=G(z+A+B));var
ea=$.jgrid.getXmlData(t,i.cell,!0);$.each(s,function(a){var
b=ea[this];return b?(o=b.textContent||b.text,void(J[d.p.colModel[a+z+A+B].name]=o)):!1})}else
for(m=0;m<I.length;m++)o=$.jgrid.getXmlData(t,I[m]),J[d.p.colModel[m+z+A+B].name]=o;J[h]=$.jgrid.stripPref(d.p.idPrefix,u),d.p.grouping&&W.call(w,J,x),d.p.data.push(J),d.p._index[J[h]]=d.p.data.length-1,J={},x++}d.p.grouping&&(d.p.groupingView._locgr=!0,w.jqGrid("groupingRender",S,d.p.colModel.length,d.p.page,T),S=null)}}},M=function(a,b,c,e){var
f=new
Date;if(a){-1!==d.p.treeANode||d.p.scroll?b=b>1?b:1:(H.call(d,!1,!0),b=1);var
g,h,i="_id_",j="local"!==d.p.datatype&&d.p.loadonce||"jsonstring"===d.p.datatype;j&&(d.p.data=[],d.p._index={},d.p.localReader.id=i),d.p.reccount=0,"local"===d.p.datatype?(g=d.p.localReader,h="local"):(g=d.p.jsonReader,h="json");var
m,o,p,q,r,s,t,u,v,w,x,z,A=$(d),B=0,I=[],J=d.p.multiselect?1:0,L=d.p.subGrid===!0?1:0,M=d.p.rownumbers===!0?1:0,N=G(J+L+M),O=F(h),P={},Q=[],R=d.p.altRows===!0?d.p.altclass:"",S=k(l,"rowBox",!0,"jqgrow ui-row-"+d.p.direction);d.p.page=y($.jgrid.getAccessor(a,g.page),d.p.page),d.p.lastpage=y($.jgrid.getAccessor(a,g.total),1),d.p.records=y($.jgrid.getAccessor(a,g.records)),d.p.userData=$.jgrid.getAccessor(a,g.userdata)||{},L&&(r=$.jgrid.getMethod("addSubGridCell")),v=d.p.keyName===!1?$.isFunction(g.id)?g.id.call(d,a):g.id:d.p.keyName,u=$.jgrid.getAccessor(a,g.root),null==u&&$.isArray(a)&&(u=a),u||(u=[]),t=u.length,o=0,t>0&&d.p.page<=0&&(d.p.page=1);var
T,U,V=parseInt(d.p.rowNum,10),W=d.p.scroll?$.jgrid.randId():1,X=!1;e&&(V*=e+1),"local"!==d.p.datatype||d.p.deselectAfterSort||(X=!0);var
Y,Z=$.isFunction(d.p.afterInsertRow),_=[],aa=!1,ba=$("#"+$.jgrid.jqID(d.p.id)+" tbody:first"),ca=M?k(l,"rownumBox",!1,"jqgrid-rownum"):"",da=J?k(l,"multiBox",!1,"cbox"):"";for(d.p.grouping&&(aa=d.p.groupingView.groupCollapse===!0,Y=$.jgrid.getMethod("groupingPrepare"));t>o;){if(q=u[o],x=$.jgrid.getAccessor(q,v),void
0===x&&("number"==typeof
v&&null!=d.p.colModel[v+J+L+M]&&(x=$.jgrid.getAccessor(q,d.p.colModel[v+J+L+M].name)),void
0===x&&(x=W+o,0===I.length&&g.cell))){var
ea=$.jgrid.getAccessor(q,g.cell)||q;x=null!=ea&&void
0!==ea[v]?ea[v]:x,ea=null}x=d.p.idPrefix+x,T=1===b?0:b,z=S+((T+o)%2===1?" "+R:""),X&&(U=d.p.multiselect?-1!==$.inArray(x,d.p.selarrrow):x===d.p.selrow);var
fa=Q.length;for(Q.push(""),M&&Q.push(E(0,o,d.p.page,d.p.rowNum,ca)),J&&Q.push(D(x,M,o,U,da)),L&&Q.push(r.call(A,J+M,o+b)),s=O,g.repeatitems&&(g.cell&&(q=$.jgrid.getAccessor(q,g.cell)||q),$.isArray(q)&&(s=N)),p=0;p<s.length;p++)m=$.jgrid.getAccessor(q,s[p]),P[d.p.colModel[p+J+L+M].name]=m,Q.push(C(x,m,p+J+L+M,o+b,q,P));if(z+=U?" "+n:"",Q[fa]=K(x,aa,z,P,q),Q.push("</tr>"),d.p.grouping&&(_.push(Q),d.p.groupingView._locgr||Y.call(A,P,o),Q=[]),(j||d.p.treeGrid===!0&&!d.p._ald)&&(P[i]=$.jgrid.stripPref(d.p.idPrefix,x),d.p.data.push(P),d.p._index[P[i]]=d.p.data.length-1),d.p.gridview===!1&&(ba.append(Q.join("")),A.triggerHandler("jqGridAfterInsertRow",[x,P,q]),Z&&d.p.afterInsertRow.call(d,x,P,q),Q=[]),P={},B++,o++,B===V)break}if(d.p.gridview===!0&&(w=d.p.treeANode>-1?d.p.treeANode:0,d.p.grouping?j||(A.jqGrid("groupingRender",_,d.p.colModel.length,d.p.page,V),_=null):d.p.treeGrid===!0&&w>0?$(d.rows[w]).after(Q.join("")):(ba.append(Q.join("")),d.grid.cols=d.rows[0].cells)),d.p.subGrid===!0)try{A.jqGrid("addSubGrid",J+M)}catch(ga){}if(d.p.totaltime=new
Date-f,B>0&&0===d.p.records&&(d.p.records=t),Q=null,d.p.treeGrid===!0)try{A.jqGrid("setTreeNode",w+1,B+w+1)}catch(ha){}if(d.p.reccount=B,d.p.treeANode=-1,d.p.userDataOnFooter&&A.jqGrid("footerData","set",d.p.userData,!0),j&&(d.p.records=t,d.p.lastpage=Math.ceil(t/V)),c||d.updatepager(!1,!0),j){for(;t>B&&u[B];){if(q=u[B],x=$.jgrid.getAccessor(q,v),void
0===x&&("number"==typeof
v&&null!=d.p.colModel[v+J+L+M]&&(x=$.jgrid.getAccessor(q,d.p.colModel[v+J+L+M].name)),void
0===x&&(x=W+B,0===I.length&&g.cell))){var
ia=$.jgrid.getAccessor(q,g.cell)||q;x=null!=ia&&void
0!==ia[v]?ia[v]:x,ia=null}if(q){for(x=d.p.idPrefix+x,s=O,g.repeatitems&&(g.cell&&(q=$.jgrid.getAccessor(q,g.cell)||q),$.isArray(q)&&(s=N)),p=0;p<s.length;p++)P[d.p.colModel[p+J+L+M].name]=$.jgrid.getAccessor(q,s[p]);P[i]=$.jgrid.stripPref(d.p.idPrefix,x),d.p.grouping&&Y.call(A,P,B),d.p.data.push(P),d.p._index[P[i]]=d.p.data.length-1,P={}}B++}d.p.grouping&&(d.p.groupingView._locgr=!0,A.jqGrid("groupingRender",_,d.p.colModel.length,d.p.page,V),_=null)}}},N=function(){function
a(b){var
c,e,f,g,h,i,k=0;if(null!=b.groups){for(e=b.groups.length&&"OR"===b.groupOp.toString().toUpperCase(),e&&r.orBegin(),c=0;c<b.groups.length;c++){k>0&&e&&r.or();try{a(b.groups[c])}catch(l){alert(l)}k++}e&&r.orEnd()}if(null!=b.rules)try{for(f=b.rules.length&&"OR"===b.groupOp.toString().toUpperCase(),f&&r.orBegin(),c=0;c<b.rules.length;c++)h=b.rules[c],g=b.groupOp.toString().toUpperCase(),q[h.op]&&h.field&&(k>0&&g&&"OR"===g&&(r=r.or()),i=j[h.field],"date"===i.stype&&i.srcfmt&&i.newfmt&&i.srcfmt!==i.newfmt&&(h.data=$.jgrid.parseDate.call(d,i.newfmt,h.data,i.srcfmt)),r=q[h.op](r,g)(h.field,h.data,j[h.field])),k++;f&&r.orEnd()}catch(m){alert(m)}}var
b,c,e,f,g=d.p.multiSort?[]:"",h=[],i=!1,j={},k=[],l=[];if($.isArray(d.p.data)){var
m,n,o,p=d.p.grouping?d.p.groupingView:!1;if($.each(d.p.colModel,function(){if(c=this.sorttype||"text",o=this.index||this.name,"date"===c||"datetime"===c?(this.formatter&&"string"==typeof
this.formatter&&"date"===this.formatter?(b=this.formatoptions&&this.formatoptions.srcformat?this.formatoptions.srcformat:$.jgrid.getRegional(d,"formatter.date.srcformat"),e=this.formatoptions&&this.formatoptions.newformat?this.formatoptions.newformat:$.jgrid.getRegional(d,"formatter.date.newformat")):b=e=this.datefmt||"Y-m-d",j[o]={stype:c,srcfmt:b,newfmt:e,sfunc:this.sortfunc||null}):j[o]={stype:c,srcfmt:"",newfmt:"",sfunc:this.sortfunc||null},d.p.grouping)for(n=0,m=p.groupField.length;m>n;n++)this.name===p.groupField[n]&&(k[n]=j[o],l[n]=o);d.p.multiSort||i||o!==d.p.sortname||(g=o,i=!0)}),d.p.multiSort&&(g=s,h=t),d.p.treeGrid&&d.p._sort)return void
$(d).jqGrid("SortTree",g,d.p.sortorder,j[g].stype||"text",j[g].srcfmt||"");var
q={eq:function(a){return a.equals},ne:function(a){return a.notEquals},lt:function(a){return a.less},le:function(a){return a.lessOrEquals},gt:function(a){return a.greater},ge:function(a){return a.greaterOrEquals},cn:function(a){return a.contains},nc:function(a,b){return"OR"===b?a.orNot().contains:a.andNot().contains},bw:function(a){return a.startsWith},bn:function(a,b){return"OR"===b?a.orNot().startsWith:a.andNot().startsWith},en:function(a,b){return"OR"===b?a.orNot().endsWith:a.andNot().endsWith},ew:function(a){return a.endsWith},ni:function(a,b){return"OR"===b?a.orNot().equals:a.andNot().equals},"in":function(a){return a.equals},nu:function(a){return a.isNull},nn:function(a,b){return"OR"===b?a.orNot().isNull:a.andNot().isNull}},r=$.jgrid.from.call(d,d.p.data);if(d.p.ignoreCase&&(r=r.ignoreCase()),d.p.search===!0){var
u=d.p.postData.filters;if(u)"string"==typeof
u&&(u=$.jgrid.parse(u)),a(u);else
try{f=j[d.p.postData.searchField],"date"===f.stype&&f.srcfmt&&f.newfmt&&f.srcfmt!==f.newfmt&&(d.p.postData.searchString=$.jgrid.parseDate.call(d,f.newfmt,d.p.postData.searchString,f.srcfmt)),r=q[d.p.postData.searchOper](r)(d.p.postData.searchField,d.p.postData.searchString,j[d.p.postData.searchField])}catch(v){}}else
d.p.treeGrid&&"nested"===d.p.treeGridModel&&r.orderBy(d.p.treeReader.left_field,"asc","integer","",null);if(d.p.treeGrid&&"adjacency"===d.p.treeGridModel&&(m=0,g=null),d.p.grouping)for(n=0;m>n;n++)r.orderBy(l[n],p.groupOrder[n],k[n].stype,k[n].srcfmt);d.p.multiSort?$.each(g,function(a){r.orderBy(this,h[a],j[this].stype,j[this].srcfmt,j[this].sfunc)}):g&&d.p.sortorder&&i&&("DESC"===d.p.sortorder.toUpperCase()?r.orderBy(d.p.sortname,"d",j[g].stype,j[g].srcfmt,j[g].sfunc):r.orderBy(d.p.sortname,"a",j[g].stype,j[g].srcfmt,j[g].sfunc));var
w=r.select(),x=parseInt(d.p.rowNum,10),y=w.length,z=parseInt(d.p.page,10),A=Math.ceil(y/x),B={};if((d.p.search||d.p.resetsearch)&&d.p.grouping&&d.p.groupingView._locgr){d.p.groupingView.groups=[];var
C,D,E,F=$.jgrid.getMethod("groupingPrepare");if(d.p.footerrow&&d.p.userDataOnFooter){for(D
in
d.p.userData)d.p.userData.hasOwnProperty(D)&&(d.p.userData[D]=0);E=!0}for(C=0;y>C;C++){if(E)for(D
in
d.p.userData)d.p.userData.hasOwnProperty(D)&&(d.p.userData[D]+=parseFloat(w[C][D]||0));F.call($(d),w[C],C,x)}}return w=d.p.treeGrid&&d.p.search?$(d).jqGrid("searchTree",w):w.slice((z-1)*x,z*x),r=null,j=null,B[d.p.localReader.total]=A,B[d.p.localReader.page]=z,B[d.p.localReader.records]=y,B[d.p.localReader.root]=w,B[d.p.localReader.userdata]=d.p.userData,w=null,B}},O=function(a,b){var
c,e,f,g,h,i,j,n,p="",q=d.p.pager?$.jgrid.jqID(d.p.pager.substr(1)):"",r=q?"_"+q:"",s=d.p.toppager?"_"+d.p.toppager.substr(1):"";if(f=parseInt(d.p.page,10)-1,0>f&&(f=0),f*=parseInt(d.p.rowNum,10),h=f+d.p.reccount,d.p.scroll){var
t=$("tbody:first > tr:gt(0)",d.grid.bDiv);f=h-t.length,d.p.reccount=t.length;var
u=t.outerHeight()||d.grid.prevRowHeight;if(u){var
v=f*u,w=parseInt(d.p.records,10)*u;$(">div:first",d.grid.bDiv).css({height:w}).children("div:first").css({height:v,display:v?"":"none"}),0===d.grid.bDiv.scrollTop&&d.p.page>1&&(d.grid.bDiv.scrollTop=d.p.rowNum*(d.p.page-1)*u)}d.grid.bDiv.scrollLeft=d.grid.hDiv.scrollLeft}if(p=d.p.pager||"",p+=d.p.toppager?p?","+d.p.toppager:d.p.toppager:""){if(j=$.jgrid.getRegional(d,"formatter.integer"),c=y(d.p.page),e=y(d.p.lastpage),$(".selbox",p)[this.p.useProp?"prop":"attr"]("disabled",!1),d.p.pginput===!0&&($("#input"+r).html($.jgrid.template($.jgrid.getRegional(d,"defaults.pgtext",d.p.pgtext)||"","<input "+k(l,"pgInput",!1,"ui-pg-input")+" type='text' size='2' maxlength='7' value='0' role='textbox'/>","<span id='sp_1_"+$.jgrid.jqID(q)+"'></span>")),d.p.toppager&&$("#input_t"+s).html($.jgrid.template($.jgrid.getRegional(d,"defaults.pgtext",d.p.pgtext)||"","<input "+k(l,"pgInput",!1,"ui-pg-input")+" type='text' size='2' maxlength='7' value='0' role='textbox'/>","<span id='sp_1_"+$.jgrid.jqID(q)+"_toppager'></span>")),$(".ui-pg-input",p).val(d.p.page),n=d.p.toppager?"#sp_1"+r+",#sp_1"+r+"_toppager":"#sp_1"+r,$(n).html($.fmatter?$.fmatter.util.NumberFormat(d.p.lastpage,j):d.p.lastpage)),d.p.viewrecords)if(0===d.p.reccount)$(".ui-paging-info",p).html($.jgrid.getRegional(d,"defaults.emptyrecords",d.p.emptyrecords));else{g=f+1,i=d.p.records,$.fmatter&&(g=$.fmatter.util.NumberFormat(g,j),h=$.fmatter.util.NumberFormat(h,j),i=$.fmatter.util.NumberFormat(i,j));var
x=$.jgrid.getRegional(d,"defaults.recordtext",d.p.recordtext);$(".ui-paging-info",p).html($.jgrid.template(x,g,h,i))}d.p.pgbuttons===!0&&(0>=c&&(c=e=0),1===c||0===c?($("#first"+r+", #prev"+r).addClass(m).removeClass(o),d.p.toppager&&$("#first_t"+s+", #prev_t"+s).addClass(m).removeClass(o)):($("#first"+r+", #prev"+r).removeClass(m),d.p.toppager&&$("#first_t"+s+", #prev_t"+s).removeClass(m)),c===e||0===c?($("#next"+r+", #last"+r).addClass(m).removeClass(o),d.p.toppager&&$("#next_t"+s+", #last_t"+s).addClass(m).removeClass(o)):($("#next"+r+", #last"+r).removeClass(m),d.p.toppager&&$("#next_t"+s+", #last_t"+s).removeClass(m)))}a===!0&&d.p.rownumbers===!0&&$(">td.jqgrid-rownum",d.rows).each(function(a){$(this).html(f+1+a)}),b&&d.p.jqgdnd&&$(d).jqGrid("gridDnD","updateDnD"),$(d).triggerHandler("jqGridGridComplete"),$.isFunction(d.p.gridComplete)&&d.p.gridComplete.call(d),$(d).triggerHandler("jqGridAfterGridComplete")},P=function(){d.grid.hDiv.loading=!0,d.p.hiddengrid||$(d).jqGrid("progressBar",{method:"show",loadtype:d.p.loadui,htmlcontent:$.jgrid.getRegional(d,"defaults.loadtext",d.p.loadtext)})},Q=function(){d.grid.hDiv.loading=!1,$(d).jqGrid("progressBar",{method:"hide",loadtype:d.p.loadui})},R=function(a){if(!d.grid.hDiv.loading){var
b,c,e=d.p.scroll&&a===!1,f={},g=d.p.prmNames;d.p.page<=0&&(d.p.page=Math.min(1,d.p.lastpage)),null!==g.search&&(f[g.search]=d.p.search),null!==g.nd&&(f[g.nd]=(new
Date).getTime()),null!==g.rows&&(f[g.rows]=d.p.rowNum),null!==g.page&&(f[g.page]=d.p.page),null!==g.sort&&(f[g.sort]=d.p.sortname),null!==g.order&&(f[g.order]=d.p.sortorder),null!==d.p.rowTotal&&null!==g.totalrows&&(f[g.totalrows]=d.p.rowTotal);var
h=$.isFunction(d.p.loadComplete),i=h?d.p.loadComplete:null,j=0;if(a=a||1,a>1?null!==g.npage?(f[g.npage]=a,j=a-1,a=1):i=function(b){d.p.page++,d.grid.hDiv.loading=!1,h&&d.p.loadComplete.call(d,b),R(a-1)}:null!==g.npage&&delete
d.p.postData[g.npage],d.p.grouping){$(d).jqGrid("groupingSetup");var
k,l=d.p.groupingView,m="";for(k=0;k<l.groupField.length;k++){var
n=l.groupField[k];$.each(d.p.colModel,function(a,b){b.name===n&&b.index&&(n=b.index)}),m+=n+" "+l.groupOrder[k]+", "}f[g.sort]=m+f[g.sort]}$.extend(d.p.postData,f);var
o=d.p.scroll?d.rows.length-1:1,p=$(d).triggerHandler("jqGridBeforeRequest");if(p===!1||"stop"===p)return;if($.isFunction(d.p.datatype))return void
d.p.datatype.call(d,d.p.postData,"load_"+d.p.id,o,a,j);if($.isFunction(d.p.beforeRequest)&&(p=d.p.beforeRequest.call(d),void
0===p&&(p=!0),p===!1))return;switch(b=d.p.datatype.toLowerCase()){case"json":case"jsonp":case"xml":case"script":$.ajax($.extend({url:d.p.url,type:d.p.mtype,dataType:b,data:$.isFunction(d.p.serializeGridData)?d.p.serializeGridData.call(d,d.p.postData):d.p.postData,success:function(c,f,g){return $.isFunction(d.p.beforeProcessing)&&d.p.beforeProcessing.call(d,c,f,g)===!1?void
Q():("xml"===b?L(c,o,a>1,j):M(c,o,a>1,j),$(d).triggerHandler("jqGridLoadComplete",[c]),i&&i.call(d,c),$(d).triggerHandler("jqGridAfterLoadComplete",[c]),e&&d.grid.populateVisible(),(d.p.loadonce||d.p.treeGrid)&&(d.p.datatype="local"),c=null,void(1===a&&Q()))},error:function(b,c,e){$.isFunction(d.p.loadError)&&d.p.loadError.call(d,b,c,e),1===a&&Q(),b=null},beforeSend:function(a,b){var
c=!0;return $.isFunction(d.p.loadBeforeSend)&&(c=d.p.loadBeforeSend.call(d,a,b)),void
0===c&&(c=!0),c===!1?!1:void
P()}},$.jgrid.ajaxOptions,d.p.ajaxGridOptions));break;case"xmlstring":P(),c="string"!=typeof
d.p.datastr?d.p.datastr:$.parseXML(d.p.datastr),L(c),$(d).triggerHandler("jqGridLoadComplete",[c]),h&&d.p.loadComplete.call(d,c),$(d).triggerHandler("jqGridAfterLoadComplete",[c]),d.p.datatype="local",d.p.datastr=null,Q();break;case"jsonstring":P(),c="string"==typeof
d.p.datastr?$.jgrid.parse(d.p.datastr):d.p.datastr,M(c),$(d).triggerHandler("jqGridLoadComplete",[c]),h&&d.p.loadComplete.call(d,c),$(d).triggerHandler("jqGridAfterLoadComplete",[c]),d.p.datatype="local",d.p.datastr=null,Q();break;case"local":case"clientside":P(),d.p.datatype="local",d.p._ald=!0;var
q=N();M(q,o,a>1,j),$(d).triggerHandler("jqGridLoadComplete",[q]),i&&i.call(d,q),$(d).triggerHandler("jqGridAfterLoadComplete",[q]),e&&d.grid.populateVisible(),Q(),d.p._ald=!1}d.p._sort=!1}},S=function(a){$("#cb_"+$.jgrid.jqID(d.p.id),d.grid.hDiv)[d.p.useProp?"prop":"attr"]("checked",a);var
b=d.p.frozenColumns?d.p.id+"_frozen":"";b&&$("#cb_"+$.jgrid.jqID(d.p.id),d.grid.fhDiv)[d.p.useProp?"prop":"attr"]("checked",a)},T=function(a,b){var
c,e,f,g,i,j,n,p="<td class='ui-pg-button "+m+"'><span class='ui-separator'></span></td>",r="",s="<table class='ui-pg-table ui-common-table ui-paging-pager'><tbody><tr>",t="",u=function(a,b){var
c;return $.isFunction(d.p.onPaging)&&(c=d.p.onPaging.call(d,a,b)),"stop"===c?!1:(d.p.selrow=null,d.p.multiselect&&(d.p.selarrrow=[],S(!1)),d.p.savedRow=[],!0)};if(a=a.substr(1),b+="_"+a,c="pg_"+a,e=a+"_left",f=a+"_center",g=a+"_right",$("#"+$.jgrid.jqID(a)).append("<div id='"+c+"' class='ui-pager-control' role='group'><table "+k(l,"pagerTable",!1,"ui-pg-table ui-common-table ui-pager-table")+"><tbody><tr><td id='"+e+"' align='left'></td><td id='"+f+"' align='center' style='white-space:pre;'></td><td id='"+g+"' align='right'></td></tr></tbody></table></div>").attr("dir","ltr"),d.p.rowList.length>0){t='<td dir="'+h+'">',t+="<select "+k(l,"pgSelectBox",!1,"ui-pg-selbox")+' role="listbox" title="'+($.jgrid.getRegional(d,"defaults.pgrecs",d.p.pgrecs)||"")+'">';var
v;for(n=0;n<d.p.rowList.length;n++)v=d.p.rowList[n].toString().split(":"),1===v.length&&(v[1]=v[0]),t+='<option role="option" value="'+v[0]+'"'+(y(d.p.rowNum,0)===y(v[0],0)?' selected="selected"':"")+">"+v[1]+"</option>";t+="</select></td>"}if("rtl"===h&&(s+=t),d.p.pginput===!0&&(r="<td id='input"+b+"' dir='"+h+"'>"+$.jgrid.template($.jgrid.getRegional(d,"defaults.pgtext",d.p.pgtext)||"","<input class='ui-pg-input' type='text' size='2' maxlength='7' value='0' role='textbox'/>","<span id='sp_1_"+$.jgrid.jqID(a)+"'></span>")+"</td>"),d.p.pgbuttons===!0){var
w=["first"+b,"prev"+b,"next"+b,"last"+b],x=k(l,"pgButtonBox",!0,"ui-pg-button"),z=[$.jgrid.getRegional(d,"defaults.pgfirst",d.p.pgfirst)||"",$.jgrid.getRegional(d,"defaults.pgprev",d.p.pgprev)||"",$.jgrid.getRegional(d,"defaults.pgnext",d.p.pgnext)||"",$.jgrid.getRegional(d,"defaults.pglast",d.p.pglast)||""];"rtl"===h&&(w.reverse(),z.reverse()),s+="<td id='"+w[0]+"' class='"+x+"' title='"+z[0]+"'><span "+k(l,"icon_first",!1,q)+"></span></td>",s+="<td id='"+w[1]+"' class='"+x+"'  title='"+z[1]+"'><span "+k(l,"icon_prev",!1,q)+"></span></td>",s+=""!==r?p+r+p:"",s+="<td id='"+w[2]+"' class='"+x+"' title='"+z[2]+"'><span "+k(l,"icon_next",!1,q)+"></span></td>",s+="<td id='"+w[3]+"' class='"+x+"' title='"+z[3]+"'><span "+k(l,"icon_end",!1,q)+"></span></td>"}else""!==r&&(s+=r);"ltr"===h&&(s+=t),s+="</tr></tbody></table>",d.p.viewrecords===!0&&$("td#"+a+"_"+d.p.recordpos,"#"+c).append("<div dir='"+h+"' style='text-align:"+d.p.recordpos+"' class='ui-paging-info'></div>"),$("td#"+a+"_"+d.p.pagerpos,"#"+c).append(s),j=$("#gbox_"+$.jgrid.jqID(d.p.id)).css("font-size")||"11px",$("#gbox_"+$.jgrid.jqID(d.p.id)).append("<div id='testpg' "+k(l,"entrieBox",!1,"ui-jqgrid")+" style='font-size:"+j+";visibility:hidden;' ></div>"),i=$(s).clone().appendTo("#testpg").width(),$("#testpg").remove(),i>0&&(""!==r&&(i+=50),$("td#"+a+"_"+d.p.pagerpos,"#"+c).width(i)),d.p._nvtd=[],d.p._nvtd[0]=i?Math.floor((d.p.width-i)/2):Math.floor(d.p.width/3),d.p._nvtd[1]=0,s=null,$(".ui-pg-selbox","#"+c).bind("change",function(){return u("records",this)?(d.p.page=Math.round(d.p.rowNum*(d.p.page-1)/this.value-.5)+1,d.p.rowNum=this.value,d.p.pager&&$(".ui-pg-selbox",d.p.pager).val(this.value),d.p.toppager&&$(".ui-pg-selbox",d.p.toppager).val(this.value),R(),!1):!1}),d.p.pgbuttons===!0&&($(".ui-pg-button","#"+c).hover(function(){$(this).hasClass(m)?this.style.cursor="default":($(this).addClass(o),this.style.cursor="pointer")},function(){$(this).hasClass(m)||($(this).removeClass(o),this.style.cursor="default")}),$("#first"+$.jgrid.jqID(b)+", #prev"+$.jgrid.jqID(b)+", #next"+$.jgrid.jqID(b)+", #last"+$.jgrid.jqID(b)).click(function(){if($(this).hasClass(m))return!1;var
a=y(d.p.page,1),c=y(d.p.lastpage,1),e=!1,f=!0,g=!0,h=!0,i=!0;return 0===c||1===c?(f=!1,g=!1,h=!1,i=!1):c>1&&a>=1?1===a?(f=!1,g=!1):a===c&&(h=!1,i=!1):c>1&&0===a&&(h=!1,i=!1,a=c-1),u(this.id.split("_")[0],this)?(this.id==="first"+b&&f&&(d.p.page=1,e=!0),this.id==="prev"+b&&g&&(d.p.page=a-1,e=!0),this.id==="next"+b&&h&&(d.p.page=a+1,e=!0),this.id==="last"+b&&i&&(d.p.page=c,e=!0),e&&R(),!1):!1})),d.p.pginput===!0&&$("#"+c).on("keypress","input.ui-pg-input",function(a){var
b=a.charCode||a.keyCode||0;return 13===b?u("user",this)?($(this).val(y($(this).val(),1)),d.p.page=$(this).val()>0?$(this).val():d.p.page,R(),!1):!1:this})},U=function(a,b){var
c,e=d.p.colModel,f=d.p.frozenColumns?b:d.grid.headers[a].el,g="";$("span.ui-grid-ico-sort",f).addClass(m),$(f).attr("aria-selected","false"),c=e[a].index||e[a].name,e[a].lso?"asc"===e[a].lso?(e[a].lso+="-desc",g="desc"):"desc"===e[a].lso?(e[a].lso+="-asc",g="asc"):("asc-desc"===e[a].lso||"desc-asc"===e[a].lso)&&(e[a].lso=""):e[a].lso=g=e[a].firstsortorder||"asc",g?($("span.s-ico",f).show(),$("span.ui-icon-"+g,f).removeClass(m),$(f).attr("aria-selected","true")):d.p.viewsortcols[0]||$("span.s-ico",f).hide();var
h=s.indexOf(c);-1===h?(s.push(c),t.push(g)):g?t[h]=g:(t.splice(h,1),s.splice(h,1)),d.p.sortorder="",d.p.sortname="";for(var
i=0,j=s.length;j>i;i++)i>0&&(d.p.sortname+=", "),d.p.sortname+=s[i],i!==j-1&&(d.p.sortname+=" "+t[i]);d.p.sortorder=t[j-1]},V=function(a,b,c,e,f){if(d.p.colModel[b].sortable&&!(d.p.savedRow.length>0)){if(c||(d.p.lastsort===b&&""!==d.p.sortname?"asc"===d.p.sortorder?d.p.sortorder="desc":"desc"===d.p.sortorder&&(d.p.sortorder="asc"):d.p.sortorder=d.p.colModel[b].firstsortorder||"asc",d.p.page=1),d.p.multiSort)U(b,f);else{if(e){if(d.p.lastsort===b&&d.p.sortorder===e&&!c)return;d.p.sortorder=e}var
g,h=d.grid.headers[d.p.lastsort]?d.grid.headers[d.p.lastsort].el:null,i=d.p.frozenColumns?f:d.grid.headers[b].el,j="single"===d.p.viewsortcols[1]?!0:!1;g=$(h).find("span.ui-grid-ico-sort"),g.addClass(m),j&&$(g).css("display","none"),$(h).attr("aria-selected","false"),d.p.frozenColumns&&(g=d.grid.fhDiv.find("span.ui-grid-ico-sort"),g.addClass(m),j&&g.css("display","none"),d.grid.fhDiv.find("th").attr("aria-selected","false")),g=$(i).find("span.ui-icon-"+d.p.sortorder),g.removeClass(m),j&&g.css("display",""),$(i).attr("aria-selected","true"),d.p.viewsortcols[0]||(d.p.lastsort!==b?(d.p.frozenColumns&&d.grid.fhDiv.find("span.s-ico").hide(),$("span.s-ico",h).hide(),$("span.s-ico",i).show()):""===d.p.sortname&&$("span.s-ico",i).show()),a=a.substring(5+d.p.id.length+1),d.p.sortname=d.p.colModel[b].index||a}if("stop"===$(d).triggerHandler("jqGridSortCol",[d.p.sortname,b,d.p.sortorder]))return void(d.p.lastsort=b);if($.isFunction(d.p.onSortCol)&&"stop"===d.p.onSortCol.call(d,d.p.sortname,b,d.p.sortorder))return void(d.p.lastsort=b);if("local"===d.p.datatype?d.p.deselectAfterSort&&$(d).jqGrid("resetSelection"):(d.p.selrow=null,d.p.multiselect&&S(!1),d.p.selarrrow=[],d.p.savedRow=[]),d.p.scroll){var
k=d.grid.bDiv.scrollLeft;H.call(d,!0,!1),d.grid.hDiv.scrollLeft=k}d.p.subGrid&&"local"===d.p.datatype&&$("td.sgexpanded","#"+$.jgrid.jqID(d.p.id)).each(function(){$(this).trigger("click")}),d.p._sort=!0,R(),d.p.lastsort=b,d.p.sortname!==a&&b&&(d.p.lastsort=b)}},W=function(){var
a,b,c,f,g=0,h=$.jgrid.cell_width?0:y(d.p.cellLayout,0),i=0,j=y(d.p.scrollOffset,0),k=!1,l=0;$.each(d.p.colModel,function(){if(void
0===this.hidden&&(this.hidden=!1),d.p.grouping&&d.p.autowidth){var
a=$.inArray(this.name,d.p.groupingView.groupField);a>=0&&d.p.groupingView.groupColumnShow.length>a&&(this.hidden=!d.p.groupingView.groupColumnShow[a])}this.widthOrg=b=y(this.width,0),this.hidden===!1&&(g+=b+h,this.fixed?l+=b+h:i++)}),isNaN(d.p.width)&&(d.p.width=g+(d.p.shrinkToFit!==!1||isNaN(d.p.height)?0:j)),e.width=d.p.width,d.p.tblwidth=g,d.p.shrinkToFit===!1&&d.p.forceFit===!0&&(d.p.forceFit=!1),d.p.shrinkToFit===!0&&i>0&&(c=e.width-h*i-l,isNaN(d.p.height)||(c-=j,k=!0),g=0,$.each(d.p.colModel,function(e){this.hidden!==!1||this.fixed||(b=Math.round(c*this.width/(d.p.tblwidth-h*i-l)),this.width=b,g+=b,a=e)}),f=0,k?e.width-l-(g+h*i)!==j&&(f=e.width-l-(g+h*i)-j):k||1===Math.abs(e.width-l-(g+h*i))||(f=e.width-l-(g+h*i)),d.p.colModel[a].width+=f,d.p.tblwidth=g+f+h*i+l,d.p.tblwidth>d.p.width&&(d.p.colModel[a].width-=d.p.tblwidth-parseInt(d.p.width,10),d.p.tblwidth=d.p.width))},X=function(a){var
b,c=a,e=a;for(b=a+1;b<d.p.colModel.length;b++)if(d.p.colModel[b].hidden!==!0){e=b;break}return e-c},Y=function(a){var
b=$(d.grid.headers[a].el),c=[b.position().left+b.outerWidth()];return"rtl"===d.p.direction&&(c[0]=d.p.width-c[0]),c[0]-=d.grid.bDiv.scrollLeft,c.push($(d.grid.hDiv).position().top),c.push($(d.grid.bDiv).offset().top-$(d.grid.hDiv).offset().top+$(d.grid.bDiv).height()),c},Z=function(a){var
b,c=d.grid.headers,e=$.jgrid.getCellIndex(a);for(b=0;b<c.length;b++)if(a===c[b].el){e=b;break}return e};for(this.p.id=this.id,-1===$.inArray(d.p.multikey,x)&&(d.p.multikey=!1),d.p.keyName=!1,i=0;i<d.p.colModel.length;i++)w="string"==typeof
d.p.colModel[i].template?null!=$.jgrid.cmTemplate&&"object"==typeof
$.jgrid.cmTemplate[d.p.colModel[i].template]?$.jgrid.cmTemplate[d.p.colModel[i].template]:{}:d.p.colModel[i].template,d.p.colModel[i]=$.extend(!0,{},d.p.cmTemplate,w||{},d.p.colModel[i]),d.p.keyName===!1&&d.p.colModel[i].key===!0&&(d.p.keyName=d.p.colModel[i].name);if(d.p.sortorder=d.p.sortorder.toLowerCase(),$.jgrid.cell_width=$.jgrid.cellWidth(),d.p.grouping===!0&&(d.p.scroll=!1,d.p.rownumbers=!1,d.p.treeGrid=!1,d.p.gridview=!0),this.p.treeGrid===!0){try{$(this).jqGrid("setTreeGrid")}catch(_){}"local"!==d.p.datatype&&(d.p.localReader={id:"_id_"})}if(this.p.subGrid)try{$(d).jqGrid("setSubGrid")}catch(aa){}this.p.multiselect&&(this.p.colNames.unshift("<input role='checkbox' id='cb_"+this.p.id+"' class='cbox' type='checkbox'/>"),this.p.colModel.unshift({name:"cb",width:$.jgrid.cell_width?d.p.multiselectWidth+d.p.cellLayout:d.p.multiselectWidth,sortable:!1,resizable:!1,hidedlg:!0,search:!1,align:"center",fixed:!0,frozen:!0})),this.p.rownumbers&&(this.p.colNames.unshift(""),this.p.colModel.unshift({name:"rn",width:d.p.rownumWidth,sortable:!1,resizable:!1,hidedlg:!0,search:!1,align:"center",fixed:!0,frozen:!0})),d.p.xmlReader=$.extend(!0,{root:"rows",row:"row",page:"rows>page",total:"rows>total",records:"rows>records",repeatitems:!0,cell:"cell",id:"[id]",userdata:"userdata",subgrid:{root:"rows",row:"row",repeatitems:!0,cell:"cell"}},d.p.xmlReader),d.p.jsonReader=$.extend(!0,{root:"rows",page:"page",total:"total",records:"records",repeatitems:!0,cell:"cell",id:"id",userdata:"userdata",subgrid:{root:"rows",repeatitems:!0,cell:"cell"}},d.p.jsonReader),d.p.localReader=$.extend(!0,{root:"rows",page:"page",total:"total",records:"records",repeatitems:!1,cell:"cell",id:"id",userdata:"userdata",subgrid:{root:"rows",repeatitems:!0,cell:"cell"}},d.p.localReader),d.p.scroll&&(d.p.pgbuttons=!1,d.p.pginput=!1,d.p.rowList=[]),d.p.data.length&&(I(),J());var
ba,ca,da,ea,fa,ga,ha,ia,ja="<thead><tr class='ui-jqgrid-labels' role='row'>",ka="",la="",ma="";if(d.p.shrinkToFit===!0&&d.p.forceFit===!0)for(i=d.p.colModel.length-1;i>=0;i--)if(!d.p.colModel[i].hidden){d.p.colModel[i].resizable=!1;break}if("horizontal"===d.p.viewsortcols[1]?(la=" ui-i-asc",ma=" ui-i-desc"):"single"===d.p.viewsortcols[1]&&(la=" ui-single-sort-asc",ma=" ui-single-sort-desc",ka=" style='display:none'",d.p.viewsortcols[0]=!1),ba=r?"class='ui-th-div-ie'":"",ia="<span class='s-ico' style='display:none'>",ia+="<span sort='asc'  class='ui-grid-ico-sort ui-icon-asc"+la+" ui-sort-"+h+" "+m+" "+q+" "+k(l,"icon_asc",!0)+"'"+ka+"></span>",ia+="<span sort='desc' class='ui-grid-ico-sort ui-icon-desc"+ma+" ui-sort-"+h+" "+m+" "+q+" "+k(l,"icon_desc",!0)+"'"+ka+"></span></span>",d.p.multiSort&&d.p.sortname)for(s=d.p.sortname.split(","),i=0;i<s.length;i++)u=$.trim(s[i]).split(" "),s[i]=$.trim(u[0]),t[i]=u[1]?$.trim(u[1]):d.p.sortorder||"asc";for(i=0;i<this.p.colNames.length;i++){var
na=d.p.headertitles?' title="'+$.jgrid.stripHtml(d.p.colNames[i])+'"':"";ja+="<th id='"+d.p.id+"_"+d.p.colModel[i].name+"' role='columnheader' "+k(l,"headerBox",!1,"ui-th-column ui-th-"+h)+" "+na+">",ca=d.p.colModel[i].index||d.p.colModel[i].name,ja+="<div id='jqgh_"+d.p.id+"_"+d.p.colModel[i].name+"' "+ba+">"+d.p.colNames[i],d.p.colModel[i].width?d.p.colModel[i].width=parseInt(d.p.colModel[i].width,10):d.p.colModel[i].width=150,"boolean"!=typeof
d.p.colModel[i].title&&(d.p.colModel[i].title=!0),d.p.colModel[i].lso="",ca===d.p.sortname&&(d.p.lastsort=i),d.p.multiSort&&(u=$.inArray(ca,s),-1!==u&&(d.p.colModel[i].lso=t[u])),ja+=ia+"</div></th>"}if(ja+="</tr></thead>",ia=null,$(this).append(ja),$("thead tr:first th",this).hover(function(){$(this).addClass(o)},function(){$(this).removeClass(o)}),this.p.multiselect){var
oa,pa=[];$("#cb_"+$.jgrid.jqID(d.p.id),this).bind("click",function(){d.p.selarrrow=[];var
a=d.p.frozenColumns===!0?d.p.id+"_frozen":"";this.checked?($(d.rows).each(function(b){b>0&&($(this).hasClass("ui-subgrid")||$(this).hasClass("jqgroup")||$(this).hasClass(m)||$(this).hasClass("jqfoot")||($("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(this.id))[d.p.useProp?"prop":"attr"]("checked",!0),$(this).addClass(n).attr("aria-selected","true"),d.p.selarrrow.push(this.id),d.p.selrow=this.id,a&&($("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(this.id),d.grid.fbDiv)[d.p.useProp?"prop":"attr"]("checked",!0),$("#"+$.jgrid.jqID(this.id),d.grid.fbDiv).addClass(n))))}),oa=!0,pa=[]):($(d.rows).each(function(b){b>0&&($(this).hasClass("ui-subgrid")||$(this).hasClass("jqgroup")||$(this).hasClass(m)||$(this).hasClass("jqfoot")||($("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(this.id))[d.p.useProp?"prop":"attr"]("checked",!1),$(this).removeClass(n).attr("aria-selected","false"),pa.push(this.id),a&&($("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(this.id),d.grid.fbDiv)[d.p.useProp?"prop":"attr"]("checked",!1),$("#"+$.jgrid.jqID(this.id),d.grid.fbDiv).removeClass(n))))}),d.p.selrow=null,oa=!1),$(d).triggerHandler("jqGridSelectAll",[oa?d.p.selarrrow:pa,oa]),$.isFunction(d.p.onSelectAll)&&d.p.onSelectAll.call(d,oa?d.p.selarrrow:pa,oa)})}if(d.p.autowidth===!0){var
qa=$(v).innerWidth();d.p.width=qa>0?qa:"nw"}W(),$(v).css("width",e.width+"px").append("<div class='ui-jqgrid-resize-mark' id='rs_m"+d.p.id+"'>&#160;</div>"),d.p.scrollPopUp&&$(v).append("<div "+k(l,"scrollBox",!1,"loading ui-scroll-popup")+" id='scroll_g"+d.p.id+"'></div>"),$(j).css("width",e.width+"px"),ja=$("thead:first",d).get(0);var
ra="";d.p.footerrow&&(ra+="<table role='presentation' style='width:"+d.p.tblwidth+"px' "+k(l,"footerTable",!1,"ui-jqgrid-ftable ui-common-table")+"><tbody><tr role='row' "+k(l,"footerBox",!1,"footrow footrow-"+h)+">");var
sa=$("tr:first",ja),ta="<tr class='jqgfirstrow' role='row'>";if(d.p.disableClick=!1,$("th",sa).each(function(a){da=d.p.colModel[a].width,void
0===d.p.colModel[a].resizable&&(d.p.colModel[a].resizable=!0),d.p.colModel[a].resizable?(ea=document.createElement("span"),$(ea).html("&#160;").addClass("ui-jqgrid-resize ui-jqgrid-resize-"+h).css("cursor","col-resize"),$(this).addClass(d.p.resizeclass)):ea="",$(this).css("width",da+"px").prepend(ea),ea=null;var
b="";d.p.colModel[a].hidden&&($(this).css("display","none"),b="display:none;"),ta+="<td role='gridcell' style='height:0px;width:"+da+"px;"+b+"'></td>",e.headers[a]={width:da,el:this},ka=d.p.colModel[a].sortable,"boolean"!=typeof
ka&&(d.p.colModel[a].sortable=!0,ka=!0);var
c=d.p.colModel[a].name;"cb"!==c&&"subgrid"!==c&&"rn"!==c&&d.p.viewsortcols[2]&&$(">div",this).addClass("ui-jqgrid-sortable"),ka&&(d.p.multiSort?d.p.viewsortcols[0]?($("div span.s-ico",this).show(),d.p.colModel[a].lso&&$("div span.ui-icon-"+d.p.colModel[a].lso,this).removeClass(m).css("display","")):d.p.colModel[a].lso&&($("div span.s-ico",this).show(),$("div span.ui-icon-"+d.p.colModel[a].lso,this).removeClass(m).css("display","")):d.p.viewsortcols[0]?($("div span.s-ico",this).show(),a===d.p.lastsort&&$("div span.ui-icon-"+d.p.sortorder,this).removeClass(m).css("display","")):a===d.p.lastsort&&""!==d.p.sortname&&($("div span.s-ico",this).show(),$("div span.ui-icon-"+d.p.sortorder,this).removeClass(m).css("display",""))),d.p.footerrow&&(ra+="<td role='gridcell' "+z(a,0,"",null,"",!1)+">&#160;</td>")}).mousedown(function(a){if(1===$(a.target).closest("th>span.ui-jqgrid-resize").length){var
b=Z(this);return d.p.forceFit===!0&&(d.p.nv=X(b)),e.dragStart(b,a,Y(b)),!1}}).click(function(a){if(d.p.disableClick)return d.p.disableClick=!1,!1;var
b,c,e="th>div.ui-jqgrid-sortable";d.p.viewsortcols[2]||(e="th>div>span>span.ui-grid-ico-sort");var
f=$(a.target).closest(e);if(1===f.length){var
g;if(d.p.frozenColumns){var
h=$(this)[0].id.substring(d.p.id.length+1);$(d.p.colModel).each(function(a){return this.name===h?(g=a,!1):void
0})}else
g=Z(this);return d.p.viewsortcols[2]||(b=!0,c=f.attr("sort")),null!=g&&V($("div",this)[0].id,g,b,c,this),!1}}),d.p.sortable&&$.fn.sortable)try{$(d).jqGrid("sortableColumns",sa)}catch(ua){}d.p.footerrow&&(ra+="</tr></tbody></table>"),ta+="</tr>",ha=document.createElement("tbody"),this.appendChild(ha),$(this).addClass(k(l,"rowTable",!0,"ui-jqgrid-btable ui-common-table")).append(ta),ta=null;var
va=$("<table "+k(l,"headerTable",!1,"ui-jqgrid-htable ui-common-table")+" style='width:"+d.p.tblwidth+"px' role='presentation' aria-labelledby='gbox_"+this.id+"'></table>").append(ja),wa=d.p.caption&&d.p.hiddengrid===!0?!0:!1,xa=$("<div class='ui-jqgrid-hbox"+("rtl"===h?"-rtl":"")+"'></div>");ja=null,e.hDiv=document.createElement("div"),e.hDiv.style.width=e.width+"px",e.hDiv.className=k(l,"headerDiv",!0,"ui-jqgrid-hdiv"),$(e.hDiv).append(xa),$(xa).append(va),va=null,wa&&$(e.hDiv).hide(),d.p.pager&&("string"==typeof
d.p.pager?"#"!==d.p.pager.substr(0,1)&&(d.p.pager="#"+d.p.pager):d.p.pager="#"+$(d.p.pager).attr("id"),$(d.p.pager).css({width:e.width+"px"}).addClass(k(l,"pagerBox",!0,"ui-jqgrid-pager")).appendTo(v),wa&&$(d.p.pager).hide(),T(d.p.pager,"")),d.p.cellEdit===!1&&d.p.hoverrows===!0&&$(d).bind("mouseover",function(a){ga=$(a.target).closest("tr.jqgrow"),"ui-subgrid"!==$(ga).attr("class")&&$(ga).addClass(o)}).bind("mouseout",function(a){ga=$(a.target).closest("tr.jqgrow"),$(ga).removeClass(o)});var
ya,za,Aa;$(d).before(e.hDiv).click(function(a){if(fa=a.target,ga=$(fa,d.rows).closest("tr.jqgrow"),0===$(ga).length||ga[0].className.indexOf(m)>-1||($(fa,d).closest("table.ui-jqgrid-btable").attr("id")||"").replace("_frozen","")!==d.id)return this;var
b=$(fa).hasClass("cbox"),c=$(d).triggerHandler("jqGridBeforeSelectRow",[ga[0].id,a]);if(c=c===!1||"stop"===c?!1:!0,$.isFunction(d.p.beforeSelectRow)){var
e=d.p.beforeSelectRow.call(d,ga[0].id,a);(e===!1||"stop"===e)&&(c=!1)}if("A"!==fa.tagName&&("INPUT"!==fa.tagName&&"TEXTAREA"!==fa.tagName&&"OPTION"!==fa.tagName&&"SELECT"!==fa.tagName||b))if(ya=ga[0].id,fa=$(fa).closest("tr.jqgrow>td"),fa.length>0&&(za=$.jgrid.getCellIndex(fa),Aa=$(fa).closest("td,th").html(),$(d).triggerHandler("jqGridCellSelect",[ya,za,Aa,a]),$.isFunction(d.p.onCellSelect)&&d.p.onCellSelect.call(d,ya,za,Aa,a)),d.p.cellEdit!==!0){if(c)if(d.p.multikey)a[d.p.multikey]?$(d).jqGrid("setSelection",ya,!0,a):d.p.multiselect&&b&&(b=$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+ya).is(":checked"),$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+ya)[d.p.useProp?"prop":"attr"]("checked",!b));else
if(d.p.multiselect&&d.p.multiboxonly)if(b)$(d).jqGrid("setSelection",ya,!0,a);else{var
f=d.p.frozenColumns?d.p.id+"_frozen":"";$(d.p.selarrrow).each(function(a,b){var
c=$(d).jqGrid("getGridRowById",b);c&&$(c).removeClass(n),$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(b))[d.p.useProp?"prop":"attr"]("checked",!1),f&&($("#"+$.jgrid.jqID(b),"#"+$.jgrid.jqID(f)).removeClass(n),$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(b),"#"+$.jgrid.jqID(f))[d.p.useProp?"prop":"attr"]("checked",!1))}),d.p.selarrrow=[],$(d).jqGrid("setSelection",ya,!0,a)}else
$(d).jqGrid("setSelection",ya,!0,a)}else
if(d.p.multiselect&&b&&c)$(d).jqGrid("setSelection",ya,!0,a);else
if(fa.length>0)try{$(d).jqGrid("editCell",ga[0].rowIndex,za,!0)}catch(g){}}).bind("reloadGrid",function(a,b){if(d.p.treeGrid===!0&&(d.p.datatype=d.p.treedatatype),b=b||{},b.current&&d.grid.selectionPreserver(d),"local"===d.p.datatype?($(d).jqGrid("resetSelection"),d.p.data.length&&(I(),J())):d.p.treeGrid||(d.p.selrow=null,d.p.multiselect&&(d.p.selarrrow=[],S(!1)),d.p.savedRow=[]),d.p.scroll&&H.call(d,!0,!1),b.page){var
c=b.page;c>d.p.lastpage&&(c=d.p.lastpage),1>c&&(c=1),d.p.page=c,d.grid.prevRowHeight?d.grid.bDiv.scrollTop=(c-1)*d.grid.prevRowHeight*d.p.rowNum:d.grid.bDiv.scrollTop=0}return d.grid.prevRowHeight&&d.p.scroll&&void
0===b.page?(delete
d.p.lastpage,d.grid.populateVisible()):d.grid.populate(),d.p.inlineNav===!0&&$(d).jqGrid("showAddEditButtons"),!1}).dblclick(function(a){if(fa=a.target,ga=$(fa,d.rows).closest("tr.jqgrow"),0!==$(ga).length){ya=ga[0].rowIndex,za=$.jgrid.getCellIndex(fa);var
b=$(d).triggerHandler("jqGridDblClickRow",[$(ga).attr("id"),ya,za,a]);return null!=b?b:$.isFunction(d.p.ondblClickRow)&&(b=d.p.ondblClickRow.call(d,$(ga).attr("id"),ya,za,a),null!=b)?b:void
0}}).bind("contextmenu",function(a){if(fa=a.target,ga=$(fa,d.rows).closest("tr.jqgrow"),0!==$(ga).length){d.p.multiselect||$(d).jqGrid("setSelection",ga[0].id,!0,a),ya=ga[0].rowIndex,za=$.jgrid.getCellIndex(fa);var
b=$(d).triggerHandler("jqGridRightClickRow",[$(ga).attr("id"),ya,za,a]);return null!=b?b:$.isFunction(d.p.onRightClickRow)&&(b=d.p.onRightClickRow.call(d,$(ga).attr("id"),ya,za,a),null!=b)?b:void
0}}),e.bDiv=document.createElement("div"),r&&"auto"===String(d.p.height).toLowerCase()&&(d.p.height="100%"),$(e.bDiv).append($('<div style="position:relative;"></div>').append("<div></div>").append(this)).addClass("ui-jqgrid-bdiv").css({height:d.p.height+(isNaN(d.p.height)?"":"px"),width:e.width+"px"}).scroll(e.scrollGrid),$("table:first",e.bDiv).css({width:d.p.tblwidth+"px"}),$.support.tbody||2===$("tbody",this).length&&$("tbody:gt(0)",this).remove(),d.p.multikey&&($.jgrid.msie?$(e.bDiv).bind("selectstart",function(){return!1}):$(e.bDiv).bind("mousedown",function(){return!1})),wa&&$(e.bDiv).hide();var
Ba=q+" "+k(l,"icon_caption_open",!0),Ca=q+" "+k(l,"icon_caption_close",!0);e.cDiv=document.createElement("div");var
Da=d.p.hidegrid===!0?$("<a role='link' class='ui-jqgrid-titlebar-close HeaderButton "+p+"' title='"+($.jgrid.getRegional(d,"defaults.showhide",d.p.showhide)||"")+"' />").hover(function(){Da.addClass(o)},function(){Da.removeClass(o)}).append("<span class='ui-jqgrid-headlink "+Ba+"'></span>").css("rtl"===h?"left":"right","0px"):"";if($(e.cDiv).append(Da).append("<span class='ui-jqgrid-title'>"+d.p.caption+"</span>").addClass("ui-jqgrid-titlebar ui-jqgrid-caption"+("rtl"===h?"-rtl":"")+" "+k(l,"gridtitleBox",!0)),$(e.cDiv).insertBefore(e.hDiv),d.p.toolbar[0]){var
Ea=k(l,"customtoolbarBox",!0,"ui-userdata");e.uDiv=document.createElement("div"),"top"===d.p.toolbar[1]?$(e.uDiv).insertBefore(e.hDiv):"bottom"===d.p.toolbar[1]&&$(e.uDiv).insertAfter(e.hDiv),"both"===d.p.toolbar[1]?(e.ubDiv=document.createElement("div"),$(e.uDiv).addClass(Ea+" ui-userdata-top").attr("id","t_"+this.id).insertBefore(e.hDiv).width(e.width),$(e.ubDiv).addClass(Ea+" ui-userdata-bottom").attr("id","tb_"+this.id).insertAfter(e.hDiv).width(e.width),wa&&$(e.ubDiv).hide()):$(e.uDiv).width(e.width).addClass(Ea+" ui-userdata-top").attr("id","t_"+this.id),wa&&$(e.uDiv).hide()}if(d.p.toppager&&(d.p.toppager=$.jgrid.jqID(d.p.id)+"_toppager",e.topDiv=$("<div id='"+d.p.toppager+"'></div>")[0],d.p.toppager="#"+d.p.toppager,$(e.topDiv).addClass(k(l,"toppagerBox",!0,"ui-jqgrid-toppager")).width(e.width).insertBefore(e.hDiv),T(d.p.toppager,"_t")),d.p.footerrow&&(e.sDiv=$("<div class='ui-jqgrid-sdiv'></div>")[0],xa=$("<div class='ui-jqgrid-hbox"+("rtl"===h?"-rtl":"")+"'></div>"),$(e.sDiv).append(xa).width(e.width).insertAfter(e.hDiv),$(xa).append(ra),e.footers=$(".ui-jqgrid-ftable",e.sDiv)[0].rows[0].cells,d.p.rownumbers&&(e.footers[0].className=k(l,"rownumBox",!0,"jqgrid-rownum")),wa&&$(e.sDiv).hide()),xa=null,d.p.caption){var
Fa=d.p.datatype;d.p.hidegrid===!0&&($(".ui-jqgrid-titlebar-close",e.cDiv).click(function(a){var
b,c=$.isFunction(d.p.onHeaderClick),f=".ui-jqgrid-bdiv, .ui-jqgrid-hdiv, .ui-jqgrid-toppager, .ui-jqgrid-pager, .ui-jqgrid-sdiv",g=this;return d.p.toolbar[0]===!0&&("both"===d.p.toolbar[1]&&(f+=", #"+$(e.ubDiv).attr("id")),f+=", #"+$(e.uDiv).attr("id")),b=$(f,"#gview_"+$.jgrid.jqID(d.p.id)).length,"visible"===d.p.gridstate?$(f,"#gbox_"+$.jgrid.jqID(d.p.id)).slideUp("fast",function(){b--,0===b&&($("span",g).removeClass(Ba).addClass(Ca),d.p.gridstate="hidden",$("#gbox_"+$.jgrid.jqID(d.p.id)).hasClass("ui-resizable")&&$(".ui-resizable-handle","#gbox_"+$.jgrid.jqID(d.p.id)).hide(),$(d).triggerHandler("jqGridHeaderClick",[d.p.gridstate,a]),c&&(wa||d.p.onHeaderClick.call(d,d.p.gridstate,a)))}):"hidden"===d.p.gridstate&&$(f,"#gbox_"+$.jgrid.jqID(d.p.id)).slideDown("fast",function(){b--,0===b&&($("span",g).removeClass(Ca).addClass(Ba),wa&&(d.p.datatype=Fa,R(),wa=!1),d.p.gridstate="visible",$("#gbox_"+$.jgrid.jqID(d.p.id)).hasClass("ui-resizable")&&$(".ui-resizable-handle","#gbox_"+$.jgrid.jqID(d.p.id)).show(),$(d).triggerHandler("jqGridHeaderClick",[d.p.gridstate,a]),c&&(wa||d.p.onHeaderClick.call(d,d.p.gridstate,a)))}),!1}),wa&&(d.p.datatype="local",$(".ui-jqgrid-titlebar-close",e.cDiv).trigger("click")))}else
$(e.cDiv).hide(),d.p.toppager||$(e.hDiv).addClass(k(d.p.styleUI+".common","cornertop",!0));if($(e.hDiv).after(e.bDiv).mousemove(function(a){return e.resizing?(e.dragMove(a),!1):void
0}),$(".ui-jqgrid-labels",e.hDiv).bind("selectstart",function(){return!1}),$(document).bind("mouseup.jqGrid"+d.p.id,function(){return e.resizing?(e.dragEnd(!0),!1):!0}),d.formatCol=z,d.sortData=V,d.updatepager=O,d.refreshIndex=J,d.setHeadCheckBox=S,d.constructTr=K,d.formatter=function(a,b,c,d,e){return B(a,b,c,d,e)},$.extend(e,{populate:R,emptyRows:H,beginReq:P,endReq:Q}),this.grid=e,d.addXmlData=function(a){L(a)},d.addJSONData=function(a){M(a)},this.grid.cols=this.rows[0].cells,$(d).triggerHandler("jqGridInitGrid"),$.isFunction(d.p.onInitGrid)&&d.p.onInitGrid.call(d),R(),d.p.hiddengrid=!1,d.p.responsive){var
Ga="onorientationchange"in
window,Ha=Ga?"orientationchange":"resize";$(window).on(Ha,function(){$(d).jqGrid("resizeGrid")})}}})},$.jgrid.extend({getGridParam:function(a,b){var
c,d=this[0];if(d&&d.grid){if(void
0===b&&"string"!=typeof
b&&(b="jqGrid"),c=d.p,"jqGrid"!==b)try{c=$(d).data(b)}catch(e){c=d.p}return a?void
0!==c[a]?c[a]:null:c}},setGridParam:function(a,b){return this.each(function(){if(null==b&&(b=!1),this.grid&&"object"==typeof
a)if(b===!0){var
c=$.extend({},this.p,a);this.p=c}else
$.extend(!0,this.p,a)})},getGridRowById:function(a){var
b;return this.each(function(){try{for(var
c=this.rows.length;c--;)if(a.toString()===this.rows[c].id){b=this.rows[c];break}}catch(d){b=$(this.grid.bDiv).find("#"+$.jgrid.jqID(a))}}),b},getDataIDs:function(){var
a,b=[],c=0,d=0;return this.each(function(){if(a=this.rows.length,a&&a>0)for(;a>c;)$(this.rows[c]).hasClass("jqgrow")&&(b[d]=this.rows[c].id,d++),c++}),b},setSelection:function(a,b,c){return this.each(function(){function
d(a){var
b=$(l.grid.bDiv)[0].clientHeight,c=$(l.grid.bDiv)[0].scrollTop,d=$(l.rows[a]).position().top,e=l.rows[a].clientHeight;d+e>=b+c?$(l.grid.bDiv)[0].scrollTop=d-(b+c)+e+c:b+c>d&&c>d&&($(l.grid.bDiv)[0].scrollTop=d)}var
e,f,g,h,i,j,k,l=this,m=$.jgrid.getMethod("getStyleUI"),n=m(l.p.styleUI+".common","highlight",!0),o=m(l.p.styleUI+".common","disabled",!0);void
0!==a&&(b=b===!1?!1:!0,f=$(l).jqGrid("getGridRowById",a),!f||!f.className||f.className.indexOf(o)>-1||(l.p.scrollrows===!0&&(g=$(l).jqGrid("getGridRowById",a).rowIndex,g>=0&&d(g)),l.p.frozenColumns===!0&&(j=l.p.id+"_frozen"),l.p.multiselect?(l.setHeadCheckBox(!1),l.p.selrow=f.id,h=$.inArray(l.p.selrow,l.p.selarrrow),-1===h?("ui-subgrid"!==f.className&&$(f).addClass(n).attr("aria-selected","true"),e=!0,l.p.selarrrow.push(l.p.selrow)):("ui-subgrid"!==f.className&&$(f).removeClass(n).attr("aria-selected","false"),e=!1,l.p.selarrrow.splice(h,1),i=l.p.selarrrow[0],l.p.selrow=void
0===i?null:i),$("#jqg_"+$.jgrid.jqID(l.p.id)+"_"+$.jgrid.jqID(f.id))[l.p.useProp?"prop":"attr"]("checked",e),j&&(-1===h?$("#"+$.jgrid.jqID(a),"#"+$.jgrid.jqID(j)).addClass(n):$("#"+$.jgrid.jqID(a),"#"+$.jgrid.jqID(j)).removeClass(n),$("#jqg_"+$.jgrid.jqID(l.p.id)+"_"+$.jgrid.jqID(a),"#"+$.jgrid.jqID(j))[l.p.useProp?"prop":"attr"]("checked",e)),b&&($(l).triggerHandler("jqGridSelectRow",[f.id,e,c]),l.p.onSelectRow&&l.p.onSelectRow.call(l,f.id,e,c))):"ui-subgrid"!==f.className&&(l.p.selrow!==f.id?(k=$(l).jqGrid("getGridRowById",l.p.selrow),k&&$(k).removeClass(n).attr({"aria-selected":"false",tabindex:"-1"}),$(f).addClass(n).attr({"aria-selected":"true",tabindex:"0"}),j&&($("#"+$.jgrid.jqID(l.p.selrow),"#"+$.jgrid.jqID(j)).removeClass(n),$("#"+$.jgrid.jqID(a),"#"+$.jgrid.jqID(j)).addClass(n)),e=!0):e=!1,l.p.selrow=f.id,b&&($(l).triggerHandler("jqGridSelectRow",[f.id,e,c]),l.p.onSelectRow&&l.p.onSelectRow.call(l,f.id,e,c)))))})},resetSelection:function(a){return this.each(function(){var
b,c,d=this,e=$.jgrid.getMethod("getStyleUI"),f=e(d.p.styleUI+".common","highlight",!0),g=e(d.p.styleUI+".common","hover",!0);if(d.p.frozenColumns===!0&&(c=d.p.id+"_frozen"),void
0!==a){if(b=a===d.p.selrow?d.p.selrow:a,$("#"+$.jgrid.jqID(d.p.id)+" tbody:first tr#"+$.jgrid.jqID(b)).removeClass(f).attr("aria-selected","false"),c&&$("#"+$.jgrid.jqID(b),"#"+$.jgrid.jqID(c)).removeClass(f),d.p.multiselect){$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(b),"#"+$.jgrid.jqID(d.p.id))[d.p.useProp?"prop":"attr"]("checked",!1),c&&$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(b),"#"+$.jgrid.jqID(c))[d.p.useProp?"prop":"attr"]("checked",!1),d.setHeadCheckBox(!1);var
h=$.inArray($.jgrid.jqID(b),d.p.selarrrow);-1!==h&&d.p.selarrrow.splice(h,1)}d.p.onUnSelectRow&&d.p.onUnSelectRow.call(d,b),b=null}else
d.p.multiselect?($(d.p.selarrrow).each(function(a,b){$($(d).jqGrid("getGridRowById",b)).removeClass(f).attr("aria-selected","false"),$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(b))[d.p.useProp?"prop":"attr"]("checked",!1),c&&($("#"+$.jgrid.jqID(b),"#"+$.jgrid.jqID(c)).removeClass(f),$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(b),"#"+$.jgrid.jqID(c))[d.p.useProp?"prop":"attr"]("checked",!1)),d.p.onUnSelectRow&&d.p.onUnSelectRow.call(d,b)}),d.setHeadCheckBox(!1),d.p.selarrrow=[],d.p.selrow=null):d.p.selrow&&($("#"+$.jgrid.jqID(d.p.id)+" tbody:first tr#"+$.jgrid.jqID(d.p.selrow)).removeClass(f).attr("aria-selected","false"),c&&$("#"+$.jgrid.jqID(d.p.selrow),"#"+$.jgrid.jqID(c)).removeClass(f),d.p.onUnSelectRow&&d.p.onUnSelectRow.call(d,d.p.selrow),d.p.selrow=null);d.p.cellEdit===!0&&parseInt(d.p.iCol,10)>=0&&parseInt(d.p.iRow,10)>=0&&($("td:eq("+d.p.iCol+")",d.rows[d.p.iRow]).removeClass("edit-cell "+f),$(d.rows[d.p.iRow]).removeClass("selected-row "+g)),d.p.savedRow=[]})},getRowData:function(a,b){var
c,d,e={},f=!1,g=0;return this.each(function(){var
h,i,j=this;if(null==a)f=!0,c=[],d=j.rows.length;else{if(i=$(j).jqGrid("getGridRowById",a),!i)return e;d=2}for(b&&b===!0&&j.p.data.length>0||(b=!1);d>g;)f&&(i=j.rows[g]),$(i).hasClass("jqgrow")&&(b?e=j.p.data[j.p._index[i.id]]:$('td[role="gridcell"]',i).each(function(a){if(h=j.p.colModel[a].name,"cb"!==h&&"subgrid"!==h&&"rn"!==h)if(j.p.treeGrid===!0&&h===j.p.ExpandColumn)e[h]=$.jgrid.htmlDecode($("span:first",this).html());else
try{e[h]=$.unformat.call(j,this,{rowId:i.id,colModel:j.p.colModel[a]},a)}catch(b){e[h]=$.jgrid.htmlDecode($(this).html())}}),f&&(c.push(e),e={})),g++}),c||e},delRowData:function(a){var
b,c,d,e=!1;return this.each(function(){var
f=this;if(b=$(f).jqGrid("getGridRowById",a),!b)return!1;if(f.p.subGrid&&(d=$(b).next(),d.hasClass("ui-subgrid")&&d.remove()),$(b).remove(),f.p.records--,f.p.reccount--,f.updatepager(!0,!1),e=!0,f.p.multiselect&&(c=$.inArray(a,f.p.selarrrow),-1!==c&&f.p.selarrrow.splice(c,1)),f.p.multiselect&&f.p.selarrrow.length>0?f.p.selrow=f.p.selarrrow[f.p.selarrrow.length-1]:f.p.selrow===a&&(f.p.selrow=null),"local"===f.p.datatype){var
g=$.jgrid.stripPref(f.p.idPrefix,a),h=f.p._index[g];void
0!==h&&(f.p.data.splice(h,1),f.refreshIndex())}if(f.p.altRows===!0&&e){var
i=f.p.altclass;$(f.rows).each(function(a){a%2===1?$(this).addClass(i):$(this).removeClass(i)})}}),e},setRowData:function(a,b,c){var
d,e,f=!0;return this.each(function(){if(!this.grid)return!1;var
g,h,i=this,j=typeof
c,k={};if(h=$(this).jqGrid("getGridRowById",a),!h)return!1;if(b)try{if($(this.p.colModel).each(function(c){d=this.name;var
f=$.jgrid.getAccessor(b,d);void
0!==f&&(k[d]=this.formatter&&"string"==typeof
this.formatter&&"date"===this.formatter?$.unformat.date.call(i,f,this):f,g=i.formatter(a,k[d],c,b,"edit"),e=this.title?{title:$.jgrid.stripHtml(g)}:{},i.p.treeGrid===!0&&d===i.p.ExpandColumn?$("td[role='gridcell']:eq("+c+") > span:first",h).html(g).attr(e):$("td[role='gridcell']:eq("+c+")",h).html(g).attr(e))}),"local"===i.p.datatype){var
l,m=$.jgrid.stripPref(i.p.idPrefix,a),n=i.p._index[m];if(i.p.treeGrid)for(l
in
i.p.treeReader)i.p.treeReader.hasOwnProperty(l)&&delete
k[i.p.treeReader[l]];void
0!==n&&(i.p.data[n]=$.extend(!0,i.p.data[n],k)),k=null}}catch(o){f=!1}f&&("string"===j?$(h).addClass(c):null!==c&&"object"===j&&$(h).css(c),$(i).triggerHandler("jqGridAfterGridComplete"))}),f},addRowData:function(a,b,c,d){-1===$.inArray(c,["first","last","before","after"])&&(c="last");var
e,f,g,h,i,j,k,l,m,n,o,p,q,r,s=!1,t="",u="",v="";return b&&($.isArray(b)?(m=!0,n=a):(b=[b],m=!1),this.each(function(){var
w=this,x=b.length;i=w.p.rownumbers===!0?1:0,g=w.p.multiselect===!0?1:0,h=w.p.subGrid===!0?1:0,m||(void
0!==a?a=String(a):(a=$.jgrid.randId(),w.p.keyName!==!1&&(n=w.p.keyName,void
0!==b[0][n]&&(a=b[0][n])))),o=w.p.altclass;var
y,z=0,A=$(w).jqGrid("getStyleUI",w.p.styleUI+".base","rowBox",!0,"jqgrow ui-row-"+w.p.direction),B={},C=$.isFunction(w.p.afterInsertRow)?!0:!1;for(i&&(t=$(w).jqGrid("getStyleUI",w.p.styleUI+".base","rownumBox",!1,"jqgrid-rownum")),g&&(u=$(w).jqGrid("getStyleUI",w.p.styleUI+".base","multiBox",!1,"cbox"));x>z;){if(p=b[z],f=[],y=A,m){try{a=p[n],void
0===a&&(a=$.jgrid.randId())}catch(D){a=$.jgrid.randId()}y+=w.p.altRows===!0&&(w.rows.length-1)%2===0?" "+o:""}for(r=a,a=w.p.idPrefix+a,i&&(v=w.formatCol(0,1,"",null,a,!0),f[f.length]='<td role="gridcell" '+t+" "+v+">0</td>"),g&&(l='<input role="checkbox" type="checkbox" id="jqg_'+w.p.id+"_"+a+'" '+u+"/>",v=w.formatCol(i,1,"",null,a,!0),f[f.length]='<td role="gridcell" '+v+">"+l+"</td>"),h&&(f[f.length]=$(w).jqGrid("addSubGridCell",g+i,1)),k=g+h+i;k<w.p.colModel.length;k++)q=w.p.colModel[k],e=q.name,B[e]=p[e],l=w.formatter(a,$.jgrid.getAccessor(p,e),k,p),v=w.formatCol(k,1,l,p,a,B),f[f.length]='<td role="gridcell" '+v+">"+l+"</td>";if(f.unshift(w.constructTr(a,!1,y,B,p)),f[f.length]="</tr>",0===w.rows.length)$("table:first",w.grid.bDiv).append(f.join(""));else
switch(c){case"last":$(w.rows[w.rows.length-1]).after(f.join("")),j=w.rows.length-1;break;case"first":$(w.rows[0]).after(f.join("")),j=1;break;case"after":j=$(w).jqGrid("getGridRowById",d),j&&($(w.rows[j.rowIndex+1]).hasClass("ui-subgrid")?$(w.rows[j.rowIndex+1]).after(f):$(j).after(f.join("")),j=j.rowIndex+1);break;case"before":j=$(w).jqGrid("getGridRowById",d),j&&($(j).before(f.join("")),j=j.rowIndex-1)}w.p.subGrid===!0&&$(w).jqGrid("addSubGrid",g+i,j),w.p.records++,w.p.reccount++,$(w).triggerHandler("jqGridAfterInsertRow",[a,p,p]),C&&w.p.afterInsertRow.call(w,a,p,p),z++,"local"===w.p.datatype&&(B[w.p.localReader.id]=r,w.p._index[r]=w.p.data.length,w.p.data.push(B),B={})}w.p.altRows!==!0||m||("last"===c?(w.rows.length-1)%2===0&&$(w.rows[w.rows.length-1]).addClass(o):$(w.rows).each(function(a){a%2===0?$(this).addClass(o):$(this).removeClass(o)})),w.updatepager(!0,!0),s=!0})),s},footerData:function(a,b,c){function
d(a){var
b;for(b
in
a)if(a.hasOwnProperty(b))return!1;return!0}var
e,f,g=!1,h={};return void
0===a&&(a="get"),"boolean"!=typeof
c&&(c=!0),a=a.toLowerCase(),this.each(function(){var
i,j=this;return j.grid&&j.p.footerrow?"set"===a&&d(b)?!1:(g=!0,void
$(this.p.colModel).each(function(d){e=this.name,"set"===a?void
0!==b[e]&&(i=c?j.formatter("",b[e],d,b,"edit"):b[e],f=this.title?{title:$.jgrid.stripHtml(i)}:{},$("tr.footrow td:eq("+d+")",j.grid.sDiv).html(i).attr(f),g=!0):"get"===a&&(h[e]=$("tr.footrow td:eq("+d+")",j.grid.sDiv).html())})):!1}),"get"===a?h:g},showHideCol:function(a,b){return this.each(function(){var
c,d=this,e=!1,f=$.jgrid.cell_width?0:d.p.cellLayout;if(d.grid){"string"==typeof
a&&(a=[a]),b="none"!==b?"":"none";var
g=""===b?!0:!1,h=d.p.groupHeader&&($.isArray(d.p.groupHeader)||$.isFunction(d.p.groupHeader));if(h&&$(d).jqGrid("destroyGroupHeader",!1),$(this.p.colModel).each(function(h){if(-1!==$.inArray(this.name,a)&&this.hidden===g){if(d.p.frozenColumns===!0&&this.frozen===!0)return!0;$("tr[role=row]",d.grid.hDiv).each(function(){$(this.cells[h]).css("display",b)}),$(d.rows).each(function(){$(this).hasClass("jqgroup")||$(this.cells[h]).css("display",b)}),d.p.footerrow&&$("tr.footrow td:eq("+h+")",d.grid.sDiv).css("display",b),c=parseInt(this.width,10),"none"===b?d.p.tblwidth-=c+f:d.p.tblwidth+=c+f,this.hidden=!g,e=!0,$(d).triggerHandler("jqGridShowHideCol",[g,this.name,h])}}),e===!0&&(d.p.shrinkToFit!==!0||isNaN(d.p.height)||(d.p.tblwidth+=parseInt(d.p.scrollOffset,10)),$(d).jqGrid("setGridWidth",d.p.shrinkToFit===!0?d.p.tblwidth:d.p.width)),h){var
i=$.extend([],d.p.groupHeader);d.p.groupHeader=null;for(var
j=0;j<i.length;j++)$(d).jqGrid("setGroupHeaders",i[j])}}})},hideCol:function(a){return this.each(function(){$(this).jqGrid("showHideCol",a,"none")})},showCol:function(a){return this.each(function(){$(this).jqGrid("showHideCol",a,"")})},remapColumns:function(a,b,c){function
d(b){var
c;c=b.length?$.makeArray(b):$.extend({},b),$.each(a,function(a){b[a]=c[this]})}function
e(b,c){$(">tr"+(c||""),b).each(function(){var
b=this,c=$.makeArray(b.cells);$.each(a,function(){var
a=c[this];a&&b.appendChild(a)})})}var
f=this.get(0);d(f.p.colModel),d(f.p.colNames),d(f.grid.headers),e($("thead:first",f.grid.hDiv),c&&":not(.ui-jqgrid-labels)"),b&&e($("#"+$.jgrid.jqID(f.p.id)+" tbody:first"),".jqgfirstrow, tr.jqgrow, tr.jqfoot"),f.p.footerrow&&e($("tbody:first",f.grid.sDiv)),f.p.remapColumns&&(f.p.remapColumns.length?d(f.p.remapColumns):f.p.remapColumns=$.makeArray(a)),f.p.lastsort=$.inArray(f.p.lastsort,a),f.p.treeGrid&&(f.p.expColInd=$.inArray(f.p.expColInd,a)),$(f).triggerHandler("jqGridRemapColumns",[a,b,c])},setGridWidth:function(a,b){return this.each(function(){if(this.grid){var
c,d,e,f,g=this,h=0,i=$.jgrid.cell_width?0:g.p.cellLayout,j=0,k=!1,l=g.p.scrollOffset,m=0;if("boolean"!=typeof
b&&(b=g.p.shrinkToFit),!isNaN(a)){if(a=parseInt(a,10),g.grid.width=g.p.width=a,$("#gbox_"+$.jgrid.jqID(g.p.id)).css("width",a+"px"),$("#gview_"+$.jgrid.jqID(g.p.id)).css("width",a+"px"),$(g.grid.bDiv).css("width",a+"px"),$(g.grid.hDiv).css("width",a+"px"),g.p.pager&&$(g.p.pager).css("width",a+"px"),g.p.toppager&&$(g.p.toppager).css("width",a+"px"),g.p.toolbar[0]===!0&&($(g.grid.uDiv).css("width",a+"px"),"both"===g.p.toolbar[1]&&$(g.grid.ubDiv).css("width",a+"px")),g.p.footerrow&&$(g.grid.sDiv).css("width",a+"px"),b===!1&&g.p.forceFit===!0&&(g.p.forceFit=!1),b===!0){if($.each(g.p.colModel,function(){this.hidden===!1&&(c=this.widthOrg,h+=c+i,this.fixed?m+=c+i:j++)}),0===j)return;g.p.tblwidth=h,e=a-i*j-m,isNaN(g.p.height)||($(g.grid.bDiv)[0].clientHeight<$(g.grid.bDiv)[0].scrollHeight||1===g.rows.length)&&(k=!0,e-=l),h=0;var
n=g.grid.cols.length>0;if($.each(g.p.colModel,function(a){if(this.hidden===!1&&!this.fixed){if(c=this.widthOrg,c=Math.round(e*c/(g.p.tblwidth-i*j-m)),0>c)return;this.width=c,h+=c,g.grid.headers[a].width=c,g.grid.headers[a].el.style.width=c+"px",g.p.footerrow&&(g.grid.footers[a].style.width=c+"px"),n&&(g.grid.cols[a].style.width=c+"px"),d=a}}),!d)return;if(f=0,k?a-m-(h+i*j)!==l&&(f=a-m-(h+i*j)-l):1!==Math.abs(a-m-(h+i*j))&&(f=a-m-(h+i*j)),g.p.colModel[d].width+=f,g.p.tblwidth=h+f+i*j+m,g.p.tblwidth>a){var
o=g.p.tblwidth-parseInt(a,10);g.p.tblwidth=a,c=g.p.colModel[d].width=g.p.colModel[d].width-o}else
c=g.p.colModel[d].width;g.grid.headers[d].width=c,g.grid.headers[d].el.style.width=c+"px",n&&(g.grid.cols[d].style.width=c+"px"),g.p.footerrow&&(g.grid.footers[d].style.width=c+"px")}g.p.tblwidth&&($("table:first",g.grid.bDiv).css("width",g.p.tblwidth+"px"),$("table:first",g.grid.hDiv).css("width",g.p.tblwidth+"px"),g.grid.hDiv.scrollLeft=g.grid.bDiv.scrollLeft,g.p.footerrow&&$("table:first",g.grid.sDiv).css("width",g.p.tblwidth+"px"))}}})},setGridHeight:function(a){return this.each(function(){var
b=this;if(b.grid){var
c=$(b.grid.bDiv);c.css({height:a+(isNaN(a)?"":"px")}),b.p.frozenColumns===!0&&$("#"+$.jgrid.jqID(b.p.id)+"_frozen").parent().height(c.height()-16),b.p.height=a,b.p.scroll&&b.grid.populateVisible()}})},setCaption:function(a){return this.each(function(){var
b=$(this).jqGrid("getStyleUI",this.p.styleUI+".common","cornertop",!0);this.p.caption=a,$(".ui-jqgrid-title, .ui-jqgrid-title-rtl",this.grid.cDiv).html(a),$(this.grid.cDiv).show(),$(this.grid.hDiv).removeClass(b)})},setLabel:function(a,b,c,d){return this.each(function(){var
e=this,f=-1;if(e.grid&&void
0!==a&&($(e.p.colModel).each(function(b){return this.name===a?(f=b,!1):void
0}),f>=0)){var
g=$("tr.ui-jqgrid-labels th:eq("+f+")",e.grid.hDiv);if(b){var
h=$(".s-ico",g);$("[id^=jqgh_]",g).empty().html(b).append(h),e.p.colNames[f]=b}c&&("string"==typeof
c?$(g).addClass(c):$(g).css(c)),"object"==typeof
d&&$(g).attr(d)}})},setCell:function(a,b,c,d,e,f){return this.each(function(){var
g,h,i=this,j=-1;if(i.grid&&(isNaN(b)?$(i.p.colModel).each(function(a){return this.name===b?(j=a,!1):void
0}):j=parseInt(b,10),j>=0)){var
k=$(i).jqGrid("getGridRowById",a);if(k){var
l=$("td:eq("+j+")",k),m=0,n=[];if(""!==c||f===!0){if(void
0!==k.cells)for(;m<k.cells.length;)n.push(k.cells[m].innerHTML),m++;if(g=i.formatter(a,c,j,n,"edit"),h=i.p.colModel[j].title?{title:$.jgrid.stripHtml(g)}:{},i.p.treeGrid&&$(".tree-wrap",$(l)).length>0?$("span",$(l)).html(g).attr(h):$(l).html(g).attr(h),"local"===i.p.datatype){var
o,p=i.p.colModel[j];c=p.formatter&&"string"==typeof
p.formatter&&"date"===p.formatter?$.unformat.date.call(i,c,p):c,o=i.p._index[$.jgrid.stripPref(i.p.idPrefix,a)],void
0!==o&&(i.p.data[o][p.name]=c)}}"string"==typeof
d?$(l).addClass(d):d&&$(l).css(d),"object"==typeof
e&&$(l).attr(e)}}})},getCell:function(a,b){var
c=!1;return this.each(function(){var
d=this,e=-1;if(d.grid&&(isNaN(b)?$(d.p.colModel).each(function(a){return this.name===b?(e=a,!1):void
0}):e=parseInt(b,10),e>=0)){var
f=$(d).jqGrid("getGridRowById",a);if(f)try{c=$.unformat.call(d,$("td:eq("+e+")",f),{rowId:f.id,colModel:d.p.colModel[e]},e)}catch(g){c=$.jgrid.htmlDecode($("td:eq("+e+")",f).html())}}}),c},getCol:function(a,b,c){var
d,e,f,g,h=[],i=0;return b="boolean"!=typeof
b?!1:b,void
0===c&&(c=!1),this.each(function(){var
j=this,k=-1;if(j.grid&&(isNaN(a)?$(j.p.colModel).each(function(b){return this.name===a?(k=b,!1):void
0}):k=parseInt(a,10),k>=0)){var
l=j.rows.length,m=0,n=0;if(l&&l>0){for(;l>m;){if($(j.rows[m]).hasClass("jqgrow")){try{d=$.unformat.call(j,$(j.rows[m].cells[k]),{rowId:j.rows[m].id,colModel:j.p.colModel[k]},k)}catch(o){d=$.jgrid.htmlDecode(j.rows[m].cells[k].innerHTML)}c?(g=parseFloat(d),isNaN(g)||(i+=g,void
0===f&&(f=e=g),e=Math.min(e,g),f=Math.max(f,g),n++)):b?h.push({id:j.rows[m].id,value:d}):h.push(d)}m++}if(c)switch(c.toLowerCase()){case"sum":h=i;break;case"avg":h=i/n;break;case"count":h=l-1;break;case"min":h=e;break;case"max":h=f}}}}),h},clearGridData:function(a){return this.each(function(){var
b=this;if(b.grid){if("boolean"!=typeof
a&&(a=!1),b.p.deepempty)$("#"+$.jgrid.jqID(b.p.id)+" tbody:first tr:gt(0)").remove();else{var
c=$("#"+$.jgrid.jqID(b.p.id)+" tbody:first tr:first")[0];$("#"+$.jgrid.jqID(b.p.id)+" tbody:first").empty().append(c)}b.p.footerrow&&a&&$(".ui-jqgrid-ftable td",b.grid.sDiv).html("&#160;"),b.p.selrow=null,b.p.selarrrow=[],b.p.savedRow=[],b.p.records=0,b.p.page=1,b.p.lastpage=0,b.p.reccount=0,b.p.data=[],b.p._index={},b.updatepager(!0,!1)}})},getInd:function(a,b){var
c,d=!1;return this.each(function(){c=$(this).jqGrid("getGridRowById",a),c&&(d=b===!0?c:c.rowIndex)}),d},bindKeys:function(a){var
b=$.extend({onEnter:null,onSpace:null,onLeftKey:null,onRightKey:null,scrollingRows:!0},a||{});return this.each(function(){var
a=this;$("body").is("[role]")||$("body").attr("role","application"),a.p.scrollrows=b.scrollingRows,$(a).keydown(function(c){var
d,e,f,g=$(a).find("tr[tabindex=0]")[0],h=a.p.treeReader.expanded_field;if(g)if(f=a.p._index[$.jgrid.stripPref(a.p.idPrefix,g.id)],37===c.keyCode||38===c.keyCode||39===c.keyCode||40===c.keyCode){if(38===c.keyCode){if(e=g.previousSibling,d="",e)if($(e).is(":hidden")){for(;e;)if(e=e.previousSibling,!$(e).is(":hidden")&&$(e).hasClass("jqgrow")){d=e.id;break}}else
d=e.id;$(a).jqGrid("setSelection",d,!0,c),c.preventDefault()}if(40===c.keyCode){if(e=g.nextSibling,d="",e)if($(e).is(":hidden")){for(;e;)if(e=e.nextSibling,!$(e).is(":hidden")&&$(e).hasClass("jqgrow")){d=e.id;break}}else
d=e.id;$(a).jqGrid("setSelection",d,!0,c),c.preventDefault()}37===c.keyCode&&(a.p.treeGrid&&a.p.data[f][h]&&$(g).find("div.treeclick").trigger("click"),$(a).triggerHandler("jqGridKeyLeft",[a.p.selrow]),$.isFunction(b.onLeftKey)&&b.onLeftKey.call(a,a.p.selrow)),39===c.keyCode&&(a.p.treeGrid&&!a.p.data[f][h]&&$(g).find("div.treeclick").trigger("click"),$(a).triggerHandler("jqGridKeyRight",[a.p.selrow]),$.isFunction(b.onRightKey)&&b.onRightKey.call(a,a.p.selrow))}else
13===c.keyCode?($(a).triggerHandler("jqGridKeyEnter",[a.p.selrow]),$.isFunction(b.onEnter)&&b.onEnter.call(a,a.p.selrow)):32===c.keyCode&&($(a).triggerHandler("jqGridKeySpace",[a.p.selrow]),$.isFunction(b.onSpace)&&b.onSpace.call(a,a.p.selrow))})})},unbindKeys:function(){return this.each(function(){$(this).unbind("keydown")})},getLocalRow:function(a){var
b,c=!1;return this.each(function(){void
0!==a&&(b=this.p._index[$.jgrid.stripPref(this.p.idPrefix,a)],b>=0&&(c=this.p.data[b]))}),c},progressBar:function(a){return a=$.extend({htmlcontent:"",method:"hide",loadtype:"disable"},a||{}),this.each(function(){var
b,c,d="show"===a.method?!0:!1,e=$("#load_"+$.jgrid.jqID(this.p.id)),f=$(window).scrollTop();switch(""!==a.htmlcontent&&e.html(a.htmlcontent),a.loadtype){case"disable":break;case"enable":e.toggle(d);break;case"block":$("#lui_"+$.jgrid.jqID(this.p.id)).toggle(d),e.toggle(d)}e.is(":visible")&&(b=e.offsetParent(),e.css("top",""),e.offset().top<f&&(c=Math.min(10+f-b.offset().top,b.height()-e.height()),e.css("top",c+"px")))})},getColProp:function(a){var
b={},c=this[0];if(!c.grid)return!1;var
d,e=c.p.colModel;for(d=0;d<e.length;d++)if(e[d].name===a){b=e[d];break}return b},setColProp:function(a,b){return this.each(function(){if(this.grid&&b){var
c,d=this.p.colModel;for(c=0;c<d.length;c++)if(d[c].name===a){$.extend(!0,this.p.colModel[c],b);break}}})},sortGrid:function(a,b,c){return this.each(function(){var
d,e=this,f=-1,g=!1;if(e.grid){for(a||(a=e.p.sortname),d=0;d<e.p.colModel.length;d++)if(e.p.colModel[d].index===a||e.p.colModel[d].name===a){f=d,e.p.frozenColumns===!0&&e.p.colModel[d].frozen===!0&&(g=e.grid.fhDiv.find("#"+e.p.id+"_"+a));break}if(-1!==f){var
h=e.p.colModel[f].sortable;g||(g=e.grid.headers[f].el),"boolean"!=typeof
h&&(h=!0),"boolean"!=typeof
b&&(b=!1),h&&e.sortData("jqgh_"+e.p.id+"_"+a,f,b,c,g)}}})},setGridState:function(a){return this.each(function(){if(this.grid){var
b=this,c=$(this).jqGrid("getStyleUI",this.p.styleUI+".base","icon_caption_open",!0),d=$(this).jqGrid("getStyleUI",this.p.styleUI+".base","icon_caption_close",!0);"hidden"===a?($(".ui-jqgrid-bdiv, .ui-jqgrid-hdiv","#gview_"+$.jgrid.jqID(b.p.id)).slideUp("fast"),b.p.pager&&$(b.p.pager).slideUp("fast"),b.p.toppager&&$(b.p.toppager).slideUp("fast"),b.p.toolbar[0]===!0&&("both"===b.p.toolbar[1]&&$(b.grid.ubDiv).slideUp("fast"),$(b.grid.uDiv).slideUp("fast")),b.p.footerrow&&$(".ui-jqgrid-sdiv","#gbox_"+$.jgrid.jqID(b.p.id)).slideUp("fast"),$(".ui-jqgrid-headlink",b.grid.cDiv).removeClass(c).addClass(d),b.p.gridstate="hidden"):"visible"===a&&($(".ui-jqgrid-hdiv, .ui-jqgrid-bdiv","#gview_"+$.jgrid.jqID(b.p.id)).slideDown("fast"),b.p.pager&&$(b.p.pager).slideDown("fast"),b.p.toppager&&$(b.p.toppager).slideDown("fast"),b.p.toolbar[0]===!0&&("both"===b.p.toolbar[1]&&$(b.grid.ubDiv).slideDown("fast"),$(b.grid.uDiv).slideDown("fast")),b.p.footerrow&&$(".ui-jqgrid-sdiv","#gbox_"+$.jgrid.jqID(b.p.id)).slideDown("fast"),$(".ui-jqgrid-headlink",b.grid.cDiv).removeClass(d).addClass(c),b.p.gridstate="visible")}})},setFrozenColumns:function(){return this.each(function(){if(this.grid){var
a=this,b=a.p.colModel,c=0,d=b.length,e=-1,f=!1,g=$(a).jqGrid("getStyleUI",a.p.styleUI+".base","headerDiv",!0,"ui-jqgrid-hdiv"),h=$(a).jqGrid("getStyleUI",a.p.styleUI+".common","hover",!0);if(a.p.subGrid!==!0&&a.p.treeGrid!==!0&&a.p.cellEdit!==!0&&!a.p.sortable&&!a.p.scroll){for(a.p.rownumbers&&c++,a.p.multiselect&&c++;d>c&&b[c].frozen===!0;)f=!0,e=c,c++;if(e>=0&&f){var
i=a.p.caption?$(a.grid.cDiv).outerHeight():0,j=$(".ui-jqgrid-htable","#gview_"+$.jgrid.jqID(a.p.id)).height();a.p.toppager&&(i+=$(a.grid.topDiv).outerHeight()),a.p.toolbar[0]===!0&&"bottom"!==a.p.toolbar[1]&&(i+=$(a.grid.uDiv).outerHeight()),a.grid.fhDiv=$('<div style="position:absolute;'+("rtl"===a.p.direction?"right:0;":"left:0;")+"top:"+i+"px;height:"+j+'px;" class="frozen-div '+g+'"></div>'),a.grid.fbDiv=$('<div style="position:absolute;'+("rtl"===a.p.direction?"right:0;":"left:0;")+"top:"+(parseInt(i,10)+parseInt(j,10)+1)+'px;overflow-y:hidden" class="frozen-bdiv ui-jqgrid-bdiv"></div>'),$("#gview_"+$.jgrid.jqID(a.p.id)).append(a.grid.fhDiv);var
k=$(".ui-jqgrid-htable","#gview_"+$.jgrid.jqID(a.p.id)).clone(!0);if(a.p.groupHeader){$("tr.jqg-first-row-header, tr.jqg-third-row-header",k).each(function(){$("th:gt("+e+")",this).remove()});var
l,m,n=-1,o=-1;$("tr.jqg-second-row-header th",k).each(function(){return l=parseInt($(this).attr("colspan"),10),m=parseInt($(this).attr("rowspan"),10),m&&(n++,o++),l&&(n+=l,o++),n===e?(o=e,!1):void
0}),n!==e&&(o=e),$("tr.jqg-second-row-header",k).each(function(){$("th:gt("+o+")",this).remove()})}else
$("tr",k).each(function(){$("th:gt("+e+")",this).remove()});if($(k).width(1),$(a.grid.fhDiv).append(k).mousemove(function(b){return a.grid.resizing?(a.grid.dragMove(b),!1):void
0}),a.p.footerrow){var
p=$(".ui-jqgrid-bdiv","#gview_"+$.jgrid.jqID(a.p.id)).height();a.grid.fsDiv=$('<div style="position:absolute;left:0px;top:'+(parseInt(i,10)+parseInt(j,10)+parseInt(p,10)+1)+'px;" class="frozen-sdiv ui-jqgrid-sdiv"></div>'),$("#gview_"+$.jgrid.jqID(a.p.id)).append(a.grid.fsDiv);var
q=$(".ui-jqgrid-ftable","#gview_"+$.jgrid.jqID(a.p.id)).clone(!0);$("tr",q).each(function(){$("td:gt("+e+")",this).remove()}),$(q).width(1),$(a.grid.fsDiv).append(q)}$(a).bind("jqGridResizeStop.setFrozenColumns",function(b,c,d){var
e=$(".ui-jqgrid-htable",a.grid.fhDiv);$("th:eq("+d+")",e).width(c);var
f=$(".ui-jqgrid-btable",a.grid.fbDiv);if($("tr:first td:eq("+d+")",f).width(c),a.p.footerrow){var
g=$(".ui-jqgrid-ftable",a.grid.fsDiv);$("tr:first td:eq("+d+")",g).width(c)}}),$("#gview_"+$.jgrid.jqID(a.p.id)).append(a.grid.fbDiv),$(a.grid.fbDiv).bind("mousewheel DOMMouseScroll",function(b){var
c=$(a.grid.bDiv).scrollTop();b.originalEvent.wheelDelta>0||b.originalEvent.detail<0?$(a.grid.bDiv).scrollTop(c-25):$(a.grid.bDiv).scrollTop(c+25),b.preventDefault()}),a.p.hoverrows===!0&&$("#"+$.jgrid.jqID(a.p.id)).unbind("mouseover").unbind("mouseout"),$(a).bind("jqGridAfterGridComplete.setFrozenColumns",function(){$("#"+$.jgrid.jqID(a.p.id)+"_frozen").remove(),$(a.grid.fbDiv).height($(a.grid.bDiv).height()-16);var
b=$("#"+$.jgrid.jqID(a.p.id)).clone(!0);$("tr[role=row]",b).each(function(){$("td[role=gridcell]:gt("+e+")",this).remove()}),$(b).width(1).attr("id",a.p.id+"_frozen"),$(a.grid.fbDiv).append(b),a.p.hoverrows===!0&&($("tr.jqgrow",b).hover(function(){$(this).addClass(h),$("#"+$.jgrid.jqID(this.id),"#"+$.jgrid.jqID(a.p.id)).addClass(h)},function(){$(this).removeClass(h),$("#"+$.jgrid.jqID(this.id),"#"+$.jgrid.jqID(a.p.id)).removeClass(h)}),$("tr.jqgrow","#"+$.jgrid.jqID(a.p.id)).hover(function(){$(this).addClass(h),$("#"+$.jgrid.jqID(this.id),"#"+$.jgrid.jqID(a.p.id)+"_frozen").addClass(h)},function(){$(this).removeClass(h),$("#"+$.jgrid.jqID(this.id),"#"+$.jgrid.jqID(a.p.id)+"_frozen").removeClass(h)})),b=null}),a.grid.hDiv.loading||$(a).triggerHandler("jqGridAfterGridComplete"),a.p.frozenColumns=!0}}}})},destroyFrozenColumns:function(){return this.each(function(){if(this.grid&&this.p.frozenColumns===!0){var
a=this,b=$(a).jqGrid("getStyleUI",a.p.styleUI+".common","hover",!0);if($(a.grid.fhDiv).remove(),$(a.grid.fbDiv).remove(),a.grid.fhDiv=null,a.grid.fbDiv=null,a.p.footerrow&&($(a.grid.fsDiv).remove(),a.grid.fsDiv=null),$(this).unbind(".setFrozenColumns"),a.p.hoverrows===!0){var
c;$("#"+$.jgrid.jqID(a.p.id)).bind("mouseover",function(a){c=$(a.target).closest("tr.jqgrow"),"ui-subgrid"!==$(c).attr("class")&&$(c).addClass(b)}).bind("mouseout",function(a){c=$(a.target).closest("tr.jqgrow"),$(c).removeClass(b)})}this.p.frozenColumns=!1}})},resizeColumn:function(a,b){return this.each(function(){var
c,d,e,f=this.grid,g=this.p,h=g.colModel,i=h.length;if("string"==typeof
a){for(c=0;i>c;c++)if(h[c].name===a){a=c;break}}else
a=parseInt(a,10);if(b=parseInt(b,10),!("number"!=typeof
a||0>a||a>h.length-1||"number"!=typeof
b||b<g.minColWidth)){if(g.forceFit)for(g.nv=0,c=a+1;i>c;c++)if(h[c].hidden!==!0){g.nv=c-a;break}if(f.resizing={idx:a},d=b-f.headers[a].width,g.forceFit){if(e=f.headers[a+g.nv].width-d,e<g.minColWidth)return;f.headers[a+g.nv].newWidth=f.headers[a+g.nv].width-d}f.newWidth=g.tblwidth+d,f.headers[a].newWidth=b,f.dragEnd(!1)}})},getStyleUI:function(a,b,c,d){try{var
e="",f=a.split("."),g="";switch(c||(e="class=",g='"'),null==d&&(d=""),f.length){case
1:e+=g+d+" "+$.jgrid.styleUI[f[0]][b]+g;break;case
2:e+=g+d+" "+$.jgrid.styleUI[f[0]][f[1]][b]+g}}catch(h){e=""}return $.trim(e)},resizeGrid:function(a){return this.each(function(){var
b=this;void
0===a&&(a=500),setTimeout(function(){var
a=$(window).width(),c=$("#gbox_"+$.jgrid.jqID(b.p.id)).parent().width(),d=b.p.width;d=a-c>3?c:a,$("#"+$.jgrid.jqID(b.p.id)).jqGrid("setGridWidth",d)},a)})}})});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery","./grid.base"],a):a(jQuery)}(function(a){"use strict";a.fmatter={},a.extend(a.fmatter,{isBoolean:function(a){return"boolean"==typeof
a},isObject:function(b){return b&&("object"==typeof
b||a.isFunction(b))||!1},isString:function(a){return"string"==typeof
a},isNumber:function(a){return"number"==typeof
a&&isFinite(a)},isValue:function(a){return this.isObject(a)||this.isString(a)||this.isNumber(a)||this.isBoolean(a)},isEmpty:function(b){return!this.isString(b)&&this.isValue(b)?!1:this.isValue(b)?(b=a.trim(b).replace(/\&nbsp\;/gi,"").replace(/\&#160\;/gi,""),""===b):!0}}),a.fn.fmatter=function(b,c,d,e,f){var
g=c;d=a.extend({},a.jgrid.getRegional(this,"formatter"),d);try{g=a.fn.fmatter[b].call(this,c,d,e,f)}catch(h){}return g},a.fmatter.util={NumberFormat:function(b,c){if(a.fmatter.isNumber(b)||(b*=1),a.fmatter.isNumber(b)){var
d,e=0>b,f=String(b),g=c.decimalSeparator||".";if(a.fmatter.isNumber(c.decimalPlaces)){var
h=c.decimalPlaces,i=Math.pow(10,h);if(f=String(Math.round(b*i)/i),d=f.lastIndexOf("."),h>0)for(0>d?(f+=g,d=f.length-1):"."!==g&&(f=f.replace(".",g));f.length-1-d<h;)f+="0"}if(c.thousandsSeparator){var
j=c.thousandsSeparator;d=f.lastIndexOf(g),d=d>-1?d:f.length;var
k,l=f.substring(d),m=-1;for(k=d;k>0;k--)m++,m%3===0&&k!==d&&(!e||k>1)&&(l=j+l),l=f.charAt(k-1)+l;f=l}return f=c.prefix?c.prefix+f:f,f=c.suffix?f+c.suffix:f}return b}},a.fn.fmatter.defaultFormat=function(b,c){return a.fmatter.isValue(b)&&""!==b?b:c.defaultValue||"&#160;"},a.fn.fmatter.email=function(b,c){return a.fmatter.isEmpty(b)?a.fn.fmatter.defaultFormat(b,c):'<a href="mailto:'+b+'">'+b+"</a>"},a.fn.fmatter.checkbox=function(b,c){var
d,e=a.extend({},c.checkbox);void
0!==c.colModel&&void
0!==c.colModel.formatoptions&&(e=a.extend({},e,c.colModel.formatoptions)),d=e.disabled===!0?'disabled="disabled"':"",(a.fmatter.isEmpty(b)||void
0===b)&&(b=a.fn.fmatter.defaultFormat(b,e)),b=String(b),b=(b+"").toLowerCase();var
f=b.search(/(false|f|0|no|n|off|undefined)/i)<0?" checked='checked' ":"";return'<input type="checkbox" '+f+' value="'+b+'" offval="no" '+d+"/>"},a.fn.fmatter.link=function(b,c){var
d={target:c.target},e="";return void
0!==c.colModel&&void
0!==c.colModel.formatoptions&&(d=a.extend({},d,c.colModel.formatoptions)),d.target&&(e="target="+d.target),a.fmatter.isEmpty(b)?a.fn.fmatter.defaultFormat(b,c):"<a "+e+' href="'+b+'">'+b+"</a>"},a.fn.fmatter.showlink=function(b,c){var
d,e={baseLinkUrl:c.baseLinkUrl,showAction:c.showAction,addParam:c.addParam||"",target:c.target,idName:c.idName},f="";return void
0!==c.colModel&&void
0!==c.colModel.formatoptions&&(e=a.extend({},e,c.colModel.formatoptions)),e.target&&(f="target="+e.target),d=e.baseLinkUrl+e.showAction+"?"+e.idName+"="+c.rowId+e.addParam,a.fmatter.isString(b)||a.fmatter.isNumber(b)?"<a "+f+' href="'+d+'">'+b+"</a>":a.fn.fmatter.defaultFormat(b,c)},a.fn.fmatter.integer=function(b,c){var
d=a.extend({},c.integer);return void
0!==c.colModel&&void
0!==c.colModel.formatoptions&&(d=a.extend({},d,c.colModel.formatoptions)),a.fmatter.isEmpty(b)?d.defaultValue:a.fmatter.util.NumberFormat(b,d)},a.fn.fmatter.number=function(b,c){var
d=a.extend({},c.number);return void
0!==c.colModel&&void
0!==c.colModel.formatoptions&&(d=a.extend({},d,c.colModel.formatoptions)),a.fmatter.isEmpty(b)?d.defaultValue:a.fmatter.util.NumberFormat(b,d)},a.fn.fmatter.currency=function(b,c){var
d=a.extend({},c.currency);return void
0!==c.colModel&&void
0!==c.colModel.formatoptions&&(d=a.extend({},d,c.colModel.formatoptions)),a.fmatter.isEmpty(b)?d.defaultValue:a.fmatter.util.NumberFormat(b,d)},a.fn.fmatter.date=function(b,c,d,e){var
f=a.extend({},c.date);return void
0!==c.colModel&&void
0!==c.colModel.formatoptions&&(f=a.extend({},f,c.colModel.formatoptions)),f.reformatAfterEdit||"edit"!==e?a.fmatter.isEmpty(b)?a.fn.fmatter.defaultFormat(b,c):a.jgrid.parseDate.call(this,f.srcformat,b,f.newformat,f):a.fn.fmatter.defaultFormat(b,c)},a.fn.fmatter.select=function(b,c){b=String(b);var
d,e,f=!1,g=[];if(void
0!==c.colModel.formatoptions?(f=c.colModel.formatoptions.value,d=void
0===c.colModel.formatoptions.separator?":":c.colModel.formatoptions.separator,e=void
0===c.colModel.formatoptions.delimiter?";":c.colModel.formatoptions.delimiter):void
0!==c.colModel.editoptions&&(f=c.colModel.editoptions.value,d=void
0===c.colModel.editoptions.separator?":":c.colModel.editoptions.separator,e=void
0===c.colModel.editoptions.delimiter?";":c.colModel.editoptions.delimiter),f){var
h,i=(null!=c.colModel.editoptions&&c.colModel.editoptions.multiple===!0)==!0?!0:!1,j=[];if(i&&(j=b.split(","),j=a.map(j,function(b){return a.trim(b)})),a.fmatter.isString(f)){var
k,l=f.split(e),m=0;for(k=0;k<l.length;k++)if(h=l[k].split(d),h.length>2&&(h[1]=a.map(h,function(a,b){return b>0?a:void
0}).join(d)),i)a.inArray(h[0],j)>-1&&(g[m]=h[1],m++);else
if(a.trim(h[0])===a.trim(b)){g[0]=h[1];break}}else
a.fmatter.isObject(f)&&(i?g=a.map(j,function(a){return f[a]}):g[0]=f[b]||"")}return b=g.join(", "),""===b?a.fn.fmatter.defaultFormat(b,c):b},a.fn.fmatter.rowactions=function(b){var
c=a(this).closest("tr.jqgrow"),d=c.attr("id"),e=a(this).closest("table.ui-jqgrid-btable").attr("id").replace(/_frozen([^_]*)$/,"$1"),f=a("#"+e),g=f[0],h=g.p,i=h.colModel[a.jgrid.getCellIndex(this)],j=i.frozen?a("tr#"+d+" td:eq("+a.jgrid.getCellIndex(this)+") > div",f):a(this).parent(),k={extraparam:{}},l=function(b,c){a.isFunction(k.afterSave)&&k.afterSave.call(g,b,c),j.find("div.ui-inline-edit,div.ui-inline-del").show(),j.find("div.ui-inline-save,div.ui-inline-cancel").hide()},m=function(b){a.isFunction(k.afterRestore)&&k.afterRestore.call(g,b),j.find("div.ui-inline-edit,div.ui-inline-del").show(),j.find("div.ui-inline-save,div.ui-inline-cancel").hide()};void
0!==i.formatoptions&&(k=a.extend(k,i.formatoptions)),void
0!==h.editOptions&&(k.editOptions=h.editOptions),void
0!==h.delOptions&&(k.delOptions=h.delOptions),c.hasClass("jqgrid-new-row")&&(k.extraparam[h.prmNames.oper]=h.prmNames.addoper);var
n={keys:k.keys,oneditfunc:k.onEdit,successfunc:k.onSuccess,url:k.url,extraparam:k.extraparam,aftersavefunc:l,errorfunc:k.onError,afterrestorefunc:m,restoreAfterError:k.restoreAfterError,mtype:k.mtype};switch(b){case"edit":f.jqGrid("editRow",d,n),j.find("div.ui-inline-edit,div.ui-inline-del").hide(),j.find("div.ui-inline-save,div.ui-inline-cancel").show(),f.triggerHandler("jqGridAfterGridComplete");break;case"save":f.jqGrid("saveRow",d,n)&&(j.find("div.ui-inline-edit,div.ui-inline-del").show(),j.find("div.ui-inline-save,div.ui-inline-cancel").hide(),f.triggerHandler("jqGridAfterGridComplete"));break;case"cancel":f.jqGrid("restoreRow",d,m),j.find("div.ui-inline-edit,div.ui-inline-del").show(),j.find("div.ui-inline-save,div.ui-inline-cancel").hide(),f.triggerHandler("jqGridAfterGridComplete");break;case"del":f.jqGrid("delGridRow",d,k.delOptions);break;case"formedit":f.jqGrid("setSelection",d),f.jqGrid("editGridRow",d,k.editOptions)}},a.fn.fmatter.actions=function(b,c){var
d,e={keys:!1,editbutton:!0,delbutton:!0,editformbutton:!1},f=c.rowId,g="",h=a.jgrid.getRegional(this,"nav"),i=a.jgrid.styleUI[c.styleUI||"jQueryUI"].fmatter,j=a.jgrid.styleUI[c.styleUI||"jQueryUI"].common;if(void
0!==c.colModel.formatoptions&&(e=a.extend(e,c.colModel.formatoptions)),void
0===f||a.fmatter.isEmpty(f))return"";var
k="onmouseover=jQuery(this).addClass('"+j.hover+"'); onmouseout=jQuery(this).removeClass('"+j.hover+"');  ";return e.editformbutton?(d="id='jEditButton_"+f+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'formedit'); "+k,g+="<div title='"+h.edittitle+"' style='float:left;cursor:pointer;' class='ui-pg-div ui-inline-edit' "+d+"><span class='"+j.icon_base+" "+i.icon_edit+"'></span></div>"):e.editbutton&&(d="id='jEditButton_"+f+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'edit'); "+k,g+="<div title='"+h.edittitle+"' style='float:left;cursor:pointer;' class='ui-pg-div ui-inline-edit' "+d+"><span class='"+j.icon_base+" "+i.icon_edit+"'></span></div>"),e.delbutton&&(d="id='jDeleteButton_"+f+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'del'); "+k,g+="<div title='"+h.deltitle+"' style='float:left;' class='ui-pg-div ui-inline-del' "+d+"><span class='"+j.icon_base+" "+i.icon_del+"'></span></div>"),d="id='jSaveButton_"+f+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'save'); "+k,g+="<div title='"+h.savetitle+"' style='float:left;display:none' class='ui-pg-div ui-inline-save' "+d+"><span class='"+j.icon_base+" "+i.icon_save+"'></span></div>",d="id='jCancelButton_"+f+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'cancel'); "+k,g+="<div title='"+h.canceltitle+"' style='float:left;display:none;' class='ui-pg-div ui-inline-cancel' "+d+"><span class='"+j.icon_base+" "+i.icon_cancel+"'></span></div>","<div style='margin-left:8px;'>"+g+"</div>"},a.unformat=function(b,c,d,e){var
f,g,h=c.colModel.formatter,i=c.colModel.formatoptions||{},j=/([\.\*\_\'\(\)\{\}\+\?\\])/g,k=c.colModel.unformat||a.fn.fmatter[h]&&a.fn.fmatter[h].unformat;if(void
0!==k&&a.isFunction(k))f=k.call(this,a(b).text(),c,b);else
if(void
0!==h&&a.fmatter.isString(h)){var
l,m=a.jgrid.getRegional(this,"formatter")||{};switch(h){case"integer":i=a.extend({},m.integer,i),g=i.thousandsSeparator.replace(j,"\\$1"),l=new
RegExp(g,"g"),f=a(b).text().replace(l,"");break;case"number":i=a.extend({},m.number,i),g=i.thousandsSeparator.replace(j,"\\$1"),l=new
RegExp(g,"g"),f=a(b).text().replace(l,"").replace(i.decimalSeparator,".");break;case"currency":i=a.extend({},m.currency,i),g=i.thousandsSeparator.replace(j,"\\$1"),l=new
RegExp(g,"g"),f=a(b).text(),i.prefix&&i.prefix.length&&(f=f.substr(i.prefix.length)),i.suffix&&i.suffix.length&&(f=f.substr(0,f.length-i.suffix.length)),f=f.replace(l,"").replace(i.decimalSeparator,".");break;case"checkbox":var
n=c.colModel.editoptions?c.colModel.editoptions.value.split(":"):["Yes","No"];f=a("input",b).is(":checked")?n[0]:n[1];break;case"select":f=a.unformat.select(b,c,d,e);break;case"actions":return"";default:f=a(b).text()}}return void
0!==f?f:e===!0?a(b).text():a.jgrid.htmlDecode(a(b).html())},a.unformat.select=function(b,c,d,e){var
f=[],g=a(b).text();if(e===!0)return g;var
h=a.extend({},void
0!==c.colModel.formatoptions?c.colModel.formatoptions:c.colModel.editoptions),i=void
0===h.separator?":":h.separator,j=void
0===h.delimiter?";":h.delimiter;if(h.value){var
k,l=h.value,m=h.multiple===!0?!0:!1,n=[];if(m&&(n=g.split(","),n=a.map(n,function(b){return a.trim(b)})),a.fmatter.isString(l)){var
o,p=l.split(j),q=0;for(o=0;o<p.length;o++)if(k=p[o].split(i),k.length>2&&(k[1]=a.map(k,function(a,b){return b>0?a:void
0}).join(i)),m)a.inArray(a.trim(k[1]),n)>-1&&(f[q]=k[0],q++);else
if(a.trim(k[1])===a.trim(g)){f[0]=k[0];break}}else(a.fmatter.isObject(l)||a.isArray(l))&&(m||(n[0]=g),f=a.map(n,function(b){var
c;return a.each(l,function(a,d){return d===b?(c=a,!1):void
0}),void
0!==c?c:void
0}));return f.join(", ")}return g||""},a.unformat.date=function(b,c){var
d=a.jgrid.getRegional(this,"formatter.date")||{};return void
0!==c.formatoptions&&(d=a.extend({},d,c.formatoptions)),a.fmatter.isEmpty(b)?a.fn.fmatter.defaultFormat(b,c):a.jgrid.parseDate.call(this,d.newformat,b,d.srcformat,d)}});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery","./grid.base","./jqModal","./jqDnR"],a):a(jQuery)}(function(a){"use strict";a.extend(a.jgrid,{showModal:function(a){a.w.show()},closeModal:function(a){a.w.hide().attr("aria-hidden","true"),a.o&&a.o.remove()},hideModal:function(b,c){c=a.extend({jqm:!0,gb:"",removemodal:!1,formprop:!1,form:""},c||{});var
d=c.gb&&"string"==typeof
c.gb&&"#gbox_"===c.gb.substr(0,6)?a("#"+c.gb.substr(6))[0]:!1;if(c.onClose){var
e=d?c.onClose.call(d,b):c.onClose(b);if("boolean"==typeof
e&&!e)return}if(c.formprop&&d&&c.form){var
f=a(b)[0].style.height,g=a(b)[0].style.width;f.indexOf("px")>-1&&(f=parseFloat(f)),g.indexOf("px")>-1&&(g=parseFloat(g));var
h,i;"edit"===c.form?(h="#"+a.jgrid.jqID("FrmGrid_"+c.gb.substr(6)),i="formProp"):"view"===c.form&&(h="#"+a.jgrid.jqID("ViewGrid_"+c.gb.substr(6)),i="viewProp"),a(d).data(i,{top:parseFloat(a(b).css("top")),left:parseFloat(a(b).css("left")),width:g,height:f,dataheight:a(h).height(),datawidth:a(h).width()})}if(a.fn.jqm&&c.jqm===!0)a(b).attr("aria-hidden","true").jqmHide();else{if(""!==c.gb)try{a(".jqgrid-overlay:first",c.gb).hide()}catch(j){}a(b).hide().attr("aria-hidden","true")}c.removemodal&&a(b).remove()},findPos:function(a){var
b=0,c=0;if(a.offsetParent)do
b+=a.offsetLeft,c+=a.offsetTop;while(a=a.offsetParent);return[b,c]},createModal:function(b,c,d,e,f,g,h){d=a.extend(!0,{},a.jgrid.jqModal||{},d);var
i=this,j="rtl"===a(d.gbox).attr("dir")?!0:!1,k=a.jgrid.styleUI[d.styleUI||"jQueryUI"].modal,l=a.jgrid.styleUI[d.styleUI||"jQueryUI"].common,m=document.createElement("div");h=a.extend({},h||{}),m.className="ui-jqdialog "+k.modal,m.id=b.themodal;var
n=document.createElement("div");n.className="ui-jqdialog-titlebar "+k.header,n.id=b.modalhead,a(n).append("<span class='ui-jqdialog-title'>"+d.caption+"</span>");var
o=a("<a class='ui-jqdialog-titlebar-close "+l.cornerall+"'></a>").hover(function(){o.addClass(l.hover)},function(){o.removeClass(l.hover)}).append("<span class='"+l.icon_base+" "+k.icon_close+"'></span>");a(n).append(o),j?(m.dir="rtl",a(".ui-jqdialog-title",n).css("float","right"),a(".ui-jqdialog-titlebar-close",n).css("left","0.3em")):(m.dir="ltr",a(".ui-jqdialog-title",n).css("float","left"),a(".ui-jqdialog-titlebar-close",n).css("right","0.3em"));var
p=document.createElement("div");a(p).addClass("ui-jqdialog-content "+k.content).attr("id",b.modalcontent),a(p).append(c),m.appendChild(p),a(m).prepend(n),g===!0?a("body").append(m):"string"==typeof
g?a(g).append(m):a(m).insertBefore(e),a(m).css(h),void
0===d.jqModal&&(d.jqModal=!0);var
q={};if(a.fn.jqm&&d.jqModal===!0){if(0===d.left&&0===d.top&&d.overlay){var
r=[];r=a.jgrid.findPos(f),d.left=r[0]+4,d.top=r[1]+4}q.top=d.top+"px",q.left=d.left}else(0!==d.left||0!==d.top)&&(q.left=d.left,q.top=d.top+"px");if(a("a.ui-jqdialog-titlebar-close",n).click(function(){var
c=a("#"+a.jgrid.jqID(b.themodal)).data("onClose")||d.onClose,e=a("#"+a.jgrid.jqID(b.themodal)).data("gbox")||d.gbox;return i.hideModal("#"+a.jgrid.jqID(b.themodal),{gb:e,jqm:d.jqModal,onClose:c,removemodal:d.removemodal||!1,formprop:!d.recreateForm||!1,form:d.form||""}),!1}),0!==d.width&&d.width||(d.width=300),0!==d.height&&d.height||(d.height=200),!d.zIndex){var
s=a(e).parents("*[role=dialog]").filter(":first").css("z-index");s?d.zIndex=parseInt(s,10)+2:d.zIndex=950}var
t=0;if(j&&q.left&&!g&&(t=a(d.gbox).width()-(isNaN(d.width)?0:parseInt(d.width,10))-8,q.left=parseInt(q.left,10)+parseInt(t,10)),q.left&&(q.left+="px"),a(m).css(a.extend({width:isNaN(d.width)?"auto":d.width+"px",height:isNaN(d.height)?"auto":d.height+"px",zIndex:d.zIndex,overflow:"hidden"},q)).attr({tabIndex:"-1",role:"dialog","aria-labelledby":b.modalhead,"aria-hidden":"true"}),void
0===d.drag&&(d.drag=!0),void
0===d.resize&&(d.resize=!0),d.drag)if(a(n).css("cursor","move"),a.fn.tinyDraggable)a(m).tinyDraggable({handle:"#"+a.jgrid.jqID(n.id)});else
try{a(m).draggable({handle:a("#"+a.jgrid.jqID(n.id))})}catch(u){}if(d.resize)if(a.fn.jqResize)a(m).append("<div class='jqResize "+k.resizable+" "+l.icon_base+" "+k.icon_resizable+"'></div>"),a("#"+a.jgrid.jqID(b.themodal)).jqResize(".jqResize",b.scrollelm?"#"+a.jgrid.jqID(b.scrollelm):!1);else
try{a(m).resizable({handles:"se, sw",alsoResize:b.scrollelm?"#"+a.jgrid.jqID(b.scrollelm):!1})}catch(v){}d.closeOnEscape===!0&&a(m).keydown(function(c){if(27===c.which){var
e=a("#"+a.jgrid.jqID(b.themodal)).data("onClose")||d.onClose;i.hideModal("#"+a.jgrid.jqID(b.themodal),{gb:d.gbox,jqm:d.jqModal,onClose:e,removemodal:d.removemodal||!1,formprop:!d.recreateForm||!1,form:d.form||""})}})},viewModal:function(b,c){if(c=a.extend({toTop:!0,overlay:10,modal:!1,overlayClass:"ui-widget-overlay",onShow:a.jgrid.showModal,onHide:a.jgrid.closeModal,gbox:"",jqm:!0,jqM:!0},c||{}),void
0===c.focusField&&(c.focusField=0),"number"==typeof
c.focusField&&c.focusField>=0?c.focusField=parseInt(c.focusField,10):"boolean"!=typeof
c.focusField||c.focusField?c.focusField=0:c.focusField=!1,a.fn.jqm&&c.jqm===!0)c.jqM?a(b).attr("aria-hidden","false").jqm(c).jqmShow():a(b).attr("aria-hidden","false").jqmShow();else
if(""!==c.gbox&&(a(".jqgrid-overlay:first",c.gbox).show(),a(b).data("gbox",c.gbox)),a(b).show().attr("aria-hidden","false"),c.focusField>=0)try{a(":input:visible",b)[parseInt(c.focusField,10)].focus()}catch(d){}},info_dialog:function(b,c,d,e){var
f={width:290,height:"auto",dataheight:"auto",drag:!0,resize:!1,left:250,top:170,zIndex:1e3,jqModal:!0,modal:!1,closeOnEscape:!0,align:"center",buttonalign:"center",buttons:[]};a.extend(!0,f,a.jgrid.jqModal||{},{caption:"<b>"+b+"</b>"},e||{});var
g=f.jqModal,h=this,i=a.jgrid.styleUI[f.styleUI||"jQueryUI"].modal,j=a.jgrid.styleUI[f.styleUI||"jQueryUI"].common;a.fn.jqm&&!g&&(g=!1);var
k,l="";if(f.buttons.length>0)for(k=0;k<f.buttons.length;k++)void
0===f.buttons[k].id&&(f.buttons[k].id="info_button_"+k),l+="<a id='"+f.buttons[k].id+"' class='fm-button "+j.button+"'>"+f.buttons[k].text+"</a>";var
m=isNaN(f.dataheight)?f.dataheight:f.dataheight+"px",n="text-align:"+f.align+";",o="<div id='info_id'>";o+="<div id='infocnt' style='margin:0px;padding-bottom:1em;width:100%;overflow:auto;position:relative;height:"+m+";"+n+"'>"+c+"</div>",o+=d?"<div class='"+i.header+"' style='text-align:"+f.buttonalign+";padding-bottom:0.8em;padding-top:0.5em;background-image: none;border-width: 1px 0 0 0;'><a id='closedialog' class='fm-button "+j.button+"'>"+d+"</a>"+l+"</div>":""!==l?"<div class='"+i.header+"' style='text-align:"+f.buttonalign+";padding-bottom:0.8em;padding-top:0.5em;background-image: none;border-width: 1px 0 0 0;'>"+l+"</div>":"",o+="</div>";try{"false"===a("#info_dialog").attr("aria-hidden")&&a.jgrid.hideModal("#info_dialog",{jqm:g}),a("#info_dialog").remove()}catch(p){}a.jgrid.createModal({themodal:"info_dialog",modalhead:"info_head",modalcontent:"info_content",scrollelm:"infocnt"},o,f,"","",!0),l&&a.each(f.buttons,function(b){a("#"+a.jgrid.jqID(this.id),"#info_id").bind("click",function(){return f.buttons[b].onClick.call(a("#info_dialog")),!1})}),a("#closedialog","#info_id").click(function(){return h.hideModal("#info_dialog",{jqm:g,onClose:a("#info_dialog").data("onClose")||f.onClose,gb:a("#info_dialog").data("gbox")||f.gbox}),!1}),a(".fm-button","#info_dialog").hover(function(){a(this).addClass(j.hover)},function(){a(this).removeClass(j.hover)}),a.isFunction(f.beforeOpen)&&f.beforeOpen(),a.jgrid.viewModal("#info_dialog",{onHide:function(a){a.w.hide().remove(),a.o&&a.o.remove()},modal:f.modal,jqm:g}),a.isFunction(f.afterOpen)&&f.afterOpen();try{a("#info_dialog").focus()}catch(q){}},bindEv:function(b,c){var
d=this;a.isFunction(c.dataInit)&&c.dataInit.call(d,b,c),c.dataEvents&&a.each(c.dataEvents,function(){void
0!==this.data?a(b).bind(this.type,this.data,this.fn):a(b).bind(this.type,this.fn)})},createEl:function(b,c,d,e,f){function
g(b,c,d){var
e=["dataInit","dataEvents","dataUrl","buildSelect","sopt","searchhidden","defaultValue","attr","custom_element","custom_value","oper"];void
0!==d&&a.isArray(d)&&a.merge(e,d),a.each(c,function(c,d){-1===a.inArray(c,e)&&a(b).attr(c,d)}),c.hasOwnProperty("id")||a(b).attr("id",a.jgrid.randId())}var
h="",i=this;switch(b){case"textarea":h=document.createElement("textarea"),e?c.cols||a(h).css({width:"98%"}):c.cols||(c.cols=20),c.rows||(c.rows=2),("&nbsp;"===d||"&#160;"===d||1===d.length&&160===d.charCodeAt(0))&&(d=""),h.value=d,g(h,c),a(h).attr({role:"textbox",multiline:"true"});break;case"checkbox":if(h=document.createElement("input"),h.type="checkbox",c.value){var
j=c.value.split(":");d===j[0]&&(h.checked=!0,h.defaultChecked=!0),h.value=j[0],a(h).attr("offval",j[1])}else{var
k=(d+"").toLowerCase();k.search(/(false|f|0|no|n|off|undefined)/i)<0&&""!==k?(h.checked=!0,h.defaultChecked=!0,h.value=d):h.value="on",a(h).attr("offval","off")}g(h,c,["value"]),a(h).attr("role","checkbox");break;case"select":h=document.createElement("select"),h.setAttribute("role","select");var
l,m=[];if(c.multiple===!0?(l=!0,h.multiple="multiple",a(h).attr("aria-multiselectable","true")):l=!1,null!=c.dataUrl){var
n=null,o=c.postData||f.postData;try{n=c.rowId}catch(p){}i.p&&i.p.idPrefix&&(n=a.jgrid.stripPref(i.p.idPrefix,n)),a.ajax(a.extend({url:a.isFunction(c.dataUrl)?c.dataUrl.call(i,n,d,String(c.name)):c.dataUrl,type:"GET",dataType:"html",data:a.isFunction(o)?o.call(i,n,d,String(c.name)):o,context:{elem:h,options:c,vl:d},success:function(b){var
c,d=[],e=this.elem,f=this.vl,h=a.extend({},this.options),j=h.multiple===!0,k=h.cacheUrlData===!0,l="",m=a.isFunction(h.buildSelect)?h.buildSelect.call(i,b):b;"string"==typeof
m&&(m=a(a.trim(m)).html()),m&&(a(e).append(m),g(e,h,o?["postData"]:void
0),void
0===h.size&&(h.size=j?3:1),j?(d=f.split(","),d=a.map(d,function(b){return a.trim(b)})):d[0]=a.trim(f),setTimeout(function(){if(a("option",e).each(function(b){c=a(this).text(),f=a(this).val()||c,k&&(l+=(0!==b?";":"")+f+":"+c),0===b&&e.multiple&&(this.selected=!1),a(this).attr("role","option"),(a.inArray(a.trim(c),d)>-1||a.inArray(a.trim(f),d)>-1)&&(this.selected="selected")}),k)if("edit"===h.oper)a(i).jqGrid("setColProp",h.name,{editoptions:{buildSelect:null,dataUrl:null,value:l}});else
if("search"===h.oper)a(i).jqGrid("setColProp",h.name,{searchoptions:{dataUrl:null,value:l}});else
if("filter"===h.oper&&a("#fbox_"+i.p.id)[0].p){var
b,g=a("#fbox_"+i.p.id)[0].p.columns;a.each(g,function(a){return b=this.index||this.name,h.name===b?(this.searchoptions.dataUrl=null,this.searchoptions.value=l,!1):void
0})}a(i).triggerHandler("jqGridAddEditAfterSelectUrlComplete",[e])},0))}},f||{}))}else
if(c.value){var
q;void
0===c.size&&(c.size=l?3:1),l&&(m=d.split(","),m=a.map(m,function(b){return a.trim(b)})),"function"==typeof
c.value&&(c.value=c.value());var
r,s,t,u,v,w,x=void
0===c.separator?":":c.separator,y=void
0===c.delimiter?";":c.delimiter;if("string"==typeof
c.value)for(r=c.value.split(y),q=0;q<r.length;q++)s=r[q].split(x),s.length>2&&(s[1]=a.map(s,function(a,b){return b>0?a:void
0}).join(x)),t=document.createElement("option"),t.setAttribute("role","option"),t.value=s[0],t.innerHTML=s[1],h.appendChild(t),l||a.trim(s[0])!==a.trim(d)&&a.trim(s[1])!==a.trim(d)||(t.selected="selected"),l&&(a.inArray(a.trim(s[1]),m)>-1||a.inArray(a.trim(s[0]),m)>-1)&&(t.selected="selected");else
if("[object Array]"===Object.prototype.toString.call(c.value))for(u=c.value,q=0;q<u.length;q++)2===u[q].length&&(v=u[q][0],w=u[q][1],t=document.createElement("option"),t.setAttribute("role","option"),t.value=v,t.innerHTML=w,h.appendChild(t),l||a.trim(v)!==a.trim(d)&&a.trim(w)!==a.trim(d)||(t.selected="selected"),l&&(a.inArray(a.trim(w),m)>-1||a.inArray(a.trim(v),m)>-1)&&(t.selected="selected"));else
if("object"==typeof
c.value){u=c.value;for(v
in
u)u.hasOwnProperty(v)&&(t=document.createElement("option"),t.setAttribute("role","option"),t.value=v,t.innerHTML=u[v],h.appendChild(t),l||a.trim(v)!==a.trim(d)&&a.trim(u[v])!==a.trim(d)||(t.selected="selected"),l&&(a.inArray(a.trim(u[v]),m)>-1||a.inArray(a.trim(v),m)>-1)&&(t.selected="selected"))}g(h,c,["value"])}break;case"image":case"file":h=document.createElement("input"),h.type=b,g(h,c);break;case"custom":h=document.createElement("span");try{if(!a.isFunction(c.custom_element))throw"e1";var
z=c.custom_element.call(i,d,c);if(!z)throw"e2";z=a(z).addClass("customelement").attr({id:c.id,name:c.name}),a(h).empty().append(z)}catch(p){var
A=a.jgrid.getRegional(i,"errors"),B=a.jgrid.getRegional(i,"edit");"e1"===p?a.jgrid.info_dialog(A.errcap,"function 'custom_element' "+B.msg.nodefined,B.bClose,{styleUI:i.p.styleUI}):"e2"===p?a.jgrid.info_dialog(A.errcap,"function 'custom_element' "+B.msg.novalue,B.bClose,{styleUI:i.p.styleUI}):a.jgrid.info_dialog(A.errcap,"string"==typeof
p?p:p.message,B.bClose,{styleUI:i.p.styleUI})}break;default:var
C;C="button"===b?"button":"textbox",h=document.createElement("input"),h.type=b,h.value=d,g(h,c),"button"!==b&&(e?c.size||a(h).css({width:"96%"}):c.size||(c.size=20)),a(h).attr("role",C)}return h},checkDate:function(a,b){var
c,d=function(a){return a%4!==0||a%100===0&&a%400!==0?28:29},e={};if(a=a.toLowerCase(),c=-1!==a.indexOf("/")?"/":-1!==a.indexOf("-")?"-":-1!==a.indexOf(".")?".":"/",a=a.split(c),b=b.split(c),3!==b.length)return!1;var
f,g,h=-1,i=-1,j=-1;for(g=0;g<a.length;g++){var
k=isNaN(b[g])?0:parseInt(b[g],10);e[a[g]]=k,f=a[g],-1!==f.indexOf("y")&&(h=g),-1!==f.indexOf("m")&&(j=g),-1!==f.indexOf("d")&&(i=g)}f="y"===a[h]||"yyyy"===a[h]?4:"yy"===a[h]?2:-1;var
l,m=[0,31,29,31,30,31,30,31,31,30,31,30,31];return-1===h?!1:(l=e[a[h]].toString(),2===f&&1===l.length&&(f=1),l.length!==f||0===e[a[h]]&&"00"!==b[h]?!1:-1===j?!1:(l=e[a[j]].toString(),l.length<1||e[a[j]]<1||e[a[j]]>12?!1:-1===i?!1:(l=e[a[i]].toString(),l.length<1||e[a[i]]<1||e[a[i]]>31||2===e[a[j]]&&e[a[i]]>d(e[a[h]])||e[a[i]]>m[e[a[j]]]?!1:!0)))},isEmpty:function(a){return a.match(/^\s+$/)||""===a?!0:!1},checkTime:function(b){var
c,d=/^(\d{1,2}):(\d{2})([apAP][Mm])?$/;if(!a.jgrid.isEmpty(b)){if(c=b.match(d),!c)return!1;if(c[3]){if(c[1]<1||c[1]>12)return!1}else
if(c[1]>23)return!1;if(c[2]>59)return!1}return!0},checkValues:function(b,c,d,e){var
f,g,h,i,j,k,l=this,m=l.p.colModel,n=a.jgrid.getRegional(this,"edit.msg");if(void
0===d)if("string"==typeof
c){for(g=0,j=m.length;j>g;g++)if(m[g].name===c){f=m[g].editrules,c=g,null!=m[g].formoptions&&(h=m[g].formoptions.label);break}}else
c>=0&&(f=m[c].editrules);else
f=d,h=void
0===e?"_":e;if(f){if(h||(h=null!=l.p.colNames?l.p.colNames[c]:m[c].label),f.required===!0&&a.jgrid.isEmpty(b))return[!1,h+": "+n.required,""];var
o=f.required===!1?!1:!0;if(f.number===!0&&(o!==!1||!a.jgrid.isEmpty(b))&&isNaN(b))return[!1,h+": "+n.number,""];if(void
0!==f.minValue&&!isNaN(f.minValue)&&parseFloat(b)<parseFloat(f.minValue))return[!1,h+": "+n.minValue+" "+f.minValue,""];if(void
0!==f.maxValue&&!isNaN(f.maxValue)&&parseFloat(b)>parseFloat(f.maxValue))return[!1,h+": "+n.maxValue+" "+f.maxValue,""];var
p;if(f.email===!0&&!(o===!1&&a.jgrid.isEmpty(b)||(p=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,p.test(b))))return[!1,h+": "+n.email,""];if(f.integer===!0&&(o!==!1||!a.jgrid.isEmpty(b))){if(isNaN(b))return[!1,h+": "+n.integer,""];if(b%1!==0||-1!==b.indexOf("."))return[!1,h+": "+n.integer,""]}if(f.date===!0&&!(o===!1&&a.jgrid.isEmpty(b)||(m[c].formatoptions&&m[c].formatoptions.newformat?(i=m[c].formatoptions.newformat,k=a.jgrid.getRegional(l,"formatter.date.masks"),k&&k.hasOwnProperty(i)&&(i=k[i])):i=m[c].datefmt||"Y-m-d",a.jgrid.checkDate(i,b))))return[!1,h+": "+n.date+" - "+i,""];if(f.time===!0&&!(o===!1&&a.jgrid.isEmpty(b)||a.jgrid.checkTime(b)))return[!1,h+": "+n.date+" - hh:mm (am/pm)",""];if(f.url===!0&&!(o===!1&&a.jgrid.isEmpty(b)||(p=/^(((https?)|(ftp)):\/\/([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*\/?)/i,p.test(b))))return[!1,h+": "+n.url,""];if(f.custom===!0&&(o!==!1||!a.jgrid.isEmpty(b))){if(a.isFunction(f.custom_func)){var
q=f.custom_func.call(l,b,h,c);return a.isArray(q)?q:[!1,n.customarray,""]}return[!1,n.customfcheck,""]}}return[!0,"",""]}})});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery","./grid.base","./grid.common"],a):a(jQuery)}(function(a){"use strict";var
b={};a.jgrid.extend({editGridRow:function(c,d){var
e=a.jgrid.getRegional(this[0],"edit"),f=this[0].p.styleUI,g=a.jgrid.styleUI[f].formedit,h=a.jgrid.styleUI[f].common;return d=a.extend(!0,{top:0,left:0,width:"500",datawidth:"auto",height:"auto",dataheight:"auto",modal:!1,overlay:30,drag:!0,resize:!0,url:null,mtype:"POST",clearAfterAdd:!0,closeAfterEdit:!1,reloadAfterSubmit:!0,onInitializeForm:null,beforeInitData:null,beforeShowForm:null,afterShowForm:null,beforeSubmit:null,afterSubmit:null,onclickSubmit:null,afterComplete:null,onclickPgButtons:null,afterclickPgButtons:null,editData:{},recreateForm:!1,jqModal:!0,closeOnEscape:!1,addedrow:"first",topinfo:"",bottominfo:"",saveicon:[],closeicon:[],savekey:[!1,13],navkeys:[!1,38,40],checkOnSubmit:!1,checkOnUpdate:!1,_savedData:{},processing:!1,onClose:null,ajaxEditOptions:{},serializeEditData:null,viewPagerButtons:!0,overlayClass:h.overlay,removemodal:!0,form:"edit",template:null,focusField:!0},e,d||{}),b[a(this)[0].p.id]=d,this.each(function(){function
e(){var
c,d={};a(A).find(".FormElement").each(function(){var
c=a(".customelement",this);if(c.length){var
e=c[0],f=a(e).attr("name");a.each(s.p.colModel,function(){if(this.name===f&&this.editoptions&&a.isFunction(this.editoptions.custom_value)){try{if(u[f]=this.editoptions.custom_value.call(s,a("#"+a.jgrid.jqID(f),A),"get"),void
0===u[f])throw"e1"}catch(c){"e1"===c?a.jgrid.info_dialog(G.errcap,"function 'custom_value' "+b[a(this)[0]].p.msg.novalue,b[a(this)[0]].p.bClose,{styleUI:b[a(this)[0]].p.styleUI}):a.jgrid.info_dialog(G.errcap,c.message,b[a(this)[0]].p.bClose,{styleUI:b[a(this)[0]].p.styleUI})}return!0}})}else{switch(a(this).get(0).type){case"checkbox":if(a(this).is(":checked"))u[this.name]=a(this).val();else{var
g=a(this).attr("offval");u[this.name]=g}break;case"select-one":u[this.name]=a("option:selected",this).val();break;case"select-multiple":u[this.name]=a(this).val(),u[this.name]?u[this.name]=u[this.name].join(","):u[this.name]="";var
h=[];a("option:selected",this).each(function(b,c){h[b]=a(c).text()});break;case"password":case"text":case"textarea":case"button":u[this.name]=a(this).val();break;case"radio":if(d.hasOwnProperty(this.name))return!0;d[this.name]=void
0===a(this).attr("offval")?"off":a(this).attr("offval")}s.p.autoencode&&(u[this.name]=a.jgrid.htmlEncode(u[this.name]))}});for(c
in
d)if(d.hasOwnProperty(c)){var
e=a('input[name="'+c+'"]:checked',A).val();u[c]=void
0!==e?e:d[c],s.p.autoencode&&(u[c]=a.jgrid.htmlEncode(u[c]))}return!0}function
f(c,d,e,f){var
h,i,j,k,l,m,n,o=0,p=[],q=!1,r="<td class='CaptionTD'>&#160;</td><td class='DataTD'>&#160;</td>",t="";for(n=1;f>=n;n++)t+=r;if("_empty"!==c&&(q=a(d).jqGrid("getInd",c)),a(d.p.colModel).each(function(n){if(h=this.name,i=this.editrules&&this.editrules.edithidden===!0?!1:this.hidden===!0?!0:!1,l=i?"style='display:none'":"","cb"!==h&&"subgrid"!==h&&this.editable===!0&&"rn"!==h){if(q===!1)k="";else
if(h===d.p.ExpandColumn&&d.p.treeGrid===!0)k=a("td[role='gridcell']:eq("+n+")",d.rows[q]).text();else{try{k=a.unformat.call(d,a("td[role='gridcell']:eq("+n+")",d.rows[q]),{rowId:c,colModel:this},n)}catch(r){k=this.edittype&&"textarea"===this.edittype?a("td[role='gridcell']:eq("+n+")",d.rows[q]).text():a("td[role='gridcell']:eq("+n+")",d.rows[q]).html()}(!k||"&nbsp;"===k||"&#160;"===k||1===k.length&&160===k.charCodeAt(0))&&(k="")}var
u=a.extend({},this.editoptions||{},{id:h,name:h,rowId:c,oper:"edit"}),v=a.extend({},{elmprefix:"",elmsuffix:"",rowabove:!1,rowcontent:""},this.formoptions||{}),w=parseInt(v.rowpos,10)||o+1,x=parseInt(2*(parseInt(v.colpos,10)||1),10);if("_empty"===c&&u.defaultValue&&(k=a.isFunction(u.defaultValue)?u.defaultValue.call(s):u.defaultValue),this.edittype||(this.edittype="text"),s.p.autoencode&&(k=a.jgrid.htmlDecode(k)),m=a.jgrid.createEl.call(s,this.edittype,u,k,!1,a.extend({},a.jgrid.ajaxOptions,d.p.ajaxSelectOptions||{})),"select"===this.edittype&&(k=a(m).val(),"select-multiple"===a(m).get(0).type&&k&&(k=k.join(","))),"checkbox"===this.edittype&&(k=a(m).is(":checked")?a(m).val():a(m).attr("offval")),(b[s.p.id].checkOnSubmit||b[s.p.id].checkOnUpdate)&&(b[s.p.id]._savedData[h]=k),a(m).addClass("FormElement"),a.inArray(this.edittype,["text","textarea","password","select"])>-1&&a(m).addClass(g.inputClass),F)a(L).find("#"+h).replaceWith(m);else{if(j=a(e).find("tr[rowpos="+w+"]"),v.rowabove){var
z=a("<tr><td class='contentinfo' colspan='"+2*f+"'>"+v.rowcontent+"</td></tr>");a(e).append(z),z[0].rp=w}0===j.length&&(j=a("<tr "+l+" rowpos='"+w+"'></tr>").addClass("FormData").attr("id","tr_"+h),a(j).append(t),a(e).append(j),j[0].rp=w),a("td:eq("+(x-2)+")",j[0]).html("<label for='"+h+"'>"+(void
0===v.label?d.p.colNames[n]:v.label)+"</label>"),a("td:eq("+(x-1)+")",j[0]).append(v.elmprefix).append(m).append(v.elmsuffix)}"custom"===this.edittype&&a.isFunction(u.custom_value)&&u.custom_value.call(s,a("#"+h,y),"set",k),a.jgrid.bindEv.call(s,m,u),p[o]=n,o++}}),o>0){var
u;F?(u="<div class='FormData' style='display:none'><input class='FormElement' id='id_g' type='text' name='"+d.p.id+"_id' value='"+c+"'/>",a(L).append(u)):(u=a("<tr class='FormData' style='display:none'><td class='CaptionTD'></td><td colspan='"+(2*f-1)+"' class='DataTD'><input class='FormElement' id='id_g' type='text' name='"+d.p.id+"_id' value='"+c+"'/></td></tr>"),u[0].rp=o+999,a(e).append(u)),(b[s.p.id].checkOnSubmit||b[s.p.id].checkOnUpdate)&&(b[s.p.id]._savedData[d.p.id+"_id"]=c)}return p}function
i(c,d,e){var
f,g,h,i,j,k,l=0;(b[s.p.id].checkOnSubmit||b[s.p.id].checkOnUpdate)&&(b[s.p.id]._savedData={},b[s.p.id]._savedData[d.p.id+"_id"]=c);var
m=d.p.colModel;if("_empty"===c)return a(m).each(function(){f=this.name,i=a.extend({},this.editoptions||{}),h=a("#"+a.jgrid.jqID(f),e),h&&h.length&&null!==h[0]&&(j="","custom"===this.edittype&&a.isFunction(i.custom_value)?i.custom_value.call(s,a("#"+f,e),"set",j):i.defaultValue?(j=a.isFunction(i.defaultValue)?i.defaultValue.call(s):i.defaultValue,"checkbox"===h[0].type?(k=j.toLowerCase(),k.search(/(false|f|0|no|n|off|undefined)/i)<0&&""!==k?(h[0].checked=!0,h[0].defaultChecked=!0,h[0].value=j):(h[0].checked=!1,h[0].defaultChecked=!1)):h.val(j)):"checkbox"===h[0].type?(h[0].checked=!1,h[0].defaultChecked=!1,j=a(h).attr("offval")):h[0].type&&"select"===h[0].type.substr(0,6)?h[0].selectedIndex=0:h.val(j),(b[s.p.id].checkOnSubmit===!0||b[s.p.id].checkOnUpdate)&&(b[s.p.id]._savedData[f]=j))}),void
a("#id_g",e).val(c);var
n=a(d).jqGrid("getInd",c,!0);n&&(a('td[role="gridcell"]',n).each(function(h){if(f=m[h].name,"cb"!==f&&"subgrid"!==f&&"rn"!==f&&m[h].editable===!0){if(f===d.p.ExpandColumn&&d.p.treeGrid===!0)g=a(this).text();else
try{g=a.unformat.call(d,a(this),{rowId:c,colModel:m[h]},h)}catch(i){g="textarea"===m[h].edittype?a(this).text():a(this).html()}switch(s.p.autoencode&&(g=a.jgrid.htmlDecode(g)),(b[s.p.id].checkOnSubmit===!0||b[s.p.id].checkOnUpdate)&&(b[s.p.id]._savedData[f]=g),f=a.jgrid.jqID(f),m[h].edittype){case"password":case"text":case"button":case"image":case"textarea":("&nbsp;"===g||"&#160;"===g||1===g.length&&160===g.charCodeAt(0))&&(g=""),a("#"+f,e).val(g);break;case"select":var
j=g.split(",");j=a.map(j,function(b){return a.trim(b)}),a("#"+f+" option",e).each(function(){m[h].editoptions.multiple||a.trim(g)!==a.trim(a(this).text())&&j[0]!==a.trim(a(this).text())&&j[0]!==a.trim(a(this).val())?m[h].editoptions.multiple&&(a.inArray(a.trim(a(this).text()),j)>-1||a.inArray(a.trim(a(this).val()),j)>-1)?this.selected=!0:this.selected=!1:this.selected=!0}),(b[s.p.id].checkOnSubmit===!0||b[s.p.id].checkOnUpdate)&&(g=a("#"+f,e).val(),m[h].editoptions.multiple&&(g=g.join(",")),b[s.p.id]._savedData[f]=g);break;case"checkbox":if(g=String(g),m[h].editoptions&&m[h].editoptions.value){var
k=m[h].editoptions.value.split(":");k[0]===g?a("#"+f,e)[s.p.useProp?"prop":"attr"]({checked:!0,defaultChecked:!0}):a("#"+f,e)[s.p.useProp?"prop":"attr"]({checked:!1,defaultChecked:!1})}else
g=g.toLowerCase(),g.search(/(false|f|0|no|n|off|undefined)/i)<0&&""!==g?(a("#"+f,e)[s.p.useProp?"prop":"attr"]("checked",!0),a("#"+f,e)[s.p.useProp?"prop":"attr"]("defaultChecked",!0)):(a("#"+f,e)[s.p.useProp?"prop":"attr"]("checked",!1),a("#"+f,e)[s.p.useProp?"prop":"attr"]("defaultChecked",!1));(b[s.p.id].checkOnSubmit===!0||b[s.p.id].checkOnUpdate)&&(g=a("#"+f,e).is(":checked")?a("#"+f,e).val():a("#"+f,e).attr("offval"),b[s.p.id]._savedData[f]=g);break;case"custom":try{if(!m[h].editoptions||!a.isFunction(m[h].editoptions.custom_value))throw"e1";m[h].editoptions.custom_value.call(s,a("#"+f,e),"set",g)}catch(n){"e1"===n?a.jgrid.info_dialog(G.errcap,"function 'custom_value' "+b[a(this)[0]].p.msg.nodefined,a.rp_ge[a(this)[0]].p.bClose,{styleUI:b[a(this)[0]].p.styleUI}):a.jgrid.info_dialog(G.errcap,n.message,a.rp_ge[a(this)[0]].p.bClose,{styleUI:b[a(this)[0]].p.styleUI})}}l++}}),l>0&&(a("#id_g",A).val(c),(b[s.p.id].checkOnSubmit===!0||b[s.p.id].checkOnUpdate)&&(b[s.p.id]._savedData[d.p.id+"_id"]=c)))}function
j(){a.each(s.p.colModel,function(a,b){b.editoptions&&b.editoptions.NullIfEmpty===!0&&u.hasOwnProperty(b.name)&&""===u[b.name]&&(u[b.name]="null")})}function
k(){var
c,e,f,g,k,l,m,n=[!0,"",""],o={},p=s.p.prmNames,q=a(s).triggerHandler("jqGridAddEditBeforeCheckValues",[a(y),w]);q&&"object"==typeof
q&&(u=q),a.isFunction(b[s.p.id].beforeCheckValues)&&(q=b[s.p.id].beforeCheckValues.call(s,u,a(y),w),q&&"object"==typeof
q&&(u=q));for(g
in
u)if(u.hasOwnProperty(g)&&(n=a.jgrid.checkValues.call(s,u[g],g),n[0]===!1))break;if(j(),n[0]&&(o=a(s).triggerHandler("jqGridAddEditClickSubmit",[b[s.p.id],u,w]),void
0===o&&a.isFunction(b[s.p.id].onclickSubmit)&&(o=b[s.p.id].onclickSubmit.call(s,b[s.p.id],u,w)||{}),n=a(s).triggerHandler("jqGridAddEditBeforeSubmit",[u,a(y),w]),void
0===n&&(n=[!0,"",""]),n[0]&&a.isFunction(b[s.p.id].beforeSubmit)&&(n=b[s.p.id].beforeSubmit.call(s,u,a(y),w))),n[0]&&!b[s.p.id].processing){if(b[s.p.id].processing=!0,a("#sData",A+"_2").addClass(h.active),m=b[s.p.id].url||a(s).jqGrid("getGridParam","editurl"),f=p.oper,e="clientArray"===m?s.p.keyName:p.id,u[f]="_empty"===a.trim(u[s.p.id+"_id"])?p.addoper:p.editoper,u[f]!==p.addoper?u[e]=u[s.p.id+"_id"]:void
0===u[e]&&(u[e]=u[s.p.id+"_id"]),delete
u[s.p.id+"_id"],u=a.extend(u,b[s.p.id].editData,o),s.p.treeGrid===!0){if(u[f]===p.addoper){k=a(s).jqGrid("getGridParam","selrow");var
r="adjacency"===s.p.treeGridModel?s.p.treeReader.parent_id_field:"parent_id";u[r]=k}for(l
in
s.p.treeReader)if(s.p.treeReader.hasOwnProperty(l)){var
t=s.p.treeReader[l];if(u.hasOwnProperty(t)){if(u[f]===p.addoper&&"parent_id_field"===l)continue;delete
u[t]}}}u[e]=a.jgrid.stripPref(s.p.idPrefix,u[e]);var
v=a.extend({url:m,type:b[s.p.id].mtype,data:a.isFunction(b[s.p.id].serializeEditData)?b[s.p.id].serializeEditData.call(s,u):u,complete:function(g,j){var
l;if(a("#sData",A+"_2").removeClass(h.active),u[e]=s.p.idPrefix+u[e],g.status>=300&&304!==g.status?(n[0]=!1,n[1]=a(s).triggerHandler("jqGridAddEditErrorTextFormat",[g,w]),a.isFunction(b[s.p.id].errorTextFormat)?n[1]=b[s.p.id].errorTextFormat.call(s,g,w):n[1]=j+" Status: '"+g.statusText+"'. Error code: "+g.status):(n=a(s).triggerHandler("jqGridAddEditAfterSubmit",[g,u,w]),void
0===n&&(n=[!0,"",""]),n[0]&&a.isFunction(b[s.p.id].afterSubmit)&&(n=b[s.p.id].afterSubmit.call(s,g,u,w))),n[0]===!1)a(".FormError",y).html(n[1]),a(".FormError",y).show();else
if(s.p.autoencode&&a.each(u,function(b,c){u[b]=a.jgrid.htmlDecode(c)}),u[f]===p.addoper?(n[2]||(n[2]=a.jgrid.randId()),null==u[e]||"_empty"===u[e]?u[e]=n[2]:n[2]=u[e],b[s.p.id].reloadAfterSubmit?a(s).trigger("reloadGrid"):s.p.treeGrid===!0?a(s).jqGrid("addChildNode",n[2],k,u):a(s).jqGrid("addRowData",n[2],u,d.addedrow),b[s.p.id].closeAfterAdd?(s.p.treeGrid!==!0&&a(s).jqGrid("setSelection",n[2]),a.jgrid.hideModal("#"+a.jgrid.jqID(B.themodal),{gb:"#gbox_"+a.jgrid.jqID(x),jqm:d.jqModal,onClose:b[s.p.id].onClose,removemodal:b[s.p.id].removemodal,formprop:!b[s.p.id].recreateForm,form:b[s.p.id].form})):b[s.p.id].clearAfterAdd&&i("_empty",s,y)):(b[s.p.id].reloadAfterSubmit?(a(s).trigger("reloadGrid"),b[s.p.id].closeAfterEdit||setTimeout(function(){a(s).jqGrid("setSelection",u[e])},1e3)):s.p.treeGrid===!0?a(s).jqGrid("setTreeRow",u[e],u):a(s).jqGrid("setRowData",u[e],u),b[s.p.id].closeAfterEdit&&a.jgrid.hideModal("#"+a.jgrid.jqID(B.themodal),{gb:"#gbox_"+a.jgrid.jqID(x),jqm:d.jqModal,onClose:b[s.p.id].onClose,removemodal:b[s.p.id].removemodal,formprop:!b[s.p.id].recreateForm,form:b[s.p.id].form})),a.isFunction(b[s.p.id].afterComplete)&&(c=g,setTimeout(function(){a(s).triggerHandler("jqGridAddEditAfterComplete",[c,u,a(y),w]),b[s.p.id].afterComplete.call(s,c,u,a(y),w),c=null},500)),(b[s.p.id].checkOnSubmit||b[s.p.id].checkOnUpdate)&&(a(y).data("disabled",!1),"_empty"!==b[s.p.id]._savedData[s.p.id+"_id"]))for(l
in
b[s.p.id]._savedData)b[s.p.id]._savedData.hasOwnProperty(l)&&u[l]&&(b[s.p.id]._savedData[l]=u[l]);b[s.p.id].processing=!1;try{a(":input:visible",y)[0].focus()}catch(m){}}},a.jgrid.ajaxOptions,b[s.p.id].ajaxEditOptions);if(v.url||b[s.p.id].useDataProxy||(a.isFunction(s.p.dataProxy)?b[s.p.id].useDataProxy=!0:(n[0]=!1,n[1]+=" "+G.nourl)),n[0])if(b[s.p.id].useDataProxy){var
z=s.p.dataProxy.call(s,v,"set_"+s.p.id);void
0===z&&(z=[!0,""]),z[0]===!1?(n[0]=!1,n[1]=z[1]||"Error deleting the selected row!"):(v.data.oper===p.addoper&&b[s.p.id].closeAfterAdd&&a.jgrid.hideModal("#"+a.jgrid.jqID(B.themodal),{gb:"#gbox_"+a.jgrid.jqID(x),jqm:d.jqModal,onClose:b[s.p.id].onClose,removemodal:b[s.p.id].removemodal,formprop:!b[s.p.id].recreateForm,form:b[s.p.id].form}),v.data.oper===p.editoper&&b[s.p.id].closeAfterEdit&&a.jgrid.hideModal("#"+a.jgrid.jqID(B.themodal),{gb:"#gbox_"+a.jgrid.jqID(x),jqm:d.jqModal,onClose:b[s.p.id].onClose,removemodal:b[s.p.id].removemodal,formprop:!b[s.p.id].recreateForm,form:b[s.p.id].form}))}else"clientArray"===v.url?(b[s.p.id].reloadAfterSubmit=!1,u=v.data,v.complete({status:200,statusText:""},"")):a.ajax(v)}n[0]===!1&&(a(".FormError",y).html(n[1]),a(".FormError",y).show())}function
l(a,b){var
c,d=!1;for(c
in
a)if(a.hasOwnProperty(c)&&a[c]!=b[c]){d=!0;break}return d}function
m(){var
c=!0;return a(".FormError",y).hide(),b[s.p.id].checkOnUpdate&&(u={},e(),v=l(u,b[s.p.id]._savedData),v&&(a(y).data("disabled",!0),a(".confirm","#"+B.themodal).show(),c=!1)),c}function
n(){var
b;if("_empty"!==c&&void
0!==s.p.savedRow&&s.p.savedRow.length>0&&a.isFunction(a.fn.jqGrid.restoreRow))for(b=0;b<s.p.savedRow.length;b++)if(s.p.savedRow[b].id===c){a(s).jqGrid("restoreRow",c);break}}function
o(b,c){var
d=c[1].length-1;0===b?a("#pData",t).addClass(h.disabled):void
0!==c[1][b-1]&&a("#"+a.jgrid.jqID(c[1][b-1])).hasClass(h.disabled)?a("#pData",t).addClass(h.disabled):a("#pData",t).removeClass(h.disabled),b===d?a("#nData",t).addClass(h.disabled):void
0!==c[1][b+1]&&a("#"+a.jgrid.jqID(c[1][b+1])).hasClass(h.disabled)?a("#nData",t).addClass(h.disabled):a("#nData",t).removeClass(h.disabled)}function
p(){var
b=a(s).jqGrid("getDataIDs"),c=a("#id_g",A).val(),d=a.inArray(c,b);return[d,b]}function
q(a){var
b="";return"string"==typeof
a&&(b=a.replace(/\{([\w\-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}/g,function(a,b){return'<span id="'+b+'" ></span>'})),b}function
r(){if(b[s.p.id].checkOnSubmit||b[s.p.id].checkOnUpdate){var
c=[],d={};c=a.map(b[s.p.id]._savedData,function(a,b){return b}),a(".FormElement",L).each(function(){if(-1===c.indexOf(this.name)){var
e=a(this).val(),f=a(this).get(0).type;if("checkbox"===f)a(this).is(":checked")||(e=a(this).attr("offval"));else
if("select-multiple"===f)e=e.join(",");else
if("radio"===f){if(d.hasOwnProperty(this.name))return!0;d[this.name]=void
0===a(this).attr("offval")?"off":a(this).attr("offval")}b[s.p.id]._savedData[this.name]=e}});for(var
e
in
d)if(d.hasOwnProperty(e)){var
f=a('input[name="'+e+'"]:checked',L).val();b[s.p.id]._savedData[e]=void
0!==f?f:d[e]}}}var
s=this;if(s.grid&&c){var
t,u,v,w,x=s.p.id,y="FrmGrid_"+x,z="TblGrid_"+x,A="#"+a.jgrid.jqID(z),B={themodal:"editmod"+x,modalhead:"edithd"+x,modalcontent:"editcnt"+x,scrollelm:y},C=!0,D=1,E=0,F="string"==typeof
b[s.p.id].template&&b[s.p.id].template.length>0,G=a.jgrid.getRegional(this,"errors");b[s.p.id].styleUI=s.p.styleUI||"jQueryUI",a.jgrid.isMobile()&&(b[s.p.id].resize=!1),"new"===c?(c="_empty",w="add",d.caption=b[s.p.id].addCaption):(d.caption=b[s.p.id].editCaption,w="edit"),d.recreateForm||a(s).data("formProp")&&a.extend(b[a(this)[0].p.id],a(s).data("formProp"));var
H=!0;d.checkOnUpdate&&d.jqModal&&!d.modal&&(H=!1);var
I,J=isNaN(b[a(this)[0].p.id].dataheight)?b[a(this)[0].p.id].dataheight:b[a(this)[0].p.id].dataheight+"px",K=isNaN(b[a(this)[0].p.id].datawidth)?b[a(this)[0].p.id].datawidth:b[a(this)[0].p.id].datawidth+"px",L=a("<form name='FormPost' id='"+y+"' class='FormGrid' onSubmit='return false;' style='width:"+K+";height:"+J+";'></form>").data("disabled",!1);if(F?(I=q(b[a(this)[0].p.id].template),t=A):(I=a("<table id='"+z+"' class='EditTable ui-common-table'><tbody></tbody></table>"),t=A+"_2"),y="#"+a.jgrid.jqID(y),a(L).append("<div class='FormError "+h.error+"' style='display:none;'></div>"),a(L).append("<div class='tinfo topinfo'>"+b[s.p.id].topinfo+"</div>"),a(s.p.colModel).each(function(){var
a=this.formoptions;D=Math.max(D,a?a.colpos||0:0),E=Math.max(E,a?a.rowpos||0:0)}),a(L).append(I),C=a(s).triggerHandler("jqGridAddEditBeforeInitData",[L,w]),void
0===C&&(C=!0),C&&a.isFunction(b[s.p.id].beforeInitData)&&(C=b[s.p.id].beforeInitData.call(s,L,w)),C!==!1){n(),f(c,s,I,D);var
M="rtl"===s.p.direction?!0:!1,N=M?"nData":"pData",O=M?"pData":"nData",P="<a id='"+N+"' class='fm-button "+h.button+"'><span class='"+h.icon_base+" "+g.icon_prev+"'></span></a>",Q="<a id='"+O+"' class='fm-button "+h.button+"'><span class='"+h.icon_base+" "+g.icon_next+"'></span></a>",R="<a id='sData' class='fm-button "+h.button+"'>"+d.bSubmit+"</a>",S="<a id='cData' class='fm-button "+h.button+"'>"+d.bCancel+"</a>",T="<table style='height:auto' class='EditTable ui-common-table' id='"+z+"_2'><tbody><tr><td colspan='2'><hr class='"+h.content+"' style='margin:1px'/></td></tr><tr id='Act_Buttons'><td class='navButton'>"+(M?Q+P:P+Q)+"</td><td class='EditButton'>"+R+S+"</td></tr>";if(T+="</tbody></table>",E>0){var
U=[];a.each(a(I)[0].rows,function(a,b){U[a]=b}),U.sort(function(a,b){return a.rp>b.rp?1:a.rp<b.rp?-1:0}),a.each(U,function(b,c){a("tbody",I).append(c)})}d.gbox="#gbox_"+a.jgrid.jqID(x);var
V=!1;d.closeOnEscape===!0&&(d.closeOnEscape=!1,V=!0);var
W;if(F?(a(L).find("#pData").replaceWith(P),a(L).find("#nData").replaceWith(Q),a(L).find("#sData").replaceWith(R),a(L).find("#cData").replaceWith(S),W=a("<div id="+z+"></div>").append(L)):W=a("<div></div>").append(L).append(T),a(L).append("<div class='binfo topinfo bottominfo'>"+b[s.p.id].bottominfo+"</div>"),a.jgrid.createModal(B,W,b[a(this)[0].p.id],"#gview_"+a.jgrid.jqID(s.p.id),a("#gbox_"+a.jgrid.jqID(s.p.id))[0]),M&&(a("#pData, #nData",A+"_2").css("float","right"),a(".EditButton",A+"_2").css("text-align","left")),b[s.p.id].topinfo&&a(".tinfo",y).show(),b[s.p.id].bottominfo&&a(".binfo",y).show(),W=null,T=null,a("#"+a.jgrid.jqID(B.themodal)).keydown(function(c){var
e=c.target;if(a(y).data("disabled")===!0)return!1;if(b[s.p.id].savekey[0]===!0&&c.which===b[s.p.id].savekey[1]&&"TEXTAREA"!==e.tagName)return a("#sData",A+"_2").trigger("click"),!1;if(27===c.which)return m()?(V&&a.jgrid.hideModal("#"+a.jgrid.jqID(B.themodal),{gb:d.gbox,jqm:d.jqModal,onClose:b[s.p.id].onClose,removemodal:b[s.p.id].removemodal,formprop:!b[s.p.id].recreateForm,form:b[s.p.id].form}),!1):!1;if(b[s.p.id].navkeys[0]===!0){if("_empty"===a("#id_g",A).val())return!0;if(c.which===b[s.p.id].navkeys[1])return a("#pData",t).trigger("click"),!1;if(c.which===b[s.p.id].navkeys[2])return a("#nData",t).trigger("click"),!1}}),d.checkOnUpdate&&(a("a.ui-jqdialog-titlebar-close span","#"+a.jgrid.jqID(B.themodal)).removeClass("jqmClose"),a("a.ui-jqdialog-titlebar-close","#"+a.jgrid.jqID(B.themodal)).unbind("click").click(function(){return m()?(a.jgrid.hideModal("#"+a.jgrid.jqID(B.themodal),{gb:"#gbox_"+a.jgrid.jqID(x),jqm:d.jqModal,onClose:b[s.p.id].onClose,removemodal:b[s.p.id].removemodal,formprop:!b[s.p.id].recreateForm,form:b[s.p.id].form}),!1):!1})),d.saveicon=a.extend([!0,"left",g.icon_save],d.saveicon),d.closeicon=a.extend([!0,"left",g.icon_close],d.closeicon),d.saveicon[0]===!0&&a("#sData",t).addClass("right"===d.saveicon[1]?"fm-button-icon-right":"fm-button-icon-left").append("<span class='"+h.icon_base+" "+d.saveicon[2]+"'></span>"),d.closeicon[0]===!0&&a("#cData",t).addClass("right"===d.closeicon[1]?"fm-button-icon-right":"fm-button-icon-left").append("<span class='"+h.icon_base+" "+d.closeicon[2]+"'></span>"),b[s.p.id].checkOnSubmit||b[s.p.id].checkOnUpdate){R="<a id='sNew' class='fm-button "+h.button+"' style='z-index:1002'>"+d.bYes+"</a>",Q="<a id='nNew' class='fm-button "+h.button+"' style='z-index:1002;margin-left:5px'>"+d.bNo+"</a>",S="<a id='cNew' class='fm-button "+h.button+"' style='z-index:1002;margin-left:5px;'>"+d.bExit+"</a>";var
X=d.zIndex||999;X++,a("<div class='"+d.overlayClass+" jqgrid-overlay confirm' style='z-index:"+X+";display:none;'>&#160;</div><div class='confirm ui-jqconfirm "+h.content+"' style='z-index:"+(X+1)+"'>"+d.saveData+"<br/><br/>"+R+Q+S+"</div>").insertAfter(y),a("#sNew","#"+a.jgrid.jqID(B.themodal)).click(function(){return k(),a(y).data("disabled",!1),a(".confirm","#"+a.jgrid.jqID(B.themodal)).hide(),!1}),a("#nNew","#"+a.jgrid.jqID(B.themodal)).click(function(){return a(".confirm","#"+a.jgrid.jqID(B.themodal)).hide(),a(y).data("disabled",!1),setTimeout(function(){a(":input:visible",y)[0].focus()},0),!1}),a("#cNew","#"+a.jgrid.jqID(B.themodal)).click(function(){return a(".confirm","#"+a.jgrid.jqID(B.themodal)).hide(),a(y).data("disabled",!1),a.jgrid.hideModal("#"+a.jgrid.jqID(B.themodal),{gb:"#gbox_"+a.jgrid.jqID(x),jqm:d.jqModal,onClose:b[s.p.id].onClose,removemodal:b[s.p.id].removemodal,formprop:!b[s.p.id].recreateForm,form:b[s.p.id].form}),!1})}a(s).triggerHandler("jqGridAddEditInitializeForm",[a(y),w]),a.isFunction(b[s.p.id].onInitializeForm)&&b[s.p.id].onInitializeForm.call(s,a(y),w),"_empty"!==c&&b[s.p.id].viewPagerButtons?a("#pData,#nData",t).show():a("#pData,#nData",t).hide(),a(s).triggerHandler("jqGridAddEditBeforeShowForm",[a(y),w]),a.isFunction(b[s.p.id].beforeShowForm)&&b[s.p.id].beforeShowForm.call(s,a(y),w),r(),a("#"+a.jgrid.jqID(B.themodal)).data("onClose",b[s.p.id].onClose),a.jgrid.viewModal("#"+a.jgrid.jqID(B.themodal),{gbox:"#gbox_"+a.jgrid.jqID(x),jqm:d.jqModal,overlay:d.overlay,modal:d.modal,overlayClass:d.overlayClass,focusField:d.focusField,onHide:function(b){var
c=a("#editmod"+x)[0].style.height,d=a("#editmod"+x)[0].style.width;c.indexOf("px")>-1&&(c=parseFloat(c)),d.indexOf("px")>-1&&(d=parseFloat(d)),a(s).data("formProp",{top:parseFloat(a(b.w).css("top")),left:parseFloat(a(b.w).css("left")),width:d,height:c,dataheight:a(y).height(),datawidth:a(y).width()}),b.w.remove(),b.o&&b.o.remove()}}),H||a("."+a.jgrid.jqID(d.overlayClass)).click(function(){return m()?(a.jgrid.hideModal("#"+a.jgrid.jqID(B.themodal),{gb:"#gbox_"+a.jgrid.jqID(x),jqm:d.jqModal,onClose:b[s.p.id].onClose,removemodal:b[s.p.id].removemodal,formprop:!b[s.p.id].recreateForm,form:b[s.p.id].form}),!1):!1}),a(".fm-button","#"+a.jgrid.jqID(B.themodal)).hover(function(){a(this).addClass(h.hover)},function(){a(this).removeClass(h.hover)}),a("#sData",t).click(function(){return u={},a(".FormError",y).hide(),e(),"_empty"===u[s.p.id+"_id"]?k():d.checkOnSubmit===!0?(v=l(u,b[s.p.id]._savedData),v?(a(y).data("disabled",!0),a(".confirm","#"+a.jgrid.jqID(B.themodal)).show()):k()):k(),!1}),a("#cData",t).click(function(){return m()?(a.jgrid.hideModal("#"+a.jgrid.jqID(B.themodal),{gb:"#gbox_"+a.jgrid.jqID(x),jqm:d.jqModal,onClose:b[s.p.id].onClose,removemodal:b[s.p.id].removemodal,formprop:!b[s.p.id].recreateForm,form:b[s.p.id].form}),!1):!1}),a("#nData",t).click(function(){if(!m())return!1;a(".FormError",y).hide();var
b=p();if(b[0]=parseInt(b[0],10),-1!==b[0]&&b[1][b[0]+1]){a(s).triggerHandler("jqGridAddEditClickPgButtons",["next",a(y),b[1][b[0]]]);var
c;if(a.isFunction(d.onclickPgButtons)&&(c=d.onclickPgButtons.call(s,"next",a(y),b[1][b[0]]),void
0!==c&&c===!1))return!1;if(a("#"+a.jgrid.jqID(b[1][b[0]+1])).hasClass(h.disabled))return!1;i(b[1][b[0]+1],s,y),a(s).jqGrid("setSelection",b[1][b[0]+1]),a(s).triggerHandler("jqGridAddEditAfterClickPgButtons",["next",a(y),b[1][b[0]]]),a.isFunction(d.afterclickPgButtons)&&d.afterclickPgButtons.call(s,"next",a(y),b[1][b[0]+1]),r(),o(b[0]+1,b)}return!1}),a("#pData",t).click(function(){if(!m())return!1;a(".FormError",y).hide();var
b=p();if(-1!==b[0]&&b[1][b[0]-1]){a(s).triggerHandler("jqGridAddEditClickPgButtons",["prev",a(y),b[1][b[0]]]);var
c;if(a.isFunction(d.onclickPgButtons)&&(c=d.onclickPgButtons.call(s,"prev",a(y),b[1][b[0]]),void
0!==c&&c===!1))return!1;if(a("#"+a.jgrid.jqID(b[1][b[0]-1])).hasClass(h.disabled))return!1;i(b[1][b[0]-1],s,y),a(s).jqGrid("setSelection",b[1][b[0]-1]),a(s).triggerHandler("jqGridAddEditAfterClickPgButtons",["prev",a(y),b[1][b[0]]]),a.isFunction(d.afterclickPgButtons)&&d.afterclickPgButtons.call(s,"prev",a(y),b[1][b[0]-1]),r(),o(b[0]-1,b)}return!1}),a(s).triggerHandler("jqGridAddEditAfterShowForm",[a(y),w]),a.isFunction(b[s.p.id].afterShowForm)&&b[s.p.id].afterShowForm.call(s,a(y),w);var
Y=p();o(Y[0],Y)}}})},viewGridRow:function(c,d){var
e=a.jgrid.getRegional(this[0],"view"),f=this[0].p.styleUI,g=a.jgrid.styleUI[f].formedit,h=a.jgrid.styleUI[f].common;return d=a.extend(!0,{top:0,left:0,width:500,datawidth:"auto",height:"auto",dataheight:"auto",modal:!1,overlay:30,drag:!0,resize:!0,jqModal:!0,closeOnEscape:!1,labelswidth:"30%",closeicon:[],navkeys:[!1,38,40],onClose:null,beforeShowForm:null,beforeInitData:null,viewPagerButtons:!0,recreateForm:!1,removemodal:!0,form:"view"},e,d||{}),b[a(this)[0].p.id]=d,this.each(function(){function
e(){(b[l.p.id].closeOnEscape===!0||b[l.p.id].navkeys[0]===!0)&&setTimeout(function(){a(".ui-jqdialog-titlebar-close","#"+a.jgrid.jqID(r.modalhead)).attr("tabindex","-1").focus()},0)}function
f(b,c,e,f){var
g,i,j,k,l,m,n,o,p,q=0,r=[],s=!1,t="<td class='CaptionTD form-view-label "+h.content+"' width='"+d.labelswidth+"'>&#160;</td><td class='DataTD form-view-data ui-helper-reset "+h.content+"'>&#160;</td>",u="",v="<td class='CaptionTD form-view-label "+h.content+"'>&#160;</td><td class='DataTD form-view-data "+h.content+"'>&#160;</td>",w=["integer","number","currency"],x=0,y=0;for(m=1;f>=m;m++)u+=1===m?t:v;if(a(c.p.colModel).each(function(){i=this.editrules&&this.editrules.edithidden===!0?!1:this.hidden===!0?!0:!1,i||"right"!==this.align||(this.formatter&&-1!==a.inArray(this.formatter,w)?x=Math.max(x,parseInt(this.width,10)):y=Math.max(y,parseInt(this.width,10)))}),n=0!==x?x:0!==y?y:0,s=a(c).jqGrid("getInd",b),a(c.p.colModel).each(function(b){if(g=this.name,o=!1,i=this.editrules&&this.editrules.edithidden===!0?!1:this.hidden===!0?!0:!1,l=i?"style='display:none'":"",p="boolean"!=typeof
this.viewable?!0:this.viewable,"cb"!==g&&"subgrid"!==g&&"rn"!==g&&p){k=s===!1?"":g===c.p.ExpandColumn&&c.p.treeGrid===!0?a("td:eq("+b+")",c.rows[s]).text():a("td:eq("+b+")",c.rows[s]).html(),o="right"===this.align&&0!==n?!0:!1;var
d=a.extend({},{rowabove:!1,rowcontent:""},this.formoptions||{}),h=parseInt(d.rowpos,10)||q+1,m=parseInt(2*(parseInt(d.colpos,10)||1),10);if(d.rowabove){var
t=a("<tr><td class='contentinfo' colspan='"+2*f+"'>"+d.rowcontent+"</td></tr>");a(e).append(t),t[0].rp=h}j=a(e).find("tr[rowpos="+h+"]"),0===j.length&&(j=a("<tr "+l+" rowpos='"+h+"'></tr>").addClass("FormData").attr("id","trv_"+g),a(j).append(u),a(e).append(j),j[0].rp=h),a("td:eq("+(m-2)+")",j[0]).html("<b>"+(void
0===d.label?c.p.colNames[b]:d.label)+"</b>"),a("td:eq("+(m-1)+")",j[0]).append("<span>"+k+"</span>").attr("id","v_"+g),o&&a("td:eq("+(m-1)+") span",j[0]).css({"text-align":"right",width:n+"px"}),r[q]=b,q++}}),q>0){var
z=a("<tr class='FormData' style='display:none'><td class='CaptionTD'></td><td colspan='"+(2*f-1)+"' class='DataTD'><input class='FormElement' id='id_g' type='text' name='id' value='"+b+"'/></td></tr>");z[0].rp=q+99,a(e).append(z)}return r}function
i(b,c){var
d,e,f,g,h=0;g=a(c).jqGrid("getInd",b,!0),g&&(a("td",g).each(function(b){d=c.p.colModel[b].name,e=c.p.colModel[b].editrules&&c.p.colModel[b].editrules.edithidden===!0?!1:c.p.colModel[b].hidden===!0?!0:!1,"cb"!==d&&"subgrid"!==d&&"rn"!==d&&(f=d===c.p.ExpandColumn&&c.p.treeGrid===!0?a(this).text():a(this).html(),d=a.jgrid.jqID("v_"+d),a("#"+d+" span","#"+o).html(f),e&&a("#"+d,"#"+o).parents("tr:first").hide(),h++)}),h>0&&a("#id_g","#"+o).val(b))}function
j(b,c){var
d=c[1].length-1;0===b?a("#pData","#"+o+"_2").addClass(h.disabled):void
0!==c[1][b-1]&&a("#"+a.jgrid.jqID(c[1][b-1])).hasClass(h.disabled)?a("#pData",o+"_2").addClass(h.disabled):a("#pData","#"+o+"_2").removeClass(h.disabled),b===d?a("#nData","#"+o+"_2").addClass(h.disabled):void
0!==c[1][b+1]&&a("#"+a.jgrid.jqID(c[1][b+1])).hasClass(h.disabled)?a("#nData",o+"_2").addClass(h.disabled):a("#nData","#"+o+"_2").removeClass(h.disabled)}function
k(){var
b=a(l).jqGrid("getDataIDs"),c=a("#id_g","#"+o).val(),d=a.inArray(c,b);return[d,b]}var
l=this;if(l.grid&&c){var
m=l.p.id,n="ViewGrid_"+a.jgrid.jqID(m),o="ViewTbl_"+a.jgrid.jqID(m),p="ViewGrid_"+m,q="ViewTbl_"+m,r={themodal:"viewmod"+m,modalhead:"viewhd"+m,modalcontent:"viewcnt"+m,scrollelm:n},s=a.isFunction(b[l.p.id].beforeInitData)?b[l.p.id].beforeInitData:!1,t=!0,u=1,v=0;b[l.p.id].styleUI=l.p.styleUI||"jQueryUI",d.recreateForm||a(l).data("viewProp")&&a.extend(b[a(this)[0].p.id],a(l).data("viewProp"));var
w=isNaN(b[a(this)[0].p.id].dataheight)?b[a(this)[0].p.id].dataheight:b[a(this)[0].p.id].dataheight+"px",x=isNaN(b[a(this)[0].p.id].datawidth)?b[a(this)[0].p.id].datawidth:b[a(this)[0].p.id].datawidth+"px",y=a("<form name='FormPost' id='"+p+"' class='FormGrid' style='width:"+x+";height:"+w+";'></form>"),z=a("<table id='"+q+"' class='EditTable ViewTable'><tbody></tbody></table>");if(a(l.p.colModel).each(function(){var
a=this.formoptions;u=Math.max(u,a?a.colpos||0:0),v=Math.max(v,a?a.rowpos||0:0)}),a(y).append(z),s&&(t=s.call(l,y),void
0===t&&(t=!0)),t!==!1){f(c,l,z,u);var
A="rtl"===l.p.direction?!0:!1,B=A?"nData":"pData",C=A?"pData":"nData",D="<a id='"+B+"' class='fm-button "+h.button+"'><span class='"+h.icon_base+" "+g.icon_prev+"'></span></a>",E="<a id='"+C+"' class='fm-button "+h.button+"'><span class='"+h.icon_base+" "+g.icon_next+"'></span></a>",F="<a id='cData' class='fm-button "+h.button+"'>"+d.bClose+"</a>";if(v>0){var
G=[];a.each(a(z)[0].rows,function(a,b){G[a]=b}),G.sort(function(a,b){return a.rp>b.rp?1:a.rp<b.rp?-1:0}),a.each(G,function(b,c){a("tbody",z).append(c)})}d.gbox="#gbox_"+a.jgrid.jqID(m);var
H=a("<div></div>").append(y).append("<table border='0' class='EditTable' id='"+o+"_2'><tbody><tr id='Act_Buttons'><td class='navButton' width='"+d.labelswidth+"'>"+(A?E+D:D+E)+"</td><td class='EditButton'>"+F+"</td></tr></tbody></table>");a.jgrid.createModal(r,H,b[a(this)[0].p.id],"#gview_"+a.jgrid.jqID(l.p.id),a("#gview_"+a.jgrid.jqID(l.p.id))[0]),A&&(a("#pData, #nData","#"+o+"_2").css("float","right"),a(".EditButton","#"+o+"_2").css("text-align","left")),d.viewPagerButtons||a("#pData, #nData","#"+o+"_2").hide(),H=null,a("#"+r.themodal).keydown(function(c){if(27===c.which)return b[l.p.id].closeOnEscape&&a.jgrid.hideModal("#"+a.jgrid.jqID(r.themodal),{gb:d.gbox,jqm:d.jqModal,onClose:d.onClose,removemodal:b[l.p.id].removemodal,formprop:!b[l.p.id].recreateForm,form:b[l.p.id].form}),!1;if(d.navkeys[0]===!0){if(c.which===d.navkeys[1])return a("#pData","#"+o+"_2").trigger("click"),!1;if(c.which===d.navkeys[2])return a("#nData","#"+o+"_2").trigger("click"),!1}}),d.closeicon=a.extend([!0,"left",g.icon_close],d.closeicon),d.closeicon[0]===!0&&a("#cData","#"+o+"_2").addClass("right"===d.closeicon[1]?"fm-button-icon-right":"fm-button-icon-left").append("<span class='"+h.icon_base+" "+d.closeicon[2]+"'></span>"),a.isFunction(d.beforeShowForm)&&d.beforeShowForm.call(l,a("#"+n)),a.jgrid.viewModal("#"+a.jgrid.jqID(r.themodal),{gbox:"#gbox_"+a.jgrid.jqID(m),jqm:d.jqModal,overlay:d.overlay,modal:d.modal,onHide:function(b){a(l).data("viewProp",{top:parseFloat(a(b.w).css("top")),left:parseFloat(a(b.w).css("left")),width:a(b.w).width(),height:a(b.w).height(),dataheight:a("#"+n).height(),datawidth:a("#"+n).width()}),b.w.remove(),b.o&&b.o.remove()}}),a(".fm-button:not(."+h.disabled+")","#"+o+"_2").hover(function(){a(this).addClass(h.hover)},function(){a(this).removeClass(h.hover)}),e(),a("#cData","#"+o+"_2").click(function(){return a.jgrid.hideModal("#"+a.jgrid.jqID(r.themodal),{gb:"#gbox_"+a.jgrid.jqID(m),jqm:d.jqModal,onClose:d.onClose,removemodal:b[l.p.id].removemodal,formprop:!b[l.p.id].recreateForm,form:b[l.p.id].form}),!1}),a("#nData","#"+o+"_2").click(function(){a("#FormError","#"+o).hide();var
b=k();return b[0]=parseInt(b[0],10),-1!==b[0]&&b[1][b[0]+1]&&(a.isFunction(d.onclickPgButtons)&&d.onclickPgButtons.call(l,"next",a("#"+n),b[1][b[0]]),i(b[1][b[0]+1],l),a(l).jqGrid("setSelection",b[1][b[0]+1]),a.isFunction(d.afterclickPgButtons)&&d.afterclickPgButtons.call(l,"next",a("#"+n),b[1][b[0]+1]),j(b[0]+1,b)),e(),!1}),a("#pData","#"+o+"_2").click(function(){a("#FormError","#"+o).hide();var
b=k();return-1!==b[0]&&b[1][b[0]-1]&&(a.isFunction(d.onclickPgButtons)&&d.onclickPgButtons.call(l,"prev",a("#"+n),b[1][b[0]]),i(b[1][b[0]-1],l),a(l).jqGrid("setSelection",b[1][b[0]-1]),a.isFunction(d.afterclickPgButtons)&&d.afterclickPgButtons.call(l,"prev",a("#"+n),b[1][b[0]-1]),j(b[0]-1,b)),e(),!1});var
I=k();j(I[0],I)}}})},delGridRow:function(c,d){var
e=a.jgrid.getRegional(this[0],"del"),f=this[0].p.styleUI,g=a.jgrid.styleUI[f].formedit,h=a.jgrid.styleUI[f].common;return d=a.extend(!0,{top:0,left:0,width:240,height:"auto",dataheight:"auto",modal:!1,overlay:30,drag:!0,resize:!0,url:"",mtype:"POST",reloadAfterSubmit:!0,beforeShowForm:null,beforeInitData:null,afterShowForm:null,beforeSubmit:null,onclickSubmit:null,afterSubmit:null,jqModal:!0,closeOnEscape:!1,delData:{},delicon:[],cancelicon:[],onClose:null,ajaxDelOptions:{},processing:!1,serializeDelData:null,useDataProxy:!1},e,d||{}),b[a(this)[0].p.id]=d,this.each(function(){var
e=this;if(e.grid&&c){var
f,i,j,k,l=a.isFunction(b[e.p.id].beforeShowForm),m=a.isFunction(b[e.p.id].afterShowForm),n=a.isFunction(b[e.p.id].beforeInitData)?b[e.p.id].beforeInitData:!1,o=e.p.id,p={},q=!0,r="DelTbl_"+a.jgrid.jqID(o),s="DelTbl_"+o,t={themodal:"delmod"+o,modalhead:"delhd"+o,modalcontent:"delcnt"+o,scrollelm:r};if(b[e.p.id].styleUI=e.p.styleUI||"jQueryUI",a.isArray(c)&&(c=c.join()),void
0!==a("#"+a.jgrid.jqID(t.themodal))[0]){if(n&&(q=n.call(e,a("#"+r)),void
0===q&&(q=!0)),q===!1)return;a("#DelData>td","#"+r).text(c),a("#DelError","#"+r).hide(),b[e.p.id].processing===!0&&(b[e.p.id].processing=!1,a("#dData","#"+r).removeClass(h.active)),l&&b[e.p.id].beforeShowForm.call(e,a("#"+r)),a.jgrid.viewModal("#"+a.jgrid.jqID(t.themodal),{gbox:"#gbox_"+a.jgrid.jqID(o),jqm:b[e.p.id].jqModal,jqM:!1,overlay:b[e.p.id].overlay,modal:b[e.p.id].modal}),m&&b[e.p.id].afterShowForm.call(e,a("#"+r))}else{var
u=isNaN(b[e.p.id].dataheight)?b[e.p.id].dataheight:b[e.p.id].dataheight+"px",v=isNaN(d.datawidth)?d.datawidth:d.datawidth+"px",w="<div id='"+s+"' class='formdata' style='width:"+v+";overflow:auto;position:relative;height:"+u+";'>";w+="<table class='DelTable'><tbody>",w+="<tr id='DelError' style='display:none'><td class='"+h.error+"'></td></tr>",w+="<tr id='DelData' style='display:none'><td >"+c+"</td></tr>",w+='<tr><td class="delmsg" style="white-space:pre;">'+b[e.p.id].msg+"</td></tr><tr><td >&#160;</td></tr>",w+="</tbody></table></div>";var
x="<a id='dData' class='fm-button "+h.button+"'>"+d.bSubmit+"</a>",y="<a id='eData' class='fm-button "+h.button+"'>"+d.bCancel+"</a>";if(w+="<table class='EditTable ui-common-table' id='"+r+"_2'><tbody><tr><td><hr class='"+h.content+"' style='margin:1px'/></td></tr><tr><td class='DelButton EditButton'>"+x+"&#160;"+y+"</td></tr></tbody></table>",d.gbox="#gbox_"+a.jgrid.jqID(o),a.jgrid.createModal(t,w,b[e.p.id],"#gview_"+a.jgrid.jqID(e.p.id),a("#gview_"+a.jgrid.jqID(e.p.id))[0]),n&&(q=n.call(e,a(w)),void
0===q&&(q=!0)),q===!1)return;a(".fm-button","#"+r+"_2").hover(function(){a(this).addClass(h.hover)},function(){a(this).removeClass(h.hover)}),d.delicon=a.extend([!0,"left",g.icon_del],b[e.p.id].delicon),d.cancelicon=a.extend([!0,"left",g.icon_cancel],b[e.p.id].cancelicon),d.delicon[0]===!0&&a("#dData","#"+r+"_2").addClass("right"===d.delicon[1]?"fm-button-icon-right":"fm-button-icon-left").append("<span class='"+h.icon_base+" "+d.delicon[2]+"'></span>"),d.cancelicon[0]===!0&&a("#eData","#"+r+"_2").addClass("right"===d.cancelicon[1]?"fm-button-icon-right":"fm-button-icon-left").append("<span class='"+h.icon_base+" "+d.cancelicon[2]+"'></span>"),a("#dData","#"+r+"_2").click(function(){var
c,g=[!0,""],l=a("#DelData>td","#"+r).text();if(p={},a.isFunction(b[e.p.id].onclickSubmit)&&(p=b[e.p.id].onclickSubmit.call(e,b[e.p.id],l)||{}),a.isFunction(b[e.p.id].beforeSubmit)&&(g=b[e.p.id].beforeSubmit.call(e,l)),g[0]&&!b[e.p.id].processing){if(b[e.p.id].processing=!0,j=e.p.prmNames,f=a.extend({},b[e.p.id].delData,p),k=j.oper,f[k]=j.deloper,i=j.id,l=String(l).split(","),!l.length)return!1;for(c
in
l)l.hasOwnProperty(c)&&(l[c]=a.jgrid.stripPref(e.p.idPrefix,l[c]));f[i]=l.join(),a(this).addClass(h.active);var
m=a.extend({url:b[e.p.id].url||a(e).jqGrid("getGridParam","editurl"),type:b[e.p.id].mtype,data:a.isFunction(b[e.p.id].serializeDelData)?b[e.p.id].serializeDelData.call(e,f):f,complete:function(c,i){var
j;if(a("#dData","#"+r+"_2").removeClass(h.active),c.status>=300&&304!==c.status?(g[0]=!1,a.isFunction(b[e.p.id].errorTextFormat)?g[1]=b[e.p.id].errorTextFormat.call(e,c):g[1]=i+" Status: '"+c.statusText+"'. Error code: "+c.status):a.isFunction(b[e.p.id].afterSubmit)&&(g=b[e.p.id].afterSubmit.call(e,c,f)),g[0]===!1)a("#DelError>td","#"+r).html(g[1]),a("#DelError","#"+r).show();else{if(b[e.p.id].reloadAfterSubmit&&"local"!==e.p.datatype)a(e).trigger("reloadGrid");else{if(e.p.treeGrid===!0)try{a(e).jqGrid("delTreeNode",e.p.idPrefix+l[0])}catch(k){}else
for(j=0;j<l.length;j++)a(e).jqGrid("delRowData",e.p.idPrefix+l[j]);e.p.selrow=null,e.p.selarrrow=[]}a.isFunction(b[e.p.id].afterComplete)&&setTimeout(function(){b[e.p.id].afterComplete.call(e,c,l)},500)}b[e.p.id].processing=!1,g[0]&&a.jgrid.hideModal("#"+a.jgrid.jqID(t.themodal),{gb:"#gbox_"+a.jgrid.jqID(o),jqm:d.jqModal,onClose:b[e.p.id].onClose})}},a.jgrid.ajaxOptions,b[e.p.id].ajaxDelOptions);if(m.url||b[e.p.id].useDataProxy||(a.isFunction(e.p.dataProxy)?b[e.p.id].useDataProxy=!0:(g[0]=!1,g[1]+=" "+a.jgrid.getRegional(e,"errors.nourl"))),g[0])if(b[e.p.id].useDataProxy){var
n=e.p.dataProxy.call(e,m,"del_"+e.p.id);void
0===n&&(n=[!0,""]),n[0]===!1?(g[0]=!1,g[1]=n[1]||"Error deleting the selected row!"):a.jgrid.hideModal("#"+a.jgrid.jqID(t.themodal),{gb:"#gbox_"+a.jgrid.jqID(o),jqm:d.jqModal,onClose:b[e.p.id].onClose})}else"clientArray"===m.url?(f=m.data,m.complete({status:200,statusText:""},"")):a.ajax(m)}return g[0]===!1&&(a("#DelError>td","#"+r).html(g[1]),a("#DelError","#"+r).show()),!1}),a("#eData","#"+r+"_2").click(function(){return a.jgrid.hideModal("#"+a.jgrid.jqID(t.themodal),{gb:"#gbox_"+a.jgrid.jqID(o),jqm:b[e.p.id].jqModal,onClose:b[e.p.id].onClose}),!1}),l&&b[e.p.id].beforeShowForm.call(e,a("#"+r)),a.jgrid.viewModal("#"+a.jgrid.jqID(t.themodal),{gbox:"#gbox_"+a.jgrid.jqID(o),jqm:b[e.p.id].jqModal,overlay:b[e.p.id].overlay,modal:b[e.p.id].modal}),m&&b[e.p.id].afterShowForm.call(e,a("#"+r))}b[e.p.id].closeOnEscape===!0&&setTimeout(function(){a(".ui-jqdialog-titlebar-close","#"+a.jgrid.jqID(t.modalhead)).attr("tabindex","-1").focus()},0)}})},navGrid:function(b,c,d,e,f,g,h){var
i=a.jgrid.getRegional(this[0],"nav"),j=this[0].p.styleUI,k=a.jgrid.styleUI[j].navigator,l=a.jgrid.styleUI[j].common;return c=a.extend({edit:!0,editicon:k.icon_edit_nav,add:!0,addicon:k.icon_add_nav,del:!0,delicon:k.icon_del_nav,search:!0,searchicon:k.icon_search_nav,refresh:!0,refreshicon:k.icon_refresh_nav,refreshstate:"firstpage",view:!1,viewicon:k.icon_view_nav,position:"left",closeOnEscape:!0,beforeRefresh:null,afterRefresh:null,cloneToTop:!1,alertwidth:200,alertheight:"auto",alerttop:null,alertleft:null,alertzIndex:null,dropmenu:!1,navButtonText:""},i,c||{}),this.each(function(){if(!this.p.navGrid){var
k,m,n,o={themodal:"alertmod_"+this.p.id,modalhead:"alerthd_"+this.p.id,modalcontent:"alertcnt_"+this.p.id},p=this;if(p.grid&&"string"==typeof
b){a(p).data("navGrid")||a(p).data("navGrid",c),n=a(p).data("navGrid"),p.p.force_regional&&(n=a.extend(n,i)),void
0===a("#"+o.themodal)[0]&&(n.alerttop||n.alertleft||(void
0!==window.innerWidth?(n.alertleft=window.innerWidth,n.alerttop=window.innerHeight):void
0!==document.documentElement&&void
0!==document.documentElement.clientWidth&&0!==document.documentElement.clientWidth?(n.alertleft=document.documentElement.clientWidth,n.alerttop=document.documentElement.clientHeight):(n.alertleft=1024,n.alerttop=768),n.alertleft=n.alertleft/2-parseInt(n.alertwidth,10)/2,n.alerttop=n.alerttop/2-25),a.jgrid.createModal(o,"<div>"+n.alerttext+"</div><span tabindex='0'><span tabindex='-1' id='jqg_alrt'></span></span>",{gbox:"#gbox_"+a.jgrid.jqID(p.p.id),jqModal:!0,drag:!0,resize:!0,caption:n.alertcap,top:n.alerttop,left:n.alertleft,width:n.alertwidth,height:n.alertheight,closeOnEscape:n.closeOnEscape,zIndex:n.alertzIndex,styleUI:p.p.styleUI},"#gview_"+a.jgrid.jqID(p.p.id),a("#gbox_"+a.jgrid.jqID(p.p.id))[0],!0));var
q,r=1,s=function(){a(this).hasClass(l.disabled)||a(this).addClass(l.hover)},t=function(){a(this).removeClass(l.hover)};for(n.cloneToTop&&p.p.toppager&&(r=2),q=0;r>q;q++){var
u,v,w,x=a("<table class='ui-pg-table navtable ui-common-table'><tbody><tr></tr></tbody></table>"),y="<td class='ui-pg-button "+l.disabled+"' style='width:4px;'><span class='ui-separator'></span></td>";0===q?(v=b,w=p.p.id,v===p.p.toppager&&(w+="_top",r=1)):(v=p.p.toppager,w=p.p.id+"_top"),"rtl"===p.p.direction&&a(x).attr("dir","rtl").css("float","right"),e=e||{},n.add&&(u=a("<td class='ui-pg-button "+l.cornerall+"'></td>"),a(u).append("<div class='ui-pg-div'><span class='"+l.icon_base+" "+n.addicon+"'></span>"+n.addtext+"</div>"),a("tr",x).append(u),a(u,x).attr({title:n.addtitle||"",id:e.id||"add_"+w}).click(function(){return a(this).hasClass(l.disabled)||(a.isFunction(n.addfunc)?n.addfunc.call(p):a(p).jqGrid("editGridRow","new",e)),!1}).hover(s,t),u=null),d=d||{},n.edit&&(u=a("<td class='ui-pg-button "+l.cornerall+"'></td>"),a(u).append("<div class='ui-pg-div'><span class='"+l.icon_base+" "+n.editicon+"'></span>"+n.edittext+"</div>"),a("tr",x).append(u),a(u,x).attr({title:n.edittitle||"",id:d.id||"edit_"+w}).click(function(){if(!a(this).hasClass(l.disabled)){var
b=p.p.selrow;b?a.isFunction(n.editfunc)?n.editfunc.call(p,b):a(p).jqGrid("editGridRow",b,d):(a.jgrid.viewModal("#"+o.themodal,{gbox:"#gbox_"+a.jgrid.jqID(p.p.id),jqm:!0}),a("#jqg_alrt").focus())}return!1}).hover(s,t),u=null),h=h||{},n.view&&(u=a("<td class='ui-pg-button "+l.cornerall+"'></td>"),a(u).append("<div class='ui-pg-div'><span class='"+l.icon_base+" "+n.viewicon+"'></span>"+n.viewtext+"</div>"),a("tr",x).append(u),a(u,x).attr({title:n.viewtitle||"",id:h.id||"view_"+w}).click(function(){if(!a(this).hasClass(l.disabled)){var
b=p.p.selrow;b?a.isFunction(n.viewfunc)?n.viewfunc.call(p,b):a(p).jqGrid("viewGridRow",b,h):(a.jgrid.viewModal("#"+o.themodal,{gbox:"#gbox_"+a.jgrid.jqID(p.p.id),jqm:!0}),a("#jqg_alrt").focus())}return!1}).hover(s,t),u=null),f=f||{},n.del&&(u=a("<td class='ui-pg-button "+l.cornerall+"'></td>"),a(u).append("<div class='ui-pg-div'><span class='"+l.icon_base+" "+n.delicon+"'></span>"+n.deltext+"</div>"),a("tr",x).append(u),a(u,x).attr({title:n.deltitle||"",id:f.id||"del_"+w}).click(function(){if(!a(this).hasClass(l.disabled)){var
b;p.p.multiselect?(b=p.p.selarrrow,0===b.length&&(b=null)):b=p.p.selrow,b?a.isFunction(n.delfunc)?n.delfunc.call(p,b):a(p).jqGrid("delGridRow",b,f):(a.jgrid.viewModal("#"+o.themodal,{gbox:"#gbox_"+a.jgrid.jqID(p.p.id),jqm:!0}),a("#jqg_alrt").focus())}return!1}).hover(s,t),u=null),(n.add||n.edit||n.del||n.view)&&a("tr",x).append(y),g=g||{},n.search&&(u=a("<td class='ui-pg-button "+l.cornerall+"'></td>"),a(u).append("<div class='ui-pg-div'><span class='"+l.icon_base+" "+n.searchicon+"'></span>"+n.searchtext+"</div>"),a("tr",x).append(u),a(u,x).attr({title:n.searchtitle||"",id:g.id||"search_"+w}).click(function(){return a(this).hasClass(l.disabled)||(a.isFunction(n.searchfunc)?n.searchfunc.call(p,g):a(p).jqGrid("searchGrid",g)),!1}).hover(s,t),g.showOnLoad&&g.showOnLoad===!0&&a(u,x).click(),u=null),n.refresh&&(u=a("<td class='ui-pg-button "+l.cornerall+"'></td>"),a(u).append("<div class='ui-pg-div'><span class='"+l.icon_base+" "+n.refreshicon+"'></span>"+n.refreshtext+"</div>"),a("tr",x).append(u),a(u,x).attr({title:n.refreshtitle||"",id:"refresh_"+w}).click(function(){if(!a(this).hasClass(l.disabled)){a.isFunction(n.beforeRefresh)&&n.beforeRefresh.call(p),p.p.search=!1,p.p.resetsearch=!0;try{if("currentfilter"!==n.refreshstate){var
b=p.p.id;p.p.postData.filters="";try{a("#fbox_"+a.jgrid.jqID(b)).jqFilter("resetFilter")}catch(c){}a.isFunction(p.clearToolbar)&&p.clearToolbar.call(p,!1)}}catch(d){}switch(n.refreshstate){case"firstpage":a(p).trigger("reloadGrid",[{page:1}]);break;case"current":case"currentfilter":a(p).trigger("reloadGrid",[{current:!0}])}a.isFunction(n.afterRefresh)&&n.afterRefresh.call(p)}return!1}).hover(s,t),u=null),m=a(".ui-jqgrid").css("font-size")||"11px",a("body").append("<div id='testpg2' class='ui-jqgrid "+a.jgrid.styleUI[j].base.entrieBox+"' style='font-size:"+m+";visibility:hidden;' ></div>"),k=a(x).clone().appendTo("#testpg2").width(),a("#testpg2").remove(),p.p._nvtd&&(n.dropmenu?(x=null,a(p).jqGrid("_buildNavMenu",v,w,c,d,e,f,g,h)):k>p.p._nvtd[0]?(p.p.responsive?(x=null,a(p).jqGrid("_buildNavMenu",v,w,c,d,e,f,g,h)):a(v+"_"+n.position,v).append(x).width(k),p.p._nvtd[0]=k):a(v+"_"+n.position,v).append(x),p.p._nvtd[1]=k),p.p.navGrid=!0}p.p.storeNavOptions&&(p.p.navOptions=n,p.p.editOptions=d,p.p.addOptions=e,p.p.delOptions=f,p.p.searchOptions=g,p.p.viewOptions=h,p.p.navButtons=[])}}})},navButtonAdd:function(b,c){var
d=this[0].p.styleUI,e=a.jgrid.styleUI[d].navigator;return c=a.extend({caption:"newButton",title:"",buttonicon:e.icon_newbutton_nav,onClickButton:null,position:"last",cursor:"pointer",internal:!1},c||{}),this.each(function(){if(this.grid){"string"==typeof
b&&0!==b.indexOf("#")&&(b="#"+a.jgrid.jqID(b));var
e=a(".navtable",b)[0],f=this,g=a.jgrid.styleUI[d].common.disabled,h=a.jgrid.styleUI[d].common.hover,i=a.jgrid.styleUI[d].common.cornerall,j=a.jgrid.styleUI[d].common.icon_base;if(f.p.storeNavOptions&&!c.internal&&f.p.navButtons.push([b,c]),e){if(c.id&&void
0!==a("#"+a.jgrid.jqID(c.id),e)[0])return;var
k=a("<td></td>");"NONE"===c.buttonicon.toString().toUpperCase()?a(k).addClass("ui-pg-button "+i).append("<div class='ui-pg-div'>"+c.caption+"</div>"):a(k).addClass("ui-pg-button "+i).append("<div class='ui-pg-div'><span class='"+j+" "+c.buttonicon+"'></span>"+c.caption+"</div>"),c.id&&a(k).attr("id",c.id),"first"===c.position?0===e.rows[0].cells.length?a("tr",e).append(k):a("tr td:eq(0)",e).before(k):a("tr",e).append(k),a(k,e).attr("title",c.title||"").click(function(b){return a(this).hasClass(g)||a.isFunction(c.onClickButton)&&c.onClickButton.call(f,b),!1}).hover(function(){a(this).hasClass(g)||a(this).addClass(h)},function(){a(this).removeClass(h)})}else
if(e=a(".dropdownmenu",b)[0]){var
l=a(e).val(),m=c.id||a.jgrid.randId(),n=a('<li class="ui-menu-item" role="presentation"><a class="'+i+' g-menu-item" tabindex="0" role="menuitem" id="'+m+'">'+(c.caption||c.title)+"</a></li>");l&&("first"===c.position?a("#"+l).prepend(n):a("#"+l).append(n),a(n).on("click",function(b){return a(this).hasClass(g)||(a("#"+l).hide(),a.isFunction(c.onClickButton)&&c.onClickButton.call(f,b)),!1}).find("a").hover(function(){a(this).hasClass(g)||a(this).addClass(h)},function(){a(this).removeClass(h)}))}}})},navSeparatorAdd:function(b,c){var
d=this[0].p.styleUI,e=a.jgrid.styleUI[d].common;return c=a.extend({sepclass:"ui-separator",sepcontent:"",position:"last"},c||{}),this.each(function(){if(this.grid){"string"==typeof
b&&0!==b.indexOf("#")&&(b="#"+a.jgrid.jqID(b));var
d,f,g=a(".navtable",b)[0];this.p.storeNavOptions&&this.p.navButtons.push([b,c]),g?(d="<td class='ui-pg-button "+e.disabled+"' style='width:4px;'><span class='"+c.sepclass+"'></span>"+c.sepcontent+"</td>","first"===c.position?0===g.rows[0].cells.length?a("tr",g).append(d):a("tr td:eq(0)",g).before(d):a("tr",g).append(d)):(g=a(".dropdownmenu",b)[0],d="<li class='ui-menu-item "+e.disabled+"' style='width:100%' role='presentation'><hr class='ui-separator-li'></li>",g&&(f=a(g).val(),f&&("first"===c.position?a("#"+f).prepend(d):a("#"+f).append(d))))}})},_buildNavMenu:function(b,c,d,e,f,g,h,i){return this.each(function(){var
j=this,k=a.jgrid.getRegional(j,"nav"),l=j.p.styleUI,m=(a.jgrid.styleUI[l].navigator,a.jgrid.styleUI[l].filter),n=a.jgrid.styleUI[l].common,o="form_menu_"+a.jgrid.randId(),p=d.navButtonText?d.navButtonText:k.selectcaption||"Actions",q="<button class='dropdownmenu "+n.button+"' value='"+o+"'>"+p+"</button>";a(b+"_"+d.position,b).append(q);var
r={themodal:"alertmod_"+this.p.id,modalhead:"alerthd_"+this.p.id,modalcontent:"alertcnt_"+this.p.id},s=function(){var
b,k,l=a(".ui-jqgrid-view").css("font-size")||"11px",p=a('<ul id="'+o+'" class="ui-nav-menu modal-content" role="menu" tabindex="0" style="display:none;font-size:'+l+'"></ul>');d.add&&(f=f||{},b=f.id||"add_"+c,k=a('<li class="ui-menu-item" role="presentation"><a class="'+n.cornerall+' g-menu-item" tabindex="0" role="menuitem" id="'+b+'">'+(d.addtext||d.addtitle)+"</a></li>").click(function(){return a(this).hasClass(n.disabled)||(a.isFunction(d.addfunc)?d.addfunc.call(j):a(j).jqGrid("editGridRow","new",f),a(p).hide()),!1}),a(p).append(k)),d.edit&&(e=e||{},b=e.id||"edit_"+c,k=a('<li class="ui-menu-item" role="presentation"><a class="'+n.cornerall+' g-menu-item" tabindex="0" role="menuitem" id="'+b+'">'+(d.edittext||d.edittitle)+"</a></li>").click(function(){if(!a(this).hasClass(n.disabled)){var
b=j.p.selrow;b?a.isFunction(d.editfunc)?d.editfunc.call(j,b):a(j).jqGrid("editGridRow",b,e):(a.jgrid.viewModal("#"+r.themodal,{gbox:"#gbox_"+a.jgrid.jqID(j.p.id),jqm:!0}),a("#jqg_alrt").focus()),a(p).hide()}return!1}),a(p).append(k)),d.view&&(i=i||{},b=i.id||"view_"+c,k=a('<li class="ui-menu-item" role="presentation"><a class="'+n.cornerall+' g-menu-item" tabindex="0" role="menuitem" id="'+b+'">'+(d.viewtext||d.viewtitle)+"</a></li>").click(function(){if(!a(this).hasClass(n.disabled)){var
b=j.p.selrow;b?a.isFunction(d.editfunc)?d.viewfunc.call(j,b):a(j).jqGrid("viewGridRow",b,i):(a.jgrid.viewModal("#"+r.themodal,{gbox:"#gbox_"+a.jgrid.jqID(j.p.id),jqm:!0}),a("#jqg_alrt").focus()),a(p).hide()}return!1}),a(p).append(k)),d.del&&(g=g||{},b=g.id||"del_"+c,k=a('<li class="ui-menu-item" role="presentation"><a class="'+n.cornerall+' g-menu-item" tabindex="0" role="menuitem" id="'+b+'">'+(d.deltext||d.deltitle)+"</a></li>").click(function(){if(!a(this).hasClass(n.disabled)){var
b;j.p.multiselect?(b=j.p.selarrrow,0===b.length&&(b=null)):b=j.p.selrow,b?a.isFunction(d.delfunc)?d.delfunc.call(j,b):a(j).jqGrid("delGridRow",b,g):(a.jgrid.viewModal("#"+r.themodal,{gbox:"#gbox_"+a.jgrid.jqID(j.p.id),jqm:!0}),a("#jqg_alrt").focus()),a(p).hide()}return!1}),a(p).append(k)),(d.add||d.edit||d.del||d.view)&&a(p).append("<li class='ui-menu-item "+n.disabled+"' style='width:100%' role='presentation'><hr class='ui-separator-li'></li>"),d.search&&(h=h||{},b=h.id||"search_"+c,k=a('<li class="ui-menu-item" role="presentation"><a class="'+n.cornerall+' g-menu-item" tabindex="0" role="menuitem" id="'+b+'">'+(d.searchtext||d.searchtitle)+"</a></li>").click(function(){return a(this).hasClass(n.disabled)||(a.isFunction(d.searchfunc)?d.searchfunc.call(j,h):a(j).jqGrid("searchGrid",h),a(p).hide()),!1}),a(p).append(k),h.showOnLoad&&h.showOnLoad===!0&&a(k).click()),d.refresh&&(b=h.id||"search_"+c,k=a('<li class="ui-menu-item" role="presentation"><a class="'+n.cornerall+' g-menu-item" tabindex="0" role="menuitem" id="'+b+'">'+(d.refreshtext||d.refreshtitle)+"</a></li>").click(function(){if(!a(this).hasClass(n.disabled)){a.isFunction(d.beforeRefresh)&&d.beforeRefresh.call(j),j.p.search=!1,j.p.resetsearch=!0;try{if("currentfilter"!==d.refreshstate){var
b=j.p.id;j.p.postData.filters="";try{a("#fbox_"+a.jgrid.jqID(b)).jqFilter("resetFilter")}catch(c){}a.isFunction(j.clearToolbar)&&j.clearToolbar.call(j,!1)}}catch(e){}switch(d.refreshstate){case"firstpage":a(j).trigger("reloadGrid",[{page:1}]);break;case"current":case"currentfilter":a(j).trigger("reloadGrid",[{current:!0}])}a.isFunction(d.afterRefresh)&&d.afterRefresh.call(j),a(p).hide()}return!1}),a(p).append(k)),a(p).hide(),a("body").append(p),a("#"+o).addClass("ui-menu "+m.menu_widget),a("#"+o+" > li > a").hover(function(){a(this).addClass(n.hover)},function(){a(this).removeClass(n.hover)})};s(),a(".dropdownmenu",b+"_"+d.position).on("click",function(b){var
c=a(this).offset(),d=c.left,e=parseInt(c.top),f=a(this).val();a("#"+f).show().css({top:e-(a("#"+f).height()+10)+"px",left:d+"px"}),b.stopPropagation()}),a("body").on("click",function(b){a(b.target).hasClass("dropdownmenu")||a("#"+o).hide()})})},GridToForm:function(b,c){return this.each(function(){var
d,e=this;if(e.grid){var
f=a(e).jqGrid("getRowData",b);if(f)for(d
in
f)f.hasOwnProperty(d)&&(a("[name="+a.jgrid.jqID(d)+"]",c).is("input:radio")||a("[name="+a.jgrid.jqID(d)+"]",c).is("input:checkbox")?a("[name="+a.jgrid.jqID(d)+"]",c).each(function(){a(this).val()==f[d]?a(this)[e.p.useProp?"prop":"attr"]("checked",!0):a(this)[e.p.useProp?"prop":"attr"]("checked",!1)}):a("[name="+a.jgrid.jqID(d)+"]",c).val(f[d]))}})},FormToGrid:function(b,c,d,e){return this.each(function(){var
f=this;if(f.grid){d||(d="set"),e||(e="first");var
g=a(c).serializeArray(),h={};a.each(g,function(a,b){h[b.name]=b.value}),"add"===d?a(f).jqGrid("addRowData",b,h,e):"set"===d&&a(f).jqGrid("setRowData",b,h)}})}})});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery","./grid.base","./grid.common"],a):a(jQuery)}(function(a){"use strict";a.fn.jqFilter=function(b){if("string"==typeof
b){var
c=a.fn.jqFilter[b];if(!c)throw"jqFilter - No such method: "+b;var
d=a.makeArray(arguments).slice(1);return c.apply(this,d)}var
e=a.extend(!0,{filter:null,columns:[],sortStrategy:null,onChange:null,afterRedraw:null,checkValues:null,error:!1,errmsg:"",errorcheck:!0,showQuery:!0,sopt:null,ops:[],operands:null,numopts:["eq","ne","lt","le","gt","ge","nu","nn","in","ni"],stropts:["eq","ne","bw","bn","ew","en","cn","nc","nu","nn","in","ni"],strarr:["text","string","blob"],groupOps:[{op:"AND",text:"AND"},{op:"OR",text:"OR"}],groupButton:!0,ruleButtons:!0,direction:"ltr"},a.jgrid.filter,b||{});return this.each(function(){if(!this.filter){this.p=e,(null===this.p.filter||void
0===this.p.filter)&&(this.p.filter={groupOp:this.p.groupOps[0].op,rules:[],groups:[]}),null!=this.p.sortStrategy&&a.isFunction(this.p.sortStrategy)&&this.p.columns.sort(this.p.sortStrategy);var
b,c,d=this.p.columns.length,f=/msie/i.test(navigator.userAgent)&&!window.opera;if(this.p.initFilter=a.extend(!0,{},this.p.filter),d){for(b=0;d>b;b++)c=this.p.columns[b],c.stype?c.inputtype=c.stype:c.inputtype||(c.inputtype="text"),c.sorttype?c.searchtype=c.sorttype:c.searchtype||(c.searchtype="string"),void
0===c.hidden&&(c.hidden=!1),c.label||(c.label=c.name),c.index&&(c.name=c.index),c.hasOwnProperty("searchoptions")||(c.searchoptions={}),c.hasOwnProperty("searchrules")||(c.searchrules={});var
g=function(){return a("#"+a.jgrid.jqID(e.id))[0]||null},h=g(),i=a.jgrid.styleUI[h.p.styleUI||"jQueryUI"].filter,j=a.jgrid.styleUI[h.p.styleUI||"jQueryUI"].common;this.p.showQuery&&a(this).append("<table class='queryresult "+i.table_widget+"' style='display:block;max-width:440px;border:0px none;' dir='"+this.p.direction+"'><tbody><tr><td class='query'></td></tr></tbody></table>");var
k=function(b,c){var
d=[!0,""],f=g();if(a.isFunction(c.searchrules))d=c.searchrules.call(f,b,c);else
if(a.jgrid&&a.jgrid.checkValues)try{d=a.jgrid.checkValues.call(f,b,-1,c.searchrules,c.label)}catch(h){}d&&d.length&&d[0]===!1&&(e.error=!d[0],e.errmsg=d[1])};this.onchange=function(){return this.p.error=!1,this.p.errmsg="",a.isFunction(this.p.onChange)?this.p.onChange.call(this,this.p):!1},this.reDraw=function(){a("table.group:first",this).remove();var
b=this.createTableForGroup(e.filter,null);a(this).append(b),a.isFunction(this.p.afterRedraw)&&this.p.afterRedraw.call(this,this.p)},this.createTableForGroup=function(b,c){var
d,f=this,g=a("<table class='group "+i.table_widget+" ui-search-table' style='border:0px none;'><tbody></tbody></table>"),h="left";"rtl"===this.p.direction&&(h="right",g.attr("dir","rtl")),null===c&&g.append("<tr class='error' style='display:none;'><th colspan='5' class='"+j.error+"' align='"+h+"'></th></tr>");var
k=a("<tr></tr>");g.append(k);var
l=a("<th colspan='5' align='"+h+"'></th>");if(k.append(l),this.p.ruleButtons===!0){var
m=a("<select class='opsel "+i.srSelect+"'></select>");l.append(m);var
n,o="";for(d=0;d<e.groupOps.length;d++)n=b.groupOp===f.p.groupOps[d].op?" selected='selected'":"",o+="<option value='"+f.p.groupOps[d].op+"'"+n+">"+f.p.groupOps[d].text+"</option>";m.append(o).bind("change",function(){b.groupOp=a(m).val(),f.onchange()})}var
p="<span></span>";if(this.p.groupButton&&(p=a("<input type='button' value='+ {}' title='Add subgroup' class='add-group "+j.button+"'/>"),p.bind("click",function(){return void
0===b.groups&&(b.groups=[]),b.groups.push({groupOp:e.groupOps[0].op,rules:[],groups:[]}),f.reDraw(),f.onchange(),!1})),l.append(p),this.p.ruleButtons===!0){var
q,r=a("<input type='button' value='+' title='Add rule' class='add-rule ui-add "+j.button+"'/>");r.bind("click",function(){for(void
0===b.rules&&(b.rules=[]),d=0;d<f.p.columns.length;d++){var
c=void
0===f.p.columns[d].search?!0:f.p.columns[d].search,e=f.p.columns[d].hidden===!0,g=f.p.columns[d].searchoptions.searchhidden===!0;if(g&&c||c&&!e){q=f.p.columns[d];break}}var
h;return h=q.searchoptions.sopt?q.searchoptions.sopt:f.p.sopt?f.p.sopt:-1!==a.inArray(q.searchtype,f.p.strarr)?f.p.stropts:f.p.numopts,b.rules.push({field:q.name,op:h[0],data:""}),f.reDraw(),!1}),l.append(r)}if(null!==c){var
s=a("<input type='button' value='-' title='Delete group' class='delete-group "+j.button+"'/>");l.append(s),s.bind("click",function(){for(d=0;d<c.groups.length;d++)if(c.groups[d]===b){c.groups.splice(d,1);break}return f.reDraw(),f.onchange(),!1})}if(void
0!==b.groups)for(d=0;d<b.groups.length;d++){var
t=a("<tr></tr>");g.append(t);var
u=a("<td class='first'></td>");t.append(u);var
v=a("<td colspan='4'></td>");v.append(this.createTableForGroup(b.groups[d],b)),t.append(v)}if(void
0===b.groupOp&&(b.groupOp=f.p.groupOps[0].op),void
0!==b.rules)for(d=0;d<b.rules.length;d++)g.append(this.createTableRowForRule(b.rules[d],b));return g},this.createTableRowForRule=function(b,c){var
d,h,k,l,m,n=this,o=g(),p=a("<tr></tr>"),q="";p.append("<td class='first'></td>");var
r=a("<td class='columns'></td>");p.append(r);var
s,t=a("<select class='"+i.srSelect+"'></select>"),u=[];r.append(t),t.bind("change",function(){for(b.field=a(t).val(),k=a(this).parents("tr:first"),a(".data",k).empty(),d=0;d<n.p.columns.length;d++)if(n.p.columns[d].name===b.field){l=n.p.columns[d];break}if(l){l.searchoptions.id=a.jgrid.randId(),l.searchoptions.name=b.field,l.searchoptions.oper="filter",f&&"text"===l.inputtype&&(l.searchoptions.size||(l.searchoptions.size=10));var
c=a.jgrid.createEl.call(o,l.inputtype,l.searchoptions,"",!0,n.p.ajaxSelectOptions||{},!0);a(c).addClass("input-elm "+i.srInput),h=l.searchoptions.sopt?l.searchoptions.sopt:n.p.sopt?n.p.sopt:-1!==a.inArray(l.searchtype,n.p.strarr)?n.p.stropts:n.p.numopts;var
e="",g=0;for(u=[],a.each(n.p.ops,function(){u.push(this.oper)}),d=0;d<h.length;d++)s=a.inArray(h[d],u),-1!==s&&(0===g&&(b.op=n.p.ops[s].oper),e+="<option value='"+n.p.ops[s].oper+"'>"+n.p.ops[s].text+"</option>",g++);if(a(".selectopts",k).empty().append(e),a(".selectopts",k)[0].selectedIndex=0,a.jgrid.msie&&a.jgrid.msiever()<9){var
j=parseInt(a("select.selectopts",k)[0].offsetWidth,10)+1;a(".selectopts",k).width(j),a(".selectopts",k).css("width","auto")}a(".data",k).append(c),a.jgrid.bindEv.call(o,c,l.searchoptions),a(".input-elm",k).bind("change",function(c){var
d=c.target;b.data="SPAN"===d.nodeName.toUpperCase()&&l.searchoptions&&a.isFunction(l.searchoptions.custom_value)?l.searchoptions.custom_value.call(o,a(d).children(".customelement:first"),"get"):d.value,n.onchange()}),setTimeout(function(){b.data=a(c).val(),n.onchange()},0)}});var
v=0;for(d=0;d<n.p.columns.length;d++){var
w=void
0===n.p.columns[d].search?!0:n.p.columns[d].search,x=n.p.columns[d].hidden===!0,y=n.p.columns[d].searchoptions.searchhidden===!0;(y&&w||w&&!x)&&(m="",b.field===n.p.columns[d].name&&(m=" selected='selected'",v=d),q+="<option value='"+n.p.columns[d].name+"'"+m+">"+n.p.columns[d].label+"</option>")}t.append(q);var
z=a("<td class='operators'></td>");p.append(z),l=e.columns[v],l.searchoptions.id=a.jgrid.randId(),f&&"text"===l.inputtype&&(l.searchoptions.size||(l.searchoptions.size=10)),l.searchoptions.name=b.field,l.searchoptions.oper="filter";var
A=a.jgrid.createEl.call(o,l.inputtype,l.searchoptions,b.data,!0,n.p.ajaxSelectOptions||{},!0);("nu"===b.op||"nn"===b.op)&&(a(A).attr("readonly","true"),a(A).attr("disabled","true"));var
B=a("<select class='selectopts "+i.srSelect+"'></select>");for(z.append(B),B.bind("change",function(){b.op=a(B).val(),k=a(this).parents("tr:first");var
c=a(".input-elm",k)[0];"nu"===b.op||"nn"===b.op?(b.data="","SELECT"!==c.tagName.toUpperCase()&&(c.value=""),c.setAttribute("readonly","true"),c.setAttribute("disabled","true")):("SELECT"===c.tagName.toUpperCase()&&(b.data=c.value),c.removeAttribute("readonly"),c.removeAttribute("disabled")),n.onchange()}),h=l.searchoptions.sopt?l.searchoptions.sopt:n.p.sopt?n.p.sopt:-1!==a.inArray(l.searchtype,n.p.strarr)?n.p.stropts:n.p.numopts,q="",a.each(n.p.ops,function(){u.push(this.oper)}),d=0;d<h.length;d++)s=a.inArray(h[d],u),-1!==s&&(m=b.op===n.p.ops[s].oper?" selected='selected'":"",q+="<option value='"+n.p.ops[s].oper+"'"+m+">"+n.p.ops[s].text+"</option>");B.append(q);var
C=a("<td class='data'></td>");p.append(C),C.append(A),a.jgrid.bindEv.call(o,A,l.searchoptions),a(A).addClass("input-elm "+i.srInput).bind("change",function(){b.data="custom"===l.inputtype?l.searchoptions.custom_value.call(o,a(this).children(".customelement:first"),"get"):a(this).val(),n.onchange()});var
D=a("<td></td>");if(p.append(D),this.p.ruleButtons===!0){var
E=a("<input type='button' value='-' title='Delete rule' class='delete-rule ui-del "+j.button+"'/>");D.append(E),E.bind("click",function(){for(d=0;d<c.rules.length;d++)if(c.rules[d]===b){c.rules.splice(d,1);break}return n.reDraw(),n.onchange(),!1})}return p},this.getStringForGroup=function(a){var
b,c="(";if(void
0!==a.groups)for(b=0;b<a.groups.length;b++){c.length>1&&(c+=" "+a.groupOp+" ");try{c+=this.getStringForGroup(a.groups[b])}catch(d){alert(d)}}if(void
0!==a.rules)try{for(b=0;b<a.rules.length;b++)c.length>1&&(c+=" "+a.groupOp+" "),c+=this.getStringForRule(a.rules[b])}catch(e){alert(e)}return c+=")","()"===c?"":c},this.getStringForRule=function(b){var
c,d,f,g,h="",i="",j=["int","integer","float","number","currency"];for(c=0;c<this.p.ops.length;c++)if(this.p.ops[c].oper===b.op){h=this.p.operands.hasOwnProperty(b.op)?this.p.operands[b.op]:"",i=this.p.ops[c].oper;break}for(c=0;c<this.p.columns.length;c++)if(this.p.columns[c].name===b.field){d=this.p.columns[c];break}return void
0===d?"":(g=b.data,("bw"===i||"bn"===i)&&(g+="%"),("ew"===i||"en"===i)&&(g="%"+g),("cn"===i||"nc"===i)&&(g="%"+g+"%"),("in"===i||"ni"===i)&&(g=" ("+g+")"),e.errorcheck&&k(b.data,d),f=-1!==a.inArray(d.searchtype,j)||"nn"===i||"nu"===i?b.field+" "+h+" "+g:b.field+" "+h+' "'+g+'"')},this.resetFilter=function(){this.p.filter=a.extend(!0,{},this.p.initFilter),this.reDraw(),this.onchange()},this.hideError=function(){a("th."+j.error,this).html(""),a("tr.error",this).hide()},this.showError=function(){a("th."+j.error,this).html(this.p.errmsg),a("tr.error",this).show()},this.toUserFriendlyString=function(){return this.getStringForGroup(e.filter)},this.toString=function(){function
a(a){if(c.p.errorcheck){var
b,d;for(b=0;b<c.p.columns.length;b++)if(c.p.columns[b].name===a.field){d=c.p.columns[b];break}d&&k(a.data,d)}return a.op+"(item."+a.field+",'"+a.data+"')"}function
b(c){var
d,e="(";if(void
0!==c.groups)for(d=0;d<c.groups.length;d++)e.length>1&&(e+="OR"===c.groupOp?" || ":" && "),e+=b(c.groups[d]);if(void
0!==c.rules)for(d=0;d<c.rules.length;d++)e.length>1&&(e+="OR"===c.groupOp?" || ":" && "),e+=a(c.rules[d]);return e+=")","()"===e?"":e}var
c=this;return b(this.p.filter)},this.reDraw(),this.p.showQuery&&this.onchange(),this.filter=!0}}})},a.extend(a.fn.jqFilter,{toSQLString:function(){var
a="";return this.each(function(){a=this.toUserFriendlyString()}),a},filterData:function(){var
a;return this.each(function(){a=this.p.filter}),a},getParameter:function(a){return void
0!==a&&this.p.hasOwnProperty(a)?this.p[a]:this.p},resetFilter:function(){return this.each(function(){this.resetFilter()})},addFilter:function(b){"string"==typeof
b&&(b=a.jgrid.parse(b)),this.each(function(){this.p.filter=b,this.reDraw(),this.onchange()})}}),a.jgrid.extend({filterToolbar:function(b){var
c=a.jgrid.getRegional(this[0],"search");return b=a.extend({autosearch:!0,autosearchDelay:500,searchOnEnter:!0,beforeSearch:null,afterSearch:null,beforeClear:null,afterClear:null,searchurl:"",stringResult:!1,groupOp:"AND",defaultSearch:"bw",searchOperators:!1,resetIcon:"x",operands:{eq:"==",ne:"!",lt:"<",le:"<=",gt:">",ge:">=",bw:"^",bn:"!^","in":"=",ni:"!=",ew:"|",en:"!@",cn:"~",nc:"!~",nu:"#",nn:"!#"}},c,b||{}),this.each(function(){var
d=this;if(!d.p.filterToolbar){a(d).data("filterToolbar")||a(d).data("filterToolbar",b),d.p.force_regional&&(b=a.extend(b,c));var
e,f,g,h=a.jgrid.styleUI[d.p.styleUI||"jQueryUI"].filter,i=a.jgrid.styleUI[d.p.styleUI||"jQueryUI"].common,j=a.jgrid.styleUI[d.p.styleUI||"jQueryUI"].base,k=function(){var
c,e,f,g={},h=0,i={};a.each(d.p.colModel,function(){var
j=a("#gs_"+d.p.idPrefix+a.jgrid.jqID(this.name),this.frozen===!0&&d.p.frozenColumns===!0?d.grid.fhDiv:d.grid.hDiv);if(e=this.index||this.name,f=b.searchOperators?j.parent().prev().children("a").attr("soper")||b.defaultSearch:this.searchoptions&&this.searchoptions.sopt?this.searchoptions.sopt[0]:"select"===this.stype?"eq":b.defaultSearch,c="custom"===this.stype&&a.isFunction(this.searchoptions.custom_value)&&j.length>0&&"SPAN"===j[0].nodeName.toUpperCase()?this.searchoptions.custom_value.call(d,j.children(".customelement:first"),"get"):j.val(),c||"nu"===f||"nn"===f)g[e]=c,i[e]=f,h++;else
try{delete
d.p.postData[e]}catch(k){}});var
j=h>0?!0:!1;if(b.stringResult===!0||"local"===d.p.datatype||b.searchOperators===!0){var
k='{"groupOp":"'+b.groupOp+'","rules":[',l=0;a.each(g,function(a,b){l>0&&(k+=","),k+='{"field":"'+a+'",',k+='"op":"'+i[a]+'",',b+="",k+='"data":"'+b.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}',l++}),k+="]}",a.extend(d.p.postData,{filters:k}),a.each(["searchField","searchString","searchOper"],function(a,b){d.p.postData.hasOwnProperty(b)&&delete
d.p.postData[b]})}else
a.extend(d.p.postData,g);var
m;d.p.searchurl&&(m=d.p.url,a(d).jqGrid("setGridParam",{url:d.p.searchurl}));var
n="stop"===a(d).triggerHandler("jqGridToolbarBeforeSearch")?!0:!1;!n&&a.isFunction(b.beforeSearch)&&(n=b.beforeSearch.call(d)),n||a(d).jqGrid("setGridParam",{search:j}).trigger("reloadGrid",[{page:1}]),m&&a(d).jqGrid("setGridParam",{url:m}),a(d).triggerHandler("jqGridToolbarAfterSearch"),a.isFunction(b.afterSearch)&&b.afterSearch.call(d)},l=function(c){var
e,f={},g=0;c="boolean"!=typeof
c?!0:c,a.each(d.p.colModel,function(){var
b,c=a("#gs_"+d.p.idPrefix+a.jgrid.jqID(this.name),this.frozen===!0&&d.p.frozenColumns===!0?d.grid.fhDiv:d.grid.hDiv);switch(this.searchoptions&&void
0!==this.searchoptions.defaultValue&&(b=this.searchoptions.defaultValue),e=this.index||this.name,this.stype){case"select":if(c.find("option").each(function(c){return 0===c&&(this.selected=!0),a(this).val()===b?(this.selected=!0,!1):void
0}),void
0!==b)f[e]=b,g++;else
try{delete
d.p.postData[e]}catch(h){}break;case"text":if(c.val(b||""),void
0!==b)f[e]=b,g++;else
try{delete
d.p.postData[e]}catch(i){}break;case"custom":a.isFunction(this.searchoptions.custom_value)&&c.length>0&&"SPAN"===c[0].nodeName.toUpperCase()&&this.searchoptions.custom_value.call(d,c.children(".customelement:first"),"set",b||"")}});var
h=g>0?!0:!1;if(d.p.resetsearch=!0,b.stringResult===!0||"local"===d.p.datatype){var
i='{"groupOp":"'+b.groupOp+'","rules":[',j=0;a.each(f,function(a,b){j>0&&(i+=","),i+='{"field":"'+a+'",',i+='"op":"eq",',b+="",i+='"data":"'+b.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}',j++}),i+="]}",a.extend(d.p.postData,{filters:i}),a.each(["searchField","searchString","searchOper"],function(a,b){d.p.postData.hasOwnProperty(b)&&delete
d.p.postData[b]})}else
a.extend(d.p.postData,f);var
k;d.p.searchurl&&(k=d.p.url,a(d).jqGrid("setGridParam",{url:d.p.searchurl}));var
l="stop"===a(d).triggerHandler("jqGridToolbarBeforeClear")?!0:!1;!l&&a.isFunction(b.beforeClear)&&(l=b.beforeClear.call(d)),l||c&&a(d).jqGrid("setGridParam",{search:h}).trigger("reloadGrid",[{page:1}]),k&&a(d).jqGrid("setGridParam",{url:k}),a(d).triggerHandler("jqGridToolbarAfterClear"),a.isFunction(b.afterClear)&&b.afterClear()},m=function(){var
b=a("tr.ui-search-toolbar",d.grid.hDiv),c=d.p.frozenColumns===!0?a("tr.ui-search-toolbar",d.grid.fhDiv):!1;"none"===b.css("display")?(b.show(),c&&c.show()):(b.hide(),c&&c.hide())},n=function(c,e,f){a("#sopt_menu").remove(),e=parseInt(e,10),f=parseInt(f,10)+18;for(var
g,j,l=a(".ui-jqgrid-view").css("font-size")||"11px",m='<ul id="sopt_menu" class="ui-search-menu modal-content" role="menu" tabindex="0" style="font-size:'+l+";left:"+e+"px;top:"+f+'px;">',n=a(c).attr("soper"),o=[],p=0,q=a(c).attr("colname"),r=d.p.colModel.length;r>p&&d.p.colModel[p].name!==q;)p++;var
s=d.p.colModel[p],t=a.extend({},s.searchoptions);for(t.sopt||(t.sopt=[],t.sopt[0]="select"===s.stype?"eq":b.defaultSearch),a.each(b.odata,function(){o.push(this.oper)}),p=0;p<t.sopt.length;p++)j=a.inArray(t.sopt[p],o),-1!==j&&(g=n===b.odata[j].oper?i.highlight:"",m+='<li class="ui-menu-item '+g+'" role="presentation"><a class="'+i.cornerall+' g-menu-item" tabindex="0" role="menuitem" value="'+b.odata[j].oper+'" oper="'+b.operands[b.odata[j].oper]+'"><table class="ui-common-table"><tr><td width="25px">'+b.operands[b.odata[j].oper]+"</td><td>"+b.odata[j].text+"</td></tr></table></a></li>");m+="</ul>",a("body").append(m),a("#sopt_menu").addClass("ui-menu "+h.menu_widget),a("#sopt_menu > li > a").hover(function(){a(this).addClass(i.hover)},function(){a(this).removeClass(i.hover)}).click(function(){var
e=a(this).attr("value"),f=a(this).attr("oper");if(a(d).triggerHandler("jqGridToolbarSelectOper",[e,f,c]),a("#sopt_menu").hide(),a(c).text(f).attr("soper",e),b.autosearch===!0){var
g=a(c).parent().next().children()[0];(a(g).val()||"nu"===e||"nn"===e)&&k()}})},o=a("<tr class='ui-search-toolbar' role='row'></tr>");b.restoreFromFilters&&(g=d.p.postData.filters,g&&("string"==typeof
g&&(g=a.jgrid.parse(g)),f=g.rules.length?g.rules:!1)),a.each(d.p.colModel,function(c){var
g,i,l,m,n,p,q,r,s=this,t="",u="=",v=a("<th role='columnheader' class='"+j.headerBox+" ui-th-"+d.p.direction+"' id='gsh_"+d.p.id+"_"+s.name+"' ></th>"),w=a("<div></div>"),x=a("<table class='ui-search-table' cellspacing='0'><tr><td class='ui-search-oper' headers=''></td><td class='ui-search-input' headers=''></td><td class='ui-search-clear' headers=''></td></tr></table>");if(this.hidden===!0&&a(v).css("display","none"),this.search=this.search===!1?!1:!0,void
0===this.stype&&(this.stype="text"),g=a.extend({},this.searchoptions||{},{name:s.index||s.name,id:"gs_"+d.p.idPrefix+s.name,oper:"search"}),this.search){if(b.restoreFromFilters&&f){r=!1;for(var
y=0;y<f.length;y++)if(f[y].field){var
z=s.index||s.name;if(z===f[y].field){r=f[y];break}}}if(b.searchOperators){for(i=g.sopt?g.sopt[0]:"select"===s.stype?"eq":b.defaultSearch,b.restoreFromFilters&&r&&(i=r.op),l=0;l<b.odata.length;l++)if(b.odata[l].oper===i){u=b.operands[i]||"";break}m=null!=g.searchtitle?g.searchtitle:b.operandTitle,t="<a title='"+m+"' style='padding-right: 0.5em;' soper='"+i+"' class='soptclass' colname='"+this.name+"'>"+u+"</a>"}switch(a("td:eq(0)",x).attr("colindex",c).append(t),void
0===g.clearSearch&&(g.clearSearch=!0),g.clearSearch?(n=b.resetTitle||"Clear Search Value",a("td:eq(2)",x).append("<a title='"+n+"' style='padding-right: 0.3em;padding-left: 0.3em;' class='clearsearchclass'>"+b.resetIcon+"</a>")):a("td:eq(2)",x).hide(),this.surl&&(g.dataUrl=this.surl),p="",g.defaultValue&&(p=a.isFunction(g.defaultValue)?g.defaultValue.call(d):g.defaultValue),b.restoreFromFilters&&r&&(p=r.data),q=a.jgrid.createEl.call(d,this.stype,g,p,!1,a.extend({},a.jgrid.ajaxOptions,d.p.ajaxSelectOptions||{})),a(q).addClass(h.srInput),a("td:eq(1)",x).append(q),a(w).append(x),null==g.dataEvents&&(g.dataEvents=[]),this.stype){case"select":b.autosearch===!0&&g.dataEvents.push({type:"change",fn:function(){return k(),!1}});break;case"text":b.autosearch===!0&&(b.searchOnEnter?g.dataEvents.push({type:"keypress",fn:function(a){var
b=a.charCode||a.keyCode||0;return 13===b?(k(),!1):this}}):g.dataEvents.push({type:"keydown",fn:function(a){var
c=a.which;switch(c){case
13:return!1;case
9:case
16:case
37:case
38:case
39:case
40:case
27:break;default:e&&clearTimeout(e),e=setTimeout(function(){k()},b.autosearchDelay)}}}))}a.jgrid.bindEv.call(d,q,g)}a(v).append(w),a(o).append(v),b.searchOperators||a("td:eq(0)",x).hide()}),a("table thead",d.grid.hDiv).append(o),b.searchOperators&&(a(".soptclass",o).click(function(b){var
c=a(this).offset(),d=c.left,e=c.top;n(this,d,e),b.stopPropagation()}),a("body").on("click",function(b){"soptclass"!==b.target.className&&a("#sopt_menu").hide()})),a(".clearsearchclass",o).click(function(){var
c=a(this).parents("tr:first"),e=parseInt(a("td.ui-search-oper",c).attr("colindex"),10),f=a.extend({},d.p.colModel[e].searchoptions||{}),g=f.defaultValue?f.defaultValue:"";"select"===d.p.colModel[e].stype?g?a("td.ui-search-input select",c).val(g):a("td.ui-search-input select",c)[0].selectedIndex=0:a("td.ui-search-input input",c).val(g),b.autosearch===!0&&k()}),this.p.filterToolbar=!0,this.triggerToolbar=k,this.clearToolbar=l,this.toggleToolbar=m}})},destroyFilterToolbar:function(){return this.each(function(){this.p.filterToolbar&&(this.triggerToolbar=null,this.clearToolbar=null,this.toggleToolbar=null,this.p.filterToolbar=!1,a(this.grid.hDiv).find("table thead tr.ui-search-toolbar").remove())})},searchGrid:function(b){var
c=a.jgrid.getRegional(this[0],"search");return b=a.extend(!0,{recreateFilter:!1,drag:!0,sField:"searchField",sValue:"searchString",sOper:"searchOper",sFilter:"filters",loadDefaults:!0,beforeShowSearch:null,afterShowSearch:null,onInitializeSearch:null,afterRedraw:null,afterChange:null,sortStrategy:null,closeAfterSearch:!1,closeAfterReset:!1,closeOnEscape:!1,searchOnEnter:!1,multipleSearch:!1,multipleGroup:!1,top:0,left:0,jqModal:!0,modal:!1,resize:!0,width:450,height:"auto",dataheight:"auto",showQuery:!1,errorcheck:!0,sopt:null,stringResult:void
0,onClose:null,onSearch:null,onReset:null,toTop:!0,overlay:30,columns:[],tmplNames:null,tmplFilters:null,tmplLabel:" Template: ",showOnLoad:!1,layer:null,operands:{eq:"=",ne:"<>",lt:"<",le:"<=",gt:">",ge:">=",bw:"LIKE",bn:"NOT LIKE","in":"IN",ni:"NOT IN",ew:"LIKE",en:"NOT LIKE",cn:"LIKE",nc:"NOT LIKE",nu:"IS NULL",nn:"ISNOT NULL"}},c,b||{}),this.each(function(){function
c(c){g=a(d).triggerHandler("jqGridFilterBeforeShow",[c]),void
0===g&&(g=!0),g&&a.isFunction(b.beforeShowSearch)&&(g=b.beforeShowSearch.call(d,c)),g&&(a.jgrid.viewModal("#"+a.jgrid.jqID(i.themodal),{gbox:"#gbox_"+a.jgrid.jqID(f),jqm:b.jqModal,modal:b.modal,overlay:b.overlay,toTop:b.toTop}),a(d).triggerHandler("jqGridFilterAfterShow",[c]),a.isFunction(b.afterShowSearch)&&b.afterShowSearch.call(d,c))}var
d=this;if(d.grid){var
e,f="fbox_"+d.p.id,g=!0,h=!0,i={themodal:"searchmod"+f,modalhead:"searchhd"+f,modalcontent:"searchcnt"+f,scrollelm:f},j=d.p.postData[b.sFilter],k=a.jgrid.styleUI[d.p.styleUI||"jQueryUI"].filter,l=a.jgrid.styleUI[d.p.styleUI||"jQueryUI"].common;if(b.styleUI=d.p.styleUI,"string"==typeof
j&&(j=a.jgrid.parse(j)),b.recreateFilter===!0&&a("#"+a.jgrid.jqID(i.themodal)).remove(),void
0!==a("#"+a.jgrid.jqID(i.themodal))[0])c(a("#fbox_"+a.jgrid.jqID(d.p.id)));else{var
m=a("<div><div id='"+f+"' class='searchFilter' style='overflow:auto'></div></div>").insertBefore("#gview_"+a.jgrid.jqID(d.p.id)),n="left",o="";"rtl"===d.p.direction&&(n="right",o=" style='text-align:left'",m.attr("dir","rtl"));var
p,q,r=a.extend([],d.p.colModel),s="<a id='"+f+"_search' class='fm-button "+l.button+" fm-button-icon-right ui-search'><span class='"+l.icon_base+" "+k.icon_search+"'></span>"+b.Find+"</a>",t="<a id='"+f+"_reset' class='fm-button "+l.button+" fm-button-icon-left ui-reset'><span class='"+l.icon_base+" "+k.icon_reset+"'></span>"+b.Reset+"</a>",u="",v="",w=!1,x=-1;if(b.showQuery&&(u="<a id='"+f+"_query' class='fm-button "+l.button+" fm-button-icon-left'><span class='"+l.icon_base+" "+k.icon_query+"'></span>Query</a>"),b.columns.length?(r=b.columns,x=0,p=r[0].index||r[0].name):a.each(r,function(a,b){if(b.label||(b.label=d.p.colNames[a]),!w){var
c=void
0===b.search?!0:b.search,e=b.hidden===!0,f=b.searchoptions&&b.searchoptions.searchhidden===!0;(f&&c||c&&!e)&&(w=!0,p=b.index||b.name,x=a)}}),!j&&p||b.multipleSearch===!1){var
y="eq";x>=0&&r[x].searchoptions&&r[x].searchoptions.sopt?y=r[x].searchoptions.sopt[0]:b.sopt&&b.sopt.length&&(y=b.sopt[0]),j={groupOp:"AND",rules:[{field:p,op:y,data:""}]}}w=!1,b.tmplNames&&b.tmplNames.length&&(w=!0,v="<tr><td class='ui-search-label'>"+b.tmplLabel+"</td>",v+="<td><select class='ui-template "+k.srSelect+"'>",v+="<option value='default'>Default</option>",a.each(b.tmplNames,function(a,b){v+="<option value='"+a+"'>"+b+"</option>"}),v+="</select></td></tr>"),q="<table class='EditTable' style='border:0px none;margin-top:5px' id='"+f+"_2'><tbody><tr><td colspan='2'><hr class='"+l.content+"' style='margin:1px'/></td></tr>"+v+"<tr><td class='EditButton' style='text-align:"+n+"'>"+t+"</td><td class='EditButton' "+o+">"+u+s+"</td></tr></tbody></table>",f=a.jgrid.jqID(f),a("#"+f).jqFilter({columns:r,sortStrategy:b.sortStrategy,filter:b.loadDefaults?j:null,showQuery:b.showQuery,errorcheck:b.errorcheck,sopt:b.sopt,groupButton:b.multipleGroup,ruleButtons:b.multipleSearch,afterRedraw:b.afterRedraw,ops:b.odata,operands:b.operands,ajaxSelectOptions:d.p.ajaxSelectOptions,groupOps:b.groupOps,onChange:function(){this.p.showQuery&&a(".query",this).html(this.toUserFriendlyString()),a.isFunction(b.afterChange)&&b.afterChange.call(d,a("#"+f),b)},direction:d.p.direction,id:d.p.id}),m.append(q),w&&b.tmplFilters&&b.tmplFilters.length&&a(".ui-template",m).bind("change",function(){var
c=a(this).val();return"default"===c?a("#"+f).jqFilter("addFilter",j):a("#"+f).jqFilter("addFilter",b.tmplFilters[parseInt(c,10)]),!1}),b.multipleGroup===!0&&(b.multipleSearch=!0),a(d).triggerHandler("jqGridFilterInitialize",[a("#"+f)]),a.isFunction(b.onInitializeSearch)&&b.onInitializeSearch.call(d,a("#"+f)),b.gbox="#gbox_"+f,b.layer?a.jgrid.createModal(i,m,b,"#gview_"+a.jgrid.jqID(d.p.id),a("#gbox_"+a.jgrid.jqID(d.p.id))[0],"#"+a.jgrid.jqID(b.layer),{position:"relative"}):a.jgrid.createModal(i,m,b,"#gview_"+a.jgrid.jqID(d.p.id),a("#gbox_"+a.jgrid.jqID(d.p.id))[0]),(b.searchOnEnter||b.closeOnEscape)&&a("#"+a.jgrid.jqID(i.themodal)).keydown(function(c){var
d=a(c.target);return!b.searchOnEnter||13!==c.which||d.hasClass("add-group")||d.hasClass("add-rule")||d.hasClass("delete-group")||d.hasClass("delete-rule")||d.hasClass("fm-button")&&d.is("[id$=_query]")?b.closeOnEscape&&27===c.which?(a("#"+a.jgrid.jqID(i.modalhead)).find(".ui-jqdialog-titlebar-close").click(),!1):void
0:(a("#"+f+"_search").click(),!1)}),u&&a("#"+f+"_query").bind("click",function(){return a(".queryresult",m).toggle(),!1}),void
0===b.stringResult&&(b.stringResult=b.multipleSearch),a("#"+f+"_search").bind("click",function(){var
c,g,j={};if(e=a("#"+f),e.find(".input-elm:focus").change(),g=e.jqFilter("filterData"),b.errorcheck&&(e[0].hideError(),b.showQuery||e.jqFilter("toSQLString"),e[0].p.error))return e[0].showError(),!1;if(b.stringResult){try{c=JSON.stringify(g)}catch(k){}"string"==typeof
c&&(j[b.sFilter]=c,a.each([b.sField,b.sValue,b.sOper],function(){j[this]=""}))}else
b.multipleSearch?(j[b.sFilter]=g,a.each([b.sField,b.sValue,b.sOper],function(){j[this]=""})):(j[b.sField]=g.rules[0].field,j[b.sValue]=g.rules[0].data,j[b.sOper]=g.rules[0].op,j[b.sFilter]="");return d.p.search=!0,a.extend(d.p.postData,j),h=a(d).triggerHandler("jqGridFilterSearch"),void
0===h&&(h=!0),h&&a.isFunction(b.onSearch)&&(h=b.onSearch.call(d,d.p.filters)),h!==!1&&a(d).trigger("reloadGrid",[{page:1}]),b.closeAfterSearch&&a.jgrid.hideModal("#"+a.jgrid.jqID(i.themodal),{gb:"#gbox_"+a.jgrid.jqID(d.p.id),jqm:b.jqModal,onClose:b.onClose}),!1}),a("#"+f+"_reset").bind("click",function(){var
c={},e=a("#"+f);return d.p.search=!1,d.p.resetsearch=!0,b.multipleSearch===!1?c[b.sField]=c[b.sValue]=c[b.sOper]="":c[b.sFilter]="",e[0].resetFilter(),w&&a(".ui-template",m).val("default"),a.extend(d.p.postData,c),h=a(d).triggerHandler("jqGridFilterReset"),void
0===h&&(h=!0),h&&a.isFunction(b.onReset)&&(h=b.onReset.call(d)),h!==!1&&a(d).trigger("reloadGrid",[{page:1}]),b.closeAfterReset&&a.jgrid.hideModal("#"+a.jgrid.jqID(i.themodal),{gb:"#gbox_"+a.jgrid.jqID(d.p.id),jqm:b.jqModal,onClose:b.onClose}),!1}),c(a("#"+f)),a(".fm-button:not(."+l.disabled+")",m).hover(function(){a(this).addClass(l.hover)},function(){a(this).removeClass(l.hover)})}}})}})});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery","./grid.base","./grid.common"],a):a(jQuery)}(function(a){"use strict";a.jgrid.inlineEdit=a.jgrid.inlineEdit||{},a.jgrid.extend({editRow:function(b,c,d,e,f,g,h,i,j){var
k={},l=a.makeArray(arguments).slice(1);return"object"===a.type(l[0])?k=l[0]:(void
0!==c&&(k.keys=c),a.isFunction(d)&&(k.oneditfunc=d),a.isFunction(e)&&(k.successfunc=e),void
0!==f&&(k.url=f),void
0!==g&&(k.extraparam=g),a.isFunction(h)&&(k.aftersavefunc=h),a.isFunction(i)&&(k.errorfunc=i),a.isFunction(j)&&(k.afterrestorefunc=j)),k=a.extend(!0,{keys:!1,keyevent:"keydown",oneditfunc:null,successfunc:null,url:null,extraparam:{},aftersavefunc:null,errorfunc:null,afterrestorefunc:null,restoreAfterError:!0,mtype:"POST",focusField:!0},a.jgrid.inlineEdit,k),this.each(function(){var
c,d,e,f,g,h,i=this,j=0,l=null,m={},n=a(this).jqGrid("getStyleUI",i.p.styleUI+".inlinedit","inputClass",!0);i.grid&&(f=a(i).jqGrid("getInd",b,!0),f!==!1&&(h=a.isFunction(k.beforeEditRow)?k.beforeEditRow.call(i,k,b):void
0,void
0===h&&(h=!0),h&&(e=a(f).attr("editable")||"0","0"!==e||a(f).hasClass("not-editable-row")||(g=i.p.colModel,a('td[role="gridcell"]',f).each(function(e){c=g[e].name;var
f=i.p.treeGrid===!0&&c===i.p.ExpandColumn;if(f)d=a("span:first",this).html();else
try{d=a.unformat.call(i,this,{rowId:b,colModel:g[e]},e)}catch(h){d=g[e].edittype&&"textarea"===g[e].edittype?a(this).text():a(this).html()}if("cb"!==c&&"subgrid"!==c&&"rn"!==c&&(i.p.autoencode&&(d=a.jgrid.htmlDecode(d)),m[c]=d,g[e].editable===!0)){null===l&&(l=e),f?a("span:first",this).html(""):a(this).html("");var
k=a.extend({},g[e].editoptions||{},{id:b+"_"+c,name:c,rowId:b,oper:"edit"});g[e].edittype||(g[e].edittype="text"),("&nbsp;"===d||"&#160;"===d||1===d.length&&160===d.charCodeAt(0))&&(d="");var
o=a.jgrid.createEl.call(i,g[e].edittype,k,d,!0,a.extend({},a.jgrid.ajaxOptions,i.p.ajaxSelectOptions||{}));a(o).addClass("editable inline-edit-cell"),a.inArray(g[e].edittype,["text","textarea","password","select"])>-1&&a(o).addClass(n),f?a("span:first",this).append(o):a(this).append(o),a.jgrid.bindEv.call(i,o,k),"select"===g[e].edittype&&void
0!==g[e].editoptions&&g[e].editoptions.multiple===!0&&void
0===g[e].editoptions.dataUrl&&a.jgrid.msie&&a(o).width(a(o).width()),j++}}),j>0&&(m.id=b,i.p.savedRow.push(m),a(f).attr("editable","1"),k.focusField&&("number"==typeof
k.focusField&&parseInt(k.focusField,10)<=g.length&&(l=k.focusField),setTimeout(function(){var
b=a("td:eq("+l+") :input:visible",f).not(":disabled");b.length>0&&b.focus()},0)),k.keys===!0&&a(f).bind(k.keyevent,function(c){if(27===c.keyCode){if(a(i).jqGrid("restoreRow",b,k.afterrestorefunc),i.p.inlineNav)try{a(i).jqGrid("showAddEditButtons")}catch(d){}return!1}if(13===c.keyCode){var
e=c.target;if("TEXTAREA"===e.tagName)return!0;if(a(i).jqGrid("saveRow",b,k)&&i.p.inlineNav)try{a(i).jqGrid("showAddEditButtons")}catch(f){}return!1}}),a(i).triggerHandler("jqGridInlineEditRow",[b,k]),a.isFunction(k.oneditfunc)&&k.oneditfunc.call(i,b))))))})},saveRow:function(b,c,d,e,f,g,h){var
i=a.makeArray(arguments).slice(1),j={},k=this[0];"object"===a.type(i[0])?j=i[0]:(a.isFunction(c)&&(j.successfunc=c),void
0!==d&&(j.url=d),void
0!==e&&(j.extraparam=e),a.isFunction(f)&&(j.aftersavefunc=f),a.isFunction(g)&&(j.errorfunc=g),a.isFunction(h)&&(j.afterrestorefunc=h)),j=a.extend(!0,{successfunc:null,url:null,extraparam:{},aftersavefunc:null,errorfunc:null,afterrestorefunc:null,restoreAfterError:!0,mtype:"POST",saveui:"enable",savetext:a.jgrid.getRegional(k,"defaults.savetext")},a.jgrid.inlineEdit,j);var
l,m,n,o,p,q=!1,r={},s={},t={},u=!1,v=a.trim(a(k).jqGrid("getStyleUI",k.p.styleUI+".common","error",!0));if(!k.grid)return q;if(p=a(k).jqGrid("getInd",b,!0),p===!1)return q;var
w=a.jgrid.getRegional(this,"errors"),x=a.jgrid.getRegional(this,"edit"),y=a.isFunction(j.beforeSaveRow)?j.beforeSaveRow.call(k,j,b):void
0;if(void
0===y&&(y=!0),y){if(m=a(p).attr("editable"),j.url=j.url||k.p.editurl,"1"===m){var
z;if(a('td[role="gridcell"]',p).each(function(b){if(z=k.p.colModel[b],l=z.name,"cb"!==l&&"subgrid"!==l&&z.editable===!0&&"rn"!==l&&!a(this).hasClass("not-editable-cell")){switch(z.edittype){case"checkbox":var
c=["Yes","No"];z.editoptions&&(c=z.editoptions.value.split(":")),r[l]=a("input",this).is(":checked")?c[0]:c[1];break;case"text":case"password":case"textarea":case"button":r[l]=a("input, textarea",this).val();break;case"select":if(z.editoptions.multiple){var
d=a("select",this),e=[];r[l]=a(d).val(),r[l]?r[l]=r[l].join(","):r[l]="",a("select option:selected",this).each(function(b,c){e[b]=a(c).text()}),s[l]=e.join(",")}else
r[l]=a("select option:selected",this).val(),s[l]=a("select option:selected",this).text();z.formatter&&"select"===z.formatter&&(s={});break;case"custom":try{if(!z.editoptions||!a.isFunction(z.editoptions.custom_value))throw"e1";if(r[l]=z.editoptions.custom_value.call(k,a(".customelement",this),"get"),void
0===r[l])throw"e2"}catch(f){"e1"===f?a.jgrid.info_dialog(w.errcap,"function 'custom_value' "+x.msg.nodefined,x.bClose,{styleUI:k.p.styleUI}):a.jgrid.info_dialog(w.errcap,f.message,x.bClose,{styleUI:k.p.styleUI})}}if(o=a.jgrid.checkValues.call(k,r[l],b),o[0]===!1)return!1;k.p.autoencode&&(r[l]=a.jgrid.htmlEncode(r[l])),"clientArray"!==j.url&&z.editoptions&&z.editoptions.NullIfEmpty===!0&&""===r[l]&&(t[l]="null",u=!0)}}),o[0]===!1){try{var
A=a(k).jqGrid("getGridRowById",b),B=a.jgrid.findPos(A);a.jgrid.info_dialog(w.errcap,o[1],x.bClose,{left:B[0],top:B[1]+a(A).outerHeight(),styleUI:k.p.styleUI})}catch(C){alert(o[1])}return q}var
D,E=k.p.prmNames,F=b;if(D=k.p.keyName===!1?E.id:k.p.keyName,r){if(r[E.oper]=E.editoper,void
0===r[D]||""===r[D])r[D]=b;else
if(p.id!==k.p.idPrefix+r[D]){var
G=a.jgrid.stripPref(k.p.idPrefix,b);if(void
0!==k.p._index[G]&&(k.p._index[r[D]]=k.p._index[G],delete
k.p._index[G]),b=k.p.idPrefix+r[D],a(p).attr("id",b),k.p.selrow===F&&(k.p.selrow=b),a.isArray(k.p.selarrrow)){var
H=a.inArray(F,k.p.selarrrow);H>=0&&(k.p.selarrrow[H]=b)}if(k.p.multiselect){var
I="jqg_"+k.p.id+"_"+b;a("input.cbox",p).attr("id",I).attr("name",I)}}void
0===k.p.inlineData&&(k.p.inlineData={}),r=a.extend({},r,k.p.inlineData,j.extraparam)}if("clientArray"===j.url){r=a.extend({},r,s),k.p.autoencode&&a.each(r,function(b,c){r[b]=a.jgrid.htmlDecode(c)});var
J,K=a(k).jqGrid("setRowData",b,r);for(a(p).attr("editable","0"),J=0;J<k.p.savedRow.length;J++)if(String(k.p.savedRow[J].id)===String(F)){n=J;break}n>=0&&k.p.savedRow.splice(n,1),a(k).triggerHandler("jqGridInlineAfterSaveRow",[b,K,r,j]),a.isFunction(j.aftersavefunc)&&j.aftersavefunc.call(k,b,K,r,j),q=!0,a(p).removeClass("jqgrid-new-row").unbind("keydown")}else
a(k).jqGrid("progressBar",{method:"show",loadtype:j.saveui,htmlcontent:j.savetext}),t=a.extend({},r,t),t[D]=a.jgrid.stripPref(k.p.idPrefix,t[D]),a.ajax(a.extend({url:j.url,data:a.isFunction(k.p.serializeRowData)?k.p.serializeRowData.call(k,t):t,type:j.mtype,async:!1,complete:function(c,d){if(a(k).jqGrid("progressBar",{method:"hide",loadtype:j.saveui,htmlcontent:j.savetext}),"success"===d){var
e,f,g=!0;if(e=a(k).triggerHandler("jqGridInlineSuccessSaveRow",[c,b,j]),a.isArray(e)||(e=[!0,t]),e[0]&&a.isFunction(j.successfunc)&&(e=j.successfunc.call(k,c)),a.isArray(e)?(g=e[0],r=e[1]||r):g=e,g===!0){for(k.p.autoencode&&a.each(r,function(b,c){r[b]=a.jgrid.htmlDecode(c)}),u&&a.each(r,function(a){"null"===r[a]&&(r[a]="")}),r=a.extend({},r,s),a(k).jqGrid("setRowData",b,r),a(p).attr("editable","0"),f=0;f<k.p.savedRow.length;f++)if(String(k.p.savedRow[f].id)===String(b)){n=f;break}n>=0&&k.p.savedRow.splice(n,1),a(k).triggerHandler("jqGridInlineAfterSaveRow",[b,c,r,j]),a.isFunction(j.aftersavefunc)&&j.aftersavefunc.call(k,b,c,r,j),q=!0,a(p).removeClass("jqgrid-new-row").unbind("keydown")}else
a(k).triggerHandler("jqGridInlineErrorSaveRow",[b,c,d,null,j]),a.isFunction(j.errorfunc)&&j.errorfunc.call(k,b,c,d,null),j.restoreAfterError===!0&&a(k).jqGrid("restoreRow",b,j.afterrestorefunc)}},error:function(c,d,e){if(a("#lui_"+a.jgrid.jqID(k.p.id)).hide(),a(k).triggerHandler("jqGridInlineErrorSaveRow",[b,c,d,e,j]),a.isFunction(j.errorfunc))j.errorfunc.call(k,b,c,d,e);else{var
f=c.responseText||c.statusText;try{a.jgrid.info_dialog(w.errcap,'<div class="'+v+'">'+f+"</div>",x.bClose,{buttonalign:"right",styleUI:k.p.styleUI})}catch(g){alert(f)}}j.restoreAfterError===!0&&a(k).jqGrid("restoreRow",b,j.afterrestorefunc)}},a.jgrid.ajaxOptions,k.p.ajaxRowOptions||{}))}return q}},restoreRow:function(b,c){var
d=a.makeArray(arguments).slice(1),e={};return"object"===a.type(d[0])?e=d[0]:a.isFunction(c)&&(e.afterrestorefunc=c),e=a.extend(!0,{},a.jgrid.inlineEdit,e),this.each(function(){var
c,d,f=this,g=-1,h={};if(f.grid&&(c=a(f).jqGrid("getInd",b,!0),c!==!1)){var
i=a.isFunction(e.beforeCancelRow)?e.beforeCancelRow.call(f,e,b):void
0;if(void
0===i&&(i=!0),i){for(d=0;d<f.p.savedRow.length;d++)if(String(f.p.savedRow[d].id)===String(b)){g=d;break}if(g>=0){if(a.isFunction(a.fn.datepicker))try{a("input.hasDatepicker","#"+a.jgrid.jqID(c.id)).datepicker("hide")}catch(j){}a.each(f.p.colModel,function(){this.editable===!0&&f.p.savedRow[g].hasOwnProperty(this.name)&&(h[this.name]=f.p.savedRow[g][this.name])}),a(f).jqGrid("setRowData",b,h),a(c).attr("editable","0").unbind("keydown"),f.p.savedRow.splice(g,1),a("#"+a.jgrid.jqID(b),"#"+a.jgrid.jqID(f.p.id)).hasClass("jqgrid-new-row")&&setTimeout(function(){a(f).jqGrid("delRowData",b),a(f).jqGrid("showAddEditButtons")},0)}a(f).triggerHandler("jqGridInlineAfterRestoreRow",[b]),a.isFunction(e.afterrestorefunc)&&e.afterrestorefunc.call(f,b)}}})},addRow:function(b){return b=a.extend(!0,{rowID:null,initdata:{},position:"first",useDefValues:!0,useFormatter:!1,addRowParams:{extraparam:{}}},b||{}),this.each(function(){if(this.grid){var
c=this,d=a.isFunction(b.beforeAddRow)?b.beforeAddRow.call(c,b.addRowParams):void
0;if(void
0===d&&(d=!0),d)if(b.rowID=a.isFunction(b.rowID)?b.rowID.call(c,b):null!=b.rowID?b.rowID:a.jgrid.randId(),b.useDefValues===!0&&a(c.p.colModel).each(function(){if(this.editoptions&&this.editoptions.defaultValue){var
d=this.editoptions.defaultValue,e=a.isFunction(d)?d.call(c):d;b.initdata[this.name]=e}}),a(c).jqGrid("addRowData",b.rowID,b.initdata,b.position),b.rowID=c.p.idPrefix+b.rowID,a("#"+a.jgrid.jqID(b.rowID),"#"+a.jgrid.jqID(c.p.id)).addClass("jqgrid-new-row"),b.useFormatter)a("#"+a.jgrid.jqID(b.rowID)+" .ui-inline-edit","#"+a.jgrid.jqID(c.p.id)).click();else{var
e=c.p.prmNames,f=e.oper;b.addRowParams.extraparam[f]=e.addoper,a(c).jqGrid("editRow",b.rowID,b.addRowParams),a(c).jqGrid("setSelection",b.rowID)}}})},inlineNav:function(b,c){var
d=this[0],e=a.jgrid.getRegional(d,"nav"),f=a.jgrid.styleUI[d.p.styleUI].inlinedit;return c=a.extend(!0,{edit:!0,editicon:f.icon_edit_nav,add:!0,addicon:f.icon_add_nav,save:!0,saveicon:f.icon_save_nav,cancel:!0,cancelicon:f.icon_cancel_nav,addParams:{addRowParams:{extraparam:{}}},editParams:{},restoreAfterSelect:!0},e,c||{}),this.each(function(){if(this.grid&&!this.p.inlineNav){var
f=a.jgrid.jqID(d.p.id),g=a.trim(a(d).jqGrid("getStyleUI",d.p.styleUI+".common","disabled",!0));if(d.p.navGrid||a(d).jqGrid("navGrid",b,{refresh:!1,edit:!1,add:!1,del:!1,search:!1,view:!1}),a(d).data("inlineNav")||a(d).data("inlineNav",c),d.p.force_regional&&(c=a.extend(c,e)),d.p.inlineNav=!0,c.addParams.useFormatter===!0){var
h,i=d.p.colModel;for(h=0;h<i.length;h++)if(i[h].formatter&&"actions"===i[h].formatter){if(i[h].formatoptions){var
j={keys:!1,onEdit:null,onSuccess:null,afterSave:null,onError:null,afterRestore:null,extraparam:{},url:null},k=a.extend(j,i[h].formatoptions);c.addParams.addRowParams={keys:k.keys,oneditfunc:k.onEdit,successfunc:k.onSuccess,url:k.url,extraparam:k.extraparam,aftersavefunc:k.afterSave,errorfunc:k.onError,afterrestorefunc:k.afterRestore}}break}}c.add&&a(d).jqGrid("navButtonAdd",b,{caption:c.addtext,title:c.addtitle,buttonicon:c.addicon,id:d.p.id+"_iladd",internal:!0,onClickButton:function(){a(d).jqGrid("addRow",c.addParams),c.addParams.useFormatter||(a("#"+f+"_ilsave").removeClass(g),a("#"+f+"_ilcancel").removeClass(g),a("#"+f+"_iladd").addClass(g),a("#"+f+"_iledit").addClass(g))}}),c.edit&&a(d).jqGrid("navButtonAdd",b,{caption:c.edittext,title:c.edittitle,buttonicon:c.editicon,id:d.p.id+"_iledit",internal:!0,onClickButton:function(){var
b=a(d).jqGrid("getGridParam","selrow");b?(a(d).jqGrid("editRow",b,c.editParams),a("#"+f+"_ilsave").removeClass(g),a("#"+f+"_ilcancel").removeClass(g),a("#"+f+"_iladd").addClass(g),a("#"+f+"_iledit").addClass(g)):(a.jgrid.viewModal("#alertmod_"+f,{gbox:"#gbox_"+f,jqm:!0}),a("#jqg_alrt").focus())}}),c.save&&(a(d).jqGrid("navButtonAdd",b,{caption:c.savetext||"",title:c.savetitle||"Save row",buttonicon:c.saveicon,id:d.p.id+"_ilsave",internal:!0,onClickButton:function(){var
b=d.p.savedRow[0].id;if(b){var
e=d.p.prmNames,g=e.oper,h=c.editParams;a("#"+a.jgrid.jqID(b),"#"+f).hasClass("jqgrid-new-row")?(c.addParams.addRowParams.extraparam[g]=e.addoper,h=c.addParams.addRowParams):(c.editParams.extraparam||(c.editParams.extraparam={}),c.editParams.extraparam[g]=e.editoper),a(d).jqGrid("saveRow",b,h)&&a(d).jqGrid("showAddEditButtons")}else
a.jgrid.viewModal("#alertmod_"+f,{gbox:"#gbox_"+f,jqm:!0}),a("#jqg_alrt").focus()}}),a("#"+f+"_ilsave").addClass(g)),c.cancel&&(a(d).jqGrid("navButtonAdd",b,{caption:c.canceltext||"",title:c.canceltitle||"Cancel row editing",buttonicon:c.cancelicon,id:d.p.id+"_ilcancel",internal:!0,onClickButton:function(){var
b=d.p.savedRow[0].id,e=c.editParams;b?(a("#"+a.jgrid.jqID(b),"#"+f).hasClass("jqgrid-new-row")&&(e=c.addParams.addRowParams),a(d).jqGrid("restoreRow",b,e),a(d).jqGrid("showAddEditButtons")):(a.jgrid.viewModal("#alertmod",{gbox:"#gbox_"+f,jqm:!0}),a("#jqg_alrt").focus())}}),a("#"+f+"_ilcancel").addClass(g)),c.restoreAfterSelect===!0&&a(d).bind("jqGridBeforeSelectRow.inlineNav",function(b,e){d.p.savedRow.length>0&&d.p.inlineNav===!0&&e!==d.p.selrow&&null!==d.p.selrow&&(d.p.selrow===c.addParams.rowID?a(d).jqGrid("delRowData",d.p.selrow):a(d).jqGrid("restoreRow",d.p.selrow,c.editParams),a(d).jqGrid("showAddEditButtons"))})}})},showAddEditButtons:function(){return this.each(function(){if(this.grid){var
b=a.jgrid.jqID(this.p.id),c=a.trim(a(this).jqGrid("getStyleUI",this.p.styleUI+".common","disabled",!0));a("#"+b+"_ilsave").addClass(c),a("#"+b+"_ilcancel").addClass(c),a("#"+b+"_iladd").removeClass(c),a("#"+b+"_iledit").removeClass(c)}})}})});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery","./grid.base"],a):a(jQuery)}(function(a){"use strict";a.jgrid.extend({editCell:function(b,c,d){return this.each(function(){var
e,f,g,h,i=this,j=a(this).jqGrid("getStyleUI",i.p.styleUI+".common","highlight",!0),k=a(this).jqGrid("getStyleUI",i.p.styleUI+".common","hover",!0),l=a(this).jqGrid("getStyleUI",i.p.styleUI+".celledit","inputClass",!0);if(i.grid&&i.p.cellEdit===!0){if(c=parseInt(c,10),i.p.selrow=i.rows[b].id,i.p.knv||a(i).jqGrid("GridNav"),i.p.savedRow.length>0){if(d===!0&&b==i.p.iRow&&c==i.p.iCol)return;a(i).jqGrid("saveCell",i.p.savedRow[0].id,i.p.savedRow[0].ic)}else
window.setTimeout(function(){a("#"+a.jgrid.jqID(i.p.knv)).attr("tabindex","-1").focus()},1);if(h=i.p.colModel[c],e=h.name,"subgrid"!==e&&"cb"!==e&&"rn"!==e){if(g=a("td:eq("+c+")",i.rows[b]),h.editable!==!0||d!==!0||g.hasClass("not-editable-cell")||a.isFunction(i.p.isCellEditable)&&!i.p.isCellEditable.call(i,e,b,c))parseInt(i.p.iCol,10)>=0&&parseInt(i.p.iRow,10)>=0&&a(i.rows[i.p.iRow]).removeClass("selected-row "+k).find("td:eq("+i.p.iCol+")").removeClass("edit-cell "+j),g.addClass("edit-cell "+j),a(i.rows[b]).addClass("selected-row "+k),f=g.html().replace(/\&#160\;/gi,""),a(i).triggerHandler("jqGridSelectCell",[i.rows[b].id,e,f,b,c]),a.isFunction(i.p.onSelectCell)&&i.p.onSelectCell.call(i,i.rows[b].id,e,f,b,c);else{parseInt(i.p.iCol,10)>=0&&parseInt(i.p.iRow,10)>=0&&a(i.rows[i.p.iRow]).removeClass("selected-row "+k).find("td:eq("+i.p.iCol+")").removeClass("edit-cell "+j),a(g).addClass("edit-cell "+j),a(i.rows[b]).addClass("selected-row "+k);try{f=a.unformat.call(i,g,{rowId:i.rows[b].id,colModel:h},c)}catch(m){f=h.edittype&&"textarea"===h.edittype?a(g).text():a(g).html()}if(i.p.autoencode&&(f=a.jgrid.htmlDecode(f)),h.edittype||(h.edittype="text"),i.p.savedRow.push({id:b,ic:c,name:e,v:f}),("&nbsp;"===f||"&#160;"===f||1===f.length&&160===f.charCodeAt(0))&&(f=""),a.isFunction(i.p.formatCell)){var
n=i.p.formatCell.call(i,i.rows[b].id,e,f,b,c);void
0!==n&&(f=n)}a(i).triggerHandler("jqGridBeforeEditCell",[i.rows[b].id,e,f,b,c]),a.isFunction(i.p.beforeEditCell)&&i.p.beforeEditCell.call(i,i.rows[b].id,e,f,b,c);var
o=a.extend({},h.editoptions||{},{id:b+"_"+e,name:e,rowId:i.rows[b].id,oper:"edit"}),p=a.jgrid.createEl.call(i,h.edittype,o,f,!0,a.extend({},a.jgrid.ajaxOptions,i.p.ajaxSelectOptions||{}));a.inArray(h.edittype,["text","textarea","password","select"])>-1&&a(p).addClass(l),a(g).html("").append(p).attr("tabindex","0"),a.jgrid.bindEv.call(i,p,o),window.setTimeout(function(){a(p).focus()},1),a("input, select, textarea",g).bind("keydown",function(d){if(27===d.keyCode&&(a("input.hasDatepicker",g).length>0?a(".ui-datepicker").is(":hidden")?a(i).jqGrid("restoreCell",b,c):a("input.hasDatepicker",g).datepicker("hide"):a(i).jqGrid("restoreCell",b,c)),13===d.keyCode&&!d.shiftKey)return a(i).jqGrid("saveCell",b,c),!1;if(9===d.keyCode){if(i.grid.hDiv.loading)return!1;d.shiftKey?a(i).jqGrid("prevCell",b,c):a(i).jqGrid("nextCell",b,c)}d.stopPropagation()}),a(i).triggerHandler("jqGridAfterEditCell",[i.rows[b].id,e,f,b,c]),a.isFunction(i.p.afterEditCell)&&i.p.afterEditCell.call(i,i.rows[b].id,e,f,b,c)}i.p.iCol=c,i.p.iRow=b}}})},saveCell:function(b,c){return this.each(function(){var
d,e=this,f=a.jgrid.getRegional(this,"errors"),g=a.jgrid.getRegional(this,"edit");if(e.grid&&e.p.cellEdit===!0){if(d=e.p.savedRow.length>=1?0:null,null!==d){var
h,i,j=a("td:eq("+c+")",e.rows[b]),k=e.p.colModel[c],l=k.name,m=a.jgrid.jqID(l),n=a(j).offset();switch(k.edittype){case"select":if(k.editoptions.multiple){var
o=a("#"+b+"_"+m,e.rows[b]),p=[];h=a(o).val(),h?h.join(","):h="",a("option:selected",o).each(function(b,c){p[b]=a(c).text()}),i=p.join(",")}else
h=a("#"+b+"_"+m+" option:selected",e.rows[b]).val(),i=a("#"+b+"_"+m+" option:selected",e.rows[b]).text();k.formatter&&(i=h);break;case"checkbox":var
q=["Yes","No"];k.editoptions&&(q=k.editoptions.value.split(":")),h=a("#"+b+"_"+m,e.rows[b]).is(":checked")?q[0]:q[1],i=h;break;case"password":case"text":case"textarea":case"button":h=a("#"+b+"_"+m,e.rows[b]).val(),i=h;break;case"custom":try{if(!k.editoptions||!a.isFunction(k.editoptions.custom_value))throw"e1";if(h=k.editoptions.custom_value.call(e,a(".customelement",j),"get"),void
0===h)throw"e2";i=h}catch(r){"e1"===r?a.jgrid.info_dialog(f.errcap,"function 'custom_value' "+g.msg.nodefined,g.bClose,{styleUI:e.p.styleUI}):"e2"===r?a.jgrid.info_dialog(f.errcap,"function 'custom_value' "+g.msg.novalue,g.bClose,{styleUI:e.p.styleUI}):a.jgrid.info_dialog(f.errcap,r.message,g.bClose,{styleUI:e.p.styleUI})}}if(i!==e.p.savedRow[d].v){var
s=a(e).triggerHandler("jqGridBeforeSaveCell",[e.rows[b].id,l,h,b,c]);if(s&&(h=s,i=s),a.isFunction(e.p.beforeSaveCell)){var
t=e.p.beforeSaveCell.call(e,e.rows[b].id,l,h,b,c);t&&(h=t,i=t)}var
u=a.jgrid.checkValues.call(e,h,c),v=!1;if(u[0]===!0){var
w=a(e).triggerHandler("jqGridBeforeSubmitCell",[e.rows[b].id,l,h,b,c])||{};if(a.isFunction(e.p.beforeSubmitCell)&&(w=e.p.beforeSubmitCell.call(e,e.rows[b].id,l,h,b,c),w||(w={})),a("input.hasDatepicker",j).length>0&&a("input.hasDatepicker",j).datepicker("hide"),"remote"===e.p.cellsubmit)if(e.p.cellurl){var
x={};e.p.autoencode&&(h=a.jgrid.htmlEncode(h)),k.editoptions&&k.editoptions.NullIfEmpty&&""===h&&(h="null",v=!0),x[l]=h;var
y,z,A;A=e.p.prmNames,y=A.id,z=A.oper,x[y]=a.jgrid.stripPref(e.p.idPrefix,e.rows[b].id),x[z]=A.editoper,x=a.extend(w,x),a(e).jqGrid("progressBar",{method:"show",loadtype:e.p.loadui,htmlcontent:a.jgrid.getRegional(e,"defaults.savetext")}),e.grid.hDiv.loading=!0,a.ajax(a.extend({url:e.p.cellurl,data:a.isFunction(e.p.serializeCellData)?e.p.serializeCellData.call(e,x,l):x,type:"POST",complete:function(d,k){if(a(e).jqGrid("progressBar",{method:"hide",loadtype:e.p.loadui}),e.grid.hDiv.loading=!1,"success"===k){var
m=a(e).triggerHandler("jqGridAfterSubmitCell",[e,d,x.id,l,h,b,c])||[!0,""];m[0]===!0&&a.isFunction(e.p.afterSubmitCell)&&(m=e.p.afterSubmitCell.call(e,d,x.id,l,h,b,c)),m[0]===!0?(v&&(h=""),a(j).empty(),a(e).jqGrid("setCell",e.rows[b].id,c,i,!1,!1,!0),a(j).addClass("dirty-cell"),a(e.rows[b]).addClass("edited"),a(e).triggerHandler("jqGridAfterSaveCell",[e.rows[b].id,l,h,b,c]),a.isFunction(e.p.afterSaveCell)&&e.p.afterSaveCell.call(e,e.rows[b].id,l,h,b,c),e.p.savedRow.splice(0,1)):(a.jgrid.info_dialog(f.errcap,m[1],g.bClose,{styleUI:e.p.styleUI}),e.p.restoreCellonFail&&a(e).jqGrid("restoreCell",b,c))}},error:function(d,h,i){a("#lui_"+a.jgrid.jqID(e.p.id)).hide(),e.grid.hDiv.loading=!1,a(e).triggerHandler("jqGridErrorCell",[d,h,i]),a.isFunction(e.p.errorCell)?e.p.errorCell.call(e,d,h,i):a.jgrid.info_dialog(f.errcap,d.status+" : "+d.statusText+"<br/>"+h,g.bClose,{styleUI:e.p.styleUI}),e.p.restoreCellonFail&&a(e).jqGrid("restoreCell",b,c)}},a.jgrid.ajaxOptions,e.p.ajaxCellOptions||{}))}else
try{a.jgrid.info_dialog(f.errcap,f.nourl,g.bClose,{styleUI:e.p.styleUI}),e.p.restoreCellonFail&&a(e).jqGrid("restoreCell",b,c)}catch(r){}"clientArray"===e.p.cellsubmit&&(a(j).empty(),a(e).jqGrid("setCell",e.rows[b].id,c,i,!1,!1,!0),a(j).addClass("dirty-cell"),a(e.rows[b]).addClass("edited"),a(e).triggerHandler("jqGridAfterSaveCell",[e.rows[b].id,l,h,b,c]),a.isFunction(e.p.afterSaveCell)&&e.p.afterSaveCell.call(e,e.rows[b].id,l,h,b,c),e.p.savedRow.splice(0,1))}else
try{window.setTimeout(function(){a.jgrid.info_dialog(f.errcap,h+" "+u[1],g.bClose,{styleUI:e.p.styleUI,top:n.top+40,left:n.left})},100),a(e).jqGrid("restoreCell",b,c)}catch(r){}}else
a(e).jqGrid("restoreCell",b,c)}window.setTimeout(function(){a("#"+a.jgrid.jqID(e.p.knv)).attr("tabindex","-1").focus()},0)}})},restoreCell:function(b,c){return this.each(function(){var
d,e=this;if(e.grid&&e.p.cellEdit===!0){if(d=e.p.savedRow.length>=1?0:null,null!==d){var
f=a("td:eq("+c+")",e.rows[b]);if(a.isFunction(a.fn.datepicker))try{a("input.hasDatepicker",f).datepicker("hide")}catch(g){}a(f).empty().attr("tabindex","-1"),a(e).jqGrid("setCell",e.rows[b].id,c,e.p.savedRow[d].v,!1,!1,!0),a(e).triggerHandler("jqGridAfterRestoreCell",[e.rows[b].id,e.p.savedRow[d].v,b,c]),a.isFunction(e.p.afterRestoreCell)&&e.p.afterRestoreCell.call(e,e.rows[b].id,e.p.savedRow[d].v,b,c),e.p.savedRow.splice(0,1)}window.setTimeout(function(){a("#"+e.p.knv).attr("tabindex","-1").focus()},0)}})},nextCell:function(b,c){return this.each(function(){var
d,e=this,f=!1;if(e.grid&&e.p.cellEdit===!0){for(d=c+1;d<e.p.colModel.length;d++)if(e.p.colModel[d].editable===!0&&(!a.isFunction(e.p.isCellEditable)||e.p.isCellEditable.call(e,e.p.colModel[d].name,b,d))){f=d;break}f!==!1?a(e).jqGrid("editCell",b,f,!0):e.p.savedRow.length>0&&a(e).jqGrid("saveCell",b,c)}})},prevCell:function(b,c){return this.each(function(){var
d,e=this,f=!1;if(e.grid&&e.p.cellEdit===!0){for(d=c-1;d>=0;d--)if(e.p.colModel[d].editable===!0&&(!a.isFunction(e.p.isCellEditable)||e.p.isCellEditable.call(e,e.p.colModel[d].name,b,d))){f=d;break}f!==!1?a(e).jqGrid("editCell",b,f,!0):e.p.savedRow.length>0&&a(e).jqGrid("saveCell",b,c)}})},GridNav:function(){return this.each(function(){function
b(b,c,e){if("v"===e.substr(0,1)){var
f=a(d.grid.bDiv)[0].clientHeight,g=a(d.grid.bDiv)[0].scrollTop,h=d.rows[b].offsetTop+d.rows[b].clientHeight,i=d.rows[b].offsetTop;"vd"===e&&h>=f&&(a(d.grid.bDiv)[0].scrollTop=a(d.grid.bDiv)[0].scrollTop+d.rows[b].clientHeight),"vu"===e&&g>i&&(a(d.grid.bDiv)[0].scrollTop=a(d.grid.bDiv)[0].scrollTop-d.rows[b].clientHeight)}if("h"===e){var
j=a(d.grid.bDiv)[0].clientWidth,k=a(d.grid.bDiv)[0].scrollLeft,l=d.rows[b].cells[c].offsetLeft+d.rows[b].cells[c].clientWidth,m=d.rows[b].cells[c].offsetLeft;l>=j+parseInt(k,10)?a(d.grid.bDiv)[0].scrollLeft=a(d.grid.bDiv)[0].scrollLeft+d.rows[b].cells[c].clientWidth:k>m&&(a(d.grid.bDiv)[0].scrollLeft=a(d.grid.bDiv)[0].scrollLeft-d.rows[b].cells[c].clientWidth)}}function
c(a,b){var
c,e;if("lft"===b)for(c=a+1,e=a;e>=0;e--)if(d.p.colModel[e].hidden!==!0){c=e;break}if("rgt"===b)for(c=a-1,e=a;e<d.p.colModel.length;e++)if(d.p.colModel[e].hidden!==!0){c=e;break}return c}var
d=this;if(d.grid&&d.p.cellEdit===!0){d.p.knv=d.p.id+"_kn";var
e,f,g=a("<div style='position:fixed;top:0px;width:1px;height:1px;' tabindex='0'><div tabindex='-1' style='width:1px;height:1px;' id='"+d.p.knv+"'></div></div>");a(g).insertBefore(d.grid.cDiv),a("#"+d.p.knv).focus().keydown(function(g){switch(f=g.keyCode,"rtl"===d.p.direction&&(37===f?f=39:39===f&&(f=37)),f){case
38:d.p.iRow-1>0&&(b(d.p.iRow-1,d.p.iCol,"vu"),a(d).jqGrid("editCell",d.p.iRow-1,d.p.iCol,!1));break;case
40:d.p.iRow+1<=d.rows.length-1&&(b(d.p.iRow+1,d.p.iCol,"vd"),a(d).jqGrid("editCell",d.p.iRow+1,d.p.iCol,!1));break;case
37:d.p.iCol-1>=0&&(e=c(d.p.iCol-1,"lft"),b(d.p.iRow,e,"h"),a(d).jqGrid("editCell",d.p.iRow,e,!1));break;case
39:d.p.iCol+1<=d.p.colModel.length-1&&(e=c(d.p.iCol+1,"rgt"),b(d.p.iRow,e,"h"),a(d).jqGrid("editCell",d.p.iRow,e,!1));break;case
13:parseInt(d.p.iCol,10)>=0&&parseInt(d.p.iRow,10)>=0&&a(d).jqGrid("editCell",d.p.iRow,d.p.iCol,!0);break;default:return!0}return!1})}})},getChangedCells:function(b){var
c=[];return b||(b="all"),this.each(function(){var
d,e=this;e.grid&&e.p.cellEdit===!0&&a(e.rows).each(function(f){var
g={};a(this).hasClass("edited")&&(a("td",this).each(function(c){if(d=e.p.colModel[c].name,"cb"!==d&&"subgrid"!==d)if("dirty"===b){if(a(this).hasClass("dirty-cell"))try{g[d]=a.unformat.call(e,this,{rowId:e.rows[f].id,colModel:e.p.colModel[c]},c)}catch(h){g[d]=a.jgrid.htmlDecode(a(this).html())}}else
try{g[d]=a.unformat.call(e,this,{rowId:e.rows[f].id,colModel:e.p.colModel[c]},c)}catch(h){g[d]=a.jgrid.htmlDecode(a(this).html())}}),g.id=this.id,c.push(g))})}),c}})});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";a.fn.jqm=function(d){var
f={overlay:50,closeoverlay:!0,overlayClass:"jqmOverlay",closeClass:"jqmClose",trigger:".jqModal",ajax:e,ajaxText:"",target:e,modal:e,toTop:e,onShow:e,onHide:e,onLoad:e};return this.each(function(){return this._jqm?c[this._jqm].c=a.extend({},c[this._jqm].c,d):(b++,this._jqm=b,c[b]={c:a.extend(f,a.jqm.params,d),a:e,w:a(this).addClass("jqmID"+b),s:b},void(f.trigger&&a(this).jqmAddTrigger(f.trigger)))})},a.fn.jqmAddClose=function(a){return j(this,a,"jqmHide")},a.fn.jqmAddTrigger=function(a){return j(this,a,"jqmShow")},a.fn.jqmShow=function(b){return this.each(function(){a.jqm.open(this._jqm,b)})},a.fn.jqmHide=function(b){return this.each(function(){a.jqm.close(this._jqm,b)})},a.jqm={hash:{},open:function(b,g){var
i=c[b],j=i.c,k="."+j.closeClass,l=parseInt(i.w.css("z-index"));l=l>0?l:3e3;var
m=a("<div></div>").css({height:"100%",width:"100%",position:"fixed",left:0,top:0,"z-index":l-1,opacity:j.overlay/100});if(i.a)return e;if(i.t=g,i.a=!0,i.w.css("z-index",l),j.modal?(d[0]||setTimeout(function(){new
h("bind")},1),d.push(b)):j.overlay>0?j.closeoverlay&&i.w.jqmAddClose(m):m=e,i.o=m?m.addClass(j.overlayClass).prependTo("body"):e,j.ajax){var
n=j.target||i.w,o=j.ajax;n="string"==typeof
n?a(n,i.w):a(n),o="@"===o.substr(0,1)?a(g).attr(o.substring(1)):o,n.html(j.ajaxText).load(o,function(){j.onLoad&&j.onLoad.call(this,i),k&&i.w.jqmAddClose(a(k,i.w)),f(i)})}else
k&&i.w.jqmAddClose(a(k,i.w));return j.toTop&&i.o&&i.w.before('<span id="jqmP'+i.w[0]._jqm+'"></span>').insertAfter(i.o),j.onShow?j.onShow(i):i.w.show(),f(i),e},close:function(b){var
f=c[b];return f.a?(f.a=e,d[0]&&(d.pop(),d[0]||new
h("unbind")),f.c.toTop&&f.o&&a("#jqmP"+f.w[0]._jqm).after(f.w).remove(),f.c.onHide?f.c.onHide(f):(f.w.hide(),f.o&&f.o.remove()),e):e},params:{}};var
b=0,c=a.jqm.hash,d=[],e=!1,f=function(a){void
0===a.c.focusField&&(a.c.focusField=0),a.c.focusField>=0&&g(a)},g=function(b){try{a(":input:visible",b.w)[parseInt(b.c.focusField,10)].focus()}catch(c){}},h=function(b){a(document)[b]("keypress",i)[b]("keydown",i)[b]("mousedown",i)},i=function(b){var
e=c[d[d.length-1]],f=!a(b.target).parents(".jqmID"+e.s)[0];return f&&(a(".jqmID"+e.s).each(function(){var
c=a(this),d=c.offset();return d.top<=b.pageY&&b.pageY<=d.top+c.height()&&d.left<=b.pageX&&b.pageX<=d.left+c.width()?(f=!1,!1):void
0}),g(e)),!f},j=function(b,d,f){return b.each(function(){var
b=this._jqm;a(d).each(function(){this[f]||(this[f]=[],a(this).click(function(){for(var
a
in{jqmShow:1,jqmHide:1})for(var
b
in
this[a])c[this[a][b]]&&c[this[a][b]].w[a](this);return e})),this[f].push(b)})})}});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";a.fn.jqDrag=function(a){return g(this,a,"d")},a.fn.jqResize=function(a,b){return g(this,a,"r",b)},a.jqDnR={dnr:{},e:0,drag:function(a){return"d"==e.k?f.css({left:e.X+a.pageX-e.pX,top:e.Y+a.pageY-e.pY}):(f.css({width:Math.max(a.pageX-e.pX+e.W,0),height:Math.max(a.pageY-e.pY+e.H,0)}),c&&b.css({width:Math.max(a.pageX-c.pX+c.W,0),height:Math.max(a.pageY-c.pY+c.H,0)})),!1},stop:function(){a(document).unbind("mousemove",d.drag).unbind("mouseup",d.stop)}};var
b,c,d=a.jqDnR,e=d.dnr,f=d.e,g=function(d,g,j,k){return d.each(function(){g=g?a(g,d):d,g.bind("mousedown",{e:d,k:j},function(d){var
g=d.data,j={};if(f=g.e,b=k?a(k):!1,"relative"!=f.css("position"))try{f.position(j)}catch(l){}if(e={X:j.left||h("left")||0,Y:j.top||h("top")||0,W:h("width")||f[0].scrollWidth||0,H:h("height")||f[0].scrollHeight||0,pX:d.pageX,pY:d.pageY,k:g.k},c=b&&"d"!=g.k?{X:j.left||i("left")||0,Y:j.top||i("top")||0,W:b[0].offsetWidth||i("width")||0,H:b[0].offsetHeight||i("height")||0,pX:d.pageX,pY:d.pageY,k:g.k}:!1,a("input.hasDatepicker",f[0])[0])try{a("input.hasDatepicker",f[0]).datepicker("hide")}catch(m){}return a(document).mousemove(a.jqDnR.drag).mouseup(a.jqDnR.stop),!1})})},h=function(a){return parseInt(f.css(a),10)||!1},i=function(a){return parseInt(b.css(a),10)||!1};a.fn.tinyDraggable=function(b){var
c=a.extend({handle:0,exclude:0},b);return this.each(function(){var
b,d,e=a(this),f=c.handle?a(c.handle,e):e;f.on({mousedown:function(f){if(!c.exclude||!~a.inArray(f.target,a(c.exclude,e))){f.preventDefault();var
g=e.offset();b=f.pageX-g.left,d=f.pageY-g.top,a(document).on("mousemove.drag",function(a){e.offset({top:a.pageY-d,left:a.pageX-b})})}},mouseup:function(b){a(document).off("mousemove.drag")}})})}});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery","./grid.base"],a):a(jQuery)}(function(a){"use strict";a.jgrid.extend({setSubGrid:function(){return this.each(function(){var
b,c,d=this,e=a.jgrid.styleUI[d.p.styleUI||"jQueryUI"].subgrid,f={plusicon:e.icon_plus,minusicon:e.icon_minus,openicon:e.icon_open,expandOnLoad:!1,delayOnLoad:50,selectOnExpand:!1,selectOnCollapse:!1,reloadOnExpand:!0};if(d.p.subGridOptions=a.extend(f,d.p.subGridOptions||{}),d.p.colNames.unshift(""),d.p.colModel.unshift({name:"subgrid",width:a.jgrid.cell_width?d.p.subGridWidth+d.p.cellLayout:d.p.subGridWidth,sortable:!1,resizable:!1,hidedlg:!0,search:!1,fixed:!0}),b=d.p.subGridModel,b[0])for(b[0].align=a.extend([],b[0].align||[]),c=0;c<b[0].name.length;c++)b[0].align[c]=b[0].align[c]||"left"})},addSubGridCell:function(b,c){var
d,e,f,g="";return this.each(function(){g=this.formatCol(b,c),e=this.p.id,d=this.p.subGridOptions.plusicon,f=a.jgrid.styleUI[this.p.styleUI||"jQueryUI"].common}),'<td role="gridcell" aria-describedby="'+e+'_subgrid" class="ui-sgcollapsed sgcollapsed" '+g+"><a style='cursor:pointer;' class='ui-sghref'><span class='"+f.icon_base+" "+d+"'></span></a></td>"},addSubGrid:function(b,c){return this.each(function(){var
d=this;if(d.grid){var
e,f,g,h,i,j=a.jgrid.styleUI[d.p.styleUI||"jQueryUI"].base,k=a.jgrid.styleUI[d.p.styleUI||"jQueryUI"].common,l=function(b,c,e){var
f=a("<td align='"+d.p.subGridModel[0].align[e]+"'></td>").html(c);a(b).append(f)},m=function(b,c){var
e,f,g,h=a("<table class='"+j.rowTable+" ui-common-table'><tbody></tbody></table>"),i=a("<tr></tr>");for(f=0;f<d.p.subGridModel[0].name.length;f++)e=a("<th class='"+j.headerBox+" ui-th-subgrid ui-th-column ui-th-"+d.p.direction+"'></th>"),a(e).html(d.p.subGridModel[0].name[f]),a(e).width(d.p.subGridModel[0].width[f]),a(i).append(e);a(h).append(i),b&&(g=d.p.xmlReader.subgrid,a(g.root+" "+g.row,b).each(function(){if(i=a("<tr class='"+k.content+" ui-subtblcell'></tr>"),g.repeatitems===!0)a(g.cell,this).each(function(b){l(i,a(this).text()||"&#160;",b)});else{var
b=d.p.subGridModel[0].mapping||d.p.subGridModel[0].name;if(b)for(f=0;f<b.length;f++)l(i,a(b[f],this).text()||"&#160;",f)}a(h).append(i)}));var
m=a("table:first",d.grid.bDiv).attr("id")+"_";return a("#"+a.jgrid.jqID(m+c)).append(h),d.grid.hDiv.loading=!1,a("#load_"+a.jgrid.jqID(d.p.id)).hide(),!1},n=function(b,c){var
e,f,g,h,i,m,n=a("<table class='"+j.rowTable+" ui-common-table'><tbody></tbody></table>"),o=a("<tr></tr>");for(g=0;g<d.p.subGridModel[0].name.length;g++)e=a("<th class='"+j.headerBox+" ui-th-subgrid ui-th-column ui-th-"+d.p.direction+"'></th>"),a(e).html(d.p.subGridModel[0].name[g]),a(e).width(d.p.subGridModel[0].width[g]),a(o).append(e);if(a(n).append(o),b&&(i=d.p.jsonReader.subgrid,f=a.jgrid.getAccessor(b,i.root),void
0!==f))for(g=0;g<f.length;g++){if(h=f[g],o=a("<tr class='"+k.content+" ui-subtblcell'></tr>"),i.repeatitems===!0)for(i.cell&&(h=h[i.cell]),m=0;m<h.length;m++)l(o,h[m]||"&#160;",m);else{var
p=d.p.subGridModel[0].mapping||d.p.subGridModel[0].name;if(p.length)for(m=0;m<p.length;m++)l(o,h[p[m]]||"&#160;",m)}a(n).append(o)}var
q=a("table:first",d.grid.bDiv).attr("id")+"_";return a("#"+a.jgrid.jqID(q+c)).append(n),d.grid.hDiv.loading=!1,a("#load_"+a.jgrid.jqID(d.p.id)).hide(),!1},o=function(b){var
c,e,f,g;if(c=a(b).attr("id"),e={nd_:(new
Date).getTime()},e[d.p.prmNames.subgridid]=c,!d.p.subGridModel[0])return!1;if(d.p.subGridModel[0].params)for(g=0;g<d.p.subGridModel[0].params.length;g++)for(f=0;f<d.p.colModel.length;f++)d.p.colModel[f].name===d.p.subGridModel[0].params[g]&&(e[d.p.colModel[f].name]=a("td:eq("+f+")",b).text().replace(/\&#160\;/gi,""));if(!d.grid.hDiv.loading)switch(d.grid.hDiv.loading=!0,a("#load_"+a.jgrid.jqID(d.p.id)).show(),d.p.subgridtype||(d.p.subgridtype=d.p.datatype),a.isFunction(d.p.subgridtype)?d.p.subgridtype.call(d,e):d.p.subgridtype=d.p.subgridtype.toLowerCase(),d.p.subgridtype){case"xml":case"json":a.ajax(a.extend({type:d.p.mtype,url:a.isFunction(d.p.subGridUrl)?d.p.subGridUrl.call(d,e):d.p.subGridUrl,dataType:d.p.subgridtype,data:a.isFunction(d.p.serializeSubGridData)?d.p.serializeSubGridData.call(d,e):e,complete:function(b){"xml"===d.p.subgridtype?m(b.responseXML,c):n(a.jgrid.parse(b.responseText),c),b=null}},a.jgrid.ajaxOptions,d.p.ajaxSubgridOptions||{}))}return!1},p=0;a.each(d.p.colModel,function(){(this.hidden===!0||"rn"===this.name||"cb"===this.name)&&p++});var
q=d.rows.length,r=1;for(void
0!==c&&c>0&&(r=c,q=c+1);q>r;)a(d.rows[r]).hasClass("jqgrow")&&(d.p.scroll&&a(d.rows[r].cells[b]).unbind("click"),a(d.rows[r].cells[b]).bind("click",function(){var
c=a(this).parent("tr")[0];if(f=d.p.id,e=c.id,i=a("#"+f+"_"+e+"_expandedContent"),a(this).hasClass("sgcollapsed")){if(h=a(d).triggerHandler("jqGridSubGridBeforeExpand",[f+"_"+e,e]),h=h===!1||"stop"===h?!1:!0,h&&a.isFunction(d.p.subGridBeforeExpand)&&(h=d.p.subGridBeforeExpand.call(d,f+"_"+e,e)),h===!1)return!1;d.p.subGridOptions.reloadOnExpand===!0||d.p.subGridOptions.reloadOnExpand===!1&&!i.hasClass("ui-subgrid")?(g=b>=1?"<td colspan='"+b+"'>&#160;</td>":"",a(c).after("<tr role='row' id='"+f+"_"+e+"_expandedContent' class='ui-subgrid ui-sg-expanded'>"+g+"<td class='"+k.content+" subgrid-cell'><span class='"+k.icon_base+" "+d.p.subGridOptions.openicon+"'></span></td><td colspan='"+parseInt(d.p.colNames.length-1-p,10)+"' class='"+k.content+" subgrid-data'><div id="+f+"_"+e+" class='tablediv'></div></td></tr>"),a(d).triggerHandler("jqGridSubGridRowExpanded",[f+"_"+e,e]),a.isFunction(d.p.subGridRowExpanded)?d.p.subGridRowExpanded.call(d,f+"_"+e,e):o(c)):i.show().removeClass("ui-sg-collapsed").addClass("ui-sg-expanded"),a(this).html("<a style='cursor:pointer;' class='ui-sghref'><span class='"+k.icon_base+" "+d.p.subGridOptions.minusicon+"'></span></a>").removeClass("sgcollapsed").addClass("sgexpanded"),d.p.subGridOptions.selectOnExpand&&a(d).jqGrid("setSelection",e)}else
if(a(this).hasClass("sgexpanded")){if(h=a(d).triggerHandler("jqGridSubGridRowColapsed",[f+"_"+e,e]),h=h===!1||"stop"===h?!1:!0,h&&a.isFunction(d.p.subGridRowColapsed)&&(h=d.p.subGridRowColapsed.call(d,f+"_"+e,e)),h===!1)return!1;d.p.subGridOptions.reloadOnExpand===!0?i.remove(".ui-subgrid"):i.hasClass("ui-subgrid")&&i.hide().addClass("ui-sg-collapsed").removeClass("ui-sg-expanded"),a(this).html("<a style='cursor:pointer;' class='ui-sghref'><span class='"+k.icon_base+" "+d.p.subGridOptions.plusicon+"'></span></a>").removeClass("sgexpanded").addClass("sgcollapsed"),d.p.subGridOptions.selectOnCollapse&&a(d).jqGrid("setSelection",e)}return!1})),r++;d.p.subGridOptions.expandOnLoad===!0&&a(d.rows).filter(".jqgrow").each(function(b,c){a(c.cells[0]).click()}),d.subGridXml=function(a,b){m(a,b)},d.subGridJson=function(a,b){n(a,b)}}})},expandSubGridRow:function(b){return this.each(function(){var
c=this;if((c.grid||b)&&c.p.subGrid===!0){var
d=a(this).jqGrid("getInd",b,!0);if(d){var
e=a("td.sgcollapsed",d)[0];e&&a(e).trigger("click")}}})},collapseSubGridRow:function(b){return this.each(function(){var
c=this;if((c.grid||b)&&c.p.subGrid===!0){var
d=a(this).jqGrid("getInd",b,!0);if(d){var
e=a("td.sgexpanded",d)[0];e&&a(e).trigger("click")}}})},toggleSubGridRow:function(b){return this.each(function(){var
c=this;if((c.grid||b)&&c.p.subGrid===!0){var
d=a(this).jqGrid("getInd",b,!0);if(d){var
e=a("td.sgcollapsed",d)[0];e?a(e).trigger("click"):(e=a("td.sgexpanded",d)[0],e&&a(e).trigger("click"))}}})}})});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery","./grid.base"],a):a(jQuery)}(function(a){"use strict";a.jgrid.extend({groupingSetup:function(){return this.each(function(){var
b,c,d,e=this,f=e.p.colModel,g=e.p.groupingView,h=a.jgrid.styleUI[e.p.styleUI||"jQueryUI"].grouping;if(null===g||"object"!=typeof
g&&!a.isFunction(g))e.p.grouping=!1;else
if(g.plusicon||(g.plusicon=h.icon_plus),g.minusicon||(g.minusicon=h.icon_minus),g.groupField.length){for(void
0===g.visibiltyOnNextGrouping&&(g.visibiltyOnNextGrouping=[]),g.lastvalues=[],g._locgr||(g.groups=[]),g.counters=[],b=0;b<g.groupField.length;b++)g.groupOrder[b]||(g.groupOrder[b]="asc"),g.groupText[b]||(g.groupText[b]="{0}"),"boolean"!=typeof
g.groupColumnShow[b]&&(g.groupColumnShow[b]=!0),"boolean"!=typeof
g.groupSummary[b]&&(g.groupSummary[b]=!1),g.groupSummaryPos[b]||(g.groupSummaryPos[b]="footer"),g.groupColumnShow[b]===!0?(g.visibiltyOnNextGrouping[b]=!0,a(e).jqGrid("showCol",g.groupField[b])):(g.visibiltyOnNextGrouping[b]=a("#"+a.jgrid.jqID(e.p.id+"_"+g.groupField[b])).is(":visible"),a(e).jqGrid("hideCol",g.groupField[b]));for(g.summary=[],g.hideFirstGroupCol&&a.isArray(g.formatDisplayField)&&!a.isFunction(g.formatDisplayField[0])&&(g.formatDisplayField[0]=function(a){return a}),c=0,d=f.length;d>c;c++)g.hideFirstGroupCol&&(f[c].hidden||g.groupField[0]!==f[c].name||(f[c].formatter=function(){return""})),f[c].summaryType&&(f[c].summaryDivider?g.summary.push({nm:f[c].name,st:f[c].summaryType,v:"",sd:f[c].summaryDivider,vd:"",sr:f[c].summaryRound,srt:f[c].summaryRoundType||"round"}):g.summary.push({nm:f[c].name,st:f[c].summaryType,v:"",sr:f[c].summaryRound,srt:f[c].summaryRoundType||"round"}))}else
e.p.grouping=!1})},groupingPrepare:function(b,c){return this.each(function(){var
d,e,f,g,h,i=this.p.groupingView,j=this,k=function(){a.isFunction(this.st)?this.v=this.st.call(j,this.v,this.nm,b):(this.v=a(j).jqGrid("groupingCalculations.handler",this.st,this.v,this.nm,this.sr,this.srt,b),"avg"===this.st.toLowerCase()&&this.sd&&(this.vd=a(j).jqGrid("groupingCalculations.handler",this.st,this.vd,this.sd,this.sr,this.srt,b)))},l=i.groupField.length,m=0;for(d=0;l>d;d++)e=i.groupField[d],g=i.displayField[d],f=b[e],h=null==g?null:b[g],null==h&&(h=f),void
0!==f&&(0===c?(i.groups.push({idx:d,dataIndex:e,value:f,displayValue:h,startRow:c,cnt:1,summary:[]}),i.lastvalues[d]=f,i.counters[d]={cnt:1,pos:i.groups.length-1,summary:a.extend(!0,[],i.summary)},a.each(i.counters[d].summary,k),i.groups[i.counters[d].pos].summary=i.counters[d].summary):"object"==typeof
f||(a.isArray(i.isInTheSameGroup)&&a.isFunction(i.isInTheSameGroup[d])?i.isInTheSameGroup[d].call(j,i.lastvalues[d],f,d,i):i.lastvalues[d]===f)?1===m?(i.groups.push({idx:d,dataIndex:e,value:f,displayValue:h,startRow:c,cnt:1,summary:[]}),i.lastvalues[d]=f,i.counters[d]={cnt:1,pos:i.groups.length-1,summary:a.extend(!0,[],i.summary)},a.each(i.counters[d].summary,k),i.groups[i.counters[d].pos].summary=i.counters[d].summary):(i.counters[d].cnt+=1,i.groups[i.counters[d].pos].cnt=i.counters[d].cnt,a.each(i.counters[d].summary,k),i.groups[i.counters[d].pos].summary=i.counters[d].summary):(i.groups.push({idx:d,dataIndex:e,value:f,displayValue:h,startRow:c,cnt:1,summary:[]}),i.lastvalues[d]=f,m=1,i.counters[d]={cnt:1,pos:i.groups.length-1,summary:a.extend(!0,[],i.summary)},a.each(i.counters[d].summary,k),i.groups[i.counters[d].pos].summary=i.counters[d].summary))}),this},groupingToggle:function(b){return this.each(function(){var
c=this,d=c.p.groupingView,e=b.split("_"),f=parseInt(e[e.length-2],10);e.splice(e.length-2,2);var
g,h,i=e.join("_"),j=d.minusicon,k=d.plusicon,l=a("#"+a.jgrid.jqID(b)),m=l.length?l[0].nextSibling:null,n=a("#"+a.jgrid.jqID(b)+" span.tree-wrap-"+c.p.direction),o=function(b){var
c=a.map(b.split(" "),function(a){return a.substring(0,i.length+1)===i+"_"?parseInt(a.substring(i.length+1),10):void
0});return c.length>0?c[0]:void
0},p=!1,q=!1,r=c.p.frozenColumns?c.p.id+"_frozen":!1,s=r?a("#"+a.jgrid.jqID(b),"#"+a.jgrid.jqID(r)):!1,t=s&&s.length?s[0].nextSibling:null;if(n.hasClass(j)){if(d.showSummaryOnHide){if(m)for(;m&&(g=o(m.className),!(void
0!==g&&f>=g));)a(m).hide(),m=m.nextSibling,r&&(a(t).hide(),t=t.nextSibling)}else
if(m)for(;m&&(g=o(m.className),!(void
0!==g&&f>=g));)a(m).hide(),m=m.nextSibling,r&&(a(t).hide(),t=t.nextSibling);n.removeClass(j).addClass(k),p=!0}else{if(m)for(h=void
0;m;){if(g=o(m.className),void
0===h&&(h=void
0===g),q=a(m).hasClass("ui-subgrid")&&a(m).hasClass("ui-sg-collapsed"),void
0!==g){if(f>=g)break;g===f+1&&(q||(a(m).show().find(">td>span.tree-wrap-"+c.p.direction).removeClass(j).addClass(k),r&&a(t).show().find(">td>span.tree-wrap-"+c.p.direction).removeClass(j).addClass(k)))}else
h&&(q||(a(m).show(),r&&a(t).show()));m=m.nextSibling,r&&(t=t.nextSibling)}n.removeClass(k).addClass(j)}a(c).triggerHandler("jqGridGroupingClickGroup",[b,p]),a.isFunction(c.p.onClickGroup)&&c.p.onClickGroup.call(c,b,p)}),!1},groupingRender:function(b,c,d,e){return this.each(function(){function
f(a,b,c){var
d,e=!1;if(0===b)e=c[a];else{var
f=c[a].idx;if(0===f)e=c[a];else
for(d=a;d>=0;d--)if(c[d].idx===f-b){e=c[d];break}}return e}function
g(b,d,e,g){var
h,i,j=f(b,d,e),l=k.p.colModel,m=j.cnt,n="";for(i=g;c>i;i++){var
o="<td "+k.formatCol(i,1,"")+">&#160;</td>",p="{0}";a.each(j.summary,function(){if(this.nm===l[i].name){l[i].summaryTpl&&(p=l[i].summaryTpl),"string"==typeof
this.st&&"avg"===this.st.toLowerCase()&&(this.sd&&this.vd?this.v=this.v/this.vd:this.v&&m>0&&(this.v=this.v/m));try{this.groupCount=j.cnt,this.groupIndex=j.dataIndex,this.groupValue=j.value,h=k.formatter("",this.v,i,this)}catch(b){h=this.v}return o="<td "+k.formatCol(i,1,"")+">"+a.jgrid.template(p,h)+"</td>",!1}}),n+=o}return n}var
h,i,j,k=this,l=k.p.groupingView,m="",n="",o=l.groupCollapse?l.plusicon:l.minusicon,p=[],q=l.groupField.length,r=a.jgrid.styleUI[k.p.styleUI||"jQueryUI"].common;o=o+" tree-wrap-"+k.p.direction,a.each(k.p.colModel,function(a,b){var
c;for(c=0;q>c;c++)if(l.groupField[c]===b.name){p[c]=a;break}});var
s,t=0,u=a.makeArray(l.groupSummary);u.reverse(),s=k.p.multiselect?' colspan="2"':"",a.each(l.groups,function(f,v){if(l._locgr&&!(v.startRow+v.cnt>(d-1)*e&&v.startRow<d*e))return!0;t++,i=k.p.id+"ghead_"+v.idx,h=i+"_"+f,n="<span style='cursor:pointer;margin-right:8px;margin-left:5px;' class='"+r.icon_base+" "+o+"' onclick=\"jQuery('#"+a.jgrid.jqID(k.p.id)+"').jqGrid('groupingToggle','"+h+"');return false;\"></span>";try{a.isArray(l.formatDisplayField)&&a.isFunction(l.formatDisplayField[v.idx])?(v.displayValue=l.formatDisplayField[v.idx].call(k,v.displayValue,v.value,k.p.colModel[p[v.idx]],v.idx,l),j=v.displayValue):j=k.formatter(h,v.displayValue,p[v.idx],v.value)}catch(w){j=v.displayValue}var
x="";x=a.isFunction(l.groupText[v.idx])?l.groupText[v.idx].call(k,j,v.cnt,v.summary):a.jgrid.template(l.groupText[v.idx],j,v.cnt,v.summary),"string"!=typeof
x&&"number"!=typeof
x&&(x=j),"header"===l.groupSummaryPos[v.idx]?(m+='<tr id="'+h+'"'+(l.groupCollapse&&v.idx>0?' style="display:none;" ':" ")+'role="row" class= "'+r.content+" jqgroup ui-row-"+k.p.direction+" "+i+'"><td style="padding-left:'+12*v.idx+'px;"'+s+">"+n+x+"</td>",m+=g(f,0,l.groups,l.groupColumnShow[v.idx]===!1?""===s?2:3:""===s?1:2),m+="</tr>"):m+='<tr id="'+h+'"'+(l.groupCollapse&&v.idx>0?' style="display:none;" ':" ")+'role="row" class= "'+r.content+" jqgroup ui-row-"+k.p.direction+" "+i+'"><td style="padding-left:'+12*v.idx+'px;" colspan="'+(l.groupColumnShow[v.idx]===!1?c-1:c)+'">'+n+x+"</td></tr>";var
y=q-1===v.idx;if(y){var
z,A,B=l.groups[f+1],C=0,D=v.startRow,E=void
0!==B?B.startRow:l.groups[f].startRow+l.groups[f].cnt;for(l._locgr&&(C=(d-1)*e,C>v.startRow&&(D=C)),z=D;E>z&&b[z-C];z++)m+=b[z-C].join("");if("header"!==l.groupSummaryPos[v.idx]){var
F;if(void
0!==B){for(F=0;F<l.groupField.length&&B.dataIndex!==l.groupField[F];F++);t=l.groupField.length-F}for(A=0;t>A;A++)if(u[A]){var
G="";l.groupCollapse&&!l.showSummaryOnHide&&(G=' style="display:none;"'),m+="<tr"+G+' jqfootlevel="'+(v.idx-A)+'" role="row" class="'+r.content+" jqfoot ui-row-"+k.p.direction+'">',m+=g(f,A,l.groups,0),m+="</tr>"}t=F}}}),a("#"+a.jgrid.jqID(k.p.id)+" tbody:first").append(m),m=null})},groupingGroupBy:function(b,c){return this.each(function(){var
d=this;"string"==typeof
b&&(b=[b]);var
e=d.p.groupingView;d.p.grouping=!0,e._locgr=!1,void
0===e.visibiltyOnNextGrouping&&(e.visibiltyOnNextGrouping=[]);var
f;for(f=0;f<e.groupField.length;f++)!e.groupColumnShow[f]&&e.visibiltyOnNextGrouping[f]&&a(d).jqGrid("showCol",e.groupField[f]);for(f=0;f<b.length;f++)e.visibiltyOnNextGrouping[f]=a("#"+a.jgrid.jqID(d.p.id)+"_"+a.jgrid.jqID(b[f])).is(":visible");d.p.groupingView=a.extend(d.p.groupingView,c||{}),e.groupField=b,a(d).trigger("reloadGrid")})},groupingRemove:function(b){return this.each(function(){var
c=this;if(void
0===b&&(b=!0),c.p.grouping=!1,b===!0){var
d,e=c.p.groupingView;for(d=0;d<e.groupField.length;d++)!e.groupColumnShow[d]&&e.visibiltyOnNextGrouping[d]&&a(c).jqGrid("showCol",e.groupField);a("tr.jqgroup, tr.jqfoot","#"+a.jgrid.jqID(c.p.id)+" tbody:first").remove(),a("tr.jqgrow:hidden","#"+a.jgrid.jqID(c.p.id)+" tbody:first").show()}else
a(c).trigger("reloadGrid")})},groupingCalculations:{handler:function(a,b,c,d,e,f){var
g={sum:function(){return parseFloat(b||0)+parseFloat(f[c]||0)},min:function(){return""===b?parseFloat(f[c]||0):Math.min(parseFloat(b),parseFloat(f[c]||0))},max:function(){return""===b?parseFloat(f[c]||0):Math.max(parseFloat(b),parseFloat(f[c]||0))},count:function(){return""===b&&(b=0),f.hasOwnProperty(c)?b+1:0},avg:function(){return g.sum()}};if(!g[a])throw"jqGrid Grouping No such method: "+a;var
h=g[a]();if(null!=d)if("fixed"===e)h=h.toFixed(d);else{var
i=Math.pow(10,d);h=Math.round(h*i)/i}return h}},setGroupHeaders:function(b){return b=a.extend({useColSpanStyle:!1,groupHeaders:[]},b||{}),this.each(function(){var
c,d,e,f,g,h,i,j,k,l,m,n,o,p,q=this,r=0,s=q.p.colModel,t=s.length,u=q.grid.headers,v=a("table.ui-jqgrid-htable",q.grid.hDiv),w=v.children("thead").children("tr.ui-jqgrid-labels:last").addClass("jqg-second-row-header"),x=v.children("thead"),y=v.find(".jqg-first-row-header"),z=a.jgrid.styleUI[q.p.styleUI||"jQueryUI"].base;q.p.groupHeader||(q.p.groupHeader=[]),q.p.groupHeader.push(b),void
0===y[0]?y=a("<tr>",{role:"row","aria-hidden":"true"}).addClass("jqg-first-row-header").css("height","auto"):y.empty();var
A,B=function(a,b){var
c,d=b.length;for(c=0;d>c;c++)if(b[c].startColumnName===a)return c;return-1};for(a(q).prepend(x),e=a("<tr>",{role:"row"}).addClass("ui-jqgrid-labels jqg-third-row-header"),c=0;t>c;c++)if(g=u[c].el,h=a(g),d=s[c],i={height:"0px",width:u[c].width+"px",display:d.hidden?"none":""},a("<th>",{role:"gridcell"}).css(i).addClass("ui-first-th-"+q.p.direction).appendTo(y),g.style.width="",j=B(d.name,b.groupHeaders),j>=0){for(k=b.groupHeaders[j],l=k.numberOfColumns,m=k.titleText,o=k.className||"",n=0,j=0;l>j&&t>c+j;j++)s[c+j].hidden||n++;f=a("<th>").attr({role:"columnheader"}).addClass(z.headerBox+" ui-th-column-header ui-th-"+q.p.direction+" "+o).html(m),n>0&&f.attr("colspan",String(n)),q.p.headertitles&&f.attr("title",f.text()),0===n&&f.hide(),h.before(f),e.append(g),r=l-1}else
0===r?b.useColSpanStyle?h.attr("rowspan","2"):(a("<th>",{role:"columnheader"}).addClass(z.headerBox+" ui-th-column-header ui-th-"+q.p.direction).css({display:d.hidden?"none":""}).insertBefore(h),e.append(g)):(e.append(g),r--);p=a(q).children("thead"),p.prepend(y),e.insertAfter(w),v.append(p),b.useColSpanStyle&&(v.find("span.ui-jqgrid-resize").each(function(){var
b=a(this).parent();b.is(":visible")&&(this.style.cssText="height: "+b.height()+"px !important; cursor: col-resize;")}),v.find("div.ui-jqgrid-sortable").each(function(){var
b=a(this),c=b.parent();c.is(":visible")&&c.is(":has(span.ui-jqgrid-resize)")&&b.css("top",(c.height()-b.outerHeight())/2-4+"px")})),A=p.find("tr.jqg-first-row-header"),a(q).bind("jqGridResizeStop.setGroupHeaders",function(a,b,c){A.find("th").eq(c)[0].style.width=b+"px"})})},destroyGroupHeader:function(b){return void
0===b&&(b=!0),this.each(function(){var
c,d,e,f,g,h,i,j=this,k=j.grid,l=a("table.ui-jqgrid-htable thead",k.hDiv),m=j.p.colModel;if(k){for(a(this).unbind(".setGroupHeaders"),c=a("<tr>",{role:"row"}).addClass("ui-jqgrid-labels"),f=k.headers,d=0,e=f.length;e>d;d++){i=m[d].hidden?"none":"",g=a(f[d].el).width(f[d].width).css("display",i);try{g.removeAttr("rowSpan")}catch(n){g.attr("rowSpan",1)}c.append(g),h=g.children("span.ui-jqgrid-resize"),h.length>0&&(h[0].style.height=""),g.children("div")[0].style.top=""}a(l).children("tr.ui-jqgrid-labels").remove(),a(l).prepend(c),b===!0&&a(j).jqGrid("setGridParam",{groupHeader:null})}})}})});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery","./grid.base"],a):a(jQuery)}(function(a){"use strict";a.jgrid.extend({setTreeNode:function(b,c){return this.each(function(){var
d=this;if(d.grid&&d.p.treeGrid)for(var
e,f,g,h,i,j,k,l,m=d.p.expColInd,n=d.p.treeReader.expanded_field,o=d.p.treeReader.leaf_field,p=d.p.treeReader.level_field,q=d.p.treeReader.icon_field,r=d.p.treeReader.loaded,s=a.jgrid.styleUI[d.p.styleUI||"jQueryUI"].common;c>b;){var
t,u=a.jgrid.stripPref(d.p.idPrefix,d.rows[b].id),v=d.p._index[u];k=d.p.data[v],"nested"===d.p.treeGridModel&&(k[o]||(e=parseInt(k[d.p.treeReader.left_field],10),f=parseInt(k[d.p.treeReader.right_field],10),k[o]=f===e+1?"true":"false",d.rows[b].cells[d.p._treeleafpos].innerHTML=k[o])),g=parseInt(k[p],10),0===d.p.tree_root_level?(h=g+1,i=g):(h=g,i=g-1),j="<div class='tree-wrap tree-wrap-"+d.p.direction+"' style='width:"+18*h+"px;'>",j+="<div style='"+("rtl"===d.p.direction?"right:":"left:")+18*i+"px;' class='"+s.icon_base+" ",void
0!==k[r]&&("true"===k[r]||k[r]===!0?k[r]=!0:k[r]=!1),"true"===k[o]||k[o]===!0?(j+=(void
0!==k[q]&&""!==k[q]?k[q]:d.p.treeIcons.leaf)+" tree-leaf treeclick",k[o]=!0,l="leaf"):(k[o]=!1,l=""),k[n]=("true"===k[n]||k[n]===!0?!0:!1)&&(k[r]||void
0===k[r]),j+=k[n]===!1?k[o]===!0?"'":d.p.treeIcons.plus+" tree-plus treeclick'":k[o]===!0?"'":d.p.treeIcons.minus+" tree-minus treeclick'",j+="></div></div>",a(d.rows[b].cells[m]).wrapInner("<span class='cell-wrapper"+l+"'></span>").prepend(j),g!==parseInt(d.p.tree_root_level,10)&&(t=a(d).jqGrid("isVisibleNode",k),t||a(d.rows[b]).css("display","none")),a(d.rows[b].cells[m]).find("div.treeclick").bind("click",function(b){var
c=b.target||b.srcElement,e=a.jgrid.stripPref(d.p.idPrefix,a(c,d.rows).closest("tr.jqgrow")[0].id),f=d.p._index[e];return d.p.data[f][o]||(d.p.data[f][n]?(a(d).jqGrid("collapseRow",d.p.data[f]),a(d).jqGrid("collapseNode",d.p.data[f])):(a(d).jqGrid("expandRow",d.p.data[f]),a(d).jqGrid("expandNode",d.p.data[f]))),!1}),d.p.ExpandColClick===!0&&a(d.rows[b].cells[m]).find("span.cell-wrapper").css("cursor","pointer").bind("click",function(b){var
c=b.target||b.srcElement,e=a.jgrid.stripPref(d.p.idPrefix,a(c,d.rows).closest("tr.jqgrow")[0].id),f=d.p._index[e];return d.p.data[f][o]||(d.p.data[f][n]?(a(d).jqGrid("collapseRow",d.p.data[f]),a(d).jqGrid("collapseNode",d.p.data[f])):(a(d).jqGrid("expandRow",d.p.data[f]),a(d).jqGrid("expandNode",d.p.data[f]))),a(d).jqGrid("setSelection",e),!1}),b++}})},setTreeGrid:function(){return this.each(function(){var
b,c,d,e,f=this,g=0,h=!1,i=[],j=a.jgrid.styleUI[f.p.styleUI||"jQueryUI"].treegrid;if(f.p.treeGrid){f.p.treedatatype||a.extend(f.p,{treedatatype:f.p.datatype}),f.p.loadonce&&(f.p.treedatatype="local"),f.p.subGrid=!1,f.p.altRows=!1,f.p.pgbuttons=!1,f.p.pginput=!1,f.p.gridview=!0,null===f.p.rowTotal&&(f.p.rowNum=1e4),f.p.multiselect=!1,f.p.rowList=[],f.p.expColInd=0,b=j.icon_plus,"jQueryUI"===f.p.styleUI&&(b+="rtl"===f.p.direction?"w":"e"),f.p.treeIcons=a.extend({plus:b,minus:j.icon_minus,leaf:j.icon_leaf},f.p.treeIcons||{}),"nested"===f.p.treeGridModel?f.p.treeReader=a.extend({level_field:"level",left_field:"lft",right_field:"rgt",leaf_field:"isLeaf",expanded_field:"expanded",loaded:"loaded",icon_field:"icon"},f.p.treeReader):"adjacency"===f.p.treeGridModel&&(f.p.treeReader=a.extend({level_field:"level",parent_id_field:"parent",leaf_field:"isLeaf",expanded_field:"expanded",loaded:"loaded",icon_field:"icon"},f.p.treeReader));for(d
in
f.p.colModel)if(f.p.colModel.hasOwnProperty(d)){c=f.p.colModel[d].name,c!==f.p.ExpandColumn||h||(h=!0,f.p.expColInd=g),g++;for(e
in
f.p.treeReader)f.p.treeReader.hasOwnProperty(e)&&f.p.treeReader[e]===c&&i.push(c)}a.each(f.p.treeReader,function(b,c){c&&-1===a.inArray(c,i)&&("leaf_field"===b&&(f.p._treeleafpos=g),g++,f.p.colNames.push(c),f.p.colModel.push({name:c,width:1,hidden:!0,sortable:!1,resizable:!1,hidedlg:!0,editable:!0,search:!1}))})}})},expandRow:function(b){this.each(function(){var
c=this;if(c.grid&&c.p.treeGrid){var
d=a(c).jqGrid("getNodeChildren",b),e=c.p.treeReader.expanded_field,f=b[c.p.localReader.id],g=a.isFunction(c.p.beforeExpandTreeGridRow)?c.p.beforeExpandTreeGridRow.call(c,f,b,d):!0;g!==!1&&(a(d).each(function(){var
b=c.p.idPrefix+a.jgrid.getAccessor(this,c.p.localReader.id);a(a(c).jqGrid("getGridRowById",b)).css("display",""),this[e]&&a(c).jqGrid("expandRow",this)}),a.isFunction(c.p.afterExpandTreeGridRow)&&c.p.afterExpandTreeGridRow.call(c,f,b,d))}})},collapseRow:function(b){this.each(function(){var
c=this;if(c.grid&&c.p.treeGrid){var
d=a(c).jqGrid("getNodeChildren",b),e=c.p.treeReader.expanded_field,f=b[c.p.localReader.id],g=a.isFunction(c.p.beforeCollapseTreeGridRow)?c.p.beforeCollapseTreeGridRow.call(c,f,b,d):!0;g!==!1&&(a(d).each(function(){var
b=c.p.idPrefix+a.jgrid.getAccessor(this,c.p.localReader.id);a(a(c).jqGrid("getGridRowById",b)).css("display","none"),this[e]&&a(c).jqGrid("collapseRow",this)}),a.isFunction(c.p.afterCollapseTreeGridRow)&&c.p.afterCollapseTreeGridRow.call(c,f,b,d))}})},getRootNodes:function(b){var
c=[];return this.each(function(){var
d,e,f,g=this;if(g.grid&&g.p.treeGrid)switch("boolean"!=typeof
b&&(b=!1),f=b?a(g).jqGrid("getRowData",null,!0):g.p.data,g.p.treeGridModel){case"nested":d=g.p.treeReader.level_field,a(f).each(function(){parseInt(this[d],10)===parseInt(g.p.tree_root_level,10)&&(b?c.push(g.p.data[g.p._index[this[g.p.keyName]]]):c.push(this))});break;case"adjacency":e=g.p.treeReader.parent_id_field,a(f).each(function(){(null===this[e]||"null"===String(this[e]).toLowerCase())&&(b?c.push(g.p.data[g.p._index[this[g.p.keyName]]]):c.push(this))})}}),c},getNodeDepth:function(b){var
c=null;return this.each(function(){if(this.grid&&this.p.treeGrid){var
d=this;switch(d.p.treeGridModel){case"nested":var
e=d.p.treeReader.level_field;c=parseInt(b[e],10)-parseInt(d.p.tree_root_level,10);break;case"adjacency":c=a(d).jqGrid("getNodeAncestors",b).length}}}),c},getNodeParent:function(b){var
c=null;return this.each(function(){var
d=this;if(d.grid&&d.p.treeGrid)switch(d.p.treeGridModel){case"nested":var
e=d.p.treeReader.left_field,f=d.p.treeReader.right_field,g=d.p.treeReader.level_field,h=parseInt(b[e],10),i=parseInt(b[f],10),j=parseInt(b[g],10);a(this.p.data).each(function(){return parseInt(this[g],10)===j-1&&parseInt(this[e],10)<h&&parseInt(this[f],10)>i?(c=this,!1):void
0});break;case"adjacency":for(var
k=d.p.treeReader.parent_id_field,l=d.p.localReader.id,m=b[l],n=d.p._index[m];n--;)if(d.p.data[n][l]===a.jgrid.stripPref(d.p.idPrefix,b[k])){c=d.p.data[n];break}}}),c},getNodeChildren:function(b){var
c=[];return this.each(function(){var
d=this;if(d.grid&&d.p.treeGrid)switch(d.p.treeGridModel){case"nested":var
e=d.p.treeReader.left_field,f=d.p.treeReader.right_field,g=d.p.treeReader.level_field,h=parseInt(b[e],10),i=parseInt(b[f],10),j=parseInt(b[g],10);a(this.p.data).each(function(){parseInt(this[g],10)===j+1&&parseInt(this[e],10)>h&&parseInt(this[f],10)<i&&c.push(this)});break;case"adjacency":var
k=d.p.treeReader.parent_id_field,l=d.p.localReader.id;a(this.p.data).each(function(){this[k]==a.jgrid.stripPref(d.p.idPrefix,b[l])&&c.push(this)})}}),c},getFullTreeNode:function(b,c){var
d=[];return this.each(function(){var
e,f=this,g=f.p.treeReader.expanded_field;if(f.grid&&f.p.treeGrid)switch((null==c||"boolean"!=typeof
c)&&(c=!1),f.p.treeGridModel){case"nested":var
h=f.p.treeReader.left_field,i=f.p.treeReader.right_field,j=f.p.treeReader.level_field,k=parseInt(b[h],10),l=parseInt(b[i],10),m=parseInt(b[j],10);a(this.p.data).each(function(){parseInt(this[j],10)>=m&&parseInt(this[h],10)>=k&&parseInt(this[h],10)<=l&&(c&&(this[g]=!0),d.push(this))});break;case"adjacency":if(b){d.push(b);var
n=f.p.treeReader.parent_id_field,o=f.p.localReader.id;a(this.p.data).each(function(b){for(e=d.length,b=0;e>b;b++)if(a.jgrid.stripPref(f.p.idPrefix,d[b][o])===this[n]){c&&(this[g]=!0),d.push(this);break}})}}}),d},getNodeAncestors:function(b){var
c=[];return this.each(function(){if(this.grid&&this.p.treeGrid)for(var
d=a(this).jqGrid("getNodeParent",b);d;)c.push(d),d=a(this).jqGrid("getNodeParent",d)}),c},isVisibleNode:function(b){var
c=!0;return this.each(function(){var
d=this;if(d.grid&&d.p.treeGrid){var
e=a(d).jqGrid("getNodeAncestors",b),f=d.p.treeReader.expanded_field;a(e).each(function(){return c=c&&this[f],c?void
0:!1})}}),c},isNodeLoaded:function(b){var
c;return this.each(function(){var
d=this;if(d.grid&&d.p.treeGrid){var
e=d.p.treeReader.leaf_field,f=d.p.treeReader.loaded;c=void
0!==b?void
0!==b[f]?b[f]:b[e]||a(d).jqGrid("getNodeChildren",b).length>0?!0:!1:!1}}),c},reloadNode:function(b){return this.each(function(){if(this.grid&&this.p.treeGrid){var
c=this.p.localReader.id,d=this.p.selrow;a(this).jqGrid("delChildren",b[c]);var
e=this.p.treeReader.expanded_field,f=this.p.treeReader.parent_id_field,g=this.p.treeReader.loaded,h=this.p.treeReader.level_field,i=this.p.treeReader.left_field,j=this.p.treeReader.right_field,k=a.jgrid.getAccessor(b,this.p.localReader.id),l=a("#"+k,this.grid.bDiv)[0];b[e]=!0,a("div.treeclick",l).removeClass(this.p.treeIcons.plus+" tree-plus").addClass(this.p.treeIcons.minus+" tree-minus"),this.p.treeANode=l.rowIndex,this.p.datatype=this.p.treedatatype,"nested"===this.p.treeGridModel?a(this).jqGrid("setGridParam",{postData:{nodeid:k,n_left:b[i],n_right:b[j],n_level:b[h]}}):a(this).jqGrid("setGridParam",{postData:{nodeid:k,parentid:b[f],n_level:b[h]}}),a(this).trigger("reloadGrid"),b[g]=!0,"nested"===this.p.treeGridModel?a(this).jqGrid("setGridParam",{selrow:d,postData:{nodeid:"",n_left:"",n_right:"",n_level:""}}):a(this).jqGrid("setGridParam",{selrow:d,postData:{nodeid:"",parentid:"",n_level:""}})}})},expandNode:function(b){return this.each(function(){if(this.grid&&this.p.treeGrid){var
c=this.p.treeReader.expanded_field,d=this.p.treeReader.parent_id_field,e=this.p.treeReader.loaded,f=this.p.treeReader.level_field,g=this.p.treeReader.left_field,h=this.p.treeReader.right_field;if(!b[c]){var
i=a.jgrid.getAccessor(b,this.p.localReader.id),j=a("#"+this.p.idPrefix+a.jgrid.jqID(i),this.grid.bDiv)[0],k=this.p._index[i],l=a.isFunction(this.p.beforeExpandTreeGridNode)?this.p.beforeExpandTreeGridNode.call(this,i,b):!0;if(l===!1)return;a(this).jqGrid("isNodeLoaded",this.p.data[k])?(b[c]=!0,a("div.treeclick",j).removeClass(this.p.treeIcons.plus+" tree-plus").addClass(this.p.treeIcons.minus+" tree-minus")):this.grid.hDiv.loading||(b[c]=!0,a("div.treeclick",j).removeClass(this.p.treeIcons.plus+" tree-plus").addClass(this.p.treeIcons.minus+" tree-minus"),this.p.treeANode=j.rowIndex,this.p.datatype=this.p.treedatatype,"nested"===this.p.treeGridModel?a(this).jqGrid("setGridParam",{postData:{nodeid:i,n_left:b[g],n_right:b[h],n_level:b[f]}}):a(this).jqGrid("setGridParam",{postData:{nodeid:i,parentid:b[d],n_level:b[f]}}),a(this).trigger("reloadGrid"),b[e]=!0,"nested"===this.p.treeGridModel?a(this).jqGrid("setGridParam",{postData:{nodeid:"",n_left:"",n_right:"",n_level:""}}):a(this).jqGrid("setGridParam",{postData:{nodeid:"",parentid:"",n_level:""}})),a.isFunction(this.p.afterExpandTreeGridNode)&&this.p.afterExpandTreeGridNode.call(this,i,b)}}})},collapseNode:function(b){return this.each(function(){if(this.grid&&this.p.treeGrid){var
c=this.p.treeReader.expanded_field;if(b[c]){var
d=a.jgrid.getAccessor(b,this.p.localReader.id),e=a.isFunction(this.p.beforeCollapseTreeGridNode)?this.p.beforeCollapseTreeGridNode.call(this,d,b):!0,f=a("#"+this.p.idPrefix+a.jgrid.jqID(d),this.grid.bDiv)[0];if(b[c]=!1,e===!1)return;a("div.treeclick",f).removeClass(this.p.treeIcons.minus+" tree-minus").addClass(this.p.treeIcons.plus+" tree-plus"),a.isFunction(this.p.afterCollapseTreeGridNode)&&this.p.afterCollapseTreeGridNode.call(this,d,b)}}})},SortTree:function(b,c,d,e){return this.each(function(){if(this.grid&&this.p.treeGrid){var
f,g,h,i,j,k=[],l=this,m=a(this).jqGrid("getRootNodes",l.p.search);for(i=a.jgrid.from.call(this,m),i.orderBy(b,c,d,e),j=i.select(),f=0,g=j.length;g>f;f++)h=j[f],k.push(h),a(this).jqGrid("collectChildrenSortTree",k,h,b,c,d,e);a.each(k,function(b){var
c=a.jgrid.getAccessor(this,l.p.localReader.id);a("#"+a.jgrid.jqID(l.p.id)+" tbody tr:eq("+b+")").after(a("tr#"+a.jgrid.jqID(c),l.grid.bDiv))}),i=null,j=null,k=null}})},searchTree:function(b){var
c,d,e,f=b.length||0,g=[],h=[],i=[];return this.each(function(){if(this.grid&&this.p.treeGrid&&f)for(d=this.p.localReader.id,c=0;f>c;c++)g=a(this).jqGrid("getNodeAncestors",b[c]),g.length||g.push(b[c]),e=g[g.length-1][d],-1===a.inArray(e,h)&&(h.push(e),g=a(this).jqGrid("getFullTreeNode",g[g.length-1],!0),i=i.concat(g))}),i},collectChildrenSortTree:function(b,c,d,e,f,g){return this.each(function(){if(this.grid&&this.p.treeGrid){var
h,i,j,k,l,m;for(k=a(this).jqGrid("getNodeChildren",c),l=a.jgrid.from.call(this,k),l.orderBy(d,e,f,g),m=l.select(),h=0,i=m.length;i>h;h++)j=m[h],b.push(j),a(this).jqGrid("collectChildrenSortTree",b,j,d,e,f,g)}})},setTreeRow:function(b,c){var
d=!1;return this.each(function(){var
e=this;e.grid&&e.p.treeGrid&&(d=a(e).jqGrid("setRowData",b,c))}),d},delTreeNode:function(b){return this.each(function(){var
c,d,e,f,g,h=this,i=h.p.localReader.id,j=h.p.treeReader.left_field,k=h.p.treeReader.right_field;if(h.grid&&h.p.treeGrid){var
l=h.p._index[b];if(void
0!==l){d=parseInt(h.p.data[l][k],10),e=d-parseInt(h.p.data[l][j],10)+1;var
m=a(h).jqGrid("getFullTreeNode",h.p.data[l]);if(m.length>0)for(c=0;c<m.length;c++)a(h).jqGrid("delRowData",m[c][i]);if("nested"===h.p.treeGridModel){if(f=a.jgrid.from.call(h,h.p.data).greater(j,d,{stype:"integer"}).select(),f.length)for(g
in
f)f.hasOwnProperty(g)&&(f[g][j]=parseInt(f[g][j],10)-e);if(f=a.jgrid.from.call(h,h.p.data).greater(k,d,{stype:"integer"}).select(),f.length)for(g
in
f)f.hasOwnProperty(g)&&(f[g][k]=parseInt(f[g][k],10)-e)}}}})},delChildren:function(b){return this.each(function(){var
c,d,e,f,g=this,h=g.p.localReader.id,i=g.p.treeReader.left_field,j=g.p.treeReader.right_field;if(g.grid&&g.p.treeGrid){var
k=g.p._index[b];if(void
0!==k){c=parseInt(g.p.data[k][j],10),d=c-parseInt(g.p.data[k][i],10)+1;var
l=a(g).jqGrid("getFullTreeNode",g.p.data[k]);if(l.length>0)for(var
m=0;m<l.length;m++)l[m][h]!==b&&a(g).jqGrid("delRowData",l[m][h]);if("nested"===g.p.treeGridModel){if(e=a.jgrid.from(g.p.data).greater(i,c,{stype:"integer"}).select(),e.length)for(f
in
e)e.hasOwnProperty(f)&&(e[f][i]=parseInt(e[f][i],10)-d);if(e=a.jgrid.from(g.p.data).greater(j,c,{stype:"integer"}).select(),e.length)for(f
in
e)e.hasOwnProperty(f)&&(e[f][j]=parseInt(e[f][j],10)-d)}}}})},addChildNode:function(b,c,d,e){var
f=this[0];if(d){var
g,h,i,j,k,l,m,n,o=f.p.treeReader.expanded_field,p=f.p.treeReader.leaf_field,q=f.p.treeReader.level_field,r=f.p.treeReader.parent_id_field,s=f.p.treeReader.left_field,t=f.p.treeReader.right_field,u=f.p.treeReader.loaded,v=0,w=c;if(void
0===e&&(e=!1),null==b){if(k=f.p.data.length-1,k>=0)for(;k>=0;)v=Math.max(v,parseInt(f.p.data[k][f.p.localReader.id],10)),k--;b=v+1}var
x=a(f).jqGrid("getInd",c);if(m=!1,void
0===c||null===c||""===c)c=null,w=null,g="last",j=f.p.tree_root_level,k=f.p.data.length+1;else{g="after",h=f.p._index[c],i=f.p.data[h],c=i[f.p.localReader.id],j=parseInt(i[q],10)+1;var
y=a(f).jqGrid("getFullTreeNode",i);y.length?(k=y[y.length-1][f.p.localReader.id],w=k,k=a(f).jqGrid("getInd",w)+1):k=a(f).jqGrid("getInd",c)+1,i[p]&&(m=!0,i[o]=!0,a(f.rows[x]).find("span.cell-wrapperleaf").removeClass("cell-wrapperleaf").addClass("cell-wrapper").end().find("div.tree-leaf").removeClass(f.p.treeIcons.leaf+" tree-leaf").addClass(f.p.treeIcons.minus+" tree-minus"),f.p.data[h][p]=!1,i[u]=!0)}if(l=k+1,void
0===d[o]&&(d[o]=!1),void
0===d[u]&&(d[u]=!1),d[q]=j,void
0===d[p]&&(d[p]=!0),"adjacency"===f.p.treeGridModel&&(d[r]=c),"nested"===f.p.treeGridModel){var
z,A,B;if(null!==c){if(n=parseInt(i[t],10),z=a.jgrid.from.call(f,f.p.data),z=z.greaterOrEquals(t,n,{stype:"integer"}),A=z.select(),A.length)for(B
in
A)A.hasOwnProperty(B)&&(A[B][s]=A[B][s]>n?parseInt(A[B][s],10)+2:A[B][s],A[B][t]=A[B][t]>=n?parseInt(A[B][t],10)+2:A[B][t]);d[s]=n,d[t]=n+1}else{if(n=parseInt(a(f).jqGrid("getCol",t,!1,"max"),10),A=a.jgrid.from.call(f,f.p.data).greater(s,n,{stype:"integer"}).select(),A.length)for(B
in
A)A.hasOwnProperty(B)&&(A[B][s]=parseInt(A[B][s],10)+2);if(A=a.jgrid.from.call(f,f.p.data).greater(t,n,{stype:"integer"}).select(),A.length)for(B
in
A)A.hasOwnProperty(B)&&(A[B][t]=parseInt(A[B][t],10)+2);d[s]=n+1,d[t]=n+2}}(null===c||a(f).jqGrid("isNodeLoaded",i)||m)&&(a(f).jqGrid("addRowData",b,d,g,w),a(f).jqGrid("setTreeNode",k,l)),i&&!i[o]&&e&&a(f.rows[x]).find("div.treeclick").click()}}})});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery","./grid.base","./grid.grouping"],a):a(jQuery)}(function(a){"use strict";function
b(a,b){var
c,d,e,f=[];if(!this||"function"!=typeof
a||a
instanceof
RegExp)throw new
TypeError;for(e=this.length,c=0;e>c;c++)if(this.hasOwnProperty(c)&&(d=this[c],a.call(b,d,c,this))){f.push(d);break}return f}a.assocArraySize=function(a){var
b,c=0;for(b
in
a)a.hasOwnProperty(b)&&c++;return c},a.jgrid.extend({pivotSetup:function(c,d){var
e=[],f=[],g=[],h=[],i=[],j={grouping:!0,groupingView:{groupField:[],groupSummary:[],groupSummaryPos:[]}},k=[],l=a.extend({rowTotals:!1,rowTotalsText:"Total",colTotals:!1,groupSummary:!0,groupSummaryPos:"header",frozenStaticCols:!1},d||{});return this.each(function(){function
d(a,c,d){var
e;return e=b.call(a,c,d),e.length>0?e[0]:null}function
m(a,b){var
c,d=0,e=!0;for(c
in
a)if(a.hasOwnProperty(c)){if(a[c]!=this[d]){e=!1;break}if(d++,d>=this.length)break}return e&&(r=b),e}function
n(a,b,c,d,e){var
f;switch(a){case"sum":f=parseFloat(b||0)+parseFloat(d[c]||0);break;case"count":(""===b||null==b)&&(b=0),f=d.hasOwnProperty(c)?b+1:0;break;case"min":f=""===b||null==b?parseFloat(d[c]||0):Math.min(parseFloat(b),parseFloat(d[c]||0));break;case"max":f=""===b||null==b?parseFloat(d[c]||0):Math.max(parseFloat(b),parseFloat(d[c]||0));break;case"avg":f=(parseFloat(b||0)*(e-1)+parseFloat(d[c]||0))/e}return f}function
o(b,c,d,e){var
f,g,j,k,l=c.length,m="",o=[];for(a.isArray(d)?(k=d.length,o=d):(k=1,o[0]=d),h=[],i=[],h.root=0,e._count?e._count++:e._count=1,j=0;k>j;j++){var
p,q=[];for(f=0;l>f;f++){if(null==d)g=a.trim(c[f].member)+"_"+c[f].aggregator,p=g,o[0]=c[f].label||c[f].aggregator+" "+a.trim(c[f].member);else{p=d[j].replace(/\s+/g,"");try{g=1===l?m+p:m+p+"_"+c[f].aggregator+"_"+String(f)}catch(r){}o[j]=d[j]}g=isNaN(parseInt(g,10))?g:g+" ",e[g]=q[g]=n(c[f].aggregator,e[g],c[f].member,b,e._count)}m+=d[j].replace(/\s+/g,""),h[g]=q,i[g]=o[j]}return e}function
p(a){var
b,c,d,f,g;for(d
in
a)if(a.hasOwnProperty(d)){if("object"!=typeof
a[d]){if("level"===d){if(void
0===L[a.level]&&(L[a.level]="",a.level>0&&-1===a.text.indexOf("_r_Totals")&&(k[a.level-1]={useColSpanStyle:!1,groupHeaders:[]})),L[a.level]!==a.text&&a.children.length&&-1===a.text.indexOf("_r_Totals")&&a.level>0){k[a.level-1].groupHeaders.push({titleText:a.label,numberOfColumns:0});var
h=k[a.level-1].groupHeaders.length-1,i=0===h?N:M;if(a.level-1===(l.rowTotals?1:0)&&h>0){for(var
j=0,m=0;h>m;m++)j+=k[a.level-1].groupHeaders[m].numberOfColumns;j&&(i=j+t)}e[i]&&(k[a.level-1].groupHeaders[h].startColumnName=e[i].name,k[a.level-1].groupHeaders[h].numberOfColumns=e.length-i),M=e.length}L[a.level]=a.text}if(a.level===u&&"level"===d&&u>0)if(v>1){var
n=1;for(b
in
a.fields)a.fields.hasOwnProperty(b)&&(1===n&&k[u-1].groupHeaders.push({startColumnName:b,numberOfColumns:1,titleText:a.label||a.text}),n++);k[u-1].groupHeaders[k[u-1].groupHeaders.length-1].numberOfColumns=n-1}else
k.splice(u-1,1)}if(null!=a[d]&&"object"==typeof
a[d]&&p(a[d]),"level"===d&&a.level>0&&(a.level===(0===u?a.level:u)||-1!==L[a.level].indexOf("_r_Totals"))){c=0;for(b
in
a.fields)if(a.fields.hasOwnProperty(b)){g={};for(f
in
l.aggregates[c])if(l.aggregates[c].hasOwnProperty(f))switch(f){case"member":case"label":case"aggregator":break;default:g[f]=l.aggregates[c][f]}v>1?(g.name=b,g.label=l.aggregates[c].label||a.label):(g.name=a.text,g.label="_r_Totals"===a.text?l.rowTotalsText:a.label),e.push(g),c++}}}}var
q,r,s,t,u,v,w,x,y=c.length,z=0;if(l.rowTotals&&l.yDimension.length>0){var
A=l.yDimension[0].dataName;l.yDimension.splice(0,0,{dataName:A}),l.yDimension[0].converter=function(){return"_r_Totals"}}if(t=a.isArray(l.xDimension)?l.xDimension.length:0,u=l.yDimension.length,v=a.isArray(l.aggregates)?l.aggregates.length:0,0===t||0===v)throw"xDimension or aggregates optiona are not set!";var
B;for(s=0;t>s;s++)B={name:l.xDimension[s].dataName,frozen:l.frozenStaticCols},null==l.xDimension[s].isGroupField&&(l.xDimension[s].isGroupField=!0),B=a.extend(!0,B,l.xDimension[s]),e.push(B);for(var
C=t-1,D={};y>z;){q=c[z];var
E=[],F=[];w={},s=0;do
E[s]=a.trim(q[l.xDimension[s].dataName]),w[l.xDimension[s].dataName]=E[s],s++;while(t>s);var
G=0;if(r=-1,x=d(f,m,E)){if(r>=0){if(G=0,u>=1){for(G=0;u>G;G++)F[G]=a.trim(q[l.yDimension[G].dataName]),l.yDimension[G].converter&&a.isFunction(l.yDimension[G].converter)&&(F[G]=l.yDimension[G].converter.call(this,F[G],E,F));x=o(q,l.aggregates,F,x)}else
0===u&&(x=o(q,l.aggregates,null,x));f[r]=x}}else{if(G=0,u>=1){for(G=0;u>G;G++)F[G]=a.trim(q[l.yDimension[G].dataName]),l.yDimension[G].converter&&a.isFunction(l.yDimension[G].converter)&&(F[G]=l.yDimension[G].converter.call(this,F[G],E,F));w=o(q,l.aggregates,F,w)}else
0===u&&(w=o(q,l.aggregates,null,w));f.push(w)}var
H,I=0,J=null,K=null;for(H
in
h)if(h.hasOwnProperty(H)){if(0===I)D.children&&void
0!==D.children||(D={text:H,level:0,children:[],label:H}),J=D.children;else{for(K=null,s=0;s<J.length;s++)if(J[s].text===H){K=J[s];break}K?J=K.children:(J.push({children:[],text:H,level:I,fields:h[H],label:i[H]}),J=J[J.length-1].children)}I++}z++}var
L=[],M=e.length,N=M;u>0&&(k[u-1]={useColSpanStyle:!1,groupHeaders:[]}),p(D);var
O;if(l.colTotals)for(var
P=f.length;P--;)for(s=t;s<e.length;s++)O=e[s].name,g[O]?g[O]+=parseFloat(f[P][O]||0):g[O]=parseFloat(f[P][O]||0);if(C>0)for(s=0;C>s;s++)e[s].isGroupField&&(j.groupingView.groupField.push(e[s].name),j.groupingView.groupSummary.push(l.groupSummary),j.groupingView.groupSummaryPos.push(l.groupSummaryPos));else
j.grouping=!1;j.sortname=e[C].name,j.groupingView.hideFirstGroupCol=!0}),{colModel:e,rows:f,groupOptions:j,groupHeaders:k,summary:g}},jqPivot:function(b,c,d,e){return this.each(function(){function
f(b){var
e,f,h,i,j=jQuery(g).jqGrid("pivotSetup",b,c),k=a.assocArraySize(j.summary)>0?!0:!1,l=a.jgrid.from.call(g,j.rows);for(c.ignoreCase&&(l=l.ignoreCase()),e=0;e<j.groupOptions.groupingView.groupField.length;e++)f=c.xDimension[e].sortorder?c.xDimension[e].sortorder:"asc",h=c.xDimension[e].sorttype?c.xDimension[e].sorttype:"text",l.orderBy(j.groupOptions.groupingView.groupField[e],f,h,"",h);i=c.xDimension.length,j.groupOptions.sortname&&i&&(f=c.xDimension[i-1].sortorder?c.xDimension[i-1].sortorder:"asc",h=c.xDimension[i-1].sorttype?c.xDimension[i-1].sorttype:"text",l.orderBy(j.groupOptions.sortname,f,h,"",h)),jQuery(g).jqGrid(a.extend(!0,{datastr:a.extend(l.select(),k?{userdata:j.summary}:{}),datatype:"jsonstring",footerrow:k,userDataOnFooter:k,colModel:j.colModel,viewrecords:!0,sortname:c.xDimension[0].dataName},j.groupOptions,d||{}));var
m=j.groupHeaders;if(m.length)for(e=0;e<m.length;e++)m[e]&&m[e].groupHeaders.length&&jQuery(g).jqGrid("setGroupHeaders",m[e]);c.frozenStaticCols&&jQuery(g).jqGrid("setFrozenColumns")}var
g=this;"string"==typeof
b?a.ajax(a.extend({url:b,dataType:"json",success:function(b){f(a.jgrid.getAccessor(b,e&&e.reader?e.reader:"rows"))}},e||{})):f(b)})}})});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery","./grid.utils","./grid.base"],a):a(jQuery)}(function(a){"use strict";a.jgrid=a.jgrid||{},a.extend(a.jgrid,{saveState:function(b,c){if(c=a.extend({useStorage:!0,storageType:"localStorage",beforeSetItem:null,compression:!1,compressionModule:"LZString",compressionMethod:"compressToUTF16"},c||{}),b){var
d,e,f="",g="",h=a("#"+b)[0];if(h.grid){if(e=a(h).data("inlineNav"),e&&h.p.inlineNav&&a(h).jqGrid("setGridParam",{_iN:e}),e=a(h).data("filterToolbar"),e&&h.p.filterToolbar&&a(h).jqGrid("setGridParam",{_fT:e}),f=a(h).jqGrid("jqGridExport",{exptype:"jsonstring",ident:"",root:""}),a(h.grid.bDiv).find(".ui-jqgrid-btable tr:gt(0)").each(function(a,b){g+=b.outerHTML}),a.isFunction(c.beforeSetItem)&&(d=c.beforeSetItem.call(h,f),null!=d&&(f=d)),c.compression&&c.compressionModule)try{d=window[c.compressionModule][c.compressionMethod](f),null!=d&&(f=d,g=window[c.compressionModule][c.compressionMethod](g))}catch(i){}if(c.useStorage&&a.jgrid.isLocalStorage())try{window[c.storageType].setItem("jqGrid"+h.p.id,f),window[c.storageType].setItem("jqGrid"+h.p.id+"_data",g)}catch(i){22===i.code&&alert("Local storage limit is over!")}return f}}},loadState:function(b,c,d){if(d=a.extend({useStorage:!0,storageType:"localStorage",clearAfterLoad:!1,beforeSetGrid:null,afterSetGrid:null,decompression:!1,decompressionModule:"LZString",decompressionMethod:"decompressFromUTF16"},d||{}),b){var
e,f,g,h,i,j=a("#"+b)[0];if(d.useStorage)try{c=window[d.storageType].getItem("jqGrid"+j.id),g=window[d.storageType].getItem("jqGrid"+j.id+"_data")}catch(k){}if(c){if(d.decompression&&d.decompressionModule)try{e=window[d.decompressionModule][d.decompressionMethod](c),null!=e&&(c=e,g=window[d.decompressionModule][d.decompressionMethod](g))}catch(k){}if(e=jqGridUtils.parse(c),e&&"object"===a.type(e)){j.grid&&a.jgrid.gridUnload(b),a.isFunction(d.beforeSetGrid)&&(f=d.beforeSetGrid(e),f&&"object"===a.type(f)&&(e=f));var
l=function(a){var
b;return b=a},m={reccount:e.reccount,records:e.records,lastpage:e.lastpage,shrinkToFit:l(e.shrinkToFit),data:l(e.data),datatype:l(e.datatype),grouping:l(e.grouping)};e.shrinkToFit=!1,e.data=[],e.datatype="local",e.grouping=!1,e.inlineNav&&(h=l(e._iN),e._iN=null,delete
e._iN),e.filterToolbar&&(i=l(e._fT),e._fT=null,delete
e._fT);var
n=a("#"+b).jqGrid(e);if(n.append(g),n.jqGrid("setGridParam",m),e.storeNavOptions&&e.navGrid&&(n[0].p.navGrid=!1,n.jqGrid("navGrid",e.pager,e.navOptions,e.editOptions,e.addOptions,e.delOptions,e.searchOptions,e.viewOptions),e.navButtons&&e.navButtons.length))for(var
o=0;o<e.navButtons.length;o++)"sepclass"in
e.navButtons[o][1]?n.jqGrid("navSeparatorAdd",e.navButtons[o][0],e.navButtons[o][1]):n.jqGrid("navButtonAdd",e.navButtons[o][0],e.navButtons[o][1]);e.inlineNav&&h&&(n.jqGrid("setGridParam",{inlineNav:!1}),n.jqGrid("inlineNav",e.pager,h)),e.filterToolbar&&i&&(n.jqGrid("setGridParam",{filterToolbar:!1}),i.restoreFromFilters=!0,n.jqGrid("filterToolbar",i)),e.frozenColumns&&n.jqGrid("setFrozenColumns"),n[0].updatepager(!0,!0),a.isFunction(d.afterSetGrid)&&d.afterSetGrid(n),d.clearAfterLoad&&(window[d.storageType].removeItem("jqGrid"+j.id),window[d.storageType].removeItem("jqGrid"+j.id+"_data"))}else
alert("can not convert to object")}}},isGridInStorage:function(b,c){var
d={storageType:"localStorage"};d=a.extend(d,c||{});var
e,f,g;try{f=window[d.storageType].getItem("jqGrid"+b),g=window[d.storageType].getItem("jqGrid"+b+"_data"),e=null!=f&&null!=g&&"string"==typeof
f&&"string"==typeof
g}catch(h){e=!1}return e},setRegional:function(b,c){var
d={storageType:"sessionStorage"};if(d=a.extend(d,c||{}),d.regional){a.jgrid.saveState(b,d),d.beforeSetGrid=function(a){return a.regional=d.regional,a.force_regional=!0,a},a.jgrid.loadState(b,null,d);var
e=a("#"+b)[0],f=a(e).jqGrid("getGridParam","colModel"),g=-1,h=a.jgrid.getRegional(e,"nav");a.each(f,function(a){return this.formatter&&"actions"===this.formatter?(g=a,!1):void
0}),-1!==g&&h&&a("#"+b+" tbody tr").each(function(){var
b=this.cells[g];a(b).find(".ui-inline-edit").attr("title",h.edittitle),a(b).find(".ui-inline-del").attr("title",h.deltitle),a(b).find(".ui-inline-save").attr("title",h.savetitle),a(b).find(".ui-inline-cancel").attr("title",h.canceltitle)});try{window[d.storageType].removeItem("jqGrid"+e.id),window[d.storageType].removeItem("jqGrid"+e.id+"_data")}catch(i){}}},jqGridImport:function(b,c){c=a.extend({imptype:"xml",impstring:"",impurl:"",mtype:"GET",impData:{},xmlGrid:{config:"root>grid",data:"root>rows"},jsonGrid:{config:"grid",data:"data"},ajaxOptions:{}},c||{});var
d=(0===b.indexOf("#")?"":"#")+a.jgrid.jqID(b),e=function(b,c){var
e,f,g,h=a(c.xmlGrid.config,b)[0],i=a(c.xmlGrid.data,b)[0];if(jqGridUtils.xmlToJSON){e=jqGridUtils.xmlToJSON(h);for(g
in
e)e.hasOwnProperty(g)&&(f=e[g]);if(i){var
j=e.grid.datatype;e.grid.datatype="xmlstring",e.grid.datastr=b,a(d).jqGrid(f).jqGrid("setGridParam",{datatype:j})}else
setTimeout(function(){a(d).jqGrid(f)},0)}else
alert("xml2json or parse are not present")},f=function(b,c){if(b&&"string"==typeof
b){var
e=jqGridUtils.parse(b),f=e[c.jsonGrid.config],g=e[c.jsonGrid.data];if(g){var
h=f.datatype;f.datatype="jsonstring",f.datastr=g,a(d).jqGrid(f).jqGrid("setGridParam",{datatype:h})}else
a(d).jqGrid(f)}};switch(c.imptype){case"xml":a.ajax(a.extend({url:c.impurl,type:c.mtype,data:c.impData,dataType:"xml",complete:function(b,f){"success"===f&&(e(b.responseXML,c),a(d).triggerHandler("jqGridImportComplete",[b,c]),a.isFunction(c.importComplete)&&c.importComplete(b)),b=null}},c.ajaxOptions));break;case"xmlstring":if(c.impstring&&"string"==typeof
c.impstring){var
g=a.parseXML(c.impstring);g&&(e(g,c),a(d).triggerHandler("jqGridImportComplete",[g,c]),a.isFunction(c.importComplete)&&c.importComplete(g))}break;case"json":a.ajax(a.extend({url:c.impurl,type:c.mtype,data:c.impData,dataType:"json",complete:function(b){try{f(b.responseText,c),a(d).triggerHandler("jqGridImportComplete",[b,c]),a.isFunction(c.importComplete)&&c.importComplete(b)}catch(e){}b=null}},c.ajaxOptions));break;case"jsonstring":c.impstring&&"string"==typeof
c.impstring&&(f(c.impstring,c),a(d).triggerHandler("jqGridImportComplete",[c.impstring,c]),a.isFunction(c.importComplete)&&c.importComplete(c.impstring))}}}),a.jgrid.extend({jqGridExport:function(b){b=a.extend({exptype:"xmlstring",root:"grid",ident:"	",addOptions:{}},b||{});var
c=null;return this.each(function(){if(this.grid){var
d,e=a.extend(!0,{},a(this).jqGrid("getGridParam"),b.addOptions);if(e.rownumbers&&(e.colNames.splice(0,1),e.colModel.splice(0,1)),e.multiselect&&(e.colNames.splice(0,1),e.colModel.splice(0,1)),e.subGrid&&(e.colNames.splice(0,1),e.colModel.splice(0,1)),e.knv=null,e.treeGrid)for(d
in
e.treeReader)e.treeReader.hasOwnProperty(d)&&(e.colNames.splice(e.colNames.length-1),e.colModel.splice(e.colModel.length-1));switch(b.exptype){case"xmlstring":c="<"+b.root+">"+jqGridUtils.jsonToXML(e,{xmlDecl:""})+"</"+b.root+">";break;case"jsonstring":c=jqGridUtils.stringify(e),b.root&&(c="{"+b.root+":"+c+"}")}}}),c},excelExport:function(b){return b=a.extend({exptype:"remote",url:null,oper:"oper",tag:"excel",exportOptions:{}},b||{}),this.each(function(){if(this.grid){var
c;if("remote"===b.exptype){var
d=a.extend({},this.p.postData);d[b.oper]=b.tag;var
e=jQuery.param(d);c=-1!==b.url.indexOf("?")?b.url+"&"+e:b.url+"?"+e,window.location=c}}})}})});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery"],a):a()}(function(){"use strict";return window.jqGridUtils={stringify:function(a){return JSON.stringify(a,function(a,b){return"function"==typeof
b?b.toString():b})},parse:function(str){return JSON.parse(str,function(key,value){return"string"==typeof
value&&-1!==value.indexOf("function")?eval("("+value+")"):value})},encode:function(a){return String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},jsonToXML:function(a,b){var
c=$.extend({xmlDecl:'<?xml version="1.0" encoding="UTF-8" ?>\n',attr_prefix:"-",encode:!0},b||{}),d=this,e=function(a,b){return"#text"===a?c.encode?d.encode(b):b:"function"==typeof
b?"<"+a+"><![CDATA["+b+"]]></"+a+">\n":""===b?"<"+a+">__EMPTY_STRING_</"+a+">\n":"<"+a+">"+(c.encode?d.encode(b):b)+"</"+a+">\n"},f=function(a,b){for(var
c=[],d=0;d<b.length;d++){var
h=b[d];"undefined"==typeof
h||null==h?c[c.length]="<"+a+" />":"object"==typeof
h&&h.constructor==Array?c[c.length]=f(a,h):"object"==typeof
h?c[c.length]=g(a,h):c[c.length]=e(a,h)}return c.length||(c[0]="<"+a+">__EMPTY_ARRAY_</"+a+">\n"),c.join("")},g=function(a,b){var
h=[],i=[];for(var
j
in
b)if(b.hasOwnProperty(j)){var
k=b[j];j.charAt(0)!==c.attr_prefix?null==k?h[h.length]="<"+j+" />":"object"==typeof
k&&k.constructor===Array?h[h.length]=f(j,k):"object"==typeof
k?h[h.length]=g(j,k):h[h.length]=e(j,k):i[i.length]=" "+j.substring(1)+'="'+(c.encode?d.encode(k):k)+'"'}var
l=i.join(""),m=h.join("");return null==a||(m=h.length>0?m.match(/\n/)?"<"+a+l+">\n"+m+"</"+a+">\n":"<"+a+l+">"+m+"</"+a+">\n":"<"+a+l+" />\n"),m},h=g(null,a);return c.xmlDecl+h},xmlToJSON:function(root,options){var
o=$.extend({force_array:[],attr_prefix:"-"},options||{});if(root){var
__force_array={};if(o.force_array)for(var
i=0;i<o.force_array.length;i++)__force_array[o.force_array[i]]=1;"string"==typeof
root&&(root=$.parseXML(root)),root.documentElement&&(root=root.documentElement);var
addNode=function(hash,key,cnts,val){if("string"==typeof
val)if(-1!==val.indexOf("function"))val=eval("("+val+")");else
switch(val){case"__EMPTY_ARRAY_":val=[];break;case"__EMPTY_STRING_":val="";break;case"false":val=!1;break;case"true":val=!0}__force_array[key]?(1===cnts&&(hash[key]=[]),hash[key][hash[key].length]=val):1===cnts?hash[key]=val:2===cnts?hash[key]=[hash[key],val]:hash[key][hash[key].length]=val},parseElement=function(a){if(7!==a.nodeType){if(3===a.nodeType||4===a.nodeType){var
b=a.nodeValue.match(/[^\x00-\x20]/);if(null==b)return;return a.nodeValue}var
c,d,e,f,g={};if(a.attributes&&a.attributes.length)for(c={},d=0;d<a.attributes.length;d++)e=a.attributes[d].nodeName,"string"==typeof
e&&(f=a.attributes[d].nodeValue,f&&(e=o.attr_prefix+e,"undefined"==typeof
g[e]&&(g[e]=0),g[e]++,addNode(c,e,g[e],f)));if(a.childNodes&&a.childNodes.length){var
h=!0;for(c&&(h=!1),d=0;d<a.childNodes.length&&h;d++){var
i=a.childNodes[d].nodeType;3!==i&&4!==i&&(h=!1)}if(h)for(c||(c=""),d=0;d<a.childNodes.length;d++)c+=a.childNodes[d].nodeValue;else
for(c||(c={}),d=0;d<a.childNodes.length;d++)e=a.childNodes[d].nodeName,"string"==typeof
e&&(f=parseElement(a.childNodes[d]),f&&("undefined"==typeof
g[e]&&(g[e]=0),g[e]++,addNode(c,e,g[e],f)))}return c}},json=parseElement(root);if(__force_array[root.nodeName]&&(json=[json]),11!==root.nodeType){var
tmp={};tmp[root.nodeName]=json,json=tmp}return json}}},window.jqGridUtils});!function(a){"use strict";"function"==typeof
define&&define.amd?define(["jquery","./grid.base","jquery-ui/dialog","jquery-ui/draggable","jquery-ui/droppable","jquery-ui/resizable","jquery-ui/sortable","./addons/ui.multiselect"],a):a(jQuery)}(function($){"use strict";if($.jgrid.msie&&8===$.jgrid.msiever()&&($.expr[":"].hidden=function(a){return 0===a.offsetWidth||0===a.offsetHeight||"none"===a.style.display}),$.jgrid._multiselect=!1,$.ui&&$.ui.multiselect){if($.ui.multiselect.prototype._setSelected){var
setSelected=$.ui.multiselect.prototype._setSelected;$.ui.multiselect.prototype._setSelected=function(a,b){var
c=setSelected.call(this,a,b);if(b&&this.selectedList){var
d=this.element;this.selectedList.find("li").each(function(){$(this).data("optionLink")&&$(this).data("optionLink").remove().appendTo(d)})}return c}}$.ui.multiselect.prototype.destroy&&($.ui.multiselect.prototype.destroy=function(){this.element.show(),this.container.remove(),void
0===$.Widget?$.widget.prototype.destroy.apply(this,arguments):$.Widget.prototype.destroy.apply(this,arguments)}),$.jgrid._multiselect=!0}$.jgrid.extend({sortableColumns:function(a){return this.each(function(){function
b(){c.p.disableClick=!0}var
c=this,d=$.jgrid.jqID(c.p.id),e={tolerance:"pointer",axis:"x",scrollSensitivity:"1",items:">th:not(:has(#jqgh_"+d+"_cb,#jqgh_"+d+"_rn,#jqgh_"+d+"_subgrid),:hidden)",placeholder:{element:function(a){var
b=$(document.createElement(a[0].nodeName)).addClass(a[0].className+" ui-sortable-placeholder ui-state-highlight").removeClass("ui-sortable-helper")[0];return b},update:function(a,b){b.height(a.currentItem.innerHeight()-parseInt(a.currentItem.css("paddingTop")||0,10)-parseInt(a.currentItem.css("paddingBottom")||0,10)),b.width(a.currentItem.innerWidth()-parseInt(a.currentItem.css("paddingLeft")||0,10)-parseInt(a.currentItem.css("paddingRight")||0,10))}},update:function(a,b){var
d=$(b.item).parent(),e=$(">th",d),f=c.p.colModel,g={},h=c.p.id+"_";$.each(f,function(a){g[this.name]=a});var
i=[];e.each(function(){var
a=$(">div",this).get(0).id.replace(/^jqgh_/,"").replace(h,"");g.hasOwnProperty(a)&&i.push(g[a])}),$(c).jqGrid("remapColumns",i,!0,!0),$.isFunction(c.p.sortable.update)&&c.p.sortable.update(i),setTimeout(function(){c.p.disableClick=!1},50)}};if(c.p.sortable.options?$.extend(e,c.p.sortable.options):$.isFunction(c.p.sortable)&&(c.p.sortable={update:c.p.sortable}),e.start){var
f=e.start;e.start=function(a,c){b(),f.call(this,a,c)}}else
e.start=b;c.p.sortable.exclude&&(e.items+=":not("+c.p.sortable.exclude+")");var
g=a.sortable(e),h=g.data("sortable")||g.data("uiSortable");null!=h&&(h.data("sortable").floating=!0)})},columnChooser:function(a){function
b(a,b,c){var
d,e;return b>=0?(d=a.slice(),e=d.splice(b,Math.max(a.length-b,b)),b>a.length&&(b=a.length),d[b]=c,d.concat(e)):a}function
c(a,b){a&&("string"==typeof
a?$.fn[a]&&$.fn[a].apply(b,$.makeArray(arguments).slice(2)):$.isFunction(a)&&a.apply(b,$.makeArray(arguments).slice(2)))}var
d,e,f,g,h,i,j,k=this,l={},m=[],n=k.jqGrid("getGridParam","colModel"),o=k.jqGrid("getGridParam","colNames"),p=function(a){return $.ui.multiselect.prototype&&a.data($.ui.multiselect.prototype.widgetFullName||$.ui.multiselect.prototype.widgetName)||a.data("ui-multiselect")||a.data("multiselect")},q=$.jgrid.getRegional(this[0],"col");if(!$("#colchooser_"+$.jgrid.jqID(k[0].p.id)).length){if(d=$('<div id="colchooser_'+k[0].p.id+'" style="position:relative;overflow:hidden"><div><select multiple="multiple"></select></div></div>'),e=$("select",d),a=$.extend({width:400,height:240,classname:null,done:function(a){a&&k.jqGrid("remapColumns",a,!0)},msel:"multiselect",dlog:"dialog",dialog_opts:{minWidth:470,dialogClass:"ui-jqdialog"},dlog_opts:function(a){var
b={};return b[a.bSubmit]=function(){a.apply_perm(),a.cleanup(!1)},b[a.bCancel]=function(){a.cleanup(!0)},$.extend(!0,{buttons:b,close:function(){a.cleanup(!0)},modal:a.modal||!1,resizable:a.resizable||!0,width:a.width+70,resize:function(){var
a=p(e),b=a.container.closest(".ui-dialog-content");b.length>0&&"object"==typeof
b[0].style?b[0].style.width="":b.css("width",""),a.selectedList.height(Math.max(a.selectedContainer.height()-a.selectedActions.outerHeight()-1,1)),a.availableList.height(Math.max(a.availableContainer.height()-a.availableActions.outerHeight()-1,1))}},a.dialog_opts||{})},apply_perm:function(){var
c=[];$("option",e).each(function(){$(this).is(":selected")?k.jqGrid("showCol",n[this.value].name):k.jqGrid("hideCol",n[this.value].name)}),$("option[selected]",e).each(function(){c.push(parseInt(this.value,10))}),$.each(c,function(){delete
l[n[parseInt(this,10)].name]}),$.each(l,function(){var
a=parseInt(this,10);c=b(c,a,a)}),a.done&&a.done.call(k,c),k.jqGrid("setGridWidth",k[0].p.width,k[0].p.shrinkToFit)},cleanup:function(b){c(a.dlog,d,"destroy"),c(a.msel,e,"destroy"),d.remove(),b&&a.done&&a.done.call(k)},msel_opts:{}},q,a||{}),$.ui&&$.ui.multiselect&&$.ui.multiselect.defaults){if(!$.jgrid._multiselect)return void
alert("Multiselect plugin loaded after jqGrid. Please load the plugin before the jqGrid!");a.msel_opts=$.extend($.ui.multiselect.defaults,a.msel_opts)}a.caption&&d.attr("title",a.caption),a.classname&&(d.addClass(a.classname),e.addClass(a.classname)),a.width&&($(">div",d).css({width:a.width,margin:"0 auto"}),e.css("width",a.width)),a.height&&($(">div",d).css("height",a.height),e.css("height",a.height-10)),e.empty(),$.each(n,function(a){return l[this.name]=a,this.hidedlg?void(this.hidden||m.push(a)):void
e.append("<option value='"+a+"' "+(this.hidden?"":"selected='selected'")+">"+$.jgrid.stripHtml(o[a])+"</option>")}),f=$.isFunction(a.dlog_opts)?a.dlog_opts.call(k,a):a.dlog_opts,c(a.dlog,d,f),g=$.isFunction(a.msel_opts)?a.msel_opts.call(k,a):a.msel_opts,c(a.msel,e,g),h=$("#colchooser_"+$.jgrid.jqID(k[0].p.id)),h.css({margin:"auto"}),h.find(">div").css({width:"100%",height:"100%",margin:"auto"}),i=p(e),i.container.css({width:"100%",height:"100%",margin:"auto"}),i.selectedContainer.css({width:100*i.options.dividerLocation+"%",height:"100%",margin:"auto",boxSizing:"border-box"}),i.availableContainer.css({width:100-100*i.options.dividerLocation+"%",height:"100%",margin:"auto",boxSizing:"border-box"}),i.selectedList.css("height","auto"),i.availableList.css("height","auto"),j=Math.max(i.selectedList.height(),i.availableList.height()),j=Math.min(j,$(window).height()),i.selectedList.css("height",j),i.availableList.css("height",j)}},sortableRows:function(a){return this.each(function(){var
b=this;b.grid&&(b.p.treeGrid||$.fn.sortable&&(a=$.extend({cursor:"move",axis:"y",items:" > .jqgrow"},a||{}),a.start&&$.isFunction(a.start)?(a._start_=a.start,delete
a.start):a._start_=!1,a.update&&$.isFunction(a.update)?(a._update_=a.update,delete
a.update):a._update_=!1,a.start=function(c,d){if($(d.item).css("border-width","0"),$("td",d.item).each(function(a){this.style.width=b.grid.cols[a].style.width}),b.p.subGrid){var
e=$(d.item).attr("id");try{$(b).jqGrid("collapseSubGridRow",e)}catch(f){}}a._start_&&a._start_.apply(this,[c,d])},a.update=function(c,d){$(d.item).css("border-width",""),b.p.rownumbers===!0&&$("td.jqgrid-rownum",b.rows).each(function(a){$(this).html(a+1+(parseInt(b.p.page,10)-1)*parseInt(b.p.rowNum,10))}),a._update_&&a._update_.apply(this,[c,d])},$("tbody:first",b).sortable(a),$("tbody:first > .jqgrow",b).disableSelection()))})},gridDnD:function(a){return this.each(function(){function
b(){var
a=$.data(e,"dnd");$("tr.jqgrow:not(.ui-draggable)",e).draggable($.isFunction(a.drag)?a.drag.call($(e),a):a.drag)}var
c,d,e=this;if(e.grid&&!e.p.treeGrid&&$.fn.draggable&&$.fn.droppable){var
f="<table id='jqgrid_dnd' class='ui-jqgrid-dnd'></table>";if(void
0===$("#jqgrid_dnd")[0]&&$("body").append(f),"string"==typeof
a&&"updateDnD"===a&&e.p.jqgdnd===!0)return void
b();if(a=$.extend({drag:function(a){return $.extend({start:function(b,c){var
d,f;if(e.p.subGrid){f=$(c.helper).attr("id");try{$(e).jqGrid("collapseSubGridRow",f)}catch(g){}}for(d=0;d<$.data(e,"dnd").connectWith.length;d++)0===$($.data(e,"dnd").connectWith[d]).jqGrid("getGridParam","reccount")&&$($.data(e,"dnd").connectWith[d]).jqGrid("addRowData","jqg_empty_row",{});c.helper.addClass("ui-state-highlight"),$("td",c.helper).each(function(a){this.style.width=e.grid.headers[a].width+"px"}),a.onstart&&$.isFunction(a.onstart)&&a.onstart.call($(e),b,c)},stop:function(b,c){var
d,f;for(c.helper.dropped&&!a.dragcopy&&(f=$(c.helper).attr("id"),void
0===f&&(f=$(this).attr("id")),$(e).jqGrid("delRowData",f)),d=0;d<$.data(e,"dnd").connectWith.length;d++)$($.data(e,"dnd").connectWith[d]).jqGrid("delRowData","jqg_empty_row");a.onstop&&$.isFunction(a.onstop)&&a.onstop.call($(e),b,c)}},a.drag_opts||{})},drop:function(a){return $.extend({accept:function(a){if(!$(a).hasClass("jqgrow"))return a;var
b=$(a).closest("table.ui-jqgrid-btable");if(b.length>0&&void
0!==$.data(b[0],"dnd")){var
c=$.data(b[0],"dnd").connectWith;return-1!==$.inArray("#"+$.jgrid.jqID(this.id),c)?!0:!1}return!1},drop:function(b,c){if($(c.draggable).hasClass("jqgrow")){var
d=$(c.draggable).attr("id"),f=c.draggable.parent().parent().jqGrid("getRowData",d);if(!a.dropbyname){var
g,h,i=0,j={},k=$("#"+$.jgrid.jqID(this.id)).jqGrid("getGridParam","colModel");try{for(h
in
f)f.hasOwnProperty(h)&&(g=k[i].name,"cb"!==g&&"rn"!==g&&"subgrid"!==g&&f.hasOwnProperty(h)&&k[i]&&(j[g]=f[h]),i++);f=j}catch(l){}}if(c.helper.dropped=!0,a.beforedrop&&$.isFunction(a.beforedrop)){var
m=a.beforedrop.call(this,b,c,f,$("#"+$.jgrid.jqID(e.p.id)),$(this));void
0!==m&&null!==m&&"object"==typeof
m&&(f=m)}if(c.helper.dropped){var
n;a.autoid&&($.isFunction(a.autoid)?n=a.autoid.call(this,f):(n=Math.ceil(1e3*Math.random()),n=a.autoidprefix+n)),$("#"+$.jgrid.jqID(this.id)).jqGrid("addRowData",n,f,a.droppos)}a.ondrop&&$.isFunction(a.ondrop)&&a.ondrop.call(this,b,c,f)}}},a.drop_opts||{})},onstart:null,onstop:null,beforedrop:null,ondrop:null,drop_opts:{activeClass:"ui-state-active",hoverClass:"ui-state-hover"},drag_opts:{revert:"invalid",helper:"clone",cursor:"move",appendTo:"#jqgrid_dnd",zIndex:5e3},dragcopy:!1,dropbyname:!1,droppos:"first",autoid:!0,autoidprefix:"dnd_"},a||{}),a.connectWith)for(a.connectWith=a.connectWith.split(","),a.connectWith=$.map(a.connectWith,function(a){return $.trim(a)}),$.data(e,"dnd",a),0===e.p.reccount||e.p.jqgdnd||b(),e.p.jqgdnd=!0,c=0;c<a.connectWith.length;c++)d=a.connectWith[c],$(d).droppable($.isFunction(a.drop)?a.drop.call($(e),a):a.drop)}})},gridResize:function(opts){return this.each(function(){var
$t=this,gID=$.jgrid.jqID($t.p.id),req;if($t.grid&&$.fn.resizable){if(opts=$.extend({},opts||{}),opts.alsoResize?(opts._alsoResize_=opts.alsoResize,delete
opts.alsoResize):opts._alsoResize_=!1,opts.stop&&$.isFunction(opts.stop)?(opts._stop_=opts.stop,delete
opts.stop):opts._stop_=!1,opts.stop=function(a,b){$($t).jqGrid("setGridParam",{height:$("#gview_"+gID+" .ui-jqgrid-bdiv").height()}),$($t).jqGrid("setGridWidth",b.size.width,opts.shrinkToFit),opts._stop_&&opts._stop_.call($t,a,b),$t.p.caption&&$("#gbox_"+gID).css({height:"auto"}),$t.p.frozenColumns&&(req&&clearTimeout(req),req=setTimeout(function(){req&&clearTimeout(req),$("#"+gID).jqGrid("destroyFrozenColumns"),$("#"+gID).jqGrid("setFrozenColumns")}))},opts._alsoResize_){var
optstest="{'#gview_"+gID+" .ui-jqgrid-bdiv':true,'"+opts._alsoResize_+"':true}";opts.alsoResize=eval("("+optstest+")")}else
opts.alsoResize=$(".ui-jqgrid-bdiv","#gview_"+gID);delete
opts._alsoResize_,$("#gbox_"+gID).resizable(opts)}})}})});
/*
 * jQuery UI Multiselect
 *
 * Authors:
 *  Michael Aufreiter (quasipartikel.at)
 *  Yanick Rochon (yanick.rochon[at]gmail[dot]com)
 * 
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 * 
 * http://www.quasipartikel.at/multiselect/
 *
 * 
 * Depends:
 *	ui.core.js
 *	ui.sortable.js
 *
 * Optional:
 * localization (http://plugins.jquery.com/project/localisation)
 * scrollTo (http://plugins.jquery.com/project/ScrollTo)
 * 
 * Todo:
 *  Make batch actions faster
 *  Implement dynamic insertion through remote calls
 */


(function($) {

$.widget("ui.multiselect", {
  options: {
		sortable: true,
		searchable: true,
		doubleClickable: true,
		animated: 'fast',
		show: 'slideDown',
		hide: 'slideUp',
		dividerLocation: 0.6,
		availableFirst: false,
		nodeComparator: function(node1,node2) {
			var text1 = node1.text(),
			    text2 = node2.text();
			return text1 == text2 ? 0 : (text1 < text2 ? -1 : 1);
		}
	},
	_create: function() {
		this.element.hide();
		this.id = this.element.attr("id");
		this.container = $('<div class="ui-multiselect ui-helper-clearfix ui-widget"></div>').insertAfter(this.element);
		this.count = 0; // number of currently selected options
		this.selectedContainer = $('<div class="selected"></div>').appendTo(this.container);
		this.availableContainer = $('<div class="available"></div>')[this.options.availableFirst?'prependTo': 'appendTo'](this.container);
		this.selectedActions = $('<div class="actions ui-widget-header ui-helper-clearfix"><span class="count">0 '+$.ui.multiselect.locale.itemsCount+'</span><a href="#" class="remove-all">'+$.ui.multiselect.locale.removeAll+'</a></div>').appendTo(this.selectedContainer);
		this.availableActions = $('<div class="actions ui-widget-header ui-helper-clearfix"><input type="text" class="search empty ui-widget-content ui-corner-all"/><a href="#" class="add-all">'+$.ui.multiselect.locale.addAll+'</a></div>').appendTo(this.availableContainer);
		this.selectedList = $('<ul class="selected connected-list"><li class="ui-helper-hidden-accessible"></li></ul>').bind('selectstart', function(){return false;}).appendTo(this.selectedContainer);
		this.availableList = $('<ul class="available connected-list"><li class="ui-helper-hidden-accessible"></li></ul>').bind('selectstart', function(){return false;}).appendTo(this.availableContainer);
		
		var that = this;

		// set dimensions
		this.container.width(this.element.width()+1);
		this.selectedContainer.width(Math.floor(this.element.width()*this.options.dividerLocation));
		this.availableContainer.width(Math.floor(this.element.width()*(1-this.options.dividerLocation)));

		// fix list height to match <option> depending on their individual header's heights
		this.selectedList.height(Math.max(this.element.height()-this.selectedActions.height(),1));
		this.availableList.height(Math.max(this.element.height()-this.availableActions.height(),1));
		
		if ( !this.options.animated ) {
			this.options.show = 'show';
			this.options.hide = 'hide';
		}
		this.useProp = !!$.fn.prop;
		// init lists
		this._populateLists(this.element.find('option'));
		
		// make selection sortable
		if (this.options.sortable) {
			this.selectedList.sortable({
				placeholder: 'ui-state-highlight',
				axis: 'y',
				update: function(event, ui) {
					// apply the new sort order to the original selectbox
					that.selectedList.find('li').each(function() {
						if ($(this).data('optionLink'))
							$(this).data('optionLink').remove().appendTo(that.element);
					});
				},
				receive: function(event, ui) {
					ui.item.data('optionLink')[ this.useProp ? 'prop' : 'attr' ]('selected', true);
					// increment count
					that.count += 1;
					that._updateCount();
					// workaround, because there's no way to reference 
					// the new element, see http://dev.jqueryui.com/ticket/4303
					that.selectedList.children('.ui-draggable').each(function() {
						$(this).removeClass('ui-draggable');
						$(this).data('optionLink', ui.item.data('optionLink'));
						$(this).data('idx', ui.item.data('idx'));
						that._applyItemState($(this), true);
					});
			
					// workaround according to http://dev.jqueryui.com/ticket/4088
					setTimeout(function() { ui.item.remove(); }, 1);
				}
			});
		}
		
		// set up livesearch
		if (this.options.searchable) {
			this._registerSearchEvents(this.availableContainer.find('input.search'));
		} else {
			$('.search').hide();
		}
		
		// batch actions
		this.container.find(".remove-all").click(function() {
			that._populateLists(that.element.find('option').removeAttr('selected'));
			return false;
		});
		
		this.container.find(".add-all").click(function() {
			var options = that.element.find('option').not(":selected");
			if (that.availableList.children('li:hidden').length > 1) {
				that.availableList.children('li').each(function(i) {
					if ($(this).is(":visible")) $(options[i-1])[ that.useProp ? 'prop' : 'attr' ]('selected', true); 
				});
			} else {
				options[ that.useProp ? 'prop' : 'attr' ]('selected', true);
			}
			that._populateLists(that.element.find('option'));
			return false;
		});
	},
	destroy: function() {
		this.element.show();
		this.container.remove();

		$.Widget.prototype.destroy.apply(this, arguments);
	},
	_populateLists: function(options) {
		this.selectedList.children('.ui-element').remove();
		this.availableList.children('.ui-element').remove();
		this.count = 0;

		var that = this;
		var items = $(options.map(function(i) {
	      var item = that._getOptionNode(this).appendTo(this.selected ? that.selectedList : that.availableList).show();

			if (this.selected) that.count += 1;
			that._applyItemState(item, this.selected);
			item.data('idx', i);
			return item[0];
    }));
		
		// update count
		this._updateCount();
		that._filter.apply(this.availableContainer.find('input.search'), [that.availableList]);
  },
	_updateCount: function() {
		this.element.trigger('change');
		this.selectedContainer.find('span.count').text(this.count+" "+$.ui.multiselect.locale.itemsCount);
	},
	_getOptionNode: function(option) {
		option = $(option);
		var node = $('<li class="ui-state-default ui-element" title="'+option.text()+'"><span class="ui-icon"/>'+option.text()+'<a href="#" class="action"><span class="ui-corner-all ui-icon"/></a></li>').hide();
		node.data('optionLink', option);
		return node;
	},
	// clones an item with associated data
	// didn't find a smarter away around this
	_cloneWithData: function(clonee) {
		var clone = clonee.clone(false,false);
		clone.data('optionLink', clonee.data('optionLink'));
		clone.data('idx', clonee.data('idx'));
		return clone;
	},
	_setSelected: function(item, selected) {
		item.data('optionLink')[ this.useProp ? 'prop' : 'attr' ]('selected', selected);

		if (selected) {
			var selectedItem = this._cloneWithData(item);
			item[this.options.hide](this.options.animated, function() { $(this).remove(); });
			selectedItem.appendTo(this.selectedList).hide()[this.options.show](this.options.animated);
			
			this._applyItemState(selectedItem, true);
			return selectedItem;
		} else {
			
			// look for successor based on initial option index
			var items = this.availableList.find('li'), comparator = this.options.nodeComparator;
			var succ = null, i = item.data('idx'), direction = comparator(item, $(items[i]));

			// TODO: test needed for dynamic list populating
			if ( direction ) {
				while (i>=0 && i<items.length) {
					direction > 0 ? i++ : i--;
					if ( direction != comparator(item, $(items[i])) ) {
						// going up, go back one item down, otherwise leave as is
						succ = items[direction > 0 ? i : i+1];
						break;
					}
				}
			} else {
				succ = items[i];
			}
			
			var availableItem = this._cloneWithData(item);
			succ ? availableItem.insertBefore($(succ)) : availableItem.appendTo(this.availableList);
			item[this.options.hide](this.options.animated, function() { $(this).remove(); });
			availableItem.hide()[this.options.show](this.options.animated);
			
			this._applyItemState(availableItem, false);
			return availableItem;
		}
	},
	_applyItemState: function(item, selected) {
		if (selected) {
			if (this.options.sortable)
				item.children('span').addClass('ui-icon-arrowthick-2-n-s').removeClass('ui-helper-hidden').addClass('ui-icon');
			else
				item.children('span').removeClass('ui-icon-arrowthick-2-n-s').addClass('ui-helper-hidden').removeClass('ui-icon');
			item.find('a.action span').addClass('ui-icon-minus').removeClass('ui-icon-plus');
			this._registerRemoveEvents(item.find('a.action'));
			
		} else {
			item.children('span').removeClass('ui-icon-arrowthick-2-n-s').addClass('ui-helper-hidden').removeClass('ui-icon');
			item.find('a.action span').addClass('ui-icon-plus').removeClass('ui-icon-minus');
			this._registerAddEvents(item.find('a.action'));
		}
		
		this._registerDoubleClickEvents(item);
		this._registerHoverEvents(item);
	},
	// taken from John Resig's liveUpdate script
	_filter: function(list) {
		var input = $(this);
		var rows = list.children('li'),
			cache = rows.map(function(){
				
				return $(this).text().toLowerCase();
			});
		
		var term = $.trim(input.val().toLowerCase()), scores = [];
		
		if (!term) {
			rows.show();
		} else {
			rows.hide();

			cache.each(function(i) {
				if (this.indexOf(term)>-1) { scores.push(i); }
			});

			$.each(scores, function() {
				$(rows[this]).show();
			});
		}
	},
	_registerDoubleClickEvents: function(elements) {
		if (!this.options.doubleClickable) return;
		elements.dblclick(function(ev) {
			if ($(ev.target).closest('.action').length === 0) {
				// This may be triggered with rapid clicks on actions as well. In that
				// case don't trigger an additional click.
				elements.find('a.action').click();
			}
		});
	},
	_registerHoverEvents: function(elements) {
		elements.removeClass('ui-state-hover');
		elements.mouseover(function() {
			$(this).addClass('ui-state-hover');
		});
		elements.mouseout(function() {
			$(this).removeClass('ui-state-hover');
		});
	},
	_registerAddEvents: function(elements) {
		var that = this;
		elements.click(function() {
			var item = that._setSelected($(this).parent(), true);
			that.count += 1;
			that._updateCount();
			return false;
		});
		
		// make draggable
		if (this.options.sortable) {
  		elements.each(function() {
  			$(this).parent().draggable({
  	      connectToSortable: that.selectedList,
  				helper: function() {
  					var selectedItem = that._cloneWithData($(this)).width($(this).width() - 50);
  					selectedItem.width($(this).width());
  					return selectedItem;
  				},
  				appendTo: that.container,
  				containment: that.container,
  				revert: 'invalid'
  	    });
  		});		  
		}
	},
	_registerRemoveEvents: function(elements) {
		var that = this;
		elements.click(function() {
			that._setSelected($(this).parent(), false);
			that.count -= 1;
			that._updateCount();
			return false;
		});
 	},
	_registerSearchEvents: function(input) {
		var that = this;

		input.focus(function() {
			$(this).addClass('ui-state-active');
		})
		.blur(function() {
			$(this).removeClass('ui-state-active');
		})
		.keypress(function(e) {
			if (e.keyCode == 13)
				return false;
		})
		.keyup(function() {
			that._filter.apply(this, [that.availableList]);
		});
	}
});
		
$.extend($.ui.multiselect, {
	locale: {
		addAll:'Add all',
		removeAll:'Remove all',
		itemsCount:'items selected'
	}
});


})(jQuery);

/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.5",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.5",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.5",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.5",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.5",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),
d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.5",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*!
 * Bootstrap-select v1.6.5 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2015 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
!function(a){"use strict";function b(b){var c=[{re:/[\xC0-\xC6]/g,ch:"A"},{re:/[\xE0-\xE6]/g,ch:"a"},{re:/[\xC8-\xCB]/g,ch:"E"},{re:/[\xE8-\xEB]/g,ch:"e"},{re:/[\xCC-\xCF]/g,ch:"I"},{re:/[\xEC-\xEF]/g,ch:"i"},{re:/[\xD2-\xD6]/g,ch:"O"},{re:/[\xF2-\xF6]/g,ch:"o"},{re:/[\xD9-\xDC]/g,ch:"U"},{re:/[\xF9-\xFC]/g,ch:"u"},{re:/[\xC7-\xE7]/g,ch:"c"},{re:/[\xD1]/g,ch:"N"},{re:/[\xF1]/g,ch:"n"}];return a.each(c,function(){b=b.replace(this.re,this.ch)}),b}function c(a){var b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},c="(?:"+Object.keys(b).join("|")+")",d=new RegExp(c),e=new RegExp(c,"g"),f=null==a?"":""+a;return d.test(f)?f.replace(e,function(a){return b[a]}):f}function d(b,c){var d=arguments,f=b,g=c;[].shift.apply(d);var h,i=this.each(function(){var b=a(this);if(b.is("select")){var c=b.data("selectpicker"),i="object"==typeof f&&f;if(c){if(i)for(var j in i)i.hasOwnProperty(j)&&(c.options[j]=i[j])}else{var k=a.extend({},e.DEFAULTS,a.fn.selectpicker.defaults||{},b.data(),i);b.data("selectpicker",c=new e(this,k,g))}"string"==typeof f&&(h=c[f]instanceof Function?c[f].apply(c,d):c.options[f])}});return"undefined"!=typeof h?h:i}String.prototype.includes||!function(){var a={}.toString,b=function(){try{var a={},b=Object.defineProperty,c=b(a,a,a)&&b}catch(d){}return c}(),c="".indexOf,d=function(b){if(null==this)throw TypeError();var d=String(this);if(b&&"[object RegExp]"==a.call(b))throw TypeError();var e=d.length,f=String(b),g=f.length,h=arguments.length>1?arguments[1]:void 0,i=h?Number(h):0;i!=i&&(i=0);var j=Math.min(Math.max(i,0),e);return g+j>e?!1:-1!=c.call(d,f,i)};b?b(String.prototype,"includes",{value:d,configurable:!0,writable:!0}):String.prototype.includes=d}(),String.prototype.startsWith||!function(){var a=function(){try{var a={},b=Object.defineProperty,c=b(a,a,a)&&b}catch(d){}return c}(),b={}.toString,c=function(a){if(null==this)throw TypeError();var c=String(this);if(a&&"[object RegExp]"==b.call(a))throw TypeError();var d=c.length,e=String(a),f=e.length,g=arguments.length>1?arguments[1]:void 0,h=g?Number(g):0;h!=h&&(h=0);var i=Math.min(Math.max(h,0),d);if(f+i>d)return!1;for(var j=-1;++j<f;)if(c.charCodeAt(i+j)!=e.charCodeAt(j))return!1;return!0};a?a(String.prototype,"startsWith",{value:c,configurable:!0,writable:!0}):String.prototype.startsWith=c}(),a.expr[":"].icontains=function(b,c,d){var e=a(b),f=(e.data("tokens")||e.text()).toUpperCase();return f.includes(d[3].toUpperCase())},a.expr[":"].ibegins=function(b,c,d){var e=a(b),f=(e.data("tokens")||e.text()).toUpperCase();return f.startsWith(d[3].toUpperCase())},a.expr[":"].aicontains=function(b,c,d){var e=a(b),f=(e.data("tokens")||e.data("normalizedText")||e.text()).toUpperCase();return f.includes(f,d[3])},a.expr[":"].aibegins=function(b,c,d){var e=a(b),f=(e.data("tokens")||e.data("normalizedText")||e.text()).toUpperCase();return f.startsWith(d[3].toUpperCase())};var e=function(b,c,d){d&&(d.stopPropagation(),d.preventDefault()),this.$element=a(b),this.$newElement=null,this.$button=null,this.$menu=null,this.$lis=null,this.options=c,null===this.options.title&&(this.options.title=this.$element.attr("title")),this.val=e.prototype.val,this.render=e.prototype.render,this.refresh=e.prototype.refresh,this.setStyle=e.prototype.setStyle,this.selectAll=e.prototype.selectAll,this.deselectAll=e.prototype.deselectAll,this.destroy=e.prototype.remove,this.remove=e.prototype.remove,this.show=e.prototype.show,this.hide=e.prototype.hide,this.init()};e.VERSION="1.6.5",e.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(a){return 1==a?"{0} item selected":"{0} items selected"},maxOptionsText:function(a,b){return[1==a?"Limit reached ({n} item max)":"Limit reached ({n} items max)",1==b?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:!1,doneButtonText:"Close",multipleSeparator:", ",style:"btn-default",size:"auto",title:null,selectedTextFormat:"values",width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1,liveSearchPlaceholder:null,liveSearchNormalize:!1,liveSearchStyle:"contains",actionsBox:!1,iconBase:"glyphicon",tickIcon:"glyphicon-ok",maxOptions:!1,mobile:!1,selectOnTab:!1,dropdownAlignRight:!1},e.prototype={constructor:e,init:function(){var b=this,c=this.$element.attr("id");this.$element.hide(),this.multiple=this.$element.prop("multiple"),this.autofocus=this.$element.prop("autofocus"),this.$newElement=this.createView(),this.$element.after(this.$newElement),this.$button=this.$newElement.children("button"),this.$menu=this.$newElement.children(".dropdown-menu"),this.$searchbox=this.$menu.find("input"),this.options.dropdownAlignRight&&this.$menu.addClass("dropdown-menu-right"),"undefined"!=typeof c&&(this.$button.attr("data-id",c),a('label[for="'+c+'"]').click(function(a){a.preventDefault(),b.$button.focus()})),this.checkDisabled(),this.clickListener(),this.options.liveSearch&&this.liveSearchListener(),this.render(),this.liHeight(),this.setStyle(),this.setWidth(),this.options.container&&this.selectPosition(),this.$menu.data("this",this),this.$newElement.data("this",this),this.options.mobile&&this.mobile()},createDropdown:function(){var b=this.multiple?" show-tick":"",d=this.$element.parent().hasClass("input-group")?" input-group-btn":"",e=this.autofocus?" autofocus":"",f=this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"",g=this.options.liveSearch?'<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+c(this.options.liveSearchPlaceholder)+'"')+"></div>":"",h=this.multiple&&this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button class="actions-btn bs-select-all btn btn-default">'+this.options.selectAllText+'</button><button class="actions-btn bs-deselect-all btn btn-default">'+this.options.deselectAllText+"</button></div></div>":"",i=this.multiple&&this.options.doneButton?'<div class="bs-donebutton"><div class="btn-group btn-block"><button class="btn btn-sm btn-default">'+this.options.doneButtonText+"</button></div></div>":"",j='<div class="btn-group bootstrap-select'+b+d+'"><button type="button" class="btn dropdown-toggle" data-toggle="dropdown"'+e+'><span class="filter-option pull-left"></span>&nbsp;<span class="caret"></span></button><div class="dropdown-menu open">'+f+g+h+'<ul class="dropdown-menu inner" role="menu"></ul>'+i+"</div></div>";return a(j)},createView:function(){var a=this.createDropdown(),b=this.createLi();return a.find("ul").append(b),a},reloadLi:function(){this.destroyLi();var a=this.createLi();this.$menu.find("ul").append(a)},destroyLi:function(){this.$menu.find("li").remove()},createLi:function(){var d=this,e=[],f=0,g=function(a,b,c,d){return"<li"+("undefined"!=typeof c&""!==c?' class="'+c+'"':"")+("undefined"!=typeof b&null!==b?' data-original-index="'+b+'"':"")+("undefined"!=typeof d&null!==d?'data-optgroup="'+d+'"':"")+">"+a+"</li>"},h=function(a,e,f,g){return'<a tabindex="0"'+("undefined"!=typeof e?' class="'+e+'"':"")+("undefined"!=typeof f?' style="'+f+'"':"")+' data-normalized-text="'+b(c(a))+'"'+("undefined"!=typeof g||null!==g?' data-tokens="'+g+'"':"")+">"+a+'<span class="'+d.options.iconBase+" "+d.options.tickIcon+' check-mark"></span></a>'};return this.$element.find("option").each(function(b){var c=a(this),i=c.attr("class")||"",j=c.attr("style"),k=c.data("content")?c.data("content"):c.html(),l=c.data("tokens")?c.data("tokens"):null,m="undefined"!=typeof c.data("subtext")?'<small class="text-muted">'+c.data("subtext")+"</small>":"",n="undefined"!=typeof c.data("icon")?'<span class="'+d.options.iconBase+" "+c.data("icon")+'"></span> ':"",o=c.is(":disabled")||c.parent().is(":disabled");if(""!==n&&o&&(n="<span>"+n+"</span>"),c.data("content")||(k=n+'<span class="text">'+k+m+"</span>"),!d.options.hideDisabled||!o)if(c.parent().is("optgroup")&&c.data("divider")!==!0){if(0===c.index()){f+=1;var p=c.parent().attr("label"),q="undefined"!=typeof c.parent().data("subtext")?'<small class="text-muted">'+c.parent().data("subtext")+"</small>":"",r=c.parent().data("icon")?'<span class="'+d.options.iconBase+" "+c.parent().data("icon")+'"></span> ':"";p=r+'<span class="text">'+p+q+"</span>",0!==b&&e.length>0&&e.push(g("",null,"divider",f+"div")),e.push(g(p,null,"dropdown-header",f))}e.push(g(h(k,"opt "+i,j,l),b,"",f))}else c.data("divider")===!0?e.push(g("",b,"divider")):c.data("hidden")===!0?e.push(g(h(k,i,j,l),b,"hidden is-hidden")):(c.prev().is("optgroup")&&e.push(g("",null,"divider",f+"div")),e.push(g(h(k,i,j,l),b)))}),this.multiple||0!==this.$element.find("option:selected").length||this.options.title||this.$element.find("option").eq(0).prop("selected",!0).attr("selected","selected"),a(e.join(""))},findLis:function(){return null==this.$lis&&(this.$lis=this.$menu.find("li")),this.$lis},render:function(b){var c=this;b!==!1&&this.$element.find("option").each(function(b){c.setDisabled(b,a(this).is(":disabled")||a(this).parent().is(":disabled")),c.setSelected(b,a(this).is(":selected"))}),this.tabIndex();var d=this.options.hideDisabled?":enabled":"",e=this.$element.find("option:selected"+d).map(function(){var b,d=a(this),e=d.data("icon")&&c.options.showIcon?'<i class="'+c.options.iconBase+" "+d.data("icon")+'"></i> ':"";return b=c.options.showSubtext&&d.data("subtext")&&!c.multiple?' <small class="text-muted">'+d.data("subtext")+"</small>":"","undefined"!=typeof d.attr("title")?d.attr("title"):d.data("content")&&c.options.showContent?d.data("content"):e+d.html()+b}).toArray(),f=this.multiple?e.join(this.options.multipleSeparator):e[0];if(this.multiple&&this.options.selectedTextFormat.indexOf("count")>-1){var g=this.options.selectedTextFormat.split(">");if(g.length>1&&e.length>g[1]||1==g.length&&e.length>=2){d=this.options.hideDisabled?", [disabled]":"";var h=this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]'+d).length,i="function"==typeof this.options.countSelectedText?this.options.countSelectedText(e.length,h):this.options.countSelectedText;f=i.replace("{0}",e.length.toString()).replace("{1}",h.toString())}}void 0==this.options.title&&(this.options.title=this.$element.attr("title")),"static"==this.options.selectedTextFormat&&(f=this.options.title),f||(f="undefined"!=typeof this.options.title?this.options.title:this.options.noneSelectedText),this.$button.attr("title",a.trim(f.replace(/<[^>]*>?/g,""))),this.$button.children(".filter-option").html(f)},setStyle:function(a,b){this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|validate\[.*\]/gi,""));var c=a?a:this.options.style;"add"==b?this.$button.addClass(c):"remove"==b?this.$button.removeClass(c):(this.$button.removeClass(this.options.style),this.$button.addClass(c))},liHeight:function(){if(this.options.size!==!1){var a=this.$menu.parent().clone().children(".dropdown-toggle").prop("autofocus",!1).end().appendTo("body"),b=a.addClass("open").children(".dropdown-menu"),c=b.find("li").not(".divider, .dropdown-header").filter(":visible").children("a").outerHeight(),d=this.options.header?b.find(".popover-title").outerHeight():0,e=this.options.liveSearch?b.find(".bs-searchbox").outerHeight():0,f=this.options.actionsBox?b.find(".bs-actionsbox").outerHeight():0,g=this.multiple?b.find(".bs-donebutton").outerHeight():0;a.remove(),this.$newElement.data("liHeight",c).data("headerHeight",d).data("searchHeight",e).data("actionsHeight",f).data("doneButtonHeight",g)}},setSize:function(){this.findLis();var b,c,d,e=this,f=this.$menu,g=f.children(".inner"),h=this.$newElement.outerHeight(),i=this.$newElement.data("liHeight"),j=this.$newElement.data("headerHeight"),k=this.$newElement.data("searchHeight"),l=this.$newElement.data("actionsHeight"),m=this.$newElement.data("doneButtonHeight"),n=this.$lis.filter(".divider").outerHeight(!0),o=parseInt(f.css("padding-top"))+parseInt(f.css("padding-bottom"))+parseInt(f.css("border-top-width"))+parseInt(f.css("border-bottom-width")),p=this.options.hideDisabled?".disabled":"",q=a(window),r=o+parseInt(f.css("margin-top"))+parseInt(f.css("margin-bottom"))+2,s=function(){c=e.$newElement.offset().top-q.scrollTop(),d=q.height()-c-h};if(s(),this.options.header&&f.css("padding-top",0),"auto"==this.options.size){var t=function(){var a,h=e.$lis.not(".hidden");s(),b=d-r,e.options.dropupAuto&&e.$newElement.toggleClass("dropup",c>d&&b-r<f.height()),e.$newElement.hasClass("dropup")&&(b=c-r),a=h.length+h.filter(".dropdown-header").length>3?3*i+r-2:0,f.css({"max-height":b+"px",overflow:"hidden","min-height":a+j+k+l+m+"px"}),g.css({"max-height":b-j-k-l-m-o+"px","overflow-y":"auto","min-height":Math.max(a-o,0)+"px"})};t(),this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize",t),q.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize",t)}else if(this.options.size&&"auto"!=this.options.size&&f.find("li").not(p).length>this.options.size){var u=this.$lis.not(".divider").not(p).children().slice(0,this.options.size).last().parent().index(),v=this.$lis.slice(0,u+1).filter(".divider").length;b=i*this.options.size+v*n+o,e.options.dropupAuto&&this.$newElement.toggleClass("dropup",c>d&&b<f.height()),f.css({"max-height":b+j+k+l+m+"px",overflow:"hidden"}),g.css({"max-height":b-o+"px","overflow-y":"auto"})}},setWidth:function(){if("auto"==this.options.width){this.$menu.css("min-width","0");var a=this.$newElement.clone().appendTo("body"),b=a.children(".dropdown-menu").css("width"),c=a.css("width","auto").children("button").css("width");a.remove(),this.$newElement.css("width",Math.max(parseInt(b),parseInt(c))+"px")}else"fit"==this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width",""));this.$newElement.hasClass("fit-width")&&"fit"!==this.options.width&&this.$newElement.removeClass("fit-width")},selectPosition:function(){var b,c,d=this,e="<div />",f=a(e),g=function(a){f.addClass(a.attr("class").replace(/form-control/gi,"")).toggleClass("dropup",a.hasClass("dropup")),b=a.offset(),c=a.hasClass("dropup")?0:a[0].offsetHeight,f.css({top:b.top+c,left:b.left,width:a[0].offsetWidth,position:"absolute"})};this.$newElement.on("click",function(){d.isDisabled()||(g(a(this)),f.appendTo(d.options.container),f.toggleClass("open",!a(this).hasClass("open")),f.append(d.$menu))}),a(window).on("resize scroll",function(){g(d.$newElement)}),a("html").on("click",function(b){a(b.target).closest(d.$newElement).length<1&&f.removeClass("open")})},setSelected:function(a,b){this.findLis(),this.$lis.filter('[data-original-index="'+a+'"]').toggleClass("selected",b)},setDisabled:function(a,b){this.findLis(),b?this.$lis.filter('[data-original-index="'+a+'"]').addClass("disabled").children("a").attr("href","#").attr("tabindex",-1):this.$lis.filter('[data-original-index="'+a+'"]').removeClass("disabled").children("a").removeAttr("href").attr("tabindex",0)},isDisabled:function(){return this.$element.is(":disabled")},checkDisabled:function(){var a=this;this.isDisabled()?this.$button.addClass("disabled").attr("tabindex",-1):(this.$button.hasClass("disabled")&&this.$button.removeClass("disabled"),-1!=this.$button.attr("tabindex")||this.$element.data("tabindex")||this.$button.removeAttr("tabindex")),this.$button.click(function(){return!a.isDisabled()})},tabIndex:function(){this.$element.is("[tabindex]")&&(this.$element.data("tabindex",this.$element.attr("tabindex")),this.$button.attr("tabindex",this.$element.data("tabindex")))},clickListener:function(){var b=this;this.$newElement.on("touchstart.dropdown",".dropdown-menu",function(a){a.stopPropagation()}),this.$newElement.on("click",function(){b.setSize(),b.options.liveSearch||b.multiple||setTimeout(function(){b.$menu.find(".selected a").focus()},10)}),this.$menu.on("click","li a",function(c){var d=a(this),e=d.parent().data("originalIndex"),f=b.$element.val(),g=b.$element.prop("selectedIndex");if(b.multiple&&c.stopPropagation(),c.preventDefault(),!b.isDisabled()&&!d.parent().hasClass("disabled")){var h=b.$element.find("option"),i=h.eq(e),j=i.prop("selected"),k=i.parent("optgroup"),l=b.options.maxOptions,m=k.data("maxOptions")||!1;if(b.multiple){if(i.prop("selected",!j),b.setSelected(e,!j),d.blur(),l!==!1||m!==!1){var n=l<h.filter(":selected").length,o=m<k.find("option:selected").length;if(l&&n||m&&o)if(l&&1==l)h.prop("selected",!1),i.prop("selected",!0),b.$menu.find(".selected").removeClass("selected"),b.setSelected(e,!0);else if(m&&1==m){k.find("option:selected").prop("selected",!1),i.prop("selected",!0);var p=d.data("optgroup");b.$menu.find(".selected").has('a[data-optgroup="'+p+'"]').removeClass("selected"),b.setSelected(e,!0)}else{var q="function"==typeof b.options.maxOptionsText?b.options.maxOptionsText(l,m):b.options.maxOptionsText,r=q[0].replace("{n}",l),s=q[1].replace("{n}",m),t=a('<div class="notify"></div>');q[2]&&(r=r.replace("{var}",q[2][l>1?0:1]),s=s.replace("{var}",q[2][m>1?0:1])),i.prop("selected",!1),b.$menu.append(t),l&&n&&(t.append(a("<div>"+r+"</div>")),b.$element.trigger("maxReached.bs.select")),m&&o&&(t.append(a("<div>"+s+"</div>")),b.$element.trigger("maxReachedGrp.bs.select")),setTimeout(function(){b.setSelected(e,!1)},10),t.delay(750).fadeOut(300,function(){a(this).remove()})}}}else h.prop("selected",!1),i.prop("selected",!0),b.$menu.find(".selected").removeClass("selected"),b.setSelected(e,!0);b.multiple?b.options.liveSearch&&b.$searchbox.focus():b.$button.focus(),(f!=b.$element.val()&&b.multiple||g!=b.$element.prop("selectedIndex")&&!b.multiple)&&b.$element.change()}}),this.$menu.on("click","li.disabled a, .popover-title, .popover-title :not(.close)",function(a){a.currentTarget==this&&(a.preventDefault(),a.stopPropagation(),b.options.liveSearch?b.$searchbox.focus():b.$button.focus())}),this.$menu.on("click","li.divider, li.dropdown-header",function(a){a.preventDefault(),a.stopPropagation(),b.options.liveSearch?b.$searchbox.focus():b.$button.focus()}),this.$menu.on("click",".popover-title .close",function(){b.$button.focus()}),this.$searchbox.on("click",function(a){a.stopPropagation()}),this.$menu.on("click",".actions-btn",function(c){b.options.liveSearch?b.$searchbox.focus():b.$button.focus(),c.preventDefault(),c.stopPropagation(),a(this).hasClass("bs-select-all")?b.selectAll():b.deselectAll(),b.$element.change()}),this.$element.change(function(){b.render(!1)})},liveSearchListener:function(){var d=this,e=a('<li class="no-results"></li>');this.$newElement.on("click.dropdown.data-api touchstart.dropdown.data-api",function(){d.$menu.find(".active").removeClass("active"),d.$searchbox.val()&&(d.$searchbox.val(""),d.$lis.not(".is-hidden").removeClass("hidden"),e.parent().length&&e.remove()),d.multiple||d.$menu.find(".selected").addClass("active"),setTimeout(function(){d.$searchbox.focus()},10)}),this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api",function(a){a.stopPropagation()}),this.$searchbox.on("input propertychange",function(){if(d.$searchbox.val()){var f=d.$lis.not(".is-hidden").removeClass("hidden").children("a");f=f.not(d.options.liveSearchNormalize?":a"+d._searchStyle()+"("+b(d.$searchbox.val())+")":":"+d._searchStyle()+"("+d.$searchbox.val()+")"),f.parent().addClass("hidden"),d.$lis.filter(".dropdown-header").each(function(){var b=a(this),c=b.data("optgroup");0===d.$lis.filter("[data-optgroup="+c+"]").not(b).not(".hidden").length&&(b.addClass("hidden"),d.$lis.filter("[data-optgroup="+c+"div]").addClass("hidden"))});var g=d.$lis.not(".hidden");g.each(function(b){var c=a(this);c.hasClass("divider")&&(c.index()===g.eq(0).index()||c.index()===g.last().index()||g.eq(b+1).hasClass("divider"))&&c.addClass("hidden")}),d.$lis.not(".hidden, .no-results").length?e.parent().length&&e.remove():(e.parent().length&&e.remove(),e.html(d.options.noneResultsText.replace("{0}",'"'+c(d.$searchbox.val())+'"')).show(),d.$menu.append(e))}else d.$lis.not(".is-hidden").removeClass("hidden"),e.parent().length&&e.remove();d.$lis.filter(".active").removeClass("active"),d.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(),a(this).focus()})},_searchStyle:function(){var a="icontains";switch(this.options.liveSearchStyle){case"begins":case"startsWith":a="ibegins";break;case"contains":}return a},val:function(a){return"undefined"!=typeof a?(this.$element.val(a),this.render(),this.$element):this.$element.val()},selectAll:function(){this.findLis(),this.$element.find("option:enabled").not("[data-divider], [data-hidden]").prop("selected",!0),this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").addClass("selected"),this.render(!1)},deselectAll:function(){this.findLis(),this.$element.find("option:enabled").not("[data-divider], [data-hidden]").prop("selected",!1),this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").removeClass("selected"),this.render(!1)},keydown:function(c){var d,e,f,g,h,i,j,k,l,m=a(this),n=m.is("input")?m.parent().parent():m.parent(),o=n.data("this"),p={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};if(o.options.liveSearch&&(n=m.parent().parent()),o.options.container&&(n=o.$menu),d=a("[role=menu] li a",n),l=o.$menu.parent().hasClass("open"),!l&&/([0-9]|[A-z])/.test(String.fromCharCode(c.keyCode))&&(o.options.container?o.$newElement.trigger("click"):(o.setSize(),o.$menu.parent().addClass("open"),l=!0),o.$searchbox.focus()),o.options.liveSearch&&(/(^9$|27)/.test(c.keyCode.toString(10))&&l&&0===o.$menu.find(".active").length&&(c.preventDefault(),o.$menu.parent().removeClass("open"),o.$button.focus()),d=a("[role=menu] li:not(.divider):not(.dropdown-header):visible a",n),m.val()||/(38|40)/.test(c.keyCode.toString(10))||0===d.filter(".active").length&&(d=o.$newElement.find("li a"),d=d.filter(o.options.liveSearchNormalize?":a"+o._searchStyle()+"("+b(p[c.keyCode])+")":":"+o._searchStyle()+"("+p[c.keyCode]+")"))),d.length){if(/(38|40)/.test(c.keyCode.toString(10)))e=d.index(d.filter(":focus")),g=d.parent(":not(.disabled):visible").first().index(),h=d.parent(":not(.disabled):visible").last().index(),f=d.eq(e).parent().nextAll(":not(.disabled):visible").eq(0).index(),i=d.eq(e).parent().prevAll(":not(.disabled):visible").eq(0).index(),j=d.eq(f).parent().prevAll(":not(.disabled):visible").eq(0).index(),o.options.liveSearch&&(d.each(function(b){a(this).hasClass("disabled")||a(this).data("index",b)}),e=d.index(d.filter(".active")),g=d.filter(":not(.disabled):visible").first().data("index"),h=d.filter(":not(.disabled):visible").last().data("index"),f=d.eq(e).nextAll(":not(.disabled):visible").eq(0).data("index"),i=d.eq(e).prevAll(":not(.disabled):visible").eq(0).data("index"),j=d.eq(f).prevAll(":not(.disabled):visible").eq(0).data("index")),k=m.data("prevIndex"),38==c.keyCode?(o.options.liveSearch&&(e-=1),e!=j&&e>i&&(e=i),g>e&&(e=g),e==k&&(e=h)):40==c.keyCode&&(o.options.liveSearch&&(e+=1),-1==e&&(e=0),e!=j&&f>e&&(e=f),e>h&&(e=h),e==k&&(e=g)),m.data("prevIndex",e),o.options.liveSearch?(c.preventDefault(),m.hasClass("dropdown-toggle")||(d.removeClass("active"),d.eq(e).addClass("active").children("a").focus(),m.focus())):d.eq(e).focus();else if(!m.is("input")){var q,r,s=[];d.each(function(){a(this).parent().hasClass("disabled")||a.trim(a(this).text().toLowerCase()).substring(0,1)==p[c.keyCode]&&s.push(a(this).parent().index())}),q=a(document).data("keycount"),q++,a(document).data("keycount",q),r=a.trim(a(":focus").text().toLowerCase()).substring(0,1),r!=p[c.keyCode]?(q=1,a(document).data("keycount",q)):q>=s.length&&(a(document).data("keycount",0),q>s.length&&(q=1)),d.eq(s[q-1]).focus()}if((/(13|32)/.test(c.keyCode.toString(10))||/(^9$)/.test(c.keyCode.toString(10))&&o.options.selectOnTab)&&l){if(/(32)/.test(c.keyCode.toString(10))||c.preventDefault(),o.options.liveSearch)/(32)/.test(c.keyCode.toString(10))||(o.$menu.find(".active a").click(),m.focus());else{var t=a(":focus");t.click(),t.focus(),c.preventDefault()}a(document).data("keycount",0)}(/(^9$|27)/.test(c.keyCode.toString(10))&&l&&(o.multiple||o.options.liveSearch)||/(27)/.test(c.keyCode.toString(10))&&!l)&&(o.$menu.parent().removeClass("open"),o.$button.focus())}},mobile:function(){this.$element.addClass("mobile-device").appendTo(this.$newElement),this.options.container&&this.$menu.hide()},refresh:function(){this.$lis=null,this.reloadLi(),this.render(),this.setWidth(),this.setStyle(),this.checkDisabled(),this.liHeight()},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove(),this.$element.remove()}};var f=a.fn.selectpicker;a.fn.selectpicker=d,a.fn.selectpicker.Constructor=e,a.fn.selectpicker.noConflict=function(){return a.fn.selectpicker=f,this},a(document).data("keycount",0).on("keydown",".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bs-searchbox input",e.prototype.keydown).on("focusin.modal",".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bs-searchbox input",function(a){a.stopPropagation()}),a(window).on("load.bs.select.data-api",function(){a(".selectpicker").each(function(){var b=a(this);d.call(b,b.data())})})}(jQuery);
//# sourceMappingURL=bootstrap-select.js.map
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&"object"==typeof module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){return function(a){"use strict";var b=a.tablesorter={version:"2.25.3",parsers:[],widgets:[],defaults:{theme:"default",widthFixed:!1,showProcessing:!1,headerTemplate:"{content}",onRenderTemplate:null,onRenderHeader:null,cancelSelection:!0,tabIndex:!0,dateFormat:"mmddyyyy",sortMultiSortKey:"shiftKey",sortResetKey:"ctrlKey",usNumberFormat:!0,delayInit:!1,serverSideSorting:!1,resort:!0,headers:{},ignoreCase:!0,sortForce:null,sortList:[],sortAppend:null,sortStable:!1,sortInitialOrder:"asc",sortLocaleCompare:!1,sortReset:!1,sortRestart:!1,emptyTo:"bottom",stringTo:"max",duplicateSpan:!0,textExtraction:"basic",textAttribute:"data-text",textSorter:null,numberSorter:null,widgets:[],widgetOptions:{zebra:["even","odd"]},initWidgets:!0,widgetClass:"widget-{name}",initialized:null,tableClass:"",cssAsc:"",cssDesc:"",cssNone:"",cssHeader:"",cssHeaderRow:"",cssProcessing:"",cssChildRow:"tablesorter-childRow",cssInfoBlock:"tablesorter-infoOnly",cssNoSort:"tablesorter-noSort",cssIgnoreRow:"tablesorter-ignoreRow",cssIcon:"tablesorter-icon",cssIconNone:"",cssIconAsc:"",cssIconDesc:"",pointerClick:"click",pointerDown:"mousedown",pointerUp:"mouseup",selectorHeaders:"> thead th, > thead td",selectorSort:"th, td",selectorRemove:".remove-me",debug:!1,headerList:[],empties:{},strings:{},parsers:[]},css:{table:"tablesorter",cssHasChild:"tablesorter-hasChildRow",childRow:"tablesorter-childRow",colgroup:"tablesorter-colgroup",header:"tablesorter-header",headerRow:"tablesorter-headerRow",headerIn:"tablesorter-header-inner",icon:"tablesorter-icon",processing:"tablesorter-processing",sortAsc:"tablesorter-headerAsc",sortDesc:"tablesorter-headerDesc",sortNone:"tablesorter-headerUnSorted"},language:{sortAsc:"Ascending sort applied, ",sortDesc:"Descending sort applied, ",sortNone:"No sort applied, ",sortDisabled:"sorting is disabled",nextAsc:"activate to apply an ascending sort",nextDesc:"activate to apply a descending sort",nextNone:"activate to remove the sort"},regex:{templateContent:/\{content\}/g,templateIcon:/\{icon\}/g,templateName:/\{name\}/i,spaces:/\s+/g,nonWord:/\W/g,formElements:/(input|select|button|textarea)/i,chunk:/(^([+\-]?(?:\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,chunks:/(^\\0|\\0$)/,hex:/^0x[0-9a-f]+$/i,comma:/,/g,digitNonUS:/[\s|\.]/g,digitNegativeTest:/^\s*\([.\d]+\)/,digitNegativeReplace:/^\s*\(([.\d]+)\)/,digitTest:/^[\-+(]?\d+[)]?$/,digitReplace:/[,.'"\s]/g},string:{max:1,min:-1,emptymin:1,emptymax:-1,zero:0,none:0,"null":0,top:!0,bottom:!1},keyCodes:{enter:13},dates:{},instanceMethods:{},setup:function(c,d){if(!c||!c.tHead||0===c.tBodies.length||c.hasInitialized===!0)return void(d.debug&&(c.hasInitialized?console.warn("Stopping initialization. Tablesorter has already been initialized"):console.error("Stopping initialization! No table, thead or tbody",c)));var e="",f=a(c),g=a.metadata;c.hasInitialized=!1,c.isProcessing=!0,c.config=d,a.data(c,"tablesorter",d),d.debug&&(console[console.group?"group":"log"]("Initializing tablesorter"),a.data(c,"startoveralltimer",new Date)),d.supportsDataObject=function(a){return a[0]=parseInt(a[0],10),a[0]>1||1===a[0]&&parseInt(a[1],10)>=4}(a.fn.jquery.split(".")),d.emptyTo=d.emptyTo.toLowerCase(),d.stringTo=d.stringTo.toLowerCase(),d.last={sortList:[],clickedIndex:-1},/tablesorter\-/.test(f.attr("class"))||(e=""!==d.theme?" tablesorter-"+d.theme:""),d.table=c,d.$table=f.addClass(b.css.table+" "+d.tableClass+e).attr("role","grid"),d.$headers=f.find(d.selectorHeaders),d.namespace?d.namespace="."+d.namespace.replace(b.regex.nonWord,""):d.namespace=".tablesorter"+Math.random().toString(16).slice(2),d.$table.children().children("tr").attr("role","row"),d.$tbodies=f.children("tbody:not(."+d.cssInfoBlock+")").attr({"aria-live":"polite","aria-relevant":"all"}),d.$table.children("caption").length&&(e=d.$table.children("caption")[0],e.id||(e.id=d.namespace.slice(1)+"caption"),d.$table.attr("aria-labelledby",e.id)),d.widgetInit={},d.textExtraction=d.$table.attr("data-text-extraction")||d.textExtraction||"basic",b.buildHeaders(d),b.fixColumnWidth(c),b.addWidgetFromClass(c),b.applyWidgetOptions(c),b.setupParsers(d),d.totalRows=0,d.delayInit||b.buildCache(d),b.bindEvents(c,d.$headers,!0),b.bindMethods(d),d.supportsDataObject&&"undefined"!=typeof f.data().sortlist?d.sortList=f.data().sortlist:g&&f.metadata()&&f.metadata().sortlist&&(d.sortList=f.metadata().sortlist),b.applyWidget(c,!0),d.sortList.length>0?b.sortOn(d,d.sortList,{},!d.initWidgets):(b.setHeadersCss(d),d.initWidgets&&b.applyWidget(c,!1)),d.showProcessing&&f.unbind("sortBegin"+d.namespace+" sortEnd"+d.namespace).bind("sortBegin"+d.namespace+" sortEnd"+d.namespace,function(a){clearTimeout(d.timerProcessing),b.isProcessing(c),"sortBegin"===a.type&&(d.timerProcessing=setTimeout(function(){b.isProcessing(c,!0)},500))}),c.hasInitialized=!0,c.isProcessing=!1,d.debug&&(console.log("Overall initialization time: "+b.benchmark(a.data(c,"startoveralltimer"))),d.debug&&console.groupEnd&&console.groupEnd()),f.triggerHandler("tablesorter-initialized",c),"function"==typeof d.initialized&&d.initialized(c)},bindMethods:function(c){var d=c.$table,e=c.namespace,f="sortReset update updateRows updateAll updateHeaders addRows updateCell updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave ".split(" ").join(e+" ");d.unbind(f.replace(b.regex.spaces," ")).bind("sortReset"+e,function(a,c){a.stopPropagation(),b.sortReset(this.config,c)}).bind("updateAll"+e,function(a,c,d){a.stopPropagation(),b.updateAll(this.config,c,d)}).bind("update"+e+" updateRows"+e,function(a,c,d){a.stopPropagation(),b.update(this.config,c,d)}).bind("updateHeaders"+e,function(a,c){a.stopPropagation(),b.updateHeaders(this.config,c)}).bind("updateCell"+e,function(a,c,d,e){a.stopPropagation(),b.updateCell(this.config,c,d,e)}).bind("addRows"+e,function(a,c,d,e){a.stopPropagation(),b.addRows(this.config,c,d,e)}).bind("updateComplete"+e,function(){this.isUpdating=!1}).bind("sorton"+e,function(a,c,d,e){a.stopPropagation(),b.sortOn(this.config,c,d,e)}).bind("appendCache"+e,function(c,d,e){c.stopPropagation(),b.appendCache(this.config,e),a.isFunction(d)&&d(this)}).bind("updateCache"+e,function(a,c,d){a.stopPropagation(),b.updateCache(this.config,c,d)}).bind("applyWidgetId"+e,function(a,c){a.stopPropagation(),b.applyWidgetId(this,c)}).bind("applyWidgets"+e,function(a,c){a.stopPropagation(),b.applyWidget(this,c)}).bind("refreshWidgets"+e,function(a,c,d){a.stopPropagation(),b.refreshWidgets(this,c,d)}).bind("removeWidget"+e,function(a,c,d){a.stopPropagation(),b.removeWidget(this,c,d)}).bind("destroy"+e,function(a,c,d){a.stopPropagation(),b.destroy(this,c,d)}).bind("resetToLoadState"+e,function(d){d.stopPropagation(),b.removeWidget(this,!0,!1),c=a.extend(!0,b.defaults,c.originalSettings),this.hasInitialized=!1,b.setup(this,c)})},bindEvents:function(c,d,e){c=a(c)[0];var f,g=c.config,h=g.namespace,i=null;e!==!0&&(d.addClass(h.slice(1)+"_extra_headers"),f=a.fn.closest?d.closest("table")[0]:d.parents("table")[0],f&&"TABLE"===f.nodeName&&f!==c&&a(f).addClass(h.slice(1)+"_extra_table")),f=(g.pointerDown+" "+g.pointerUp+" "+g.pointerClick+" sort keyup ").replace(b.regex.spaces," ").split(" ").join(h+" "),d.find(g.selectorSort).add(d.filter(g.selectorSort)).unbind(f).bind(f,function(c,e){var f,h,j,k=a(c.target),l=" "+c.type+" ";if(!(1!==(c.which||c.button)&&!l.match(" "+g.pointerClick+" | sort | keyup ")||" keyup "===l&&c.which!==b.keyCodes.enter||l.match(" "+g.pointerClick+" ")&&"undefined"!=typeof c.which||l.match(" "+g.pointerUp+" ")&&i!==c.target&&e!==!0)){if(l.match(" "+g.pointerDown+" "))return i=c.target,j=k.jquery.split("."),void("1"===j[0]&&j[1]<4&&c.preventDefault());if(i=null,b.regex.formElements.test(c.target.nodeName)||k.hasClass(g.cssNoSort)||k.parents("."+g.cssNoSort).length>0||k.parents("button").length>0)return!g.cancelSelection;g.delayInit&&b.isEmptyObject(g.cache)&&b.buildCache(g),f=a.fn.closest?a(this).closest("th, td"):/TH|TD/.test(this.nodeName)?a(this):a(this).parents("th, td"),j=d.index(f),g.last.clickedIndex=0>j?f.attr("data-column"):j,h=g.$headers[g.last.clickedIndex],h&&!h.sortDisabled&&b.initSort(g,h,c)}}),g.cancelSelection&&d.attr("unselectable","on").bind("selectstart",!1).css({"user-select":"none",MozUserSelect:"none"})},buildHeaders:function(c){var d,e,f,g;for(c.headerList=[],c.headerContent=[],c.sortVars=[],c.debug&&(f=new Date),c.columns=b.computeColumnIndex(c.$table.children("thead, tfoot").children("tr")),e=c.cssIcon?'<i class="'+(c.cssIcon===b.css.icon?b.css.icon:c.cssIcon+" "+b.css.icon)+'"></i>':"",c.$headers=a(a.map(c.$table.find(c.selectorHeaders),function(d,f){var g,h,i,j,k,l=a(d);if(!l.parent().hasClass(c.cssIgnoreRow))return g=b.getColumnData(c.table,c.headers,f,!0),c.headerContent[f]=l.html(),""===c.headerTemplate||l.find("."+b.css.headerIn).length||(j=c.headerTemplate.replace(b.regex.templateContent,l.html()).replace(b.regex.templateIcon,l.find("."+b.css.icon).length?"":e),c.onRenderTemplate&&(h=c.onRenderTemplate.apply(l,[f,j]),h&&"string"==typeof h&&(j=h)),l.html('<div class="'+b.css.headerIn+'">'+j+"</div>")),c.onRenderHeader&&c.onRenderHeader.apply(l,[f,c,c.$table]),i=parseInt(l.attr("data-column"),10),d.column=i,k=b.getData(l,g,"sortInitialOrder")||c.sortInitialOrder,c.sortVars[i]={count:-1,order:b.getOrder(k)?[1,0,2]:[0,1,2],lockedOrder:!1},k=b.getData(l,g,"lockedOrder")||!1,"undefined"!=typeof k&&k!==!1&&(c.sortVars[i].lockedOrder=!0,c.sortVars[i].order=b.getOrder(k)?[1,1,1]:[0,0,0]),c.headerList[f]=d,l.addClass(b.css.header+" "+c.cssHeader).parent().addClass(b.css.headerRow+" "+c.cssHeaderRow).attr("role","row"),c.tabIndex&&l.attr("tabindex",0),d})),c.$headerIndexed=[],g=0;g<c.columns;g++)b.isEmptyObject(c.sortVars[g])&&(c.sortVars[g]={}),d=c.$headers.filter('[data-column="'+g+'"]'),c.$headerIndexed[g]=d.length?d.not(".sorter-false").length?d.not(".sorter-false").filter(":last"):d.filter(":last"):a();c.$table.find(c.selectorHeaders).attr({scope:"col",role:"columnheader"}),b.updateHeader(c),c.debug&&(console.log("Built headers:"+b.benchmark(f)),console.log(c.$headers))},addInstanceMethods:function(c){a.extend(b.instanceMethods,c)},setupParsers:function(a,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r=a.table,s=0,t={};if(a.$tbodies=a.$table.children("tbody:not(."+a.cssInfoBlock+")"),p="undefined"==typeof c?a.$tbodies:c,q=p.length,0===q)return a.debug?console.warn("Warning: *Empty table!* Not building a parser cache"):"";for(a.debug&&(o=new Date,console[console.group?"group":"log"]("Detecting parsers for each column")),e={extractors:[],parsers:[]};q>s;){if(d=p[s].rows,d.length)for(h=0,g=a.columns,i=0;g>i;i++){if(j=a.$headerIndexed[h],j&&j.length&&(k=b.getColumnData(r,a.headers,h),n=b.getParserById(b.getData(j,k,"extractor")),m=b.getParserById(b.getData(j,k,"sorter")),l="false"===b.getData(j,k,"parser"),a.empties[h]=(b.getData(j,k,"empty")||a.emptyTo||(a.emptyToBottom?"bottom":"top")).toLowerCase(),a.strings[h]=(b.getData(j,k,"string")||a.stringTo||"max").toLowerCase(),l&&(m=b.getParserById("no-parser")),n||(n=!1),m||(m=b.detectParserForColumn(a,d,-1,h)),a.debug&&(t["("+h+") "+j.text()]={parser:m.id,extractor:n?n.id:"none",string:a.strings[h],empty:a.empties[h]}),e.parsers[h]=m,e.extractors[h]=n,f=j[0].colSpan-1,f>0))for(h+=f,g+=f;f+1>0;)e.parsers[h-f]=m,e.extractors[h-f]=n,f--;h++}s+=e.parsers.length?q:1}a.debug&&(b.isEmptyObject(t)?console.warn("  No parsers detected!"):console[console.table?"table":"log"](t),console.log("Completed detecting parsers"+b.benchmark(o)),console.groupEnd&&console.groupEnd()),a.parsers=e.parsers,a.extractors=e.extractors},addParser:function(a){var c,d=b.parsers.length,e=!0;for(c=0;d>c;c++)b.parsers[c].id.toLowerCase()===a.id.toLowerCase()&&(e=!1);e&&b.parsers.push(a)},getParserById:function(a){if("false"==a)return!1;var c,d=b.parsers.length;for(c=0;d>c;c++)if(b.parsers[c].id.toLowerCase()===a.toString().toLowerCase())return b.parsers[c];return!1},detectParserForColumn:function(c,d,e,f){for(var g,h,i,j=b.parsers.length,k=!1,l="",m=!0;""===l&&m;)e++,i=d[e],i&&50>e?i.className.indexOf(b.cssIgnoreRow)<0&&(k=d[e].cells[f],l=b.getElementText(c,k,f),h=a(k),c.debug&&console.log("Checking if value was empty on row "+e+", column: "+f+': "'+l+'"')):m=!1;for(;--j>=0;)if(g=b.parsers[j],g&&"text"!==g.id&&g.is&&g.is(l,c.table,k,h))return g;return b.getParserById("text")},getElementText:function(c,d,e){if(!d)return"";var f,g=c.textExtraction||"",h=d.jquery?d:a(d);return"string"==typeof g?"basic"===g&&"undefined"!=typeof(f=h.attr(c.textAttribute))?a.trim(f):a.trim(d.textContent||h.text()):"function"==typeof g?a.trim(g(h[0],c.table,e)):"function"==typeof(f=b.getColumnData(c.table,g,e))?a.trim(f(h[0],c.table,e)):a.trim(h[0].textContent||h.text())},getParsedText:function(a,c,d,e){"undefined"==typeof e&&(e=b.getElementText(a,c,d));var f=""+e,g=a.parsers[d],h=a.extractors[d];return g&&(h&&"function"==typeof h.format&&(e=h.format(e,a.table,c,d)),f="no-parser"===g.id?"":g.format(""+e,a.table,c,d),a.ignoreCase&&"string"==typeof f&&(f=f.toLowerCase())),f},buildCache:function(c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B=c.table,C=c.parsers;if(c.$tbodies=c.$table.children("tbody:not(."+c.cssInfoBlock+")"),l="undefined"==typeof e?c.$tbodies:e,c.cache={},c.totalRows=0,!C)return c.debug?console.warn("Warning: *Empty table!* Not building a cache"):"";for(c.debug&&(q=new Date),c.showProcessing&&b.isProcessing(B,!0),k=0;k<l.length;k++){for(u=[],f=c.cache[k]={normalized:[]},r=l[k]&&l[k].rows.length||0,i=0;r>i;++i)if(s={child:[],raw:[]},m=a(l[k].rows[i]),n=[],m.hasClass(c.cssChildRow)&&0!==i)for(z=f.normalized.length-1,t=f.normalized[z][c.columns],t.$row=t.$row.add(m),m.prev().hasClass(c.cssChildRow)||m.prev().addClass(b.css.cssHasChild),o=m.children("th, td"),z=t.child.length,t.child[z]=[],w=0,y=c.columns,j=0;y>j;j++)p=o[j],p&&(t.child[z][j]=b.getParsedText(c,p,j),v=o[j].colSpan-1,v>0&&(w+=v,y+=v)),w++;else{for(s.$row=m,s.order=i,w=0,y=c.columns,j=0;y>j;++j){if(p=m[0].cells[j],p&&w<c.columns&&(x="undefined"!=typeof C[w],!x&&c.debug&&console.warn("No parser found for row: "+i+", column: "+j+'; cell containing: "'+a(p).text()+'"; does it have a header?'),g=b.getElementText(c,p,w),s.raw[w]=g,h=b.getParsedText(c,p,w,g),n[w]=h,x&&"numeric"===(C[w].type||"").toLowerCase()&&(u[w]=Math.max(Math.abs(h)||0,u[w]||0)),v=p.colSpan-1,v>0)){for(A=0;v>=A;)s.raw[w+A]=c.duplicateSpan||0===A?g:"",n[w+A]=c.duplicateSpan||0===A?g:"",A++;w+=v,y+=v}w++}n[c.columns]=s,f.normalized.push(n)}f.colMax=u,c.totalRows+=f.normalized.length}if(c.showProcessing&&b.isProcessing(B),c.debug){for(z=Math.min(5,c.cache[0].normalized.length),console[console.group?"group":"log"]("Building cache for "+c.totalRows+" rows (showing "+z+" rows in log)"+b.benchmark(q)),g={},j=0;j<c.columns;j++)for(w=0;z>w;w++)g["row: "+w]||(g["row: "+w]={}),g["row: "+w][c.$headerIndexed[j].text()]=c.cache[0].normalized[w][j];console[console.table?"table":"log"](g),console.groupEnd&&console.groupEnd()}a.isFunction(d)&&d(B)},getColumnText:function(c,d,e,f){c=a(c)[0];var g,h,i,j,k,l,m,n,o,p,q="function"==typeof e,r="all"===d,s={raw:[],parsed:[],$cell:[]},t=c.config;if(!b.isEmptyObject(t)){for(k=t.$tbodies.length,g=0;k>g;g++)for(i=t.cache[g].normalized,l=i.length,h=0;l>h;h++)j=i[h],(!f||j[t.columns].$row.is(f))&&(p=!0,n=r?j.slice(0,t.columns):j[d],j=j[t.columns],m=r?j.raw:j.raw[d],o=r?j.$row.children():j.$row.children().eq(d),q&&(p=e({tbodyIndex:g,rowIndex:h,parsed:n,raw:m,$row:j.$row,$cell:o})),p!==!1&&(s.parsed.push(n),s.raw.push(m),s.$cell.push(o)));return s}t.debug&&console.warn("No cache found - aborting getColumnText function!")},setHeadersCss:function(c){var d,e,f,g=c.sortList,h=g.length,i=b.css.sortNone+" "+c.cssNone,j=[b.css.sortAsc+" "+c.cssAsc,b.css.sortDesc+" "+c.cssDesc],k=[c.cssIconAsc,c.cssIconDesc,c.cssIconNone],l=["ascending","descending"],m=c.$table.find("tfoot tr").children("td, th").add(a(c.namespace+"_extra_headers")).removeClass(j.join(" "));for(c.$headers.removeClass(j.join(" ")).addClass(i).attr("aria-sort","none").find("."+b.css.icon).removeClass(k.join(" ")).addClass(k[2]),e=0;h>e;e++)if(2!==g[e][1]&&(d=c.$headers.filter(function(a){for(var d=!0,e=c.$headers.eq(a),f=parseInt(e.attr("data-column"),10),g=f+c.$headers[a].colSpan;g>f;f++)d=d?d||b.isValueInArray(f,c.sortList)>-1:!1;return d}),d=d.not(".sorter-false").filter('[data-column="'+g[e][0]+'"]'+(1===h?":last":"")),d.length)){for(f=0;f<d.length;f++)d[f].sortDisabled||d.eq(f).removeClass(i).addClass(j[g[e][1]]).attr("aria-sort",l[g[e][1]]).find("."+b.css.icon).removeClass(k[2]).addClass(k[g[e][1]]);m.length&&m.filter('[data-column="'+g[e][0]+'"]').removeClass(i).addClass(j[g[e][1]])}for(h=c.$headers.length,e=0;h>e;e++)b.setColumnAriaLabel(c,c.$headers.eq(e))},setColumnAriaLabel:function(c,d,e){if(d.length){var f=parseInt(d.attr("data-column"),10),g=d.hasClass(b.css.sortAsc)?"sortAsc":d.hasClass(b.css.sortDesc)?"sortDesc":"sortNone",h=a.trim(d.text())+": "+b.language[g];d.hasClass("sorter-false")||e===!1?h+=b.language.sortDisabled:(e=c.sortVars[f].order[(c.sortVars[f].count+1)%(c.sortReset?3:2)],h+=b.language[0===e?"nextAsc":1===e?"nextDesc":"nextNone"]),d.attr("aria-label",h)}},updateHeader:function(a){var c,d,e,f,g=a.table,h=a.$headers.length;for(c=0;h>c;c++)e=a.$headers.eq(c),f=b.getColumnData(g,a.headers,c,!0),d="false"===b.getData(e,f,"sorter")||"false"===b.getData(e,f,"parser"),b.setColumnSort(a,e,d)},setColumnSort:function(a,b,c){var d=a.table.id;b[0].sortDisabled=c,b[c?"addClass":"removeClass"]("sorter-false").attr("aria-disabled",""+c),a.tabIndex&&(c?b.removeAttr("tabindex"):b.attr("tabindex","0")),d&&(c?b.removeAttr("aria-controls"):b.attr("aria-controls",d))},updateHeaderSortCount:function(c,d){var e,f,g,h,i,j,k,l,m=d||c.sortList,n=m.length;for(c.sortList=[],h=0;n>h;h++)if(k=m[h],e=parseInt(k[0],10),e<c.columns){switch(c.sortVars[e].order||(l=c.sortVars[e].order=b.getOrder(c.sortInitialOrder)?[1,0,2]:[0,1,2],c.sortVars[e].count=0),l=c.sortVars[e].order,f=(""+k[1]).match(/^(1|d|s|o|n)/),f=f?f[0]:""){case"1":case"d":f=1;break;case"s":f=i||0;break;case"o":j=l[(i||0)%(c.sortReset?3:2)],f=0===j?1:1===j?0:2;break;case"n":f=l[++c.sortVars[e].count%(c.sortReset?3:2)];break;default:f=0}i=0===h?f:i,g=[e,parseInt(f,10)||0],c.sortList.push(g),f=a.inArray(g[1],l),c.sortVars[e].count=f>=0?f:g[1]%(c.sortReset?3:2)}},updateAll:function(a,c,d){var e=a.table;e.isUpdating=!0,b.refreshWidgets(e,!0,!0),b.buildHeaders(a),b.bindEvents(e,a.$headers,!0),b.bindMethods(a),b.commonUpdate(a,c,d)},update:function(a,c,d){var e=a.table;e.isUpdating=!0,b.updateHeader(a),b.commonUpdate(a,c,d)},updateHeaders:function(a,c){a.table.isUpdating=!0,b.buildHeaders(a),b.bindEvents(a.table,a.$headers,!0),b.resortComplete(a,c)},updateCell:function(c,d,e,f){if(b.isEmptyObject(c.cache))return b.updateHeader(c),void b.commonUpdate(c,e,f);c.table.isUpdating=!0,c.$table.find(c.selectorRemove).remove();var g,h,i,j,k,l,m=c.$tbodies,n=a(d),o=m.index(a.fn.closest?n.closest("tbody"):n.parents("tbody").filter(":first")),p=c.cache[o],q=a.fn.closest?n.closest("tr"):n.parents("tr").filter(":first");if(d=n[0],m.length&&o>=0){if(i=m.eq(o).find("tr").index(q),k=p.normalized[i],l=q[0].cells.length,l!==c.columns)for(j=0,g=!1,h=0;l>h;h++)g||q[0].cells[h]===d?g=!0:j+=q[0].cells[h].colSpan;else j=n.index();g=b.getElementText(c,d,j),k[c.columns].raw[j]=g,g=b.getParsedText(c,d,j,g),k[j]=g,k[c.columns].$row=q,"numeric"===(c.parsers[j].type||"").toLowerCase()&&(p.colMax[j]=Math.max(Math.abs(g)||0,p.colMax[j]||0)),g="undefined"!==e?e:c.resort,g!==!1?b.checkResort(c,g,f):b.resortComplete(c,f)}else c.debug&&console.error("updateCell aborted, tbody missing or not within the indicated table"),c.table.isUpdating=!1},addRows:function(c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s="string"==typeof d&&1===c.$tbodies.length&&/<tr/.test(d||""),t=c.table;if(s)d=a(d),c.$tbodies.append(d);else if(!(d&&d instanceof jQuery&&(a.fn.closest?d.closest("table")[0]:d.parents("table")[0])===c.table))return c.debug&&console.error("addRows method requires (1) a jQuery selector reference to rows that have already been added to the table, or (2) row HTML string to be added to a table with only one tbody"),!1;if(t.isUpdating=!0,b.isEmptyObject(c.cache))b.updateHeader(c),b.commonUpdate(c,e,f);else{for(k=d.filter("tr").attr("role","row").length,i=c.$tbodies.index(d.parents("tbody").filter(":first")),c.parsers&&c.parsers.length||b.setupParsers(c),j=0;k>j;j++){for(n=0,m=d[j].cells.length,p=[],o={child:[],raw:[],$row:d.eq(j),order:c.cache[i].normalized.length},l=0;m>l;l++)q=d[j].cells[l],g=b.getElementText(c,q,n),o.raw[n]=g,h=b.getParsedText(c,q,n,g),p[n]=h,"numeric"===(c.parsers[n].type||"").toLowerCase()&&(c.cache[i].colMax[n]=Math.max(Math.abs(h)||0,c.cache[i].colMax[n]||0)),r=q.colSpan-1,r>0&&(n+=r),n++;p[c.columns]=o,c.cache[i].normalized.push(p)}b.checkResort(c,e,f)}},updateCache:function(a,c,d){a.parsers&&a.parsers.length||b.setupParsers(a,d),b.buildCache(a,c,d)},appendCache:function(a,c){var d,e,f,g,h,i,j,k=a.table,l=a.widgetOptions,m=a.$tbodies,n=[],o=a.cache;if(b.isEmptyObject(o))return a.appender?a.appender(k,n):k.isUpdating?a.$table.triggerHandler("updateComplete",k):"";for(a.debug&&(j=new Date),i=0;i<m.length;i++)if(f=m.eq(i),f.length){for(g=b.processTbody(k,f,!0),d=o[i].normalized,e=d.length,h=0;e>h;h++)n.push(d[h][a.columns].$row),a.appender&&(!a.pager||a.pager.removeRows&&l.pager_removeRows||a.pager.ajax)||g.append(d[h][a.columns].$row);b.processTbody(k,g,!1)}a.appender&&a.appender(k,n),a.debug&&console.log("Rebuilt table"+b.benchmark(j)),c||a.appender||b.applyWidget(k),k.isUpdating&&a.$table.triggerHandler("updateComplete",k)},commonUpdate:function(a,c,d){a.$table.find(a.selectorRemove).remove(),b.setupParsers(a),b.buildCache(a),b.checkResort(a,c,d)},initSort:function(c,d,e){if(c.table.isUpdating)return setTimeout(function(){b.initSort(c,d,e)},50);var f,g,h,i,j,k,l,m=!e[c.sortMultiSortKey],n=c.table,o=c.$headers.length,p=parseInt(a(d).attr("data-column"),10),q=c.sortVars[p].order;if(c.$table.triggerHandler("sortStart",n),c.sortVars[p].count=e[c.sortResetKey]?2:(c.sortVars[p].count+1)%(c.sortReset?3:2),c.sortRestart)for(h=0;o>h;h++)l=c.$headers.eq(h),k=parseInt(l.attr("data-column"),10),p!==k&&(m||l.hasClass(b.css.sortNone))&&(c.sortVars[k].count=-1);if(m){if(c.sortList=[],c.last.sortList=[],null!==c.sortForce)for(f=c.sortForce,g=0;g<f.length;g++)f[g][0]!==p&&c.sortList.push(f[g]);if(i=q[c.sortVars[p].count],2>i&&(c.sortList.push([p,i]),d.colSpan>1))for(g=1;g<d.colSpan;g++)c.sortList.push([p+g,i]),c.sortVars[p+g].count=a.inArray(i,q)}else if(c.sortList=a.extend([],c.last.sortList),b.isValueInArray(p,c.sortList)>=0)for(g=0;g<c.sortList.length;g++)k=c.sortList[g],k[0]===p&&(k[1]=q[c.sortVars[p].count],2===k[1]&&(c.sortList.splice(g,1),c.sortVars[p].count=-1));else if(i=q[c.sortVars[p].count],2>i&&(c.sortList.push([p,i]),d.colSpan>1))for(g=1;g<d.colSpan;g++)c.sortList.push([p+g,i]),c.sortVars[p+g].count=a.inArray(i,q);if(c.last.sortList=a.extend([],c.sortList),c.sortList.length&&c.sortAppend&&(f=a.isArray(c.sortAppend)?c.sortAppend:c.sortAppend[c.sortList[0][0]],!b.isEmptyObject(f)))for(g=0;g<f.length;g++)if(f[g][0]!==p&&b.isValueInArray(f[g][0],c.sortList)<0){if(i=f[g][1],j=(""+i).match(/^(a|d|s|o|n)/))switch(k=c.sortList[0][1],j[0]){case"d":i=1;break;case"s":i=k;break;case"o":i=0===k?1:0;break;case"n":i=(k+1)%(c.sortReset?3:2);break;default:i=0}c.sortList.push([f[g][0],i])}c.$table.triggerHandler("sortBegin",n),setTimeout(function(){b.setHeadersCss(c),b.multisort(c),b.appendCache(c),c.$table.triggerHandler("sortBeforeEnd",n),c.$table.triggerHandler("sortEnd",n)},1)},multisort:function(a){var c,d,e,f,g=a.table,h=0,i=a.textSorter||"",j=a.sortList,k=j.length,l=a.$tbodies.length;if(!a.serverSideSorting&&!b.isEmptyObject(a.cache)){for(a.debug&&(d=new Date),c=0;l>c;c++)e=a.cache[c].colMax,f=a.cache[c].normalized,f.sort(function(c,d){var f,l,m,n,o,p,q;for(f=0;k>f;f++){if(m=j[f][0],n=j[f][1],h=0===n,a.sortStable&&c[m]===d[m]&&1===k)return c[a.columns].order-d[a.columns].order;if(l=/n/i.test(b.getSortType(a.parsers,m)),l&&a.strings[m]?(l="boolean"==typeof b.string[a.strings[m]]?(h?1:-1)*(b.string[a.strings[m]]?-1:1):a.strings[m]?b.string[a.strings[m]]||0:0,o=a.numberSorter?a.numberSorter(c[m],d[m],h,e[m],g):b["sortNumeric"+(h?"Asc":"Desc")](c[m],d[m],l,e[m],m,a)):(p=h?c:d,q=h?d:c,o="function"==typeof i?i(p[m],q[m],h,m,g):"object"==typeof i&&i.hasOwnProperty(m)?i[m](p[m],q[m],h,m,g):b["sortNatural"+(h?"Asc":"Desc")](c[m],d[m],m,a)),o)return o}return c[a.columns].order-d[a.columns].order});a.debug&&console.log("Applying sort "+j.toString()+b.benchmark(d))}},resortComplete:function(b,c){b.table.isUpdating&&b.$table.triggerHandler("updateComplete",b.table),a.isFunction(c)&&c(b.table)},checkResort:function(c,d,e){var f=a.isArray(d)?d:c.sortList,g="undefined"==typeof d?c.resort:d;g===!1||c.serverSideSorting||c.table.isProcessing?(b.resortComplete(c,e),b.applyWidget(c.table,!1)):f.length?b.sortOn(c,f,function(){b.resortComplete(c,e)},!0):b.sortReset(c,function(){b.resortComplete(c,e),b.applyWidget(c.table,!1)})},sortOn:function(c,d,e,f){var g=c.table;c.$table.triggerHandler("sortStart",g),b.updateHeaderSortCount(c,d),b.setHeadersCss(c),c.delayInit&&b.isEmptyObject(c.cache)&&b.buildCache(c),c.$table.triggerHandler("sortBegin",g),b.multisort(c),b.appendCache(c,f),c.$table.triggerHandler("sortBeforeEnd",g),c.$table.triggerHandler("sortEnd",g),b.applyWidget(g),a.isFunction(e)&&e(g)},sortReset:function(c,d){c.sortList=[],b.setHeadersCss(c),b.multisort(c),b.appendCache(c),a.isFunction(d)&&d(c.table)},getSortType:function(a,b){return a&&a[b]?a[b].type||"":""},getOrder:function(a){return/^d/i.test(a)||1===a},sortNatural:function(a,c){if(a===c)return 0;var d,e,f,g,h,i,j=b.regex;if(j.hex.test(c)){if(d=parseInt(a.match(j.hex),16),e=parseInt(c.match(j.hex),16),e>d)return-1;if(d>e)return 1}for(d=a.replace(j.chunk,"\\0$1\\0").replace(j.chunks,"").split("\\0"),e=c.replace(j.chunk,"\\0$1\\0").replace(j.chunks,"").split("\\0"),i=Math.max(d.length,e.length),h=0;i>h;h++){if(f=isNaN(d[h])?d[h]||0:parseFloat(d[h])||0,g=isNaN(e[h])?e[h]||0:parseFloat(e[h])||0,isNaN(f)!==isNaN(g))return isNaN(f)?1:-1;if(typeof f!=typeof g&&(f+="",g+=""),g>f)return-1;if(f>g)return 1}return 0},sortNaturalAsc:function(a,c,d,e){if(a===c)return 0;var f=b.string[e.empties[d]||e.emptyTo];return""===a&&0!==f?"boolean"==typeof f?f?-1:1:-f||-1:""===c&&0!==f?"boolean"==typeof f?f?1:-1:f||1:b.sortNatural(a,c)},sortNaturalDesc:function(a,c,d,e){if(a===c)return 0;var f=b.string[e.empties[d]||e.emptyTo];return""===a&&0!==f?"boolean"==typeof f?f?-1:1:f||1:""===c&&0!==f?"boolean"==typeof f?f?1:-1:-f||-1:b.sortNatural(c,a)},sortText:function(a,b){return a>b?1:b>a?-1:0},getTextValue:function(a,b,c){if(c){var d,e=a?a.length:0,f=c+b;for(d=0;e>d;d++)f+=a.charCodeAt(d);return b*f}return 0},sortNumericAsc:function(a,c,d,e,f,g){if(a===c)return 0;var h=b.string[g.empties[f]||g.emptyTo];return""===a&&0!==h?"boolean"==typeof h?h?-1:1:-h||-1:""===c&&0!==h?"boolean"==typeof h?h?1:-1:h||1:(isNaN(a)&&(a=b.getTextValue(a,d,e)),isNaN(c)&&(c=b.getTextValue(c,d,e)),a-c)},sortNumericDesc:function(a,c,d,e,f,g){if(a===c)return 0;var h=b.string[g.empties[f]||g.emptyTo];return""===a&&0!==h?"boolean"==typeof h?h?-1:1:h||1:""===c&&0!==h?"boolean"==typeof h?h?1:-1:-h||-1:(isNaN(a)&&(a=b.getTextValue(a,d,e)),isNaN(c)&&(c=b.getTextValue(c,d,e)),c-a)},sortNumeric:function(a,b){return a-b},addWidget:function(a){b.widgets.push(a)},hasWidget:function(b,c){return b=a(b),b.length&&b[0].config&&b[0].config.widgetInit[c]||!1},getWidgetById:function(a){var c,d,e=b.widgets.length;for(c=0;e>c;c++)if(d=b.widgets[c],d&&d.id&&d.id.toLowerCase()===a.toLowerCase())return d},applyWidgetOptions:function(c){var d,e,f=c.config,g=f.widgets.length;if(g)for(d=0;g>d;d++)e=b.getWidgetById(f.widgets[d]),e&&e.options&&(f.widgetOptions=a.extend(!0,{},e.options,f.widgetOptions))},addWidgetFromClass:function(a){var c,d,e=a.config,f="^"+e.widgetClass.replace(b.regex.templateName,"(\\S+)+")+"$",g=new RegExp(f,"g"),h=(a.className||"").split(b.regex.spaces);if(h.length)for(c=h.length,d=0;c>d;d++)h[d].match(g)&&e.widgets.push(h[d].replace(g,"$1"))},applyWidgetId:function(c,d,e){var f,g,h,i=c.config,j=i.widgetOptions,k=b.getWidgetById(d);k&&(h=k.id,f=!1,a.inArray(h,i.widgets)<0&&i.widgets.push(h),i.debug&&(g=new Date),(e||!i.widgetInit[h])&&(i.widgetInit[h]=!0,c.hasInitialized&&b.applyWidgetOptions(c),"function"==typeof k.init&&(f=!0,i.debug&&console[console.group?"group":"log"]("Initializing "+h+" widget"),k.init(c,k,i,j))),e||"function"!=typeof k.format||(f=!0,i.debug&&console[console.group?"group":"log"]("Updating "+h+" widget"),k.format(c,i,j,!1)),i.debug&&f&&(console.log("Completed "+(e?"initializing ":"applying ")+h+" widget"+b.benchmark(g)),console.groupEnd&&console.groupEnd()))},applyWidget:function(c,d,e){c=a(c)[0];var f,g,h,i,j,k=c.config,l=[];if(d===!1||!c.hasInitialized||!c.isApplyingWidgets&&!c.isUpdating){if(k.debug&&(j=new Date),b.addWidgetFromClass(c),clearTimeout(k.timerReady),k.widgets.length){for(c.isApplyingWidgets=!0,k.widgets=a.grep(k.widgets,function(b,c){return a.inArray(b,k.widgets)===c}),h=k.widgets||[],g=h.length,f=0;g>f;f++)i=b.getWidgetById(h[f]),i&&i.id&&(i.priority||(i.priority=10),l[f]=i);for(l.sort(function(a,b){return a.priority<b.priority?-1:a.priority===b.priority?0:1}),g=l.length,k.debug&&console[console.group?"group":"log"]("Start "+(d?"initializing":"applying")+" widgets"),f=0;g>f;f++)i=l[f],i&&i.id&&b.applyWidgetId(c,i.id,d);k.debug&&console.groupEnd&&console.groupEnd(),d||"function"!=typeof e||e(c)}k.timerReady=setTimeout(function(){c.isApplyingWidgets=!1,a.data(c,"lastWidgetApplication",new Date),k.$table.triggerHandler("tablesorter-ready")},10),k.debug&&(i=k.widgets.length,console.log("Completed "+(d===!0?"initializing ":"applying ")+i+" widget"+(1!==i?"s":"")+b.benchmark(j)))}},removeWidget:function(c,d,e){c=a(c)[0];var f,g,h,i,j=c.config;if(d===!0)for(d=[],i=b.widgets.length,h=0;i>h;h++)g=b.widgets[h],g&&g.id&&d.push(g.id);else d=(a.isArray(d)?d.join(","):d||"").toLowerCase().split(/[\s,]+/);for(i=d.length,f=0;i>f;f++)g=b.getWidgetById(d[f]),h=a.inArray(d[f],j.widgets),g&&g.remove&&(j.debug&&console.log((e?"Refreshing":"Removing")+' "'+d[f]+'" widget'),g.remove(c,j,j.widgetOptions,e),j.widgetInit[d[f]]=!1),h>=0&&e!==!0&&j.widgets.splice(h,1)},refreshWidgets:function(c,d,e){c=a(c)[0];var f,g,h=c.config,i=h.widgets,j=b.widgets,k=j.length,l=[],m=function(b){a(b).triggerHandler("refreshComplete")};for(f=0;k>f;f++)g=j[f],g&&g.id&&(d||a.inArray(g.id,i)<0)&&l.push(g.id);b.removeWidget(c,l.join(","),!0),e!==!0?(b.applyWidget(c,d||!1,m),d&&b.applyWidget(c,!1,m)):m(c)},benchmark:function(a){return" ( "+((new Date).getTime()-a.getTime())+"ms )"},log:function(){console.log(arguments)},isEmptyObject:function(a){for(var b in a)return!1;return!0},isValueInArray:function(a,b){var c,d=b&&b.length||0;for(c=0;d>c;c++)if(b[c][0]===a)return c;return-1},formatFloat:function(c,d){if("string"!=typeof c||""===c)return c;var e,f=d&&d.config?d.config.usNumberFormat!==!1:"undefined"!=typeof d?d:!0;return c=f?c.replace(b.regex.comma,""):c.replace(b.regex.digitNonUS,"").replace(b.regex.comma,"."),b.regex.digitNegativeTest.test(c)&&(c=c.replace(b.regex.digitNegativeReplace,"-$1")),e=parseFloat(c),isNaN(e)?a.trim(c):e},isDigit:function(a){return isNaN(a)?b.regex.digitTest.test(a.toString().replace(b.regex.digitReplace,"")):""!==a},computeColumnIndex:function(b,c){var d,e,f,g,h,i,j,k,l,m,n=c&&c.columns||0,o=[],p=new Array(n);for(d=0;d<b.length;d++)for(i=b[d].cells,e=0;e<i.length;e++){for(h=i[e],j=h.parentNode.rowIndex,k=h.rowSpan||1,l=h.colSpan||1,"undefined"==typeof o[j]&&(o[j]=[]),f=0;f<o[j].length+1;f++)if("undefined"==typeof o[j][f]){m=f;break}for(n&&h.cellIndex===m||(h.setAttribute?h.setAttribute("data-column",m):a(h).attr("data-column",m)),f=j;j+k>f;f++)for("undefined"==typeof o[f]&&(o[f]=[]),
p=o[f],g=m;m+l>g;g++)p[g]="x"}return p.length},fixColumnWidth:function(c){c=a(c)[0];var d,e,f,g,h,i=c.config,j=i.$table.children("colgroup");if(j.length&&j.hasClass(b.css.colgroup)&&j.remove(),i.widthFixed&&0===i.$table.children("colgroup").length){for(j=a('<colgroup class="'+b.css.colgroup+'">'),d=i.$table.width(),f=i.$tbodies.find("tr:first").children(":visible"),g=f.length,h=0;g>h;h++)e=parseInt(f.eq(h).width()/d*1e3,10)/10+"%",j.append(a("<col>").css("width",e));i.$table.prepend(j)}},getData:function(b,c,d){var e,f,g="",h=a(b);return h.length?(e=a.metadata?h.metadata():!1,f=" "+(h.attr("class")||""),"undefined"!=typeof h.data(d)||"undefined"!=typeof h.data(d.toLowerCase())?g+=h.data(d)||h.data(d.toLowerCase()):e&&"undefined"!=typeof e[d]?g+=e[d]:c&&"undefined"!=typeof c[d]?g+=c[d]:" "!==f&&f.match(" "+d+"-")&&(g=f.match(new RegExp("\\s"+d+"-([\\w-]+)"))[1]||""),a.trim(g)):""},getColumnData:function(b,c,d,e,f){if("undefined"!=typeof c&&null!==c){b=a(b)[0];var g,h,i=b.config,j=f||i.$headers,k=i.$headerIndexed&&i.$headerIndexed[d]||j.filter('[data-column="'+d+'"]:last');if(c[d])return e?c[d]:c[j.index(k)];for(h in c)if("string"==typeof h&&(g=k.filter(h).add(k.find(h)),g.length))return c[h]}},isProcessing:function(c,d,e){c=a(c);var f=c[0].config,g=e||c.find("."+b.css.header);d?("undefined"!=typeof e&&f.sortList.length>0&&(g=g.filter(function(){return this.sortDisabled?!1:b.isValueInArray(parseFloat(a(this).attr("data-column")),f.sortList)>=0})),c.add(g).addClass(b.css.processing+" "+f.cssProcessing)):c.add(g).removeClass(b.css.processing+" "+f.cssProcessing)},processTbody:function(b,c,d){if(b=a(b)[0],d)return b.isProcessing=!0,c.before('<colgroup class="tablesorter-savemyplace"/>'),a.fn.detach?c.detach():c.remove();var e=a(b).find("colgroup.tablesorter-savemyplace");c.insertAfter(e),e.remove(),b.isProcessing=!1},clearTableBody:function(b){a(b)[0].config.$tbodies.children().detach()},characterEquivalents:{a:"áàâãäąå",A:"ÁÀÂÃÄĄÅ",c:"çćč",C:"ÇĆČ",e:"éèêëěę",E:"ÉÈÊËĚĘ",i:"íìİîïı",I:"ÍÌİÎÏ",o:"óòôõöō",O:"ÓÒÔÕÖŌ",ss:"ß",SS:"ẞ",u:"úùûüů",U:"ÚÙÛÜŮ"},replaceAccents:function(a){var c,d="[",e=b.characterEquivalents;if(!b.characterRegex){b.characterRegexArray={};for(c in e)"string"==typeof c&&(d+=e[c],b.characterRegexArray[c]=new RegExp("["+e[c]+"]","g"));b.characterRegex=new RegExp(d+"]")}if(b.characterRegex.test(a))for(c in e)"string"==typeof c&&(a=a.replace(b.characterRegexArray[c],c));return a},restoreHeaders:function(c){var d,e,f=a(c)[0].config,g=f.$table.find(f.selectorHeaders),h=g.length;for(d=0;h>d;d++)e=g.eq(d),e.find("."+b.css.headerIn).length&&e.html(f.headerContent[d])},destroy:function(c,d,e){if(c=a(c)[0],c.hasInitialized){b.removeWidget(c,!0,!1);var f,g=a(c),h=c.config,i=h.debug,j=g.find("thead:first"),k=j.find("tr."+b.css.headerRow).removeClass(b.css.headerRow+" "+h.cssHeaderRow),l=g.find("tfoot:first > tr").children("th, td");d===!1&&a.inArray("uitheme",h.widgets)>=0&&(g.triggerHandler("applyWidgetId",["uitheme"]),g.triggerHandler("applyWidgetId",["zebra"])),j.find("tr").not(k).remove(),f="sortReset update updateRows updateAll updateHeaders updateCell addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets removeWidget destroy mouseup mouseleave "+"keypress sortBegin sortEnd resetToLoadState ".split(" ").join(h.namespace+" "),g.removeData("tablesorter").unbind(f.replace(b.regex.spaces," ")),h.$headers.add(l).removeClass([b.css.header,h.cssHeader,h.cssAsc,h.cssDesc,b.css.sortAsc,b.css.sortDesc,b.css.sortNone].join(" ")).removeAttr("data-column").removeAttr("aria-label").attr("aria-disabled","true"),k.find(h.selectorSort).unbind("mousedown mouseup keypress ".split(" ").join(h.namespace+" ").replace(b.regex.spaces," ")),b.restoreHeaders(c),g.toggleClass(b.css.table+" "+h.tableClass+" tablesorter-"+h.theme,d===!1),c.hasInitialized=!1,delete c.config.cache,"function"==typeof e&&e(c),i&&console.log("tablesorter has been removed")}}};a.fn.tablesorter=function(c){return this.each(function(){var d=this,e=a.extend(!0,{},b.defaults,c,b.instanceMethods);e.originalSettings=c,!d.hasInitialized&&b.buildTable&&"TABLE"!==this.nodeName?b.buildTable(d,e):b.setup(d,e)})},window.console&&window.console.log||(b.logs=[],console={},console.log=console.warn=console.error=console.table=function(){var a=arguments.length>1?arguments:arguments[0];b.logs.push({date:Date.now(),log:a})}),b.addParser({id:"no-parser",is:function(){return!1},format:function(){return""},type:"text"}),b.addParser({id:"text",is:function(){return!0},format:function(c,d){var e=d.config;return c&&(c=a.trim(e.ignoreCase?c.toLocaleLowerCase():c),c=e.sortLocaleCompare?b.replaceAccents(c):c),c},type:"text"}),b.regex.nondigit=/[^\w,. \-()]/g,b.addParser({id:"digit",is:function(a){return b.isDigit(a)},format:function(c,d){var e=b.formatFloat((c||"").replace(b.regex.nondigit,""),d);return c&&"number"==typeof e?e:c?a.trim(c&&d.config.ignoreCase?c.toLocaleLowerCase():c):c},type:"numeric"}),b.regex.currencyReplace=/[+\-,. ]/g,b.regex.currencyTest=/^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/,b.addParser({id:"currency",is:function(a){return a=(a||"").replace(b.regex.currencyReplace,""),b.regex.currencyTest.test(a)},format:function(c,d){var e=b.formatFloat((c||"").replace(b.regex.nondigit,""),d);return c&&"number"==typeof e?e:c?a.trim(c&&d.config.ignoreCase?c.toLocaleLowerCase():c):c},type:"numeric"}),b.regex.urlProtocolTest=/^(https?|ftp|file):\/\//,b.regex.urlProtocolReplace=/(https?|ftp|file):\/\//,b.addParser({id:"url",is:function(a){return b.regex.urlProtocolTest.test(a)},format:function(c){return c?a.trim(c.replace(b.regex.urlProtocolReplace,"")):c},parsed:!0,type:"text"}),b.regex.dash=/-/g,b.regex.isoDate=/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/,b.addParser({id:"isoDate",is:function(a){return b.regex.isoDate.test(a)},format:function(a,c){var d=a?new Date(a.replace(b.regex.dash,"/")):a;return d instanceof Date&&isFinite(d)?d.getTime():a},type:"numeric"}),b.regex.percent=/%/g,b.regex.percentTest=/(\d\s*?%|%\s*?\d)/,b.addParser({id:"percent",is:function(a){return b.regex.percentTest.test(a)&&a.length<15},format:function(a,c){return a?b.formatFloat(a.replace(b.regex.percent,""),c):a},type:"numeric"}),b.addParser({id:"image",is:function(a,b,c,d){return d.find("img").length>0},format:function(b,c,d){return a(d).find("img").attr(c.config.imgAttr||"alt")||b},parsed:!0,type:"text"}),b.regex.dateReplace=/(\S)([AP]M)$/i,b.regex.usLongDateTest1=/^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i,b.regex.usLongDateTest2=/^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i,b.addParser({id:"usLongDate",is:function(a){return b.regex.usLongDateTest1.test(a)||b.regex.usLongDateTest2.test(a)},format:function(a,c){var d=a?new Date(a.replace(b.regex.dateReplace,"$1 $2")):a;return d instanceof Date&&isFinite(d)?d.getTime():a},type:"numeric"}),b.regex.shortDateTest=/(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/,b.regex.shortDateReplace=/[\-.,]/g,b.regex.shortDateXXY=/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,b.regex.shortDateYMD=/(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/,b.convertFormat=function(a,c){a=(a||"").replace(b.regex.spaces," ").replace(b.regex.shortDateReplace,"/"),"mmddyyyy"===c?a=a.replace(b.regex.shortDateXXY,"$3/$1/$2"):"ddmmyyyy"===c?a=a.replace(b.regex.shortDateXXY,"$3/$2/$1"):"yyyymmdd"===c&&(a=a.replace(b.regex.shortDateYMD,"$1/$2/$3"));var d=new Date(a);return d instanceof Date&&isFinite(d)?d.getTime():""},b.addParser({id:"shortDate",is:function(a){return a=(a||"").replace(b.regex.spaces," ").replace(b.regex.shortDateReplace,"/"),b.regex.shortDateTest.test(a)},format:function(a,c,d,e){if(a){var f=c.config,g=f.$headerIndexed[e],h=g.length&&g.data("dateFormat")||b.getData(g,b.getColumnData(c,f.headers,e),"dateFormat")||f.dateFormat;return g.length&&g.data("dateFormat",h),b.convertFormat(a,h)||a}return a},type:"numeric"}),b.regex.timeTest=/^([1-9]|1[0-2]):([0-5]\d)(\s[AP]M)$|^((?:[01]\d|[2][0-4]):[0-5]\d)$/i,b.regex.timeMatch=/([1-9]|1[0-2]):([0-5]\d)(\s[AP]M)|((?:[01]\d|[2][0-4]):[0-5]\d)/i,b.addParser({id:"time",is:function(a){return b.regex.timeTest.test(a)},format:function(a,c){var d,e=(a||"").match(b.regex.timeMatch),f=new Date(a),g=a&&(null!==e?e[0]:"00:00 AM"),h=g?new Date("2000/01/01 "+g.replace(b.regex.dateReplace,"$1 $2")):g;return h instanceof Date&&isFinite(h)?(d=f instanceof Date&&isFinite(f)?f.getTime():0,d?parseFloat(h.getTime()+"."+f.getTime()):h.getTime()):a},type:"numeric"}),b.addParser({id:"metadata",is:function(){return!1},format:function(b,c,d){var e=c.config,f=e.parserMetadataName?e.parserMetadataName:"sortValue";return a(d).metadata()[f]},type:"numeric"}),b.addWidget({id:"zebra",priority:90,format:function(b,c,d){var e,f,g,h,i,j,k,l=new RegExp(c.cssChildRow,"i"),m=c.$tbodies.add(a(c.namespace+"_extra_table").children("tbody:not(."+c.cssInfoBlock+")"));for(i=0;i<m.length;i++)for(g=0,e=m.eq(i).children("tr:visible").not(c.selectorRemove),k=e.length,j=0;k>j;j++)f=e.eq(j),l.test(f[0].className)||g++,h=g%2===0,f.removeClass(d.zebra[h?1:0]).addClass(d.zebra[h?0:1])},remove:function(a,c,d,e){if(!e){var f,g,h=c.$tbodies,i=(d.zebra||["even","odd"]).join(" ");for(f=0;f<h.length;f++)g=b.processTbody(a,h.eq(f),!0),g.children().removeClass(i),b.processTbody(a,g,!1)}}})}(jQuery),a.tablesorter});
/*! tablesorter (FORK) - updated 01-21-2016 (v2.25.3)*/
/* Includes widgets ( storage,uitheme,columns,filter,stickyHeaders,resizable,saveSort ) */
(function(factory) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = factory(require('jquery'));
	} else {
		factory(jQuery);
	}
}(function($) {

/*! Widget: storage - updated 3/26/2015 (v2.21.3) */
/*global JSON:false */
;(function ($, window, document) {
	'use strict';

	var ts = $.tablesorter || {};
	// *** Store data in local storage, with a cookie fallback ***
	/* IE7 needs JSON library for JSON.stringify - (http://caniuse.com/#search=json)
	   if you need it, then include https://github.com/douglascrockford/JSON-js

	   $.parseJSON is not available is jQuery versions older than 1.4.1, using older
	   versions will only allow storing information for one page at a time

	   // *** Save data (JSON format only) ***
	   // val must be valid JSON... use http://jsonlint.com/ to ensure it is valid
	   var val = { "mywidget" : "data1" }; // valid JSON uses double quotes
	   // $.tablesorter.storage(table, key, val);
	   $.tablesorter.storage(table, 'tablesorter-mywidget', val);

	   // *** Get data: $.tablesorter.storage(table, key); ***
	   v = $.tablesorter.storage(table, 'tablesorter-mywidget');
	   // val may be empty, so also check for your data
	   val = (v && v.hasOwnProperty('mywidget')) ? v.mywidget : '';
	   alert(val); // 'data1' if saved, or '' if not
	*/
	ts.storage = function(table, key, value, options) {
		table = $(table)[0];
		var cookieIndex, cookies, date,
			hasStorage = false,
			values = {},
			c = table.config,
			wo = c && c.widgetOptions,
			storageType = ( options && options.useSessionStorage ) || ( wo && wo.storage_useSessionStorage ) ?
				'sessionStorage' : 'localStorage',
			$table = $(table),
			// id from (1) options ID, (2) table 'data-table-group' attribute, (3) widgetOptions.storage_tableId,
			// (4) table ID, then (5) table index
			id = options && options.id ||
				$table.attr( options && options.group || wo && wo.storage_group || 'data-table-group') ||
				wo && wo.storage_tableId || table.id || $('.tablesorter').index( $table ),
			// url from (1) options url, (2) table 'data-table-page' attribute, (3) widgetOptions.storage_fixedUrl,
			// (4) table.config.fixedUrl (deprecated), then (5) window location path
			url = options && options.url ||
				$table.attr(options && options.page || wo && wo.storage_page || 'data-table-page') ||
				wo && wo.storage_fixedUrl || c && c.fixedUrl || window.location.pathname;
		// https://gist.github.com/paulirish/5558557
		if (storageType in window) {
			try {
				window[storageType].setItem('_tmptest', 'temp');
				hasStorage = true;
				window[storageType].removeItem('_tmptest');
			} catch (error) {
				if (c && c.debug) {
					console.warn( storageType + ' is not supported in this browser' );
				}
			}
		}
		// *** get value ***
		if ($.parseJSON) {
			if (hasStorage) {
				values = $.parseJSON( window[storageType][key] || 'null' ) || {};
			} else {
				// old browser, using cookies
				cookies = document.cookie.split(/[;\s|=]/);
				// add one to get from the key to the value
				cookieIndex = $.inArray(key, cookies) + 1;
				values = (cookieIndex !== 0) ? $.parseJSON(cookies[cookieIndex] || 'null') || {} : {};
			}
		}
		// allow value to be an empty string too
		if ((value || value === '') && window.JSON && JSON.hasOwnProperty('stringify')) {
			// add unique identifiers = url pathname > table ID/index on page > data
			if (!values[url]) {
				values[url] = {};
			}
			values[url][id] = value;
			// *** set value ***
			if (hasStorage) {
				window[storageType][key] = JSON.stringify(values);
			} else {
				date = new Date();
				date.setTime(date.getTime() + (31536e+6)); // 365 days
				document.cookie = key + '=' + (JSON.stringify(values)).replace(/\"/g, '\"') + '; expires=' + date.toGMTString() + '; path=/';
			}
		} else {
			return values && values[url] ? values[url][id] : '';
		}
	};

})(jQuery, window, document);

/*! Widget: uitheme - updated 3/26/2015 (v2.21.3) */
;(function ($) {
	'use strict';
	var ts = $.tablesorter || {};

	ts.themes = {
		'bootstrap' : {
			table        : 'table table-bordered table-striped',
			caption      : 'caption',
			// header class names
			header       : 'bootstrap-header', // give the header a gradient background (theme.bootstrap_2.css)
			sortNone     : '',
			sortAsc      : '',
			sortDesc     : '',
			active       : '', // applied when column is sorted
			hover        : '', // custom css required - a defined bootstrap style may not override other classes
			// icon class names
			icons        : '', // add 'icon-white' to make them white; this icon class is added to the <i> in the header
			iconSortNone : 'bootstrap-icon-unsorted', // class name added to icon when column is not sorted
			iconSortAsc  : 'icon-chevron-up glyphicon glyphicon-chevron-up', // class name added to icon when column has ascending sort
			iconSortDesc : 'icon-chevron-down glyphicon glyphicon-chevron-down', // class name added to icon when column has descending sort
			filterRow    : '', // filter row class
			footerRow    : '',
			footerCells  : '',
			even         : '', // even row zebra striping
			odd          : ''  // odd row zebra striping
		},
		'jui' : {
			table        : 'ui-widget ui-widget-content ui-corner-all', // table classes
			caption      : 'ui-widget-content',
			// header class names
			header       : 'ui-widget-header ui-corner-all ui-state-default', // header classes
			sortNone     : '',
			sortAsc      : '',
			sortDesc     : '',
			active       : 'ui-state-active', // applied when column is sorted
			hover        : 'ui-state-hover',  // hover class
			// icon class names
			icons        : 'ui-icon', // icon class added to the <i> in the header
			iconSortNone : 'ui-icon-carat-2-n-s', // class name added to icon when column is not sorted
			iconSortAsc  : 'ui-icon-carat-1-n', // class name added to icon when column has ascending sort
			iconSortDesc : 'ui-icon-carat-1-s', // class name added to icon when column has descending sort
			filterRow    : '',
			footerRow    : '',
			footerCells  : '',
			even         : 'ui-widget-content', // even row zebra striping
			odd          : 'ui-state-default'   // odd row zebra striping
		}
	};

	$.extend(ts.css, {
		wrapper : 'tablesorter-wrapper' // ui theme & resizable
	});

	ts.addWidget({
		id: 'uitheme',
		priority: 10,
		format: function(table, c, wo) {
			var i, hdr, icon, time, $header, $icon, $tfoot, $h, oldtheme, oldremove, oldIconRmv, hasOldTheme,
				themesAll = ts.themes,
				$table = c.$table.add( $( c.namespace + '_extra_table' ) ),
				$headers = c.$headers.add( $( c.namespace + '_extra_headers' ) ),
				theme = c.theme || 'jui',
				themes = themesAll[theme] || {},
				remove = $.trim( [ themes.sortNone, themes.sortDesc, themes.sortAsc, themes.active ].join( ' ' ) ),
				iconRmv = $.trim( [ themes.iconSortNone, themes.iconSortDesc, themes.iconSortAsc ].join( ' ' ) );
			if (c.debug) { time = new Date(); }
			// initialization code - run once
			if (!$table.hasClass('tablesorter-' + theme) || c.theme !== c.appliedTheme || !wo.uitheme_applied) {
				wo.uitheme_applied = true;
				oldtheme = themesAll[c.appliedTheme] || {};
				hasOldTheme = !$.isEmptyObject(oldtheme);
				oldremove =  hasOldTheme ? [ oldtheme.sortNone, oldtheme.sortDesc, oldtheme.sortAsc, oldtheme.active ].join( ' ' ) : '';
				oldIconRmv = hasOldTheme ? [ oldtheme.iconSortNone, oldtheme.iconSortDesc, oldtheme.iconSortAsc ].join( ' ' ) : '';
				if (hasOldTheme) {
					wo.zebra[0] = $.trim( ' ' + wo.zebra[0].replace(' ' + oldtheme.even, '') );
					wo.zebra[1] = $.trim( ' ' + wo.zebra[1].replace(' ' + oldtheme.odd, '') );
					c.$tbodies.children().removeClass( [ oldtheme.even, oldtheme.odd ].join(' ') );
				}
				// update zebra stripes
				if (themes.even) { wo.zebra[0] += ' ' + themes.even; }
				if (themes.odd) { wo.zebra[1] += ' ' + themes.odd; }
				// add caption style
				$table.children('caption')
					.removeClass(oldtheme.caption || '')
					.addClass(themes.caption);
				// add table/footer class names
				$tfoot = $table
					// remove other selected themes
					.removeClass( (c.appliedTheme ? 'tablesorter-' + (c.appliedTheme || '') : '') + ' ' + (oldtheme.table || '') )
					.addClass('tablesorter-' + theme + ' ' + (themes.table || '')) // add theme widget class name
					.children('tfoot');
				c.appliedTheme = c.theme;

				if ($tfoot.length) {
					$tfoot
						// if oldtheme.footerRow or oldtheme.footerCells are undefined, all class names are removed
						.children('tr').removeClass(oldtheme.footerRow || '').addClass(themes.footerRow)
						.children('th, td').removeClass(oldtheme.footerCells || '').addClass(themes.footerCells);
				}
				// update header classes
				$headers
					.removeClass( (hasOldTheme ? [ oldtheme.header, oldtheme.hover, oldremove ].join(' ') : '') || '' )
					.addClass(themes.header)
					.not('.sorter-false')
					.unbind('mouseenter.tsuitheme mouseleave.tsuitheme')
					.bind('mouseenter.tsuitheme mouseleave.tsuitheme', function(event) {
						// toggleClass with switch added in jQuery 1.3
						$(this)[ event.type === 'mouseenter' ? 'addClass' : 'removeClass' ](themes.hover || '');
					});

				$headers.each(function(){
					var $this = $(this);
					if (!$this.find('.' + ts.css.wrapper).length) {
						// Firefox needs this inner div to position the icon & resizer correctly
						$this.wrapInner('<div class="' + ts.css.wrapper + '" style="position:relative;height:100%;width:100%"></div>');
					}
				});
				if (c.cssIcon) {
					// if c.cssIcon is '', then no <i> is added to the header
					$headers
						.find('.' + ts.css.icon)
						.removeClass(hasOldTheme ? [ oldtheme.icons, oldIconRmv ].join(' ') : '')
						.addClass(themes.icons || '');
				}
				if ($table.hasClass('hasFilters')) {
					$table.children('thead').children('.' + ts.css.filterRow)
						.removeClass(hasOldTheme ? oldtheme.filterRow || '' : '')
						.addClass(themes.filterRow || '');
				}
			}
			for (i = 0; i < c.columns; i++) {
				$header = c.$headers
					.add($(c.namespace + '_extra_headers'))
					.not('.sorter-false')
					.filter('[data-column="' + i + '"]');
				$icon = (ts.css.icon) ? $header.find('.' + ts.css.icon) : $();
				$h = $headers.not('.sorter-false').filter('[data-column="' + i + '"]:last');
				if ($h.length) {
					$header.removeClass(remove);
					$icon.removeClass(iconRmv);
					if ($h[0].sortDisabled) {
						// no sort arrows for disabled columns!
						$icon.removeClass(themes.icons || '');
					} else {
						hdr = themes.sortNone;
						icon = themes.iconSortNone;
						if ($h.hasClass(ts.css.sortAsc)) {
							hdr = [ themes.sortAsc, themes.active ].join(' ');
							icon = themes.iconSortAsc;
						} else if ($h.hasClass(ts.css.sortDesc)) {
							hdr = [ themes.sortDesc, themes.active ].join(' ');
							icon = themes.iconSortDesc;
						}
						$header.addClass(hdr);
						$icon.addClass(icon || '');
					}
				}
			}
			if (c.debug) {
				console.log('Applying ' + theme + ' theme' + ts.benchmark(time));
			}
		},
		remove: function(table, c, wo, refreshing) {
			if (!wo.uitheme_applied) { return; }
			var $table = c.$table,
				theme = c.appliedTheme || 'jui',
				themes = ts.themes[ theme ] || ts.themes.jui,
				$headers = $table.children('thead').children(),
				remove = themes.sortNone + ' ' + themes.sortDesc + ' ' + themes.sortAsc,
				iconRmv = themes.iconSortNone + ' ' + themes.iconSortDesc + ' ' + themes.iconSortAsc;
			$table.removeClass('tablesorter-' + theme + ' ' + themes.table);
			wo.uitheme_applied = false;
			if (refreshing) { return; }
			$table.find(ts.css.header).removeClass(themes.header);
			$headers
				.unbind('mouseenter.tsuitheme mouseleave.tsuitheme') // remove hover
				.removeClass(themes.hover + ' ' + remove + ' ' + themes.active)
				.filter('.' + ts.css.filterRow)
				.removeClass(themes.filterRow);
			$headers.find('.' + ts.css.icon).removeClass(themes.icons + ' ' + iconRmv);
		}
	});

})(jQuery);

/*! Widget: columns */
;(function ($) {
	'use strict';
	var ts = $.tablesorter || {};

	ts.addWidget({
		id: 'columns',
		priority: 30,
		options : {
			columns : [ 'primary', 'secondary', 'tertiary' ]
		},
		format: function(table, c, wo) {
			var $tbody, tbodyIndex, $rows, rows, $row, $cells, remove, indx,
			$table = c.$table,
			$tbodies = c.$tbodies,
			sortList = c.sortList,
			len = sortList.length,
			// removed c.widgetColumns support
			css = wo && wo.columns || [ 'primary', 'secondary', 'tertiary' ],
			last = css.length - 1;
			remove = css.join(' ');
			// check if there is a sort (on initialization there may not be one)
			for (tbodyIndex = 0; tbodyIndex < $tbodies.length; tbodyIndex++ ) {
				$tbody = ts.processTbody(table, $tbodies.eq(tbodyIndex), true); // detach tbody
				$rows = $tbody.children('tr');
				// loop through the visible rows
				$rows.each(function() {
					$row = $(this);
					if (this.style.display !== 'none') {
						// remove all columns class names
						$cells = $row.children().removeClass(remove);
						// add appropriate column class names
						if (sortList && sortList[0]) {
							// primary sort column class
							$cells.eq(sortList[0][0]).addClass(css[0]);
							if (len > 1) {
								for (indx = 1; indx < len; indx++) {
									// secondary, tertiary, etc sort column classes
									$cells.eq(sortList[indx][0]).addClass( css[indx] || css[last] );
								}
							}
						}
					}
				});
				ts.processTbody(table, $tbody, false);
			}
			// add classes to thead and tfoot
			rows = wo.columns_thead !== false ? [ 'thead tr' ] : [];
			if (wo.columns_tfoot !== false) {
				rows.push('tfoot tr');
			}
			if (rows.length) {
				$rows = $table.find( rows.join(',') ).children().removeClass(remove);
				if (len) {
					for (indx = 0; indx < len; indx++) {
						// add primary. secondary, tertiary, etc sort column classes
						$rows.filter('[data-column="' + sortList[indx][0] + '"]').addClass(css[indx] || css[last]);
					}
				}
			}
		},
		remove: function(table, c, wo) {
			var tbodyIndex, $tbody,
				$tbodies = c.$tbodies,
				remove = (wo.columns || [ 'primary', 'secondary', 'tertiary' ]).join(' ');
			c.$headers.removeClass(remove);
			c.$table.children('tfoot').children('tr').children('th, td').removeClass(remove);
			for (tbodyIndex = 0; tbodyIndex < $tbodies.length; tbodyIndex++ ) {
				$tbody = ts.processTbody(table, $tbodies.eq(tbodyIndex), true); // remove tbody
				$tbody.children('tr').each(function() {
					$(this).children().removeClass(remove);
				});
				ts.processTbody(table, $tbody, false); // restore tbody
			}
		}
	});

})(jQuery);

/*! Widget: filter - updated 1/21/2016 (v2.25.3) *//*
 * Requires tablesorter v2.8+ and jQuery 1.7+
 * by Rob Garrison
 */
;( function ( $ ) {
	'use strict';
	var tsf, tsfRegex,
		ts = $.tablesorter || {},
		tscss = ts.css,
		tskeyCodes = ts.keyCodes;

	$.extend( tscss, {
		filterRow      : 'tablesorter-filter-row',
		filter         : 'tablesorter-filter',
		filterDisabled : 'disabled',
		filterRowHide  : 'hideme'
	});

	$.extend( tskeyCodes, {
		backSpace : 8,
		escape : 27,
		space : 32,
		left : 37,
		down : 40
	});

	ts.addWidget({
		id: 'filter',
		priority: 50,
		options : {
			filter_childRows     : false, // if true, filter includes child row content in the search
			filter_childByColumn : false, // ( filter_childRows must be true ) if true = search child rows by column; false = search all child row text grouped
			filter_childWithSibs : true,  // if true, include matching child row siblings
			filter_columnFilters : true,  // if true, a filter will be added to the top of each table column
			filter_columnAnyMatch: true,  // if true, allows using '#:{query}' in AnyMatch searches ( column:query )
			filter_cellFilter    : '',    // css class name added to the filter cell ( string or array )
			filter_cssFilter     : '',    // css class name added to the filter row & each input in the row ( tablesorter-filter is ALWAYS added )
			filter_defaultFilter : {},    // add a default column filter type '~{query}' to make fuzzy searches default; '{q1} AND {q2}' to make all searches use a logical AND.
			filter_excludeFilter : {},    // filters to exclude, per column
			filter_external      : '',    // jQuery selector string ( or jQuery object ) of external filters
			filter_filteredRow   : 'filtered', // class added to filtered rows; needed by pager plugin
			filter_formatter     : null,  // add custom filter elements to the filter row
			filter_functions     : null,  // add custom filter functions using this option
			filter_hideEmpty     : true,  // hide filter row when table is empty
			filter_hideFilters   : false, // collapse filter row when mouse leaves the area
			filter_ignoreCase    : true,  // if true, make all searches case-insensitive
			filter_liveSearch    : true,  // if true, search column content while the user types ( with a delay )
			filter_onlyAvail     : 'filter-onlyAvail', // a header with a select dropdown & this class name will only show available ( visible ) options within the drop down
			filter_placeholder   : { search : '', select : '' }, // default placeholder text ( overridden by any header 'data-placeholder' setting )
			filter_reset         : null,  // jQuery selector string of an element used to reset the filters
			filter_resetOnEsc    : true,  // Reset filter input when the user presses escape - normalized across browsers
			filter_saveFilters   : false, // Use the $.tablesorter.storage utility to save the most recent filters
			filter_searchDelay   : 300,   // typing delay in milliseconds before starting a search
			filter_searchFiltered: true,  // allow searching through already filtered rows in special circumstances; will speed up searching in large tables if true
			filter_selectSource  : null,  // include a function to return an array of values to be added to the column filter select
			filter_startsWith    : false, // if true, filter start from the beginning of the cell contents
			filter_useParsedData : false, // filter all data using parsed content
			filter_serversideFiltering : false, // if true, must perform server-side filtering b/c client-side filtering is disabled, but the ui and events will still be used.
			filter_defaultAttrib : 'data-value', // data attribute in the header cell that contains the default filter value
			filter_selectSourceSeparator : '|' // filter_selectSource array text left of the separator is added to the option value, right into the option text
		},
		format: function( table, c, wo ) {
			if ( !c.$table.hasClass( 'hasFilters' ) ) {
				tsf.init( table, c, wo );
			}
		},
		remove: function( table, c, wo, refreshing ) {
			var tbodyIndex, $tbody,
				$table = c.$table,
				$tbodies = c.$tbodies,
				events = 'addRows updateCell update updateRows updateComplete appendCache filterReset filterEnd search '
					.split( ' ' ).join( c.namespace + 'filter ' );
			$table
				.removeClass( 'hasFilters' )
				// add filter namespace to all BUT search
				.unbind( events.replace( ts.regex.spaces, ' ' ) )
				// remove the filter row even if refreshing, because the column might have been moved
				.find( '.' + tscss.filterRow ).remove();
			if ( refreshing ) { return; }
			for ( tbodyIndex = 0; tbodyIndex < $tbodies.length; tbodyIndex++ ) {
				$tbody = ts.processTbody( table, $tbodies.eq( tbodyIndex ), true ); // remove tbody
				$tbody.children().removeClass( wo.filter_filteredRow ).show();
				ts.processTbody( table, $tbody, false ); // restore tbody
			}
			if ( wo.filter_reset ) {
				$( document ).undelegate( wo.filter_reset, 'click' + c.namespace + 'filter' );
			}
		}
	});

	tsf = ts.filter = {

		// regex used in filter 'check' functions - not for general use and not documented
		regex: {
			regex     : /^\/((?:\\\/|[^\/])+)\/([mig]{0,3})?$/, // regex to test for regex
			child     : /tablesorter-childRow/, // child row class name; this gets updated in the script
			filtered  : /filtered/, // filtered (hidden) row class name; updated in the script
			type      : /undefined|number/, // check type
			exact     : /(^[\"\'=]+)|([\"\'=]+$)/g, // exact match (allow '==')
			operators : /[<>=]/g, // replace operators
			query     : '(q|query)', // replace filter queries
			wild01    : /\?/g, // wild card match 0 or 1
			wild0More : /\*/g, // wild care match 0 or more
			quote     : /\"/g,
			isNeg1    : /(>=?\s*-\d)/,
			isNeg2    : /(<=?\s*\d)/
		},
		// function( c, data ) { }
		// c = table.config
		// data.$row = jQuery object of the row currently being processed
		// data.$cells = jQuery object of all cells within the current row
		// data.filters = array of filters for all columns ( some may be undefined )
		// data.filter = filter for the current column
		// data.iFilter = same as data.filter, except lowercase ( if wo.filter_ignoreCase is true )
		// data.exact = table cell text ( or parsed data if column parser enabled; may be a number & not a string )
		// data.iExact = same as data.exact, except lowercase ( if wo.filter_ignoreCase is true; may be a number & not a string )
		// data.cache = table cell text from cache, so it has been parsed ( & in all lower case if c.ignoreCase is true )
		// data.cacheArray = An array of parsed content from each table cell in the row being processed
		// data.index = column index; table = table element ( DOM )
		// data.parsed = array ( by column ) of boolean values ( from filter_useParsedData or 'filter-parsed' class )
		types: {
			or : function( c, data, vars ) {
				// look for "|", but not if it is inside of a regular expression
				if ( ( tsfRegex.orTest.test( data.iFilter ) || tsfRegex.orSplit.test( data.filter ) ) &&
					// this test for regex has potential to slow down the overall search
					!tsfRegex.regex.test( data.filter ) ) {
					var indx, filterMatched, query, regex,
						// duplicate data but split filter
						data2 = $.extend( {}, data ),
						filter = data.filter.split( tsfRegex.orSplit ),
						iFilter = data.iFilter.split( tsfRegex.orSplit ),
						len = filter.length;
					for ( indx = 0; indx < len; indx++ ) {
						data2.nestedFilters = true;
						data2.filter = '' + ( tsf.parseFilter( c, filter[ indx ], data ) || '' );
						data2.iFilter = '' + ( tsf.parseFilter( c, iFilter[ indx ], data ) || '' );
						query = '(' + ( tsf.parseFilter( c, data2.filter, data ) || '' ) + ')';
						try {
							// use try/catch, because query may not be a valid regex if "|" is contained within a partial regex search,
							// e.g "/(Alex|Aar" -> Uncaught SyntaxError: Invalid regular expression: /(/(Alex)/: Unterminated group
							regex = new RegExp( data.isMatch ? query : '^' + query + '$', c.widgetOptions.filter_ignoreCase ? 'i' : '' );
							// filterMatched = data2.filter === '' && indx > 0 ? true
							// look for an exact match with the 'or' unless the 'filter-match' class is found
							filterMatched = regex.test( data2.exact ) || tsf.processTypes( c, data2, vars );
							if ( filterMatched ) {
								return filterMatched;
							}
						} catch ( error ) {
							return null;
						}
					}
					// may be null from processing types
					return filterMatched || false;
				}
				return null;
			},
			// Look for an AND or && operator ( logical and )
			and : function( c, data, vars ) {
				if ( tsfRegex.andTest.test( data.filter ) ) {
					var indx, filterMatched, result, query, regex,
						// duplicate data but split filter
						data2 = $.extend( {}, data ),
						filter = data.filter.split( tsfRegex.andSplit ),
						iFilter = data.iFilter.split( tsfRegex.andSplit ),
						len = filter.length;
					for ( indx = 0; indx < len; indx++ ) {
						data2.nestedFilters = true;
						data2.filter = '' + ( tsf.parseFilter( c, filter[ indx ], data ) || '' );
						data2.iFilter = '' + ( tsf.parseFilter( c, iFilter[ indx ], data ) || '' );
						query = ( '(' + ( tsf.parseFilter( c, data2.filter, data ) || '' ) + ')' )
							// replace wild cards since /(a*)/i will match anything
							.replace( tsfRegex.wild01, '\\S{1}' ).replace( tsfRegex.wild0More, '\\S*' );
						try {
							// use try/catch just in case RegExp is invalid
							regex = new RegExp( data.isMatch ? query : '^' + query + '$', c.widgetOptions.filter_ignoreCase ? 'i' : '' );
							// look for an exact match with the 'and' unless the 'filter-match' class is found
							result = ( regex.test( data2.exact ) || tsf.processTypes( c, data2, vars ) );
							if ( indx === 0 ) {
								filterMatched = result;
							} else {
								filterMatched = filterMatched && result;
							}
						} catch ( error ) {
							return null;
						}
					}
					// may be null from processing types
					return filterMatched || false;
				}
				return null;
			},
			// Look for regex
			regex: function( c, data ) {
				if ( tsfRegex.regex.test( data.filter ) ) {
					var matches,
						// cache regex per column for optimal speed
						regex = data.filter_regexCache[ data.index ] || tsfRegex.regex.exec( data.filter ),
						isRegex = regex instanceof RegExp;
					try {
						if ( !isRegex ) {
							// force case insensitive search if ignoreCase option set?
							// if ( c.ignoreCase && !regex[2] ) { regex[2] = 'i'; }
							data.filter_regexCache[ data.index ] = regex = new RegExp( regex[1], regex[2] );
						}
						matches = regex.test( data.exact );
					} catch ( error ) {
						matches = false;
					}
					return matches;
				}
				return null;
			},
			// Look for operators >, >=, < or <=
			operators: function( c, data ) {
				// ignore empty strings... because '' < 10 is true
				if ( tsfRegex.operTest.test( data.iFilter ) && data.iExact !== '' ) {
					var cachedValue, result, txt,
						table = c.table,
						parsed = data.parsed[ data.index ],
						query = ts.formatFloat( data.iFilter.replace( tsfRegex.operators, '' ), table ),
						parser = c.parsers[ data.index ] || {},
						savedSearch = query;
					// parse filter value in case we're comparing numbers ( dates )
					if ( parsed || parser.type === 'numeric' ) {
						txt = $.trim( '' + data.iFilter.replace( tsfRegex.operators, '' ) );
						result = tsf.parseFilter( c, txt, data, true );
						query = ( typeof result === 'number' && result !== '' && !isNaN( result ) ) ? result : query;
					}
					// iExact may be numeric - see issue #149;
					// check if cached is defined, because sometimes j goes out of range? ( numeric columns )
					if ( ( parsed || parser.type === 'numeric' ) && !isNaN( query ) &&
						typeof data.cache !== 'undefined' ) {
						cachedValue = data.cache;
					} else {
						txt = isNaN( data.iExact ) ? data.iExact.replace( ts.regex.nondigit, '' ) : data.iExact;
						cachedValue = ts.formatFloat( txt, table );
					}
					if ( tsfRegex.gtTest.test( data.iFilter ) ) {
						result = tsfRegex.gteTest.test( data.iFilter ) ? cachedValue >= query : cachedValue > query;
					} else if ( tsfRegex.ltTest.test( data.iFilter ) ) {
						result = tsfRegex.lteTest.test( data.iFilter ) ? cachedValue <= query : cachedValue < query;
					}
					// keep showing all rows if nothing follows the operator
					if ( !result && savedSearch === '' ) {
						result = true;
					}
					return result;
				}
				return null;
			},
			// Look for a not match
			notMatch: function( c, data ) {
				if ( tsfRegex.notTest.test( data.iFilter ) ) {
					var indx,
						txt = data.iFilter.replace( '!', '' ),
						filter = tsf.parseFilter( c, txt, data ) || '';
					if ( tsfRegex.exact.test( filter ) ) {
						// look for exact not matches - see #628
						filter = filter.replace( tsfRegex.exact, '' );
						return filter === '' ? true : $.trim( filter ) !== data.iExact;
					} else {
						indx = data.iExact.search( $.trim( filter ) );
						return filter === '' ? true : !( c.widgetOptions.filter_startsWith ? indx === 0 : indx >= 0 );
					}
				}
				return null;
			},
			// Look for quotes or equals to get an exact match; ignore type since iExact could be numeric
			exact: function( c, data ) {
				/*jshint eqeqeq:false */
				if ( tsfRegex.exact.test( data.iFilter ) ) {
					var txt = data.iFilter.replace( tsfRegex.exact, '' ),
						filter = tsf.parseFilter( c, txt, data ) || '';
					return data.anyMatch ? $.inArray( filter, data.rowArray ) >= 0 : filter == data.iExact;
				}
				return null;
			},
			// Look for a range ( using ' to ' or ' - ' ) - see issue #166; thanks matzhu!
			range : function( c, data ) {
				if ( tsfRegex.toTest.test( data.iFilter ) ) {
					var result, tmp, range1, range2,
						table = c.table,
						index = data.index,
						parsed = data.parsed[index],
						// make sure the dash is for a range and not indicating a negative number
						query = data.iFilter.split( tsfRegex.toSplit );

					tmp = query[0].replace( ts.regex.nondigit, '' ) || '';
					range1 = ts.formatFloat( tsf.parseFilter( c, tmp, data ), table );
					tmp = query[1].replace( ts.regex.nondigit, '' ) || '';
					range2 = ts.formatFloat( tsf.parseFilter( c, tmp, data ), table );
					// parse filter value in case we're comparing numbers ( dates )
					if ( parsed || c.parsers[ index ].type === 'numeric' ) {
						result = c.parsers[ index ].format( '' + query[0], table, c.$headers.eq( index ), index );
						range1 = ( result !== '' && !isNaN( result ) ) ? result : range1;
						result = c.parsers[ index ].format( '' + query[1], table, c.$headers.eq( index ), index );
						range2 = ( result !== '' && !isNaN( result ) ) ? result : range2;
					}
					if ( ( parsed || c.parsers[ index ].type === 'numeric' ) && !isNaN( range1 ) && !isNaN( range2 ) ) {
						result = data.cache;
					} else {
						tmp = isNaN( data.iExact ) ? data.iExact.replace( ts.regex.nondigit, '' ) : data.iExact;
						result = ts.formatFloat( tmp, table );
					}
					if ( range1 > range2 ) {
						tmp = range1; range1 = range2; range2 = tmp; // swap
					}
					return ( result >= range1 && result <= range2 ) || ( range1 === '' || range2 === '' );
				}
				return null;
			},
			// Look for wild card: ? = single, * = multiple, or | = logical OR
			wild : function( c, data ) {
				if ( tsfRegex.wildOrTest.test( data.iFilter ) ) {
					var query = '' + ( tsf.parseFilter( c, data.iFilter, data ) || '' );
					// look for an exact match with the 'or' unless the 'filter-match' class is found
					if ( !tsfRegex.wildTest.test( query ) && data.nestedFilters ) {
						query = data.isMatch ? query : '^(' + query + ')$';
					}
					// parsing the filter may not work properly when using wildcards =/
					try {
						return new RegExp(
							query.replace( tsfRegex.wild01, '\\S{1}' ).replace( tsfRegex.wild0More, '\\S*' ),
							c.widgetOptions.filter_ignoreCase ? 'i' : ''
						)
						.test( data.exact );
					} catch ( error ) {
						return null;
					}
				}
				return null;
			},
			// fuzzy text search; modified from https://github.com/mattyork/fuzzy ( MIT license )
			fuzzy: function( c, data ) {
				if ( tsfRegex.fuzzyTest.test( data.iFilter ) ) {
					var indx,
						patternIndx = 0,
						len = data.iExact.length,
						txt = data.iFilter.slice( 1 ),
						pattern = tsf.parseFilter( c, txt, data ) || '';
					for ( indx = 0; indx < len; indx++ ) {
						if ( data.iExact[ indx ] === pattern[ patternIndx ] ) {
							patternIndx += 1;
						}
					}
					return patternIndx === pattern.length;
				}
				return null;
			}
		},
		init: function( table, c, wo ) {
			// filter language options
			ts.language = $.extend( true, {}, {
				to  : 'to',
				or  : 'or',
				and : 'and'
			}, ts.language );

			var options, string, txt, $header, column, filters, val, fxn, noSelect;
			c.$table.addClass( 'hasFilters' );
			c.lastSearch = [];

			// define timers so using clearTimeout won't cause an undefined error
			wo.filter_searchTimer = null;
			wo.filter_initTimer = null;
			wo.filter_formatterCount = 0;
			wo.filter_formatterInit = [];
			wo.filter_anyColumnSelector = '[data-column="all"],[data-column="any"]';
			wo.filter_multipleColumnSelector = '[data-column*="-"],[data-column*=","]';

			val = '\\{' + tsfRegex.query + '\\}';
			$.extend( tsfRegex, {
				child : new RegExp( c.cssChildRow ),
				filtered : new RegExp( wo.filter_filteredRow ),
				alreadyFiltered : new RegExp( '(\\s+(' + ts.language.or + '|-|' + ts.language.to + ')\\s+)', 'i' ),
				toTest : new RegExp( '\\s+(-|' + ts.language.to + ')\\s+', 'i' ),
				toSplit : new RegExp( '(?:\\s+(?:-|' + ts.language.to + ')\\s+)', 'gi' ),
				andTest : new RegExp( '\\s+(' + ts.language.and + '|&&)\\s+', 'i' ),
				andSplit : new RegExp( '(?:\\s+(?:' + ts.language.and + '|&&)\\s+)', 'gi' ),
				orTest : new RegExp( '(\\||\\s+' + ts.language.or + '\\s+)', 'i' ),
				orSplit : new RegExp( '(?:\\s+(?:' + ts.language.or + ')\\s+|\\|)', 'gi' ),
				iQuery : new RegExp( val, 'i' ),
				igQuery : new RegExp( val, 'ig' ),
				operTest : /^[<>]=?/,
				gtTest  : />/,
				gteTest : />=/,
				ltTest  : /</,
				lteTest : /<=/,
				notTest : /^\!/,
				wildOrTest : /[\?\*\|]/,
				wildTest : /\?\*/,
				fuzzyTest : /^~/,
				exactTest : /[=\"\|!]/
			});

			// don't build filter row if columnFilters is false or all columns are set to 'filter-false'
			// see issue #156
			val = c.$headers.filter( '.filter-false, .parser-false' ).length;
			if ( wo.filter_columnFilters !== false && val !== c.$headers.length ) {
				// build filter row
				tsf.buildRow( table, c, wo );
			}

			txt = 'addRows updateCell update updateRows updateComplete appendCache filterReset filterEnd search '
				.split( ' ' ).join( c.namespace + 'filter ' );
			c.$table.bind( txt, function( event, filter ) {
				val = wo.filter_hideEmpty &&
					$.isEmptyObject( c.cache ) &&
					!( c.delayInit && event.type === 'appendCache' );
				// hide filter row using the 'filtered' class name
				c.$table.find( '.' + tscss.filterRow ).toggleClass( wo.filter_filteredRow, val ); // fixes #450
				if ( !/(search|filter)/.test( event.type ) ) {
					event.stopPropagation();
					tsf.buildDefault( table, true );
				}
				if ( event.type === 'filterReset' ) {
					c.$table.find( '.' + tscss.filter ).add( wo.filter_$externalFilters ).val( '' );
					tsf.searching( table, [] );
				} else if ( event.type === 'filterEnd' ) {
					tsf.buildDefault( table, true );
				} else {
					// send false argument to force a new search; otherwise if the filter hasn't changed,
					// it will return
					filter = event.type === 'search' ? filter :
						event.type === 'updateComplete' ? c.$table.data( 'lastSearch' ) : '';
					if ( /(update|add)/.test( event.type ) && event.type !== 'updateComplete' ) {
						// force a new search since content has changed
						c.lastCombinedFilter = null;
						c.lastSearch = [];
					}
					// pass true ( skipFirst ) to prevent the tablesorter.setFilters function from skipping the first
					// input ensures all inputs are updated when a search is triggered on the table
					// $( 'table' ).trigger( 'search', [...] );
					tsf.searching( table, filter, true );
				}
				return false;
			});

			// reset button/link
			if ( wo.filter_reset ) {
				if ( wo.filter_reset instanceof $ ) {
					// reset contains a jQuery object, bind to it
					wo.filter_reset.click( function() {
						c.$table.triggerHandler( 'filterReset' );
					});
				} else if ( $( wo.filter_reset ).length ) {
					// reset is a jQuery selector, use event delegation
					$( document )
						.undelegate( wo.filter_reset, 'click' + c.namespace + 'filter' )
						.delegate( wo.filter_reset, 'click' + c.namespace + 'filter', function() {
							// trigger a reset event, so other functions ( filter_formatter ) know when to reset
							c.$table.triggerHandler( 'filterReset' );
						});
				}
			}
			if ( wo.filter_functions ) {
				for ( column = 0; column < c.columns; column++ ) {
					fxn = ts.getColumnData( table, wo.filter_functions, column );
					if ( fxn ) {
						// remove 'filter-select' from header otherwise the options added here are replaced with
						// all options
						$header = c.$headerIndexed[ column ].removeClass( 'filter-select' );
						// don't build select if 'filter-false' or 'parser-false' set
						noSelect = !( $header.hasClass( 'filter-false' ) || $header.hasClass( 'parser-false' ) );
						options = '';
						if ( fxn === true && noSelect ) {
							tsf.buildSelect( table, column );
						} else if ( typeof fxn === 'object' && noSelect ) {
							// add custom drop down list
							for ( string in fxn ) {
								if ( typeof string === 'string' ) {
									options += options === '' ?
										'<option value="">' +
											( $header.data( 'placeholder' ) ||
												$header.attr( 'data-placeholder' ) ||
												wo.filter_placeholder.select ||
												''
											) +
										'</option>' : '';
									val = string;
									txt = string;
									if ( string.indexOf( wo.filter_selectSourceSeparator ) >= 0 ) {
										val = string.split( wo.filter_selectSourceSeparator );
										txt = val[1];
										val = val[0];
									}
									options += '<option ' +
										( txt === val ? '' : 'data-function-name="' + string + '" ' ) +
										'value="' + val + '">' + txt + '</option>';
								}
							}
							c.$table
								.find( 'thead' )
								.find( 'select.' + tscss.filter + '[data-column="' + column + '"]' )
								.append( options );
							txt = wo.filter_selectSource;
							fxn = typeof txt === 'function' ? true : ts.getColumnData( table, txt, column );
							if ( fxn ) {
								// updating so the extra options are appended
								tsf.buildSelect( c.table, column, '', true, $header.hasClass( wo.filter_onlyAvail ) );
							}
						}
					}
				}
			}
			// not really updating, but if the column has both the 'filter-select' class &
			// filter_functions set to true, it would append the same options twice.
			tsf.buildDefault( table, true );

			tsf.bindSearch( table, c.$table.find( '.' + tscss.filter ), true );
			if ( wo.filter_external ) {
				tsf.bindSearch( table, wo.filter_external );
			}

			if ( wo.filter_hideFilters ) {
				tsf.hideFilters( c );
			}

			// show processing icon
			if ( c.showProcessing ) {
				txt = 'filterStart filterEnd '.split( ' ' ).join( c.namespace + 'filter ' );
				c.$table
					.unbind( txt.replace( ts.regex.spaces, ' ' ) )
					.bind( txt, function( event, columns ) {
					// only add processing to certain columns to all columns
					$header = ( columns ) ?
						c.$table
							.find( '.' + tscss.header )
							.filter( '[data-column]' )
							.filter( function() {
								return columns[ $( this ).data( 'column' ) ] !== '';
							}) : '';
					ts.isProcessing( table, event.type === 'filterStart', columns ? $header : '' );
				});
			}

			// set filtered rows count ( intially unfiltered )
			c.filteredRows = c.totalRows;

			// add default values
			txt = 'tablesorter-initialized pagerBeforeInitialized '.split( ' ' ).join( c.namespace + 'filter ' );
			c.$table
			.unbind( txt.replace( ts.regex.spaces, ' ' ) )
			.bind( txt, function() {
				// redefine 'wo' as it does not update properly inside this callback
				var wo = this.config.widgetOptions;
				filters = tsf.setDefaults( table, c, wo ) || [];
				if ( filters.length ) {
					// prevent delayInit from triggering a cache build if filters are empty
					if ( !( c.delayInit && filters.join( '' ) === '' ) ) {
						ts.setFilters( table, filters, true );
					}
				}
				c.$table.triggerHandler( 'filterFomatterUpdate' );
				// trigger init after setTimeout to prevent multiple filterStart/End/Init triggers
				setTimeout( function() {
					if ( !wo.filter_initialized ) {
						tsf.filterInitComplete( c );
					}
				}, 100 );
			});
			// if filter widget is added after pager has initialized; then set filter init flag
			if ( c.pager && c.pager.initialized && !wo.filter_initialized ) {
				c.$table.triggerHandler( 'filterFomatterUpdate' );
				setTimeout( function() {
					tsf.filterInitComplete( c );
				}, 100 );
			}
		},
		// $cell parameter, but not the config, is passed to the filter_formatters,
		// so we have to work with it instead
		formatterUpdated: function( $cell, column ) {
			// prevent error if $cell is undefined - see #1056
			var wo = $cell && $cell.closest( 'table' )[0].config.widgetOptions;
			if ( wo && !wo.filter_initialized ) {
				// add updates by column since this function
				// may be called numerous times before initialization
				wo.filter_formatterInit[ column ] = 1;
			}
		},
		filterInitComplete: function( c ) {
			var indx, len,
				wo = c.widgetOptions,
				count = 0,
				completed = function() {
					wo.filter_initialized = true;
					c.$table.triggerHandler( 'filterInit', c );
					tsf.findRows( c.table, c.$table.data( 'lastSearch' ) || [] );
				};
			if ( $.isEmptyObject( wo.filter_formatter ) ) {
				completed();
			} else {
				len = wo.filter_formatterInit.length;
				for ( indx = 0; indx < len; indx++ ) {
					if ( wo.filter_formatterInit[ indx ] === 1 ) {
						count++;
					}
				}
				clearTimeout( wo.filter_initTimer );
				if ( !wo.filter_initialized && count === wo.filter_formatterCount ) {
					// filter widget initialized
					completed();
				} else if ( !wo.filter_initialized ) {
					// fall back in case a filter_formatter doesn't call
					// $.tablesorter.filter.formatterUpdated( $cell, column ), and the count is off
					wo.filter_initTimer = setTimeout( function() {
						completed();
					}, 500 );
				}
			}
		},
		// encode or decode filters for storage; see #1026
		processFilters: function( filters, encode ) {
			var indx,
				mode = encode ? encodeURIComponent : decodeURIComponent,
				len = filters.length;
			for ( indx = 0; indx < len; indx++ ) {
				if ( filters[ indx ] ) {
					filters[ indx ] = mode( filters[ indx ] );
				}
			}
			return filters;
		},
		setDefaults: function( table, c, wo ) {
			var isArray, saved, indx, col, $filters,
				// get current ( default ) filters
				filters = ts.getFilters( table ) || [];
			if ( wo.filter_saveFilters && ts.storage ) {
				saved = ts.storage( table, 'tablesorter-filters' ) || [];
				isArray = $.isArray( saved );
				// make sure we're not just getting an empty array
				if ( !( isArray && saved.join( '' ) === '' || !isArray ) ) {
					filters = tsf.processFilters( saved );
				}
			}
			// if no filters saved, then check default settings
			if ( filters.join( '' ) === '' ) {
				// allow adding default setting to external filters
				$filters = c.$headers.add( wo.filter_$externalFilters )
					.filter( '[' + wo.filter_defaultAttrib + ']' );
				for ( indx = 0; indx <= c.columns; indx++ ) {
					// include data-column='all' external filters
					col = indx === c.columns ? 'all' : indx;
					filters[ indx ] = $filters
						.filter( '[data-column="' + col + '"]' )
						.attr( wo.filter_defaultAttrib ) || filters[indx] || '';
				}
			}
			c.$table.data( 'lastSearch', filters );
			return filters;
		},
		parseFilter: function( c, filter, data, parsed ) {
			return parsed || data.parsed[ data.index ] ?
				c.parsers[ data.index ].format( filter, c.table, [], data.index ) :
				filter;
		},
		buildRow: function( table, c, wo ) {
			var $filter, col, column, $header, makeSelect, disabled, name, ffxn, tmp,
				// c.columns defined in computeThIndexes()
				cellFilter = wo.filter_cellFilter,
				columns = c.columns,
				arry = $.isArray( cellFilter ),
				buildFilter = '<tr role="row" class="' + tscss.filterRow + ' ' + c.cssIgnoreRow + '">';
			for ( column = 0; column < columns; column++ ) {
				if ( c.$headerIndexed[ column ].length ) {
					// account for entire column set with colspan. See #1047
					tmp = c.$headerIndexed[ column ] && c.$headerIndexed[ column ][0].colSpan || 0;
					if ( tmp > 1 ) {
						buildFilter += '<td data-column="' + column + '-' + ( column + tmp - 1 ) + '" colspan="' + tmp + '"';
					} else {
						buildFilter += '<td data-column="' + column + '"';
					}
					if ( arry ) {
						buildFilter += ( cellFilter[ column ] ? ' class="' + cellFilter[ column ] + '"' : '' );
					} else {
						buildFilter += ( cellFilter !== '' ? ' class="' + cellFilter + '"' : '' );
					}
					buildFilter += '></td>';
				}
			}
			c.$filters = $( buildFilter += '</tr>' )
				.appendTo( c.$table.children( 'thead' ).eq( 0 ) )
				.children( 'td' );
			// build each filter input
			for ( column = 0; column < columns; column++ ) {
				disabled = false;
				// assuming last cell of a column is the main column
				$header = c.$headerIndexed[ column ];
				if ( $header && $header.length ) {
					// $filter = c.$filters.filter( '[data-column="' + column + '"]' );
					$filter = tsf.getColumnElm( c, c.$filters, column );
					ffxn = ts.getColumnData( table, wo.filter_functions, column );
					makeSelect = ( wo.filter_functions && ffxn && typeof ffxn !== 'function' ) ||
						$header.hasClass( 'filter-select' );
					// get data from jQuery data, metadata, headers option or header class name
					col = ts.getColumnData( table, c.headers, column );
					disabled = ts.getData( $header[0], col, 'filter' ) === 'false' ||
						ts.getData( $header[0], col, 'parser' ) === 'false';

					if ( makeSelect ) {
						buildFilter = $( '<select>' ).appendTo( $filter );
					} else {
						ffxn = ts.getColumnData( table, wo.filter_formatter, column );
						if ( ffxn ) {
							wo.filter_formatterCount++;
							buildFilter = ffxn( $filter, column );
							// no element returned, so lets go find it
							if ( buildFilter && buildFilter.length === 0 ) {
								buildFilter = $filter.children( 'input' );
							}
							// element not in DOM, so lets attach it
							if ( buildFilter && ( buildFilter.parent().length === 0 ||
								( buildFilter.parent().length && buildFilter.parent()[0] !== $filter[0] ) ) ) {
								$filter.append( buildFilter );
							}
						} else {
							buildFilter = $( '<input type="search">' ).appendTo( $filter );
						}
						if ( buildFilter ) {
							tmp = $header.data( 'placeholder' ) ||
								$header.attr( 'data-placeholder' ) ||
								wo.filter_placeholder.search || '';
							buildFilter.attr( 'placeholder', tmp );
						}
					}
					if ( buildFilter ) {
						// add filter class name
						name = ( $.isArray( wo.filter_cssFilter ) ?
							( typeof wo.filter_cssFilter[column] !== 'undefined' ? wo.filter_cssFilter[column] || '' : '' ) :
							wo.filter_cssFilter ) || '';
						// copy data-column from table cell (it will include colspan)
						buildFilter.addClass( tscss.filter + ' ' + name ).attr( 'data-column', $filter.attr( 'data-column' ) );
						if ( disabled ) {
							buildFilter.attr( 'placeholder', '' ).addClass( tscss.filterDisabled )[0].disabled = true;
						}
					}
				}
			}
		},
		bindSearch: function( table, $el, internal ) {
			table = $( table )[0];
			$el = $( $el ); // allow passing a selector string
			if ( !$el.length ) { return; }
			var tmp,
				c = table.config,
				wo = c.widgetOptions,
				namespace = c.namespace + 'filter',
				$ext = wo.filter_$externalFilters;
			if ( internal !== true ) {
				// save anyMatch element
				tmp = wo.filter_anyColumnSelector + ',' + wo.filter_multipleColumnSelector;
				wo.filter_$anyMatch = $el.filter( tmp );
				if ( $ext && $ext.length ) {
					wo.filter_$externalFilters = wo.filter_$externalFilters.add( $el );
				} else {
					wo.filter_$externalFilters = $el;
				}
				// update values ( external filters added after table initialization )
				ts.setFilters( table, c.$table.data( 'lastSearch' ) || [], internal === false );
			}
			// unbind events
			tmp = ( 'keypress keyup keydown search change input '.split( ' ' ).join( namespace + ' ' ) );
			$el
			// use data attribute instead of jQuery data since the head is cloned without including
			// the data/binding
			.attr( 'data-lastSearchTime', new Date().getTime() )
			.unbind( tmp.replace( ts.regex.spaces, ' ' ) )
			.bind( 'keydown' + namespace, function( event ) {
				if ( event.which === tskeyCodes.escape && !wo.filter_resetOnEsc ) {
					// prevent keypress event
					return false;
				}
			})
			.bind( 'keyup' + namespace, function( event ) {
				var column = parseInt( $( this ).attr( 'data-column' ), 10 );
				$( this ).attr( 'data-lastSearchTime', new Date().getTime() );
				// emulate what webkit does.... escape clears the filter
				if ( event.which === tskeyCodes.escape ) {
					// make sure to restore the last value on escape
					this.value = wo.filter_resetOnEsc ? '' : c.lastSearch[column];
				// live search
				} else if ( wo.filter_liveSearch === false ) {
					return;
					// don't return if the search value is empty ( all rows need to be revealed )
				} else if ( this.value !== '' && (
					// liveSearch can contain a min value length; ignore arrow and meta keys, but allow backspace
					( typeof wo.filter_liveSearch === 'number' && this.value.length < wo.filter_liveSearch ) ||
					// let return & backspace continue on, but ignore arrows & non-valid characters
					( event.which !== tskeyCodes.enter && event.which !== tskeyCodes.backSpace &&
						( event.which < tskeyCodes.space || ( event.which >= tskeyCodes.left && event.which <= tskeyCodes.down ) ) ) ) ) {
					return;
				}
				// change event = no delay; last true flag tells getFilters to skip newest timed input
				tsf.searching( table, true, true );
			})
			// include change for select - fixes #473
			.bind( 'search change keypress input '.split( ' ' ).join( namespace + ' ' ), function( event ) {
				// don't get cached data, in case data-column changes dynamically
				var column = parseInt( $( this ).attr( 'data-column' ), 10 );
				// don't allow 'change' event to process if the input value is the same - fixes #685
				if ( wo.filter_initialized && ( event.which === tskeyCodes.enter || event.type === 'search' ||
					// only "input" event fires in MS Edge when clicking the "x" to clear the search
					( event.type === 'change' || event.type === 'input' ) && this.value !== c.lastSearch[column] ) ) {
					event.preventDefault();
					// init search with no delay
					$( this ).attr( 'data-lastSearchTime', new Date().getTime() );
					tsf.searching( table, event.type !== 'keypress', true );
				}
			});
		},
		searching: function( table, filter, skipFirst ) {
			var wo = table.config.widgetOptions;
			clearTimeout( wo.filter_searchTimer );
			if ( typeof filter === 'undefined' || filter === true ) {
				// delay filtering
				wo.filter_searchTimer = setTimeout( function() {
					tsf.checkFilters( table, filter, skipFirst );
				}, wo.filter_liveSearch ? wo.filter_searchDelay : 10 );
			} else {
				// skip delay
				tsf.checkFilters( table, filter, skipFirst );
			}
		},
		checkFilters: function( table, filter, skipFirst ) {
			var c = table.config,
				wo = c.widgetOptions,
				filterArray = $.isArray( filter ),
				filters = ( filterArray ) ? filter : ts.getFilters( table, true ),
				combinedFilters = ( filters || [] ).join( '' ); // combined filter values
			// prevent errors if delay init is set
			if ( $.isEmptyObject( c.cache ) ) {
				// update cache if delayInit set & pager has initialized ( after user initiates a search )
				if ( c.delayInit && c.pager && c.pager.initialized ) {
					ts.updateCache( c, function() {
						tsf.checkFilters( table, false, skipFirst );
					});
				}
				return;
			}
			// add filter array back into inputs
			if ( filterArray ) {
				ts.setFilters( table, filters, false, skipFirst !== true );
				if ( !wo.filter_initialized ) { c.lastCombinedFilter = ''; }
			}
			if ( wo.filter_hideFilters ) {
				// show/hide filter row as needed
				c.$table
					.find( '.' + tscss.filterRow )
					.triggerHandler( combinedFilters === '' ? 'mouseleave' : 'mouseenter' );
			}
			// return if the last search is the same; but filter === false when updating the search
			// see example-widget-filter.html filter toggle buttons
			if ( c.lastCombinedFilter === combinedFilters && filter !== false ) {
				return;
			} else if ( filter === false ) {
				// force filter refresh
				c.lastCombinedFilter = null;
				c.lastSearch = [];
			}
			// define filter inside it is false
			filters = filters || [];
			// convert filters to strings - see #1070
			filters = Array.prototype.map ?
				filters.map( String ) :
				// for IE8 & older browsers - maybe not the best method
				filters.join( '\ufffd' ).split( '\ufffd' );

			if ( wo.filter_initialized ) {
				c.$table.triggerHandler( 'filterStart', [ filters ] );
			}
			if ( c.showProcessing ) {
				// give it time for the processing icon to kick in
				setTimeout( function() {
					tsf.findRows( table, filters, combinedFilters );
					return false;
				}, 30 );
			} else {
				tsf.findRows( table, filters, combinedFilters );
				return false;
			}
		},
		hideFilters: function( c, $table ) {
			var timer,
				$row = ( $table || c.$table ).find( '.' + tscss.filterRow ).addClass( tscss.filterRowHide );
			$row
				.bind( 'mouseenter mouseleave', function( e ) {
					// save event object - http://bugs.jquery.com/ticket/12140
					var event = e,
						$filterRow = $( this );
					clearTimeout( timer );
					timer = setTimeout( function() {
						if ( /enter|over/.test( event.type ) ) {
							$filterRow.removeClass( tscss.filterRowHide );
						} else {
							// don't hide if input has focus
							// $( ':focus' ) needs jQuery 1.6+
							if ( $( document.activeElement ).closest( 'tr' )[0] !== $filterRow[0] ) {
								// don't hide row if any filter has a value
								if ( c.lastCombinedFilter === '' ) {
									$filterRow.addClass( tscss.filterRowHide );
								}
							}
						}
					}, 200 );
				})
				.find( 'input, select' ).bind( 'focus blur', function( e ) {
					var event = e,
						$row = $( this ).closest( 'tr' );
					clearTimeout( timer );
					timer = setTimeout( function() {
						clearTimeout( timer );
						// don't hide row if any filter has a value
						if ( ts.getFilters( c.$table ).join( '' ) === '' ) {
							$row.toggleClass( tscss.filterRowHide, event.type !== 'focus' );
						}
					}, 200 );
				});
		},
		defaultFilter: function( filter, mask ) {
			if ( filter === '' ) { return filter; }
			var regex = tsfRegex.iQuery,
				maskLen = mask.match( tsfRegex.igQuery ).length,
				query = maskLen > 1 ? $.trim( filter ).split( /\s/ ) : [ $.trim( filter ) ],
				len = query.length - 1,
				indx = 0,
				val = mask;
			if ( len < 1 && maskLen > 1 ) {
				// only one 'word' in query but mask has >1 slots
				query[1] = query[0];
			}
			// replace all {query} with query words...
			// if query = 'Bob', then convert mask from '!{query}' to '!Bob'
			// if query = 'Bob Joe Frank', then convert mask '{q} OR {q}' to 'Bob OR Joe OR Frank'
			while ( regex.test( val ) ) {
				val = val.replace( regex, query[indx++] || '' );
				if ( regex.test( val ) && indx < len && ( query[indx] || '' ) !== '' ) {
					val = mask.replace( regex, val );
				}
			}
			return val;
		},
		getLatestSearch: function( $input ) {
			if ( $input ) {
				return $input.sort( function( a, b ) {
					return $( b ).attr( 'data-lastSearchTime' ) - $( a ).attr( 'data-lastSearchTime' );
				});
			}
			return $input || $();
		},
		findRange: function( c, val, ignoreRanges ) {
			// look for multiple columns '1-3,4-6,8' in data-column
			var temp, ranges, range, start, end, singles, i, indx, len,
				columns = [];
			if ( /^[0-9]+$/.test( val ) ) {
				// always return an array
				return [ parseInt( val, 10 ) ];
			}
			// process column range
			if ( !ignoreRanges && /-/.test( val ) ) {
				ranges = val.match( /(\d+)\s*-\s*(\d+)/g );
				len = ranges ? ranges.length : 0;
				for ( indx = 0; indx < len; indx++ ) {
					range = ranges[indx].split( /\s*-\s*/ );
					start = parseInt( range[0], 10 ) || 0;
					end = parseInt( range[1], 10 ) || ( c.columns - 1 );
					if ( start > end ) {
						temp = start; start = end; end = temp; // swap
					}
					if ( end >= c.columns ) {
						end = c.columns - 1;
					}
					for ( ; start <= end; start++ ) {
						columns.push( start );
					}
					// remove processed range from val
					val = val.replace( ranges[ indx ], '' );
				}
			}
			// process single columns
			if ( !ignoreRanges && /,/.test( val ) ) {
				singles = val.split( /\s*,\s*/ );
				len = singles.length;
				for ( i = 0; i < len; i++ ) {
					if ( singles[ i ] !== '' ) {
						indx = parseInt( singles[ i ], 10 );
						if ( indx < c.columns ) {
							columns.push( indx );
						}
					}
				}
			}
			// return all columns
			if ( !columns.length ) {
				for ( indx = 0; indx < c.columns; indx++ ) {
					columns.push( indx );
				}
			}
			return columns;
		},
		getColumnElm: function( c, $elements, column ) {
			// data-column may contain multiple columns '1-3,5-6,8'
			// replaces: c.$filters.filter( '[data-column="' + column + '"]' );
			return $elements.filter( function() {
				var cols = tsf.findRange( c, $( this ).attr( 'data-column' ) );
				return $.inArray( column, cols ) > -1;
			});
		},
		multipleColumns: function( c, $input ) {
			// look for multiple columns '1-3,4-6,8' in data-column
			var wo = c.widgetOptions,
				// only target 'all' column inputs on initialization
				// & don't target 'all' column inputs if they don't exist
				targets = wo.filter_initialized || !$input.filter( wo.filter_anyColumnSelector ).length,
				val = $.trim( tsf.getLatestSearch( $input ).attr( 'data-column' ) || '' );
			return tsf.findRange( c, val, !targets );
		},
		processTypes: function( c, data, vars ) {
			var ffxn,
				filterMatched = null,
				matches = null;
			for ( ffxn in tsf.types ) {
				if ( $.inArray( ffxn, vars.excludeMatch ) < 0 && matches === null ) {
					matches = tsf.types[ffxn]( c, data, vars );
					if ( matches !== null ) {
						filterMatched = matches;
					}
				}
			}
			return filterMatched;
		},
		processRow: function( c, data, vars ) {
			var result, filterMatched,
				fxn, ffxn, txt,
				wo = c.widgetOptions,
				showRow = true,

				// if wo.filter_$anyMatch data-column attribute is changed dynamically
				// we don't want to do an "anyMatch" search on one column using data
				// for the entire row - see #998
				columnIndex = wo.filter_$anyMatch && wo.filter_$anyMatch.length ?
					// look for multiple columns '1-3,4-6,8'
					tsf.multipleColumns( c, wo.filter_$anyMatch ) :
					[];

			data.$cells = data.$row.children();

			if ( data.anyMatchFlag && columnIndex.length > 1 ) {
				data.anyMatch = true;
				data.isMatch = true;
				data.rowArray = data.$cells.map( function( i ) {
					if ( $.inArray( i, columnIndex ) > -1 ) {
						if ( data.parsed[ i ] ) {
							txt = data.cacheArray[ i ];
						} else {
							txt = data.rawArray[ i ];
							txt = $.trim( wo.filter_ignoreCase ? txt.toLowerCase() : txt );
							if ( c.sortLocaleCompare ) {
								txt = ts.replaceAccents( txt );
							}
						}
						return txt;
					}
				}).get();
				data.filter = data.anyMatchFilter;
				data.iFilter = data.iAnyMatchFilter;
				data.exact = data.rowArray.join( ' ' );
				data.iExact = wo.filter_ignoreCase ? data.exact.toLowerCase() : data.exact;
				data.cache = data.cacheArray.slice( 0, -1 ).join( ' ' );

				vars.excludeMatch = vars.noAnyMatch;
				filterMatched = tsf.processTypes( c, data, vars );
				if ( filterMatched !== null ) {
					showRow = filterMatched;
				} else {
					if ( wo.filter_startsWith ) {
						showRow = false;
						// data.rowArray may not contain all columns
						columnIndex = Math.min( c.columns, data.rowArray.length );
						while ( !showRow && columnIndex > 0 ) {
							columnIndex--;
							showRow = showRow || data.rowArray[ columnIndex ].indexOf( data.iFilter ) === 0;
						}
					} else {
						showRow = ( data.iExact + data.childRowText ).indexOf( data.iFilter ) >= 0;
					}
				}
				data.anyMatch = false;
				// no other filters to process
				if ( data.filters.join( '' ) === data.filter ) {
					return showRow;
				}
			}

			for ( columnIndex = 0; columnIndex < c.columns; columnIndex++ ) {
				data.filter = data.filters[ columnIndex ];
				data.index = columnIndex;

				// filter types to exclude, per column
				vars.excludeMatch = vars.excludeFilter[ columnIndex ];

				// ignore if filter is empty or disabled
				if ( data.filter ) {
					data.cache = data.cacheArray[ columnIndex ];
					result = data.rawArray[ columnIndex ] || '';
					data.exact = c.sortLocaleCompare ? ts.replaceAccents( result ) : result; // issue #405
					data.iExact = !tsfRegex.type.test( typeof data.exact ) && wo.filter_ignoreCase ?
						data.exact.toLowerCase() : data.exact;

					data.isMatch = c.$headerIndexed[ data.index ].hasClass( 'filter-match' );

					result = showRow; // if showRow is true, show that row

					// in case select filter option has a different value vs text 'a - z|A through Z'
					ffxn = wo.filter_columnFilters ?
						c.$filters.add( c.$externalFilters )
							.filter( '[data-column="' + columnIndex + '"]' )
							.find( 'select option:selected' )
							.attr( 'data-function-name' ) || '' : '';
					// replace accents - see #357
					if ( c.sortLocaleCompare ) {
						data.filter = ts.replaceAccents( data.filter );
					}

					// replace column specific default filters - see #1088
					if ( wo.filter_defaultFilter && tsfRegex.iQuery.test( vars.defaultColFilter[ columnIndex ] ) ) {
						data.filter = tsf.defaultFilter( data.filter, vars.defaultColFilter[ columnIndex ] );
					}

					// data.iFilter = case insensitive ( if wo.filter_ignoreCase is true ),
					// data.filter = case sensitive
					data.iFilter = wo.filter_ignoreCase ? ( data.filter || '' ).toLowerCase() : data.filter;
					fxn = vars.functions[ columnIndex ];
					filterMatched = null;
					if ( fxn ) {
						if ( fxn === true ) {
							// default selector uses exact match unless 'filter-match' class is found
							filterMatched = data.isMatch ?
								// data.iExact may be a number
								( '' + data.iExact ).search( data.iFilter ) >= 0 :
								data.filter === data.exact;
						} else if ( typeof fxn === 'function' ) {
							// filter callback( exact cell content, parser normalized content,
							// filter input value, column index, jQuery row object )
							filterMatched = fxn( data.exact, data.cache, data.filter, columnIndex, data.$row, c, data );
						} else if ( typeof fxn[ ffxn || data.filter ] === 'function' ) {
							// selector option function
							txt = ffxn || data.filter;
							filterMatched =
								fxn[ txt ]( data.exact, data.cache, data.filter, columnIndex, data.$row, c, data );
						}
					}
					if ( filterMatched === null ) {
						// cycle through the different filters
						// filters return a boolean or null if nothing matches
						filterMatched = tsf.processTypes( c, data, vars );
						if ( filterMatched !== null ) {
							result = filterMatched;
						// Look for match, and add child row data for matching
						} else {
							txt = ( data.iExact + data.childRowText ).indexOf( tsf.parseFilter( c, data.iFilter, data ) );
							result = ( ( !wo.filter_startsWith && txt >= 0 ) || ( wo.filter_startsWith && txt === 0 ) );
						}
					} else {
						result = filterMatched;
					}
					showRow = ( result ) ? showRow : false;
				}
			}
			return showRow;
		},
		findRows: function( table, filters, combinedFilters ) {
			if ( table.config.lastCombinedFilter === combinedFilters ||
				!table.config.widgetOptions.filter_initialized ) {
				return;
			}
			var len, norm_rows, rowData, $rows, $row, rowIndex, tbodyIndex, $tbody, columnIndex,
				isChild, childRow, lastSearch, showRow, showParent, time, val, indx,
				notFiltered, searchFiltered, query, injected, res, id, txt,
				storedFilters = $.extend( [], filters ),
				c = table.config,
				wo = c.widgetOptions,
				// data object passed to filters; anyMatch is a flag for the filters
				data = {
					anyMatch: false,
					filters: filters,
					// regex filter type cache
					filter_regexCache : []
				},
				vars = {
					// anyMatch really screws up with these types of filters
					noAnyMatch: [ 'range', 'notMatch',  'operators' ],
					// cache filter variables that use ts.getColumnData in the main loop
					functions : [],
					excludeFilter : [],
					defaultColFilter : [],
					defaultAnyFilter : ts.getColumnData( table, wo.filter_defaultFilter, c.columns, true ) || ''
				};

			// parse columns after formatter, in case the class is added at that point
			data.parsed = [];
			for ( columnIndex = 0; columnIndex < c.columns; columnIndex++ ) {
				data.parsed[ columnIndex ] = wo.filter_useParsedData ||
					// parser has a "parsed" parameter
					( c.parsers && c.parsers[ columnIndex ] && c.parsers[ columnIndex ].parsed ||
					// getData may not return 'parsed' if other 'filter-' class names exist
					// ( e.g. <th class="filter-select filter-parsed"> )
					ts.getData && ts.getData( c.$headerIndexed[ columnIndex ],
						ts.getColumnData( table, c.headers, columnIndex ), 'filter' ) === 'parsed' ||
					c.$headerIndexed[ columnIndex ].hasClass( 'filter-parsed' ) );

				vars.functions[ columnIndex ] =
					ts.getColumnData( table, wo.filter_functions, columnIndex );
				vars.defaultColFilter[ columnIndex ] =
					ts.getColumnData( table, wo.filter_defaultFilter, columnIndex ) || '';
				vars.excludeFilter[ columnIndex ] =
					( ts.getColumnData( table, wo.filter_excludeFilter, columnIndex, true ) || '' ).split( /\s+/ );
			}

			if ( c.debug ) {
				console.log( 'Filter: Starting filter widget search', filters );
				time = new Date();
			}
			// filtered rows count
			c.filteredRows = 0;
			c.totalRows = 0;
			// combindedFilters are undefined on init
			combinedFilters = ( storedFilters || [] ).join( '' );

			for ( tbodyIndex = 0; tbodyIndex < c.$tbodies.length; tbodyIndex++ ) {
				$tbody = ts.processTbody( table, c.$tbodies.eq( tbodyIndex ), true );
				// skip child rows & widget added ( removable ) rows - fixes #448 thanks to @hempel!
				// $rows = $tbody.children( 'tr' ).not( c.selectorRemove );
				columnIndex = c.columns;
				// convert stored rows into a jQuery object
				norm_rows = c.cache[ tbodyIndex ].normalized;
				$rows = $( $.map( norm_rows, function( el ) {
					return el[ columnIndex ].$row.get();
				}) );

				if ( combinedFilters === '' || wo.filter_serversideFiltering ) {
					$rows
						.removeClass( wo.filter_filteredRow )
						.not( '.' + c.cssChildRow )
						.css( 'display', '' );
				} else {
					// filter out child rows
					$rows = $rows.not( '.' + c.cssChildRow );
					len = $rows.length;

					if ( ( wo.filter_$anyMatch && wo.filter_$anyMatch.length ) ||
						typeof filters[c.columns] !== 'undefined' ) {
						data.anyMatchFlag = true;
						data.anyMatchFilter = '' + (
							filters[ c.columns ] ||
							wo.filter_$anyMatch && tsf.getLatestSearch( wo.filter_$anyMatch ).val() ||
							''
						);
						if ( wo.filter_columnAnyMatch ) {
							// specific columns search
							query = data.anyMatchFilter.split( tsfRegex.andSplit );
							injected = false;
							for ( indx = 0; indx < query.length; indx++ ) {
								res = query[ indx ].split( ':' );
								if ( res.length > 1 ) {
									// make the column a one-based index ( non-developers start counting from one :P )
									id = parseInt( res[0], 10 ) - 1;
									if ( id >= 0 && id < c.columns ) { // if id is an integer
										filters[ id ] = res[1];
										query.splice( indx, 1 );
										indx--;
										injected = true;
									}
								}
							}
							if ( injected ) {
								data.anyMatchFilter = query.join( ' && ' );
							}
						}
					}

					// optimize searching only through already filtered rows - see #313
					searchFiltered = wo.filter_searchFiltered;
					lastSearch = c.lastSearch || c.$table.data( 'lastSearch' ) || [];
					if ( searchFiltered ) {
						// cycle through all filters; include last ( columnIndex + 1 = match any column ). Fixes #669
						for ( indx = 0; indx < columnIndex + 1; indx++ ) {
							val = filters[indx] || '';
							// break out of loop if we've already determined not to search filtered rows
							if ( !searchFiltered ) { indx = columnIndex; }
							// search already filtered rows if...
							searchFiltered = searchFiltered && lastSearch.length &&
								// there are no changes from beginning of filter
								val.indexOf( lastSearch[indx] || '' ) === 0 &&
								// if there is NOT a logical 'or', or range ( 'to' or '-' ) in the string
								!tsfRegex.alreadyFiltered.test( val ) &&
								// if we are not doing exact matches, using '|' ( logical or ) or not '!'
								!tsfRegex.exactTest.test( val ) &&
								// don't search only filtered if the value is negative
								// ( '> -10' => '> -100' will ignore hidden rows )
								!( tsfRegex.isNeg1.test( val ) || tsfRegex.isNeg2.test( val ) ) &&
								// if filtering using a select without a 'filter-match' class ( exact match ) - fixes #593
								!( val !== '' && c.$filters && c.$filters.filter( '[data-column="' + indx + '"]' ).find( 'select' ).length &&
									!c.$headerIndexed[indx].hasClass( 'filter-match' ) );
						}
					}
					notFiltered = $rows.not( '.' + wo.filter_filteredRow ).length;
					// can't search when all rows are hidden - this happens when looking for exact matches
					if ( searchFiltered && notFiltered === 0 ) { searchFiltered = false; }
					if ( c.debug ) {
						console.log( 'Filter: Searching through ' +
							( searchFiltered && notFiltered < len ? notFiltered : 'all' ) + ' rows' );
					}
					if ( data.anyMatchFlag ) {
						if ( c.sortLocaleCompare ) {
							// replace accents
							data.anyMatchFilter = ts.replaceAccents( data.anyMatchFilter );
						}
						if ( wo.filter_defaultFilter && tsfRegex.iQuery.test( vars.defaultAnyFilter ) ) {
							data.anyMatchFilter = tsf.defaultFilter( data.anyMatchFilter, vars.defaultAnyFilter );
							// clear search filtered flag because default filters are not saved to the last search
							searchFiltered = false;
						}
						// make iAnyMatchFilter lowercase unless both filter widget & core ignoreCase options are true
						// when c.ignoreCase is true, the cache contains all lower case data
						data.iAnyMatchFilter = !( wo.filter_ignoreCase && c.ignoreCase ) ?
							data.anyMatchFilter :
							data.anyMatchFilter.toLowerCase();
					}

					// loop through the rows
					for ( rowIndex = 0; rowIndex < len; rowIndex++ ) {

						txt = $rows[ rowIndex ].className;
						// the first row can never be a child row
						isChild = rowIndex && tsfRegex.child.test( txt );
						// skip child rows & already filtered rows
						if ( isChild || ( searchFiltered && tsfRegex.filtered.test( txt ) ) ) {
							continue;
						}

						data.$row = $rows.eq( rowIndex );
						data.cacheArray = norm_rows[ rowIndex ];
						rowData = data.cacheArray[ c.columns ];
						data.rawArray = rowData.raw;
						data.childRowText = '';

						if ( !wo.filter_childByColumn ) {
							txt = '';
							// child row cached text
							childRow = rowData.child;
							// so, if 'table.config.widgetOptions.filter_childRows' is true and there is
							// a match anywhere in the child row, then it will make the row visible
							// checked here so the option can be changed dynamically
							for ( indx = 0; indx < childRow.length; indx++ ) {
								txt += ' ' + childRow[indx].join( ' ' ) || '';
							}
							data.childRowText = wo.filter_childRows ?
								( wo.filter_ignoreCase ? txt.toLowerCase() : txt ) :
								'';
						}

						showRow = false;
						showParent = tsf.processRow( c, data, vars );
						$row = rowData.$row;

						// don't pass reference to val
						val = showParent ? true : false;
						childRow = rowData.$row.filter( ':gt(0)' );
						if ( wo.filter_childRows && childRow.length ) {
							if ( wo.filter_childByColumn ) {
								if ( !wo.filter_childWithSibs ) {
									// hide all child rows
									childRow.addClass( wo.filter_filteredRow );
									// if only showing resulting child row, only include parent
									$row = $row.eq( 0 );
								}
								// cycle through each child row
								for ( indx = 0; indx < childRow.length; indx++ ) {
									data.$row = childRow.eq( indx );
									data.cacheArray = rowData.child[ indx ];
									data.rawArray = data.cacheArray;
									val = tsf.processRow( c, data, vars );
									// use OR comparison on child rows
									showRow = showRow || val;
									if ( !wo.filter_childWithSibs && val ) {
										childRow.eq( indx ).removeClass( wo.filter_filteredRow );
									}
								}
							}
							// keep parent row match even if no child matches... see #1020
							showRow = showRow || showParent;
						} else {
							showRow = val;
						}
						$row
							.toggleClass( wo.filter_filteredRow, !showRow )[0]
							.display = showRow ? '' : 'none';
					}
				}
				c.filteredRows += $rows.not( '.' + wo.filter_filteredRow ).length;
				c.totalRows += $rows.length;
				ts.processTbody( table, $tbody, false );
			}
			c.lastCombinedFilter = combinedFilters; // save last search
			// don't save 'filters' directly since it may have altered ( AnyMatch column searches )
			c.lastSearch = storedFilters;
			c.$table.data( 'lastSearch', storedFilters );
			if ( wo.filter_saveFilters && ts.storage ) {
				ts.storage( table, 'tablesorter-filters', tsf.processFilters( storedFilters, true ) );
			}
			if ( c.debug ) {
				console.log( 'Completed filter widget search' + ts.benchmark(time) );
			}
			if ( wo.filter_initialized ) {
				c.$table.triggerHandler( 'filterBeforeEnd', c );
				c.$table.triggerHandler( 'filterEnd', c );
			}
			setTimeout( function() {
				ts.applyWidget( c.table ); // make sure zebra widget is applied
			}, 0 );
		},
		getOptionSource: function( table, column, onlyAvail ) {
			table = $( table )[0];
			var c = table.config,
				wo = c.widgetOptions,
				arry = false,
				source = wo.filter_selectSource,
				last = c.$table.data( 'lastSearch' ) || [],
				fxn = typeof source === 'function' ? true : ts.getColumnData( table, source, column );

			if ( onlyAvail && last[column] !== '' ) {
				onlyAvail = false;
			}

			// filter select source option
			if ( fxn === true ) {
				// OVERALL source
				arry = source( table, column, onlyAvail );
			} else if ( fxn instanceof $ || ( $.type( fxn ) === 'string' && fxn.indexOf( '</option>' ) >= 0 ) ) {
				// selectSource is a jQuery object or string of options
				return fxn;
			} else if ( $.isArray( fxn ) ) {
				arry = fxn;
			} else if ( $.type( source ) === 'object' && fxn ) {
				// custom select source function for a SPECIFIC COLUMN
				arry = fxn( table, column, onlyAvail );
			}
			if ( arry === false ) {
				// fall back to original method
				arry = tsf.getOptions( table, column, onlyAvail );
			}

			return tsf.processOptions( table, column, arry );

		},
		processOptions: function( table, column, arry ) {
			if ( !$.isArray( arry ) ) {
				return false;
			}
			table = $( table )[0];
			var cts, txt, indx, len, parsedTxt, str,
				c = table.config,
				validColumn = typeof column !== 'undefined' && column !== null && column >= 0 && column < c.columns,
				parsed = [];
			// get unique elements and sort the list
			// if $.tablesorter.sortText exists ( not in the original tablesorter ),
			// then natural sort the list otherwise use a basic sort
			arry = $.grep( arry, function( value, indx ) {
				if ( value.text ) {
					return true;
				}
				return $.inArray( value, arry ) === indx;
			});
			if ( validColumn && c.$headerIndexed[ column ].hasClass( 'filter-select-nosort' ) ) {
				// unsorted select options
				return arry;
			} else {
				len = arry.length;
				// parse select option values
				for ( indx = 0; indx < len; indx++ ) {
					txt = arry[ indx ];
					// check for object
					str = txt.text ? txt.text : txt;
					// sortNatural breaks if you don't pass it strings
					parsedTxt = ( validColumn && c.parsers && c.parsers.length &&
						c.parsers[ column ].format( str, table, [], column ) || str ).toString();
					parsedTxt = c.widgetOptions.filter_ignoreCase ? parsedTxt.toLowerCase() : parsedTxt;
					// parse array data using set column parser; this DOES NOT pass the original
					// table cell to the parser format function
					if ( txt.text ) {
						txt.parsed = parsedTxt;
						parsed.push( txt );
					} else {
						parsed.push({
							text : txt,
							// check parser length - fixes #934
							parsed : parsedTxt
						});
					}
				}
				// sort parsed select options
				cts = c.textSorter || '';
				parsed.sort( function( a, b ) {
					var x = a.parsed,
						y = b.parsed;
					if ( validColumn && typeof cts === 'function' ) {
						// custom OVERALL text sorter
						return cts( x, y, true, column, table );
					} else if ( validColumn && typeof cts === 'object' && cts.hasOwnProperty( column ) ) {
						// custom text sorter for a SPECIFIC COLUMN
						return cts[column]( x, y, true, column, table );
					} else if ( ts.sortNatural ) {
						// fall back to natural sort
						return ts.sortNatural( x, y );
					}
					// using an older version! do a basic sort
					return true;
				});
				// rebuild arry from sorted parsed data
				arry = [];
				len = parsed.length;
				for ( indx = 0; indx < len; indx++ ) {
					arry.push( parsed[indx] );
				}
				return arry;
			}
		},
		getOptions: function( table, column, onlyAvail ) {
			table = $( table )[0];
			var rowIndex, tbodyIndex, len, row, cache, indx, child, childLen,
				c = table.config,
				wo = c.widgetOptions,
				arry = [];
			for ( tbodyIndex = 0; tbodyIndex < c.$tbodies.length; tbodyIndex++ ) {
				cache = c.cache[tbodyIndex];
				len = c.cache[tbodyIndex].normalized.length;
				// loop through the rows
				for ( rowIndex = 0; rowIndex < len; rowIndex++ ) {
					// get cached row from cache.row ( old ) or row data object
					// ( new; last item in normalized array )
					row = cache.row ?
						cache.row[ rowIndex ] :
						cache.normalized[ rowIndex ][ c.columns ].$row[0];
					// check if has class filtered
					if ( onlyAvail && row.className.match( wo.filter_filteredRow ) ) {
						continue;
					}
					// get non-normalized cell content
					if ( wo.filter_useParsedData ||
						c.parsers[column].parsed ||
						c.$headerIndexed[column].hasClass( 'filter-parsed' ) ) {
						arry.push( '' + cache.normalized[ rowIndex ][ column ] );
						// child row parsed data
						if ( wo.filter_childRows && wo.filter_childByColumn ) {
							childLen = cache.normalized[ rowIndex ][ c.columns ].$row.length - 1;
							for ( indx = 0; indx < childLen; indx++ ) {
								arry.push( '' + cache.normalized[ rowIndex ][ c.columns ].child[ indx ][ column ] );
							}
						}
					} else {
						// get raw cached data instead of content directly from the cells
						arry.push( cache.normalized[ rowIndex ][ c.columns ].raw[ column ] );
						// child row unparsed data
						if ( wo.filter_childRows && wo.filter_childByColumn ) {
							childLen = cache.normalized[ rowIndex ][ c.columns ].$row.length;
							for ( indx = 1; indx < childLen; indx++ ) {
								child =  cache.normalized[ rowIndex ][ c.columns ].$row.eq( indx ).children().eq( column );
								arry.push( '' + ts.getElementText( c, child, column ) );
							}
						}
					}
				}
			}
			return arry;
		},
		buildSelect: function( table, column, arry, updating, onlyAvail ) {
			table = $( table )[0];
			column = parseInt( column, 10 );
			if ( !table.config.cache || $.isEmptyObject( table.config.cache ) ) {
				return;
			}

			var indx, val, txt, t, $filters, $filter, option,
				c = table.config,
				wo = c.widgetOptions,
				node = c.$headerIndexed[ column ],
				// t.data( 'placeholder' ) won't work in jQuery older than 1.4.3
				options = '<option value="">' +
					( node.data( 'placeholder' ) ||
						node.attr( 'data-placeholder' ) ||
						wo.filter_placeholder.select || ''
					) + '</option>',
				// Get curent filter value
				currentValue = c.$table
					.find( 'thead' )
					.find( 'select.' + tscss.filter + '[data-column="' + column + '"]' )
					.val();

			// nothing included in arry ( external source ), so get the options from
			// filter_selectSource or column data
			if ( typeof arry === 'undefined' || arry === '' ) {
				arry = tsf.getOptionSource( table, column, onlyAvail );
			}

			if ( $.isArray( arry ) ) {
				// build option list
				for ( indx = 0; indx < arry.length; indx++ ) {
					option = arry[ indx ];
					if ( option.text ) {
						// OBJECT!! add data-function-name in case the value is set in filter_functions
						option['data-function-name'] = typeof option.value === 'undefined' ? option.text : option.value;

						// support jQuery < v1.8, otherwise the below code could be shortened to
						// options += $( '<option>', option )[ 0 ].outerHTML;
						options += '<option';
						for ( val in option ) {
							if ( option.hasOwnProperty( val ) && val !== 'text' ) {
								options += ' ' + val + '="' + option[ val ] + '"';
							}
						}
						if ( !option.value ) {
							options += ' value="' + option.text + '"';
						}
						options += '>' + option.text + '</option>';
						// above code is needed in jQuery < v1.8

						// make sure we don't turn an object into a string (objects without a "text" property)
					} else if ( '' + option !== '[object Object]' ) {
						txt = option = ( '' + option ).replace( tsfRegex.quote, '&quot;' );
						val = txt;
						// allow including a symbol in the selectSource array
						// 'a-z|A through Z' so that 'a-z' becomes the option value
						// and 'A through Z' becomes the option text
						if ( txt.indexOf( wo.filter_selectSourceSeparator ) >= 0 ) {
							t = txt.split( wo.filter_selectSourceSeparator );
							val = t[0];
							txt = t[1];
						}
						// replace quotes - fixes #242 & ignore empty strings
						// see http://stackoverflow.com/q/14990971/145346
						options += option !== '' ?
							'<option ' +
								( val === txt ? '' : 'data-function-name="' + option + '" ' ) +
								'value="' + val + '">' + txt +
							'</option>' : '';
					}
				}
				// clear arry so it doesn't get appended twice
				arry = [];
			}

			// update all selects in the same column ( clone thead in sticky headers &
			// any external selects ) - fixes 473
			$filters = ( c.$filters ? c.$filters : c.$table.children( 'thead' ) )
				.find( '.' + tscss.filter );
			if ( wo.filter_$externalFilters ) {
				$filters = $filters && $filters.length ?
					$filters.add( wo.filter_$externalFilters ) :
					wo.filter_$externalFilters;
			}
			$filter = $filters.filter( 'select[data-column="' + column + '"]' );

			// make sure there is a select there!
			if ( $filter.length ) {
				$filter[ updating ? 'html' : 'append' ]( options );
				if ( !$.isArray( arry ) ) {
					// append options if arry is provided externally as a string or jQuery object
					// options ( default value ) was already added
					$filter.append( arry ).val( currentValue );
				}
				$filter.val( currentValue );
			}
		},
		buildDefault: function( table, updating ) {
			var columnIndex, $header, noSelect,
				c = table.config,
				wo = c.widgetOptions,
				columns = c.columns;
			// build default select dropdown
			for ( columnIndex = 0; columnIndex < columns; columnIndex++ ) {
				$header = c.$headerIndexed[columnIndex];
				noSelect = !( $header.hasClass( 'filter-false' ) || $header.hasClass( 'parser-false' ) );
				// look for the filter-select class; build/update it if found
				if ( ( $header.hasClass( 'filter-select' ) ||
					ts.getColumnData( table, wo.filter_functions, columnIndex ) === true ) && noSelect ) {
					tsf.buildSelect( table, columnIndex, '', updating, $header.hasClass( wo.filter_onlyAvail ) );
				}
			}
		}
	};

	// filter regex variable
	tsfRegex = tsf.regex;

	ts.getFilters = function( table, getRaw, setFilters, skipFirst ) {
		var i, $filters, $column, cols,
			filters = false,
			c = table ? $( table )[0].config : '',
			wo = c ? c.widgetOptions : '';
		if ( ( getRaw !== true && wo && !wo.filter_columnFilters ) ||
			// setFilters called, but last search is exactly the same as the current
			// fixes issue #733 & #903 where calling update causes the input values to reset
			( $.isArray(setFilters) && setFilters.join('') === c.lastCombinedFilter ) ) {
			return $( table ).data( 'lastSearch' );
		}
		if ( c ) {
			if ( c.$filters ) {
				$filters = c.$filters.find( '.' + tscss.filter );
			}
			if ( wo.filter_$externalFilters ) {
				$filters = $filters && $filters.length ?
					$filters.add( wo.filter_$externalFilters ) :
					wo.filter_$externalFilters;
			}
			if ( $filters && $filters.length ) {
				filters = setFilters || [];
				for ( i = 0; i < c.columns + 1; i++ ) {
					cols = ( i === c.columns ?
						// 'all' columns can now include a range or set of columms ( data-column='0-2,4,6-7' )
						wo.filter_anyColumnSelector + ',' + wo.filter_multipleColumnSelector :
						'[data-column="' + i + '"]' );
					$column = $filters.filter( cols );
					if ( $column.length ) {
						// move the latest search to the first slot in the array
						$column = tsf.getLatestSearch( $column );
						if ( $.isArray( setFilters ) ) {
							// skip first ( latest input ) to maintain cursor position while typing
							if ( skipFirst && $column.length > 1 ) {
								$column = $column.slice( 1 );
							}
							if ( i === c.columns ) {
								// prevent data-column='all' from filling data-column='0,1' ( etc )
								cols = $column.filter( wo.filter_anyColumnSelector );
								$column = cols.length ? cols : $column;
							}
							$column
								.val( setFilters[ i ] )
								// must include a namespace here; but not c.namespace + 'filter'?
								.trigger( 'change' + c.namespace );
						} else {
							filters[i] = $column.val() || '';
							// don't change the first... it will move the cursor
							if ( i === c.columns ) {
								// don't update range columns from 'all' setting
								$column
									.slice( 1 )
									.filter( '[data-column*="' + $column.attr( 'data-column' ) + '"]' )
									.val( filters[ i ] );
							} else {
								$column
									.slice( 1 )
									.val( filters[ i ] );
							}
						}
						// save any match input dynamically
						if ( i === c.columns && $column.length ) {
							wo.filter_$anyMatch = $column;
						}
					}
				}
			}
		}
		if ( filters.length === 0 ) {
			filters = false;
		}
		return filters;
	};

	ts.setFilters = function( table, filter, apply, skipFirst ) {
		var c = table ? $( table )[0].config : '',
			valid = ts.getFilters( table, true, filter, skipFirst );
		// default apply to "true"
		if ( typeof apply === 'undefined' ) {
			apply = true;
		}
		if ( c && apply ) {
			// ensure new set filters are applied, even if the search is the same
			c.lastCombinedFilter = null;
			c.lastSearch = [];
			tsf.searching( c.table, filter, skipFirst );
			c.$table.triggerHandler( 'filterFomatterUpdate' );
		}
		return !!valid;
	};

})( jQuery );

/*! Widget: stickyHeaders - updated 10/31/2015 (v2.24.0) *//*
 * Requires tablesorter v2.8+ and jQuery 1.4.3+
 * by Rob Garrison
 */
;(function ($, window) {
	'use strict';
	var ts = $.tablesorter || {};

	$.extend(ts.css, {
		sticky    : 'tablesorter-stickyHeader', // stickyHeader
		stickyVis : 'tablesorter-sticky-visible',
		stickyHide: 'tablesorter-sticky-hidden',
		stickyWrap: 'tablesorter-sticky-wrapper'
	});

	// Add a resize event to table headers
	ts.addHeaderResizeEvent = function(table, disable, settings) {
		table = $(table)[0]; // make sure we're using a dom element
		if ( !table.config ) { return; }
		var defaults = {
				timer : 250
			},
			options = $.extend({}, defaults, settings),
			c = table.config,
			wo = c.widgetOptions,
			checkSizes = function( triggerEvent ) {
				var index, headers, $header, sizes, width, height,
					len = c.$headers.length;
				wo.resize_flag = true;
				headers = [];
				for ( index = 0; index < len; index++ ) {
					$header = c.$headers.eq( index );
					sizes = $header.data( 'savedSizes' ) || [ 0, 0 ]; // fixes #394
					width = $header[0].offsetWidth;
					height = $header[0].offsetHeight;
					if ( width !== sizes[0] || height !== sizes[1] ) {
						$header.data( 'savedSizes', [ width, height ] );
						headers.push( $header[0] );
					}
				}
				if ( headers.length && triggerEvent !== false ) {
					c.$table.triggerHandler( 'resize', [ headers ] );
				}
				wo.resize_flag = false;
			};
		checkSizes( false );
		clearInterval(wo.resize_timer);
		if (disable) {
			wo.resize_flag = false;
			return false;
		}
		wo.resize_timer = setInterval(function() {
			if (wo.resize_flag) { return; }
			checkSizes();
		}, options.timer);
	};

	// Sticky headers based on this awesome article:
	// http://css-tricks.com/13465-persistent-headers/
	// and https://github.com/jmosbech/StickyTableHeaders by Jonas Mosbech
	// **************************
	ts.addWidget({
		id: 'stickyHeaders',
		priority: 60, // sticky widget must be initialized after the filter widget!
		options: {
			stickyHeaders : '',       // extra class name added to the sticky header row
			stickyHeaders_attachTo : null, // jQuery selector or object to attach sticky header to
			stickyHeaders_xScroll : null, // jQuery selector or object to monitor horizontal scroll position (defaults: xScroll > attachTo > window)
			stickyHeaders_yScroll : null, // jQuery selector or object to monitor vertical scroll position (defaults: yScroll > attachTo > window)
			stickyHeaders_offset : 0, // number or jquery selector targeting the position:fixed element
			stickyHeaders_filteredToTop: true, // scroll table top into view after filtering
			stickyHeaders_cloneId : '-sticky', // added to table ID, if it exists
			stickyHeaders_addResizeEvent : true, // trigger 'resize' event on headers
			stickyHeaders_includeCaption : true, // if false and a caption exist, it won't be included in the sticky header
			stickyHeaders_zIndex : 2 // The zIndex of the stickyHeaders, allows the user to adjust this to their needs
		},
		format: function(table, c, wo) {
			// filter widget doesn't initialize on an empty table. Fixes #449
			if ( c.$table.hasClass('hasStickyHeaders') || ($.inArray('filter', c.widgets) >= 0 && !c.$table.hasClass('hasFilters')) ) {
				return;
			}
			var index, len, $t,
				$table = c.$table,
				// add position: relative to attach element, hopefully it won't cause trouble.
				$attach = $(wo.stickyHeaders_attachTo),
				namespace = c.namespace + 'stickyheaders ',
				// element to watch for the scroll event
				$yScroll = $(wo.stickyHeaders_yScroll || wo.stickyHeaders_attachTo || window),
				$xScroll = $(wo.stickyHeaders_xScroll || wo.stickyHeaders_attachTo || window),
				$thead = $table.children('thead:first'),
				$header = $thead.children('tr').not('.sticky-false').children(),
				$tfoot = $table.children('tfoot'),
				$stickyOffset = isNaN(wo.stickyHeaders_offset) ? $(wo.stickyHeaders_offset) : '',
				stickyOffset = $stickyOffset.length ? $stickyOffset.height() || 0 : parseInt(wo.stickyHeaders_offset, 10) || 0,
				// is this table nested? If so, find parent sticky header wrapper (div, not table)
				$nestedSticky = $table.parent().closest('.' + ts.css.table).hasClass('hasStickyHeaders') ?
					$table.parent().closest('table.tablesorter')[0].config.widgetOptions.$sticky.parent() : [],
				nestedStickyTop = $nestedSticky.length ? $nestedSticky.height() : 0,
				// clone table, then wrap to make sticky header
				$stickyTable = wo.$sticky = $table.clone()
					.addClass('containsStickyHeaders ' + ts.css.sticky + ' ' + wo.stickyHeaders + ' ' + c.namespace.slice(1) + '_extra_table' )
					.wrap('<div class="' + ts.css.stickyWrap + '">'),
				$stickyWrap = $stickyTable.parent()
					.addClass(ts.css.stickyHide)
					.css({
						position   : $attach.length ? 'absolute' : 'fixed',
						padding    : parseInt( $stickyTable.parent().parent().css('padding-left'), 10 ),
						top        : stickyOffset + nestedStickyTop,
						left       : 0,
						visibility : 'hidden',
						zIndex     : wo.stickyHeaders_zIndex || 2
					}),
				$stickyThead = $stickyTable.children('thead:first'),
				$stickyCells,
				laststate = '',
				spacing = 0,
				setWidth = function($orig, $clone){
					var index, width, border, $cell, $this,
						$cells = $orig.filter(':visible'),
						len = $cells.length;
					for ( index = 0; index < len; index++ ) {
						$cell = $clone.filter(':visible').eq(index);
						$this = $cells.eq(index);
						// code from https://github.com/jmosbech/StickyTableHeaders
						if ($this.css('box-sizing') === 'border-box') {
							width = $this.outerWidth();
						} else {
							if ($cell.css('border-collapse') === 'collapse') {
								if (window.getComputedStyle) {
									width = parseFloat( window.getComputedStyle($this[0], null).width );
								} else {
									// ie8 only
									border = parseFloat( $this.css('border-width') );
									width = $this.outerWidth() - parseFloat( $this.css('padding-left') ) - parseFloat( $this.css('padding-right') ) - border;
								}
							} else {
								width = $this.width();
							}
						}
						$cell.css({
							'width': width,
							'min-width': width,
							'max-width': width
						});
					}
				},
				resizeHeader = function() {
					stickyOffset = $stickyOffset.length ? $stickyOffset.height() || 0 : parseInt(wo.stickyHeaders_offset, 10) || 0;
					spacing = 0;
					$stickyWrap.css({
						left : $attach.length ? parseInt($attach.css('padding-left'), 10) || 0 :
								$table.offset().left - parseInt($table.css('margin-left'), 10) - $xScroll.scrollLeft() - spacing,
						width: $table.outerWidth()
					});
					setWidth( $table, $stickyTable );
					setWidth( $header, $stickyCells );
				},
				scrollSticky = function( resizing ) {
					if (!$table.is(':visible')) { return; } // fixes #278
					// Detect nested tables - fixes #724
					nestedStickyTop = $nestedSticky.length ? $nestedSticky.offset().top - $yScroll.scrollTop() + $nestedSticky.height() : 0;
					var offset = $table.offset(),
						yWindow = $.isWindow( $yScroll[0] ), // $.isWindow needs jQuery 1.4.3
						xWindow = $.isWindow( $xScroll[0] ),
						// scrollTop = ( $attach.length ? $attach.offset().top : $yScroll.scrollTop() ) + stickyOffset + nestedStickyTop,
						scrollTop = ( $attach.length ? ( yWindow ? $yScroll.scrollTop() : $yScroll.offset().top ) : $yScroll.scrollTop() ) + stickyOffset + nestedStickyTop,
						tableHeight = $table.height() - ($stickyWrap.height() + ($tfoot.height() || 0)),
						isVisible = ( scrollTop > offset.top ) && ( scrollTop < offset.top + tableHeight ) ? 'visible' : 'hidden',
						cssSettings = { visibility : isVisible };

					if ($attach.length) {
						cssSettings.top = yWindow ? scrollTop - $attach.offset().top : $attach.scrollTop();
					}
					if (xWindow) {
						// adjust when scrolling horizontally - fixes issue #143
						cssSettings.left = $table.offset().left - parseInt($table.css('margin-left'), 10) - $xScroll.scrollLeft() - spacing;
					}
					if ($nestedSticky.length) {
						cssSettings.top = ( cssSettings.top || 0 ) + stickyOffset + nestedStickyTop;
					}
					$stickyWrap
						.removeClass( ts.css.stickyVis + ' ' + ts.css.stickyHide )
						.addClass( isVisible === 'visible' ? ts.css.stickyVis : ts.css.stickyHide )
						.css(cssSettings);
					if (isVisible !== laststate || resizing) {
						// make sure the column widths match
						resizeHeader();
						laststate = isVisible;
					}
				};
			// only add a position relative if a position isn't already defined
			if ($attach.length && !$attach.css('position')) {
				$attach.css('position', 'relative');
			}
			// fix clone ID, if it exists - fixes #271
			if ($stickyTable.attr('id')) { $stickyTable[0].id += wo.stickyHeaders_cloneId; }
			// clear out cloned table, except for sticky header
			// include caption & filter row (fixes #126 & #249) - don't remove cells to get correct cell indexing
			$stickyTable.find('thead:gt(0), tr.sticky-false').hide();
			$stickyTable.find('tbody, tfoot').remove();
			$stickyTable.find('caption').toggle(wo.stickyHeaders_includeCaption);
			// issue #172 - find td/th in sticky header
			$stickyCells = $stickyThead.children().children();
			$stickyTable.css({ height:0, width:0, margin: 0 });
			// remove resizable block
			$stickyCells.find('.' + ts.css.resizer).remove();
			// update sticky header class names to match real header after sorting
			$table
				.addClass('hasStickyHeaders')
				.bind('pagerComplete' + namespace, function() {
					resizeHeader();
				});

			ts.bindEvents(table, $stickyThead.children().children('.' + ts.css.header));

			// add stickyheaders AFTER the table. If the table is selected by ID, the original one (first) will be returned.
			$table.after( $stickyWrap );

			// onRenderHeader is defined, we need to do something about it (fixes #641)
			if (c.onRenderHeader) {
				$t = $stickyThead.children('tr').children();
				len = $t.length;
				for ( index = 0; index < len; index++ ) {
					// send second parameter
					c.onRenderHeader.apply( $t.eq( index ), [ index, c, $stickyTable ] );
				}
			}

			// make it sticky!
			$xScroll.add($yScroll)
				.unbind( ('scroll resize '.split(' ').join( namespace )).replace(/\s+/g, ' ') )
				.bind('scroll resize '.split(' ').join( namespace ), function( event ) {
					scrollSticky( event.type === 'resize' );
				});
			c.$table
				.unbind('stickyHeadersUpdate' + namespace)
				.bind('stickyHeadersUpdate' + namespace, function(){
					scrollSticky( true );
				});

			if (wo.stickyHeaders_addResizeEvent) {
				ts.addHeaderResizeEvent(table);
			}

			// look for filter widget
			if ($table.hasClass('hasFilters') && wo.filter_columnFilters) {
				// scroll table into view after filtering, if sticky header is active - #482
				$table.bind('filterEnd' + namespace, function() {
					// $(':focus') needs jQuery 1.6+
					var $td = $(document.activeElement).closest('td'),
						column = $td.parent().children().index($td);
					// only scroll if sticky header is active
					if ($stickyWrap.hasClass(ts.css.stickyVis) && wo.stickyHeaders_filteredToTop) {
						// scroll to original table (not sticky clone)
						window.scrollTo(0, $table.position().top);
						// give same input/select focus; check if c.$filters exists; fixes #594
						if (column >= 0 && c.$filters) {
							c.$filters.eq(column).find('a, select, input').filter(':visible').focus();
						}
					}
				});
				ts.filter.bindSearch( $table, $stickyCells.find('.' + ts.css.filter) );
				// support hideFilters
				if (wo.filter_hideFilters) {
					ts.filter.hideFilters(c, $stickyTable);
				}
			}

			$table.triggerHandler('stickyHeadersInit');

		},
		remove: function(table, c, wo) {
			var namespace = c.namespace + 'stickyheaders ';
			c.$table
				.removeClass('hasStickyHeaders')
				.unbind( ('pagerComplete filterEnd stickyHeadersUpdate '.split(' ').join(namespace)).replace(/\s+/g, ' ') )
				.next('.' + ts.css.stickyWrap).remove();
			if (wo.$sticky && wo.$sticky.length) { wo.$sticky.remove(); } // remove cloned table
			$(window)
				.add(wo.stickyHeaders_xScroll)
				.add(wo.stickyHeaders_yScroll)
				.add(wo.stickyHeaders_attachTo)
				.unbind( ('scroll resize '.split(' ').join(namespace)).replace(/\s+/g, ' ') );
			ts.addHeaderResizeEvent(table, false);
		}
	});

})(jQuery, window);

/*! Widget: resizable - updated 11/4/2015 (v2.24.3) */
/*jshint browser:true, jquery:true, unused:false */
;(function ($, window) {
	'use strict';
	var ts = $.tablesorter || {};

	$.extend(ts.css, {
		resizableContainer : 'tablesorter-resizable-container',
		resizableHandle    : 'tablesorter-resizable-handle',
		resizableNoSelect  : 'tablesorter-disableSelection',
		resizableStorage   : 'tablesorter-resizable'
	});

	// Add extra scroller css
	$(function(){
		var s = '<style>' +
			'body.' + ts.css.resizableNoSelect + ' { -ms-user-select: none; -moz-user-select: -moz-none;' +
				'-khtml-user-select: none; -webkit-user-select: none; user-select: none; }' +
			'.' + ts.css.resizableContainer + ' { position: relative; height: 1px; }' +
			// make handle z-index > than stickyHeader z-index, so the handle stays above sticky header
			'.' + ts.css.resizableHandle + ' { position: absolute; display: inline-block; width: 8px;' +
				'top: 1px; cursor: ew-resize; z-index: 3; user-select: none; -moz-user-select: none; }' +
			'</style>';
		$(s).appendTo('body');
	});

	ts.resizable = {
		init : function( c, wo ) {
			if ( c.$table.hasClass( 'hasResizable' ) ) { return; }
			c.$table.addClass( 'hasResizable' );

			var noResize, $header, column, storedSizes, tmp,
				$table = c.$table,
				$parent = $table.parent(),
				marginTop = parseInt( $table.css( 'margin-top' ), 10 ),

			// internal variables
			vars = wo.resizable_vars = {
				useStorage : ts.storage && wo.resizable !== false,
				$wrap : $parent,
				mouseXPosition : 0,
				$target : null,
				$next : null,
				overflow : $parent.css('overflow') === 'auto' ||
					$parent.css('overflow') === 'scroll' ||
					$parent.css('overflow-x') === 'auto' ||
					$parent.css('overflow-x') === 'scroll',
				storedSizes : []
			};

			// set default widths
			ts.resizableReset( c.table, true );

			// now get measurements!
			vars.tableWidth = $table.width();
			// attempt to autodetect
			vars.fullWidth = Math.abs( $parent.width() - vars.tableWidth ) < 20;

			/*
			// Hacky method to determine if table width is set to 'auto'
			// http://stackoverflow.com/a/20892048/145346
			if ( !vars.fullWidth ) {
				tmp = $table.width();
				$header = $table.wrap('<span>').parent(); // temp variable
				storedSizes = parseInt( $table.css( 'margin-left' ), 10 ) || 0;
				$table.css( 'margin-left', storedSizes + 50 );
				vars.tableWidth = $header.width() > tmp ? 'auto' : tmp;
				$table.css( 'margin-left', storedSizes ? storedSizes : '' );
				$header = null;
				$table.unwrap('<span>');
			}
			*/

			if ( vars.useStorage && vars.overflow ) {
				// save table width
				ts.storage( c.table, 'tablesorter-table-original-css-width', vars.tableWidth );
				tmp = ts.storage( c.table, 'tablesorter-table-resized-width' ) || 'auto';
				ts.resizable.setWidth( $table, tmp, true );
			}
			wo.resizable_vars.storedSizes = storedSizes = ( vars.useStorage ?
				ts.storage( c.table, ts.css.resizableStorage ) :
				[] ) || [];
			ts.resizable.setWidths( c, wo, storedSizes );
			ts.resizable.updateStoredSizes( c, wo );

			wo.$resizable_container = $( '<div class="' + ts.css.resizableContainer + '">' )
				.css({ top : marginTop })
				.insertBefore( $table );
			// add container
			for ( column = 0; column < c.columns; column++ ) {
				$header = c.$headerIndexed[ column ];
				tmp = ts.getColumnData( c.table, c.headers, column );
				noResize = ts.getData( $header, tmp, 'resizable' ) === 'false';
				if ( !noResize ) {
					$( '<div class="' + ts.css.resizableHandle + '">' )
						.appendTo( wo.$resizable_container )
						.attr({
							'data-column' : column,
							'unselectable' : 'on'
						})
						.data( 'header', $header )
						.bind( 'selectstart', false );
				}
			}
			ts.resizable.setHandlePosition( c, wo );
			ts.resizable.bindings( c, wo );
		},

		updateStoredSizes : function( c, wo ) {
			var column, $header,
				len = c.columns,
				vars = wo.resizable_vars;
			vars.storedSizes = [];
			for ( column = 0; column < len; column++ ) {
				$header = c.$headerIndexed[ column ];
				vars.storedSizes[ column ] = $header.is(':visible') ? $header.width() : 0;
			}
		},

		setWidth : function( $el, width, overflow ) {
			// overflow tables need min & max width set as well
			$el.css({
				'width' : width,
				'min-width' : overflow ? width : '',
				'max-width' : overflow ? width : ''
			});
		},

		setWidths : function( c, wo, storedSizes ) {
			var column, $temp,
				vars = wo.resizable_vars,
				$extra = $( c.namespace + '_extra_headers' ),
				$col = c.$table.children( 'colgroup' ).children( 'col' );
			storedSizes = storedSizes || vars.storedSizes || [];
			// process only if table ID or url match
			if ( storedSizes.length ) {
				for ( column = 0; column < c.columns; column++ ) {
					// set saved resizable widths
					ts.resizable.setWidth( c.$headerIndexed[ column ], storedSizes[ column ], vars.overflow );
					if ( $extra.length ) {
						// stickyHeaders needs to modify min & max width as well
						$temp = $extra.eq( column ).add( $col.eq( column ) );
						ts.resizable.setWidth( $temp, storedSizes[ column ], vars.overflow );
					}
				}
				$temp = $( c.namespace + '_extra_table' );
				if ( $temp.length && !ts.hasWidget( c.table, 'scroller' ) ) {
					ts.resizable.setWidth( $temp, c.$table.outerWidth(), vars.overflow );
				}
			}
		},

		setHandlePosition : function( c, wo ) {
			var startPosition,
				hasScroller = ts.hasWidget( c.table, 'scroller' ),
				tableHeight = c.$table.height(),
				$handles = wo.$resizable_container.children(),
				handleCenter = Math.floor( $handles.width() / 2 );

			if ( hasScroller ) {
				tableHeight = 0;
				c.$table.closest( '.' + ts.css.scrollerWrap ).children().each(function(){
					var $this = $(this);
					// center table has a max-height set
					tableHeight += $this.filter('[style*="height"]').length ? $this.height() : $this.children('table').height();
				});
			}
			// subtract out table left position from resizable handles. Fixes #864
			startPosition = c.$table.position().left;
			$handles.each( function() {
				var $this = $(this),
					column = parseInt( $this.attr( 'data-column' ), 10 ),
					columns = c.columns - 1,
					$header = $this.data( 'header' );
				if ( !$header ) { return; } // see #859
				if ( !$header.is(':visible') ) {
					$this.hide();
				} else if ( column < columns || column === columns && wo.resizable_addLastColumn ) {
					$this.css({
						display: 'inline-block',
						height : tableHeight,
						left : $header.position().left - startPosition + $header.outerWidth() - handleCenter
					});
				}
			});
		},

		// prevent text selection while dragging resize bar
		toggleTextSelection : function( c, wo, toggle ) {
			var namespace = c.namespace + 'tsresize';
			wo.resizable_vars.disabled = toggle;
			$( 'body' ).toggleClass( ts.css.resizableNoSelect, toggle );
			if ( toggle ) {
				$( 'body' )
					.attr( 'unselectable', 'on' )
					.bind( 'selectstart' + namespace, false );
			} else {
				$( 'body' )
					.removeAttr( 'unselectable' )
					.unbind( 'selectstart' + namespace );
			}
		},

		bindings : function( c, wo ) {
			var namespace = c.namespace + 'tsresize';
			wo.$resizable_container.children().bind( 'mousedown', function( event ) {
				// save header cell and mouse position
				var column,
					vars = wo.resizable_vars,
					$extras = $( c.namespace + '_extra_headers' ),
					$header = $( event.target ).data( 'header' );

				column = parseInt( $header.attr( 'data-column' ), 10 );
				vars.$target = $header = $header.add( $extras.filter('[data-column="' + column + '"]') );
				vars.target = column;

				// if table is not as wide as it's parent, then resize the table
				vars.$next = event.shiftKey || wo.resizable_targetLast ?
					$header.parent().children().not( '.resizable-false' ).filter( ':last' ) :
					$header.nextAll( ':not(.resizable-false)' ).eq( 0 );

				column = parseInt( vars.$next.attr( 'data-column' ), 10 );
				vars.$next = vars.$next.add( $extras.filter('[data-column="' + column + '"]') );
				vars.next = column;

				vars.mouseXPosition = event.pageX;
				ts.resizable.updateStoredSizes( c, wo );
				ts.resizable.toggleTextSelection(c, wo, true );
			});

			$( document )
				.bind( 'mousemove' + namespace, function( event ) {
					var vars = wo.resizable_vars;
					// ignore mousemove if no mousedown
					if ( !vars.disabled || vars.mouseXPosition === 0 || !vars.$target ) { return; }
					if ( wo.resizable_throttle ) {
						clearTimeout( vars.timer );
						vars.timer = setTimeout( function() {
							ts.resizable.mouseMove( c, wo, event );
						}, isNaN( wo.resizable_throttle ) ? 5 : wo.resizable_throttle );
					} else {
						ts.resizable.mouseMove( c, wo, event );
					}
				})
				.bind( 'mouseup' + namespace, function() {
					if (!wo.resizable_vars.disabled) { return; }
					ts.resizable.toggleTextSelection( c, wo, false );
					ts.resizable.stopResize( c, wo );
					ts.resizable.setHandlePosition( c, wo );
				});

			// resizeEnd event triggered by scroller widget
			$( window ).bind( 'resize' + namespace + ' resizeEnd' + namespace, function() {
				ts.resizable.setHandlePosition( c, wo );
			});

			// right click to reset columns to default widths
			c.$table
				.bind( 'columnUpdate' + namespace, function() {
					ts.resizable.setHandlePosition( c, wo );
				})
				.find( 'thead:first' )
				.add( $( c.namespace + '_extra_table' ).find( 'thead:first' ) )
				.bind( 'contextmenu' + namespace, function() {
					// $.isEmptyObject() needs jQuery 1.4+; allow right click if already reset
					var allowClick = wo.resizable_vars.storedSizes.length === 0;
					ts.resizableReset( c.table );
					ts.resizable.setHandlePosition( c, wo );
					wo.resizable_vars.storedSizes = [];
					return allowClick;
				});

		},

		mouseMove : function( c, wo, event ) {
			if ( wo.resizable_vars.mouseXPosition === 0 || !wo.resizable_vars.$target ) { return; }
			// resize columns
			var column,
				total = 0,
				vars = wo.resizable_vars,
				$next = vars.$next,
				tar = vars.storedSizes[ vars.target ],
				leftEdge = event.pageX - vars.mouseXPosition;
			if ( vars.overflow ) {
				if ( tar + leftEdge > 0 ) {
					vars.storedSizes[ vars.target ] += leftEdge;
					ts.resizable.setWidth( vars.$target, vars.storedSizes[ vars.target ], true );
					// update the entire table width
					for ( column = 0; column < c.columns; column++ ) {
						total += vars.storedSizes[ column ];
					}
					ts.resizable.setWidth( c.$table.add( $( c.namespace + '_extra_table' ) ), total );
				}
				if ( !$next.length ) {
					// if expanding right-most column, scroll the wrapper
					vars.$wrap[0].scrollLeft = c.$table.width();
				}
			} else if ( vars.fullWidth ) {
				vars.storedSizes[ vars.target ] += leftEdge;
				vars.storedSizes[ vars.next ] -= leftEdge;
				ts.resizable.setWidths( c, wo );
			} else {
				vars.storedSizes[ vars.target ] += leftEdge;
				ts.resizable.setWidths( c, wo );
			}
			vars.mouseXPosition = event.pageX;
			// dynamically update sticky header widths
			c.$table.triggerHandler('stickyHeadersUpdate');
		},

		stopResize : function( c, wo ) {
			var vars = wo.resizable_vars;
			ts.resizable.updateStoredSizes( c, wo );
			if ( vars.useStorage ) {
				// save all column widths
				ts.storage( c.table, ts.css.resizableStorage, vars.storedSizes );
				ts.storage( c.table, 'tablesorter-table-resized-width', c.$table.width() );
			}
			vars.mouseXPosition = 0;
			vars.$target = vars.$next = null;
			// will update stickyHeaders, just in case, see #912
			c.$table.triggerHandler('stickyHeadersUpdate');
		}
	};

	// this widget saves the column widths if
	// $.tablesorter.storage function is included
	// **************************
	ts.addWidget({
		id: 'resizable',
		priority: 40,
		options: {
			resizable : true, // save column widths to storage
			resizable_addLastColumn : false,
			resizable_widths : [],
			resizable_throttle : false, // set to true (5ms) or any number 0-10 range
			resizable_targetLast : false,
			resizable_fullWidth : null
		},
		init: function(table, thisWidget, c, wo) {
			ts.resizable.init( c, wo );
		},
		remove: function( table, c, wo, refreshing ) {
			if (wo.$resizable_container) {
				var namespace = c.namespace + 'tsresize';
				c.$table.add( $( c.namespace + '_extra_table' ) )
					.removeClass('hasResizable')
					.children( 'thead' )
					.unbind( 'contextmenu' + namespace );

				wo.$resizable_container.remove();
				ts.resizable.toggleTextSelection( c, wo, false );
				ts.resizableReset( table, refreshing );
				$( document ).unbind( 'mousemove' + namespace + ' mouseup' + namespace );
			}
		}
	});

	ts.resizableReset = function( table, refreshing ) {
		$( table ).each(function(){
			var index, $t,
				c = this.config,
				wo = c && c.widgetOptions,
				vars = wo.resizable_vars;
			if ( table && c && c.$headerIndexed.length ) {
				// restore the initial table width
				if ( vars.overflow && vars.tableWidth ) {
					ts.resizable.setWidth( c.$table, vars.tableWidth, true );
					if ( vars.useStorage ) {
						ts.storage( table, 'tablesorter-table-resized-width', 'auto' );
					}
				}
				for ( index = 0; index < c.columns; index++ ) {
					$t = c.$headerIndexed[ index ];
					if ( wo.resizable_widths && wo.resizable_widths[ index ] ) {
						ts.resizable.setWidth( $t, wo.resizable_widths[ index ], vars.overflow );
					} else if ( !$t.hasClass( 'resizable-false' ) ) {
						// don't clear the width of any column that is not resizable
						ts.resizable.setWidth( $t, '', vars.overflow );
					}
				}

				// reset stickyHeader widths
				c.$table.triggerHandler( 'stickyHeadersUpdate' );
				if ( ts.storage && !refreshing ) {
					ts.storage( this, ts.css.resizableStorage, {} );
				}
			}
		});
	};

})( jQuery, window );

/*! Widget: saveSort - updated 10/31/2015 (v2.24.0) *//*
* Requires tablesorter v2.16+
* by Rob Garrison
*/
;(function ($) {
	'use strict';
	var ts = $.tablesorter || {};

	// this widget saves the last sort only if the
	// saveSort widget option is true AND the
	// $.tablesorter.storage function is included
	// **************************
	ts.addWidget({
		id: 'saveSort',
		priority: 20,
		options: {
			saveSort : true
		},
		init: function(table, thisWidget, c, wo) {
			// run widget format before all other widgets are applied to the table
			thisWidget.format(table, c, wo, true);
		},
		format: function(table, c, wo, init) {
			var stored, time,
				$table = c.$table,
				saveSort = wo.saveSort !== false, // make saveSort active/inactive; default to true
				sortList = { 'sortList' : c.sortList };
			if (c.debug) {
				time = new Date();
			}
			if ($table.hasClass('hasSaveSort')) {
				if (saveSort && table.hasInitialized && ts.storage) {
					ts.storage( table, 'tablesorter-savesort', sortList );
					if (c.debug) {
						console.log('saveSort widget: Saving last sort: ' + c.sortList + ts.benchmark(time));
					}
				}
			} else {
				// set table sort on initial run of the widget
				$table.addClass('hasSaveSort');
				sortList = '';
				// get data
				if (ts.storage) {
					stored = ts.storage( table, 'tablesorter-savesort' );
					sortList = (stored && stored.hasOwnProperty('sortList') && $.isArray(stored.sortList)) ? stored.sortList : '';
					if (c.debug) {
						console.log('saveSort: Last sort loaded: "' + sortList + '"' + ts.benchmark(time));
					}
					$table.bind('saveSortReset', function(event) {
						event.stopPropagation();
						ts.storage( table, 'tablesorter-savesort', '' );
					});
				}
				// init is true when widget init is run, this will run this widget before all other widgets have initialized
				// this method allows using this widget in the original tablesorter plugin; but then it will run all widgets twice.
				if (init && sortList && sortList.length > 0) {
					c.sortList = sortList;
				} else if (table.hasInitialized && sortList && sortList.length > 0) {
					// update sort change
					ts.sortOn( c, sortList );
				}
			}
		},
		remove: function(table, c) {
			c.$table.removeClass('hasSaveSort');
			// clear storage
			if (ts.storage) { ts.storage( table, 'tablesorter-savesort', '' ); }
		}
	});

})(jQuery);

return $.tablesorter;
}));

$(document).ready(function() {

    $('.collapse').on('shown.bs.collapse', function () {
        $("#collapse"+this.id).removeClass("fa-folder").addClass("fa-folder-open");
        $("#"+this.id).load("/projects/"+this.id+"/expeditions");
        $(this).closest('tr').show();
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $("#collapse"+this.id).removeClass("fa-folder-open").addClass("fa-folder");
        $( "#expeditions"+this.id).html('');
        $(this).closest('tr').hide();
    });

    $(".table-sort").tablesorter({
        // this will apply the bootstrap theme if "uitheme" widget is included
        // the widgetOptions.uitheme is no longer required to be set
        theme : "bootstrap",

        widthFixed: false,

        headerTemplate : '{content} {icon}', // new in v2.7. Needed to add the bootstrap icon!

        // widget code contained in the jquery.tablesorter.widgets.js file
        // use the zebra stripe widget if you plan on hiding any rows (filter widget)
        widgets : [ "uitheme", "zebra" ],

        widgetOptions : {
            // using the default zebra striping class name, so it actually isn't included in the theme variable above
            // this is ONLY needed for bootstrap theming if you are using the filter widget, because rows are hidden
            zebra : ["even", "odd"],
            // reset filters button
            filter_reset : ".reset",
            // extra css class name (string or array) added to the filter element (input or select)
            filter_cssFilter: "form-control",
        }
    });

    $('#add_target').on('click', function() {
        if ($('div.target:first').is(":hidden") ) {
            $('div.target:first').show();
        } else {
            $('div.target:last').after($('div.target:last').clone()
                .find(':input')
                .each(function(){
                    this.name = this.name.replace(/\[(\d+)\]/, function(str,p1){
                        return '[' + (parseInt(p1,10)+1) + ']';
                    });
                })
                .end());
        }
        $('#targetCount').val($("div.target:visible").length);
    });
    $('#remove_target').click(function() {
        if ($('div.target').length == 1) {
            $('div.target').hide();
        } else {
            $('div.target:last').remove();
        }
        $('#targetCount').val($("div.target:visible").length);
    });

    $( "#form-data" ).validate({
        rules: {
            dwc: {
                required: true,
                extension: "zip"
            }
        }
    });
    $( "#form-recordset" ).validate({
        rules: {
            recordset: {
                required: true
            }
        }
    });
    $( "#form-data-url" ).validate({
        rules: {
            "data-url": {
                required: true
            }
        }
    });
    $( "#form-trans" ).validate({
        rules: {
            transcription: {
                required: true,
                extension: "csv"
            }
        }
    });

    $("#userGroup").change(function(){
        this.value == 'new' ? $("#groupInput").show() : $("#groupInput").hide();
    });
    if ($("#userGroup").length > 0){
        $("#userGroup").val() == 'new' ? $("#groupInput").show() : $("#groupInput").hide();
    }

    $('#selectall').click(function(event) {  //on click
        if(this.checked) { // check select status
            $('.checkbox-all').each(function() { //loop through each checkbox
                this.checked = true;  //select all checkboxes with class "checkbox1"
            });
        }else{
            $('.checkbox-all').each(function() { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"
            });
        }
    });

    /*
     $('input[name="user"]').change(function(){
     $('input[class="userperm"]:checkbox').prop('checked', this.checked);
     });
     $('input[name="group"]').change(function(){
     $('input[class="groupperm"]:checkbox').prop('checked', this.checked);
     });
     $('input[name="project"]').change(function(){
     $('input[class="projectperm"]:checkbox').prop('checked', this.checked);
     });
     $('input[name="navigation"]').change(function(){
     $('input[class="navigationperm"]:checkbox').prop('checked', this.checked);
     });
     $('input[name="permission"]').change(function(){
     $('input[class="permissionperm"]:checkbox').prop('checked', this.checked);
     });
     */
});

$(function(){
    $('[data-method]').not(".disabled").append(function(){
            var methodForm = "\n"
            methodForm += "<form action='"+$(this).attr('href')+"' method='POST' style='display:none'>\n"
            methodForm += " <input type='hidden' name='_method' value='"+$(this).attr('data-method')+"'>\n"
            if ($(this).attr('data-token'))
            {
                methodForm +="<input type='hidden' name='_token' value='"+$(this).attr('data-token')+"'>\n"
            }
            methodForm += "</form>\n"
            return methodForm
        })
        .removeAttr('href')
        .attr('onclick',' if ($(this).hasClass(\'action_confirm\')) { if(confirm("Are you sure you want to do this?")) { $(this).find("form").submit(); } } else { $(this).find("form").submit(); }');
});
$.jgrid.defaults.width = 780;
$.jgrid.defaults.responsive = true;
$.jgrid.defaults.styleUI = 'Bootstrap';
$.jgrid.cellattr = $.jgrid.cellattr || {};
$.extend($.jgrid.cellattr, {
    addDataAttr: function (rowId, cellVal, rawObject, cm, rdata) {
        return 'data-toggle="modal" data-target="#jqGridModal"';
    }
});

var Grid = {};

$(function () {
    'use strict';
    Grid.loadSate = false;
    Grid.id = $(".jgrid").prop('id');
    Grid.obj = $("#" + Grid.id);
    Grid.project = $("#projectId").val();
    Grid.subjectCountObj = $('#subjectCount');
    Grid.subjectIdsObj = $('#subjectIds');
    Grid.subjectIds = Grid.subjectIdsObj.length > 0 ?
        (Grid.subjectIdsObj.val().length == 0 ? [] : Grid.subjectIdsObj.val().split(',')) : '';
    $.ajax({
        type: "GET",
        url: "/projects/" + Grid.project + "/grids/load",
        dataType: "json",
        success: jqBuildGrid()
    });
});

function jqBuildGrid() {

    return function (result) {
        var cm = result.colModel;
        mapFormatter(cm);
        var url = $('#url').val();
        Grid.obj.jqGrid({
            jsonReader: {
                repeatitems: false,
                root: "rows",
                page: "page",
                total: "total",
                records: "records",
                cell: "",
                id: "_id"
            },
            url: url,
            mtype: "GET",
            datatype: "json",
            page: 1,
            colNames: result.colNames,
            colModel: cm,
            rowNum: 10,
            gridview: true,
            rowList: [10, 20, 50, 100],
            multiSort: true,
            sortable: true,
            sortname: 'id',
            sortorder: 'asc',
            mulitpleSearch: true,
            multiselect: true,
            multiboxonly: true,
            viewrecords: true,
            shrinkToFit: true,
            autowidth: true,
            storeNavOptions: true,
            height: '100%',
            pager: "#pager",
            beforeSelectRow: function (id, event) {
                return handleCellSelect(id, event);
            },
            onSelectRow: function (id, isSelected) {
                if (switchCbColumn()) return;
                /*
                 var elem = document.activeElement;
                 if (elem.id) {   // the checkbox has an id, so check for it
                 if (!isSelected){
                 // unselect the select-all if any row is deselected
                 $('#cb_' + Grid.id).attr('checked',false);
                 }
                 } else {
                 // ensure that the row is not checked.
                 $('#' + Grid.id).setSelection(id, false);
                 }
                 */

                updateIdsOfSelectedRows(id, isSelected);
            },
            onSelectAll: function (rowIds, isSelected) {
                if (switchCbColumn()) return;

                var i, count, id;
                for (i = 0, count = rowIds.length; i < count; i++) {
                    id = rowIds[i];
                    updateIdsOfSelectedRows(id, isSelected);
                }
            },
            loadComplete: function () {
                setPreviewLinks();

                if(switchCbColumn() || Grid.loadSate) return;

                setMultipleSelect();
            }

        }).navGrid("#pager", {
                search: true, // show search button on the toolbar
                add: false,
                edit: false,
                del: false,
                refresh: true,
                closeOnEscape: true,
                closeAfterSearch: true,
                overlay: 0
            },
            {}, // edit options
            {}, // add options
            {}, // delete options
            {
                width: 600,
                multipleSearch: true,
                recreateFilter: true
            } // search options - define multiple search
        ).navButtonAdd('#pager', {
            caption: '',
            buttonicon: "glyphicon glyphicon-list",
            title: "Choose columns",
            onClickButton: function () {
                Grid.obj.jqGrid('columnChooser', {
                    dialog_opts: {
                        modal: true,
                        width: 700,
                        show: 'blind',
                        hide: 'explode'
                    },
                    done: function (perm) {
                        if (perm) {
                            this.jqGrid("remapColumns", perm, true);
                        }
                    }
                });
            }
        }).navButtonAdd('#pager', {
            caption: '',
            buttonicon: "glyphicon glyphicon-remove",
            title: "Clear saved grid's settings",
            onClickButton: function () {
                localStorage.clear();
                window.location.reload();
            }
        });

        $('#savestate').click(function (event) {
            event.preventDefault();
            $.jgrid.saveState(Grid.id);
        });

        $('#loadstate').click(function (event) {
            event.preventDefault();
            Grid.loadSate = true;
            $.jgrid.loadState(Grid.id);
            setMultipleSelect();
        });
    };
}

/**
 * Switch checkbox column
 * Must re-declare grid id object for loadState
 * @returns {boolean}
 */
function switchCbColumn() {
    if ($("#showCb").val() == 0) {
        $('#' + Grid.id).jqGrid('hideCol', 'cb');
        return true;
    }

    return false;
}

/**
 * Handle select event for preview cells
 * @param id
 * @param event
 * @returns {boolean}
 */
function handleCellSelect(id, event){
    if (event.target.className == 'ocrPreview') {
        $('#model-body').html($(event.target).text());
        return false;
    }

    if(event.target.className == 'thumbPreview') {
        return false;
    }

    return true;
}

/**
 * Map formatter
 * @param column
 */
function mapFormatter(column) {
    var functionsMapping = {
        "imagePreview": function (cellValue, opts, rowObjects) {
            var url = encodeURIComponent(cellValue);
            return '<a href="' + cellValue + '" target="_new">View Image</a>'
                + '<a href="/images/preview?url=' + url + '" class="thumb-view">View Thumb</a>'
                + '<a href="' + cellValue + '" class="url-view">View Url</a>';
        }
    };

    for (var i = 0; i < column.length; i++) {
        var col = column[i];
        if (col.hasOwnProperty("formatter") &&
            functionsMapping.hasOwnProperty(col.formatter)) {
            col.formatter = functionsMapping[col.formatter];
        }
    }
}

/**
 * Set selected rows
 * Must re-declare grid object for loadState and handle it
 * differently due to ids not being
 */
function setMultipleSelect() {
    var $grid = $('#' + Grid.id);
    var ids = $grid.jqGrid('getDataIDs');
    for (var x = 0; x < ids.length; x++) {
        if ( ! Grid.loadSate) {
            var index = $.inArray(ids[x], Grid.subjectIds);
            if (index >= 0) {
                var row = $grid.jqGrid('getRowData', ids[x]);
                if (row.expedition_ids == "Yes") {
                    $grid.setSelection(ids[x]);
                }
            }
        } else {
            if ($('#' + ids[x]).hasClass("success")) {
                $('#' + ids[x] + ' input[type=checkbox]').prop('checked', true);
                updateIdsOfSelectedRows(ids[x], true);
            }
        }
    }
    Grid.loadSate = false;
}

/**
 * Update ids for selected rows
 * @param id
 * @param isSelected
 */
function updateIdsOfSelectedRows(id, isSelected) {
    var index = $.inArray(id, Grid.subjectIds);
    if (!isSelected && index >= 0) {
        Grid.subjectIds = $.grep(Grid.subjectIds, function (val) {
            return val != id;
        });
    } else if (index < 0) {
        Grid.subjectIds.push(id);
    }
    Grid.subjectIdsObj.val(Grid.subjectIds);
    Grid.subjectCountObj.html(Grid.subjectIds.length);
}

/**
 * Set preview links
 * Must re-declare grid object id for loadState
 */
function setPreviewLinks() {
    $('#' + Grid.id).on("click", 'a.thumb-view', function (event) {
        event.preventDefault();
        $.ajax({
                url: $(event.target).attr('href'),
                beforeSend: function (xhr) {
                    $('.loading').show();
                }
            })
            .done(function (data) {
                $('#model-body').html(data);
                $('.loading').hide();
                $('#jqGridModal').modal('show');
            });
    }).on("click", 'a.url-view', function (event) {
        event.preventDefault();
        $('#model-body').html($(event.target).attr('href'));
        $('#jqGridModal').modal('show');
    });
}

//# sourceMappingURL=app.js.map