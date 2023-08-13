var __defProp = Object.defineProperty,
  __defProps = Object.defineProperties,
  __getOwnPropDescs = Object.getOwnPropertyDescriptors,
  __getOwnPropSymbols = Object.getOwnPropertySymbols,
  __hasOwnProp = Object.prototype.hasOwnProperty,
  __propIsEnum = Object.prototype.propertyIsEnumerable,
  __defNormalProp = (e, t, i) =>
    t in e
      ? __defProp(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: i,
        })
      : (e[t] = i),
  __spreadValues = (e, t) => {
    for (var i in t || (t = {}))
      __hasOwnProp.call(t, i) && __defNormalProp(e, i, t[i]);
    if (__getOwnPropSymbols)
      for (var i of __getOwnPropSymbols(t))
        __propIsEnum.call(t, i) && __defNormalProp(e, i, t[i]);
    return e;
  },
  __spreadProps = (e, t) => __defProps(e, __getOwnPropDescs(t)),
  __accessCheck = (e, t, i) => {
    if (!t.has(e)) throw TypeError("Cannot " + i);
  },
  __privateGet = (e, t, i) => (
    __accessCheck(e, t, "read from private field"), i ? i.call(e) : t.get(e)
  ),
  __privateAdd = (e, t, i) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, i);
  },
  __privateSet = (e, t, i, n) => (
    __accessCheck(e, t, "write to private field"),
    n ? n.call(e, i) : t.set(e, i),
    i
  ),
  __async = (e, t, i) =>
    new Promise((n, a) => {
      var s = (e) => {
          try {
            o(i.next(e));
          } catch (t) {
            a(t);
          }
        },
        r = (e) => {
          try {
            o(i.throw(e));
          } catch (t) {
            a(t);
          }
        },
        o = (e) => (e.done ? n(e.value) : Promise.resolve(e.value).then(s, r));
      o((i = i.apply(e, t)).next());
    });
!(function (e) {
  "function" == typeof define && define.amd ? define(e) : e();
})(function () {
  var e, t;
  function i(e, t) {
    const i = Object.create(null),
      n = e.split(",");
    for (let a = 0; a < n.length; a++) i[n[a]] = !0;
    return t ? (e) => !!i[e.toLowerCase()] : (e) => !!i[e];
  }
  const n = {},
    a = [],
    s = () => {},
    r = () => !1,
    o = /^on[^a-z]/,
    M = (e) => o.test(e),
    l = (e) => e.startsWith("onUpdate:"),
    u = Object.assign,
    c = (e, t) => {
      const i = e.indexOf(t);
      i > -1 && e.splice(i, 1);
    },
    g = Object.prototype.hasOwnProperty,
    d = (e, t) => g.call(e, t),
    N = Array.isArray,
    D = (e) => "[object Map]" === m(e),
    I = (e) => "[object Set]" === m(e),
    y = (e) => "[object Date]" === m(e),
    j = (e) => "function" == typeof e,
    p = (e) => "string" == typeof e,
    z = (e) => "symbol" == typeof e,
    T = (e) => null !== e && "object" == typeof e,
    h = (e) => T(e) && j(e.then) && j(e.catch),
    A = Object.prototype.toString,
    m = (e) => A.call(e),
    x = (e) => "[object Object]" === m(e),
    f = (e) =>
      p(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e,
    k = i(
      ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
    ),
    L = (e) => {
      const t = Object.create(null);
      return (i) => t[i] || (t[i] = e(i));
    },
    O = /-(\w)/g,
    w = L((e) => e.replace(O, (e, t) => (t ? t.toUpperCase() : ""))),
    v = /\B([A-Z])/g,
    E = L((e) => e.replace(v, "-$1").toLowerCase()),
    S = L((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    b = L((e) => (e ? `on${S(e)}` : "")),
    C = (e, t) => !Object.is(e, t),
    U = (e, t) => {
      for (let i = 0; i < e.length; i++) e[i](t);
    },
    Q = (e, t, i) => {
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        value: i,
      });
    },
    _ = (e) => {
      const t = parseFloat(e);
      return isNaN(t) ? e : t;
    },
    Y = (e) => {
      const t = p(e) ? Number(e) : NaN;
      return isNaN(t) ? e : t;
    };
  let P;
  const R = () =>
    P ||
    (P =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : {});
  function B(e) {
    if (N(e)) {
      const t = {};
      for (let i = 0; i < e.length; i++) {
        const n = e[i],
          a = p(n) ? H(n) : B(n);
        if (a) for (const e in a) t[e] = a[e];
      }
      return t;
    }
    return p(e) || T(e) ? e : void 0;
  }
  const W = /;(?![^(]*\))/g,
    F = /:([^]+)/,
    V = /\/\*[^]*?\*\//g;
  function H(e) {
    const t = {};
    return (
      e
        .replace(V, "")
        .split(W)
        .forEach((e) => {
          if (e) {
            const i = e.split(F);
            i.length > 1 && (t[i[0].trim()] = i[1].trim());
          }
        }),
      t
    );
  }
  function Z(e) {
    let t = "";
    if (p(e)) t = e;
    else if (N(e))
      for (let i = 0; i < e.length; i++) {
        const n = Z(e[i]);
        n && (t += n + " ");
      }
    else if (T(e)) for (const i in e) e[i] && (t += i + " ");
    return t.trim();
  }
  function G(e) {
    if (!e) return null;
    let { class: t, style: i } = e;
    return t && !p(t) && (e.class = Z(t)), i && (e.style = B(i)), e;
  }
  const J = i(
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  );
  function $(e) {
    return !!e || "" === e;
  }
  function K(e, t) {
    if (e === t) return !0;
    let i = y(e),
      n = y(t);
    if (i || n) return !(!i || !n) && e.getTime() === t.getTime();
    if (((i = z(e)), (n = z(t)), i || n)) return e === t;
    if (((i = N(e)), (n = N(t)), i || n))
      return (
        !(!i || !n) &&
        (function (e, t) {
          if (e.length !== t.length) return !1;
          let i = !0;
          for (let n = 0; i && n < e.length; n++) i = K(e[n], t[n]);
          return i;
        })(e, t)
      );
    if (((i = T(e)), (n = T(t)), i || n)) {
      if (!i || !n) return !1;
      if (Object.keys(e).length !== Object.keys(t).length) return !1;
      for (const i in e) {
        const n = e.hasOwnProperty(i),
          a = t.hasOwnProperty(i);
        if ((n && !a) || (!n && a) || !K(e[i], t[i])) return !1;
      }
    }
    return String(e) === String(t);
  }
  function q(e, t) {
    return e.findIndex((e) => K(e, t));
  }
  const X = (e) =>
      p(e)
        ? e
        : null == e
        ? ""
        : N(e) || (T(e) && (e.toString === A || !j(e.toString)))
        ? JSON.stringify(e, ee, 2)
        : String(e),
    ee = (e, t) =>
      t && t.__v_isRef
        ? ee(e, t.value)
        : D(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (e, [t, i]) => ((e[`${t} =>`] = i), e),
              {}
            ),
          }
        : I(t)
        ? { [`Set(${t.size})`]: [...t.values()] }
        : !T(t) || N(t) || x(t)
        ? t
        : String(t);
  let te;
  class ie {
    constructor(e = !1) {
      (this.detached = e),
        (this._active = !0),
        (this.effects = []),
        (this.cleanups = []),
        (this.parent = te),
        !e &&
          te &&
          (this.index = (te.scopes || (te.scopes = [])).push(this) - 1);
    }
    get active() {
      return this._active;
    }
    run(e) {
      if (this._active) {
        const t = te;
        try {
          return (te = this), e();
        } finally {
          te = t;
        }
      }
    }
    on() {
      te = this;
    }
    off() {
      te = this.parent;
    }
    stop(e) {
      if (this._active) {
        let t, i;
        for (t = 0, i = this.effects.length; t < i; t++) this.effects[t].stop();
        for (t = 0, i = this.cleanups.length; t < i; t++) this.cleanups[t]();
        if (this.scopes)
          for (t = 0, i = this.scopes.length; t < i; t++)
            this.scopes[t].stop(!0);
        if (!this.detached && this.parent && !e) {
          const e = this.parent.scopes.pop();
          e &&
            e !== this &&
            ((this.parent.scopes[this.index] = e), (e.index = this.index));
        }
        (this.parent = void 0), (this._active = !1);
      }
    }
  }
  const ne = (e) => {
      const t = new Set(e);
      return (t.w = 0), (t.n = 0), t;
    },
    ae = (e) => (e.w & Me) > 0,
    se = (e) => (e.n & Me) > 0,
    re = new WeakMap();
  let oe = 0,
    Me = 1;
  let le;
  const ue = Symbol(""),
    ce = Symbol("");
  class ge {
    constructor(e, t = null, i) {
      (this.fn = e),
        (this.scheduler = t),
        (this.active = !0),
        (this.deps = []),
        (this.parent = void 0),
        (function (e, t = te) {
          t && t.active && t.effects.push(e);
        })(this, i);
    }
    run() {
      if (!this.active) return this.fn();
      let e = le,
        t = Ne;
      for (; e; ) {
        if (e === this) return;
        e = e.parent;
      }
      try {
        return (
          (this.parent = le),
          (le = this),
          (Ne = !0),
          (Me = 1 << ++oe),
          oe <= 30
            ? (({ deps: e }) => {
                if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Me;
              })(this)
            : de(this),
          this.fn()
        );
      } finally {
        oe <= 30 &&
          ((e) => {
            const { deps: t } = e;
            if (t.length) {
              let i = 0;
              for (let n = 0; n < t.length; n++) {
                const a = t[n];
                ae(a) && !se(a) ? a.delete(e) : (t[i++] = a),
                  (a.w &= ~Me),
                  (a.n &= ~Me);
              }
              t.length = i;
            }
          })(this),
          (Me = 1 << --oe),
          (le = this.parent),
          (Ne = t),
          (this.parent = void 0),
          this.deferStop && this.stop();
      }
    }
    stop() {
      le === this
        ? (this.deferStop = !0)
        : this.active &&
          (de(this), this.onStop && this.onStop(), (this.active = !1));
    }
  }
  function de(e) {
    const { deps: t } = e;
    if (t.length) {
      for (let i = 0; i < t.length; i++) t[i].delete(e);
      t.length = 0;
    }
  }
  let Ne = !0;
  const De = [];
  function Ie() {
    De.push(Ne), (Ne = !1);
  }
  function ye() {
    const e = De.pop();
    Ne = void 0 === e || e;
  }
  function je(e, t, i) {
    if (Ne && le) {
      let t = re.get(e);
      t || re.set(e, (t = new Map()));
      let n = t.get(i);
      n || t.set(i, (n = ne())), pe(n);
    }
  }
  function pe(e, t) {
    let i = !1;
    oe <= 30 ? se(e) || ((e.n |= Me), (i = !ae(e))) : (i = !e.has(le)),
      i && (e.add(le), le.deps.push(e));
  }
  function ze(e, t, i, n, a, s) {
    const r = re.get(e);
    if (!r) return;
    let o = [];
    if ("clear" === t) o = [...r.values()];
    else if ("length" === i && N(e)) {
      const e = Number(n);
      r.forEach((t, i) => {
        ("length" === i || i >= e) && o.push(t);
      });
    } else
      switch ((void 0 !== i && o.push(r.get(i)), t)) {
        case "add":
          N(e)
            ? f(i) && o.push(r.get("length"))
            : (o.push(r.get(ue)), D(e) && o.push(r.get(ce)));
          break;
        case "delete":
          N(e) || (o.push(r.get(ue)), D(e) && o.push(r.get(ce)));
          break;
        case "set":
          D(e) && o.push(r.get(ue));
      }
    if (1 === o.length) o[0] && Te(o[0]);
    else {
      const e = [];
      for (const t of o) t && e.push(...t);
      Te(ne(e));
    }
  }
  function Te(e, t) {
    const i = N(e) ? e : [...e];
    for (const n of i) n.computed && he(n);
    for (const n of i) n.computed || he(n);
  }
  function he(e, t) {
    (e !== le || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
  }
  const Ae = i("__proto__,__v_isRef,__isVue"),
    me = new Set(
      Object.getOwnPropertyNames(Symbol)
        .filter((e) => "arguments" !== e && "caller" !== e)
        .map((e) => Symbol[e])
        .filter(z)
    ),
    xe = ve(),
    fe = ve(!1, !0),
    ke = ve(!0),
    Le = Oe();
  function Oe() {
    const e = {};
    return (
      ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
        e[t] = function (...e) {
          const i = Dt(this);
          for (let t = 0, a = this.length; t < a; t++) je(i, 0, t + "");
          const n = i[t](...e);
          return -1 === n || !1 === n ? i[t](...e.map(Dt)) : n;
        };
      }),
      ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
        e[t] = function (...e) {
          Ie();
          const i = Dt(this)[t].apply(this, e);
          return ye(), i;
        };
      }),
      e
    );
  }
  function we(e) {
    const t = Dt(this);
    return je(t, 0, e), t.hasOwnProperty(e);
  }
  function ve(e = !1, t = !1) {
    return function (i, n, a) {
      if ("__v_isReactive" === n) return !e;
      if ("__v_isReadonly" === n) return e;
      if ("__v_isShallow" === n) return t;
      if ("__v_raw" === n && a === (e ? (t ? rt : st) : t ? at : nt).get(i))
        return i;
      const s = N(i);
      if (!e) {
        if (s && d(Le, n)) return Reflect.get(Le, n, a);
        if ("hasOwnProperty" === n) return we;
      }
      const r = Reflect.get(i, n, a);
      return (z(n) ? me.has(n) : Ae(n))
        ? r
        : (e || je(i, 0, n),
          t
            ? r
            : Tt(r)
            ? s && f(n)
              ? r
              : r.value
            : T(r)
            ? e
              ? lt(r)
              : Mt(r)
            : r);
    };
  }
  function Ee(e = !1) {
    return function (t, i, n, a) {
      let s = t[i];
      if (gt(s) && Tt(s) && !Tt(n)) return !1;
      if (
        !e &&
        (dt(n) || gt(n) || ((s = Dt(s)), (n = Dt(n))), !N(t) && Tt(s) && !Tt(n))
      )
        return (s.value = n), !0;
      const r = N(t) && f(i) ? Number(i) < t.length : d(t, i),
        o = Reflect.set(t, i, n, a);
      return (
        t === Dt(a) && (r ? C(n, s) && ze(t, "set", i, n) : ze(t, "add", i, n)),
        o
      );
    };
  }
  const Se = {
      get: xe,
      set: Ee(),
      deleteProperty: function (e, t) {
        const i = d(e, t);
        e[t];
        const n = Reflect.deleteProperty(e, t);
        return n && i && ze(e, "delete", t, void 0), n;
      },
      has: function (e, t) {
        const i = Reflect.has(e, t);
        return (z(t) && me.has(t)) || je(e, 0, t), i;
      },
      ownKeys: function (e) {
        return je(e, 0, N(e) ? "length" : ue), Reflect.ownKeys(e);
      },
    },
    be = { get: ke, set: (e, t) => !0, deleteProperty: (e, t) => !0 },
    Ce = u({}, Se, { get: fe, set: Ee(!0) }),
    Ue = (e) => e,
    Qe = (e) => Reflect.getPrototypeOf(e);
  function _e(e, t, i = !1, n = !1) {
    const a = Dt((e = e.__v_raw)),
      s = Dt(t);
    i || (t !== s && je(a, 0, t), je(a, 0, s));
    const { has: r } = Qe(a),
      o = n ? Ue : i ? jt : yt;
    return r.call(a, t)
      ? o(e.get(t))
      : r.call(a, s)
      ? o(e.get(s))
      : void (e !== a && e.get(t));
  }
  function Ye(e, t = !1) {
    const i = this.__v_raw,
      n = Dt(i),
      a = Dt(e);
    return (
      t || (e !== a && je(n, 0, e), je(n, 0, a)),
      e === a ? i.has(e) : i.has(e) || i.has(a)
    );
  }
  function Pe(e, t = !1) {
    return (e = e.__v_raw), !t && je(Dt(e), 0, ue), Reflect.get(e, "size", e);
  }
  function Re(e) {
    e = Dt(e);
    const t = Dt(this);
    return Qe(t).has.call(t, e) || (t.add(e), ze(t, "add", e, e)), this;
  }
  function Be(e, t) {
    t = Dt(t);
    const i = Dt(this),
      { has: n, get: a } = Qe(i);
    let s = n.call(i, e);
    s || ((e = Dt(e)), (s = n.call(i, e)));
    const r = a.call(i, e);
    return (
      i.set(e, t), s ? C(t, r) && ze(i, "set", e, t) : ze(i, "add", e, t), this
    );
  }
  function We(e) {
    const t = Dt(this),
      { has: i, get: n } = Qe(t);
    let a = i.call(t, e);
    a || ((e = Dt(e)), (a = i.call(t, e))), n && n.call(t, e);
    const s = t.delete(e);
    return a && ze(t, "delete", e, void 0), s;
  }
  function Fe() {
    const e = Dt(this),
      t = 0 !== e.size,
      i = e.clear();
    return t && ze(e, "clear", void 0, void 0), i;
  }
  function Ve(e, t) {
    return function (i, n) {
      const a = this,
        s = a.__v_raw,
        r = Dt(s),
        o = t ? Ue : e ? jt : yt;
      return !e && je(r, 0, ue), s.forEach((e, t) => i.call(n, o(e), o(t), a));
    };
  }
  function He(e, t, i) {
    return function (...n) {
      const a = this.__v_raw,
        s = Dt(a),
        r = D(s),
        o = "entries" === e || (e === Symbol.iterator && r),
        M = "keys" === e && r,
        l = a[e](...n),
        u = i ? Ue : t ? jt : yt;
      return (
        !t && je(s, 0, M ? ce : ue),
        {
          next() {
            const { value: e, done: t } = l.next();
            return t
              ? { value: e, done: t }
              : { value: o ? [u(e[0]), u(e[1])] : u(e), done: t };
          },
          [Symbol.iterator]() {
            return this;
          },
        }
      );
    };
  }
  function Ze(e) {
    return function (...t) {
      return "delete" !== e && this;
    };
  }
  function Ge() {
    const e = {
        get(e) {
          return _e(this, e);
        },
        get size() {
          return Pe(this);
        },
        has: Ye,
        add: Re,
        set: Be,
        delete: We,
        clear: Fe,
        forEach: Ve(!1, !1),
      },
      t = {
        get(e) {
          return _e(this, e, !1, !0);
        },
        get size() {
          return Pe(this);
        },
        has: Ye,
        add: Re,
        set: Be,
        delete: We,
        clear: Fe,
        forEach: Ve(!1, !0),
      },
      i = {
        get(e) {
          return _e(this, e, !0);
        },
        get size() {
          return Pe(this, !0);
        },
        has(e) {
          return Ye.call(this, e, !0);
        },
        add: Ze("add"),
        set: Ze("set"),
        delete: Ze("delete"),
        clear: Ze("clear"),
        forEach: Ve(!0, !1),
      },
      n = {
        get(e) {
          return _e(this, e, !0, !0);
        },
        get size() {
          return Pe(this, !0);
        },
        has(e) {
          return Ye.call(this, e, !0);
        },
        add: Ze("add"),
        set: Ze("set"),
        delete: Ze("delete"),
        clear: Ze("clear"),
        forEach: Ve(!0, !0),
      };
    return (
      ["keys", "values", "entries", Symbol.iterator].forEach((a) => {
        (e[a] = He(a, !1, !1)),
          (i[a] = He(a, !0, !1)),
          (t[a] = He(a, !1, !0)),
          (n[a] = He(a, !0, !0));
      }),
      [e, i, t, n]
    );
  }
  const [Je, $e, Ke, qe] = Ge();
  function Xe(e, t) {
    const i = t ? (e ? qe : Ke) : e ? $e : Je;
    return (t, n, a) =>
      "__v_isReactive" === n
        ? !e
        : "__v_isReadonly" === n
        ? e
        : "__v_raw" === n
        ? t
        : Reflect.get(d(i, n) && n in t ? i : t, n, a);
  }
  const et = { get: Xe(!1, !1) },
    tt = { get: Xe(!1, !0) },
    it = { get: Xe(!0, !1) },
    nt = new WeakMap(),
    at = new WeakMap(),
    st = new WeakMap(),
    rt = new WeakMap();
  function ot(e) {
    return e.__v_skip || !Object.isExtensible(e)
      ? 0
      : (function (e) {
          switch (e) {
            case "Object":
            case "Array":
              return 1;
            case "Map":
            case "Set":
            case "WeakMap":
            case "WeakSet":
              return 2;
            default:
              return 0;
          }
        })(((e) => m(e).slice(8, -1))(e));
  }
  function Mt(e) {
    return gt(e) ? e : ut(e, !1, Se, et, nt);
  }
  function lt(e) {
    return ut(e, !0, be, it, st);
  }
  function ut(e, t, i, n, a) {
    if (!T(e)) return e;
    if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
    const s = a.get(e);
    if (s) return s;
    const r = ot(e);
    if (0 === r) return e;
    const o = new Proxy(e, 2 === r ? n : i);
    return a.set(e, o), o;
  }
  function ct(e) {
    return gt(e) ? ct(e.__v_raw) : !(!e || !e.__v_isReactive);
  }
  function gt(e) {
    return !(!e || !e.__v_isReadonly);
  }
  function dt(e) {
    return !(!e || !e.__v_isShallow);
  }
  function Nt(e) {
    return ct(e) || gt(e);
  }
  function Dt(e) {
    const t = e && e.__v_raw;
    return t ? Dt(t) : e;
  }
  function It(e) {
    return Q(e, "__v_skip", !0), e;
  }
  const yt = (e) => (T(e) ? Mt(e) : e),
    jt = (e) => (T(e) ? lt(e) : e);
  function pt(e) {
    Ne && le && pe((e = Dt(e)).dep || (e.dep = ne()));
  }
  function zt(e, t) {
    const i = (e = Dt(e)).dep;
    i && Te(i);
  }
  function Tt(e) {
    return !(!e || !0 !== e.__v_isRef);
  }
  function ht(e) {
    return At(e, !1);
  }
  function At(e, t) {
    return Tt(e) ? e : new mt(e, t);
  }
  class mt {
    constructor(e, t) {
      (this.__v_isShallow = t),
        (this.dep = void 0),
        (this.__v_isRef = !0),
        (this._rawValue = t ? e : Dt(e)),
        (this._value = t ? e : yt(e));
    }
    get value() {
      return pt(this), this._value;
    }
    set value(e) {
      const t = this.__v_isShallow || dt(e) || gt(e);
      (e = t ? e : Dt(e)),
        C(e, this._rawValue) &&
          ((this._rawValue = e), (this._value = t ? e : yt(e)), zt(this));
    }
  }
  function xt(e) {
    return Tt(e) ? e.value : e;
  }
  const ft = {
    get: (e, t, i) => xt(Reflect.get(e, t, i)),
    set: (e, t, i, n) => {
      const a = e[t];
      return Tt(a) && !Tt(i) ? ((a.value = i), !0) : Reflect.set(e, t, i, n);
    },
  };
  function kt(e) {
    return ct(e) ? e : new Proxy(e, ft);
  }
  class Lt {
    constructor(e, t, i, n) {
      (this._setter = t),
        (this.dep = void 0),
        (this.__v_isRef = !0),
        (this.__v_isReadonly = !1),
        (this._dirty = !0),
        (this.effect = new ge(e, () => {
          this._dirty || ((this._dirty = !0), zt(this));
        })),
        (this.effect.computed = this),
        (this.effect.active = this._cacheable = !n),
        (this.__v_isReadonly = i);
    }
    get value() {
      const e = Dt(this);
      return (
        pt(e),
        (!e._dirty && e._cacheable) ||
          ((e._dirty = !1), (e._value = e.effect.run())),
        e._value
      );
    }
    set value(e) {
      this._setter(e);
    }
  }
  function Ot(e, t, i, n) {
    let a;
    try {
      a = n ? e(...n) : e();
    } catch (s) {
      vt(s, t, i);
    }
    return a;
  }
  function wt(e, t, i, n) {
    if (j(e)) {
      const a = Ot(e, t, i, n);
      return (
        a &&
          h(a) &&
          a.catch((e) => {
            vt(e, t, i);
          }),
        a
      );
    }
    const a = [];
    for (let s = 0; s < e.length; s++) a.push(wt(e[s], t, i, n));
    return a;
  }
  function vt(e, t, i, n = !0) {
    t && t.vnode;
    if (t) {
      let n = t.parent;
      const a = t.proxy,
        s = i;
      for (; n; ) {
        const t = n.ec;
        if (t)
          for (let i = 0; i < t.length; i++) if (!1 === t[i](e, a, s)) return;
        n = n.parent;
      }
      const r = t.appContext.config.errorHandler;
      if (r) return void Ot(r, null, 10, [e, a, s]);
    }
    !(function (e, t, i, n = !0) {
      console.error(e);
    })(e, 0, 0, n);
  }
  let Et = !1,
    St = !1;
  const bt = [];
  let Ct = 0;
  const Ut = [];
  let Qt = null,
    _t = 0;
  const Yt = Promise.resolve();
  let Pt = null;
  function Rt(e) {
    const t = Pt || Yt;
    return e ? t.then(this ? e.bind(this) : e) : t;
  }
  function Bt(e) {
    (bt.length && bt.includes(e, Et && e.allowRecurse ? Ct + 1 : Ct)) ||
      (null == e.id
        ? bt.push(e)
        : bt.splice(
            (function (e) {
              let t = Ct + 1,
                i = bt.length;
              for (; t < i; ) {
                const n = (t + i) >>> 1;
                Ht(bt[n]) < e ? (t = n + 1) : (i = n);
              }
              return t;
            })(e.id),
            0,
            e
          ),
      Wt());
  }
  function Wt() {
    Et || St || ((St = !0), (Pt = Yt.then(Gt)));
  }
  function Ft(e, t = Et ? Ct + 1 : 0) {
    for (; t < bt.length; t++) {
      const e = bt[t];
      e && e.pre && (bt.splice(t, 1), t--, e());
    }
  }
  function Vt(e) {
    if (Ut.length) {
      const e = [...new Set(Ut)];
      if (((Ut.length = 0), Qt)) return void Qt.push(...e);
      for (
        Qt = e, Qt.sort((e, t) => Ht(e) - Ht(t)), _t = 0;
        _t < Qt.length;
        _t++
      )
        Qt[_t]();
      (Qt = null), (_t = 0);
    }
  }
  const Ht = (e) => (null == e.id ? 1 / 0 : e.id),
    Zt = (e, t) => {
      const i = Ht(e) - Ht(t);
      if (0 === i) {
        if (e.pre && !t.pre) return -1;
        if (t.pre && !e.pre) return 1;
      }
      return i;
    };
  function Gt(e) {
    (St = !1), (Et = !0), bt.sort(Zt);
    try {
      for (Ct = 0; Ct < bt.length; Ct++) {
        const e = bt[Ct];
        e && !1 !== e.active && Ot(e, null, 14);
      }
    } finally {
      (Ct = 0),
        (bt.length = 0),
        Vt(),
        (Et = !1),
        (Pt = null),
        (bt.length || Ut.length) && Gt();
    }
  }
  function Jt(e, t, ...i) {
    if (e.isUnmounted) return;
    const a = e.vnode.props || n;
    let s = i;
    const r = t.startsWith("update:"),
      o = r && t.slice(7);
    if (o && o in a) {
      const e = `${"modelValue" === o ? "model" : o}Modifiers`,
        { number: t, trim: r } = a[e] || n;
      r && (s = i.map((e) => (p(e) ? e.trim() : e))), t && (s = i.map(_));
    }
    let M,
      l = a[(M = b(t))] || a[(M = b(w(t)))];
    !l && r && (l = a[(M = b(E(t)))]), l && wt(l, e, 6, s);
    const u = a[M + "Once"];
    if (u) {
      if (e.emitted) {
        if (e.emitted[M]) return;
      } else e.emitted = {};
      (e.emitted[M] = !0), wt(u, e, 6, s);
    }
  }
  function $t(e, t, i = !1) {
    const n = t.emitsCache,
      a = n.get(e);
    if (void 0 !== a) return a;
    const s = e.emits;
    let r = {},
      o = !1;
    if (!j(e)) {
      const n = (e) => {
        const i = $t(e, t, !0);
        i && ((o = !0), u(r, i));
      };
      !i && t.mixins.length && t.mixins.forEach(n),
        e.extends && n(e.extends),
        e.mixins && e.mixins.forEach(n);
    }
    return s || o
      ? (N(s) ? s.forEach((e) => (r[e] = null)) : u(r, s),
        T(e) && n.set(e, r),
        r)
      : (T(e) && n.set(e, null), null);
  }
  function Kt(e, t) {
    return (
      !(!e || !M(t)) &&
      ((t = t.slice(2).replace(/Once$/, "")),
      d(e, t[0].toLowerCase() + t.slice(1)) || d(e, E(t)) || d(e, t))
    );
  }
  let qt = null,
    Xt = null;
  function ei(e) {
    const t = qt;
    return (qt = e), (Xt = (e && e.type.__scopeId) || null), t;
  }
  function ti(e, t = qt, i) {
    if (!t) return e;
    if (e._n) return e;
    const n = (...i) => {
      n._d && Zn(-1);
      const a = ei(t);
      let s;
      try {
        s = e(...i);
      } finally {
        ei(a), n._d && Zn(1);
      }
      return s;
    };
    return (n._n = !0), (n._c = !0), (n._d = !0), n;
  }
  function ii(e) {
    const {
      type: t,
      vnode: i,
      proxy: n,
      withProxy: a,
      props: s,
      propsOptions: [r],
      slots: o,
      attrs: M,
      emit: u,
      render: c,
      renderCache: g,
      data: d,
      setupState: N,
      ctx: D,
      inheritAttrs: I,
    } = e;
    let y, j;
    const p = ei(e);
    try {
      if (4 & i.shapeFlag) {
        const e = a || n;
        (y = oa(c.call(e, e, g, s, N, d, D))), (j = M);
      } else {
        const e = t;
        0,
          (y = oa(
            e.length > 1 ? e(s, { attrs: M, slots: o, emit: u }) : e(s, null)
          )),
          (j = t.props ? M : ni(M));
      }
    } catch (T) {
      (Wn.length = 0), vt(T, e, 1), (y = na(Rn));
    }
    let z = y;
    if (j && !1 !== I) {
      const e = Object.keys(j),
        { shapeFlag: t } = z;
      e.length && 7 & t && (r && e.some(l) && (j = ai(j, r)), (z = aa(z, j)));
    }
    return (
      i.dirs &&
        ((z = aa(z)), (z.dirs = z.dirs ? z.dirs.concat(i.dirs) : i.dirs)),
      i.transition && (z.transition = i.transition),
      (y = z),
      ei(p),
      y
    );
  }
  const ni = (e) => {
      let t;
      for (const i in e)
        ("class" === i || "style" === i || M(i)) && ((t || (t = {}))[i] = e[i]);
      return t;
    },
    ai = (e, t) => {
      const i = {};
      for (const n in e) (l(n) && n.slice(9) in t) || (i[n] = e[n]);
      return i;
    };
  function si(e, t, i) {
    const n = Object.keys(t);
    if (n.length !== Object.keys(e).length) return !0;
    for (let a = 0; a < n.length; a++) {
      const s = n[a];
      if (t[s] !== e[s] && !Kt(i, s)) return !0;
    }
    return !1;
  }
  const ri = {};
  function oi(e, t, i) {
    return Mi(e, t, i);
  }
  function Mi(
    e,
    t,
    { immediate: i, deep: a, flush: r, onTrack: o, onTrigger: M } = n
  ) {
    var l;
    const u = te === (null == (l = Na) ? void 0 : l.scope) ? Na : null;
    let g,
      d,
      D = !1,
      I = !1;
    if (
      (Tt(e)
        ? ((g = () => e.value), (D = dt(e)))
        : ct(e)
        ? ((g = () => e), (a = !0))
        : N(e)
        ? ((I = !0),
          (D = e.some((e) => ct(e) || dt(e))),
          (g = () =>
            e.map((e) =>
              Tt(e) ? e.value : ct(e) ? ci(e) : j(e) ? Ot(e, u, 2) : void 0
            )))
        : (g = j(e)
            ? t
              ? () => Ot(e, u, 2)
              : () => {
                  if (!u || !u.isUnmounted) return d && d(), wt(e, u, 3, [p]);
                }
            : s),
      t && a)
    ) {
      const e = g;
      g = () => ci(e());
    }
    let y,
      p = (e) => {
        d = A.onStop = () => {
          Ot(e, u, 4);
        };
      };
    if (ha) {
      if (
        ((p = s),
        t ? i && wt(t, u, 3, [g(), I ? [] : void 0, p]) : g(),
        "sync" !== r)
      )
        return s;
      {
        const e = Oa();
        y = e.__watcherHandles || (e.__watcherHandles = []);
      }
    }
    let z = I ? new Array(e.length).fill(ri) : ri;
    const T = () => {
      if (A.active)
        if (t) {
          const e = A.run();
          (a || D || (I ? e.some((e, t) => C(e, z[t])) : C(e, z))) &&
            (d && d(),
            wt(t, u, 3, [e, z === ri ? void 0 : I && z[0] === ri ? [] : z, p]),
            (z = e));
        } else A.run();
    };
    let h;
    (T.allowRecurse = !!t),
      "sync" === r
        ? (h = T)
        : "post" === r
        ? (h = () => Cn(T, u && u.suspense))
        : ((T.pre = !0), u && (T.id = u.uid), (h = () => Bt(T)));
    const A = new ge(g, h);
    t
      ? i
        ? T()
        : (z = A.run())
      : "post" === r
      ? Cn(A.run.bind(A), u && u.suspense)
      : A.run();
    const m = () => {
      A.stop(), u && u.scope && c(u.scope.effects, A);
    };
    return y && y.push(m), m;
  }
  function li(e, t, i) {
    const n = this.proxy,
      a = p(e) ? (e.includes(".") ? ui(n, e) : () => n[e]) : e.bind(n, n);
    let s;
    j(t) ? (s = t) : ((s = t.handler), (i = t));
    const r = Na;
    pa(this);
    const o = Mi(a, s.bind(n), i);
    return r ? pa(r) : za(), o;
  }
  function ui(e, t) {
    const i = t.split(".");
    return () => {
      let t = e;
      for (let e = 0; e < i.length && t; e++) t = t[i[e]];
      return t;
    };
  }
  function ci(e, t) {
    if (!T(e) || e.__v_skip) return e;
    if ((t = t || new Set()).has(e)) return e;
    if ((t.add(e), Tt(e))) ci(e.value, t);
    else if (N(e)) for (let i = 0; i < e.length; i++) ci(e[i], t);
    else if (I(e) || D(e))
      e.forEach((e) => {
        ci(e, t);
      });
    else if (x(e)) for (const i in e) ci(e[i], t);
    return e;
  }
  function gi(e, t) {
    const i = qt;
    if (null === i) return e;
    const a = xa(i) || i.proxy,
      s = e.dirs || (e.dirs = []);
    for (let r = 0; r < t.length; r++) {
      let [e, i, o, M = n] = t[r];
      e &&
        (j(e) && (e = { mounted: e, updated: e }),
        e.deep && ci(i),
        s.push({
          dir: e,
          instance: a,
          value: i,
          oldValue: void 0,
          arg: o,
          modifiers: M,
        }));
    }
    return e;
  }
  function di(e, t, i, n) {
    const a = e.dirs,
      s = t && t.dirs;
    for (let r = 0; r < a.length; r++) {
      const o = a[r];
      s && (o.oldValue = s[r].value);
      let M = o.dir[n];
      M && (Ie(), wt(M, i, 8, [e.el, o, e, t]), ye());
    }
  }
  const Ni = [Function, Array],
    Di = {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: Ni,
      onEnter: Ni,
      onAfterEnter: Ni,
      onEnterCancelled: Ni,
      onBeforeLeave: Ni,
      onLeave: Ni,
      onAfterLeave: Ni,
      onLeaveCancelled: Ni,
      onBeforeAppear: Ni,
      onAppear: Ni,
      onAfterAppear: Ni,
      onAppearCancelled: Ni,
    },
    Ii = {
      name: "BaseTransition",
      props: Di,
      setup(e, { slots: t }) {
        const i = Da(),
          n = (function () {
            const e = {
              isMounted: !1,
              isLeaving: !1,
              isUnmounting: !1,
              leavingVNodes: new Map(),
            };
            return (
              bi(() => {
                e.isMounted = !0;
              }),
              Qi(() => {
                e.isUnmounting = !0;
              }),
              e
            );
          })();
        let a;
        return () => {
          const s = t.default && Ai(t.default(), !0);
          if (!s || !s.length) return;
          let r = s[0];
          if (s.length > 1)
            for (const e of s)
              if (e.type !== Rn) {
                r = e;
                break;
              }
          const o = Dt(e),
            { mode: M } = o;
          if (n.isLeaving) return zi(r);
          const l = Ti(r);
          if (!l) return zi(r);
          const u = pi(l, o, n, i);
          hi(l, u);
          const c = i.subTree,
            g = c && Ti(c);
          let d = !1;
          const { getTransitionKey: N } = l.type;
          if (N) {
            const e = N();
            void 0 === a ? (a = e) : e !== a && ((a = e), (d = !0));
          }
          if (g && g.type !== Rn && (!qn(l, g) || d)) {
            const e = pi(g, o, n, i);
            if ((hi(g, e), "out-in" === M))
              return (
                (n.isLeaving = !0),
                (e.afterLeave = () => {
                  (n.isLeaving = !1), !1 !== i.update.active && i.update();
                }),
                zi(r)
              );
            "in-out" === M &&
              l.type !== Rn &&
              (e.delayLeave = (e, t, i) => {
                (ji(n, g)[String(g.key)] = g),
                  (e._leaveCb = () => {
                    t(), (e._leaveCb = void 0), delete u.delayedLeave;
                  }),
                  (u.delayedLeave = i);
              });
          }
          return r;
        };
      },
    },
    yi = Ii;
  function ji(e, t) {
    const { leavingVNodes: i } = e;
    let n = i.get(t.type);
    return n || ((n = Object.create(null)), i.set(t.type, n)), n;
  }
  function pi(e, t, i, n) {
    const {
        appear: a,
        mode: s,
        persisted: r = !1,
        onBeforeEnter: o,
        onEnter: M,
        onAfterEnter: l,
        onEnterCancelled: u,
        onBeforeLeave: c,
        onLeave: g,
        onAfterLeave: d,
        onLeaveCancelled: D,
        onBeforeAppear: I,
        onAppear: y,
        onAfterAppear: j,
        onAppearCancelled: p,
      } = t,
      z = String(e.key),
      T = ji(i, e),
      h = (e, t) => {
        e && wt(e, n, 9, t);
      },
      A = (e, t) => {
        const i = t[1];
        h(e, t),
          N(e) ? e.every((e) => e.length <= 1) && i() : e.length <= 1 && i();
      },
      m = {
        mode: s,
        persisted: r,
        beforeEnter(t) {
          let n = o;
          if (!i.isMounted) {
            if (!a) return;
            n = I || o;
          }
          t._leaveCb && t._leaveCb(!0);
          const s = T[z];
          s && qn(e, s) && s.el._leaveCb && s.el._leaveCb(), h(n, [t]);
        },
        enter(e) {
          let t = M,
            n = l,
            s = u;
          if (!i.isMounted) {
            if (!a) return;
            (t = y || M), (n = j || l), (s = p || u);
          }
          let r = !1;
          const o = (e._enterCb = (t) => {
            r ||
              ((r = !0),
              h(t ? s : n, [e]),
              m.delayedLeave && m.delayedLeave(),
              (e._enterCb = void 0));
          });
          t ? A(t, [e, o]) : o();
        },
        leave(t, n) {
          const a = String(e.key);
          if ((t._enterCb && t._enterCb(!0), i.isUnmounting)) return n();
          h(c, [t]);
          let s = !1;
          const r = (t._leaveCb = (i) => {
            s ||
              ((s = !0),
              n(),
              h(i ? D : d, [t]),
              (t._leaveCb = void 0),
              T[a] === e && delete T[a]);
          });
          (T[a] = e), g ? A(g, [t, r]) : r();
        },
        clone: (e) => pi(e, t, i, n),
      };
    return m;
  }
  function zi(e) {
    if (fi(e)) return ((e = aa(e)).children = null), e;
  }
  function Ti(e) {
    return fi(e) ? (e.children ? e.children[0] : void 0) : e;
  }
  function hi(e, t) {
    6 & e.shapeFlag && e.component
      ? hi(e.component.subTree, t)
      : 128 & e.shapeFlag
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
  }
  function Ai(e, t = !1, i) {
    let n = [],
      a = 0;
    for (let s = 0; s < e.length; s++) {
      let r = e[s];
      const o =
        null == i ? r.key : String(i) + String(null != r.key ? r.key : s);
      r.type === Yn
        ? (128 & r.patchFlag && a++, (n = n.concat(Ai(r.children, t, o))))
        : (t || r.type !== Rn) && n.push(null != o ? aa(r, { key: o }) : r);
    }
    if (a > 1) for (let s = 0; s < n.length; s++) n[s].patchFlag = -2;
    return n;
  }
  function mi(e, t) {
    return j(e) ? (() => u({ name: e.name }, t, { setup: e }))() : e;
  }
  const xi = (e) => !!e.type.__asyncLoader,
    fi = (e) => e.type.__isKeepAlive;
  function ki(e, t) {
    Oi(e, "a", t);
  }
  function Li(e, t) {
    Oi(e, "da", t);
  }
  function Oi(e, t, i = Na) {
    const n =
      e.__wdc ||
      (e.__wdc = () => {
        let t = i;
        for (; t; ) {
          if (t.isDeactivated) return;
          t = t.parent;
        }
        return e();
      });
    if ((vi(t, n, i), i)) {
      let e = i.parent;
      for (; e && e.parent; )
        fi(e.parent.vnode) && wi(n, t, i, e), (e = e.parent);
    }
  }
  function wi(e, t, i, n) {
    const a = vi(t, e, n, !0);
    _i(() => {
      c(n[t], a);
    }, i);
  }
  function vi(e, t, i = Na, n = !1) {
    if (i) {
      const a = i[e] || (i[e] = []),
        s =
          t.__weh ||
          (t.__weh = (...n) => {
            if (i.isUnmounted) return;
            Ie(), pa(i);
            const a = wt(t, i, e, n);
            return za(), ye(), a;
          });
      return n ? a.unshift(s) : a.push(s), s;
    }
  }
  const Ei =
      (e) =>
      (t, i = Na) =>
        (!ha || "sp" === e) && vi(e, (...e) => t(...e), i),
    Si = Ei("bm"),
    bi = Ei("m"),
    Ci = Ei("bu"),
    Ui = Ei("u"),
    Qi = Ei("bum"),
    _i = Ei("um"),
    Yi = Ei("sp"),
    Pi = Ei("rtg"),
    Ri = Ei("rtc");
  function Bi(e, t = Na) {
    vi("ec", e, t);
  }
  const Wi = "components";
  function Fi(e, t) {
    return Zi(Wi, e, !0, t) || e;
  }
  const Vi = Symbol.for("v-ndc");
  function Hi(e) {
    return p(e) ? Zi(Wi, e, !1) || e : e || Vi;
  }
  function Zi(e, t, i = !0, n = !1) {
    const a = qt || Na;
    if (a) {
      const i = a.type;
      if (e === Wi) {
        const e = (function (e, t = !0) {
          return j(e) ? e.displayName || e.name : e.name || (t && e.__name);
        })(i, !1);
        if (e && (e === t || e === w(t) || e === S(w(t)))) return i;
      }
      const s = Gi(a[e] || i[e], t) || Gi(a.appContext[e], t);
      return !s && n ? i : s;
    }
  }
  function Gi(e, t) {
    return e && (e[t] || e[w(t)] || e[S(w(t))]);
  }
  function Ji(e, t, i, n) {
    let a;
    const s = i && i[n];
    if (N(e) || p(e)) {
      a = new Array(e.length);
      for (let i = 0, n = e.length; i < n; i++)
        a[i] = t(e[i], i, void 0, s && s[i]);
    } else if ("number" == typeof e) {
      a = new Array(e);
      for (let i = 0; i < e; i++) a[i] = t(i + 1, i, void 0, s && s[i]);
    } else if (T(e))
      if (e[Symbol.iterator])
        a = Array.from(e, (e, i) => t(e, i, void 0, s && s[i]));
      else {
        const i = Object.keys(e);
        a = new Array(i.length);
        for (let n = 0, r = i.length; n < r; n++) {
          const r = i[n];
          a[n] = t(e[r], r, n, s && s[n]);
        }
      }
    else a = [];
    return i && (i[n] = a), a;
  }
  function $i(e, t, i = {}, n, a) {
    if (qt.isCE || (qt.parent && xi(qt.parent) && qt.parent.isCE))
      return "default" !== t && (i.name = t), na("slot", i, n && n());
    let s = e[t];
    s && s._c && (s._d = !1), Vn();
    const r = s && Ki(s(i)),
      o = $n(
        Yn,
        { key: i.key || (r && r.key) || `_${t}` },
        r || (n ? n() : []),
        r && 1 === e._ ? 64 : -2
      );
    return (
      !a && o.scopeId && (o.slotScopeIds = [o.scopeId + "-s"]),
      s && s._c && (s._d = !0),
      o
    );
  }
  function Ki(e) {
    return e.some(
      (e) => !Kn(e) || (e.type !== Rn && !(e.type === Yn && !Ki(e.children)))
    )
      ? e
      : null;
  }
  const qi = (e) => (e ? (Ta(e) ? xa(e) || e.proxy : qi(e.parent)) : null),
    Xi = u(Object.create(null), {
      $: (e) => e,
      $el: (e) => e.vnode.el,
      $data: (e) => e.data,
      $props: (e) => e.props,
      $attrs: (e) => e.attrs,
      $slots: (e) => e.slots,
      $refs: (e) => e.refs,
      $parent: (e) => qi(e.parent),
      $root: (e) => qi(e.root),
      $emit: (e) => e.emit,
      $options: (e) => Mn(e),
      $forceUpdate: (e) => e.f || (e.f = () => Bt(e.update)),
      $nextTick: (e) => e.n || (e.n = Rt.bind(e.proxy)),
      $watch: (e) => li.bind(e),
    }),
    en = (e, t) => e !== n && !e.__isScriptSetup && d(e, t),
    tn = {
      get({ _: e }, t) {
        const {
          ctx: i,
          setupState: a,
          data: s,
          props: r,
          accessCache: o,
          type: M,
          appContext: l,
        } = e;
        let u;
        if ("$" !== t[0]) {
          const M = o[t];
          if (void 0 !== M)
            switch (M) {
              case 1:
                return a[t];
              case 2:
                return s[t];
              case 4:
                return i[t];
              case 3:
                return r[t];
            }
          else {
            if (en(a, t)) return (o[t] = 1), a[t];
            if (s !== n && d(s, t)) return (o[t] = 2), s[t];
            if ((u = e.propsOptions[0]) && d(u, t)) return (o[t] = 3), r[t];
            if (i !== n && d(i, t)) return (o[t] = 4), i[t];
            an && (o[t] = 0);
          }
        }
        const c = Xi[t];
        let g, N;
        return c
          ? ("$attrs" === t && je(e, 0, t), c(e))
          : (g = M.__cssModules) && (g = g[t])
          ? g
          : i !== n && d(i, t)
          ? ((o[t] = 4), i[t])
          : ((N = l.config.globalProperties), d(N, t) ? N[t] : void 0);
      },
      set({ _: e }, t, i) {
        const { data: a, setupState: s, ctx: r } = e;
        return en(s, t)
          ? ((s[t] = i), !0)
          : a !== n && d(a, t)
          ? ((a[t] = i), !0)
          : !d(e.props, t) &&
            ("$" !== t[0] || !(t.slice(1) in e)) &&
            ((r[t] = i), !0);
      },
      has(
        {
          _: {
            data: e,
            setupState: t,
            accessCache: i,
            ctx: a,
            appContext: s,
            propsOptions: r,
          },
        },
        o
      ) {
        let M;
        return (
          !!i[o] ||
          (e !== n && d(e, o)) ||
          en(t, o) ||
          ((M = r[0]) && d(M, o)) ||
          d(a, o) ||
          d(Xi, o) ||
          d(s.config.globalProperties, o)
        );
      },
      defineProperty(e, t, i) {
        return (
          null != i.get
            ? (e._.accessCache[t] = 0)
            : d(i, "value") && this.set(e, t, i.value, null),
          Reflect.defineProperty(e, t, i)
        );
      },
    };
  function nn(e) {
    return N(e) ? e.reduce((e, t) => ((e[t] = null), e), {}) : e;
  }
  let an = !0;
  function sn(e) {
    const t = Mn(e),
      i = e.proxy,
      n = e.ctx;
    (an = !1), t.beforeCreate && rn(t.beforeCreate, e, "bc");
    const {
      data: a,
      computed: r,
      methods: o,
      watch: M,
      provide: l,
      inject: u,
      created: c,
      beforeMount: g,
      mounted: d,
      beforeUpdate: D,
      updated: I,
      activated: y,
      deactivated: p,
      beforeDestroy: z,
      beforeUnmount: h,
      destroyed: A,
      unmounted: m,
      render: x,
      renderTracked: f,
      renderTriggered: k,
      errorCaptured: L,
      serverPrefetch: O,
      expose: w,
      inheritAttrs: v,
      components: E,
      directives: S,
      filters: b,
    } = t;
    if (
      (u &&
        (function (e, t, i = s) {
          N(e) && (e = gn(e));
          for (const n in e) {
            const i = e[n];
            let a;
            (a = T(i)
              ? "default" in i
                ? zn(i.from || n, i.default, !0)
                : zn(i.from || n)
              : zn(i)),
              Tt(a)
                ? Object.defineProperty(t, n, {
                    enumerable: !0,
                    configurable: !0,
                    get: () => a.value,
                    set: (e) => (a.value = e),
                  })
                : (t[n] = a);
          }
        })(u, n, null),
      o)
    )
      for (const s in o) {
        const e = o[s];
        j(e) && (n[s] = e.bind(i));
      }
    if (a) {
      const t = a.call(i, i);
      T(t) && (e.data = Mt(t));
    }
    if (((an = !0), r))
      for (const N in r) {
        const e = r[N],
          t = j(e) ? e.bind(i, i) : j(e.get) ? e.get.bind(i, i) : s,
          a = !j(e) && j(e.set) ? e.set.bind(i) : s,
          o = fa({ get: t, set: a });
        Object.defineProperty(n, N, {
          enumerable: !0,
          configurable: !0,
          get: () => o.value,
          set: (e) => (o.value = e),
        });
      }
    if (M) for (const s in M) on(M[s], n, i, s);
    if (l) {
      const e = j(l) ? l.call(i) : l;
      Reflect.ownKeys(e).forEach((t) => {
        !(function (e, t) {
          if (Na) {
            let i = Na.provides;
            const n = Na.parent && Na.parent.provides;
            n === i && (i = Na.provides = Object.create(n)), (i[e] = t);
          } else;
        })(t, e[t]);
      });
    }
    function C(e, t) {
      N(t) ? t.forEach((t) => e(t.bind(i))) : t && e(t.bind(i));
    }
    if (
      (c && rn(c, e, "c"),
      C(Si, g),
      C(bi, d),
      C(Ci, D),
      C(Ui, I),
      C(ki, y),
      C(Li, p),
      C(Bi, L),
      C(Ri, f),
      C(Pi, k),
      C(Qi, h),
      C(_i, m),
      C(Yi, O),
      N(w))
    )
      if (w.length) {
        const t = e.exposed || (e.exposed = {});
        w.forEach((e) => {
          Object.defineProperty(t, e, {
            get: () => i[e],
            set: (t) => (i[e] = t),
          });
        });
      } else e.exposed || (e.exposed = {});
    x && e.render === s && (e.render = x),
      null != v && (e.inheritAttrs = v),
      E && (e.components = E),
      S && (e.directives = S);
  }
  function rn(e, t, i) {
    wt(N(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, i);
  }
  function on(e, t, i, n) {
    const a = n.includes(".") ? ui(i, n) : () => i[n];
    if (p(e)) {
      const i = t[e];
      j(i) && oi(a, i);
    } else if (j(e)) oi(a, e.bind(i));
    else if (T(e))
      if (N(e)) e.forEach((e) => on(e, t, i, n));
      else {
        const n = j(e.handler) ? e.handler.bind(i) : t[e.handler];
        j(n) && oi(a, n, e);
      }
  }
  function Mn(e) {
    const t = e.type,
      { mixins: i, extends: n } = t,
      {
        mixins: a,
        optionsCache: s,
        config: { optionMergeStrategies: r },
      } = e.appContext,
      o = s.get(t);
    let M;
    return (
      o
        ? (M = o)
        : a.length || i || n
        ? ((M = {}), a.length && a.forEach((e) => ln(M, e, r, !0)), ln(M, t, r))
        : (M = t),
      T(t) && s.set(t, M),
      M
    );
  }
  function ln(e, t, i, n = !1) {
    const { mixins: a, extends: s } = t;
    s && ln(e, s, i, !0), a && a.forEach((t) => ln(e, t, i, !0));
    for (const r in t)
      if (n && "expose" === r);
      else {
        const n = un[r] || (i && i[r]);
        e[r] = n ? n(e[r], t[r]) : t[r];
      }
    return e;
  }
  const un = {
    data: cn,
    props: Dn,
    emits: Dn,
    methods: Nn,
    computed: Nn,
    beforeCreate: dn,
    created: dn,
    beforeMount: dn,
    mounted: dn,
    beforeUpdate: dn,
    updated: dn,
    beforeDestroy: dn,
    beforeUnmount: dn,
    destroyed: dn,
    unmounted: dn,
    activated: dn,
    deactivated: dn,
    errorCaptured: dn,
    serverPrefetch: dn,
    components: Nn,
    directives: Nn,
    watch: function (e, t) {
      if (!e) return t;
      if (!t) return e;
      const i = u(Object.create(null), e);
      for (const n in t) i[n] = dn(e[n], t[n]);
      return i;
    },
    provide: cn,
    inject: function (e, t) {
      return Nn(gn(e), gn(t));
    },
  };
  function cn(e, t) {
    return t
      ? e
        ? function () {
            return u(
              j(e) ? e.call(this, this) : e,
              j(t) ? t.call(this, this) : t
            );
          }
        : t
      : e;
  }
  function gn(e) {
    if (N(e)) {
      const t = {};
      for (let i = 0; i < e.length; i++) t[e[i]] = e[i];
      return t;
    }
    return e;
  }
  function dn(e, t) {
    return e ? [...new Set([].concat(e, t))] : t;
  }
  function Nn(e, t) {
    return e ? u(Object.create(null), e, t) : t;
  }
  function Dn(e, t) {
    return e
      ? N(e) && N(t)
        ? [...new Set([...e, ...t])]
        : u(Object.create(null), nn(e), nn(null != t ? t : {}))
      : t;
  }
  function In() {
    return {
      app: null,
      config: {
        isNativeTag: r,
        performance: !1,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {},
      },
      mixins: [],
      components: {},
      directives: {},
      provides: Object.create(null),
      optionsCache: new WeakMap(),
      propsCache: new WeakMap(),
      emitsCache: new WeakMap(),
    };
  }
  let yn = 0;
  function jn(e, t) {
    return function (i, n = null) {
      j(i) || (i = u({}, i)), null == n || T(n) || (n = null);
      const a = In(),
        s = new Set();
      let r = !1;
      const o = (a.app = {
        _uid: yn++,
        _component: i,
        _props: n,
        _container: null,
        _context: a,
        _instance: null,
        version: wa,
        get config() {
          return a.config;
        },
        set config(e) {},
        use: (e, ...t) => (
          s.has(e) ||
            (e && j(e.install)
              ? (s.add(e), e.install(o, ...t))
              : j(e) && (s.add(e), e(o, ...t))),
          o
        ),
        mixin: (e) => (a.mixins.includes(e) || a.mixins.push(e), o),
        component: (e, t) => (t ? ((a.components[e] = t), o) : a.components[e]),
        directive: (e, t) => (t ? ((a.directives[e] = t), o) : a.directives[e]),
        mount(s, M, l) {
          if (!r) {
            const u = na(i, n);
            return (
              (u.appContext = a),
              M && t ? t(u, s) : e(u, s, l),
              (r = !0),
              (o._container = s),
              (s.__vue_app__ = o),
              xa(u.component) || u.component.proxy
            );
          }
        },
        unmount() {
          r && (e(null, o._container), delete o._container.__vue_app__);
        },
        provide: (e, t) => ((a.provides[e] = t), o),
        runWithContext(e) {
          pn = o;
          try {
            return e();
          } finally {
            pn = null;
          }
        },
      });
      return o;
    };
  }
  let pn = null;
  function zn(e, t, i = !1) {
    const n = Na || qt;
    if (n || pn) {
      const a = n
        ? null == n.parent
          ? n.vnode.appContext && n.vnode.appContext.provides
          : n.parent.provides
        : pn._context.provides;
      if (a && e in a) return a[e];
      if (arguments.length > 1) return i && j(t) ? t.call(n && n.proxy) : t;
    }
  }
  function Tn(e, t, i, n = !1) {
    const a = {},
      s = {};
    Q(s, Xn, 1), (e.propsDefaults = Object.create(null)), hn(e, t, a, s);
    for (const r in e.propsOptions[0]) r in a || (a[r] = void 0);
    i
      ? (e.props = n ? a : ut(a, !1, Ce, tt, at))
      : e.type.props
      ? (e.props = a)
      : (e.props = s),
      (e.attrs = s);
  }
  function hn(e, t, i, a) {
    const [s, r] = e.propsOptions;
    let o,
      M = !1;
    if (t)
      for (let n in t) {
        if (k(n)) continue;
        const l = t[n];
        let u;
        s && d(s, (u = w(n)))
          ? r && r.includes(u)
            ? ((o || (o = {}))[u] = l)
            : (i[u] = l)
          : Kt(e.emitsOptions, n) ||
            (n in a && l === a[n]) ||
            ((a[n] = l), (M = !0));
      }
    if (r) {
      const t = Dt(i),
        a = o || n;
      for (let n = 0; n < r.length; n++) {
        const o = r[n];
        i[o] = An(s, t, o, a[o], e, !d(a, o));
      }
    }
    return M;
  }
  function An(e, t, i, n, a, s) {
    const r = e[i];
    if (null != r) {
      const e = d(r, "default");
      if (e && void 0 === n) {
        const e = r.default;
        if (r.type !== Function && !r.skipFactory && j(e)) {
          const { propsDefaults: s } = a;
          i in s ? (n = s[i]) : (pa(a), (n = s[i] = e.call(null, t)), za());
        } else n = e;
      }
      r[0] &&
        (s && !e ? (n = !1) : !r[1] || ("" !== n && n !== E(i)) || (n = !0));
    }
    return n;
  }
  function mn(e, t, i = !1) {
    const s = t.propsCache,
      r = s.get(e);
    if (r) return r;
    const o = e.props,
      M = {},
      l = [];
    let c = !1;
    if (!j(e)) {
      const n = (e) => {
        c = !0;
        const [i, n] = mn(e, t, !0);
        u(M, i), n && l.push(...n);
      };
      !i && t.mixins.length && t.mixins.forEach(n),
        e.extends && n(e.extends),
        e.mixins && e.mixins.forEach(n);
    }
    if (!o && !c) return T(e) && s.set(e, a), a;
    if (N(o))
      for (let a = 0; a < o.length; a++) {
        const e = w(o[a]);
        xn(e) && (M[e] = n);
      }
    else if (o)
      for (const n in o) {
        const e = w(n);
        if (xn(e)) {
          const t = o[n],
            i = (M[e] = N(t) || j(t) ? { type: t } : u({}, t));
          if (i) {
            const t = Ln(Boolean, i.type),
              n = Ln(String, i.type);
            (i[0] = t > -1),
              (i[1] = n < 0 || t < n),
              (t > -1 || d(i, "default")) && l.push(e);
          }
        }
      }
    const g = [M, l];
    return T(e) && s.set(e, g), g;
  }
  function xn(e) {
    return "$" !== e[0];
  }
  function fn(e) {
    const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
    return t ? t[2] : null === e ? "null" : "";
  }
  function kn(e, t) {
    return fn(e) === fn(t);
  }
  function Ln(e, t) {
    return N(t) ? t.findIndex((t) => kn(t, e)) : j(t) && kn(t, e) ? 0 : -1;
  }
  const On = (e) => "_" === e[0] || "$stable" === e,
    wn = (e) => (N(e) ? e.map(oa) : [oa(e)]),
    vn = (e, t, i) => {
      if (t._n) return t;
      const n = ti((...e) => wn(t(...e)), i);
      return (n._c = !1), n;
    },
    En = (e, t, i) => {
      const n = e._ctx;
      for (const a in e) {
        if (On(a)) continue;
        const i = e[a];
        if (j(i)) t[a] = vn(0, i, n);
        else if (null != i) {
          const e = wn(i);
          t[a] = () => e;
        }
      }
    },
    Sn = (e, t) => {
      const i = wn(t);
      e.slots.default = () => i;
    };
  function bn(e, t, i, a, s = !1) {
    if (N(e))
      return void e.forEach((e, n) => bn(e, t && (N(t) ? t[n] : t), i, a, s));
    if (xi(a) && !s) return;
    const r = 4 & a.shapeFlag ? xa(a.component) || a.component.proxy : a.el,
      o = s ? null : r,
      { i: M, r: l } = e,
      u = t && t.r,
      g = M.refs === n ? (M.refs = {}) : M.refs,
      D = M.setupState;
    if (
      (null != u &&
        u !== l &&
        (p(u)
          ? ((g[u] = null), d(D, u) && (D[u] = null))
          : Tt(u) && (u.value = null)),
      j(l))
    )
      Ot(l, M, 12, [o, g]);
    else {
      const t = p(l),
        n = Tt(l);
      if (t || n) {
        const a = () => {
          if (e.f) {
            const i = t ? (d(D, l) ? D[l] : g[l]) : l.value;
            s
              ? N(i) && c(i, r)
              : N(i)
              ? i.includes(r) || i.push(r)
              : t
              ? ((g[l] = [r]), d(D, l) && (D[l] = g[l]))
              : ((l.value = [r]), e.k && (g[e.k] = l.value));
          } else
            t
              ? ((g[l] = o), d(D, l) && (D[l] = o))
              : n && ((l.value = o), e.k && (g[e.k] = o));
        };
        o ? ((a.id = -1), Cn(a, i)) : a();
      }
    }
  }
  const Cn = function (e, t) {
    var i;
    t && t.pendingBranch
      ? N(e)
        ? t.effects.push(...e)
        : t.effects.push(e)
      : (N((i = e))
          ? Ut.push(...i)
          : (Qt && Qt.includes(i, i.allowRecurse ? _t + 1 : _t)) || Ut.push(i),
        Wt());
  };
  function Un(e) {
    return (function (e, t) {
      R().__VUE__ = !0;
      const {
          insert: i,
          remove: r,
          patchProp: o,
          createElement: M,
          createText: l,
          createComment: c,
          setText: g,
          setElementText: N,
          parentNode: D,
          nextSibling: I,
          setScopeId: y = s,
          insertStaticContent: j,
        } = e,
        p = (
          e,
          t,
          i,
          n = null,
          a = null,
          s = null,
          r = !1,
          o = null,
          M = !!t.dynamicChildren
        ) => {
          if (e === t) return;
          e && !qn(e, t) && ((n = ee(e)), J(e, a, s, !0), (e = null)),
            -2 === t.patchFlag && ((M = !1), (t.dynamicChildren = null));
          const { type: l, ref: u, shapeFlag: c } = t;
          switch (l) {
            case Pn:
              z(e, t, i, n);
              break;
            case Rn:
              T(e, t, i, n);
              break;
            case Bn:
              null == e && A(t, i, n, r);
              break;
            case Yn:
              _(e, t, i, n, a, s, r, o, M);
              break;
            default:
              1 & c
                ? f(e, t, i, n, a, s, r, o, M)
                : 6 & c
                ? Y(e, t, i, n, a, s, r, o, M)
                : (64 & c || 128 & c) &&
                  l.process(e, t, i, n, a, s, r, o, M, ne);
          }
          null != u && a && bn(u, e && e.ref, s, t || e, !t);
        },
        z = (e, t, n, a) => {
          if (null == e) i((t.el = l(t.children)), n, a);
          else {
            const i = (t.el = e.el);
            t.children !== e.children && g(i, t.children);
          }
        },
        T = (e, t, n, a) => {
          null == e ? i((t.el = c(t.children || "")), n, a) : (t.el = e.el);
        },
        A = (e, t, i, n) => {
          [e.el, e.anchor] = j(e.children, t, i, n, e.el, e.anchor);
        },
        m = ({ el: e, anchor: t }, n, a) => {
          let s;
          for (; e && e !== t; ) (s = I(e)), i(e, n, a), (e = s);
          i(t, n, a);
        },
        x = ({ el: e, anchor: t }) => {
          let i;
          for (; e && e !== t; ) (i = I(e)), r(e), (e = i);
          r(t);
        },
        f = (e, t, i, n, a, s, r, o, M) => {
          (r = r || "svg" === t.type),
            null == e ? L(t, i, n, a, s, r, o, M) : S(e, t, a, s, r, o, M);
        },
        L = (e, t, n, a, s, r, l, u) => {
          let c, g;
          const { type: d, props: D, shapeFlag: I, transition: y, dirs: j } = e;
          if (
            ((c = e.el = M(e.type, r, D && D.is, D)),
            8 & I
              ? N(c, e.children)
              : 16 & I &&
                v(e.children, c, null, a, s, r && "foreignObject" !== d, l, u),
            j && di(e, null, a, "created"),
            O(c, e, e.scopeId, l, a),
            D)
          ) {
            for (const t in D)
              "value" === t ||
                k(t) ||
                o(c, t, null, D[t], r, e.children, a, s, X);
            "value" in D && o(c, "value", null, D.value),
              (g = D.onVnodeBeforeMount) && ca(g, a, e);
          }
          j && di(e, null, a, "beforeMount");
          const p = (!s || (s && !s.pendingBranch)) && y && !y.persisted;
          p && y.beforeEnter(c),
            i(c, t, n),
            ((g = D && D.onVnodeMounted) || p || j) &&
              Cn(() => {
                g && ca(g, a, e),
                  p && y.enter(c),
                  j && di(e, null, a, "mounted");
              }, s);
        },
        O = (e, t, i, n, a) => {
          if ((i && y(e, i), n)) for (let s = 0; s < n.length; s++) y(e, n[s]);
          if (a) {
            if (t === a.subTree) {
              const t = a.vnode;
              O(e, t, t.scopeId, t.slotScopeIds, a.parent);
            }
          }
        },
        v = (e, t, i, n, a, s, r, o, M = 0) => {
          for (let l = M; l < e.length; l++) {
            const M = (e[l] = o ? Ma(e[l]) : oa(e[l]));
            p(null, M, t, i, n, a, s, r, o);
          }
        },
        S = (e, t, i, a, s, r, M) => {
          const l = (t.el = e.el);
          let { patchFlag: u, dynamicChildren: c, dirs: g } = t;
          u |= 16 & e.patchFlag;
          const d = e.props || n,
            D = t.props || n;
          let I;
          i && Qn(i, !1),
            (I = D.onVnodeBeforeUpdate) && ca(I, i, t, e),
            g && di(t, e, i, "beforeUpdate"),
            i && Qn(i, !0);
          const y = s && "foreignObject" !== t.type;
          if (
            (c
              ? b(e.dynamicChildren, c, l, i, a, y, r)
              : M || V(e, t, l, null, i, a, y, r, !1),
            u > 0)
          ) {
            if (16 & u) C(l, t, d, D, i, a, s);
            else if (
              (2 & u && d.class !== D.class && o(l, "class", null, D.class, s),
              4 & u && o(l, "style", d.style, D.style, s),
              8 & u)
            ) {
              const n = t.dynamicProps;
              for (let t = 0; t < n.length; t++) {
                const r = n[t],
                  M = d[r],
                  u = D[r];
                (u === M && "value" !== r) ||
                  o(l, r, M, u, s, e.children, i, a, X);
              }
            }
            1 & u && e.children !== t.children && N(l, t.children);
          } else M || null != c || C(l, t, d, D, i, a, s);
          ((I = D.onVnodeUpdated) || g) &&
            Cn(() => {
              I && ca(I, i, t, e), g && di(t, e, i, "updated");
            }, a);
        },
        b = (e, t, i, n, a, s, r) => {
          for (let o = 0; o < t.length; o++) {
            const M = e[o],
              l = t[o],
              u =
                M.el && (M.type === Yn || !qn(M, l) || 70 & M.shapeFlag)
                  ? D(M.el)
                  : i;
            p(M, l, u, null, n, a, s, r, !0);
          }
        },
        C = (e, t, i, a, s, r, M) => {
          if (i !== a) {
            if (i !== n)
              for (const n in i)
                k(n) || n in a || o(e, n, i[n], null, M, t.children, s, r, X);
            for (const n in a) {
              if (k(n)) continue;
              const l = a[n],
                u = i[n];
              l !== u && "value" !== n && o(e, n, u, l, M, t.children, s, r, X);
            }
            "value" in a && o(e, "value", i.value, a.value);
          }
        },
        _ = (e, t, n, a, s, r, o, M, u) => {
          const c = (t.el = e ? e.el : l("")),
            g = (t.anchor = e ? e.anchor : l(""));
          let { patchFlag: d, dynamicChildren: N, slotScopeIds: D } = t;
          D && (M = M ? M.concat(D) : D),
            null == e
              ? (i(c, n, a), i(g, n, a), v(t.children, n, g, s, r, o, M, u))
              : d > 0 && 64 & d && N && e.dynamicChildren
              ? (b(e.dynamicChildren, N, n, s, r, o, M),
                (null != t.key || (s && t === s.subTree)) && _n(e, t, !0))
              : V(e, t, n, g, s, r, o, M, u);
        },
        Y = (e, t, i, n, a, s, r, o, M) => {
          (t.slotScopeIds = o),
            null == e
              ? 512 & t.shapeFlag
                ? a.ctx.activate(t, i, n, r, M)
                : P(t, i, n, a, s, r, M)
              : B(e, t, M);
        },
        P = (e, t, i, a, s, r, o) => {
          const M = (e.component = (function (e, t, i) {
            const a = e.type,
              s = (t ? t.appContext : e.appContext) || ga,
              r = {
                uid: da++,
                vnode: e,
                type: a,
                parent: t,
                appContext: s,
                root: null,
                next: null,
                subTree: null,
                effect: null,
                update: null,
                scope: new ie(!0),
                render: null,
                proxy: null,
                exposed: null,
                exposeProxy: null,
                withProxy: null,
                provides: t ? t.provides : Object.create(s.provides),
                accessCache: null,
                renderCache: [],
                components: null,
                directives: null,
                propsOptions: mn(a, s),
                emitsOptions: $t(a, s),
                emit: null,
                emitted: null,
                propsDefaults: n,
                inheritAttrs: a.inheritAttrs,
                ctx: n,
                data: n,
                props: n,
                attrs: n,
                slots: n,
                refs: n,
                setupState: n,
                setupContext: null,
                attrsProxy: null,
                slotsProxy: null,
                suspense: i,
                suspenseId: i ? i.pendingId : 0,
                asyncDep: null,
                asyncResolved: !1,
                isMounted: !1,
                isUnmounted: !1,
                isDeactivated: !1,
                bc: null,
                c: null,
                bm: null,
                m: null,
                bu: null,
                u: null,
                um: null,
                bum: null,
                da: null,
                a: null,
                rtg: null,
                rtc: null,
                ec: null,
                sp: null,
              };
            (r.ctx = { _: r }),
              (r.root = t ? t.root : r),
              (r.emit = Jt.bind(null, r)),
              e.ce && e.ce(r);
            return r;
          })(e, a, s));
          if (
            (fi(e) && (M.ctx.renderer = ne),
            (function (e, t = !1) {
              ha = t;
              const { props: i, children: n } = e.vnode,
                a = Ta(e);
              Tn(e, i, a, t),
                ((e, t) => {
                  if (32 & e.vnode.shapeFlag) {
                    const i = t._;
                    i
                      ? ((e.slots = Dt(t)), Q(t, "_", i))
                      : En(t, (e.slots = {}));
                  } else (e.slots = {}), t && Sn(e, t);
                  Q(e.slots, Xn, 1);
                })(e, n);
              const s = a
                ? (function (e, t) {
                    const i = e.type;
                    (e.accessCache = Object.create(null)),
                      (e.proxy = It(new Proxy(e.ctx, tn)));
                    const { setup: n } = i;
                    if (n) {
                      const i = (e.setupContext =
                        n.length > 1
                          ? (function (e) {
                              const t = (t) => {
                                e.exposed = t || {};
                              };
                              return {
                                get attrs() {
                                  return (function (e) {
                                    return (
                                      e.attrsProxy ||
                                      (e.attrsProxy = new Proxy(e.attrs, {
                                        get: (t, i) => (
                                          je(e, 0, "$attrs"), t[i]
                                        ),
                                      }))
                                    );
                                  })(e);
                                },
                                slots: e.slots,
                                emit: e.emit,
                                expose: t,
                              };
                            })(e)
                          : null);
                      pa(e), Ie();
                      const a = Ot(n, e, 0, [e.props, i]);
                      if ((ye(), za(), h(a))) {
                        if ((a.then(za, za), t))
                          return a
                            .then((i) => {
                              Aa(e, i, t);
                            })
                            .catch((t) => {
                              vt(t, e, 0);
                            });
                        e.asyncDep = a;
                      } else Aa(e, a, t);
                    } else ma(e, t);
                  })(e, t)
                : void 0;
              ha = !1;
            })(M),
            M.asyncDep)
          ) {
            if ((s && s.registerDep(M, W), !e.el)) {
              const e = (M.subTree = na(Rn));
              T(null, e, t, i);
            }
          } else W(M, e, t, i, s, r, o);
        },
        B = (e, t, i) => {
          const n = (t.component = e.component);
          if (
            (function (e, t, i) {
              const { props: n, children: a, component: s } = e,
                { props: r, children: o, patchFlag: M } = t,
                l = s.emitsOptions;
              if (t.dirs || t.transition) return !0;
              if (!(i && M >= 0))
                return (
                  !((!a && !o) || (o && o.$stable)) ||
                  (n !== r && (n ? !r || si(n, r, l) : !!r))
                );
              if (1024 & M) return !0;
              if (16 & M) return n ? si(n, r, l) : !!r;
              if (8 & M) {
                const e = t.dynamicProps;
                for (let t = 0; t < e.length; t++) {
                  const i = e[t];
                  if (r[i] !== n[i] && !Kt(l, i)) return !0;
                }
              }
              return !1;
            })(e, t, i)
          ) {
            if (n.asyncDep && !n.asyncResolved) return void F(n, t, i);
            (n.next = t),
              (function (e) {
                const t = bt.indexOf(e);
                t > Ct && bt.splice(t, 1);
              })(n.update),
              n.update();
          } else (t.el = e.el), (n.vnode = t);
        },
        W = (e, t, i, n, a, s, r) => {
          const o = () => {
              if (e.isMounted) {
                let t,
                  { next: i, bu: n, u: o, parent: M, vnode: l } = e,
                  u = i;
                Qn(e, !1),
                  i ? ((i.el = l.el), F(e, i, r)) : (i = l),
                  n && U(n),
                  (t = i.props && i.props.onVnodeBeforeUpdate) &&
                    ca(t, M, i, l),
                  Qn(e, !0);
                const c = ii(e),
                  g = e.subTree;
                (e.subTree = c),
                  p(g, c, D(g.el), ee(g), e, a, s),
                  (i.el = c.el),
                  null === u &&
                    (function ({ vnode: e, parent: t }, i) {
                      for (; t && t.subTree === e; )
                        ((e = t.vnode).el = i), (t = t.parent);
                    })(e, c.el),
                  o && Cn(o, a),
                  (t = i.props && i.props.onVnodeUpdated) &&
                    Cn(() => ca(t, M, i, l), a);
              } else {
                let r;
                const { el: o, props: M } = t,
                  { bm: l, m: u, parent: c } = e,
                  g = xi(t);
                if (
                  (Qn(e, !1),
                  l && U(l),
                  !g && (r = M && M.onVnodeBeforeMount) && ca(r, c, t),
                  Qn(e, !0),
                  o && se)
                ) {
                  const i = () => {
                    (e.subTree = ii(e)), se(o, e.subTree, e, a, null);
                  };
                  g
                    ? t.type.__asyncLoader().then(() => !e.isUnmounted && i())
                    : i();
                } else {
                  const r = (e.subTree = ii(e));
                  p(null, r, i, n, e, a, s), (t.el = r.el);
                }
                if ((u && Cn(u, a), !g && (r = M && M.onVnodeMounted))) {
                  const e = t;
                  Cn(() => ca(r, c, e), a);
                }
                (256 & t.shapeFlag ||
                  (c && xi(c.vnode) && 256 & c.vnode.shapeFlag)) &&
                  e.a &&
                  Cn(e.a, a),
                  (e.isMounted = !0),
                  (t = i = n = null);
              }
            },
            M = (e.effect = new ge(o, () => Bt(l), e.scope)),
            l = (e.update = () => M.run());
          (l.id = e.uid), Qn(e, !0), l();
        },
        F = (e, t, i) => {
          t.component = e;
          const a = e.vnode.props;
          (e.vnode = t),
            (e.next = null),
            (function (e, t, i, n) {
              const {
                  props: a,
                  attrs: s,
                  vnode: { patchFlag: r },
                } = e,
                o = Dt(a),
                [M] = e.propsOptions;
              let l = !1;
              if (!(n || r > 0) || 16 & r) {
                let n;
                hn(e, t, a, s) && (l = !0);
                for (const s in o)
                  (t && (d(t, s) || ((n = E(s)) !== s && d(t, n)))) ||
                    (M
                      ? !i ||
                        (void 0 === i[s] && void 0 === i[n]) ||
                        (a[s] = An(M, o, s, void 0, e, !0))
                      : delete a[s]);
                if (s !== o)
                  for (const e in s) (t && d(t, e)) || (delete s[e], (l = !0));
              } else if (8 & r) {
                const i = e.vnode.dynamicProps;
                for (let n = 0; n < i.length; n++) {
                  let r = i[n];
                  if (Kt(e.emitsOptions, r)) continue;
                  const u = t[r];
                  if (M)
                    if (d(s, r)) u !== s[r] && ((s[r] = u), (l = !0));
                    else {
                      const t = w(r);
                      a[t] = An(M, o, t, u, e, !1);
                    }
                  else u !== s[r] && ((s[r] = u), (l = !0));
                }
              }
              l && ze(e, "set", "$attrs");
            })(e, t.props, a, i),
            ((e, t, i) => {
              const { vnode: a, slots: s } = e;
              let r = !0,
                o = n;
              if (32 & a.shapeFlag) {
                const e = t._;
                e
                  ? i && 1 === e
                    ? (r = !1)
                    : (u(s, t), i || 1 !== e || delete s._)
                  : ((r = !t.$stable), En(t, s)),
                  (o = t);
              } else t && (Sn(e, t), (o = { default: 1 }));
              if (r) for (const n in s) On(n) || n in o || delete s[n];
            })(e, t.children, i),
            Ie(),
            Ft(),
            ye();
        },
        V = (e, t, i, n, a, s, r, o, M = !1) => {
          const l = e && e.children,
            u = e ? e.shapeFlag : 0,
            c = t.children,
            { patchFlag: g, shapeFlag: d } = t;
          if (g > 0) {
            if (128 & g) return void Z(l, c, i, n, a, s, r, o, M);
            if (256 & g) return void H(l, c, i, n, a, s, r, o, M);
          }
          8 & d
            ? (16 & u && X(l, a, s), c !== l && N(i, c))
            : 16 & u
            ? 16 & d
              ? Z(l, c, i, n, a, s, r, o, M)
              : X(l, a, s, !0)
            : (8 & u && N(i, ""), 16 & d && v(c, i, n, a, s, r, o, M));
        },
        H = (e, t, i, n, s, r, o, M, l) => {
          t = t || a;
          const u = (e = e || a).length,
            c = t.length,
            g = Math.min(u, c);
          let d;
          for (d = 0; d < g; d++) {
            const n = (t[d] = l ? Ma(t[d]) : oa(t[d]));
            p(e[d], n, i, null, s, r, o, M, l);
          }
          u > c ? X(e, s, r, !0, !1, g) : v(t, i, n, s, r, o, M, l, g);
        },
        Z = (e, t, i, n, s, r, o, M, l) => {
          let u = 0;
          const c = t.length;
          let g = e.length - 1,
            d = c - 1;
          for (; u <= g && u <= d; ) {
            const n = e[u],
              a = (t[u] = l ? Ma(t[u]) : oa(t[u]));
            if (!qn(n, a)) break;
            p(n, a, i, null, s, r, o, M, l), u++;
          }
          for (; u <= g && u <= d; ) {
            const n = e[g],
              a = (t[d] = l ? Ma(t[d]) : oa(t[d]));
            if (!qn(n, a)) break;
            p(n, a, i, null, s, r, o, M, l), g--, d--;
          }
          if (u > g) {
            if (u <= d) {
              const e = d + 1,
                a = e < c ? t[e].el : n;
              for (; u <= d; )
                p(null, (t[u] = l ? Ma(t[u]) : oa(t[u])), i, a, s, r, o, M, l),
                  u++;
            }
          } else if (u > d) for (; u <= g; ) J(e[u], s, r, !0), u++;
          else {
            const N = u,
              D = u,
              I = new Map();
            for (u = D; u <= d; u++) {
              const e = (t[u] = l ? Ma(t[u]) : oa(t[u]));
              null != e.key && I.set(e.key, u);
            }
            let y,
              j = 0;
            const z = d - D + 1;
            let T = !1,
              h = 0;
            const A = new Array(z);
            for (u = 0; u < z; u++) A[u] = 0;
            for (u = N; u <= g; u++) {
              const n = e[u];
              if (j >= z) {
                J(n, s, r, !0);
                continue;
              }
              let a;
              if (null != n.key) a = I.get(n.key);
              else
                for (y = D; y <= d; y++)
                  if (0 === A[y - D] && qn(n, t[y])) {
                    a = y;
                    break;
                  }
              void 0 === a
                ? J(n, s, r, !0)
                : ((A[a - D] = u + 1),
                  a >= h ? (h = a) : (T = !0),
                  p(n, t[a], i, null, s, r, o, M, l),
                  j++);
            }
            const m = T
              ? (function (e) {
                  const t = e.slice(),
                    i = [0];
                  let n, a, s, r, o;
                  const M = e.length;
                  for (n = 0; n < M; n++) {
                    const M = e[n];
                    if (0 !== M) {
                      if (((a = i[i.length - 1]), e[a] < M)) {
                        (t[n] = a), i.push(n);
                        continue;
                      }
                      for (s = 0, r = i.length - 1; s < r; )
                        (o = (s + r) >> 1), e[i[o]] < M ? (s = o + 1) : (r = o);
                      M < e[i[s]] && (s > 0 && (t[n] = i[s - 1]), (i[s] = n));
                    }
                  }
                  (s = i.length), (r = i[s - 1]);
                  for (; s-- > 0; ) (i[s] = r), (r = t[r]);
                  return i;
                })(A)
              : a;
            for (y = m.length - 1, u = z - 1; u >= 0; u--) {
              const e = D + u,
                a = t[e],
                g = e + 1 < c ? t[e + 1].el : n;
              0 === A[u]
                ? p(null, a, i, g, s, r, o, M, l)
                : T && (y < 0 || u !== m[y] ? G(a, i, g, 2) : y--);
            }
          }
        },
        G = (e, t, n, a, s = null) => {
          const {
            el: r,
            type: o,
            transition: M,
            children: l,
            shapeFlag: u,
          } = e;
          if (6 & u) return void G(e.component.subTree, t, n, a);
          if (128 & u) return void e.suspense.move(t, n, a);
          if (64 & u) return void o.move(e, t, n, ne);
          if (o === Yn) {
            i(r, t, n);
            for (let e = 0; e < l.length; e++) G(l[e], t, n, a);
            return void i(e.anchor, t, n);
          }
          if (o === Bn) return void m(e, t, n);
          if (2 !== a && 1 & u && M)
            if (0 === a) M.beforeEnter(r), i(r, t, n), Cn(() => M.enter(r), s);
            else {
              const { leave: e, delayLeave: a, afterLeave: s } = M,
                o = () => i(r, t, n),
                l = () => {
                  e(r, () => {
                    o(), s && s();
                  });
                };
              a ? a(r, o, l) : l();
            }
          else i(r, t, n);
        },
        J = (e, t, i, n = !1, a = !1) => {
          const {
            type: s,
            props: r,
            ref: o,
            children: M,
            dynamicChildren: l,
            shapeFlag: u,
            patchFlag: c,
            dirs: g,
          } = e;
          if ((null != o && bn(o, null, i, e, !0), 256 & u))
            return void t.ctx.deactivate(e);
          const d = 1 & u && g,
            N = !xi(e);
          let D;
          if ((N && (D = r && r.onVnodeBeforeUnmount) && ca(D, t, e), 6 & u))
            q(e.component, i, n);
          else {
            if (128 & u) return void e.suspense.unmount(i, n);
            d && di(e, null, t, "beforeUnmount"),
              64 & u
                ? e.type.remove(e, t, i, a, ne, n)
                : l && (s !== Yn || (c > 0 && 64 & c))
                ? X(l, t, i, !1, !0)
                : ((s === Yn && 384 & c) || (!a && 16 & u)) && X(M, t, i),
              n && $(e);
          }
          ((N && (D = r && r.onVnodeUnmounted)) || d) &&
            Cn(() => {
              D && ca(D, t, e), d && di(e, null, t, "unmounted");
            }, i);
        },
        $ = (e) => {
          const { type: t, el: i, anchor: n, transition: a } = e;
          if (t === Yn) return void K(i, n);
          if (t === Bn) return void x(e);
          const s = () => {
            r(i), a && !a.persisted && a.afterLeave && a.afterLeave();
          };
          if (1 & e.shapeFlag && a && !a.persisted) {
            const { leave: t, delayLeave: n } = a,
              r = () => t(i, s);
            n ? n(e.el, s, r) : r();
          } else s();
        },
        K = (e, t) => {
          let i;
          for (; e !== t; ) (i = I(e)), r(e), (e = i);
          r(t);
        },
        q = (e, t, i) => {
          const { bum: n, scope: a, update: s, subTree: r, um: o } = e;
          n && U(n),
            a.stop(),
            s && ((s.active = !1), J(r, e, t, i)),
            o && Cn(o, t),
            Cn(() => {
              e.isUnmounted = !0;
            }, t),
            t &&
              t.pendingBranch &&
              !t.isUnmounted &&
              e.asyncDep &&
              !e.asyncResolved &&
              e.suspenseId === t.pendingId &&
              (t.deps--, 0 === t.deps && t.resolve());
        },
        X = (e, t, i, n = !1, a = !1, s = 0) => {
          for (let r = s; r < e.length; r++) J(e[r], t, i, n, a);
        },
        ee = (e) =>
          6 & e.shapeFlag
            ? ee(e.component.subTree)
            : 128 & e.shapeFlag
            ? e.suspense.next()
            : I(e.anchor || e.el),
        te = (e, t, i) => {
          null == e
            ? t._vnode && J(t._vnode, null, null, !0)
            : p(t._vnode || null, e, t, null, null, null, i),
            Ft(),
            Vt(),
            (t._vnode = e);
        },
        ne = {
          p: p,
          um: J,
          m: G,
          r: $,
          mt: P,
          mc: v,
          pc: V,
          pbc: b,
          n: ee,
          o: e,
        };
      let ae, se;
      t && ([ae, se] = t(ne));
      return { render: te, hydrate: ae, createApp: jn(te, ae) };
    })(e);
  }
  function Qn({ effect: e, update: t }, i) {
    e.allowRecurse = t.allowRecurse = i;
  }
  function _n(e, t, i = !1) {
    const n = e.children,
      a = t.children;
    if (N(n) && N(a))
      for (let s = 0; s < n.length; s++) {
        const e = n[s];
        let t = a[s];
        1 & t.shapeFlag &&
          !t.dynamicChildren &&
          ((t.patchFlag <= 0 || 32 === t.patchFlag) &&
            ((t = a[s] = Ma(a[s])), (t.el = e.el)),
          i || _n(e, t)),
          t.type === Pn && (t.el = e.el);
      }
  }
  const Yn = Symbol.for("v-fgt"),
    Pn = Symbol.for("v-txt"),
    Rn = Symbol.for("v-cmt"),
    Bn = Symbol.for("v-stc"),
    Wn = [];
  let Fn = null;
  function Vn(e = !1) {
    Wn.push((Fn = e ? null : []));
  }
  let Hn = 1;
  function Zn(e) {
    Hn += e;
  }
  function Gn(e) {
    return (
      (e.dynamicChildren = Hn > 0 ? Fn || a : null),
      Wn.pop(),
      (Fn = Wn[Wn.length - 1] || null),
      Hn > 0 && Fn && Fn.push(e),
      e
    );
  }
  function Jn(e, t, i, n, a, s) {
    return Gn(ia(e, t, i, n, a, s, !0));
  }
  function $n(e, t, i, n, a) {
    return Gn(na(e, t, i, n, a, !0));
  }
  function Kn(e) {
    return !!e && !0 === e.__v_isVNode;
  }
  function qn(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const Xn = "__vInternal",
    ea = ({ key: e }) => (null != e ? e : null),
    ta = ({ ref: e, ref_key: t, ref_for: i }) => (
      "number" == typeof e && (e = "" + e),
      null != e
        ? p(e) || Tt(e) || j(e)
          ? { i: qt, r: e, k: t, f: !!i }
          : e
        : null
    );
  function ia(
    e,
    t = null,
    i = null,
    n = 0,
    a = null,
    s = e === Yn ? 0 : 1,
    r = !1,
    o = !1
  ) {
    const M = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e,
      props: t,
      key: t && ea(t),
      ref: t && ta(t),
      scopeId: Xt,
      slotScopeIds: null,
      children: i,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag: s,
      patchFlag: n,
      dynamicProps: a,
      dynamicChildren: null,
      appContext: null,
      ctx: qt,
    };
    return (
      o
        ? (la(M, i), 128 & s && e.normalize(M))
        : i && (M.shapeFlag |= p(i) ? 8 : 16),
      Hn > 0 &&
        !r &&
        Fn &&
        (M.patchFlag > 0 || 6 & s) &&
        32 !== M.patchFlag &&
        Fn.push(M),
      M
    );
  }
  const na = function (e, t = null, i = null, n = 0, a = null, s = !1) {
    (e && e !== Vi) || (e = Rn);
    if (Kn(e)) {
      const n = aa(e, t, !0);
      return (
        i && la(n, i),
        Hn > 0 &&
          !s &&
          Fn &&
          (6 & n.shapeFlag ? (Fn[Fn.indexOf(e)] = n) : Fn.push(n)),
        (n.patchFlag |= -2),
        n
      );
    }
    (r = e), j(r) && "__vccOpts" in r && (e = e.__vccOpts);
    var r;
    if (t) {
      t = (function (e) {
        return e ? (Nt(e) || Xn in e ? u({}, e) : e) : null;
      })(t);
      let { class: e, style: i } = t;
      e && !p(e) && (t.class = Z(e)),
        T(i) && (Nt(i) && !N(i) && (i = u({}, i)), (t.style = B(i)));
    }
    const o = p(e)
      ? 1
      : ((e) => e.__isSuspense)(e)
      ? 128
      : ((e) => e.__isTeleport)(e)
      ? 64
      : T(e)
      ? 4
      : j(e)
      ? 2
      : 0;
    return ia(e, t, i, n, a, o, s, !0);
  };
  function aa(e, t, i = !1) {
    const { props: n, ref: a, patchFlag: s, children: r } = e,
      o = t ? ua(n || {}, t) : n;
    return {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: o,
      key: o && ea(o),
      ref:
        t && t.ref
          ? i && a
            ? N(a)
              ? a.concat(ta(t))
              : [a, ta(t)]
            : ta(t)
          : a,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: r,
      target: e.target,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Yn ? (-1 === s ? 16 : 16 | s) : s,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: e.transition,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && aa(e.ssContent),
      ssFallback: e.ssFallback && aa(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  }
  function sa(e = " ", t = 0) {
    return na(Pn, null, e, t);
  }
  function ra(e = "", t = !1) {
    return t ? (Vn(), $n(Rn, null, e)) : na(Rn, null, e);
  }
  function oa(e) {
    return null == e || "boolean" == typeof e
      ? na(Rn)
      : N(e)
      ? na(Yn, null, e.slice())
      : "object" == typeof e
      ? Ma(e)
      : na(Pn, null, String(e));
  }
  function Ma(e) {
    return (null === e.el && -1 !== e.patchFlag) || e.memo ? e : aa(e);
  }
  function la(e, t) {
    let i = 0;
    const { shapeFlag: n } = e;
    if (null == t) t = null;
    else if (N(t)) i = 16;
    else if ("object" == typeof t) {
      if (65 & n) {
        const i = t.default;
        return void (
          i && (i._c && (i._d = !1), la(e, i()), i._c && (i._d = !0))
        );
      }
      {
        i = 32;
        const n = t._;
        n || Xn in t
          ? 3 === n &&
            qt &&
            (1 === qt.slots._ ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
          : (t._ctx = qt);
      }
    } else
      j(t)
        ? ((t = { default: t, _ctx: qt }), (i = 32))
        : ((t = String(t)), 64 & n ? ((i = 16), (t = [sa(t)])) : (i = 8));
    (e.children = t), (e.shapeFlag |= i);
  }
  function ua(...e) {
    const t = {};
    for (let i = 0; i < e.length; i++) {
      const n = e[i];
      for (const e in n)
        if ("class" === e)
          t.class !== n.class && (t.class = Z([t.class, n.class]));
        else if ("style" === e) t.style = B([t.style, n.style]);
        else if (M(e)) {
          const i = t[e],
            a = n[e];
          !a ||
            i === a ||
            (N(i) && i.includes(a)) ||
            (t[e] = i ? [].concat(i, a) : a);
        } else "" !== e && (t[e] = n[e]);
    }
    return t;
  }
  function ca(e, t, i, n = null) {
    wt(e, t, 7, [i, n]);
  }
  const ga = In();
  let da = 0;
  let Na = null;
  const Da = () => Na || qt;
  let Ia,
    ya,
    ja = "__VUE_INSTANCE_SETTERS__";
  (ya = R()[ja]) || (ya = R()[ja] = []),
    ya.push((e) => (Na = e)),
    (Ia = (e) => {
      ya.length > 1 ? ya.forEach((t) => t(e)) : ya[0](e);
    });
  const pa = (e) => {
      Ia(e), e.scope.on();
    },
    za = () => {
      Na && Na.scope.off(), Ia(null);
    };
  function Ta(e) {
    return 4 & e.vnode.shapeFlag;
  }
  let ha = !1;
  function Aa(e, t, i) {
    j(t)
      ? e.type.__ssrInlineRender
        ? (e.ssrRender = t)
        : (e.render = t)
      : T(t) && (e.setupState = kt(t)),
      ma(e, i);
  }
  function ma(e, t, i) {
    const n = e.type;
    e.render || (e.render = n.render || s), pa(e), Ie(), sn(e), ye(), za();
  }
  function xa(e) {
    if (e.exposed)
      return (
        e.exposeProxy ||
        (e.exposeProxy = new Proxy(kt(It(e.exposed)), {
          get: (t, i) => (i in t ? t[i] : i in Xi ? Xi[i](e) : void 0),
          has: (e, t) => t in e || t in Xi,
        }))
      );
  }
  const fa = (e, t) =>
    (function (e, t, i = !1) {
      let n, a;
      const r = j(e);
      return (
        r ? ((n = e), (a = s)) : ((n = e.get), (a = e.set)),
        new Lt(n, a, r || !a, i)
      );
    })(e, 0, ha);
  function ka(e, t, i) {
    const n = arguments.length;
    return 2 === n
      ? T(t) && !N(t)
        ? Kn(t)
          ? na(e, null, [t])
          : na(e, t)
        : na(e, null, t)
      : (n > 3
          ? (i = Array.prototype.slice.call(arguments, 2))
          : 3 === n && Kn(i) && (i = [i]),
        na(e, t, i));
  }
  const La = Symbol.for("v-scx"),
    Oa = () => zn(La),
    wa = "3.3.4",
    va = "undefined" != typeof document ? document : null,
    Ea = va && va.createElement("template"),
    Sa = {
      insert: (e, t, i) => {
        t.insertBefore(e, i || null);
      },
      remove: (e) => {
        const t = e.parentNode;
        t && t.removeChild(e);
      },
      createElement: (e, t, i, n) => {
        const a = t
          ? va.createElementNS("http://www.w3.org/2000/svg", e)
          : va.createElement(e, i ? { is: i } : void 0);
        return (
          "select" === e &&
            n &&
            null != n.multiple &&
            a.setAttribute("multiple", n.multiple),
          a
        );
      },
      createText: (e) => va.createTextNode(e),
      createComment: (e) => va.createComment(e),
      setText: (e, t) => {
        e.nodeValue = t;
      },
      setElementText: (e, t) => {
        e.textContent = t;
      },
      parentNode: (e) => e.parentNode,
      nextSibling: (e) => e.nextSibling,
      querySelector: (e) => va.querySelector(e),
      setScopeId(e, t) {
        e.setAttribute(t, "");
      },
      insertStaticContent(e, t, i, n, a, s) {
        const r = i ? i.previousSibling : t.lastChild;
        if (a && (a === s || a.nextSibling))
          for (
            ;
            t.insertBefore(a.cloneNode(!0), i), a !== s && (a = a.nextSibling);

          );
        else {
          Ea.innerHTML = n ? `<svg>${e}</svg>` : e;
          const a = Ea.content;
          if (n) {
            const e = a.firstChild;
            for (; e.firstChild; ) a.appendChild(e.firstChild);
            a.removeChild(e);
          }
          t.insertBefore(a, i);
        }
        return [
          r ? r.nextSibling : t.firstChild,
          i ? i.previousSibling : t.lastChild,
        ];
      },
    };
  const ba = /\s*!important$/;
  function Ca(e, t, i) {
    if (N(i)) i.forEach((i) => Ca(e, t, i));
    else if ((null == i && (i = ""), t.startsWith("--"))) e.setProperty(t, i);
    else {
      const n = (function (e, t) {
        const i = Qa[t];
        if (i) return i;
        let n = w(t);
        if ("filter" !== n && n in e) return (Qa[t] = n);
        n = S(n);
        for (let a = 0; a < Ua.length; a++) {
          const i = Ua[a] + n;
          if (i in e) return (Qa[t] = i);
        }
        return t;
      })(e, t);
      ba.test(i)
        ? e.setProperty(E(n), i.replace(ba, ""), "important")
        : (e[n] = i);
    }
  }
  const Ua = ["Webkit", "Moz", "ms"],
    Qa = {};
  const _a = "http://www.w3.org/1999/xlink";
  function Ya(e, t, i, n) {
    e.addEventListener(t, i, n);
  }
  function Pa(e, t, i, n, a = null) {
    const s = e._vei || (e._vei = {}),
      r = s[t];
    if (n && r) r.value = n;
    else {
      const [i, o] = (function (e) {
        let t;
        if (Ra.test(e)) {
          let i;
          for (t = {}; (i = e.match(Ra)); )
            (e = e.slice(0, e.length - i[0].length)),
              (t[i[0].toLowerCase()] = !0);
        }
        return [":" === e[2] ? e.slice(3) : E(e.slice(2)), t];
      })(t);
      if (n) {
        const r = (s[t] = (function (e, t) {
          const i = (e) => {
            if (e._vts) {
              if (e._vts <= i.attached) return;
            } else e._vts = Date.now();
            wt(
              (function (e, t) {
                if (N(t)) {
                  const i = e.stopImmediatePropagation;
                  return (
                    (e.stopImmediatePropagation = () => {
                      i.call(e), (e._stopped = !0);
                    }),
                    t.map((e) => (t) => !t._stopped && e && e(t))
                  );
                }
                return t;
              })(e, i.value),
              t,
              5,
              [e]
            );
          };
          return (
            (i.value = e),
            (i.attached = (() =>
              Ba || (Wa.then(() => (Ba = 0)), (Ba = Date.now())))()),
            i
          );
        })(n, a));
        Ya(e, i, r, o);
      } else
        r &&
          (!(function (e, t, i, n) {
            e.removeEventListener(t, i, n);
          })(e, i, r, o),
          (s[t] = void 0));
    }
  }
  const Ra = /(?:Once|Passive|Capture)$/;
  let Ba = 0;
  const Wa = Promise.resolve();
  const Fa = /^on[a-z]/;
  const Va = "undefined" != typeof HTMLElement ? HTMLElement : class {};
  class Ha extends Va {
    constructor(e, t = {}, i) {
      super(),
        (this._def = e),
        (this._props = t),
        (this._instance = null),
        (this._connected = !1),
        (this._resolved = !1),
        (this._numberProps = null),
        this.shadowRoot && i
          ? i(this._createVNode(), this.shadowRoot)
          : (this.attachShadow({ mode: "open" }),
            this._def.__asyncLoader || this._resolveProps(this._def));
    }
    connectedCallback() {
      (this._connected = !0),
        this._instance ||
          (this._resolved ? this._update() : this._resolveDef());
    }
    disconnectedCallback() {
      (this._connected = !1),
        Rt(() => {
          this._connected ||
            (Os(null, this.shadowRoot), (this._instance = null));
        });
    }
    _resolveDef() {
      this._resolved = !0;
      for (let i = 0; i < this.attributes.length; i++)
        this._setAttr(this.attributes[i].name);
      new MutationObserver((e) => {
        for (const t of e) this._setAttr(t.attributeName);
      }).observe(this, { attributes: !0 });
      const e = (e, t = !1) => {
          const { props: i, styles: n } = e;
          let a;
          if (i && !N(i))
            for (const s in i) {
              const e = i[s];
              (e === Number || (e && e.type === Number)) &&
                (s in this._props && (this._props[s] = Y(this._props[s])),
                ((a || (a = Object.create(null)))[w(s)] = !0));
            }
          (this._numberProps = a),
            t && this._resolveProps(e),
            this._applyStyles(n),
            this._update();
        },
        t = this._def.__asyncLoader;
      t ? t().then((t) => e(t, !0)) : e(this._def);
    }
    _resolveProps(e) {
      const { props: t } = e,
        i = N(t) ? t : Object.keys(t || {});
      for (const n of Object.keys(this))
        "_" !== n[0] && i.includes(n) && this._setProp(n, this[n], !0, !1);
      for (const n of i.map(w))
        Object.defineProperty(this, n, {
          get() {
            return this._getProp(n);
          },
          set(e) {
            this._setProp(n, e);
          },
        });
    }
    _setAttr(e) {
      let t = this.getAttribute(e);
      const i = w(e);
      this._numberProps && this._numberProps[i] && (t = Y(t)),
        this._setProp(i, t, !1);
    }
    _getProp(e) {
      return this._props[e];
    }
    _setProp(e, t, i = !0, n = !0) {
      t !== this._props[e] &&
        ((this._props[e] = t),
        n && this._instance && this._update(),
        i &&
          (!0 === t
            ? this.setAttribute(E(e), "")
            : "string" == typeof t || "number" == typeof t
            ? this.setAttribute(E(e), t + "")
            : t || this.removeAttribute(E(e))));
    }
    _update() {
      Os(this._createVNode(), this.shadowRoot);
    }
    _createVNode() {
      const e = na(this._def, u({}, this._props));
      return (
        this._instance ||
          (e.ce = (e) => {
            (this._instance = e), (e.isCE = !0);
            const t = (e, t) => {
              this.dispatchEvent(new CustomEvent(e, { detail: t }));
            };
            e.emit = (e, ...i) => {
              t(e, i), E(e) !== e && t(E(e), i);
            };
            let i = this;
            for (; (i = i && (i.parentNode || i.host)); )
              if (i instanceof Ha) {
                (e.parent = i._instance), (e.provides = i._instance.provides);
                break;
              }
          }),
        e
      );
    }
    _applyStyles(e) {
      e &&
        e.forEach((e) => {
          const t = document.createElement("style");
          (t.textContent = e), this.shadowRoot.appendChild(t);
        });
    }
  }
  const Za = "transition",
    Ga = "animation",
    Ja = (e, { slots: t }) =>
      ka(
        yi,
        (function (e) {
          const t = {};
          for (const u in e) u in $a || (t[u] = e[u]);
          if (!1 === e.css) return t;
          const {
              name: i = "v",
              type: n,
              duration: a,
              enterFromClass: s = `${i}-enter-from`,
              enterActiveClass: r = `${i}-enter-active`,
              enterToClass: o = `${i}-enter-to`,
              appearFromClass: M = s,
              appearActiveClass: l = r,
              appearToClass: c = o,
              leaveFromClass: g = `${i}-leave-from`,
              leaveActiveClass: d = `${i}-leave-active`,
              leaveToClass: N = `${i}-leave-to`,
            } = e,
            D = (function (e) {
              if (null == e) return null;
              if (T(e)) return [Xa(e.enter), Xa(e.leave)];
              {
                const t = Xa(e);
                return [t, t];
              }
            })(a),
            I = D && D[0],
            y = D && D[1],
            {
              onBeforeEnter: j,
              onEnter: p,
              onEnterCancelled: z,
              onLeave: h,
              onLeaveCancelled: A,
              onBeforeAppear: m = j,
              onAppear: x = p,
              onAppearCancelled: f = z,
            } = t,
            k = (e, t, i) => {
              ts(e, t ? c : o), ts(e, t ? l : r), i && i();
            },
            L = (e, t) => {
              (e._isLeaving = !1), ts(e, g), ts(e, N), ts(e, d), t && t();
            },
            O = (e) => (t, i) => {
              const a = e ? x : p,
                r = () => k(t, e, i);
              Ka(a, [t, r]),
                is(() => {
                  ts(t, e ? M : s), es(t, e ? c : o), qa(a) || as(t, n, I, r);
                });
            };
          return u(t, {
            onBeforeEnter(e) {
              Ka(j, [e]), es(e, s), es(e, r);
            },
            onBeforeAppear(e) {
              Ka(m, [e]), es(e, M), es(e, l);
            },
            onEnter: O(!1),
            onAppear: O(!0),
            onLeave(e, t) {
              e._isLeaving = !0;
              const i = () => L(e, t);
              es(e, g),
                document.body.offsetHeight,
                es(e, d),
                is(() => {
                  e._isLeaving && (ts(e, g), es(e, N), qa(h) || as(e, n, y, i));
                }),
                Ka(h, [e, i]);
            },
            onEnterCancelled(e) {
              k(e, !1), Ka(z, [e]);
            },
            onAppearCancelled(e) {
              k(e, !0), Ka(f, [e]);
            },
            onLeaveCancelled(e) {
              L(e), Ka(A, [e]);
            },
          });
        })(e),
        t
      );
  Ja.displayName = "Transition";
  const $a = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  };
  Ja.props = u({}, Di, $a);
  const Ka = (e, t = []) => {
      N(e) ? e.forEach((e) => e(...t)) : e && e(...t);
    },
    qa = (e) => !!e && (N(e) ? e.some((e) => e.length > 1) : e.length > 1);
  function Xa(e) {
    return Y(e);
  }
  function es(e, t) {
    t.split(/\s+/).forEach((t) => t && e.classList.add(t)),
      (e._vtc || (e._vtc = new Set())).add(t);
  }
  function ts(e, t) {
    t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
    const { _vtc: i } = e;
    i && (i.delete(t), i.size || (e._vtc = void 0));
  }
  function is(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let ns = 0;
  function as(e, t, i, n) {
    const a = (e._endId = ++ns),
      s = () => {
        a === e._endId && n();
      };
    if (i) return setTimeout(s, i);
    const {
      type: r,
      timeout: o,
      propCount: M,
    } = (function (e, t) {
      const i = window.getComputedStyle(e),
        n = (e) => (i[e] || "").split(", "),
        a = n("transitionDelay"),
        s = n("transitionDuration"),
        r = ss(a, s),
        o = n("animationDelay"),
        M = n("animationDuration"),
        l = ss(o, M);
      let u = null,
        c = 0,
        g = 0;
      t === Za
        ? r > 0 && ((u = Za), (c = r), (g = s.length))
        : t === Ga
        ? l > 0 && ((u = Ga), (c = l), (g = M.length))
        : ((c = Math.max(r, l)),
          (u = c > 0 ? (r > l ? Za : Ga) : null),
          (g = u ? (u === Za ? s.length : M.length) : 0));
      const d =
        u === Za &&
        /\b(transform|all)(,|$)/.test(n("transitionProperty").toString());
      return { type: u, timeout: c, propCount: g, hasTransform: d };
    })(e, t);
    if (!r) return n();
    const l = r + "end";
    let u = 0;
    const c = () => {
        e.removeEventListener(l, g), s();
      },
      g = (t) => {
        t.target === e && ++u >= M && c();
      };
    setTimeout(() => {
      u < M && c();
    }, o + 1),
      e.addEventListener(l, g);
  }
  function ss(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((t, i) => rs(t) + rs(e[i])));
  }
  function rs(e) {
    return 1e3 * Number(e.slice(0, -1).replace(",", "."));
  }
  const os = (e) => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return N(t) ? (e) => U(t, e) : t;
  };
  function Ms(e) {
    e.target.composing = !0;
  }
  function ls(e) {
    const t = e.target;
    t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
  }
  const us = {
      created(e, { modifiers: { lazy: t, trim: i, number: n } }, a) {
        e._assign = os(a);
        const s = n || (a.props && "number" === a.props.type);
        Ya(e, t ? "change" : "input", (t) => {
          if (t.target.composing) return;
          let n = e.value;
          i && (n = n.trim()), s && (n = _(n)), e._assign(n);
        }),
          i &&
            Ya(e, "change", () => {
              e.value = e.value.trim();
            }),
          t ||
            (Ya(e, "compositionstart", Ms),
            Ya(e, "compositionend", ls),
            Ya(e, "change", ls));
      },
      mounted(e, { value: t }) {
        e.value = null == t ? "" : t;
      },
      beforeUpdate(
        e,
        { value: t, modifiers: { lazy: i, trim: n, number: a } },
        s
      ) {
        if (((e._assign = os(s)), e.composing)) return;
        if (document.activeElement === e && "range" !== e.type) {
          if (i) return;
          if (n && e.value.trim() === t) return;
          if ((a || "number" === e.type) && _(e.value) === t) return;
        }
        const r = null == t ? "" : t;
        e.value !== r && (e.value = r);
      },
    },
    cs = {
      deep: !0,
      created(e, t, i) {
        (e._assign = os(i)),
          Ya(e, "change", () => {
            const t = e._modelValue,
              i = Is(e),
              n = e.checked,
              a = e._assign;
            if (N(t)) {
              const e = q(t, i),
                s = -1 !== e;
              if (n && !s) a(t.concat(i));
              else if (!n && s) {
                const i = [...t];
                i.splice(e, 1), a(i);
              }
            } else if (I(t)) {
              const e = new Set(t);
              n ? e.add(i) : e.delete(i), a(e);
            } else a(ys(e, n));
          });
      },
      mounted: gs,
      beforeUpdate(e, t, i) {
        (e._assign = os(i)), gs(e, t, i);
      },
    };
  function gs(e, { value: t, oldValue: i }, n) {
    (e._modelValue = t),
      N(t)
        ? (e.checked = q(t, n.props.value) > -1)
        : I(t)
        ? (e.checked = t.has(n.props.value))
        : t !== i && (e.checked = K(t, ys(e, !0)));
  }
  const ds = {
      created(e, { value: t }, i) {
        (e.checked = K(t, i.props.value)),
          (e._assign = os(i)),
          Ya(e, "change", () => {
            e._assign(Is(e));
          });
      },
      beforeUpdate(e, { value: t, oldValue: i }, n) {
        (e._assign = os(n)), t !== i && (e.checked = K(t, n.props.value));
      },
    },
    Ns = {
      deep: !0,
      created(e, { value: t, modifiers: { number: i } }, n) {
        const a = I(t);
        Ya(e, "change", () => {
          const t = Array.prototype.filter
            .call(e.options, (e) => e.selected)
            .map((e) => (i ? _(Is(e)) : Is(e)));
          e._assign(e.multiple ? (a ? new Set(t) : t) : t[0]);
        }),
          (e._assign = os(n));
      },
      mounted(e, { value: t }) {
        Ds(e, t);
      },
      beforeUpdate(e, t, i) {
        e._assign = os(i);
      },
      updated(e, { value: t }) {
        Ds(e, t);
      },
    };
  function Ds(e, t) {
    const i = e.multiple;
    if (!i || N(t) || I(t)) {
      for (let n = 0, a = e.options.length; n < a; n++) {
        const a = e.options[n],
          s = Is(a);
        if (i) N(t) ? (a.selected = q(t, s) > -1) : (a.selected = t.has(s));
        else if (K(Is(a), t))
          return void (e.selectedIndex !== n && (e.selectedIndex = n));
      }
      i || -1 === e.selectedIndex || (e.selectedIndex = -1);
    }
  }
  function Is(e) {
    return "_value" in e ? e._value : e.value;
  }
  function ys(e, t) {
    const i = t ? "_trueValue" : "_falseValue";
    return i in e ? e[i] : t;
  }
  const js = {
    created(e, t, i) {
      ps(e, t, i, null, "created");
    },
    mounted(e, t, i) {
      ps(e, t, i, null, "mounted");
    },
    beforeUpdate(e, t, i, n) {
      ps(e, t, i, n, "beforeUpdate");
    },
    updated(e, t, i, n) {
      ps(e, t, i, n, "updated");
    },
  };
  function ps(e, t, i, n, a) {
    const s = (function (e, t) {
      switch (e) {
        case "SELECT":
          return Ns;
        case "TEXTAREA":
          return us;
        default:
          switch (t) {
            case "checkbox":
              return cs;
            case "radio":
              return ds;
            default:
              return us;
          }
      }
    })(e.tagName, i.props && i.props.type)[a];
    s && s(e, t, i, n);
  }
  const zs = ["ctrl", "shift", "alt", "meta"],
    Ts = {
      stop: (e) => e.stopPropagation(),
      prevent: (e) => e.preventDefault(),
      self: (e) => e.target !== e.currentTarget,
      ctrl: (e) => !e.ctrlKey,
      shift: (e) => !e.shiftKey,
      alt: (e) => !e.altKey,
      meta: (e) => !e.metaKey,
      left: (e) => "button" in e && 0 !== e.button,
      middle: (e) => "button" in e && 1 !== e.button,
      right: (e) => "button" in e && 2 !== e.button,
      exact: (e, t) => zs.some((i) => e[`${i}Key`] && !t.includes(i)),
    },
    hs =
      (e, t) =>
      (i, ...n) => {
        for (let e = 0; e < t.length; e++) {
          const n = Ts[t[e]];
          if (n && n(i, t)) return;
        }
        return e(i, ...n);
      },
    As = {
      esc: "escape",
      space: " ",
      up: "arrow-up",
      left: "arrow-left",
      right: "arrow-right",
      down: "arrow-down",
      delete: "backspace",
    },
    ms = (e, t) => (i) => {
      if (!("key" in i)) return;
      const n = E(i.key);
      return t.some((e) => e === n || As[e] === n) ? e(i) : void 0;
    },
    xs = {
      beforeMount(e, { value: t }, { transition: i }) {
        (e._vod = "none" === e.style.display ? "" : e.style.display),
          i && t ? i.beforeEnter(e) : fs(e, t);
      },
      mounted(e, { value: t }, { transition: i }) {
        i && t && i.enter(e);
      },
      updated(e, { value: t, oldValue: i }, { transition: n }) {
        !t != !i &&
          (n
            ? t
              ? (n.beforeEnter(e), fs(e, !0), n.enter(e))
              : n.leave(e, () => {
                  fs(e, !1);
                })
            : fs(e, t));
      },
      beforeUnmount(e, { value: t }) {
        fs(e, t);
      },
    };
  function fs(e, t) {
    e.style.display = t ? e._vod : "none";
  }
  const ks = u(
    {
      patchProp: (e, t, i, n, a = !1, s, r, o, u) => {
        "class" === t
          ? (function (e, t, i) {
              const n = e._vtc;
              n && (t = (t ? [t, ...n] : [...n]).join(" ")),
                null == t
                  ? e.removeAttribute("class")
                  : i
                  ? e.setAttribute("class", t)
                  : (e.className = t);
            })(e, n, a)
          : "style" === t
          ? (function (e, t, i) {
              const n = e.style,
                a = p(i);
              if (i && !a) {
                if (t && !p(t)) for (const e in t) null == i[e] && Ca(n, e, "");
                for (const e in i) Ca(n, e, i[e]);
              } else {
                const s = n.display;
                a
                  ? t !== i && (n.cssText = i)
                  : t && e.removeAttribute("style"),
                  "_vod" in e && (n.display = s);
              }
            })(e, i, n)
          : M(t)
          ? l(t) || Pa(e, t, 0, n, r)
          : (
              "." === t[0]
                ? ((t = t.slice(1)), 1)
                : "^" === t[0]
                ? ((t = t.slice(1)), 0)
                : (function (e, t, i, n) {
                    if (n)
                      return (
                        "innerHTML" === t ||
                        "textContent" === t ||
                        !!(t in e && Fa.test(t) && j(i))
                      );
                    if (
                      "spellcheck" === t ||
                      "draggable" === t ||
                      "translate" === t
                    )
                      return !1;
                    if ("form" === t) return !1;
                    if ("list" === t && "INPUT" === e.tagName) return !1;
                    if ("type" === t && "TEXTAREA" === e.tagName) return !1;
                    if (Fa.test(t) && p(i)) return !1;
                    return t in e;
                  })(e, t, n, a)
            )
          ? (function (e, t, i, n, a, s, r) {
              if ("innerHTML" === t || "textContent" === t)
                return n && r(n, a, s), void (e[t] = null == i ? "" : i);
              const o = e.tagName;
              if ("value" === t && "PROGRESS" !== o && !o.includes("-")) {
                e._value = i;
                const n = null == i ? "" : i;
                return (
                  ("OPTION" === o ? e.getAttribute("value") : e.value) !== n &&
                    (e.value = n),
                  void (null == i && e.removeAttribute(t))
                );
              }
              let M = !1;
              if ("" === i || null == i) {
                const n = typeof e[t];
                "boolean" === n
                  ? (i = $(i))
                  : null == i && "string" === n
                  ? ((i = ""), (M = !0))
                  : "number" === n && ((i = 0), (M = !0));
              }
              try {
                e[t] = i;
              } catch (l) {}
              M && e.removeAttribute(t);
            })(e, t, n, s, r, o, u)
          : ("true-value" === t
              ? (e._trueValue = n)
              : "false-value" === t && (e._falseValue = n),
            (function (e, t, i, n, a) {
              if (n && t.startsWith("xlink:"))
                null == i
                  ? e.removeAttributeNS(_a, t.slice(6, t.length))
                  : e.setAttributeNS(_a, t, i);
              else {
                const n = J(t);
                null == i || (n && !$(i))
                  ? e.removeAttribute(t)
                  : e.setAttribute(t, n ? "" : i);
              }
            })(e, t, n, a));
      },
    },
    Sa
  );
  let Ls;
  const Os = (...e) => {
    (Ls || (Ls = Un(ks))).render(...e);
  };
  /*! js-cookie v3.0.5 | MIT */ function ws(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];
      for (var n in i) e[n] = i[n];
    }
    return e;
  }
  var vs,
    Es,
    Ss = (function e(t, i) {
      function n(e, n, a) {
        if ("undefined" != typeof document) {
          "number" == typeof (a = ws({}, i, a)).expires &&
            (a.expires = new Date(Date.now() + 864e5 * a.expires)),
            a.expires && (a.expires = a.expires.toUTCString()),
            (e = encodeURIComponent(e)
              .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
              .replace(/[()]/g, escape));
          var s = "";
          for (var r in a)
            a[r] &&
              ((s += "; " + r), !0 !== a[r] && (s += "=" + a[r].split(";")[0]));
          return (document.cookie = e + "=" + t.write(n, e) + s);
        }
      }
      return Object.create(
        {
          set: n,
          get: function (e) {
            if ("undefined" != typeof document && (!arguments.length || e)) {
              for (
                var i = document.cookie ? document.cookie.split("; ") : [],
                  n = {},
                  a = 0;
                a < i.length;
                a++
              ) {
                var s = i[a].split("="),
                  r = s.slice(1).join("=");
                try {
                  var o = decodeURIComponent(s[0]);
                  if (((n[o] = t.read(r, o)), e === o)) break;
                } catch (M) {}
              }
              return e ? n[e] : n;
            }
          },
          remove: function (e, t) {
            n(e, "", ws({}, t, { expires: -1 }));
          },
          withAttributes: function (t) {
            return e(this.converter, ws({}, this.attributes, t));
          },
          withConverter: function (t) {
            return e(ws({}, this.converter, t), this.attributes);
          },
        },
        {
          attributes: { value: Object.freeze(i) },
          converter: { value: Object.freeze(t) },
        }
      );
    })(
      {
        read: function (e) {
          return (
            '"' === e[0] && (e = e.slice(1, -1)),
            e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
          );
        },
        write: function (e) {
          return encodeURIComponent(e).replace(
            /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
            decodeURIComponent
          );
        },
      },
      { path: "/" }
    ),
    bs =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {},
    Cs = { exports: {} };
  (vs = Cs),
    (Es = Cs.exports),
    (function (e, t) {
      var i = "function",
        n = "undefined",
        a = "object",
        s = "string",
        r = "major",
        o = "model",
        M = "name",
        l = "type",
        u = "vendor",
        c = "version",
        g = "architecture",
        d = "console",
        N = "mobile",
        D = "tablet",
        I = "smarttv",
        y = "wearable",
        j = "embedded",
        p = "Amazon",
        z = "Apple",
        T = "ASUS",
        h = "BlackBerry",
        A = "Firefox",
        m = "Google",
        x = "Huawei",
        f = "LG",
        k = "Microsoft",
        L = "Motorola",
        O = "Opera",
        w = "Samsung",
        v = "Sharp",
        E = "Sony",
        S = "Xiaomi",
        b = "Zebra",
        C = "Facebook",
        U = "Chromium OS",
        Q = "Mac OS",
        _ = function (e) {
          for (var t = {}, i = 0; i < e.length; i++)
            t[e[i].toUpperCase()] = e[i];
          return t;
        },
        Y = function (e, t) {
          return typeof e === s && -1 !== P(t).indexOf(P(e));
        },
        P = function (e) {
          return e.toLowerCase();
        },
        R = function (e, t) {
          if (typeof e === s)
            return (
              (e = e.replace(/^\s\s*/, "")),
              typeof t === n ? e : e.substring(0, 350)
            );
        },
        B = function (e, n) {
          for (var s, r, o, M, l, u, c = 0; c < n.length && !l; ) {
            var g = n[c],
              d = n[c + 1];
            for (s = r = 0; s < g.length && !l && g[s]; )
              if ((l = g[s++].exec(e)))
                for (o = 0; o < d.length; o++)
                  (u = l[++r]),
                    typeof (M = d[o]) === a && M.length > 0
                      ? 2 === M.length
                        ? typeof M[1] == i
                          ? (this[M[0]] = M[1].call(this, u))
                          : (this[M[0]] = M[1])
                        : 3 === M.length
                        ? typeof M[1] !== i || (M[1].exec && M[1].test)
                          ? (this[M[0]] = u ? u.replace(M[1], M[2]) : t)
                          : (this[M[0]] = u ? M[1].call(this, u, M[2]) : t)
                        : 4 === M.length &&
                          (this[M[0]] = u
                            ? M[3].call(this, u.replace(M[1], M[2]))
                            : t)
                      : (this[M] = u || t);
            c += 2;
          }
        },
        W = function (e, i) {
          for (var n in i)
            if (typeof i[n] === a && i[n].length > 0) {
              for (var s = 0; s < i[n].length; s++)
                if (Y(i[n][s], e)) return "?" === n ? t : n;
            } else if (Y(i[n], e)) return "?" === n ? t : n;
          return e;
        },
        F = {
          ME: "4.90",
          "NT 3.11": "NT3.51",
          "NT 4.0": "NT4.0",
          2e3: "NT 5.0",
          XP: ["NT 5.1", "NT 5.2"],
          Vista: "NT 6.0",
          7: "NT 6.1",
          8: "NT 6.2",
          8.1: "NT 6.3",
          10: ["NT 6.4", "NT 10.0"],
          RT: "ARM",
        },
        V = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [c, [M, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [c, [M, "Edge"]],
            [
              /(opera mini)\/([-\w\.]+)/i,
              /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
              /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
            ],
            [M, c],
            [/opios[\/ ]+([\w\.]+)/i],
            [c, [M, "Opera Mini"]],
            [/\bopr\/([\w\.]+)/i],
            [c, [M, O]],
            [
              /(kindle)\/([\w\.]+)/i,
              /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
              /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
              /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
              /(?:ms|\()(ie) ([\w\.]+)/i,
              /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
              /(heytap|ovi)browser\/([\d\.]+)/i,
              /(weibo)__([\d\.]+)/i,
            ],
            [M, c],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [c, [M, "UCBrowser"]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
            [c, [M, "WeChat(Win) Desktop"]],
            [/micromessenger\/([\w\.]+)/i],
            [c, [M, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [c, [M, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [c, [M, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [c, [M, "Yandex"]],
            [/(avast|avg)\/([\w\.]+)/i],
            [[M, /(.+)/, "$1 Secure Browser"], c],
            [/\bfocus\/([\w\.]+)/i],
            [c, [M, "Firefox Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [c, [M, "Opera Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [c, [M, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [c, [M, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [c, [M, "Opera Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [c, [M, "MIUI Browser"]],
            [/fxios\/([-\w\.]+)/i],
            [c, [M, A]],
            [/\bqihu|(qi?ho?o?|360)browser/i],
            [[M, "360 Browser"]],
            [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
            [[M, /(.+)/, "$1 Browser"], c],
            [/(comodo_dragon)\/([\w\.]+)/i],
            [[M, /_/g, " "], c],
            [
              /(electron)\/([\w\.]+) safari/i,
              /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
              /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
            ],
            [M, c],
            [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
            [M],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [[M, C], c],
            [
              /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
              /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
              /safari (line)\/([\w\.]+)/i,
              /\b(line)\/([\w\.]+)\/iab/i,
              /(chromium|instagram)[\/ ]([-\w\.]+)/i,
            ],
            [M, c],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [c, [M, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [c, [M, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [c, [M, "Chrome Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [[M, "Chrome WebView"], c],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [c, [M, "Android Browser"]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [M, c],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [c, [M, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [c, M],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [
              M,
              [
                c,
                W,
                {
                  "1.0": "/8",
                  1.2: "/1",
                  1.3: "/3",
                  "2.0": "/412",
                  "2.0.2": "/416",
                  "2.0.3": "/417",
                  "2.0.4": "/419",
                  "?": "/",
                },
              ],
            ],
            [/(webkit|khtml)\/([\w\.]+)/i],
            [M, c],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [[M, "Netscape"], c],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [c, [M, "Firefox Reality"]],
            [
              /ekiohf.+(flow)\/([\w\.]+)/i,
              /(swiftfox)/i,
              /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
              /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
              /(firefox)\/([\w\.]+)/i,
              /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
              /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
              /(links) \(([\w\.]+)/i,
              /panasonic;(viera)/i,
            ],
            [M, c],
            [/(cobalt)\/([\w\.]+)/i],
            [M, [c, /master.|lts./, ""]],
          ],
          cpu: [
            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
            [[g, "amd64"]],
            [/(ia32(?=;))/i],
            [[g, P]],
            [/((?:i[346]|x)86)[;\)]/i],
            [[g, "ia32"]],
            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
            [[g, "arm64"]],
            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
            [[g, "armhf"]],
            [/windows (ce|mobile); ppc;/i],
            [[g, "arm"]],
            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
            [[g, /ower/, "", P]],
            [/(sun4\w)[;\)]/i],
            [[g, "sparc"]],
            [
              /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
            ],
            [[g, P]],
          ],
          device: [
            [
              /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
            ],
            [o, [u, w], [l, D]],
            [
              /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
              /samsung[- ]([-\w]+)/i,
              /sec-(sgh\w+)/i,
            ],
            [o, [u, w], [l, N]],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [o, [u, z], [l, N]],
            [
              /\((ipad);[-\w\),; ]+apple/i,
              /applecoremedia\/[\w\.]+ \((ipad)/i,
              /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
            ],
            [o, [u, z], [l, D]],
            [/(macintosh);/i],
            [o, [u, z]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [o, [u, v], [l, N]],
            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
            [o, [u, x], [l, D]],
            [
              /(?:huawei|honor)([-\w ]+)[;\)]/i,
              /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
            ],
            [o, [u, x], [l, N]],
            [
              /\b(poco[\w ]+)(?: bui|\))/i,
              /\b; (\w+) build\/hm\1/i,
              /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
              /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
              /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
            ],
            [
              [o, /_/g, " "],
              [u, S],
              [l, N],
            ],
            [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
            [
              [o, /_/g, " "],
              [u, S],
              [l, D],
            ],
            [
              /; (\w+) bui.+ oppo/i,
              /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
            ],
            [o, [u, "OPPO"], [l, N]],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [o, [u, "Vivo"], [l, N]],
            [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
            [o, [u, "Realme"], [l, N]],
            [
              /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
              /\bmot(?:orola)?[- ](\w*)/i,
              /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
            ],
            [o, [u, L], [l, N]],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [o, [u, L], [l, D]],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [o, [u, f], [l, D]],
            [
              /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
              /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
              /\blg-?([\d\w]+) bui/i,
            ],
            [o, [u, f], [l, N]],
            [
              /(ideatab[-\w ]+)/i,
              /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
            ],
            [o, [u, "Lenovo"], [l, D]],
            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
            [
              [o, /_/g, " "],
              [u, "Nokia"],
              [l, N],
            ],
            [/(pixel c)\b/i],
            [o, [u, m], [l, D]],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [o, [u, m], [l, N]],
            [
              /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
            ],
            [o, [u, E], [l, N]],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [o, "Xperia Tablet"],
              [u, E],
              [l, D],
            ],
            [
              / (kb2005|in20[12]5|be20[12][59])\b/i,
              /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
            ],
            [o, [u, "OnePlus"], [l, N]],
            [
              /(alexa)webm/i,
              /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
              /(kf[a-z]+)( bui|\)).+silk\//i,
            ],
            [o, [u, p], [l, D]],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [o, /(.+)/g, "Fire Phone $1"],
              [u, p],
              [l, N],
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [o, u, [l, D]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [o, [u, h], [l, N]],
            [
              /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
            ],
            [o, [u, T], [l, D]],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [o, [u, T], [l, N]],
            [/(nexus 9)/i],
            [o, [u, "HTC"], [l, D]],
            [
              /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
              /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
              /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
            ],
            [u, [o, /_/g, " "], [l, N]],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [o, [u, "Acer"], [l, D]],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [o, [u, "Meizu"], [l, N]],
            [
              /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
              /(hp) ([\w ]+\w)/i,
              /(asus)-?(\w+)/i,
              /(microsoft); (lumia[\w ]+)/i,
              /(lenovo)[-_ ]?([-\w]+)/i,
              /(jolla)/i,
              /(oppo) ?([\w ]+) bui/i,
            ],
            [u, o, [l, N]],
            [
              /(kobo)\s(ereader|touch)/i,
              /(archos) (gamepad2?)/i,
              /(hp).+(touchpad(?!.+tablet)|tablet)/i,
              /(kindle)\/([\w\.]+)/i,
              /(nook)[\w ]+build\/(\w+)/i,
              /(dell) (strea[kpr\d ]*[\dko])/i,
              /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
              /(trinity)[- ]*(t\d{3}) bui/i,
              /(gigaset)[- ]+(q\w{1,9}) bui/i,
              /(vodafone) ([\w ]+)(?:\)| bui)/i,
            ],
            [u, o, [l, D]],
            [/(surface duo)/i],
            [o, [u, k], [l, D]],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [o, [u, "Fairphone"], [l, N]],
            [/(u304aa)/i],
            [o, [u, "AT&T"], [l, N]],
            [/\bsie-(\w*)/i],
            [o, [u, "Siemens"], [l, N]],
            [/\b(rct\w+) b/i],
            [o, [u, "RCA"], [l, D]],
            [/\b(venue[\d ]{2,7}) b/i],
            [o, [u, "Dell"], [l, D]],
            [/\b(q(?:mv|ta)\w+) b/i],
            [o, [u, "Verizon"], [l, D]],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [o, [u, "Barnes & Noble"], [l, D]],
            [/\b(tm\d{3}\w+) b/i],
            [o, [u, "NuVision"], [l, D]],
            [/\b(k88) b/i],
            [o, [u, "ZTE"], [l, D]],
            [/\b(nx\d{3}j) b/i],
            [o, [u, "ZTE"], [l, N]],
            [/\b(gen\d{3}) b.+49h/i],
            [o, [u, "Swiss"], [l, N]],
            [/\b(zur\d{3}) b/i],
            [o, [u, "Swiss"], [l, D]],
            [/\b((zeki)?tb.*\b) b/i],
            [o, [u, "Zeki"], [l, D]],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [[u, "Dragon Touch"], o, [l, D]],
            [/\b(ns-?\w{0,9}) b/i],
            [o, [u, "Insignia"], [l, D]],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [o, [u, "NextBook"], [l, D]],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [[u, "Voice"], o, [l, N]],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [[u, "LvTel"], o, [l, N]],
            [/\b(ph-1) /i],
            [o, [u, "Essential"], [l, N]],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [o, [u, "Envizen"], [l, D]],
            [/\b(trio[-\w\. ]+) b/i],
            [o, [u, "MachSpeed"], [l, D]],
            [/\btu_(1491) b/i],
            [o, [u, "Rotor"], [l, D]],
            [/(shield[\w ]+) b/i],
            [o, [u, "Nvidia"], [l, D]],
            [/(sprint) (\w+)/i],
            [u, o, [l, N]],
            [/(kin\.[onetw]{3})/i],
            [
              [o, /\./g, " "],
              [u, k],
              [l, N],
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [o, [u, b], [l, D]],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [o, [u, b], [l, N]],
            [/smart-tv.+(samsung)/i],
            [u, [l, I]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [o, /^/, "SmartTV"],
              [u, w],
              [l, I],
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [u, f],
              [l, I],
            ],
            [/(apple) ?tv/i],
            [u, [o, "Apple TV"], [l, I]],
            [/crkey/i],
            [
              [o, "Chromecast"],
              [u, m],
              [l, I],
            ],
            [/droid.+aft(\w)( bui|\))/i],
            [o, [u, p], [l, I]],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [o, [u, v], [l, I]],
            [/(bravia[\w ]+)( bui|\))/i],
            [o, [u, E], [l, I]],
            [/(mitv-\w{5}) bui/i],
            [o, [u, S], [l, I]],
            [/Hbbtv.*(technisat) (.*);/i],
            [u, o, [l, I]],
            [
              /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
              /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
            ],
            [
              [u, R],
              [o, R],
              [l, I],
            ],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [[l, I]],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [u, o, [l, d]],
            [/droid.+; (shield) bui/i],
            [o, [u, "Nvidia"], [l, d]],
            [/(playstation [345portablevi]+)/i],
            [o, [u, E], [l, d]],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [o, [u, k], [l, d]],
            [/((pebble))app/i],
            [u, o, [l, y]],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [o, [u, z], [l, y]],
            [/droid.+; (glass) \d/i],
            [o, [u, m], [l, y]],
            [/droid.+; (wt63?0{2,3})\)/i],
            [o, [u, b], [l, y]],
            [/(quest( 2| pro)?)/i],
            [o, [u, C], [l, y]],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [u, [l, j]],
            [/(aeobc)\b/i],
            [o, [u, p], [l, j]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
            [o, [l, N]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [o, [l, D]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [[l, D]],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [[l, N]],
            [/(android[-\w\. ]{0,9});.+buil/i],
            [o, [u, "Generic"]],
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [c, [M, "EdgeHTML"]],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [c, [M, "Blink"]],
            [
              /(presto)\/([\w\.]+)/i,
              /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
              /ekioh(flow)\/([\w\.]+)/i,
              /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
              /(icab)[\/ ]([23]\.[\d\.]+)/i,
              /\b(libweb)/i,
            ],
            [M, c],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [c, M],
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [M, c],
            [
              /(windows) nt 6\.2; (arm)/i,
              /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
              /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
            ],
            [M, [c, W, F]],
            [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [M, "Windows"],
              [c, W, F],
            ],
            [
              /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
              /ios;fbsv\/([\d\.]+)/i,
              /cfnetwork\/.+darwin/i,
            ],
            [
              [c, /_/g, "."],
              [M, "iOS"],
            ],
            [
              /(mac os x) ?([\w\. ]*)/i,
              /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
            ],
            [
              [M, Q],
              [c, /_/g, "."],
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [c, M],
            [
              /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
              /(blackberry)\w*\/([\w\.]*)/i,
              /(tizen|kaios)[\/ ]([\w\.]+)/i,
              /\((series40);/i,
            ],
            [M, c],
            [/\(bb(10);/i],
            [c, [M, h]],
            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
            [c, [M, "Symbian"]],
            [
              /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
            ],
            [c, [M, "Firefox OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [c, [M, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [c, [M, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [c, [M, "Chromecast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [[M, U], c],
            [
              /panasonic;(viera)/i,
              /(netrange)mmh/i,
              /(nettv)\/(\d+\.[\w\.]+)/i,
              /(nintendo|playstation) ([wids345portablevuch]+)/i,
              /(xbox); +xbox ([^\);]+)/i,
              /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
              /(mint)[\/\(\) ]?(\w*)/i,
              /(mageia|vectorlinux)[; ]/i,
              /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
              /(hurd|linux) ?([\w\.]*)/i,
              /(gnu) ?([\w\.]*)/i,
              /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
              /(haiku) (\w+)/i,
            ],
            [M, c],
            [/(sunos) ?([\w\.\d]*)/i],
            [[M, "Solaris"], c],
            [
              /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
              /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
              /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
              /(unix) ?([\w\.]*)/i,
            ],
            [M, c],
          ],
        },
        H = function (r, o) {
          if ((typeof r === a && ((o = r), (r = t)), !(this instanceof H)))
            return new H(r, o).getResult();
          var M = typeof e !== n && e.navigator ? e.navigator : t,
            l = r || (M && M.userAgent ? M.userAgent : ""),
            u = M && M.userAgentData ? M.userAgentData : t,
            c = o
              ? (function (e, t) {
                  var i = {};
                  for (var n in e)
                    t[n] && t[n].length % 2 == 0
                      ? (i[n] = t[n].concat(e[n]))
                      : (i[n] = e[n]);
                  return i;
                })(V, o)
              : V,
            g = M && M.userAgent == l;
          return (
            (this.getBrowser = function () {
              var e,
                n = {};
              return (
                (n.name = t),
                (n.version = t),
                B.call(n, l, c.browser),
                (n.major =
                  typeof (e = n.version) === s
                    ? e.replace(/[^\d\.]/g, "").split(".")[0]
                    : t),
                g &&
                  M &&
                  M.brave &&
                  typeof M.brave.isBrave == i &&
                  (n.name = "Brave"),
                n
              );
            }),
            (this.getCPU = function () {
              var e = {};
              return (e.architecture = t), B.call(e, l, c.cpu), e;
            }),
            (this.getDevice = function () {
              var e = {};
              return (
                (e.vendor = t),
                (e.model = t),
                (e.type = t),
                B.call(e, l, c.device),
                g && !e.type && u && u.mobile && (e.type = N),
                g &&
                  "Macintosh" == e.model &&
                  M &&
                  typeof M.standalone !== n &&
                  M.maxTouchPoints &&
                  M.maxTouchPoints > 2 &&
                  ((e.model = "iPad"), (e.type = D)),
                e
              );
            }),
            (this.getEngine = function () {
              var e = {};
              return (e.name = t), (e.version = t), B.call(e, l, c.engine), e;
            }),
            (this.getOS = function () {
              var e = {};
              return (
                (e.name = t),
                (e.version = t),
                B.call(e, l, c.os),
                g &&
                  !e.name &&
                  u &&
                  "Unknown" != u.platform &&
                  (e.name = u.platform
                    .replace(/chrome os/i, U)
                    .replace(/macos/i, Q)),
                e
              );
            }),
            (this.getResult = function () {
              return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU(),
              };
            }),
            (this.getUA = function () {
              return l;
            }),
            (this.setUA = function (e) {
              return (
                (l = typeof e === s && e.length > 350 ? R(e, 350) : e), this
              );
            }),
            this.setUA(l),
            this
          );
        };
      (H.VERSION = "1.0.35"),
        (H.BROWSER = _([M, c, r])),
        (H.CPU = _([g])),
        (H.DEVICE = _([o, u, l, d, N, I, D, y, j])),
        (H.ENGINE = H.OS = _([M, c])),
        vs.exports && (Es = vs.exports = H),
        (Es.UAParser = H);
      var Z = typeof e !== n && (e.jQuery || e.Zepto);
      if (Z && !Z.ua) {
        var G = new H();
        (Z.ua = G.getResult()),
          (Z.ua.get = function () {
            return G.getUA();
          }),
          (Z.ua.set = function (e) {
            G.setUA(e);
            var t = G.getResult();
            for (var i in t) Z.ua[i] = t[i];
          });
      }
    })("object" == typeof window ? window : bs);
  var Us = Cs.exports,
    Qs = (e, t, i) =>
      new Promise((n, a) => {
        var s = (e) => {
            try {
              o(i.next(e));
            } catch (t) {
              a(t);
            }
          },
          r = (e) => {
            try {
              o(i.throw(e));
            } catch (t) {
              a(t);
            }
          },
          o = (e) =>
            e.done ? n(e.value) : Promise.resolve(e.value).then(s, r);
        o((i = i.apply(e, t)).next());
      }),
    _s = class {
      static encodeBytes(e) {
        let t = btoa(String.fromCharCode(...new Uint8Array(e)))
          .replace(/\+/g, "-")
          .replace(/\//g, "_");
        return Ys(t);
      }
      static decodeBytes(e) {
        let t = e.replace(/-/g, "+").replace(/_/g, "/"),
          i = Ys(t);
        return Uint8Array.from(atob(i), (e) => e.charCodeAt(0));
      }
    },
    Ys = (e) => {
      let t = e.indexOf("=");
      return e.slice(0, -1 === t ? e.length : t);
    },
    Ps = class {
      static createCredentialAvailable() {
        return Qs(this, null, function* () {
          let e = { securityKey: !1, platform: !1, isAvailable: !1 };
          return (
            window.PublicKeyCredential &&
              ((e.securityKey = !0),
              (e.isAvailable = !0),
              yield ((e, t) =>
                Qs(void 0, null, function* () {
                  let i,
                    n = new Promise((e) => {
                      i = setTimeout(e, t);
                    });
                  return Promise.race([e, n]).then((e) => (clearTimeout(i), e));
                }))(
                window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
                  .then((t) => {
                    e.platform = t;
                  })
                  .catch(() => console.log("Something went wrong.")),
                1e3
              )),
            e
          );
        });
      }
      static parsePublicKey(e) {
        if (
          ((e.challenge = _s.decodeBytes(e.challenge.toString())),
          (e.user.id = _s.decodeBytes(e.user.id.toString())),
          e.excludeCredentials)
        )
          for (let t = 0; t < e.excludeCredentials.length; t++) {
            let i = e.excludeCredentials[t];
            i.id = _s.decodeBytes(i.id.toString());
          }
        return e;
      }
      static getTransports(e) {
        let t = [];
        return (
          e.response.getTransports &&
            "function" == typeof e.response.getTransports &&
            (t = e.response.getTransports()),
          t
        );
      }
      static createCredential(e) {
        return Qs(this, null, function* () {
          let t = { credential: null, transports: [] },
            i = this.parsePublicKey(e),
            n = yield navigator.credentials
              .create({ publicKey: i })
              .then((e) => e);
          return (
            null == n ||
              ((t.credential = n), (t.transports = this.getTransports(n))),
            t
          );
        });
      }
    },
    Rs = class {
      static parsePublicKey(e) {
        if (
          ((e.challenge = _s.decodeBytes(e.challenge.toString())),
          e.allowCredentials)
        ) {
          for (let t = 0; t < e.allowCredentials.length; t++) {
            let i = e.allowCredentials[t];
            i.id = _s.decodeBytes(i.id.toString());
          }
          return e;
        }
        return e;
      }
      static getCredential(e, t) {
        return Qs(this, null, function* () {
          return yield navigator.credentials
            .get({
              mediation: null == t ? void 0 : t.mediation,
              signal: null == t ? void 0 : t.signal,
              publicKey: this.parsePublicKey(e),
            })
            .then((e) => e);
        });
      }
      static getCredentialAvailable() {
        return Qs(this, null, function* () {
          let e = {
              securityKey: !1,
              platform: !1,
              syncedCredential: !1,
              crossDeviceCredential: !1,
              conditionalUI: !1,
              isAvailable: !1,
            },
            t = yield Ps.createCredentialAvailable();
          if (
            ((e.securityKey = t.securityKey),
            (e.platform = t.platform),
            (e.isAvailable = t.isAvailable),
            !e.securityKey)
          )
            return e;
          e.conditionalUI = yield this._isConditionalMediationAvailable();
          let i = new (class {
            constructor() {
              this.userAgent = new Us();
            }
            getSyncedCredential() {
              return !!(
                this._isiOSPasskeySupported() ||
                this._isMacPasskeySupported() ||
                this._isChromeSyncedCredential()
              );
            }
            getCrossDeviceCredential() {
              return (
                "Android" !== this.userAgent.getOS().name &&
                this.getSyncedCredential()
              );
            }
            _isiOSPasskeySupported() {
              return (
                "iOS" == this.userAgent.getOS().name &&
                parseFloat(this.userAgent.getOS().version || "") >= 16
              );
            }
            _isMacPasskeySupported() {
              return (
                "Safari" == this.userAgent.getBrowser().name &&
                parseFloat(this.userAgent.getBrowser().version || "") >= 16 &&
                "Mac OS" == this.userAgent.getOS().name
              );
            }
            _isChromeSyncedCredential() {
              var e;
              let t = null != (e = this.userAgent.getOS().name) ? e : "";
              return (
                ((null == t ? void 0 : t.includes("Windows")) ||
                  (null == t ? void 0 : t.includes("Mac OS")) ||
                  (null == t ? void 0 : t.includes("Android"))) &&
                "Chrome" == this.userAgent.getBrowser().name &&
                parseFloat(this.userAgent.getBrowser().version || "") >= 108
              );
            }
          })();
          return (
            (e.syncedCredential = i.getSyncedCredential()),
            (e.crossDeviceCredential = i.getCrossDeviceCredential()),
            e
          );
        });
      }
      static _isConditionalMediationAvailable() {
        return Qs(this, null, function* () {
          return (
            !!PublicKeyCredential.isConditionalMediationAvailable &&
            (yield PublicKeyCredential.isConditionalMediationAvailable())
          );
        });
      }
    };
  function Bs(e) {
    this.message = e;
  }
  (Bs.prototype = new Error()), (Bs.prototype.name = "InvalidCharacterError");
  var Ws =
    ("undefined" != typeof window && window.atob && window.atob.bind(window)) ||
    function (e) {
      var t = String(e).replace(/=+$/, "");
      if (t.length % 4 == 1)
        throw new Bs(
          "'atob' failed: The string to be decoded is not correctly encoded."
        );
      for (
        var i, n, a = 0, s = 0, r = "";
        (n = t.charAt(s++));
        ~n && ((i = a % 4 ? 64 * i + n : n), a++ % 4)
          ? (r += String.fromCharCode(255 & (i >> ((-2 * a) & 6))))
          : 0
      )
        n =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
            n
          );
      return r;
    };
  function Fs(e) {
    this.message = e;
  }
  function Vs(e, t) {
    if ("string" != typeof e) throw new Fs("Invalid token specified");
    var i = !0 === (t = t || {}).header ? 0 : 1;
    try {
      return JSON.parse(
        (function (e) {
          var t = e.replace(/-/g, "+").replace(/_/g, "/");
          switch (t.length % 4) {
            case 0:
              break;
            case 2:
              t += "==";
              break;
            case 3:
              t += "=";
              break;
            default:
              throw "Illegal base64url string!";
          }
          try {
            return decodeURIComponent(
              Ws(t).replace(/(.)/g, function (e, t) {
                var i = t.charCodeAt(0).toString(16).toUpperCase();
                return i.length < 2 && (i = "0" + i), "%" + i;
              })
            );
          } catch (i) {
            return Ws(t);
          }
        })(e.split(".")[i])
      );
    } catch (n) {
      throw new Fs("Invalid token specified: " + n.message);
    }
  }
  (Fs.prototype = new Error()),
    (Fs.prototype.name = "InvalidTokenError"),
    [
      EvalError,
      RangeError,
      ReferenceError,
      SyntaxError,
      TypeError,
      URIError,
      globalThis.DOMException,
      globalThis.AssertionError,
      globalThis.SystemError,
    ]
      .filter(Boolean)
      .map((e) => [e.name, e]);
  var Hs,
    Zs = class {
      encodeBytes(e) {
        let t = btoa(String.fromCharCode(...new Uint8Array(e)))
          .replace(/\+/g, "-")
          .replace(/\//g, "_");
        return Gs(t);
      }
      decodeBytes(e) {
        let t = e.replace(/-/g, "+").replace(/_/g, "/"),
          i = Gs(t);
        return Uint8Array.from(atob(i), (e) => e.charCodeAt(0));
      }
    },
    Gs = (e) => {
      let t = e.indexOf("=");
      return e.slice(0, -1 === t ? e.length : t);
    },
    Js = class extends Error {
      constructor(e, t) {
        super(),
          (this.name = "PassageError"),
          (this.statusCode = t.status),
          (this.statusText = t.statusText),
          (this.message = this._parsePsgErrorResponse(e));
      }
      _parsePsgErrorResponse(e) {
        try {
          return (e = JSON.parse(e)).error ? e.error : "";
        } catch (t) {
          return e;
        }
      }
    },
    $s =
      (((Hs = $s || {})[(Hs.MultipleChoice = 300)] = "MultipleChoice"),
      (Hs[(Hs.MovedPermanantly = 301)] = "MovedPermanantly"),
      (Hs[(Hs.Found = 302)] = "Found"),
      (Hs[(Hs.SeeOther = 303)] = "SeeOther"),
      (Hs[(Hs.NotModified = 304)] = "NotModified"),
      (Hs[(Hs.TemporaryRedirect = 307)] = "TemporaryRedirect"),
      (Hs[(Hs.PermanentRedirect = 308)] = "PermanentRedirect"),
      (Hs[(Hs.BadRequest = 400)] = "BadRequest"),
      (Hs[(Hs.Unauthorized = 401)] = "Unauthorized"),
      (Hs[(Hs.PaymentRequired = 402)] = "PaymentRequired"),
      (Hs[(Hs.Forbidden = 403)] = "Forbidden"),
      (Hs[(Hs.NotFound = 404)] = "NotFound"),
      (Hs[(Hs.MethodNotAllowed = 405)] = "MethodNotAllowed"),
      (Hs[(Hs.NotAcceptable = 406)] = "NotAcceptable"),
      (Hs[(Hs.ProxyAuthenticationRequired = 407)] =
        "ProxyAuthenticationRequired"),
      (Hs[(Hs.RequestTimeout = 408)] = "RequestTimeout"),
      (Hs[(Hs.Conflict = 409)] = "Conflict"),
      (Hs[(Hs.Gone = 410)] = "Gone"),
      (Hs[(Hs.LengthRequired = 411)] = "LengthRequired"),
      (Hs[(Hs.PreconditionFailed = 412)] = "PreconditionFailed"),
      (Hs[(Hs.PayloadTooLarge = 413)] = "PayloadTooLarge"),
      (Hs[(Hs.URITooLong = 414)] = "URITooLong"),
      (Hs[(Hs.UnsupportedMediaType = 415)] = "UnsupportedMediaType"),
      (Hs[(Hs.RangeNotSatisfiable = 416)] = "RangeNotSatisfiable"),
      (Hs[(Hs.ExpectationFailed = 417)] = "ExpectationFailed"),
      (Hs[(Hs.MisdirectedRequest = 421)] = "MisdirectedRequest"),
      (Hs[(Hs.UnprocessableEntity = 422)] = "UnprocessableEntity"),
      (Hs[(Hs.Locked = 423)] = "Locked"),
      (Hs[(Hs.FailedDependency = 424)] = "FailedDependency"),
      (Hs[(Hs.TooEarly = 425)] = "TooEarly"),
      (Hs[(Hs.UpgradeRequired = 426)] = "UpgradeRequired"),
      (Hs[(Hs.PreconditionRequired = 428)] = "PreconditionRequired"),
      (Hs[(Hs.TooManyRequests = 429)] = "TooManyRequests"),
      (Hs[(Hs.RequestHeaderFieldsTooLarge = 431)] =
        "RequestHeaderFieldsTooLarge"),
      (Hs[(Hs.UnavailableForLegalReasons = 451)] =
        "UnavailableForLegalReasons"),
      (Hs[(Hs.InternalServerError = 500)] = "InternalServerError"),
      (Hs[(Hs.NotImplemented = 501)] = "NotImplemented"),
      (Hs[(Hs.BadGateway = 502)] = "BadGateway"),
      (Hs[(Hs.ServiceUnavailable = 503)] = "ServiceUnavailable"),
      (Hs[(Hs.GatewayTimeout = 504)] = "GatewayTimeout"),
      (Hs[(Hs.HTTPVersionNotSupported = 505)] = "HTTPVersionNotSupported"),
      (Hs[(Hs.VariantAlsoNegotiates = 506)] = "VariantAlsoNegotiates"),
      (Hs[(Hs.InsufficientStorage = 507)] = "InsufficientStorage"),
      (Hs[(Hs.LoopDetected = 508)] = "LoopDetected"),
      (Hs[(Hs.NotExtended = 510)] = "NotExtended"),
      (Hs[(Hs.NetworkAuthenticationRequired = 511)] =
        "NetworkAuthenticationRequired"),
      (Hs[(Hs.PSGCredObjectDoesNotExist = 700)] = "PSGCredObjectDoesNotExist"),
      (Hs[(Hs.PSGParsePublicKeyForNewDeviceFailed = 701)] =
        "PSGParsePublicKeyForNewDeviceFailed"),
      (Hs[(Hs.PSGParsePublicKeyForLoginFailed = 702)] =
        "PSGParsePublicKeyForLoginFailed"),
      (Hs[(Hs.PSGCouldNotGetUserCredential = 703)] =
        "PSGCouldNotGetUserCredential"),
      (Hs[(Hs.PSGLoginRequired = 704)] = "PSGLoginRequired"),
      Hs),
    Ks = new Zs(),
    qs = class {
      psgCredIDExists(e) {
        let t = e.user.id,
          i = e.handshake.challenge.publicKey.allowCredentials,
          n = this.getPsgCredObj();
        if (!n)
          throw new Js("Could not get psg_cred_obj", {
            status: 700,
            statusText: "PSG Cred Object Does Not Exist",
          });
        let a = JSON.parse(n)[t];
        return (
          !!a &&
          i.find((e) => {
            if (
              Ks.encodeBytes(Ks.decodeBytes(e.id)) ===
              Ks.encodeBytes(Ks.decodeBytes(a))
            )
              return !0;
          })
        );
      }
      setPsgCredID(e, t) {
        if (!t)
          throw new Js("Could not get user's credential", {
            status: 703,
            statusText: "PSG Could Not Get User Credential",
          });
        let i = this.getPsgCredObj();
        if (i) {
          let n = JSON.parse(i);
          (n[e] = null == t ? void 0 : t.id),
            this.setPsgCredObj(JSON.stringify(n));
        } else
          this.setPsgCredObj(
            JSON.stringify({ [e]: null == t ? void 0 : t.id })
          );
      }
      removeCredential(e) {
        let t = this.getPsgCredObj();
        if (void 0 === t) return;
        let i = JSON.parse(t);
        Object.keys(i).forEach((t) => {
          i[t] === e && delete i[t];
        }),
          this.setPsgCredObj(JSON.stringify(i));
      }
      getPsgCredObj() {
        let e = Ss.get("psg_cred_obj"),
          t = localStorage.getItem("psg_cred_obj");
        return void 0 !== e
          ? (Ss.set("psg_cred_obj", e, { expires: 400, sameSite: "Strict" }),
            null === t && localStorage.setItem("psg_cred_obj", e),
            e)
          : null !== t
          ? (Ss.set("psg_cred_obj", t, { expires: 400, sameSite: "Strict" }), t)
          : void 0;
      }
      setPsgCredObj(e) {
        Ss.set("psg_cred_obj", e, { expires: 400, sameSite: "Strict" }),
          localStorage.setItem("psg_cred_obj", e);
      }
    };
  function Xs(e) {
    return __async(this, null, function* () {
      return e.ok
        ? e.json()
        : yield e.text().then((t) => {
            throw new Js(t, e);
          });
    });
  }
  function er() {
    let e = navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
      t = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./),
      i = t ? parseInt(t[1]) : 0;
    return -1 !== navigator.platform.indexOf("Win") && e && 98 === i;
  }
  function tr(e) {
    let t = new Uint8Array(68);
    t.set(e.slice(0, 68));
    let i = new Uint8Array(e.byteLength - 68);
    i.set(e.slice(68, e.byteLength));
    let n = new Uint8Array(15),
      a = new Uint8Array(t.byteLength + n.byteLength + i.byteLength);
    a.set(t, 0), a.set(n, t.byteLength), a.set(i, t.byteLength + n.byteLength);
    let s = a[30] + 15;
    return a.set([s], 30), a;
  }
  var ir = {
    URL: "https://auth.passage.id",
    version: "@passageidentity/passage-js 3.6.4",
    CAPTURE_EVENT_URL:
      "https://us-central1-passage-prod.cloudfunctions.net/capture-event",
    SENTRY_RELEASE: "passage-js@3.6.4-prod",
    SENTRY_PROJECT: "passage-js",
    SENTRY_PROJECT_DSN: "",
    SENTRY_PROJECT_ENV: "prod",
    SENTRY_PROJECT_VERSION: "3.6.4",
  };
  function nr(e) {
    let t = new Headers(e),
      i = ir.version;
    return t.append("Passage-Version", i), t;
  }
  var ar = class {
      getRefreshToken() {
        return Promise.resolve(void 0);
      }
    },
    sr = class extends ar {
      clearTokens() {
        return Promise.resolve();
      }
    },
    rr = class extends sr {
      constructor() {
        super(...arguments),
          (this.noLocalStorage = typeof window > "u"),
          (this.noLocalStorageError = (e) =>
            "Failed to access localStorage or cookies. Must be run client-side.");
      }
      getAuthToken() {
        if (this.noLocalStorage)
          return Promise.reject(this.noLocalStorageError("getAuthToken"));
        let e = localStorage.getItem("psg_auth_token");
        return null === e ? Promise.resolve("") : Promise.resolve(e);
      }
      setAuthToken(e) {
        if (this.noLocalStorage)
          return Promise.reject(this.noLocalStorageError("setAuthToken"));
        localStorage.setItem("psg_auth_token", e);
        let t = !this._isHttps() && this._isLocalHost();
        return (
          (document.cookie = `psg_auth_token = ${e}; path=/ ${
            t ? "" : ";secure"
          }`),
          Promise.resolve()
        );
      }
      getRefreshToken() {
        this.noLocalStorage &&
          Promise.reject(this.noLocalStorageError("getRefreshToken"));
        let e = localStorage.getItem("psg_refresh_token");
        return null === e ? Promise.resolve(void 0) : Promise.resolve(e);
      }
      setRefreshToken(e) {
        return (
          this.noLocalStorage &&
            Promise.reject(this.noLocalStorageError("setRefreshToken")),
          localStorage.setItem("psg_refresh_token", e),
          Promise.resolve()
        );
      }
      setTokens(e) {
        return (
          this.noLocalStorage &&
            Promise.reject(this.noLocalStorageError("setTokens")),
          this.setAuthToken(e.auth_token),
          e.refresh_token && this.setRefreshToken(e.refresh_token),
          Promise.resolve()
        );
      }
      clearTokens() {
        return (
          this.noLocalStorage &&
            Promise.reject(this.noLocalStorageError("clearTokens")),
          localStorage.removeItem("psg_auth_token"),
          (document.cookie =
            "psg_auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"),
          localStorage.removeItem("psg_refresh_token"),
          Promise.resolve()
        );
      }
      _isLocalHost() {
        return Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      }
      _isHttps() {
        return "https:" === location.protocol;
      }
    };
  function or(e) {
    return void 0 !== e.setTokens;
  }
  function Mr(e, t) {
    return ((e) =>
      "object" == typeof e && null !== e && typeof e.auth_result < "u")(e)
      ? (or(t) && t.setTokens(e.auth_result), e)
      : (console.warn("Not a valid auth response"), e);
  }
  var lr,
    ur,
    cr = new Zs(),
    gr = new qs(),
    dr = new Zs(),
    Nr = class {
      constructor(e, t, i) {
        (this.tokenStore = t),
          (this.apiUrl = e + "/login/"),
          (this.identifier = null != i ? i : "");
      }
      withWebAuthn(e) {
        return __async(this, null, function* () {
          let t = JSON.stringify({ identifier: this.identifier }),
            i = this.identifier ? t : void 0,
            n = yield fetch(this.apiUrl + "webauthn/start", {
              headers: nr(),
              method: "POST",
              body: i,
            }).then(Xs),
            a = n.handshake.challenge.publicKey,
            s = yield Rs.getCredential(a, e).catch((e) => {
              throw new Js("error parsing public key for webAuthn", {
                status: 702,
                statusText: "PSG Parse Public Key For Login Failed",
              });
            });
          return s
            ? (yield fetch(this.apiUrl + "webauthn/finish", {
                headers: nr(),
                method: "POST",
                body: JSON.stringify({
                  user_id: this.identifier ? n.user.id : void 0,
                  handshake_id: n.handshake.id,
                  handshake_response: {
                    id: s.id,
                    rawId: dr.encodeBytes(s.rawId),
                    type: s.type,
                    response: {
                      clientDataJSON: dr.encodeBytes(s.response.clientDataJSON),
                      authenticatorData: dr.encodeBytes(
                        s.response.authenticatorData
                      ),
                      signature: dr.encodeBytes(s.response.signature),
                      userHandle: dr.encodeBytes(s.response.userHandle),
                    },
                  },
                }),
              })
                .then(Xs)
                .then((e) => Mr(e, this.tokenStore))).auth_result
            : { auth_token: "", redirect_url: "" };
        });
      }
    },
    Dr = class {
      constructor(e) {
        this.apiUrl = e;
      }
      appInfo() {
        return __async(this, null, function* () {
          return (yield fetch(this.apiUrl, {
            headers: nr(),
            method: "GET",
          }).then(Xs)).app;
        });
      }
      identifierExists(e) {
        return __async(this, null, function* () {
          return (yield fetch(
            this.apiUrl + "/users?identifier=" + encodeURIComponent(e),
            { headers: nr(), method: "GET" }
          ).then(Xs)).user;
        });
      }
    },
    Ir = new Zs(),
    yr = new qs(),
    jr = class {
      constructor(e, t) {
        (this.tokenStore = t), (this.apiUrl = e);
      }
      newRegister(e, t) {
        return __async(this, null, function* () {
          return (yield fetch(this.apiUrl + "/register/magic-link", {
            headers: nr(),
            method: "POST",
            body: JSON.stringify({
              identifier: e,
              magic_link_path:
                window.location.pathname +
                window.location.search +
                window.location.hash,
              language: t,
            }),
          }).then(Xs)).magic_link;
        });
      }
      newLogin(e, t) {
        return __async(this, null, function* () {
          return (yield fetch(this.apiUrl + "/login/magic-link", {
            headers: nr(),
            method: "POST",
            body: JSON.stringify({
              identifier: e,
              magic_link_path:
                window.location.pathname +
                window.location.search +
                window.location.hash,
              language: t,
            }),
          }).then(Xs)).magic_link;
        });
      }
      getStatus(e) {
        return __async(this, null, function* () {
          return (yield fetch(this.apiUrl + "/magic-link/status", {
            headers: nr(),
            method: "POST",
            body: JSON.stringify({ id: e }),
          })
            .then(Xs)
            .then((e) => Mr(e, this.tokenStore))).auth_result;
        });
      }
      activate(e) {
        return __async(this, null, function* () {
          return (yield fetch(this.apiUrl + "/magic-link/activate", {
            headers: nr(),
            method: "PATCH",
            body: JSON.stringify({ magic_link: e }),
          })
            .then(Xs)
            .then((e) => Mr(e, this.tokenStore))).auth_result;
        });
      }
      activateWebAuthnLogin(e) {
        return __async(this, null, function* () {
          let t = yield fetch(
            this.apiUrl + "/magic-link/webauthn/login/start",
            {
              headers: nr(),
              body: JSON.stringify({ magic_link: e }),
              method: "POST",
            }
          ).then(Xs);
          if (!(yield yr.psgCredIDExists(t)))
            throw new Js("psg_cred_obj does not exist in the allow list", {
              status: 700,
              statusText: "Not Found",
            });
          let i = yield navigator.credentials
            .get({
              publicKey: this._parsePublicKeyLogin(
                t.handshake.challenge.publicKey
              ),
            })
            .catch((e) => {
              throw new Js("could not parse publickey for login", {
                status: 702,
                statusText: "PSG Parse Public Key For Login Failed",
              });
            });
          return i
            ? (yield fetch(this.apiUrl + "/magic-link/webauthn/login/finish", {
                headers: nr(),
                method: "POST",
                body: JSON.stringify({
                  magic_link: e,
                  user_id: t.user.id,
                  handshake_id: t.handshake.id,
                  handshake_response: {
                    id: i.id,
                    rawId: Ir.encodeBytes(i.rawId),
                    type: i.type,
                    response: {
                      clientDataJSON: Ir.encodeBytes(i.response.clientDataJSON),
                      authenticatorData: Ir.encodeBytes(
                        i.response.authenticatorData
                      ),
                      signature: Ir.encodeBytes(i.response.signature),
                      userHandle: Ir.encodeBytes(i.response.userHandle),
                    },
                  },
                }),
              })
                .then(Xs)
                .then((e) => Mr(e, this.tokenStore))).auth_result
            : { auth_token: "", redirect_url: "" };
        });
      }
      activateWebAuthnNewDevice(e) {
        return __async(this, null, function* () {
          let t = yield fetch(this.apiUrl + "/magic-link/webauthn/new/start", {
              headers: nr(),
              body: JSON.stringify({ magic_link: e }),
              method: "POST",
            }).then(Xs),
            i = yield navigator.credentials
              .create({
                publicKey: this._parsePublicKeyNewDevice(
                  t.handshake.challenge.publicKey
                ),
              })
              .catch((e) => {
                throw new Js("could not parse public key for new device", {
                  status: 701,
                  statusText: "PSG Parse Public Key For New Device Failed",
                });
              }),
            n = new Uint8Array(
              null == i ? void 0 : i.response.attestationObject
            );
          er() && (n = tr(n));
          let a = yield fetch(this.apiUrl + "/magic-link/webauthn/new/finish", {
              headers: nr(),
              method: "POST",
              body: JSON.stringify({
                magic_link: e,
                user_id: t.user.id,
                handshake_id: t.handshake.id,
                handshake_response: {
                  rawId: Ir.encodeBytes(i.rawId),
                  id: i.id,
                  type: i.type,
                  response: {
                    attestationObject: Ir.encodeBytes(n),
                    clientDataJSON: Ir.encodeBytes(i.response.clientDataJSON),
                  },
                },
                device_name: navigator.userAgent,
              }),
            })
              .then(Xs)
              .then((e) => Mr(e, this.tokenStore)),
            s = t.user.id;
          return yr.setPsgCredID(s, i), a.auth_result;
        });
      }
      _parsePublicKeyLogin(e) {
        if (
          ((e.challenge = Ir.decodeBytes(e.challenge.toString())),
          e.allowCredentials)
        ) {
          for (let t = 0; t < e.allowCredentials.length; t++) {
            let i = e.allowCredentials[t];
            i.id = Ir.decodeBytes(i.id.toString());
          }
          return e;
        }
        return e;
      }
      _parsePublicKeyNewDevice(e) {
        return (
          (e.challenge = Ir.decodeBytes(e.challenge.toString())),
          (e.user.id = Ir.decodeBytes(e.user.id.toString())),
          e
        );
      }
    },
    pr = class {
      constructor(e, t) {
        (this.tokenStore = t), (this.apiUrl = e);
      }
      newRegister(e, t) {
        return __async(this, null, function* () {
          return yield fetch(this.apiUrl + "/register/otp", {
            headers: nr(),
            method: "POST",
            body: JSON.stringify({ identifier: e, language: t }),
          }).then(Xs);
        });
      }
      newLogin(e, t) {
        return __async(this, null, function* () {
          return yield fetch(this.apiUrl + "/login/otp", {
            headers: nr(),
            method: "POST",
            body: JSON.stringify({ identifier: e, language: t }),
          }).then(Xs);
        });
      }
      activate(e, t) {
        return __async(this, null, function* () {
          return (yield fetch(this.apiUrl + "/otp/activate", {
            headers: nr(),
            method: "POST",
            body: JSON.stringify({ otp: e, otp_id: t }),
          })
            .then(Xs)
            .then((e) => Mr(e, this.tokenStore))).auth_result;
        });
      }
    },
    zr =
      (((ur = zr || {}).ACTIVE = "active"),
      (ur.INACTIVE = "inactive"),
      (ur.PENDING = "pending"),
      ur),
    Tr =
      (((lr = Tr || {}).Platform = "platform"), (lr.Passkey = "passkey"), lr);
  function hr(e) {
    return `${ir.URL}/v1/apps/${e}`;
  }
  var Ar,
    mr,
    xr = class {
      constructor(e, t) {
        (this.tokenStore = t), (this.apiUrl = hr(e) + "/tokens/");
      }
      authGuard() {
        return __async(this, null, function* () {
          try {
            let e = yield this.tokenStore.getAuthToken(),
              t = Vs(e, { header: !0 }),
              i = Vs(e);
            return !(
              void 0 === i ||
              void 0 === t ||
              !this._validJWTPayload(i) ||
              !this._validJWTHeader(t)
            );
          } catch (e) {
            return !1;
          }
        });
      }
      signOut() {
        return __async(this, null, function* () {
          let e = yield this.tokenStore.getRefreshToken();
          return e
            ? fetch(
                `${this.apiUrl}?` + new URLSearchParams({ refresh_token: e }),
                { method: "DELETE" }
              )
                .then(({ status: e }) => 200 === e)
                .finally(() => {
                  or(this.tokenStore) && this.tokenStore.clearTokens();
                })
            : (or(this.tokenStore) && this.tokenStore.clearTokens(), !0);
        });
      }
      getAuthToken() {
        return __async(this, null, function* () {
          let e = yield this.tokenStore.getAuthToken();
          if (void 0 === (yield this.tokenStore.getRefreshToken())) {
            if (!e)
              throw new Js("Login required", {
                status: 704,
                statusText: "Login required",
              });
            return e;
          }
          if (e) {
            let t = Vs(e);
            if (void 0 !== t && this._validJWTPayload(t))
              return Promise.resolve(e);
          }
          return this.refresh().then((e) => e.auth_token);
        });
      }
      refresh() {
        return __async(this, null, function* () {
          let e = new Js("Login required", {
              status: 704,
              statusText: "Login required",
            }),
            t = yield this.tokenStore.getRefreshToken();
          return t
            ? fetch(this.apiUrl, {
                headers: nr(),
                method: "POST",
                body: JSON.stringify({ refresh_token: t }),
              })
                .then(Xs)
                .then(
                  (e) => (
                    or(this.tokenStore) &&
                      this.tokenStore.setTokens(e.auth_result),
                    e.auth_result
                  )
                )
                .catch(() => {
                  throw e;
                })
            : Promise.reject(e);
        });
      }
      _validJWTPayload(e) {
        let t = Math.floor(Date.now() / 1e3);
        return !(e.exp && t > e.exp);
      }
      _validJWTHeader(e) {
        let t = "RS256",
          i = "JWT";
        return !(e.alg !== t || e.typ !== i);
      }
    },
    fr = new Zs(),
    kr = new qs(),
    Lr = class {
      constructor(e, t) {
        (this.appID = e),
          (this.fullUrl = hr(this.appID)),
          void 0 === (null == t ? void 0 : t.tokenStore)
            ? (this.tokenStore = new rr())
            : (this.tokenStore = t.tokenStore);
      }
      credIDExists(e) {
        let t = new qs().getPsgCredObj();
        return !!t && !!JSON.parse(t)[e];
      }
      register(e) {
        return __async(this, null, function* () {
          return yield new (class {
            constructor(e, t, i) {
              (this.tokenStore = t),
                (this.apiUrl = e + "/register/"),
                (this.identifier = i);
            }
            withWebAuthn() {
              return __async(this, null, function* () {
                let e = yield fetch(this.apiUrl + "webauthn/start", {
                    headers: nr(),
                    body: JSON.stringify({ identifier: this.identifier }),
                    method: "POST",
                  }).then(Xs),
                  t = e.handshake.challenge.publicKey,
                  { credential: i, transports: n } = yield Ps.createCredential(
                    t
                  ).catch((e) => {
                    throw new Js("error parsing public key for webAuthn", {
                      status: 702,
                      statusText: "PSG Parse Public Key For Login Failed",
                    });
                  }),
                  a = new Uint8Array(
                    null == i ? void 0 : i.response.attestationObject
                  );
                er() && (a = tr(a));
                let s = e.user.id,
                  r = yield fetch(this.apiUrl + "webauthn/finish", {
                    headers: nr(),
                    method: "POST",
                    body: JSON.stringify({
                      user_id: s,
                      handshake_id: e.handshake.id,
                      handshake_response: {
                        rawId: cr.encodeBytes(null == i ? void 0 : i.rawId),
                        id: null == i ? void 0 : i.id,
                        type: null == i ? void 0 : i.type,
                        response: {
                          attestationObject: cr.encodeBytes(a),
                          clientDataJSON: cr.encodeBytes(
                            null == i ? void 0 : i.response.clientDataJSON
                          ),
                        },
                        transports: n,
                      },
                    }),
                  })
                    .then(Xs)
                    .then((e) => Mr(e, this.tokenStore));
                return gr.setPsgCredID(s, i), r.auth_result;
              });
            }
          })(this.fullUrl, this.tokenStore, e).withWebAuthn();
        });
      }
      login(e) {
        return __async(this, null, function* () {
          return yield new Nr(this.fullUrl, this.tokenStore, e).withWebAuthn();
        });
      }
      loginConditional(e) {
        return __async(this, null, function* () {
          return yield new Nr(this.fullUrl, this.tokenStore).withWebAuthn({
            mediation: "conditional",
            signal: e,
          });
        });
      }
      appInfo() {
        return __async(this, null, function* () {
          return yield new Dr(this.fullUrl).appInfo();
        });
      }
      browserInfo() {
        return __async(this, null, function* () {
          return yield new (class {
            getBrowserInfo() {
              return __async(this, null, function* () {
                let e = yield Rs.getCredentialAvailable();
                return {
                  createPassKeySupported: e.syncedCredential,
                  getPassKeySupported: e.syncedCredential,
                  conditionalUISupported: e.conditionalUI,
                };
              });
            }
          })().getBrowserInfo();
        });
      }
      getCredentialAvailable() {
        return __async(this, null, function* () {
          return yield Rs.getCredentialAvailable();
        });
      }
      createCredentialAvailable() {
        return __async(this, null, function* () {
          return yield Ps.createCredentialAvailable();
        });
      }
      checkWebauthnConfig(e) {
        let t = !0;
        return (
          e.auth_origin.replace(/\/$/, "") !=
            window.location.origin.replace(/\/$/, "") &&
            (console.error(
              'The auth_origin configured for webauthn in your app settings does not match the "origin" of your current URL.  Please reconfigure this in the admin console. (Your current "origin" is `' +
                window.location.origin +
                "`) Passage will continue to work with other authentication methods."
            ),
            (t = !1)),
          t
        );
      }
      isWebauthnSupported(e) {
        return __async(this, null, function* () {
          let t = yield Ps.createCredentialAvailable();
          return e ? t.securityKey : t.platform;
        });
      }
      identifierExists(e) {
        return __async(this, null, function* () {
          let t = yield new Dr(this.fullUrl).identifierExists(e);
          return (
            t && ((t.hasPasskey = t.webauthn_types.includes("passkey")), t)
          );
        });
      }
      newRegisterMagicLink(e, t) {
        return __async(this, null, function* () {
          return yield new jr(this.fullUrl, this.tokenStore).newRegister(e, t);
        });
      }
      newLoginMagicLink(e, t) {
        return __async(this, null, function* () {
          return yield new jr(this.fullUrl, this.tokenStore).newLogin(e, t);
        });
      }
      magicLinkActivate(e) {
        return __async(this, null, function* () {
          return yield new jr(this.fullUrl, this.tokenStore).activate(e);
        });
      }
      magicLinkActivateWebAuthnLogin(e) {
        return __async(this, null, function* () {
          return yield new jr(
            this.fullUrl,
            this.tokenStore
          ).activateWebAuthnLogin(e);
        });
      }
      magicLinkActivateWebAuthnNewDevice(e) {
        return __async(this, null, function* () {
          return yield new jr(
            this.fullUrl,
            this.tokenStore
          ).activateWebAuthnNewDevice(e);
        });
      }
      getMagicLinkStatus(e) {
        return __async(this, null, function* () {
          return yield new jr(this.fullUrl, this.tokenStore).getStatus(e);
        });
      }
      newRegisterOneTimePasscode(e, t) {
        return __async(this, null, function* () {
          return yield new pr(this.fullUrl, this.tokenStore).newRegister(e, t);
        });
      }
      newLoginOneTimePasscode(e, t) {
        return __async(this, null, function* () {
          return yield new pr(this.fullUrl, this.tokenStore).newLogin(e, t);
        });
      }
      oneTimePasscodeActivate(e, t) {
        return __async(this, null, function* () {
          return yield new pr(this.fullUrl, this.tokenStore).activate(e, t);
        });
      }
      getCurrentUser() {
        return new (class {
          constructor(e, t) {
            (this.tokenStore = t),
              (this.apiUrl = hr(e) + "/currentuser"),
              (this.session = new xr(e, this.tokenStore));
          }
          userInfo() {
            return __async(this, null, function* () {
              let e = yield this._getToken(),
                t = yield fetch(this.apiUrl, {
                  method: "GET",
                  headers: nr({ Authorization: `Bearer ${e}` }),
                })
                  .then((e) =>
                    __async(this, null, function* () {
                      return 200 !== e.status ? void 0 : yield e.json();
                    })
                  )
                  .catch((e) => {
                    throw new Js("Failed to fetch current user.", {
                      status: 404,
                      statusText: "Not Found",
                    });
                  });
              return null == t ? void 0 : t.user;
            });
          }
          changeEmail(e, t) {
            return __async(this, null, function* () {
              let i = yield this._getToken();
              return (yield fetch(`${this.apiUrl}/email`, {
                method: "PATCH",
                headers: nr({
                  Authorization: `Bearer ${i}`,
                  "Content-Type": "application/json",
                }),
                body: JSON.stringify({ new_email: e, language: t }),
              }).then(Xs)).magic_link;
            });
          }
          changePhone(e, t) {
            return __async(this, null, function* () {
              let i = yield this._getToken();
              return (yield fetch(`${this.apiUrl}/phone`, {
                method: "PATCH",
                headers: nr({
                  Authorization: `Bearer ${i}`,
                  "Content-Type": "application/json",
                }),
                body: JSON.stringify({ new_phone: e, language: t }),
              }).then(Xs)).magic_link;
            });
          }
          editDevice(e, t) {
            return __async(this, null, function* () {
              if ("" === e || void 0 === e)
                throw new Js(
                  "A deviceID is required for an edit device request.",
                  { status: 400, statusText: "Bad Request" }
                );
              if (0 === Object.keys(t).length)
                throw new Js(
                  "Edit device request must not have an empty request body.",
                  { status: 400, statusText: "Bad Request" }
                );
              let i = yield this._getToken();
              return (yield fetch(`${this.apiUrl}/devices/${e}`, {
                method: "PATCH",
                headers: nr({
                  Authorization: `Bearer ${i}`,
                  "Content-Type": "application/json",
                }),
                body: JSON.stringify(__spreadValues({}, t)),
              }).then(Xs)).device;
            });
          }
          listDevices() {
            return __async(this, null, function* () {
              let e = yield this._getToken();
              return (yield fetch(`${this.apiUrl}/devices/`, {
                method: "GET",
                headers: nr({
                  Authorization: `Bearer ${e}`,
                  "Content-Type": "application/json",
                }),
              }).then(Xs)).devices;
            });
          }
          addDevice() {
            return __async(this, null, function* () {
              let e = yield this._getToken(),
                t = yield fetch(this.apiUrl + "/devices/start", {
                  headers: nr({ Authorization: `Bearer ${e}` }),
                  method: "POST",
                }).then(Xs),
                i = yield navigator.credentials
                  .create({
                    publicKey: this._parsePublicKey(
                      t.handshake.challenge.publicKey
                    ),
                  })
                  .catch((e) => {
                    throw new Js("failed to parse public key", {
                      status: 701,
                      statusText: "PSG Parse Public Key For New Device Failed",
                    });
                  })
                  .then((e) => e),
                n = [];
              (null == i ? void 0 : i.response.getTransports) &&
                "function" ==
                  typeof (null == i ? void 0 : i.response.getTransports) &&
                (n = null == i ? void 0 : i.response.getTransports());
              let a = t.user.id,
                s = yield fetch(this.apiUrl + "/devices/finish", {
                  headers: nr({ Authorization: `Bearer ${e}` }),
                  method: "POST",
                  body: JSON.stringify({
                    user_id: a,
                    handshake_id: t.handshake.id,
                    handshake_response: {
                      rawId: fr.encodeBytes(null == i ? void 0 : i.rawId),
                      id: null == i ? void 0 : i.id,
                      type: null == i ? void 0 : i.type,
                      response: {
                        attestationObject: fr.encodeBytes(
                          null == i ? void 0 : i.response.attestationObject
                        ),
                        clientDataJSON: fr.encodeBytes(
                          null == i ? void 0 : i.response.clientDataJSON
                        ),
                      },
                      transports: n,
                    },
                  }),
                }).then(Xs);
              return kr.setPsgCredID(a, i), s.device;
            });
          }
          deleteDevice(e) {
            return __async(this, null, function* () {
              let t = "string" == typeof e ? e : e.id,
                i = "string" == typeof e ? void 0 : e.cred_id;
              if (!t)
                throw new Js("A deviceID is required to delete a device.", {
                  status: 404,
                  statusText: "Not Found",
                });
              let n = !1,
                a = yield this._getToken();
              return (
                (n = yield fetch(`${this.apiUrl}/devices/${t}`, {
                  method: "DELETE",
                  headers: nr({
                    Authorization: `Bearer ${a}`,
                    "Content-Type": "application/json",
                  }),
                }).then((e) =>
                  __async(this, null, function* () {
                    return (
                      !!e.ok ||
                      (yield e.text().then((t) => {
                        throw new Js(t, e);
                      }))
                    );
                  })
                )),
                n && void 0 !== i && kr.removeCredential(i),
                n
              );
            });
          }
          getMetadata() {
            return __async(this, null, function* () {
              let e = yield this._getToken();
              return (yield fetch(`${this.apiUrl}/user-metadata`, {
                method: "GET",
                headers: nr({ Authorization: `Bearer ${e}` }),
              }).then(Xs)).user_metadata;
            });
          }
          updateMetadata(e) {
            return __async(this, null, function* () {
              let t = yield this._getToken();
              return (yield fetch(`${this.apiUrl}/user-metadata`, {
                method: "PATCH",
                headers: nr({
                  Authorization: `Bearer ${t}`,
                  "Content-Type": "application/json",
                }),
                body: JSON.stringify({ user_metadata: e }),
              }).then(Xs)).user;
            });
          }
          _parsePublicKey(e) {
            return (
              (e.challenge = fr.decodeBytes(e.challenge.toString())),
              (e.user.id = fr.decodeBytes(e.user.id.toString())),
              e
            );
          }
          _getToken() {
            return __async(this, null, function* () {
              return yield this.session.getAuthToken();
            });
          }
        })(this.appID, this.tokenStore);
      }
      getCurrentSession() {
        return new xr(this.appID, this.tokenStore);
      }
      createUser(e) {
        return __async(this, null, function* () {
          return (yield fetch(`${this.fullUrl}/users`, {
            headers: nr(),
            body: JSON.stringify(__spreadValues({}, e)),
            method: "POST",
          }).then(Xs)).user;
        });
      }
    },
    Or = ((e) => (
      (e.email = "email"), (e.phone = "phone"), (e.both = "both"), e
    ))(Or || {}),
    wr =
      (((mr = wr || {}).Phone = "phone"),
      (mr.Email = "email"),
      (mr.Both = "both"),
      (mr.Either = "either"),
      mr),
    vr =
      (((Ar = vr || {}).STRING = "string"),
      (Ar.BOOLEAN = "boolean"),
      (Ar.INTEGER = "integer"),
      (Ar.DATE = "date"),
      (Ar.PHONE = "phone"),
      (Ar.EMAIL = "email"),
      Ar),
    Er = ((e) => (
      (e.LoginCode = "otp"), (e.MagicLink = "magic_link"), (e.None = "none"), e
    ))(Er || {});
  function Sr(e) {
    return null == e || "" === e || " " === e;
  }
  var br = ((e) => ((e.phone = "PHONE"), (e.email = "EMAIL"), e))(br || {}),
    Cr = { exports: {} };
  !(function (e) {
    var t;
    (t = function (e) {
      return (function () {
        for (
          var t = [
              ["Afghanistan (â€«Ø§ÙØºØ§Ù†Ø³ØªØ§Ù†â€¬â€Ž)", "af", "93"],
              ["Albania (ShqipÃ«ri)", "al", "355"],
              ["Algeria (â€«Ø§Ù„Ø¬Ø²Ø§Ø¦Ø±â€¬â€Ž)", "dz", "213"],
              ["American Samoa", "as", "1", 5, ["684"]],
              ["Andorra", "ad", "376"],
              ["Angola", "ao", "244"],
              ["Anguilla", "ai", "1", 6, ["264"]],
              ["Antigua and Barbuda", "ag", "1", 7, ["268"]],
              ["Argentina", "ar", "54"],
              ["Armenia (Õ€Õ¡ÕµÕ¡Õ½Õ¿Õ¡Õ¶)", "am", "374"],
              ["Aruba", "aw", "297"],
              ["Ascension Island", "ac", "247"],
              ["Australia", "au", "61", 0],
              ["Austria (Ã–sterreich)", "at", "43"],
              ["Azerbaijan (AzÉ™rbaycan)", "az", "994"],
              ["Bahamas", "bs", "1", 8, ["242"]],
              ["Bahrain (â€«Ø§Ù„Ø¨Ø­Ø±ÙŠÙ†â€¬â€Ž)", "bh", "973"],
              ["Bangladesh (à¦¬à¦¾à¦‚à¦²à¦¾à¦¦à§‡à¦¶)", "bd", "880"],
              ["Barbados", "bb", "1", 9, ["246"]],
              ["Belarus (Ð‘ÐµÐ»Ð°Ñ€ÑƒÑÑŒ)", "by", "375"],
              ["Belgium (BelgiÃ«)", "be", "32"],
              ["Belize", "bz", "501"],
              ["Benin (BÃ©nin)", "bj", "229"],
              ["Bermuda", "bm", "1", 10, ["441"]],
              ["Bhutan (à½ à½–à¾²à½´à½‚)", "bt", "975"],
              ["Bolivia", "bo", "591"],
              [
                "Bosnia and Herzegovina (Ð‘Ð¾ÑÐ½Ð° Ð¸ Ð¥ÐµÑ€Ñ†ÐµÐ³Ð¾Ð²Ð¸Ð½Ð°)",
                "ba",
                "387",
              ],
              ["Botswana", "bw", "267"],
              ["Brazil (Brasil)", "br", "55"],
              ["British Indian Ocean Territory", "io", "246"],
              ["British Virgin Islands", "vg", "1", 11, ["284"]],
              ["Brunei", "bn", "673"],
              ["Bulgaria (Ð‘ÑŠÐ»Ð³Ð°Ñ€Ð¸Ñ)", "bg", "359"],
              ["Burkina Faso", "bf", "226"],
              ["Burundi (Uburundi)", "bi", "257"],
              ["Cambodia (áž€áž˜áŸ’áž–áž»áž‡áž¶)", "kh", "855"],
              ["Cameroon (Cameroun)", "cm", "237"],
              [
                "Canada",
                "ca",
                "1",
                1,
                [
                  "204",
                  "226",
                  "236",
                  "249",
                  "250",
                  "289",
                  "306",
                  "343",
                  "365",
                  "387",
                  "403",
                  "416",
                  "418",
                  "431",
                  "437",
                  "438",
                  "450",
                  "506",
                  "514",
                  "519",
                  "548",
                  "579",
                  "581",
                  "587",
                  "604",
                  "613",
                  "639",
                  "647",
                  "672",
                  "705",
                  "709",
                  "742",
                  "778",
                  "780",
                  "782",
                  "807",
                  "819",
                  "825",
                  "867",
                  "873",
                  "902",
                  "905",
                ],
              ],
              ["Cape Verde (Kabu Verdi)", "cv", "238"],
              ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]],
              ["Cayman Islands", "ky", "1", 12, ["345"]],
              [
                "Central African Republic (RÃ©publique centrafricaine)",
                "cf",
                "236",
              ],
              ["Chad (Tchad)", "td", "235"],
              ["Chile", "cl", "56"],
              ["China (ä¸­å›½)", "cn", "86"],
              ["Christmas Island", "cx", "61", 2, ["89164"]],
              ["Cocos (Keeling) Islands", "cc", "61", 1, ["89162"]],
              ["Colombia", "co", "57"],
              ["Comoros (â€«Ø¬Ø²Ø± Ø§Ù„Ù‚Ù…Ø±â€¬â€Ž)", "km", "269"],
              ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
              ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
              ["Cook Islands", "ck", "682"],
              ["Costa Rica", "cr", "506"],
              ["CÃ´te dâ€™Ivoire", "ci", "225"],
              ["Croatia (Hrvatska)", "hr", "385"],
              ["Cuba", "cu", "53"],
              ["CuraÃ§ao", "cw", "599", 0],
              ["Cyprus (ÎšÏÏ€ÏÎ¿Ï‚)", "cy", "357"],
              ["Czech Republic (ÄŒeskÃ¡ republika)", "cz", "420"],
              ["Denmark (Danmark)", "dk", "45"],
              ["Djibouti", "dj", "253"],
              ["Dominica", "dm", "1", 13, ["767"]],
              [
                "Dominican Republic (RepÃºblica Dominicana)",
                "do",
                "1",
                2,
                ["809", "829", "849"],
              ],
              ["Ecuador", "ec", "593"],
              ["Egypt (â€«Ù…ØµØ±â€¬â€Ž)", "eg", "20"],
              ["El Salvador", "sv", "503"],
              ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
              ["Eritrea", "er", "291"],
              ["Estonia (Eesti)", "ee", "372"],
              ["Eswatini", "sz", "268"],
              ["Ethiopia", "et", "251"],
              ["Falkland Islands (Islas Malvinas)", "fk", "500"],
              ["Faroe Islands (FÃ¸royar)", "fo", "298"],
              ["Fiji", "fj", "679"],
              ["Finland (Suomi)", "fi", "358", 0],
              ["France", "fr", "33"],
              ["French Guiana (Guyane franÃ§aise)", "gf", "594"],
              ["French Polynesia (PolynÃ©sie franÃ§aise)", "pf", "689"],
              ["Gabon", "ga", "241"],
              ["Gambia", "gm", "220"],
              ["Georgia (áƒ¡áƒáƒ¥áƒáƒ áƒ—áƒ•áƒ”áƒšáƒ)", "ge", "995"],
              ["Germany (Deutschland)", "de", "49"],
              ["Ghana (Gaana)", "gh", "233"],
              ["Gibraltar", "gi", "350"],
              ["Greece (Î•Î»Î»Î¬Î´Î±)", "gr", "30"],
              ["Greenland (Kalaallit Nunaat)", "gl", "299"],
              ["Grenada", "gd", "1", 14, ["473"]],
              ["Guadeloupe", "gp", "590", 0],
              ["Guam", "gu", "1", 15, ["671"]],
              ["Guatemala", "gt", "502"],
              ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]],
              ["Guinea (GuinÃ©e)", "gn", "224"],
              ["Guinea-Bissau (GuinÃ© Bissau)", "gw", "245"],
              ["Guyana", "gy", "592"],
              ["Haiti", "ht", "509"],
              ["Honduras", "hn", "504"],
              ["Hong Kong (é¦™æ¸¯)", "hk", "852"],
              ["Hungary (MagyarorszÃ¡g)", "hu", "36"],
              ["Iceland (Ãsland)", "is", "354"],
              ["India (à¤­à¤¾à¤°à¤¤)", "in", "91"],
              ["Indonesia", "id", "62"],
              ["Iran (â€«Ø§ÛŒØ±Ø§Ù†â€¬â€Ž)", "ir", "98"],
              ["Iraq (â€«Ø§Ù„Ø¹Ø±Ø§Ù‚â€¬â€Ž)", "iq", "964"],
              ["Ireland", "ie", "353"],
              [
                "Isle of Man",
                "im",
                "44",
                2,
                ["1624", "74576", "7524", "7924", "7624"],
              ],
              ["Israel (â€«×™×©×¨××œâ€¬â€Ž)", "il", "972"],
              ["Italy (Italia)", "it", "39", 0],
              ["Jamaica", "jm", "1", 4, ["876", "658"]],
              ["Japan (æ—¥æœ¬)", "jp", "81"],
              [
                "Jersey",
                "je",
                "44",
                3,
                ["1534", "7509", "7700", "7797", "7829", "7937"],
              ],
              ["Jordan (â€«Ø§Ù„Ø£Ø±Ø¯Ù†â€¬â€Ž)", "jo", "962"],
              ["Kazakhstan (ÐšÐ°Ð·Ð°Ñ…ÑÑ‚Ð°Ð½)", "kz", "7", 1, ["33", "7"]],
              ["Kenya", "ke", "254"],
              ["Kiribati", "ki", "686"],
              ["Kosovo", "xk", "383"],
              ["Kuwait (â€«Ø§Ù„ÙƒÙˆÙŠØªâ€¬â€Ž)", "kw", "965"],
              ["Kyrgyzstan (ÐšÑ‹Ñ€Ð³Ñ‹Ð·ÑÑ‚Ð°Ð½)", "kg", "996"],
              ["Laos (àº¥àº²àº§)", "la", "856"],
              ["Latvia (Latvija)", "lv", "371"],
              ["Lebanon (â€«Ù„Ø¨Ù†Ø§Ù†â€¬â€Ž)", "lb", "961"],
              ["Lesotho", "ls", "266"],
              ["Liberia", "lr", "231"],
              ["Libya (â€«Ù„ÙŠØ¨ÙŠØ§â€¬â€Ž)", "ly", "218"],
              ["Liechtenstein", "li", "423"],
              ["Lithuania (Lietuva)", "lt", "370"],
              ["Luxembourg", "lu", "352"],
              ["Macau (æ¾³é–€)", "mo", "853"],
              ["Madagascar (Madagasikara)", "mg", "261"],
              ["Malawi", "mw", "265"],
              ["Malaysia", "my", "60"],
              ["Maldives", "mv", "960"],
              ["Mali", "ml", "223"],
              ["Malta", "mt", "356"],
              ["Marshall Islands", "mh", "692"],
              ["Martinique", "mq", "596"],
              ["Mauritania (â€«Ù…ÙˆØ±ÙŠØªØ§Ù†ÙŠØ§â€¬â€Ž)", "mr", "222"],
              ["Mauritius (Moris)", "mu", "230"],
              ["Mayotte", "yt", "262", 1, ["269", "639"]],
              ["Mexico (MÃ©xico)", "mx", "52"],
              ["Micronesia", "fm", "691"],
              ["Moldova (Republica Moldova)", "md", "373"],
              ["Monaco", "mc", "377"],
              ["Mongolia (ÐœÐ¾Ð½Ð³Ð¾Ð»)", "mn", "976"],
              ["Montenegro (Crna Gora)", "me", "382"],
              ["Montserrat", "ms", "1", 16, ["664"]],
              ["Morocco (â€«Ø§Ù„Ù…ØºØ±Ø¨â€¬â€Ž)", "ma", "212", 0],
              ["Mozambique (MoÃ§ambique)", "mz", "258"],
              ["Myanmar (Burma) (á€™á€¼á€”á€ºá€™á€¬)", "mm", "95"],
              ["Namibia (NamibiÃ«)", "na", "264"],
              ["Nauru", "nr", "674"],
              ["Nepal (à¤¨à¥‡à¤ªà¤¾à¤²)", "np", "977"],
              ["Netherlands (Nederland)", "nl", "31"],
              ["New Caledonia (Nouvelle-CalÃ©donie)", "nc", "687"],
              ["New Zealand", "nz", "64"],
              ["Nicaragua", "ni", "505"],
              ["Niger (Nijar)", "ne", "227"],
              ["Nigeria", "ng", "234"],
              ["Niue", "nu", "683"],
              ["Norfolk Island", "nf", "672"],
              ["North Korea (ì¡°ì„  ë¯¼ì£¼ì£¼ì˜ ì¸ë¯¼ ê³µí™”êµ­)", "kp", "850"],
              [
                "North Macedonia (Ð¡ÐµÐ²ÐµÑ€Ð½Ð° ÐœÐ°ÐºÐµÐ´Ð¾Ð½Ð¸Ñ˜Ð°)",
                "mk",
                "389",
              ],
              ["Northern Mariana Islands", "mp", "1", 17, ["670"]],
              ["Norway (Norge)", "no", "47", 0],
              ["Oman (â€«Ø¹ÙÙ…Ø§Ù†â€¬â€Ž)", "om", "968"],
              ["Pakistan (â€«Ù¾Ø§Ú©Ø³ØªØ§Ù†â€¬â€Ž)", "pk", "92"],
              ["Palau", "pw", "680"],
              ["Palestine (â€«ÙÙ„Ø³Ø·ÙŠÙ†â€¬â€Ž)", "ps", "970"],
              ["Panama (PanamÃ¡)", "pa", "507"],
              ["Papua New Guinea", "pg", "675"],
              ["Paraguay", "py", "595"],
              ["Peru (PerÃº)", "pe", "51"],
              ["Philippines", "ph", "63"],
              ["Poland (Polska)", "pl", "48"],
              ["Portugal", "pt", "351"],
              ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
              ["Qatar (â€«Ù‚Ø·Ø±â€¬â€Ž)", "qa", "974"],
              ["RÃ©union (La RÃ©union)", "re", "262", 0],
              ["Romania (RomÃ¢nia)", "ro", "40"],
              ["Russia (Ð Ð¾ÑÑÐ¸Ñ)", "ru", "7", 0],
              ["Rwanda", "rw", "250"],
              ["Saint BarthÃ©lemy", "bl", "590", 1],
              ["Saint Helena", "sh", "290"],
              ["Saint Kitts and Nevis", "kn", "1", 18, ["869"]],
              ["Saint Lucia", "lc", "1", 19, ["758"]],
              [
                "Saint Martin (Saint-Martin (partie franÃ§aise))",
                "mf",
                "590",
                2,
              ],
              [
                "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
                "pm",
                "508",
              ],
              ["Saint Vincent and the Grenadines", "vc", "1", 20, ["784"]],
              ["Samoa", "ws", "685"],
              ["San Marino", "sm", "378"],
              [
                "SÃ£o TomÃ© and PrÃ­ncipe (SÃ£o TomÃ© e PrÃ­ncipe)",
                "st",
                "239",
              ],
              [
                "Saudi Arabia (â€«Ø§Ù„Ù…Ù…Ù„ÙƒØ© Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©â€¬â€Ž)",
                "sa",
                "966",
              ],
              ["Senegal (SÃ©nÃ©gal)", "sn", "221"],
              ["Serbia (Ð¡Ñ€Ð±Ð¸Ñ˜Ð°)", "rs", "381"],
              ["Seychelles", "sc", "248"],
              ["Sierra Leone", "sl", "232"],
              ["Singapore", "sg", "65"],
              ["Sint Maarten", "sx", "1", 21, ["721"]],
              ["Slovakia (Slovensko)", "sk", "421"],
              ["Slovenia (Slovenija)", "si", "386"],
              ["Solomon Islands", "sb", "677"],
              ["Somalia (Soomaaliya)", "so", "252"],
              ["South Africa", "za", "27"],
              ["South Korea (ëŒ€í•œë¯¼êµ­)", "kr", "82"],
              ["South Sudan (â€«Ø¬Ù†ÙˆØ¨ Ø§Ù„Ø³ÙˆØ¯Ø§Ù†â€¬â€Ž)", "ss", "211"],
              ["Spain (EspaÃ±a)", "es", "34"],
              ["Sri Lanka (à·à·Šâ€à¶»à·“ à¶½à¶‚à¶šà·à·€)", "lk", "94"],
              ["Sudan (â€«Ø§Ù„Ø³ÙˆØ¯Ø§Ù†â€¬â€Ž)", "sd", "249"],
              ["Suriname", "sr", "597"],
              ["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]],
              ["Sweden (Sverige)", "se", "46"],
              ["Switzerland (Schweiz)", "ch", "41"],
              ["Syria (â€«Ø³ÙˆØ±ÙŠØ§â€¬â€Ž)", "sy", "963"],
              ["Taiwan (å°ç£)", "tw", "886"],
              ["Tajikistan", "tj", "992"],
              ["Tanzania", "tz", "255"],
              ["Thailand (à¹„à¸—à¸¢)", "th", "66"],
              ["Timor-Leste", "tl", "670"],
              ["Togo", "tg", "228"],
              ["Tokelau", "tk", "690"],
              ["Tonga", "to", "676"],
              ["Trinidad and Tobago", "tt", "1", 22, ["868"]],
              ["Tunisia (â€«ØªÙˆÙ†Ø³â€¬â€Ž)", "tn", "216"],
              ["Turkey (TÃ¼rkiye)", "tr", "90"],
              ["Turkmenistan", "tm", "993"],
              ["Turks and Caicos Islands", "tc", "1", 23, ["649"]],
              ["Tuvalu", "tv", "688"],
              ["U.S. Virgin Islands", "vi", "1", 24, ["340"]],
              ["Uganda", "ug", "256"],
              ["Ukraine (Ð£ÐºÑ€Ð°Ñ—Ð½Ð°)", "ua", "380"],
              [
                "United Arab Emirates (â€«Ø§Ù„Ø¥Ù…Ø§Ø±Ø§Øª Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ù…ØªØ­Ø¯Ø©â€¬â€Ž)",
                "ae",
                "971",
              ],
              ["United Kingdom", "gb", "44", 0],
              ["United States", "us", "1", 0],
              ["Uruguay", "uy", "598"],
              ["Uzbekistan (OÊ»zbekiston)", "uz", "998"],
              ["Vanuatu", "vu", "678"],
              ["Vatican City (CittÃ  del Vaticano)", "va", "39", 1, ["06698"]],
              ["Venezuela", "ve", "58"],
              ["Vietnam (Viá»‡t Nam)", "vn", "84"],
              ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"],
              [
                "Western Sahara (â€«Ø§Ù„ØµØ­Ø±Ø§Ø¡ Ø§Ù„ØºØ±Ø¨ÙŠØ©â€¬â€Ž)",
                "eh",
                "212",
                1,
                ["5288", "5289"],
              ],
              ["Yemen (â€«Ø§Ù„ÙŠÙ…Ù†â€¬â€Ž)", "ye", "967"],
              ["Zambia", "zm", "260"],
              ["Zimbabwe", "zw", "263"],
              ["Ã…land Islands", "ax", "358", 1, ["18"]],
            ],
            i = 0;
          i < t.length;
          i++
        ) {
          var n = t[i];
          t[i] = {
            name: n[0],
            iso2: n[1],
            dialCode: n[2],
            priority: n[3] || 0,
            areaCodes: n[4] || null,
          };
        }
        function a(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        var s = {
          getInstance: function (e) {
            var t = e.getAttribute("data-intl-tel-input-id");
            return window.intlTelInputGlobals.instances[t];
          },
          instances: {},
          documentReady: function () {
            return "complete" === document.readyState;
          },
        };
        "object" == typeof window && (window.intlTelInputGlobals = s);
        var r = 0,
          o = {
            allowDropdown: !0,
            autoHideDialCode: !0,
            autoPlaceholder: "polite",
            customContainer: "",
            customPlaceholder: null,
            dropdownContainer: null,
            excludeCountries: [],
            formatOnDisplay: !0,
            geoIpLookup: null,
            hiddenInput: "",
            initialCountry: "",
            localizedCountries: null,
            nationalMode: !0,
            onlyCountries: [],
            placeholderNumberType: "MOBILE",
            preferredCountries: ["us", "gb"],
            separateDialCode: !1,
            utilsScript: "",
          },
          M = [
            "800",
            "822",
            "833",
            "844",
            "855",
            "866",
            "877",
            "880",
            "881",
            "882",
            "883",
            "884",
            "885",
            "886",
            "887",
            "888",
            "889",
          ],
          l = function (e, t) {
            for (var i = Object.keys(e), n = 0; n < i.length; n++)
              t(i[n], e[i[n]]);
          },
          u = function (e) {
            l(window.intlTelInputGlobals.instances, function (t) {
              window.intlTelInputGlobals.instances[t][e]();
            });
          },
          c = (function () {
            function i(e, t) {
              var n = this;
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
                (this.id = r++),
                (this.telInput = e),
                (this.activeItem = null),
                (this.highlightedItem = null);
              var a = t || {};
              (this.options = {}),
                l(o, function (e, t) {
                  n.options[e] = a.hasOwnProperty(e) ? a[e] : t;
                }),
                (this.hadInitialPlaceholder = Boolean(
                  e.getAttribute("placeholder")
                ));
            }
            var n, s, c;
            return (
              (n = i),
              (s = [
                {
                  key: "_init",
                  value: function () {
                    var e = this;
                    if (
                      (this.options.nationalMode &&
                        (this.options.autoHideDialCode = !1),
                      this.options.separateDialCode &&
                        (this.options.autoHideDialCode =
                          this.options.nationalMode =
                            !1),
                      (this.isMobile =
                        /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                          navigator.userAgent
                        )),
                      this.isMobile &&
                        (document.body.classList.add("iti-mobile"),
                        this.options.dropdownContainer ||
                          (this.options.dropdownContainer = document.body)),
                      "undefined" != typeof Promise)
                    ) {
                      var t = new Promise(function (t, i) {
                          (e.resolveAutoCountryPromise = t),
                            (e.rejectAutoCountryPromise = i);
                        }),
                        i = new Promise(function (t, i) {
                          (e.resolveUtilsScriptPromise = t),
                            (e.rejectUtilsScriptPromise = i);
                        });
                      this.promise = Promise.all([t, i]);
                    } else
                      (this.resolveAutoCountryPromise =
                        this.rejectAutoCountryPromise =
                          function () {}),
                        (this.resolveUtilsScriptPromise =
                          this.rejectUtilsScriptPromise =
                            function () {});
                    (this.selectedCountryData = {}),
                      this._processCountryData(),
                      this._generateMarkup(),
                      this._setInitialState(),
                      this._initListeners(),
                      this._initRequests();
                  },
                },
                {
                  key: "_processCountryData",
                  value: function () {
                    this._processAllCountries(),
                      this._processCountryCodes(),
                      this._processPreferredCountries(),
                      this.options.localizedCountries &&
                        this._translateCountriesByLocale(),
                      (this.options.onlyCountries.length ||
                        this.options.localizedCountries) &&
                        this.countries.sort(this._countryNameSort);
                  },
                },
                {
                  key: "_addCountryCode",
                  value: function (t, i, n) {
                    i.length > this.countryCodeMaxLen &&
                      (this.countryCodeMaxLen = i.length),
                      this.countryCodes.hasOwnProperty(i) ||
                        (this.countryCodes[i] = []);
                    for (var a = 0; a < this.countryCodes[i].length; a++)
                      if (this.countryCodes[i][a] === t) return;
                    var s = n !== e ? n : this.countryCodes[i].length;
                    this.countryCodes[i][s] = t;
                  },
                },
                {
                  key: "_processAllCountries",
                  value: function () {
                    if (this.options.onlyCountries.length) {
                      var e = this.options.onlyCountries.map(function (e) {
                        return e.toLowerCase();
                      });
                      this.countries = t.filter(function (t) {
                        return e.indexOf(t.iso2) > -1;
                      });
                    } else if (this.options.excludeCountries.length) {
                      var i = this.options.excludeCountries.map(function (e) {
                        return e.toLowerCase();
                      });
                      this.countries = t.filter(function (e) {
                        return -1 === i.indexOf(e.iso2);
                      });
                    } else this.countries = t;
                  },
                },
                {
                  key: "_translateCountriesByLocale",
                  value: function () {
                    for (var e = 0; e < this.countries.length; e++) {
                      var t = this.countries[e].iso2.toLowerCase();
                      this.options.localizedCountries.hasOwnProperty(t) &&
                        (this.countries[e].name =
                          this.options.localizedCountries[t]);
                    }
                  },
                },
                {
                  key: "_countryNameSort",
                  value: function (e, t) {
                    return e.name.localeCompare(t.name);
                  },
                },
                {
                  key: "_processCountryCodes",
                  value: function () {
                    (this.countryCodeMaxLen = 0),
                      (this.dialCodes = {}),
                      (this.countryCodes = {});
                    for (var e = 0; e < this.countries.length; e++) {
                      var t = this.countries[e];
                      this.dialCodes[t.dialCode] ||
                        (this.dialCodes[t.dialCode] = !0),
                        this._addCountryCode(t.iso2, t.dialCode, t.priority);
                    }
                    for (var i = 0; i < this.countries.length; i++) {
                      var n = this.countries[i];
                      if (n.areaCodes)
                        for (
                          var a = this.countryCodes[n.dialCode][0], s = 0;
                          s < n.areaCodes.length;
                          s++
                        ) {
                          for (
                            var r = n.areaCodes[s], o = 1;
                            o < r.length;
                            o++
                          ) {
                            var M = n.dialCode + r.substr(0, o);
                            this._addCountryCode(a, M),
                              this._addCountryCode(n.iso2, M);
                          }
                          this._addCountryCode(n.iso2, n.dialCode + r);
                        }
                    }
                  },
                },
                {
                  key: "_processPreferredCountries",
                  value: function () {
                    this.preferredCountries = [];
                    for (
                      var e = 0;
                      e < this.options.preferredCountries.length;
                      e++
                    ) {
                      var t = this.options.preferredCountries[e].toLowerCase(),
                        i = this._getCountryData(t, !1, !0);
                      i && this.preferredCountries.push(i);
                    }
                  },
                },
                {
                  key: "_createEl",
                  value: function (e, t, i) {
                    var n = document.createElement(e);
                    return (
                      t &&
                        l(t, function (e, t) {
                          return n.setAttribute(e, t);
                        }),
                      i && i.appendChild(n),
                      n
                    );
                  },
                },
                {
                  key: "_generateMarkup",
                  value: function () {
                    this.telInput.hasAttribute("autocomplete") ||
                      (this.telInput.form &&
                        this.telInput.form.hasAttribute("autocomplete")) ||
                      this.telInput.setAttribute("autocomplete", "off");
                    var e = "iti";
                    this.options.allowDropdown && (e += " iti--allow-dropdown"),
                      this.options.separateDialCode &&
                        (e += " iti--separate-dial-code"),
                      this.options.customContainer &&
                        ((e += " "), (e += this.options.customContainer));
                    var t = this._createEl("div", { class: e });
                    if (
                      (this.telInput.parentNode.insertBefore(t, this.telInput),
                      (this.flagsContainer = this._createEl(
                        "div",
                        { class: "iti__flag-container" },
                        t
                      )),
                      t.appendChild(this.telInput),
                      (this.selectedFlag = this._createEl(
                        "div",
                        {
                          class: "iti__selected-flag",
                          role: "combobox",
                          "aria-controls": "iti-".concat(
                            this.id,
                            "__country-listbox"
                          ),
                          "aria-owns": "iti-".concat(
                            this.id,
                            "__country-listbox"
                          ),
                          "aria-expanded": "false",
                        },
                        this.flagsContainer
                      )),
                      (this.selectedFlagInner = this._createEl(
                        "div",
                        { class: "iti__flag" },
                        this.selectedFlag
                      )),
                      this.options.separateDialCode &&
                        (this.selectedDialCode = this._createEl(
                          "div",
                          { class: "iti__selected-dial-code" },
                          this.selectedFlag
                        )),
                      this.options.allowDropdown &&
                        (this.selectedFlag.setAttribute("tabindex", "0"),
                        (this.dropdownArrow = this._createEl(
                          "div",
                          { class: "iti__arrow" },
                          this.selectedFlag
                        )),
                        (this.countryList = this._createEl("ul", {
                          class: "iti__country-list iti__hide",
                          id: "iti-".concat(this.id, "__country-listbox"),
                          role: "listbox",
                          "aria-label": "List of countries",
                        })),
                        this.preferredCountries.length &&
                          (this._appendListItems(
                            this.preferredCountries,
                            "iti__preferred",
                            !0
                          ),
                          this._createEl(
                            "li",
                            {
                              class: "iti__divider",
                              role: "separator",
                              "aria-disabled": "true",
                            },
                            this.countryList
                          )),
                        this._appendListItems(this.countries, "iti__standard"),
                        this.options.dropdownContainer
                          ? ((this.dropdown = this._createEl("div", {
                              class: "iti iti--container",
                            })),
                            this.dropdown.appendChild(this.countryList))
                          : this.flagsContainer.appendChild(this.countryList)),
                      this.options.hiddenInput)
                    ) {
                      var i = this.options.hiddenInput,
                        n = this.telInput.getAttribute("name");
                      if (n) {
                        var a = n.lastIndexOf("[");
                        -1 !== a &&
                          (i = "".concat(n.substr(0, a), "[").concat(i, "]"));
                      }
                      (this.hiddenInput = this._createEl("input", {
                        type: "hidden",
                        name: i,
                      })),
                        t.appendChild(this.hiddenInput);
                    }
                  },
                },
                {
                  key: "_appendListItems",
                  value: function (e, t, i) {
                    for (var n = "", a = 0; a < e.length; a++) {
                      var s = e[a],
                        r = i ? "-preferred" : "";
                      (n += "<li class='iti__country "
                        .concat(t, "' tabIndex='-1' id='iti-")
                        .concat(this.id, "__item-")
                        .concat(s.iso2)
                        .concat(r, "' role='option' data-dial-code='")
                        .concat(s.dialCode, "' data-country-code='")
                        .concat(s.iso2, "' aria-selected='false'>")),
                        (n +=
                          "<div class='iti__flag-box'><div class='iti__flag iti__".concat(
                            s.iso2,
                            "'></div></div>"
                          )),
                        (n += "<span class='iti__country-name'>".concat(
                          s.name,
                          "</span>"
                        )),
                        (n += "<span class='iti__dial-code'>+".concat(
                          s.dialCode,
                          "</span>"
                        )),
                        (n += "</li>");
                    }
                    this.countryList.insertAdjacentHTML("beforeend", n);
                  },
                },
                {
                  key: "_setInitialState",
                  value: function () {
                    var e = this.telInput.getAttribute("value"),
                      t = this.telInput.value,
                      i =
                        !e || "+" !== e.charAt(0) || (t && "+" === t.charAt(0))
                          ? t
                          : e,
                      n = this._getDialCode(i),
                      a = this._isRegionlessNanp(i),
                      s = this.options,
                      r = s.initialCountry,
                      o = s.nationalMode,
                      M = s.autoHideDialCode,
                      l = s.separateDialCode;
                    n && !a
                      ? this._updateFlagFromNumber(i)
                      : "auto" !== r &&
                        (r
                          ? this._setFlag(r.toLowerCase())
                          : n && a
                          ? this._setFlag("us")
                          : ((this.defaultCountry = this.preferredCountries
                              .length
                              ? this.preferredCountries[0].iso2
                              : this.countries[0].iso2),
                            i || this._setFlag(this.defaultCountry)),
                        i ||
                          o ||
                          M ||
                          l ||
                          (this.telInput.value = "+".concat(
                            this.selectedCountryData.dialCode
                          ))),
                      i && this._updateValFromNumber(i);
                  },
                },
                {
                  key: "_initListeners",
                  value: function () {
                    this._initKeyListeners(),
                      this.options.autoHideDialCode &&
                        this._initBlurListeners(),
                      this.options.allowDropdown &&
                        this._initDropdownListeners(),
                      this.hiddenInput && this._initHiddenInputListener();
                  },
                },
                {
                  key: "_initHiddenInputListener",
                  value: function () {
                    var e = this;
                    (this._handleHiddenInputSubmit = function () {
                      e.hiddenInput.value = e.getNumber();
                    }),
                      this.telInput.form &&
                        this.telInput.form.addEventListener(
                          "submit",
                          this._handleHiddenInputSubmit
                        );
                  },
                },
                {
                  key: "_getClosestLabel",
                  value: function () {
                    for (var e = this.telInput; e && "LABEL" !== e.tagName; )
                      e = e.parentNode;
                    return e;
                  },
                },
                {
                  key: "_initDropdownListeners",
                  value: function () {
                    var e = this;
                    this._handleLabelClick = function (t) {
                      e.countryList.classList.contains("iti__hide")
                        ? e.telInput.focus()
                        : t.preventDefault();
                    };
                    var t = this._getClosestLabel();
                    t && t.addEventListener("click", this._handleLabelClick),
                      (this._handleClickSelectedFlag = function () {
                        !e.countryList.classList.contains("iti__hide") ||
                          e.telInput.disabled ||
                          e.telInput.readOnly ||
                          e._showDropdown();
                      }),
                      this.selectedFlag.addEventListener(
                        "click",
                        this._handleClickSelectedFlag
                      ),
                      (this._handleFlagsContainerKeydown = function (t) {
                        e.countryList.classList.contains("iti__hide") &&
                          -1 !==
                            [
                              "ArrowUp",
                              "Up",
                              "ArrowDown",
                              "Down",
                              " ",
                              "Enter",
                            ].indexOf(t.key) &&
                          (t.preventDefault(),
                          t.stopPropagation(),
                          e._showDropdown()),
                          "Tab" === t.key && e._closeDropdown();
                      }),
                      this.flagsContainer.addEventListener(
                        "keydown",
                        this._handleFlagsContainerKeydown
                      );
                  },
                },
                {
                  key: "_initRequests",
                  value: function () {
                    var e = this;
                    this.options.utilsScript && !window.intlTelInputUtils
                      ? window.intlTelInputGlobals.documentReady()
                        ? window.intlTelInputGlobals.loadUtils(
                            this.options.utilsScript
                          )
                        : window.addEventListener("load", function () {
                            window.intlTelInputGlobals.loadUtils(
                              e.options.utilsScript
                            );
                          })
                      : this.resolveUtilsScriptPromise(),
                      "auto" === this.options.initialCountry
                        ? this._loadAutoCountry()
                        : this.resolveAutoCountryPromise();
                  },
                },
                {
                  key: "_loadAutoCountry",
                  value: function () {
                    window.intlTelInputGlobals.autoCountry
                      ? this.handleAutoCountry()
                      : window.intlTelInputGlobals.startedLoadingAutoCountry ||
                        ((window.intlTelInputGlobals.startedLoadingAutoCountry =
                          !0),
                        "function" == typeof this.options.geoIpLookup &&
                          this.options.geoIpLookup(
                            function (e) {
                              (window.intlTelInputGlobals.autoCountry =
                                e.toLowerCase()),
                                setTimeout(function () {
                                  return u("handleAutoCountry");
                                });
                            },
                            function () {
                              return u("rejectAutoCountryPromise");
                            }
                          ));
                  },
                },
                {
                  key: "_initKeyListeners",
                  value: function () {
                    var e = this;
                    (this._handleKeyupEvent = function () {
                      e._updateFlagFromNumber(e.telInput.value) &&
                        e._triggerCountryChange();
                    }),
                      this.telInput.addEventListener(
                        "keyup",
                        this._handleKeyupEvent
                      ),
                      (this._handleClipboardEvent = function () {
                        setTimeout(e._handleKeyupEvent);
                      }),
                      this.telInput.addEventListener(
                        "cut",
                        this._handleClipboardEvent
                      ),
                      this.telInput.addEventListener(
                        "paste",
                        this._handleClipboardEvent
                      );
                  },
                },
                {
                  key: "_cap",
                  value: function (e) {
                    var t = this.telInput.getAttribute("maxlength");
                    return t && e.length > t ? e.substr(0, t) : e;
                  },
                },
                {
                  key: "_initBlurListeners",
                  value: function () {
                    var e = this;
                    (this._handleSubmitOrBlurEvent = function () {
                      e._removeEmptyDialCode();
                    }),
                      this.telInput.form &&
                        this.telInput.form.addEventListener(
                          "submit",
                          this._handleSubmitOrBlurEvent
                        ),
                      this.telInput.addEventListener(
                        "blur",
                        this._handleSubmitOrBlurEvent
                      );
                  },
                },
                {
                  key: "_removeEmptyDialCode",
                  value: function () {
                    if ("+" === this.telInput.value.charAt(0)) {
                      var e = this._getNumeric(this.telInput.value);
                      (e && this.selectedCountryData.dialCode !== e) ||
                        (this.telInput.value = "");
                    }
                  },
                },
                {
                  key: "_getNumeric",
                  value: function (e) {
                    return e.replace(/\D/g, "");
                  },
                },
                {
                  key: "_trigger",
                  value: function (e) {
                    var t = document.createEvent("Event");
                    t.initEvent(e, !0, !0), this.telInput.dispatchEvent(t);
                  },
                },
                {
                  key: "_showDropdown",
                  value: function () {
                    this.countryList.classList.remove("iti__hide"),
                      this.selectedFlag.setAttribute("aria-expanded", "true"),
                      this._setDropdownPosition(),
                      this.activeItem &&
                        (this._highlightListItem(this.activeItem, !1),
                        this._scrollTo(this.activeItem, !0)),
                      this._bindDropdownListeners(),
                      this.dropdownArrow.classList.add("iti__arrow--up"),
                      this._trigger("open:countrydropdown");
                  },
                },
                {
                  key: "_toggleClass",
                  value: function (e, t, i) {
                    i && !e.classList.contains(t)
                      ? e.classList.add(t)
                      : !i && e.classList.contains(t) && e.classList.remove(t);
                  },
                },
                {
                  key: "_setDropdownPosition",
                  value: function () {
                    var e = this;
                    if (
                      (this.options.dropdownContainer &&
                        this.options.dropdownContainer.appendChild(
                          this.dropdown
                        ),
                      !this.isMobile)
                    ) {
                      var t = this.telInput.getBoundingClientRect(),
                        i =
                          window.pageYOffset ||
                          document.documentElement.scrollTop,
                        n = t.top + i,
                        a = this.countryList.offsetHeight,
                        s =
                          n + this.telInput.offsetHeight + a <
                          i + window.innerHeight,
                        r = n - a > i;
                      if (
                        (this._toggleClass(
                          this.countryList,
                          "iti__country-list--dropup",
                          !s && r
                        ),
                        this.options.dropdownContainer)
                      ) {
                        var o = !s && r ? 0 : this.telInput.offsetHeight;
                        (this.dropdown.style.top = "".concat(n + o, "px")),
                          (this.dropdown.style.left = "".concat(
                            t.left + document.body.scrollLeft,
                            "px"
                          )),
                          (this._handleWindowScroll = function () {
                            return e._closeDropdown();
                          }),
                          window.addEventListener(
                            "scroll",
                            this._handleWindowScroll
                          );
                      }
                    }
                  },
                },
                {
                  key: "_getClosestListItem",
                  value: function (e) {
                    for (
                      var t = e;
                      t &&
                      t !== this.countryList &&
                      !t.classList.contains("iti__country");

                    )
                      t = t.parentNode;
                    return t === this.countryList ? null : t;
                  },
                },
                {
                  key: "_bindDropdownListeners",
                  value: function () {
                    var e = this;
                    (this._handleMouseoverCountryList = function (t) {
                      var i = e._getClosestListItem(t.target);
                      i && e._highlightListItem(i, !1);
                    }),
                      this.countryList.addEventListener(
                        "mouseover",
                        this._handleMouseoverCountryList
                      ),
                      (this._handleClickCountryList = function (t) {
                        var i = e._getClosestListItem(t.target);
                        i && e._selectListItem(i);
                      }),
                      this.countryList.addEventListener(
                        "click",
                        this._handleClickCountryList
                      );
                    var t = !0;
                    (this._handleClickOffToClose = function () {
                      t || e._closeDropdown(), (t = !1);
                    }),
                      document.documentElement.addEventListener(
                        "click",
                        this._handleClickOffToClose
                      );
                    var i = "",
                      n = null;
                    (this._handleKeydownOnDropdown = function (t) {
                      t.preventDefault(),
                        "ArrowUp" === t.key ||
                        "Up" === t.key ||
                        "ArrowDown" === t.key ||
                        "Down" === t.key
                          ? e._handleUpDownKey(t.key)
                          : "Enter" === t.key
                          ? e._handleEnterKey()
                          : "Escape" === t.key
                          ? e._closeDropdown()
                          : /^[a-zA-ZÃ€-Ã¿Ð°-ÑÐ-Ð¯ ]$/.test(t.key) &&
                            (n && clearTimeout(n),
                            (i += t.key.toLowerCase()),
                            e._searchForCountry(i),
                            (n = setTimeout(function () {
                              i = "";
                            }, 1e3)));
                    }),
                      document.addEventListener(
                        "keydown",
                        this._handleKeydownOnDropdown
                      );
                  },
                },
                {
                  key: "_handleUpDownKey",
                  value: function (e) {
                    var t =
                      "ArrowUp" === e || "Up" === e
                        ? this.highlightedItem.previousElementSibling
                        : this.highlightedItem.nextElementSibling;
                    t &&
                      (t.classList.contains("iti__divider") &&
                        (t =
                          "ArrowUp" === e || "Up" === e
                            ? t.previousElementSibling
                            : t.nextElementSibling),
                      this._highlightListItem(t, !0));
                  },
                },
                {
                  key: "_handleEnterKey",
                  value: function () {
                    this.highlightedItem &&
                      this._selectListItem(this.highlightedItem);
                  },
                },
                {
                  key: "_searchForCountry",
                  value: function (e) {
                    for (var t = 0; t < this.countries.length; t++)
                      if (this._startsWith(this.countries[t].name, e)) {
                        var i = this.countryList.querySelector(
                          "#iti-"
                            .concat(this.id, "__item-")
                            .concat(this.countries[t].iso2)
                        );
                        this._highlightListItem(i, !1), this._scrollTo(i, !0);
                        break;
                      }
                  },
                },
                {
                  key: "_startsWith",
                  value: function (e, t) {
                    return e.substr(0, t.length).toLowerCase() === t;
                  },
                },
                {
                  key: "_updateValFromNumber",
                  value: function (e) {
                    var t = e;
                    if (
                      this.options.formatOnDisplay &&
                      window.intlTelInputUtils &&
                      this.selectedCountryData
                    ) {
                      var i =
                          !this.options.separateDialCode &&
                          (this.options.nationalMode || "+" !== t.charAt(0)),
                        n = intlTelInputUtils.numberFormat,
                        a = n.NATIONAL,
                        s = n.INTERNATIONAL,
                        r = i ? a : s;
                      t = intlTelInputUtils.formatNumber(
                        t,
                        this.selectedCountryData.iso2,
                        r
                      );
                    }
                    (t = this._beforeSetNumber(t)), (this.telInput.value = t);
                  },
                },
                {
                  key: "_updateFlagFromNumber",
                  value: function (e) {
                    var t = e,
                      i = this.selectedCountryData.dialCode,
                      n = "1" === i;
                    t &&
                      this.options.nationalMode &&
                      n &&
                      "+" !== t.charAt(0) &&
                      ("1" !== t.charAt(0) && (t = "1".concat(t)),
                      (t = "+".concat(t))),
                      this.options.separateDialCode &&
                        i &&
                        "+" !== t.charAt(0) &&
                        (t = "+".concat(i).concat(t));
                    var a = this._getDialCode(t, !0),
                      s = this._getNumeric(t),
                      r = null;
                    if (a) {
                      var o = this.countryCodes[this._getNumeric(a)],
                        M =
                          -1 !== o.indexOf(this.selectedCountryData.iso2) &&
                          s.length <= a.length - 1;
                      if (!(("1" === i && this._isRegionlessNanp(s)) || M))
                        for (var l = 0; l < o.length; l++)
                          if (o[l]) {
                            r = o[l];
                            break;
                          }
                    } else
                      "+" === t.charAt(0) && s.length
                        ? (r = "")
                        : (t && "+" !== t) || (r = this.defaultCountry);
                    return null !== r && this._setFlag(r);
                  },
                },
                {
                  key: "_isRegionlessNanp",
                  value: function (e) {
                    var t = this._getNumeric(e);
                    if ("1" === t.charAt(0)) {
                      var i = t.substr(1, 3);
                      return -1 !== M.indexOf(i);
                    }
                    return !1;
                  },
                },
                {
                  key: "_highlightListItem",
                  value: function (e, t) {
                    var i = this.highlightedItem;
                    i && i.classList.remove("iti__highlight"),
                      (this.highlightedItem = e),
                      this.highlightedItem.classList.add("iti__highlight"),
                      t && this.highlightedItem.focus();
                  },
                },
                {
                  key: "_getCountryData",
                  value: function (e, i, n) {
                    for (
                      var a = i ? t : this.countries, s = 0;
                      s < a.length;
                      s++
                    )
                      if (a[s].iso2 === e) return a[s];
                    if (n) return null;
                    throw new Error("No country data for '".concat(e, "'"));
                  },
                },
                {
                  key: "_setFlag",
                  value: function (e) {
                    var t = this.selectedCountryData.iso2
                      ? this.selectedCountryData
                      : {};
                    (this.selectedCountryData = e
                      ? this._getCountryData(e, !1, !1)
                      : {}),
                      this.selectedCountryData.iso2 &&
                        (this.defaultCountry = this.selectedCountryData.iso2),
                      this.selectedFlagInner.setAttribute(
                        "class",
                        "iti__flag iti__".concat(e)
                      );
                    var i = e
                      ? ""
                          .concat(this.selectedCountryData.name, ": +")
                          .concat(this.selectedCountryData.dialCode)
                      : "Unknown";
                    if (
                      (this.selectedFlag.setAttribute("title", i),
                      this.options.separateDialCode)
                    ) {
                      var n = this.selectedCountryData.dialCode
                        ? "+".concat(this.selectedCountryData.dialCode)
                        : "";
                      this.selectedDialCode.innerHTML = n;
                      var a =
                        this.selectedFlag.offsetWidth ||
                        this._getHiddenSelectedFlagWidth();
                      this.telInput.style.paddingLeft = "".concat(a + 6, "px");
                    }
                    if (
                      (this._updatePlaceholder(), this.options.allowDropdown)
                    ) {
                      var s = this.activeItem;
                      if (
                        (s &&
                          (s.classList.remove("iti__active"),
                          s.setAttribute("aria-selected", "false")),
                        e)
                      ) {
                        var r =
                          this.countryList.querySelector(
                            "#iti-"
                              .concat(this.id, "__item-")
                              .concat(e, "-preferred")
                          ) ||
                          this.countryList.querySelector(
                            "#iti-".concat(this.id, "__item-").concat(e)
                          );
                        r.setAttribute("aria-selected", "true"),
                          r.classList.add("iti__active"),
                          (this.activeItem = r),
                          this.selectedFlag.setAttribute(
                            "aria-activedescendant",
                            r.getAttribute("id")
                          );
                      }
                    }
                    return t.iso2 !== e;
                  },
                },
                {
                  key: "_getHiddenSelectedFlagWidth",
                  value: function () {
                    var e = this.telInput.parentNode.cloneNode();
                    (e.style.visibility = "hidden"),
                      document.body.appendChild(e);
                    var t = this.flagsContainer.cloneNode();
                    e.appendChild(t);
                    var i = this.selectedFlag.cloneNode(!0);
                    t.appendChild(i);
                    var n = i.offsetWidth;
                    return e.parentNode.removeChild(e), n;
                  },
                },
                {
                  key: "_updatePlaceholder",
                  value: function () {
                    var e =
                      "aggressive" === this.options.autoPlaceholder ||
                      (!this.hadInitialPlaceholder &&
                        "polite" === this.options.autoPlaceholder);
                    if (window.intlTelInputUtils && e) {
                      var t =
                          intlTelInputUtils.numberType[
                            this.options.placeholderNumberType
                          ],
                        i = this.selectedCountryData.iso2
                          ? intlTelInputUtils.getExampleNumber(
                              this.selectedCountryData.iso2,
                              this.options.nationalMode,
                              t
                            )
                          : "";
                      (i = this._beforeSetNumber(i)),
                        "function" == typeof this.options.customPlaceholder &&
                          (i = this.options.customPlaceholder(
                            i,
                            this.selectedCountryData
                          )),
                        this.telInput.setAttribute("placeholder", i);
                    }
                  },
                },
                {
                  key: "_selectListItem",
                  value: function (e) {
                    var t = this._setFlag(e.getAttribute("data-country-code"));
                    this._closeDropdown(),
                      this._updateDialCode(
                        e.getAttribute("data-dial-code"),
                        !0
                      ),
                      this.telInput.focus();
                    var i = this.telInput.value.length;
                    this.telInput.setSelectionRange(i, i),
                      t && this._triggerCountryChange();
                  },
                },
                {
                  key: "_closeDropdown",
                  value: function () {
                    this.countryList.classList.add("iti__hide"),
                      this.selectedFlag.setAttribute("aria-expanded", "false"),
                      this.dropdownArrow.classList.remove("iti__arrow--up"),
                      document.removeEventListener(
                        "keydown",
                        this._handleKeydownOnDropdown
                      ),
                      document.documentElement.removeEventListener(
                        "click",
                        this._handleClickOffToClose
                      ),
                      this.countryList.removeEventListener(
                        "mouseover",
                        this._handleMouseoverCountryList
                      ),
                      this.countryList.removeEventListener(
                        "click",
                        this._handleClickCountryList
                      ),
                      this.options.dropdownContainer &&
                        (this.isMobile ||
                          window.removeEventListener(
                            "scroll",
                            this._handleWindowScroll
                          ),
                        this.dropdown.parentNode &&
                          this.dropdown.parentNode.removeChild(this.dropdown)),
                      this._trigger("close:countrydropdown");
                  },
                },
                {
                  key: "_scrollTo",
                  value: function (e, t) {
                    var i = this.countryList,
                      n =
                        window.pageYOffset ||
                        document.documentElement.scrollTop,
                      a = i.offsetHeight,
                      s = i.getBoundingClientRect().top + n,
                      r = s + a,
                      o = e.offsetHeight,
                      M = e.getBoundingClientRect().top + n,
                      l = M + o,
                      u = M - s + i.scrollTop,
                      c = a / 2 - o / 2;
                    if (M < s) t && (u -= c), (i.scrollTop = u);
                    else if (l > r) {
                      t && (u += c);
                      var g = a - o;
                      i.scrollTop = u - g;
                    }
                  },
                },
                {
                  key: "_updateDialCode",
                  value: function (e, t) {
                    var i,
                      n = this.telInput.value,
                      a = "+".concat(e);
                    if ("+" === n.charAt(0)) {
                      var s = this._getDialCode(n);
                      i = s ? n.replace(s, a) : a;
                    } else {
                      if (
                        this.options.nationalMode ||
                        this.options.separateDialCode
                      )
                        return;
                      if (n) i = a + n;
                      else {
                        if (!t && this.options.autoHideDialCode) return;
                        i = a;
                      }
                    }
                    this.telInput.value = i;
                  },
                },
                {
                  key: "_getDialCode",
                  value: function (e, t) {
                    var i = "";
                    if ("+" === e.charAt(0))
                      for (var n = "", a = 0; a < e.length; a++) {
                        var s = e.charAt(a);
                        if (!isNaN(parseInt(s, 10))) {
                          if (((n += s), t))
                            this.countryCodes[n] && (i = e.substr(0, a + 1));
                          else if (this.dialCodes[n]) {
                            i = e.substr(0, a + 1);
                            break;
                          }
                          if (n.length === this.countryCodeMaxLen) break;
                        }
                      }
                    return i;
                  },
                },
                {
                  key: "_getFullNumber",
                  value: function () {
                    var e = this.telInput.value.trim(),
                      t = this.selectedCountryData.dialCode,
                      i = this._getNumeric(e);
                    return (
                      (this.options.separateDialCode &&
                      "+" !== e.charAt(0) &&
                      t &&
                      i
                        ? "+".concat(t)
                        : "") + e
                    );
                  },
                },
                {
                  key: "_beforeSetNumber",
                  value: function (e) {
                    var t = e;
                    if (this.options.separateDialCode) {
                      var i = this._getDialCode(t);
                      if (i) {
                        var n =
                          " " ===
                            t[
                              (i = "+".concat(
                                this.selectedCountryData.dialCode
                              )).length
                            ] || "-" === t[i.length]
                            ? i.length + 1
                            : i.length;
                        t = t.substr(n);
                      }
                    }
                    return this._cap(t);
                  },
                },
                {
                  key: "_triggerCountryChange",
                  value: function () {
                    this._trigger("countrychange");
                  },
                },
                {
                  key: "handleAutoCountry",
                  value: function () {
                    "auto" === this.options.initialCountry &&
                      ((this.defaultCountry =
                        window.intlTelInputGlobals.autoCountry),
                      this.telInput.value ||
                        this.setCountry(this.defaultCountry),
                      this.resolveAutoCountryPromise());
                  },
                },
                {
                  key: "handleUtils",
                  value: function () {
                    window.intlTelInputUtils &&
                      (this.telInput.value &&
                        this._updateValFromNumber(this.telInput.value),
                      this._updatePlaceholder()),
                      this.resolveUtilsScriptPromise();
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    var e = this.telInput.form;
                    if (this.options.allowDropdown) {
                      this._closeDropdown(),
                        this.selectedFlag.removeEventListener(
                          "click",
                          this._handleClickSelectedFlag
                        ),
                        this.flagsContainer.removeEventListener(
                          "keydown",
                          this._handleFlagsContainerKeydown
                        );
                      var t = this._getClosestLabel();
                      t &&
                        t.removeEventListener("click", this._handleLabelClick);
                    }
                    this.hiddenInput &&
                      e &&
                      e.removeEventListener(
                        "submit",
                        this._handleHiddenInputSubmit
                      ),
                      this.options.autoHideDialCode &&
                        (e &&
                          e.removeEventListener(
                            "submit",
                            this._handleSubmitOrBlurEvent
                          ),
                        this.telInput.removeEventListener(
                          "blur",
                          this._handleSubmitOrBlurEvent
                        )),
                      this.telInput.removeEventListener(
                        "keyup",
                        this._handleKeyupEvent
                      ),
                      this.telInput.removeEventListener(
                        "cut",
                        this._handleClipboardEvent
                      ),
                      this.telInput.removeEventListener(
                        "paste",
                        this._handleClipboardEvent
                      ),
                      this.telInput.removeAttribute("data-intl-tel-input-id");
                    var i = this.telInput.parentNode;
                    i.parentNode.insertBefore(this.telInput, i),
                      i.parentNode.removeChild(i),
                      delete window.intlTelInputGlobals.instances[this.id];
                  },
                },
                {
                  key: "getExtension",
                  value: function () {
                    return window.intlTelInputUtils
                      ? intlTelInputUtils.getExtension(
                          this._getFullNumber(),
                          this.selectedCountryData.iso2
                        )
                      : "";
                  },
                },
                {
                  key: "getNumber",
                  value: function (e) {
                    if (window.intlTelInputUtils) {
                      var t = this.selectedCountryData.iso2;
                      return intlTelInputUtils.formatNumber(
                        this._getFullNumber(),
                        t,
                        e
                      );
                    }
                    return "";
                  },
                },
                {
                  key: "getNumberType",
                  value: function () {
                    return window.intlTelInputUtils
                      ? intlTelInputUtils.getNumberType(
                          this._getFullNumber(),
                          this.selectedCountryData.iso2
                        )
                      : -99;
                  },
                },
                {
                  key: "getSelectedCountryData",
                  value: function () {
                    return this.selectedCountryData;
                  },
                },
                {
                  key: "getValidationError",
                  value: function () {
                    if (window.intlTelInputUtils) {
                      var e = this.selectedCountryData.iso2;
                      return intlTelInputUtils.getValidationError(
                        this._getFullNumber(),
                        e
                      );
                    }
                    return -99;
                  },
                },
                {
                  key: "isValidNumber",
                  value: function () {
                    var e = this._getFullNumber().trim(),
                      t = this.options.nationalMode
                        ? this.selectedCountryData.iso2
                        : "";
                    return window.intlTelInputUtils
                      ? intlTelInputUtils.isValidNumber(e, t)
                      : null;
                  },
                },
                {
                  key: "setCountry",
                  value: function (e) {
                    var t = e.toLowerCase();
                    this.selectedFlagInner.classList.contains(
                      "iti__".concat(t)
                    ) ||
                      (this._setFlag(t),
                      this._updateDialCode(
                        this.selectedCountryData.dialCode,
                        !1
                      ),
                      this._triggerCountryChange());
                  },
                },
                {
                  key: "setNumber",
                  value: function (e) {
                    var t = this._updateFlagFromNumber(e);
                    this._updateValFromNumber(e),
                      t && this._triggerCountryChange();
                  },
                },
                {
                  key: "setPlaceholderNumberType",
                  value: function (e) {
                    (this.options.placeholderNumberType = e),
                      this._updatePlaceholder();
                  },
                },
              ]),
              s && a(n.prototype, s),
              c && a(n, c),
              i
            );
          })();
        s.getCountryData = function () {
          return t;
        };
        var g = function (e, t, i) {
          var n = document.createElement("script");
          (n.onload = function () {
            u("handleUtils"), t && t();
          }),
            (n.onerror = function () {
              u("rejectUtilsScriptPromise"), i && i();
            }),
            (n.className = "iti-load-utils"),
            (n.async = !0),
            (n.src = e),
            document.body.appendChild(n);
        };
        return (
          (s.loadUtils = function (e) {
            if (
              !window.intlTelInputUtils &&
              !window.intlTelInputGlobals.startedLoadingUtilsScript
            ) {
              if (
                ((window.intlTelInputGlobals.startedLoadingUtilsScript = !0),
                "undefined" != typeof Promise)
              )
                return new Promise(function (t, i) {
                  return g(e, t, i);
                });
              g(e);
            }
            return null;
          }),
          (s.defaults = o),
          (s.version = "17.0.21"),
          function (e, t) {
            var i = new c(e, t);
            return (
              i._init(),
              e.setAttribute("data-intl-tel-input-id", i.id),
              (window.intlTelInputGlobals.instances[i.id] = i),
              i
            );
          }
        );
      })();
    }),
      e.exports ? (e.exports = t()) : (window.intlTelInput = t());
  })(Cr);
  var Ur = Cr.exports;
  /*!
   * shared v9.2.2
   * (c) 2022 kazuya kawaguchi
   * Released under the MIT License.
   */ const Qr = "undefined" != typeof window,
    _r = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
    Yr = (e) => (_r ? Symbol(e) : e),
    Pr = (e) =>
      JSON.stringify(e)
        .replace(/\u2028/g, "\\u2028")
        .replace(/\u2029/g, "\\u2029")
        .replace(/\u0027/g, "\\u0027"),
    Rr = (e) => "number" == typeof e && isFinite(e),
    Br = (e) => "[object RegExp]" === no(e),
    Wr = (e) => ao(e) && 0 === Object.keys(e).length;
  function Fr(e, t) {
    "undefined" != typeof console &&
      (console.warn("[intlify] " + e), t && console.warn(t.stack));
  }
  const Vr = Object.assign;
  let Hr;
  const Zr = () =>
    Hr ||
    (Hr =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : {});
  function Gr(e) {
    return e
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  }
  const Jr = Object.prototype.hasOwnProperty;
  function $r(e, t) {
    return Jr.call(e, t);
  }
  const Kr = Array.isArray,
    qr = (e) => "function" == typeof e,
    Xr = (e) => "string" == typeof e,
    eo = (e) => "boolean" == typeof e,
    to = (e) => null !== e && "object" == typeof e,
    io = Object.prototype.toString,
    no = (e) => io.call(e),
    ao = (e) => "[object Object]" === no(e),
    so = 1,
    ro = 2,
    oo = 3,
    Mo = 4,
    lo = 5,
    uo = 6,
    co = 7,
    go = 8,
    No = 9,
    Do = 10,
    Io = 11,
    yo = 12,
    jo = 13,
    po = 14,
    zo = 15;
  function To(e, t, i = {}) {
    const { domain: n, messages: a, args: s } = i,
      r = new SyntaxError(String(e));
    return (r.code = e), t && (r.location = t), (r.domain = n), r;
  }
  function ho(e) {
    throw e;
  }
  function Ao(e, t, i) {
    const n = { start: e, end: t };
    return null != i && (n.source = i), n;
  }
  const mo = " ",
    xo = "\n",
    fo = String.fromCharCode(8232),
    ko = String.fromCharCode(8233);
  function Lo(e) {
    const t = e;
    let i = 0,
      n = 1,
      a = 1,
      s = 0;
    const r = (e) => "\r" === t[e] && t[e + 1] === xo,
      o = (e) => t[e] === ko,
      M = (e) => t[e] === fo,
      l = (e) => r(e) || ((e) => t[e] === xo)(e) || o(e) || M(e),
      u = (e) => (r(e) || o(e) || M(e) ? xo : t[e]);
    function c() {
      return (s = 0), l(i) && (n++, (a = 0)), r(i) && i++, i++, a++, t[i];
    }
    return {
      index: () => i,
      line: () => n,
      column: () => a,
      peekOffset: () => s,
      charAt: u,
      currentChar: () => u(i),
      currentPeek: () => u(i + s),
      next: c,
      peek: function () {
        return r(i + s) && s++, s++, t[i + s];
      },
      reset: function () {
        (i = 0), (n = 1), (a = 1), (s = 0);
      },
      resetPeek: function (e = 0) {
        s = e;
      },
      skipToPeek: function () {
        const e = i + s;
        for (; e !== i; ) c();
        s = 0;
      },
    };
  }
  const Oo = void 0;
  function wo(e, t = {}) {
    const i = !1 !== t.location,
      n = Lo(e),
      a = () => n.index(),
      s = () => {
        return (
          (e = n.line()),
          (t = n.column()),
          (i = n.index()),
          { line: e, column: t, offset: i }
        );
        var e, t, i;
      },
      r = s(),
      o = a(),
      M = {
        currentType: 14,
        offset: o,
        startLoc: r,
        endLoc: r,
        lastType: 14,
        lastOffset: o,
        lastStartLoc: r,
        lastEndLoc: r,
        braceNest: 0,
        inLinked: !1,
        text: "",
      },
      l = () => M,
      { onError: u } = t;
    function c(e, t, i, ...n) {
      const a = l();
      if (((t.column += i), (t.offset += i), u)) {
        const i = To(e, Ao(a.startLoc, t), { domain: "tokenizer", args: n });
        u(i);
      }
    }
    function g(e, t, n) {
      (e.endLoc = s()), (e.currentType = t);
      const a = { type: t };
      return (
        i && (a.loc = Ao(e.startLoc, e.endLoc)), null != n && (a.value = n), a
      );
    }
    const d = (e) => g(e, 14);
    function N(e, t) {
      return e.currentChar() === t ? (e.next(), t) : (c(so, s(), 0, t), "");
    }
    function D(e) {
      let t = "";
      for (; e.currentPeek() === mo || e.currentPeek() === xo; )
        (t += e.currentPeek()), e.peek();
      return t;
    }
    function I(e) {
      const t = D(e);
      return e.skipToPeek(), t;
    }
    function y(e) {
      if (e === Oo) return !1;
      const t = e.charCodeAt(0);
      return (t >= 97 && t <= 122) || (t >= 65 && t <= 90) || 95 === t;
    }
    function j(e, t) {
      const { currentType: i } = t;
      if (2 !== i) return !1;
      D(e);
      const n = (function (e) {
        if (e === Oo) return !1;
        const t = e.charCodeAt(0);
        return t >= 48 && t <= 57;
      })("-" === e.currentPeek() ? e.peek() : e.currentPeek());
      return e.resetPeek(), n;
    }
    function p(e) {
      D(e);
      const t = "|" === e.currentPeek();
      return e.resetPeek(), t;
    }
    function z(e, t = !0) {
      const i = (t = !1, n = "", a = !1) => {
          const s = e.currentPeek();
          return "{" === s
            ? "%" !== n && t
            : "@" !== s && s
            ? "%" === s
              ? (e.peek(), i(t, "%", !0))
              : "|" === s
              ? !("%" !== n && !a) || !(n === mo || n === xo)
              : s === mo
              ? (e.peek(), i(!0, mo, a))
              : s !== xo || (e.peek(), i(!0, xo, a))
            : "%" === n || t;
        },
        n = i();
      return t && e.resetPeek(), n;
    }
    function T(e, t) {
      const i = e.currentChar();
      return i === Oo ? Oo : t(i) ? (e.next(), i) : null;
    }
    function h(e) {
      return T(e, (e) => {
        const t = e.charCodeAt(0);
        return (
          (t >= 97 && t <= 122) ||
          (t >= 65 && t <= 90) ||
          (t >= 48 && t <= 57) ||
          95 === t ||
          36 === t
        );
      });
    }
    function A(e) {
      return T(e, (e) => {
        const t = e.charCodeAt(0);
        return t >= 48 && t <= 57;
      });
    }
    function m(e) {
      return T(e, (e) => {
        const t = e.charCodeAt(0);
        return (
          (t >= 48 && t <= 57) || (t >= 65 && t <= 70) || (t >= 97 && t <= 102)
        );
      });
    }
    function x(e) {
      let t = "",
        i = "";
      for (; (t = A(e)); ) i += t;
      return i;
    }
    function f(e) {
      let t = "";
      for (;;) {
        const i = e.currentChar();
        if ("{" === i || "}" === i || "@" === i || "|" === i || !i) break;
        if ("%" === i) {
          if (!z(e)) break;
          (t += i), e.next();
        } else if (i === mo || i === xo)
          if (z(e)) (t += i), e.next();
          else {
            if (p(e)) break;
            (t += i), e.next();
          }
        else (t += i), e.next();
      }
      return t;
    }
    function k(e) {
      const t = e.currentChar();
      switch (t) {
        case "\\":
        case "'":
          return e.next(), `\\${t}`;
        case "u":
          return L(e, t, 4);
        case "U":
          return L(e, t, 6);
        default:
          return c(Mo, s(), 0, t), "";
      }
    }
    function L(e, t, i) {
      N(e, t);
      let n = "";
      for (let a = 0; a < i; a++) {
        const i = m(e);
        if (!i) {
          c(lo, s(), 0, `\\${t}${n}${e.currentChar()}`);
          break;
        }
        n += i;
      }
      return `\\${t}${n}`;
    }
    function O(e) {
      I(e);
      const t = N(e, "|");
      return I(e), t;
    }
    function w(e, t) {
      let i = null;
      switch (e.currentChar()) {
        case "{":
          return (
            t.braceNest >= 1 && c(No, s(), 0),
            e.next(),
            (i = g(t, 2, "{")),
            I(e),
            t.braceNest++,
            i
          );
        case "}":
          return (
            t.braceNest > 0 && 2 === t.currentType && c(go, s(), 0),
            e.next(),
            (i = g(t, 3, "}")),
            t.braceNest--,
            t.braceNest > 0 && I(e),
            t.inLinked && 0 === t.braceNest && (t.inLinked = !1),
            i
          );
        case "@":
          return (
            t.braceNest > 0 && c(co, s(), 0),
            (i = v(e, t) || d(t)),
            (t.braceNest = 0),
            i
          );
        default:
          let n = !0,
            a = !0,
            r = !0;
          if (p(e))
            return (
              t.braceNest > 0 && c(co, s(), 0),
              (i = g(t, 1, O(e))),
              (t.braceNest = 0),
              (t.inLinked = !1),
              i
            );
          if (
            t.braceNest > 0 &&
            (5 === t.currentType || 6 === t.currentType || 7 === t.currentType)
          )
            return c(co, s(), 0), (t.braceNest = 0), E(e, t);
          if (
            (n = (function (e, t) {
              const { currentType: i } = t;
              if (2 !== i) return !1;
              D(e);
              const n = y(e.currentPeek());
              return e.resetPeek(), n;
            })(e, t))
          )
            return (
              (i = g(
                t,
                5,
                (function (e) {
                  I(e);
                  let t = "",
                    i = "";
                  for (; (t = h(e)); ) i += t;
                  return e.currentChar() === Oo && c(co, s(), 0), i;
                })(e)
              )),
              I(e),
              i
            );
          if ((a = j(e, t)))
            return (
              (i = g(
                t,
                6,
                (function (e) {
                  I(e);
                  let t = "";
                  return (
                    "-" === e.currentChar()
                      ? (e.next(), (t += `-${x(e)}`))
                      : (t += x(e)),
                    e.currentChar() === Oo && c(co, s(), 0),
                    t
                  );
                })(e)
              )),
              I(e),
              i
            );
          if (
            (r = (function (e, t) {
              const { currentType: i } = t;
              if (2 !== i) return !1;
              D(e);
              const n = "'" === e.currentPeek();
              return e.resetPeek(), n;
            })(e, t))
          )
            return (
              (i = g(
                t,
                7,
                (function (e) {
                  I(e), N(e, "'");
                  let t = "",
                    i = "";
                  const n = (e) => "'" !== e && e !== xo;
                  for (; (t = T(e, n)); ) i += "\\" === t ? k(e) : t;
                  const a = e.currentChar();
                  return a === xo || a === Oo
                    ? (c(oo, s(), 0), a === xo && (e.next(), N(e, "'")), i)
                    : (N(e, "'"), i);
                })(e)
              )),
              I(e),
              i
            );
          if (!n && !a && !r)
            return (
              (i = g(
                t,
                13,
                (function (e) {
                  I(e);
                  let t = "",
                    i = "";
                  const n = (e) =>
                    "{" !== e && "}" !== e && e !== mo && e !== xo;
                  for (; (t = T(e, n)); ) i += t;
                  return i;
                })(e)
              )),
              c(ro, s(), 0, i.value),
              I(e),
              i
            );
      }
      return i;
    }
    function v(e, t) {
      const { currentType: i } = t;
      let n = null;
      const a = e.currentChar();
      switch (
        ((8 !== i && 9 !== i && 12 !== i && 10 !== i) ||
          (a !== xo && a !== mo) ||
          c(Do, s(), 0),
        a)
      ) {
        case "@":
          return e.next(), (n = g(t, 8, "@")), (t.inLinked = !0), n;
        case ".":
          return I(e), e.next(), g(t, 9, ".");
        case ":":
          return I(e), e.next(), g(t, 10, ":");
        default:
          return p(e)
            ? ((n = g(t, 1, O(e))), (t.braceNest = 0), (t.inLinked = !1), n)
            : (function (e, t) {
                const { currentType: i } = t;
                if (8 !== i) return !1;
                D(e);
                const n = "." === e.currentPeek();
                return e.resetPeek(), n;
              })(e, t) ||
              (function (e, t) {
                const { currentType: i } = t;
                if (8 !== i && 12 !== i) return !1;
                D(e);
                const n = ":" === e.currentPeek();
                return e.resetPeek(), n;
              })(e, t)
            ? (I(e), v(e, t))
            : (function (e, t) {
                const { currentType: i } = t;
                if (9 !== i) return !1;
                D(e);
                const n = y(e.currentPeek());
                return e.resetPeek(), n;
              })(e, t)
            ? (I(e),
              g(
                t,
                12,
                (function (e) {
                  let t = "",
                    i = "";
                  for (; (t = h(e)); ) i += t;
                  return i;
                })(e)
              ))
            : (function (e, t) {
                const { currentType: i } = t;
                if (10 !== i) return !1;
                const n = () => {
                    const t = e.currentPeek();
                    return "{" === t
                      ? y(e.peek())
                      : !(
                          "@" === t ||
                          "%" === t ||
                          "|" === t ||
                          ":" === t ||
                          "." === t ||
                          t === mo ||
                          !t
                        ) && (t === xo ? (e.peek(), n()) : y(t));
                  },
                  a = n();
                return e.resetPeek(), a;
              })(e, t)
            ? (I(e),
              "{" === a
                ? w(e, t) || n
                : g(
                    t,
                    11,
                    (function (e) {
                      const t = (i = !1, n) => {
                        const a = e.currentChar();
                        return "{" !== a &&
                          "%" !== a &&
                          "@" !== a &&
                          "|" !== a &&
                          a
                          ? a === mo
                            ? n
                            : a === xo
                            ? ((n += a), e.next(), t(i, n))
                            : ((n += a), e.next(), t(!0, n))
                          : n;
                      };
                      return t(!1, "");
                    })(e)
                  ))
            : (8 === i && c(Do, s(), 0),
              (t.braceNest = 0),
              (t.inLinked = !1),
              E(e, t));
      }
    }
    function E(e, t) {
      let i = { type: 14 };
      if (t.braceNest > 0) return w(e, t) || d(t);
      if (t.inLinked) return v(e, t) || d(t);
      switch (e.currentChar()) {
        case "{":
          return w(e, t) || d(t);
        case "}":
          return c(uo, s(), 0), e.next(), g(t, 3, "}");
        case "@":
          return v(e, t) || d(t);
        default:
          if (p(e))
            return (i = g(t, 1, O(e))), (t.braceNest = 0), (t.inLinked = !1), i;
          const { isModulo: n, hasSpace: a } = (function (e) {
            const t = D(e),
              i = "%" === e.currentPeek() && "{" === e.peek();
            return e.resetPeek(), { isModulo: i, hasSpace: t.length > 0 };
          })(e);
          if (n)
            return a
              ? g(t, 0, f(e))
              : g(
                  t,
                  4,
                  (function (e) {
                    I(e);
                    const t = e.currentChar();
                    return "%" !== t && c(so, s(), 0, t), e.next(), "%";
                  })(e)
                );
          if (z(e)) return g(t, 0, f(e));
      }
      return i;
    }
    return {
      nextToken: function () {
        const { currentType: e, offset: t, startLoc: i, endLoc: r } = M;
        return (
          (M.lastType = e),
          (M.lastOffset = t),
          (M.lastStartLoc = i),
          (M.lastEndLoc = r),
          (M.offset = a()),
          (M.startLoc = s()),
          n.currentChar() === Oo ? g(M, 14) : E(n, M)
        );
      },
      currentOffset: a,
      currentPosition: s,
      context: l,
    };
  }
  const vo = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
  function Eo(e, t, i) {
    switch (e) {
      case "\\\\":
        return "\\";
      case "\\'":
        return "'";
      default: {
        const e = parseInt(t || i, 16);
        return e <= 55295 || e >= 57344 ? String.fromCodePoint(e) : "ï¿½";
      }
    }
  }
  function So(e = {}) {
    const t = !1 !== e.location,
      { onError: i } = e;
    function n(e, t, n, a, ...s) {
      const r = e.currentPosition();
      if (((r.offset += a), (r.column += a), i)) {
        const e = To(t, Ao(n, r), { domain: "parser", args: s });
        i(e);
      }
    }
    function a(e, i, n) {
      const a = { type: e, start: i, end: i };
      return t && (a.loc = { start: n, end: n }), a;
    }
    function s(e, i, n, a) {
      (e.end = i), a && (e.type = a), t && e.loc && (e.loc.end = n);
    }
    function r(e, t) {
      const i = e.context(),
        n = a(3, i.offset, i.startLoc);
      return (n.value = t), s(n, e.currentOffset(), e.currentPosition()), n;
    }
    function o(e, t) {
      const i = e.context(),
        { lastOffset: n, lastStartLoc: r } = i,
        o = a(5, n, r);
      return (
        (o.index = parseInt(t, 10)),
        e.nextToken(),
        s(o, e.currentOffset(), e.currentPosition()),
        o
      );
    }
    function M(e, t) {
      const i = e.context(),
        { lastOffset: n, lastStartLoc: r } = i,
        o = a(4, n, r);
      return (
        (o.key = t),
        e.nextToken(),
        s(o, e.currentOffset(), e.currentPosition()),
        o
      );
    }
    function l(e, t) {
      const i = e.context(),
        { lastOffset: n, lastStartLoc: r } = i,
        o = a(9, n, r);
      return (
        (o.value = t.replace(vo, Eo)),
        e.nextToken(),
        s(o, e.currentOffset(), e.currentPosition()),
        o
      );
    }
    function u(e) {
      const t = e.context(),
        i = a(6, t.offset, t.startLoc);
      let r = e.nextToken();
      if (9 === r.type) {
        const t = (function (e) {
          const t = e.nextToken(),
            i = e.context(),
            { lastOffset: r, lastStartLoc: o } = i,
            M = a(8, r, o);
          return 12 !== t.type
            ? (n(e, yo, i.lastStartLoc, 0),
              (M.value = ""),
              s(M, r, o),
              { nextConsumeToken: t, node: M })
            : (null == t.value && n(e, po, i.lastStartLoc, 0, bo(t)),
              (M.value = t.value || ""),
              s(M, e.currentOffset(), e.currentPosition()),
              { node: M });
        })(e);
        (i.modifier = t.node), (r = t.nextConsumeToken || e.nextToken());
      }
      switch (
        (10 !== r.type && n(e, po, t.lastStartLoc, 0, bo(r)),
        (r = e.nextToken()),
        2 === r.type && (r = e.nextToken()),
        r.type)
      ) {
        case 11:
          null == r.value && n(e, po, t.lastStartLoc, 0, bo(r)),
            (i.key = (function (e, t) {
              const i = e.context(),
                n = a(7, i.offset, i.startLoc);
              return (
                (n.value = t), s(n, e.currentOffset(), e.currentPosition()), n
              );
            })(e, r.value || ""));
          break;
        case 5:
          null == r.value && n(e, po, t.lastStartLoc, 0, bo(r)),
            (i.key = M(e, r.value || ""));
          break;
        case 6:
          null == r.value && n(e, po, t.lastStartLoc, 0, bo(r)),
            (i.key = o(e, r.value || ""));
          break;
        case 7:
          null == r.value && n(e, po, t.lastStartLoc, 0, bo(r)),
            (i.key = l(e, r.value || ""));
          break;
        default:
          n(e, jo, t.lastStartLoc, 0);
          const u = e.context(),
            c = a(7, u.offset, u.startLoc);
          return (
            (c.value = ""),
            s(c, u.offset, u.startLoc),
            (i.key = c),
            s(i, u.offset, u.startLoc),
            { nextConsumeToken: r, node: i }
          );
      }
      return s(i, e.currentOffset(), e.currentPosition()), { node: i };
    }
    function c(e) {
      const t = e.context(),
        i = a(
          2,
          1 === t.currentType ? e.currentOffset() : t.offset,
          1 === t.currentType ? t.endLoc : t.startLoc
        );
      i.items = [];
      let c = null;
      do {
        const a = c || e.nextToken();
        switch (((c = null), a.type)) {
          case 0:
            null == a.value && n(e, po, t.lastStartLoc, 0, bo(a)),
              i.items.push(r(e, a.value || ""));
            break;
          case 6:
            null == a.value && n(e, po, t.lastStartLoc, 0, bo(a)),
              i.items.push(o(e, a.value || ""));
            break;
          case 5:
            null == a.value && n(e, po, t.lastStartLoc, 0, bo(a)),
              i.items.push(M(e, a.value || ""));
            break;
          case 7:
            null == a.value && n(e, po, t.lastStartLoc, 0, bo(a)),
              i.items.push(l(e, a.value || ""));
            break;
          case 8:
            const s = u(e);
            i.items.push(s.node), (c = s.nextConsumeToken || null);
        }
      } while (14 !== t.currentType && 1 !== t.currentType);
      return (
        s(
          i,
          1 === t.currentType ? t.lastOffset : e.currentOffset(),
          1 === t.currentType ? t.lastEndLoc : e.currentPosition()
        ),
        i
      );
    }
    function g(e) {
      const t = e.context(),
        { offset: i, startLoc: r } = t,
        o = c(e);
      return 14 === t.currentType
        ? o
        : (function (e, t, i, r) {
            const o = e.context();
            let M = 0 === r.items.length;
            const l = a(1, t, i);
            (l.cases = []), l.cases.push(r);
            do {
              const t = c(e);
              M || (M = 0 === t.items.length), l.cases.push(t);
            } while (14 !== o.currentType);
            return (
              M && n(e, Io, i, 0),
              s(l, e.currentOffset(), e.currentPosition()),
              l
            );
          })(e, i, r, o);
    }
    return {
      parse: function (i) {
        const r = wo(i, Vr({}, e)),
          o = r.context(),
          M = a(0, o.offset, o.startLoc);
        return (
          t && M.loc && (M.loc.source = i),
          (M.body = g(r)),
          14 !== o.currentType &&
            n(r, po, o.lastStartLoc, 0, i[o.offset] || ""),
          s(M, r.currentOffset(), r.currentPosition()),
          M
        );
      },
    };
  }
  function bo(e) {
    if (14 === e.type) return "EOF";
    const t = (e.value || "").replace(/\r?\n/gu, "\\n");
    return t.length > 10 ? t.slice(0, 9) + "â€¦" : t;
  }
  function Co(e, t) {
    for (let i = 0; i < e.length; i++) Uo(e[i], t);
  }
  function Uo(e, t) {
    switch (e.type) {
      case 1:
        Co(e.cases, t), t.helper("plural");
        break;
      case 2:
        Co(e.items, t);
        break;
      case 6:
        Uo(e.key, t), t.helper("linked"), t.helper("type");
        break;
      case 5:
        t.helper("interpolate"), t.helper("list");
        break;
      case 4:
        t.helper("interpolate"), t.helper("named");
    }
  }
  function Qo(e, t = {}) {
    const i = (function (e, t = {}) {
      const i = { ast: e, helpers: new Set() };
      return { context: () => i, helper: (e) => (i.helpers.add(e), e) };
    })(e);
    i.helper("normalize"), e.body && Uo(e.body, i);
    const n = i.context();
    e.helpers = Array.from(n.helpers);
  }
  function _o(e, t) {
    const { helper: i } = e;
    switch (t.type) {
      case 0:
        !(function (e, t) {
          t.body ? _o(e, t.body) : e.push("null");
        })(e, t);
        break;
      case 1:
        !(function (e, t) {
          const { helper: i, needIndent: n } = e;
          if (t.cases.length > 1) {
            e.push(`${i("plural")}([`), e.indent(n());
            const a = t.cases.length;
            for (let i = 0; i < a && (_o(e, t.cases[i]), i !== a - 1); i++)
              e.push(", ");
            e.deindent(n()), e.push("])");
          }
        })(e, t);
        break;
      case 2:
        !(function (e, t) {
          const { helper: i, needIndent: n } = e;
          e.push(`${i("normalize")}([`), e.indent(n());
          const a = t.items.length;
          for (let s = 0; s < a && (_o(e, t.items[s]), s !== a - 1); s++)
            e.push(", ");
          e.deindent(n()), e.push("])");
        })(e, t);
        break;
      case 6:
        !(function (e, t) {
          const { helper: i } = e;
          e.push(`${i("linked")}(`),
            _o(e, t.key),
            t.modifier
              ? (e.push(", "), _o(e, t.modifier), e.push(", _type"))
              : e.push(", undefined, _type"),
            e.push(")");
        })(e, t);
        break;
      case 8:
      case 7:
      case 9:
      case 3:
        e.push(JSON.stringify(t.value), t);
        break;
      case 5:
        e.push(`${i("interpolate")}(${i("list")}(${t.index}))`, t);
        break;
      case 4:
        e.push(
          `${i("interpolate")}(${i("named")}(${JSON.stringify(t.key)}))`,
          t
        );
    }
  }
  function Yo(e, t = {}) {
    const i = Vr({}, t),
      n = So(i).parse(e);
    return (
      Qo(n, i),
      ((e, t = {}) => {
        const i = Xr(t.mode) ? t.mode : "normal",
          n = Xr(t.filename) ? t.filename : "message.intl",
          a = !!t.sourceMap,
          s =
            null != t.breakLineCode
              ? t.breakLineCode
              : "arrow" === i
              ? ";"
              : "\n",
          r = t.needIndent ? t.needIndent : "arrow" !== i,
          o = e.helpers || [],
          M = (function (e, t) {
            const {
                sourceMap: i,
                filename: n,
                breakLineCode: a,
                needIndent: s,
              } = t,
              r = {
                source: e.loc.source,
                filename: n,
                code: "",
                column: 1,
                line: 1,
                offset: 0,
                map: void 0,
                breakLineCode: a,
                needIndent: s,
                indentLevel: 0,
              };
            function o(e, t) {
              r.code += e;
            }
            function M(e, t = !0) {
              const i = t ? a : "";
              o(s ? i + "  ".repeat(e) : i);
            }
            return {
              context: () => r,
              push: o,
              indent: function (e = !0) {
                const t = ++r.indentLevel;
                e && M(t);
              },
              deindent: function (e = !0) {
                const t = --r.indentLevel;
                e && M(t);
              },
              newline: function () {
                M(r.indentLevel);
              },
              helper: (e) => `_${e}`,
              needIndent: () => r.needIndent,
            };
          })(e, {
            mode: i,
            filename: n,
            sourceMap: a,
            breakLineCode: s,
            needIndent: r,
          });
        M.push("normal" === i ? "function __msg__ (ctx) {" : "(ctx) => {"),
          M.indent(r),
          o.length > 0 &&
            (M.push(
              `const { ${o.map((e) => `${e}: _${e}`).join(", ")} } = ctx`
            ),
            M.newline()),
          M.push("return "),
          _o(M, e),
          M.deindent(r),
          M.push("}");
        const { code: l, map: u } = M.context();
        return { ast: e, code: l, map: u ? u.toJSON() : void 0 };
      })(n, i)
    );
  }
  /*!
   * devtools-if v9.2.2
   * (c) 2022 kazuya kawaguchi
   * Released under the MIT License.
   */ const Po = "i18n:init",
    Ro = "function:translate",
    Bo = [];
  /*!
   * core-base v9.2.2
   * (c) 2022 kazuya kawaguchi
   * Released under the MIT License.
   */ (Bo[0] = { w: [0], i: [3, 0], "[": [4], o: [7] }),
    (Bo[1] = { w: [1], ".": [2], "[": [4], o: [7] }),
    (Bo[2] = { w: [2], i: [3, 0], 0: [3, 0] }),
    (Bo[3] = {
      i: [3, 0],
      0: [3, 0],
      w: [1, 1],
      ".": [2, 1],
      "[": [4, 1],
      o: [7, 1],
    }),
    (Bo[4] = {
      "'": [5, 0],
      '"': [6, 0],
      "[": [4, 2],
      "]": [1, 3],
      o: 8,
      l: [4, 0],
    }),
    (Bo[5] = { "'": [4, 0], o: 8, l: [5, 0] }),
    (Bo[6] = { '"': [4, 0], o: 8, l: [6, 0] });
  const Wo = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
  function Fo(e) {
    if (null == e) return "o";
    switch (e.charCodeAt(0)) {
      case 91:
      case 93:
      case 46:
      case 34:
      case 39:
        return e;
      case 95:
      case 36:
      case 45:
        return "i";
      case 9:
      case 10:
      case 13:
      case 160:
      case 65279:
      case 8232:
      case 8233:
        return "w";
    }
    return "i";
  }
  function Vo(e) {
    const t = e.trim();
    return (
      ("0" !== e.charAt(0) || !isNaN(parseInt(e))) &&
      ((i = t),
      Wo.test(i)
        ? (function (e) {
            const t = e.charCodeAt(0);
            return t !== e.charCodeAt(e.length - 1) || (34 !== t && 39 !== t)
              ? e
              : e.slice(1, -1);
          })(t)
        : "*" + t)
    );
    var i;
  }
  const Ho = new Map();
  function Zo(e, t) {
    return to(e) ? e[t] : null;
  }
  const Go = (e) => e,
    Jo = (e) => "",
    $o = (e) => (0 === e.length ? "" : e.join("")),
    Ko = (e) =>
      null == e
        ? ""
        : Kr(e) || (ao(e) && e.toString === io)
        ? JSON.stringify(e, null, 2)
        : String(e);
  function qo(e, t) {
    return (
      (e = Math.abs(e)),
      2 === t ? (e ? (e > 1 ? 1 : 0) : 1) : e ? Math.min(e, 2) : 0
    );
  }
  function Xo(e = {}) {
    const t = e.locale,
      i = (function (e) {
        const t = Rr(e.pluralIndex) ? e.pluralIndex : -1;
        return e.named && (Rr(e.named.count) || Rr(e.named.n))
          ? Rr(e.named.count)
            ? e.named.count
            : Rr(e.named.n)
            ? e.named.n
            : t
          : t;
      })(e),
      n =
        to(e.pluralRules) && Xr(t) && qr(e.pluralRules[t])
          ? e.pluralRules[t]
          : qo,
      a = to(e.pluralRules) && Xr(t) && qr(e.pluralRules[t]) ? qo : void 0,
      s = e.list || [],
      r = e.named || {};
    Rr(e.pluralIndex) &&
      (function (e, t) {
        t.count || (t.count = e), t.n || (t.n = e);
      })(i, r);
    function o(t) {
      const i = qr(e.messages)
        ? e.messages(t)
        : !!to(e.messages) && e.messages[t];
      return i || (e.parent ? e.parent.message(t) : Jo);
    }
    const M =
        ao(e.processor) && qr(e.processor.normalize)
          ? e.processor.normalize
          : $o,
      l =
        ao(e.processor) && qr(e.processor.interpolate)
          ? e.processor.interpolate
          : Ko,
      u = {
        list: (e) => s[e],
        named: (e) => r[e],
        plural: (e) => e[n(i, e.length, a)],
        linked: (t, ...i) => {
          const [n, a] = i;
          let s = "text",
            r = "";
          1 === i.length
            ? to(n)
              ? ((r = n.modifier || r), (s = n.type || s))
              : Xr(n) && (r = n || r)
            : 2 === i.length && (Xr(n) && (r = n || r), Xr(a) && (s = a || s));
          let M = o(t)(u);
          return (
            "vnode" === s && Kr(M) && r && (M = M[0]),
            r ? ((l = r), e.modifiers ? e.modifiers[l] : Go)(M, s) : M
          );
          var l;
        },
        message: o,
        type:
          ao(e.processor) && Xr(e.processor.type) ? e.processor.type : "text",
        interpolate: l,
        normalize: M,
      };
    return u;
  }
  let eM = null;
  const tM = iM(Ro);
  function iM(e) {
    return (t) => eM && eM.emit(e, t);
  }
  function nM(e, t, i) {
    return [
      ...new Set([
        i,
        ...(Kr(t) ? t : to(t) ? Object.keys(t) : Xr(t) ? [t] : [i]),
      ]),
    ];
  }
  function aM(e, t, i) {
    const n = Xr(i) ? i : MM,
      a = e;
    a.__localeChainCache || (a.__localeChainCache = new Map());
    let s = a.__localeChainCache.get(n);
    if (!s) {
      s = [];
      let e = [i];
      for (; Kr(e); ) e = sM(s, e, t);
      const r = Kr(t) || !ao(t) ? t : t.default ? t.default : null;
      (e = Xr(r) ? [r] : r),
        Kr(e) && sM(s, e, !1),
        a.__localeChainCache.set(n, s);
    }
    return s;
  }
  function sM(e, t, i) {
    let n = !0;
    for (let a = 0; a < t.length && eo(n); a++) {
      const s = t[a];
      Xr(s) && (n = rM(e, t[a], i));
    }
    return n;
  }
  function rM(e, t, i) {
    let n;
    const a = t.split("-");
    do {
      (n = oM(e, a.join("-"), i)), a.splice(-1, 1);
    } while (a.length && !0 === n);
    return n;
  }
  function oM(e, t, i) {
    let n = !1;
    if (!e.includes(t) && ((n = !0), t)) {
      n = "!" !== t[t.length - 1];
      const a = t.replace(/!/g, "");
      e.push(a), (Kr(i) || ao(i)) && i[a] && (n = i[a]);
    }
    return n;
  }
  const MM = "en-US",
    lM = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
  let uM, cM, gM;
  let dM = null;
  const NM = (e) => {
    dM = e;
  };
  let DM = null;
  const IM = (e) => {
    DM = e;
  };
  let yM = 0;
  function jM(e = {}) {
    const t = Xr(e.version) ? e.version : "9.2.2",
      i = Xr(e.locale) ? e.locale : MM,
      n =
        Kr(e.fallbackLocale) ||
        ao(e.fallbackLocale) ||
        Xr(e.fallbackLocale) ||
        !1 === e.fallbackLocale
          ? e.fallbackLocale
          : i,
      a = ao(e.messages) ? e.messages : { [i]: {} },
      s = ao(e.datetimeFormats) ? e.datetimeFormats : { [i]: {} },
      r = ao(e.numberFormats) ? e.numberFormats : { [i]: {} },
      o = Vr({}, e.modifiers || {}, {
        upper: (e, t) =>
          "text" === t && Xr(e)
            ? e.toUpperCase()
            : "vnode" === t && to(e) && "__v_isVNode" in e
            ? e.children.toUpperCase()
            : e,
        lower: (e, t) =>
          "text" === t && Xr(e)
            ? e.toLowerCase()
            : "vnode" === t && to(e) && "__v_isVNode" in e
            ? e.children.toLowerCase()
            : e,
        capitalize: (e, t) =>
          "text" === t && Xr(e)
            ? lM(e)
            : "vnode" === t && to(e) && "__v_isVNode" in e
            ? lM(e.children)
            : e,
      }),
      M = e.pluralRules || {},
      l = qr(e.missing) ? e.missing : null,
      u = (!eo(e.missingWarn) && !Br(e.missingWarn)) || e.missingWarn,
      c = (!eo(e.fallbackWarn) && !Br(e.fallbackWarn)) || e.fallbackWarn,
      g = !!e.fallbackFormat,
      d = !!e.unresolving,
      N = qr(e.postTranslation) ? e.postTranslation : null,
      D = ao(e.processor) ? e.processor : null,
      I = !eo(e.warnHtmlMessage) || e.warnHtmlMessage,
      y = !!e.escapeParameter,
      j = qr(e.messageCompiler) ? e.messageCompiler : uM,
      p = qr(e.messageResolver) ? e.messageResolver : cM || Zo,
      z = qr(e.localeFallbacker) ? e.localeFallbacker : gM || nM,
      T = to(e.fallbackContext) ? e.fallbackContext : void 0,
      h = qr(e.onWarn) ? e.onWarn : Fr,
      A = e,
      m = to(A.__datetimeFormatters) ? A.__datetimeFormatters : new Map(),
      x = to(A.__numberFormatters) ? A.__numberFormatters : new Map(),
      f = to(A.__meta) ? A.__meta : {};
    yM++;
    const k = {
      version: t,
      cid: yM,
      locale: i,
      fallbackLocale: n,
      messages: a,
      modifiers: o,
      pluralRules: M,
      missing: l,
      missingWarn: u,
      fallbackWarn: c,
      fallbackFormat: g,
      unresolving: d,
      postTranslation: N,
      processor: D,
      warnHtmlMessage: I,
      escapeParameter: y,
      messageCompiler: j,
      messageResolver: p,
      localeFallbacker: z,
      fallbackContext: T,
      onWarn: h,
      __meta: f,
    };
    return (
      (k.datetimeFormats = s),
      (k.numberFormats = r),
      (k.__datetimeFormatters = m),
      (k.__numberFormatters = x),
      __INTLIFY_PROD_DEVTOOLS__ &&
        (function (e, t, i) {
          eM &&
            eM.emit(Po, {
              timestamp: Date.now(),
              i18n: e,
              version: t,
              meta: i,
            });
        })(k, t, f),
      k
    );
  }
  function pM(e, t, i, n, a) {
    const { missing: s, onWarn: r } = e;
    if (null !== s) {
      const n = s(e, i, t, a);
      return Xr(n) ? n : t;
    }
    return t;
  }
  function zM(e, t, i) {
    (e.__localeChainCache = new Map()), e.localeFallbacker(e, i, t);
  }
  const TM = (e) => e;
  let hM = Object.create(null);
  let AM = zo;
  const mM = () => ++AM,
    xM = {
      INVALID_ARGUMENT: AM,
      INVALID_DATE_ARGUMENT: mM(),
      INVALID_ISO_DATE_ARGUMENT: mM(),
      __EXTEND_POINT__: mM(),
    };
  function fM(e) {
    return To(e, null, void 0);
  }
  const kM = () => "",
    LM = (e) => qr(e);
  function OM(e, ...t) {
    const {
        fallbackFormat: i,
        postTranslation: n,
        unresolving: a,
        messageCompiler: s,
        fallbackLocale: r,
        messages: o,
      } = e,
      [M, l] = EM(...t),
      u = eo(l.missingWarn) ? l.missingWarn : e.missingWarn,
      c = eo(l.fallbackWarn) ? l.fallbackWarn : e.fallbackWarn,
      g = eo(l.escapeParameter) ? l.escapeParameter : e.escapeParameter,
      d = !!l.resolvedMessage,
      N =
        Xr(l.default) || eo(l.default)
          ? eo(l.default)
            ? s
              ? M
              : () => M
            : l.default
          : i
          ? s
            ? M
            : () => M
          : "",
      D = i || "" !== N,
      I = Xr(l.locale) ? l.locale : e.locale;
    g &&
      (function (e) {
        Kr(e.list)
          ? (e.list = e.list.map((e) => (Xr(e) ? Gr(e) : e)))
          : to(e.named) &&
            Object.keys(e.named).forEach((t) => {
              Xr(e.named[t]) && (e.named[t] = Gr(e.named[t]));
            });
      })(l);
    let [y, j, p] = d ? [M, I, o[I] || {}] : wM(e, M, I, r, c, u),
      z = y,
      T = M;
    if (
      (d || Xr(z) || LM(z) || (D && ((z = N), (T = z))),
      !(d || ((Xr(z) || LM(z)) && Xr(j))))
    )
      return a ? -1 : M;
    let h = !1;
    const A = LM(z)
      ? z
      : vM(e, M, j, z, T, () => {
          h = !0;
        });
    if (h) return z;
    const m = (function (e, t, i, n) {
        const {
            modifiers: a,
            pluralRules: s,
            messageResolver: r,
            fallbackLocale: o,
            fallbackWarn: M,
            missingWarn: l,
            fallbackContext: u,
          } = e,
          c = (n) => {
            let a = r(i, n);
            if (null == a && u) {
              const [, , e] = wM(u, n, t, o, M, l);
              a = r(e, n);
            }
            if (Xr(a)) {
              let i = !1;
              const s = vM(e, n, t, a, n, () => {
                i = !0;
              });
              return i ? kM : s;
            }
            return LM(a) ? a : kM;
          },
          g = { locale: t, modifiers: a, pluralRules: s, messages: c };
        e.processor && (g.processor = e.processor);
        n.list && (g.list = n.list);
        n.named && (g.named = n.named);
        Rr(n.plural) && (g.pluralIndex = n.plural);
        return g;
      })(e, j, p, l),
      x = (function (e, t, i) {
        return t(i);
      })(0, A, Xo(m)),
      f = n ? n(x, M) : x;
    if (__INTLIFY_PROD_DEVTOOLS__) {
      const t = {
        timestamp: Date.now(),
        key: Xr(M) ? M : LM(z) ? z.key : "",
        locale: j || (LM(z) ? z.locale : ""),
        format: Xr(z) ? z : LM(z) ? z.source : "",
        message: f,
      };
      (t.meta = Vr({}, e.__meta, dM || {})), tM(t);
    }
    return f;
  }
  function wM(e, t, i, n, a, s) {
    const {
        messages: r,
        onWarn: o,
        messageResolver: M,
        localeFallbacker: l,
      } = e,
      u = l(e, n, i);
    let c,
      g = {},
      d = null;
    for (
      let N = 0;
      N < u.length &&
      ((c = u[N]),
      (g = r[c] || {}),
      null === (d = M(g, t)) && (d = g[t]),
      !Xr(d) && !qr(d));
      N++
    ) {
      const i = pM(e, t, c, 0, "translate");
      i !== t && (d = i);
    }
    return [d, c, g];
  }
  function vM(e, t, i, n, a, s) {
    const { messageCompiler: r, warnHtmlMessage: o } = e;
    if (LM(n)) {
      const e = n;
      return (e.locale = e.locale || i), (e.key = e.key || t), e;
    }
    if (null == r) {
      const e = () => n;
      return (e.locale = i), (e.key = t), e;
    }
    const M = r(
      n,
      (function (e, t, i, n, a, s) {
        return {
          warnHtmlMessage: a,
          onError: (e) => {
            throw (s && s(e), e);
          },
          onCacheKey: (e) => ((e, t, i) => Pr({ l: e, k: t, s: i }))(t, i, e),
        };
      })(0, i, a, 0, o, s)
    );
    return (M.locale = i), (M.key = t), (M.source = n), M;
  }
  function EM(...e) {
    const [t, i, n] = e,
      a = {};
    if (!Xr(t) && !Rr(t) && !LM(t)) throw fM(xM.INVALID_ARGUMENT);
    const s = Rr(t) ? String(t) : (LM(t), t);
    return (
      Rr(i)
        ? (a.plural = i)
        : Xr(i)
        ? (a.default = i)
        : ao(i) && !Wr(i)
        ? (a.named = i)
        : Kr(i) && (a.list = i),
      Rr(n) ? (a.plural = n) : Xr(n) ? (a.default = n) : ao(n) && Vr(a, n),
      [s, a]
    );
  }
  function SM(e, ...t) {
    const {
        datetimeFormats: i,
        unresolving: n,
        fallbackLocale: a,
        onWarn: s,
        localeFallbacker: r,
      } = e,
      { __datetimeFormatters: o } = e,
      [M, l, u, c] = CM(...t);
    eo(u.missingWarn) ? u.missingWarn : e.missingWarn;
    eo(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const g = !!u.part,
      d = Xr(u.locale) ? u.locale : e.locale,
      N = r(e, a, d);
    if (!Xr(M) || "" === M) return new Intl.DateTimeFormat(d, c).format(l);
    let D,
      I = {},
      y = null;
    for (
      let z = 0;
      z < N.length && ((D = N[z]), (I = i[D] || {}), (y = I[M]), !ao(y));
      z++
    )
      pM(e, M, D, 0, "datetime format");
    if (!ao(y) || !Xr(D)) return n ? -1 : M;
    let j = `${D}__${M}`;
    Wr(c) || (j = `${j}__${JSON.stringify(c)}`);
    let p = o.get(j);
    return (
      p || ((p = new Intl.DateTimeFormat(D, Vr({}, y, c))), o.set(j, p)),
      g ? p.formatToParts(l) : p.format(l)
    );
  }
  const bM = [
    "localeMatcher",
    "weekday",
    "era",
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "timeZoneName",
    "formatMatcher",
    "hour12",
    "timeZone",
    "dateStyle",
    "timeStyle",
    "calendar",
    "dayPeriod",
    "numberingSystem",
    "hourCycle",
    "fractionalSecondDigits",
  ];
  function CM(...e) {
    const [t, i, n, a] = e,
      s = {};
    let r,
      o = {};
    if (Xr(t)) {
      const e = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
      if (!e) throw fM(xM.INVALID_ISO_DATE_ARGUMENT);
      const i = e[3]
        ? e[3].trim().startsWith("T")
          ? `${e[1].trim()}${e[3].trim()}`
          : `${e[1].trim()}T${e[3].trim()}`
        : e[1].trim();
      r = new Date(i);
      try {
        r.toISOString();
      } catch (M) {
        throw fM(xM.INVALID_ISO_DATE_ARGUMENT);
      }
    } else if ("[object Date]" === no(t)) {
      if (isNaN(t.getTime())) throw fM(xM.INVALID_DATE_ARGUMENT);
      r = t;
    } else {
      if (!Rr(t)) throw fM(xM.INVALID_ARGUMENT);
      r = t;
    }
    return (
      Xr(i)
        ? (s.key = i)
        : ao(i) &&
          Object.keys(i).forEach((e) => {
            bM.includes(e) ? (o[e] = i[e]) : (s[e] = i[e]);
          }),
      Xr(n) ? (s.locale = n) : ao(n) && (o = n),
      ao(a) && (o = a),
      [s.key || "", r, s, o]
    );
  }
  function UM(e, t, i) {
    const n = e;
    for (const a in i) {
      const e = `${t}__${a}`;
      n.__datetimeFormatters.has(e) && n.__datetimeFormatters.delete(e);
    }
  }
  function QM(e, ...t) {
    const {
        numberFormats: i,
        unresolving: n,
        fallbackLocale: a,
        onWarn: s,
        localeFallbacker: r,
      } = e,
      { __numberFormatters: o } = e,
      [M, l, u, c] = YM(...t);
    eo(u.missingWarn) ? u.missingWarn : e.missingWarn;
    eo(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const g = !!u.part,
      d = Xr(u.locale) ? u.locale : e.locale,
      N = r(e, a, d);
    if (!Xr(M) || "" === M) return new Intl.NumberFormat(d, c).format(l);
    let D,
      I = {},
      y = null;
    for (
      let z = 0;
      z < N.length && ((D = N[z]), (I = i[D] || {}), (y = I[M]), !ao(y));
      z++
    )
      pM(e, M, D, 0, "number format");
    if (!ao(y) || !Xr(D)) return n ? -1 : M;
    let j = `${D}__${M}`;
    Wr(c) || (j = `${j}__${JSON.stringify(c)}`);
    let p = o.get(j);
    return (
      p || ((p = new Intl.NumberFormat(D, Vr({}, y, c))), o.set(j, p)),
      g ? p.formatToParts(l) : p.format(l)
    );
  }
  const _M = [
    "localeMatcher",
    "style",
    "currency",
    "currencyDisplay",
    "currencySign",
    "useGrouping",
    "minimumIntegerDigits",
    "minimumFractionDigits",
    "maximumFractionDigits",
    "minimumSignificantDigits",
    "maximumSignificantDigits",
    "compactDisplay",
    "notation",
    "signDisplay",
    "unit",
    "unitDisplay",
    "roundingMode",
    "roundingPriority",
    "roundingIncrement",
    "trailingZeroDisplay",
  ];
  function YM(...e) {
    const [t, i, n, a] = e,
      s = {};
    let r = {};
    if (!Rr(t)) throw fM(xM.INVALID_ARGUMENT);
    const o = t;
    return (
      Xr(i)
        ? (s.key = i)
        : ao(i) &&
          Object.keys(i).forEach((e) => {
            _M.includes(e) ? (r[e] = i[e]) : (s[e] = i[e]);
          }),
      Xr(n) ? (s.locale = n) : ao(n) && (r = n),
      ao(a) && (r = a),
      [s.key || "", o, s, r]
    );
  }
  function PM(e, t, i) {
    const n = e;
    for (const a in i) {
      const e = `${t}__${a}`;
      n.__numberFormatters.has(e) && n.__numberFormatters.delete(e);
    }
  }
  "boolean" != typeof __INTLIFY_PROD_DEVTOOLS__ &&
    (Zr().__INTLIFY_PROD_DEVTOOLS__ = !1);
  let RM = zo;
  const BM = () => ++RM,
    WM = {
      UNEXPECTED_RETURN_TYPE: RM,
      INVALID_ARGUMENT: BM(),
      MUST_BE_CALL_SETUP_TOP: BM(),
      NOT_INSLALLED: BM(),
      NOT_AVAILABLE_IN_LEGACY_MODE: BM(),
      REQUIRED_VALUE: BM(),
      INVALID_VALUE: BM(),
      CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: BM(),
      NOT_INSLALLED_WITH_PROVIDE: BM(),
      UNEXPECTED_ERROR: BM(),
      NOT_COMPATIBLE_LEGACY_VUE_I18N: BM(),
      BRIDGE_SUPPORT_VUE_2_ONLY: BM(),
      MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: BM(),
      NOT_AVAILABLE_COMPOSITION_IN_LEGACY: BM(),
      __EXTEND_POINT__: BM(),
    };
  function FM(e, ...t) {
    return To(e, null, void 0);
  }
  const VM = Yr("__transrateVNode"),
    HM = Yr("__datetimeParts"),
    ZM = Yr("__numberParts"),
    GM = Yr("__setPluralRules");
  Yr("__intlifyMeta");
  const JM = Yr("__injectWithOption");
  function $M(e) {
    if (!to(e)) return e;
    for (const t in e)
      if ($r(e, t))
        if (t.includes(".")) {
          const i = t.split("."),
            n = i.length - 1;
          let a = e;
          for (let e = 0; e < n; e++)
            i[e] in a || (a[i[e]] = {}), (a = a[i[e]]);
          (a[i[n]] = e[t]), delete e[t], to(a[i[n]]) && $M(a[i[n]]);
        } else to(e[t]) && $M(e[t]);
    return e;
  }
  function KM(e, t) {
    const { messages: i, __i18n: n, messageResolver: a, flatJson: s } = t,
      r = ao(i) ? i : Kr(n) ? {} : { [e]: {} };
    if (
      (Kr(n) &&
        n.forEach((e) => {
          if ("locale" in e && "resource" in e) {
            const { locale: t, resource: i } = e;
            t ? ((r[t] = r[t] || {}), XM(i, r[t])) : XM(i, r);
          } else Xr(e) && XM(JSON.parse(e), r);
        }),
      null == a && s)
    )
      for (const o in r) $r(r, o) && $M(r[o]);
    return r;
  }
  const qM = (e) => !to(e) || Kr(e);
  function XM(e, t) {
    if (qM(e) || qM(t)) throw FM(WM.INVALID_VALUE);
    for (const i in e)
      $r(e, i) && (qM(e[i]) || qM(t[i]) ? (t[i] = e[i]) : XM(e[i], t[i]));
  }
  function el(e) {
    return e.type;
  }
  function tl(e, t, i) {
    let n = to(t.messages) ? t.messages : {};
    "__i18nGlobal" in i &&
      (n = KM(e.locale.value, { messages: n, __i18n: i.__i18nGlobal }));
    const a = Object.keys(n);
    if (
      (a.length &&
        a.forEach((t) => {
          e.mergeLocaleMessage(t, n[t]);
        }),
      to(t.datetimeFormats))
    ) {
      const i = Object.keys(t.datetimeFormats);
      i.length &&
        i.forEach((i) => {
          e.mergeDateTimeFormat(i, t.datetimeFormats[i]);
        });
    }
    if (to(t.numberFormats)) {
      const i = Object.keys(t.numberFormats);
      i.length &&
        i.forEach((i) => {
          e.mergeNumberFormat(i, t.numberFormats[i]);
        });
    }
  }
  function il(e) {
    return na(Pn, null, e, 0);
  }
  const nl = "__INTLIFY_META__";
  let al = 0;
  function sl(e) {
    return (t, i, n, a) => e(i, n, Da() || void 0, a);
  }
  function rl(e = {}, t) {
    const { __root: i } = e,
      n = void 0 === i;
    let a = !eo(e.inheritLocale) || e.inheritLocale;
    const s = ht(i && a ? i.locale.value : Xr(e.locale) ? e.locale : MM),
      r = ht(
        i && a
          ? i.fallbackLocale.value
          : Xr(e.fallbackLocale) ||
            Kr(e.fallbackLocale) ||
            ao(e.fallbackLocale) ||
            !1 === e.fallbackLocale
          ? e.fallbackLocale
          : s.value
      ),
      o = ht(KM(s.value, e)),
      M = ht(ao(e.datetimeFormats) ? e.datetimeFormats : { [s.value]: {} }),
      l = ht(ao(e.numberFormats) ? e.numberFormats : { [s.value]: {} });
    let u = i
        ? i.missingWarn
        : (!eo(e.missingWarn) && !Br(e.missingWarn)) || e.missingWarn,
      c = i
        ? i.fallbackWarn
        : (!eo(e.fallbackWarn) && !Br(e.fallbackWarn)) || e.fallbackWarn,
      g = i ? i.fallbackRoot : !eo(e.fallbackRoot) || e.fallbackRoot,
      d = !!e.fallbackFormat,
      N = qr(e.missing) ? e.missing : null,
      D = qr(e.missing) ? sl(e.missing) : null,
      I = qr(e.postTranslation) ? e.postTranslation : null,
      y = i ? i.warnHtmlMessage : !eo(e.warnHtmlMessage) || e.warnHtmlMessage,
      j = !!e.escapeParameter;
    const p = i ? i.modifiers : ao(e.modifiers) ? e.modifiers : {};
    let z,
      T = e.pluralRules || (i && i.pluralRules);
    (z = (() => {
      n && IM(null);
      const t = {
        version: "9.2.2",
        locale: s.value,
        fallbackLocale: r.value,
        messages: o.value,
        modifiers: p,
        pluralRules: T,
        missing: null === D ? void 0 : D,
        missingWarn: u,
        fallbackWarn: c,
        fallbackFormat: d,
        unresolving: !0,
        postTranslation: null === I ? void 0 : I,
        warnHtmlMessage: y,
        escapeParameter: j,
        messageResolver: e.messageResolver,
        __meta: { framework: "vue" },
      };
      (t.datetimeFormats = M.value),
        (t.numberFormats = l.value),
        (t.__datetimeFormatters = ao(z) ? z.__datetimeFormatters : void 0),
        (t.__numberFormatters = ao(z) ? z.__numberFormatters : void 0);
      const i = jM(t);
      return n && IM(i), i;
    })()),
      zM(z, s.value, r.value);
    const h = fa({
        get: () => s.value,
        set: (e) => {
          (s.value = e), (z.locale = s.value);
        },
      }),
      A = fa({
        get: () => r.value,
        set: (e) => {
          (r.value = e), (z.fallbackLocale = r.value), zM(z, s.value, e);
        },
      }),
      m = fa(() => o.value),
      x = fa(() => M.value),
      f = fa(() => l.value);
    const k = (e, t, a, u, c, d) => {
      let N;
      if (
        (s.value, r.value, o.value, M.value, l.value, __INTLIFY_PROD_DEVTOOLS__)
      )
        try {
          NM(
            (() => {
              const e = Da();
              let t = null;
              return e && (t = el(e)[nl]) ? { [nl]: t } : null;
            })()
          ),
            n || (z.fallbackContext = i ? DM : void 0),
            (N = e(z));
        } finally {
          NM(null), n || (z.fallbackContext = void 0);
        }
      else N = e(z);
      if (Rr(N) && -1 === N) {
        const [e, n] = t();
        return i && g ? u(i) : c(e);
      }
      if (d(N)) return N;
      throw FM(WM.UNEXPECTED_RETURN_TYPE);
    };
    function L(...e) {
      return k(
        (t) => Reflect.apply(OM, null, [t, ...e]),
        () => EM(...e),
        0,
        (t) => Reflect.apply(t.t, t, [...e]),
        (e) => e,
        (e) => Xr(e)
      );
    }
    const O = {
      normalize: function (e) {
        return e.map((e) => (Xr(e) || Rr(e) || eo(e) ? il(String(e)) : e));
      },
      interpolate: (e) => e,
      type: "vnode",
    };
    function w(e) {
      return o.value[e] || {};
    }
    al++,
      i &&
        Qr &&
        (oi(i.locale, (e) => {
          a && ((s.value = e), (z.locale = e), zM(z, s.value, r.value));
        }),
        oi(i.fallbackLocale, (e) => {
          a && ((r.value = e), (z.fallbackLocale = e), zM(z, s.value, r.value));
        }));
    const v = {
      id: al,
      locale: h,
      fallbackLocale: A,
      get inheritLocale() {
        return a;
      },
      set inheritLocale(e) {
        (a = e),
          e &&
            i &&
            ((s.value = i.locale.value),
            (r.value = i.fallbackLocale.value),
            zM(z, s.value, r.value));
      },
      get availableLocales() {
        return Object.keys(o.value).sort();
      },
      messages: m,
      get modifiers() {
        return p;
      },
      get pluralRules() {
        return T || {};
      },
      get isGlobal() {
        return n;
      },
      get missingWarn() {
        return u;
      },
      set missingWarn(e) {
        (u = e), (z.missingWarn = u);
      },
      get fallbackWarn() {
        return c;
      },
      set fallbackWarn(e) {
        (c = e), (z.fallbackWarn = c);
      },
      get fallbackRoot() {
        return g;
      },
      set fallbackRoot(e) {
        g = e;
      },
      get fallbackFormat() {
        return d;
      },
      set fallbackFormat(e) {
        (d = e), (z.fallbackFormat = d);
      },
      get warnHtmlMessage() {
        return y;
      },
      set warnHtmlMessage(e) {
        (y = e), (z.warnHtmlMessage = e);
      },
      get escapeParameter() {
        return j;
      },
      set escapeParameter(e) {
        (j = e), (z.escapeParameter = e);
      },
      t: L,
      getLocaleMessage: w,
      setLocaleMessage: function (e, t) {
        (o.value[e] = t), (z.messages = o.value);
      },
      mergeLocaleMessage: function (e, t) {
        (o.value[e] = o.value[e] || {}),
          XM(t, o.value[e]),
          (z.messages = o.value);
      },
      getPostTranslationHandler: function () {
        return qr(I) ? I : null;
      },
      setPostTranslationHandler: function (e) {
        (I = e), (z.postTranslation = e);
      },
      getMissingHandler: function () {
        return N;
      },
      setMissingHandler: function (e) {
        null !== e && (D = sl(e)), (N = e), (z.missing = D);
      },
      [GM]: function (e) {
        (T = e), (z.pluralRules = T);
      },
    };
    return (
      (v.datetimeFormats = x),
      (v.numberFormats = f),
      (v.rt = function (...e) {
        const [t, i, n] = e;
        if (n && !to(n)) throw FM(WM.INVALID_ARGUMENT);
        return L(t, i, Vr({ resolvedMessage: !0 }, n || {}));
      }),
      (v.te = function (e, t) {
        const i = w(Xr(t) ? t : s.value);
        return null !== z.messageResolver(i, e);
      }),
      (v.tm = function (e) {
        const t = (function (e) {
          let t = null;
          const i = aM(z, r.value, s.value);
          for (let n = 0; n < i.length; n++) {
            const a = o.value[i[n]] || {},
              s = z.messageResolver(a, e);
            if (null != s) {
              t = s;
              break;
            }
          }
          return t;
        })(e);
        return null != t ? t : (i && i.tm(e)) || {};
      }),
      (v.d = function (...e) {
        return k(
          (t) => Reflect.apply(SM, null, [t, ...e]),
          () => CM(...e),
          0,
          (t) => Reflect.apply(t.d, t, [...e]),
          () => "",
          (e) => Xr(e)
        );
      }),
      (v.n = function (...e) {
        return k(
          (t) => Reflect.apply(QM, null, [t, ...e]),
          () => YM(...e),
          0,
          (t) => Reflect.apply(t.n, t, [...e]),
          () => "",
          (e) => Xr(e)
        );
      }),
      (v.getDateTimeFormat = function (e) {
        return M.value[e] || {};
      }),
      (v.setDateTimeFormat = function (e, t) {
        (M.value[e] = t), (z.datetimeFormats = M.value), UM(z, e, t);
      }),
      (v.mergeDateTimeFormat = function (e, t) {
        (M.value[e] = Vr(M.value[e] || {}, t)),
          (z.datetimeFormats = M.value),
          UM(z, e, t);
      }),
      (v.getNumberFormat = function (e) {
        return l.value[e] || {};
      }),
      (v.setNumberFormat = function (e, t) {
        (l.value[e] = t), (z.numberFormats = l.value), PM(z, e, t);
      }),
      (v.mergeNumberFormat = function (e, t) {
        (l.value[e] = Vr(l.value[e] || {}, t)),
          (z.numberFormats = l.value),
          PM(z, e, t);
      }),
      (v[JM] = e.__injectWithOption),
      (v[VM] = function (...e) {
        return k(
          (t) => {
            let i;
            const n = t;
            try {
              (n.processor = O), (i = Reflect.apply(OM, null, [n, ...e]));
            } finally {
              n.processor = null;
            }
            return i;
          },
          () => EM(...e),
          0,
          (t) => t[VM](...e),
          (e) => [il(e)],
          (e) => Kr(e)
        );
      }),
      (v[HM] = function (...e) {
        return k(
          (t) => Reflect.apply(SM, null, [t, ...e]),
          () => CM(...e),
          0,
          (t) => t[HM](...e),
          () => [],
          (e) => Xr(e) || Kr(e)
        );
      }),
      (v[ZM] = function (...e) {
        return k(
          (t) => Reflect.apply(QM, null, [t, ...e]),
          () => YM(...e),
          0,
          (t) => t[ZM](...e),
          () => [],
          (e) => Xr(e) || Kr(e)
        );
      }),
      v
    );
  }
  function ol(e = {}, t) {
    {
      const t = rl(
          (function (e) {
            const t = Xr(e.locale) ? e.locale : MM,
              i =
                Xr(e.fallbackLocale) ||
                Kr(e.fallbackLocale) ||
                ao(e.fallbackLocale) ||
                !1 === e.fallbackLocale
                  ? e.fallbackLocale
                  : t,
              n = qr(e.missing) ? e.missing : void 0,
              a =
                (!eo(e.silentTranslationWarn) &&
                  !Br(e.silentTranslationWarn)) ||
                !e.silentTranslationWarn,
              s =
                (!eo(e.silentFallbackWarn) && !Br(e.silentFallbackWarn)) ||
                !e.silentFallbackWarn,
              r = !eo(e.fallbackRoot) || e.fallbackRoot,
              o = !!e.formatFallbackMessages,
              M = ao(e.modifiers) ? e.modifiers : {},
              l = e.pluralizationRules,
              u = qr(e.postTranslation) ? e.postTranslation : void 0,
              c = !Xr(e.warnHtmlInMessage) || "off" !== e.warnHtmlInMessage,
              g = !!e.escapeParameterHtml,
              d = !eo(e.sync) || e.sync;
            let N = e.messages;
            if (ao(e.sharedMessages)) {
              const t = e.sharedMessages;
              N = Object.keys(t).reduce((e, i) => {
                const n = e[i] || (e[i] = {});
                return Vr(n, t[i]), e;
              }, N || {});
            }
            const { __i18n: D, __root: I, __injectWithOption: y } = e,
              j = e.datetimeFormats,
              p = e.numberFormats;
            return {
              locale: t,
              fallbackLocale: i,
              messages: N,
              flatJson: e.flatJson,
              datetimeFormats: j,
              numberFormats: p,
              missing: n,
              missingWarn: a,
              fallbackWarn: s,
              fallbackRoot: r,
              fallbackFormat: o,
              modifiers: M,
              pluralRules: l,
              postTranslation: u,
              warnHtmlMessage: c,
              escapeParameter: g,
              messageResolver: e.messageResolver,
              inheritLocale: d,
              __i18n: D,
              __root: I,
              __injectWithOption: y,
            };
          })(e)
        ),
        i = {
          id: t.id,
          get locale() {
            return t.locale.value;
          },
          set locale(e) {
            t.locale.value = e;
          },
          get fallbackLocale() {
            return t.fallbackLocale.value;
          },
          set fallbackLocale(e) {
            t.fallbackLocale.value = e;
          },
          get messages() {
            return t.messages.value;
          },
          get datetimeFormats() {
            return t.datetimeFormats.value;
          },
          get numberFormats() {
            return t.numberFormats.value;
          },
          get availableLocales() {
            return t.availableLocales;
          },
          get formatter() {
            return { interpolate: () => [] };
          },
          set formatter(e) {},
          get missing() {
            return t.getMissingHandler();
          },
          set missing(e) {
            t.setMissingHandler(e);
          },
          get silentTranslationWarn() {
            return eo(t.missingWarn) ? !t.missingWarn : t.missingWarn;
          },
          set silentTranslationWarn(e) {
            t.missingWarn = eo(e) ? !e : e;
          },
          get silentFallbackWarn() {
            return eo(t.fallbackWarn) ? !t.fallbackWarn : t.fallbackWarn;
          },
          set silentFallbackWarn(e) {
            t.fallbackWarn = eo(e) ? !e : e;
          },
          get modifiers() {
            return t.modifiers;
          },
          get formatFallbackMessages() {
            return t.fallbackFormat;
          },
          set formatFallbackMessages(e) {
            t.fallbackFormat = e;
          },
          get postTranslation() {
            return t.getPostTranslationHandler();
          },
          set postTranslation(e) {
            t.setPostTranslationHandler(e);
          },
          get sync() {
            return t.inheritLocale;
          },
          set sync(e) {
            t.inheritLocale = e;
          },
          get warnHtmlInMessage() {
            return t.warnHtmlMessage ? "warn" : "off";
          },
          set warnHtmlInMessage(e) {
            t.warnHtmlMessage = "off" !== e;
          },
          get escapeParameterHtml() {
            return t.escapeParameter;
          },
          set escapeParameterHtml(e) {
            t.escapeParameter = e;
          },
          get preserveDirectiveContent() {
            return !0;
          },
          set preserveDirectiveContent(e) {},
          get pluralizationRules() {
            return t.pluralRules || {};
          },
          __composer: t,
          t(...e) {
            const [i, n, a] = e,
              s = {};
            let r = null,
              o = null;
            if (!Xr(i)) throw FM(WM.INVALID_ARGUMENT);
            const M = i;
            return (
              Xr(n) ? (s.locale = n) : Kr(n) ? (r = n) : ao(n) && (o = n),
              Kr(a) ? (r = a) : ao(a) && (o = a),
              Reflect.apply(t.t, t, [M, r || o || {}, s])
            );
          },
          rt: (...e) => Reflect.apply(t.rt, t, [...e]),
          tc(...e) {
            const [i, n, a] = e,
              s = { plural: 1 };
            let r = null,
              o = null;
            if (!Xr(i)) throw FM(WM.INVALID_ARGUMENT);
            const M = i;
            return (
              Xr(n)
                ? (s.locale = n)
                : Rr(n)
                ? (s.plural = n)
                : Kr(n)
                ? (r = n)
                : ao(n) && (o = n),
              Xr(a) ? (s.locale = a) : Kr(a) ? (r = a) : ao(a) && (o = a),
              Reflect.apply(t.t, t, [M, r || o || {}, s])
            );
          },
          te: (e, i) => t.te(e, i),
          tm: (e) => t.tm(e),
          getLocaleMessage: (e) => t.getLocaleMessage(e),
          setLocaleMessage(e, i) {
            t.setLocaleMessage(e, i);
          },
          mergeLocaleMessage(e, i) {
            t.mergeLocaleMessage(e, i);
          },
          d: (...e) => Reflect.apply(t.d, t, [...e]),
          getDateTimeFormat: (e) => t.getDateTimeFormat(e),
          setDateTimeFormat(e, i) {
            t.setDateTimeFormat(e, i);
          },
          mergeDateTimeFormat(e, i) {
            t.mergeDateTimeFormat(e, i);
          },
          n: (...e) => Reflect.apply(t.n, t, [...e]),
          getNumberFormat: (e) => t.getNumberFormat(e),
          setNumberFormat(e, i) {
            t.setNumberFormat(e, i);
          },
          mergeNumberFormat(e, i) {
            t.mergeNumberFormat(e, i);
          },
          getChoiceIndex: (e, t) => -1,
          __onComponentInstanceCreated(t) {
            const { componentInstanceCreatedListener: n } = e;
            n && n(t, i);
          },
        };
      return i;
    }
  }
  const Ml = {
    tag: { type: [String, Object] },
    locale: { type: String },
    scope: {
      type: String,
      validator: (e) => "parent" === e || "global" === e,
      default: "parent",
    },
    i18n: { type: Object },
  };
  function ll(e) {
    return Yn;
  }
  const ul = {
    name: "i18n-t",
    props: Vr(
      {
        keypath: { type: String, required: !0 },
        plural: {
          type: [Number, String],
          validator: (e) => Rr(e) || !isNaN(e),
        },
      },
      Ml
    ),
    setup(e, t) {
      const { slots: i, attrs: n } = t,
        a = e.i18n || pl({ useScope: e.scope, __useComponent: !0 });
      return () => {
        const s = Object.keys(i).filter((e) => "_" !== e),
          r = {};
        e.locale && (r.locale = e.locale),
          void 0 !== e.plural &&
            (r.plural = Xr(e.plural) ? +e.plural : e.plural);
        const o = (function ({ slots: e }, t) {
            if (1 === t.length && "default" === t[0])
              return (e.default ? e.default() : []).reduce(
                (e, t) => [...e, ...(Kr(t.children) ? t.children : [t])],
                []
              );
            return t.reduce((t, i) => {
              const n = e[i];
              return n && (t[i] = n()), t;
            }, {});
          })(t, s),
          M = a[VM](e.keypath, o, r),
          l = Vr({}, n);
        return ka(Xr(e.tag) || to(e.tag) ? e.tag : ll(), l, M);
      };
    },
  };
  function cl(e, t, i, n) {
    const { slots: a, attrs: s } = t;
    return () => {
      const t = { part: !0 };
      let r = {};
      e.locale && (t.locale = e.locale),
        Xr(e.format)
          ? (t.key = e.format)
          : to(e.format) &&
            (Xr(e.format.key) && (t.key = e.format.key),
            (r = Object.keys(e.format).reduce(
              (t, n) => (i.includes(n) ? Vr({}, t, { [n]: e.format[n] }) : t),
              {}
            )));
      const o = n(e.value, t, r);
      let M = [t.key];
      Kr(o)
        ? (M = o.map((e, t) => {
            const i = a[e.type],
              n = i ? i({ [e.type]: e.value, index: t, parts: o }) : [e.value];
            var s;
            return Kr((s = n)) && !Xr(s[0]) && (n[0].key = `${e.type}-${t}`), n;
          }))
        : Xr(o) && (M = [o]);
      const l = Vr({}, s);
      return ka(Xr(e.tag) || to(e.tag) ? e.tag : ll(), l, M);
    };
  }
  const gl = {
      name: "i18n-n",
      props: Vr(
        {
          value: { type: Number, required: !0 },
          format: { type: [String, Object] },
        },
        Ml
      ),
      setup(e, t) {
        const i = e.i18n || pl({ useScope: "parent", __useComponent: !0 });
        return cl(e, t, _M, (...e) => i[ZM](...e));
      },
    },
    dl = {
      name: "i18n-d",
      props: Vr(
        {
          value: { type: [Number, Date], required: !0 },
          format: { type: [String, Object] },
        },
        Ml
      ),
      setup(e, t) {
        const i = e.i18n || pl({ useScope: "parent", __useComponent: !0 });
        return cl(e, t, bM, (...e) => i[HM](...e));
      },
    };
  function Nl(e) {
    if (Xr(e)) return { path: e };
    if (ao(e)) {
      if (!("path" in e)) throw FM(WM.REQUIRED_VALUE);
      return e;
    }
    throw FM(WM.INVALID_VALUE);
  }
  function Dl(e) {
    const { path: t, locale: i, args: n, choice: a, plural: s } = e,
      r = {},
      o = n || {};
    return (
      Xr(i) && (r.locale = i),
      Rr(a) && (r.plural = a),
      Rr(s) && (r.plural = s),
      [t, o, r]
    );
  }
  function Il(e, t, ...i) {
    const n = ao(i[0]) ? i[0] : {},
      a = !!n.useI18nComponentName;
    (!eo(n.globalInstall) || n.globalInstall) &&
      (e.component(a ? "i18n" : ul.name, ul),
      e.component(gl.name, gl),
      e.component(dl.name, dl)),
      e.directive(
        "t",
        (function (e) {
          const t = (t) => {
            const { instance: i, modifiers: n, value: a } = t;
            if (!i || !i.$) throw FM(WM.UNEXPECTED_ERROR);
            const s = (function (e, t) {
                const i = e;
                if ("composition" === e.mode)
                  return i.__getInstance(t) || e.global;
                {
                  const n = i.__getInstance(t);
                  return null != n ? n.__composer : e.global.__composer;
                }
              })(e, i.$),
              r = Nl(a);
            return [Reflect.apply(s.t, s, [...Dl(r)]), s];
          };
          return {
            created: (i, n) => {
              const [a, s] = t(n);
              Qr &&
                e.global === s &&
                (i.__i18nWatcher = oi(s.locale, () => {
                  n.instance && n.instance.$forceUpdate();
                })),
                (i.__composer = s),
                (i.textContent = a);
            },
            unmounted: (e) => {
              Qr &&
                e.__i18nWatcher &&
                (e.__i18nWatcher(),
                (e.__i18nWatcher = void 0),
                delete e.__i18nWatcher),
                e.__composer && ((e.__composer = void 0), delete e.__composer);
            },
            beforeUpdate: (e, { value: t }) => {
              if (e.__composer) {
                const i = e.__composer,
                  n = Nl(t);
                e.textContent = Reflect.apply(i.t, i, [...Dl(n)]);
              }
            },
            getSSRProps: (e) => {
              const [i] = t(e);
              return { textContent: i };
            },
          };
        })(t)
      );
  }
  function yl(e, t) {
    (e.locale = t.locale || e.locale),
      (e.fallbackLocale = t.fallbackLocale || e.fallbackLocale),
      (e.missing = t.missing || e.missing),
      (e.silentTranslationWarn =
        t.silentTranslationWarn || e.silentFallbackWarn),
      (e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn),
      (e.formatFallbackMessages =
        t.formatFallbackMessages || e.formatFallbackMessages),
      (e.postTranslation = t.postTranslation || e.postTranslation),
      (e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage),
      (e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml),
      (e.sync = t.sync || e.sync),
      e.__composer[GM](t.pluralizationRules || e.pluralizationRules);
    const i = KM(e.locale, { messages: t.messages, __i18n: t.__i18n });
    return (
      Object.keys(i).forEach((t) => e.mergeLocaleMessage(t, i[t])),
      t.datetimeFormats &&
        Object.keys(t.datetimeFormats).forEach((i) =>
          e.mergeDateTimeFormat(i, t.datetimeFormats[i])
        ),
      t.numberFormats &&
        Object.keys(t.numberFormats).forEach((i) =>
          e.mergeNumberFormat(i, t.numberFormats[i])
        ),
      e
    );
  }
  const jl = Yr("global-vue-i18n");
  function pl(e = {}) {
    const t = Da();
    if (null == t) throw FM(WM.MUST_BE_CALL_SETUP_TOP);
    if (
      !t.isCE &&
      null != t.appContext.app &&
      !t.appContext.app.__VUE_I18N_SYMBOL__
    )
      throw FM(WM.NOT_INSLALLED);
    const i = (function (e) {
        {
          const t = zn(e.isCE ? jl : e.appContext.app.__VUE_I18N_SYMBOL__);
          if (!t)
            throw FM(
              e.isCE ? WM.NOT_INSLALLED_WITH_PROVIDE : WM.UNEXPECTED_ERROR
            );
          return t;
        }
      })(t),
      n = (function (e) {
        return "composition" === e.mode ? e.global : e.global.__composer;
      })(i),
      a = el(t),
      s = (function (e, t) {
        return Wr(e)
          ? "__i18n" in t
            ? "local"
            : "global"
          : e.useScope
          ? e.useScope
          : "local";
      })(e, a);
    if (__VUE_I18N_LEGACY_API__ && "legacy" === i.mode && !e.__useComponent) {
      if (!i.allowComposition) throw FM(WM.NOT_AVAILABLE_IN_LEGACY_MODE);
      return (function (e, t, i, n = {}) {
        const a = "local" === t,
          s = ((r = null), At(r, !0));
        var r;
        if (a && e.proxy && !e.proxy.$options.i18n && !e.proxy.$options.__i18n)
          throw FM(WM.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
        const o = !eo(n.inheritLocale) || n.inheritLocale,
          M = ht(a && o ? i.locale.value : Xr(n.locale) ? n.locale : MM),
          l = ht(
            a && o
              ? i.fallbackLocale.value
              : Xr(n.fallbackLocale) ||
                Kr(n.fallbackLocale) ||
                ao(n.fallbackLocale) ||
                !1 === n.fallbackLocale
              ? n.fallbackLocale
              : M.value
          ),
          u = ht(KM(M.value, n)),
          c = ht(ao(n.datetimeFormats) ? n.datetimeFormats : { [M.value]: {} }),
          g = ht(ao(n.numberFormats) ? n.numberFormats : { [M.value]: {} }),
          d = a
            ? i.missingWarn
            : (!eo(n.missingWarn) && !Br(n.missingWarn)) || n.missingWarn,
          N = a
            ? i.fallbackWarn
            : (!eo(n.fallbackWarn) && !Br(n.fallbackWarn)) || n.fallbackWarn,
          D = a ? i.fallbackRoot : !eo(n.fallbackRoot) || n.fallbackRoot,
          I = !!n.fallbackFormat,
          y = qr(n.missing) ? n.missing : null,
          j = qr(n.postTranslation) ? n.postTranslation : null,
          p = a
            ? i.warnHtmlMessage
            : !eo(n.warnHtmlMessage) || n.warnHtmlMessage,
          z = !!n.escapeParameter,
          T = a ? i.modifiers : ao(n.modifiers) ? n.modifiers : {},
          h = n.pluralRules || (a && i.pluralRules);
        function A() {
          return [M.value, l.value, u.value, c.value, g.value];
        }
        const m = fa({
            get: () => (s.value ? s.value.locale.value : M.value),
            set: (e) => {
              s.value && (s.value.locale.value = e), (M.value = e);
            },
          }),
          x = fa({
            get: () => (s.value ? s.value.fallbackLocale.value : l.value),
            set: (e) => {
              s.value && (s.value.fallbackLocale.value = e), (l.value = e);
            },
          }),
          f = fa(() => (s.value ? s.value.messages.value : u.value)),
          k = fa(() => c.value),
          L = fa(() => g.value);
        function O() {
          return s.value ? s.value.getPostTranslationHandler() : j;
        }
        function w(e) {
          s.value && s.value.setPostTranslationHandler(e);
        }
        function v() {
          return s.value ? s.value.getMissingHandler() : y;
        }
        function E(e) {
          s.value && s.value.setMissingHandler(e);
        }
        function S(e) {
          return A(), e();
        }
        function b(...e) {
          return s.value
            ? S(() => Reflect.apply(s.value.t, null, [...e]))
            : S(() => "");
        }
        function C(...e) {
          return s.value ? Reflect.apply(s.value.rt, null, [...e]) : "";
        }
        function U(...e) {
          return s.value
            ? S(() => Reflect.apply(s.value.d, null, [...e]))
            : S(() => "");
        }
        function Q(...e) {
          return s.value
            ? S(() => Reflect.apply(s.value.n, null, [...e]))
            : S(() => "");
        }
        function _(e) {
          return s.value ? s.value.tm(e) : {};
        }
        function Y(e, t) {
          return !!s.value && s.value.te(e, t);
        }
        function P(e) {
          return s.value ? s.value.getLocaleMessage(e) : {};
        }
        function R(e, t) {
          s.value && (s.value.setLocaleMessage(e, t), (u.value[e] = t));
        }
        function B(e, t) {
          s.value && s.value.mergeLocaleMessage(e, t);
        }
        function W(e) {
          return s.value ? s.value.getDateTimeFormat(e) : {};
        }
        function F(e, t) {
          s.value && (s.value.setDateTimeFormat(e, t), (c.value[e] = t));
        }
        function V(e, t) {
          s.value && s.value.mergeDateTimeFormat(e, t);
        }
        function H(e) {
          return s.value ? s.value.getNumberFormat(e) : {};
        }
        function Z(e, t) {
          s.value && (s.value.setNumberFormat(e, t), (g.value[e] = t));
        }
        function G(e, t) {
          s.value && s.value.mergeNumberFormat(e, t);
        }
        const J = {
          get id() {
            return s.value ? s.value.id : -1;
          },
          locale: m,
          fallbackLocale: x,
          messages: f,
          datetimeFormats: k,
          numberFormats: L,
          get inheritLocale() {
            return s.value ? s.value.inheritLocale : o;
          },
          set inheritLocale(e) {
            s.value && (s.value.inheritLocale = e);
          },
          get availableLocales() {
            return s.value ? s.value.availableLocales : Object.keys(u.value);
          },
          get modifiers() {
            return s.value ? s.value.modifiers : T;
          },
          get pluralRules() {
            return s.value ? s.value.pluralRules : h;
          },
          get isGlobal() {
            return !!s.value && s.value.isGlobal;
          },
          get missingWarn() {
            return s.value ? s.value.missingWarn : d;
          },
          set missingWarn(e) {
            s.value && (s.value.missingWarn = e);
          },
          get fallbackWarn() {
            return s.value ? s.value.fallbackWarn : N;
          },
          set fallbackWarn(e) {
            s.value && (s.value.missingWarn = e);
          },
          get fallbackRoot() {
            return s.value ? s.value.fallbackRoot : D;
          },
          set fallbackRoot(e) {
            s.value && (s.value.fallbackRoot = e);
          },
          get fallbackFormat() {
            return s.value ? s.value.fallbackFormat : I;
          },
          set fallbackFormat(e) {
            s.value && (s.value.fallbackFormat = e);
          },
          get warnHtmlMessage() {
            return s.value ? s.value.warnHtmlMessage : p;
          },
          set warnHtmlMessage(e) {
            s.value && (s.value.warnHtmlMessage = e);
          },
          get escapeParameter() {
            return s.value ? s.value.escapeParameter : z;
          },
          set escapeParameter(e) {
            s.value && (s.value.escapeParameter = e);
          },
          t: b,
          getPostTranslationHandler: O,
          setPostTranslationHandler: w,
          getMissingHandler: v,
          setMissingHandler: E,
          rt: C,
          d: U,
          n: Q,
          tm: _,
          te: Y,
          getLocaleMessage: P,
          setLocaleMessage: R,
          mergeLocaleMessage: B,
          getDateTimeFormat: W,
          setDateTimeFormat: F,
          mergeDateTimeFormat: V,
          getNumberFormat: H,
          setNumberFormat: Z,
          mergeNumberFormat: G,
        };
        function $(e) {
          (e.locale.value = M.value),
            (e.fallbackLocale.value = l.value),
            Object.keys(u.value).forEach((t) => {
              e.mergeLocaleMessage(t, u.value[t]);
            }),
            Object.keys(c.value).forEach((t) => {
              e.mergeDateTimeFormat(t, c.value[t]);
            }),
            Object.keys(g.value).forEach((t) => {
              e.mergeNumberFormat(t, g.value[t]);
            }),
            (e.escapeParameter = z),
            (e.fallbackFormat = I),
            (e.fallbackRoot = D),
            (e.fallbackWarn = N),
            (e.missingWarn = d),
            (e.warnHtmlMessage = p);
        }
        return (
          Si(() => {
            if (null == e.proxy || null == e.proxy.$i18n)
              throw FM(WM.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
            const i = (s.value = e.proxy.$i18n.__composer);
            "global" === t
              ? ((M.value = i.locale.value),
                (l.value = i.fallbackLocale.value),
                (u.value = i.messages.value),
                (c.value = i.datetimeFormats.value),
                (g.value = i.numberFormats.value))
              : a && $(i);
          }),
          J
        );
      })(t, s, n, e);
    }
    if ("global" === s) return tl(n, e, a), n;
    if ("parent" === s) {
      let a = (function (e, t, i = !1) {
        let n = null;
        const a = t.root;
        let s = t.parent;
        for (; null != s; ) {
          const t = e;
          if ("composition" === e.mode) n = t.__getInstance(s);
          else if (__VUE_I18N_LEGACY_API__) {
            const e = t.__getInstance(s);
            null != e && ((n = e.__composer), i && n && !n[JM] && (n = null));
          }
          if (null != n) break;
          if (a === s) break;
          s = s.parent;
        }
        return n;
      })(i, t, e.__useComponent);
      return null == a && (a = n), a;
    }
    const r = i;
    let o = r.__getInstance(t);
    if (null == o) {
      const i = Vr({}, e);
      "__i18n" in a && (i.__i18n = a.__i18n),
        n && (i.__root = n),
        (o = rl(i)),
        (function (e, t, i) {
          bi(() => {}, t),
            _i(() => {
              e.__deleteInstance(t);
            }, t);
        })(r, t),
        r.__setInstance(t, o);
    }
    return o;
  }
  const zl = ["locale", "fallbackLocale", "availableLocales"],
    Tl = ["t", "rt", "d", "n", "tm"];
  var hl, Al;
  if (
    ((uM = function (e, t = {}) {
      {
        const i = (t.onCacheKey || TM)(e),
          n = hM[i];
        if (n) return n;
        let a = !1;
        const s = t.onError || ho;
        t.onError = (e) => {
          (a = !0), s(e);
        };
        const { code: r } = Yo(e, t),
          o = new Function(`return ${r}`)();
        return a ? o : (hM[i] = o);
      }
    }),
    (hl = function (e, t) {
      if (!to(e)) return null;
      let i = Ho.get(t);
      if (
        (i ||
          ((i = (function (e) {
            const t = [];
            let i,
              n,
              a,
              s,
              r,
              o,
              M,
              l = -1,
              u = 0,
              c = 0;
            const g = [];
            function d() {
              const t = e[l + 1];
              if ((5 === u && "'" === t) || (6 === u && '"' === t))
                return l++, (a = "\\" + t), g[0](), !0;
            }
            for (
              g[0] = () => {
                void 0 === n ? (n = a) : (n += a);
              },
                g[1] = () => {
                  void 0 !== n && (t.push(n), (n = void 0));
                },
                g[2] = () => {
                  g[0](), c++;
                },
                g[3] = () => {
                  if (c > 0) c--, (u = 4), g[0]();
                  else {
                    if (((c = 0), void 0 === n)) return !1;
                    if (((n = Vo(n)), !1 === n)) return !1;
                    g[1]();
                  }
                };
              null !== u;

            )
              if ((l++, (i = e[l]), "\\" !== i || !d())) {
                if (((s = Fo(i)), (M = Bo[u]), (r = M[s] || M.l || 8), 8 === r))
                  return;
                if (
                  ((u = r[0]),
                  void 0 !== r[1] &&
                    ((o = g[r[1]]), o && ((a = i), !1 === o())))
                )
                  return;
                if (7 === u) return t;
              }
          })(t)),
          i && Ho.set(t, i)),
        !i)
      )
        return null;
      const n = i.length;
      let a = e,
        s = 0;
      for (; s < n; ) {
        const e = a[i[s]];
        if (void 0 === e) return null;
        (a = e), s++;
      }
      return a;
    }),
    (cM = hl),
    (gM = aM),
    "boolean" != typeof __VUE_I18N_FULL_INSTALL__ &&
      (Zr().__VUE_I18N_FULL_INSTALL__ = !0),
    "boolean" != typeof __VUE_I18N_LEGACY_API__ &&
      (Zr().__VUE_I18N_LEGACY_API__ = !0),
    "boolean" != typeof __INTLIFY_PROD_DEVTOOLS__ &&
      (Zr().__INTLIFY_PROD_DEVTOOLS__ = !1),
    __INTLIFY_PROD_DEVTOOLS__)
  ) {
    const e = Zr();
    (e.__INTLIFY__ = !0), (Al = e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__), (eM = Al);
  }
  const ml = (function (e = {}, t) {
    const i =
        __VUE_I18N_LEGACY_API__ && eo(e.legacy)
          ? e.legacy
          : __VUE_I18N_LEGACY_API__,
      n = !eo(e.globalInjection) || e.globalInjection,
      a = !__VUE_I18N_LEGACY_API__ || !i || !!e.allowComposition,
      s = new Map(),
      [r, o] = (function (e, t, i) {
        const n = new ie(a);
        var a;
        {
          const i =
            __VUE_I18N_LEGACY_API__ && t
              ? n.run(() => ol(e))
              : n.run(() => rl(e));
          if (null == i) throw FM(WM.UNEXPECTED_ERROR);
          return [n, i];
        }
      })(e, i),
      M = Yr("");
    {
      const e = {
        get mode() {
          return __VUE_I18N_LEGACY_API__ && i ? "legacy" : "composition";
        },
        get allowComposition() {
          return a;
        },
        install(t, ...a) {
          return __async(this, null, function* () {
            (t.__VUE_I18N_SYMBOL__ = M),
              t.provide(t.__VUE_I18N_SYMBOL__, e),
              !i &&
                n &&
                (function (e, t) {
                  const i = Object.create(null);
                  zl.forEach((e) => {
                    const n = Object.getOwnPropertyDescriptor(t, e);
                    if (!n) throw FM(WM.UNEXPECTED_ERROR);
                    const a = Tt(n.value)
                      ? {
                          get: () => n.value.value,
                          set(e) {
                            n.value.value = e;
                          },
                        }
                      : { get: () => n.get && n.get() };
                    Object.defineProperty(i, e, a);
                  }),
                    (e.config.globalProperties.$i18n = i),
                    Tl.forEach((i) => {
                      const n = Object.getOwnPropertyDescriptor(t, i);
                      if (!n || !n.value) throw FM(WM.UNEXPECTED_ERROR);
                      Object.defineProperty(
                        e.config.globalProperties,
                        `$${i}`,
                        n
                      );
                    });
                })(t, e.global),
              __VUE_I18N_FULL_INSTALL__ && Il(t, e, ...a),
              __VUE_I18N_LEGACY_API__ &&
                i &&
                t.mixin(
                  (function (e, t, i) {
                    return {
                      beforeCreate() {
                        const n = Da();
                        if (!n) throw FM(WM.UNEXPECTED_ERROR);
                        const a = this.$options;
                        if (a.i18n) {
                          const i = a.i18n;
                          a.__i18n && (i.__i18n = a.__i18n),
                            (i.__root = t),
                            this === this.$root
                              ? (this.$i18n = yl(e, i))
                              : ((i.__injectWithOption = !0),
                                (this.$i18n = ol(i)));
                        } else
                          a.__i18n
                            ? this === this.$root
                              ? (this.$i18n = yl(e, a))
                              : (this.$i18n = ol({
                                  __i18n: a.__i18n,
                                  __injectWithOption: !0,
                                  __root: t,
                                }))
                            : (this.$i18n = e);
                        a.__i18nGlobal && tl(t, a, a),
                          e.__onComponentInstanceCreated(this.$i18n),
                          i.__setInstance(n, this.$i18n),
                          (this.$t = (...e) => this.$i18n.t(...e)),
                          (this.$rt = (...e) => this.$i18n.rt(...e)),
                          (this.$tc = (...e) => this.$i18n.tc(...e)),
                          (this.$te = (e, t) => this.$i18n.te(e, t)),
                          (this.$d = (...e) => this.$i18n.d(...e)),
                          (this.$n = (...e) => this.$i18n.n(...e)),
                          (this.$tm = (e) => this.$i18n.tm(e));
                      },
                      mounted() {},
                      unmounted() {
                        const e = Da();
                        if (!e) throw FM(WM.UNEXPECTED_ERROR);
                        delete this.$t,
                          delete this.$rt,
                          delete this.$tc,
                          delete this.$te,
                          delete this.$d,
                          delete this.$n,
                          delete this.$tm,
                          i.__deleteInstance(e),
                          delete this.$i18n;
                      },
                    };
                  })(o, o.__composer, e)
                );
            const s = t.unmount;
            t.unmount = () => {
              e.dispose(), s();
            };
          });
        },
        get global() {
          return o;
        },
        dispose() {
          r.stop();
        },
        __instances: s,
        __getInstance: function (e) {
          return s.get(e) || null;
        },
        __setInstance: function (e, t) {
          s.set(e, t);
        },
        __deleteInstance: function (e) {
          s.delete(e);
        },
      };
      return e;
    }
  })({ legacy: !1, messages: {} });
  function xl(e) {
    return __async(this, null, function* () {
      let t = e;
      null == e && (t = navigator.language),
        void 0 !== t && (yield kl(t), (ml.global.locale.value = t));
    });
  }
  function fl() {
    return ml.global;
  }
  function kl(e) {
    return __async(this, null, function* () {
      const t = e.split("-"),
        i = t[0];
      let n, a;
      Ll(i) || (n = yield Ol(i)),
        t.length > 1 && !Ll(e) && (a = yield Ol(e)),
        void 0 !== a && ml.global.setLocaleMessage(e, a),
        void 0 !== n && ml.global.setLocaleMessage(i, n);
    });
  }
  function Ll(e) {
    return ml.global.availableLocales.includes(e);
  }
  function Ol(e) {
    return __async(this, null, function* () {
      const t = `https://storage.googleapis.com/passage-frontend/locales/passage-auth/v2/${e.toLowerCase()}.json`;
      return yield fetch(t)
        .then((e) => e.json())
        .catch(() => {});
    });
  }
  function wl() {
    const e = ht();
    return (
      oi(e, () => {
        void 0 !== e.value && null !== e.value && e.value.focus();
      }),
      { autofocusButton: e }
    );
  }
  const vl = { class: "identifier-form" },
    El = { class: "has-text-centered" },
    Sl = ia("br", null, null, -1),
    bl = ["onSubmit"],
    Cl = ["autocomplete", "inputmode", "placeholder", "onInput"],
    Ul = { class: "flex-row flex-center" },
    Ql = ["onClick"],
    _l = {
      key: 0,
      style: { "margin-top": "30px" },
      class: "link has-text-centered",
    },
    Yl = ["onClick"],
    Pl = mi({
      __name: "ValidatedIdentifierForm",
      props: {
        appId: {},
        validationError: { default: "" },
        identifier: {},
        countryCode: {},
        identifierMode: {},
        showWelcomeBack: { type: Boolean, default: !1 },
        conditionalUI: { type: Boolean, default: !1 },
      },
      emits: [
        "onSubmit",
        "update:validationError",
        "update:identifier",
        "update:countryCode",
        "update:showWelcomeBack",
      ],
      setup(e, { emit: t }) {
        const i = e,
          { t: n } = fl(),
          a = ht(""),
          s = ht(),
          r = ht(),
          { autofocusButton: o } = wl(),
          M = fa(() => i.showWelcomeBack),
          l = fa(() => {
            let e;
            switch (i.identifierMode) {
              case Or.phone:
                e = n("phone-number");
                break;
              case Or.email:
                e = n("email-address");
                break;
              case Or.both:
                e = n("email-or-phone-number");
            }
            return e.charAt(0).toUpperCase() + e.slice(1);
          }),
          u = fa(() => "example@email.com"),
          c = fa(() => (i.identifierMode === Or.phone ? "tel" : "email")),
          g = fa(() => {
            var e;
            return i.conditionalUI
              ? `${c.value} webauthn`
              : null != (e = c.value)
              ? e
              : "";
          }),
          d = fa({
            get: () => i.identifier,
            set(e) {
              t("update:identifier", e);
            },
          });
        function N() {
          var e;
          if (!d.value) return "";
          let t = d.value;
          return (
            M.value ||
              (t = p()
                ? null != (e = null == z ? void 0 : z.getNumber())
                  ? e
                  : ""
                : d.value),
            t.trim().toLowerCase()
          );
        }
        const D = fa(() =>
          Sr(i.validationError)
            ? Sr(a.value)
              ? ""
              : a.value
            : i.validationError
        );
        function I() {
          (a.value = ""), t("update:validationError", "");
        }
        function y() {
          return __async(this, null, function* () {
            if (
              !(function () {
                if ("" === N()) {
                  let e = "";
                  switch (i.identifierMode) {
                    case Or.phone:
                      e = n("enter-a-phone-number");
                      break;
                    case Or.email:
                      e = n("enter-an-email-address");
                      break;
                    case Or.both:
                      e = n("enter-an-email-or-phone-number");
                  }
                  return (a.value = e), !1;
                }
                if (i.identifierMode === Or.email && !j())
                  return (a.value = n("enter-a-valid-email-address")), !1;
                if (i.identifierMode === Or.phone && !p())
                  return (a.value = n("enter-a-valid-phone-number")), !1;
                if (i.identifierMode === Or.both && !p() && !j())
                  return (
                    (a.value = n("enter-a-valid-email-or-phone-number")), !1
                  );
                return !0;
              })()
            )
              return;
            const e = new Lr(i.appId);
            let s,
              r,
              o,
              M,
              l,
              u = !1,
              c = "";
            try {
              const t = yield e.identifierExists(N());
              null !== t
                ? ((s = !0),
                  (r = t.webauthn),
                  (l = t.status),
                  (c = t.id),
                  (M = t.email_verified),
                  (u = t.phone_verified),
                  (o = t.webauthn_types.includes(Tr.Passkey)))
                : ((s = !1), (r = !1), (l = zr.INACTIVE));
            } catch (g) {
              let e;
              switch (i.identifierMode) {
                case Or.email:
                  e = n("enter-a-valid-email-address");
                  break;
                case Or.phone:
                  e = n("enter-a-valid-phone-number");
                  break;
                case Or.both:
                  e = n("enter-a-valid-email-or-phone-number");
              }
              return void (a.value = e);
            }
            t("onSubmit", {
              identifier: N(),
              identifierExists: s,
              identifierType: p() ? br.phone : br.email,
              userHasWebauthn: r,
              userStatus: l,
              userID: c,
              emailVerified: M,
              phoneVerified: u,
              userHasPasskey: o,
            });
          });
        }
        function j() {
          return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            N()
          );
        }
        function p() {
          return M.value ? h() : void 0 !== z && z.isValidNumber();
        }
        let z;
        function T() {
          void 0 === z &&
            (s.value.addEventListener("countrychange", () => {
              var e;
              t(
                "update:countryCode",
                null !=
                  (e = null == z ? void 0 : z.getSelectedCountryData().iso2)
                  ? e
                  : ""
              );
            }),
            (z = Ur(s.value, {
              initialCountry: i.countryCode,
              utilsScript:
                "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
              dropdownContainer: r.value,
              autoPlaceholder: "aggressive",
            })),
            s.value.focus());
        }
        function h() {
          return /^\+$|^\+?[0-9,(,),\-, ]+$/.test(d.value.trim());
        }
        bi(() => {
          i.conditionalUI &&
            (function () {
              const e = m.value.getRootNode().host;
              void 0 !== e &&
                (m.value.appendChild(
                  (function () {
                    const e = document.createElement("style");
                    return (
                      e.appendChild(
                        document.createTextNode(
                          "\n      .psg-input{\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        box-sizing: border-box;\n        color: var(--passage-body-text-color, #000000);\n        font-family: var(--passage-body-font-family, 'Helvetica');\n        font-size: var(--passage-body-font-size, 14px);\n        font-weight: var(--passage-body-font-weight, 400);\n\n        min-height: 40px;\n        width: 100%;\n\n        padding-left: 10px;\n        padding-right: 10px;\n        margin: 0;\n\n        color: var(--app-text);\n\n        background-color: var(--passage-container-background-color, #ffffff);\n        border-style: solid;\n        border-color: var(--passage-control-border-color, #d7d7d7);\n        border-width: 1px;\n        border-radius: var(--passage-control-border-radius, 5px);\n\n        transition: all 0.3s;\n\n        text-overflow: ellipsis;\n      }\n\n      .psg-input:focus{\n        outline: none;\n        box-shadow: none !important;\n        border-color: var(--passage-body-text-color, #000000);\n      }\n\n      .psg-input:active{\n        outline: none;\n        box-shadow: none !important;\n        border-color: var(--passage-body-text-color, #000000);\n      }\n\n      .psg-input.has-error{\n        border-color: var(--passage-error-color, #dd0031);\n      }\n      .psg-input.is-danger{\n        border-color: var(--passage-error-color, #dd0031);\n      }\n      .iti {\n        width: 100%;\n      }\n\n        .iti__country-list {\n            border-radius: 6px;\n        }\n\n        .iti__country {\n            padding: 5px 10px;\n        }\n\n        .iti__selected-flag {\n            border-top-left-radius: var(--passage-control-border-radius, 6px);\n            border-bottom-left-radius: var(--passage-control-border-radius, 6px);\n        }\n\n    .iti--container {\n        top: unset !important;\n        left: unset !important;\n    }"
                        )
                      ),
                      e
                    );
                  })()
                ),
                m.value.appendChild(
                  (function () {
                    const e = document.createElement("link");
                    return (
                      (e.rel = "stylesheet"),
                      (e.href =
                        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.16/css/intlTelInput.css"),
                      e
                    );
                  })()
                ),
                e.appendChild(m.value));
            })(),
            i.identifierMode === Or.phone && T();
        }),
          i.identifierMode === Or.both &&
            oi(d, () => {
              h()
                ? T()
                : void 0 !== z &&
                  (z.destroy(), (z = void 0), s.value && s.value.focus());
            });
        function A() {
          t("update:showWelcomeBack", !1), (d.value = "");
        }
        oi(
          fa(() => i.countryCode),
          (e) => {
            null == z || z.setCountry(e);
          }
        );
        const m = ht();
        return (
          Qi(() => {
            m.value.remove();
          }),
          (e, t) => (
            Vn(),
            Jn("div", vl, [
              gi(
                ia(
                  "div",
                  El,
                  [
                    sa(X(xt(n)("welcome-back-sign-in-as")), 1),
                    Sl,
                    ia("strong", null, X(d.value), 1),
                  ],
                  512
                ),
                [[xs, e.showWelcomeBack]]
              ),
              gi(
                ia(
                  "div",
                  null,
                  [
                    ia(
                      "div",
                      { class: "label", ref: "labelRef" },
                      X(l.value),
                      513
                    ),
                    ia(
                      "form",
                      {
                        ref_key: "identifierForm",
                        ref: m,
                        slot: "loginInput",
                        onSubmit: hs(y, ["prevent"]),
                      },
                      [
                        gi(
                          ia(
                            "input",
                            {
                              "onUpdate:modelValue":
                                t[0] || (t[0] = (e) => (d.value = e)),
                              type: "text",
                              class: Z([
                                "input psg-input",
                                { "is-danger": D.value },
                              ]),
                              part: "input",
                              autocomplete: g.value,
                              inputmode: c.value,
                              id: "identifier",
                              placeholder: u.value,
                              onInput: hs(I, ["prevent"]),
                              "data-test": "identifier-input",
                              ref_key: "identifierInput",
                              ref: s,
                            },
                            null,
                            42,
                            Cl
                          ),
                          [[us, d.value]]
                        ),
                      ],
                      40,
                      bl
                    ),
                    $i(e.$slots, "loginInput"),
                  ],
                  512
                ),
                [[xs, !e.showWelcomeBack]]
              ),
              ia(
                "div",
                {
                  ref_key: "controlContainer",
                  ref: r,
                  style: { width: "100%" },
                },
                null,
                512
              ),
              ia(
                "div",
                {
                  style: B(`text-align: ${M.value ? "center" : "left"};`),
                  class: "help is-danger error-message",
                  "data-test": "validation-error",
                },
                X(D.value),
                5
              ),
              $i(e.$slots, "metadataFields"),
              ia("div", Ul, [
                ia(
                  "button",
                  {
                    class: "button is-primary",
                    part: "button",
                    "data-test": "continue-button",
                    ref_key: "autofocusButton",
                    ref: o,
                    onClick: hs(y, ["prevent"]),
                  },
                  X(xt(n)("continue")),
                  9,
                  Ql
                ),
              ]),
              M.value
                ? (Vn(),
                  Jn("div", _l, [
                    ia(
                      "a",
                      {
                        onClick: hs(A, ["prevent"]),
                        role: "button",
                        "data-test": "register-link",
                      },
                      X(xt(n)("switch-account")),
                      9,
                      Yl
                    ),
                  ]))
                : ra("", !0),
            ])
          )
        );
      },
    }),
    Rl = ht(""),
    Bl = fa(() => Sr(Rl.value));
  function Wl(e) {
    Rl.value = e;
  }
  function Fl() {
    return { appId: lt(Rl), appIdUnassigned: Bl, updateAppId: Wl };
  }
  var Vl = ((e) => (
    (e.onLoaded = "onLoaded"),
    (e.onRegisterDevice = "onRegisterDevice"),
    (e.onVerifyIdentity = "onVerifyIdentity"),
    (e.onMagicLinkLogin = "onMagicLinkLogin"),
    (e.onMagicLinkRegister = "onMagicLinkRegister"),
    (e.onMagicLinkActivated = "onMagicLinkActivated"),
    (e.onMagicLinkActivateSuccess = "onMagicLinkActivateSuccess"),
    (e.onOneTimePasscodeLogin = "onOneTimePasscodeLogin"),
    (e.onOneTimePasscodeRegister = "onOneTimePasscodeRegister"),
    (e.onOneTimePasscodeActivated = "onOneTimePasscodeActivated"),
    (e.onOneTimePasscodeActivateSuccess = "onOneTimePasscodeActivateSuccess"),
    e
  ))(Vl || {});
  const Hl = () => !0,
    Zl = (e) => {
      window.location.href = e.redirect_url;
    },
    Gl = () => {},
    Jl = ht(Hl),
    $l = ht(Zl),
    Kl = ht(Gl);
  function ql(e) {
    Jl.value = void 0 !== e ? e : Hl;
  }
  function Xl(e) {
    $l.value = void 0 !== e ? e : Zl;
  }
  function eu(e) {
    Kl.value = void 0 !== e ? e : Gl;
  }
  function tu() {
    return {
      beforeAuth: lt(Jl),
      onSuccess: lt($l),
      onEvent: lt(Kl),
      setBeforeAuth: ql,
      setOnSuccess: Xl,
      setOnEvent: eu,
    };
  }
  const iu = "psg_last_login";
  function nu(e, t) {
    return __async(this, null, function* () {
      const { browserFeatures: i, appInfo: n, router: a } = t,
        { appId: s } = Fl(),
        r = new Lr(s.value),
        { emitEvent: o } = gu(),
        {
          identifier: M,
          identifierType: l,
          userHasPasskey: u,
          userHasWebauthn: c,
          emailVerified: g,
          phoneVerified: d,
          userID: N,
        } = e,
        D = n.auth_fallback_method === Er.None;
      if (!c && D) return void a.push(lD);
      const I = (function (e, t, i, n) {
          if (
            e.require_identifier_verification &&
            ((n === br.email && !t) || (n === br.phone && !i))
          )
            return !0;
          return !1;
        })(n, g, d, l),
        y = i.platform && c && r.credIDExists(N),
        j = i.syncedCredential && u,
        p = i.platform && D,
        z =
          u &&
          i.platform &&
          !navigator.credentials.get.toString().includes("[native code]");
      !I && (j || y || p || z)
        ? (tu().onEvent.value(Vl.onVerifyIdentity),
          a.push(aD, { identifier: M, identifierType: l, appInfo: n }))
        : o({
            type: ru.FallbackAuth,
            payload: {
              identifier: M,
              identifierType: l,
              userInitiated: !1,
              identifierVerifying: I,
              setupNewDevice: i.platform,
            },
          });
    });
  }
  function au(e, t) {
    const { authState: i, appInfo: n, router: a } = t;
    switch (
      ((i.userInitiatedFallback = e.userInitiated), n.auth_fallback_method)
    ) {
      case Er.LoginCode:
        !(function (e) {
          const { identifier: t, userIsRegistering: i } = e;
          i
            ? tu().onEvent.value(Vl.onOneTimePasscodeRegister, {
                identifier: t,
              })
            : tu().onEvent.value(Vl.onOneTimePasscodeLogin);
        })(e),
          a.push(rD, e);
        break;
      case Er.MagicLink:
        !(function (e) {
          const { identifier: t, userIsRegistering: i } = e;
          i
            ? tu().onEvent.value(Vl.onMagicLinkRegister, { identifier: t })
            : tu().onEvent.value(Vl.onMagicLinkLogin);
        })(e),
          a.push(nD, e);
        break;
      case Er.None:
        a.push(MD);
    }
  }
  function su(e) {
    return __async(this, null, function* () {
      Sr(e.authResult.auth_token) ||
        Sr(e.authResult.redirect_url) ||
        (yield (function (e) {
          return __async(this, null, function* () {
            if (e && "string" == typeof e)
              return void localStorage.setItem(iu, e);
            let t = e;
            if (void 0 === e) {
              const { appId: e } = Fl(),
                i = new Lr(e.value);
              t = yield i.getCurrentUser().userInfo();
            }
            void 0 !== t &&
              localStorage.setItem(iu, t.email ? t.email : t.phone);
          });
        })(e.identifier),
        tu().onSuccess.value(e.authResult));
    });
  }
  var ru = ((e) => (
    (e.CreatedUser = "CreatedUser"),
    (e.ChangeIdentifier = "ChangeIdentifier"),
    (e.LoginUser = "LoginUser"),
    (e.FallbackAuth = "FallbackAuth"),
    (e.AuthSuccess = "AuthSuccess"),
    (e.FallbackAuthSuccess = "FallbackAuthSuccess"),
    e
  ))(ru || {});
  class ou {
    constructor(e, t) {
      (this.appInfo = e),
        (this.router = t),
        (this.authState = { userInitiatedFallback: !1 }),
        (this.authOriginValid = !1),
        (this.browserFeatures = {
          securityKey: !1,
          platform: !1,
          syncedCredential: !1,
          crossDeviceCredential: !1,
          conditionalUI: !1,
          isAvailable: !1,
        });
    }
    initializeEventHandler() {
      return __async(this, null, function* () {
        const { appId: e } = Fl(),
          t = new Lr(e.value);
        (this.authOriginValid = t.checkWebauthnConfig(this.appInfo)),
          this.authOriginValid &&
            ((this.browserFeatures = yield t.getCredentialAvailable()),
            (function () {
              const e = new Us();
              return (
                "Safari" == e.getBrowser().name &&
                parseFloat(e.getBrowser().version || "") < 16.4
              );
            })() && (this.browserFeatures.conditionalUI = !1)),
          this.checkMagicLink() ||
            this.router.push(this.router.homeRoute, {
              appInfo: this.appInfo,
              conditionalUI: this.browserFeatures.conditionalUI,
            });
      });
    }
    handleEvent(e) {
      return __async(this, null, function* () {
        switch (e.type) {
          case "CreatedUser":
            !(function (e, t) {
              const { webauthnAllowed: i, appInfo: n, router: a } = t,
                { identifier: s, identifierType: r } = e,
                { emitEvent: o } = gu();
              i && !n.require_identifier_verification
                ? (tu().onEvent.value(Vl.onRegisterDevice, { identifier: s }),
                  a.push(iD, { identifier: s, identifierType: r, appInfo: n }))
                : o({
                    type: ru.FallbackAuth,
                    payload: {
                      identifier: s,
                      identifierType: r,
                      identifierVerifying: n.require_identifier_verification,
                      userIsRegistering: !0,
                      userInitiated: !1,
                    },
                  });
            })(e.payload, this.eventHandlerState);
            break;
          case "ChangeIdentifier":
            !(function (e) {
              const { appInfo: t, router: i, browserFeatures: n } = e;
              i.push(i.homeRoute, {
                appInfo: t,
                conditionalUI: n.conditionalUI,
                changeEmail: !0,
              });
            })(this.eventHandlerState);
            break;
          case "LoginUser":
            nu(e.payload, this.eventHandlerState);
            break;
          case "FallbackAuth":
            au(e.payload, this.eventHandlerState);
            break;
          case "AuthSuccess":
            su(e.payload);
            break;
          case "FallbackAuthSuccess":
            !(function (e, t) {
              const { webauthnAllowed: i, authState: n, router: a } = t;
              !i || n.userInitiatedFallback
                ? gu().emitEvent({ type: ru.AuthSuccess, payload: e })
                : a.push(oD, e);
            })(e.payload, this.eventHandlerState);
        }
      });
    }
    get eventHandlerState() {
      return {
        appInfo: this.appInfo,
        webauthnAllowed: this.browserFeatures.platform,
        router: this.router,
        authState: this.authState,
        browserFeatures: this.browserFeatures,
      };
    }
    checkMagicLink() {
      const e = window.location.search,
        t = new URLSearchParams(e);
      let i = null;
      return (
        t.has("psg_magic_link")
          ? (i = t.get("psg_magic_link"))
          : t.has("psg_verify_link") && (i = t.get("psg_verify_link")),
        null !== i &&
          (this.router.push(sD, {
            magicLink: i,
            webauthnAllowed: this.browserFeatures.platform,
          }),
          !0)
      );
    }
  }
  let Mu;
  function lu(e, t) {
    return __async(this, null, function* () {
      (Mu = new ou(e, t)), yield Mu.initializeEventHandler();
    });
  }
  function uu() {
    return Mu;
  }
  function cu(e) {
    return __async(this, null, function* () {
      return null == Mu ? void 0 : Mu.handleEvent(e);
    });
  }
  function gu() {
    return { initEventHandler: lu, getEventHandler: uu, emitEvent: cu };
  }
  const du = mi({
    __name: "Login",
    props: {
      canToggleLoginRegister: { type: Boolean },
      identifier: {},
      countryCode: {},
      appInfo: {},
      visible: { type: Boolean },
      conditionalUI: { type: Boolean },
      changeEmail: { type: Boolean },
    },
    emits: ["update:identifier", "update:countryCode"],
    setup(e, { emit: t }) {
      const i = e,
        { appId: n } = Fl(),
        { t: a } = fl(),
        s = ht(""),
        r = fa({
          get: () => i.identifier,
          set(e) {
            t("update:identifier", e);
          },
        }),
        o = fa({
          get: () => i.countryCode,
          set(e) {
            t("update:countryCode", e);
          },
        }),
        M = ht();
      oi(M, () =>
        __async(this, null, function* () {
          tu().onEvent.value(Vl.onLoaded), d();
        })
      );
      const l = fa(() => {
        var e;
        return null != (e = i.appInfo.allowed_identifier) ? e : Or.email;
      });
      function u(e) {
        return __async(this, null, function* () {
          const {
            identifier: t,
            identifierExists: n,
            userHasWebauthn: r,
            userHasPasskey: o,
            userStatus: M,
            userID: l,
            identifierType: u,
            emailVerified: c,
            phoneVerified: g,
          } = e;
          if (!tu().beforeAuth.value(t)) return;
          const d = (function (e, t, n) {
            if (!e) {
              let e = t === br.email ? a("email") : a("phone");
              e = `${e.charAt(0).toUpperCase()}${e.slice(1)}`;
              let n = `${a("not-recognized", [e])}.`;
              return (
                i.canToggleLoginRegister &&
                  i.appInfo.public_signup &&
                  (n = `${n} ${a("toggle-register")}`),
                n
              );
            }
            if (e && n === zr.INACTIVE) return a("account-no-longer-active");
            return "";
          })(n, u, M);
          "" === d
            ? gu().emitEvent({
                type: ru.LoginUser,
                payload: {
                  identifier: t,
                  identifierType: u,
                  userHasPasskey: o,
                  userHasWebauthn: r,
                  userID: l,
                  emailVerified: c,
                  phoneVerified: g,
                },
              })
            : (s.value = d);
        });
      }
      const c = ht(!1);
      let g;
      function d() {
        return __async(this, null, function* () {
          if (i.conditionalUI) {
            g = new AbortController();
            new Lr(n.value)
              .loginConditional(g.signal)
              .then((e) => {
                gu().emitEvent({
                  type: ru.AuthSuccess,
                  payload: { authResult: e },
                });
              })
              .catch(() => {});
          }
        });
      }
      function N() {
        null == g || g.abort();
      }
      return (
        bi(() => {
          const e = localStorage.getItem(iu);
          e && !i.changeEmail && ((r.value = e), (c.value = !0));
        }),
        Qi(() => {
          N();
        }),
        oi(
          () => i.visible,
          () => {
            !0 === c.value && (r.value = ""),
              (c.value = !1),
              i.visible ? d() : N();
          }
        ),
        (e, t) => (
          Vn(),
          $n(
            Pl,
            {
              appId: xt(n),
              identifierMode: l.value,
              conditionalUI: e.conditionalUI,
              showWelcomeBack: c.value,
              "onUpdate:showWelcomeBack": t[0] || (t[0] = (e) => (c.value = e)),
              identifier: r.value,
              "onUpdate:identifier": t[1] || (t[1] = (e) => (r.value = e)),
              validationError: s.value,
              "onUpdate:validationError": t[2] || (t[2] = (e) => (s.value = e)),
              countryCode: o.value,
              "onUpdate:countryCode": t[3] || (t[3] = (e) => (o.value = e)),
              onOnSubmit: t[4] || (t[4] = (e) => u(e)),
              ref_key: "inputForm",
              ref: M,
            },
            { loginInput: ti(() => [$i(e.$slots, "loginInput")]), _: 3 },
            8,
            [
              "appId",
              "identifierMode",
              "conditionalUI",
              "showWelcomeBack",
              "identifier",
              "validationError",
              "countryCode",
            ]
          )
        )
      );
    },
  });
  var Nu = {},
    Du = {},
    Iu = {};
  Object.defineProperty(Iu, "__esModule", { value: !0 }),
    (Iu.Utils =
      Iu.obsoleteAttr =
      Iu.obsoleteOptsDel =
      Iu.obsoleteOpts =
      Iu.obsolete =
        void 0),
    (Iu.obsolete = function (e, t, i, n, a) {
      let s = (...s) => (
        console.warn(
          "gridstack.js: Function `" +
            i +
            "` is deprecated in " +
            a +
            " and has been replaced with `" +
            n +
            "`. It will be **completely** removed in v1.0"
        ),
        t.apply(e, s)
      );
      return (s.prototype = t.prototype), s;
    }),
    (Iu.obsoleteOpts = function (e, t, i, n) {
      void 0 !== e[t] &&
        ((e[i] = e[t]),
        console.warn(
          "gridstack.js: Option `" +
            t +
            "` is deprecated in " +
            n +
            " and has been replaced with `" +
            i +
            "`. It will be **completely** removed in v1.0"
        ));
    }),
    (Iu.obsoleteOptsDel = function (e, t, i, n) {
      void 0 !== e[t] &&
        console.warn(
          "gridstack.js: Option `" + t + "` is deprecated in " + i + n
        );
    }),
    (Iu.obsoleteAttr = function (e, t, i, n) {
      let a = e.getAttribute(t);
      null !== a &&
        (e.setAttribute(i, a),
        console.warn(
          "gridstack.js: attribute `" +
            t +
            "`=" +
            a +
            " is deprecated on this object in " +
            n +
            " and has been replaced with `" +
            i +
            "`. It will be **completely** removed in v1.0"
        ));
    });
  class yu {
    static getElements(e) {
      if ("string" == typeof e) {
        let t = document.querySelectorAll(e);
        return (
          t.length ||
            "." === e[0] ||
            "#" === e[0] ||
            ((t = document.querySelectorAll("." + e)),
            t.length || (t = document.querySelectorAll("#" + e))),
          Array.from(t)
        );
      }
      return [e];
    }
    static getElement(e) {
      if ("string" == typeof e) {
        if (!e.length) return null;
        if ("#" === e[0]) return document.getElementById(e.substring(1));
        if ("." === e[0] || "[" === e[0]) return document.querySelector(e);
        if (!isNaN(+e[0])) return document.getElementById(e);
        let t = document.querySelector(e);
        return (
          t || (t = document.getElementById(e)),
          t || (t = document.querySelector("." + e)),
          t
        );
      }
      return e;
    }
    static isIntercepted(e, t) {
      return !(
        e.y >= t.y + t.h ||
        e.y + e.h <= t.y ||
        e.x + e.w <= t.x ||
        e.x >= t.x + t.w
      );
    }
    static isTouching(e, t) {
      return yu.isIntercepted(e, {
        x: t.x - 0.5,
        y: t.y - 0.5,
        w: t.w + 1,
        h: t.h + 1,
      });
    }
    static sort(e, t, i) {
      return (
        (i = i || e.reduce((e, t) => Math.max(t.x + t.w, e), 0) || 12),
        -1 === t
          ? e.sort((e, t) => t.x + t.y * i - (e.x + e.y * i))
          : e.sort((e, t) => e.x + e.y * i - (t.x + t.y * i))
      );
    }
    static createStylesheet(e, t) {
      let i = document.createElement("style");
      return (
        i.setAttribute("type", "text/css"),
        i.setAttribute("gs-style-id", e),
        i.styleSheet
          ? (i.styleSheet.cssText = "")
          : i.appendChild(document.createTextNode("")),
        t
          ? t.insertBefore(i, t.firstChild)
          : (t = document.getElementsByTagName("head")[0]).appendChild(i),
        i.sheet
      );
    }
    static removeStylesheet(e) {
      let t = document.querySelector("STYLE[gs-style-id=" + e + "]");
      t && t.parentNode && t.remove();
    }
    static addCSSRule(e, t, i) {
      "function" == typeof e.addRule
        ? e.addRule(t, i)
        : "function" == typeof e.insertRule && e.insertRule(`${t}{${i}}`);
    }
    static toBool(e) {
      return "boolean" == typeof e
        ? e
        : "string" == typeof e
        ? !(
            "" === (e = e.toLowerCase()) ||
            "no" === e ||
            "false" === e ||
            "0" === e
          )
        : Boolean(e);
    }
    static toNumber(e) {
      return null === e || 0 === e.length ? void 0 : Number(e);
    }
    static parseHeight(e) {
      let t,
        i = "px";
      if ("string" == typeof e) {
        let n = e.match(
          /^(-[0-9]+\.[0-9]+|[0-9]*\.[0-9]+|-[0-9]+|[0-9]+)(px|em|rem|vh|vw|%)?$/
        );
        if (!n) throw new Error("Invalid height");
        (i = n[2] || "px"), (t = parseFloat(n[1]));
      } else t = e;
      return { h: t, unit: i };
    }
    static defaults(e, ...t) {
      return (
        t.forEach((t) => {
          for (const i in t) {
            if (!t.hasOwnProperty(i)) return;
            null === e[i] || void 0 === e[i]
              ? (e[i] = t[i])
              : "object" == typeof t[i] &&
                "object" == typeof e[i] &&
                this.defaults(e[i], t[i]);
          }
        }),
        e
      );
    }
    static same(e, t) {
      if ("object" != typeof e) return e == t;
      if (typeof e != typeof t) return !1;
      if (Object.keys(e).length !== Object.keys(t).length) return !1;
      for (const i in e) if (e[i] !== t[i]) return !1;
      return !0;
    }
    static copyPos(e, t, i = !1) {
      return (
        (e.x = t.x),
        (e.y = t.y),
        (e.w = t.w),
        (e.h = t.h),
        i
          ? (t.minW && (e.minW = t.minW),
            t.minH && (e.minH = t.minH),
            t.maxW && (e.maxW = t.maxW),
            t.maxH && (e.maxH = t.maxH),
            e)
          : e
      );
    }
    static samePos(e, t) {
      return e && t && e.x === t.x && e.y === t.y && e.w === t.w && e.h === t.h;
    }
    static removeInternalAndSame(e, t) {
      if ("object" == typeof e && "object" == typeof t)
        for (let i in e) {
          let n = e[i];
          if ("_" === i[0] || n === t[i]) delete e[i];
          else if (n && "object" == typeof n && void 0 !== t[i]) {
            for (let e in n) (n[e] !== t[i][e] && "_" !== e[0]) || delete n[e];
            Object.keys(n).length || delete e[i];
          }
        }
    }
    static closestByClass(e, t) {
      for (; e; ) {
        if (e.classList.contains(t)) return e;
        e = e.parentElement;
      }
      return null;
    }
    static throttle(e, t) {
      let i = !1;
      return (...n) => {
        i ||
          ((i = !0),
          setTimeout(() => {
            e(...n), (i = !1);
          }, t));
      };
    }
    static removePositioningStyles(e) {
      let t = e.style;
      t.position && t.removeProperty("position"),
        t.left && t.removeProperty("left"),
        t.top && t.removeProperty("top"),
        t.width && t.removeProperty("width"),
        t.height && t.removeProperty("height");
    }
    static getScrollElement(e) {
      if (!e) return document.scrollingElement || document.documentElement;
      const t = getComputedStyle(e);
      return /(auto|scroll)/.test(t.overflow + t.overflowY)
        ? e
        : this.getScrollElement(e.parentElement);
    }
    static updateScrollPosition(e, t, i) {
      let n = e.getBoundingClientRect(),
        a = window.innerHeight || document.documentElement.clientHeight;
      if (n.top < 0 || n.bottom > a) {
        let s = n.bottom - a,
          r = n.top,
          o = this.getScrollElement(e);
        if (null !== o) {
          let M = o.scrollTop;
          n.top < 0 && i < 0
            ? e.offsetHeight > a
              ? (o.scrollTop += i)
              : (o.scrollTop += Math.abs(r) > Math.abs(i) ? i : r)
            : i > 0 &&
              (e.offsetHeight > a
                ? (o.scrollTop += i)
                : (o.scrollTop += s > i ? i : s)),
            (t.top += o.scrollTop - M);
        }
      }
    }
    static updateScrollResize(e, t, i) {
      const n = this.getScrollElement(t),
        a = n.clientHeight,
        s = n === this.getScrollElement() ? 0 : n.getBoundingClientRect().top,
        r = e.clientY - s,
        o = r > a - i;
      r < i
        ? n.scrollBy({ behavior: "smooth", top: r - i })
        : o && n.scrollBy({ behavior: "smooth", top: i - (a - r) });
    }
    static clone(e) {
      return null == e || "object" != typeof e
        ? e
        : e instanceof Array
        ? [...e]
        : Object.assign({}, e);
    }
    static cloneDeep(e) {
      const t = yu.clone(e);
      for (const i in t)
        t.hasOwnProperty(i) &&
          "object" == typeof t[i] &&
          "__" !== i.substring(0, 2) &&
          !ju.find((e) => e === i) &&
          (t[i] = yu.cloneDeep(e[i]));
      return t;
    }
  }
  Iu.Utils = yu;
  const ju = ["_isNested", "el", "grid", "subGrid", "engine"];
  Object.defineProperty(Du, "__esModule", { value: !0 }),
    (Du.GridStackEngine = void 0);
  const pu = Iu;
  class zu {
    constructor(e = {}) {
      (this.addedNodes = []),
        (this.removedNodes = []),
        (this.column = e.column || 12),
        (this.onChange = e.onChange),
        (this._float = e.float),
        (this.maxRow = e.maxRow),
        (this.nodes = e.nodes || []);
    }
    batchUpdate() {
      return (
        this.batchMode ||
          ((this.batchMode = !0),
          (this._prevFloat = this._float),
          (this._float = !0),
          this.saveInitial()),
        this
      );
    }
    commit() {
      return this.batchMode
        ? ((this.batchMode = !1),
          (this._float = this._prevFloat),
          delete this._prevFloat,
          this._packNodes()._notify())
        : this;
    }
    _useEntireRowArea(e, t) {
      return (
        !this.float &&
        !this._hasLocked &&
        (!e._moving || e._skipDown || t.y <= e.y)
      );
    }
    _fixCollisions(e, t = e, i, n = {}) {
      if ((this._sortNodes(-1), !(i = i || this.collide(e, t)))) return !1;
      if (e._moving && !n.nested && !this.float && this.swap(e, i)) return !0;
      let a = t;
      this._useEntireRowArea(e, t) &&
        ((a = { x: 0, w: this.column, y: t.y, h: t.h }),
        (i = this.collide(e, a, n.skip)));
      let s = !1,
        r = { nested: !0, pack: !1 };
      for (; (i = i || this.collide(e, a, n.skip)); ) {
        let a;
        if (
          (i.locked ||
          (e._moving &&
            !e._skipDown &&
            t.y > e.y &&
            !this.float &&
            (!this.collide(
              i,
              Object.assign(Object.assign({}, i), { y: e.y }),
              e
            ) ||
              !this.collide(
                i,
                Object.assign(Object.assign({}, i), { y: t.y - i.h }),
                e
              )))
            ? ((e._skipDown = e._skipDown || t.y > e.y),
              (a = this.moveNode(
                e,
                Object.assign(
                  Object.assign(Object.assign({}, t), { y: i.y + i.h }),
                  r
                )
              )),
              i.locked && a
                ? pu.Utils.copyPos(t, e)
                : !i.locked &&
                  a &&
                  n.pack &&
                  (this._packNodes(),
                  (t.y = i.y + i.h),
                  pu.Utils.copyPos(e, t)),
              (s = s || a))
            : (a = this.moveNode(
                i,
                Object.assign(
                  Object.assign(Object.assign({}, i), {
                    y: t.y + t.h,
                    skip: e,
                  }),
                  r
                )
              )),
          !a)
        )
          return s;
        i = void 0;
      }
      return s;
    }
    collide(e, t = e, i) {
      return this.nodes.find(
        (n) => n !== e && n !== i && pu.Utils.isIntercepted(n, t)
      );
    }
    collideAll(e, t = e, i) {
      return this.nodes.filter(
        (n) => n !== e && n !== i && pu.Utils.isIntercepted(n, t)
      );
    }
    collideCoverage(e, t, i) {
      if (!t.rect || !e._rect) return;
      let n,
        a = e._rect,
        s = Object.assign({}, t.rect);
      return (
        s.y > a.y ? ((s.h += s.y - a.y), (s.y = a.y)) : (s.h += a.y - s.y),
        s.x > a.x ? ((s.w += s.x - a.x), (s.x = a.x)) : (s.w += a.x - s.x),
        i.forEach((e) => {
          if (e.locked || !e._rect) return;
          let t = e._rect,
            i = Number.MAX_VALUE,
            r = Number.MAX_VALUE,
            o = 0.5;
          a.y < t.y
            ? (i = (s.y + s.h - t.y) / t.h)
            : a.y + a.h > t.y + t.h && (i = (t.y + t.h - s.y) / t.h),
            a.x < t.x
              ? (r = (s.x + s.w - t.x) / t.w)
              : a.x + a.w > t.x + t.w && (r = (t.x + t.w - s.x) / t.w);
          let M = Math.min(r, i);
          M > o && ((o = M), (n = e));
        }),
        n
      );
    }
    cacheRects(e, t, i, n, a, s) {
      return (
        this.nodes.forEach(
          (r) =>
            (r._rect = {
              y: r.y * t + i,
              x: r.x * e + s,
              w: r.w * e - s - n,
              h: r.h * t - i - a,
            })
        ),
        this
      );
    }
    swap(e, t) {
      if (!t || t.locked || !e || e.locked) return !1;
      function i() {
        let i = t.x,
          n = t.y;
        return (
          (t.x = e.x),
          (t.y = e.y),
          e.h != t.h
            ? ((e.x = i), (e.y = t.y + t.h))
            : e.w != t.w
            ? ((e.x = t.x + t.w), (e.y = n))
            : ((e.x = i), (e.y = n)),
          (e._dirty = t._dirty = !0),
          !0
        );
      }
      let n;
      if (
        e.w === t.w &&
        e.h === t.h &&
        (e.x === t.x || e.y === t.y) &&
        (n = pu.Utils.isTouching(e, t))
      )
        return i();
      if (!1 !== n) {
        if (
          e.w === t.w &&
          e.x === t.x &&
          (n || (n = pu.Utils.isTouching(e, t)))
        ) {
          if (t.y < e.y) {
            let i = e;
            (e = t), (t = i);
          }
          return i();
        }
        if (!1 !== n) {
          if (
            e.h === t.h &&
            e.y === t.y &&
            (n || (n = pu.Utils.isTouching(e, t)))
          ) {
            if (t.x < e.x) {
              let i = e;
              (e = t), (t = i);
            }
            return i();
          }
          return !1;
        }
      }
    }
    isAreaEmpty(e, t, i, n) {
      let a = { x: e || 0, y: t || 0, w: i || 1, h: n || 1 };
      return !this.collide(a);
    }
    compact() {
      if (0 === this.nodes.length) return this;
      this.batchUpdate()._sortNodes();
      let e = this.nodes;
      return (
        (this.nodes = []),
        e.forEach((e) => {
          e.locked || (e.autoPosition = !0),
            this.addNode(e, !1),
            (e._dirty = !0);
        }),
        this.commit()
      );
    }
    set float(e) {
      this._float !== e &&
        ((this._float = e || !1), e || this._packNodes()._notify());
    }
    get float() {
      return this._float || !1;
    }
    _sortNodes(e) {
      return (this.nodes = pu.Utils.sort(this.nodes, e, this.column)), this;
    }
    _packNodes() {
      return (
        this.batchMode ||
          (this._sortNodes(),
          this.float
            ? this.nodes.forEach((e) => {
                if (e._updating || void 0 === e._orig || e.y === e._orig.y)
                  return;
                let t = e.y;
                for (; t > e._orig.y; ) {
                  --t,
                    this.collide(e, { x: e.x, y: t, w: e.w, h: e.h }) ||
                      ((e._dirty = !0), (e.y = t));
                }
              })
            : this.nodes.forEach((e, t) => {
                if (!e.locked)
                  for (; e.y > 0; ) {
                    let i = 0 === t ? 0 : e.y - 1;
                    if (
                      !(
                        0 === t ||
                        !this.collide(e, { x: e.x, y: i, w: e.w, h: e.h })
                      )
                    )
                      break;
                    (e._dirty = e.y !== i), (e.y = i);
                  }
              })),
        this
      );
    }
    prepareNode(e, t) {
      ((e = e || {})._id = e._id || zu._idSeq++),
        (void 0 !== e.x && void 0 !== e.y && null !== e.x && null !== e.y) ||
          (e.autoPosition = !0);
      let i = { x: 0, y: 0, w: 1, h: 1 };
      return (
        pu.Utils.defaults(e, i),
        e.autoPosition || delete e.autoPosition,
        e.noResize || delete e.noResize,
        e.noMove || delete e.noMove,
        "string" == typeof e.x && (e.x = Number(e.x)),
        "string" == typeof e.y && (e.y = Number(e.y)),
        "string" == typeof e.w && (e.w = Number(e.w)),
        "string" == typeof e.h && (e.h = Number(e.h)),
        isNaN(e.x) && ((e.x = i.x), (e.autoPosition = !0)),
        isNaN(e.y) && ((e.y = i.y), (e.autoPosition = !0)),
        isNaN(e.w) && (e.w = i.w),
        isNaN(e.h) && (e.h = i.h),
        this.nodeBoundFix(e, t)
      );
    }
    nodeBoundFix(e, t) {
      let i = e._orig || pu.Utils.copyPos({}, e);
      return (
        e.maxW && (e.w = Math.min(e.w, e.maxW)),
        e.maxH && (e.h = Math.min(e.h, e.maxH)),
        e.minW && e.minW <= this.column && (e.w = Math.max(e.w, e.minW)),
        e.minH && (e.h = Math.max(e.h, e.minH)),
        e.w > this.column
          ? (this.column < 12 &&
              !this._inColumnResize &&
              ((e.w = Math.min(12, e.w)), this.cacheOneLayout(e, 12)),
            (e.w = this.column))
          : e.w < 1 && (e.w = 1),
        this.maxRow && e.h > this.maxRow
          ? (e.h = this.maxRow)
          : e.h < 1 && (e.h = 1),
        e.x < 0 && (e.x = 0),
        e.y < 0 && (e.y = 0),
        e.x + e.w > this.column &&
          (t ? (e.w = this.column - e.x) : (e.x = this.column - e.w)),
        this.maxRow &&
          e.y + e.h > this.maxRow &&
          (t ? (e.h = this.maxRow - e.y) : (e.y = this.maxRow - e.h)),
        pu.Utils.samePos(e, i) || (e._dirty = !0),
        e
      );
    }
    getDirtyNodes(e) {
      return e
        ? this.nodes.filter((e) => e._dirty && !pu.Utils.samePos(e, e._orig))
        : this.nodes.filter((e) => e._dirty);
    }
    _notify(e, t = !0) {
      if (this.batchMode) return this;
      let i = (e = void 0 === e ? [] : Array.isArray(e) ? e : [e]).concat(
        this.getDirtyNodes()
      );
      return this.onChange && this.onChange(i, t), this;
    }
    cleanNodes() {
      return (
        this.batchMode ||
          this.nodes.forEach((e) => {
            delete e._dirty, delete e._lastTried;
          }),
        this
      );
    }
    saveInitial() {
      return (
        this.nodes.forEach((e) => {
          (e._orig = pu.Utils.copyPos({}, e)), delete e._dirty;
        }),
        (this._hasLocked = this.nodes.some((e) => e.locked)),
        this
      );
    }
    restoreInitial() {
      return (
        this.nodes.forEach((e) => {
          pu.Utils.samePos(e, e._orig) ||
            (pu.Utils.copyPos(e, e._orig), (e._dirty = !0));
        }),
        this._notify(),
        this
      );
    }
    addNode(e, t = !1) {
      let i = this.nodes.find((t) => t._id === e._id);
      if (i) return i;
      if (
        (delete (e = this._inColumnResize
          ? this.nodeBoundFix(e)
          : this.prepareNode(e))._temporaryRemoved,
        delete e._removeDOM,
        e.autoPosition)
      ) {
        this._sortNodes();
        for (let t = 0; ; ++t) {
          let i = t % this.column,
            n = Math.floor(t / this.column);
          if (i + e.w > this.column) continue;
          let a = { x: i, y: n, w: e.w, h: e.h };
          if (!this.nodes.find((e) => pu.Utils.isIntercepted(a, e))) {
            (e.x = i), (e.y = n), delete e.autoPosition;
            break;
          }
        }
      }
      return (
        this.nodes.push(e),
        t && this.addedNodes.push(e),
        this._fixCollisions(e),
        this.batchMode || this._packNodes()._notify(),
        e
      );
    }
    removeNode(e, t = !0, i = !1) {
      return this.nodes.find((t) => t === e)
        ? (i && this.removedNodes.push(e),
          t && (e._removeDOM = !0),
          (this.nodes = this.nodes.filter((t) => t !== e)),
          this._packNodes()._notify(e))
        : this;
    }
    removeAll(e = !0) {
      return (
        delete this._layouts,
        0 === this.nodes.length
          ? this
          : (e && this.nodes.forEach((e) => (e._removeDOM = !0)),
            (this.removedNodes = this.nodes),
            (this.nodes = []),
            this._notify(this.removedNodes))
      );
    }
    moveNodeCheck(e, t) {
      if (!this.changedPosConstrain(e, t)) return !1;
      if (((t.pack = !0), !this.maxRow)) return this.moveNode(e, t);
      let i,
        n = new zu({
          column: this.column,
          float: this.float,
          nodes: this.nodes.map((t) =>
            t === e ? ((i = Object.assign({}, t)), i) : Object.assign({}, t)
          ),
        });
      if (!i) return !1;
      let a = n.moveNode(i, t);
      if (
        this.maxRow &&
        a &&
        ((a = n.getRow() <= this.maxRow), !a && !t.resizing)
      ) {
        let i = this.collide(e, t);
        if (i && this.swap(e, i)) return this._notify(), !0;
      }
      return (
        !!a &&
        (n.nodes
          .filter((e) => e._dirty)
          .forEach((e) => {
            let t = this.nodes.find((t) => t._id === e._id);
            t && (pu.Utils.copyPos(t, e), (t._dirty = !0));
          }),
        this._notify(),
        !0)
      );
    }
    willItFit(e) {
      if ((delete e._willFitPos, !this.maxRow)) return !0;
      let t = new zu({
          column: this.column,
          float: this.float,
          nodes: this.nodes.map((e) => Object.assign({}, e)),
        }),
        i = Object.assign({}, e);
      return (
        this.cleanupNode(i),
        delete i.el,
        delete i._id,
        delete i.content,
        delete i.grid,
        t.addNode(i),
        t.getRow() <= this.maxRow &&
          ((e._willFitPos = pu.Utils.copyPos({}, i)), !0)
      );
    }
    changedPosConstrain(e, t) {
      return (
        (t.w = t.w || e.w),
        (t.h = t.h || e.h),
        e.x !== t.x ||
          e.y !== t.y ||
          (e.maxW && (t.w = Math.min(t.w, e.maxW)),
          e.maxH && (t.h = Math.min(t.h, e.maxH)),
          e.minW && (t.w = Math.max(t.w, e.minW)),
          e.minH && (t.h = Math.max(t.h, e.minH)),
          e.w !== t.w || e.h !== t.h)
      );
    }
    moveNode(e, t) {
      if (!e || !t) return !1;
      void 0 === t.pack && (t.pack = !0),
        "number" != typeof t.x && (t.x = e.x),
        "number" != typeof t.y && (t.y = e.y),
        "number" != typeof t.w && (t.w = e.w),
        "number" != typeof t.h && (t.h = e.h);
      let i = e.w !== t.w || e.h !== t.h,
        n = pu.Utils.copyPos({}, e, !0);
      if (
        (pu.Utils.copyPos(n, t),
        (n = this.nodeBoundFix(n, i)),
        pu.Utils.copyPos(t, n),
        pu.Utils.samePos(e, t))
      )
        return !1;
      let a = pu.Utils.copyPos({}, e),
        s = n,
        r = this.collideAll(e, s, t.skip),
        o = !0;
      if (r.length) {
        let i = e._moving && !t.nested ? this.collideCoverage(e, t, r) : r[0];
        o = !!i && !this._fixCollisions(e, n, i, t);
      }
      return (
        o && ((e._dirty = !0), pu.Utils.copyPos(e, n)),
        t.pack && this._packNodes()._notify(),
        !pu.Utils.samePos(e, a)
      );
    }
    getRow() {
      return this.nodes.reduce((e, t) => Math.max(e, t.y + t.h), 0);
    }
    beginUpdate(e) {
      return (
        e._updating ||
          ((e._updating = !0),
          delete e._skipDown,
          this.batchMode || this.saveInitial()),
        this
      );
    }
    endUpdate() {
      let e = this.nodes.find((e) => e._updating);
      return e && (delete e._updating, delete e._skipDown), this;
    }
    save(e = !0) {
      var t;
      let i = null === (t = this._layouts) || void 0 === t ? void 0 : t.length,
        n = i && this.column !== i - 1 ? this._layouts[i - 1] : null,
        a = [];
      return (
        this._sortNodes(),
        this.nodes.forEach((t) => {
          let i = null == n ? void 0 : n.find((e) => e._id === t._id),
            s = Object.assign({}, t);
          i && ((s.x = i.x), (s.y = i.y), (s.w = i.w));
          for (let e in s)
            ("_" !== e[0] && null !== s[e] && void 0 !== s[e]) || delete s[e];
          delete s.grid,
            e || delete s.el,
            s.autoPosition || delete s.autoPosition,
            s.noResize || delete s.noResize,
            s.noMove || delete s.noMove,
            s.locked || delete s.locked,
            a.push(s);
        }),
        a
      );
    }
    layoutsNodesChange(e) {
      return (
        !this._layouts ||
          this._inColumnResize ||
          this._layouts.forEach((t, i) => {
            if (!t || i === this.column) return this;
            if (i < this.column) this._layouts[i] = void 0;
            else {
              let n = i / this.column;
              e.forEach((e) => {
                if (!e._orig) return;
                let i = t.find((t) => t._id === e._id);
                i &&
                  (e.y !== e._orig.y && (i.y += e.y - e._orig.y),
                  e.x !== e._orig.x && (i.x = Math.round(e.x * n)),
                  e.w !== e._orig.w && (i.w = Math.round(e.w * n)));
              });
            }
          }),
        this
      );
    }
    updateNodeWidths(e, t, i, n = "moveScale") {
      var a;
      if (!this.nodes.length || !t || e === t) return this;
      this.cacheLayout(this.nodes, e), this.batchUpdate();
      let s = [],
        r = !1;
      if (1 === t && (null == i ? void 0 : i.length)) {
        r = !0;
        let e = 0;
        i.forEach((t) => {
          (t.x = 0), (t.w = 1), (t.y = Math.max(t.y, e)), (e = t.y + t.h);
        }),
          (s = i),
          (i = []);
      } else i = pu.Utils.sort(this.nodes, -1, e);
      let o = [];
      if (t > e) {
        o = this._layouts[t] || [];
        let n = this._layouts.length - 1;
        !o.length &&
          e !== n &&
          (null === (a = this._layouts[n]) || void 0 === a
            ? void 0
            : a.length) &&
          ((e = n),
          this._layouts[n].forEach((e) => {
            let t = i.find((t) => t._id === e._id);
            t && ((t.x = e.x), (t.y = e.y), (t.w = e.w));
          }));
      }
      if (
        (o.forEach((e) => {
          let t = i.findIndex((t) => t._id === e._id);
          -1 !== t &&
            ((i[t].x = e.x),
            (i[t].y = e.y),
            (i[t].w = e.w),
            s.push(i[t]),
            i.splice(t, 1));
        }),
        i.length)
      )
        if ("function" == typeof n) n(t, e, s, i);
        else if (!r) {
          let a = t / e,
            r = "move" === n || "moveScale" === n,
            o = "scale" === n || "moveScale" === n;
          i.forEach((i) => {
            (i.x =
              1 === t ? 0 : r ? Math.round(i.x * a) : Math.min(i.x, t - 1)),
              (i.w =
                1 === t || 1 === e
                  ? 1
                  : o
                  ? Math.round(i.w * a) || 1
                  : Math.min(i.w, t)),
              s.push(i);
          }),
            (i = []);
        }
      return (
        (s = pu.Utils.sort(s, -1, t)),
        (this._inColumnResize = !0),
        (this.nodes = []),
        s.forEach((e) => {
          this.addNode(e, !1), delete e._orig;
        }),
        this.commit(),
        delete this._inColumnResize,
        this
      );
    }
    cacheLayout(e, t, i = !1) {
      let n = [];
      return (
        e.forEach((e, t) => {
          (e._id = e._id || zu._idSeq++),
            (n[t] = { x: e.x, y: e.y, w: e.w, _id: e._id });
        }),
        (this._layouts = i ? [] : this._layouts || []),
        (this._layouts[t] = n),
        this
      );
    }
    cacheOneLayout(e, t) {
      e._id = e._id || zu._idSeq++;
      let i = { x: e.x, y: e.y, w: e.w, _id: e._id };
      (this._layouts = this._layouts || []),
        (this._layouts[t] = this._layouts[t] || []);
      let n = this._layouts[t].findIndex((t) => t._id === e._id);
      return (
        -1 === n ? this._layouts[t].push(i) : (this._layouts[t][n] = i), this
      );
    }
    cleanupNode(e) {
      for (let t in e) "_" === t[0] && "_id" !== t && delete e[t];
      return this;
    }
  }
  (Du.GridStackEngine = zu), (zu._idSeq = 1);
  var Tu = {};
  Object.defineProperty(Tu, "__esModule", { value: !0 }),
    (Tu.GridStackDDI = void 0);
  class hu {
    static registerPlugin(e) {
      return (hu.ddi = new e()), hu.ddi;
    }
    static get() {
      return hu.ddi || hu.registerPlugin(hu);
    }
    remove(e) {
      return this;
    }
  }
  Tu.GridStackDDI = hu;
  var Au = {};
  Object.defineProperty(Au, "__esModule", { value: !0 }),
    (function (e) {
      var t =
          (bs && bs.__createBinding) ||
          (Object.create
            ? function (e, t, i, n) {
                void 0 === n && (n = i),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[i];
                    },
                  });
              }
            : function (e, t, i, n) {
                void 0 === n && (n = i), (e[n] = t[i]);
              }),
        i =
          (bs && bs.__exportStar) ||
          function (e, i) {
            for (var n in e)
              "default" === n || i.hasOwnProperty(n) || t(i, e, n);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.GridStack = void 0);
      const n = Du,
        a = Iu,
        s = Tu;
      i(Au, e), i(Iu, e), i(Du, e), i(Tu, e);
      const r = {
        column: 12,
        minRow: 0,
        maxRow: 0,
        itemClass: "grid-stack-item",
        placeholderClass: "grid-stack-placeholder",
        placeholderText: "",
        handle: ".grid-stack-item-content",
        handleClass: null,
        styleInHead: !1,
        cellHeight: "auto",
        cellHeightThrottle: 100,
        margin: 10,
        auto: !0,
        minWidth: 768,
        float: !1,
        staticGrid: !1,
        animate: !0,
        alwaysShowResizeHandle: !1,
        resizable: { autoHide: !0, handles: "se" },
        draggable: {
          handle: ".grid-stack-item-content",
          scroll: !1,
          appendTo: "body",
        },
        disableDrag: !1,
        disableResize: !1,
        rtl: "auto",
        removable: !1,
        removableOptions: { accept: ".grid-stack-item" },
        marginUnit: "px",
        cellHeightUnit: "px",
        disableOneColumnMode: !1,
        oneColumnModeDomSort: !1,
      };
      class o {
        constructor(e, t = {}) {
          (this._gsEventHandler = {}),
            (this._extraDragRow = 0),
            (this.el = e),
            (t = t || {}).row && ((t.minRow = t.maxRow = t.row), delete t.row);
          let i = a.Utils.toNumber(e.getAttribute("gs-row"));
          "auto" === t.column && delete t.column;
          let s = Object.assign(Object.assign({}, a.Utils.cloneDeep(r)), {
            column: a.Utils.toNumber(e.getAttribute("gs-column")) || 12,
            minRow: i || a.Utils.toNumber(e.getAttribute("gs-min-row")) || 0,
            maxRow: i || a.Utils.toNumber(e.getAttribute("gs-max-row")) || 0,
            staticGrid: a.Utils.toBool(e.getAttribute("gs-static")) || !1,
            _styleSheetClass:
              "grid-stack-instance-" + (1e4 * Math.random()).toFixed(0),
            alwaysShowResizeHandle: t.alwaysShowResizeHandle || !1,
            resizable: { autoHide: !t.alwaysShowResizeHandle, handles: "se" },
            draggable: {
              handle:
                (t.handleClass
                  ? "." + t.handleClass
                  : t.handle
                  ? t.handle
                  : "") || ".grid-stack-item-content",
              scroll: !1,
              appendTo: "body",
            },
            removableOptions: {
              accept: "." + (t.itemClass || "grid-stack-item"),
            },
          });
          e.getAttribute("gs-animate") &&
            (s.animate = a.Utils.toBool(e.getAttribute("gs-animate"))),
            (this.opts = a.Utils.defaults(t, s)),
            (t = null),
            this.initMargin(),
            1 !== this.opts.column &&
              !this.opts.disableOneColumnMode &&
              this._widthOrContainer() <= this.opts.minWidth &&
              ((this._prevColumn = this.getColumn()), (this.opts.column = 1)),
            "auto" === this.opts.rtl &&
              (this.opts.rtl = "rtl" === e.style.direction),
            this.opts.rtl && this.el.classList.add("grid-stack-rtl");
          let M = a.Utils.closestByClass(this.el, r.itemClass);
          if (
            (M &&
              M.gridstackNode &&
              ((this.opts._isNested = M.gridstackNode),
              (this.opts._isNested.subGrid = this),
              M.classList.add("grid-stack-nested"),
              this.el.classList.add("grid-stack-nested")),
            (this._isAutoCellHeight = "auto" === this.opts.cellHeight),
            this._isAutoCellHeight || "initial" === this.opts.cellHeight
              ? this.cellHeight(void 0, !1)
              : ("number" == typeof this.opts.cellHeight &&
                  this.opts.cellHeightUnit &&
                  this.opts.cellHeightUnit !== r.cellHeightUnit &&
                  ((this.opts.cellHeight =
                    this.opts.cellHeight + this.opts.cellHeightUnit),
                  delete this.opts.cellHeightUnit),
                this.cellHeight(this.opts.cellHeight, !1)),
            this.el.classList.add(this.opts._styleSheetClass),
            this._setStaticClass(),
            (this.engine = new n.GridStackEngine({
              column: this.getColumn(),
              float: this.opts.float,
              maxRow: this.opts.maxRow,
              onChange: (e) => {
                let t = 0;
                this.engine.nodes.forEach((e) => {
                  t = Math.max(t, e.y + e.h);
                }),
                  e.forEach((e) => {
                    let t = e.el;
                    t &&
                      (e._removeDOM
                        ? (t && t.remove(), delete e._removeDOM)
                        : this._writePosAttr(t, e));
                  }),
                  this._updateStyles(!1, t);
              },
            })),
            this.opts.auto)
          ) {
            this.batchUpdate();
            let e = [];
            this.getGridItems().forEach((t) => {
              let i = parseInt(t.getAttribute("gs-x")),
                n = parseInt(t.getAttribute("gs-y"));
              e.push({
                el: t,
                i:
                  (Number.isNaN(i) ? 1e3 : i) +
                  (Number.isNaN(n) ? 1e3 : n) * this.getColumn(),
              });
            }),
              e
                .sort((e, t) => e.i - t.i)
                .forEach((e) => this._prepareElement(e.el)),
              this.commit();
          }
          this.setAnimation(this.opts.animate),
            this._updateStyles(),
            12 != this.opts.column &&
              this.el.classList.add("grid-stack-" + this.opts.column),
            this.opts.dragIn &&
              o.setupDragIn(this.opts.dragIn, this.opts.dragInOptions),
            delete this.opts.dragIn,
            delete this.opts.dragInOptions,
            this._setupRemoveDrop(),
            this._setupAcceptWidget(),
            this._updateWindowResizeEvent();
        }
        static init(e = {}, t = ".grid-stack") {
          let i = o.getGridElement(t);
          return i
            ? (i.gridstack || (i.gridstack = new o(i, a.Utils.cloneDeep(e))),
              i.gridstack)
            : ("string" == typeof t
                ? console.error(
                    'GridStack.initAll() no grid was found with selector "' +
                      t +
                      '" - element missing or wrong selector ?\nNote: ".grid-stack" is required for proper CSS styling and drag/drop, and is the default selector.'
                  )
                : console.error("GridStack.init() no grid element was passed."),
              null);
        }
        static initAll(e = {}, t = ".grid-stack") {
          let i = [];
          return (
            o.getGridElements(t).forEach((t) => {
              t.gridstack ||
                ((t.gridstack = new o(t, a.Utils.cloneDeep(e))),
                delete e.dragIn,
                delete e.dragInOptions),
                i.push(t.gridstack);
            }),
            0 === i.length &&
              console.error(
                'GridStack.initAll() no grid was found with selector "' +
                  t +
                  '" - element missing or wrong selector ?\nNote: ".grid-stack" is required for proper CSS styling and drag/drop, and is the default selector.'
              ),
            i
          );
        }
        static addGrid(e, t = {}) {
          if (!e) return null;
          let i = e;
          if (!e.classList.contains("grid-stack")) {
            let n = document.implementation.createHTMLDocument("");
            (n.body.innerHTML = `<div class="grid-stack ${
              t.class || ""
            }"></div>`),
              (i = n.body.children[0]),
              e.appendChild(i);
          }
          let n = o.init(t, i);
          if (n.opts.children) {
            let e = n.opts.children;
            delete n.opts.children, n.load(e);
          }
          return n;
        }
        get placeholder() {
          if (!this._placeholder) {
            let e = document.createElement("div");
            (e.className = "placeholder-content"),
              this.opts.placeholderText &&
                (e.innerHTML = this.opts.placeholderText),
              (this._placeholder = document.createElement("div")),
              this._placeholder.classList.add(
                this.opts.placeholderClass,
                r.itemClass,
                this.opts.itemClass
              ),
              this.placeholder.appendChild(e);
          }
          return this._placeholder;
        }
        addWidget(e, t) {
          if (arguments.length > 2) {
            console.warn(
              "gridstack.ts: `addWidget(el, x, y, width...)` is deprecated. Use `addWidget({x, y, w, content, ...})`. It will be removed soon"
            );
            let t = arguments,
              i = 1,
              n = {
                x: t[i++],
                y: t[i++],
                w: t[i++],
                h: t[i++],
                autoPosition: t[i++],
                minW: t[i++],
                maxW: t[i++],
                minH: t[i++],
                maxH: t[i++],
                id: t[i++],
              };
            return this.addWidget(e, n);
          }
          let i;
          if ("string" == typeof e) {
            let t = document.implementation.createHTMLDocument("");
            (t.body.innerHTML = e), (i = t.body.children[0]);
          } else if (
            0 === arguments.length ||
            (1 === arguments.length &&
              (void 0 !== (n = e).x ||
                void 0 !== n.y ||
                void 0 !== n.w ||
                void 0 !== n.h ||
                void 0 !== n.content))
          ) {
            let n = (e && e.content) || "";
            t = e;
            let a = document.implementation.createHTMLDocument("");
            (a.body.innerHTML = `<div class="grid-stack-item ${
              this.opts.itemClass || ""
            }"><div class="grid-stack-item-content">${n}</div></div>`),
              (i = a.body.children[0]);
          } else i = e;
          var n;
          let s = this._readAttr(i);
          (t = a.Utils.cloneDeep(t) || {}), a.Utils.defaults(t, s);
          let r = this.engine.prepareNode(t);
          if (
            (this._writeAttr(i, t),
            this._insertNotAppend ? this.el.prepend(i) : this.el.appendChild(i),
            this._prepareElement(i, !0, t),
            this._updateContainerHeight(),
            r.subGrid && !r.subGrid.el)
          ) {
            let e,
              t = r.subGrid;
            "auto" === t.column &&
              ((t.column = r.w), (t.disableOneColumnMode = !0), (e = !0));
            let i = r.el.querySelector(".grid-stack-item-content");
            (r.subGrid = o.addGrid(i, r.subGrid)),
              e && (r.subGrid._autoColumn = !0);
          }
          return this._triggerAddEvent(), this._triggerChangeEvent(), i;
        }
        save(e = !0, t = !1) {
          let i = this.engine.save(e);
          if (
            (i.forEach((t) => {
              if (e && t.el && !t.subGrid) {
                let e = t.el.querySelector(".grid-stack-item-content");
                (t.content = e ? e.innerHTML : void 0),
                  t.content || delete t.content;
              } else
                e || delete t.content,
                  t.subGrid && (t.subGrid = t.subGrid.save(e, !0));
              delete t.el;
            }),
            t)
          ) {
            let e = a.Utils.cloneDeep(this.opts);
            return (
              e.marginBottom === e.marginTop &&
                e.marginRight === e.marginLeft &&
                e.marginTop === e.marginRight &&
                ((e.margin = e.marginTop),
                delete e.marginTop,
                delete e.marginRight,
                delete e.marginBottom,
                delete e.marginLeft),
              e.rtl === ("rtl" === this.el.style.direction) && (e.rtl = "auto"),
              this._isAutoCellHeight && (e.cellHeight = "auto"),
              this._autoColumn &&
                ((e.column = "auto"), delete e.disableOneColumnMode),
              a.Utils.removeInternalAndSame(e, r),
              (e.children = i),
              e
            );
          }
          return i;
        }
        load(e, t = !0) {
          let i = o.Utils.sort(
            [...e],
            -1,
            this._prevColumn || this.getColumn()
          );
          (this._insertNotAppend = !0),
            this._prevColumn &&
              this._prevColumn !== this.opts.column &&
              i.some((e) => e.x + e.w > this.opts.column) &&
              ((this._ignoreLayoutsNodeChange = !0),
              this.engine.cacheLayout(i, this._prevColumn, !0));
          let n = [];
          if ((this.batchUpdate(), t)) {
            [...this.engine.nodes].forEach((e) => {
              i.find((t) => e.id === t.id) ||
                ("function" == typeof t
                  ? t(this, e, !1)
                  : (n.push(e), this.removeWidget(e.el, !0, !1)));
            });
          }
          return (
            i.forEach((e) => {
              let i =
                e.id || 0 === e.id
                  ? this.engine.nodes.find((t) => t.id === e.id)
                  : void 0;
              if (i) {
                if ((this.update(i.el, e), e.subGrid && e.subGrid.children)) {
                  let t = i.el.querySelector(".grid-stack");
                  t &&
                    t.gridstack &&
                    (t.gridstack.load(e.subGrid.children),
                    (this._insertNotAppend = !0));
                }
              } else
                t &&
                  (e =
                    "function" == typeof t
                      ? t(this, e, !0).gridstackNode
                      : this.addWidget(e).gridstackNode);
            }),
            (this.engine.removedNodes = n),
            this.commit(),
            delete this._ignoreLayoutsNodeChange,
            delete this._insertNotAppend,
            this
          );
        }
        batchUpdate() {
          return this.engine.batchUpdate(), this;
        }
        getCellHeight(e = !1) {
          if (
            this.opts.cellHeight &&
            "auto" !== this.opts.cellHeight &&
            (!e ||
              !this.opts.cellHeightUnit ||
              "px" === this.opts.cellHeightUnit)
          )
            return this.opts.cellHeight;
          let t = this.el.querySelector("." + this.opts.itemClass);
          if (t) {
            let e = a.Utils.toNumber(t.getAttribute("gs-h"));
            return Math.round(t.offsetHeight / e);
          }
          let i = parseInt(this.el.getAttribute("gs-current-row"));
          return i
            ? Math.round(this.el.getBoundingClientRect().height / i)
            : this.opts.cellHeight;
        }
        cellHeight(e, t = !0) {
          if (
            (t &&
              void 0 !== e &&
              this._isAutoCellHeight !== ("auto" === e) &&
              ((this._isAutoCellHeight = "auto" === e),
              this._updateWindowResizeEvent()),
            ("initial" !== e && "auto" !== e) || (e = void 0),
            void 0 === e)
          ) {
            let t =
              -this.opts.marginRight -
              this.opts.marginLeft +
              this.opts.marginTop +
              this.opts.marginBottom;
            e = this.cellWidth() + t;
          }
          let i = a.Utils.parseHeight(e);
          return (
            (this.opts.cellHeightUnit === i.unit &&
              this.opts.cellHeight === i.h) ||
              ((this.opts.cellHeightUnit = i.unit),
              (this.opts.cellHeight = i.h),
              t && this._updateStyles(!0, this.getRow())),
            this
          );
        }
        cellWidth() {
          return this._widthOrContainer() / this.getColumn();
        }
        _widthOrContainer() {
          return (
            this.el.clientWidth ||
            this.el.parentElement.clientWidth ||
            window.innerWidth
          );
        }
        commit() {
          return (
            this.engine.commit(),
            this._triggerRemoveEvent(),
            this._triggerAddEvent(),
            this._triggerChangeEvent(),
            this
          );
        }
        compact() {
          return this.engine.compact(), this._triggerChangeEvent(), this;
        }
        column(e, t = "moveScale") {
          if (e < 1 || this.opts.column === e) return this;
          let i,
            n = this.getColumn();
          return (
            1 === e ? (this._prevColumn = n) : delete this._prevColumn,
            this.el.classList.remove("grid-stack-" + n),
            this.el.classList.add("grid-stack-" + e),
            (this.opts.column = this.engine.column = e),
            1 === e &&
              this.opts.oneColumnModeDomSort &&
              ((i = []),
              this.getGridItems().forEach((e) => {
                e.gridstackNode && i.push(e.gridstackNode);
              }),
              i.length || (i = void 0)),
            this.engine.updateNodeWidths(n, e, i, t),
            this._isAutoCellHeight && this.cellHeight(),
            (this._ignoreLayoutsNodeChange = !0),
            this._triggerChangeEvent(),
            delete this._ignoreLayoutsNodeChange,
            this
          );
        }
        getColumn() {
          return this.opts.column;
        }
        getGridItems() {
          return Array.from(this.el.children).filter(
            (e) =>
              e.matches("." + this.opts.itemClass) &&
              !e.matches("." + this.opts.placeholderClass)
          );
        }
        destroy(e = !0) {
          if (this.el)
            return (
              this._updateWindowResizeEvent(!0),
              this.setStatic(!0, !1),
              this.setAnimation(!1),
              e
                ? this.el.parentNode.removeChild(this.el)
                : (this.removeAll(e),
                  this.el.classList.remove(this.opts._styleSheetClass)),
              this._removeStylesheet(),
              this.el.removeAttribute("gs-current-row"),
              delete this.opts._isNested,
              delete this.opts,
              delete this._placeholder,
              delete this.engine,
              delete this.el.gridstack,
              delete this.el,
              this
            );
        }
        float(e) {
          return (this.engine.float = e), this._triggerChangeEvent(), this;
        }
        getFloat() {
          return this.engine.float;
        }
        getCellFromPixel(e, t = !1) {
          let i,
            n = this.el.getBoundingClientRect();
          i = t
            ? { top: n.top + document.documentElement.scrollTop, left: n.left }
            : { top: this.el.offsetTop, left: this.el.offsetLeft };
          let a = e.left - i.left,
            s = e.top - i.top,
            r = n.width / this.getColumn(),
            o = n.height / parseInt(this.el.getAttribute("gs-current-row"));
          return { x: Math.floor(a / r), y: Math.floor(s / o) };
        }
        getRow() {
          return Math.max(this.engine.getRow(), this.opts.minRow);
        }
        isAreaEmpty(e, t, i, n) {
          return this.engine.isAreaEmpty(e, t, i, n);
        }
        makeWidget(e) {
          let t = o.getElement(e);
          return (
            this._prepareElement(t, !0),
            this._updateContainerHeight(),
            this._triggerAddEvent(),
            this._triggerChangeEvent(),
            t
          );
        }
        on(e, t) {
          if (-1 !== e.indexOf(" ")) {
            return e.split(" ").forEach((e) => this.on(e, t)), this;
          }
          if (
            "change" === e ||
            "added" === e ||
            "removed" === e ||
            "enable" === e ||
            "disable" === e
          ) {
            let i = "enable" === e || "disable" === e;
            (this._gsEventHandler[e] = i ? (e) => t(e) : (e) => t(e, e.detail)),
              this.el.addEventListener(e, this._gsEventHandler[e]);
          } else
            "drag" === e ||
            "dragstart" === e ||
            "dragstop" === e ||
            "resizestart" === e ||
            "resize" === e ||
            "resizestop" === e ||
            "dropped" === e
              ? (this._gsEventHandler[e] = t)
              : console.log(
                  "GridStack.on(" +
                    e +
                    ') event not supported, but you can still use $(".grid-stack").on(...) while jquery-ui is still used internally.'
                );
          return this;
        }
        off(e) {
          if (-1 !== e.indexOf(" ")) {
            return e.split(" ").forEach((e) => this.off(e)), this;
          }
          return (
            ("change" !== e &&
              "added" !== e &&
              "removed" !== e &&
              "enable" !== e &&
              "disable" !== e) ||
              (this._gsEventHandler[e] &&
                this.el.removeEventListener(e, this._gsEventHandler[e])),
            delete this._gsEventHandler[e],
            this
          );
        }
        removeWidget(e, t = !0, i = !0) {
          return (
            o.getElements(e).forEach((e) => {
              if (e.parentElement !== this.el) return;
              let n = e.gridstackNode;
              n || (n = this.engine.nodes.find((t) => e === t.el)),
                n &&
                  (delete e.gridstackNode,
                  s.GridStackDDI.get().remove(e),
                  this.engine.removeNode(n, t, i),
                  t && e.parentElement && e.remove());
            }),
            i && (this._triggerRemoveEvent(), this._triggerChangeEvent()),
            this
          );
        }
        removeAll(e = !0) {
          return (
            this.engine.nodes.forEach((e) => {
              delete e.el.gridstackNode, s.GridStackDDI.get().remove(e.el);
            }),
            this.engine.removeAll(e),
            this._triggerRemoveEvent(),
            this
          );
        }
        setAnimation(e) {
          return (
            e
              ? this.el.classList.add("grid-stack-animate")
              : this.el.classList.remove("grid-stack-animate"),
            this
          );
        }
        setStatic(e, t = !0) {
          return (
            this.opts.staticGrid === e ||
              ((this.opts.staticGrid = e),
              this._setupRemoveDrop(),
              this._setupAcceptWidget(),
              this.engine.nodes.forEach((e) => this._prepareDragDropByNode(e)),
              t && this._setStaticClass()),
            this
          );
        }
        update(e, t) {
          if (arguments.length > 2) {
            console.warn(
              "gridstack.ts: `update(el, x, y, w, h)` is deprecated. Use `update(el, {x, w, content, ...})`. It will be removed soon"
            );
            let i = arguments,
              n = 1;
            return (
              (t = { x: i[n++], y: i[n++], w: i[n++], h: i[n++] }),
              this.update(e, t)
            );
          }
          return (
            o.getElements(e).forEach((e) => {
              if (!e || !e.gridstackNode) return;
              let i = e.gridstackNode,
                n = a.Utils.cloneDeep(t);
              delete n.autoPosition;
              let s,
                r = ["x", "y", "w", "h"];
              if (
                (r.some((e) => void 0 !== n[e] && n[e] !== i[e]) &&
                  ((s = {}),
                  r.forEach((e) => {
                    (s[e] = void 0 !== n[e] ? n[e] : i[e]), delete n[e];
                  })),
                !s && (n.minW || n.minH || n.maxW || n.maxH) && (s = {}),
                n.content)
              ) {
                let t = e.querySelector(".grid-stack-item-content");
                t && t.innerHTML !== n.content && (t.innerHTML = n.content),
                  delete n.content;
              }
              let o = !1,
                M = !1;
              for (const t in n)
                "_" !== t[0] &&
                  i[t] !== n[t] &&
                  ((i[t] = n[t]),
                  (o = !0),
                  (M =
                    M ||
                    (!this.opts.staticGrid &&
                      ("noResize" === t || "noMove" === t || "locked" === t))));
              s &&
                (this.engine.cleanNodes().beginUpdate(i).moveNode(i, s),
                this._updateContainerHeight(),
                this._triggerChangeEvent(),
                this.engine.endUpdate()),
                o && this._writeAttr(e, i),
                M && this._prepareDragDropByNode(i);
            }),
            this
          );
        }
        margin(e) {
          if (!("string" == typeof e && e.split(" ").length > 1)) {
            let t = a.Utils.parseHeight(e);
            if (this.opts.marginUnit === t.unit && this.opts.margin === t.h)
              return;
          }
          return (
            (this.opts.margin = e),
            (this.opts.marginTop =
              this.opts.marginBottom =
              this.opts.marginLeft =
              this.opts.marginRight =
                void 0),
            this.initMargin(),
            this._updateStyles(!0),
            this
          );
        }
        getMargin() {
          return this.opts.margin;
        }
        willItFit(e) {
          if (arguments.length > 1) {
            console.warn(
              "gridstack.ts: `willItFit(x,y,w,h,autoPosition)` is deprecated. Use `willItFit({x, y,...})`. It will be removed soon"
            );
            let e = arguments,
              t = 0,
              i = {
                x: e[t++],
                y: e[t++],
                w: e[t++],
                h: e[t++],
                autoPosition: e[t++],
              };
            return this.willItFit(i);
          }
          return this.engine.willItFit(e);
        }
        _triggerChangeEvent() {
          if (this.engine.batchMode) return this;
          let e = this.engine.getDirtyNodes(!0);
          return (
            e &&
              e.length &&
              (this._ignoreLayoutsNodeChange ||
                this.engine.layoutsNodesChange(e),
              this._triggerEvent("change", e)),
            this.engine.saveInitial(),
            this
          );
        }
        _triggerAddEvent() {
          return (
            this.engine.batchMode ||
              (this.engine.addedNodes &&
                this.engine.addedNodes.length > 0 &&
                (this._ignoreLayoutsNodeChange ||
                  this.engine.layoutsNodesChange(this.engine.addedNodes),
                this.engine.addedNodes.forEach((e) => {
                  delete e._dirty;
                }),
                this._triggerEvent("added", this.engine.addedNodes),
                (this.engine.addedNodes = []))),
            this
          );
        }
        _triggerRemoveEvent() {
          return (
            this.engine.batchMode ||
              (this.engine.removedNodes &&
                this.engine.removedNodes.length > 0 &&
                (this._triggerEvent("removed", this.engine.removedNodes),
                (this.engine.removedNodes = []))),
            this
          );
        }
        _triggerEvent(e, t) {
          let i = t
            ? new CustomEvent(e, { bubbles: !1, detail: t })
            : new Event(e);
          return this.el.dispatchEvent(i), this;
        }
        _removeStylesheet() {
          return (
            this._styles &&
              (a.Utils.removeStylesheet(this._styles._id), delete this._styles),
            this
          );
        }
        _updateStyles(e = !1, t) {
          if (
            (e && this._removeStylesheet(),
            this._updateContainerHeight(),
            0 === this.opts.cellHeight)
          )
            return this;
          let i = this.opts.cellHeight,
            n = this.opts.cellHeightUnit,
            s = `.${this.opts._styleSheetClass} > .${this.opts.itemClass}`;
          if (!this._styles) {
            let e = "gridstack-style-" + (1e5 * Math.random()).toFixed(),
              t = this.opts.styleInHead ? void 0 : this.el.parentNode;
            if (
              ((this._styles = a.Utils.createStylesheet(e, t)), !this._styles)
            )
              return this;
            (this._styles._id = e),
              (this._styles._max = 0),
              a.Utils.addCSSRule(this._styles, s, `min-height: ${i}${n}`);
            let r = this.opts.marginTop + this.opts.marginUnit,
              o = this.opts.marginBottom + this.opts.marginUnit,
              M = this.opts.marginRight + this.opts.marginUnit,
              l = this.opts.marginLeft + this.opts.marginUnit,
              u = `${s} > .grid-stack-item-content`,
              c = `.${this.opts._styleSheetClass} > .grid-stack-placeholder > .placeholder-content`;
            a.Utils.addCSSRule(
              this._styles,
              u,
              `top: ${r}; right: ${M}; bottom: ${o}; left: ${l};`
            ),
              a.Utils.addCSSRule(
                this._styles,
                c,
                `top: ${r}; right: ${M}; bottom: ${o}; left: ${l};`
              ),
              a.Utils.addCSSRule(
                this._styles,
                `${s} > .ui-resizable-ne`,
                `right: ${M}`
              ),
              a.Utils.addCSSRule(
                this._styles,
                `${s} > .ui-resizable-e`,
                `right: ${M}`
              ),
              a.Utils.addCSSRule(
                this._styles,
                `${s} > .ui-resizable-se`,
                `right: ${M}; bottom: ${o}`
              ),
              a.Utils.addCSSRule(
                this._styles,
                `${s} > .ui-resizable-nw`,
                `left: ${l}`
              ),
              a.Utils.addCSSRule(
                this._styles,
                `${s} > .ui-resizable-w`,
                `left: ${l}`
              ),
              a.Utils.addCSSRule(
                this._styles,
                `${s} > .ui-resizable-sw`,
                `left: ${l}; bottom: ${o}`
              );
          }
          if ((t = t || this._styles._max) > this._styles._max) {
            let e = (e) => i * e + n;
            for (let i = this._styles._max + 1; i <= t; i++) {
              let t = e(i);
              a.Utils.addCSSRule(
                this._styles,
                `${s}[gs-y="${i - 1}"]`,
                `top: ${e(i - 1)}`
              ),
                a.Utils.addCSSRule(
                  this._styles,
                  `${s}[gs-h="${i}"]`,
                  `height: ${t}`
                ),
                a.Utils.addCSSRule(
                  this._styles,
                  `${s}[gs-min-h="${i}"]`,
                  `min-height: ${t}`
                ),
                a.Utils.addCSSRule(
                  this._styles,
                  `${s}[gs-max-h="${i}"]`,
                  `max-height: ${t}`
                );
            }
            this._styles._max = t;
          }
          return this;
        }
        _updateContainerHeight() {
          if (!this.engine || this.engine.batchMode) return this;
          let e = this.getRow() + this._extraDragRow;
          if ((this.el.setAttribute("gs-current-row", String(e)), 0 === e))
            return this.el.style.removeProperty("height"), this;
          let t = this.opts.cellHeight,
            i = this.opts.cellHeightUnit;
          return t ? ((this.el.style.height = e * t + i), this) : this;
        }
        _prepareElement(e, t = !1, i) {
          i || (e.classList.add(this.opts.itemClass), (i = this._readAttr(e))),
            (e.gridstackNode = i),
            (i.el = e),
            (i.grid = this);
          let n = Object.assign({}, i);
          return (
            (i = this.engine.addNode(i, t)),
            a.Utils.same(i, n) || this._writeAttr(e, i),
            this._prepareDragDropByNode(i),
            this
          );
        }
        _writePosAttr(e, t) {
          return (
            void 0 !== t.x &&
              null !== t.x &&
              e.setAttribute("gs-x", String(t.x)),
            void 0 !== t.y &&
              null !== t.y &&
              e.setAttribute("gs-y", String(t.y)),
            t.w && e.setAttribute("gs-w", String(t.w)),
            t.h && e.setAttribute("gs-h", String(t.h)),
            this
          );
        }
        _writeAttr(e, t) {
          if (!t) return this;
          this._writePosAttr(e, t);
          let i = {
            autoPosition: "gs-auto-position",
            minW: "gs-min-w",
            minH: "gs-min-h",
            maxW: "gs-max-w",
            maxH: "gs-max-h",
            noResize: "gs-no-resize",
            noMove: "gs-no-move",
            locked: "gs-locked",
            id: "gs-id",
            resizeHandles: "gs-resize-handles",
          };
          for (const n in i)
            t[n] ? e.setAttribute(i[n], String(t[n])) : e.removeAttribute(i[n]);
          return this;
        }
        _readAttr(e) {
          let t = {};
          (t.x = a.Utils.toNumber(e.getAttribute("gs-x"))),
            (t.y = a.Utils.toNumber(e.getAttribute("gs-y"))),
            (t.w = a.Utils.toNumber(e.getAttribute("gs-w"))),
            (t.h = a.Utils.toNumber(e.getAttribute("gs-h"))),
            (t.maxW = a.Utils.toNumber(e.getAttribute("gs-max-w"))),
            (t.minW = a.Utils.toNumber(e.getAttribute("gs-min-w"))),
            (t.maxH = a.Utils.toNumber(e.getAttribute("gs-max-h"))),
            (t.minH = a.Utils.toNumber(e.getAttribute("gs-min-h"))),
            (t.autoPosition = a.Utils.toBool(
              e.getAttribute("gs-auto-position")
            )),
            (t.noResize = a.Utils.toBool(e.getAttribute("gs-no-resize"))),
            (t.noMove = a.Utils.toBool(e.getAttribute("gs-no-move"))),
            (t.locked = a.Utils.toBool(e.getAttribute("gs-locked"))),
            (t.resizeHandles = e.getAttribute("gs-resize-handles")),
            (t.id = e.getAttribute("gs-id"));
          for (const i in t) {
            if (!t.hasOwnProperty(i)) return;
            t[i] || 0 === t[i] || delete t[i];
          }
          return t;
        }
        _setStaticClass() {
          let e = ["grid-stack-static"];
          return (
            this.opts.staticGrid
              ? (this.el.classList.add(...e),
                this.el.setAttribute("gs-static", "true"))
              : (this.el.classList.remove(...e),
                this.el.removeAttribute("gs-static")),
            this
          );
        }
        onParentResize() {
          if (!this.el || !this.el.clientWidth) return;
          let e = !1;
          if (this._autoColumn && this.opts._isNested)
            this.opts.column !== this.opts._isNested.w &&
              ((e = !0), this.column(this.opts._isNested.w, "none"));
          else {
            let t =
              !this.opts.disableOneColumnMode &&
              this.el.clientWidth <= this.opts.minWidth;
            (1 === this.opts.column) !== t &&
              ((e = !0),
              this.opts.animate && this.setAnimation(!1),
              this.column(t ? 1 : this._prevColumn),
              this.opts.animate && this.setAnimation(!0));
          }
          return (
            this._isAutoCellHeight &&
              (!e && this.opts.cellHeightThrottle
                ? (this._cellHeightThrottle ||
                    (this._cellHeightThrottle = a.Utils.throttle(
                      () => this.cellHeight(),
                      this.opts.cellHeightThrottle
                    )),
                  this._cellHeightThrottle())
                : this.cellHeight()),
            this.engine.nodes.forEach((e) => {
              e.subGrid && e.subGrid.onParentResize();
            }),
            this
          );
        }
        _updateWindowResizeEvent(e = !1) {
          const t =
            (this._isAutoCellHeight || !this.opts.disableOneColumnMode) &&
            !this.opts._isNested;
          return (
            e || !t || this._windowResizeBind
              ? (!e && t) ||
                !this._windowResizeBind ||
                (window.removeEventListener("resize", this._windowResizeBind),
                delete this._windowResizeBind)
              : ((this._windowResizeBind = this.onParentResize.bind(this)),
                window.addEventListener("resize", this._windowResizeBind)),
            this
          );
        }
        static getElement(e = ".grid-stack-item") {
          return a.Utils.getElement(e);
        }
        static getElements(e = ".grid-stack-item") {
          return a.Utils.getElements(e);
        }
        static getGridElement(e) {
          return o.getElement(e);
        }
        static getGridElements(e) {
          return a.Utils.getElements(e);
        }
        initMargin() {
          let e,
            t = 0,
            i = [];
          return (
            "string" == typeof this.opts.margin &&
              (i = this.opts.margin.split(" ")),
            2 === i.length
              ? ((this.opts.marginTop = this.opts.marginBottom = i[0]),
                (this.opts.marginLeft = this.opts.marginRight = i[1]))
              : 4 === i.length
              ? ((this.opts.marginTop = i[0]),
                (this.opts.marginRight = i[1]),
                (this.opts.marginBottom = i[2]),
                (this.opts.marginLeft = i[3]))
              : ((e = a.Utils.parseHeight(this.opts.margin)),
                (this.opts.marginUnit = e.unit),
                (t = this.opts.margin = e.h)),
            void 0 === this.opts.marginTop
              ? (this.opts.marginTop = t)
              : ((e = a.Utils.parseHeight(this.opts.marginTop)),
                (this.opts.marginTop = e.h),
                delete this.opts.margin),
            void 0 === this.opts.marginBottom
              ? (this.opts.marginBottom = t)
              : ((e = a.Utils.parseHeight(this.opts.marginBottom)),
                (this.opts.marginBottom = e.h),
                delete this.opts.margin),
            void 0 === this.opts.marginRight
              ? (this.opts.marginRight = t)
              : ((e = a.Utils.parseHeight(this.opts.marginRight)),
                (this.opts.marginRight = e.h),
                delete this.opts.margin),
            void 0 === this.opts.marginLeft
              ? (this.opts.marginLeft = t)
              : ((e = a.Utils.parseHeight(this.opts.marginLeft)),
                (this.opts.marginLeft = e.h),
                delete this.opts.margin),
            (this.opts.marginUnit = e.unit),
            this.opts.marginTop === this.opts.marginBottom &&
              this.opts.marginLeft === this.opts.marginRight &&
              this.opts.marginTop === this.opts.marginRight &&
              (this.opts.margin = this.opts.marginTop),
            this
          );
        }
        static setupDragIn(e, t) {}
        movable(e, t) {
          return this;
        }
        resizable(e, t) {
          return this;
        }
        disable() {
          return this;
        }
        enable() {
          return this;
        }
        enableMove(e) {
          return this;
        }
        enableResize(e) {
          return this;
        }
        _setupAcceptWidget() {
          return this;
        }
        _setupRemoveDrop() {
          return this;
        }
        _prepareDragDropByNode(e) {
          return this;
        }
        _onStartMoving(e, t, i, n, a, s) {}
        _dragOrResize(e, t, i, n, a, s) {}
        _leave(e, t) {}
      }
      (e.GridStack = o), (o.Utils = a.Utils), (o.Engine = n.GridStackEngine);
    })(Nu);
  var mu = (e, t) => {
    const i = e.__vccOpts || e;
    for (const [n, a] of t) i[n] = a;
    return i;
  };
  const xu = mi({
      name: "Checkbox",
      props: {
        modelValue: { type: Boolean, default: !1 },
        label: { type: String, default: "" },
        toggleSwitch: { type: Boolean, default: !1 },
        readonly: { type: Boolean, default: !1 },
      },
      emits: ["update:modelValue", "change"],
      setup(e, t) {
        const i = ht(null),
          n = fa({
            get: () => e.modelValue,
            set(n) {
              e.readonly,
                t.emit("update:modelValue", n),
                null !== i.value && i.value.focus();
            },
          });
        return {
          inputValue: n,
          inputRef: i,
          setValue: function () {
            e.readonly || (n.value = !n.value);
          },
          changeEvent: function (i) {
            if (e.readonly) return;
            const n = i.target.checked;
            t.emit("change", n);
          },
        };
      },
    }),
    fu = ["readonly"];
  var ku = mu(xu, [
    [
      "render",
      function (e, t, i, n, a, s) {
        return (
          Vn(),
          Jn(
            "div",
            { class: Z(["checkbox-container", { readonly: e.readonly }]) },
            [
              gi(
                ia(
                  "input",
                  {
                    class: Z(
                      e.toggleSwitch
                        ? "passage-toggle-switch"
                        : "passage-checkbox"
                    ),
                    type: "checkbox",
                    "onUpdate:modelValue":
                      t[0] || (t[0] = (t) => (e.inputValue = t)),
                    ref: "inputRef",
                    onChange:
                      t[1] ||
                      (t[1] = hs(
                        (...t) => e.changeEvent && e.changeEvent(...t),
                        ["prevent"]
                      )),
                    readonly: e.readonly,
                  },
                  null,
                  42,
                  fu
                ),
                [[cs, e.inputValue]]
              ),
              ia(
                "div",
                {
                  class: Z([
                    "checkbox-label",
                    { "toggle-switch-label": e.toggleSwitch },
                  ]),
                  onClick:
                    t[2] ||
                    (t[2] = hs(
                      (...t) => e.setValue && e.setValue(...t),
                      ["prevent"]
                    )),
                },
                X(e.label),
                3
              ),
            ],
            2
          )
        );
      },
    ],
  ]);
  const Lu = mi({
      name: "Validated String",
      props: {
        modelValue: { type: String },
        placeholder: { type: String },
        label: { type: String },
        readonly: { type: Boolean, default: !1 },
        required: { type: Boolean, default: !1 },
      },
      setup(e, t) {
        const { t: i } = fl(),
          n = fa({
            get: () => e.modelValue,
            set(e) {
              t.emit("update:modelValue", e);
            },
          }),
          a = ht("");
        return {
          reactiveValue: n,
          validate: function () {
            var t, n;
            if (((a.value = ""), e.required && void 0 === e.modelValue))
              return (a.value = i("required")), !1;
            const s =
              (null != (n = null == (t = e.modelValue) ? void 0 : t.length)
                ? n
                : 0) < 64;
            return s || (a.value = i("64-letters-max")), s;
          },
          errorMessage: a,
        };
      },
    }),
    Ou = { class: "validated-field" },
    wu = { class: "label" },
    vu = {
      key: 0,
      class: "input",
      part: "input",
      style: { width: "100%" },
      value: "N/A",
      readonly: "",
    },
    Eu = ["placeholder", "readonly"],
    Su = { class: "error-message" };
  var bu = mu(Lu, [
      [
        "render",
        function (e, t, i, n, a, s) {
          return (
            Vn(),
            Jn("div", Ou, [
              ia("div", wu, X(e.label), 1),
              e.readonly && !e.modelValue
                ? (Vn(), Jn("input", vu))
                : gi(
                    (Vn(),
                    Jn(
                      "input",
                      {
                        key: 1,
                        class: Z(["input", { "is-danger": e.errorMessage }]),
                        part: "input",
                        style: { width: "100%" },
                        placeholder: e.placeholder,
                        "onUpdate:modelValue":
                          t[0] || (t[0] = (t) => (e.reactiveValue = t)),
                        onInput: t[1] || (t[1] = (t) => (e.errorMessage = "")),
                        readonly: e.readonly,
                      },
                      null,
                      42,
                      Eu
                    )),
                    [[us, e.reactiveValue]]
                  ),
              ia("div", Su, X(e.errorMessage), 1),
            ])
          );
        },
      ],
    ]),
    Cu = { exports: {} };
  !(function (e, t) {
    e.exports = (function () {
      var e = 1e3,
        t = 6e4,
        i = 36e5,
        n = "millisecond",
        a = "second",
        s = "minute",
        r = "hour",
        o = "day",
        M = "week",
        l = "month",
        u = "quarter",
        c = "year",
        g = "date",
        d = "Invalid Date",
        N =
          /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
        D =
          /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        I = {
          name: "en",
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          ordinal: function (e) {
            var t = ["th", "st", "nd", "rd"],
              i = e % 100;
            return "[" + e + (t[(i - 20) % 10] || t[i] || t[0]) + "]";
          },
        },
        y = function (e, t, i) {
          var n = String(e);
          return !n || n.length >= t
            ? e
            : "" + Array(t + 1 - n.length).join(i) + e;
        },
        j = {
          s: y,
          z: function (e) {
            var t = -e.utcOffset(),
              i = Math.abs(t),
              n = Math.floor(i / 60),
              a = i % 60;
            return (t <= 0 ? "+" : "-") + y(n, 2, "0") + ":" + y(a, 2, "0");
          },
          m: function e(t, i) {
            if (t.date() < i.date()) return -e(i, t);
            var n = 12 * (i.year() - t.year()) + (i.month() - t.month()),
              a = t.clone().add(n, l),
              s = i - a < 0,
              r = t.clone().add(n + (s ? -1 : 1), l);
            return +(-(n + (i - a) / (s ? a - r : r - a)) || 0);
          },
          a: function (e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
          },
          p: function (e) {
            return (
              { M: l, y: c, w: M, d: o, D: g, h: r, m: s, s: a, ms: n, Q: u }[
                e
              ] ||
              String(e || "")
                .toLowerCase()
                .replace(/s$/, "")
            );
          },
          u: function (e) {
            return void 0 === e;
          },
        },
        p = "en",
        z = {};
      z[p] = I;
      var T = function (e) {
          return e instanceof x;
        },
        h = function e(t, i, n) {
          var a;
          if (!t) return p;
          if ("string" == typeof t) {
            var s = t.toLowerCase();
            z[s] && (a = s), i && ((z[s] = i), (a = s));
            var r = t.split("-");
            if (!a && r.length > 1) return e(r[0]);
          } else {
            var o = t.name;
            (z[o] = t), (a = o);
          }
          return !n && a && (p = a), a || (!n && p);
        },
        A = function (e, t) {
          if (T(e)) return e.clone();
          var i = "object" == typeof t ? t : {};
          return (i.date = e), (i.args = arguments), new x(i);
        },
        m = j;
      (m.l = h),
        (m.i = T),
        (m.w = function (e, t) {
          return A(e, { locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset });
        });
      var x = (function () {
          function I(e) {
            (this.$L = h(e.locale, null, !0)), this.parse(e);
          }
          var y = I.prototype;
          return (
            (y.parse = function (e) {
              (this.$d = (function (e) {
                var t = e.date,
                  i = e.utc;
                if (null === t) return new Date(NaN);
                if (m.u(t)) return new Date();
                if (t instanceof Date) return new Date(t);
                if ("string" == typeof t && !/Z$/i.test(t)) {
                  var n = t.match(N);
                  if (n) {
                    var a = n[2] - 1 || 0,
                      s = (n[7] || "0").substring(0, 3);
                    return i
                      ? new Date(
                          Date.UTC(
                            n[1],
                            a,
                            n[3] || 1,
                            n[4] || 0,
                            n[5] || 0,
                            n[6] || 0,
                            s
                          )
                        )
                      : new Date(
                          n[1],
                          a,
                          n[3] || 1,
                          n[4] || 0,
                          n[5] || 0,
                          n[6] || 0,
                          s
                        );
                  }
                }
                return new Date(t);
              })(e)),
                (this.$x = e.x || {}),
                this.init();
            }),
            (y.init = function () {
              var e = this.$d;
              (this.$y = e.getFullYear()),
                (this.$M = e.getMonth()),
                (this.$D = e.getDate()),
                (this.$W = e.getDay()),
                (this.$H = e.getHours()),
                (this.$m = e.getMinutes()),
                (this.$s = e.getSeconds()),
                (this.$ms = e.getMilliseconds());
            }),
            (y.$utils = function () {
              return m;
            }),
            (y.isValid = function () {
              return !(this.$d.toString() === d);
            }),
            (y.isSame = function (e, t) {
              var i = A(e);
              return this.startOf(t) <= i && i <= this.endOf(t);
            }),
            (y.isAfter = function (e, t) {
              return A(e) < this.startOf(t);
            }),
            (y.isBefore = function (e, t) {
              return this.endOf(t) < A(e);
            }),
            (y.$g = function (e, t, i) {
              return m.u(e) ? this[t] : this.set(i, e);
            }),
            (y.unix = function () {
              return Math.floor(this.valueOf() / 1e3);
            }),
            (y.valueOf = function () {
              return this.$d.getTime();
            }),
            (y.startOf = function (e, t) {
              var i = this,
                n = !!m.u(t) || t,
                u = m.p(e),
                d = function (e, t) {
                  var a = m.w(
                    i.$u ? Date.UTC(i.$y, t, e) : new Date(i.$y, t, e),
                    i
                  );
                  return n ? a : a.endOf(o);
                },
                N = function (e, t) {
                  return m.w(
                    i
                      .toDate()
                      [e].apply(
                        i.toDate("s"),
                        (n ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)
                      ),
                    i
                  );
                },
                D = this.$W,
                I = this.$M,
                y = this.$D,
                j = "set" + (this.$u ? "UTC" : "");
              switch (u) {
                case c:
                  return n ? d(1, 0) : d(31, 11);
                case l:
                  return n ? d(1, I) : d(0, I + 1);
                case M:
                  var p = this.$locale().weekStart || 0,
                    z = (D < p ? D + 7 : D) - p;
                  return d(n ? y - z : y + (6 - z), I);
                case o:
                case g:
                  return N(j + "Hours", 0);
                case r:
                  return N(j + "Minutes", 1);
                case s:
                  return N(j + "Seconds", 2);
                case a:
                  return N(j + "Milliseconds", 3);
                default:
                  return this.clone();
              }
            }),
            (y.endOf = function (e) {
              return this.startOf(e, !1);
            }),
            (y.$set = function (e, t) {
              var i,
                M = m.p(e),
                u = "set" + (this.$u ? "UTC" : ""),
                d = ((i = {}),
                (i[o] = u + "Date"),
                (i[g] = u + "Date"),
                (i[l] = u + "Month"),
                (i[c] = u + "FullYear"),
                (i[r] = u + "Hours"),
                (i[s] = u + "Minutes"),
                (i[a] = u + "Seconds"),
                (i[n] = u + "Milliseconds"),
                i)[M],
                N = M === o ? this.$D + (t - this.$W) : t;
              if (M === l || M === c) {
                var D = this.clone().set(g, 1);
                D.$d[d](N),
                  D.init(),
                  (this.$d = D.set(g, Math.min(this.$D, D.daysInMonth())).$d);
              } else d && this.$d[d](N);
              return this.init(), this;
            }),
            (y.set = function (e, t) {
              return this.clone().$set(e, t);
            }),
            (y.get = function (e) {
              return this[m.p(e)]();
            }),
            (y.add = function (n, u) {
              var g,
                d = this;
              n = Number(n);
              var N = m.p(u),
                D = function (e) {
                  var t = A(d);
                  return m.w(t.date(t.date() + Math.round(e * n)), d);
                };
              if (N === l) return this.set(l, this.$M + n);
              if (N === c) return this.set(c, this.$y + n);
              if (N === o) return D(1);
              if (N === M) return D(7);
              var I = ((g = {}), (g[s] = t), (g[r] = i), (g[a] = e), g)[N] || 1,
                y = this.$d.getTime() + n * I;
              return m.w(y, this);
            }),
            (y.subtract = function (e, t) {
              return this.add(-1 * e, t);
            }),
            (y.format = function (e) {
              var t = this,
                i = this.$locale();
              if (!this.isValid()) return i.invalidDate || d;
              var n = e || "YYYY-MM-DDTHH:mm:ssZ",
                a = m.z(this),
                s = this.$H,
                r = this.$m,
                o = this.$M,
                M = i.weekdays,
                l = i.months,
                u = function (e, i, a, s) {
                  return (e && (e[i] || e(t, n))) || a[i].slice(0, s);
                },
                c = function (e) {
                  return m.s(s % 12 || 12, e, "0");
                },
                g =
                  i.meridiem ||
                  function (e, t, i) {
                    var n = e < 12 ? "AM" : "PM";
                    return i ? n.toLowerCase() : n;
                  },
                N = {
                  YY: String(this.$y).slice(-2),
                  YYYY: m.s(this.$y, 4, "0"),
                  M: o + 1,
                  MM: m.s(o + 1, 2, "0"),
                  MMM: u(i.monthsShort, o, l, 3),
                  MMMM: u(l, o),
                  D: this.$D,
                  DD: m.s(this.$D, 2, "0"),
                  d: String(this.$W),
                  dd: u(i.weekdaysMin, this.$W, M, 2),
                  ddd: u(i.weekdaysShort, this.$W, M, 3),
                  dddd: M[this.$W],
                  H: String(s),
                  HH: m.s(s, 2, "0"),
                  h: c(1),
                  hh: c(2),
                  a: g(s, r, !0),
                  A: g(s, r, !1),
                  m: String(r),
                  mm: m.s(r, 2, "0"),
                  s: String(this.$s),
                  ss: m.s(this.$s, 2, "0"),
                  SSS: m.s(this.$ms, 3, "0"),
                  Z: a,
                };
              return n.replace(D, function (e, t) {
                return t || N[e] || a.replace(":", "");
              });
            }),
            (y.utcOffset = function () {
              return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
            }),
            (y.diff = function (n, g, d) {
              var N,
                D = m.p(g),
                I = A(n),
                y = (I.utcOffset() - this.utcOffset()) * t,
                j = this - I,
                p = m.m(this, I);
              return (
                (p =
                  ((N = {}),
                  (N[c] = p / 12),
                  (N[l] = p),
                  (N[u] = p / 3),
                  (N[M] = (j - y) / 6048e5),
                  (N[o] = (j - y) / 864e5),
                  (N[r] = j / i),
                  (N[s] = j / t),
                  (N[a] = j / e),
                  N)[D] || j),
                d ? p : m.a(p)
              );
            }),
            (y.daysInMonth = function () {
              return this.endOf(l).$D;
            }),
            (y.$locale = function () {
              return z[this.$L];
            }),
            (y.locale = function (e, t) {
              if (!e) return this.$L;
              var i = this.clone(),
                n = h(e, t, !0);
              return n && (i.$L = n), i;
            }),
            (y.clone = function () {
              return m.w(this.$d, this);
            }),
            (y.toDate = function () {
              return new Date(this.valueOf());
            }),
            (y.toJSON = function () {
              return this.isValid() ? this.toISOString() : null;
            }),
            (y.toISOString = function () {
              return this.$d.toISOString();
            }),
            (y.toString = function () {
              return this.$d.toUTCString();
            }),
            I
          );
        })(),
        f = x.prototype;
      return (
        (A.prototype = f),
        [
          ["$ms", n],
          ["$s", a],
          ["$m", s],
          ["$H", r],
          ["$W", o],
          ["$M", l],
          ["$y", c],
          ["$D", g],
        ].forEach(function (e) {
          f[e[1]] = function (t) {
            return this.$g(t, e[0], e[1]);
          };
        }),
        (A.extend = function (e, t) {
          return e.$i || (e(t, x, A), (e.$i = !0)), A;
        }),
        (A.locale = h),
        (A.isDayjs = T),
        (A.unix = function (e) {
          return A(1e3 * e);
        }),
        (A.en = z[p]),
        (A.Ls = z),
        (A.p = {}),
        A
      );
    })();
  })(Cu);
  var Uu = Cu.exports;
  const Qu = mi({
      name: "Validated String",
      props: {
        modelValue: { type: String },
        placeholder: { type: String },
        label: { type: String },
        readonly: { type: Boolean, default: !1 },
        required: { type: Boolean, default: !1 },
      },
      setup(e, t) {
        const { t: i } = fl(),
          n = fa({
            get: () => e.modelValue,
            set(e) {
              t.emit("update:modelValue", e);
            },
          }),
          a = ht("");
        return {
          reactiveValue: n,
          validate: function () {
            var t;
            if (((a.value = ""), e.required && void 0 === e.modelValue))
              return (a.value = i("required")), !1;
            const n =
              !e.modelValue ||
              Uu(null != (t = e.modelValue) ? t : "", "YYYY-DD-MM").isValid();
            return n || (a.value = i("invalid-date")), n;
          },
          errorMessage: a,
        };
      },
    }),
    _u = { class: "validated-field" },
    Yu = { class: "label" },
    Pu = {
      key: 0,
      class: "input",
      part: "input",
      style: { width: "100%" },
      value: "N/A",
      readonly: "",
    },
    Ru = ["placeholder", "readonly"],
    Bu = { class: "error-message" };
  var Wu = mu(Qu, [
    [
      "render",
      function (e, t, i, n, a, s) {
        return (
          Vn(),
          Jn("div", _u, [
            ia("div", Yu, X(e.label), 1),
            e.readonly && !e.modelValue
              ? (Vn(), Jn("input", Pu))
              : gi(
                  (Vn(),
                  Jn(
                    "input",
                    {
                      key: 1,
                      class: Z(["input", { "is-danger": e.errorMessage }]),
                      part: "input",
                      style: { width: "100%" },
                      placeholder: e.placeholder,
                      "onUpdate:modelValue":
                        t[0] || (t[0] = (t) => (e.reactiveValue = t)),
                      onInput: t[1] || (t[1] = (t) => (e.errorMessage = "")),
                      readonly: e.readonly,
                    },
                    null,
                    42,
                    Ru
                  )),
                  [[us, e.reactiveValue]]
                ),
            ia("div", Bu, X(e.errorMessage), 1),
          ])
        );
      },
    ],
  ]);
  const Fu = mi({
      name: "Validated String",
      components: { Checkbox: ku },
      props: {
        modelValue: { type: Boolean },
        placeholder: { type: String },
        label: { type: String },
        readonly: { type: Boolean, default: !1 },
        required: { type: Boolean, default: !1 },
      },
      setup: (e, t) => ({
        reactiveValue: fa({
          get: () => e.modelValue,
          set(e) {
            t.emit("update:modelValue", e);
          },
        }),
        validate: function () {
          return !0;
        },
      }),
    }),
    Vu = { class: "validated-field" },
    Hu = { class: "label" },
    Zu = ia("div", { class: "error-message" }, null, -1);
  var Gu = mu(Fu, [
    [
      "render",
      function (e, t, i, n, a, s) {
        const r = Fi("checkbox");
        return (
          Vn(),
          Jn("div", Vu, [
            ia("div", Hu, X(e.label), 1),
            na(
              r,
              {
                modelValue: e.reactiveValue,
                "onUpdate:modelValue":
                  t[0] || (t[0] = (t) => (e.reactiveValue = t)),
                readonly: e.readonly,
              },
              null,
              8,
              ["modelValue", "readonly"]
            ),
            Zu,
          ])
        );
      },
    ],
  ]);
  function Ju(e) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      e
    );
  }
  const $u = mi({
      name: "Validated String",
      props: {
        modelValue: { type: String },
        placeholder: { type: String },
        label: { type: String },
        readonly: { type: Boolean, default: !1 },
        required: { type: Boolean, default: !1 },
      },
      setup(e, t) {
        const { t: i } = fl(),
          n = fa({
            get: () => e.modelValue,
            set(e) {
              t.emit("update:modelValue", e);
            },
          }),
          a = ht("");
        return {
          reactiveValue: n,
          validate: function () {
            var t, n, s;
            if (((a.value = ""), e.required && void 0 === e.modelValue))
              return (a.value = i("required")), !1;
            if (
              !(
                (null != (n = null == (t = e.modelValue) ? void 0 : t.length)
                  ? n
                  : 0) < 64
              )
            )
              return (a.value = i("64-letters-max")), !1;
            const r = !e.modelValue || Ju(null != (s = e.modelValue) ? s : "");
            return r || (a.value = i("invalid-email")), r;
          },
          errorMessage: a,
        };
      },
    }),
    Ku = { class: "validated-field" },
    qu = { class: "label" },
    Xu = {
      key: 0,
      class: "input",
      part: "input",
      style: { width: "100%" },
      value: "N/A",
      readonly: "",
    },
    ec = ["placeholder", "readonly"],
    tc = { class: "error-message" };
  var ic = mu($u, [
    [
      "render",
      function (e, t, i, n, a, s) {
        return (
          Vn(),
          Jn("div", Ku, [
            ia("div", qu, X(e.label), 1),
            e.readonly && !e.modelValue
              ? (Vn(), Jn("input", Xu))
              : gi(
                  (Vn(),
                  Jn(
                    "input",
                    {
                      key: 1,
                      class: Z(["input", { "is-danger": e.errorMessage }]),
                      part: "input",
                      style: { width: "100%" },
                      placeholder: e.placeholder,
                      "onUpdate:modelValue":
                        t[0] || (t[0] = (t) => (e.reactiveValue = t)),
                      onInput: t[1] || (t[1] = (t) => (e.errorMessage = "")),
                      readonly: e.readonly,
                      autocomplete: "email",
                      inputmode: "email",
                    },
                    null,
                    42,
                    ec
                  )),
                  [[us, e.reactiveValue]]
                ),
            ia("div", tc, X(e.errorMessage), 1),
          ])
        );
      },
    ],
  ]);
  const nc = mi({
      name: "Validated Integer",
      props: {
        modelValue: { type: Number },
        placeholder: { type: String },
        label: { type: String },
        readonly: { type: Boolean, default: !1 },
        required: { type: Boolean, default: !1 },
      },
      setup(e, t) {
        const { t: i } = fl(),
          n = fa({
            get: () => e.modelValue,
            set(e) {
              "number" == typeof e
                ? t.emit("update:modelValue", e)
                : t.emit("update:modelValue", 0);
            },
          }),
          a = ht("");
        return {
          reactiveValue: n,
          validate: function () {
            if (((a.value = ""), e.required && void 0 === e.modelValue))
              return (a.value = i("required")), !1;
            const t = !e.modelValue || Number.isInteger(e.modelValue);
            return t || (a.value = i("no-decimals")), t;
          },
          errorMessage: a,
          isInteger: function (e) {
            if (!/\d/.test(e.key) && "-" !== e.key) return e.preventDefault();
          },
        };
      },
    }),
    ac = { class: "validated-field" },
    sc = { class: "label" },
    rc = {
      key: 0,
      class: "input",
      part: "input",
      style: { width: "100%" },
      value: "N/A",
      readonly: "",
    },
    oc = ["placeholder", "readonly"],
    Mc = { class: "error-message" };
  var lc = mu(nc, [
    [
      "render",
      function (e, t, i, n, a, s) {
        return (
          Vn(),
          Jn("div", ac, [
            ia("div", sc, X(e.label), 1),
            e.readonly && !e.modelValue
              ? (Vn(), Jn("input", rc))
              : gi(
                  (Vn(),
                  Jn(
                    "input",
                    {
                      key: 1,
                      class: Z(["input", { "is-danger": e.errorMessage }]),
                      part: "input",
                      style: { width: "100%" },
                      placeholder: e.placeholder,
                      "onUpdate:modelValue":
                        t[0] || (t[0] = (t) => (e.reactiveValue = t)),
                      onInput: t[1] || (t[1] = (t) => (e.errorMessage = "")),
                      readonly: e.readonly,
                      type: "number",
                      inputmode: "decimal",
                      autocomplete: "decimal",
                      step: "1",
                      pattern: "^[-/d]/d*$",
                      onKeypress: t[2] || (t[2] = (t) => e.isInteger(t)),
                    },
                    null,
                    42,
                    oc
                  )),
                  [[us, e.reactiveValue, void 0, { number: !0 }]]
                ),
            ia("div", Mc, X(e.errorMessage), 1),
          ])
        );
      },
    ],
  ]);
  const uc = ht("us");
  function cc(e) {
    e && (uc.value = e);
  }
  function gc() {
    return { defaultCountryCode: uc, updateDefaultCountryCode: cc };
  }
  const dc = mi({
      name: "Validated String",
      props: {
        modelValue: { type: String },
        placeholder: { type: String },
        label: { type: String },
        readonly: { type: Boolean, default: !1 },
        required: { type: Boolean, default: !1 },
      },
      setup(e, t) {
        const { t: i } = fl(),
          n = fa({
            get: () => e.modelValue,
            set(e) {
              t.emit("update:modelValue", e);
            },
          }),
          a = ht("");
        const s = ht(),
          r = ht(),
          { defaultCountryCode: o } = gc();
        let M;
        function l() {
          var e;
          M = Ur(s.value, {
            initialCountry:
              null != (e = null == M ? void 0 : M.getSelectedCountryData().iso2)
                ? e
                : o.value,
            utilsScript:
              "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
            dropdownContainer: r.value,
            autoPlaceholder: "aggressive",
          });
        }
        return (
          bi(() => {
            e.readonly || l();
          }),
          oi(
            () => e.readonly,
            () => {
              e.readonly ? void 0 !== M && (M.destroy(), (M = void 0)) : l();
            }
          ),
          {
            reactiveValue: n,
            validate: function () {
              var n;
              if (((a.value = ""), e.required && void 0 === e.modelValue))
                return (a.value = i("required")), !1;
              const s =
                !e.modelValue ||
                (null != (n = null == M ? void 0 : M.isValidNumber()) && n);
              if (s) {
                (null == M ? void 0 : M.getNumber()) &&
                  t.emit(
                    "update:modelValue",
                    null == M ? void 0 : M.getNumber()
                  );
              } else a.value = i("invalid-phone");
              return s;
            },
            errorMessage: a,
            phoneInputBox: s,
            controlContainer: r,
          }
        );
      },
    }),
    Nc = { class: "validated-field" },
    Dc = { class: "label" },
    Ic = {
      class: "input",
      part: "input",
      style: { width: "100%" },
      value: "N/A",
      readonly: "",
    },
    yc = ["placeholder", "readonly"],
    jc = { ref: "controlContainer", style: { width: "100%" } },
    pc = { class: "error-message" };
  var zc = mu(dc, [
      [
        "render",
        function (e, t, i, n, a, s) {
          return (
            Vn(),
            Jn("div", Nc, [
              ia("div", Dc, X(e.label), 1),
              gi(ia("input", Ic, null, 512), [
                [xs, e.readonly && !e.modelValue],
              ]),
              gi(
                ia(
                  "input",
                  {
                    class: Z(["input", { "is-danger": e.errorMessage }]),
                    part: "input",
                    style: { width: "100%" },
                    placeholder: e.placeholder,
                    "onUpdate:modelValue":
                      t[0] || (t[0] = (t) => (e.reactiveValue = t)),
                    onInput: t[1] || (t[1] = (t) => (e.errorMessage = "")),
                    readonly: e.readonly,
                    autocomplete: "tel",
                    inputmode: "tel",
                    ref: "phoneInputBox",
                  },
                  null,
                  42,
                  yc
                ),
                [
                  [xs, !e.readonly || e.modelValue],
                  [us, e.reactiveValue],
                ]
              ),
              gi(ia("div", jc, null, 512), [[xs, !e.readonly || e.modelValue]]),
              ia("div", pc, X(e.errorMessage), 1),
            ])
          );
        },
      ],
    ]),
    Tc = ((e) => (
      (e.Registration = "registration"), (e.Profile = "profile"), e
    ))(Tc || {});
  const hc = mi({
      name: "User Metadata",
      components: {
        Checkbox: ku,
        ValidatedString: bu,
        ValidatedDate: Wu,
        ValidatedBoolean: Gu,
        ValidatedEmail: ic,
        ValidatedInteger: lc,
        ValidatedPhone: zc,
      },
      props: {
        appInfo: { type: Object, required: !0 },
        layoutType: { type: String, required: !0 },
        userMetadata: { type: Object, required: !0 },
        isEditing: { type: Boolean, default: !0 },
      },
      setup(e) {
        const { t: t } = fl(),
          i = fa(() =>
            "registration" === e.layoutType
              ? e.appInfo.layouts.registration
              : e.appInfo.layouts.profile
          ),
          n = fa(() => e.appInfo.user_metadata_schema),
          a = fa(() =>
            i.value.map((e) => {
              const t = n.value.find((t) => t.id === e.id);
              return __spreadProps(__spreadValues(__spreadValues({}, e), t), {
                placeholder: s(t),
                component: r(t),
              });
            })
          );
        function s(e) {
          if (void 0 === e) return "";
          switch (e.type) {
            case vr.STRING:
              return t("enter-schema-friendly_name", [
                e.friendly_name.toLowerCase(),
              ]);
            case vr.BOOLEAN:
              return "";
            case vr.INTEGER:
              return "0";
            case vr.DATE:
              return "MM/DD/YYYY";
            case vr.PHONE:
              return "(555) 555-5555";
            case vr.EMAIL:
              return "example@email.com";
          }
        }
        function r(e) {
          if (void 0 === e) return "ValidatedString";
          switch (e.type) {
            case vr.STRING:
              return "ValidatedString";
            case vr.BOOLEAN:
              return "ValidatedBoolean";
            case vr.INTEGER:
              return "ValidatedInteger";
            case vr.DATE:
              return "ValidatedDate";
            case vr.PHONE:
              return "ValidatedPhone";
            case vr.EMAIL:
              return "ValidatedEmail";
          }
        }
        const o = new ResizeObserver(() => {
          M.onParentResize();
        });
        let M;
        const l = ht();
        bi(() => {
          l.value &&
            ((M = Nu.GridStack.init(
              {
                acceptWidgets: !0,
                minRow: 1,
                cellHeight: "75px",
                minWidth: 400,
                column: 6,
                margin: "0px 10px",
                resizable: { handles: "e,w" },
                staticGrid: !0,
              },
              l.value
            )),
            o.observe(l.value));
        });
        const u = [];
        return {
          layout: i,
          schema: n,
          items: a,
          gridContainer: l,
          setRef: function (e) {
            e && u.push(e);
          },
          validate: function () {
            let e = !0;
            return (
              u.forEach((t) => {
                t.validate() || (e = !1);
              }),
              e
            );
          },
          LayoutType: Tc,
        };
      },
    }),
    Ac = ["id", "gs-id", "gs-x", "gs-y", "gs-w", "gs-h"],
    mc = { class: "grid-stack-item-content" };
  var xc = mu(hc, [
    [
      "render",
      function (e, t, i, n, a, s) {
        return (
          Vn(),
          Jn(
            "div",
            {
              class: Z([
                "grid-stack",
                {
                  profile: e.layoutType === e.LayoutType.Profile,
                  register: e.layoutType === e.LayoutType.Registration,
                },
              ]),
              ref: "gridContainer",
            },
            [
              (Vn(!0),
              Jn(
                Yn,
                null,
                Ji(
                  e.items,
                  (t) => (
                    Vn(),
                    Jn(
                      "div",
                      {
                        id: t.id,
                        class: "grid-stack-item",
                        key: t.id,
                        "gs-id": t.id,
                        "gs-x": t.x,
                        "gs-y": t.y,
                        "gs-w": t.w,
                        "gs-h": t.h,
                      },
                      [
                        ia("div", mc, [
                          (Vn(),
                          $n(
                            Hi(t.component),
                            {
                              label: t.friendly_name,
                              placeholder: t.placeholder,
                              required:
                                e.layoutType === e.LayoutType.Registration,
                              modelValue: e.userMetadata[t.field_name],
                              "onUpdate:modelValue": (i) =>
                                (e.userMetadata[t.field_name] = i),
                              ref_for: !0,
                              ref: e.setRef,
                              readonly: !e.isEditing,
                            },
                            null,
                            8,
                            [
                              "label",
                              "placeholder",
                              "required",
                              "modelValue",
                              "onUpdate:modelValue",
                              "readonly",
                            ]
                          )),
                        ]),
                      ],
                      8,
                      Ac
                    )
                  )
                ),
                128
              )),
            ],
            2
          )
        );
      },
    ],
  ]);
  function fc(e, t, i = !1) {
    const n = __spreadValues({}, e);
    return (
      t.forEach((e) => {
        const t = n[e.field_name];
        e.type === vr.DATE &&
          t &&
          (n[e.field_name] = Uu(t).format("YYYY-MM-DD")),
          i && e.type === vr.BOOLEAN && void 0 === t && (n[e.field_name] = !1);
      }),
      n
    );
  }
  function kc(e) {
    const { t: t } = fl(),
      i = new Lr(e),
      n = i.getCurrentUser(),
      a = ht(""),
      s = ht(""),
      r = ht(""),
      o = ht(""),
      M = ht(!1);
    return {
      changeEmailRequest: (e) =>
        __async(this, null, function* () {
          M.value = !0;
          try {
            yield n.changeEmail(e),
              e && (a.value = a.value = t("weve-sent-confirmation-email"));
          } catch (i) {
            s.value = t(
              "" === e
                ? "your-account-must-have-either-an-email-or-a-phone"
                : "failed-to-update-email"
            );
          } finally {
            M.value = !1;
          }
        }),
      updateEmailError: s,
      changePhoneRequest: (e) =>
        __async(this, null, function* () {
          M.value = !0;
          try {
            yield n.changePhone(e),
              e && (a.value = t("weve-sent-confirmation-text"));
          } catch (i) {
            r.value = t(
              "" === e
                ? "your-account-must-have-either-an-email-or-a-phone"
                : "failed-to-update-phone"
            );
          } finally {
            M.value = !1;
          }
        }),
      updatePhoneError: r,
      updatePending: M,
      updateInfoMessage: a,
      identifierExists: (e) =>
        __async(this, null, function* () {
          M.value = !0;
          const t = yield i.identifierExists(e);
          return (M.value = !1), !t;
        }),
      updateMetadata: (e, i) =>
        __async(this, null, function* () {
          M.value = !0;
          try {
            const t = fc(e, i);
            return yield n.updateMetadata(t), !0;
          } catch (a) {
            return (o.value = t("failed-to-update-metadata")), !1;
          } finally {
            M.value = !1;
          }
        }),
      updateMetadataError: o,
    };
  }
  const Lc = {
      key: 0,
      class: "notification is-danger has-text-centered",
      "data-test": "invalid-app-id",
    },
    Oc = mi({
      __name: "Register",
      props: {
        canToggleLoginRegister: { type: Boolean },
        identifier: {},
        countryCode: {},
        appInfo: {},
      },
      emits: ["update:identifier", "update:countryCode", "authEvent"],
      setup(e, { emit: t }) {
        const i = e,
          { t: n } = fl(),
          { appId: a } = Fl(),
          { emitEvent: s } = gu(),
          r = ht(""),
          o = fa({
            get: () => i.identifier,
            set(e) {
              t("update:identifier", e);
            },
          }),
          M = fa({
            get: () => i.countryCode,
            set(e) {
              t("update:countryCode", e);
            },
          }),
          l = fa(() => i.appInfo.public_signup),
          u = fa(() => i.appInfo.allowed_identifier);
        const c = ht({}),
          g = ht();
        return (e, t) => (
          Vn(),
          Jn("div", null, [
            na(
              Pl,
              {
                appId: xt(a),
                identifierMode: u.value,
                identifier: o.value,
                "onUpdate:identifier": t[0] || (t[0] = (e) => (o.value = e)),
                validationError: r.value,
                "onUpdate:validationError":
                  t[1] || (t[1] = (e) => (r.value = e)),
                countryCode: M.value,
                "onUpdate:countryCode": t[2] || (t[2] = (e) => (M.value = e)),
                onOnSubmit:
                  t[3] ||
                  (t[3] = (e) =>
                    (function (e) {
                      return __async(this, null, function* () {
                        const {
                          identifier: t,
                          identifierExists: o,
                          userStatus: M,
                          identifierType: l,
                        } = e;
                        if (!tu().beforeAuth.value(t)) return;
                        let u = !0;
                        if ((g.value && (u = g.value.validate()), o)) {
                          if (M === zr.ACTIVE) {
                            let e = n("account-already-exists", [
                              l === br.email ? n("email") : n("phone-number"),
                            ]);
                            return (
                              i.canToggleLoginRegister &&
                                (e = e + " " + n("toggle-login")),
                              void (r.value = e)
                            );
                          }
                          if (M === zr.INACTIVE)
                            return void (r.value = n(
                              "account-no-longer-active"
                            ));
                        }
                        const d = new Lr(a.value);
                        if (u) {
                          try {
                            yield d.createUser({
                              identifier: t,
                              user_metadata: fc(
                                c.value,
                                i.appInfo.user_metadata_schema,
                                !0
                              ),
                            });
                          } catch (N) {
                            return void (N instanceof Js &&
                            N.message.startsWith("Public signup")
                              ? (r.value = N.message)
                              : (r.value = n("unexpected-error")));
                          }
                          s({
                            type: ru.CreatedUser,
                            payload: { identifier: t, identifierType: l },
                          });
                        }
                      });
                    })(e)),
              },
              {
                metadataFields: ti(() => [
                  e.appInfo && e.appInfo.layouts.registration.length > 0
                    ? (Vn(),
                      $n(
                        xc,
                        {
                          key: 0,
                          isEditing: !0,
                          appInfo: e.appInfo,
                          layoutType: xt(Tc).Registration,
                          userMetadata: c.value,
                          ref_key: "metadataComponent",
                          ref: g,
                        },
                        null,
                        8,
                        ["appInfo", "layoutType", "userMetadata"]
                      ))
                    : ra("", !0),
                ]),
                _: 1,
              },
              8,
              [
                "appId",
                "identifierMode",
                "identifier",
                "validationError",
                "countryCode",
              ]
            ),
            l.value
              ? ra("", !0)
              : (Vn(),
                Jn("div", Lc, X(xt(n)("public-registration-not-allowed")), 1)),
          ])
        );
      },
    }),
    wc = "psg_ephemeral_app_id",
    vc = "psg_ephemeral_app_name";
  class Ec {
    newEphemeralApp() {
      return __async(this, null, function* () {
        const e = yield fetch("https://api.passage.id/v1/apps/", {
            method: "POST",
            body: JSON.stringify({
              auth_origin: window.location.origin,
              name: "Ephemeral Random " + (1e6 * Math.random()).toString(),
            }),
          }),
          t = yield e.json();
        if (200 !== e.status) throw t.message;
        return (
          localStorage.setItem(wc, t.app.id),
          localStorage.setItem(vc, t.app.name),
          t
        );
      });
    }
  }
  const Sc = mi({
      name: "EphemeralAppInfo",
      setup() {
        const e = "https://console.passage.id",
          { t: t } = fl(),
          i = ht(!1),
          n = ht(!1),
          a = ht(!1),
          s = ht(""),
          r = ht(""),
          o = () =>
            __async(this, null, function* () {
              const { appIdUnassigned: t, updateAppId: a } = Fl();
              if (t.value) {
                n.value = !0;
                const t = localStorage.getItem(wc),
                  o = localStorage.getItem(vc);
                if (t) {
                  const i = o ? `?name=${encodeURIComponent(o)}` : "";
                  (s.value = `${e}/claim/${t}${i}`), a(t), l();
                } else
                  try {
                    const t = new Ec(),
                      i = yield t.newEphemeralApp();
                    a(i.app.id);
                    const n = i.app.name
                      ? `?name=${encodeURIComponent(i.app.name)}`
                      : "";
                    (s.value = `${e}/claim/${i.app.id}${n}`), l();
                  } catch (r) {
                    (i.value = !0), a("");
                  }
              }
            }),
          M = () =>
            __async(this, null, function* () {
              const { appId: e } = Fl();
              if (!n.value) return;
              const t = new Lr(e.value);
              try {
                (yield t.appInfo()).ephemeral ||
                  ((a.value = !0),
                  (r.value = `<passage-auth app-id="${e.value}"/>`));
              } catch (s) {
                i.value = !0;
              }
            });
        function l() {
          const { appId: e } = Fl();
          console.info(`Passage Test App ID: ${e.value}`),
            console.info(`Claim your app: ${s.value}`);
        }
        return (
          Si(() =>
            __async(this, null, function* () {
              yield o(), yield M();
            })
          ),
          {
            error: i,
            isEphemeral: n,
            claimed: a,
            ephemeralClaimUrl: s,
            exampleTag: r,
            t: t,
          }
        );
      },
    }),
    bc = { key: 0 },
    Cc = { key: 0, class: "notification is-danger" },
    Uc = {
      key: 1,
      class: "notification ephemeral-box",
      "data-test": "ephemeral-app-message",
    },
    Qc = { key: 0 },
    _c = ["href"],
    Yc = { key: 1 },
    Pc = ia("br", null, null, -1);
  var Rc = mu(Sc, [
    [
      "render",
      function (e, t, i, n, a, s) {
        return e.isEphemeral
          ? (Vn(),
            Jn("div", bc, [
              e.error
                ? (Vn(), Jn("div", Cc, X(e.t("unable-to-create-test-app")), 1))
                : (Vn(),
                  Jn("div", Uc, [
                    e.claimed
                      ? (Vn(),
                        Jn("div", Yc, [
                          sa(X(e.t("add-your-claimed-app-like-this")) + " ", 1),
                          Pc,
                          sa(X(e.exampleTag), 1),
                        ]))
                      : (Vn(),
                        Jn("div", Qc, [
                          sa(X(e.t("currently-using-test-app")) + " ", 1),
                          ia(
                            "a",
                            { href: e.ephemeralClaimUrl, target: "_blank" },
                            X(e.t("click-here")),
                            9,
                            _c
                          ),
                          sa("."),
                        ])),
                  ])),
            ]))
          : ra("", !0);
      },
    ],
  ]);
  const Bc = {
      appleBiometric:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI2IiBoZWlnaHQ9IjYxIiB2aWV3Qm94PSIwIDAgMTI2IDYxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bGluZSB4MT0iNjMuNSIgeTE9Ii0yLjE4NTU3ZS0wOCIgeDI9IjYzLjUiIHkyPSI2MSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjI4NTE2IDIwLjM0ODZWMTUuMjk0OUMyLjI4NTE2IDEyLjUzMjUgNC41MzI1NiAxMC4yODUyIDcuMjk0OTIgMTAuMjg1MkgxMi4zNDg2QzEyLjk3OTYgMTAuMjg1MiAxMy40OTEyIDkuNzczNTkgMTMuNDkxMiA5LjE0MjU4QzEzLjQ5MTIgOC41MTE1NyAxMi45Nzk2IDggMTIuMzQ4NiA4SDcuMjk0OTJDMy4yNzI1MiA4IDAgMTEuMjcyNSAwIDE1LjI5NDlWMjAuMzQ4NkMwIDIwLjk3OTYgMC41MTE1NjcgMjEuNDkxMiAxLjE0MjU4IDIxLjQ5MTJDMS43NzM1OSAyMS40OTEyIDIuMjg1MTYgMjAuOTc5NiAyLjI4NTE2IDIwLjM0ODZaTTEyLjM0ODYgNTAuNzE0OEMxMi45Nzk2IDUwLjcxNDggMTMuNDkxMiA1MS4yMjY0IDEzLjQ5MTIgNTEuODU3NEMxMy40OTEyIDUyLjQ4ODQgMTIuOTc5NiA1MyAxMi4zNDg2IDUzSDcuMjk0OTJDMy4yNzI1MiA1MyAwIDQ5LjcyNzUgMCA0NS43MDUxVjQwLjY1MTRDMCA0MC4wMjA0IDAuNTExNTY3IDM5LjUwODggMS4xNDI1OCAzOS41MDg4QzEuNzczNTkgMzkuNTA4OCAyLjI4NTE2IDQwLjAyMDQgMi4yODUxNiA0MC42NTE0VjQ1LjcwNTFDMi4yODUxNiA0OC40Njc0IDQuNTMyNTYgNTAuNzE0OCA3LjI5NDkyIDUwLjcxNDhIMTIuMzQ4NlpNNDUgNDAuNjUxNFY0NS43MDUxQzQ1IDQ5LjcyNzUgNDEuNzI3NSA1MyAzNy43MDUxIDUzSDMyLjY1MTRDMzIuMDIwNCA1MyAzMS41MDg4IDUyLjQ4ODQgMzEuNTA4OCA1MS44NTc0QzMxLjUwODggNTEuMjI2NCAzMi4wMjA0IDUwLjcxNDggMzIuNjUxNCA1MC43MTQ4SDM3LjcwNTFDNDAuNDY3NCA1MC43MTQ4IDQyLjcxNDggNDguNDY3NCA0Mi43MTQ4IDQ1LjcwNTFWNDAuNjUxNEM0Mi43MTQ4IDQwLjAyMDQgNDMuMjI2NCAzOS41MDg4IDQzLjg1NzQgMzkuNTA4OEM0NC40ODg0IDM5LjUwODggNDUgNDAuMDIwNCA0NSA0MC42NTE0Wk00NSAxNS4yOTQ5VjIwLjM0ODZDNDUgMjAuOTc5NiA0NC40ODg0IDIxLjQ5MTIgNDMuODU3NCAyMS40OTEyQzQzLjIyNjQgMjEuNDkxMiA0Mi43MTQ4IDIwLjk3OTYgNDIuNzE0OCAyMC4zNDg2VjE1LjI5NDlDNDIuNzE0OCAxMi41MzI1IDQwLjQ2NzQgMTAuMjg1MiAzNy43MDUxIDEwLjI4NTJIMzIuNjUxNEMzMi4wMjA0IDEwLjI4NTIgMzEuNTA4OCA5Ljc3MzU5IDMxLjUwODggOS4xNDI1OEMzMS41MDg4IDguNTExNTcgMzIuMDIwNCA4IDMyLjY1MTQgOEgzNy43MDUxQzQxLjcyNzUgOCA0NSAxMS4yNzI1IDQ1IDE1LjI5NDlaTTMwLjM4NSA0MS4yNTk0QzMwLjg2NjQgNDAuODE0OCAzMC44OTYyIDQwLjA2NDEgMzAuNDUxNSAzOS41ODI3QzMwLjAwNjkgMzkuMTAxMyAyOS4yNTYyIDM5LjA3MTYgMjguNzc0OCAzOS41MTYyQzI3LjA2MiA0MS4wOTg0IDI0LjgzMzUgNDEuOTY5NyAyMi41IDQxLjk2OTdDMjAuMTY2NCA0MS45Njk3IDE3LjkzOCA0MS4wOTg0IDE2LjIyNTEgMzkuNTE2MkMxNS43NDM3IDM5LjA3MTYgMTQuOTkzMSAzOS4xMDE0IDE0LjU0ODQgMzkuNTgyN0MxNC4xMDM4IDQwLjA2NDEgMTQuMTMzNSA0MC44MTQ4IDE0LjYxNDkgNDEuMjU5NEMxNi43Njc2IDQzLjI0NzcgMTkuNTY3OCA0NC4zNDI4IDIyLjUgNDQuMzQyOEMyNS40MzIxIDQ0LjM0MjggMjguMjMyNCA0My4yNDc3IDMwLjM4NSA0MS4yNTk0Wk0yNC44NzMgMjQuOTYyOVYzMy40MDA0QzI0Ljg3MyAzNS4wNzI0IDIzLjUxMjggMzYuNDMyNiAyMS44NDA4IDM2LjQzMjZIMjAuODc0QzIwLjIxODcgMzYuNDMyNiAxOS42ODc1IDM1LjkwMTQgMTkuNjg3NSAzNS4yNDYxQzE5LjY4NzUgMzQuNTkwOCAyMC4yMTg3IDM0LjA1OTYgMjAuODc0IDM0LjA1OTZIMjEuODQwOEMyMi4yMDQzIDM0LjA1OTYgMjIuNSAzMy43NjM5IDIyLjUgMzMuNDAwNFYyNC45NjI5QzIyLjUgMjQuMzA3NiAyMy4wMzEyIDIzLjc3NjQgMjMuNjg2NSAyMy43NzY0QzI0LjM0MTggMjMuNzc2NCAyNC44NzMgMjQuMzA3NiAyNC44NzMgMjQuOTYyOVpNMzMuMDQ2OSAyOC4yODA4VjI0Ljg5N0MzMy4wNDY5IDI0LjI3ODEgMzIuNTQ1MiAyMy43NzY0IDMxLjkyNjMgMjMuNzc2NEMzMS4zMDc0IDIzLjc3NjQgMzAuODA1NyAyNC4yNzgxIDMwLjgwNTcgMjQuODk3VjI4LjI4MDhDMzAuODA1NyAyOC44OTk2IDMxLjMwNzQgMjkuNDAxNCAzMS45MjYzIDI5LjQwMTRDMzIuNTQ1MiAyOS40MDE0IDMzLjA0NjkgMjguODk5NiAzMy4wNDY5IDI4LjI4MDhaTTEyLjIxNjggMjguMjgwOEMxMi4yMTY4IDI4Ljg5OTYgMTIuNzE4NSAyOS40MDE0IDEzLjMzNzQgMjkuNDAxNEMxMy45NTYzIDI5LjQwMTQgMTQuNDU4IDI4Ljg5OTYgMTQuNDU4IDI4LjI4MDhWMjQuODk3QzE0LjQ1OCAyNC4yNzgxIDEzLjk1NjMgMjMuNzc2NCAxMy4zMzc0IDIzLjc3NjRDMTIuNzE4NSAyMy43NzY0IDEyLjIxNjggMjQuMjc4MSAxMi4yMTY4IDI0Ljg5N1YyOC4yODA4WiIgZmlsbD0iY3VycmVudGNvbG9yIi8+CjxwYXRoIGQ9Ik0xMDcuNzY4IDguNjYzMzNDMTA0LjY2MiA3Ljg3NzAxIDEwMS4zOTQgNy43NjQ2NiA5OC4yMTMyIDguNDYxNDRDOTcuOTY3NCA4LjUxNTI5IDk3LjgxMTEgOC43NjExNiA5Ny44NjQyIDkuMDEwNkM5Ny45MTczIDkuMjYwMDQgOTguMTU5NSA5LjQxODYgOTguNDA1MyA5LjM2NDc1QzEwMS40NTEgOC42OTc0NSAxMDQuNTg5IDguODA3NDggMTA3LjU3MyA5LjU2NjU4QzExNC43MSAxMS4zODE5IDEyMC42NTEgMTYuODI3NiAxMjIuOTE0IDIzLjk0MTFDMTIzLjc4OSAyNi42OTIxIDEyNC4xNiAyOS42MjE0IDEyNC4yMzUgMzIuNjkxNEMxMjQuMjQxIDMyLjk0NjUgMTI0LjQ1IDMzLjE0ODIgMTI0LjcwMSAzMy4xNDJDMTI0Ljk1MyAzMy4xMzU3IDEyNS4xNTEgMzIuOTIzOCAxMjUuMTQ1IDMyLjY2ODdDMTI1LjA3IDI5LjU1NjYgMTI0LjY5NCAyNi41NTE5IDEyMy43OTcgMjMuNzEwMUMxMjEuNDQ3IDE2LjI2MjggMTE1LjIzOCAxMC41NTQyIDEwNy43NjggOC42NjMzM1oiIGZpbGw9ImN1cnJlbnRjb2xvciIvPgo8cGF0aCBkPSJNOTUuOTAyNiAxMC4wNjEzQzk2LjE0NSA5Ljk5MzQ0IDk2LjI4NzMgOS43MzkgOTYuMjIwNCA5LjQ5MzAxQzk2LjE1MzYgOS4yNDcwMSA5NS45MDI4IDkuMTAyNiA5NS42NjA0IDkuMTcwNDdDOTIuMzM0MyAxMC4xMDE3IDg3LjY1NTQgMTMuMzE5MyA4NC43NjM4IDE3LjYxNzhDODQuNzYyNyAxNy42MTk0IDg0Ljc2MTYgMTcuNjIxMSA4NC43NjA1IDE3LjYyMjhDODIuMjIxNSAyMS41MDU5IDgwLjYyOTkgMjYuMzg1NiA4MS4wNzQyIDMxLjEyMDdDODEuMDc0NiAzMS4xMjUyIDgxLjA3NTEgMzEuMTI5NyA4MS4wNzU3IDMxLjEzNDJDODEuMTgyMiAzMS45OTg5IDgxLjM2MSAzMi44NjE5IDgxLjU0IDMzLjcyNTlDODEuOTE3IDM1LjU0NTcgODIuMjk0OSAzNy4zNyA4Mi4wMDAzIDM5LjIyMzJDODEuOTYwMyAzOS40NzUyIDgyLjEyOSAzOS43MTIzIDgyLjM3NzMgMzkuNzUzQzgyLjYyNTUgMzkuNzkzNiA4Mi44NTkzIDM5LjYyMjMgODIuODk5MyAzOS4zNzA0QzgzLjIwNzIgMzcuNDMzMSA4Mi44MjQ5IDM1LjU0MzUgODIuNDQyNSAzMy42NTM2QzgyLjI2NTYgMzIuNzc5NSA4Mi4wODg3IDMxLjkwNTMgODEuOTgwMSAzMS4wMjY0QzgxLjU2MjIgMjYuNTUyIDgzLjA2NzUgMjEuODg0MyA4NS41MTc2IDE4LjEzNjNDODguMjk5MiAxNC4wMDI4IDkyLjgwMzUgMTAuOTI5IDk1LjkwMjYgMTAuMDYxM1oiIGZpbGw9ImN1cnJlbnRjb2xvciIvPgo8cGF0aCBkPSJNMTAxLjg3NyAxMS4wOTM2QzEwNy41OTQgMTAuNzM5NCAxMTMuMzA5IDEzLjEwNjkgMTE3LjE0NyAxNy42NDI2QzExNy4zMTEgMTcuODM2MiAxMTcuMjg5IDE4LjEyNzkgMTE3LjA5OCAxOC4yOTQyQzExNi45MDcgMTguNDYwNCAxMTYuNjIgMTguNDM4MyAxMTYuNDU2IDE4LjI0NDdDMTEyLjgwNiAxMy45MzE0IDEwNy4zNjggMTEuNjc4NCAxMDEuOTMgMTIuMDE2MkMxMDEuOTI4IDEyLjAxNjMgMTAxLjkyNiAxMi4wMTY0IDEwMS45MjQgMTIuMDE2NUM5NS4wNDc3IDEyLjM1NDIgODguNjA3OCAxNy4wODg0IDg2LjIzOSAyMy43MjIxQzg2LjE1MzQgMjMuOTYyIDg1Ljg5MjMgMjQuMDg2IDg1LjY1NTggMjMuOTk5MUM4NS40MTk0IDIzLjkxMjIgODUuMjk3MiAyMy42NDcyIDg1LjM4MjkgMjMuNDA3M0M4Ny44NzgzIDE2LjQxODkgOTQuNjQwNiAxMS40NTAyIDEwMS44NzcgMTEuMDkzNloiIGZpbGw9ImN1cnJlbnRjb2xvciIvPgo8cGF0aCBkPSJNMTE4LjUzNCAxOS42NjEyQzExOC4zOTQgMTkuNDQ5NCAxMTguMTExIDE5LjM5MyAxMTcuOTAyIDE5LjUzNTJDMTE3LjY5NCAxOS42Nzc1IDExNy42MzggMTkuOTY0NiAxMTcuNzc4IDIwLjE3NjRDMTE5LjkwNiAyMy4zOTE3IDEyMC43ODYgMjYuODkwNSAxMjEuMTM0IDMxLjA0MjZDMTIxLjE1NSAzMS4yOTY5IDEyMS4zNzUgMzEuNDg1NSAxMjEuNjI2IDMxLjQ2MzlDMTIxLjg3NiAzMS40NDIyIDEyMi4wNjIgMzEuMjE4NiAxMjIuMDQxIDMwLjk2NDNDMTIxLjY4NSAyNi43MjE1IDEyMC43NzggMjMuMDUyMiAxMTguNTM0IDE5LjY2MTJaIiBmaWxsPSJjdXJyZW50Y29sb3IiLz4KPHBhdGggZD0iTTEyMS43MzYgMzIuOTI2MUMxMjEuOTg3IDMyLjkxMDEgMTIyLjIwNCAzMy4xMDM3IDEyMi4yMTkgMzMuMzU4NEMxMjIuMzkxIDM2LjE0NDYgMTIyLjM5MiAzOS4yOTY5IDEyMi4wODkgNDEuNjI2NUMxMjIuMDU2IDQxLjg3OTQgMTIxLjgyNyA0Mi4wNTc0IDEyMS41NzggNDIuMDIzOUMxMjEuMzI4IDQxLjk5MDQgMTIxLjE1MyA0MS43NTgyIDEyMS4xODYgNDEuNTA1MkMxMjEuNDc5IDM5LjI2IDEyMS40OCAzNi4xNzQ1IDEyMS4zMSAzMy40MTZDMTIxLjI5NSAzMy4xNjEzIDEyMS40ODUgMzIuOTQyIDEyMS43MzYgMzIuOTI2MVoiIGZpbGw9ImN1cnJlbnRjb2xvciIvPgo8cGF0aCBkPSJNODUuNTUxNSAyNS45NjAxQzg1LjYxMDUgMjUuNzEyIDg1LjQ2MDIgMjUuNDYyNCA4NS4yMTU3IDI1LjQwMjVDODQuOTcxMyAyNS4zNDI2IDg0LjcyNTMgMjUuNDk1MSA4NC42NjYzIDI1Ljc0MzJDODQuMzMyMSAyNy4xNDc4IDg0LjE1ODYgMjguNTkwOCA4NC4xNTE4IDMwLjAzNTFDODQuMTQ0NyAzMS41MjM3IDg0LjQxODIgMzIuOTc2OCA4NC42OTE4IDM0LjQzMDRDODQuOTE1NiAzNS42MTk1IDg1LjEzOTUgMzYuODA5IDg1LjIxIDM4LjAxODdDODUuMzAyNSAzOS42MDc2IDg0Ljk3MzEgNDEuMTk4OSA4NC40MDQgNDIuNzEzNUM4NC4zMTQ0IDQyLjk1MTkgODQuNDMyMyA0My4yMTg5IDg0LjY2NzIgNDMuMzA5OEM4NC45MDIyIDQzLjQwMDggODUuMTY1MyA0My4yODEyIDg1LjI1NDkgNDMuMDQyN0M4NS44NTY0IDQxLjQ0MTggODYuMjIxMSAzOS43MTc0IDg2LjExOSAzNy45NjQyQzg2LjA0OSAzNi43NjI4IDg1LjgyNTIgMzUuNTgwMiA4NS42MDE0IDM0LjM5ODFDODUuMzI4MyAzMi45NTU2IDg1LjA1NTMgMzEuNTEzOSA4NS4wNjI0IDMwLjAzOTVDODUuMDY4OSAyOC42NjcyIDg1LjIzMzggMjcuMjk1NSA4NS41NTE1IDI1Ljk2MDFaIiBmaWxsPSJjdXJyZW50Y29sb3IiLz4KPHBhdGggZD0iTTk3LjQ5ODUgMTUuNjkyMkM5Ny41OTIyIDE1LjkyOSA5Ny40NzkgMTYuMTk4MSA5Ny4yNDU2IDE2LjI5MzJDOTIuNTI1NCAxOC4yMTY5IDg4Ljk4MDggMjIuNTU4IDg4LjI1NzcgMjcuNjc3MUM4Ny45NTU2IDI5LjgxNTggODguMjgyIDMxLjkzNDIgODguNjA4MyAzNC4wNTIyQzg4Ljc5MiAzNS4yNDQ5IDg4Ljk3NTcgMzYuNDM3NCA4OS4wNDcyIDM3LjYzMzNDODkuMjAyMSA0MC4yMjY0IDg4LjkxMSA0My4wNzQ2IDg3LjI0ODEgNDUuNjY2MUM4Ny4xMTA5IDQ1Ljg4IDg2LjgyODggNDUuOTQwNCA4Ni42MTgxIDQ1LjgwMTJDODYuNDA3NCA0NS42NjE5IDg2LjM0NzggNDUuMzc1NyA4Ni40ODUgNDUuMTYxOEM4OC4wMDAxIDQyLjgwMDcgODguMjg2OSA0MC4xNzgxIDg4LjEzODIgMzcuNjg5MkM4OC4wNjU4IDM2LjQ3NTggODcuODgzMiAzNS4yNjk1IDg3LjcwMDcgMzQuMDYzOUM4Ny4zNzMzIDMxLjkwMDggODcuMDQ2MyAyOS43NDAzIDg3LjM1NjMgMjcuNTQ1OUM4OC4xMjg0IDIyLjA4MDEgOTEuOTAzNCAxNy40NzQ1IDk2LjkwNjMgMTUuNDM1NkM5Ny4xMzk2IDE1LjM0MDUgOTcuNDA0NyAxNS40NTU0IDk3LjQ5ODUgMTUuNjkyMloiIGZpbGw9ImN1cnJlbnRjb2xvciIvPgo8cGF0aCBkPSJNMTEzLjQ4MiAxOC4zMjI4QzEwOS43NTggMTQuNzgzMyAxMDQuMzYxIDEzLjU0OCA5OS40NTYyIDE0LjYzOThDOTkuMjEwNSAxNC42OTQ1IDk5LjA1NTEgMTQuOTQwOSA5OS4xMDkgMTUuMTkwMUM5OS4xNjI4IDE1LjQzOTQgOTkuNDA1NiAxNS41OTcxIDk5LjY1MTMgMTUuNTQyNUMxMDQuMjk2IDE0LjUwODYgMTA5LjM3OCAxNS42ODggMTEyLjg2IDE4Ljk5NzNDMTE1Ljc5NCAyMS43ODY3IDExNy40OTggMjUuODQ1MyAxMTcuOTQ0IDMwLjI3MzVDMTE3Ljk3IDMwLjUyNzQgMTE4LjE5NCAzMC43MTIxIDExOC40NDQgMzAuNjg2MkMxMTguNjk0IDMwLjY2MDIgMTE4Ljg3NiAzMC40MzM0IDExOC44NSAzMC4xNzk1QzExOC4zODcgMjUuNTgxNCAxMTYuNjExIDIxLjI5NjkgMTEzLjQ4MiAxOC4zMjI4WiIgZmlsbD0iY3VycmVudGNvbG9yIi8+CjxwYXRoIGQ9Ik0xMTguNzU1IDMyLjM4QzExOS4wMDUgMzIuMzU0IDExOS4yMjkgMzIuNTM4NiAxMTkuMjU1IDMyLjc5MjVDMTE5LjY4NyAzNy4wNjUxIDExOS41MDEgNDEuNjc5OSAxMTguODQ4IDQ2LjE0NDNDMTE4LjgxMSA0Ni4zOTY3IDExOC41NzkgNDYuNTcxIDExOC4zMzEgNDYuNTMzNUMxMTguMDgyIDQ2LjQ5NiAxMTcuOTEgNDYuMjYxMSAxMTcuOTQ3IDQ2LjAwODZDMTE4LjU5MSA0MS42MDYzIDExOC43NzIgMzcuMDY5OSAxMTguMzQ5IDMyLjg4NjlDMTE4LjMyMyAzMi42MzMgMTE4LjUwNSAzMi40MDYxIDExOC43NTUgMzIuMzhaIiBmaWxsPSJjdXJyZW50Y29sb3IiLz4KPHBhdGggZD0iTTEwMi44ODIgMTcuMzkwNUM5NS45MDQ1IDE3LjM5MDUgOTAuMjM1NyAyMy4wMzkzIDkwLjIzNTcgMzAuMDIzMkM5MC4yMzU3IDMwLjc2OTIgOTAuMzAwOSAzMS41MDAyIDkwLjQyNTMgMzIuMjExQzkwLjQ2OTMgMzIuNDYyMiA5MC43MDU2IDMyLjYyOTcgOTAuOTUzMiAzMi41ODUxQzkxLjIwMDggMzIuNTQwNSA5MS4zNjU4IDMyLjMwMDcgOTEuMzIxOSAzMi4wNDk0QzkxLjIwNjcgMzEuMzkxMyA5MS4xNDYzIDMwLjcxNDQgOTEuMTQ2MyAzMC4wMjMyQzkxLjE0NjMgMjMuNTYzOCA5Ni4zOTM0IDE4LjMxNDYgMTAyLjg4MiAxOC4zMTQ2QzEwNS44MTQgMTguMzE0NiAxMDguNDkyIDE5LjM4NyAxMTAuNTQ5IDIxLjE1OTFDMTEwLjc0IDIxLjMyNDMgMTExLjAyOCAyMS4zMDA1IDExMS4xOSAyMS4xMDZDMTExLjM1MyAyMC45MTE1IDExMS4zMyAyMC42MTk5IDExMS4xMzggMjAuNDU0N0MxMDguOTIyIDE4LjU0NTEgMTA2LjAzNiAxNy4zOTA1IDEwMi44ODIgMTcuMzkwNVoiIGZpbGw9ImN1cnJlbnRjb2xvciIvPgo8cGF0aCBkPSJNMTEyLjE1OCAyMi4xNzc1QzExMi4zNCAyMi4wMDA4IDExMi42MjggMjIuMDA3IDExMi44MDIgMjIuMTkxMkMxMTQuODExIDI0LjMxNzYgMTE1LjQ1NCAyNy42NTk3IDExNS44OCAzMC40NjQ0QzExNi4zNTkgMzMuNjIzNyAxMTYuNDMzIDM2LjcwNTggMTE2LjQzMyAzOC4xMzQ4QzExNi40MzMgMzguMzkgMTE2LjIyOSAzOC41OTY5IDExNS45NzcgMzguNTk2OUMxMTUuNzI2IDM4LjU5NjkgMTE1LjUyMiAzOC4zOSAxMTUuNTIyIDM4LjEzNDhDMTE1LjUyMiAzNi43Mjg5IDExNS40NDkgMzMuNjk5IDExNC45OCAzMC42MDUxQzExNC41ODUgMjguMDAxMiAxMTQuMDE1IDI0LjgxMDUgMTEyLjE0NSAyMi44MzA4QzExMS45NzEgMjIuNjQ2NiAxMTEuOTc3IDIyLjM1NDEgMTEyLjE1OCAyMi4xNzc1WiIgZmlsbD0iY3VycmVudGNvbG9yIi8+CjxwYXRoIGQ9Ik0xMTYuMzE3IDQwLjc4MUMxMTYuMzM3IDQwLjUyNjcgMTE2LjE1IDQwLjMwNCAxMTUuODk5IDQwLjI4MzdDMTE1LjY0OSA0MC4yNjM0IDExNS40MjkgNDAuNDUzMiAxMTUuNDA5IDQwLjcwNzZDMTE1LjE4NiA0My41NTM4IDExNC44OTMgNDYuMzk2OCAxMTQuMzAxIDQ5LjAyMzFDMTE0LjI0NCA0OS4yNzE4IDExNC4zOTggNDkuNTE5NyAxMTQuNjQzIDQ5LjU3NjdDMTE0Ljg4OCA0OS42MzM2IDExNS4xMzIgNDkuNDc4MiAxMTUuMTg4IDQ5LjIyOTRDMTE1Ljc5NyA0Ni41MzQgMTE2LjA5MyA0My42MzQ4IDExNi4zMTcgNDAuNzgxWiIgZmlsbD0iY3VycmVudGNvbG9yIi8+CjxwYXRoIGQ9Ik05MS4xNTgyIDMzLjkxMTZDOTEuNDA0OSAzMy44NjIzIDkxLjY0NDMgMzQuMDI1MyA5MS42OTI5IDM0LjI3NTdDOTIuNjU1NSAzOS4yMzY4IDkxLjk5MDUgNDMuNzQzNyA4OS40NDEyIDQ3LjY5MTVDODkuMzAzMyA0Ny45MDUgODkuMDIxMSA0Ny45NjQ2IDg4LjgxMDggNDcuODI0N0M4OC42MDA1IDQ3LjY4NDggODguNTQxNyA0Ny4zOTg0IDg4LjY3OTUgNDcuMTg1QzkxLjA3ODIgNDMuNDcwNSA5MS43MjM3IDM5LjIxNzcgOTAuNzk5NCAzNC40NTQyQzkwLjc1MDggMzQuMjAzOCA5MC45MTE0IDMzLjk2MDkgOTEuMTU4MiAzMy45MTE2WiIgZmlsbD0iY3VycmVudGNvbG9yIi8+CjxwYXRoIGQ9Ik0xMDIuODgyIDIwLjM5NjhDOTguMzUyNSAyMC4zOTY4IDkzLjkwOTYgMjMuOTU0NiA5My40NTYxIDI4LjQyNkM5My4yNTc1IDMwLjM4MzYgOTMuNTM2NCAzMi4zMTE5IDkzLjgxNTQgMzQuMjQwOUM5NC4wNTkxIDM1LjkyNTMgOTQuMzAyOCAzNy42MTAzIDk0LjIyODggMzkuMzE1OUM5NC4wNTk0IDQzLjIxOTQgOTIuOTMwOCA0Ni40NDE2IDkwLjk5MTYgNDkuMDk1NkM5MC44NDE4IDQ5LjMwMDYgOTAuODg0MiA0OS41OSA5MS4wODYxIDQ5Ljc0MkM5MS4yODgxIDQ5Ljg5NCA5MS41NzMzIDQ5Ljg1MSA5MS43MjMxIDQ5LjY0NkM5My43Nzk4IDQ2LjgzMTIgOTQuOTYxOSA0My40Mjc3IDk1LjEzODUgMzkuMzU2NUM5NS4yMTIyIDM3LjY1ODYgOTQuOTY3NyAzNS45NzkgOTQuNzIzNCAzNC4zMDA0Qzk0LjQ0NCAzMi4zODEgOTQuMTY0OSAzMC40NjMgOTQuMzYxOSAyOC41MjA3Qzk0Ljc2MDMgMjQuNTkyNiA5OC43NDQzIDIxLjMyMDkgMTAyLjg4MiAyMS4zMjA5QzEwNC44MTEgMjEuMzIwOSAxMDkuODA0IDIyLjM4MTMgMTExLjM5MiAyNy42MzE2QzExMi4zODcgMzAuOTIxNyAxMTIuNjU5IDM1LjM3NDUgMTEyLjQxOCAzOS43MDAzQzExMi4xNzcgNDQuMDI1NiAxMTEuNDI3IDQ4LjE2MjUgMTEwLjQxOCA1MC44MTUzQzExMC4zMjggNTEuMDUzMyAxMTAuNDQ1IDUxLjMyMDggMTEwLjY3OSA1MS40MTI2QzExMC45MTQgNTEuNTA0NSAxMTEuMTc4IDUxLjM4NTkgMTExLjI2OCA1MS4xNDc4QzExMi4zMjMgNDguMzcyNCAxMTMuMDgzIDQ0LjEzMDggMTEzLjMyNyAzOS43NTI1QzExMy41NzEgMzUuMzc0NyAxMTMuMzAzIDMwLjc5ODcgMTEyLjI2MiAyNy4zNjA0QzExMC41IDIxLjUzMjQgMTA0Ljk3MyAyMC4zOTY4IDEwMi44ODIgMjAuMzk2OFoiIGZpbGw9ImN1cnJlbnRjb2xvciIvPgo8cGF0aCBkPSJNOTUuODc0OCA0Ny42OTIyQzk2LjA4NTQgNDcuODMxNiA5Ni4xNDQ4IDQ4LjExNzkgOTYuMDA3NCA0OC4zMzE3Qzk1LjcyNSA0OC43NzEgOTUuNDc2NyA0OS4yMzA2IDk1LjIyODMgNDkuNjkwM0M5NC45Nzk5IDUwLjE0OTkgOTQuNzMxNSA1MC42MDk2IDk0LjQ0OTEgNTEuMDQ5Qzk0LjMxMTcgNTEuMjYyOCA5NC4wMjk2IDUxLjMyMyA5My44MTkgNTEuMTgzNkM5My42MDg0IDUxLjA0NDIgOTMuNTQ5IDUwLjc1NzkgOTMuNjg2NCA1MC41NDQyQzkzLjk2ODcgNTAuMTA0OSA5NC4yMTcxIDQ5LjY0NTIgOTQuNDY1NSA0OS4xODU2Qzk0LjcxMzkgNDguNzI1OSA5NC45NjIzIDQ4LjI2NjIgOTUuMjQ0NyA0Ny44MjY4Qzk1LjM4MiA0Ny42MTMxIDk1LjY2NDIgNDcuNTUyOCA5NS44NzQ4IDQ3LjY5MjJaIiBmaWxsPSJjdXJyZW50Y29sb3IiLz4KPHBhdGggZD0iTTk5Ljc3MzQgMjUuMTkzMkM5OS45ODI0IDI1LjA1MTMgMTAwLjAzOCAyNC43NjQ0IDk5Ljg5ODcgMjQuNTUyMkM5OS43NTg5IDI0LjM0MDEgOTkuNDc2MSAyNC4yODMyIDk5LjI2NzEgMjQuNDI1MUM5Ny40NjQyIDI1LjY0ODkgOTYuMzU4IDI3LjMzMTcgOTYuMzU4IDI5Ljc5N0M5Ni4zNTggMzEuMjY1IDk2LjYxNDMgMzIuNDY0OSA5Ni44NzcxIDMzLjY5NTZDOTcuMjcwNSAzNS41MzczIDk3LjUzNzIgMzcuMzc0OSA5Ny40ODkzIDM5LjI2NjZDOTcuNDMxMSA0MS41NjM2IDk2Ljk4ODIgNDMuNjYyNiA5Ni4xMzY5IDQ1LjY2MjJDOTYuMDM3MiA0NS44OTY0IDk2LjE0MzQgNDYuMTY4NCA5Ni4zNzQzIDQ2LjI2OTZDOTYuNjA1MSA0Ni4zNzA4IDk2Ljg3MzEgNDYuMjYyOSA5Ni45NzI4IDQ2LjAyODdDOTcuODcyOSA0My45MTQ1IDk4LjMzODUgNDEuNjk4NCA5OC4zOTk2IDM5LjI5MDNDOTguNDQ5NCAzNy4zMjQ3IDk4LjE3NTIgMzUuNDE0MyA5Ny43NjczIDMzLjUwMDJDOTcuNTAzOSAzMi4yNjQxIDk3LjI2ODcgMzEuMTYwNSA5Ny4yNjg3IDI5Ljc5N0M5Ny4yNjg3IDI3LjY4NDcgOTguMTg0MyAyNi4yNzE4IDk5Ljc3MzQgMjUuMTkzMloiIGZpbGw9ImN1cnJlbnRjb2xvciIvPgo8cGF0aCBkPSJNMTAxLjU1IDIzLjU2OTdDMTAzLjQ0IDIzLjE3ODggMTA1LjQ3MyAyMy42NjE5IDEwNi45NjkgMjQuODkxMUMxMDkuNjQyIDI3LjA4NjcgMTA5Ljk5OCAzMS4wOTA4IDExMC4yODYgMzQuMzM1NUwxMTAuMzAxIDM0LjUwMDhDMTEwLjY3MyAzOC42ODMzIDExMC4yNDcgNDIuNzQ1OCAxMDkuMzg4IDQ2LjgyNTZDMTA5LjMzNiA0Ny4wNzUyIDEwOS4wOTQgNDcuMjM0MyAxMDguODQ4IDQ3LjE4MUMxMDguNjAyIDQ3LjEyNzcgMTA4LjQ0NSA0Ni44ODIyIDEwOC40OTggNDYuNjMyNkMxMDkuMzQzIDQyLjYxNCAxMDkuNzU2IDM4LjY0ODIgMTA5LjM5NCAzNC41ODM5QzEwOS4zODIgMzQuNDQ5NCAxMDkuMzcgMzQuMzEyOSAxMDkuMzU4IDM0LjE3NDhMMTA5LjM1OCAzNC4xNzI4QzEwOS4xMDIgMzEuMjQwNiAxMDguNzgxIDI3LjU2ODIgMTA2LjM5NiAyNS42MDk0QzEwNS4xMTcgMjQuNTU4NSAxMDMuMzYyIDI0LjEzOCAxMDEuNzMyIDI0LjQ3NTJDMTAxLjQ4NiAyNC41MjYyIDEwMS4yNDUgMjQuMzY0OCAxMDEuMTk1IDI0LjExNDhDMTAxLjE0NSAyMy44NjQ3IDEwMS4zMDQgMjMuNjIwNyAxMDEuNTUgMjMuNTY5N1oiIGZpbGw9ImN1cnJlbnRjb2xvciIvPgo8cGF0aCBkPSJNMTA4Ljc0NSA0OS4xMjQ4QzEwOC44MDcgNDguODc3NSAxMDguNjYgNDguNjI1OSAxMDguNDE2IDQ4LjU2M0MxMDguMTcyIDQ4LjUgMTA3LjkyNSA0OC42NDk1IDEwNy44NjIgNDguODk2OEMxMDcuNTg3IDQ5Ljk5NCAxMDcuMTYzIDUwLjk4NDMgMTA2LjYyNSA1MS44OTYxQzEwNi40OTYgNTIuMTE1MSAxMDYuNTY2IDUyLjM5ODkgMTA2Ljc4MiA1Mi41Mjk5QzEwNi45OTggNTIuNjYxIDEwNy4yNzggNTIuNTg5NyAxMDcuNDA3IDUyLjM3MDdDMTA3Ljk4NiA1MS4zODgxIDEwOC40NDYgNTAuMzE1MiAxMDguNzQ1IDQ5LjEyNDhaIiBmaWxsPSJjdXJyZW50Y29sb3IiLz4KPHBhdGggZD0iTTEwNi41MTggNDIuNDE5NUMxMDYuNzY4IDQyLjQ0OTUgMTA2Ljk0NyA0Mi42NzkyIDEwNi45MTcgNDIuOTMyNkMxMDYuNDg3IDQ2LjYyMDMgMTA1LjUxNiA0OS45MDkyIDEwMy45NTkgNTIuNzYxOEMxMDMuODM3IDUyLjk4NSAxMDMuNTYgNTMuMDY1NyAxMDMuMzQgNTIuOTQyQzEwMy4xMiA1Mi44MTgzIDEwMy4wNCA1Mi41MzcxIDEwMy4xNjIgNTIuMzEzOUMxMDQuNjUzIDQ5LjU4MzkgMTA1LjU5NCA0Ni40MTQ0IDEwNi4wMTMgNDIuODI0QzEwNi4wNDIgNDIuNTcwNiAxMDYuMjY5IDQyLjM4OTUgMTA2LjUxOCA0Mi40MTk1WiIgZmlsbD0iY3VycmVudGNvbG9yIi8+CjxwYXRoIGQ9Ik0xMDYuNDI1IDI5LjU1NDdDMTA2LjEwOSAyNy44NDMxIDEwNC42NjEgMjYuNTMzOCAxMDIuOTA0IDI2LjUzMzhDMTAwLjUyNCAyNi41MzM4IDk4Ljg1NDcgMjguOTY4IDk5LjQ0MzEgMzEuMjMyOEMxMDAuNDM5IDM1LjIzMDYgMTAwLjYwMiAzOS4wODM1IDk5LjkyODEgNDIuNzk0NUw5OS45Mjc2IDQyLjc5NzJDOTkuMzQyOCA0Ni4xMjkgOTguMjE5NyA0OS4xMjY0IDk2LjY4NzcgNTEuNjY2M0M5Ni41NTY1IDUxLjg4MzkgOTYuNjIzOSA1Mi4xNjg0IDk2LjgzODQgNTIuMzAxNkM5Ny4wNTI4IDUyLjQzNDggOTcuMzMzMSA1Mi4zNjY0IDk3LjQ2NDQgNTIuMTQ4N0M5OS4wNTkgNDkuNTA0OSAxMDAuMjIgNDYuMzk4MyAxMDAuODI0IDQyLjk2MDZDMTAxLjUyNCAzOS4xMDY1IDEwMS4zNSAzNS4xMTg0IDEwMC4zMjUgMzEuMDA0TDEwMC4zMjQgMzAuOTk5MkM5OS44ODI4IDI5LjMwNSAxMDEuMTEzIDI3LjQ1NzkgMTAyLjkwNCAyNy40NTc5QzEwNC4xOTcgMjcuNDU3OSAxMDUuMjg4IDI4LjQyMjkgMTA1LjUyOSAyOS43MjE2QzEwNi4xOTIgMzMuNjIyNyAxMDYuNTM3IDM3LjI0MDMgMTA2LjI5MSA0MC4zNTVDMTA2LjI3MSA0MC42MDk0IDEwNi40NTggNDAuODMyMSAxMDYuNzA5IDQwLjg1MjVDMTA2Ljk1OSA0MC44NzI4IDEwNy4xNzkgNDAuNjgzMSAxMDcuMTk5IDQwLjQyODhDMTA3LjQ1NCAzNy4yMDAzIDEwNy4wOTQgMzMuNDkzNyAxMDYuNDI2IDI5LjU2MTJDMTA2LjQyNSAyOS41NTkgMTA2LjQyNSAyOS41NTY5IDEwNi40MjUgMjkuNTU0N1oiIGZpbGw9ImN1cnJlbnRjb2xvciIvPgo8cGF0aCBkPSJNMTAxLjU0NSA0OS41NjY3QzEwMS43NjkgNDkuNjgzNCAxMDEuODU3IDQ5Ljk2MTkgMTAxLjc0MiA1MC4xODg5TDEwMC41MzYgNTIuNTcxNUMxMDAuNDIxIDUyLjc5ODUgMTAwLjE0NiA1Mi44ODc5IDk5LjkyMjggNTIuNzcxM0M5OS42OTkyIDUyLjY1NDcgOTkuNjExIDUyLjM3NjEgOTkuNzI1OSA1Mi4xNDkxTDEwMC45MzIgNDkuNzY2NUMxMDEuMDQ3IDQ5LjUzOTYgMTAxLjMyMiA0OS40NTAxIDEwMS41NDUgNDkuNTY2N1oiIGZpbGw9ImN1cnJlbnRjb2xvciIvPgo8cGF0aCBkPSJNMTAzLjI0MyAzMC4wMDAyQzEwMy4xODUgMjkuNzUxOCAxMDIuOTQgMjkuNTk3NyAxMDIuNjk1IDI5LjY1NjFDMTAyLjQ1MSAyOS43MTQ1IDEwMi4yOTkgMjkuOTYzMiAxMDIuMzU2IDMwLjIxMTZDMTAzLjg5MiAzNi44NDQ0IDEwMy42ODEgNDIuNjY4NyAxMDEuODExIDQ3LjYzMDJDMTAxLjcyMSA0Ny44Njg2IDEwMS44MzggNDguMTM1NyAxMDIuMDczIDQ4LjIyNjlDMTAyLjMwOCA0OC4zMTggMTAyLjU3MSA0OC4xOTg3IDEwMi42NjEgNDcuOTYwNEMxMDQuNjExIDQyLjc4NzEgMTA0LjgwOSAzNi43Njc3IDEwMy4yNDMgMzAuMDAwMloiIGZpbGw9ImN1cnJlbnRjb2xvciIvPgo8L3N2Zz4K",
      windowsHello:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM2IiBoZWlnaHQ9IjU0IiB2aWV3Qm94PSIwIDAgMTM2IDU0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMzAuMDI1MSA1My45MDYyQzEyLjQ0MjcgNTMuOTA2MiAxLjYzNjgzIDM4LjMzODUgMS4wODczOCAzNy42MDU5Qy0wLjAxMTUyNiAzNS45NTc1IDAuMzU0Nzc0IDMzLjIxMDMgMi4wMDMxMyAzMi4xMTE0QzMuNjUxNDggMzEuMDEyNSA2LjAzMjQzIDMwLjgyOTMgNy4xMzEzMyAzMi40Nzc3QzcuMzE0NDggMzIuNjYwOCAxNi40NzIgNDUuNDgxMyAzMC4wMjUxIDQ1LjQ4MTNDNDMuNTc4MiA0NS40ODEzIDUyLjczNTcgMzIuNDc3NyA1Mi45MTg5IDMyLjQ3NzdDNTQuMDE3OCAzMC44MjkzIDU2LjM5ODcgMzEuMDEyNSA1OC4wNDcxIDMyLjExMTRDNTkuNjk1NCAzMy4yMTAzIDYwLjA2MTcgMzUuOTU3NSA1OC45NjI4IDM3LjYwNTlDNTguNDEzNCAzOC4zMzg1IDQ3LjYwNzUgNTMuOTA2MiAzMC4wMjUxIDUzLjkwNjJaIiBmaWxsPSJjdXJyZW50Y29sb3IiLz4KPHBhdGggZD0iTTE0LjI3NDIgMTguNTU4M0MxOC4zMjAyIDE4LjU1ODMgMjEuNjAwMiAxNS4yNzgzIDIxLjYwMDIgMTEuMjMyM0MyMS42MDAyIDcuMTg2MjEgMTguMzIwMiAzLjkwNjI1IDE0LjI3NDIgMy45MDYyNUMxMC4yMjgxIDMuOTA2MjUgNi45NDgxOCA3LjE4NjIxIDYuOTQ4MTggMTEuMjMyM0M2Ljk0ODE4IDE1LjI3ODMgMTAuMjI4MSAxOC41NTgzIDE0LjI3NDIgMTguNTU4M1oiIGZpbGw9ImN1cnJlbnRjb2xvciIvPgo8cGF0aCBkPSJNNDUuNzc2IDE4LjU1ODNDNDkuODIyMSAxOC41NTgzIDUzLjEwMiAxNS4yNzgzIDUzLjEwMiAxMS4yMzIzQzUzLjEwMiA3LjE4NjIxIDQ5LjgyMjEgMy45MDYyNSA0NS43NzYgMy45MDYyNUM0MS43MyAzLjkwNjI1IDM4LjQ1IDcuMTg2MjEgMzguNDUgMTEuMjMyM0MzOC40NSAxNS4yNzgzIDQxLjczIDE4LjU1ODMgNDUuNzc2IDE4LjU1ODNaIiBmaWxsPSJjdXJyZW50Y29sb3IiLz4KPGxpbmUgeDE9IjgwLjE4MjYiIHkxPSIyIiB4Mj0iODAuMTgyNiIgeTI9IjUyIiBzdHJva2U9ImN1cnJlbnRjb2xvciIvPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMjAwNF84MzYpIj4KPHBhdGggZD0iTTEwNi41NzkgMkg5OS42ODI2VjguOTM1NDhIMTA2LjU3OVYyWiIgZmlsbD0iY3VycmVudGNvbG9yIi8+CjxwYXRoIGQ9Ik0xMjAuNzA4IDJIMTEzLjgxMVY4LjkzNTQ4SDEyMC43MDhWMloiIGZpbGw9ImN1cnJlbnRjb2xvciIvPgo8cGF0aCBkPSJNMTM1LjMxNyAySDEyOC40MjFWOC45MzU0OEgxMzUuMzE3VjJaIiBmaWxsPSJjdXJyZW50Y29sb3IiLz4KPHBhdGggZD0iTTEwNi41NzkgMTYuMzlIOTkuNjgyNlYyMy4zMjU1SDEwNi41NzlWMTYuMzlaIiBmaWxsPSJjdXJyZW50Y29sb3IiLz4KPHBhdGggZD0iTTEyMC43MDggMTYuMzlIMTEzLjgxMVYyMy4zMjU1SDEyMC43MDhWMTYuMzlaIiBmaWxsPSJjdXJyZW50Y29sb3IiLz4KPHBhdGggZD0iTTEzNS4zMTcgMTYuMzlIMTI4LjQyMVYyMy4zMjU1SDEzNS4zMTdWMTYuMzlaIiBmaWxsPSJjdXJyZW50Y29sb3IiLz4KPHBhdGggZD0iTTEwNi41NzkgMzAuNjg5NEg5OS42ODI2VjM3LjYyNDhIMTA2LjU3OVYzMC42ODk0WiIgZmlsbD0iY3VycmVudGNvbG9yIi8+CjxwYXRoIGQ9Ik0xMjAuNzA4IDMwLjY4OTRIMTEzLjgxMVYzNy42MjQ4SDEyMC43MDhWMzAuNjg5NFoiIGZpbGw9ImN1cnJlbnRjb2xvciIvPgo8cGF0aCBkPSJNMTM1LjMxNyAzMC42ODk0SDEyOC40MjFWMzcuNjI0OEgxMzUuMzE3VjMwLjY4OTRaIiBmaWxsPSJjdXJyZW50Y29sb3IiLz4KPHBhdGggZD0iTTEyMC43MDggNDUuMDY0NUgxMTMuODExVjUySDEyMC43MDhWNDUuMDY0NVoiIGZpbGw9ImN1cnJlbnRjb2xvciIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzIwMDRfODM2Ij4KPHJlY3Qgd2lkdGg9IjM1LjYzNDgiIGhlaWdodD0iNTAiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5OS42ODI2IDIpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==",
      genericBiometrics:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYyIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTYyIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMzEuMzI5OCAyNS4xNDM0QzMyLjc2NSAyNi42MTE5IDMzLjU3NzQgMjguMzkzMSAzNC4xNjQzIDMwLjg1MzVMMzQuNDIwNiAzMi4wMjIxTDM0Ljg3OTQgMzQuNDQ5MkMzNS4xMDc1IDM1LjU4OTcgMzUuMjg0MyAzNi4yMjI3IDM1LjUzMDQgMzYuNzc2M0MzNi4yOTkyIDM4LjUwMTEgMzcuNjU3NSA0MC4yNzIgMzkuNjE4MSA0Mi4wNjg2QzM5LjgwOSA0Mi4yMzc4IDM5Ljk2NDMgNDIuNDQzMyA0MC4wNzQ5IDQyLjY3MzFDNDAuMTg1NiA0Mi45MDI5IDQwLjI0OTQgNDMuMTUyNCA0MC4yNjI3IDQzLjQwNzFDNDAuMjc1OSA0My42NjE4IDQwLjIzODMgNDMuOTE2NiA0MC4xNTIxIDQ0LjE1NjdDNDAuMDY1OSA0NC4zOTY3IDM5LjkzMjggNDQuNjE3MiAzOS43NjA2IDQ0LjgwNTNDMzkuNTg4MyA0NC45OTM0IDM5LjM4MDMgNDUuMTQ1MyAzOS4xNDg3IDQ1LjI1MjJDMzguOTE3MiA0NS4zNTkxIDM4LjY2NjcgNDUuNDE4OCAzOC40MTE4IDQ1LjQyNzlDMzguMTU2OSA0NS40MzcgMzcuOTAyNyA0NS4zOTUzIDM3LjY2NDEgNDUuMzA1MkMzNy40MjU1IDQ1LjIxNTEgMzcuMjA3MiA0NS4wNzg1IDM3LjAyMiA0NC45MDMyQzM0LjY5NDkgNDIuNzcwOCAzMy4wMjM5IDQwLjU4OTggMzIuMDE5MiAzOC4zNDIyQzMxLjYzNzMgMzcuNDg2MiAzMS40MDQxIDM2LjY3NjMgMzEuMTMyNSAzNS4zMThMMzAuNTk0MyAzMi40OTg4TDMwLjU1ODQgMzIuMzQ1MUMzMC4wOTcxIDMwLjE2NjYgMjkuNTIzIDI4Ljc5NTUgMjguNTc5OCAyNy44MjkzQzI2Ljc1MjUgMjUuOTU4NCAyMi41MzkxIDI2LjQ1MyAyMS40MTE1IDI4LjIzNDJDMTkuOTcxMSAzMC41MTI2IDE5LjYwNDYgMzQuMzc0OSAyMC43NDc3IDM4LjI3MDRDMjEuNjMxOSA0MS4yNzkzIDIyLjgwMzEgNDQuMjQxOSAyNC4yNjM5IDQ3LjE1NTlDMjQuMzg3OCA0Ny4zODI0IDI0LjQ2NDcgNDcuNjMxNiAyNC40OTAxIDQ3Ljg4ODVDMjQuNTE1NSA0OC4xNDU0IDI0LjQ4OSA0OC40MDQ3IDI0LjQxMiA0OC42NTExQzI0LjMzNSA0OC44OTc1IDI0LjIwOTEgNDkuMTI1OSAyNC4wNDIgNDkuMzIyNkMyMy44NzQ4IDQ5LjUxOTMgMjMuNjY5NyA0OS42ODAzIDIzLjQzOSA0OS43OTZDMjMuMjA4MiA0OS45MTE4IDIyLjk1NjUgNDkuOTc5OCAyMi42OTg5IDQ5Ljk5NjFDMjIuNDQxMyA1MC4wMTI1IDIyLjE4MyA0OS45NzY3IDIxLjkzOTUgNDkuODkxMUMyMS42OTU5IDQ5LjgwNTQgMjEuNDcyMiA0OS42NzE2IDIxLjI4MTUgNDkuNDk3NkMyMS4wOTA4IDQ5LjMyMzUgMjAuOTM3MiA0OS4xMTI5IDIwLjgyOTcgNDguODc4MkMxOS4yOSA0NS44MjIyIDE4LjAyODMgNDIuNjM0IDE3LjA1OTcgMzkuMzUyQzE1LjYxOTQgMzQuNDUxNyAxNi4wOTYxIDI5LjQ0OSAxOC4xNjE3IDI2LjE3ODhDMjAuNjA0MiAyMi4zMTkxIDI3Ljc1MiAyMS40Nzg1IDMxLjMyOTggMjUuMTQzNFpNMjUuMjY2IDMxLjA3NjRDMjUuNTE4NSAzMS4wNjc5IDI1Ljc3MDIgMzEuMTA5MiAyNi4wMDY2IDMxLjE5NzlDMjYuMjQzMSAzMS4yODY3IDI2LjQ1OTggMzEuNDIxMiAyNi42NDQzIDMxLjU5MzhDMjYuODI4NyAzMS43NjY0IDI2Ljk3NzQgMzEuOTczNiAyNy4wODE3IDMyLjIwMzZDMjcuMTg2IDMyLjQzMzcgMjcuMjQ0IDMyLjY4MjEgMjcuMjUyMyAzMi45MzQ1QzI3LjM4MzkgMzYuODkzNiAyOC42NzAzIDQwLjcyNzggMzAuOTUzMSA0My45NjUxTDMxLjQ1NTQgNDQuNjQ2OUwzMi4yMjQyIDQ1LjY0NjRDMzIuNTE5MiA0Ni4wMzA4IDMyLjY1ODEgNDYuNTEyNCAzMi42MTMxIDQ2Ljk5NDhDMzIuNTY4MiA0Ny40NzcyIDMyLjM0MjcgNDcuOTI0OCAzMS45ODE4IDQ4LjI0ODFDMzEuNjIxIDQ4LjU3MTQgMzEuMTUxMyA0OC43NDY1IDMwLjY2NjkgNDguNzM4M0MzMC4xODI1IDQ4LjczMDIgMjkuNzE5IDQ4LjUzOTQgMjkuMzY5MiA0OC4yMDQxTDI5LjE3OTUgNDcuOTkxNEwyOC40MTA3IDQ2Ljk5MTlDMjUuMzI3OCA0Mi45ODYzIDIzLjU3ODkgMzguMTE0NSAyMy40MTA1IDMzLjA2MjdDMjMuMzkzMiAzMi41NTMyIDIzLjU3OSAzMi4wNTc4IDIzLjkyNyAzMS42ODUzQzI0LjI3NDkgMzEuMzEyOCAyNC43NTY2IDMxLjA5MzggMjUuMjY2IDMxLjA3NjRaTTE1Ljc2MDMgMTguMDQ5M0MyMS4xNzMxIDE0LjA0MzUgMjguMjUxOCAxNC4yNjE0IDMzLjAxMzYgMTcuMzIxNUMzNS4zOTcxIDE4Ljg1NDEgMzcuMjAzOSAyMC42NDA0IDM4LjQwMzMgMjIuNjg1NkMzOC42NjE2IDIzLjEyNTMgMzguNzM0NyAyMy42NDk3IDM4LjYwNjMgMjQuMTQzM0MzOC40NzggMjQuNjM2OSAzOC4xNTg4IDI1LjA1OTQgMzcuNzE5MSAyNS4zMTc2QzM3LjI3OTMgMjUuNTc1OSAzNi43NTQ5IDI1LjY0ODkgMzYuMjYxMyAyNS41MjA2QzM1Ljc2NzcgMjUuMzkyMyAzNS4zNDUzIDI1LjA3MzEgMzUuMDg3IDI0LjYzMzRDMzQuMjEwNSAyMy4xMzY2IDMyLjgzNjggMjEuNzc1NyAzMC45MzUxIDIwLjU1NThDMjcuNDQ0NSAxOC4zMTA3IDIyLjA5MzIgMTguMTQ2NyAxOC4wNDkgMjEuMTQwMkMxMy44NDg0IDI0LjI0ODkgMTIuMDggMjkuNTc0NiAxMi42MDggMzUuMTg5OEMxMi45MDI3IDM4LjMzNDUgMTMuODQ4NCA0MS41MTI1IDE1LjQ2MDUgNDQuNzM0QzE1LjY4MzUgNDUuMTg5NSAxNS43MTc0IDQ1LjcxNDggMTUuNTU0OSA0Ni4xOTUyQzE1LjM5MjMgNDYuNjc1NyAxNS4wNDY1IDQ3LjA3MjQgMTQuNTkyNyA0Ny4yOTg5QzE0LjEzODkgNDcuNTI1NSAxMy42MTQgNDcuNTYzNSAxMy4xMzIzIDQ3LjQwNDdDMTIuNjUwNiA0Ny4yNDU5IDEyLjI1MTIgNDYuOTAzMSAxMi4wMjExIDQ2LjQ1MTFDMTAuMjA0IDQyLjgxOTUgOS4xMTk5IDM5LjE4MDMgOC43NzkwNCAzNS41NDg3QzguMTM4MzIgMjguNzA1OCAxMC4zNDI0IDIyLjA2MDIgMTUuNzYwMyAxOC4wNDkzWk0zOS4yODc1IDI5LjA3MjNDMzkuNzk2MiAyOS4wNDY0IDQwLjI5NDMgMjkuMjIzNiA0MC42NzI1IDI5LjU2NDhDNDEuMDUwNyAyOS45MDU5IDQxLjI3OCAzMC4zODMzIDQxLjMwNDUgMzAuODkxOUM0MS4zODQgMzIuNDM5OSA0MS43NjU4IDMzLjcwMzQgNDIuNDM3MyAzNC43MjA4QzQzLjAwMTIgMzUuNTc0MyA0My40OTgzIDM2LjA2NjQgNDMuODgwMiAzNi4yNTg2TDQ0LjAzNjYgMzYuMzIwMUM0NC41MjQ2IDM2LjQ2NzYgNDQuOTM0IDM2LjgwMjkgNDUuMTc0OCAzNy4yNTIzQzQ1LjQxNTYgMzcuNzAxNyA0NS40NjgxIDM4LjIyODMgNDUuMzIwNiAzOC43MTY0QzQ1LjE3MzEgMzkuMjA0NCA0NC44Mzc3IDM5LjYxMzkgNDQuMzg4MyAzOS44NTQ3QzQzLjkzODkgNDAuMDk1NSA0My40MTIzIDQwLjE0NzkgNDIuOTI0MyA0MC4wMDA0QzQxLjUyMjQgMzkuNTc3NSA0MC4zMTc4IDM4LjQ5MzQgMzkuMjI2IDM2LjgzNTJDMzguMTYyNCAzNS4yMjA2IDM3LjU4MDcgMzMuMjkzMyAzNy40NjUzIDMxLjA5MThDMzcuNDUyMiAzMC44Mzk3IDM3LjQ4ODkgMzAuNTg3NSAzNy41NzMyIDMwLjM0OTZDMzcuNjU3NSAzMC4xMTE3IDM3Ljc4NzkgMjkuODkyNyAzNy45NTY5IDI5LjcwNTJDMzguMTI1OSAyOS41MTc2IDM4LjMzMDEgMjkuMzY1MiAzOC41NTggMjkuMjU2NkMzOC43ODU5IDI5LjE0OCAzOS4wMzI5IDI5LjA4NTQgMzkuMjg1IDI5LjA3MjNIMzkuMjg3NVpNMjAuMTg2NCA5LjYyMjU4QzIwLjI5IDkuODUyOTQgMjAuMzQ3MyAxMC4xMDE1IDIwLjM1NDggMTAuMzUzOUMyMC4zNjIzIDEwLjYwNjQgMjAuMzIgMTAuODU3OSAyMC4yMzAyIDExLjA5NEMyMC4xNDA1IDExLjMzMDEgMjAuMDA1MSAxMS41NDYzIDE5LjgzMTggMTEuNzNDMTkuNjU4NSAxMS45MTM4IDE5LjQ1MDcgMTIuMDYxNiAxOS4yMjAyIDEyLjE2NUMxNC41MDQ1IDE0LjI4NyAxMS4wMzQ0IDE3LjMxMTIgOC43NTU5NyAyMS4yNThDNS45MDM0OSAyNi4xOTkzIDUuMTMyMDcgMzEuOTczNCA1Ljc3Mjc5IDM2Ljg0MDNDNS44MDU3NyAzNy4wOTA3IDUuNzg5MTEgMzcuMzQ1MiA1LjcyMzc2IDM3LjU4OTJDNS42NTg0IDM3LjgzMzEgNS41NDU2NCAzOC4wNjE4IDUuMzkxOSAzOC4yNjIyQzUuMDgxNDEgMzguNjY2OSA0LjYyMjg3IDM4LjkzMTcgNC4xMTcxNiAzOC45OTgzQzMuODY2NzYgMzkuMDMxMyAzLjYxMjMyIDM5LjAxNDYgMy4zNjgzNSAzOC45NDkzQzMuMTI0MzkgMzguODgzOSAyLjg5NTY5IDM4Ljc3MTEgMi42OTUzIDM4LjYxNzRDMi4yOTA2MSAzOC4zMDY5IDIuMDI1ODMgMzcuODQ4NCAxLjk1OTIyIDM3LjM0MjdDMS4yMjExMSAzMS43MDE4IDIuMTAwMTggMjUuMDk3MiA1LjQyNjggMTkuMzM1OUM4LjEyNTUxIDE0LjY2ODkgMTIuMjE1OSAxMS4xMDM5IDE3LjY0NjYgOC42NTg5NEMxNy44NzY4IDguNTU1MjMgMTguMTI1MiA4LjQ5Nzg4IDE4LjM3NzUgOC40OTAxOUMxOC42Mjk5IDguNDgyNDkgMTguODgxMyA4LjUyNDU4IDE5LjExNzQgOC42MTQwN0MxOS4zNTM1IDguNzAzNTYgMTkuNTY5NyA4LjgzODY4IDE5Ljc1MzUgOS4wMTE3M0MxOS45Mzc0IDkuMTg0NzcgMjAuMDg1NCA5LjM5MjM0IDIwLjE4OSA5LjYyMjU4SDIwLjE4NjRaTTI2LjE5MTIgNy42MDU2QzMwLjg4MTMgNy43MDA0MiAzNS41NTA5IDkuODU1OCA0MC4xODIgMTMuOTc2OUM0NC44NTQxIDE4LjEzMzkgNDcuNjY4MiAyMy43ODUgNDguNjI0MSAzMC44NDA2QzQ4LjY2MzkgMzEuMDkzNCA0OC42NTI4IDMxLjM1MTUgNDguNTkxNiAzMS41OTk5QzQ4LjUzMDMgMzEuODQ4MyA0OC40MjAxIDMyLjA4MTkgNDguMjY3NCAzMi4yODcyQzQ4LjExNDcgMzIuNDkyNCA0Ny45MjI1IDMyLjY2NTEgNDcuNzAyMiAzMi43OTUxQzQ3LjQ4MTggMzIuOTI1MSA0Ny4yMzc4IDMzLjAwOTggNDYuOTg0MyAzMy4wNDQzQzQ2LjczMDggMzMuMDc4OCA0Ni40NzI5IDMzLjA2MjMgNDYuMjI1OSAzMi45OTU4QzQ1Ljk3ODggMzIuOTI5MyA0NS43NDc1IDMyLjgxNDIgNDUuNTQ1NiAzMi42NTcyQzQ1LjM0MzYgMzIuNTAwMSA0NS4xNzUgMzIuMzA0NCA0NS4wNDk3IDMyLjA4MTNDNDQuOTI0MyAzMS44NTgzIDQ0Ljg0NDggMzEuNjEyNSA0NC44MTU3IDMxLjM1ODNDNDMuOTc3NiAyNS4xNzY3IDQxLjU4MzkgMjAuMzcxMyAzNy42MjY4IDE2Ljg0OTlDMzMuNjI4NyAxMy4yOTI2IDI5Ljc5NzIgMTEuNTI0MiAyNi4xMTQzIDExLjQ0OTlDMjUuODYxOSAxMS40NDQ5IDI1LjYxMyAxMS4zOTAxIDI1LjM4MTcgMTEuMjg4OUMyNS4xNTA0IDExLjE4NzYgMjQuOTQxNCAxMS4wNDE4IDI0Ljc2NjQgMTAuODU5N0MyNC41OTE1IDEwLjY3NzcgMjQuNDU0MiAxMC40NjMgMjQuMzYyMiAxMC4yMjc4QzI0LjI3MDMgOS45OTI2OCAyNC4yMjU2IDkuNzQxNzMgMjQuMjMwNiA5LjQ4OTMxQzI0LjIzNTcgOS4yMzY4OSAyNC4yOTA0IDguOTg3OTMgMjQuMzkxNyA4Ljc1NjY2QzI0LjQ5MjkgOC41MjUzOCAyNC42Mzg3IDguMzE2MzIgMjQuODIwOCA4LjE0MTRDMjUuMDAyOSA3Ljk2NjQ4IDI1LjIxNzYgNy44MjkxMyAyNS40NTI3IDcuNzM3MkMyNS42ODc5IDcuNjQ1MjcgMjUuOTM4OCA3LjYwMDU1IDI2LjE5MTIgNy42MDU2Wk04LjU4MTcgNy42NDE0OEM4Ljc1MDA1IDcuODMgOC44Nzk1OCA4LjA0OTg4IDguOTYyODUgOC4yODg1MkM5LjA0NjEyIDguNTI3MTYgOS4wODE1MSA4Ljc3OTg5IDkuMDY2OTkgOS4wMzIyM0M5LjA1MjQ3IDkuMjg0NTcgOC45ODgzMiA5LjUzMTU2IDguODc4MjIgOS43NTkwOEM4Ljc2ODEyIDkuOTg2NTkgOC42MTQyMyAxMC4xOTAyIDguNDI1MzYgMTAuMzU4MUM3LjczNTk1IDEwLjk2ODEgNy4wMTU3OCAxMS42OTg1IDYuMjYyMjkgMTIuNTQ2OEM1LjU1NDk0IDEzLjM0NjQgNC44MjcwOCAxNC4zODE4IDQuMDk0MSAxNS42NTU2QzMuOTY4ODEgMTUuODc2IDMuODAxMTcgMTYuMDY5NCAzLjYwMDgyIDE2LjIyNDdDMy40MDA0OCAxNi4zOCAzLjE3MTQgMTYuNDk0MiAyLjkyNjc2IDE2LjU2MDZDMi42ODIxMiAxNi42MjcgMi40MjY3NiAxNi42NDQ0IDIuMTc1MzggMTYuNjExN0MxLjkyNCAxNi41NzkgMS42ODE1NyAxNi40OTY5IDEuNDYyMDMgMTYuMzcwMkMxLjI0MjUgMTYuMjQzNCAxLjA1MDIxIDE2LjA3NDUgMC44OTYyMzEgMTUuODczMUMwLjc0MjI1IDE1LjY3MTggMC42Mjk2MiAxNS40NDE5IDAuNTY0ODI3IDE1LjE5NjlDMC41MDAwMzMgMTQuOTUxOCAwLjQ4NDM1NSAxNC42OTYzIDAuNTE4Njk2IDE0LjQ0NTJDMC41NTMwMzcgMTQuMTk0IDAuNjM2NzE4IDEzLjk1MjEgMC43NjQ5MjEgMTMuNzMzNEMxLjUxMTkxIDEyLjQwMzUgMi4zOTAyMyAxMS4xNTE3IDMuMzg2NzUgOS45OTY3NkM0LjIzNTA2IDkuMDM4MjQgNS4wNjI4NyA4LjIwMjc1IDUuODY3NjEgNy40ODUxNEM2LjA1NjA4IDcuMzE3MTggNi4yNzU3OCA3LjE4Nzk4IDYuNTE0MTggNy4xMDQ5M0M2Ljc1MjU4IDcuMDIxODkgNy4wMDUgNi45ODY2MSA3LjI1NzA0IDcuMDAxMTNDNy41MDkwNyA3LjAxNTY1IDcuNzU1NzcgNy4wNzk2NyA3Ljk4MzA2IDcuMTg5NTRDOC4yMTAzNSA3LjI5OTQxIDguNDEzNzcgNy40NTI5OCA4LjU4MTcgNy42NDE0OFpNMjUuNDU4MyAwLjAzOTk4QzMxLjA3ODYgMC4zMDM5NTYgMzUuNzg2NiAxLjg0MTY4IDM5LjYzMSA0LjgwOTVDNDAuMDM0NyA1LjEyMTE1IDQwLjI5ODEgNS41ODA0MiA0MC4zNjMzIDYuMDg2MjlDNDAuNDI4NCA2LjU5MjE1IDQwLjI4OTkgNy4xMDMxNyAzOS45NzgyIDcuNTA2OTNDMzkuNjY2NiA3LjkxMDY4IDM5LjIwNzMgOC4xNzQwOSAzOC43MDE0IDguMjM5MjJDMzguMTk1NiA4LjMwNDM0IDM3LjY4NDYgOC4xNjU4NSAzNy4yODA4IDcuODU0MkMzNC4wOSA1LjM4ODcxIDMwLjE0MzIgNC4xMDk4MyAyNS4yNzg4IDMuODgxNzNDMjAuNDAxNyAzLjY1MTA4IDE2LjQwODcgNC42MDk1OSAxMy4xOTc0IDYuMzkwNzlDMTIuMjEzMyA2LjkzNjY4IDExLjEwODcgNi42NjI0NiAxMC41NTI2IDUuNzU3NzZDMTAuNDE3IDUuNTQzNzUgMTAuMzI1NyA1LjMwNDcyIDEwLjI4NDEgNS4wNTQ4QzEwLjI0MjUgNC44MDQ4OSAxMC4yNTE1IDQuNTQ5MTcgMTAuMzEwNSA0LjMwMjc5QzEwLjM2OTYgNC4wNTY0MSAxMC40Nzc0IDMuODI0MzggMTAuNjI3NyAzLjYyMDQzQzEwLjc3OCAzLjQxNjQ4IDEwLjk2NzcgMy4yNDQ3NiAxMS4xODU2IDMuMTE1NDNDMTUuMTE5NiAwLjc5ODU5MiAxOS44NTMyIC0wLjIyMTQzNCAyNS40NjA4IDAuMDM5OThIMjUuNDU4M1oiIGZpbGw9ImN1cnJlbnRjb2xvciIvPgo8bGluZSB4MT0iNjkuMTQ3NSIgeTE9Ii0yLjE4NTU3ZS0wOCIgeDI9IjY5LjE0NzUiIHkyPSI1MCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzIwMTRfMTE0MSkiPgo8cGF0aCBkPSJNMTYwLjEzMiAxLjE3MTg4QzE2MC4yNCAxLjE3MTg4IDE2MC4zMjcgMS4yNTk0OSAxNjAuMzI3IDEuMzY3MTlWNDguNjMyOEMxNjAuMzI3IDQ4Ljc0MDUgMTYwLjI0IDQ4LjgyODEgMTYwLjEzMiA0OC44MjgxSDkwLjAxNDdDODkuOTA3IDQ4LjgyODEgODkuODE5NCA0OC43NDA1IDg5LjgxOTQgNDguNjMyOFYxLjM2NzE5Qzg5LjgxOTQgMS4yNTk0OSA4OS45MDcgMS4xNzE4OCA5MC4wMTQ3IDEuMTcxODhIMTYwLjEzMlpNOTguMzE1NSAzLjQxQzk3Ljk0MjQgMi43NzI3MiA5Ny4yNTAzIDIuMzQzNzUgOTYuNDYgMi4zNDM3NUM5NS42Njk3IDIuMzQzNzUgOTQuOTc3NyAyLjc3MjcyIDk0LjYwNDYgMy40MUM5NC4yMzE0IDIuNzcyNzIgOTMuNTM5NCAyLjM0Mzc1IDkyLjc0OTEgMi4zNDM3NUM5MS41NjQ0IDIuMzQzNzUgOTAuNjAwNiAzLjMwNzUzIDkwLjYwMDYgNC40OTIxOUM5MC42MDA2IDUuNjc2ODQgOTEuNTY0NCA2LjY0MDYyIDkyLjc0OTEgNi42NDA2MkM5My41Mzk0IDYuNjQwNjIgOTQuMjMxNCA2LjIxMTY2IDk0LjYwNDYgNS41NzQzOEM5NC45Nzc3IDYuMjExNjYgOTUuNjY5NyA2LjY0MDYyIDk2LjQ2IDYuNjQwNjJDOTcuMjUwMyA2LjY0MDYyIDk3Ljk0MjQgNi4yMTE2NiA5OC4zMTU1IDUuNTc0MzhDOTguNjg4NiA2LjIxMTY2IDk5LjM4MDcgNi42NDA2MiAxMDAuMTcxIDYuNjQwNjJDMTAxLjM1NiA2LjY0MDYyIDEwMi4zMTkgNS42NzY4NCAxMDIuMzE5IDQuNDkyMTlDMTAyLjMxOSAzLjMwNzUzIDEwMS4zNTYgMi4zNDM3NSAxMDAuMTcxIDIuMzQzNzVDOTkuMzgwNyAyLjM0Mzc1IDk4LjY4ODYgMi43NzI3MiA5OC4zMTU1IDMuNDFaTTE2MC4xMzIgMC4zOTA2MjVIOTAuMDE0N0M4OS40NzU2IDAuMzkwNjI1IDg5LjAzODEgMC44MjgxMjUgODkuMDM4MSAxLjM2NzE5VjQ4LjYzMjhDODkuMDM4MSA0OS4xNzE5IDg5LjQ3NTYgNDkuNjA5NCA5MC4wMTQ3IDQ5LjYwOTRIMTYwLjEzMkMxNjAuNjcxIDQ5LjYwOTQgMTYxLjEwOCA0OS4xNzE5IDE2MS4xMDggNDguNjMyOFYxLjM2NzE5QzE2MS4xMDggMC44MjgxMjUgMTYwLjY3MSAwLjM5MDYyNSAxNjAuMTMyIDAuMzkwNjI1Wk0xMDAuMTcxIDUuODU5MzhDOTkuNDE1MSA1Ljg1OTM4IDk4LjgwMzggNS4yNDgwNSA5OC44MDM4IDQuNDkyMTlDOTguODAzOCAzLjczNjMzIDk5LjQxNTEgMy4xMjUgMTAwLjE3MSAzLjEyNUMxMDAuOTI3IDMuMTI1IDEwMS41MzggMy43MzYzMyAxMDEuNTM4IDQuNDkyMTlDMTAxLjUzOCA1LjI0ODA1IDEwMC45MjcgNS44NTkzOCAxMDAuMTcxIDUuODU5MzhaTTk2LjQ2IDUuODU5MzhDOTUuNzA0MiA1Ljg1OTM4IDk1LjA5MjggNS4yNDgwNSA5NS4wOTI4IDQuNDkyMTlDOTUuMDkyOCAzLjczNjMzIDk1LjcwNDIgMy4xMjUgOTYuNDYgMy4xMjVDOTcuMjE1OSAzLjEyNSA5Ny44MjcyIDMuNzM2MzMgOTcuODI3MiA0LjQ5MjE5Qzk3LjgyNzIgNS4yNDgwNSA5Ny4yMTU5IDUuODU5MzggOTYuNDYgNS44NTkzOFpNOTIuNzQ5MSA1Ljg1OTM4QzkxLjk5MzIgNS44NTkzOCA5MS4zODE5IDUuMjQ4MDUgOTEuMzgxOSA0LjQ5MjE5QzkxLjM4MTkgMy43MzYzMyA5MS45OTMyIDMuMTI1IDkyLjc0OTEgMy4xMjVDOTMuNTA0OSAzLjEyNSA5NC4xMTYzIDMuNzM2MzMgOTQuMTE2MyA0LjQ5MjE5Qzk0LjExNjMgNS4yNDgwNSA5My41MDQ5IDUuODU5MzggOTIuNzQ5MSA1Ljg1OTM4WiIgZmlsbD0iY3VycmVudGNvbG9yIi8+CjxwYXRoIGQ9Ik0xNjAuMTMyIDAuMzkwNjI1SDkwLjAxNDdDODkuNDc1NiAwLjM5MDYyNSA4OS4wMzgxIDAuODI4MTIzIDg5LjAzODEgMS4zNjcxOVY4LjM5ODQ0SDE2MS4xMDhWMS4zNjcxOUMxNjEuMTA4IDAuODI4MTIzIDE2MC42NzEgMC4zOTA2MjUgMTYwLjEzMiAwLjM5MDYyNVpNOTIuNzQ5MSA1Ljg1OTM4QzkxLjk5MzIgNS44NTkzOCA5MS4zODE5IDUuMjQ4MDUgOTEuMzgxOSA0LjQ5MjE5QzkxLjM4MTkgMy43MzYzMyA5MS45OTMyIDMuMTI1IDkyLjc0OTEgMy4xMjVDOTMuNTA0OSAzLjEyNSA5NC4xMTYzIDMuNzM2MzMgOTQuMTE2MyA0LjQ5MjE5Qzk0LjExNjMgNS4yNDgwNSA5My41MDQ5IDUuODU5MzggOTIuNzQ5MSA1Ljg1OTM4Wk05Ni40NiA1Ljg1OTM4Qzk1LjcwNDIgNS44NTkzOCA5NS4wOTI4IDUuMjQ4MDUgOTUuMDkyOCA0LjQ5MjE5Qzk1LjA5MjggMy43MzYzMyA5NS43MDQyIDMuMTI1IDk2LjQ2IDMuMTI1Qzk3LjIxNTkgMy4xMjUgOTcuODI3MiAzLjczNjMzIDk3LjgyNzIgNC40OTIxOUM5Ny44MjcyIDUuMjQ4MDUgOTcuMjE1OSA1Ljg1OTM4IDk2LjQ2IDUuODU5MzhaTTEwMC4xNzEgNS44NTkzOEM5OS40MTUxIDUuODU5MzggOTguODAzOCA1LjI0ODA1IDk4LjgwMzggNC40OTIxOUM5OC44MDM4IDMuNzM2MzMgOTkuNDE1MSAzLjEyNSAxMDAuMTcxIDMuMTI1QzEwMC45MjcgMy4xMjUgMTAxLjUzOCAzLjczNjMzIDEwMS41MzggNC40OTIxOUMxMDEuNTM4IDUuMjQ4MDUgMTAwLjkyNyA1Ljg1OTM4IDEwMC4xNzEgNS44NTkzOFoiIGZpbGw9ImN1cnJlbnRjb2xvciIvPgo8cGF0aCBkPSJNMTAzLjM3NSAyNC43Nzg4VjI4Ljk0MTMiIHN0cm9rZT0iY3VycmVudGNvbG9yIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik05OC45NTAzIDI4LjEwODlMMTAzLjM4NCAyOC44OTA3IiBzdHJva2U9ImN1cnJlbnRjb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTA3Ljc5OSAyOC4xMDg5TDEwMy4zNjUgMjguODkwNyIgc3Ryb2tlPSJjdXJyZW50Y29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTEwMC41OTYgMzMuMjI3N0wxMDMuMzc4IDI4Ljk0MzYiIHN0cm9rZT0iY3VycmVudGNvbG9yIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMDYuMDc3IDMzLjI3NDlMMTAzLjQ0NyAyOC44OTY0IiBzdHJva2U9ImN1cnJlbnRjb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTE3LjM4OCAyNC43Nzg4VjI4Ljk0MTMiIHN0cm9rZT0iY3VycmVudGNvbG9yIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMTIuOTY0IDI4LjEwODlMMTE3LjM5OCAyOC44OTA3IiBzdHJva2U9ImN1cnJlbnRjb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTIxLjgxMyAyOC4xMDg5TDExNy4zNzkgMjguODkwNyIgc3Ryb2tlPSJjdXJyZW50Y29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTExNC42MSAzMy4yMjc3TDExNy4zOTIgMjguOTQzNiIgc3Ryb2tlPSJjdXJyZW50Y29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTEyMC4wOTEgMzMuMjc0OUwxMTcuNDYgMjguODk2NCIgc3Ryb2tlPSJjdXJyZW50Y29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTEzMS40MDIgMjQuNzc4OFYyOC45NDEzIiBzdHJva2U9ImN1cnJlbnRjb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTI2Ljk3OCAyOC4xMDg5TDEzMS40MTEgMjguODkwNyIgc3Ryb2tlPSJjdXJyZW50Y29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTEzNS44MjYgMjguMTA4OUwxMzEuMzkyIDI4Ljg5MDciIHN0cm9rZT0iY3VycmVudGNvbG9yIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMjguNjIzIDMzLjIyNzdMMTMxLjQwNSAyOC45NDM2IiBzdHJva2U9ImN1cnJlbnRjb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTM0LjEwNSAzMy4yNzQ5TDEzMS40NzQgMjguODk2NCIgc3Ryb2tlPSJjdXJyZW50Y29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTE0MC45OTEgMzMuMjc0OUgxNTEuMTQ4IiBzdHJva2U9ImN1cnJlbnRjb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzIwMTRfMTE0MSI+CjxyZWN0IHdpZHRoPSI3Mi44NTE2IiBoZWlnaHQ9IjUwIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODguNjQ3NSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",
      emailFailed:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA2MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMyLjI5OTMgMzcuNjI3OEg2LjY0NDZWMTAuNzUwOEwyOS4yMjMgMjQuMTg5M0w1MS44MDE0IDEwLjc1MDhWMjQuNDMxMkM1My44MzM0IDI0Ljc1MzcgNTUuNzI0NCAyNS40MjU3IDU3LjQ0NiAyNi4zNjY0VjUuMzc1NEM1Ny40NDYgMi40MTg5MyA1NC45MDU5IDAgNTEuODAxNCAwSDYuNjQ0NkMzLjU0MDA3IDAgMSAyLjQxODkzIDEgNS4zNzU0VjM3LjYyNzhDMSA0MC41ODQzIDMuNTQwMDcgNDMuMDAzMiA2LjY0NDYgNDMuMDAzMkgzMi4yOTkzQzMyLjE1ODIgNDIuMTE2MyAzMi4wNDUzIDQxLjIyOTQgMzIuMDQ1MyA0MC4zMTU1QzMyLjA0NTMgMzkuNDAxNyAzMi4xNTgyIDM4LjUxNDggMzIuMjk5MyAzNy42Mjc4Wk01MS44MDE0IDUuMzc1NEwyOS4yMjMgMTguODEzOUw2LjY0NDYgNS4zNzU0SDUxLjgwMTRaTTUyLjk1ODUgNDAuMzE1NUw1OC45NyA0Ni4wMTM1TDU0Ljk2MjMgNDkuODNMNDguOTc5MSA0NC4xMDUyTDQyLjk5NTggNDkuODNMMzkuMDE2NCA0Ni4wMTM1TDQ0Ljk5OTYgNDAuMzE1NUwzOS4wMTY0IDM0LjYxNzZMNDIuOTk1OCAzMC44Mjc5TDQ4Ljk3OTEgMzYuNTI1OUw1NC45NjIzIDMwLjgyNzlMNTguOTcgMzQuNjE3Nkw1Mi45NTg1IDQwLjMxNTVaIiBmaWxsPSIjRkYwMDAwIi8+Cjwvc3ZnPgo=",
      emailSuccess:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNTQiIHZpZXdCb3g9IjAgMCA2MCA1NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzUzMF8xNDQzKSI+CjxwYXRoIGQ9Ik01MS43MTkxIDQuMDY3NzVINy41NTQ0NkM0LjUxODE0IDQuMDY3NzUgMi4wNjE0OCA2LjU1OTI3IDIuMDYxNDggOS42MDQ0N0wyLjAzMzg3IDQyLjgyNDhDMi4wMzM4NyA0NS44NyA0LjUxODE0IDQ4LjM2MTUgNy41NTQ0NiA0OC4zNjE1SDI5LjYzNjhWNDIuODI0OEg3LjU1NDQ2VjE1LjE0MTJMMjkuNjM2OCAyOC45ODNMNTEuNzE5MSAxNS4xNDEyVjI4Ljk4M0g1Ny4yMzk3VjkuNjA0NDdDNTcuMjM5NyA2LjU1OTI3IDU0Ljc1NTQgNC4wNjc3NSA1MS43MTkxIDQuMDY3NzVaTTI5LjYzNjggMjMuNDQ2M0w3LjU1NDQ2IDkuNjA0NDdINTEuNzE5MUwyOS42MzY4IDIzLjQ0NjNaTTQ0LjM3NjcgNTMuODk4M0wzNC42MDUzIDQ0LjA5ODNMMzguNDk3MyA0MC4xOTQ5TDQ0LjM0OTEgNDYuMDYzOEw1Ni4wNTI4IDM0LjMyNTlMNjAgMzguMjI5M0w0NC4zNzY3IDUzLjg5ODNaIiBmaWxsPSIjMDRENzhCIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNTMwXzE0NDMiPgo8cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNTMuODk4MyIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",
      email:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCA0NCAzOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM5Ljg0MjUgMTAuNjc0NEwyMy4wNDMyIDIuMjQ3NzNDMjIuNzE4MSAyLjA4NDc2IDIyLjM2MDUgMiAyMS45OTgxIDJDMjEuNjM1NiAyIDIxLjI3OCAyLjA4NDc2IDIwLjk1MyAyLjI0NzczTDQuMTUzNjQgMTAuNjc0NEMzLjUwOTYxIDEwLjk5NTEgMi45NjY2NCAxMS40OTI1IDIuNTg2MDggMTIuMTEwMkMyLjIwNTUxIDEyLjcyOCAyLjAwMjUxIDEzLjQ0MTcgMiAxNC4xNzA2VjMyLjIwOTJDMiAzNC4zNjc2IDMuNzQ0MDYgMzYuMTE3NiA1Ljg5NTc4IDM2LjExNzZIMzguMTA0MkM0MC4yNTU5IDM2LjExNzYgNDIgMzQuMzY3NiA0MiAzMi4yMDkyVjE0LjE3MDZDNDEuOTk3MSAxMy40NDEzIDQxLjc5MzYgMTIuNzI3MyA0MS40MTIzIDEyLjEwOTVDNDEuMDMxIDExLjQ5MTcgNDAuNDg3MyAxMC45OTQ2IDM5Ljg0MjUgMTAuNjc0NFYxMC42NzQ0WiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zNC45NDEgMzAuMjM1NEwyMi43OTY1IDIwLjE1NDFDMjIuNDAwNyAxOS44MjU2IDIxLjkxMzUgMTkuNjQ3MiAyMS40MTIxIDE5LjY0NzJDMjAuOTEwNiAxOS42NDcyIDIwLjQyMzUgMTkuODI1NiAyMC4wMjc3IDIwLjE1NDFMNy44ODIyIDMwLjIzNTQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjYuNzA1NyAyMy4xNzY2TDM5LjY0NjkgMTIuNTg4MyIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zLjE3NjM5IDEyLjU4ODNMMTYuMTE3NiAyMy4xNzY2IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==",
      fingerprintFailed:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCAyOSA1MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuMDYwNDUgMTIuMjIyMkMwLjg3MzA1MyAxMi4yMjM2IDAuNjg4NTQ0IDEyLjE4MjMgMC41MjU2NiAxMi4xMDIzQzAuNDA2MTg5IDEyLjA0NDMgMC4zMDEzMSAxMS45NjY0IDAuMjE3MTYgMTEuODczQzAuMTMzMDEgMTEuNzc5NiAwLjA3MTI3OTggMTEuNjcyNyAwLjAzNTU4MDUgMTEuNTU4NUMtMC4wMDAxMTg4NCAxMS40NDQzIC0wLjAwOTA3MDE0IDExLjMyNTEgMC4wMDkyNTA0MiAxMS4yMDc5QzAuMDI3NTcxIDExLjA5MDcgMC4wNzI3OTU1IDEwLjk3NzggMC4xNDIyNzggMTAuODc1OEMxLjQ4MTM0IDguOTQ2ODggNS41NTU0NyA0LjQ0NDU4IDE0LjQ0NTUgNC40NDQ1OEMxOC4yOTgxIDQuNDQ0NTggMjEuNjc3IDUuMzE3OTUgMjQuNDgzNiA3LjAzOTVDMjYuNzkzNiA4LjQ1MjM1IDI4LjA4ODIgMTAuMDUxNiAyOC43MDUgMTAuODIxOUMyOC43ODMyIDEwLjkxOSAyOC44MzgxIDExLjAyODYgMjguODY2NSAxMS4xNDQzQzI4Ljg5NDkgMTEuMjYgMjguODk2MiAxMS4zNzk0IDI4Ljg3MDMgMTEuNDk1NUMyOC44NDQ0IDExLjYxMTYgMjguNzkxOSAxMS43MjIxIDI4LjcxNTggMTEuODIwNUMyOC42Mzk3IDExLjkxODggMjguNTQxNSAxMi4wMDMgMjguNDI3MiAxMi4wNjgxQzI4LjE5MzQgMTIuMjAxNSAyNy45MDg2IDEyLjI1MSAyNy42MzMyIDEyLjIwNjNDMjcuMzU3OSAxMi4xNjE1IDI3LjExMzUgMTIuMDI1OSAyNi45NTIgMTEuODI4M0MyNS44MzU4IDEwLjQ0MzEgMjIuNDMyNiA2LjIyNzg4IDE0LjQ0NTUgNi4yMjc4OEM2LjY0OTM2IDYuMjI3ODggMy4xMjQ2IDEwLjEwNjggMS45NzY1NCAxMS43NzAyQzEuODg0MyAxMS45MDkxIDEuNzUwNzUgMTIuMDI0MiAxLjU4OTcgMTIuMTAzN0MxLjQyODY1IDEyLjE4MzEgMS4yNDU5NCAxMi4yMjQgMS4wNjA0NSAxMi4yMjIyWiIgZmlsbD0iI0ZGMDAwMCIvPgo8cGF0aCBkPSJNMTguODA3OCAzMy4zMzMxQzE4LjcxOTQgMzMuMzM0MiAxOC42MzExIDMzLjMyNDIgMTguNTQ1MiAzMy4zMDMzQzEyLjExMTIgMzEuNzA1NiA5LjcwODgzIDI1LjI1NzggOS42MTExMyAyNC45ODk3TDkuNTk1ODggMjQuOTMwN0M5LjU0MzIyIDI0Ljc0NDUgOC4yNTIyNyAyMC4zMjMxIDEwLjIzNDEgMTcuNzMzNEMxMS4xNDI1IDE2LjU1MjUgMTIuNTI0MiAxNS45NDY4IDE0LjM0ODcgMTUuOTQ2OEMxNi4wNDUxIDE1Ljk0NjggMTcuMjY4OCAxNi40NzU0IDE4LjExIDE3LjU2OTVDMTguODAyOSAxOC40NjI4IDE5LjA4MDEgMTkuNTY0NSAxOS4zNDgzIDIwLjYyNTlDMTkuOTExNiAyMi44MzYzIDIwLjMxODQgMjMuOTk3MSAyMi42NTk4IDI0LjExNjVDMjMuNjg4MiAyNC4xNjg2IDI0LjM2MzggMjMuNTY1NyAyNC43NDcgMjMuMDUyM0MyNS43ODI5IDIxLjY1MjYgMjUuOTYzMSAxOS4zNzA3IDI1LjE4MjEgMTcuMzU2MkMyNC4xNzg4IDE0Ljc1NjEgMjAuNjE3OCA5Ljg1NDAxIDE0LjMzOSA5Ljg1NDAxQzExLjY1ODggOS44NTQwMSA5LjE5NjA2IDEwLjcxNzUgNy4yMjExOCAxMi4zNDAyQzUuNTg2NTQgMTMuNjg0MyA0LjI5MTQ0IDE1LjU4MjEgMy42Njc4IDE3LjUzMjdDMi41MTEyOSAyMS4xNjQzIDQuMDI4MTMgMjYuODcyOSA0LjA0MjY4IDI2LjkyNUM0LjA3ODEgMjcuMDU3OSA0LjA4NjYyIDI3LjE5NjUgNC4wNjc3NCAyNy4zMzI3QzQuMDQ4ODcgMjcuNDY4OSA0LjAwMjk3IDI3LjYgMy45MzI3NyAyNy43MTgxQzMuODYyNTcgMjcuODM2MyAzLjc2OTQ4IDI3LjkzOTEgMy42NTkgMjguMDIwNkMzLjU0ODUxIDI4LjEwMjIgMy40MjI4NiAyOC4xNjA3IDMuMjg5NDUgMjguMTkyN0MzLjAxOTk1IDI4LjI2NDYgMi43MzMwOSAyOC4yMjc3IDIuNDkwMzUgMjguMDkwMUMyLjI0NzYyIDI3Ljk1MjUgMi4wNjgzMiAyNy43MjUgMS45OTA4OSAyNy40NTY0QzEuOTIxNiAyNy4xOTU5IDAuMzAxNTA3IDIxLjEwNzMgMS42Mzc0OSAxNi45MTAzQzMuMDkyNjYgMTIuMzYyNCA3LjU4MzU5IDcuNzc3NzEgMTQuMzQxMSA3Ljc3NzcxQzE3LjQ2NDIgNy43Nzc3MSAyMC40MTQ3IDguODQxOTEgMjIuODc3NCAxMC44NTE1QzI0Ljc4NDQgMTIuNDE0NSAyNi4zNDIxIDE0LjUxMzcgMjcuMTU3IDE2LjYxMjJDMjguMTkyOSAxOS4yOTE1IDI3LjkxNTEgMjIuMjk4NiAyNi40NTA5IDI0LjI2MzFDMjUuNDc1MiAyNS41NzMyIDI0LjA4NTkgMjYuMjU4MSAyMi41NDY5IDI2LjE4MzhDMTguNTM3NiAyNS45ODI0IDE3LjgxNjkgMjMuMTc2NyAxNy4yOTE2IDIxLjEzMDJDMTYuNzUxMiAxOS4wMzEgMTYuNDA1NCAxOC4wMTg5IDE0LjM0MTEgMTguMDE4OUMxMy4yMDc1IDE4LjAxODkgMTIuNDExMyAxOC4zMzE1IDExLjkxNTggMTguOTc4OUMxMS4yNDAyIDE5Ljg2NDYgMTEuMTg3NiAyMS4yNDkgMTEuMjYyNCAyMi4yNTM1QzExLjMxMTUgMjIuOTUzMyAxMS40Mjk5IDIzLjY0NjUgMTEuNjE1OCAyNC4zMjI4QzExLjc4MDcgMjQuNzM5NiAxMy45MjgxIDMwLjAxOSAxOS4wNzExIDMxLjI5NjRDMTkuMjA0IDMxLjMyOCAxOS4zMjk0IDMxLjM4NTcgMTkuNDM5OSAzMS40NjYzQzE5LjU1MDQgMzEuNTQ2OCAxOS42NDM4IDMxLjY0ODYgMTkuNzE0NyAzMS43NjU2QzE5Ljc4NTYgMzEuODgyNyAxOS44MzI2IDMyLjAxMjcgMTkuODUzIDMyLjE0ODFDMTkuODczNCAzMi4yODM1IDE5Ljg2NjcgMzIuNDIxNiAxOS44MzMzIDMyLjU1NDRDMTkuNzcwNiAzMi43Nzg2IDE5LjYzNjQgMzIuOTc2MSAxOS40NTEyIDMzLjExNjdDMTkuMjY2MSAzMy4yNTczIDE5LjA0MDEgMzMuMzMzMyAxOC44MDc4IDMzLjMzMzFaIiBmaWxsPSIjRkYwMDAwIi8+CjxwYXRoIGQ9Ik0xMC4wMTg5IDMyLjIyMjJDOS44NzExIDMyLjIyMjUgOS43MjQ3NiAzMi4xOTUyIDkuNTg4NiAzMi4xNDE5QzkuNDUyNDQgMzIuMDg4NiA5LjMyOTI1IDMyLjAxMDQgOS4yMjYzNyAzMS45MTJDNi41ODc0NiAyOS4zNDI4IDUuMDk0NzMgMjYuNDY5OSA0LjUzMyAyMi44Nzc3VjIyLjg1ODZDNC4yMTc3IDIwLjQ4MDUgNC42NzkyOSAxNy4xMTM2IDYuOTQxMTEgMTQuNzk4N0M4LjYxMDY3IDEzLjA5MDUgMTAuOTU3NyAxMi4yMjIzIDEzLjkwNDggMTIuMjIyM0MxNy4zOTAyIDEyLjIyMjMgMjAuMTI5MyAxMy43MjU2IDIxLjgzNzIgMTYuNTYyOUMyMy4wNzY0IDE4LjYyNDEgMjMuMzIyMSAyMC42NzgxIDIzLjMyODUgMjAuNzYyNUMyMy4zNDE1IDIwLjg5MjUgMjMuMzI2NyAyMS4wMjM2IDIzLjI4NSAyMS4xNDgzQzIzLjI0MzMgMjEuMjczIDIzLjE3NTUgMjEuMzg4OCAyMy4wODU0IDIxLjQ4OTJDMjIuOTk1NCAyMS41ODk1IDIyLjg4NDkgMjEuNjcyNCAyMi43NjAyIDIxLjczMzFDMjIuNjM1NiAyMS43OTM4IDIyLjQ5OTMgMjEuODMxMSAyMi4zNTkxIDIxLjg0MjhDMjIuMDc2MyAyMS44NzEzIDIxLjc5MjcgMjEuNzk1NCAyMS41Njk2IDIxLjYzMTZDMjEuMzQ2NiAyMS40Njc4IDIxLjIwMTkgMjEuMjI5MiAyMS4xNjY4IDIwLjk2NzNDMjAuOTc5NyAxOS43MzQ5IDIwLjU0OTggMTguNTQ0OSAxOS44OTg1IDE3LjQ1NjhDMTguNTc0OCAxNS4yOTAxIDE2LjU2MDggMTQuMTg4NyAxMy44OTcgMTQuMTg4N0MxMS41OTYxIDE0LjE4ODcgOS43OTU5MSAxNC44MzEgOC41NTc0MSAxNi4wOTkxQzYuNzcyMSAxNy45MjcyIDYuNDI2OTYgMjAuNzQzMyA2LjY3MTk3IDIyLjYwNjNDNy4xNjQxIDI1Ljc4MjkgOC40OCAyOC4zMDk5IDEwLjgwMzYgMzAuNTY4MUMxMC45MDA2IDMwLjY2MTcgMTAuOTc2MyAzMC43NzI0IDExLjAyNjIgMzAuODkzN0MxMS4wNzYyIDMxLjAxNDkgMTEuMDk5MyAzMS4xNDQzIDExLjA5NDMgMzEuMjc0QzExLjA4OTIgMzEuNDAzOCAxMS4wNTYxIDMxLjUzMTIgMTAuOTk2OSAzMS42NDg4QzEwLjkzNzcgMzEuNzY2NSAxMC44NTM2IDMxLjg3MTkgMTAuNzQ5NiAzMS45NTg3QzEwLjU0OTQgMzIuMTI3MSAxMC4yODkyIDMyLjIyMDkgMTAuMDE4OSAzMi4yMjIyWiIgZmlsbD0iI0ZGMDAwMCIvPgo8cGF0aCBkPSJNMjIuOTg3MyAyOS45OTk5QzIwLjYwODcgMjkuOTk5OSAxOC41ODY1IDI5LjM1NjUgMTYuOTY4MyAyOC4wNzc1QzEzLjcxNzMgMjUuNTE4OSAxMy4zNTI4IDIxLjM1MTggMTMuMzM2NyAyMS4xNzU5QzEzLjMxMzggMjAuODg3MyAxMy40MDkyIDIwLjYwMTUgMTMuNjAyIDIwLjM4MTZDMTMuNzk0OCAyMC4xNjE2IDE0LjA2OTEgMjAuMDI1NSAxNC4zNjQ2IDIwLjAwMzFDMTQuNjYwMiAxOS45ODA4IDE0Ljk1MjcgMjAuMDc0IDE1LjE3NzkgMjAuMjYyM0MxNS40MDMgMjAuNDUwNiAxNS41NDI0IDIwLjcxODUgMTUuNTY1MyAyMS4wMDcyQzE1LjU3MzQgMjEuMDY4NyAxNS44OTgzIDI0LjQ3NzMgMTguNDA0MyAyNi40NDA0QzE5Ljg4NzEgMjcuNTk3MSAyMS44NjkgMjguMDU2MSAyNC4zMTEzIDI3Ljc4OEMyNC42MDMyIDI3Ljc1MzQgMjQuODk3MiAyNy44MzMxIDI1LjEyOTEgMjguMDA5NkMyNS4zNjExIDI4LjE4NjIgMjUuNTEyIDI4LjQ0NTMgMjUuNTQ4OSAyOC43MzAyQzI1LjU2NDkgMjguODcxIDI1LjU1MiAyOS4wMTM0IDI1LjUxMSAyOS4xNDkzQzI1LjQ3MDEgMjkuMjg1MSAyNS40MDE4IDI5LjQxMTYgMjUuMzEwMiAyOS41MjE0QzI1LjIxODcgMjkuNjMxMiAyNS4xMDU2IDI5LjcyMjEgMjQuOTc3NyAyOS43ODg4QzI0Ljg0OTggMjkuODU1NSAyNC43MDk2IDI5Ljg5NjYgMjQuNTY1MyAyOS45MDk4QzI0LjA0MTUgMjkuOTY5NSAyMy41MTQ2IDI5Ljk5OTUgMjIuOTg3MyAyOS45OTk5WiIgZmlsbD0iI0ZGMDAwMCIvPgo8cGF0aCBkPSJNMjQuOTA0NyAyLjM2OTU2QzI0LjAxOTYgMS43NzMzOCAyMC44ODExIDAgMTQuOTc5OCAwQzguNzg1MzcgMCA1LjYzOTI3IDEuOTU5MSA0Ljk0MzMyIDIuNDU3QzQuODk3MzUgMi40ODYyMSA0Ljg1NDMzIDIuNTIwMSA0LjgxNDg4IDIuNTU4MTdDNC44MTA3MiAyLjU2MjM0IDQuODA1MjkgMi41NjQ4OSA0Ljc5OTUyIDIuNTY1NEM0LjY4ODM5IDIuNjY1ODUgNC41OTkyMSAyLjc4OTY3IDQuNTM3OTQgMi45Mjg2MUM0LjQ3NjY4IDMuMDY3NTUgNC40NDQ3MiAzLjIxODQyIDQuNDQ0MjEgMy4zNzExNUM0LjQ0NjEyIDMuNTE0MzIgNC40NzUzIDMuNjU1NjkgNC41MzAwOCAzLjc4NzE3QzQuNTg0ODYgMy45MTg2NCA0LjY2NDE2IDQuMDM3NjMgNC43NjM0NCA0LjEzNzMyQzQuODYyNzIgNC4yMzcwMSA0Ljk4MDAzIDQuMzE1NDQgNS4xMDg2NCA0LjM2ODEyQzUuMjM3MjUgNC40MjA3OSA1LjM3NDY0IDQuNDQ2NjcgNS41MTI5MyA0LjQ0NDI4QzUuNzM0NTggNC40NDQxMyA1Ljk1MDg4IDQuMzczNzcgNi4xMzI3OSA0LjI0MjY2QzYuMTYyODEgNC4yMTk1NCA4Ljg3MDUzIDIuMTU5OTkgMTQuOTgxOSAyLjE1OTk5QzIxLjA5MzQgMi4xNTk5OSAyMy44MTU3IDQuMjEyMzEgMjMuODQ1MSA0LjIyNzQ5QzI0LjAzMDkgNC4zNzAxNiAyNC4yNTY2IDQuNDQ2MjcgMjQuNDg4IDQuNDQ0MjhDMjQuNjI2NCA0LjQ0NjQ4IDI0Ljc2MzggNC40MjAzNiAyNC44OTI1IDQuMzY3NDJDMjUuMDIxMSA0LjMxNDQ4IDI1LjEzODMgNC4yMzU3NiAyNS4yMzc1IDQuMTM1NzhDMjUuMzM2NyA0LjAzNTgxIDI1LjQxNTggMy45MTY1NCAyNS40NzAzIDMuNzg0ODNDMjUuNTI0OSAzLjY1MzExIDI1LjU1MzcgMy41MTE1NSAyNS41NTUzIDMuMzY4MjZDMjUuNTU1MyAzLjE1MzYyIDI1LjQ5MzQgMi45NDM4NyAyNS4zNzc1IDIuNzY1OTJDMjUuMjYxNiAyLjU4Nzk3IDI1LjA5NjkgMi40NDk5NCAyNC45MDQ3IDIuMzY5NTZaIiBmaWxsPSIjRkYwMDAwIi8+CjxwYXRoIGQ9Ik0yMi4yMjIxIDQzLjMzMzRDMjIuMjIyMSAzOS42NTI5IDE5LjIzNiAzNi42NjY3IDE1LjU1NTQgMzYuNjY2N0MxMS44NzQ5IDM2LjY2NjcgOC44ODg3OSAzOS42NTI5IDguODg4NzkgNDMuMzMzNEM4Ljg4ODc5IDQ3LjAxMzkgMTEuODc0OSA1MCAxNS41NTU0IDUwQzE5LjIzNiA1MCAyMi4yMjIxIDQ3LjAxMzkgMjIuMjIyMSA0My4zMzM0WiIgc3Ryb2tlPSIjRkYwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNMTcuNzc3OCA0NS41NTU2TDEzLjMzMzQgNDEuMTExMiIgc3Ryb2tlPSIjRkYwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTMuMzMzNCA0NS41NTU2TDE3Ljc3NzggNDEuMTExMiIgc3Ryb2tlPSIjRkYwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",
      fingerprintSuccess:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNzgiIHZpZXdCb3g9IjAgMCA0NCA3OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNjE1MTUgMTguNjE1MkMxLjMyOTczIDE4LjYxNzQgMS4wNDg3MSAxOC41NTQ0IDAuODAwNjIzIDE4LjQzMjZDMC42MTg2NTggMTguMzQ0MyAwLjQ1ODkxOSAxOC4yMjU2IDAuMzMwNzUyIDE4LjA4MzRDMC4yMDI1ODYgMTcuOTQxMiAwLjEwODU2NSAxNy43NzgzIDAuMDU0MTkyIDE3LjYwNDRDLTAuMDAwMTgxMDAyIDE3LjQzMDUgLTAuMDEzODE0NiAxNy4yNDg5IDAuMDE0MDg5MSAxNy4wNzA0QzAuMDQxOTkyOCAxNi44OTE4IDAuMTEwODc0IDE2LjcxOTkgMC4yMTY3MDEgMTYuNTY0NkMyLjI1NjIgMTMuNjI2NyA4LjQ2MTQzIDYuNzY5MjkgMjIuMDAxNyA2Ljc2OTI5QzI3Ljg2OTUgNi43NjkyOSAzMy4wMTU4IDguMDk5NDkgMzcuMjkwNSAxMC43MjE2QzQwLjgwODggMTIuODczNCA0Mi43ODA2IDE1LjMwOTMgNDMuNzIgMTYuNDgyNEM0My44MzkxIDE2LjYzMDMgNDMuOTIyOCAxNi43OTczIDQzLjk2NiAxNi45NzM1QzQ0LjAwOTMgMTcuMTQ5NyA0NC4wMTEyIDE3LjMzMTYgNDMuOTcxOCAxNy41MDg0QzQzLjkzMjQgMTcuNjg1MyA0My44NTI0IDE3Ljg1MzYgNDMuNzM2NCAxOC4wMDMzQzQzLjYyMDUgMTguMTUzMSA0My40NzExIDE4LjI4MTQgNDMuMjk2OSAxOC4zODA1QzQyLjk0MDggMTguNTgzNyA0Mi41MDcxIDE4LjY1OTEgNDIuMDg3NyAxOC41OTFDNDEuNjY4MiAxOC41MjI4IDQxLjI5NjEgMTguMzE2MyA0MS4wNSAxOC4wMTUzQzM5LjM1MDEgMTUuOTA1NCAzNC4xNjY3IDkuNDg1MzkgMjIuMDAxNyA5LjQ4NTM5QzEwLjEyNzUgOS40ODUzOSA0Ljc1OTAzIDE1LjM5MzMgMy4wMTA0MyAxNy45MjY4QzIuODY5OTMgMTguMTM4MyAyLjY2NjUzIDE4LjMxMzcgMi40MjEyNCAxOC40MzQ3QzIuMTc1OTUgMTguNTU1NyAxLjg5NzY3IDE4LjYxOCAxLjYxNTE1IDE4LjYxNTJaIiBmaWxsPSIjMDRENzhCIi8+CjxwYXRoIGQ9Ik0yOC42NDU4IDUwLjc2OUMyOC41MTExIDUwLjc3MDYgMjguMzc2OCA1MC43NTU0IDI4LjI0NTkgNTAuNzIzNUMxOC40NDY1IDQ4LjI5MDEgMTQuNzg3NCAzOC40Njk3IDE0LjYzODYgMzguMDYxM0wxNC42MTU0IDM3Ljk3MTRDMTQuNTM1MSAzNy42ODc5IDEyLjU2ODkgMzAuOTUzNiAxNS41ODc0IDI3LjAwOTRDMTYuOTcxIDI1LjIxMDggMTkuMDc1NSAyNC4yODgyIDIxLjg1NDMgMjQuMjg4MkMyNC40MzggMjQuMjg4MiAyNi4zMDE4IDI1LjA5MzQgMjcuNTgzMSAyNi43NTk3QzI4LjYzODUgMjguMTIwMyAyOS4wNjA2IDI5Ljc5ODMgMjkuNDY5MSAzMS40MTQ5QzMwLjMyNzEgMzQuNzgxNSAzMC45NDY2IDM2LjU0OTQgMzQuNTEyOCAzNi43MzE0QzM2LjA3OSAzNi44MTA4IDM3LjEwOCAzNS44OTI0IDM3LjY5MTcgMzUuMTEwNkMzOS4yNjk1IDMyLjk3ODcgMzkuNTQzOSAyOS41MDMxIDM4LjM1NDUgMjYuNDM0OUMzNi44MjYzIDIyLjQ3NDggMzEuNDAyNiAxNS4wMDg0IDIxLjgzOTYgMTUuMDA4NEMxNy43NTczIDE1LjAwODQgMTQuMDA2NCAxNi4zMjM1IDEwLjk5ODUgMTguNzk1QzguNTA4ODEgMjAuODQyMyA2LjUzNjI3IDIzLjczMjggNS41ODY0MSAyNi43MDM2QzMuODI0OTQgMzIuMjM0OSA2LjEzNTIxIDQwLjkyOTYgNi4xNTczOCA0MS4wMDg5QzYuMjExMzIgNDEuMjExMyA2LjIyNDMgNDEuNDIyNCA2LjE5NTU1IDQxLjYyOTlDNi4xNjY4IDQxLjgzNzQgNi4wOTY5IDQyLjAzNyA1Ljk4OTk4IDQyLjIxNjlDNS44ODMwNiA0Mi4zOTY5IDUuNzQxMjggNDIuNTUzNSA1LjU3MyA0Mi42Nzc3QzUuNDA0NzIgNDIuODAxOCA1LjIxMzM0IDQyLjg5MSA1LjAxMDE2IDQyLjkzOThDNC41OTk2NyA0My4wNDkyIDQuMTYyNzYgNDIuOTkzMSAzLjc5MzA2IDQyLjc4MzVDMy40MjMzNSA0Mi41NzM4IDMuMTUwMjcgNDIuMjI3NCAzLjAzMjM0IDQxLjgxODNDMi45MjY4IDQxLjQyMTYgMC40NTkyNyAzMi4xNDgxIDIuNDk0MDggMjUuNzU1N0M0LjcxMDQyIDE4LjgyODkgMTEuNTUwNSAxMS44NDYxIDIxLjg0MjcgMTEuODQ2MUMyNi41OTk0IDExLjg0NjEgMzEuMDkzMyAxMy40NjY5IDM0Ljg0NDIgMTYuNTI3N0MzNy43NDg3IDE4LjkwODMgNDAuMTIxMiAyMi4xMDU1IDQxLjM2MjQgMjUuMzAxOEM0Mi45NDAyIDI5LjM4MjUgNDIuNTE3IDMzLjk2MjYgNDAuMjg2OSAzNi45NTQ3QzM4LjgwMDkgMzguOTUwMSAzNi42ODQ4IDM5Ljk5MzIgMzQuMzQwOCAzOS44OEMyOC4yMzQyIDM5LjU3MzIgMjcuMTM2NiAzNS4yOTk5IDI2LjMzNjYgMzIuMTgzQzI1LjUxMzQgMjguOTg1OCAyNC45ODY4IDI3LjQ0NDIgMjEuODQyNyAyNy40NDQyQzIwLjExNjEgMjcuNDQ0MiAxOC45MDM0IDI3LjkyMDMgMTguMTQ4OCAyOC45MDY0QzE3LjExOTggMzAuMjU1NCAxNy4wMzk2IDMyLjM2NCAxNy4xNTM2IDMzLjg5MzhDMTcuMjI4NCAzNC45NTk3IDE3LjQwODcgMzYuMDE1NSAxNy42OTE4IDM3LjA0NTZDMTcuOTQzIDM3LjY4MDQgMjEuMjEzNyA0NS43MjEzIDI5LjA0NjkgNDcuNjY3QzI5LjI0OTQgNDcuNzE1IDI5LjQ0MDMgNDcuODAzIDI5LjYwODUgNDcuOTI1N0MyOS43NzY4IDQ4LjA0ODMgMjkuOTE5MSA0OC4yMDMzIDMwLjAyNzEgNDguMzgxNkMzMC4xMzUxIDQ4LjU1OTkgMzAuMjA2NyA0OC43NTc5IDMwLjIzNzcgNDguOTY0MUMzMC4yNjg4IDQ5LjE3MDQgMzAuMjU4NiA0OS4zODA3IDMwLjIwNzggNDkuNTgzQzMwLjExMjMgNDkuOTI0NSAyOS45MDc5IDUwLjIyNTIgMjkuNjI1OCA1MC40Mzk0QzI5LjM0MzggNTAuNjUzNSAyOC45OTk2IDUwLjc2OTMgMjguNjQ1OCA1MC43NjlaIiBmaWxsPSIjMDRENzhCIi8+CjxwYXRoIGQ9Ik0xNS4yNiA0OS4wNzY5QzE1LjAzNDkgNDkuMDc3MyAxNC44MTIgNDkuMDM1NyAxNC42MDQ2IDQ4Ljk1NDVDMTQuMzk3MiA0OC44NzMzIDE0LjIwOTYgNDguNzU0MiAxNC4wNTI5IDQ4LjYwNDNDMTAuMDMzNiA0NC42OTEzIDcuNzYwMDcgNDAuMzE1NyA2LjkwNDUyIDM0Ljg0NDRWMzQuODE1NEM2LjQyNDI4IDMxLjE5MzMgNy4xMjczMyAyNi4wNjUyIDEwLjU3MjMgMjIuNTM5NEMxMy4xMTUxIDE5LjkzNzggMTYuNjg5OSAxOC42MTU0IDIxLjE3ODYgMTguNjE1NEMyNi40ODcxIDE4LjYxNTQgMzAuNjU4OSAyMC45MDUgMzMuMjYwMiAyNS4yMjY0QzM1LjE0NzYgMjguMzY1OSAzNS41MjE4IDMxLjQ5NDMgMzUuNTMxNiAzMS42MjI3QzM1LjU1MTMgMzEuODIwNyAzNS41Mjg4IDMyLjAyMDQgMzUuNDY1MyAzMi4yMTA0QzM1LjQwMTggMzIuNDAwMyAzNS4yOTg1IDMyLjU3NjcgMzUuMTYxMyAzMi43Mjk2QzM1LjAyNDIgMzIuODgyNCAzNC44NTU5IDMzLjAwODcgMzQuNjY2MSAzMy4xMDExQzM0LjQ3NjMgMzMuMTkzNSAzNC4yNjg3IDMzLjI1MDMgMzQuMDU1MiAzMy4yNjgyQzMzLjYyNDQgMzMuMzExNiAzMy4xOTI1IDMzLjE5NiAzMi44NTI3IDMyLjk0NjZDMzIuNTEyOSAzMi42OTcxIDMyLjI5MjUgMzIuMzMzNyAzMi4yMzkxIDMxLjkzNDhDMzEuOTU0MiAzMC4wNTc2IDMxLjI5OTQgMjguMjQ1MiAzMC4zMDc0IDI2LjU4NzlDMjguMjkxMiAyMy4yODc5IDI1LjIyMzggMjEuNjEwMyAyMS4xNjY3IDIxLjYxMDNDMTcuNjYyMiAyMS42MTAzIDE0LjkyMDMgMjIuNTg4NiAxMy4wMzQgMjQuNTJDMTAuMzE0OCAyNy4zMDQzIDkuNzg5MTggMzEuNTkzNiAxMC4xNjIzIDM0LjQzMTFDMTAuOTExOSAzOS4yNjkyIDEyLjkxNjEgNDMuMTE4IDE2LjQ1NTIgNDYuNTU3NUMxNi42MDI5IDQ2LjcgMTYuNzE4MiA0Ni44Njg3IDE2Ljc5NDIgNDcuMDUzNEMxNi44NzAzIDQ3LjIzODEgMTYuOTA1NSA0Ny40MzUxIDE2Ljg5NzggNDcuNjMyN0MxNi44OTAyIDQ3LjgzMDMgMTYuODM5NyA0OC4wMjQ0IDE2Ljc0OTYgNDguMjAzNkMxNi42NTk0IDQ4LjM4MjcgMTYuNTMxMyA0OC41NDMyIDE2LjM3MyA0OC42NzU2QzE2LjA2OCA0OC45MzIgMTUuNjcxNiA0OS4wNzQ5IDE1LjI2IDQ5LjA3NjlaIiBmaWxsPSIjMDRENzhCIi8+CjxwYXRoIGQ9Ik0zNS4wMTE0IDQ1LjY5MjRDMzEuMzg4NiA0NS42OTI0IDI4LjMwODYgNDQuNzEyNSAyNS44NDQgNDIuNzY0NUMyMC44OTI0IDM4Ljg2NzYgMjAuMzM3MyAzMi41MjA3IDIwLjMxMjggMzIuMjUyOUMyMC4yNzc5IDMxLjgxMzIgMjAuNDIzMiAzMS4zNzggMjAuNzE2OCAzMS4wNDNDMjEuMDEwNSAzMC43MDgxIDIxLjQyODMgMzAuNTAwNyAyMS44Nzg0IDMwLjQ2NjZDMjIuMzI4NSAzMC40MzI2IDIyLjc3NCAzMC41NzQ1IDIzLjExNyAzMC44NjEzQzIzLjQ1OTkgMzEuMTQ4MSAyMy42NzIyIDMxLjU1NjMgMjMuNzA3MSAzMS45OTU5QzIzLjcxOTMgMzIuMDg5NiAyNC4yMTQzIDM3LjI4MTIgMjguMDMxMSA0MC4yNzExQzMwLjI4OTUgNDIuMDMyOCAzMy4zMDgxIDQyLjczMTkgMzcuMDI3OSA0Mi4zMjM2QzM3LjQ3MjUgNDIuMjcwOSAzNy45MjA0IDQyLjM5MjMgMzguMjczNiA0Mi42NjEyQzM4LjYyNjggNDIuOTMwMSAzOC44NTY3IDQzLjMyNDcgMzguOTEyOSA0My43NTg3QzM4LjkzNzMgNDMuOTczIDM4LjkxNzcgNDQuMTkgMzguODU1MyA0NC4zOTY5QzM4Ljc5MjggNDQuNjAzOCAzOC42ODg5IDQ0Ljc5NjUgMzguNTQ5NCA0NC45NjM3QzM4LjQxIDQ1LjEzMSAzOC4yMzc4IDQ1LjI2OTQgMzguMDQzIDQ1LjM3MUMzNy44NDgyIDQ1LjQ3MjUgMzcuNjM0NiA0NS41MzUyIDM3LjQxNDcgNDUuNTU1MkMzNi42MTcgNDUuNjQ2MiAzNS44MTQ2IDQ1LjY5MiAzNS4wMTE0IDQ1LjY5MjRaIiBmaWxsPSIjMDRENzhCIi8+CjxwYXRoIGQ9Ik0zNy45MzIyIDMuNjA5MDNDMzYuNTg0MSAyLjcwMSAzMS44MDQxIDAgMjIuODE1OSAwQzEzLjM4MTIgMCA4LjU4OTQ2IDIuOTgzODYgNy41Mjk0NiAzLjc0MjIxQzcuNDU5NDYgMy43ODY3IDcuMzkzOTIgMy44MzgzMiA3LjMzMzg0IDMuODk2M0M3LjMyNzUgMy45MDI2NSA3LjMxOTI0IDMuOTA2NTQgNy4zMTA0NSAzLjkwNzMxQzcuMTQxMTggNC4wNjAzIDcuMDA1MzYgNC4yNDg5IDYuOTEyMDUgNC40NjA1MUM2LjgxODczIDQuNjcyMTMgNi43NzAwNiA0LjkwMTkxIDYuNzY5MjkgNS4xMzQ1M0M2Ljc3MjIgNS4zNTI1OSA2LjgxNjY0IDUuNTY3OTEgNi45MDAwNyA1Ljc2ODE2QzYuOTgzNTEgNS45Njg0MSA3LjEwNDI5IDYuMTQ5NjQgNy4yNTU1IDYuMzAxNDdDNy40MDY3MSA2LjQ1MzMxIDcuNTg1MzggNi41NzI3NiA3Ljc4MTI2IDYuNjUyOTlDNy45NzcxNCA2LjczMzIyIDguMTg2MzkgNi43NzI2NCA4LjM5NzAyIDYuNzY5QzguNzM0NjIgNi43Njg3NiA5LjA2NDA2IDYuNjYxNjEgOS4zNDExMyA2LjQ2MTkyQzkuMzg2ODQgNi40MjY3IDEzLjUxMDkgMy4yODk4NCAyMi44MTkxIDMuMjg5ODRDMzIuMTI3MyAzLjI4OTg0IDM2LjI3MzcgNi40MTU2OSAzNi4zMTgzIDYuNDM4OEMzNi42MDE0IDYuNjU2MTEgMzYuOTQ1MSA2Ljc3MjAyIDM3LjI5NzUgNi43NjlDMzcuNTA4MyA2Ljc3MjM1IDM3LjcxNzcgNi43MzI1NiAzNy45MTM2IDYuNjUxOTNDMzguMTA5NSA2LjU3MTMgMzguMjg4MSA2LjQ1MTQgMzguNDM5MiA2LjI5OTEzQzM4LjU5MDIgNi4xNDY4NiAzOC43MTA3IDUuOTY1MiAzOC43OTM4IDUuNzY0NkMzOC44NzY4IDUuNTYzOTkgMzguOTIwOCA1LjM0ODM3IDM4LjkyMzEgNS4xMzAxM0MzOC45MjMyIDQuODAzMjIgMzguODI4OSA0LjQ4Mzc1IDM4LjY1MjQgNC4yMTI3MUMzOC40NzU4IDMuOTQxNjggMzguMjI1IDMuNzMxNDYgMzcuOTMyMiAzLjYwOTAzWiIgZmlsbD0iIzA0RDc4QiIvPgo8cGF0aCBkPSJNMzIuMTUzOCA2NS45OTk5QzMyLjE1MzggNjAuMzk0MSAyNy42MDU3IDU1Ljg0NjEgMjEuOTk5OSA1NS44NDYxQzE2LjM5NDEgNTUuODQ2MSAxMS44NDYxIDYwLjM5NDEgMTEuODQ2MSA2NS45OTk5QzExLjg0NjEgNzEuNjA1NyAxNi4zOTQxIDc2LjE1MzggMjEuOTk5OSA3Ni4xNTM4QzI3LjYwNTcgNzYuMTUzOCAzMi4xNTM4IDcxLjYwNTcgMzIuMTUzOCA2NS45OTk5WiIgc3Ryb2tlPSIjMDRENzhCIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNMjcuMDc2OSA2MS43NjkzTDE5Ljk2OTIgNzAuMjMwOEwxNi45MjMgNjYuODQ2MiIgc3Ryb2tlPSIjMDRENzhCIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",
      passkey:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIxLjg3NSAyNUMyNy4wNTI3IDI1IDMxLjI1IDIwLjgwMjcgMzEuMjUgMTUuNjI1QzMxLjI1IDEwLjQ0NzMgMjcuMDUyNyA2LjI1IDIxLjg3NSA2LjI1QzE2LjY5NzMgNi4yNSAxMi41IDEwLjQ0NzMgMTIuNSAxNS42MjVDMTIuNSAyMC44MDI3IDE2LjY5NzMgMjUgMjEuODc1IDI1WiIgZmlsbD0iY3VycmVudENvbG9yIi8+CjxwYXRoIGQ9Ik00Ni44NzUgMjQuOTk5OEM0Ni44Nzk2IDIzLjY5MzkgNDYuNTMzNCAyMi40MTA2IDQ1Ljg3MjQgMjEuMjg0MkM0NS4yMTE1IDIwLjE1NzggNDQuMjYwMiAxOS4yMjk2IDQzLjExNzkgMTguNTk2NUM0MS45NzU2IDE3Ljk2MzUgNDAuNjg0MyAxNy42NDg4IDM5LjM3ODggMTcuNjg1NUMzOC4wNzMzIDE3LjcyMjEgMzYuODAxNyAxOC4xMDg3IDM1LjY5NjcgMTguODA0OUMzNC41OTE3IDE5LjUwMSAzMy42OTQgMjAuNDgxMSAzMy4wOTczIDIxLjY0MjhDMzIuNTAwNiAyMi44MDQ2IDMyLjIyNjkgMjQuMTA1MiAzMi4zMDQ3IDI1LjQwODlDMzIuMzgyNSAyNi43MTI1IDMyLjgwOTEgMjcuOTcxNCAzMy41Mzk4IDI5LjA1MzhDMzQuMjcwNCAzMC4xMzYzIDM1LjI3ODQgMzEuMDAyNiAzNi40NTg0IDMxLjU2MjNWNDIuNzA4MkwzOS41ODM0IDQ1LjgzMzJMNDQuNzkxNyA0MC42MjQ4TDQxLjY2NjcgMzcuNDk5OEw0NC43OTE3IDM0LjM3NDhMNDIuMjA4NCAzMS43OTE1QzQzLjU4MDQgMzEuMjYyMSA0NC43NjAzIDMwLjMzMDIgNDUuNTkzMSAyOS4xMTgxQzQ2LjQyNTkgMjcuOTA2IDQ2Ljg3MjggMjYuNDcwNSA0Ni44NzUgMjQuOTk5OFpNMzkuNTgzNCAyNC45OTk4QzM5LjE3MTMgMjQuOTk5OCAzOC43Njg1IDI0Ljg3NzcgMzguNDI1OSAyNC42NDg3QzM4LjA4MzMgMjQuNDE5OCAzNy44MTYzIDI0LjA5NDQgMzcuNjU4NiAyMy43MTM4QzM3LjUwMDkgMjMuMzMzMSAzNy40NTk3IDIyLjkxNDIgMzcuNTQwMSAyMi41MTAxQzM3LjYyMDUgMjIuMTA1OSAzNy44MTg5IDIxLjczNDcgMzguMTEwMiAyMS40NDM0QzM4LjQwMTYgMjEuMTUyIDM4Ljc3MjggMjAuOTUzNiAzOS4xNzY5IDIwLjg3MzJDMzkuNTgxMSAyMC43OTI4IDM5Ljk5OTkgMjAuODM0MSA0MC4zODA2IDIwLjk5MThDNDAuNzYxMyAyMS4xNDk0IDQxLjA4NjcgMjEuNDE2NSA0MS4zMTU2IDIxLjc1OTFDNDEuNTQ0NSAyMi4xMDE3IDQxLjY2NjcgMjIuNTA0NSA0MS42NjY3IDIyLjkxNjVDNDEuNjY2NyAyMy40NjkgNDEuNDQ3MiAyMy45OTg5IDQxLjA1NjUgMjQuMzg5NkM0MC42NjU4IDI0Ljc4MDMgNDAuMTM1OSAyNC45OTk4IDM5LjU4MzQgMjQuOTk5OFoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8cGF0aCBkPSJNMzAuMDgzMyAyOS4yMDgzQzI4LjQ4MzUgMjguNDk1IDI2Ljc1MTYgMjguMTI2IDI1IDI4LjEyNUgxOC43NUMxNS40MzQ4IDI4LjEyNSAxMi4yNTU0IDI5LjQ0MiA5LjkxMTE3IDMxLjc4NjJDNy41NjY5NiAzNC4xMzA0IDYuMjUgMzcuMzA5OCA2LjI1IDQwLjYyNVY0NC43OTE3SDMzLjMzMzNWMzMuMzEyNUMzMS45Mjg0IDMyLjIzMzIgMzAuODExOSAzMC44MjMzIDMwLjA4MzMgMjkuMjA4M1oiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8L3N2Zz4K",
      phone:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjU4OTcgMzMuMzg3NUwyMC45MjMgMzMuMTU4NEMyMS4xODEzIDMzLjExMjUgMjEuNDg5NyAzMy4wNDU5IDIxLjg0NTkgMzIuOTU0MkMyNi4yNTAxIDMxLjg1IDI5LjE2NjcgMjguNTU4NCAyOS4xNjY3IDI1QzI5LjE2NjcgMjAuNTUyMSAyNC42MzM0IDE2LjY2NjcgMTguNzUwMSAxNi42NjY3QzEyLjg2NjcgMTYuNjY2NyA4LjMzMzQyIDIwLjU1MjEgOC4zMzM0MiAyNUM4LjMzMzQyIDI3LjUzNzUgOS43OTU5MiAyOS45NTQyIDEyLjM1NjMgMzEuNTYyNUwxMi40MzEzIDMxLjYwNDJMMTQuNTgzNCAzMi43OTE3VjM4LjU0NzlMMTkuNTg5NyAzMy4zODc1Wk0yMS42MzU1IDM3LjI2MjVMMTMuOTk1OSA0NS4xMzc1QzEzLjcwNzIgNDUuNDM1MyAxMy4zMzYyIDQ1LjY0MDIgMTIuOTMwMyA0NS43MjU5QzEyLjUyNDUgNDUuODExNSAxMi4xMDIzIDQ1Ljc3NDEgMTEuNzE3OCA0NS42MTgzQzExLjMzMzQgNDUuNDYyNiAxMS4wMDQyIDQ1LjE5NTYgMTAuNzcyNCA0NC44NTE2QzEwLjU0MDYgNDQuNTA3NyAxMC40MTY4IDQ0LjEwMjMgMTAuNDE2NyA0My42ODc1VjM1LjI1QzEwLjMyMzcgMzUuMTk5NyAxMC4yMzIgMzUuMTQ2OSAxMC4xNDE3IDM1LjA5MTdDNi41MTg4MyAzMi44MTY3IDQuMTY2NzUgMjkuMTQzOCA0LjE2Njc1IDI1QzQuMTY2NzUgMTguMDk1OSAxMC42OTU5IDEyLjUgMTguNzUwMSAxMi41QzI2LjgwNDIgMTIuNSAzMy4zMzM0IDE4LjA5NTkgMzMuMzMzNCAyNUMzMy4zMzM0IDMwLjY3OTIgMjguOTE0NyAzNS40NzUgMjIuODYyNiAzNi45OTU5QzIyLjQ1NyAzNy4wOTk4IDIyLjA0NzcgMzcuMTg4OCAyMS42MzU1IDM3LjI2MjVaTTE4LjYxNjcgMTAuNDE2N0MyMS4xMzc2IDYuNjgxMjcgMjUuODU0MiA0LjE2NjY5IDMxLjI1MDEgNC4xNjY2OUMzOS4zMDQyIDQuMTY2NjkgNDUuODMzNCA5Ljc2MjUyIDQ1LjgzMzQgMTYuNjY2N0M0NS44MzM0IDIwLjgxMDQgNDMuNDc5MyAyNC40ODM0IDM5Ljg1ODQgMjYuNzU4NEMzOS43NjgyIDI2LjgxMzYgMzkuNjc2NSAyNi44NjY0IDM5LjU4MzQgMjYuOTE2N1YzNS4zNTQyQzM5LjU4MzQgMzUuNzY5IDM5LjQ1OTYgMzYuMTc0MyAzOS4yMjc4IDM2LjUxODNDMzguOTk2IDM2Ljg2MjMgMzguNjY2OCAzNy4xMjkyIDM4LjI4MjMgMzcuMjg1QzM3Ljg5NzkgMzcuNDQwNyAzNy40NzU3IDM3LjQ3ODIgMzcuMDY5OSAzNy4zOTI1QzM2LjY2NCAzNy4zMDY5IDM2LjI5MyAzNy4xMDIgMzYuMDA0MiAzNi44MDQyTDMyLjM4OTcgMzMuMDc5MkwzNC41NjI2IDI5LjMzMzRMMzUuNDE2NyAzMC4yMTQ2VjI0LjQ1ODRMMzcuNTY4OCAyMy4yNzA5TDM3LjY0MzggMjMuMjI5MkM0MC4yMDYzIDIxLjYyMDkgNDEuNjY2OCAxOS4yMDQyIDQxLjY2NjggMTYuNjY2N0M0MS42NjY4IDEyLjIxODggMzcuMTMzNCA4LjMzMzM1IDMxLjI1MDEgOC4zMzMzNUMyOC41ODM0IDguMzMzMzUgMjYuMTk1OSA5LjEzMTI3IDI0LjM4MTMgMTAuNDE2N0gxOC42MTY3WiIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo=",
      help: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNSAwQzYuMDE2NjQgMCA0LjU2NjU5IDAuNDM5ODY3IDMuMzMzMjMgMS4yNjM5OEMyLjA5OTg2IDIuMDg4MDkgMS4xMzg1NiAzLjI1OTQzIDAuNTcwOTA3IDQuNjI5ODdDMC4wMDMyNDk2MyA2LjAwMDMyIC0wLjE0NTI3NSA3LjUwODMyIDAuMTQ0MTE0IDguOTYzMTdDMC40MzM1MDMgMTAuNDE4IDEuMTQ3ODEgMTEuNzU0NCAyLjE5NjcgMTIuODAzM0MzLjI0NTU5IDEzLjg1MjIgNC41ODE5NyAxNC41NjY1IDYuMDM2ODIgMTQuODU1OUM3LjQ5MTY4IDE1LjE0NTMgOC45OTk2OCAxNC45OTY3IDEwLjM3MDEgMTQuNDI5MUMxMS43NDA2IDEzLjg2MTQgMTIuOTExOSAxMi45MDAxIDEzLjczNiAxMS42NjY4QzE0LjU2MDEgMTAuNDMzNCAxNSA4Ljk4MzM2IDE1IDcuNUMxNSA2LjUxNTA4IDE0LjgwNiA1LjUzOTgxIDE0LjQyOTEgNC42Mjk4N0MxNC4wNTIyIDMuNzE5OTMgMTMuNDk5NyAyLjg5MzE0IDEyLjgwMzMgMi4xOTY3QzEyLjEwNjkgMS41MDAyNiAxMS4yODAxIDAuOTQ3ODE0IDEwLjM3MDEgMC41NzA5MDNDOS40NjAxOCAwLjE5Mzk5MyA4LjQ4NDkxIDAgNy41IDBaTTcuNSAxMkM3LjM1MTY2IDEyIDcuMjA2NjYgMTEuOTU2IDcuMDgzMzIgMTEuODczNkM2Ljk1OTk5IDExLjc5MTIgNi44NjM4NiAxMS42NzQxIDYuODA3MDkgMTEuNTM3QzYuNzUwMzIgMTEuNCA2LjczNTQ3IDExLjI0OTIgNi43NjQ0MSAxMS4xMDM3QzYuNzkzMzUgMTAuOTU4MiA2Ljg2NDc4IDEwLjgyNDYgNi45Njk2NyAxMC43MTk3QzcuMDc0NTYgMTAuNjE0OCA3LjIwODIgMTAuNTQzMyA3LjM1MzY4IDEwLjUxNDRDNy40OTkxNyAxMC40ODU1IDcuNjQ5OTcgMTAuNTAwMyA3Ljc4NzAxIDEwLjU1NzFDNy45MjQwNiAxMC42MTM5IDguMDQxMTkgMTAuNzEgOC4xMjM2IDEwLjgzMzNDOC4yMDYwMSAxMC45NTY3IDguMjUgMTEuMTAxNyA4LjI1IDExLjI1QzguMjUgMTEuNDQ4OSA4LjE3MDk4IDExLjYzOTcgOC4wMzAzMyAxMS43ODAzQzcuODg5NjggMTEuOTIxIDcuNjk4OTEgMTIgNy41IDEyWk04LjI1IDguMTNWOUM4LjI1IDkuMTk4OTEgOC4xNzA5OCA5LjM4OTY4IDguMDMwMzMgOS41MzAzM0M3Ljg4OTY4IDkuNjcwOTggNy42OTg5MSA5Ljc1IDcuNSA5Ljc1QzcuMzAxMDkgOS43NSA3LjExMDMyIDkuNjcwOTggNi45Njk2NyA5LjUzMDMzQzYuODI5MDIgOS4zODk2OCA2Ljc1IDkuMTk4OTEgNi43NSA5VjcuNUM2Ljc1IDcuMzAxMDkgNi44MjkwMiA3LjExMDMyIDYuOTY5NjcgNi45Njk2N0M3LjExMDMyIDYuODI5MDIgNy4zMDEwOSA2Ljc1IDcuNSA2Ljc1QzcuNzIyNSA2Ljc1IDcuOTQwMDEgNi42ODQwMiA4LjEyNTAyIDYuNTYwNEM4LjMxMDAyIDYuNDM2NzggOC40NTQyMiA2LjI2MTA4IDguNTM5MzYgNi4wNTU1MkM4LjYyNDUxIDUuODQ5OTUgOC42NDY3OSA1LjYyMzc1IDguNjAzMzggNS40MDU1MkM4LjU1OTk3IDUuMTg3MjkgOC40NTI4MyA0Ljk4Njg0IDguMjk1NSA0LjgyOTVDOC4xMzgxNiA0LjY3MjE3IDcuOTM3NzEgNC41NjUwMiA3LjcxOTQ4IDQuNTIxNjJDNy41MDEyNSA0LjQ3ODIxIDcuMjc1MDUgNC41MDA0OSA3LjA2OTQ4IDQuNTg1NjNDNi44NjM5MSA0LjY3MDc4IDYuNjg4MjEgNC44MTQ5OCA2LjU2NDYgNC45OTk5OEM2LjQ0MDk4IDUuMTg0OTkgNi4zNzUgNS40MDI0OSA2LjM3NSA1LjYyNUM2LjM3NSA1LjgyMzkxIDYuMjk1OTggNi4wMTQ2OCA2LjE1NTMzIDYuMTU1MzNDNi4wMTQ2OCA2LjI5NTk4IDUuODIzOTEgNi4zNzUgNS42MjUgNi4zNzVDNS40MjYwOSA2LjM3NSA1LjIzNTMyIDYuMjk1OTggNS4wOTQ2NyA2LjE1NTMzQzQuOTU0MDIgNi4wMTQ2OCA0Ljg3NSA1LjgyMzkxIDQuODc1IDUuNjI1QzQuODczMDQgNS4xMzc3MiA1LjAwNjc1IDQuNjU5NTIgNS4yNjExNSA0LjI0MzkzQzUuNTE1NTUgMy44MjgzNCA1Ljg4MDYyIDMuNDkxNzYgNi4zMTU0NiAzLjI3MTg4QzYuNzUwMzEgMy4wNTIgNy4yMzc3OCAyLjk1NzQ5IDcuNzIzMjkgMi45OTg5NEM4LjIwODggMy4wNDA0IDguNjczMTkgMy4yMTYxNyA5LjA2NDQ3IDMuNTA2NTlDOS40NTU3NCAzLjc5NyA5Ljc1ODQ2IDQuMTkwNTkgOS45Mzg3MyA0LjY0MzNDMTAuMTE5IDUuMDk2IDEwLjE2OTcgNS41ODk5NSAxMC4wODUyIDYuMDY5ODRDMTAuMDAwNiA2LjU0OTczIDkuNzg0MTkgNi45OTY2MSA5LjQ2MDA3IDcuMzYwNDdDOS4xMzU5NiA3LjcyNDMyIDguNzE2OTYgNy45OTA3NyA4LjI1IDguMTNaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+Cg==",
      close:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMSAxTDcgN00xIDdMNyAxIiBzdHJva2U9IiM2QjZCNkIiIHN0cm9rZS13aWR0aD0iMC43NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=",
      loginWithEmail:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA3MiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTY5LjMzMzMgMjhWM0gzNkgyLjY2NjY2VjI4VjUzSDM2IiBzdHJva2U9ImN1cnJlbnRjb2xvciIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTY5LjMzMzMgNDQuNjY2Nkg0NiIgc3Ryb2tlPSJjdXJyZW50Y29sb3IiIHN0cm9rZS13aWR0aD0iNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik01NC4zMzMzIDM2LjMzMzRMNDYgNDQuNjY2N0w1NC4zMzMzIDUzIiBzdHJva2U9ImN1cnJlbnRjb2xvciIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIuNjY2NjYgM0wzNiAyOEw2OS4zMzMzIDMiIHN0cm9rZT0iY3VycmVudGNvbG9yIiBzdHJva2Utd2lkdGg9IjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",
      loginWithText:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTciIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NyA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjQyOTYgMjguNDA0MUg0Mi4zNzg1TTE0LjQyOTYgMTcuMjI0NUgzMS4xOTg5IiBzdHJva2U9ImN1cnJlbnRjb2xvciIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTMuMjUgNTEuNTczN1Y4LjgzOTc4QzMuMjUgNy4zNTcyOCAzLjgzODkyIDUuOTM1NSA0Ljg4NzIxIDQuODg3MjFDNS45MzU1IDMuODM4OTIgNy4zNTcyOCAzLjI1IDguODM5NzggMy4yNUg0Ny45NjgzQzQ5LjQ1MDggMy4yNSA1MC44NzI2IDMuODM4OTIgNTEuOTIwOCA0Ljg4NzIxQzUyLjk2OTEgNS45MzU1IDUzLjU1OCA3LjM1NzI4IDUzLjU1OCA4LjgzOTc4VjM2Ljc4ODdDNTMuNTU4IDM4LjI3MTIgNTIuOTY5MSAzOS42OTMgNTEuOTIwOCA0MC43NDEzQzUwLjg3MjYgNDEuNzg5NiA0OS40NTA4IDQyLjM3ODUgNDcuOTY4MyA0Mi4zNzg1SDE3LjExNTVDMTYuMjc3NiA0Mi4zNzg2IDE1LjQ1MDYgNDIuNTY3IDE0LjY5NTQgNDIuOTI5OUMxMy45NDAyIDQzLjI5MjcgMTMuMjc2MyA0My44MjA2IDEyLjc1MjYgNDQuNDc0N0w2LjIzNzc0IDUyLjYxOUM2LjAyMDkzIDUyLjg5MDcgNS43MjUwNCA1My4wODgzIDUuMzkxIDUzLjE4NDVDNS4wNTY5NSA1My4yODA3IDQuNzAxMjcgNTMuMjcwNyA0LjM3MzE2IDUzLjE1NTlDNC4wNDUwNCA1My4wNDExIDMuNzYwNzEgNTIuODI3MiAzLjU1OTQ5IDUyLjU0MzdDMy4zNTgyOCA1Mi4yNjAzIDMuMjUwMTMgNTEuOTIxMyAzLjI1IDUxLjU3MzdWNTEuNTczN1oiIHN0cm9rZT0iY3VycmVudGNvbG9yIiBzdHJva2Utd2lkdGg9IjUiLz4KPC9zdmc+Cg==",
      privateIcon:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNSAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuOTM0OCAwLjYwMjEwNUM3LjI1MjUyIDAuNDgzMjMxIDcuNTk5NjYgMC40Njc3MzMgNy45MjY3MSAwLjU1NzgyM0w4LjA2NTE5IDAuNjAyMTA1TDEzLjcwMSAyLjcxNTU1QzEzLjk4NjggMi44MjI3IDE0LjIzNjIgMy4wMDg4NiAxNC40MjAyIDMuMjUyMzJDMTQuNjA0MyAzLjQ5NTc5IDE0LjcxNTMgMy43ODY1NCAxNC43NDA0IDQuMDkwNjlMMTQuNzQ2MSA0LjIyMzU0VjguNTQxNEMxNC43NDYgOS44NDYwNCAxNC4zOTM4IDExLjEyNjUgMTMuNzI2NSAxMi4yNDc1QzEzLjA1OTIgMTMuMzY4NiAxMi4xMDE2IDE0LjI4ODcgMTAuOTU0OCAxNC45MTA3TDEwLjc0MDYgMTUuMDIyNkw4LjA0MDIzIDE2LjM3MjhDNy44OTE1NCAxNi40NDcgNy43MjkxMyAxNi40ODk4IDcuNTYzMTcgMTYuNDk4NEM3LjM5NzIgMTYuNTA3IDcuMjMxMjUgMTYuNDgxMiA3LjA3NTY5IDE2LjQyMjdMNi45NTk3NiAxNi4zNzI4TDQuMjU5MzggMTUuMDIyNkMzLjA5MjQ1IDE0LjQzOTEgMi4xMDQ3IDEzLjU1MTQgMS40MDA0IDEyLjQ1MzJDMC42OTYxMDUgMTEuMzU0OSAwLjMwMTM5MyAxMC4wODY5IDAuMjU3OTMyIDguNzgyOTRMMC4yNTM5MDYgOC41NDE0VjQuMjIzNTRDMC4yNTM5MTEgMy45MTg1IDAuMzQwNTU5IDMuNjE5NzQgMC41MDM3NjIgMy4zNjIwNEMwLjY2Njk2NiAzLjEwNDMzIDAuOTAwMDEyIDIuODk4MjggMS4xNzU3NyAyLjc2Nzg4TDEuMjk4OTUgMi43MTU1NUw2LjkzNDggMC42MDIxMDVaTTcuNDk5OTkgMi4xMTAxTDEuODY0MTUgNC4yMjM1NFY4LjU0MTRDMS44NjQxNyA5LjU1MTgzIDIuMTM1ODQgMTAuNTQzNyAyLjY1MDcxIDExLjQxMzFDMy4xNjU1OSAxMi4yODI1IDMuOTA0NzQgMTIuOTk3NSA0Ljc5MDc2IDEzLjQ4MzJMNC45Nzk5NiAxMy41ODIzTDcuNDk5OTkgMTQuODQyM0wxMC4wMiAxMy41ODIzQzEwLjkyNCAxMy4xMzA0IDExLjY4OTggMTIuNDQzOCAxMi4yMzcyIDExLjU5NDNDMTIuNzg0NyAxMC43NDQ5IDEzLjA5MzcgOS43NjM4MiAxMy4xMzE4IDguNzUzOTVMMTMuMTM1OCA4LjU0MTRWNC4yMjM1NEw3LjQ5OTk5IDIuMTEwMVpNMTAuMjY0IDUuNzgyMjVDMTAuNDA4OSA1LjYzNzg1IDEwLjYwMzMgNS41NTQwMiAxMC44MDc3IDUuNTQ3NzhDMTEuMDEyMiA1LjU0MTUzIDExLjIxMTQgNS42MTMzNSAxMS4zNjQ4IDUuNzQ4NjRDMTEuNTE4MiA1Ljg4MzkyIDExLjYxNDQgNi4wNzI1NCAxMS42MzM4IDYuMjc2MTdDMTEuNjUzMiA2LjQ3OTgxIDExLjU5NDQgNi42ODMxOSAxMS40NjkyIDYuODQ1MDFMMTEuNDAyNCA2LjkyMDY5TDcuMTg4NDEgMTEuMTM1NUM3LjAzNDkxIDExLjI4OSA2LjgzMDM5IDExLjM4MDcgNi42MTM2OSAxMS4zOTM0QzYuMzk2OTkgMTEuNDA2IDYuMTgzMjEgMTEuMzM4NiA2LjAxMjkzIDExLjIwMzlMNS45MzU2NCAxMS4xMzU1TDQuMDAwMTMgOS4xOTk5OUMzLjg1NDIgOS4wNTU0NCAzLjc2OTA0IDguODYwNTcgMy43NjIwNyA4LjY1NTI5QzMuNzU1MTEgOC40NSAzLjgyNjg3IDguMjQ5ODEgMy45NjI2NyA4LjA5NTdDNC4wOTg0NyA3Ljk0MTU5IDQuMjg4MDMgNy44NDUyMSA0LjQ5MjU2IDcuODI2MjlDNC42OTcxIDcuODA3MzcgNC45MDExMyA3Ljg2NzMzIDUuMDYyODkgNy45OTM5Mkw1LjEzODU3IDguMDYwNzRMNi41NjIwMyA5LjQ4NDJMMTAuMjY0IDUuNzgyMjVaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+Cg==",
      secure:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxMyAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuOTI4NTcgMTYuNUMxLjUwOTUyIDE2LjUgMS4xNTA2NiAxNi4zNTA3IDAuODUxOTk0IDE2LjA1MkMwLjU1MzMyNyAxNS43NTMzIDAuNDA0MjQ4IDE1LjM5NDcgMC40MDQ3NTYgMTQuOTc2MlY3LjM1NzE0QzAuNDA0NzU2IDYuOTM4MSAwLjU1NDA4OSA2LjU3OTI0IDAuODUyNzU2IDYuMjgwNTdDMS4xNTE0MiA1Ljk4MTkgMS41MTAwMyA1LjgzMjgzIDEuOTI4NTcgNS44MzMzM0gyLjY5MDQ3VjQuMzA5NTJDMi42OTA0NyAzLjI1NTU2IDMuMDYyMDMgMi4zNTcwMiAzLjgwNTE0IDEuNjEzOTFDNC41NDgyNSAwLjg3MDc5NCA1LjQ0NjUzIDAuNDk5NDkzIDYuNDk5OTkgMC41MDAwMDFDNy41NTM5NiAwLjUwMDAwMSA4LjQ1MjUgMC44NzE1NTYgOS4xOTU2MSAxLjYxNDY3QzkuOTM4NzIgMi4zNTc3OCAxMC4zMSAzLjI1NjA2IDEwLjMwOTUgNC4zMDk1MlY1LjgzMzMzSDExLjA3MTRDMTEuNDkwNSA1LjgzMzMzIDExLjg0OTMgNS45ODI2NyAxMi4xNDggNi4yODEzM0MxMi40NDY3IDYuNTggMTIuNTk1NyA2LjkzODYgMTIuNTk1MiA3LjM1NzE0VjE0Ljk3NjJDMTIuNTk1MiAxNS4zOTUyIDEyLjQ0NTkgMTUuNzU0MSAxMi4xNDcyIDE2LjA1MjhDMTEuODQ4NiAxNi4zNTE0IDExLjQ5IDE2LjUwMDUgMTEuMDcxNCAxNi41SDEuOTI4NTdaTTEuOTI4NTcgMTQuOTc2MkgxMS4wNzE0VjcuMzU3MTRIMS45Mjg1N1YxNC45NzYyWk02LjQ5OTk5IDEyLjY5MDVDNi45MTkwNCAxMi42OTA1IDcuMjc3OSAxMi41NDExIDcuNTc2NTYgMTIuMjQyNUM3Ljg3NTIzIDExLjk0MzggOC4wMjQzMSAxMS41ODUyIDguMDIzOCAxMS4xNjY3QzguMDIzOCAxMC43NDc2IDcuODc0NDcgMTAuMzg4OCA3LjU3NTggMTAuMDkwMUM3LjI3NzE0IDkuNzkxNDMgNi45MTg1MyA5LjY0MjM1IDYuNDk5OTkgOS42NDI4NkM2LjA4MDk1IDkuNjQyODYgNS43MjIwOSA5Ljc5MjE5IDUuNDIzNDIgMTAuMDkwOUM1LjEyNDc2IDEwLjM4OTUgNC45NzU2OCAxMC43NDgxIDQuOTc2MTggMTEuMTY2N0M0Ljk3NjE4IDExLjU4NTcgNS4xMjU1MiAxMS45NDQ2IDUuNDI0MTggMTIuMjQzMkM1LjcyMjg1IDEyLjU0MTkgNi4wODE0NSAxMi42OTEgNi40OTk5OSAxMi42OTA1Wk00LjIxNDI4IDUuODMzMzNIOC43ODU3MVY0LjMwOTUyQzguNzg1NzEgMy42NzQ2IDguNTYzNDkgMy4xMzQ5MiA4LjExOTA0IDIuNjkwNDhDNy42NzQ2IDIuMjQ2MDMgNy4xMzQ5MSAyLjAyMzgxIDYuNDk5OTkgMi4wMjM4MUM1Ljg2NTA3IDIuMDIzODEgNS4zMjUzOSAyLjI0NjAzIDQuODgwOTUgMi42OTA0OEM0LjQzNjUgMy4xMzQ5MiA0LjIxNDI4IDMuNjc0NiA0LjIxNDI4IDQuMzA5NTJWNS44MzMzM1oiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8L3N2Zz4K",
      simple:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNyAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNTI2NDQgMTEuNzEyNUM1LjcyNzk3IDExLjg1NDQgNS45Njg1NyAxMS45MzAzIDYuMjE1MDUgMTEuOTI5N0M2LjQ2MTUzIDExLjkyOSA2LjcwMTc1IDExLjg1MiA2LjkwMjU4IDExLjcwOTFDNy4xMDYwMyAxMS41NjA1IDcuMjYwMzMgMTEuMzU0NyA3LjM0NDkxIDExLjExN0w3Ljg1NTgyIDkuNTQ3N0M3Ljk4NjYxIDkuMTU0MTggOC4yMDcyNiA4Ljc5NjU0IDguNTAwMjggOC41MDMxMkM4Ljc5MzMxIDguMjA5NyA5LjE1MDY1IDcuOTg4NTYgOS41NDM5OSA3Ljg1NzI0TDExLjEzMzkgNy4zNDI5QzExLjM2ODkgNy4yNTc4IDExLjU3MTQgNy4xMDEwOCAxMS43MTI2IDYuODk0ODRDMTEuODUzOSA2LjY4ODYgMTEuOTI2OSA2LjQ0MzIzIDExLjkyMTQgNi4xOTMzQzExLjkxNTggNS45NDMzNyAxMS44MzIgNS43MDE0OCAxMS42ODE3IDUuNTAxNzJDMTEuNTMxNCA1LjMwMTk2IDExLjMyMjIgNS4xNTQzOSAxMS4wODM2IDUuMDc5ODFMOS41MTE5OSA0LjU2Nzc2QzkuMTE4MjIgNC40MzcyIDguNzYwMyA0LjIxNjY1IDguNDY2NjYgMy45MjM2QzguMTczMDIgMy42MzA1NiA3Ljk1MTc0IDMuMjczMDkgNy44MjAzOCAyLjg3OTU5TDcuMzAzNzYgMS4yOTMxNEM3LjIyMDU3IDEuMDU5NDIgNy4wNjY2IDAuODU3NDMzIDYuODYzMjggMC43MTUyODhDNi42NTk5NSAwLjU3MzE0NCA2LjQxNzM4IDAuNDk3OTA3IDYuMTY5MyAwLjUwMDA0NEM1LjkyMTIyIDAuNTAyMTgyIDUuNjc5OTggMC41ODE1ODcgNS40NzkxMyAwLjcyNzIxNEM1LjI3ODI5IDAuODcyODQxIDUuMTI3ODIgMS4wNzc0NSA1LjA0ODY3IDEuMzEyNTdMNC41MjYzMyAyLjkxMjczQzQuMzk1NTEgMy4yOTU2NCA0LjE3OTM2IDMuNjQzOCAzLjg5NDIzIDMuOTMwOTJDMy42MDkxIDQuMjE4MDMgMy4yNjI0NCA0LjQzNjU3IDIuODgwNDUgNC41NzAwNUwxLjI5MTcyIDUuMDgwOTZDMS4wNTgwOSA1LjE2NDMyIDAuODU2MjEyIDUuMzE4MzYgMC43MTQxMTQgNS41MjE2OEMwLjU3MjAxNiA1LjcyNSAwLjQ5Njc0NyA1Ljk2NzUyIDAuNDk4NzU4IDYuMjE1NTdDMC41MDA3NjggNi40NjM2MiAwLjU3OTk1OCA2LjcwNDg5IDAuNzI1MzMzIDYuOTA1ODhDMC44NzA3MDggNy4xMDY4NyAxLjA3NTA2IDcuMjU3NjIgMS4zMSA3LjMzNzE5TDIuODgwNDUgNy44NDU4MUMzLjI3NTg3IDcuOTc3MzEgMy42MzQ5NyA4LjE5OTY2IDMuOTI4OTQgOC40OTUwMkM0LjIyMjkgOC43OTAzOCA0LjQ0MzU2IDkuMTUwNTIgNC41NzMyIDkuNTQ2NTZMNS4wODk4MiAxMS4xMzY0QzUuMTcyMTEgMTEuMzY5NiA1LjMyNTI3IDExLjU3MDggNS41MjY0NCAxMS43MTI1Wk01LjYyMzU5IDMuMjM3MzRMNi4yMjU5NCAxLjY2MzQ2TDYuNzI4ODQgMy4yMzczNEM2LjkxNTgzIDMuODAwODcgNy4yMzIwMiA0LjMxMjg2IDcuNjUyMTUgNC43MzI0QzguMDcyMjkgNS4xNTE5NCA4LjU4NDcyIDUuNDY3NCA5LjE0ODUyIDUuNjUzNTlMMTAuNzU1NSA2LjI1OTM2TDkuMTc1OTUgNi43NzAyN0M4LjYxMjc3IDYuOTU4MTQgOC4xMDEwOSA3LjI3NDYxIDcuNjgxNDkgNy42OTQ2MUM3LjI2MTg5IDguMTE0NjEgNi45NDU4OSA4LjYyNjU5IDYuNzU4NTYgOS4xODk5NUw2LjE2MDc5IDEwLjc2NUw1LjY0NzU5IDkuMTg4OEM1LjQ2MzMzIDguNjI1NDIgNS4xNTAyNSA4LjExMjc1IDQuNzMzMjEgNy42OTE1MUM0LjMxMTc3IDcuMjcwNDQgMy43OTg0OSA2Ljk1Mjc2IDMuMjMzNjMgNi43NjM0MUwxLjY1ODYxIDYuMTY2NzhMMy4yNDI3NyA1LjY1MjQ0QzMuNzk5MDEgNS40NTk4NiA0LjMwMzQ5IDUuMTQxOTIgNC43MTcyMSA0LjcyMzJDNS4xMjc3OSA0LjMwMjgxIDUuNDM3NjkgMy43OTQ3OSA1LjYyMzU5IDMuMjM3MzRaTTEyLjU0MDkgMTYuMzMyNEMxMi42NTc4IDE2LjQxNDYgMTIuNzkyMiAxNi40Njg1IDEyLjkzMzUgMTYuNDg5N0MxMy4wNzQ5IDE2LjUxMSAxMy4yMTkyIDE2LjQ5OTEgMTMuMzU1MSAxNi40NTVDMTMuNDkxMSAxNi40MTA5IDEzLjYxNDkgMTYuMzM1NyAxMy43MTY4IDE2LjIzNTVDMTMuODE4NiAxNi4xMzUyIDEzLjg5NTggMTYuMDEyNyAxMy45NDIyIDE1Ljg3NzVMMTQuMjI1NiAxNS4wMDY1QzE0LjI4NjYgMTQuODI1OSAxNC4zODgzIDE0LjY2MTcgMTQuNTIyOCAxNC41MjY1QzE0LjY1NzcgMTQuMzg5MyAxNC44MjIyIDE0LjI4ODggMTUuMDAyOCAxNC4yMjkzTDE1Ljg4NTIgMTMuOTQxM0MxNi4wNjczIDEzLjg3ODQgMTYuMjI0OSAxMy43NTk3IDE2LjMzNTUgMTMuNjAyQzE2LjQ0NjEgMTMuNDQ0MyAxNi41MDQxIDEzLjI1NTcgMTYuNTAxMiAxMy4wNjMxQzE2LjQ5ODIgMTIuODcwNSAxNi40MzQ2IDEyLjY4MzggMTYuMzE5MyAxMi41Mjk1QzE2LjIwMzkgMTIuMzc1MiAxNi4wNDI4IDEyLjI2MTMgMTUuODU4OSAxMi4yMDRMMTQuOTg1NyAxMS45MTgyQzE0LjgwNDkgMTEuODU4MSAxNC42NDA2IDExLjc1NjkgMTQuNTA1NyAxMS42MjI0QzE0LjM3MDkgMTEuNDg3OSAxNC4yNjkxIDExLjMyMzkgMTQuMjA4NSAxMS4xNDMzTDEzLjkyMDQgMTAuMjU5OEMxMy44NTg2IDEwLjA3ODEgMTMuNzQxMSA5LjkyMDQxIDEzLjU4NDcgOS44MDkxOEMxMy40MjgyIDkuNjk3OTUgMTMuMjQwOCA5LjYzODc3IDEzLjA0ODggOS42NDAwM0MxMi44NTY4IDkuNjQxMyAxMi42NzAyIDkuNzAyOTQgMTIuNTE1MiA5LjgxNjIyQzEyLjM2MDIgOS45Mjk1MSAxMi4yNDQ5IDEwLjA4ODcgMTIuMTg1NCAxMC4yNzEyTDExLjkwMzEgMTEuMTQyMUMxMS44NDQ5IDExLjMyMTQgMTEuNzQ2IDExLjQ4NDggMTEuNjE0MSAxMS42MTk0QzExLjQ4MjMgMTEuNzU0IDExLjMyMSAxMS44NTYzIDExLjE0MyAxMS45MTgyTDEwLjI1OTUgMTIuMjA2M0MxMC4wNzc3IDEyLjI2NzkgOS45MTk5IDEyLjM4NTEgOS44MDg0NyAxMi41NDE0QzkuNjk3MDMgMTIuNjk3NyA5LjYzNzYxIDEyLjg4NTEgOS42Mzg2MyAxMy4wNzcxQzkuNjM5NjQgMTMuMjY5IDkuNzAxMDMgMTMuNDU1OCA5LjgxNDExIDEzLjYxMDlDOS45MjcxOCAxMy43NjYgMTAuMDg2MiAxMy44ODE2IDEwLjI2ODYgMTMuOTQxM0wxMS4xNDA3IDE0LjIyMzZDMTEuMzIzNiAxNC4yODUzIDExLjQ4ODIgMTQuMzg3MSAxMS42MjMxIDE0LjUyMTlDMTEuNzU5MSAxNC42NTc5IDExLjg1OTcgMTQuODIyNSAxMS45MTc5IDE1LjAwNDNMMTIuMjA3MSAxNS44ODg5QzEyLjI2OTcgMTYuMDY3OCAxMi4zODY0IDE2LjIyMjcgMTIuNTQwOSAxNi4zMzI0Wk0xMS40OTczIDEzLjE0MDFMMTEuMjkyNyAxMy4wNzM4TDExLjUwMyAxMy4wMDA2QzExLjg0ODggMTIuODc5MSAxMi4xNjIzIDEyLjY4MDQgMTIuNDE5OCAxMi40MTk2QzEyLjY3NzMgMTIuMTU4NyAxMi44NzE5IDExLjg0MjYgMTIuOTg4OSAxMS40OTUzTDEzLjA1NTIgMTEuMjkxOUwxMy4xMjM4IDExLjQ5ODhDMTMuMjQwMyAxMS44NDkxIDEzLjQzNjkgMTIuMTY3NSAxMy42OTgxIDEyLjQyODZDMTMuOTU5MiAxMi42ODk3IDE0LjI3NzUgMTIuODg2NCAxNC42Mjc5IDEzLjAwMjlMMTQuODUwOCAxMy4wNzQ5TDE0LjY0NTEgMTMuMTQzNUMxNC4yOTM5IDEzLjI2MDIgMTMuOTc0OSAxMy40NTc0IDEzLjcxMzUgMTMuNzE5M0MxMy40NTIxIDEzLjk4MTMgMTMuMjU1NyAxNC4zMDA4IDEzLjEzOTggMTQuNjUyMkwxMy4wNzI0IDE0Ljg1OTFMMTMuMDA2MSAxNC42NTM0QzEyLjg5MDQgMTQuMzAwOSAxMi42OTM2IDEzLjk4MDQgMTIuNDMxNiAxMy43MTc4QzEyLjE2OTUgMTMuNDU1MiAxMS44NDk2IDEzLjI1NzcgMTEuNDk3MyAxMy4xNDEyVjEzLjE0MDFaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+Cg==",
      iconInvalidCode:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxNCAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuNDk5ODMgNy45OTk5NlY1LjQ5OTk2QzYuNDk5ODMgNS4zNjczNSA2LjU1MjUxIDUuMjQwMTcgNi42NDYyNyA1LjE0NjQxQzYuNzQwMDQgNS4wNTI2NCA2Ljg2NzIyIDQuOTk5OTYgNi45OTk4MyA0Ljk5OTk2QzcuMTMyNDQgNC45OTk5NiA3LjI1OTYxIDUuMDUyNjQgNy4zNTMzOCA1LjE0NjQxQzcuNDQ3MTUgNS4yNDAxNyA3LjQ5OTgzIDUuMzY3MzUgNy40OTk4MyA1LjQ5OTk2VjcuOTk5OTZDNy40OTk4MyA4LjEzMjU3IDcuNDQ3MTUgOC4yNTk3NSA3LjM1MzM4IDguMzUzNTFDNy4yNTk2MSA4LjQ0NzI4IDcuMTMyNDQgOC40OTk5NiA2Ljk5OTgzIDguNDk5OTZDNi44NjcyMiA4LjQ5OTk2IDYuNzQwMDQgOC40NDcyOCA2LjY0NjI3IDguMzUzNTFDNi41NTI1MSA4LjI1OTc1IDYuNDk5ODMgOC4xMzI1NyA2LjQ5OTgzIDcuOTk5OTZaTTEzLjc5OTggMTIuMjVDMTMuNjY4NiAxMi40Nzg2IDEzLjQ3OTIgMTIuNjY4NCAxMy4yNTA5IDEyLjgwMDFDMTMuMDIyNSAxMi45MzE4IDEyLjc2MzQgMTMuMDAwOCAxMi40OTk4IDEzSDEuNDk5ODNDMS4yMzYyMyAxMy4wMDA5IDAuOTc3MDU5IDEyLjkzMjIgMC43NDg2NDIgMTIuODAwNkMwLjUyMDIyNiAxMi42NjkgMC4zMzA2OTUgMTIuNDc5MyAwLjE5OTI5NyAxMi4yNTA4QzAuMDY3ODk4OCAxMi4wMjIzIC0wLjAwMDY4NzI5IDExLjc2MzEgMC4wMDA1MDM1MjcgMTEuNDk5NUMwLjAwMTY5NDM0IDExLjIzNTkgMC4wNzI2MTk2IDEwLjk3NzMgMC4yMDYwNzcgMTAuNzVMNS42OTk4MyAxLjI0OTk2QzUuODMxMzUgMS4wMjE0OCA2LjAyMDc3IDAuODMxNjk3IDYuMjQ4OTkgMC42OTk3MzVDNi40NzcyMiAwLjU2Nzc3MiA2LjczNjIgMC40OTgyOTEgNi45OTk4MyAwLjQ5ODI5MUM3LjI2MzQ2IDAuNDk4MjkxIDcuNTIyNDMgMC41Njc3NzIgNy43NTA2NiAwLjY5OTczNUM3Ljk3ODg5IDAuODMxNjk3IDguMTY4MzEgMS4wMjE0OCA4LjI5OTgzIDEuMjQ5OTZMMTMuNzkzNiAxMC43NUMxMy45MjggMTAuOTc2OCAxMy45OTk1IDExLjIzNTQgMTQuMDAwNiAxMS40OTkxQzE0LjAwMTcgMTEuNzYyOCAxMy45MzI0IDEyLjAyMiAxMy43OTk4IDEyLjI1Wk0xMi45MzExIDExLjI1TDcuNDMxMDggMS43NDk5NkM3LjM4Njk2IDEuNjc0NzcgNy4zMjM5NiAxLjYxMjQyIDcuMjQ4MzEgMS41NjkxQzcuMTcyNjYgMS41MjU3OCA3LjA4NyAxLjUwMjk5IDYuOTk5ODMgMS41MDI5OUM2LjkxMjY1IDEuNTAyOTkgNi44MjY5OSAxLjUyNTc4IDYuNzUxMzUgMS41NjkxQzYuNjc1NyAxLjYxMjQyIDYuNjEyNjkgMS42NzQ3NyA2LjU2ODU4IDEuNzQ5OTZMMS4wNjg1OCAxMS4yNUMxLjAyMzQzIDExLjMyNTUgMC45OTk1OTQgMTEuNDExOSAwLjk5OTU5NCAxMS41QzAuOTk5NTk0IDExLjU4OCAxLjAyMzQzIDExLjY3NDQgMS4wNjg1OCAxMS43NUMxLjExMTgyIDExLjgyNjEgMS4xNzQ1NSAxMS44ODk0IDEuMjUwMzQgMTEuOTMzNEMxLjMyNjEyIDExLjk3NzMgMS40MTIyMyAxMi4wMDAzIDEuNDk5ODMgMTJIMTIuNDk5OEMxMi41ODc0IDEyLjAwMDMgMTIuNjczNSAxMS45NzczIDEyLjc0OTMgMTEuOTMzNEMxMi44MjUxIDExLjg4OTQgMTIuODg3OCAxMS44MjYxIDEyLjkzMTEgMTEuNzVDMTIuOTc2MiAxMS42NzQ0IDEzLjAwMDEgMTEuNTg4IDEzLjAwMDEgMTEuNUMxMy4wMDAxIDExLjQxMTkgMTIuOTc2MiAxMS4zMjU1IDEyLjkzMTEgMTEuMjVaTTYuOTk5ODMgOS40OTk5NkM2Ljg1MTQ5IDkuNDk5OTYgNi43MDY0OSA5LjU0Mzk1IDYuNTgzMTUgOS42MjYzNkM2LjQ1OTgxIDkuNzA4NzcgNi4zNjM2OCA5LjgyNTkgNi4zMDY5MiA5Ljk2Mjk1QzYuMjUwMTUgMTAuMSA2LjIzNTMgMTAuMjUwOCA2LjI2NDI0IDEwLjM5NjNDNi4yOTMxOCAxMC41NDE4IDYuMzY0NjEgMTAuNjc1NCA2LjQ2OTUgMTAuNzgwM0M2LjU3NDM5IDEwLjg4NTIgNi43MDgwMiAxMC45NTY2IDYuODUzNTEgMTAuOTg1NUM2Ljk5ODk5IDExLjAxNDUgNy4xNDk3OSAxMC45OTk2IDcuMjg2ODQgMTAuOTQyOUM3LjQyMzg4IDEwLjg4NjEgNy41NDEwMiAxMC43OSA3LjYyMzQzIDEwLjY2NjZDNy43MDU4NCAxMC41NDMzIDcuNzQ5ODMgMTAuMzk4MyA3Ljc0OTgzIDEwLjI1QzcuNzQ5ODMgMTAuMDUxIDcuNjcwODEgOS44NjAyOCA3LjUzMDE2IDkuNzE5NjNDNy4zODk1IDkuNTc4OTggNy4xOTg3NCA5LjQ5OTk2IDYuOTk5ODMgOS40OTk5NloiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8L3N2Zz4K",
      passkeyArrow:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjYiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA2NiA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ0Ljg3NSAzNi4yNUg2MS44NzVNNjEuODc1IDM2LjI1TDU2LjY0NDIgMzAuNzVNNjEuODc1IDM2LjI1TDU2LjY0NDIgNDEuNzUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTkuNzUgMjIuNzVDMjQuOTI3NyAyMi43NSAyOS4xMjUgMTguNTUyNyAyOS4xMjUgMTMuMzc1QzI5LjEyNSA4LjE5NzMzIDI0LjkyNzcgNCAxOS43NSA0QzE0LjU3MjMgNCAxMC4zNzUgOC4xOTczMyAxMC4zNzUgMTMuMzc1QzEwLjM3NSAxOC41NTI3IDE0LjU3MjMgMjIuNzUgMTkuNzUgMjIuNzVaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPHBhdGggZD0iTTQ0Ljc0OTggMjIuNzVDNDQuNzU0NCAyMS40NDQgNDQuNDA4MSAyMC4xNjA4IDQzLjc0NzIgMTkuMDM0NEM0My4wODYzIDE3LjkwOCA0Mi4xMzUgMTYuOTc5NyA0MC45OTI3IDE2LjM0NjdDMzkuODUwNCAxNS43MTM2IDM4LjU1OSAxNS4zOTkgMzcuMjUzNiAxNS40MzU2QzM1Ljk0ODEgMTUuNDcyMyAzNC42NzY0IDE1Ljg1ODkgMzMuNTcxNCAxNi41NTVDMzIuNDY2NSAxNy4yNTEyIDMxLjU2ODcgMTguMjMxMyAzMC45NzIgMTkuMzkzQzMwLjM3NTQgMjAuNTU0NyAzMC4xMDE2IDIxLjg1NTMgMzAuMTc5NSAyMy4xNTlDMzAuMjU3MyAyNC40NjI3IDMwLjY4MzggMjUuNzIxNSAzMS40MTQ1IDI2LjgwNEMzMi4xNDUyIDI3Ljg4NjQgMzMuMTUzMiAyOC43NTI4IDM0LjMzMzEgMjkuMzEyNVY0MC40NTgzTDM3LjQ1ODEgNDMuNTgzM0w0Mi42NjY1IDM4LjM3NUwzOS41NDE1IDM1LjI1TDQyLjY2NjUgMzIuMTI1TDQwLjA4MzEgMjkuNTQxN0M0MS40NTUxIDI5LjAxMjIgNDIuNjM1IDI4LjA4MDMgNDMuNDY3OCAyNi44NjgzQzQ0LjMwMDcgMjUuNjU2MiA0NC43NDc2IDI0LjIyMDYgNDQuNzQ5OCAyMi43NVpNMzcuNDU4MSAyMi43NUMzNy4wNDYxIDIyLjc1IDM2LjY0MzMgMjIuNjI3OCAzNi4zMDA3IDIyLjM5ODlDMzUuOTU4MSAyMi4xNyAzNS42OTExIDIxLjg0NDYgMzUuNTMzNCAyMS40NjM5QzM1LjM3NTcgMjEuMDgzMiAzNS4zMzQ0IDIwLjY2NDMgMzUuNDE0OCAyMC4yNjAyQzM1LjQ5NTIgMTkuODU2MSAzNS42OTM2IDE5LjQ4NDkgMzUuOTg1IDE5LjE5MzVDMzYuMjc2MyAxOC45MDIyIDM2LjY0NzYgMTguNzAzNyAzNy4wNTE3IDE4LjYyMzRDMzcuNDU1OCAxOC41NDMgMzcuODc0NyAxOC41ODQyIDM4LjI1NTQgMTguNzQxOUMzOC42MzYxIDE4Ljg5OTYgMzguOTYxNCAxOS4xNjY2IDM5LjE5MDQgMTkuNTA5MkMzOS40MTkzIDE5Ljg1MTggMzkuNTQxNSAyMC4yNTQ2IDM5LjU0MTUgMjAuNjY2N0MzOS41NDE1IDIxLjIxOTIgMzkuMzIyIDIxLjc0OTEgMzguOTMxMyAyMi4xMzk4QzM4LjU0MDYgMjIuNTMwNSAzOC4wMTA3IDIyLjc1IDM3LjQ1ODEgMjIuNzVaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPHBhdGggZD0iTTI3Ljk1ODMgMjYuOTU4M0MyNi4zNTg1IDI2LjI0NSAyNC42MjY2IDI1Ljg3NiAyMi44NzUgMjUuODc1SDE2LjYyNUMxMy4zMDk4IDI1Ljg3NSAxMC4xMzA0IDI3LjE5MiA3Ljc4NjE3IDI5LjUzNjJDNS40NDE5NiAzMS44ODA0IDQuMTI1IDM1LjA1OTggNC4xMjUgMzguMzc1VjQyLjU0MTdIMzEuMjA4M1YzMS4wNjI1QzI5LjgwMzQgMjkuOTgzMiAyOC42ODY5IDI4LjU3MzMgMjcuOTU4MyAyNi45NTgzWiIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo=",
      success:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA2OCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM0LjAwMDEgMC42NjY2MjZDMTUuNjAwMSAwLjY2NjYyNiAwLjY2NjcxOCAxNS42IDAuNjY2NzE4IDM0QzAuNjY2NzE4IDUyLjQgMTUuNjAwMSA2Ny4zMzMzIDM0LjAwMDEgNjcuMzMzM0M1Mi40IDY3LjMzMzMgNjcuMzMzNCA1Mi40IDY3LjMzMzQgMzRDNjcuMzMzNCAxNS42IDUyLjQgMC42NjY2MjYgMzQuMDAwMSAwLjY2NjYyNlpNMjQuOTY2NyA0OC4zTDEzIDM2LjMzMzNDMTEuNzAwMSAzNS4wMzMzIDExLjcwMDEgMzIuOTMzMyAxMyAzMS42MzMzQzE0LjMgMzAuMzMzMyAxNi40MDAxIDMwLjMzMzMgMTcuNzAwMSAzMS42MzMzTDI3LjMzMzQgNDEuMjMzM0w1MC4yNjY3IDE4LjNDNTEuNTY2NyAxNyA1My42NjY3IDE3IDU0Ljk2NjcgMTguM0M1Ni4yNjY3IDE5LjYgNTYuMjY2NyAyMS43IDU0Ljk2NjcgMjNMMjkuNjY2NyA0OC4zQzI4LjQgNDkuNiAyNi4yNjY3IDQ5LjYgMjQuOTY2NyA0OC4zWiIgZmlsbD0iIzAwNzY2MiIvPgo8L3N2Zz4K",
      failure:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiByeD0iNDAiIGZpbGw9IiNERDAwMzEiLz4KPG1hc2sgaWQ9InBhdGgtMi1pbnNpZGUtMV80MzVfNDM3NyIgZmlsbD0id2hpdGUiPgo8cGF0aCBkPSJNMjMuMjMgMjMuMjMwMUMyMy40NjIyIDIyLjk5NzMgMjMuNzM4MSAyMi44MTI1IDI0LjA0MTggMjIuNjg2NUMyNC4zNDU1IDIyLjU2MDUgMjQuNjcxMSAyMi40OTU2IDI1IDIyLjQ5NTZDMjUuMzI4OCAyMi40OTU2IDI1LjY1NDQgMjIuNTYwNSAyNS45NTgxIDIyLjY4NjVDMjYuMjYxOCAyMi44MTI1IDI2LjUzNzcgMjIuOTk3MyAyNi43NyAyMy4yMzAxTDQwIDM2LjQ2NTFMNTMuMjMgMjMuMjMwMUM1My40NjI0IDIyLjk5NzYgNTMuNzM4MyAyMi44MTMzIDU0LjA0MiAyMi42ODc1QzU0LjM0NTcgMjIuNTYxNyA1NC42NzEyIDIyLjQ5NjkgNTUgMjIuNDk2OUM1NS4zMjg3IDIyLjQ5NjkgNTUuNjU0MiAyMi41NjE3IDU1Ljk1NzkgMjIuNjg3NUM1Ni4yNjE2IDIyLjgxMzMgNTYuNTM3NSAyMi45OTc2IDU2Ljc3IDIzLjIzMDFDNTcuMDAyNCAyMy40NjI1IDU3LjE4NjggMjMuNzM4NSA1Ny4zMTI2IDI0LjA0MjJDNTcuNDM4NCAyNC4zNDU5IDU3LjUwMzEgMjQuNjcxNCA1Ny41MDMxIDI1LjAwMDFDNTcuNTAzMSAyNS4zMjg4IDU3LjQzODQgMjUuNjU0MyA1Ny4zMTI2IDI1Ljk1OEM1Ny4xODY4IDI2LjI2MTcgNTcuMDAyNCAyNi41Mzc2IDU2Ljc3IDI2Ljc3MDFMNDMuNTM1IDQwLjAwMDFMNTYuNzcgNTMuMjMwMUM1Ny4wMDI0IDUzLjQ2MjUgNTcuMTg2OCA1My43Mzg1IDU3LjMxMjYgNTQuMDQyMkM1Ny40Mzg0IDU0LjM0NTkgNTcuNTAzMSA1NC42NzE0IDU3LjUwMzEgNTUuMDAwMUM1Ny41MDMxIDU1LjMyODggNTcuNDM4NCA1NS42NTQzIDU3LjMxMjYgNTUuOTU4QzU3LjE4NjggNTYuMjYxNyA1Ny4wMDI0IDU2LjUzNzYgNTYuNzcgNTYuNzcwMUM1Ni41Mzc1IDU3LjAwMjUgNTYuMjYxNiA1Ny4xODY5IDU1Ljk1NzkgNTcuMzEyN0M1NS42NTQyIDU3LjQzODUgNTUuMzI4NyA1Ny41MDMyIDU1IDU3LjUwMzJDNTQuNjcxMiA1Ny41MDMyIDU0LjM0NTcgNTcuNDM4NSA1NC4wNDIgNTcuMzEyN0M1My43MzgzIDU3LjE4NjkgNTMuNDYyNCA1Ny4wMDI1IDUzLjIzIDU2Ljc3MDFMNDAgNDMuNTM1MUwyNi43NyA1Ni43NzAxQzI2LjUzNzUgNTcuMDAyNSAyNi4yNjE2IDU3LjE4NjkgMjUuOTU3OSA1Ny4zMTI3QzI1LjY1NDIgNTcuNDM4NSAyNS4zMjg3IDU3LjUwMzIgMjUgNTcuNTAzMkMyNC42NzEyIDU3LjUwMzIgMjQuMzQ1NyA1Ny40Mzg1IDI0LjA0MiA1Ny4zMTI3QzIzLjczODMgNTcuMTg2OSAyMy40NjI0IDU3LjAwMjUgMjMuMjMgNTYuNzcwMUMyMi45OTc1IDU2LjUzNzYgMjIuODEzMSA1Ni4yNjE3IDIyLjY4NzMgNTUuOTU4QzIyLjU2MTUgNTUuNjU0MyAyMi40OTY4IDU1LjMyODggMjIuNDk2OCA1NS4wMDAxQzIyLjQ5NjggNTQuNjcxNCAyMi41NjE1IDU0LjM0NTkgMjIuNjg3MyA1NC4wNDIyQzIyLjgxMzEgNTMuNzM4NSAyMi45OTc1IDUzLjQ2MjUgMjMuMjMgNTMuMjMwMUwzNi40NjUgNDAuMDAwMUwyMy4yMyAyNi43NzAxQzIyLjk5NzEgMjYuNTM3OCAyMi44MTI0IDI2LjI2MiAyMi42ODY0IDI1Ljk1ODJDMjIuNTYwNCAyNS42NTQ1IDIyLjQ5NTUgMjUuMzI4OSAyMi40OTU1IDI1LjAwMDFDMjIuNDk1NSAyNC42NzEyIDIyLjU2MDQgMjQuMzQ1NiAyMi42ODY0IDI0LjA0MTlDMjIuODEyNCAyMy43MzgyIDIyLjk5NzEgMjMuNDYyMyAyMy4yMyAyMy4yMzAxWiIvPgo8L21hc2s+CjxwYXRoIGQ9Ik0yMy4yMyAyMy4yMzAxQzIzLjQ2MjIgMjIuOTk3MyAyMy43MzgxIDIyLjgxMjUgMjQuMDQxOCAyMi42ODY1QzI0LjM0NTUgMjIuNTYwNSAyNC42NzExIDIyLjQ5NTYgMjUgMjIuNDk1NkMyNS4zMjg4IDIyLjQ5NTYgMjUuNjU0NCAyMi41NjA1IDI1Ljk1ODEgMjIuNjg2NUMyNi4yNjE4IDIyLjgxMjUgMjYuNTM3NyAyMi45OTczIDI2Ljc3IDIzLjIzMDFMNDAgMzYuNDY1MUw1My4yMyAyMy4yMzAxQzUzLjQ2MjQgMjIuOTk3NiA1My43MzgzIDIyLjgxMzMgNTQuMDQyIDIyLjY4NzVDNTQuMzQ1NyAyMi41NjE3IDU0LjY3MTIgMjIuNDk2OSA1NSAyMi40OTY5QzU1LjMyODcgMjIuNDk2OSA1NS42NTQyIDIyLjU2MTcgNTUuOTU3OSAyMi42ODc1QzU2LjI2MTYgMjIuODEzMyA1Ni41Mzc1IDIyLjk5NzYgNTYuNzcgMjMuMjMwMUM1Ny4wMDI0IDIzLjQ2MjUgNTcuMTg2OCAyMy43Mzg1IDU3LjMxMjYgMjQuMDQyMkM1Ny40Mzg0IDI0LjM0NTkgNTcuNTAzMSAyNC42NzE0IDU3LjUwMzEgMjUuMDAwMUM1Ny41MDMxIDI1LjMyODggNTcuNDM4NCAyNS42NTQzIDU3LjMxMjYgMjUuOTU4QzU3LjE4NjggMjYuMjYxNyA1Ny4wMDI0IDI2LjUzNzYgNTYuNzcgMjYuNzcwMUw0My41MzUgNDAuMDAwMUw1Ni43NyA1My4yMzAxQzU3LjAwMjQgNTMuNDYyNSA1Ny4xODY4IDUzLjczODUgNTcuMzEyNiA1NC4wNDIyQzU3LjQzODQgNTQuMzQ1OSA1Ny41MDMxIDU0LjY3MTQgNTcuNTAzMSA1NS4wMDAxQzU3LjUwMzEgNTUuMzI4OCA1Ny40Mzg0IDU1LjY1NDMgNTcuMzEyNiA1NS45NThDNTcuMTg2OCA1Ni4yNjE3IDU3LjAwMjQgNTYuNTM3NiA1Ni43NyA1Ni43NzAxQzU2LjUzNzUgNTcuMDAyNSA1Ni4yNjE2IDU3LjE4NjkgNTUuOTU3OSA1Ny4zMTI3QzU1LjY1NDIgNTcuNDM4NSA1NS4zMjg3IDU3LjUwMzIgNTUgNTcuNTAzMkM1NC42NzEyIDU3LjUwMzIgNTQuMzQ1NyA1Ny40Mzg1IDU0LjA0MiA1Ny4zMTI3QzUzLjczODMgNTcuMTg2OSA1My40NjI0IDU3LjAwMjUgNTMuMjMgNTYuNzcwMUw0MCA0My41MzUxTDI2Ljc3IDU2Ljc3MDFDMjYuNTM3NSA1Ny4wMDI1IDI2LjI2MTYgNTcuMTg2OSAyNS45NTc5IDU3LjMxMjdDMjUuNjU0MiA1Ny40Mzg1IDI1LjMyODcgNTcuNTAzMiAyNSA1Ny41MDMyQzI0LjY3MTIgNTcuNTAzMiAyNC4zNDU3IDU3LjQzODUgMjQuMDQyIDU3LjMxMjdDMjMuNzM4MyA1Ny4xODY5IDIzLjQ2MjQgNTcuMDAyNSAyMy4yMyA1Ni43NzAxQzIyLjk5NzUgNTYuNTM3NiAyMi44MTMxIDU2LjI2MTcgMjIuNjg3MyA1NS45NThDMjIuNTYxNSA1NS42NTQzIDIyLjQ5NjggNTUuMzI4OCAyMi40OTY4IDU1LjAwMDFDMjIuNDk2OCA1NC42NzE0IDIyLjU2MTUgNTQuMzQ1OSAyMi42ODczIDU0LjA0MjJDMjIuODEzMSA1My43Mzg1IDIyLjk5NzUgNTMuNDYyNSAyMy4yMyA1My4yMzAxTDM2LjQ2NSA0MC4wMDAxTDIzLjIzIDI2Ljc3MDFDMjIuOTk3MSAyNi41Mzc4IDIyLjgxMjQgMjYuMjYyIDIyLjY4NjQgMjUuOTU4MkMyMi41NjA0IDI1LjY1NDUgMjIuNDk1NSAyNS4zMjg5IDIyLjQ5NTUgMjUuMDAwMUMyMi40OTU1IDI0LjY3MTIgMjIuNTYwNCAyNC4zNDU2IDIyLjY4NjQgMjQuMDQxOUMyMi44MTI0IDIzLjczODIgMjIuOTk3MSAyMy40NjIzIDIzLjIzIDIzLjIzMDFaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQwIiBtYXNrPSJ1cmwoI3BhdGgtMi1pbnNpZGUtMV80MzVfNDM3NykiLz4KPC9zdmc+Cg==",
      poweredByPassage:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTQwIDE2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMS41NTY4MiAxMlYzLjI3MjczSDQuNTA1NjhDNS4xOTAzNCAzLjI3MjczIDUuNzUgMy4zOTYzMSA2LjE4NDY2IDMuNjQzNDdDNi42MjIxNiAzLjg4Nzc4IDYuOTQ2MDIgNC4yMTg3NSA3LjE1NjI1IDQuNjM2MzZDNy4zNjY0OCA1LjA1Mzk4IDcuNDcxNTkgNS41MTk4OSA3LjQ3MTU5IDYuMDM0MDlDNy40NzE1OSA2LjU0ODMgNy4zNjY0OCA3LjAxNTYyIDcuMTU2MjUgNy40MzYwOEM2Ljk0ODg2IDcuODU2NTMgNi42Mjc4NCA4LjE5MTc2IDYuMTkzMTggOC40NDE3NkM1Ljc1ODUyIDguNjg4OTIgNS4yMDE3IDguODEyNSA0LjUyMjczIDguODEyNUgyLjQwOTA5VjcuODc1SDQuNDg4NjRDNC45NTczOSA3Ljg3NSA1LjMzMzgxIDcuNzk0MDMgNS42MTc5IDcuNjMyMUM1LjkwMTk5IDcuNDcwMTcgNi4xMDc5NSA3LjI1MTQyIDYuMjM1OCA2Ljk3NTg1QzYuMzY2NDggNi42OTc0NCA2LjQzMTgyIDYuMzgzNTIgNi40MzE4MiA2LjAzNDA5QzYuNDMxODIgNS42ODQ2NiA2LjM2NjQ4IDUuMzcyMTYgNi4yMzU4IDUuMDk2NTlDNi4xMDc5NSA0LjgyMTAyIDUuOTAwNTcgNC42MDUxMSA1LjYxMzY0IDQuNDQ4ODZDNS4zMjY3IDQuMjg5NzcgNC45NDYwMiA0LjIxMDIzIDQuNDcxNTkgNC4yMTAyM0gyLjYxMzY0VjEySDEuNTU2ODJaTTExLjYyNjQgMTIuMTM2NEMxMS4wMzU1IDEyLjEzNjQgMTAuNTE3IDExLjk5NTcgMTAuMDcxIDExLjcxNDVDOS42Mjc4NCAxMS40MzMyIDkuMjgxMjUgMTEuMDM5OCA5LjAzMTI1IDEwLjUzNDFDOC43ODQwOSAxMC4wMjg0IDguNjYwNTEgOS40Mzc1IDguNjYwNTEgOC43NjEzNkM4LjY2MDUxIDguMDc5NTUgOC43ODQwOSA3LjQ4NDM3IDkuMDMxMjUgNi45NzU4NUM5LjI4MTI1IDYuNDY3MzMgOS42Mjc4NCA2LjA3MjQ0IDEwLjA3MSA1Ljc5MTE5QzEwLjUxNyA1LjUwOTk0IDExLjAzNTUgNS4zNjkzMiAxMS42MjY0IDUuMzY5MzJDMTIuMjE3MyA1LjM2OTMyIDEyLjczNDQgNS41MDk5NCAxMy4xNzc2IDUuNzkxMTlDMTMuNjIzNiA2LjA3MjQ0IDEzLjk3MDIgNi40NjczMyAxNC4yMTczIDYuOTc1ODVDMTQuNDY3MyA3LjQ4NDM3IDE0LjU5MjMgOC4wNzk1NSAxNC41OTIzIDguNzYxMzZDMTQuNTkyMyA5LjQzNzUgMTQuNDY3MyAxMC4wMjg0IDE0LjIxNzMgMTAuNTM0MUMxMy45NzAyIDExLjAzOTggMTMuNjIzNiAxMS40MzMyIDEzLjE3NzYgMTEuNzE0NUMxMi43MzQ0IDExLjk5NTcgMTIuMjE3MyAxMi4xMzY0IDExLjYyNjQgMTIuMTM2NFpNMTEuNjI2NCAxMS4yMzNDMTIuMDc1MyAxMS4yMzMgMTIuNDQ0NiAxMS4xMTc5IDEyLjczNDQgMTAuODg3OEMxMy4wMjQxIDEwLjY1NzcgMTMuMjM4NiAxMC4zNTUxIDEzLjM3NzggOS45ODAxMUMxMy41MTcgOS42MDUxMSAxMy41ODY2IDkuMTk4ODYgMTMuNTg2NiA4Ljc2MTM2QzEzLjU4NjYgOC4zMjM4NiAxMy41MTcgNy45MTYxOSAxMy4zNzc4IDcuNTM4MzVDMTMuMjM4NiA3LjE2MDUxIDEzLjAyNDEgNi44NTUxMSAxMi43MzQ0IDYuNjIyMTZDMTIuNDQ0NiA2LjM4OTIgMTIuMDc1MyA2LjI3MjczIDExLjYyNjQgNi4yNzI3M0MxMS4xNzc2IDYuMjcyNzMgMTAuODA4MiA2LjM4OTIgMTAuNTE4NSA2LjYyMjE2QzEwLjIyODcgNi44NTUxMSAxMC4wMTQyIDcuMTYwNTEgOS44NzUgNy41MzgzNUM5LjczNTggNy45MTYxOSA5LjY2NjE5IDguMzIzODYgOS42NjYxOSA4Ljc2MTM2QzkuNjY2MTkgOS4xOTg4NiA5LjczNTggOS42MDUxMSA5Ljg3NSA5Ljk4MDExQzEwLjAxNDIgMTAuMzU1MSAxMC4yMjg3IDEwLjY1NzcgMTAuNTE4NSAxMC44ODc4QzEwLjgwODIgMTEuMTE3OSAxMS4xNzc2IDExLjIzMyAxMS42MjY0IDExLjIzM1pNMTcuMzg3OCAxMkwxNS4zOTM1IDUuNDU0NTVIMTYuNDUwM0wxNy44NjUxIDEwLjQ2NTlIMTcuOTMzMkwxOS4zMzEgNS40NTQ1NUgyMC40MDQ4TDIxLjc4NTUgMTAuNDQ4OUgyMS44NTM3TDIzLjI2ODUgNS40NTQ1NUgyNC4zMjUzTDIyLjMzMSAxMkgyMS4zNDIzTDE5LjkxMDUgNi45NzE1OUgxOS44MDgyTDE4LjM3NjQgMTJIMTcuMzg3OFpNMjguMTc2NSAxMi4xMzY0QzI3LjU0NTggMTIuMTM2NCAyNy4wMDE4IDExLjk5NzIgMjYuNTQ0NCAxMS43MTg4QzI2LjA4OTggMTEuNDM3NSAyNS43MzkgMTEuMDQ1NSAyNS40OTE4IDEwLjU0MjZDMjUuMjQ3NSAxMC4wMzY5IDI1LjEyNTQgOS40NDg4NiAyNS4xMjU0IDguNzc4NDFDMjUuMTI1NCA4LjEwNzk1IDI1LjI0NzUgNy41MTcwNSAyNS40OTE4IDcuMDA1NjhDMjUuNzM5IDYuNDkxNDggMjYuMDgyNyA2LjA5MDkxIDI2LjUyMzEgNS44MDM5OEMyNi45NjYzIDUuNTE0MiAyNy40ODMzIDUuMzY5MzIgMjguMDc0MiA1LjM2OTMyQzI4LjQxNTEgNS4zNjkzMiAyOC43NTE4IDUuNDI2MTQgMjkuMDg0MiA1LjUzOTc3QzI5LjQxNjUgNS42NTM0MSAyOS43MTkxIDUuODM4MDcgMjkuOTkxOCA2LjA5Mzc1QzMwLjI2NDYgNi4zNDY1OSAzMC40ODE5IDYuNjgxODIgMzAuNjQzOCA3LjA5OTQzQzMwLjgwNTggNy41MTcwNSAzMC44ODY3IDguMDMxMjUgMzAuODg2NyA4LjY0MjA1VjkuMDY4MThIMjUuODQxM1Y4LjE5ODg2SDI5Ljg2NEMyOS44NjQgNy44Mjk1NSAyOS43OTAxIDcuNSAyOS42NDI0IDcuMjEwMjNDMjkuNDk3NSA2LjkyMDQ1IDI5LjI5MDEgNi42OTE3NiAyOS4wMjAyIDYuNTI0MTVDMjguNzUzMiA2LjM1NjUzIDI4LjQzNzkgNi4yNzI3MyAyOC4wNzQyIDYuMjcyNzNDMjcuNjczNyA2LjI3MjczIDI3LjMyNzEgNi4zNzIxNiAyNy4wMzQ0IDYuNTcxMDJDMjYuNzQ0NyA2Ljc2NzA1IDI2LjUyMTcgNy4wMjI3MyAyNi4zNjU0IDcuMzM4MDdDMjYuMjA5MiA3LjY1MzQxIDI2LjEzMSA3Ljk5MTQ4IDI2LjEzMSA4LjM1MjI3VjguOTMxODJDMjYuMTMxIDkuNDI2MTQgMjYuMjE2MyA5Ljg0NTE3IDI2LjM4NjcgMTAuMTg4OUMyNi41NiAxMC41Mjk4IDI2LjgwMDEgMTAuNzg5OCAyNy4xMDY5IDEwLjk2ODhDMjcuNDEzNyAxMS4xNDQ5IDI3Ljc3MDIgMTEuMjMzIDI4LjE3NjUgMTEuMjMzQzI4LjQ0MDcgMTEuMjMzIDI4LjY3OTMgMTEuMTk2IDI4Ljg5MjQgMTEuMTIyMkMyOS4xMDgzIDExLjA0NTUgMjkuMjk0NCAxMC45MzE4IDI5LjQ1MDYgMTAuNzgxMkMyOS42MDY5IDEwLjYyNzggMjkuNzI3NiAxMC40Mzc1IDI5LjgxMjkgMTAuMjEwMkwzMC43ODQ0IDEwLjQ4M0MzMC42ODIyIDEwLjgxMjUgMzAuNTEwMyAxMS4xMDIzIDMwLjI2ODggMTEuMzUyM0MzMC4wMjczIDExLjU5OTQgMjkuNzI5IDExLjc5MjYgMjkuMzczOSAxMS45MzE4QzI5LjAxODggMTIuMDY4MiAyOC42MTk3IDEyLjEzNjQgMjguMTc2NSAxMi4xMzY0Wk0zMi40MTY1IDEyVjUuNDU0NTVIMzMuMzg4MVY2LjQ0MzE4SDMzLjQ1NjNDMzMuNTc1NiA2LjExOTMyIDMzLjc5MTUgNS44NTY1MyAzNC4xMDQgNS42NTQ4M0MzNC40MTY1IDUuNDUzMTIgMzQuNzY4OCA1LjM1MjI3IDM1LjE2MDkgNS4zNTIyN0MzNS4yMzQ3IDUuMzUyMjcgMzUuMzI3MSA1LjM1MzY5IDM1LjQzNzkgNS4zNTY1M0MzNS41NDg3IDUuMzU5MzcgMzUuNjMyNSA1LjM2MzY0IDM1LjY4OTMgNS4zNjkzMlY2LjM5MjA1QzM1LjY1NTIgNi4zODM1MiAzNS41NzcxIDYuMzcwNzQgMzUuNDU0OSA2LjM1MzY5QzM1LjMzNTYgNi4zMzM4MSAzNS4yMDkyIDYuMzIzODYgMzUuMDc1NiA2LjMyMzg2QzM0Ljc1NzUgNi4zMjM4NiAzNC40NzM0IDYuMzkwNjIgMzQuMjIzNCA2LjUyNDE1QzMzLjk3NjIgNi42NTQ4MyAzMy43ODAyIDYuODM2NjUgMzMuNjM1MyA3LjA2OTZDMzMuNDkzMyA3LjI5OTcyIDMzLjQyMjIgNy41NjI1IDMzLjQyMjIgNy44NTc5NVYxMkgzMi40MTY1Wk0zOS40MjY1IDEyLjEzNjRDMzguNzk1OCAxMi4xMzY0IDM4LjI1MTggMTEuOTk3MiAzNy43OTQ0IDExLjcxODhDMzcuMzM5OCAxMS40Mzc1IDM2Ljk4OSAxMS4wNDU1IDM2Ljc0MTggMTAuNTQyNkMzNi40OTc1IDEwLjAzNjkgMzYuMzc1NCA5LjQ0ODg2IDM2LjM3NTQgOC43Nzg0MUMzNi4zNzU0IDguMTA3OTUgMzYuNDk3NSA3LjUxNzA1IDM2Ljc0MTggNy4wMDU2OEMzNi45ODkgNi40OTE0OCAzNy4zMzI3IDYuMDkwOTEgMzcuNzczMSA1LjgwMzk4QzM4LjIxNjMgNS41MTQyIDM4LjczMzMgNS4zNjkzMiAzOS4zMjQyIDUuMzY5MzJDMzkuNjY1MSA1LjM2OTMyIDQwLjAwMTggNS40MjYxNCA0MC4zMzQyIDUuNTM5NzdDNDAuNjY2NSA1LjY1MzQxIDQwLjk2OTEgNS44MzgwNyA0MS4yNDE4IDYuMDkzNzVDNDEuNTE0NiA2LjM0NjU5IDQxLjczMTkgNi42ODE4MiA0MS44OTM4IDcuMDk5NDNDNDIuMDU1OCA3LjUxNzA1IDQyLjEzNjcgOC4wMzEyNSA0Mi4xMzY3IDguNjQyMDVWOS4wNjgxOEgzNy4wOTEzVjguMTk4ODZINDEuMTE0QzQxLjExNCA3LjgyOTU1IDQxLjA0MDEgNy41IDQwLjg5MjQgNy4yMTAyM0M0MC43NDc1IDYuOTIwNDUgNDAuNTQwMSA2LjY5MTc2IDQwLjI3MDIgNi41MjQxNUM0MC4wMDMyIDYuMzU2NTMgMzkuNjg3OSA2LjI3MjczIDM5LjMyNDIgNi4yNzI3M0MzOC45MjM3IDYuMjcyNzMgMzguNTc3MSA2LjM3MjE2IDM4LjI4NDQgNi41NzEwMkMzNy45OTQ3IDYuNzY3MDUgMzcuNzcxNyA3LjAyMjczIDM3LjYxNTQgNy4zMzgwN0MzNy40NTkyIDcuNjUzNDEgMzcuMzgxIDcuOTkxNDggMzcuMzgxIDguMzUyMjdWOC45MzE4MkMzNy4zODEgOS40MjYxNCAzNy40NjYzIDkuODQ1MTcgMzcuNjM2NyAxMC4xODg5QzM3LjgxIDEwLjUyOTggMzguMDUwMSAxMC43ODk4IDM4LjM1NjkgMTAuOTY4OEMzOC42NjM3IDExLjE0NDkgMzkuMDIwMiAxMS4yMzMgMzkuNDI2NSAxMS4yMzNDMzkuNjkwNyAxMS4yMzMgMzkuOTI5MyAxMS4xOTYgNDAuMTQyNCAxMS4xMjIyQzQwLjM1ODMgMTEuMDQ1NSA0MC41NDQ0IDEwLjkzMTggNDAuNzAwNiAxMC43ODEyQzQwLjg1NjkgMTAuNjI3OCA0MC45Nzc2IDEwLjQzNzUgNDEuMDYyOSAxMC4yMTAyTDQyLjAzNDQgMTAuNDgzQzQxLjkzMjIgMTAuODEyNSA0MS43NjAzIDExLjEwMjMgNDEuNTE4OCAxMS4zNTIzQzQxLjI3NzMgMTEuNTk5NCA0MC45NzkgMTEuNzkyNiA0MC42MjM5IDExLjkzMThDNDAuMjY4OCAxMi4wNjgyIDM5Ljg2OTcgMTIuMTM2NCAzOS40MjY1IDEyLjEzNjRaTTQ2LjEzODEgMTIuMTM2NEM0NS41OTI3IDEyLjEzNjQgNDUuMTExMiAxMS45OTg2IDQ0LjY5MzUgMTEuNzIzQzQ0LjI3NTkgMTEuNDQ0NiA0My45NDkyIDExLjA1MjYgNDMuNzEzNCAxMC41NDY5QzQzLjQ3NzYgMTAuMDM4NCA0My4zNTk3IDkuNDM3NSA0My4zNTk3IDguNzQ0MzJDNDMuMzU5NyA4LjA1NjgyIDQzLjQ3NzYgNy40NjAyMyA0My43MTM0IDYuOTU0NTVDNDMuOTQ5MiA2LjQ0ODg2IDQ0LjI3NzMgNi4wNTgyNCA0NC42OTc4IDUuNzgyNjdDNDUuMTE4MyA1LjUwNzEgNDUuNjA0IDUuMzY5MzIgNDYuMTU1MiA1LjM2OTMyQzQ2LjU4MTMgNS4zNjkzMiA0Ni45MTggNS40NDAzNCA0Ny4xNjUxIDUuNTgyMzlDNDcuNDE1MSA1LjcyMTU5IDQ3LjYwNTUgNS44ODA2OCA0Ny43MzYyIDYuMDU5NjZDNDcuODY5NyA2LjIzNTggNDcuOTczNCA2LjM4MDY4IDQ4LjA0NzIgNi40OTQzMkg0OC4xMzI1VjMuMjcyNzNINDkuMTM4MVYxMkg0OC4xNjY1VjEwLjk5NDNINDguMDQ3MkM0Ny45NzM0IDExLjExMzYgNDcuODY4MyAxMS4yNjQyIDQ3LjczMTkgMTEuNDQ2QzQ3LjU5NTUgMTEuNjI1IDQ3LjQwMDkgMTEuNzg1NSA0Ny4xNDgxIDExLjkyNzZDNDYuODk1MiAxMi4wNjY4IDQ2LjU1ODYgMTIuMTM2NCA0Ni4xMzgxIDEyLjEzNjRaTTQ2LjI3NDUgMTEuMjMzQzQ2LjY3NzkgMTEuMjMzIDQ3LjAxODggMTEuMTI3OCA0Ny4yOTcyIDEwLjkxNzZDNDcuNTc1NiAxMC43MDQ1IDQ3Ljc4NzMgMTAuNDEwNSA0Ny45MzIyIDEwLjAzNTVDNDguMDc3MSA5LjY1NzY3IDQ4LjE0OTUgOS4yMjE1OSA0OC4xNDk1IDguNzI3MjdDNDguMTQ5NSA4LjIzODY0IDQ4LjA3ODUgNy44MTEwOCA0Ny45MzY0IDcuNDQ0NkM0Ny43OTQ0IDcuMDc1MjggNDcuNTg0MiA2Ljc4ODM1IDQ3LjMwNTggNi41ODM4MUM0Ny4wMjczIDYuMzc2NDIgNDYuNjgzNiA2LjI3MjczIDQ2LjI3NDUgNi4yNzI3M0M0NS44NDg0IDYuMjcyNzMgNDUuNDkzMyA2LjM4MjEgNDUuMjA5MiA2LjYwMDg1QzQ0LjkyNzkgNi44MTY3NiA0NC43MTYzIDcuMTEwOCA0NC41NzQyIDcuNDgyOTVDNDQuNDM1IDcuODUyMjcgNDQuMzY1NCA4LjI2NzA1IDQ0LjM2NTQgOC43MjcyN0M0NC4zNjU0IDkuMTkzMTggNDQuNDM2NCA5LjYxNjQ4IDQ0LjU3ODUgOS45OTcxNkM0NC43MjM0IDEwLjM3NSA0NC45MzY0IDEwLjY3NjEgNDUuMjE3NyAxMC45MDA2QzQ1LjUwMTggMTEuMTIyMiA0NS44NTQgMTEuMjMzIDQ2LjI3NDUgMTEuMjMzWk01NC42MzEgMTJWMy4yNzI3M0g1NS42MzY3VjYuNDk0MzJINTUuNzIxOUM1NS43OTU4IDYuMzgwNjggNTUuODk4MSA2LjIzNTggNTYuMDI4OCA2LjA1OTY2QzU2LjE2MjMgNS44ODA2OCA1Ni4zNTI2IDUuNzIxNTkgNTYuNTk5OCA1LjU4MjM5QzU2Ljg0OTggNS40NDAzNCA1Ny4xODc5IDUuMzY5MzIgNTcuNjE0IDUuMzY5MzJDNTguMTY1MSA1LjM2OTMyIDU4LjY1MDkgNS41MDcxIDU5LjA3MTQgNS43ODI2N0M1OS40OTE4IDYuMDU4MjQgNTkuODIgNi40NDg4NiA2MC4wNTU4IDYuOTU0NTVDNjAuMjkxNSA3LjQ2MDIzIDYwLjQwOTQgOC4wNTY4MiA2MC40MDk0IDguNzQ0MzJDNjAuNDA5NCA5LjQzNzUgNjAuMjkxNSAxMC4wMzg0IDYwLjA1NTggMTAuNTQ2OUM1OS44MiAxMS4wNTI2IDU5LjQ5MzMgMTEuNDQ0NiA1OS4wNzU2IDExLjcyM0M1OC42NTggMTEuOTk4NiA1OC4xNzY1IDEyLjEzNjQgNTcuNjMxIDEyLjEzNjRDNTcuMjEwNiAxMi4xMzY0IDU2Ljg3MzkgMTIuMDY2OCA1Ni42MjExIDExLjkyNzZDNTYuMzY4MyAxMS43ODU1IDU2LjE3MzcgMTEuNjI1IDU2LjAzNzMgMTEuNDQ2QzU1LjkwMDkgMTEuMjY0MiA1NS43OTU4IDExLjExMzYgNTUuNzIxOSAxMC45OTQzSDU1LjYwMjZWMTJINTQuNjMxWk01NS42MTk3IDguNzI3MjdDNTUuNjE5NyA5LjIyMTU5IDU1LjY5MjEgOS42NTc2NyA1NS44MzcgMTAuMDM1NUM1NS45ODE5IDEwLjQxMDUgNTYuMTkzNSAxMC43MDQ1IDU2LjQ3MTkgMTAuOTE3NkM1Ni43NTA0IDExLjEyNzggNTcuMDkxMyAxMS4yMzMgNTcuNDk0NyAxMS4yMzNDNTcuOTE1MSAxMS4yMzMgNTguMjY2IDExLjEyMjIgNTguNTQ3MiAxMC45MDA2QzU4LjgzMTMgMTAuNjc2MSA1OS4wNDQ0IDEwLjM3NSA1OS4xODY0IDkuOTk3MTZDNTkuMzMxMyA5LjYxNjQ4IDU5LjQwMzggOS4xOTMxOCA1OS40MDM4IDguNzI3MjdDNTkuNDAzOCA4LjI2NzA1IDU5LjMzMjcgNy44NTIyNyA1OS4xOTA3IDcuNDgyOTVDNTkuMDUxNSA3LjExMDggNTguODM5OCA2LjgxNjc2IDU4LjU1NTggNi42MDA4NUM1OC4yNzQ1IDYuMzgyMSA1Ny45MjA4IDYuMjcyNzMgNTcuNDk0NyA2LjI3MjczQzU3LjA4NTYgNi4yNzI3MyA1Ni43NDE4IDYuMzc2NDIgNTYuNDYzNCA2LjU4MzgxQzU2LjE4NSA2Ljc4ODM1IDU1Ljk3NDggNy4wNzUyOCA1NS44MzI3IDcuNDQ0NkM1NS42OTA3IDcuODExMDggNTUuNjE5NyA4LjIzODY0IDU1LjYxOTcgOC43MjcyN1pNNjIuMzYxMiAxNC40NTQ1QzYyLjE5MDcgMTQuNDU0NSA2Mi4wMzg3IDE0LjQ0MDMgNjEuOTA1MiAxNC40MTE5QzYxLjc3MTcgMTQuMzg2NCA2MS42NzkzIDE0LjM2MDggNjEuNjI4MiAxNC4zMzUyTDYxLjg4MzkgMTMuNDQ4OUM2Mi4xMjgyIDEzLjUxMTQgNjIuMzQ0MSAxMy41MzQxIDYyLjUzMTYgMTMuNTE3QzYyLjcxOTEgMTMuNSA2Mi44ODUzIDEzLjQxNjIgNjMuMDMwMiAxMy4yNjU2QzYzLjE3NzkgMTMuMTE3OSA2My4zMTI5IDEyLjg3NzggNjMuNDM1IDEyLjU0NTVMNjMuNjIyNSAxMi4wMzQxTDYxLjIwMjEgNS40NTQ1NUg2Mi4yOTNMNjQuMDk5OCAxMC42NzA1SDY0LjE2OEw2NS45NzQ4IDUuNDU0NTVINjcuMDY1N0w2NC4yODczIDEyLjk1NDVDNjQuMTYyMyAxMy4yOTI2IDY0LjAwNzUgMTMuNTcyNCA2My44MjI4IDEzLjc5NEM2My42MzgxIDE0LjAxODUgNjMuNDIzNyAxNC4xODQ3IDYzLjE3OTMgMTQuMjkyNkM2Mi45Mzc5IDE0LjQwMDYgNjIuNjY1MSAxNC40NTQ1IDYyLjM2MTIgMTQuNDU0NVpNNzEuOTA0NSAxMlYzLjI3MjczSDc0Ljg1MzNDNzUuNTM4IDMuMjcyNzMgNzYuMDk3NyAzLjM5NjMxIDc2LjUzMjMgMy42NDM0N0M3Ni45Njk4IDMuODg3NzggNzcuMjkzNyA0LjIxODc1IDc3LjUwMzkgNC42MzYzNkM3Ny43MTQxIDUuMDUzOTggNzcuODE5MiA1LjUxOTg5IDc3LjgxOTIgNi4wMzQwOUM3Ny44MTkyIDYuNTQ4MyA3Ny43MTQxIDcuMDE1NjIgNzcuNTAzOSA3LjQzNjA4Qzc3LjI5NjUgNy44NTY1MyA3Ni45NzU1IDguMTkxNzYgNzYuNTQwOCA4LjQ0MTc2Qzc2LjEwNjIgOC42ODg5MiA3NS41NDk0IDguODEyNSA3NC44NzA0IDguODEyNUg3Mi43NTY3VjcuODc1SDc0LjgzNjNDNzUuMzA1IDcuODc1IDc1LjY4MTUgNy43OTQwMyA3NS45NjU2IDcuNjMyMUM3Ni4yNDk2IDcuNDcwMTcgNzYuNDU1NiA3LjI1MTQyIDc2LjU4MzUgNi45NzU4NUM3Ni43MTQxIDYuNjk3NDQgNzYuNzc5NSA2LjM4MzUyIDc2Ljc3OTUgNi4wMzQwOUM3Ni43Nzk1IDUuNjg0NjYgNzYuNzE0MSA1LjM3MjE2IDc2LjU4MzUgNS4wOTY1OUM3Ni40NTU2IDQuODIxMDIgNzYuMjQ4MiA0LjYwNTExIDc1Ljk2MTMgNC40NDg4NkM3NS42NzQ0IDQuMjg5NzcgNzUuMjkzNyA0LjIxMDIzIDc0LjgxOTIgNC4yMTAyM0g3Mi45NjEzVjEySDcxLjkwNDVaTTgxLjMxMTQgMTIuMTUzNEM4MC44OTY3IDEyLjE1MzQgODAuNTIwMiAxMi4wNzUzIDgwLjE4MjIgMTEuOTE5Qzc5Ljg0NDEgMTEuNzU5OSA3OS41NzU2IDExLjUzMTIgNzkuMzc2OCAxMS4yMzNDNzkuMTc3OSAxMC45MzE4IDc5LjA3ODUgMTAuNTY4MiA3OS4wNzg1IDEwLjE0MkM3OS4wNzg1IDkuNzY3MDUgNzkuMTUyMyA5LjQ2MzA3IDc5LjMwMDEgOS4yMzAxMUM3OS40NDc4IDguOTk0MzIgNzkuNjQ1MiA4LjgwOTY2IDc5Ljg5MjQgOC42NzYxNEM4MC4xMzk2IDguNTQyNjEgODAuNDEyMyA4LjQ0MzE4IDgwLjcxMDYgOC4zNzc4NEM4MS4wMTE3IDguMzA5NjYgODEuMzE0MyA4LjI1NTY4IDgxLjYxODMgOC4yMTU5MUM4Mi4wMTYgOC4xNjQ3NyA4Mi4zMzg0IDguMTI2NDIgODIuNTg1NiA4LjEwMDg1QzgyLjgzNTYgOC4wNzI0NCA4My4wMTc0IDguMDI1NTcgODMuMTMxIDcuOTYwMjNDODMuMjQ3NSA3Ljg5NDg5IDgzLjMwNTggNy43ODEyNSA4My4zMDU4IDcuNjE5MzJWNy41ODUyM0M4My4zMDU4IDcuMTY0NzcgODMuMTkwNyA2LjgzODA3IDgyLjk2MDYgNi42MDUxMUM4Mi43MzMzIDYuMzcyMTYgODIuMzg4MSA2LjI1NTY4IDgxLjkyNTEgNi4yNTU2OEM4MS40NDUgNi4yNTU2OCA4MS4wNjg1IDYuMzYwOCA4MC43OTU4IDYuNTcxMDJDODAuNTIzMSA2Ljc4MTI1IDgwLjMzMTMgNy4wMDU2OCA4MC4yMjA1IDcuMjQ0MzJMNzkuMjY2IDYuOTAzNDFDNzkuNDM2NCA2LjUwNTY4IDc5LjY2MzcgNi4xOTYwMiA3OS45NDc4IDUuOTc0NDNDODAuMjM0NyA1Ljc1IDgwLjU0NzIgNS41OTM3NSA4MC44ODUzIDUuNTA1NjhDODEuMjI2MiA1LjQxNDc3IDgxLjU2MTQgNS4zNjkzMiA4MS44OTEgNS4zNjkzMkM4Mi4xMDEyIDUuMzY5MzIgODIuMzQyNyA1LjM5NDg5IDgyLjYxNTQgNS40NDYwMkM4Mi44OTEgNS40OTQzMiA4My4xNTY2IDUuNTk1MTcgODMuNDEyMyA1Ljc0ODU4QzgzLjY3MDggNS45MDE5OSA4My44ODUzIDYuMTMzNTIgODQuMDU1OCA2LjQ0MzE4Qzg0LjIyNjIgNi43NTI4NCA4NC4zMTE0IDcuMTY3NjEgODQuMzExNCA3LjY4NzVWMTJIODMuMzA1OFYxMS4xMTM2SDgzLjI1NDZDODMuMTg2NCAxMS4yNTU3IDgzLjA3MjggMTEuNDA3NyA4Mi45MTM3IDExLjU2OTZDODIuNzU0NiAxMS43MzE1IDgyLjU0MyAxMS44NjkzIDgyLjI3ODggMTEuOTgzQzgyLjAxNDYgMTIuMDk2NiA4MS42OTIxIDEyLjE1MzQgODEuMzExNCAxMi4xNTM0Wk04MS40NjQ4IDExLjI1QzgxLjg2MjYgMTEuMjUgODIuMTk3OCAxMS4xNzE5IDgyLjQ3MDUgMTEuMDE1NkM4Mi43NDYxIDEwLjg1OTQgODIuOTUzNSAxMC42NTc3IDgzLjA5MjcgMTAuNDEwNUM4My4yMzQ3IDEwLjE2MzQgODMuMzA1OCA5LjkwMzQxIDgzLjMwNTggOS42MzA2OFY4LjcxMDIzQzgzLjI2MzEgOC43NjEzNiA4My4xNjk0IDguODA4MjQgODMuMDI0NSA4Ljg1MDg1QzgyLjg4MjUgOC44OTA2MiA4Mi43MTc3IDguOTI2MTQgODIuNTMwMiA4Ljk1NzM5QzgyLjM0NTUgOC45ODU4IDgyLjE2NTEgOS4wMTEzNiA4MS45ODkgOS4wMzQwOUM4MS44MTU3IDkuMDUzOTggODEuNjc1MSA5LjA3MTAyIDgxLjU2NzEgOS4wODUyM0M4MS4zMDU4IDkuMTE5MzIgODEuMDYxNCA5LjE3NDcyIDgwLjgzNDIgOS4yNTE0MkM4MC42MDk3IDkuMzI1MjggODAuNDI3OSA5LjQzNzUgODAuMjg4NyA5LjU4ODA3QzgwLjE1MjMgOS43MzU4IDgwLjA4NDIgOS45Mzc1IDgwLjA4NDIgMTAuMTkzMkM4MC4wODQyIDEwLjU0MjYgODAuMjEzNCAxMC44MDY4IDgwLjQ3MTkgMTAuOTg1OEM4MC43MzMzIDExLjE2MTkgODEuMDY0MyAxMS4yNSA4MS40NjQ4IDExLjI1Wk05MC43ODM0IDYuOTIwNDVMODkuODggNy4xNzYxNEM4OS44MjMyIDcuMDI1NTcgODkuNzM5MyA2Ljg3OTI2IDg5LjYyODYgNi43MzcyMkM4OS41MjA2IDYuNTkyMzMgODkuMzcyOSA2LjQ3MzAxIDg5LjE4NTQgNi4zNzkyNkM4OC45OTc5IDYuMjg1NTEgODguNzU3OCA2LjIzODY0IDg4LjQ2NTIgNi4yMzg2NEM4OC4wNjQ2IDYuMjM4NjQgODcuNzMwOCA2LjMzMDk3IDg3LjQ2MzggNi41MTU2MkM4Ny4xOTk2IDYuNjk3NDQgODcuMDY3NSA2LjkyODk4IDg3LjA2NzUgNy4yMTAyM0M4Ny4wNjc1IDcuNDYwMjMgODcuMTU4NCA3LjY1NzY3IDg3LjM0MDIgNy44MDI1NkM4Ny41MjIgNy45NDc0NCA4Ny44MDYxIDguMDY4MTggODguMTkyNSA4LjE2NDc3TDg5LjE2NDEgOC40MDM0MUM4OS43NDkzIDguNTQ1NDUgOTAuMTg1NCA4Ljc2Mjc4IDkwLjQ3MjMgOS4wNTU0QzkwLjc1OTIgOS4zNDUxNyA5MC45MDI3IDkuNzE4NzUgOTAuOTAyNyAxMC4xNzYxQzkwLjkwMjcgMTAuNTUxMSA5MC43OTQ3IDEwLjg4NjQgOTAuNTc4OCAxMS4xODE4QzkwLjM2NTggMTEuNDc3MyA5MC4wNjc1IDExLjcxMDIgODkuNjgzOSAxMS44ODA3Qzg5LjMwMDQgMTIuMDUxMSA4OC44NTQ0IDEyLjEzNjQgODguMzQ1OSAxMi4xMzY0Qzg3LjY3ODMgMTIuMTM2NCA4Ny4xMjU3IDExLjk5MTUgODYuNjg4MiAxMS43MDE3Qzg2LjI1MDcgMTEuNDExOSA4NS45NzM3IDEwLjk4ODYgODUuODU3MiAxMC40MzE4TDg2LjgxMTggMTAuMTkzMkM4Ni45MDI3IDEwLjU0NTUgODcuMDc0NiAxMC44MDk3IDg3LjMyNzQgMTAuOTg1OEM4Ny41ODMxIDExLjE2MTkgODcuOTE2OSAxMS4yNSA4OC4zMjg4IDExLjI1Qzg4Ljc5NzYgMTEuMjUgODkuMTY5NyAxMS4xNTA2IDg5LjQ0NTMgMTAuOTUxN0M4OS43MjM3IDEwLjc1IDg5Ljg2MjkgMTAuNTA4NSA4OS44NjI5IDEwLjIyNzNDODkuODYyOSAxMCA4OS43ODM0IDkuODA5NjYgODkuNjI0MyA5LjY1NjI1Qzg5LjQ2NTIgOS41IDg5LjIyMDkgOS4zODM1MiA4OC44OTEzIDkuMzA2ODJMODcuODAwNCA5LjA1MTE0Qzg3LjIwMSA4LjkwOTA5IDg2Ljc2MDcgOC42ODg5MiA4Ni40Nzk0IDguMzkwNjJDODYuMjAxIDguMDg5NDkgODYuMDYxOCA3LjcxMzA3IDg2LjA2MTggNy4yNjEzNkM4Ni4wNjE4IDYuODkyMDUgODYuMTY1NSA2LjU2NTM0IDg2LjM3MjkgNi4yODEyNUM4Ni41ODMxIDUuOTk3MTYgODYuODY4NiA1Ljc3NDE1IDg3LjIyOTQgNS42MTIyMkM4Ny41OTMgNS40NTAyOCA4OC4wMDUgNS4zNjkzMiA4OC40NjUyIDUuMzY5MzJDODkuMTEyOSA1LjM2OTMyIDg5LjYyMTQgNS41MTEzNiA4OS45OTA4IDUuNzk1NDVDOTAuMzYyOSA2LjA3OTU1IDkwLjYyNzEgNi40NTQ1NSA5MC43ODM0IDYuOTIwNDVaTTk3LjA1MjkgNi45MjA0NUw5Ni4xNDk1IDcuMTc2MTRDOTYuMDkyNyA3LjAyNTU3IDk2LjAwODkgNi44NzkyNiA5NS44OTgxIDYuNzM3MjJDOTUuNzkwMSA2LjU5MjMzIDk1LjY0MjQgNi40NzMwMSA5NS40NTQ5IDYuMzc5MjZDOTUuMjY3NCA2LjI4NTUxIDk1LjAyNzMgNi4yMzg2NCA5NC43MzQ3IDYuMjM4NjRDOTQuMzM0MiA2LjIzODY0IDk0LjAwMDQgNi4zMzA5NyA5My43MzMzIDYuNTE1NjJDOTMuNDY5MSA2LjY5NzQ0IDkzLjMzNyA2LjkyODk4IDkzLjMzNyA3LjIxMDIzQzkzLjMzNyA3LjQ2MDIzIDkzLjQyNzkgNy42NTc2NyA5My42MDk3IDcuODAyNTZDOTMuNzkxNSA3Ljk0NzQ0IDk0LjA3NTYgOC4wNjgxOCA5NC40NjIgOC4xNjQ3N0w5NS40MzM2IDguNDAzNDFDOTYuMDE4OCA4LjU0NTQ1IDk2LjQ1NDkgOC43NjI3OCA5Ni43NDE4IDkuMDU1NEM5Ny4wMjg4IDkuMzQ1MTcgOTcuMTcyMiA5LjcxODc1IDk3LjE3MjIgMTAuMTc2MUM5Ny4xNzIyIDEwLjU1MTEgOTcuMDY0MyAxMC44ODY0IDk2Ljg0ODQgMTEuMTgxOEM5Ni42MzUzIDExLjQ3NzMgOTYuMzM3IDExLjcxMDIgOTUuOTUzNSAxMS44ODA3Qzk1LjU3IDEyLjA1MTEgOTUuMTIzOSAxMi4xMzY0IDk0LjYxNTQgMTIuMTM2NEM5My45NDc4IDEyLjEzNjQgOTMuMzk1MiAxMS45OTE1IDkyLjk1NzcgMTEuNzAxN0M5Mi41MjAyIDExLjQxMTkgOTIuMjQzMyAxMC45ODg2IDkyLjEyNjggMTAuNDMxOEw5My4wODEzIDEwLjE5MzJDOTMuMTcyMiAxMC41NDU1IDkzLjM0NDEgMTAuODA5NyA5My41OTY5IDEwLjk4NThDOTMuODUyNiAxMS4xNjE5IDk0LjE4NjQgMTEuMjUgOTQuNTk4NCAxMS4yNUM5NS4wNjcxIDExLjI1IDk1LjQzOTMgMTEuMTUwNiA5NS43MTQ4IDEwLjk1MTdDOTUuOTkzMyAxMC43NSA5Ni4xMzI1IDEwLjUwODUgOTYuMTMyNSAxMC4yMjczQzk2LjEzMjUgMTAgOTYuMDUyOSA5LjgwOTY2IDk1Ljg5MzggOS42NTYyNUM5NS43MzQ3IDkuNSA5NS40OTA0IDkuMzgzNTIgOTUuMTYwOSA5LjMwNjgyTDk0LjA3IDkuMDUxMTRDOTMuNDcwNSA4LjkwOTA5IDkzLjAzMDIgOC42ODg5MiA5Mi43NDg5IDguMzkwNjJDOTIuNDcwNSA4LjA4OTQ5IDkyLjMzMTMgNy43MTMwNyA5Mi4zMzEzIDcuMjYxMzZDOTIuMzMxMyA2Ljg5MjA1IDkyLjQzNSA2LjU2NTM0IDkyLjY0MjQgNi4yODEyNUM5Mi44NTI2IDUuOTk3MTYgOTMuMTM4MSA1Ljc3NDE1IDkzLjQ5ODkgNS42MTIyMkM5My44NjI2IDUuNDUwMjggOTQuMjc0NSA1LjM2OTMyIDk0LjczNDcgNS4zNjkzMkM5NS4zODI1IDUuMzY5MzIgOTUuODkxIDUuNTExMzYgOTYuMjYwMyA1Ljc5NTQ1Qzk2LjYzMjUgNi4wNzk1NSA5Ni44OTY3IDYuNDU0NTUgOTcuMDUyOSA2LjkyMDQ1Wk0xMDAuNjEyIDEyLjE1MzRDMTAwLjE5NyAxMi4xNTM0IDk5LjgyMSAxMi4wNzUzIDk5LjQ4MyAxMS45MTlDOTkuMTQ0OSAxMS43NTk5IDk4Ljg3NjQgMTEuNTMxMiA5OC42Nzc2IDExLjIzM0M5OC40Nzg3IDEwLjkzMTggOTguMzc5MyAxMC41NjgyIDk4LjM3OTMgMTAuMTQyQzk4LjM3OTMgOS43NjcwNSA5OC40NTMxIDkuNDYzMDcgOTguNjAwOSA5LjIzMDExQzk4Ljc0ODYgOC45OTQzMiA5OC45NDYgOC44MDk2NiA5OS4xOTMyIDguNjc2MTRDOTkuNDQwMyA4LjU0MjYxIDk5LjcxMzEgOC40NDMxOCAxMDAuMDExIDguMzc3ODRDMTAwLjMxMyA4LjMwOTY2IDEwMC42MTUgOC4yNTU2OCAxMDAuOTE5IDguMjE1OTFDMTAxLjMxNyA4LjE2NDc3IDEwMS42MzkgOC4xMjY0MiAxMDEuODg2IDguMTAwODVDMTAyLjEzNiA4LjA3MjQ0IDEwMi4zMTggOC4wMjU1NyAxMDIuNDMyIDcuOTYwMjNDMTAyLjU0OCA3Ljg5NDg5IDEwMi42MDcgNy43ODEyNSAxMDIuNjA3IDcuNjE5MzJWNy41ODUyM0MxMDIuNjA3IDcuMTY0NzcgMTAyLjQ5MSA2LjgzODA3IDEwMi4yNjEgNi42MDUxMUMxMDIuMDM0IDYuMzcyMTYgMTAxLjY4OSA2LjI1NTY4IDEwMS4yMjYgNi4yNTU2OEMxMDAuNzQ2IDYuMjU1NjggMTAwLjM2OSA2LjM2MDggMTAwLjA5NyA2LjU3MTAyQzk5LjgyMzkgNi43ODEyNSA5OS42MzIxIDcuMDA1NjggOTkuNTIxMyA3LjI0NDMyTDk4LjU2NjggNi45MDM0MUM5OC43MzcyIDYuNTA1NjggOTguOTY0NSA2LjE5NjAyIDk5LjI0ODYgNS45NzQ0M0M5OS41MzU1IDUuNzUgOTkuODQ4IDUuNTkzNzUgMTAwLjE4NiA1LjUwNTY4QzEwMC41MjcgNS40MTQ3NyAxMDAuODYyIDUuMzY5MzIgMTAxLjE5MiA1LjM2OTMyQzEwMS40MDIgNS4zNjkzMiAxMDEuNjQzIDUuMzk0ODkgMTAxLjkxNiA1LjQ0NjAyQzEwMi4xOTIgNS40OTQzMiAxMDIuNDU3IDUuNTk1MTcgMTAyLjcxMyA1Ljc0ODU4QzEwMi45NzIgNS45MDE5OSAxMDMuMTg2IDYuMTMzNTIgMTAzLjM1NyA2LjQ0MzE4QzEwMy41MjcgNi43NTI4NCAxMDMuNjEyIDcuMTY3NjEgMTAzLjYxMiA3LjY4NzVWMTJIMTAyLjYwN1YxMS4xMTM2SDEwMi41NTVDMTAyLjQ4NyAxMS4yNTU3IDEwMi4zNzQgMTEuNDA3NyAxMDIuMjE0IDExLjU2OTZDMTAyLjA1NSAxMS43MzE1IDEwMS44NDQgMTEuODY5MyAxMDEuNTggMTEuOTgzQzEwMS4zMTUgMTIuMDk2NiAxMDAuOTkzIDEyLjE1MzQgMTAwLjYxMiAxMi4xNTM0Wk0xMDAuNzY2IDExLjI1QzEwMS4xNjMgMTEuMjUgMTAxLjQ5OSAxMS4xNzE5IDEwMS43NzEgMTEuMDE1NkMxMDIuMDQ3IDEwLjg1OTQgMTAyLjI1NCAxMC42NTc3IDEwMi4zOTMgMTAuNDEwNUMxMDIuNTM2IDEwLjE2MzQgMTAyLjYwNyA5LjkwMzQxIDEwMi42MDcgOS42MzA2OFY4LjcxMDIzQzEwMi41NjQgOC43NjEzNiAxMDIuNDcgOC44MDgyNCAxMDIuMzI1IDguODUwODVDMTAyLjE4MyA4Ljg5MDYyIDEwMi4wMTggOC45MjYxNCAxMDEuODMxIDguOTU3MzlDMTAxLjY0NiA4Ljk4NTggMTAxLjQ2NiA5LjAxMTM2IDEwMS4yOSA5LjAzNDA5QzEwMS4xMTYgOS4wNTM5OCAxMDAuOTc2IDkuMDcxMDIgMTAwLjg2OCA5LjA4NTIzQzEwMC42MDcgOS4xMTkzMiAxMDAuMzYyIDkuMTc0NzIgMTAwLjEzNSA5LjI1MTQyQzk5LjkxMDUgOS4zMjUyOCA5OS43Mjg3IDkuNDM3NSA5OS41ODk1IDkuNTg4MDdDOTkuNDUzMSA5LjczNTggOTkuMzg0OSA5LjkzNzUgOTkuMzg0OSAxMC4xOTMyQzk5LjM4NDkgMTAuNTQyNiA5OS41MTQyIDEwLjgwNjggOTkuNzcyNyAxMC45ODU4QzEwMC4wMzQgMTEuMTYxOSAxMDAuMzY1IDExLjI1IDEwMC43NjYgMTEuMjVaTTEwOC4wOSAxNC41OTA5QzEwNy42MDQgMTQuNTkwOSAxMDcuMTg2IDE0LjUyODQgMTA2LjgzNyAxNC40MDM0QzEwNi40ODggMTQuMjgxMiAxMDYuMTk2IDE0LjExOTMgMTA1Ljk2MyAxMy45MTc2QzEwNS43MzMgMTMuNzE4OCAxMDUuNTUgMTMuNTA1NyAxMDUuNDE0IDEzLjI3ODRMMTA2LjIxNSAxMi43MTU5QzEwNi4zMDYgMTIuODM1MiAxMDYuNDIxIDEyLjk3MTYgMTA2LjU2IDEzLjEyNUMxMDYuNjk5IDEzLjI4MTIgMTA2Ljg5IDEzLjQxNjIgMTA3LjEzMSAxMy41Mjk4QzEwNy4zNzUgMTMuNjQ2MyAxMDcuNjk1IDEzLjcwNDUgMTA4LjA5IDEzLjcwNDVDMTA4LjYxOCAxMy43MDQ1IDEwOS4wNTQgMTMuNTc2NyAxMDkuMzk4IDEzLjMyMUMxMDkuNzQyIDEzLjA2NTMgMTA5LjkxNCAxMi42NjQ4IDEwOS45MTQgMTIuMTE5M1YxMC43ODk4SDEwOS44MjhDMTA5Ljc1NSAxMC45MDkxIDEwOS42NSAxMS4wNTY4IDEwOS41MTMgMTEuMjMzQzEwOS4zOCAxMS40MDYyIDEwOS4xODYgMTEuNTYxMSAxMDguOTM0IDExLjY5NzRDMTA4LjY4NCAxMS44MzEgMTA4LjM0NiAxMS44OTc3IDEwNy45MTkgMTEuODk3N0MxMDcuMzkxIDExLjg5NzcgMTA2LjkxNyAxMS43NzI3IDEwNi40OTYgMTEuNTIyN0MxMDYuMDc4IDExLjI3MjcgMTA1Ljc0OCAxMC45MDkxIDEwNS41MDMgMTAuNDMxOEMxMDUuMjYyIDkuOTU0NTUgMTA1LjE0MSA5LjM3NSAxMDUuMTQxIDguNjkzMThDMTA1LjE0MSA4LjAyMjczIDEwNS4yNTkgNy40Mzg5MiAxMDUuNDk1IDYuOTQxNzZDMTA1LjczIDYuNDQxNzYgMTA2LjA1OSA2LjA1NTQgMTA2LjQ3OSA1Ljc4MjY3QzEwNi45IDUuNTA3MSAxMDcuMzg1IDUuMzY5MzIgMTA3LjkzNiA1LjM2OTMyQzEwOC4zNjMgNS4zNjkzMiAxMDguNzAxIDUuNDQwMzQgMTA4Ljk1MSA1LjU4MjM5QzEwOS4yMDMgNS43MjE1OSAxMDkuMzk3IDUuODgwNjggMTA5LjUzIDYuMDU5NjZDMTA5LjY2NyA2LjIzNTggMTA5Ljc3MiA2LjM4MDY4IDEwOS44NDYgNi40OTQzMkgxMDkuOTQ4VjUuNDU0NTVIMTEwLjkxOVYxMi4xODc1QzExMC45MTkgMTIuNzUgMTEwLjc5MiAxMy4yMDc0IDExMC41MzYgMTMuNTU5N0MxMTAuMjgzIDEzLjkxNDggMTA5Ljk0MiAxNC4xNzQ3IDEwOS41MTMgMTQuMzM5NUMxMDkuMDg3IDE0LjUwNzEgMTA4LjYxMyAxNC41OTA5IDEwOC4wOSAxNC41OTA5Wk0xMDguMDU2IDEwLjk5NDNDMTA4LjQ1OSAxMC45OTQzIDEwOC44IDEwLjkwMiAxMDkuMDc4IDEwLjcxNzNDMTA5LjM1NyAxMC41MzI3IDEwOS41NjkgMTAuMjY3IDEwOS43MTMgOS45MjA0NUMxMDkuODU4IDkuNTczODYgMTA5LjkzMSA5LjE1OTA5IDEwOS45MzEgOC42NzYxNEMxMDkuOTMxIDguMjA0NTUgMTA5Ljg2IDcuNzg4MzUgMTA5LjcxOCA3LjQyNzU2QzEwOS41NzYgNy4wNjY3NiAxMDkuMzY1IDYuNzg0MDkgMTA5LjA4NyA2LjU3OTU1QzEwOC44MDkgNi4zNzUgMTA4LjQ2NSA2LjI3MjczIDEwOC4wNTYgNi4yNzI3M0MxMDcuNjMgNi4yNzI3MyAxMDcuMjc1IDYuMzgwNjggMTA2Ljk5IDYuNTk2NTlDMTA2LjcwOSA2LjgxMjUgMTA2LjQ5OCA3LjEwMjI3IDEwNi4zNTUgNy40NjU5MUMxMDYuMjE2IDcuODI5NTUgMTA2LjE0NyA4LjIzMjk1IDEwNi4xNDcgOC42NzYxNEMxMDYuMTQ3IDkuMTMwNjggMTA2LjIxOCA5LjUzMjY3IDEwNi4zNiA5Ljg4MjFDMTA2LjUwNSAxMC4yMjg3IDEwNi43MTggMTAuNTAxNCAxMDYuOTk5IDEwLjcwMDNDMTA3LjI4MyAxMC44OTYzIDEwNy42MzUgMTAuOTk0MyAxMDguMDU2IDEwLjk5NDNaTTExNS41MDUgMTIuMTM2NEMxMTQuODc0IDEyLjEzNjQgMTE0LjMzIDExLjk5NzIgMTEzLjg3MyAxMS43MTg4QzExMy40MTggMTEuNDM3NSAxMTMuMDY3IDExLjA0NTUgMTEyLjgyIDEwLjU0MjZDMTEyLjU3NiAxMC4wMzY5IDExMi40NTMgOS40NDg4NiAxMTIuNDUzIDguNzc4NDFDMTEyLjQ1MyA4LjEwNzk1IDExMi41NzYgNy41MTcwNSAxMTIuODIgNy4wMDU2OEMxMTMuMDY3IDYuNDkxNDggMTEzLjQxMSA2LjA5MDkxIDExMy44NTEgNS44MDM5OEMxMTQuMjk0IDUuNTE0MiAxMTQuODExIDUuMzY5MzIgMTE1LjQwMiA1LjM2OTMyQzExNS43NDMgNS4zNjkzMiAxMTYuMDggNS40MjYxNCAxMTYuNDEyIDUuNTM5NzdDMTE2Ljc0NSA1LjY1MzQxIDExNy4wNDcgNS44MzgwNyAxMTcuMzIgNi4wOTM3NUMxMTcuNTkzIDYuMzQ2NTkgMTE3LjgxIDYuNjgxODIgMTE3Ljk3MiA3LjA5OTQzQzExOC4xMzQgNy41MTcwNSAxMTguMjE1IDguMDMxMjUgMTE4LjIxNSA4LjY0MjA1VjkuMDY4MThIMTEzLjE2OVY4LjE5ODg2SDExNy4xOTJDMTE3LjE5MiA3LjgyOTU1IDExNy4xMTggNy41IDExNi45NzEgNy4yMTAyM0MxMTYuODI2IDYuOTIwNDUgMTE2LjYxOCA2LjY5MTc2IDExNi4zNDggNi41MjQxNUMxMTYuMDgxIDYuMzU2NTMgMTE1Ljc2NiA2LjI3MjczIDExNS40MDIgNi4yNzI3M0MxMTUuMDAyIDYuMjcyNzMgMTE0LjY1NSA2LjM3MjE2IDExNC4zNjMgNi41NzEwMkMxMTQuMDczIDYuNzY3MDUgMTEzLjg1IDcuMDIyNzMgMTEzLjY5NCA3LjMzODA3QzExMy41MzcgNy42NTM0MSAxMTMuNDU5IDcuOTkxNDggMTEzLjQ1OSA4LjM1MjI3VjguOTMxODJDMTEzLjQ1OSA5LjQyNjE0IDExMy41NDQgOS44NDUxNyAxMTMuNzE1IDEwLjE4ODlDMTEzLjg4OCAxMC41Mjk4IDExNC4xMjggMTAuNzg5OCAxMTQuNDM1IDEwLjk2ODhDMTE0Ljc0MiAxMS4xNDQ5IDExNS4wOTggMTEuMjMzIDExNS41MDUgMTEuMjMzQzExNS43NjkgMTEuMjMzIDExNi4wMDcgMTEuMTk2IDExNi4yMjEgMTEuMTIyMkMxMTYuNDM2IDExLjA0NTUgMTE2LjYyMyAxMC45MzE4IDExNi43NzkgMTAuNzgxMkMxMTYuOTM1IDEwLjYyNzggMTE3LjA1NiAxMC40Mzc1IDExNy4xNDEgMTAuMjEwMkwxMTguMTEzIDEwLjQ4M0MxMTguMDEgMTAuODEyNSAxMTcuODM4IDExLjEwMjMgMTE3LjU5NyAxMS4zNTIzQzExNy4zNTUgMTEuNTk5NCAxMTcuMDU3IDExLjc5MjYgMTE2LjcwMiAxMS45MzE4QzExNi4zNDcgMTIuMDY4MiAxMTUuOTQ4IDEyLjEzNjQgMTE1LjUwNSAxMi4xMzY0WiIgZmlsbD0iY3VycmVudENvbG9yIi8+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF80MDBfNDExNSkiPgo8cGF0aCBvcGFjaXR5PSIwLjgiIGQ9Ik0xMjYuMjI2IDQuNzY3NzRMMTI3Ljg3MyA1LjcxODIxQzEyOC4yMDMgNS45MDkxMiAxMjguNDg5IDYuMTY4ODUgMTI4LjcxIDYuNDc5OEMxMjguOTMxIDYuNzkwNzUgMTI5LjA4MyA3LjE0NTY0IDEyOS4xNTUgNy41MjA0M0MxMjkuMjI3IDcuODk1MjEgMTI5LjIxOCA4LjI4MTEzIDEyOS4xMjggOC42NTIwMkMxMjkuMDM4IDkuMDIyOSAxMjguODY5IDkuMzcwMSAxMjguNjMzIDkuNjcwMDZMMTI0LjcwNSA3LjQwMjIyQzEyNC41MzIgNy4zMDIzNSAxMjQuMzgxIDcuMTY5MzggMTI0LjI1OSA3LjAxMDkyQzEyNC4xMzggNi44NTI0NSAxMjQuMDQ4IDYuNjcxNTkgMTIzLjk5NyA2LjQ3ODY1QzEyMy45NDUgNi4yODU3MSAxMjMuOTMyIDYuMDg0NDggMTIzLjk1OCA1Ljg4NjQ1QzEyMy45ODQgNS42ODg0MiAxMjQuMDQ5IDUuNDk3NDYgMTI0LjE0OSA1LjMyNDQ3QzEyNC4yNDggNS4xNTE0OSAxMjQuMzgxIDQuOTk5ODcgMTI0LjU0IDQuODc4MjhDMTI0LjY5OCA0Ljc1NjY4IDEyNC44NzkgNC42Njc0OSAxMjUuMDcyIDQuNjE1NzlDMTI1LjI2NSA0LjU2NDA5IDEyNS40NjYgNC41NTA5MSAxMjUuNjY0IDQuNTc2OThDMTI1Ljg2MiA0LjYwMzA1IDEyNi4wNTMgNC42Njc4NyAxMjYuMjI2IDQuNzY3NzRaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPHBhdGggb3BhY2l0eT0iMC41IiBkPSJNMTI2LjIyNiAxMS4zMDE3TDEyNy44NzIgMTAuMzUxM0MxMjguMjAzIDEwLjE2MDQgMTI4LjQ4OSA5LjkwMDYyIDEyOC43MSA5LjU4OTY3QzEyOC45MzEgOS4yNzg3MiAxMjkuMDgzIDguOTIzODMgMTI5LjE1NSA4LjU0OTA0QzEyOS4yMjcgOC4xNzQyNiAxMjkuMjE4IDcuNzg4MzQgMTI5LjEyOCA3LjQxNzQ1QzEyOS4wMzggNy4wNDY1NyAxMjguODY5IDYuNjk5MzggMTI4LjYzMyA2LjM5OTQxTDEyNC43MDUgOC42NjcyNUMxMjQuNTMyIDguNzY3MSAxMjQuMzggOC45MDAwNSAxMjQuMjU5IDkuMDU4NTJDMTI0LjEzNyA5LjIxNjk5IDEyNC4wNDggOS4zOTc4NyAxMjMuOTk2IDkuNTkwODNDMTIzLjk0NCA5Ljc4Mzc5IDEyMy45MzEgOS45ODUwNSAxMjMuOTU3IDEwLjE4MzFDMTIzLjk4MyAxMC4zODEyIDEyNC4wNDggMTAuNTcyMiAxMjQuMTQ4IDEwLjc0NTJDMTI0LjI0OCAxMC45MTgyIDEyNC4zODEgMTEuMDY5OCAxMjQuNTM5IDExLjE5MTRDMTI0LjY5OCAxMS4zMTMxIDEyNC44NzkgMTEuNDAyMiAxMjUuMDcyIDExLjQ1MzlDMTI1LjI2NSAxMS41MDU2IDEyNS40NjYgMTEuNTE4OCAxMjUuNjY0IDExLjQ5MjdDMTI1Ljg2MiAxMS40NjY1IDEyNi4wNTMgMTEuNDAxNyAxMjYuMjI2IDExLjMwMTdaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPHBhdGggb3BhY2l0eT0iMC41IiBkPSJNMTM2Ljc3NCA0Ljc2Nzc1TDEzNS4xMjggNS43MTgyMUMxMzQuNzk3IDUuOTA5MTIgMTM0LjUxMiA2LjE2ODg2IDEzNC4yOSA2LjQ3OThDMTM0LjA2OSA2Ljc5MDc1IDEzMy45MTcgNy4xNDU2NSAxMzMuODQ1IDcuNTIwNDNDMTMzLjc3MyA3Ljg5NTIyIDEzMy43ODIgOC4yODExMyAxMzMuODcyIDguNjUyMDJDMTMzLjk2MiA5LjAyMjkxIDEzNC4xMzEgOS4zNzAxIDEzNC4zNjcgOS42NzAwNkwxMzguMjk1IDcuNDAyMjJDMTM4LjQ2OCA3LjMwMjM1IDEzOC42MTkgNy4xNjkzOSAxMzguNzQxIDcuMDEwOTJDMTM4Ljg2MyA2Ljg1MjQ2IDEzOC45NTIgNi42NzE1OSAxMzkuMDA0IDYuNDc4NjVDMTM5LjA1NSA2LjI4NTcyIDEzOS4wNjggNi4wODQ0OSAxMzkuMDQyIDUuODg2NDVDMTM5LjAxNiA1LjY4ODQyIDEzOC45NTEgNS40OTc0NiAxMzguODUyIDUuMzI0NDhDMTM4Ljc1MiA1LjE1MTQ5IDEzOC42MTkgNC45OTk4OCAxMzguNDYgNC44NzgyOEMxMzguMzAyIDQuNzU2NjkgMTM4LjEyMSA0LjY2NzQ5IDEzNy45MjggNC42MTU4QzEzNy41MzggNC41MTEzOSAxMzcuMTIzIDQuNTY2MDUgMTM2Ljc3NCA0Ljc2Nzc1WiIgZmlsbD0iY3VycmVudENvbG9yIi8+CjxwYXRoIG9wYWNpdHk9IjAuOCIgZD0iTTEzNi43NzQgMTEuMzAxN0wxMzUuMTI4IDEwLjM1MTNDMTM0Ljc5NyAxMC4xNjA0IDEzNC41MTIgOS45MDA2MiAxMzQuMjkgOS41ODk2N0MxMzQuMDY5IDkuMjc4NzIgMTMzLjkxNyA4LjkyMzgzIDEzMy44NDUgOC41NDkwNEMxMzMuNzczIDguMTc0MjYgMTMzLjc4MiA3Ljc4ODM0IDEzMy44NzIgNy40MTc0NUMxMzMuOTYyIDcuMDQ2NTcgMTM0LjEzMSA2LjY5OTM4IDEzNC4zNjcgNi4zOTk0MUwxMzguMjk1IDguNjY3MjVDMTM4LjQ2OCA4Ljc2NzA5IDEzOC42MiA4LjkwMDA0IDEzOC43NDEgOS4wNTg1MUMxMzguODYzIDkuMjE2OTggMTM4Ljk1MiA5LjM5Nzg2IDEzOS4wMDQgOS41OTA4M0MxMzkuMDU2IDkuNzgzOCAxMzkuMDY5IDkuOTg1MDcgMTM5LjA0MyAxMC4xODMxQzEzOS4wMTcgMTAuMzgxMiAxMzguOTUyIDEwLjU3MjIgMTM4Ljg1MiAxMC43NDUyQzEzOC43NTIgMTAuOTE4MyAxMzguNjE5IDExLjA2OTkgMTM4LjQ2MSAxMS4xOTE1QzEzOC4zMDIgMTEuMzEzMSAxMzguMTIxIDExLjQwMjMgMTM3LjkyOCAxMS40NTRDMTM3LjczNSAxMS41MDU3IDEzNy41MzQgMTEuNTE4OCAxMzcuMzM2IDExLjQ5MjdDMTM3LjEzOCAxMS40NjY2IDEzNi45NDcgMTEuNDAxNyAxMzYuNzc0IDExLjMwMTdaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPHBhdGggZD0iTTEzMS41IDkuNTIxNDFDMTMyLjM0IDkuNTIxNDEgMTMzLjAyMSA4Ljg0MDQ1IDEzMy4wMjEgOC4wMDA0NUMxMzMuMDIxIDcuMTYwNDUgMTMyLjM0IDYuNDc5NDkgMTMxLjUgNi40Nzk0OUMxMzAuNjYgNi40Nzk0OSAxMjkuOTc5IDcuMTYwNDUgMTI5Ljk3OSA4LjAwMDQ1QzEyOS45NzkgOC44NDA0NSAxMzAuNjYgOS41MjE0MSAxMzEuNSA5LjUyMTQxWiIgZmlsbD0iY3VycmVudENvbG9yIi8+CjxwYXRoIG9wYWNpdHk9IjAuOCIgZD0iTTEyOC4yMzMgMTMuMjczOUwxMjkuMTg0IDExLjYyNzZDMTI5LjM3NCAxMS4yOTcxIDEyOS42MzQgMTEuMDExNSAxMjkuOTQ1IDEwLjc5MDJDMTMwLjI1NiAxMC41Njg5IDEzMC42MTEgMTAuNDE3IDEzMC45ODYgMTAuMzQ0OUMxMzEuMzYxIDEwLjI3MjcgMTMxLjc0NiAxMC4yODIgMTMyLjExNyAxMC4zNzIxQzEzMi40ODggMTAuNDYyMSAxMzIuODM1IDEwLjYzMDkgMTMzLjEzNSAxMC44NjY5TDEzMC44NjggMTQuNzk0OUMxMzAuNjY2IDE1LjE0NDIgMTMwLjMzNCAxNS4zOTkxIDEyOS45NDQgMTUuNTAzNkMxMjkuNTU0IDE1LjYwOCAxMjkuMTM5IDE1LjU1MzMgMTI4Ljc5IDE1LjM1MTZDMTI4LjQ0IDE1LjE0OTkgMTI4LjE4NiAxNC44MTc3IDEyOC4wODEgMTQuNDI4QzEyNy45NzcgMTQuMDM4NCAxMjguMDMxIDEzLjYyMzIgMTI4LjIzMyAxMy4yNzM5WiIgZmlsbD0iY3VycmVudENvbG9yIi8+CjxwYXRoIG9wYWNpdHk9IjAuNSIgZD0iTTEzNC43NjcgMTMuMjczOUwxMzMuODE3IDExLjYyNzZDMTMzLjYyNiAxMS4yOTcxIDEzMy4zNjYgMTEuMDExNSAxMzMuMDU1IDEwLjc5MDJDMTMyLjc0NCAxMC41Njg5IDEzMi4zODkgMTAuNDE3IDEzMi4wMTQgMTAuMzQ0OUMxMzEuNjQgMTAuMjcyNyAxMzEuMjU0IDEwLjI4MiAxMzAuODgzIDEwLjM3MjFDMTMwLjUxMiAxMC40NjIxIDEzMC4xNjUgMTAuNjMwOSAxMjkuODY1IDEwLjg2NjlMMTMyLjEzMyAxNC43OTQ5QzEzMi4yMzIgMTQuOTY3OSAxMzIuMzY1IDE1LjExOTUgMTMyLjUyNCAxNS4yNDExQzEzMi42ODIgMTUuMzYyNyAxMzIuODYzIDE1LjQ1MTkgMTMzLjA1NiAxNS41MDM2QzEzMy4yNDkgMTUuNTU1MyAxMzMuNDUgMTUuNTY4NCAxMzMuNjQ4IDE1LjU0MjRDMTMzLjg0NiAxNS41MTYzIDEzNC4wMzcgMTUuNDUxNSAxMzQuMjEgMTUuMzUxNkMxMzQuMzgzIDE1LjI1MTcgMTM0LjUzNSAxNS4xMTg4IDEzNC42NTcgMTQuOTYwM0MxMzQuNzc4IDE0LjgwMTggMTM0Ljg2NyAxNC42MjEgMTM0LjkxOSAxNC40MjhDMTM0Ljk3MSAxNC4yMzUxIDEzNC45ODQgMTQuMDMzOSAxMzQuOTU4IDEzLjgzNThDMTM0LjkzMiAxMy42Mzc4IDEzNC44NjcgMTMuNDQ2OCAxMzQuNzY3IDEzLjI3MzlaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPHBhdGggb3BhY2l0eT0iMC41IiBkPSJNMTI4LjIzMyAyLjcyNjM1TDEyOS4xODQgNC4zNzI2QzEyOS4zNzQgNC43MDMwOSAxMjkuNjM0IDQuOTg4NjcgMTI5Ljk0NSA1LjIwOTk5QzEzMC4yNTYgNS40MzEzIDEzMC42MTEgNS41ODMxOCAxMzAuOTg2IDUuNjU1MzNDMTMxLjM2MSA1LjcyNzQ3IDEzMS43NDYgNS43MTgyIDEzMi4xMTcgNS42MjgxNEMxMzIuNDg4IDUuNTM4MDggMTMyLjgzNSA1LjM2OTM0IDEzMy4xMzUgNS4xMzMzNEwxMzAuODY4IDEuMjA1MzNDMTMwLjc2OCAxLjAzMjM1IDEzMC42MzUgMC44ODA3MzMgMTMwLjQ3NiAwLjc1OTEzN0MxMzAuMzE4IDAuNjM3NTQyIDEzMC4xMzcgMC41NDgzNDkgMTI5Ljk0NCAwLjQ5NjY1MkMxMjkuNzUxIDAuNDQ0OTU0IDEyOS41NSAwLjQzMTc2NSAxMjkuMzUyIDAuNDU3ODM3QzEyOS4xNTQgMC40ODM5MDggMTI4Ljk2MyAwLjU0ODczIDEyOC43OSAwLjY0ODYwMkMxMjguNjE3IDAuNzQ4NDczIDEyOC40NjUgMC44ODE0MzggMTI4LjM0NCAxLjAzOTlDMTI4LjIyMiAxLjE5ODM3IDEyOC4xMzMgMS4zNzkyNCAxMjguMDgxIDEuNTcyMTdDMTI4LjAyOSAxLjc2NTExIDEyOC4wMTYgMS45NjYzNCAxMjguMDQyIDIuMTY0MzdDMTI4LjA2OCAyLjM2MjQxIDEyOC4xMzMgMi41NTMzNyAxMjguMjMzIDIuNzI2MzVaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPHBhdGggb3BhY2l0eT0iMC44IiBkPSJNMTM0Ljc2NyAyLjcyNjM1TDEzMy44MTcgNC4zNzI2MUMxMzMuNjI2IDQuNzAzMDkgMTMzLjM2NiA0Ljk4ODY3IDEzMy4wNTUgNS4yMDk5OUMxMzIuNzQ0IDUuNDMxMyAxMzIuMzg5IDUuNTgzMTggMTMyLjAxNCA1LjY1NTMzQzEzMS42NCA1LjcyNzQ4IDEzMS4yNTQgNS43MTgyMSAxMzAuODgzIDUuNjI4MTVDMTMwLjUxMiA1LjUzODA5IDEzMC4xNjUgNS4zNjkzNCAxMjkuODY1IDUuMTMzMzVMMTMyLjEzMyAxLjIwNTM0QzEzMi4zMzQgMC44NTU5ODMgMTMyLjY2NyAwLjYwMTA2MyAxMzMuMDU2IDAuNDk2NjU2QzEzMy40NDYgMC4zOTIyNDggMTMzLjg2MSAwLjQ0NjkwNiAxMzQuMjEgMC42NDg2MDVDMTM0LjU2IDAuODUwMzA1IDEzNC44MTUgMS4xODI1MiAxMzQuOTE5IDEuNTcyMThDMTM1LjAyMyAxLjk2MTgzIDEzNC45NjkgMi4zNzcgMTM0Ljc2NyAyLjcyNjM1WiIgZmlsbD0iY3VycmVudENvbG9yIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNDAwXzQxMTUiPgo8cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjMuNSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",
      ellipsis:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjc1IDEwQzEzLjc1IDEwLjY5MDQgMTQuMzA5NiAxMS4yNSAxNSAxMS4yNUMxNS42OTA0IDExLjI1IDE2LjI1IDEwLjY5MDQgMTYuMjUgMTBDMTYuMjUgOS4zMDk2NCAxNS42OTA0IDguNzUgMTUgOC43NUMxNC4zMDk2IDguNzUgMTMuNzUgOS4zMDk2NCAxMy43NSAxMFoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8cGF0aCBkPSJNOC43NSAxMEM4Ljc1IDEwLjY5MDQgOS4zMDk2NCAxMS4yNSAxMCAxMS4yNUMxMC42OTA0IDExLjI1IDExLjI1IDEwLjY5MDQgMTEuMjUgMTBDMTEuMjUgOS4zMDk2NCAxMC42OTA0IDguNzUgMTAgOC43NUM5LjMwOTY0IDguNzUgOC43NSA5LjMwOTY0IDguNzUgMTBaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPHBhdGggZD0iTTMuNzUgMTBDMy43NSAxMC42OTA0IDQuMzA5NjQgMTEuMjUgNSAxMS4yNUM1LjY5MDM2IDExLjI1IDYuMjUgMTAuNjkwNCA2LjI1IDEwQzYuMjUgOS4zMDk2NCA1LjY5MDM2IDguNzUgNSA4Ljc1QzQuMzA5NjQgOC43NSAzLjc1IDkuMzA5NjQgMy43NSAxMFoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8L3N2Zz4K",
      chevronLeft:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyNCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDE4TDEwIDE0TDE0IDEwIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=",
      chevronRight:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyNCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDEwTDE0IDE0TDEwIDE4IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=",
      doubleChevronLeft:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAzMCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDE4TDE2IDE0TDIwIDEwIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNCAxOEwxMCAxNEwxNCAxMCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",
      doubleChevronRight:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAzMCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDEwTDE0IDE0TDEwIDE4IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNiAxMEwyMCAxNEwxNiAxOCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",
      chevronDown:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuMDIyNTkgMy4zMDgyNEMxLjEzOTggMy4xOTEwNyAxLjI5ODc0IDMuMTI1MjQgMS40NjQ0NyAzLjEyNTI0QzEuNjMwMTkgMy4xMjUyNCAxLjc4OTE0IDMuMTkxMDcgMS45MDYzNCAzLjMwODI0TDUuMDAwMDkgNi40MDE5OUw4LjA5Mzg0IDMuMzA4MjRDOC4yMTE3MiAzLjE5NDM5IDguMzY5NTkgMy4xMzEzOSA4LjUzMzQ3IDMuMTMyODFDOC42OTczNCAzLjEzNDI0IDguODU0MSAzLjE5OTk3IDguOTY5OTggMy4zMTU4NUM5LjA4NTg2IDMuNDMxNzMgOS4xNTE1OSAzLjU4ODQ5IDkuMTUzMDEgMy43NTIzNkM5LjE1NDQ0IDMuOTE2MjMgOS4wOTE0NCA0LjA3NDExIDguOTc3NTkgNC4xOTE5OUw1LjQ0MTk3IDcuNzI3NjFDNS4zMjQ3NiA3Ljg0NDc4IDUuMTY1ODIgNy45MTA2IDUuMDAwMDkgNy45MTA2QzQuODM0MzYgNy45MTA2IDQuNjc1NDIgNy44NDQ3OCA0LjU1ODIyIDcuNzI3NjFMMS4wMjI1OSA0LjE5MTk5QzAuOTA1NDIyIDQuMDc0NzggMC44Mzk2IDMuOTE1ODQgMC44Mzk2IDMuNzUwMTFDMC44Mzk2IDMuNTg0MzggMC45MDU0MjIgMy40MjU0NCAxLjAyMjU5IDMuMzA4MjRaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+Cg==",
      tableChevronDown:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjYgNC44MDAwNUw3Ljk5OTk4IDEwLjRMMi4zOTk5OCA0LjgwMDA1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",
    },
    Wc = {};
  const Fc = {
    name: "InlineSvg",
    inheritAttrs: !1,
    render() {
      return this.svgElSource
        ? ka(
            "svg",
            Object.assign(
              {},
              this.getSvgAttrs(this.svgElSource),
              ((e = this.$attrs),
              Object.keys(e).reduce(
                (t, i) => (
                  !1 !== e[i] &&
                    null !== e[i] &&
                    void 0 !== e[i] &&
                    (t[i] = e[i]),
                  t
                ),
                {}
              )),
              { innerHTML: this.getSvgContent(this.svgElSource) }
            )
          )
        : null;
      var e;
    },
    props: {
      src: { type: String, required: !0 },
      title: { type: String },
      transformSource: { type: Function, default: (e) => e },
      keepDuringLoading: { type: Boolean, default: !0 },
    },
    emits: ["loaded", "unloaded", "error"],
    data: () => ({ svgElSource: null }),
    watch: {
      src(e) {
        this.getSource(e);
      },
    },
    mounted() {
      this.getSource(this.src);
    },
    methods: {
      getSvgAttrs(e) {
        let t = {};
        const i = e.attributes;
        if (!i) return t;
        for (let n = i.length - 1; n >= 0; n--) t[i[n].name] = i[n].value;
        return t;
      },
      getSvgContent(e) {
        return (
          (e = e.cloneNode(!0)),
          (e = this.transformSource(e)),
          this.title &&
            (function (e, t) {
              const i = e.getElementsByTagName("title");
              if (i.length) i[0].textContent = t;
              else {
                const i = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "title"
                );
                (i.textContent = t), e.insertBefore(i, e.firstChild);
              }
            })(e, this.title),
          e.innerHTML
        );
      },
      getSource(e) {
        Wc[e] || (Wc[e] = this.download(e)),
          this.svgElSource &&
            Wc[e].getIsPending() &&
            !this.keepDuringLoading &&
            ((this.svgElSource = null), this.$emit("unloaded")),
          Wc[e]
            .then((e) => {
              (this.svgElSource = e),
                this.$nextTick(() => {
                  this.$emit("loaded", this.$el);
                });
            })
            .catch((t) => {
              this.svgElSource &&
                ((this.svgElSource = null), this.$emit("unloaded")),
                delete Wc[e],
                this.$emit("error", t);
            });
      },
      download: (e) =>
        (function (e) {
          if (e.getIsPending) return e;
          let t = !0,
            i = e.then(
              (e) => ((t = !1), e),
              (e) => {
                throw ((t = !1), e);
              }
            );
          return (
            (i.getIsPending = function () {
              return t;
            }),
            i
          );
        })(
          new Promise((t, i) => {
            const n = new XMLHttpRequest();
            n.open("GET", e, !0),
              (n.onload = () => {
                if (n.status >= 200 && n.status < 400)
                  try {
                    const e = new DOMParser();
                    let a = e
                      .parseFromString(n.responseText, "text/xml")
                      .getElementsByTagName("svg")[0];
                    a ? t(a) : i(new Error('Loaded file is not valid SVG"'));
                  } catch (e) {
                    i(e);
                  }
                else i(new Error("Error loading SVG"));
              }),
              (n.onerror = i),
              n.send();
          })
        ),
    },
  };
  const Vc = { key: 0, class: "link has-text-centered" },
    Hc = { class: "passage-branding" },
    Zc = { href: "https://passage.1password.com/", target: "_new_tab" },
    Gc = mi({
      __name: "PassageBranding",
      props: { appInfo: {} },
      setup: (e) => (e, t) =>
        e.appInfo.passage_branding
          ? (Vn(),
            Jn("div", Vc, [
              ia("div", Hc, [
                ia("a", Zc, [
                  na(
                    xt(Fc),
                    {
                      src: xt(Bc).poweredByPassage,
                      alt: "Powered by Passage Icon",
                    },
                    null,
                    8,
                    ["src"]
                  ),
                ]),
              ]),
            ]))
          : ra("", !0),
    }),
    Jc = { class: "view-email-input" },
    $c = { class: "auth-flex-container" },
    Kc = { class: "title main-title has-text-centered" },
    qc = ia("div", { style: { height: "20px" } }, null, -1),
    Xc = { class: "spacer" },
    eg = { class: "link has-text-centered" },
    tg = { key: 0 },
    ig = ["onClick"],
    ng = { key: 1 },
    ag = ["onClick"],
    sg = mi({
      __name: "AuthView",
      props: {
        register: { type: Boolean },
        appInfo: {},
        conditionalUI: { type: Boolean },
        changeEmail: { type: Boolean },
      },
      setup(e) {
        const t = e,
          { t: i } = fl(),
          n = ht(!t.register),
          a = ht(""),
          { defaultCountryCode: s } = gc(),
          r = s,
          o = fa(() => t.appInfo.public_signup);
        function M() {
          n.value = !n.value;
        }
        return (e, t) => (
          Vn(),
          Jn("div", Jc, [
            ia("div", $c, [
              ia(
                "div",
                Kc,
                X(n.value ? xt(i)("login-title") : xt(i)("register-title")),
                1
              ),
              qc,
              gi(
                na(
                  du,
                  {
                    identifier: a.value,
                    "onUpdate:identifier":
                      t[0] || (t[0] = (e) => (a.value = e)),
                    canToggleLoginRegister: !0,
                    countryCode: xt(r),
                    "onUpdate:countryCode":
                      t[1] || (t[1] = (e) => (Tt(r) ? (r.value = e) : null)),
                    appInfo: e.appInfo,
                    visible: n.value,
                    conditionalUI: e.conditionalUI,
                    changeEmail: e.changeEmail,
                  },
                  { loginInput: ti(() => [$i(e.$slots, "loginInput")]), _: 3 },
                  8,
                  [
                    "identifier",
                    "countryCode",
                    "appInfo",
                    "visible",
                    "conditionalUI",
                    "changeEmail",
                  ]
                ),
                [[xs, n.value]]
              ),
              gi(
                na(
                  Oc,
                  {
                    identifier: a.value,
                    "onUpdate:identifier":
                      t[2] || (t[2] = (e) => (a.value = e)),
                    canToggleLoginRegister: !0,
                    countryCode: xt(r),
                    "onUpdate:countryCode":
                      t[3] || (t[3] = (e) => (Tt(r) ? (r.value = e) : null)),
                    appInfo: e.appInfo,
                  },
                  null,
                  8,
                  ["identifier", "countryCode", "appInfo"]
                ),
                [[xs, !n.value]]
              ),
              ia("div", Xc, [na(Rc)]),
              ia("div", eg, [
                n.value && o.value
                  ? (Vn(),
                    Jn("div", tg, [
                      sa(X(xt(i)("dont-have-an-account")) + " ", 1),
                      ia(
                        "a",
                        {
                          onClick: hs(M, ["prevent"]),
                          role: "button",
                          "data-test": "register-link",
                        },
                        X(xt(i)("register-here")),
                        9,
                        ig
                      ),
                    ]))
                  : n.value
                  ? ra("", !0)
                  : (Vn(),
                    Jn("div", ng, [
                      sa(X(xt(i)("already-have-an-account")) + " ", 1),
                      ia(
                        "a",
                        {
                          onClick: hs(M, ["prevent"]),
                          role: "button",
                          "data-test": "login-link",
                        },
                        X(xt(i)("login-here")),
                        9,
                        ag
                      ),
                    ])),
              ]),
            ]),
            na(Gc, { "app-info": e.appInfo }, null, 8, ["app-info"]),
          ])
        );
      },
    });
  var rg = ((e) => (
    (e.LOGIN = "psg_magic_link"), (e.VERIFY = "psg_verify_link"), e
  ))(rg || {});
  const og = ({ magicLink: e, uiState: t, magicLinkUtils: i, passage: n }) => {
      const a = ht(null),
        s = () => {
          t.uiLoading(), (a.value = { auth_token: "", redirect_url: "" });
        },
        r = () => {
          t.uiError();
        },
        o = () => {
          (i.invalidMagicLink.value = !0), t.uiError();
        },
        M = (e) =>
          __async(
            this,
            [e],
            function* ({ webauthnAllowed: e, magicLinkAction: i, result: n }) {
              (a.value = n),
                (e && i !== rg.VERIFY) ||
                  (t.uiSuccess(),
                  yield new Promise((e) => {
                    setTimeout(e, 2e3);
                  })),
                a.value.redirect_url &&
                  gu().emitEvent({
                    type:
                      i === rg.VERIFY ? ru.AuthSuccess : ru.FallbackAuthSuccess,
                    payload: { authResult: n },
                  });
            }
          );
      return {
        authResult: a,
        onBeforeActivate: s,
        onActivateError: r,
        onActivateErrorInvalidMagicLink: o,
        onActivateSuccess: M,
        activateWithoutBiometrics: (t, i) =>
          __async(this, null, function* () {
            s();
            try {
              const a = yield n.magicLinkActivate(e);
              M({ webauthnAllowed: t, magicLinkAction: i, result: a });
            } catch (a) {
              a.statusCode === $s.NotFound ? o() : r();
            }
          }),
      };
    },
    Mg = { class: "auth-flex-container" },
    lg = { class: "image has-text-centered" },
    ug = {
      class: "content has-text-centered",
      "data-test": "activate-magic-link-message",
    },
    cg = { key: 0 },
    gg = { key: 1 },
    dg = { key: 2 },
    Ng = { key: 3 },
    Dg = { key: 4 },
    Ig = {
      key: 0,
      class: "flex-row flex-center",
      style: { padding: "20px 0px" },
    },
    yg = ["onClick", "disabled"],
    jg = { key: 0 },
    pg = { key: 1 },
    zg = { key: 2 },
    Tg = mi({
      __name: "ActivateMagicLink",
      props: { magicLink: {}, webauthnAllowed: { type: Boolean } },
      setup(e) {
        const t = e,
          { t: i } = fl(),
          { appId: n } = Fl(),
          a = new Lr(n.value),
          s = (function () {
            const e = ht(!1),
              t = ht(!1),
              i = ht(!1),
              n = ht(!0),
              { t: a } = fl(),
              s = fa(() =>
                t.value
                  ? a("success")
                  : e.value
                  ? a("something-went-wrong")
                  : a("log-in-with-a-passkey")
              );
            return {
              showFailure: e,
              showSuccess: t,
              loading: i,
              pageLoading: n,
              title: s,
              uiSuccess: () => {
                (t.value = !0), (e.value = !1), (i.value = !1);
              },
              uiError: () => {
                (t.value = !1), (e.value = !0), (i.value = !1);
              },
              uiLoading: () => {
                (t.value = !1), (e.value = !1), (i.value = !0);
              },
            };
          })(),
          {
            showFailure: r,
            showSuccess: o,
            loading: M,
            pageLoading: l,
            title: u,
          } = s,
          c = ((e) => {
            const t = ht(),
              i = ht(!1);
            return {
              magicLinkAction: t,
              invalidMagicLink: i,
              isMagicLinkValid: () => {
                const n = new URLSearchParams(
                  window.location.href.split("?")[1]
                );
                return (
                  n.has("psg_magic_link")
                    ? (t.value = "psg_magic_link")
                    : n.has("psg_verify_link") && (t.value = "psg_verify_link"),
                  (t.value && e) || (i.value = !0),
                  !i.value
                );
              },
            };
          })(t.magicLink),
          { isMagicLinkValid: g, invalidMagicLink: d, magicLinkAction: N } = c,
          D = og({
            uiState: s,
            magicLinkUtils: c,
            passage: a,
            magicLink: t.magicLink,
          });
        function I() {
          d.value
            ? (window.location.href = window.location.href.split("?")[0])
            : D.activateWithoutBiometrics(t.webauthnAllowed, N.value);
        }
        return (
          bi(() =>
            __async(this, null, function* () {
              g()
                ? (yield D.activateWithoutBiometrics(
                    t.webauthnAllowed,
                    N.value
                  ),
                  tu().onEvent.value(Vl.onMagicLinkActivateSuccess))
                : s.uiError(),
                (l.value = !1);
            })
          ),
          (e, t) => (
            Vn(),
            $n(
              Ja,
              { name: "fade", mode: "out-in", appear: "" },
              {
                default: ti(() => [
                  gi(
                    ia(
                      "div",
                      Mg,
                      [
                        ia(
                          "div",
                          {
                            class: Z([
                              "title has-text-centered",
                              [xt(o) ? "main-title" : "secondary-title"],
                            ]),
                          },
                          X(
                            xt(r)
                              ? xt(d)
                                ? xt(i)("invalid-link")
                                : xt(i)("device-login-failed-title")
                              : xt(u)
                          ),
                          3
                        ),
                        ia("figure", lg, [
                          xt(o)
                            ? (Vn(),
                              $n(
                                xt(Fc),
                                {
                                  key: 0,
                                  src: xt(Bc).success,
                                  alt: "Magic link success",
                                },
                                null,
                                8,
                                ["src"]
                              ))
                            : xt(r)
                            ? (Vn(),
                              $n(
                                xt(Fc),
                                {
                                  key: 1,
                                  src: xt(Bc).failure,
                                  alt: "Magic link failure",
                                },
                                null,
                                8,
                                ["src"]
                              ))
                            : ra("", !0),
                        ]),
                        ia("div", ug, [
                          xt(o) && xt(N) === xt(rg).LOGIN
                            ? (Vn(),
                              Jn(
                                "div",
                                cg,
                                X(xt(i)("successfully-logged-in-redirect")),
                                1
                              ))
                            : xt(o) && xt(N) === xt(rg).VERIFY
                            ? (Vn(),
                              Jn(
                                "div",
                                gg,
                                X(xt(i)("successfully-changed-email")),
                                1
                              ))
                            : xt(r) && xt(d) && xt(N) === xt(rg).VERIFY
                            ? (Vn(), Jn("div", dg, X(xt(i)("link-invalid")), 1))
                            : xt(r) && xt(d)
                            ? (Vn(),
                              Jn("div", Ng, X(xt(i)("login-link-invalid")), 1))
                            : xt(r) && xt(N) === xt(rg).VERIFY
                            ? (Vn(),
                              Jn(
                                "div",
                                Dg,
                                X(
                                  xt(i)("verification-failed-please-try-again")
                                ),
                                1
                              ))
                            : ra("", !0),
                        ]),
                        xt(r) || xt(o)
                          ? (Vn(),
                            Jn("div", Ig, [
                              ia(
                                "button",
                                {
                                  onClick: hs(I, ["prevent"]),
                                  type: "button",
                                  class: Z([
                                    "button is-primary",
                                    { "is-loading": xt(M) },
                                  ]),
                                  part: "button",
                                  disabled: xt(M),
                                  "data-test": "activate-magic-link-button",
                                },
                                [
                                  xt(r) && xt(d)
                                    ? (Vn(),
                                      Jn(
                                        "span",
                                        jg,
                                        X(xt(i)("request-new-link")),
                                        1
                                      ))
                                    : xt(r)
                                    ? (Vn(),
                                      Jn("span", pg, X(xt(i)("try-again")), 1))
                                    : xt(o)
                                    ? (Vn(),
                                      Jn(
                                        "span",
                                        zg,
                                        X(xt(i)("redirect-now")),
                                        1
                                      ))
                                    : ra("", !0),
                                ],
                                10,
                                yg
                              ),
                            ]))
                          : ra("", !0),
                      ],
                      512
                    ),
                    [[xs, !xt(l)]]
                  ),
                ]),
                _: 1,
              }
            )
          )
        );
      },
    }),
    hg = { class: "view-verify-token" },
    Ag = mi({
      __name: "ActivateMagicLinkView",
      props: { magicLink: {}, webauthnAllowed: { type: Boolean } },
      setup: (e) => (e, t) => (
        Vn(),
        Jn("div", hg, [
          na(
            Tg,
            { magicLink: e.magicLink, webauthnAllowed: e.webauthnAllowed },
            null,
            8,
            ["magicLink", "webauthnAllowed"]
          ),
        ])
      ),
    }),
    mg = { class: "view-email-input" },
    xg = mi({
      __name: "LoginView",
      props: {
        register: { type: Boolean },
        appInfo: {},
        conditionalUI: { type: Boolean },
        changeEmail: { type: Boolean },
      },
      setup(e) {
        const t = ht(""),
          { defaultCountryCode: i } = gc(),
          n = i;
        return (e, i) => (
          Vn(),
          Jn("div", mg, [
            na(
              du,
              {
                identifier: t.value,
                "onUpdate:identifier": i[0] || (i[0] = (e) => (t.value = e)),
                countryCode: xt(n),
                "onUpdate:countryCode":
                  i[1] || (i[1] = (e) => (Tt(n) ? (n.value = e) : null)),
                canToggleLoginRegister: !1,
                appInfo: e.appInfo,
                conditionalUI: e.conditionalUI,
                changeEmail: e.changeEmail,
              },
              { loginInput: ti(() => [$i(e.$slots, "loginInput")]), _: 3 },
              8,
              [
                "identifier",
                "countryCode",
                "appInfo",
                "conditionalUI",
                "changeEmail",
              ]
            ),
            na(Gc, { "app-info": e.appInfo }, null, 8, ["app-info"]),
          ])
        );
      },
    }),
    fg = { class: "view-email-input" },
    kg = mi({
      __name: "RegisterView",
      props: { register: { type: Boolean }, appInfo: {} },
      setup(e) {
        const t = ht(""),
          { defaultCountryCode: i } = gc(),
          n = i;
        return (e, i) => (
          Vn(),
          Jn("div", fg, [
            na(
              Oc,
              {
                identifier: t.value,
                "onUpdate:identifier": i[0] || (i[0] = (e) => (t.value = e)),
                countryCode: xt(n),
                "onUpdate:countryCode":
                  i[1] || (i[1] = (e) => (Tt(n) ? (n.value = e) : null)),
                canToggleLoginRegister: !1,
                appInfo: e.appInfo,
              },
              null,
              8,
              ["identifier", "countryCode", "appInfo"]
            ),
            na(Gc, { "app-info": e.appInfo }, null, 8, ["app-info"]),
          ])
        );
      },
    }),
    Lg = mi({ name: "Spinner" }),
    Og = { class: "spinner-box" },
    wg = { class: "spinner-content" };
  var vg = mu(Lg, [
    [
      "render",
      function (e, t, i, n, a, s) {
        return Vn(), Jn("div", Og, [ia("div", wg, [$i(e.$slots, "default")])]);
      },
    ],
  ]);
  const Eg = { class: "auth-flex-container" },
    Sg = { class: "title has-text-centered" },
    bg = {
      key: 0,
      class: "content has-text-centered",
      style: { "margin-bottom": "15px !important" },
    },
    Cg = ["innerHTML"],
    Ug = { class: "flex-row flex-center" },
    Qg = ["onClick", "disabled"],
    _g = ia("div", { class: "spacer" }, null, -1),
    Yg = { class: "link has-text-centered" },
    Pg = ["onClick"],
    Rg = mi({
      __name: "MagicLink",
      props: {
        identifier: {},
        userIsRegistering: { type: Boolean },
        identifierVerifying: { type: Boolean },
        setupNewDevice: { type: Boolean },
        identifierType: {},
      },
      setup(e) {
        const t = e,
          { t: i, locale: n } = fl(),
          { appId: a } = Fl(),
          s = new Lr(a.value),
          { emitEvent: r } = gu(),
          o = fa(() => t.identifierType === br.email),
          M = fa(() =>
            t.identifierVerifying
              ? o.value
                ? t.userIsRegistering
                  ? i("verify-email-to-register")
                  : i("verify-email-to-login")
                : t.userIsRegistering
                ? i("verify-phone-to-register")
                : i("verify-phone-to-login")
              : o.value
              ? t.userIsRegistering
                ? i("check-email-to-register")
                : i("check-email-to-login")
              : t.userIsRegistering
              ? i("check-phone-to-register")
              : i("check-phone-to-login")
          ),
          l = fa(() => {
            let e = "";
            const n =
                t.identifierType === br.email
                  ? i("messagetype-email")
                  : i("messagetype-sms"),
              a =
                t.identifierType === br.email ? i("email") : i("phone-number"),
              s = t.userIsRegistering ? i("registration") : i("login"),
              r = t.identifierVerifying
                ? i("please-verify-identifier", [a, s])
                : i("you-will-be-automatically-signed-in");
            return (
              (e = i("weve-sent-messagetype", [n, t.identifier, r])),
              t.setupNewDevice &&
                !t.userIsRegistering &&
                (e = i("we-dont-recognize-this-device") + " " + e),
              e
            );
          });
        function u() {
          localStorage.removeItem("email"),
            localStorage.removeItem("magic_link_id"),
            localStorage.removeItem("wait_count"),
            j(721),
            r({ type: ru.ChangeIdentifier, payload: void 0 });
        }
        function c() {
          return __async(this, null, function* () {
            yield N();
          });
        }
        bi(() => {
          t.userIsRegistering
            ? (function () {
                __async(this, null, function* () {
                  (g.value = !1),
                    (d.value = !0),
                    yield new Promise((e) => {
                      setTimeout(e, 2e3);
                    });
                  try {
                    const e = yield s.newRegisterMagicLink(
                      t.identifier,
                      n.value.split("-")[0]
                    );
                    "" != e.id &&
                      (localStorage.setItem("magic_link_id", e.id), j(0));
                  } catch (e) {
                    console.log("magicLinkSend error", e);
                  } finally {
                    d.value = !1;
                  }
                });
              })()
            : N();
        });
        const g = ht(!1),
          d = ht(!0);
        function N() {
          return __async(this, null, function* () {
            (g.value = !1), (d.value = !0);
            try {
              const e = yield s.newLoginMagicLink(
                t.identifier,
                n.value.split("-")[0]
              );
              "" != e.id && (localStorage.setItem("magic_link_id", e.id), j(0));
            } catch (e) {
              console.log("magicLinkSend error", e);
            } finally {
              yield new Promise((e) => {
                setTimeout(e, 3e3);
              }),
                (d.value = !1);
            }
          });
        }
        let D, I;
        function y() {
          return __async(this, null, function* () {
            const e = localStorage.getItem("magic_link_id");
            yield (function (e) {
              return __async(this, null, function* () {
                yield s
                  .getMagicLinkStatus(e)
                  .then((e) => {
                    j(721), (D = e);
                  })
                  .catch(() => {});
              });
            })(e).then(() =>
              __async(this, null, function* () {
                D &&
                  "" != D.redirect_url &&
                  (localStorage.removeItem("magic_link_id"),
                  localStorage.removeItem("wait_count"),
                  tu().onEvent.value(Vl.onMagicLinkActivated),
                  r({
                    type: ru.FallbackAuthSuccess,
                    payload: { identifier: t.identifier, authResult: D },
                  }));
              })
            );
          });
        }
        function j(e) {
          let t = e;
          if (!(t < 720)) return clearTimeout(I), void (g.value = !1);
          (g.value = !0),
            (I = setTimeout(
              () =>
                __async(this, null, function* () {
                  !(function (e) {
                    y(), localStorage.setItem("wait_count", e.toString());
                  })(t),
                    t++,
                    j(t);
                }),
              5e3
            ));
        }
        return (e, t) => (
          Vn(),
          Jn("div", Eg, [
            ia("div", Sg, [ia("span", null, X(M.value), 1)]),
            na(vg, null, {
              default: ti(() => [
                o.value
                  ? (Vn(),
                    $n(
                      xt(Fc),
                      { key: 0, src: xt(Bc).email, alt: "Email envelope" },
                      null,
                      8,
                      ["src"]
                    ))
                  : (Vn(),
                    $n(
                      xt(Fc),
                      { key: 1, src: xt(Bc).phone, alt: "Message bubbles" },
                      null,
                      8,
                      ["src"]
                    )),
              ]),
              _: 1,
            }),
            l.value
              ? (Vn(),
                Jn("div", bg, [
                  ia("span", { innerHTML: l.value }, null, 8, Cg),
                ]))
              : ra("", !0),
            ia("div", Ug, [
              ia(
                "button",
                {
                  onClick: hs(c, ["prevent"]),
                  type: "button",
                  class: "button is-primary",
                  part: "button",
                  disabled: d.value,
                },
                X(
                  xt(i)("resend-isemail-email-message", [
                    o.value ? xt(i)("email") : xt(i)("message"),
                  ])
                ),
                9,
                Qg
              ),
            ]),
            _g,
            ia("div", Yg, [
              ia(
                "a",
                {
                  onClick: hs(u, ["prevent"]),
                  role: "button",
                  "data-test": "change-email-button",
                },
                X(
                  xt(i)("change-isemail-email-phone", [
                    o.value ? xt(i)("email") : xt(i)("phone"),
                  ])
                ),
                9,
                Pg
              ),
            ]),
          ])
        );
      },
    }),
    Bg = { class: "view-access-token" },
    Wg = mi({
      __name: "MagicLinkView",
      props: {
        identifier: {},
        userIsRegistering: { type: Boolean },
        identifierVerifying: { type: Boolean },
        setupNewDevice: { type: Boolean },
        identifierType: {},
      },
      setup: (e) => (e, t) => (
        Vn(),
        Jn("div", Bg, [
          na(
            Rg,
            {
              identifier: e.identifier,
              userIsRegistering: e.userIsRegistering,
              identifierVerifying: e.identifierVerifying,
              setupNewDevice: e.setupNewDevice,
              identifierType: e.identifierType,
            },
            null,
            8,
            [
              "identifier",
              "userIsRegistering",
              "identifierVerifying",
              "setupNewDevice",
              "identifierType",
            ]
          ),
        ])
      ),
    }),
    Fg = { class: "passage-learnmore-modal" },
    Vg = { class: "passage-learnmore-top" },
    Hg = { class: "passage-learnmore-close-button" },
    Zg = { class: "passage-learnmore-content" },
    Gg = { style: { "margin-bottom": "32px" } },
    Jg = mi({
      __name: "LearnMoreLayout",
      setup(e) {
        const { t: t } = fl(),
          i = ht(!1);
        return (e, n) => (
          Vn(),
          Jn(
            Yn,
            null,
            [
              i.value
                ? (Vn(),
                  Jn(
                    "div",
                    {
                      key: 0,
                      class: "passage-learnmore",
                      onClick: n[1] || (n[1] = (e) => (i.value = !1)),
                    },
                    [
                      ia("div", Fg, [
                        ia("div", Vg, [
                          ia(
                            "div",
                            {
                              style: { cursor: "pointer" },
                              onClick: n[0] || (n[0] = (e) => (i.value = !1)),
                            },
                            [
                              ia("span", Hg, X(xt(t)("close")), 1),
                              na(xt(Fc), { src: xt(Bc).close }, null, 8, [
                                "src",
                              ]),
                            ]
                          ),
                        ]),
                        ia("div", Zg, [$i(e.$slots, "body")]),
                      ]),
                    ]
                  ))
                : ra("", !0),
              ia("div", null, [
                ia("div", Gg, [
                  ia("span", null, [$i(e.$slots, "cta"), sa(" Â  ")]),
                  ia(
                    "a",
                    {
                      style: { "text-decoration": "underline" },
                      onClick: n[2] || (n[2] = (e) => (i.value = !0)),
                      role: "button",
                    },
                    X(xt(t)("learn-more")),
                    1
                  ),
                  sa(" â†’ "),
                ]),
              ]),
            ],
            64
          )
        );
      },
    }),
    $g = { style: { "margin-bottom": "12px" } },
    Kg = { class: "passage-learnmore-header" },
    qg = { class: "passage-learnmore-body" },
    Xg = { class: "passage-learnmore-header" },
    ed = { class: "passage-learnmore-body" },
    td = { class: "passage-learnmore-header" },
    id = { class: "passage-learnmore-body" },
    nd = mi({
      __name: "LearnMorePasskey",
      props: { cta: {} },
      setup(e) {
        const { t: t } = fl();
        return (e, i) => (
          Vn(),
          $n(Jg, null, {
            cta: ti(() => [
              ia("div", $g, X(xt(t)("passkeys-are-a-simple")), 1),
              sa(" " + X(e.cta), 1),
            ]),
            body: ti(() => [
              ia("div", Kg, [
                na(
                  xt(Fc),
                  { src: xt(Bc).privateIcon, style: { "margin-right": "8px" } },
                  null,
                  8,
                  ["src"]
                ),
                sa(" " + X(xt(t)("private")), 1),
              ]),
              ia("div", qg, X(xt(t)("unlock-your-passkey")), 1),
              ia("div", Xg, [
                na(
                  xt(Fc),
                  { src: xt(Bc).secure, style: { "margin-right": "8px" } },
                  null,
                  8,
                  ["src"]
                ),
                sa(" " + X(xt(t)("secure")), 1),
              ]),
              ia("div", ed, X(xt(t)("passkey-is-unique")), 1),
              ia("div", td, [
                na(
                  xt(Fc),
                  { src: xt(Bc).simple, style: { "margin-right": "8px" } },
                  null,
                  8,
                  ["src"]
                ),
                sa(" " + X(xt(t)("simple")), 1),
              ]),
              ia("div", id, X(xt(t)("easy-to-use")), 1),
            ]),
            _: 1,
          })
        );
      },
    }),
    ad = {
      class: "auth-flex-container",
      "data-tag": "register-device-message",
    },
    sd = { class: "title secondary-title has-text-centered" },
    rd = { class: "image has-text-centered" },
    od = { key: 0 },
    Md = { key: 2, class: "flex-row flex-center" },
    ld = ["onClick", "disabled"],
    ud = ["onClick", "disabled"],
    cd = { key: 3, class: "flex-row flex-center" },
    gd = ["onClick", "disabled"],
    dd = ia("div", { class: "spacer" }, null, -1),
    Nd = {
      key: 4,
      class: "content has-text-centered",
      style: { "margin-top": "20px !important" },
    },
    Dd = { class: "link" },
    Id = ["onClick"],
    yd = { class: "link" },
    jd = ["onClick"],
    pd = { key: 0, class: "link" },
    zd = ["onClick"],
    Td = mi({
      __name: "RegisterDevice",
      props: { identifier: {}, identifierType: {}, appInfo: {} },
      setup(e) {
        const t = e,
          i = ht(!1),
          n = ht(!1),
          { t: a, te: s } = fl(),
          { appId: r } = Fl(),
          o = new Lr(r.value),
          { emitEvent: M } = gu(),
          { autofocusButton: l } = wl(),
          u = fa(() => t.identifierType === br.email),
          c = fa(() => {
            var e;
            return null != (e = t.appInfo.auth_fallback_method)
              ? e
              : Er.MagicLink;
          }),
          g = fa(() => t.appInfo.auth_fallback_method !== Er.None),
          d = fa(() =>
            c.value === Er.LoginCode
              ? s("register-with-code")
                ? a("register-with-code")
                : "Register with a code"
              : a("register-with-link", [u.value ? a("email") : a("sms-text")])
          ),
          N = fa(() =>
            c.value === Er.LoginCode
              ? s("send-code")
                ? a("send-code")
                : "Send code"
              : a("send-email-or-text-link", [
                  u.value ? a("email") : a("sms-text"),
                ])
          ),
          D = fa(() => {
            switch (t.appInfo.auth_fallback_method) {
              case Er.LoginCode:
                return s("passkey-create-fail-try-code")
                  ? a("passkey-create-fail-try-code")
                  : "Unable to create a passkey. Try again or register with a one-time code.";
              case Er.MagicLink:
                return a("passkey-create-fail-try-link");
              case Er.None:
                return a("passkey-create-fail-no-fallback");
            }
          });
        function I() {
          M({
            type: ru.FallbackAuth,
            payload: {
              identifier: t.identifier,
              identifierType: t.identifierType,
              userIsRegistering: !0,
              userInitiated: !0,
            },
          });
        }
        function y() {
          localStorage.removeItem("email"),
            gu().emitEvent({ type: ru.ChangeIdentifier, payload: void 0 });
        }
        function j() {
          !(function (e) {
            __async(this, null, function* () {
              (n.value = !0), (i.value = !1);
              try {
                const i = yield o.register(e);
                (n.value = !1),
                  M({
                    type: ru.AuthSuccess,
                    payload: { authResult: i, identifier: t.identifier },
                  });
              } catch (a) {
                (i.value = !0), (n.value = !1);
              }
            });
          })(t.identifier);
        }
        return (e, t) => (
          Vn(),
          Jn("div", ad, [
            ia("div", sd, X(xt(a)("register-with-a-passkey")), 1),
            ia("figure", rd, [
              na(
                xt(Fc),
                {
                  src: xt(Bc).passkey,
                  alt: "Register with a passkey",
                  style: { margin: "5px" },
                },
                null,
                8,
                ["src"]
              ),
            ]),
            i.value
              ? (Vn(), Jn("div", od, [ia("p", null, X(D.value), 1)]))
              : (Vn(),
                $n(
                  nd,
                  { key: 1, cta: xt(a)("register-your-account") },
                  null,
                  8,
                  ["cta"]
                )),
            i.value
              ? (Vn(),
                Jn("div", Md, [
                  ia(
                    "button",
                    {
                      onClick: hs(j, ["prevent"]),
                      type: "button",
                      part: "button",
                      class: "button is-primary",
                      disabled: n.value,
                      style: { "margin-right": "5px" },
                    },
                    X(xt(a)("try-again")),
                    9,
                    ld
                  ),
                  e.appInfo.auth_fallback_method !== xt(Er).None
                    ? (Vn(),
                      Jn(
                        "button",
                        {
                          key: 0,
                          onClick: hs(I, ["prevent"]),
                          type: "button",
                          part: "button button-secondary",
                          class: "button is-secondary",
                          disabled: n.value,
                          style: { "margin-left": "5px" },
                          "data-test": "login-with-email-button",
                          ref_key: "autofocusButton",
                          ref: l,
                        },
                        X(N.value),
                        9,
                        ud
                      ))
                    : ra("", !0),
                ]))
              : (Vn(),
                Jn("div", cd, [
                  ia(
                    "button",
                    {
                      onClick: hs(j, ["prevent"]),
                      type: "button",
                      class: Z(["button", [{ "is-loading": n.value }]]),
                      part: "button",
                      disabled: n.value,
                      "data-test": "register-main-button",
                      tabindex: "0",
                      ref_key: "autofocusButton",
                      ref: l,
                    },
                    [ia("span", null, X(xt(a)("register-with-passkey")), 1)],
                    10,
                    gd
                  ),
                ])),
            dd,
            i.value
              ? (Vn(),
                Jn("div", Nd, [
                  ia("div", Dd, [
                    ia(
                      "a",
                      {
                        onClick: hs(y, ["prevent"]),
                        role: "button",
                        "data-test": "change-email-button",
                      },
                      X(
                        xt(a)("change-isemail-email-phone", [
                          u.value ? xt(a)("email") : xt(a)("phone"),
                        ])
                      ),
                      9,
                      Id
                    ),
                  ]),
                ]))
              : ra("", !0),
            i.value
              ? ra("", !0)
              : (Vn(),
                Jn(
                  "div",
                  {
                    key: 5,
                    class: Z([
                      "flex-row flex-wrap",
                      g.value ? "flex-between" : "flex-center",
                    ]),
                  },
                  [
                    ia("div", yd, [
                      ia(
                        "a",
                        {
                          onClick: hs(y, ["prevent"]),
                          role: "button",
                          "data-test": "change-email-button",
                        },
                        X(xt(a)("back")),
                        9,
                        jd
                      ),
                    ]),
                    g.value
                      ? (Vn(),
                        Jn("div", pd, [
                          ia(
                            "a",
                            {
                              onClick: hs(I, ["prevent"]),
                              role: "button",
                              "data-test": "register-email-button",
                            },
                            X(d.value),
                            9,
                            zd
                          ),
                        ]))
                      : ra("", !0),
                  ],
                  2
                )),
          ])
        );
      },
    }),
    hd = mi({
      __name: "RegisterDeviceView",
      props: { identifier: {}, identifierType: {}, appInfo: {} },
      setup: (e) => (e, t) => (
        Vn(),
        $n(
          Td,
          {
            identifier: e.identifier,
            identifierType: e.identifierType,
            appInfo: e.appInfo,
          },
          null,
          8,
          ["identifier", "identifierType", "appInfo"]
        )
      ),
    }),
    Ad = { class: "auth-flex-container" },
    md = { class: "title has-text-centered" },
    xd = { class: "image has-text-centered", style: { margin: "5px auto" } },
    fd = {
      key: 1,
      class: "wrap-text",
      style: { "margin-bottom": "5px !important" },
    },
    kd = { "data-test": "failure-message" },
    Ld = { key: 2, class: "flex-row flex-center" },
    Od = ["onClick", "disabled"],
    wd = ["onClick", "disabled"],
    vd = ia("div", { class: "spacer" }, null, -1),
    Ed = {
      key: 3,
      class: "content has-text-centered",
      style: { "margin-top": "20px !important" },
    },
    Sd = { class: "link" },
    bd = ["onClick"],
    Cd = { class: "link" },
    Ud = ["onClick"],
    Qd = { key: 0, class: "link" },
    _d = ["onClick"],
    Yd = mi({
      __name: "WebauthnSignIn",
      props: { identifier: {}, identifierType: {}, appInfo: {} },
      setup(e) {
        const t = e,
          i = ht(!1),
          n = ht(!1),
          { t: a, te: s } = fl(),
          { appId: r } = Fl(),
          o = new Lr(r.value),
          { emitEvent: M } = gu(),
          l = fa(() => t.identifierType === br.email),
          { autofocusButton: u } = wl(),
          c = fa(() => {
            var e;
            return null != (e = t.appInfo.auth_fallback_method)
              ? e
              : Er.MagicLink;
          }),
          g = fa(() => t.appInfo.auth_fallback_method !== Er.None),
          d = fa(() =>
            c.value === Er.LoginCode
              ? s("send-code")
                ? a("send-code")
                : "Send code"
              : a("send-email-or-text-link", [
                  l.value ? a("email") : a("sms-text"),
                ])
          ),
          N = fa(() =>
            c.value === Er.LoginCode
              ? s("login-with-code")
                ? a("login-with-code")
                : "Login with a code"
              : a("login-with-link", [l.value ? a("email") : a("sms-text")])
          ),
          D = fa(() => {
            switch (t.appInfo.auth_fallback_method) {
              case Er.LoginCode:
                return s("passkey-login-fail-try-code")
                  ? a("passkey-login-fail-try-code")
                  : "Unable to log in with a passkey. Try again or log in with a one-time code.";
              case Er.MagicLink:
                return a("passkey-login-fail-try-link");
              case Er.None:
                return a("passkey-login-fail-no-fallback");
            }
          });
        function I() {
          return __async(this, null, function* () {
            if (((i.value = !1), t.identifier)) {
              n.value = !0;
              try {
                const e = yield o.login(t.identifier);
                M({
                  type: ru.AuthSuccess,
                  payload: { authResult: e, identifier: t.identifier },
                }),
                  (n.value = !1);
              } catch (e) {
                const a = e;
                (i.value = !0),
                  (n.value = !1),
                  a.statusCode === $s.PSGParsePublicKeyForLoginFailed
                    ? (i.value = !0)
                    : M({
                        type: ru.FallbackAuth,
                        payload: {
                          identifier: t.identifier,
                          identifierType: t.identifierType,
                          userInitiated: !1,
                        },
                      });
              }
            }
          });
        }
        function y() {
          M({
            type: ru.FallbackAuth,
            payload: {
              identifier: t.identifier,
              identifierType: t.identifierType,
              userInitiated: !0,
            },
          });
        }
        function j() {
          localStorage.removeItem("email"),
            M({ type: ru.ChangeIdentifier, payload: void 0 });
        }
        return (
          bi(() => {
            I();
          }),
          (e, t) => (
            Vn(),
            Jn("div", Ad, [
              ia("div", md, X(xt(a)("log-in-with-a-passkey")), 1),
              ia("figure", xd, [
                na(
                  xt(Fc),
                  {
                    src: xt(Bc).passkey,
                    alt: "Log in with a passkey",
                    style: { margin: "5px" },
                  },
                  null,
                  8,
                  ["src"]
                ),
              ]),
              i.value
                ? i.value
                  ? (Vn(),
                    Jn("div", fd, [
                      ia("div", kd, [ia("p", null, X(D.value), 1)]),
                    ]))
                  : ra("", !0)
                : (Vn(),
                  $n(
                    nd,
                    { key: 0, cta: xt(a)("log-into-your-account") },
                    null,
                    8,
                    ["cta"]
                  )),
              i.value
                ? (Vn(),
                  Jn("div", Ld, [
                    ia(
                      "button",
                      {
                        onClick: hs(I, ["prevent"]),
                        type: "button",
                        part: "button",
                        class: "button is-primary",
                        disabled: n.value,
                        style: { "margin-right": "5px" },
                      },
                      X(xt(a)("try-again")),
                      9,
                      Od
                    ),
                    e.appInfo.auth_fallback_method !== xt(Er).None
                      ? (Vn(),
                        Jn(
                          "button",
                          {
                            key: 0,
                            onClick: hs(y, ["prevent"]),
                            type: "button",
                            part: "button button-secondary",
                            class: "button is-secondary",
                            disabled: n.value,
                            style: { "margin-left": "5px" },
                            "data-test": "login-with-email-button",
                            ref_key: "autofocusButton",
                            ref: u,
                          },
                          X(d.value),
                          9,
                          wd
                        ))
                      : ra("", !0),
                  ]))
                : ra("", !0),
              vd,
              i.value
                ? (Vn(),
                  Jn("div", Ed, [
                    ia("div", Sd, [
                      ia(
                        "a",
                        {
                          onClick: hs(j, ["prevent"]),
                          role: "button",
                          "data-test": "change-email-button",
                        },
                        X(
                          xt(a)("change-isemail-email-phone", [
                            l.value ? xt(a)("email") : xt(a)("phone"),
                          ])
                        ),
                        9,
                        bd
                      ),
                    ]),
                  ]))
                : ra("", !0),
              i.value
                ? ra("", !0)
                : (Vn(),
                  Jn(
                    "div",
                    {
                      key: 4,
                      class: Z([
                        "flex-row flex-wrap",
                        g.value ? "flex-between" : "flex-center",
                      ]),
                    },
                    [
                      ia("div", Cd, [
                        ia(
                          "a",
                          {
                            onClick: hs(j, ["prevent"]),
                            role: "button",
                            "data-test": "change-email-button",
                          },
                          X(xt(a)("back")),
                          9,
                          Ud
                        ),
                      ]),
                      g.value
                        ? (Vn(),
                          Jn("div", Qd, [
                            ia(
                              "a",
                              {
                                onClick: hs(y, ["prevent"]),
                                role: "button",
                                "data-test": "register-email-button",
                              },
                              X(N.value),
                              9,
                              _d
                            ),
                          ]))
                        : ra("", !0),
                    ],
                    2
                  )),
            ])
          )
        );
      },
    }),
    Pd = { class: "view-webauthn-sign-in" },
    Rd = mi({
      __name: "WebauthnSignInView",
      props: { identifier: {}, identifierType: {}, appInfo: {} },
      setup: (e) => (e, t) => (
        Vn(),
        Jn("div", Pd, [
          na(
            Yd,
            {
              identifier: e.identifier,
              identifierType: e.identifierType,
              appInfo: e.appInfo,
            },
            null,
            8,
            ["identifier", "identifierType", "appInfo"]
          ),
        ])
      ),
    }),
    Bd = {
      style: { display: "flex", "align-items": "center" },
      class: "psg-otp-single-input-container",
    },
    Wd = [
      "data-test",
      "type",
      "inputtype",
      "placeholder",
      "inputmode",
      "disabled",
      "maxlength",
      "autocomplete",
    ],
    Fd = { key: 0 },
    Vd = ["innerHTML"],
    Hd = mi({
      __name: "OneTimePasscodeSingleInput",
      props: {
        conditionalClass: {},
        focus: { type: Boolean },
        inputClasses: { default: () => [] },
        inputmode: { default: "numeric" },
        inputType: { default: "number" },
        isDisabled: { type: Boolean },
        isLastChild: { type: Boolean },
        placeholder: {},
        separator: { default: "" },
        shouldAutoFocus: { type: Boolean, default: !1 },
        value: { default: "" },
        isFirstChild: { type: Boolean },
        inputIdx: {},
        inputCount: {},
      },
      emits: ["on-change", "on-keydown", "on-paste", "on-focus", "on-blur"],
      setup(e, { emit: t }) {
        const i = e,
          n = ht(i.value || ""),
          a = ht(null),
          s = fa(() =>
            "letter-numeric" === i.inputType ? "text" : i.inputType
          ),
          r = () => (
            (n.value = n.value.toString()),
            n.value.length > 1 && (n.value = n.value.slice(0, 1)),
            t("on-change", n.value)
          ),
          o = (e) => {
            i.isDisabled && e.preventDefault();
            const n = e || window.event,
              a = n.which ? n.which : n.keyCode;
            ((e) => (e >= 48 && e <= 57) || (e >= 96 && e <= 105))(a) ||
            ("letter-numeric" === i.inputType &&
              ((e) => e >= 65 && e <= 90)(a)) ||
            [8, 9, 13, 37, 39, 46, 86].includes(a)
              ? t("on-keydown", e)
              : n.preventDefault();
          },
          M = (e) => t("on-paste", e),
          l = () => (a.value.select(), t("on-focus")),
          u = () => t("on-blur");
        return (
          oi(
            () => i.value,
            (e, t) => {
              e !== t && (n.value = e);
            }
          ),
          oi(
            () => i.focus,
            (e, t) => {
              t !== e &&
                a.value &&
                i.focus &&
                (a.value.focus(), a.value.select());
            }
          ),
          bi(() => {
            a.value &&
              i.focus &&
              i.shouldAutoFocus &&
              (a.value.focus(), a.value.select());
          }),
          (e, t) => (
            Vn(),
            Jn("div", Bd, [
              gi(
                ia(
                  "input",
                  {
                    "data-test": `single-input-${e.inputIdx}`,
                    type: s.value,
                    inputtype: s.value,
                    placeholder: e.placeholder,
                    inputmode: e.inputmode,
                    disabled: e.isDisabled,
                    ref_key: "input",
                    ref: a,
                    pattern: "[0-9]*",
                    maxlength: e.isFirstChild ? e.inputCount : 1,
                    min: "0",
                    max: "9",
                    "onUpdate:modelValue":
                      t[0] || (t[0] = (e) => (n.value = e)),
                    class: Z([
                      "psg-input",
                      "psg-otp-input",
                      [...(e.inputClasses || [])],
                    ]),
                    onInput: r,
                    onKeydown: o,
                    onPaste: M,
                    onFocus: l,
                    onBlur: u,
                    autocomplete: e.isFirstChild ? "one-time-code" : "off",
                  },
                  null,
                  42,
                  Wd
                ),
                [[js, n.value]]
              ),
              !e.isLastChild && e.separator
                ? (Vn(),
                  Jn("span", Fd, [
                    ia("span", { innerHTML: e.separator }, null, 8, Vd),
                  ]))
                : ra("", !0),
            ])
          )
        );
      },
    }),
    Zd = {
      style: { display: "flex", "justify-content": "space-between" },
      class: "psg-otp-input-container",
    },
    Gd = {
      key: 0,
      autocomplete: "off",
      name: "hidden",
      type: "text",
      style: { display: "none" },
    },
    Jd = mi({
      __name: "OneTimePasscodeInput",
      props: {
        value: { default: "" },
        numInputs: { default: 6 },
        separator: { default: "" },
        inputClasses: {},
        conditionalClass: { default: () => [] },
        inputType: { default: "number" },
        inputmode: { default: "numeric" },
        shouldAutoFocus: { type: Boolean, default: !1 },
        placeholder: { default: () => [] },
        isDisabled: { type: Boolean, default: !1 },
        disableNonCurrent: { type: Boolean, default: !1 },
      },
      emits: ["update:value", "on-complete", "on-change"],
      setup(e, { emit: t }) {
        const i = e,
          n = ht(0),
          a = ht([]),
          s = ht([]);
        oi(
          () => i.value,
          (e) => {
            const t = (xt(e) || "").padEnd(i.numInputs, " ").split("");
            a.value = t;
          },
          { immediate: !0 }
        );
        const r = () => {
            n.value = -1;
          },
          o = (e) => {
            n.value = Math.max(Math.min(i.numInputs - 1, e), 0);
          },
          M = () => {
            i.disableNonCurrent
              ? setTimeout(() => {
                  o(n.value + 1);
                }, 200)
              : o(n.value + 1);
          },
          l = () => {
            o(n.value - 1);
          },
          u = (e) => {
            (s.value = Object.assign([], a.value)),
              (a.value[n.value] = e),
              s.value.join("") !== a.value.join("") &&
                (t("update:value", a.value.join("")),
                t("on-change", a.value.join("")));
          },
          c = (e) => {
            var s;
            e.preventDefault();
            const r =
              null == (s = e.clipboardData)
                ? void 0
                : s
                    .getData("text/plain")
                    .slice(0, i.numInputs - n.value)
                    .split("");
            if (
              "number" === i.inputType &&
              !(null == r ? void 0 : r.join("").match(/^\d+$/))
            )
              return "Invalid pasted data";
            if (
              "letter-numeric" === i.inputType &&
              !(null == r ? void 0 : r.join("").match(/^\w+$/))
            )
              return "Invalid pasted data";
            const M = a.value.slice(0, n.value).concat(r || "");
            return (
              M.slice(0, i.numInputs).forEach((e, t) => {
                a.value[t] = e;
              }),
              o(M.slice(0, i.numInputs).length),
              a.value.join("").length === i.numInputs
                ? (t("update:value", a.value.join("")),
                  t("on-complete", a.value.join("")))
                : "Wait until the user enters the required number of characters"
            );
          },
          g = (e) => {
            u(e), M();
          },
          d = (e) => {
            switch (e.keyCode) {
              case 8:
                e.preventDefault(), u(""), l();
                break;
              case 46:
                e.preventDefault(), u("");
                break;
              case 37:
                e.preventDefault(), l();
                break;
              case 39:
                e.preventDefault(), M();
            }
          };
        return (e, t) => (
          Vn(),
          Jn("div", Zd, [
            "password" === e.inputType ? (Vn(), Jn("input", Gd)) : ra("", !0),
            (Vn(!0),
            Jn(
              Yn,
              null,
              Ji(
                e.numInputs,
                (t, i) => (
                  Vn(),
                  $n(
                    Hd,
                    {
                      key: i,
                      focus: n.value === i,
                      value: a.value[i],
                      separator: e.separator,
                      "input-type": e.inputType,
                      inputmode: e.inputmode,
                      "input-classes": e.inputClasses,
                      conditionalClass: e.conditionalClass[i],
                      "is-last-child": i === e.numInputs - 1,
                      "is-first-child": 0 === i,
                      "should-auto-focus": e.shouldAutoFocus,
                      placeholder: e.placeholder[i],
                      "is-disabled":
                        e.isDisabled ||
                        (e.disableNonCurrent &&
                          i > a.value.join("").trim().length),
                      "input-idx": i,
                      "input-count": e.numInputs,
                      onOnChange: g,
                      onOnKeydown: d,
                      onOnPaste: c,
                      onOnFocus: (e) => {
                        return (t = i), void (n.value = t);
                        var t;
                      },
                      onOnBlur: r,
                    },
                    null,
                    8,
                    [
                      "focus",
                      "value",
                      "separator",
                      "input-type",
                      "inputmode",
                      "input-classes",
                      "conditionalClass",
                      "is-last-child",
                      "is-first-child",
                      "should-auto-focus",
                      "placeholder",
                      "is-disabled",
                      "input-idx",
                      "input-count",
                      "onOnFocus",
                    ]
                  )
                )
              ),
              128
            )),
          ])
        );
      },
    }),
    $d = { class: "auth-flex-container" },
    Kd = { class: "title has-text-centered" },
    qd = { class: "content wrap-text" },
    Xd = { style: { "margin-top": "32px", "margin-bottom": "40px" } },
    eN = ["innerHTML"],
    tN = { class: "flex flex-row flex-center" },
    iN = { class: "flex-row", style: { "margin-top": "8px" } },
    nN = { class: "error-message", style: { "min-height": "17px" } },
    aN = { class: "flex-row flex-center", style: { "margin-top": "16px" } },
    sN = ["onClick", "disabled"],
    rN = ia("div", { class: "spacer" }, null, -1),
    oN = { class: "flex-row flex-wrap flex-between" },
    MN = { class: "link" },
    lN = ["onClick"],
    uN = { class: "link" },
    cN = ["onClick"],
    gN = mi({
      __name: "OneTimePasscode",
      props: {
        identifier: {},
        userIsRegistering: { type: Boolean },
        identifierVerifying: { type: Boolean },
        setupNewDevice: { type: Boolean },
        identifierType: {},
      },
      setup(e) {
        const t = e,
          { t: i, te: n, locale: a } = fl(),
          { appId: s } = Fl(),
          r = ht(!0),
          o = ht(void 0),
          M = ht(!1),
          l = ht(!1),
          u = ht(void 0),
          c = ht(void 0),
          g = fa(() => (n("enter-code") ? i("enter-code", {}) : "Enter code")),
          d = fa(() =>
            n("enter-code-sent")
              ? i("enter-code-sent", [t.identifier])
              : `A one-time code has been sent to <span style="font-weight: 700;">${t.identifier}</span>. Enter the code here to log in.`
          ),
          N = fa(() => (n("back") ? i("back") : "Back")),
          D = fa(() => (n("resend-code") ? i("resend-code") : "Resend code")),
          I = fa(() => (M.value ? ["has-error"] : [])),
          y = fa(() => false),
          j = fa(() => r.value);
        oi(o, () => {
          var e;
          f(), 6 === (null == (e = o.value) ? void 0 : e.trim().length) && T();
        });
        const p = new Lr(s.value),
          z = (e = !1) =>
            __async(this, null, function* () {
              x(), f(), k(), (r.value = !0);
              try {
                const i = e
                  ? yield p.newRegisterOneTimePasscode(
                      t.identifier,
                      a.value.split("-")[0]
                    )
                  : yield p.newLoginOneTimePasscode(
                      t.identifier,
                      a.value.split("-")[0]
                    );
                "" != i.otp_id &&
                  (localStorage.setItem("otp_id", i.otp_id),
                  (c.value = i.otp_id));
              } catch (s) {
                L(
                  n("code-send-error")
                    ? i("code-send-error")
                    : "An error occurred sending the code.",
                  !0
                );
              } finally {
                r.value = !1;
              }
            }),
          T = () =>
            __async(this, null, function* () {
              x(), f(), (r.value = !0);
              try {
                if (!o.value) throw new Error("Login code is undefined.");
                if (6 !== o.value.length)
                  throw new Error("Login code is invalid length.");
                if (!c.value) throw new Error("Login code id is undefined.");
                const e = yield p.oneTimePasscodeActivate(o.value, c.value);
                e &&
                  "" != e.redirect_url &&
                  (localStorage.removeItem("otp_id"),
                  tu().onEvent.value(Vl.onOneTimePasscodeActivated),
                  gu().emitEvent({
                    type: ru.FallbackAuthSuccess,
                    payload: { identifier: t.identifier, authResult: e },
                  }));
              } catch (e) {
                L(
                  n("code-invalid-or-expired")
                    ? i("code-invalid-or-expired")
                    : "Code is invalid or expired. Please try again."
                );
              } finally {
                r.value = !1;
              }
            }),
          h = () => {
            gu().emitEvent({ type: ru.ChangeIdentifier, payload: void 0 });
          },
          A = () => {
            z();
          },
          m = () => {
            T();
          };
        bi(() => {
          z(t.userIsRegistering),
            (function () {
              const e = O.value.getRootNode().host;
              O.value.appendChild(
                (function () {
                  const e = document.createElement("style");
                  return (
                    e.appendChild(
                      document.createTextNode(
                        "\n      .psg-otp-input-container{\n        margin: 0px;\n        padding: 0px;\n        align-items: center;\n        height: auto;\n        width: auto;\n      }\n      .psg-otp-single-input-container{\n        margin: 0px;\n        padding: 0px;\n        height: auto;\n        width: auto;\n      }\n      .psg-otp-input {\n        width: 40px;\n        height: 40px;\n        padding: 0px;\n        margin-left: 4px;\n        margin-right: 4px;\n        font-size: 24px;\n        font-weight: 400;\n        line-height: 29px;\n        border-radius: 4px;\n        border: 1px solid transparent;\n        text-align: center;\n        background-color: var(--passage-otp-input-background-color, #d7d7d7);\n        -moz-appearance: textfield;\n      }\n      .psg-otp-input:read-only {\n        background-color: var(--passage-otp-input-background-color, #d7d7d7);\n      }\n      .psg-otp-input::-webkit-inner-spin-button{\n        -webkit-appearance: none;\n        display: none;\n        margin: 0;\n      }\n      .psg-otp-input::-webkit-outer-spin-button{\n        -webkit-appearance: none;\n        display: none;\n        margin: 0;\n      }\n      .psg-input.has-error{\n        border-color: var(--passage-error-color, #dd0031) !important;\n      }\n      .psg-input.is-danger {\n        border-color: var(--passage-error-color, #dd0031) !important;\n      }\n      .psg-input:focus {\n        outline: none;\n        box-shadow: none !important;\n        border-color: var(--passage-body-text-color, #000000);\n      }\n      .psg-input:active {\n        outline: none;\n        box-shadow: none !important;\n        border-color: var(--passage-body-text-color, #000000);\n      }"
                      )
                    ),
                    e
                  );
                })()
              ),
                e.appendChild(O.value);
            })();
        }),
          Qi(() => {
            O.value.remove();
          });
        const x = () => {
            r.value = !0;
          },
          f = () => {
            (u.value = void 0), (M.value = !1), (l.value = !1);
          },
          k = () => {
            o.value = void 0;
          },
          L = (e, t = !1) => {
            (u.value = e), (M.value = !t), (l.value = t);
          },
          O = ht();
        return (e, t) => (
          Vn(),
          Jn("div", $d, [
            ia("form", null, [
              ia("div", Kd, [ia("span", null, X(g.value), 1)]),
              ia("div", qd, [
                ia("div", Xd, [ia("p", { innerHTML: d.value }, null, 8, eN)]),
              ]),
              ia("div", tN, [
                ia(
                  "div",
                  { ref_key: "otpInput", ref: O, slot: "otpInput" },
                  [
                    na(
                      Jd,
                      {
                        "num-inputs": 6,
                        "is-disabled": y.value,
                        value: o.value,
                        "onUpdate:value": t[0] || (t[0] = (e) => (o.value = e)),
                        "input-classes": I.value,
                        "disable-non-current": !1,
                      },
                      null,
                      8,
                      ["is-disabled", "value", "input-classes"]
                    ),
                  ],
                  512
                ),
                $i(e.$slots, "otpInput"),
              ]),
              ia("div", iN, [ia("div", nN, X(u.value ? u.value : " "), 1)]),
              ia("div", aN, [
                ia(
                  "button",
                  {
                    type: "submit",
                    class: "button is-primary",
                    part: "button",
                    "data-test": "continue-button",
                    onClick: hs(m, ["prevent"]),
                    disabled: j.value,
                  },
                  X(xt(i)("continue")),
                  9,
                  sN
                ),
              ]),
              rN,
              ia("div", oN, [
                ia("div", MN, [
                  ia(
                    "a",
                    {
                      onClick: hs(h, ["prevent"]),
                      role: "button",
                      "data-test": "one-time-passcode-goback-button",
                    },
                    X(N.value),
                    9,
                    lN
                  ),
                ]),
                ia("div", uN, [
                  ia(
                    "a",
                    {
                      onClick: hs(A, ["prevent"]),
                      role: "button",
                      "data-test": "one-time-passcode-resend-button",
                    },
                    X(D.value),
                    9,
                    cN
                  ),
                ]),
              ]),
            ]),
          ])
        );
      },
    }),
    dN = { class: "view-access-token" },
    NN = mi({
      __name: "OneTimePasscodeView",
      props: {
        identifier: {},
        userIsRegistering: { type: Boolean },
        identifierVerifying: { type: Boolean },
        setupNewDevice: { type: Boolean },
        identifierType: {},
      },
      setup: (e) => (e, t) => (
        Vn(),
        Jn("div", dN, [
          na(
            gN,
            {
              identifier: e.identifier,
              userIsRegistering: e.userIsRegistering,
              identifierVerifying: e.identifierVerifying,
              setupNewDevice: e.setupNewDevice,
              identifierType: e.identifierType,
            },
            { otpInput: ti(() => [$i(e.$slots, "otpInput")]), _: 3 },
            8,
            [
              "identifier",
              "userIsRegistering",
              "identifierVerifying",
              "setupNewDevice",
              "identifierType",
            ]
          ),
        ])
      ),
    });
  function DN(e) {
    const t = ht(!1),
      i = ht("");
    return {
      addDevice: function () {
        return __async(this, null, function* () {
          (i.value = ""), (t.value = !0);
          try {
            const i = new Lr(e).getCurrentUser();
            return yield i.addDevice();
          } catch (n) {
            return void (i.value = fl().t("failed-to-add-this-device"));
          } finally {
            t.value = !1;
          }
        });
      },
      addPending: t,
      errorMessage: i,
    };
  }
  const IN = { class: "image has-text-centered" },
    yN = { key: 0 },
    jN = { class: "flex-row flex-center", style: { padding: "20px 0px" } },
    pN = ["onClick", "disabled"],
    zN = { key: 0 },
    TN = { key: 1 },
    hN = { key: 2, class: "link has-text-centered" },
    AN = ["onClick"],
    mN = mi({
      __name: "AddDevice",
      props: { authResult: {}, identifier: {} },
      setup(e) {
        const t = e,
          { t: i } = fl(),
          { appId: n } = Fl(),
          a = ht(!1),
          s = ht(!1),
          r = ht(),
          { addDevice: o, addPending: M } = DN(n.value),
          { autofocusButton: l } = wl(),
          u = fa(() =>
            a.value ? i("something-went-wrong") : i("add-passkey")
          );
        function c() {
          return __async(this, null, function* () {
            var e;
            (r.value = yield o()),
              (null == (e = r.value) ? void 0 : e.id)
                ? ((s.value = !0), (a.value = !1), g())
                : ((a.value = !0), (s.value = !1));
          });
        }
        const g = () => {
          gu().emitEvent({
            type: ru.AuthSuccess,
            payload: { identifier: t.identifier, authResult: t.authResult },
          });
        };
        return (e, t) => (
          Vn(),
          Jn(
            Yn,
            null,
            [
              ia(
                "div",
                {
                  class: Z([
                    "title has-text-centered",
                    [a.value ? "secondary-title" : "main-title"],
                  ]),
                  "data-test": "activate-magic-link-message",
                },
                X(u.value),
                3
              ),
              ia("figure", IN, [
                a.value
                  ? (Vn(),
                    $n(
                      xt(Fc),
                      {
                        key: 0,
                        src: xt(Bc).fingerprintFailed,
                        alt: "Device failure",
                      },
                      null,
                      8,
                      ["src"]
                    ))
                  : (Vn(),
                    $n(
                      xt(Fc),
                      {
                        key: 1,
                        src: xt(Bc).passkey,
                        alt: "Add a passkey",
                        style: { margin: "5px" },
                      },
                      null,
                      8,
                      ["src"]
                    )),
              ]),
              a.value
                ? (Vn(),
                  Jn("div", yN, X(xt(i)("failed-to-add-this-device")), 1))
                : (Vn(),
                  $n(
                    nd,
                    { key: 1, cta: xt(i)("log-into-your-account") },
                    null,
                    8,
                    ["cta"]
                  )),
              ia("div", jN, [
                ia(
                  "button",
                  {
                    onClick: hs(c, ["prevent"]),
                    type: "button",
                    class: Z(["button is-primary", { "is-loading": xt(M) }]),
                    part: "button",
                    disabled: xt(M),
                    "data-test": "save-device-button",
                    ref_key: "autofocusButton",
                    ref: l,
                  },
                  [
                    a.value
                      ? (Vn(), Jn("span", zN, X(xt(i)("try-again")), 1))
                      : (Vn(), Jn("span", TN, X(xt(i)("add-passkey")), 1)),
                  ],
                  10,
                  pN
                ),
              ]),
              s.value
                ? ra("", !0)
                : (Vn(),
                  Jn("div", hN, [
                    ia("div", null, [
                      ia(
                        "a",
                        {
                          onClick: hs(g, ["prevent"]),
                          role: "button",
                          "data-test": "add-device-skip",
                        },
                        X(xt(i)("skip")),
                        9,
                        AN
                      ),
                    ]),
                  ])),
            ],
            64
          )
        );
      },
    }),
    xN = { class: "view-add-device" },
    fN = mi({
      __name: "AddDeviceView",
      props: { authResult: {}, identifier: {} },
      setup: (e) => (e, t) => (
        Vn(),
        Jn("div", xN, [
          na(
            mN,
            { authResult: e.authResult, identifier: e.identifier },
            null,
            8,
            ["authResult", "identifier"]
          ),
        ])
      ),
    }),
    kN = { class: "wrap-text", style: { "margin-bottom": "12px !important" } },
    LN = { class: "passage-learnmore-header" },
    ON = { class: "passage-learnmore-body" },
    wN = { class: "passage-learnmore-header" },
    vN = { class: "passage-learnmore-body" },
    EN = mi({
      __name: "LearnMoreDisabledFallbacks",
      setup(e) {
        const { t: t } = fl();
        return (e, i) => (
          Vn(),
          $n(Jg, null, {
            cta: ti(() => [
              ia("div", kN, X(xt(t)("passkeys-are-required")) + X(" "), 1),
              sa(" " + X(xt(t)("try-again-on-device-with-passkeys")), 1),
            ]),
            body: ti(() => [
              ia("div", LN, X(xt(t)("what-are-passkeys")), 1),
              ia(
                "div",
                ON,
                X(xt(t)("passkeys-are-a-simpler-and-more-secure-alternative")),
                1
              ),
              ia("div", wN, X(xt(t)("devices-that-support-passkeys")), 1),
              ia(
                "div",
                vN,
                X(
                  xt(t)(
                    "devices-with-a-biometric-sensor-are-likely-to-support-passkeys"
                  )
                ),
                1
              ),
            ]),
            _: 1,
          })
        );
      },
    }),
    SN = { class: "auth-flex-container" },
    bN = { class: "title has-text-centered" },
    CN = { class: "image has-text-centered", style: { margin: "5px auto" } },
    UN = ia("div", { class: "spacer" }, null, -1),
    QN = { class: "flex-row flex-wrap flex-center" },
    _N = { class: "link" },
    YN = ["onClick"],
    PN = mi({
      __name: "DisableFallbacks",
      setup(e) {
        const { t: t } = fl(),
          { emitEvent: i } = gu();
        function n() {
          localStorage.removeItem("email"),
            i({ type: ru.ChangeIdentifier, payload: void 0 });
        }
        return (e, i) => (
          Vn(),
          Jn("div", SN, [
            ia("div", bN, X(xt(t)("device-not-supported")), 1),
            ia("figure", CN, [
              na(
                xt(Fc),
                {
                  src: xt(Bc).passkeyArrow,
                  alt: "Device not supported",
                  style: { margin: "5px" },
                },
                null,
                8,
                ["src"]
              ),
            ]),
            na(EN),
            UN,
            ia("div", QN, [
              ia("div", _N, [
                ia(
                  "a",
                  {
                    onClick: hs(n, ["prevent"]),
                    role: "button",
                    "data-test": "change-email-button",
                  },
                  X(xt(t)("back")),
                  9,
                  YN
                ),
              ]),
            ]),
          ])
        );
      },
    }),
    RN = mi({
      __name: "DisableFallbackView",
      setup: (e) => (e, t) => (Vn(), $n(PN)),
    }),
    BN = { class: "auth-flex-container" },
    WN = { class: "title has-text-centered" },
    FN = { class: "image has-text-centered", style: { margin: "5px auto" } },
    VN = { class: "wrap-text", style: { "margin-bottom": "12px !important" } },
    HN = { class: "wrap-text" },
    ZN = ia("div", { class: "spacer" }, null, -1),
    GN = { class: "flex-row flex-wrap flex-center" },
    JN = { class: "link" },
    $N = ["onClick"],
    KN = mi({
      __name: "LoginNotSupported",
      setup(e) {
        const { t: t } = fl(),
          { emitEvent: i } = gu();
        function n() {
          localStorage.removeItem("email"),
            i({ type: ru.ChangeIdentifier, payload: void 0 });
        }
        return (e, i) => (
          Vn(),
          Jn("div", BN, [
            ia("div", WN, X(xt(t)("login-not-supported")), 1),
            ia("figure", FN, [
              na(
                xt(Fc),
                {
                  src: xt(Bc).passkeyArrow,
                  alt: "Device not supported",
                  style: { margin: "5px" },
                },
                null,
                8,
                ["src"]
              ),
            ]),
            ia("div", VN, X(xt(t)("passkeys-are-now-required")), 1),
            ia(
              "div",
              HN,
              X(xt(t)("please-contact-support-to-regain-access")),
              1
            ),
            ZN,
            ia("div", GN, [
              ia("div", JN, [
                ia(
                  "a",
                  {
                    onClick: hs(n, ["prevent"]),
                    role: "button",
                    "data-test": "change-email-button",
                  },
                  X(xt(t)("back")),
                  9,
                  $N
                ),
              ]),
            ]),
          ])
        );
      },
    }),
    qN = mi({
      __name: "LoginNotSupportedView",
      setup: (e) => (e, t) => (Vn(), $n(KN)),
    }),
    XN = { component: sg },
    eD = { component: xg },
    tD = { component: kg },
    iD = { component: hd },
    nD = { component: Wg },
    aD = { component: Rd },
    sD = { component: Ag },
    rD = { component: NN },
    oD = { component: fN },
    MD = { component: RN },
    lD = { component: qN };
  function uD(e) {
    const t = void 0 === e ? Fl().appId : ht(e),
      i = ht(!1),
      n = ht(!0),
      a = ht();
    function s() {
      return __async(this, null, function* () {
        i.value = !1;
        const e = new Lr(t.value);
        try {
          const t = yield e.appInfo();
          yield (function (e) {
            return __async(this, null, function* () {
              yield kl(e), (ml.global.fallbackLocale.value = e);
            });
          })(t.default_language),
            (i.value = !1),
            (a.value = t),
            (n.value = !1);
        } catch (s) {
          (i.value = !0), (n.value = !1);
        }
      });
    }
    return (
      bi(() =>
        __async(this, null, function* () {
          yield s();
        })
      ),
      oi(t, () => {
        s();
      }),
      { appInfo: a, invalidAppId: i, loading: n }
    );
  }
  class cD {
    constructor(e) {
      (this._homeRoute = XN),
        (this._history = []),
        void 0 !== e && (this._homeRoute = e);
    }
    get homeRoute() {
      return this._homeRoute;
    }
    set homeRoute(e) {
      this._homeRoute = e;
    }
    get currentRoute() {
      if (0 !== this._history.length)
        return this._history[this._history.length - 1];
    }
    push(e, t) {
      this._history.push(__spreadProps(__spreadValues({}, e), { props: t }));
    }
    resetRouter() {
      this._history = [];
    }
  }
  const gD = {
      key: 0,
      class: "notification is-danger has-text-centered",
      "data-test": "invalid-app-id",
    },
    dD = mi({
      __name: "SmartRouter",
      props: { homeRoute: {} },
      setup(e) {
        const t = Mt(new cD(e.homeRoute)),
          i = fa(() => t.currentRoute),
          { t: n } = fl(),
          { appInfo: a, loading: s, invalidAppId: r } = uD(),
          { initEventHandler: o } = gu(),
          M = fa(() => {
            var e;
            return null == (e = i.value) ? void 0 : e.component;
          }),
          l = fa(() => {
            var e;
            const t = null == (e = i.value) ? void 0 : e.props;
            return void 0 === t ? {} : t;
          }),
          u = ht(!1);
        return (
          oi(a, () =>
            __async(this, null, function* () {
              (u.value = !1),
                void 0 !== a.value && (yield o(a.value, t), (u.value = !0));
            })
          ),
          (e, t) => (
            Vn(),
            Jn(
              Yn,
              null,
              [
                na(
                  Ja,
                  { name: "fade", mode: "out-in", appear: "" },
                  {
                    default: ti(() => [
                      !xt(s) && u.value
                        ? (Vn(),
                          $n(
                            Hi(M.value),
                            G(ua({ key: 0 }, l.value)),
                            {
                              otpInput: ti(() => [$i(e.$slots, "otpInput")]),
                              loginInput: ti(() => [
                                $i(e.$slots, "loginInput"),
                              ]),
                              _: 3,
                            },
                            16
                          ))
                        : ra("", !0),
                    ]),
                    _: 3,
                  }
                ),
                xt(r)
                  ? (Vn(), Jn("div", gD, X(xt(n)("invalid-app-id")), 1))
                  : ra("", !0),
              ],
              64
            )
          )
        );
      },
    });
  function ND(e) {
    bi(() => {
      if (null === e.value) return;
      const t = e.value.parentNode;
      if (null === t) return;
      const i = document.createElement("link");
      (i.rel = "stylesheet"),
        (i.href =
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.16/css/intlTelInput.css"),
        t.appendChild(i);
    });
  }
  function DD(e) {
    const t = ht(!0);
    return (
      xl(e.lang).finally(() => {
        t.value = !1;
      }),
      oi(
        () => e.lang,
        (t, i) => {
          t !== i && xl(e.lang);
        }
      ),
      { languageLoading: t }
    );
  }
  function ID(e) {
    function t() {
      const { updateAppId: t } = Fl();
      e.appId && t(e.appId);
      const { updateDefaultCountryCode: i } = gc();
      i(e.defaultCountryCode);
      const { setBeforeAuth: n, setOnSuccess: a, setOnEvent: s } = tu();
      n(e.beforeAuth), a(e.onSuccess), s(e.onEvent);
    }
    t(),
      Ci(() => {
        t();
      });
    const { languageLoading: i } = DD(e),
      n = ht();
    return ND(n), { languageLoading: i, containerRef: n };
  }
  const yD = { class: "container" },
    jD = mi({
      __name: "AuthApp.ce",
      props: {
        appId: {},
        beforeAuth: { type: Function },
        onSuccess: { type: Function },
        onEvent: { type: Function },
        lang: {},
        defaultCountryCode: {},
      },
      setup(e) {
        const t = e,
          { languageLoading: i, containerRef: n } = ID(t);
        return (e, t) => (
          Vn(),
          Jn(
            "div",
            {
              id: "passage-auth-container",
              class: "passage-auth",
              ref_key: "containerRef",
              ref: n,
            },
            [
              gi(
                ia(
                  "div",
                  yD,
                  [
                    (Vn(),
                    $n(
                      dD,
                      { key: e.appId, homeRoute: xt(XN) },
                      {
                        otpInput: ti(() => [$i(e.$slots, "otpInput")]),
                        loginInput: ti(() => [$i(e.$slots, "loginInput")]),
                        _: 3,
                      },
                      8,
                      ["homeRoute"]
                    )),
                  ],
                  512
                ),
                [[xs, !xt(i)]]
              ),
            ],
            512
          )
        );
      },
    });
  function pD(e, t) {
    const i = (function (e, t) {
      const i = mi(e);
      class n extends Ha {
        constructor(e) {
          super(i, e, t);
        }
      }
      return (n.def = i), n;
    })(
      __spreadProps(__spreadValues({}, e), {
        styles: [
          ':root .grid-stack-item>.ui-resizable-handle{filter:none}.grid-stack{position:relative}.grid-stack.grid-stack-rtl{direction:ltr}.grid-stack.grid-stack-rtl>.grid-stack-item{direction:rtl}.grid-stack .grid-stack-placeholder>.placeholder-content{border:1px dashed #d3d3d3;margin:0;position:absolute;width:auto;z-index:0!important;text-align:center}.grid-stack>.grid-stack-item{min-width:8.3333333333%;position:absolute;padding:0}.grid-stack>.grid-stack-item>.grid-stack-item-content{margin:0;position:absolute;width:auto;overflow-x:hidden;overflow-y:auto}.grid-stack>.grid-stack-item>.ui-resizable-handle{position:absolute;font-size:.1px;display:block;-ms-touch-action:none;touch-action:none}.grid-stack>.grid-stack-item.ui-resizable-autohide>.ui-resizable-handle,.grid-stack>.grid-stack-item.ui-resizable-disabled>.ui-resizable-handle{display:none}.grid-stack>.grid-stack-item.ui-draggable-dragging,.grid-stack>.grid-stack-item.ui-resizable-resizing{z-index:100}.grid-stack>.grid-stack-item.ui-draggable-dragging>.grid-stack-item-content,.grid-stack>.grid-stack-item.ui-resizable-resizing>.grid-stack-item-content{box-shadow:1px 4px 6px #0003;opacity:.8}.grid-stack>.grid-stack-item>.ui-resizable-se,.grid-stack>.grid-stack-item>.ui-resizable-sw{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDUxMS42MjYgNTExLjYyNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTExLjYyNiA1MTEuNjI3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTMyOC45MDYsNDAxLjk5NGgtMzYuNTUzVjEwOS42MzZoMzYuNTUzYzQuOTQ4LDAsOS4yMzYtMS44MDksMTIuODQ3LTUuNDI2YzMuNjEzLTMuNjE1LDUuNDIxLTcuODk4LDUuNDIxLTEyLjg0NSAgIGMwLTQuOTQ5LTEuODAxLTkuMjMxLTUuNDI4LTEyLjg1MWwtNzMuMDg3LTczLjA5QzI2NS4wNDQsMS44MDksMjYwLjc2LDAsMjU1LjgxMywwYy00Ljk0OCwwLTkuMjI5LDEuODA5LTEyLjg0Nyw1LjQyNCAgIGwtNzMuMDg4LDczLjA5Yy0zLjYxOCwzLjYxOS01LjQyNCw3LjkwMi01LjQyNCwxMi44NTFjMCw0Ljk0NiwxLjgwNyw5LjIyOSw1LjQyNCwxMi44NDVjMy42MTksMy42MTcsNy45MDEsNS40MjYsMTIuODUsNS40MjYgICBoMzYuNTQ1djI5Mi4zNThoLTM2LjU0MmMtNC45NTIsMC05LjIzNSwxLjgwOC0xMi44NSw1LjQyMWMtMy42MTcsMy42MjEtNS40MjQsNy45MDUtNS40MjQsMTIuODU0ICAgYzAsNC45NDUsMS44MDcsOS4yMjcsNS40MjQsMTIuODQ3bDczLjA4OSw3My4wODhjMy42MTcsMy42MTcsNy44OTgsNS40MjQsMTIuODQ3LDUuNDI0YzQuOTUsMCw5LjIzNC0xLjgwNywxMi44NDktNS40MjQgICBsNzMuMDg3LTczLjA4OGMzLjYxMy0zLjYyLDUuNDIxLTcuOTAxLDUuNDIxLTEyLjg0N2MwLTQuOTQ4LTEuODA4LTkuMjMyLTUuNDIxLTEyLjg1NCAgIEMzMzguMTQyLDQwMy44MDIsMzMzLjg1Nyw0MDEuOTk0LDMyOC45MDYsNDAxLjk5NHoiIGZpbGw9IiM2NjY2NjYiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);background-repeat:no-repeat;background-position:center;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}.grid-stack>.grid-stack-item>.ui-resizable-se{-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg)}.grid-stack>.grid-stack-item>.ui-resizable-nw{cursor:nw-resize;width:20px;height:20px;top:0}.grid-stack>.grid-stack-item>.ui-resizable-n{cursor:n-resize;height:10px;top:0;left:25px;right:25px}.grid-stack>.grid-stack-item>.ui-resizable-ne{cursor:ne-resize;width:20px;height:20px;top:0}.grid-stack>.grid-stack-item>.ui-resizable-e{cursor:e-resize;width:10px;top:15px;bottom:15px}.grid-stack>.grid-stack-item>.ui-resizable-se{cursor:se-resize;width:20px;height:20px}.grid-stack>.grid-stack-item>.ui-resizable-s{cursor:s-resize;height:10px;left:25px;bottom:0;right:25px}.grid-stack>.grid-stack-item>.ui-resizable-sw{cursor:sw-resize;width:20px;height:20px}.grid-stack>.grid-stack-item>.ui-resizable-w{cursor:w-resize;width:10px;top:15px;bottom:15px}.grid-stack>.grid-stack-item.ui-draggable-dragging>.ui-resizable-handle{display:none!important}.grid-stack>.grid-stack-item[gs-w="0"]{width:0%}.grid-stack>.grid-stack-item[gs-x="0"]{left:0}.grid-stack>.grid-stack-item[gs-min-w="0"]{min-width:0}.grid-stack>.grid-stack-item[gs-max-w="0"]{max-width:0%}.grid-stack>.grid-stack-item[gs-w="1"]{width:8.3333333333%}.grid-stack>.grid-stack-item[gs-x="1"]{left:8.3333333333%}.grid-stack>.grid-stack-item[gs-min-w="1"]{min-width:8.3333333333%}.grid-stack>.grid-stack-item[gs-max-w="1"]{max-width:8.3333333333%}.grid-stack>.grid-stack-item[gs-w="2"]{width:16.6666666667%}.grid-stack>.grid-stack-item[gs-x="2"]{left:16.6666666667%}.grid-stack>.grid-stack-item[gs-min-w="2"]{min-width:16.6666666667%}.grid-stack>.grid-stack-item[gs-max-w="2"]{max-width:16.6666666667%}.grid-stack>.grid-stack-item[gs-w="3"]{width:25%}.grid-stack>.grid-stack-item[gs-x="3"]{left:25%}.grid-stack>.grid-stack-item[gs-min-w="3"]{min-width:25%}.grid-stack>.grid-stack-item[gs-max-w="3"]{max-width:25%}.grid-stack>.grid-stack-item[gs-w="4"]{width:33.3333333333%}.grid-stack>.grid-stack-item[gs-x="4"]{left:33.3333333333%}.grid-stack>.grid-stack-item[gs-min-w="4"]{min-width:33.3333333333%}.grid-stack>.grid-stack-item[gs-max-w="4"]{max-width:33.3333333333%}.grid-stack>.grid-stack-item[gs-w="5"]{width:41.6666666667%}.grid-stack>.grid-stack-item[gs-x="5"]{left:41.6666666667%}.grid-stack>.grid-stack-item[gs-min-w="5"]{min-width:41.6666666667%}.grid-stack>.grid-stack-item[gs-max-w="5"]{max-width:41.6666666667%}.grid-stack>.grid-stack-item[gs-w="6"]{width:50%}.grid-stack>.grid-stack-item[gs-x="6"]{left:50%}.grid-stack>.grid-stack-item[gs-min-w="6"]{min-width:50%}.grid-stack>.grid-stack-item[gs-max-w="6"]{max-width:50%}.grid-stack>.grid-stack-item[gs-w="7"]{width:58.3333333333%}.grid-stack>.grid-stack-item[gs-x="7"]{left:58.3333333333%}.grid-stack>.grid-stack-item[gs-min-w="7"]{min-width:58.3333333333%}.grid-stack>.grid-stack-item[gs-max-w="7"]{max-width:58.3333333333%}.grid-stack>.grid-stack-item[gs-w="8"]{width:66.6666666667%}.grid-stack>.grid-stack-item[gs-x="8"]{left:66.6666666667%}.grid-stack>.grid-stack-item[gs-min-w="8"]{min-width:66.6666666667%}.grid-stack>.grid-stack-item[gs-max-w="8"]{max-width:66.6666666667%}.grid-stack>.grid-stack-item[gs-w="9"]{width:75%}.grid-stack>.grid-stack-item[gs-x="9"]{left:75%}.grid-stack>.grid-stack-item[gs-min-w="9"]{min-width:75%}.grid-stack>.grid-stack-item[gs-max-w="9"]{max-width:75%}.grid-stack>.grid-stack-item[gs-w="10"]{width:83.3333333333%}.grid-stack>.grid-stack-item[gs-x="10"]{left:83.3333333333%}.grid-stack>.grid-stack-item[gs-min-w="10"]{min-width:83.3333333333%}.grid-stack>.grid-stack-item[gs-max-w="10"]{max-width:83.3333333333%}.grid-stack>.grid-stack-item[gs-w="11"]{width:91.6666666667%}.grid-stack>.grid-stack-item[gs-x="11"]{left:91.6666666667%}.grid-stack>.grid-stack-item[gs-min-w="11"]{min-width:91.6666666667%}.grid-stack>.grid-stack-item[gs-max-w="11"]{max-width:91.6666666667%}.grid-stack>.grid-stack-item[gs-w="12"]{width:100%}.grid-stack>.grid-stack-item[gs-x="12"]{left:100%}.grid-stack>.grid-stack-item[gs-min-w="12"]{min-width:100%}.grid-stack>.grid-stack-item[gs-max-w="12"]{max-width:100%}.grid-stack.grid-stack-1>.grid-stack-item{min-width:100%}.grid-stack.grid-stack-1>.grid-stack-item[gs-w="1"]{width:100%}.grid-stack.grid-stack-1>.grid-stack-item[gs-x="1"]{left:100%}.grid-stack.grid-stack-1>.grid-stack-item[gs-min-w="1"]{min-width:100%}.grid-stack.grid-stack-1>.grid-stack-item[gs-max-w="1"]{max-width:100%}.grid-stack.grid-stack-animate,.grid-stack.grid-stack-animate .grid-stack-item{-webkit-transition:left .3s,top .3s,height .3s,width .3s;-moz-transition:left .3s,top .3s,height .3s,width .3s;-ms-transition:left .3s,top .3s,height .3s,width .3s;-o-transition:left .3s,top .3s,height .3s,width .3s;transition:left .3s,top .3s,height .3s,width .3s}.grid-stack.grid-stack-animate .grid-stack-item.grid-stack-placeholder,.grid-stack.grid-stack-animate .grid-stack-item.ui-draggable-dragging,.grid-stack.grid-stack-animate .grid-stack-item.ui-resizable-resizing{-webkit-transition:left 0s,top 0s,height 0s,width 0s;-moz-transition:left 0s,top 0s,height 0s,width 0s;-ms-transition:left 0s,top 0s,height 0s,width 0s;-o-transition:left 0s,top 0s,height 0s,width 0s;transition:left 0s,top 0s,height 0s,width 0s}.grid-stack.grid-stack-2>.grid-stack-item{min-width:50%}.grid-stack.grid-stack-2>.grid-stack-item[gs-w="1"]{width:50%}.grid-stack.grid-stack-2>.grid-stack-item[gs-x="1"]{left:50%}.grid-stack.grid-stack-2>.grid-stack-item[gs-min-w="1"]{min-width:50%}.grid-stack.grid-stack-2>.grid-stack-item[gs-max-w="1"]{max-width:50%}.grid-stack.grid-stack-2>.grid-stack-item[gs-w="2"]{width:100%}.grid-stack.grid-stack-2>.grid-stack-item[gs-x="2"]{left:100%}.grid-stack.grid-stack-2>.grid-stack-item[gs-min-w="2"]{min-width:100%}.grid-stack.grid-stack-2>.grid-stack-item[gs-max-w="2"]{max-width:100%}.grid-stack.grid-stack-3>.grid-stack-item{min-width:33.3333333333%}.grid-stack.grid-stack-3>.grid-stack-item[gs-w="1"]{width:33.3333333333%}.grid-stack.grid-stack-3>.grid-stack-item[gs-x="1"]{left:33.3333333333%}.grid-stack.grid-stack-3>.grid-stack-item[gs-min-w="1"]{min-width:33.3333333333%}.grid-stack.grid-stack-3>.grid-stack-item[gs-max-w="1"]{max-width:33.3333333333%}.grid-stack.grid-stack-3>.grid-stack-item[gs-w="2"]{width:66.6666666667%}.grid-stack.grid-stack-3>.grid-stack-item[gs-x="2"]{left:66.6666666667%}.grid-stack.grid-stack-3>.grid-stack-item[gs-min-w="2"]{min-width:66.6666666667%}.grid-stack.grid-stack-3>.grid-stack-item[gs-max-w="2"]{max-width:66.6666666667%}.grid-stack.grid-stack-3>.grid-stack-item[gs-w="3"]{width:100%}.grid-stack.grid-stack-3>.grid-stack-item[gs-x="3"]{left:100%}.grid-stack.grid-stack-3>.grid-stack-item[gs-min-w="3"]{min-width:100%}.grid-stack.grid-stack-3>.grid-stack-item[gs-max-w="3"]{max-width:100%}.grid-stack.grid-stack-4>.grid-stack-item{min-width:25%}.grid-stack.grid-stack-4>.grid-stack-item[gs-w="1"]{width:25%}.grid-stack.grid-stack-4>.grid-stack-item[gs-x="1"]{left:25%}.grid-stack.grid-stack-4>.grid-stack-item[gs-min-w="1"]{min-width:25%}.grid-stack.grid-stack-4>.grid-stack-item[gs-max-w="1"]{max-width:25%}.grid-stack.grid-stack-4>.grid-stack-item[gs-w="2"]{width:50%}.grid-stack.grid-stack-4>.grid-stack-item[gs-x="2"]{left:50%}.grid-stack.grid-stack-4>.grid-stack-item[gs-min-w="2"]{min-width:50%}.grid-stack.grid-stack-4>.grid-stack-item[gs-max-w="2"]{max-width:50%}.grid-stack.grid-stack-4>.grid-stack-item[gs-w="3"]{width:75%}.grid-stack.grid-stack-4>.grid-stack-item[gs-x="3"]{left:75%}.grid-stack.grid-stack-4>.grid-stack-item[gs-min-w="3"]{min-width:75%}.grid-stack.grid-stack-4>.grid-stack-item[gs-max-w="3"]{max-width:75%}.grid-stack.grid-stack-4>.grid-stack-item[gs-w="4"]{width:100%}.grid-stack.grid-stack-4>.grid-stack-item[gs-x="4"]{left:100%}.grid-stack.grid-stack-4>.grid-stack-item[gs-min-w="4"]{min-width:100%}.grid-stack.grid-stack-4>.grid-stack-item[gs-max-w="4"]{max-width:100%}.grid-stack.grid-stack-5>.grid-stack-item{min-width:20%}.grid-stack.grid-stack-5>.grid-stack-item[gs-w="1"]{width:20%}.grid-stack.grid-stack-5>.grid-stack-item[gs-x="1"]{left:20%}.grid-stack.grid-stack-5>.grid-stack-item[gs-min-w="1"]{min-width:20%}.grid-stack.grid-stack-5>.grid-stack-item[gs-max-w="1"]{max-width:20%}.grid-stack.grid-stack-5>.grid-stack-item[gs-w="2"]{width:40%}.grid-stack.grid-stack-5>.grid-stack-item[gs-x="2"]{left:40%}.grid-stack.grid-stack-5>.grid-stack-item[gs-min-w="2"]{min-width:40%}.grid-stack.grid-stack-5>.grid-stack-item[gs-max-w="2"]{max-width:40%}.grid-stack.grid-stack-5>.grid-stack-item[gs-w="3"]{width:60%}.grid-stack.grid-stack-5>.grid-stack-item[gs-x="3"]{left:60%}.grid-stack.grid-stack-5>.grid-stack-item[gs-min-w="3"]{min-width:60%}.grid-stack.grid-stack-5>.grid-stack-item[gs-max-w="3"]{max-width:60%}.grid-stack.grid-stack-5>.grid-stack-item[gs-w="4"]{width:80%}.grid-stack.grid-stack-5>.grid-stack-item[gs-x="4"]{left:80%}.grid-stack.grid-stack-5>.grid-stack-item[gs-min-w="4"]{min-width:80%}.grid-stack.grid-stack-5>.grid-stack-item[gs-max-w="4"]{max-width:80%}.grid-stack.grid-stack-5>.grid-stack-item[gs-w="5"]{width:100%}.grid-stack.grid-stack-5>.grid-stack-item[gs-x="5"]{left:100%}.grid-stack.grid-stack-5>.grid-stack-item[gs-min-w="5"]{min-width:100%}.grid-stack.grid-stack-5>.grid-stack-item[gs-max-w="5"]{max-width:100%}.grid-stack.grid-stack-6>.grid-stack-item{min-width:16.6666666667%}.grid-stack.grid-stack-6>.grid-stack-item[gs-w="1"]{width:16.6666666667%}.grid-stack.grid-stack-6>.grid-stack-item[gs-x="1"]{left:16.6666666667%}.grid-stack.grid-stack-6>.grid-stack-item[gs-min-w="1"]{min-width:16.6666666667%}.grid-stack.grid-stack-6>.grid-stack-item[gs-max-w="1"]{max-width:16.6666666667%}.grid-stack.grid-stack-6>.grid-stack-item[gs-w="2"]{width:33.3333333333%}.grid-stack.grid-stack-6>.grid-stack-item[gs-x="2"]{left:33.3333333333%}.grid-stack.grid-stack-6>.grid-stack-item[gs-min-w="2"]{min-width:33.3333333333%}.grid-stack.grid-stack-6>.grid-stack-item[gs-max-w="2"]{max-width:33.3333333333%}.grid-stack.grid-stack-6>.grid-stack-item[gs-w="3"]{width:50%}.grid-stack.grid-stack-6>.grid-stack-item[gs-x="3"]{left:50%}.grid-stack.grid-stack-6>.grid-stack-item[gs-min-w="3"]{min-width:50%}.grid-stack.grid-stack-6>.grid-stack-item[gs-max-w="3"]{max-width:50%}.grid-stack.grid-stack-6>.grid-stack-item[gs-w="4"]{width:66.6666666667%}.grid-stack.grid-stack-6>.grid-stack-item[gs-x="4"]{left:66.6666666667%}.grid-stack.grid-stack-6>.grid-stack-item[gs-min-w="4"]{min-width:66.6666666667%}.grid-stack.grid-stack-6>.grid-stack-item[gs-max-w="4"]{max-width:66.6666666667%}.grid-stack.grid-stack-6>.grid-stack-item[gs-w="5"]{width:83.3333333333%}.grid-stack.grid-stack-6>.grid-stack-item[gs-x="5"]{left:83.3333333333%}.grid-stack.grid-stack-6>.grid-stack-item[gs-min-w="5"]{min-width:83.3333333333%}.grid-stack.grid-stack-6>.grid-stack-item[gs-max-w="5"]{max-width:83.3333333333%}.grid-stack.grid-stack-6>.grid-stack-item[gs-w="6"]{width:100%}.grid-stack.grid-stack-6>.grid-stack-item[gs-x="6"]{left:100%}.grid-stack.grid-stack-6>.grid-stack-item[gs-min-w="6"]{min-width:100%}.grid-stack.grid-stack-6>.grid-stack-item[gs-max-w="6"]{max-width:100%}.grid-stack.grid-stack-7>.grid-stack-item{min-width:14.2857142857%}.grid-stack.grid-stack-7>.grid-stack-item[gs-w="1"]{width:14.2857142857%}.grid-stack.grid-stack-7>.grid-stack-item[gs-x="1"]{left:14.2857142857%}.grid-stack.grid-stack-7>.grid-stack-item[gs-min-w="1"]{min-width:14.2857142857%}.grid-stack.grid-stack-7>.grid-stack-item[gs-max-w="1"]{max-width:14.2857142857%}.grid-stack.grid-stack-7>.grid-stack-item[gs-w="2"]{width:28.5714285714%}.grid-stack.grid-stack-7>.grid-stack-item[gs-x="2"]{left:28.5714285714%}.grid-stack.grid-stack-7>.grid-stack-item[gs-min-w="2"]{min-width:28.5714285714%}.grid-stack.grid-stack-7>.grid-stack-item[gs-max-w="2"]{max-width:28.5714285714%}.grid-stack.grid-stack-7>.grid-stack-item[gs-w="3"]{width:42.8571428571%}.grid-stack.grid-stack-7>.grid-stack-item[gs-x="3"]{left:42.8571428571%}.grid-stack.grid-stack-7>.grid-stack-item[gs-min-w="3"]{min-width:42.8571428571%}.grid-stack.grid-stack-7>.grid-stack-item[gs-max-w="3"]{max-width:42.8571428571%}.grid-stack.grid-stack-7>.grid-stack-item[gs-w="4"]{width:57.1428571429%}.grid-stack.grid-stack-7>.grid-stack-item[gs-x="4"]{left:57.1428571429%}.grid-stack.grid-stack-7>.grid-stack-item[gs-min-w="4"]{min-width:57.1428571429%}.grid-stack.grid-stack-7>.grid-stack-item[gs-max-w="4"]{max-width:57.1428571429%}.grid-stack.grid-stack-7>.grid-stack-item[gs-w="5"]{width:71.4285714286%}.grid-stack.grid-stack-7>.grid-stack-item[gs-x="5"]{left:71.4285714286%}.grid-stack.grid-stack-7>.grid-stack-item[gs-min-w="5"]{min-width:71.4285714286%}.grid-stack.grid-stack-7>.grid-stack-item[gs-max-w="5"]{max-width:71.4285714286%}.grid-stack.grid-stack-7>.grid-stack-item[gs-w="6"]{width:85.7142857143%}.grid-stack.grid-stack-7>.grid-stack-item[gs-x="6"]{left:85.7142857143%}.grid-stack.grid-stack-7>.grid-stack-item[gs-min-w="6"]{min-width:85.7142857143%}.grid-stack.grid-stack-7>.grid-stack-item[gs-max-w="6"]{max-width:85.7142857143%}.grid-stack.grid-stack-7>.grid-stack-item[gs-w="7"]{width:100%}.grid-stack.grid-stack-7>.grid-stack-item[gs-x="7"]{left:100%}.grid-stack.grid-stack-7>.grid-stack-item[gs-min-w="7"]{min-width:100%}.grid-stack.grid-stack-7>.grid-stack-item[gs-max-w="7"]{max-width:100%}.grid-stack.grid-stack-8>.grid-stack-item{min-width:12.5%}.grid-stack.grid-stack-8>.grid-stack-item[gs-w="1"]{width:12.5%}.grid-stack.grid-stack-8>.grid-stack-item[gs-x="1"]{left:12.5%}.grid-stack.grid-stack-8>.grid-stack-item[gs-min-w="1"]{min-width:12.5%}.grid-stack.grid-stack-8>.grid-stack-item[gs-max-w="1"]{max-width:12.5%}.grid-stack.grid-stack-8>.grid-stack-item[gs-w="2"]{width:25%}.grid-stack.grid-stack-8>.grid-stack-item[gs-x="2"]{left:25%}.grid-stack.grid-stack-8>.grid-stack-item[gs-min-w="2"]{min-width:25%}.grid-stack.grid-stack-8>.grid-stack-item[gs-max-w="2"]{max-width:25%}.grid-stack.grid-stack-8>.grid-stack-item[gs-w="3"]{width:37.5%}.grid-stack.grid-stack-8>.grid-stack-item[gs-x="3"]{left:37.5%}.grid-stack.grid-stack-8>.grid-stack-item[gs-min-w="3"]{min-width:37.5%}.grid-stack.grid-stack-8>.grid-stack-item[gs-max-w="3"]{max-width:37.5%}.grid-stack.grid-stack-8>.grid-stack-item[gs-w="4"]{width:50%}.grid-stack.grid-stack-8>.grid-stack-item[gs-x="4"]{left:50%}.grid-stack.grid-stack-8>.grid-stack-item[gs-min-w="4"]{min-width:50%}.grid-stack.grid-stack-8>.grid-stack-item[gs-max-w="4"]{max-width:50%}.grid-stack.grid-stack-8>.grid-stack-item[gs-w="5"]{width:62.5%}.grid-stack.grid-stack-8>.grid-stack-item[gs-x="5"]{left:62.5%}.grid-stack.grid-stack-8>.grid-stack-item[gs-min-w="5"]{min-width:62.5%}.grid-stack.grid-stack-8>.grid-stack-item[gs-max-w="5"]{max-width:62.5%}.grid-stack.grid-stack-8>.grid-stack-item[gs-w="6"]{width:75%}.grid-stack.grid-stack-8>.grid-stack-item[gs-x="6"]{left:75%}.grid-stack.grid-stack-8>.grid-stack-item[gs-min-w="6"]{min-width:75%}.grid-stack.grid-stack-8>.grid-stack-item[gs-max-w="6"]{max-width:75%}.grid-stack.grid-stack-8>.grid-stack-item[gs-w="7"]{width:87.5%}.grid-stack.grid-stack-8>.grid-stack-item[gs-x="7"]{left:87.5%}.grid-stack.grid-stack-8>.grid-stack-item[gs-min-w="7"]{min-width:87.5%}.grid-stack.grid-stack-8>.grid-stack-item[gs-max-w="7"]{max-width:87.5%}.grid-stack.grid-stack-8>.grid-stack-item[gs-w="8"]{width:100%}.grid-stack.grid-stack-8>.grid-stack-item[gs-x="8"]{left:100%}.grid-stack.grid-stack-8>.grid-stack-item[gs-min-w="8"]{min-width:100%}.grid-stack.grid-stack-8>.grid-stack-item[gs-max-w="8"]{max-width:100%}.grid-stack.grid-stack-9>.grid-stack-item{min-width:11.1111111111%}.grid-stack.grid-stack-9>.grid-stack-item[gs-w="1"]{width:11.1111111111%}.grid-stack.grid-stack-9>.grid-stack-item[gs-x="1"]{left:11.1111111111%}.grid-stack.grid-stack-9>.grid-stack-item[gs-min-w="1"]{min-width:11.1111111111%}.grid-stack.grid-stack-9>.grid-stack-item[gs-max-w="1"]{max-width:11.1111111111%}.grid-stack.grid-stack-9>.grid-stack-item[gs-w="2"]{width:22.2222222222%}.grid-stack.grid-stack-9>.grid-stack-item[gs-x="2"]{left:22.2222222222%}.grid-stack.grid-stack-9>.grid-stack-item[gs-min-w="2"]{min-width:22.2222222222%}.grid-stack.grid-stack-9>.grid-stack-item[gs-max-w="2"]{max-width:22.2222222222%}.grid-stack.grid-stack-9>.grid-stack-item[gs-w="3"]{width:33.3333333333%}.grid-stack.grid-stack-9>.grid-stack-item[gs-x="3"]{left:33.3333333333%}.grid-stack.grid-stack-9>.grid-stack-item[gs-min-w="3"]{min-width:33.3333333333%}.grid-stack.grid-stack-9>.grid-stack-item[gs-max-w="3"]{max-width:33.3333333333%}.grid-stack.grid-stack-9>.grid-stack-item[gs-w="4"]{width:44.4444444444%}.grid-stack.grid-stack-9>.grid-stack-item[gs-x="4"]{left:44.4444444444%}.grid-stack.grid-stack-9>.grid-stack-item[gs-min-w="4"]{min-width:44.4444444444%}.grid-stack.grid-stack-9>.grid-stack-item[gs-max-w="4"]{max-width:44.4444444444%}.grid-stack.grid-stack-9>.grid-stack-item[gs-w="5"]{width:55.5555555556%}.grid-stack.grid-stack-9>.grid-stack-item[gs-x="5"]{left:55.5555555556%}.grid-stack.grid-stack-9>.grid-stack-item[gs-min-w="5"]{min-width:55.5555555556%}.grid-stack.grid-stack-9>.grid-stack-item[gs-max-w="5"]{max-width:55.5555555556%}.grid-stack.grid-stack-9>.grid-stack-item[gs-w="6"]{width:66.6666666667%}.grid-stack.grid-stack-9>.grid-stack-item[gs-x="6"]{left:66.6666666667%}.grid-stack.grid-stack-9>.grid-stack-item[gs-min-w="6"]{min-width:66.6666666667%}.grid-stack.grid-stack-9>.grid-stack-item[gs-max-w="6"]{max-width:66.6666666667%}.grid-stack.grid-stack-9>.grid-stack-item[gs-w="7"]{width:77.7777777778%}.grid-stack.grid-stack-9>.grid-stack-item[gs-x="7"]{left:77.7777777778%}.grid-stack.grid-stack-9>.grid-stack-item[gs-min-w="7"]{min-width:77.7777777778%}.grid-stack.grid-stack-9>.grid-stack-item[gs-max-w="7"]{max-width:77.7777777778%}.grid-stack.grid-stack-9>.grid-stack-item[gs-w="8"]{width:88.8888888889%}.grid-stack.grid-stack-9>.grid-stack-item[gs-x="8"]{left:88.8888888889%}.grid-stack.grid-stack-9>.grid-stack-item[gs-min-w="8"]{min-width:88.8888888889%}.grid-stack.grid-stack-9>.grid-stack-item[gs-max-w="8"]{max-width:88.8888888889%}.grid-stack.grid-stack-9>.grid-stack-item[gs-w="9"]{width:100%}.grid-stack.grid-stack-9>.grid-stack-item[gs-x="9"]{left:100%}.grid-stack.grid-stack-9>.grid-stack-item[gs-min-w="9"]{min-width:100%}.grid-stack.grid-stack-9>.grid-stack-item[gs-max-w="9"]{max-width:100%}.grid-stack.grid-stack-10>.grid-stack-item{min-width:10%}.grid-stack.grid-stack-10>.grid-stack-item[gs-w="1"]{width:10%}.grid-stack.grid-stack-10>.grid-stack-item[gs-x="1"]{left:10%}.grid-stack.grid-stack-10>.grid-stack-item[gs-min-w="1"]{min-width:10%}.grid-stack.grid-stack-10>.grid-stack-item[gs-max-w="1"]{max-width:10%}.grid-stack.grid-stack-10>.grid-stack-item[gs-w="2"]{width:20%}.grid-stack.grid-stack-10>.grid-stack-item[gs-x="2"]{left:20%}.grid-stack.grid-stack-10>.grid-stack-item[gs-min-w="2"]{min-width:20%}.grid-stack.grid-stack-10>.grid-stack-item[gs-max-w="2"]{max-width:20%}.grid-stack.grid-stack-10>.grid-stack-item[gs-w="3"]{width:30%}.grid-stack.grid-stack-10>.grid-stack-item[gs-x="3"]{left:30%}.grid-stack.grid-stack-10>.grid-stack-item[gs-min-w="3"]{min-width:30%}.grid-stack.grid-stack-10>.grid-stack-item[gs-max-w="3"]{max-width:30%}.grid-stack.grid-stack-10>.grid-stack-item[gs-w="4"]{width:40%}.grid-stack.grid-stack-10>.grid-stack-item[gs-x="4"]{left:40%}.grid-stack.grid-stack-10>.grid-stack-item[gs-min-w="4"]{min-width:40%}.grid-stack.grid-stack-10>.grid-stack-item[gs-max-w="4"]{max-width:40%}.grid-stack.grid-stack-10>.grid-stack-item[gs-w="5"]{width:50%}.grid-stack.grid-stack-10>.grid-stack-item[gs-x="5"]{left:50%}.grid-stack.grid-stack-10>.grid-stack-item[gs-min-w="5"]{min-width:50%}.grid-stack.grid-stack-10>.grid-stack-item[gs-max-w="5"]{max-width:50%}.grid-stack.grid-stack-10>.grid-stack-item[gs-w="6"]{width:60%}.grid-stack.grid-stack-10>.grid-stack-item[gs-x="6"]{left:60%}.grid-stack.grid-stack-10>.grid-stack-item[gs-min-w="6"]{min-width:60%}.grid-stack.grid-stack-10>.grid-stack-item[gs-max-w="6"]{max-width:60%}.grid-stack.grid-stack-10>.grid-stack-item[gs-w="7"]{width:70%}.grid-stack.grid-stack-10>.grid-stack-item[gs-x="7"]{left:70%}.grid-stack.grid-stack-10>.grid-stack-item[gs-min-w="7"]{min-width:70%}.grid-stack.grid-stack-10>.grid-stack-item[gs-max-w="7"]{max-width:70%}.grid-stack.grid-stack-10>.grid-stack-item[gs-w="8"]{width:80%}.grid-stack.grid-stack-10>.grid-stack-item[gs-x="8"]{left:80%}.grid-stack.grid-stack-10>.grid-stack-item[gs-min-w="8"]{min-width:80%}.grid-stack.grid-stack-10>.grid-stack-item[gs-max-w="8"]{max-width:80%}.grid-stack.grid-stack-10>.grid-stack-item[gs-w="9"]{width:90%}.grid-stack.grid-stack-10>.grid-stack-item[gs-x="9"]{left:90%}.grid-stack.grid-stack-10>.grid-stack-item[gs-min-w="9"]{min-width:90%}.grid-stack.grid-stack-10>.grid-stack-item[gs-max-w="9"]{max-width:90%}.grid-stack.grid-stack-10>.grid-stack-item[gs-w="10"]{width:100%}.grid-stack.grid-stack-10>.grid-stack-item[gs-x="10"]{left:100%}.grid-stack.grid-stack-10>.grid-stack-item[gs-min-w="10"]{min-width:100%}.grid-stack.grid-stack-10>.grid-stack-item[gs-max-w="10"]{max-width:100%}.grid-stack.grid-stack-11>.grid-stack-item{min-width:9.0909090909%}.grid-stack.grid-stack-11>.grid-stack-item[gs-w="1"]{width:9.0909090909%}.grid-stack.grid-stack-11>.grid-stack-item[gs-x="1"]{left:9.0909090909%}.grid-stack.grid-stack-11>.grid-stack-item[gs-min-w="1"]{min-width:9.0909090909%}.grid-stack.grid-stack-11>.grid-stack-item[gs-max-w="1"]{max-width:9.0909090909%}.grid-stack.grid-stack-11>.grid-stack-item[gs-w="2"]{width:18.1818181818%}.grid-stack.grid-stack-11>.grid-stack-item[gs-x="2"]{left:18.1818181818%}.grid-stack.grid-stack-11>.grid-stack-item[gs-min-w="2"]{min-width:18.1818181818%}.grid-stack.grid-stack-11>.grid-stack-item[gs-max-w="2"]{max-width:18.1818181818%}.grid-stack.grid-stack-11>.grid-stack-item[gs-w="3"]{width:27.2727272727%}.grid-stack.grid-stack-11>.grid-stack-item[gs-x="3"]{left:27.2727272727%}.grid-stack.grid-stack-11>.grid-stack-item[gs-min-w="3"]{min-width:27.2727272727%}.grid-stack.grid-stack-11>.grid-stack-item[gs-max-w="3"]{max-width:27.2727272727%}.grid-stack.grid-stack-11>.grid-stack-item[gs-w="4"]{width:36.3636363636%}.grid-stack.grid-stack-11>.grid-stack-item[gs-x="4"]{left:36.3636363636%}.grid-stack.grid-stack-11>.grid-stack-item[gs-min-w="4"]{min-width:36.3636363636%}.grid-stack.grid-stack-11>.grid-stack-item[gs-max-w="4"]{max-width:36.3636363636%}.grid-stack.grid-stack-11>.grid-stack-item[gs-w="5"]{width:45.4545454545%}.grid-stack.grid-stack-11>.grid-stack-item[gs-x="5"]{left:45.4545454545%}.grid-stack.grid-stack-11>.grid-stack-item[gs-min-w="5"]{min-width:45.4545454545%}.grid-stack.grid-stack-11>.grid-stack-item[gs-max-w="5"]{max-width:45.4545454545%}.grid-stack.grid-stack-11>.grid-stack-item[gs-w="6"]{width:54.5454545455%}.grid-stack.grid-stack-11>.grid-stack-item[gs-x="6"]{left:54.5454545455%}.grid-stack.grid-stack-11>.grid-stack-item[gs-min-w="6"]{min-width:54.5454545455%}.grid-stack.grid-stack-11>.grid-stack-item[gs-max-w="6"]{max-width:54.5454545455%}.grid-stack.grid-stack-11>.grid-stack-item[gs-w="7"]{width:63.6363636364%}.grid-stack.grid-stack-11>.grid-stack-item[gs-x="7"]{left:63.6363636364%}.grid-stack.grid-stack-11>.grid-stack-item[gs-min-w="7"]{min-width:63.6363636364%}.grid-stack.grid-stack-11>.grid-stack-item[gs-max-w="7"]{max-width:63.6363636364%}.grid-stack.grid-stack-11>.grid-stack-item[gs-w="8"]{width:72.7272727273%}.grid-stack.grid-stack-11>.grid-stack-item[gs-x="8"]{left:72.7272727273%}.grid-stack.grid-stack-11>.grid-stack-item[gs-min-w="8"]{min-width:72.7272727273%}.grid-stack.grid-stack-11>.grid-stack-item[gs-max-w="8"]{max-width:72.7272727273%}.grid-stack.grid-stack-11>.grid-stack-item[gs-w="9"]{width:81.8181818182%}.grid-stack.grid-stack-11>.grid-stack-item[gs-x="9"]{left:81.8181818182%}.grid-stack.grid-stack-11>.grid-stack-item[gs-min-w="9"]{min-width:81.8181818182%}.grid-stack.grid-stack-11>.grid-stack-item[gs-max-w="9"]{max-width:81.8181818182%}.grid-stack.grid-stack-11>.grid-stack-item[gs-w="10"]{width:90.9090909091%}.grid-stack.grid-stack-11>.grid-stack-item[gs-x="10"]{left:90.9090909091%}.grid-stack.grid-stack-11>.grid-stack-item[gs-min-w="10"]{min-width:90.9090909091%}.grid-stack.grid-stack-11>.grid-stack-item[gs-max-w="10"]{max-width:90.9090909091%}.grid-stack.grid-stack-11>.grid-stack-item[gs-w="11"]{width:100%}.grid-stack.grid-stack-11>.grid-stack-item[gs-x="11"]{left:100%}.grid-stack.grid-stack-11>.grid-stack-item[gs-min-w="11"]{min-width:100%}.grid-stack.grid-stack-11>.grid-stack-item[gs-max-w="11"]{max-width:100%}[v-cloak]{display:none;visibility:hidden}strong,b{font-weight:600}a{cursor:pointer}a:not(.button){font-weight:400;transition:color .2s ease-in-out}img{height:none!important;margin:10px 0}.has-text-centered{text-align:center}select:focus,select:active{outline:none;box-shadow:none!important}.select select{height:40px}.section,.container,.box,.card,.column,.tile{position:relative}.container{z-index:1}.auth-flex-container{display:flex;flex-direction:column;min-height:315px}.flex-row{display:flex;flex-direction:row}.flex-column{display:flex;flex-direction:column}.flex-center{justify-content:center;align-items:center}.flex-end{align-items:flex-end}.flex-wrap{flex-wrap:wrap}.flex-between{justify-content:space-between}.spacer{display:flex;align-items:center;flex-grow:1;min-height:15px}.box,.card,canvas{max-width:100%}.help{margin-top:8px}.help a:not(.button){text-decoration:underline}.help.is-danger{margin-top:0;min-height:29px}.button{transition:all .2s ease-in-out;cursor:pointer}.button.icon-only{background:transparent;border:0;color:inherit}.button.icon-only:focus,.button.icon-only:active{outline:none;border:0;box-shadow:none}.notification{border-radius:5px;padding:5px;margin:5px}.notification.is-danger{background-color:#fef2f5;color:#dd0031}.notification.ephemeral-box{font-size:10px;background:#d7d7d7}.notification.ephemeral-box a{text-decoration:underline}.fade-enter-active,.fade-leave-active{transition:opacity .25s ease}.fade-enter-from,.fade-leave-to{opacity:0}.edit-save-container{display:flex;flex-direction:row;justify-content:flex-end;margin-left:15px}.edit-save-container .edit-save-text{font-size:14px;font-weight:400;color:#6b6b6b;text-decoration:underline;user-select:none;cursor:pointer}.edit-save-container :not(:last-child){margin-right:10px}.login-info-row{display:grid;align-items:center;max-width:600px;grid-template-columns:30% minmax(auto,275px) 100px;grid-template-areas:"title  control editsave" "marginleft message marginright"}.login-info-row .user-info-label{grid-area:title}.login-info-row .login-info-control{grid-area:control}.login-info-row .edit-save-container{grid-area:editsave}.login-info-row .message{grid-area:message}.login-info-row.isCompact{grid-template-columns:auto 100px;grid-template-areas:"title editsave" "control control" "message message"}.login-info-row .user-info-label,.login-info-row .edit-save-container{margin-bottom:5px}.profile-divider{height:32px}.table-container .title{min-height:25px}.metadata-header{display:flex}.component-loading{cursor:wait}.component-loading.loading-overlay{inset:0;position:absolute;display:flex;align-items:center;justify-content:center;overflow:hidden;z-index:10}.component-loading.loading-overlay .loading-background{inset:0;position:absolute;background-color:#ffffff80}.component-loading.loading-overlay .loading-icon{position:relative;opacity:.8}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.component-loading.loading-overlay .loading-icon:after{content:"";display:block;animation:spin .5s infinite linear;border:2px solid #d7d7d7;border-radius:9999px;position:absolute;top:calc(50% - 1.5em);left:calc(50% - 1.5em);width:3em;height:3em;border-width:.25em;border-color:transparent;border-left-color:#d7d7d7;border-bottom-color:#d7d7d7}.spinner-box{width:80px;height:80px;max-width:22em;margin:5px auto 10px;position:relative;box-sizing:border-box;background:var(--passage-container-background, #ffffff);background-clip:padding-box;border:solid 10px transparent;border-radius:50%}.spinner-box:after{content:"";position:absolute;inset:0;z-index:-1;margin:-10px;border-radius:inherit;background:conic-gradient(from 180deg at 50% 50%,#3d53f6 0deg,rgba(196,196,196,0) 360deg);animation:spin 1.9s linear infinite}.spinner-content{position:absolute;width:60px;height:60px;display:flex;align-items:center;justify-content:center}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.checkbox-container{display:flex;cursor:pointer}.checkbox-container .checkbox-label{user-select:none;color:var(--passage-body-text-color, #000000);font-size:var(--passage-body-font-size, 14px);line-height:20px;margin-left:5px}.checkbox-container .toggle-switch-label{line-height:18px}.checkbox-container.readonly{cursor:default;pointer-events:none}.passage-checkbox[type=checkbox]{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;width:20px;height:20px;margin:0;background-color:transparent;border-style:solid;border-color:var(--passage-control-border-color, #d7d7d7);border-width:1px;border-radius:var(--passage-control-border-radius, 5px);display:grid;place-content:center}.passage-checkbox[type=checkbox]:checked{background-color:var(--passage-primary-color, #000000);border-color:var(--passage-primary-color, #000000);transition:.1s ease-in-out}.passage-checkbox[type=checkbox]:before{content:"";width:20px;height:20px;background-color:var(--passage-onprimary-color, #ffffff);mask:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDExIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik05LjE2MzQ2IDAuMjA3MDExQzkuMjI3NyAwLjE0MTQ2OSA5LjMwNDM2IDAuMDg5NDAwNiA5LjM4ODk3IDAuMDUzODU0N0M5LjQ3MzU4IDAuMDE4MzA4OSA5LjU2NDQzIDAgOS42NTYyIDBDOS43NDc5NyAwIDkuODM4ODIgMC4wMTgzMDg5IDkuOTIzNDMgMC4wNTM4NTQ3QzEwLjAwOCAwLjA4OTQwMDYgMTAuMDg0NyAwLjE0MTQ2OSAxMC4xNDg5IDAuMjA3MDExQzEwLjQxODEgMC40NzkwMyAxMC40MjE5IDAuOTE4NTkxIDEwLjE1ODQgMS4xOTUzMkw0LjU5Mjc5IDcuNzc0NkM0LjUyOTYgNy44NDM5OSA0LjQ1MjkxIDcuODk5NzYgNC4zNjc0MyA3LjkzODQ5QzQuMjgxOTUgNy45NzcyMyA0LjE4OTQ2IDcuOTk4MTIgNC4wOTU2MyA3Ljk5OTg4QzQuMDAxNzkgOC4wMDE2NCAzLjkwODU5IDcuOTg0MjQgMy44MjE3MSA3Ljk0ODc0QzMuNzM0ODMgNy45MTMyNCAzLjY1NjExIDcuODYwMzkgMy41OTAzNiA3Ljc5MzQzTDAuMjAzNzcxIDQuMzYxNjZDMC4wNzMxNjE5IDQuMjI4NDYgMCA0LjA0OTM1IDAgMy44NjI4QzAgMy42NzYyNSAwLjA3MzE2MTkgMy40OTcxNCAwLjIwMzc3MSAzLjM2Mzk0QzAuMjY4MDA3IDMuMjk4NCAwLjM0NDY3NCAzLjI0NjMzIDAuNDI5MjgyIDMuMjEwNzhDMC41MTM4OTEgMy4xNzUyNCAwLjYwNDc0IDMuMTU2OTMgMC42OTY1MTIgMy4xNTY5M0MwLjc4ODI4NCAzLjE1NjkzIDAuODc5MTMzIDMuMTc1MjQgMC45NjM3NDIgMy4yMTA3OEMxLjA0ODM1IDMuMjQ2MzMgMS4xMjUwMiAzLjI5ODQgMS4xODkyNSAzLjM2Mzk0TDQuMDYxOTIgNi4yNzUyTDkuMTQ0NjMgMC4yMjc3MTlDOS4xNTA0OSAwLjIyMDQ0NCA5LjE1Njc3IDAuMjEzNTI5IDkuMTYzNDYgMC4yMDcwMTFaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+Cg==);mask-position:center;mask-repeat:no-repeat;-webkit-mask:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDExIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik05LjE2MzQ2IDAuMjA3MDExQzkuMjI3NyAwLjE0MTQ2OSA5LjMwNDM2IDAuMDg5NDAwNiA5LjM4ODk3IDAuMDUzODU0N0M5LjQ3MzU4IDAuMDE4MzA4OSA5LjU2NDQzIDAgOS42NTYyIDBDOS43NDc5NyAwIDkuODM4ODIgMC4wMTgzMDg5IDkuOTIzNDMgMC4wNTM4NTQ3QzEwLjAwOCAwLjA4OTQwMDYgMTAuMDg0NyAwLjE0MTQ2OSAxMC4xNDg5IDAuMjA3MDExQzEwLjQxODEgMC40NzkwMyAxMC40MjE5IDAuOTE4NTkxIDEwLjE1ODQgMS4xOTUzMkw0LjU5Mjc5IDcuNzc0NkM0LjUyOTYgNy44NDM5OSA0LjQ1MjkxIDcuODk5NzYgNC4zNjc0MyA3LjkzODQ5QzQuMjgxOTUgNy45NzcyMyA0LjE4OTQ2IDcuOTk4MTIgNC4wOTU2MyA3Ljk5OTg4QzQuMDAxNzkgOC4wMDE2NCAzLjkwODU5IDcuOTg0MjQgMy44MjE3MSA3Ljk0ODc0QzMuNzM0ODMgNy45MTMyNCAzLjY1NjExIDcuODYwMzkgMy41OTAzNiA3Ljc5MzQzTDAuMjAzNzcxIDQuMzYxNjZDMC4wNzMxNjE5IDQuMjI4NDYgMCA0LjA0OTM1IDAgMy44NjI4QzAgMy42NzYyNSAwLjA3MzE2MTkgMy40OTcxNCAwLjIwMzc3MSAzLjM2Mzk0QzAuMjY4MDA3IDMuMjk4NCAwLjM0NDY3NCAzLjI0NjMzIDAuNDI5MjgyIDMuMjEwNzhDMC41MTM4OTEgMy4xNzUyNCAwLjYwNDc0IDMuMTU2OTMgMC42OTY1MTIgMy4xNTY5M0MwLjc4ODI4NCAzLjE1NjkzIDAuODc5MTMzIDMuMTc1MjQgMC45NjM3NDIgMy4yMTA3OEMxLjA0ODM1IDMuMjQ2MzMgMS4xMjUwMiAzLjI5ODQgMS4xODkyNSAzLjM2Mzk0TDQuMDYxOTIgNi4yNzUyTDkuMTQ0NjMgMC4yMjc3MTlDOS4xNTA0OSAwLjIyMDQ0NCA5LjE1Njc3IDAuMjEzNTI5IDkuMTYzNDYgMC4yMDcwMTFaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+Cg==);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;transform:scale(0);transition:.2s transform ease-in-out}.passage-checkbox[type=checkbox]:checked:before{transform:scale(1)}.passage-checkbox[type=checkbox]:focus,.passage-toggle-switch[type=checkbox]:focus{box-shadow:0 0 0 1px #000!important;outline:none}.passage-learnmore{position:absolute;height:100%;width:100%;background-color:transparent;display:flex;justify-content:center;align-items:center;color:var(--passage-body-text-color, #000000);font-family:var(--passage-body-font-family, "Helvetica", BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif);font-size:calc(var(--passage-body-font-size, 14px) - 15%);font-weight:var(--passage-body-font-weight, 400);z-index:3}.passage-learnmore-modal{background-color:var(--passage-container-background, #ffffff);border-radius:5px;border:15px solid transparent;box-shadow:0 4px 4px #00000040}.passage-learnmore-top{display:flex;flex-direction:row;justify-content:flex-end}.passage-learnmore-close-button{font-size:12px;margin-right:4px;opacity:.6}.passage-learnmore-content{display:flex;align-items:center;flex-direction:column}.passage-learnmore-header{font-family:var(--passage-body-font-family, "Helvetica", BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif);font-size:calc(var(--passage-button-font-size, 16px) - 15%);font-weight:var(--passage-body-font-weight, 400);display:flex;flex-direction:row;align-items:center;margin-bottom:8px}.passage-learnmore-body{font-size:calc(var(--passage-body-font-size, 14px) - 15%);text-align:left;opacity:.6;margin-bottom:16px}.passage-modal{align-items:center;display:none;flex-direction:column;justify-content:center;overflow:hidden;z-index:40;inset:0;position:absolute;font-family:Helvetica,BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif;min-height:400px}.passage-modal.is-active{display:flex}.passage-modal .passage-modal-background{inset:0;position:absolute}.passage-modal .passage-modal-card{box-shadow:0 2px 8px 2px #ccc;background-color:var(--passage-container-background, #ffffff);color:var(--passage-body-text-color, #000000);font-family:var(--passage-body-font-family, "Helvetica", BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif);font-size:var(--passage-body-font-size, 14px);font-weight:var(--passage-body-font-weight, 400);margin:0 auto;padding:40px;display:flex;flex-direction:column;max-height:90%;max-width:420px;width:90%;border-radius:20px;overflow:hidden;position:relative}.passage-modal .passage-modal-card .danger-header{color:var(--passage-error-color, #dd0031)}.passage-modal .passage-modal-card .input-box-title{margin-top:15px}.passage-modal .passage-modal-card .passage-modal-body{padding:20px 0 0}.passage-modal .passage-modal-card .passage-modal-footer{display:flex;justify-content:center;padding-top:20px}.passage-modal .passage-modal-card .passage-modal-footer .cancel-button{margin-left:10px}.passage-modal .passage-modal-card .passage-modal-footer .cancel-only{margin-left:0}#passage-auth-container .iti,#passage-profile-container .iti{width:100%}#passage-auth-container .iti .input,#passage-profile-container .iti .input{padding-left:52px}#passage-auth-container .iti .iti__country-list,#passage-profile-container .iti .iti__country-list{border-radius:6px}#passage-auth-container .iti .iti__country,#passage-profile-container .iti .iti__country{padding:5px 10px}#passage-auth-container .iti .iti__selected-flag,#passage-profile-container .iti .iti__selected-flag{border-top-left-radius:var(--passage-control-border-radius, 6px);border-bottom-left-radius:var(--passage-control-border-radius, 6px)}#passage-auth-container .iti--container,#passage-profile-container .iti--container{top:unset!important;left:unset!important}.grid-stack{margin:0 -10px}.grid-stack-item>*{overflow:visible!important}.grid-stack-item.editable{cursor:grab}.grid-stack-item .grid-stack-item-content>.checkbox-container{margin-top:4px;margin-left:1px}.grid-stack-item .grid-stack-item-content .label{font-size:14px!important;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;user-select:none}.grid-stack-item .grid-stack-item-content .input{font-size:14px!important}.grid-stack-item .grid-stack-item-content .error-message{font-size:11px!important;word-break:break-word}.grid-stack.profile .label{font-weight:600!important}.passage-branding{color:#6b6b6b;margin-top:16px}.passage-table{width:100%;border-spacing:0px;color:var(--passage-body-text-color, #000000);font-family:var(--passage-body-font-family, "Helvetica", BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif);font-size:var(--passage-body-font-size, 14px);font-weight:var(--passage-body-font-weight, 400)}.passage-table-header-cell{font-weight:700;text-align:left;border-bottom:1px solid var(--passage-table-header-border-color, #d7d7d7);padding:10px 15px}.passage-table-row:hover{background-color:var(--passage-table-row-hover-color, #e0e0e0)}.passage-table-row:hover+.passage-expansion-row{background-color:var(--passage-table-row-hover-color, #e0e0e0)}.passage-table-row.passage-table-row-hover,.passage-expansion-row:hover{background-color:var(--passage-table-row-hover-color, #e0e0e0)}.passage-expansion-row .passage-table-cell{padding-top:0}.passage-table-cell{border-bottom:1px solid var(--passage-table-row-border-color, #e8e8e8);padding:15px 12px}.passage-table-cell.expanded{border-color:transparent}.passage-action-menu-cell{width:20px}.passage-expansion-cell{width:16px}.passage-expansion-cell .table-chevron{cursor:pointer;transition:all .3s;transform:rotate(270deg)}.passage-expansion-cell .table-chevron.expanded{transform:rotate(360deg)}.passage-table-empty-cell{padding:20px;text-align:center}.passage-table-paginator{margin-top:32px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;flex-wrap:wrap}.passage-table-paginator>div{margin-bottom:8px}.page-size-selector{display:flex;flex-direction:row;align-items:center}.paginator-button{width:40px;height:40px;display:flex;align-items:center;justify-content:center;cursor:pointer;user-select:none}.paginator-button:hover{background-color:var(--passage-table-paginator-hover-color, #e8e8e8)}.paginator-button.selected{background-color:var(--passage-table-paginator-selected-color, #d7d7d7)}.paginator-button.disabled{opacity:50%;pointer-events:none}.paginator-index{width:100%;text-align:center}.expanded-content{display:grid;grid-template-columns:auto auto}.expanded-content .expanded-label{font-weight:700;margin-bottom:4px}.dropdown-container{user-select:none;position:relative;color:var(--passage-body-text-color, #000000);font-family:var(--passage-body-font-family, "Helvetica", BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif);font-size:var(--passage-body-font-size, 14px);font-weight:var(--passage-body-font-weight, 400);cursor:pointer}.dropdown-container:focus{outline:none}.dropdown-container[readonly]{cursor:default;pointer-events:none}.dropdown-container[readonly] .dropdown-button{border-color:transparent}.dropdown-container[readonly] .dropdown-button .chevron{opacity:0}.dropdown-button{height:30px;padding-left:10px;padding-right:5px;background-color:transparent;border:1px solid;border-color:var(--passage-control-border-color, #d7d7d7);border-radius:var(--passage-control-border-radius, 5px);display:flex;flex-direction:row;align-items:center;justify-content:space-between;transition:border-color .3s}.dropdown-button .chevron{margin-left:10px;min-width:10px;transition:.3s ease-in-out}.dropdown-button .dropdown-title{line-height:30px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.dropdown-button.expanded{border-bottom-left-radius:0;border-bottom-right-radius:0}.dropdown-button.expanded .chevron{transform:rotate(-180deg)}.dropdown-button.error{border-color:var(--passage-error-color, #dd0031)}.dropdown-list{background-color:var(--passage-container-background, #ffffff);position:absolute;overflow:auto;border:1px solid;border-color:var(--passage-control-border-color, #d7d7d7);border-top:transparent;border-bottom-left-radius:var(--passage-control-border-radius, 5px);border-bottom-right-radius:var(--passage-control-border-radius, 5px);transition:max-height .2s ease-in-out;z-index:3}.dropdown-list.collapsed{max-height:0px!important;border-bottom:transparent;overflow:hidden}.dropdown-list .item{height:30px;padding-left:10px;padding-right:25px;line-height:30px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.dropdown-list .item.bottom-border{border-bottom:1px solid;border-color:var(--passage-control-border-color, #d7d7d7)}.dropdown-list .item .item-text{line-height:14px}.action-menu{position:relative}.action-menu:focus{outline:none}.action-menu .menu-icon{cursor:pointer}.action-menu .menu-dropdown{display:flex;flex-direction:column;align-items:flex-end;max-height:500px;overflow:hidden;position:absolute;right:-12px;top:25px;width:max-content;z-index:3;transition:max-height .4s ease-in-out;border-radius:4px;box-shadow:0 2px 8px 2px #ccc;background-color:var(--passage-container-background, #ffffff);color:var(--passage-body-text-color, #000000);font-family:var(--passage-body-font-family, "Helvetica", BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif);font-size:var(--passage-body-font-size, 14px);font-weight:var(--passage-body-font-weight, 400)}.action-menu .menu-dropdown.collapsed{transition:unset;max-height:0px;overflow:hidden;box-shadow:none}.action-menu .menu-dropdown .menu-item{padding:16px;cursor:pointer;user-select:none;width:calc(100% - 32px)}.action-menu .menu-dropdown .menu-item.danger{color:var(--passage-error-color, #dd0031)}#passage-auth-container,#passage-profile-container{position:relative;box-sizing:content-box;max-width:var(--passage-container-max-width, 300px);margin:var(--passage-container-margin, auto);padding:var(--passage-container-padding, 30px 30px 20px);background:var(--passage-container-background, transparent);color:var(--passage-body-text-color, #000000);font-family:var(--passage-body-font-family, "Helvetica", BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif);font-size:var(--passage-body-font-size, 14px);font-weight:var(--passage-body-font-weight, 400);line-height:unset}#passage-auth-container .otp-input.input,#passage-profile-container .otp-input.input{width:40px;height:40px;padding:0;margin-left:4px;margin-right:4px;font-size:24px;font-weight:400;line-height:29px;border-radius:4px;border:1px solid transparent;text-align:center;background-color:var(--passage-otp-input-background-color, #d7d7d7)}#passage-auth-container .otp-input.input:read-only,#passage-profile-container .otp-input.input:read-only{background-color:var(--passage-otp-input-background-color, #d7d7d7)}#passage-auth-container .otp-input.input::-webkit-inner-spin-button,#passage-auth-container .otp-input.input::-webkit-outer-spin-button,#passage-profile-container .otp-input.input::-webkit-inner-spin-button,#passage-profile-container .otp-input.input::-webkit-outer-spin-button{-webkit-appearance:none;display:none;margin:0}#passage-auth-container.passage-auth,#passage-profile-container.passage-auth{min-height:315px}#passage-auth-container.passage-login,#passage-auth-container.passage-register,#passage-profile-container.passage-login,#passage-profile-container.passage-register{min-height:130px}#passage-auth-container .title,#passage-profile-container .title{color:var(--passage-header-text-color, #000000);font-family:var(--passage-header-font-family, "Helvetica", BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif);font-weight:var(--passage-header-font-weight, 700);font-size:var(--passage-header-font-size, 18px);margin-bottom:0}#passage-auth-container .title.main-title,#passage-profile-container .title.main-title{font-size:var(--passage-header-font-size, 24px);line-height:var(--passage-header-font-size, 31px)}#passage-auth-container .title.secondary-title,#passage-profile-container .title.secondary-title{line-height:var(--passage-header-font-size, 20px)}#passage-auth-container .link,#passage-profile-container .link{font-size:calc(var(--passage-body-font-size, 14px) - 15%)}#passage-auth-container .link a:not(.button),#passage-profile-container .link a:not(.button){text-decoration:underline}#passage-auth-container a,#passage-profile-container a{color:var(--passage-body-text-color, #000000)}#passage-auth-container a:hover,#passage-profile-container a:hover{color:var(--passage-hover-color, var(--passage-primary-color, #4d4d4d))}#passage-auth-container a:active,#passage-profile-container a:active{color:var(--passage-active-color, var(--passage-hover-color, var(--passage-primary-color, #6b6b6b)))}#passage-auth-container .label,#passage-profile-container .label{color:var(--passage-body-text-color, #000000);font-family:var(--passage-body-font-family, "Helvetica", BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif);font-size:var(--passage-body-font-size, 14px);font-weight:var(--passage-body-font-weight, 400);margin-bottom:3px!important;width:100%;text-align:left}#passage-auth-container .content,#passage-profile-container .content{font-size:calc(var(--passage-body-font-size, 14px) - 15%)}#passage-auth-container .input,#passage-profile-container .input{-webkit-appearance:none;-moz-appearance:none;box-sizing:border-box;color:var(--passage-body-text-color, #000000);font-family:var(--passage-body-font-family, "Helvetica", BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif);font-size:var(--passage-body-font-size, 14px);font-weight:var(--passage-body-font-weight, 400);min-height:40px;width:100%;padding-left:10px;padding-right:10px;margin:0;background-color:var(--passage-container-background-color, #ffffff);border-style:solid;border-color:var(--passage-control-border-color, #d7d7d7);border-width:1px;border-radius:var(--passage-control-border-radius, 5px);transition:all .3s;text-overflow:ellipsis}#passage-auth-container .input:focus,#passage-auth-container .input:active,#passage-profile-container .input:focus,#passage-profile-container .input:active{outline:none;box-shadow:none!important;border-color:var(--passage-body-text-color, #000000)}#passage-auth-container .input.short,#passage-profile-container .input.short{min-height:30px}#passage-auth-container .input.has-error,#passage-auth-container .input.is-danger,#passage-profile-container .input.has-error,#passage-profile-container .input.is-danger{border-color:var(--passage-error-color, #dd0031)}#passage-auth-container .input:read-only,#passage-profile-container .input:read-only{border-color:transparent!important;pointer-events:none}#passage-auth-container .input:read-only::-webkit-outer-spin-button,#passage-auth-container .input:read-only::-webkit-inner-spin-button,#passage-profile-container .input:read-only::-webkit-outer-spin-button,#passage-profile-container .input:read-only::-webkit-inner-spin-button{-webkit-appearance:none;display:none;margin:0}#passage-auth-container .input:read-only[type=number],#passage-profile-container .input:read-only[type=number]{-moz-appearance:textfield}#passage-auth-container .error-message,#passage-profile-container .error-message{font-size:calc(var(--passage-body-font-size, 14px) - 20%);color:var(--passage-error-color, #dd0031);text-align:left}#passage-auth-container .text.is-danger,#passage-profile-container .text.is-danger{color:var(--passage-error-color, #dd0031)}#passage-auth-container .button,#passage-profile-container .button{color:var(--passage-onprimary-color, #ffffff);background-color:var(--passage-primary-color, #000000);font-family:var(--passage-body-font-family, "Helvetica", BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif);font-weight:var(--passage-button-font-weight, 400);font-size:var(--passage-button-font-size, 14px);min-height:40px;border:none;border-radius:var(--passage-button-border-radius, 5px);width:var(--passage-button-width, 40%);white-space:normal;min-width:fit-content;padding:9px 10px;margin-top:11px}#passage-auth-container .button.small,#passage-profile-container .button.small{min-height:25px;padding:4px 10px 5px;font-size:var(--passage-body-font-size, 14px);line-height:var(--passage-body-font-size, 14px);width:fit-content}#passage-auth-container .button:hover,#passage-profile-container .button:hover{color:var(--passage-onhover-color, var(--passage-onprimary-color, #ffffff));background-color:var(--passage-hover-color, var(--passage-primary-color, #4d4d4d))}#passage-auth-container .button:active,#passage-auth-container .button.is-active,#passage-profile-container .button:active,#passage-profile-container .button.is-active{box-shadow:none!important;color:var(--passage-onactive-color, var(--passage-onhover-color, var(--passage-onprimary-color, #ffffff)));background-color:var(--passage-active-color, var(--passage-hover-color, var(--passage-primary-color, #6b6b6b)))}#passage-auth-container .button:focus,#passage-profile-container .button:focus{color:var(--passage-onprimary-color, #ffffff);outline:none}#passage-auth-container .button:focus-visible,#passage-profile-container .button:focus-visible{outline:none}#passage-auth-container .button.is-secondary,#passage-profile-container .button.is-secondary{color:var(--passage-primary-color, #000000);background-color:var(--passage-onprimary-color, #ffffff);border:1px solid var(--passage-primary-color, #000000)}#passage-auth-container .button.is-secondary:hover,#passage-profile-container .button.is-secondary:hover{color:var(--passage-hover-color, var(--passage-primary-color, #4d4d4d));border-color:var(--passage-hover-color, var(--passage-primary-color, #4d4d4d));background-color:var(--passage-onhover-color, var(--passage-onprimary-color, #ffffff))}#passage-auth-container .button.is-secondary:active,#passage-profile-container .button.is-secondary:active{color:var(--passage-active-color, var(--passage-hover-color, var(--passage-primary-color, #6b6b6b)));border-color:var(--passage-active-color, var(--passage-hover-color, var(--passage-primary-color, #6b6b6b)));background-color:var(--passage-onactive-color, var(--passage-onhover-color, var(--passage-onprimary-color, #ffffff)))}#passage-auth-container .button.is-modal,#passage-profile-container .button.is-modal{min-height:30px;padding:0 10px;width:fit-content}#passage-auth-container .button.is-disabled,#passage-auth-container .button[disabled],fieldset[disabled] #passage-auth-container .button,#passage-profile-container .button.is-disabled,#passage-profile-container .button[disabled],fieldset[disabled] #passage-profile-container .button{pointer-events:none;opacity:.5;color:var(--passage-onprimary-color, #ffffff);background-color:var(--passage-primary-color, #000000);border-color:transparent;box-shadow:none}#passage-profile-container{max-width:var(--passage-container-max-width, 600px);min-height:70px}#passage-profile-container .user-info-label{font-size:calc(var(--passage-body-font-size, 14px) + 10%);font-weight:600;margin-right:15px}#passage-profile-container .message{font-size:calc(var(--passage-body-font-size, 14px) - 20%);text-align:left;min-height:14px;margin-bottom:5px}#passage-profile-container .message.is-danger{color:var(--passage-error-color, #dd0031)}#passage-profile-container .message.is-info{color:#3758a1;padding-left:10px}#passage-profile-container .current-device{margin-left:10px;font-size:calc(var(--passage-body-font-size, 14px) - 20%);color:gray}#passage-profile-container .feedback{min-height:20px;line-height:20px;font-size:12px;padding:0 5px;margin-top:1px;margin-bottom:2px;border-radius:5px;text-align:center}#passage-profile-container .feedback.feedback-danger{background-color:#fef2f5;color:var(--passage-error-color, #dd0031)}#passage-profile-container .feedback.feedback-info{background-color:#f1f4fa;color:var(--passage-body-text-color, #000000)}\n',
        ],
      })
    );
    try {
      window.customElements.get(`passage-${t}`) ||
        window.customElements.define(`passage-${t}`, i);
    } catch (n) {
      throw new Error(
        `Cannot register custom element <passage-${t}>. Ensure the import is happening while code is running client-side in the browser. If doing server-side rendering consider moving the import to a lifecycle event. See https://docs.passage.id/ for more information.`
      );
    }
  }
  pD(jD, "auth");
  const zD = { class: "container" };
  pD(
    mi({
      __name: "LoginApp.ce",
      props: {
        appId: {},
        beforeAuth: { type: Function },
        onSuccess: { type: Function },
        onEvent: { type: Function },
        lang: {},
        defaultCountryCode: {},
      },
      setup(e) {
        const t = e,
          { languageLoading: i, containerRef: n } = ID(t);
        return (e, t) => (
          Vn(),
          Jn(
            "div",
            {
              id: "passage-auth-container",
              class: "passage-login",
              ref_key: "containerRef",
              ref: n,
            },
            [
              gi(
                ia(
                  "div",
                  zD,
                  [
                    (Vn(),
                    $n(
                      dD,
                      { key: e.appId, homeRoute: xt(eD) },
                      {
                        otpInput: ti(() => [$i(e.$slots, "otpInput")]),
                        loginInput: ti(() => [$i(e.$slots, "loginInput")]),
                        _: 3,
                      },
                      8,
                      ["homeRoute"]
                    )),
                  ],
                  512
                ),
                [[xs, !xt(i)]]
              ),
            ],
            512
          )
        );
      },
    }),
    "login"
  );
  const TD = { class: "container" };
  pD(
    mi({
      __name: "RegisterApp.ce",
      props: {
        appId: {},
        beforeAuth: { type: Function },
        onSuccess: { type: Function },
        onEvent: { type: Function },
        lang: {},
        defaultCountryCode: {},
      },
      setup(e) {
        const t = e,
          { languageLoading: i, containerRef: n } = ID(t);
        return (e, t) => (
          Vn(),
          Jn(
            "div",
            {
              id: "passage-auth-container",
              class: "passage-register",
              ref_key: "containerRef",
              ref: n,
            },
            [
              gi(
                ia(
                  "div",
                  TD,
                  [
                    (Vn(),
                    $n(
                      dD,
                      { key: e.appId, homeRoute: xt(tD) },
                      { otpInput: ti(() => [$i(e.$slots, "otpInput")]), _: 3 },
                      8,
                      ["homeRoute"]
                    )),
                  ],
                  512
                ),
                [[xs, !xt(i)]]
              ),
            ],
            512
          )
        );
      },
    }),
    "register"
  );
  const hD = mi({
      name: "Editable Control",
      props: {
        title: { type: String, required: !0 },
        editable: { type: Boolean, default: !0 },
        onSave: { type: Function, required: !1 },
        onCancel: { type: Function, required: !1 },
        isEditing: { type: Boolean, default: void 0 },
        errorMessage: { type: String, required: !1 },
      },
      emits: ["update:isEditing", "editStart"],
      setup(e, t) {
        const { t: i } = fl(),
          n = ht(!1),
          a = fa({
            get: () => (void 0 === e.isEditing ? n.value : e.isEditing),
            set(i) {
              void 0 !== e.isEditing
                ? (t.emit("update:isEditing", i), i && t.emit("editStart"))
                : (n.value = i);
            },
          });
        const s = ht(),
          r = ht(!1);
        const o = new ResizeObserver(() => {
          !(function () {
            if (void 0 === s.value) return;
            const e = s.value.getBoundingClientRect().width;
            r.value = e < 415;
          })();
        });
        return (
          bi(() => {
            s.value && o.observe(s.value);
          }),
          Qi(() => {
            o.disconnect();
          }),
          {
            isEditingValue: a,
            save: function () {
              void 0 !== e.onSave
                ? e.onSave().then((e) => {
                    e && (a.value = !1);
                  })
                : (a.value = !1);
            },
            cancel: function () {
              void 0 !== e.onCancel
                ? e.onCancel().then(() => {
                    a.value = !1;
                  })
                : (a.value = !1);
            },
            container: s,
            isCompact: r,
            t: i,
          }
        );
      },
    }),
    AD = { class: "user-info-label" },
    mD = { class: "login-info-control" },
    xD = { key: 0, class: "edit-save-container" },
    fD = { class: "message is-danger" },
    kD = { key: 0 };
  var LD = mu(hD, [
    [
      "render",
      function (e, t, i, n, a, s) {
        return (
          Vn(),
          Jn(
            "form",
            {
              onSubmit:
                t[3] ||
                (t[3] = hs((...t) => e.save && e.save(...t), ["prevent"])),
              onKeyup:
                t[4] ||
                (t[4] = ms((...t) => e.cancel && e.cancel(...t), ["esc"])),
            },
            [
              ia(
                "div",
                {
                  class: Z(["login-info-row", { isCompact: e.isCompact }]),
                  ref: "container",
                },
                [
                  ia("div", AD, X(e.title), 1),
                  ia("div", mD, [$i(e.$slots, "default")]),
                  e.editable
                    ? (Vn(),
                      Jn("div", xD, [
                        e.isEditing
                          ? ra("", !0)
                          : (Vn(),
                            Jn(
                              "div",
                              {
                                key: 0,
                                class: "edit-save-text",
                                onClick:
                                  t[0] ||
                                  (t[0] = hs(
                                    (t) => (e.isEditingValue = !0),
                                    ["prevent"]
                                  )),
                              },
                              X(e.t("edit")),
                              1
                            )),
                        e.isEditing
                          ? (Vn(),
                            Jn(
                              "div",
                              {
                                key: 1,
                                class: "edit-save-text",
                                onClick:
                                  t[1] ||
                                  (t[1] = hs(
                                    (...t) => e.save && e.save(...t),
                                    ["prevent"]
                                  )),
                              },
                              X(e.t("save")),
                              1
                            ))
                          : ra("", !0),
                        e.isEditing
                          ? (Vn(),
                            Jn(
                              "div",
                              {
                                key: 2,
                                class: "edit-save-text",
                                onClick:
                                  t[2] ||
                                  (t[2] = hs(
                                    (...t) => e.cancel && e.cancel(...t),
                                    ["prevent"]
                                  )),
                              },
                              X(e.t("cancel")),
                              1
                            ))
                          : ra("", !0),
                      ]))
                    : ra("", !0),
                  ia("div", fD, [
                    e.errorMessage
                      ? (Vn(), Jn("div", kD, X(e.errorMessage), 1))
                      : ra("", !0),
                  ]),
                ],
                2
              ),
            ],
            32
          )
        );
      },
    ],
  ]);
  const OD = mi({
      name: "Phone Number",
      components: { EditableControl: LD },
      props: {
        userInfo: { type: Object, required: !1 },
        appId: { type: String, required: !0 },
        required: { type: Boolean, required: !0 },
        editable: { type: Boolean, required: !0 },
      },
      emits: ["globalMessage"],
      setup(e, t) {
        var i;
        const { t: n } = fl(),
          a = ht(!1),
          {
            changePhoneRequest: s,
            updateInfoMessage: r,
            updatePhoneError: o,
            updatePending: M,
            identifierExists: l,
          } = kc(e.appId),
          u = fa(() => {
            const e = n("phone-number");
            return e.charAt(0).toUpperCase() + e.slice(1);
          });
        let c;
        (c || (c = {})).NONE = "N/A";
        const g = ht((null == (i = e.userInfo) ? void 0 : i.phone) || c.NONE);
        let d = g.value,
          N = "";
        const D = ht(),
          I = ht(),
          { defaultCountryCode: y } = gc();
        let j;
        function p() {
          g.value.trim() || (g.value = "N/A");
        }
        return (
          oi(D, () => {
            var e;
            j = Ur(D.value, {
              initialCountry:
                null !=
                (e = null == j ? void 0 : j.getSelectedCountryData().iso2)
                  ? e
                  : y.value,
              utilsScript:
                "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
              dropdownContainer: I.value,
              autoPlaceholder: "aggressive",
            });
          }),
          {
            isEditing: a,
            phone: g,
            controlContainer: I,
            phoneInputBox: D,
            cancel: function () {
              return __async(this, null, function* () {
                (o.value = ""),
                  (g.value = d),
                  j &&
                    (j.setCountry(N),
                    (g.value = g.value.replace(
                      `+${
                        null == j ? void 0 : j.getSelectedCountryData().dialCode
                      }`,
                      ""
                    )));
              });
            },
            save: function () {
              return __async(this, null, function* () {
                var i, a, u, c;
                const N =
                    null != (a = null == (i = e.userInfo) ? void 0 : i.phone)
                      ? a
                      : "",
                  D = "N/A" === g.value ? "" : g.value;
                return (
                  (o.value = ""),
                  !e.required ||
                  (null != (u = null == j ? void 0 : j.getNumber()) && u)
                    ? N ===
                      (null != (c = null == j ? void 0 : j.getNumber())
                        ? c
                        : "")
                      ? (p(), !0)
                      : (yield (function (e, i) {
                          return __async(this, null, function* () {
                            if (j) {
                              const a = null == j ? void 0 : j.getNumber();
                              if (
                                a &&
                                !(null == j ? void 0 : j.isValidNumber())
                              )
                                return (o.value = n("invalid-phone")), !1;
                              if (i === a) return !1;
                              if (a) {
                                const e = yield l(a).catch(() => {
                                  (o.value = n("something-went-wrong")),
                                    (M.value = !1);
                                });
                                if (o.value) return !1;
                                if (!e)
                                  return (
                                    (o.value = n(
                                      "phone-number-already-in-use"
                                    )),
                                    !1
                                  );
                              }
                              if (i !== a)
                                return (
                                  yield s(a),
                                  "" === o.value &&
                                    (t.emit("globalMessage", r.value),
                                    (d = e),
                                    !0)
                                );
                            }
                            return !1;
                          });
                        })(D, N),
                        !o.value && (p(), !0))
                    : ((o.value = n("phone-number-is-required")), !1)
                );
              });
            },
            onEdit: function () {
              j && (N = j.getSelectedCountryData().iso2),
                "N/A" === g.value
                  ? (g.value = "")
                  : (g.value = g.value.replace(
                      `+${
                        null == j ? void 0 : j.getSelectedCountryData().dialCode
                      }`,
                      ""
                    ));
            },
            updatePhoneError: o,
            updatePending: M,
            title: u,
            t: n,
          }
        );
      },
    }),
    wD = ["readonly"],
    vD = { ref: "controlContainer", style: { width: "100%" } };
  var ED = mu(OD, [
    [
      "render",
      function (e, t, i, n, a, s) {
        const r = Fi("loading"),
          o = Fi("editable-control");
        return (
          Vn(),
          Jn(
            Yn,
            null,
            [
              e.updatePending
                ? (Vn(),
                  $n(r, { key: 0, active: e.updatePending }, null, 8, [
                    "active",
                  ]))
                : ra("", !0),
              na(
                o,
                {
                  title: e.title,
                  isEditing: e.isEditing,
                  "onUpdate:isEditing":
                    t[2] || (t[2] = (t) => (e.isEditing = t)),
                  errorMessage: e.updatePhoneError,
                  onEditStart: e.onEdit,
                  onCancel: e.cancel,
                  onSave: e.save,
                  editable: !!e.userInfo && e.editable,
                },
                {
                  default: ti(() => [
                    gi(
                      ia(
                        "input",
                        {
                          type: "text",
                          id: "phone",
                          class: Z([
                            "input short",
                            { "is-danger": e.updatePhoneError },
                          ]),
                          part: "input",
                          "onUpdate:modelValue":
                            t[0] || (t[0] = (t) => (e.phone = t)),
                          readonly: !e.isEditing,
                          onInput:
                            t[1] || (t[1] = (t) => (e.updatePhoneError = "")),
                          ref: "phoneInputBox",
                          inputmode: "tel",
                          autocomplete: "tel",
                        },
                        null,
                        42,
                        wD
                      ),
                      [[us, e.phone]]
                    ),
                    ia("div", vD, null, 512),
                  ]),
                  _: 1,
                },
                8,
                [
                  "title",
                  "isEditing",
                  "errorMessage",
                  "onEditStart",
                  "onCancel",
                  "onSave",
                  "editable",
                ]
              ),
            ],
            64
          )
        );
      },
    ],
  ]);
  const SD = mi({
      name: "Phone Number",
      components: { EditableControl: LD },
      props: {
        userInfo: { type: Object, required: !1 },
        appId: { type: String, required: !0 },
        required: { type: Boolean, required: !0 },
        editable: { type: Boolean, required: !0 },
      },
      emits: ["globalMessage"],
      setup(e, t) {
        var i;
        const { t: n } = fl(),
          a = ht(!1),
          {
            changeEmailRequest: s,
            updateInfoMessage: r,
            updateEmailError: o,
            updatePending: M,
            identifierExists: l,
          } = kc(e.appId),
          u = fa(() => {
            const e = n("email");
            return e.charAt(0).toUpperCase() + e.slice(1);
          });
        let c;
        (c || (c = {})).NONE = "N/A";
        const g = ht((null == (i = e.userInfo) ? void 0 : i.email) || c.NONE);
        let d = g.value;
        function N() {
          g.value.trim() || (g.value = "N/A");
        }
        return {
          isEditing: a,
          email: g,
          cancel: function () {
            return __async(this, null, function* () {
              (o.value = ""), (g.value = d);
            });
          },
          save: function () {
            return __async(this, null, function* () {
              var i, a;
              const u =
                  null != (a = null == (i = e.userInfo) ? void 0 : i.email)
                    ? a
                    : "",
                c = "N/A" === g.value ? "" : g.value;
              return (
                (o.value = ""),
                e.required && !c.trim()
                  ? ((o.value = n("email-is-required")), !1)
                  : u === c.trim()
                  ? (N(), !0)
                  : (yield (function (e, i) {
                      return __async(this, null, function* () {
                        if (i !== e) {
                          const i = e.trim().toLowerCase();
                          if (i && !Ju(g.value))
                            return (o.value = n("invalid-email")), !1;
                          if (i) {
                            const e = yield l(i).catch(() => {
                              (o.value = n("something-went-wrong")),
                                (M.value = !1);
                            });
                            if (o.value) return !1;
                            if (!e)
                              return (
                                (o.value = n("email-address-already-in-use")),
                                !1
                              );
                          }
                          if ((yield s(i), "" === o.value))
                            return (
                              t.emit("globalMessage", r.value), (d = e), !0
                            );
                        }
                        return !1;
                      });
                    })(c, u),
                    !o.value && (N(), !0))
              );
            });
          },
          onEdit: function () {
            "N/A" === g.value && (g.value = "");
          },
          updateEmailError: o,
          updatePending: M,
          title: u,
        };
      },
    }),
    bD = ["readonly"];
  const CD = mi({
      name: "UserInfo",
      components: {
        PhoneNumber: ED,
        Email: mu(SD, [
          [
            "render",
            function (e, t, i, n, a, s) {
              const r = Fi("loading"),
                o = Fi("editable-control");
              return (
                Vn(),
                Jn(
                  Yn,
                  null,
                  [
                    e.updatePending
                      ? (Vn(),
                        $n(r, { key: 0, active: e.updatePending }, null, 8, [
                          "active",
                        ]))
                      : ra("", !0),
                    na(
                      o,
                      {
                        title: e.title,
                        isEditing: e.isEditing,
                        "onUpdate:isEditing":
                          t[2] || (t[2] = (t) => (e.isEditing = t)),
                        errorMessage: e.updateEmailError,
                        onEditStart: e.onEdit,
                        onCancel: e.cancel,
                        onSave: e.save,
                        editable: !!e.userInfo && e.editable,
                      },
                      {
                        default: ti(() => [
                          gi(
                            ia(
                              "input",
                              {
                                type: "text",
                                class: Z([
                                  "input short",
                                  { "is-danger": e.updateEmailError },
                                ]),
                                part: "input",
                                readonly: !e.isEditing,
                                "onUpdate:modelValue":
                                  t[0] || (t[0] = (t) => (e.email = t)),
                                onInput:
                                  t[1] ||
                                  (t[1] = (t) => (e.updateEmailError = "")),
                                inputmode: "email",
                                autocomplete: "email",
                              },
                              null,
                              42,
                              bD
                            ),
                            [[us, e.email]]
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      [
                        "title",
                        "isEditing",
                        "errorMessage",
                        "onEditStart",
                        "onCancel",
                        "onSave",
                        "editable",
                      ]
                    ),
                  ],
                  64
                )
              );
            },
          ],
        ]),
      },
      props: {
        userInfo: { type: Object, required: !1 },
        appId: { type: String, required: !0 },
        appInfo: { type: Object, required: !0 },
      },
      setup(e) {
        const { t: t } = fl(),
          i = ht("");
        const n = fa(() => e.appInfo.allowed_identifier !== Or.phone),
          a = fa(() => e.appInfo.allowed_identifier !== Or.email),
          s = fa(
            () =>
              e.appInfo.required_identifier === wr.Email ||
              e.appInfo.required_identifier === wr.Both
          ),
          r = fa(
            () =>
              e.appInfo.required_identifier === wr.Phone ||
              e.appInfo.required_identifier === wr.Both
          );
        return {
          message: i,
          globalMessage: function (e) {
            i.value = e;
          },
          showEmail: n,
          showPhone: a,
          emailRequired: s,
          phoneRequired: r,
          t: t,
        };
      },
    }),
    UD = { class: "title secondary-title" },
    QD = { key: 0 };
  var _D = mu(CD, [
    [
      "render",
      function (e, t, i, n, a, s) {
        const r = Fi("email"),
          o = Fi("phone-number");
        return (
          Vn(),
          Jn(
            Yn,
            null,
            [
              ia("div", UD, X(e.t("login-info")), 1),
              ia(
                "div",
                { class: Z(["feedback", e.message ? "feedback-info" : ""]) },
                [
                  e.message
                    ? (Vn(), Jn("div", QD, X(e.message), 1))
                    : ra("", !0),
                ],
                2
              ),
              e.showEmail
                ? (Vn(),
                  $n(
                    r,
                    {
                      key: 0,
                      appId: e.appId,
                      userInfo: e.userInfo,
                      required: e.emailRequired,
                      editable: !!e.appInfo.profile_management,
                      onGlobalMessage: e.globalMessage,
                    },
                    null,
                    8,
                    [
                      "appId",
                      "userInfo",
                      "required",
                      "editable",
                      "onGlobalMessage",
                    ]
                  ))
                : ra("", !0),
              e.showPhone
                ? (Vn(),
                  $n(
                    o,
                    {
                      key: 1,
                      appId: e.appId,
                      userInfo: e.userInfo,
                      required: e.phoneRequired,
                      editable: !!e.appInfo.profile_management,
                      onGlobalMessage: e.globalMessage,
                    },
                    null,
                    8,
                    [
                      "appId",
                      "userInfo",
                      "required",
                      "editable",
                      "onGlobalMessage",
                    ]
                  ))
                : ra("", !0),
            ],
            64
          )
        );
      },
    ],
  ]);
  const YD = mi({
      name: "Modal",
      props: {
        active: { type: Boolean, default: !1 },
        title: { type: String, default: "" },
        onPrimaryButton: { type: Function, required: !1 },
        onCancelButton: { type: Function, required: !1 },
        primaryButtonText: { type: String, default: "OK" },
        cancelButtonText: { type: String, default: "Cancel" },
        info: { type: Boolean, default: !1 },
        cancelOnly: { type: Boolean, default: !1 },
        danger: { type: Boolean, default: !1 },
      },
      setup(e, t) {
        const i = ht(!1);
        var n;
        Mi(
          () => {
            (i.value = e.active),
              i.value
                ? document.documentElement.classList.add("is-clipped")
                : document.documentElement.classList.remove("is-clipped");
          },
          null,
          n
        );
        return (
          _i(() => document.documentElement.classList.remove("is-clipped")),
          {
            isActive: i,
            closeModal: () => {
              i.value = !1;
            },
            primaryAction: function () {
              void 0 !== e.onPrimaryButton
                ? e.onPrimaryButton().then((e) => {
                    e && t.emit("update:active", !1);
                  })
                : t.emit("update:active", !1);
            },
            cancelAction: function () {
              void 0 !== e.onCancelButton
                ? e.onCancelButton().then(() => {
                    t.emit("update:active", !1);
                  })
                : t.emit("update:active", !1);
            },
          }
        );
      },
    }),
    PD = ia("div", { class: "passage-modal-background" }, null, -1),
    RD = { class: "passage-modal-card" },
    BD = { class: "passage-modal-body" },
    WD = { class: "passage-modal-footer" };
  var FD = mu(YD, [
    [
      "render",
      function (e, t, i, n, a, s) {
        return (
          Vn(),
          $n(
            Ja,
            { name: "modal", mode: "out-in" },
            {
              default: ti(() => [
                e.isActive
                  ? (Vn(),
                    Jn(
                      "div",
                      {
                        key: 0,
                        class: Z([
                          "passage-modal",
                          { "is-active": e.isActive },
                        ]),
                        part: "modal",
                        role: "dialog",
                        onKeyup: [
                          t[2] ||
                            (t[2] = ms(
                              (...t) =>
                                e.primaryAction && e.primaryAction(...t),
                              ["enter"]
                            )),
                          t[3] ||
                            (t[3] = ms(
                              (...t) => e.cancelAction && e.cancelAction(...t),
                              ["esc"]
                            )),
                        ],
                      },
                      [
                        PD,
                        ia("div", RD, [
                          ia(
                            "div",
                            {
                              class: Z([
                                "title main-title",
                                { "danger-header": e.danger },
                              ]),
                            },
                            X(e.title),
                            3
                          ),
                          ia("div", BD, [$i(e.$slots, "default")]),
                          ia("div", WD, [
                            e.cancelOnly
                              ? ra("", !0)
                              : (Vn(),
                                Jn(
                                  "button",
                                  {
                                    key: 0,
                                    class: "button is-modal",
                                    part: "modal-button modal-primary",
                                    onClick:
                                      t[0] ||
                                      (t[0] = hs(
                                        (...t) =>
                                          e.primaryAction &&
                                          e.primaryAction(...t),
                                        ["prevent"]
                                      )),
                                  },
                                  X(e.primaryButtonText),
                                  1
                                )),
                            e.info
                              ? ra("", !0)
                              : (Vn(),
                                Jn(
                                  "button",
                                  {
                                    key: 1,
                                    class: Z([
                                      "button is-secondary is-modal cancel-button",
                                      { "cancel-only": e.cancelOnly },
                                    ]),
                                    part: "modal-button modal-secondary",
                                    onClick:
                                      t[1] ||
                                      (t[1] = hs(
                                        (...t) =>
                                          e.cancelAction &&
                                          e.cancelAction(...t),
                                        ["prevent"]
                                      )),
                                  },
                                  X(e.cancelButtonText),
                                  3
                                )),
                          ]),
                        ]),
                      ],
                      34
                    ))
                  : ra("", !0),
              ]),
              _: 3,
            }
          )
        );
      },
    ],
  ]);
  const VD = mi({
      name: "Revoke Device",
      components: { Modal: FD },
      props: {
        device: { type: Object, required: !0 },
        active: { type: Boolean, required: !0 },
        currentDeviceId: { type: String, required: !1 },
        appId: { type: String, required: !0 },
      },
      emits: ["dialogClose", "update:active"],
      setup(e, t) {
        const { t: i } = fl(),
          n = fa({
            get: () => e.active,
            set(e) {
              t.emit("update:active", e);
            },
          }),
          {
            revokeDevice: a,
            revokePending: s,
            errorMessage: r,
          } = (function (e) {
            const { t: t } = fl(),
              i = new Lr(e).getCurrentUser(),
              n = ht(!1),
              a = ht("");
            return {
              revokeDevice: function (e) {
                return __async(this, null, function* () {
                  n.value = !0;
                  try {
                    return yield i.deleteDevice(e), !0;
                  } catch (s) {
                    return (a.value = t("failed-to-revoke-this-device")), !1;
                  } finally {
                    n.value = !1;
                  }
                });
              },
              revokePending: n,
              errorMessage: a,
            };
          })(e.appId);
        return {
          showModal: n,
          onDeleteDevice: function () {
            return __async(this, null, function* () {
              if (r.value) return t.emit("dialogClose"), !0;
              const i = yield a(e.device);
              return i && t.emit("dialogClose"), i;
            });
          },
          revokePending: s,
          errorMessage: r,
          t: i,
        };
      },
    }),
    HD = { key: 1 },
    ZD = { key: 0 },
    GD = { key: 2, class: "text is-danger" };
  var JD = mu(VD, [
    [
      "render",
      function (e, t, i, n, a, s) {
        const r = Fi("loading"),
          o = Fi("modal");
        return (
          Vn(),
          $n(
            o,
            {
              title: e.t("revoke-device"),
              active: e.showModal,
              "onUpdate:active": t[0] || (t[0] = (t) => (e.showModal = t)),
              primaryButtonText: e.errorMessage
                ? e.t("ok")
                : e.t("revoke-device"),
              onPrimaryButton: e.onDeleteDevice,
              info: !!e.errorMessage,
            },
            {
              default: ti(() => {
                var t;
                return [
                  e.revokePending
                    ? (Vn(),
                      $n(r, { key: 0, active: e.revokePending }, null, 8, [
                        "active",
                      ]))
                    : ra("", !0),
                  e.errorMessage
                    ? ra("", !0)
                    : (Vn(),
                      Jn("div", HD, [
                        sa(X(e.t("confirm-remove-device")) + " ", 1),
                        (null == (t = e.device) ? void 0 : t.id) ===
                        e.currentDeviceId
                          ? (Vn(),
                            Jn(
                              "b",
                              ZD,
                              X(e.t("remove-current-device-warning")),
                              1
                            ))
                          : ra("", !0),
                        sa(
                          " " + X(e.t("are-you-sure-you-want-to-continue")),
                          1
                        ),
                      ])),
                  e.errorMessage
                    ? (Vn(), Jn("div", GD, X(e.errorMessage), 1))
                    : ra("", !0),
                ];
              }),
              _: 1,
            },
            8,
            ["title", "active", "primaryButtonText", "onPrimaryButton", "info"]
          )
        );
      },
    ],
  ]);
  const $D = { class: "label input-box-title" },
    KD = { class: "message is-danger" },
    qD = { key: 1, class: "text is-danger" },
    XD = mi({
      __name: "EditDevice",
      props: {
        deviceObject: {},
        active: { type: Boolean },
        newDevice: { type: Boolean },
        appId: {},
      },
      emits: ["dialogClose", "update:active"],
      setup(e, { emit: t }) {
        const i = e,
          { t: n } = fl(),
          a = fa({
            get: () => i.active,
            set(e) {
              t("update:active", e);
            },
          });
        function s() {
          (o.value = ""), (c.value = "");
        }
        function r() {
          return __async(this, null, function* () {
            t("dialogClose"), s();
          });
        }
        const o = ht(""),
          M = ht("");
        Ui(() => {
          var e, t;
          M.value =
            null !=
            (t = null == (e = i.deviceObject) ? void 0 : e.friendly_name)
              ? t
              : "";
        }),
          bi(() => {
            var e, t;
            M.value =
              null !=
              (t = null == (e = i.deviceObject) ? void 0 : e.friendly_name)
                ? t
                : "";
          });
        const {
          renameDevice: l,
          editPending: u,
          errorMessage: c,
        } = (function (e) {
          const { t: t } = fl(),
            i = new Lr(e).getCurrentUser(),
            n = ht(!1),
            a = ht("");
          return {
            renameDevice: function (e, s) {
              return __async(this, null, function* () {
                n.value = !0;
                try {
                  return yield i.editDevice(e, { friendly_name: s }), !0;
                } catch (r) {
                  return (a.value = t("failed-to-rename-this-device")), !1;
                } finally {
                  n.value = !1;
                }
              });
            },
            editPending: n,
            errorMessage: a,
          };
        })(i.appId);
        function g() {
          return __async(this, null, function* () {
            if (!i.deviceObject) return !1;
            if (c.value) return t("dialogClose"), s(), !0;
            if (M.value === i.deviceObject.friendly_name)
              return t("dialogClose"), !0;
            if (!M.value) return (o.value = n("device-name-is-required")), !1;
            if (M.value.length > 64)
              return (o.value = n("device-name-maximum")), !1;
            const e = yield l(i.deviceObject.id, M.value);
            return e ? (t("dialogClose"), !0) : e;
          });
        }
        const d = ht();
        return (
          oi(d, () => {
            void 0 !== d.value && null !== d.value && d.value.focus();
          }),
          (e, t) => {
            const i = Fi("loading");
            return (
              Vn(),
              $n(
                FD,
                {
                  title: e.newDevice
                    ? xt(n)("name-this-device")
                    : xt(n)("edit-device"),
                  active: a.value,
                  "onUpdate:active": t[1] || (t[1] = (e) => (a.value = e)),
                  primaryButtonText: xt(c)
                    ? xt(n)("ok")
                    : e.newDevice
                    ? xt(n)("add-device")
                    : xt(n)("rename-device"),
                  onPrimaryButton: g,
                  onCancelButton: r,
                  info: e.newDevice,
                },
                {
                  default: ti(() => [
                    xt(u)
                      ? (Vn(),
                        $n(i, { key: 0, active: xt(u) }, null, 8, ["active"]))
                      : ra("", !0),
                    ia(
                      "div",
                      null,
                      X(
                        e.newDevice
                          ? xt(n)("give-this-device-a-name")
                          : xt(n)("rename-this-device")
                      ),
                      1
                    ),
                    ia(
                      "div",
                      $D,
                      X(
                        e.newDevice
                          ? xt(n)("device-name")
                          : xt(n)("new-device-name")
                      ),
                      1
                    ),
                    gi(
                      ia(
                        "input",
                        {
                          type: "text",
                          class: Z(["input", { "is-danger": o.value }]),
                          "onUpdate:modelValue":
                            t[0] || (t[0] = (e) => (M.value = e)),
                          onInput: s,
                          part: "input",
                          ref_key: "editDeviceInput",
                          ref: d,
                        },
                        null,
                        34
                      ),
                      [[us, M.value]]
                    ),
                    ia("div", KD, X(o.value), 1),
                    xt(c) ? (Vn(), Jn("div", qD, X(xt(c)), 1)) : ra("", !0),
                  ]),
                  _: 1,
                },
                8,
                ["title", "active", "primaryButtonText", "info"]
              )
            );
          }
        );
      },
    }),
    eI = mi({
      __name: "PlatformIcon",
      setup(e) {
        var t;
        const i = null != (t = new Us().getOS().name) ? t : "";
        let n;
        return (
          (n = i.startsWith("Windows")
            ? Bc.windowsHello
            : i.startsWith("Mac OS") || i.startsWith("iOS")
            ? Bc.appleBiometric
            : Bc.genericBiometrics),
          (e, t) => (
            Vn(),
            $n(xt(Fc), { src: xt(n), alt: "Platform device icon" }, null, 8, [
              "src",
            ])
          )
        );
      },
    }),
    tI = mi({
      name: "Revoke Device",
      components: {
        Modal: FD,
        EditDevice: XD,
        InlineSvg: Fc,
        PlatformIcon: eI,
      },
      props: {
        active: { type: Boolean, required: !0 },
        appId: { type: String, required: !0 },
      },
      emits: ["dialogClose", "update:active"],
      setup(e, t) {
        const { t: i } = fl(),
          n = fa({
            get: () => e.active,
            set(e) {
              t.emit("update:active", e);
            },
          }),
          a = ht(!1),
          { addDevice: s, addPending: r, errorMessage: o } = DN(e.appId),
          M = ht();
        function l() {
          return __async(this, null, function* () {
            return (
              (M.value = yield s()),
              !!M.value && ((n.value = !1), (a.value = !0), !0)
            );
          });
        }
        return (
          oi(n, () => {
            n.value && l();
          }),
          {
            showAddModal: n,
            showEditModal: a,
            addDevice: s,
            errorMessage: o,
            addPending: r,
            onAddDevice: l,
            newDevice: M,
            editDialogClose: function () {
              t.emit("dialogClose");
            },
            Icons: Bc,
            t: i,
          }
        );
      },
    }),
    iI = { class: "image has-text-centered", style: { margin: "5px auto" } },
    nI = { key: 1, class: "has-text-centered" },
    aI = { key: 2, class: "text is-danger has-text-centered" };
  var sI = mu(tI, [
    [
      "render",
      function (e, t, i, n, a, s) {
        const r = Fi("loading"),
          o = Fi("inline-svg"),
          M = Fi("platform-icon"),
          l = Fi("modal"),
          u = Fi("edit-device");
        return (
          Vn(),
          Jn(
            Yn,
            null,
            [
              na(
                l,
                {
                  title: e.t("add-passkey"),
                  active: e.showAddModal,
                  "onUpdate:active":
                    t[0] || (t[0] = (t) => (e.showAddModal = t)),
                  cancelOnly: !e.errorMessage,
                  onPrimaryButton: e.onAddDevice,
                  primaryButtonText: e.t("try-again"),
                },
                {
                  default: ti(() => [
                    e.addPending
                      ? (Vn(),
                        $n(r, { key: 0, active: e.addPending }, null, 8, [
                          "active",
                        ]))
                      : ra("", !0),
                    ia("figure", iI, [
                      e.errorMessage
                        ? (Vn(),
                          $n(
                            o,
                            {
                              key: 0,
                              src: e.Icons.fingerprintFailed,
                              alt: "Biometrics scan failed",
                            },
                            null,
                            8,
                            ["src"]
                          ))
                        : (Vn(), $n(M, { key: 1, alt: "Biometrics scan" })),
                    ]),
                    e.errorMessage
                      ? ra("", !0)
                      : (Vn(), Jn("div", nI, X(e.t("enable-this-device")), 1)),
                    e.errorMessage
                      ? (Vn(), Jn("div", aI, X(e.errorMessage), 1))
                      : ra("", !0),
                  ]),
                  _: 1,
                },
                8,
                [
                  "title",
                  "active",
                  "cancelOnly",
                  "onPrimaryButton",
                  "primaryButtonText",
                ]
              ),
              na(
                u,
                {
                  active: e.showEditModal,
                  "onUpdate:active":
                    t[1] || (t[1] = (t) => (e.showEditModal = t)),
                  "app-id": e.appId,
                  deviceObject: e.newDevice,
                  onDialogClose: e.editDialogClose,
                  newDevice: "",
                },
                null,
                8,
                ["active", "app-id", "deviceObject", "onDialogClose"]
              ),
            ],
            64
          )
        );
      },
    ],
  ]);
  const rI = mi({
      name: "Loading",
      props: { active: Boolean },
      setup:
        (e, { attrs: t }) =>
        () =>
          e.active
            ? ka(Ja, { name: "fade", mode: "out-in" }, () => [
                ka(
                  "div",
                  __spreadProps(__spreadValues({}, t), {
                    class: ["component-loading loading-overlay is-overlay"],
                    title: "Loading...",
                  }),
                  [
                    ka("div", { class: ["loading-background is-overlay"] }, ""),
                    ka("div", { class: ["loading-icon"] }),
                  ]
                ),
              ])
            : null,
    }),
    oI = mi({
      name: "Dropdown",
      components: { InlineSvg: Fc },
      props: {
        items: { type: Array, default: () => [] },
        maxDropdownItems: { type: Number, default: 7 },
        modelValue: null,
        readonly: { type: Boolean, default: !1 },
        placeholder: { type: String, default: "Select..." },
        error: { type: Boolean, default: !1 },
        colorScheme: { type: String, default: "default", required: !1 },
      },
      emits: { change: (e) => !0, "update:modelValue": (e) => !0 },
      setup(e, t) {
        const i = ht(),
          n = ht(null);
        const a = fa(() => e.items.find((t) => t.value === e.modelValue)),
          s = fa(() => {
            var t, i;
            return null != (i = null == (t = a.value) ? void 0 : t.name)
              ? i
              : e.placeholder;
          }),
          r = fa(() => {
            var e, t;
            return null != (t = null == (e = a.value) ? void 0 : e.style)
              ? t
              : "";
          }),
          o = ht(!1),
          M = ht(0);
        function l() {
          if (null === n.value) return 0;
          const e = n.value.getBoundingClientRect().width;
          return Math.ceil(e);
        }
        const u = ht(0),
          c = ht("");
        return (
          bi(() => {
            const e = l();
            (u.value = l() - 15), (c.value = `width: ${e}px;`);
          }),
          {
            displayName: s,
            showList: o,
            selectItem: function (e) {
              t.emit("change", e.value),
                t.emit("update:modelValue", e.value),
                (o.value = !1);
            },
            setItemRef: function (e) {},
            buttonWidth: u,
            dropdownContainer: i,
            listWidthStyle: c,
            listMaxHeight: M,
            toggleList: function () {
              e.readonly ||
                (o.value ||
                  (M.value = (function () {
                    const t = 30 * e.maxDropdownItems + 1;
                    if (null === i.value) return t;
                    const n = i.value.getBoundingClientRect().bottom,
                      a = window.innerHeight - n - 10;
                    return a < 60 ? 60 : a > t ? t : a;
                  })()),
                (o.value = !o.value));
            },
            dropdownList: n,
            displayStyle: r,
            selectedItem: a,
            Icons: Bc,
          }
        );
      },
    }),
    MI = ["readonly"],
    lI = ["onClick"];
  var uI = mu(oI, [
    [
      "render",
      function (e, t, i, n, a, s) {
        const r = Fi("inline-svg");
        return (
          Vn(),
          Jn(
            "div",
            {
              class: Z(["dropdown-container", [e.colorScheme]]),
              tabindex: "0",
              onFocusout:
                t[1] || (t[1] = hs((t) => (e.showList = !1), ["prevent"])),
              ref: "dropdownContainer",
              readonly: e.readonly,
            },
            [
              ia(
                "div",
                {
                  class: Z([
                    "dropdown-button",
                    { expanded: e.showList, error: e.error },
                  ]),
                  style: B(`width: ${e.buttonWidth}px; ${e.displayStyle}`),
                  onClick:
                    t[0] ||
                    (t[0] = hs(
                      (...t) => e.toggleList && e.toggleList(...t),
                      ["prevent"]
                    )),
                },
                [
                  ia(
                    "div",
                    {
                      class: Z([
                        "dropdown-title",
                        { placeholder: void 0 === e.selectedItem },
                      ]),
                    },
                    X(e.displayName),
                    3
                  ),
                  na(
                    r,
                    { src: e.Icons.chevronDown, alt: "Chevron down" },
                    null,
                    8,
                    ["src"]
                  ),
                ],
                6
              ),
              ia(
                "div",
                {
                  class: Z(["dropdown-list", { collapsed: !e.showList }]),
                  style: B(
                    `max-height: ${e.listMaxHeight}px; ${e.listWidthStyle}`
                  ),
                  ref: "dropdownList",
                },
                [
                  (Vn(!0),
                  Jn(
                    Yn,
                    null,
                    Ji(
                      e.items,
                      (t, i) => (
                        Vn(),
                        Jn(
                          "div",
                          {
                            class: Z([
                              "item",
                              { "bottom-border": i !== e.items.length - 1 },
                            ]),
                            style: B(t.style),
                            key: i,
                            ref_for: !0,
                            ref: e.setItemRef,
                            onClick: hs((i) => e.selectItem(t), ["prevent"]),
                          },
                          X(t.name),
                          15,
                          lI
                        )
                      )
                    ),
                    128
                  )),
                ],
                6
              ),
            ],
            42,
            MI
          )
        );
      },
    ],
  ]);
  const cI = { key: 0, class: "passage-table-paginator" },
    gI = { class: "page-size-selector" },
    dI = { style: { "margin-right": "15px" } },
    NI = { class: "paginator-text" },
    DI = { class: "paginator-buttons flex-row" },
    II = ["onClick"],
    yI = ["onClick"],
    jI = ["onClick"],
    pI = ["onClick"],
    zI = ["onClick"],
    TI = mi({
      __name: "Paginator",
      props: { dataset: {}, page: {} },
      emits: ["update:page"],
      setup(e, { emit: t }) {
        const i = e,
          { t: n } = fl(),
          a = ht(5),
          s = [
            { name: "5", value: 5 },
            { name: "10", value: 10 },
            { name: "15", value: 15 },
          ],
          r = fa(
            () =>
              o.value.length > 1 ||
              (void 0 !== i.dataset && i.dataset.length > 5)
          ),
          o = fa(() => {
            if (void 0 === i.dataset || 0 === i.dataset.length) return [];
            const e = [];
            for (let t = 0; t < i.dataset.length; t += a.value) {
              const n = i.dataset.slice(t, t + a.value);
              e.push(n);
            }
            return (l.value = e[0]), (u.value = 0), e;
          }),
          M = ht([]),
          l = fa({
            get: () => M.value,
            set(e) {
              (M.value = e), t("update:page", e);
            },
          }),
          u = ht(0),
          c = fa({
            get: () => u.value,
            set(e) {
              (u.value = e), o.value && (l.value = o.value[e]);
            },
          }),
          g = fa(() => {
            var e, t;
            const s = c.value,
              r = a.value,
              o =
                null != (t = null == (e = i.dataset) ? void 0 : e.length)
                  ? t
                  : 0,
              M = s * r + 1,
              l = Math.min(s * r + r, o);
            return n("showing-page-of-n", [M, l, o]);
          }),
          d = (e, t, i) =>
            Array.from({ length: (t - e) / i + 1 }, (t, n) => e + n * i),
          N = fa(() => {
            if (o.value.length < 3) return d(0, o.value.length - 1, 1);
            if (0 === c.value) return d(0, 2, 1);
            const e = o.value.length;
            return c.value === e - 1
              ? d(e - 3, e - 1, 1)
              : d(c.value - 1, c.value + 1, 1);
          });
        function D() {
          c.value = 0;
        }
        function I() {
          0 !== c.value && (c.value -= 1);
        }
        function y() {
          c.value !== o.value.length - 1 && (c.value += 1);
        }
        function j() {
          c.value !== o.value.length - 1 && (c.value = o.value.length - 1);
        }
        return (e, t) =>
          r.value
            ? (Vn(),
              Jn("div", cI, [
                ia("div", gI, [
                  ia("span", dI, X(xt(n)("rows-per-page")), 1),
                  na(
                    uI,
                    {
                      modelValue: a.value,
                      "onUpdate:modelValue":
                        t[0] || (t[0] = (e) => (a.value = e)),
                      items: s,
                    },
                    null,
                    8,
                    ["modelValue"]
                  ),
                ]),
                ia("div", NI, X(g.value), 1),
                ia("div", DI, [
                  ia(
                    "div",
                    {
                      class: Z([
                        "paginator-button",
                        { disabled: 0 === c.value },
                      ]),
                      part: "paginator-button",
                      onClick: hs(D, ["prevent"]),
                    },
                    [
                      na(
                        xt(Fc),
                        { src: xt(Bc).doubleChevronLeft, alt: "First page" },
                        null,
                        8,
                        ["src"]
                      ),
                    ],
                    10,
                    II
                  ),
                  ia(
                    "div",
                    {
                      class: Z([
                        "paginator-button",
                        { disabled: 0 === c.value },
                      ]),
                      part: "paginator-button",
                      onClick: hs(I, ["prevent"]),
                    },
                    [
                      na(
                        xt(Fc),
                        { src: xt(Bc).chevronLeft, alt: "Previous page" },
                        null,
                        8,
                        ["src"]
                      ),
                    ],
                    10,
                    yI
                  ),
                  (Vn(!0),
                  Jn(
                    Yn,
                    null,
                    Ji(
                      N.value,
                      (e) => (
                        Vn(),
                        Jn(
                          "div",
                          {
                            key: e,
                            class: Z([
                              "paginator-button",
                              { selected: e === c.value },
                            ]),
                            part: "paginator-button",
                            onClick: hs(
                              (t) => {
                                return (i = e), void (c.value = i);
                                var i;
                              },
                              ["prevent"]
                            ),
                          },
                          X(e + 1),
                          11,
                          jI
                        )
                      )
                    ),
                    128
                  )),
                  ia(
                    "div",
                    {
                      class: Z([
                        "paginator-button",
                        { disabled: c.value === o.value.length - 1 },
                      ]),
                      part: "paginator-button",
                      onClick: hs(y, ["prevent"]),
                    },
                    [
                      na(
                        xt(Fc),
                        { src: xt(Bc).chevronRight, alt: "Next page" },
                        null,
                        8,
                        ["src"]
                      ),
                    ],
                    10,
                    pI
                  ),
                  ia(
                    "div",
                    {
                      class: Z([
                        "paginator-button",
                        { disabled: c.value === o.value.length - 1 },
                      ]),
                      part: "paginator-button",
                      onClick: hs(j, ["prevent"]),
                    },
                    [
                      na(
                        xt(Fc),
                        { src: xt(Bc).doubleChevronRight, alt: "Last page" },
                        null,
                        8,
                        ["src"]
                      ),
                    ],
                    10,
                    zI
                  ),
                ]),
              ]))
            : ra("", !0);
      },
    });
  var hI = ((e) => ((e.default = "DEFAULT"), (e.danger = "DANGER"), e))(
    hI || {}
  );
  const AI = { class: "action-menu" },
    mI = ["onMousedown"],
    xI = mi({
      __name: "ActionMenu",
      props: { actions: {} },
      setup(e) {
        const t = ht(!1);
        function i(e) {
          t.value = void 0 === e ? !t.value : e;
        }
        return (e, n) => (
          Vn(),
          Jn("div", AI, [
            ia(
              "div",
              {
                class: "menu-icon",
                onClick: n[0] || (n[0] = hs((e) => i(), ["prevent"])),
                onFocusout: n[1] || (n[1] = hs((e) => i(!1), ["prevent"])),
                tabindex: "0",
              },
              [
                na(
                  xt(Fc),
                  { src: xt(Bc).ellipsis, alt: "Action menu" },
                  null,
                  8,
                  ["src"]
                ),
              ],
              32
            ),
            ia(
              "div",
              { class: Z(["menu-dropdown", { collapsed: !t.value }]) },
              [
                (Vn(!0),
                Jn(
                  Yn,
                  null,
                  Ji(
                    e.actions,
                    (e) => (
                      Vn(),
                      Jn(
                        "div",
                        {
                          class: Z([
                            "menu-item",
                            { danger: e.type === xt(hI).danger },
                          ]),
                          key: e.displayName,
                          onMousedown: (t) => e.action(),
                        },
                        X(e.displayName),
                        43,
                        mI
                      )
                    )
                  ),
                  128
                )),
              ],
              2
            ),
          ])
        );
      },
    }),
    fI = {
      class: "passage-table-header-row",
      part: "passage-table-header-row",
    },
    kI = {
      key: 0,
      class: "passage-table-header-cell passage-expansion-cell",
      part: "passage-table-header-cell",
    },
    LI = ia(
      "th",
      {
        class: "passage-table-header-cell passage-action-menu-cell",
        part: "passage-table-header-cell",
      },
      null,
      -1
    ),
    OI = { class: "passage-table-row", part: "passage-table-row" },
    wI = ["onClick"],
    vI = {
      colspan: 3,
      class: "passage-table-cell",
      part: "passage-table-cell",
    },
    EI = { class: "expanded-content" },
    SI = { class: "expanded-label" },
    bI = { key: 1, class: "passage-table-empty" },
    CI = ["colspan"],
    UI = { class: "title secondary-title" },
    QI = mi({
      __name: "SimpleDataTable",
      props: {
        dataset: {},
        headers: {},
        columns: {},
        mobileBreakpoint: {},
        actions: {},
      },
      setup(e) {
        const t = e,
          i = ht(),
          { t: n } = fl(),
          a = ht(),
          s = new ResizeObserver(() => {
            o();
          }),
          r = ht(!1);
        function o() {
          if (void 0 === a.value) return;
          const e = a.value.getBoundingClientRect().width;
          r.value = e < t.mobileBreakpoint;
        }
        const M = ht([]);
        function l(e) {
          if (null == e.target) return;
          const t = e.target.previousSibling;
          return null != t ? t : void 0;
        }
        function u(e) {
          const t = l(e);
          void 0 !== t &&
            (t.className = "passage-table-row passage-table-row-hover");
        }
        function c(e) {
          const t = l(e);
          void 0 !== t && (t.className = "passage-table-row");
        }
        function g(e) {
          var i;
          return void 0 === t.actions
            ? []
            : null == (i = t.actions)
            ? void 0
            : i.map((t) => ({
                displayName: t.displayName,
                type: t.type,
                action: () => {
                  t.action(e);
                },
              }));
        }
        return (
          oi(i, () => {
            void 0 !== i.value && (M.value = i.value.map(() => !1));
          }),
          bi(() => {
            o(), a.value && s.observe(a.value);
          }),
          _i(() => {
            s.disconnect();
          }),
          (e, t) => (
            Vn(),
            Jn("div", null, [
              ia(
                "table",
                {
                  class: "passage-table",
                  ref_key: "tableContainer",
                  ref: a,
                  part: "passage-table",
                },
                [
                  ia("tbody", null, [
                    ia("tr", fI, [
                      (Vn(!0),
                      Jn(
                        Yn,
                        null,
                        Ji(
                          r.value ? [e.headers[0]] : e.headers,
                          (e) => (
                            Vn(),
                            Jn(
                              "th",
                              {
                                key: e,
                                class: "passage-table-header-cell",
                                part: "passage-table-header-cell",
                              },
                              X(e),
                              1
                            )
                          )
                        ),
                        128
                      )),
                      r.value ? (Vn(), Jn("th", kI)) : ra("", !0),
                      LI,
                    ]),
                    i.value
                      ? (Vn(!0),
                        Jn(
                          Yn,
                          { key: 0 },
                          Ji(
                            i.value,
                            (t, i) => (
                              Vn(),
                              Jn(
                                Yn,
                                { key: i },
                                [
                                  ia("tr", OI, [
                                    (Vn(!0),
                                    Jn(
                                      Yn,
                                      null,
                                      Ji(
                                        r.value ? [e.columns[0]] : e.columns,
                                        (n) => (
                                          Vn(),
                                          Jn(
                                            "td",
                                            {
                                              key: n,
                                              class: Z([
                                                "passage-table-cell",
                                                {
                                                  expanded:
                                                    r.value && M.value[i],
                                                },
                                              ]),
                                              part: "passage-table-cell",
                                            },
                                            [
                                              $i(
                                                e.$slots,
                                                n,
                                                { value: t[n], item: t },
                                                () => [sa(X(t[n]), 1)]
                                              ),
                                            ],
                                            2
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                    r.value
                                      ? (Vn(),
                                        Jn(
                                          "td",
                                          {
                                            key: 0,
                                            class: Z([
                                              "passage-table-cell passage-expansion-cell",
                                              {
                                                expanded: r.value && M.value[i],
                                              },
                                            ]),
                                            part: "passage-table-cell",
                                            onClick: hs(
                                              (e) =>
                                                (function (e) {
                                                  M.value[e] = !M.value[e];
                                                })(i),
                                              ["prevent"]
                                            ),
                                          },
                                          [
                                            na(
                                              xt(Fc),
                                              {
                                                class: Z([
                                                  "table-chevron",
                                                  { expanded: M.value[i] },
                                                ]),
                                                src: xt(Bc).tableChevronDown,
                                                alt: "Expand row",
                                              },
                                              null,
                                              8,
                                              ["src", "class"]
                                            ),
                                          ],
                                          10,
                                          wI
                                        ))
                                      : ra("", !0),
                                    ia(
                                      "td",
                                      {
                                        class: Z([
                                          "passage-table-cell passage-action-menu-cell",
                                          { expanded: r.value && M.value[i] },
                                        ]),
                                        part: "passage-table-cell",
                                      },
                                      [
                                        na(xI, { actions: g(t) }, null, 8, [
                                          "actions",
                                        ]),
                                      ],
                                      2
                                    ),
                                  ]),
                                  r.value && M.value[i]
                                    ? (Vn(),
                                      Jn(
                                        "tr",
                                        {
                                          key: 0,
                                          class: "passage-expansion-row",
                                          part: "passage-table-expansion-row",
                                          onMouseenter: u,
                                          onMouseleave: c,
                                        },
                                        [
                                          ia("td", vI, [
                                            ia("div", EI, [
                                              (Vn(!0),
                                              Jn(
                                                Yn,
                                                null,
                                                Ji(
                                                  e.columns.slice(1),
                                                  (i, n) => (
                                                    Vn(),
                                                    Jn(
                                                      "div",
                                                      {
                                                        class: "expanded-item",
                                                        key: i,
                                                      },
                                                      [
                                                        ia(
                                                          "div",
                                                          SI,
                                                          X(e.headers[n + 1]),
                                                          1
                                                        ),
                                                        ia("span", null, [
                                                          $i(
                                                            e.$slots,
                                                            i,
                                                            {
                                                              value: t[i],
                                                              item: t,
                                                            },
                                                            () => [
                                                              sa(X(t[i]), 1),
                                                            ]
                                                          ),
                                                        ]),
                                                      ]
                                                    )
                                                  )
                                                ),
                                                128
                                              )),
                                            ]),
                                          ]),
                                        ],
                                        32
                                      ))
                                    : ra("", !0),
                                ],
                                64
                              )
                            )
                          ),
                          128
                        ))
                      : (Vn(),
                        Jn("tr", bI, [
                          ia(
                            "td",
                            {
                              class: "passage-table-empty-cell",
                              colspan: r.value ? 3 : e.columns.length + 1,
                            },
                            [
                              ia("div", UI, X(xt(n)("no-devices-found")), 1),
                              ia(
                                "div",
                                null,
                                X(xt(n)("there-are-no-devices-registered")),
                                1
                              ),
                            ],
                            8,
                            CI
                          ),
                        ])),
                  ]),
                ],
                512
              ),
              na(
                TI,
                {
                  dataset: e.dataset,
                  page: i.value,
                  "onUpdate:page": t[0] || (t[0] = (e) => (i.value = e)),
                },
                null,
                8,
                ["dataset", "page"]
              ),
            ])
          )
        );
      },
    }),
    _I = { class: "flex-row flex-end", style: { "margin-bottom": "30px" } },
    YI = { class: "title secondary-title" },
    PI = ia("div", { class: "spacer" }, null, -1),
    RI = { class: "flex-row", style: { "align-items": "center" } },
    BI = { key: 0, class: "current-device" },
    WI = mi({
      __name: "DevicesTable",
      props: {
        appId: {},
        userInfo: {},
        refreshDevices: { type: Function },
        webauthnAllowed: { type: Boolean },
      },
      setup(e) {
        const t = e,
          { t: i } = fl(),
          n = ht(),
          a = ht(0),
          s = ht(!1),
          r = ht(!1),
          o = ht(!1),
          M = fa(() => {
            if (void 0 === t.userInfo) return [];
            return t.userInfo.webauthn_devices
              .map((e) => e)
              .sort((e, t) =>
                new Date(e.last_login_at) > new Date(t.last_login_at) ? -1 : 1
              );
          });
        function l() {
          if (void 0 !== t.userInfo)
            if (null !== n.value && void 0 !== n.value) {
              if (t.userInfo.webauthn_devices.length > 5) {
                const e = n.value.getBoundingClientRect().height;
                a.value = Math.ceil(e);
              }
            } else a.value = 0;
          else a.value = 0;
        }
        const u = ht();
        function c(e) {
          (u.value = e), (o.value = !0);
        }
        function g(e) {
          (u.value = e), (s.value = !0);
        }
        const d = fa(() => [
          { displayName: i("edit-device"), type: hI.default, action: c },
          { displayName: i("revoke-device"), type: hI.danger, action: g },
        ]);
        Ui(() => {
          l();
        }),
          bi(() =>
            __async(this, null, function* () {
              l();
            })
          );
        const N = fa(() => {
            var e, i;
            if (void 0 === t.userInfo) return;
            const n = localStorage.getItem("psg_cred_obj");
            if (!n) return;
            const a =
              JSON.parse(n)[
                null != (i = null == (e = t.userInfo) ? void 0 : e.id) ? i : ""
              ];
            return t.userInfo.webauthn_devices.find((e) => e.cred_id === a);
          }),
          D = ht(!1);
        function I() {
          return __async(this, null, function* () {
            (u.value = void 0),
              (D.value = !0),
              yield t.refreshDevices(),
              (D.value = !1);
          });
        }
        return (e, t) => {
          var l;
          return (
            Vn(),
            Jn(
              "div",
              {
                class: "table-container",
                style: B(`min-height: ${a.value}px`),
                ref_key: "tableContainerRef",
                ref: n,
              },
              [
                D.value
                  ? (Vn(),
                    $n(rI, { key: 0, active: D.value }, null, 8, ["active"]))
                  : ra("", !0),
                ia("div", _I, [
                  ia("div", YI, X(xt(i)("my-passkeys")), 1),
                  PI,
                  e.userInfo && e.webauthnAllowed
                    ? (Vn(),
                      Jn(
                        "button",
                        {
                          key: 0,
                          part: "button button-secondary",
                          class: "button is-secondary is-modal",
                          onClick:
                            t[0] ||
                            (t[0] = hs((e) => (r.value = !0), ["prevent"])),
                        },
                        X(xt(i)("add-device")),
                        1
                      ))
                    : ra("", !0),
                ]),
                na(
                  QI,
                  {
                    dataset: M.value,
                    headers: [
                      xt(i)("name"),
                      xt(i)("added-time"),
                      xt(i)("last-login"),
                    ],
                    columns: ["friendly_name", "created_at", "last_login_at"],
                    "mobile-breakpoint": 500,
                    actions: d.value,
                  },
                  {
                    friendly_name: ti(({ value: e, item: t }) => {
                      var n;
                      return [
                        ia("div", RI, [
                          sa(X(e) + " ", 1),
                          (null == (n = N.value) ? void 0 : n.id) === t.id
                            ? (Vn(), Jn("div", BI, X(xt(i)("current")), 1))
                            : ra("", !0),
                        ]),
                      ];
                    }),
                    created_at: ti(({ value: e }) => [
                      sa(X(xt(Uu)(e).format("MMM D, YYYY")), 1),
                    ]),
                    last_login_at: ti(({ value: e }) => [
                      sa(X(xt(Uu)(e).format("MMM D, YYYY")), 1),
                    ]),
                    _: 1,
                  },
                  8,
                  ["dataset", "headers", "actions"]
                ),
                na(
                  sI,
                  {
                    active: r.value,
                    "onUpdate:active": t[1] || (t[1] = (e) => (r.value = e)),
                    "app-id": e.appId,
                    onDialogClose: I,
                  },
                  null,
                  8,
                  ["active", "app-id"]
                ),
                u.value
                  ? (Vn(),
                    $n(
                      JD,
                      {
                        key: 1,
                        active: s.value,
                        "onUpdate:active":
                          t[2] || (t[2] = (e) => (s.value = e)),
                        device: u.value,
                        currentDeviceId: null == (l = N.value) ? void 0 : l.id,
                        onDialogClose: I,
                        "app-id": e.appId,
                      },
                      null,
                      8,
                      ["active", "device", "currentDeviceId", "app-id"]
                    ))
                  : ra("", !0),
                na(
                  XD,
                  {
                    active: o.value,
                    "onUpdate:active": t[3] || (t[3] = (e) => (o.value = e)),
                    "app-id": e.appId,
                    deviceObject: u.value,
                    onDialogClose: I,
                  },
                  null,
                  8,
                  ["active", "app-id", "deviceObject"]
                ),
              ],
              4
            )
          );
        };
      },
    }),
    FI = mi({
      name: "Metadata Section",
      components: { UserMetadata: xc },
      props: {
        appInfo: { type: Object, required: !0 },
        userInfo: { type: Object, required: !1 },
        refreshMetadata: { type: Function, required: !0 },
      },
      setup(e) {
        const { t: t } = fl(),
          i = ht(!1),
          { updateMetadata: n, updateMetadataError: a } = kc(e.appInfo.id);
        const s = ht();
        return {
          LayoutType: Tc,
          isEditing: i,
          save: function () {
            return __async(this, null, function* () {
              var t;
              let a = !0;
              if (s.value) {
                if (!s.value.validate()) return;
                (null == (t = e.userInfo) ? void 0 : t.user_metadata) &&
                  (a = yield n(
                    e.userInfo.user_metadata,
                    e.appInfo.user_metadata_schema
                  ));
              }
              i.value = !a;
            });
          },
          cancel: function () {
            return __async(this, null, function* () {
              yield e.refreshMetadata(),
                s.value && s.value.validate(),
                (i.value = !1);
            });
          },
          componentRef: s,
          updateMetadataError: a,
          t: t,
        };
      },
    }),
    VI = { class: "metadata-header" },
    HI = { class: "title secondary-title" },
    ZI = { key: 0, class: "edit-save-container" },
    GI = { key: 0 },
    JI = { key: 1, style: { "text-align": "center" } },
    $I = { class: "title secondary-title" };
  function KI(e) {
    const t = ht(!0),
      i = ht(void 0),
      n = ht(void 0);
    function a() {
      void 0 !== e &&
        e.user_metadata_schema.forEach((e) => {
          if (!n.value || !n.value.user_metadata) return;
          const t = n.value.user_metadata[e.field_name];
          e.type === vr.DATE &&
            t &&
            (n.value.user_metadata[e.field_name] = Uu(t).format("MM/DD/YYYY"));
        });
    }
    return (
      bi(() => {
        !(function () {
          __async(this, null, function* () {
            try {
              t.value = !0;
              const i = new Lr(e.id).getCurrentUser();
              i &&
                ((n.value = yield i.userInfo()),
                void 0 !== n.value &&
                  null === n.value.user_metadata &&
                  (n.value.user_metadata = {}),
                a());
            } catch (s) {
              i.value = s;
            } finally {
              t.value = !1;
            }
          });
        })();
      }),
      {
        userInfo: n,
        loading: t,
        error: i,
        refreshDevices: function () {
          return __async(this, null, function* () {
            if (n.value)
              try {
                const i = new Lr(e.id).getCurrentUser();
                n.value.webauthn_devices = yield i.listDevices();
              } catch (a) {
                i.value = a;
              } finally {
                t.value = !1;
              }
          });
        },
        refreshMetadata: function () {
          return __async(this, null, function* () {
            var s;
            if (n.value)
              try {
                const i = new Lr(e.id).getCurrentUser();
                (n.value.user_metadata =
                  null != (s = yield i.getMetadata()) ? s : {}),
                  a();
              } catch (r) {
                i.value = r;
              } finally {
                t.value = !1;
              }
          });
        },
      }
    );
  }
  const qI = mi({
      name: "ProfileView",
      components: {
        UserInfo: _D,
        DevicesTable: WI,
        MetadataSection: mu(FI, [
          [
            "render",
            function (e, t, i, n, a, s) {
              var r;
              const o = Fi("user-metadata");
              return (
                Vn(),
                Jn(
                  Yn,
                  null,
                  [
                    ia("div", VI, [
                      ia("div", HI, X(e.t("personal-info")), 1),
                      e.userInfo && e.appInfo.profile_management
                        ? (Vn(),
                          Jn("div", ZI, [
                            e.isEditing
                              ? ra("", !0)
                              : (Vn(),
                                Jn(
                                  "div",
                                  {
                                    key: 0,
                                    class: "edit-save-text",
                                    onClick:
                                      t[0] ||
                                      (t[0] = hs(
                                        (t) => (e.isEditing = !0),
                                        ["prevent"]
                                      )),
                                  },
                                  X(e.t("edit")),
                                  1
                                )),
                            e.isEditing
                              ? (Vn(),
                                Jn(
                                  "div",
                                  {
                                    key: 1,
                                    class: "edit-save-text",
                                    onClick:
                                      t[1] ||
                                      (t[1] = hs(
                                        (...t) => e.save && e.save(...t),
                                        ["prevent"]
                                      )),
                                  },
                                  X(e.t("save")),
                                  1
                                ))
                              : ra("", !0),
                            e.isEditing
                              ? (Vn(),
                                Jn(
                                  "div",
                                  {
                                    key: 2,
                                    class: "edit-save-text",
                                    onClick:
                                      t[2] ||
                                      (t[2] = hs(
                                        (...t) => e.cancel && e.cancel(...t),
                                        ["prevent"]
                                      )),
                                  },
                                  X(e.t("cancel")),
                                  1
                                ))
                              : ra("", !0),
                          ]))
                        : ra("", !0),
                    ]),
                    ia(
                      "div",
                      {
                        class: Z([
                          "feedback",
                          e.updateMetadataError ? "feedback-danger" : "",
                        ]),
                      },
                      [
                        e.updateMetadataError
                          ? (Vn(), Jn("div", GI, X(e.updateMetadataError), 1))
                          : ra("", !0),
                      ],
                      2
                    ),
                    e.userInfo
                      ? (Vn(),
                        $n(
                          o,
                          {
                            key: 0,
                            appInfo: e.appInfo,
                            layoutType: e.LayoutType.Profile,
                            userMetadata:
                              null != (r = e.userInfo.user_metadata) ? r : {},
                            ref: "componentRef",
                            isEditing: e.isEditing,
                          },
                          null,
                          8,
                          ["appInfo", "layoutType", "userMetadata", "isEditing"]
                        ))
                      : (Vn(),
                        Jn("div", JI, [
                          ia("div", $I, X(e.t("no-user-found")), 1),
                          ia(
                            "div",
                            null,
                            X(e.t("there-is-no-currently-logged-in-user")),
                            1
                          ),
                        ])),
                  ],
                  64
                )
              );
            },
          ],
        ]),
        Loading: rI,
      },
      props: {
        appId: { type: String, required: !0 },
        appInfo: { type: Object, required: !0 },
        webauthnAllowed: { type: Boolean, required: !0 },
      },
      setup(e) {
        const {
          userInfo: t,
          loading: i,
          error: n,
          refreshDevices: a,
          refreshMetadata: s,
        } = KI(e.appInfo);
        return {
          userInfo: t,
          loading: i,
          error: n,
          refreshDevices: a,
          refreshMetadata: s,
          PassageErrorCode: $s,
        };
      },
    }),
    XI = { key: 1, class: "notification is-danger has-text-centered" },
    ey = { key: 3, class: "profile-divider" },
    ty = ia("div", { class: "profile-divider" }, null, -1);
  var iy = mu(qI, [
    [
      "render",
      function (e, t, i, n, a, s) {
        const r = Fi("loading"),
          o = Fi("user-info"),
          M = Fi("metadata-section"),
          l = Fi("devices-table");
        return (
          Vn(),
          Jn(
            Yn,
            null,
            [
              e.loading
                ? (Vn(),
                  $n(r, { key: 0, active: e.loading }, null, 8, ["active"]))
                : e.error &&
                  e.error.statusCode !== e.PassageErrorCode.PSGLoginRequired
                ? (Vn(),
                  Jn(
                    "div",
                    XI,
                    " Unable to get information about current user: " +
                      X(e.error.statusText),
                    1
                  ))
                : ra("", !0),
              e.loading
                ? ra("", !0)
                : (Vn(),
                  $n(
                    o,
                    {
                      key: 2,
                      appId: e.appId,
                      userInfo: e.userInfo,
                      appInfo: e.appInfo,
                    },
                    null,
                    8,
                    ["appId", "userInfo", "appInfo"]
                  )),
              e.appInfo.layouts.profile.length > 0
                ? (Vn(), Jn("div", ey))
                : ra("", !0),
              !e.loading && e.appInfo.layouts.profile.length > 0
                ? (Vn(),
                  $n(
                    M,
                    {
                      key: 4,
                      appInfo: e.appInfo,
                      userInfo: e.userInfo,
                      refreshMetadata: e.refreshMetadata,
                    },
                    null,
                    8,
                    ["appInfo", "userInfo", "refreshMetadata"]
                  ))
                : ra("", !0),
              ty,
              e.loading
                ? ra("", !0)
                : (Vn(),
                  $n(
                    l,
                    {
                      key: 5,
                      appId: e.appId,
                      userInfo: e.userInfo,
                      refreshDevices: e.refreshDevices,
                      webauthnAllowed: e.webauthnAllowed,
                    },
                    null,
                    8,
                    ["appId", "userInfo", "refreshDevices", "webauthnAllowed"]
                  )),
            ],
            64
          )
        );
      },
    ],
  ]);
  const ny = { key: 1, class: "notification is-danger has-text-centered" },
    ay = mi({
      __name: "MainView",
      props: { appId: {} },
      setup(e) {
        const t = e,
          { appInfo: i, loading: n, invalidAppId: a } = uD(t.appId),
          s = ht(!1),
          r = ht(!1);
        return (
          oi(i, () =>
            __async(this, null, function* () {
              if (((r.value = !1), void 0 === i.value)) return;
              const e = new Lr(t.appId);
              e.checkWebauthnConfig(i.value) &&
                (s.value = (yield e.getCredentialAvailable()).platform),
                (r.value = !0);
            })
          ),
          (e, t) => (
            Vn(),
            Jn(
              Yn,
              null,
              [
                xt(n) || !r.value
                  ? (Vn(),
                    $n(rI, { key: 0, active: xt(n) || !r.value }, null, 8, [
                      "active",
                    ]))
                  : xt(a)
                  ? (Vn(),
                    Jn("div", ny, " Passage-Profile Error: Invalid App ID. "))
                  : ra("", !0),
                xt(i) && r.value
                  ? (Vn(),
                    $n(
                      iy,
                      {
                        key: 2,
                        appId: e.appId,
                        appInfo: xt(i),
                        webauthnAllowed: s.value,
                      },
                      null,
                      8,
                      ["appId", "appInfo", "webauthnAllowed"]
                    ))
                  : ra("", !0),
              ],
              64
            )
          )
        );
      },
    });
  function sy(e) {
    function t() {
      const { updateDefaultCountryCode: t } = gc();
      t(e.defaultCountryCode);
    }
    t(),
      Ci(() => {
        t();
      });
    const { languageLoading: i } = DD(e),
      n = ht();
    return ND(n), { languageLoading: i, containerRef: n };
  }
  pD(
    mi({
      __name: "Profile.ce",
      props: { appId: {}, lang: {}, defaultCountryCode: {} },
      setup(e) {
        const t = e,
          { languageLoading: i, containerRef: n } = sy(t);
        return (e, t) => {
          var a;
          return gi(
            (Vn(),
            Jn(
              "div",
              {
                id: "passage-profile-container",
                ref_key: "containerRef",
                ref: n,
              },
              [
                (Vn(),
                $n(
                  ay,
                  { key: e.appId, appId: null != (a = e.appId) ? a : "" },
                  null,
                  8,
                  ["appId"]
                )),
              ],
              512
            )),
            [[xs, !xt(i)]]
          );
        };
      },
    }),
    "profile"
  );
  const ry = mi({
      __name: "PasskeyTableView",
      props: { appId: {}, appInfo: {}, webauthnAllowed: { type: Boolean } },
      setup(e) {
        const t = e,
          { userInfo: i, loading: n, refreshDevices: a } = KI(t.appInfo);
        return (e, t) =>
          xt(n)
            ? ra("", !0)
            : (Vn(),
              $n(
                WI,
                {
                  key: 0,
                  appId: e.appId,
                  userInfo: xt(i),
                  refreshDevices: xt(a),
                  webauthnAllowed: e.webauthnAllowed,
                },
                null,
                8,
                ["appId", "userInfo", "refreshDevices", "webauthnAllowed"]
              ));
      },
    }),
    oy = { key: 1, class: "notification is-danger has-text-centered" },
    My = mi({
      __name: "MainView",
      props: { appId: {} },
      setup(e) {
        const t = e,
          { appInfo: i, loading: n, invalidAppId: a } = uD(t.appId),
          s = ht(!1),
          r = ht(!1);
        return (
          oi(i, () =>
            __async(this, null, function* () {
              if (((r.value = !1), void 0 === i.value)) return;
              const e = new Lr(t.appId);
              e.checkWebauthnConfig(i.value) &&
                (s.value = (yield e.getCredentialAvailable()).platform),
                (r.value = !0);
            })
          ),
          (e, t) => (
            Vn(),
            Jn(
              Yn,
              null,
              [
                xt(n) || !r.value
                  ? (Vn(),
                    $n(rI, { key: 0, active: xt(n) || !r.value }, null, 8, [
                      "active",
                    ]))
                  : xt(a)
                  ? (Vn(),
                    Jn("div", oy, " Passage-Profile Error: Invalid App ID. "))
                  : ra("", !0),
                xt(i) && r.value
                  ? (Vn(),
                    $n(
                      ry,
                      {
                        key: 2,
                        appId: e.appId,
                        appInfo: xt(i),
                        webauthnAllowed: s.value,
                      },
                      null,
                      8,
                      ["appId", "appInfo", "webauthnAllowed"]
                    ))
                  : ra("", !0),
              ],
              64
            )
          )
        );
      },
    });
  pD(
    mi({
      __name: "PasskeyTable.ce",
      props: { appId: {}, lang: {}, defaultCountryCode: {} },
      setup(e) {
        const t = e,
          { languageLoading: i, containerRef: n } = sy(t);
        return (e, t) => {
          var a;
          return gi(
            (Vn(),
            Jn(
              "div",
              {
                id: "passage-profile-container",
                ref_key: "containerRef",
                ref: n,
              },
              [
                (Vn(),
                $n(
                  My,
                  { key: e.appId, appId: null != (a = e.appId) ? a : "" },
                  null,
                  8,
                  ["appId"]
                )),
              ],
              512
            )),
            [[xs, !xt(i)]]
          );
        };
      },
    }),
    "passkey-table"
  );
  
  class ly extends ar {
    constructor(e) {
      super(), (this.externalToken = e);
    }
    getAuthToken() {
      return Promise.resolve(this.externalToken);
    }
  }
  (e = new WeakMap()),
    (t = new WeakMap()),
    (window.Passage = {
      PassageUser: class {
        constructor(i) {
          let n, a;
          __privateAdd(this, e, void 0),
            __privateAdd(this, t, void 0),
            void 0 !== i
              ? ((n = i), (a = new ly(n)))
              : (n = localStorage.getItem("psg_auth_token"));
          const s = this._getAppId(n),
            r = new Lr(s, { tokenStore: a });
          __privateSet(this, e, r.getCurrentUser()),
            __privateSet(this, t, r.getCurrentSession());
        }
        _getAppId(e) {
          const t = new Js("No Passsage authToken found", {
            status: $s.PSGLoginRequired,
            statusText: "Login required",
          });
          if (null === e) throw t;
          const i = Vs(e);
          if (
            void 0 !== i &&
            void 0 !== i.aud &&
            Array.isArray(i.aud) &&
            void 0 !== i.aud[1]
          )
            return i.aud[1];
          if (void 0 !== i && void 0 !== i.iss) {
            const e = i.iss.split("/");
            return e[e.length - 1];
          }
          throw t;
        }
        authGuard() {
          return __privateGet(this, t).authGuard();
        }
        userInfo() {
          return __async(this, null, function* () {
            return __privateGet(this, e).userInfo();
          });
        }
        signOut() {
          return __async(this, null, function* () {
            return __privateGet(this, t).signOut();
          });
        }
        getAuthToken() {
          return __async(this, null, function* () {
            return __privateGet(this, t).getAuthToken();
          });
        }
        refresh() {
          return __async(this, null, function* () {
            return (yield __privateGet(this, t).refresh()).auth_token;
          });
        }
      },
    });
});
