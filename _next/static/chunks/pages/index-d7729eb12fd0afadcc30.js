_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"8oxB":function(e,n){var t,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"===typeof clearTimeout?clearTimeout:c}catch(e){r=c}}();var a,l=[],s=!1,f=-1;function d(){s&&a&&(s=!1,a.length?l=a.concat(l):f=-1,l.length&&p())}function p(){if(!s){var e=u(d);s=!0;for(var n=l.length;n;){for(a=l,l=[];++f<n;)a&&a[f].run();f=-1,n=l.length}a=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(n){return r.call(this,e)}}}(e)}}function h(e,n){this.fun=e,this.array=n}function v(){}o.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];l.push(new h(e,n)),1!==l.length||s||u(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},RNiq:function(e,n,t){"use strict";t.r(n),function(e){var r=t("nKUr"),o=t("YFqc"),i=t.n(o);n.default=function(){return Object(r.jsxs)("div",{children:["Hello World. ",Object(r.jsx)(i.a,{href:"/about",as:e.env.BACKEND_URL+"/about",children:Object(r.jsx)("a",{children:"About"})})]})}}.call(this,t("8oxB"))},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var i=o(t("q1tI")),c=t("elyg"),u=t("nOHt"),a=t("vNVm"),l={};function s(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,u.useRouter)(),o=t&&t.pathname||"/",f=i.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),i=t[0],u=t[1];return{href:i,as:e.as?(0,c.resolveHref)(o,e.as):u||i}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,m=e.shallow,y=e.scroll,w=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var b=i.Children.only(h),g=b&&"object"===typeof b&&b.ref,T=(0,a.useIntersection)({rootMargin:"200px"}),E=r(T,2),L=E[0],_=E[1],M=i.default.useCallback((function(e){L(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,L]);(0,i.useEffect)((function(){var e=_&&n&&(0,c.isLocalURL)(d),r="undefined"!==typeof w?w:t&&t.locale,o=l[d+"%"+p+(r?"%"+r:"")];e&&!o&&s(t,d,p,{locale:r})}),[p,d,_,w,n,t]);var N={ref:M,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,i,u,a){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:i,locale:a,scroll:u}).then((function(e){e&&u&&document.body.focus()})))}(e,t,d,p,v,m,y,w)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),s(t,d,p,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var R="undefined"!==typeof w?w:t&&t.locale,k=t&&t.isLocaleDomain&&(0,c.getDomainLocale)(p,R,t&&t.locales,t&&t.domainLocales);N.href=k||(0,c.addBasePath)((0,c.addLocale)(p,R,t&&t.defaultLocale))}return i.default.cloneElement(b,N)};n.default=f},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,a=(0,o.useRef)(),l=(0,o.useState)(!1),s=r(l,2),f=s[0],d=s[1],p=(0,o.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),t||f||e&&e.tagName&&(a.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,i=r.observer,c=r.elements;return c.set(e,n),i.observe(e),function(){c.delete(e),i.unobserve(e),0===c.size&&(i.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,i.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=t("q1tI"),i=t("0G5g"),c="undefined"!==typeof IntersectionObserver;var u=new Map},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",0,2,1]]]);