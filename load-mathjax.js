"use strict"

window.MathJax = mergeObjOptIn(
  {
    loader: {
      load: ["[tex]/mathtools", "[tex]/amscd", "[tex]/physics"],
      versionWarnings: false
    },
    tex: {
      packages: { "[+]": ["mathtools", "amscd", "physics"] },
      tags: "ams",
      inlineMath: [["$", "$"], ["\\(", "\\)"]]
    },
    svg: { fontCache: "global" },
    options: { ignoreHtmlClass: "mathjax_ignore" }
  }
  ,
  tryEval(localStorage.getItem("userCustomMathJax"))
)

loadScript("https://cdn.jsdelivr.net/npm/mathjax/es5/tex-svg-full.js").addEventListener("load", async () => {
  await MathJax.startup.promise
  const regexTex = /(?:\$|\\\(|\\\[|\\begin\{.*?})/
  MathJax.__configMacros_tokens = /^\s*\\(def|(re)?new(command|environment)|DeclareMathOperator|let)\b/m
  const textareaHandler = async () => {
    if (mjx._forciblyHidden || typeof textarea.__preTest === "function" && textarea.__preTest() === false) return
    textarea.__value ||= textarea.value
    if (!(mjx._use || regexTex.test(textarea.__value))) return
    mjx._use = true
    mjx.hidden = ""
    mjx.innerHTML = textarea.__value
      .replace(/<(?!\s)(?=[^>]+\$)/g, "$& ")
      .replace(/(\n{2,})|  $\n(?!\n)/gm, (_, $1) => "<br>".repeat($1 ? $1.length : 1))
    textarea.__value = ""

    if (textareaHandler._executing) return
    textareaHandler._executing = true
    resetClear()
    try { await MathJax.typesetPromise([mjx]) }
    catch (e) {
      resetClear()
      if (e.message.endsWith("retry")) return "retry"
      if (!MathJax.config._ignoreErrors.has(e.message)) console.error(e)
    }
    finally { delete textareaHandler._executing }
  }
  function resetClear() { MathJax.texReset(); MathJax.typesetClear() }
  MathJax.startup.__domReady = (handlerName = "update") => {
    textarea.addEventListener("input", textarea[handlerName] = throttle(textareaHandler))
  }
  MathJax.config._ignoreErrors = new Set([
    // "this.parent(...) is null",
    // "Command of variable renderer failed."
  ])
  MathJax.config._menuSettings = function ({ renderer = "SVG" } = {}) {
    const menuOptName = "MathJax-Menu-Settings"
    const menuOpt = localStorage._getItem(menuOptName)
    localStorage._setItem(menuOptName, Object.assign(menuOpt, { renderer }))
    MathJax.config._ ??= {}
    Object.entries(menuOpt).forEach(([k, v]) => MathJax.config._[k] = v)
  }
})