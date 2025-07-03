import{K as oe,L as ce,Z as re,_ as S,da as ae,ga as se,ia as le,na as he,ta as D}from"./chunk-TCFV5Y4H.js";import{$b as j,Da as u,Jb as J,Ka as H,Kb as W,Lb as Y,O as A,Oa as g,P as N,Pa as P,Q,Sa as y,Ua as U,V as R,Va as v,_b as m,a as O,aa as Z,ab as l,ba as w,bb as s,ca as $,da as M,eb as z,fa as f,fb as b,jb as k,ka as T,kb as x,lb as p,mb as L,nb as B,oc as ee,pb as G,qc as te,rb as K,sb as V,sc as ne,vb as q,vc as ie,wb as X,xb as F,yb as E}from"./chunk-R62PTSFW.js";var pe=(()=>{class n extends D{static \u0275fac=(()=>{let t;return function(i){return(t||(t=f(n)))(i||n)}})();static \u0275cmp=g({type:n,selectors:[["CheckIcon"]],features:[y],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(o,i){o&1&&(M(),k(0,"svg",0),p(1,"path",1),x()),o&2&&(b(i.getClassNames()),l("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return n})();var de=(()=>{class n extends D{static \u0275fac=(()=>{let t;return function(i){return(t||(t=f(n)))(i||n)}})();static \u0275cmp=g({type:n,selectors:[["MinusIcon"]],features:[y],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(o,i){o&1&&(M(),k(0,"svg",0),p(1,"path",1),x()),o&2&&(b(i.getClassNames()),l("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return n})();var me=["checkboxicon"],ge=["input"],ye=()=>({"p-checkbox-input":!0}),Ce=n=>({checked:n,class:"p-checkbox-icon"});function Ie(n,e){if(n&1&&p(0,"span",8),n&2){let t=V(3);s("ngClass",t.checkboxIcon),l("data-pc-section","icon")}}function _e(n,e){n&1&&p(0,"CheckIcon",9),n&2&&(s("styleClass","p-checkbox-icon"),l("data-pc-section","icon"))}function ve(n,e){if(n&1&&(L(0),v(1,Ie,1,2,"span",7)(2,_e,1,2,"CheckIcon",6),B()),n&2){let t=V(2);u(),s("ngIf",t.checkboxIcon),u(),s("ngIf",!t.checkboxIcon)}}function we(n,e){n&1&&p(0,"MinusIcon",9),n&2&&(s("styleClass","p-checkbox-icon"),l("data-pc-section","icon"))}function $e(n,e){if(n&1&&(L(0),v(1,ve,3,2,"ng-container",4)(2,we,1,2,"MinusIcon",6),B()),n&2){let t=V();u(),s("ngIf",t.checked),u(),s("ngIf",t._indeterminate())}}function Me(n,e){}function Te(n,e){n&1&&v(0,Me,0,0,"ng-template")}var Ve=({dt:n})=>`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${n("checkbox.width")};
    height: ${n("checkbox.height")};
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: ${n("checkbox.border.radius")};
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${n("checkbox.border.radius")};
    border: 1px solid ${n("checkbox.border.color")};
    background: ${n("checkbox.background")};
    width: ${n("checkbox.width")};
    height: ${n("checkbox.height")};
    transition: background ${n("checkbox.transition.duration")}, color ${n("checkbox.transition.duration")}, border-color ${n("checkbox.transition.duration")}, box-shadow ${n("checkbox.transition.duration")}, outline-color ${n("checkbox.transition.duration")};
    outline-color: transparent;
    box-shadow: ${n("checkbox.shadow")};
}

.p-checkbox-icon {
    transition-duration: ${n("checkbox.transition.duration")};
    color: ${n("checkbox.icon.color")};
    font-size: ${n("checkbox.icon.size")};
    width: ${n("checkbox.icon.size")};
    height: ${n("checkbox.icon.size")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: ${n("checkbox.hover.border.color")};
}

.p-checkbox-checked .p-checkbox-box {
    border-color: ${n("checkbox.checked.border.color")};
    background: ${n("checkbox.checked.background")};
}

.p-checkbox-checked .p-checkbox-icon {
    color: ${n("checkbox.icon.checked.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${n("checkbox.checked.hover.background")};
    border-color: ${n("checkbox.checked.hover.border.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: ${n("checkbox.icon.checked.hover.color")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${n("checkbox.focus.border.color")};
    box-shadow: ${n("checkbox.focus.ring.shadow")};
    outline: ${n("checkbox.focus.ring.width")} ${n("checkbox.focus.ring.style")} ${n("checkbox.focus.ring.color")};
    outline-offset: ${n("checkbox.focus.ring.offset")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${n("checkbox.checked.focus.border.color")};
}

p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
    border-color: ${n("checkbox.invalid.border.color")};
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: ${n("checkbox.filled.background")};
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: ${n("checkbox.checked.background")};
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${n("checkbox.checked.hover.background")};
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: ${n("checkbox.disabled.background")};
    border-color: ${n("checkbox.checked.disabled.border.color")};
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: ${n("checkbox.icon.disabled.color")};
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: ${n("checkbox.sm.width")};
    height: ${n("checkbox.sm.height")};
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: ${n("checkbox.icon.sm.size")};
    width: ${n("checkbox.icon.sm.size")};
    height: ${n("checkbox.icon.sm.size")};
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: ${n("checkbox.lg.width")};
    height: ${n("checkbox.lg.height")};
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: ${n("checkbox.icon.lg.size")};
    width: ${n("checkbox.icon.lg.size")};
    height: ${n("checkbox.icon.lg.size")};
}
`,Fe={root:({instance:n,props:e})=>["p-checkbox p-component",{"p-checkbox-checked":n.checked,"p-disabled":e.disabled,"p-invalid":e.invalid,"p-variant-filled":e.variant?e.variant==="filled":n.config.inputStyle==="filled"||n.config.inputVariant==="filled"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},fe=(()=>{class n extends ae{name="checkbox";theme=Ve;classes=Fe;static \u0275fac=(()=>{let t;return function(i){return(t||(t=f(n)))(i||n)}})();static \u0275prov=N({token:n,factory:n.\u0275fac})}return n})();var Ee={provide:se,useExisting:A(()=>be),multi:!0},be=(()=>{class n extends he{value;name;disabled;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;style;inputStyle;styleClass;inputClass;indeterminate=!1;size;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant;onChange=new T;onFocus=new T;onBlur=new T;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.model===this.trueValue:ce(this.value,this.model)}get containerClass(){return{"p-checkbox p-component":!0,"p-checkbox-checked p-highlight":this.checked,"p-disabled":this.disabled,"p-variant-filled":this.variant==="filled"||this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-checkbox-sm p-inputfield-sm":this.size==="small","p-checkbox-lg p-inputfield-lg":this.size==="large"}}_indeterminate=H(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;_componentStyle=R(fe);ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._checkboxIconTemplate=t.template;break;case"checkboxicon":this._checkboxIconTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t),t.indeterminate&&this._indeterminate.set(t.indeterminate.currentValue)}updateModel(t){let o,i=this.injector.get(le,null,{optional:!0,self:!0}),c=i&&!this.formControl?i.value:this.model;this.binary?(o=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.model=o,this.onModelChange(o)):(this.checked||this._indeterminate()?o=c.filter(r=>!oe(r,this.value)):o=c?[...c,this.value]:[this.value],this.onModelChange(o),this.model=o,this.formControl&&this.formControl.setValue(o)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:o,originalEvent:t})}handleChange(t){this.readonly||this.updateModel(t)}onInputFocus(t){this.focused=!0,this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.onBlur.emit(t),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(t){this.model=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){setTimeout(()=>{this.disabled=t,this.cd.markForCheck()})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=f(n)))(i||n)}})();static \u0275cmp=g({type:n,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(o,i,c){if(o&1&&(q(c,me,4),q(c,re,4)),o&2){let r;F(r=E())&&(i.checkboxIconTemplate=r.first),F(r=E())&&(i.templates=r)}},viewQuery:function(o,i){if(o&1&&X(ge,5),o&2){let c;F(c=E())&&(i.inputViewChild=c.first)}},inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",m],binary:[2,"binary","binary",m],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",j],inputId:"inputId",style:"style",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",m],size:"size",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",m],required:[2,"required","required",m],autofocus:[2,"autofocus","autofocus",m],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[J([Ee,fe]),U,y,Z],decls:6,vars:29,consts:[["input",""],[3,"ngClass"],["type","checkbox",3,"focus","blur","change","value","checked","disabled","readonly","ngClass"],[1,"p-checkbox-box"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"]],template:function(o,i){if(o&1){let c=G();k(0,"div",1)(1,"input",2,0),K("focus",function(a){return w(c),$(i.onInputFocus(a))})("blur",function(a){return w(c),$(i.onInputBlur(a))})("change",function(a){return w(c),$(i.handleChange(a))}),x(),k(3,"div",3),v(4,$e,3,2,"ng-container",4)(5,Te,1,0,null,5),x()()}o&2&&(z(i.style),b(i.styleClass),s("ngClass",i.containerClass),l("data-p-highlight",i.checked)("data-p-checked",i.checked)("data-p-disabled",i.disabled),u(),z(i.inputStyle),b(i.inputClass),s("value",i.value)("checked",i.checked)("disabled",i.disabled)("readonly",i.readonly)("ngClass",W(26,ye)),l("id",i.inputId)("name",i.name)("tabindex",i.tabindex)("required",i.required?!0:null)("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel),u(3),s("ngIf",!i.checkboxIconTemplate&&!i._checkboxIconTemplate),u(),s("ngTemplateOutlet",i.checkboxIconTemplate||i._checkboxIconTemplate)("ngTemplateOutletContext",Y(27,Ce,i.checked)))},dependencies:[ie,ee,te,ne,pe,de,S],encapsulation:2,changeDetection:0})}return n})(),nt=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=P({type:n});static \u0275inj=Q({imports:[be,S,S]})}return n})();var ke=class n{static isArray(e,t=!0){return Array.isArray(e)&&(t||e.length!==0)}static isObject(e,t=!0){return typeof e=="object"&&!Array.isArray(e)&&e!=null&&(t||Object.keys(e).length!==0)}static equals(e,t,o){return o?this.resolveFieldData(e,o)===this.resolveFieldData(t,o):this.equalsByValue(e,t)}static equalsByValue(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var o=Array.isArray(e),i=Array.isArray(t),c,r,a;if(o&&i){if(r=e.length,r!=t.length)return!1;for(c=r;c--!==0;)if(!this.equalsByValue(e[c],t[c]))return!1;return!0}if(o!=i)return!1;var h=this.isDate(e),C=this.isDate(t);if(h!=C)return!1;if(h&&C)return e.getTime()==t.getTime();var I=e instanceof RegExp,_=t instanceof RegExp;if(I!=_)return!1;if(I&&_)return e.toString()==t.toString();var d=Object.keys(e);if(r=d.length,r!==Object.keys(t).length)return!1;for(c=r;c--!==0;)if(!Object.prototype.hasOwnProperty.call(t,d[c]))return!1;for(c=r;c--!==0;)if(a=d[c],!this.equalsByValue(e[a],t[a]))return!1;return!0}return e!==e&&t!==t}static resolveFieldData(e,t){if(e&&t){if(this.isFunction(t))return t(e);if(t.indexOf(".")==-1)return e[t];{let o=t.split("."),i=e;for(let c=0,r=o.length;c<r;++c){if(i==null)return null;i=i[o[c]]}return i}}else return null}static isFunction(e){return!!(e&&e.constructor&&e.call&&e.apply)}static reorderArray(e,t,o){let i;e&&t!==o&&(o>=e.length&&(o%=e.length,t%=e.length),e.splice(o,0,e.splice(t,1)[0]))}static insertIntoOrderedArray(e,t,o,i){if(o.length>0){let c=!1;for(let r=0;r<o.length;r++)if(this.findIndexInList(o[r],i)>t){o.splice(r,0,e),c=!0;break}c||o.push(e)}else o.push(e)}static findIndexInList(e,t){let o=-1;if(t){for(let i=0;i<t.length;i++)if(t[i]==e){o=i;break}}return o}static contains(e,t){if(e!=null&&t&&t.length){for(let o of t)if(this.equals(e,o))return!0}return!1}static removeAccents(e){return e&&(e=e.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),e}static isDate(e){return Object.prototype.toString.call(e)==="[object Date]"}static isEmpty(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!this.isDate(e)&&typeof e=="object"&&Object.keys(e).length===0}static isNotEmpty(e){return!this.isEmpty(e)}static compare(e,t,o,i=1){let c=-1,r=this.isEmpty(e),a=this.isEmpty(t);return r&&a?c=0:r?c=i:a?c=-i:typeof e=="string"&&typeof t=="string"?c=e.localeCompare(t,o,{numeric:!0}):c=e<t?-1:e>t?1:0,c}static sort(e,t,o=1,i,c=1){let r=n.compare(e,t,i,o),a=o;return(n.isEmpty(e)||n.isEmpty(t))&&(a=c===1?o:c),a*r}static merge(e,t){if(!(e==null&&t==null)){{if((e==null||typeof e=="object")&&(t==null||typeof t=="object"))return O(O({},e||{}),t||{});if((e==null||typeof e=="string")&&(t==null||typeof t=="string"))return[e||"",t||""].join(" ")}return t||e}}static isPrintableCharacter(e=""){return this.isNotEmpty(e)&&e.length===1&&e.match(/\S| /)}static getItemValue(e,...t){return this.isFunction(e)?e(...t):e}static findLastIndex(e,t){let o=-1;if(this.isNotEmpty(e))try{o=e.findLastIndex(t)}catch{o=e.lastIndexOf([...e].reverse().find(t))}return o}static findLast(e,t){let o;if(this.isNotEmpty(e))try{o=e.findLast(t)}catch{o=[...e].reverse().find(t)}return o}static deepEquals(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var o=Array.isArray(e),i=Array.isArray(t),c,r,a;if(o&&i){if(r=e.length,r!=t.length)return!1;for(c=r;c--!==0;)if(!this.deepEquals(e[c],t[c]))return!1;return!0}if(o!=i)return!1;var h=e instanceof Date,C=t instanceof Date;if(h!=C)return!1;if(h&&C)return e.getTime()==t.getTime();var I=e instanceof RegExp,_=t instanceof RegExp;if(I!=_)return!1;if(I&&_)return e.toString()==t.toString();var d=Object.keys(e);if(r=d.length,r!==Object.keys(t).length)return!1;for(c=r;c--!==0;)if(!Object.prototype.hasOwnProperty.call(t,d[c]))return!1;for(c=r;c--!==0;)if(a=d[c],!this.deepEquals(e[a],t[a]))return!1;return!0}return e!==e&&t!==t}static minifyCSS(e){return e&&e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(e){return this.isString(e)?e.replace(/(-|_)/g,"").toLowerCase():e}static isString(e,t=!0){return typeof e=="string"&&(t||e!=="")}},xe=0;function ot(n="pn_id_"){return xe++,`${n}${xe}`}function Se(){let n=[],e=(c,r)=>{let a=n.length>0?n[n.length-1]:{key:c,value:r},h=a.value+(a.key===c?0:r)+2;return n.push({key:c,value:h}),h},t=c=>{n=n.filter(r=>r.value!==c)},o=()=>n.length>0?n[n.length-1].value:0,i=c=>c&&parseInt(c.style.zIndex,10)||0;return{get:i,set:(c,r,a)=>{r&&(r.style.zIndex=String(e(c,a)))},clear:c=>{c&&(t(i(c)),c.style.zIndex="")},getCurrent:()=>o(),generateZIndex:e,revertZIndex:t}}var ct=Se();export{pe as a,be as b,nt as c,ke as d,ot as e,ct as f};
