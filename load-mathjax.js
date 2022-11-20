window.MathJax = {
  loader: { load: ["[tex]/mathtools", "[tex]/amscd", "[tex]/physics"] },
  tex: {
    packages: { "[+]": ["mathtools", "amscd", "physics"] },
    tags: "ams",
    inlineMath: [["$", "$"], ["\\(", "\\)"]]
  },
  svg: { fontCache: "global" }
}

document.head.appendChild(
  Object.assign(document.createElement("script"), {
    src: "https://cdn.jsdelivr.net/npm/mathjax/es5/tex-mml-chtml.js",
    async: true
  })
).addEventListener("load", async () => {
  await MathJax.startup.promise
  const regexTex = /(?:\$|\\\(|\\\[|\\begin\{.*?})/
  MathJax.__configMacros_tokens = /^\s*\\(def|(re)?new(command|environment)|DeclareMathOperator|let)\b/m
  const textareaHandler = async () => {
    if (textareaHandler._executing || mjx._forciblyHidden || typeof textarea.__preTest === "function" && textarea.__preTest() === false) return
    textarea.__value ||= textarea.value
    if (!(mjx._use || regexTex.test(textarea.__value))) return
    textareaHandler._executing = true
    mjx._use = true
    mjx.hidden = ""
    mjx.innerHTML = textarea.__value
      .replace(/<(?!\s)(?=[^>]+\$)/g, "$& ")
      .replace(/(\n{2,})|  $\n(?!\n)/gm, (_, $1) => "<br>".repeat($1 ? $1.length : 1))
    textarea.__value = ""

    MathJax.texReset()
    try { await MathJax.typesetPromise([mjx]) }
    catch (e) {
      MathJax.typesetClear()
      if (e.message.endsWith("retry")) return "retry"
      /* if (!e.message.includes("null")) */ console.error(e)
    }
    finally { delete textareaHandler._executing }
  }
  MathJax.startup.__domReady = (handlerName = "update") =>
    textarea.addEventListener("input", textarea[handlerName] = throttle(textareaHandler))
})