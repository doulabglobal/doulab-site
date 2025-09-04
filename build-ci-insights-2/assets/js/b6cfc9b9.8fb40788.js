"use strict";
(self["webpackChunkdoulab_site"] = self["webpackChunkdoulab_site"] || []).push([[8543],{

/***/ 827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ FileText)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4722);
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("file-text", __iconNode);


//# sourceMappingURL=file-text.js.map


/***/ }),

/***/ 4722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ createLucideIcon)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
;// ./node_modules/lucide-react/dist/esm/shared/src/utils.js
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};


//# sourceMappingURL=utils.js.map

;// ./node_modules/lucide-react/dist/esm/defaultAttributes.js
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};


//# sourceMappingURL=defaultAttributes.js.map

;// ./node_modules/lucide-react/dist/esm/Icon.js
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const Icon = (0,react.forwardRef)(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => (0,react.createElement)(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => (0,react.createElement)(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);


//# sourceMappingURL=Icon.js.map

;// ./node_modules/lucide-react/dist/esm/createLucideIcon.js
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const createLucideIcon = (iconName, iconNode) => {
  const Component = (0,react.forwardRef)(
    ({ className, ...props }, ref) => (0,react.createElement)(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};


//# sourceMappingURL=createLucideIcon.js.map


/***/ }),

/***/ 5746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Insights)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 72 modules
var Layout = __webpack_require__(1656);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(5260);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(8774);
// EXTERNAL MODULE: ./src/components/Hero.tsx
var Hero = __webpack_require__(8624);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(6025);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/file-text.js
var file_text = __webpack_require__(827);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(4722);
;// ./node_modules/lucide-react/dist/esm/icons/newspaper.js
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M15 18h-5", key: "95g1m2" }],
  ["path", { d: "M18 14h-8", key: "sponae" }],
  [
    "path",
    {
      d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",
      key: "39pd36"
    }
  ],
  ["rect", { width: "8", height: "4", x: "10", y: "6", rx: "1", key: "aywv1n" }]
];
const Newspaper = (0,createLucideIcon/* default */.A)("newspaper", __iconNode);


//# sourceMappingURL=newspaper.js.map

// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/index.js + 2 modules
var client = __webpack_require__(4070);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./src/pages/insights/index.tsx
// src/pages/insights/index.tsx
function useLatestBlogItems(){const[items,setItems]=(0,react.useState)([]);const rssHref=(0,useBaseUrl/* default */.Ay)('/blog/rss.xml');const atomHref=(0,useBaseUrl/* default */.Ay)('/blog/atom.xml');(0,react.useEffect)(()=>{let cancelled=false;const clean=html=>{const tmp=document.createElement('div');tmp.innerHTML=html;const text=tmp.textContent||tmp.innerText||'';return text.replace(/\s+/g,' ').trim();};const parseRSS=xmlText=>{const doc=new DOMParser().parseFromString(xmlText,'application/xml');const nodes=Array.from(doc.querySelectorAll('item'));return nodes.slice(0,3).map(n=>({title:n.querySelector('title')?.textContent??'Untitled',link:n.querySelector('link')?.textContent??'#',pubDate:n.querySelector('pubDate')?.textContent??'',description:clean(n.querySelector('description')?.textContent??'')}));};const parseAtom=xmlText=>{const doc=new DOMParser().parseFromString(xmlText,'application/xml');const nodes=Array.from(doc.querySelectorAll('entry'));return nodes.slice(0,3).map(n=>{const linkEl=n.querySelector('link[rel="alternate"]')||n.querySelector('link');const linkHref=linkEl?.getAttribute('href')??'#';const summary=n.querySelector('summary')?.textContent??n.querySelector('content')?.textContent??'';return{title:n.querySelector('title')?.textContent??'Untitled',link:linkHref,pubDate:n.querySelector('updated')?.textContent??n.querySelector('published')?.textContent??'',description:clean(summary)};});};(async()=>{try{let res=await fetch(rssHref,{cache:'no-store'});if(res.ok){const text=await res.text();const parsed=parseRSS(text);if(!cancelled&&parsed.length)return setItems(parsed);}res=await fetch(atomHref,{cache:'no-store'});if(res.ok){const text=await res.text();const parsed=parseAtom(text);if(!cancelled&&parsed.length)return setItems(parsed);}}catch{// no-op: privacy-first client fetch
}})();return()=>{cancelled=true;};},[rssHref,atomHref]);return items;}function useLatestWhitepapers(){const allDocsData=(0,client/* useAllDocsData */.Gy)();const docsPluginData=allDocsData?.['default'];const latestVersion=docsPluginData?.versions?.find(v=>v.isLast)??docsPluginData?.versions?.[0];const docs=latestVersion?.docs??[];return docs.filter(d=>(d.tags??[]).includes('whitepaper')).sort((a,b)=>b.id.localeCompare(a.id)).slice(0,3);}function Insights(){const blogItems=useLatestBlogItems();const whitepapers=useLatestWhitepapers();const fmtDate=d=>{const date=d?new Date(d):null;return date?date.toLocaleDateString('en-US',{year:'numeric',month:'short',day:'2-digit',timeZone:'Europe/Zurich'}):'';};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{title:"Insights - Research & Resources | Doulab",description:"Research, resources, and whitepapers from Doulab - practical, testable, and open.",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Head/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("link",{rel:"canonical",href:"https://doulab.net/insights"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:title",content:"Insights - Research & Resources | Doulab"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:description",content:"Research, resources, and whitepapers from Doulab - practical, testable, and open."}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:image",content:"https://doulab.net/img/docusaurus-social-card.jpg"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:image:alt",content:"Doulab - Insights"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"author",content:"Luis Santiago Arias"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("main",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Hero/* default */.A,{title:"Insights",subtitle:"Research & Resources \u2014 practical, testable, and open.",body:"Explore frameworks, whitepapers, and field notes to reduce risk and accelerate outcomes.",imageBase:"/img/hero-insights",imageAlt:"Insights \u2014 research and resources",width:1600,height:900,primaryCta:{to:'/services/clarityscan',label:'Start with ClarityScan',dataCta:'cta.insights.hero.clarityscan'},secondaryCta:{to:'/contact',label:'Book a discovery call',dataCta:'cta.insights.hero.book_call'},ctaNote:"Get your baseline in 15\u201320 minutes.",id:"insights-hero",ariaLabelledbyId:"insights-hero-title",eager:true}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{className:"section",id:"highlights","aria-labelledby":"highlights-title",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"highlights-title",children:"Highlights"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"cardGrid",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"insight-mcf-title",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("picture",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("source",{srcSet:"/img/mcf-card.avif",type:"image/avif"}),/*#__PURE__*/(0,jsx_runtime.jsx)("source",{srcSet:"/img/mcf-card.webp",type:"image/webp"}),/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"/img/mcf-card.jpg",alt:"MicroCanvas Framework v2.1 \u2014 open-source canvases",width:1200,height:720,loading:"lazy",decoding:"async",style:{borderRadius:'0.75rem',width:'100%',height:'auto',marginBottom:'.5rem'}})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"insight-mcf-title",children:"MicroCanvas Framework v2.1"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Open-source canvases to diagnose, design, and scale innovation."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Reusable canvases & templates"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Step-by-step usage guides"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"cardFooter",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:"cardCta",to:"https://themicrocanvas.com",target:"_blank",rel:"noopener noreferrer","data-cta":"cta.insights.card.mcf",children:"Visit site \u2192"})})]}),blogItems.map((post,i)=>/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":`high-blog-${i}`,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Newspaper,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:`high-blog-${i}`,children:post.title}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:[post.description.slice(0,160),post.description.length>160?'…':'']}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:fmtDate(post.pubDate)}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Blog post"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"cardFooter",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:"cardCta",to:post.link,"data-cta":"cta.insights.highlights.blog",children:"Read post \u2192"})})]},`blog-${i}`)),whitepapers.map((p,i)=>/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":`high-wp-${i}`,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(file_text/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:`high-wp-${i}`,children:p.title}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:p.description??'Whitepaper'}),/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Evidence-led guidance"})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"cardFooter",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:"cardCta",to:p.permalink,"data-cta":"cta.insights.highlights.whitepaper",children:"Read paper \u2192"})})]},`wp-${i}`))]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{className:"section",id:"docs-hub","aria-labelledby":"docs-hub-title",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"docs-hub-title",children:"Where to start"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{className:"sectionLead",children:["The ",/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:"/docs/research-resources/",children:"Research & Resources"})," hub aggregates whitepapers, frameworks, and open references. For recent updates, see ",/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:"/docs/releases",children:"Releases"}),"."]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"heroCtas",style:{marginTop:'.5rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:"buttonSecondary",to:"/docs/research-resources/","data-cta":"cta.insights.docs_hub.research",children:"Browse Research & Resources"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:"buttonSecondary",to:"/docs/releases","data-cta":"cta.insights.docs_hub.releases",children:"See Releases"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:"section",id:"cta","aria-labelledby":"cta-title",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"finalCta",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"cta-title",children:"Have a topic you want us to cover?"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"We publish practical, evidence-led guides. Tell us what would help your team."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"heroCtas",style:{justifyContent:'center'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:"buttonPrimary",to:"/contact","data-cta":"cta.insights.final.contact",children:"Suggest a topic"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:"buttonPrimary",to:"/services/clarityscan","data-cta":"cta.insights.final.clarityscan",children:"Start with ClarityScan"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:"buttonSecondary",to:"/what-we-do","data-cta":"cta.insights.final.whatwedo",children:"What we do"})]})]})})]})]});}

/***/ }),

/***/ 8624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Hero)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5260);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8774);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4848);
function Hero({title,subtitle,body,imageBase,imageAlt,width=1600,height=900,imageSizes='(max-width: 600px) 100vw, 600px',primaryCta,secondaryCta,ctaNote,id='hero',ariaLabelledbyId='page-hero-title',eager=true}){const jpg=`${imageBase}.jpg`;const webp=`${imageBase}.webp`;const avif=`${imageBase}.avif`;const ImgTag=/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("picture",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("source",{srcSet:avif,type:"image/avif"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("source",{srcSet:webp,type:"image/webp"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img",{src:jpg,alt:imageAlt,className:"heroImage",loading:eager?'eager':'lazy',fetchPriority:eager?'high':undefined,decoding:"async",width:width,height:height,style:{borderRadius:'0.75rem',width:'100%',height:'auto'}})]});return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section",{className:"heroBanner",id:id,"aria-labelledby":ariaLabelledbyId,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("link",{rel:"preload",as:"image",href:jpg,imageSrcSet:`${avif} 1x, ${webp} 1x, ${jpg} 1x`,imageSizes:imageSizes})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{style:{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{style:{flex:'1 1 460px',paddingRight:'2rem'},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1",{id:ariaLabelledbyId,className:"heroTitle",children:title}),subtitle&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{className:"heroSubtitle",style:{textAlign:'justify'},children:subtitle}),body&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{className:"heroText",children:body}),(primaryCta||secondaryCta)&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"heroCtas",children:[primaryCta&&(primaryCta.external?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a",{href:primaryCta.to,className:"buttonPrimary","data-cta":primaryCta.dataCta,"aria-label":primaryCta.ariaLabel??primaryCta.label,target:"_blank",rel:"noopener noreferrer",children:primaryCta.label}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{to:primaryCta.to,className:"buttonPrimary","data-cta":primaryCta.dataCta,"aria-label":primaryCta.ariaLabel??primaryCta.label,children:primaryCta.label})),secondaryCta&&(secondaryCta.external?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a",{href:secondaryCta.to,className:"buttonSecondary","data-cta":secondaryCta.dataCta,"aria-label":secondaryCta.ariaLabel??secondaryCta.label,target:"_blank",rel:"noopener noreferrer",children:secondaryCta.label}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{to:secondaryCta.to,className:"buttonSecondary","data-cta":secondaryCta.dataCta,"aria-label":secondaryCta.ariaLabel??secondaryCta.label,children:secondaryCta.label}))]}),ctaNote&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{className:"ctaNote",children:ctaNote})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{flex:'1 1 320px',textAlign:'center'},children:ImgTag})]})]});}

/***/ })

}]);