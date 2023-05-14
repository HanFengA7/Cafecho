import{E as we}from"./@tinymce-0701f23f.js";import{t as _e}from"./tinymce-a1c110f5.js";import{d as Ae,r as Ce,w as ke,Z as De,a0 as Ne,_ as xe,c as Oe,u as Se,F as Te}from"./@vue-ed0e62b5.js";(function(){var bt=tinymce.util.Tools.resolve("tinymce.PluginManager");const W=Object.getPrototypeOf,H=(t,e,r)=>{var l;return!!r(t,e.prototype)||((l=t.constructor)===null||l===void 0?void 0:l.name)===e.name},j=t=>e=>(r=>{const l=typeof r;return r===null?"null":l==="object"&&Array.isArray(r)?"array":l==="object"&&H(r,String,(s,c)=>c.isPrototypeOf(s))?"string":l})(e)===t,P=t=>e=>typeof e===t,S=j("string"),Y=j("object"),tt=t=>((e,r)=>Y(e)&&H(e,r,(l,s)=>W(l)===s))(t,Object),at=j("array"),Bt=t=>t===null,ft=P("boolean"),B=t=>!(e=>e==null)(t),zt=P("function"),v=P("number"),ue=()=>{};class D{constructor(e,r){this.tag=e,this.value=r}static some(e){return new D(!0,e)}static none(){return D.singletonNone}fold(e,r){return this.tag?r(this.value):e()}isSome(){return this.tag}isNone(){return!this.tag}map(e){return this.tag?D.some(e(this.value)):D.none()}bind(e){return this.tag?e(this.value):D.none()}exists(e){return this.tag&&e(this.value)}forall(e){return!this.tag||e(this.value)}filter(e){return!this.tag||e(this.value)?this:D.none()}getOr(e){return this.tag?this.value:e}or(e){return this.tag?this:e}getOrThunk(e){return this.tag?this.value:e()}orThunk(e){return this.tag?this:e()}getOrDie(e){if(this.tag)return this.value;throw new Error(e??"Called getOrDie on None")}static from(e){return B(e)?D.some(e):D.none()}getOrNull(){return this.tag?this.value:null}getOrUndefined(){return this.value}each(e){this.tag&&e(this.value)}toArray(){return this.tag?[this.value]:[]}toString(){return this.tag?`some(${this.value})`:"none()"}}D.singletonNone=new D(!1);const Ft=Object.keys,Vt=Object.hasOwnProperty,it=(t,e)=>Vt.call(t,e),me=Array.prototype.push,G=t=>{const e=[];for(let r=0,l=t.length;r<l;++r){if(!at(t[r]))throw new Error("Arr.flatten item "+r+" was not an array, input: "+t);me.apply(e,t[r])}return e};typeof window<"u"||Function("return this;")();const E=(t,e,r)=>{((l,s,c)=>{if(!(S(c)||ft(c)||v(c)))throw console.error("Invalid call to Attribute.set. Key ",s,":: Value ",c,":: Element ",l),new Error("Attribute value was not simple");l.setAttribute(s,c+"")})(t.dom,e,r)},Kt=t=>{if(t==null)throw new Error("Node cannot be null or undefined");return{dom:t}},yt=Kt;var de=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),Ht=tinymce.util.Tools.resolve("tinymce.util.URI");const Gt=t=>t.length>0,L=t=>e=>e.options.get(t),kt=L("image_dimensions"),ge=L("image_advtab"),he=L("image_uploadtab"),$t=L("image_prepend_url"),pe=L("image_class_list"),st=L("image_description"),xt=L("image_title"),qt=L("image_caption"),Wt=L("image_list"),wt=L("a11y_advanced_options"),Zt=L("automatic_uploads"),Z=(t,e)=>Math.max(parseInt(t,10),parseInt(e,10)),lt=t=>(t&&(t=t.replace(/px$/,"")),t),ct=t=>(t.length>0&&/^[0-9]+$/.test(t)&&(t+="px"),t),Jt=t=>t.nodeName==="IMG"&&(t.hasAttribute("data-mce-object")||t.hasAttribute("data-mce-placeholder")),ut=(t,e)=>{const r=t.options.get;return Ht.isDomSafe(e,"img",{allow_html_data_urls:r("allow_html_data_urls"),allow_script_urls:r("allow_script_urls"),allow_svg_data_urls:r("allow_svg_data_urls")})},R=de.DOM,Qt=t=>t.style.marginLeft&&t.style.marginRight&&t.style.marginLeft===t.style.marginRight?lt(t.style.marginLeft):"",_t=t=>t.style.marginTop&&t.style.marginBottom&&t.style.marginTop===t.style.marginBottom?lt(t.style.marginTop):"",At=t=>t.style.borderWidth?lt(t.style.borderWidth):"",$=(t,e)=>{var r;return t.hasAttribute(e)&&(r=t.getAttribute(e))!==null&&r!==void 0?r:""},Ct=t=>t.parentNode!==null&&t.parentNode.nodeName==="FIGURE",V=(t,e,r)=>{r===""||r===null?t.removeAttribute(e):t.setAttribute(e,r)},Dt=(t,e)=>{const r=t.getAttribute("style"),l=e(r!==null?r:"");l.length>0?(t.setAttribute("style",l),t.setAttribute("data-mce-style",l)):t.removeAttribute("style")},q=(t,e)=>(r,l,s)=>{const c=r.style;c[l]?(c[l]=ct(s),Dt(r,e)):V(r,l,s)},et=(t,e)=>t.style[e]?lt(t.style[e]):$(t,e),Nt=(t,e)=>{const r=ct(e);t.style.marginLeft=r,t.style.marginRight=r},mt=(t,e)=>{const r=ct(e);t.style.marginTop=r,t.style.marginBottom=r},Ot=(t,e)=>{const r=ct(e);t.style.borderWidth=r},St=(t,e)=>{t.style.borderStyle=e},Tt=t=>{var e;return(e=t.style.borderStyle)!==null&&e!==void 0?e:""},nt=t=>B(t)&&t.nodeName==="FIGURE",Xt=t=>R.getAttrib(t,"alt").length===0&&R.getAttrib(t,"role")==="presentation",ve=t=>Xt(t)?"":$(t,"alt"),Yt=(t,e)=>{var r;const l=document.createElement("img");return V(l,"style",e.style),(Qt(l)||e.hspace!=="")&&Nt(l,e.hspace),(_t(l)||e.vspace!=="")&&mt(l,e.vspace),(At(l)||e.border!=="")&&Ot(l,e.border),(Tt(l)||e.borderStyle!=="")&&St(l,e.borderStyle),t((r=l.getAttribute("style"))!==null&&r!==void 0?r:"")},J=(t,e)=>({src:$(e,"src"),alt:ve(e),title:$(e,"title"),width:et(e,"width"),height:et(e,"height"),class:$(e,"class"),style:t($(e,"style")),caption:Ct(e),hspace:Qt(e),vspace:_t(e),border:At(e),borderStyle:Tt(e),isDecorative:Xt(e)}),M=(t,e,r,l,s)=>{r[l]!==e[l]&&s(t,l,String(r[l]))},te=(t,e,r)=>{if(r){R.setAttrib(t,"role","presentation");const l=yt(t);E(l,"alt","")}else{if(Bt(e))yt(t).dom.removeAttribute("alt");else{const l=yt(t);E(l,"alt",e)}R.getAttrib(t,"role")==="presentation"&&R.setAttrib(t,"role","")}},Q=(t,e)=>(r,l,s)=>{t(r,s),Dt(r,e)},ee=(t,e,r)=>{const l=J(t,r);M(r,l,e,"caption",(s,c,p)=>(g=>{Ct(g)?(f=>{const x=f.parentNode;B(x)&&(R.insertAfter(f,x),R.remove(x))})(g):(f=>{const x=R.create("figure",{class:"image"});R.insertAfter(x,f),x.appendChild(f),x.appendChild(R.create("figcaption",{contentEditable:"true"},"Caption")),x.contentEditable="false"})(g)})(s)),M(r,l,e,"src",V),M(r,l,e,"title",V),M(r,l,e,"width",q(0,t)),M(r,l,e,"height",q(0,t)),M(r,l,e,"class",V),M(r,l,e,"style",Q((s,c)=>V(s,"style",c),t)),M(r,l,e,"hspace",Q(Nt,t)),M(r,l,e,"vspace",Q(mt,t)),M(r,l,e,"border",Q(Ot,t)),M(r,l,e,"borderStyle",Q(St,t)),((s,c,p)=>{p.alt===c.alt&&p.isDecorative===c.isDecorative||te(s,p.alt,p.isDecorative)})(r,l,e)},ot=(t,e)=>{const r=(s=>{if(s.margin){const c=String(s.margin).split(" ");switch(c.length){case 1:s["margin-top"]=s["margin-top"]||c[0],s["margin-right"]=s["margin-right"]||c[0],s["margin-bottom"]=s["margin-bottom"]||c[0],s["margin-left"]=s["margin-left"]||c[0];break;case 2:s["margin-top"]=s["margin-top"]||c[0],s["margin-right"]=s["margin-right"]||c[1],s["margin-bottom"]=s["margin-bottom"]||c[0],s["margin-left"]=s["margin-left"]||c[1];break;case 3:s["margin-top"]=s["margin-top"]||c[0],s["margin-right"]=s["margin-right"]||c[1],s["margin-bottom"]=s["margin-bottom"]||c[2],s["margin-left"]=s["margin-left"]||c[1];break;case 4:s["margin-top"]=s["margin-top"]||c[0],s["margin-right"]=s["margin-right"]||c[1],s["margin-bottom"]=s["margin-bottom"]||c[2],s["margin-left"]=s["margin-left"]||c[3]}delete s.margin}return s})(t.dom.styles.parse(e)),l=t.dom.styles.parse(t.dom.styles.serialize(r));return t.dom.styles.serialize(l)},dt=t=>{const e=t.selection.getNode(),r=t.dom.getParent(e,"figure.image");return r?t.dom.select("img",r)[0]:e&&(e.nodeName!=="IMG"||Jt(e))?null:e},ne=(t,e)=>{var r;const l=t.dom,s=((p,g)=>{const f={};var x;return((A,y,z,U)=>{((F,vt)=>{const Mt=Ft(F);for(let T=0,X=Mt.length;T<X;T++){const K=Mt[T];vt(F[K],K)}})(A,(F,vt)=>{(y(F,vt)?z:U)(F,vt)})})(p,(A,y)=>!t.schema.isValidChild(y,"figure"),(x=f,(A,y)=>{x[y]=A}),ue),f})(t.schema.getTextBlockElements()),c=l.getParent(e.parentNode,p=>{return g=s,f=p.nodeName,it(g,f)&&g[f]!==void 0&&g[f]!==null;var g,f},t.getBody());return c&&(r=l.split(c,e))!==null&&r!==void 0?r:e},be=(t,e)=>{const r=((s,c)=>{const p=document.createElement("img");if(ee(g=>ot(t,g),{...c,caption:!1},p),te(p,c.alt,c.isDecorative),c.caption){const g=R.create("figure",{class:"image"});return g.appendChild(p),g.appendChild(R.create("figcaption",{contentEditable:"true"},"Caption")),g.contentEditable="false",g}return p})(0,e);t.dom.setAttrib(r,"data-mce-id","__mcenew"),t.focus(),t.selection.setContent(r.outerHTML);const l=t.dom.select('*[data-mce-id="__mcenew"]')[0];if(t.dom.setAttrib(l,"data-mce-id",null),nt(l)){const s=ne(t,l);t.selection.select(s)}else t.selection.select(l)},fe=(t,e)=>{const r=dt(t);if(r){const l={...J(c=>ot(t,c),r),...e},s=((c,p)=>{const g=p.src;return{...p,src:ut(c,g)?g:""}})(t,l);l.src?((c,p)=>{const g=dt(c);if(g)if(ee(f=>ot(c,f),p,g),((f,x)=>{f.dom.setAttrib(x,"src",x.getAttribute("src"))})(c,g),nt(g.parentNode)){const f=g.parentNode;ne(c,f),c.selection.select(g.parentNode)}else c.selection.select(g),((f,x,A)=>{const y=()=>{A.onload=A.onerror=null,f.selection&&(f.selection.select(A),f.nodeChanged())};A.onload=()=>{x.width||x.height||!kt(f)||f.dom.setAttribs(A,{width:String(A.clientWidth),height:String(A.clientHeight)}),y()},A.onerror=y})(c,p,g)})(t,s):((c,p)=>{if(p){const g=c.dom.is(p.parentNode,"figure.image")?p.parentNode:p;c.dom.remove(g),c.focus(),c.nodeChanged(),c.dom.isEmpty(c.getBody())&&(c.setContent(""),c.selection.setCursorLocation())}})(t,r)}else e.src&&be(t,{src:"",alt:"",title:"",width:"",height:"",class:"",style:"",caption:!1,hspace:"",vspace:"",border:"",borderStyle:"",isDecorative:!1,...e})},It=(oe=(t,e)=>tt(t)&&tt(e)?It(t,e):e,(...t)=>{if(t.length===0)throw new Error("Can't merge zero objects");const e={};for(let r=0;r<t.length;r++){const l=t[r];for(const s in l)it(l,s)&&(e[s]=oe(e[s],l[s]))}return e});var oe,re=tinymce.util.Tools.resolve("tinymce.util.ImageUploader"),ae=tinymce.util.Tools.resolve("tinymce.util.Tools");const gt=t=>S(t.value)?t.value:"",ie=(t,e)=>{const r=[];return ae.each(t,l=>{const s=(c=>S(c.text)?c.text:S(c.title)?c.title:"")(l);if(l.menu!==void 0){const c=ie(l.menu,e);r.push({text:s,items:c})}else{const c=e(l);r.push({text:s,value:c})}}),r},se=(t=gt)=>e=>e?D.from(e).map(r=>ie(r,t)):D.none(),le=(t,e)=>((r,l)=>{for(let c=0;c<r.length;c++){const p=(g=>it(g,"items"))(s=r[c])?le(s.items,e):s.value===e?D.some(s):D.none();if(p.isSome())return p}var s;return D.none()})(t),ce=se,rt=(t,e)=>t.bind(r=>le(r,e)),Ut=t=>{const e=ce(T=>t.convertURL(T.value||T.url||"","src")),r=new Promise(T=>{((X,K)=>{const jt=Wt(X);S(jt)?fetch(jt).then(ye=>{ye.ok&&ye.json().then(K)}):zt(jt)?jt(K):K(jt)})(t,X=>{T(e(X).map(K=>G([[{text:"None",value:""}],K])))})}),l=(Mt=pe(t),se(gt)(Mt)),s=ge(t),c=he(t),p=(T=>Gt(T.options.get("images_upload_url")))(t),g=(T=>B(T.options.get("images_upload_handler")))(t),f=(T=>{const X=dt(T);return X?J(K=>ot(T,K),X):{src:"",alt:"",title:"",width:"",height:"",class:"",style:"",caption:!1,hspace:"",vspace:"",border:"",borderStyle:"",isDecorative:!1}})(t),x=st(t),A=xt(t),y=kt(t),z=qt(t),U=wt(t),F=Zt(t),vt=D.some($t(t)).filter(T=>S(T)&&T.length>0);var Mt;return r.then(T=>({image:f,imageList:T,classList:l,hasAdvTab:s,hasUploadTab:c,hasUploadUrl:p,hasUploadHandler:g,hasDescription:x,hasImageTitle:A,hasDimensions:y,hasImageCaption:z,prependURL:vt,hasAccessibilityOptions:U,automaticUploads:F}))},Et=t=>{const e=t.imageList.map(c=>({name:"images",type:"listbox",label:"Image list",items:c})),r={name:"alt",type:"input",label:"Alternative description",enabled:!(t.hasAccessibilityOptions&&t.image.isDecorative)},l=t.classList.map(c=>({name:"classes",type:"listbox",label:"Class",items:c}));return G([[{name:"src",type:"urlinput",filetype:"image",label:"Source"}],e.toArray(),t.hasAccessibilityOptions&&t.hasDescription?[{type:"label",label:"Accessibility",items:[{name:"isDecorative",type:"checkbox",label:"Image is decorative"}]}]:[],t.hasDescription?[r]:[],t.hasImageTitle?[{name:"title",type:"input",label:"Image title"}]:[],t.hasDimensions?[{name:"dimensions",type:"sizeinput"}]:[],[{...(s=t.classList.isSome()&&t.hasImageCaption,s?{type:"grid",columns:2}:{type:"panel"}),items:G([l.toArray(),t.hasImageCaption?[{type:"label",label:"Caption",items:[{type:"checkbox",name:"caption",label:"Show caption"}]}]:[]])}]]);var s},Lt=t=>({title:"General",name:"general",items:Et(t)}),Rt=Et,ht=t=>({src:{value:t.src,meta:{}},images:t.src,alt:t.alt,title:t.title,dimensions:{width:t.width,height:t.height},classes:t.class,caption:t.caption,style:t.style,vspace:t.vspace,border:t.border,hspace:t.hspace,borderstyle:t.borderStyle,fileinput:[],isDecorative:t.isDecorative}),Pt=(t,e)=>({src:t.src.value,alt:t.alt!==null&&t.alt.length!==0||!e?t.alt:null,title:t.title,width:t.dimensions.width,height:t.dimensions.height,class:t.classes,style:t.style,caption:t.caption,hspace:t.hspace,vspace:t.vspace,border:t.border,borderStyle:t.borderstyle,isDecorative:t.isDecorative}),pt=(t,e,r,l)=>{((s,c)=>{const p=c.getData();((g,f)=>/^(?:[a-zA-Z]+:)?\/\//.test(f)?D.none():g.prependURL.bind(x=>f.substring(0,x.length)!==x?D.some(x+f):D.none()))(s,p.src.value).each(g=>{c.setData({src:{value:g,meta:p.src.meta}})})})(e,l),((s,c)=>{const p=c.getData(),g=p.src.meta;if(g!==void 0){const f=It({},p);((x,A,y)=>{x.hasDescription&&S(y.alt)&&(A.alt=y.alt),x.hasAccessibilityOptions&&(A.isDecorative=y.isDecorative||A.isDecorative||!1),x.hasImageTitle&&S(y.title)&&(A.title=y.title),x.hasDimensions&&(S(y.width)&&(A.dimensions.width=y.width),S(y.height)&&(A.dimensions.height=y.height)),S(y.class)&&rt(x.classList,y.class).each(z=>{A.classes=z.value}),x.hasImageCaption&&ft(y.caption)&&(A.caption=y.caption),x.hasAdvTab&&(S(y.style)&&(A.style=y.style),S(y.vspace)&&(A.vspace=y.vspace),S(y.border)&&(A.border=y.border),S(y.hspace)&&(A.hspace=y.hspace),S(y.borderstyle)&&(A.borderstyle=y.borderstyle))})(s,f,g),c.setData(f)}})(e,l),((s,c,p,g)=>{const f=g.getData(),x=f.src.value,A=f.src.meta||{};A.width||A.height||!c.hasDimensions||(Gt(x)?s.imageSize(x).then(y=>{p.open&&g.setData({dimensions:y})}).catch(y=>console.error(y)):g.setData({dimensions:{width:"",height:""}}))})(t,e,r,l),((s,c,p)=>{const g=p.getData(),f=rt(s.imageList,g.src.value);c.prevImage=f,p.setData({images:f.map(x=>x.value).getOr("")})})(e,r,l)},o=(t,e,r,l)=>{const s=l.getData();var c;l.block("Uploading image"),(c=s.fileinput,((p,g)=>0<p.length?D.some(p[0]):D.none())(c)).fold(()=>{l.unblock()},p=>{const g=URL.createObjectURL(p),f=()=>{l.unblock(),URL.revokeObjectURL(g)},x=y=>{l.setData({src:{value:y,meta:{}}}),l.showTab("general"),pt(t,e,r,l)};var A;(A=p,new Promise((y,z)=>{const U=new FileReader;U.onload=()=>{y(U.result)},U.onerror=()=>{var F;z((F=U.error)===null||F===void 0?void 0:F.message)},U.readAsDataURL(A)})).then(y=>{const z=t.createBlobCache(p,g,y);e.automaticUploads?t.uploadImage(z).then(U=>{x(U.url),f()}).catch(U=>{f(),t.alertErr(U)}):(t.addToBlobCache(z),x(z.blobUri()),l.unblock())})})},n=(t,e,r)=>(l,s)=>{s.name==="src"?pt(t,e,r,l):s.name==="images"?((c,p,g,f)=>{const x=f.getData(),A=rt(p.imageList,x.images);A.each(y=>{x.alt===""||g.prevImage.map(U=>U.text===x.alt).getOr(!1)?y.value===""?f.setData({src:y,alt:g.prevAlt}):f.setData({src:y,alt:y.text}):f.setData({src:y})}),g.prevImage=A,pt(c,p,g,f)})(t,e,r,l):s.name==="alt"?r.prevAlt=l.getData().alt:s.name==="fileinput"?o(t,e,r,l):s.name==="isDecorative"&&l.setEnabled("alt",!l.getData().isDecorative)},a=t=>()=>{t.open=!1},i=t=>t.hasAdvTab||t.hasUploadUrl||t.hasUploadHandler?{type:"tabpanel",tabs:G([[Lt(t)],t.hasAdvTab?[{title:"Advanced",name:"advanced",items:[{type:"grid",columns:2,items:[{type:"input",label:"Vertical space",name:"vspace",inputMode:"numeric"},{type:"input",label:"Horizontal space",name:"hspace",inputMode:"numeric"},{type:"input",label:"Border width",name:"border",inputMode:"numeric"},{type:"listbox",name:"borderstyle",label:"Border style",items:[{text:"Select...",value:""},{text:"Solid",value:"solid"},{text:"Dotted",value:"dotted"},{text:"Dashed",value:"dashed"},{text:"Double",value:"double"},{text:"Groove",value:"groove"},{text:"Ridge",value:"ridge"},{text:"Inset",value:"inset"},{text:"Outset",value:"outset"},{text:"None",value:"none"},{text:"Hidden",value:"hidden"}]}]}]}]:[],t.hasUploadTab&&(t.hasUploadUrl||t.hasUploadHandler)?[{title:"Upload",name:"upload",items:[{type:"dropzone",name:"fileinput"}]}]:[]])}:{type:"panel",items:Rt(t)},u=(t,e,r)=>l=>{const s=It(ht(e.image),l.getData()),c={...s,style:Yt(r.normalizeCss,Pt(s,!1))};t.execCommand("mceUpdateImage",!1,Pt(c,e.hasAccessibilityOptions)),t.editorUpload.uploadImagesAuto(),l.close()},d=t=>e=>ut(t,e)?(r=>new Promise(l=>{const s=document.createElement("img"),c=g=>{s.onload=s.onerror=null,s.parentNode&&s.parentNode.removeChild(s),l(g)};s.onload=()=>{const g={width:Z(s.width,s.clientWidth),height:Z(s.height,s.clientHeight)};c(Promise.resolve(g))},s.onerror=()=>{c(Promise.reject(`Failed to get image dimensions for: ${r}`))};const p=s.style;p.visibility="hidden",p.position="fixed",p.bottom=p.left="0px",p.width=p.height="auto",document.body.appendChild(s),s.src=r}))(t.documentBaseURI.toAbsolute(e)).then(r=>({width:String(r.width),height:String(r.height)})):Promise.resolve({width:"",height:""}),m=t=>(e,r,l)=>{var s;return t.editorUpload.blobCache.create({blob:e,blobUri:r,name:(s=e.name)===null||s===void 0?void 0:s.replace(/\.[^\.]+$/,""),filename:e.name,base64:l.split(",")[1]})},h=t=>e=>{t.editorUpload.blobCache.add(e)},b=t=>e=>{t.windowManager.alert(e)},w=t=>e=>ot(t,e),_=t=>e=>t.dom.parseStyle(e),C=t=>(e,r)=>t.dom.serializeStyle(e,r),k=t=>e=>re(t).upload([e],!1).then(r=>{var l;return r.length===0?Promise.reject("Failed to upload image"):r[0].status===!1?Promise.reject((l=r[0].error)===null||l===void 0?void 0:l.message):r[0]}),O=t=>{const e={imageSize:d(t),addToBlobCache:h(t),createBlobCache:m(t),alertErr:b(t),normalizeCss:w(t),parseStyle:_(t),serializeStyle:C(t),uploadImage:k(t)};return{open:()=>{Ut(t).then(r=>{const l=(s=>({prevImage:rt(s.imageList,s.image.src),prevAlt:s.image.alt,open:!0}))(r);return{title:"Insert/Edit Image",size:"normal",body:i(r),buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:ht(r.image),onSubmit:u(t,r,e),onChange:n(e,r,l),onClose:a(l)}}).then(t.windowManager.open)}}},I=t=>{const e=t.attr("class");return B(e)&&/\bimage\b/.test(e)},N=t=>e=>{let r=e.length;const l=s=>{s.attr("contenteditable",t?"true":null)};for(;r--;){const s=e[r];I(s)&&(s.attr("contenteditable",t?"false":null),ae.each(s.getAll("figcaption"),l))}};bt.add("image",t=>{(e=>{const r=e.options.register;r("image_dimensions",{processor:"boolean",default:!0}),r("image_advtab",{processor:"boolean",default:!1}),r("image_uploadtab",{processor:"boolean",default:!0}),r("image_prepend_url",{processor:"string",default:""}),r("image_class_list",{processor:"object[]"}),r("image_description",{processor:"boolean",default:!0}),r("image_title",{processor:"boolean",default:!1}),r("image_caption",{processor:"boolean",default:!1}),r("image_list",{processor:l=>{const s=l===!1||S(l)||((c,p)=>{if(at(c)){for(let g=0,f=c.length;g<f;++g)if(!p(c[g]))return!1;return!0}return!1})(l,Y)||zt(l);return s?{value:l,valid:s}:{valid:!1,message:"Must be false, a string, an array or a function."}},default:!1})})(t),(e=>{e.on("PreInit",()=>{e.parser.addNodeFilter("figure",N(!0)),e.serializer.addNodeFilter("figure",N(!1))})})(t),(e=>{e.ui.registry.addToggleButton("image",{icon:"image",tooltip:"Insert/edit image",onAction:O(e).open,onSetup:r=>(r.setActive(B(dt(e))),e.selection.selectorChangedWithUnbind("img:not([data-mce-object]):not([data-mce-placeholder]),figure.image",r.setActive).unbind)}),e.ui.registry.addMenuItem("image",{icon:"image",text:"Image...",onAction:O(e).open}),e.ui.registry.addContextMenu("image",{update:r=>nt(r)||r.nodeName==="IMG"&&!Jt(r)?["image"]:[]})})(t),(e=>{e.addCommand("mceImage",O(e).open),e.addCommand("mceUpdateImage",(r,l)=>{e.undoManager.transact(()=>fe(e,l))})})(t)})})();(function(){var bt=tinymce.util.Tools.resolve("tinymce.PluginManager");const W=o=>n=>(a=>{const i=typeof a;return a===null?"null":i==="object"&&Array.isArray(a)?"array":i==="object"&&(u=d=a,(m=String).prototype.isPrototypeOf(u)||((h=d.constructor)===null||h===void 0?void 0:h.name)===m.name)?"string":i;var u,d,m,h})(n)===o,H=o=>n=>typeof n===o,j=W("string"),P=W("object"),S=W("array"),Y=o=>o===null,tt=H("boolean"),at=o=>!(n=>n==null)(o),Bt=H("function"),ft=(o,n)=>{if(S(o)){for(let a=0,i=o.length;a<i;++a)if(!n(o[a]))return!1;return!0}return!1},B=()=>{},zt=(o,n)=>o===n;class v{constructor(n,a){this.tag=n,this.value=a}static some(n){return new v(!0,n)}static none(){return v.singletonNone}fold(n,a){return this.tag?a(this.value):n()}isSome(){return this.tag}isNone(){return!this.tag}map(n){return this.tag?v.some(n(this.value)):v.none()}bind(n){return this.tag?n(this.value):v.none()}exists(n){return this.tag&&n(this.value)}forall(n){return!this.tag||n(this.value)}filter(n){return!this.tag||n(this.value)?this:v.none()}getOr(n){return this.tag?this.value:n}or(n){return this.tag?this:n}getOrThunk(n){return this.tag?this.value:n()}orThunk(n){return this.tag?this:n()}getOrDie(n){if(this.tag)return this.value;throw new Error(n??"Called getOrDie on None")}static from(n){return at(n)?v.some(n):v.none()}getOrNull(){return this.tag?this.value:null}getOrUndefined(){return this.value}each(n){this.tag&&n(this.value)}toArray(){return this.tag?[this.value]:[]}toString(){return this.tag?`some(${this.value})`:"none()"}}v.singletonNone=new v(!1);const ue=Array.prototype.indexOf,D=Array.prototype.push,Ft=o=>{const n=[];for(let a=0,i=o.length;a<i;++a){if(!S(o[a]))throw new Error("Arr.flatten item "+a+" was not an array, input: "+o);D.apply(n,o[a])}return n},Vt=(o,n)=>{for(let a=0;a<o.length;a++){const i=n(o[a],a);if(i.isSome())return i}return v.none()},it=(o,n,a=zt)=>o.exists(i=>a(i,n)),me=o=>{const n=[],a=i=>{n.push(i)};for(let i=0;i<o.length;i++)o[i].each(a);return n},G=(o,n)=>o?v.some(n):v.none(),E=o=>n=>n.options.get(o),Kt=E("link_assume_external_targets"),yt=E("link_context_toolbar"),de=E("link_list"),Ht=E("link_default_target"),Gt=E("link_default_protocol"),L=E("link_target_list"),kt=E("link_rel_list"),ge=E("link_class_list"),he=E("link_title"),$t=E("allow_unsafe_link_target"),pe=E("link_quicklink");var st=tinymce.util.Tools.resolve("tinymce.util.Tools");const xt=o=>j(o.value)?o.value:"",qt=(o,n)=>{const a=[];return st.each(o,i=>{const u=(d=>j(d.text)?d.text:j(d.title)?d.title:"")(i);if(i.menu!==void 0){const d=qt(i.menu,n);a.push({text:u,items:d})}else{const d=n(i);a.push({text:u,value:d})}}),a},Wt=(o=xt)=>n=>v.from(n).map(a=>qt(a,o)),wt=o=>Wt(xt)(o),Zt=Wt,Z=(o,n)=>a=>({name:o,type:"listbox",label:n,items:a}),lt=xt,ct=Object.keys,Jt=Object.hasOwnProperty,ut=(o,n)=>Jt.call(o,n);var R=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),Qt=tinymce.util.Tools.resolve("tinymce.util.URI");const _t=o=>at(o)&&o.nodeName.toLowerCase()==="a",At=o=>_t(o)&&!!V(o),$=(o,n)=>{if(o.collapsed)return[];{const a=o.cloneContents(),i=a.firstChild,u=new R(i,a),d=[];let m=i;do n(m)&&d.push(m);while(m=u.next());return d}},Ct=o=>/^\w+:/i.test(o),V=o=>{var n,a;return(a=(n=o.getAttribute("data-mce-href"))!==null&&n!==void 0?n:o.getAttribute("href"))!==null&&a!==void 0?a:""},Dt=(o,n)=>{const a=["noopener"],i=o?o.split(/\s+/):[],u=m=>m.filter(h=>st.inArray(a,h)===-1),d=n?(m=>(m=u(m)).length>0?m.concat(a):a)(i):u(i);return d.length>0?(m=>st.trim(m.sort().join(" ")))(d):""},q=(o,n)=>(n=n||mt(o.selection.getRng())[0]||o.selection.getNode(),nt(n)?v.from(o.dom.select("a[href]",n)[0]):v.from(o.dom.getParent(n,"a[href]"))),et=(o,n)=>q(o,n).isSome(),Nt=(o,n)=>n.fold(()=>o.getContent({format:"text"}),a=>a.innerText||a.textContent||"").replace(/\uFEFF/g,""),mt=o=>$(o,At),Ot=o=>st.grep(o,At),St=o=>Ot(o).length>0,Tt=o=>{const n=o.schema.getTextInlineElements();if(q(o).exists(i=>i.hasAttribute("data-mce-block")))return!1;const a=o.selection.getRng();return!!a.collapsed||$(a,i=>i.nodeType===1&&!_t(i)&&!ut(n,i.nodeName.toLowerCase())).length===0},nt=o=>at(o)&&o.nodeName==="FIGURE"&&/\bimage\b/i.test(o.className),Xt=(o,n,a)=>{const i=o.selection.getNode(),u=q(o,i),d=((m,h)=>{const b={...h};if(kt(m).length===0&&!$t(m)){const w=Dt(b.rel,b.target==="_blank");b.rel=w||null}return v.from(b.target).isNone()&&L(m)===!1&&(b.target=Ht(m)),b.href=((w,_)=>_!=="http"&&_!=="https"||Ct(w)?w:_+"://"+w)(b.href,Kt(m)),b})(o,(m=>{return h=["title","rel","class","target"],b=(_,C)=>(m[C].each(k=>{_[C]=k.length>0?k:null}),_),w={href:m.href},((_,C)=>{for(let k=0,O=_.length;k<O;k++)C(_[k],k)})(h,(_,C)=>{w=b(w,_)}),w;var h,b,w})(a));o.undoManager.transact(()=>{a.href===n.href&&n.attach(),u.fold(()=>{((m,h,b,w)=>{const _=m.dom;nt(h)?te(_,h,w):b.fold(()=>{m.execCommand("mceInsertLink",!1,w)},C=>{m.insertContent(_.createHTML("a",w,_.encode(C)))})})(o,i,a.text,d)},m=>{o.focus(),((h,b,w,_)=>{w.each(C=>{ut(b,"innerText")?b.innerText=C:b.textContent=C}),h.dom.setAttribs(b,_),h.selection.select(b)})(o,m,a.text,d)})})},ve=o=>{const{class:n,href:a,rel:i,target:u,text:d,title:m}=o;return((h,b)=>{const w={};var _;return((C,k,O,I)=>{((N,t)=>{const e=ct(N);for(let r=0,l=e.length;r<l;r++){const s=e[r];t(N[s],s)}})(C,(N,t)=>{(k(N,t)?O:I)(N,t)})})(h,(C,k)=>Y(C)===!1,(_=w,(C,k)=>{_[k]=C}),B),w})({class:n.getOrNull(),href:a,rel:i.getOrNull(),target:u.getOrNull(),text:d.getOrNull(),title:m.getOrNull()})},Yt=(o,n,a)=>{const i=((u,d)=>{const m=u.options.get,h={allow_html_data_urls:m("allow_html_data_urls"),allow_script_urls:m("allow_script_urls"),allow_svg_data_urls:m("allow_svg_data_urls")},b=d.href;return{...d,href:Qt.isDomSafe(b,"a",h)?b:""}})(o,a);o.hasPlugin("rtc",!0)?o.execCommand("createlink",!1,ve(i)):Xt(o,n,i)},J=o=>{o.hasPlugin("rtc",!0)?o.execCommand("unlink"):(n=>{n.undoManager.transact(()=>{const a=n.selection.getNode();nt(a)?M(n,a):(i=>{const u=i.dom,d=i.selection,m=d.getBookmark(),h=d.getRng().cloneRange(),b=u.getParent(h.startContainer,"a[href]",i.getBody()),w=u.getParent(h.endContainer,"a[href]",i.getBody());b&&h.setStartBefore(b),w&&h.setEndAfter(w),d.setRng(h),i.execCommand("unlink"),d.moveToBookmark(m)})(n),n.focus()})})(o)},M=(o,n)=>{var a;const i=o.dom.select("img",n)[0];if(i){const u=o.dom.getParents(i,"a[href]",n)[0];u&&((a=u.parentNode)===null||a===void 0||a.insertBefore(i,u),o.dom.remove(u))}},te=(o,n,a)=>{var i;const u=o.select("img",n)[0];if(u){const d=o.create("a",a);(i=u.parentNode)===null||i===void 0||i.insertBefore(d,u),d.appendChild(u)}},Q=(o,n)=>Vt(n,a=>(i=>{return ut(u=i,d="items")&&u[d]!==void 0&&u[d]!==null;var u,d})(a)?Q(o,a.items):G(a.value===o,a)),ee=(o,n)=>{const a={text:o.text,title:o.title},i=(u,d)=>{const m=(h=n,b=d,b==="link"?h.link:b==="anchor"?h.anchor:v.none()).getOr([]);var h,b;return((w,_,C,k)=>{const O=k[_],I=w.length>0;return O!==void 0?Q(O,C).map(N=>({url:{value:N.value,meta:{text:I?w:N.text,attach:B}},text:I?w:N.text})):v.none()})(a.text,d,m,u)};return{onChange:(u,d)=>{const m=d.name;return m==="url"?(h=>{const b=(w=h.url,G(a.text.length<=0,v.from((_=w.meta)===null||_===void 0?void 0:_.text).getOr(w.value)));var w,_;const C=(k=>{var O;return G(a.title.length<=0,v.from((O=k.meta)===null||O===void 0?void 0:O.title).getOr(""))})(h.url);return b.isSome()||C.isSome()?v.some({...b.map(k=>({text:k})).getOr({}),...C.map(k=>({title:k})).getOr({})}):v.none()})(u()):((h,b)=>ue.call(h,b))(["anchor","link"],m)>-1?i(u(),m):((m==="text"||m==="title")&&(a[m]=u()[m]),v.none())}}};var ot=tinymce.util.Tools.resolve("tinymce.util.Delay");const dt=o=>{const n=o.href;return n.indexOf("@")>0&&n.indexOf("/")===-1&&n.indexOf("mailto:")===-1?v.some({message:"The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?",preprocess:a=>({...a,href:"mailto:"+n})}):v.none()},ne=(o,n)=>a=>{const i=a.href;return o===1&&!Ct(i)||o===0&&/^\s*www(\.|\d\.)/i.test(i)?v.some({message:`The URL you entered seems to be an external link. Do you want to add the required ${n}:// prefix?`,preprocess:u=>({...u,href:n+"://"+i})}):v.none()},be=o=>{const n=o.dom.select("a:not([href])"),a=Ft(((i,u)=>{const d=i.length,m=new Array(d);for(let h=0;h<d;h++){const b=i[h];m[h]=u(b,h)}return m})(n,i=>{const u=i.name||i.id;return u?[{text:u,value:"#"+u}]:[]}));return a.length>0?v.some([{text:"None",value:""}].concat(a)):v.none()},fe=o=>{const n=ge(o);return n.length>0?wt(n):v.none()},It=o=>{try{return v.some(JSON.parse(o))}catch{return v.none()}},oe=(o,n)=>{const a=kt(o);if(a.length>0){const i=it(n,"_blank"),u=d=>Dt(lt(d),i);return($t(o)===!1?Zt(u):wt)(a)}return v.none()},re=[{text:"Current window",value:""},{text:"New window",value:"_blank"}],ae=o=>{const n=L(o);return S(n)?wt(n).orThunk(()=>v.some(re)):n===!1?v.none():v.some(re)},gt=(o,n,a)=>{const i=o.getAttrib(n,a);return i!==null&&i.length>0?v.some(i):v.none()},ie=(o,n)=>(a=>{const i=d=>a.convertURL(d.value||d.url||"","href"),u=de(a);return new Promise(d=>{j(u)?fetch(u).then(m=>m.ok?m.text().then(It):Promise.reject()).then(d,()=>d(v.none())):Bt(u)?u(m=>d(v.some(m))):d(v.from(u))}).then(d=>d.bind(Zt(i)).map(m=>m.length>0?[{text:"None",value:""}].concat(m):m))})(o).then(a=>{const i=((u,d)=>{const m=u.dom,h=Tt(u)?v.some(Nt(u.selection,d)):v.none(),b=d.bind(k=>v.from(m.getAttrib(k,"href"))),w=d.bind(k=>v.from(m.getAttrib(k,"target"))),_=d.bind(k=>gt(m,k,"rel")),C=d.bind(k=>gt(m,k,"class"));return{url:b,text:h,title:d.bind(k=>gt(m,k,"title")),target:w,rel:_,linkClass:C}})(o,n);return{anchor:i,catalogs:{targets:ae(o),rels:oe(o,i.target),classes:fe(o),anchor:be(o),link:a},optNode:n,flags:{titleEnabled:he(o)}}}),se=o=>{(a=>{const i=q(a);return ie(a,i)})(o).then(a=>{const i=((u,d)=>m=>{const h=m.getData();if(!h.url.value)return J(u),void m.close();const b=C=>v.from(h[C]).filter(k=>!it(d.anchor[C],k)),w={href:h.url.value,text:b("text"),target:b("target"),rel:b("rel"),class:b("linkClass"),title:b("title")},_={href:h.url.value,attach:h.url.meta!==void 0&&h.url.meta.attach?h.url.meta.attach:B};((C,k)=>Vt([dt,ne(Kt(C),Gt(C))],O=>O(k)).fold(()=>Promise.resolve(k),O=>new Promise(I=>{((N,t,e)=>{const r=N.selection.getRng();ot.setEditorTimeout(N,()=>{N.windowManager.confirm(t,l=>{N.selection.setRng(r),e(l)})})})(C,O.message,N=>{I(N?O.preprocess(k):k)})})))(u,w).then(C=>{Yt(u,_,C)}),m.close()})(o,a);return((u,d,m)=>{const h=u.anchor.text.map(()=>({name:"text",type:"input",label:"Text to display"})).toArray(),b=u.flags.titleEnabled?[{name:"title",type:"input",label:"Title"}]:[],w=((k,O)=>{const I=k.anchor,N=I.url.getOr("");return{url:{value:N,meta:{original:{value:N}}},text:I.text.getOr(""),title:I.title.getOr(""),anchor:N,link:N,rel:I.rel.getOr(""),target:I.target.or(O).getOr(""),linkClass:I.linkClass.getOr("")}})(u,v.from(Ht(m))),_=u.catalogs,C=ee(w,_);return{title:"Insert/Edit Link",size:"normal",body:{type:"panel",items:Ft([[{name:"url",type:"urlinput",filetype:"file",label:"URL"}],h,b,me([_.anchor.map(Z("anchor","Anchors")),_.rels.map(Z("rel","Rel")),_.targets.map(Z("target","Open link in...")),_.link.map(Z("link","Link list")),_.classes.map(Z("linkClass","Class"))])])},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:w,onChange:(k,{name:O})=>{C.onChange(k.getData,{name:O}).each(I=>{k.setData(I)})},onSubmit:d}})(a,i,o)}).then(a=>{o.windowManager.open(a)})};var le=tinymce.util.Tools.resolve("tinymce.util.VK");const ce=(o,n)=>o.dom.getParent(n,"a[href]"),rt=o=>ce(o,o.selection.getStart()),Ut=(o,n)=>{if(n){const a=V(n);if(/^#/.test(a)){const i=o.dom.select(a);i.length&&o.selection.scrollIntoView(i[0],!0)}else(i=>{const u=document.createElement("a");u.target="_blank",u.href=i,u.rel="noreferrer noopener";const d=document.createEvent("MouseEvents");d.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),((m,h)=>{document.body.appendChild(m),m.dispatchEvent(h),document.body.removeChild(m)})(u,d)})(n.href)}},Et=o=>()=>{o.execCommand("mceLink",!1,{dialog:!0})},Lt=o=>()=>{Ut(o,rt(o))},Rt=(o,n)=>(o.on("NodeChange",n),()=>o.off("NodeChange",n)),ht=o=>n=>{const a=()=>n.setActive(!o.mode.isReadOnly()&&et(o,o.selection.getNode()));return a(),Rt(o,a)},Pt=o=>n=>{const a=()=>n.setEnabled((i=>(i.selection.isCollapsed()?Ot(i.dom.getParents(i.selection.getStart())):mt(i.selection.getRng())).length===1)(o));return a(),Rt(o,a)},pt=o=>n=>{const a=u=>{return St(u)||(d=o.selection.getRng(),mt(d).length>0);var d},i=o.dom.getParents(o.selection.getStart());return n.setEnabled(a(i)),Rt(o,u=>n.setEnabled(a(u.parents)))};bt.add("link",o=>{(n=>{const a=n.options.register;a("link_assume_external_targets",{processor:i=>{const u=j(i)||tt(i);return u?i===!0?{value:1,valid:u}:i==="http"||i==="https"?{value:i,valid:u}:{value:0,valid:u}:{valid:!1,message:"Must be a string or a boolean."}},default:!1}),a("link_context_toolbar",{processor:"boolean",default:!1}),a("link_list",{processor:i=>j(i)||Bt(i)||ft(i,P)}),a("link_default_target",{processor:"string"}),a("link_default_protocol",{processor:"string",default:"https"}),a("link_target_list",{processor:i=>tt(i)||ft(i,P),default:!0}),a("link_rel_list",{processor:"object[]",default:[]}),a("link_class_list",{processor:"object[]",default:[]}),a("link_title",{processor:"boolean",default:!0}),a("allow_unsafe_link_target",{processor:"boolean",default:!1}),a("link_quicklink",{processor:"boolean",default:!1})})(o),(n=>{n.ui.registry.addToggleButton("link",{icon:"link",tooltip:"Insert/edit link",onAction:Et(n),onSetup:ht(n)}),n.ui.registry.addButton("openlink",{icon:"new-tab",tooltip:"Open link",onAction:Lt(n),onSetup:Pt(n)}),n.ui.registry.addButton("unlink",{icon:"unlink",tooltip:"Remove link",onAction:()=>J(n),onSetup:pt(n)})})(o),(n=>{n.ui.registry.addMenuItem("openlink",{text:"Open link",icon:"new-tab",onAction:Lt(n),onSetup:Pt(n)}),n.ui.registry.addMenuItem("link",{icon:"link",text:"Link...",shortcut:"Meta+K",onAction:Et(n)}),n.ui.registry.addMenuItem("unlink",{icon:"unlink",text:"Remove link",onAction:()=>J(n),onSetup:pt(n)})})(o),(n=>{n.ui.registry.addContextMenu("link",{update:a=>n.dom.isEditable(a)?St(n.dom.getParents(a,"a"))?"link unlink openlink":"link":""})})(o),(n=>{const a=i=>{const u=n.selection.getNode();return i.setEnabled(et(n,u)),B};n.ui.registry.addContextForm("quicklink",{launch:{type:"contextformtogglebutton",icon:"link",tooltip:"Link",onSetup:ht(n)},label:"Link",predicate:i=>yt(n)&&et(n,i),initValue:()=>q(n).fold(()=>"",V),commands:[{type:"contextformtogglebutton",icon:"link",tooltip:"Link",primary:!0,onSetup:i=>{const u=n.selection.getNode();return i.setActive(et(n,u)),ht(n)(i)},onAction:i=>{const u=i.getValue(),d=(m=>{const h=q(n),b=Tt(n);if(h.isNone()&&b){const w=Nt(n.selection,h);return G(w.length===0,m)}return v.none()})(u);Yt(n,{href:u,attach:B},{href:u,text:d,title:v.none(),rel:v.none(),target:v.none(),class:v.none()}),(m=>{m.selection.collapse(!1)})(n),i.hide()}},{type:"contextformbutton",icon:"unlink",tooltip:"Remove link",onSetup:a,onAction:i=>{J(n),i.hide()}},{type:"contextformbutton",icon:"new-tab",tooltip:"Open link",onSetup:a,onAction:i=>{Lt(n)(),i.hide()}}]})})(o),(n=>{n.on("click",a=>{const i=ce(n,a.target);i&&le.metaKeyPressed(a)&&(a.preventDefault(),Ut(n,i))}),n.on("keydown",a=>{if(!a.isDefaultPrevented()&&a.keyCode===13&&(i=>i.altKey===!0&&i.shiftKey===!1&&i.ctrlKey===!1&&i.metaKey===!1)(a)){const i=rt(n);i&&(a.preventDefault(),Ut(n,i))}})})(o),(n=>{n.addCommand("mceLink",(a,i)=>{(i==null?void 0:i.dialog)!==!0&&pe(n)?n.dispatch("contexttoolbar-show",{toolbarKey:"quicklink"}):se(n)})})(o),(n=>{n.addShortcut("Meta+K","",()=>{n.execCommand("mceLink")})})(o)})})();const Ie=xe("meta",{name:"viewport",content:"width=device-width, initial-scale=1"},null,-1),Re=Ae({__name:"index",props:{value:{type:String,default:()=>""}},emits:["getContent"],setup(bt,{emit:W}){const H=bt,j={language_url:"/admin/assets/js/tinymce/langs/zh_CN.js",language:"zh_CN",skin_url:"/admin/assets/js/tinymce/skins/ui/oxide",base_url:"/admin/assets/js/tinymce/",height:400,branding:!1,promotion:!1,menubar:!0,mobile:{menubar:!0},plugins:"image link",toolbar1:"undo redo | styles | bold italic blockquote | link image | alignleft aligncenter alignright | h1 h2 h3 h4 h5 h6 |  backcolor | copy cut"};_e.init({});const P=Ce(H.value);return ke(()=>H.value,()=>{P.value=H.value,W("getContent",P.value)}),ke(()=>P.value,()=>{W("getContent",P.value)}),(S,Y)=>(De(),Ne(Te,null,[Ie,xe("div",null,[Oe(Se(we),{modelValue:P.value,"onUpdate:modelValue":Y[0]||(Y[0]=tt=>P.value=tt),init:j},null,8,["modelValue"])])],64))}});export{Re as _};