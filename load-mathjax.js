window.MathJax = {
  loader: { load: ["[tex]/mathtools"] },
  svg: { fontCache: "global" },
  tex: {
    inlineMath: [["$", "$"], ["\\(", "\\)"]],
    packages: { "[+]": ["mathtools"] },
    tags: "ams"
  }
}

document.head.appendChild(
  Object.assign(document.createElement("script"), {
    src: "https://cdn.jsdelivr.net/npm/mathjax/es5/tex-mml-chtml.js",
    async: true
  })
).addEventListener("load", async () => {
  await MathJax.startup.promise
  const regexTex = /(?:\$|\\\(|\\\[|\\begin\{.*?})/
  const textareaHandler = () => {
    if (mjx._forciblyHidden) return
    if (typeof textarea.__preTest === "function" && textarea.__preTest() === false) return
    textarea.__value ||= textarea.value
    if (!(mjx._use || regexTex.test(textarea.__value))) return
    mjx._use = true
    mjx.hidden = ""
    mjx.innerHTML = textarea.__value
      .replace(/<(?!\s)(?=[^>]+\$)/g, "$& ")
      .replace(/(\n{2,})|  $\n(?!\n)/gm, (_, $1) => "<br>".repeat($1 ? $1.length : 1))
    textarea.__value = ""

    MathJax.texReset()
    try { MathJax.typeset([mjx]) }
    catch (e) {
      MathJax.typesetClear()
      if (e.message.endsWith("retry")) return "retry"
      if (!e.message.includes("null")) console.error(e)
    }
  }
  MathJax.startup.__domReady = (handlerName = "update") =>
    textarea.addEventListener("input", textarea[handlerName] = throttle(textareaHandler))
})