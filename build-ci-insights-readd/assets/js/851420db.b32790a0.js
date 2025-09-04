"use strict";
(self["webpackChunkdoulab_site"] = self["webpackChunkdoulab_site"] || []).push([[5709],{

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

/***/ 4202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Gauge)
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
  ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
  ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]
];
const Gauge = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("gauge", __iconNode);


//# sourceMappingURL=gauge.js.map


/***/ }),

/***/ 4471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CircleCheckBig)
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
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("circle-check-big", __iconNode);


//# sourceMappingURL=circle-check-big.js.map


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

/***/ 7035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ClarityScanPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 72 modules
var Layout = __webpack_require__(1656);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(5260);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(8774);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/gauge.js
var gauge = __webpack_require__(4202);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/target.js
var target = __webpack_require__(7792);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/circle-check-big.js
var circle_check_big = __webpack_require__(4471);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(4722);
;// ./node_modules/lucide-react/dist/esm/icons/circle-play.js
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
      d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
      key: "kmsa83"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
];
const CirclePlay = (0,createLucideIcon/* default */.A)("circle-play", __iconNode);


//# sourceMappingURL=circle-play.js.map

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/layers.js
var icons_layers = __webpack_require__(99);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/calendar-clock.js
var calendar_clock = __webpack_require__(6220);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./src/pages/services/clarityscan.tsx
// src/pages/services/clarityscan/index.tsx
function ClarityScanPage(){const serviceSchema={'@context':'https://schema.org','@type':'Service',name:'ClarityScan®',serviceType:'Innovation/Foresight Diagnostic',provider:{'@type':'Organization',name:'Doulab',url:'https://doulab.net'},url:'https://doulab.net/services/clarityscan',areaServed:'Global',potentialAction:{'@type':'ScheduleAction',target:'https://calendly.com/lasantiago/clarityscan'},description:'A rapid, evidence-based diagnostic to baseline innovation/foresight maturity and pinpoint priority actions.'};const faqSchema={'@context':'https://schema.org','@type':'FAQPage',mainEntity:[{'@type':'Question',name:'How fast can we run ClarityScan®?',acceptedAnswer:{'@type':'Answer',text:'We can usually schedule within a few days. The live session is about 30 minutes.'}},{'@type':'Question',name:'Who should attend?',acceptedAnswer:{'@type':'Answer',text:'Ideally a sponsor plus 2–4 team members across product, operations, and delivery.'}},{'@type':'Question',name:'What do we need to prepare?',acceptedAnswer:{'@type':'Answer',text:'A brief on your goals and context, and any existing OKRs, roadmap, or metrics.'}}]};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{title:"ClarityScan\xAE \u2014 Rapid innovation maturity diagnostic | Doulab",description:"A rapid, evidence-based diagnostic to baseline innovation/foresight maturity and pinpoint priority actions.",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Head/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("link",{rel:"canonical",href:"https://doulab.net/services/clarityscan"}),/*#__PURE__*/(0,jsx_runtime.jsx)("link",{rel:"preload",as:"image",href:"/img/clarityscan-hero.png",imageSrcSet:"/img/clarityscan-hero.avif 1x, /img/clarityscan-hero.webp 1x, /img/clarityscan-hero.png 1x",imageSizes:"(max-width: 700px) 100vw, 600px"}),/*#__PURE__*/(0,jsx_runtime.jsx)("script",{type:"application/ld+json",children:JSON.stringify(serviceSchema)}),/*#__PURE__*/(0,jsx_runtime.jsx)("script",{type:"application/ld+json",children:JSON.stringify(faqSchema)})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("main",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:"heroBanner","aria-labelledby":"clarityscan-hero-title",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{flex:'1 1 460px',paddingRight:'2rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{id:"clarityscan-hero-title",className:"heroTitle",children:"ClarityScan\xAE"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"heroSubtitle",style:{textAlign:'justify'},children:"A rapid diagnostic to see where you are \u2014 and what to do next."}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"heroText",children:"In under 30 minutes, ClarityScan\xAE maps your innovation/foresight maturity across strategy, culture, process, and results \u2014 then pinpoints the top actions to unlock momentum."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{"aria-label":"Outcomes you can expect",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"heroText",style:{marginTop:'0.5rem',fontWeight:600},children:"Outcomes you can expect"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Single-page maturity snapshot (PDF)"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Top 3\u20135 priority moves with owners & cadence"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"30/60/90-day action plan template (editable)"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"heroCtas",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"https://calendly.com/lasantiago/clarityscan",target:"_blank",rel:"noopener noreferrer",className:"buttonPrimary","data-cta":"cta.services.clarityscan.hero.run","aria-label":"Schedule ClarityScan on Calendly (opens in a new tab)",children:"Run ClarityScan\xAE"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:"/contact",className:"buttonSecondary","data-cta":"cta.services.clarityscan.hero.contact",children:"Talk to us"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{flex:'1 1 320px',textAlign:'center'},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("picture",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("source",{srcSet:"/img/clarityscan-hero.avif",type:"image/avif"}),/*#__PURE__*/(0,jsx_runtime.jsx)("source",{srcSet:"/img/clarityscan-hero.webp",type:"image/webp"}),/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"/img/clarityscan-hero.png",alt:"ClarityScan diagnostic visual",className:"heroImage",loading:"eager",fetchPriority:"high",width:"600",height:"400"})]})})]})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{className:"section",id:"benefits","aria-labelledby":"clarityscan-benefits-title",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"clarityscan-benefits-title",children:"What you get"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"cardGrid",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"benefit-snapshot",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(gauge/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"benefit-snapshot",children:"Maturity snapshot"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Clear, visual read of your current capability across the four pillars."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Strategy, Culture, Process, Results"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Single view of strengths & gaps (Innovation and/or Foresight)"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"benefit-priorities",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(target/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"benefit-priorities",children:"Priority moves"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Top 3\u20135 actions for the next 30\u201390 days, aligned to your goals."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Impact vs. effort mapping"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Owners, cadence, checkpoints"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"benefit-next",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(circle_check_big/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"benefit-next",children:"Next-step paths"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Recommended options \u2014 workshops, programs, or coaching \u2014 no fluff."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"DIY or guided acceleration"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Gated decisions & KPIs"})]})]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{className:"section",id:"how","aria-labelledby":"clarityscan-how-title",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"clarityscan-how-title",children:"How it works"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"cardGrid",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"how-1",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(icons_layers/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"how-1",children:"1) Quick intake"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Short context so we tailor the diagnostic to your reality."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Simple survey + objectives"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Key constraints & timelines"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"how-2",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(CirclePlay,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"how-2",children:"2) 30-minute session"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Live walkthrough of pillars, signals, and evidence with your team."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Shared understanding"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Evidence-led discussion"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"how-3",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(target/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"how-3",children:"3) Findings brief"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Concise readout: maturity snapshot, gaps, and priority actions."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Single-page summary"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Owners & next steps"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"how-4",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(circle_check_big/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"how-4",children:"4) Action options"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Clear next steps \u2014 DIY, Doulab support, or hybrid acceleration."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Workshop/program pathways"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Cadence & governance"})]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"sectionLead",style:{marginTop:'0.75rem'},children:/*#__PURE__*/(0,jsx_runtime.jsx)("em",{children:"Note: ClarityScan\xAE is a rapid read, not a full program diagnosis. For deeper assessments, see ClarityScan\xAE Plus or our IMM\xAE Programs."})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{className:"section",id:"formats","aria-labelledby":"clarityscan-pricing-title",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"clarityscan-pricing-title",children:"Pricing & formats"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"cardGrid",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"format-core",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(calendar_clock/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"format-core",children:"ClarityScan\xAE \u2014 Core"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"30-minute session + findings brief + 30/60/90-day plan. Remote delivery."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"Typical effort:"})," ~2 hours total (intake + session + brief)."]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"cardFooter",children:/*#__PURE__*/(0,jsx_runtime.jsx)("a",{className:"cardCta",href:"https://calendly.com/lasantiago/clarityscan",target:"_blank",rel:"noopener noreferrer","data-cta":"cta.services.clarityscan.formats.core.schedule","aria-label":"Schedule ClarityScan Core on Calendly (opens in a new tab)",children:"Schedule now \u2192"})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"format-plus",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(calendar_clock/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"format-plus",children:"ClarityScan\xAE \u2014 Plus"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Everything in Core + stakeholder interviews + tailored roadmap review."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"Typical effort:"})," ~4\u20136 hours total (adds interviews + roadmap review). Pricing on request."]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"cardFooter",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:"cardCta",to:"/contact","data-cta":"cta.services.clarityscan.formats.plus.proposal",children:"Request a proposal \u2192"})})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{className:"sectionLead",style:{marginTop:'0.5rem'},children:["Prefer a deeper assessment? Explore our",' ',/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:"/services/innovation-maturity",children:"IMM\xAE Programs"}),"."]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{className:"section",id:"ideal","aria-labelledby":"clarityscan-ideal-title",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"clarityscan-ideal-title",children:"Who it\u2019s for"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Leaders who need a fast, evidence-based read on capability and gaps."}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Teams about to refresh strategy, OKRs, or transformation roadmaps."}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Organizations deciding where to invest to accelerate outcomes."})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{className:"section",id:"faq","aria-labelledby":"clarityscan-faq-title",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"clarityscan-faq-title",children:"FAQ"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"cardGrid",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{children:"How fast can we run ClarityScan\xAE?"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"We can usually schedule within a few days. The live session is ~30 minutes."})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{children:"Who should attend?"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Ideally a sponsor + 2\u20134 team members across product, ops, and delivery."})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{children:"What do we need to prepare?"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"A brief on your goals/context and any existing OKRs, roadmap, or metrics."})]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:"section",id:"cta","aria-labelledby":"clarityscan-cta-title",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"finalCta",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"clarityscan-cta-title",children:"Ready to get a clear read?"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Run ClarityScan\xAE and get your maturity snapshot plus the exact next steps to take."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"heroCtas",style:{justifyContent:'center'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"https://calendly.com/lasantiago/clarityscan",target:"_blank",rel:"noopener noreferrer",className:"buttonPrimary","data-cta":"cta.services.clarityscan.final.run","aria-label":"Schedule ClarityScan on Calendly (opens in a new tab)",children:"Start ClarityScan\xAE \u2192"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:"/contact",className:"buttonSecondary","data-cta":"cta.services.clarityscan.final.contact",children:"Book a discovery call \u2192"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{marginTop:'0.75rem',fontSize:'0.95rem'},children:/*#__PURE__*/(0,jsx_runtime.jsx)("em",{children:"We don\u2019t run third-party trackers on this site. Scheduling happens on Calendly; information you share there is covered by their privacy policy."})})]})})]})]});}

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


/***/ })

}]);