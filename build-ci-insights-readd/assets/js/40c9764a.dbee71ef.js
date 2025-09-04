"use strict";
(self["webpackChunkdoulab_site"] = self["webpackChunkdoulab_site"] || []).push([[981],{

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

/***/ 3614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ClipboardCheck)
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
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "m9 14 2 2 4-4", key: "df797q" }]
];
const ClipboardCheck = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("clipboard-check", __iconNode);


//# sourceMappingURL=clipboard-check.js.map


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

/***/ 5059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CustomWorkshopsPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 72 modules
var Layout = __webpack_require__(1656);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(5260);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(8774);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/lightbulb.js
var lightbulb = __webpack_require__(3598);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/calendar-clock.js
var calendar_clock = __webpack_require__(6220);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/users.js
var users = __webpack_require__(3893);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/target.js
var target = __webpack_require__(7792);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/clipboard-check.js
var clipboard_check = __webpack_require__(3614);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(4722);
;// ./node_modules/lucide-react/dist/esm/icons/wand-sparkles.js
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
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
      key: "ul74o6"
    }
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M5 6v4", key: "ilb8ba" }],
  ["path", { d: "M19 14v4", key: "blhpug" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M7 8H3", key: "zfb6yr" }],
  ["path", { d: "M21 16h-4", key: "1cnmox" }],
  ["path", { d: "M11 3H9", key: "1obp7u" }]
];
const WandSparkles = (0,createLucideIcon/* default */.A)("wand-sparkles", __iconNode);


//# sourceMappingURL=wand-sparkles.js.map

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/rocket.js
var rocket = __webpack_require__(9653);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./src/pages/services/custom-workshops.tsx
// src/pages/services/custom-workshops.tsx
function CustomWorkshopsPage(){const serviceSchema={'@context':'https://schema.org','@type':'Service',name:'Custom Workshops',serviceType:'Innovation workshop facilitation',provider:{'@type':'Organization',name:'Doulab',url:'https://doulab.net'},url:'https://doulab.net/services/custom-workshops',areaServed:'Global',description:'Outcome-driven sessions to align teams, decide faster, and create momentum. Half-day or full-day formats, on-site or remote.'};const faqSchema={'@context':'https://schema.org','@type':'FAQPage',mainEntity:[{'@type':'Question',name:'Can you customize the agenda?',acceptedAnswer:{'@type':'Answer',text:'Yes. We tailor content, tools, and outcomes to your goals, timeline, and team size.'}},{'@type':'Question',name:'What prep is required?',acceptedAnswer:{'@type':'Answer',text:'Minimal. We share a short intake and optional materials list (e.g., recent plans or KPIs).'}},{'@type':'Question',name:'Remote or in-person?',acceptedAnswer:{'@type':'Answer',text:'Both. We use collaborative canvases for remote and whiteboards/templates in person.'}}]};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{title:"Custom Workshops \u2014 Align decisions & accelerate outcomes | Doulab",description:"Outcome-driven sessions to align teams, decide faster, and create momentum. Half-day or full-day formats, on-site or remote.",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Head/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("link",{rel:"canonical",href:"https://doulab.net/services/custom-workshops"}),/*#__PURE__*/(0,jsx_runtime.jsx)("link",{rel:"preload",as:"image",href:"/img/workshops-hero.png",imageSrcSet:"/img/workshops-hero.avif 1x, /img/workshops-hero.webp 1x, /img/workshops-hero.png 1x",imageSizes:"(max-width: 700px) 100vw, 600px"}),/*#__PURE__*/(0,jsx_runtime.jsx)("script",{type:"application/ld+json",children:JSON.stringify(serviceSchema)}),/*#__PURE__*/(0,jsx_runtime.jsx)("script",{type:"application/ld+json",children:JSON.stringify(faqSchema)})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("main",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:"heroBanner","aria-labelledby":"cw-hero-title",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{flex:'1 1 460px',paddingRight:'2rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{id:"cw-hero-title",className:"heroTitle",children:"Custom Workshops"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"heroSubtitle",style:{textAlign:'justify'},children:"Align. Decide. Move."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{className:"heroText",children:["We design and run ",/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"tailored workshops"})," that unblock decisions and turn strategy into action. Built on MicroCanvas\xAE and IMM\xAE, delivered on-site or remote, and tuned to your goals and constraints."]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{"aria-label":"Outcomes you can expect",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"heroText",style:{marginTop:'0.5rem',fontWeight:600},children:"Outcomes you can expect"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Key decisions made with clear owners"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"A shared, prioritized plan for the next 30/60/90 days"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Reusable canvases and artifacts you can evolve"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"heroCtas",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:"/contact",className:"buttonPrimary","data-cta":"cta.services.workshops.hero.contact",children:"Start a workshop brief"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:"/services",className:"buttonSecondary","data-cta":"cta.services.workshops.hero.services",children:"See all services"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"heroText",style:{marginTop:'0.75rem',opacity:0.9},children:/*#__PURE__*/(0,jsx_runtime.jsx)("em",{children:"Trusted by teams at OGTIC, AFP Siembra, FUNDAPEC, and Alpha Inversiones."})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{flex:'1 1 320px',textAlign:'center'},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("picture",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("source",{srcSet:"/img/workshops-hero.avif",type:"image/avif"}),/*#__PURE__*/(0,jsx_runtime.jsx)("source",{srcSet:"/img/workshops-hero.webp",type:"image/webp"}),/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"/img/workshops-hero.png",alt:"Custom workshops illustration",className:"heroImage",loading:"eager",fetchPriority:"high",width:"600",height:"400"})]})})]})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{className:"section",id:"cw-when","aria-labelledby":"cw-who-title",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"cw-who-title",children:"When to run a workshop"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{className:"sectionLead",children:["Use a custom workshop when you need a ",/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"decision"}),", a ",/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"shared plan"}),", or a",' ',/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"jump-start"})," \u2014 without weeks of meetings."]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"cardGrid",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"cw-why-strategy",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(lightbulb/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"cw-why-strategy",children:"Strategy sprints"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Clarify priorities, OKRs, and bets using evidence-based tools."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Align on focus and trade-offs"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Produce a one-page plan"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"cw-why-alignment",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(users/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"cw-why-alignment",children:"Team alignment"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Get cross-functional buy-in and remove blockers in one session."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Shared problem framing"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Commitments & cadence"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"cw-why-gtm",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(target/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"cw-why-gtm",children:"Go-to-Market"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Frame customer/jobs, offers, and tests that de-risk launch."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Target segments & hypotheses"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"MVP metrics & signals"})]})]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{className:"section",id:"cw-formats","aria-labelledby":"cw-offers-title",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"cw-offers-title",children:"Workshop formats"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"cardGrid",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"cw-format-halfday",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(calendar_clock/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"cw-format-halfday",children:"Custom Innovation Workshop (half-day)"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:["A focused ",/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"3.5-hour"})," session built on MicroCanvas\xAE or complementary frameworks. Ideal for rapid alignment, prioritization, and a quick-win plan."]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Delivery: on-site or remote"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Includes: pre-work brief, decision log, 30/60/90 template"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"cardFooter",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:"/contact",className:"cardCta","data-cta":"cta.services.workshops.formats.halfday.brief",children:"Start a half-day brief \u2192"})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"cw-format-fullday",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(calendar_clock/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"cw-format-fullday",children:"Custom Innovation Workshop (full-day)"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:["A deeper ",/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"7-hour"})," session that moves from discovery to decisions and next steps. Includes pre-work review and post-work synthesis."]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Delivery: on-site or remote"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Includes: pre-work review, prioritization map, action board"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"cardFooter",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:"/contact",className:"cardCta","data-cta":"cta.services.workshops.formats.fullday.brief",children:"Start a full-day brief \u2192"})})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"sectionLead",style:{marginTop:'0.5rem'},children:/*#__PURE__*/(0,jsx_runtime.jsx)("em",{children:"Typical effort (client time): Half-day ~4\u20135 hours, Full-day ~8\u20139 hours including pre/post touchpoints. Pricing on request."})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{className:"section",id:"cw-outcomes","aria-labelledby":"cw-outcomes-title",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"cw-outcomes-title",children:"What you\u2019ll leave with"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"cardGrid",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"cw-outcome-decisions",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(clipboard_check/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"cw-outcome-decisions",children:"Decisions made"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Clear choices documented with rationale, owners, and due dates."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Gate-ready decision summaries"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Risks & assumptions log"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"cw-outcome-artifacts",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(WandSparkles,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"cw-outcome-artifacts",children:"Artifacts you can reuse"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Working canvases, prioritization maps, and action boards."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Editable templates"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Versioned in your repos"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"cw-outcome-3090",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(rocket/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"cw-outcome-3090",children:"30\u201360\u201390 plan"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Sequenced actions, owners, and success metrics for momentum."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Cadence and checkpoints"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Links to dashboards"})]})]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{className:"section",id:"cw-agendas","aria-labelledby":"cw-agenda-title",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"cw-agenda-title",children:"Sample agendas (MCF v2.1 + IMM\xAE)"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"cardGrid",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"cw-agenda-halfday",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"cw-agenda-halfday",children:"Half-day (3.5h) \u2014 MCF Discovery rail"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"MCF: Context & goals (15m)"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"MCF: Problem Definition Canvas (30m)"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"MCF: Customer / Jobs-to-Be-Done Canvas (45m)"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"MCF: Option mapping + Experiment backlog (60m)"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Break + alignment (15m)"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"MCF: Prioritization (ICE/RICE) + 30-day plan (30m)"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"IMM: Gate prep (decision log, owners) (15m)"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("em",{children:"Gate-ready output:"})," Discovery decision pack (Go/No-Go), ranked tests, owners, and dates."]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"cw-agenda-fullday",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"cw-agenda-fullday",children:"Full-day (7h) \u2014 Discovery \u2192 Validation"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"MCF: Context & constraints, objectives (30m)"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"MCF: Discovery synthesis + evidence review (90m)"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"MCF: Problem Definition + hypotheses (60m)"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Breaks (30m total)"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"MCF: Solution Framing + Experiment Design Canvas (90m)"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"MCF: Prioritization & roadmap (60m)"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"IMM: Gate review (Gate 1 or 2) + 30-60-90 plan (60m)"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("em",{children:"Gate-ready output:"})," Hypotheses, experiment designs, prioritized roadmap, and 30-60-90 with KPIs."]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"cw-agenda-themes",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"cw-agenda-themes",children:"Popular tracks (mapped to MCF/IMM)"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Innovation strategy & operating model \u2192 MCF Operating Model + IMM governance cadence"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Customer discovery & GTM \u2192 MCF Discovery/Problem/Customer + Gate 1 decision pack"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Foresight in planning \u2192 Futures lenses + risks/opportunities, IMM evidence cadence"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{style:{marginTop:'0.25rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("em",{children:"Need a different rail?"})," We tailor canvases & gates to your context."]})]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:"section",id:"cw-cta","aria-labelledby":"cw-cta-title",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"finalCta",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"cw-cta-title",children:"Ready to align and move?"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Send us your goals and constraints. We\u2019ll design the right workshop and get you moving fast."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"heroCtas",style:{justifyContent:'center'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:"/contact",className:"buttonPrimary","data-cta":"cta.services.workshops.final.contact",children:"Start a workshop brief"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:"/services/clarityscan",className:"buttonSecondary","data-cta":"cta.services.workshops.final.clarityscan",children:"Start with a diagnostic"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{marginTop:'0.75rem',fontSize:'0.95rem'},children:/*#__PURE__*/(0,jsx_runtime.jsx)("em",{children:"We don\u2019t run third-party trackers on this site. If you choose to schedule off-site, that provider\u2019s privacy policy applies."})})]})})]})]});}

/***/ }),

/***/ 6220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CalendarClock)
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
  ["path", { d: "M16 14v2.2l1.6 1", key: "fo4ql5" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5", key: "1osxxc" }],
  ["path", { d: "M3 10h5", key: "r794hk" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }]
];
const CalendarClock = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("calendar-clock", __iconNode);


//# sourceMappingURL=calendar-clock.js.map


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

/***/ 9653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Rocket)
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
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
      key: "m3kijz"
    }
  ],
  [
    "path",
    {
      d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
      key: "1fmvmk"
    }
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }]
];
const Rocket = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("rocket", __iconNode);


//# sourceMappingURL=rocket.js.map


/***/ })

}]);