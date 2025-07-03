import{$b as bi,Ab as mi,Cb as be,Da as F,Db as ye,Ea as M,Ga as ui,Ia as Bt,Jb as T,Ka as j,La as Ve,Lb as $e,O as he,Oa as G,P as E,Pa as H,Q as B,Qa as w,S as nt,Sa as A,Ua as gt,V as g,Va as mt,Xa as di,Y as ai,Yb as ve,Za as pi,_b as _,a as b,aa as J,ab as z,ac as tt,b as Q,bb as D,bc as et,cb as hi,cc as jt,da as li,db as wt,eb as fi,ec as Le,fa as C,fb as At,ha as Ne,hc as at,j as X,jb as Dt,ka as ot,kb as It,la as ci,lb as st,m as oi,mb as fe,na as rt,nb as ge,oa as ft,ob as gi,oc as yi,qc as vi,r as ri,rb as me,rc as _i,sa as Et,sb as K,sc as Ci,tb as bt,ub as yt,vb as Ht,vc as vt,x as si,xb as Wt,xc as _e,yb as Ut,yc as Si,zb as Re}from"./chunk-R62PTSFW.js";function Ei(t,n){return t?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}function lt(t,n){if(t&&n){let e=i=>{Ei(t,i)||(t.classList?t.classList.add(i):t.className+=" "+i)};[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(e))}}function Gn(){return window.innerWidth-document.documentElement.offsetWidth}function xt(t){for(let n of document?.styleSheets)try{for(let e of n?.cssRules)for(let i of e?.style)if(t.test(i))return{name:i,value:e.style.getPropertyValue(i).trim()}}catch{}return null}function Tr(t="p-overflow-hidden"){let n=xt(/-scrollbar-width$/);n?.name&&document.body.style.setProperty(n.name,Gn()+"px"),lt(document.body,t)}function _t(t,n){if(t&&n){let e=i=>{t.classList?t.classList.remove(i):t.className=t.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," ")};[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(e))}}function Or(t="p-overflow-hidden"){let n=xt(/-scrollbar-width$/);n?.name&&document.body.style.removeProperty(n.name),_t(document.body,t)}function wi(t){let n={width:0,height:0};return t&&(t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible"),n}function Ai(){let t=window,n=document,e=n.documentElement,i=n.getElementsByTagName("body")[0],o=t.innerWidth||e.clientWidth||i.clientWidth,r=t.innerHeight||e.clientHeight||i.clientHeight;return{width:o,height:r}}function zn(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}function Kn(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function Fr(t,n,e=!0){var i,o,r,s;if(t){let a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:wi(t),l=a.height,c=a.width,u=n.offsetHeight,d=n.offsetWidth,p=n.getBoundingClientRect(),h=Kn(),m=zn(),y=Ai(),I,V,x="top";p.top+u+l>y.height?(I=p.top+h-l,x="bottom",I<0&&(I=h)):I=u+p.top+h,p.left+c>y.width?V=Math.max(0,p.left+m+d-c):V=p.left+m,t.style.top=I+"px",t.style.left=V+"px",t.style.transformOrigin=x,e&&(t.style.marginTop=x==="bottom"?`calc(${(o=(i=xt(/-anchor-gutter$/))==null?void 0:i.value)!=null?o:"2px"} * -1)`:(s=(r=xt(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function Mr(t,n){t&&(typeof n=="string"?t.style.cssText=n:Object.entries(n||{}).forEach(([e,i])=>t.style[e]=i))}function Di(t,n){if(t instanceof HTMLElement){let e=t.offsetWidth;if(n){let i=getComputedStyle(t);e+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return e}return 0}function Nr(t,n,e=!0){var i,o,r,s;if(t){let a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:wi(t),l=n.offsetHeight,c=n.getBoundingClientRect(),u=Ai(),d,p,h="top";c.top+l+a.height>u.height?(d=-1*a.height,h="bottom",c.top+d<0&&(d=-1*c.top)):d=l,a.width>u.width?p=c.left*-1:c.left+a.width>u.width?p=(c.left+a.width-u.width)*-1:p=0,t.style.top=d+"px",t.style.left=p+"px",t.style.transformOrigin=h,e&&(t.style.marginTop=h==="bottom"?`calc(${(o=(i=xt(/-anchor-gutter$/))==null?void 0:i.value)!=null?o:"2px"} * -1)`:(s=(r=xt(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function Gt(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function ke(t){let n=t;return t&&typeof t=="object"&&(t.hasOwnProperty("current")?n=t.current:t.hasOwnProperty("el")&&(t.el.hasOwnProperty("nativeElement")?n=t.el.nativeElement:n=t.el)),Gt(n)?n:void 0}function Vr(t,n){let e=ke(t);if(e)e.appendChild(n);else throw new Error("Cannot append "+n+" to "+t)}function Ce(t,n={}){if(Gt(t)){let e=(i,o)=>{var r,s;let a=(r=t?.$attrs)!=null&&r[i]?[(s=t?.$attrs)==null?void 0:s[i]]:[];return[o].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let d=Array.isArray(c)?e(i,c):Object.entries(c).map(([p,h])=>i==="style"&&(h||h===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?p:void 0);l=d.length?l.concat(d.filter(p=>!!p)):l}}return l},a)};Object.entries(n).forEach(([i,o])=>{if(o!=null){let r=i.match(/^on(.+)/);r?t.addEventListener(r[1].toLowerCase(),o):i==="p-bind"||i==="pBind"?Ce(t,o):(o=i==="class"?[...new Set(e("class",o))].join(" ").trim():i==="style"?e("style",o).join(";").trim():o,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=o),t.setAttribute(i,o))}})}}function Rr(t,n={},...e){if(t){let i=document.createElement(t);return Ce(i,n),i.append(...e),i}}function $r(t,n){if(t){t.style.opacity="0";let e=+new Date,i="0",o=function(){i=`${+t.style.opacity+(new Date().getTime()-e)/n}`,t.style.opacity=i,e=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(o)||setTimeout(o,16))};o()}}function qn(t,n){return Gt(t)?Array.from(t.querySelectorAll(n)):[]}function Tt(t,n){return Gt(t)?t.matches(n)?t:t.querySelector(n):null}function Lr(t,n){t&&document.activeElement!==t&&t.focus(n)}function Ii(t,n=""){let e=qn(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`),i=[];for(let o of e)getComputedStyle(o).display!="none"&&getComputedStyle(o).visibility!="hidden"&&i.push(o);return i}function kr(t,n){let e=Ii(t,n);return e.length>0?e[0]:null}function Pe(t){if(t){let n=t.offsetHeight,e=getComputedStyle(t);return n-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),n}return 0}function xi(t){if(t){let n=t.parentNode;return n&&n instanceof ShadowRoot&&n.host&&(n=n.host),n}return null}function Pr(t){var n;if(t){let e=(n=xi(t))==null?void 0:n.childNodes,i=0;if(e)for(let o=0;o<e.length;o++){if(e[o]===t)return i;e[o].nodeType===1&&i++}}return-1}function Br(t,n){let e=Ii(t,n);return e.length>0?e[e.length-1]:null}function Ti(t){if(t){let n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function Be(t,n){if(t){let e=t.offsetHeight;if(n){let i=getComputedStyle(t);e+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return e}return 0}function Hr(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function Yn(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&xi(t))}function Wr(t,n){var e;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return(e=n?.parentElement)==null?void 0:e.parentElement;default:if(typeof t=="string")return document.querySelector(t);let o=ke((r=>!!(r&&r.constructor&&r.call&&r.apply))(t)?t():t);return o?.nodeType===9||Yn(o)?o:void 0}}function He(t){if(t){let n=t.offsetWidth,e=getComputedStyle(t);return n-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),n}return 0}function Ur(t){return!!(t&&t.offsetParent!=null)}function jr(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Oi(t){var n;t&&("remove"in Element.prototype?t.remove():(n=t.parentNode)==null||n.removeChild(t))}function Gr(t,n){let e=ke(t);if(e)e.removeChild(n);else throw new Error("Cannot remove "+n+" from "+t)}function zr(t,n){let e=getComputedStyle(t).getPropertyValue("borderTopWidth"),i=e?parseFloat(e):0,o=getComputedStyle(t).getPropertyValue("paddingTop"),r=o?parseFloat(o):0,s=t.getBoundingClientRect(),l=n.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-i-r,c=t.scrollTop,u=t.clientHeight,d=Be(n);l<0?t.scrollTop=c+l:l+d>u&&(t.scrollTop=c+l-u+d)}function Fi(t,n="",e){Gt(t)&&e!==null&&e!==void 0&&t.setAttribute(n,e)}function Mi(){let t=new Map;return{on(n,e){let i=t.get(n);return i?i.push(e):i=[e],t.set(n,i),this},off(n,e){let i=t.get(n);return i&&i.splice(i.indexOf(e)>>>0,1),this},emit(n,e){let i=t.get(n);i&&i.slice().map(o=>{o(e)})},clear(){t.clear()}}}var Zn=Object.defineProperty,Ni=Object.getOwnPropertySymbols,Qn=Object.prototype.hasOwnProperty,Xn=Object.prototype.propertyIsEnumerable,Vi=(t,n,e)=>n in t?Zn(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,Jn=(t,n)=>{for(var e in n||(n={}))Qn.call(n,e)&&Vi(t,e,n[e]);if(Ni)for(var e of Ni(n))Xn.call(n,e)&&Vi(t,e,n[e]);return t};function N(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function We(t,n,e=new WeakSet){if(t===n)return!0;if(!t||!n||typeof t!="object"||typeof n!="object"||e.has(t)||e.has(n))return!1;e.add(t).add(n);let i=Array.isArray(t),o=Array.isArray(n),r,s,a;if(i&&o){if(s=t.length,s!=n.length)return!1;for(r=s;r--!==0;)if(!We(t[r],n[r],e))return!1;return!0}if(i!=o)return!1;let l=t instanceof Date,c=n instanceof Date;if(l!=c)return!1;if(l&&c)return t.getTime()==n.getTime();let u=t instanceof RegExp,d=n instanceof RegExp;if(u!=d)return!1;if(u&&d)return t.toString()==n.toString();let p=Object.keys(t);if(s=p.length,s!==Object.keys(n).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(n,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!We(t[a],n[a],e))return!1;return!0}function to(t,n){return We(t,n)}function $i(t){return!!(t&&t.constructor&&t.call&&t.apply)}function v(t){return!N(t)}function Se(t,n){if(!t||!n)return null;try{let e=t[n];if(v(e))return e}catch{}if(Object.keys(t).length){if($i(n))return n(t);if(n.indexOf(".")===-1)return t[n];{let e=n.split("."),i=t;for(let o=0,r=e.length;o<r;++o){if(i==null)return null;i=i[e[o]]}return i}}return null}function Ue(t,n,e){return e?Se(t,e)===Se(n,e):to(t,n)}function Zr(t,n){if(t!=null&&n&&n.length){for(let e of n)if(Ue(t,e))return!0}return!1}function Qr(t,n){let e=-1;if(v(t))try{e=t.findLastIndex(n)}catch{e=t.lastIndexOf([...t].reverse().find(n))}return e}function q(t,n=!0){return t instanceof Object&&t.constructor===Object&&(n||Object.keys(t).length!==0)}function W(t,...n){return $i(t)?t(...n):t}function ct(t,n=!0){return typeof t=="string"&&(n||t!=="")}function Ri(t){return ct(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function Ee(t,n="",e={}){let i=Ri(n).split("."),o=i.shift();return o?q(t)?Ee(W(t[Object.keys(t).find(r=>Ri(r)===o)||""],e),i.join("."),e):void 0:W(t,e)}function we(t,n=!0){return Array.isArray(t)&&(n||t.length!==0)}function Xr(t){return t instanceof Date&&t.constructor===Date}function Li(t){return v(t)&&!isNaN(t)}function Jr(t=""){return v(t)&&t.length===1&&!!t.match(/\S| /)}function $(t,n){if(n){let e=n.test(t);return n.lastIndex=0,e}return!1}function Ct(...t){let n=(e={},i={})=>{let o=Jn({},e);return Object.keys(i).forEach(r=>{q(i[r])&&r in e&&q(e[r])?o[r]=n(e[r],i[r]):o[r]=i[r]}),o};return t.reduce((e,i,o)=>o===0?i:n(e,i),{})}function St(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function L(t){if(t&&/[\xC0-\xFF\u0100-\u017E]/.test(t)){let e={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let i in e)t=t.replace(e[i],i)}return t}function Ae(t){return ct(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(n,e)=>e===0?n:"-"+n.toLowerCase()).toLowerCase():t}function je(t){return ct(t)?t.replace(/[A-Z]/g,(n,e)=>e===0?n:"."+n.toLowerCase()).toLowerCase():t}var De={};function zt(t="pui_id_"){return De.hasOwnProperty(t)||(De[t]=0),De[t]++,`${t}${De[t]}`}function eo(){let t=[],n=(s,a,l=999)=>{let c=o(s,a,l),u=c.value+(c.key===s?0:l)+1;return t.push({key:s,value:u}),u},e=s=>{t=t.filter(a=>a.value!==s)},i=(s,a)=>o(s,a).value,o=(s,a,l=0)=>[...t].reverse().find(c=>a?!0:c.key===s)||{key:s,value:l},r=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:r,set:(s,a,l)=>{a&&(a.style.zIndex=String(n(s,!0,l)))},clear:s=>{s&&(e(r(s)),s.style.zIndex="")},getCurrent:s=>i(s,!0)}}var is=eo();var ki=["*"],io=function(t){return t[t.ACCEPT=0]="ACCEPT",t[t.REJECT=1]="REJECT",t[t.CANCEL=2]="CANCEL",t}(io||{}),gs=(()=>{class t{requireConfirmationSource=new X;acceptConfirmationSource=new X;requireConfirmation$=this.requireConfirmationSource.asObservable();accept=this.acceptConfirmationSource.asObservable();confirm(e){return this.requireConfirmationSource.next(e),this}close(){return this.requireConfirmationSource.next(null),this}onAccept(){this.acceptConfirmationSource.next(null)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var O=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})(),ms=(()=>{class t{static AND="and";static OR="or"}return t})(),bs=(()=>{class t{filter(e,i,o,r,s){let a=[];if(e)for(let l of e)for(let c of i){let u=Se(l,c);if(this.filters[r](u,o,s)){a.push(l);break}}return a}filters={startsWith:(e,i,o)=>{if(i==null||i.trim()==="")return!0;if(e==null)return!1;let r=L(i.toString()).toLocaleLowerCase(o);return L(e.toString()).toLocaleLowerCase(o).slice(0,r.length)===r},contains:(e,i,o)=>{if(i==null||typeof i=="string"&&i.trim()==="")return!0;if(e==null)return!1;let r=L(i.toString()).toLocaleLowerCase(o);return L(e.toString()).toLocaleLowerCase(o).indexOf(r)!==-1},notContains:(e,i,o)=>{if(i==null||typeof i=="string"&&i.trim()==="")return!0;if(e==null)return!1;let r=L(i.toString()).toLocaleLowerCase(o);return L(e.toString()).toLocaleLowerCase(o).indexOf(r)===-1},endsWith:(e,i,o)=>{if(i==null||i.trim()==="")return!0;if(e==null)return!1;let r=L(i.toString()).toLocaleLowerCase(o),s=L(e.toString()).toLocaleLowerCase(o);return s.indexOf(r,s.length-r.length)!==-1},equals:(e,i,o)=>i==null||typeof i=="string"&&i.trim()===""?!0:e==null?!1:e.getTime&&i.getTime?e.getTime()===i.getTime():e==i?!0:L(e.toString()).toLocaleLowerCase(o)==L(i.toString()).toLocaleLowerCase(o),notEquals:(e,i,o)=>i==null||typeof i=="string"&&i.trim()===""?!1:e==null?!0:e.getTime&&i.getTime?e.getTime()!==i.getTime():e==i?!1:L(e.toString()).toLocaleLowerCase(o)!=L(i.toString()).toLocaleLowerCase(o),in:(e,i)=>{if(i==null||i.length===0)return!0;for(let o=0;o<i.length;o++)if(Ue(e,i[o]))return!0;return!1},between:(e,i)=>i==null||i[0]==null||i[1]==null?!0:e==null?!1:e.getTime?i[0].getTime()<=e.getTime()&&e.getTime()<=i[1].getTime():i[0]<=e&&e<=i[1],lt:(e,i,o)=>i==null?!0:e==null?!1:e.getTime&&i.getTime?e.getTime()<i.getTime():e<i,lte:(e,i,o)=>i==null?!0:e==null?!1:e.getTime&&i.getTime?e.getTime()<=i.getTime():e<=i,gt:(e,i,o)=>i==null?!0:e==null?!1:e.getTime&&i.getTime?e.getTime()>i.getTime():e>i,gte:(e,i,o)=>i==null?!0:e==null?!1:e.getTime&&i.getTime?e.getTime()>=i.getTime():e>=i,is:(e,i,o)=>this.filters.equals(e,i,o),isNot:(e,i,o)=>this.filters.notEquals(e,i,o),before:(e,i,o)=>this.filters.lt(e,i,o),after:(e,i,o)=>this.filters.gt(e,i,o),dateIs:(e,i)=>i==null?!0:e==null?!1:e.toDateString()===i.toDateString(),dateIsNot:(e,i)=>i==null?!0:e==null?!1:e.toDateString()!==i.toDateString(),dateBefore:(e,i)=>i==null?!0:e==null?!1:e.getTime()<i.getTime(),dateAfter:(e,i)=>i==null?!0:e==null?!1:(e.setHours(0,0,0,0),e.getTime()>i.getTime())};register(e,i){this.filters[e]=i}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ys=(()=>{class t{messageSource=new X;clearSource=new X;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(e){e&&this.messageSource.next(e)}addAll(e){e&&e.length&&this.messageSource.next(e)}clear(e){this.clearSource.next(e||null)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),vs=(()=>{class t{clickSource=new X;clickObservable=this.clickSource.asObservable();add(e){e&&this.clickSource.next(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var _s=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=G({type:t,selectors:[["p-header"]],standalone:!1,ngContentSelectors:ki,decls:1,vars:0,template:function(i,o){i&1&&(bt(),yt(0))},encapsulation:2})}return t})(),Cs=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=G({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:ki,decls:1,vars:0,template:function(i,o){i&1&&(bt(),yt(0))},encapsulation:2})}return t})(),Pi=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(i){return new(i||t)(M(ui))};static \u0275dir=w({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),ut=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=H({type:t});static \u0275inj=B({imports:[vt]})}return t})(),Ss=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})();var no=Object.defineProperty,oo=Object.defineProperties,ro=Object.getOwnPropertyDescriptors,Ie=Object.getOwnPropertySymbols,Wi=Object.prototype.hasOwnProperty,Ui=Object.prototype.propertyIsEnumerable,Bi=(t,n,e)=>n in t?no(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,S=(t,n)=>{for(var e in n||(n={}))Wi.call(n,e)&&Bi(t,e,n[e]);if(Ie)for(var e of Ie(n))Ui.call(n,e)&&Bi(t,e,n[e]);return t},Ft=(t,n)=>oo(t,ro(n)),it=(t,n)=>{var e={};for(var i in t)Wi.call(t,i)&&n.indexOf(i)<0&&(e[i]=t[i]);if(t!=null&&Ie)for(var i of Ie(t))n.indexOf(i)<0&&Ui.call(t,i)&&(e[i]=t[i]);return e};var so=Mi(),k=so;function Hi(t,n){we(t)?t.push(...n||[]):q(t)&&Object.assign(t,n)}function ao(t){return q(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function lo(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Ge(t="",n=""){return lo(`${ct(t,!1)&&ct(n,!1)?`${t}-`:t}${n}`)}function ji(t="",n=""){return`--${Ge(t,n)}`}function co(t=""){let n=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(n+e)%2!==0}function Gi(t,n="",e="",i=[],o){if(ct(t)){let r=/{([^}]*)}/g,s=t.trim();if(co(s))return;if($(s,r)){let a=s.replaceAll(r,u=>{let p=u.replace(/{|}/g,"").split(".").filter(h=>!i.some(m=>$(h,m)));return`var(${ji(e,Ae(p.join("-")))}${v(o)?`, ${o}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return $(a.replace(c,"0"),l)?`calc(${a})`:a}return s}else if(Li(t))return t}function uo(t,n,e){ct(n,!1)&&t.push(`${n}:${e};`)}function Ot(t,n){return t?`${t}{${n}}`:""}var Mt=(...t)=>po(f.getTheme(),...t),po=(t={},n,e,i)=>{if(n){let{variable:o,options:r}=f.defaults||{},{prefix:s,transform:a}=t?.options||r||{},c=$(n,/{([^}]*)}/g)?n:`{${n}}`;return i==="value"||N(i)&&a==="strict"?f.getTokenValue(n):Gi(c,void 0,s,[o.excludedKeyRegex],e)}return""};var ho=(t={})=>{let{preset:n,options:e}=t;return{preset(i){return n=n?Ct(n,i):i,this},options(i){return e=e?S(S({},e),i):i,this},primaryPalette(i){let{semantic:o}=n||{};return n=Ft(S({},n),{semantic:Ft(S({},o),{primary:i})}),this},surfacePalette(i){var o,r;let{semantic:s}=n||{},a=i?.hasOwnProperty("light")?i?.light:i,l=i?.hasOwnProperty("dark")?i?.dark:i,c={colorScheme:{light:S(S({},(o=s?.colorScheme)==null?void 0:o.light),!!a&&{surface:a}),dark:S(S({},(r=s?.colorScheme)==null?void 0:r.dark),!!l&&{surface:l})}};return n=Ft(S({},n),{semantic:S(S({},s),c)}),this},define({useDefaultPreset:i=!1,useDefaultOptions:o=!1}={}){return{preset:i?f.getPreset():n,options:o?f.getOptions():e}},update({mergePresets:i=!0,mergeOptions:o=!0}={}){let r={preset:i?Ct(f.getPreset(),n):n,options:o?S(S({},f.getOptions()),e):e};return f.setTheme(r),r},use(i){let o=this.define(i);return f.setTheme(o),o}}};function fo(t,n={}){let e=f.defaults.variable,{prefix:i=e.prefix,selector:o=e.selector,excludedKeyRegex:r=e.excludedKeyRegex}=n,s=(c,u="")=>Object.entries(c).reduce((d,[p,h])=>{let m=$(p,r)?Ge(u):Ge(u,Ae(p)),y=ao(h);if(q(y)){let{variables:I,tokens:V}=s(y,m);Hi(d.tokens,V),Hi(d.variables,I)}else d.tokens.push((i?m.replace(`${i}-`,""):m).replaceAll("-",".")),uo(d.variables,ji(m),Gi(y,m,i,[r]));return d},{variables:[],tokens:[]}),{variables:a,tokens:l}=s(t,i);return{value:a,tokens:l,declarations:a.join(""),css:Ot(o,a.join(""))}}var Z={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let n=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var i;return(i=n.map(o=>o.resolve(e)).find(o=>o.matched))!=null?i:this.rules.custom.resolve(e)})}},_toVariables(t,n){return fo(t,{prefix:n?.prefix})},getCommon({name:t="",theme:n={},params:e,set:i,defaults:o}){var r,s,a,l,c,u,d;let{preset:p,options:h}=n,m,y,I,V,x,ht,U;if(v(p)&&h.transform!=="strict"){let{primitive:Xt,semantic:Jt,extend:te}=p,Lt=Jt||{},{colorScheme:ee}=Lt,ie=it(Lt,["colorScheme"]),ne=te||{},{colorScheme:oe}=ne,kt=it(ne,["colorScheme"]),Pt=ee||{},{dark:re}=Pt,se=it(Pt,["dark"]),ae=oe||{},{dark:le}=ae,ce=it(ae,["dark"]),ue=v(Xt)?this._toVariables({primitive:Xt},h):{},de=v(ie)?this._toVariables({semantic:ie},h):{},pe=v(se)?this._toVariables({light:se},h):{},ti=v(re)?this._toVariables({dark:re},h):{},ei=v(kt)?this._toVariables({semantic:kt},h):{},ii=v(ce)?this._toVariables({light:ce},h):{},ni=v(le)?this._toVariables({dark:le},h):{},[In,xn]=[(r=ue.declarations)!=null?r:"",ue.tokens],[Tn,On]=[(s=de.declarations)!=null?s:"",de.tokens||[]],[Fn,Mn]=[(a=pe.declarations)!=null?a:"",pe.tokens||[]],[Nn,Vn]=[(l=ti.declarations)!=null?l:"",ti.tokens||[]],[Rn,$n]=[(c=ei.declarations)!=null?c:"",ei.tokens||[]],[Ln,kn]=[(u=ii.declarations)!=null?u:"",ii.tokens||[]],[Pn,Bn]=[(d=ni.declarations)!=null?d:"",ni.tokens||[]];m=this.transformCSS(t,In,"light","variable",h,i,o),y=xn;let Hn=this.transformCSS(t,`${Tn}${Fn}`,"light","variable",h,i,o),Wn=this.transformCSS(t,`${Nn}`,"dark","variable",h,i,o);I=`${Hn}${Wn}`,V=[...new Set([...On,...Mn,...Vn])];let Un=this.transformCSS(t,`${Rn}${Ln}color-scheme:light`,"light","variable",h,i,o),jn=this.transformCSS(t,`${Pn}color-scheme:dark`,"dark","variable",h,i,o);x=`${Un}${jn}`,ht=[...new Set([...$n,...kn,...Bn])],U=W(p.css,{dt:Mt})}return{primitive:{css:m,tokens:y},semantic:{css:I,tokens:V},global:{css:x,tokens:ht},style:U}},getPreset({name:t="",preset:n={},options:e,params:i,set:o,defaults:r,selector:s}){var a,l,c;let u,d,p;if(v(n)&&e.transform!=="strict"){let h=t.replace("-directive",""),m=n,{colorScheme:y,extend:I,css:V}=m,x=it(m,["colorScheme","extend","css"]),ht=I||{},{colorScheme:U}=ht,Xt=it(ht,["colorScheme"]),Jt=y||{},{dark:te}=Jt,Lt=it(Jt,["dark"]),ee=U||{},{dark:ie}=ee,ne=it(ee,["dark"]),oe=v(x)?this._toVariables({[h]:S(S({},x),Xt)},e):{},kt=v(Lt)?this._toVariables({[h]:S(S({},Lt),ne)},e):{},Pt=v(te)?this._toVariables({[h]:S(S({},te),ie)},e):{},[re,se]=[(a=oe.declarations)!=null?a:"",oe.tokens||[]],[ae,le]=[(l=kt.declarations)!=null?l:"",kt.tokens||[]],[ce,ue]=[(c=Pt.declarations)!=null?c:"",Pt.tokens||[]],de=this.transformCSS(h,`${re}${ae}`,"light","variable",e,o,r,s),pe=this.transformCSS(h,ce,"dark","variable",e,o,r,s);u=`${de}${pe}`,d=[...new Set([...se,...le,...ue])],p=W(V,{dt:Mt})}return{css:u,tokens:d,style:p}},getPresetC({name:t="",theme:n={},params:e,set:i,defaults:o}){var r;let{preset:s,options:a}=n,l=(r=s?.components)==null?void 0:r[t];return this.getPreset({name:t,preset:l,options:a,params:e,set:i,defaults:o})},getPresetD({name:t="",theme:n={},params:e,set:i,defaults:o}){var r;let s=t.replace("-directive",""),{preset:a,options:l}=n,c=(r=a?.directives)==null?void 0:r[s];return this.getPreset({name:s,preset:c,options:l,params:e,set:i,defaults:o})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,n){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?n.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:n.options.darkModeSelector):[]},getLayerOrder(t,n={},e,i){let{cssLayer:o}=n;return o?`@layer ${W(o.order||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:n={},params:e,props:i={},set:o,defaults:r}){let s=this.getCommon({name:t,theme:n,params:e,set:o,defaults:r}),a=Object.entries(i).reduce((l,[c,u])=>l.push(`${c}="${u}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[c,u])=>{if(u?.css){let d=St(u?.css),p=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${p}" ${a}>${d}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:n={},params:e,props:i={},set:o,defaults:r}){var s;let a={name:t,theme:n,params:e,set:o,defaults:r},l=(s=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,c=Object.entries(i).reduce((u,[d,p])=>u.push(`${d}="${p}"`)&&u,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${c}>${St(l)}</style>`:""},createTokens(t={},n,e="",i="",o={}){return Object.entries(t).forEach(([r,s])=>{let a=$(r,n.variable.excludedKeyRegex)?e:e?`${e}.${je(r)}`:je(r),l=i?`${i}.${r}`:r;q(s)?this.createTokens(s,n,a,l,o):(o[a]||(o[a]={paths:[],computed(c,u={}){var d,p;return this.paths.length===1?(d=this.paths[0])==null?void 0:d.computed(this.paths[0].scheme,u.binding):c&&c!=="none"?(p=this.paths.find(h=>h.scheme===c))==null?void 0:p.computed(c,u.binding):this.paths.map(h=>h.computed(h.scheme,u[h.scheme]))}}),o[a].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(c,u={}){let d=/{([^}]*)}/g,p=s;if(u.name=this.path,u.binding||(u.binding={}),$(s,d)){let m=s.trim().replaceAll(d,V=>{var x;let ht=V.replace(/{|}/g,""),U=(x=o[ht])==null?void 0:x.computed(c,u);return we(U)&&U.length===2?`light-dark(${U[0].value},${U[1].value})`:U?.value}),y=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,I=/var\([^)]+\)/g;p=$(m.replace(I,"0"),y)?`calc(${m})`:m}return N(u.binding)&&delete u.binding,{colorScheme:c,path:this.path,paths:u,value:p.includes("undefined")?void 0:p}}}))}),o},getTokenValue(t,n,e){var i;let r=(l=>l.split(".").filter(u=>!$(u.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(n),s=n.includes("colorScheme.light")?"light":n.includes("colorScheme.dark")?"dark":void 0,a=[(i=t[r])==null?void 0:i.computed(s)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},c)=>{let u=c,{colorScheme:d}=u,p=it(u,["colorScheme"]);return l[d]=p,l},void 0)},getSelectorRule(t,n,e,i){return e==="class"||e==="attr"?Ot(v(n)?`${t}${n},${t} ${n}`:t,i):Ot(t,v(n)?Ot(n,i):i)},transformCSS(t,n,e,i,o={},r,s,a){if(v(n)){let{cssLayer:l}=o;if(i!=="style"){let c=this.getColorSchemeOption(o,s);n=e==="dark"?c.reduce((u,{type:d,selector:p})=>(v(p)&&(u+=p.includes("[CSS]")?p.replace("[CSS]",n):this.getSelectorRule(p,a,d,n)),u),""):Ot(a??":root",n)}if(l){let c={name:"primeui",order:"primeui"};q(l)&&(c.name=W(l.name,{name:t,type:i})),v(c.name)&&(n=Ot(`@layer ${c.name}`,n),r?.layerNames(c.name))}return n}return""}},f={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:n}=t;n&&(this._theme=Ft(S({},n),{options:S(S({},this.defaults.options),n.options)}),this._tokens=Z.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),k.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=Ft(S({},this.theme),{preset:t}),this._tokens=Z.createTokens(t,this.defaults),this.clearLoadedStyleNames(),k.emit("preset:change",t),k.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=Ft(S({},this.theme),{options:t}),this.clearLoadedStyleNames(),k.emit("options:change",t),k.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return Z.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",n){return Z.getCommon({name:t,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",n){let e={name:t,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Z.getPresetC(e)},getDirective(t="",n){let e={name:t,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Z.getPresetD(e)},getCustomPreset(t="",n,e,i){let o={name:t,preset:n,options:this.options,selector:e,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Z.getPreset(o)},getLayerOrderCSS(t=""){return Z.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",n,e="style",i){return Z.transformCSS(t,n,i,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",n,e={}){return Z.getCommonStyleSheet({name:t,theme:this.theme,params:n,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,n,e={}){return Z.getStyleSheet({name:t,theme:this.theme,params:n,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:n}){this._loadingStyles.size&&(this._loadingStyles.delete(n),k.emit(`theme:${n}:load`,t),!this._loadingStyles.size&&k.emit("theme:load"))}};function Ns(...t){let n=Ct(f.getPreset(),...t);return f.setPreset(n),n}function Vs(t){return ho().surfacePalette(t).update().preset}var go=0,zi=(()=>{class t{document=g(at);use(e,i={}){let o=!1,r=e,s=null,{immediate:a=!0,manual:l=!1,name:c=`style_${++go}`,id:u=void 0,media:d=void 0,nonce:p=void 0,first:h=!1,props:m={}}=i;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${c}"]`)||u&&this.document.getElementById(u)||this.document.createElement("style"),!s.isConnected){r=e,Ce(s,{type:"text/css",media:d,nonce:p});let y=this.document.head;h&&y.firstChild?y.insertBefore(s,y.firstChild):y.appendChild(s),Fi(s,"data-primeng-style-id",c)}return s.textContent!==r&&(s.textContent=r),{id:u,name:c,el:s,css:r}}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Nt={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},mo=({dt:t})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${t("disabled.opacity")};
}

.pi {
    font-size: ${t("icon.size")};
}

.p-icon {
    width: ${t("icon.size")};
    height: ${t("icon.size")};
}

.p-unselectable-text {
    user-select: none;
}

.p-overlay-mask {
    background: ${t("mask.background")};
    color: ${t("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${t("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${t("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${t("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${t("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,bo=({dt:t})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${t("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,R=(()=>{class t{name="base";useStyle=g(zi);theme=void 0;css=void 0;classes={};inlineStyles={};load=(e,i={},o=r=>r)=>{let r=o(W(e,{dt:Mt}));return r?this.useStyle.use(St(r),b({name:this.name},i)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},i="")=>this.load(this.theme,e,(o="")=>f.transformCSS(e.name||this.name,`${o}${i}`));loadGlobalCSS=(e={})=>this.load(bo,e);loadGlobalTheme=(e={},i="")=>this.load(mo,e,(o="")=>f.transformCSS(e.name||this.name,`${o}${i}`));getCommonTheme=e=>f.getCommon(this.name,e);getComponentTheme=e=>f.getComponent(this.name,e);getDirectiveTheme=e=>f.getDirective(this.name,e);getPresetTheme=(e,i,o)=>f.getCustomPreset(this.name,e,i,o);getLayerOrderThemeCSS=()=>f.getLayerOrderCSS(this.name);getStyleSheet=(e="",i={})=>{if(this.css){let o=W(this.css,{dt:Mt}),r=St(`${o}${e}`),s=Object.entries(i).reduce((a,[l,c])=>a.push(`${l}="${c}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(e,i={})=>f.getCommonStyleSheet(this.name,e,i);getThemeStyleSheet=(e,i={})=>{let o=[f.getStyleSheet(this.name,e,i)];if(this.theme){let r=this.name==="base"?"global-style":`${this.name}-style`,s=W(this.theme,{dt:Mt}),a=St(f.transformCSS(r,s)),l=Object.entries(i).reduce((c,[u,d])=>c.push(`${u}="${d}"`)&&c,[]).join(" ");o.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return o.join("")};static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var yo=(()=>{class t{theme=j(void 0);csp=j({nonce:void 0});isThemeChanged=!1;document=g(at);baseStyle=g(R);constructor(){jt(()=>{k.on("theme:change",e=>{et(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),jt(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){f.clearLoadedStyleNames(),k.clear()}onThemeChange(e){f.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!f.isStyleNameLoaded("common")){let{primitive:e,semantic:i,global:o,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,b({name:"primitive-variables"},s)),this.baseStyle.load(i?.css,b({name:"semantic-variables"},s)),this.baseStyle.load(o?.css,b({name:"global-variables"},s)),this.baseStyle.loadGlobalTheme(b({name:"global-style"},s),r),f.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:i,csp:o}=e||{};i&&this.theme.set(i),o&&this.csp.set(o)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ze=(()=>{class t extends yo{ripple=j(!1);platformId=g(Et);inputStyle=j(null);inputVariant=j(null);overlayOptions={};csp=j({nonce:void 0});filterMatchModeOptions={text:[O.STARTS_WITH,O.CONTAINS,O.NOT_CONTAINS,O.ENDS_WITH,O.EQUALS,O.NOT_EQUALS],numeric:[O.EQUALS,O.NOT_EQUALS,O.LESS_THAN,O.LESS_THAN_OR_EQUAL_TO,O.GREATER_THAN,O.GREATER_THAN_OR_EQUAL_TO],date:[O.DATE_IS,O.DATE_IS_NOT,O.DATE_BEFORE,O.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new X;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=b(b({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:i,ripple:o,inputStyle:r,inputVariant:s,theme:a,overlayOptions:l,translation:c,filterMatchModeOptions:u}=e||{};i&&this.csp.set(i),o&&this.ripple.set(o),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),c&&this.setTranslation(c),u&&(this.filterMatchModeOptions=u),a&&this.setThemeConfig({theme:a,csp:i})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),vo=new nt("PRIME_NG_CONFIG");function ia(...t){let n=t?.map(i=>({provide:vo,useValue:i,multi:!1})),e=pi(()=>{let i=g(ze);t?.forEach(o=>i.setConfig(o))});return ai([...n,e])}var en=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(M(Bt),M(ft))};static \u0275dir=w({type:t})}return t})(),_o=(()=>{class t extends en{static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275dir=w({type:t,features:[A]})}return t})(),nn=new nt("");var Co={provide:nn,useExisting:he(()=>on),multi:!0};function So(){let t=Le()?Le().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Eo=new nt(""),on=(()=>{class t extends en{_compositionMode;_composing=!1;constructor(e,i,o){super(e,i),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!So())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(M(Bt),M(ft),M(Eo,8))};static \u0275dir=w({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,o){i&1&&me("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},standalone:!1,features:[T([Co]),A]})}return t})();function wo(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}var rn=new nt(""),Ao=new nt("");function Do(t){return wo(t.value)?{required:!0}:null}function Ki(t){return null}function sn(t){return t!=null}function an(t){return di(t)?oi(t):t}function ln(t){let n={};return t.forEach(e=>{n=e!=null?b(b({},n),e):n}),Object.keys(n).length===0?null:n}function cn(t,n){return n.map(e=>e(t))}function Io(t){return!t.validate}function un(t){return t.map(n=>Io(n)?n:e=>n.validate(e))}function xo(t){if(!t)return null;let n=t.filter(sn);return n.length==0?null:function(e){return ln(cn(e,n))}}function dn(t){return t!=null?xo(un(t)):null}function To(t){if(!t)return null;let n=t.filter(sn);return n.length==0?null:function(e){let i=cn(e,n).map(an);return si(i).pipe(ri(ln))}}function pn(t){return t!=null?To(un(t)):null}function qi(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function Oo(t){return t._rawValidators}function Fo(t){return t._rawAsyncValidators}function Ke(t){return t?Array.isArray(t)?t:[t]:[]}function Te(t,n){return Array.isArray(t)?t.includes(n):t===n}function Yi(t,n){let e=Ke(n);return Ke(t).forEach(o=>{Te(e,o)||e.push(o)}),e}function Zi(t,n){return Ke(n).filter(e=>!Te(t,e))}var Oe=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=dn(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=pn(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},qe=class extends Oe{name;get formDirective(){return null}get path(){return null}},Qt=class extends Oe{_parent=null;name=null;valueAccessor=null},Ye=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Mo={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Sa=Q(b({},Mo),{"[class.ng-submitted]":"isSubmitted"}),Ea=(()=>{class t extends Ye{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(M(Qt,2))};static \u0275dir=w({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,o){i&2&&wt("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[A]})}return t})();var Kt="VALID",xe="INVALID",Vt="PENDING",qt="DISABLED",$t=class{},Fe=class extends $t{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Yt=class extends $t{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Zt=class extends $t{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Rt=class extends $t{status;source;constructor(n,e){super(),this.status=n,this.source=e}};function No(t){return(Me(t)?t.validators:t)||null}function Vo(t){return Array.isArray(t)?dn(t):t||null}function Ro(t,n){return(Me(n)?n.asyncValidators:t)||null}function $o(t){return Array.isArray(t)?pn(t):t||null}function Me(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var Ze=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return et(this.statusReactive)}set status(n){et(()=>this.statusReactive.set(n))}_status=tt(()=>this.statusReactive());statusReactive=j(void 0);get valid(){return this.status===Kt}get invalid(){return this.status===xe}get pending(){return this.status==Vt}get disabled(){return this.status===qt}get enabled(){return this.status!==qt}errors;get pristine(){return et(this.pristineReactive)}set pristine(n){et(()=>this.pristineReactive.set(n))}_pristine=tt(()=>this.pristineReactive());pristineReactive=j(!0);get dirty(){return!this.pristine}get touched(){return et(this.touchedReactive)}set touched(n){et(()=>this.touchedReactive.set(n))}_touched=tt(()=>this.touchedReactive());touchedReactive=j(!1);get untouched(){return!this.touched}_events=new X;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Yi(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Yi(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Zi(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Zi(n,this._rawAsyncValidators))}hasValidator(n){return Te(this._rawValidators,n)}hasAsyncValidator(n){return Te(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsTouched(Q(b({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Zt(!0,i))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new Zt(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsDirty(Q(b({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Yt(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new Yt(!0,i))}markAsPending(n={}){this.status=Vt;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Rt(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.markAsPending(Q(b({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=qt,this.errors=null,this._forEachChild(o=>{o.disable(Q(b({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Fe(this.value,i)),this._events.next(new Rt(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Q(b({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Kt,this._forEachChild(i=>{i.enable(Q(b({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(Q(b({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Kt||this.status===Vt)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Fe(this.value,e)),this._events.next(new Rt(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(Q(b({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?qt:Kt}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Vt,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1};let i=an(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,o)=>i&&i._find(o),this)}getError(n,e){let i=e?this.get(e):this;return i&&i.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new Rt(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new ot,this.statusChanges=new ot}_calculateStatus(){return this._allControlsDisabled()?qt:this.errors?xe:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Vt)?Vt:this._anyControlsHaveStatus(xe)?xe:Kt}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),o=this.pristine!==i;this.pristine=i,this._parent&&!n.onlySelf&&this._parent._updatePristine(n,e),o&&this._events.next(new Yt(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Zt(this.touched,e)),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Me(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){let e=this._parent&&this._parent.dirty;return!n&&!!e&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=Vo(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=$o(this._rawAsyncValidators)}};var hn=new nt("CallSetDisabledState",{providedIn:"root",factory:()=>Qe}),Qe="always";function Lo(t,n){return[...n.path,t]}function ko(t,n,e=Qe){Bo(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),Ho(t,n),Uo(t,n),Wo(t,n),Po(t,n)}function Qi(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function Po(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Bo(t,n){let e=Oo(t);n.validator!==null?t.setValidators(qi(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=Fo(t);n.asyncValidator!==null?t.setAsyncValidators(qi(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let o=()=>t.updateValueAndValidity();Qi(n._rawValidators,o),Qi(n._rawAsyncValidators,o)}function Ho(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&fn(t,n)})}function Wo(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&fn(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function fn(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Uo(t,n){let e=(i,o)=>{n.valueAccessor.writeValue(i),o&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function jo(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function Go(t){return Object.getPrototypeOf(t.constructor)===_o}function zo(t,n){if(!n)return null;Array.isArray(n);let e,i,o;return n.forEach(r=>{r.constructor===on?e=r:Go(r)?i=r:o=r}),o||i||e||null}function Xi(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function Ji(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Ko=class extends Ze{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(No(e),Ro(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Me(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Ji(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Xi(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Xi(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){Ji(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var qo={provide:Qt,useExisting:he(()=>Yo)},tn=Promise.resolve(),Yo=(()=>{class t extends Qt{_changeDetectorRef;callSetDisabledState;control=new Ko;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new ot;constructor(e,i,o,r,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=e,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=zo(this,r)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),jo(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ko(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){tn.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,o=i!==0&&_(i);tn.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Lo(e,this._parent):[e]}static \u0275fac=function(i){return new(i||t)(M(qe,9),M(rn,10),M(Ao,10),M(nn,10),M(ve,8),M(hn,8))};static \u0275dir=w({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[T([qo]),A,J]})}return t})();var Zo=(()=>{class t{_validator=Ki;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let i=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):Ki,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,features:[J]})}return t})();var Qo={provide:rn,useExisting:he(()=>Xo),multi:!0};var Xo=(()=>{class t extends Zo{required;inputName="required";normalizeInput=_;createValidator=e=>Do;enabled(e){return e}static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275dir=w({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(i,o){i&2&&z("required",o._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[T([Qo]),A]})}return t})();var Jo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=H({type:t});static \u0275inj=B({})}return t})();var Aa=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:hn,useValue:e.callSetDisabledState??Qe}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=H({type:t});static \u0275inj=B({imports:[Jo]})}return t})();var gn=(()=>{class t extends R{name="common";static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),P=(()=>{class t{document=g(at);platformId=g(Et);el=g(ft);injector=g(Ne);cd=g(ve);renderer=g(Bt);config=g(ze);baseComponentStyle=g(gn);baseStyle=g(R);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=zt("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,i="",o={}){return Ee(e,i,o)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!Si(this.platformId)){let{dt:i}=e;i&&i.currentValue&&(this._loadScopedThemeStyles(i.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(i.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>k.off("theme:change",e))}_loadStyles(){let e=()=>{Nt.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),Nt.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!Nt.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Nt.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!f.isStyleNameLoaded("common")){let{primitive:e,semantic:i,global:o,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,b({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(i?.css,b({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(o?.css,b({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(b({name:"global-style"},this.styleOptions),r),f.setLoadedStyleName("common")}if(!f.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:i}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,b({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(b({name:`${this.componentStyle?.name}-style`},this.styleOptions),i),f.setLoadedStyleName(this.componentStyle?.name)}if(!f.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,b({name:"layer-order",first:!0},this.styleOptions)),f.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:i}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},o=this.componentStyle?.load(i,b({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){Nt.clearLoadedStyleNames(),k.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,i){let o=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof o=="function"?o({instance:this}):typeof o=="string"?o:e}sx(e){let i=this.componentStyle?.inlineStyles?.[e];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:b({},i)}get parent(){return this.parentInstance}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,inputs:{dt:"dt"},features:[T([gn,R]),J]})}return t})();var tr=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,er={root:"p-ink"},mn=(()=>{class t extends R{name="ripple";theme=tr;classes=er;static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var bn=(()=>{class t extends P{zone=g(ci);_componentStyle=g(mn);animationListener;mouseDownListener;timeout;constructor(){super(),jt(()=>{_e(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let i=this.getInk();if(!i||this.document.defaultView?.getComputedStyle(i,null).display==="none")return;if(_t(i,"p-ink-active"),!Pe(i)&&!He(i)){let a=Math.max(Di(this.el.nativeElement),Be(this.el.nativeElement));i.style.height=a+"px",i.style.width=a+"px"}let o=Ti(this.el.nativeElement),r=e.pageX-o.left+this.document.body.scrollTop-He(i)/2,s=e.pageY-o.top+this.document.body.scrollLeft-Pe(i)/2;this.renderer.setStyle(i,"top",s+"px"),this.renderer.setStyle(i,"left",r+"px"),lt(i,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&_t(a,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let i=0;i<e.length;i++)if(typeof e[i].className=="string"&&e[i].className.indexOf("p-ink")!==-1)return e[i];return null}resetInk(){let e=this.getInk();e&&_t(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),_t(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Oi(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=w({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[T([mn]),A]})}return t})(),Ka=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=H({type:t});static \u0275inj=B({})}return t})();var Xe=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,i){e&&i&&(e.classList?e.classList.add(i):e.className+=" "+i)}static addMultipleClasses(e,i){if(e&&i)if(e.classList){let o=i.trim().split(" ");for(let r=0;r<o.length;r++)e.classList.add(o[r])}else{let o=i.split(" ");for(let r=0;r<o.length;r++)e.className+=" "+o[r]}}static removeClass(e,i){e&&i&&(e.classList?e.classList.remove(i):e.className=e.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,i){e&&i&&[i].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,i){return e&&i?e.classList?e.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(i){return i!==e})}static find(e,i){return Array.from(e.querySelectorAll(i))}static findSingle(e,i){return this.isElement(e)?e.querySelector(i):null}static index(e){let i=e.parentNode.childNodes,o=0;for(var r=0;r<i.length;r++){if(i[r]==e)return o;i[r].nodeType==1&&o++}return-1}static indexWithinGroup(e,i){let o=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==e)return r;o[s].attributes&&o[s].attributes[i]&&o[s].nodeType==1&&r++}return-1}static appendOverlay(e,i,o="self"){o!=="self"&&e&&i&&this.appendChild(e,i)}static alignOverlay(e,i,o="self",r=!0){e&&i&&(r&&(e.style.minWidth=`${t.getOuterWidth(i)}px`),o==="self"?this.relativePosition(e,i):this.absolutePosition(e,i))}static relativePosition(e,i,o=!0){let r=x=>{if(x)return getComputedStyle(x).getPropertyValue("position")==="relative"?x:r(x.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=i.offsetHeight,l=i.getBoundingClientRect(),c=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),d=this.getViewport(),h=r(e)?.getBoundingClientRect()||{top:-1*c,left:-1*u},m,y;l.top+a+s.height>d.height?(m=l.top-h.top-s.height,e.style.transformOrigin="bottom",l.top+m<0&&(m=-1*l.top)):(m=a+l.top-h.top,e.style.transformOrigin="top");let I=l.left+s.width-d.width,V=l.left-h.left;s.width>d.width?y=(l.left-h.left)*-1:I>0?y=V-I:y=l.left-h.left,e.style.top=m+"px",e.style.left=y+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,i,o=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,a=r.width,l=i.offsetHeight,c=i.offsetWidth,u=i.getBoundingClientRect(),d=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),h=this.getViewport(),m,y;u.top+l+s>h.height?(m=u.top+d-s,e.style.transformOrigin="bottom",m<0&&(m=d)):(m=l+u.top+d,e.style.transformOrigin="top"),u.left+a>h.width?y=Math.max(0,u.left+p+c-a):y=u.left+p,e.style.top=m+"px",e.style.left=y+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,i=[]){return e.parentNode===null?i:this.getParents(e.parentNode,i.concat([e.parentNode]))}static getScrollableParents(e){let i=[];if(e){let o=this.getParents(e),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of o){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let c=l.split(",");for(let u of c){let d=this.findSingle(a,u);d&&s(d)&&i.push(d)}}a.nodeType!==9&&s(a)&&i.push(a)}}return i}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let i=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",i}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let i=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",i}static getHiddenElementDimensions(e){let i={};return e.style.visibility="hidden",e.style.display="block",i.width=e.offsetWidth,i.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",i}static scrollInView(e,i){let o=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=e.getBoundingClientRect(),u=i.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,d=e.scrollTop,p=e.clientHeight,h=this.getOuterHeight(i);u<0?e.scrollTop=d+u:u+h>p&&(e.scrollTop=d+u-p+h)}static fadeIn(e,i){e.style.opacity=0;let o=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-o)/i,e.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(e,i){var o=1,r=50,s=i,a=r/s;let l=setInterval(()=>{o=o-a,o<=0&&(o=0,clearInterval(l)),e.style.opacity=o},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,i){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,i)}static getOuterWidth(e,i){let o=e.offsetWidth;if(i){let r=getComputedStyle(e);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(e){let i=getComputedStyle(e);return parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)}static getHorizontalMargin(e){let i=getComputedStyle(e);return parseFloat(i.marginLeft)+parseFloat(i.marginRight)}static innerWidth(e){let i=e.offsetWidth,o=getComputedStyle(e);return i+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),i}static width(e){let i=e.offsetWidth,o=getComputedStyle(e);return i-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),i}static getInnerHeight(e){let i=e.offsetHeight,o=getComputedStyle(e);return i+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),i}static getOuterHeight(e,i){let o=e.offsetHeight;if(i){let r=getComputedStyle(e);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(e){let i=e.offsetHeight,o=getComputedStyle(e);return i-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),i}static getWidth(e){let i=e.offsetWidth,o=getComputedStyle(e);return i-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),i}static getViewport(){let e=window,i=document,o=i.documentElement,r=i.getElementsByTagName("body")[0],s=e.innerWidth||o.clientWidth||r.clientWidth,a=e.innerHeight||o.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(e){var i=e.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,i){let o=e.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(i,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,i=e.indexOf("MSIE ");if(i>0)return!0;var o=e.indexOf("Trident/");if(o>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,i){if(this.isElement(i))i.appendChild(e);else if(i&&i.el&&i.el.nativeElement)i.el.nativeElement.appendChild(e);else throw"Cannot append "+i+" to "+e}static removeChild(e,i){if(this.isElement(i))i.removeChild(e);else if(i.el&&i.el.nativeElement)i.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+i}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let i=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let i=document.createElement("div");i.className="p-scrollbar-measure",document.body.appendChild(i);let o=i.offsetWidth-i.clientWidth;return document.body.removeChild(i),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let i=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=i,i}static invokeElementMethod(e,i,o){e[i].apply(e,o)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),i=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:i[1]||"",version:i[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,i){e&&document.activeElement!==e&&e.focus(i)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,i=""){let o=this.find(e,this.getFocusableSelectorString(i)),r=[];for(let s of o){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,i=""){let o=this.findSingle(e,this.getFocusableSelectorString(i));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(e,i=""){let o=this.getFocusableElements(e,i);return o.length>0?o[0]:null}static getLastFocusableElement(e,i){let o=this.getFocusableElements(e,i);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(e,i=!1){let o=t.getFocusableElements(e),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);i?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,i){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return i?.parentElement.parentElement;default:let o=typeof e;if(o==="string")return document.querySelector(e);if(o==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,i){if(e){let o=e.getAttribute(i);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,i={},...o){if(e){let r=document.createElement(e);return this.setAttributes(r,i),r.append(...o),r}}static setAttribute(e,i="",o){this.isElement(e)&&o!==null&&o!==void 0&&e.setAttribute(i,o)}static setAttributes(e,i={}){if(this.isElement(e)){let o=(r,s)=>{let a=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let d=Array.isArray(c)?o(r,c):Object.entries(c).map(([p,h])=>r==="style"&&(h||h===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?p:void 0);l=d.length?l.concat(d.filter(p=>!!p)):l}}return l},a)};Object.entries(i).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,i=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`):!1}}return t})(),yn=class{element;listener;scrollableParents;constructor(n,e=()=>{}){this.element=n,this.listener=e}bindScrollListener(){this.scrollableParents=Xe.getScrollableParents(this.element);for(let n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var vn=(()=>{class t extends P{autofocus=!1;_autofocus=!1;focused=!1;platformId=g(Et);document=g(at);host=g(ft);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){_e(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=Xe.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275dir=w({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",_],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[gt,A]})}return t})();var ir=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
    line-height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
    line-height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
    line-height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
    line-height: ${t("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,nr={root:({props:t,instance:n})=>["p-badge p-component",{"p-badge-circle":v(t.value)&&String(t.value).length===1,"p-badge-dot":N(t.value)&&!n.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},_n=(()=>{class t extends R{name="badge";theme=ir;classes=nr;static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var Je=(()=>{class t extends P{styleClass=rt();style=rt();badgeSize=rt();size=rt();severity=rt();value=rt();badgeDisabled=rt(!1,{transform:_});_componentStyle=g(_n);containerClass=tt(()=>{let e="p-badge p-component";return v(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),N(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275cmp=G({type:t,selectors:[["p-badge"]],hostVars:6,hostBindings:function(i,o){i&2&&(fi(o.style()),At(o.containerClass()),hi("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[T([_n]),A],decls:1,vars:1,template:function(i,o){i&1&&be(0),i&2&&ye(o.value())},dependencies:[vt,ut],encapsulation:2,changeDetection:0})}return t})(),Cn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=H({type:t});static \u0275inj=B({imports:[Je,ut,ut]})}return t})();var rr=["*"],sr=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,ar=(()=>{class t extends R{name="baseicon";inlineStyles=sr;static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var Sn=(()=>{class t extends P{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=N(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275cmp=G({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",_],styleClass:"styleClass"},features:[T([ar]),gt,A],ngContentSelectors:rr,decls:1,vars:0,template:function(i,o){i&1&&(bt(),yt(0))},encapsulation:2,changeDetection:0})}return t})();var En=(()=>{class t extends Sn{pathId;ngOnInit(){this.pathId="url(#"+zt()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275cmp=G({type:t,selectors:[["SpinnerIcon"]],features:[A],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,o){i&1&&(li(),Dt(0,"svg",0)(1,"g"),st(2,"path",1),It(),Dt(3,"defs")(4,"clipPath",2),st(5,"rect",3),It()()()),i&2&&(At(o.getClassNames()),z("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),F(),z("clip-path",o.pathId),F(3),D("id",o.pathId))},encapsulation:2})}return t})();var lr=["content"],cr=["loadingicon"],ur=["icon"],dr=["*"],Dn=t=>({class:t});function pr(t,n){t&1&&gi(0)}function hr(t,n){if(t&1&&st(0,"span",8),t&2){let e=K(3);D("ngClass",e.iconClass()),z("aria-hidden",!0)("data-pc-section","loadingicon")}}function fr(t,n){if(t&1&&st(0,"SpinnerIcon",9),t&2){let e=K(3);D("styleClass",e.spinnerIconClass())("spin",!0),z("aria-hidden",!0)("data-pc-section","loadingicon")}}function gr(t,n){if(t&1&&(fe(0),mt(1,hr,1,3,"span",6)(2,fr,1,4,"SpinnerIcon",7),ge()),t&2){let e=K(2);F(),D("ngIf",e.loadingIcon),F(),D("ngIf",!e.loadingIcon)}}function mr(t,n){}function br(t,n){if(t&1&&mt(0,mr,0,0,"ng-template",10),t&2){let e=K(2);D("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function yr(t,n){if(t&1&&(fe(0),mt(1,gr,3,2,"ng-container",2)(2,br,1,1,null,5),ge()),t&2){let e=K();F(),D("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),F(),D("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",$e(3,Dn,e.iconClass()))}}function vr(t,n){if(t&1&&st(0,"span",8),t&2){let e=K(2);At(e.icon),D("ngClass",e.iconClass()),z("data-pc-section","icon")}}function _r(t,n){}function Cr(t,n){if(t&1&&mt(0,_r,0,0,"ng-template",10),t&2){let e=K(2);D("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function Sr(t,n){if(t&1&&(fe(0),mt(1,vr,1,4,"span",11)(2,Cr,1,1,null,5),ge()),t&2){let e=K();F(),D("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),F(),D("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",$e(3,Dn,e.iconClass()))}}function Er(t,n){if(t&1&&(Dt(0,"span",12),be(1),It()),t&2){let e=K();z("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),F(),ye(e.label)}}function wr(t,n){if(t&1&&st(0,"p-badge",13),t&2){let e=K();D("value",e.badge)("severity",e.badgeSeverity)}}var Ar=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${t("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${t("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${t("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${t("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,Dr={root:({instance:t,props:n})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!n.label&&!n.badge,"p-button-vertical":(n.iconPos==="top"||n.iconPos==="bottom")&&n.label,"p-button-loading":n.loading,"p-button-link":n.link,[`p-button-${n.severity}`]:n.severity,"p-button-raised":n.raised,"p-button-rounded":n.rounded,"p-button-text":n.text,"p-button-outlined":n.outlined,"p-button-sm":n.size==="small","p-button-lg":n.size==="large","p-button-plain":n.plain,"p-button-fluid":n.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},pt=(()=>{class t extends R{name="button";theme=Ar;classes=Dr;static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var dt={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},wn=(()=>{class t extends P{_componentStyle=g(pt);static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275dir=w({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(i,o){i&2&&wt("p-button-label",!0)},features:[T([pt]),A]})}return t})(),An=(()=>{class t extends P{_componentStyle=g(pt);static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275dir=w({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(i,o){i&2&&wt("p-button-icon",!0)},features:[T([pt]),A]})}return t})(),Ql=(()=>{class t extends P{iconPos="left";loadingIcon;set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=Ve(An);labelSignal=Ve(wn);isIconOnly=tt(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([i,o])=>this[`_${i}`]!==o&&(this[`_${i}`]=o))}_severity;get severity(){return this._severity}set severity(e){this._severity=e,this.initialized&&this.setStyleClass()}raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid;_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(dt);isTextButton=tt(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=g(pt);ngAfterViewInit(){super.ngAfterViewInit(),lt(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:i}=e;if(i){let o=i.currentValue;for(let r in o)this[r]=o[r]}}getStyleClass(){let e=[dt.button,dt.component];return this.icon&&!this.label&&N(this.htmlElement.textContent)&&e.push(dt.iconOnly),this.loading&&(e.push(dt.disabled,dt.loading),!this.icon&&this.label&&e.push(dt.labelOnly),this.icon&&!this.label&&!N(this.htmlElement.textContent)&&e.push(dt.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),e}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return N(this.fluid)?!!i:this.fluid}setStyleClass(){let e=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}removeExistingSeverityClass(){let e=["success","info","warn","danger","help","primary","secondary","contrast"],i=this.htmlElement.classList.value.split(" ").find(o=>e.some(r=>o===`p-button-${r}`));i&&this.htmlElement.classList.remove(i)}createLabel(){if(!Tt(this.htmlElement,".p-button-label")&&this.label){let i=this.document.createElement("span");this.icon&&!this.label&&i.setAttribute("aria-hidden","true"),i.className="p-button-label",i.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(i)}}createIcon(){if(!Tt(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let i=this.document.createElement("span");i.className="p-button-icon",i.setAttribute("aria-hidden","true");let o=this.label?"p-button-icon-"+this.iconPos:null;o&&lt(i,o);let r=this.getIconClass();r&&lt(i,r),!this.loadingIcon&&this.loading&&(i.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(i,this.htmlElement.firstChild)}}updateLabel(){let e=Tt(this.htmlElement,".p-button-label");if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=Tt(this.htmlElement,".p-button-icon"),i=Tt(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e?this.iconPos?e.className="p-button-icon "+(i?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275dir=w({type:t,selectors:[["","pButton",""]],contentQueries:function(i,o,r){i&1&&(Re(r,o.iconSignal,An,5),Re(r,o.labelSignal,wn,5)),i&2&&mi(2)},hostVars:4,hostBindings:function(i,o){i&2&&wt("p-button-icon-only",o.isIconOnly())("p-button-text",o.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",_],rounded:[2,"rounded","rounded",_],text:[2,"text","text",_],outlined:[2,"outlined","outlined",_],size:"size",plain:[2,"plain","plain",_],fluid:[2,"fluid","fluid",_],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[T([pt]),gt,A,J]})}return t})(),Ir=(()=>{class t extends P{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new ot;onFocus=new ot;onBlur=new ot;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([i,o])=>this[`_${i}`]!==o&&(this[`_${i}`]=o))}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return N(this.fluid)?!!i:this.fluid}_componentStyle=g(pt);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:i}=e;if(i){let o=i.currentValue;for(let r in o)this[r]=o[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[i])=>e+` ${i}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(o){return(e||(e=C(t)))(o||t)}})();static \u0275cmp=G({type:t,selectors:[["p-button"]],contentQueries:function(i,o,r){if(i&1&&(Ht(r,lr,5),Ht(r,cr,5),Ht(r,ur,5),Ht(r,Pi,4)),i&2){let s;Wt(s=Ut())&&(o.contentTemplate=s.first),Wt(s=Ut())&&(o.loadingIconTemplate=s.first),Wt(s=Ut())&&(o.iconTemplate=s.first),Wt(s=Ut())&&(o.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",_],loading:[2,"loading","loading",_],loadingIcon:"loadingIcon",raised:[2,"raised","raised",_],rounded:[2,"rounded","rounded",_],text:[2,"text","text",_],plain:[2,"plain","plain",_],severity:"severity",outlined:[2,"outlined","outlined",_],link:[2,"link","link",_],tabindex:[2,"tabindex","tabindex",bi],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",_],fluid:[2,"fluid","fluid",_],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[T([pt]),gt,A,J],ngContentSelectors:dr,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(i,o){i&1&&(bt(),Dt(0,"button",0),me("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),yt(1),mt(2,pr,1,0,"ng-container",1)(3,yr,3,5,"ng-container",2)(4,Sr,3,5,"ng-container",2)(5,Er,2,3,"span",3)(6,wr,1,2,"p-badge",4),It()),i&2&&(D("ngStyle",o.style)("disabled",o.disabled||o.loading)("ngClass",o.buttonClass)("pAutoFocus",o.autofocus),z("type",o.type)("aria-label",o.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex),F(2),D("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),F(),D("ngIf",o.loading),F(),D("ngIf",!o.loading),F(),D("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),F(),D("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[vt,yi,vi,Ci,_i,bn,vn,En,Cn,Je,ut],encapsulation:2,changeDetection:0})}return t})(),Xl=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=H({type:t});static \u0275inj=B({imports:[vt,Ir,ut,ut]})}return t})();export{Ei as a,lt as b,Tr as c,_t as d,Or as e,Ai as f,zn as g,Kn as h,Fr as i,Mr as j,Di as k,Nr as l,Vr as m,Rr as n,$r as o,qn as p,Tt as q,Lr as r,Ii as s,kr as t,Pe as u,Pr as v,Br as w,Be as x,Hr as y,Wr as z,He as A,Ur as B,jr as C,Gr as D,zr as E,Fi as F,N as G,to as H,v as I,Se as J,Ue as K,Zr as L,Qr as M,Xr as N,Jr as O,zt as P,io as Q,gs as R,O as S,ms as T,bs as U,ys as V,vs as W,_s as X,Cs as Y,Pi as Z,ut as _,Ss as $,ho as aa,Ns as ba,Vs as ca,R as da,ze as ea,ia as fa,nn as ga,on as ha,Qt as ia,Ea as ja,Yo as ka,Xo as la,Aa as ma,P as na,bn as oa,Ka as pa,Xe as qa,yn as ra,vn as sa,Sn as ta,En as ua,Ql as va,Ir as wa,Xl as xa};
