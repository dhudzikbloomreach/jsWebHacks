!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=57)}({57:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(58)},58:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(59),o=0;!function e(){window.jira?(console.log("JIRA plugin started"),r.default()):++o<5&&setTimeout((function(){return e()}),50)}()},59:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(60),o=n(61);t.default=function(){var e=document.querySelector(".call-to-actions");if(e&&!e.querySelector(".create-branch-link")){var t=document.querySelector("#summary-val"),n=document.querySelector('meta[name="ajs-issue-key"]');if(null!==t&&null!==n){var a=t.innerText,u=n.content+"-"+r.default(a,{replaceApostrophe:!0,condense:!0}),i=function(t,n){e.insertAdjacentHTML("beforeend","<br />\n                <a\n                    "+(t.id?'id="'+t.id+'"':"")+"\n                    "+(t.href?'href="'+t.href+'"':"")+"\n                    "+(t.href?'target="_blank"':"")+'\n                >\n                    <span class="devstatus-cta-link-text">'+t.text+"</span>\n                </a>\n        "),t.id&&""!==t.id&&n&&document.getElementById(t.id).addEventListener("click",(function(){return n()}))};i({id:"copy-branch-name",text:"Copy branch name"},(function(){return o.default(u)})),i({text:"Create branch in Gitlab",href:"https://gitlab.exponea.com/app/frontend/-/branches/new?branch_name="+u});var c=navigator.platform.toLowerCase().includes("win")?";":" &&";i({text:"Copy create branch git command",id:"create-branch-command"},(function(){var e=Math.random().toString(36).substring(2),t=u+"-"+e,n="git fetch"+c+' git stash save "'+t+'"'+c+" git checkout -b "+u+c+' git stash apply "stash^{/'+t+'}"'+c+" git branch --unset-upstream";o.default(n)}))}}}},60:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/['’]/g,(function(e){var n;return(null===(n=t)||void 0===n?void 0:n.replaceApostrophe)?"":e})).replace(/\W/g,(function(e){return/[À-ž]/.test(e)?e:"-"})).replace(/^-+|-+$/g,"").replace(/-{2,}/g,(function(e){var n;return(null===(n=t)||void 0===n?void 0:n.condense)?"-":e})).toLowerCase()}},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){navigator.clipboard.writeText(e).then()}}});