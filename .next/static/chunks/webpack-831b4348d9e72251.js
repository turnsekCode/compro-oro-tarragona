!function(){"use strict";var e,t,r,n,o,u,i,c,a,f,l,s,d={},p={};function h(e){var t=p[e];if(void 0!==t)return t.exports;var r=p[e]={exports:{}},n=!0;try{d[e].call(r.exports,r,r.exports,h),n=!1}finally{n&&delete p[e]}return r.exports}h.m=d,e=[],h.O=function(t,r,n,o){if(r){o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,n,o];return}for(var i=1/0,u=0;u<e.length;u++){for(var r=e[u][0],n=e[u][1],o=e[u][2],c=!0,a=0;a<r.length;a++)i>=o&&Object.keys(h.O).every(function(e){return h.O[e](r[a])})?r.splice(a--,1):(c=!1,o<i&&(i=o));if(c){e.splice(u--,1);var f=n();void 0!==f&&(t=f)}}return t},h.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return h.d(t,{a:t}),t},r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},h.t=function(e,n){if(1&n&&(e=this(e)),8&n||"object"==typeof e&&e&&(4&n&&e.__esModule||16&n&&"function"==typeof e.then))return e;var o=Object.create(null);h.r(o);var u={};t=t||[null,r({}),r([]),r(r)];for(var i=2&n&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach(function(t){u[t]=function(){return e[t]}});return u.default=function(){return e},h.d(o,u),o},h.d=function(e,t){for(var r in t)h.o(t,r)&&!h.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},h.f={},h.e=function(e){return Promise.all(Object.keys(h.f).reduce(function(t,r){return h.f[r](e,t),t},[]))},h.u=function(e){return"static/chunks/"+(634===e?"2c796e83":e)+"."+({442:"7b6c36b0b05f8fb8",545:"b9a40c6454076a52",634:"495fa21cc8f7d842"})[e]+".js"},h.miniCssF=function(e){return"static/css/"+({405:"ad3cde472687a171",442:"0050005cd4e4b43c",888:"28271b3658308f82"})[e]+".css"},h.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),h.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},o="_N_E:",h.l=function(e,t,r,u){if(n[e]){n[e].push(t);return}if(void 0!==r)for(var i,c,a=document.getElementsByTagName("script"),f=0;f<a.length;f++){var l=a[f];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+r){i=l;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,h.nc&&i.setAttribute("nonce",h.nc),i.setAttribute("data-webpack",o+r),i.src=h.tu(e)),n[e]=[t];var s=function(t,r){i.onerror=i.onload=null,clearTimeout(d);var o=n[e];if(delete n[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach(function(e){return e(r)}),t)return t(r)},d=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),c&&document.head.appendChild(i)},h.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},h.tt=function(){return void 0===u&&(u={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(u=trustedTypes.createPolicy("nextjs#bundler",u))),u},h.tu=function(e){return h.tt().createScriptURL(e)},h.p="https://quickgold.es/compro-oro-tarragona/_next/",i=function(e,t,r,n){var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(u){if(o.onerror=o.onload=null,"load"===u.type)r();else{var i=u&&("load"===u.type?"missing":u.type),c=u&&u.target&&u.target.href||t,a=Error("Loading CSS chunk "+e+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=i,a.request=c,o.parentNode.removeChild(o),n(a)}},o.href=t,document.head.appendChild(o),o},c=function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===e||u===t))return o}for(var i=document.getElementsByTagName("style"),n=0;n<i.length;n++){var o=i[n],u=o.getAttribute("data-href");if(u===e||u===t)return o}},a={272:0},h.f.miniCss=function(e,t){a[e]?t.push(a[e]):0!==a[e]&&({442:1})[e]&&t.push(a[e]=new Promise(function(t,r){var n=h.miniCssF(e),o=h.p+n;if(c(n,o))return t();i(e,o,t,r)}).then(function(){a[e]=0},function(t){throw delete a[e],t}))},f={272:0},h.f.j=function(e,t){var r=h.o(f,e)?f[e]:void 0;if(0!==r){if(r)t.push(r[2]);else if(272!=e){var n=new Promise(function(t,n){r=f[e]=[t,n]});t.push(r[2]=n);var o=h.p+h.u(e),u=Error();h.l(o,function(t){if(h.o(f,e)&&(0!==(r=f[e])&&(f[e]=void 0),r)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,r[1](u)}},"chunk-"+e,e)}else f[e]=0}},h.O.j=function(e){return 0===f[e]},l=function(e,t){var r,n,o=t[0],u=t[1],i=t[2],c=0;if(o.some(function(e){return 0!==f[e]})){for(r in u)h.o(u,r)&&(h.m[r]=u[r]);if(i)var a=i(h)}for(e&&e(t);c<o.length;c++)n=o[c],h.o(f,n)&&f[n]&&f[n][0](),f[n]=0;return h.O(a)},(s=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).forEach(l.bind(null,0)),s.push=l.bind(null,s.push.bind(s))}();