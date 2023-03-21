"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    openGraph: {
        type: "website",
        locale: "en_IE",
        title: "octalmage",
        url: "https://octalmage.github.io",
        description: "",
        locale: "en_EN",
        keywords: "",
        images: [],
        site_name: "octalmage"
    },
    twitter: {
        handle: "@octalmage",
        site: "octalmage.github.io",
        cardType: "summary_large_image"
    }
});


/***/ }),

/***/ 8525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "use-dark-mode"
const external_use_dark_mode_namespaceObject = require("use-dark-mode");
var external_use_dark_mode_default = /*#__PURE__*/__webpack_require__.n(external_use_dark_mode_namespaceObject);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: external "react-dom"
const external_react_dom_namespaceObject = require("react-dom");
;// CONCATENATED MODULE: ./components/Layout.js



function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(Main, {
        children: children
    });
}
const Main = external_styled_components_default().main.withConfig({
    componentId: "sc-3a94d87d-0"
})`
  min-height: 100vh;
  background: url('/bg.png') no-repeat;
  background-size: 100%;
  background-position: -50vh 10%;
  background-attachment: fixed;
  @media screen and (max-width: ${({ theme  })=>theme.deviceSize.tablet}) {
    background-size: 250%;
    background-position: -50vh 30vh;
   }
`;

;// CONCATENATED MODULE: ./styles/GlobalStyle.js

const GlobalStyle = external_styled_components_.createGlobalStyle`
body.dark-mode {
  --img: invert(1);
  --avatar-shadow: rgba(28,22,47,.3);
}

body.light-mode {
  --img: invert(0);
  --avatar-shadow: rgba(48,52,77,.1);
} 

* {
  --bg-light-yellow: #F2F2EE;
  --bg-light-blue: #EDF2FF;
  --bg-light-red: #F2EEEE;
  
  --light-yellow: #FFF6C5;
  --yellow: #F8C231;
    
  --light-red: #FFC5EC;
  --red: #FF6969;
  --pink: #ED81FF;
  --light-pink: #FFE9FA;
  
  --blue: #00A3FF;
  --light-blue: #B7F2FF;
  
  --white: #FFFFFF;
  --white20: #ecedee;
  --black: #11181C;
  --light-gray: #858585;
  --gray: #687076;
  --light-black: rgba(0,0,0,.05);
  --light-white: rgba(255,255,255,.03);
  
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  line-height: normal;
  transition: all .1s ease;
  
  
}

html{
    scroll-behavior: smooth;
}
body {
  font-family: 'Inter', sans-serif;
  background: ${({ theme  })=>theme.bg.primary};
  color: ${({ theme  })=>theme.text.primary};
  text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;

}

a{
  color: ${({ theme  })=>theme.text.primary};
}

.main{
    min-height: 100vh;
    
}
.toast-container {
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
}
.container{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  
}

.nft-clipped{
  clip-path: url(#hex);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.oval-clipped{
  clip-path: url(#oval);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

   
`;
/* harmony default export */ const styles_GlobalStyle = (GlobalStyle);

;// CONCATENATED MODULE: ./styles/theme.config.js

styles_GlobalStyle;
const light = {
    bg: {
        primary: `var(--white)`,
        secondary: `var(--light-black)`,
        tertiary: "rgba(0,0,0,0.03)",
        border: "#EAEAEA",
        inset: "#e2e4e8",
        input: "rgba(65,67,78,0.12)",
        hover: "linear-gradient(270deg, #FFF7FB 0%, #F4F8FF 100%);"
    },
    text: {
        primary: `var(--black)`,
        secondary: "rgba(0,0,0,0.5)",
        tertiary: "#646464",
        quarternary: "#9194a1",
        placeholder: "rgba(82,85,96,0.5)",
        onPrimary: "#ffffff"
    },
    img: {
        filter: "invert(0)"
    }
};
const dark = {
    bg: {
        primary: `var(--black)`,
        secondary: `var(--light-white)`,
        tertiary: "rgba(255,255,255,0.03)",
        border: "#EAEAEA",
        inset: "#111111",
        input: "rgba(191,193,201,0.12)",
        hover: "linear-gradient(270deg, #131628 0%, #27141C 100%);"
    },
    text: {
        primary: `var(--white20)`,
        secondary: "rgba(255,255,255,0.3)",
        tertiary: "#a9abb6",
        quarternary: "#6c6f7e",
        placeholder: "rgba(145,148,161,0.5)",
        onPrimary: "#050505"
    },
    img: {
        filter: "invert(1)"
    }
};
const defaultTheme = {
    fontSizes: [
        "14px",
        "16px",
        "18px",
        "22px",
        "26px",
        "32px",
        "40px"
    ],
    fontWeights: {
        body: 400,
        subheading: 500,
        link: 600,
        bold: 700,
        heading: 800
    },
    lineHeights: {
        body: 1.5,
        heading: 1.3,
        code: 1.6
    },
    deviceSize: {
        mobileS: "320px",
        mobileM: "375px",
        mobileL: "425px",
        tablet: "768px",
        laptop: "1024px",
        laptopL: "1440px",
        desktop: "2560px"
    }
};
const lightTheme = {
    ...defaultTheme,
    ...light
};
const darkTheme = {
    ...defaultTheme,
    ...dark
};

;// CONCATENATED MODULE: external "nextjs-google-analytics"
const external_nextjs_google_analytics_namespaceObject = require("nextjs-google-analytics");
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
// EXTERNAL MODULE: ./next-seo.config.js
var next_seo_config = __webpack_require__(5056);
;// CONCATENATED MODULE: ./pages/_app.js











function MyApp({ Component , pageProps  }) {
    const darkMode = external_use_dark_mode_default()(false, {
        storageKey: null,
        onChange: null
    });
    const { 0: isMounted , 1: setIsMounted  } = (0,external_react_.useState)(false);
    // const [theme, setTheme] = useState(lightTheme)
    const theme = darkMode.value ? darkTheme : lightTheme;
    (0,external_react_.useEffect)(()=>{
        setIsMounted(true);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_nextjs_google_analytics_namespaceObject.GoogleAnalytics, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
                theme: theme,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("meta", {
                                content: "width=device-width, initial-scale=1",
                                name: "viewport"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("link", {
                                rel: "icon",
                                href: "/favicon.ico"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(styles_GlobalStyle, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_next_seo_.DefaultSeo, {
                                canonical: next_seo_config/* default.openGraph.url */.Z.openGraph.url,
                                ...next_seo_config/* default */.Z,
                                additionalMetaTags: [
                                    {
                                        name: "keywords",
                                        content: next_seo_config/* default.openGraph.keywords */.Z.openGraph.keywords
                                    },
                                    {
                                        name: "twitter:title",
                                        content: next_seo_config/* default.openGraph.title */.Z.openGraph.title
                                    },
                                    {
                                        name: "twitter:description",
                                        content: next_seo_config/* default.openGraph.description */.Z.openGraph.description
                                    },
                                    {
                                        httpEquiv: "x-ua-compatible",
                                        content: "IE=edge; chrome=1"
                                    }
                                ]
                            }),
                            isMounted && /*#__PURE__*/ (0,jsx_runtime_.jsx)(Component, {
                                ...pageProps
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8525));
module.exports = __webpack_exports__;

})();