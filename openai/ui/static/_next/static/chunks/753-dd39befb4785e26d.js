(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[753], {
    93865: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return H
            }
        });
        var r = function() {
                function e(e) {
                    var t = this;
                    this._insertTag = function(e) {
                        var n;
                        n = 0 === t.tags.length ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling,
                        t.container.insertBefore(e, n),
                        t.tags.push(e)
                    },
                    this.isSpeedy = void 0 === e.speedy || e.speedy,
                    this.tags = [],
                    this.ctr = 0,
                    this.nonce = e.nonce,
                    this.key = e.key,
                    this.container = e.container,
                    this.prepend = e.prepend,
                    this.insertionPoint = e.insertionPoint,
                    this.before = null
                }
                var t = e.prototype;
                return t.hydrate = function(e) {
                    e.forEach(this._insertTag)
                }, t.insert = function(e) {
                    if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
                        var t;
                        this._insertTag(((t = document.createElement("style")).setAttribute("data-emotion", this.key), void 0 !== this.nonce && t.setAttribute("nonce", this.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t))
                    }
                    var n = this.tags[this.tags.length - 1];
                    if (this.isSpeedy) {
                        var r = function(e) {
                            if (e.sheet)
                                return e.sheet;
                            for (var t = 0; t < document.styleSheets.length; t++)
                                if (document.styleSheets[t].ownerNode === e)
                                    return document.styleSheets[t]
                        }(n);
                        try {
                            r.insertRule(e, r.cssRules.length)
                        } catch (e) {}
                    } else
                        n.appendChild(document.createTextNode(e));
                    this.ctr++
                }, t.flush = function() {
                    this.tags.forEach(function(e) {
                        return e.parentNode && e.parentNode.removeChild(e)
                    }),
                    this.tags = [],
                    this.ctr = 0
                }, e
            }(),
            i = Math.abs,
            o = String.fromCharCode,
            a = Object.assign;
        function s(e, t, n) {
            return e.replace(t, n)
        }
        function l(e, t) {
            return e.indexOf(t)
        }
        function u(e, t) {
            return 0 | e.charCodeAt(t)
        }
        function c(e, t, n) {
            return e.slice(t, n)
        }
        function d(e) {
            return e.length
        }
        function f(e, t) {
            return t.push(e), e
        }
        var h = 1,
            p = 1,
            m = 0,
            v = 0,
            g = 0,
            y = "";
        function b(e, t, n, r, i, o, a) {
            return {
                value: e,
                root: t,
                parent: n,
                type: r,
                props: i,
                children: o,
                line: h,
                column: p,
                length: a,
                return: ""
            }
        }
        function w(e, t) {
            return a(b("", null, null, "", null, null, 0), e, {
                length: -e.length
            }, t)
        }
        function x() {
            return g = v < m ? u(y, v++) : 0, p++, 10 === g && (p = 1, h++), g
        }
        function E() {
            return u(y, v)
        }
        function P(e) {
            switch (e) {
            case 0:
            case 9:
            case 10:
            case 13:
            case 32:
                return 5;
            case 33:
            case 43:
            case 44:
            case 47:
            case 62:
            case 64:
            case 126:
            case 59:
            case 123:
            case 125:
                return 4;
            case 58:
                return 3;
            case 34:
            case 39:
            case 40:
            case 91:
                return 2;
            case 41:
            case 93:
                return 1
            }
            return 0
        }
        function C(e) {
            return h = p = 1, m = d(y = e), v = 0, []
        }
        function S(e) {
            var t,
                n;
            return (t = v - 1, n = function e(t) {
                for (; x();)
                    switch (g) {
                    case t:
                        return v;
                    case 34:
                    case 39:
                        34 !== t && 39 !== t && e(g);
                        break;
                    case 40:
                        41 === t && e(t);
                        break;
                    case 92:
                        x()
                    }
                return v
            }(91 === e ? e + 2 : 40 === e ? e + 1 : e), c(y, t, n)).trim()
        }
        var R = "-ms-",
            T = "-moz-",
            M = "-webkit-",
            A = "comm",
            k = "rule",
            D = "decl",
            L = "@keyframes";
        function O(e, t) {
            for (var n = "", r = e.length, i = 0; i < r; i++)
                n += t(e[i], i, e, t) || "";
            return n
        }
        function F(e, t, n, r) {
            switch (e.type) {
            case "@layer":
                if (e.children.length)
                    break;
            case "@import":
            case D:
                return e.return = e.return || e.value;
            case A:
                return "";
            case L:
                return e.return = e.value + "{" + O(e.children, r) + "}";
            case k:
                e.value = e.props.join(",")
            }
            return d(n = O(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
        }
        function I(e, t, n, r, o, a, l, u, d, f, h) {
            for (var p = o - 1, m = 0 === o ? a : [""], v = m.length, g = 0, y = 0, w = 0; g < r; ++g)
                for (var x = 0, E = c(e, p + 1, p = i(y = l[g])), P = e; x < v; ++x)
                    (P = (y > 0 ? m[x] + " " + E : s(E, /&\f/g, m[x])).trim()) && (d[w++] = P);
            return b(e, t, n, 0 === o ? k : u, d, f, h)
        }
        function V(e, t, n, r) {
            return b(e, t, n, D, c(e, 0, r), c(e, r + 1, -1), r)
        }
        var _ = function(e, t, n) {
                for (var r = 0, i = 0; r = i, i = E(), 38 === r && 12 === i && (t[n] = 1), !P(i);)
                    x();
                return c(y, e, v)
            },
            j = function(e, t) {
                var n = -1,
                    r = 44;
                do switch (P(r)) {
                case 0:
                    38 === r && 12 === E() && (t[n] = 1),
                    e[n] += _(v - 1, t, n);
                    break;
                case 2:
                    e[n] += S(r);
                    break;
                case 4:
                    if (44 === r) {
                        e[++n] = 58 === E() ? "&\f" : "",
                        t[n] = e[n].length;
                        break
                    }
                default:
                    e[n] += o(r)
                }
                while (r = x());
                return e
            },
            N = function(e, t) {
                var n;
                return n = j(C(e), t), y = "", n
            },
            B = new WeakMap,
            W = function(e) {
                if ("rule" === e.type && e.parent && !(e.length < 1)) {
                    for (var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line; "rule" !== n.type;)
                        if (!(n = n.parent))
                            return;
                    if ((1 !== e.props.length || 58 === t.charCodeAt(0) || B.get(n)) && !r) {
                        B.set(e, !0);
                        for (var i = [], o = N(t, i), a = n.props, s = 0, l = 0; s < o.length; s++)
                            for (var u = 0; u < a.length; u++, l++)
                                e.props[l] = i[s] ? o[s].replace(/&\f/g, a[u]) : a[u] + " " + o[s]
                    }
                }
            },
            $ = function(e) {
                if ("decl" === e.type) {
                    var t = e.value;
                    108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.return = "", e.value = "")
                }
            },
            z = [function(e, t, n, r) {
                if (e.length > -1 && !e.return)
                    switch (e.type) {
                    case D:
                        e.return = function e(t, n) {
                            switch (45 ^ u(t, 0) ? (((n << 2 ^ u(t, 0)) << 2 ^ u(t, 1)) << 2 ^ u(t, 2)) << 2 ^ u(t, 3) : 0) {
                            case 5103:
                                return M + "print-" + t + t;
                            case 5737:
                            case 4201:
                            case 3177:
                            case 3433:
                            case 1641:
                            case 4457:
                            case 2921:
                            case 5572:
                            case 6356:
                            case 5844:
                            case 3191:
                            case 6645:
                            case 3005:
                            case 6391:
                            case 5879:
                            case 5623:
                            case 6135:
                            case 4599:
                            case 4855:
                            case 4215:
                            case 6389:
                            case 5109:
                            case 5365:
                            case 5621:
                            case 3829:
                                return M + t + t;
                            case 5349:
                            case 4246:
                            case 4810:
                            case 6968:
                            case 2756:
                                return M + t + T + t + R + t + t;
                            case 6828:
                            case 4268:
                                return M + t + R + t + t;
                            case 6165:
                                return M + t + R + "flex-" + t + t;
                            case 5187:
                                return M + t + s(t, /(\w+).+(:[^]+)/, M + "box-$1$2" + R + "flex-$1$2") + t;
                            case 5443:
                                return M + t + R + "flex-item-" + s(t, /flex-|-self/, "") + t;
                            case 4675:
                                return M + t + R + "flex-line-pack" + s(t, /align-content|flex-|-self/, "") + t;
                            case 5548:
                                return M + t + R + s(t, "shrink", "negative") + t;
                            case 5292:
                                return M + t + R + s(t, "basis", "preferred-size") + t;
                            case 6060:
                                return M + "box-" + s(t, "-grow", "") + M + t + R + s(t, "grow", "positive") + t;
                            case 4554:
                                return M + s(t, /([^-])(transform)/g, "$1" + M + "$2") + t;
                            case 6187:
                                return s(s(s(t, /(zoom-|grab)/, M + "$1"), /(image-set)/, M + "$1"), t, "") + t;
                            case 5495:
                            case 3959:
                                return s(t, /(image-set\([^]*)/, M + "$1$`$1");
                            case 4968:
                                return s(s(t, /(.+:)(flex-)?(.*)/, M + "box-pack:$3" + R + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + M + t + t;
                            case 4095:
                            case 3583:
                            case 4068:
                            case 2532:
                                return s(t, /(.+)-inline(.+)/, M + "$1$2") + t;
                            case 8116:
                            case 7059:
                            case 5753:
                            case 5535:
                            case 5445:
                            case 5701:
                            case 4933:
                            case 4677:
                            case 5533:
                            case 5789:
                            case 5021:
                            case 4765:
                                if (d(t) - 1 - n > 6)
                                    switch (u(t, n + 1)) {
                                    case 109:
                                        if (45 !== u(t, n + 4))
                                            break;
                                    case 102:
                                        return s(t, /(.+:)(.+)-([^]+)/, "$1" + M + "$2-$3$1" + T + (108 == u(t, n + 3) ? "$3" : "$2-$3")) + t;
                                    case 115:
                                        return ~l(t, "stretch") ? e(s(t, "stretch", "fill-available"), n) + t : t
                                    }
                                break;
                            case 4949:
                                if (115 !== u(t, n + 1))
                                    break;
                            case 6444:
                                switch (u(t, d(t) - 3 - (~l(t, "!important") && 10))) {
                                case 107:
                                    return s(t, ":", ":" + M) + t;
                                case 101:
                                    return s(t, /(.+:)([^;!]+)(;|!.+)?/, "$1" + M + (45 === u(t, 14) ? "inline-" : "") + "box$3$1" + M + "$2$3$1" + R + "$2box$3") + t
                                }
                                break;
                            case 5936:
                                switch (u(t, n + 11)) {
                                case 114:
                                    return M + t + R + s(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
                                case 108:
                                    return M + t + R + s(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
                                case 45:
                                    return M + t + R + s(t, /[svh]\w+-[tblr]{2}/, "lr") + t
                                }
                                return M + t + R + t + t
                            }
                            return t
                        }(e.value, e.length);
                        break;
                    case L:
                        return O([w(e, {
                            value: s(e.value, "@", "@" + M)
                        })], r);
                    case k:
                        if (e.length)
                            return e.props.map(function(t) {
                                var n;
                                switch (n = t, (n = /(::plac\w+|:read-\w+)/.exec(n)) ? n[0] : n) {
                                case ":read-only":
                                case ":read-write":
                                    return O([w(e, {
                                        props: [s(t, /:(read-\w+)/, ":" + T + "$1")]
                                    })], r);
                                case "::placeholder":
                                    return O([w(e, {
                                        props: [s(t, /:(plac\w+)/, ":" + M + "input-$1")]
                                    }), w(e, {
                                        props: [s(t, /:(plac\w+)/, ":" + T + "$1")]
                                    }), w(e, {
                                        props: [s(t, /:(plac\w+)/, R + "input-$1")]
                                    })], r)
                                }
                                return ""
                            }).join("")
                    }
            }],
            H = function(e) {
                var t,
                    n,
                    i,
                    a,
                    m,
                    w = e.key;
                if ("css" === w) {
                    var R = document.querySelectorAll("style[data-emotion]:not([data-s])");
                    Array.prototype.forEach.call(R, function(e) {
                        -1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""))
                    })
                }
                var T = e.stylisPlugins || z,
                    M = {},
                    k = [];
                a = e.container || document.head,
                Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + w + ' "]'), function(e) {
                    for (var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++)
                        M[t[n]] = !0;
                    k.push(e)
                });
                var D = (n = (t = [W, $].concat(T, [F, (i = function(e) {
                        m.insert(e)
                    }, function(e) {
                        !e.root && (e = e.return) && i(e)
                    })])).length, function(e, r, i, o) {
                        for (var a = "", s = 0; s < n; s++)
                            a += t[s](e, r, i, o) || "";
                        return a
                    }),
                    L = function(e) {
                        var t,
                            n;
                        return O((n = function e(t, n, r, i, a, m, w, C, R) {
                            for (var T, M = 0, k = 0, D = w, L = 0, O = 0, F = 0, _ = 1, j = 1, N = 1, B = 0, W = "", $ = a, z = m, H = i, U = W; j;)
                                switch (F = B, B = x()) {
                                case 40:
                                    if (108 != F && 58 == u(U, D - 1)) {
                                        -1 != l(U += s(S(B), "&", "&\f"), "&\f") && (N = -1);
                                        break
                                    }
                                case 34:
                                case 39:
                                case 91:
                                    U += S(B);
                                    break;
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    U += function(e) {
                                        for (; g = E();)
                                            if (g < 33)
                                                x();
                                            else
                                                break;
                                        return P(e) > 2 || P(g) > 3 ? "" : " "
                                    }(F);
                                    break;
                                case 92:
                                    U += function(e, t) {
                                        for (var n; --t && x() && !(g < 48) && !(g > 102) && (!(g > 57) || !(g < 65)) && (!(g > 70) || !(g < 97));)
                                            ;
                                        return n = v + (t < 6 && 32 == E() && 32 == x()), c(y, e, n)
                                    }(v - 1, 7);
                                    continue;
                                case 47:
                                    switch (E()) {
                                    case 42:
                                    case 47:
                                        f(b(T = function(e, t) {
                                            for (; x();)
                                                if (e + g === 57)
                                                    break;
                                                else if (e + g === 84 && 47 === E())
                                                    break;
                                            return "/*" + c(y, t, v - 1) + "*" + o(47 === e ? e : x())
                                        }(x(), v), n, r, A, o(g), c(T, 2, -2), 0), R);
                                        break;
                                    default:
                                        U += "/"
                                    }
                                    break;
                                case 123 * _:
                                    C[M++] = d(U) * N;
                                case 125 * _:
                                case 59:
                                case 0:
                                    switch (B) {
                                    case 0:
                                    case 125:
                                        j = 0;
                                    case 59 + k:
                                        -1 == N && (U = s(U, /\f/g, "")),
                                        O > 0 && d(U) - D && f(O > 32 ? V(U + ";", i, r, D - 1) : V(s(U, " ", "") + ";", i, r, D - 2), R);
                                        break;
                                    case 59:
                                        U += ";";
                                    default:
                                        if (f(H = I(U, n, r, M, k, a, C, W, $ = [], z = [], D), m), 123 === B) {
                                            if (0 === k)
                                                e(U, n, H, H, $, m, D, C, z);
                                            else
                                                switch (99 === L && 110 === u(U, 3) ? 100 : L) {
                                                case 100:
                                                case 108:
                                                case 109:
                                                case 115:
                                                    e(t, H, H, i && f(I(t, H, H, 0, 0, a, C, W, a, $ = [], D), z), a, z, D, C, i ? $ : z);
                                                    break;
                                                default:
                                                    e(U, H, H, H, [""], z, 0, C, z)
                                                }
                                        }
                                    }
                                    M = k = O = 0,
                                    _ = N = 1,
                                    W = U = "",
                                    D = w;
                                    break;
                                case 58:
                                    D = 1 + d(U),
                                    O = F;
                                default:
                                    if (_ < 1) {
                                        if (123 == B)
                                            --_;
                                        else if (125 == B && 0 == _++ && 125 == (g = v > 0 ? u(y, --v) : 0, p--, 10 === g && (p = 1, h--), g))
                                            continue
                                    }
                                    switch (U += o(B), B * _) {
                                    case 38:
                                        N = k > 0 ? 1 : (U += "\f", -1);
                                        break;
                                    case 44:
                                        C[M++] = (d(U) - 1) * N,
                                        N = 1;
                                        break;
                                    case 64:
                                        45 === E() && (U += S(x())),
                                        L = E(),
                                        k = D = d(W = U += function(e) {
                                            for (; !P(E());)
                                                x();
                                            return c(y, e, v)
                                        }(v)),
                                        B++;
                                        break;
                                    case 45:
                                        45 === F && 2 == d(U) && (_ = 0)
                                    }
                                }
                            return m
                        }("", null, null, null, [""], t = C(t = e), 0, [0], t), y = "", n), D)
                    },
                    _ = {
                        key: w,
                        sheet: new r({
                            key: w,
                            container: a,
                            nonce: e.nonce,
                            speedy: e.speedy,
                            prepend: e.prepend,
                            insertionPoint: e.insertionPoint
                        }),
                        nonce: e.nonce,
                        inserted: M,
                        registered: {},
                        insert: function(e, t, n, r) {
                            m = n,
                            L(e ? e + "{" + t.styles + "}" : t.styles),
                            r && (_.inserted[t.name] = !0)
                        }
                    };
                return _.sheet.hydrate(k), _
            }
    },
    61404: function(e, t, n) {
        "use strict";
        n.d(t, {
            O: function() {
                return p
            }
        });
        var r,
            i,
            o = {
                animationIterationCount: 1,
                aspectRatio: 1,
                borderImageOutset: 1,
                borderImageSlice: 1,
                borderImageWidth: 1,
                boxFlex: 1,
                boxFlexGroup: 1,
                boxOrdinalGroup: 1,
                columnCount: 1,
                columns: 1,
                flex: 1,
                flexGrow: 1,
                flexPositive: 1,
                flexShrink: 1,
                flexNegative: 1,
                flexOrder: 1,
                gridRow: 1,
                gridRowEnd: 1,
                gridRowSpan: 1,
                gridRowStart: 1,
                gridColumn: 1,
                gridColumnEnd: 1,
                gridColumnSpan: 1,
                gridColumnStart: 1,
                msGridRow: 1,
                msGridRowSpan: 1,
                msGridColumn: 1,
                msGridColumnSpan: 1,
                fontWeight: 1,
                lineHeight: 1,
                opacity: 1,
                order: 1,
                orphans: 1,
                tabSize: 1,
                widows: 1,
                zIndex: 1,
                zoom: 1,
                WebkitLineClamp: 1,
                fillOpacity: 1,
                floodOpacity: 1,
                stopOpacity: 1,
                strokeDasharray: 1,
                strokeDashoffset: 1,
                strokeMiterlimit: 1,
                strokeOpacity: 1,
                strokeWidth: 1
            },
            a = /[A-Z]|^ms/g,
            s = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
            l = function(e) {
                return 45 === e.charCodeAt(1)
            },
            u = function(e) {
                return null != e && "boolean" != typeof e
            },
            c = (r = Object.create(null), function(e) {
                return void 0 === r[e] && (r[e] = l(e) ? e : e.replace(a, "-$&").toLowerCase()), r[e]
            }),
            d = function(e, t) {
                switch (e) {
                case "animation":
                case "animationName":
                    if ("string" == typeof t)
                        return t.replace(s, function(e, t, n) {
                            return i = {
                                name: t,
                                styles: n,
                                next: i
                            }, t
                        })
                }
                return 1 === o[e] || l(e) || "number" != typeof t || 0 === t ? t : t + "px"
            };
        function f(e, t, n) {
            if (null == n)
                return "";
            if (void 0 !== n.__emotion_styles)
                return n;
            switch (typeof n) {
            case "boolean":
                return "";
            case "object":
                if (1 === n.anim)
                    return i = {
                        name: n.name,
                        styles: n.styles,
                        next: i
                    }, n.name;
                if (void 0 !== n.styles) {
                    var r = n.next;
                    if (void 0 !== r)
                        for (; void 0 !== r;)
                            i = {
                                name: r.name,
                                styles: r.styles,
                                next: i
                            },
                            r = r.next;
                    return n.styles + ";"
                }
                return function(e, t, n) {
                    var r = "";
                    if (Array.isArray(n))
                        for (var i = 0; i < n.length; i++)
                            r += f(e, t, n[i]) + ";";
                    else
                        for (var o in n) {
                            var a = n[o];
                            if ("object" != typeof a)
                                null != t && void 0 !== t[a] ? r += o + "{" + t[a] + "}" : u(a) && (r += c(o) + ":" + d(o, a) + ";");
                            else if (Array.isArray(a) && "string" == typeof a[0] && (null == t || void 0 === t[a[0]]))
                                for (var s = 0; s < a.length; s++)
                                    u(a[s]) && (r += c(o) + ":" + d(o, a[s]) + ";");
                            else {
                                var l = f(e, t, a);
                                switch (o) {
                                case "animation":
                                case "animationName":
                                    r += c(o) + ":" + l + ";";
                                    break;
                                default:
                                    r += o + "{" + l + "}"
                                }
                            }
                        }
                    return r
                }(e, t, n);
            case "function":
                if (void 0 !== e) {
                    var o = i,
                        a = n(e);
                    return i = o, f(e, t, a)
                }
            }
            if (null == t)
                return n;
            var s = t[n];
            return void 0 !== s ? s : n
        }
        var h = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
            p = function(e, t, n) {
                if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles)
                    return e[0];
                var r,
                    o = !0,
                    a = "";
                i = void 0;
                var s = e[0];
                null == s || void 0 === s.raw ? (o = !1, a += f(n, t, s)) : a += s[0];
                for (var l = 1; l < e.length; l++)
                    a += f(n, t, e[l]),
                    o && (a += s[l]);
                h.lastIndex = 0;
                for (var u = ""; null !== (r = h.exec(a));)
                    u += "-" + r[1];
                return {
                    name: function(e) {
                        for (var t, n = 0, r = 0, i = e.length; i >= 4; ++r, i -= 4)
                            t = (65535 & (t = 255 & e.charCodeAt(r) | (255 & e.charCodeAt(++r)) << 8 | (255 & e.charCodeAt(++r)) << 16 | (255 & e.charCodeAt(++r)) << 24)) * 1540483477 + ((t >>> 16) * 59797 << 16),
                            t ^= t >>> 24,
                            n = (65535 & t) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ (65535 & n) * 1540483477 + ((n >>> 16) * 59797 << 16);
                        switch (i) {
                        case 3:
                            n ^= (255 & e.charCodeAt(r + 2)) << 16;
                        case 2:
                            n ^= (255 & e.charCodeAt(r + 1)) << 8;
                        case 1:
                            n ^= 255 & e.charCodeAt(r),
                            n = (65535 & n) * 1540483477 + ((n >>> 16) * 59797 << 16)
                        }
                        return n ^= n >>> 13, (((n = (65535 & n) * 1540483477 + ((n >>> 16) * 59797 << 16)) ^ n >>> 15) >>> 0).toString(36)
                    }(a) + u,
                    styles: a,
                    next: i
                }
            }
    },
    66347: function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            var r = "";
            return n.split(" ").forEach(function(n) {
                void 0 !== e[n] ? t.push(e[n] + ";") : r += n + " "
            }), r
        }
        n.d(t, {
            My: function() {
                return o
            },
            fp: function() {
                return r
            },
            hC: function() {
                return i
            }
        });
        var i = function(e, t, n) {
                var r = e.key + "-" + t.name;
                !1 === n && void 0 === e.registered[r] && (e.registered[r] = t.styles)
            },
            o = function(e, t, n) {
                i(e, t, n);
                var r = e.key + "-" + t.name;
                if (void 0 === e.inserted[t.name]) {
                    var o = t;
                    do e.insert(t === o ? "." + r : "", o, e.sheet, !0),
                    o = o.next;
                    while (void 0 !== o)
                }
            }
    },
    68539: function(e, t, n) {
        "use strict";
        n.d(t, {
            B: function() {
                return s
            }
        });
        var r = n(70079),
            i = n(36646),
            o = n(49270),
            a = n(94251);
        function s(e) {
            let t = e + "CollectionProvider",
                [n, s] = (0, i.b)(t),
                [l, u] = n(t, {
                    collectionRef: {
                        current: null
                    },
                    itemMap: new Map
                }),
                c = e => {
                    let {scope: t, children: n} = e,
                        i = r.useRef(null),
                        o = r.useRef(new Map).current;
                    return r.createElement(l, {
                        scope: t,
                        itemMap: o,
                        collectionRef: i
                    }, n)
                },
                d = e + "CollectionSlot",
                f = r.forwardRef((e, t) => {
                    let {scope: n, children: i} = e,
                        s = u(d, n),
                        l = (0, o.e)(t, s.collectionRef);
                    return r.createElement(a.g7, {
                        ref: l
                    }, i)
                }),
                h = e + "CollectionItemSlot",
                p = "data-radix-collection-item",
                m = r.forwardRef((e, t) => {
                    let {scope: n, children: i, ...s} = e,
                        l = r.useRef(null),
                        c = (0, o.e)(t, l),
                        d = u(h, n);
                    return r.useEffect(() => (d.itemMap.set(l, {
                        ref: l,
                        ...s
                    }), () => void d.itemMap.delete(l))), r.createElement(a.g7, {
                        [p]: "",
                        ref: c
                    }, i)
                });
            return [{
                Provider: c,
                Slot: f,
                ItemSlot: m
            }, function(t) {
                let n = u(e + "CollectionConsumer", t),
                    i = r.useCallback(() => {
                        let e = n.collectionRef.current;
                        if (!e)
                            return [];
                        let t = Array.from(e.querySelectorAll(`[${p}]`)),
                            r = Array.from(n.itemMap.values()),
                            i = r.sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
                        return i
                    }, [n.collectionRef, n.itemMap]);
                return i
            }, s]
        }
    },
    28036: function(e, t, n) {
        "use strict";
        n.d(t, {
            gm: function() {
                return o
            }
        });
        var r = n(70079);
        let i = (0, r.createContext)(void 0);
        function o(e) {
            let t = (0, r.useContext)(i);
            return e || t || "ltr"
        }
    },
    47428: function(e, t, n) {
        "use strict";
        n.d(t, {
            VY: function() {
                return e_
            },
            ck: function() {
                return eN
            },
            __: function() {
                return ej
            },
            Uv: function() {
                return eV
            },
            Ee: function() {
                return eB
            },
            Rk: function() {
                return eW
            },
            fC: function() {
                return eF
            },
            xz: function() {
                return eI
            }
        });
        var r = n(45675),
            i = n(70079),
            o = n(72901),
            a = n(49270),
            s = n(36646),
            l = n(86004),
            u = n(39073),
            c = n(68539),
            d = n(28036),
            f = n(49515),
            h = n(54386),
            p = n(44480),
            m = n(88817),
            v = n(25373),
            g = n(67323),
            y = n(55691),
            b = n(83208),
            w = n(94251),
            x = n(9137),
            E = n(66546),
            P = n(54239);
        let C = ["Enter", " "],
            S = ["ArrowUp", "PageDown", "End"],
            R = ["ArrowDown", "PageUp", "Home", ...S],
            T = {
                ltr: [...C, "ArrowRight"],
                rtl: [...C, "ArrowLeft"]
            },
            M = {
                ltr: ["ArrowLeft"],
                rtl: ["ArrowRight"]
            },
            A = "Menu",
            [k, D, L] = (0, c.B)(A),
            [O, F] = (0, s.b)(A, [L, v.D7, b.Pc]),
            I = (0, v.D7)(),
            V = (0, b.Pc)(),
            [_, j] = O(A),
            [N, B] = O(A),
            W = e => {
                let {__scopeMenu: t, open: n=!1, children: r, dir: o, onOpenChange: a, modal: s=!0} = e,
                    l = I(t),
                    [u, c] = (0, i.useState)(null),
                    f = (0, i.useRef)(!1),
                    h = (0, x.W)(a),
                    p = (0, d.gm)(o);
                return (0, i.useEffect)(() => {
                    let e = () => {
                            f.current = !0,
                            document.addEventListener("pointerdown", t, {
                                capture: !0,
                                once: !0
                            }),
                            document.addEventListener("pointermove", t, {
                                capture: !0,
                                once: !0
                            })
                        },
                        t = () => f.current = !1;
                    return document.addEventListener("keydown", e, {
                        capture: !0
                    }), () => {
                        document.removeEventListener("keydown", e, {
                            capture: !0
                        }),
                        document.removeEventListener("pointerdown", t, {
                            capture: !0
                        }),
                        document.removeEventListener("pointermove", t, {
                            capture: !0
                        })
                    }
                }, []), (0, i.createElement)(v.fC, l, (0, i.createElement)(_, {
                    scope: t,
                    open: n,
                    onOpenChange: h,
                    content: u,
                    onContentChange: c
                }, (0, i.createElement)(N, {
                    scope: t,
                    onClose: (0, i.useCallback)(() => h(!1), [h]),
                    isUsingKeyboardRef: f,
                    dir: p,
                    modal: s
                }, r)))
            },
            $ = (0, i.forwardRef)((e, t) => {
                let {__scopeMenu: n, ...o} = e,
                    a = I(n);
                return (0, i.createElement)(v.ee, (0, r.Z)({}, a, o, {
                    ref: t
                }))
            }),
            z = "MenuPortal",
            [H, U] = O(z, {
                forceMount: void 0
            }),
            Z = e => {
                let {__scopeMenu: t, forceMount: n, children: r, container: o} = e,
                    a = j(z, t);
                return (0, i.createElement)(H, {
                    scope: t,
                    forceMount: n
                }, (0, i.createElement)(y.z, {
                    present: n || a.open
                }, (0, i.createElement)(g.h, {
                    asChild: !0,
                    container: o
                }, r)))
            },
            Y = "MenuContent",
            [G, K] = O(Y),
            q = (0, i.forwardRef)((e, t) => {
                let n = U(Y, e.__scopeMenu),
                    {forceMount: o=n.forceMount, ...a} = e,
                    s = j(Y, e.__scopeMenu),
                    l = B(Y, e.__scopeMenu);
                return (0, i.createElement)(k.Provider, {
                    scope: e.__scopeMenu
                }, (0, i.createElement)(y.z, {
                    present: o || s.open
                }, (0, i.createElement)(k.Slot, {
                    scope: e.__scopeMenu
                }, l.modal ? (0, i.createElement)(X, (0, r.Z)({}, a, {
                    ref: t
                })) : (0, i.createElement)(J, (0, r.Z)({}, a, {
                    ref: t
                })))))
            }),
            X = (0, i.forwardRef)((e, t) => {
                let n = j(Y, e.__scopeMenu),
                    s = (0, i.useRef)(null),
                    l = (0, a.e)(t, s);
                return (0, i.useEffect)(() => {
                    let e = s.current;
                    if (e)
                        return (0, E.Ry)(e)
                }, []), (0, i.createElement)(Q, (0, r.Z)({}, e, {
                    ref: l,
                    trapFocus: n.open,
                    disableOutsidePointerEvents: n.open,
                    disableOutsideScroll: !0,
                    onFocusOutside: (0, o.M)(e.onFocusOutside, e => e.preventDefault(), {
                        checkForDefaultPrevented: !1
                    }),
                    onDismiss: () => n.onOpenChange(!1)
                }))
            }),
            J = (0, i.forwardRef)((e, t) => {
                let n = j(Y, e.__scopeMenu);
                return (0, i.createElement)(Q, (0, r.Z)({}, e, {
                    ref: t,
                    trapFocus: !1,
                    disableOutsidePointerEvents: !1,
                    disableOutsideScroll: !1,
                    onDismiss: () => n.onOpenChange(!1)
                }))
            }),
            Q = (0, i.forwardRef)((e, t) => {
                let {__scopeMenu: n, loop: s=!1, trapFocus: l, onOpenAutoFocus: u, onCloseAutoFocus: c, disableOutsidePointerEvents: d, onEntryFocus: m, onEscapeKeyDown: g, onPointerDownOutside: y, onFocusOutside: x, onInteractOutside: E, onDismiss: C, disableOutsideScroll: T, ...M} = e,
                    A = j(Y, n),
                    k = B(Y, n),
                    L = I(n),
                    O = V(n),
                    F = D(n),
                    [_, N] = (0, i.useState)(null),
                    W = (0, i.useRef)(null),
                    $ = (0, a.e)(t, W, A.onContentChange),
                    z = (0, i.useRef)(0),
                    H = (0, i.useRef)(""),
                    U = (0, i.useRef)(0),
                    Z = (0, i.useRef)(null),
                    K = (0, i.useRef)("right"),
                    q = (0, i.useRef)(0),
                    X = T ? P.Z : i.Fragment,
                    J = T ? {
                        as: w.g7,
                        allowPinchZoom: !0
                    } : void 0,
                    Q = e => {
                        var t,
                            n;
                        let r = H.current + e,
                            i = F().filter(e => !e.disabled),
                            o = document.activeElement,
                            a = null === (t = i.find(e => e.ref.current === o)) || void 0 === t ? void 0 : t.textValue,
                            s = i.map(e => e.textValue),
                            l = function(e, t, n) {
                                var r;
                                let i = t.length > 1 && Array.from(t).every(e => e === t[0]),
                                    o = i ? t[0] : t,
                                    a = n ? e.indexOf(n) : -1,
                                    s = (r = Math.max(a, 0), e.map((t, n) => e[(r + n) % e.length])),
                                    l = 1 === o.length;
                                l && (s = s.filter(e => e !== n));
                                let u = s.find(e => e.toLowerCase().startsWith(o.toLowerCase()));
                                return u !== n ? u : void 0
                            }(s, r, a),
                            u = null === (n = i.find(e => e.textValue === l)) || void 0 === n ? void 0 : n.ref.current;
                        !function e(t) {
                            H.current = t,
                            window.clearTimeout(z.current),
                            "" !== t && (z.current = window.setTimeout(() => e(""), 1e3))
                        }(r),
                        u && setTimeout(() => u.focus())
                    };
                (0, i.useEffect)(() => () => window.clearTimeout(z.current), []),
                (0, h.EW)();
                let ee = (0, i.useCallback)(e => {
                    var t,
                        n;
                    let r = K.current === (null === (t = Z.current) || void 0 === t ? void 0 : t.side);
                    return r && function(e, t) {
                            if (!t)
                                return !1;
                            let n = {
                                x: e.clientX,
                                y: e.clientY
                            };
                            return function(e, t) {
                                let {x: n, y: r} = e,
                                    i = !1;
                                for (let e = 0, o = t.length - 1; e < t.length; o = e++) {
                                    let a = t[e].x,
                                        s = t[e].y,
                                        l = t[o].x,
                                        u = t[o].y,
                                        c = s > r != u > r && n < (l - a) * (r - s) / (u - s) + a;
                                    c && (i = !i)
                                }
                                return i
                            }(n, t)
                        }(e, null === (n = Z.current) || void 0 === n ? void 0 : n.area)
                }, []);
                return (0, i.createElement)(G, {
                    scope: n,
                    searchRef: H,
                    onItemEnter: (0, i.useCallback)(e => {
                        ee(e) && e.preventDefault()
                    }, [ee]),
                    onItemLeave: (0, i.useCallback)(e => {
                        var t;
                        ee(e) || (null === (t = W.current) || void 0 === t || t.focus(), N(null))
                    }, [ee]),
                    onTriggerLeave: (0, i.useCallback)(e => {
                        ee(e) && e.preventDefault()
                    }, [ee]),
                    pointerGraceTimerRef: U,
                    onPointerGraceIntentChange: (0, i.useCallback)(e => {
                        Z.current = e
                    }, [])
                }, (0, i.createElement)(X, J, (0, i.createElement)(p.M, {
                    asChild: !0,
                    trapped: l,
                    onMountAutoFocus: (0, o.M)(u, e => {
                        var t;
                        e.preventDefault(),
                        null === (t = W.current) || void 0 === t || t.focus()
                    }),
                    onUnmountAutoFocus: c
                }, (0, i.createElement)(f.XB, {
                    asChild: !0,
                    disableOutsidePointerEvents: d,
                    onEscapeKeyDown: g,
                    onPointerDownOutside: y,
                    onFocusOutside: x,
                    onInteractOutside: E,
                    onDismiss: C
                }, (0, i.createElement)(b.fC, (0, r.Z)({
                    asChild: !0
                }, O, {
                    dir: k.dir,
                    orientation: "vertical",
                    loop: s,
                    currentTabStopId: _,
                    onCurrentTabStopIdChange: N,
                    onEntryFocus: (0, o.M)(m, e => {
                        k.isUsingKeyboardRef.current || e.preventDefault()
                    })
                }), (0, i.createElement)(v.VY, (0, r.Z)({
                    role: "menu",
                    "aria-orientation": "vertical",
                    "data-state": ev(A.open),
                    "data-radix-menu-content": "",
                    dir: k.dir
                }, L, M, {
                    ref: $,
                    style: {
                        outline: "none",
                        ...M.style
                    },
                    onKeyDown: (0, o.M)(M.onKeyDown, e => {
                        let t = e.target,
                            n = t.closest("[data-radix-menu-content]") === e.currentTarget,
                            r = e.ctrlKey || e.altKey || e.metaKey,
                            i = 1 === e.key.length;
                        n && ("Tab" === e.key && e.preventDefault(), !r && i && Q(e.key));
                        let o = W.current;
                        if (e.target !== o || !R.includes(e.key))
                            return;
                        e.preventDefault();
                        let a = F().filter(e => !e.disabled),
                            s = a.map(e => e.ref.current);
                        S.includes(e.key) && s.reverse(),
                        function(e) {
                            let t = document.activeElement;
                            for (let n of e)
                                if (n === t || (n.focus(), document.activeElement !== t))
                                    return
                        }(s)
                    }),
                    onBlur: (0, o.M)(e.onBlur, e => {
                        e.currentTarget.contains(e.target) || (window.clearTimeout(z.current), H.current = "")
                    }),
                    onPointerMove: (0, o.M)(e.onPointerMove, eb(e => {
                        let t = e.target,
                            n = q.current !== e.clientX;
                        if (e.currentTarget.contains(t) && n) {
                            let t = e.clientX > q.current ? "right" : "left";
                            K.current = t,
                            q.current = e.clientX
                        }
                    }))
                })))))))
            }),
            ee = (0, i.forwardRef)((e, t) => {
                let {__scopeMenu: n, ...o} = e;
                return (0, i.createElement)(u.WV.div, (0, r.Z)({
                    role: "group"
                }, o, {
                    ref: t
                }))
            }),
            et = (0, i.forwardRef)((e, t) => {
                let {__scopeMenu: n, ...o} = e;
                return (0, i.createElement)(u.WV.div, (0, r.Z)({}, o, {
                    ref: t
                }))
            }),
            en = "MenuItem",
            er = "menu.itemSelect",
            ei = (0, i.forwardRef)((e, t) => {
                let {disabled: n=!1, onSelect: s, ...l} = e,
                    c = (0, i.useRef)(null),
                    d = B(en, e.__scopeMenu),
                    f = K(en, e.__scopeMenu),
                    h = (0, a.e)(t, c),
                    p = (0, i.useRef)(!1),
                    m = () => {
                        let e = c.current;
                        if (!n && e) {
                            let t = new CustomEvent(er, {
                                bubbles: !0,
                                cancelable: !0
                            });
                            e.addEventListener(er, e => null == s ? void 0 : s(e), {
                                once: !0
                            }),
                            (0, u.jH)(e, t),
                            t.defaultPrevented ? p.current = !1 : d.onClose()
                        }
                    };
                return (0, i.createElement)(eo, (0, r.Z)({}, l, {
                    ref: h,
                    disabled: n,
                    onClick: (0, o.M)(e.onClick, m),
                    onPointerDown: t => {
                        var n;
                        null === (n = e.onPointerDown) || void 0 === n || n.call(e, t),
                        p.current = !0
                    },
                    onPointerUp: (0, o.M)(e.onPointerUp, e => {
                        var t;
                        p.current || null === (t = e.currentTarget) || void 0 === t || t.click()
                    }),
                    onKeyDown: (0, o.M)(e.onKeyDown, e => {
                        let t = "" !== f.searchRef.current;
                        !n && (!t || " " !== e.key) && C.includes(e.key) && (e.currentTarget.click(), e.preventDefault())
                    })
                }))
            }),
            eo = (0, i.forwardRef)((e, t) => {
                let {__scopeMenu: n, disabled: s=!1, textValue: l, ...c} = e,
                    d = K(en, n),
                    f = V(n),
                    h = (0, i.useRef)(null),
                    p = (0, a.e)(t, h),
                    [m, v] = (0, i.useState)(!1),
                    [g, y] = (0, i.useState)("");
                return (0, i.useEffect)(() => {
                    let e = h.current;
                    if (e) {
                        var t;
                        y((null !== (t = e.textContent) && void 0 !== t ? t : "").trim())
                    }
                }, [c.children]), (0, i.createElement)(k.ItemSlot, {
                    scope: n,
                    disabled: s,
                    textValue: null != l ? l : g
                }, (0, i.createElement)(b.ck, (0, r.Z)({
                    asChild: !0
                }, f, {
                    focusable: !s
                }), (0, i.createElement)(u.WV.div, (0, r.Z)({
                    role: "menuitem",
                    "data-highlighted": m ? "" : void 0,
                    "aria-disabled": s || void 0,
                    "data-disabled": s ? "" : void 0
                }, c, {
                    ref: p,
                    onPointerMove: (0, o.M)(e.onPointerMove, eb(e => {
                        if (s)
                            d.onItemLeave(e);
                        else if (d.onItemEnter(e), !e.defaultPrevented) {
                            let t = e.currentTarget;
                            t.focus()
                        }
                    })),
                    onPointerLeave: (0, o.M)(e.onPointerLeave, eb(e => d.onItemLeave(e))),
                    onFocus: (0, o.M)(e.onFocus, () => v(!0)),
                    onBlur: (0, o.M)(e.onBlur, () => v(!1))
                }))))
            }),
            [ea, es] = ((e, t) => {
                let {checked: n=!1, onCheckedChange: a, ...s} = e;
                return (0, i.createElement)(ed, {
                    scope: e.__scopeMenu,
                    checked: n
                }, (0, i.createElement)(ei, (0, r.Z)({
                    role: "menuitemcheckbox",
                    "aria-checked": eg(n) ? "mixed" : n
                }, s, {
                    ref: t,
                    "data-state": ey(n),
                    onSelect: (0, o.M)(s.onSelect, () => null == a ? void 0 : a(!!eg(n) || !n), {
                        checkForDefaultPrevented: !1
                    })
                })))
            }, O("MenuRadioGroup", {
                value: void 0,
                onValueChange: () => {}
            })),
            el = (0, i.forwardRef)((e, t) => {
                let {value: n, onValueChange: o, ...a} = e,
                    s = (0, x.W)(o);
                return (0, i.createElement)(ea, {
                    scope: e.__scopeMenu,
                    value: n,
                    onValueChange: s
                }, (0, i.createElement)(ee, (0, r.Z)({}, a, {
                    ref: t
                })))
            }),
            eu = (0, i.forwardRef)((e, t) => {
                let {value: n, ...a} = e,
                    s = es("MenuRadioItem", e.__scopeMenu),
                    l = n === s.value;
                return (0, i.createElement)(ed, {
                    scope: e.__scopeMenu,
                    checked: l
                }, (0, i.createElement)(ei, (0, r.Z)({
                    role: "menuitemradio",
                    "aria-checked": l
                }, a, {
                    ref: t,
                    "data-state": ey(l),
                    onSelect: (0, o.M)(a.onSelect, () => {
                        var e;
                        return null === (e = s.onValueChange) || void 0 === e ? void 0 : e.call(s, n)
                    }, {
                        checkForDefaultPrevented: !1
                    })
                })))
            }),
            ec = "MenuItemIndicator",
            [ed, ef] = O(ec, {
                checked: !1
            }),
            [eh, ep] = ((e, t) => {
                let {__scopeMenu: n, forceMount: o, ...a} = e,
                    s = ef(ec, n);
                return (0, i.createElement)(y.z, {
                    present: o || eg(s.checked) || !0 === s.checked
                }, (0, i.createElement)(u.WV.span, (0, r.Z)({}, a, {
                    ref: t,
                    "data-state": ey(s.checked)
                })))
            }, O("MenuSub")),
            em = "MenuSubTrigger";
        function ev(e) {
            return e ? "open" : "closed"
        }
        function eg(e) {
            return "indeterminate" === e
        }
        function ey(e) {
            return eg(e) ? "indeterminate" : e ? "checked" : "unchecked"
        }
        function eb(e) {
            return t => "mouse" === t.pointerType ? e(t) : void 0
        }
        (e, t) => {
            let n = j(em, e.__scopeMenu),
                s = B(em, e.__scopeMenu),
                l = ep(em, e.__scopeMenu),
                u = K(em, e.__scopeMenu),
                c = (0, i.useRef)(null),
                {pointerGraceTimerRef: d, onPointerGraceIntentChange: f} = u,
                h = {
                    __scopeMenu: e.__scopeMenu
                },
                p = (0, i.useCallback)(() => {
                    c.current && window.clearTimeout(c.current),
                    c.current = null
                }, []);
            return (0, i.useEffect)(() => p, [p]), (0, i.useEffect)(() => {
                let e = d.current;
                return () => {
                    window.clearTimeout(e),
                    f(null)
                }
            }, [d, f]), (0, i.createElement)($, (0, r.Z)({
                asChild: !0
            }, h), (0, i.createElement)(eo, (0, r.Z)({
                id: l.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": n.open,
                "aria-controls": l.contentId,
                "data-state": ev(n.open)
            }, e, {
                ref: (0, a.F)(t, l.onTriggerChange),
                onClick: t => {
                    var r;
                    null === (r = e.onClick) || void 0 === r || r.call(e, t),
                    e.disabled || t.defaultPrevented || (t.currentTarget.focus(), n.open || n.onOpenChange(!0))
                },
                onPointerMove: (0, o.M)(e.onPointerMove, eb(t => {
                    u.onItemEnter(t),
                    t.defaultPrevented || e.disabled || n.open || c.current || (u.onPointerGraceIntentChange(null), c.current = window.setTimeout(() => {
                        n.onOpenChange(!0),
                        p()
                    }, 100))
                })),
                onPointerLeave: (0, o.M)(e.onPointerLeave, eb(e => {
                    var t,
                        r;
                    p();
                    let i = null === (t = n.content) || void 0 === t ? void 0 : t.getBoundingClientRect();
                    if (i) {
                        let t = null === (r = n.content) || void 0 === r ? void 0 : r.dataset.side,
                            o = "right" === t,
                            a = i[o ? "left" : "right"],
                            s = i[o ? "right" : "left"];
                        u.onPointerGraceIntentChange({
                            area: [{
                                x: e.clientX + (o ? -5 : 5),
                                y: e.clientY
                            }, {
                                x: a,
                                y: i.top
                            }, {
                                x: s,
                                y: i.top
                            }, {
                                x: s,
                                y: i.bottom
                            }, {
                                x: a,
                                y: i.bottom
                            }],
                            side: t
                        }),
                        window.clearTimeout(d.current),
                        d.current = window.setTimeout(() => u.onPointerGraceIntentChange(null), 300)
                    } else {
                        if (u.onTriggerLeave(e), e.defaultPrevented)
                            return;
                        u.onPointerGraceIntentChange(null)
                    }
                })),
                onKeyDown: (0, o.M)(e.onKeyDown, t => {
                    let r = "" !== u.searchRef.current;
                    if (!e.disabled && (!r || " " !== t.key) && T[s.dir].includes(t.key)) {
                        var i;
                        n.onOpenChange(!0),
                        null === (i = n.content) || void 0 === i || i.focus(),
                        t.preventDefault()
                    }
                })
            })))
        },
        (e, t) => {
            let n = U(Y, e.__scopeMenu),
                {forceMount: s=n.forceMount, ...l} = e,
                u = j(Y, e.__scopeMenu),
                c = B(Y, e.__scopeMenu),
                d = ep("MenuSubContent", e.__scopeMenu),
                f = (0, i.useRef)(null),
                h = (0, a.e)(t, f);
            return (0, i.createElement)(k.Provider, {
                scope: e.__scopeMenu
            }, (0, i.createElement)(y.z, {
                present: s || u.open
            }, (0, i.createElement)(k.Slot, {
                scope: e.__scopeMenu
            }, (0, i.createElement)(Q, (0, r.Z)({
                id: d.contentId,
                "aria-labelledby": d.triggerId
            }, l, {
                ref: h,
                align: "start",
                side: "rtl" === c.dir ? "left" : "right",
                disableOutsidePointerEvents: !1,
                disableOutsideScroll: !1,
                trapFocus: !1,
                onOpenAutoFocus: e => {
                    var t;
                    c.isUsingKeyboardRef.current && (null === (t = f.current) || void 0 === t || t.focus()),
                    e.preventDefault()
                },
                onCloseAutoFocus: e => e.preventDefault(),
                onFocusOutside: (0, o.M)(e.onFocusOutside, e => {
                    e.target !== d.trigger && u.onOpenChange(!1)
                }),
                onEscapeKeyDown: (0, o.M)(e.onEscapeKeyDown, e => {
                    c.onClose(),
                    e.preventDefault()
                }),
                onKeyDown: (0, o.M)(e.onKeyDown, e => {
                    let t = e.currentTarget.contains(e.target),
                        n = M[c.dir].includes(e.key);
                    if (t && n) {
                        var r;
                        u.onOpenChange(!1),
                        null === (r = d.trigger) || void 0 === r || r.focus(),
                        e.preventDefault()
                    }
                })
            })))))
        };
        let ew = "DropdownMenu",
            [ex, eE] = (0, s.b)(ew, [F]),
            eP = F(),
            [eC, eS] = ex(ew),
            eR = e => {
                let {__scopeDropdownMenu: t, children: n, dir: o, open: a, defaultOpen: s, onOpenChange: u, modal: c=!0} = e,
                    d = eP(t),
                    f = (0, i.useRef)(null),
                    [h=!1, p] = (0, l.T)({
                        prop: a,
                        defaultProp: s,
                        onChange: u
                    });
                return (0, i.createElement)(eC, {
                    scope: t,
                    triggerId: (0, m.M)(),
                    triggerRef: f,
                    contentId: (0, m.M)(),
                    open: h,
                    onOpenChange: p,
                    onOpenToggle: (0, i.useCallback)(() => p(e => !e), [p]),
                    modal: c
                }, (0, i.createElement)(W, (0, r.Z)({}, d, {
                    open: h,
                    onOpenChange: p,
                    dir: o,
                    modal: c
                }), n))
            },
            eT = (0, i.forwardRef)((e, t) => {
                let {__scopeDropdownMenu: n, disabled: s=!1, ...l} = e,
                    c = eS("DropdownMenuTrigger", n),
                    d = eP(n);
                return (0, i.createElement)($, (0, r.Z)({
                    asChild: !0
                }, d), (0, i.createElement)(u.WV.button, (0, r.Z)({
                    type: "button",
                    id: c.triggerId,
                    "aria-haspopup": "menu",
                    "aria-expanded": c.open,
                    "aria-controls": c.open ? c.contentId : void 0,
                    "data-state": c.open ? "open" : "closed",
                    "data-disabled": s ? "" : void 0,
                    disabled: s
                }, l, {
                    ref: (0, a.F)(t, c.triggerRef),
                    onPointerDown: (0, o.M)(e.onPointerDown, e => {
                        s || 0 !== e.button || !1 !== e.ctrlKey || (c.onOpenToggle(), c.open || e.preventDefault())
                    }),
                    onKeyDown: (0, o.M)(e.onKeyDown, e => {
                        !s && (["Enter", " "].includes(e.key) && c.onOpenToggle(), "ArrowDown" === e.key && c.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(e.key) && e.preventDefault())
                    })
                })))
            }),
            eM = e => {
                let {__scopeDropdownMenu: t, ...n} = e,
                    o = eP(t);
                return (0, i.createElement)(Z, (0, r.Z)({}, o, n))
            },
            eA = (0, i.forwardRef)((e, t) => {
                let {__scopeDropdownMenu: n, ...a} = e,
                    s = eS("DropdownMenuContent", n),
                    l = eP(n),
                    u = (0, i.useRef)(!1);
                return (0, i.createElement)(q, (0, r.Z)({
                    id: s.contentId,
                    "aria-labelledby": s.triggerId
                }, l, a, {
                    ref: t,
                    onCloseAutoFocus: (0, o.M)(e.onCloseAutoFocus, e => {
                        var t;
                        u.current || null === (t = s.triggerRef.current) || void 0 === t || t.focus(),
                        u.current = !1,
                        e.preventDefault()
                    }),
                    onInteractOutside: (0, o.M)(e.onInteractOutside, e => {
                        let t = e.detail.originalEvent,
                            n = 0 === t.button && !0 === t.ctrlKey,
                            r = 2 === t.button || n;
                        (!s.modal || r) && (u.current = !0)
                    }),
                    style: {
                        ...e.style,
                        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                    }
                }))
            }),
            ek = (0, i.forwardRef)((e, t) => {
                let {__scopeDropdownMenu: n, ...o} = e,
                    a = eP(n);
                return (0, i.createElement)(et, (0, r.Z)({}, a, o, {
                    ref: t
                }))
            }),
            eD = (0, i.forwardRef)((e, t) => {
                let {__scopeDropdownMenu: n, ...o} = e,
                    a = eP(n);
                return (0, i.createElement)(ei, (0, r.Z)({}, a, o, {
                    ref: t
                }))
            }),
            eL = (0, i.forwardRef)((e, t) => {
                let {__scopeDropdownMenu: n, ...o} = e,
                    a = eP(n);
                return (0, i.createElement)(el, (0, r.Z)({}, a, o, {
                    ref: t
                }))
            }),
            eO = (0, i.forwardRef)((e, t) => {
                let {__scopeDropdownMenu: n, ...o} = e,
                    a = eP(n);
                return (0, i.createElement)(eu, (0, r.Z)({}, a, o, {
                    ref: t
                }))
            }),
            eF = eR,
            eI = eT,
            eV = eM,
            e_ = eA,
            ej = ek,
            eN = eD,
            eB = eL,
            eW = eO
    },
    83208: function(e, t, n) {
        "use strict";
        n.d(t, {
            Pc: function() {
                return x
            },
            ck: function() {
                return k
            },
            fC: function() {
                return A
            }
        });
        var r = n(45675),
            i = n(70079),
            o = n(72901),
            a = n(68539),
            s = n(49270),
            l = n(36646),
            u = n(88817),
            c = n(39073),
            d = n(9137),
            f = n(86004),
            h = n(28036);
        let p = "rovingFocusGroup.onEntryFocus",
            m = {
                bubbles: !1,
                cancelable: !0
            },
            v = "RovingFocusGroup",
            [g, y, b] = (0, a.B)(v),
            [w, x] = (0, l.b)(v, [b]),
            [E, P] = w(v),
            C = (0, i.forwardRef)((e, t) => (0, i.createElement)(g.Provider, {
                scope: e.__scopeRovingFocusGroup
            }, (0, i.createElement)(g.Slot, {
                scope: e.__scopeRovingFocusGroup
            }, (0, i.createElement)(S, (0, r.Z)({}, e, {
                ref: t
            }))))),
            S = (0, i.forwardRef)((e, t) => {
                let {__scopeRovingFocusGroup: n, orientation: a, loop: l=!1, dir: u, currentTabStopId: v, defaultCurrentTabStopId: g, onCurrentTabStopIdChange: b, onEntryFocus: w, ...x} = e,
                    P = (0, i.useRef)(null),
                    C = (0, s.e)(t, P),
                    S = (0, h.gm)(u),
                    [R=null, T] = (0, f.T)({
                        prop: v,
                        defaultProp: g,
                        onChange: b
                    }),
                    [A, k] = (0, i.useState)(!1),
                    D = (0, d.W)(w),
                    L = y(n),
                    O = (0, i.useRef)(!1),
                    [F, I] = (0, i.useState)(0);
                return (0, i.useEffect)(() => {
                    let e = P.current;
                    if (e)
                        return e.addEventListener(p, D), () => e.removeEventListener(p, D)
                }, [D]), (0, i.createElement)(E, {
                    scope: n,
                    orientation: a,
                    dir: S,
                    loop: l,
                    currentTabStopId: R,
                    onItemFocus: (0, i.useCallback)(e => T(e), [T]),
                    onItemShiftTab: (0, i.useCallback)(() => k(!0), []),
                    onFocusableItemAdd: (0, i.useCallback)(() => I(e => e + 1), []),
                    onFocusableItemRemove: (0, i.useCallback)(() => I(e => e - 1), [])
                }, (0, i.createElement)(c.WV.div, (0, r.Z)({
                    tabIndex: A || 0 === F ? -1 : 0,
                    "data-orientation": a
                }, x, {
                    ref: C,
                    style: {
                        outline: "none",
                        ...e.style
                    },
                    onMouseDown: (0, o.M)(e.onMouseDown, () => {
                        O.current = !0
                    }),
                    onFocus: (0, o.M)(e.onFocus, e => {
                        let t = !O.current;
                        if (e.target === e.currentTarget && t && !A) {
                            let t = new CustomEvent(p, m);
                            if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                                let e = L().filter(e => e.focusable),
                                    t = e.find(e => e.active),
                                    n = e.find(e => e.id === R),
                                    r = [t, n, ...e].filter(Boolean),
                                    i = r.map(e => e.ref.current);
                                M(i)
                            }
                        }
                        O.current = !1
                    }),
                    onBlur: (0, o.M)(e.onBlur, () => k(!1))
                })))
            }),
            R = (0, i.forwardRef)((e, t) => {
                let {__scopeRovingFocusGroup: n, focusable: a=!0, active: s=!1, tabStopId: l, ...d} = e,
                    f = (0, u.M)(),
                    h = l || f,
                    p = P("RovingFocusGroupItem", n),
                    m = p.currentTabStopId === h,
                    v = y(n),
                    {onFocusableItemAdd: b, onFocusableItemRemove: w} = p;
                return (0, i.useEffect)(() => {
                    if (a)
                        return b(), () => w()
                }, [a, b, w]), (0, i.createElement)(g.ItemSlot, {
                    scope: n,
                    id: h,
                    focusable: a,
                    active: s
                }, (0, i.createElement)(c.WV.span, (0, r.Z)({
                    tabIndex: m ? 0 : -1,
                    "data-orientation": p.orientation
                }, d, {
                    ref: t,
                    onMouseDown: (0, o.M)(e.onMouseDown, e => {
                        a ? p.onItemFocus(h) : e.preventDefault()
                    }),
                    onFocus: (0, o.M)(e.onFocus, () => p.onItemFocus(h)),
                    onKeyDown: (0, o.M)(e.onKeyDown, e => {
                        if ("Tab" === e.key && e.shiftKey) {
                            p.onItemShiftTab();
                            return
                        }
                        if (e.target !== e.currentTarget)
                            return;
                        let t = function(e, t, n) {
                            var r;
                            let i = (r = e.key, "rtl" !== n ? r : "ArrowLeft" === r ? "ArrowRight" : "ArrowRight" === r ? "ArrowLeft" : r);
                            if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(i)) && !("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(i)))
                                return T[i]
                        }(e, p.orientation, p.dir);
                        if (void 0 !== t) {
                            e.preventDefault();
                            let i = v().filter(e => e.focusable),
                                o = i.map(e => e.ref.current);
                            if ("last" === t)
                                o.reverse();
                            else if ("prev" === t || "next" === t) {
                                var n,
                                    r;
                                "prev" === t && o.reverse();
                                let i = o.indexOf(e.currentTarget);
                                o = p.loop ? (n = o, r = i + 1, n.map((e, t) => n[(r + t) % n.length])) : o.slice(i + 1)
                            }
                            setTimeout(() => M(o))
                        }
                    })
                })))
            }),
            T = {
                ArrowLeft: "prev",
                ArrowUp: "prev",
                ArrowRight: "next",
                ArrowDown: "next",
                PageUp: "first",
                Home: "first",
                PageDown: "last",
                End: "last"
            };
        function M(e) {
            let t = document.activeElement;
            for (let n of e)
                if (n === t || (n.focus(), document.activeElement !== t))
                    return
        }
        let A = C,
            k = R
    },
    51516: function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (t.length < e)
                throw TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present")
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    17224: function(e, t, n) {
        "use strict";
        function r(e) {
            if (null === e || !0 === e || !1 === e)
                return NaN;
            var t = Number(e);
            return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t)
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    66293: function(e, t, n) {
        var r = n(73401).Symbol;
        e.exports = r
    },
    70331: function(e) {
        e.exports = function(e, t, n) {
            return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
        }
    },
    57398: function(e, t, n) {
        var r = n(66293),
            i = n(46945),
            o = n(51584),
            a = r ? r.toStringTag : void 0;
        e.exports = function(e) {
            return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? i(e) : o(e)
        }
    },
    33897: function(e, t, n) {
        var r = n(15012),
            i = /^\s+/;
        e.exports = function(e) {
            return e ? e.slice(0, r(e) + 1).replace(i, "") : e
        }
    },
    40151: function(e, t, n) {
        var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
        e.exports = r
    },
    46945: function(e, t, n) {
        var r = n(66293),
            i = Object.prototype,
            o = i.hasOwnProperty,
            a = i.toString,
            s = r ? r.toStringTag : void 0;
        e.exports = function(e) {
            var t = o.call(e, s),
                n = e[s];
            try {
                e[s] = void 0;
                var r = !0
            } catch (e) {}
            var i = a.call(e);
            return r && (t ? e[s] = n : delete e[s]), i
        }
    },
    51584: function(e) {
        var t = Object.prototype.toString;
        e.exports = function(e) {
            return t.call(e)
        }
    },
    73401: function(e, t, n) {
        var r = n(40151),
            i = "object" == typeof self && self && self.Object === Object && self,
            o = r || i || Function("return this")();
        e.exports = o
    },
    15012: function(e) {
        var t = /\s/;
        e.exports = function(e) {
            for (var n = e.length; n-- && t.test(e.charAt(n));)
                ;
            return n
        }
    },
    95182: function(e, t, n) {
        var r = n(70331),
            i = n(67948);
        e.exports = function(e, t, n) {
            return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = i(n)) == n ? n : 0), void 0 !== t && (t = (t = i(t)) == t ? t : 0), r(i(e), t, n)
        }
    },
    6627: function(e) {
        e.exports = function(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }
    },
    89109: function(e) {
        e.exports = function(e) {
            return null != e && "object" == typeof e
        }
    },
    42848: function(e, t, n) {
        var r = n(57398),
            i = n(89109);
        e.exports = function(e) {
            return "symbol" == typeof e || i(e) && "[object Symbol]" == r(e)
        }
    },
    67948: function(e, t, n) {
        var r = n(33897),
            i = n(6627),
            o = n(42848),
            a = 0 / 0,
            s = /^[-+]0x[0-9a-f]+$/i,
            l = /^0b[01]+$/i,
            u = /^0o[0-7]+$/i,
            c = parseInt;
        e.exports = function(e) {
            if ("number" == typeof e)
                return e;
            if (o(e))
                return a;
            if (i(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = i(t) ? t + "" : t
            }
            if ("string" != typeof e)
                return 0 === e ? e : +e;
            e = r(e);
            var n = l.test(e);
            return n || u.test(e) ? c(e.slice(2), n ? 2 : 8) : s.test(e) ? a : +e
        }
    },
    60076: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(39324),
            i = n(71209),
            o = n(70216),
            a = n(22830),
            s = n(81949);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return x
            }
        });
        var l = n(64838),
            u = n(15542)._(n(70079)),
            c = l._(n(63339)),
            d = n(19023),
            f = n(7202),
            h = n(32109);
        n(51038);
        var p = l._(n(91226)),
            m = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !1
            };
        function v(e) {
            return void 0 !== e.default
        }
        function g(e) {
            return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
        }
        function y(e, t, n, o, a, s, l) {
            e && e["data-loaded-src"] !== t && (e["data-loaded-src"] = t, ("decode" in e ? e.decode() : Promise.resolve()).catch(function() {}).then(function() {
                if (e.parentElement && e.isConnected) {
                    if ("blur" === n && s(!0), null == o ? void 0 : o.current) {
                        var t = new Event("load");
                        Object.defineProperty(t, "target", {
                            writable: !1,
                            value: e
                        });
                        var l = !1,
                            u = !1;
                        o.current(i._(r._({}, t), {
                            nativeEvent: t,
                            currentTarget: e,
                            target: e,
                            isDefaultPrevented: function() {
                                return l
                            },
                            isPropagationStopped: function() {
                                return u
                            },
                            persist: function() {},
                            preventDefault: function() {
                                l = !0,
                                t.preventDefault()
                            },
                            stopPropagation: function() {
                                u = !0,
                                t.stopPropagation()
                            }
                        }))
                    }
                    (null == a ? void 0 : a.current) && a.current(e)
                }
            }))
        }
        function b(e) {
            var t = a._(u.version.split("."), 2),
                n = t[0],
                r = t[1],
                i = parseInt(n, 10),
                o = parseInt(r, 10);
            return i > 18 || 18 === i && o >= 3 ? {
                fetchPriority: e
            } : {
                fetchpriority: e
            }
        }
        var w = (0, u.forwardRef)(function(e, t) {
                var n = e.imgAttributes,
                    a = e.heightInt,
                    s = e.widthInt,
                    l = (e.qualityInt, e.className),
                    c = e.imgStyle,
                    d = e.blurStyle,
                    f = e.isLazy,
                    h = e.fetchPriority,
                    p = e.fill,
                    m = e.placeholder,
                    v = e.loading,
                    g = e.srcString,
                    w = (e.config, e.unoptimized),
                    x = (e.loader, e.onLoadRef),
                    E = e.onLoadingCompleteRef,
                    P = e.setBlurComplete,
                    C = e.setShowAltText,
                    S = (e.onLoad, e.onError),
                    R = o._(e, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "className", "imgStyle", "blurStyle", "isLazy", "fetchPriority", "fill", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadRef", "onLoadingCompleteRef", "setBlurComplete", "setShowAltText", "onLoad", "onError"]);
                return v = f ? "lazy" : v, u.default.createElement(u.default.Fragment, null, u.default.createElement("img", i._(r._(i._(r._({}, R, b(h)), {
                    loading: v,
                    width: s,
                    height: a,
                    decoding: "async",
                    "data-nimg": p ? "fill" : "1",
                    className: l,
                    style: r._({}, c, d)
                }), n), {
                    ref: (0, u.useCallback)(function(e) {
                        t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)),
                        e && (S && (e.src = e.src), e.complete && y(e, g, m, x, E, P, w))
                    }, [g, m, x, E, P, S, w, t]),
                    onLoad: function(e) {
                        y(e.currentTarget, g, m, x, E, P, w)
                    },
                    onError: function(e) {
                        C(!0),
                        "blur" === m && P(!0),
                        S && S(e)
                    }
                })))
            }),
            x = (0, u.forwardRef)(function(e, t) {
                var n,
                    l,
                    y,
                    x = e.src,
                    E = e.sizes,
                    P = e.unoptimized,
                    C = void 0 !== P && P,
                    S = e.priority,
                    R = void 0 !== S && S,
                    T = e.loading,
                    M = e.className,
                    A = e.quality,
                    k = e.width,
                    D = e.height,
                    L = e.fill,
                    O = e.style,
                    F = e.onLoad,
                    I = e.onLoadingComplete,
                    V = e.placeholder,
                    _ = void 0 === V ? "empty" : V,
                    j = e.blurDataURL,
                    N = e.fetchPriority,
                    B = e.layout,
                    W = e.objectFit,
                    $ = e.objectPosition,
                    z = (e.lazyBoundary, e.lazyRoot, o._(e, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "fill", "style", "onLoad", "onLoadingComplete", "placeholder", "blurDataURL", "fetchPriority", "layout", "objectFit", "objectPosition", "lazyBoundary", "lazyRoot"])),
                    H = (0, u.useContext)(h.ImageConfigContext),
                    U = (0, u.useMemo)(function() {
                        var e = m || H || f.imageConfigDefault,
                            t = s._(e.deviceSizes).concat(s._(e.imageSizes)).sort(function(e, t) {
                                return e - t
                            }),
                            n = e.deviceSizes.sort(function(e, t) {
                                return e - t
                            });
                        return i._(r._({}, e), {
                            allSizes: t,
                            deviceSizes: n
                        })
                    }, [H]),
                    Z = z,
                    Y = Z.loader || p.default;
                delete Z.loader;
                var G = "__next_img_default" in Y;
                if (G) {
                    if ("custom" === U.loader)
                        throw Error('Image with src "' + x + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                } else {
                    var K = Y;
                    Y = function(e) {
                        return e.config, K(o._(e, ["config"]))
                    }
                }
                if (B) {
                    "fill" === B && (L = !0);
                    var q = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    }[B];
                    q && (O = r._({}, O, q));
                    var X = {
                        responsive: "100vw",
                        fill: "100vw"
                    }[B];
                    X && !E && (E = X)
                }
                var J = "",
                    Q = g(k),
                    ee = g(D);
                if ("object" == typeof (n = x) && (v(n) || void 0 !== n.src)) {
                    var et = v(x) ? x.default : x;
                    if (!et.src)
                        throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(et));
                    if (!et.height || !et.width)
                        throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(et));
                    if (l = et.blurWidth, y = et.blurHeight, j = j || et.blurDataURL, J = et.src, !L) {
                        if (Q || ee) {
                            if (Q && !ee) {
                                var en = Q / et.width;
                                ee = Math.round(et.height * en)
                            } else if (!Q && ee) {
                                var er = ee / et.height;
                                Q = Math.round(et.width * er)
                            }
                        } else
                            Q = et.width,
                            ee = et.height
                    }
                }
                var ei = !R && ("lazy" === T || void 0 === T);
                (!(x = "string" == typeof x ? x : J) || x.startsWith("data:") || x.startsWith("blob:")) && (C = !0, ei = !1),
                U.unoptimized && (C = !0),
                G && x.endsWith(".svg") && !U.dangerouslyAllowSVG && (C = !0),
                R && (N = "high");
                var eo = a._((0, u.useState)(!1), 2),
                    ea = eo[0],
                    es = eo[1],
                    el = a._((0, u.useState)(!1), 2),
                    eu = el[0],
                    ec = el[1],
                    ed = g(A),
                    ef = Object.assign(L ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: W,
                        objectPosition: $
                    } : {}, eu ? {} : {
                        color: "transparent"
                    }, O),
                    eh = "blur" === _ && j && !ea ? {
                        backgroundSize: ef.objectFit || "cover",
                        backgroundPosition: ef.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: 'url("data:image/svg+xml;charset=utf-8,' + (0, d.getImageBlurSvg)({
                            widthInt: Q,
                            heightInt: ee,
                            blurWidth: l,
                            blurHeight: y,
                            blurDataURL: j,
                            objectFit: ef.objectFit
                        }) + '")'
                    } : {},
                    ep = function(e) {
                        var t = e.config,
                            n = e.src,
                            r = e.unoptimized,
                            i = e.width,
                            o = e.quality,
                            a = e.sizes,
                            l = e.loader;
                        if (r)
                            return {
                                src: n,
                                srcSet: void 0,
                                sizes: void 0
                            };
                        var u = function(e, t, n) {
                                var r = e.deviceSizes,
                                    i = e.allSizes;
                                if (n) {
                                    for (var o = /(^|\s)(1?\d?\d)vw/g, a = []; l = o.exec(n); l)
                                        a.push(parseInt(l[2]));
                                    if (a.length) {
                                        var l,
                                            u,
                                            c = .01 * (u = Math).min.apply(u, s._(a));
                                        return {
                                            widths: i.filter(function(e) {
                                                return e >= r[0] * c
                                            }),
                                            kind: "w"
                                        }
                                    }
                                    return {
                                        widths: i,
                                        kind: "w"
                                    }
                                }
                                return "number" != typeof t ? {
                                    widths: r,
                                    kind: "w"
                                } : {
                                    widths: s._(new Set([t, 2 * t].map(function(e) {
                                        return i.find(function(t) {
                                                return t >= e
                                            }) || i[i.length - 1]
                                    }))),
                                    kind: "x"
                                }
                            }(t, i, a),
                            c = u.widths,
                            d = u.kind,
                            f = c.length - 1;
                        return {
                            sizes: a || "w" !== d ? a : "100vw",
                            srcSet: c.map(function(e, r) {
                                return l({
                                    config: t,
                                    src: n,
                                    quality: o,
                                    width: e
                                }) + " " + ("w" === d ? e : r + 1) + d
                            }).join(", "),
                            src: l({
                                config: t,
                                src: n,
                                quality: o,
                                width: c[f]
                            })
                        }
                    }({
                        config: U,
                        src: x,
                        unoptimized: C,
                        width: Q,
                        quality: ed,
                        sizes: E,
                        loader: Y
                    }),
                    em = x,
                    ev = (0, u.useRef)(F);
                (0, u.useEffect)(function() {
                    ev.current = F
                }, [F]);
                var eg = (0, u.useRef)(I);
                (0, u.useEffect)(function() {
                    eg.current = I
                }, [I]);
                var ey = r._({
                    isLazy: ei,
                    imgAttributes: ep,
                    heightInt: ee,
                    widthInt: Q,
                    qualityInt: ed,
                    className: M,
                    imgStyle: ef,
                    blurStyle: eh,
                    loading: T,
                    config: U,
                    fetchPriority: N,
                    fill: L,
                    unoptimized: C,
                    placeholder: _,
                    loader: Y,
                    srcString: em,
                    onLoadRef: ev,
                    onLoadingCompleteRef: eg,
                    setBlurComplete: es,
                    setShowAltText: ec
                }, Z);
                return u.default.createElement(u.default.Fragment, null, u.default.createElement(w, i._(r._({}, ey), {
                    ref: t
                })), R ? u.default.createElement(c.default, null, u.default.createElement("link", r._({
                    key: "__nimg-" + ep.src + ep.srcSet + ep.sizes,
                    rel: "preload",
                    as: "image",
                    href: ep.srcSet ? void 0 : ep.src,
                    imageSrcSet: ep.srcSet,
                    imageSizes: ep.sizes,
                    crossOrigin: Z.crossOrigin
                }, b(N)))) : null)
            });
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }), Object.assign(t.default, t), e.exports = t.default)
    },
    19023: function(e, t) {
        "use strict";
        function n(e) {
            var t = e.widthInt,
                n = e.heightInt,
                r = e.blurWidth,
                i = e.blurHeight,
                o = e.blurDataURL,
                a = e.objectFit,
                s = r || t,
                l = i || n,
                u = o.startsWith("data:image/jpeg") ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%" : "";
            return s && l ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 " + s + " " + l + "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" + (r && i ? "1" : "20") + "'/%3E" + u + "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='" + o + "'/%3E%3C/svg%3E" : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='" + ("contain" === a ? "xMidYMid" : "cover" === a ? "xMidYMid slice" : "none") + "' x='0' y='0' height='100%25' width='100%25' href='" + o + "'/%3E%3C/svg%3E"
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getImageBlurSvg", {
            enumerable: !0,
            get: function() {
                return n
            }
        })
    },
    91226: function(e, t) {
        "use strict";
        function n(e) {
            var t = e.config,
                n = e.src,
                r = e.width,
                i = e.quality;
            return t.path + "?url=" + encodeURIComponent(n) + "&w=" + r + "&q=" + (i || 75)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return r
            }
        }),
        n.__next_img_default = !0;
        var r = n
    },
    19579: function(e, t, n) {
        e.exports = n(60076)
    },
    94968: function(e, t, n) {
        "use strict";
        n.d(t, {
            Ji: function() {
                return p
            },
            vU: function() {
                return h
            }
        });
        var r,
            i,
            o,
            a,
            s = n(39889),
            l = n(70079),
            u = n(70671);
        (r = o || (o = {})).formatDate = "FormattedDate",
        r.formatTime = "FormattedTime",
        r.formatNumber = "FormattedNumber",
        r.formatList = "FormattedList",
        r.formatDisplayName = "FormattedDisplayName",
        (i = a || (a = {})).formatDate = "FormattedDateParts",
        i.formatTime = "FormattedTimeParts",
        i.formatNumber = "FormattedNumberParts",
        i.formatList = "FormattedListParts";
        var c = function(e) {
            var t = (0, u.Z)(),
                n = e.value,
                r = e.children,
                i = (0, s.__rest)(e, ["value", "children"]);
            return r(t.formatNumberToParts(n, i))
        };
        function d(e) {
            var t = function(t) {
                var n = (0, u.Z)(),
                    r = t.value,
                    i = t.children,
                    o = (0, s.__rest)(t, ["value", "children"]),
                    a = "string" == typeof r ? new Date(r || 0) : r;
                return i("formatDate" === e ? n.formatDateToParts(a, o) : n.formatTimeToParts(a, o))
            };
            return t.displayName = a[e], t
        }
        function f(e) {
            var t = function(t) {
                var n = (0, u.Z)(),
                    r = t.value,
                    i = t.children,
                    o = (0, s.__rest)(t, ["value", "children"]),
                    a = n[e](r, o);
                if ("function" == typeof i)
                    return i(a);
                var c = n.textComponent || l.Fragment;
                return l.createElement(c, null, a)
            };
            return t.displayName = o[e], t
        }
        function h(e) {
            return e
        }
        c.displayName = "FormattedNumberParts",
        c.displayName = "FormattedNumberParts";
        var p = f("formatDate");
        f("formatTime"),
        f("formatNumber"),
        f("formatList"),
        f("formatDisplayName"),
        d("formatDate"),
        d("formatTime")
    },
    32004: function(e, t, n) {
        "use strict";
        var r = n(39889),
            i = n(70079),
            o = n(70671),
            a = n(1809);
        function s(e) {
            var t = (0, o.Z)(),
                n = t.formatMessage,
                r = t.textComponent,
                a = void 0 === r ? i.Fragment : r,
                s = e.id,
                l = e.description,
                u = e.defaultMessage,
                c = e.values,
                d = e.children,
                f = e.tagName,
                h = void 0 === f ? a : f,
                p = n({
                    id: s,
                    description: l,
                    defaultMessage: u
                }, c, {
                    ignoreTag: e.ignoreTag
                });
            return "function" == typeof d ? d(Array.isArray(p) ? p : [p]) : h ? i.createElement(h, null, i.Children.toArray(p)) : i.createElement(i.Fragment, null, p)
        }
        s.displayName = "FormattedMessage";
        var l = i.memo(s, function(e, t) {
            var n = e.values,
                i = (0, r.__rest)(e, ["values"]),
                o = t.values,
                s = (0, r.__rest)(t, ["values"]);
            return (0, a.wU)(o, n) && (0, a.wU)(i, s)
        });
        l.displayName = "MemoizedFormattedMessage",
        t.Z = l
    },
    70671: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return a
            }
        });
        var r = n(70079),
            i = n(64936),
            o = n(1809);
        function a() {
            var e = r.useContext(i._y);
            return (0, o.lq)(e), e
        }
    },
    84256: function(e, t, n) {
        "use strict";
        function r(e) {
            return e.split("-")[1]
        }
        function i(e) {
            return "y" === e ? "height" : "width"
        }
        function o(e) {
            return e.split("-")[0]
        }
        function a(e) {
            return ["top", "bottom"].includes(o(e)) ? "x" : "y"
        }
        function s(e, t, n) {
            let s,
                {reference: l, floating: u} = e,
                c = l.x + l.width / 2 - u.width / 2,
                d = l.y + l.height / 2 - u.height / 2,
                f = a(t),
                h = i(f),
                p = l[h] / 2 - u[h] / 2,
                m = "x" === f;
            switch (o(t)) {
            case "top":
                s = {
                    x: c,
                    y: l.y - u.height
                };
                break;
            case "bottom":
                s = {
                    x: c,
                    y: l.y + l.height
                };
                break;
            case "right":
                s = {
                    x: l.x + l.width,
                    y: d
                };
                break;
            case "left":
                s = {
                    x: l.x - u.width,
                    y: d
                };
                break;
            default:
                s = {
                    x: l.x,
                    y: l.y
                }
            }
            switch (r(t)) {
            case "start":
                s[f] -= p * (n && m ? -1 : 1);
                break;
            case "end":
                s[f] += p * (n && m ? -1 : 1)
            }
            return s
        }
        n.d(t, {
            Cp: function() {
                return P
            },
            JB: function() {
                return c
            },
            RR: function() {
                return w
            },
            cv: function() {
                return C
            },
            dp: function() {
                return M
            },
            dr: function() {
                return T
            },
            oo: function() {
                return l
            },
            uY: function() {
                return R
            },
            x7: function() {
                return p
            }
        });
        let l = async (e, t, n) => {
            let {placement: r="bottom", strategy: i="absolute", middleware: o=[], platform: a} = n,
                l = o.filter(Boolean),
                u = await (null == a.isRTL ? void 0 : a.isRTL(t)),
                c = await a.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: i
                }),
                {x: d, y: f} = s(c, r, u),
                h = r,
                p = {},
                m = 0;
            for (let n = 0; n < l.length; n++) {
                let {name: o, fn: v} = l[n],
                    {x: g, y: y, data: b, reset: w} = await v({
                        x: d,
                        y: f,
                        initialPlacement: r,
                        placement: h,
                        strategy: i,
                        middlewareData: p,
                        rects: c,
                        platform: a,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                d = null != g ? g : d,
                f = null != y ? y : f,
                p = {
                    ...p,
                    [o]: {
                        ...p[o],
                        ...b
                    }
                },
                w && m <= 50 && (m++, "object" == typeof w && (w.placement && (h = w.placement), w.rects && (c = !0 === w.rects ? await a.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: i
                }) : w.rects), {x: d, y: f} = s(c, h, u)), n = -1)
            }
            return {
                x: d,
                y: f,
                placement: h,
                strategy: i,
                middlewareData: p
            }
        };
        function u(e) {
            return "number" != typeof e ? {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                ...e
            } : {
                top: e,
                right: e,
                bottom: e,
                left: e
            }
        }
        function c(e) {
            return {
                ...e,
                top: e.y,
                left: e.x,
                right: e.x + e.width,
                bottom: e.y + e.height
            }
        }
        async function d(e, t) {
            var n;
            void 0 === t && (t = {});
            let {x: r, y: i, platform: o, rects: a, elements: s, strategy: l} = e,
                {boundary: d="clippingAncestors", rootBoundary: f="viewport", elementContext: h="floating", altBoundary: p=!1, padding: m=0} = t,
                v = u(m),
                g = s[p ? "floating" === h ? "reference" : "floating" : h],
                y = c(await o.getClippingRect({
                    element: null == (n = await (null == o.isElement ? void 0 : o.isElement(g))) || n ? g : g.contextElement || await (null == o.getDocumentElement ? void 0 : o.getDocumentElement(s.floating)),
                    boundary: d,
                    rootBoundary: f,
                    strategy: l
                })),
                b = "floating" === h ? {
                    ...a.floating,
                    x: r,
                    y: i
                } : a.reference,
                w = await (null == o.getOffsetParent ? void 0 : o.getOffsetParent(s.floating)),
                x = await (null == o.isElement ? void 0 : o.isElement(w)) && await (null == o.getScale ? void 0 : o.getScale(w)) || {
                    x: 1,
                    y: 1
                },
                E = c(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
                    rect: b,
                    offsetParent: w,
                    strategy: l
                }) : b);
            return {
                top: (y.top - E.top + v.top) / x.y,
                bottom: (E.bottom - y.bottom + v.bottom) / x.y,
                left: (y.left - E.left + v.left) / x.x,
                right: (E.right - y.right + v.right) / x.x
            }
        }
        let f = Math.min,
            h = Math.max,
            p = e => ({
                name: "arrow",
                options: e,
                async fn(t) {
                    let {element: n, padding: o=0} = e || {},
                        {x: s, y: l, placement: c, rects: d, platform: p, elements: m} = t;
                    if (null == n)
                        return {};
                    let v = u(o),
                        g = {
                            x: s,
                            y: l
                        },
                        y = a(c),
                        b = i(y),
                        w = await p.getDimensions(n),
                        x = "y" === y,
                        E = x ? "top" : "left",
                        P = x ? "bottom" : "right",
                        C = x ? "clientHeight" : "clientWidth",
                        S = d.reference[b] + d.reference[y] - g[y] - d.floating[b],
                        R = g[y] - d.reference[y],
                        T = await (null == p.getOffsetParent ? void 0 : p.getOffsetParent(n)),
                        M = T ? T[C] : 0;
                    M && await (null == p.isElement ? void 0 : p.isElement(T)) || (M = m.floating[C] || d.floating[b]);
                    let A = v[E],
                        k = M - w[b] - v[P],
                        D = M / 2 - w[b] / 2 + (S / 2 - R / 2),
                        L = h(A, f(D, k)),
                        O = null != r(c) && D != L && d.reference[b] / 2 - (D < A ? v[E] : v[P]) - w[b] / 2 < 0;
                    return {
                        [y]: g[y] - (O ? D < A ? A - D : k - D : 0),
                        data: {
                            [y]: L,
                            centerOffset: D - L
                        }
                    }
                }
            }),
            m = ["top", "right", "bottom", "left"],
            v = (m.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []), {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            });
        function g(e) {
            return e.replace(/left|right|bottom|top/g, e => v[e])
        }
        let y = {
            start: "end",
            end: "start"
        };
        function b(e) {
            return e.replace(/start|end/g, e => y[e])
        }
        let w = function(e) {
            return void 0 === e && (e = {}), {
                name: "flip",
                options: e,
                async fn(t) {
                    var n,
                        s,
                        l,
                        u;
                    let {placement: c, middlewareData: f, rects: h, initialPlacement: p, platform: m, elements: v} = t,
                        {mainAxis: y=!0, crossAxis: w=!0, fallbackPlacements: x, fallbackStrategy: E="bestFit", fallbackAxisSideDirection: P="none", flipAlignment: C=!0, ...S} = e,
                        R = o(c),
                        T = o(p) === p,
                        M = await (null == m.isRTL ? void 0 : m.isRTL(v.floating)),
                        A = x || (T || !C ? [g(p)] : function(e) {
                            let t = g(e);
                            return [b(e), t, b(t)]
                        }(p));
                    x || "none" === P || A.push(...function(e, t, n, i) {
                        let a = r(e),
                            s = function(e, t, n) {
                                let r = ["left", "right"],
                                    i = ["right", "left"];
                                switch (e) {
                                case "top":
                                case "bottom":
                                    return n ? t ? i : r : t ? r : i;
                                case "left":
                                case "right":
                                    return t ? ["top", "bottom"] : ["bottom", "top"];
                                default:
                                    return []
                                }
                            }(o(e), "start" === n, i);
                        return a && (s = s.map(e => e + "-" + a), t && (s = s.concat(s.map(b)))), s
                    }(p, C, P, M));
                    let k = [p, ...A],
                        D = await d(t, S),
                        L = [],
                        O = (null == (n = f.flip) ? void 0 : n.overflows) || [];
                    if (y && L.push(D[R]), w) {
                        let {main: e, cross: t} = function(e, t, n) {
                            void 0 === n && (n = !1);
                            let o = r(e),
                                s = a(e),
                                l = i(s),
                                u = "x" === s ? o === (n ? "end" : "start") ? "right" : "left" : "start" === o ? "bottom" : "top";
                            return t.reference[l] > t.floating[l] && (u = g(u)), {
                                main: u,
                                cross: g(u)
                            }
                        }(c, h, M);
                        L.push(D[e], D[t])
                    }
                    if (O = [...O, {
                        placement: c,
                        overflows: L
                    }], !L.every(e => e <= 0)) {
                        let e = ((null == (s = f.flip) ? void 0 : s.index) || 0) + 1,
                            t = k[e];
                        if (t)
                            return {
                                data: {
                                    index: e,
                                    overflows: O
                                },
                                reset: {
                                    placement: t
                                }
                            };
                        let n = null == (l = O.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : l.placement;
                        if (!n)
                            switch (E) {
                            case "bestFit":
                                {
                                    let e = null == (u = O.map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : u[0];
                                    e && (n = e);
                                    break
                                }case "initialPlacement":
                                n = p
                            }
                        if (c !== n)
                            return {
                                reset: {
                                    placement: n
                                }
                            }
                    }
                    return {}
                }
            }
        };
        function x(e, t) {
            return {
                top: e.top - t.height,
                right: e.right - t.width,
                bottom: e.bottom - t.height,
                left: e.left - t.width
            }
        }
        function E(e) {
            return m.some(t => e[t] >= 0)
        }
        let P = function(e) {
                return void 0 === e && (e = {}), {
                    name: "hide",
                    options: e,
                    async fn(t) {
                        let {strategy: n="referenceHidden", ...r} = e,
                            {rects: i} = t;
                        switch (n) {
                        case "referenceHidden":
                            {
                                let e = x(await d(t, {
                                    ...r,
                                    elementContext: "reference"
                                }), i.reference);
                                return {
                                    data: {
                                        referenceHiddenOffsets: e,
                                        referenceHidden: E(e)
                                    }
                                }
                            }case "escaped":
                            {
                                let e = x(await d(t, {
                                    ...r,
                                    altBoundary: !0
                                }), i.floating);
                                return {
                                    data: {
                                        escapedOffsets: e,
                                        escaped: E(e)
                                    }
                                }
                            }default:
                            return {}
                        }
                    }
                }
            },
            C = function(e) {
                return void 0 === e && (e = 0), {
                    name: "offset",
                    options: e,
                    async fn(t) {
                        let {x: n, y: i} = t,
                            s = await async function(e, t) {
                                let {placement: n, platform: i, elements: s} = e,
                                    l = await (null == i.isRTL ? void 0 : i.isRTL(s.floating)),
                                    u = o(n),
                                    c = r(n),
                                    d = "x" === a(n),
                                    f = ["left", "top"].includes(u) ? -1 : 1,
                                    h = l && d ? -1 : 1,
                                    p = "function" == typeof t ? t(e) : t,
                                    {mainAxis: m, crossAxis: v, alignmentAxis: g} = "number" == typeof p ? {
                                        mainAxis: p,
                                        crossAxis: 0,
                                        alignmentAxis: null
                                    } : {
                                        mainAxis: 0,
                                        crossAxis: 0,
                                        alignmentAxis: null,
                                        ...p
                                    };
                                return c && "number" == typeof g && (v = "end" === c ? -1 * g : g), d ? {
                                    x: v * h,
                                    y: m * f
                                } : {
                                    x: m * f,
                                    y: v * h
                                }
                            }(t, e);
                        return {
                            x: n + s.x,
                            y: i + s.y,
                            data: s
                        }
                    }
                }
            };
        function S(e) {
            return "x" === e ? "y" : "x"
        }
        let R = function(e) {
                return void 0 === e && (e = {}), {
                    name: "shift",
                    options: e,
                    async fn(t) {
                        let {x: n, y: r, placement: i} = t,
                            {mainAxis: s=!0, crossAxis: l=!1, limiter: u={
                                fn: e => {
                                    let {x: t, y: n} = e;
                                    return {
                                        x: t,
                                        y: n
                                    }
                                }
                            }, ...c} = e,
                            p = {
                                x: n,
                                y: r
                            },
                            m = await d(t, c),
                            v = a(o(i)),
                            g = S(v),
                            y = p[v],
                            b = p[g];
                        s && (y = h(y + m["y" === v ? "top" : "left"], f(y, y - m["y" === v ? "bottom" : "right"]))),
                        l && (b = h(b + m["y" === g ? "top" : "left"], f(b, b - m["y" === g ? "bottom" : "right"])));
                        let w = u.fn({
                            ...t,
                            [v]: y,
                            [g]: b
                        });
                        return {
                            ...w,
                            data: {
                                x: w.x - n,
                                y: w.y - r
                            }
                        }
                    }
                }
            },
            T = function(e) {
                return void 0 === e && (e = {}), {
                    options: e,
                    fn(t) {
                        let {x: n, y: r, placement: i, rects: s, middlewareData: l} = t,
                            {offset: u=0, mainAxis: c=!0, crossAxis: d=!0} = e,
                            f = {
                                x: n,
                                y: r
                            },
                            h = a(i),
                            p = S(h),
                            m = f[h],
                            v = f[p],
                            g = "function" == typeof u ? u(t) : u,
                            y = "number" == typeof g ? {
                                mainAxis: g,
                                crossAxis: 0
                            } : {
                                mainAxis: 0,
                                crossAxis: 0,
                                ...g
                            };
                        if (c) {
                            let e = "y" === h ? "height" : "width",
                                t = s.reference[h] - s.floating[e] + y.mainAxis,
                                n = s.reference[h] + s.reference[e] - y.mainAxis;
                            m < t ? m = t : m > n && (m = n)
                        }
                        if (d) {
                            var b,
                                w;
                            let e = "y" === h ? "width" : "height",
                                t = ["top", "left"].includes(o(i)),
                                n = s.reference[p] - s.floating[e] + (t && (null == (b = l.offset) ? void 0 : b[p]) || 0) + (t ? 0 : y.crossAxis),
                                r = s.reference[p] + s.reference[e] + (t ? 0 : (null == (w = l.offset) ? void 0 : w[p]) || 0) - (t ? y.crossAxis : 0);
                            v < n ? v = n : v > r && (v = r)
                        }
                        return {
                            [h]: m,
                            [p]: v
                        }
                    }
                }
            },
            M = function(e) {
                return void 0 === e && (e = {}), {
                    name: "size",
                    options: e,
                    async fn(t) {
                        let n,
                            i;
                        let {placement: s, rects: l, platform: u, elements: c} = t,
                            {apply: p=() => {}, ...m} = e,
                            v = await d(t, m),
                            g = o(s),
                            y = r(s),
                            b = "x" === a(s),
                            {width: w, height: x} = l.floating;
                        "top" === g || "bottom" === g ? (n = g, i = y === (await (null == u.isRTL ? void 0 : u.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (i = g, n = "end" === y ? "top" : "bottom");
                        let E = x - v[n],
                            P = w - v[i],
                            C = !t.middlewareData.shift,
                            S = E,
                            R = P;
                        if (b) {
                            let e = w - v.left - v.right;
                            R = y || C ? f(P, e) : e
                        } else {
                            let e = x - v.top - v.bottom;
                            S = y || C ? f(E, e) : e
                        }
                        if (C && !y) {
                            let e = h(v.left, 0),
                                t = h(v.right, 0),
                                n = h(v.top, 0),
                                r = h(v.bottom, 0);
                            b ? R = w - 2 * (0 !== e || 0 !== t ? e + t : h(v.left, v.right)) : S = x - 2 * (0 !== n || 0 !== r ? n + r : h(v.top, v.bottom))
                        }
                        await p({
                            ...t,
                            availableWidth: R,
                            availableHeight: S
                        });
                        let T = await u.getDimensions(c.floating);
                        return w !== T.width || x !== T.height ? {
                            reset: {
                                rects: !0
                            }
                        } : {}
                    }
                }
            }
    },
    88905: function(e, t, n) {
        "use strict";
        n.d(t, {
            Me: function() {
                return F
            },
            oo: function() {
                return I
            }
        });
        var r = n(84256);
        function i(e) {
            var t;
            return (null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
        }
        function o(e) {
            return i(e).getComputedStyle(e)
        }
        function a(e) {
            return e instanceof i(e).Node
        }
        function s(e) {
            return a(e) ? (e.nodeName || "").toLowerCase() : ""
        }
        function l(e) {
            return e instanceof i(e).HTMLElement
        }
        function u(e) {
            return e instanceof i(e).Element
        }
        function c(e) {
            return "undefined" != typeof ShadowRoot && (e instanceof i(e).ShadowRoot || e instanceof ShadowRoot)
        }
        function d(e) {
            let {overflow: t, overflowX: n, overflowY: r, display: i} = o(e);
            return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i)
        }
        function f(e) {
            let t = h(),
                n = o(e);
            return "none" !== n.transform || "none" !== n.perspective || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some(e => (n.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (n.contain || "").includes(e))
        }
        function h() {
            return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
        }
        function p(e) {
            return ["html", "body", "#document"].includes(s(e))
        }
        let m = Math.min,
            v = Math.max,
            g = Math.round;
        function y(e) {
            let t = o(e),
                n = parseFloat(t.width) || 0,
                r = parseFloat(t.height) || 0,
                i = l(e),
                a = i ? e.offsetWidth : n,
                s = i ? e.offsetHeight : r,
                u = g(n) !== a || g(r) !== s;
            return u && (n = a, r = s), {
                width: n,
                height: r,
                fallback: u
            }
        }
        function b(e) {
            return u(e) ? e : e.contextElement
        }
        let w = {
            x: 1,
            y: 1
        };
        function x(e) {
            let t = b(e);
            if (!l(t))
                return w;
            let n = t.getBoundingClientRect(),
                {width: r, height: i, fallback: o} = y(t),
                a = (o ? g(n.width) : n.width) / r,
                s = (o ? g(n.height) : n.height) / i;
            return a && Number.isFinite(a) || (a = 1), s && Number.isFinite(s) || (s = 1), {
                x: a,
                y: s
            }
        }
        let E = {
            x: 0,
            y: 0
        };
        function P(e, t, n) {
            var r,
                o;
            if (void 0 === t && (t = !0), !h())
                return E;
            let a = e ? i(e) : window;
            return !n || t && n !== a ? E : {
                x: (null == (r = a.visualViewport) ? void 0 : r.offsetLeft) || 0,
                y: (null == (o = a.visualViewport) ? void 0 : o.offsetTop) || 0
            }
        }
        function C(e, t, n, o) {
            void 0 === t && (t = !1),
            void 0 === n && (n = !1);
            let a = e.getBoundingClientRect(),
                s = b(e),
                l = w;
            t && (o ? u(o) && (l = x(o)) : l = x(e));
            let c = P(s, n, o),
                d = (a.left + c.x) / l.x,
                f = (a.top + c.y) / l.y,
                h = a.width / l.x,
                p = a.height / l.y;
            if (s) {
                let e = i(s),
                    t = o && u(o) ? i(o) : o,
                    n = e.frameElement;
                for (; n && o && t !== e;) {
                    let e = x(n),
                        t = n.getBoundingClientRect(),
                        r = getComputedStyle(n);
                    t.x += (n.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                    t.y += (n.clientTop + parseFloat(r.paddingTop)) * e.y,
                    d *= e.x,
                    f *= e.y,
                    h *= e.x,
                    p *= e.y,
                    d += t.x,
                    f += t.y,
                    n = i(n).frameElement
                }
            }
            return (0, r.JB)({
                width: h,
                height: p,
                x: d,
                y: f
            })
        }
        function S(e) {
            return ((a(e) ? e.ownerDocument : e.document) || window.document).documentElement
        }
        function R(e) {
            return u(e) ? {
                scrollLeft: e.scrollLeft,
                scrollTop: e.scrollTop
            } : {
                scrollLeft: e.pageXOffset,
                scrollTop: e.pageYOffset
            }
        }
        function T(e) {
            return C(S(e)).left + R(e).scrollLeft
        }
        function M(e) {
            if ("html" === s(e))
                return e;
            let t = e.assignedSlot || e.parentNode || c(e) && e.host || S(e);
            return c(t) ? t.host : t
        }
        function A(e, t) {
            var n;
            void 0 === t && (t = []);
            let r = function e(t) {
                    let n = M(t);
                    return p(n) ? n.ownerDocument.body : l(n) && d(n) ? n : e(n)
                }(e),
                o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                a = i(r);
            return o ? t.concat(a, a.visualViewport || [], d(r) ? r : []) : t.concat(r, A(r))
        }
        function k(e, t, n) {
            let a;
            if ("viewport" === t)
                a = function(e, t) {
                    let n = i(e),
                        r = S(e),
                        o = n.visualViewport,
                        a = r.clientWidth,
                        s = r.clientHeight,
                        l = 0,
                        u = 0;
                    if (o) {
                        a = o.width,
                        s = o.height;
                        let e = h();
                        (!e || e && "fixed" === t) && (l = o.offsetLeft, u = o.offsetTop)
                    }
                    return {
                        width: a,
                        height: s,
                        x: l,
                        y: u
                    }
                }(e, n);
            else if ("document" === t)
                a = function(e) {
                    let t = S(e),
                        n = R(e),
                        r = e.ownerDocument.body,
                        i = v(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
                        a = v(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
                        s = -n.scrollLeft + T(e),
                        l = -n.scrollTop;
                    return "rtl" === o(r).direction && (s += v(t.clientWidth, r.clientWidth) - i), {
                        width: i,
                        height: a,
                        x: s,
                        y: l
                    }
                }(S(e));
            else if (u(t))
                a = function(e, t) {
                    let n = C(e, !0, "fixed" === t),
                        r = n.top + e.clientTop,
                        i = n.left + e.clientLeft,
                        o = l(e) ? x(e) : {
                            x: 1,
                            y: 1
                        };
                    return {
                        width: e.clientWidth * o.x,
                        height: e.clientHeight * o.y,
                        x: i * o.x,
                        y: r * o.y
                    }
                }(t, n);
            else {
                let n = P(e);
                a = {
                    ...t,
                    x: t.x - n.x,
                    y: t.y - n.y
                }
            }
            return (0, r.JB)(a)
        }
        function D(e, t) {
            return l(e) && "fixed" !== o(e).position ? t ? t(e) : e.offsetParent : null
        }
        function L(e, t) {
            let n = i(e);
            if (!l(e))
                return n;
            let r = D(e, t);
            for (; r && ["table", "td", "th"].includes(s(r)) && "static" === o(r).position;)
                r = D(r, t);
            return r && ("html" === s(r) || "body" === s(r) && "static" === o(r).position && !f(r)) ? n : r || function(e) {
                let t = M(e);
                for (; l(t) && !p(t);) {
                    if (f(t))
                        return t;
                    t = M(t)
                }
                return null
            }(e) || n
        }
        let O = {
            getClippingRect: function(e) {
                let {element: t, boundary: n, rootBoundary: r, strategy: i} = e,
                    a = "clippingAncestors" === n ? function(e, t) {
                        let n = t.get(e);
                        if (n)
                            return n;
                        let r = A(e).filter(e => u(e) && "body" !== s(e)),
                            i = null,
                            a = "fixed" === o(e).position,
                            l = a ? M(e) : e;
                        for (; u(l) && !p(l);) {
                            let t = o(l),
                                n = f(l);
                            n || "fixed" !== t.position || (i = null),
                            (a ? !n && !i : !n && "static" === t.position && i && ["absolute", "fixed"].includes(i.position) || d(l) && !n && function e(t, n) {
                                let r = M(t);
                                return !(r === n || !u(r) || p(r)) && ("fixed" === o(r).position || e(r, n))
                            }(e, l)) ? r = r.filter(e => e !== l) : i = t,
                            l = M(l)
                        }
                        return t.set(e, r), r
                    }(t, this._c) : [].concat(n),
                    l = [...a, r],
                    c = l[0],
                    h = l.reduce((e, n) => {
                        let r = k(t, n, i);
                        return e.top = v(r.top, e.top), e.right = m(r.right, e.right), e.bottom = m(r.bottom, e.bottom), e.left = v(r.left, e.left), e
                    }, k(t, c, i));
                return {
                    width: h.right - h.left,
                    height: h.bottom - h.top,
                    x: h.left,
                    y: h.top
                }
            },
            convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                let {rect: t, offsetParent: n, strategy: r} = e,
                    i = l(n),
                    o = S(n);
                if (n === o)
                    return t;
                let a = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    u = {
                        x: 1,
                        y: 1
                    },
                    c = {
                        x: 0,
                        y: 0
                    };
                if ((i || !i && "fixed" !== r) && (("body" !== s(n) || d(o)) && (a = R(n)), l(n))) {
                    let e = C(n);
                    u = x(n),
                    c.x = e.x + n.clientLeft,
                    c.y = e.y + n.clientTop
                }
                return {
                    width: t.width * u.x,
                    height: t.height * u.y,
                    x: t.x * u.x - a.scrollLeft * u.x + c.x,
                    y: t.y * u.y - a.scrollTop * u.y + c.y
                }
            },
            isElement: u,
            getDimensions: function(e) {
                return y(e)
            },
            getOffsetParent: L,
            getDocumentElement: S,
            getScale: x,
            async getElementRects(e) {
                let {reference: t, floating: n, strategy: r} = e,
                    i = this.getOffsetParent || L,
                    o = this.getDimensions;
                return {
                    reference: function(e, t, n) {
                        let r = l(t),
                            i = S(t),
                            o = "fixed" === n,
                            a = C(e, !0, o, t),
                            u = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            c = {
                                x: 0,
                                y: 0
                            };
                        if (r || !r && !o) {
                            if (("body" !== s(t) || d(i)) && (u = R(t)), l(t)) {
                                let e = C(t, !0, o, t);
                                c.x = e.x + t.clientLeft,
                                c.y = e.y + t.clientTop
                            } else
                                i && (c.x = T(i))
                        }
                        return {
                            x: a.left + u.scrollLeft - c.x,
                            y: a.top + u.scrollTop - c.y,
                            width: a.width,
                            height: a.height
                        }
                    }(t, await i(n), r),
                    floating: {
                        x: 0,
                        y: 0,
                        ...await o(n)
                    }
                }
            },
            getClientRects: e => Array.from(e.getClientRects()),
            isRTL: e => "rtl" === o(e).direction
        };
        function F(e, t, n, r) {
            void 0 === r && (r = {});
            let {ancestorScroll: i=!0, ancestorResize: o=!0, elementResize: a=!0, animationFrame: s=!1} = r,
                l = i || o ? [...u(e) ? A(e) : e.contextElement ? A(e.contextElement) : [], ...A(t)] : [];
            l.forEach(e => {
                let t = !u(e) && e.toString().includes("V");
                i && (!s || t) && e.addEventListener("scroll", n, {
                    passive: !0
                }),
                o && e.addEventListener("resize", n)
            });
            let c,
                d = null;
            a && (d = new ResizeObserver(() => {
                n()
            }), u(e) && !s && d.observe(e), u(e) || !e.contextElement || s || d.observe(e.contextElement), d.observe(t));
            let f = s ? C(e) : null;
            return s && function t() {
                let r = C(e);
                f && (r.x !== f.x || r.y !== f.y || r.width !== f.width || r.height !== f.height) && n(),
                f = r,
                c = requestAnimationFrame(t)
            }(), n(), () => {
                var e;
                l.forEach(e => {
                    i && e.removeEventListener("scroll", n),
                    o && e.removeEventListener("resize", n)
                }),
                null == (e = d) || e.disconnect(),
                d = null,
                s && cancelAnimationFrame(c)
            }
        }
        let I = (e, t, n) => {
            let i = new Map,
                o = {
                    platform: O,
                    ...n
                },
                a = {
                    ...o.platform,
                    _c: i
                };
            return (0, r.oo)(e, t, {
                ...o,
                platform: a
            })
        }
    },
    20525: function(e, t, n) {
        "use strict";
        n.d(t, {
            V: function() {
                return ea
            }
        });
        var r,
            i,
            o,
            a,
            s,
            l = n(70079),
            u = n(78983),
            c = n(4911),
            d = n(14699),
            f = n(86499),
            h = n(28595),
            p = n(58194),
            m = n(28203),
            v = n(98992),
            g = n(29787),
            y = n(58389),
            b = n(81303),
            w = ((r = w || {})[r.Forwards = 0] = "Forwards", r[r.Backwards = 1] = "Backwards", r),
            x = n(26577),
            E = n(46789);
        function P(e, t, n, r) {
            let i = (0, b.E)(n);
            (0, l.useEffect)(() => {
                function n(e) {
                    i.current(e)
                }
                return (e = null != e ? e : window).addEventListener(t, n, r), () => e.removeEventListener(t, n, r)
            }, [e, t, r])
        }
        var C = n(84575);
        function S(e, t) {
            let n = (0, l.useRef)([]),
                r = (0, y.z)(e);
            (0, l.useEffect)(() => {
                let e = [...n.current];
                for (let [i, o] of t.entries())
                    if (n.current[i] !== o) {
                        let i = r(t, e);
                        return n.current = t, i
                    }
            }, [r, ...t])
        }
        var R = ((i = R || {})[i.None = 1] = "None", i[i.InitialFocus = 2] = "InitialFocus", i[i.TabLock = 4] = "TabLock", i[i.FocusLock = 8] = "FocusLock", i[i.RestoreFocus = 16] = "RestoreFocus", i[i.All = 30] = "All", i);
        let T = Object.assign((0, c.yV)(function(e, t) {
            var n,
                r;
            let i,
                o,
                a = (0, l.useRef)(null),
                s = (0, d.T)(a, t),
                {initialFocus: f, containers: h, features: p=30, ...R} = e;
            (0, m.H)() || (p = 1);
            let T = (0, E.i)(a);
            !function({ownerDocument: e}, t) {
                let n = (0, l.useRef)(null);
                P(null == e ? void 0 : e.defaultView, "focusout", e => {
                    !t || n.current || (n.current = e.target)
                }, !0),
                S(() => {
                    t || ((null == e ? void 0 : e.activeElement) === (null == e ? void 0 : e.body) && (0, g.C5)(n.current), n.current = null)
                }, [t]);
                let r = (0, l.useRef)(!1);
                (0, l.useEffect)(() => (r.current = !1, () => {
                    r.current = !0,
                    (0, C.Y)(() => {
                        r.current && ((0, g.C5)(n.current), n.current = null)
                    })
                }), [])
            }({
                ownerDocument: T
            }, !!(16 & p));
            let M = function({ownerDocument: e, container: t, initialFocus: n}, r) {
                let i = (0, l.useRef)(null),
                    o = (0, x.t)();
                return S(() => {
                    if (!r)
                        return;
                    let a = t.current;
                    a && (0, C.Y)(() => {
                        if (!o.current)
                            return;
                        let t = null == e ? void 0 : e.activeElement;
                        if (null != n && n.current) {
                            if ((null == n ? void 0 : n.current) === t) {
                                i.current = t;
                                return
                            }
                        } else if (a.contains(t)) {
                            i.current = t;
                            return
                        }
                        null != n && n.current ? (0, g.C5)(n.current) : (0, g.jA)(a, g.TO.First) === g.fE.Error && console.warn("There are no focusable elements inside the <FocusTrap />"),
                        i.current = null == e ? void 0 : e.activeElement
                    })
                }, [r]), i
            }({
                ownerDocument: T,
                container: a,
                initialFocus: f
            }, !!(2 & p));
            !function({ownerDocument: e, container: t, containers: n, previousActiveElement: r}, i) {
                let o = (0, x.t)();
                P(null == e ? void 0 : e.defaultView, "focus", e => {
                    if (!i || !o.current)
                        return;
                    let a = new Set(null == n ? void 0 : n.current);
                    a.add(t);
                    let s = r.current;
                    if (!s)
                        return;
                    let l = e.target;
                    l && l instanceof HTMLElement ? function(e, t) {
                        var n;
                        for (let r of e)
                            if (null != (n = r.current) && n.contains(t))
                                return !0;
                        return !1
                    }(a, l) ? (r.current = l, (0, g.C5)(l)) : (e.preventDefault(), e.stopPropagation(), (0, g.C5)(s)) : (0, g.C5)(r.current)
                }, !0)
            }({
                ownerDocument: T,
                container: a,
                containers: h,
                previousActiveElement: M
            }, !!(8 & p));
            let A = (i = (0, l.useRef)(0), n = "keydown", r = e => {
                    "Tab" === e.key && (i.current = e.shiftKey ? 1 : 0)
                }, o = (0, b.E)(r), (0, l.useEffect)(() => {
                    function e(e) {
                        o.current(e)
                    }
                    return window.addEventListener(n, e, !0), () => window.removeEventListener(n, e, !0)
                }, [n, !0]), i),
                k = (0, y.z)(() => {
                    let e = a.current;
                    e && (0, u.E)(A.current, {
                        [w.Forwards]: () => (0, g.jA)(e, g.TO.First),
                        [w.Backwards]: () => (0, g.jA)(e, g.TO.Last)
                    })
                });
            return l.createElement(l.Fragment, null, !!(4 & p) && l.createElement(v._, {
                as: "button",
                type: "button",
                onFocus: k,
                features: v.A.Focusable
            }), (0, c.sY)({
                ourProps: {
                    ref: s
                },
                theirProps: R,
                defaultTag: "div",
                name: "FocusTrap"
            }), !!(4 & p) && l.createElement(v._, {
                as: "button",
                type: "button",
                onFocus: k,
                features: v.A.Focusable
            }))
        }), {
            features: R
        });
        var M = n(52327),
            A = n(98044);
        let k = new Set,
            D = new Map;
        function L(e) {
            e.setAttribute("aria-hidden", "true"),
            e.inert = !0
        }
        function O(e) {
            let t = D.get(e);
            t && (null === t["aria-hidden"] ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert)
        }
        var F = n(99581);
        let I = (0, l.createContext)(!1);
        function V(e) {
            return l.createElement(I.Provider, {
                value: e.force
            }, e.children)
        }
        var _ = n(34926);
        let j = l.Fragment,
            N = (0, c.yV)(function(e, t) {
                let n = (0, l.useRef)(null),
                    r = (0, d.T)((0, d.h)(e => {
                        n.current = e
                    }), t),
                    i = (0, E.i)(n),
                    o = function(e) {
                        let t = (0, l.useContext)(I),
                            n = (0, l.useContext)(W),
                            r = (0, E.i)(e),
                            [i, o] = (0, l.useState)(() => {
                                if (!t && null !== n || _.s)
                                    return null;
                                let e = null == r ? void 0 : r.getElementById("headlessui-portal-root");
                                if (e)
                                    return e;
                                if (null === r)
                                    return null;
                                let i = r.createElement("div");
                                return i.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(i)
                            });
                        return (0, l.useEffect)(() => {
                            null !== i && (null != r && r.body.contains(i) || null == r || r.body.appendChild(i))
                        }, [i, r]), (0, l.useEffect)(() => {
                            t || null !== n && o(n.current)
                        }, [n, o, t]), i
                    }(n),
                    [a] = (0, l.useState)(() => {
                        var e;
                        return _.s ? null : null != (e = null == i ? void 0 : i.createElement("div")) ? e : null
                    }),
                    s = (0, m.H)(),
                    u = (0, l.useRef)(!1);
                return (0, A.e)(() => {
                    if (u.current = !1, !(!o || !a))
                        return o.contains(a) || (a.setAttribute("data-headlessui-portal", ""), o.appendChild(a)), () => {
                            u.current = !0,
                            (0, C.Y)(() => {
                                var e;
                                u.current && o && a && (o.removeChild(a), o.childNodes.length <= 0 && (null == (e = o.parentElement) || e.removeChild(o)))
                            })
                        }
                }, [o, a]), s && o && a ? (0, F.createPortal)((0, c.sY)({
                    ourProps: {
                        ref: r
                    },
                    theirProps: e,
                    defaultTag: j,
                    name: "Portal"
                }), a) : null
            }),
            B = l.Fragment,
            W = (0, l.createContext)(null),
            $ = Object.assign(N, {
                Group: (0, c.yV)(function(e, t) {
                    let {target: n, ...r} = e,
                        i = {
                            ref: (0, d.T)(t)
                        };
                    return l.createElement(W.Provider, {
                        value: n
                    }, (0, c.sY)({
                        ourProps: i,
                        theirProps: r,
                        defaultTag: B,
                        name: "Popover.Group"
                    }))
                })
            }),
            z = (0, l.createContext)(null),
            H = (0, c.yV)(function(e, t) {
                let n = function e() {
                        let t = (0, l.useContext)(z);
                        if (null === t) {
                            let t = Error("You used a <Description /> component, but it is not inside a relevant parent.");
                            throw Error.captureStackTrace && Error.captureStackTrace(t, e), t
                        }
                        return t
                    }(),
                    r = `headlessui-description-${(0, p.M)()}`,
                    i = (0, d.T)(t);
                (0, A.e)(() => n.register(r), [r, n.register]);
                let o = {
                    ref: i,
                    ...n.props,
                    id: r
                };
                return (0, c.sY)({
                    ourProps: o,
                    theirProps: e,
                    slot: n.slot || {},
                    defaultTag: "p",
                    name: n.name || "Description"
                })
            });
        var U = n(37068);
        let Z = (0, l.createContext)(() => {});
        Z.displayName = "StackContext";
        var Y = ((o = Y || {})[o.Add = 0] = "Add", o[o.Remove = 1] = "Remove", o);
        function G({children: e, onUpdate: t, type: n, element: r, enabled: i}) {
            let o = (0, l.useContext)(Z),
                a = (0, y.z)((...e) => {
                    null == t || t(...e),
                    o(...e)
                });
            return (0, A.e)(() => {
                let e = void 0 === i || !0 === i;
                return e && a(0, n, r), () => {
                    e && a(1, n, r)
                }
            }, [a, n, r, i]), l.createElement(Z.Provider, {
                value: a
            }, e)
        }
        var K = n(53315),
            q = n(32552),
            X = ((a = X || {})[a.Open = 0] = "Open", a[a.Closed = 1] = "Closed", a),
            J = ((s = J || {})[s.SetTitleId = 0] = "SetTitleId", s);
        let Q = {
                0: (e, t) => e.titleId === t.id ? e : {
                    ...e,
                    titleId: t.id
                }
            },
            ee = (0, l.createContext)(null);
        function et(e) {
            let t = (0, l.useContext)(ee);
            if (null === t) {
                let t = Error(`<${e} /> is missing a parent <Dialog /> component.`);
                throw Error.captureStackTrace && Error.captureStackTrace(t, et), t
            }
            return t
        }
        function en(e, t) {
            return (0, u.E)(t.type, Q, e, t)
        }
        ee.displayName = "DialogContext";
        let er = c.AN.RenderStrategy | c.AN.Static,
            ei = (0, c.yV)(function(e, t) {
                var n;
                let {open: r, onClose: i, initialFocus: o, __demoMode: a=!1, ...s} = e,
                    [h, g] = (0, l.useState)(0),
                    b = (0, U.oJ)();
                void 0 === r && null !== b && (r = (0, u.E)(b, {
                    [U.ZM.Open]: !0,
                    [U.ZM.Closed]: !1
                }));
                let w = (0, l.useRef)(new Set),
                    x = (0, l.useRef)(null),
                    C = (0, d.T)(x, t),
                    S = (0, l.useRef)(null),
                    R = (0, E.i)(x),
                    F = e.hasOwnProperty("open") || null !== b,
                    I = e.hasOwnProperty("onClose");
                if (!F && !I)
                    throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
                if (!F)
                    throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
                if (!I)
                    throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
                if ("boolean" != typeof r)
                    throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${r}`);
                if ("function" != typeof i)
                    throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${i}`);
                let _ = r ? 0 : 1,
                    [j, N] = (0, l.useReducer)(en, {
                        titleId: null,
                        descriptionId: null,
                        panelRef: (0, l.createRef)()
                    }),
                    B = (0, y.z)(() => i(!1)),
                    W = (0, y.z)(e => N({
                        type: 0,
                        id: e
                    })),
                    H = !!(0, m.H)() && !a && 0 === _,
                    Z = h > 1,
                    X = null !== (0, l.useContext)(ee);
                (function(e, t=!0) {
                    (0, A.e)(() => {
                        if (!t || !e.current)
                            return;
                        let n = e.current,
                            r = (0, M.r)(n);
                        if (r) {
                            for (let e of (k.add(n), D.keys()))
                                e.contains(n) && (O(e), D.delete(e));
                            return r.querySelectorAll("body > *").forEach(e => {
                                if (e instanceof HTMLElement) {
                                    for (let t of k)
                                        if (e.contains(t))
                                            return;
                                    1 === k.size && (D.set(e, {
                                        "aria-hidden": e.getAttribute("aria-hidden"),
                                        inert: e.inert
                                    }), L(e))
                                }
                            }), () => {
                                if (k.delete(n), k.size > 0)
                                    r.querySelectorAll("body > *").forEach(e => {
                                        if (e instanceof HTMLElement && !D.has(e)) {
                                            for (let t of k)
                                                if (e.contains(t))
                                                    return;
                                            D.set(e, {
                                                "aria-hidden": e.getAttribute("aria-hidden"),
                                                inert: e.inert
                                            }),
                                            L(e)
                                        }
                                    });
                                else
                                    for (let e of D.keys())
                                        O(e),
                                        D.delete(e)
                            }
                        }
                    }, [t])
                })(x, !!Z && H),
                (0, K.O)(() => {
                    var e,
                        t;
                    return [...Array.from(null != (e = null == R ? void 0 : R.querySelectorAll("body > *, [data-headlessui-portal]")) ? e : []).filter(e => !(!(e instanceof HTMLElement) || e.contains(S.current) || j.panelRef.current && e.contains(j.panelRef.current))), null != (t = j.panelRef.current) ? t : x.current]
                }, B, H && !Z),
                P(null == R ? void 0 : R.defaultView, "keydown", e => {
                    e.defaultPrevented || e.key === f.R.Escape && 0 === _ && (Z || (e.preventDefault(), e.stopPropagation(), B()))
                }),
                n = 0 === _ && !X,
                (0, l.useEffect)(() => {
                    var e;
                    if (!n || !R)
                        return;
                    let t = (0, q.k)();
                    function r(e, n, r) {
                        let i = e.style.getPropertyValue(n);
                        return Object.assign(e.style, {
                            [n]: r
                        }), t.add(() => {
                            Object.assign(e.style, {
                                [n]: i
                            })
                        })
                    }
                    let i = R.documentElement,
                        o = (null != (e = R.defaultView) ? e : window).innerWidth - i.clientWidth;
                    if (r(i, "overflow", "hidden"), o > 0) {
                        let e = i.clientWidth - i.offsetWidth;
                        r(i, "paddingRight", `${o - e}px`)
                    }
                    if (/iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0) {
                        let e = window.pageYOffset;
                        r(i, "position", "fixed"),
                        r(i, "marginTop", `-${e}px`),
                        r(i, "width", "100%"),
                        t.add(() => window.scrollTo(0, e))
                    }
                    return t.dispose
                }, [R, n]),
                (0, l.useEffect)(() => {
                    if (0 !== _ || !x.current)
                        return;
                    let e = new IntersectionObserver(e => {
                        for (let t of e)
                            0 === t.boundingClientRect.x && 0 === t.boundingClientRect.y && 0 === t.boundingClientRect.width && 0 === t.boundingClientRect.height && B()
                    });
                    return e.observe(x.current), () => e.disconnect()
                }, [_, x, B]);
                let [J, Q] = function() {
                        let [e, t] = (0, l.useState)([]);
                        return [e.length > 0 ? e.join(" ") : void 0, (0, l.useMemo)(() => function(e) {
                            let n = (0, y.z)(e => (t(t => [...t, e]), () => t(t => {
                                    let n = t.slice(),
                                        r = n.indexOf(e);
                                    return -1 !== r && n.splice(r, 1), n
                                }))),
                                r = (0, l.useMemo)(() => ({
                                    register: n,
                                    slot: e.slot,
                                    name: e.name,
                                    props: e.props
                                }), [n, e.slot, e.name, e.props]);
                            return l.createElement(z.Provider, {
                                value: r
                            }, e.children)
                        }, [t])]
                    }(),
                    et = `headlessui-dialog-${(0, p.M)()}`,
                    ei = (0, l.useMemo)(() => [{
                        dialogState: _,
                        close: B,
                        setTitleId: W
                    }, j], [_, j, B, W]),
                    eo = (0, l.useMemo)(() => ({
                        open: 0 === _
                    }), [_]),
                    ea = {
                        ref: C,
                        id: et,
                        role: "dialog",
                        "aria-modal": 0 === _ || void 0,
                        "aria-labelledby": j.titleId,
                        "aria-describedby": J
                    };
                return l.createElement(G, {
                    type: "Dialog",
                    enabled: 0 === _,
                    element: x,
                    onUpdate: (0, y.z)((e, t, n) => {
                        "Dialog" === t && (0, u.E)(e, {
                            [Y.Add]() {
                                w.current.add(n),
                                g(e => e + 1)
                            },
                            [Y.Remove]() {
                                w.current.add(n),
                                g(e => e - 1)
                            }
                        })
                    })
                }, l.createElement(V, {
                    force: !0
                }, l.createElement($, null, l.createElement(ee.Provider, {
                    value: ei
                }, l.createElement($.Group, {
                    target: x
                }, l.createElement(V, {
                    force: !1
                }, l.createElement(Q, {
                    slot: eo,
                    name: "Dialog.Description"
                }, l.createElement(T, {
                    initialFocus: o,
                    containers: w,
                    features: H ? (0, u.E)(Z ? "parent" : "leaf", {
                        parent: T.features.RestoreFocus,
                        leaf: T.features.All & ~T.features.FocusLock
                    }) : T.features.None
                }, (0, c.sY)({
                    ourProps: ea,
                    theirProps: s,
                    slot: eo,
                    defaultTag: "div",
                    features: er,
                    visible: 0 === _,
                    name: "Dialog"
                })))))))), l.createElement(v._, {
                    features: v.A.Hidden,
                    ref: S
                }))
            }),
            eo = (0, c.yV)(function(e, t) {
                let [{dialogState: n, close: r}] = et("Dialog.Overlay"),
                    i = (0, d.T)(t),
                    o = `headlessui-dialog-overlay-${(0, p.M)()}`,
                    a = (0, y.z)(e => {
                        if (e.target === e.currentTarget) {
                            if ((0, h.P)(e.currentTarget))
                                return e.preventDefault();
                            e.preventDefault(),
                            e.stopPropagation(),
                            r()
                        }
                    }),
                    s = (0, l.useMemo)(() => ({
                        open: 0 === n
                    }), [n]);
                return (0, c.sY)({
                    ourProps: {
                        ref: i,
                        id: o,
                        "aria-hidden": !0,
                        onClick: a
                    },
                    theirProps: e,
                    slot: s,
                    defaultTag: "div",
                    name: "Dialog.Overlay"
                })
            }),
            ea = Object.assign(ei, {
                Backdrop: (0, c.yV)(function(e, t) {
                    let [{dialogState: n}, r] = et("Dialog.Backdrop"),
                        i = (0, d.T)(t),
                        o = `headlessui-dialog-backdrop-${(0, p.M)()}`;
                    (0, l.useEffect)(() => {
                        if (null === r.panelRef.current)
                            throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
                    }, [r.panelRef]);
                    let a = (0, l.useMemo)(() => ({
                        open: 0 === n
                    }), [n]);
                    return l.createElement(V, {
                        force: !0
                    }, l.createElement($, null, (0, c.sY)({
                        ourProps: {
                            ref: i,
                            id: o,
                            "aria-hidden": !0
                        },
                        theirProps: e,
                        slot: a,
                        defaultTag: "div",
                        name: "Dialog.Backdrop"
                    })))
                }),
                Panel: (0, c.yV)(function(e, t) {
                    let [{dialogState: n}, r] = et("Dialog.Panel"),
                        i = (0, d.T)(t, r.panelRef),
                        o = `headlessui-dialog-panel-${(0, p.M)()}`,
                        a = (0, l.useMemo)(() => ({
                            open: 0 === n
                        }), [n]),
                        s = (0, y.z)(e => {
                            e.stopPropagation()
                        });
                    return (0, c.sY)({
                        ourProps: {
                            ref: i,
                            id: o,
                            onClick: s
                        },
                        theirProps: e,
                        slot: a,
                        defaultTag: "div",
                        name: "Dialog.Panel"
                    })
                }),
                Overlay: eo,
                Title: (0, c.yV)(function(e, t) {
                    let [{dialogState: n, setTitleId: r}] = et("Dialog.Title"),
                        i = `headlessui-dialog-title-${(0, p.M)()}`,
                        o = (0, d.T)(t);
                    (0, l.useEffect)(() => (r(i), () => r(null)), [i, r]);
                    let a = (0, l.useMemo)(() => ({
                        open: 0 === n
                    }), [n]);
                    return (0, c.sY)({
                        ourProps: {
                            ref: o,
                            id: i
                        },
                        theirProps: e,
                        slot: a,
                        defaultTag: "h2",
                        name: "Dialog.Title"
                    })
                }),
                Description: H
            })
    },
    86499: function(e, t, n) {
        "use strict";
        n.d(t, {
            R: function() {
                return i
            }
        });
        var r,
            i = ((r = i || {}).Space = " ", r.Enter = "Enter", r.Escape = "Escape", r.Backspace = "Backspace", r.Delete = "Delete", r.ArrowLeft = "ArrowLeft", r.ArrowUp = "ArrowUp", r.ArrowRight = "ArrowRight", r.ArrowDown = "ArrowDown", r.Home = "Home", r.End = "End", r.PageUp = "PageUp", r.PageDown = "PageDown", r.Tab = "Tab", r)
    },
    7813: function(e, t, n) {
        "use strict";
        n.d(t, {
            v: function() {
                return j
            }
        });
        var r,
            i,
            o,
            a = n(70079),
            s = n(78983),
            l = n(4911),
            u = n(32552),
            c = n(61296),
            d = n(98044),
            f = n(14699),
            h = n(58194),
            p = n(86499),
            m = n(10186),
            v = n(28595),
            g = n(29787),
            y = n(53315),
            b = n(52327),
            w = n(37068),
            x = n(19992),
            E = n(46789),
            P = n(58389),
            C = ((r = C || {})[r.Open = 0] = "Open", r[r.Closed = 1] = "Closed", r),
            S = ((i = S || {})[i.Pointer = 0] = "Pointer", i[i.Other = 1] = "Other", i),
            R = ((o = R || {})[o.OpenMenu = 0] = "OpenMenu", o[o.CloseMenu = 1] = "CloseMenu", o[o.GoToItem = 2] = "GoToItem", o[o.Search = 3] = "Search", o[o.ClearSearch = 4] = "ClearSearch", o[o.RegisterItem = 5] = "RegisterItem", o[o.UnregisterItem = 6] = "UnregisterItem", o);
        function T(e, t=e => e) {
            let n = null !== e.activeItemIndex ? e.items[e.activeItemIndex] : null,
                r = (0, g.z2)(t(e.items.slice()), e => e.dataRef.current.domRef.current),
                i = n ? r.indexOf(n) : null;
            return -1 === i && (i = null), {
                items: r,
                activeItemIndex: i
            }
        }
        let M = {
                1: e => 1 === e.menuState ? e : {
                    ...e,
                    activeItemIndex: null,
                    menuState: 1
                },
                0: e => 0 === e.menuState ? e : {
                    ...e,
                    menuState: 0
                },
                2: (e, t) => {
                    var n;
                    let r = T(e),
                        i = (0, m.d)(t, {
                            resolveItems: () => r.items,
                            resolveActiveIndex: () => r.activeItemIndex,
                            resolveId: e => e.id,
                            resolveDisabled: e => e.dataRef.current.disabled
                        });
                    return {
                        ...e,
                        ...r,
                        searchQuery: "",
                        activeItemIndex: i,
                        activationTrigger: null != (n = t.trigger) ? n : 1
                    }
                },
                3: (e, t) => {
                    let n = "" !== e.searchQuery ? 0 : 1,
                        r = e.searchQuery + t.value.toLowerCase(),
                        i = (null !== e.activeItemIndex ? e.items.slice(e.activeItemIndex + n).concat(e.items.slice(0, e.activeItemIndex + n)) : e.items).find(e => {
                            var t;
                            return (null == (t = e.dataRef.current.textValue) ? void 0 : t.startsWith(r)) && !e.dataRef.current.disabled
                        }),
                        o = i ? e.items.indexOf(i) : -1;
                    return -1 === o || o === e.activeItemIndex ? {
                        ...e,
                        searchQuery: r
                    } : {
                        ...e,
                        searchQuery: r,
                        activeItemIndex: o,
                        activationTrigger: 1
                    }
                },
                4: e => "" === e.searchQuery ? e : {
                    ...e,
                    searchQuery: "",
                    searchActiveItemIndex: null
                },
                5: (e, t) => {
                    let n = T(e, e => [...e, {
                        id: t.id,
                        dataRef: t.dataRef
                    }]);
                    return {
                        ...e,
                        ...n
                    }
                },
                6: (e, t) => {
                    let n = T(e, e => {
                        let n = e.findIndex(e => e.id === t.id);
                        return -1 !== n && e.splice(n, 1), e
                    });
                    return {
                        ...e,
                        ...n,
                        activationTrigger: 1
                    }
                }
            },
            A = (0, a.createContext)(null);
        function k(e) {
            let t = (0, a.useContext)(A);
            if (null === t) {
                let t = Error(`<${e} /> is missing a parent <Menu /> component.`);
                throw Error.captureStackTrace && Error.captureStackTrace(t, k), t
            }
            return t
        }
        function D(e, t) {
            return (0, s.E)(t.type, M, e, t)
        }
        A.displayName = "MenuContext";
        let L = a.Fragment,
            O = (0, l.yV)(function(e, t) {
                let n = (0, a.useReducer)(D, {
                        menuState: 1,
                        buttonRef: (0, a.createRef)(),
                        itemsRef: (0, a.createRef)(),
                        items: [],
                        searchQuery: "",
                        activeItemIndex: null,
                        activationTrigger: 1
                    }),
                    [{menuState: r, itemsRef: i, buttonRef: o}, u] = n,
                    c = (0, f.T)(t);
                (0, y.O)([o, i], (e, t) => {
                    var n;
                    u({
                        type: 1
                    }),
                    (0, g.sP)(t, g.tJ.Loose) || (e.preventDefault(), null == (n = o.current) || n.focus())
                }, 0 === r);
                let d = (0, a.useMemo)(() => ({
                    open: 0 === r
                }), [r]);
                return a.createElement(A.Provider, {
                    value: n
                }, a.createElement(w.up, {
                    value: (0, s.E)(r, {
                        0: w.ZM.Open,
                        1: w.ZM.Closed
                    })
                }, (0, l.sY)({
                    ourProps: {
                        ref: c
                    },
                    theirProps: e,
                    slot: d,
                    defaultTag: L,
                    name: "Menu"
                })))
            }),
            F = (0, l.yV)(function(e, t) {
                var n;
                let [r, i] = k("Menu.Button"),
                    o = (0, f.T)(r.buttonRef, t),
                    s = `headlessui-menu-button-${(0, h.M)()}`,
                    u = (0, c.G)(),
                    d = (0, P.z)(e => {
                        switch (e.key) {
                        case p.R.Space:
                        case p.R.Enter:
                        case p.R.ArrowDown:
                            e.preventDefault(),
                            e.stopPropagation(),
                            i({
                                type: 0
                            }),
                            u.nextFrame(() => i({
                                type: 2,
                                focus: m.T.First
                            }));
                            break;
                        case p.R.ArrowUp:
                            e.preventDefault(),
                            e.stopPropagation(),
                            i({
                                type: 0
                            }),
                            u.nextFrame(() => i({
                                type: 2,
                                focus: m.T.Last
                            }))
                        }
                    }),
                    g = (0, P.z)(e => {
                        e.key === p.R.Space && e.preventDefault()
                    }),
                    y = (0, P.z)(t => {
                        if ((0, v.P)(t.currentTarget))
                            return t.preventDefault();
                        e.disabled || (0 === r.menuState ? (i({
                            type: 1
                        }), u.nextFrame(() => {
                            var e;
                            return null == (e = r.buttonRef.current) ? void 0 : e.focus({
                                preventScroll: !0
                            })
                        })) : (t.preventDefault(), i({
                            type: 0
                        })))
                    }),
                    b = (0, a.useMemo)(() => ({
                        open: 0 === r.menuState
                    }), [r]),
                    w = {
                        ref: o,
                        id: s,
                        type: (0, x.f)(e, r.buttonRef),
                        "aria-haspopup": !0,
                        "aria-controls": null == (n = r.itemsRef.current) ? void 0 : n.id,
                        "aria-expanded": e.disabled ? void 0 : 0 === r.menuState,
                        onKeyDown: d,
                        onKeyUp: g,
                        onClick: y
                    };
                return (0, l.sY)({
                    ourProps: w,
                    theirProps: e,
                    slot: b,
                    defaultTag: "button",
                    name: "Menu.Button"
                })
            }),
            I = l.AN.RenderStrategy | l.AN.Static,
            V = (0, l.yV)(function(e, t) {
                var n,
                    r;
                let [i, o] = k("Menu.Items"),
                    s = (0, f.T)(i.itemsRef, t),
                    v = (0, E.i)(i.itemsRef),
                    y = `headlessui-menu-items-${(0, h.M)()}`,
                    x = (0, c.G)(),
                    C = (0, w.oJ)(),
                    S = null !== C ? C === w.ZM.Open : 0 === i.menuState;
                (0, a.useEffect)(() => {
                    let e = i.itemsRef.current;
                    e && 0 === i.menuState && e !== (null == v ? void 0 : v.activeElement) && e.focus({
                        preventScroll: !0
                    })
                }, [i.menuState, i.itemsRef, v]),
                function({container: e, accept: t, walk: n, enabled: r=!0}) {
                    let i = (0, a.useRef)(t),
                        o = (0, a.useRef)(n);
                    (0, a.useEffect)(() => {
                        i.current = t,
                        o.current = n
                    }, [t, n]),
                    (0, d.e)(() => {
                        if (!e || !r)
                            return;
                        let t = (0, b.r)(e);
                        if (!t)
                            return;
                        let n = i.current,
                            a = o.current,
                            s = Object.assign(e => n(e), {
                                acceptNode: n
                            }),
                            l = t.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, s, !1);
                        for (; l.nextNode();)
                            a(l.currentNode)
                    }, [e, r, i, o])
                }({
                    container: i.itemsRef.current,
                    enabled: 0 === i.menuState,
                    accept: e => "menuitem" === e.getAttribute("role") ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT,
                    walk(e) {
                        e.setAttribute("role", "none")
                    }
                });
                let R = (0, P.z)(e => {
                        var t,
                            n;
                        switch (x.dispose(), e.key) {
                        case p.R.Space:
                            if ("" !== i.searchQuery)
                                return e.preventDefault(), e.stopPropagation(), o({
                                    type: 3,
                                    value: e.key
                                });
                        case p.R.Enter:
                            if (e.preventDefault(), e.stopPropagation(), o({
                                type: 1
                            }), null !== i.activeItemIndex) {
                                let {dataRef: e} = i.items[i.activeItemIndex];
                                null == (n = null == (t = e.current) ? void 0 : t.domRef.current) || n.click()
                            }
                            (0, g.wI)(i.buttonRef.current);
                            break;
                        case p.R.ArrowDown:
                            return e.preventDefault(), e.stopPropagation(), o({
                                type: 2,
                                focus: m.T.Next
                            });
                        case p.R.ArrowUp:
                            return e.preventDefault(), e.stopPropagation(), o({
                                type: 2,
                                focus: m.T.Previous
                            });
                        case p.R.Home:
                        case p.R.PageUp:
                            return e.preventDefault(), e.stopPropagation(), o({
                                type: 2,
                                focus: m.T.First
                            });
                        case p.R.End:
                        case p.R.PageDown:
                            return e.preventDefault(), e.stopPropagation(), o({
                                type: 2,
                                focus: m.T.Last
                            });
                        case p.R.Escape:
                            e.preventDefault(),
                            e.stopPropagation(),
                            o({
                                type: 1
                            }),
                            (0, u.k)().nextFrame(() => {
                                var e;
                                return null == (e = i.buttonRef.current) ? void 0 : e.focus({
                                    preventScroll: !0
                                })
                            });
                            break;
                        case p.R.Tab:
                            e.preventDefault(),
                            e.stopPropagation(),
                            o({
                                type: 1
                            }),
                            (0, u.k)().nextFrame(() => {
                                (0, g.EO)(i.buttonRef.current, e.shiftKey ? g.TO.Previous : g.TO.Next)
                            });
                            break;
                        default:
                            1 === e.key.length && (o({
                                type: 3,
                                value: e.key
                            }), x.setTimeout(() => o({
                                type: 4
                            }), 350))
                        }
                    }),
                    T = (0, P.z)(e => {
                        e.key === p.R.Space && e.preventDefault()
                    }),
                    M = (0, a.useMemo)(() => ({
                        open: 0 === i.menuState
                    }), [i]),
                    A = {
                        "aria-activedescendant": null === i.activeItemIndex || null == (n = i.items[i.activeItemIndex]) ? void 0 : n.id,
                        "aria-labelledby": null == (r = i.buttonRef.current) ? void 0 : r.id,
                        id: y,
                        onKeyDown: R,
                        onKeyUp: T,
                        role: "menu",
                        tabIndex: 0,
                        ref: s
                    };
                return (0, l.sY)({
                    ourProps: A,
                    theirProps: e,
                    slot: M,
                    defaultTag: "div",
                    features: I,
                    visible: S,
                    name: "Menu.Items"
                })
            }),
            _ = a.Fragment,
            j = Object.assign(O, {
                Button: F,
                Items: V,
                Item: (0, l.yV)(function(e, t) {
                    let {disabled: n=!1, ...r} = e,
                        [i, o] = k("Menu.Item"),
                        s = `headlessui-menu-item-${(0, h.M)()}`,
                        c = null !== i.activeItemIndex && i.items[i.activeItemIndex].id === s,
                        p = (0, a.useRef)(null),
                        v = (0, f.T)(t, p);
                    (0, d.e)(() => {
                        if (0 !== i.menuState || !c || 0 === i.activationTrigger)
                            return;
                        let e = (0, u.k)();
                        return e.requestAnimationFrame(() => {
                            var e,
                                t;
                            null == (t = null == (e = p.current) ? void 0 : e.scrollIntoView) || t.call(e, {
                                block: "nearest"
                            })
                        }), e.dispose
                    }, [p, c, i.menuState, i.activationTrigger, i.activeItemIndex]);
                    let y = (0, a.useRef)({
                        disabled: n,
                        domRef: p
                    });
                    (0, d.e)(() => {
                        y.current.disabled = n
                    }, [y, n]),
                    (0, d.e)(() => {
                        var e,
                            t;
                        y.current.textValue = null == (t = null == (e = p.current) ? void 0 : e.textContent) ? void 0 : t.toLowerCase()
                    }, [y, p]),
                    (0, d.e)(() => (o({
                        type: 5,
                        id: s,
                        dataRef: y
                    }), () => o({
                        type: 6,
                        id: s
                    })), [y, s]);
                    let b = (0, P.z)(e => {
                            if (n)
                                return e.preventDefault();
                            o({
                                type: 1
                            }),
                            (0, g.wI)(i.buttonRef.current)
                        }),
                        w = (0, P.z)(() => {
                            if (n)
                                return o({
                                    type: 2,
                                    focus: m.T.Nothing
                                });
                            o({
                                type: 2,
                                focus: m.T.Specific,
                                id: s
                            })
                        }),
                        x = (0, P.z)(() => {
                            n || c || o({
                                type: 2,
                                focus: m.T.Specific,
                                id: s,
                                trigger: 0
                            })
                        }),
                        E = (0, P.z)(() => {
                            n || !c || o({
                                type: 2,
                                focus: m.T.Nothing
                            })
                        }),
                        C = (0, a.useMemo)(() => ({
                            active: c,
                            disabled: n
                        }), [c, n]);
                    return (0, l.sY)({
                        ourProps: {
                            id: s,
                            ref: v,
                            role: "menuitem",
                            tabIndex: !0 === n ? void 0 : -1,
                            "aria-disabled": !0 === n || void 0,
                            disabled: void 0,
                            onClick: b,
                            onFocus: w,
                            onPointerMove: x,
                            onMouseMove: x,
                            onPointerLeave: E,
                            onMouseLeave: E
                        },
                        theirProps: r,
                        slot: C,
                        defaultTag: _,
                        name: "Menu.Item"
                    })
                })
            })
    },
    98359: function(e, t, n) {
        "use strict";
        n.d(t, {
            u: function() {
                return O
            }
        });
        var r,
            i,
            o = n(70079),
            a = n(4911),
            s = n(37068),
            l = n(78983),
            u = n(26577),
            c = n(98044),
            d = n(81303),
            f = n(28203),
            h = n(14699),
            p = n(32552);
        function m(e, ...t) {
            e && t.length > 0 && e.classList.add(...t)
        }
        function v(e, ...t) {
            e && t.length > 0 && e.classList.remove(...t)
        }
        var g = ((r = g || {}).Ended = "ended", r.Cancelled = "cancelled", r),
            y = n(61296),
            b = n(58389);
        function w(e="") {
            return e.split(" ").filter(e => e.trim().length > 1)
        }
        let x = (0, o.createContext)(null);
        x.displayName = "TransitionContext";
        var E = ((i = E || {}).Visible = "visible", i.Hidden = "hidden", i);
        let P = (0, o.createContext)(null);
        function C(e) {
            return "children" in e ? C(e.children) : e.current.filter(({el: e}) => null !== e.current).filter(({state: e}) => "visible" === e).length > 0
        }
        function S(e, t) {
            let n = (0, d.E)(e),
                r = (0, o.useRef)([]),
                i = (0, u.t)(),
                s = (0, y.G)(),
                c = (0, b.z)((e, t=a.l4.Hidden) => {
                    let o = r.current.findIndex(({el: t}) => t === e);
                    -1 !== o && ((0, l.E)(t, {
                        [a.l4.Unmount]() {
                            r.current.splice(o, 1)
                        },
                        [a.l4.Hidden]() {
                            r.current[o].state = "hidden"
                        }
                    }), s.microTask(() => {
                        var e;
                        !C(r) && i.current && (null == (e = n.current) || e.call(n))
                    }))
                }),
                f = (0, b.z)(e => {
                    let t = r.current.find(({el: t}) => t === e);
                    return t ? "visible" !== t.state && (t.state = "visible") : r.current.push({
                        el: e,
                        state: "visible"
                    }), () => c(e, a.l4.Unmount)
                }),
                h = (0, o.useRef)([]),
                p = (0, o.useRef)(Promise.resolve()),
                m = (0, o.useRef)({
                    enter: [],
                    leave: [],
                    idle: []
                }),
                v = (0, b.z)((e, n, r) => {
                    h.current.splice(0),
                    t && (t.chains.current[n] = t.chains.current[n].filter(([t]) => t !== e)),
                    null == t || t.chains.current[n].push([e, new Promise(e => {
                        h.current.push(e)
                    })]),
                    null == t || t.chains.current[n].push([e, new Promise(e => {
                        Promise.all(m.current[n].map(([e, t]) => t)).then(() => e())
                    })]),
                    "enter" === n ? p.current = p.current.then(() => null == t ? void 0 : t.wait.current).then(() => r(n)) : r(n)
                }),
                g = (0, b.z)((e, t, n) => {
                    Promise.all(m.current[t].splice(0).map(([e, t]) => t)).then(() => {
                        var e;
                        null == (e = h.current.shift()) || e()
                    }).then(() => n(t))
                });
            return (0, o.useMemo)(() => ({
                children: r,
                register: f,
                unregister: c,
                onStart: v,
                onStop: g,
                wait: p,
                chains: m
            }), [f, c, r, v, g, m, p])
        }
        function R() {}
        P.displayName = "NestingContext";
        let T = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
        function M(e) {
            var t;
            let n = {};
            for (let r of T)
                n[r] = null != (t = e[r]) ? t : R;
            return n
        }
        let A = a.AN.RenderStrategy,
            k = (0, a.yV)(function(e, t) {
                var n;
                let r,
                    {beforeEnter: i, afterEnter: E, beforeLeave: R, afterLeave: T, enter: k, enterFrom: D, enterTo: L, entered: O, leave: F, leaveFrom: I, leaveTo: V, ..._} = e,
                    j = (0, o.useRef)(null),
                    N = (0, h.T)(j, t),
                    B = _.unmount ? a.l4.Unmount : a.l4.Hidden,
                    {show: W, appear: $, initial: z} = function() {
                        let e = (0, o.useContext)(x);
                        if (null === e)
                            throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                        return e
                    }(),
                    [H, U] = (0, o.useState)(W ? "visible" : "hidden"),
                    Z = function() {
                        let e = (0, o.useContext)(P);
                        if (null === e)
                            throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                        return e
                    }(),
                    {register: Y, unregister: G} = Z,
                    K = (0, o.useRef)(null);
                (0, o.useEffect)(() => Y(j), [Y, j]),
                (0, o.useEffect)(() => {
                    if (B === a.l4.Hidden && j.current) {
                        if (W && "visible" !== H) {
                            U("visible");
                            return
                        }
                        return (0, l.E)(H, {
                            hidden: () => G(j),
                            visible: () => Y(j)
                        })
                    }
                }, [H, j, Y, G, W, B]);
                let q = (0, d.E)({
                        enter: w(k),
                        enterFrom: w(D),
                        enterTo: w(L),
                        entered: w(O),
                        leave: w(F),
                        leaveFrom: w(I),
                        leaveTo: w(V)
                    }),
                    X = (n = {
                        beforeEnter: i,
                        afterEnter: E,
                        beforeLeave: R,
                        afterLeave: T
                    }, r = (0, o.useRef)(M(n)), (0, o.useEffect)(() => {
                        r.current = M(n)
                    }, [n]), r),
                    J = (0, f.H)();
                (0, o.useEffect)(() => {
                    if (J && "visible" === H && null === j.current)
                        throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")
                }, [j, H, J]);
                let Q = z && !$,
                    ee = !J || Q || K.current === W ? "idle" : W ? "enter" : "leave",
                    et = (0, b.z)(e => (0, l.E)(e, {
                        enter: () => X.current.beforeEnter(),
                        leave: () => X.current.beforeLeave(),
                        idle: () => {}
                    })),
                    en = (0, b.z)(e => (0, l.E)(e, {
                        enter: () => X.current.afterEnter(),
                        leave: () => X.current.afterLeave(),
                        idle: () => {}
                    })),
                    er = S(() => {
                        U("hidden"),
                        G(j)
                    }, Z);
                return function({container: e, direction: t, classes: n, onStart: r, onStop: i}) {
                    let o = (0, u.t)(),
                        a = (0, y.G)(),
                        s = (0, d.E)(t);
                    (0, c.e)(() => {
                        let t = (0, p.k)();
                        a.add(t.dispose);
                        let u = e.current;
                        if (u && "idle" !== s.current && o.current) {
                            var c,
                                d,
                                f,
                                h;
                            let e,
                                o,
                                a,
                                y,
                                b,
                                w,
                                x;
                            return t.dispose(), r.current(s.current), t.add((c = u, d = n.current, f = "enter" === s.current, h = e => {
                                t.dispose(),
                                (0, l.E)(e, {
                                    [g.Ended]() {
                                        i.current(s.current)
                                    },
                                    [g.Cancelled]: () => {}
                                })
                            }, o = f ? "enter" : "leave", a = (0, p.k)(), y = void 0 !== h ? (e = {
                                called: !1
                            }, (...t) => {
                                if (!e.called)
                                    return e.called = !0, h(...t)
                            }) : () => {}, "enter" === o && (c.removeAttribute("hidden"), c.style.display = ""), b = (0, l.E)(o, {
                                enter: () => d.enter,
                                leave: () => d.leave
                            }), w = (0, l.E)(o, {
                                enter: () => d.enterTo,
                                leave: () => d.leaveTo
                            }), x = (0, l.E)(o, {
                                enter: () => d.enterFrom,
                                leave: () => d.leaveFrom
                            }), v(c, ...d.enter, ...d.enterTo, ...d.enterFrom, ...d.leave, ...d.leaveFrom, ...d.leaveTo, ...d.entered), m(c, ...b, ...x), a.nextFrame(() => {
                                v(c, ...x),
                                m(c, ...w),
                                function(e, t) {
                                    let n = (0, p.k)();
                                    if (!e)
                                        return n.dispose;
                                    let {transitionDuration: r, transitionDelay: i} = getComputedStyle(e),
                                        [o, a] = [r, i].map(e => {
                                            let [t=0] = e.split(",").filter(Boolean).map(e => e.includes("ms") ? parseFloat(e) : 1e3 * parseFloat(e)).sort((e, t) => t - e);
                                            return t
                                        });
                                    if (o + a !== 0) {
                                        let r = [];
                                        r.push(n.addEventListener(e, "transitionrun", i => {
                                            i.target === i.currentTarget && (r.splice(0).forEach(e => e()), r.push(n.addEventListener(e, "transitionend", e => {
                                                e.target === e.currentTarget && (t("ended"), r.splice(0).forEach(e => e()))
                                            }), n.addEventListener(e, "transitioncancel", e => {
                                                e.target === e.currentTarget && (t("cancelled"), r.splice(0).forEach(e => e()))
                                            })))
                                        }))
                                    } else
                                        t("ended");
                                    n.add(() => t("cancelled")),
                                    n.dispose
                                }(c, e => ("ended" === e && (v(c, ...b), m(c, ...d.entered)), y(e)))
                            }), a.dispose)), t.dispose
                        }
                    }, [t])
                }({
                    container: j,
                    classes: q,
                    direction: ee,
                    onStart: (0, d.E)(e => {
                        er.onStart(j, e, et)
                    }),
                    onStop: (0, d.E)(e => {
                        er.onStop(j, e, en),
                        "leave" !== e || C(er) || (U("hidden"), G(j))
                    })
                }), (0, o.useEffect)(() => {
                    Q && (B === a.l4.Hidden ? K.current = null : K.current = W)
                }, [W, Q, H]), o.createElement(P.Provider, {
                    value: er
                }, o.createElement(s.up, {
                    value: (0, l.E)(H, {
                        visible: s.ZM.Open,
                        hidden: s.ZM.Closed
                    })
                }, (0, a.sY)({
                    ourProps: {
                        ref: N
                    },
                    theirProps: _,
                    defaultTag: "div",
                    features: A,
                    visible: "visible" === H,
                    name: "Transition.Child"
                })))
            }),
            D = (0, a.yV)(function(e, t) {
                let {show: n, appear: r=!1, unmount: i, ...u} = e,
                    d = (0, o.useRef)(null),
                    p = (0, h.T)(d, t);
                (0, f.H)();
                let m = (0, s.oJ)();
                if (void 0 === n && null !== m && (n = (0, l.E)(m, {
                    [s.ZM.Open]: !0,
                    [s.ZM.Closed]: !1
                })), ![!0, !1].includes(n))
                    throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
                let [v, g] = (0, o.useState)(n ? "visible" : "hidden"),
                    y = S(() => {
                        g("hidden")
                    }),
                    [b, w] = (0, o.useState)(!0),
                    E = (0, o.useRef)([n]);
                (0, c.e)(() => {
                    !1 !== b && E.current[E.current.length - 1] !== n && (E.current.push(n), w(!1))
                }, [E, n]);
                let R = (0, o.useMemo)(() => ({
                    show: n,
                    appear: r,
                    initial: b
                }), [n, r, b]);
                (0, o.useEffect)(() => {
                    if (n)
                        g("visible");
                    else if (C(y)) {
                        let e = d.current;
                        if (!e)
                            return;
                        let t = e.getBoundingClientRect();
                        0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && g("hidden")
                    } else
                        g("hidden")
                }, [n, y]);
                let T = {
                    unmount: i
                };
                return o.createElement(P.Provider, {
                    value: y
                }, o.createElement(x.Provider, {
                    value: R
                }, (0, a.sY)({
                    ourProps: {
                        ...T,
                        as: o.Fragment,
                        children: o.createElement(k, {
                            ref: p,
                            ...T,
                            ...u
                        })
                    },
                    theirProps: {},
                    defaultTag: o.Fragment,
                    features: A,
                    visible: "visible" === v,
                    name: "Transition"
                })))
            }),
            L = (0, a.yV)(function(e, t) {
                let n = null !== (0, o.useContext)(x),
                    r = null !== (0, s.oJ)();
                return o.createElement(o.Fragment, null, !n && r ? o.createElement(D, {
                    ref: t,
                    ...e
                }) : o.createElement(k, {
                    ref: t,
                    ...e
                }))
            }),
            O = Object.assign(D, {
                Child: L,
                Root: D
            })
    },
    61296: function(e, t, n) {
        "use strict";
        n.d(t, {
            G: function() {
                return o
            }
        });
        var r = n(70079),
            i = n(32552);
        function o() {
            let [e] = (0, r.useState)(i.k);
            return (0, r.useEffect)(() => () => e.dispose(), [e]), e
        }
    },
    58389: function(e, t, n) {
        "use strict";
        n.d(t, {
            z: function() {
                return o
            }
        });
        var r = n(70079),
            i = n(81303);
        let o = function(e) {
            let t = (0, i.E)(e);
            return r.useCallback((...e) => t.current(...e), [t])
        }
    },
    58194: function(e, t, n) {
        "use strict";
        n.d(t, {
            M: function() {
                return u
            }
        });
        var r,
            i = n(70079),
            o = n(98044),
            a = n(28203);
        let s = 0;
        function l() {
            return ++s
        }
        let u = null != (r = i.useId) ? r : function() {
            let e = (0, a.H)(),
                [t, n] = i.useState(e ? l : null);
            return (0, o.e)(() => {
                null === t && n(l())
            }, [t]), null != t ? "" + t : void 0
        }
    },
    26577: function(e, t, n) {
        "use strict";
        n.d(t, {
            t: function() {
                return o
            }
        });
        var r = n(70079),
            i = n(98044);
        function o() {
            let e = (0, r.useRef)(!1);
            return (0, i.e)(() => (e.current = !0, () => {
                e.current = !1
            }), []), e
        }
    },
    98044: function(e, t, n) {
        "use strict";
        n.d(t, {
            e: function() {
                return i
            }
        });
        var r = n(70079);
        let i = n(34926).s ? r.useEffect : r.useLayoutEffect
    },
    81303: function(e, t, n) {
        "use strict";
        n.d(t, {
            E: function() {
                return o
            }
        });
        var r = n(70079),
            i = n(98044);
        function o(e) {
            let t = (0, r.useRef)(e);
            return (0, i.e)(() => {
                t.current = e
            }, [e]), t
        }
    },
    53315: function(e, t, n) {
        "use strict";
        n.d(t, {
            O: function() {
                return s
            }
        });
        var r = n(70079),
            i = n(29787),
            o = n(81303);
        function a(e, t, n) {
            let i = (0, o.E)(t);
            (0, r.useEffect)(() => {
                function t(e) {
                    i.current(e)
                }
                return document.addEventListener(e, t, n), () => document.removeEventListener(e, t, n)
            }, [e, n])
        }
        function s(e, t, n=!0) {
            let o = (0, r.useRef)(!1);
            function s(n, r) {
                if (!o.current || n.defaultPrevented)
                    return;
                let a = function e(t) {
                        return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
                    }(e),
                    s = r(n);
                if (null !== s && s.ownerDocument.documentElement.contains(s)) {
                    for (let e of a) {
                        if (null === e)
                            continue;
                        let t = e instanceof HTMLElement ? e : e.current;
                        if (null != t && t.contains(s))
                            return
                    }
                    return (0, i.sP)(s, i.tJ.Loose) || -1 === s.tabIndex || n.preventDefault(), t(n, s)
                }
            }
            (0, r.useEffect)(() => {
                requestAnimationFrame(() => {
                    o.current = n
                })
            }, [n]);
            let l = (0, r.useRef)(null);
            a("mousedown", e => {
                o.current && (l.current = e.target)
            }, !0),
            a("click", e => {
                l.current && (s(e, () => l.current), l.current = null)
            }, !0),
            a("blur", e => s(e, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
        }
    },
    46789: function(e, t, n) {
        "use strict";
        n.d(t, {
            i: function() {
                return o
            }
        });
        var r = n(70079),
            i = n(52327);
        function o(...e) {
            return (0, r.useMemo)(() => (0, i.r)(...e), [...e])
        }
    },
    19992: function(e, t, n) {
        "use strict";
        n.d(t, {
            f: function() {
                return a
            }
        });
        var r = n(70079),
            i = n(98044);
        function o(e) {
            var t;
            if (e.type)
                return e.type;
            let n = null != (t = e.as) ? t : "button";
            if ("string" == typeof n && "button" === n.toLowerCase())
                return "button"
        }
        function a(e, t) {
            let [n, a] = (0, r.useState)(() => o(e));
            return (0, i.e)(() => {
                a(o(e))
            }, [e.type, e.as]), (0, i.e)(() => {
                n || !t.current || t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && a("button")
            }, [n, t]), n
        }
    },
    28203: function(e, t, n) {
        "use strict";
        n.d(t, {
            H: function() {
                return o
            }
        });
        var r = n(70079);
        let i = {
            serverHandoffComplete: !1
        };
        function o() {
            let [e, t] = (0, r.useState)(i.serverHandoffComplete);
            return (0, r.useEffect)(() => {
                !0 !== e && t(!0)
            }, [e]), (0, r.useEffect)(() => {
                !1 === i.serverHandoffComplete && (i.serverHandoffComplete = !0)
            }, []), e
        }
    },
    14699: function(e, t, n) {
        "use strict";
        n.d(t, {
            T: function() {
                return s
            },
            h: function() {
                return a
            }
        });
        var r = n(70079),
            i = n(58389);
        let o = Symbol();
        function a(e, t=!0) {
            return Object.assign(e, {
                [o]: t
            })
        }
        function s(...e) {
            let t = (0, r.useRef)(e);
            (0, r.useEffect)(() => {
                t.current = e
            }, [e]);
            let n = (0, i.z)(e => {
                for (let n of t.current)
                    null != n && ("function" == typeof n ? n(e) : n.current = e)
            });
            return e.every(e => null == e || (null == e ? void 0 : e[o])) ? void 0 : n
        }
    },
    98992: function(e, t, n) {
        "use strict";
        n.d(t, {
            A: function() {
                return o
            },
            _: function() {
                return a
            }
        });
        var r,
            i = n(4911),
            o = ((r = o || {})[r.None = 1] = "None", r[r.Focusable = 2] = "Focusable", r[r.Hidden = 4] = "Hidden", r);
        let a = (0, i.yV)(function(e, t) {
            let {features: n=1, ...r} = e,
                o = {
                    ref: t,
                    "aria-hidden": (2 & n) == 2 || void 0,
                    style: {
                        position: "fixed",
                        top: 1,
                        left: 1,
                        width: 1,
                        height: 0,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        borderWidth: "0",
                        ...(4 & n) == 4 && (2 & n) != 2 && {
                            display: "none"
                        }
                    }
                };
            return (0, i.sY)({
                ourProps: o,
                theirProps: r,
                slot: {},
                defaultTag: "div",
                name: "Hidden"
            })
        })
    },
    37068: function(e, t, n) {
        "use strict";
        n.d(t, {
            ZM: function() {
                return a
            },
            oJ: function() {
                return s
            },
            up: function() {
                return l
            }
        });
        var r,
            i = n(70079);
        let o = (0, i.createContext)(null);
        o.displayName = "OpenClosedContext";
        var a = ((r = a || {})[r.Open = 0] = "Open", r[r.Closed = 1] = "Closed", r);
        function s() {
            return (0, i.useContext)(o)
        }
        function l({value: e, children: t}) {
            return i.createElement(o.Provider, {
                value: e
            }, t)
        }
    },
    28595: function(e, t, n) {
        "use strict";
        function r(e) {
            let t = e.parentElement,
                n = null;
            for (; t && !(t instanceof HTMLFieldSetElement);)
                t instanceof HTMLLegendElement && (n = t),
                t = t.parentElement;
            let r = (null == t ? void 0 : t.getAttribute("disabled")) === "";
            return !(r && function(e) {
                    if (!e)
                        return !1;
                    let t = e.previousElementSibling;
                    for (; null !== t;) {
                        if (t instanceof HTMLLegendElement)
                            return !1;
                        t = t.previousElementSibling
                    }
                    return !0
                }(n)) && r
        }
        n.d(t, {
            P: function() {
                return r
            }
        })
    },
    10186: function(e, t, n) {
        "use strict";
        n.d(t, {
            T: function() {
                return i
            },
            d: function() {
                return o
            }
        });
        var r,
            i = ((r = i || {})[r.First = 0] = "First", r[r.Previous = 1] = "Previous", r[r.Next = 2] = "Next", r[r.Last = 3] = "Last", r[r.Specific = 4] = "Specific", r[r.Nothing = 5] = "Nothing", r);
        function o(e, t) {
            let n = t.resolveItems();
            if (n.length <= 0)
                return null;
            let r = t.resolveActiveIndex(),
                i = null != r ? r : -1,
                o = (() => {
                    switch (e.focus) {
                    case 0:
                        return n.findIndex(e => !t.resolveDisabled(e));
                    case 1:
                        {
                            let e = n.slice().reverse().findIndex((e, n, r) => (-1 === i || !(r.length - n - 1 >= i)) && !t.resolveDisabled(e));
                            return -1 === e ? e : n.length - 1 - e
                        }case 2:
                        return n.findIndex((e, n) => !(n <= i) && !t.resolveDisabled(e));
                    case 3:
                        {
                            let e = n.slice().reverse().findIndex(e => !t.resolveDisabled(e));
                            return -1 === e ? e : n.length - 1 - e
                        }case 4:
                        return n.findIndex(n => t.resolveId(n) === e.id);
                    case 5:
                        return null;
                    default:
                        !function(e) {
                            throw Error("Unexpected object: " + e)
                        }(e)
                    }
                })();
            return -1 === o ? r : o
        }
    },
    32552: function(e, t, n) {
        "use strict";
        n.d(t, {
            k: function() {
                return i
            }
        });
        var r = n(84575);
        function i() {
            let e = [],
                t = [],
                n = {
                    enqueue(e) {
                        t.push(e)
                    },
                    addEventListener: (e, t, r, i) => (e.addEventListener(t, r, i), n.add(() => e.removeEventListener(t, r, i))),
                    requestAnimationFrame(...e) {
                        let t = requestAnimationFrame(...e);
                        return n.add(() => cancelAnimationFrame(t))
                    },
                    nextFrame: (...e) => n.requestAnimationFrame(() => n.requestAnimationFrame(...e)),
                    setTimeout(...e) {
                        let t = setTimeout(...e);
                        return n.add(() => clearTimeout(t))
                    },
                    microTask(...e) {
                        let t = {
                            current: !0
                        };
                        return (0, r.Y)(() => {
                            t.current && e[0]()
                        }), n.add(() => {
                            t.current = !1
                        })
                    },
                    add: t => (e.push(t), () => {
                        let n = e.indexOf(t);
                        if (n >= 0) {
                            let [t] = e.splice(n, 1);
                            t()
                        }
                    }),
                    dispose() {
                        for (let t of e.splice(0))
                            t()
                    },
                    async workQueue() {
                        for (let e of t.splice(0))
                            await e()
                    }
                };
            return n
        }
    },
    29787: function(e, t, n) {
        "use strict";
        n.d(t, {
            C5: function() {
                return y
            },
            EO: function() {
                return w
            },
            TO: function() {
                return d
            },
            fE: function() {
                return f
            },
            jA: function() {
                return x
            },
            sP: function() {
                return v
            },
            tJ: function() {
                return m
            },
            wI: function() {
                return g
            },
            z2: function() {
                return b
            }
        });
        var r,
            i,
            o,
            a,
            s = n(32552),
            l = n(78983),
            u = n(52327);
        let c = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",");
        var d = ((r = d || {})[r.First = 1] = "First", r[r.Previous = 2] = "Previous", r[r.Next = 4] = "Next", r[r.Last = 8] = "Last", r[r.WrapAround = 16] = "WrapAround", r[r.NoScroll = 32] = "NoScroll", r),
            f = ((i = f || {})[i.Error = 0] = "Error", i[i.Overflow = 1] = "Overflow", i[i.Success = 2] = "Success", i[i.Underflow = 3] = "Underflow", i),
            h = ((o = h || {})[o.Previous = -1] = "Previous", o[o.Next = 1] = "Next", o);
        function p(e=document.body) {
            return null == e ? [] : Array.from(e.querySelectorAll(c))
        }
        var m = ((a = m || {})[a.Strict = 0] = "Strict", a[a.Loose = 1] = "Loose", a);
        function v(e, t=0) {
            var n;
            return e !== (null == (n = (0, u.r)(e)) ? void 0 : n.body) && (0, l.E)(t, {
                    0: () => e.matches(c),
                    1() {
                        let t = e;
                        for (; null !== t;) {
                            if (t.matches(c))
                                return !0;
                            t = t.parentElement
                        }
                        return !1
                    }
                })
        }
        function g(e) {
            let t = (0, u.r)(e);
            (0, s.k)().nextFrame(() => {
                t && !v(t.activeElement, 0) && y(e)
            })
        }
        function y(e) {
            null == e || e.focus({
                preventScroll: !0
            })
        }
        function b(e, t=e => e) {
            return e.slice().sort((e, n) => {
                let r = t(e),
                    i = t(n);
                if (null === r || null === i)
                    return 0;
                let o = r.compareDocumentPosition(i);
                return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
            })
        }
        function w(e, t) {
            return x(p(), t, !0, e)
        }
        function x(e, t, n=!0, r=null) {
            var i,
                o,
                a;
            let s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
                l = Array.isArray(e) ? n ? b(e) : e : p(e);
            r = null != r ? r : s.activeElement;
            let u = (() => {
                    if (5 & t)
                        return 1;
                    if (10 & t)
                        return -1;
                    throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                })(),
                c = (() => {
                    if (1 & t)
                        return 0;
                    if (2 & t)
                        return Math.max(0, l.indexOf(r)) - 1;
                    if (4 & t)
                        return Math.max(0, l.indexOf(r)) + 1;
                    if (8 & t)
                        return l.length - 1;
                    throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                })(),
                d = 32 & t ? {
                    preventScroll: !0
                } : {},
                f = 0,
                h = l.length,
                m;
            do {
                if (f >= h || f + h <= 0)
                    return 0;
                let e = c + f;
                if (16 & t)
                    e = (e + h) % h;
                else {
                    if (e < 0)
                        return 3;
                    if (e >= h)
                        return 1
                }
                null == (m = l[e]) || m.focus(d),
                f += u
            } while (m !== s.activeElement);
            return 6 & t && null != (a = null == (o = null == (i = m) ? void 0 : i.matches) ? void 0 : o.call(i, "textarea,input")) && a && m.select(), m.hasAttribute("tabindex") || m.setAttribute("tabindex", "0"), 2
        }
    },
    78983: function(e, t, n) {
        "use strict";
        function r(e, t, ...n) {
            if (e in t) {
                let r = t[e];
                return "function" == typeof r ? r(...n) : r
            }
            let i = Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e => `"${e}"`).join(", ")}.`);
            throw Error.captureStackTrace && Error.captureStackTrace(i, r), i
        }
        n.d(t, {
            E: function() {
                return r
            }
        })
    },
    84575: function(e, t, n) {
        "use strict";
        function r(e) {
            "function" == typeof queueMicrotask ? queueMicrotask(e) : Promise.resolve().then(e).catch(e => setTimeout(() => {
                throw e
            }))
        }
        n.d(t, {
            Y: function() {
                return r
            }
        })
    },
    52327: function(e, t, n) {
        "use strict";
        n.d(t, {
            r: function() {
                return i
            }
        });
        var r = n(34926);
        function i(e) {
            return r.s ? null : e instanceof Node ? e.ownerDocument : null != e && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
        }
    },
    4911: function(e, t, n) {
        "use strict";
        n.d(t, {
            AN: function() {
                return s
            },
            l4: function() {
                return l
            },
            oA: function() {
                return h
            },
            sY: function() {
                return u
            },
            yV: function() {
                return f
            }
        });
        var r,
            i,
            o = n(70079),
            a = n(78983),
            s = ((r = s || {})[r.None = 0] = "None", r[r.RenderStrategy = 1] = "RenderStrategy", r[r.Static = 2] = "Static", r),
            l = ((i = l || {})[i.Unmount = 0] = "Unmount", i[i.Hidden = 1] = "Hidden", i);
        function u({ourProps: e, theirProps: t, slot: n, defaultTag: r, features: i, visible: o=!0, name: s}) {
            let l = d(t, e);
            if (o)
                return c(l, n, r, s);
            let u = null != i ? i : 0;
            if (2 & u) {
                let {static: e=!1, ...t} = l;
                if (e)
                    return c(t, n, r, s)
            }
            if (1 & u) {
                let {unmount: e=!0, ...t} = l;
                return (0, a.E)(e ? 0 : 1, {
                    0: () => null,
                    1: () => c({
                        ...t,
                        hidden: !0,
                        style: {
                            display: "none"
                        }
                    }, n, r, s)
                })
            }
            return c(l, n, r, s)
        }
        function c(e, t={}, n, r) {
            let {as: i=n, children: a, refName: s="ref", ...l} = p(e, ["unmount", "static"]),
                u = void 0 !== e.ref ? {
                    [s]: e.ref
                } : {},
                c = "function" == typeof a ? a(t) : a;
            l.className && "function" == typeof l.className && (l.className = l.className(t));
            let f = {};
            if (t) {
                let e = !1,
                    n = [];
                for (let [r, i] of Object.entries(t))
                    "boolean" == typeof i && (e = !0),
                    !0 === i && n.push(r);
                e && (f["data-headlessui-state"] = n.join(" "))
            }
            if (i === o.Fragment && Object.keys(h(l)).length > 0) {
                if (!(0, o.isValidElement)(c) || Array.isArray(c) && c.length > 1)
                    throw Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(l).map(e => `  - ${e}`).join(`
`
                    ), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(e => `  - ${e}`).join(`
`
                    )].join(`
`
                    ));
                return (0, o.cloneElement)(c, Object.assign({}, d(c.props, h(p(l, ["ref"]))), f, u, function(...e) {
                    return {
                        ref: e.every(e => null == e) ? void 0 : t => {
                            for (let n of e)
                                null != n && ("function" == typeof n ? n(t) : n.current = t)
                        }
                    }
                }(c.ref, u.ref)))
            }
            return (0, o.createElement)(i, Object.assign({}, p(l, ["ref"]), i !== o.Fragment && u, i !== o.Fragment && f), c)
        }
        function d(...e) {
            if (0 === e.length)
                return {};
            if (1 === e.length)
                return e[0];
            let t = {},
                n = {};
            for (let r of e)
                for (let e in r)
                    e.startsWith("on") && "function" == typeof r[e] ? (null != n[e] || (n[e] = []), n[e].push(r[e])) : t[e] = r[e];
            if (t.disabled || t["aria-disabled"])
                return Object.assign(t, Object.fromEntries(Object.keys(n).map(e => [e, void 0])));
            for (let e in n)
                Object.assign(t, {
                    [e](t, ...r) {
                        for (let i of n[e]) {
                            if ((t instanceof Event || (null == t ? void 0 : t.nativeEvent) instanceof Event) && t.defaultPrevented)
                                return;
                            i(t, ...r)
                        }
                    }
                });
            return t
        }
        function f(e) {
            var t;
            return Object.assign((0, o.forwardRef)(e), {
                displayName: null != (t = e.displayName) ? t : e.name
            })
        }
        function h(e) {
            let t = Object.assign({}, e);
            for (let e in t)
                void 0 === t[e] && delete t[e];
            return t
        }
        function p(e, t=[]) {
            let n = Object.assign({}, e);
            for (let e of t)
                e in n && delete n[e];
            return n
        }
    },
    34926: function(e, t, n) {
        "use strict";
        n.d(t, {
            s: function() {
                return r
            }
        });
        let r = "undefined" == typeof window || "undefined" == typeof document
    },
    10132: function(e, t, n) {
        "use strict";
        function r(e, t, {checkForDefaultPrevented: n=!0}={}) {
            return function(r) {
                if (null == e || e(r), !1 === n || !r.defaultPrevented)
                    return null == t ? void 0 : t(r)
            }
        }
        n.d(t, {
            M: function() {
                return r
            }
        })
    },
    89340: function(e, t, n) {
        "use strict";
        n.d(t, {
            B: function() {
                return s
            }
        });
        var r = n(70079),
            i = n(53559),
            o = n(68469),
            a = n(26739);
        function s(e) {
            let t = e + "CollectionProvider",
                [n, s] = (0, i.b)(t),
                [l, u] = n(t, {
                    collectionRef: {
                        current: null
                    },
                    itemMap: new Map
                }),
                c = e => {
                    let {scope: t, children: n} = e,
                        i = r.useRef(null),
                        o = r.useRef(new Map).current;
                    return r.createElement(l, {
                        scope: t,
                        itemMap: o,
                        collectionRef: i
                    }, n)
                },
                d = e + "CollectionSlot",
                f = r.forwardRef((e, t) => {
                    let {scope: n, children: i} = e,
                        s = u(d, n),
                        l = (0, o.e)(t, s.collectionRef);
                    return r.createElement(a.g7, {
                        ref: l
                    }, i)
                }),
                h = e + "CollectionItemSlot",
                p = "data-radix-collection-item",
                m = r.forwardRef((e, t) => {
                    let {scope: n, children: i, ...s} = e,
                        l = r.useRef(null),
                        c = (0, o.e)(t, l),
                        d = u(h, n);
                    return r.useEffect(() => (d.itemMap.set(l, {
                        ref: l,
                        ...s
                    }), () => void d.itemMap.delete(l))), r.createElement(a.g7, {
                        [p]: "",
                        ref: c
                    }, i)
                });
            return [{
                Provider: c,
                Slot: f,
                ItemSlot: m
            }, function(t) {
                let n = u(e + "CollectionConsumer", t),
                    i = r.useCallback(() => {
                        let e = n.collectionRef.current;
                        if (!e)
                            return [];
                        let t = Array.from(e.querySelectorAll(`[${p}]`)),
                            r = Array.from(n.itemMap.values()),
                            i = r.sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
                        return i
                    }, [n.collectionRef, n.itemMap]);
                return i
            }, s]
        }
    },
    68469: function(e, t, n) {
        "use strict";
        n.d(t, {
            F: function() {
                return i
            },
            e: function() {
                return o
            }
        });
        var r = n(70079);
        function i(...e) {
            return t => e.forEach(e => {
                var n;
                "function" == typeof (n = e) ? n(t) : null != n && (n.current = t)
            })
        }
        function o(...e) {
            return (0, r.useCallback)(i(...e), e)
        }
    },
    53559: function(e, t, n) {
        "use strict";
        n.d(t, {
            b: function() {
                return i
            }
        });
        var r = n(70079);
        function i(e, t=[]) {
            let n = [],
                i = () => {
                    let t = n.map(e => (0, r.createContext)(e));
                    return function(n) {
                        let i = (null == n ? void 0 : n[e]) || t;
                        return (0, r.useMemo)(() => ({
                            [`__scope${e}`]: {
                                ...n,
                                [e]: i
                            }
                        }), [n, i])
                    }
                };
            return i.scopeName = e, [function(t, i) {
                let o = (0, r.createContext)(i),
                    a = n.length;
                function s(t) {
                    let {scope: n, children: i, ...s} = t,
                        l = (null == n ? void 0 : n[e][a]) || o,
                        u = (0, r.useMemo)(() => s, Object.values(s));
                    return (0, r.createElement)(l.Provider, {
                        value: u
                    }, i)
                }
                return n = [...n, i], s.displayName = t + "Provider", [s, function(n, s) {
                    let l = (null == s ? void 0 : s[e][a]) || o,
                        u = (0, r.useContext)(l);
                    if (u)
                        return u;
                    if (void 0 !== i)
                        return i;
                    throw Error(`\`${n}\` must be used within \`${t}\``)
                }]
            }, function(...e) {
                let t = e[0];
                if (1 === e.length)
                    return t;
                let n = () => {
                    let n = e.map(e => ({
                        useScope: e(),
                        scopeName: e.scopeName
                    }));
                    return function(e) {
                        let i = n.reduce((t, {useScope: n, scopeName: r}) => {
                            let i = n(e),
                                o = i[`__scope${r}`];
                            return {
                                ...t,
                                ...o
                            }
                        }, {});
                        return (0, r.useMemo)(() => ({
                            [`__scope${t.scopeName}`]: i
                        }), [i])
                    }
                };
                return n.scopeName = t.scopeName, n
            }(i, ...t)]
        }
    },
    93372: function(e, t, n) {
        "use strict";
        let r;
        n.d(t, {
            I0: function() {
                return g
            },
            XB: function() {
                return f
            },
            fC: function() {
                return v
            }
        });
        var i = n(45675),
            o = n(70079),
            a = n(10132),
            s = n(8859),
            l = n(68469),
            u = n(51629);
        let c = "dismissableLayer.update",
            d = (0, o.createContext)({
                layers: new Set,
                layersWithOutsidePointerEventsDisabled: new Set,
                branches: new Set
            }),
            f = (0, o.forwardRef)((e, t) => {
                var n;
                let {disableOutsidePointerEvents: f=!1, onEscapeKeyDown: h, onPointerDownOutside: v, onFocusOutside: g, onInteractOutside: y, onDismiss: b, ...w} = e,
                    x = (0, o.useContext)(d),
                    [E, P] = (0, o.useState)(null),
                    C = null !== (n = null == E ? void 0 : E.ownerDocument) && void 0 !== n ? n : null == globalThis ? void 0 : globalThis.document,
                    [, S] = (0, o.useState)({}),
                    R = (0, l.e)(t, e => P(e)),
                    T = Array.from(x.layers),
                    [M] = [...x.layersWithOutsidePointerEventsDisabled].slice(-1),
                    A = T.indexOf(M),
                    k = E ? T.indexOf(E) : -1,
                    D = x.layersWithOutsidePointerEventsDisabled.size > 0,
                    L = k >= A,
                    O = function(e, t=null == globalThis ? void 0 : globalThis.document) {
                        let n = (0, u.W)(e),
                            r = (0, o.useRef)(!1),
                            i = (0, o.useRef)(() => {});
                        return (0, o.useEffect)(() => {
                            let e = e => {
                                    if (e.target && !r.current) {
                                        let r = {
                                            originalEvent: e
                                        };
                                        function o() {
                                            m("dismissableLayer.pointerDownOutside", n, r, {
                                                discrete: !0
                                            })
                                        }
                                        "touch" === e.pointerType ? (t.removeEventListener("click", i.current), i.current = o, t.addEventListener("click", i.current, {
                                            once: !0
                                        })) : o()
                                    }
                                    r.current = !1
                                },
                                o = window.setTimeout(() => {
                                    t.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(o),
                                t.removeEventListener("pointerdown", e),
                                t.removeEventListener("click", i.current)
                            }
                        }, [t, n]), {
                            onPointerDownCapture: () => r.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            n = [...x.branches].some(e => e.contains(t));
                        !L || n || (null == v || v(e), null == y || y(e), e.defaultPrevented || null == b || b())
                    }, C),
                    F = function(e, t=null == globalThis ? void 0 : globalThis.document) {
                        let n = (0, u.W)(e),
                            r = (0, o.useRef)(!1);
                        return (0, o.useEffect)(() => {
                            let e = e => {
                                e.target && !r.current && m("dismissableLayer.focusOutside", n, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
                        }, [t, n]), {
                            onFocusCapture: () => r.current = !0,
                            onBlurCapture: () => r.current = !1
                        }
                    }(e => {
                        let t = e.target,
                            n = [...x.branches].some(e => e.contains(t));
                        n || (null == g || g(e), null == y || y(e), e.defaultPrevented || null == b || b())
                    }, C);
                return !function(e, t=null == globalThis ? void 0 : globalThis.document) {
                    let n = (0, u.W)(e);
                    (0, o.useEffect)(() => {
                        let e = e => {
                            "Escape" === e.key && n(e)
                        };
                        return t.addEventListener("keydown", e), () => t.removeEventListener("keydown", e)
                    }, [n, t])
                }(e => {
                    let t = k === x.layers.size - 1;
                    t && (null == h || h(e), !e.defaultPrevented && b && (e.preventDefault(), b()))
                }, C), (0, o.useEffect)(() => {
                    if (E)
                        return f && (0 === x.layersWithOutsidePointerEventsDisabled.size && (r = C.body.style.pointerEvents, C.body.style.pointerEvents = "none"), x.layersWithOutsidePointerEventsDisabled.add(E)), x.layers.add(E), p(), () => {
                            f && 1 === x.layersWithOutsidePointerEventsDisabled.size && (C.body.style.pointerEvents = r)
                        }
                }, [E, C, f, x]), (0, o.useEffect)(() => () => {
                    E && (x.layers.delete(E), x.layersWithOutsidePointerEventsDisabled.delete(E), p())
                }, [E, x]), (0, o.useEffect)(() => {
                    let e = () => S({});
                    return document.addEventListener(c, e), () => document.removeEventListener(c, e)
                }, []), (0, o.createElement)(s.WV.div, (0, i.Z)({}, w, {
                    ref: R,
                    style: {
                        pointerEvents: D ? L ? "auto" : "none" : void 0,
                        ...e.style
                    },
                    onFocusCapture: (0, a.M)(e.onFocusCapture, F.onFocusCapture),
                    onBlurCapture: (0, a.M)(e.onBlurCapture, F.onBlurCapture),
                    onPointerDownCapture: (0, a.M)(e.onPointerDownCapture, O.onPointerDownCapture)
                }))
            }),
            h = (0, o.forwardRef)((e, t) => {
                let n = (0, o.useContext)(d),
                    r = (0, o.useRef)(null),
                    a = (0, l.e)(t, r);
                return (0, o.useEffect)(() => {
                    let e = r.current;
                    if (e)
                        return n.branches.add(e), () => {
                            n.branches.delete(e)
                        }
                }, [n.branches]), (0, o.createElement)(s.WV.div, (0, i.Z)({}, e, {
                    ref: a
                }))
            });
        function p() {
            let e = new CustomEvent(c);
            document.dispatchEvent(e)
        }
        function m(e, t, n, {discrete: r}) {
            let i = n.originalEvent.target,
                o = new CustomEvent(e, {
                    bubbles: !1,
                    cancelable: !0,
                    detail: n
                });
            t && i.addEventListener(e, t, {
                once: !0
            }),
            r ? (0, s.jH)(i, o) : i.dispatchEvent(o)
        }
        let v = f,
            g = h
    },
    32768: function(e, t, n) {
        "use strict";
        n.d(t, {
            h: function() {
                return s
            }
        });
        var r = n(45675),
            i = n(70079),
            o = n(99581),
            a = n(8859);
        let s = (0, i.forwardRef)((e, t) => {
            var n;
            let {container: s=null == globalThis ? void 0 : null === (n = globalThis.document) || void 0 === n ? void 0 : n.body, ...l} = e;
            return s ? o.createPortal((0, i.createElement)(a.WV.div, (0, r.Z)({}, l, {
                ref: t
            })), s) : null
        })
    },
    8859: function(e, t, n) {
        "use strict";
        n.d(t, {
            WV: function() {
                return s
            },
            jH: function() {
                return l
            }
        });
        var r = n(45675),
            i = n(70079),
            o = n(99581),
            a = n(26739);
        let s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
            let n = (0, i.forwardRef)((e, n) => {
                let {asChild: o, ...s} = e,
                    l = o ? a.g7 : t;
                return (0, i.useEffect)(() => {
                    window[Symbol.for("radix-ui")] = !0
                }, []), (0, i.createElement)(l, (0, r.Z)({}, s, {
                    ref: n
                }))
            });
            return n.displayName = `Primitive.${t}`, {
                ...e,
                [t]: n
            }
        }, {});
        function l(e, t) {
            e && (0, o.flushSync)(() => e.dispatchEvent(t))
        }
    },
    48349: function(e, t, n) {
        "use strict";
        let r;
        n.d(t, {
            VY: function() {
                return e2
            },
            JO: function() {
                return e5
            },
            ck: function() {
                return e7
            },
            eT: function() {
                return e8
            },
            h_: function() {
                return e3
            },
            fC: function() {
                return eQ
            },
            $G: function() {
                return e6
            },
            u_: function() {
                return e4
            },
            xz: function() {
                return e0
            },
            B4: function() {
                return e1
            },
            l_: function() {
                return e9
            }
        });
        var i = n(45675),
            o = n(70079),
            a = n.t(o, 2),
            s = n(99581);
        function l(e, [t, n]) {
            return Math.min(n, Math.max(t, e))
        }
        var u = n(10132),
            c = n(89340),
            d = n(68469),
            f = n(53559);
        let h = (0, o.createContext)(void 0);
        var p = n(93372);
        let m = 0;
        function v() {
            let e = document.createElement("span");
            return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
        }
        var g = n(8859),
            y = n(51629);
        let b = "focusScope.autoFocusOnMount",
            w = "focusScope.autoFocusOnUnmount",
            x = {
                bubbles: !1,
                cancelable: !0
            },
            E = (0, o.forwardRef)((e, t) => {
                let {loop: n=!1, trapped: r=!1, onMountAutoFocus: a, onUnmountAutoFocus: s, ...l} = e,
                    [u, c] = (0, o.useState)(null),
                    f = (0, y.W)(a),
                    h = (0, y.W)(s),
                    p = (0, o.useRef)(null),
                    m = (0, d.e)(t, e => c(e)),
                    v = (0, o.useRef)({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                (0, o.useEffect)(() => {
                    if (r) {
                        function e(e) {
                            if (v.paused || !u)
                                return;
                            let t = e.target;
                            u.contains(t) ? p.current = t : S(p.current, {
                                select: !0
                            })
                        }
                        function t(e) {
                            if (v.paused || !u)
                                return;
                            let t = e.relatedTarget;
                            null === t || u.contains(t) || S(p.current, {
                                select: !0
                            })
                        }
                        document.addEventListener("focusin", e),
                        document.addEventListener("focusout", t);
                        let n = new MutationObserver(function(e) {
                            let t = document.activeElement;
                            for (let n of e)
                                n.removedNodes.length > 0 && !(null != u && u.contains(t)) && S(u)
                        });
                        return u && n.observe(u, {
                            childList: !0,
                            subtree: !0
                        }), () => {
                            document.removeEventListener("focusin", e),
                            document.removeEventListener("focusout", t),
                            n.disconnect()
                        }
                    }
                }, [r, u, v.paused]),
                (0, o.useEffect)(() => {
                    if (u) {
                        R.add(v);
                        let e = document.activeElement,
                            t = u.contains(e);
                        if (!t) {
                            let t = new CustomEvent(b, x);
                            u.addEventListener(b, f),
                            u.dispatchEvent(t),
                            t.defaultPrevented || (function(e, {select: t=!1}={}) {
                                let n = document.activeElement;
                                for (let r of e)
                                    if (S(r, {
                                        select: t
                                    }), document.activeElement !== n)
                                        return
                            }(P(u).filter(e => "A" !== e.tagName), {
                                select: !0
                            }), document.activeElement === e && S(u))
                        }
                        return () => {
                            u.removeEventListener(b, f),
                            setTimeout(() => {
                                let t = new CustomEvent(w, x);
                                u.addEventListener(w, h),
                                u.dispatchEvent(t),
                                t.defaultPrevented || S(null != e ? e : document.body, {
                                    select: !0
                                }),
                                u.removeEventListener(w, h),
                                R.remove(v)
                            }, 0)
                        }
                    }
                }, [u, f, h, v]);
                let E = (0, o.useCallback)(e => {
                    if (!n && !r || v.paused)
                        return;
                    let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                        i = document.activeElement;
                    if (t && i) {
                        let t = e.currentTarget,
                            [r, o] = function(e) {
                                let t = P(e),
                                    n = C(t, e),
                                    r = C(t.reverse(), e);
                                return [n, r]
                            }(t);
                        r && o ? e.shiftKey || i !== o ? e.shiftKey && i === r && (e.preventDefault(), n && S(o, {
                            select: !0
                        })) : (e.preventDefault(), n && S(r, {
                            select: !0
                        })) : i === t && e.preventDefault()
                    }
                }, [n, r, v.paused]);
                return (0, o.createElement)(g.WV.div, (0, i.Z)({
                    tabIndex: -1
                }, l, {
                    ref: m,
                    onKeyDown: E
                }))
            });
        function P(e) {
            let t = [],
                n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                    acceptNode: e => {
                        let t = "INPUT" === e.tagName && "hidden" === e.type;
                        return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                    }
                });
            for (; n.nextNode();)
                t.push(n.currentNode);
            return t
        }
        function C(e, t) {
            for (let n of e)
                if (!function(e, {upTo: t}) {
                    if ("hidden" === getComputedStyle(e).visibility)
                        return !0;
                    for (; e && (void 0 === t || e !== t);) {
                        if ("none" === getComputedStyle(e).display)
                            return !0;
                        e = e.parentElement
                    }
                    return !1
                }(n, {
                    upTo: t
                }))
                    return n
        }
        function S(e, {select: t=!1}={}) {
            if (e && e.focus) {
                var n;
                let r = document.activeElement;
                e.focus({
                    preventScroll: !0
                }),
                e !== r && (n = e) instanceof HTMLInputElement && "select" in n && t && e.select()
            }
        }
        let R = (r = [], {
            add(e) {
                let t = r[0];
                e !== t && (null == t || t.pause()),
                (r = T(r, e)).unshift(e)
            },
            remove(e) {
                var t;
                null === (t = (r = T(r, e))[0]) || void 0 === t || t.resume()
            }
        });
        function T(e, t) {
            let n = [...e],
                r = n.indexOf(t);
            return -1 !== r && n.splice(r, 1), n
        }
        var M = n(90671);
        let A = a["useId".toString()] || (() => void 0),
            k = 0;
        function D(e) {
            let [t, n] = o.useState(A());
            return (0, M.b)(() => {
                e || n(e => null != e ? e : String(k++))
            }, [e]), e || (t ? `radix-${t}` : "")
        }
        var L = n(84256),
            O = n(88905);
        let F = e => {
            let {element: t, padding: n} = e;
            return {
                name: "arrow",
                options: e,
                fn(e) {
                    if (t && ({}).hasOwnProperty.call(t, "current")) {
                        if (null != t.current)
                            return (0, L.x7)({
                                element: t.current,
                                padding: n
                            }).fn(e)
                    } else if (t)
                        return (0, L.x7)({
                            element: t,
                            padding: n
                        }).fn(e);
                    return {}
                }
            }
        };
        var I = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;
        function V(e, t) {
            let n,
                r,
                i;
            if (e === t)
                return !0;
            if (typeof e != typeof t)
                return !1;
            if ("function" == typeof e && e.toString() === t.toString())
                return !0;
            if (e && t && "object" == typeof e) {
                if (Array.isArray(e)) {
                    if ((n = e.length) != t.length)
                        return !1;
                    for (r = n; 0 != r--;)
                        if (!V(e[r], t[r]))
                            return !1;
                    return !0
                }
                if ((n = (i = Object.keys(e)).length) !== Object.keys(t).length)
                    return !1;
                for (r = n; 0 != r--;)
                    if (!({}).hasOwnProperty.call(t, i[r]))
                        return !1;
                for (r = n; 0 != r--;) {
                    let n = i[r];
                    if (("_owner" !== n || !e.$$typeof) && !V(e[n], t[n]))
                        return !1
                }
                return !0
            }
            return e != e && t != t
        }
        function _(e) {
            if ("undefined" == typeof window)
                return 1;
            let t = e.ownerDocument.defaultView || window;
            return t.devicePixelRatio || 1
        }
        function j(e, t) {
            let n = _(e);
            return Math.round(t * n) / n
        }
        function N(e) {
            let t = o.useRef(e);
            return I(() => {
                t.current = e
            }), t
        }
        let B = (0, o.forwardRef)((e, t) => {
                let {children: n, width: r=10, height: a=5, ...s} = e;
                return (0, o.createElement)(g.WV.svg, (0, i.Z)({}, s, {
                    ref: t,
                    width: r,
                    height: a,
                    viewBox: "0 0 30 10",
                    preserveAspectRatio: "none"
                }), e.asChild ? n : (0, o.createElement)("polygon", {
                    points: "0,0 30,0 15,10"
                }))
            }),
            W = "Popper",
            [$, z] = (0, f.b)(W),
            [H, U] = $(W),
            Z = e => {
                let {__scopePopper: t, children: n} = e,
                    [r, i] = (0, o.useState)(null);
                return (0, o.createElement)(H, {
                    scope: t,
                    anchor: r,
                    onAnchorChange: i
                }, n)
            },
            Y = (0, o.forwardRef)((e, t) => {
                let {__scopePopper: n, virtualRef: r, ...a} = e,
                    s = U("PopperAnchor", n),
                    l = (0, o.useRef)(null),
                    u = (0, d.e)(t, l);
                return (0, o.useEffect)(() => {
                    s.onAnchorChange((null == r ? void 0 : r.current) || l.current)
                }), r ? null : (0, o.createElement)(g.WV.div, (0, i.Z)({}, a, {
                    ref: u
                }))
            }),
            G = "PopperContent",
            [K, q] = $(G),
            X = (0, o.forwardRef)((e, t) => {
                var n,
                    r,
                    a,
                    l,
                    u,
                    c,
                    f,
                    h;
                let {__scopePopper: p, side: m="bottom", sideOffset: v=0, align: b="center", alignOffset: w=0, arrowPadding: x=0, collisionBoundary: E=[], collisionPadding: P=0, sticky: C="partial", hideWhenDetached: S=!1, avoidCollisions: R=!0, onPlaced: T, ...A} = e,
                    k = U(G, p),
                    [D, B] = (0, o.useState)(null),
                    W = (0, d.e)(t, e => B(e)),
                    [$, z] = (0, o.useState)(null),
                    H = function(e) {
                        let [t, n] = (0, o.useState)(void 0);
                        return (0, M.b)(() => {
                            if (e) {
                                n({
                                    width: e.offsetWidth,
                                    height: e.offsetHeight
                                });
                                let t = new ResizeObserver(t => {
                                    let r,
                                        i;
                                    if (!Array.isArray(t) || !t.length)
                                        return;
                                    let o = t[0];
                                    if ("borderBoxSize" in o) {
                                        let e = o.borderBoxSize,
                                            t = Array.isArray(e) ? e[0] : e;
                                        r = t.inlineSize,
                                        i = t.blockSize
                                    } else
                                        r = e.offsetWidth,
                                        i = e.offsetHeight;
                                    n({
                                        width: r,
                                        height: i
                                    })
                                });
                                return t.observe(e, {
                                    box: "border-box"
                                }), () => t.unobserve(e)
                            }
                            n(void 0)
                        }, [e]), t
                    }($),
                    Z = null !== (n = null == H ? void 0 : H.width) && void 0 !== n ? n : 0,
                    Y = null !== (r = null == H ? void 0 : H.height) && void 0 !== r ? r : 0,
                    q = "number" == typeof P ? P : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...P
                    },
                    X = Array.isArray(E) ? E : [E],
                    J = X.length > 0,
                    en = {
                        padding: q,
                        boundary: X.filter(Q),
                        altBoundary: J
                    },
                    {refs: er, floatingStyles: ei, placement: eo, isPositioned: ea, middlewareData: es} = function(e) {
                        void 0 === e && (e = {});
                        let {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: i, elements: {reference: a, floating: l}={}, transform: u=!0, whileElementsMounted: c, open: d} = e,
                            [f, h] = o.useState({
                                x: 0,
                                y: 0,
                                strategy: n,
                                placement: t,
                                middlewareData: {},
                                isPositioned: !1
                            }),
                            [p, m] = o.useState(r);
                        V(p, r) || m(r);
                        let [v, g] = o.useState(null),
                            [y, b] = o.useState(null),
                            w = o.useCallback(e => {
                                e != C.current && (C.current = e, g(e))
                            }, [g]),
                            x = o.useCallback(e => {
                                e !== S.current && (S.current = e, b(e))
                            }, [b]),
                            E = a || v,
                            P = l || y,
                            C = o.useRef(null),
                            S = o.useRef(null),
                            R = o.useRef(f),
                            T = N(c),
                            M = N(i),
                            A = o.useCallback(() => {
                                if (!C.current || !S.current)
                                    return;
                                let e = {
                                    placement: t,
                                    strategy: n,
                                    middleware: p
                                };
                                M.current && (e.platform = M.current),
                                (0, O.oo)(C.current, S.current, e).then(e => {
                                    let t = {
                                        ...e,
                                        isPositioned: !0
                                    };
                                    k.current && !V(R.current, t) && (R.current = t, s.flushSync(() => {
                                        h(t)
                                    }))
                                })
                            }, [p, t, n, M]);
                        I(() => {
                            !1 === d && R.current.isPositioned && (R.current.isPositioned = !1, h(e => ({
                                ...e,
                                isPositioned: !1
                            })))
                        }, [d]);
                        let k = o.useRef(!1);
                        I(() => (k.current = !0, () => {
                            k.current = !1
                        }), []),
                        I(() => {
                            if (E && (C.current = E), P && (S.current = P), E && P) {
                                if (T.current)
                                    return T.current(E, P, A);
                                A()
                            }
                        }, [E, P, A, T]);
                        let D = o.useMemo(() => ({
                                reference: C,
                                floating: S,
                                setReference: w,
                                setFloating: x
                            }), [w, x]),
                            L = o.useMemo(() => ({
                                reference: E,
                                floating: P
                            }), [E, P]),
                            F = o.useMemo(() => {
                                let e = {
                                    position: n,
                                    left: 0,
                                    top: 0
                                };
                                if (!L.floating)
                                    return e;
                                let t = j(L.floating, f.x),
                                    r = j(L.floating, f.y);
                                return u ? {
                                    ...e,
                                    transform: "translate(" + t + "px, " + r + "px)",
                                    ..._(L.floating) >= 1.5 && {
                                        willChange: "transform"
                                    }
                                } : {
                                    position: n,
                                    left: t,
                                    top: r
                                }
                            }, [n, u, L.floating, f.x, f.y]);
                        return o.useMemo(() => ({
                            ...f,
                            update: A,
                            refs: D,
                            elements: L,
                            floatingStyles: F
                        }), [f, A, D, L, F])
                    }({
                        strategy: "fixed",
                        placement: m + ("center" !== b ? "-" + b : ""),
                        whileElementsMounted: O.Me,
                        elements: {
                            reference: k.anchor
                        },
                        middleware: [(0, L.cv)({
                            mainAxis: v + Y,
                            alignmentAxis: w
                        }), R && (0, L.uY)({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === C ? (0, L.dr)() : void 0,
                            ...en
                        }), R && (0, L.RR)({
                            ...en
                        }), (0, L.dp)({
                            ...en,
                            apply: ({elements: e, rects: t, availableWidth: n, availableHeight: r}) => {
                                let {width: i, height: o} = t.reference,
                                    a = e.floating.style;
                                a.setProperty("--radix-popper-available-width", `${n}px`),
                                a.setProperty("--radix-popper-available-height", `${r}px`),
                                a.setProperty("--radix-popper-anchor-width", `${i}px`),
                                a.setProperty("--radix-popper-anchor-height", `${o}px`)
                            }
                        }), $ && F({
                            element: $,
                            padding: x
                        }), ee({
                            arrowWidth: Z,
                            arrowHeight: Y
                        }), S && (0, L.Cp)({
                            strategy: "referenceHidden"
                        })]
                    }),
                    [el, eu] = et(eo),
                    ec = (0, y.W)(T);
                (0, M.b)(() => {
                    ea && (null == ec || ec())
                }, [ea, ec]);
                let ed = null === (a = es.arrow) || void 0 === a ? void 0 : a.x,
                    ef = null === (l = es.arrow) || void 0 === l ? void 0 : l.y,
                    eh = (null === (u = es.arrow) || void 0 === u ? void 0 : u.centerOffset) !== 0,
                    [ep, em] = (0, o.useState)();
                return (0, M.b)(() => {
                    D && em(window.getComputedStyle(D).zIndex)
                }, [D]), (0, o.createElement)("div", {
                    ref: er.setFloating,
                    "data-radix-popper-content-wrapper": "",
                    style: {
                        ...ei,
                        transform: ea ? ei.transform : "translate(0, -200%)",
                        minWidth: "max-content",
                        zIndex: ep,
                        "--radix-popper-transform-origin": [null === (c = es.transformOrigin) || void 0 === c ? void 0 : c.x, null === (f = es.transformOrigin) || void 0 === f ? void 0 : f.y].join(" ")
                    },
                    dir: e.dir
                }, (0, o.createElement)(K, {
                    scope: p,
                    placedSide: el,
                    onArrowChange: z,
                    arrowX: ed,
                    arrowY: ef,
                    shouldHideArrow: eh
                }, (0, o.createElement)(g.WV.div, (0, i.Z)({
                    "data-side": el,
                    "data-align": eu
                }, A, {
                    ref: W,
                    style: {
                        ...A.style,
                        animation: ea ? void 0 : "none",
                        opacity: null !== (h = es.hide) && void 0 !== h && h.referenceHidden ? 0 : void 0
                    }
                }))))
            }),
            J = {
                top: "bottom",
                right: "left",
                bottom: "top",
                left: "right"
            };
        function Q(e) {
            return null !== e
        }
        let ee = e => ({
            name: "transformOrigin",
            options: e,
            fn(t) {
                var n,
                    r,
                    i,
                    o,
                    a;
                let {placement: s, rects: l, middlewareData: u} = t,
                    c = (null === (n = u.arrow) || void 0 === n ? void 0 : n.centerOffset) !== 0,
                    d = c ? 0 : e.arrowWidth,
                    f = c ? 0 : e.arrowHeight,
                    [h, p] = et(s),
                    m = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    }[p],
                    v = (null !== (r = null === (i = u.arrow) || void 0 === i ? void 0 : i.x) && void 0 !== r ? r : 0) + d / 2,
                    g = (null !== (o = null === (a = u.arrow) || void 0 === a ? void 0 : a.y) && void 0 !== o ? o : 0) + f / 2,
                    y = "",
                    b = "";
                return "bottom" === h ? (y = c ? m : `${v}px`, b = `${-f}px`) : "top" === h ? (y = c ? m : `${v}px`, b = `${l.floating.height + f}px`) : "right" === h ? (y = `${-f}px`, b = c ? m : `${g}px`) : "left" === h && (y = `${l.floating.width + f}px`, b = c ? m : `${g}px`), {
                    data: {
                        x: y,
                        y: b
                    }
                }
            }
        });
        function et(e) {
            let [t, n="center"] = e.split("-");
            return [t, n]
        }
        var en = n(32768),
            er = n(26739),
            ei = n(21381),
            eo = n(32148),
            ea = n(66546),
            es = n(54239);
        let el = [" ", "Enter", "ArrowUp", "ArrowDown"],
            eu = [" ", "Enter"],
            ec = "Select",
            [ed, ef, eh] = (0, c.B)(ec),
            [ep, em] = (0, f.b)(ec, [eh, z]),
            ev = z(),
            [eg, ey] = ep(ec),
            [eb, ew] = ep(ec),
            ex = e => {
                let {__scopeSelect: t, children: n, open: r, defaultOpen: i, onOpenChange: a, value: s, defaultValue: l, onValueChange: u, dir: c, name: d, autoComplete: f, disabled: p, required: m} = e,
                    v = ev(t),
                    [g, y] = (0, o.useState)(null),
                    [b, w] = (0, o.useState)(null),
                    [x, E] = (0, o.useState)(!1),
                    P = function(e) {
                        let t = (0, o.useContext)(h);
                        return e || t || "ltr"
                    }(c),
                    [C=!1, S] = (0, ei.T)({
                        prop: r,
                        defaultProp: i,
                        onChange: a
                    }),
                    [R, T] = (0, ei.T)({
                        prop: s,
                        defaultProp: l,
                        onChange: u
                    }),
                    M = (0, o.useRef)(null),
                    A = !g || !!g.closest("form"),
                    [k, L] = (0, o.useState)(new Set),
                    O = Array.from(k).map(e => e.props.value).join(";");
                return (0, o.createElement)(Z, v, (0, o.createElement)(eg, {
                    required: m,
                    scope: t,
                    trigger: g,
                    onTriggerChange: y,
                    valueNode: b,
                    onValueNodeChange: w,
                    valueNodeHasChildren: x,
                    onValueNodeHasChildrenChange: E,
                    contentId: D(),
                    value: R,
                    onValueChange: T,
                    open: C,
                    onOpenChange: S,
                    dir: P,
                    triggerPointerDownPosRef: M,
                    disabled: p
                }, (0, o.createElement)(ed.Provider, {
                    scope: t
                }, (0, o.createElement)(eb, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: (0, o.useCallback)(e => {
                        L(t => new Set(t).add(e))
                    }, []),
                    onNativeOptionRemove: (0, o.useCallback)(e => {
                        L(t => {
                            let n = new Set(t);
                            return n.delete(e), n
                        })
                    }, [])
                }, n)), A ? (0, o.createElement)(eq, {
                    key: O,
                    "aria-hidden": !0,
                    required: m,
                    tabIndex: -1,
                    name: d,
                    autoComplete: f,
                    value: R,
                    onChange: e => T(e.target.value),
                    disabled: p
                }, void 0 === R ? (0, o.createElement)("option", {
                    value: ""
                }) : null, Array.from(k)) : null))
            },
            eE = (0, o.forwardRef)((e, t) => {
                let {__scopeSelect: n, disabled: r=!1, ...a} = e,
                    s = ev(n),
                    l = ey("SelectTrigger", n),
                    c = l.disabled || r,
                    f = (0, d.e)(t, l.onTriggerChange),
                    h = ef(n),
                    [p, m, v] = eX(e => {
                        let t = h().filter(e => !e.disabled),
                            n = t.find(e => e.value === l.value),
                            r = eJ(t, e, n);
                        void 0 !== r && l.onValueChange(r.value)
                    }),
                    y = () => {
                        c || (l.onOpenChange(!0), v())
                    };
                return (0, o.createElement)(Y, (0, i.Z)({
                    asChild: !0
                }, s), (0, o.createElement)(g.WV.button, (0, i.Z)({
                    type: "button",
                    role: "combobox",
                    "aria-controls": l.contentId,
                    "aria-expanded": l.open,
                    "aria-required": l.required,
                    "aria-autocomplete": "none",
                    dir: l.dir,
                    "data-state": l.open ? "open" : "closed",
                    disabled: c,
                    "data-disabled": c ? "" : void 0,
                    "data-placeholder": void 0 === l.value ? "" : void 0
                }, a, {
                    ref: f,
                    onClick: (0, u.M)(a.onClick, e => {
                        e.currentTarget.focus()
                    }),
                    onPointerDown: (0, u.M)(a.onPointerDown, e => {
                        let t = e.target;
                        t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId),
                        0 === e.button && !1 === e.ctrlKey && (y(), l.triggerPointerDownPosRef.current = {
                            x: Math.round(e.pageX),
                            y: Math.round(e.pageY)
                        }, e.preventDefault())
                    }),
                    onKeyDown: (0, u.M)(a.onKeyDown, e => {
                        let t = "" !== p.current,
                            n = e.ctrlKey || e.altKey || e.metaKey;
                        n || 1 !== e.key.length || m(e.key),
                        (!t || " " !== e.key) && el.includes(e.key) && (y(), e.preventDefault())
                    })
                })))
            }),
            eP = (0, o.forwardRef)((e, t) => {
                let {__scopeSelect: n, className: r, style: a, children: s, placeholder: l, ...u} = e,
                    c = ey("SelectValue", n),
                    {onValueNodeHasChildrenChange: f} = c,
                    h = void 0 !== s,
                    p = (0, d.e)(t, c.onValueNodeChange);
                return (0, M.b)(() => {
                    f(h)
                }, [f, h]), (0, o.createElement)(g.WV.span, (0, i.Z)({}, u, {
                    ref: p,
                    style: {
                        pointerEvents: "none"
                    }
                }), void 0 === c.value && void 0 !== l ? l : s)
            }),
            eC = (0, o.forwardRef)((e, t) => {
                let {__scopeSelect: n, children: r, ...a} = e;
                return (0, o.createElement)(g.WV.span, (0, i.Z)({
                    "aria-hidden": !0
                }, a, {
                    ref: t
                }), r || "▼")
            }),
            eS = e => (0, o.createElement)(en.h, (0, i.Z)({
                asChild: !0
            }, e)),
            eR = "SelectContent",
            eT = (0, o.forwardRef)((e, t) => {
                let n = ey(eR, e.__scopeSelect),
                    [r, a] = (0, o.useState)();
                return ((0, M.b)(() => {
                    a(new DocumentFragment)
                }, []), n.open) ? (0, o.createElement)(ek, (0, i.Z)({}, e, {
                    ref: t
                })) : r ? (0, s.createPortal)((0, o.createElement)(eM, {
                    scope: e.__scopeSelect
                }, (0, o.createElement)(ed.Slot, {
                    scope: e.__scopeSelect
                }, (0, o.createElement)("div", null, e.children))), r) : null
            }),
            [eM, eA] = ep(eR),
            ek = (0, o.forwardRef)((e, t) => {
                let {__scopeSelect: n, position: r="item-aligned", onCloseAutoFocus: a, onEscapeKeyDown: s, onPointerDownOutside: l, side: c, sideOffset: f, align: h, alignOffset: g, arrowPadding: y, collisionBoundary: b, collisionPadding: w, sticky: x, hideWhenDetached: P, avoidCollisions: C, ...S} = e,
                    R = ey(eR, n),
                    [T, M] = (0, o.useState)(null),
                    [A, k] = (0, o.useState)(null),
                    D = (0, d.e)(t, e => M(e)),
                    [L, O] = (0, o.useState)(null),
                    [F, I] = (0, o.useState)(null),
                    V = ef(n),
                    [_, j] = (0, o.useState)(!1),
                    N = (0, o.useRef)(!1);
                (0, o.useEffect)(() => {
                    if (T)
                        return (0, ea.Ry)(T)
                }, [T]),
                (0, o.useEffect)(() => {
                    var e,
                        t;
                    let n = document.querySelectorAll("[data-radix-focus-guard]");
                    return document.body.insertAdjacentElement("afterbegin", null !== (e = n[0]) && void 0 !== e ? e : v()), document.body.insertAdjacentElement("beforeend", null !== (t = n[1]) && void 0 !== t ? t : v()), m++, () => {
                        1 === m && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()),
                        m--
                    }
                }, []);
                let B = (0, o.useCallback)(e => {
                        let [t, ...n] = V().map(e => e.ref.current),
                            [r] = n.slice(-1),
                            i = document.activeElement;
                        for (let n of e)
                            if (n === i || (null == n || n.scrollIntoView({
                                block: "nearest"
                            }), n === t && A && (A.scrollTop = 0), n === r && A && (A.scrollTop = A.scrollHeight), null == n || n.focus(), document.activeElement !== i))
                                return
                    }, [V, A]),
                    W = (0, o.useCallback)(() => B([L, T]), [B, L, T]);
                (0, o.useEffect)(() => {
                    _ && W()
                }, [_, W]);
                let {onOpenChange: $, triggerPointerDownPosRef: z} = R;
                (0, o.useEffect)(() => {
                    if (T) {
                        let e = {
                                x: 0,
                                y: 0
                            },
                            t = t => {
                                var n,
                                    r,
                                    i,
                                    o;
                                e = {
                                    x: Math.abs(Math.round(t.pageX) - (null !== (n = null === (r = z.current) || void 0 === r ? void 0 : r.x) && void 0 !== n ? n : 0)),
                                    y: Math.abs(Math.round(t.pageY) - (null !== (i = null === (o = z.current) || void 0 === o ? void 0 : o.y) && void 0 !== i ? i : 0))
                                }
                            },
                            n = n => {
                                e.x <= 10 && e.y <= 10 ? n.preventDefault() : T.contains(n.target) || $(!1),
                                document.removeEventListener("pointermove", t),
                                z.current = null
                            };
                        return null !== z.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
                            capture: !0,
                            once: !0
                        })), () => {
                            document.removeEventListener("pointermove", t),
                            document.removeEventListener("pointerup", n, {
                                capture: !0
                            })
                        }
                    }
                }, [T, $, z]),
                (0, o.useEffect)(() => {
                    let e = () => $(!1);
                    return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
                        window.removeEventListener("blur", e),
                        window.removeEventListener("resize", e)
                    }
                }, [$]);
                let [H, U] = eX(e => {
                        let t = V().filter(e => !e.disabled),
                            n = t.find(e => e.ref.current === document.activeElement),
                            r = eJ(t, e, n);
                        r && setTimeout(() => r.ref.current.focus())
                    }),
                    Z = (0, o.useCallback)((e, t, n) => {
                        let r = !N.current && !n,
                            i = void 0 !== R.value && R.value === t;
                        (i || r) && (O(e), r && (N.current = !0))
                    }, [R.value]),
                    Y = (0, o.useCallback)(() => null == T ? void 0 : T.focus(), [T]),
                    G = (0, o.useCallback)((e, t, n) => {
                        let r = !N.current && !n,
                            i = void 0 !== R.value && R.value === t;
                        (i || r) && I(e)
                    }, [R.value]),
                    K = "popper" === r ? eL : eD;
                return (0, o.createElement)(eM, {
                    scope: n,
                    content: T,
                    viewport: A,
                    onViewportChange: k,
                    itemRefCallback: Z,
                    selectedItem: L,
                    onItemLeave: Y,
                    itemTextRefCallback: G,
                    focusSelectedItem: W,
                    selectedItemText: F,
                    position: r,
                    isPositioned: _,
                    searchRef: H
                }, (0, o.createElement)(es.Z, {
                    as: er.g7,
                    allowPinchZoom: !0
                }, (0, o.createElement)(E, {
                    asChild: !0,
                    trapped: R.open,
                    onMountAutoFocus: e => {
                        e.preventDefault()
                    },
                    onUnmountAutoFocus: (0, u.M)(a, e => {
                        var t;
                        null === (t = R.trigger) || void 0 === t || t.focus({
                            preventScroll: !0
                        }),
                        e.preventDefault()
                    })
                }, (0, o.createElement)(p.XB, {
                    asChild: !0,
                    disableOutsidePointerEvents: !0,
                    onEscapeKeyDown: s,
                    onPointerDownOutside: l,
                    onFocusOutside: e => e.preventDefault(),
                    onDismiss: () => R.onOpenChange(!1)
                }, (0, o.createElement)(K, (0, i.Z)({
                    role: "listbox",
                    id: R.contentId,
                    "data-state": R.open ? "open" : "closed",
                    dir: R.dir,
                    onContextMenu: e => e.preventDefault()
                }, S, K === eL ? {
                    side: c,
                    sideOffset: f,
                    align: h,
                    alignOffset: g,
                    arrowPadding: y,
                    collisionBoundary: b,
                    collisionPadding: w,
                    sticky: x,
                    hideWhenDetached: P,
                    avoidCollisions: C
                } : {}, {
                    onPlaced: () => j(!0),
                    ref: D,
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        outline: "none",
                        ...S.style
                    },
                    onKeyDown: (0, u.M)(S.onKeyDown, e => {
                        let t = e.ctrlKey || e.altKey || e.metaKey;
                        if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || U(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                            let t = V().filter(e => !e.disabled),
                                n = t.map(e => e.ref.current);
                            if (["ArrowUp", "End"].includes(e.key) && (n = n.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                                let t = e.target,
                                    r = n.indexOf(t);
                                n = n.slice(r + 1)
                            }
                            setTimeout(() => B(n)),
                            e.preventDefault()
                        }
                    })
                }))))))
            }),
            eD = (0, o.forwardRef)((e, t) => {
                let {__scopeSelect: n, onPlaced: r, ...a} = e,
                    s = ey(eR, n),
                    u = eA(eR, n),
                    [c, f] = (0, o.useState)(null),
                    [h, p] = (0, o.useState)(null),
                    m = (0, d.e)(t, e => p(e)),
                    v = ef(n),
                    y = (0, o.useRef)(!1),
                    b = (0, o.useRef)(!0),
                    {viewport: w, selectedItem: x, selectedItemText: E, focusSelectedItem: P} = u,
                    C = (0, o.useCallback)(() => {
                        if (s.trigger && s.valueNode && c && h && w && x && E) {
                            let e = s.trigger.getBoundingClientRect(),
                                t = h.getBoundingClientRect(),
                                n = s.valueNode.getBoundingClientRect(),
                                i = E.getBoundingClientRect();
                            if ("rtl" !== s.dir) {
                                let r = i.left - t.left,
                                    o = n.left - r,
                                    a = e.left - o,
                                    s = e.width + a,
                                    u = Math.max(s, t.width),
                                    d = window.innerWidth - 10,
                                    f = l(o, [10, d - u]);
                                c.style.minWidth = s + "px",
                                c.style.left = f + "px"
                            } else {
                                let r = t.right - i.right,
                                    o = window.innerWidth - n.right - r,
                                    a = window.innerWidth - e.right - o,
                                    s = e.width + a,
                                    u = Math.max(s, t.width),
                                    d = window.innerWidth - 10,
                                    f = l(o, [10, d - u]);
                                c.style.minWidth = s + "px",
                                c.style.right = f + "px"
                            }
                            let o = v(),
                                a = window.innerHeight - 20,
                                u = w.scrollHeight,
                                d = window.getComputedStyle(h),
                                f = parseInt(d.borderTopWidth, 10),
                                p = parseInt(d.paddingTop, 10),
                                m = parseInt(d.borderBottomWidth, 10),
                                g = parseInt(d.paddingBottom, 10),
                                b = f + p + u + g + m,
                                P = Math.min(5 * x.offsetHeight, b),
                                C = window.getComputedStyle(w),
                                S = parseInt(C.paddingTop, 10),
                                R = parseInt(C.paddingBottom, 10),
                                T = e.top + e.height / 2 - 10,
                                M = x.offsetHeight / 2,
                                A = x.offsetTop + M,
                                k = f + p + A;
                            if (k <= T) {
                                let e = x === o[o.length - 1].ref.current;
                                c.style.bottom = "0px";
                                let t = h.clientHeight - w.offsetTop - w.offsetHeight;
                                c.style.height = k + Math.max(a - T, M + (e ? R : 0) + t + m) + "px"
                            } else {
                                let e = x === o[0].ref.current;
                                c.style.top = "0px";
                                let t = Math.max(T, f + w.offsetTop + (e ? S : 0) + M);
                                c.style.height = t + (b - k) + "px",
                                w.scrollTop = k - T + w.offsetTop
                            }
                            c.style.margin = "10px 0",
                            c.style.minHeight = P + "px",
                            c.style.maxHeight = a + "px",
                            null == r || r(),
                            requestAnimationFrame(() => y.current = !0)
                        }
                    }, [v, s.trigger, s.valueNode, c, h, w, x, E, s.dir, r]);
                (0, M.b)(() => C(), [C]);
                let [S, R] = (0, o.useState)();
                (0, M.b)(() => {
                    h && R(window.getComputedStyle(h).zIndex)
                }, [h]);
                let T = (0, o.useCallback)(e => {
                    e && !0 === b.current && (C(), null == P || P(), b.current = !1)
                }, [C, P]);
                return (0, o.createElement)(eO, {
                    scope: n,
                    contentWrapper: c,
                    shouldExpandOnScrollRef: y,
                    onScrollButtonChange: T
                }, (0, o.createElement)("div", {
                    ref: f,
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        position: "fixed",
                        zIndex: S
                    }
                }, (0, o.createElement)(g.WV.div, (0, i.Z)({}, a, {
                    ref: m,
                    style: {
                        boxSizing: "border-box",
                        maxHeight: "100%",
                        ...a.style
                    }
                }))))
            }),
            eL = (0, o.forwardRef)((e, t) => {
                let {__scopeSelect: n, align: r="start", collisionPadding: a=10, ...s} = e,
                    l = ev(n);
                return (0, o.createElement)(X, (0, i.Z)({}, l, s, {
                    ref: t,
                    align: r,
                    collisionPadding: a,
                    style: {
                        boxSizing: "border-box",
                        ...s.style,
                        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
                    }
                }))
            }),
            [eO, eF] = ep(eR, {}),
            eI = "SelectViewport",
            eV = (0, o.forwardRef)((e, t) => {
                let {__scopeSelect: n, ...r} = e,
                    a = eA(eI, n),
                    s = eF(eI, n),
                    l = (0, d.e)(t, a.onViewportChange),
                    c = (0, o.useRef)(0);
                return (0, o.createElement)(o.Fragment, null, (0, o.createElement)("style", {
                    dangerouslySetInnerHTML: {
                        __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
                    }
                }), (0, o.createElement)(ed.Slot, {
                    scope: n
                }, (0, o.createElement)(g.WV.div, (0, i.Z)({
                    "data-radix-select-viewport": "",
                    role: "presentation"
                }, r, {
                    ref: l,
                    style: {
                        position: "relative",
                        flex: 1,
                        overflow: "auto",
                        ...r.style
                    },
                    onScroll: (0, u.M)(r.onScroll, e => {
                        let t = e.currentTarget,
                            {contentWrapper: n, shouldExpandOnScrollRef: r} = s;
                        if (null != r && r.current && n) {
                            let e = Math.abs(c.current - t.scrollTop);
                            if (e > 0) {
                                let r = window.innerHeight - 20,
                                    i = parseFloat(n.style.minHeight),
                                    o = parseFloat(n.style.height),
                                    a = Math.max(i, o);
                                if (a < r) {
                                    let i = a + e,
                                        o = Math.min(r, i),
                                        s = i - o;
                                    n.style.height = o + "px",
                                    "0px" === n.style.bottom && (t.scrollTop = s > 0 ? s : 0, n.style.justifyContent = "flex-end")
                                }
                            }
                        }
                        c.current = t.scrollTop
                    })
                }))))
            }),
            [e_, ej] = ep("SelectGroup"),
            eN = "SelectItem",
            [eB, eW] = ep(eN),
            e$ = (0, o.forwardRef)((e, t) => {
                let {__scopeSelect: n, value: r, disabled: a=!1, textValue: s, ...l} = e,
                    c = ey(eN, n),
                    f = eA(eN, n),
                    h = c.value === r,
                    [p, m] = (0, o.useState)(null != s ? s : ""),
                    [v, y] = (0, o.useState)(!1),
                    b = (0, d.e)(t, e => {
                        var t;
                        return null === (t = f.itemRefCallback) || void 0 === t ? void 0 : t.call(f, e, r, a)
                    }),
                    w = D(),
                    x = () => {
                        a || (c.onValueChange(r), c.onOpenChange(!1))
                    };
                return (0, o.createElement)(eB, {
                    scope: n,
                    value: r,
                    disabled: a,
                    textId: w,
                    isSelected: h,
                    onItemTextChange: (0, o.useCallback)(e => {
                        m(t => {
                            var n;
                            return t || (null !== (n = null == e ? void 0 : e.textContent) && void 0 !== n ? n : "").trim()
                        })
                    }, [])
                }, (0, o.createElement)(ed.ItemSlot, {
                    scope: n,
                    value: r,
                    disabled: a,
                    textValue: p
                }, (0, o.createElement)(g.WV.div, (0, i.Z)({
                    role: "option",
                    "aria-labelledby": w,
                    "data-highlighted": v ? "" : void 0,
                    "aria-selected": h && v,
                    "data-state": h ? "checked" : "unchecked",
                    "aria-disabled": a || void 0,
                    "data-disabled": a ? "" : void 0,
                    tabIndex: a ? void 0 : -1
                }, l, {
                    ref: b,
                    onFocus: (0, u.M)(l.onFocus, () => y(!0)),
                    onBlur: (0, u.M)(l.onBlur, () => y(!1)),
                    onPointerUp: (0, u.M)(l.onPointerUp, x),
                    onPointerMove: (0, u.M)(l.onPointerMove, e => {
                        if (a) {
                            var t;
                            null === (t = f.onItemLeave) || void 0 === t || t.call(f)
                        } else
                            e.currentTarget.focus({
                                preventScroll: !0
                            })
                    }),
                    onPointerLeave: (0, u.M)(l.onPointerLeave, e => {
                        if (e.currentTarget === document.activeElement) {
                            var t;
                            null === (t = f.onItemLeave) || void 0 === t || t.call(f)
                        }
                    }),
                    onKeyDown: (0, u.M)(l.onKeyDown, e => {
                        var t;
                        let n = (null === (t = f.searchRef) || void 0 === t ? void 0 : t.current) !== "";
                        n && " " === e.key || (eu.includes(e.key) && x(), " " === e.key && e.preventDefault())
                    })
                }))))
            }),
            ez = "SelectItemText",
            eH = (0, o.forwardRef)((e, t) => {
                let {__scopeSelect: n, className: r, style: a, ...l} = e,
                    u = ey(ez, n),
                    c = eA(ez, n),
                    f = eW(ez, n),
                    h = ew(ez, n),
                    [p, m] = (0, o.useState)(null),
                    v = (0, d.e)(t, e => m(e), f.onItemTextChange, e => {
                        var t;
                        return null === (t = c.itemTextRefCallback) || void 0 === t ? void 0 : t.call(c, e, f.value, f.disabled)
                    }),
                    y = null == p ? void 0 : p.textContent,
                    b = (0, o.useMemo)(() => (0, o.createElement)("option", {
                        key: f.value,
                        value: f.value,
                        disabled: f.disabled
                    }, y), [f.disabled, f.value, y]),
                    {onNativeOptionAdd: w, onNativeOptionRemove: x} = h;
                return (0, M.b)(() => (w(b), () => x(b)), [w, x, b]), (0, o.createElement)(o.Fragment, null, (0, o.createElement)(g.WV.span, (0, i.Z)({
                    id: f.textId
                }, l, {
                    ref: v
                })), f.isSelected && u.valueNode && !u.valueNodeHasChildren ? (0, s.createPortal)(l.children, u.valueNode) : null)
            }),
            eU = "SelectScrollUpButton",
            eZ = (0, o.forwardRef)((e, t) => {
                let n = eA(eU, e.__scopeSelect),
                    r = eF(eU, e.__scopeSelect),
                    [a, s] = (0, o.useState)(!1),
                    l = (0, d.e)(t, r.onScrollButtonChange);
                return (0, M.b)(() => {
                    if (n.viewport && n.isPositioned) {
                        let t = n.viewport;
                        function e() {
                            let e = t.scrollTop > 0;
                            s(e)
                        }
                        return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                    }
                }, [n.viewport, n.isPositioned]), a ? (0, o.createElement)(eK, (0, i.Z)({}, e, {
                    ref: l,
                    onAutoScroll: () => {
                        let {viewport: e, selectedItem: t} = n;
                        e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
                    }
                })) : null
            }),
            eY = "SelectScrollDownButton",
            eG = (0, o.forwardRef)((e, t) => {
                let n = eA(eY, e.__scopeSelect),
                    r = eF(eY, e.__scopeSelect),
                    [a, s] = (0, o.useState)(!1),
                    l = (0, d.e)(t, r.onScrollButtonChange);
                return (0, M.b)(() => {
                    if (n.viewport && n.isPositioned) {
                        let t = n.viewport;
                        function e() {
                            let e = t.scrollHeight - t.clientHeight,
                                n = Math.ceil(t.scrollTop) < e;
                            s(n)
                        }
                        return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                    }
                }, [n.viewport, n.isPositioned]), a ? (0, o.createElement)(eK, (0, i.Z)({}, e, {
                    ref: l,
                    onAutoScroll: () => {
                        let {viewport: e, selectedItem: t} = n;
                        e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
                    }
                })) : null
            }),
            eK = (0, o.forwardRef)((e, t) => {
                let {__scopeSelect: n, onAutoScroll: r, ...a} = e,
                    s = eA("SelectScrollButton", n),
                    l = (0, o.useRef)(null),
                    c = ef(n),
                    d = (0, o.useCallback)(() => {
                        null !== l.current && (window.clearInterval(l.current), l.current = null)
                    }, []);
                return (0, o.useEffect)(() => () => d(), [d]), (0, M.b)(() => {
                    var e;
                    let t = c().find(e => e.ref.current === document.activeElement);
                    null == t || null === (e = t.ref.current) || void 0 === e || e.scrollIntoView({
                        block: "nearest"
                    })
                }, [c]), (0, o.createElement)(g.WV.div, (0, i.Z)({
                    "aria-hidden": !0
                }, a, {
                    ref: t,
                    style: {
                        flexShrink: 0,
                        ...a.style
                    },
                    onPointerDown: (0, u.M)(a.onPointerDown, () => {
                        null === l.current && (l.current = window.setInterval(r, 50))
                    }),
                    onPointerMove: (0, u.M)(a.onPointerMove, () => {
                        var e;
                        null === (e = s.onItemLeave) || void 0 === e || e.call(s),
                        null === l.current && (l.current = window.setInterval(r, 50))
                    }),
                    onPointerLeave: (0, u.M)(a.onPointerLeave, () => {
                        d()
                    })
                }))
            }),
            eq = (0, o.forwardRef)((e, t) => {
                let {value: n, ...r} = e,
                    a = (0, o.useRef)(null),
                    s = (0, d.e)(t, a),
                    l = function(e) {
                        let t = (0, o.useRef)({
                            value: e,
                            previous: e
                        });
                        return (0, o.useMemo)(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
                    }(n);
                return (0, o.useEffect)(() => {
                    let e = a.current,
                        t = window.HTMLSelectElement.prototype,
                        r = Object.getOwnPropertyDescriptor(t, "value"),
                        i = r.set;
                    if (l !== n && i) {
                        let t = new Event("change", {
                            bubbles: !0
                        });
                        i.call(e, n),
                        e.dispatchEvent(t)
                    }
                }, [l, n]), (0, o.createElement)(eo.T, {
                    asChild: !0
                }, (0, o.createElement)("select", (0, i.Z)({}, r, {
                    ref: s,
                    defaultValue: n
                })))
            });
        function eX(e) {
            let t = (0, y.W)(e),
                n = (0, o.useRef)(""),
                r = (0, o.useRef)(0),
                i = (0, o.useCallback)(e => {
                    let i = n.current + e;
                    t(i),
                    function e(t) {
                        n.current = t,
                        window.clearTimeout(r.current),
                        "" !== t && (r.current = window.setTimeout(() => e(""), 1e3))
                    }(i)
                }, [t]),
                a = (0, o.useCallback)(() => {
                    n.current = "",
                    window.clearTimeout(r.current)
                }, []);
            return (0, o.useEffect)(() => () => window.clearTimeout(r.current), []), [n, i, a]
        }
        function eJ(e, t, n) {
            var r;
            let i = t.length > 1 && Array.from(t).every(e => e === t[0]),
                o = i ? t[0] : t,
                a = n ? e.indexOf(n) : -1,
                s = (r = Math.max(a, 0), e.map((t, n) => e[(r + n) % e.length])),
                l = 1 === o.length;
            l && (s = s.filter(e => e !== n));
            let u = s.find(e => e.textValue.toLowerCase().startsWith(o.toLowerCase()));
            return u !== n ? u : void 0
        }
        eq.displayName = "BubbleSelect";
        let eQ = ex,
            e0 = eE,
            e1 = eP,
            e5 = eC,
            e3 = eS,
            e2 = eT,
            e9 = eV,
            e7 = e$,
            e8 = eH,
            e4 = eZ,
            e6 = eG
    },
    26739: function(e, t, n) {
        "use strict";
        n.d(t, {
            g7: function() {
                return a
            }
        });
        var r = n(45675),
            i = n(70079),
            o = n(68469);
        let a = (0, i.forwardRef)((e, t) => {
            let {children: n, ...o} = e,
                a = i.Children.toArray(n),
                l = a.find(u);
            if (l) {
                let e = l.props.children,
                    n = a.map(t => t !== l ? t : i.Children.count(e) > 1 ? i.Children.only(null) : (0, i.isValidElement)(e) ? e.props.children : null);
                return (0, i.createElement)(s, (0, r.Z)({}, o, {
                    ref: t
                }), (0, i.isValidElement)(e) ? (0, i.cloneElement)(e, void 0, n) : null)
            }
            return (0, i.createElement)(s, (0, r.Z)({}, o, {
                ref: t
            }), n)
        });
        a.displayName = "Slot";
        let s = (0, i.forwardRef)((e, t) => {
            let {children: n, ...r} = e;
            return (0, i.isValidElement)(n) ? (0, i.cloneElement)(n, {
                ...function(e, t) {
                    let n = {
                        ...t
                    };
                    for (let r in t) {
                        let i = e[r],
                            o = t[r],
                            a = /^on[A-Z]/.test(r);
                        a ? i && o ? n[r] = (...e) => {
                            o(...e),
                            i(...e)
                        } : i && (n[r] = i) : "style" === r ? n[r] = {
                            ...i,
                            ...o
                        } : "className" === r && (n[r] = [i, o].filter(Boolean).join(" "))
                    }
                    return {
                        ...e,
                        ...n
                    }
                }(r, n.props),
                ref: t ? (0, o.F)(t, n.ref) : n.ref
            }) : i.Children.count(n) > 1 ? i.Children.only(null) : null
        });
        s.displayName = "SlotClone";
        let l = ({children: e}) => (0, i.createElement)(i.Fragment, null, e);
        function u(e) {
            return (0, i.isValidElement)(e) && e.type === l
        }
    },
    51629: function(e, t, n) {
        "use strict";
        n.d(t, {
            W: function() {
                return i
            }
        });
        var r = n(70079);
        function i(e) {
            let t = (0, r.useRef)(e);
            return (0, r.useEffect)(() => {
                t.current = e
            }), (0, r.useMemo)(() => (...e) => {
                var n;
                return null === (n = t.current) || void 0 === n ? void 0 : n.call(t, ...e)
            }, [])
        }
    },
    21381: function(e, t, n) {
        "use strict";
        n.d(t, {
            T: function() {
                return o
            }
        });
        var r = n(70079),
            i = n(51629);
        function o({prop: e, defaultProp: t, onChange: n=() => {}}) {
            let [o, a] = function({defaultProp: e, onChange: t}) {
                    let n = (0, r.useState)(e),
                        [o] = n,
                        a = (0, r.useRef)(o),
                        s = (0, i.W)(t);
                    return (0, r.useEffect)(() => {
                        a.current !== o && (s(o), a.current = o)
                    }, [o, a, s]), n
                }({
                    defaultProp: t,
                    onChange: n
                }),
                s = void 0 !== e,
                l = (0, i.W)(n),
                u = (0, r.useCallback)(t => {
                    if (s) {
                        let n = "function" == typeof t ? t(e) : t;
                        n !== e && l(n)
                    } else
                        a(t)
                }, [s, e, a, l]);
            return [s ? e : o, u]
        }
    },
    90671: function(e, t, n) {
        "use strict";
        n.d(t, {
            b: function() {
                return i
            }
        });
        var r = n(70079);
        let i = (null == globalThis ? void 0 : globalThis.document) ? r.useLayoutEffect : () => {}
    },
    32148: function(e, t, n) {
        "use strict";
        n.d(t, {
            T: function() {
                return a
            },
            f: function() {
                return s
            }
        });
        var r = n(45675),
            i = n(70079),
            o = n(8859);
        let a = (0, i.forwardRef)((e, t) => (0, i.createElement)(o.WV.span, (0, r.Z)({}, e, {
                ref: t,
                style: {
                    position: "absolute",
                    border: 0,
                    width: 1,
                    height: 1,
                    padding: 0,
                    margin: -1,
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    wordWrap: "normal",
                    ...e.style
                }
            }))),
            s = a
    },
    74686: function(e, t, n) {
        "use strict";
        n.d(t, {
            D: function() {
                return f
            }
        });
        var r = n(70079),
            i = n(71568),
            o = n(16456),
            a = n(57630),
            s = n(84427),
            l = n(28197);
        class u extends l.l {
            constructor(e, t)
            {
                super(),
                this.client = e,
                this.setOptions(t),
                this.bindMethods(),
                this.updateResult()
            }
            bindMethods()
            {
                this.mutate = this.mutate.bind(this),
                this.reset = this.reset.bind(this)
            }
            setOptions(e)
            {
                var t;
                let n = this.options;
                this.options = this.client.defaultMutationOptions(e),
                (0, o.VS)(n, this.options) || this.client.getMutationCache().notify({
                    type: "observerOptionsUpdated",
                    mutation: this.currentMutation,
                    observer: this
                }),
                null == (t = this.currentMutation) || t.setOptions(this.options)
            }
            onUnsubscribe()
            {
                if (!this.listeners.length) {
                    var e;
                    null == (e = this.currentMutation) || e.removeObserver(this)
                }
            }
            onMutationUpdate(e)
            {
                this.updateResult();
                let t = {
                    listeners: !0
                };
                "success" === e.type ? t.onSuccess = !0 : "error" === e.type && (t.onError = !0),
                this.notify(t)
            }
            getCurrentResult()
            {
                return this.currentResult
            }
            reset()
            {
                this.currentMutation = void 0,
                this.updateResult(),
                this.notify({
                    listeners: !0
                })
            }
            mutate(e, t)
            {
                return this.mutateOptions = t, this.currentMutation && this.currentMutation.removeObserver(this), this.currentMutation = this.client.getMutationCache().build(this.client, {
                    ...this.options,
                    variables: void 0 !== e ? e : this.options.variables
                }), this.currentMutation.addObserver(this), this.currentMutation.execute()
            }
            updateResult()
            {
                let e = this.currentMutation ? this.currentMutation.state : (0, a.R)(),
                    t = {
                        ...e,
                        isLoading: "loading" === e.status,
                        isSuccess: "success" === e.status,
                        isError: "error" === e.status,
                        isIdle: "idle" === e.status,
                        mutate: this.mutate,
                        reset: this.reset
                    };
                this.currentResult = t
            }
            notify(e)
            {
                s.V.batch(() => {
                    if (this.mutateOptions && this.hasListeners()) {
                        var t,
                            n,
                            r,
                            i,
                            o,
                            a,
                            s,
                            l;
                        e.onSuccess ? (null == (t = (n = this.mutateOptions).onSuccess) || t.call(n, this.currentResult.data, this.currentResult.variables, this.currentResult.context), null == (r = (i = this.mutateOptions).onSettled) || r.call(i, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context)) : e.onError && (null == (o = (a = this.mutateOptions).onError) || o.call(a, this.currentResult.error, this.currentResult.variables, this.currentResult.context), null == (s = (l = this.mutateOptions).onSettled) || s.call(l, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context))
                    }
                    e.listeners && this.listeners.forEach(e => {
                        e(this.currentResult)
                    })
                })
            }
        }
        var c = n(13995),
            d = n(18122);
        function f(e, t, n) {
            let a = (0, o.lV)(e, t, n),
                l = (0, c.NL)({
                    context: a.context
                }),
                [f] = r.useState(() => new u(l, a));
            r.useEffect(() => {
                f.setOptions(a)
            }, [f, a]);
            let p = (0, i.$)(r.useCallback(e => f.subscribe(s.V.batchCalls(e)), [f]), () => f.getCurrentResult(), () => f.getCurrentResult()),
                m = r.useCallback((e, t) => {
                    f.mutate(e, t).catch(h)
                }, [f]);
            if (p.error && (0, d.L)(f.options.useErrorBoundary, [p.error]))
                throw p.error;
            return {
                ...p,
                mutate: m,
                mutateAsync: p.mutate
            }
        }
        function h() {}
    },
    99419: function(e, t, n) {
        "use strict";
        n.d(t, {
            S: function() {
                return d
            }
        });
        var r = n(30309),
            i = n(43419),
            o = n(83813),
            a = n(32025);
        function s(e, t) {
            return e * Math.sqrt(1 - t * t)
        }
        let l = ["duration", "bounce"],
            u = ["stiffness", "damping", "mass"];
        function c(e, t) {
            return t.some(t => void 0 !== e[t])
        }
        function d({keyframes: e, restDelta: t, restSpeed: n, ...d}) {
            let f;
            let h = e[0],
                p = e[e.length - 1],
                m = {
                    done: !1,
                    value: h
                },
                {stiffness: v, damping: g, mass: y, velocity: b, duration: w, isResolvedFromDuration: x} = function(e) {
                    let t = {
                        velocity: 0,
                        stiffness: 100,
                        damping: 10,
                        mass: 1,
                        isResolvedFromDuration: !1,
                        ...e
                    };
                    if (!c(e, u) && c(e, l)) {
                        let n = function({duration: e=800, bounce: t=.25, velocity: n=0, mass: i=1}) {
                            let l,
                                u;
                            (0, o.K)(e <= (0, r.w)(10), "Spring duration must be 10 seconds or less");
                            let c = 1 - t;
                            c = (0, a.u)(.05, 1, c),
                            e = (0, a.u)(.01, 10, (0, r.X)(e)),
                            c < 1 ? (l = t => {
                                let r = t * c,
                                    i = r * e,
                                    o = s(t, c);
                                return .001 - (r - n) / o * Math.exp(-i)
                            }, u = t => {
                                let r = t * c,
                                    i = r * e,
                                    o = Math.pow(c, 2) * Math.pow(t, 2) * e,
                                    a = s(Math.pow(t, 2), c),
                                    u = -l(t) + .001 > 0 ? -1 : 1;
                                return u * ((i * n + n - o) * Math.exp(-i)) / a
                            }) : (l = t => {
                                let r = Math.exp(-t * e),
                                    i = (t - n) * e + 1;
                                return -.001 + r * i
                            }, u = t => {
                                let r = Math.exp(-t * e),
                                    i = (n - t) * (e * e);
                                return r * i
                            });
                            let d = 5 / e,
                                f = function(e, t, n) {
                                    let r = n;
                                    for (let n = 1; n < 12; n++)
                                        r -= e(r) / t(r);
                                    return r
                                }(l, u, d);
                            if (e = (0, r.w)(e), isNaN(f))
                                return {
                                    stiffness: 100,
                                    damping: 10,
                                    duration: e
                                };
                            {
                                let t = Math.pow(f, 2) * i;
                                return {
                                    stiffness: t,
                                    damping: 2 * c * Math.sqrt(i * t),
                                    duration: e
                                }
                            }
                        }(e);
                        (t = {
                            ...t,
                            ...n,
                            velocity: 0,
                            mass: 1
                        }).isResolvedFromDuration = !0
                    }
                    return t
                }(d),
                E = b ? -(0, r.X)(b) : 0,
                P = g / (2 * Math.sqrt(v * y)),
                C = p - h,
                S = (0, r.X)(Math.sqrt(v / y)),
                R = 5 > Math.abs(C);
            if (n || (n = R ? .01 : 2), t || (t = R ? .005 : .5), P < 1) {
                let e = s(S, P);
                f = t => p - Math.exp(-P * S * t) * ((E + P * S * C) / e * Math.sin(e * t) + C * Math.cos(e * t))
            } else if (1 === P)
                f = e => p - Math.exp(-S * e) * (C + (E + S * C) * e);
            else {
                let e = S * Math.sqrt(P * P - 1);
                f = t => {
                    let n = Math.min(e * t, 300);
                    return p - Math.exp(-P * S * t) * ((E + P * S * C) * Math.sinh(n) + e * C * Math.cosh(n)) / e
                }
            }
            return {
                calculatedDuration: x && w || null,
                next: e => {
                    let r = f(e);
                    if (x)
                        m.done = e >= w;
                    else {
                        let o = E;
                        0 !== e && (o = P < 1 ? (0, i.P)(f, e, r) : 0);
                        let a = Math.abs(o) <= n,
                            s = Math.abs(p - r) <= t;
                        m.done = a && s
                    }
                    return m.value = m.done ? p : r, m
                }
            }
        }
    },
    40185: function(e, t, n) {
        "use strict";
        n.d(t, {
            E: function() {
                return r
            },
            i: function() {
                return i
            }
        });
        let r = 2e4;
        function i(e) {
            let t = 0,
                n = e.next(t);
            for (; !n.done && t < r;)
                t += 50,
                n = e.next(t);
            return t >= r ? 1 / 0 : t
        }
    },
    43419: function(e, t, n) {
        "use strict";
        n.d(t, {
            P: function() {
                return i
            }
        });
        var r = n(6899);
        function i(e, t, n) {
            let i = Math.max(t - 5, 0);
            return (0, r.R)(n - e(i), t - i)
        }
    },
    7043: function(e, t, n) {
        "use strict";
        n.d(t, {
            v: function() {
                return Q
            }
        });
        var r = n(83813),
            i = n(30309);
        let o = {
            current: !1
        };
        var a = n(3831);
        let s = e => Array.isArray(e) && "number" == typeof e[0],
            l = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
            u = {
                linear: "linear",
                ease: "ease",
                easeIn: "ease-in",
                easeOut: "ease-out",
                easeInOut: "ease-in-out",
                circIn: l([0, .65, .55, 1]),
                circOut: l([.55, 0, 1, .45]),
                backIn: l([.31, .01, .66, -.59]),
                backOut: l([.33, 1.53, .69, .99])
            },
            c = {
                waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
            },
            d = {},
            f = {};
        for (let e in c)
            f[e] = () => (void 0 === d[e] && (d[e] = c[e]()), d[e]);
        var h = n(51734);
        let p = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
        function m(e, t, n, r) {
            if (e === t && n === r)
                return h.Z;
            let i = t => (function(e, t, n, r, i) {
                let o,
                    a;
                let s = 0;
                do (o = p(a = t + (n - t) / 2, r, i) - e) > 0 ? n = a : t = a;
                while (Math.abs(o) > 1e-7 && ++s < 12);
                return a
            })(t, 0, 1, e, n);
            return e => 0 === e || 1 === e ? e : p(i(e), t, r)
        }
        let v = m(.42, 0, 1, 1),
            g = m(0, 0, .58, 1),
            y = m(.42, 0, .58, 1);
        var b = n(87292),
            w = n(9651),
            x = n(61135),
            E = n(78445);
        let P = m(.33, 1.53, .69, .99),
            C = (0, E.M)(P),
            S = (0, x.o)(C),
            R = e => (e *= 2) < 1 ? .5 * C(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
            T = {
                linear: h.Z,
                easeIn: v,
                easeInOut: y,
                easeOut: g,
                circIn: w.Z7,
                circInOut: w.X7,
                circOut: w.Bn,
                backIn: C,
                backInOut: S,
                backOut: P,
                anticipate: R
            },
            M = e => {
                if (Array.isArray(e)) {
                    (0, r.k)(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
                    let [t, n, i, o] = e;
                    return m(t, n, i, o)
                }
                return "string" == typeof e ? ((0, r.k)(void 0 !== T[e], `Invalid easing type '${e}'`), T[e]) : e
            };
        var A = n(71790),
            k = n(61293);
        function D({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
            let i = (0, b.N)(r) ? r.map(M) : M(r),
                o = {
                    done: !1,
                    value: t[0]
                },
                a = (n && n.length === t.length ? n : (0, k.Y)(t)).map(t => t * e),
                s = (0, A.s)(a, t, {
                    ease: Array.isArray(i) ? i : t.map(() => i || y).splice(0, t.length - 1)
                });
            return {
                calculatedDuration: e,
                next: t => (o.value = s(t), o.done = t >= e, o)
            }
        }
        var L = n(99419),
            O = n(43419);
        function F({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: o=500, modifyTarget: a, min: s, max: l, restDelta: u=.5, restSpeed: c}) {
            let d,
                f;
            let h = e[0],
                p = {
                    done: !1,
                    value: h
                },
                m = e => void 0 !== s && e < s || void 0 !== l && e > l,
                v = e => void 0 === s ? l : void 0 === l ? s : Math.abs(s - e) < Math.abs(l - e) ? s : l,
                g = n * t,
                y = h + g,
                b = void 0 === a ? y : a(y);
            b !== y && (g = b - h);
            let w = e => -g * Math.exp(-e / r),
                x = e => b + w(e),
                E = e => {
                    let t = w(e),
                        n = x(e);
                    p.done = Math.abs(t) <= u,
                    p.value = p.done ? b : n
                },
                P = e => {
                    m(p.value) && (d = e, f = (0, L.S)({
                        keyframes: [p.value, v(p.value)],
                        velocity: (0, O.P)(x, e, p.value),
                        damping: i,
                        stiffness: o,
                        restDelta: u,
                        restSpeed: c
                    }))
                };
            return P(0), {
                calculatedDuration: null,
                next: e => {
                    let t = !1;
                    return (f || void 0 !== d || (t = !0, E(e), P(e)), void 0 !== d && e > d) ? f.next(e - d) : (t || E(e), p)
                }
            }
        }
        var I = n(87699);
        let V = e => {
            let t = ({timestamp: t}) => e(t);
            return {
                start: () => a.Wi.update(t, !0),
                stop: () => (0, a.Pn)(t),
                now: () => I.w.isProcessing ? I.w.timestamp : performance.now()
            }
        };
        var _ = n(32025),
            j = n(40185);
        let N = {
            decay: F,
            inertia: F,
            tween: D,
            keyframes: D,
            spring: L.S
        };
        function B({autoplay: e=!0, delay: t=0, driver: n=V, keyframes: r, type: o="keyframes", repeat: a=0, repeatDelay: s=0, repeatType: l="loop", onPlay: u, onStop: c, onComplete: d, onUpdate: f, ...h}) {
            let p,
                m,
                v,
                g,
                y,
                b = 1,
                w = !1,
                x = () => {
                    p && p(),
                    m = new Promise(e => {
                        p = e
                    })
                };
            x();
            let E = N[o] || D;
            E !== D && "number" != typeof r[0] && (g = (0, A.s)([0, 100], r, {
                clamp: !1
            }), r = [0, 100]);
            let P = E({
                ...h,
                keyframes: r
            });
            "mirror" === l && (y = E({
                ...h,
                keyframes: [...r].reverse(),
                velocity: -(h.velocity || 0)
            }));
            let C = "idle",
                S = null,
                R = null,
                T = null;
            null === P.calculatedDuration && a && (P.calculatedDuration = (0, j.i)(P));
            let {calculatedDuration: M} = P,
                k = 1 / 0,
                L = 1 / 0;
            null !== M && (L = (k = M + s) * (a + 1) - s);
            let O = 0,
                F = e => {
                    if (null === R)
                        return;
                    b > 0 && (R = Math.min(R, e)),
                    O = null !== S ? S : (e - R) * b;
                    let n = O - t,
                        i = n < 0;
                    O = Math.max(n, 0),
                    "finished" === C && null === S && (O = L);
                    let o = O,
                        u = P;
                    if (a) {
                        let e = O / k,
                            t = Math.floor(e),
                            n = e % 1;
                        !n && e >= 1 && (n = 1),
                        1 === n && t--,
                        t = Math.min(t, a + 1);
                        let r = !!(t % 2);
                        r && ("reverse" === l ? (n = 1 - n, s && (n -= s / k)) : "mirror" === l && (u = y));
                        let i = (0, _.u)(0, 1, n);
                        O > L && (i = "reverse" === l && r ? 1 : 0),
                        o = i * k
                    }
                    let c = i ? {
                        done: !1,
                        value: r[0]
                    } : u.next(o);
                    g && (c.value = g(c.value));
                    let {done: d} = c;
                    i || null === M || (d = O >= L);
                    let h = null === S && ("finished" === C || "running" === C && d || b < 0 && O <= 0);
                    return f && f(c.value), h && W(), c
                },
                I = () => {
                    v && v.stop(),
                    v = void 0
                },
                B = () => {
                    C = "idle",
                    I(),
                    x(),
                    R = T = null
                },
                W = () => {
                    C = "finished",
                    d && d(),
                    I(),
                    x()
                },
                $ = () => {
                    if (w)
                        return;
                    v || (v = n(F));
                    let e = v.now();
                    u && u(),
                    null !== S ? R = e - S : R && "finished" !== C || (R = e),
                    T = R,
                    S = null,
                    C = "running",
                    v.start()
                };
            e && $();
            let z = {
                then: (e, t) => m.then(e, t),
                get time() {
                    return (0, i.X)(O)
                },
                set time(newTime) {
                    O = newTime = (0, i.w)(newTime),
                    null === S && v && 0 !== b ? R = v.now() - newTime / b : S = newTime
                },
                get duration() {
                    let e = null === P.calculatedDuration ? (0, j.i)(P) : P.calculatedDuration;
                    return (0, i.X)(e)
                },
                get speed() {
                    return b
                },
                set speed(newSpeed) {
                    if (newSpeed === b || !v)
                        return;
                    b = newSpeed,
                    z.time = (0, i.X)(O)
                },
                get state() {
                    return C
                },
                play: $,
                pause: () => {
                    C = "paused",
                    S = O
                },
                stop: () => {
                    w = !0,
                    "idle" !== C && (C = "idle", c && c(), B())
                },
                cancel: () => {
                    null !== T && F(T),
                    B()
                },
                complete: () => {
                    C = "finished"
                },
                sample: e => (R = 0, F(e))
            };
            return z
        }
        let W = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
            $ = (e, t) => "spring" === t.type || "backgroundColor" === e || !function e(t) {
                return !!(!t || "string" == typeof t && u[t] || s(t) || Array.isArray(t) && t.every(e))
            }(t.ease);
        var z = n(71863);
        let H = {
                type: "spring",
                stiffness: 500,
                damping: 25,
                restSpeed: 10
            },
            U = e => ({
                type: "spring",
                stiffness: 550,
                damping: 0 === e ? 2 * Math.sqrt(550) : 30,
                restSpeed: 10
            }),
            Z = {
                type: "keyframes",
                duration: .8
            },
            Y = {
                type: "keyframes",
                ease: [.25, .1, .35, 1],
                duration: .3
            },
            G = (e, {keyframes: t}) => t.length > 2 ? Z : z.G.has(e) ? e.startsWith("scale") ? U(t[1]) : H : Y;
        var K = n(58459);
        let q = (e, t) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && K.P.test(t) && !t.startsWith("url("));
        var X = n(70181),
            J = n(99185);
        let Q = (e, t, n, c={}) => d => {
            let p = (0, J.ev)(c, e) || {},
                m = p.delay || c.delay || 0,
                {elapsed: v=0} = c;
            v -= (0, i.w)(m);
            let g = function(e, t, n, r) {
                    let i = q(t, n),
                        o = void 0 !== r.from ? r.from : e.get();
                    return ("none" === o && i && "string" == typeof n ? o = (0, X.T)(t, n) : (0, J.Fr)(o) && "string" == typeof n ? o = (0, J.GZ)(n) : !Array.isArray(n) && (0, J.Fr)(n) && "string" == typeof o && (n = (0, J.GZ)(o)), Array.isArray(n)) ? function(e, [...t]) {
                        for (let n = 0; n < t.length; n++)
                            null === t[n] && (t[n] = 0 === n ? e : t[n - 1]);
                        return t
                    }(o, n) : [o, n]
                }(t, e, n, p),
                y = g[0],
                b = g[g.length - 1],
                w = q(e, y),
                x = q(e, b);
            (0, r.K)(w === x, `You are trying to animate ${e} from "${y}" to "${b}". ${y} is not an animatable value - to enable this animation set ${y} to a value animatable to ${b} via the \`style\` property.`);
            let E = {
                keyframes: g,
                velocity: t.getVelocity(),
                ease: "easeOut",
                ...p,
                delay: -v,
                onUpdate: e => {
                    t.set(e),
                    p.onUpdate && p.onUpdate(e)
                },
                onComplete: () => {
                    d(),
                    p.onComplete && p.onComplete()
                }
            };
            if ((0, J.rw)(p) || (E = {
                ...E,
                ...G(e, E)
            }), E.duration && (E.duration = (0, i.w)(E.duration)), E.repeatDelay && (E.repeatDelay = (0, i.w)(E.repeatDelay)), !w || !x || o.current || !1 === p.type)
                return function({keyframes: e, delay: t, onUpdate: n, onComplete: r}) {
                    let i = () => (n && n(e[e.length - 1]), r && r(), {
                        time: 0,
                        speed: 1,
                        duration: 0,
                        play: h.Z,
                        pause: h.Z,
                        stop: h.Z,
                        then: e => (e(), Promise.resolve()),
                        cancel: h.Z,
                        complete: h.Z
                    });
                    return t ? B({
                        keyframes: [0, 1],
                        duration: 0,
                        delay: t,
                        onComplete: i
                    }) : i()
                }(E);
            if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
                let n = function(e, t, {onUpdate: n, onComplete: r, ...o}) {
                    let c,
                        d;
                    let h = f.waapi() && W.has(t) && !o.repeatDelay && "mirror" !== o.repeatType && 0 !== o.damping && "inertia" !== o.type;
                    if (!h)
                        return !1;
                    let p = !1,
                        m = () => {
                            d = new Promise(e => {
                                c = e
                            })
                        };
                    m();
                    let {keyframes: v, duration: g=300, ease: y, times: b} = o;
                    if ($(t, o)) {
                        let e = B({
                                ...o,
                                repeat: 0,
                                delay: 0
                            }),
                            t = {
                                done: !1,
                                value: v[0]
                            },
                            n = [],
                            r = 0;
                        for (; !t.done && r < 2e4;)
                            n.push((t = e.sample(r)).value),
                            r += 10;
                        b = void 0,
                        v = n,
                        g = r - 10,
                        y = "linear"
                    }
                    let w = function(e, t, n, {delay: r=0, duration: i, repeat: o=0, repeatType: a="loop", ease: c, times: d}={}) {
                            let f = {
                                [t]: n
                            };
                            d && (f.offset = d);
                            let h = function e(t) {
                                if (t)
                                    return s(t) ? l(t) : Array.isArray(t) ? t.map(e) : u[t]
                            }(c);
                            return Array.isArray(h) && (f.easing = h), e.animate(f, {
                                delay: r,
                                duration: i,
                                easing: Array.isArray(h) ? "linear" : h,
                                fill: "both",
                                iterations: o + 1,
                                direction: "reverse" === a ? "alternate" : "normal"
                            })
                        }(e.owner.current, t, v, {
                            ...o,
                            duration: g,
                            ease: y,
                            times: b
                        }),
                        x = () => w.cancel(),
                        E = () => {
                            a.Wi.update(x),
                            c(),
                            m()
                        };
                    return w.onfinish = () => {
                        e.set(function(e, {repeat: t, repeatType: n="loop"}) {
                            let r = t && "loop" !== n && t % 2 == 1 ? 0 : e.length - 1;
                            return e[r]
                        }(v, o)),
                        r && r(),
                        E()
                    }, {
                        then: (e, t) => d.then(e, t),
                        get time() {
                            return (0, i.X)(w.currentTime || 0)
                        },
                        set time(newTime) {
                            w.currentTime = (0, i.w)(newTime)
                        },
                        get speed() {
                            return w.playbackRate
                        },
                        set speed(newSpeed) {
                            w.playbackRate = newSpeed
                        },
                        get duration() {
                            return (0, i.X)(g)
                        },
                        play: () => {
                            p || (w.play(), (0, a.Pn)(x))
                        },
                        pause: () => w.pause(),
                        stop: () => {
                            if (p = !0, "idle" === w.playState)
                                return;
                            let {currentTime: t} = w;
                            if (t) {
                                let n = B({
                                    ...o,
                                    autoplay: !1
                                });
                                e.setWithVelocity(n.sample(t - 10).value, n.sample(t).value, 10)
                            }
                            E()
                        },
                        complete: () => w.finish(),
                        cancel: E
                    }
                }(t, e, E);
                if (n)
                    return n
            }
            return B(E)
        }
    },
    64685: function(e, t, n) {
        "use strict";
        n.d(t, {
            D: function() {
                return a
            }
        });
        var r = n(7043),
            i = n(41835),
            o = n(79237);
        function a(e, t, n) {
            let a = (0, o.i)(e) ? e : (0, i.B)(e);
            return a.start((0, r.v)("", a, t, n)), a.animation
        }
    },
    61005: function(e, t, n) {
        "use strict";
        n.d(t, {
            w: function() {
                return c
            }
        });
        var r = n(3831),
            i = n(71863),
            o = n(80359);
        let a = "data-" + (0, o.D)("framerAppearId");
        var s = n(7043),
            l = n(23991),
            u = n(88052);
        function c(e, t, {delay: n=0, transitionOverride: o, type: c}={}) {
            let {transition: d=e.getDefaultTransition(), transitionEnd: f, ...h} = e.makeTargetAnimatable(t),
                p = e.getValue("willChange");
            o && (d = o);
            let m = [],
                v = c && e.animationState && e.animationState.getState()[c];
            for (let t in h) {
                let o = e.getValue(t),
                    u = h[t];
                if (!o || void 0 === u || v && function({protectedKeys: e, needsAnimating: t}, n) {
                    let r = e.hasOwnProperty(n) && !0 !== t[n];
                    return t[n] = !1, r
                }(v, t))
                    continue;
                let c = {
                    delay: n,
                    elapsed: 0,
                    ...d
                };
                if (window.HandoffAppearAnimations && !o.hasAnimated) {
                    let n = e.getProps()[a];
                    n && (c.elapsed = window.HandoffAppearAnimations(n, t, o, r.Wi))
                }
                o.start((0, s.v)(t, o, u, e.shouldReduceMotion && i.G.has(t) ? {
                    type: !1
                } : c));
                let f = o.animation;
                (0, l.L)(p) && (p.add(t), f.then(() => p.remove(t))),
                m.push(f)
            }
            return f && Promise.all(m).then(() => {
                f && (0, u.CD)(e, f)
            }), m
        }
    },
    26763: function(e, t, n) {
        "use strict";
        function r(e) {
            return "object" == typeof e && "function" == typeof e.start
        }
        n.d(t, {
            H: function() {
                return r
            }
        })
    },
    91136: function(e, t, n) {
        "use strict";
        n.d(t, {
            C: function() {
                return r
            }
        });
        let r = e => Array.isArray(e)
    },
    99185: function(e, t, n) {
        "use strict";
        n.d(t, {
            Fr: function() {
                return o
            },
            GZ: function() {
                return a
            },
            ev: function() {
                return s
            },
            rw: function() {
                return i
            }
        });
        var r = n(70181);
        function i({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: a, repeatDelay: s, from: l, elapsed: u, ...c}) {
            return !!Object.keys(c).length
        }
        function o(e) {
            return 0 === e || "string" == typeof e && 0 === parseFloat(e) && -1 === e.indexOf(" ")
        }
        function a(e) {
            return "number" == typeof e ? 0 : (0, r.T)("", e)
        }
        function s(e, t) {
            return e[t] || e.default || e
        }
    },
    70737: function(e, t, n) {
        "use strict";
        n.d(t, {
            M: function() {
                return v
            }
        });
        var r = n(70079),
            i = n(3831),
            o = n(48783);
        function a() {
            let e = (0, r.useRef)(!1);
            return (0, o.L)(() => (e.current = !0, () => {
                e.current = !1
            }), []), e
        }
        var s = n(54561),
            l = n(35375);
        class u extends r.Component {
            getSnapshotBeforeUpdate(e)
            {
                let t = this.props.childRef.current;
                if (t && e.isPresent && !this.props.isPresent) {
                    let e = this.props.sizeRef.current;
                    e.height = t.offsetHeight || 0,
                    e.width = t.offsetWidth || 0,
                    e.top = t.offsetTop,
                    e.left = t.offsetLeft
                }
                return null
            }
            componentDidUpdate() {}
            render()
            {
                return this.props.children
            }
        }
        function c({children: e, isPresent: t}) {
            let n = (0, r.useId)(),
                i = (0, r.useRef)(null),
                o = (0, r.useRef)({
                    width: 0,
                    height: 0,
                    top: 0,
                    left: 0
                });
            return (0, r.useInsertionEffect)(() => {
                let {width: e, height: r, top: a, left: s} = o.current;
                if (t || !i.current || !e || !r)
                    return;
                i.current.dataset.motionPopId = n;
                let l = document.createElement("style");
                return document.head.appendChild(l), l.sheet && l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${
                e}px !important;
            height: ${r}px !important;
            top: ${a}px !important;
            left: ${s}px !important;
          }
        `

                ), () => {
                    document.head.removeChild(l)
                }
            }, [t]), r.createElement(u, {
                isPresent: t,
                childRef: i,
                sizeRef: o
            }, r.cloneElement(e, {
                ref: i
            }))
        }
        let d = ({children: e, initial: t, isPresent: n, onExitComplete: i, custom: o, presenceAffectsLayout: a, mode: u}) => {
            let d = (0, l.h)(f),
                h = (0, r.useId)(),
                p = (0, r.useMemo)(() => ({
                    id: h,
                    initial: t,
                    isPresent: n,
                    custom: o,
                    onExitComplete: e => {
                        for (let t of (d.set(e, !0), d.values()))
                            if (!t)
                                return;
                        i && i()
                    },
                    register: e => (d.set(e, !1), () => d.delete(e))
                }), a ? void 0 : [n]);
            return (0, r.useMemo)(() => {
                d.forEach((e, t) => d.set(t, !1))
            }, [n]), r.useEffect(() => {
                n || d.size || !i || i()
            }, [n]), "popLayout" === u && (e = r.createElement(c, {
                isPresent: n
            }, e)), r.createElement(s.O.Provider, {
                value: p
            }, e)
        };
        function f() {
            return new Map
        }
        var h = n(73107),
            p = n(83813);
        let m = e => e.key || "",
            v = ({children: e, custom: t, initial: n=!0, onExitComplete: s, exitBeforeEnter: l, presenceAffectsLayout: u=!0, mode: c="sync"}) => {
                var f;
                (0, p.k)(!l, "Replace exitBeforeEnter with mode='wait'");
                let [v] = function() {
                        let e = a(),
                            [t, n] = (0, r.useState)(0),
                            o = (0, r.useCallback)(() => {
                                e.current && n(t + 1)
                            }, [t]),
                            s = (0, r.useCallback)(() => i.Wi.postRender(o), [o]);
                        return [s, t]
                    }(),
                    g = (0, r.useContext)(h.p).forceRender;
                g && (v = g);
                let y = a(),
                    b = function(e) {
                        let t = [];
                        return r.Children.forEach(e, e => {
                            (0, r.isValidElement)(e) && t.push(e)
                        }), t
                    }(e),
                    w = b,
                    x = new Set,
                    E = (0, r.useRef)(w),
                    P = (0, r.useRef)(new Map).current,
                    C = (0, r.useRef)(!0);
                if ((0, o.L)(() => {
                    C.current = !1,
                    function(e, t) {
                        e.forEach(e => {
                            let n = m(e);
                            t.set(n, e)
                        })
                    }(b, P),
                    E.current = w
                }), f = () => {
                    C.current = !0,
                    P.clear(),
                    x.clear()
                }, (0, r.useEffect)(() => () => f(), []), C.current)
                    return r.createElement(r.Fragment, null, w.map(e => r.createElement(d, {
                        key: m(e),
                        isPresent: !0,
                        initial: !!n && void 0,
                        presenceAffectsLayout: u,
                        mode: c
                    }, e)));
                w = [...w];
                let S = E.current.map(m),
                    R = b.map(m),
                    T = S.length;
                for (let e = 0; e < T; e++) {
                    let t = S[e];
                    -1 === R.indexOf(t) && x.add(t)
                }
                return "wait" === c && x.size && (w = []), x.forEach(e => {
                    if (-1 !== R.indexOf(e))
                        return;
                    let n = P.get(e);
                    if (!n)
                        return;
                    let i = S.indexOf(e),
                        o = () => {
                            P.delete(e),
                            x.delete(e);
                            let t = E.current.findIndex(t => t.key === e);
                            if (E.current.splice(t, 1), !x.size) {
                                if (E.current = b, !1 === y.current)
                                    return;
                                v(),
                                s && s()
                            }
                        };
                    w.splice(i, 0, r.createElement(d, {
                        key: m(n),
                        isPresent: !1,
                        onExitComplete: o,
                        custom: t,
                        presenceAffectsLayout: u,
                        mode: c
                    }, n))
                }), w = w.map(e => {
                    let t = e.key;
                    return x.has(t) ? e : r.createElement(d, {
                        key: m(e),
                        isPresent: !0,
                        presenceAffectsLayout: u,
                        mode: c
                    }, e)
                }), r.createElement(r.Fragment, null, x.size ? w : w.map(e => (0, r.cloneElement)(e)))
            }
    },
    73107: function(e, t, n) {
        "use strict";
        n.d(t, {
            p: function() {
                return i
            }
        });
        var r = n(70079);
        let i = (0, r.createContext)({})
    },
    52847: function(e, t, n) {
        "use strict";
        n.d(t, {
            _: function() {
                return i
            }
        });
        var r = n(70079);
        let i = (0, r.createContext)({
            transformPagePoint: e => e,
            isStatic: !1,
            reducedMotion: "never"
        })
    },
    54561: function(e, t, n) {
        "use strict";
        n.d(t, {
            O: function() {
                return i
            }
        });
        var r = n(70079);
        let i = (0, r.createContext)(null)
    },
    9651: function(e, t, n) {
        "use strict";
        n.d(t, {
            Bn: function() {
                return a
            },
            X7: function() {
                return s
            },
            Z7: function() {
                return o
            }
        });
        var r = n(61135),
            i = n(78445);
        let o = e => 1 - Math.sin(Math.acos(e)),
            a = (0, i.M)(o),
            s = (0, r.o)(a)
    },
    61135: function(e, t, n) {
        "use strict";
        n.d(t, {
            o: function() {
                return r
            }
        });
        let r = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
    },
    78445: function(e, t, n) {
        "use strict";
        n.d(t, {
            M: function() {
                return r
            }
        });
        let r = e => t => 1 - e(1 - t)
    },
    87292: function(e, t, n) {
        "use strict";
        n.d(t, {
            N: function() {
                return r
            }
        });
        let r = e => Array.isArray(e) && "number" != typeof e[0]
    },
    87699: function(e, t, n) {
        "use strict";
        n.d(t, {
            w: function() {
                return r
            }
        });
        let r = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        }
    },
    3831: function(e, t, n) {
        "use strict";
        n.d(t, {
            Pn: function() {
                return f
            },
            Wi: function() {
                return d
            },
            S6: function() {
                return s
            }
        });
        var r = n(87699);
        let i = !0,
            o = !1,
            a = ["read", "update", "preRender", "render", "postRender"],
            s = a.reduce((e, t) => (e[t] = function(e) {
                let t = [],
                    n = [],
                    r = 0,
                    i = !1,
                    o = !1,
                    a = new WeakSet,
                    s = {
                        schedule: (e, o=!1, s=!1) => {
                            let l = s && i,
                                u = l ? t : n;
                            return o && a.add(e), -1 === u.indexOf(e) && (u.push(e), l && i && (r = t.length)), e
                        },
                        cancel: e => {
                            let t = n.indexOf(e);
                            -1 !== t && n.splice(t, 1),
                            a.delete(e)
                        },
                        process: l => {
                            if (i) {
                                o = !0;
                                return
                            }
                            if (i = !0, [t, n] = [n, t], n.length = 0, r = t.length)
                                for (let n = 0; n < r; n++) {
                                    let r = t[n];
                                    r(l),
                                    a.has(r) && (s.schedule(r), e())
                                }
                            i = !1,
                            o && (o = !1, s.process(l))
                        }
                    };
                return s
            }(() => o = !0), e), {}),
            l = e => s[e].process(r.w),
            u = e => {
                o = !1,
                r.w.delta = i ? 1e3 / 60 : Math.max(Math.min(e - r.w.timestamp, 40), 1),
                r.w.timestamp = e,
                r.w.isProcessing = !0,
                a.forEach(l),
                r.w.isProcessing = !1,
                o && (i = !1, requestAnimationFrame(u))
            },
            c = () => {
                o = !0,
                i = !0,
                r.w.isProcessing || requestAnimationFrame(u)
            },
            d = a.reduce((e, t) => {
                let n = s[t];
                return e[t] = (e, t=!1, r=!1) => (o || c(), n.schedule(e, t, r)), e
            }, {});
        function f(e) {
            a.forEach(t => s[t].cancel(e))
        }
    },
    32934: function(e, t, n) {
        "use strict";
        n.d(t, {
            A: function() {
                return i
            }
        });
        let r = {
                animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                exit: ["exit"],
                drag: ["drag", "dragControls"],
                focus: ["whileFocus"],
                hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                layout: ["layout", "layoutId"]
            },
            i = {};
        for (let e in r)
            i[e] = {
                isEnabled: t => r[e].some(e => !!t[e])
            }
    },
    55287: function(e, t, n) {
        "use strict";
        n.d(t, {
            j: function() {
                return o
            }
        });
        var r = n(89175),
            i = n(71863);
        function o(e, {layout: t, layoutId: n}) {
            return i.G.has(e) || e.startsWith("origin") || (t || void 0 !== n) && (!!r.P[e] || "opacity" === e)
        }
    },
    74472: function(e, t, n) {
        "use strict";
        function r({top: e, left: t, right: n, bottom: r}) {
            return {
                x: {
                    min: t,
                    max: n
                },
                y: {
                    min: e,
                    max: r
                }
            }
        }
        function i({x: e, y: t}) {
            return {
                top: t.min,
                right: e.max,
                bottom: t.max,
                left: e.min
            }
        }
        function o(e, t) {
            if (!t)
                return e;
            let n = t({
                    x: e.left,
                    y: e.top
                }),
                r = t({
                    x: e.right,
                    y: e.bottom
                });
            return {
                top: n.y,
                left: n.x,
                bottom: r.y,
                right: r.x
            }
        }
        n.d(t, {
            d7: function() {
                return o
            },
            i8: function() {
                return r
            },
            z2: function() {
                return i
            }
        })
    },
    33156: function(e, t, n) {
        "use strict";
        n.d(t, {
            D2: function() {
                return m
            },
            YY: function() {
                return u
            },
            am: function() {
                return d
            },
            o2: function() {
                return l
            },
            q2: function() {
                return o
            }
        });
        var r = n(31914),
            i = n(65062);
        function o(e, t, n) {
            return n + t * (e - n)
        }
        function a(e, t, n, r, i) {
            return void 0 !== i && (e = r + i * (e - r)), r + n * (e - r) + t
        }
        function s(e, t=0, n=1, r, i) {
            e.min = a(e.min, t, n, r, i),
            e.max = a(e.max, t, n, r, i)
        }
        function l(e, {x: t, y: n}) {
            s(e.x, t.translate, t.scale, t.originPoint),
            s(e.y, n.translate, n.scale, n.originPoint)
        }
        function u(e, t, n, r=!1) {
            let o,
                a;
            let s = n.length;
            if (s) {
                t.x = t.y = 1;
                for (let u = 0; u < s; u++) {
                    a = (o = n[u]).projectionDelta;
                    let s = o.instance;
                    (!s || !s.style || "contents" !== s.style.display) && (r && o.options.layoutScroll && o.scroll && o !== o.root && m(e, {
                        x: -o.scroll.offset.x,
                        y: -o.scroll.offset.y
                    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, l(e, a)), r && (0, i.ud)(o.latestValues) && m(e, o.latestValues))
                }
                t.x = c(t.x),
                t.y = c(t.y)
            }
        }
        function c(e) {
            return Number.isInteger(e) ? e : e > 1.0000000000001 || e < .999999999999 ? e : 1
        }
        function d(e, t) {
            e.min = e.min + t,
            e.max = e.max + t
        }
        function f(e, t, [n, i, o]) {
            let a = void 0 !== t[o] ? t[o] : .5,
                l = (0, r.C)(e.min, e.max, a);
            s(e, t[n], t[i], l, t.scale)
        }
        let h = ["x", "scaleX", "originX"],
            p = ["y", "scaleY", "originY"];
        function m(e, t) {
            f(e.x, t, h),
            f(e.y, t, p)
        }
    },
    6266: function(e, t, n) {
        "use strict";
        n.d(t, {
            dO: function() {
                return a
            },
            wc: function() {
                return i
            }
        });
        let r = () => ({
                translate: 0,
                scale: 1,
                origin: 0,
                originPoint: 0
            }),
            i = () => ({
                x: r(),
                y: r()
            }),
            o = () => ({
                min: 0,
                max: 0
            }),
            a = () => ({
                x: o(),
                y: o()
            })
    },
    89175: function(e, t, n) {
        "use strict";
        n.d(t, {
            B: function() {
                return i
            },
            P: function() {
                return r
            }
        });
        let r = {};
        function i(e) {
            Object.assign(r, e)
        }
    },
    65062: function(e, t, n) {
        "use strict";
        function r(e) {
            return void 0 === e || 1 === e
        }
        function i({scale: e, scaleX: t, scaleY: n}) {
            return !r(e) || !r(t) || !r(n)
        }
        function o(e) {
            return i(e) || a(e) || e.z || e.rotate || e.rotateX || e.rotateY
        }
        function a(e) {
            var t,
                n;
            return (t = e.x) && "0%" !== t || (n = e.y) && "0%" !== n
        }
        n.d(t, {
            D_: function() {
                return a
            },
            Lj: function() {
                return i
            },
            ud: function() {
                return o
            }
        })
    },
    76077: function(e, t, n) {
        "use strict";
        n.d(t, {
            J: function() {
                return o
            },
            z: function() {
                return a
            }
        });
        var r = n(74472),
            i = n(33156);
        function o(e, t) {
            return (0, r.i8)((0, r.d7)(e.getBoundingClientRect(), t))
        }
        function a(e, t, n) {
            let r = o(e, n),
                {scroll: a} = t;
            return a && ((0, i.am)(r.x, a.offset.x), (0, i.am)(r.y, a.offset.y)), r
        }
    },
    91385: function(e, t, n) {
        "use strict";
        n.d(t, {
            J: function() {
                return Z
            }
        });
        var r = n(88052),
            i = n(83813),
            o = n(29858);
        let a = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
        function s(e, t, n=1) {
            (0, i.k)(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
            let [r, l] = function(e) {
                let t = a.exec(e);
                if (!t)
                    return [, ];
                let [, n, r] = t;
                return [n, r]
            }(e);
            if (!r)
                return;
            let u = window.getComputedStyle(t).getPropertyValue(r);
            return u ? u.trim() : (0, o.tm)(l) ? s(l, t, n + 1) : l
        }
        var l = n(91136),
            u = n(71863),
            c = n(71707),
            d = n(36780),
            f = n(97932),
            h = n(81957);
        let p = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
            m = e => p.has(e),
            v = e => Object.keys(e).some(m),
            g = e => e === f.Rx || e === h.px,
            y = (e, t) => parseFloat(e.split(", ")[t]),
            b = (e, t) => (n, {transform: r}) => {
                if ("none" === r || !r)
                    return 0;
                let i = r.match(/^matrix3d\((.+)\)$/);
                if (i)
                    return y(i[1], t);
                {
                    let t = r.match(/^matrix\((.+)\)$/);
                    return t ? y(t[1], e) : 0
                }
            },
            w = new Set(["x", "y", "z"]),
            x = u._.filter(e => !w.has(e)),
            E = {
                width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
                height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
                top: (e, {top: t}) => parseFloat(t),
                left: (e, {left: t}) => parseFloat(t),
                bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
                right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
                x: b(4, 13),
                y: b(5, 14)
            },
            P = (e, t, n) => {
                let r = t.measureViewportBox(),
                    i = t.current,
                    o = getComputedStyle(i),
                    {display: a} = o,
                    s = {};
                "none" === a && t.setStaticValue("display", e.display || "block"),
                n.forEach(e => {
                    s[e] = E[e](r, o)
                }),
                t.render();
                let l = t.measureViewportBox();
                return n.forEach(n => {
                    let r = t.getValue(n);
                    r && r.jump(s[n]),
                    e[n] = E[n](l, o)
                }), e
            },
            C = (e, t, n={}, r={}) => {
                t = {
                    ...t
                },
                r = {
                    ...r
                };
                let o = Object.keys(t).filter(m),
                    a = [],
                    s = !1,
                    u = [];
                if (o.forEach(o => {
                    let d;
                    let f = e.getValue(o);
                    if (!e.hasValue(o))
                        return;
                    let p = n[o],
                        m = (0, c.C)(p),
                        v = t[o];
                    if ((0, l.C)(v)) {
                        let e = v.length,
                            t = null === v[0] ? 1 : 0;
                        p = v[t],
                        m = (0, c.C)(p);
                        for (let n = t; n < e && null !== v[n]; n++)
                            d ? (0, i.k)((0, c.C)(v[n]) === d, "All keyframes must be of the same type") : (d = (0, c.C)(v[n]), (0, i.k)(d === m || g(m) && g(d), "Keyframes must be of the same dimension as the current value"))
                    } else
                        d = (0, c.C)(v);
                    if (m !== d) {
                        if (g(m) && g(d)) {
                            let e = f.get();
                            "string" == typeof e && f.set(parseFloat(e)),
                            "string" == typeof v ? t[o] = parseFloat(v) : Array.isArray(v) && d === h.px && (t[o] = v.map(parseFloat))
                        } else
                            (null == m ? void 0 : m.transform) && (null == d ? void 0 : d.transform) && (0 === p || 0 === v) ? 0 === p ? f.set(d.transform(p)) : t[o] = m.transform(v) : (s || (a = function(e) {
                                let t = [];
                                return x.forEach(n => {
                                    let r = e.getValue(n);
                                    void 0 !== r && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
                                }), t.length && e.render(), t
                            }(e), s = !0), u.push(o), r[o] = void 0 !== r[o] ? r[o] : t[o], f.jump(v))
                    }
                }), !u.length)
                    return {
                        target: t,
                        transitionEnd: r
                    };
                {
                    let n = u.indexOf("height") >= 0 ? window.pageYOffset : null,
                        i = P(t, e, u);
                    return a.length && a.forEach(([t, n]) => {
                        e.getValue(t).set(n)
                    }), e.render(), d.j && null !== n && window.scrollTo({
                        top: n
                    }), {
                        target: i,
                        transitionEnd: r
                    }
                }
            },
            S = (e, t, n, r) => {
                var i,
                    a;
                let l = function(e, {...t}, n) {
                    let r = e.current;
                    if (!(r instanceof Element))
                        return {
                            target: t,
                            transitionEnd: n
                        };
                    for (let i in n && (n = {
                        ...n
                    }), e.values.forEach(e => {
                        let t = e.get();
                        if (!(0, o.tm)(t))
                            return;
                        let n = s(t, r);
                        n && e.set(n)
                    }), t) {
                        let e = t[i];
                        if (!(0, o.tm)(e))
                            continue;
                        let a = s(e, r);
                        a && (t[i] = a, n || (n = {}), void 0 === n[i] && (n[i] = e))
                    }
                    return {
                        target: t,
                        transitionEnd: n
                    }
                }(e, t, r);
                return t = l.target, r = l.transitionEnd, i = t, a = r, v(i) ? C(e, i, n, a) : {
                    target: i,
                    transitionEnd: a
                }
            };
        var R = n(3831),
            T = n(6266),
            M = n(64056);
        let A = {
                current: null
            },
            k = {
                current: !1
            };
        var D = n(31563),
            L = n(41835),
            O = n(23991),
            F = n(79237),
            I = n(98261),
            V = n(18094),
            _ = n(87107),
            j = n(32934),
            N = n(68988),
            B = n(30124);
        let W = Object.keys(j.A),
            $ = W.length,
            z = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
            H = N.V.length;
        class U {
            constructor({parent: e, props: t, presenceContext: n, reducedMotionConfig: r, visualState: i}, o={})
            {
                this.current = null,
                this.children = new Set,
                this.isVariantNode = !1,
                this.isControllingVariants = !1,
                this.shouldReduceMotion = null,
                this.values = new Map,
                this.features = {},
                this.valueSubscriptions = new Map,
                this.prevMotionValues = {},
                this.events = {},
                this.propEventSubscriptions = {},
                this.notifyUpdate = () => this.notify("Update", this.latestValues),
                this.render = () => {
                    this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                },
                this.scheduleRender = () => R.Wi.render(this.render, !1, !0);
                let {latestValues: a, renderState: s} = i;
                this.latestValues = a,
                this.baseTarget = {
                    ...a
                },
                this.initialValues = t.initial ? {
                    ...a
                } : {},
                this.renderState = s,
                this.parent = e,
                this.props = t,
                this.presenceContext = n,
                this.depth = e ? e.depth + 1 : 0,
                this.reducedMotionConfig = r,
                this.options = o,
                this.isControllingVariants = (0, I.G)(t),
                this.isVariantNode = (0, I.M)(t),
                this.isVariantNode && (this.variantChildren = new Set),
                this.manuallyAnimateOnMount = !!(e && e.current);
                let {willChange: l, ...u} = this.scrapeMotionValuesFromProps(t, {});
                for (let e in u) {
                    let t = u[e];
                    void 0 !== a[e] && (0, F.i)(t) && (t.set(a[e], !1), (0, O.L)(l) && l.add(e))
                }
            }
            scrapeMotionValuesFromProps(e, t)
            {
                return {}
            }
            mount(e)
            {
                this.current = e,
                B.R.set(e, this),
                this.projection && this.projection.mount(e),
                this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
                this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
                k.current || function() {
                    if (k.current = !0, d.j) {
                        if (window.matchMedia) {
                            let e = window.matchMedia("(prefers-reduced-motion)"),
                                t = () => A.current = e.matches;
                            e.addListener(t),
                            t()
                        } else
                            A.current = !1
                    }
                }(),
                this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || A.current),
                this.parent && this.parent.children.add(this),
                this.update(this.props, this.presenceContext)
            }
            unmount()
            {
                for (let e in B.R.delete(this.current), this.projection && this.projection.unmount(), (0, R.Pn)(this.notifyUpdate), (0, R.Pn)(this.render), this.valueSubscriptions.forEach(e => e()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events)
                    this.events[e].clear();
                for (let e in this.features)
                    this.features[e].unmount();
                this.current = null
            }
            bindToMotionValue(e, t)
            {
                let n = u.G.has(e),
                    r = t.on("change", t => {
                        this.latestValues[e] = t,
                        this.props.onUpdate && R.Wi.update(this.notifyUpdate, !1, !0),
                        n && this.projection && (this.projection.isTransformDirty = !0)
                    }),
                    i = t.on("renderRequest", this.scheduleRender);
                this.valueSubscriptions.set(e, () => {
                    r(),
                    i()
                })
            }
            sortNodePosition(e)
            {
                return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
            }
            loadFeatures({children: e, ...t}, n, r, i, o)
            {
                let a,
                    s;
                for (let e = 0; e < $; e++) {
                    let n = W[e],
                        {isEnabled: r, Feature: i, ProjectionNode: o, MeasureLayout: l} = j.A[n];
                    o && (a = o),
                    r(t) && (!this.features[n] && i && (this.features[n] = new i(this)), l && (s = l))
                }
                if (!this.projection && a) {
                    this.projection = new a(i, this.latestValues, this.parent && this.parent.projection);
                    let {layoutId: e, layout: n, drag: r, dragConstraints: s, layoutScroll: l, layoutRoot: u} = t;
                    this.projection.setOptions({
                        layoutId: e,
                        layout: n,
                        alwaysMeasureLayout: !!r || s && (0, M.I)(s),
                        visualElement: this,
                        scheduleRender: () => this.scheduleRender(),
                        animationType: "string" == typeof n ? n : "both",
                        initialPromotionConfig: o,
                        layoutScroll: l,
                        layoutRoot: u
                    })
                }
                return s
            }
            updateFeatures()
            {
                for (let e in this.features) {
                    let t = this.features[e];
                    t.isMounted ? t.update(this.props, this.prevProps) : (t.mount(), t.isMounted = !0)
                }
            }
            triggerBuild()
            {
                this.build(this.renderState, this.latestValues, this.options, this.props)
            }
            measureViewportBox()
            {
                return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, T.dO)()
            }
            getStaticValue(e)
            {
                return this.latestValues[e]
            }
            setStaticValue(e, t)
            {
                this.latestValues[e] = t
            }
            makeTargetAnimatable(e, t=!0)
            {
                return this.makeTargetAnimatableFromInstance(e, this.props, t)
            }
            update(e, t)
            {
                (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
                this.prevProps = this.props,
                this.props = e,
                this.prevPresenceContext = this.presenceContext,
                this.presenceContext = t;
                for (let t = 0; t < z.length; t++) {
                    let n = z[t];
                    this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
                    let r = e["on" + n];
                    r && (this.propEventSubscriptions[n] = this.on(n, r))
                }
                this.prevMotionValues = function(e, t, n) {
                    let {willChange: r} = t;
                    for (let i in t) {
                        let o = t[i],
                            a = n[i];
                        if ((0, F.i)(o))
                            e.addValue(i, o),
                            (0, O.L)(r) && r.add(i);
                        else if ((0, F.i)(a))
                            e.addValue(i, (0, L.B)(o, {
                                owner: e
                            })),
                            (0, O.L)(r) && r.remove(i);
                        else if (a !== o) {
                            if (e.hasValue(i)) {
                                let t = e.getValue(i);
                                t.hasAnimated || t.set(o)
                            } else {
                                let t = e.getStaticValue(i);
                                e.addValue(i, (0, L.B)(void 0 !== t ? t : o, {
                                    owner: e
                                }))
                            }
                        }
                    }
                    for (let r in n)
                        void 0 === t[r] && e.removeValue(r);
                    return t
                }(this, this.scrapeMotionValuesFromProps(e, this.prevProps), this.prevMotionValues),
                this.handleChildMotionValue && this.handleChildMotionValue()
            }
            getProps()
            {
                return this.props
            }
            getVariant(e)
            {
                return this.props.variants ? this.props.variants[e] : void 0
            }
            getDefaultTransition()
            {
                return this.props.transition
            }
            getTransformPagePoint()
            {
                return this.props.transformPagePoint
            }
            getClosestVariantNode()
            {
                return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
            }
            getVariantContext(e=!1)
            {
                if (e)
                    return this.parent ? this.parent.getVariantContext() : void 0;
                if (!this.isControllingVariants) {
                    let e = this.parent && this.parent.getVariantContext() || {};
                    return void 0 !== this.props.initial && (e.initial = this.props.initial), e
                }
                let t = {};
                for (let e = 0; e < H; e++) {
                    let n = N.V[e],
                        r = this.props[n];
                    ((0, V.$)(r) || !1 === r) && (t[n] = r)
                }
                return t
            }
            addVariantChild(e)
            {
                let t = this.getClosestVariantNode();
                if (t)
                    return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e)
            }
            addValue(e, t)
            {
                t !== this.values.get(e) && (this.removeValue(e), this.bindToMotionValue(e, t)),
                this.values.set(e, t),
                this.latestValues[e] = t.get()
            }
            removeValue(e)
            {
                this.values.delete(e);
                let t = this.valueSubscriptions.get(e);
                t && (t(), this.valueSubscriptions.delete(e)),
                delete this.latestValues[e],
                this.removeValueFromRenderState(e, this.renderState)
            }
            hasValue(e)
            {
                return this.values.has(e)
            }
            getValue(e, t)
            {
                if (this.props.values && this.props.values[e])
                    return this.props.values[e];
                let n = this.values.get(e);
                return void 0 === n && void 0 !== t && (n = (0, L.B)(t, {
                    owner: this
                }), this.addValue(e, n)), n
            }
            readValue(e)
            {
                return void 0 === this.latestValues[e] && this.current ? this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e]
            }
            setBaseTarget(e, t)
            {
                this.baseTarget[e] = t
            }
            getBaseTarget(e)
            {
                var t;
                let {initial: n} = this.props,
                    r = "string" == typeof n || "object" == typeof n ? null === (t = (0, _.o)(this.props, n)) || void 0 === t ? void 0 : t[e] : void 0;
                if (n && void 0 !== r)
                    return r;
                let i = this.getBaseTargetFromProps(this.props, e);
                return void 0 === i || (0, F.i)(i) ? void 0 !== this.initialValues[e] && void 0 === r ? void 0 : this.baseTarget[e] : i
            }
            on(e, t)
            {
                return this.events[e] || (this.events[e] = new D.L), this.events[e].add(t)
            }
            notify(e, ...t)
            {
                this.events[e] && this.events[e].notify(...t)
            }
        }
        class Z extends U {
            sortInstanceNodePosition(e, t)
            {
                return 2 & e.compareDocumentPosition(t) ? 1 : -1
            }
            getBaseTargetFromProps(e, t)
            {
                return e.style ? e.style[t] : void 0
            }
            removeValueFromRenderState(e, {vars: t, style: n})
            {
                delete t[e],
                delete n[e]
            }
            makeTargetAnimatableFromInstance({transition: e, transitionEnd: t, ...n}, {transformValues: i}, o)
            {
                let a = (0, r.P$)(n, e || {}, this);
                if (i && (t && (t = i(t)), n && (n = i(n)), a && (a = i(a))), o) {
                    (0, r.GJ)(this, n, a);
                    let e = S(this, n, a, t);
                    t = e.transitionEnd,
                    n = e.target
                }
                return {
                    transition: e,
                    transitionEnd: t,
                    ...n
                }
            }
        }
    },
    97296: function(e, t, n) {
        "use strict";
        n.d(t, {
            E: function() {
                return t6
            }
        });
        var r,
            i = n(70079),
            o = n(52847);
        let a = (0, i.createContext)({});
        var s = n(54561),
            l = n(48783);
        let u = (0, i.createContext)({
            strict: !1
        });
        var c = n(64056),
            d = n(18094),
            f = n(98261);
        function h(e) {
            return Array.isArray(e) ? e.join(" ") : e
        }
        var p = n(32934),
            m = n(36780),
            v = n(35375);
        let g = {
                hasAnimatedSinceResize: !0,
                hasEverUpdated: !1
            },
            y = 1;
        var b = n(73107);
        let w = (0, i.createContext)({}),
            x = Symbol.for("motionComponentSymbol"),
            E = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
        function P(e) {
            if ("string" != typeof e || e.includes("-"))
                ;
            else if (E.indexOf(e) > -1 || /[A-Z]/.test(e))
                return !0;
            return !1
        }
        var C = n(55287),
            S = n(79237),
            R = n(66428);
        let T = () => ({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {}
        });
        function M(e, t, n) {
            for (let r in t)
                (0, S.i)(t[r]) || (0, C.j)(r, n) || (e[r] = t[r])
        }
        function A(e, t, n) {
            let r = {},
                o = function(e, t, n) {
                    let r = e.style || {},
                        o = {};
                    return M(o, r, e), Object.assign(o, function({transformTemplate: e}, t, n) {
                        return (0, i.useMemo)(() => {
                            let r = T();
                            return (0, R.r)(r, t, {
                                enableHardwareAcceleration: !n
                            }, e), Object.assign({}, r.vars, r.style)
                        }, [t])
                    }(e, t, n)), e.transformValues ? e.transformValues(o) : o
                }(e, t, n);
            return e.drag && !1 !== e.dragListener && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = !0 === e.drag ? "none" : `pan-${"x" === e.drag ? "y" : "x"}`), void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = o, r
        }
        let k = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);
        function D(e) {
            return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || k.has(e)
        }
        let L = e => !D(e);
        try {
            (r = require("@emotion/is-prop-valid").default) && (L = e => e.startsWith("on") ? !D(e) : r(e))
        } catch (e) {}
        var O = n(55263);
        let F = () => ({
            ...T(),
            attrs: {}
        });
        var I = n(58734);
        function V(e, t, n, r) {
            let o = (0, i.useMemo)(() => {
                let n = F();
                return (0, O.i)(n, t, {
                    enableHardwareAcceleration: !1
                }, (0, I.a)(r), e.transformTemplate), {
                    ...n.attrs,
                    style: {
                        ...n.style
                    }
                }
            }, [t]);
            if (e.style) {
                let t = {};
                M(t, e.style, e),
                o.style = {
                    ...t,
                    ...o.style
                }
            }
            return o
        }
        var _ = n(35027),
            j = n(37116),
            N = n(26763),
            B = n(87107),
            W = n(45201);
        function $(e) {
            let t = (0, S.i)(e) ? e.get() : e;
            return (0, W.p)(t) ? t.toValue() : t
        }
        let z = e => (t, n) => {
                let r = (0, i.useContext)(a),
                    o = (0, i.useContext)(s.O),
                    l = () => (function({scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n}, r, i, o) {
                        let a = {
                            latestValues: function(e, t, n, r) {
                                let i = {},
                                    o = r(e, {});
                                for (let e in o)
                                    i[e] = $(o[e]);
                                let {initial: a, animate: s} = e,
                                    l = (0, f.G)(e),
                                    u = (0, f.M)(e);
                                t && u && !l && !1 !== e.inherit && (void 0 === a && (a = t.initial), void 0 === s && (s = t.animate));
                                let c = !!n && !1 === n.initial;
                                c = c || !1 === a;
                                let d = c ? s : a;
                                if (d && "boolean" != typeof d && !(0, N.H)(d)) {
                                    let t = Array.isArray(d) ? d : [d];
                                    t.forEach(t => {
                                        let n = (0, B.o)(e, t);
                                        if (!n)
                                            return;
                                        let {transitionEnd: r, transition: o, ...a} = n;
                                        for (let e in a) {
                                            let t = a[e];
                                            if (Array.isArray(t)) {
                                                let e = c ? t.length - 1 : 0;
                                                t = t[e]
                                            }
                                            null !== t && (i[e] = t)
                                        }
                                        for (let e in r)
                                            i[e] = r[e]
                                    })
                                }
                                return i
                            }(r, i, o, e),
                            renderState: t()
                        };
                        return n && (a.mount = e => n(r, e, a)), a
                    })(e, t, r, o);
                return n ? l() : (0, v.h)(l)
            },
            H = {
                useVisualState: z({
                    scrapeMotionValuesFromProps: j.U,
                    createRenderState: F,
                    onMount: (e, t, {renderState: n, latestValues: r}) => {
                        try {
                            n.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
                        } catch (e) {
                            n.dimensions = {
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0
                            }
                        }
                        (0, O.i)(n, r, {
                            enableHardwareAcceleration: !1
                        }, (0, I.a)(t.tagName), e.transformTemplate),
                        (0, _.K)(t, n)
                    }
                })
            };
        var U = n(89716);
        let Z = {
            useVisualState: z({
                scrapeMotionValuesFromProps: U.U,
                createRenderState: T
            })
        };
        function Y(e, t, n, r={
            passive: !0
        }) {
            return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
        }
        let G = e => "mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary;
        function K(e, t="page") {
            return {
                point: {
                    x: e[t + "X"],
                    y: e[t + "Y"]
                }
            }
        }
        let q = e => t => G(t) && e(t, K(t));
        function X(e, t, n, r) {
            return Y(e, t, q(n), r)
        }
        var J = n(9323);
        function Q(e) {
            let t = null;
            return () => {
                let n = () => {
                    t = null
                };
                return null === t && (t = e, n)
            }
        }
        let ee = Q("dragHorizontal"),
            et = Q("dragVertical");
        function en(e) {
            let t = !1;
            if ("y" === e)
                t = et();
            else if ("x" === e)
                t = ee();
            else {
                let e = ee(),
                    n = et();
                e && n ? t = () => {
                    e(),
                    n()
                } : (e && e(), n && n())
            }
            return t
        }
        function er() {
            let e = en(!0);
            return !e || (e(), !1)
        }
        class ei {
            constructor(e)
            {
                this.isMounted = !1,
                this.node = e
            }
            update() {}
        }
        var eo = n(3831);
        function ea(e, t) {
            let n = "onHover" + (t ? "Start" : "End"),
                r = (r, i) => {
                    if ("touch" === r.type || er())
                        return;
                    let o = e.getProps();
                    e.animationState && o.whileHover && e.animationState.setActive("whileHover", t),
                    o[n] && eo.Wi.update(() => o[n](r, i))
                };
            return X(e.current, "pointer" + (t ? "enter" : "leave"), r, {
                passive: !e.getProps()[n]
            })
        }
        let es = (e, t) => !!t && (e === t || es(e, t.parentElement));
        var el = n(51734);
        function eu(e, t) {
            if (!t)
                return;
            let n = new PointerEvent("pointer" + e);
            t(n, K(n))
        }
        let ec = new WeakMap,
            ed = new WeakMap,
            ef = e => {
                let t = ec.get(e.target);
                t && t(e)
            },
            eh = e => {
                e.forEach(ef)
            },
            ep = {
                some: 0,
                all: 1
            };
        var em = n(91136);
        function ev(e, t) {
            if (!Array.isArray(t))
                return !1;
            let n = t.length;
            if (n !== e.length)
                return !1;
            for (let r = 0; r < n; r++)
                if (t[r] !== e[r])
                    return !1;
            return !0
        }
        var eg = n(71981),
            ey = n(68988),
            eb = n(61005);
        function ew(e, t, n={}) {
            let r = (0, eg.x)(e, t, n.custom),
                {transition: i=e.getDefaultTransition() || {}} = r || {};
            n.transitionOverride && (i = n.transitionOverride);
            let o = r ? () => Promise.all((0, eb.w)(e, r, n)) : () => Promise.resolve(),
                a = e.variantChildren && e.variantChildren.size ? (r=0) => {
                    let {delayChildren: o=0, staggerChildren: a, staggerDirection: s} = i;
                    return function(e, t, n=0, r=0, i=1, o) {
                        let a = [],
                            s = (e.variantChildren.size - 1) * r,
                            l = 1 === i ? (e=0) => e * r : (e=0) => s - e * r;
                        return Array.from(e.variantChildren).sort(ex).forEach((e, r) => {
                            e.notify("AnimationStart", t),
                            a.push(ew(e, t, {
                                ...o,
                                delay: n + l(r)
                            }).then(() => e.notify("AnimationComplete", t)))
                        }), Promise.all(a)
                    }(e, t, o + r, a, s, n)
                } : () => Promise.resolve(),
                {when: s} = i;
            if (!s)
                return Promise.all([o(), a(n.delay)]);
            {
                let [e, t] = "beforeChildren" === s ? [o, a] : [a, o];
                return e().then(() => t())
            }
        }
        function ex(e, t) {
            return e.sortNodePosition(t)
        }
        let eE = [...ey.e].reverse(),
            eP = ey.e.length;
        function eC(e=!1) {
            return {
                isActive: e,
                protectedKeys: {},
                needsAnimating: {},
                prevResolvedValues: {}
            }
        }
        let eS = 0;
        var eR = n(83813),
            eT = n(30309);
        let eM = (e, t) => Math.abs(e - t);
        var eA = n(87699);
        class ek {
            constructor(e, t, {transformPagePoint: n}={})
            {
                if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let e = eO(this.lastMoveEventInfo, this.history),
                        t = null !== this.startEvent,
                        n = function(e, t) {
                            let n = eM(e.x, t.x),
                                r = eM(e.y, t.y);
                            return Math.sqrt(n ** 2 + r ** 2)
                        }(e.offset, {
                            x: 0,
                            y: 0
                        }) >= 3;
                    if (!t && !n)
                        return;
                    let {point: r} = e,
                        {timestamp: i} = eA.w;
                    this.history.push({
                        ...r,
                        timestamp: i
                    });
                    let {onStart: o, onMove: a} = this.handlers;
                    t || (o && o(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent),
                    a && a(this.lastMoveEvent, e)
                }, this.handlePointerMove = (e, t) => {
                    this.lastMoveEvent = e,
                    this.lastMoveEventInfo = eD(t, this.transformPagePoint),
                    eo.Wi.update(this.updatePoint, !0)
                }, this.handlePointerUp = (e, t) => {
                    if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let {onEnd: n, onSessionEnd: r} = this.handlers,
                        i = eO("pointercancel" === e.type ? this.lastMoveEventInfo : eD(t, this.transformPagePoint), this.history);
                    this.startEvent && n && n(e, i),
                    r && r(e, i)
                }, !G(e))
                    return;
                this.handlers = t,
                this.transformPagePoint = n;
                let r = K(e),
                    i = eD(r, this.transformPagePoint),
                    {point: o} = i,
                    {timestamp: a} = eA.w;
                this.history = [{
                    ...o,
                    timestamp: a
                }];
                let {onSessionStart: s} = t;
                s && s(e, eO(i, this.history)),
                this.removeListeners = (0, J.z)(X(window, "pointermove", this.handlePointerMove), X(window, "pointerup", this.handlePointerUp), X(window, "pointercancel", this.handlePointerUp))
            }
            updateHandlers(e)
            {
                this.handlers = e
            }
            end()
            {
                this.removeListeners && this.removeListeners(),
                (0, eo.Pn)(this.updatePoint)
            }
        }
        function eD(e, t) {
            return t ? {
                point: t(e.point)
            } : e
        }
        function eL(e, t) {
            return {
                x: e.x - t.x,
                y: e.y - t.y
            }
        }
        function eO({point: e}, t) {
            return {
                point: e,
                delta: eL(e, eF(t)),
                offset: eL(e, t[0]),
                velocity: function(e, t) {
                    if (e.length < 2)
                        return {
                            x: 0,
                            y: 0
                        };
                    let n = e.length - 1,
                        r = null,
                        i = eF(e);
                    for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > (0, eT.w)(.1)));)
                        n--;
                    if (!r)
                        return {
                            x: 0,
                            y: 0
                        };
                    let o = (0, eT.X)(i.timestamp - r.timestamp);
                    if (0 === o)
                        return {
                            x: 0,
                            y: 0
                        };
                    let a = {
                        x: (i.x - r.x) / o,
                        y: (i.y - r.y) / o
                    };
                    return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
                }(t, 0)
            }
        }
        function eF(e) {
            return e[e.length - 1]
        }
        var eI = n(93427),
            eV = n(31914);
        function e_(e) {
            return e.max - e.min
        }
        function ej(e, t=0, n=.01) {
            return Math.abs(e - t) <= n
        }
        function eN(e, t, n, r=.5) {
            e.origin = r,
            e.originPoint = (0, eV.C)(t.min, t.max, e.origin),
            e.scale = e_(n) / e_(t),
            (ej(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
            e.translate = (0, eV.C)(n.min, n.max, e.origin) - e.originPoint,
            (ej(e.translate) || isNaN(e.translate)) && (e.translate = 0)
        }
        function eB(e, t, n, r) {
            eN(e.x, t.x, n.x, r ? r.originX : void 0),
            eN(e.y, t.y, n.y, r ? r.originY : void 0)
        }
        function eW(e, t, n) {
            e.min = n.min + t.min,
            e.max = e.min + e_(t)
        }
        function e$(e, t, n) {
            e.min = t.min - n.min,
            e.max = e.min + e_(t)
        }
        function ez(e, t, n) {
            e$(e.x, t.x, n.x),
            e$(e.y, t.y, n.y)
        }
        var eH = n(32025);
        function eU(e, t, n) {
            return {
                min: void 0 !== t ? e.min + t : void 0,
                max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0
            }
        }
        function eZ(e, t) {
            let n = t.min - e.min,
                r = t.max - e.max;
            return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
                min: n,
                max: r
            }
        }
        function eY(e, t, n) {
            return {
                min: eG(e, t),
                max: eG(e, n)
            }
        }
        function eG(e, t) {
            return "number" == typeof e ? e : e[t] || 0
        }
        var eK = n(6266);
        function eq(e) {
            return [e("x"), e("y")]
        }
        var eX = n(76077),
            eJ = n(74472),
            eQ = n(81957),
            e0 = n(7043);
        let e1 = new WeakMap;
        class e5 {
            constructor(e)
            {
                this.openGlobalLock = null,
                this.isDragging = !1,
                this.currentDirection = null,
                this.originPoint = {
                    x: 0,
                    y: 0
                },
                this.constraints = !1,
                this.hasMutatedConstraints = !1,
                this.elastic = (0, eK.dO)(),
                this.visualElement = e
            }
            start(e, {snapToCursor: t=!1}={})
            {
                let {presenceContext: n} = this.visualElement;
                if (n && !1 === n.isPresent)
                    return;
                let r = e => {
                        this.stopAnimation(),
                        t && this.snapToCursor(K(e, "page").point)
                    },
                    i = (e, t) => {
                        let {drag: n, dragPropagation: r, onDragStart: i} = this.getProps();
                        if (n && !r && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = en(n), !this.openGlobalLock))
                            return;
                        this.isDragging = !0,
                        this.currentDirection = null,
                        this.resolveConstraints(),
                        this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0),
                        eq(e => {
                            let t = this.getAxisMotionValue(e).get() || 0;
                            if (eQ.aQ.test(t)) {
                                let {projection: n} = this.visualElement;
                                if (n && n.layout) {
                                    let r = n.layout.layoutBox[e];
                                    if (r) {
                                        let e = e_(r);
                                        t = e * (parseFloat(t) / 100)
                                    }
                                }
                            }
                            this.originPoint[e] = t
                        }),
                        i && eo.Wi.update(() => i(e, t), !1, !0);
                        let {animationState: o} = this.visualElement;
                        o && o.setActive("whileDrag", !0)
                    },
                    o = (e, t) => {
                        let {dragPropagation: n, dragDirectionLock: r, onDirectionLock: i, onDrag: o} = this.getProps();
                        if (!n && !this.openGlobalLock)
                            return;
                        let {offset: a} = t;
                        if (r && null === this.currentDirection) {
                            this.currentDirection = function(e, t=10) {
                                let n = null;
                                return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
                            }(a),
                            null !== this.currentDirection && i && i(this.currentDirection);
                            return
                        }
                        this.updateAxis("x", t.point, a),
                        this.updateAxis("y", t.point, a),
                        this.visualElement.render(),
                        o && o(e, t)
                    },
                    a = (e, t) => this.stop(e, t);
                this.panSession = new ek(e, {
                    onSessionStart: r,
                    onStart: i,
                    onMove: o,
                    onSessionEnd: a
                }, {
                    transformPagePoint: this.visualElement.getTransformPagePoint()
                })
            }
            stop(e, t)
            {
                let n = this.isDragging;
                if (this.cancel(), !n)
                    return;
                let {velocity: r} = t;
                this.startAnimation(r);
                let {onDragEnd: i} = this.getProps();
                i && eo.Wi.update(() => i(e, t))
            }
            cancel()
            {
                this.isDragging = !1;
                let {projection: e, animationState: t} = this.visualElement;
                e && (e.isAnimationBlocked = !1),
                this.panSession && this.panSession.end(),
                this.panSession = void 0;
                let {dragPropagation: n} = this.getProps();
                !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null),
                t && t.setActive("whileDrag", !1)
            }
            updateAxis(e, t, n)
            {
                let {drag: r} = this.getProps();
                if (!n || !e3(e, r, this.currentDirection))
                    return;
                let i = this.getAxisMotionValue(e),
                    o = this.originPoint[e] + n[e];
                this.constraints && this.constraints[e] && (o = function(e, {min: t, max: n}, r) {
                    return void 0 !== t && e < t ? e = r ? (0, eV.C)(t, e, r.min) : Math.max(e, t) : void 0 !== n && e > n && (e = r ? (0, eV.C)(n, e, r.max) : Math.min(e, n)), e
                }(o, this.constraints[e], this.elastic[e])),
                i.set(o)
            }
            resolveConstraints()
            {
                let {dragConstraints: e, dragElastic: t} = this.getProps(),
                    {layout: n} = this.visualElement.projection || {},
                    r = this.constraints;
                e && (0, c.I)(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = function(e, {top: t, left: n, bottom: r, right: i}) {
                    return {
                        x: eU(e.x, n, i),
                        y: eU(e.y, t, r)
                    }
                }(n.layoutBox, e) : this.constraints = !1,
                this.elastic = function(e=.35) {
                    return !1 === e ? e = 0 : !0 === e && (e = .35), {
                        x: eY(e, "left", "right"),
                        y: eY(e, "top", "bottom")
                    }
                }(t),
                r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && eq(e => {
                    this.getAxisMotionValue(e) && (this.constraints[e] = function(e, t) {
                        let n = {};
                        return void 0 !== t.min && (n.min = t.min - e.min), void 0 !== t.max && (n.max = t.max - e.min), n
                    }(n.layoutBox[e], this.constraints[e]))
                })
            }
            resolveRefConstraints()
            {
                var e;
                let {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
                if (!t || !(0, c.I)(t))
                    return !1;
                let r = t.current;
                (0, eR.k)(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                let {projection: i} = this.visualElement;
                if (!i || !i.layout)
                    return !1;
                let o = (0, eX.z)(r, i.root, this.visualElement.getTransformPagePoint()),
                    a = {
                        x: eZ((e = i.layout.layoutBox).x, o.x),
                        y: eZ(e.y, o.y)
                    };
                if (n) {
                    let e = n((0, eJ.z2)(a));
                    this.hasMutatedConstraints = !!e,
                    e && (a = (0, eJ.i8)(e))
                }
                return a
            }
            startAnimation(e)
            {
                let {drag: t, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: o, onDragTransitionEnd: a} = this.getProps(),
                    s = this.constraints || {},
                    l = eq(a => {
                        if (!e3(a, t, this.currentDirection))
                            return;
                        let l = s && s[a] || {};
                        o && (l = {
                            min: 0,
                            max: 0
                        });
                        let u = {
                            type: "inertia",
                            velocity: n ? e[a] : 0,
                            bounceStiffness: r ? 200 : 1e6,
                            bounceDamping: r ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...i,
                            ...l
                        };
                        return this.startAxisValueAnimation(a, u)
                    });
                return Promise.all(l).then(a)
            }
            startAxisValueAnimation(e, t)
            {
                let n = this.getAxisMotionValue(e);
                return n.start((0, e0.v)(e, n, 0, t))
            }
            stopAnimation()
            {
                eq(e => this.getAxisMotionValue(e).stop())
            }
            getAxisMotionValue(e)
            {
                let t = "_drag" + e.toUpperCase(),
                    n = this.visualElement.getProps(),
                    r = n[t];
                return r || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
            }
            snapToCursor(e)
            {
                eq(t => {
                    let {drag: n} = this.getProps();
                    if (!e3(t, n, this.currentDirection))
                        return;
                    let {projection: r} = this.visualElement,
                        i = this.getAxisMotionValue(t);
                    if (r && r.layout) {
                        let {min: n, max: o} = r.layout.layoutBox[t];
                        i.set(e[t] - (0, eV.C)(n, o, .5))
                    }
                })
            }
            scalePositionWithinConstraints()
            {
                if (!this.visualElement.current)
                    return;
                let {drag: e, dragConstraints: t} = this.getProps(),
                    {projection: n} = this.visualElement;
                if (!(0, c.I)(t) || !n || !this.constraints)
                    return;
                this.stopAnimation();
                let r = {
                    x: 0,
                    y: 0
                };
                eq(e => {
                    let t = this.getAxisMotionValue(e);
                    if (t) {
                        let n = t.get();
                        r[e] = function(e, t) {
                            let n = .5,
                                r = e_(e),
                                i = e_(t);
                            return i > r ? n = (0, eI.Y)(t.min, t.max - r, e.min) : r > i && (n = (0, eI.Y)(e.min, e.max - i, t.min)), (0, eH.u)(0, 1, n)
                        }({
                            min: n,
                            max: n
                        }, this.constraints[e])
                    }
                });
                let {transformTemplate: i} = this.visualElement.getProps();
                this.visualElement.current.style.transform = i ? i({}, "") : "none",
                n.root && n.root.updateScroll(),
                n.updateLayout(),
                this.resolveConstraints(),
                eq(t => {
                    if (!e3(t, e, null))
                        return;
                    let n = this.getAxisMotionValue(t),
                        {min: i, max: o} = this.constraints[t];
                    n.set((0, eV.C)(i, o, r[t]))
                })
            }
            addListeners()
            {
                if (!this.visualElement.current)
                    return;
                e1.set(this.visualElement, this);
                let e = this.visualElement.current,
                    t = X(e, "pointerdown", e => {
                        let {drag: t, dragListener: n=!0} = this.getProps();
                        t && n && this.start(e)
                    }),
                    n = () => {
                        let {dragConstraints: e} = this.getProps();
                        (0, c.I)(e) && (this.constraints = this.resolveRefConstraints())
                    },
                    {projection: r} = this.visualElement,
                    i = r.addEventListener("measure", n);
                r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
                n();
                let o = Y(window, "resize", () => this.scalePositionWithinConstraints()),
                    a = r.addEventListener("didUpdate", ({delta: e, hasLayoutChanged: t}) => {
                        this.isDragging && t && (eq(t => {
                            let n = this.getAxisMotionValue(t);
                            n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate))
                        }), this.visualElement.render())
                    });
                return () => {
                    o(),
                    t(),
                    i(),
                    a && a()
                }
            }
            getProps()
            {
                let e = this.visualElement.getProps(),
                    {drag: t=!1, dragDirectionLock: n=!1, dragPropagation: r=!1, dragConstraints: i=!1, dragElastic: o=.35, dragMomentum: a=!0} = e;
                return {
                    ...e,
                    drag: t,
                    dragDirectionLock: n,
                    dragPropagation: r,
                    dragConstraints: i,
                    dragElastic: o,
                    dragMomentum: a
                }
            }
        }
        function e3(e, t, n) {
            return (!0 === t || t === e) && (null === n || n === e)
        }
        let e2 = e => (t, n) => {
            e && eo.Wi.update(() => e(t, n))
        };
        function e9(e, t) {
            return t.max === t.min ? 0 : e / (t.max - t.min) * 100
        }
        let e7 = {
            correct: (e, t) => {
                if (!t.target)
                    return e;
                if ("string" == typeof e) {
                    if (!eQ.px.test(e))
                        return e;
                    e = parseFloat(e)
                }
                let n = e9(e, t.target.x),
                    r = e9(e, t.target.y);
                return `${n}% ${r}%`
            }
        };
        var e8 = n(58459),
            e4 = n(89175);
        class e6 extends i.Component {
            componentDidMount()
            {
                let {visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r} = this.props,
                    {projection: i} = e;
                (0, e4.B)(tt),
                i && (t.group && t.group.add(i), n && n.register && r && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
                    this.safeToRemove()
                }), i.setOptions({
                    ...i.options,
                    onExitComplete: () => this.safeToRemove()
                })),
                g.hasEverUpdated = !0
            }
            getSnapshotBeforeUpdate(e)
            {
                let {layoutDependency: t, visualElement: n, drag: r, isPresent: i} = this.props,
                    o = n.projection;
                return o && (o.isPresent = i, r || e.layoutDependency !== t || void 0 === t ? o.willUpdate() : this.safeToRemove(), e.isPresent === i || (i ? o.promote() : o.relegate() || eo.Wi.postRender(() => {
                    let e = o.getStack();
                    e && e.members.length || this.safeToRemove()
                }))), null
            }
            componentDidUpdate()
            {
                let {projection: e} = this.props.visualElement;
                e && (e.root.didUpdate(), !e.currentAnimation && e.isLead() && this.safeToRemove())
            }
            componentWillUnmount()
            {
                let {visualElement: e, layoutGroup: t, switchLayoutGroup: n} = this.props,
                    {projection: r} = e;
                r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r))
            }
            safeToRemove()
            {
                let {safeToRemove: e} = this.props;
                e && e()
            }
            render()
            {
                return null
            }
        }
        function te(e) {
            let [t, n] = function() {
                    let e = (0, i.useContext)(s.O);
                    if (null === e)
                        return [!0, null];
                    let {isPresent: t, onExitComplete: n, register: r} = e,
                        o = (0, i.useId)();
                    (0, i.useEffect)(() => r(o), []);
                    let a = () => n && n(o);
                    return !t && n ? [!1, a] : [!0]
                }(),
                r = (0, i.useContext)(b.p);
            return i.createElement(e6, {
                ...e,
                layoutGroup: r,
                switchLayoutGroup: (0, i.useContext)(w),
                isPresent: t,
                safeToRemove: n
            })
        }
        let tt = {
            borderRadius: {
                ...e7,
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            },
            borderTopLeftRadius: e7,
            borderTopRightRadius: e7,
            borderBottomLeftRadius: e7,
            borderBottomRightRadius: e7,
            boxShadow: {
                correct: (e, {treeScale: t, projectionDelta: n}) => {
                    let r = e8.P.parse(e);
                    if (r.length > 5)
                        return e;
                    let i = e8.P.createTransformer(e),
                        o = "number" != typeof r[0] ? 1 : 0,
                        a = n.x.scale * t.x,
                        s = n.y.scale * t.y;
                    r[0 + o] /= a,
                    r[1 + o] /= s;
                    let l = (0, eV.C)(a, s, .5);
                    return "number" == typeof r[2 + o] && (r[2 + o] /= l), "number" == typeof r[3 + o] && (r[3 + o] /= l), i(r)
                }
            }
        };
        var tn = n(31563),
            tr = n(9651);
        let ti = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
            to = ti.length,
            ta = e => "string" == typeof e ? parseFloat(e) : e,
            ts = e => "number" == typeof e || eQ.px.test(e);
        function tl(e, t) {
            return void 0 !== e[t] ? e[t] : e.borderRadius
        }
        let tu = td(0, .5, tr.Bn),
            tc = td(.5, .95, el.Z);
        function td(e, t, n) {
            return r => r < e ? 0 : r > t ? 1 : n((0, eI.Y)(e, t, r))
        }
        function tf(e, t) {
            e.min = t.min,
            e.max = t.max
        }
        function th(e, t) {
            tf(e.x, t.x),
            tf(e.y, t.y)
        }
        var tp = n(33156);
        function tm(e, t, n, r, i) {
            return e -= t, e = (0, tp.q2)(e, 1 / n, r), void 0 !== i && (e = (0, tp.q2)(e, 1 / i, r)), e
        }
        function tv(e, t, [n, r, i], o, a) {
            !function(e, t=0, n=1, r=.5, i, o=e, a=e) {
                if (eQ.aQ.test(t)) {
                    t = parseFloat(t);
                    let e = (0, eV.C)(a.min, a.max, t / 100);
                    t = e - a.min
                }
                if ("number" != typeof t)
                    return;
                let s = (0, eV.C)(o.min, o.max, r);
                e === o && (s -= t),
                e.min = tm(e.min, t, n, s, i),
                e.max = tm(e.max, t, n, s, i)
            }(e, t[n], t[r], t[i], t.scale, o, a)
        }
        let tg = ["x", "scaleX", "originX"],
            ty = ["y", "scaleY", "originY"];
        function tb(e, t, n, r) {
            tv(e.x, t, tg, n ? n.x : void 0, r ? r.x : void 0),
            tv(e.y, t, ty, n ? n.y : void 0, r ? r.y : void 0)
        }
        var tw = n(99185);
        function tx(e) {
            return 0 === e.translate && 1 === e.scale
        }
        function tE(e) {
            return tx(e.x) && tx(e.y)
        }
        function tP(e, t) {
            return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
        }
        function tC(e) {
            return e_(e.x) / e_(e.y)
        }
        var tS = n(45286);
        class tR {
            constructor()
            {
                this.members = []
            }
            add(e)
            {
                (0, tS.y4)(this.members, e),
                e.scheduleRender()
            }
            remove(e)
            {
                if ((0, tS.cl)(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
                    let e = this.members[this.members.length - 1];
                    e && this.promote(e)
                }
            }
            relegate(e)
            {
                let t;
                let n = this.members.findIndex(t => e === t);
                if (0 === n)
                    return !1;
                for (let e = n; e >= 0; e--) {
                    let n = this.members[e];
                    if (!1 !== n.isPresent) {
                        t = n;
                        break
                    }
                }
                return !!t && (this.promote(t), !0)
            }
            promote(e, t)
            {
                let n = this.lead;
                if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
                    n.instance && n.scheduleRender(),
                    e.scheduleRender(),
                    e.resumeFrom = n,
                    t && (e.resumeFrom.preserveOpacity = !0),
                    n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues),
                    e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
                    let {crossfade: r} = e.options;
                    !1 === r && n.hide()
                }
            }
            exitAnimationComplete()
            {
                this.members.forEach(e => {
                    let {options: t, resumingFrom: n} = e;
                    t.onExitComplete && t.onExitComplete(),
                    n && n.options.onExitComplete && n.options.onExitComplete()
                })
            }
            scheduleRender()
            {
                this.members.forEach(e => {
                    e.instance && e.scheduleRender(!1)
                })
            }
            removeLeadSnapshot()
            {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
        }
        function tT(e, t, n) {
            let r = "",
                i = e.x.translate / t.x,
                o = e.y.translate / t.y;
            if ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `), (1 !== t.x || 1 !== t.y) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
                let {rotate: e, rotateX: t, rotateY: i} = n;
                e && (r += `rotate(${e}deg) `),
                t && (r += `rotateX(${t}deg) `),
                i && (r += `rotateY(${i}deg) `)
            }
            let a = e.x.scale * t.x,
                s = e.y.scale * t.y;
            return (1 !== a || 1 !== s) && (r += `scale(${a}, ${s})`), r || "none"
        }
        var tM = n(65062);
        let tA = (e, t) => e.depth - t.depth;
        class tk {
            constructor()
            {
                this.children = [],
                this.isDirty = !1
            }
            add(e)
            {
                (0, tS.y4)(this.children, e),
                this.isDirty = !0
            }
            remove(e)
            {
                (0, tS.cl)(this.children, e),
                this.isDirty = !0
            }
            forEach(e)
            {
                this.isDirty && this.children.sort(tA),
                this.isDirty = !1,
                this.children.forEach(e)
            }
        }
        var tD = n(19003),
            tL = n(64685);
        let tO = ["", "X", "Y", "Z"],
            tF = 0,
            tI = {
                type: "projectionFrame",
                totalNodes: 0,
                resolvedTargetDeltas: 0,
                recalculatedProjection: 0
            };
        function tV({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
            return class {
                constructor(e, n={}, r=null == t ? void 0 : t())
                {
                    this.id = tF++,
                    this.animationId = 0,
                    this.children = new Set,
                    this.options = {},
                    this.isTreeAnimating = !1,
                    this.isAnimationBlocked = !1,
                    this.isLayoutDirty = !1,
                    this.isProjectionDirty = !1,
                    this.isSharedProjectionDirty = !1,
                    this.isTransformDirty = !1,
                    this.updateManuallyBlocked = !1,
                    this.updateBlockedByResize = !1,
                    this.isUpdating = !1,
                    this.isSVG = !1,
                    this.needsReset = !1,
                    this.shouldResetTransform = !1,
                    this.treeScale = {
                        x: 1,
                        y: 1
                    },
                    this.eventHandlers = new Map,
                    this.potentialNodes = new Map,
                    this.checkUpdateFailed = () => {
                        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                    },
                    this.updateProjection = () => {
                        tI.totalNodes = tI.resolvedTargetDeltas = tI.recalculatedProjection = 0,
                        this.nodes.forEach(tN),
                        this.nodes.forEach(tU),
                        this.nodes.forEach(tZ),
                        this.nodes.forEach(tB),
                        window.MotionDebug && window.MotionDebug.record(tI)
                    },
                    this.hasProjected = !1,
                    this.isVisible = !0,
                    this.animationProgress = 0,
                    this.sharedNodes = new Map,
                    this.elementId = e,
                    this.latestValues = n,
                    this.root = r ? r.root || r : this,
                    this.path = r ? [...r.path, r] : [],
                    this.parent = r,
                    this.depth = r ? r.depth + 1 : 0,
                    e && this.root.registerPotentialNode(e, this);
                    for (let e = 0; e < this.path.length; e++)
                        this.path[e].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new tk)
                }
                addEventListener(e, t)
                {
                    return this.eventHandlers.has(e) || this.eventHandlers.set(e, new tn.L), this.eventHandlers.get(e).add(t)
                }
                notifyListeners(e, ...t)
                {
                    let n = this.eventHandlers.get(e);
                    n && n.notify(...t)
                }
                hasListeners(e)
                {
                    return this.eventHandlers.has(e)
                }
                registerPotentialNode(e, t)
                {
                    this.potentialNodes.set(e, t)
                }
                mount(t, n=!1)
                {
                    if (this.instance)
                        return;
                    this.isSVG = (0, tD.v)(t),
                    this.instance = t;
                    let {layoutId: r, layout: i, visualElement: o} = this.options;
                    if (o && !o.current && o.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), n && (i || r) && (this.isLayoutDirty = !0), e) {
                        let n;
                        let r = () => this.root.updateBlockedByResize = !1;
                        e(t, () => {
                            this.root.updateBlockedByResize = !0,
                            n && n(),
                            n = function(e, t) {
                                let n = performance.now(),
                                    r = ({timestamp: i}) => {
                                        let o = i - n;
                                        o >= t && ((0, eo.Pn)(r), e(o - t))
                                    };
                                return eo.Wi.read(r, !0), () => (0, eo.Pn)(r)
                            }(r, 250),
                            g.hasAnimatedSinceResize && (g.hasAnimatedSinceResize = !1, this.nodes.forEach(tH))
                        })
                    }
                    r && this.root.registerSharedNode(r, this),
                    !1 !== this.options.animate && o && (r || i) && this.addEventListener("didUpdate", ({delta: e, hasLayoutChanged: t, hasRelativeTargetChanged: n, layout: r}) => {
                        if (this.isTreeAnimationBlocked()) {
                            this.target = void 0,
                            this.relativeTarget = void 0;
                            return
                        }
                        let i = this.options.transition || o.getDefaultTransition() || tJ,
                            {onLayoutAnimationStart: a, onLayoutAnimationComplete: s} = o.getProps(),
                            l = !this.targetLayout || !tP(this.targetLayout, r) || n,
                            u = !t && n;
                        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || t && (l || !this.currentAnimation)) {
                            this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0),
                            this.setAnimationOrigin(e, u);
                            let t = {
                                ...(0, tw.ev)(i, "layout"),
                                onPlay: a,
                                onComplete: s
                            };
                            (o.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1),
                            this.startAnimation(t)
                        } else
                            t || 0 !== this.animationProgress || tH(this),
                            this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                        this.targetLayout = r
                    })
                }
                unmount()
                {
                    this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this);
                    let e = this.getStack();
                    e && e.remove(this),
                    this.parent && this.parent.children.delete(this),
                    this.instance = void 0,
                    (0, eo.Pn)(this.updateProjection)
                }
                blockUpdate()
                {
                    this.updateManuallyBlocked = !0
                }
                unblockUpdate()
                {
                    this.updateManuallyBlocked = !1
                }
                isUpdateBlocked()
                {
                    return this.updateManuallyBlocked || this.updateBlockedByResize
                }
                isTreeAnimationBlocked()
                {
                    return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                }
                startUpdate()
                {
                    !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(tY), this.animationId++)
                }
                getTransformTemplate()
                {
                    let {visualElement: e} = this.options;
                    return e && e.getProps().transformTemplate
                }
                willUpdate(e=!0)
                {
                    if (this.root.isUpdateBlocked()) {
                        this.options.onExitComplete && this.options.onExitComplete();
                        return
                    }
                    if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty)
                        return;
                    this.isLayoutDirty = !0;
                    for (let e = 0; e < this.path.length; e++) {
                        let t = this.path[e];
                        t.shouldResetTransform = !0,
                        t.updateScroll("snapshot"),
                        t.options.layoutRoot && t.willUpdate(!1)
                    }
                    let {layoutId: t, layout: n} = this.options;
                    if (void 0 === t && !n)
                        return;
                    let r = this.getTransformTemplate();
                    this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0,
                    this.updateSnapshot(),
                    e && this.notifyListeners("willUpdate")
                }
                didUpdate()
                {
                    let e = this.isUpdateBlocked();
                    if (e) {
                        this.unblockUpdate(),
                        this.clearAllSnapshots(),
                        this.nodes.forEach(t$);
                        return
                    }
                    this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(tQ), this.potentialNodes.clear()), this.nodes.forEach(tz), this.nodes.forEach(t_), this.nodes.forEach(tj), this.clearAllSnapshots(), eo.S6.update.process(eA.w), eo.S6.preRender.process(eA.w), eo.S6.render.process(eA.w))
                }
                clearAllSnapshots()
                {
                    this.nodes.forEach(tW),
                    this.sharedNodes.forEach(tG)
                }
                scheduleUpdateProjection()
                {
                    eo.Wi.preRender(this.updateProjection, !1, !0)
                }
                scheduleCheckAfterUnmount()
                {
                    eo.Wi.postRender(() => {
                        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                    })
                }
                updateSnapshot()
                {
                    !this.snapshot && this.instance && (this.snapshot = this.measure())
                }
                updateLayout()
                {
                    if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                        return;
                    if (this.resumeFrom && !this.resumeFrom.instance)
                        for (let e = 0; e < this.path.length; e++) {
                            let t = this.path[e];
                            t.updateScroll()
                        }
                    let e = this.layout;
                    this.layout = this.measure(!1),
                    this.layoutCorrected = (0, eK.dO)(),
                    this.isLayoutDirty = !1,
                    this.projectionDelta = void 0,
                    this.notifyListeners("measure", this.layout.layoutBox);
                    let {visualElement: t} = this.options;
                    t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0)
                }
                updateScroll(e="measure")
                {
                    let t = !!(this.options.layoutScroll && this.instance);
                    this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1),
                    t && (this.scroll = {
                        animationId: this.root.animationId,
                        phase: e,
                        isRoot: r(this.instance),
                        offset: n(this.instance)
                    })
                }
                resetTransform()
                {
                    if (!i)
                        return;
                    let e = this.isLayoutDirty || this.shouldResetTransform,
                        t = this.projectionDelta && !tE(this.projectionDelta),
                        n = this.getTransformTemplate(),
                        r = n ? n(this.latestValues, "") : void 0,
                        o = r !== this.prevTransformTemplateValue;
                    e && (t || (0, tM.ud)(this.latestValues) || o) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender())
                }
                measure(e=!0)
                {
                    var t;
                    let n = this.measurePageBox(),
                        r = this.removeElementScroll(n);
                    return e && (r = this.removeTransform(r)), t0((t = r).x), t0(t.y), {
                        animationId: this.root.animationId,
                        measuredBox: n,
                        layoutBox: r,
                        latestValues: {},
                        source: this.id
                    }
                }
                measurePageBox()
                {
                    let {visualElement: e} = this.options;
                    if (!e)
                        return (0, eK.dO)();
                    let t = e.measureViewportBox(),
                        {scroll: n} = this.root;
                    return n && ((0, tp.am)(t.x, n.offset.x), (0, tp.am)(t.y, n.offset.y)), t
                }
                removeElementScroll(e)
                {
                    let t = (0, eK.dO)();
                    th(t, e);
                    for (let n = 0; n < this.path.length; n++) {
                        let r = this.path[n],
                            {scroll: i, options: o} = r;
                        if (r !== this.root && i && o.layoutScroll) {
                            if (i.isRoot) {
                                th(t, e);
                                let {scroll: n} = this.root;
                                n && ((0, tp.am)(t.x, -n.offset.x), (0, tp.am)(t.y, -n.offset.y))
                            }
                            (0, tp.am)(t.x, i.offset.x),
                            (0, tp.am)(t.y, i.offset.y)
                        }
                    }
                    return t
                }
                applyTransform(e, t=!1)
                {
                    let n = (0, eK.dO)();
                    th(n, e);
                    for (let e = 0; e < this.path.length; e++) {
                        let r = this.path[e];
                        !t && r.options.layoutScroll && r.scroll && r !== r.root && (0, tp.D2)(n, {
                            x: -r.scroll.offset.x,
                            y: -r.scroll.offset.y
                        }),
                        (0, tM.ud)(r.latestValues) && (0, tp.D2)(n, r.latestValues)
                    }
                    return (0, tM.ud)(this.latestValues) && (0, tp.D2)(n, this.latestValues), n
                }
                removeTransform(e)
                {
                    let t = (0, eK.dO)();
                    th(t, e);
                    for (let e = 0; e < this.path.length; e++) {
                        let n = this.path[e];
                        if (!n.instance || !(0, tM.ud)(n.latestValues))
                            continue;
                        (0, tM.Lj)(n.latestValues) && n.updateSnapshot();
                        let r = (0, eK.dO)(),
                            i = n.measurePageBox();
                        th(r, i),
                        tb(t, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, r)
                    }
                    return (0, tM.ud)(this.latestValues) && tb(t, this.latestValues), t
                }
                setTargetDelta(e)
                {
                    this.targetDelta = e,
                    this.root.scheduleUpdateProjection(),
                    this.isProjectionDirty = !0
                }
                setOptions(e)
                {
                    this.options = {
                        ...this.options,
                        ...e,
                        crossfade: void 0 === e.crossfade || e.crossfade
                    }
                }
                clearMeasurements()
                {
                    this.scroll = void 0,
                    this.layout = void 0,
                    this.snapshot = void 0,
                    this.prevTransformTemplateValue = void 0,
                    this.targetDelta = void 0,
                    this.target = void 0,
                    this.isLayoutDirty = !1
                }
                forceRelativeParentToResolveTarget()
                {
                    this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== eA.w.timestamp && this.relativeParent.resolveTargetDelta(!0)
                }
                resolveTargetDelta(e=!1)
                {
                    var t,
                        n,
                        r,
                        i;
                    let o = this.getLead();
                    this.isProjectionDirty || (this.isProjectionDirty = o.isProjectionDirty),
                    this.isTransformDirty || (this.isTransformDirty = o.isTransformDirty),
                    this.isSharedProjectionDirty || (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
                    let a = !!this.resumingFrom || this !== o,
                        s = !(e || a && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty) || this.attemptToResolveRelativeTarget);
                    if (s)
                        return;
                    let {layout: l, layoutId: u} = this.options;
                    if (this.layout && (l || u)) {
                        if (this.resolvedRelativeTargetAt = eA.w.timestamp, !this.targetDelta && !this.relativeTarget) {
                            let e = this.getClosestProjectingParent();
                            e && e.layout ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, eK.dO)(), this.relativeTargetOrigin = (0, eK.dO)(), ez(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox), th(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                        if (this.relativeTarget || this.targetDelta) {
                            if ((this.target || (this.target = (0, eK.dO)(), this.targetWithTransforms = (0, eK.dO)()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), n = this.target, r = this.relativeTarget, i = this.relativeParent.target, eW(n.x, r.x, i.x), eW(n.y, r.y, i.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : th(this.target, this.layout.layoutBox), (0, tp.o2)(this.target, this.targetDelta)) : th(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                this.attemptToResolveRelativeTarget = !1;
                                let e = this.getClosestProjectingParent();
                                e && !!e.resumingFrom == !!this.resumingFrom && !e.options.layoutScroll && e.target ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, eK.dO)(), this.relativeTargetOrigin = (0, eK.dO)(), ez(this.relativeTargetOrigin, this.target, e.target), th(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            tI.resolvedTargetDeltas++
                        }
                    }
                }
                getClosestProjectingParent()
                {
                    return !this.parent || (0, tM.Lj)(this.parent.latestValues) || (0, tM.D_)(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                }
                isProjecting()
                {
                    return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                }
                calcProjection()
                {
                    var e;
                    let t = this.getLead(),
                        n = !!this.resumingFrom || this !== t,
                        r = !0;
                    if ((this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty)) && (r = !1), n && (this.isSharedProjectionDirty || this.isTransformDirty) && (r = !1), this.resolvedRelativeTargetAt === eA.w.timestamp && (r = !1), r)
                        return;
                    let {layout: i, layoutId: o} = this.options;
                    if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(i || o))
                        return;
                    th(this.layoutCorrected, this.layout.layoutBox),
                    (0, tp.YY)(this.layoutCorrected, this.treeScale, this.path, n);
                    let {target: a} = t;
                    if (!a)
                        return;
                    this.projectionDelta || (this.projectionDelta = (0, eK.wc)(), this.projectionDeltaWithTransform = (0, eK.wc)());
                    let s = this.treeScale.x,
                        l = this.treeScale.y,
                        u = this.projectionTransform;
                    eB(this.projectionDelta, this.layoutCorrected, a, this.latestValues),
                    this.projectionTransform = tT(this.projectionDelta, this.treeScale),
                    (this.projectionTransform !== u || this.treeScale.x !== s || this.treeScale.y !== l) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", a)),
                    tI.recalculatedProjection++
                }
                hide()
                {
                    this.isVisible = !1
                }
                show()
                {
                    this.isVisible = !0
                }
                scheduleRender(e=!0)
                {
                    if (this.options.scheduleRender && this.options.scheduleRender(), e) {
                        let e = this.getStack();
                        e && e.scheduleRender()
                    }
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }
                setAnimationOrigin(e, t=!1)
                {
                    let n;
                    let r = this.snapshot,
                        i = r ? r.latestValues : {},
                        o = {
                            ...this.latestValues
                        },
                        a = (0, eK.wc)();
                    this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    this.attemptToResolveRelativeTarget = !t;
                    let s = (0, eK.dO)(),
                        l = r ? r.source : void 0,
                        u = this.layout ? this.layout.source : void 0,
                        c = l !== u,
                        d = this.getStack(),
                        f = !d || d.members.length <= 1,
                        h = !!(c && !f && !0 === this.options.crossfade && !this.path.some(tX));
                    this.animationProgress = 0,
                    this.mixTargetDelta = t => {
                        var r,
                            l;
                        let u = t / 1e3;
                        tK(a.x, e.x, u),
                        tK(a.y, e.y, u),
                        this.setTargetDelta(a),
                        this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ez(s, this.layout.layoutBox, this.relativeParent.layout.layoutBox), r = this.relativeTarget, l = this.relativeTargetOrigin, tq(r.x, l.x, s.x, u), tq(r.y, l.y, s.y, u), n && tP(this.relativeTarget, n) && (this.isProjectionDirty = !1), n || (n = (0, eK.dO)()), th(n, this.relativeTarget)),
                        c && (this.animationValues = o, function(e, t, n, r, i, o) {
                            i ? (e.opacity = (0, eV.C)(0, void 0 !== n.opacity ? n.opacity : 1, tu(r)), e.opacityExit = (0, eV.C)(void 0 !== t.opacity ? t.opacity : 1, 0, tc(r))) : o && (e.opacity = (0, eV.C)(void 0 !== t.opacity ? t.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, r));
                            for (let i = 0; i < to; i++) {
                                let o = `border${ti[i]}Radius`,
                                    a = tl(t, o),
                                    s = tl(n, o);
                                if (void 0 === a && void 0 === s)
                                    continue;
                                a || (a = 0),
                                s || (s = 0);
                                let l = 0 === a || 0 === s || ts(a) === ts(s);
                                l ? (e[o] = Math.max((0, eV.C)(ta(a), ta(s), r), 0), (eQ.aQ.test(s) || eQ.aQ.test(a)) && (e[o] += "%")) : e[o] = s
                            }
                            (t.rotate || n.rotate) && (e.rotate = (0, eV.C)(t.rotate || 0, n.rotate || 0, r))
                        }(o, i, this.latestValues, u, h, f)),
                        this.root.scheduleUpdateProjection(),
                        this.scheduleRender(),
                        this.animationProgress = u
                    },
                    this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                }
                startAnimation(e)
                {
                    this.notifyListeners("animationStart"),
                    this.currentAnimation && this.currentAnimation.stop(),
                    this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                    this.pendingAnimation && ((0, eo.Pn)(this.pendingAnimation), this.pendingAnimation = void 0),
                    this.pendingAnimation = eo.Wi.update(() => {
                        g.hasAnimatedSinceResize = !0,
                        this.currentAnimation = (0, tL.D)(0, 1e3, {
                            ...e,
                            onUpdate: t => {
                                this.mixTargetDelta(t),
                                e.onUpdate && e.onUpdate(t)
                            },
                            onComplete: () => {
                                e.onComplete && e.onComplete(),
                                this.completeAnimation()
                            }
                        }),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        this.pendingAnimation = void 0
                    })
                }
                completeAnimation()
                {
                    this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                    let e = this.getStack();
                    e && e.exitAnimationComplete(),
                    this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                    this.notifyListeners("animationComplete")
                }
                finishAnimation()
                {
                    this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()),
                    this.completeAnimation()
                }
                applyTransformsToTarget()
                {
                    let e = this.getLead(),
                        {targetWithTransforms: t, target: n, layout: r, latestValues: i} = e;
                    if (t && n && r) {
                        if (this !== e && this.layout && r && t1(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                            n = this.target || (0, eK.dO)();
                            let t = e_(this.layout.layoutBox.x);
                            n.x.min = e.target.x.min,
                            n.x.max = n.x.min + t;
                            let r = e_(this.layout.layoutBox.y);
                            n.y.min = e.target.y.min,
                            n.y.max = n.y.min + r
                        }
                        th(t, n),
                        (0, tp.D2)(t, i),
                        eB(this.projectionDeltaWithTransform, this.layoutCorrected, t, i)
                    }
                }
                registerSharedNode(e, t)
                {
                    this.sharedNodes.has(e) || this.sharedNodes.set(e, new tR);
                    let n = this.sharedNodes.get(e);
                    n.add(t);
                    let r = t.options.initialPromotionConfig;
                    t.promote({
                        transition: r ? r.transition : void 0,
                        preserveFollowOpacity: r && r.shouldPreserveFollowOpacity ? r.shouldPreserveFollowOpacity(t) : void 0
                    })
                }
                isLead()
                {
                    let e = this.getStack();
                    return !e || e.lead === this
                }
                getLead()
                {
                    var e;
                    let {layoutId: t} = this.options;
                    return t && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead) || this
                }
                getPrevLead()
                {
                    var e;
                    let {layoutId: t} = this.options;
                    return t ? null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead : void 0
                }
                getStack()
                {
                    let {layoutId: e} = this.options;
                    if (e)
                        return this.root.sharedNodes.get(e)
                }
                promote({needsReset: e, transition: t, preserveFollowOpacity: n}={})
                {
                    let r = this.getStack();
                    r && r.promote(this, n),
                    e && (this.projectionDelta = void 0, this.needsReset = !0),
                    t && this.setOptions({
                        transition: t
                    })
                }
                relegate()
                {
                    let e = this.getStack();
                    return !!e && e.relegate(this)
                }
                resetRotation()
                {
                    let {visualElement: e} = this.options;
                    if (!e)
                        return;
                    let t = !1,
                        {latestValues: n} = e;
                    if ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (t = !0), !t)
                        return;
                    let r = {};
                    for (let t = 0; t < tO.length; t++) {
                        let i = "rotate" + tO[t];
                        n[i] && (r[i] = n[i], e.setStaticValue(i, 0))
                    }
                    for (let t in e.render(), r)
                        e.setStaticValue(t, r[t]);
                    e.scheduleRender()
                }
                getProjectionStyles(e={})
                {
                    var t,
                        n;
                    let r = {};
                    if (!this.instance || this.isSVG)
                        return r;
                    if (!this.isVisible)
                        return {
                            visibility: "hidden"
                        };
                    r.visibility = "";
                    let i = this.getTransformTemplate();
                    if (this.needsReset)
                        return this.needsReset = !1, r.opacity = "", r.pointerEvents = $(e.pointerEvents) || "", r.transform = i ? i(this.latestValues, "") : "none", r;
                    let o = this.getLead();
                    if (!this.projectionDelta || !this.layout || !o.target) {
                        let t = {};
                        return this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = $(e.pointerEvents) || ""), this.hasProjected && !(0, tM.ud)(this.latestValues) && (t.transform = i ? i({}, "") : "none", this.hasProjected = !1), t
                    }
                    let a = o.animationValues || o.latestValues;
                    this.applyTransformsToTarget(),
                    r.transform = tT(this.projectionDeltaWithTransform, this.treeScale, a),
                    i && (r.transform = i(a, r.transform));
                    let {x: s, y: l} = this.projectionDelta;
                    for (let e in r.transformOrigin = `${100 * s.origin}% ${100 * l.origin}% 0`, o.animationValues ? r.opacity = o === this ? null !== (n = null !== (t = a.opacity) && void 0 !== t ? t : this.latestValues.opacity) && void 0 !== n ? n : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : r.opacity = o === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0, e4.P) {
                        if (void 0 === a[e])
                            continue;
                        let {correct: t, applyTo: n} = e4.P[e],
                            i = "none" === r.transform ? a[e] : t(a[e], o);
                        if (n) {
                            let e = n.length;
                            for (let t = 0; t < e; t++)
                                r[n[t]] = i
                        } else
                            r[e] = i
                    }
                    return this.options.layoutId && (r.pointerEvents = o === this ? $(e.pointerEvents) || "" : "none"), r
                }
                clearSnapshot()
                {
                    this.resumeFrom = this.snapshot = void 0
                }
                resetTree()
                {
                    this.root.nodes.forEach(e => {
                        var t;
                        return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop()
                    }),
                    this.root.nodes.forEach(t$),
                    this.root.sharedNodes.clear()
                }
            }
        }
        function t_(e) {
            e.updateLayout()
        }
        function tj(e) {
            var t;
            let n = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot;
            if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
                let {layoutBox: t, measuredBox: r} = e.layout,
                    {animationType: i} = e.options,
                    o = n.source !== e.layout.source;
                "size" === i ? eq(e => {
                    let r = o ? n.measuredBox[e] : n.layoutBox[e],
                        i = e_(r);
                    r.min = t[e].min,
                    r.max = r.min + i
                }) : t1(i, n.layoutBox, t) && eq(r => {
                    let i = o ? n.measuredBox[r] : n.layoutBox[r],
                        a = e_(t[r]);
                    i.max = i.min + a,
                    e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + a)
                });
                let a = (0, eK.wc)();
                eB(a, t, n.layoutBox);
                let s = (0, eK.wc)();
                o ? eB(s, e.applyTransform(r, !0), n.measuredBox) : eB(s, t, n.layoutBox);
                let l = !tE(a),
                    u = !1;
                if (!e.resumeFrom) {
                    let r = e.getClosestProjectingParent();
                    if (r && !r.resumeFrom) {
                        let {snapshot: i, layout: o} = r;
                        if (i && o) {
                            let a = (0, eK.dO)();
                            ez(a, n.layoutBox, i.layoutBox);
                            let s = (0, eK.dO)();
                            ez(s, t, o.layoutBox),
                            tP(a, s) || (u = !0),
                            r.options.layoutRoot && (e.relativeTarget = s, e.relativeTargetOrigin = a, e.relativeParent = r)
                        }
                    }
                }
                e.notifyListeners("didUpdate", {
                    layout: t,
                    snapshot: n,
                    delta: s,
                    layoutDelta: a,
                    hasLayoutChanged: l,
                    hasRelativeTargetChanged: u
                })
            } else if (e.isLead()) {
                let {onExitComplete: t} = e.options;
                t && t()
            }
            e.options.transition = void 0
        }
        function tN(e) {
            tI.totalNodes++,
            e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
        }
        function tB(e) {
            e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
        }
        function tW(e) {
            e.clearSnapshot()
        }
        function t$(e) {
            e.clearMeasurements()
        }
        function tz(e) {
            let {visualElement: t} = e.options;
            t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
            e.resetTransform()
        }
        function tH(e) {
            e.finishAnimation(),
            e.targetDelta = e.relativeTarget = e.target = void 0
        }
        function tU(e) {
            e.resolveTargetDelta()
        }
        function tZ(e) {
            e.calcProjection()
        }
        function tY(e) {
            e.resetRotation()
        }
        function tG(e) {
            e.removeLeadSnapshot()
        }
        function tK(e, t, n) {
            e.translate = (0, eV.C)(t.translate, 0, n),
            e.scale = (0, eV.C)(t.scale, 1, n),
            e.origin = t.origin,
            e.originPoint = t.originPoint
        }
        function tq(e, t, n, r) {
            e.min = (0, eV.C)(t.min, n.min, r),
            e.max = (0, eV.C)(t.max, n.max, r)
        }
        function tX(e) {
            return e.animationValues && void 0 !== e.animationValues.opacityExit
        }
        let tJ = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        };
        function tQ(e, t) {
            let n = e.root;
            for (let t = e.path.length - 1; t >= 0; t--)
                if (e.path[t].instance) {
                    n = e.path[t];
                    break
                }
            let r = n && n !== e.root ? n.instance : document,
                i = r.querySelector(`[data-projection-id="${t}"]`);
            i && e.mount(i, !0)
        }
        function t0(e) {
            e.min = Math.round(e.min),
            e.max = Math.round(e.max)
        }
        function t1(e, t, n) {
            return "position" === e || "preserve-aspect" === e && !ej(tC(t), tC(n), .2)
        }
        let t5 = tV({
                attachResizeListener: (e, t) => Y(e, "resize", t),
                measureScroll: () => ({
                    x: document.documentElement.scrollLeft || document.body.scrollLeft,
                    y: document.documentElement.scrollTop || document.body.scrollTop
                }),
                checkIsScrollRoot: () => !0
            }),
            t3 = {
                current: void 0
            },
            t2 = tV({
                measureScroll: e => ({
                    x: e.scrollLeft,
                    y: e.scrollTop
                }),
                defaultParent: () => {
                    if (!t3.current) {
                        let e = new t5(0, {});
                        e.mount(window),
                        e.setOptions({
                            layoutScroll: !0
                        }),
                        t3.current = e
                    }
                    return t3.current
                },
                resetTransform: (e, t) => {
                    e.style.transform = void 0 !== t ? t : "none"
                },
                checkIsScrollRoot: e => "fixed" === window.getComputedStyle(e).position
            });
        var t9 = n(92380),
            t7 = n(7561);
        let t8 = (e, t) => P(e) ? new t7.e(t, {
                enableHardwareAcceleration: !1
            }) : new t9.W(t, {
                enableHardwareAcceleration: !0
            }),
            t4 = {
                animation: {
                    Feature: class  extends ei{
                        constructor(e)
                        {
                            super(e),
                            e.animationState || (e.animationState = function(e) {
                                let t = t => Promise.all(t.map(({animation: t, options: n}) => (function(e, t, n={}) {
                                        let r;
                                        if (e.notify("AnimationStart", t), Array.isArray(t)) {
                                            let i = t.map(t => ew(e, t, n));
                                            r = Promise.all(i)
                                        } else if ("string" == typeof t)
                                            r = ew(e, t, n);
                                        else {
                                            let i = "function" == typeof t ? (0, eg.x)(e, t, n.custom) : t;
                                            r = Promise.all((0, eb.w)(e, i, n))
                                        }
                                        return r.then(() => e.notify("AnimationComplete", t))
                                    })(e, t, n))),
                                    n = {
                                        animate: eC(!0),
                                        whileInView: eC(),
                                        whileHover: eC(),
                                        whileTap: eC(),
                                        whileDrag: eC(),
                                        whileFocus: eC(),
                                        exit: eC()
                                    },
                                    r = !0,
                                    i = (t, n) => {
                                        let r = (0, eg.x)(e, n);
                                        if (r) {
                                            let {transition: e, transitionEnd: n, ...i} = r;
                                            t = {
                                                ...t,
                                                ...i,
                                                ...n
                                            }
                                        }
                                        return t
                                    };
                                function o(o, a) {
                                    let s = e.getProps(),
                                        l = e.getVariantContext(!0) || {},
                                        u = [],
                                        c = new Set,
                                        f = {},
                                        h = 1 / 0;
                                    for (let t = 0; t < eP; t++) {
                                        var p;
                                        let m = eE[t],
                                            v = n[m],
                                            g = void 0 !== s[m] ? s[m] : l[m],
                                            y = (0, d.$)(g),
                                            b = m === a ? v.isActive : null;
                                        !1 === b && (h = t);
                                        let w = g === l[m] && g !== s[m] && y;
                                        if (w && r && e.manuallyAnimateOnMount && (w = !1), v.protectedKeys = {
                                            ...f
                                        }, !v.isActive && null === b || !g && !v.prevProp || (0, N.H)(g) || "boolean" == typeof g)
                                            continue;
                                        let x = (p = v.prevProp, "string" == typeof g ? g !== p : !!Array.isArray(g) && !ev(g, p)),
                                            E = x || m === a && v.isActive && !w && y || t > h && y,
                                            P = Array.isArray(g) ? g : [g],
                                            C = P.reduce(i, {});
                                        !1 === b && (C = {});
                                        let {prevResolvedValues: S={}} = v,
                                            R = {
                                                ...S,
                                                ...C
                                            },
                                            T = e => {
                                                E = !0,
                                                c.delete(e),
                                                v.needsAnimating[e] = !0
                                            };
                                        for (let e in R) {
                                            let t = C[e],
                                                n = S[e];
                                            f.hasOwnProperty(e) || (t !== n ? (0, em.C)(t) && (0, em.C)(n) ? !ev(t, n) || x ? T(e) : v.protectedKeys[e] = !0 : void 0 !== t ? T(e) : c.add(e) : void 0 !== t && c.has(e) ? T(e) : v.protectedKeys[e] = !0)
                                        }
                                        v.prevProp = g,
                                        v.prevResolvedValues = C,
                                        v.isActive && (f = {
                                            ...f,
                                            ...C
                                        }),
                                        r && e.blockInitialAnimation && (E = !1),
                                        E && !w && u.push(...P.map(e => ({
                                            animation: e,
                                            options: {
                                                type: m,
                                                ...o
                                            }
                                        })))
                                    }
                                    if (c.size) {
                                        let t = {};
                                        c.forEach(n => {
                                            let r = e.getBaseTarget(n);
                                            void 0 !== r && (t[n] = r)
                                        }),
                                        u.push({
                                            animation: t
                                        })
                                    }
                                    let m = !!u.length;
                                    return r && !1 === s.initial && !e.manuallyAnimateOnMount && (m = !1), r = !1, m ? t(u) : Promise.resolve()
                                }
                                return {
                                    animateChanges: o,
                                    setActive: function(t, r, i) {
                                        var a;
                                        if (n[t].isActive === r)
                                            return Promise.resolve();
                                        null === (a = e.variantChildren) || void 0 === a || a.forEach(e => {
                                            var n;
                                            return null === (n = e.animationState) || void 0 === n ? void 0 : n.setActive(t, r)
                                        }),
                                        n[t].isActive = r;
                                        let s = o(i, t);
                                        for (let e in n)
                                            n[e].protectedKeys = {};
                                        return s
                                    },
                                    setAnimateFunction: function(n) {
                                        t = n(e)
                                    },
                                    getState: () => n
                                }
                            }(e))
                        }
                        updateAnimationControlsSubscription()
                        {
                            let {animate: e} = this.node.getProps();
                            this.unmount(),
                            (0, N.H)(e) && (this.unmount = e.subscribe(this.node))
                        }
                        mount()
                        {
                            this.updateAnimationControlsSubscription()
                        }
                        update()
                        {
                            let {animate: e} = this.node.getProps(),
                                {animate: t} = this.node.prevProps || {};
                            e !== t && this.updateAnimationControlsSubscription()
                        }
                        unmount() {}
                    }
                },
                exit: {
                    Feature: class  extends ei{
                        constructor()
                        {
                            super(...arguments),
                            this.id = eS++
                        }
                        update()
                        {
                            if (!this.node.presenceContext)
                                return;
                            let {isPresent: e, onExitComplete: t, custom: n} = this.node.presenceContext,
                                {isPresent: r} = this.node.prevPresenceContext || {};
                            if (!this.node.animationState || e === r)
                                return;
                            let i = this.node.animationState.setActive("exit", !e, {
                                custom: null != n ? n : this.node.getProps().custom
                            });
                            t && !e && i.then(() => t(this.id))
                        }
                        mount()
                        {
                            let {register: e} = this.node.presenceContext || {};
                            e && (this.unmount = e(this.id))
                        }
                        unmount() {}
                    }
                },
                inView: {
                    Feature: class  extends ei{
                        constructor()
                        {
                            super(...arguments),
                            this.hasEnteredView = !1,
                            this.isInView = !1
                        }
                        startObserver()
                        {
                            this.unmount();
                            let {viewport: e={}} = this.node.getProps(),
                                {root: t, margin: n, amount: r="some", once: i} = e,
                                o = {
                                    root: t ? t.current : void 0,
                                    rootMargin: n,
                                    threshold: "number" == typeof r ? r : ep[r]
                                },
                                a = e => {
                                    let {isIntersecting: t} = e;
                                    if (this.isInView === t || (this.isInView = t, i && !t && this.hasEnteredView))
                                        return;
                                    t && (this.hasEnteredView = !0),
                                    this.node.animationState && this.node.animationState.setActive("whileInView", t);
                                    let {onViewportEnter: n, onViewportLeave: r} = this.node.getProps(),
                                        o = t ? n : r;
                                    o && o(e)
                                };
                            return function(e, t, n) {
                                let r = function({root: e, ...t}) {
                                    let n = e || document;
                                    ed.has(n) || ed.set(n, {});
                                    let r = ed.get(n),
                                        i = JSON.stringify(t);
                                    return r[i] || (r[i] = new IntersectionObserver(eh, {
                                        root: e,
                                        ...t
                                    })), r[i]
                                }(t);
                                return ec.set(e, n), r.observe(e), () => {
                                    ec.delete(e),
                                    r.unobserve(e)
                                }
                            }(this.node.current, o, a)
                        }
                        mount()
                        {
                            this.startObserver()
                        }
                        update()
                        {
                            if ("undefined" == typeof IntersectionObserver)
                                return;
                            let {props: e, prevProps: t} = this.node,
                                n = ["amount", "margin", "root"].some(function({viewport: e={}}, {viewport: t={}}={}) {
                                    return n => e[n] !== t[n]
                                }(e, t));
                            n && this.startObserver()
                        }
                        unmount() {}
                    }
                },
                tap: {
                    Feature: class  extends ei{
                        constructor()
                        {
                            super(...arguments),
                            this.removeStartListeners = el.Z,
                            this.removeEndListeners = el.Z,
                            this.removeAccessibleListeners = el.Z,
                            this.startPointerPress = (e, t) => {
                                if (this.removeEndListeners(), this.isPressing)
                                    return;
                                let n = this.node.getProps(),
                                    r = (e, t) => {
                                        if (!this.checkPressEnd())
                                            return;
                                        let {onTap: n, onTapCancel: r} = this.node.getProps();
                                        eo.Wi.update(() => {
                                            es(this.node.current, e.target) ? n && n(e, t) : r && r(e, t)
                                        })
                                    },
                                    i = X(window, "pointerup", r, {
                                        passive: !(n.onTap || n.onPointerUp)
                                    }),
                                    o = X(window, "pointercancel", (e, t) => this.cancelPress(e, t), {
                                        passive: !(n.onTapCancel || n.onPointerCancel)
                                    });
                                this.removeEndListeners = (0, J.z)(i, o),
                                this.startPress(e, t)
                            },
                            this.startAccessiblePress = () => {
                                let e = e => {
                                        if ("Enter" !== e.key || this.isPressing)
                                            return;
                                        let t = e => {
                                            "Enter" === e.key && this.checkPressEnd() && eu("up", (e, t) => {
                                                let {onTap: n} = this.node.getProps();
                                                n && eo.Wi.update(() => n(e, t))
                                            })
                                        };
                                        this.removeEndListeners(),
                                        this.removeEndListeners = Y(this.node.current, "keyup", t),
                                        eu("down", (e, t) => {
                                            this.startPress(e, t)
                                        })
                                    },
                                    t = Y(this.node.current, "keydown", e),
                                    n = () => {
                                        this.isPressing && eu("cancel", (e, t) => this.cancelPress(e, t))
                                    },
                                    r = Y(this.node.current, "blur", n);
                                this.removeAccessibleListeners = (0, J.z)(t, r)
                            }
                        }
                        startPress(e, t)
                        {
                            this.isPressing = !0;
                            let {onTapStart: n, whileTap: r} = this.node.getProps();
                            r && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
                            n && eo.Wi.update(() => n(e, t))
                        }
                        checkPressEnd()
                        {
                            this.removeEndListeners(),
                            this.isPressing = !1;
                            let e = this.node.getProps();
                            return e.whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !er()
                        }
                        cancelPress(e, t)
                        {
                            if (!this.checkPressEnd())
                                return;
                            let {onTapCancel: n} = this.node.getProps();
                            n && eo.Wi.update(() => n(e, t))
                        }
                        mount()
                        {
                            let e = this.node.getProps(),
                                t = X(this.node.current, "pointerdown", this.startPointerPress, {
                                    passive: !(e.onTapStart || e.onPointerStart)
                                }),
                                n = Y(this.node.current, "focus", this.startAccessiblePress);
                            this.removeStartListeners = (0, J.z)(t, n)
                        }
                        unmount()
                        {
                            this.removeStartListeners(),
                            this.removeEndListeners(),
                            this.removeAccessibleListeners()
                        }
                    }
                },
                focus: {
                    Feature: class  extends ei{
                        constructor()
                        {
                            super(...arguments),
                            this.isActive = !1
                        }
                        onFocus()
                        {
                            let e = !1;
                            try {
                                e = this.node.current.matches(":focus-visible")
                            } catch (t) {
                                e = !0
                            }
                            e && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                        }
                        onBlur()
                        {
                            this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                        }
                        mount()
                        {
                            this.unmount = (0, J.z)(Y(this.node.current, "focus", () => this.onFocus()), Y(this.node.current, "blur", () => this.onBlur()))
                        }
                        unmount() {}
                    }
                },
                hover: {
                    Feature: class  extends ei{
                        mount()
                        {
                            this.unmount = (0, J.z)(ea(this.node, !0), ea(this.node, !1))
                        }
                        unmount() {}
                    }
                },
                pan: {
                    Feature: class  extends ei{
                        constructor()
                        {
                            super(...arguments),
                            this.removePointerDownListener = el.Z
                        }
                        onPointerDown(e)
                        {
                            this.session = new ek(e, this.createPanHandlers(), {
                                transformPagePoint: this.node.getTransformPagePoint()
                            })
                        }
                        createPanHandlers()
                        {
                            let {onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r} = this.node.getProps();
                            return {
                                onSessionStart: e2(e),
                                onStart: e2(t),
                                onMove: n,
                                onEnd: (e, t) => {
                                    delete this.session,
                                    r && eo.Wi.update(() => r(e, t))
                                }
                            }
                        }
                        mount()
                        {
                            this.removePointerDownListener = X(this.node.current, "pointerdown", e => this.onPointerDown(e))
                        }
                        update()
                        {
                            this.session && this.session.updateHandlers(this.createPanHandlers())
                        }
                        unmount()
                        {
                            this.removePointerDownListener(),
                            this.session && this.session.end()
                        }
                    }
                },
                drag: {
                    Feature: class  extends ei{
                        constructor(e)
                        {
                            super(e),
                            this.removeGroupControls = el.Z,
                            this.removeListeners = el.Z,
                            this.controls = new e5(e)
                        }
                        mount()
                        {
                            let {dragControls: e} = this.node.getProps();
                            e && (this.removeGroupControls = e.subscribe(this.controls)),
                            this.removeListeners = this.controls.addListeners() || el.Z
                        }
                        unmount()
                        {
                            this.removeGroupControls(),
                            this.removeListeners()
                        }
                    }
                    ,
                    ProjectionNode: t2,
                    MeasureLayout: te
                },
                layout: {
                    ProjectionNode: t2,
                    MeasureLayout: te
                }
            },
            t6 = function(e) {
                function t(t, n={}) {
                    return function({preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: E}) {
                        e && function(e) {
                            for (let t in e)
                                p.A[t] = {
                                    ...p.A[t],
                                    ...e[t]
                                }
                        }(e);
                        let P = (0, i.forwardRef)(function(p, x) {
                            var P,
                                C;
                            let S;
                            let R = {
                                    ...(0, i.useContext)(o._),
                                    ...p,
                                    layoutId: function({layoutId: e}) {
                                        let t = (0, i.useContext)(b.p).id;
                                        return t && void 0 !== e ? t + "-" + e : e
                                    }(p)
                                },
                                {isStatic: T} = R,
                                M = function(e) {
                                    let {initial: t, animate: n} = function(e, t) {
                                        if ((0, f.G)(e)) {
                                            let {initial: t, animate: n} = e;
                                            return {
                                                initial: !1 === t || (0, d.$)(t) ? t : void 0,
                                                animate: (0, d.$)(n) ? n : void 0
                                            }
                                        }
                                        return !1 !== e.inherit ? t : {}
                                    }(e, (0, i.useContext)(a));
                                    return (0, i.useMemo)(() => ({
                                        initial: t,
                                        animate: n
                                    }), [h(t), h(n)])
                                }(p),
                                A = T ? void 0 : (0, v.h)(() => {
                                    if (g.hasEverUpdated)
                                        return y++
                                }),
                                k = r(p, T);
                            if (!T && m.j) {
                                M.visualElement = function(e, t, n, r) {
                                    let {visualElement: c} = (0, i.useContext)(a),
                                        d = (0, i.useContext)(u),
                                        f = (0, i.useContext)(s.O),
                                        h = (0, i.useContext)(o._).reducedMotion,
                                        p = (0, i.useRef)();
                                    r = r || d.renderer,
                                    !p.current && r && (p.current = r(e, {
                                        visualState: t,
                                        parent: c,
                                        props: n,
                                        presenceContext: f,
                                        blockInitialAnimation: !!f && !1 === f.initial,
                                        reducedMotionConfig: h
                                    }));
                                    let m = p.current;
                                    (0, i.useInsertionEffect)(() => {
                                        m && m.update(n, f)
                                    }),
                                    (0, l.L)(() => {
                                        m && m.render()
                                    }),
                                    (0, i.useEffect)(() => {
                                        m && m.updateFeatures()
                                    });
                                    let v = window.HandoffAppearAnimations ? l.L : i.useEffect;
                                    return v(() => {
                                        m && m.animationState && m.animationState.animateChanges()
                                    }), m
                                }(E, k, R, t);
                                let n = (0, i.useContext)(w),
                                    r = (0, i.useContext)(u).strict;
                                M.visualElement && (S = M.visualElement.loadFeatures(R, r, e, A, n))
                            }
                            return i.createElement(a.Provider, {
                                value: M
                            }, S && M.visualElement ? i.createElement(S, {
                                visualElement: M.visualElement,
                                ...R
                            }) : null, n(E, p, A, (P = M.visualElement, C = x, (0, i.useCallback)(e => {
                                e && k.mount && k.mount(e),
                                P && (e ? P.mount(e) : P.unmount()),
                                C && ("function" == typeof C ? C(e) : (0, c.I)(C) && (C.current = e))
                            }, [P])), k, T, M.visualElement))
                        });
                        return P[x] = E, P
                    }(e(t, n))
                }
                if ("undefined" == typeof Proxy)
                    return t;
                let n = new Map;
                return new Proxy(t, {
                    get: (e, r) => (n.has(r) || n.set(r, t(r)), n.get(r))
                })
            }((e, t) => (function(e, {forwardMotionProps: t=!1}, n, r) {
                let o = P(e) ? H : Z;
                return {
                    ...o,
                    preloadedFeatures: n,
                    useRender: function(e=!1) {
                        let t = (t, n, r, o, {latestValues: a}, s) => {
                            let l = P(t) ? V : A,
                                u = l(n, a, s, t),
                                c = function(e, t, n) {
                                    let r = {};
                                    for (let i in e)
                                        ("values" !== i || "object" != typeof e.values) && (L(i) || !0 === n && D(i) || !t && !D(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
                                    return r
                                }(n, "string" == typeof t, e),
                                d = {
                                    ...c,
                                    ...u,
                                    ref: o
                                },
                                {children: f} = n,
                                h = (0, i.useMemo)(() => (0, S.i)(f) ? f.get() : f, [f]);
                            return r && (d["data-projection-id"] = r), (0, i.createElement)(t, {
                                ...d,
                                children: h
                            })
                        };
                        return t
                    }(t),
                    createVisualElement: r,
                    Component: e
                }
            })(e, t, t4, t8))
    },
    80359: function(e, t, n) {
        "use strict";
        n.d(t, {
            D: function() {
                return r
            }
        });
        let r = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    },
    29858: function(e, t, n) {
        "use strict";
        n.d(t, {
            Xp: function() {
                return a
            },
            f9: function() {
                return i
            },
            tm: function() {
                return o
            }
        });
        let r = e => t => "string" == typeof t && t.startsWith(e),
            i = r("--"),
            o = r("var(--"),
            a = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g
    },
    19003: function(e, t, n) {
        "use strict";
        function r(e) {
            return e instanceof SVGElement && "svg" !== e.tagName
        }
        n.d(t, {
            v: function() {
                return r
            }
        })
    },
    70181: function(e, t, n) {
        "use strict";
        n.d(t, {
            T: function() {
                return a
            }
        });
        var r = n(58459),
            i = n(73580),
            o = n(24240);
        function a(e, t) {
            let n = (0, o.A)(e);
            return n !== i.h && (n = r.P), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
        }
    },
    24240: function(e, t, n) {
        "use strict";
        n.d(t, {
            A: function() {
                return s
            }
        });
        var r = n(72202),
            i = n(73580),
            o = n(46233);
        let a = {
                ...o.j,
                color: r.$,
                backgroundColor: r.$,
                outlineColor: r.$,
                fill: r.$,
                stroke: r.$,
                borderColor: r.$,
                borderTopColor: r.$,
                borderRightColor: r.$,
                borderBottomColor: r.$,
                borderLeftColor: r.$,
                filter: i.h,
                WebkitFilter: i.h
            },
            s = e => a[e]
    },
    71707: function(e, t, n) {
        "use strict";
        n.d(t, {
            $: function() {
                return a
            },
            C: function() {
                return s
            }
        });
        var r = n(97932),
            i = n(81957),
            o = n(88959);
        let a = [r.Rx, i.px, i.aQ, i.RW, i.vw, i.vh, {
                test: e => "auto" === e,
                parse: e => e
            }],
            s = e => a.find((0, o.l)(e))
    },
    46233: function(e, t, n) {
        "use strict";
        n.d(t, {
            j: function() {
                return a
            }
        });
        var r = n(97932),
            i = n(81957);
        let o = {
                ...r.Rx,
                transform: Math.round
            },
            a = {
                borderWidth: i.px,
                borderTopWidth: i.px,
                borderRightWidth: i.px,
                borderBottomWidth: i.px,
                borderLeftWidth: i.px,
                borderRadius: i.px,
                radius: i.px,
                borderTopLeftRadius: i.px,
                borderTopRightRadius: i.px,
                borderBottomRightRadius: i.px,
                borderBottomLeftRadius: i.px,
                width: i.px,
                maxWidth: i.px,
                height: i.px,
                maxHeight: i.px,
                size: i.px,
                top: i.px,
                right: i.px,
                bottom: i.px,
                left: i.px,
                padding: i.px,
                paddingTop: i.px,
                paddingRight: i.px,
                paddingBottom: i.px,
                paddingLeft: i.px,
                margin: i.px,
                marginTop: i.px,
                marginRight: i.px,
                marginBottom: i.px,
                marginLeft: i.px,
                rotate: i.RW,
                rotateX: i.RW,
                rotateY: i.RW,
                rotateZ: i.RW,
                scale: r.bA,
                scaleX: r.bA,
                scaleY: r.bA,
                scaleZ: r.bA,
                skew: i.RW,
                skewX: i.RW,
                skewY: i.RW,
                distance: i.px,
                translateX: i.px,
                translateY: i.px,
                translateZ: i.px,
                x: i.px,
                y: i.px,
                z: i.px,
                perspective: i.px,
                transformPerspective: i.px,
                opacity: r.Fq,
                originX: i.$C,
                originY: i.$C,
                originZ: i.px,
                zIndex: o,
                fillOpacity: r.Fq,
                strokeOpacity: r.Fq,
                numOctaves: o
            }
    },
    88959: function(e, t, n) {
        "use strict";
        n.d(t, {
            l: function() {
                return r
            }
        });
        let r = e => t => t.test(e)
    },
    92380: function(e, t, n) {
        "use strict";
        n.d(t, {
            W: function() {
                return f
            }
        });
        var r = n(66428),
            i = n(29858),
            o = n(71863),
            a = n(89716),
            s = n(1155),
            l = n(24240),
            u = n(76077),
            c = n(91385),
            d = n(79237);
        class f extends c.J {
            readValueFromInstance(e, t)
            {
                if (o.G.has(t)) {
                    let e = (0, l.A)(t);
                    return e && e.default || 0
                }
                {
                    let n = window.getComputedStyle(e),
                        r = ((0, i.f9)(t) ? n.getPropertyValue(t) : n[t]) || 0;
                    return "string" == typeof r ? r.trim() : r
                }
            }
            measureInstanceViewportBox(e, {transformPagePoint: t})
            {
                return (0, u.J)(e, t)
            }
            build(e, t, n, i)
            {
                (0, r.r)(e, t, n, i.transformTemplate)
            }
            scrapeMotionValuesFromProps(e, t)
            {
                return (0, a.U)(e, t)
            }
            handleChildMotionValue()
            {
                this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                let {children: e} = this.props;
                (0, d.i)(e) && (this.childSubscription = e.on("change", e => {
                    this.current && (this.current.textContent = `${e}`)
                }))
            }
            renderInstance(e, t, n, r)
            {
                (0, s.N)(e, t, n, r)
            }
        }
    },
    66428: function(e, t, n) {
        "use strict";
        n.d(t, {
            r: function() {
                return u
            }
        });
        var r = n(71863);
        let i = {
                x: "translateX",
                y: "translateY",
                z: "translateZ",
                transformPerspective: "perspective"
            },
            o = r._.length;
        var a = n(29858);
        let s = (e, t) => t && "number" == typeof e ? t.transform(e) : e;
        var l = n(46233);
        function u(e, t, n, u) {
            let {style: c, vars: d, transform: f, transformOrigin: h} = e,
                p = !1,
                m = !1,
                v = !0;
            for (let e in t) {
                let n = t[e];
                if ((0, a.f9)(e)) {
                    d[e] = n;
                    continue
                }
                let i = l.j[e],
                    o = s(n, i);
                if (r.G.has(e)) {
                    if (p = !0, f[e] = o, !v)
                        continue;
                    n !== (i.default || 0) && (v = !1)
                } else
                    e.startsWith("origin") ? (m = !0, h[e] = o) : c[e] = o
            }
            if (!t.transform && (p || u ? c.transform = function(e, {enableHardwareAcceleration: t=!0, allowTransformNone: n=!0}, a, s) {
                let l = "";
                for (let t = 0; t < o; t++) {
                    let n = r._[t];
                    if (void 0 !== e[n]) {
                        let t = i[n] || n;
                        l += `${t}(${e[n]}) `
                    }
                }
                return t && !e.z && (l += "translateZ(0)"), l = l.trim(), s ? l = s(e, a ? "" : l) : n && a && (l = "none"), l
            }(e.transform, n, v, u) : c.transform && (c.transform = "none")), m) {
                let {originX: e="50%", originY: t="50%", originZ: n=0} = h;
                c.transformOrigin = `${e} ${t} ${n}`
            }
        }
    },
    1155: function(e, t, n) {
        "use strict";
        function r(e, {style: t, vars: n}, r, i) {
            for (let o in Object.assign(e.style, t, i && i.getProjectionStyles(r)), n)
                e.style.setProperty(o, n[o])
        }
        n.d(t, {
            N: function() {
                return r
            }
        })
    },
    89716: function(e, t, n) {
        "use strict";
        n.d(t, {
            U: function() {
                return o
            }
        });
        var r = n(55287),
            i = n(79237);
        function o(e, t) {
            let {style: n} = e,
                o = {};
            for (let a in n)
                ((0, i.i)(n[a]) || t.style && (0, i.i)(t.style[a]) || (0, r.j)(a, e)) && (o[a] = n[a]);
            return o
        }
    },
    71863: function(e, t, n) {
        "use strict";
        n.d(t, {
            G: function() {
                return i
            },
            _: function() {
                return r
            }
        });
        let r = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
            i = new Set(r)
    },
    30124: function(e, t, n) {
        "use strict";
        n.d(t, {
            R: function() {
                return r
            }
        });
        let r = new WeakMap
    },
    7561: function(e, t, n) {
        "use strict";
        n.d(t, {
            e: function() {
                return h
            }
        });
        var r = n(37116),
            i = n(91385),
            o = n(55263),
            a = n(80359),
            s = n(29262),
            l = n(71863),
            u = n(35027),
            c = n(24240),
            d = n(6266),
            f = n(58734);
        class h extends i.J {
            constructor()
            {
                super(...arguments),
                this.isSVGTag = !1
            }
            getBaseTargetFromProps(e, t)
            {
                return e[t]
            }
            readValueFromInstance(e, t)
            {
                if (l.G.has(t)) {
                    let e = (0, c.A)(t);
                    return e && e.default || 0
                }
                return t = s.s.has(t) ? t : (0, a.D)(t), e.getAttribute(t)
            }
            measureInstanceViewportBox()
            {
                return (0, d.dO)()
            }
            scrapeMotionValuesFromProps(e, t)
            {
                return (0, r.U)(e, t)
            }
            build(e, t, n, r)
            {
                (0, o.i)(e, t, n, this.isSVGTag, r.transformTemplate)
            }
            renderInstance(e, t, n, r)
            {
                (0, u.K)(e, t, n, r)
            }
            mount(e)
            {
                this.isSVGTag = (0, f.a)(e.tagName),
                super.mount(e)
            }
        }
    },
    55263: function(e, t, n) {
        "use strict";
        n.d(t, {
            i: function() {
                return l
            }
        });
        var r = n(66428),
            i = n(81957);
        function o(e, t, n) {
            return "string" == typeof e ? e : i.px.transform(t + n * e)
        }
        let a = {
                offset: "stroke-dashoffset",
                array: "stroke-dasharray"
            },
            s = {
                offset: "strokeDashoffset",
                array: "strokeDasharray"
            };
        function l(e, {attrX: t, attrY: n, attrScale: l, originX: u, originY: c, pathLength: d, pathSpacing: f=1, pathOffset: h=0, ...p}, m, v, g) {
            if ((0, r.r)(e, p, m, g), v) {
                e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
                return
            }
            e.attrs = e.style,
            e.style = {};
            let {attrs: y, style: b, dimensions: w} = e;
            y.transform && (w && (b.transform = y.transform), delete y.transform),
            w && (void 0 !== u || void 0 !== c || b.transform) && (b.transformOrigin = function(e, t, n) {
                let r = o(t, e.x, e.width),
                    i = o(n, e.y, e.height);
                return `${r} ${i}`
            }(w, void 0 !== u ? u : .5, void 0 !== c ? c : .5)),
            void 0 !== t && (y.x = t),
            void 0 !== n && (y.y = n),
            void 0 !== l && (y.scale = l),
            void 0 !== d && function(e, t, n=1, r=0, o=!0) {
                e.pathLength = 1;
                let l = o ? a : s;
                e[l.offset] = i.px.transform(-r);
                let u = i.px.transform(t),
                    c = i.px.transform(n);
                e[l.array] = `${u} ${c}`
            }(y, d, f, h, !1)
        }
    },
    29262: function(e, t, n) {
        "use strict";
        n.d(t, {
            s: function() {
                return r
            }
        });
        let r = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
    },
    58734: function(e, t, n) {
        "use strict";
        n.d(t, {
            a: function() {
                return r
            }
        });
        let r = e => "string" == typeof e && "svg" === e.toLowerCase()
    },
    35027: function(e, t, n) {
        "use strict";
        n.d(t, {
            K: function() {
                return a
            }
        });
        var r = n(80359),
            i = n(1155),
            o = n(29262);
        function a(e, t, n, a) {
            for (let n in (0, i.N)(e, t, void 0, a), t.attrs)
                e.setAttribute(o.s.has(n) ? n : (0, r.D)(n), t.attrs[n])
        }
    },
    37116: function(e, t, n) {
        "use strict";
        n.d(t, {
            U: function() {
                return a
            }
        });
        var r = n(79237),
            i = n(89716),
            o = n(71863);
        function a(e, t) {
            let n = (0, i.U)(e, t);
            for (let i in e)
                if ((0, r.i)(e[i]) || (0, r.i)(t[i])) {
                    let t = -1 !== o._.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
                    n[t] = e[i]
                }
            return n
        }
    },
    98261: function(e, t, n) {
        "use strict";
        n.d(t, {
            G: function() {
                return a
            },
            M: function() {
                return s
            }
        });
        var r = n(26763),
            i = n(18094),
            o = n(68988);
        function a(e) {
            return (0, r.H)(e.animate) || o.V.some(t => (0, i.$)(e[t]))
        }
        function s(e) {
            return !!(a(e) || e.variants)
        }
    },
    18094: function(e, t, n) {
        "use strict";
        function r(e) {
            return "string" == typeof e || Array.isArray(e)
        }
        n.d(t, {
            $: function() {
                return r
            }
        })
    },
    71981: function(e, t, n) {
        "use strict";
        n.d(t, {
            x: function() {
                return i
            }
        });
        var r = n(87107);
        function i(e, t, n) {
            let i = e.getProps();
            return (0, r.o)(i, t, void 0 !== n ? n : i.custom, function(e) {
                let t = {};
                return e.values.forEach((e, n) => t[n] = e.get()), t
            }(e), function(e) {
                let t = {};
                return e.values.forEach((e, n) => t[n] = e.getVelocity()), t
            }(e))
        }
    },
    87107: function(e, t, n) {
        "use strict";
        function r(e, t, n, r={}, i={}) {
            return "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)), "string" == typeof t && (t = e.variants && e.variants[t]), "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)), t
        }
        n.d(t, {
            o: function() {
                return r
            }
        })
    },
    88052: function(e, t, n) {
        "use strict";
        n.d(t, {
            GJ: function() {
                return v
            },
            P$: function() {
                return g
            },
            CD: function() {
                return m
            }
        });
        let r = e => /^\-?\d*\.?\d+$/.test(e),
            i = e => /^0[^.\s]+$/.test(e);
        var o = n(45201),
            a = n(41835),
            s = n(58459),
            l = n(70181),
            u = n(72202),
            c = n(71707),
            d = n(88959);
        let f = [...c.$, u.$, s.P],
            h = e => f.find((0, d.l)(e));
        var p = n(71981);
        function m(e, t) {
            let n = (0, p.x)(e, t),
                {transitionEnd: r={}, transition: i={}, ...s} = n ? e.makeTargetAnimatable(n, !1) : {};
            for (let t in s = {
                ...s,
                ...r
            }) {
                var l;
                let n = (0, o.Y)(s[t]);
                l = t,
                e.hasValue(l) ? e.getValue(l).set(n) : e.addValue(l, (0, a.B)(n))
            }
        }
        function v(e, t, n) {
            var o,
                u;
            let c = Object.keys(t).filter(t => !e.hasValue(t)),
                d = c.length;
            if (d)
                for (let f = 0; f < d; f++) {
                    let d = c[f],
                        p = t[d],
                        m = null;
                    Array.isArray(p) && (m = p[0]),
                    null === m && (m = null !== (u = null !== (o = n[d]) && void 0 !== o ? o : e.readValue(d)) && void 0 !== u ? u : t[d]),
                    null != m && ("string" == typeof m && (r(m) || i(m)) ? m = parseFloat(m) : !h(m) && s.P.test(p) && (m = (0, l.T)(d, p)), e.addValue(d, (0, a.B)(m, {
                        owner: e
                    })), void 0 === n[d] && (n[d] = m), null !== m && e.setBaseTarget(d, m))
                }
        }
        function g(e, t, n) {
            let r = {};
            for (let i in e) {
                let e = function(e, t) {
                    if (!t)
                        return;
                    let n = t[e] || t.default || t;
                    return n.from
                }(i, t);
                if (void 0 !== e)
                    r[i] = e;
                else {
                    let e = n.getValue(i);
                    e && (r[i] = e.get())
                }
            }
            return r
        }
    },
    68988: function(e, t, n) {
        "use strict";
        n.d(t, {
            V: function() {
                return i
            },
            e: function() {
                return r
            }
        });
        let r = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
            i = ["initial", ...r]
    },
    45286: function(e, t, n) {
        "use strict";
        function r(e, t) {
            -1 === e.indexOf(t) && e.push(t)
        }
        function i(e, t) {
            let n = e.indexOf(t);
            n > -1 && e.splice(n, 1)
        }
        n.d(t, {
            cl: function() {
                return i
            },
            y4: function() {
                return r
            }
        })
    },
    32025: function(e, t, n) {
        "use strict";
        n.d(t, {
            u: function() {
                return r
            }
        });
        let r = (e, t, n) => Math.min(Math.max(n, e), t)
    },
    83813: function(e, t, n) {
        "use strict";
        n.d(t, {
            K: function() {
                return i
            },
            k: function() {
                return o
            }
        });
        var r = n(51734);
        let i = r.Z,
            o = r.Z
    },
    71790: function(e, t, n) {
        "use strict";
        n.d(t, {
            s: function() {
                return R
            }
        });
        var r = n(83813),
            i = n(72202),
            o = n(32025),
            a = n(31914);
        function s(e, t, n) {
            return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? e + (t - e) * 6 * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
        }
        var l = n(51907),
            u = n(53354),
            c = n(19048);
        let d = (e, t, n) => {
                let r = e * e;
                return Math.sqrt(Math.max(0, n * (t * t - r) + r))
            },
            f = [l.$, u.m, c.J],
            h = e => f.find(t => t.test(e));
        function p(e) {
            let t = h(e);
            (0, r.k)(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`);
            let n = t.parse(e);
            return t === c.J && (n = function({hue: e, saturation: t, lightness: n, alpha: r}) {
                e /= 360,
                n /= 100;
                let i = 0,
                    o = 0,
                    a = 0;
                if (t /= 100) {
                    let r = n < .5 ? n * (1 + t) : n + t - n * t,
                        l = 2 * n - r;
                    i = s(l, r, e + 1 / 3),
                    o = s(l, r, e),
                    a = s(l, r, e - 1 / 3)
                } else
                    i = o = a = n;
                return {
                    red: Math.round(255 * i),
                    green: Math.round(255 * o),
                    blue: Math.round(255 * a),
                    alpha: r
                }
            }(n)), n
        }
        let m = (e, t) => {
            let n = p(e),
                r = p(t),
                i = {
                    ...n
                };
            return e => (i.red = d(n.red, r.red, e), i.green = d(n.green, r.green, e), i.blue = d(n.blue, r.blue, e), i.alpha = (0, a.C)(n.alpha, r.alpha, e), u.m.transform(i))
        };
        var v = n(9323),
            g = n(58459);
        let y = (e, t) => n => `${n > 0 ? t : e}`;
        function b(e, t) {
            return "number" == typeof e ? n => (0, a.C)(e, t, n) : i.$.test(e) ? m(e, t) : e.startsWith("var(") ? y(e, t) : E(e, t)
        }
        let w = (e, t) => {
                let n = [...e],
                    r = n.length,
                    i = e.map((e, n) => b(e, t[n]));
                return e => {
                    for (let t = 0; t < r; t++)
                        n[t] = i[t](e);
                    return n
                }
            },
            x = (e, t) => {
                let n = {
                        ...e,
                        ...t
                    },
                    r = {};
                for (let i in n)
                    void 0 !== e[i] && void 0 !== t[i] && (r[i] = b(e[i], t[i]));
                return e => {
                    for (let t in r)
                        n[t] = r[t](e);
                    return n
                }
            },
            E = (e, t) => {
                let n = g.P.createTransformer(t),
                    i = (0, g.V)(e),
                    o = (0, g.V)(t),
                    a = i.numVars === o.numVars && i.numColors === o.numColors && i.numNumbers >= o.numNumbers;
                return a ? (0, v.z)(w(i.values, o.values), n) : ((0, r.K)(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), y(e, t))
            };
        var P = n(93427),
            C = n(51734);
        let S = (e, t) => n => (0, a.C)(e, t, n);
        function R(e, t, {clamp: n=!0, ease: a, mixer: s}={}) {
            let l = e.length;
            if ((0, r.k)(l === t.length, "Both input and output ranges must be the same length"), 1 === l)
                return () => t[0];
            e[0] > e[l - 1] && (e = [...e].reverse(), t = [...t].reverse());
            let u = function(e, t, n) {
                    let r = [],
                        o = n || function(e) {
                            if ("number" == typeof e)
                                ;
                            else if ("string" == typeof e)
                                return i.$.test(e) ? m : E;
                            else if (Array.isArray(e))
                                return w;
                            else if ("object" == typeof e)
                                return x;
                            return S
                        }(e[0]),
                        a = e.length - 1;
                    for (let n = 0; n < a; n++) {
                        let i = o(e[n], e[n + 1]);
                        if (t) {
                            let e = Array.isArray(t) ? t[n] || C.Z : t;
                            i = (0, v.z)(e, i)
                        }
                        r.push(i)
                    }
                    return r
                }(t, a, s),
                c = u.length,
                d = t => {
                    let n = 0;
                    if (c > 1)
                        for (; n < e.length - 2 && !(t < e[n + 1]); n++)
                            ;
                    let r = (0, P.Y)(e[n], e[n + 1], t);
                    return u[n](r)
                };
            return n ? t => d((0, o.u)(e[0], e[l - 1], t)) : d
        }
    },
    36780: function(e, t, n) {
        "use strict";
        n.d(t, {
            j: function() {
                return r
            }
        });
        let r = "undefined" != typeof document
    },
    64056: function(e, t, n) {
        "use strict";
        function r(e) {
            return "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
        }
        n.d(t, {
            I: function() {
                return r
            }
        })
    },
    31914: function(e, t, n) {
        "use strict";
        n.d(t, {
            C: function() {
                return r
            }
        });
        let r = (e, t, n) => -n * e + n * t + e
    },
    51734: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return r
            }
        });
        let r = e => e
    },
    61293: function(e, t, n) {
        "use strict";
        n.d(t, {
            Y: function() {
                return i
            }
        });
        var r = n(76695);
        function i(e) {
            let t = [0];
            return (0, r.c)(t, e.length - 1), t
        }
    },
    76695: function(e, t, n) {
        "use strict";
        n.d(t, {
            c: function() {
                return o
            }
        });
        var r = n(31914),
            i = n(93427);
        function o(e, t) {
            let n = e[e.length - 1];
            for (let o = 1; o <= t; o++) {
                let a = (0, i.Y)(0, t, o);
                e.push((0, r.C)(n, 1, a))
            }
        }
    },
    9323: function(e, t, n) {
        "use strict";
        n.d(t, {
            z: function() {
                return i
            }
        });
        let r = (e, t) => n => t(e(n)),
            i = (...e) => e.reduce(r)
    },
    93427: function(e, t, n) {
        "use strict";
        n.d(t, {
            Y: function() {
                return r
            }
        });
        let r = (e, t, n) => {
            let r = t - e;
            return 0 === r ? 1 : (n - e) / r
        }
    },
    45201: function(e, t, n) {
        "use strict";
        n.d(t, {
            Y: function() {
                return o
            },
            p: function() {
                return i
            }
        });
        var r = n(91136);
        let i = e => !!(e && "object" == typeof e && e.mix && e.toValue),
            o = e => (0, r.C)(e) ? e[e.length - 1] || 0 : e
    },
    31563: function(e, t, n) {
        "use strict";
        n.d(t, {
            L: function() {
                return i
            }
        });
        var r = n(45286);
        class i {
            constructor()
            {
                this.subscriptions = []
            }
            add(e)
            {
                return (0, r.y4)(this.subscriptions, e), () => (0, r.cl)(this.subscriptions, e)
            }
            notify(e, t, n)
            {
                let r = this.subscriptions.length;
                if (r) {
                    if (1 === r)
                        this.subscriptions[0](e, t, n);
                    else
                        for (let i = 0; i < r; i++) {
                            let r = this.subscriptions[i];
                            r && r(e, t, n)
                        }
                }
            }
            getSize()
            {
                return this.subscriptions.length
            }
            clear()
            {
                this.subscriptions.length = 0
            }
        }
    },
    30309: function(e, t, n) {
        "use strict";
        n.d(t, {
            X: function() {
                return i
            },
            w: function() {
                return r
            }
        });
        let r = e => 1e3 * e,
            i = e => e / 1e3
    },
    35375: function(e, t, n) {
        "use strict";
        n.d(t, {
            h: function() {
                return i
            }
        });
        var r = n(70079);
        function i(e) {
            let t = (0, r.useRef)(null);
            return null === t.current && (t.current = e()), t.current
        }
    },
    48783: function(e, t, n) {
        "use strict";
        n.d(t, {
            L: function() {
                return o
            }
        });
        var r = n(70079),
            i = n(36780);
        let o = i.j ? r.useLayoutEffect : r.useEffect
    },
    6899: function(e, t, n) {
        "use strict";
        function r(e, t) {
            return t ? e * (1e3 / t) : 0
        }
        n.d(t, {
            R: function() {
                return r
            }
        })
    },
    41835: function(e, t, n) {
        "use strict";
        n.d(t, {
            B: function() {
                return u
            }
        });
        var r = n(87699),
            i = n(3831),
            o = n(31563),
            a = n(6899);
        let s = e => !isNaN(parseFloat(e));
        class l {
            constructor(e, t={})
            {
                this.version = "10.12.4",
                this.timeDelta = 0,
                this.lastUpdated = 0,
                this.canTrackVelocity = !1,
                this.events = {},
                this.updateAndNotify = (e, t=!0) => {
                    this.prev = this.current,
                    this.current = e;
                    let {delta: n, timestamp: o} = r.w;
                    this.lastUpdated !== o && (this.timeDelta = n, this.lastUpdated = o, i.Wi.postRender(this.scheduleVelocityCheck)),
                    this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
                    this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
                    t && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                },
                this.scheduleVelocityCheck = () => i.Wi.postRender(this.velocityCheck),
                this.velocityCheck = ({timestamp: e}) => {
                    e !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
                },
                this.hasAnimated = !1,
                this.prev = this.current = e,
                this.canTrackVelocity = s(this.current),
                this.owner = t.owner
            }
            onChange(e)
            {
                return this.on("change", e)
            }
            on(e, t)
            {
                this.events[e] || (this.events[e] = new o.L);
                let n = this.events[e].add(t);
                return "change" === e ? () => {
                    n(),
                    i.Wi.read(() => {
                        this.events.change.getSize() || this.stop()
                    })
                } : n
            }
            clearListeners()
            {
                for (let e in this.events)
                    this.events[e].clear()
            }
            attach(e, t)
            {
                this.passiveEffect = e,
                this.stopPassiveEffect = t
            }
            set(e, t=!0)
            {
                t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t)
            }
            setWithVelocity(e, t, n)
            {
                this.set(t),
                this.prev = e,
                this.timeDelta = n
            }
            jump(e)
            {
                this.updateAndNotify(e),
                this.prev = e,
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
            get()
            {
                return this.current
            }
            getPrevious()
            {
                return this.prev
            }
            getVelocity()
            {
                return this.canTrackVelocity ? (0, a.R)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
            }
            start(e)
            {
                return this.stop(), new Promise(t => {
                    this.hasAnimated = !0,
                    this.animation = e(t),
                    this.events.animationStart && this.events.animationStart.notify()
                }).then(() => {
                    this.events.animationComplete && this.events.animationComplete.notify(),
                    this.clearAnimation()
                })
            }
            stop()
            {
                this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
                this.clearAnimation()
            }
            isAnimating()
            {
                return !!this.animation
            }
            clearAnimation()
            {
                delete this.animation
            }
            destroy()
            {
                this.clearListeners(),
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
        }
        function u(e, t) {
            return new l(e, t)
        }
    },
    51907: function(e, t, n) {
        "use strict";
        n.d(t, {
            $: function() {
                return o
            }
        });
        var r = n(53354),
            i = n(91402);
        let o = {
            test: (0, i.i)("#"),
            parse: function(e) {
                let t = "",
                    n = "",
                    r = "",
                    i = "";
                return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
                    red: parseInt(t, 16),
                    green: parseInt(n, 16),
                    blue: parseInt(r, 16),
                    alpha: i ? parseInt(i, 16) / 255 : 1
                }
            },
            transform: r.m.transform
        }
    },
    19048: function(e, t, n) {
        "use strict";
        n.d(t, {
            J: function() {
                return s
            }
        });
        var r = n(97932),
            i = n(81957),
            o = n(66853),
            a = n(91402);
        let s = {
            test: (0, a.i)("hsl", "hue"),
            parse: (0, a.d)("hue", "saturation", "lightness"),
            transform: ({hue: e, saturation: t, lightness: n, alpha: a=1}) => "hsla(" + Math.round(e) + ", " + i.aQ.transform((0, o.Nw)(t)) + ", " + i.aQ.transform((0, o.Nw)(n)) + ", " + (0, o.Nw)(r.Fq.transform(a)) + ")"
        }
    },
    72202: function(e, t, n) {
        "use strict";
        n.d(t, {
            $: function() {
                return s
            }
        });
        var r = n(66853),
            i = n(51907),
            o = n(19048),
            a = n(53354);
        let s = {
            test: e => a.m.test(e) || i.$.test(e) || o.J.test(e),
            parse: e => a.m.test(e) ? a.m.parse(e) : o.J.test(e) ? o.J.parse(e) : i.$.parse(e),
            transform: e => (0, r.HD)(e) ? e : e.hasOwnProperty("red") ? a.m.transform(e) : o.J.transform(e)
        }
    },
    53354: function(e, t, n) {
        "use strict";
        n.d(t, {
            m: function() {
                return u
            }
        });
        var r = n(32025),
            i = n(97932),
            o = n(66853),
            a = n(91402);
        let s = e => (0, r.u)(0, 255, e),
            l = {
                ...i.Rx,
                transform: e => Math.round(s(e))
            },
            u = {
                test: (0, a.i)("rgb", "red"),
                parse: (0, a.d)("red", "green", "blue"),
                transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + l.transform(e) + ", " + l.transform(t) + ", " + l.transform(n) + ", " + (0, o.Nw)(i.Fq.transform(r)) + ")"
            }
    },
    91402: function(e, t, n) {
        "use strict";
        n.d(t, {
            d: function() {
                return o
            },
            i: function() {
                return i
            }
        });
        var r = n(66853);
        let i = (e, t) => n => !!((0, r.HD)(n) && r.mj.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)),
            o = (e, t, n) => i => {
                if (!(0, r.HD)(i))
                    return i;
                let [o, a, s, l] = i.match(r.KP);
                return {
                    [e]: parseFloat(o),
                    [t]: parseFloat(a),
                    [n]: parseFloat(s),
                    alpha: void 0 !== l ? parseFloat(l) : 1
                }
            }
    },
    73580: function(e, t, n) {
        "use strict";
        n.d(t, {
            h: function() {
                return l
            }
        });
        var r = n(58459),
            i = n(66853);
        let o = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function a(e) {
            let [t, n] = e.slice(0, -1).split("(");
            if ("drop-shadow" === t)
                return e;
            let [r] = n.match(i.KP) || [];
            if (!r)
                return e;
            let a = n.replace(r, ""),
                s = o.has(t) ? 1 : 0;
            return r !== n && (s *= 100), t + "(" + s + a + ")"
        }
        let s = /([a-z-]*)\(.*?\)/g,
            l = {
                ...r.P,
                getAnimatableNone: e => {
                    let t = e.match(s);
                    return t ? t.map(a).join(" ") : e
                }
            }
    },
    58459: function(e, t, n) {
        "use strict";
        n.d(t, {
            P: function() {
                return v
            },
            V: function() {
                return f
            }
        });
        var r = n(29858),
            i = n(51734),
            o = n(72202),
            a = n(97932),
            s = n(66853);
        let l = {
                regex: r.Xp,
                countKey: "Vars",
                token: "${v}",
                parse: i.Z
            },
            u = {
                regex: s.dA,
                countKey: "Colors",
                token: "${c}",
                parse: o.$.parse
            },
            c = {
                regex: s.KP,
                countKey: "Numbers",
                token: "${n}",
                parse: a.Rx.parse
            };
        function d(e, {regex: t, countKey: n, token: r, parse: i}) {
            let o = e.tokenised.match(t);
            o && (e["num" + n] = o.length, e.tokenised = e.tokenised.replace(t, r), e.values.push(...o.map(i)))
        }
        function f(e) {
            let t = e.toString(),
                n = {
                    value: t,
                    tokenised: t,
                    values: [],
                    numVars: 0,
                    numColors: 0,
                    numNumbers: 0
                };
            return n.value.includes("var(--") && d(n, l), d(n, u), d(n, c), n
        }
        function h(e) {
            return f(e).values
        }
        function p(e) {
            let {values: t, numColors: n, numVars: r, tokenised: i} = f(e),
                a = t.length;
            return e => {
                let t = i;
                for (let i = 0; i < a; i++)
                    t = i < r ? t.replace(l.token, e[i]) : i < r + n ? t.replace(u.token, o.$.transform(e[i])) : t.replace(c.token, (0, s.Nw)(e[i]));
                return t
            }
        }
        let m = e => "number" == typeof e ? 0 : e,
            v = {
                test: function(e) {
                    var t,
                        n;
                    return isNaN(e) && (0, s.HD)(e) && ((null === (t = e.match(s.KP)) || void 0 === t ? void 0 : t.length) || 0) + ((null === (n = e.match(s.dA)) || void 0 === n ? void 0 : n.length) || 0) > 0
                },
                parse: h,
                createTransformer: p,
                getAnimatableNone: function(e) {
                    let t = h(e),
                        n = p(e);
                    return n(t.map(m))
                }
            }
    },
    97932: function(e, t, n) {
        "use strict";
        n.d(t, {
            Fq: function() {
                return o
            },
            Rx: function() {
                return i
            },
            bA: function() {
                return a
            }
        });
        var r = n(32025);
        let i = {
                test: e => "number" == typeof e,
                parse: parseFloat,
                transform: e => e
            },
            o = {
                ...i,
                transform: e => (0, r.u)(0, 1, e)
            },
            a = {
                ...i,
                default: 1
            }
    },
    81957: function(e, t, n) {
        "use strict";
        n.d(t, {
            $C: function() {
                return c
            },
            RW: function() {
                return o
            },
            aQ: function() {
                return a
            },
            px: function() {
                return s
            },
            vh: function() {
                return l
            },
            vw: function() {
                return u
            }
        });
        var r = n(66853);
        let i = e => ({
                test: t => (0, r.HD)(t) && t.endsWith(e) && 1 === t.split(" ").length,
                parse: parseFloat,
                transform: t => `${t}${e}`
            }),
            o = i("deg"),
            a = i("%"),
            s = i("px"),
            l = i("vh"),
            u = i("vw"),
            c = {
                ...a,
                parse: e => a.parse(e) / 100,
                transform: e => a.transform(100 * e)
            }
    },
    66853: function(e, t, n) {
        "use strict";
        n.d(t, {
            HD: function() {
                return s
            },
            KP: function() {
                return i
            },
            Nw: function() {
                return r
            },
            dA: function() {
                return o
            },
            mj: function() {
                return a
            }
        });
        let r = e => Math.round(1e5 * e) / 1e5,
            i = /(-)?([\d]*\.?[\d])+/g,
            o = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
            a = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
        function s(e) {
            return "string" == typeof e
        }
    },
    23991: function(e, t, n) {
        "use strict";
        n.d(t, {
            L: function() {
                return i
            }
        });
        var r = n(79237);
        function i(e) {
            return !!((0, r.i)(e) && e.add)
        }
    },
    79237: function(e, t, n) {
        "use strict";
        n.d(t, {
            i: function() {
                return r
            }
        });
        let r = e => !!(e && e.getVelocity)
    }
}]);