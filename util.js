function arrPFC(fname, _this, ...args) { return Array.prototype[fname]?.apply(isMap(_this) ? Array.from(_this) : _this, args) }
function filter() { return arrPFC("filter", ...arguments) }
function each() { arrPFC("forEach", ...arguments) }
function map() { return arrPFC("map", ...arguments) }
function find() { return arrPFC("find", ...arguments) }
function any() { return arrPFC("some", ...arguments) }
function isAll() { return arrPFC("every", ...arguments) }
function slice() { return arrPFC("slice", ...arguments) }

function noop(_) { return _ }
function noopThis() { return this }
function rearrange(arr, from, splLen, to/*after!*/) { arr.splice((from < to ? to - splLen : to) + 1, 0, ...arr.splice(from, splLen)); return arr }
function permuteContly(arr, pMap = [[1, 3], [2, 4]]) {
  if (pMap[0][0] > pMap[1][0]) pMap.sort()
  for (let i = 0; i < pMap.length - 1; ++i) {
    for (let j = i + 1; j < pMap.length; ++j) {
      for (let k = 0; k < 2; ++k) {
        if (pMap[j][k] <= pMap[i][1]) pMap[j][k] -= pMap[i][2] ?? 1
      }
    }
  }
  pMap.forEach(([from, to, splLen = 1]) => rearrange(arr, from, splLen, to))
  return arr
}

Object.defineProperties(Array.prototype, {
  noop: { value: noopThis },
  rearrange: { value() { return rearrange.apply(this, [this, ...arguments]) } },
  noNull: { get() { return this.filter(_ => typeof _ !== "undefined") } },
  rmNull: { value() { return this.replaceWith(...this.noNull) } },
  noHole: { get() { return this.filter(() => true) } }, // Remove empty slots
  noFalsy: { get() { return this.filter(Boolean) } },
  replaceWith: { value() { this.splice(0, Infinity, ...arguments); return this } }
})

let retOfSW2D
function sortingWeights(arr1, arr2, dim = 2) { sortingWeights._baseDArr[dim].find(i => (retOfSW2D = sortingWeights._baseExpr(arr1, arr2, i)) !== 0); return retOfSW2D }
sortingWeights._baseExpr = (arr1, arr2, i) => arr1[i] < arr2[i] ? -1 : arr1[i] > arr2[i] ? 1 : 0
sortingWeights._baseDArr = { 2: [0, 1] }

function takeInnermost(_, idx) { return Array.isArray(_.at(idx)) ? takeInnermost(_.at(idx)) : _ }
function extraWrap(_, idx) { return _.flatMap(_ => Array.isArray(_.at(idx)) ? _ : [_]) }


function addToArrInMap(map, key, ...vals) { vals.forEach(val => map.has(key) ? map.get(key).push(val) : map.set(key, [val])) }

Object.defineProperty(HTMLElement.prototype, "_childrenList", { get() { return Array.prototype.slice.call(this.children) } })



function isSym(_) { return typeof _ === "symbol" }
function isNum(_) { return !isNaN(_ - parseFloat(_)) }
function isStr(_) { return typeof _ === "string" }
function isObj(_) { return _ && typeof _ === "object" }
function isMap(_) { return ["Map", "Set"].includes(_[Symbol.toStringTag]) }
function isStrReg(str, validate = true) { return isObjReg(str) || isStr(str) && /^\/.+\/\w*$/.test(str) && (isObjReg(str = tryEval(str)) || !validate && str === Symbol.for("MalformedRegExp")) }
function isObjReg(obj) { return Object.prototype.toString.call(obj) === "[object RegExp]" && obj }
const parseInt_withFixedRadix = _ => parseInt(_)
function allStartWithNum() { return isAll(arguments, parseInt_withFixedRadix) }
Object.defineProperty(Number.prototype, "_toPrecision", { value(maximumFractionDigits) { return +this.toLocaleString("en", { maximumFractionDigits, useGrouping: false }) } })



// XXNG: "not generic"
const regs = {
  metaChars: RegExp("[$()*+.?[\\]^{|}]", "g"),
  comment: /\/\*(.*?)\*\//,
  comment_pure: /^\s*\/\*.*?\*\//,
  comment_inArrLit/*XXNG*/: /(?<=^ *\[ *)(\/\*.*?\*\/)(.*?)(,)$/m,
  $rplc_inArrLit/*XXNG*/: /^ *".*"(?:, *Y)? *\],?$/m
}
function escChars(str) { return str.replace(regs.metaChars, "\\$&") }
function escapeSpecialXMLChars(str) { return str.replace(/[<>&]/g, _ => `&${{ "<": "lt", ">": "gt", "&": "amp" }[_]};`) }

function pullLeadingComment(str) { return isStr(str) && regs.comment_pure.test(str) ? str.match(regs.comment) : "" }
function passLeadingComment/*XXNG*/(str) { return regs.comment_inArrLit.test(str) ? str.match(regs.comment)[0] : "" }

function $str(str) {
  return JSON.stringify(str, null, 2)
    ?.replace(/"@re: (.+)"/g, (_, $1) => `${stripBsl($1)}`)
    .replace(/(?<=<(raw|f)>": )"(.+)"/g, (_, $1, $2) => `${$1 === "f" ? "``" : "String.raw"}\`${stripBsl($2)}\`${$1 === "f" ? "``" : ""}`.replaceAll(/\\[n"]/g, evalToStr))
}
$str._decodeFence = function (str) { return str.replace(/(<f>": )```(.+?)```/gs, (_, $1, $2) => `${$1}"${dblBsl($2).replaceAll(/[\n"]/g, _ => reReprJSONL[_])}"`) }
const reReprJSONL = { "\n": "\\n", "\"": `\\"` }
RegExp.prototype.toJSON = function () { return `@re: ${this}` }
RegExp.prototype.toString = function () { return `${this._comment_ || ""}/${this.source}/${this.flags}` }

function regAddFlagsMod(reg, add) { return RegExp(reg, regAddFlags(reg, add)) }
function regAddFlags(origFlags, add = "") { if (isObjReg(origFlags)) origFlags = origFlags.flags; return [...new Set([...`${origFlags}${add}`])].join("") }
Object.assign(RegExp.prototype, {
  _CGIA /*capturing group in assertions (approximate)*/: RegExp(trimS(/(?<!\\) \( (?=\?(?!:))/.source)),
  _inclCGIA() { return this._CGIA.test(this.source) }
})



function mergeObjOptIn(toMe, give) {
  let myKeys
  if (toMe && isObj(give)) {
    myKeys = new Set(Object.keys(toMe).map(trimS))
    Object.entries(give).forEach(([k, v]) =>
      Array.isArray(v)
        ? toMe[k] = [...new Set([...toMe[k] || [], ...v])]
        : / :[\w:]+>?$/i.test(k) || !(toMe.hasOwnProperty(k) || myKeys.has(trimS(k)))
          ? toMe[k] = v
          : isObj(v) && mergeObjOptIn(toMe[k], v))
  }
  return toMe
}
function sortKeys(obj) { let v; isObj(obj) && Object.keys(obj).sort(localeCompare).forEach(k => { v = obj[k]; delete obj[k]; obj[k] = v; sortKeys(v) }) }
function localeCompare(a, b) { if (!isStr(a)) [a, b] = [a, b].map(String); return a.localeCompare(b, undefined, { numeric: true/*No need to actively check `allStartWithNum(a, b)` at all*/ }) }
function reduceSpacesToTryKeys(obj, lPKN/*"longest possible key name"*/, finalCut = /\$.*/) {
  let _lPKN
  do {
    if (obj.hasOwnProperty(lPKN)) return obj[lPKN]
    lPKN = (_lPKN = lPKN).replace(" ", "")
  } while (_lPKN !== lPKN)
  if (isObjReg(finalCut)) return obj[lPKN.replace(finalCut, "")]
}
function dblBsl(str, { revert } = {}) { return str.replaceAll(...["\\", "\\\\"][revert ? "reverse" : "noop"]()) }
function quadBsl(str) { return dblBsl(dblBsl(str)) }
function stripBsl(str) { return dblBsl(str, { revert: true }) }
function escQq(str) { return str.replaceAll(`"`, `\\"`) }
function dB_eQ(str) { return escQq(dblBsl(str)) }
function ensureStr(str) { return isStr(str) || "" }
function trimS(str) { return str.replaceAll(" ", "") }

function tryEval(str) { try { return eval(str) } catch (err) { return err.message === "nothing to repeat" ? Symbol.for("MalformedRegExp") : false } }
function fnOrStringify(fn) { const fnS = tryEval(fn); return typeof fnS === "function" ? fnS : `"${ensureStr(fn) && escQq(fn)}"` }
function evalToStr(str) { return eval(`"${str}"`) }
function objPathToLastProp(obj, prop) { return prop.includes(".") ? [prop.replace(/\.[^.]+$/, "").split(".").reduce((obj, key) => obj[key], obj), prop.match(/[^.]+$/)[0]] : [obj, prop] }

function buildObjPath(obj, topName = "", f) {
  const $k = k => /^[\w$]+$/.test(k) ? `.${k}` : `['${k.replaceAll("'", "\\'")}']`
  const seen = new WeakSet
  return build(obj, topName)
  function build(o, k = "") {
    const _o = {}; let _k, isInnermost
    Object.keys(o).forEach(_ => {
      isInnermost = false
      _k = `${k}${$k(_)}`
      _o[_k] = isNum(_)
        ? undefined
        : o[_] && typeof o[_] === "object" && !Array.isArray(o[_])
          ? !seen.has(o[_])
            ? (seen.add(o[_]), build(o[_], _k))
            : undefined
          : isInnermost = typeof o[_]
      isInnermost && f?.(_, o[_], _k)
    })
    return _o
  }
}


function convertInitFnToReinit(fn) { return new Function("return " + fn.toString().replace(RegExp(/\s*fn\s*=.*(?=\}$)/.source.replace("fn", fn.name), "s"), "\n").replaceAll("_init", "_reinit"))() }


function loadScript(src = "", { async = true } = {}) { return document.head.appendChild(Object.assign(document.createElement("script"), { src, async })) }
function downloadText(filename, text) { Object.assign(document.createElement("a"), { href: `data:text;charset=utf-8,${encodeURIComponent(text)}`, download: filename }).click() }

Object.defineProperties(Object.getPrototypeOf(localStorage), {
  _getItem: { value(key) { return JSON.parse(this.getItem(key)) || {} } },
  _setItem: { value(key, val) { this.setItem(key, JSON.stringify(val)) } }
})



function isFollowedByAnother(node, otherNode) { return node.compareDocumentPosition(otherNode) & Node.DOCUMENT_POSITION_FOLLOWING }
function moveElem(drag, drop) { drop[isFollowedByAnother(drop, drag) ? "before" : "after"](drag) }
function swapElems(drag, drop) {
  if (swapElems._tmpDiv?.nodeType !== Node.ELEMENT_NODE) swapElems._tmpDiv = document.createElement("div")
  drag.replaceWith(swapElems._tmpDiv)
  drop.replaceWith(drag)
  swapElems._tmpDiv.replaceWith(drop)
}


function prevent(e) { e.preventDefault() }
const theSel = getSelection()

function isLandscape() { return isLandscape._ = matchMedia("(orientation: landscape)").matches }
Object.defineProperty(window, "isTouchDevice", { get() { return matchMedia("(any-pointer: coarse)").matches } })

// -----------------------------------------------------------------------------

function throttle(func, timeFrame = 200) {
  let lastTime = 0, now, calling, tId, _this, _arguments

  function call(force) { if (typeof force === "boolean" && force || !_this?._suppressed) return func.apply(_this, _arguments) }
  function delayedTrailingCall(force) { clearTimeout(tId); tId = setTimeout(call, timeFrame, force) }

  return function (force) {
    [_this, _arguments] = [this, arguments]
    let ret
    calling || _this?._suppressedForDelay || (now = Date.now()) - lastTime < timeFrame
      ? ret = delayedTrailingCall(force)
      : (calling = true, ret = call(force), lastTime = now, calling = false)
    return ret
  }
}


function disposableMutObs(target, options = {}) {
  (
    disposableMutObs._obs = new MutationObserver(function ([mutation]) {
      (disposableMutObs._obs.callback?.(mutation) ?? true) && this.disconnect()
    })
  ).observe(target, options)

  return _ => {
    const { callback, ...props } = typeof _ === "function" ? { callback: _ } : _ || {}
    return Object.assign(disposableMutObs._obs, { callback, ...props })
  }
}


function delegate(obj, key, callback) {
  return obj[key] = new Proxy(obj[key], {
    set() {
      Reflect.set(...arguments)
      callback(...arguments)
      return true
    }
  })
}


class fixedLengthArray extends Array {
  constructor(fixedLength) {
    super()
    this._fixedLength = fixedLength

    return new Proxy(this, {
      get: function (target, prop) {
        return typeof target[prop] === "function" ? fn.bind(target, target, prop) : Reflect.get(...arguments)
      }
    })

    function fn(target, prop, ...args) {
      const result = target[prop](...args)
      if (target.length > target._fixedLength) target.replaceWith(...target.splice(-target._fixedLength))
      return result
    }
  }
}