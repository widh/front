(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"5+rW":function(e,t,n){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function a(e,t){try{return decodeURIComponent(e.join(""))}catch(o){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],a(n),a(r))}function i(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=a(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var n={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},r=o.exec(e);r;){try{n[r[0]]=decodeURIComponent(r[0])}catch(t){var a=i(r[0]);a!==r[0]&&(n[r[0]]=a)}r=o.exec(e)}n["%C2"]="\ufffd";for(var s=Object.keys(n),c=0;c<s.length;c++){var u=s[c];e=e.replace(new RegExp(u,"g"),n[u])}return e}(e)}}},"77iF":function(e,t,n){"use strict";t.a={gIsland:{path:"/images/cryingIsland.gif",alt:"Crying Long Island from Azur Lane"},gShiratsuyu:{path:"/images/sleepingShiratsuyu.gif",alt:"Sleeping Shiratsuyu from Azur Lane"},gEnterprise:{path:"/images/thinkingEnterprise.gif",alt:"Thinking Enterprise sitting on a box from Azur Lane"}}},"7Yeg":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n("BdxU")}])},BdxU:function(e,t,n){"use strict";n.r(t);var r=n("mXGw"),o=n.n(r),a=n("NWgQ"),i=n.n(a),s=n("ZQo5"),c=n("77iF"),u=o.a.createElement;t.default=function(){var e=Object(r.useState)(u(o.a.Fragment,null)),t=e[0],n=e[1];return Object(r.useEffect)((function(){var e="",t="",r="";try{e=i.a.parse(window.location.search).link.toString()}catch(o){e=""}e&&e.length>0?(t="go.wldh.org/".concat(e),r="https://go.wldh.org/".concat(e)):(t="www.wldh.org".concat(window.location.pathname),r="https://www.wldh.org".concat(window.location.pathname)),n(u("a",{href:r},t)),document.querySelector('[data-visible="transparent"]').dataset.visible="opaque"}),[]),u(s.a,{title:"Huh... I don't know.",detailedTitle:"The page that you're looking for does not exist.",message:"I've never done this before... How about typing whole the URL again?",image:c.a.gIsland,metaImage:"/images/banner-404.png",favicoff:!0},u("span",{"data-visible":"transparent"},"Requested URL:",u("br",null),"\u2002\u2002\u2002",t))}},NWgQ:function(e,t,n){"use strict";const r=n("X7EK"),o=n("5+rW"),a=n("vetT");function i(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function s(e,t){return t.decode?o(e):e}function c(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function u(e){const t=(e=c(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function l(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function f(e,t){const n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,r)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return(e,n,r)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"comma":return(e,t,n)=>{const r="string"===typeof t&&t.split("").indexOf(",")>-1?t.split(","):t;n[e]=r};default:return(e,t,n)=>{void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",parseNumbers:!1,parseBooleans:!1},t)),r=Object.create(null);if("string"!==typeof e)return r;if(!(e=e.trim().replace(/^[?#&]/,"")))return r;for(const o of e.split("&")){let[e,i]=a(t.decode?o.replace(/\+/g," "):o,"=");i=void 0===i?null:s(i,t),n(s(e,t),i,r)}for(const o of Object.keys(r)){const e=r[o];if("object"===typeof e&&null!==e)for(const n of Object.keys(e))e[n]=l(e[n],t);else r[o]=l(e,t)}return!1===t.sort?r:(!0===t.sort?Object.keys(r).sort():Object.keys(r).sort(t.sort)).reduce((e,t)=>{const n=r[t];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"===typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(n):e[t]=n,e},Object.create(null))}t.extract=u,t.parse=f,t.stringify=(e,t)=>{if(!e)return"";const n=function(e){switch(e.arrayFormat){case"index":return t=>(n,r)=>{const o=n.length;return void 0===r||e.skipNull&&null===r?n:null===r?[...n,[i(t,e),"[",o,"]"].join("")]:[...n,[i(t,e),"[",i(o,e),"]=",i(r,e)].join("")]};case"bracket":return t=>(n,r)=>void 0===r||e.skipNull&&null===r?n:null===r?[...n,[i(t,e),"[]"].join("")]:[...n,[i(t,e),"[]=",i(r,e)].join("")];case"comma":return t=>(n,r)=>null===r||void 0===r||0===r.length?n:0===n.length?[[i(t,e),"=",i(r,e)].join("")]:[[n,i(r,e)].join(",")];default:return t=>(n,r)=>void 0===r||e.skipNull&&null===r?n:null===r?[...n,i(t,e)]:[...n,[i(t,e),"=",i(r,e)].join("")]}}(t=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},t)),r=Object.assign({},e);if(t.skipNull)for(const a of Object.keys(r))void 0!==r[a]&&null!==r[a]||delete r[a];const o=Object.keys(r);return!1!==t.sort&&o.sort(t.sort),o.map(r=>{const o=e[r];return void 0===o?"":null===o?i(r,t):Array.isArray(o)?o.reduce(n(r),[]).join("&"):i(r,t)+"="+i(o,t)}).filter(e=>e.length>0).join("&")},t.parseUrl=(e,t)=>({url:c(e).split("?")[0]||"",query:f(u(e),t)})},X7EK:function(e,t,n){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)},ZQo5:function(e,t,n){"use strict";var r=n("mXGw"),o=n.n(r),a=n("WLOD"),i=n("mfKp"),s=n.n(i),c=o.a.createElement;t.a=function(e){var t=e.title,n=e.detailedTitle,o=e.message,i=e.image,u=e.children,l=e.metaImage,f=e.favicoff,d=e.requiredFeatures,p=Object(r.useState)("translucent"),g=p[0],m=p[1];return Object(r.useEffect)((function(){var e=document.querySelector("header h2"),t=document.querySelector("footer img"),n=function(){e.offsetTop>t.offsetTop&&e.offsetLeft+e.offsetWidth-50>t.offsetLeft?"translucent"!==g&&m("translucent"):"opaque"!==g&&m("opaque")};window.addEventListener("resize",n),n()}),[g]),c(a.a,{title:t,description:n,image:l,favicoff:f,className:s.a.wrapper,requiredFeatures:d},c("header",{className:s.a.header},c("h1",{dangerouslySetInnerHTML:{__html:t}}),c("h2",{dangerouslySetInnerHTML:{__html:n}}),c("span",{dangerouslySetInnerHTML:{__html:o}})),c("main",{className:s.a.main},u),c("footer",{className:s.a.footer},c("img",{className:s.a.blhx,src:i.path,alt:i.alt,"data-visible":g})))}},vetT:function(e,t,n){"use strict";e.exports=(e,t)=>{if("string"!==typeof e||"string"!==typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const n=e.indexOf(t);return-1===n?[e]:[e.slice(0,n),e.slice(n+t.length)]}}},[["7Yeg",0,1,2]]]);