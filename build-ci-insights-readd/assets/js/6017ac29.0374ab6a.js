"use strict";
(self["webpackChunkdoulab_site"] = self["webpackChunkdoulab_site"] || []).push([[1606],{

/***/ 99:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Layers)
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
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
];
const Layers = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("layers", __iconNode);


//# sourceMappingURL=layers.js.map


/***/ }),

/***/ 3598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Lightbulb)
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
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
];
const Lightbulb = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("lightbulb", __iconNode);


//# sourceMappingURL=lightbulb.js.map


/***/ }),

/***/ 3893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Users)
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
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("users", __iconNode);


//# sourceMappingURL=users.js.map


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

/***/ 5228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ WorkWithUsPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 72 modules
var Layout = __webpack_require__(1656);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(5260);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(8774);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/search.js
var search = __webpack_require__(8445);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/lightbulb.js
var lightbulb = __webpack_require__(3598);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/users.js
var users = __webpack_require__(3893);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/layers.js
var icons_layers = __webpack_require__(99);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/radar.js
var radar = __webpack_require__(7205);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/target.js
var target = __webpack_require__(7792);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(4722);
;// ./node_modules/lucide-react/dist/esm/icons/circle-check.js
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = (0,createLucideIcon/* default */.A)("circle-check", __iconNode);


//# sourceMappingURL=circle-check.js.map

// EXTERNAL MODULE: ./src/components/Hero.tsx
var Hero = __webpack_require__(8624);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./src/pages/work-with-us/index.tsx
// src/pages/work-with-us/index.tsx
function WorkWithUsPage(){return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{title:"Work with Doulab",description:"Practical ways to start\u2014diagnose, align, and build capability so strategy turns into sustained results.",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Head/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("link",{rel:"canonical",href:"https://doulab.net/work-with-us"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:title",content:"Work with Doulab"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:description",content:"Practical ways to start\u2014diagnose, align, and build capability so strategy turns into sustained results."}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:image",content:"https://doulab.net/img/docusaurus-social-card.jpg"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:image:alt",content:"Doulab \u2014 Work with us"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"author",content:"Luis Santiago Arias"}),/*#__PURE__*/(0,jsx_runtime.jsx)("link",{rel:"preload",as:"image",href:"/img/work-with-us-hero.png",imageSrcSet:"/img/work-with-us-hero.avif 1x, /img/work-with-us-hero.webp 1x, /img/work-with-us-hero.png 1x",imageSizes:"(max-width: 700px) 100vw, 600px"}),/*#__PURE__*/(0,jsx_runtime.jsx)("script",{type:"application/ld+json"// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:JSON.stringify({'@context':'https://schema.org','@type':'FAQPage',mainEntity:[{'@type':'Question',name:'How fast can we start?',acceptedAnswer:{'@type':'Answer',text:'Diagnostics can start within days. Workshops schedule within 1–2 weeks.'}},{'@type':'Question',name:'Remote or in-person?',acceptedAnswer:{'@type':'Answer',text:'Both. We use collaborative canvases remotely and structured templates on-site.'}},{'@type':'Question',name:'Typical engagement length?',acceptedAnswer:{'@type':'Answer',text:'Diagnostics: 1–2 weeks. Workshops: half or full day (+light prep). Programs/coaching: 6–12+ weeks.'}},{'@type':'Question',name:'Pricing?',acceptedAnswer:{'@type':'Answer',text:'Fixed-fee for diagnostics/workshops; simple retainers for coaching; program pricing by scope.'}}]})}})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("main",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Hero/* default */.A,{title:"Work with Doulab",subtitle:"Practical ways to start \u2014 diagnose, align, and build capability.",body:"Start small or go deeper. We make innovation repeatable and foresight practical — so strategy turns into sustained results.",imageBase:"/img/work-with-us-hero",imageAlt:"Work with Doulab",width:600,height:400,primaryCta:{to:'/services/clarityscan',label:'Start with ClarityScan®',dataCta:'cta.wwu.hero.clarityscan'},secondaryCta:{to:'/contact',label:'Book a discovery call',dataCta:'cta.wwu.hero.book_call'},ctaNote:"Get your baseline in 15\u201320 minutes.",id:"wwu-hero",ariaLabelledbyId:"wwu-hero-title",eager:true}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{id:"start",className:"section","aria-labelledby":"wwu-start-title",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"wwu-start-title",children:"Three ways to start, based on your goal"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"cardGrid",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"wwu-card-clarity",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(search/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"wwu-card-clarity",children:"ClarityScan\xAE Diagnostic"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:["Baseline capability in ",/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"days"}),", surface the gaps that move the needle, and leave with a prioritized action snapshot."]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"cardFooter",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:"/services/clarityscan",className:"cardCta","data-cta":"wwu_start_clarityscan","data-section":"wwu","data-step":"cards","aria-label":"Run a ClarityScan diagnostic",children:"Run a diagnostic \u2192"})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"wwu-card-workshop",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(lightbulb/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"wwu-card-workshop",children:"Custom Workshop"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:["In ",/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"half- or full-day"})," sessions, align decisions and leave with a ",/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"30\u201360\u201390"})," you can execute."]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"cardFooter",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:"/services/custom-workshops",className:"cardCta","data-cta":"wwu_start_workshop","data-section":"wwu","data-step":"cards","aria-label":"Start a custom workshop sprint",children:"Start a workshop sprint \u2192"})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"wwu-card-call",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(users/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"wwu-card-call",children:"Discovery Call"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Share goals and constraints; we\u2019ll point you to the fastest path\u2014diagnostic, workshop, program, or coaching."}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"cardFooter",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:"/contact",className:"cardCta","data-cta":"wwu_start_call","data-section":"wwu","data-step":"cards","aria-label":"Book a discovery call",children:"Book a call \u2192"})})]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{id:"process",className:"section","aria-labelledby":"wwu-process-title",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"wwu-process-title",children:"How we work (lightweight & outcome-driven)"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"sectionLead",children:"Lightweight, phased, and outcome-driven. We meet you where you are and build momentum quickly."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ol",{className:"processRail",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{className:"processStep",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(target/* default */.A,{className:"stepIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h4",{children:"1) Map & Prioritize"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Use ClarityScan\xAE to assess capability, find gaps, and focus where impact is highest."}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"microcopy",children:"Evidence: baseline score + top\xA03 capability gaps."})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{className:"processStep",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(lightbulb/* default */.A,{className:"stepIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h4",{children:"2) Align & Decide"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Run a workshop to resolve tensions, choose options, and agree on next moves."}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"microcopy",children:"Gate: option chosen, owners, 30\u201360\u201390."})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{className:"processStep",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(icons_layers/* default */.A,{className:"stepIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h4",{children:"3) Build Capability"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Deploy programs and coaching to install culture, process, and measurement."}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"microcopy",children:"Gate: practice installed; cadence + metrics live."})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{className:"processStep",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(radar/* default */.A,{className:"stepIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h4",{children:"4) Anticipate Futures"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Use Vig\xEDa Futura to track signals, stress-test strategy, and stay future-ready."}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"microcopy",children:"Evidence: risks/options logged; next review date."})]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{id:"results",className:"section","aria-labelledby":"wwu-proof-title",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"wwu-proof-title",children:"Results we\u2019ve helped deliver"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"cardGrid",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"wwu-proof-siembra",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(CircleCheck,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"wwu-proof-siembra",children:"AFP Siembra"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:["From experiments to outcomes: Alcanza product design + SILAB launch coordination; IMM-guided coaching over",/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:" 2.5 years"}),"."]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"wwu-proof-alpha",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(CircleCheck,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"wwu-proof-alpha",children:"Alpha Inversiones"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:["Established innovation process and mentored Alpha Escalable; foundations supported the new",/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:" Alpha en L\xEDnea"})," launch."]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"wwu-proof-public",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(CircleCheck,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"wwu-proof-public",children:"FUNDAPEC & OGTIC"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Built a community platform with FUNDAPEC; with OGTIC, adapted MCF/IMM to scale labs and public-sector ecosystems."})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"proofStrip","aria-label":"Organizations we\u2019ve supported",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"/img/afpsiembra.png",alt:"AFP Siembra",width:160,height:48,loading:"lazy"}),/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"/img/OGTIC_horizontal_fullcolor.png",alt:"OGTIC",width:160,height:48,loading:"lazy"}),/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"/img/alpha.png",alt:"Alpha Inversiones",width:160,height:48,loading:"lazy"}),/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"/img/fundapec.png",alt:"FUNDAPEC",width:160,height:48,loading:"lazy"}),/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"/img/runway.png",alt:"Runway Innovation Hub",width:160,height:48,loading:"lazy"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{id:"fit",className:"section","aria-labelledby":"wwu-fit-title",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"wwu-fit-title",children:"Who we\u2019re best for"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"sectionLead",children:"Public institutions, regulated finance, education, scale-ups, and ecosystems where evidence and outcomes matter."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{className:"chips",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Public sector"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Financial services"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Education & workforce"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Scale-ups & startups"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Incubators & accelerators"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{className:"microcopy",style:{marginTop:'.75rem'},children:["New to us? See our Programs and Coaching & mentoring on the",' ',/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:"/what-we-do",children:"What we do"})," page."]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{id:"faq",className:"section","aria-labelledby":"wwu-faq-title",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"wwu-faq-title",children:"FAQ"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"faqGrid",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("details",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("summary",{children:"How fast can we start?"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Diagnostics can start within days. Workshops typically schedule within 1\u20132 weeks."})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("details",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("summary",{children:"Remote or in-person?"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Both. We use collaborative canvases remotely and structured templates on-site."})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("details",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("summary",{children:"Typical engagement length?"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Diagnostics: 1\u20132 weeks. Workshops: half or full day (+light prep). Programs/coaching: 6\u201312+ weeks."})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("details",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("summary",{children:"Pricing?"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Fixed-fee for diagnostics/workshops; simple retainers for coaching; program pricing by scope."})]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("section",{id:"get-started",className:"section","aria-labelledby":"wwu-cta-title",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"finalCta",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"wwu-cta-title",children:"Ready to move from plans to repeatable delivery?"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Start with ClarityScan\xAE or book a discovery call. We\u2019ll co-create the path from insight to results."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"heroCtas",style:{justifyContent:'center'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:"/services/clarityscan",className:"buttonPrimary","data-cta":"wwu_footer_clarityscan","data-section":"wwu","data-step":"final","aria-label":"Start with a ClarityScan diagnostic",children:"Start with ClarityScan\xAE"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:"/contact",className:"buttonSecondary","data-cta":"wwu_footer_contact","data-section":"wwu","data-step":"final","aria-label":"Talk to us",children:"Talk to us"})]})]})})]})]});}

/***/ }),

/***/ 7205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Radar)
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
  ["path", { d: "M19.07 4.93A10 10 0 0 0 6.99 3.34", key: "z3du51" }],
  ["path", { d: "M4 6h.01", key: "oypzma" }],
  ["path", { d: "M2.29 9.62A10 10 0 1 0 21.31 8.35", key: "qzzz0" }],
  ["path", { d: "M16.24 7.76A6 6 0 1 0 8.23 16.67", key: "1yjesh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M17.99 11.66A6 6 0 0 1 15.77 16.67", key: "1u2y91" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "m13.41 10.59 5.66-5.66", key: "mhq4k0" }]
];
const Radar = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("radar", __iconNode);


//# sourceMappingURL=radar.js.map


/***/ }),

/***/ 7792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Target)
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
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("target", __iconNode);


//# sourceMappingURL=target.js.map


/***/ }),

/***/ 8445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Search)
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
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("search", __iconNode);


//# sourceMappingURL=search.js.map


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