"use strict"

if (typeof mdc === "undefined") {
  const $l = "mdc-load-failed", lastTime = localStorage.getItem($l), now = Date.now()
  alert(`\`material-components.js\` failed to load${!lastTime || now - lastTime > 5 * 60 * 1000
    ? ",\n\n but it is very likely that refreshing the page will do."
    : ".\n\nMaybe you can check if the console reports an error \"HTTP/2 503 Service Unavailable\"."
    }`)
  localStorage.setItem($l, now)
  location.reload()
}

const {
  checkbox: { MDCCheckbox },
  list: { MDCList },
  menu: { MDCMenu },
  ripple: { MDCRipple },
  snackbar: { MDCSnackbar },
  textField: { MDCTextField },
  iconButton: { MDCIconButtonToggle },
  tooltip: { MDCTooltip },
  dialog: { MDCDialog },
  slider: { MDCSlider },
}
  = mdc;
[
  [".mdc-text-field", MDCTextField],
  [".mdc-button", MDCRipple],
  [".mdc-snackbar", MDCSnackbar],
  [".mdc-list", MDCList],
  [".mdc-checkbox", MDCCheckbox],
  [".mdc-menu", MDCMenu],
  [".mdc-icon-button", MDCRipple],
  [".mdc-icon-button", MDCIconButtonToggle],
  [".mdc-tooltip", MDCTooltip],
  [".mdc-dialog", MDCDialog],
  [".mdc-slider", MDCSlider],
]
  .forEach(([_class, Class]) => {
    const __class = `${_class.replace(/^\W+/, "").replace(/\W+/g, "_")}__list`
    window[__class] = []
    each(
      document.querySelectorAll(_class),
      el => window[__class].push(new Class(el))
    )
  })
{
  [mdc_text_field__list, mdc_tooltip__list, mdc_menu__list, mdc_dialog__list, mdc_slider__list].forEach(assocDOMJS)
  ctrl_font_size.hidden = true
  ctrl_font_size.removeAttribute("init")
}
assoc_MDC_inst_with_tmpl(mdc_checkbox__list, { tmplId: "mdc-checkbox" })
assoc_MDC_inst_with_tmpl(ruleList, { tmplId: "mdc-text-field--filled", class: MDCTextField, selector: "label" })


const { body } = document
const txta = [textarea, txtd]
const $checkbox$ = "input[type=checkbox]"
const $input$ = "input[type=text]"
const boxP = { text: "value", checkbox: "checked" }
const [$input$find, $input$rplc] = ["first", "last"].map(_ => `label:${_}-of-type>input`)
const $rulePair = "[rule-pair]"
const mapToGetID = _ => _.map(document.getElementById.bind(document))
const mapToID = (_, $) => _.map(_ => `${$ ?? ""}${_.id}`)
const mainBlocks = mapToGetID("#txte #mjx #btns #ruleList".match(/\w+/g))
mainBlocks.sort((a, b) => a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_PRECEDING)
const oriOrd = mapToID(mainBlocks, "#").join(" ")
mainBlocks._ids = new Set(oriOrd.split(" "))
mainBlocks._report = () => uCfgContent._uSet.CSS.layout.order = mainBlocks.sort((a, b) => a.style.order - b.style.order).map(el => `#${el.id}`).join(" ")
const uOptJux = _ => uOptJux._ = (_ = tryEval(uCfgContent._uSet.CSS.layout[$jux$f])) === "auto" ? isLandscape() : _
Object.defineProperties(uOptJux, {
  "__": { get: () => uOptJux._ ?? uOptJux() },
  "_andL": { get: () => uOptJux.__ && isLandscape() }
})

const narrowPx = 600
function resizeWith([{ target } = {}]) {
  if (!target) return
  if (target._beingResized) return delete target._beingResized

  detectJux()
  if (isLandscape._) {
    mainBlocks.forEach(el => el !== target && ["width", "max-width", "height"].forEach(_ => el.style.removeProperty(_)))
    btn_dockBox._updPlacement()
    ruleList.classList.remove("narrow")
  }
  else if (!body.classList.contains($jux)) {
    const [w] = ["clientWidth"].map(_ => `${target[_]}px`);
    (target === textarea ? [btns, ruleList] : [ruleList]).forEach(el => {
      el._beingResized = true
      el.style.setProperty(el === btns ? "width" : "max-width", w)
      !isLandscape._ && el.classList[target.clientWidth < narrowPx ? "add" : "remove"]("narrow")
    })
    mjx.style.cssText += `max-width: ${w}`
  }
}
const rszObs = new ResizeObserver(resizeWith);
[textarea, btns].forEach(_ => rszObs.observe(_))
function detectJux() { body.classList.toggle($jux, uOptJux()) }
screen.orientation.addEventListener("change", detectJux)

disposableMutObs(mjx, { attributeFilter: ["hidden"] })(() => txte.classList.remove(txte._className_init))


exportRules._pattern = /^\s*\[\s*\[/
textarea._checkSuppression = () => textarea._suppressed = exportRules._pattern.test(textarea.value)
textarea._checkSuppression()
const isAboutToLaTeX = () => uCfgContent._uSet.LaTeX.autoOptIn && textarea.value.trim() && !textarea.value.includes("$")
textarea.__preTest = () => isAboutToLaTeX() ? textarea.__value = `$$${textarea.value}$$` : delete textarea.__value
textarea.addEventListener("input", textarea._checkSuppression)
textarea.addEventListener("change", function ({ timeStamp }) {
  if (timeStamp < this._timeStamp + 5000) return
  this._timeStamp = timeStamp
  if (this.value) {
    if (this.value.length <= uCfgContent._uSet.autoSave.maxChars) {
      localStorage.setItem("autosaved", this.value)
      delete textarea._autosave
    } else {
      !textarea.hasOwnProperty("_autosave") && tell(`Friendly reminder: The length of the entered text has exceeded the maximum number of characters (num: ${uCfgContent._uSet.autoSave.maxChars}) set by "autoSave" in the configuration.`)
      textarea._autosave = false
    }
  }

  if (mjx._error = mjx.querySelector("mjx-merror[data-mjx-error*=macro]"))
    tell(`⚠️ Please fix your <b>macros</b> and refresh the page. Due to this error occurred:<br><br><code>${mjx._error.dataset.mjxError}</code>`)
})


ruleList.exec = fn => each(btn_frzSel._filterNotFrz(getCheckboxes()), fn)
const boxsClicked = new fixedLengthArray(2)
ruleList.addEventListener("click", ({ target }) => { if (target.matches($checkbox$)) { btn_toggleAll._detectBoxesStat(); boxsClicked.push(target) } })
ruleList.addEventListener("dblclick", ({ target }) => target.matches($checkbox$) && boxsClicked[0] === boxsClicked[1] && btn_frzSel.__toggle(target))



btns.addEventListener("pointerdown", ({ target, x, y }) => {
  if (target !== btns) return
  const { right: r, bottom: b, height: h } = btns.getBoundingClientRect()
  if ([r - x, b - y].every(v => v <= 32)) {
    btns.style.minHeight = btns.style.maxHeight = "unset"
    btns.style.height = `${h}px`
  }
  else if ([r - x, b - y].every(v => v > 128)) btns.style.removeProperty("max-height")
})

btn_diff._close = e => {
  const { wasViewing } = btn_diff._ctrl({ detail: { inst: true } })
  if (e && wasViewing) e.stopImmediatePropagation()
}
[btn_rplc, btn_rrplc, btn_undo, btn_cut, btn_rec, btn_recAS, ...filter(content_menu.children, _ => _.matches("[id$=Rules]"))].forEach(_ => _.addEventListener("click", btn_diff._close))

const $_m = "_mid"
btn_rplc.addEventListener("click", rplc)
btn_rrplc.addEventListener("click", lMRFYUNM)

function rplc({ caller, times } = {}) {
  if (!ruleList.childElementCount) {
    tell("Please add a rule")
    return { abend: -1 }
  }
  let hasCheckedRule
  const checkNonNullnessFor$find = $find => $find.replace(regs.comment_pure, "")
  let rules = getAllRulePairAsStrArr(true).filter(([$find, , checked], i, arr) => checked && (hasCheckedRule = true) && $find && ([arr[i]] = checkNonNullnessFor$find($find)))
  if (!rules.length) {
    tell(ruleList.childElementCount ? `No ${hasCheckedRule ? `<em>non-empty</em> ` : ""}rules are ticked` : "No search rules are filled")
    return { abend: -1 }
  }
  const stampEl$signet = "[data-match-count]"
  rules.forEach(rule => rule[3] = rule[3].parentNode.querySelector(stampEl$signet))
  // console.log(rules)
  ruleList.querySelectorAll(stampEl$signet).forEach(stampEl => { if (!times) stampEl.dataset.matchCount = ""; delete stampEl._isForCompleteText })

  try {
    const evalV = eval(uCfgContent._uSet.match._precall)
    uCfgContent._uSet.match_precall_output && console.log(`Pre-call execution result: %c${evalV}`, "color: khaki")
  }
  catch (e) {
    console.error(e); tell(`Your pre-executed code ("precall<f>") has a<br>${e}`, tell.timeout_mid)
    return { abend: 1 }
  }

  let count, count_incr = 0, count_unaffected = 0
    , records, rplcArr_flat, rplcResultSegs, rplcResultText = textarea.value, cycles = 1
    , keptArr
  const addInfo = arr => (arr.push({ priority: (times + 1) * cycles * arr[1] }), arr)
  while (rules.length) {
    textarea._value = rplcResultText
    let segmented = false
    const textArr = (keptArr = btn_matchSpecified._on && isObjReg(uCfgContent._uSet.match.filter))
      ? [...textarea._value.matchAll(keptArr)].map(v => addInfo([v[0], v.index, "unchanged"]))
      : [addInfo([textarea._value, 0, "unchanged"])]
    if (keptArr) keptArr = [...textArr]
    let text, value, index_a/*anchor*/, index_c/*current*/, index_g/*global*/, index_n/*next*/
    const rplcArr = []
    window[_uVars[$cRHC]] = 0

    try {
      rules.forEach(([$find, $rplc, , stampEl], i) => {
        if (!segmented && !index_a) segmented = stampEl._isForCompleteText = true
        stampEl._matchCount = +(stampEl.dataset.matchCount ??= "")
        $find = isStrReg($find) ? eval(/\/\w*g\w*$/.test($find) ? $find : `${$find}g`) : RegExp(escChars(btn_bslEsc._on ? $find : dblBsl($find)), "g")
        $find._inclCGIA = $find._inclCGIA()
        if (/(?<!^.*\\.*)=>/.test($rplc)) $rplc = eval($rplc)
        else if (btn_bslEsc._on) $rplc = eval(`"${escQq($rplc)}"`)
        // console.log($find, $rplc)
        rplcArr[i] = []
        while ([text, index_a] = textArr.shift() || [], text !== undefined) {
          index_n = $find.lastIndex = 0
          const vm = text.matchAll($find)
          while ({ value } = vm.next(), value) {
            ({ index: index_c } = value, [value] = value)
            index_g = index_a + index_c
            window[_uVars[$cIdxS]] = index_g
            window[_uVars[$cIdxE]] = index_g + value.length - 1
            window[_uVars[$cPre]] = text.substring(index_n, index_c)
            window[_uVars[$cStr]] = textarea._value
            window[_uVars[$cRHC]] += 1
            if (index_n < index_c) rplcArr[i].push(addInfo([text.substring(index_n, index_c), index_a + index_n, "unchanged"]))

            let rplcRes
            if ($find._inclCGIA) {
              const re = RegExp($find, regAddFlags($find.flags.replace("g", ""), "y"))
              re.lastIndex = index_c
              rplcRes = (rplcRes = text.replace(re, $rplc))
                .substring(index_c, index_c + value.length + rplcRes.length - text.length)
            }
            else {
              $find.lastIndex = index_c
              rplcRes = $rplc && value.replace($find, $rplc)
            }
            if (count === undefined) count = 0
            if (rplcRes !== value) ++count; else ++count_unaffected
            ++stampEl._matchCount

            rplcArr[i].push(addInfo([value, index_g, "replaced"]), addInfo([rplcRes, index_g, "become"]))
            index_n = index_c + value.length
          }
          if (index_n < text.length) rplcArr[i].push(addInfo([text.substring(index_n), index_a + index_n, "unchanged"]))
        }
        textArr.unshift(...rplcArr[i].filter(([, , mark], i, arr) => mark === "unchanged" && delete arr[i]))
        rplcArr[i].splice(0, Infinity, ...rplcArr[i].noHole)

        stampEl.dataset.matchCount = stampEl._matchCount || ""
      })
    }
    catch (err) {
      console.error(err); tell(err, tell.timeout_max)
      return { abend: 1 }
    }

    count_incr = (count ?? 0) - count_incr
    if (count_incr <= 0) break
    rules = rules.filter(([, , , stampEl]) => !stampEl._matchCount && !stampEl._isForCompleteText)

    if (keptArr) {
      let i_a = 0
      keptArr.forEach(([v, i], _i) => {
        textArr.splice(_i * 2, 0, addInfo([textarea._value.substring(i_a, i), i_a, "unchanged"]))
        i_a = i + v.length
        if (_i === keptArr.length - 1) textArr.push(addInfo([textarea._value.substring(i_a), i_a, "unchanged"]))
      })
    }

    records && ["replaced", "become"].forEach(_ => {
      records[_].forEach(record => record[2] += $_m)
      records[`${_}${$_m}`] = (records[`${_}${$_m}`] || []).concat(records[_])
    })
    rplcArr_flat = rplcArr.flat()
    records = Object.assign(records || {}, { unchanged: textArr, replaced: [], become: [] /*[^note:u-r-b]*/ })
    // [^note:u-r-b]: Despite "[^note:b-u]", the order here is unchanged because of subsequent dependants
    rplcArr_flat.forEach(par => records[par[2]].push(par))
    rplcResultSegs = records.become.concat(records.unchanged)/*[^note:b-u]*/.sort(([, i1], [, i2]) => i1 - i2)
    // [^note:b-u]: Adaptation for the special case of "matching zero-width strings"
    rplcResultText = rplcResultSegs.map(([segStr]) => segStr).join("")
    // console.log($str(records))
    ++cycles
  }

  if (textarea.value === rplcResultText) tell(`${count === undefined ? "No matches" : `${count ? `<b>${count}</b> (places⋅times)` : `<b>${count_unaffected}</b> occurrences`}`} found${count === undefined ? keptArr ? `.<br><span class=sml>(Probably because \`${btn_matchSpecified.tip.dataset.text}\` is turned on)</span>` : "" : ".<br><span class=sml>(Replaced but no change happened)</span>"}`)
  else {
    tell.timeout_tmp = 2500
    btn_diff._diffTables_reset(records, times, count)
    !caller && (textarea._oldVal = textarea.value)
    textarea.value = rplcResultText
    tell(`Replaced <b>${count}</b> places`)
    btn_undo._enable()
  }
  return { count }
}
function lMRFYUNM/*"let me repeat for you until no match"*/() {
  textarea._oriVal = textarea.value
  let times = 0, abend, count, _count = 0
  do {
    ({ abend, count } = rplc({ caller: lMRFYUNM, times }))
    if (abend || !count) break
    ++times; _count += count
  }
  while (textarea.value.length < textarea._value.length)
  _count && tell(`<b>${_count}</b> places were replaced in <b>${times}</b> rounds`, tell.timeout_mid)
  if (textarea._oriVal !== textarea.value) textarea._oldVal = textarea._oriVal
}

btn_diff.addEventListener("click", btn_diff._ctrl = ({ detail: { inst } = {} }) => {
  const viewing = !txtd.hidden
  const closeView = inst || viewing
  !closeView && btn_diff._alloc()
  txta.forEach((el, i) => el.hidden = !((i + closeView) % 2))
  btn_diff.dataset.viewing = !closeView
  return { wasViewing: viewing }
})
btn_diff._alloc = () => {
  if (!btn_diff._diffTables_src) return ""
  if (!btn_diff._diffTables) {
    btn_diff._diffTables_gen()
    btn_diff._diffTables_cat = btn_diff._diffTables.map(([str, , mark, endpoint]) => `<span data=${isSym(str) ? "sep" : mark}${isNum(endpoint) ? `#${endpoint}` : ""}>${isSym(str) ? "" : str}</span>`).join("")
  }
  txtd.innerHTML = btn_diff._diffTables_cat
}
const diff_keysOrd = Object.fromEntries(["replaced_mid", "become_mid", "replaced", "become"].map((v, i) => [v, i]))
const placeholder = { anArrWithStr: [""], obj: {} }
btn_diff._diffTables_gen = () => {
  if (!btn_diff._diffTables_src) return
  if (btn_diff._diffTables) return btn_diff._diffTables
  btn_diff._diffTables = Object.values(btn_diff._diffTables_src).flat().sort(([, i1, mk1, { priority: pr1 }], [, i2, mk2, { priority: pr2 }]) => pr1 !== pr2 ? pr1 - pr2 : i1 !== i2 ? i1 - i2 : mk1 === "unchanged"/*[^note:b-u]*/ || diff_keysOrd[mk1] - diff_keysOrd[mk2])
  // console.log($str(btn_diff._diffTables))
  const arr = btn_diff._diffTables
  let __i__debug
  for (let i = 0, leap; i < arr.length; __i__debug = i += leap || 1) {
    leap = 0
    let [, i_a, mk/*"mark"*/, , hasJud] = arr[i]
    if (hasJud) continue
    if (mk === `replaced${$_m}`) { leap = mergeExactSubsetStrings_verForMids(i, i_a); continue }
    if (mk === "replaced") mergeExactSubsetStrings([arr[i], arr[i + 1]].map(([str]) => str), arr, i, i_a)
  }


  function findPrecSeg(arr, i) {
    let mk, did
    while (--i >= 0) {
      [, , mk, , did] = arr[i]
      if (mk === "unchanged") if (did) break; else return i
    }
    return -1
  }
  function mergeExactSubsetStrings_verForMids(i, i_a) {
    const lenWas = arr.length, lenIncr = () => arr.length - lenWas

    let _i = i, cohort = [arr[_i]]
    while (arr[++_i]?.[1] === i_a) cohort.push(arr[_i])
    cohort = cohort.splice(cohort.length / 2).flatMap((v, i) => [cohort[i], v]).noNull;
    [[0, "replaced"], [-1, "become"]].forEach(([i, mk]) => cohort.at(i)[2].startsWith(mk) && (cohort.at(i)._endpoint = i))

    recurFindPrecSeg(i)

    function recurFindPrecSeg(_i) {
      _i = findPrecSeg(arr, _i)
      if (!~_i) return
      const precSeg = arr[_i], lastBec = cohort.at(-1)[0], i_substrOfPrecSeg = precSeg[0].indexOf(lastBec)
      if (!~i_substrOfPrecSeg) return recurFindPrecSeg(_i)
      const splicedStrs = [[0, i_substrOfPrecSeg], [i_substrOfPrecSeg + lastBec.length]].map(idxs => precSeg[0].substring(...idxs))
      // console.log(arr[i], precSeg, `%${lastBec}%`, splicedStrs)
      precSeg[0] = splicedStrs[0]
      splicedStrs[1] && arr.splice(i + cohort.length, 0, [splicedStrs[1], ...precSeg.slice(1)])
      precSeg._apart = arr[i + cohort.length] || placeholder.anArrWithStr
      precSeg.push("processed")
    }

    arr.splice(i, cohort.length)
    _i = 1
    while (cohort.length + (_i -= 2) > 0) mergeExactSubsetStrings([cohort.at(_i - 1), cohort.at(_i)].map(([str]) => str), cohort, _i - 1, i_a)
    arr.splice(i, 0, ...cohort)

    cohort.forEach(_ => { _[2] = _[2].replace("unchanged", "$&_mid"); _[4] = "processed" })
    return lenIncr()
  }

  function mergeExactSubsetStrings([str1, str2, isReversed], arr, i, i_a, { _isAgain } = {}) {
    if (i < 0) arguments[2] = i = arr.length + i
    if (str1.length > str2.length) {
      mergeExactSubsetStrings([str2, str1, "(reversed)"], ...Array.prototype.slice.call(arguments, 1))
      return
    }
    if ([str2, str1].some(isSym)) return
    if (!str2.includes(str1)) {
      const res = mergeExactSubsetStringsSpliced(isReversed ? [str2, str1] : [str1, str2], arr, i, i_a)
      if (arr !== btn_diff._diffTables) return
      if (!_isAgain) mergeExactSubsetStrings(...res, { _isAgain: true })
      return
    }
    const jud = { "isAdded": "become", "isDeleted": "replaced" }[isReversed ? "isDeleted" : "isAdded"]
    const index = str2.indexOf(str1)
    arr[i].splice(0, Infinity, str1, i_a, "unchanged", placeholder.obj)
    arr[i + 1].splice(0, Infinity, str2.substring(index + str1.length), i_a, jud, placeholder.obj, jud)
    // if (__i__debug === 3 && _isAgain) { console.log($str(arr)); debugger }
    index > 0 && arr.splice(i, 0, [str2.substring(0, index), i_a, jud, placeholder.obj, jud])
  }
  function mergeExactSubsetStringsSpliced([str1, str2], arr, i, i_a) {
    // console.log(i, str1, str2)
    _do(0, -1)
    _do(-1, 2);
    // console.log($str(arr)); // P.S. From this statement we can surprisingly observe that in Firefox there is a lag in log output for the referenced object
    [[str1], [str2]] = [arr[i], arr[i + 1]]
    return [[str1, str2], arr, i, i_a]
    function _do(index, mv) {
      let char
      while ((char = str1.at(index)) === str2.at(index) && char) {
        if (arr[i + mv]?.[2] !== "unchanged") { arr.splice(i + (index < 0 ? mv : 0), 0, ["", i_a, "unchanged"]); index >= 0 && ++i }
        arr[i + mv][0] = [char, arr[i + mv][0]][index < 0 ? "noop" : "reverse"]().join("");
        [i, i + 1].forEach(j => arr[j][0] = arr[j][0].slice(...index < 0 ? [0, -1] : [1]))
        index < 0 ? --index : ++index
      }
    }
  }
  btn_diff._diffTables.forEach(_ => _.splice(3, Infinity, ...isNum(_._endpoint) ? [_._endpoint] : []))
}
btn_diff._diffTables_reset = (records, times, count) => {
  if (!count) return
  !times
    ? (btn_diff._diffTables_src = records, delete btn_diff._diffTables)
    : ["replaced", "become"].flatMap(_ => [_, `${_}${$_m}`]).forEach(_ => records.hasOwnProperty(_) && btn_diff._diffTables_src[_].push([Symbol.for(" ")].concat(records[_][0].slice(1)), ...records[_]))
}

btn_undo.addEventListener("click", () => textarea._oldVal !== undefined && (textarea.value = textarea._oldVal, btn_undo._disable()))
btn_undo._enable = function (able = true) { this[`${able ? "remove" : "set"}Attribute`]("disabled", ""); !able && this.classList.remove("mdc-ripple-upgraded--background-focused") }
btn_undo._disable = function () { this._enable(false) }
btn_undo._disable()
btn_cut.addEventListener("click", async () => {
  if (!textarea.value) return textarea.focus()
  let { value: text } = textarea
  if (isAboutToLaTeX()) {
    const delimiter = "$".repeat(text.includes("\n") ? 2 : 1)
    text = `${delimiter}${text.replace(/^\s*|\s*$/g, delimiter.length === 1 ? "" : "\n")}${delimiter}`
  }
  await navigator.clipboard.writeText(text)
  textarea.value = ""
})
btn_rem.addEventListener("click", () => textarea.value && localStorage.setItem("btn_rem._remed", btn_rem._remed = textarea.value))
btn_rec.addEventListener("click", () => (btn_rem._remed = btn_rem._remed || localStorage.getItem("btn_rem._remed")) && (textarea.value = btn_rem._remed))
btn_recAS.addEventListener("click", () => textarea.value = localStorage.getItem("autosaved") || textarea.value)
btn_cfg.addEventListener("click", () => {
  uConfig_J.open()
  uCfgContent._rec("_pending")
  !uCfgContent.innerText.trim() && uCfgContent._put()
})

const rM /*regexMeta*/ = { LaTeX: __ => /(?<![\\{])${__}(?![}])/.source.replace("${__}", __) }
rM.la = [...Array(3).keys()].map(n => rM.LaTeX("\\$".repeat(n)))
rM.la[0] = /[\s\p{P}]/.source

const [$cIdxS, $cIdxE, $cPre, $cStr, $cRHC] = (
  "    start index   ;" +
  "      end index   ;" +
  "preceding fragment;" +
  "     full string  ;" +
  " rule hit count   ;"
).split(";").map((_, i) => `${1 + i}. current ${_}`)
const $mathrm = _ => String.raw`\def${`\\${_}`}{\mathrm{${_}}}`
const $jux/*"juxtaposition"*/ = "side-by-side", $jux$f = `${$jux}<f>`
uCfgContent._preset = {
  autoSave: { maxChars: 1000 ** 2 * 3 },
  CSS: {
    layout: { order: oriOrd, [$jux$f]: `"auto"` }
  },
  LaTeX: {
    autoOptIn: false,
    "demo<f>": "get [`demo<f>`]() { this[`macros :preset<raw>`] += `e i`.split(/\\s+/).map($mathrm).join(``) }",
    "macros :preset<raw>": String.raw`\def\d{\mathrm{d}}`
  },
  match: {
    callbackVars: { [$cIdxS]: "$I", [$cIdxE]: "$i", [$cPre]: "$s", [$cStr]: "$S", [$cRHC]: "$n" },
    "filter :preset:LaTeX": RegExp(String.raw`${rM.la[2]}.+?${rM.la[2]}|(?<=${rM.la[0]}|^)${rM.la[1]}(?!\$).+?${rM.la[1]}(?=${rM.la[0]}|$)`),
    "precall :demo<f>": `
                        $lpl = textarea.value.match(/^/mg).length.toString().length
                        `,
    "precall .output": false,
  },
  "onload :demo<f>": `
                     [btn_lineWrap, btn_dockBox].forEach((v, i) => v.on = i)
                     `
}
Object.defineProperty(window, "_uVars", { get() { return uCfgContent._uSet.match.callbackVars } })
uCfgSave._ = (e, rebuild = true) => {
  try {
    localStorage.setItem("uCfg", uCfgContent.textContent/*[^note]*/ = $str(rebuild ? uCfgContent._uSet = mergeCfg() : uCfgContent._uSet))
    // [^note]: [Special Note] Using `innerText` may inexplicably generate an extra blank line that shouldn't exist!
    //          (Example encountered in this project: after creating a `__ <f>` with `__ :demo<f>` as a template and clicking save,
    //           a blank line appears before the fence code identifier of the template)
    tell._lastId === uCfgSave._err && mdc_snackbar.close()
  }
  catch (err) { e.stopPropagation(); tell(err, { isErr: uCfgSave._err = "uCfgSave._err" }) }
}
uCfgSave.__ = uCfgSave._.bind(null, false, false)
uCfgSave.addEventListener("click", e => { delete uCfgContent._retract; uCfgSave._(e) })

uCfgContent._uSet = mergeCfg()
uCfgContent._updXM = () => {
  if (typeof uCfgContent._uSet.LaTeX._macros === "string") { MathJax.typesetClear(); MathJax.tex2chtml(uCfgContent._uSet.LaTeX._macros) }
  textarea.update()
}
uCfgContent._uMatchPrep = ({ _uVars: old_uVars }) => {
  const invalid = [];
  ["count", $cPre].forEach(_ => _uVars[_] !== old_uVars[_] && window.hasOwnProperty(_uVars[_]) && invalid.push(`${_uVars[_]} ✘ ${_uVars[_] = uCfgContent._preset.match.callbackVars[_]} ✔`))
  if (invalid.length) {
    tell(`The variable names you set conflict with what <em>window</em> already has: ${invalid.map(_ => `<code>${_}</code>`).join(", ")}`)
    uCfgContent._put()
    uCfgSave._()
  }
  uCfgContent._uMatchPrep_btnSync()
}
uCfgContent._uMatchPrep_btnSync = () => { toggleStateAttrInHTML.tmpInvis(); btn_matchSpecified.on = uCfgContent._uSet.match.filterOn }
uCfgContent._uCSS = () => {
  let { order } = uCfgContent._uSet.CSS.layout
  const handled = {}
  uOptJux()

  if (typeof order === "string") {
    order = [...order.matchAll(/#(\w+)/g)]
    let invalidID
    if (invalidID = order.find(([$id]) => !mainBlocks._ids.has($id))) return tell(`❌ ‣ CSS.layout.order ―<br>Invalid ID: ${invalidID[0]}`)
    if (!order.length || !uOptJux._ && order.map(([$id]) => $id).join(" ") === oriOrd) {
      handled.order = true
      mainBlocks.forEach(el => el.style.removeProperty("order"))
    }
    else { order = Object.fromEntries(order.map(([, id], i) => [id, i])) }
  }
  else if (order && typeof order === "object") order = Object.fromEntries(Object.entries(order).map(([k, v]) => [k.replace("#", ""), v]))
  else return tell(`❌ ‣ CSS.layout.order ―<br>The data type can only be <b>string</b> or <b>object</b>.`)
  if (!handled.order) mainBlocks.forEach(el => el.style[`${order.hasOwnProperty(el.id) ? "set" : "remove"}Property`]("order", order[el.id]))
  handled.order = true

  btn_dockBox._on && uOptJux._ && btn_dockBox._updPlacement()
  detectJux()
  handled.jux = true
}
uCfgContent._check = argObj => ["_updXM", "_uMatchPrep", "_uCSS"].forEach(_ => uCfgContent[_](argObj))
uCfgContent._put = function (cfgObj = uCfgContent._uSet) { this.innerText = $str(cfgObj) }
uCfgContent._rec = function (key) { if (!this[key]) return; this.innerText = this[key]; delete this[key] }
uCfgContent.addEventListener("change", function () { this._pending = this.innerText })
function mergeCfg() {
  const uPutStr = $str._decodeFence(uCfgContent.innerText || localStorage.getItem("uCfg") || "")
  const cfg/* === uCfgContent._uSet */ = uPutStr ? mergeObjOptIn(eval(`(${uPutStr})`), uCfgContent._preset) : uCfgContent._preset
  isObjReg(cfg.match.filter) && (cfg.match.filter = regAddFlagsMod(cfg.match.filter, "gsu"));
  [
    ["LaTeX", "_macros", "macros  <raw>"],
    ["match", "_precall", "precall  <f>"],
    ["match", "_precall_output", "precall .output"],
    [, "_onload", "onload  <f>"]
  ].forEach(([prop, _key, longestPossibleKeyName]) =>
    Object.defineProperty(...prop ? [cfg[prop], _key] : [cfg, _key], { get() { return reduceSpacesToTryKeys(this, longestPossibleKeyName) }, enumerable: false })
  )
  sortKeys(cfg)
  mergeCfg._called ? setTimeout/*[^note]*/(uCfgContent._check, 0, { _uVars }) : (mergeCfg._called = true, setTimeout(() => ["_uCSS", "_uMatchPrep_btnSync"].forEach(_ => uCfgContent[_]())));
  // [^note]: Must, otherwise the *old* config will be misapplied
  ["CSS.layout", "match"].forEach(prop => delegate(...objPathToLastProp(cfg, prop), (_tgt, key) => patchySaveKeys.has(key) && uCfgSave.__()))
  return cfg
}
const patchySaveKeys = new Set([$jux$f, "filterOn"])
uCfgDefault.addEventListener("click", () => {
  // e.stopPropagation() // No need if its html attribute `data-mdc-dialog-action` is not appended
  uCfgContent._retract = uCfgContent.innerText
  uCfgContent._put(uCfgContent._preset)
})
uConfig_J.listen("MDCDialog:closing", () => uCfgContent._rec("_retract"))

btn_addRule._tmpSetTop = () => { btn_addRule._tmpSetToped = true; setTimeout(() => btn_addRule._tmpSetToped = false) }
btn_addRule.addEventListener("click", () => { btn_addRule._tmpSetTop(); insertRulePair().querySelector($checkbox$).checked = true })
btn_delRules.addEventListener("click", () => {
  const children = ruleList._childrenList
  let count = 0
  ruleList.exec(el => el.checked && ++count && el.closest($rulePair).remove())
  if (!count) return
  tell(`Deleted ${count} rules`, tell.timeout_max, function Undo() { ruleList.append(...children); btn_toggleAll._detectBoxesStat() })
})

function mvSel() {
  const [sib, dir] = mvSel.dict[this.id]
  const sels = getCheckboxes.checked()
  dir === "after" && sels.reverse()
  sels.forEach(_ => { _ = _.closest($rulePair); _[sib] && !_[sib].querySelector($checkbox$).checked && _[sib][dir](_) })
}

btn_toggleAll._states = ["check_box_outline_blank", "indeterminate_check_box", "check_box"]
btn_toggleAll.addEventListener("click", () => {
  const [n, m, y] = btn_toggleAll._states
  btn_toggleAll._nextState = [n, m].some(_ => _ === boxesStat.innerText) ? y : n
  ruleList.exec(el => el.checked = btn_toggleAll._nextState === y)
  btn_toggleAll._detectBoxesStat(btn_toggleAll._nextState)
})
btn_toggleAll._detectBoxesStat = direct => {
  if (typeof direct === "string") return boxesStat.innerText = direct
  const boxes = getCheckboxes(), coll = {}
  for (let i = 0, checked; i < boxes.length; ++i) {
    ({ checked } = boxes[i])
    coll[checked] = 1
    if (coll[checked] && coll[!checked]) break
  }
  const [n, m, y] = btn_toggleAll._states
  boxesStat.innerText = coll[true] ? coll[false] ? m : y : n
}
btn_invSel.addEventListener("click", () => btn_frzSel._filterNotFrz(getCheckboxes()).forEach(el => el.checked = !el.checked))
btn_rvsOrd.addEventListener("click", () => {
  const sels = [[]]
  let pSib
  btn_frzSel._filterNotFrz(getCheckboxes(true)).map(el => el.closest($rulePair)).forEach((rp, i, arr) => {
    pSib = rp.previousElementSibling
    if (pSib && arr[i - 1] && pSib !== arr[i - 1]) sels.push([])
    sels.at(-1).push(rp)
  })
  let clnNode, oriNode
  if (!sels.toString()) return
  sels.some(rps => rps.length === 1)
    ? sels.splice(0, Infinity, ...sels.flat()) && sels.find((rp, i, arr) => (
      i === Math.floor(arr.length / 2) || (
        oriNode = arr[arr.length - 1 - i], clnNode = oriNode.cloneNode(),
        oriNode.replaceWith(clnNode), rp.replaceWith(oriNode), clnNode.replaceWith(rp),
        null
      )))
    : sels.forEach(rps => rps[0].before(...rps.reverse()))
})

mvSel.dict = { btn_mvSelUp: ["previousElementSibling", "before"], btn_mvSelDown: ["nextElementSibling", "after"] }
btn_mvSelUp.addEventListener("click", mvSel)
btn_mvSelDown.addEventListener("click", mvSel)
btn_selBtwn.addEventListener("click", () => {
  const sels = btn_frzSel._filterNotFrz(getCheckboxes.checked())
  if (sels.length < 2) return
  const [fst, lst] = [sels.shift(), sels.pop()]
  let sib = fst
  while ((sib = sib.closest($rulePair).nextElementSibling.querySelector($checkbox$)) !== lst) sib.checked = true
})
btn_toTop._exec = isAntonym => ruleList[isAntonym ? "append" : "prepend"](...getCheckboxes.checked("root"))
btn_toTop.addEventListener("click", () => btn_toTop._exec(0))
btn_toBtm.addEventListener("click", () => btn_toTop._exec(1))
btn_frzSel._filterNotFrz = elems => filter(elems, el => !el._frozen)
btn_frzSel._filterFrz = elems => filter(elems, el => el._frozen)
const $mdc_box = ".mdc-checkbox"
btn_frzSel.__toggle = elems => {
  if (!elems.forEach) elems = [elems]
  elems.forEach(_ => {
    _._frozen = !_._frozen
    _.closest($mdc_box).classList[_._frozen ? "add" : "remove"]("frozen")
  })
}
btn_frzSel._toggle = ({ target }) => btn_frzSel.__toggle(btn_frzSel[`_filter${target.closest("button") === btn_unfrzSel ? "" : "Not"}Frz`](getCheckboxes.checked()));
[btn_frzSel, btn_unfrzSel].forEach(_ => _.addEventListener("click", btn_frzSel._toggle))
btn_sort.addEventListener("click", () => sortRulesBy_J.open())
sortRulesBy_J.listen("MDCDialog:closed", ({ detail: { action } }) => {
  action.startsWith("by") && ruleList.append(...ruleList._childrenList.sort((a, b) => ([a, b] = [a, b].map(_ => getRuleAsStr(_, eval(`$input$${action.replace("by-", "")}`))), a.localeCompare(b))))
  switch (action.replace("ext-", "")) {
    case "merge": mergeRules(); break
    case "rem": ruleList._children_bakList = ruleList._childrenList; break
    case "rec": ruleList.append(...ruleList._children_bakList || []); break
  }
})
function mergeRules() {
  const sow = new Map
  getCheckboxes.checked("tree").forEach(([rootEl, findEl, rplcEl, boxEl]) => sow.set(rplcEl.value, (sow.get(rplcEl.value) || []).concat([[rootEl, findEl.value, boxEl]])))
  const count = { groups: 0, entries: 0 }
  let changeless = 0
  sow.forEach((rfEls, $rplc) => {
    if (rfEls.some(([, , boxEl]) => boxEl._frozen)) return
    if (rfEls.length === 1) { btn_frzSel.__toggle(rfEls[0][2]); ++changeless; return }
    const regStrs = [], regFlags = new Set, leadingComments = [], [rootEl] = rfEls.at(-1)
    regFlags.add = regFlags.add.bind(regFlags)
    let leadingComment, leadingCommentWD, _find
    rfEls.forEach(([, $find]) => {
      if ([leadingCommentWD, leadingComment] = pullLeadingComment($find), leadingComment) {
        leadingComments.push(leadingComment)
        $find = $find.replace(leadingCommentWD, "")
      }
      _find = $find
      $find = isStrReg($find, false)
      each($find.flags || "", regFlags.add)
      regStrs.push($find.source || _find.replaceAll("/", "\\$&"))
    })
    const rp = insertRulePair(
      `${leadingComments.length ? `/*${leadingComments.join("*")}*/` : ""}` +
      `/${regStrs.map(_ => `(?:${_})`).join("|")}/${[...regFlags.values()].join("")}`,
      $rplc,
      Y
    )
    rootEl.after(rp)
    btn_frzSel.__toggle(rp.querySelector($checkbox$))
    ++count.groups; count.entries += rfEls.length
  })
  tell(`Merged ${count.entries} rules into ${count.groups} groups${changeless ? `,<br>${"&nbsp;".repeat(3)}and ${changeless} changeless.` : ""}`, tell.timeout_mid)
}
btn_lineWrap._toggle = function () { txta.forEach(_ => _.classList[!this._on ? "add" : "remove"]("nowrap")) }
document.querySelectorAll("[role=tooltip]").forEach(tip => tip.querySelector("[data-text]").setAttribute("data-state", document.querySelector(`[data-tooltip-id=${tip.id}]`).getAttribute("data-state")))
document.querySelectorAll("[data-tooltip-id]").forEach(el => {
  el._on = el.dataset.state === "on"
  Object.defineProperties(el, {
    on: { set: setToggleState },
    tip: { get: getTipObj.bind(el, "tip") },
    tip_J: { get: getTipObj.bind(el, "tip_J") }
  })
  el.addEventListener("click", triggerToggleState)
})
function triggerToggleState() { this.on = undefined }
function setToggleState(v) { this._on = toggleStateAttrInHTML(this, this.tip, this.tip_J, v).on; this._toggle?.(v ?? this._on) }
function getTipObj(tKey) { return globalThis[`${this.id}_${tKey}`] }
btn_dockBox._toggle = v => { txte.classList.toggle("dock", v); uOptJux.__ && btn_dockBox._updPlacement() }
btn_dockBox._updPlacement = () => {
  body.classList.toggle("dock", btn_dockBox._on)
    && body.classList.toggle("right", [txte, mjx].map(_ => +_.style.order || 0).reduce((a, b) => a - b) > 0)
}
btn_DnD._toggle = () => {
  each(ruleList.children, item => {
    if (!btn_DnD._on) return item.removeAttribute("draggable")
    item.setAttribute("draggable", true)
    if (!btn_DnD._added) {
      // P.S. Although the browser itself already knows not to re-add the identity event handler
      item.addEventListener("dragstart", dragstartHandler)
      item.addEventListener("dragover", dragoverHandler)
      item.addEventListener("drop", dropHandler)
    }
  })
  btn_DnD._added = true
}

function dragstartHandler(e) { if (isAnyTextSelected(e.target)) return e.preventDefault(); dragstartHandler._target = e.target.closest($rulePair) }
function dragoverHandler(e) { e.preventDefault() }
function dropHandler({ target }) { swapElems(target.closest($rulePair), dragstartHandler._target) }
function isAnyTextSelected(box) { return box.matches($input$) && box.selectionStart !== box.selectionEnd }

txte_notch.addEventListener("dragstart", e => { e.dataTransfer.effectAllowed = "move"; e.dataTransfer.setData("id", e.target.id) })
mainBlocks._dragSwap = function (e) {
  if (e.dataTransfer.getData("id") !== txte_notch.id) return
  [txte.style.order, this.style.order] = [txte, this].reverse().map((_, i) => _.style.order || i && -1)
  if (txte.style.order === this.style.order) { --this.style.order; txte.style.order = "" }
  mainBlocks._report()
  btn_dockBox._updPlacement()
}
mainBlocks.forEach(_ => {
  if (_ === txte) return
  _.addEventListener("dragover", prevent)
  _.addEventListener("drop", mainBlocks._dragSwap)
})

btn_matchSpecified._toggle = v => uCfgContent._uSet.match.filterOn = v


btn_menu.addEventListener("click", () => {
  const cliClo = body.querySelectorAll("body > [when-menu-click=close]:not([hidden])")
  if (cliClo.length) return cliClo.forEach(_ => _.hidden = true)
  content_menu_div[`_${btn_menu.dataset.state ? "close" : "open"}`]()
})
content_menu_div._open = () => {
  content_menu_J.open = true
  btn_menu.dataset.state = "on"
  ctrl_pShow._.dataset.toggle = mjx.hidden ? "Show" : "Hide"
  uOptJux._andL ? content_menu_div._rePin() : content_menu_div._expandBottom()
}
content_menu_div._close = () => {
  content_menu_J.open = false
  content_menu_div._retractStyles()
}
content_menu_div._delay = parseFloat(getComputedStyle(content_menu_div).transitionDuration.split(", ").sort()[0]) * 1000
content_menu_div._expandBottom = () => {
  if (content_menu_div.clientHeight <= btns.clientHeight) return
  const h = 16 + filter(content_menu.children, _ => !_.hidden).length * 40
  content_menu_div._h__preCalc = `${h}px`
  btn_menu._h__preCalc = `${h - 48}px`
  btn_menu.style.marginBottom = btn_menu._h__preCalc
  btns.style["scroll-snap-type"] = "unset"
  btns.style.setProperty("--ex-h", btn_menu._h__preCalc)
  if (btns.style.height) { btns.style._height = btns.style.height; btns.style.height = `calc(${btns.offsetHeight}px - ${btn_menu.offsetHeight}px + ${content_menu_div._h__preCalc})` }
}
content_menu_div._scrollToBottom = () => {
  if (content_menu_div.style.transformOrigin.includes("bottom")) return
  setTimeout(() => {
    btns.scrollTo({ top: btns.scrollHeight, behavior: "smooth" }) // instead of `content_menu.scrollIntoView()`
  }, content_menu_div._delay)
}
content_menu_div._rePin = () => setTimeout(() => {
  if (content_menu_div.getBoundingClientRect().x >= btns.offsetLeft) return content_menu_div._scrollToBottom()
  btns.style._zIndex = btns.style.zIndex
  btns.style.zIndex = +txte.style.zIndex + mainBlocks.length;
  ["top", "right", "bottom"].forEach(_ => content_menu_div.style.removeProperty(_));
  [
    [btns, ["x", "Width"]],
    [btn_menu, ["y", "Height"]]
  ].forEach(([el, [axis, dim]]) => {
    const ax = el.getBoundingClientRect()[axis]
    content_menu_div.style.setProperty(`--${axis}`, Math.max(0, ax - Math.max(0, ax + content_menu_div[`offset${dim}`] - window[`inner${dim}`])))
  })
  content_menu_div.classList.add("dbl-fix")
})
content_menu_div._rePin._rm = () => content_menu_div.classList.remove("dbl-fix")
content_menu_div._retractStyles = () => {
  delete btn_menu.dataset.state
  btn_menu.style.marginBottom = ""
  btns.style["scroll-snap-type"] = ""
  btns.style.removeProperty("--ex-h");
  ["height", "zIndex"].forEach((_, __) => btns.style[__ = `_${_}`] !== undefined && (btns.style[_] = btns.style[__], delete btns.style[__]))
  if (uOptJux._andL) content_menu_div._rePin._rm()
}

content_menu_J.listen("MDCMenuSurface:closed", content_menu_div._retractStyles)
content_menu.addEventListener("click", e => !theSel.isCollapsed && e.stopPropagation(), true)


importRules.addEventListener("click", () => {
  ruleList._oriChildNums = ruleList.childElementCount
  importRules.feed(textarea.value) &&
    tell(`Imported <b>${ruleList.childElementCount - ruleList._oriChildNums}</b> new rules${ruleList._oriChildNums ? `.<br>Current total: <b>${ruleList.childElementCount}</b>` : ""}`)
})
const Y = true
importRules.feed = srcText => {
  if (typeof srcText !== "string" || srcText === "null") return
  try {
    let evaledImportRules = eval(srcText)
    if (!Array.isArray(evaledImportRules) || !Array.isArray(evaledImportRules[0])) {
      tell("Please enter a 2D array (in JS)")
      return
    }
    srcText = srcText
      .replaceAll(regAddFlagsMod(regs.comment_inArrLit, "g"), `Object.assign($2, {_comment_: "$1"})$3`)
      .replaceAll(regAddFlagsMod(regs.$rplc_inArrLit, "g"), quadBsl)
    evaledImportRules = semiStringifyRules(eval(srcText))
    const currList = (exportRules.reap() || []).map(_ => _.replace(regs.$rplc_inArrLit, dblBsl))
    const flushed = Array.from(new Set(evaledImportRules.concat(currList)))
    ruleList.innerHTML = ""
    const fSet = new Set
    flushed.forEach(item => {
      const [$find, $rplc = "", $box] = eval(item)
      const ruleAsStr = `${$find}${find.length}${$rplc}`
      if (fSet.has(ruleAsStr)) return
      fSet.add(ruleAsStr)
      const [_find, _rplc, _box] = getOneRulePairAsElemArr(insertRulePair())
      _find.value = `${passLeadingComment(item)}${$find}`
      _rplc.value = $rplc;
      [_find, _rplc].forEach(set__mdc_floating_label_to_above)
      _box.checked = $box
    })
    btn_toggleAll._detectBoxesStat()
    return true
  }
  catch (err) { console.error(err); tell(`The input JS array has a ${err}`, tell.timeout_max) }
}
exportRules.addEventListener("click", () => {
  const rules = exportRules._()
  if (!rules) return tell("Oh no, you never entered any rules")
  textarea.value = rules
  tell(`All ${ruleList.childElementCount} rules exported`)
})
exportRules.reap = retType => {
  let rules = getAllRulePairAsStrArr()
  rules = rules.filter(([$find, $rplc]) => $find || $rplc)
  if (!rules.length) return null
  rules = semiStringifyRules(rules)
  return retType === "string" ? `[\n  ${rules.join(",\n  ")}\n]` : rules
}
exportRules._ = () => exportRules.reap("string")
dlRules.addEventListener("click", bak => ruleList.childElementCount ? (bak = exportRules._()) && downloadText(`[BTR] Rules${workspaceName && ` (${workspaceName})`}.bak.jsx`, bak) : tell("The rule list is empty"));


[btn_rplc, btn_rrplc, btn_undo, btn_rec, btn_recAS].forEach(_ => _.addEventListener("click", ({ target }) => {
  if (!textarea.value || textarea._checkSuppression()) return
  textarea.update(target.closest("button").id.endsWith("rplc"))
}));
[...btns_edit.querySelectorAll("button"), exportRules].forEach(_ => _.addEventListener("click", () => /* Dont: textarea.value && */ set__mdc_floating_label_to_above(textarea)));
[btn_invSel, btn_addRule, btn_delRules, btn_selBtwn].forEach(_ => _.addEventListener("click", btn_toggleAll._detectBoxesStat))

ctrl_fontSize.addEventListener("click", () => {
  ctrl_font_size.hidden = false
  ctrl_font_size._thumb.classList.add("mdc-slider__thumb--with-indicator")
  ctrl_font_size_J.initialSyncWithDOM()
})
ctrl_font_size._thumb = ctrl_font_size.querySelector(".mdc-slider__thumb")
ctrl_font_size.addEventListener("focusout", function () { this.hidden = true })
ctrl_font_size.addEventListener("MDCSlider:input", () => [mjx, ...txta].forEach(_ => _.style.setProperty("--font-size", `${ctrl_font_size_J.getValue()}rem`)))
ctrl_pShow._ = ctrl_pShow.querySelector("[data-enum]")
ctrl_pShow.addEventListener("click", function () { mjx._forciblyHidden = mjx.hidden = (this._.dataset.toggle = this._.dataset.enum.replace(this._.dataset.toggle, "").trim()) === "Show" })


// -----------------------------------------------------------------------------

const mdc_snackbar = mdc_snackbar__list.pop()
mdc_snackbar.foundation.setTimeoutMs(-1)
snackbar.action_div = snackbar.querySelector(".mdc-snackbar__actions")

function getCheckboxes(checked) { return checked ? getCheckboxes.checked() : ruleList.querySelectorAll($checkbox$) }
getCheckboxes.checked = function (type) {
  const c = filter(getCheckboxes(), _ => _.checked)
  switch (type) {
    case "root": return c.map(getRulePairElem)
    case "subtree": return c.map(getOneRulePairAsElemArr)
    case "tree": return c.map(getRulePairTree)
    default: return c
  }
}

function semiStringifyRules(rules = [["", "", ""]]) { return [...new Set(rules.filter(arr => arr.length).map(([$find, $rplc, $box]) => `[ ${[isStrReg($find) ? $find : `"${dB_eQ($find)}"`, fnOrStringify($rplc)].join(",\n    ")}${$box ? `,  ${$box}` : ""} ]`))] }
function set__mdc_floating_label_to_above(label_or_child_el) { if (label_or_child_el.localName === "input" && !label_or_child_el.value) return; label_or_child_el.closest("label").querySelector(".mdc-floating-label").classList.add("mdc-floating-label--float-above") }

function assocDOMJS(mdc_xx__list) {
  const $dJI = "data-js-id"
  const dJI$ = "[data-js-id]"
  mdc_xx__list.forEach(item => {
    const targetEl = (item.root.matches(dJI$) ? item.root : item.root.querySelector(dJI$)) || item.root.id && item.root
    if (!targetEl) return
    if (!targetEl.id) targetEl.id = targetEl.getAttribute($dJI)
    window[`${targetEl.id}_J`] = item
    targetEl.removeAttribute($dJI)
  })
  mdc_xx__list.length = 0
}

function getAllRulePairAsStrArr(carry = false) { return map(ruleList.children, getOneRulePairAsElemArr).map(([_find, _rplc, _box]) => [_find, _rplc].map(el => el.value).concat(_box.checked ? "Y" : carry ? false : []).concat(carry ? _find : [])) }

function insertRulePair() {
  const rulePair = ruleList.insertTmpl()
  mdc_checkbox__list.replacePlaceholder(rulePair)
  arguments.length && getOneRulePairAsElemArr(rulePair).forEach((_, i) => {
    _[boxP[_.type]] = arguments[i]
    _.type === "text" && set__mdc_floating_label_to_above(_)
  })
  return rulePair
}

function getOneRulePairAsElemArr(el) { if (el.localName === "input") el = getRulePairElem(el); return Array.from(el.querySelectorAll($input$)).concat(el.querySelector($checkbox$)) }
function getRulePairElem(el) { return el.closest($rulePair) }
function getRulePairTree(el) { return [getRulePairElem(el), ...getOneRulePairAsElemArr(el)] }
function getRuleAsStr(rulePair, $ = $input$rplc) { return rulePair.querySelector($).value }

snackbar.surface_div = snackbar.querySelector(".mdc-snackbar__surface")
function tell(htmlStr, timeout, action) {
  let detail, isErr, id
  if (typeof arguments[1] === "object") {
    detail = arguments[1];
    ({ timeout, action, isErr, id } = detail)
  }
  tell._lastId = id ?? isErr
  if (!timeout) timeout = tell.timeout_tmp || tell.timeout_default
  delete tell.timeout_tmp
  snackbar.classList[isErr ? "add" : "remove"]("err")
  snackbar.querySelector(".mdc-snackbar__label").innerHTML = htmlStr
  mdc_snackbar.open()
  tell.stay(timeout)
  if (typeof action === "function") {
    snackbar.action_div.removeAttribute("hidden")
    snackbar.surface_div.classList.add("two")
    snackbar.querySelector(".mdc-button__label").innerHTML = action.name
    const actBtn = snackbar.querySelector("button")
    actBtn._prevActFn && actBtn.removeEventListener("click", actBtn._prevActFn)
    actBtn.addEventListener("click", actBtn._prevActFn = action, { once: true })
  }
  else {
    snackbar.action_div.setAttribute("hidden", "")
    snackbar.surface_div.classList.remove("two")
  }
}
tell.timeout_default = 4000
tell.timeout_mid = 7000
tell.timeout_max = 10000
tell.stay = timeout => {
  timeout = Math.min(timeout, tell.timeout_max)
  clearTimeout(tell._tId)
  tell._tId = setTimeout(() => {
    if (snackbar.matches(":hover") || getSelection().focusNode?.parentNode.matches("[class*=snackbar]")) return tell.stay(timeout)
    mdc_snackbar.close()
  }, timeout)
}

function assoc_MDC_inst_with_tmpl(arbitraryObj, { tmplId = "", class: Class, selector } = {}) {
  arbitraryObj._tmplId = tmplId
  arbitraryObj._tmpl = document.getElementById(arbitraryObj._tmplId).innerHTML
  arbitraryObj.replacePlaceholder = function (rootEl) {
    const placeholderEl = rootEl.querySelector(this._tmplId)
    placeholderEl.innerHTML = this._tmpl
  }
  arbitraryObj.insertTmpl = function () {
    if (!(this instanceof HTMLElement)) throw TypeError("Only valid if `this` is an HTML element")
    this.insertAdjacentHTML(btn_addRule._tmpSetToped ? "afterbegin" : "beforeend", this._tmpl)
    const el = this[`${btn_addRule._tmpSetToped ? "first" : "last"}ElementChild`]
    if (Class) {
      if (el.matches(selector)) new Class(el)
      else each(el.querySelectorAll(selector), el => new Class(el))
    }
    return el
  }
}

function toggleAttr(el, add, attr) { el[`${add ? "set" : "remove"}Attribute`](attr, "") }

function toggleStateAttrInHTML(el, tipEl, { foundation }, state) {
  state = typeof state === "undefined"
    ? el.dataset.state === "on" ? "off" : "on"
    : state ? "on" : "off";
  [el, tipEl].forEach(_ => _.dataset.state = state)
  !toggleStateAttrInHTML._invis && setTimeout(() => foundation.show())
  return { state, on: state === "on" }
}
toggleStateAttrInHTML.tmpInvis = function () { this._invis = true; setTimeout(() => delete this._invis, 50) }


// -----------------------------------------------------------------------------

const workspaceName = new URLSearchParams(location.search).get(["workspace", "ws"].find(_ => location.search.includes(`${_}=`))) || ""
const backedupRules = {
  name: `backedupRules${workspaceName && `:${workspaceName}`}`,
  import: () => importRules.feed(localStorage.getItem(backedupRules.name)),
  export: () => localStorage.setItem(backedupRules.name, exportRules._())
}
const bc = new BroadcastChannel("BTR")
bc.addEventListener("message", ({ data }) => {
  switch (data) {
    case 0: backedupRules.export(); bc.postMessage(1); bc.close(); break
    case 1: bc._replyReceived = true; backedupRules.import()
  }
})
bc.postMessage(0)
setTimeout(() => !bc._replyReceived && backedupRules.import())
addEventListener("beforeunload", backedupRules.export);


// -----------------------------------------------------------------------------

(window.MathJaxStartup = () => window.MathJax?.startup?.__domReady
  ? (MathJax.startup.__domReady(), uCfgContent._updXM(), textarea.update() === "retry" && textarea.update(), delete window.MathJaxStartup, setTimeout(initLayout))
  : setTimeout(MathJaxStartup, 250)
)()
function initLayout() { if (body.classList.contains($jux) && mjx.hidden) txte.classList.add(txte._className_init = "init-full-land") }

toggleStateAttrInHTML.tmpInvis()
tryEval(uCfgContent._uSet._onload)