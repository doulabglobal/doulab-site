"use strict";
(self["webpackChunkdoulab_site"] = self["webpackChunkdoulab_site"] || []).push([[1889],{

/***/ 6697:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/blog/introducing-doulab","editUrl":"https://github.com/doulabglobal/doulab-site/edit/main/blog/2025-08-30-introducing-doulab.md","source":"@site/blog/2025-08-30-introducing-doulab.md","title":"Introducing Doulab: innovation made repeatable","description":"Why Doulab exists, how the MicroCanvas® Framework and IMM® help teams ship outcomes reliably, and where to start.","date":"2025-08-30T00:00:00.000Z","tags":[{"inline":false,"label":"Announcement","permalink":"/blog/tags/blog/tags/announcement","description":"Product and company news"},{"inline":false,"label":"MicroCanvas","permalink":"/blog/tags/blog/tags/mcf","description":"MicroCanvas® methods and tools"},{"inline":false,"label":"IMM","permalink":"/blog/tags/blog/tags/imm","description":"Innovation Maturity Model® practice"},{"inline":false,"label":"ClarityScan","permalink":"/blog/tags/blog/tags/clarityscan","description":"Diagnostics and capability baselines"},{"inline":false,"label":"Vigía Futura","permalink":"/blog/tags/blog/tags/vigia-futura","description":"Foresight radar, briefings, and labs"},{"inline":false,"label":"Innovation","permalink":"/blog/tags/blog/tags/innovation","description":"Culture, delivery systems, and outcomes"}],"readingTime":6.7,"hasTruncateMarker":true,"authors":[{"name":"Luis Santiago","title":"Head Coach & Mentor","page":{"permalink":"/blog/authors/luis"},"socials":{"linkedin":"https://www.linkedin.com/in/lasantiagoa/","github":"https://github.com/doulabglobal"},"imageURL":"/img/luis.png","key":"luis"}],"frontMatter":{"title":"Introducing Doulab: innovation made repeatable","description":"Why Doulab exists, how the MicroCanvas® Framework and IMM® help teams ship outcomes reliably, and where to start.","slug":"/introducing-doulab","authors":["luis"],"tags":["announcement","mcf","imm","clarityscan","vigia-futura","innovation"],"image":"/img/2025-08-30-introducing-doulab.jpg","keywords":["innovation maturity","microcanvas","IMM","foresight","diagnostics","workshops","strategy execution"]},"unlisted":false}');

/***/ }),

/***/ 8453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ 9261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_08_30_introducing_doulab_md_d5b_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_08_30_introducing_doulab_md_d5b_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6697);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8453);


const frontMatter = {
	title: 'Introducing Doulab: innovation made repeatable',
	description: 'Why Doulab exists, how the MicroCanvas® Framework and IMM® help teams ship outcomes reliably, and where to start.',
	slug: '/introducing-doulab',
	authors: [
		'luis'
	],
	tags: [
		'announcement',
		'mcf',
		'imm',
		'clarityscan',
		'vigia-futura',
		'innovation'
	],
	image: '/img/2025-08-30-introducing-doulab.jpg',
	keywords: [
		'innovation maturity',
		'microcanvas',
		'IMM',
		'foresight',
		'diagnostics',
		'workshops',
		'strategy execution'
	]
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "What gets in the way (the problem)",
  "id": "what-gets-in-the-way-the-problem",
  "level": 2
}, {
  "value": "The simple system under the work",
  "id": "the-simple-system-under-the-work",
  "level": 2
}, {
  "value": "What we install (the solution)",
  "id": "what-we-install-the-solution",
  "level": 2
}, {
  "value": "Who we’re for",
  "id": "who-were-for",
  "level": 2
}, {
  "value": "How we work together",
  "id": "how-we-work-together",
  "level": 2
}, {
  "value": "Why this matters now",
  "id": "why-this-matters-now",
  "level": 2
}, {
  "value": "What’s coming next",
  "id": "whats-coming-next",
  "level": 2
}, {
  "value": "FAQ",
  "id": "faq",
  "level": 2
}, {
  "value": "Start here",
  "id": "start-here",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    em: "em",
    h2: "h2",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Innovation shouldn’t be a coin flip."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We started ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Doulab"
      }), " to answer a stubborn question: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "How do you make innovation and foresight repeatable—so strategy turns into measurable outcomes in any organization, not just the lucky ones?"
      }), " Since then, we’ve supported teams across public institutions and companies—from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "AFP Siembra"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Alpha Inversiones"
      }), " to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "OGTIC/RedLab"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "FUNDAPEC"
      }), ", and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Runway Innovation Hub"
      }), "—and saw the same pattern: when teams can see clearly, decide faster, and learn in tight loops, they ship."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Our purpose is simple: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "help unlock global prosperity by helping others create better futures"
      }), ". In practice, that means making innovation ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "repeatable"
      }), " and foresight ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "practical"
      }), "—so plans become outcomes you can measure."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Default next step:"
      }), " get a baseline in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "15–20 minutes"
      }), " with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "/services/clarityscan",
          children: "ClarityScan®"
        })
      }), ", or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "/contact",
          children: "book a short discovery call"
        })
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "what-gets-in-the-way-the-problem",
      children: "What gets in the way (the problem)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Across startups and institutions, the blockers rhyme. Here are the most common ones we see—each solvable with the right scaffolding:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "cardGrid",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("article", {
        className: "card",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
          children: "Culture isn’t wired for innovation"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: "Efforts feel sporadic; engagement stays low. Global engagement hovers ~20–23%."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "https://www.gallup.com/workplace/645758/state-of-the-global-workplace-2024-press-release.aspx",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Gallup — 2024"
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("article", {
        className: "card",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
          children: "Strategy treated as a document"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: "OKRs drift, teams lose the thread; misalignment compounds."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "https://www.forbes.com/sites/johnkotter/2013/07/09/heres-why-ceo-strategies-fall-on-deaf-ears/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Kotter via Forbes"
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("article", {
        className: "card",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
          children: "Decisions outrun by opinions"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: "ROI suffers without evidence and testing; data-driven loops change that."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "https://online.hbs.edu/blog/post/data-driven-decision-making",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "HBS Online"
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("article", {
        className: "card",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
          children: "Leadership without cadence"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: "Projects stall without visible ownership and governance."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "https://www.mckinsey.com/capabilities/transformation/our-insights/why-do-most-transformations-fail-a-conversation-with-harry-robinson",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "McKinsey"
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("article", {
        className: "card",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
          children: "Rigid structures, stale skills"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: "Cycles slow; teams detach from real user needs."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2020.00963/full",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Frontiers in Psychology"
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("article", {
        className: "card",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
          children: "Processes that don’t scale"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: "Costs creep, delivery becomes inconsistent; operating models need redesign."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "https://www.bain.com/insights/scaling-software-companies-path-to-%241B-in-revenue/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Bain"
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("article", {
        className: "card",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
          children: "Customer insight off to the side"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: "Offers drift from real needs; value left on the table."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "https://www.forrester.com/blogs/us-cx-index-2024-results/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Forrester — CX Index"
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("article", {
        className: "card",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
          children: "Scattered truth, slow bets"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: "Without a shared backbone, assumptions drive decisions."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "https://www.accenture.com/content/dam/accenture/final/capabilities/technology/software-engineering/document/Accenture-Report-ITL-IPS.pdf",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Accenture (PDF)"
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("article", {
        className: "card",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
          children: "No foresight in the cycle"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: "Teams react to shocks instead of shaping options."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "https://www.weforum.org/stories/2024/01/strategic-foresight-help-companies-survive-thrive/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "World Economic Forum"
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "the-simple-system-under-the-work",
      children: "The simple system under the work"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "We built two pieces that make the work feel less like guesswork:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "MicroCanvas® Framework (MCF)"
        }), ", a set of lightweight canvases that move teams from discovery to delivery—without weeks of meetings."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Innovation Maturity Model (IMM®)"
        }), ", a structured way to baseline capability, prioritize gaps, and install practice across strategy, culture, process, and results."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Used together, MCF + IMM reduce ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "decision latency"
      }), " (fewer stalls), shorten ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "cycle time"
      }), " (smaller bets, faster feedback), improve ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "signal quality"
      }), " (evidence in planning & delivery), and raise ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "capability"
      }), " (measurable progress across IMM dimensions)."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: ["With ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "AFP Siembra"
        }), ", strategy-to-delivery support led to a digital savings product and a working innovation lab—practical scaffolding for repeatable outcomes. External site: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: "https://afpsiembra.com",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "afpsiembra.com"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "what-we-install-the-solution",
      children: "What we install (the solution)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "You don’t need a moonshot to get moving. We right-size entry points and build from there:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "cardGrid",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("article", {
        className: "card",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
          children: "Diagnostics: know where you stand"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: "Quick baselines of innovation maturity; pinpoint gaps with evidence-based tools like ClarityScan®."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "cardFooter",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            className: "cardCta",
            href: "/services/clarityscan",
            children: "Explore diagnostics →"
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("article", {
        className: "card",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
          children: "Workshops: spark aligned action"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: "Focused sessions that unlock decisions and translate strategy into practical next steps."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "cardFooter",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            className: "cardCta",
            href: "/services/custom-workshops",
            children: "Explore workshops →"
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("article", {
        className: "card",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
          children: "Programs: build innovation capacity"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: "Structured journeys—like IMM—that install culture, process, and metrics to scale reliably."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "cardFooter",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            className: "cardCta",
            href: "/services/innovation-maturity",
            children: "Explore programs →"
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("article", {
        className: "card",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
          children: "Coaching & mentoring"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: "Targeted 1:1 or group support to remove blockers and build internal capability."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "cardFooter",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            className: "cardCta",
            href: "/services/coaching-mentoring",
            children: "Explore coaching & mentoring →"
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("article", {
        className: "card",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
          children: "Future studies"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: "Foresight research and training to spot trends, assess risk, and guide resilient choices."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "cardFooter",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            className: "cardCta",
            href: "/vigia-futura",
            children: "Discover Vigía Futura →"
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "who-were-for",
      children: "Who we’re for"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "If you’re a founder or product leader pushing for clarity and speed; an executive team aligning strategy, governance, and operating rhythms; a public-sector leader building repeatable capacity; or a strategy/ops team hungry for better evidence loops—you’ll feel at home here."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "how-we-work-together",
      children: "How we work together"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "We start where you are and build momentum:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Diagnostics"
      }), " give you a quick baseline and targeted actions. Most teams begin with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "/services/clarityscan",
          children: "ClarityScan®"
        })
      }), " (15–20 minutes; get a baseline this week)."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Custom workshops"
      }), " create alignment, prioritization, and a 30–60–90 plan in one focused day. See ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "/services/custom-workshops",
          children: "workshop options"
        })
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Programs (IMM-P)"
      }), " install operating rhythms, governance, and instrumentation so outcomes become reliable. Explore the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "/services/innovation-maturity",
          children: "IMM Program"
        })
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Coaching & mentoring"
      }), " unblock high-stakes priorities for execs, product, and GTM leaders. Learn more about ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "/services/coaching-mentoring",
          children: "coaching & mentoring"
        })
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Vigía Futura"
      }), " is our foresight observatory—signals, executive briefings, and short policy/venture labs—so leaders can act before the curve. Visit ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "/vigia-futura",
          children: "Vigía Futura"
        })
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "why-this-matters-now",
      children: "Why this matters now"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["AI acceleration, shifting governance, and unsettled markets reward ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "learning velocity"
      }), ". Teams that instrument decisions, run small bets, and iterate intentionally out-ship the rest. That’s the system we help you install—so you avoid the high cost of waiting and the regret of missed windows."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "whats-coming-next",
      children: "What’s coming next"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We’re publishing ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "/docs/research-resources/distributed-federated-agentic-ai",
          children: "Distributed Federated Agentic AI"
        })
      }), " (open access). We’re rolling out ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Vigía Futura"
      }), "—a live radar (quarterly), executive briefings, and quick-turn policy/venture labs. And we’re expanding the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "MCF toolkit"
      }), " and open resources for teams and public institutions—see ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "/docs/research-resources",
          children: "Research & Resources"
        })
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "faq",
      children: "FAQ"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Is this “consulting”?"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "It’s ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "system installation"
      }), ": decision scaffolds, operating cadences, and capability building. We co-create, transfer, and instrument so your team can run it."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "How fast will we see value?"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "Most teams get a baseline and targeted actions within ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "a week"
      }), " via ClarityScan® and/or a one-day workshop."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Do you work beyond the private sector?"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "Yes. We’ve adapted MCF + IMM for public contexts (e.g., ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "RedLab"
      }), ") where governance and inclusion matter."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "start-here",
      children: "Start here"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Prefer proof before plans? ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "/services/clarityscan",
          children: "Get your baseline with ClarityScan®"
        })
      }), " and see exactly where to focus.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "Prefer a conversation? ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "/contact",
          children: "Book a discovery call"
        })
      }), " and we’ll map goals, constraints, and a fit-for-purpose path."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "btn-row",
      style: {
        marginTop: '0.5rem'
      },
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
        className: "btn-primary",
        href: "/services/clarityscan",
        "aria-label": "Get your baseline with ClarityScan",
        children: "Get your baseline"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
        className: "btn-secondary",
        href: "/contact",
        "aria-label": "Talk to Doulab",
        children: "Talk to us"
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ })

}]);