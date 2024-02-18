(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function im(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Cf = { exports: {} },
  Co = {},
  kf = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qr = Symbol.for("react.element"),
  om = Symbol.for("react.portal"),
  sm = Symbol.for("react.fragment"),
  lm = Symbol.for("react.strict_mode"),
  am = Symbol.for("react.profiler"),
  um = Symbol.for("react.provider"),
  cm = Symbol.for("react.context"),
  fm = Symbol.for("react.forward_ref"),
  dm = Symbol.for("react.suspense"),
  pm = Symbol.for("react.memo"),
  hm = Symbol.for("react.lazy"),
  ou = Symbol.iterator;
function mm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ou && e[ou]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Pf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Tf = Object.assign,
  Ef = {};
function qn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ef),
    (this.updater = n || Pf);
}
qn.prototype.isReactComponent = {};
qn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
qn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Lf() {}
Lf.prototype = qn.prototype;
function Bl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ef),
    (this.updater = n || Pf);
}
var Ul = (Bl.prototype = new Lf());
Ul.constructor = Bl;
Tf(Ul, qn.prototype);
Ul.isPureReactComponent = !0;
var su = Array.isArray,
  Af = Object.prototype.hasOwnProperty,
  Hl = { current: null },
  Mf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vf(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Af.call(t, r) && !Mf.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: qr,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Hl.current,
  };
}
function gm(e, t) {
  return {
    $$typeof: qr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Wl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === qr;
}
function ym(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var lu = /\/+/g;
function Ko(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ym("" + e.key)
    : t.toString(36);
}
function Mi(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case qr:
          case om:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Ko(s, 0) : r),
      su(i)
        ? ((n = ""),
          e != null && (n = e.replace(lu, "$&/") + "/"),
          Mi(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Wl(i) &&
            (i = gm(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(lu, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), su(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + Ko(o, l);
      s += Mi(o, t, n, a, i);
    }
  else if (((a = mm(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Ko(o, l++)), (s += Mi(o, t, n, a, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function ai(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Mi(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function vm(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var xe = { current: null },
  Vi = { transition: null },
  xm = {
    ReactCurrentDispatcher: xe,
    ReactCurrentBatchConfig: Vi,
    ReactCurrentOwner: Hl,
  };
I.Children = {
  map: ai,
  forEach: function (e, t, n) {
    ai(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ai(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ai(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Wl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
I.Component = qn;
I.Fragment = sm;
I.Profiler = am;
I.PureComponent = Bl;
I.StrictMode = lm;
I.Suspense = dm;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xm;
I.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Tf({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Hl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Af.call(t, a) &&
        !Mf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: qr, type: e.type, key: i, ref: o, props: r, _owner: s };
};
I.createContext = function (e) {
  return (
    (e = {
      $$typeof: cm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: um, _context: e }),
    (e.Consumer = e)
  );
};
I.createElement = Vf;
I.createFactory = function (e) {
  var t = Vf.bind(null, e);
  return (t.type = e), t;
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: fm, render: e };
};
I.isValidElement = Wl;
I.lazy = function (e) {
  return { $$typeof: hm, _payload: { _status: -1, _result: e }, _init: vm };
};
I.memo = function (e, t) {
  return { $$typeof: pm, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
  var t = Vi.transition;
  Vi.transition = {};
  try {
    e();
  } finally {
    Vi.transition = t;
  }
};
I.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
I.useCallback = function (e, t) {
  return xe.current.useCallback(e, t);
};
I.useContext = function (e) {
  return xe.current.useContext(e);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (e) {
  return xe.current.useDeferredValue(e);
};
I.useEffect = function (e, t) {
  return xe.current.useEffect(e, t);
};
I.useId = function () {
  return xe.current.useId();
};
I.useImperativeHandle = function (e, t, n) {
  return xe.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function (e, t) {
  return xe.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function (e, t) {
  return xe.current.useLayoutEffect(e, t);
};
I.useMemo = function (e, t) {
  return xe.current.useMemo(e, t);
};
I.useReducer = function (e, t, n) {
  return xe.current.useReducer(e, t, n);
};
I.useRef = function (e) {
  return xe.current.useRef(e);
};
I.useState = function (e) {
  return xe.current.useState(e);
};
I.useSyncExternalStore = function (e, t, n) {
  return xe.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function () {
  return xe.current.useTransition();
};
I.version = "18.2.0";
kf.exports = I;
var S = kf.exports;
const Ql = im(S);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wm = S,
  Sm = Symbol.for("react.element"),
  Cm = Symbol.for("react.fragment"),
  km = Object.prototype.hasOwnProperty,
  Pm = wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Tm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rf(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) km.call(t, r) && !Tm.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Sm,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Pm.current,
  };
}
Co.Fragment = Cm;
Co.jsx = Rf;
Co.jsxs = Rf;
Cf.exports = Co;
var T = Cf.exports,
  js = {},
  Df = { exports: {} },
  je = {},
  Nf = { exports: {} },
  jf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(A, j) {
    var F = A.length;
    A.push(j);
    e: for (; 0 < F; ) {
      var N = (F - 1) >>> 1,
        W = A[N];
      if (0 < i(W, j)) (A[N] = j), (A[F] = W), (F = N);
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0) return null;
    var j = A[0],
      F = A.pop();
    if (F !== j) {
      A[0] = F;
      e: for (var N = 0, W = A.length, $t = W >>> 1; N < $t; ) {
        var qe = 2 * (N + 1) - 1,
          vn = A[qe],
          Ae = qe + 1,
          Kt = A[Ae];
        if (0 > i(vn, F))
          Ae < W && 0 > i(Kt, vn)
            ? ((A[N] = Kt), (A[Ae] = F), (N = Ae))
            : ((A[N] = vn), (A[qe] = F), (N = qe));
        else if (Ae < W && 0 > i(Kt, F)) (A[N] = Kt), (A[Ae] = F), (N = Ae);
        else break e;
      }
    }
    return j;
  }
  function i(A, j) {
    var F = A.sortIndex - j.sortIndex;
    return F !== 0 ? F : A.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    h = !1,
    y = !1,
    v = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(A) {
    for (var j = n(u); j !== null; ) {
      if (j.callback === null) r(u);
      else if (j.startTime <= A)
        r(u), (j.sortIndex = j.expirationTime), t(a, j);
      else break;
      j = n(u);
    }
  }
  function x(A) {
    if (((v = !1), m(A), !y))
      if (n(a) !== null) (y = !0), Ie(w);
      else {
        var j = n(u);
        j !== null && Je(x, j.startTime - A);
      }
  }
  function w(A, j) {
    (y = !1), v && ((v = !1), g(k), (k = -1)), (h = !0);
    var F = d;
    try {
      for (
        m(j), f = n(a);
        f !== null && (!(f.expirationTime > j) || (A && !J()));

      ) {
        var N = f.callback;
        if (typeof N == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var W = N(f.expirationTime <= j);
          (j = e.unstable_now()),
            typeof W == "function" ? (f.callback = W) : f === n(a) && r(a),
            m(j);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var $t = !0;
      else {
        var qe = n(u);
        qe !== null && Je(x, qe.startTime - j), ($t = !1);
      }
      return $t;
    } finally {
      (f = null), (d = F), (h = !1);
    }
  }
  var L = !1,
    P = null,
    k = -1,
    R = 5,
    D = -1;
  function J() {
    return !(e.unstable_now() - D < R);
  }
  function Se() {
    if (P !== null) {
      var A = e.unstable_now();
      D = A;
      var j = !0;
      try {
        j = P(!0, A);
      } finally {
        j ? Ce() : ((L = !1), (P = null));
      }
    } else L = !1;
  }
  var Ce;
  if (typeof p == "function")
    Ce = function () {
      p(Se);
    };
  else if (typeof MessageChannel < "u") {
    var q = new MessageChannel(),
      b = q.port2;
    (q.port1.onmessage = Se),
      (Ce = function () {
        b.postMessage(null);
      });
  } else
    Ce = function () {
      E(Se, 0);
    };
  function Ie(A) {
    (P = A), L || ((L = !0), Ce());
  }
  function Je(A, j) {
    k = E(function () {
      A(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (A) {
      A.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || h || ((y = !0), Ie(w));
    }),
    (e.unstable_forceFrameRate = function (A) {
      0 > A || 125 < A
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (R = 0 < A ? Math.floor(1e3 / A) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (A) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = d;
      }
      var F = d;
      d = j;
      try {
        return A();
      } finally {
        d = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (A, j) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var F = d;
      d = A;
      try {
        return j();
      } finally {
        d = F;
      }
    }),
    (e.unstable_scheduleCallback = function (A, j, F) {
      var N = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? N + F : N))
          : (F = N),
        A)
      ) {
        case 1:
          var W = -1;
          break;
        case 2:
          W = 250;
          break;
        case 5:
          W = 1073741823;
          break;
        case 4:
          W = 1e4;
          break;
        default:
          W = 5e3;
      }
      return (
        (W = F + W),
        (A = {
          id: c++,
          callback: j,
          priorityLevel: A,
          startTime: F,
          expirationTime: W,
          sortIndex: -1,
        }),
        F > N
          ? ((A.sortIndex = F),
            t(u, A),
            n(a) === null &&
              A === n(u) &&
              (v ? (g(k), (k = -1)) : (v = !0), Je(x, F - N)))
          : ((A.sortIndex = W), t(a, A), y || h || ((y = !0), Ie(w))),
        A
      );
    }),
    (e.unstable_shouldYield = J),
    (e.unstable_wrapCallback = function (A) {
      var j = d;
      return function () {
        var F = d;
        d = j;
        try {
          return A.apply(this, arguments);
        } finally {
          d = F;
        }
      };
    });
})(jf);
Nf.exports = jf;
var Em = Nf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ff = S,
  De = Em;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var If = new Set(),
  Dr = {};
function hn(e, t) {
  Qn(e, t), Qn(e + "Capture", t);
}
function Qn(e, t) {
  for (Dr[e] = t, e = 0; e < t.length; e++) If.add(t[e]);
}
var mt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Fs = Object.prototype.hasOwnProperty,
  Lm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  au = {},
  uu = {};
function Am(e) {
  return Fs.call(uu, e)
    ? !0
    : Fs.call(au, e)
    ? !1
    : Lm.test(e)
    ? (uu[e] = !0)
    : ((au[e] = !0), !1);
}
function Mm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Vm(e, t, n, r) {
  if (t === null || typeof t > "u" || Mm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function we(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ce[e] = new we(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ce[t] = new we(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ce[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ce[e] = new we(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ce[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ce[e] = new we(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ce[e] = new we(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ce[e] = new we(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ce[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yl = /[\-:]([a-z])/g;
function Gl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yl, Gl);
    ce[t] = new we(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yl, Gl);
    ce[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Yl, Gl);
  ce[t] = new we(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ce[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new we(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ce[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function $l(e, t, n, r) {
  var i = ce.hasOwnProperty(t) ? ce[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Vm(t, n, i, r) && (n = null),
    r || i === null
      ? Am(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var xt = Ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ui = Symbol.for("react.element"),
  Cn = Symbol.for("react.portal"),
  kn = Symbol.for("react.fragment"),
  Kl = Symbol.for("react.strict_mode"),
  Is = Symbol.for("react.profiler"),
  Of = Symbol.for("react.provider"),
  zf = Symbol.for("react.context"),
  Xl = Symbol.for("react.forward_ref"),
  Os = Symbol.for("react.suspense"),
  zs = Symbol.for("react.suspense_list"),
  Zl = Symbol.for("react.memo"),
  Ct = Symbol.for("react.lazy"),
  _f = Symbol.for("react.offscreen"),
  cu = Symbol.iterator;
function nr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (cu && e[cu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var K = Object.assign,
  Xo;
function dr(e) {
  if (Xo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Xo = (t && t[1]) || "";
    }
  return (
    `
` +
    Xo +
    e
  );
}
var Zo = !1;
function Jo(e, t) {
  if (!e || Zo) return "";
  Zo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var a =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (Zo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? dr(e) : "";
}
function Rm(e) {
  switch (e.tag) {
    case 5:
      return dr(e.type);
    case 16:
      return dr("Lazy");
    case 13:
      return dr("Suspense");
    case 19:
      return dr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Jo(e.type, !1)), e;
    case 11:
      return (e = Jo(e.type.render, !1)), e;
    case 1:
      return (e = Jo(e.type, !0)), e;
    default:
      return "";
  }
}
function _s(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case kn:
      return "Fragment";
    case Cn:
      return "Portal";
    case Is:
      return "Profiler";
    case Kl:
      return "StrictMode";
    case Os:
      return "Suspense";
    case zs:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case zf:
        return (e.displayName || "Context") + ".Consumer";
      case Of:
        return (e._context.displayName || "Context") + ".Provider";
      case Xl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Zl:
        return (
          (t = e.displayName || null), t !== null ? t : _s(e.type) || "Memo"
        );
      case Ct:
        (t = e._payload), (e = e._init);
        try {
          return _s(e(t));
        } catch {}
    }
  return null;
}
function Dm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return _s(t);
    case 8:
      return t === Kl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function _t(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Bf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Nm(e) {
  var t = Bf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ci(e) {
  e._valueTracker || (e._valueTracker = Nm(e));
}
function Uf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Bf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Wi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Bs(e, t) {
  var n = t.checked;
  return K({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function fu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = _t(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Hf(e, t) {
  (t = t.checked), t != null && $l(e, "checked", t, !1);
}
function Us(e, t) {
  Hf(e, t);
  var n = _t(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Hs(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Hs(e, t.type, _t(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function du(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Hs(e, t, n) {
  (t !== "number" || Wi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var pr = Array.isArray;
function zn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + _t(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ws(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return K({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function pu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (pr(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: _t(n) };
}
function Wf(e, t) {
  var n = _t(t.value),
    r = _t(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function hu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Qf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Qs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Qf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var fi,
  Yf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        fi = fi || document.createElement("div"),
          fi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = fi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Nr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var yr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  jm = ["Webkit", "ms", "Moz", "O"];
Object.keys(yr).forEach(function (e) {
  jm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (yr[t] = yr[e]);
  });
});
function Gf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (yr.hasOwnProperty(e) && yr[e])
    ? ("" + t).trim()
    : t + "px";
}
function $f(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Gf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Fm = K(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ys(e, t) {
  if (t) {
    if (Fm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function Gs(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var $s = null;
function Jl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ks = null,
  _n = null,
  Bn = null;
function mu(e) {
  if ((e = ti(e))) {
    if (typeof Ks != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = Lo(t)), Ks(e.stateNode, e.type, t));
  }
}
function Kf(e) {
  _n ? (Bn ? Bn.push(e) : (Bn = [e])) : (_n = e);
}
function Xf() {
  if (_n) {
    var e = _n,
      t = Bn;
    if (((Bn = _n = null), mu(e), t)) for (e = 0; e < t.length; e++) mu(t[e]);
  }
}
function Zf(e, t) {
  return e(t);
}
function Jf() {}
var qo = !1;
function qf(e, t, n) {
  if (qo) return e(t, n);
  qo = !0;
  try {
    return Zf(e, t, n);
  } finally {
    (qo = !1), (_n !== null || Bn !== null) && (Jf(), Xf());
  }
}
function jr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Lo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var Xs = !1;
if (mt)
  try {
    var rr = {};
    Object.defineProperty(rr, "passive", {
      get: function () {
        Xs = !0;
      },
    }),
      window.addEventListener("test", rr, rr),
      window.removeEventListener("test", rr, rr);
  } catch {
    Xs = !1;
  }
function Im(e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var vr = !1,
  Qi = null,
  Yi = !1,
  Zs = null,
  Om = {
    onError: function (e) {
      (vr = !0), (Qi = e);
    },
  };
function zm(e, t, n, r, i, o, s, l, a) {
  (vr = !1), (Qi = null), Im.apply(Om, arguments);
}
function _m(e, t, n, r, i, o, s, l, a) {
  if ((zm.apply(this, arguments), vr)) {
    if (vr) {
      var u = Qi;
      (vr = !1), (Qi = null);
    } else throw Error(C(198));
    Yi || ((Yi = !0), (Zs = u));
  }
}
function mn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function bf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function gu(e) {
  if (mn(e) !== e) throw Error(C(188));
}
function Bm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = mn(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return gu(i), e;
        if (o === r) return gu(i), t;
        o = o.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function ed(e) {
  return (e = Bm(e)), e !== null ? td(e) : null;
}
function td(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = td(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var nd = De.unstable_scheduleCallback,
  yu = De.unstable_cancelCallback,
  Um = De.unstable_shouldYield,
  Hm = De.unstable_requestPaint,
  ee = De.unstable_now,
  Wm = De.unstable_getCurrentPriorityLevel,
  ql = De.unstable_ImmediatePriority,
  rd = De.unstable_UserBlockingPriority,
  Gi = De.unstable_NormalPriority,
  Qm = De.unstable_LowPriority,
  id = De.unstable_IdlePriority,
  ko = null,
  rt = null;
function Ym(e) {
  if (rt && typeof rt.onCommitFiberRoot == "function")
    try {
      rt.onCommitFiberRoot(ko, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ke = Math.clz32 ? Math.clz32 : Km,
  Gm = Math.log,
  $m = Math.LN2;
function Km(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Gm(e) / $m) | 0)) | 0;
}
var di = 64,
  pi = 4194304;
function hr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function $i(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = hr(l)) : ((o &= s), o !== 0 && (r = hr(o)));
  } else (s = n & ~i), s !== 0 ? (r = hr(s)) : o !== 0 && (r = hr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ke(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Xm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Zm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Ke(o),
      l = 1 << s,
      a = i[s];
    a === -1
      ? (!(l & n) || l & r) && (i[s] = Xm(l, t))
      : a <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function Js(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function od() {
  var e = di;
  return (di <<= 1), !(di & 4194240) && (di = 64), e;
}
function bo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function br(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ke(t)),
    (e[t] = n);
}
function Jm(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ke(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function bl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ke(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var z = 0;
function sd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ld,
  ea,
  ad,
  ud,
  cd,
  qs = !1,
  hi = [],
  Mt = null,
  Vt = null,
  Rt = null,
  Fr = new Map(),
  Ir = new Map(),
  Tt = [],
  qm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function vu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Mt = null;
      break;
    case "dragenter":
    case "dragleave":
      Vt = null;
      break;
    case "mouseover":
    case "mouseout":
      Rt = null;
      break;
    case "pointerover":
    case "pointerout":
      Fr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ir.delete(t.pointerId);
  }
}
function ir(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = ti(t)), t !== null && ea(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function bm(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Mt = ir(Mt, e, t, n, r, i)), !0;
    case "dragenter":
      return (Vt = ir(Vt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Rt = ir(Rt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Fr.set(o, ir(Fr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Ir.set(o, ir(Ir.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function fd(e) {
  var t = tn(e.target);
  if (t !== null) {
    var n = mn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = bf(n)), t !== null)) {
          (e.blockedOn = t),
            cd(e.priority, function () {
              ad(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ri(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = bs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ($s = r), n.target.dispatchEvent(r), ($s = null);
    } else return (t = ti(n)), t !== null && ea(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function xu(e, t, n) {
  Ri(e) && n.delete(t);
}
function e0() {
  (qs = !1),
    Mt !== null && Ri(Mt) && (Mt = null),
    Vt !== null && Ri(Vt) && (Vt = null),
    Rt !== null && Ri(Rt) && (Rt = null),
    Fr.forEach(xu),
    Ir.forEach(xu);
}
function or(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    qs ||
      ((qs = !0),
      De.unstable_scheduleCallback(De.unstable_NormalPriority, e0)));
}
function Or(e) {
  function t(i) {
    return or(i, e);
  }
  if (0 < hi.length) {
    or(hi[0], e);
    for (var n = 1; n < hi.length; n++) {
      var r = hi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Mt !== null && or(Mt, e),
      Vt !== null && or(Vt, e),
      Rt !== null && or(Rt, e),
      Fr.forEach(t),
      Ir.forEach(t),
      n = 0;
    n < Tt.length;
    n++
  )
    (r = Tt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Tt.length && ((n = Tt[0]), n.blockedOn === null); )
    fd(n), n.blockedOn === null && Tt.shift();
}
var Un = xt.ReactCurrentBatchConfig,
  Ki = !0;
function t0(e, t, n, r) {
  var i = z,
    o = Un.transition;
  Un.transition = null;
  try {
    (z = 1), ta(e, t, n, r);
  } finally {
    (z = i), (Un.transition = o);
  }
}
function n0(e, t, n, r) {
  var i = z,
    o = Un.transition;
  Un.transition = null;
  try {
    (z = 4), ta(e, t, n, r);
  } finally {
    (z = i), (Un.transition = o);
  }
}
function ta(e, t, n, r) {
  if (Ki) {
    var i = bs(e, t, n, r);
    if (i === null) us(e, t, r, Xi, n), vu(e, r);
    else if (bm(i, e, t, n, r)) r.stopPropagation();
    else if ((vu(e, r), t & 4 && -1 < qm.indexOf(e))) {
      for (; i !== null; ) {
        var o = ti(i);
        if (
          (o !== null && ld(o),
          (o = bs(e, t, n, r)),
          o === null && us(e, t, r, Xi, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else us(e, t, r, null, n);
  }
}
var Xi = null;
function bs(e, t, n, r) {
  if (((Xi = null), (e = Jl(r)), (e = tn(e)), e !== null))
    if (((t = mn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = bf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Xi = e), null;
}
function dd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Wm()) {
        case ql:
          return 1;
        case rd:
          return 4;
        case Gi:
        case Qm:
          return 16;
        case id:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Lt = null,
  na = null,
  Di = null;
function pd() {
  if (Di) return Di;
  var e,
    t = na,
    n = t.length,
    r,
    i = "value" in Lt ? Lt.value : Lt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Di = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ni(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function mi() {
  return !0;
}
function wu() {
  return !1;
}
function Fe(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? mi
        : wu),
      (this.isPropagationStopped = wu),
      this
    );
  }
  return (
    K(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = mi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = mi));
      },
      persist: function () {},
      isPersistent: mi,
    }),
    t
  );
}
var bn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ra = Fe(bn),
  ei = K({}, bn, { view: 0, detail: 0 }),
  r0 = Fe(ei),
  es,
  ts,
  sr,
  Po = K({}, ei, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ia,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== sr &&
            (sr && e.type === "mousemove"
              ? ((es = e.screenX - sr.screenX), (ts = e.screenY - sr.screenY))
              : (ts = es = 0),
            (sr = e)),
          es);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ts;
    },
  }),
  Su = Fe(Po),
  i0 = K({}, Po, { dataTransfer: 0 }),
  o0 = Fe(i0),
  s0 = K({}, ei, { relatedTarget: 0 }),
  ns = Fe(s0),
  l0 = K({}, bn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  a0 = Fe(l0),
  u0 = K({}, bn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  c0 = Fe(u0),
  f0 = K({}, bn, { data: 0 }),
  Cu = Fe(f0),
  d0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  p0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  h0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function m0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = h0[e]) ? !!t[e] : !1;
}
function ia() {
  return m0;
}
var g0 = K({}, ei, {
    key: function (e) {
      if (e.key) {
        var t = d0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ni(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? p0[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ia,
    charCode: function (e) {
      return e.type === "keypress" ? Ni(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ni(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  y0 = Fe(g0),
  v0 = K({}, Po, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ku = Fe(v0),
  x0 = K({}, ei, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ia,
  }),
  w0 = Fe(x0),
  S0 = K({}, bn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  C0 = Fe(S0),
  k0 = K({}, Po, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  P0 = Fe(k0),
  T0 = [9, 13, 27, 32],
  oa = mt && "CompositionEvent" in window,
  xr = null;
mt && "documentMode" in document && (xr = document.documentMode);
var E0 = mt && "TextEvent" in window && !xr,
  hd = mt && (!oa || (xr && 8 < xr && 11 >= xr)),
  Pu = String.fromCharCode(32),
  Tu = !1;
function md(e, t) {
  switch (e) {
    case "keyup":
      return T0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function gd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Pn = !1;
function L0(e, t) {
  switch (e) {
    case "compositionend":
      return gd(t);
    case "keypress":
      return t.which !== 32 ? null : ((Tu = !0), Pu);
    case "textInput":
      return (e = t.data), e === Pu && Tu ? null : e;
    default:
      return null;
  }
}
function A0(e, t) {
  if (Pn)
    return e === "compositionend" || (!oa && md(e, t))
      ? ((e = pd()), (Di = na = Lt = null), (Pn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return hd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var M0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Eu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!M0[e.type] : t === "textarea";
}
function yd(e, t, n, r) {
  Kf(r),
    (t = Zi(t, "onChange")),
    0 < t.length &&
      ((n = new ra("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var wr = null,
  zr = null;
function V0(e) {
  Ad(e, 0);
}
function To(e) {
  var t = Ln(e);
  if (Uf(t)) return e;
}
function R0(e, t) {
  if (e === "change") return t;
}
var vd = !1;
if (mt) {
  var rs;
  if (mt) {
    var is = "oninput" in document;
    if (!is) {
      var Lu = document.createElement("div");
      Lu.setAttribute("oninput", "return;"),
        (is = typeof Lu.oninput == "function");
    }
    rs = is;
  } else rs = !1;
  vd = rs && (!document.documentMode || 9 < document.documentMode);
}
function Au() {
  wr && (wr.detachEvent("onpropertychange", xd), (zr = wr = null));
}
function xd(e) {
  if (e.propertyName === "value" && To(zr)) {
    var t = [];
    yd(t, zr, e, Jl(e)), qf(V0, t);
  }
}
function D0(e, t, n) {
  e === "focusin"
    ? (Au(), (wr = t), (zr = n), wr.attachEvent("onpropertychange", xd))
    : e === "focusout" && Au();
}
function N0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return To(zr);
}
function j0(e, t) {
  if (e === "click") return To(t);
}
function F0(e, t) {
  if (e === "input" || e === "change") return To(t);
}
function I0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ze = typeof Object.is == "function" ? Object.is : I0;
function _r(e, t) {
  if (Ze(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Fs.call(t, i) || !Ze(e[i], t[i])) return !1;
  }
  return !0;
}
function Mu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Vu(e, t) {
  var n = Mu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Mu(n);
  }
}
function wd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? wd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Sd() {
  for (var e = window, t = Wi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Wi(e.document);
  }
  return t;
}
function sa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function O0(e) {
  var t = Sd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    wd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && sa(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Vu(n, o));
        var s = Vu(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var z0 = mt && "documentMode" in document && 11 >= document.documentMode,
  Tn = null,
  el = null,
  Sr = null,
  tl = !1;
function Ru(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  tl ||
    Tn == null ||
    Tn !== Wi(r) ||
    ((r = Tn),
    "selectionStart" in r && sa(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Sr && _r(Sr, r)) ||
      ((Sr = r),
      (r = Zi(el, "onSelect")),
      0 < r.length &&
        ((t = new ra("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Tn))));
}
function gi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var En = {
    animationend: gi("Animation", "AnimationEnd"),
    animationiteration: gi("Animation", "AnimationIteration"),
    animationstart: gi("Animation", "AnimationStart"),
    transitionend: gi("Transition", "TransitionEnd"),
  },
  os = {},
  Cd = {};
mt &&
  ((Cd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete En.animationend.animation,
    delete En.animationiteration.animation,
    delete En.animationstart.animation),
  "TransitionEvent" in window || delete En.transitionend.transition);
function Eo(e) {
  if (os[e]) return os[e];
  if (!En[e]) return e;
  var t = En[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Cd) return (os[e] = t[n]);
  return e;
}
var kd = Eo("animationend"),
  Pd = Eo("animationiteration"),
  Td = Eo("animationstart"),
  Ed = Eo("transitionend"),
  Ld = new Map(),
  Du =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Wt(e, t) {
  Ld.set(e, t), hn(t, [e]);
}
for (var ss = 0; ss < Du.length; ss++) {
  var ls = Du[ss],
    _0 = ls.toLowerCase(),
    B0 = ls[0].toUpperCase() + ls.slice(1);
  Wt(_0, "on" + B0);
}
Wt(kd, "onAnimationEnd");
Wt(Pd, "onAnimationIteration");
Wt(Td, "onAnimationStart");
Wt("dblclick", "onDoubleClick");
Wt("focusin", "onFocus");
Wt("focusout", "onBlur");
Wt(Ed, "onTransitionEnd");
Qn("onMouseEnter", ["mouseout", "mouseover"]);
Qn("onMouseLeave", ["mouseout", "mouseover"]);
Qn("onPointerEnter", ["pointerout", "pointerover"]);
Qn("onPointerLeave", ["pointerout", "pointerover"]);
hn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
hn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
hn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
hn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
hn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
hn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var mr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  U0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(mr));
function Nu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), _m(r, t, void 0, e), (e.currentTarget = null);
}
function Ad(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
          Nu(i, l, u), (o = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          Nu(i, l, u), (o = a);
        }
    }
  }
  if (Yi) throw ((e = Zs), (Yi = !1), (Zs = null), e);
}
function U(e, t) {
  var n = t[sl];
  n === void 0 && (n = t[sl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Md(t, e, 2, !1), n.add(r));
}
function as(e, t, n) {
  var r = 0;
  t && (r |= 4), Md(n, e, r, t);
}
var yi = "_reactListening" + Math.random().toString(36).slice(2);
function Br(e) {
  if (!e[yi]) {
    (e[yi] = !0),
      If.forEach(function (n) {
        n !== "selectionchange" && (U0.has(n) || as(n, !1, e), as(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[yi] || ((t[yi] = !0), as("selectionchange", !1, t));
  }
}
function Md(e, t, n, r) {
  switch (dd(t)) {
    case 1:
      var i = t0;
      break;
    case 4:
      i = n0;
      break;
    default:
      i = ta;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Xs ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function us(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = tn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  qf(function () {
    var u = o,
      c = Jl(n),
      f = [];
    e: {
      var d = Ld.get(e);
      if (d !== void 0) {
        var h = ra,
          y = e;
        switch (e) {
          case "keypress":
            if (Ni(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = y0;
            break;
          case "focusin":
            (y = "focus"), (h = ns);
            break;
          case "focusout":
            (y = "blur"), (h = ns);
            break;
          case "beforeblur":
          case "afterblur":
            h = ns;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Su;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = o0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = w0;
            break;
          case kd:
          case Pd:
          case Td:
            h = a0;
            break;
          case Ed:
            h = C0;
            break;
          case "scroll":
            h = r0;
            break;
          case "wheel":
            h = P0;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = c0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = ku;
        }
        var v = (t & 4) !== 0,
          E = !v && e === "scroll",
          g = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var p = u, m; p !== null; ) {
          m = p;
          var x = m.stateNode;
          if (
            (m.tag === 5 &&
              x !== null &&
              ((m = x),
              g !== null && ((x = jr(p, g)), x != null && v.push(Ur(p, x, m)))),
            E)
          )
            break;
          p = p.return;
        }
        0 < v.length &&
          ((d = new h(d, y, null, n, c)), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          d &&
            n !== $s &&
            (y = n.relatedTarget || n.fromElement) &&
            (tn(y) || y[gt]))
        )
          break e;
        if (
          (h || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          h
            ? ((y = n.relatedTarget || n.toElement),
              (h = u),
              (y = y ? tn(y) : null),
              y !== null &&
                ((E = mn(y)), y !== E || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((h = null), (y = u)),
          h !== y)
        ) {
          if (
            ((v = Su),
            (x = "onMouseLeave"),
            (g = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = ku),
              (x = "onPointerLeave"),
              (g = "onPointerEnter"),
              (p = "pointer")),
            (E = h == null ? d : Ln(h)),
            (m = y == null ? d : Ln(y)),
            (d = new v(x, p + "leave", h, n, c)),
            (d.target = E),
            (d.relatedTarget = m),
            (x = null),
            tn(c) === u &&
              ((v = new v(g, p + "enter", y, n, c)),
              (v.target = m),
              (v.relatedTarget = E),
              (x = v)),
            (E = x),
            h && y)
          )
            t: {
              for (v = h, g = y, p = 0, m = v; m; m = xn(m)) p++;
              for (m = 0, x = g; x; x = xn(x)) m++;
              for (; 0 < p - m; ) (v = xn(v)), p--;
              for (; 0 < m - p; ) (g = xn(g)), m--;
              for (; p--; ) {
                if (v === g || (g !== null && v === g.alternate)) break t;
                (v = xn(v)), (g = xn(g));
              }
              v = null;
            }
          else v = null;
          h !== null && ju(f, d, h, v, !1),
            y !== null && E !== null && ju(f, E, y, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? Ln(u) : window),
          (h = d.nodeName && d.nodeName.toLowerCase()),
          h === "select" || (h === "input" && d.type === "file"))
        )
          var w = R0;
        else if (Eu(d))
          if (vd) w = F0;
          else {
            w = N0;
            var L = D0;
          }
        else
          (h = d.nodeName) &&
            h.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (w = j0);
        if (w && (w = w(e, u))) {
          yd(f, w, n, c);
          break e;
        }
        L && L(e, d, u),
          e === "focusout" &&
            (L = d._wrapperState) &&
            L.controlled &&
            d.type === "number" &&
            Hs(d, "number", d.value);
      }
      switch (((L = u ? Ln(u) : window), e)) {
        case "focusin":
          (Eu(L) || L.contentEditable === "true") &&
            ((Tn = L), (el = u), (Sr = null));
          break;
        case "focusout":
          Sr = el = Tn = null;
          break;
        case "mousedown":
          tl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (tl = !1), Ru(f, n, c);
          break;
        case "selectionchange":
          if (z0) break;
        case "keydown":
        case "keyup":
          Ru(f, n, c);
      }
      var P;
      if (oa)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        Pn
          ? md(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (hd &&
          n.locale !== "ko" &&
          (Pn || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && Pn && (P = pd())
            : ((Lt = c),
              (na = "value" in Lt ? Lt.value : Lt.textContent),
              (Pn = !0))),
        (L = Zi(u, k)),
        0 < L.length &&
          ((k = new Cu(k, e, null, n, c)),
          f.push({ event: k, listeners: L }),
          P ? (k.data = P) : ((P = gd(n)), P !== null && (k.data = P)))),
        (P = E0 ? L0(e, n) : A0(e, n)) &&
          ((u = Zi(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Cu("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = P)));
    }
    Ad(f, t);
  });
}
function Ur(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Zi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = jr(e, n)),
      o != null && r.unshift(Ur(e, o, i)),
      (o = jr(e, t)),
      o != null && r.push(Ur(e, o, i))),
      (e = e.return);
  }
  return r;
}
function xn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ju(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = jr(n, o)), a != null && s.unshift(Ur(n, a, l)))
        : i || ((a = jr(n, o)), a != null && s.push(Ur(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var H0 = /\r\n?/g,
  W0 = /\u0000|\uFFFD/g;
function Fu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      H0,
      `
`
    )
    .replace(W0, "");
}
function vi(e, t, n) {
  if (((t = Fu(t)), Fu(e) !== t && n)) throw Error(C(425));
}
function Ji() {}
var nl = null,
  rl = null;
function il(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ol = typeof setTimeout == "function" ? setTimeout : void 0,
  Q0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Iu = typeof Promise == "function" ? Promise : void 0,
  Y0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Iu < "u"
      ? function (e) {
          return Iu.resolve(null).then(e).catch(G0);
        }
      : ol;
function G0(e) {
  setTimeout(function () {
    throw e;
  });
}
function cs(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Or(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Or(t);
}
function Dt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ou(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var er = Math.random().toString(36).slice(2),
  nt = "__reactFiber$" + er,
  Hr = "__reactProps$" + er,
  gt = "__reactContainer$" + er,
  sl = "__reactEvents$" + er,
  $0 = "__reactListeners$" + er,
  K0 = "__reactHandles$" + er;
function tn(e) {
  var t = e[nt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[gt] || n[nt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ou(e); e !== null; ) {
          if ((n = e[nt])) return n;
          e = Ou(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ti(e) {
  return (
    (e = e[nt] || e[gt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ln(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Lo(e) {
  return e[Hr] || null;
}
var ll = [],
  An = -1;
function Qt(e) {
  return { current: e };
}
function H(e) {
  0 > An || ((e.current = ll[An]), (ll[An] = null), An--);
}
function B(e, t) {
  An++, (ll[An] = e.current), (e.current = t);
}
var Bt = {},
  he = Qt(Bt),
  Te = Qt(!1),
  an = Bt;
function Yn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Bt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ee(e) {
  return (e = e.childContextTypes), e != null;
}
function qi() {
  H(Te), H(he);
}
function zu(e, t, n) {
  if (he.current !== Bt) throw Error(C(168));
  B(he, t), B(Te, n);
}
function Vd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(C(108, Dm(e) || "Unknown", i));
  return K({}, n, r);
}
function bi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Bt),
    (an = he.current),
    B(he, e),
    B(Te, Te.current),
    !0
  );
}
function _u(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = Vd(e, t, an)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      H(Te),
      H(he),
      B(he, e))
    : H(Te),
    B(Te, n);
}
var at = null,
  Ao = !1,
  fs = !1;
function Rd(e) {
  at === null ? (at = [e]) : at.push(e);
}
function X0(e) {
  (Ao = !0), Rd(e);
}
function Yt() {
  if (!fs && at !== null) {
    fs = !0;
    var e = 0,
      t = z;
    try {
      var n = at;
      for (z = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (at = null), (Ao = !1);
    } catch (i) {
      throw (at !== null && (at = at.slice(e + 1)), nd(ql, Yt), i);
    } finally {
      (z = t), (fs = !1);
    }
  }
  return null;
}
var Mn = [],
  Vn = 0,
  eo = null,
  to = 0,
  ze = [],
  _e = 0,
  un = null,
  ut = 1,
  ct = "";
function Jt(e, t) {
  (Mn[Vn++] = to), (Mn[Vn++] = eo), (eo = e), (to = t);
}
function Dd(e, t, n) {
  (ze[_e++] = ut), (ze[_e++] = ct), (ze[_e++] = un), (un = e);
  var r = ut;
  e = ct;
  var i = 32 - Ke(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Ke(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (ut = (1 << (32 - Ke(t) + i)) | (n << i) | r),
      (ct = o + e);
  } else (ut = (1 << o) | (n << i) | r), (ct = e);
}
function la(e) {
  e.return !== null && (Jt(e, 1), Dd(e, 1, 0));
}
function aa(e) {
  for (; e === eo; )
    (eo = Mn[--Vn]), (Mn[Vn] = null), (to = Mn[--Vn]), (Mn[Vn] = null);
  for (; e === un; )
    (un = ze[--_e]),
      (ze[_e] = null),
      (ct = ze[--_e]),
      (ze[_e] = null),
      (ut = ze[--_e]),
      (ze[_e] = null);
}
var Re = null,
  Ve = null,
  Q = !1,
  $e = null;
function Nd(e, t) {
  var n = Be(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Bu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Re = e), (Ve = Dt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Re = e), (Ve = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = un !== null ? { id: ut, overflow: ct } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Be(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Re = e),
            (Ve = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function al(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ul(e) {
  if (Q) {
    var t = Ve;
    if (t) {
      var n = t;
      if (!Bu(e, t)) {
        if (al(e)) throw Error(C(418));
        t = Dt(n.nextSibling);
        var r = Re;
        t && Bu(e, t)
          ? Nd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Q = !1), (Re = e));
      }
    } else {
      if (al(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (Q = !1), (Re = e);
    }
  }
}
function Uu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Re = e;
}
function xi(e) {
  if (e !== Re) return !1;
  if (!Q) return Uu(e), (Q = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !il(e.type, e.memoizedProps))),
    t && (t = Ve))
  ) {
    if (al(e)) throw (jd(), Error(C(418)));
    for (; t; ) Nd(e, t), (t = Dt(t.nextSibling));
  }
  if ((Uu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ve = Dt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ve = null;
    }
  } else Ve = Re ? Dt(e.stateNode.nextSibling) : null;
  return !0;
}
function jd() {
  for (var e = Ve; e; ) e = Dt(e.nextSibling);
}
function Gn() {
  (Ve = Re = null), (Q = !1);
}
function ua(e) {
  $e === null ? ($e = [e]) : $e.push(e);
}
var Z0 = xt.ReactCurrentBatchConfig;
function Ye(e, t) {
  if (e && e.defaultProps) {
    (t = K({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var no = Qt(null),
  ro = null,
  Rn = null,
  ca = null;
function fa() {
  ca = Rn = ro = null;
}
function da(e) {
  var t = no.current;
  H(no), (e._currentValue = t);
}
function cl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Hn(e, t) {
  (ro = e),
    (ca = Rn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Pe = !0), (e.firstContext = null));
}
function He(e) {
  var t = e._currentValue;
  if (ca !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Rn === null)) {
      if (ro === null) throw Error(C(308));
      (Rn = e), (ro.dependencies = { lanes: 0, firstContext: e });
    } else Rn = Rn.next = e;
  return t;
}
var nn = null;
function pa(e) {
  nn === null ? (nn = [e]) : nn.push(e);
}
function Fd(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), pa(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    yt(e, r)
  );
}
function yt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var kt = !1;
function ha(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Id(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function dt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Nt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), O & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      yt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), pa(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    yt(e, n)
  );
}
function ji(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), bl(e, n);
  }
}
function Hu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function io(e, t, n, r) {
  var i = e.updateQueue;
  kt = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = a = null), (l = o);
    do {
      var d = l.lane,
        h = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            v = l;
          switch (((d = t), (h = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                f = y.call(h, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (d = typeof y == "function" ? y.call(h, f, d) : y),
                d == null)
              )
                break e;
              f = K({}, f, d);
              break e;
            case 2:
              kt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l));
      } else
        (h = {
          eventTime: h,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (a = f)) : (c = c.next = h),
          (s |= d);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (a = f),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (fn |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function Wu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(C(191, i));
        i.call(r);
      }
    }
}
var Od = new Ff.Component().refs;
function fl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : K({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Mo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? mn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      i = Ft(e),
      o = dt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Nt(e, o, i)),
      t !== null && (Xe(t, e, i, r), ji(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      i = Ft(e),
      o = dt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Nt(e, o, i)),
      t !== null && (Xe(t, e, i, r), ji(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ye(),
      r = Ft(e),
      i = dt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Nt(e, i, r)),
      t !== null && (Xe(t, e, r, n), ji(t, e, r));
  },
};
function Qu(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !_r(n, r) || !_r(i, o)
      : !0
  );
}
function zd(e, t, n) {
  var r = !1,
    i = Bt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = He(o))
      : ((i = Ee(t) ? an : he.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Yn(e, i) : Bt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Mo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Yu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Mo.enqueueReplaceState(t, t.state, null);
}
function dl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Od), ha(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = He(o))
    : ((o = Ee(t) ? an : he.current), (i.context = Yn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (fl(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Mo.enqueueReplaceState(i, i.state, null),
      io(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function lr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            l === Od && (l = i.refs = {}),
              s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function wi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Gu(e) {
  var t = e._init;
  return t(e._payload);
}
function _d(e) {
  function t(g, p) {
    if (e) {
      var m = g.deletions;
      m === null ? ((g.deletions = [p]), (g.flags |= 16)) : m.push(p);
    }
  }
  function n(g, p) {
    if (!e) return null;
    for (; p !== null; ) t(g, p), (p = p.sibling);
    return null;
  }
  function r(g, p) {
    for (g = new Map(); p !== null; )
      p.key !== null ? g.set(p.key, p) : g.set(p.index, p), (p = p.sibling);
    return g;
  }
  function i(g, p) {
    return (g = It(g, p)), (g.index = 0), (g.sibling = null), g;
  }
  function o(g, p, m) {
    return (
      (g.index = m),
      e
        ? ((m = g.alternate),
          m !== null
            ? ((m = m.index), m < p ? ((g.flags |= 2), p) : m)
            : ((g.flags |= 2), p))
        : ((g.flags |= 1048576), p)
    );
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, p, m, x) {
    return p === null || p.tag !== 6
      ? ((p = vs(m, g.mode, x)), (p.return = g), p)
      : ((p = i(p, m)), (p.return = g), p);
  }
  function a(g, p, m, x) {
    var w = m.type;
    return w === kn
      ? c(g, p, m.props.children, x, m.key)
      : p !== null &&
        (p.elementType === w ||
          (typeof w == "object" &&
            w !== null &&
            w.$$typeof === Ct &&
            Gu(w) === p.type))
      ? ((x = i(p, m.props)), (x.ref = lr(g, p, m)), (x.return = g), x)
      : ((x = Bi(m.type, m.key, m.props, null, g.mode, x)),
        (x.ref = lr(g, p, m)),
        (x.return = g),
        x);
  }
  function u(g, p, m, x) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== m.containerInfo ||
      p.stateNode.implementation !== m.implementation
      ? ((p = xs(m, g.mode, x)), (p.return = g), p)
      : ((p = i(p, m.children || [])), (p.return = g), p);
  }
  function c(g, p, m, x, w) {
    return p === null || p.tag !== 7
      ? ((p = ln(m, g.mode, x, w)), (p.return = g), p)
      : ((p = i(p, m)), (p.return = g), p);
  }
  function f(g, p, m) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = vs("" + p, g.mode, m)), (p.return = g), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ui:
          return (
            (m = Bi(p.type, p.key, p.props, null, g.mode, m)),
            (m.ref = lr(g, null, p)),
            (m.return = g),
            m
          );
        case Cn:
          return (p = xs(p, g.mode, m)), (p.return = g), p;
        case Ct:
          var x = p._init;
          return f(g, x(p._payload), m);
      }
      if (pr(p) || nr(p))
        return (p = ln(p, g.mode, m, null)), (p.return = g), p;
      wi(g, p);
    }
    return null;
  }
  function d(g, p, m, x) {
    var w = p !== null ? p.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return w !== null ? null : l(g, p, "" + m, x);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ui:
          return m.key === w ? a(g, p, m, x) : null;
        case Cn:
          return m.key === w ? u(g, p, m, x) : null;
        case Ct:
          return (w = m._init), d(g, p, w(m._payload), x);
      }
      if (pr(m) || nr(m)) return w !== null ? null : c(g, p, m, x, null);
      wi(g, m);
    }
    return null;
  }
  function h(g, p, m, x, w) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (g = g.get(m) || null), l(p, g, "" + x, w);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ui:
          return (g = g.get(x.key === null ? m : x.key) || null), a(p, g, x, w);
        case Cn:
          return (g = g.get(x.key === null ? m : x.key) || null), u(p, g, x, w);
        case Ct:
          var L = x._init;
          return h(g, p, m, L(x._payload), w);
      }
      if (pr(x) || nr(x)) return (g = g.get(m) || null), c(p, g, x, w, null);
      wi(p, x);
    }
    return null;
  }
  function y(g, p, m, x) {
    for (
      var w = null, L = null, P = p, k = (p = 0), R = null;
      P !== null && k < m.length;
      k++
    ) {
      P.index > k ? ((R = P), (P = null)) : (R = P.sibling);
      var D = d(g, P, m[k], x);
      if (D === null) {
        P === null && (P = R);
        break;
      }
      e && P && D.alternate === null && t(g, P),
        (p = o(D, p, k)),
        L === null ? (w = D) : (L.sibling = D),
        (L = D),
        (P = R);
    }
    if (k === m.length) return n(g, P), Q && Jt(g, k), w;
    if (P === null) {
      for (; k < m.length; k++)
        (P = f(g, m[k], x)),
          P !== null &&
            ((p = o(P, p, k)), L === null ? (w = P) : (L.sibling = P), (L = P));
      return Q && Jt(g, k), w;
    }
    for (P = r(g, P); k < m.length; k++)
      (R = h(P, g, k, m[k], x)),
        R !== null &&
          (e && R.alternate !== null && P.delete(R.key === null ? k : R.key),
          (p = o(R, p, k)),
          L === null ? (w = R) : (L.sibling = R),
          (L = R));
    return (
      e &&
        P.forEach(function (J) {
          return t(g, J);
        }),
      Q && Jt(g, k),
      w
    );
  }
  function v(g, p, m, x) {
    var w = nr(m);
    if (typeof w != "function") throw Error(C(150));
    if (((m = w.call(m)), m == null)) throw Error(C(151));
    for (
      var L = (w = null), P = p, k = (p = 0), R = null, D = m.next();
      P !== null && !D.done;
      k++, D = m.next()
    ) {
      P.index > k ? ((R = P), (P = null)) : (R = P.sibling);
      var J = d(g, P, D.value, x);
      if (J === null) {
        P === null && (P = R);
        break;
      }
      e && P && J.alternate === null && t(g, P),
        (p = o(J, p, k)),
        L === null ? (w = J) : (L.sibling = J),
        (L = J),
        (P = R);
    }
    if (D.done) return n(g, P), Q && Jt(g, k), w;
    if (P === null) {
      for (; !D.done; k++, D = m.next())
        (D = f(g, D.value, x)),
          D !== null &&
            ((p = o(D, p, k)), L === null ? (w = D) : (L.sibling = D), (L = D));
      return Q && Jt(g, k), w;
    }
    for (P = r(g, P); !D.done; k++, D = m.next())
      (D = h(P, g, k, D.value, x)),
        D !== null &&
          (e && D.alternate !== null && P.delete(D.key === null ? k : D.key),
          (p = o(D, p, k)),
          L === null ? (w = D) : (L.sibling = D),
          (L = D));
    return (
      e &&
        P.forEach(function (Se) {
          return t(g, Se);
        }),
      Q && Jt(g, k),
      w
    );
  }
  function E(g, p, m, x) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === kn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case ui:
          e: {
            for (var w = m.key, L = p; L !== null; ) {
              if (L.key === w) {
                if (((w = m.type), w === kn)) {
                  if (L.tag === 7) {
                    n(g, L.sibling),
                      (p = i(L, m.props.children)),
                      (p.return = g),
                      (g = p);
                    break e;
                  }
                } else if (
                  L.elementType === w ||
                  (typeof w == "object" &&
                    w !== null &&
                    w.$$typeof === Ct &&
                    Gu(w) === L.type)
                ) {
                  n(g, L.sibling),
                    (p = i(L, m.props)),
                    (p.ref = lr(g, L, m)),
                    (p.return = g),
                    (g = p);
                  break e;
                }
                n(g, L);
                break;
              } else t(g, L);
              L = L.sibling;
            }
            m.type === kn
              ? ((p = ln(m.props.children, g.mode, x, m.key)),
                (p.return = g),
                (g = p))
              : ((x = Bi(m.type, m.key, m.props, null, g.mode, x)),
                (x.ref = lr(g, p, m)),
                (x.return = g),
                (g = x));
          }
          return s(g);
        case Cn:
          e: {
            for (L = m.key; p !== null; ) {
              if (p.key === L)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === m.containerInfo &&
                  p.stateNode.implementation === m.implementation
                ) {
                  n(g, p.sibling),
                    (p = i(p, m.children || [])),
                    (p.return = g),
                    (g = p);
                  break e;
                } else {
                  n(g, p);
                  break;
                }
              else t(g, p);
              p = p.sibling;
            }
            (p = xs(m, g.mode, x)), (p.return = g), (g = p);
          }
          return s(g);
        case Ct:
          return (L = m._init), E(g, p, L(m._payload), x);
      }
      if (pr(m)) return y(g, p, m, x);
      if (nr(m)) return v(g, p, m, x);
      wi(g, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        p !== null && p.tag === 6
          ? (n(g, p.sibling), (p = i(p, m)), (p.return = g), (g = p))
          : (n(g, p), (p = vs(m, g.mode, x)), (p.return = g), (g = p)),
        s(g))
      : n(g, p);
  }
  return E;
}
var $n = _d(!0),
  Bd = _d(!1),
  ni = {},
  it = Qt(ni),
  Wr = Qt(ni),
  Qr = Qt(ni);
function rn(e) {
  if (e === ni) throw Error(C(174));
  return e;
}
function ma(e, t) {
  switch ((B(Qr, t), B(Wr, e), B(it, ni), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Qs(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Qs(t, e));
  }
  H(it), B(it, t);
}
function Kn() {
  H(it), H(Wr), H(Qr);
}
function Ud(e) {
  rn(Qr.current);
  var t = rn(it.current),
    n = Qs(t, e.type);
  t !== n && (B(Wr, e), B(it, n));
}
function ga(e) {
  Wr.current === e && (H(it), H(Wr));
}
var G = Qt(0);
function oo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ds = [];
function ya() {
  for (var e = 0; e < ds.length; e++)
    ds[e]._workInProgressVersionPrimary = null;
  ds.length = 0;
}
var Fi = xt.ReactCurrentDispatcher,
  ps = xt.ReactCurrentBatchConfig,
  cn = 0,
  $ = null,
  re = null,
  se = null,
  so = !1,
  Cr = !1,
  Yr = 0,
  J0 = 0;
function fe() {
  throw Error(C(321));
}
function va(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ze(e[n], t[n])) return !1;
  return !0;
}
function xa(e, t, n, r, i, o) {
  if (
    ((cn = o),
    ($ = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Fi.current = e === null || e.memoizedState === null ? tg : ng),
    (e = n(r, i)),
    Cr)
  ) {
    o = 0;
    do {
      if (((Cr = !1), (Yr = 0), 25 <= o)) throw Error(C(301));
      (o += 1),
        (se = re = null),
        (t.updateQueue = null),
        (Fi.current = rg),
        (e = n(r, i));
    } while (Cr);
  }
  if (
    ((Fi.current = lo),
    (t = re !== null && re.next !== null),
    (cn = 0),
    (se = re = $ = null),
    (so = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function wa() {
  var e = Yr !== 0;
  return (Yr = 0), e;
}
function et() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return se === null ? ($.memoizedState = se = e) : (se = se.next = e), se;
}
function We() {
  if (re === null) {
    var e = $.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = se === null ? $.memoizedState : se.next;
  if (t !== null) (se = t), (re = e);
  else {
    if (e === null) throw Error(C(310));
    (re = e),
      (e = {
        memoizedState: re.memoizedState,
        baseState: re.baseState,
        baseQueue: re.baseQueue,
        queue: re.queue,
        next: null,
      }),
      se === null ? ($.memoizedState = se = e) : (se = se.next = e);
  }
  return se;
}
function Gr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function hs(e) {
  var t = We(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = re,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = o;
    do {
      var c = u.lane;
      if ((cn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
          ($.lanes |= c),
          (fn |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (s = r) : (a.next = l),
      Ze(r, t.memoizedState) || (Pe = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), ($.lanes |= o), (fn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ms(e) {
  var t = We(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    Ze(o, t.memoizedState) || (Pe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Hd() {}
function Wd(e, t) {
  var n = $,
    r = We(),
    i = t(),
    o = !Ze(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Pe = !0)),
    (r = r.queue),
    Sa(Gd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (se !== null && se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      $r(9, Yd.bind(null, n, r, i, t), void 0, null),
      le === null)
    )
      throw Error(C(349));
    cn & 30 || Qd(n, t, i);
  }
  return i;
}
function Qd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = $.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        ($.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Yd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), $d(t) && Kd(e);
}
function Gd(e, t, n) {
  return n(function () {
    $d(t) && Kd(e);
  });
}
function $d(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ze(e, n);
  } catch {
    return !0;
  }
}
function Kd(e) {
  var t = yt(e, 1);
  t !== null && Xe(t, e, 1, -1);
}
function $u(e) {
  var t = et();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = eg.bind(null, $, e)),
    [t.memoizedState, e]
  );
}
function $r(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = $.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        ($.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Xd() {
  return We().memoizedState;
}
function Ii(e, t, n, r) {
  var i = et();
  ($.flags |= e),
    (i.memoizedState = $r(1 | t, n, void 0, r === void 0 ? null : r));
}
function Vo(e, t, n, r) {
  var i = We();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (re !== null) {
    var s = re.memoizedState;
    if (((o = s.destroy), r !== null && va(r, s.deps))) {
      i.memoizedState = $r(t, n, o, r);
      return;
    }
  }
  ($.flags |= e), (i.memoizedState = $r(1 | t, n, o, r));
}
function Ku(e, t) {
  return Ii(8390656, 8, e, t);
}
function Sa(e, t) {
  return Vo(2048, 8, e, t);
}
function Zd(e, t) {
  return Vo(4, 2, e, t);
}
function Jd(e, t) {
  return Vo(4, 4, e, t);
}
function qd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function bd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Vo(4, 4, qd.bind(null, t, e), n)
  );
}
function Ca() {}
function ep(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && va(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function tp(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && va(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function np(e, t, n) {
  return cn & 21
    ? (Ze(n, t) || ((n = od()), ($.lanes |= n), (fn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Pe = !0)), (e.memoizedState = n));
}
function q0(e, t) {
  var n = z;
  (z = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ps.transition;
  ps.transition = {};
  try {
    e(!1), t();
  } finally {
    (z = n), (ps.transition = r);
  }
}
function rp() {
  return We().memoizedState;
}
function b0(e, t, n) {
  var r = Ft(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ip(e))
  )
    op(t, n);
  else if (((n = Fd(e, t, n, r)), n !== null)) {
    var i = ye();
    Xe(n, e, r, i), sp(n, t, r);
  }
}
function eg(e, t, n) {
  var r = Ft(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ip(e)) op(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Ze(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), pa(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Fd(e, t, i, r)),
      n !== null && ((i = ye()), Xe(n, e, r, i), sp(n, t, r));
  }
}
function ip(e) {
  var t = e.alternate;
  return e === $ || (t !== null && t === $);
}
function op(e, t) {
  Cr = so = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function sp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), bl(e, n);
  }
}
var lo = {
    readContext: He,
    useCallback: fe,
    useContext: fe,
    useEffect: fe,
    useImperativeHandle: fe,
    useInsertionEffect: fe,
    useLayoutEffect: fe,
    useMemo: fe,
    useReducer: fe,
    useRef: fe,
    useState: fe,
    useDebugValue: fe,
    useDeferredValue: fe,
    useTransition: fe,
    useMutableSource: fe,
    useSyncExternalStore: fe,
    useId: fe,
    unstable_isNewReconciler: !1,
  },
  tg = {
    readContext: He,
    useCallback: function (e, t) {
      return (et().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: He,
    useEffect: Ku,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ii(4194308, 4, qd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ii(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ii(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = et();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = et();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = b0.bind(null, $, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = et();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: $u,
    useDebugValue: Ca,
    useDeferredValue: function (e) {
      return (et().memoizedState = e);
    },
    useTransition: function () {
      var e = $u(!1),
        t = e[0];
      return (e = q0.bind(null, e[1])), (et().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = $,
        i = et();
      if (Q) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), le === null)) throw Error(C(349));
        cn & 30 || Qd(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Ku(Gd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        $r(9, Yd.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = et(),
        t = le.identifierPrefix;
      if (Q) {
        var n = ct,
          r = ut;
        (n = (r & ~(1 << (32 - Ke(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Yr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = J0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ng = {
    readContext: He,
    useCallback: ep,
    useContext: He,
    useEffect: Sa,
    useImperativeHandle: bd,
    useInsertionEffect: Zd,
    useLayoutEffect: Jd,
    useMemo: tp,
    useReducer: hs,
    useRef: Xd,
    useState: function () {
      return hs(Gr);
    },
    useDebugValue: Ca,
    useDeferredValue: function (e) {
      var t = We();
      return np(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = hs(Gr)[0],
        t = We().memoizedState;
      return [e, t];
    },
    useMutableSource: Hd,
    useSyncExternalStore: Wd,
    useId: rp,
    unstable_isNewReconciler: !1,
  },
  rg = {
    readContext: He,
    useCallback: ep,
    useContext: He,
    useEffect: Sa,
    useImperativeHandle: bd,
    useInsertionEffect: Zd,
    useLayoutEffect: Jd,
    useMemo: tp,
    useReducer: ms,
    useRef: Xd,
    useState: function () {
      return ms(Gr);
    },
    useDebugValue: Ca,
    useDeferredValue: function (e) {
      var t = We();
      return re === null ? (t.memoizedState = e) : np(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = ms(Gr)[0],
        t = We().memoizedState;
      return [e, t];
    },
    useMutableSource: Hd,
    useSyncExternalStore: Wd,
    useId: rp,
    unstable_isNewReconciler: !1,
  };
function Xn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Rm(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function gs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function pl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ig = typeof WeakMap == "function" ? WeakMap : Map;
function lp(e, t, n) {
  (n = dt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      uo || ((uo = !0), (kl = r)), pl(e, t);
    }),
    n
  );
}
function ap(e, t, n) {
  (n = dt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        pl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        pl(e, t),
          typeof r != "function" &&
            (jt === null ? (jt = new Set([this])) : jt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Xu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ig();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = vg.bind(null, e, t, n)), t.then(e, e));
}
function Zu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ju(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = dt(-1, 1)), (t.tag = 2), Nt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var og = xt.ReactCurrentOwner,
  Pe = !1;
function ge(e, t, n, r) {
  t.child = e === null ? Bd(t, null, n, r) : $n(t, e.child, n, r);
}
function qu(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Hn(t, i),
    (r = xa(e, t, n, r, o, i)),
    (n = wa()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        vt(e, t, i))
      : (Q && n && la(t), (t.flags |= 1), ge(e, t, r, i), t.child)
  );
}
function bu(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Va(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), up(e, t, o, r, i))
      : ((e = Bi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : _r), n(s, r) && e.ref === t.ref)
    )
      return vt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = It(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function up(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (_r(o, r) && e.ref === t.ref)
      if (((Pe = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Pe = !0);
      else return (t.lanes = e.lanes), vt(e, t, i);
  }
  return hl(e, t, n, r, i);
}
function cp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        B(Nn, Me),
        (Me |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          B(Nn, Me),
          (Me |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        B(Nn, Me),
        (Me |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      B(Nn, Me),
      (Me |= r);
  return ge(e, t, i, n), t.child;
}
function fp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function hl(e, t, n, r, i) {
  var o = Ee(n) ? an : he.current;
  return (
    (o = Yn(t, o)),
    Hn(t, i),
    (n = xa(e, t, n, r, o, i)),
    (r = wa()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        vt(e, t, i))
      : (Q && r && la(t), (t.flags |= 1), ge(e, t, n, i), t.child)
  );
}
function ec(e, t, n, r, i) {
  if (Ee(n)) {
    var o = !0;
    bi(t);
  } else o = !1;
  if ((Hn(t, i), t.stateNode === null))
    Oi(e, t), zd(t, n, r), dl(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = He(u))
      : ((u = Ee(n) ? an : he.current), (u = Yn(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && Yu(t, s, r, u)),
      (kt = !1);
    var d = t.memoizedState;
    (s.state = d),
      io(t, r, s, i),
      (a = t.memoizedState),
      l !== r || d !== a || Te.current || kt
        ? (typeof c == "function" && (fl(t, n, c, r), (a = t.memoizedState)),
          (l = kt || Qu(t, n, l, r, d, a, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Id(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Ye(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = He(a))
        : ((a = Ee(n) ? an : he.current), (a = Yn(t, a)));
    var h = n.getDerivedStateFromProps;
    (c =
      typeof h == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || d !== a) && Yu(t, s, r, a)),
      (kt = !1),
      (d = t.memoizedState),
      (s.state = d),
      io(t, r, s, i);
    var y = t.memoizedState;
    l !== f || d !== y || Te.current || kt
      ? (typeof h == "function" && (fl(t, n, h, r), (y = t.memoizedState)),
        (u = kt || Qu(t, n, u, r, d, y, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ml(e, t, n, r, o, i);
}
function ml(e, t, n, r, i, o) {
  fp(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && _u(t, n, !1), vt(e, t, o);
  (r = t.stateNode), (og.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = $n(t, e.child, null, o)), (t.child = $n(t, null, l, o)))
      : ge(e, t, l, o),
    (t.memoizedState = r.state),
    i && _u(t, n, !0),
    t.child
  );
}
function dp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? zu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && zu(e, t.context, !1),
    ma(e, t.containerInfo);
}
function tc(e, t, n, r, i) {
  return Gn(), ua(i), (t.flags |= 256), ge(e, t, n, r), t.child;
}
var gl = { dehydrated: null, treeContext: null, retryLane: 0 };
function yl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function pp(e, t, n) {
  var r = t.pendingProps,
    i = G.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    B(G, i & 1),
    e === null)
  )
    return (
      ul(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = No(s, r, 0, null)),
              (e = ln(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = yl(n)),
              (t.memoizedState = gl),
              e)
            : ka(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return sg(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = It(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = It(l, o)) : ((o = ln(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? yl(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = gl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = It(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ka(e, t) {
  return (
    (t = No({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Si(e, t, n, r) {
  return (
    r !== null && ua(r),
    $n(t, e.child, null, n),
    (e = ka(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function sg(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = gs(Error(C(422)))), Si(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = No({ mode: "visible", children: r.children }, i, 0, null)),
        (o = ln(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && $n(t, e.child, null, s),
        (t.child.memoizedState = yl(s)),
        (t.memoizedState = gl),
        o);
  if (!(t.mode & 1)) return Si(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(C(419))), (r = gs(o, r, void 0)), Si(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Pe || l)) {
    if (((r = le), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), yt(e, i), Xe(r, e, i, -1));
    }
    return Ma(), (r = gs(Error(C(421)))), Si(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = xg.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ve = Dt(i.nextSibling)),
      (Re = t),
      (Q = !0),
      ($e = null),
      e !== null &&
        ((ze[_e++] = ut),
        (ze[_e++] = ct),
        (ze[_e++] = un),
        (ut = e.id),
        (ct = e.overflow),
        (un = t)),
      (t = ka(t, r.children)),
      (t.flags |= 4096),
      t);
}
function nc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), cl(e.return, t, n);
}
function ys(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function hp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((ge(e, t, r.children, n), (r = G.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && nc(e, n, t);
        else if (e.tag === 19) nc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((B(G, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && oo(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ys(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && oo(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        ys(t, !0, n, null, o);
        break;
      case "together":
        ys(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Oi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function vt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (fn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = It(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = It(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function lg(e, t, n) {
  switch (t.tag) {
    case 3:
      dp(t), Gn();
      break;
    case 5:
      Ud(t);
      break;
    case 1:
      Ee(t.type) && bi(t);
      break;
    case 4:
      ma(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      B(no, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (B(G, G.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? pp(e, t, n)
          : (B(G, G.current & 1),
            (e = vt(e, t, n)),
            e !== null ? e.sibling : null);
      B(G, G.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return hp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        B(G, G.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), cp(e, t, n);
  }
  return vt(e, t, n);
}
var mp, vl, gp, yp;
mp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
vl = function () {};
gp = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), rn(it.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Bs(e, i)), (r = Bs(e, r)), (o = []);
        break;
      case "select":
        (i = K({}, i, { value: void 0 })),
          (r = K({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Ws(e, i)), (r = Ws(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ji);
    }
    Ys(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Dr.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (o = o || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Dr.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && U("scroll", e),
                  o || l === a || (o = []))
                : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
yp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ar(e, t) {
  if (!Q)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function de(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ag(e, t, n) {
  var r = t.pendingProps;
  switch ((aa(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return de(t), null;
    case 1:
      return Ee(t.type) && qi(), de(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Kn(),
        H(Te),
        H(he),
        ya(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (xi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), $e !== null && (El($e), ($e = null)))),
        vl(e, t),
        de(t),
        null
      );
    case 5:
      ga(t);
      var i = rn(Qr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        gp(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return de(t), null;
        }
        if (((e = rn(it.current)), xi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[nt] = t), (r[Hr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < mr.length; i++) U(mr[i], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              fu(r, o), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              pu(r, o), U("invalid", r);
          }
          Ys(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      vi(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      vi(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Dr.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              ci(r), du(r, o, !0);
              break;
            case "textarea":
              ci(r), hu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Ji);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Qf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[nt] = t),
            (e[Hr] = r),
            mp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Gs(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < mr.length; i++) U(mr[i], e);
                i = r;
                break;
              case "source":
                U("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (i = r);
                break;
              case "details":
                U("toggle", e), (i = r);
                break;
              case "input":
                fu(e, r), (i = Bs(e, r)), U("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = K({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                pu(e, r), (i = Ws(e, r)), U("invalid", e);
                break;
              default:
                i = r;
            }
            Ys(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === "style"
                  ? $f(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Yf(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Nr(e, a)
                    : typeof a == "number" && Nr(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Dr.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && U("scroll", e)
                      : a != null && $l(e, o, a, s));
              }
            switch (n) {
              case "input":
                ci(e), du(e, r, !1);
                break;
              case "textarea":
                ci(e), hu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + _t(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? zn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      zn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Ji);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return de(t), null;
    case 6:
      if (e && t.stateNode != null) yp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = rn(Qr.current)), rn(it.current), xi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[nt] = t),
            (o = r.nodeValue !== n) && ((e = Re), e !== null))
          )
            switch (e.tag) {
              case 3:
                vi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  vi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[nt] = t),
            (t.stateNode = r);
      }
      return de(t), null;
    case 13:
      if (
        (H(G),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Q && Ve !== null && t.mode & 1 && !(t.flags & 128))
          jd(), Gn(), (t.flags |= 98560), (o = !1);
        else if (((o = xi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(C(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(C(317));
            o[nt] = t;
          } else
            Gn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          de(t), (o = !1);
        } else $e !== null && (El($e), ($e = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || G.current & 1 ? ie === 0 && (ie = 3) : Ma())),
          t.updateQueue !== null && (t.flags |= 4),
          de(t),
          null);
    case 4:
      return (
        Kn(), vl(e, t), e === null && Br(t.stateNode.containerInfo), de(t), null
      );
    case 10:
      return da(t.type._context), de(t), null;
    case 17:
      return Ee(t.type) && qi(), de(t), null;
    case 19:
      if ((H(G), (o = t.memoizedState), o === null)) return de(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) ar(o, !1);
        else {
          if (ie !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = oo(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ar(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return B(G, (G.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ee() > Zn &&
            ((t.flags |= 128), (r = !0), ar(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = oo(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ar(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !Q)
            )
              return de(t), null;
          } else
            2 * ee() - o.renderingStartTime > Zn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ar(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ee()),
          (t.sibling = null),
          (n = G.current),
          B(G, r ? (n & 1) | 2 : n & 1),
          t)
        : (de(t), null);
    case 22:
    case 23:
      return (
        Aa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Me & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : de(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function ug(e, t) {
  switch ((aa(t), t.tag)) {
    case 1:
      return (
        Ee(t.type) && qi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Kn(),
        H(Te),
        H(he),
        ya(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ga(t), null;
    case 13:
      if ((H(G), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        Gn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return H(G), null;
    case 4:
      return Kn(), null;
    case 10:
      return da(t.type._context), null;
    case 22:
    case 23:
      return Aa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ci = !1,
  pe = !1,
  cg = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function Dn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        X(e, t, r);
      }
    else n.current = null;
}
function xl(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var rc = !1;
function fg(e, t) {
  if (((nl = Ki), (e = Sd()), sa(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var h;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (h = f.firstChild) !== null;

            )
              (d = f), (f = h);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (l = s),
                d === o && ++c === r && (a = s),
                (h = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = h;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (rl = { focusedElem: e, selectionRange: n }, Ki = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    E = y.memoizedState,
                    g = t.stateNode,
                    p = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Ye(t.type, v),
                      E
                    );
                  g.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (x) {
          X(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (y = rc), (rc = !1), y;
}
function kr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && xl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ro(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function wl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function vp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), vp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[nt], delete t[Hr], delete t[sl], delete t[$0], delete t[K0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function xp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ic(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || xp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Sl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ji));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Sl(e, t, n), e = e.sibling; e !== null; ) Sl(e, t, n), (e = e.sibling);
}
function Cl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Cl(e, t, n), e = e.sibling; e !== null; ) Cl(e, t, n), (e = e.sibling);
}
var ae = null,
  Ge = !1;
function wt(e, t, n) {
  for (n = n.child; n !== null; ) wp(e, t, n), (n = n.sibling);
}
function wp(e, t, n) {
  if (rt && typeof rt.onCommitFiberUnmount == "function")
    try {
      rt.onCommitFiberUnmount(ko, n);
    } catch {}
  switch (n.tag) {
    case 5:
      pe || Dn(n, t);
    case 6:
      var r = ae,
        i = Ge;
      (ae = null),
        wt(e, t, n),
        (ae = r),
        (Ge = i),
        ae !== null &&
          (Ge
            ? ((e = ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null &&
        (Ge
          ? ((e = ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? cs(e.parentNode, n)
              : e.nodeType === 1 && cs(e, n),
            Or(e))
          : cs(ae, n.stateNode));
      break;
    case 4:
      (r = ae),
        (i = Ge),
        (ae = n.stateNode.containerInfo),
        (Ge = !0),
        wt(e, t, n),
        (ae = r),
        (Ge = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !pe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && xl(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      wt(e, t, n);
      break;
    case 1:
      if (
        !pe &&
        (Dn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          X(n, t, l);
        }
      wt(e, t, n);
      break;
    case 21:
      wt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((pe = (r = pe) || n.memoizedState !== null), wt(e, t, n), (pe = r))
        : wt(e, t, n);
      break;
    default:
      wt(e, t, n);
  }
}
function oc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new cg()),
      t.forEach(function (r) {
        var i = wg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Qe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ae = l.stateNode), (Ge = !1);
              break e;
            case 3:
              (ae = l.stateNode.containerInfo), (Ge = !0);
              break e;
            case 4:
              (ae = l.stateNode.containerInfo), (Ge = !0);
              break e;
          }
          l = l.return;
        }
        if (ae === null) throw Error(C(160));
        wp(o, s, i), (ae = null), (Ge = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        X(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Sp(t, e), (t = t.sibling);
}
function Sp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Qe(t, e), be(e), r & 4)) {
        try {
          kr(3, e, e.return), Ro(3, e);
        } catch (v) {
          X(e, e.return, v);
        }
        try {
          kr(5, e, e.return);
        } catch (v) {
          X(e, e.return, v);
        }
      }
      break;
    case 1:
      Qe(t, e), be(e), r & 512 && n !== null && Dn(n, n.return);
      break;
    case 5:
      if (
        (Qe(t, e),
        be(e),
        r & 512 && n !== null && Dn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Nr(i, "");
        } catch (v) {
          X(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && Hf(i, o),
              Gs(l, s);
            var u = Gs(l, o);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                f = a[s + 1];
              c === "style"
                ? $f(i, f)
                : c === "dangerouslySetInnerHTML"
                ? Yf(i, f)
                : c === "children"
                ? Nr(i, f)
                : $l(i, c, f, u);
            }
            switch (l) {
              case "input":
                Us(i, o);
                break;
              case "textarea":
                Wf(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var h = o.value;
                h != null
                  ? zn(i, !!o.multiple, h, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? zn(i, !!o.multiple, o.defaultValue, !0)
                      : zn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Hr] = o;
          } catch (v) {
            X(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Qe(t, e), be(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (v) {
          X(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Qe(t, e), be(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Or(t.containerInfo);
        } catch (v) {
          X(e, e.return, v);
        }
      break;
    case 4:
      Qe(t, e), be(e);
      break;
    case 13:
      Qe(t, e),
        be(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Ea = ee())),
        r & 4 && oc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((pe = (u = pe) || c), Qe(t, e), (pe = u)) : Qe(t, e),
        be(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (M = e, c = e.child; c !== null; ) {
            for (f = M = c; M !== null; ) {
              switch (((d = M), (h = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  kr(4, d, d.return);
                  break;
                case 1:
                  Dn(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      X(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Dn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    lc(f);
                    continue;
                  }
              }
              h !== null ? ((h.return = d), (M = h)) : lc(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Gf("display", s)));
              } catch (v) {
                X(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (v) {
                X(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Qe(t, e), be(e), r & 4 && oc(e);
      break;
    case 21:
      break;
    default:
      Qe(t, e), be(e);
  }
}
function be(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (xp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Nr(i, ""), (r.flags &= -33));
          var o = ic(e);
          Cl(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = ic(e);
          Sl(e, l, s);
          break;
        default:
          throw Error(C(161));
      }
    } catch (a) {
      X(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function dg(e, t, n) {
  (M = e), Cp(e);
}
function Cp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var i = M,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Ci;
      if (!s) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || pe;
        l = Ci;
        var u = pe;
        if (((Ci = s), (pe = a) && !u))
          for (M = i; M !== null; )
            (s = M),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? ac(i)
                : a !== null
                ? ((a.return = s), (M = a))
                : ac(i);
        for (; o !== null; ) (M = o), Cp(o), (o = o.sibling);
        (M = i), (Ci = l), (pe = u);
      }
      sc(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (M = o)) : sc(e);
  }
}
function sc(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              pe || Ro(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !pe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ye(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Wu(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Wu(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Or(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        pe || (t.flags & 512 && wl(t));
      } catch (d) {
        X(t, t.return, d);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function lc(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function ac(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ro(4, t);
          } catch (a) {
            X(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              X(t, i, a);
            }
          }
          var o = t.return;
          try {
            wl(t);
          } catch (a) {
            X(t, o, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            wl(t);
          } catch (a) {
            X(t, s, a);
          }
      }
    } catch (a) {
      X(t, t.return, a);
    }
    if (t === e) {
      M = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (M = l);
      break;
    }
    M = t.return;
  }
}
var pg = Math.ceil,
  ao = xt.ReactCurrentDispatcher,
  Pa = xt.ReactCurrentOwner,
  Ue = xt.ReactCurrentBatchConfig,
  O = 0,
  le = null,
  ne = null,
  ue = 0,
  Me = 0,
  Nn = Qt(0),
  ie = 0,
  Kr = null,
  fn = 0,
  Do = 0,
  Ta = 0,
  Pr = null,
  ke = null,
  Ea = 0,
  Zn = 1 / 0,
  lt = null,
  uo = !1,
  kl = null,
  jt = null,
  ki = !1,
  At = null,
  co = 0,
  Tr = 0,
  Pl = null,
  zi = -1,
  _i = 0;
function ye() {
  return O & 6 ? ee() : zi !== -1 ? zi : (zi = ee());
}
function Ft(e) {
  return e.mode & 1
    ? O & 2 && ue !== 0
      ? ue & -ue
      : Z0.transition !== null
      ? (_i === 0 && (_i = od()), _i)
      : ((e = z),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : dd(e.type))),
        e)
    : 1;
}
function Xe(e, t, n, r) {
  if (50 < Tr) throw ((Tr = 0), (Pl = null), Error(C(185)));
  br(e, n, r),
    (!(O & 2) || e !== le) &&
      (e === le && (!(O & 2) && (Do |= n), ie === 4 && Et(e, ue)),
      Le(e, r),
      n === 1 && O === 0 && !(t.mode & 1) && ((Zn = ee() + 500), Ao && Yt()));
}
function Le(e, t) {
  var n = e.callbackNode;
  Zm(e, t);
  var r = $i(e, e === le ? ue : 0);
  if (r === 0)
    n !== null && yu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && yu(n), t === 1))
      e.tag === 0 ? X0(uc.bind(null, e)) : Rd(uc.bind(null, e)),
        Y0(function () {
          !(O & 6) && Yt();
        }),
        (n = null);
    else {
      switch (sd(r)) {
        case 1:
          n = ql;
          break;
        case 4:
          n = rd;
          break;
        case 16:
          n = Gi;
          break;
        case 536870912:
          n = id;
          break;
        default:
          n = Gi;
      }
      n = Vp(n, kp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function kp(e, t) {
  if (((zi = -1), (_i = 0), O & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Wn() && e.callbackNode !== n) return null;
  var r = $i(e, e === le ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = fo(e, r);
  else {
    t = r;
    var i = O;
    O |= 2;
    var o = Tp();
    (le !== e || ue !== t) && ((lt = null), (Zn = ee() + 500), sn(e, t));
    do
      try {
        gg();
        break;
      } catch (l) {
        Pp(e, l);
      }
    while (1);
    fa(),
      (ao.current = o),
      (O = i),
      ne !== null ? (t = 0) : ((le = null), (ue = 0), (t = ie));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Js(e)), i !== 0 && ((r = i), (t = Tl(e, i)))), t === 1)
    )
      throw ((n = Kr), sn(e, 0), Et(e, r), Le(e, ee()), n);
    if (t === 6) Et(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !hg(i) &&
          ((t = fo(e, r)),
          t === 2 && ((o = Js(e)), o !== 0 && ((r = o), (t = Tl(e, o)))),
          t === 1))
      )
        throw ((n = Kr), sn(e, 0), Et(e, r), Le(e, ee()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          qt(e, ke, lt);
          break;
        case 3:
          if (
            (Et(e, r), (r & 130023424) === r && ((t = Ea + 500 - ee()), 10 < t))
          ) {
            if ($i(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ye(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = ol(qt.bind(null, e, ke, lt), t);
            break;
          }
          qt(e, ke, lt);
          break;
        case 4:
          if ((Et(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Ke(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = ee() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * pg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ol(qt.bind(null, e, ke, lt), r);
            break;
          }
          qt(e, ke, lt);
          break;
        case 5:
          qt(e, ke, lt);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Le(e, ee()), e.callbackNode === n ? kp.bind(null, e) : null;
}
function Tl(e, t) {
  var n = Pr;
  return (
    e.current.memoizedState.isDehydrated && (sn(e, t).flags |= 256),
    (e = fo(e, t)),
    e !== 2 && ((t = ke), (ke = n), t !== null && El(t)),
    e
  );
}
function El(e) {
  ke === null ? (ke = e) : ke.push.apply(ke, e);
}
function hg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Ze(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Et(e, t) {
  for (
    t &= ~Ta,
      t &= ~Do,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ke(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function uc(e) {
  if (O & 6) throw Error(C(327));
  Wn();
  var t = $i(e, 0);
  if (!(t & 1)) return Le(e, ee()), null;
  var n = fo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Js(e);
    r !== 0 && ((t = r), (n = Tl(e, r)));
  }
  if (n === 1) throw ((n = Kr), sn(e, 0), Et(e, t), Le(e, ee()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    qt(e, ke, lt),
    Le(e, ee()),
    null
  );
}
function La(e, t) {
  var n = O;
  O |= 1;
  try {
    return e(t);
  } finally {
    (O = n), O === 0 && ((Zn = ee() + 500), Ao && Yt());
  }
}
function dn(e) {
  At !== null && At.tag === 0 && !(O & 6) && Wn();
  var t = O;
  O |= 1;
  var n = Ue.transition,
    r = z;
  try {
    if (((Ue.transition = null), (z = 1), e)) return e();
  } finally {
    (z = r), (Ue.transition = n), (O = t), !(O & 6) && Yt();
  }
}
function Aa() {
  (Me = Nn.current), H(Nn);
}
function sn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Q0(n)), ne !== null))
    for (n = ne.return; n !== null; ) {
      var r = n;
      switch ((aa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && qi();
          break;
        case 3:
          Kn(), H(Te), H(he), ya();
          break;
        case 5:
          ga(r);
          break;
        case 4:
          Kn();
          break;
        case 13:
          H(G);
          break;
        case 19:
          H(G);
          break;
        case 10:
          da(r.type._context);
          break;
        case 22:
        case 23:
          Aa();
      }
      n = n.return;
    }
  if (
    ((le = e),
    (ne = e = It(e.current, null)),
    (ue = Me = t),
    (ie = 0),
    (Kr = null),
    (Ta = Do = fn = 0),
    (ke = Pr = null),
    nn !== null)
  ) {
    for (t = 0; t < nn.length; t++)
      if (((n = nn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    nn = null;
  }
  return e;
}
function Pp(e, t) {
  do {
    var n = ne;
    try {
      if ((fa(), (Fi.current = lo), so)) {
        for (var r = $.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        so = !1;
      }
      if (
        ((cn = 0),
        (se = re = $ = null),
        (Cr = !1),
        (Yr = 0),
        (Pa.current = null),
        n === null || n.return === null)
      ) {
        (ie = 1), (Kr = t), (ne = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = ue),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = Zu(s);
          if (h !== null) {
            (h.flags &= -257),
              Ju(h, s, l, o, t),
              h.mode & 1 && Xu(o, u, t),
              (t = h),
              (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(a), (t.updateQueue = v);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Xu(o, u, t), Ma();
              break e;
            }
            a = Error(C(426));
          }
        } else if (Q && l.mode & 1) {
          var E = Zu(s);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              Ju(E, s, l, o, t),
              ua(Xn(a, l));
            break e;
          }
        }
        (o = a = Xn(a, l)),
          ie !== 4 && (ie = 2),
          Pr === null ? (Pr = [o]) : Pr.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var g = lp(o, a, t);
              Hu(o, g);
              break e;
            case 1:
              l = a;
              var p = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (jt === null || !jt.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var x = ap(o, l, t);
                Hu(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Lp(n);
    } catch (w) {
      (t = w), ne === n && n !== null && (ne = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Tp() {
  var e = ao.current;
  return (ao.current = lo), e === null ? lo : e;
}
function Ma() {
  (ie === 0 || ie === 3 || ie === 2) && (ie = 4),
    le === null || (!(fn & 268435455) && !(Do & 268435455)) || Et(le, ue);
}
function fo(e, t) {
  var n = O;
  O |= 2;
  var r = Tp();
  (le !== e || ue !== t) && ((lt = null), sn(e, t));
  do
    try {
      mg();
      break;
    } catch (i) {
      Pp(e, i);
    }
  while (1);
  if ((fa(), (O = n), (ao.current = r), ne !== null)) throw Error(C(261));
  return (le = null), (ue = 0), ie;
}
function mg() {
  for (; ne !== null; ) Ep(ne);
}
function gg() {
  for (; ne !== null && !Um(); ) Ep(ne);
}
function Ep(e) {
  var t = Mp(e.alternate, e, Me);
  (e.memoizedProps = e.pendingProps),
    t === null ? Lp(e) : (ne = t),
    (Pa.current = null);
}
function Lp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ug(n, t)), n !== null)) {
        (n.flags &= 32767), (ne = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ie = 6), (ne = null);
        return;
      }
    } else if (((n = ag(n, t, Me)), n !== null)) {
      ne = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ne = t;
      return;
    }
    ne = t = e;
  } while (t !== null);
  ie === 0 && (ie = 5);
}
function qt(e, t, n) {
  var r = z,
    i = Ue.transition;
  try {
    (Ue.transition = null), (z = 1), yg(e, t, n, r);
  } finally {
    (Ue.transition = i), (z = r);
  }
  return null;
}
function yg(e, t, n, r) {
  do Wn();
  while (At !== null);
  if (O & 6) throw Error(C(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Jm(e, o),
    e === le && ((ne = le = null), (ue = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ki ||
      ((ki = !0),
      Vp(Gi, function () {
        return Wn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ue.transition), (Ue.transition = null);
    var s = z;
    z = 1;
    var l = O;
    (O |= 4),
      (Pa.current = null),
      fg(e, n),
      Sp(n, e),
      O0(rl),
      (Ki = !!nl),
      (rl = nl = null),
      (e.current = n),
      dg(n),
      Hm(),
      (O = l),
      (z = s),
      (Ue.transition = o);
  } else e.current = n;
  if (
    (ki && ((ki = !1), (At = e), (co = i)),
    (o = e.pendingLanes),
    o === 0 && (jt = null),
    Ym(n.stateNode),
    Le(e, ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (uo) throw ((uo = !1), (e = kl), (kl = null), e);
  return (
    co & 1 && e.tag !== 0 && Wn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Pl ? Tr++ : ((Tr = 0), (Pl = e))) : (Tr = 0),
    Yt(),
    null
  );
}
function Wn() {
  if (At !== null) {
    var e = sd(co),
      t = Ue.transition,
      n = z;
    try {
      if (((Ue.transition = null), (z = 16 > e ? 16 : e), At === null))
        var r = !1;
      else {
        if (((e = At), (At = null), (co = 0), O & 6)) throw Error(C(331));
        var i = O;
        for (O |= 4, M = e.current; M !== null; ) {
          var o = M,
            s = o.child;
          if (M.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (M = u; M !== null; ) {
                  var c = M;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kr(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (M = f);
                  else
                    for (; M !== null; ) {
                      c = M;
                      var d = c.sibling,
                        h = c.return;
                      if ((vp(c), c === u)) {
                        M = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = h), (M = d);
                        break;
                      }
                      M = h;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var E = v.sibling;
                    (v.sibling = null), (v = E);
                  } while (v !== null);
                }
              }
              M = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (M = s);
          else
            e: for (; M !== null; ) {
              if (((o = M), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    kr(9, o, o.return);
                }
              var g = o.sibling;
              if (g !== null) {
                (g.return = o.return), (M = g);
                break e;
              }
              M = o.return;
            }
        }
        var p = e.current;
        for (M = p; M !== null; ) {
          s = M;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (M = m);
          else
            e: for (s = p; M !== null; ) {
              if (((l = M), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ro(9, l);
                  }
                } catch (w) {
                  X(l, l.return, w);
                }
              if (l === s) {
                M = null;
                break e;
              }
              var x = l.sibling;
              if (x !== null) {
                (x.return = l.return), (M = x);
                break e;
              }
              M = l.return;
            }
        }
        if (
          ((O = i), Yt(), rt && typeof rt.onPostCommitFiberRoot == "function")
        )
          try {
            rt.onPostCommitFiberRoot(ko, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (z = n), (Ue.transition = t);
    }
  }
  return !1;
}
function cc(e, t, n) {
  (t = Xn(n, t)),
    (t = lp(e, t, 1)),
    (e = Nt(e, t, 1)),
    (t = ye()),
    e !== null && (br(e, 1, t), Le(e, t));
}
function X(e, t, n) {
  if (e.tag === 3) cc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        cc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (jt === null || !jt.has(r)))
        ) {
          (e = Xn(n, e)),
            (e = ap(t, e, 1)),
            (t = Nt(t, e, 1)),
            (e = ye()),
            t !== null && (br(t, 1, e), Le(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function vg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ye()),
    (e.pingedLanes |= e.suspendedLanes & n),
    le === e &&
      (ue & n) === n &&
      (ie === 4 || (ie === 3 && (ue & 130023424) === ue && 500 > ee() - Ea)
        ? sn(e, 0)
        : (Ta |= n)),
    Le(e, t);
}
function Ap(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = pi), (pi <<= 1), !(pi & 130023424) && (pi = 4194304))
      : (t = 1));
  var n = ye();
  (e = yt(e, t)), e !== null && (br(e, t, n), Le(e, n));
}
function xg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ap(e, n);
}
function wg(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), Ap(e, n);
}
var Mp;
Mp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Te.current) Pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Pe = !1), lg(e, t, n);
      Pe = !!(e.flags & 131072);
    }
  else (Pe = !1), Q && t.flags & 1048576 && Dd(t, to, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Oi(e, t), (e = t.pendingProps);
      var i = Yn(t, he.current);
      Hn(t, n), (i = xa(null, t, r, e, i, n));
      var o = wa();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ee(r) ? ((o = !0), bi(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            ha(t),
            (i.updater = Mo),
            (t.stateNode = i),
            (i._reactInternals = t),
            dl(t, r, e, n),
            (t = ml(null, t, r, !0, o, n)))
          : ((t.tag = 0), Q && o && la(t), ge(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Oi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Cg(r)),
          (e = Ye(r, e)),
          i)
        ) {
          case 0:
            t = hl(null, t, r, e, n);
            break e;
          case 1:
            t = ec(null, t, r, e, n);
            break e;
          case 11:
            t = qu(null, t, r, e, n);
            break e;
          case 14:
            t = bu(null, t, r, Ye(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ye(r, i)),
        hl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ye(r, i)),
        ec(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((dp(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Id(e, t),
          io(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Xn(Error(C(423)), t)), (t = tc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Xn(Error(C(424)), t)), (t = tc(e, t, r, n, i));
            break e;
          } else
            for (
              Ve = Dt(t.stateNode.containerInfo.firstChild),
                Re = t,
                Q = !0,
                $e = null,
                n = Bd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Gn(), r === i)) {
            t = vt(e, t, n);
            break e;
          }
          ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ud(t),
        e === null && ul(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        il(r, i) ? (s = null) : o !== null && il(r, o) && (t.flags |= 32),
        fp(e, t),
        ge(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && ul(t), null;
    case 13:
      return pp(e, t, n);
    case 4:
      return (
        ma(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = $n(t, null, r, n)) : ge(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ye(r, i)),
        qu(e, t, r, i, n)
      );
    case 7:
      return ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          B(no, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (Ze(o.value, s)) {
            if (o.children === i.children && !Te.current) {
              t = vt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = dt(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      cl(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(C(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  cl(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        ge(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Hn(t, n),
        (i = He(i)),
        (r = r(i)),
        (t.flags |= 1),
        ge(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ye(r, t.pendingProps)),
        (i = Ye(r.type, i)),
        bu(e, t, r, i, n)
      );
    case 15:
      return up(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ye(r, i)),
        Oi(e, t),
        (t.tag = 1),
        Ee(r) ? ((e = !0), bi(t)) : (e = !1),
        Hn(t, n),
        zd(t, r, i),
        dl(t, r, i, n),
        ml(null, t, r, !0, e, n)
      );
    case 19:
      return hp(e, t, n);
    case 22:
      return cp(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function Vp(e, t) {
  return nd(e, t);
}
function Sg(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Be(e, t, n, r) {
  return new Sg(e, t, n, r);
}
function Va(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Cg(e) {
  if (typeof e == "function") return Va(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Xl)) return 11;
    if (e === Zl) return 14;
  }
  return 2;
}
function It(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Be(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Bi(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Va(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case kn:
        return ln(n.children, i, o, t);
      case Kl:
        (s = 8), (i |= 8);
        break;
      case Is:
        return (
          (e = Be(12, n, t, i | 2)), (e.elementType = Is), (e.lanes = o), e
        );
      case Os:
        return (e = Be(13, n, t, i)), (e.elementType = Os), (e.lanes = o), e;
      case zs:
        return (e = Be(19, n, t, i)), (e.elementType = zs), (e.lanes = o), e;
      case _f:
        return No(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Of:
              s = 10;
              break e;
            case zf:
              s = 9;
              break e;
            case Xl:
              s = 11;
              break e;
            case Zl:
              s = 14;
              break e;
            case Ct:
              (s = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Be(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function ln(e, t, n, r) {
  return (e = Be(7, e, r, t)), (e.lanes = n), e;
}
function No(e, t, n, r) {
  return (
    (e = Be(22, e, r, t)),
    (e.elementType = _f),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function vs(e, t, n) {
  return (e = Be(6, e, null, t)), (e.lanes = n), e;
}
function xs(e, t, n) {
  return (
    (t = Be(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function kg(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = bo(0)),
    (this.expirationTimes = bo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = bo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Ra(e, t, n, r, i, o, s, l, a) {
  return (
    (e = new kg(e, t, n, l, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Be(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ha(o),
    e
  );
}
function Pg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Cn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Rp(e) {
  if (!e) return Bt;
  e = e._reactInternals;
  e: {
    if (mn(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ee(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ee(n)) return Vd(e, n, t);
  }
  return t;
}
function Dp(e, t, n, r, i, o, s, l, a) {
  return (
    (e = Ra(n, r, !0, e, i, o, s, l, a)),
    (e.context = Rp(null)),
    (n = e.current),
    (r = ye()),
    (i = Ft(n)),
    (o = dt(r, i)),
    (o.callback = t ?? null),
    Nt(n, o, i),
    (e.current.lanes = i),
    br(e, i, r),
    Le(e, r),
    e
  );
}
function jo(e, t, n, r) {
  var i = t.current,
    o = ye(),
    s = Ft(i);
  return (
    (n = Rp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = dt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Nt(i, t, s)),
    e !== null && (Xe(e, i, s, o), ji(e, i, s)),
    s
  );
}
function po(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function fc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Da(e, t) {
  fc(e, t), (e = e.alternate) && fc(e, t);
}
function Tg() {
  return null;
}
var Np =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Na(e) {
  this._internalRoot = e;
}
Fo.prototype.render = Na.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  jo(e, t, null, null);
};
Fo.prototype.unmount = Na.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    dn(function () {
      jo(null, e, null, null);
    }),
      (t[gt] = null);
  }
};
function Fo(e) {
  this._internalRoot = e;
}
Fo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ud();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++);
    Tt.splice(n, 0, e), n === 0 && fd(e);
  }
};
function ja(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Io(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function dc() {}
function Eg(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = po(s);
        o.call(u);
      };
    }
    var s = Dp(t, r, e, 0, null, !1, !1, "", dc);
    return (
      (e._reactRootContainer = s),
      (e[gt] = s.current),
      Br(e.nodeType === 8 ? e.parentNode : e),
      dn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = po(a);
      l.call(u);
    };
  }
  var a = Ra(e, 0, !1, null, null, !1, !1, "", dc);
  return (
    (e._reactRootContainer = a),
    (e[gt] = a.current),
    Br(e.nodeType === 8 ? e.parentNode : e),
    dn(function () {
      jo(t, a, n, r);
    }),
    a
  );
}
function Oo(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = po(s);
        l.call(a);
      };
    }
    jo(t, s, e, i);
  } else s = Eg(n, t, e, i, r);
  return po(s);
}
ld = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = hr(t.pendingLanes);
        n !== 0 &&
          (bl(t, n | 1), Le(t, ee()), !(O & 6) && ((Zn = ee() + 500), Yt()));
      }
      break;
    case 13:
      dn(function () {
        var r = yt(e, 1);
        if (r !== null) {
          var i = ye();
          Xe(r, e, 1, i);
        }
      }),
        Da(e, 1);
  }
};
ea = function (e) {
  if (e.tag === 13) {
    var t = yt(e, 134217728);
    if (t !== null) {
      var n = ye();
      Xe(t, e, 134217728, n);
    }
    Da(e, 134217728);
  }
};
ad = function (e) {
  if (e.tag === 13) {
    var t = Ft(e),
      n = yt(e, t);
    if (n !== null) {
      var r = ye();
      Xe(n, e, t, r);
    }
    Da(e, t);
  }
};
ud = function () {
  return z;
};
cd = function (e, t) {
  var n = z;
  try {
    return (z = e), t();
  } finally {
    z = n;
  }
};
Ks = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Us(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Lo(r);
            if (!i) throw Error(C(90));
            Uf(r), Us(r, i);
          }
        }
      }
      break;
    case "textarea":
      Wf(e, n);
      break;
    case "select":
      (t = n.value), t != null && zn(e, !!n.multiple, t, !1);
  }
};
Zf = La;
Jf = dn;
var Lg = { usingClientEntryPoint: !1, Events: [ti, Ln, Lo, Kf, Xf, La] },
  ur = {
    findFiberByHostInstance: tn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Ag = {
    bundleType: ur.bundleType,
    version: ur.version,
    rendererPackageName: ur.rendererPackageName,
    rendererConfig: ur.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: xt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ed(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ur.findFiberByHostInstance || Tg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Pi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Pi.isDisabled && Pi.supportsFiber)
    try {
      (ko = Pi.inject(Ag)), (rt = Pi);
    } catch {}
}
je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lg;
je.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ja(t)) throw Error(C(200));
  return Pg(e, t, null, n);
};
je.createRoot = function (e, t) {
  if (!ja(e)) throw Error(C(299));
  var n = !1,
    r = "",
    i = Np;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Ra(e, 1, !1, null, null, n, !1, r, i)),
    (e[gt] = t.current),
    Br(e.nodeType === 8 ? e.parentNode : e),
    new Na(t)
  );
};
je.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = ed(t)), (e = e === null ? null : e.stateNode), e;
};
je.flushSync = function (e) {
  return dn(e);
};
je.hydrate = function (e, t, n) {
  if (!Io(t)) throw Error(C(200));
  return Oo(null, e, t, !0, n);
};
je.hydrateRoot = function (e, t, n) {
  if (!ja(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Np;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Dp(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[gt] = t.current),
    Br(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Fo(t);
};
je.render = function (e, t, n) {
  if (!Io(t)) throw Error(C(200));
  return Oo(null, e, t, !1, n);
};
je.unmountComponentAtNode = function (e) {
  if (!Io(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (dn(function () {
        Oo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[gt] = null);
        });
      }),
      !0)
    : !1;
};
je.unstable_batchedUpdates = La;
je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Io(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Oo(e, t, n, !1, r);
};
je.version = "18.2.0-next-9e3b772b8-20220608";
function jp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jp);
    } catch (e) {
      console.error(e);
    }
}
jp(), (Df.exports = je);
var Mg = Df.exports,
  pc = Mg;
(js.createRoot = pc.createRoot), (js.hydrateRoot = pc.hydrateRoot);
const Fa = S.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  zo = S.createContext({}),
  _o = S.createContext(null),
  Bo = typeof document < "u",
  Uo = Bo ? S.useLayoutEffect : S.useEffect,
  Fp = S.createContext({ strict: !1 });
function Vg(e, t, n, r) {
  const { visualElement: i } = S.useContext(zo),
    o = S.useContext(Fp),
    s = S.useContext(_o),
    l = S.useContext(Fa).reducedMotion,
    a = S.useRef();
  (r = r || o.renderer),
    !a.current &&
      r &&
      (a.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: l,
      }));
  const u = a.current;
  S.useInsertionEffect(() => {
    u && u.update(n, s);
  });
  const c = S.useRef(!!window.HandoffAppearAnimations);
  return (
    Uo(() => {
      u &&
        (u.render(),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    S.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        (window.HandoffAppearAnimations = void 0),
        (c.current = !1));
    }),
    u
  );
}
function jn(e) {
  return (
    typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Rg(e, t, n) {
  return S.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : jn(n) && (n.current = r));
    },
    [t]
  );
}
function Xr(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ho(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Ia = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Oa = ["initial", ...Ia];
function Wo(e) {
  return Ho(e.animate) || Oa.some((t) => Xr(e[t]));
}
function Ip(e) {
  return !!(Wo(e) || e.variants);
}
function Dg(e, t) {
  if (Wo(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Xr(n) ? n : void 0,
      animate: Xr(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Ng(e) {
  const { initial: t, animate: n } = Dg(e, S.useContext(zo));
  return S.useMemo(() => ({ initial: t, animate: n }), [hc(t), hc(n)]);
}
function hc(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const mc = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Zr = {};
for (const e in mc) Zr[e] = { isEnabled: (t) => mc[e].some((n) => !!t[n]) };
function jg(e) {
  for (const t in e) Zr[t] = { ...Zr[t], ...e[t] };
}
const za = S.createContext({}),
  Op = S.createContext({}),
  Fg = Symbol.for("motionComponentSymbol");
function Ig({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && jg(e);
  function o(l, a) {
    let u;
    const c = { ...S.useContext(Fa), ...l, layoutId: Og(l) },
      { isStatic: f } = c,
      d = Ng(l),
      h = r(l, f);
    if (!f && Bo) {
      d.visualElement = Vg(i, h, c, t);
      const y = S.useContext(Op),
        v = S.useContext(Fp).strict;
      d.visualElement && (u = d.visualElement.loadFeatures(c, v, e, y));
    }
    return S.createElement(
      zo.Provider,
      { value: d },
      u && d.visualElement
        ? S.createElement(u, { visualElement: d.visualElement, ...c })
        : null,
      n(i, l, Rg(h, d.visualElement, a), h, f, d.visualElement)
    );
  }
  const s = S.forwardRef(o);
  return (s[Fg] = i), s;
}
function Og({ layoutId: e }) {
  const t = S.useContext(za).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function zg(e) {
  function t(r, i = {}) {
    return Ig(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const _g = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function _a(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(_g.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const ho = {};
function Bg(e) {
  Object.assign(ho, e);
}
const ri = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  gn = new Set(ri);
function zp(e, { layout: t, layoutId: n }) {
  return (
    gn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!ho[e] || e === "opacity"))
  );
}
const ve = (e) => !!(e && e.getVelocity),
  Ug = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Hg = ri.length;
function Wg(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let o = "";
  for (let s = 0; s < Hg; s++) {
    const l = ri[s];
    if (e[l] !== void 0) {
      const a = Ug[l] || l;
      o += `${a}(${e[l]}) `;
    }
  }
  return (
    t && !e.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
    o
  );
}
const _p = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Bp = _p("--"),
  Ll = _p("var(--"),
  Qg =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  Yg = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Ut = (e, t, n) => Math.min(Math.max(n, e), t),
  yn = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Er = { ...yn, transform: (e) => Ut(0, 1, e) },
  Ti = { ...yn, default: 1 },
  Lr = (e) => Math.round(e * 1e5) / 1e5,
  Qo = /(-)?([\d]*\.?[\d])+/g,
  Up =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  Gg =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ii(e) {
  return typeof e == "string";
}
const oi = (e) => ({
    test: (t) => ii(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  St = oi("deg"),
  ot = oi("%"),
  V = oi("px"),
  $g = oi("vh"),
  Kg = oi("vw"),
  gc = {
    ...ot,
    parse: (e) => ot.parse(e) / 100,
    transform: (e) => ot.transform(e * 100),
  },
  yc = { ...yn, transform: Math.round },
  Hp = {
    borderWidth: V,
    borderTopWidth: V,
    borderRightWidth: V,
    borderBottomWidth: V,
    borderLeftWidth: V,
    borderRadius: V,
    radius: V,
    borderTopLeftRadius: V,
    borderTopRightRadius: V,
    borderBottomRightRadius: V,
    borderBottomLeftRadius: V,
    width: V,
    maxWidth: V,
    height: V,
    maxHeight: V,
    size: V,
    top: V,
    right: V,
    bottom: V,
    left: V,
    padding: V,
    paddingTop: V,
    paddingRight: V,
    paddingBottom: V,
    paddingLeft: V,
    margin: V,
    marginTop: V,
    marginRight: V,
    marginBottom: V,
    marginLeft: V,
    rotate: St,
    rotateX: St,
    rotateY: St,
    rotateZ: St,
    scale: Ti,
    scaleX: Ti,
    scaleY: Ti,
    scaleZ: Ti,
    skew: St,
    skewX: St,
    skewY: St,
    distance: V,
    translateX: V,
    translateY: V,
    translateZ: V,
    x: V,
    y: V,
    z: V,
    perspective: V,
    transformPerspective: V,
    opacity: Er,
    originX: gc,
    originY: gc,
    originZ: V,
    zIndex: yc,
    fillOpacity: Er,
    strokeOpacity: Er,
    numOctaves: yc,
  };
function Ba(e, t, n, r) {
  const { style: i, vars: o, transform: s, transformOrigin: l } = e;
  let a = !1,
    u = !1,
    c = !0;
  for (const f in t) {
    const d = t[f];
    if (Bp(f)) {
      o[f] = d;
      continue;
    }
    const h = Hp[f],
      y = Yg(d, h);
    if (gn.has(f)) {
      if (((a = !0), (s[f] = y), !c)) continue;
      d !== (h.default || 0) && (c = !1);
    } else f.startsWith("origin") ? ((u = !0), (l[f] = y)) : (i[f] = y);
  }
  if (
    (t.transform ||
      (a || r
        ? (i.transform = Wg(e.transform, n, c, r))
        : i.transform && (i.transform = "none")),
    u)
  ) {
    const { originX: f = "50%", originY: d = "50%", originZ: h = 0 } = l;
    i.transformOrigin = `${f} ${d} ${h}`;
  }
}
const Ua = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Wp(e, t, n) {
  for (const r in t) !ve(t[r]) && !zp(r, n) && (e[r] = t[r]);
}
function Xg({ transformTemplate: e }, t, n) {
  return S.useMemo(() => {
    const r = Ua();
    return (
      Ba(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function Zg(e, t, n) {
  const r = e.style || {},
    i = {};
  return (
    Wp(i, r, e),
    Object.assign(i, Xg(e, t, n)),
    e.transformValues ? e.transformValues(i) : i
  );
}
function Jg(e, t, n) {
  const r = {},
    i = Zg(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const qg = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport",
]);
function mo(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    qg.has(e)
  );
}
let Qp = (e) => !mo(e);
function bg(e) {
  e && (Qp = (t) => (t.startsWith("on") ? !mo(t) : e(t)));
}
try {
  bg(require("@emotion/is-prop-valid").default);
} catch {}
function ey(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Qp(i) ||
        (n === !0 && mo(i)) ||
        (!t && !mo(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function vc(e, t, n) {
  return typeof e == "string" ? e : V.transform(t + n * e);
}
function ty(e, t, n) {
  const r = vc(t, e.x, e.width),
    i = vc(n, e.y, e.height);
  return `${r} ${i}`;
}
const ny = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  ry = { offset: "strokeDashoffset", array: "strokeDasharray" };
function iy(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? ny : ry;
  e[o.offset] = V.transform(-r);
  const s = V.transform(t),
    l = V.transform(n);
  e[o.array] = `${s} ${l}`;
}
function Ha(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: l = 1,
    pathOffset: a = 0,
    ...u
  },
  c,
  f,
  d
) {
  if ((Ba(e, u, c, d), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: h, style: y, dimensions: v } = e;
  h.transform && (v && (y.transform = h.transform), delete h.transform),
    v &&
      (i !== void 0 || o !== void 0 || y.transform) &&
      (y.transformOrigin = ty(
        v,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    s !== void 0 && iy(h, s, l, a, !1);
}
const Yp = () => ({ ...Ua(), attrs: {} }),
  Wa = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function oy(e, t, n, r) {
  const i = S.useMemo(() => {
    const o = Yp();
    return (
      Ha(o, t, { enableHardwareAcceleration: !1 }, Wa(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    Wp(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function sy(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const a = (_a(n) ? oy : Jg)(r, o, s, n),
      c = { ...ey(r, typeof n == "string", e), ...a, ref: i },
      { children: f } = r,
      d = S.useMemo(() => (ve(f) ? f.get() : f), [f]);
    return S.createElement(n, { ...c, children: d });
  };
}
const Qa = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function Gp(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const $p = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Kp(e, t, n, r) {
  Gp(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute($p.has(i) ? i : Qa(i), t.attrs[i]);
}
function Ya(e, t) {
  const { style: n } = e,
    r = {};
  for (const i in n)
    (ve(n[i]) || (t.style && ve(t.style[i])) || zp(i, e)) && (r[i] = n[i]);
  return r;
}
function Xp(e, t) {
  const n = Ya(e, t);
  for (const r in e)
    if (ve(e[r]) || ve(t[r])) {
      const i =
        ri.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[i] = e[r];
    }
  return n;
}
function Ga(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
function tr(e) {
  const t = S.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const go = (e) => Array.isArray(e),
  ly = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  ay = (e) => (go(e) ? e[e.length - 1] || 0 : e);
function Ui(e) {
  const t = ve(e) ? e.get() : e;
  return ly(t) ? t.toValue() : t;
}
function uy(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o
) {
  const s = { latestValues: cy(r, i, o, e), renderState: t() };
  return n && (s.mount = (l) => n(r, l, s)), s;
}
const Zp = (e) => (t, n) => {
  const r = S.useContext(zo),
    i = S.useContext(_o),
    o = () => uy(e, t, r, i);
  return n ? o() : tr(o);
};
function cy(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const d in o) i[d] = Ui(o[d]);
  let { initial: s, animate: l } = e;
  const a = Wo(e),
    u = Ip(e);
  t &&
    u &&
    !a &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), l === void 0 && (l = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? l : s;
  return (
    f &&
      typeof f != "boolean" &&
      !Ho(f) &&
      (Array.isArray(f) ? f : [f]).forEach((h) => {
        const y = Ga(e, h);
        if (!y) return;
        const { transitionEnd: v, transition: E, ...g } = y;
        for (const p in g) {
          let m = g[p];
          if (Array.isArray(m)) {
            const x = c ? m.length - 1 : 0;
            m = m[x];
          }
          m !== null && (i[p] = m);
        }
        for (const p in v) i[p] = v[p];
      }),
    i
  );
}
const Z = (e) => e;
class xc {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function fy(e) {
  let t = new xc(),
    n = new xc(),
    r = 0,
    i = !1,
    o = !1;
  const s = new WeakSet(),
    l = {
      schedule: (a, u = !1, c = !1) => {
        const f = c && i,
          d = f ? t : n;
        return u && s.add(a), d.add(a) && f && i && (r = t.order.length), a;
      },
      cancel: (a) => {
        n.remove(a), s.delete(a);
      },
      process: (a) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let u = 0; u < r; u++) {
            const c = t.order[u];
            c(a), s.has(c) && (l.schedule(c), e());
          }
        (i = !1), o && ((o = !1), l.process(a));
      },
    };
  return l;
}
const Ei = ["prepare", "read", "update", "preRender", "render", "postRender"],
  dy = 40;
function py(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = Ei.reduce((f, d) => ((f[d] = fy(() => (n = !0))), f), {}),
    s = (f) => o[f].process(i),
    l = () => {
      const f = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, dy), 1)),
        (i.timestamp = f),
        (i.isProcessing = !0),
        Ei.forEach(s),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(l));
    },
    a = () => {
      (n = !0), (r = !0), i.isProcessing || e(l);
    };
  return {
    schedule: Ei.reduce((f, d) => {
      const h = o[d];
      return (f[d] = (y, v = !1, E = !1) => (n || a(), h.schedule(y, v, E))), f;
    }, {}),
    cancel: (f) => Ei.forEach((d) => o[d].cancel(f)),
    state: i,
    steps: o,
  };
}
const {
    schedule: _,
    cancel: st,
    state: oe,
    steps: ws,
  } = py(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Z, !0),
  hy = {
    useVisualState: Zp({
      scrapeMotionValuesFromProps: Xp,
      createRenderState: Yp,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        _.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          _.render(() => {
            Ha(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              Wa(t.tagName),
              e.transformTemplate
            ),
              Kp(t, n);
          });
      },
    }),
  },
  my = {
    useVisualState: Zp({
      scrapeMotionValuesFromProps: Ya,
      createRenderState: Ua,
    }),
  };
function gy(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(_a(e) ? hy : my),
    preloadedFeatures: n,
    useRender: sy(t),
    createVisualElement: r,
    Component: e,
  };
}
function ft(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const Jp = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Yo(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const yy = (e) => (t) => Jp(t) && e(t, Yo(t));
function pt(e, t, n, r) {
  return ft(e, t, yy(n), r);
}
const vy = (e, t) => (n) => t(e(n)),
  Ot = (...e) => e.reduce(vy);
function qp(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const wc = qp("dragHorizontal"),
  Sc = qp("dragVertical");
function bp(e) {
  let t = !1;
  if (e === "y") t = Sc();
  else if (e === "x") t = wc();
  else {
    const n = wc(),
      r = Sc();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function eh() {
  const e = bp(!0);
  return e ? (e(), !1) : !0;
}
class Gt {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function Cc(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    i = (o, s) => {
      if (o.type === "touch" || eh()) return;
      const l = e.getProps();
      e.animationState &&
        l.whileHover &&
        e.animationState.setActive("whileHover", t),
        l[r] && _.update(() => l[r](o, s));
    };
  return pt(e.current, n, i, { passive: !e.getProps()[r] });
}
class xy extends Gt {
  mount() {
    this.unmount = Ot(Cc(this.node, !0), Cc(this.node, !1));
  }
  unmount() {}
}
class wy extends Gt {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Ot(
      ft(this.node.current, "focus", () => this.onFocus()),
      ft(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const th = (e, t) => (t ? (e === t ? !0 : th(e, t.parentElement)) : !1);
function Ss(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Yo(n));
}
class Sy extends Gt {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Z),
      (this.removeEndListeners = Z),
      (this.removeAccessibleListeners = Z),
      (this.startPointerPress = (t, n) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const r = this.node.getProps(),
          o = pt(
            window,
            "pointerup",
            (l, a) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              _.update(() => {
                th(this.node.current, l.target) ? u && u(l, a) : c && c(l, a);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = pt(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = Ot(o, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const s = (l) => {
              l.key !== "Enter" ||
                !this.checkPressEnd() ||
                Ss("up", (a, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && _.update(() => c(a, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = ft(this.node.current, "keyup", s)),
              Ss("down", (l, a) => {
                this.startPress(l, a);
              });
          },
          n = ft(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Ss("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = ft(this.node.current, "blur", r);
        this.removeAccessibleListeners = Ot(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && _.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !eh()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && _.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = pt(this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      r = ft(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Ot(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Al = new WeakMap(),
  Cs = new WeakMap(),
  Cy = (e) => {
    const t = Al.get(e.target);
    t && t(e);
  },
  ky = (e) => {
    e.forEach(Cy);
  };
function Py({ root: e, ...t }) {
  const n = e || document;
  Cs.has(n) || Cs.set(n, {});
  const r = Cs.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(ky, { root: e, ...t })), r[i];
}
function Ty(e, t, n) {
  const r = Py(t);
  return (
    Al.set(e, n),
    r.observe(e),
    () => {
      Al.delete(e), r.unobserve(e);
    }
  );
}
const Ey = { some: 0, all: 1 };
class Ly extends Gt {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : Ey[i],
      },
      l = (a) => {
        const { isIntersecting: u } = a;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(a);
      };
    return Ty(this.node.current, s, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Ay(t, n)) && this.startObserver();
  }
  unmount() {}
}
function Ay({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const My = {
  inView: { Feature: Ly },
  tap: { Feature: Sy },
  focus: { Feature: wy },
  hover: { Feature: xy },
};
function nh(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Vy(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function Ry(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function Go(e, t, n) {
  const r = e.getProps();
  return Ga(r, t, n !== void 0 ? n : r.custom, Vy(e), Ry(e));
}
const Dy = "framerAppearId",
  Ny = "data-" + Qa(Dy);
let jy = Z,
  $a = Z;
const zt = (e) => e * 1e3,
  ht = (e) => e / 1e3,
  Fy = { current: !1 },
  rh = (e) => Array.isArray(e) && typeof e[0] == "number";
function ih(e) {
  return !!(
    !e ||
    (typeof e == "string" && oh[e]) ||
    rh(e) ||
    (Array.isArray(e) && e.every(ih))
  );
}
const gr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  oh = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: gr([0, 0.65, 0.55, 1]),
    circOut: gr([0.55, 0, 1, 0.45]),
    backIn: gr([0.31, 0.01, 0.66, -0.59]),
    backOut: gr([0.33, 1.53, 0.69, 0.99]),
  };
function sh(e) {
  if (e) return rh(e) ? gr(e) : Array.isArray(e) ? e.map(sh) : oh[e];
}
function Iy(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: l,
    times: a,
  } = {}
) {
  const u = { [t]: n };
  a && (u.offset = a);
  const c = sh(l);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
function Oy(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const lh = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  zy = 1e-7,
  _y = 12;
function By(e, t, n, r, i) {
  let o,
    s,
    l = 0;
  do (s = t + (n - t) / 2), (o = lh(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > zy && ++l < _y);
  return s;
}
function si(e, t, n, r) {
  if (e === t && n === r) return Z;
  const i = (o) => By(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : lh(i(o), t, r));
}
const Uy = si(0.42, 0, 1, 1),
  Hy = si(0, 0, 0.58, 1),
  ah = si(0.42, 0, 0.58, 1),
  Wy = (e) => Array.isArray(e) && typeof e[0] != "number",
  uh = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  ch = (e) => (t) => 1 - e(1 - t),
  fh = (e) => 1 - Math.sin(Math.acos(e)),
  Ka = ch(fh),
  Qy = uh(Ka),
  dh = si(0.33, 1.53, 0.69, 0.99),
  Xa = ch(dh),
  Yy = uh(Xa),
  Gy = (e) =>
    (e *= 2) < 1 ? 0.5 * Xa(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  $y = {
    linear: Z,
    easeIn: Uy,
    easeInOut: ah,
    easeOut: Hy,
    circIn: fh,
    circInOut: Qy,
    circOut: Ka,
    backIn: Xa,
    backInOut: Yy,
    backOut: dh,
    anticipate: Gy,
  },
  kc = (e) => {
    if (Array.isArray(e)) {
      $a(e.length === 4);
      const [t, n, r, i] = e;
      return si(t, n, r, i);
    } else if (typeof e == "string") return $y[e];
    return e;
  },
  Za = (e, t) => (n) =>
    !!(
      (ii(n) && Gg.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  ph = (e, t, n) => (r) => {
    if (!ii(r)) return r;
    const [i, o, s, l] = r.match(Qo);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  Ky = (e) => Ut(0, 255, e),
  ks = { ...yn, transform: (e) => Math.round(Ky(e)) },
  on = {
    test: Za("rgb", "red"),
    parse: ph("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      ks.transform(e) +
      ", " +
      ks.transform(t) +
      ", " +
      ks.transform(n) +
      ", " +
      Lr(Er.transform(r)) +
      ")",
  };
function Xy(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Ml = { test: Za("#"), parse: Xy, transform: on.transform },
  Fn = {
    test: Za("hsl", "hue"),
    parse: ph("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      ot.transform(Lr(t)) +
      ", " +
      ot.transform(Lr(n)) +
      ", " +
      Lr(Er.transform(r)) +
      ")",
  },
  me = {
    test: (e) => on.test(e) || Ml.test(e) || Fn.test(e),
    parse: (e) =>
      on.test(e) ? on.parse(e) : Fn.test(e) ? Fn.parse(e) : Ml.parse(e),
    transform: (e) =>
      ii(e) ? e : e.hasOwnProperty("red") ? on.transform(e) : Fn.transform(e),
  },
  Y = (e, t, n) => -n * e + n * t + e;
function Ps(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function Zy({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l;
    (i = Ps(a, l, e + 1 / 3)), (o = Ps(a, l, e)), (s = Ps(a, l, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
const Ts = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  Jy = [Ml, on, Fn],
  qy = (e) => Jy.find((t) => t.test(e));
function Pc(e) {
  const t = qy(e);
  let n = t.parse(e);
  return t === Fn && (n = Zy(n)), n;
}
const hh = (e, t) => {
  const n = Pc(e),
    r = Pc(t),
    i = { ...n };
  return (o) => (
    (i.red = Ts(n.red, r.red, o)),
    (i.green = Ts(n.green, r.green, o)),
    (i.blue = Ts(n.blue, r.blue, o)),
    (i.alpha = Y(n.alpha, r.alpha, o)),
    on.transform(i)
  );
};
function by(e) {
  var t, n;
  return (
    isNaN(e) &&
    ii(e) &&
    (((t = e.match(Qo)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(Up)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const mh = { regex: Qg, countKey: "Vars", token: "${v}", parse: Z },
  gh = { regex: Up, countKey: "Colors", token: "${c}", parse: me.parse },
  yh = { regex: Qo, countKey: "Numbers", token: "${n}", parse: yn.parse };
function Es(e, { regex: t, countKey: n, token: r, parse: i }) {
  const o = e.tokenised.match(t);
  o &&
    ((e["num" + n] = o.length),
    (e.tokenised = e.tokenised.replace(t, r)),
    e.values.push(...o.map(i)));
}
function yo(e) {
  const t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes("var(--") && Es(n, mh), Es(n, gh), Es(n, yh), n;
}
function vh(e) {
  return yo(e).values;
}
function xh(e) {
  const { values: t, numColors: n, numVars: r, tokenised: i } = yo(e),
    o = t.length;
  return (s) => {
    let l = i;
    for (let a = 0; a < o; a++)
      a < r
        ? (l = l.replace(mh.token, s[a]))
        : a < r + n
        ? (l = l.replace(gh.token, me.transform(s[a])))
        : (l = l.replace(yh.token, Lr(s[a])));
    return l;
  };
}
const ev = (e) => (typeof e == "number" ? 0 : e);
function tv(e) {
  const t = vh(e);
  return xh(e)(t.map(ev));
}
const Ht = {
    test: by,
    parse: vh,
    createTransformer: xh,
    getAnimatableNone: tv,
  },
  wh = (e, t) => (n) => `${n > 0 ? t : e}`;
function Sh(e, t) {
  return typeof e == "number"
    ? (n) => Y(e, t, n)
    : me.test(e)
    ? hh(e, t)
    : e.startsWith("var(")
    ? wh(e, t)
    : kh(e, t);
}
const Ch = (e, t) => {
    const n = [...e],
      r = n.length,
      i = e.map((o, s) => Sh(o, t[s]));
    return (o) => {
      for (let s = 0; s < r; s++) n[s] = i[s](o);
      return n;
    };
  },
  nv = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const i in n)
      e[i] !== void 0 && t[i] !== void 0 && (r[i] = Sh(e[i], t[i]));
    return (i) => {
      for (const o in r) n[o] = r[o](i);
      return n;
    };
  },
  kh = (e, t) => {
    const n = Ht.createTransformer(t),
      r = yo(e),
      i = yo(t);
    return r.numVars === i.numVars &&
      r.numColors === i.numColors &&
      r.numNumbers >= i.numNumbers
      ? Ot(Ch(r.values, i.values), n)
      : wh(e, t);
  },
  Jr = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Tc = (e, t) => (n) => Y(e, t, n);
function rv(e) {
  return typeof e == "number"
    ? Tc
    : typeof e == "string"
    ? me.test(e)
      ? hh
      : kh
    : Array.isArray(e)
    ? Ch
    : typeof e == "object"
    ? nv
    : Tc;
}
function iv(e, t, n) {
  const r = [],
    i = n || rv(e[0]),
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let l = i(e[s], e[s + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[s] || Z : t;
      l = Ot(a, l);
    }
    r.push(l);
  }
  return r;
}
function Ja(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if (($a(o === t.length), o === 1)) return () => t[0];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = iv(t, r, i),
    l = s.length,
    a = (u) => {
      let c = 0;
      if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = Jr(e[c], e[c + 1], u);
      return s[c](f);
    };
  return n ? (u) => a(Ut(e[0], e[o - 1], u)) : a;
}
function ov(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Jr(0, t, r);
    e.push(Y(n, 1, i));
  }
}
function sv(e) {
  const t = [0];
  return ov(t, e.length - 1), t;
}
function lv(e, t) {
  return e.map((n) => n * t);
}
function av(e, t) {
  return e.map(() => t || ah).splice(0, e.length - 1);
}
function vo({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = Wy(r) ? r.map(kc) : kc(r),
    o = { done: !1, value: t[0] },
    s = lv(n && n.length === t.length ? n : sv(t), e),
    l = Ja(s, t, { ease: Array.isArray(i) ? i : av(t, i) });
  return {
    calculatedDuration: e,
    next: (a) => ((o.value = l(a)), (o.done = a >= e), o),
  };
}
function Ph(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const uv = 5;
function Th(e, t, n) {
  const r = Math.max(t - uv, 0);
  return Ph(n - e(r), t - r);
}
const Ls = 0.001,
  cv = 0.01,
  Ec = 10,
  fv = 0.05,
  dv = 1;
function pv({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i, o;
  jy(e <= zt(Ec));
  let s = 1 - t;
  (s = Ut(fv, dv, s)),
    (e = Ut(cv, Ec, ht(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            h = Vl(u, s),
            y = Math.exp(-f);
          return Ls - (d / h) * y;
        }),
        (o = (u) => {
          const f = u * s * e,
            d = f * n + n,
            h = Math.pow(s, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-f),
            v = Vl(Math.pow(u, 2), s);
          return ((-i(u) + Ls > 0 ? -1 : 1) * ((d - h) * y)) / v;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -Ls + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const l = 5 / e,
    a = mv(i, o, l);
  if (((e = zt(e)), isNaN(a)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(a, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const hv = 12;
function mv(e, t, n) {
  let r = n;
  for (let i = 1; i < hv; i++) r = r - e(r) / t(r);
  return r;
}
function Vl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const gv = ["duration", "bounce"],
  yv = ["stiffness", "damping", "mass"];
function Lc(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function vv(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Lc(e, yv) && Lc(e, gv)) {
    const n = pv(e);
    (t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Eh({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: l,
      damping: a,
      mass: u,
      velocity: c,
      duration: f,
      isResolvedFromDuration: d,
    } = vv(r),
    h = c ? -ht(c) : 0,
    y = a / (2 * Math.sqrt(l * u)),
    v = o - i,
    E = ht(Math.sqrt(l / u)),
    g = Math.abs(v) < 5;
  n || (n = g ? 0.01 : 2), t || (t = g ? 0.005 : 0.5);
  let p;
  if (y < 1) {
    const m = Vl(E, y);
    p = (x) => {
      const w = Math.exp(-y * E * x);
      return (
        o - w * (((h + y * E * v) / m) * Math.sin(m * x) + v * Math.cos(m * x))
      );
    };
  } else if (y === 1) p = (m) => o - Math.exp(-E * m) * (v + (h + E * v) * m);
  else {
    const m = E * Math.sqrt(y * y - 1);
    p = (x) => {
      const w = Math.exp(-y * E * x),
        L = Math.min(m * x, 300);
      return (
        o - (w * ((h + y * E * v) * Math.sinh(L) + m * v * Math.cosh(L))) / m
      );
    };
  }
  return {
    calculatedDuration: (d && f) || null,
    next: (m) => {
      const x = p(m);
      if (d) s.done = m >= f;
      else {
        let w = h;
        m !== 0 && (y < 1 ? (w = Th(p, m, x)) : (w = 0));
        const L = Math.abs(w) <= n,
          P = Math.abs(o - x) <= t;
        s.done = L && P;
      }
      return (s.value = s.done ? o : x), s;
    },
  };
}
function Ac({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: l,
  max: a,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    h = (k) => (l !== void 0 && k < l) || (a !== void 0 && k > a),
    y = (k) =>
      l === void 0
        ? a
        : a === void 0 || Math.abs(l - k) < Math.abs(a - k)
        ? l
        : a;
  let v = n * t;
  const E = f + v,
    g = s === void 0 ? E : s(E);
  g !== E && (v = g - f);
  const p = (k) => -v * Math.exp(-k / r),
    m = (k) => g + p(k),
    x = (k) => {
      const R = p(k),
        D = m(k);
      (d.done = Math.abs(R) <= u), (d.value = d.done ? g : D);
    };
  let w, L;
  const P = (k) => {
    h(d.value) &&
      ((w = k),
      (L = Eh({
        keyframes: [d.value, y(d.value)],
        velocity: Th(m, k, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    P(0),
    {
      calculatedDuration: null,
      next: (k) => {
        let R = !1;
        return (
          !L && w === void 0 && ((R = !0), x(k), P(k)),
          w !== void 0 && k > w ? L.next(k - w) : (!R && x(k), d)
        );
      },
    }
  );
}
const xv = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => _.update(t, !0),
      stop: () => st(t),
      now: () => (oe.isProcessing ? oe.timestamp : performance.now()),
    };
  },
  Mc = 2e4;
function Vc(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Mc; ) (t += n), (r = e.next(t));
  return t >= Mc ? 1 / 0 : t;
}
const wv = { decay: Ac, inertia: Ac, tween: vo, keyframes: vo, spring: Eh };
function xo({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = xv,
  keyframes: r,
  type: i = "keyframes",
  repeat: o = 0,
  repeatDelay: s = 0,
  repeatType: l = "loop",
  onPlay: a,
  onStop: u,
  onComplete: c,
  onUpdate: f,
  ...d
}) {
  let h = 1,
    y = !1,
    v,
    E;
  const g = () => {
    E = new Promise((N) => {
      v = N;
    });
  };
  g();
  let p;
  const m = wv[i] || vo;
  let x;
  m !== vo &&
    typeof r[0] != "number" &&
    ((x = Ja([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const w = m({ ...d, keyframes: r });
  let L;
  l === "mirror" &&
    (L = m({
      ...d,
      keyframes: [...r].reverse(),
      velocity: -(d.velocity || 0),
    }));
  let P = "idle",
    k = null,
    R = null,
    D = null;
  w.calculatedDuration === null && o && (w.calculatedDuration = Vc(w));
  const { calculatedDuration: J } = w;
  let Se = 1 / 0,
    Ce = 1 / 0;
  J !== null && ((Se = J + s), (Ce = Se * (o + 1) - s));
  let q = 0;
  const b = (N) => {
      if (R === null) return;
      h > 0 && (R = Math.min(R, N)),
        h < 0 && (R = Math.min(N - Ce / h, R)),
        k !== null ? (q = k) : (q = Math.round(N - R) * h);
      const W = q - t * (h >= 0 ? 1 : -1),
        $t = h >= 0 ? W < 0 : W > Ce;
      (q = Math.max(W, 0)), P === "finished" && k === null && (q = Ce);
      let qe = q,
        vn = w;
      if (o) {
        const $o = q / Se;
        let li = Math.floor($o),
          Xt = $o % 1;
        !Xt && $o >= 1 && (Xt = 1),
          Xt === 1 && li--,
          (li = Math.min(li, o + 1));
        const ru = !!(li % 2);
        ru &&
          (l === "reverse"
            ? ((Xt = 1 - Xt), s && (Xt -= s / Se))
            : l === "mirror" && (vn = L));
        let iu = Ut(0, 1, Xt);
        q > Ce && (iu = l === "reverse" && ru ? 1 : 0), (qe = iu * Se);
      }
      const Ae = $t ? { done: !1, value: r[0] } : vn.next(qe);
      x && (Ae.value = x(Ae.value));
      let { done: Kt } = Ae;
      !$t && J !== null && (Kt = h >= 0 ? q >= Ce : q <= 0);
      const rm = k === null && (P === "finished" || (P === "running" && Kt));
      return f && f(Ae.value), rm && A(), Ae;
    },
    Ie = () => {
      p && p.stop(), (p = void 0);
    },
    Je = () => {
      (P = "idle"), Ie(), v(), g(), (R = D = null);
    },
    A = () => {
      (P = "finished"), c && c(), Ie(), v();
    },
    j = () => {
      if (y) return;
      p || (p = n(b));
      const N = p.now();
      a && a(),
        k !== null ? (R = N - k) : (!R || P === "finished") && (R = N),
        P === "finished" && g(),
        (D = R),
        (k = null),
        (P = "running"),
        p.start();
    };
  e && j();
  const F = {
    then(N, W) {
      return E.then(N, W);
    },
    get time() {
      return ht(q);
    },
    set time(N) {
      (N = zt(N)),
        (q = N),
        k !== null || !p || h === 0 ? (k = N) : (R = p.now() - N / h);
    },
    get duration() {
      const N = w.calculatedDuration === null ? Vc(w) : w.calculatedDuration;
      return ht(N);
    },
    get speed() {
      return h;
    },
    set speed(N) {
      N === h || !p || ((h = N), (F.time = ht(q)));
    },
    get state() {
      return P;
    },
    play: j,
    pause: () => {
      (P = "paused"), (k = q);
    },
    stop: () => {
      (y = !0), P !== "idle" && ((P = "idle"), u && u(), Je());
    },
    cancel: () => {
      D !== null && b(D), Je();
    },
    complete: () => {
      P = "finished";
    },
    sample: (N) => ((R = 0), b(N)),
  };
  return F;
}
function Sv(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Cv = Sv(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  kv = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  Li = 10,
  Pv = 2e4,
  Tv = (e, t) => t.type === "spring" || e === "backgroundColor" || !ih(t.ease);
function Ev(e, t, { onUpdate: n, onComplete: r, ...i }) {
  if (
    !(
      Cv() &&
      kv.has(t) &&
      !i.repeatDelay &&
      i.repeatType !== "mirror" &&
      i.damping !== 0 &&
      i.type !== "inertia"
    )
  )
    return !1;
  let s = !1,
    l,
    a;
  const u = () => {
    a = new Promise((p) => {
      l = p;
    });
  };
  u();
  let { keyframes: c, duration: f = 300, ease: d, times: h } = i;
  if (Tv(t, i)) {
    const p = xo({ ...i, repeat: 0, delay: 0 });
    let m = { done: !1, value: c[0] };
    const x = [];
    let w = 0;
    for (; !m.done && w < Pv; ) (m = p.sample(w)), x.push(m.value), (w += Li);
    (h = void 0), (c = x), (f = w - Li), (d = "linear");
  }
  const y = Iy(e.owner.current, t, c, { ...i, duration: f, ease: d, times: h });
  i.syncStart &&
    (y.startTime = oe.isProcessing
      ? oe.timestamp
      : document.timeline
      ? document.timeline.currentTime
      : performance.now());
  const v = () => y.cancel(),
    E = () => {
      _.update(v), l(), u();
    };
  return (
    (y.onfinish = () => {
      e.set(Oy(c, i)), r && r(), E();
    }),
    {
      then(p, m) {
        return a.then(p, m);
      },
      attachTimeline(p) {
        return (y.timeline = p), (y.onfinish = null), Z;
      },
      get time() {
        return ht(y.currentTime || 0);
      },
      set time(p) {
        y.currentTime = zt(p);
      },
      get speed() {
        return y.playbackRate;
      },
      set speed(p) {
        y.playbackRate = p;
      },
      get duration() {
        return ht(f);
      },
      play: () => {
        s || (y.play(), st(v));
      },
      pause: () => y.pause(),
      stop: () => {
        if (((s = !0), y.playState === "idle")) return;
        const { currentTime: p } = y;
        if (p) {
          const m = xo({ ...i, autoplay: !1 });
          e.setWithVelocity(m.sample(p - Li).value, m.sample(p).value, Li);
        }
        E();
      },
      complete: () => y.finish(),
      cancel: E,
    }
  );
}
function Lv({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const i = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: Z,
      pause: Z,
      stop: Z,
      then: (o) => (o(), Promise.resolve()),
      cancel: Z,
      complete: Z,
    }
  );
  return t
    ? xo({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i })
    : i();
}
const Av = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Mv = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Vv = { type: "keyframes", duration: 0.8 },
  Rv = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Dv = (e, { keyframes: t }) =>
    t.length > 2
      ? Vv
      : gn.has(e)
      ? e.startsWith("scale")
        ? Mv(t[1])
        : Av
      : Rv,
  Rl = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (Ht.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  Nv = new Set(["brightness", "contrast", "saturate", "opacity"]);
function jv(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Qo) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = Nv.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const Fv = /([a-z-]*)\(.*?\)/g,
  Dl = {
    ...Ht,
    getAnimatableNone: (e) => {
      const t = e.match(Fv);
      return t ? t.map(jv).join(" ") : e;
    },
  },
  Iv = {
    ...Hp,
    color: me,
    backgroundColor: me,
    outlineColor: me,
    fill: me,
    stroke: me,
    borderColor: me,
    borderTopColor: me,
    borderRightColor: me,
    borderBottomColor: me,
    borderLeftColor: me,
    filter: Dl,
    WebkitFilter: Dl,
  },
  qa = (e) => Iv[e];
function Lh(e, t) {
  let n = qa(e);
  return (
    n !== Dl && (n = Ht), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const Ah = (e) => /^0[^.\s]+$/.test(e);
function Ov(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || Ah(e);
}
function zv(e, t, n, r) {
  const i = Rl(t, n);
  let o;
  Array.isArray(n) ? (o = [...n]) : (o = [null, n]);
  const s = r.from !== void 0 ? r.from : e.get();
  let l;
  const a = [];
  for (let u = 0; u < o.length; u++)
    o[u] === null && (o[u] = u === 0 ? s : o[u - 1]),
      Ov(o[u]) && a.push(u),
      typeof o[u] == "string" && o[u] !== "none" && o[u] !== "0" && (l = o[u]);
  if (i && a.length && l)
    for (let u = 0; u < a.length; u++) {
      const c = a[u];
      o[c] = Lh(t, l);
    }
  return o;
}
function _v({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: l,
  from: a,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function Mh(e, t) {
  return e[t] || e.default || e;
}
const ba =
  (e, t, n, r = {}) =>
  (i) => {
    const o = Mh(r, e) || {},
      s = o.delay || r.delay || 0;
    let { elapsed: l = 0 } = r;
    l = l - zt(s);
    const a = zv(t, e, n, o),
      u = a[0],
      c = a[a.length - 1],
      f = Rl(e, u),
      d = Rl(e, c);
    let h = {
      keyframes: a,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...o,
      delay: -l,
      onUpdate: (y) => {
        t.set(y), o.onUpdate && o.onUpdate(y);
      },
      onComplete: () => {
        i(), o.onComplete && o.onComplete();
      },
    };
    if (
      (_v(o) || (h = { ...h, ...Dv(e, h) }),
      h.duration && (h.duration = zt(h.duration)),
      h.repeatDelay && (h.repeatDelay = zt(h.repeatDelay)),
      !f || !d || Fy.current || o.type === !1)
    )
      return Lv(h);
    if (
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate
    ) {
      const y = Ev(t, e, h);
      if (y) return y;
    }
    return xo(h);
  };
function wo(e) {
  return !!(ve(e) && e.add);
}
const Vh = (e) => /^\-?\d*\.?\d+$/.test(e);
function eu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function tu(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function Bv([...e], t, n) {
  const r = t < 0 ? e.length + t : t;
  if (r >= 0 && r < e.length) {
    const i = n < 0 ? e.length + n : n,
      [o] = e.splice(t, 1);
    e.splice(i, 0, o);
  }
  return e;
}
class nu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return eu(this.subscriptions, t), () => tu(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Uv = (e) => !isNaN(parseFloat(e)),
  Ar = { current: void 0 };
class Hv {
  constructor(t, n = {}) {
    (this.version = "10.16.4"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: o, timestamp: s } = oe;
        this.lastUpdated !== s &&
          ((this.timeDelta = o),
          (this.lastUpdated = s),
          _.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => _.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = Uv(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new nu());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            _.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return Ar.current && Ar.current.push(this), this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? Ph(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function pn(e, t) {
  return new Hv(e, t);
}
const Rh = (e) => (t) => t.test(e),
  Wv = { test: (e) => e === "auto", parse: (e) => e },
  Dh = [yn, V, ot, St, Kg, $g, Wv],
  cr = (e) => Dh.find(Rh(e)),
  Qv = [...Dh, me, Ht],
  Yv = (e) => Qv.find(Rh(e));
function Gv(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, pn(n));
}
function $v(e, t) {
  const n = Go(e, t);
  let {
    transitionEnd: r = {},
    transition: i = {},
    ...o
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  o = { ...o, ...r };
  for (const s in o) {
    const l = ay(o[s]);
    Gv(e, s, l);
  }
}
function Kv(e, t, n) {
  var r, i;
  const o = Object.keys(t).filter((l) => !e.hasValue(l)),
    s = o.length;
  if (s)
    for (let l = 0; l < s; l++) {
      const a = o[l],
        u = t[a];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (i = (r = n[a]) !== null && r !== void 0 ? r : e.readValue(a)) !==
              null && i !== void 0
              ? i
              : t[a]),
        c != null &&
          (typeof c == "string" && (Vh(c) || Ah(c))
            ? (c = parseFloat(c))
            : !Yv(c) && Ht.test(u) && (c = Lh(a, u)),
          e.addValue(a, pn(c, { owner: e })),
          n[a] === void 0 && (n[a] = c),
          c !== null && e.setBaseTarget(a, c));
    }
}
function Xv(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function Zv(e, t, n) {
  const r = {};
  for (const i in e) {
    const o = Xv(i, t);
    if (o !== void 0) r[i] = o;
    else {
      const s = n.getValue(i);
      s && (r[i] = s.get());
    }
  }
  return r;
}
function Jv({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Nh(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let {
    transition: o = e.getDefaultTransition(),
    transitionEnd: s,
    ...l
  } = e.makeTargetAnimatable(t);
  const a = e.getValue("willChange");
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in l) {
    const d = e.getValue(f),
      h = l[f];
    if (!d || h === void 0 || (c && Jv(c, f))) continue;
    const y = { delay: n, elapsed: 0, ...o };
    if (window.HandoffAppearAnimations && !d.hasAnimated) {
      const E = e.getProps()[Ny];
      E &&
        ((y.elapsed = window.HandoffAppearAnimations(E, f, d, _)),
        (y.syncStart = !0));
    }
    d.start(ba(f, d, h, e.shouldReduceMotion && gn.has(f) ? { type: !1 } : y));
    const v = d.animation;
    wo(a) && (a.add(f), v.then(() => a.remove(f))), u.push(v);
  }
  return (
    s &&
      Promise.all(u).then(() => {
        s && $v(e, s);
      }),
    u
  );
}
function Nl(e, t, n = {}) {
  const r = Go(e, t, n.custom);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(Nh(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (a = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: f,
            } = i;
            return qv(e, t, u + a, c, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [a, u] = l === "beforeChildren" ? [o, s] : [s, o];
    return a().then(() => u());
  } else return Promise.all([o(), s(n.delay)]);
}
function qv(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    l = (e.variantChildren.size - 1) * r,
    a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(bv)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            Nl(u, t, { ...o, delay: n + a(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function bv(e, t) {
  return e.sortNodePosition(t);
}
function e1(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => Nl(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Nl(e, t, n);
  else {
    const i = typeof t == "function" ? Go(e, t, n.custom) : t;
    r = Promise.all(Nh(e, i, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const t1 = [...Ia].reverse(),
  n1 = Ia.length;
function r1(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => e1(e, n, r)));
}
function i1(e) {
  let t = r1(e);
  const n = s1();
  let r = !0;
  const i = (a, u) => {
    const c = Go(e, u);
    if (c) {
      const { transition: f, transitionEnd: d, ...h } = c;
      a = { ...a, ...h, ...d };
    }
    return a;
  };
  function o(a) {
    t = a(e);
  }
  function s(a, u) {
    const c = e.getProps(),
      f = e.getVariantContext(!0) || {},
      d = [],
      h = new Set();
    let y = {},
      v = 1 / 0;
    for (let g = 0; g < n1; g++) {
      const p = t1[g],
        m = n[p],
        x = c[p] !== void 0 ? c[p] : f[p],
        w = Xr(x),
        L = p === u ? m.isActive : null;
      L === !1 && (v = g);
      let P = x === f[p] && x !== c[p] && w;
      if (
        (P && r && e.manuallyAnimateOnMount && (P = !1),
        (m.protectedKeys = { ...y }),
        (!m.isActive && L === null) ||
          (!x && !m.prevProp) ||
          Ho(x) ||
          typeof x == "boolean")
      )
        continue;
      const k = o1(m.prevProp, x);
      let R = k || (p === u && m.isActive && !P && w) || (g > v && w);
      const D = Array.isArray(x) ? x : [x];
      let J = D.reduce(i, {});
      L === !1 && (J = {});
      const { prevResolvedValues: Se = {} } = m,
        Ce = { ...Se, ...J },
        q = (b) => {
          (R = !0), h.delete(b), (m.needsAnimating[b] = !0);
        };
      for (const b in Ce) {
        const Ie = J[b],
          Je = Se[b];
        y.hasOwnProperty(b) ||
          (Ie !== Je
            ? go(Ie) && go(Je)
              ? !nh(Ie, Je) || k
                ? q(b)
                : (m.protectedKeys[b] = !0)
              : Ie !== void 0
              ? q(b)
              : h.add(b)
            : Ie !== void 0 && h.has(b)
            ? q(b)
            : (m.protectedKeys[b] = !0));
      }
      (m.prevProp = x),
        (m.prevResolvedValues = J),
        m.isActive && (y = { ...y, ...J }),
        r && e.blockInitialAnimation && (R = !1),
        R &&
          !P &&
          d.push(
            ...D.map((b) => ({ animation: b, options: { type: p, ...a } }))
          );
    }
    if (h.size) {
      const g = {};
      h.forEach((p) => {
        const m = e.getBaseTarget(p);
        m !== void 0 && (g[p] = m);
      }),
        d.push({ animation: g });
    }
    let E = !!d.length;
    return (
      r && c.initial === !1 && !e.manuallyAnimateOnMount && (E = !1),
      (r = !1),
      E ? t(d) : Promise.resolve()
    );
  }
  function l(a, u, c) {
    var f;
    if (n[a].isActive === u) return Promise.resolve();
    (f = e.variantChildren) === null ||
      f === void 0 ||
      f.forEach((h) => {
        var y;
        return (y = h.animationState) === null || y === void 0
          ? void 0
          : y.setActive(a, u);
      }),
      (n[a].isActive = u);
    const d = s(c, a);
    for (const h in n) n[h].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: l,
    setAnimateFunction: o,
    getState: () => n,
  };
}
function o1(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !nh(t, e) : !1;
}
function Zt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function s1() {
  return {
    animate: Zt(!0),
    whileInView: Zt(),
    whileHover: Zt(),
    whileTap: Zt(),
    whileDrag: Zt(),
    whileFocus: Zt(),
    exit: Zt(),
  };
}
class l1 extends Gt {
  constructor(t) {
    super(t), t.animationState || (t.animationState = i1(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Ho(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let a1 = 0;
class u1 extends Gt {
  constructor() {
    super(...arguments), (this.id = a1++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === i) return;
    const o = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const c1 = { animation: { Feature: l1 }, exit: { Feature: u1 } },
  Rc = (e, t) => Math.abs(e - t);
function f1(e, t) {
  const n = Rc(e.x, t.x),
    r = Rc(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class jh {
  constructor(t, n, { transformPagePoint: r } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = Ms(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          f = f1(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !f) return;
        const { point: d } = u,
          { timestamp: h } = oe;
        this.history.push({ ...d, timestamp: h });
        const { onStart: y, onMove: v } = this.handlers;
        c ||
          (y && y(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          v && v(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, c) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = As(c, this.transformPagePoint)),
          _.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const { onEnd: f, onSessionEnd: d } = this.handlers,
          h = Ms(
            u.type === "pointercancel"
              ? this.lastMoveEventInfo
              : As(c, this.transformPagePoint),
            this.history
          );
        this.startEvent && f && f(u, h), d && d(u, h);
      }),
      !Jp(t))
    )
      return;
    (this.handlers = n), (this.transformPagePoint = r);
    const i = Yo(t),
      o = As(i, this.transformPagePoint),
      { point: s } = o,
      { timestamp: l } = oe;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: a } = n;
    a && a(t, Ms(o, this.history)),
      (this.removeListeners = Ot(
        pt(window, "pointermove", this.handlePointerMove),
        pt(window, "pointerup", this.handlePointerUp),
        pt(window, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), st(this.updatePoint);
  }
}
function As(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Dc(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ms({ point: e }, t) {
  return {
    point: e,
    delta: Dc(e, Fh(t)),
    offset: Dc(e, d1(t)),
    velocity: p1(t, 0.1),
  };
}
function d1(e) {
  return e[0];
}
function Fh(e) {
  return e[e.length - 1];
}
function p1(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Fh(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > zt(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = ht(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Ne(e) {
  return e.max - e.min;
}
function jl(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Nc(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = Y(t.min, t.max, e.origin)),
    (e.scale = Ne(n) / Ne(t)),
    (jl(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = Y(n.min, n.max, e.origin) - e.originPoint),
    (jl(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Mr(e, t, n, r) {
  Nc(e.x, t.x, n.x, r ? r.originX : void 0),
    Nc(e.y, t.y, n.y, r ? r.originY : void 0);
}
function jc(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Ne(t));
}
function h1(e, t, n) {
  jc(e.x, t.x, n.x), jc(e.y, t.y, n.y);
}
function Fc(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Ne(t));
}
function Vr(e, t, n) {
  Fc(e.x, t.x, n.x), Fc(e.y, t.y, n.y);
}
function m1(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Y(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Y(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Ic(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function g1(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Ic(e.x, n, i), y: Ic(e.y, t, r) };
}
function Oc(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function y1(e, t) {
  return { x: Oc(e.x, t.x), y: Oc(e.y, t.y) };
}
function v1(e, t) {
  let n = 0.5;
  const r = Ne(e),
    i = Ne(t);
  return (
    i > r
      ? (n = Jr(t.min, t.max - r, e.min))
      : r > i && (n = Jr(e.min, e.max - i, t.min)),
    Ut(0, 1, n)
  );
}
function x1(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Fl = 0.35;
function w1(e = Fl) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Fl),
    { x: zc(e, "left", "right"), y: zc(e, "top", "bottom") }
  );
}
function zc(e, t, n) {
  return { min: _c(e, t), max: _c(e, n) };
}
function _c(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Bc = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  In = () => ({ x: Bc(), y: Bc() }),
  Uc = () => ({ min: 0, max: 0 }),
  te = () => ({ x: Uc(), y: Uc() });
function tt(e) {
  return [e("x"), e("y")];
}
function Ih({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function S1({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function C1(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Vs(e) {
  return e === void 0 || e === 1;
}
function Il({ scale: e, scaleX: t, scaleY: n }) {
  return !Vs(e) || !Vs(t) || !Vs(n);
}
function bt(e) {
  return Il(e) || Oh(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Oh(e) {
  return Hc(e.x) || Hc(e.y);
}
function Hc(e) {
  return e && e !== "0%";
}
function So(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Wc(e, t, n, r, i) {
  return i !== void 0 && (e = So(e, i, r)), So(e, n, r) + t;
}
function Ol(e, t = 0, n = 1, r, i) {
  (e.min = Wc(e.min, t, n, r, i)), (e.max = Wc(e.max, t, n, r, i));
}
function zh(e, { x: t, y: n }) {
  Ol(e.x, t.translate, t.scale, t.originPoint),
    Ol(e.y, n.translate, n.scale, n.originPoint);
}
function k1(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let l = 0; l < i; l++) {
    (o = n[l]), (s = o.projectionDelta);
    const a = o.instance;
    (a && a.style && a.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        On(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), zh(e, s)),
      r && bt(o.latestValues) && On(e, o.latestValues));
  }
  (t.x = Qc(t.x)), (t.y = Qc(t.y));
}
function Qc(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function Pt(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Yc(e, t, [n, r, i]) {
  const o = t[i] !== void 0 ? t[i] : 0.5,
    s = Y(e.min, e.max, o);
  Ol(e, t[n], t[r], s, t.scale);
}
const P1 = ["x", "scaleX", "originX"],
  T1 = ["y", "scaleY", "originY"];
function On(e, t) {
  Yc(e.x, t, P1), Yc(e.y, t, T1);
}
function _h(e, t) {
  return Ih(C1(e.getBoundingClientRect(), t));
}
function E1(e, t, n) {
  const r = _h(e, n),
    { scroll: i } = t;
  return i && (Pt(r.x, i.offset.x), Pt(r.y, i.offset.y)), r;
}
const L1 = new WeakMap();
class A1 {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = te()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (a) => {
        this.stopAnimation(), n && this.snapToCursor(Yo(a, "page").point);
      },
      o = (a, u) => {
        const { drag: c, dragPropagation: f, onDragStart: d } = this.getProps();
        if (
          c &&
          !f &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = bp(c)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          tt((y) => {
            let v = this.getAxisMotionValue(y).get() || 0;
            if (ot.test(v)) {
              const { projection: E } = this.visualElement;
              if (E && E.layout) {
                const g = E.layout.layoutBox[y];
                g && (v = Ne(g) * (parseFloat(v) / 100));
              }
            }
            this.originPoint[y] = v;
          }),
          d && _.update(() => d(a, u), !1, !0);
        const { animationState: h } = this.visualElement;
        h && h.setActive("whileDrag", !0);
      },
      s = (a, u) => {
        const {
          dragPropagation: c,
          dragDirectionLock: f,
          onDirectionLock: d,
          onDrag: h,
        } = this.getProps();
        if (!c && !this.openGlobalLock) return;
        const { offset: y } = u;
        if (f && this.currentDirection === null) {
          (this.currentDirection = M1(y)),
            this.currentDirection !== null && d && d(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, y),
          this.updateAxis("y", u.point, y),
          this.visualElement.render(),
          h && h(a, u);
      },
      l = (a, u) => this.stop(a, u);
    this.panSession = new jh(
      t,
      { onSessionStart: i, onStart: o, onMove: s, onSessionEnd: l },
      { transformPagePoint: this.visualElement.getTransformPagePoint() }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && _.update(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Ai(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = m1(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      { layout: r } = this.visualElement.projection || {},
      i = this.constraints;
    t && jn(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = g1(r.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = w1(n)),
      i !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        tt((o) => {
          this.getAxisMotionValue(o) &&
            (this.constraints[o] = x1(r.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !jn(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = E1(r, i.root, this.visualElement.getTransformPagePoint());
    let s = y1(i.layout.layoutBox, o);
    if (n) {
      const l = n(S1(s));
      (this.hasMutatedConstraints = !!l), l && (s = Ih(l));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: l,
      } = this.getProps(),
      a = this.constraints || {},
      u = tt((c) => {
        if (!Ai(c, n, this.currentDirection)) return;
        let f = (a && a[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          h = i ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(ba(t, r, 0, n));
  }
  stopAnimation() {
    tt((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    tt((n) => {
      const { drag: r } = this.getProps();
      if (!Ai(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: l } = i.layout.layoutBox[n];
        o.set(t[n] - Y(s, l, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!jn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    tt((s) => {
      const l = this.getAxisMotionValue(s);
      if (l) {
        const a = l.get();
        i[s] = v1({ min: a, max: a }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      tt((s) => {
        if (!Ai(s, t, null)) return;
        const l = this.getAxisMotionValue(s),
          { min: a, max: u } = this.constraints[s];
        l.set(Y(a, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    L1.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = pt(t, "pointerdown", (a) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(a);
      }),
      r = () => {
        const { dragConstraints: a } = this.getProps();
        jn(a) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const s = ft(window, "resize", () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        "didUpdate",
        ({ delta: a, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (tt((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += a[c].translate),
                f.set(f.get() + a[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), o(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = Fl,
        dragMomentum: l = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: l,
    };
  }
}
function Ai(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function M1(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class V1 extends Gt {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Z),
      (this.removeListeners = Z),
      (this.controls = new A1(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Z);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Gc = (e) => (t, n) => {
  e && _.update(() => e(t, n));
};
class R1 extends Gt {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Z);
  }
  onPointerDown(t) {
    this.session = new jh(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Gc(t),
      onStart: Gc(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && _.update(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = pt(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function D1() {
  const e = S.useContext(_o);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = S.useId();
  return S.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const Hi = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function $c(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const fr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (V.test(e)) e = parseFloat(e);
        else return e;
      const n = $c(e, t.target.x),
        r = $c(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  N1 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Ht.parse(e);
      if (i.length > 5) return r;
      const o = Ht.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        l = n.x.scale * t.x,
        a = n.y.scale * t.y;
      (i[0 + s] /= l), (i[1 + s] /= a);
      const u = Y(l, a, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  };
class j1 extends Ql.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    Bg(F1),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Hi.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              _.postRender(() => {
                const l = s.getStack();
                (!l || !l.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Bh(e) {
  const [t, n] = D1(),
    r = S.useContext(za);
  return Ql.createElement(j1, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: S.useContext(Op),
    isPresent: t,
    safeToRemove: n,
  });
}
const F1 = {
    borderRadius: {
      ...fr,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: fr,
    borderTopRightRadius: fr,
    borderBottomLeftRadius: fr,
    borderBottomRightRadius: fr,
    boxShadow: N1,
  },
  Uh = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  I1 = Uh.length,
  Kc = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Xc = (e) => typeof e == "number" || V.test(e);
function O1(e, t, n, r, i, o) {
  i
    ? ((e.opacity = Y(0, n.opacity !== void 0 ? n.opacity : 1, z1(r))),
      (e.opacityExit = Y(t.opacity !== void 0 ? t.opacity : 1, 0, _1(r))))
    : o &&
      (e.opacity = Y(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < I1; s++) {
    const l = `border${Uh[s]}Radius`;
    let a = Zc(t, l),
      u = Zc(n, l);
    if (a === void 0 && u === void 0) continue;
    a || (a = 0),
      u || (u = 0),
      a === 0 || u === 0 || Xc(a) === Xc(u)
        ? ((e[l] = Math.max(Y(Kc(a), Kc(u), r), 0)),
          (ot.test(u) || ot.test(a)) && (e[l] += "%"))
        : (e[l] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = Y(t.rotate || 0, n.rotate || 0, r));
}
function Zc(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const z1 = Hh(0, 0.5, Ka),
  _1 = Hh(0.5, 0.95, Z);
function Hh(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Jr(e, t, r)));
}
function Jc(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Oe(e, t) {
  Jc(e.x, t.x), Jc(e.y, t.y);
}
function qc(e, t, n, r, i) {
  return (
    (e -= t), (e = So(e, 1 / n, r)), i !== void 0 && (e = So(e, 1 / i, r)), e
  );
}
function B1(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (ot.test(t) &&
      ((t = parseFloat(t)), (t = Y(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let l = Y(o.min, o.max, r);
  e === o && (l -= t),
    (e.min = qc(e.min, t, n, l, i)),
    (e.max = qc(e.max, t, n, l, i));
}
function bc(e, t, [n, r, i], o, s) {
  B1(e, t[n], t[r], t[i], t.scale, o, s);
}
const U1 = ["x", "scaleX", "originX"],
  H1 = ["y", "scaleY", "originY"];
function ef(e, t, n, r) {
  bc(e.x, t, U1, n ? n.x : void 0, r ? r.x : void 0),
    bc(e.y, t, H1, n ? n.y : void 0, r ? r.y : void 0);
}
function tf(e) {
  return e.translate === 0 && e.scale === 1;
}
function Wh(e) {
  return tf(e.x) && tf(e.y);
}
function W1(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function Qh(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function nf(e) {
  return Ne(e.x) / Ne(e.y);
}
class Q1 {
  constructor() {
    this.members = [];
  }
  add(t) {
    eu(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (tu(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function rf(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y;
  if (
    ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: a, rotateX: u, rotateY: c } = n;
    a && (r += `rotate(${a}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const s = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (s !== 1 || l !== 1) && (r += `scale(${s}, ${l})`), r || "none";
}
const Y1 = (e, t) => e.depth - t.depth;
class G1 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    eu(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    tu(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(Y1),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function $1(e, t) {
  const n = performance.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (st(r), e(o - t));
    };
  return _.read(r, !0), () => st(r);
}
function K1(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function X1(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function Z1(e, t, n) {
  const r = ve(e) ? e : pn(e);
  return r.start(ba("", r, t, n)), r.animation;
}
const of = ["", "X", "Y", "Z"],
  sf = 1e3;
let J1 = 0;
const en = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function Yh({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, l = t == null ? void 0 : t()) {
      (this.id = J1++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (en.totalNodes =
            en.resolvedTargetDeltas =
            en.recalculatedProjection =
              0),
            this.nodes.forEach(ex),
            this.nodes.forEach(ox),
            this.nodes.forEach(sx),
            this.nodes.forEach(tx),
            K1(en);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0);
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new G1());
    }
    addEventListener(s, l) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new nu()),
        this.eventHandlers.get(s).add(l)
      );
    }
    notifyListeners(s, ...l) {
      const a = this.eventHandlers.get(s);
      a && a.notify(...l);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, l = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = X1(s)), (this.instance = s);
      const { layoutId: a, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        l && (u || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = $1(d, 250)),
            Hi.hasAnimatedSinceResize &&
              ((Hi.hasAnimatedSinceResize = !1), this.nodes.forEach(af));
        });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: h,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || fx,
                { onLayoutAnimationStart: E, onLayoutAnimationComplete: g } =
                  c.getProps(),
                p = !this.targetLayout || !Qh(this.targetLayout, y) || h,
                m = !d && h;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                m ||
                (d && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, m);
                const x = { ...Mh(v, "layout"), onPlay: E, onComplete: g };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((x.delay = 0), (x.type = !1)),
                  this.startAnimation(x);
              } else
                d || af(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        st(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(lx),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(lf);
        return;
      }
      this.isUpdating || this.nodes.forEach(rx),
        (this.isUpdating = !1),
        this.nodes.forEach(ix),
        this.nodes.forEach(q1),
        this.nodes.forEach(b1),
        this.clearAllSnapshots();
      const l = performance.now();
      (oe.delta = Ut(0, 1e3 / 60, l - oe.timestamp)),
        (oe.timestamp = l),
        (oe.isProcessing = !0),
        ws.update.process(oe),
        ws.preRender.process(oe),
        ws.render.process(oe),
        (oe.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(nx), this.sharedNodes.forEach(ax);
    }
    scheduleUpdateProjection() {
      _.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      _.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = te()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l &&
        l.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (l = !1),
        l &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        l = this.projectionDelta && !Wh(this.projectionDelta),
        a = this.getTransformTemplate(),
        u = a ? a(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (l || bt(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return (
        s && (a = this.removeTransform(a)),
        dx(a),
        {
          animationId: this.root.animationId,
          measuredBox: l,
          layoutBox: a,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return te();
      const l = s.measureViewportBox(),
        { scroll: a } = this.root;
      return a && (Pt(l.x, a.offset.x), Pt(l.y, a.offset.y)), l;
    }
    removeElementScroll(s) {
      const l = te();
      Oe(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a],
          { scroll: c, options: f } = u;
        if (u !== this.root && c && f.layoutScroll) {
          if (c.isRoot) {
            Oe(l, s);
            const { scroll: d } = this.root;
            d && (Pt(l.x, -d.offset.x), Pt(l.y, -d.offset.y));
          }
          Pt(l.x, c.offset.x), Pt(l.y, c.offset.y);
        }
      }
      return l;
    }
    applyTransform(s, l = !1) {
      const a = te();
      Oe(a, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !l &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          On(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          bt(c.latestValues) && On(a, c.latestValues);
      }
      return bt(this.latestValues) && On(a, this.latestValues), a;
    }
    removeTransform(s) {
      const l = te();
      Oe(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !bt(u.latestValues)) continue;
        Il(u.latestValues) && u.updateSnapshot();
        const c = te(),
          f = u.measurePageBox();
        Oe(c, f),
          ef(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return bt(this.latestValues) && ef(l, this.latestValues), l;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== oe.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var l;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== a;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) &&
            l.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = oe.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1
            ? ((this.relativeParent = h),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = te()),
              (this.relativeTargetOrigin = te()),
              Vr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                h.layout.layoutBox
              ),
              Oe(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = te()), (this.targetWithTransforms = te())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                h1(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Oe(this.target, this.layout.layoutBox),
                zh(this.target, this.targetDelta))
              : Oe(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const h = this.getClosestProjectingParent();
            h &&
            !!h.resumingFrom == !!this.resumingFrom &&
            !h.options.layoutScroll &&
            h.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = h),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = te()),
                (this.relativeTargetOrigin = te()),
                Vr(this.relativeTargetOrigin, this.target, h.target),
                Oe(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          en.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Il(this.parent.latestValues) ||
          Oh(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const l = this.getLead(),
        a = !!this.resumingFrom || this !== l;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === oe.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      Oe(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        h = this.treeScale.y;
      k1(this.layoutCorrected, this.treeScale, this.path, a),
        l.layout &&
          !l.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (l.target = l.layout.layoutBox);
      const { target: y } = l;
      if (!y) {
        this.projectionTransform &&
          ((this.projectionDelta = In()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = In()),
        (this.projectionDeltaWithTransform = In()));
      const v = this.projectionTransform;
      Mr(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.projectionTransform = rf(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== v ||
          this.treeScale.x !== d ||
          this.treeScale.y !== h) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        en.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, l = !1) {
      const a = this.snapshot,
        u = a ? a.latestValues : {},
        c = { ...this.latestValues },
        f = In();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l);
      const d = te(),
        h = a ? a.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        v = h !== y,
        E = this.getStack(),
        g = !E || E.members.length <= 1,
        p = !!(v && !g && this.options.crossfade === !0 && !this.path.some(cx));
      this.animationProgress = 0;
      let m;
      (this.mixTargetDelta = (x) => {
        const w = x / 1e3;
        uf(f.x, s.x, w),
          uf(f.y, s.y, w),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Vr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            ux(this.relativeTarget, this.relativeTargetOrigin, d, w),
            m && W1(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = te()),
            Oe(m, this.relativeTarget)),
          v &&
            ((this.animationValues = c), O1(c, u, this.latestValues, w, p, g)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = w);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (st(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = _.update(() => {
          (Hi.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Z1(0, sf, {
              ...s,
              onUpdate: (l) => {
                this.mixTargetDelta(l), s.onUpdate && s.onUpdate(l);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(sf),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: l,
        target: a,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!l || !a || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          Gh(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          a = this.target || te();
          const f = Ne(this.layout.layoutBox.x);
          (a.x.min = s.target.x.min), (a.x.max = a.x.min + f);
          const d = Ne(this.layout.layoutBox.y);
          (a.y.min = s.target.y.min), (a.y.max = a.y.min + d);
        }
        Oe(l, a),
          On(l, c),
          Mr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
      }
    }
    registerSharedNode(s, l) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new Q1()),
        this.sharedNodes.get(s).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(l)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack();
      u && u.promote(this, a),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let l = !1;
      const { latestValues: a } = s;
      if (((a.rotate || a.rotateX || a.rotateY || a.rotateZ) && (l = !0), !l))
        return;
      const u = {};
      for (let c = 0; c < of.length; c++) {
        const f = "rotate" + of[c];
        a[f] && ((u[f] = a[f]), s.setStaticValue(f, 0));
      }
      s.render();
      for (const c in u) s.setStaticValue(c, u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s = {}) {
      var l, a;
      const u = {};
      if (!this.instance || this.isSVG) return u;
      if (this.isVisible) u.visibility = "";
      else return { visibility: "hidden" };
      const c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Ui(s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = Ui(s.pointerEvents) || "")),
          this.hasProjected &&
            !bt(this.latestValues) &&
            ((v.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = rf(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        c && (u.transform = c(d, u.transform));
      const { x: h, y } = this.projectionDelta;
      (u.transformOrigin = `${h.origin * 100}% ${y.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (a =
                    (l = d.opacity) !== null && l !== void 0
                      ? l
                      : this.latestValues.opacity) !== null && a !== void 0
                  ? a
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const v in ho) {
        if (d[v] === void 0) continue;
        const { correct: E, applyTo: g } = ho[v],
          p = u.transform === "none" ? d[v] : E(d[v], f);
        if (g) {
          const m = g.length;
          for (let x = 0; x < m; x++) u[g[x]] = p;
        } else u[v] = p;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = f === this ? Ui(s.pointerEvents) || "" : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var l;
        return (l = s.currentAnimation) === null || l === void 0
          ? void 0
          : l.stop();
      }),
        this.root.nodes.forEach(lf),
        this.root.sharedNodes.clear();
    }
  };
}
function q1(e) {
  e.updateLayout();
}
function b1(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? tt((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            h = Ne(d);
          (d.min = r[f].min), (d.max = d.min + h);
        })
      : Gh(o, n.layoutBox, r) &&
        tt((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            h = Ne(r[f]);
          (d.max = d.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + h));
        });
    const l = In();
    Mr(l, r, n.layoutBox);
    const a = In();
    s ? Mr(a, e.applyTransform(i, !0), n.measuredBox) : Mr(a, r, n.layoutBox);
    const u = !Wh(l);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: h } = f;
        if (d && h) {
          const y = te();
          Vr(y, n.layoutBox, d.layoutBox);
          const v = te();
          Vr(v, r, h.layoutBox),
            Qh(y, v) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function ex(e) {
  en.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function tx(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function nx(e) {
  e.clearSnapshot();
}
function lf(e) {
  e.clearMeasurements();
}
function rx(e) {
  e.isLayoutDirty = !1;
}
function ix(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function af(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function ox(e) {
  e.resolveTargetDelta();
}
function sx(e) {
  e.calcProjection();
}
function lx(e) {
  e.resetRotation();
}
function ax(e) {
  e.removeLeadSnapshot();
}
function uf(e, t, n) {
  (e.translate = Y(t.translate, 0, n)),
    (e.scale = Y(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function cf(e, t, n, r) {
  (e.min = Y(t.min, n.min, r)), (e.max = Y(t.max, n.max, r));
}
function ux(e, t, n, r) {
  cf(e.x, t.x, n.x, r), cf(e.y, t.y, n.y, r);
}
function cx(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const fx = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  ff = (e) =>
    typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
  df = ff("applewebkit/") && !ff("chrome/") ? Math.round : Z;
function pf(e) {
  (e.min = df(e.min)), (e.max = df(e.max));
}
function dx(e) {
  pf(e.x), pf(e.y);
}
function Gh(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !jl(nf(t), nf(n), 0.2))
  );
}
const px = Yh({
    attachResizeListener: (e, t) => ft(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Rs = { current: void 0 },
  $h = Yh({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Rs.current) {
        const e = new px({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Rs.current = e);
      }
      return Rs.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  hx = {
    pan: { Feature: R1 },
    drag: { Feature: V1, ProjectionNode: $h, MeasureLayout: Bh },
  },
  mx = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function gx(e) {
  const t = mx.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function zl(e, t, n = 1) {
  const [r, i] = gx(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return Vh(s) ? parseFloat(s) : s;
  } else return Ll(i) ? zl(i, t, n + 1) : i;
}
function yx(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((i) => {
      const o = i.get();
      if (!Ll(o)) return;
      const s = zl(o, r);
      s && i.set(s);
    });
  for (const i in t) {
    const o = t[i];
    if (!Ll(o)) continue;
    const s = zl(o, r);
    s && ((t[i] = s), n || (n = {}), n[i] === void 0 && (n[i] = o));
  }
  return { target: t, transitionEnd: n };
}
const vx = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Kh = (e) => vx.has(e),
  xx = (e) => Object.keys(e).some(Kh),
  hf = (e) => e === yn || e === V,
  mf = (e, t) => parseFloat(e.split(", ")[t]),
  gf =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/);
      if (i) return mf(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/);
        return o ? mf(o[1], e) : 0;
      }
    },
  wx = new Set(["x", "y", "z"]),
  Sx = ri.filter((e) => !wx.has(e));
function Cx(e) {
  const t = [];
  return (
    Sx.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const Jn = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: gf(4, 13),
  y: gf(5, 14),
};
Jn.translateX = Jn.x;
Jn.translateY = Jn.y;
const kx = (e, t, n) => {
    const r = t.measureViewportBox(),
      i = t.current,
      o = getComputedStyle(i),
      { display: s } = o,
      l = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        l[u] = Jn[u](r, o);
      }),
      t.render();
    const a = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(l[u]), (e[u] = Jn[u](a, o));
      }),
      e
    );
  },
  Px = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const i = Object.keys(t).filter(Kh);
    let o = [],
      s = !1;
    const l = [];
    if (
      (i.forEach((a) => {
        const u = e.getValue(a);
        if (!e.hasValue(a)) return;
        let c = n[a],
          f = cr(c);
        const d = t[a];
        let h;
        if (go(d)) {
          const y = d.length,
            v = d[0] === null ? 1 : 0;
          (c = d[v]), (f = cr(c));
          for (let E = v; E < y && d[E] !== null; E++)
            h ? $a(cr(d[E]) === h) : (h = cr(d[E]));
        } else h = cr(d);
        if (f !== h)
          if (hf(f) && hf(h)) {
            const y = u.get();
            typeof y == "string" && u.set(parseFloat(y)),
              typeof d == "string"
                ? (t[a] = parseFloat(d))
                : Array.isArray(d) && h === V && (t[a] = d.map(parseFloat));
          } else
            f != null &&
            f.transform &&
            h != null &&
            h.transform &&
            (c === 0 || d === 0)
              ? c === 0
                ? u.set(h.transform(c))
                : (t[a] = f.transform(d))
              : (s || ((o = Cx(e)), (s = !0)),
                l.push(a),
                (r[a] = r[a] !== void 0 ? r[a] : t[a]),
                u.jump(d));
      }),
      l.length)
    ) {
      const a = l.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = kx(t, e, l);
      return (
        o.length &&
          o.forEach(([c, f]) => {
            e.getValue(c).set(f);
          }),
        e.render(),
        Bo && a !== null && window.scrollTo({ top: a }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function Tx(e, t, n, r) {
  return xx(t) ? Px(e, t, n, r) : { target: t, transitionEnd: r };
}
const Ex = (e, t, n, r) => {
    const i = yx(e, t, r);
    return (t = i.target), (r = i.transitionEnd), Tx(e, t, n, r);
  },
  _l = { current: null },
  Xh = { current: !1 };
function Lx() {
  if (((Xh.current = !0), !!Bo))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (_l.current = e.matches);
      e.addListener(t), t();
    } else _l.current = !1;
}
function Ax(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const o = t[i],
      s = n[i];
    if (ve(o)) e.addValue(i, o), wo(r) && r.add(i);
    else if (ve(s)) e.addValue(i, pn(o, { owner: e })), wo(r) && r.remove(i);
    else if (s !== o)
      if (e.hasValue(i)) {
        const l = e.getValue(i);
        !l.hasAnimated && l.set(o);
      } else {
        const l = e.getStaticValue(i);
        e.addValue(i, pn(l !== void 0 ? l : o, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const yf = new WeakMap(),
  Zh = Object.keys(Zr),
  Mx = Zh.length,
  vf = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  Vx = Oa.length;
class Rx {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      visualState: o,
    },
    s = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => _.render(this.render, !1, !0));
    const { latestValues: l, renderState: a } = o;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = a),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = s),
      (this.isControllingVariants = Wo(n)),
      (this.isVariantNode = Ip(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const f in c) {
      const d = c[f];
      l[f] !== void 0 && ve(d) && (d.set(l[f], !1), wo(u) && u.add(f));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      yf.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Xh.current || Lx(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : _l.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    yf.delete(this.current),
      this.projection && this.projection.unmount(),
      st(this.notifyUpdate),
      st(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = gn.has(t),
      i = n.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && _.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), o();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, o) {
    let s, l;
    for (let a = 0; a < Mx; a++) {
      const u = Zh[a],
        {
          isEnabled: c,
          Feature: f,
          ProjectionNode: d,
          MeasureLayout: h,
        } = Zr[u];
      d && (s = d),
        c(n) &&
          (!this.features[u] && f && (this.features[u] = new f(this)),
          h && (l = h));
    }
    if (!this.projection && s) {
      this.projection = new s(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: a,
        layout: u,
        drag: c,
        dragConstraints: f,
        layoutScroll: d,
        layoutRoot: h,
      } = n;
      this.projection.setOptions({
        layoutId: a,
        layout: u,
        alwaysMeasureLayout: !!c || (f && jn(f)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: o,
        layoutScroll: d,
        layoutRoot: h,
      });
    }
    return l;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : te();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < vf.length; r++) {
      const i = vf[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = t["on" + i];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = Ax(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < Vx; r++) {
      const i = Oa[r],
        o = this.props[i];
      (Xr(o) || o === !1) && (n[i] = o);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = pn(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
        n !== void 0
      ? n
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      i =
        typeof r == "string" || typeof r == "object"
          ? (n = Ga(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !ve(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new nu()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Jh extends Rx {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: i },
    o
  ) {
    let s = Zv(r, t || {}, this);
    if ((i && (n && (n = i(n)), r && (r = i(r)), s && (s = i(s))), o)) {
      Kv(this, r, s);
      const l = Ex(this, r, s, n);
      (n = l.transitionEnd), (r = l.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function Dx(e) {
  return window.getComputedStyle(e);
}
class Nx extends Jh {
  readValueFromInstance(t, n) {
    if (gn.has(n)) {
      const r = qa(n);
      return (r && r.default) || 0;
    } else {
      const r = Dx(t),
        i = (Bp(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return _h(t, n);
  }
  build(t, n, r, i) {
    Ba(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return Ya(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    ve(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    Gp(t, n, r, i);
  }
}
class jx extends Jh {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (gn.has(n)) {
      const r = qa(n);
      return (r && r.default) || 0;
    }
    return (n = $p.has(n) ? n : Qa(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return te();
  }
  scrapeMotionValuesFromProps(t, n) {
    return Xp(t, n);
  }
  build(t, n, r, i) {
    Ha(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Kp(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Wa(t.tagName)), super.mount(t);
  }
}
const Fx = (e, t) =>
    _a(e)
      ? new jx(t, { enableHardwareAcceleration: !1 })
      : new Nx(t, { enableHardwareAcceleration: !0 }),
  Ix = { layout: { ProjectionNode: $h, MeasureLayout: Bh } },
  Ox = { ...c1, ...My, ...hx, ...Ix },
  Rr = zg((e, t) => gy(e, t, Ox, Fx));
function qh() {
  const e = S.useRef(!1);
  return (
    Uo(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function zx() {
  const e = qh(),
    [t, n] = S.useState(0),
    r = S.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
  return [S.useCallback(() => _.postRender(r), [r]), t];
}
class _x extends S.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function Bx({ children: e, isPresent: t }) {
  const n = S.useId(),
    r = S.useRef(null),
    i = S.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    S.useInsertionEffect(() => {
      const { width: o, height: s, top: l, left: a } = i.current;
      if (t || !r.current || !o || !s) return;
      r.current.dataset.motionPopId = n;
      const u = document.createElement("style");
      return (
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${l}px !important;
            left: ${a}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    S.createElement(
      _x,
      { isPresent: t, childRef: r, sizeRef: i },
      S.cloneElement(e, { ref: r })
    )
  );
}
const Ds = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: s,
}) => {
  const l = tr(Ux),
    a = S.useId(),
    u = S.useMemo(
      () => ({
        id: a,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: (c) => {
          l.set(c, !0);
          for (const f of l.values()) if (!f) return;
          r && r();
        },
        register: (c) => (l.set(c, !1), () => l.delete(c)),
      }),
      o ? void 0 : [n]
    );
  return (
    S.useMemo(() => {
      l.forEach((c, f) => l.set(f, !1));
    }, [n]),
    S.useEffect(() => {
      !n && !l.size && r && r();
    }, [n]),
    s === "popLayout" && (e = S.createElement(Bx, { isPresent: n }, e)),
    S.createElement(_o.Provider, { value: u }, e)
  );
};
function Ux() {
  return new Map();
}
function Hx(e) {
  return S.useEffect(() => () => e(), []);
}
const wn = (e) => e.key || "";
function Wx(e, t) {
  e.forEach((n) => {
    const r = wn(n);
    t.set(r, n);
  });
}
function Qx(e) {
  const t = [];
  return (
    S.Children.forEach(e, (n) => {
      S.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const Ns = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    exitBeforeEnter: i,
    presenceAffectsLayout: o = !0,
    mode: s = "sync",
  }) => {
    const l = S.useContext(za).forceRender || zx()[0],
      a = qh(),
      u = Qx(e);
    let c = u;
    const f = S.useRef(new Map()).current,
      d = S.useRef(c),
      h = S.useRef(new Map()).current,
      y = S.useRef(!0);
    if (
      (Uo(() => {
        (y.current = !1), Wx(u, h), (d.current = c);
      }),
      Hx(() => {
        (y.current = !0), h.clear(), f.clear();
      }),
      y.current)
    )
      return S.createElement(
        S.Fragment,
        null,
        c.map((p) =>
          S.createElement(
            Ds,
            {
              key: wn(p),
              isPresent: !0,
              initial: n ? void 0 : !1,
              presenceAffectsLayout: o,
              mode: s,
            },
            p
          )
        )
      );
    c = [...c];
    const v = d.current.map(wn),
      E = u.map(wn),
      g = v.length;
    for (let p = 0; p < g; p++) {
      const m = v[p];
      E.indexOf(m) === -1 && !f.has(m) && f.set(m, void 0);
    }
    return (
      s === "wait" && f.size && (c = []),
      f.forEach((p, m) => {
        if (E.indexOf(m) !== -1) return;
        const x = h.get(m);
        if (!x) return;
        const w = v.indexOf(m);
        let L = p;
        if (!L) {
          const P = () => {
            h.delete(m), f.delete(m);
            const k = d.current.findIndex((R) => R.key === m);
            if ((d.current.splice(k, 1), !f.size)) {
              if (((d.current = u), a.current === !1)) return;
              l(), r && r();
            }
          };
          (L = S.createElement(
            Ds,
            {
              key: wn(x),
              isPresent: !1,
              onExitComplete: P,
              custom: t,
              presenceAffectsLayout: o,
              mode: s,
            },
            x
          )),
            f.set(m, L);
        }
        c.splice(w, 0, L);
      }),
      (c = c.map((p) => {
        const m = p.key;
        return f.has(m)
          ? p
          : S.createElement(
              Ds,
              { key: wn(p), isPresent: !0, presenceAffectsLayout: o, mode: s },
              p
            );
      })),
      S.createElement(
        S.Fragment,
        null,
        f.size ? c : c.map((p) => S.cloneElement(p))
      )
    );
  },
  bh = S.createContext(null);
function Yx(e, t, n, r) {
  if (!r) return e;
  const i = e.findIndex((c) => c.value === t);
  if (i === -1) return e;
  const o = r > 0 ? 1 : -1,
    s = e[i + o];
  if (!s) return e;
  const l = e[i],
    a = s.layout,
    u = Y(a.min, a.max, 0.5);
  return (o === 1 && l.layout.max + n > u) || (o === -1 && l.layout.min + n < u)
    ? Bv(e, i, i + o)
    : e;
}
function Gx(
  { children: e, as: t = "ul", axis: n = "y", onReorder: r, values: i, ...o },
  s
) {
  const l = tr(() => Rr(t)),
    a = [],
    u = S.useRef(!1),
    c = {
      axis: n,
      registerItem: (f, d) => {
        d &&
          a.findIndex((h) => f === h.value) === -1 &&
          (a.push({ value: f, layout: d[n] }), a.sort(Xx));
      },
      updateOrder: (f, d, h) => {
        if (u.current) return;
        const y = Yx(a, f, d, h);
        a !== y &&
          ((u.current = !0), r(y.map(Kx).filter((v) => i.indexOf(v) !== -1)));
      },
    };
  return (
    S.useEffect(() => {
      u.current = !1;
    }),
    S.createElement(
      l,
      { ...o, ref: s, ignoreStrict: !0 },
      S.createElement(bh.Provider, { value: c }, e)
    )
  );
}
const $x = S.forwardRef(Gx);
function Kx(e) {
  return e.value;
}
function Xx(e, t) {
  return e.layout.min - t.layout.min;
}
function em(e) {
  const t = tr(() => pn(e)),
    { isStatic: n } = S.useContext(Fa);
  if (n) {
    const [, r] = S.useState(e);
    S.useEffect(() => t.on("change", r), []);
  }
  return t;
}
const Zx = (e) => typeof e == "object" && e.mix,
  Jx = (e) => (Zx(e) ? e.mix : void 0);
function qx(...e) {
  const t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    o = e[2 + n],
    s = e[3 + n],
    l = Ja(i, o, { mixer: Jx(o[0]), ...s });
  return t ? l(r) : l;
}
function tm(e, t) {
  const n = em(t()),
    r = () => n.set(t());
  return (
    r(),
    Uo(() => {
      const i = () => _.update(r, !1, !0),
        o = e.map((s) => s.on("change", i));
      return () => {
        o.forEach((s) => s()), st(r);
      };
    }),
    n
  );
}
function bx(e) {
  (Ar.current = []), e();
  const t = tm(Ar.current, e);
  return (Ar.current = void 0), t;
}
function ew(e, t, n, r) {
  if (typeof e == "function") return bx(e);
  const i = typeof t == "function" ? t : qx(t, n, r);
  return Array.isArray(e) ? xf(e, i) : xf([e], ([o]) => i(o));
}
function xf(e, t) {
  const n = tr(() => []);
  return tm(e, () => {
    n.length = 0;
    const r = e.length;
    for (let i = 0; i < r; i++) n[i] = e[i].get();
    return t(n);
  });
}
function wf(e, t = 0) {
  return ve(e) ? e : em(t);
}
function tw(
  {
    children: e,
    style: t = {},
    value: n,
    as: r = "li",
    onDrag: i,
    layout: o = !0,
    ...s
  },
  l
) {
  const a = tr(() => Rr(r)),
    u = S.useContext(bh),
    c = { x: wf(t.x), y: wf(t.y) },
    f = ew([c.x, c.y], ([E, g]) => (E || g ? 1 : "unset")),
    d = S.useRef(null),
    { axis: h, registerItem: y, updateOrder: v } = u;
  return (
    S.useEffect(() => {
      y(n, d.current);
    }, [u]),
    S.createElement(
      a,
      {
        drag: h,
        ...s,
        dragSnapToOrigin: !0,
        style: { ...t, x: c.x, y: c.y, zIndex: f },
        layout: o,
        onDrag: (E, g) => {
          const { velocity: p } = g;
          p[h] && v(n, c[h].get(), p[h]), i && i(E, g);
        },
        onLayoutMeasure: (E) => {
          d.current = E;
        },
        ref: l,
        ignoreStrict: !0,
      },
      e
    )
  );
}
const nw = S.forwardRef(tw),
  nm = { Group: $x, Item: nw };
function rw(e) {
  return T.jsxs("svg", {
    fill: "none",
    viewBox: "0 0 24 24",
    height: "1.3em",
    width: "1.3em",
    ...e,
    children: [
      T.jsx("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-8a8 8 0 100 16 8 8 0 000-16z",
        clipRule: "evenodd",
      }),
      T.jsx("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M13 7a1 1 0 10-2 0v4H7a1 1 0 100 2h4v4a1 1 0 102 0v-4h4a1 1 0 100-2h-4V7z",
        clipRule: "evenodd",
      }),
    ],
  });
}
function Sn(e) {
  return T.jsx("svg", {
    viewBox: "0 0 24 24",
    fill: e.color,
    height: e.height,
    width: e.width,
    ...e,
    children: T.jsx("path", {
      d: "M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12z",
    }),
  });
}
function iw({ unCheckcolor: e, checkedColor: t, checked: n }) {
  return n
    ? T.jsxs("svg", {
        width: "19",
        height: "18",
        viewBox: "0 0 19 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          T.jsx("path", {
            d: "M9.48007 16.4262C13.5726 16.4262 16.8903 13.1085 16.8903 9.01596C16.8903 4.92339 13.5726 1.60571 9.48007 1.60571C5.3875 1.60571 2.06982 4.92339 2.06982 9.01596C2.06982 13.1085 5.3875 16.4262 9.48007 16.4262Z",
            fill: t,
          }),
          T.jsx("path", {
            d: "M9.46428 1.85955C10.8765 1.85955 12.2571 2.27834 13.4313 3.06294C14.6056 3.84755 15.5208 4.96275 16.0612 6.2675C16.6017 7.57225 16.7431 9.00797 16.4676 10.3931C16.1921 11.7782 15.512 13.0505 14.5134 14.0491C13.5148 15.0478 12.2424 15.7278 10.8573 16.0033C9.4722 16.2789 8.03648 16.1375 6.73173 15.597C5.42697 15.0566 4.31178 14.1413 3.52717 12.9671C2.74257 11.7928 2.32378 10.4123 2.32378 9.00005C2.3311 7.10852 3.08574 5.29656 4.42326 3.95904C5.76079 2.62152 7.57275 1.86687 9.46428 1.85955ZM9.46428 0.272778C7.73972 0.279833 6.05592 0.797669 4.62543 1.76091C3.19494 2.72416 2.08191 4.08962 1.42683 5.68493C0.771755 7.28024 0.604012 9.03387 0.944777 10.7244C1.28554 12.415 2.11954 13.9667 3.34148 15.1837C4.56342 16.4006 6.11852 17.2283 7.81046 17.5621C9.50241 17.896 11.2553 17.7211 12.848 17.0595C14.4406 16.3979 15.8015 15.2793 16.7589 13.8449C17.7163 12.4105 18.2272 10.7246 18.2273 9.00005C18.2273 7.85096 18.0003 6.71318 17.5595 5.652C17.1187 4.59083 16.4727 3.62715 15.6585 2.81628C14.8443 2.00541 13.878 1.36331 12.815 0.926827C11.7521 0.490346 10.6134 0.268077 9.46428 0.272778Z",
            fill: t,
          }),
          T.jsx("path", {
            d: "M12.9306 6.34209L8.59865 10.674L6.11618 8.19156L5.28027 9.02747L8.59865 12.3458L13.7665 7.178L12.9306 6.34209Z",
            fill: "#F2F2F2",
          }),
        ],
      })
    : T.jsx("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: T.jsx("path", {
          d: "M8.96428 1.85955C10.3765 1.85955 11.7571 2.27834 12.9313 3.06294C14.1056 3.84755 15.0208 4.96275 15.5612 6.2675C16.1017 7.57225 16.2431 9.00797 15.9676 10.3931C15.6921 11.7782 15.012 13.0505 14.0134 14.0491C13.0148 15.0478 11.7424 15.7278 10.3573 16.0033C8.9722 16.2789 7.53648 16.1375 6.23173 15.597C4.92697 15.0566 3.81178 14.1413 3.02717 12.9671C2.24257 11.7928 1.82378 10.4123 1.82378 9.00005C1.8311 7.10852 2.58574 5.29656 3.92326 3.95904C5.26079 2.62152 7.07275 1.86687 8.96428 1.85955ZM8.96428 0.272778C7.23972 0.279833 5.55592 0.797669 4.12543 1.76091C2.69494 2.72416 1.58191 4.08962 0.926831 5.68493C0.271755 7.28024 0.104012 9.03387 0.444777 10.7244C0.785541 12.415 1.61954 13.9667 2.84148 15.1837C4.06342 16.4006 5.61852 17.2283 7.31046 17.5621C9.00241 17.896 10.7553 17.7211 12.348 17.0595C13.9406 16.3979 15.3015 15.2793 16.2589 13.8449C17.2163 12.4105 17.7272 10.7246 17.7273 9.00005C17.7273 7.85096 17.5003 6.71318 17.0595 5.652C16.6187 4.59083 15.9727 3.62715 15.1585 2.81628C14.3443 2.00541 13.378 1.36331 12.315 0.926827C11.2521 0.490346 10.1134 0.268077 8.96428 0.272778Z",
          fill: e,
        }),
      });
}
function ow() {
  return T.jsxs("svg", {
    width: "56",
    height: "56",
    viewBox: "0 0 56 56",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [
      T.jsx("rect", { width: "56", height: "56", fill: "url(#pattern0)" }),
      T.jsxs("defs", {
        children: [
          T.jsx("pattern", {
            id: "pattern0",
            patternContentUnits: "objectBoundingBox",
            width: "1",
            height: "1",
            children: T.jsx("use", {
              xlinkHref: "#image0_4130_503",
              transform: "scale(0.01)",
            }),
          }),
          T.jsx("image", {
            id: "image0_4130_503",
            width: "100",
            height: "100",
            xlinkHref:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAQE0lEQVR4Xu2dCZBUxRnHXWA5ViABDKIRBQMFeFRQvFluXFwRjVFU0CRqzHrjgaIGE8HbxEQNRg0x0ZgoKhqNKeSQazkS0YhHNG6MKddbSy4RF9gzv8+amerXvNl5X78382aGvKqpPaa7v+P/fV93f328kl3y6Kmqqiqtra3tVVdX1zMXbLVr1279yJEjP5gxY0ZjLugFoVESpFC2y5SXlw8pKSmZyufYlpaWr2Wbntk+ND+H5nw+t69ateqlXNL2oxUrIOIRNTU1d6CMC2AuVl6g3wI4s3bddddp8+fP3x4XMLEpgTDRbunSpc8ARmVcwvtaaEnJMwMHDjx59uzZDXHwFRsgw4cPvx0wpsYhdACaN69cuXJ6gHKRF4kFkFGjRg1oamp6HUDaWfH8S/73eJs2bd7mZ1Pk0hoNEp7a8mf/5ubmU/hZZvHRSIc/EA/+bzZ5yJs+BO+4C4VPsZTwOkCcuHz58rdzqQRGWf0A5Sn4OcDi584VK1ZclktehFYsHjJs2DCxvH2TwmKt20tLSw9esmTJv3KtAKGHx+7f2Ni4ll/bGzy9CSD75ZqfnAMinTmKl1FMG0PYBcTsWDt3vHYBXjLOAuAFjGUFHlTdsWPHlYsXL/482wDlHJDx48d327x58wZLsAcA5OxsC9ta+yNGjHgAxZ+Zrox4sfRvbdu2vYew+ny2eM05IBImCVnbzPDA72sA5IhsCRmkXXgSJR8epKzwCzCXZgOYOADZhfDwItZ2iCk8o5rvLFu27C8BFRJpMfqQE+hDnlY22ozX3LL77rtfN3fu3MhGhLEAQnj4MeHhJksBGxllXVhdXT1HqZhQxTGOyRjH3TTSzWwIZb/P33vYQ3ObGOWeBJTJgFIfipFE5cgAQbBLYO40BHi/ffv2V9ABvpeOwUQ/IsPb7j5l3uV/8l1LFAK20obI3o/PPj5K3tSpU6dvbdmypYHQNAyZTqbMqXw885VkPeR+hBHZGVHwHAkgxN9LYeYOQ7CMfQLj/zOYHP4xy0p3ah4Fn4GCHzYrw+/XCWuSAJ3G/1PDY6PMZfSDdzoRNCqFBgTP6E97r2FFHU1mBg0a1D5TPoi606l3A/VC8xFWEYn6LYTNawmbN6drD2AOwJCkr0vNo6QsQG2jHzwg7Ow+tCJQ6hMo9SRLgIwekiyPgCfTn9xJG9+MSKlOzaDQjwFjCiOnJzI1MHbs2L3r6+ur4bmPWZY25uJZkopxfkIBgjL7YC0y6zYneQ0weqRmbWHChAllmzZtmoxCTgCc/RBsT9vjnCVMU1Esmq/W8XmV35/p2bPnI3TMW4LSSazh/J3ypUad5g4dOvRtrf/M1H4oQGDqBoS51iIyi1jqyVNlYqJQvyc63I3hXGh5yUy8ZIarTM6ATJw4se2nn35aC0N7JYkDThNW3ge3/8CVoUKqV1FR0Xvr1q21ZoSQ4TLD4L6ucxNnQAhX5YSrlZYCl+AdYwtJqWF5xUuWYJSjLS8Zipf8zaVtZ0ASI6QbLaJnAciDLowUah0M84cY5v0WIFcDyG0uMoUBxM6OtpSVle22cOFCO3HowlfB1BkzZkwPRlyfwbCpy2cxzPEuQjgBkkihi+K7GP1HDVYxyIWJQq9DtHiLsCXzsa8e2clCP9LDpR9xAgQ3HYibvmm56R8A5MxCV64L/wDyJwA53axLyqW/y+qnEyAMd4/DCv5qAXIRgPzaRaBCryN5PADxpE3Qz3j08axWNidAyNZexgTulyYx0gZjSZ8v0TJQDOXJ5clK4wJTFob/l5CC+ZVWPidA/CZErIn3C5vH0TKfL+VlFw2JxxqLH6cJshMgWMR8iB9jMNDcuXPnsjh3/MUJDn1qR/rUOunPjY59PiHrWC1fToDgIS8TMwcbxD+EeGrGrmWiGMqjk4/QyR6GTtaikyFa2VwBeQ/ivQ3iL0L8MC3xYirvsyz9LnORPloZnQAhZIl7djKIxb6NRyt41OUZeS5iZHW0YaRfYqSdtXTUgJBU7PzJJ598YRGagzVM1hIvpvKMPB9LbEtNidWrV68yJodbNXKqARk9evQ+DQ0NtRaRewFEjhTstA8h6z7C+LmmAliX33vRokWyWSLwowYEwgdC+DWTAq56E+5pr4sEZqIYCqKXW9DL1aYsbPbYX7s9Vg0IY+7DGXN7du4xCbqKSdDPikGxrjIAyNUAcotZH70chl5e1LSpBoRYOYpYudQiPAXCszSEi62sz86bXZgsj2CyvEIjqxoQLEHOAc6ziFTRh/xWQ9gsS5sVhL3BtKvmx5WmFXIh3fIKYXeRa3vIcC5t3GfWJ8FYSYLRk1LJ1L5aAViC7DDx7MyAke+zqcFpjxWz3GuZ5cpWoNgfQsz01rYAtcYggPwAPTxoRY7v0t5TGsHUgDDe/h7W/JBF+BQIz9UQTpYF4A/5fU+XulHXQS7njAOGdSqG9ajleTtsuMvEsxoQvyVLLOt4APGk4zMRTn6PZckmuwODls9yudcIvd92oeG3YRu9nI1eHtC0pwYEi/4RBGZbRI5BkIUawsmyiUGChEC/fb4uTbrW2UDMP4mYv9ylAeSoZLDjWf+gvXNo7nea9tSA+HVeWEIFlvCchrBZtrKysgMbmwfgKeamM9fm1PUIVQ1kq/8dJludZk3kXPRiG2+r/KkBoQ+5AAE8K4M78+KUEXorMChPlEBP5zFy+43GQtSAYAkXQcAz54DwGAh75iYaJoqhLIY6Fj14ooTsamT0eY9GPjUgxMopxMq7TCLEylGusVfDbD6XJZSPBgB7Cfti+lY5DBT4UQMS1Yw0MIcFUpDR50iGvctMdl3W1dWA4CGX4yG/sDxkGB6yqkB0lxU2yYIPJwtebTWuPsSjBgTXvALX/LlJmE69nB0nq7MiaYE0iqEOw1A9eSs8ZCqjLM/unEziqAGB8DQIe/atQvgoCMtZiZ32YWI4lCy4J0rQyV/JYOd2jVLUgOAhV+Eht1oh68gwZ7aHDh3ahYGB3DliHvzRyBGqLAbVTPx/e/Xq1fZKaOB26UKOoA2PUbosS6gBoVO/Bi49Z/BIMx9OmvmFwNwbBRMTqsf5V1eX+hHW2YxFT3TN+NKHHEYfssbkh/auoT2P8WbiVw2I3zEErPtQPOQfmYj5fQ8gb/D/nF/ykobXNximem4FCioTofxQPNxjlC7ZYzUgadLlQxBEbtNRPwD8vnkKS91AhBWw6A+w6NT2Jk3TiTOHHqPEUH+CodpnaFptVg0IFv1TWpxpuebBCPKyRoBkWb9Rm0s7UdQBkCuQwzOkD9ouchyEYdlGeR2Gen3QNqRc7IAIEzJkRBi5+EVueYvjaQKMNYwU7SN6gXmJDZCoQ1ZgifO8oF/IkhPKeJx9p0vkIWuHUVaYTj3P9RyYvdhGWX4TwzDD3sAS53lBv3kILE+jD/FkNTKJoe5DiJVTifee2SceEmpimInJQvgevRyFXjzpo5ykTvyyvcRK53PZhaDsIDz6ndtHL5fSh3iWKjK1pfYQQtbFTIA8R7XkTqn/Z3t9s73ZXw/BNS/ENT2LLi479DJZSqF977cegqGej6F6Ns9lkkvtIRA+jyTavVbDI+m87LWATLSL6vs0K4bqHZ1qQOhDzkGTnm2jYdfU5SICLGkv1lXCZHvX5+Je3XRWRPp9DOn3xeb3OdkGRB9yFn3I703ChLCjWcz3MBPU/BMLO09S/htB66QpJ6+buI1OVOZJOX+Q42j0Yu8NVt/9ovaQNHtYnfdl4XGvoD2n3YJ+WsfLBrN6+WquEfHbl+Wy51kNiN/llS67vJMKs0+vhlVk2E17rvT9TgXgsafjsY9o2lQDgmtOwjU9RMJcgkx7M2lPMsihHxTwJpe+DNGe6wtNmAaQ40Tk+LPVh5xG3/iYpn0XQHYgDMFJjLI8O781TCDMBMn2IpDnfSKaNvDSDxl+PxRXx46HyIXMnqtlXQxVDYgcrrG3TKI4deelUXYhlI1q9OkCiF/O5gLWEuy5SSHoMTIe/TIYLklXF0B2OIXrkkSLTBN50hAeciWseA6+5uQULpcI77t9+3bPu5kA5Ho85Lo80U0sbBDKbySUe14kxh2++2jv8FV7CMPe3UidyB2DqUeOJzC8k13xO+2Dh8gu9/NNBXTt2rX7vHnzNmqUogaENEcb9mDJ22bMEdGjjLImaQgXW1mfqzXq0Ynch696y4MaEFGkz1VEi/AQ+/1NxabzVuXBQ+RsSOrOYtctRa6A2PdlvQwgB+9UCFjCYqRriRoHJf9Nv/oS/arnLUJB9OMEiM+Nchtwzx5BCBZrGXQi1+am3tKDh8zDSI/TyusKiGR7zzKJMVPuRppgk5aBYig/bty47rxyfL0pCx5yPx4iJ5ZVjxMgfhetQNV5O6mK4zws7Lev1+UogojmCsjxxEvPG9XwEHUiLQ9168SSXx6Lho4jjNt3wmRs3xWQ/gDyltk6FhHLu2MzSpiDAgAyC3145mHoY1/6kHe05J0ASbw7ZAtMpN47BQM77UWYAPISujBHmXVc0t+FOVtzTgARIjCxFCZGJQkCSCNrEd00rw3SMpuP5ROnvzaYE2V+f44l7QoXfp08RAj5naRyWbJ0YTqf6qCHM+HHvmBGvYU0ZdiuwpHTOoScln19XTUd2UjXNguxHoDIEYZyk3cGOAcxBZC9AurH2UMSOa13rdNPkrcZDCieSzLVXBVIBcK2LEXIhgpTj3KBcl/+p8phhfaQdGGLCdHzvIKu3OVlJgWCQ0p3nAlZaF6eLF+4nLw15Xb2EGkkkYqXd96at1zLG2bUp08LDAwZ1OxwgQIy1PHap95hXvsUCpCEl8jG64sthYq7Tsd1PdemFprS0/GbGNDIySiP/qKYi4UGRF7aS+cuR5v97k18mg7uSpdX/+QjeMjaD1nlbMwJNn9yX6Ms2Ybd9RIakISXjOCnrAf43QhXD7Nz+Dw2YMCAxZleWJxvQFRVVZXW1NTINtFTkeE0+PN7U3QDfceYMIdGI+nUTeXJrZwwLS/Ham1vlSxnrkEwmdnKMer/4EEf4UHyTtrYn0SfKJ4ub1yTmbd85HRwKq3u4xmN/E92KMptFKGfSDwkyYXs2eL3h1H2bhrOAEheFPwxP2XGu1k+/P0Ff8trMZLPNgD3vGkAMGUp2SwjA4oywkoHkz7WK4OOVJqHOvKi+i6U7Sof/pYLOPcwU0EB+f+MOpNdN5r70YgUECEgfQqKm8mvcrAnrnPnAfXpXExyVA9jEJdH7d2RA2J4i9zFW8VnEsAUxWoi3rQOWeYAxGyAeN0ZzlYqZg2QJE0yw+3XrVtXKYlIQsmR/F/WnWO5DtZBgQ3UWQsQcu3SMpKnC5jw1ju0E7hK1gGxOQGgTuvXrz+QsNaXTx++7wtYvYnz3flbOs/kJ9ugibJlkLER2huhLWvi76H8Wv6Wzzs9evT4Z6530ucckKCmIpcroxTpfL96uIuqFKWl3um0bds2Gc2l3sVrtku9zcwJmpL/4+8t7LMVAL56aKcuzKXJQWVwKfc/FdwazphYhsoAAAAASUVORK5CYII=",
          }),
        ],
      }),
    ],
  });
}
const sw = (e, t) => {
  const [n, r] = S.useState(JSON.parse(localStorage.getItem(e)) || t);
  return (
    S.useEffect(() => {
      localStorage.setItem(e, JSON.stringify(n));
    }, [n, e]),
    [n, r]
  );
};
function lw() {
  const [e, t] = S.useState(""),
    [n, r] = sw("lolys", []),
    [i, o] = S.useState(!1),
    [s, l] = S.useState(!1),
    a = S.useRef(),
    u = (h) => {
      if (h.checked === !1) {
        const y = [
          ...n.filter((v) => v.id !== h.id),
          { id: h.id, value: h.value, checked: !h.checked },
        ];
        r(y);
      } else {
        const y = [
          { id: h.id, value: h.value, checked: !h.checked },
          ...n.filter((v) => v.id !== h.id),
        ];
        r(y);
      }
    },
    c = S.useRef();
  function f(h) {
    let y = h.pageX,
      v = h.pageY;
    v > 180
      ? (c.current.style.display = "none")
      : ((c.current.style.top = v + "px"),
        (c.current.style.left = y + "px"),
        (c.current.style.display = "block"));
  }
  function d() {
    c.current.style.display = "none";
  }
  return (
    S.useEffect(
      () => (
        document.addEventListener("mousemove", f),
        document.addEventListener("mouseout", d),
        () => {
          document.removeEventListener("mousemove", f),
            document.removeEventListener("mouseout", d);
        }
      )
    ),
    T.jsxs("div", {
      className: "bg-[var(--gray-600)] min-h-screen relative",
      children: [
        T.jsx(Ns, {
          children:
            s &&
            T.jsx(Rr.div, {
              className:
                "w-full h-full bg-black opacity-60 absolute z-40 blur-xl",
              initial: { opacity: 0 },
              animate: { opacity: 0.6 },
              exit: { opacity: 0 },
            }),
        }),
        T.jsxs("nav", {
          className:
            "bg-[var(--gray-700)] h-[200px] flex items-center justify-center gap-2 cursor-none",
          children: [
            T.jsx("div", {
              ref: c,
              className:
                "z-20 fixed sm:bg-white w-20 h-20 opacity-50 rounded-full pointer-events-none sm:trick -translate-x-1/2 -translate-y-1/2 hidden before:content-[''] before:absolute before:w-[50px] before:h-[50px] before:opacity-20 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full blur-3xl",
            }),
            T.jsxs("div", {
              className: "text-[40px] font-black z-30 animate-float",
              children: [
                T.jsx("span", {
                  className: "text-[var(--blue)] duration-1000 animate-to",
                  children: "ZI",
                }),
                T.jsx("span", {
                  className:
                    "text-[var(--purple-dark)] duration-1000 animate-do",
                  children: "ZO",
                }),
              ],
            }),
          ],
        }),
        T.jsx(Ns, {
          children:
            s &&
            T.jsx(
              Rr.div,
              {
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                children: T.jsxs("div", {
                  className:
                    "m-auto z-50 fixed w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[var(--gray-100)] flex flex-col gap-8 max-w-xs px-5 py-9 rounded-lg bg-[var(--gray-400)]",
                  children: [
                    T.jsxs("div", {
                      className: "flex flex-col items-center gap-3",
                      children: [
                        T.jsx(Sn, {
                          width: "3em",
                          height: "3em",
                          color: "var(--danger)",
                        }),
                        T.jsx("p", {
                          className: "text-center font-bold",
                          children: "You will delete all your tasks",
                        }),
                      ],
                    }),
                    T.jsxs("div", {
                      className: "flex flex-col gap-[10px]",
                      children: [
                        T.jsxs("button", {
                          className:
                            "w-full flex justify-center items-center gap-2 text-sm bg-[var(--danger)] hover:bg-[var(--danger-dark)] duration-300 px-4 py-3 rounded-lg font-bold",
                          type: "button",
                          onClick: () => {
                            r([]), l(!1);
                          },
                          id: "accept",
                          children: [
                            "Delete",
                            " ",
                            T.jsx(Sn, {
                              width: "1.5em",
                              height: "1.5em",
                              color: "var(--gray-100)",
                            }),
                            " ",
                          ],
                        }),
                        T.jsx("button", {
                          className:
                            "w-full flex justify-center items-center gap-2 text-sm bg-[var(--gray-300)] hover:bg-[var(--gray-200)] text-[var(--gray-700)] duration-300 px-4 py-3 rounded-lg font-bold",
                          type: "button",
                          onClick: () => l(!1),
                          id: "cancel",
                          children: "Cancel",
                        }),
                      ],
                    }),
                  ],
                }),
              },
              "modal"
            ),
        }),
        T.jsx(Ns, {
          children:
            s &&
            T.jsxs(Rr.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className:
                "m-auto z-50 fixed w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[var(--gray-100)] flex flex-col gap-8 max-w-xs px-5 py-9 rounded-lg bg-[var(--gray-400)]",
              children: [
                T.jsxs("div", {
                  className: "flex flex-col items-center gap-3",
                  children: [
                    T.jsx(Sn, {
                      width: "3em",
                      height: "3em",
                      color: "var(--danger)",
                    }),
                    T.jsx("p", {
                      className: "text-center font-bold",
                      children: "You will delete all your tasks",
                    }),
                  ],
                }),
                T.jsxs("div", {
                  className: "flex flex-col gap-[10px]",
                  children: [
                    T.jsxs("button", {
                      className:
                        "w-full flex justify-center items-center gap-2 text-sm bg-[var(--danger)] hover:bg-[var(--danger-dark)] duration-300 px-4 py-3 rounded-lg font-bold",
                      type: "button",
                      onClick: () => {
                        r([]), l(!1);
                      },
                      id: "accept",
                      children: [
                        "Delete",
                        " ",
                        T.jsx(Sn, {
                          width: "1.5em",
                          height: "1.5em",
                          color: "var(--gray-100)",
                        }),
                        " ",
                      ],
                    }),
                    T.jsx("button", {
                      className:
                        "w-full flex justify-center items-center gap-2 text-sm bg-[var(--gray-300)] hover:bg-[var(--gray-200)] text-[var(--gray-700)] duration-300 px-4 py-3 rounded-lg font-bold",
                      type: "button",
                      onClick: () => l(!1),
                      id: "cancel",
                      children: "Cancel",
                    }),
                  ],
                }),
              ],
            }),
        }),
        T.jsxs("div", {
          className:
            "container m-auto px-6 md:px-4 lg:px-0 max-w-[763px] flex flex-col gap-16",
          children: [
            T.jsxs("form", {
              className: "text-[var(--gray-100)] flex gap-6 mt-[-27px] w-full",
              children: [
                T.jsx(aw, {
                  value: e,
                  onChange: (h) => t(h.target.value),
                  inputRef: a,
                }),
                T.jsx(uw, {
                  onClick: (h) => {
                    e && r([...n, { id: Date.now(), value: e, checked: !1 }]),
                      t(""),
                      h.preventDefault();
                  },
                }),
              ],
            }),
            T.jsxs("div", {
              className: "flex flex-col gap-6",
              children: [
                T.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    T.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        T.jsx("p", {
                          className: "text-[var(--blue)] text-sm font-bold",
                          children: "Tasks created",
                        }),
                        T.jsx("p", {
                          className:
                            "text-[var(--gray-200)] text-xs bg-[var(--gray-400)] px-[10px] py-[2px] rounded-full",
                          children: n.length,
                        }),
                      ],
                    }),
                    T.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        T.jsx("p", {
                          className: "text-[var(--danger)] text-sm font-bold",
                          children: "Delete All",
                        }),
                        T.jsx("button", {
                          className:
                            "rounded p-1 duration-300 hover:bg-[var(--gray-400)]",
                          onClick: () => l(!0),
                          onMouseEnter: () => o(!0),
                          onMouseLeave: () => o(!1),
                          id: "deleteAll",
                          "aria-label": "delete All",
                          children: T.jsx(Sn, {
                            color: i ? "var(--danger)" : "var(--gray-300)",
                            width: "1.5em",
                            height: "1.5em",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                T.jsx("div", {
                  children: T.jsx(cw, {
                    list: n,
                    onClick: (h) => r(n.filter((y) => y.id !== h)),
                    onTextClick: () => a.current.focus(),
                    handleCheck: u,
                    handleReorder: r,
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
const aw = ({ value: e, onChange: t, inputRef: n }) =>
    T.jsx("input", {
      ref: n,
      type: "text",
      value: e,
      onChange: t,
      placeholder: "Add a new task",
      className:
        "bg-[var(--gray-500)] p-4 w-full rounded-lg focus:outline-none",
    }),
  uw = ({ onClick: e }) =>
    T.jsxs("button", {
      className:
        "flex justify-center items-center gap-2 text-sm bg-[var(--blue-dark)] hover:bg-[var(--blue)] duration-300 p-4 rounded-lg font-bold",
      type: "submit",
      onClick: e,
      id: "create",
      children: ["Create Task ", T.jsx(rw, {}), " "],
    }),
  cw = ({
    list: e,
    onClick: t,
    onTextClick: n,
    handleCheck: r,
    handleReorder: i,
  }) =>
    e.length
      ? T.jsxs(nm.Group, {
          axis: "y",
          values: e,
          onReorder: i,
          className: "flex flex-col gap-3 text-[var(--gray-100)] text-sm pb-14",
          children: [
            e.map((o) => {
              if (!o.checked)
                return T.jsx(Sf, { loly: o, onClick: t, handleCheck: r }, o.id);
            }),
            T.jsx("hr", {
              className: "w-full rounded-md border-[var(--gray-400)] my-2",
            }),
            e.map((o) => {
              if (o.checked)
                return T.jsx(Sf, { loly: o, onClick: t, handleCheck: r }, o.id);
            }),
          ],
        })
      : T.jsx(fw, { parent, onTextClick: n }),
  Sf = ({ loly: e, onClick: t, handleCheck: n }) => {
    const [r, i] = S.useState(!1),
      [o, s] = S.useState(!1);
    return T.jsxs(nm.Item, {
      value: e,
      id: e.id,
      className:
        "bg-[var(--gray-500)] rounded-lg flex items-center justify-between gap-3 p-4 cursor-pointer",
      layout: !0,
      initial: { scale: 0.9, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 0.9, opacity: 0 },
      transition: { type: "spring" },
      children: [
        T.jsxs("div", {
          className: "flex gap-3 break-all",
          children: [
            T.jsx("button", {
              onClick: () => n(e),
              onMouseEnter: () => s(!0),
              onMouseLeave: () => s(!1),
              id: "check",
              children: T.jsx(iw, {
                checked: e.checked,
                unCheckcolor: o ? "var(--blue-dark)" : "var(--blue)",
                checkedColor: o ? "var(--purple)" : "var(--purple-dark)",
              }),
            }),
            e.checked
              ? T.jsx("p", {
                  className: "text-[var(--gray-300)] line-through",
                  children: e.value,
                })
              : T.jsx("p", { children: e.value }),
          ],
        }),
        T.jsx("button", {
          className: "rounded p-1 duration-300 hover:bg-[var(--gray-400)]",
          onClick: () => t(e.id),
          onMouseEnter: () => i(!0),
          onMouseLeave: () => i(!1),
          id: "delete",
          children: T.jsx(Sn, {
            width: "1.5em",
            height: "1.5em",
            color: r ? "var(--danger)" : "var(--gray-300)",
          }),
        }),
      ],
    });
  },
  fw = ({ onTextClick: e }) =>
    T.jsxs("div", {
      className:
        "flex flex-col items-center justify-center gap-4 py-16 border-t-[1px] border-[var(--gray-400)]",
      children: [
        T.jsx(ow, {}),
        T.jsxs("div", {
          onClick: e,
          className:
            "flex flex-col items-center text-[var(--gray-300)] cursor-pointer group text-center px-4",
          children: [
            T.jsx("p", {
              className: "font-bold group-hover:underline",
              children: "You don't have tasks registered yet",
            }),
            T.jsx("p", {
              className: "group-hover:underline",
              children: "Create tasks and organize your to-do items",
            }),
          ],
        }),
      ],
    });
js.createRoot(document.getElementById("root")).render(
  T.jsx(Ql.StrictMode, { children: T.jsx(lw, {}) })
);
