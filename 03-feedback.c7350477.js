var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,a=f||u||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return a.Date.now()};function v(t,e,n){var o,r,i,f,u,a,c=0,v=!1,p=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,i=r;return o=r=void 0,c=e,f=t.apply(i,n)}function j(t){return c=t,u=setTimeout(h,e),v?g(t):f}function T(t){var n=t-a;return void 0===a||n>=e||n<0||p&&t-c>=i}function h(){var t=d();if(T(t))return O(t);u=setTimeout(h,function(t){var n=e-(t-a);return p?s(n,i-(t-c)):n}(t))}function O(t){return u=void 0,y&&o?g(t):(o=r=void 0,f)}function w(){var t=d(),n=T(t);if(o=arguments,r=this,a=t,n){if(void 0===u)return j(a);if(p)return u=setTimeout(h,e),g(a)}return void 0===u&&(u=setTimeout(h,e)),f}return e=m(e)||0,b(n)&&(v=!!n.leading,i=(p="maxWait"in n)?l(m(n.maxWait)||0,e):i,y="trailing"in n?!!n.trailing:y),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=a=r=u=void 0},w.flush=function(){return void 0===u?f:O(d())},w}function b(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==c.call(t)}(t))return NaN;if(b(t)){var f="function"==typeof t.valueOf?t.valueOf():t;t=b(f)?f+"":f}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(e,"");var u=o.test(t);return u||r.test(t)?i(t.slice(2),u?2:8):n.test(t)?NaN:+t}const p=document.querySelector(".feedback-form"),y={};!function(){const t=localStorage.getItem("feedback-form-state");t&&(p.value=t)}(),p.addEventListener("input",(t=>{y[t.target.name]=t.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))})),p.addEventListener("submit",(t=>{t.preventDefault(),t.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.c7350477.js.map
