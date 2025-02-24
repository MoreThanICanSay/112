define("common:widget/lib/jquery/jquery.js",
function(e, t, n) { !
    function(e, t) {
        function r(e) {
            var t = e.length,
            n = ft.type(e);
            return ft.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        function i(e) {
            var t = Et[e] = {};
            return ft.each(e.match(dt) || [],
            function(e, n) {
                t[n] = !0
            }),
            t
        }
        function o(e, n, r, i) {
            if (ft.acceptData(e)) {
                var o, a, s = ft.expando,
                u = e.nodeType,
                l = u ? ft.cache: e,
                c = u ? e[s] : e[s] && s;
                if (c && l[c] && (i || l[c].data) || r !== t || "string" != typeof n) return c || (c = u ? e[s] = nt.pop() || ft.guid++:s),
                l[c] || (l[c] = u ? {}: {
                    toJSON: ft.noop
                }),
                ("object" == typeof n || "function" == typeof n) && (i ? l[c] = ft.extend(l[c], n) : l[c].data = ft.extend(l[c].data, n)),
                a = l[c],
                i || (a.data || (a.data = {}), a = a.data),
                r !== t && (a[ft.camelCase(n)] = r),
                "string" == typeof n ? (o = a[n], null == o && (o = a[ft.camelCase(n)])) : o = a,
                o
            }
        }
        function a(e, t, n) {
            if (ft.acceptData(e)) {
                var r, i, o = e.nodeType,
                a = o ? ft.cache: e,
                s = o ? e[ft.expando] : ft.expando;
                if (a[s]) {
                    if (t && (r = n ? a[s] : a[s].data)) {
                        ft.isArray(t) ? t = t.concat(ft.map(t, ft.camelCase)) : t in r ? t = [t] : (t = ft.camelCase(t), t = t in r ? [t] : t.split(" ")),
                        i = t.length;
                        for (; i--;) delete r[t[i]];
                        if (n ? !u(r) : !ft.isEmptyObject(r)) return
                    } (n || (delete a[s].data, u(a[s]))) && (o ? ft.cleanData([e], !0) : ft.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
                }
            }
        }
        function s(e, n, r) {
            if (r === t && 1 === e.nodeType) {
                var i = "data-" + n.replace(At, "-$1").toLowerCase();
                if (r = e.getAttribute(i), "string" == typeof r) {
                    try {
                        r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null: +r + "" === r ? +r: St.test(r) ? ft.parseJSON(r) : r
                    } catch(o) {}
                    ft.data(e, n, r)
                } else r = t
            }
            return r
        }
        function u(e) {
            var t;
            for (t in e) if (("data" !== t || !ft.isEmptyObject(e[t])) && "toJSON" !== t) return ! 1;
            return ! 0
        }
        function l() {
            return ! 0
        }
        function c() {
            return ! 1
        }
        function f() {
            try {
                return Q.activeElement
            } catch(e) {}
        }
        function p(e, t) {
            do e = e[t];
            while (e && 1 !== e.nodeType);
            return e
        }
        function d(e, t, n) {
            if (ft.isFunction(t)) return ft.grep(e,
            function(e, r) {
                return !! t.call(e, r, e) !== n
            });
            if (t.nodeType) return ft.grep(e,
            function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (It.test(t)) return ft.filter(t, e, n);
                t = ft.filter(t, e)
            }
            return ft.grep(e,
            function(e) {
                return ft.inArray(e, t) >= 0 !== n
            })
        }
        function h(e) {
            var t = Vt.split("|"),
            n = e.createDocumentFragment();
            if (n.createElement) for (; t.length;) n.createElement(t.pop());
            return n
        }
        function g(e, t) {
            return ft.nodeName(e, "table") && ft.nodeName(1 === t.nodeType ? t: t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }
        function m(e) {
            return e.type = (null !== ft.find.attr(e, "type")) + "/" + e.type,
            e
        }
        function y(e) {
            var t = an.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"),
            e
        }
        function v(e, t) {
            for (var n, r = 0; null != (n = e[r]); r++) ft._data(n, "globalEval", !t || ft._data(t[r], "globalEval"))
        }
        function b(e, t) {
            if (1 === t.nodeType && ft.hasData(e)) {
                var n, r, i, o = ft._data(e),
                a = ft._data(t, o),
                s = o.events;
                if (s) {
                    delete a.handle,
                    a.events = {};
                    for (n in s) for (r = 0, i = s[n].length; i > r; r++) ft.event.add(t, n, s[n][r])
                }
                a.data && (a.data = ft.extend({},
                a.data))
            }
        }
        function x(e, t) {
            var n, r, i;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !ft.support.noCloneEvent && t[ft.expando]) {
                    i = ft._data(t);
                    for (r in i.events) ft.removeEvent(t, r, i.handle);
                    t.removeAttribute(ft.expando)
                }
                "script" === n && t.text !== e.text ? (m(t).text = e.text, y(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ft.support.html5Clone && e.innerHTML && !ft.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && nn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected: ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }
        function w(e, n) {
            var r, i, o = 0,
            a = typeof e.getElementsByTagName !== J ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== J ? e.querySelectorAll(n || "*") : t;
            if (!a) for (a = [], r = e.childNodes || e; null != (i = r[o]); o++) ! n || ft.nodeName(i, n) ? a.push(i) : ft.merge(a, w(i, n));
            return n === t || n && ft.nodeName(e, n) ? ft.merge([e], a) : a
        }
        function T(e) {
            nn.test(e.type) && (e.defaultChecked = e.checked)
        }
        function C(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = En.length; i--;) if (t = En[i] + n, t in e) return t;
            return r
        }
        function N(e, t) {
            return e = t || e,
            "none" === ft.css(e, "display") || !ft.contains(e.ownerDocument, e)
        }
        function k(e, t) {
            for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a],
            r.style && (o[a] = ft._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && N(r) && (o[a] = ft._data(r, "olddisplay", j(r.nodeName)))) : o[a] || (i = N(r), (n && "none" !== n || !i) && ft._data(r, "olddisplay", i ? n: ft.css(r, "display"))));
            for (a = 0; s > a; a++) r = e[a],
            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "": "none"));
            return e
        }
        function E(e, t, n) {
            var r = bn.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }
        function S(e, t, n, r, i) {
            for (var o = n === (r ? "border": "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += ft.css(e, n + kn[o], !0, i)),
            r ? ("content" === n && (a -= ft.css(e, "padding" + kn[o], !0, i)), "margin" !== n && (a -= ft.css(e, "border" + kn[o] + "Width", !0, i))) : (a += ft.css(e, "padding" + kn[o], !0, i), "padding" !== n && (a += ft.css(e, "border" + kn[o] + "Width", !0, i)));
            return a
        }
        function A(e, t, n) {
            var r = !0,
            i = "width" === t ? e.offsetWidth: e.offsetHeight,
            o = pn(e),
            a = ft.support.boxSizing && "border-box" === ft.css(e, "boxSizing", !1, o);
            if (0 >= i || null == i) {
                if (i = dn(e, t, o), (0 > i || null == i) && (i = e.style[t]), xn.test(i)) return i;
                r = a && (ft.support.boxSizingReliable || i === e.style[t]),
                i = parseFloat(i) || 0
            }
            return i + S(e, t, n || (a ? "border": "content"), r, o) + "px"
        }
        function j(e) {
            var t = Q,
            n = Tn[e];
            return n || (n = D(e, t), "none" !== n && n || (fn = (fn || ft("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (fn[0].contentWindow || fn[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = D(e, t), fn.detach()), Tn[e] = n),
            n
        }
        function D(e, t) {
            var n = ft(t.createElement(e)).appendTo(t.body),
            r = ft.css(n[0], "display");
            return n.remove(),
            r
        }
        function L(e, t, n, r) {
            var i;
            if (ft.isArray(t)) ft.each(t,
            function(t, i) {
                n || An.test(e) ? r(e, i) : L(e + "[" + ("object" == typeof i ? t: "") + "]", i, n, r)
            });
            else if (n || "object" !== ft.type(t)) r(e, t);
            else for (i in t) L(e + "[" + i + "]", t[i], n, r)
        }
        function H(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i = 0,
                o = t.toLowerCase().match(dt) || [];
                if (ft.isFunction(n)) for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }
        function q(e, t, n, r) {
            function i(s) {
                var u;
                return o[s] = !0,
                ft.each(e[s] || [],
                function(e, s) {
                    var l = s(t, n, r);
                    return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
                }),
                u
            }
            var o = {},
            a = e === Xn;
            return i(t.dataTypes[0]) || !o["*"] && i("*")
        }
        function _(e, n) {
            var r, i, o = ft.ajaxSettings.flatOptions || {};
            for (i in n) n[i] !== t && ((o[i] ? e: r || (r = {}))[i] = n[i]);
            return r && ft.extend(!0, e, r),
            e
        }
        function M(e, n, r) {
            for (var i, o, a, s, u = e.contents,
            l = e.dataTypes;
            "*" === l[0];) l.shift(),
            o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
            if (o) for (s in u) if (u[s] && u[s].test(o)) {
                l.unshift(s);
                break
            }
            if (l[0] in r) a = l[0];
            else {
                for (s in r) {
                    if (!l[0] || e.converters[s + " " + l[0]]) {
                        a = s;
                        break
                    }
                    i || (i = s)
                }
                a = a || i
            }
            return a ? (a !== l[0] && l.unshift(a), r[a]) : void 0
        }
        function O(e, t, n, r) {
            var i, o, a, s, u, l = {},
            c = e.dataTypes.slice();
            if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
            for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;
            else if ("*" !== u && u !== o) {
                if (a = l[u + " " + o] || l["* " + o], !a) for (i in l) if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                    a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
                    break
                }
                if (a !== !0) if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch(f) {
                    return {
                        state: "parsererror",
                        error: a ? f: "No conversion from " + u + " to " + o
                    }
                }
            }
            return {
                state: "success",
                data: t
            }
        }
        function F() {
            try {
                return new e.XMLHttpRequest
            } catch(t) {}
        }
        function B() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch(t) {}
        }
        function P() {
            return setTimeout(function() {
                er = t
            }),
            er = ft.now()
        }
        function R(e, t, n) {
            for (var r, i = (ar[t] || []).concat(ar["*"]), o = 0, a = i.length; a > o; o++) if (r = i[o].call(n, t, e)) return r
        }
        function W(e, t, n) {
            var r, i, o = 0,
            a = or.length,
            s = ft.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return ! 1;
                for (var t = er || P(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
                return s.notifyWith(e, [l, o, n]),
                1 > o && u ? n: (s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: ft.extend({},
                t),
                opts: ft.extend(!0, {
                    specialEasing: {}
                },
                n),
                originalProperties: t,
                originalOptions: n,
                startTime: er || P(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = ft.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r),
                    r
                },
                stop: function(t) {
                    var n = 0,
                    r = t ? l.tweens.length: 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]),
                    this
                }
            }),
            c = l.props;
            for ($(c, l.opts.specialEasing); a > o; o++) if (r = or[o].call(l, e, c, l.opts)) return r;
            return ft.map(c, R, l),
            ft.isFunction(l.opts.start) && l.opts.start.call(e, l),
            ft.fx.timer(ft.extend(u, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }
        function $(e, t) {
            var n, r, i, o, a;
            for (n in e) if (r = ft.camelCase(n), i = t[r], o = e[n], ft.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = ft.cssHooks[r], a && "expand" in a) {
                o = a.expand(o),
                delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
        }
        function I(e, t, n) {
            var r, i, o, a, s, u, l = this,
            c = {},
            f = e.style,
            p = e.nodeType && N(e),
            d = ft._data(e, "fxshow");
            n.queue || (s = ft._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
                s.unqueued || u()
            }), s.unqueued++, l.always(function() {
                l.always(function() {
                    s.unqueued--,
                    ft.queue(e, "fx").length || s.empty.fire()
                })
            })),
            1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ft.css(e, "display") && "none" === ft.css(e, "float") && (ft.support.inlineBlockNeedsLayout && "inline" !== j(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")),
            n.overflow && (f.overflow = "hidden", ft.support.shrinkWrapBlocks || l.always(function() {
                f.overflow = n.overflow[0],
                f.overflowX = n.overflow[1],
                f.overflowY = n.overflow[2]
            }));
            for (r in t) if (i = t[r], nr.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (p ? "hide": "show")) continue;
                c[r] = d && d[r] || ft.style(e, r)
            }
            if (!ft.isEmptyObject(c)) {
                d ? "hidden" in d && (p = d.hidden) : d = ft._data(e, "fxshow", {}),
                o && (d.hidden = !p),
                p ? ft(e).show() : l.done(function() {
                    ft(e).hide()
                }),
                l.done(function() {
                    var t;
                    ft._removeData(e, "fxshow");
                    for (t in c) ft.style(e, t, c[t])
                });
                for (r in c) a = R(p ? d[r] : 0, r, l),
                r in d || (d[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
            }
        }
        function z(e, t, n, r, i) {
            return new z.prototype.init(e, t, n, r, i)
        }
        function X(e, t) {
            var n, r = {
                height: e
            },
            i = 0;
            for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = kn[i],
            r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e),
            r
        }
        function U(e) {
            return ft.isWindow(e) ? e: 9 === e.nodeType ? e.defaultView || e.parentWindow: !1
        }
        var V, Y, J = typeof t,
        G = e.location,
        Q = e.document,
        K = Q.documentElement,
        Z = e.jQuery,
        et = e.$,
        tt = {},
        nt = [],
        rt = "1.10.2",
        it = nt.concat,
        ot = nt.push,
        at = nt.slice,
        st = nt.indexOf,
        ut = tt.toString,
        lt = tt.hasOwnProperty,
        ct = rt.trim,
        ft = function(e, t) {
            return new ft.fn.init(e, t, Y)
        },
        pt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        dt = /\S+/g,
        ht = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        gt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        mt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        yt = /^[\],:{}\s]*$/,
        vt = /(?:^|:|,)(?:\s*\[)+/g,
        bt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        xt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        wt = /^-ms-/,
        Tt = /-([\da-z])/gi,
        Ct = function(e, t) {
            return t.toUpperCase()
        },
        Nt = function(e) { (Q.addEventListener || "load" === e.type || "complete" === Q.readyState) && (kt(), ft.ready())
        },
        kt = function() {
            Q.addEventListener ? (Q.removeEventListener("DOMContentLoaded", Nt, !1), e.removeEventListener("load", Nt, !1)) : (Q.detachEvent("onreadystatechange", Nt), e.detachEvent("onload", Nt))
        };
        ft.fn = ft.prototype = {
            jquery: rt,
            constructor: ft,
            init: function(e, n, r) {
                var i, o;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : gt.exec(e), !i || !i[1] && n) return ! n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                    if (i[1]) {
                        if (n = n instanceof ft ? n[0] : n, ft.merge(this, ft.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n: Q, !0)), mt.test(i[1]) && ft.isPlainObject(n)) for (i in n) ft.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                        return this
                    }
                    if (o = Q.getElementById(i[2]), o && o.parentNode) {
                        if (o.id !== i[2]) return r.find(e);
                        this.length = 1,
                        this[0] = o
                    }
                    return this.context = Q,
                    this.selector = e,
                    this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ft.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ft.makeArray(e, this))
            },
            selector: "",
            length: 0,
            toArray: function() {
                return at.call(this)
            },
            get: function(e) {
                return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
            },
            pushStack: function(e) {
                var t = ft.merge(this.constructor(), e);
                return t.prevObject = this,
                t.context = this.context,
                t
            },
            each: function(e, t) {
                return ft.each(this, e, t)
            },
            ready: function(e) {
                return ft.ready.promise().done(e),
                this
            },
            slice: function() {
                return this.pushStack(at.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq( - 1)
            },
            eq: function(e) {
                var t = this.length,
                n = +e + (0 > e ? t: 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            map: function(e) {
                return this.pushStack(ft.map(this,
                function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: ot,
            sort: [].sort,
            splice: [].splice
        },
        ft.fn.init.prototype = ft.fn,
        ft.extend = ft.fn.extend = function() {
            var e, n, r, i, o, a, s = arguments[0] || {},
            u = 1,
            l = arguments.length,
            c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[1] || {},
            u = 2), "object" == typeof s || ft.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++) if (null != (o = arguments[u])) for (i in o) e = s[i],
            r = o[i],
            s !== r && (c && r && (ft.isPlainObject(r) || (n = ft.isArray(r))) ? (n ? (n = !1, a = e && ft.isArray(e) ? e: []) : a = e && ft.isPlainObject(e) ? e: {},
            s[i] = ft.extend(c, a, r)) : r !== t && (s[i] = r));
            return s
        },
        ft.extend({
            expando: "jQuery" + (rt + Math.random()).replace(/\D/g, ""),
            noConflict: function(t) {
                return e.$ === ft && (e.$ = et),
                t && e.jQuery === ft && (e.jQuery = Z),
                ft
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? ft.readyWait++:ft.ready(!0)
            },
            ready: function(e) {
                if (e === !0 ? !--ft.readyWait: !ft.isReady) {
                    if (!Q.body) return setTimeout(ft.ready);
                    ft.isReady = !0,
                    e !== !0 && --ft.readyWait > 0 || (V.resolveWith(Q, [ft]), ft.fn.trigger && ft(Q).trigger("ready").off("ready"))
                }
            },
            isFunction: function(e) {
                return "function" === ft.type(e)
            },
            isArray: Array.isArray ||
            function(e) {
                return "array" === ft.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return ! isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function(e) {
                return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? tt[ut.call(e)] || "object": typeof e
            },
            isPlainObject: function(e) {
                var n;
                if (!e || "object" !== ft.type(e) || e.nodeType || ft.isWindow(e)) return ! 1;
                try {
                    if (e.constructor && !lt.call(e, "constructor") && !lt.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
                } catch(r) {
                    return ! 1
                }
                if (ft.support.ownLast) for (n in e) return lt.call(e, n);
                for (n in e);
                return n === t || lt.call(e, n)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return ! 1;
                return ! 0
            },
            error: function(e) {
                throw new Error(e)
            },
            parseHTML: function(e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1),
                t = t || Q;
                var r = mt.exec(e),
                i = !n && [];
                return r ? [t.createElement(r[1])] : (r = ft.buildFragment([e], t, i), i && ft(i).remove(), ft.merge([], r.childNodes))
            },
            parseJSON: function(t) {
                return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t: "string" == typeof t && (t = ft.trim(t), t && yt.test(t.replace(bt, "@").replace(xt, "]").replace(vt, ""))) ? new Function("return " + t)() : void ft.error("Invalid JSON: " + t)
            },
            parseXML: function(n) {
                var r, i;
                if (!n || "string" != typeof n) return null;
                try {
                    e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
                } catch(o) {
                    r = t
                }
                return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ft.error("Invalid XML: " + n),
                r
            },
            noop: function() {},
            globalEval: function(t) {
                t && ft.trim(t) && (e.execScript ||
                function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(wt, "ms-").replace(Tt, Ct)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, n) {
                var i, o = 0,
                a = e.length,
                s = r(e);
                if (n) {
                    if (s) for (; a > o && (i = t.apply(e[o], n), i !== !1); o++);
                    else for (o in e) if (i = t.apply(e[o], n), i === !1) break
                } else if (s) for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
                else for (o in e) if (i = t.call(e[o], o, e[o]), i === !1) break;
                return e
            },
            trim: ct && !ct.call("\ufeff\xa0") ?
            function(e) {
                return null == e ? "": ct.call(e)
            }: function(e) {
                return null == e ? "": (e + "").replace(ht, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (r(Object(e)) ? ft.merge(n, "string" == typeof e ? [e] : e) : ot.call(n, e)),
                n
            },
            inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (st) return st.call(t, e, n);
                    for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n: 0; r > n; n++) if (n in t && t[n] === e) return n
                }
                return - 1
            },
            merge: function(e, n) {
                var r = n.length,
                i = e.length,
                o = 0;
                if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o];
                else for (; n[o] !== t;) e[i++] = n[o++];
                return e.length = i,
                e
            },
            grep: function(e, t, n) {
                var r, i = [],
                o = 0,
                a = e.length;
                for (n = !!n; a > o; o++) r = !!t(e[o], o),
                n !== r && i.push(e[o]);
                return i
            },
            map: function(e, t, n) {
                var i, o = 0,
                a = e.length,
                s = r(e),
                u = [];
                if (s) for (; a > o; o++) i = t(e[o], o, n),
                null != i && (u[u.length] = i);
                else for (o in e) i = t(e[o], o, n),
                null != i && (u[u.length] = i);
                return it.apply([], u)
            },
            guid: 1,
            proxy: function(e, n) {
                var r, i, o;
                return "string" == typeof n && (o = e[n], n = e, e = o),
                ft.isFunction(e) ? (r = at.call(arguments, 2), i = function() {
                    return e.apply(n || this, r.concat(at.call(arguments)))
                },
                i.guid = e.guid = e.guid || ft.guid++, i) : t
            },
            access: function(e, n, r, i, o, a, s) {
                var u = 0,
                l = e.length,
                c = null == r;
                if ("object" === ft.type(r)) {
                    o = !0;
                    for (u in r) ft.access(e, n, u, r[u], !0, a, s)
                } else if (i !== t && (o = !0, ft.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
                    return c.call(ft(e), n)
                })), n)) for (; l > u; u++) n(e[u], r, s ? i: i.call(e[u], u, n(e[u], r)));
                return o ? e: c ? n.call(e) : l ? n(e[0], r) : a
            },
            now: function() {
                return (new Date).getTime()
            },
            swap: function(e, t, n, r) {
                var i, o, a = {};
                for (o in t) a[o] = e.style[o],
                e.style[o] = t[o];
                i = n.apply(e, r || []);
                for (o in t) e.style[o] = a[o];
                return i
            }
        }),
        ft.ready.promise = function(t) {
            if (!V) if (V = ft.Deferred(), "complete" === Q.readyState) setTimeout(ft.ready);
            else if (Q.addEventListener) Q.addEventListener("DOMContentLoaded", Nt, !1),
            e.addEventListener("load", Nt, !1);
            else {
                Q.attachEvent("onreadystatechange", Nt),
                e.attachEvent("onload", Nt);
                var n = !1;
                try {
                    n = null == e.frameElement && Q.documentElement
                } catch(r) {}
                n && n.doScroll && !
                function i() {
                    if (!ft.isReady) {
                        try {
                            n.doScroll("left")
                        } catch(e) {
                            return setTimeout(i, 50)
                        }
                        kt(),
                        ft.ready()
                    }
                } ()
            }
            return V.promise(t)
        },
        ft.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
        function(e, t) {
            tt["[object " + t + "]"] = t.toLowerCase()
        }),
        Y = ft(Q),
        function(e, t) {
            function n(e, t, n, r) {
                var i, o, a, s, u, l, c, f, h, g;
                if ((t ? t.ownerDocument || t: R) !== H && L(t), t = t || H, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (s = t.nodeType) && 9 !== s) return [];
                if (_ && !r) {
                    if (i = bt.exec(e)) if (a = i[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o),
                            n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && B(t, o) && o.id === a) return n.push(o),
                        n
                    } else {
                        if (i[2]) return et.apply(n, t.getElementsByTagName(e)),
                        n;
                        if ((a = i[3]) && C.getElementsByClassName && t.getElementsByClassName) return et.apply(n, t.getElementsByClassName(a)),
                        n
                    }
                    if (C.qsa && (!M || !M.test(e))) {
                        if (f = c = P, h = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (l = p(e), (c = t.getAttribute("id")) ? f = c.replace(Tt, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", u = l.length; u--;) l[u] = f + d(l[u]);
                            h = dt.test(e) && t.parentNode || t,
                            g = l.join(",")
                        }
                        if (g) try {
                            return et.apply(n, h.querySelectorAll(g)),
                            n
                        } catch(m) {} finally {
                            c || t.removeAttribute("id")
                        }
                    }
                }
                return w(e.replace(lt, "$1"), t, n, r)
            }
            function r() {
                function e(n, r) {
                    return t.push(n += " ") > k.cacheLength && delete e[t.shift()],
                    e[n] = r
                }
                var t = [];
                return e
            }
            function i(e) {
                return e[P] = !0,
                e
            }
            function o(e) {
                var t = H.createElement("div");
                try {
                    return !! e(t)
                } catch(n) {
                    return ! 1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t),
                    t = null
                }
            }
            function a(e, t) {
                for (var n = e.split("|"), r = e.length; r--;) k.attrHandle[n[r]] = t
            }
            function s(e, t) {
                var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || J) - (~e.sourceIndex || J);
                if (r) return r;
                if (n) for (; n = n.nextSibling;) if (n === t) return - 1;
                return e ? 1 : -1
            }
            function u(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }
            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }
            function c(e) {
                return i(function(t) {
                    return t = +t,
                    i(function(n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }
            function f() {}
            function p(e, t) {
                var r, i, o, a, s, u, l, c = z[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (s = e, u = [], l = k.preFilter; s;) { (!r || (i = ct.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])),
                    r = !1,
                    (i = pt.exec(s)) && (r = i.shift(), o.push({
                        value: r,
                        type: i[0].replace(lt, " ")
                    }), s = s.slice(r.length));
                    for (a in k.filter) ! (i = yt[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                        value: r,
                        type: a,
                        matches: i
                    }), s = s.slice(r.length));
                    if (!r) break
                }
                return t ? s.length: s ? n.error(e) : z(e, u).slice(0)
            }
            function d(e) {
                for (var t = 0,
                n = e.length,
                r = ""; n > t; t++) r += e[t].value;
                return r
            }
            function h(e, t, n) {
                var r = t.dir,
                i = n && "parentNode" === r,
                o = $++;
                return t.first ?
                function(t, n, o) {
                    for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o)
                }: function(t, n, a) {
                    var s, u, l, c = W + " " + o;
                    if (a) {
                        for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, a)) return ! 0
                    } else for (; t = t[r];) if (1 === t.nodeType || i) if (l = t[P] || (t[P] = {}), (u = l[r]) && u[0] === c) {
                        if ((s = u[1]) === !0 || s === N) return s === !0
                    } else if (u = l[r] = [c], u[1] = e(t, n, a) || N, u[1] === !0) return ! 0
                }
            }
            function g(e) {
                return e.length > 1 ?
                function(t, n, r) {
                    for (var i = e.length; i--;) if (!e[i](t, n, r)) return ! 1;
                    return ! 0
                }: e[0]
            }
            function m(e, t, n, r, i) {
                for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
                return a
            }
            function y(e, t, n, r, o, a) {
                return r && !r[P] && (r = y(r)),
                o && !o[P] && (o = y(o, a)),
                i(function(i, a, s, u) {
                    var l, c, f, p = [],
                    d = [],
                    h = a.length,
                    g = i || x(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !i && t ? g: m(g, p, e, s, u),
                    v = n ? o || (i ? e: h || r) ? [] : a: y;
                    if (n && n(y, v, s, u), r) for (l = m(v, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (l = [], c = v.length; c--;)(f = v[c]) && l.push(y[c] = f);
                                o(null, v = [], l, u)
                            }
                            for (c = v.length; c--;)(f = v[c]) && (l = o ? nt.call(i, f) : p[c]) > -1 && (i[l] = !(a[l] = f))
                        }
                    } else v = m(v === a ? v.splice(h, v.length) : v),
                    o ? o(null, a, v, u) : et.apply(a, v)
                })
            }
            function v(e) {
                for (var t, n, r, i = e.length,
                o = k.relative[e[0].type], a = o || k.relative[" "], s = o ? 1 : 0, u = h(function(e) {
                    return e === t
                },
                a, !0), l = h(function(e) {
                    return nt.call(t, e) > -1
                },
                a, !0), c = [function(e, n, r) {
                    return ! o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
                }]; i > s; s++) if (n = k.relative[e[s].type]) c = [h(g(c), n)];
                else {
                    if (n = k.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                        for (r = ++s; i > r && !k.relative[e[r].type]; r++);
                        return y(s > 1 && g(c), s > 1 && d(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*": ""
                        })).replace(lt, "$1"), n, r > s && v(e.slice(s, r)), i > r && v(e = e.slice(r)), i > r && d(e))
                    }
                    c.push(n)
                }
                return g(c)
            }
            function b(e, t) {
                var r = 0,
                o = t.length > 0,
                a = e.length > 0,
                s = function(i, s, u, l, c) {
                    var f, p, d, h = [],
                    g = 0,
                    y = "0",
                    v = i && [],
                    b = null != c,
                    x = j,
                    w = i || a && k.find.TAG("*", c && s.parentNode || s),
                    T = W += null == x ? 1 : Math.random() || .1;
                    for (b && (j = s !== H && s, N = r); null != (f = w[y]); y++) {
                        if (a && f) {
                            for (p = 0; d = e[p++];) if (d(f, s, u)) {
                                l.push(f);
                                break
                            }
                            b && (W = T, N = ++r)
                        }
                        o && ((f = !d && f) && g--, i && v.push(f))
                    }
                    if (g += y, o && y !== g) {
                        for (p = 0; d = t[p++];) d(v, h, s, u);
                        if (i) {
                            if (g > 0) for (; y--;) v[y] || h[y] || (h[y] = K.call(l));
                            h = m(h)
                        }
                        et.apply(l, h),
                        b && !i && h.length > 0 && g + t.length > 1 && n.uniqueSort(l)
                    }
                    return b && (W = T, j = x),
                    v
                };
                return o ? i(s) : s
            }
            function x(e, t, r) {
                for (var i = 0,
                o = t.length; o > i; i++) n(e, t[i], r);
                return r
            }
            function w(e, t, n, r) {
                var i, o, a, s, u, l = p(e);
                if (!r && 1 === l.length) {
                    if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && C.getById && 9 === t.nodeType && _ && k.relative[o[1].type]) {
                        if (t = (k.find.ID(a.matches[0].replace(Ct, Nt), t) || [])[0], !t) return n;
                        e = e.slice(o.shift().value.length)
                    }
                    for (i = yt.needsContext.test(e) ? 0 : o.length; i--&&(a = o[i], !k.relative[s = a.type]);) if ((u = k.find[s]) && (r = u(a.matches[0].replace(Ct, Nt), dt.test(o[0].type) && t.parentNode || t))) {
                        if (o.splice(i, 1), e = r.length && d(o), !e) return et.apply(n, r),
                        n;
                        break
                    }
                }
                return A(e, l)(r, t, !_, n, dt.test(e)),
                n
            }
            var T, C, N, k, E, S, A, j, D, L, H, q, _, M, O, F, B, P = "sizzle" + -new Date,
            R = e.document,
            W = 0,
            $ = 0,
            I = r(),
            z = r(),
            X = r(),
            U = !1,
            V = function(e, t) {
                return e === t ? (U = !0, 0) : 0
            },
            Y = typeof t,
            J = 1 << 31,
            G = {}.hasOwnProperty,
            Q = [],
            K = Q.pop,
            Z = Q.push,
            et = Q.push,
            tt = Q.slice,
            nt = Q.indexOf ||
            function(e) {
                for (var t = 0,
                n = this.length; n > t; t++) if (this[t] === e) return t;
                return - 1
            },
            rt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            it = "[\\x20\\t\\r\\n\\f]",
            ot = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            at = ot.replace("w", "w#"),
            st = "\\[" + it + "*(" + ot + ")" + it + "*(?:([*^$|!~]?=)" + it + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + at + ")|)|)" + it + "*\\]",
            ut = ":(" + ot + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + st.replace(3, 8) + ")*)|.*)\\)|)",
            lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
            ct = new RegExp("^" + it + "*," + it + "*"),
            pt = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
            dt = new RegExp(it + "*[+~]"),
            ht = new RegExp("=" + it + "*([^\\]'\"]*)" + it + "*\\]", "g"),
            gt = new RegExp(ut),
            mt = new RegExp("^" + at + "$"),
            yt = {
                ID: new RegExp("^#(" + ot + ")"),
                CLASS: new RegExp("^\\.(" + ot + ")"),
                TAG: new RegExp("^(" + ot.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + st),
                PSEUDO: new RegExp("^" + ut),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + rt + ")$", "i"),
                needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
            },
            vt = /^[^{]+\{\s*\[native \w/,
            bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            xt = /^(?:input|select|textarea|button)$/i,
            wt = /^h\d$/i,
            Tt = /'|\\/g,
            Ct = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
            Nt = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t: 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
            try {
                et.apply(Q = tt.call(R.childNodes), R.childNodes),
                Q[R.childNodes.length].nodeType
            } catch(kt) {
                et = {
                    apply: Q.length ?
                    function(e, t) {
                        Z.apply(e, tt.call(t))
                    }: function(e, t) {
                        for (var n = e.length,
                        r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }
            S = n.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName: !1
            },
            C = n.support = {},
            L = n.setDocument = function(e) {
                var t = e ? e.ownerDocument || e: R,
                n = t.defaultView;
                return t !== H && 9 === t.nodeType && t.documentElement ? (H = t, q = t.documentElement, _ = !S(t), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload",
                function() {
                    L()
                }), C.attributes = o(function(e) {
                    return e.className = "i",
                    !e.getAttribute("className")
                }), C.getElementsByTagName = o(function(e) {
                    return e.appendChild(t.createComment("")),
                    !e.getElementsByTagName("*").length
                }), C.getElementsByClassName = o(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                    e.firstChild.className = "i",
                    2 === e.getElementsByClassName("i").length
                }), C.getById = o(function(e) {
                    return q.appendChild(e).id = P,
                    !t.getElementsByName || !t.getElementsByName(P).length
                }), C.getById ? (k.find.ID = function(e, t) {
                    if (typeof t.getElementById !== Y && _) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                },
                k.filter.ID = function(e) {
                    var t = e.replace(Ct, Nt);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete k.find.ID, k.filter.ID = function(e) {
                    var t = e.replace(Ct, Nt);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== Y && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), k.find.TAG = C.getElementsByTagName ?
                function(e, t) {
                    return typeof t.getElementsByTagName !== Y ? t.getElementsByTagName(e) : void 0
                }: function(e, t) {
                    var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                },
                k.find.CLASS = C.getElementsByClassName &&
                function(e, t) {
                    return typeof t.getElementsByClassName !== Y && _ ? t.getElementsByClassName(e) : void 0
                },
                O = [], M = [], (C.qsa = vt.test(t.querySelectorAll)) && (o(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>",
                    e.querySelectorAll("[selected]").length || M.push("\\[" + it + "*(?:value|" + rt + ")"),
                    e.querySelectorAll(":checked").length || M.push(":checked")
                }), o(function(e) {
                    var n = t.createElement("input");
                    n.setAttribute("type", "hidden"),
                    e.appendChild(n).setAttribute("t", ""),
                    e.querySelectorAll("[t^='']").length && M.push("[*^$]=" + it + "*(?:''|\"\")"),
                    e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    M.push(",.*:")
                })), (C.matchesSelector = vt.test(F = q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && o(function(e) {
                    C.disconnectedMatch = F.call(e, "div"),
                    F.call(e, "[s!='']:x"),
                    O.push("!=", ut)
                }), M = M.length && new RegExp(M.join("|")), O = O.length && new RegExp(O.join("|")), B = vt.test(q.contains) || q.compareDocumentPosition ?
                function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement: e,
                    r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                }: function(e, t) {
                    if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                    return ! 1
                },
                V = q.compareDocumentPosition ?
                function(e, n) {
                    if (e === n) return U = !0,
                    0;
                    var r = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
                    return r ? 1 & r || !C.sortDetached && n.compareDocumentPosition(e) === r ? e === t || B(R, e) ? -1 : n === t || B(R, n) ? 1 : D ? nt.call(D, e) - nt.call(D, n) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                }: function(e, n) {
                    var r, i = 0,
                    o = e.parentNode,
                    a = n.parentNode,
                    u = [e],
                    l = [n];
                    if (e === n) return U = !0,
                    0;
                    if (!o || !a) return e === t ? -1 : n === t ? 1 : o ? -1 : a ? 1 : D ? nt.call(D, e) - nt.call(D, n) : 0;
                    if (o === a) return s(e, n);
                    for (r = e; r = r.parentNode;) u.unshift(r);
                    for (r = n; r = r.parentNode;) l.unshift(r);
                    for (; u[i] === l[i];) i++;
                    return i ? s(u[i], l[i]) : u[i] === R ? -1 : l[i] === R ? 1 : 0
                },
                t) : H
            },
            n.matches = function(e, t) {
                return n(e, null, null, t)
            },
            n.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== H && L(e), t = t.replace(ht, "='$1']"), !(!C.matchesSelector || !_ || O && O.test(t) || M && M.test(t))) try {
                    var r = F.call(e, t);
                    if (r || C.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch(i) {}
                return n(t, H, null, [e]).length > 0
            },
            n.contains = function(e, t) {
                return (e.ownerDocument || e) !== H && L(e),
                B(e, t)
            },
            n.attr = function(e, n) { (e.ownerDocument || e) !== H && L(e);
                var r = k.attrHandle[n.toLowerCase()],
                i = r && G.call(k.attrHandle, n.toLowerCase()) ? r(e, n, !_) : t;
                return null === e.getAttribute && (e.getAttribute = function(e) {
                    return ft(this).prop(e)
                }),
                i === t ? C.attributes || !_ ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value: null: i
            },
            n.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            },
            n.uniqueSort = function(e) {
                var t, n = [],
                r = 0,
                i = 0;
                if (U = !C.detectDuplicates, D = !C.sortStable && e.slice(0), e.sort(V), U) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return e
            },
            E = n.getText = function(e) {
                var t, n = "",
                r = 0,
                i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += E(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else for (; t = e[r]; r++) n += E(t);
                return n
            },
            k = n.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: yt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(Ct, Nt),
                        e[3] = (e[4] || e[5] || "").replace(Ct, Nt),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                        "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]),
                        e
                    },
                    PSEUDO: function(e) {
                        var n, r = !e[5] && e[2];
                        return yt.CHILD.test(e[0]) ? null: (e[3] && e[4] !== t ? e[2] = e[4] : r && gt.test(r) && (n = p(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Ct, Nt).toLowerCase();
                        return "*" === e ?
                        function() {
                            return ! 0
                        }: function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = I[e + " "];
                        return t || (t = new RegExp("(^|" + it + ")" + e + "(" + it + "|$)")) && I(e,
                        function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Y && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, r) {
                        return function(i) {
                            var o = n.attr(i, e);
                            return null == o ? "!=" === t: t ? (o += "", "=" === t ? o === r: "!=" === t ? o !== r: "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.slice( - r.length) === r: "~=" === t ? (" " + o + " ").indexOf(r) > -1 : "|=" === t ? o === r || o.slice(0, r.length + 1) === r + "-": !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice( - 4),
                        s = "of-type" === t;
                        return 1 === r && 0 === i ?
                        function(e) {
                            return !! e.parentNode
                        }: function(t, n, u) {
                            var l, c, f, p, d, h, g = o !== a ? "nextSibling": "previousSibling",
                            m = t.parentNode,
                            y = s && t.nodeName.toLowerCase(),
                            v = !u && !s;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (f = t; f = f[g];) if (s ? f.nodeName.toLowerCase() === y: 1 === f.nodeType) return ! 1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return ! 0
                                }
                                if (h = [a ? m.firstChild: m.lastChild], a && v) {
                                    for (c = m[P] || (m[P] = {}), l = c[e] || [], d = l[0] === W && l[1], p = l[0] === W && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();) if (1 === f.nodeType && ++p && f === t) {
                                        c[e] = [W, d, p];
                                        break
                                    }
                                } else if (v && (l = (t[P] || (t[P] = {}))[e]) && l[0] === W) p = l[1];
                                else for (; (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y: 1 !== f.nodeType) || !++p || (v && ((f[P] || (f[P] = {}))[e] = [W, p]), f !== t)););
                                return p -= i,
                                p === r || p % r === 0 && p / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var r, o = k.pseudos[e] || k.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                        return o[P] ? o(t) : o.length > 1 ? (r = [e, e, "", t], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
                            for (var r, i = o(e, t), a = i.length; a--;) r = nt.call(e, i[a]),
                            e[r] = !(n[r] = i[a])
                        }) : function(e) {
                            return o(e, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                        n = [],
                        r = A(e.replace(lt, "$1"));
                        return r[P] ? i(function(e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e,
                            r(t, null, o, n),
                            !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(t) {
                            return n(e, t).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
                        }
                    }),
                    lang: i(function(e) {
                        return mt.test(e || "") || n.error("unsupported lang: " + e),
                        e = e.replace(Ct, Nt).toLowerCase(),
                        function(t) {
                            var n;
                            do
                            if (n = _ ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(),
                            n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return ! 1
                        }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === q
                    },
                    focus: function(e) {
                        return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return ! 1;
                        return ! 0
                    },
                    parent: function(e) {
                        return ! k.pseudos.empty(e)
                    },
                    header: function(e) {
                        return wt.test(e.nodeName)
                    },
                    input: function(e) {
                        return xt.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(e, t) {
                        return [t - 1]
                    }),
                    eq: c(function(e, t, n) {
                        return [0 > n ? n + t: n]
                    }),
                    even: c(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: c(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: c(function(e, t, n) {
                        for (var r = 0 > n ? n + t: n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: c(function(e, t, n) {
                        for (var r = 0 > n ? n + t: n; ++r < t;) e.push(r);
                        return e
                    })
                }
            },
            k.pseudos.nth = k.pseudos.eq;
            for (T in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) k.pseudos[T] = u(T);
            for (T in {
                submit: !0,
                reset: !0
            }) k.pseudos[T] = l(T);
            f.prototype = k.filters = k.pseudos,
            k.setFilters = new f,
            A = n.compile = function(e, t) {
                var n, r = [],
                i = [],
                o = X[e + " "];
                if (!o) {
                    for (t || (t = p(e)), n = t.length; n--;) o = v(t[n]),
                    o[P] ? r.push(o) : i.push(o);
                    o = X(e, b(i, r))
                }
                return o
            },
            C.sortStable = P.split("").sort(V).join("") === P,
            C.detectDuplicates = U,
            L(),
            C.sortDetached = o(function(e) {
                return 1 & e.compareDocumentPosition(H.createElement("div"))
            }),
            o(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                "#" === e.firstChild.getAttribute("href")
            }) || a("type|href|height|width",
            function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }),
            C.attributes && o(function(e) {
                return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
            }) || a("value",
            function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }),
            o(function(e) {
                return null == e.getAttribute("disabled")
            }) || a(rt,
            function(e, t, n) {
                var r;
                return n ? void 0 : (r = e.getAttributeNode(t)) && r.specified ? r.value: e[t] === !0 ? t.toLowerCase() : null
            }),
            ft.find = n,
            ft.expr = n.selectors,
            ft.expr[":"] = ft.expr.pseudos,
            ft.unique = n.uniqueSort,
            ft.text = n.getText,
            ft.isXMLDoc = n.isXML,
            ft.contains = n.contains
        } (e);
        var Et = {};
        ft.Callbacks = function(e) {
            e = "string" == typeof e ? Et[e] || i(e) : ft.extend({},
            e);
            var n, r, o, a, s, u, l = [],
            c = !e.once && [],
            f = function(t) {
                for (r = e.memory && t, o = !0, s = u || 0, u = 0, a = l.length, n = !0; l && a > s; s++) if (l[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    r = !1;
                    break
                }
                n = !1,
                l && (c ? c.length && f(c.shift()) : r ? l = [] : p.disable())
            },
            p = {
                add: function() {
                    if (l) {
                        var t = l.length; !
                        function i(t) {
                            ft.each(t,
                            function(t, n) {
                                var r = ft.type(n);
                                "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                            })
                        } (arguments),
                        n ? a = l.length: r && (u = t, f(r))
                    }
                    return this
                },
                remove: function() {
                    return l && ft.each(arguments,
                    function(e, t) {
                        for (var r; (r = ft.inArray(t, l, r)) > -1;) l.splice(r, 1),
                        n && (a >= r && a--, s >= r && s--)
                    }),
                    this
                },
                has: function(e) {
                    return e ? ft.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [],
                    a = 0,
                    this
                },
                disable: function() {
                    return l = c = r = t,
                    this
                },
                disabled: function() {
                    return ! l
                },
                lock: function() {
                    return c = t,
                    r || p.disable(),
                    this
                },
                locked: function() {
                    return ! c
                },
                fireWith: function(e, t) {
                    return ! l || o && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? c.push(t) : f(t)),
                    this
                },
                fire: function() {
                    return p.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !! o
                }
            };
            return p
        },
        ft.extend({
            Deferred: function(e) {
                var t = [["resolve", "done", ft.Callbacks("once memory"), "resolved"], ["reject", "fail", ft.Callbacks("once memory"), "rejected"], ["notify", "progress", ft.Callbacks("memory")]],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments),
                        this
                    },
                    then: function() {
                        var e = arguments;
                        return ft.Deferred(function(n) {
                            ft.each(t,
                            function(t, o) {
                                var a = o[0],
                                s = ft.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && ft.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }),
                            e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ft.extend(e, r) : r
                    }
                },
                i = {};
                return r.pipe = r.then,
                ft.each(t,
                function(e, o) {
                    var a = o[2],
                    s = o[3];
                    r[o[1]] = a.add,
                    s && a.add(function() {
                        n = s
                    },
                    t[1 ^ e][2].disable, t[2][2].lock),
                    i[o[0]] = function() {
                        return i[o[0] + "With"](this === i ? r: this, arguments),
                        this
                    },
                    i[o[0] + "With"] = a.fireWith
                }),
                r.promise(i),
                e && e.call(i, i),
                i
            },
            when: function(e) {
                var t, n, r, i = 0,
                o = at.call(arguments),
                a = o.length,
                s = 1 !== a || e && ft.isFunction(e.promise) ? a: 0,
                u = 1 === s ? e: ft.Deferred(),
                l = function(e, n, r) {
                    return function(i) {
                        n[e] = this,
                        r[e] = arguments.length > 1 ? at.call(arguments) : i,
                        r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                    }
                };
                if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && ft.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
                return s || u.resolveWith(r, o),
                u.promise()
            }
        }),
        ft.support = function(t) {
            var n, r, i, o, a, s, u, l, c, f = Q.createElement("div");
            if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = f.getElementsByTagName("*") || [], r = f.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
            o = Q.createElement("select"),
            s = o.appendChild(Q.createElement("option")),
            i = f.getElementsByTagName("input")[0],
            r.style.cssText = "top:1px;float:left;opacity:.5",
            t.getSetAttribute = "t" !== f.className,
            t.leadingWhitespace = 3 === f.firstChild.nodeType,
            t.tbody = !f.getElementsByTagName("tbody").length,
            t.htmlSerialize = !!f.getElementsByTagName("link").length,
            t.style = /top/.test(r.getAttribute("style")),
            t.hrefNormalized = "/a" === r.getAttribute("href"),
            t.opacity = /^0.5/.test(r.style.opacity),
            t.cssFloat = !!r.style.cssFloat,
            t.checkOn = !!i.value,
            t.optSelected = s.selected,
            t.enctype = !!Q.createElement("form").enctype,
            t.html5Clone = "<:nav></:nav>" !== Q.createElement("nav").cloneNode(!0).outerHTML,
            t.inlineBlockNeedsLayout = !1,
            t.shrinkWrapBlocks = !1,
            t.pixelPosition = !1,
            t.deleteExpando = !0,
            t.noCloneEvent = !0,
            t.reliableMarginRight = !0,
            t.boxSizingReliable = !0,
            i.checked = !0,
            t.noCloneChecked = i.cloneNode(!0).checked,
            o.disabled = !0,
            t.optDisabled = !s.disabled;
            try {
                delete f.test
            } catch(p) {
                t.deleteExpando = !1
            }
            i = Q.createElement("input"),
            i.setAttribute("value", ""),
            t.input = "" === i.getAttribute("value"),
            i.value = "t",
            i.setAttribute("type", "radio"),
            t.radioValue = "t" === i.value,
            i.setAttribute("checked", "t"),
            i.setAttribute("name", "t"),
            a = Q.createDocumentFragment(),
            a.appendChild(i),
            t.appendChecked = i.checked,
            t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked,
            f.attachEvent && (f.attachEvent("onclick",
            function() {
                t.noCloneEvent = !1
            }), f.cloneNode(!0).click());
            for (c in {
                submit: !0,
                change: !0,
                focusin: !0
            }) f.setAttribute(u = "on" + c, "t"),
            t[c + "Bubbles"] = u in e || f.attributes[u].expando === !1;
            f.style.backgroundClip = "content-box",
            f.cloneNode(!0).style.backgroundClip = "",
            t.clearCloneStyle = "content-box" === f.style.backgroundClip;
            for (c in ft(t)) break;
            return t.ownLast = "0" !== c,
            ft(function() {
                var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = Q.getElementsByTagName("body")[0];
                a && (n = Q.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = f.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = l && 0 === i[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ft.swap(a, null != a.style.zoom ? {
                    zoom: 1
                }: {},
                function() {
                    t.boxSizing = 4 === f.offsetWidth
                }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(f, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(f, null) || {
                    width: "4px"
                }).width, r = f.appendChild(Q.createElement("div")), r.style.cssText = f.style.cssText = o, r.style.marginRight = r.style.width = "0", f.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof f.style.zoom !== J && (f.innerHTML = "", f.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", f.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== f.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = f = i = r = null)
            }),
            n = o = a = s = r = i = null,
            t
        } ({});
        var St = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        At = /([A-Z])/g;
        ft.extend({
            cache: {},
            noData: {
                applet: !0,
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return e = e.nodeType ? ft.cache[e[ft.expando]] : e[ft.expando],
                !!e && !u(e)
            },
            data: function(e, t, n) {
                return o(e, t, n)
            },
            removeData: function(e, t) {
                return a(e, t)
            },
            _data: function(e, t, n) {
                return o(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return a(e, t, !0)
            },
            acceptData: function(e) {
                if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return ! 1;
                var t = e.nodeName && ft.noData[e.nodeName.toLowerCase()];
                return null === e.getAttribute && (e.getAttribute = function(e) {
                    return ft(this).prop(e)
                }),
                !t || t !== !0 && e.getAttribute("classid") === t
            }
        }),
        ft.fn.extend({
            data: function(e, n) {
                var r, i, o = null,
                a = 0,
                u = this[0];
                if (e === t) {
                    if (this.length && (o = ft.data(u), 1 === u.nodeType && !ft._data(u, "parsedAttrs"))) {
                        for (r = u.attributes; a < r.length; a++) i = r[a].name,
                        0 === i.indexOf("data-") && (i = ft.camelCase(i.slice(5)), s(u, i, o[i]));
                        ft._data(u, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function() {
                    ft.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    ft.data(this, e, n)
                }) : u ? s(u, e, ft.data(u, e)) : null
            },
            removeData: function(e) {
                return this.each(function() {
                    ft.removeData(this, e)
                })
            }
        }),
        ft.extend({
            queue: function(e, t, n) {
                var r;
                return e ? (t = (t || "fx") + "queue", r = ft._data(e, t), n && (!r || ft.isArray(n) ? r = ft._data(e, t, ft.makeArray(n)) : r.push(n)), r || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = ft.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = ft._queueHooks(e, t),
                a = function() {
                    ft.dequeue(e, t)
                };
                "inprogress" === i && (i = n.shift(), r--),
                i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)),
                !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return ft._data(e, n) || ft._data(e, n, {
                    empty: ft.Callbacks("once memory").add(function() {
                        ft._removeData(e, t + "queue"),
                        ft._removeData(e, n)
                    })
                })
            }
        }),
        ft.fn.extend({
            queue: function(e, n) {
                var r = 2;
                return "string" != typeof e && (n = e, e = "fx", r--),
                arguments.length < r ? ft.queue(this[0], e) : n === t ? this: this.each(function() {
                    var t = ft.queue(this, e, n);
                    ft._queueHooks(this, e),
                    "fx" === e && "inprogress" !== t[0] && ft.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    ft.dequeue(this, e)
                })
            },
            delay: function(e, t) {
                return e = ft.fx ? ft.fx.speeds[e] || e: e,
                t = t || "fx",
                this.queue(t,
                function(t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(r)
                    }
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, n) {
                var r, i = 1,
                o = ft.Deferred(),
                a = this,
                s = this.length,
                u = function() {--i || o.resolveWith(a, [a])
                };
                for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = ft._data(a[s], e + "queueHooks"),
                r && r.empty && (i++, r.empty.add(u));
                return u(),
                o.promise(n)
            }
        });
        var jt, Dt, Lt = /[\t\r\n\f]/g,
        Ht = /\r/g,
        qt = /^(?:input|select|textarea|button|object)$/i,
        _t = /^(?:a|area)$/i,
        Mt = /^(?:checked|selected)$/i,
        Ot = ft.support.getSetAttribute,
        Ft = ft.support.input;
        ft.fn.extend({
            attr: function(e, t) {
                return ft.access(this, ft.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    ft.removeAttr(this, e)
                })
            },
            prop: function(e, t) {
                return ft.access(this, ft.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = ft.propFix[e] || e,
                this.each(function() {
                    try {
                        this[e] = t,
                        delete this[e]
                    } catch(n) {}
                })
            },
            addClass: function(e) {
                var t, n, r, i, o, a = 0,
                s = this.length,
                u = "string" == typeof e && e;
                if (ft.isFunction(e)) return this.each(function(t) {
                    ft(this).addClass(e.call(this, t, this.className))
                });
                if (u) for (t = (e || "").match(dt) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Lt, " ") : " ")) {
                    for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                    n.className = ft.trim(r)
                }
                return this
            },
            removeClass: function(e) {
                var t, n, r, i, o, a = 0,
                s = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
                if (ft.isFunction(e)) return this.each(function(t) {
                    ft(this).removeClass(e.call(this, t, this.className))
                });
                if (u) for (t = (e || "").match(dt) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Lt, " ") : "")) {
                    for (o = 0; i = t[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                    n.className = e ? ft.trim(r) : ""
                }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(ft.isFunction(e) ?
                function(n) {
                    ft(this).toggleClass(e.call(this, n, this.className, t), t)
                }: function() {
                    if ("string" === n) for (var t, r = 0,
                    i = ft(this), o = e.match(dt) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else(n === J || "boolean" === n) && (this.className && ft._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "": ft._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ",
                n = 0,
                r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Lt, " ").indexOf(t) >= 0) return ! 0;
                return ! 1
            },
            val: function(e) {
                var n, r, i, o = this[0]; {
                    if (arguments.length) return i = ft.isFunction(e),
                    this.each(function(n) {
                        var o;
                        1 === this.nodeType && (o = i ? e.call(this, n, ft(this).val()) : e, null == o ? o = "": "number" == typeof o ? o += "": ft.isArray(o) && (o = ft.map(o,
                        function(e) {
                            return null == e ? "": e + ""
                        })), r = ft.valHooks[this.type] || ft.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                    });
                    if (o) return r = ft.valHooks[o.type] || ft.valHooks[o.nodeName.toLowerCase()],
                    r && "get" in r && (n = r.get(o, "value")) !== t ? n: (n = o.value, "string" == typeof n ? n.replace(Ht, "") : null == n ? "": n)
                }
            }
        }),
        ft.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = ft.find.attr(e, "value");
                        return null != t ? t: e.text
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, r = e.options,
                        i = e.selectedIndex,
                        o = "select-one" === e.type || 0 > i,
                        a = o ? null: [], s = o ? i + 1 : r.length, u = 0 > i ? s: o ? i: 0; s > u; u++) if (n = r[u], !(!n.selected && u !== i || (ft.support.optDisabled ? n.disabled: null !== n.getAttribute("disabled")) || n.parentNode.disabled && ft.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ft(n).val(), o) return t;
                            a.push(t)
                        }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, r, i = e.options,
                        o = ft.makeArray(t), a = i.length; a--;) r = i[a],
                        (r.selected = ft.inArray(ft(r).val(), o) >= 0) && (n = !0);
                        return n || (e.selectedIndex = -1),
                        o
                    }
                }
            },
            attr: function(e, n, r) {
                var i, o, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === J ? ft.prop(e, n, r) : (1 === a && ft.isXMLDoc(e) || (n = n.toLowerCase(), i = ft.attrHooks[n] || (ft.expr.match.bool.test(n) ? Dt: jt)), r === t ? i && "get" in i && null !== (o = i.get(e, n)) ? o: (o = ft.find.attr(e, n), null == o ? t: o) : null !== r ? i && "set" in i && (o = i.set(e, r, n)) !== t ? o: (e.setAttribute(n, r + ""), r) : void ft.removeAttr(e, n))
            },
            removeAttr: function(e, t) {
                var n, r, i = 0,
                o = t && t.match(dt);
                if (o && 1 === e.nodeType) for (; n = o[i++];) r = ft.propFix[n] || n,
                ft.expr.match.bool.test(n) ? Ft && Ot || !Mt.test(n) ? e[r] = !1 : e[ft.camelCase("default-" + n)] = e[r] = !1 : ft.attr(e, n, ""),
                e.removeAttribute(Ot ? n: r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ft.support.radioValue && "radio" === t && ft.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                            t
                        }
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(e, n, r) {
                var i, o, a, s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !ft.isXMLDoc(e),
                a && (n = ft.propFix[n] || n, o = ft.propHooks[n]),
                r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i: e[n] = r: o && "get" in o && null !== (i = o.get(e, n)) ? i: e[n]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = ft.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : qt.test(e.nodeName) || _t.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }),
        Dt = {
            set: function(e, t, n) {
                return t === !1 ? ft.removeAttr(e, n) : Ft && Ot || !Mt.test(n) ? e.setAttribute(!Ot && ft.propFix[n] || n, n) : e[ft.camelCase("default-" + n)] = e[n] = !0,
                n
            }
        },
        ft.each(ft.expr.match.bool.source.match(/\w+/g),
        function(e, n) {
            var r = ft.expr.attrHandle[n] || ft.find.attr;
            ft.expr.attrHandle[n] = Ft && Ot || !Mt.test(n) ?
            function(e, n, i) {
                var o = ft.expr.attrHandle[n],
                a = i ? t: (ft.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
                return ft.expr.attrHandle[n] = o,
                a
            }: function(e, n, r) {
                return r ? t: e[ft.camelCase("default-" + n)] ? n.toLowerCase() : null
            }
        }),
        Ft && Ot || (ft.attrHooks.value = {
            set: function(e, t, n) {
                return ft.nodeName(e, "input") ? void(e.defaultValue = t) : jt && jt.set(e, t, n)
            }
        }),
        Ot || (jt = {
            set: function(e, n, r) {
                var i = e.getAttributeNode(r);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)),
                i.value = n += "",
                "value" === r || n === e.getAttribute(r) ? n: t
            }
        },
        ft.expr.attrHandle.id = ft.expr.attrHandle.name = ft.expr.attrHandle.coords = function(e, n, r) {
            var i;
            return r ? t: (i = e.getAttributeNode(n)) && "" !== i.value ? i.value: null
        },
        ft.valHooks.button = {
            get: function(e, n) {
                var r = e.getAttributeNode(n);
                return r && r.specified ? r.value: t
            },
            set: jt.set
        },
        ft.attrHooks.contenteditable = {
            set: function(e, t, n) {
                jt.set(e, "" === t ? !1 : t, n)
            }
        },
        ft.each(["width", "height"],
        function(e, t) {
            ft.attrHooks[t] = {
                set: function(e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                }
            }
        })),
        ft.support.hrefNormalized || ft.each(["href", "src"],
        function(e, t) {
            ft.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }),
        ft.support.style || (ft.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || t
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        }),
        ft.support.optSelected || (ft.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
                null
            }
        }),
        ft.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
        function() {
            ft.propFix[this.toLowerCase()] = this
        }),
        ft.support.enctype || (ft.propFix.enctype = "encoding"),
        ft.each(["radio", "checkbox"],
        function() {
            ft.valHooks[this] = {
                set: function(e, t) {
                    return ft.isArray(t) ? e.checked = ft.inArray(ft(e).val(), t) >= 0 : void 0
                }
            },
            ft.support.checkOn || (ft.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on": e.value
            })
        });
        var Bt = /^(?:input|select|textarea)$/i,
        Pt = /^key/,
        Rt = /^(?:mouse|contextmenu)|click/,
        Wt = /^(?:focusinfocus|focusoutblur)$/,
        $t = /^([^.]*)(?:\.(.+)|)$/;
        ft.event = {
            global: {},
            add: function(e, n, r, i, o) {
                var a, s, u, l, c, f, p, d, h, g, m, y = ft._data(e);
                if (y) {
                    for (r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = ft.guid++), (s = y.events) || (s = y.events = {}), (f = y.handle) || (f = y.handle = function(e) {
                        return typeof ft === J || e && ft.event.triggered === e.type ? t: ft.event.dispatch.apply(f.elem, arguments)
                    },
                    f.elem = e), n = (n || "").match(dt) || [""], u = n.length; u--;) a = $t.exec(n[u]) || [],
                    h = m = a[1],
                    g = (a[2] || "").split(".").sort(),
                    h && (c = ft.event.special[h] || {},
                    h = (o ? c.delegateType: c.bindType) || h, c = ft.event.special[h] || {},
                    p = ft.extend({
                        type: h,
                        origType: m,
                        data: i,
                        handler: r,
                        guid: r.guid,
                        selector: o,
                        needsContext: o && ft.expr.match.needsContext.test(o),
                        namespace: g.join(".")
                    },
                    l), (d = s[h]) || (d = s[h] = [], d.delegateCount = 0, c.setup && c.setup.call(e, i, g, f) !== !1 || (e.addEventListener ? e.addEventListener(h, f, !1) : e.attachEvent && e.attachEvent("on" + h, f))), c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), ft.event.global[h] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, r, i) {
                var o, a, s, u, l, c, f, p, d, h, g, m = ft.hasData(e) && ft._data(e);
                if (m && (c = m.events)) {
                    for (t = (t || "").match(dt) || [""], l = t.length; l--;) if (s = $t.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        for (f = ft.event.special[d] || {},
                        d = (r ? f.delegateType: f.bindType) || d, p = c[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = p.length; o--;) a = p[o],
                        !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, f.remove && f.remove.call(e, a));
                        u && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || ft.removeEvent(e, d, m.handle), delete c[d])
                    } else for (d in c) ft.event.remove(e, d + t[l], n, r, !0);
                    ft.isEmptyObject(c) && (delete m.handle, ft._removeData(e, "events"))
                }
            },
            trigger: function(n, r, i, o) {
                var a, s, u, l, c, f, p, d = [i || Q],
                h = lt.call(n, "type") ? n.type: n,
                g = lt.call(n, "namespace") ? n.namespace.split(".") : [];
                if (u = f = i = i || Q, 3 !== i.nodeType && 8 !== i.nodeType && !Wt.test(h + ft.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), s = h.indexOf(":") < 0 && "on" + h, n = n[ft.expando] ? n: new ft.Event(h, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = g.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : ft.makeArray(r, [n]), c = ft.event.special[h] || {},
                o || !c.trigger || c.trigger.apply(i, r) !== !1)) {
                    if (!o && !c.noBubble && !ft.isWindow(i)) {
                        for (l = c.delegateType || h, Wt.test(l + h) || (u = u.parentNode); u; u = u.parentNode) d.push(u),
                        f = u;
                        f === (i.ownerDocument || Q) && d.push(f.defaultView || f.parentWindow || e)
                    }
                    for (p = 0; (u = d[p++]) && !n.isPropagationStopped();) n.type = p > 1 ? l: c.bindType || h,
                    a = (ft._data(u, "events") || {})[n.type] && ft._data(u, "handle"),
                    a && a.apply(u, r),
                    a = s && u[s],
                    a && ft.acceptData(u) && a.apply && a.apply(u, r) === !1 && n.preventDefault();
                    if (n.type = h, !o && !n.isDefaultPrevented() && (!c._default || c._default.apply(d.pop(), r) === !1) && ft.acceptData(i) && s && i[h] && !ft.isWindow(i)) {
                        f = i[s],
                        f && (i[s] = null),
                        ft.event.triggered = h;
                        try {
                            i[h]()
                        } catch(m) {}
                        ft.event.triggered = t,
                        f && (i[s] = f)
                    }
                    return n.result
                }
            },
            dispatch: function(e) {
                e = ft.event.fix(e);
                var n, r, i, o, a, s = [],
                u = at.call(arguments),
                l = (ft._data(this, "events") || {})[e.type] || [],
                c = ft.event.special[e.type] || {};
                if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                    for (s = ft.event.handlers.call(this, e, l), n = 0; (o = s[n++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, a = 0; (i = o.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((ft.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e),
                    e.result
                }
            },
            handlers: function(e, n) {
                var r, i, o, a, s = [],
                u = n.delegateCount,
                l = e.target;
                if (u && l.nodeType && (!e.button || "click" !== e.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                    for (o = [], a = 0; u > a; a++) i = n[a],
                    r = i.selector + " ",
                    o[r] === t && (o[r] = i.needsContext ? ft(r, this).index(l) >= 0 : ft.find(r, this, null, [l]).length),
                    o[r] && o.push(i);
                    o.length && s.push({
                        elem: l,
                        handlers: o
                    })
                }
                return u < n.length && s.push({
                    elem: this,
                    handlers: n.slice(u)
                }),
                s
            },
            fix: function(e) {
                if (e[ft.expando]) return e;
                var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
                for (a || (this.fixHooks[i] = a = Rt.test(i) ? this.mouseHooks: Pt.test(i) ? this.keyHooks: {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ft.Event(o), t = r.length; t--;) n = r[t],
                e[n] = o[n];
                return e.target || (e.target = o.srcElement || Q),
                3 === e.target.nodeType && (e.target = e.target.parentNode),
                e.metaKey = !!e.metaKey,
                a.filter ? a.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                    e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var r, i, o, a = n.button,
                    s = n.fromElement;
                    return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || Q, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)),
                    !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement: s),
                    e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
                    e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== f() && this.focus) try {
                            return this.focus(),
                            !1
                        } catch(e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === f() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return ft.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return ft.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== t && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, r) {
                var i = ft.extend(new ft.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? ft.event.trigger(i, null, t) : ft.event.dispatch.call(t, i),
                i.isDefaultPrevented() && n.preventDefault()
            }
        },
        ft.removeEvent = Q.removeEventListener ?
        function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        }: function(e, t, n) {
            var r = "on" + t;
            e.detachEvent && (typeof e[r] === J && (e[r] = null), e.detachEvent(r, n))
        },
        ft.Event = function(e, t) {
            return this instanceof ft.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l: c) : this.type = e, t && ft.extend(this, t), this.timeStamp = e && e.timeStamp || ft.now(), void(this[ft.expando] = !0)) : new ft.Event(e, t)
        },
        ft.Event.prototype = {
            isDefaultPrevented: c,
            isPropagationStopped: c,
            isImmediatePropagationStopped: c,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = l,
                e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = l,
                e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = l,
                this.stopPropagation()
            }
        },
        ft.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
        function(e, t) {
            ft.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                    return (!i || i !== r && !ft.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t),
                    n
                }
            }
        }),
        ft.support.submitBubbles || (ft.event.special.submit = {
            setup: function() {
                return ft.nodeName(this, "form") ? !1 : void ft.event.add(this, "click._submit keypress._submit",
                function(e) {
                    var n = e.target,
                    r = ft.nodeName(n, "input") || ft.nodeName(n, "button") ? n.form: t;
                    r && !ft._data(r, "submitBubbles") && (ft.event.add(r, "submit._submit",
                    function(e) {
                        e._submit_bubble = !0
                    }), ft._data(r, "submitBubbles", !0))
                })
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ft.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return ft.nodeName(this, "form") ? !1 : void ft.event.remove(this, "._submit")
            }
        }),
        ft.support.changeBubbles || (ft.event.special.change = {
            setup: function() {
                return Bt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ft.event.add(this, "propertychange._change",
                function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), ft.event.add(this, "click._change",
                function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1),
                    ft.event.simulate("change", this, e, !0)
                })), !1) : void ft.event.add(this, "beforeactivate._change",
                function(e) {
                    var t = e.target;
                    Bt.test(t.nodeName) && !ft._data(t, "changeBubbles") && (ft.event.add(t, "change._change",
                    function(e) { ! this.parentNode || e.isSimulated || e.isTrigger || ft.event.simulate("change", this.parentNode, e, !0)
                    }), ft._data(t, "changeBubbles", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return ft.event.remove(this, "._change"),
                !Bt.test(this.nodeName)
            }
        }),
        ft.support.focusinBubbles || ft.each({
            focus: "focusin",
            blur: "focusout"
        },
        function(e, t) {
            var n = 0,
            r = function(e) {
                ft.event.simulate(t, e.target, ft.event.fix(e), !0)
            };
            ft.event.special[t] = {
                setup: function() {
                    0 === n++&&Q.addEventListener(e, r, !0)
                },
                teardown: function() {
                    0 === --n && Q.removeEventListener(e, r, !0)
                }
            }
        }),
        ft.fn.extend({
            on: function(e, n, r, i, o) {
                var a, s;
                if ("object" == typeof e) {
                    "string" != typeof n && (r = r || n, n = t);
                    for (a in e) this.on(a, n, r, e[a], o);
                    return this
                }
                if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = c;
                else if (!i) return this;
                return 1 === o && (s = i, i = function(e) {
                    return ft().off(e),
                    s.apply(this, arguments)
                },
                i.guid = s.guid || (s.guid = ft.guid++)),
                this.each(function() {
                    ft.event.add(this, e, i, r, n)
                })
            },
            one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function(e, n, r) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj,
                ft(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace: i.origType, i.selector, i.handler),
                this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, n, e[o]);
                    return this
                }
                return (n === !1 || "function" == typeof n) && (r = n, n = t),
                r === !1 && (r = c),
                this.each(function() {
                    ft.event.remove(this, e, r, n)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    ft.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? ft.event.trigger(e, t, n, !0) : void 0
            }
        });
        var It = /^.[^:#\[\.,]*$/,
        zt = /^(?:parents|prev(?:Until|All))/,
        Xt = ft.expr.match.needsContext,
        Ut = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        ft.fn.extend({
            find: function(e) {
                var t, n = [],
                r = this,
                i = r.length;
                if ("string" != typeof e) return this.pushStack(ft(e).filter(function() {
                    for (t = 0; i > t; t++) if (ft.contains(r[t], this)) return ! 0
                }));
                for (t = 0; i > t; t++) ft.find(e, r[t], n);
                return n = this.pushStack(i > 1 ? ft.unique(n) : n),
                n.selector = this.selector ? this.selector + " " + e: e,
                n
            },
            has: function(e) {
                var t, n = ft(e, this),
                r = n.length;
                return this.filter(function() {
                    for (t = 0; r > t; t++) if (ft.contains(this, n[t])) return ! 0
                })
            },
            not: function(e) {
                return this.pushStack(d(this, e || [], !0))
            },
            filter: function(e) {
                return this.pushStack(d(this, e || [], !1))
            },
            is: function(e) {
                return !! d(this, "string" == typeof e && Xt.test(e) ? ft(e) : e || [], !1).length
            },
            closest: function(e, t) {
                for (var n, r = 0,
                i = this.length,
                o = [], a = Xt.test(e) || "string" != typeof e ? ft(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ft.find.matchesSelector(n, e))) {
                    n = o.push(n);
                    break
                }
                return this.pushStack(o.length > 1 ? ft.unique(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? ft.inArray(this[0], ft(e)) : ft.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
            },
            add: function(e, t) {
                var n = "string" == typeof e ? ft(e, t) : ft.makeArray(e && e.nodeType ? [e] : e),
                r = ft.merge(this.get(), n);
                return this.pushStack(ft.unique(r))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
            }
        }),
        ft.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t: null
            },
            parents: function(e) {
                return ft.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return ft.dir(e, "parentNode", n)
            },
            next: function(e) {
                return p(e, "nextSibling")
            },
            prev: function(e) {
                return p(e, "previousSibling")
            },
            nextAll: function(e) {
                return ft.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return ft.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return ft.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return ft.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return ft.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return ft.sibling(e.firstChild)
            },
            contents: function(e) {
                return ft.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: ft.merge([], e.childNodes)
            }
        },
        function(e, t) {
            ft.fn[e] = function(n, r) {
                var i = ft.map(this, t, n);
                return "Until" !== e.slice( - 5) && (r = n),
                r && "string" == typeof r && (i = ft.filter(r, i)),
                this.length > 1 && (Ut[e] || (i = ft.unique(i)), zt.test(e) && (i = i.reverse())),
                this.pushStack(i)
            }
        }),
        ft.extend({
            filter: function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"),
                1 === t.length && 1 === r.nodeType ? ft.find.matchesSelector(r, e) ? [r] : [] : ft.find.matches(e, ft.grep(t,
                function(e) {
                    return 1 === e.nodeType
                }))
            },
            dir: function(e, n, r) {
                for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !ft(o).is(r));) 1 === o.nodeType && i.push(o),
                o = o[n];
                return i
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        });
        var Vt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Yt = / jQuery\d+="(?:null|\d+)"/g,
        Jt = new RegExp("<(?:" + Vt + ")[\\s/>]", "i"),
        Gt = /^\s+/,
        Qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Kt = /<([\w:]+)/,
        Zt = /<tbody/i,
        en = /<|&#?\w+;/,
        tn = /<(?:script|style|link)/i,
        nn = /^(?:checkbox|radio)$/i,
        rn = /checked\s*(?:[^=]|=\s*.checked.)/i,
        on = /^$|\/(?:java|ecma)script/i,
        an = /^true\/(.*)/,
        sn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        un = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ft.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        ln = h(Q),
        cn = ln.appendChild(Q.createElement("div"));
        un.optgroup = un.option,
        un.tbody = un.tfoot = un.colgroup = un.caption = un.thead,
        un.th = un.td,
        ft.fn.extend({
            text: function(e) {
                return ft.access(this,
                function(e) {
                    return e === t ? ft.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Q).createTextNode(e))
                },
                null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments,
                function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = g(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments,
                function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = g(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments,
                function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments,
                function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, r = e ? ft.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ft.cleanData(w(n)),
                n.parentNode && (t && ft.contains(n.ownerDocument, n) && v(w(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && ft.cleanData(w(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && ft.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e,
                t = null == t ? e: t,
                this.map(function() {
                    return ft.clone(this, e, t)
                })
            },
            html: function(e) {
                return ft.access(this,
                function(e) {
                    var n = this[0] || {},
                    r = 0,
                    i = this.length;
                    if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Yt, "") : t;
                    if (! ("string" != typeof e || tn.test(e) || !ft.support.htmlSerialize && Jt.test(e) || !ft.support.leadingWhitespace && Gt.test(e) || un[(Kt.exec(e) || ["", ""])[1].toLowerCase()])) {
                        e = e.replace(Qt, "<$1></$2>");
                        try {
                            for (; i > r; r++) n = this[r] || {},
                            1 === n.nodeType && (ft.cleanData(w(n, !1)), n.innerHTML = e);
                            n = 0
                        } catch(o) {}
                    }
                    n && this.empty().append(e)
                },
                null, e, arguments.length)
            },
            replaceWith: function() {
                var e = ft.map(this,
                function(e) {
                    return [e.nextSibling, e.parentNode]
                }),
                t = 0;
                return this.domManip(arguments,
                function(n) {
                    var r = e[t++],
                    i = e[t++];
                    i && (r && r.parentNode !== i && (r = this.nextSibling), ft(this).remove(), i.insertBefore(n, r))
                },
                !0),
                t ? this: this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t, n) {
                e = it.apply([], e);
                var r, i, o, a, s, u, l = 0,
                c = this.length,
                f = this,
                p = c - 1,
                d = e[0],
                h = ft.isFunction(d);
                if (h || !(1 >= c || "string" != typeof d || ft.support.checkClone) && rn.test(d)) return this.each(function(r) {
                    var i = f.eq(r);
                    h && (e[0] = d.call(this, r, i.html())),
                    i.domManip(e, t, n)
                });
                if (c && (u = ft.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = u.firstChild, 1 === u.childNodes.length && (u = r), r)) {
                    for (a = ft.map(w(u, "script"), m), o = a.length; c > l; l++) i = u,
                    l !== p && (i = ft.clone(i, !0, !0), o && ft.merge(a, w(i, "script"))),
                    t.call(this[l], i, l);
                    if (o) for (s = a[a.length - 1].ownerDocument, ft.map(a, y), l = 0; o > l; l++) i = a[l],
                    on.test(i.type || "") && !ft._data(i, "globalEval") && ft.contains(s, i) && (i.src ? ft._evalUrl(i.src) : ft.globalEval((i.text || i.textContent || i.innerHTML || "").replace(sn, "")));
                    u = r = null
                }
                return this
            }
        }),
        ft.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        },
        function(e, t) {
            ft.fn[e] = function(e) {
                for (var n, r = 0,
                i = [], o = ft(e), a = o.length - 1; a >= r; r++) n = r === a ? this: this.clone(!0),
                ft(o[r])[t](n),
                ot.apply(i, n.get());
                return this.pushStack(i)
            }
        }),
        ft.extend({
            clone: function(e, t, n) {
                var r, i, o, a, s, u = ft.contains(e.ownerDocument, e);
                if (ft.support.html5Clone || ft.isXMLDoc(e) || !Jt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (cn.innerHTML = e.outerHTML, cn.removeChild(o = cn.firstChild)), !(ft.support.noCloneEvent && ft.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ft.isXMLDoc(e))) for (r = w(o), s = w(e), a = 0; null != (i = s[a]); ++a) r[a] && x(i, r[a]);
                if (t) if (n) for (s = s || w(e), r = r || w(o), a = 0; null != (i = s[a]); a++) b(i, r[a]);
                else b(e, o);
                return r = w(o, "script"),
                r.length > 0 && v(r, !u && w(e, "script")),
                r = s = i = null,
                o
            },
            buildFragment: function(e, t, n, r) {
                for (var i, o, a, s, u, l, c, f = e.length,
                p = h(t), d = [], g = 0; f > g; g++) if (o = e[g], o || 0 === o) if ("object" === ft.type(o)) ft.merge(d, o.nodeType ? [o] : o);
                else if (en.test(o)) {
                    for (s = s || p.appendChild(t.createElement("div")), u = (Kt.exec(o) || ["", ""])[1].toLowerCase(), c = un[u] || un._default, s.innerHTML = c[1] + o.replace(Qt, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                    if (!ft.support.leadingWhitespace && Gt.test(o) && d.push(t.createTextNode(Gt.exec(o)[0])), !ft.support.tbody) for (o = "table" !== u || Zt.test(o) ? "<table>" !== c[1] || Zt.test(o) ? 0 : s: s.firstChild, i = o && o.childNodes.length; i--;) ft.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                    for (ft.merge(d, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                    s = p.lastChild
                } else d.push(t.createTextNode(o));
                for (s && p.removeChild(s), ft.support.appendChecked || ft.grep(w(d, "input"), T), g = 0; o = d[g++];) if ((!r || -1 === ft.inArray(o, r)) && (a = ft.contains(o.ownerDocument, o), s = w(p.appendChild(o), "script"), a && v(s), n)) for (i = 0; o = s[i++];) on.test(o.type || "") && n.push(o);
                return s = null,
                p
            },
            cleanData: function(e, t) {
                for (var n, r, i, o, a = 0,
                s = ft.expando,
                u = ft.cache,
                l = ft.support.deleteExpando,
                c = ft.event.special; null != (n = e[a]); a++) if ((t || ft.acceptData(n)) && (i = n[s], o = i && u[i])) {
                    if (o.events) for (r in o.events) c[r] ? ft.event.remove(n, r) : ft.removeEvent(n, r, o.handle);
                    u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== J ? n.removeAttribute(s) : n[s] = null, nt.push(i))
                }
            },
            _evalUrl: function(e) {
                return ft.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }
        }),
        ft.fn.extend({
            wrapAll: function(e) {
                if (ft.isFunction(e)) return this.each(function(t) {
                    ft(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = ft(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]),
                    t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return this.each(ft.isFunction(e) ?
                function(t) {
                    ft(this).wrapInner(e.call(this, t))
                }: function() {
                    var t = ft(this),
                    n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = ft.isFunction(e);
                return this.each(function(n) {
                    ft(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ft.nodeName(this, "body") || ft(this).replaceWith(this.childNodes)
                }).end()
            }
        });
        var fn, pn, dn, hn = /alpha\([^)]*\)/i,
        gn = /opacity\s*=\s*([^)]*)/,
        mn = /^(top|right|bottom|left)$/,
        yn = /^(none|table(?!-c[ea]).+)/,
        vn = /^margin/,
        bn = new RegExp("^(" + pt + ")(.*)$", "i"),
        xn = new RegExp("^(" + pt + ")(?!px)[a-z%]+$", "i"),
        wn = new RegExp("^([+-])=(" + pt + ")", "i"),
        Tn = {
            BODY: "block"
        },
        Cn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Nn = {
            letterSpacing: 0,
            fontWeight: 400
        },
        kn = ["Top", "Right", "Bottom", "Left"],
        En = ["Webkit", "O", "Moz", "ms"];
        ft.fn.extend({
            css: function(e, n) {
                return ft.access(this,
                function(e, n, r) {
                    var i, o, a = {},
                    s = 0;
                    if (ft.isArray(n)) {
                        for (o = pn(e), i = n.length; i > s; s++) a[n[s]] = ft.css(e, n[s], !1, o);
                        return a
                    }
                    return r !== t ? ft.style(e, n, r) : ft.css(e, n)
                },
                e, n, arguments.length > 1)
            },
            show: function() {
                return k(this, !0)
            },
            hide: function() {
                return k(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    N(this) ? ft(this).show() : ft(this).hide()
                })
            }
        }),
        ft.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = dn(e, "opacity");
                            return "" === n ? "1": n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": ft.support.cssFloat ? "cssFloat": "styleFloat"
            },
            style: function(e, n, r, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, a, s, u = ft.camelCase(n),
                    l = e.style;
                    if (n = ft.cssProps[u] || (ft.cssProps[u] = C(l, u)), s = ft.cssHooks[n] || ft.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o: l[n];
                    if (a = typeof r, "string" === a && (o = wn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ft.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || ft.cssNumber[u] || (r += "px"), ft.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                        l[n] = r
                    } catch(c) {}
                }
            },
            css: function(e, n, r, i) {
                var o, a, s, u = ft.camelCase(n);
                return n = ft.cssProps[u] || (ft.cssProps[u] = C(e.style, u)),
                s = ft.cssHooks[n] || ft.cssHooks[u],
                s && "get" in s && (a = s.get(e, !0, r)),
                a === t && (a = dn(e, n, i)),
                "normal" === a && n in Nn && (a = Nn[n]),
                "" === r || r ? (o = parseFloat(a), r === !0 || ft.isNumeric(o) ? o || 0 : a) : a
            }
        }),
        e.getComputedStyle ? (pn = function(t) {
            return e.getComputedStyle(t, null)
        },
        dn = function(e, n, r) {
            var i, o, a, s = r || pn(e),
            u = s ? s.getPropertyValue(n) || s[n] : t,
            l = e.style;
            return s && ("" !== u || ft.contains(e.ownerDocument, e) || (u = ft.style(e, n)), xn.test(u) && vn.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)),
            u
        }) : Q.documentElement.currentStyle && (pn = function(e) {
            return e.currentStyle
        },
        dn = function(e, n, r) {
            var i, o, a, s = r || pn(e),
            u = s ? s[n] : t,
            l = e.style;
            return null == u && l && l[n] && (u = l[n]),
            xn.test(u) && !mn.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em": u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)),
            "" === u ? "auto": u
        }),
        ft.each(["height", "width"],
        function(e, t) {
            ft.cssHooks[t] = {
                get: function(e, n, r) {
                    return n ? 0 === e.offsetWidth && yn.test(ft.css(e, "display")) ? ft.swap(e, Cn,
                    function() {
                        return A(e, t, r)
                    }) : A(e, t, r) : void 0
                },
                set: function(e, n, r) {
                    var i = r && pn(e);
                    return E(e, n, r ? S(e, t, r, ft.support.boxSizing && "border-box" === ft.css(e, "boxSizing", !1, i), i) : 0)
                }
            }
        }),
        ft.support.opacity || (ft.cssHooks.opacity = {
            get: function(e, t) {
                return gn.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
            },
            set: function(e, t) {
                var n = e.style,
                r = e.currentStyle,
                i = ft.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
                o = r && r.filter || n.filter || "";
                n.zoom = 1,
                (t >= 1 || "" === t) && "" === ft.trim(o.replace(hn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = hn.test(o) ? o.replace(hn, i) : o + " " + i)
            }
        }),
        ft(function() {
            ft.support.reliableMarginRight || (ft.cssHooks.marginRight = {
                get: function(e, t) {
                    return t ? ft.swap(e, {
                        display: "inline-block"
                    },
                    dn, [e, "marginRight"]) : void 0
                }
            }),
            !ft.support.pixelPosition && ft.fn.position && ft.each(["top", "left"],
            function(e, t) {
                ft.cssHooks[t] = {
                    get: function(e, n) {
                        return n ? (n = dn(e, t), xn.test(n) ? ft(e).position()[t] + "px": n) : void 0
                    }
                }
            })
        }),
        ft.expr && ft.expr.filters && (ft.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ft.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ft.css(e, "display"))
        },
        ft.expr.filters.visible = function(e) {
            return ! ft.expr.filters.hidden(e)
        }),
        ft.each({
            margin: "",
            padding: "",
            border: "Width"
        },
        function(e, t) {
            ft.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0,
                    i = {},
                    o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + kn[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            },
            vn.test(e) || (ft.cssHooks[e + t].set = E)
        });
        var Sn = /%20/g,
        An = /\[\]$/,
        jn = /\r?\n/g,
        Dn = /^(?:submit|button|image|reset|file)$/i,
        Ln = /^(?:input|select|textarea|keygen)/i;
        ft.fn.extend({
            serialize: function() {
                return ft.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = ft.prop(this, "elements");
                    return e ? ft.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !ft(this).is(":disabled") && Ln.test(this.nodeName) && !Dn.test(e) && (this.checked || !nn.test(e))
                }).map(function(e, t) {
                    var n = ft(this).val();
                    return null == n ? null: ft.isArray(n) ? ft.map(n,
                    function(e) {
                        return {
                            name: t.name,
                            value: e.replace(jn, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(jn, "\r\n")
                    }
                }).get()
            }
        }),
        ft.param = function(e, n) {
            var r, i = [],
            o = function(e, t) {
                t = ft.isFunction(t) ? t() : null == t ? "": t,
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            if (n === t && (n = ft.ajaxSettings && ft.ajaxSettings.traditional), ft.isArray(e) || e.jquery && !ft.isPlainObject(e)) ft.each(e,
            function() {
                o(this.name, this.value)
            });
            else for (r in e) L(r, e[r], n, o);
            return i.join("&").replace(Sn, "+")
        },
        ft.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function(e, t) {
            ft.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }),
        ft.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var Hn, qn, _n = ft.now(),
        Mn = /\?/,
        On = /#.*$/,
        Fn = /([?&])_=[^&]*/,
        Bn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Pn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Rn = /^(?:GET|HEAD)$/,
        Wn = /^\/\//,
        $n = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        In = ft.fn.load,
        zn = {},
        Xn = {},
        Un = "*/".concat("*");
        try {
            qn = G.href
        } catch(Vn) {
            qn = Q.createElement("a"),
            qn.href = "",
            qn = qn.href
        }
        Hn = $n.exec(qn.toLowerCase()) || [],
        ft.fn.load = function(e, n, r) {
            if ("string" != typeof e && In) return In.apply(this, arguments);
            var i, o, a, s = this,
            u = e.indexOf(" ");
            return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)),
            ft.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"),
            s.length > 0 && ft.ajax({
                url: e,
                type: a,
                dataType: "html",
                data: n
            }).done(function(e) {
                o = arguments,
                s.html(i ? ft("<div>").append(ft.parseHTML(e)).find(i) : e)
            }).complete(r &&
            function(e, t) {
                s.each(r, o || [e.responseText, t, e])
            }),
            this
        },
        ft.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
        function(e, t) {
            ft.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        ft.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: qn,
                type: "GET",
                isLocal: Pn.test(Hn[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Un,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ft.parseJSON,
                    "text xml": ft.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? _(_(e, ft.ajaxSettings), t) : _(ft.ajaxSettings, e)
            },
            ajaxPrefilter: H(zn),
            ajaxTransport: H(Xn),
            ajax: function(e, n) {
                function r(e, n, r, i) {
                    var o, f, v, b, w, C = n;
                    2 !== x && (x = 2, u && clearTimeout(u), c = t, s = i || "", T.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, r && (b = M(p, T, r)), b = O(p, b, T, o), o ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (ft.lastModified[a] = w), w = T.getResponseHeader("etag"), w && (ft.etag[a] = w)), 204 === e || "HEAD" === p.type ? C = "nocontent": 304 === e ? C = "notmodified": (C = b.state, f = b.data, v = b.error, o = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (n || C) + "", o ? g.resolveWith(d, [f, C, T]) : g.rejectWith(d, [T, C, v]), T.statusCode(y), y = t, l && h.trigger(o ? "ajaxSuccess": "ajaxError", [T, p, o ? f: v]), m.fireWith(d, [T, C]), l && (h.trigger("ajaxComplete", [T, p]), --ft.active || ft.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = t),
                n = n || {};
                var i, o, a, s, u, l, c, f, p = ft.ajaxSetup({},
                n),
                d = p.context || p,
                h = p.context && (d.nodeType || d.jquery) ? ft(d) : ft.event,
                g = ft.Deferred(),
                m = ft.Callbacks("once memory"),
                y = p.statusCode || {},
                v = {},
                b = {},
                x = 0,
                w = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!f) for (f = {}; t = Bn.exec(s);) f[t[1].toLowerCase()] = t[2];
                            t = f[e.toLowerCase()]
                        }
                        return null == t ? null: t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? s: null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = b[n] = b[n] || e, v[e] = t),
                        this
                    },
                    overrideMimeType: function(e) {
                        return x || (p.mimeType = e),
                        this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e) if (2 > x) for (t in e) y[t] = [y[t], e[t]];
                        else T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return c && c.abort(t),
                        r(0, t),
                        this
                    }
                };
                if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || qn) + "").replace(On, "").replace(Wn, Hn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = ft.trim(p.dataType || "*").toLowerCase().match(dt) || [""], null == p.crossDomain && (i = $n.exec(p.url.toLowerCase()), p.crossDomain = !(!i || i[1] === Hn[1] && i[2] === Hn[2] && (i[3] || ("http:" === i[1] ? "80": "443")) === (Hn[3] || ("http:" === Hn[1] ? "80": "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = ft.param(p.data, p.traditional)), q(zn, p, n, T), 2 === x) return T;
                l = p.global,
                l && 0 === ft.active++&&ft.event.trigger("ajaxStart"),
                p.type = p.type.toUpperCase(),
                p.hasContent = !Rn.test(p.type),
                a = p.url,
                p.hasContent || (p.data && (a = p.url += (Mn.test(a) ? "&": "?") + p.data, delete p.data), p.cache === !1 && (p.url = Fn.test(a) ? a.replace(Fn, "$1_=" + _n++) : a + (Mn.test(a) ? "&": "?") + "_=" + _n++)),
                p.ifModified && (ft.lastModified[a] && T.setRequestHeader("If-Modified-Since", ft.lastModified[a]), ft.etag[a] && T.setRequestHeader("If-None-Match", ft.etag[a])),
                (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType),
                T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Un + "; q=0.01": "") : p.accepts["*"]);
                for (o in p.headers) T.setRequestHeader(o, p.headers[o]);
                if (p.beforeSend && (p.beforeSend.call(d, T, p) === !1 || 2 === x)) return T.abort();
                w = "abort";
                for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[o](p[o]);
                if (c = q(Xn, p, n, T)) {
                    T.readyState = 1,
                    l && h.trigger("ajaxSend", [T, p]),
                    p.async && p.timeout > 0 && (u = setTimeout(function() {
                        T.abort("timeout")
                    },
                    p.timeout));
                    try {
                        x = 1,
                        c.send(v, r)
                    } catch(C) {
                        if (! (2 > x)) throw C;
                        r( - 1, C)
                    }
                } else r( - 1, "No Transport");
                return T
            },
            getJSON: function(e, t, n) {
                return ft.get(e, t, n, "json")
            },
            getScript: function(e, n) {
                return ft.get(e, t, n, "script")
            }
        }),
        ft.each(["get", "post"],
        function(e, n) {
            ft[n] = function(e, r, i, o) {
                return ft.isFunction(r) && (o = o || i, i = r, r = t),
                ft.ajax({
                    url: e,
                    type: n,
                    dataType: o,
                    data: r,
                    success: i
                })
            }
        }),
        ft.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return ft.globalEval(e),
                    e
                }
            }
        }),
        ft.ajaxPrefilter("script",
        function(e) {
            e.cache === t && (e.cache = !1),
            e.crossDomain && (e.type = "GET", e.global = !1)
        }),
        ft.ajaxTransport("script",
        function(e) {
            if (e.crossDomain) {
                var n, r = Q.head || ft("head")[0] || Q.documentElement;
                return {
                    send: function(t, i) {
                        n = Q.createElement("script"),
                        n.async = !0,
                        e.scriptCharset && (n.charset = e.scriptCharset),
                        n.src = e.url,
                        n.onload = n.onreadystatechange = function(e, t) { (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                        },
                        r.insertBefore(n, r.firstChild)
                    },
                    abort: function() {
                        n && n.onload(t, !0)
                    }
                }
            }
        });
        var Yn = [],
        Jn = /(=)\?(?=&|$)|\?\?/;
        ft.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Yn.pop() || ft.expando + "_" + _n++;
                return this[e] = !0,
                e
            }
        }),
        ft.ajaxPrefilter("json jsonp",
        function(n, r, i) {
            var o, a, s, u = n.jsonp !== !1 && (Jn.test(n.url) ? "url": "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Jn.test(n.data) && "data");
            return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ft.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Jn, "$1" + o) : n.jsonp !== !1 && (n.url += (Mn.test(n.url) ? "&": "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
                return s || ft.error(o + " was not called"),
                s[0]
            },
            n.dataTypes[0] = "json", a = e[o], e[o] = function() {
                s = arguments
            },
            i.always(function() {
                e[o] = a,
                n[o] && (n.jsonpCallback = r.jsonpCallback, Yn.push(o)),
                s && ft.isFunction(a) && a(s[0]),
                s = a = t
            }), "script") : void 0
        });
        var Gn, Qn, Kn = 0,
        Zn = e.ActiveXObject &&
        function() {
            var e;
            for (e in Gn) Gn[e](t, !0)
        };
        ft.ajaxSettings.xhr = e.ActiveXObject ?
        function() {
            return ! this.isLocal && F() || B()
        }: F,
        Qn = ft.ajaxSettings.xhr(),
        ft.support.cors = !!Qn && "withCredentials" in Qn,
        Qn = ft.support.ajax = !!Qn,
        Qn && ft.ajaxTransport(function(n) {
            if (!n.crossDomain || ft.support.cors) {
                var r;
                return {
                    send: function(i, o) {
                        var a, s, u = n.xhr();
                        if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) u[s] = n.xhrFields[s];
                        n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType),
                        n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (s in i) u.setRequestHeader(s, i[s])
                        } catch(l) {}
                        u.send(n.hasContent && n.data || null),
                        r = function(e, i) {
                            var s, l, c, f;
                            try {
                                if (r && (i || 4 === u.readyState)) if (r = t, a && (u.onreadystatechange = ft.noop, Zn && delete Gn[a]), i) 4 !== u.readyState && u.abort();
                                else {
                                    f = {},
                                    s = u.status,
                                    l = u.getAllResponseHeaders(),
                                    "string" == typeof u.responseText && (f.text = u.responseText);
                                    try {
                                        c = u.statusText
                                    } catch(p) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                                }
                            } catch(d) {
                                i || o( - 1, d)
                            }
                            f && o(s, c, f, l)
                        },
                        n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Kn, Zn && (Gn || (Gn = {},
                        ft(e).unload(Zn)), Gn[a] = r), u.onreadystatechange = r) : r()
                    },
                    abort: function() {
                        r && r(t, !0)
                    }
                }
            }
        });
        var er, tr, nr = /^(?:toggle|show|hide)$/,
        rr = new RegExp("^(?:([+-])=|)(" + pt + ")([a-z%]*)$", "i"),
        ir = /queueHooks$/,
        or = [I],
        ar = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                r = n.cur(),
                i = rr.exec(t),
                o = i && i[3] || (ft.cssNumber[e] ? "": "px"),
                a = (ft.cssNumber[e] || "px" !== o && +r) && rr.exec(ft.css(n.elem, e)),
                s = 1,
                u = 20;
                if (a && a[3] !== o) {
                    o = o || a[3],
                    i = i || [],
                    a = +r || 1;
                    do s = s || ".5",
                    a /= s,
                    ft.style(n.elem, e, a + o);
                    while (s !== (s = n.cur() / r) && 1 !== s && --u)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]),
                n
            }]
        };
        ft.Animation = ft.extend(W, {
            tweener: function(e, t) {
                ft.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0,
                i = e.length; i > r; r++) n = e[r],
                ar[n] = ar[n] || [],
                ar[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? or.unshift(e) : or.push(e)
            }
        }),
        ft.Tween = z,
        z.prototype = {
            constructor: z,
            init: function(e, t, n, r, i, o) {
                this.elem = e,
                this.prop = n,
                this.easing = i || "swing",
                this.options = t,
                this.start = this.now = this.cur(),
                this.end = r,
                this.unit = o || (ft.cssNumber[n] ? "": "px")
            },
            cur: function() {
                var e = z.propHooks[this.prop];
                return e && e.get ? e.get(this) : z.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = z.propHooks[this.prop];
                return this.pos = t = this.options.duration ? ft.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
                this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : z.propHooks._default.set(this),
                this
            }
        },
        z.prototype.init.prototype = z.prototype,
        z.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ft.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0) : e.elem[e.prop]
                },
                set: function(e) {
                    ft.fx.step[e.prop] ? ft.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ft.cssProps[e.prop]] || ft.cssHooks[e.prop]) ? ft.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        },
        z.propHooks.scrollTop = z.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        ft.each(["toggle", "show", "hide"],
        function(e, t) {
            var n = ft.fn[t];
            ft.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(X(t, !0), e, r, i)
            }
        }),
        ft.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(N).css("opacity", 0).show().end().animate({
                    opacity: t
                },
                e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = ft.isEmptyObject(e),
                o = ft.speed(t, n, r),
                a = function() {
                    var t = W(this, ft.extend({},
                    e), o); (i || ft._data(this, "finish")) && t.stop(!0)
                };
                return a.finish = a,
                i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, n, r) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop,
                    t(r)
                };
                return "string" != typeof e && (r = n, n = e, e = t),
                n && e !== !1 && this.queue(e || "fx", []),
                this.each(function() {
                    var t = !0,
                    n = null != e && e + "queueHooks",
                    o = ft.timers,
                    a = ft._data(this);
                    if (n) a[n] && a[n].stop && i(a[n]);
                    else for (n in a) a[n] && a[n].stop && ir.test(n) && i(a[n]);
                    for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1)); (t || !r) && ft.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"),
                this.each(function() {
                    var t, n = ft._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = ft.timers,
                    a = r ? r.length: 0;
                    for (n.finish = !0, ft.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }),
        ft.each({
            slideDown: X("show"),
            slideUp: X("hide"),
            slideToggle: X("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        },
        function(e, t) {
            ft.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }),
        ft.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? ft.extend({},
            e) : {
                complete: n || !n && t || ft.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ft.isFunction(t) && t
            };
            return r.duration = ft.fx.off ? 0 : "number" == typeof r.duration ? r.duration: r.duration in ft.fx.speeds ? ft.fx.speeds[r.duration] : ft.fx.speeds._default,
            (null == r.queue || r.queue === !0) && (r.queue = "fx"),
            r.old = r.complete,
            r.complete = function() {
                ft.isFunction(r.old) && r.old.call(this),
                r.queue && ft.dequeue(this, r.queue)
            },
            r
        },
        ft.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return.5 - Math.cos(e * Math.PI) / 2
            }
        },
        ft.timers = [],
        ft.fx = z.prototype.init,
        ft.fx.tick = function() {
            var e, n = ft.timers,
            r = 0;
            for (er = ft.now(); r < n.length; r++) e = n[r],
            e() || n[r] !== e || n.splice(r--, 1);
            n.length || ft.fx.stop(),
            er = t
        },
        ft.fx.timer = function(e) {
            e() && ft.timers.push(e) && ft.fx.start()
        },
        ft.fx.interval = 13,
        ft.fx.start = function() {
            tr || (tr = setInterval(ft.fx.tick, ft.fx.interval))
        },
        ft.fx.stop = function() {
            clearInterval(tr),
            tr = null
        },
        ft.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        ft.fx.step = {},
        ft.expr && ft.expr.filters && (ft.expr.filters.animated = function(e) {
            return ft.grep(ft.timers,
            function(t) {
                return e === t.elem
            }).length
        }),
        ft.fn.offset = function(e) {
            if (arguments.length) return e === t ? this: this.each(function(t) {
                ft.offset.setOffset(this, e, t)
            });
            var n, r, i = {
                top: 0,
                left: 0
            },
            o = this[0],
            a = o && o.ownerDocument;
            if (a) return n = a.documentElement,
            ft.contains(n, o) ? (typeof o.getBoundingClientRect !== J && (i = o.getBoundingClientRect()), r = U(a), {
                top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : i
        },
        ft.offset = {
            setOffset: function(e, t, n) {
                var r = ft.css(e, "position");
                "static" === r && (e.style.position = "relative");
                var i, o, a = ft(e),
                s = a.offset(),
                u = ft.css(e, "top"),
                l = ft.css(e, "left"),
                c = ("absolute" === r || "fixed" === r) && ft.inArray("auto", [u, l]) > -1,
                f = {},
                p = {};
                c ? (p = a.position(), i = p.top, o = p.left) : (i = parseFloat(u) || 0, o = parseFloat(l) || 0),
                ft.isFunction(t) && (t = t.call(e, n, s)),
                null != t.top && (f.top = t.top - s.top + i),
                null != t.left && (f.left = t.left - s.left + o),
                "using" in t ? t.using.call(e, f) : a.css(f)
            }
        },
        ft.fn.extend({
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                    return "fixed" === ft.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ft.nodeName(e[0], "html") || (n = e.offset()), n.top += ft.css(e[0], "borderTopWidth", !0), n.left += ft.css(e[0], "borderLeftWidth", !0)),
                    {
                        top: t.top - n.top - ft.css(r, "marginTop", !0),
                        left: t.left - n.left - ft.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || K; e && !ft.nodeName(e, "html") && "static" === ft.css(e, "position");) e = e.offsetParent;
                    return e || K
                })
            }
        }),
        ft.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        },
        function(e, n) {
            var r = /Y/.test(n);
            ft.fn[e] = function(i) {
                return ft.access(this,
                function(e, i, o) {
                    var a = U(e);
                    return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : void(a ? a.scrollTo(r ? ft(a).scrollLeft() : o, r ? o: ft(a).scrollTop()) : e[i] = o)
                },
                e, i, arguments.length, null)
            }
        }),
        ft.each({
            Height: "height",
            Width: "width"
        },
        function(e, n) {
            ft.each({
                padding: "inner" + e,
                content: n,
                "": "outer" + e
            },
            function(r, i) {
                ft.fn[i] = function(i, o) {
                    var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin": "border");
                    return ft.access(this,
                    function(n, r, i) {
                        var o;
                        return ft.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? ft.css(n, r, s) : ft.style(n, r, i, s)
                    },
                    n, a ? i: t, a, null)
                }
            })
        }),
        ft.fn.size = function() {
            return this.length
        },
        ft.fn.andSelf = ft.fn.addBack,
        "object" == typeof n && n && "object" == typeof n.exports ? n.exports = ft: (e.jQuery = e.$ = ft, "function" == typeof define && define.amd && define("jquery", [],
        function() {
            return ft
        }))
    } (window)
});;
define("common:widget/lib/jquery.ui/jquery.ui.core.js",
function(t) {
    function e(t, e) {
        var r, s, o, u = t.nodeName.toLowerCase();
        return "area" === u ? (r = t.parentNode, s = r.name, t.href && s && "map" === r.nodeName.toLowerCase() ? (o = i("img[usemap=#" + s + "]")[0], !!o && n(o)) : !1) : (/input|select|textarea|button|object/.test(u) ? !t.disabled: "a" === u ? t.href || e: e) && n(t)
    }
    function n(t) {
        return i.expr.filters.visible(t) && !i(t).parents().addBack().filter(function() {
            return "hidden" === i.css(this, "visibility")
        }).length
    }
    var i = t("common:widget/lib/jquery/jquery.js"),
    r = 0,
    s = /^ui-id-\d+$/;
    i.ui = i.ui || {},
    i.extend(i.ui, {
        version: "1.10.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }),
    i.fn.extend({
        focus: function(t) {
            return function(e, n) {
                return "number" == typeof e ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        i(t).focus(),
                        n && n.call(t)
                    },
                    e)
                }) : t.apply(this, arguments)
            }
        } (i.fn.focus),
        scrollParent: function() {
            var t;
            return t = i.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(i.css(this, "position")) && /(auto|scroll)/.test(i.css(this, "overflow") + i.css(this, "overflow-y") + i.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(i.css(this, "overflow") + i.css(this, "overflow-y") + i.css(this, "overflow-x"))
            }).eq(0),
            /fixed/.test(this.css("position")) || !t.length ? i(document) : t
        },
        zIndex: function(t) {
            if (void 0 !== t) return this.css("zIndex", t);
            if (this.length) for (var e, n, r = i(this[0]); r.length && r[0] !== document;) {
                if (e = r.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (n = parseInt(r.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                r = r.parent()
            }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++r)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                s.test(this.id) && i(this).removeAttr("id")
            })
        }
    }),
    i.extend(i.expr[":"], {
        data: i.expr.createPseudo ? i.expr.createPseudo(function(t) {
            return function(e) {
                return !! i.data(e, t)
            }
        }) : function(t, e, n) {
            return !! i.data(t, n[3])
        },
        focusable: function(t) {
            return e(t, !isNaN(i.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var n = i.attr(t, "tabindex"),
            r = isNaN(n);
            return (r || n >= 0) && e(t, !r)
        }
    }),
    i("<a>").outerWidth(1).jquery || i.each(["Width", "Height"],
    function(t, e) {
        function n(t, e, n, s) {
            return i.each(r,
            function() {
                e -= parseFloat(i.css(t, "padding" + this)) || 0,
                n && (e -= parseFloat(i.css(t, "border" + this + "Width")) || 0),
                s && (e -= parseFloat(i.css(t, "margin" + this)) || 0)
            }),
            e
        }
        var r = "Width" === e ? ["Left", "Right"] : ["Top", "Bottom"],
        s = e.toLowerCase(),
        o = {
            innerWidth: i.fn.innerWidth,
            innerHeight: i.fn.innerHeight,
            outerWidth: i.fn.outerWidth,
            outerHeight: i.fn.outerHeight
        };
        i.fn["inner" + e] = function(t) {
            return void 0 === t ? o["inner" + e].call(this) : this.each(function() {
                i(this).css(s, n(this, t) + "px")
            })
        },
        i.fn["outer" + e] = function(t, r) {
            return "number" != typeof t ? o["outer" + e].call(this, t) : this.each(function() {
                i(this).css(s, n(this, t, !0, r) + "px")
            })
        }
    }),
    i.fn.addBack || (i.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject: this.prevObject.filter(t))
    }),
    i("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (i.fn.removeData = function(t) {
        return function(e) {
            return arguments.length ? t.call(this, i.camelCase(e)) : t.call(this)
        }
    } (i.fn.removeData)),
    i.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
    i.support.selectstart = "onselectstart" in document.createElement("div"),
    i.fn.extend({
        disableSelection: function() {
            return this.bind((i.support.selectstart ? "selectstart": "mousedown") + ".ui-disableSelection",
            function(t) {
                t.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }),
    i.extend(i.ui, {
        plugin: {
            add: function(t, e, n) {
                var r, s = i.ui[t].prototype;
                for (r in n) s.plugins[r] = s.plugins[r] || [],
                s.plugins[r].push([e, n[r]])
            },
            call: function(t, e, n) {
                var i, r = t.plugins[e];
                if (r && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType) for (i = 0; i < r.length; i++) t.options[r[i][0]] && r[i][1].apply(t.element, n)
            }
        },
        hasScroll: function(t, e) {
            if ("hidden" === i(t).css("overflow")) return ! 1;
            var n = e && "left" === e ? "scrollLeft": "scrollTop",
            r = !1;
            return t[n] > 0 ? !0 : (t[n] = 1, r = t[n] > 0, t[n] = 0, r)
        }
    })
});;
define("common:widget/lib/jquery.ui/jquery.ui.widget.js",
function(t) {
    var e = t("common:widget/lib/jquery/jquery.js"),
    i = 0,
    n = Array.prototype.slice,
    s = e.cleanData;
    e.cleanData = function(t) {
        for (var i, n = 0; null != (i = t[n]); n++) try {
            e(i).triggerHandler("remove")
        } catch(o) {}
        s(t)
    },
    e.widget = function(t, i, n) {
        var s, o, r, a, u = {},
        d = t.split(".")[0];
        t = t.split(".")[1],
        s = d + "-" + t,
        n || (n = i, i = e.Widget),
        e.expr[":"][s.toLowerCase()] = function(t) {
            return !! e.data(t, s)
        },
        e[d] = e[d] || {},
        o = e[d][t],
        r = e[d][t] = function(t, e) {
            return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new r(t, e)
        },
        e.extend(r, o, {
            version: n.version,
            _proto: e.extend({},
            n),
            _childConstructors: []
        }),
        a = new i,
        a.options = e.widget.extend({},
        a.options),
        e.each(n,
        function(t, n) {
            return e.isFunction(n) ? void(u[t] = function() {
                var e = function() {
                    return i.prototype[t].apply(this, arguments)
                },
                s = function(e) {
                    return i.prototype[t].apply(this, e)
                };
                return function() {
                    var t, i = this._super,
                    o = this._superApply;
                    return this._super = e,
                    this._superApply = s,
                    t = n.apply(this, arguments),
                    this._super = i,
                    this._superApply = o,
                    t
                }
            } ()) : void(u[t] = n)
        }),
        r.prototype = e.widget.extend(a, {
            widgetEventPrefix: o ? a.widgetEventPrefix: t
        },
        u, {
            constructor: r,
            namespace: d,
            widgetName: t,
            widgetFullName: s
        }),
        o ? (e.each(o._childConstructors,
        function(t, i) {
            var n = i.prototype;
            e.widget(n.namespace + "." + n.widgetName, r, i._proto)
        }), delete o._childConstructors) : i._childConstructors.push(r),
        e.widget.bridge(t, r)
    },
    e.widget.extend = function(t) {
        for (var i, s, o = n.call(arguments, 1), r = 0, a = o.length; a > r; r++) for (i in o[r]) s = o[r][i],
        o[r].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({},
        t[i], s) : e.widget.extend({},
        s) : s);
        return t
    },
    e.widget.bridge = function(t, i) {
        var s = i.prototype.widgetFullName || t;
        e.fn[t] = function(o) {
            var r = "string" == typeof o,
            a = n.call(arguments, 1),
            u = this;
            return o = !r && a.length ? e.widget.extend.apply(null, [o].concat(a)) : o,
            this.each(r ?
            function() {
                var i, n = e.data(this, s);
                return n ? e.isFunction(n[o]) && "_" !== o.charAt(0) ? (i = n[o].apply(n, a), i !== n && void 0 !== i ? (u = i && i.jquery ? u.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + o + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + o + "'")
            }: function() {
                var t = e.data(this, s);
                t ? t.option(o || {})._init() : e.data(this, s, new i(o, this))
            }),
            u
        }
    },
    e.Widget = function() {},
    e.Widget._childConstructors = [],
    e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, n) {
            n = e(n || this.defaultElement || this)[0],
            this.element = e(n),
            this.uuid = i++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.options = e.widget.extend({},
            this.options, this._getCreateOptions(), t),
            this.bindings = e(),
            this.hoverable = e(),
            this.focusable = e(),
            n !== this && (e.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === n && this.destroy()
                }
            }), this.document = e(n.style ? n.ownerDocument: n.document || n), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(),
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(t, i) {
            var n, s, o, r = t;
            if (0 === arguments.length) return e.widget.extend({},
            this.options);
            if ("string" == typeof t) if (r = {},
            n = t.split("."), t = n.shift(), n.length) {
                for (s = r[t] = e.widget.extend({},
                this.options[t]), o = 0; o < n.length - 1; o++) s[n[o]] = s[n[o]] || {},
                s = s[n[o]];
                if (t = n.pop(), void 0 === i) return void 0 === s[t] ? null: s[t];
                s[t] = i
            } else {
                if (void 0 === i) return void 0 === this.options[t] ? null: this.options[t];
                r[t] = i
            }
            return this._setOptions(r),
            this
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return this.options[t] = e,
            "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")),
            this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(t, i, n) {
            var s, o = this;
            "boolean" != typeof t && (n = i, i = t, t = !1),
            n ? (i = s = e(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()),
            e.each(n,
            function(n, r) {
                function a() {
                    return t || o.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? o[r] : r).apply(o, arguments) : void 0
                }
                "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || e.guid++);
                var u = n.match(/^(\w+)\s*(.*)$/),
                d = u[1] + o.eventNamespace,
                l = u[2];
                l ? s.delegate(l, d, a) : i.bind(d, a)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            t.unbind(e).undelegate(e)
        },
        _delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? n[t] : t).apply(n, arguments)
            }
            var n = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t),
            this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t),
            this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, i, n) {
            var s, o, r = this.options[t];
            if (n = n || {},
            i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t: this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (s in o) s in i || (i[s] = o[s]);
            return this.element.trigger(i, n),
            !(e.isFunction(r) && r.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
        }
    },
    e.each({
        show: "fadeIn",
        hide: "fadeOut"
    },
    function(t, i) {
        e.Widget.prototype["_" + t] = function(n, s, o) {
            "string" == typeof s && (s = {
                effect: s
            });
            var r, a = s ? s === !0 || "number" == typeof s ? i: s.effect || i: t;
            s = s || {},
            "number" == typeof s && (s = {
                duration: s
            }),
            r = !e.isEmptyObject(s),
            s.complete = o,
            s.delay && n.delay(s.delay),
            r && e.effects && e.effects.effect[a] ? n[t](s) : a !== t && n[a] ? n[a](s.duration, s.easing, o) : n.queue(function(i) {
                e(this)[t](),
                o && o.call(n[0]),
                i()
            })
        }
    })
});;
define("common:widget/lib/jquery.ui/jquery.ui.button.js",
function(t) {
    var e = t("common:widget/lib/jquery/jquery.js");
    t("common:widget/lib/jquery.ui/jquery.ui.core.js"),
    t("common:widget/lib/jquery.ui/jquery.ui.widget.js");
    var i, n, s, o, a = "ui-button ui-widget ui-state-default ui-corner-all",
    u = "ui-state-hover ui-state-active ",
    r = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
    l = function() {
        var t = e(this);
        setTimeout(function() {
            t.find(":ui-button").button("refresh")
        },
        1)
    },
    d = function(t) {
        var i = t.name,
        n = t.form,
        s = e([]);
        return i && (i = i.replace(/'/g, "\\'"), s = n ? e(n).find("[name='" + i + "']") : e("[name='" + i + "']", t.ownerDocument).filter(function() {
            return ! this.form
        })),
        s
    };
    e.widget("ui.button", {
        version: "1.10.3",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, l),
            "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled),
            this._determineButtonType(),
            this.hasTitle = !!this.buttonElement.attr("title");
            var t = this,
            u = this.options,
            r = "checkbox" === this.type || "radio" === this.type,
            h = r ? "": "ui-state-active",
            c = "ui-state-focus";
            null === u.label && (u.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()),
            this._hoverable(this.buttonElement),
            this.buttonElement.addClass(a).attr("role", "button").bind("mouseenter" + this.eventNamespace,
            function() {
                u.disabled || this === i && e(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace,
            function() {
                u.disabled || e(this).removeClass(h)
            }).bind("click" + this.eventNamespace,
            function(t) {
                u.disabled && (t.preventDefault(), t.stopImmediatePropagation())
            }),
            this.element.bind("focus" + this.eventNamespace,
            function() {
                t.buttonElement.addClass(c)
            }).bind("blur" + this.eventNamespace,
            function() {
                t.buttonElement.removeClass(c)
            }),
            r && (this.element.bind("change" + this.eventNamespace,
            function() {
                o || t.refresh()
            }), this.buttonElement.bind("mousedown" + this.eventNamespace,
            function(t) {
                u.disabled || (o = !1, n = t.pageX, s = t.pageY)
            }).bind("mouseup" + this.eventNamespace,
            function(t) {
                u.disabled || (n !== t.pageX || s !== t.pageY) && (o = !0)
            })),
            "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace,
            function() {
                return u.disabled || o ? !1 : void 0
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace,
            function() {
                if (u.disabled || o) return ! 1;
                e(this).addClass("ui-state-active"),
                t.buttonElement.attr("aria-pressed", "true");
                var i = t.element[0];
                d(i).not(i).map(function() {
                    return e(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace,
            function() {
                return u.disabled ? !1 : (e(this).addClass("ui-state-active"), i = this, void t.document.one("mouseup",
                function() {
                    i = null
                }))
            }).bind("mouseup" + this.eventNamespace,
            function() {
                return u.disabled ? !1 : void e(this).removeClass("ui-state-active")
            }).bind("keydown" + this.eventNamespace,
            function(t) {
                return u.disabled ? !1 : void((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active"))
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace,
            function() {
                e(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
                t.keyCode === e.ui.keyCode.SPACE && e(this).click()
            })),
            this._setOption("disabled", u.disabled),
            this._resetButton()
        },
        _determineButtonType: function() {
            var t, e, i;
            this.type = this.element.is("[type=checkbox]") ? "checkbox": this.element.is("[type=radio]") ? "radio": this.element.is("input") ? "input": "button",
            "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"),
            this.buttonElement.removeClass(a + " " + u + " " + r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),
            this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function(t, e) {
            return this._super(t, e),
            "disabled" === t ? void(e ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1)) : void this._resetButton()
        },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOption("disabled", t),
            "radio" === this.type ? d(this.element[0]).each(function() {
                e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if ("input" === this.type) return void(this.options.label && this.element.val(this.options.label));
            var t = this.buttonElement.removeClass(r),
            i = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
            n = this.options.icons,
            s = n.primary && n.secondary,
            o = [];
            n.primary || n.secondary ? (this.options.text && o.push("ui-button-text-icon" + (s ? "s": n.primary ? "-primary": "-secondary")), n.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + n.primary + "'></span>"), n.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + n.secondary + "'></span>"), this.options.text || (o.push(s ? "ui-button-icons-only": "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(i)))) : o.push("ui-button-text-only"),
            t.addClass(o.join(" "))
        }
    }),
    e.widget("ui.buttonset", {
        version: "1.10.3",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(t, e) {
            "disabled" === t && this.buttons.button("option", t, e),
            this._super(t, e)
        },
        refresh: function() {
            var t = "rtl" === this.element.css("direction");
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right": "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left": "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset"),
            this.buttons.map(function() {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
});;
define("common:widget/lib/jquery.ui/jquery.ui.mouse.js",
function(e) {
    var t = e("common:widget/lib/jquery/jquery.js");
    e("common:widget/lib/jquery.ui/jquery.ui.widget.js");
    var s = !1;
    t(document).mouseup(function() {
        s = !1
    }),
    t.widget("ui.mouse", {
        version: "1.10.3",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName,
            function(t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName,
            function(s) {
                return ! 0 === t.data(s.target, e.widgetName + ".preventClickEvent") ? (t.removeData(s.target, e.widgetName + ".preventClickEvent"), s.stopImmediatePropagation(), !1) : void 0
            }),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(e) {
            if (!s) {
                this._mouseStarted && this._mouseUp(e),
                this._mouseDownEvent = e;
                var i = this,
                o = 1 === e.which,
                u = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length: !1;
                return o && !u && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0
                },
                this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                    return i._mouseMove(e)
                },
                this._mouseUpDelegate = function(e) {
                    return i._mouseUp(e)
                },
                t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), s = !0, !0)) : !0
            }
        },
        _mouseMove: function(e) {
            return t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function(e) {
            return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)),
            !1
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return ! 0
        }
    })
});;
define("common:widget/lib/jquery.ui/jquery.ui.draggable.js",
function(t) {
    var e = t("common:widget/lib/jquery/jquery.js");
    t("common:widget/lib/jquery.ui/jquery.ui.core.js"),
    t("common:widget/lib/jquery.ui/jquery.ui.mouse.js"),
    t("common:widget/lib/jquery.ui/jquery.ui.widget.js"),
    e.widget("ui.draggable", e.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"),
            this.options.addClasses && this.element.addClass("ui-draggable"),
            this.options.disabled && this.element.addClass("ui-draggable-disabled"),
            this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),
            this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var s = this.options;
            return this.helper || s.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(s.iframeFix === !0 ? "iframe": s.iframeFix).each(function() {
                e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(e(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function(t) {
            var s = this.options;
            return this.helper = this._createHelper(t),
            this.helper.addClass("ui-draggable-dragging"),
            this._cacheHelperProportions(),
            e.ui.ddmanager && (e.ui.ddmanager.current = this),
            this._cacheMargins(),
            this.cssPosition = this.helper.css("position"),
            this.scrollParent = this.helper.scrollParent(),
            this.offsetParent = this.helper.offsetParent(),
            this.offsetParentCssPosition = this.offsetParent.css("position"),
            this.offset = this.positionAbs = this.element.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            this.offset.scroll = !1,
            e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.originalPosition = this.position = this._generatePosition(t),
            this.originalPageX = t.pageX,
            this.originalPageY = t.pageY,
            s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt),
            this._setContainment(),
            this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
        },
        _mouseDrag: function(t, s) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !s) {
                var i = this._uiHash();
                if (this._trigger("drag", t, i) === !1) return this._mouseUp({}),
                !1;
                this.position = i.position
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"),
            e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
            !1
        },
        _mouseStop: function(t) {
            var s = this,
            i = !1;
            return e.ui.ddmanager && !this.options.dropBehaviour && (i = e.ui.ddmanager.drop(this, t)),
            this.dropped && (i = this.dropped, this.dropped = !1),
            "original" !== this.options.helper || e.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !i || "valid" === this.options.revert && i || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10),
            function() {
                s._trigger("stop", t) !== !1 && s._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(), !1) : !1
        },
        _mouseUp: function(t) {
            return e("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }),
            e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t),
            e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(),
            this
        },
        _getHandle: function(t) {
            return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length: !0
        },
        _createHelper: function(t) {
            var s = this.options,
            i = e.isFunction(s.helper) ? e(s.helper.apply(this.element[0], [t])) : "clone" === s.helper ? this.element.clone().removeAttr("id") : this.element;
            return i.parents("body").length || i.appendTo("parent" === s.appendTo ? this.element[0].parentNode: s.appendTo),
            i[0] === this.element[0] || /(fixed|absolute)/.test(i.css("position")) || i.css("position", "absolute"),
            i
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")),
            e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }),
            "left" in t && (this.offset.click.left = t.left + this.margins.left),
            "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
            "top" in t && (this.offset.click.top = t.top + this.margins.top),
            "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            var t = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                top: 0,
                left: 0
            }),
            {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.element.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, s, i, o = this.options;
            return o.containment ? "window" === o.containment ? void(this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === o.containment ? void(this.containment = [0, 0, e(document).width() - this.helperProportions.width - this.margins.left, (e(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : o.containment.constructor === Array ? void(this.containment = o.containment) : ("parent" === o.containment && (o.containment = this.helper[0].parentNode), s = e(o.containment), i = s[0], void(i && (t = "hidden" !== s.css("overflow"), this.containment = [(parseInt(s.css("borderLeftWidth"), 10) || 0) + (parseInt(s.css("paddingLeft"), 10) || 0), (parseInt(s.css("borderTopWidth"), 10) || 0) + (parseInt(s.css("paddingTop"), 10) || 0), (t ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(s.css("borderRightWidth"), 10) || 0) - (parseInt(s.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(s.css("borderBottomWidth"), 10) || 0) - (parseInt(s.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = s))) : void(this.containment = null)
        },
        _convertPositionTo: function(t, s) {
            s || (s = this.position);
            var i = "absolute" === t ? 1 : -1,
            o = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent;
            return this.offset.scroll || (this.offset.scroll = {
                top: o.scrollTop(),
                left: o.scrollLeft()
            }),
            {
                top: s.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * i,
                left: s.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function(t) {
            var s, i, o, n, r = this.options,
            a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent,
            l = t.pageX,
            h = t.pageY;
            return this.offset.scroll || (this.offset.scroll = {
                top: a.scrollTop(),
                left: a.scrollLeft()
            }),
            this.originalPosition && (this.containment && (this.relative_container ? (i = this.relative_container.offset(), s = [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top]) : s = this.containment, t.pageX - this.offset.click.left < s[0] && (l = s[0] + this.offset.click.left), t.pageY - this.offset.click.top < s[1] && (h = s[1] + this.offset.click.top), t.pageX - this.offset.click.left > s[2] && (l = s[2] + this.offset.click.left), t.pageY - this.offset.click.top > s[3] && (h = s[3] + this.offset.click.top)), r.grid && (o = r.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, h = s ? o - this.offset.click.top >= s[1] || o - this.offset.click.top > s[3] ? o: o - this.offset.click.top >= s[1] ? o - r.grid[1] : o + r.grid[1] : o, n = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, l = s ? n - this.offset.click.left >= s[0] || n - this.offset.click.left > s[2] ? n: n - this.offset.click.left >= s[0] ? n - r.grid[0] : n + r.grid[0] : n)),
            {
                top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"),
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
            this.helper = null,
            this.cancelHelperRemoval = !1
        },
        _trigger: function(t, s, i) {
            return i = i || this._uiHash(),
            e.ui.plugin.call(this, t, [s, i]),
            "drag" === t && (this.positionAbs = this._convertPositionTo("absolute")),
            e.Widget.prototype._trigger.call(this, t, s, i)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }),
    e.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, s) {
            var i = e(this).data("ui-draggable"),
            o = i.options,
            n = e.extend({},
            s, {
                item: i.element
            });
            i.sortables = [],
            e(o.connectToSortable).each(function() {
                var s = e.data(this, "ui-sortable");
                s && !s.options.disabled && (i.sortables.push({
                    instance: s,
                    shouldRevert: s.options.revert
                }), s.refreshPositions(), s._trigger("activate", t, n))
            })
        },
        stop: function(t, s) {
            var i = e(this).data("ui-draggable"),
            o = e.extend({},
            s, {
                item: i.element
            });
            e.each(i.sortables,
            function() {
                this.instance.isOver ? (this.instance.isOver = 0, i.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" === i.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, o))
            })
        },
        drag: function(t, s) {
            var i = e(this).data("ui-draggable"),
            o = this;
            e.each(i.sortables,
            function() {
                var n = !1,
                r = this;
                this.instance.positionAbs = i.positionAbs,
                this.instance.helperProportions = i.helperProportions,
                this.instance.offset.click = i.offset.click,
                this.instance._intersectsWith(this.instance.containerCache) && (n = !0, e.each(i.sortables,
                function() {
                    return this.instance.positionAbs = i.positionAbs,
                    this.instance.helperProportions = i.helperProportions,
                    this.instance.offset.click = i.offset.click,
                    this !== r && this.instance._intersectsWith(this.instance.containerCache) && e.contains(r.instance.element[0], this.instance.element[0]) && (n = !1),
                    n
                })),
                n ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(o).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return s.helper[0]
                },
                t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = i.offset.click.top, this.instance.offset.click.left = i.offset.click.left, this.instance.offset.parent.left -= i.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= i.offset.parent.top - this.instance.offset.parent.top, i._trigger("toSortable", t), i.dropped = this.instance.element, i.currentItem = i.element, this.instance.fromOutside = i), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), i._trigger("fromSortable", t), i.dropped = !1)
            })
        }
    }),
    e.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var t = e("body"),
            s = e(this).data("ui-draggable").options;
            t.css("cursor") && (s._cursor = t.css("cursor")),
            t.css("cursor", s.cursor)
        },
        stop: function() {
            var t = e(this).data("ui-draggable").options;
            t._cursor && e("body").css("cursor", t._cursor)
        }
    }),
    e.ui.plugin.add("draggable", "opacity", {
        start: function(t, s) {
            var i = e(s.helper),
            o = e(this).data("ui-draggable").options;
            i.css("opacity") && (o._opacity = i.css("opacity")),
            i.css("opacity", o.opacity)
        },
        stop: function(t, s) {
            var i = e(this).data("ui-draggable").options;
            i._opacity && e(s.helper).css("opacity", i._opacity)
        }
    }),
    e.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var t = e(this).data("ui-draggable");
            t.scrollParent[0] !== document && "HTML" !== t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset())
        },
        drag: function(t) {
            var s = e(this).data("ui-draggable"),
            i = s.options,
            o = !1;
            s.scrollParent[0] !== document && "HTML" !== s.scrollParent[0].tagName ? (i.axis && "x" === i.axis || (s.overflowOffset.top + s.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? s.scrollParent[0].scrollTop = o = s.scrollParent[0].scrollTop + i.scrollSpeed: t.pageY - s.overflowOffset.top < i.scrollSensitivity && (s.scrollParent[0].scrollTop = o = s.scrollParent[0].scrollTop - i.scrollSpeed)), i.axis && "y" === i.axis || (s.overflowOffset.left + s.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? s.scrollParent[0].scrollLeft = o = s.scrollParent[0].scrollLeft + i.scrollSpeed: t.pageX - s.overflowOffset.left < i.scrollSensitivity && (s.scrollParent[0].scrollLeft = o = s.scrollParent[0].scrollLeft - i.scrollSpeed))) : (i.axis && "x" === i.axis || (t.pageY - e(document).scrollTop() < i.scrollSensitivity ? o = e(document).scrollTop(e(document).scrollTop() - i.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < i.scrollSensitivity && (o = e(document).scrollTop(e(document).scrollTop() + i.scrollSpeed))), i.axis && "y" === i.axis || (t.pageX - e(document).scrollLeft() < i.scrollSensitivity ? o = e(document).scrollLeft(e(document).scrollLeft() - i.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < i.scrollSensitivity && (o = e(document).scrollLeft(e(document).scrollLeft() + i.scrollSpeed)))),
            o !== !1 && e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(s, t)
        }
    }),
    e.ui.plugin.add("draggable", "snap", {
        start: function() {
            var t = e(this).data("ui-draggable"),
            s = t.options;
            t.snapElements = [],
            e(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)": s.snap).each(function() {
                var s = e(this),
                i = s.offset();
                this !== t.element[0] && t.snapElements.push({
                    item: this,
                    width: s.outerWidth(),
                    height: s.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            })
        },
        drag: function(t, s) {
            var i, o, n, r, a, l, h, c, p, f, d = e(this).data("ui-draggable"),
            g = d.options,
            u = g.snapTolerance,
            m = s.offset.left,
            v = m + d.helperProportions.width,
            P = s.offset.top,
            b = P + d.helperProportions.height;
            for (p = d.snapElements.length - 1; p >= 0; p--) a = d.snapElements[p].left,
            l = a + d.snapElements[p].width,
            h = d.snapElements[p].top,
            c = h + d.snapElements[p].height,
            a - u > v || m > l + u || h - u > b || P > c + u || !e.contains(d.snapElements[p].item.ownerDocument, d.snapElements[p].item) ? (d.snapElements[p].snapping && d.options.snap.release && d.options.snap.release.call(d.element, t, e.extend(d._uiHash(), {
                snapItem: d.snapElements[p].item
            })), d.snapElements[p].snapping = !1) : ("inner" !== g.snapMode && (i = Math.abs(h - b) <= u, o = Math.abs(c - P) <= u, n = Math.abs(a - v) <= u, r = Math.abs(l - m) <= u, i && (s.position.top = d._convertPositionTo("relative", {
                top: h - d.helperProportions.height,
                left: 0
            }).top - d.margins.top), o && (s.position.top = d._convertPositionTo("relative", {
                top: c,
                left: 0
            }).top - d.margins.top), n && (s.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: a - d.helperProportions.width
            }).left - d.margins.left), r && (s.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left - d.margins.left)), f = i || o || n || r, "outer" !== g.snapMode && (i = Math.abs(h - P) <= u, o = Math.abs(c - b) <= u, n = Math.abs(a - m) <= u, r = Math.abs(l - v) <= u, i && (s.position.top = d._convertPositionTo("relative", {
                top: h,
                left: 0
            }).top - d.margins.top), o && (s.position.top = d._convertPositionTo("relative", {
                top: c - d.helperProportions.height,
                left: 0
            }).top - d.margins.top), n && (s.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: a
            }).left - d.margins.left), r && (s.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: l - d.helperProportions.width
            }).left - d.margins.left)), !d.snapElements[p].snapping && (i || o || n || r || f) && d.options.snap.snap && d.options.snap.snap.call(d.element, t, e.extend(d._uiHash(), {
                snapItem: d.snapElements[p].item
            })), d.snapElements[p].snapping = i || o || n || r || f)
        }
    }),
    e.ui.plugin.add("draggable", "stack", {
        start: function() {
            var t, s = this.data("ui-draggable").options,
            i = e.makeArray(e(s.stack)).sort(function(t, s) {
                return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(s).css("zIndex"), 10) || 0)
            });
            i.length && (t = parseInt(e(i[0]).css("zIndex"), 10) || 0, e(i).each(function(s) {
                e(this).css("zIndex", t + s)
            }), this.css("zIndex", t + i.length))
        }
    }),
    e.ui.plugin.add("draggable", "zIndex", {
        start: function(t, s) {
            var i = e(s.helper),
            o = e(this).data("ui-draggable").options;
            i.css("zIndex") && (o._zIndex = i.css("zIndex")),
            i.css("zIndex", o.zIndex)
        },
        stop: function(t, s) {
            var i = e(this).data("ui-draggable").options;
            i._zIndex && e(s.helper).css("zIndex", i._zIndex)
        }
    })
});;
define("common:widget/lib/jquery.ui/jquery.ui.position.js",
function(t) {
    function i(t, i, e) {
        return [parseFloat(t[0]) * (d.test(t[0]) ? i / 100 : 1), parseFloat(t[1]) * (d.test(t[1]) ? e / 100 : 1)]
    }
    function e(t, i) {
        return parseInt(n.css(t, i), 10) || 0
    }
    function o(t) {
        var i = t[0];
        return 9 === i.nodeType ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: 0,
                left: 0
            }
        }: n.isWindow(i) ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: t.scrollTop(),
                left: t.scrollLeft()
            }
        }: i.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: i.pageY,
                left: i.pageX
            }
        }: {
            width: t.outerWidth(),
            height: t.outerHeight(),
            offset: t.offset()
        }
    }
    var n = t("common:widget/lib/jquery/jquery.js");
    n.ui = n.ui || {};
    var l, s = Math.max,
    f = Math.abs,
    r = Math.round,
    h = /left|center|right/,
    p = /top|center|bottom/,
    c = /[\+\-]\d+(\.[\d]+)?%?/,
    a = /^\w+/,
    d = /%$/,
    g = n.fn.position;
    n.position = {
        scrollbarWidth: function() {
            if (void 0 !== l) return l;
            var t, i, e = n("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
            o = e.children()[0];
            return n("body").append(e),
            t = o.offsetWidth,
            e.css("overflow", "scroll"),
            i = o.offsetWidth,
            t === i && (i = e[0].clientWidth),
            e.remove(),
            l = t - i
        },
        getScrollInfo: function(t) {
            var i = t.isWindow ? "": t.element.css("overflow-x"),
            e = t.isWindow ? "": t.element.css("overflow-y"),
            o = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth,
            l = "scroll" === e || "auto" === e && t.height < t.element[0].scrollHeight;
            return {
                width: l ? n.position.scrollbarWidth() : 0,
                height: o ? n.position.scrollbarWidth() : 0
            }
        },
        getWithinInfo: function(t) {
            var i = n(t || window),
            e = n.isWindow(i[0]);
            return {
                element: i,
                isWindow: e,
                offset: i.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: i.scrollLeft(),
                scrollTop: i.scrollTop(),
                width: e ? i.width() : i.outerWidth(),
                height: e ? i.height() : i.outerHeight()
            }
        }
    },
    n.fn.position = function(t) {
        if (!t || !t.of) return g.apply(this, arguments);
        t = n.extend({},
        t);
        var l, d, u, m, w, W, v = n(t.of),
        y = n.position.getWithinInfo(t.within),
        b = n.position.getScrollInfo(y),
        H = (t.collision || "flip").split(" "),
        x = {};
        return W = o(v),
        v[0].preventDefault && (t.at = "left top"),
        d = W.width,
        u = W.height,
        m = W.offset,
        w = n.extend({},
        m),
        n.each(["my", "at"],
        function() {
            var i, e, o = (t[this] || "").split(" ");
            1 === o.length && (o = h.test(o[0]) ? o.concat(["center"]) : p.test(o[0]) ? ["center"].concat(o) : ["center", "center"]),
            o[0] = h.test(o[0]) ? o[0] : "center",
            o[1] = p.test(o[1]) ? o[1] : "center",
            i = c.exec(o[0]),
            e = c.exec(o[1]),
            x[this] = [i ? i[0] : 0, e ? e[0] : 0],
            t[this] = [a.exec(o[0])[0], a.exec(o[1])[0]]
        }),
        1 === H.length && (H[1] = H[0]),
        "right" === t.at[0] ? w.left += d: "center" === t.at[0] && (w.left += d / 2),
        "bottom" === t.at[1] ? w.top += u: "center" === t.at[1] && (w.top += u / 2),
        l = i(x.at, d, u),
        w.left += l[0],
        w.top += l[1],
        this.each(function() {
            var o, h, p = n(this),
            c = p.outerWidth(),
            a = p.outerHeight(),
            g = e(this, "marginLeft"),
            W = e(this, "marginTop"),
            T = c + g + e(this, "marginRight") + b.width,
            L = a + W + e(this, "marginBottom") + b.height,
            P = n.extend({},
            w),
            j = i(x.my, p.outerWidth(), p.outerHeight());
            "right" === t.my[0] ? P.left -= c: "center" === t.my[0] && (P.left -= c / 2),
            "bottom" === t.my[1] ? P.top -= a: "center" === t.my[1] && (P.top -= a / 2),
            P.left += j[0],
            P.top += j[1],
            n.support.offsetFractions || (P.left = r(P.left), P.top = r(P.top)),
            o = {
                marginLeft: g,
                marginTop: W
            },
            n.each(["left", "top"],
            function(i, e) {
                n.ui.position[H[i]] && n.ui.position[H[i]][e](P, {
                    targetWidth: d,
                    targetHeight: u,
                    elemWidth: c,
                    elemHeight: a,
                    collisionPosition: o,
                    collisionWidth: T,
                    collisionHeight: L,
                    offset: [l[0] + j[0], l[1] + j[1]],
                    my: t.my,
                    at: t.at,
                    within: y,
                    elem: p
                })
            }),
            t.using && (h = function(i) {
                var e = m.left - P.left,
                o = e + d - c,
                n = m.top - P.top,
                l = n + u - a,
                r = {
                    target: {
                        element: v,
                        left: m.left,
                        top: m.top,
                        width: d,
                        height: u
                    },
                    element: {
                        element: p,
                        left: P.left,
                        top: P.top,
                        width: c,
                        height: a
                    },
                    horizontal: 0 > o ? "left": e > 0 ? "right": "center",
                    vertical: 0 > l ? "top": n > 0 ? "bottom": "middle"
                };
                c > d && f(e + o) < d && (r.horizontal = "center"),
                a > u && f(n + l) < u && (r.vertical = "middle"),
                r.important = s(f(e), f(o)) > s(f(n), f(l)) ? "horizontal": "vertical",
                t.using.call(this, i, r)
            }),
            p.offset(n.extend(P, {
                using: h
            }))
        })
    },
    n.ui.position = {
        fit: {
            left: function(t, i) {
                var e, o = i.within,
                n = o.isWindow ? o.scrollLeft: o.offset.left,
                l = o.width,
                f = t.left - i.collisionPosition.marginLeft,
                r = n - f,
                h = f + i.collisionWidth - l - n;
                i.collisionWidth > l ? r > 0 && 0 >= h ? (e = t.left + r + i.collisionWidth - l - n, t.left += r - e) : t.left = h > 0 && 0 >= r ? n: r > h ? n + l - i.collisionWidth: n: r > 0 ? t.left += r: h > 0 ? t.left -= h: t.left = s(t.left - f, t.left)
            },
            top: function(t, i) {
                var e, o = i.within,
                n = o.isWindow ? o.scrollTop: o.offset.top,
                l = i.within.height,
                f = t.top - i.collisionPosition.marginTop,
                r = n - f,
                h = f + i.collisionHeight - l - n;
                i.collisionHeight > l ? r > 0 && 0 >= h ? (e = t.top + r + i.collisionHeight - l - n, t.top += r - e) : t.top = h > 0 && 0 >= r ? n: r > h ? n + l - i.collisionHeight: n: r > 0 ? t.top += r: h > 0 ? t.top -= h: t.top = s(t.top - f, t.top)
            }
        },
        flip: {
            left: function(t, i) {
                var e, o, n = i.within,
                l = n.offset.left + n.scrollLeft,
                s = n.width,
                r = n.isWindow ? n.scrollLeft: n.offset.left,
                h = t.left - i.collisionPosition.marginLeft,
                p = h - r,
                c = h + i.collisionWidth - s - r,
                a = "left" === i.my[0] ? -i.elemWidth: "right" === i.my[0] ? i.elemWidth: 0,
                d = "left" === i.at[0] ? i.targetWidth: "right" === i.at[0] ? -i.targetWidth: 0,
                g = -2 * i.offset[0];
                0 > p ? (e = t.left + a + d + g + i.collisionWidth - s - l, (0 > e || e < f(p)) && (t.left += a + d + g)) : c > 0 && (o = t.left - i.collisionPosition.marginLeft + a + d + g - r, (o > 0 || f(o) < c) && (t.left += a + d + g))
            },
            top: function(t, i) {
                var e, o, n = i.within,
                l = n.offset.top + n.scrollTop,
                s = n.height,
                r = n.isWindow ? n.scrollTop: n.offset.top,
                h = t.top - i.collisionPosition.marginTop,
                p = h - r,
                c = h + i.collisionHeight - s - r,
                a = "top" === i.my[1],
                d = a ? -i.elemHeight: "bottom" === i.my[1] ? i.elemHeight: 0,
                g = "top" === i.at[1] ? i.targetHeight: "bottom" === i.at[1] ? -i.targetHeight: 0,
                u = -2 * i.offset[1];
                0 > p ? (o = t.top + d + g + u + i.collisionHeight - s - l, t.top + d + g + u > p && (0 > o || o < f(p)) && (t.top += d + g + u)) : c > 0 && (e = t.top - i.collisionPosition.marginTop + d + g + u - r, t.top + d + g + u > c && (e > 0 || f(e) < c) && (t.top += d + g + u))
            }
        },
        flipfit: {
            left: function() {
                n.ui.position.flip.left.apply(this, arguments),
                n.ui.position.fit.left.apply(this, arguments)
            },
            top: function() {
                n.ui.position.flip.top.apply(this, arguments),
                n.ui.position.fit.top.apply(this, arguments)
            }
        }
    },
    function() {
        var t, i, e, o, l, s = document.getElementsByTagName("body")[0],
        f = document.createElement("div");
        t = document.createElement(s ? "div": "body"),
        e = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        },
        s && n.extend(e, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (l in e) t.style[l] = e[l];
        t.appendChild(f),
        i = s || document.documentElement,
        i.insertBefore(t, i.firstChild),
        f.style.cssText = "position: absolute; left: 10.7432222px;",
        o = n(f).offset().left,
        n.support.offsetFractions = o > 10 && 11 > o,
        t.innerHTML = "",
        i.removeChild(t)
    } ()
});;
define("common:widget/lib/jquery.ui/jquery.ui.resizable.js",
function(t) {
    function e(t) {
        return parseInt(t, 10) || 0
    }
    function i(t) {
        return ! isNaN(parseInt(t, 10))
    }
    var s = t("common:widget/lib/jquery/jquery.js");
    t("common:widget/lib/jquery.ui/jquery.ui.core.js"),
    t("common:widget/lib/jquery.ui/jquery.ui.mouse.js"),
    t("common:widget/lib/jquery.ui/jquery.ui.widget.js"),
    s.widget("ui.resizable", s.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function() {
            var t, e, i, h, n, o = this,
            a = this.options;
            if (this.element.addClass("ui-resizable"), s.extend(this, {
                _aspectRatio: !!a.aspectRatio,
                aspectRatio: a.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: a.helper || a.ghost || a.animate ? a.helper || "ui-resizable-helper": null
            }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(s("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({
                margin: this.originalElement.css("margin")
            }), this._proportionallyResize()), this.handles = a.handles || (s(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            }: "e,s,se"), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {},
            e = 0; e < t.length; e++) i = s.trim(t[e]),
            n = "ui-resizable-" + i,
            h = s("<div class='ui-resizable-handle " + n + "'></div>"),
            h.css({
                zIndex: a.zIndex
            }),
            "se" === i && h.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
            this.handles[i] = ".ui-resizable-" + i,
            this.element.append(h);
            this._renderAxis = function(t) {
                var e, i, h, n;
                t = t || this.element;
                for (e in this.handles) this.handles[e].constructor === String && (this.handles[e] = s(this.handles[e], this.element).show()),
                this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (i = s(this.handles[e], this.element), n = /sw|ne|nw|se|n|s/.test(e) ? i.outerHeight() : i.outerWidth(), h = ["padding", /ne|nw|n/.test(e) ? "Top": /se|sw|s/.test(e) ? "Bottom": /^e$/.test(e) ? "Right": "Left"].join(""), t.css(h, n), this._proportionallyResize()),
                s(this.handles[e]).length
            },
            this._renderAxis(this.element),
            this._handles = s(".ui-resizable-handle", this.element).disableSelection(),
            this._handles.mouseover(function() {
                o.resizing || (this.className && (h = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = h && h[1] ? h[1] : "se")
            }),
            a.autoHide && (this._handles.hide(), s(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                a.disabled || (s(this).removeClass("ui-resizable-autohide"), o._handles.show())
            }).mouseleave(function() {
                a.disabled || o.resizing || (s(this).addClass("ui-resizable-autohide"), o._handles.hide())
            })),
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var t, e = function(t) {
                s(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (e(this.element), t = this.element, this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            }).insertAfter(t), t.remove()),
            this.originalElement.css("resize", this.originalResizeStyle),
            e(this.originalElement),
            this
        },
        _mouseCapture: function(t) {
            var e, i, h = !1;
            for (e in this.handles) i = s(this.handles[e])[0],
            (i === t.target || s.contains(i, t.target)) && (h = !0);
            return ! this.options.disabled && h
        },
        _mouseStart: function(t) {
            var i, h, n, o = this.options,
            a = this.element.position(),
            l = this.element;
            return this.resizing = !0,
            /absolute/.test(l.css("position")) ? l.css({
                position: "absolute",
                top: l.css("top"),
                left: l.css("left")
            }) : l.is(".ui-draggable") && l.css({
                position: "absolute",
                top: a.top,
                left: a.left
            }),
            this._renderProxy(),
            i = e(this.helper.css("left")),
            h = e(this.helper.css("top")),
            o.containment && (i += s(o.containment).scrollLeft() || 0, h += s(o.containment).scrollTop() || 0),
            this.offset = this.helper.offset(),
            this.position = {
                left: i,
                top: h
            },
            this.size = this._helper ? {
                width: l.outerWidth(),
                height: l.outerHeight()
            }: {
                width: l.width(),
                height: l.height()
            },
            this.originalSize = this._helper ? {
                width: l.outerWidth(),
                height: l.outerHeight()
            }: {
                width: l.width(),
                height: l.height()
            },
            this.originalPosition = {
                left: i,
                top: h
            },
            this.sizeDiff = {
                width: l.outerWidth() - l.width(),
                height: l.outerHeight() - l.height()
            },
            this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            },
            this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio: this.originalSize.width / this.originalSize.height || 1,
            n = s(".ui-resizable-" + this.axis).css("cursor"),
            s("body").css("cursor", "auto" === n ? this.axis + "-resize": n),
            l.addClass("ui-resizable-resizing"),
            this._propagate("start", t),
            !0
        },
        _mouseDrag: function(t) {
            var e, i = this.helper,
            h = {},
            n = this.originalMousePosition,
            o = this.axis,
            a = this.position.top,
            l = this.position.left,
            r = this.size.width,
            p = this.size.height,
            d = t.pageX - n.left || 0,
            g = t.pageY - n.top || 0,
            u = this._change[o];
            return u ? (e = u.apply(this, [t, d, g]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (e = this._updateRatio(e, t)), e = this._respectSize(e, t), this._updateCache(e), this._propagate("resize", t), this.position.top !== a && (h.top = this.position.top + "px"), this.position.left !== l && (h.left = this.position.left + "px"), this.size.width !== r && (h.width = this.size.width + "px"), this.size.height !== p && (h.height = this.size.height + "px"), i.css(h), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), s.isEmptyObject(h) || this._trigger("resize", t, this.ui()), !1) : !1
        },
        _mouseStop: function(t) {
            this.resizing = !1;
            var e, i, h, n, o, a, l, r = this.options,
            p = this;
            return this._helper && (e = this._proportionallyResizeElements, i = e.length && /textarea/i.test(e[0].nodeName), h = i && s.ui.hasScroll(e[0], "left") ? 0 : p.sizeDiff.height, n = i ? 0 : p.sizeDiff.width, o = {
                width: p.helper.width() - n,
                height: p.helper.height() - h
            },
            a = parseInt(p.element.css("left"), 10) + (p.position.left - p.originalPosition.left) || null, l = parseInt(p.element.css("top"), 10) + (p.position.top - p.originalPosition.top) || null, r.animate || this.element.css(s.extend(o, {
                top: l,
                left: a
            })), p.helper.height(p.size.height), p.helper.width(p.size.width), this._helper && !r.animate && this._proportionallyResize()),
            s("body").css("cursor", "auto"),
            this.element.removeClass("ui-resizable-resizing"),
            this._propagate("stop", t),
            this._helper && this.helper.remove(),
            !1
        },
        _updateVirtualBoundaries: function(t) {
            var e, s, h, n, o, a = this.options;
            o = {
                minWidth: i(a.minWidth) ? a.minWidth: 0,
                maxWidth: i(a.maxWidth) ? a.maxWidth: 1 / 0,
                minHeight: i(a.minHeight) ? a.minHeight: 0,
                maxHeight: i(a.maxHeight) ? a.maxHeight: 1 / 0
            },
            (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, h = o.minWidth / this.aspectRatio, s = o.maxHeight * this.aspectRatio, n = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), h > o.minHeight && (o.minHeight = h), s < o.maxWidth && (o.maxWidth = s), n < o.maxHeight && (o.maxHeight = n)),
            this._vBoundaries = o
        },
        _updateCache: function(t) {
            this.offset = this.helper.offset(),
            i(t.left) && (this.position.left = t.left),
            i(t.top) && (this.position.top = t.top),
            i(t.height) && (this.size.height = t.height),
            i(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function(t) {
            var e = this.position,
            s = this.size,
            h = this.axis;
            return i(t.height) ? t.width = t.height * this.aspectRatio: i(t.width) && (t.height = t.width / this.aspectRatio),
            "sw" === h && (t.left = e.left + (s.width - t.width), t.top = null),
            "nw" === h && (t.top = e.top + (s.height - t.height), t.left = e.left + (s.width - t.width)),
            t
        },
        _respectSize: function(t) {
            var e = this._vBoundaries,
            s = this.axis,
            h = i(t.width) && e.maxWidth && e.maxWidth < t.width,
            n = i(t.height) && e.maxHeight && e.maxHeight < t.height,
            o = i(t.width) && e.minWidth && e.minWidth > t.width,
            a = i(t.height) && e.minHeight && e.minHeight > t.height,
            l = this.originalPosition.left + this.originalSize.width,
            r = this.position.top + this.size.height,
            p = /sw|nw|w/.test(s),
            d = /nw|ne|n/.test(s);
            return o && (t.width = e.minWidth),
            a && (t.height = e.minHeight),
            h && (t.width = e.maxWidth),
            n && (t.height = e.maxHeight),
            o && p && (t.left = l - e.minWidth),
            h && p && (t.left = l - e.maxWidth),
            a && d && (t.top = r - e.minHeight),
            n && d && (t.top = r - e.maxHeight),
            t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null,
            t
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) {
                var t, e, i, s, h, n = this.helper || this.element;
                for (t = 0; t < this._proportionallyResizeElements.length; t++) {
                    if (h = this._proportionallyResizeElements[t], !this.borderDif) for (this.borderDif = [], i = [h.css("borderTopWidth"), h.css("borderRightWidth"), h.css("borderBottomWidth"), h.css("borderLeftWidth")], s = [h.css("paddingTop"), h.css("paddingRight"), h.css("paddingBottom"), h.css("paddingLeft")], e = 0; e < i.length; e++) this.borderDif[e] = (parseInt(i[e], 10) || 0) + (parseInt(s[e], 10) || 0);
                    h.css({
                        height: n.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: n.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
            }
        },
        _renderProxy: function() {
            var t = this.element,
            e = this.options;
            this.elementOffset = t.offset(),
            this._helper ? (this.helper = this.helper || s("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++e.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(t, e) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function(t, e) {
                var i = this.originalSize,
                s = this.originalPosition;
                return {
                    left: s.left + e,
                    width: i.width - e
                }
            },
            n: function(t, e, i) {
                var s = this.originalSize,
                h = this.originalPosition;
                return {
                    top: h.top + i,
                    height: s.height - i
                }
            },
            s: function(t, e, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(t, e, i) {
                return s.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
            },
            sw: function(t, e, i) {
                return s.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
            },
            ne: function(t, e, i) {
                return s.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
            },
            nw: function(t, e, i) {
                return s.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
            }
        },
        _propagate: function(t, e) {
            s.ui.plugin.call(this, t, [e, this.ui()]),
            "resize" !== t && this._trigger(t, e, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }),
    s.ui.plugin.add("resizable", "animate", {
        stop: function(t) {
            var e = s(this).data("ui-resizable"),
            i = e.options,
            h = e._proportionallyResizeElements,
            n = h.length && /textarea/i.test(h[0].nodeName),
            o = n && s.ui.hasScroll(h[0], "left") ? 0 : e.sizeDiff.height,
            a = n ? 0 : e.sizeDiff.width,
            l = {
                width: e.size.width - a,
                height: e.size.height - o
            },
            r = parseInt(e.element.css("left"), 10) + (e.position.left - e.originalPosition.left) || null,
            p = parseInt(e.element.css("top"), 10) + (e.position.top - e.originalPosition.top) || null;
            e.element.animate(s.extend(l, p && r ? {
                top: p,
                left: r
            }: {}), {
                duration: i.animateDuration,
                easing: i.animateEasing,
                step: function() {
                    var i = {
                        width: parseInt(e.element.css("width"), 10),
                        height: parseInt(e.element.css("height"), 10),
                        top: parseInt(e.element.css("top"), 10),
                        left: parseInt(e.element.css("left"), 10)
                    };
                    h && h.length && s(h[0]).css({
                        width: i.width,
                        height: i.height
                    }),
                    e._updateCache(i),
                    e._propagate("resize", t)
                }
            })
        }
    }),
    s.ui.plugin.add("resizable", "containment", {
        start: function() {
            var t, i, h, n, o, a, l, r = s(this).data("ui-resizable"),
            p = r.options,
            d = r.element,
            g = p.containment,
            u = g instanceof s ? g.get(0) : /parent/.test(g) ? d.parent().get(0) : g;
            u && (r.containerElement = s(u), /document/.test(g) || g === document ? (r.containerOffset = {
                left: 0,
                top: 0
            },
            r.containerPosition = {
                left: 0,
                top: 0
            },
            r.parentData = {
                element: s(document),
                left: 0,
                top: 0,
                width: s(document).width(),
                height: s(document).height() || document.body.parentNode.scrollHeight
            }) : (t = s(u), i = [], s(["Top", "Right", "Left", "Bottom"]).each(function(s, h) {
                i[s] = e(t.css("padding" + h))
            }), r.containerOffset = t.offset(), r.containerPosition = t.position(), r.containerSize = {
                height: t.innerHeight() - i[3],
                width: t.innerWidth() - i[1]
            },
            h = r.containerOffset, n = r.containerSize.height, o = r.containerSize.width, a = s.ui.hasScroll(u, "left") ? u.scrollWidth: o, l = s.ui.hasScroll(u) ? u.scrollHeight: n, r.parentData = {
                element: u,
                left: h.left,
                top: h.top,
                width: a,
                height: l
            }))
        },
        resize: function(t) {
            var e, i, h, n, o = s(this).data("ui-resizable"),
            a = o.options,
            l = o.containerOffset,
            r = o.position,
            p = o._aspectRatio || t.shiftKey,
            d = {
                top: 0,
                left: 0
            },
            g = o.containerElement;
            g[0] !== document && /static/.test(g.css("position")) && (d = l),
            r.left < (o._helper ? l.left: 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - l.left: o.position.left - d.left), p && (o.size.height = o.size.width / o.aspectRatio), o.position.left = a.helper ? l.left: 0),
            r.top < (o._helper ? l.top: 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - l.top: o.position.top), p && (o.size.width = o.size.height * o.aspectRatio), o.position.top = o._helper ? l.top: 0),
            o.offset.left = o.parentData.left + o.position.left,
            o.offset.top = o.parentData.top + o.position.top,
            e = Math.abs((o._helper ? o.offset.left - d.left: o.offset.left - d.left) + o.sizeDiff.width),
            i = Math.abs((o._helper ? o.offset.top - d.top: o.offset.top - l.top) + o.sizeDiff.height),
            h = o.containerElement.get(0) === o.element.parent().get(0),
            n = /relative|absolute/.test(o.containerElement.css("position")),
            h && n && (e -= o.parentData.left),
            e + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - e, p && (o.size.height = o.size.width / o.aspectRatio)),
            i + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - i, p && (o.size.width = o.size.height * o.aspectRatio))
        },
        stop: function() {
            var t = s(this).data("ui-resizable"),
            e = t.options,
            i = t.containerOffset,
            h = t.containerPosition,
            n = t.containerElement,
            o = s(t.helper),
            a = o.offset(),
            l = o.outerWidth() - t.sizeDiff.width,
            r = o.outerHeight() - t.sizeDiff.height;
            t._helper && !e.animate && /relative/.test(n.css("position")) && s(this).css({
                left: a.left - h.left - i.left,
                width: l,
                height: r
            }),
            t._helper && !e.animate && /static/.test(n.css("position")) && s(this).css({
                left: a.left - h.left - i.left,
                width: l,
                height: r
            })
        }
    }),
    s.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var t = s(this).data("ui-resizable"),
            e = t.options,
            i = function(t) {
                s(t).each(function() {
                    var t = s(this);
                    t.data("ui-resizable-alsoresize", {
                        width: parseInt(t.width(), 10),
                        height: parseInt(t.height(), 10),
                        left: parseInt(t.css("left"), 10),
                        top: parseInt(t.css("top"), 10)
                    })
                })
            };
            "object" != typeof e.alsoResize || e.alsoResize.parentNode ? i(e.alsoResize) : e.alsoResize.length ? (e.alsoResize = e.alsoResize[0], i(e.alsoResize)) : s.each(e.alsoResize,
            function(t) {
                i(t)
            })
        },
        resize: function(t, e) {
            var i = s(this).data("ui-resizable"),
            h = i.options,
            n = i.originalSize,
            o = i.originalPosition,
            a = {
                height: i.size.height - n.height || 0,
                width: i.size.width - n.width || 0,
                top: i.position.top - o.top || 0,
                left: i.position.left - o.left || 0
            },
            l = function(t, i) {
                s(t).each(function() {
                    var t = s(this),
                    h = s(this).data("ui-resizable-alsoresize"),
                    n = {},
                    o = i && i.length ? i: t.parents(e.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    s.each(o,
                    function(t, e) {
                        var i = (h[e] || 0) + (a[e] || 0);
                        i && i >= 0 && (n[e] = i || null)
                    }),
                    t.css(n)
                })
            };
            "object" != typeof h.alsoResize || h.alsoResize.nodeType ? l(h.alsoResize) : s.each(h.alsoResize,
            function(t, e) {
                l(t, e)
            })
        },
        stop: function() {
            s(this).removeData("resizable-alsoresize")
        }
    }),
    s.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var t = s(this).data("ui-resizable"),
            e = t.options,
            i = t.size;
            t.ghost = t.originalElement.clone(),
            t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: i.height,
                width: i.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof e.ghost ? e.ghost: ""),
            t.ghost.appendTo(t.helper)
        },
        resize: function() {
            var t = s(this).data("ui-resizable");
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function() {
            var t = s(this).data("ui-resizable");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }),
    s.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var t = s(this).data("ui-resizable"),
            e = t.options,
            i = t.size,
            h = t.originalSize,
            n = t.originalPosition,
            o = t.axis,
            a = "number" == typeof e.grid ? [e.grid, e.grid] : e.grid,
            l = a[0] || 1,
            r = a[1] || 1,
            p = Math.round((i.width - h.width) / l) * l,
            d = Math.round((i.height - h.height) / r) * r,
            g = h.width + p,
            u = h.height + d,
            c = e.maxWidth && e.maxWidth < g,
            f = e.maxHeight && e.maxHeight < u,
            m = e.minWidth && e.minWidth > g,
            z = e.minHeight && e.minHeight > u;
            e.grid = a,
            m && (g += l),
            z && (u += r),
            c && (g -= l),
            f && (u -= r),
            /^(se|s|e)$/.test(o) ? (t.size.width = g, t.size.height = u) : /^(ne)$/.test(o) ? (t.size.width = g, t.size.height = u, t.position.top = n.top - d) : /^(sw)$/.test(o) ? (t.size.width = g, t.size.height = u, t.position.left = n.left - p) : (t.size.width = g, t.size.height = u, t.position.top = n.top - d, t.position.left = n.left - p)
        }
    })
});;
define("common:widget/lib/jquery.ui/jquery.ui.dialog.js",
function(i) {
    var t = i("common:widget/lib/jquery/jquery.js");
    i("common:widget/lib/jquery.ui/jquery.ui.core.js"),
    i("common:widget/lib/jquery.ui/jquery.ui.widget.js"),
    i("common:widget/lib/jquery.ui/jquery.ui.button.js"),
    i("common:widget/lib/jquery.ui/jquery.ui.draggable.js"),
    i("common:widget/lib/jquery.ui/jquery.ui.mouse.js"),
    i("common:widget/lib/jquery.ui/jquery.ui.position.js"),
    i("common:widget/lib/jquery.ui/jquery.ui.resizable.js");
    var e = {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0
    },
    o = {
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0
    };
    t.widget("ui.dialog", {
        version: "1.10.3",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(i) {
                    var e = t(this).css(i).offset().top;
                    0 > e && t(this).css("top", i.top - e)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            },
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            },
            this.originalTitle = this.element.attr("title"),
            this.options.title = this.options.title || this.originalTitle,
            this._createWrapper(),
            this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),
            this._createTitlebar(),
            this._createButtonPane(),
            this.options.draggable && t.fn.draggable && this._makeDraggable(),
            this.options.resizable && t.fn.resizable && this._makeResizable(),
            this._isOpen = !1
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var i = this.options.appendTo;
            return i && (i.jquery || i.nodeType) ? t(i) : this.document.find(i || "body").eq(0)
        },
        _destroy: function() {
            var i, t = this.originalPosition;
            this._destroyOverlay(),
            this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),
            this.uiDialog.stop(!0, !0).remove(),
            this.originalTitle && this.element.attr("title", this.originalTitle),
            i = t.parent.children().eq(t.index),
            i.length && i[0] !== this.element[0] ? i.before(this.element) : t.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: t.noop,
        enable: t.noop,
        close: function(i) {
            var e = this;
            if (this._isOpen && this._trigger("beforeClose", i) !== !1) {
                this._isOpen = !1,
                this._destroyOverlay();
                var o;
                try {
                    o = this.opener.filter(":focusable")
                } catch(s) {
                    o = null
                }
                o && !o.focus().length && t(this.document[0].activeElement).blur(),
                this._hide(this.uiDialog, this.options.hide,
                function() {
                    e._trigger("close", i)
                })
            }
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(i, t) {
            var e = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
            return e && !t && this._trigger("focus", i),
            e
        },
        open: function() {
            var i = this;
            return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show,
            function() {
                i._focusTabbable(),
                i._trigger("focus")
            }), void this._trigger("open"))
        },
        _focusTabbable: function() {
            var i = this.element.find("[autofocus]");
            i.length || (i = this.element.find(":tabbable")),
            i.length || (i = this.uiDialogButtonPane.find(":tabbable")),
            i.length || (i = this.uiDialogTitlebarClose.filter(":tabbable")),
            i.length || (i = this.uiDialog),
            i.eq(0).focus()
        },
        _keepFocus: function(i) {
            function e() {
                var i = this.document[0].activeElement,
                e = this.uiDialog[0] === i || t.contains(this.uiDialog[0], i);
                e || this._focusTabbable()
            }
            i.preventDefault(),
            e.call(this),
            this._delay(e)
        },
        _createWrapper: function() {
            this.uiDialog = t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()),
            this._on(this.uiDialog, {
                keydown: function(i) {
                    if (this.options.closeOnEscape && !i.isDefaultPrevented() && i.keyCode && i.keyCode === t.ui.keyCode.ESCAPE) return i.preventDefault(),
                    void this.close(i);
                    if (i.keyCode === t.ui.keyCode.TAB) {
                        var e = this.uiDialog.find(":tabbable"),
                        o = e.filter(":first"),
                        s = e.filter(":last");
                        i.target !== s[0] && i.target !== this.uiDialog[0] || i.shiftKey ? i.target !== o[0] && i.target !== this.uiDialog[0] || !i.shiftKey || (s.focus(1), i.preventDefault()) : (o.focus(1), i.preventDefault())
                    }
                },
                mousedown: function(i) {
                    this._moveToTop(i) && this._focusTabbable()
                }
            }),
            this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var i;
            this.uiDialogTitlebar = t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-helper-clearfix").prependTo(this.uiDialog),
            this._on(this.uiDialogTitlebar, {
                mousedown: function(i) {
                    t(i.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            }),
            this.uiDialogTitlebarClose = t("<button></button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),
            this._on(this.uiDialogTitlebarClose, {
                click: function(i) {
                    i.preventDefault(),
                    this.close(i)
                }
            }),
            i = t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),
            this._title(i),
            this.uiDialog.attr({
                "aria-labelledby": i.attr("id")
            })
        },
        _title: function(i) {
            this.options.title || i.html("&#160;"),
            i.text(this.options.title)
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
            this.uiButtonSet = t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),
            this._createButtons()
        },
        _createButtons: function() {
            var i = this,
            e = this.options.buttons;
            return this.uiDialogButtonPane.remove(),
            this.uiButtonSet.empty(),
            t.isEmptyObject(e) || t.isArray(e) && !e.length ? void this.uiDialog.removeClass("ui-dialog-buttons") : (t.each(e,
            function(e, o) {
                var s, n;
                o = t.isFunction(o) ? {
                    click: o,
                    text: e
                }: o,
                o = t.extend({
                    type: "button"
                },
                o),
                s = o.click,
                o.click = function() {
                    s.apply(i.element[0], arguments)
                },
                n = {
                    icons: o.icons,
                    text: o.showText
                },
                delete o.icons,
                delete o.showText,
                t("<button></button>", o).button(n).appendTo(i.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function() {
            function i(i) {
                return {
                    position: i.position,
                    offset: i.offset
                }
            }
            var e = this,
            o = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(o, s) {
                    t(this).addClass("ui-dialog-dragging"),
                    e._blockFrames(),
                    e._trigger("dragStart", o, i(s))
                },
                drag: function(t, o) {
                    e._trigger("drag", t, i(o))
                },
                stop: function(s, n) {
                    o.position = [n.position.left - e.document.scrollLeft(), n.position.top - e.document.scrollTop()],
                    t(this).removeClass("ui-dialog-dragging"),
                    e._unblockFrames(),
                    e._trigger("dragStop", s, i(n))
                }
            })
        },
        _makeResizable: function() {
            function i(i) {
                return {
                    originalPosition: i.originalPosition,
                    originalSize: i.originalSize,
                    position: i.position,
                    size: i.size
                }
            }
            var e = this,
            o = this.options,
            s = o.resizable,
            n = this.uiDialog.css("position"),
            a = "string" == typeof s ? s: "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: o.maxWidth,
                maxHeight: o.maxHeight,
                minWidth: o.minWidth,
                minHeight: this._minHeight(),
                handles: a,
                start: function(o, s) {
                    t(this).addClass("ui-dialog-resizing"),
                    e._blockFrames(),
                    e._trigger("resizeStart", o, i(s))
                },
                resize: function(t, o) {
                    e._trigger("resize", t, i(o))
                },
                stop: function(s, n) {
                    o.height = t(this).height(),
                    o.width = t(this).width(),
                    t(this).removeClass("ui-dialog-resizing"),
                    e._unblockFrames(),
                    e._trigger("resizeStop", s, i(n))
                }
            }).css("position", n)
        },
        _minHeight: function() {
            var i = this.options;
            return "auto" === i.height ? i.minHeight: Math.min(i.minHeight, i.height)
        },
        _position: function() {
            var i = this.uiDialog.is(":visible");
            i || this.uiDialog.show(),
            this.uiDialog.position(this.options.position),
            i || this.uiDialog.hide()
        },
        _setOptions: function(i) {
            var s = this,
            n = !1,
            a = {};
            t.each(i,
            function(i, t) {
                s._setOption(i, t),
                i in e && (n = !0),
                i in o && (a[i] = t)
            }),
            n && (this._size(), this._position()),
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", a)
        },
        _setOption: function(i, t) {
            var e, o, s = this.uiDialog;
            "dialogClass" === i && s.removeClass(this.options.dialogClass).addClass(t),
            "disabled" !== i && (this._super(i, t), "appendTo" === i && this.uiDialog.appendTo(this._appendTo()), "buttons" === i && this._createButtons(), "closeText" === i && this.uiDialogTitlebarClose.button({
                label: "" + t
            }), "draggable" === i && (e = s.is(":data(ui-draggable)"), e && !t && s.draggable("destroy"), !e && t && this._makeDraggable()), "position" === i && this._position(), "resizable" === i && (o = s.is(":data(ui-resizable)"), o && !t && s.resizable("destroy"), o && "string" == typeof t && s.resizable("option", "handles", t), o || t === !1 || this._makeResizable()), "title" === i && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var i, t, e, o = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }),
            o.minWidth > o.width && (o.width = o.minWidth),
            i = this.uiDialog.css({
                height: "auto",
                width: o.width
            }).outerHeight(),
            t = Math.max(0, o.minHeight - i),
            e = "number" == typeof o.maxHeight ? Math.max(0, o.maxHeight - i) : "none",
            "auto" === o.height ? this.element.css({
                minHeight: t,
                maxHeight: e,
                height: "auto"
            }) : this.element.height(Math.max(0, o.height - i)),
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var i = t(this);
                return t("<div>").css({
                    position: "absolute",
                    width: i.outerWidth(),
                    height: i.outerHeight()
                }).appendTo(i.parent()).offset(i.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function(i) {
            return t(i.target).closest(".ui-dialog").length ? !0 : !!t(i.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var i = this,
                e = this.widgetFullName;
                t.ui.dialog.overlayInstances || this._delay(function() {
                    t.ui.dialog.overlayInstances && this.document.bind("focusin.dialog",
                    function(o) {
                        i._allowInteraction(o) || (o.preventDefault(), t(".ui-dialog:visible:last .ui-dialog-content").data(e)._focusTabbable())
                    })
                }),
                this.overlay = t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),
                this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }),
                t.ui.dialog.overlayInstances++
            }
        },
        _destroyOverlay: function() {
            this.options.modal && this.overlay && (t.ui.dialog.overlayInstances--, t.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
        }
    }),
    t.ui.dialog.overlayInstances = 0,
    t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, {
        _position: function() {
            var i, e = this.options.position,
            o = [],
            s = [0, 0];
            e ? (("string" == typeof e || "object" == typeof e && "0" in e) && (o = e.split ? e.split(" ") : [e[0], e[1]], 1 === o.length && (o[1] = o[0]), t.each(["left", "top"],
            function(i, t) { + o[i] === o[i] && (s[i] = o[i], o[i] = t)
            }), e = {
                my: o[0] + (s[0] < 0 ? s[0] : "+" + s[0]) + " " + o[1] + (s[1] < 0 ? s[1] : "+" + s[1]),
                at: o.join(" ")
            }), e = t.extend({},
            t.ui.dialog.prototype.options.position, e)) : e = t.ui.dialog.prototype.options.position,
            i = this.uiDialog.is(":visible"),
            i || this.uiDialog.show(),
            this.uiDialog.position(e),
            i || this.uiDialog.hide()
        }
    })
});;
define("common:widget/lib/jquery.ui/jquery.ui.tooltip.js",
function(t) {
    function i(t, i) {
        var e = (t.attr("aria-describedby") || "").split(/\s+/);
        e.push(i),
        t.data("ui-tooltip-id", i).attr("aria-describedby", o.trim(e.join(" ")))
    }
    function e(t) {
        var i = t.data("ui-tooltip-id"),
        e = (t.attr("aria-describedby") || "").split(/\s+/),
        n = o.inArray(i, e); - 1 !== n && e.splice(n, 1),
        t.removeData("ui-tooltip-id"),
        e = o.trim(e.join(" ")),
        e ? t.attr("aria-describedby", e) : t.removeAttr("aria-describedby")
    }
    var o = t("common:widget/lib/jquery/jquery.js");
    t("common:widget/lib/jquery.ui/jquery.ui.core.js"),
    t("common:widget/lib/jquery.ui/jquery.ui.widget.js"),
    t("common:widget/lib/jquery.ui/jquery.ui.position.js");
    var n = 0;
    o.widget("ui.tooltip", {
        version: "1.10.3",
        options: {
            content: function() {
                var t = o(this).attr("title") || "";
                return o("<a>").text(t).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }),
            this.tooltips = {},
            this.parents = {},
            this.options.disabled && this._disable()
        },
        _setOption: function(t, i) {
            var e = this;
            return "disabled" === t ? (this[i ? "_disable": "_enable"](), void(this.options[t] = i)) : (this._super(t, i), void("content" === t && o.each(this.tooltips,
            function(t, i) {
                e._updateContent(i)
            })))
        },
        _disable: function() {
            var t = this;
            o.each(this.tooltips,
            function(i, e) {
                var n = o.Event("blur");
                n.target = n.currentTarget = e[0],
                t.close(n, !0)
            }),
            this.element.find(this.options.items).addBack().each(function() {
                var t = o(this);
                t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).attr("title", "")
            })
        },
        _enable: function() {
            this.element.find(this.options.items).addBack().each(function() {
                var t = o(this);
                t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
            })
        },
        open: function(t) {
            var i = this,
            e = o(t ? t.target: this.element).closest(this.options.items);
            e.length && !e.data("ui-tooltip-id") && (e.attr("title") && e.data("ui-tooltip-title", e.attr("title")), e.data("ui-tooltip-open", !0), t && "mouseover" === t.type && e.parents().each(function() {
                var t, e = o(this);
                e.data("ui-tooltip-open") && (t = o.Event("blur"), t.target = t.currentTarget = this, i.close(t, !0)),
                e.attr("title") && (e.uniqueId(), i.parents[this.id] = {
                    element: this,
                    title: e.attr("title")
                },
                e.attr("title", ""))
            }), this._updateContent(e, t))
        },
        _updateContent: function(t, i) {
            var e, o = this.options.content,
            n = this,
            s = i ? i.type: null;
            return "string" == typeof o ? this._open(i, t, o) : (e = o.call(t[0],
            function(e) {
                t.data("ui-tooltip-open") && n._delay(function() {
                    i && (i.type = s),
                    this._open(i, t, e)
                })
            }), void(e && this._open(i, t, e)))
        },
        _open: function(t, e, n) {
            function s(t) {
                u.of = t,
                l.is(":hidden") || l.position(u)
            }
            var l, a, r, u = o.extend({},
            this.options.position);
            if (n) {
                if (l = this._find(e), l.length) return void l.find(".ui-tooltip-content").html(n);
                e.is("[title]") && (t && "mouseover" === t.type ? e.attr("title", "") : e.removeAttr("title")),
                l = this._tooltip(e),
                i(e, l.attr("id")),
                l.find(".ui-tooltip-content").html(n),
                this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                    mousemove: s
                }), s(t)) : l.position(o.extend({
                    of: e
                },
                this.options.position)),
                l.hide(),
                this._show(l, this.options.show),
                this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function() {
                    l.is(":visible") && (s(u.of), clearInterval(r))
                },
                o.fx.interval)),
                this._trigger("open", t, {
                    tooltip: l
                }),
                a = {
                    keyup: function(t) {
                        if (t.keyCode === o.ui.keyCode.ESCAPE) {
                            var i = o.Event(t);
                            i.currentTarget = e[0],
                            this.close(i, !0)
                        }
                    },
                    remove: function() {
                        this._removeTooltip(l)
                    }
                },
                t && "mouseover" !== t.type || (a.mouseleave = "close"),
                t && "focusin" !== t.type || (a.focusout = "close"),
                this._on(!0, e, a)
            }
        },
        close: function(t) {
            var i = this,
            n = o(t ? t.currentTarget: this.element),
            s = this._find(n);
            this.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && n.attr("title", n.data("ui-tooltip-title")), e(n), s.stop(!0), this._hide(s, this.options.hide,
            function() {
                i._removeTooltip(o(this))
            }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && o.each(this.parents,
            function(t, e) {
                o(e.element).attr("title", e.title),
                delete i.parents[t]
            }), this.closing = !0, this._trigger("close", t, {
                tooltip: s
            }), this.closing = !1)
        },
        _tooltip: function(t) {
            var i = "ui-tooltip-" + n++,
            e = o("<div>").attr({
                id: i,
                role: "tooltip"
            }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            return o("<div>").addClass("ui-tooltip-content").appendTo(e),
            e.appendTo(this.document[0].body),
            this.tooltips[i] = t,
            e
        },
        _find: function(t) {
            var i = t.data("ui-tooltip-id");
            return i ? o("#" + i) : o()
        },
        _removeTooltip: function(t) {
            t.remove(),
            delete this.tooltips[t.attr("id")]
        },
        _destroy: function() {
            var t = this;
            o.each(this.tooltips,
            function(i, e) {
                var n = o.Event("blur");
                n.target = n.currentTarget = e[0],
                t.close(n, !0),
                o("#" + i).remove(),
                e.data("ui-tooltip-title") && (e.attr("title", e.data("ui-tooltip-title")), e.removeData("ui-tooltip-title"))
            })
        }
    })
});;
define("common:widget/lib/jquery.ui/jquery.ui.mousewheel.js",
function(e) {
    function t(e) {
        var t, i = e || window.event,
        s = [].slice.call(arguments, 1),
        h = 0,
        u = 0,
        a = 0,
        r = 0,
        d = 0;
        return e = n.event.fix(i),
        e.type = "mousewheel",
        i.wheelDelta && (h = i.wheelDelta),
        i.detail && (h = -1 * i.detail),
        i.deltaY && (a = -1 * i.deltaY, h = a),
        i.deltaX && (u = i.deltaX, h = -1 * u),
        void 0 !== i.wheelDeltaY && (a = i.wheelDeltaY),
        void 0 !== i.wheelDeltaX && (u = -1 * i.wheelDeltaX),
        r = Math.abs(h),
        (!l || l > r) && (l = r),
        d = Math.max(Math.abs(a), Math.abs(u)),
        (!o || o > d) && (o = d),
        t = h > 0 ? "floor": "ceil",
        h = Math[t](h / l),
        u = Math[t](u / o),
        a = Math[t](a / o),
        s.unshift(e, h, u, a),
        (n.event.dispatch || n.event.handle).apply(this, s)
    }
    var l, o, n = e("common:widget/lib/jquery/jquery.js"),
    i = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
    s = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"];
    if (n.event.fixHooks) for (var h = i.length; h;) n.event.fixHooks[i[--h]] = n.event.mouseHooks;
    n.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener) for (var e = s.length; e;) this.addEventListener(s[--e], t, !1);
            else this.onmousewheel = t
        },
        teardown: function() {
            if (this.removeEventListener) for (var e = s.length; e;) this.removeEventListener(s[--e], t, !1);
            else this.onmousewheel = null
        }
    },
    n.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
});;
define("common:widget/lib/jquery.ui/jquery.ui.menu.js",
function(e) {
    var t = e("common:widget/lib/jquery/jquery.js");
    e("common:widget/lib/jquery.ui/jquery.ui.core.js"),
    e("common:widget/lib/jquery.ui/jquery.ui.widget.js"),
    e("common:widget/lib/jquery.ui/jquery.ui.position.js"),
    t.widget("ui.menu", {
        version: "1.10.3",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element,
            this.mouseHandled = !1,
            this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, t.proxy(function(e) {
                this.options.disabled && e.preventDefault()
            },
            this)),
            this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"),
            this._on({
                "mousedown .ui-menu-item > a": function(e) {
                    e.preventDefault()
                },
                "click .ui-state-disabled > a": function(e) {
                    e.preventDefault()
                },
                "click .ui-menu-item:has(a)": function(e) {
                    var i = t(e.target).closest(".ui-menu-item"); ! this.mouseHandled && i.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(e), i.has(".ui-menu").length ? this.expand(e) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(e) {
                    var i = t(e.currentTarget);
                    i.siblings().children(".ui-state-active").removeClass("ui-state-active"),
                    this.focus(e, i)
                },
                mouseleave: function(e) {
                    this.collapseAll(e, !0)
                },
                "mouseleave .ui-menu": "collapseAll",
                focus: function(e, t) {
                    var i = this.active || this.element.children(".ui-menu-item").eq(0);
                    t || this.focus(e, i)
                },
                blur: function(e) {
                    this._delay(function() {
                        t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                    })
                },
                keydown: "_keydown"
            }),
            this.refresh(),
            this._on(this.document, {
                click: function(e) {
                    t(e.target).closest(".ui-menu").length || this.collapseAll(e),
                    this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var e = t(this);
                e.data("ui-menu-submenu-carat") && e.remove()
            }),
            this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(e) {
            function i(e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            var s, n, a, u, r, o = !0;
            switch (e.keyCode) {
            case t.ui.keyCode.PAGE_UP:
                this.previousPage(e);
                break;
            case t.ui.keyCode.PAGE_DOWN:
                this.nextPage(e);
                break;
            case t.ui.keyCode.HOME:
                this._move("first", "first", e);
                break;
            case t.ui.keyCode.END:
                this._move("last", "last", e);
                break;
            case t.ui.keyCode.UP:
                this.previous(e);
                break;
            case t.ui.keyCode.DOWN:
                this.next(e);
                break;
            case t.ui.keyCode.LEFT:
                this.collapse(e);
                break;
            case t.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                break;
            case t.ui.keyCode.ENTER:
            case t.ui.keyCode.SPACE:
                this._activate(e);
                break;
            case t.ui.keyCode.ESCAPE:
                this.collapse(e);
                break;
            default:
                o = !1,
                n = this.previousFilter || "",
                a = String.fromCharCode(e.keyCode),
                u = !1,
                clearTimeout(this.filterTimer),
                a === n ? u = !0 : a = n + a,
                r = new RegExp("^" + i(a), "i"),
                s = this.activeMenu.children(".ui-menu-item").filter(function() {
                    return r.test(t(this).children("a").text())
                }),
                s = u && -1 !== s.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : s,
                s.length || (a = String.fromCharCode(e.keyCode), r = new RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function() {
                    return r.test(t(this).children("a").text())
                })),
                s.length ? (this.focus(e, s), s.length > 1 ? (this.previousFilter = a, this.filterTimer = this._delay(function() {
                    delete this.previousFilter
                },
                1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            o && e.preventDefault()
        },
        _activate: function(e) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
        },
        refresh: function() {
            var e, i = this.options.icons.submenu,
            s = this.element.find(this.options.menus);
            s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var e = t(this),
                s = e.prev("a"),
                n = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                s.attr("aria-haspopup", "true").prepend(n),
                e.attr("aria-labelledby", s.attr("id"))
            }),
            e = s.add(this.element),
            e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }),
            e.children(":not(.ui-menu-item)").each(function() {
                var e = t(this);
                /[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
            }),
            e.children(".ui-state-disabled").attr("aria-disabled", "true"),
            this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            } [this.options.role]
        },
        _setOption: function(e, t) {
            "icons" === e && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),
            this._super(e, t)
        },
        focus: function(e, t) {
            var i, s;
            this.blur(e, e && "focus" === e.type),
            this._scrollIntoView(t),
            this.active = t.first(),
            s = this.active.children("a").addClass("ui-state-focus"),
            this.options.role && this.element.attr("aria-activedescendant", s.attr("id")),
            this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),
            e && "keydown" === e.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            },
            this.delay),
            i = t.children(".ui-menu"),
            i.length && /^mouse/.test(e.type) && this._startOpening(i),
            this.activeMenu = t.parent(),
            this._trigger("focus", e, {
                item: t
            })
        },
        _scrollIntoView: function(e) {
            var i, s, n, a, u, r;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), u = this.activeMenu.height(), r = e.height(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > u && this.activeMenu.scrollTop(a + n - u + r))
        },
        blur: function(e, t) {
            t || clearTimeout(this.timer),
            this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, {
                item: this.active
            }))
        },
        _startOpening: function(e) {
            clearTimeout(this.timer),
            "true" === e.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(),
                this._open(e)
            },
            this.delay))
        },
        _open: function(e) {
            var i = t.extend({
                of: this.active
            },
            this.options.position);
            clearTimeout(this.timer),
            this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"),
            e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer),
            this.timer = this._delay(function() {
                var s = i ? this.element: t(e && e.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element),
                this._close(s),
                this.blur(e),
                this.activeMenu = s
            },
            this.delay)
        },
        _close: function(e) {
            e || (e = this.active ? this.active.parent() : this.element),
            e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function(e) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(), this.focus(e, t))
        },
        expand: function(e) {
            var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            t && t.length && (this._open(t.parent()), this._delay(function() {
                this.focus(e, t)
            }))
        },
        next: function(e) {
            this._move("next", "first", e)
        },
        previous: function(e) {
            this._move("prev", "last", e)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(e, t, i) {
            var s;
            this.active && (s = "first" === e || "last" === e ? this.active["first" === e ? "prevAll": "nextAll"](".ui-menu-item").eq( - 1) : this.active[e + "All"](".ui-menu-item").eq(0)),
            s && s.length && this.active || (s = this.activeMenu.children(".ui-menu-item")[t]()),
            this.focus(i, s)
        },
        nextPage: function(e) {
            var i, s, n;
            return this.active ? void(this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return i = t(this),
                i.offset().top - s - n < 0
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last": "first"]()))) : void this.next(e)
        },
        previousPage: function(e) {
            var i, s, n;
            return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return i = t(this),
                i.offset().top - s + n > 0
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first()))) : void this.next(e)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0),
            this._trigger("select", e, i)
        }
    })
});;
define("common:widget/lib/jquery.ui/jquery.ui.autocomplete.js",
function(e) {
    var t = e("common:widget/lib/jquery/jquery.js");
    e("common:widget/lib/jquery.ui/jquery.ui.core.js"),
    e("common:widget/lib/jquery.ui/jquery.ui.widget.js"),
    e("common:widget/lib/jquery.ui/jquery.ui.position.js"),
    e("common:widget/lib/jquery.ui/jquery.ui.menu.js");
    var i = 0;
    t.widget("ui.autocomplete", {
        version: "1.10.3",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        pending: 0,
        _create: function() {
            var e, i, s, n = this.element[0].nodeName.toLowerCase(),
            o = "textarea" === n,
            u = "input" === n;
            this.isMultiLine = o ? !0 : u ? !1 : this.element.prop("isContentEditable"),
            this.valueMethod = this.element[o || u ? "val": "text"],
            this.isNewMenu = !0,
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"),
            this._on(this.element, {
                keydown: function(n) {
                    if (this.element.prop("readOnly")) return e = !0,
                    s = !0,
                    void(i = !0);
                    e = !1,
                    s = !1,
                    i = !1;
                    var o = t.ui.keyCode;
                    switch (n.keyCode) {
                    case o.PAGE_UP:
                        e = !0,
                        this._move("previousPage", n);
                        break;
                    case o.PAGE_DOWN:
                        e = !0,
                        this._move("nextPage", n);
                        break;
                    case o.UP:
                        e = !0,
                        this._keyEvent("previous", n);
                        break;
                    case o.DOWN:
                        e = !0,
                        this._keyEvent("next", n);
                        break;
                    case o.ENTER:
                    case o.NUMPAD_ENTER:
                        this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
                        break;
                    case o.TAB:
                        this.menu.active && this.menu.select(n);
                        break;
                    case o.ESCAPE:
                        this.menu.element.is(":visible") && (this._value(this.term), this.close(n), n.preventDefault());
                        break;
                    default:
                        i = !0,
                        this._searchTimeout(n)
                    }
                },
                keypress: function(s) {
                    if (e) return e = !1,
                    void((!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault());
                    if (!i) {
                        var n = t.ui.keyCode;
                        switch (s.keyCode) {
                        case n.PAGE_UP:
                            this._move("previousPage", s);
                            break;
                        case n.PAGE_DOWN:
                            this._move("nextPage", s);
                            break;
                        case n.UP:
                            this._keyEvent("previous", s);
                            break;
                        case n.DOWN:
                            this._keyEvent("next", s)
                        }
                    }
                },
                input: function(e) {
                    return s ? (s = !1, void e.preventDefault()) : void this._searchTimeout(e)
                },
                focus: function() {
                    this.selectedItem = null,
                    this.previous = this._value()
                },
                blur: function(e) {
                    return this.cancelBlur ? void delete this.cancelBlur: (clearTimeout(this.searching), this.close(e), void this._change(e))
                }
            }),
            this._initSource(),
            this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().data("ui-menu"),
            this._on(this.menu.element, {
                mousedown: function(e) {
                    e.preventDefault(),
                    this.cancelBlur = !0,
                    this._delay(function() {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    t(e.target).closest(".ui-menu-item").length || this._delay(function() {
                        var e = this;
                        this.document.one("mousedown",
                        function(s) {
                            s.target === e.element[0] || s.target === i || t.contains(i, s.target) || e.close()
                        })
                    })
                },
                menufocus: function(e, i) {
                    if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type))) return this.menu.blur(),
                    void this.document.one("mousemove",
                    function() {
                        t(e.target).trigger(e.originalEvent)
                    });
                    var s = i.item.data("ui-autocomplete-item"); ! 1 !== this._trigger("focus", e, {
                        item: s
                    }) ? e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value) : this.liveRegion.text(s.value)
                },
                menuselect: function(e, t) {
                    var i = t.item.data("ui-autocomplete-item"),
                    s = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function() {
                        this.previous = s,
                        this.selectedItem = i
                    })),
                    !1 !== this._trigger("select", e, {
                        item: i
                    }) && this._value(i.value),
                    this.term = this._value(),
                    this.close(e),
                    this.selectedItem = i
                }
            }),
            this.liveRegion = t("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertBefore(this.element),
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching),
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),
            this.menu.element.remove(),
            this.liveRegion.remove()
        },
        _setOption: function(e, t) {
            this._super(e, t),
            "source" === e && this._initSource(),
            "appendTo" === e && this.menu.element.appendTo(this._appendTo()),
            "disabled" === e && t && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
            e || (e = this.element.closest(".ui-front")),
            e.length || (e = this.document[0].body),
            e
        },
        _initSource: function() {
            var e, i, s = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, s) {
                s(t.ui.autocomplete.filter(e, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, n) {
                s.xhr && s.xhr.abort(),
                s.xhr = t.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function(e) {
                        n(e)
                    },
                    error: function() {
                        n([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(e) {
            clearTimeout(this.searching),
            this.searching = this._delay(function() {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, e))
            },
            this.options.delay)
        },
        search: function(e, t) {
            return e = null != e ? e: this._value(),
            this.term = this._value(),
            e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : void 0
        },
        _search: function(e) {
            this.pending++,
            this.element.addClass("ui-autocomplete-loading"),
            this.cancelSearch = !1,
            this.source({
                term: e
            },
            this._response())
        },
        _response: function() {
            var e = this,
            t = ++i;
            return function(s) {
                t === i && e.__response(s),
                e.pending--,
                e.pending || e.element.removeClass("ui-autocomplete-loading")
            }
        },
        __response: function(e) {
            e && (e = this._normalize(e)),
            this._trigger("response", null, {
                content: e
            }),
            !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
        },
        close: function(e) {
            this.cancelSearch = !0,
            this._close(e)
        },
        _close: function(e) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
        },
        _change: function(e) {
            this.previous !== this._value() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function(e) {
            return e.length && e[0].label && e[0].value ? e: t.map(e,
            function(e) {
                return "string" == typeof e ? {
                    label: e,
                    value: e
                }: t.extend({
                    label: e.label || e.value,
                    value: e.value || e.label
                },
                e)
            })
        },
        _suggest: function(e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e),
            this.isNewMenu = !0,
            this.menu.refresh(),
            i.show(),
            this._resizeMenu(),
            i.position(t.extend({
                of: this.element
            },
            this.options.position)),
            this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(e, i) {
            var s = this;
            t.each(i,
            function(t, i) {
                s._renderItemData(e, i)
            })
        },
        _renderItemData: function(e, t) {
            return this._renderItem(e, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function(e, i) {
            return t("<li>").append(t("<a>").text(i.label)).appendTo(e)
        },
        _move: function(e, t) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this._value(this.term), void this.menu.blur()) : void this.menu[e](t) : void this.search(null, t)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(e, t) { (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
        }
    }),
    t.extend(t.ui.autocomplete, {
        escapeRegex: function(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(e, i) {
            var s = new RegExp(t.ui.autocomplete.escapeRegex(i), "i");
            return t.grep(e,
            function(e) {
                return s.test(e.label || e.value || e)
            })
        }
    }),
    t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(e) {
                    return e + (e > 1 ? " results are": " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(e) {
            var t;
            this._superApply(arguments),
            this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.text(t))
        }
    })
});;
define("common:widget/lib/jquery.ui/jquery.ui.datepicker.js",
function(e) {
    function t() {
        this._curInst = null,
        this._keyEvent = !1,
        this._disabledInputs = [],
        this._datepickerShowing = !1,
        this._inDialog = !1,
        this._mainDivId = "ui-datepicker-div",
        this._inlineClass = "ui-datepicker-inline",
        this._appendClass = "ui-datepicker-append",
        this._triggerClass = "ui-datepicker-trigger",
        this._dialogClass = "ui-datepicker-dialog",
        this._disableClass = "ui-datepicker-disabled",
        this._unselectableClass = "ui-datepicker-unselectable",
        this._currentClass = "ui-datepicker-current-day",
        this._dayOverClass = "ui-datepicker-days-cell-over",
        this.regional = [],
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
            monthNamesShort: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
            dayNames: ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"],
            dayNamesShort: ["\u5468\u65e5", "\u5468\u4e00", "\u5468\u4e8c", "\u5468\u4e09", "\u5468\u56db", "\u5468\u4e94", "\u5468\u516d"],
            dayNamesMin: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        },
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        },
        s.extend(this._defaults, this.regional[""]),
        this.dpDiv = a(s("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }
    function a(e) {
        var t = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.delegate(t, "mouseout",
        function() {
            s(this).removeClass("ui-state-hover"),
            -1 !== this.className.indexOf("ui-datepicker-prev") && s(this).removeClass("ui-datepicker-prev-hover"),
            -1 !== this.className.indexOf("ui-datepicker-next") && s(this).removeClass("ui-datepicker-next-hover")
        }).delegate(t, "mouseover",
        function() {
            s.datepicker._isDisabledDatepicker(r.inline ? e.parent()[0] : r.input[0]) || (s(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), s(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && s(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && s(this).addClass("ui-datepicker-next-hover"))
        })
    }
    function i(e, t) {
        s.extend(e, t);
        for (var a in t) null == t[a] && (e[a] = t[a]);
        return e
    }
    var s = e("common:widget/lib/jquery/jquery.js");
    e("common:widget/lib/jquery.ui/jquery.ui.core.js"),
    s.extend(s.ui, {
        datepicker: {
            version: "1.10.3"
        }
    });
    var r, n = "datepicker";
    s.extend(t.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(e) {
            return i(this._defaults, e || {}),
            this
        },
        _attachDatepicker: function(e, t) {
            var a, i, r;
            a = e.nodeName.toLowerCase(),
            i = "div" === a || "span" === a,
            e.id || (this.uuid += 1, e.id = "dp" + this.uuid),
            r = this._newInst(s(e), i),
            r.settings = s.extend({},
            t || {}),
            "input" === a ? this._connectDatepicker(e, r) : i && this._inlineDatepicker(e, r)
        },
        _newInst: function(e, t) {
            var i = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: i,
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: t,
                dpDiv: t ? a(s("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(e, t) {
            var a = s(e);
            t.append = s([]),
            t.trigger = s([]),
            a.hasClass(this.markerClassName) || (this._attachments(a, t), a.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(t), s.data(e, n, t), t.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function(e, t) {
            var a, i, r, n = this._get(t, "appendText"),
            d = this._get(t, "isRTL");
            t.append && t.append.remove(),
            n && (t.append = s("<span class='" + this._appendClass + "'>" + n + "</span>"), e[d ? "before": "after"](t.append)),
            e.unbind("focus", this._showDatepicker),
            t.trigger && t.trigger.remove(),
            a = this._get(t, "showOn"),
            ("focus" === a || "both" === a) && e.focus(this._showDatepicker),
            ("button" === a || "both" === a) && (i = this._get(t, "buttonText"), r = this._get(t, "buttonImage"), t.trigger = s(this._get(t, "buttonImageOnly") ? s("<img/>").addClass(this._triggerClass).attr({
                src: r,
                alt: i,
                title: i
            }) : s("<button type='button'></button>").addClass(this._triggerClass).html(r ? s("<img/>").attr({
                src: r,
                alt: i,
                title: i
            }) : i)), e[d ? "before": "after"](t.trigger), t.trigger.click(function() {
                return s.datepicker._datepickerShowing && s.datepicker._lastInput === e[0] ? s.datepicker._hideDatepicker() : s.datepicker._datepickerShowing && s.datepicker._lastInput !== e[0] ? (s.datepicker._hideDatepicker(), s.datepicker._showDatepicker(e[0])) : s.datepicker._showDatepicker(e[0]),
                !1
            }))
        },
        _autoSize: function(e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, a, i, s, r = new Date(2009, 11, 20),
                n = this._get(e, "dateFormat");
                n.match(/[DM]/) && (t = function(e) {
                    for (a = 0, i = 0, s = 0; s < e.length; s++) e[s].length > a && (a = e[s].length, i = s);
                    return i
                },
                r.setMonth(t(this._get(e, n.match(/MM/) ? "monthNames": "monthNamesShort"))), r.setDate(t(this._get(e, n.match(/DD/) ? "dayNames": "dayNamesShort")) + 20 - r.getDay())),
                e.input.attr("size", this._formatDate(e, r).length)
            }
        },
        _inlineDatepicker: function(e, t) {
            var a = s(e);
            a.hasClass(this.markerClassName) || (a.addClass(this.markerClassName).append(t.dpDiv), s.data(e, n, t), this._setDate(t, this._getDefaultDate(t), !0), this._updateDatepicker(t), this._updateAlternate(t), t.settings.disabled && this._disableDatepicker(e), t.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(e, t, a, r, d) {
            var c, o, l, h, u, p = this._dialogInst;
            return p || (this.uuid += 1, c = "dp" + this.uuid, this._dialogInput = s("<input type='text' id='" + c + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), s("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {},
            s.data(this._dialogInput[0], n, p)),
            i(p.settings, r || {}),
            t = t && t.constructor === Date ? this._formatDate(p, t) : t,
            this._dialogInput.val(t),
            this._pos = d ? d.length ? d: [d.pageX, d.pageY] : null,
            this._pos || (o = document.documentElement.clientWidth, l = document.documentElement.clientHeight, h = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [o / 2 - 100 + h, l / 2 - 150 + u]),
            this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
            p.settings.onSelect = a,
            this._inDialog = !0,
            this.dpDiv.addClass(this._dialogClass),
            this._showDatepicker(this._dialogInput[0]),
            s.blockUI && s.blockUI(this.dpDiv),
            s.data(this._dialogInput[0], n, p),
            this
        },
        _destroyDatepicker: function(e) {
            var t, a = s(e),
            i = s.data(e, n);
            a.hasClass(this.markerClassName) && (t = e.nodeName.toLowerCase(), s.removeData(e, n), "input" === t ? (i.append.remove(), i.trigger.remove(), a.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === t || "span" === t) && a.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function(e) {
            var t, a, i = s(e),
            r = s.data(e, n);
            i.hasClass(this.markerClassName) && (t = e.nodeName.toLowerCase(), "input" === t ? (e.disabled = !1, r.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === t || "span" === t) && (a = i.children("." + this._inlineClass), a.children().removeClass("ui-state-disabled"), a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = s.map(this._disabledInputs,
            function(t) {
                return t === e ? null: t
            }))
        },
        _disableDatepicker: function(e) {
            var t, a, i = s(e),
            r = s.data(e, n);
            i.hasClass(this.markerClassName) && (t = e.nodeName.toLowerCase(), "input" === t ? (e.disabled = !0, r.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === t || "span" === t) && (a = i.children("." + this._inlineClass), a.children().addClass("ui-state-disabled"), a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = s.map(this._disabledInputs,
            function(t) {
                return t === e ? null: t
            }), this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function(e) {
            if (!e) return ! 1;
            for (var t = 0; t < this._disabledInputs.length; t++) if (this._disabledInputs[t] === e) return ! 0;
            return ! 1
        },
        _getInst: function(e) {
            try {
                return s.data(e, n)
            } catch(t) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(e, t, a) {
            var r, n, d, c, o = this._getInst(e);
            return 2 === arguments.length && "string" == typeof t ? "defaults" === t ? s.extend({},
            s.datepicker._defaults) : o ? "all" === t ? s.extend({},
            o.settings) : this._get(o, t) : null: (r = t || {},
            "string" == typeof t && (r = {},
            r[t] = a), void(o && (this._curInst === o && this._hideDatepicker(), n = this._getDateDatepicker(e, !0), d = this._getMinMaxDate(o, "min"), c = this._getMinMaxDate(o, "max"), i(o.settings, r), null !== d && void 0 !== r.dateFormat && void 0 === r.minDate && (o.settings.minDate = this._formatDate(o, d)), null !== c && void 0 !== r.dateFormat && void 0 === r.maxDate && (o.settings.maxDate = this._formatDate(o, c)), "disabled" in r && (r.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(s(e), o), this._autoSize(o), this._setDate(o, n), this._updateAlternate(o), this._updateDatepicker(o))))
        },
        _changeDatepicker: function(e, t, a) {
            this._optionDatepicker(e, t, a)
        },
        _refreshDatepicker: function(e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(e, t) {
            var a = this._getInst(e);
            a && (this._setDate(a, t), this._updateDatepicker(a), this._updateAlternate(a))
        },
        _getDateDatepicker: function(e, t) {
            var a = this._getInst(e);
            return a && !a.inline && this._setDateFromField(a, t),
            a ? this._getDate(a) : null
        },
        _doKeyDown: function(e) {
            var t, a, i, r = s.datepicker._getInst(e.target),
            n = !0,
            d = r.dpDiv.is(".ui-datepicker-rtl");
            if (r._keyEvent = !0, s.datepicker._datepickerShowing) switch (e.keyCode) {
            case 9:
                s.datepicker._hideDatepicker(),
                n = !1;
                break;
            case 13:
                return i = s("td." + s.datepicker._dayOverClass + ":not(." + s.datepicker._currentClass + ")", r.dpDiv),
                i[0] && s.datepicker._selectDay(e.target, r.selectedMonth, r.selectedYear, i[0]),
                t = s.datepicker._get(r, "onSelect"),
                t ? (a = s.datepicker._formatDate(r), t.apply(r.input ? r.input[0] : null, [a, r])) : s.datepicker._hideDatepicker(),
                !1;
            case 27:
                s.datepicker._hideDatepicker();
                break;
            case 33:
                s.datepicker._adjustDate(e.target, e.ctrlKey ? -s.datepicker._get(r, "stepBigMonths") : -s.datepicker._get(r, "stepMonths"), "M");
                break;
            case 34:
                s.datepicker._adjustDate(e.target, e.ctrlKey ? +s.datepicker._get(r, "stepBigMonths") : +s.datepicker._get(r, "stepMonths"), "M");
                break;
            case 35:
                (e.ctrlKey || e.metaKey) && s.datepicker._clearDate(e.target),
                n = e.ctrlKey || e.metaKey;
                break;
            case 36:
                (e.ctrlKey || e.metaKey) && s.datepicker._gotoToday(e.target),
                n = e.ctrlKey || e.metaKey;
                break;
            case 37:
                (e.ctrlKey || e.metaKey) && s.datepicker._adjustDate(e.target, d ? 1 : -1, "D"),
                n = e.ctrlKey || e.metaKey,
                e.originalEvent.altKey && s.datepicker._adjustDate(e.target, e.ctrlKey ? -s.datepicker._get(r, "stepBigMonths") : -s.datepicker._get(r, "stepMonths"), "M");
                break;
            case 38:
                (e.ctrlKey || e.metaKey) && s.datepicker._adjustDate(e.target, -7, "D"),
                n = e.ctrlKey || e.metaKey;
                break;
            case 39:
                (e.ctrlKey || e.metaKey) && s.datepicker._adjustDate(e.target, d ? -1 : 1, "D"),
                n = e.ctrlKey || e.metaKey,
                e.originalEvent.altKey && s.datepicker._adjustDate(e.target, e.ctrlKey ? +s.datepicker._get(r, "stepBigMonths") : +s.datepicker._get(r, "stepMonths"), "M");
                break;
            case 40:
                (e.ctrlKey || e.metaKey) && s.datepicker._adjustDate(e.target, 7, "D"),
                n = e.ctrlKey || e.metaKey;
                break;
            default:
                n = !1
            } else 36 === e.keyCode && e.ctrlKey ? s.datepicker._showDatepicker(this) : n = !1;
            n && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function(e) {
            var t, a, i = s.datepicker._getInst(e.target);
            return s.datepicker._get(i, "constrainInput") ? (t = s.datepicker._possibleChars(s.datepicker._get(i, "dateFormat")), a = String.fromCharCode(null == e.charCode ? e.keyCode: e.charCode), e.ctrlKey || e.metaKey || " " > a || !t || t.indexOf(a) > -1) : void 0
        },
        _doKeyUp: function(e) {
            var t, a = s.datepicker._getInst(e.target);
            if (a.input.val() !== a.lastVal) try {
                t = s.datepicker.parseDate(s.datepicker._get(a, "dateFormat"), a.input ? a.input.val() : null, s.datepicker._getFormatConfig(a)),
                t && (s.datepicker._setDateFromField(a), s.datepicker._updateAlternate(a), s.datepicker._updateDatepicker(a))
            } catch(i) {}
            return ! 0
        },
        _showDatepicker: function(e) {
            if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = s("input", e.parentNode)[0]), !s.datepicker._isDisabledDatepicker(e) && s.datepicker._lastInput !== e) {
                var t, a, r, n, d, c, o;
                t = s.datepicker._getInst(e),
                s.datepicker._curInst && s.datepicker._curInst !== t && (s.datepicker._curInst.dpDiv.stop(!0, !0), t && s.datepicker._datepickerShowing && s.datepicker._hideDatepicker(s.datepicker._curInst.input[0])),
                a = s.datepicker._get(t, "beforeShow"),
                r = a ? a.apply(e, [e, t]) : {},
                r !== !1 && (i(t.settings, r), t.lastVal = null, s.datepicker._lastInput = e, s.datepicker._setDateFromField(t), s.datepicker._inDialog && (e.value = ""), s.datepicker._pos || (s.datepicker._pos = s.datepicker._findPos(e), s.datepicker._pos[1] += e.offsetHeight), n = !1, s(e).parents().each(function() {
                    return n |= "fixed" === s(this).css("position"),
                    !n
                }), d = {
                    left: s.datepicker._pos[0],
                    top: s.datepicker._pos[1]
                },
                s.datepicker._pos = null, t.dpDiv.empty(), t.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), s.datepicker._updateDatepicker(t), d = s.datepicker._checkOffset(t, d, n), t.dpDiv.css({
                    position: s.datepicker._inDialog && s.blockUI ? "static": n ? "fixed": "absolute",
                    display: "none",
                    left: d.left + "px",
                    top: d.top + "px"
                }), t.inline || (c = s.datepicker._get(t, "showAnim"), o = s.datepicker._get(t, "duration"), t.dpDiv.zIndex(s(e).zIndex() + 1), s.datepicker._datepickerShowing = !0, s.effects && s.effects.effect[c] ? t.dpDiv.show(c, s.datepicker._get(t, "showOptions"), o) : t.dpDiv[c || "show"](c ? o: null), s.datepicker._shouldFocusInput(t) && t.input.focus(), s.datepicker._curInst = t))
            }
        },
        _updateDatepicker: function(e) {
            this.maxRows = 4,
            r = e,
            e.dpDiv.empty().append(this._generateHTML(e)),
            this._attachHandlers(e),
            e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var t, a = this._getNumberOfMonths(e),
            i = a[1],
            n = 17;
            e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),
            i > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + i).css("width", n * i + "em"),
            e.dpDiv[(1 !== a[0] || 1 !== a[1] ? "add": "remove") + "Class"]("ui-datepicker-multi"),
            e.dpDiv[(this._get(e, "isRTL") ? "add": "remove") + "Class"]("ui-datepicker-rtl"),
            e === s.datepicker._curInst && s.datepicker._datepickerShowing && s.datepicker._shouldFocusInput(e) && e.input.focus(),
            e.yearshtml && (t = e.yearshtml, setTimeout(function() {
                t === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),
                t = e.yearshtml = null
            },
            0)),
            s(e).trigger("update", {
                datepicker: e
            })
        },
        _shouldFocusInput: function(e) {
            return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
        },
        _checkOffset: function(e, t, a) {
            var i = e.dpDiv.outerWidth(),
            r = e.dpDiv.outerHeight(),
            n = e.input ? e.input.outerWidth() : 0,
            d = e.input ? e.input.outerHeight() : 0,
            c = document.documentElement.clientWidth + (a ? 0 : s(document).scrollLeft()),
            o = document.documentElement.clientHeight + (a ? 0 : s(document).scrollTop());
            return t.left -= this._get(e, "isRTL") ? i - n: 0,
            t.left -= a && t.left === e.input.offset().left ? s(document).scrollLeft() : 0,
            t.top -= a && t.top === e.input.offset().top + d ? s(document).scrollTop() : 0,
            t.left -= Math.min(t.left, t.left + i > c && c > i ? Math.abs(t.left + i - c) : 0),
            t.top -= Math.min(t.top, t.top + r > o && o > r ? Math.abs(r + d) : 0),
            t
        },
        _findPos: function(e) {
            for (var t, a = this._getInst(e), i = this._get(a, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || s.expr.filters.hidden(e));) e = e[i ? "previousSibling": "nextSibling"];
            return t = s(e).offset(),
            [t.left, t.top]
        },
        _hideDatepicker: function(e) {
            var t, a, i, r, d = this._curInst; ! d || e && d !== s.data(e, n) || this._datepickerShowing && (t = this._get(d, "showAnim"), a = this._get(d, "duration"), i = function() {
                s.datepicker._tidyDialog(d)
            },
            s.effects && (s.effects.effect[t] || s.effects[t]) ? d.dpDiv.hide(t, s.datepicker._get(d, "showOptions"), a, i) : d.dpDiv["slideDown" === t ? "slideUp": "fadeIn" === t ? "fadeOut": "hide"](t ? a: null, i), t || i(), this._datepickerShowing = !1, r = this._get(d, "onClose"), r && r.apply(d.input ? d.input[0] : null, [d.input ? d.input.val() : "", d]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), s.blockUI && (s.unblockUI(), s("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(e) {
            e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(e) {
            if (s.datepicker._curInst) {
                var t = s(e.target),
                a = s.datepicker._getInst(t[0]); (t[0].id !== s.datepicker._mainDivId && 0 === t.parents("#" + s.datepicker._mainDivId).length && !t.hasClass(s.datepicker.markerClassName) && !t.closest("." + s.datepicker._triggerClass).length && s.datepicker._datepickerShowing && (!s.datepicker._inDialog || !s.blockUI) || t.hasClass(s.datepicker.markerClassName) && s.datepicker._curInst !== a) && s.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(e, t, a) {
            var i = s(e),
            r = this._getInst(i[0]);
            this._isDisabledDatepicker(i[0]) || (this._adjustInstDate(r, t + ("M" === a ? this._get(r, "showCurrentAtPos") : 0), a), this._updateDatepicker(r))
        },
        _gotoToday: function(e) {
            var t, a = s(e),
            i = this._getInst(a[0]);
            this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (t = new Date, i.selectedDay = t.getDate(), i.drawMonth = i.selectedMonth = t.getMonth(), i.drawYear = i.selectedYear = t.getFullYear()),
            this._notifyChange(i),
            this._adjustDate(a)
        },
        _selectMonthYear: function(e, t, a) {
            var i = s(e),
            r = this._getInst(i[0]);
            r["selected" + ("M" === a ? "Month": "Year")] = r["draw" + ("M" === a ? "Month": "Year")] = parseInt(t.options[t.selectedIndex].value, 10),
            this._notifyChange(r),
            this._adjustDate(i)
        },
        _selectDay: function(e, t, a, i) {
            var r, n = s(e);
            s(i).hasClass(this._unselectableClass) || this._isDisabledDatepicker(n[0]) || (r = this._getInst(n[0]), r.selectedDay = r.currentDay = s("a", i).html(), r.selectedMonth = r.currentMonth = t, r.selectedYear = r.currentYear = a, this._selectDate(e, this._formatDate(r, r.currentDay, r.currentMonth, r.currentYear)))
        },
        _clearDate: function(e) {
            var t = s(e);
            this._selectDate(t, "")
        },
        _selectDate: function(e, t) {
            var a, i = s(e),
            r = this._getInst(i[0]);
            t = null != t ? t: this._formatDate(r),
            r.input && r.input.val(t),
            this._updateAlternate(r),
            a = this._get(r, "onSelect"),
            a ? a.apply(r.input ? r.input[0] : null, [t, r]) : r.input && r.input.trigger("change"),
            r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(), this._lastInput = r.input[0], "object" != typeof r.input[0] && r.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(e) {
            var t, a, i, r = this._get(e, "altField");
            r && (t = this._get(e, "altFormat") || this._get(e, "dateFormat"), a = this._getDate(e), i = this.formatDate(t, a, this._getFormatConfig(e)), s(r).each(function() {
                s(this).val(i)
            }))
        },
        noWeekends: function(e) {
            var t = e.getDay();
            return [t > 0 && 6 > t, ""]
        },
        iso8601Week: function(e) {
            var t, a = new Date(e.getTime());
            return a.setDate(a.getDate() + 4 - (a.getDay() || 7)),
            t = a.getTime(),
            a.setMonth(0),
            a.setDate(1),
            Math.floor(Math.round((t - a) / 864e5) / 7) + 1
        },
        parseDate: function(e, t, a) {
            if (null == e || null == t) throw "Invalid arguments";
            if (t = "object" == typeof t ? t.toString() : t + "", "" === t) return null;
            var i, r, n, d, c = 0,
            o = (a ? a.shortYearCutoff: null) || this._defaults.shortYearCutoff,
            l = "string" != typeof o ? o: (new Date).getFullYear() % 100 + parseInt(o, 10),
            h = (a ? a.dayNamesShort: null) || this._defaults.dayNamesShort,
            u = (a ? a.dayNames: null) || this._defaults.dayNames,
            p = (a ? a.monthNamesShort: null) || this._defaults.monthNamesShort,
            g = (a ? a.monthNames: null) || this._defaults.monthNames,
            _ = -1,
            k = -1,
            f = -1,
            m = -1,
            D = !1,
            y = function(t) {
                var a = i + 1 < e.length && e.charAt(i + 1) === t;
                return a && i++,
                a
            },
            v = function(e) {
                var a = y(e),
                i = "@" === e ? 14 : "!" === e ? 20 : "y" === e && a ? 4 : "o" === e ? 3 : 2,
                s = new RegExp("^\\d{1," + i + "}"),
                r = t.substring(c).match(s);
                if (!r) throw "Missing number at position " + c;
                return c += r[0].length,
                parseInt(r[0], 10)
            },
            M = function(e, a, i) {
                var r = -1,
                n = s.map(y(e) ? i: a,
                function(e, t) {
                    return [[t, e]]
                }).sort(function(e, t) {
                    return - (e[1].length - t[1].length)
                });
                if (s.each(n,
                function(e, a) {
                    var i = a[1];
                    return t.substr(c, i.length).toLowerCase() === i.toLowerCase() ? (r = a[0], c += i.length, !1) : void 0
                }), -1 !== r) return r + 1;
                throw "Unknown name at position " + c
            },
            w = function() {
                if (t.charAt(c) !== e.charAt(i)) throw "Unexpected literal at position " + c;
                c++
            };
            for (i = 0; i < e.length; i++) if (D)"'" !== e.charAt(i) || y("'") ? w() : D = !1;
            else switch (e.charAt(i)) {
            case "d":
                f = v("d");
                break;
            case "D":
                M("D", h, u);
                break;
            case "o":
                m = v("o");
                break;
            case "m":
                k = v("m");
                break;
            case "M":
                k = M("M", p, g);
                break;
            case "y":
                _ = v("y");
                break;
            case "@":
                d = new Date(v("@")),
                _ = d.getFullYear(),
                k = d.getMonth() + 1,
                f = d.getDate();
                break;
            case "!":
                d = new Date((v("!") - this._ticksTo1970) / 1e4),
                _ = d.getFullYear(),
                k = d.getMonth() + 1,
                f = d.getDate();
                break;
            case "'":
                y("'") ? w() : D = !0;
                break;
            default:
                w()
            }
            if (c < t.length && (n = t.substr(c), !/^\s+/.test(n))) throw "Extra/unparsed characters found in date: " + n;
            if ( - 1 === _ ? _ = (new Date).getFullYear() : 100 > _ && (_ += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (l >= _ ? 0 : -100)), m > -1) for (k = 1, f = m;;) {
                if (r = this._getDaysInMonth(_, k - 1), r >= f) break;
                k++,
                f -= r
            }
            if (d = this._daylightSavingAdjust(new Date(_, k - 1, f)), d.getFullYear() !== _ || d.getMonth() + 1 !== k || d.getDate() !== f) throw "Invalid date";
            return d
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
        formatDate: function(e, t, a) {
            if (!t) return "";
            var i, s = (a ? a.dayNamesShort: null) || this._defaults.dayNamesShort,
            r = (a ? a.dayNames: null) || this._defaults.dayNames,
            n = (a ? a.monthNamesShort: null) || this._defaults.monthNamesShort,
            d = (a ? a.monthNames: null) || this._defaults.monthNames,
            c = function(t) {
                var a = i + 1 < e.length && e.charAt(i + 1) === t;
                return a && i++,
                a
            },
            o = function(e, t, a) {
                var i = "" + t;
                if (c(e)) for (; i.length < a;) i = "0" + i;
                return i
            },
            l = function(e, t, a, i) {
                return c(e) ? i[t] : a[t]
            },
            h = "",
            u = !1;
            if (t) for (i = 0; i < e.length; i++) if (u)"'" !== e.charAt(i) || c("'") ? h += e.charAt(i) : u = !1;
            else switch (e.charAt(i)) {
            case "d":
                h += o("d", t.getDate(), 2);
                break;
            case "D":
                h += l("D", t.getDay(), s, r);
                break;
            case "o":
                h += o("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                break;
            case "m":
                h += o("m", t.getMonth() + 1, 2);
                break;
            case "M":
                h += l("M", t.getMonth(), n, d);
                break;
            case "y":
                h += c("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0": "") + t.getYear() % 100;
                break;
            case "@":
                h += t.getTime();
                break;
            case "!":
                h += 1e4 * t.getTime() + this._ticksTo1970;
                break;
            case "'":
                c("'") ? h += "'": u = !0;
                break;
            default:
                h += e.charAt(i)
            }
            return h
        },
        _possibleChars: function(e) {
            var t, a = "",
            i = !1,
            s = function(a) {
                var i = t + 1 < e.length && e.charAt(t + 1) === a;
                return i && t++,
                i
            };
            for (t = 0; t < e.length; t++) if (i)"'" !== e.charAt(t) || s("'") ? a += e.charAt(t) : i = !1;
            else switch (e.charAt(t)) {
            case "d":
            case "m":
            case "y":
            case "@":
                a += "0123456789";
                break;
            case "D":
            case "M":
                return null;
            case "'":
                s("'") ? a += "'": i = !0;
                break;
            default:
                a += e.charAt(t)
            }
            return a
        },
        _get: function(e, t) {
            return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t]
        },
        _setDateFromField: function(e, t) {
            if (e.input.val() !== e.lastVal) {
                var a = this._get(e, "dateFormat"),
                i = e.lastVal = e.input ? e.input.val() : null,
                s = this._getDefaultDate(e),
                r = s,
                n = this._getFormatConfig(e);
                try {
                    r = this.parseDate(a, i, n) || s
                } catch(d) {
                    i = t ? "": i
                }
                e.selectedDay = r.getDate(),
                e.drawMonth = e.selectedMonth = r.getMonth(),
                e.drawYear = e.selectedYear = r.getFullYear(),
                e.currentDay = i ? r.getDate() : 0,
                e.currentMonth = i ? r.getMonth() : 0,
                e.currentYear = i ? r.getFullYear() : 0,
                this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function(e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function(e, t, a) {
            var i = function(e) {
                var t = new Date;
                return t.setDate(t.getDate() + e),
                t
            },
            r = function(t) {
                try {
                    return s.datepicker.parseDate(s.datepicker._get(e, "dateFormat"), t, s.datepicker._getFormatConfig(e))
                } catch(a) {}
                for (var i = (t.toLowerCase().match(/^c/) ? s.datepicker._getDate(e) : null) || new Date, r = i.getFullYear(), n = i.getMonth(), d = i.getDate(), c = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, o = c.exec(t); o;) {
                    switch (o[2] || "d") {
                    case "d":
                    case "D":
                        d += parseInt(o[1], 10);
                        break;
                    case "w":
                    case "W":
                        d += 7 * parseInt(o[1], 10);
                        break;
                    case "m":
                    case "M":
                        n += parseInt(o[1], 10),
                        d = Math.min(d, s.datepicker._getDaysInMonth(r, n));
                        break;
                    case "y":
                    case "Y":
                        r += parseInt(o[1], 10),
                        d = Math.min(d, s.datepicker._getDaysInMonth(r, n))
                    }
                    o = c.exec(t)
                }
                return new Date(r, n, d)
            },
            n = null == t || "" === t ? a: "string" == typeof t ? r(t) : "number" == typeof t ? isNaN(t) ? a: i(t) : new Date(t.getTime());
            return n = n && "Invalid Date" === n.toString() ? a: n,
            n && (n.setHours(0), n.setMinutes(0), n.setSeconds(0), n.setMilliseconds(0)),
            this._daylightSavingAdjust(n)
        },
        _daylightSavingAdjust: function(e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function(e, t, a) {
            var i = !t,
            s = e.selectedMonth,
            r = e.selectedYear,
            n = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = n.getDate(),
            e.drawMonth = e.selectedMonth = e.currentMonth = n.getMonth(),
            e.drawYear = e.selectedYear = e.currentYear = n.getFullYear(),
            s === e.selectedMonth && r === e.selectedYear || a || this._notifyChange(e),
            this._adjustInstDate(e),
            e.input && e.input.val(i ? "": this._formatDate(e))
        },
        _getDate: function(e) {
            var t = !e.currentYear || e.input && "" === e.input.val() ? null: this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return t
        },
        _attachHandlers: function(e) {
            var t = this._get(e, "stepMonths"),
            a = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function() {
                var e = {
                    prev: function() {
                        s.datepicker._adjustDate(a, -t, "M")
                    },
                    next: function() {
                        s.datepicker._adjustDate(a, +t, "M")
                    },
                    hide: function() {
                        s.datepicker._hideDatepicker()
                    },
                    today: function() {
                        s.datepicker._gotoToday(a)
                    },
                    selectDay: function() {
                        return s.datepicker._selectDay(a, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this),
                        !1
                    },
                    selectMonth: function() {
                        return s.datepicker._selectMonthYear(a, this, "M"),
                        !1
                    },
                    selectYear: function() {
                        return s.datepicker._selectMonthYear(a, this, "Y"),
                        !1
                    }
                };
                s(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(e) {
            var t, a, i, s, r, n, d, c, o, l, h, u, p, g, _, k, f, m, D, y, v, M, w, b, C, I, x, Y, N, F, S, T, A, j, K, O, R, L, E, H = new Date,
            W = this._daylightSavingAdjust(new Date(H.getFullYear(), H.getMonth(), H.getDate())),
            P = this._get(e, "isRTL"),
            z = this._get(e, "showButtonPanel"),
            U = this._get(e, "hideIfNoPrevNext"),
            B = this._get(e, "navigationAsDateFormat"),
            q = this._getNumberOfMonths(e),
            V = this._get(e, "showCurrentAtPos"),
            X = this._get(e, "stepMonths"),
            Z = 1 !== q[0] || 1 !== q[1],
            $ = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
            G = this._getMinMaxDate(e, "min"),
            J = this._getMinMaxDate(e, "max"),
            Q = e.drawMonth - V,
            et = e.drawYear;
            if (0 > Q && (Q += 12, et--), J) for (t = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - q[0] * q[1] + 1, J.getDate())), t = G && G > t ? G: t; this._daylightSavingAdjust(new Date(et, Q, 1)) > t;) Q--,
            0 > Q && (Q = 11, et--);
            for (e.drawMonth = Q, e.drawYear = et, a = this._get(e, "prevText"), a = B ? this.formatDate(a, this._daylightSavingAdjust(new Date(et, Q - X, 1)), this._getFormatConfig(e)) : a, i = this._canAdjustMonth(e, -1, et, Q) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + a + "'><span class='ui-icon ui-icon-circle-triangle-" + (P ? "e": "w") + "'>" + a + "</span></a>": U ? "": "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + a + "'><span class='ui-icon ui-icon-circle-triangle-" + (P ? "e": "w") + "'>" + a + "</span></a>", s = this._get(e, "nextText"), s = B ? this.formatDate(s, this._daylightSavingAdjust(new Date(et, Q + X, 1)), this._getFormatConfig(e)) : s, r = this._canAdjustMonth(e, 1, et, Q) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (P ? "w": "e") + "'>" + s + "</span></a>": U ? "": "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (P ? "w": "e") + "'>" + s + "</span></a>", n = this._get(e, "currentText"), d = this._get(e, "gotoCurrent") && e.currentDay ? $: W, n = B ? this.formatDate(n, d, this._getFormatConfig(e)) : n, c = e.inline ? "": "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", o = z ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (P ? c: "") + (this._isInRange(e, d) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + n + "</button>": "") + (P ? "": c) + "</div>": "", l = parseInt(this._get(e, "firstDay"), 10), l = isNaN(l) ? 0 : l, h = this._get(e, "showWeek"), u = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), g = this._get(e, "monthNames"), _ = this._get(e, "monthNamesShort"), k = this._get(e, "beforeShowDay"), f = this._get(e, "showOtherMonths"), m = this._get(e, "selectOtherMonths"), D = this._getDefaultDate(e), y = "", M = 0; M < q[0]; M++) {
                for (w = "", this.maxRows = 4, b = 0; b < q[1]; b++) {
                    if (C = this._daylightSavingAdjust(new Date(et, Q, e.selectedDay)), I = " ui-corner-all", x = "", Z) {
                        if (x += "<div class='ui-datepicker-group", q[1] > 1) switch (b) {
                        case 0:
                            x += " ui-datepicker-group-first",
                            I = " ui-corner-" + (P ? "right": "left");
                            break;
                        case q[1] - 1 : x += " ui-datepicker-group-last",
                            I = " ui-corner-" + (P ? "left": "right");
                            break;
                        default:
                            x += " ui-datepicker-group-middle",
                            I = ""
                        }
                        x += "'>"
                    }
                    for (x += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + I + "'>" + (/all|left/.test(I) && 0 === M ? P ? r: i: "") + (/all|right/.test(I) && 0 === M ? P ? i: r: "") + this._generateMonthYearHeader(e, Q, et, G, J, M > 0 || b > 0, g, _) + "</div><table class='ui-datepicker-calendar'><thead><tr>", Y = h ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>": "", v = 0; 7 > v; v++) N = (v + l) % 7,
                    Y += "<th" + ((v + l + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'": "") + "><span title='" + u[N] + "'>" + p[N] + "</span></th>";
                    for (x += Y + "</tr></thead><tbody>", F = this._getDaysInMonth(et, Q), et === e.selectedYear && Q === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, F)), S = (this._getFirstDayOfMonth(et, Q) - l + 7) % 7, T = Math.ceil((S + F) / 7), A = Z && this.maxRows > T ? this.maxRows: T, this.maxRows = A, j = this._daylightSavingAdjust(new Date(et, Q, 1 - S)), K = 0; A > K; K++) {
                        for (x += "<tr>", O = h ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(j) + "</td>": "", v = 0; 7 > v; v++) R = k ? k.apply(e.input ? e.input[0] : null, [j]) : [!0, ""],
                        L = j.getMonth() !== Q,
                        E = L && !m || !R[0] || G && G > j || J && j > J,
                        O += "<td class='" + ((v + l + 6) % 7 >= 5 ? " ui-datepicker-week-end": "") + (L ? " ui-datepicker-other-month": "") + (j.getTime() === C.getTime() && Q === e.selectedMonth && e._keyEvent || D.getTime() === j.getTime() && D.getTime() === C.getTime() ? " " + this._dayOverClass: "") + (E ? " " + this._unselectableClass + " ui-state-disabled": "") + (L && !f ? "": " " + R[1] + (j.getTime() === $.getTime() ? " " + this._currentClass: "") + (j.getTime() === W.getTime() ? " ui-datepicker-today": "")) + "'" + (L && !f || !R[2] ? "": " title='" + R[2].replace(/'/g, "&#39;") + "'") + (E ? "": " data-handler='selectDay' data-event='click' data-month='" + j.getMonth() + "' data-year='" + j.getFullYear() + "'") + ">" + (L && !f ? "&#xa0;": E ? "<span class='ui-state-default'>" + j.getDate() + "</span>": "<a class='ui-state-default" + (j.getTime() === W.getTime() ? " ui-state-highlight": "") + (j.getTime() === $.getTime() ? " ui-state-active": "") + (L ? " ui-priority-secondary": "") + "' href='#'>" + j.getDate() + "</a>") + "</td>",
                        j.setDate(j.getDate() + 1),
                        j = this._daylightSavingAdjust(j);
                        x += O + "</tr>"
                    }
                    Q++,
                    Q > 11 && (Q = 0, et++),
                    x += "</tbody></table>" + (Z ? "</div>" + (q[0] > 0 && b === q[1] - 1 ? "<div class='ui-datepicker-row-break'></div>": "") : ""),
                    w += x
                }
                y += w
            }
            return y += o,
            e._keyEvent = !1,
            y
        },
        _generateMonthYearHeader: function(e, t, a, i, s, r, n, d) {
            var c, o, l, h, u, p, g, _, k = this._get(e, "changeMonth"),
            f = this._get(e, "changeYear"),
            m = this._get(e, "showMonthAfterYear"),
            D = "<div class='ui-datepicker-title'>",
            y = "";
            if (r || !k) y += "<span class='ui-datepicker-month'>" + n[t] + "</span>";
            else {
                for (c = i && i.getFullYear() === a, o = s && s.getFullYear() === a, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", l = 0; 12 > l; l++)(!c || l >= i.getMonth()) && (!o || l <= s.getMonth()) && (y += "<option value='" + l + "'" + (l === t ? " selected='selected'": "") + ">" + d[l] + "</option>");
                y += "</select>"
            }
            if (m || (D += y + (!r && k && f ? "": "&#xa0;")), !e.yearshtml) if (e.yearshtml = "", r || !f) D += "<span class='ui-datepicker-year'>" + a + "</span>";
            else {
                for (h = this._get(e, "yearRange").split(":"), u = (new Date).getFullYear(), p = function(e) {
                    var t = e.match(/c[+\-].*/) ? a + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? u + parseInt(e, 10) : parseInt(e, 10);
                    return isNaN(t) ? u: t
                },
                g = p(h[0]), _ = Math.max(g, p(h[1] || "")), g = i ? Math.max(g, i.getFullYear()) : g, _ = s ? Math.min(_, s.getFullYear()) : _, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; _ >= g; g++) e.yearshtml += "<option value='" + g + "'" + (g === a ? " selected='selected'": "") + ">" + g + "</option>";
                e.yearshtml += "</select>",
                D += e.yearshtml,
                e.yearshtml = null
            }
            return D += this._get(e, "yearSuffix"),
            m && (D += (!r && k && f ? "": "&#xa0;") + y),
            D += "</div>"
        },
        _adjustInstDate: function(e, t, a) {
            var i = e.drawYear + ("Y" === a ? t: 0),
            s = e.drawMonth + ("M" === a ? t: 0),
            r = Math.min(e.selectedDay, this._getDaysInMonth(i, s)) + ("D" === a ? t: 0),
            n = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(i, s, r)));
            e.selectedDay = n.getDate(),
            e.drawMonth = e.selectedMonth = n.getMonth(),
            e.drawYear = e.selectedYear = n.getFullYear(),
            ("M" === a || "Y" === a) && this._notifyChange(e)
        },
        _restrictMinMax: function(e, t) {
            var a = this._getMinMaxDate(e, "min"),
            i = this._getMinMaxDate(e, "max"),
            s = a && a > t ? a: t;
            return i && s > i ? i: s
        },
        _notifyChange: function(e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function(e) {
            var t = this._get(e, "numberOfMonths");
            return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
        },
        _getMinMaxDate: function(e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function(e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function(e, t) {
            return new Date(e, t, 1).getDay()
        },
        _canAdjustMonth: function(e, t, a, i) {
            var s = this._getNumberOfMonths(e),
            r = this._daylightSavingAdjust(new Date(a, i + (0 > t ? t: s[0] * s[1]), 1));
            return 0 > t && r.setDate(this._getDaysInMonth(r.getFullYear(), r.getMonth())),
            this._isInRange(e, r)
        },
        _isInRange: function(e, t) {
            var a, i, s = this._getMinMaxDate(e, "min"),
            r = this._getMinMaxDate(e, "max"),
            n = null,
            d = null,
            c = this._get(e, "yearRange");
            return c && (a = c.split(":"), i = (new Date).getFullYear(), n = parseInt(a[0], 10), d = parseInt(a[1], 10), a[0].match(/[+\-].*/) && (n += i), a[1].match(/[+\-].*/) && (d += i)),
            (!s || t.getTime() >= s.getTime()) && (!r || t.getTime() <= r.getTime()) && (!n || t.getFullYear() >= n) && (!d || t.getFullYear() <= d)
        },
        _getFormatConfig: function(e) {
            var t = this._get(e, "shortYearCutoff");
            return t = "string" != typeof t ? t: (new Date).getFullYear() % 100 + parseInt(t, 10),
            {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function(e, t, a, i) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var s = t ? "object" == typeof t ? t: this._daylightSavingAdjust(new Date(i, a, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), s, this._getFormatConfig(e))
        }
    }),
    s.fn.datepicker = function(e) {
        if (!this.length) return this;
        s.datepicker.initialized || (s(document).mousedown(s.datepicker._checkExternalClick), s.datepicker.initialized = !0),
        0 === s("#" + s.datepicker._mainDivId).length && s("body").append(s.datepicker.dpDiv);
        var t = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? s.datepicker["_" + e + "Datepicker"].apply(s.datepicker, [this[0]].concat(t)) : this.each(function() {
            "string" == typeof e ? s.datepicker["_" + e + "Datepicker"].apply(s.datepicker, [this].concat(t)) : s.datepicker._attachDatepicker(this, e)
        }) : s.datepicker["_" + e + "Datepicker"].apply(s.datepicker, [this[0]].concat(t))
    },
    s.datepicker = new t,
    s.datepicker.initialized = !1,
    s.datepicker.uuid = (new Date).getTime(),
    s.datepicker.version = "1.10.3"
});;
define("common:widget/lib/jquery.ui/jquery.ui.sortable.js",
function(t) {
    var e = t("common:widget/lib/jquery/jquery.js");
    t("common:widget/lib/jquery.ui/jquery.ui.core.js"),
    t("common:widget/lib/jquery.ui/jquery.ui.widget.js"),
    t("common:widget/lib/jquery.ui/jquery.ui.position.js"),
    t("common:widget/lib/jquery.ui/jquery.ui.mouse.js"),
    e.widget("ui.sortable", e.ui.mouse, {
        version: "1.11.0",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(t, e, i) {
            return t >= e && e + i > t
        },
        _isFloating: function(t) {
            return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
        },
        _create: function() {
            var t = this.options;
            this.containerCache = {},
            this.element.addClass("ui-sortable"),
            this.refresh(),
            this.floating = this.items.length ? "x" === t.axis || this._isFloating(this.items[0].item) : !1,
            this.offset = this.element.offset(),
            this._mouseInit(),
            this._setHandleClassName(),
            this.ready = !0
        },
        _setOption: function(t, e) {
            this._super(t, e),
            "handle" === t && this._setHandleClassName()
        },
        _setHandleClassName: function() {
            this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),
            e.each(this.items,
            function() { (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
            })
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),
            this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function(t, i) {
            var s = null,
            o = !1,
            r = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), e(t.target).parents().each(function() {
                return e.data(this, r.widgetName + "-item") === r ? (s = e(this), !1) : void 0
            }), e.data(t.target, r.widgetName + "-item") === r && (s = e(t.target)), s && (!this.options.handle || i || (e(this.options.handle, s).find("*").addBack().each(function() {
                this === t.target && (o = !0)
            }), o)) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1)
        },
        _mouseStart: function(t, i, s) {
            var o, r, n = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            },
            this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), n.containment && this._setContainment(), n.cursor && "auto" !== n.cursor && (r = this.document.find("body"), this.storedCursor = r.css("cursor"), r.css("cursor", n.cursor), this.storedStylesheet = e("<style>*{ cursor: " + n.cursor + " !important; }</style>").appendTo(r)), n.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", n.opacity)), n.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", n.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s) for (o = this.containers.length - 1; o >= 0; o--) this.containers[o]._trigger("activate", t, this._uiHash(this));
            return e.ui.ddmanager && (e.ui.ddmanager.current = this),
            e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t),
            this.dragging = !0,
            this.helper.addClass("ui-sortable-helper"),
            this._mouseDrag(t),
            !0
        },
        _mouseDrag: function(t) {
            var i, s, o, r, n = this.options,
            h = !1;
            for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < n.scrollSensitivity ? this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop + n.scrollSpeed: t.pageY - this.overflowOffset.top < n.scrollSensitivity && (this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop - n.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < n.scrollSensitivity ? this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft + n.scrollSpeed: t.pageX - this.overflowOffset.left < n.scrollSensitivity && (this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft - n.scrollSpeed)) : (t.pageY - e(document).scrollTop() < n.scrollSensitivity ? h = e(document).scrollTop(e(document).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < n.scrollSensitivity && (h = e(document).scrollTop(e(document).scrollTop() + n.scrollSpeed)), t.pageX - e(document).scrollLeft() < n.scrollSensitivity ? h = e(document).scrollLeft(e(document).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < n.scrollSensitivity && (h = e(document).scrollLeft(e(document).scrollLeft() + n.scrollSpeed))), h !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--) if (s = this.items[i], o = s.item[0], r = this._intersectsWithPointer(s), r && s.instance === this.currentContainer && o !== this.currentItem[0] && this.placeholder[1 === r ? "next": "prev"]()[0] !== o && !e.contains(this.placeholder[0], o) && ("semi-dynamic" === this.options.type ? !e.contains(this.element[0], o) : !0)) {
                if (this.direction = 1 === r ? "down": "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                this._rearrange(t, s),
                this._trigger("change", t, this._uiHash());
                break
            }
            return this._contactContainers(t),
            e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
            this._trigger("sort", t, this._uiHash()),
            this.lastPositionAbs = this.positionAbs,
            !1
        },
        _mouseStop: function(t, i) {
            if (t) {
                if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                    var s = this,
                    o = this.placeholder.offset(),
                    r = this.options.axis,
                    n = {};
                    r && "x" !== r || (n.left = o.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)),
                    r && "y" !== r || (n.top = o.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)),
                    this.reverting = !0,
                    e(this.helper).animate(n, parseInt(this.options.revert, 10) || 500,
                    function() {
                        s._clear(t)
                    })
                } else this._clear(t, i);
                return ! 1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }),
                "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)),
                this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)),
            this
        },
        serialize: function(t) {
            var i = this._getItemsAsjQuery(t && t.connected),
            s = [];
            return t = t || {},
            e(i).each(function() {
                var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                i && s.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2]))
            }),
            !s.length && t.key && s.push(t.key + "="),
            s.join("&")
        },
        toArray: function(t) {
            var i = this._getItemsAsjQuery(t && t.connected),
            s = [];
            return t = t || {},
            i.each(function() {
                s.push(e(t.item || this).attr(t.attribute || "id") || "")
            }),
            s
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left,
            i = e + this.helperProportions.width,
            s = this.positionAbs.top,
            o = s + this.helperProportions.height,
            r = t.left,
            n = r + t.width,
            h = t.top,
            a = h + t.height,
            l = this.offset.click.top,
            c = this.offset.click.left,
            p = "x" === this.options.axis || s + l > h && a > s + l,
            f = "y" === this.options.axis || e + c > r && n > e + c,
            u = p && f;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width": "height"] > t[this.floating ? "width": "height"] ? u: r < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < n && h < s + this.helperProportions.height / 2 && o - this.helperProportions.height / 2 < a
        },
        _intersectsWithPointer: function(t) {
            var e = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
            i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
            s = e && i,
            o = this._getDragVerticalDirection(),
            r = this._getDragHorizontalDirection();
            return s ? this.floating ? r && "right" === r || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1) : !1
        },
        _intersectsWithSides: function(t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
            i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
            s = this._getDragVerticalDirection(),
            o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" === o && i || "left" === o && !i: s && ("down" === s && e || "up" === s && !e)
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down": "up")
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right": "left")
        },
        refresh: function(t) {
            return this._refreshItems(t),
            this._setHandleClassName(),
            this.refreshPositions(),
            this
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function(t) {
            function i() {
                h.push(this)
            }
            var s, o, r, n, h = [],
            a = [],
            l = this._connectWith();
            if (l && t) for (s = l.length - 1; s >= 0; s--) for (r = e(l[s]), o = r.length - 1; o >= 0; o--) n = e.data(r[o], this.widgetFullName),
            n && n !== this && !n.options.disabled && a.push([e.isFunction(n.options.items) ? n.options.items.call(n.element) : e(n.options.items, n.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), n]);
            for (a.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = a.length - 1; s >= 0; s--) a[s][0].each(i);
            return e(h)
        },
        _removeCurrentsFromItems: function() {
            var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = e.grep(this.items,
            function(e) {
                for (var i = 0; i < t.length; i++) if (t[i] === e.item[0]) return ! 1;
                return ! 0
            })
        },
        _refreshItems: function(t) {
            this.items = [],
            this.containers = [this];
            var i, s, o, r, n, h, a, l, c = this.items,
            p = [[e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                item: this.currentItem
            }) : e(this.options.items, this.element), this]],
            f = this._connectWith();
            if (f && this.ready) for (i = f.length - 1; i >= 0; i--) for (o = e(f[i]), s = o.length - 1; s >= 0; s--) r = e.data(o[s], this.widgetFullName),
            r && r !== this && !r.options.disabled && (p.push([e.isFunction(r.options.items) ? r.options.items.call(r.element[0], t, {
                item: this.currentItem
            }) : e(r.options.items, r.element), r]), this.containers.push(r));
            for (i = p.length - 1; i >= 0; i--) for (n = p[i][1], h = p[i][0], s = 0, l = h.length; l > s; s++) a = e(h[s]),
            a.data(this.widgetName + "-item", n),
            c.push({
                item: a,
                instance: n,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            })
        },
        refreshPositions: function(t) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, s, o, r;
            for (i = this.items.length - 1; i >= 0; i--) s = this.items[i],
            s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (o = this.options.toleranceElement ? e(this.options.toleranceElement, s.item) : s.item, t || (s.width = o.outerWidth(), s.height = o.outerHeight()), r = o.offset(), s.left = r.left, s.top = r.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else for (i = this.containers.length - 1; i >= 0; i--) r = this.containers[i].element.offset(),
            this.containers[i].containerCache.left = r.left,
            this.containers[i].containerCache.top = r.top,
            this.containers[i].containerCache.width = this.containers[i].element.outerWidth(),
            this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(t) {
            t = t || this;
            var i, s = t.options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                element: function() {
                    var s = t.currentItem[0].nodeName.toLowerCase(),
                    o = e("<" + s + ">", t.document[0]).addClass(i || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === s ? t.currentItem.children().each(function() {
                        e("<td>&#160;</td>", t.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(o)
                    }) : "img" === s && o.attr("src", t.currentItem.attr("src")),
                    i || o.css("visibility", "hidden"),
                    o
                },
                update: function(e, o) { (!i || s.forcePlaceholderSize) && (o.height() || o.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), o.width() || o.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                }
            }),
            t.placeholder = e(s.placeholder.element.call(t.element, t.currentItem)),
            t.currentItem.after(t.placeholder),
            s.placeholder.update(t, t.placeholder)
        },
        _contactContainers: function(t) {
            var i, s, o, r, n, h, a, l, c, p, f = null,
            u = null;
            for (i = this.containers.length - 1; i >= 0; i--) if (!e.contains(this.currentItem[0], this.containers[i].element[0])) if (this._intersectsWith(this.containers[i].containerCache)) {
                if (f && e.contains(this.containers[i].element[0], f.element[0])) continue;
                f = this.containers[i],
                u = i
            } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0);
            if (f) if (1 === this.containers.length) this.containers[u].containerCache.over || (this.containers[u]._trigger("over", t, this._uiHash(this)), this.containers[u].containerCache.over = 1);
            else {
                for (o = 1e4, r = null, c = f.floating || this._isFloating(this.currentItem), n = c ? "left": "top", h = c ? "width": "height", p = c ? "clientX": "clientY", s = this.items.length - 1; s >= 0; s--) e.contains(this.containers[u].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (a = this.items[s].item.offset()[n], l = !1, t[p] - a > this.items[s][h] / 2 && (l = !0), Math.abs(t[p] - a) < o && (o = Math.abs(t[p] - a), r = this.items[s], this.direction = l ? "up": "down"));
                if (!r && !this.options.dropOnEmpty) return;
                if (this.currentContainer === this.containers[u]) return;
                r ? this._rearrange(t, r, null, !0) : this._rearrange(t, null, this.containers[u].element, !0),
                this._trigger("change", t, this._uiHash()),
                this.containers[u]._trigger("change", t, this._uiHash(this)),
                this.currentContainer = this.containers[u],
                this.options.placeholder.update(this.currentContainer, this.placeholder),
                this.containers[u]._trigger("over", t, this._uiHash(this)),
                this.containers[u].containerCache.over = 1
            }
        },
        _createHelper: function(t) {
            var i = this.options,
            s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || e("parent" !== i.appendTo ? i.appendTo: this.currentItem[0].parentNode)[0].appendChild(s[0]),
            s[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }),
            (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()),
            (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()),
            s
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")),
            e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }),
            "left" in t && (this.offset.click.left = t.left + this.margins.left),
            "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
            "top" in t && (this.offset.click.top = t.top + this.margins.top),
            "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                top: 0,
                left: 0
            }),
            {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, i, s, o = this.options;
            "parent" === o.containment && (o.containment = this.helper[0].parentNode),
            ("document" === o.containment || "window" === o.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e("document" === o.containment ? document: window).width() - this.helperProportions.width - this.margins.left, (e("document" === o.containment ? document: window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
            /^(document|window|parent)$/.test(o.containment) || (t = e(o.containment)[0], i = e(o.containment).offset(), s = "hidden" !== e(t).css("overflow"), this.containment = [i.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(t, i) {
            i || (i = this.position);
            var s = "absolute" === t ? 1 : -1,
            o = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent,
            r = /(html|body)/i.test(o[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : r ? 0 : o.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : r ? 0 : o.scrollLeft()) * s
            }
        },
        _generatePosition: function(t) {
            var i, s, o = this.options,
            r = t.pageX,
            n = t.pageY,
            h = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent,
            a = /(html|body)/i.test(h[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()),
            this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (r = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (n = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (r = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (n = this.containment[3] + this.offset.click.top)), o.grid && (i = this.originalPageY + Math.round((n - this.originalPageY) / o.grid[1]) * o.grid[1], n = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i: i - this.offset.click.top >= this.containment[1] ? i - o.grid[1] : i + o.grid[1] : i, s = this.originalPageX + Math.round((r - this.originalPageX) / o.grid[0]) * o.grid[0], r = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s: s - this.offset.click.left >= this.containment[0] ? s - o.grid[0] : s + o.grid[0] : s)),
            {
                top: n - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : h.scrollTop()),
                left: r - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : h.scrollLeft())
            }
        },
        _rearrange: function(t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling),
            this.counter = this.counter ? ++this.counter: 1;
            var o = this.counter;
            this._delay(function() {
                o === this.counter && this.refreshPositions(!s)
            })
        },
        _clear: function(t, e) {
            function i(t, e, i) {
                return function(s) {
                    i._trigger(t, s, e._uiHash(e))
                }
            }
            this.reverting = !1;
            var s, o = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (s in this._storedCSS)("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !e && o.push(function(t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside))
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || o.push(function(t) {
                this._trigger("update", t, this._uiHash())
            }), this !== this.currentContainer && (e || (o.push(function(t) {
                this._trigger("remove", t, this._uiHash())
            }), o.push(function(t) {
                return function(e) {
                    t._trigger("receive", e, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), o.push(function(t) {
                return function(e) {
                    t._trigger("update", e, this._uiHash(this))
                }
            }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) e || o.push(i("deactivate", this, this.containers[s])),
            this.containers[s].containerCache.over && (o.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "": this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!e) {
                    for (this._trigger("beforeStop", t, this._uiHash()), s = 0; s < o.length; s++) o[s].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1,
                !1
            }
            if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
                for (s = 0; s < o.length; s++) o[s].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1,
            !0
        },
        _trigger: function() {
            e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(t) {
            var i = t || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || e([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: t ? t.element: null
            }
        }
    })
});;
define("common:widget/lib/jquery.ui/jquery.ui.tabs.js",
function(t) {
    function e() {
        return++s
    }
    function i(t) {
        var e = !1;
        try {
            e = t.hash.length > 1 && decodeURIComponent(t.href.replace(n, "")) === decodeURIComponent(location.href.replace(n, ""))
        } catch(i) {
            e = t.hash.length > 1 && t.href.replace(n, "") === location.href.replace(n, "")
        }
        return e
    }
    var a = t("common:widget/lib/jquery/jquery.js");
    t("common:widget/lib/jquery.ui/jquery.ui.core.js"),
    t("common:widget/lib/jquery.ui/jquery.ui.widget.js");
    var s = 0,
    n = /#.*$/;
    a.widget("ui.tabs", {
        version: "1.10.3",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function() {
            var t = this,
            e = this.options;
            this.running = !1,
            this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", e.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace,
            function(t) {
                a(this).is(".ui-state-disabled") && t.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace,
            function() {
                a(this).closest("li").is(".ui-state-disabled") && this.blur()
            }),
            this._processTabs(),
            e.active = this._initialActive(),
            a.isArray(e.disabled) && (e.disabled = a.unique(e.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"),
            function(e) {
                return t.tabs.index(e)
            }))).sort()),
            this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(e.active) : a(),
            this._refresh(),
            this.active.length && this.load(e.active)
        },
        _initialActive: function() {
            var t = this.options.active,
            e = this.options.collapsible,
            i = location.hash.substring(1);
            return null === t && (i && this.tabs.each(function(e, s) {
                return a(s).attr("aria-controls") === i ? (t = e, !1) : void 0
            }), null === t && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === t || -1 === t) && (t = this.tabs.length ? 0 : !1)),
            t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), -1 === t && (t = e ? !1 : 0)),
            !e && t === !1 && this.anchors.length && (t = 0),
            t
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : a()
            }
        },
        _tabKeydown: function(t) {
            var e = a(this.document[0].activeElement).closest("li"),
            i = this.tabs.index(e),
            s = !0;
            if (!this._handlePageNav(t)) {
                switch (t.keyCode) {
                case a.ui.keyCode.RIGHT:
                case a.ui.keyCode.DOWN:
                    i++;
                    break;
                case a.ui.keyCode.UP:
                case a.ui.keyCode.LEFT:
                    s = !1,
                    i--;
                    break;
                case a.ui.keyCode.END:
                    i = this.anchors.length - 1;
                    break;
                case a.ui.keyCode.HOME:
                    i = 0;
                    break;
                case a.ui.keyCode.SPACE:
                    return t.preventDefault(),
                    clearTimeout(this.activating),
                    void this._activate(i);
                case a.ui.keyCode.ENTER:
                    return t.preventDefault(),
                    clearTimeout(this.activating),
                    void this._activate(i === this.options.active ? !1 : i);
                default:
                    return
                }
                t.preventDefault(),
                clearTimeout(this.activating),
                i = this._focusNextTab(i, s),
                t.ctrlKey || (e.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), this.activating = this._delay(function() {
                    this.option("active", i)
                },
                this.delay))
            }
        },
        _panelKeydown: function(t) {
            this._handlePageNav(t) || t.ctrlKey && t.keyCode === a.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
        },
        _handlePageNav: function(t) {
            return t.altKey && t.keyCode === a.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === a.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function(t, e) {
            function i() {
                return t > s && (t = 0),
                0 > t && (t = s),
                t
            }
            for (var s = this.tabs.length - 1; - 1 !== a.inArray(i(), this.options.disabled);) t = e ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function(t, e) {
            return t = this._findNextTab(t, e),
            this.tabs.eq(t).focus(),
            t
        },
        _setOption: function(t, e) {
            return "active" === t ? void this._activate(e) : "disabled" === t ? void this._setupDisabled(e) : (this._super(t, e), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e)))
        },
        _tabId: function(t) {
            return t.attr("aria-controls") || "ui-tabs-" + e()
        },
        _sanitizeSelector: function(t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var t = this.options,
            e = this.tablist.children(":has(a[href])");
            t.disabled = a.map(e.filter(".ui-state-disabled"),
            function(t) {
                return e.index(t)
            }),
            this._processTabs(),
            t.active !== !1 && this.anchors.length ? this.active.length && !a.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = a()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = a()),
            this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled),
            this._setupEvents(this.options.event),
            this._setupHeightStyle(this.options.heightStyle),
            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }),
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }),
            this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var t = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"),
            this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }),
            this.anchors = this.tabs.map(function() {
                return a("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }),
            this.panels = a(),
            this.anchors.each(function(e, s) {
                var n, r, o, h = a(s).uniqueId().attr("id"),
                l = a(s).closest("li"),
                c = l.attr("aria-controls");
                i(s) ? (n = s.hash, r = t.element.find(t._sanitizeSelector(n))) : (o = t._tabId(l), n = "#" + o, r = t.element.find(n), r.length || (r = t._createPanel(o), r.insertAfter(t.panels[e - 1] || t.tablist)), r.attr("aria-live", "polite")),
                r.length && (t.panels = t.panels.add(r)),
                c && l.data("ui-tabs-aria-controls", c),
                l.attr({
                    "aria-controls": n.substring(1),
                    "aria-labelledby": h
                }),
                r.attr("aria-labelledby", h)
            }),
            this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function() {
            return this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(t) {
            return a("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function(t) {
            a.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
            for (var e, i = 0; e = this.tabs[i]; i++) t === !0 || -1 !== a.inArray(i, t) ? a(e).addClass("ui-state-disabled").attr("aria-disabled", "true") : a(e).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = t
        },
        _setupEvents: function(t) {
            var e = {
                click: function(t) {
                    t.preventDefault()
                }
            };
            t && a.each(t.split(" "),
            function(t, i) {
                e[i] = "_eventHandler"
            }),
            this._off(this.anchors.add(this.tabs).add(this.panels)),
            this._on(this.anchors, e),
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            }),
            this._on(this.panels, {
                keydown: "_panelKeydown"
            }),
            this._focusable(this.tabs),
            this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(t) {
            var e, i = this.element.parent();
            "fill" === t ? (e = i.height(), e -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var t = a(this),
                i = t.css("position");
                "absolute" !== i && "fixed" !== i && (e -= t.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() {
                e -= a(this).outerHeight(!0)
            }), this.panels.each(function() {
                a(this).height(Math.max(0, e - a(this).innerHeight() + a(this).height()))
            }).css("overflow", "auto")) : "auto" === t && (e = 0, this.panels.each(function() {
                e = Math.max(e, a(this).height("").height())
            }).height(e))
        },
        _eventHandler: function(t) {
            var e = this.options,
            i = this.active,
            s = a(t.currentTarget),
            n = s.closest("li"),
            r = n[0] === i[0],
            o = r && e.collapsible,
            h = o ? a() : this._getPanelForTab(n),
            l = i.length ? this._getPanelForTab(i) : a(),
            c = {
                oldTab: i,
                oldPanel: l,
                newTab: o ? a() : n,
                newPanel: h
            };
            t.preventDefault(),
            n.hasClass("ui-state-disabled") || n.hasClass("ui-tabs-loading") || this.running || r && !e.collapsible || this._trigger("beforeActivate", t, c) === !1 || (e.active = o ? !1 : this.tabs.index(n), this.active = r ? a() : n, this.xhr && this.xhr.abort(), l.length || h.length || a.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(n), t), this._toggle(t, c))
        },
        _toggle: function(t, e) {
            function i() {
                n.running = !1,
                n._trigger("activate", t, e)
            }
            function s() {
                e.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),
                r.length && n.options.show ? n._show(r, n.options.show, i) : (r.show(), i())
            }
            var n = this,
            r = e.newPanel,
            o = e.oldPanel;
            this.running = !0,
            o.length && this.options.hide ? this._hide(o, this.options.hide,
            function() {
                e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),
                s()
            }) : (e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), o.hide(), s()),
            o.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }),
            e.oldTab.attr("aria-selected", "false"),
            r.length && o.length ? e.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function() {
                return 0 === a(this).attr("tabIndex")
            }).attr("tabIndex", -1),
            r.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }),
            e.newTab.attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _activate: function(t) {
            var e, i = this._findActive(t);
            i[0] !== this.active[0] && (i.length || (i = this.active), e = i.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: e,
                currentTarget: e,
                preventDefault: a.noop
            }))
        },
        _findActive: function(t) {
            return t === !1 ? a() : this.tabs.eq(t)
        },
        _getIndex: function(t) {
            return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))),
            t
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(),
            this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),
            this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),
            this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),
            this.tabs.add(this.panels).each(function() {
                a.data(this, "ui-tabs-destroy") ? a(this).remove() : a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }),
            this.tabs.each(function() {
                var t = a(this),
                e = t.data("ui-tabs-aria-controls");
                e ? t.attr("aria-controls", e).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            }),
            this.panels.show(),
            "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(t) {
            var e = this.options.disabled;
            e !== !1 && (void 0 === t ? e = !1 : (t = this._getIndex(t), e = a.isArray(e) ? a.map(e,
            function(e) {
                return e !== t ? e: null
            }) : a.map(this.tabs,
            function(e, i) {
                return i !== t ? i: null
            })), this._setupDisabled(e))
        },
        disable: function(t) {
            var e = this.options.disabled;
            if (e !== !0) {
                if (void 0 === t) e = !0;
                else {
                    if (t = this._getIndex(t), -1 !== a.inArray(t, e)) return;
                    e = a.isArray(e) ? a.merge([t], e).sort() : [t]
                }
                this._setupDisabled(e)
            }
        },
        load: function(t, e) {
            t = this._getIndex(t);
            var s = this,
            n = this.tabs.eq(t),
            r = n.find(".ui-tabs-anchor"),
            o = this._getPanelForTab(n),
            h = {
                tab: n,
                panel: o
            };
            i(r[0]) || (this.xhr = a.ajax(this._ajaxSettings(r, e, h)), this.xhr && "canceled" !== this.xhr.statusText && (n.addClass("ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.success(function(t) {
                setTimeout(function() {
                    o.html(t),
                    s._trigger("load", e, h)
                },
                1)
            }).complete(function(t, e) {
                setTimeout(function() {
                    "abort" === e && s.panels.stop(!1, !0),
                    n.removeClass("ui-tabs-loading"),
                    o.removeAttr("aria-busy"),
                    t === s.xhr && delete s.xhr
                },
                1)
            })))
        },
        _ajaxSettings: function(t, e, i) {
            var s = this;
            return {
                url: t.attr("href"),
                beforeSend: function(t, n) {
                    return s._trigger("beforeLoad", e, a.extend({
                        jqXHR: t,
                        ajaxSettings: n
                    },
                    i))
                }
            }
        },
        _getPanelForTab: function(t) {
            var e = a(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + e))
        }
    })
});;
define("common:widget/lib/jquery.placeholder/jquery.placeholder.js",
function(e) {
    function a(e) {
        var a = {},
        t = /^jQuery\d+$/;
        return d.each(e.attributes,
        function(e, l) {
            l.specified && !t.test(l.name) && (a[l.name] = l.value)
        }),
        a
    }
    function t(e, a) {
        var t = this,
        l = d(t);
        if (t.value == l.attr("placeholder") && l.hasClass("placeholder")) if (l.data("placeholder-password")) {
            if (l = l.hide().next().show().attr("id", l.removeAttr("id").data("placeholder-id")), e === !0) return l[0].value = a;
            l.focus()
        } else t.value = "",
        l.removeClass("placeholder"),
        t == document.activeElement && t.select()
    }
    function l() {
        var e, l = this,
        r = d(l),
        o = this.id;
        if ("" == l.value) {
            if ("password" == l.type) {
                if (!r.data("placeholder-textinput")) {
                    try {
                        e = r.clone().attr({
                            type: "text"
                        })
                    } catch(c) {
                        e = d("<input>").attr(d.extend(a(this), {
                            type: "text"
                        }))
                    }
                    e.removeAttr("name").data({
                        "placeholder-password": r,
                        "placeholder-id": o
                    }).bind("focus.placeholder", t),
                    r.data({
                        "placeholder-textinput": e,
                        "placeholder-id": o
                    }).before(e)
                }
                r = r.removeAttr("id").hide().prev().attr("id", o).show()
            }
            r.addClass("placeholder"),
            r[0].value = r.attr("placeholder")
        } else r.removeClass("placeholder")
    }
    var r, o, d = e("common:widget/lib/jquery/jquery.js"),
    c = "placeholder" in document.createElement("input"),
    n = "placeholder" in document.createElement("textarea"),
    i = d.fn,
    u = d.valHooks,
    h = d.propHooks;
    c && n ? (o = i.placeholder = function() {
        return this
    },
    o.input = o.textarea = !0) : (o = i.placeholder = function() {
        var e = this;
        return e.filter((c ? "textarea": ":input") + "[placeholder]").not(".placeholder").bind({
            "focus.placeholder": t,
            "blur.placeholder": l
        }).data("placeholder-enabled", !0).trigger("blur.placeholder"),
        e
    },
    o.input = c, o.textarea = n, r = {
        get: function(e) {
            var a = d(e),
            t = a.data("placeholder-password");
            return t ? t[0].value: a.data("placeholder-enabled") && a.hasClass("placeholder") ? "": e.value
        },
        set: function(e, a) {
            var r = d(e),
            o = r.data("placeholder-password");
            return o ? o[0].value = a: r.data("placeholder-enabled") ? ("" == a ? (e.value = a, e != document.activeElement && l.call(e)) : r.hasClass("placeholder") ? t.call(e, !0, a) || (e.value = a) : e.value = a, r) : e.value = a
        }
    },
    c || (u.input = r, h.value = r), n || (u.textarea = r, h.value = r), d(function() {
        d(document).delegate("form", "submit.placeholder",
        function() {
            var e = d(".placeholder", this).each(t);
            setTimeout(function() {
                e.each(l)
            },
            10)
        })
    }), d(window).bind("beforeunload.placeholder",
    function() {
        d(".placeholder").each(function() {
            this.value = ""
        })
    }))
});