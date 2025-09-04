"use strict";
(self["webpackChunkdoulab_site"] = self["webpackChunkdoulab_site"] || []).push([[6808],{

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

/***/ 6689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DiagnosticsPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(5260);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 72 modules
var Layout = __webpack_require__(1656);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(8774);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/gauge.js
var gauge = __webpack_require__(4202);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/target.js
var target = __webpack_require__(7792);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(4722);
;// ./node_modules/lucide-react/dist/esm/icons/binoculars.js
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3", key: "3apit1" }],
  [
    "path",
    {
      d: "M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z",
      key: "rhpgnw"
    }
  ],
  ["path", { d: "M 22 16 L 2 16", key: "14lkq7" }],
  [
    "path",
    {
      d: "M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z",
      key: "104b3k"
    }
  ],
  ["path", { d: "M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3", key: "14fczp" }]
];
const Binoculars = (0,createLucideIcon/* default */.A)("binoculars", __iconNode);


//# sourceMappingURL=binoculars.js.map

;// ./node_modules/lucide-react/dist/esm/icons/settings-2.js
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const settings_2_iconNode = [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
];
const Settings2 = (0,createLucideIcon/* default */.A)("settings-2", settings_2_iconNode);


//# sourceMappingURL=settings-2.js.map

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/circle-check-big.js
var circle_check_big = __webpack_require__(4471);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/file-text.js
var file_text = __webpack_require__(827);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/users.js
var users = __webpack_require__(3893);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./src/pages/services/diagnostics.tsx
// src/pages/services/diagnostics.tsx
function DiagnosticsPage(){return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{title:"Diagnostics \u2014 ClarityScan\xAE, Foresight & Operating Model",description:"Evidence-based scans that baseline Strategy, Culture, Process, Results and turn gaps into a 30/60/90 plan. Built on MicroCanvas\xAE 2.1 and IMM\xAE \u2014 privacy-first.",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Head/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("link",{rel:"canonical",href:"https://doulab.net/services/diagnostics"}),/*#__PURE__*/(0,jsx_runtime.jsx)("link",{rel:"preload",as:"image",href:"/img/diagnostics-hero.png",imageSrcSet:"/img/diagnostics-hero.avif 1x, /img/diagnostics-hero.webp 1x, /img/diagnostics-hero.png 1x",imageSizes:"(max-width: 600px) 100vw, 600px"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("main",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:"heroBanner","aria-labelledby":"diagnostics-hero-title",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{flex:'1 1 520px',paddingRight:'2rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{id:"diagnostics-hero-title",className:"heroTitle",children:"Diagnostics"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"heroSubtitle",style:{textAlign:'justify'},children:"Baseline capability. Reveal gaps. Act with confidence."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{className:"heroText",children:["Evidence-based scans that baseline ",/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"Strategy"}),", ",/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"Culture"}),", ",/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"Process"}),", and ",/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"Results"})," \u2014 then convert gaps into a clear ",/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"30/60/90-day plan"}),". Built on MicroCanvas\xAE 2.1 and IMM\xAE; privacy-first by design."]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"heroCtas",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:"buttonPrimary",to:"/services/clarityscan","data-cta":"cta.diagnostics.hero.clarityscan",children:"Start with ClarityScan\xAE"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:"buttonSecondary",to:"/contact","data-cta":"cta.diagnostics.hero.contact",children:"Talk to us"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{flex:'1 1 320px',textAlign:'center'},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("picture",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("source",{srcSet:"/img/diagnostics-hero.avif",type:"image/avif"}),/*#__PURE__*/(0,jsx_runtime.jsx)("source",{srcSet:"/img/diagnostics-hero.webp",type:"image/webp"}),/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"/img/diagnostics-hero.png",alt:"Diagnostics \u2014 evidence-based innovation and foresight scans",className:"heroImage",loading:"eager",fetchPriority:"high",width:"600",height:"400"})]})})]})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{className:"section","aria-labelledby":"diagnostics-offer-title",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"diagnostics-offer-title",children:"What we offer"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{className:"lead",style:{maxWidth:900},children:["Three lightweight, privacy-first scans tailored to where you are \u2014 each producing a focused brief and a",/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:" 30/60/90-day action plan"}),"."]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"cardGrid",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"scan-clarity-title",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(gauge/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"scan-clarity-title",children:"ClarityScan\xAE \u2014 Innovation Maturity"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Rapid baseline across Strategy, Culture, Process, Results with prioritized next moves."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"What we assess:"})," strategy clarity & OKRs; culture & incentives; delivery cadence; results & measurement."]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"Session:"})," \u2264 30 minutes"]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"cardFooter",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:"cardCta",to:"/services/clarityscan","data-cta":"cta.diagnostics.offer.clarityscan",children:"Run ClarityScan\xAE \u2192"})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"scan-foresight-title",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Binoculars,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"scan-foresight-title",children:"Foresight Readiness Scan"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Integrate signals, sense-making, and implications \u2192 options into planning and risk."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"What we assess:"})," signals & horizon scanning; sense-making; implications; options; OKR/risk integration."]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"Session:"})," \u2264 60 minutes"]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"cardFooter",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:"cardCta",to:"/contact","data-cta":"cta.diagnostics.offer.foresight",children:"Enquire \u2192"})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"scan-operating-title",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Settings2,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"scan-operating-title",children:"Innovation Operating Model Checkup"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Governance, roles, decision cadence, and metrics to make delivery reliable and scalable."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"What we assess:"})," governance & gates; ownership; cadence; metrics & reporting."]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"Session:"})," \u2264 60 minutes"]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"cardFooter",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:"cardCta",to:"/contact","data-cta":"cta.diagnostics.offer.operating_model",children:"Enquire \u2192"})})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"lead",style:{marginTop:'0.75rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"Which scan fits?"})," ",/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),"\u2022 Just need a fast maturity read? ",/*#__PURE__*/(0,jsx_runtime.jsx)("em",{children:"ClarityScan\xAE"}),". \xA0\u2022 Want to embed foresight? ",/*#__PURE__*/(0,jsx_runtime.jsx)("em",{children:"Foresight Readiness"}),". \xA0\u2022 Delivery feels slow or unclear? ",/*#__PURE__*/(0,jsx_runtime.jsx)("em",{children:"Operating Model Checkup"}),"."]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{className:"section","aria-labelledby":"diagnostics-how-title",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"diagnostics-how-title",children:"How it works"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"cardGrid",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-label":"Intake & context",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(users/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{children:"1) Intake & context"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Short pre-read on goals, constraints, OKRs/roadmaps/metrics (keep it lightweight)."})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-label":"Live session",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(target/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{children:"2) Live session (\u226430\u201360m)"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("em",{children:"ClarityScan\xAE Core"})," ~30m; ",/*#__PURE__*/(0,jsx_runtime.jsx)("em",{children:"Foresight"})," & ",/*#__PURE__*/(0,jsx_runtime.jsx)("em",{children:"Operating Model"})," up to 60m."]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-label":"Findings brief",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(file_text/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{children:"3) Findings brief"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:["Maturity snapshot, gaps, and a sequenced ",/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"30/60/90-day plan"}),"."]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-label":"Options",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(circle_check_big/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{children:"4) Options"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"DIY, Doulab support, or a hybrid \u2014 you choose the cadence and depth."})]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{className:"section","aria-labelledby":"diagnostics-outcomes-title",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"diagnostics-outcomes-title",children:"What you\u2019ll get"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"cardGrid",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-label":"Evidence & clarity",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(gauge/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{children:"Evidence & clarity"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Baseline across Strategy/Culture/Process/Results or foresight readiness \u2014 not opinions."})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-label":"Actionable plan",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(circle_check_big/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{children:"Actionable plan"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Prioritized actions with owners, simple metrics, and a pragmatic cadence."})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-label":"Reusable artifacts",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(file_text/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{children:"Reusable artifacts"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Concise brief you can share; aligned with MicroCanvas\xAE 2.1 and IMM\xAE terminology."})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{className:"lead",style:{marginTop:'0.75rem'},children:["Want to preview the format? ",/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:"/contact","data-cta":"cta.diagnostics.sample_brief",children:"Ask for a sample findings brief"}),"."]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{className:"section","aria-labelledby":"diagnostics-faq-title",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"diagnostics-faq-title",children:"FAQ"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"faqGrid",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("details",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("summary",{children:"How fast can we run it?"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"We can usually schedule within a few days. ClarityScan\xAE Core is ~30 minutes; other scans are up to 60 minutes."})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("details",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("summary",{children:"Who should attend?"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"A sponsor plus 2\u20134 cross-functional leaders (e.g., product, ops, delivery) works well."})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("details",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("summary",{children:"What should we prepare?"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Goals, constraints, and any relevant OKRs/roadmaps/metrics. We\u2019ll keep it lightweight."})]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:"section","aria-labelledby":"diagnostics-cta-title",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"finalCta",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"diagnostics-cta-title",children:"Ready to get a clear read?"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:["Run a diagnostic and get your maturity snapshot plus the exact next steps to take. ",/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"Data handling:"})," we only use information you provide for the diagnostic. No third-party trackers. See our Privacy page for details."]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"heroCtas",style:{justifyContent:'center'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:"buttonPrimary",to:"/services/clarityscan","data-cta":"cta.diagnostics.final.clarityscan",children:"Start ClarityScan\xAE"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:"buttonSecondary",to:"/contact","data-cta":"cta.diagnostics.final.contact",children:"Talk to us"})]})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:"section","aria-hidden":"true",children:/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{textAlign:'center',opacity:0.75,fontSize:'0.85rem',marginTop:'-1rem'},children:"MicroCanvas\xAE and IMM\xAE are registered marks. ClarityScan\xAE is a Doulab service mark."})})]})]});}

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