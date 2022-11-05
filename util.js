function arrPFC(fname, _this, ...args) { return Array.prototype[fname] && Array.prototype[fname].apply(_this, args) }
function filter() { return arrPFC("filter", ...arguments) }
function each() { arrPFC("forEach", ...arguments) }
function map() { return arrPFC("map", ...arguments) }
function find() { return arrPFC("find", ...arguments) }
function any() { return arrPFC("some", ...arguments) }
function isAll() { return arrPFC("every", ...arguments) }

function noop(_) { return _ }
function noopThis() { return this }
Object.defineProperties(Array.prototype, {
  noop: { value: noopThis },
  noNull: { get() { return this.filter(_ => typeof _ !== "undefined") } },
  rmNull: { value() { return this.splice(0, Infinity, ...this.noNull) } },
  noHole: { get() { return this.filter(() => true) } }, // Remove empty slots
  noFalsy: { get() { return this.filter(Boolean) } }
})
Object.defineProperty(HTMLElement.prototype, "_childrenList", { get() { return Array.prototype.slice.call(this.children) } })


function isSym(_) { return typeof _ === "symbol" }
function isNum(_) { return typeof _ === "number" }
function isObj(_) { return _ && typeof _ === "object" }
function isStrReg(str, validate = true) { return isObjReg(str) || typeof str === "string" && /^\/.+\/\w*$/.test(str) && (isObjReg(str = tryEval(str)) || !validate && str === Symbol.for("MalformedRegExp")) }
function isObjReg(obj) { return Object.prototype.toString.call(obj) === "[object RegExp]" && obj }
const parseInt_withFixedRadix = _ => parseInt(_)
function allStartWithNum() { return isAll(arguments, parseInt_withFixedRadix) }

// XXNG: "not generic"
const regs = {
  metaChars: RegExp("[$()*+.?[\\]^{|}]", "g"),
  comment: /\/\*(.*?)\*\//,
  comment_pure: /^\s*\/\*.*?\*\//,
  comment_inArrLit/*XXNG*/: /(?<=^ *\[ *)(\/\*.*?\*\/)(.*?)(,)$/m,
  $rplc_inArrLit/*XXNG*/: /^ *".*"(?:, *Y)? *\],?$/m
}
function escChars(str) { return str.replace(regs.metaChars, "\\$&") }
function pullLeadingComment(str) { return typeof str === "string" && regs.comment_pure.test(str) ? str.match(regs.comment) : "" }
function passLeadingComment/*XXNG*/(str) { return regs.comment_inArrLit.test(str) ? str.match(regs.comment)[0] : "" }

function $str(str) {
  return JSON.stringify(str, null, 2)
    .replace(/"@re: (.+)"/g, (_, $1) => `${stripBsl($1)}`)
    .replace(/(?<=<(raw|f)>": )"(.+)"/g, (_, $1, $2) => `${$1 === "f" ? "``" : "String.raw"}\`${stripBsl($2)}\`${$1 === "f" ? "``" : ""}`.replaceAll(/\\[n"]/g, evalToStr))
}
$str._decodeFence = function (str) { return str.replace(/(<f>": )```(.+?)```/gs, (_, $1, $2) => `${$1}"${dblBsl($2).replaceAll(/[\n"]/g, _ => reReprJSONL[_])}"`) }
const reReprJSONL = { "\n": "\\n", "\"": `\\"` }
RegExp.prototype.toJSON = function () { return `@re: ${this}` }
RegExp.prototype.toString = function () { return `${this._comment_ || ""}/${this.source}/${this.flags}` }

function regAddFlagsMod(reg, add) { return RegExp(reg, regAddFlags(reg, add)) }
function regAddFlags(origFlags, add = "") { if (isObjReg(origFlags)) origFlags = origFlags.flags; return [...new Set([...`${origFlags}${add}`])].join("") }
Object.assign(RegExp.prototype, {
  _CGIA /*capturing group in assertions (approximate)*/: RegExp(/(?<!\\) \( (?=\?(?!:)) .+? \(/.source.replaceAll(" ", "")),
  _inclCGIA() { return this._CGIA.test(this.source) }
})


function mergeObjOptIn(toMe, give) { toMe && isObj(give) && Object.entries(give).forEach(([k, v]) => / :[\w:]+$/i.test(k) || !toMe.hasOwnProperty(k) ? toMe[k] = v : isObj(v) && mergeObjOptIn(toMe[k], v)); return toMe }
function sortKeys(obj) { let v; isObj(obj) && Object.keys(obj).sort(localeCompare).forEach(k => { v = obj[k]; delete obj[k]; obj[k] = v; sortKeys(v) }) }
function localeCompare(a, b) { return a.localeCompare(b, undefined, { numeric: true/*No need to actively check `allStartWithNum(a, b)` at all*/ }) }
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
function ensureStr(str) { return typeof str === "string" || "" }

function tryEval(str) { try { return eval(str) } catch (err) { return err.message === "nothing to repeat" ? Symbol.for("MalformedRegExp") : false } }
function fnOrStringify(fn) { const fnS = tryEval(fn); return typeof fnS === "function" ? fnS : `"${ensureStr(fn) && escQq(fn)}"` }
function evalToStr(str) { return eval(`"${str}"`) }
function objPathToLastProp(obj, prop) { return prop.includes(".") ? [prop.replace(/\.[^.]+$/, "").split(".").reduce((obj, key) => obj[key], obj), prop.match(/[^.]+$/)[0]] : [obj, prop] }

function downloadText(filename, text) { Object.assign(document.createElement("a"), { href: `data:text;charset=utf-8,${encodeURIComponent(text)}`, download: filename }).click() }


function swapElems(a, b) {
  if (swapElems._tmpDiv?.nodeType !== Node.ELEMENT_NODE) swapElems._tmpDiv = document.createElement("div")
  a.replaceWith(swapElems._tmpDiv)
  b.replaceWith(a)
  swapElems._tmpDiv.replaceWith(b)
}

function prevent(e) { e.preventDefault() }
const theSel = getSelection()

function isLandscape() { return isLandscape._ = matchMedia("(orientation: landscape)").matches }

// -----------------------------------------------------------------------------

function throttle(func, timeFrame = 200) {
  let lastTime = 0, now, calling, tId, _this, _arguments

  function call(force) { return (typeof force === "boolean" && force || !(_this && _this._suppressed)) && func.apply(_this, _arguments) }
  function delayedTrailingCall(force) { clearTimeout(tId); tId = setTimeout(call, timeFrame, force) }

  return function (force) {
    [_this, _arguments] = [this, arguments]
    let ret
    calling || (now = Date.now()) - lastTime < timeFrame
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
      if (target.length > target._fixedLength) target.splice(0, Infinity, ...target.splice(-target._fixedLength))
      return result
    }
  }
}