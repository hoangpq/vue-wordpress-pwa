webpackJsonp([4],{101:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("vwp-single",{attrs:{single:e.single}}),e._v(" "),n("vwp-comment")],1)},staticRenderFns:[]}},18:function(e,t,n){var r=n(29)(n(72),n(101),null,null);e.exports=r.exports},29:function(e,t){e.exports=function(e,t,n,r){var s,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(s=e,i=e.default);var o="function"==typeof i?i.options:i;if(t&&(o.render=t.render,o.staticRenderFns=t.staticRenderFns),n&&(o._scopeId=n),r){var l=o.computed||(o.computed={});Object.keys(r).forEach(function(e){var t=r[e];l[e]=function(){return t}})}return{esModule:s,exports:i,options:o}}},30:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},s=0;s<this.length;s++){var i=this[s][0];"number"==typeof i&&(r[i]=!0)}for(s=0;s<t.length;s++){var a=t[s];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},31:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=u[n.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](n.parts[s]);for(;s<n.parts.length;s++)r.parts.push(a(n.parts[s]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],s=0;s<n.parts.length;s++)i.push(a(n.parts[s]));u[n.id]={id:n.id,refs:1,parts:i}}}}function s(e,t){for(var n=[],r={},s=0;s<t.length;s++){var i=t[s],a=i[0],o=i[1],l=i[2],c=i[3],u={css:o,media:l,sourceMap:c};r[a]?(u.id=e+":"+r[a].parts.length,r[a].parts.push(u)):(u.id=e+":0",n.push(r[a]={id:a,parts:[u]}))}return n}function i(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function a(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]'),s=null!=r;if(s&&v)return g;if(h){var a=p++;r=f||(f=i()),t=o.bind(null,r,a,!1),n=o.bind(null,r,a,!0)}else r=r||i(),t=l.bind(null,r),n=function(){r.parentNode.removeChild(r)};return s||t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function o(e,t,n,r){var s=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,s);else{var i=document.createTextNode(s),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function l(e,t){var n=t.css,r=t.media,s=t.sourceMap;if(r&&e.setAttribute("media",r),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s=n(33),u={},d=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,v=!1,g=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var i=s(e,t);return r(i),function(t){for(var n=[],a=0;a<i.length;a++){var o=i[a],l=u[o.id];l.refs--,n.push(l)}t?(i=s(e,t),r(i)):i=[];for(var a=0;a<n.length;a++){var l=n[a];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete u[l.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},33:function(e,t){e.exports=function(e,t){for(var n=[],r={},s=0;s<t.length;s++){var i=t[s],a=i[0],o=i[1],l=i[2],c=i[3],u={id:e+":"+s,css:o,media:l,sourceMap:c};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}},40:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"vwp-comment",created:function(){n.e(11).then(function(){n(39),setTimeout(function(){DISQUS&&DISQUS.reset({reload:!0,config:function(){this.page.identifier=window.location.pathname,this.page.url=window.location}})},0)}.bind(null,n)).catch(n.oe)}}},43:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"vwp-single",props:["single"]}},45:function(e,t,n){t=e.exports=n(30)(),t.push([e.i,"#vwp-single .single-content{background-color:#fff;padding:20px;display:inline-block;width:100%}#vwp-single .single-back{margin-right:1rem}#vwp-single .single-date{font-style:italic;font-size:.75rem}",""])},48:function(e,t,n){var r=n(29)(n(40),n(53),null,null);e.exports=r.exports},51:function(e,t,n){n(58);var r=n(29)(n(43),n(55),null,null);e.exports=r.exports},53:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"disqus_thread"}})},staticRenderFns:[]}},55:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"vwp-single"}},[e.single.content?n("div",[n("router-link",{staticClass:"single-back button is-pulled-left",attrs:{to:"/category/"+e.single.pure_taxonomies.categories[0].slug+"/"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"icon-left-big"})]),e._v(" "),n("span",[e._v("Back")])]),e._v(" "),n("h1",{domProps:{innerHTML:e._s(e.single.title.rendered)}}),e._v(" "),n("div",{staticClass:"single-content card"},[e.single.tags.length>0?n("div",{staticClass:"is-pulled-left"},[n("i",{staticClass:"icon-tags",attrs:{"aria-hidden":"true"}}),e._v(" "),e._l(e.single.pure_taxonomies.tags,function(t){return n("span",{staticClass:"tag"},[e._v("\n          "+e._s(t.name)+"\n        ")])})],2):e._e(),e._v(" "),n("div",{staticClass:"is-pulled-right single-date"},[e._v(e._s(new Date(e.single.date).toDateString()))]),e._v(" "),n("div",{staticClass:"is-clearfix"}),e._v(" "),n("div",{staticClass:"card-content"},[n("div",{domProps:{innerHTML:e._s(e.single.content.rendered)}}),e._v(" "),n("p",{staticClass:"is-clearfix"}),e._v(" "),n("a",{attrs:{href:e.single.rest_api_enabler.Link,target:"_blank"}},[e._v(e._s(e.single.rest_api_enabler.Link))])])])],1):e._e(),e._v(" "),n("div",{staticClass:"is-clearfix"})])},staticRenderFns:[]}},58:function(e,t,n){var r=n(45);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(31)("4202f357",r,!0)},72:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(51),a=n(48);t.default={name:"SingleComponent",components:{VwpSingle:i,VwpComment:a},data:function(){return{slug:"",single:{}}},computed:s({},n.i(r.mapGetters)(["routeParamId"])),created:function(){this.slug=this.routeParamId;var e=this;n.e(9).then(function(){n(32).default.getPost(e,null,e.slug).then(function(t){0!=t.length&&(e.single=t[0])})}.bind(null,n)).catch(n.oe)}}}});