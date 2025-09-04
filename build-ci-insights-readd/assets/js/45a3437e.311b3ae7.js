"use strict";
(self["webpackChunkdoulab_site"] = self["webpackChunkdoulab_site"] || []).push([[2029],{

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

/***/ 4914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CoachingMentoringPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 72 modules
var Layout = __webpack_require__(1656);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(5260);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(8774);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/users.js
var users = __webpack_require__(3893);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(4722);
;// ./node_modules/lucide-react/dist/esm/icons/briefcase.js
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
];
const Briefcase = (0,createLucideIcon/* default */.A)("briefcase", __iconNode);


//# sourceMappingURL=briefcase.js.map

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/target.js
var target = __webpack_require__(7792);
;// ./node_modules/lucide-react/dist/esm/icons/calendar.js
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const calendar_iconNode = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = (0,createLucideIcon/* default */.A)("calendar", calendar_iconNode);


//# sourceMappingURL=calendar.js.map

;// ./node_modules/lucide-react/dist/esm/icons/message-square.js
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const message_square_iconNode = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
];
const MessageSquare = (0,createLucideIcon/* default */.A)("message-square", message_square_iconNode);


//# sourceMappingURL=message-square.js.map

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/clock.js
var clock = __webpack_require__(7235);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/shield-check.js
var shield_check = __webpack_require__(6017);
;// ./node_modules/lucide-react/dist/esm/icons/sparkles.js
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const sparkles_iconNode = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Sparkles = (0,createLucideIcon/* default */.A)("sparkles", sparkles_iconNode);


//# sourceMappingURL=sparkles.js.map

;// ./node_modules/lucide-react/dist/esm/icons/arrow-right.js
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const arrow_right_iconNode = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = (0,createLucideIcon/* default */.A)("arrow-right", arrow_right_iconNode);


//# sourceMappingURL=arrow-right.js.map

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./src/pages/services/coaching-mentoring.tsx
// src/pages/services/coaching-mentoring.tsx
function CoachingMentoringPage(){// Structured data
const serviceSchema={'@context':'https://schema.org','@type':'Service',name:'Coaching & Mentoring',serviceType:'Executive and team coaching for innovation',provider:{'@type':'Organization',name:'Doulab',url:'https://doulab.net'},url:'https://doulab.net/services/coaching-mentoring',description:'Personalized guidance for leaders and teams to turn strategy into execution and build repeatable innovation using MCF v2.1 and IMM®.',areaServed:'Global'};const faqSchema={'@context':'https://schema.org','@type':'FAQPage',mainEntity:[{'@type':'Question',name:'Do you coach individual leaders and teams?',acceptedAnswer:{'@type':'Answer',text:'Yes. We offer 1:1 executive coaching and small-group sessions for leadership teams.'}},{'@type':'Question',name:'Is there a minimum commitment?',acceptedAnswer:{'@type':'Answer',text:'Most retainers run quarterly. We can pilot a one-month engagement if helpful.'}},{'@type':'Question',name:'How do we measure progress?',acceptedAnswer:{'@type':'Answer',text:'We co-define outcomes and light metrics, then review momentum and blockers each session.'}}]};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{title:"Coaching & Mentoring \u2014 Practical guidance, real momentum | Doulab",description:"1:1 and team coaching to turn strategy into execution, build repeatable innovation, and move faster with less risk.",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Head/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("link",{rel:"canonical",href:"https://doulab.net/services/coaching-mentoring"}),/*#__PURE__*/(0,jsx_runtime.jsx)("link",{rel:"preload",as:"image",href:"/img/coaching-hero.png",imageSrcSet:"/img/coaching-hero.avif 1x, /img/coaching-hero.webp 1x, /img/coaching-hero.png 1x",imageSizes:"(max-width: 700px) 100vw, 600px"}),/*#__PURE__*/(0,jsx_runtime.jsx)("script",{type:"application/ld+json",children:JSON.stringify(serviceSchema)}),/*#__PURE__*/(0,jsx_runtime.jsx)("script",{type:"application/ld+json",children:JSON.stringify(faqSchema)})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("main",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:"heroBanner","aria-labelledby":"cm-hero-title",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{flex:'1 1 460px',paddingRight:'2rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{id:"cm-hero-title",className:"heroTitle",children:"Coaching & Mentoring"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"heroSubtitle",children:"Practical guidance. Real momentum."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{className:"heroText",children:["1:1 and team coaching that helps leaders ",/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"turn strategy into execution"}),", build",/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:" repeatable innovation"}),", and navigate change with clarity\u2014grounded in",/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:" MicroCanvas\xAE v2.1"})," and ",/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"IMM\xAE"}),"."]}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"sectionLead",style:{marginTop:'.25rem'},children:"Leaders at public institutions and financial services use our coaching to de-risk decisions."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"heroCtas",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:"/contact",className:"buttonPrimary","data-cta":"cta.services.coaching.hero.contact",children:"Book an intro call"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:"/services/clarityscan",className:"buttonSecondary","data-cta":"cta.services.coaching.hero.clarityscan",children:"Start with a diagnostic"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{flex:'1 1 320px',textAlign:'center'},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("picture",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("source",{srcSet:"/img/coaching-hero.avif",type:"image/avif"}),/*#__PURE__*/(0,jsx_runtime.jsx)("source",{srcSet:"/img/coaching-hero.webp",type:"image/webp"}),/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:"/img/coaching-hero.png",alt:"Coaching & mentoring",className:"heroImage",loading:"eager",fetchPriority:"high",width:"600",height:"400"})]})})]})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{className:"section","aria-labelledby":"cm-who-title",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"cm-who-title",children:"Who it\u2019s for"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{className:"sectionLead",children:["Executives, founders, and transformation leaders who want a ",/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"thinking partner"})," to move faster with",/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:" less risk"}),"\u2014and bring teams along confidently."]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"cardGrid",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"cm-who-exec",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(users/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"cm-who-exec",children:"Executive leaders"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Navigate ambiguity, set focus, and align your org around what matters."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Sharper priorities & OKRs"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Decision support"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"cm-who-owner",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Briefcase,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"cm-who-owner",children:"Innovation owners"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Structure discovery, delivery, and learning loops that actually stick."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Evidence-first cadence"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Reusable playbooks"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"cm-who-gtm",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(target/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"cm-who-gtm",children:"Product / GTM leaders"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Clarify value, reduce waste, and ship customer-centered outcomes."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"JTBD & experiments"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Outcome tracking"})]})]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{className:"section","aria-labelledby":"cm-retainers-title",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"cm-retainers-title",children:"Coaching retainers"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"sectionLead",children:"Choose the cadence that fits. All tiers include a shared workspace, action tracking, and light async support."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"cardGrid",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"cm-lite",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(clock/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"cm-lite",children:"Lite Retainer"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Focused support for sharp decisions and checkpoints."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"2 live hours"})," / month"]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"1 async hour"})," / month"]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"cardFooter",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.A,{className:"cardCta",to:"/contact","data-cta":"cta.services.coaching.retainer.lite",children:["Enquire about Lite ",/*#__PURE__*/(0,jsx_runtime.jsx)(ArrowRight,{size:16})]})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"cm-standard",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Calendar,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"cm-standard",children:"Standard Retainer"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Steady guidance for monthly strategic support and momentum."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"4 live hours"})," / month"]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"2 async hours"})," / month"]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"cardFooter",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.A,{className:"cardCta",to:"/contact","data-cta":"cta.services.coaching.retainer.standard",children:["Enquire about Standard ",/*#__PURE__*/(0,jsx_runtime.jsx)(ArrowRight,{size:16})]})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"cm-pro",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(shield_check/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"cm-pro",children:"Pro Retainer"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"High-engagement mentoring for deep strategic work and priority support."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"6 live hours"})," / month"]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"3 async hours"})," / month"]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"cardFooter",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.A,{className:"cardCta",to:"/contact","data-cta":"cta.services.coaching.retainer.pro",children:["Enquire about Pro ",/*#__PURE__*/(0,jsx_runtime.jsx)(ArrowRight,{size:16})]})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"cm-enterprise",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Sparkles,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"cm-enterprise",children:"Enterprise Retainer"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Executive mentoring for leaders across multiple initiatives."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"8 live hours"})," / month"]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"4 async hours"})," / month"]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"cardFooter",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.A,{className:"cardCta",to:"/contact","data-cta":"cta.services.coaching.retainer.enterprise",children:["Enquire about Enterprise ",/*#__PURE__*/(0,jsx_runtime.jsx)(ArrowRight,{size:16})]})})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"sectionLead",style:{marginTop:'.75rem'},children:/*#__PURE__*/(0,jsx_runtime.jsx)("em",{children:"Monthly; cancel anytime with 15-day notice."})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{className:"section","aria-labelledby":"cm-outcomes-title",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"cm-outcomes-title",children:"What you\u2019ll get"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"cardGrid",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"cm-clarity",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(MessageSquare,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"cm-clarity",children:"Clarity & focus"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Sharper priorities and faster decisions with confidence."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Cleaner OKRs"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Decision cadence"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"cm-methods",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(target/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"cm-methods",children:"Repeatable methods"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"MCF + IMM playbooks you can reuse across teams and initiatives."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Reusable canvases"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Evidence-first loops"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"cm-measured",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(shield_check/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"cm-measured",children:"Measured progress"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Light instrumentation to track actions, risks, and delivered outcomes."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Momentum reviews"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Outcome tracking & reviews"})]})]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{className:"section","aria-labelledby":"cm-how-title",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"cm-how-title",children:"How we coach"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"cardGrid",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"cm-format",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(users/* default */.A,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"cm-format",children:"1:1 or small group"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Confidential space for executive problem-solving and alignment."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Leader or core team"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Goal-oriented sessions"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"cm-case",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Briefcase,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"cm-case",children:"Case-based sessions"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"We work on your live priorities\u2014no generic lectures or filler."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"On-your-context"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Actionable outputs"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:"card","aria-labelledby":"cm-cadence",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Calendar,{className:"cardIcon","aria-hidden":"true"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"cm-cadence",children:"Cadence that fits"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Weekly, bi-weekly, or monthly\u2014plus async support between calls."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"30/45/60-min sessions"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Light async reviews"})]})]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:"section","aria-labelledby":"cm-cta-title",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"finalCta",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"cm-cta-title",children:"Ready to grow with guidance?"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Tell us your goals and constraints. We\u2019ll recommend the retainer that fits and start making progress fast."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"heroCtas",style:{justifyContent:'center'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:"/contact",className:"buttonPrimary","data-cta":"cta.services.coaching.final.contact",children:"Book an intro call"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:"/services/clarityscan",className:"buttonSecondary","data-cta":"cta.services.coaching.final.clarityscan",children:"Start with ClarityScan\xAE"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"sectionLead",style:{marginTop:'.75rem'},children:/*#__PURE__*/(0,jsx_runtime.jsx)("small",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("em",{children:"Privacy-first: no tracking pixels. Email only."})})})]})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{className:"section","aria-labelledby":"cm-faq-title",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"cm-faq-title",children:"FAQ"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"faqGrid",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("details",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("summary",{children:"Do you coach individual leaders and teams?"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Yes. We offer 1:1 executive coaching and small-group sessions for leadership teams."})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("details",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("summary",{children:"Is there a minimum commitment?"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Most retainers run quarterly. We can pilot a one-month engagement if helpful."})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("details",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("summary",{children:"How do we measure progress?"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"We co-define outcomes and light metrics, then review momentum and blockers each session."})]})]})]})]})]});}

/***/ }),

/***/ 6017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ShieldCheck)
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
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("shield-check", __iconNode);


//# sourceMappingURL=shield-check.js.map


/***/ }),

/***/ 7235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Clock)
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
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
];
const Clock = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("clock", __iconNode);


//# sourceMappingURL=clock.js.map


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