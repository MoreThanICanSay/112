var $ = jQuery = require("common:widget/js/util/tangram/tangram.js");
jQuery.effects ||
function(t, e) {
    var i = t.uiBackCompat !== !1,
    n = "ui-effects-";
    t.effects = {
        effect: {}
    },
    function(e, i) {
        function n(t, e, i) {
            var n = h[e.type] || {};
            return null == t ? i || !e.def ? null: e.def: (t = n.floor ? ~~t: parseFloat(t), isNaN(t) ? e.def: n.mod ? (t + n.mod) % n.mod: 0 > t ? 0 : t > n.max ? n.max: t)
        }
        function o(t) {
            var n = u(),
            o = n._rgba = [];
            return t = t.toLowerCase(),
            m(c,
            function(e, a) {
                var s, r = a.re.exec(t),
                l = r && a.parse(r),
                c = a.space || "rgba";
                return l ? (s = n[c](l), n[d[c].cache] = s[d[c].cache], o = n._rgba = s._rgba, !1) : i
            }),
            o.length ? ("0,0,0,0" === o.join() && e.extend(o, s.transparent), n) : s[t]
        }
        function a(t, e, i) {
            return i = (i + 1) % 1,
            1 > 6 * i ? t + 6 * (e - t) * i: 1 > 2 * i ? e: 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
        }
        var s, r = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),
        l = /^([\-+])=\s*(\d+\.?\d*)/,
        c = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [t[1], t[2], t[3], t[4]]
            }
        },
        {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
            }
        },
        {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(t) {
                return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
            }
        },
        {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(t) {
                return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
            }
        },
        {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(t) {
                return [t[1], t[2] / 100, t[3] / 100, t[4]]
            }
        }],
        u = e.Color = function(t, i, n, o) {
            return new e.Color.fn.parse(t, i, n, o)
        },
        d = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        },
        h = {
            "byte": {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        },
        f = u.support = {},
        p = e("<p>")[0],
        m = e.each;
        p.style.cssText = "background-color:rgba(1,1,1,.5)",
        f.rgba = p.style.backgroundColor.indexOf("rgba") > -1,
        m(d,
        function(t, e) {
            e.cache = "_" + t,
            e.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        }),
        u.fn = e.extend(u.prototype, {
            parse: function(a, r, l, c) {
                if (a === i) return this._rgba = [null, null, null, null],
                this; (a.jquery || a.nodeType) && (a = e(a).css(r), r = i);
                var h = this,
                f = e.type(a),
                p = this._rgba = [];
                return r !== i && (a = [a, r, l, c], f = "array"),
                "string" === f ? this.parse(o(a) || s._default) : "array" === f ? (m(d.rgba.props,
                function(t, e) {
                    p[e.idx] = n(a[e.idx], e)
                }), this) : "object" === f ? (a instanceof u ? m(d,
                function(t, e) {
                    a[e.cache] && (h[e.cache] = a[e.cache].slice())
                }) : m(d,
                function(e, i) {
                    var o = i.cache;
                    m(i.props,
                    function(t, e) {
                        if (!h[o] && i.to) {
                            if ("alpha" === t || null == a[t]) return;
                            h[o] = i.to(h._rgba)
                        }
                        h[o][e.idx] = n(a[t], e, !0)
                    }),
                    h[o] && 0 > t.inArray(null, h[o].slice(0, 3)) && (h[o][3] = 1, i.from && (h._rgba = i.from(h[o])))
                }), this) : i
            },
            is: function(t) {
                var e = u(t),
                n = !0,
                o = this;
                return m(d,
                function(t, a) {
                    var s, r = e[a.cache];
                    return r && (s = o[a.cache] || a.to && a.to(o._rgba) || [], m(a.props,
                    function(t, e) {
                        return null != r[e.idx] ? n = r[e.idx] === s[e.idx] : i
                    })),
                    n
                }),
                n
            },
            _space: function() {
                var t = [],
                e = this;
                return m(d,
                function(i, n) {
                    e[n.cache] && t.push(i)
                }),
                t.pop()
            },
            transition: function(t, e) {
                var i = u(t),
                o = i._space(),
                a = d[o],
                s = 0 === this.alpha() ? u("transparent") : this,
                r = s[a.cache] || a.to(s._rgba),
                l = r.slice();
                return i = i[a.cache],
                m(a.props,
                function(t, o) {
                    var a = o.idx,
                    s = r[a],
                    c = i[a],
                    u = h[o.type] || {};
                    null !== c && (null === s ? l[a] = c: (u.mod && (c - s > u.mod / 2 ? s += u.mod: s - c > u.mod / 2 && (s -= u.mod)), l[a] = n((c - s) * e + s, o)))
                }),
                this[o](l)
            },
            blend: function(t) {
                if (1 === this._rgba[3]) return this;
                var i = this._rgba.slice(),
                n = i.pop(),
                o = u(t)._rgba;
                return u(e.map(i,
                function(t, e) {
                    return (1 - n) * o[e] + n * t
                }))
            },
            toRgbaString: function() {
                var t = "rgba(",
                i = e.map(this._rgba,
                function(t, e) {
                    return null == t ? e > 2 ? 1 : 0 : t
                });
                return 1 === i[3] && (i.pop(), t = "rgb("),
                t + i.join() + ")"
            },
            toHslaString: function() {
                var t = "hsla(",
                i = e.map(this.hsla(),
                function(t, e) {
                    return null == t && (t = e > 2 ? 1 : 0),
                    e && 3 > e && (t = Math.round(100 * t) + "%"),
                    t
                });
                return 1 === i[3] && (i.pop(), t = "hsl("),
                t + i.join() + ")"
            },
            toHexString: function(t) {
                var i = this._rgba.slice(),
                n = i.pop();
                return t && i.push(~~ (255 * n)),
                "#" + e.map(i,
                function(t) {
                    return t = (t || 0).toString(16),
                    1 === t.length ? "0" + t: t
                }).join("")
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent": this.toRgbaString()
            }
        }),
        u.fn.parse.prototype = u.fn,
        d.hsla.to = function(t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
            var e, i, n = t[0] / 255,
            o = t[1] / 255,
            a = t[2] / 255,
            s = t[3],
            r = Math.max(n, o, a),
            l = Math.min(n, o, a),
            c = r - l,
            u = r + l,
            d = .5 * u;
            return e = l === r ? 0 : n === r ? 60 * (o - a) / c + 360 : o === r ? 60 * (a - n) / c + 120 : 60 * (n - o) / c + 240,
            i = 0 === d || 1 === d ? d: .5 >= d ? c / u: c / (2 - u),
            [Math.round(e) % 360, i, d, null == s ? 1 : s]
        },
        d.hsla.from = function(t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
            var e = t[0] / 360,
            i = t[1],
            n = t[2],
            o = t[3],
            s = .5 >= n ? n * (1 + i) : n + i - n * i,
            r = 2 * n - s;
            return [Math.round(255 * a(r, s, e + 1 / 3)), Math.round(255 * a(r, s, e)), Math.round(255 * a(r, s, e - 1 / 3)), o]
        },
        m(d,
        function(t, o) {
            var a = o.props,
            s = o.cache,
            r = o.to,
            c = o.from;
            u.fn[t] = function(t) {
                if (r && !this[s] && (this[s] = r(this._rgba)), t === i) return this[s].slice();
                var o, l = e.type(t),
                d = "array" === l || "object" === l ? t: arguments,
                h = this[s].slice();
                return m(a,
                function(t, e) {
                    var i = d["object" === l ? t: e.idx];
                    null == i && (i = h[e.idx]),
                    h[e.idx] = n(i, e)
                }),
                c ? (o = u(c(h)), o[s] = h, o) : u(h)
            },
            m(a,
            function(i, n) {
                u.fn[i] || (u.fn[i] = function(o) {
                    var a, s = e.type(o),
                    r = "alpha" === i ? this._hsla ? "hsla": "rgba": t,
                    c = this[r](),
                    u = c[n.idx];
                    return "undefined" === s ? u: ("function" === s && (o = o.call(this, u), s = e.type(o)), null == o && n.empty ? this: ("string" === s && (a = l.exec(o), a && (o = u + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), c[n.idx] = o, this[r](c)))
                })
            })
        }),
        m(r,
        function(t, i) {
            e.cssHooks[i] = {
                set: function(t, n) {
                    var a, s, r = "";
                    if ("string" !== e.type(n) || (a = o(n))) {
                        if (n = u(a || n), !f.rgba && 1 !== n._rgba[3]) {
                            for (s = "backgroundColor" === i ? t.parentNode: t; ("" === r || "transparent" === r) && s && s.style;) try {
                                r = e.css(s, "backgroundColor"),
                                s = s.parentNode
                            } catch(l) {}
                            n = n.blend(r && "transparent" !== r ? r: "_default")
                        }
                        n = n.toRgbaString()
                    }
                    try {
                        t.style[i] = n
                    } catch(c) {}
                }
            },
            e.fx.step[i] = function(t) {
                t.colorInit || (t.start = u(t.elem, i), t.end = u(t.end), t.colorInit = !0),
                e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
            }
        }),
        e.cssHooks.borderColor = {
            expand: function(t) {
                var e = {};
                return m(["Top", "Right", "Bottom", "Left"],
                function(i, n) {
                    e["border" + n + "Color"] = t
                }),
                e
            }
        },
        s = e.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    } (jQuery),
    function() {
        function i() {
            var e, i, n = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle,
            o = {};
            if (n && n.length && n[0] && n[n[0]]) for (i = n.length; i--;) e = n[i],
            "string" == typeof n[e] && (o[t.camelCase(e)] = n[e]);
            else for (e in n)"string" == typeof n[e] && (o[e] = n[e]);
            return o
        }
        function n(e, i) {
            var n, o, s = {};
            for (n in i) o = i[n],
            e[n] !== o && (a[n] || (t.fx.step[n] || !isNaN(parseFloat(o))) && (s[n] = o));
            return s
        }
        var o = ["add", "remove", "toggle"],
        a = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"],
        function(e, i) {
            t.fx.step[i] = function(t) { ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
            }
        }),
        t.effects.animateClass = function(e, a, s, r) {
            var l = t.speed(a, s, r);
            return this.queue(function() {
                var a, s = t(this),
                r = s.attr("class") || "",
                c = l.children ? s.find("*").andSelf() : s;
                c = c.map(function() {
                    var e = t(this);
                    return {
                        el: e,
                        start: i.call(this)
                    }
                }),
                a = function() {
                    t.each(o,
                    function(t, i) {
                        e[i] && s[i + "Class"](e[i])
                    })
                },
                a(),
                c = c.map(function() {
                    return this.end = i.call(this.el[0]),
                    this.diff = n(this.start, this.end),
                    this
                }),
                s.attr("class", r),
                c = c.map(function() {
                    var e = this,
                    i = t.Deferred(),
                    n = jQuery.extend({},
                    l, {
                        queue: !1,
                        complete: function() {
                            i.resolve(e)
                        }
                    });
                    return this.el.animate(this.diff, n),
                    i.promise()
                }),
                t.when.apply(t, c.get()).done(function() {
                    a(),
                    t.each(arguments,
                    function() {
                        var e = this.el;
                        t.each(this.diff,
                        function(t) {
                            e.css(t, "")
                        })
                    }),
                    l.complete.call(s[0])
                })
            })
        },
        t.fn.extend({
            _addClass: t.fn.addClass,
            addClass: function(e, i, n, o) {
                return i ? t.effects.animateClass.call(this, {
                    add: e
                },
                i, n, o) : this._addClass(e)
            },
            _removeClass: t.fn.removeClass,
            removeClass: function(e, i, n, o) {
                return i ? t.effects.animateClass.call(this, {
                    remove: e
                },
                i, n, o) : this._removeClass(e)
            },
            _toggleClass: t.fn.toggleClass,
            toggleClass: function(i, n, o, a, s) {
                return "boolean" == typeof n || n === e ? o ? t.effects.animateClass.call(this, n ? {
                    add: i
                }: {
                    remove: i
                },
                o, a, s) : this._toggleClass(i, n) : t.effects.animateClass.call(this, {
                    toggle: i
                },
                n, o, a)
            },
            switchClass: function(e, i, n, o, a) {
                return t.effects.animateClass.call(this, {
                    add: i,
                    remove: e
                },
                n, o, a)
            }
        })
    } (),
    function() {
        function o(e, i, n, o) {
            return t.isPlainObject(e) && (i = e, e = e.effect),
            e = {
                effect: e
            },
            null == i && (i = {}),
            t.isFunction(i) && (o = i, n = null, i = {}),
            ("number" == typeof i || t.fx.speeds[i]) && (o = n, n = i, i = {}),
            t.isFunction(n) && (o = n, n = null),
            i && t.extend(e, i),
            n = n || i.duration,
            e.duration = t.fx.off ? 0 : "number" == typeof n ? n: n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default,
            e.complete = o || i.complete,
            e
        }
        function a(e) {
            return ! e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? !1 : i && t.effects[e] ? !1 : !0
        }
        t.extend(t.effects, {
            version: "1.9.2",
            save: function(t, e) {
                for (var i = 0; e.length > i; i++) null !== e[i] && t.data(n + e[i], t[0].style[e[i]])
            },
            restore: function(t, i) {
                var o, a;
                for (a = 0; i.length > a; a++) null !== i[a] && (o = t.data(n + i[a]), o === e && (o = ""), t.css(i[a], o))
            },
            setMode: function(t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show": "hide"),
                e
            },
            getBaseline: function(t, e) {
                var i, n;
                switch (t[0]) {
                case "top":
                    i = 0;
                    break;
                case "middle":
                    i = .5;
                    break;
                case "bottom":
                    i = 1;
                    break;
                default:
                    i = t[0] / e.height
                }
                switch (t[1]) {
                case "left":
                    n = 0;
                    break;
                case "center":
                    n = .5;
                    break;
                case "right":
                    n = 1;
                    break;
                default:
                    n = t[1] / e.width
                }
                return {
                    x: n,
                    y: i
                }
            },
            createWrapper: function(e) {
                if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                var i = {
                    width: e.outerWidth(!0),
                    height: e.outerHeight(!0),
                    "float": e.css("float")
                },
                n = t("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }),
                o = {
                    width: e.width(),
                    height: e.height()
                },
                a = document.activeElement;
                try {
                    a.id
                } catch(s) {
                    a = document.body
                }
                return e.wrap(n),
                (e[0] === a || t.contains(e[0], a)) && t(a).focus(),
                n = e.parent(),
                "static" === e.css("position") ? (n.css({
                    position: "relative"
                }), e.css({
                    position: "relative"
                })) : (t.extend(i, {
                    position: e.css("position"),
                    zIndex: e.css("z-index")
                }), t.each(["top", "left", "bottom", "right"],
                function(t, n) {
                    i[n] = e.css(n),
                    isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                }), e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })),
                e.css(o),
                n.css(i).show()
            },
            removeWrapper: function(e) {
                var i = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()),
                e
            },
            setTransition: function(e, i, n, o) {
                return o = o || {},
                t.each(i,
                function(t, i) {
                    var a = e.cssUnit(i);
                    a[0] > 0 && (o[i] = a[0] * n + a[1])
                }),
                o
            }
        }),
        t.fn.extend({
            effect: function() {
                function e(e) {
                    function i() {
                        t.isFunction(a) && a.call(o[0]),
                        t.isFunction(e) && e()
                    }
                    var o = t(this),
                    a = n.complete,
                    s = n.mode; (o.is(":hidden") ? "hide" === s: "show" === s) ? i() : r.call(o[0], n, i)
                }
                var n = o.apply(this, arguments),
                a = n.mode,
                s = n.queue,
                r = t.effects.effect[n.effect],
                l = !r && i && t.effects[n.effect];
                return t.fx.off || !r && !l ? a ? this[a](n.duration, n.complete) : this.each(function() {
                    n.complete && n.complete.call(this)
                }) : r ? s === !1 ? this.each(e) : this.queue(s || "fx", e) : l.call(this, {
                    options: n,
                    duration: n.duration,
                    callback: n.complete,
                    mode: n.mode
                })
            },
            _show: t.fn.show,
            show: function(t) {
                if (a(t)) return this._show.apply(this, arguments);
                var e = o.apply(this, arguments);
                return e.mode = "show",
                this.effect.call(this, e)
            },
            _hide: t.fn.hide,
            hide: function(t) {
                if (a(t)) return this._hide.apply(this, arguments);
                var e = o.apply(this, arguments);
                return e.mode = "hide",
                this.effect.call(this, e)
            },
            __toggle: t.fn.toggle,
            toggle: function(e) {
                if (a(e) || "boolean" == typeof e || t.isFunction(e)) return this.__toggle.apply(this, arguments);
                var i = o.apply(this, arguments);
                return i.mode = "toggle",
                this.effect.call(this, i)
            },
            cssUnit: function(e) {
                var i = this.css(e),
                n = [];
                return t.each(["em", "px", "%", "pt"],
                function(t, e) {
                    i.indexOf(e) > 0 && (n = [parseFloat(i), e])
                }),
                n
            }
        })
    } (),
    function() {
        var e = {};
        t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"],
        function(t, i) {
            e[i] = function(e) {
                return Math.pow(e, t + 2)
            }
        }),
        t.extend(e, {
            Sine: function(t) {
                return 1 - Math.cos(t * Math.PI / 2)
            },
            Circ: function(t) {
                return 1 - Math.sqrt(1 - t * t)
            },
            Elastic: function(t) {
                return 0 === t || 1 === t ? t: -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
            },
            Back: function(t) {
                return t * t * (3 * t - 2)
            },
            Bounce: function(t) {
                for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t;);
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
            }
        }),
        t.each(e,
        function(e, i) {
            t.easing["easeIn" + e] = i,
            t.easing["easeOut" + e] = function(t) {
                return 1 - i(1 - t)
            },
            t.easing["easeInOut" + e] = function(t) {
                return.5 > t ? i(2 * t) / 2 : 1 - i( - 2 * t + 2) / 2
            }
        })
    } ()
} (jQuery),
!
function(e) {
    jQuery.fn.extend({
        slimScroll: function(i) {
            var n = e.extend({
                width: "auto",
                height: "250px",
                size: "7px",
                color: "#000",
                position: "right",
                distance: "1px",
                start: "top",
                opacity: .4,
                alwaysVisible: !1,
                disableFadeOut: !1,
                railVisible: !1,
                railColor: "#333",
                railOpacity: .2,
                railDraggable: !0,
                railClass: "slimScrollRail",
                barClass: "slimScrollBar",
                wrapperClass: "slimScrollDiv",
                allowPageScroll: !1,
                wheelStep: 20,
                touchScrollStep: 200,
                borderRadius: "7px",
                railBorderRadius: "7px"
            },
            i);
            return this.each(function() {
                function o(t) {
                    if (d) {
                        t = t || window.event;
                        var i = 0;
                        t.wheelDelta && (i = -t.wheelDelta / 120),
                        t.detail && (i = t.detail / 3),
                        e(t.target || t.srcTarget || t.srcElement).closest("." + n.wrapperClass).is(y.parent()) && a(i, !0),
                        t.preventDefault && !b && t.preventDefault(),
                        b || (t.returnValue = !1)
                    }
                }
                function a(t, e, i) {
                    b = !1;
                    var o = t,
                    a = y.outerHeight() - S.outerHeight();
                    e && (o = parseInt(S.css("top")) + t * parseInt(n.wheelStep) / 100 * S.outerHeight(), o = Math.min(Math.max(o, 0), a), o = t > 0 ? Math.ceil(o) : Math.floor(o), S.css({
                        top: o + "px"
                    })),
                    v = parseInt(S.css("top")) / (y.outerHeight() - S.outerHeight()),
                    o = v * (y[0].scrollHeight - y.outerHeight()),
                    i && (o = t, t = o / y[0].scrollHeight * y.outerHeight(), t = Math.min(Math.max(t, 0), a), S.css({
                        top: t + "px"
                    })),
                    y.scrollTop(o),
                    y.trigger("slimscrolling", ~~o),
                    c(),
                    u()
                }
                function s() {
                    window.addEventListener ? (this.addEventListener("DOMMouseScroll", o, !1), this.addEventListener("mousewheel", o, !1)) : document.attachEvent("onmousewheel", o)
                }
                function r() {
                    window.removeEventListener ? (this.removeEventListener("DOMMouseScroll", o), this.removeEventListener("mousewheel", o)) : document.detachEvent("onmousewheel", o)
                }
                function l() {
                    g = Math.max(y.outerHeight() / y[0].scrollHeight * y.outerHeight(), 30),
                    S.css({
                        height: g + "px"
                    });
                    var t = g == y.outerHeight() ? "none": "block";
                    S.css({
                        display: t
                    })
                }
                function c() {
                    l(),
                    clearTimeout(p),
                    v == ~~v ? (b = n.allowPageScroll, w != v && y.trigger("slimscroll", 0 == ~~v ? "top": "bottom")) : b = !1,
                    w = v,
                    g >= y.outerHeight() ? b = !0 : (S.stop(!0, !0).fadeIn("fast"), n.railVisible && C.stop(!0, !0).fadeIn("fast"))
                }
                function u() {
                    n.alwaysVisible || (p = setTimeout(function() {
                        n.disableFadeOut && d || h || f || (S.fadeOut("slow"), C.fadeOut("slow"))
                    },
                    1e3))
                }
                var d, h, f, p, m, g, v, w, b = !1,
                y = e(this);
                if (y.parent().hasClass(n.wrapperClass)) {
                    var x = y.scrollTop(),
                    S = y.parent().find("." + n.barClass),
                    C = y.parent().find("." + n.railClass);
                    if (l(), e.isPlainObject(i)) {
                        if ("height" in i && "auto" == i.height) {
                            y.parent().css("height", "auto"),
                            y.css("height", "auto");
                            var k = y.parent().parent().height();
                            y.parent().css("height", k),
                            y.css("height", k)
                        }
                        if ("scrollTo" in i) x = parseInt(n.scrollTo);
                        else if ("scrollBy" in i) x += parseInt(n.scrollBy);
                        else if ("destroy" in i) return r(),
                        S.remove(),
                        C.remove(),
                        void y.unwrap();
                        a(x, !1, !0)
                    }
                } else {
                    n.height = "auto" == i.height ? y.parent().height() : i.height,
                    x = e("<div></div>").addClass(n.wrapperClass).css({
                        position: "relative",
                        overflow: "hidden",
                        width: n.width,
                        height: n.height
                    }),
                    y.css({
                        overflow: "hidden",
                        width: n.width,
                        height: n.height
                    });
                    var C = e("<div></div>").addClass(n.railClass).css({
                        width: n.size,
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        display: n.alwaysVisible && n.railVisible ? "block": "none",
                        "border-radius": n.railBorderRadius,
                        background: n.railColor,
                        opacity: n.railOpacity,
                        zIndex: 90
                    }),
                    S = e("<div></div>").addClass(n.barClass).css({
                        background: n.color,
                        width: n.size,
                        position: "absolute",
                        top: 0,
                        opacity: n.opacity,
                        display: n.alwaysVisible ? "block": "none",
                        "border-radius": n.borderRadius,
                        BorderRadius: n.borderRadius,
                        MozBorderRadius: n.borderRadius,
                        WebkitBorderRadius: n.borderRadius,
                        zIndex: 99
                    }),
                    k = "right" == n.position ? {
                        right: n.distance
                    }: {
                        left: n.distance
                    };
                    C.css(k),
                    S.css(k),
                    y.wrap(x),
                    y.parent().append(S),
                    y.parent().append(C),
                    n.railDraggable && S.bind("mousedown",
                    function(i) {
                        var n = e(document);
                        return f = !0,
                        t = parseFloat(S.css("top")),
                        pageY = i.pageY,
                        n.bind("mousemove.slimscroll",
                        function(e) {
                            currTop = t + e.pageY - pageY,
                            S.css("top", currTop),
                            a(0, S.position().top, !1)
                        }),
                        n.bind("mouseup.slimscroll",
                        function() {
                            f = !1,
                            u(),
                            n.unbind(".slimscroll")
                        }),
                        !1
                    }).bind("selectstart.slimscroll",
                    function(t) {
                        return t.stopPropagation(),
                        t.preventDefault(),
                        !1
                    }),
                    C.hover(function() {
                        c()
                    },
                    function() {
                        u()
                    }),
                    S.hover(function() {
                        h = !0
                    },
                    function() {
                        h = !1
                    }),
                    y.hover(function() {
                        d = !0,
                        c(),
                        u()
                    },
                    function() {
                        d = !1,
                        u()
                    }),
                    y.bind("touchstart",
                    function(t) {
                        t.originalEvent.touches.length && (m = t.originalEvent.touches[0].pageY)
                    }),
                    y.bind("touchmove",
                    function(t) {
                        b || t.originalEvent.preventDefault(),
                        t.originalEvent.touches.length && (a((m - t.originalEvent.touches[0].pageY) / n.touchScrollStep, !0), m = t.originalEvent.touches[0].pageY)
                    }),
                    l(),
                    "bottom" === n.start ? (S.css({
                        top: y.outerHeight() - S.outerHeight()
                    }), a(0, !0)) : "top" !== n.start && (a(e(n.start).position().top, null, !0), n.alwaysVisible || S.hide()),
                    s()
                }
            }),
            this
        }
    }),
    jQuery.fn.extend({
        slimscroll: jQuery.fn.slimScroll
    })
} (jQuery),
!
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"],
    function(i) {
        return e(i, t, t.document, t.Math)
    }) : "undefined" != typeof exports ? module.exports = e(require("jquery"), t, t.document, t.Math) : e(jQuery, t, t.document, t.Math)
} ("undefined" != typeof window ? window: this,
function(t, e, i, n, o) {
    "use strict";
    var a = "fullpage-wrapper",
    s = "." + a,
    r = "fp-scrollable",
    l = "." + r,
    c = ".slimScrollBar",
    u = ".slimScrollRail",
    d = "fp-responsive",
    h = "fp-notransition",
    f = "fp-destroyed",
    p = "fp-enabled",
    m = "fp-viewing",
    g = "active",
    v = "." + g,
    w = ".section",
    b = "fp-section",
    y = "." + b,
    x = y + v,
    S = y + ":first",
    C = y + ":last",
    k = "fp-tableCell",
    T = "." + k,
    L = "fp-nav",
    M = "#" + L,
    F = "fp-tooltip",
    I = "fp-show-active",
    E = ".slide",
    $ = "fp-slide",
    _ = "." + $,
    D = _ + v,
    j = "fp-slides",
    R = "." + j,
    A = "fp-slidesContainer",
    B = "." + A,
    q = "fp-table",
    Y = "fp-slidesNav",
    z = "." + Y,
    O = z + " a",
    H = "fp-controlArrow",
    N = "." + H,
    X = "fp-prev",
    P = "." + X,
    V = H + " " + X,
    U = N + P,
    W = "fp-next",
    K = "." + W,
    Q = H + " " + W,
    Z = N + K,
    G = t(e),
    J = t(i);
    t.fn.fullpage = function(H) {
        function P(t) {
            t.find(R).after('<div class="' + V + '"></div><div class="' + Q + '"></div>'),
            "#fff" != H.controlArrowColor && (t.find(Z).css("border-color", "transparent transparent transparent " + H.controlArrowColor), t.find(U).css("border-color", "transparent " + H.controlArrowColor + " transparent transparent")),
            H.loopHorizontal || t.find(U).hide()
        }
        function W() {
            di.append('<div id="' + L + '"><ul></ul></div>'),
            mi = t(M),
            mi.addClass(function() {
                return H.showActiveTooltip ? I + " " + H.navigationPosition: H.navigationPosition
            });
            for (var e = 0; e < t(y).length; e++) {
                var i = "";
                H.anchors.length && (i = H.anchors[e]);
                var n = '<li><a href="#' + i + '"><span></span></a>',
                o = H.navigationTooltips[e];
                "undefined" != typeof o && "" !== o && (n += '<div class="' + F + " " + H.navigationPosition + '">' + o + "</div>"),
                n += "</li>",
                mi.find("ul").append(n)
            }
        }
        function K() {
            t(y).each(function() {
                var e = t(this).find(_);
                e.length ? e.each(function() {
                    Re(t(this))
                }) : Re(t(this))
            }),
            te()
        }
        function te() {
            var e = t(x);
            e.find(".fp-scrollable").mouseover(),
            t.isFunction(H.afterLoad) && H.afterLoad.call(e, e.data("anchor"), e.index(y) + 1),
            t.isFunction(H.afterRender) && H.afterRender.call(this)
        }
        function ee() {
            var e;
            if (!H.autoScrolling || H.scrollBar) {
                for (var o = G.scrollTop(), a = 0, s = n.abs(o - i.querySelectorAll(y)[0].offsetTop), r = i.querySelectorAll(y), l = 0; l < r.length; ++l) {
                    var c = r[l],
                    u = n.abs(o - c.offsetTop);
                    s > u && (a = l, s = u)
                }
                e = t(r).eq(a)
            }
            if (!H.autoScrolling || H.scrollBar) {
                if (!e.hasClass(g)) {
                    Ii = !0;
                    var d = t(x),
                    h = d.index(y) + 1,
                    f = De(e),
                    p = e.data("anchor"),
                    m = e.index(y) + 1,
                    v = e.find(D);
                    if (v.length) var w = v.data("anchor"),
                    b = v.index();
                    Ci && (e.addClass(g).siblings().removeClass(g), t.isFunction(H.onLeave) && H.onLeave.call(d, h, m, f), t.isFunction(H.afterLoad) && H.afterLoad.call(e, p, m), $e(p, m - 1), H.anchors.length && (fi = p, Pe(b, w, p, m))),
                    clearTimeout(Mi),
                    Mi = setTimeout(function() {
                        Ii = !1
                    },
                    100)
                }
                H.fitToSection && (clearTimeout(Fi), Fi = setTimeout(function() {
                    Ci && (t(x).is(e) && (Si = !0), he(e), Si = !1)
                },
                1e3))
            }
        }
        function ie(t) {
            return t.find(R).length ? t.find(D).find(l) : t.find(l)
        }
        function ne(t, e) {
            if (Ti[t]) {
                var i, n;
                if ("down" == t ? (i = "bottom", n = hi.moveSectionDown) : (i = "top", n = hi.moveSectionUp), e.length > 0) {
                    if (!_e(i, e)) return ! 0;
                    n()
                } else n()
            }
        }
        function oe(e) {
            var i = e.originalEvent;
            if (!ae(e.target) && se(i)) {
                H.autoScrolling && e.preventDefault();
                var o = t(x),
                a = ie(o);
                if (Ci && !vi) {
                    var s = ei(i);
                    _i = s.y,
                    Di = s.x,
                    o.find(R).length && n.abs($i - Di) > n.abs(Ei - _i) ? n.abs($i - Di) > G.width() / 100 * H.touchSensitivity && ($i > Di ? Ti.right && hi.moveSlideRight() : Ti.left && hi.moveSlideLeft()) : H.autoScrolling && n.abs(Ei - _i) > G.height() / 100 * H.touchSensitivity && (Ei > _i ? ne("down", a) : _i > Ei && ne("up", a))
                }
            }
        }
        function ae(e, i) {
            i = i || 0;
            var n = t(e).parent();
            return i < H.normalScrollElementTouchThreshold && n.is(H.normalScrollElements) ? !0 : i == H.normalScrollElementTouchThreshold ? !1 : ae(n, ++i)
        }
        function se(t) {
            return "undefined" == typeof t.pointerType || "mouse" != t.pointerType
        }
        function re(t) {
            var e = t.originalEvent;
            if (H.fitToSection && ui.stop(), se(e)) {
                var i = ei(e);
                Ei = i.y,
                $i = i.x
            }
        }
        function le(t, e) {
            for (var i = 0,
            o = t.slice(n.max(t.length - e, 1)), a = 0; a < o.length; a++) i += o[a];
            return n.ceil(i / e)
        }
        function ce(i) {
            var o = (new Date).getTime();
            if (H.autoScrolling && !gi) {
                i = e.event || i;
                var a = i.wheelDelta || -i.deltaY || -i.detail,
                s = n.max( - 1, n.min(1, a));
                ki.length > 149 && ki.shift(),
                ki.push(n.abs(a)),
                H.scrollBar && (i.preventDefault ? i.preventDefault() : i.returnValue = !1);
                var r = t(x),
                l = ie(r),
                c = o - ji;
                if (ji = o, c > 200 && (ki = []), Ci) {
                    var u = le(ki, 10),
                    d = le(ki, 70),
                    h = u >= d;
                    h && (0 > s ? ne("down", l) : ne("up", l))
                }
                return ! 1
            }
            H.fitToSection && ui.stop()
        }
        function ue(e) {
            var i = t(x),
            n = i.find(R);
            if (n.length && !vi) {
                var o = n.find(D),
                a = null;
                if (a = "prev" === e ? o.prev(_) : o.next(_), !a.length) {
                    if (!H.loopHorizontal) return;
                    a = o.siblings("prev" === e ? ":last": ":first")
                }
                vi = !0,
                Ce(n, a)
            }
        }
        function de() {
            t(D).each(function() {
                ii(t(this), "internal")
            })
        }
        function he(e, i, n) {
            var o = e.position();
            if ("undefined" != typeof o) {
                var a = {
                    element: e,
                    callback: i,
                    isMovementUp: n,
                    dest: o,
                    dtop: o.top,
                    yMovement: De(e),
                    anchorLink: e.data("anchor"),
                    sectionIndex: e.index(y),
                    activeSlide: e.find(D),
                    activeSection: t(x),
                    leavingSection: t(x).index(y) + 1,
                    localIsResizing: Si
                };
                if (! (a.activeSection.is(e) && !Si || H.scrollBar && G.scrollTop() === a.dtop)) {
                    if (a.activeSlide.length) var s = a.activeSlide.data("anchor"),
                    r = a.activeSlide.index();
                    H.autoScrolling && H.continuousVertical && "undefined" != typeof a.isMovementUp && (!a.isMovementUp && "up" == a.yMovement || a.isMovementUp && "down" == a.yMovement) && (a = me(a)),
                    e.addClass(g).siblings().removeClass(g),
                    Ci = !1,
                    Pe(r, s, a.anchorLink, a.sectionIndex),
                    t.isFunction(H.onLeave) && !a.localIsResizing && H.onLeave.call(a.activeSection, a.leavingSection, a.sectionIndex + 1, a.yMovement),
                    fe(a),
                    fi = a.anchorLink,
                    $e(a.anchorLink, a.sectionIndex)
                }
            }
        }
        function fe(e) {
            if (H.css3 && H.autoScrolling && !H.scrollBar) {
                var i = "translate3d(0px, -" + e.dtop + "px, 0px)";
                Ye(i, !0),
                H.scrollingSpeed ? setTimeout(function() {
                    ve(e)
                },
                H.scrollingSpeed) : ve(e)
            } else {
                var n = pe(e);
                t(n.element).animate(n.options, H.scrollingSpeed, H.easing).promise().done(function() {
                    ve(e)
                })
            }
        }
        function pe(t) {
            var e = {};
            return H.autoScrolling && !H.scrollBar ? (e.options = {
                top: -t.dtop
            },
            e.element = s) : (e.options = {
                scrollTop: t.dtop
            },
            e.element = "html, body"),
            e
        }
        function me(e) {
            return e.isMovementUp ? t(x).before(e.activeSection.nextAll(y)) : t(x).after(e.activeSection.prevAll(y).get().reverse()),
            ni(t(x).position().top),
            de(),
            e.wrapAroundElements = e.activeSection,
            e.dest = e.element.position(),
            e.dtop = e.dest.top,
            e.yMovement = De(e.element),
            e
        }
        function ge(e) {
            e.wrapAroundElements && e.wrapAroundElements.length && (e.isMovementUp ? t(S).before(e.wrapAroundElements) : t(C).after(e.wrapAroundElements), ni(t(x).position().top), de())
        }
        function ve(e) {
            ge(e),
            e.element.find(".fp-scrollable").mouseover(),
            t.isFunction(H.afterLoad) && !e.localIsResizing && H.afterLoad.call(e.element, e.anchorLink, e.sectionIndex + 1),
            Ci = !0,
            t.isFunction(e.callback) && e.callback.call(this)
        }
        function we() {
            var t = e.location.hash.replace("#", "").split("/"),
            i = t[0],
            n = t[1];
            i && He(i, n)
        }
        function be() {
            if (!Ii) {
                var t = e.location.hash.replace("#", "").split("/"),
                i = t[0],
                n = t[1];
                if (i.length) {
                    var o = "undefined" == typeof fi,
                    a = "undefined" == typeof fi && "undefined" == typeof n && !vi; (i && i !== fi && !o || a || !vi && pi != n) && He(i, n)
                }
            }
        }
        function ye(e) {
            clearTimeout(Ri),
            gi = e.ctrlKey;
            var n = t(i.activeElement);
            if (!n.is("textarea") && !n.is("input") && !n.is("select") && H.keyboardScrolling && H.autoScrolling) {
                var o = e.which,
                a = [40, 38, 32, 33, 34];
                t.inArray(o, a) > -1 && e.preventDefault(),
                Ri = setTimeout(function() {
                    xe(e)
                },
                150)
            }
        }
        function xe(e) {
            var i = e.shiftKey;
            switch (e.which) {
            case 38:
            case 33:
                hi.moveSectionUp();
                break;
            case 32:
                if (i) {
                    hi.moveSectionUp();
                    break
                }
            case 40:
            case 34:
                hi.moveSectionDown();
                break;
            case 36:
                hi.moveTo(1);
                break;
            case 35:
                hi.moveTo(t(y).length);
                break;
            case 37:
                hi.moveSlideLeft();
                break;
            case 39:
                hi.moveSlideRight();
                break;
            default:
                return
            }
        }
        function Se(t) {
            Ci && (t.pageY < Ai ? hi.moveSectionUp() : t.pageY > Ai && hi.moveSectionDown()),
            Ai = t.pageY
        }
        function Ce(e, i) {
            var o = i.position(),
            a = i.index(),
            s = e.closest(y),
            r = s.index(y),
            l = s.data("anchor"),
            c = s.find(z),
            u = Ue(i),
            d = Si;
            if (H.onSlideLeave) {
                var h = s.find(D),
                f = h.index(),
                p = je(f, a);
                d || "none" === p || t.isFunction(H.onSlideLeave) && H.onSlideLeave.call(h, l, r + 1, f, p)
            }
            i.addClass(g).siblings().removeClass(g),
            !H.loopHorizontal && H.controlArrows && (s.find(U).toggle(0 !== a), s.find(Z).toggle(!i.is(":last-child"))),
            s.hasClass(g) && Pe(a, u, l, r);
            var m = function() {
                d || t.isFunction(H.afterSlideLoad) && H.afterSlideLoad.call(i, l, r + 1, u, a),
                vi = !1
            };
            if (H.css3) {
                var w = "translate3d(-" + n.round(o.left) + "px, 0px, 0px)";
                Le(e.find(B), H.scrollingSpeed > 0).css(oi(w)),
                setTimeout(function() {
                    m()
                },
                H.scrollingSpeed, H.easing)
            } else e.animate({
                scrollLeft: n.round(o.left)
            },
            H.scrollingSpeed, H.easing,
            function() {
                m()
            });
            c.find(v).removeClass(g),
            c.find("li").eq(a).find("a").addClass(g)
        }
        function ke() {
            if (Te(), wi) {
                var e = t(i.activeElement);
                if (!e.is("textarea") && !e.is("input") && !e.is("select")) {
                    var o = G.height();
                    n.abs(o - qi) > 20 * n.max(qi, o) / 100 && (hi.reBuild(!0), qi = o)
                }
            } else clearTimeout(Bi),
            Bi = setTimeout(function() {
                hi.reBuild(!0)
            },
            350)
        }
        function Te() {
            if (H.responsive) {
                var e = yi.hasClass(d);
                G.width() < H.responsive ? e || (hi.setAutoScrolling(!1, "internal"), hi.setFitToSection(!1, "internal"), t(M).hide(), yi.addClass(d)) : e && (hi.setAutoScrolling(Li.autoScrolling, "internal"), hi.setFitToSection(Li.autoScrolling, "internal"), t(M).show(), yi.removeClass(d))
            }
        }
        function Le(t) {
            var e = "all " + H.scrollingSpeed + "ms " + H.easingcss3;
            return t.removeClass(h),
            t.css({
                "-webkit-transition": e,
                transition: e
            })
        }
        function Me(t) {
            return t.addClass(h)
        }
        function Fe(t, e) {
            var i = 825,
            o = 900;
            if (i > t || o > e) {
                var a = 100 * t / i,
                s = 100 * e / o,
                r = n.min(a, s),
                l = r.toFixed(2);
                di.css("font-size", l + "%")
            } else di.css("font-size", "100%")
        }
        function Ie(e, i) {
            H.navigation && (t(M).find(v).removeClass(g), e ? t(M).find('a[href="#' + e + '"]').addClass(g) : t(M).find("li").eq(i).find("a").addClass(g))
        }
        function Ee(e) {
            H.menu && (t(H.menu).find(v).removeClass(g), t(H.menu).find('[data-menuanchor="' + e + '"]').addClass(g))
        }
        function $e(t, e) {
            Ee(t),
            Ie(t, e)
        }
        function _e(t, e) {
            return "top" === t ? !e.scrollTop() : "bottom" === t ? e.scrollTop() + 1 + e.innerHeight() >= e[0].scrollHeight: void 0
        }
        function De(e) {
            var i = t(x).index(y),
            n = e.index(y);
            return i == n ? "none": i > n ? "up": "down"
        }
        function je(t, e) {
            return t == e ? "none": t > e ? "left": "right"
        }
        function Re(t) {
            t.css("overflow", "hidden");
            var e, i = t.closest(y),
            n = t.find(l);
            n.length ? e = n.get(0).scrollHeight: (e = t.get(0).scrollHeight, H.verticalCentered && (e = t.find(T).get(0).scrollHeight));
            var o = xi - parseInt(i.css("padding-bottom")) - parseInt(i.css("padding-top"));
            e > o ? n.length ? n.css("height", o + "px").parent().css("height", o + "px") : (H.verticalCentered ? t.find(T).wrapInner('<div class="' + r + '" />') : t.wrapInner('<div class="' + r + '" />'), t.find(l).slimScroll({
                allowPageScroll: !0,
                height: o + "px",
                size: "10px",
                alwaysVisible: !0
            })) : Ae(t),
            t.css("overflow", "")
        }
        function Ae(t) {
            t.find(l).children().first().unwrap().unwrap(),
            t.find(c).remove(),
            t.find(u).remove()
        }
        function Be(t) {
            t.addClass(q).wrapInner('<div class="' + k + '" style="height:' + qe(t) + 'px;" />')
        }
        function qe(t) {
            var e = xi;
            if (H.paddingTop || H.paddingBottom) {
                var i = t;
                i.hasClass(b) || (i = t.closest(y));
                var n = parseInt(i.css("padding-top")) + parseInt(i.css("padding-bottom"));
                e = xi - n
            }
            return e
        }
        function Ye(t, e) {
            e ? Le(yi) : Me(yi),
            yi.css(oi(t)),
            setTimeout(function() {
                yi.removeClass(h)
            },
            10)
        }
        function ze(e) {
            var i = t(y + '[data-anchor="' + e + '"]');
            return i.length || (i = t(y).eq(e - 1)),
            i
        }
        function Oe(t, e) {
            var i = e.find(R),
            n = i.find(_ + '[data-anchor="' + t + '"]');
            return n.length || (n = i.find(_).eq(t)),
            n
        }
        function He(t, e) {
            var i = ze(t);
            "undefined" == typeof e && (e = 0),
            t === fi || i.hasClass(g) ? Ne(i, e) : he(i,
            function() {
                Ne(i, e)
            })
        }
        function Ne(t, e) {
            if ("undefined" != typeof e) {
                var i = t.find(R),
                n = Oe(e, t);
                n.length && Ce(i, n)
            }
        }
        function Xe(t, e) {
            t.append('<div class="' + Y + '"><ul></ul></div>');
            var i = t.find(z);
            i.addClass(H.slidesNavPosition);
            for (var n = 0; e > n; n++) i.find("ul").append('<li><a href="#"><span></span></a></li>');
            i.css("margin-left", "-" + i.width() / 2 + "px"),
            i.find("li").first().find("a").addClass(g)
        }
        function Pe(t, e, i) {
            var n = "";
            H.anchors.length && (t ? ("undefined" != typeof i && (n = i), "undefined" == typeof e && (e = t), pi = e, Ve(n + "/" + e)) : "undefined" != typeof t ? (pi = e, Ve(i)) : Ve(i)),
            We()
        }
        function Ve(t) {
            if (H.recordHistory) location.hash = t;
            else if (wi || bi) history.replaceState(o, o, "#" + t);
            else {
                var i = e.location.href.split("#")[0];
                e.location.replace(i + "#" + t)
            }
        }
        function Ue(t) {
            var e = t.data("anchor"),
            i = t.index();
            return "undefined" == typeof e && (e = i),
            e
        }
        function We() {
            var e = t(x),
            i = e.find(D),
            n = e.data("anchor"),
            o = Ue(i),
            a = e.index(y),
            s = String(a);
            H.anchors.length && (s = n),
            i.length && (s = s + "-" + o),
            s = s.replace("/", "-").replace("#", "");
            var r = new RegExp("\\b\\s?" + m + "-[^\\s]+\\b", "g");
            di[0].className = di[0].className.replace(r, ""),
            di.addClass(m + "-" + s)
        }
        function Ke() {
            var t, n = i.createElement("p"),
            a = {
                webkitTransform: "-webkit-transform",
                OTransform: "-o-transform",
                msTransform: "-ms-transform",
                MozTransform: "-moz-transform",
                transform: "transform"
            };
            i.body.insertBefore(n, null);
            for (var s in a) n.style[s] !== o && (n.style[s] = "translate3d(1px,1px,1px)", t = e.getComputedStyle(n).getPropertyValue(a[s]));
            return i.body.removeChild(n),
            t !== o && t.length > 0 && "none" !== t
        }
        function Qe() {
            i.addEventListener ? (i.removeEventListener("mousewheel", ce, !1), i.removeEventListener("wheel", ce, !1)) : i.detachEvent("onmousewheel", ce)
        }
        function Ze() {
            i.addEventListener ? (i.addEventListener("mousewheel", ce, !1), i.addEventListener("wheel", ce, !1)) : i.attachEvent("onmousewheel", ce)
        }
        function Ge() {
            if (wi || bi) {
                var e = ti();
                t(s).off("touchstart " + e.down).on("touchstart " + e.down, re),
                t(s).off("touchmove " + e.move).on("touchmove " + e.move, oe)
            }
        }
        function Je() {
            if (wi || bi) {
                var e = ti();
                t(s).off("touchstart " + e.down),
                t(s).off("touchmove " + e.move)
            }
        }
        function ti() {
            var t;
            return t = e.PointerEvent ? {
                down: "pointerdown",
                move: "pointermove"
            }: {
                down: "MSPointerDown",
                move: "MSPointerMove"
            }
        }
        function ei(t) {
            var e = [];
            return e.y = "undefined" != typeof t.pageY && (t.pageY || t.pageX) ? t.pageY: t.touches[0].pageY,
            e.x = "undefined" != typeof t.pageX && (t.pageY || t.pageX) ? t.pageX: t.touches[0].pageX,
            bi && se(t) && (e.y = t.touches[0].pageY, e.x = t.touches[0].pageX),
            e
        }
        function ii(t, e) {
            hi.setScrollingSpeed(0, "internal"),
            "undefined" != typeof e && (Si = !0),
            Ce(t.closest(R), t),
            "undefined" != typeof e && (Si = !1),
            hi.setScrollingSpeed(Li.scrollingSpeed, "internal")
        }
        function ni(t) {
            if (H.scrollBar) yi.scrollTop(t);
            else if (H.css3) {
                var e = "translate3d(0px, -" + t + "px, 0px)";
                Ye(e, !1)
            } else yi.css("top", -t)
        }
        function oi(t) {
            return {
                "-webkit-transform": t,
                "-moz-transform": t,
                "-ms-transform": t,
                transform: t
            }
        }
        function ai(t, e) {
            switch (e) {
            case "up":
                Ti.up = t;
                break;
            case "down":
                Ti.down = t;
                break;
            case "left":
                Ti.left = t;
                break;
            case "right":
                Ti.right = t;
                break;
            case "all":
                hi.setAllowScrolling(t)
            }
        }
        function si() {
            ni(0),
            t(M + ", " + z + ", " + N).remove(),
            t(y).css({
                height: "",
                "background-color": "",
                padding: ""
            }),
            t(_).css({
                width: ""
            }),
            yi.css({
                height: "",
                position: "",
                "-ms-touch-action": "",
                "touch-action": ""
            }),
            t(y + ", " + _).each(function() {
                Ae(t(this)),
                t(this).removeClass(q + " " + g)
            }),
            Me(yi),
            yi.find(T + ", " + B + ", " + R).each(function() {
                t(this).replaceWith(this.childNodes)
            }),
            ui.scrollTop(0)
        }
        function ri(t, e, i) {
            H[t] = e,
            "internal" !== i && (Li[t] = e)
        }
        function li() {
            H.continuousVertical && (H.loopTop || H.loopBottom) && (H.continuousVertical = !1, ci("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
            H.continuousVertical && H.scrollBar && (H.continuousVertical = !1, ci("warn", "Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
            t.each(H.anchors,
            function(e, i) { (t("#" + i).length || t('[name="' + i + '"]').length) && ci("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")
            })
        }
        function ci(t, e) {
            console && console[t] && console[t]("fullPage: " + e)
        }
        var ui = t("html, body"),
        di = t("body"),
        hi = t.fn.fullpage;
        H = t.extend({
            menu: !1,
            anchors: [],
            navigation: !1,
            navigationPosition: "right",
            navigationTooltips: [],
            showActiveTooltip: !1,
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            scrollBar: !1,
            css3: !0,
            scrollingSpeed: 700,
            autoScrolling: !0,
            fitToSection: !0,
            easing: "easeInOutCubic",
            easingcss3: "ease",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            continuousVertical: !1,
            normalScrollElements: null,
            scrollOverflow: !1,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            keyboardScrolling: !0,
            animateAnchor: !0,
            recordHistory: !0,
            controlArrows: !0,
            controlArrowColor: "#fff",
            verticalCentered: !0,
            resize: !1,
            sectionsColor: [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0,
            sectionSelector: w,
            slideSelector: E,
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null
        },
        H),
        li(),
        t.extend(t.easing, {
            easeInOutCubic: function(t, e, i, n, o) {
                return (e /= o / 2) < 1 ? n / 2 * e * e * e + i: n / 2 * ((e -= 2) * e * e + 2) + i
            }
        }),
        t.extend(t.easing, {
            easeInQuart: function(t, e, i, n, o) {
                return n * (e /= o) * e * e * e + i
            }
        }),
        hi.setAutoScrolling = function(e, i) {
            ri("autoScrolling", e, i);
            var n = t(x);
            H.autoScrolling && !H.scrollBar ? (ui.css({
                overflow: "hidden",
                height: "100%"
            }), hi.setRecordHistory(H.recordHistory, "internal"), yi.css({
                "-ms-touch-action": "none",
                "touch-action": "none"
            }), n.length && ni(n.position().top)) : (ui.css({
                overflow: "visible",
                height: "initial"
            }), hi.setRecordHistory(!1, "internal"), yi.css({
                "-ms-touch-action": "",
                "touch-action": ""
            }), ni(0), n.length && ui.scrollTop(n.position().top))
        },
        hi.setRecordHistory = function(t, e) {
            ri("recordHistory", t, e)
        },
        hi.setScrollingSpeed = function(t, e) {
            ri("scrollingSpeed", t, e)
        },
        hi.setFitToSection = function(t, e) {
            ri("fitToSection", t, e)
        },
        hi.setMouseWheelScrolling = function(t) {
            t ? Ze() : Qe()
        },
        hi.setAllowScrolling = function(e, i) {
            "undefined" != typeof i ? (i = i.replace(/ /g, "").split(","), t.each(i,
            function(t, i) {
                ai(e, i)
            })) : e ? (hi.setMouseWheelScrolling(!0), Ge()) : (hi.setMouseWheelScrolling(!1), Je())
        },
        hi.setKeyboardScrolling = function(t) {
            H.keyboardScrolling = t
        },
        hi.moveSectionUp = function() {
            var e = t(x).prev(y);
            e.length || !H.loopTop && !H.continuousVertical || (e = t(y).last()),
            e.length && he(e, null, !0)
        },
        hi.moveSectionDown = function() {
            var e = t(x).next(y);
            e.length || !H.loopBottom && !H.continuousVertical || (e = t(y).first()),
            e.length && he(e, null, !1)
        },
        hi.silentMoveTo = function(t, e) {
            hi.setScrollingSpeed(0, "internal"),
            hi.moveTo(t, e),
            hi.setScrollingSpeed(Li.scrollingSpeed, "internal")
        },
        hi.moveTo = function(t, e) {
            var i = ze(t);
            "undefined" != typeof e ? He(t, e) : i.length > 0 && he(i)
        },
        hi.moveSlideRight = function() {
            ue("next")
        },
        hi.moveSlideLeft = function() {
            ue("prev")
        },
        hi.reBuild = function(e) {
            if (!yi.hasClass(f)) {
                Si = !0;
                var i = G.width();
                xi = G.height(),
                H.resize && Fe(xi, i),
                t(y).each(function() {
                    var e = t(this).find(R),
                    i = t(this).find(_);
                    H.verticalCentered && t(this).find(T).css("height", qe(t(this)) + "px"),
                    t(this).css("height", xi + "px"),
                    H.scrollOverflow && (i.length ? i.each(function() {
                        Re(t(this))
                    }) : Re(t(this))),
                    i.length > 1 && Ce(e, e.find(D))
                });
                var n = t(x),
                o = n.index(y);
                o && hi.silentMoveTo(o + 1),
                Si = !1,
                t.isFunction(H.afterResize) && e && H.afterResize.call(yi),
                t.isFunction(H.afterReBuild) && !e && H.afterReBuild.call(yi)
            }
        };
        var fi, pi, mi, gi, vi = !1,
        wi = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
        bi = "ontouchstart" in e || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
        yi = t(this),
        xi = G.height(),
        Si = !1,
        Ci = !0,
        ki = [],
        Ti = {
            up: !0,
            down: !0,
            left: !0,
            right: !0
        },
        Li = t.extend(!0, {},
        H);
        t(this).length ? (yi.css({
            height: "100%",
            position: "relative"
        }), yi.addClass(a), t("html").addClass(p)) : ci("error", "Error! Fullpage.js needs to be initialized with a selector. For example: $('#myContainer').fullpage();"),
        H.css3 && (H.css3 = Ke()),
        hi.setAllowScrolling(!0),
        yi.removeClass(f),
        t(H.sectionSelector).each(function() {
            t(this).addClass(b)
        }),
        t(H.slideSelector).each(function() {
            t(this).addClass($)
        }),
        H.navigation && W(),
        t(y).each(function(e) {
            var i = t(this),
            n = t(this).find(_),
            o = n.length;
            if (e || 0 !== t(x).length || t(this).addClass(g), t(this).css("height", xi + "px"), H.paddingTop && t(this).css("padding-top", H.paddingTop), H.paddingBottom && t(this).css("padding-bottom", H.paddingBottom), "undefined" != typeof H.sectionsColor[e] && t(this).css("background-color", H.sectionsColor[e]), "undefined" != typeof H.anchors[e] && (t(this).attr("data-anchor", H.anchors[e]), t(this).hasClass(g) && $e(H.anchors[e], e)), o > 0) {
                var a = 100 * o,
                s = 100 / o;
                n.wrapAll('<div class="' + A + '" />'),
                n.parent().wrap('<div class="' + j + '" />'),
                t(this).find(B).css("width", a + "%"),
                H.controlArrows && o > 1 && P(t(this)),
                H.slidesNavigation && Xe(t(this), o),
                n.each(function() {
                    t(this).css("width", s + "%"),
                    H.verticalCentered && Be(t(this))
                });
                var r = i.find(D);
                r.length ? ii(r) : n.eq(0).addClass(g)
            } else H.verticalCentered && Be(t(this))
        }).promise().done(function() {
            hi.setAutoScrolling(H.autoScrolling, "internal");
            var n = t(x).find(D);
            if (n.length && (0 !== t(x).index(y) || 0 === t(x).index(y) && 0 !== n.index()) && ii(n), H.fixedElements && H.css3 && t(H.fixedElements).appendTo(di), H.navigation && (mi.css("margin-top", "-" + mi.height() / 2 + "px"), mi.find("li").eq(t(x).index(y)).find("a").addClass(g)), H.menu && H.css3 && t(H.menu).closest(s).length && t(H.menu).appendTo(di), H.scrollOverflow ? ("complete" === i.readyState && K(), G.on("load", K)) : te(), Te(), !H.animateAnchor) {
                var o = e.location.hash.replace("#", "").split("/"),
                a = o[0];
                if (a.length) {
                    var r = t('[data-anchor="' + a + '"]');
                    r.length && (H.autoScrolling ? ni(r.position().top) : (ni(0), ui.scrollTop(r.position().top)), $e(a, null), t.isFunction(H.afterLoad) && H.afterLoad.call(r, a, r.index(y) + 1), r.addClass(g).siblings().removeClass(g))
                }
            }
            We(),
            G.on("load",
            function() {
                we()
            })
        });
        var Mi, Fi, Ii = !1;
        G.on("scroll", ee);
        var Ei = 0,
        $i = 0,
        _i = 0,
        Di = 0,
        ji = (new Date).getTime();
        G.on("hashchange", be),
        J.keydown(ye),
        J.keyup(function(t) {
            gi = t.ctrlKey
        });
        var Ri;
        yi.mousedown(function(t) {
            2 == t.which && (Ai = t.pageY, yi.on("mousemove", Se))
        }),
        yi.mouseup(function(t) {
            2 == t.which && yi.off("mousemove")
        });
        var Ai = 0;
        J.on("click touchstart", M + " a",
        function(e) {
            e.preventDefault();
            var i = t(this).parent().index();
            he(t(y).eq(i))
        }),
        J.on("click touchstart", O,
        function(e) {
            e.preventDefault();
            var i = t(this).closest(y).find(R),
            n = i.find(_).eq(t(this).closest("li").index());
            Ce(i, n)
        }),
        H.normalScrollElements && (J.on("mouseenter", H.normalScrollElements,
        function() {
            hi.setMouseWheelScrolling(!1)
        }), J.on("mouseleave", H.normalScrollElements,
        function() {
            hi.setMouseWheelScrolling(!0)
        })),
        t(y).on("click touchstart", N,
        function() {
            t(this).hasClass(X) ? Ti.left && hi.moveSlideLeft() : Ti.right && hi.moveSlideRight()
        }),
        G.resize(ke);
        var Bi, qi = xi;
        hi.destroy = function(e) {
            hi.setAutoScrolling(!1, "internal"),
            hi.setAllowScrolling(!1),
            hi.setKeyboardScrolling(!1),
            yi.addClass(f),
            G.off("scroll", ee).off("hashchange", be).off("resize", ke),
            J.off("click", M + " a").off("mouseenter", M + " li").off("mouseleave", M + " li").off("click", O).off("mouseover", H.normalScrollElements).off("mouseout", H.normalScrollElements),
            t(y).off("click", N),
            e && si()
        }
    }
}),
!
function(t, e, i, n) {
    "use strict";
    function o(e, i) {
        this.element = e,
        this.$context = t(e).data("api", this),
        this.$layers = this.$context.find(".layer");
        var n = {
            calibrateX: this.$context.data("calibrate-x") || null,
            calibrateY: this.$context.data("calibrate-y") || null,
            invertX: this.$context.data("invert-x") || null,
            invertY: this.$context.data("invert-y") || null,
            limitX: parseFloat(this.$context.data("limit-x")) || null,
            limitY: parseFloat(this.$context.data("limit-y")) || null,
            scalarX: parseFloat(this.$context.data("scalar-x")) || null,
            scalarY: parseFloat(this.$context.data("scalar-y")) || null,
            frictionX: parseFloat(this.$context.data("friction-x")) || null,
            frictionY: parseFloat(this.$context.data("friction-y")) || null,
            originX: parseFloat(this.$context.data("origin-x")) || null,
            originY: parseFloat(this.$context.data("origin-y")) || null
        };
        for (var o in n) null === n[o] && delete n[o];
        t.extend(this, r, i, n),
        this.calibrationTimer = null,
        this.calibrationFlag = !0,
        this.enabled = !1,
        this.depths = [],
        this.raf = null,
        this.bounds = null,
        this.ex = 0,
        this.ey = 0,
        this.ew = 0,
        this.eh = 0,
        this.ecx = 0,
        this.ecy = 0,
        this.erx = 0,
        this.ery = 0,
        this.cx = 0,
        this.cy = 0,
        this.ix = 0,
        this.iy = 0,
        this.mx = 0,
        this.my = 0,
        this.vx = 0,
        this.vy = 0,
        this.onMouseMove = this.onMouseMove.bind(this),
        this.onDeviceOrientation = this.onDeviceOrientation.bind(this),
        this.onOrientationTimer = this.onOrientationTimer.bind(this),
        this.onCalibrationTimer = this.onCalibrationTimer.bind(this),
        this.onAnimationFrame = this.onAnimationFrame.bind(this),
        this.onWindowResize = this.onWindowResize.bind(this),
        this.initialise()
    }
    var a = "parallax",
    s = 30,
    r = {
        relativeInput: !1,
        clipRelativeInput: !1,
        calibrationThreshold: 100,
        calibrationDelay: 500,
        supportDelay: 500,
        calibrateX: !1,
        calibrateY: !0,
        invertX: !0,
        invertY: !0,
        limitX: !1,
        limitY: !1,
        scalarX: 10,
        scalarY: 10,
        frictionX: .1,
        frictionY: .1,
        originX: .5,
        originY: .5
    };
    o.prototype.transformSupport = function(t) {
        for (var o = i.createElement("div"), a = !1, s = null, r = !1, l = null, c = null, u = 0, d = this.vendors.length; d > u; u++) if (null !== this.vendors[u] ? (l = this.vendors[u][0] + "transform", c = this.vendors[u][1] + "Transform") : (l = "transform", c = "transform"), o.style[c] !== n) {
            a = !0;
            break
        }
        switch (t) {
        case "2D":
            r = a;
            break;
        case "3D":
            if (a) {
                var h = i.body || i.createElement("body"),
                f = i.documentElement,
                p = f.style.overflow;
                i.body || (f.style.overflow = "hidden", f.appendChild(h), h.style.overflow = "hidden", h.style.background = ""),
                h.appendChild(o),
                o.style[c] = "translate3d(1px,1px,1px)",
                s = e.getComputedStyle(o).getPropertyValue(l),
                r = s !== n && s.length > 0 && "none" !== s,
                f.style.overflow = p,
                h.removeChild(o)
            }
        }
        return r
    },
    o.prototype.ww = null,
    o.prototype.wh = null,
    o.prototype.wcx = null,
    o.prototype.wcy = null,
    o.prototype.wrx = null,
    o.prototype.wry = null,
    o.prototype.portrait = null,
    o.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),
    o.prototype.vendors = [null, ["-webkit-", "webkit"], ["-moz-", "Moz"], ["-o-", "O"], ["-ms-", "ms"]],
    o.prototype.motionSupport = !!e.DeviceMotionEvent,
    o.prototype.orientationSupport = !!e.DeviceOrientationEvent,
    o.prototype.orientationStatus = 0,
    o.prototype.transform2DSupport = o.prototype.transformSupport("2D"),
    o.prototype.transform3DSupport = o.prototype.transformSupport("3D"),
    o.prototype.propertyCache = {},
    o.prototype.initialise = function() {
        "static" === this.$context.css("position") && this.$context.css({
            position: "relative"
        }),
        this.accelerate(this.$context),
        this.updateLayers(),
        this.updateDimensions(),
        this.enable(),
        this.queueCalibration(this.calibrationDelay)
    },
    o.prototype.updateLayers = function() {
        this.$layers = this.$context.find(".layer"),
        this.depths = [],
        this.$layers.css({
            position: "absolute",
            display: "block",
            left: 0,
            top: 0
        }),
        this.$layers.first().css({
            position: "relative"
        }),
        this.accelerate(this.$layers),
        this.$layers.each(t.proxy(function(e, i) {
            this.depths.push(t(i).data("depth") || 0)
        },
        this))
    },
    o.prototype.updateDimensions = function() {
        this.ww = e.innerWidth,
        this.wh = e.innerHeight,
        this.wcx = this.ww * this.originX,
        this.wcy = this.wh * this.originY,
        this.wrx = Math.max(this.wcx, this.ww - this.wcx),
        this.wry = Math.max(this.wcy, this.wh - this.wcy)
    },
    o.prototype.updateBounds = function() {
        this.bounds = this.element.getBoundingClientRect(),
        this.ex = this.bounds.left,
        this.ey = this.bounds.top,
        this.ew = this.bounds.width,
        this.eh = this.bounds.height,
        this.ecx = this.ew * this.originX,
        this.ecy = this.eh * this.originY,
        this.erx = Math.max(this.ecx, this.ew - this.ecx),
        this.ery = Math.max(this.ecy, this.eh - this.ecy)
    },
    o.prototype.queueCalibration = function(t) {
        clearTimeout(this.calibrationTimer),
        this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
    },
    o.prototype.enable = function() {
        this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = null, e.addEventListener("deviceorientation", this.onDeviceOrientation), setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0, this.cy = 0, this.portrait = !1, e.addEventListener("mousemove", this.onMouseMove)), e.addEventListener("resize", this.onWindowResize), this.raf = requestAnimationFrame(this.onAnimationFrame))
    },
    o.prototype.disable = function() {
        this.enabled && (this.enabled = !1, this.orientationSupport ? e.removeEventListener("deviceorientation", this.onDeviceOrientation) : e.removeEventListener("mousemove", this.onMouseMove), e.removeEventListener("resize", this.onWindowResize), cancelAnimationFrame(this.raf))
    },
    o.prototype.calibrate = function(t, e) {
        this.calibrateX = t === n ? this.calibrateX: t,
        this.calibrateY = e === n ? this.calibrateY: e
    },
    o.prototype.invert = function(t, e) {
        this.invertX = t === n ? this.invertX: t,
        this.invertY = e === n ? this.invertY: e
    },
    o.prototype.friction = function(t, e) {
        this.frictionX = t === n ? this.frictionX: t,
        this.frictionY = e === n ? this.frictionY: e
    },
    o.prototype.scalar = function(t, e) {
        this.scalarX = t === n ? this.scalarX: t,
        this.scalarY = e === n ? this.scalarY: e
    },
    o.prototype.limit = function(t, e) {
        this.limitX = t === n ? this.limitX: t,
        this.limitY = e === n ? this.limitY: e
    },
    o.prototype.origin = function(t, e) {
        this.originX = t === n ? this.originX: t,
        this.originY = e === n ? this.originY: e
    },
    o.prototype.clamp = function(t, e, i) {
        return t = Math.max(t, e),
        t = Math.min(t, i)
    },
    o.prototype.css = function(e, i, o) {
        var a = this.propertyCache[i];
        if (!a) for (var s = 0,
        r = this.vendors.length; r > s; s++) if (a = null !== this.vendors[s] ? t.camelCase(this.vendors[s][1] + "-" + i) : i, e.style[a] !== n) {
            this.propertyCache[i] = a;
            break
        }
        e.style[a] = o
    },
    o.prototype.accelerate = function(t) {
        for (var e = 0,
        i = t.length; i > e; e++) {
            var n = t[e];
            this.css(n, "transform", "translate3d(0,0,0)"),
            this.css(n, "transform-style", "preserve-3d"),
            this.css(n, "backface-visibility", "hidden")
        }
    },
    o.prototype.setPosition = function(t, e, i) {
        e += "px",
        i += "px",
        this.transform3DSupport ? this.css(t, "transform", "translate3d(" + e + "," + i + ",0)") : this.transform2DSupport ? this.css(t, "transform", "translate(" + e + "," + i + ")") : (t.style.left = e, t.style.top = i)
    },
    o.prototype.onOrientationTimer = function() {
        this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, this.enable())
    },
    o.prototype.onCalibrationTimer = function() {
        this.calibrationFlag = !0
    },
    o.prototype.onWindowResize = function() {
        this.updateDimensions()
    },
    o.prototype.onAnimationFrame = function() {
        this.updateBounds();
        var t = this.ix - this.cx,
        e = this.iy - this.cy; (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0),
        this.portrait ? (this.mx = this.calibrateX ? e: this.iy, this.my = this.calibrateY ? t: this.ix) : (this.mx = this.calibrateX ? t: this.ix, this.my = this.calibrateY ? e: this.iy),
        this.mx *= this.ew * (this.scalarX / 100),
        this.my *= this.eh * (this.scalarY / 100),
        isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)),
        isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)),
        this.vx += (this.mx - this.vx) * this.frictionX,
        this.vy += (this.my - this.vy) * this.frictionY;
        for (var i = 0,
        n = this.$layers.length; n > i; i++) {
            var o = this.depths[i],
            a = this.$layers[i],
            s = this.vx * o * (this.invertX ? -1 : 1),
            r = this.vy * o * (this.invertY ? -1 : 1);
            this.setPosition(a, s, r)
        }
        this.raf = requestAnimationFrame(this.onAnimationFrame)
    },
    o.prototype.onDeviceOrientation = function(t) {
        if (!this.desktop && null !== t.beta && null !== t.gamma) {
            this.orientationStatus = 1;
            var i = (t.beta || 0) / s,
            n = (t.gamma || 0) / s,
            o = e.innerHeight > e.innerWidth;
            this.portrait !== o && (this.portrait = o, this.calibrationFlag = !0),
            this.calibrationFlag && (this.calibrationFlag = !1, this.cx = i, this.cy = n),
            this.ix = i,
            this.iy = n
        }
    },
    o.prototype.onMouseMove = function(t) {
        var e = t.clientX,
        i = t.clientY; ! this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.ex), e = Math.min(e, this.ex + this.ew), i = Math.max(i, this.ey), i = Math.min(i, this.ey + this.eh)), this.ix = (e - this.ex - this.ecx) / this.erx, this.iy = (i - this.ey - this.ecy) / this.ery) : (this.ix = (e - this.wcx) / this.wrx, this.iy = (i - this.wcy) / this.wry)
    };
    var l = {
        enable: o.prototype.enable,
        disable: o.prototype.disable,
        updateLayers: o.prototype.updateLayers,
        calibrate: o.prototype.calibrate,
        friction: o.prototype.friction,
        invert: o.prototype.invert,
        scalar: o.prototype.scalar,
        limit: o.prototype.limit,
        origin: o.prototype.origin
    };
    t.fn[a] = function(e) {
        var i = arguments;
        return this.each(function() {
            var n = t(this),
            s = n.data(a);
            s || (s = new o(this, e), n.data(a, s)),
            l[e] && s[e].apply(s, Array.prototype.slice.call(i, 1))
        })
    }
} (window.jQuery || window.Zepto, window, document),
function() {
    for (var t = 0,
    e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"],
    window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
        var i = (new Date).getTime(),
        n = Math.max(0, 16 - (i - t)),
        o = window.setTimeout(function() {
            e(i + n)
        },
        n);
        return t = i + n,
        o
    }),
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
        clearTimeout(t)
    })
} (),
!
function() {
    var t = {},
    e = {};
    t.context = function(t, i) {
        var n = arguments.length;
        if (n > 1) e[t] = i;
        else if (1 == n) {
            if ("object" != typeof t) return e[t];
            for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
        }
    },
    "F" in window || (window.F = t)
} (),
define("login",
function(t, e) {
    function i() {
        window.location.reload(!0)
    }
    function n() {
        s.fire("login.log")
    }
    function o() {}
    var a = T = t("common:widget/js/util/tangram/tangram.js"),
    s = t("common:widget/js/util/event/event.js"),
    r = t("common:widget/js/util/uri/uri.js"),
    l = t("common:widget/js/ui/dialog/dialog.js"),
    c = null,
    u = !1,
    d = new Date,
    h = "http://passport.bdimg.com/passApi/js/uni_login_wrapper.js?cdnversion=" + d.getFullYear() + d.getMonth() + d.getDate() + d.getHours() + d.getMinutes(),
    f = "/api/loginInfo",
    p = {
        registerLink: "https://passport.baidu.com/v2/?reg&tpl=ik&color=green&u=" + escape(top.location.href),
        onLoginSuccess: i,
        onLoginFailure: n,
        onSubmitedErr: o,
        cache: !0,
        tangram: !0,
        color: "green",
        apiOpt: {
            product: "ik",
            charset: "UTF-8",
            u: window.top.location.href,
            staticPage: "http://zhidao.baidu.com" + r.v3Jump
        },
        onshow: function() {}
    };
    p.authsite = ["tsina", "renren", "tqq", "fetion"],
    p.authsiteCfg = {
        tpl: "ik",
        display: "popup",
        u: window.top.location.href,
        jumpUrl: "http://zhidao.baidu.com" + r.xd,
        onBindSuccess: p.onLoginSuccess,
        onBindFailure: p.onSubmitedErr
    },
    s.on("login.log",
    function(t, i) {
        var n = i && a.isFunction(i.onLoginSuccess) ? i.onLoginSuccess: p.onLoginSuccess;
        if (i && i.sms) {
            var o = "无需百度帐号，输入手机号即可免费提问";
            i.psFlag && (o = "验证即登录，没有百度帐号也可以使用", p.img = "http://img.baidu.com/img/iknow/ui/sms-login-bg.jpg"),
            a.extend(p.apiOpt, {
                sms: i.sms,
                smsText: o
            }),
            p.authsite = []
        }
        p.onLoginSuccess = function(t) {
            s.fire("dialog.close"),
            s.fire("login.check", {
                sync: i && i.sync,
                isLogin: function(t) {
                    t.isFilter && s.fire("login.filter", {
                        type: "set",
                        filterInfo: t.isFilter
                    }),
                    n(t)
                },
                noLogin: function() {}
            }),
            t.returnValue = !1
        },
        u ? c && c.show() : (a.getScript(h,
        function() {
            c = passport.pop.init(p),
            c.show(),
            a.extend(e, c)
        }), u = !0)
    }),
    s.on("login.check",
    function(t, e) {
        e = e || {},
        p.onLoginSuccess = e.isLogin || i,
        p.onLoginFailure = e.noLogin || n,
        a.ajax({
            url: f + "?t=" + (new Date).getTime(),
            async: e && e.sync ? !1 : !0,
            dataType: "html",
            success: function(t, e, i) {
                var n = a.json.parse(i.responseText),
                o = F.context("user") || {};
                return 1 == n.isLogin ? (o.isLogin = !0, o.id = n.userId, o.wealth = n.userWealth, p.onLoginSuccess(n)) : (o.isLogin = !1, p.onLoginFailure()),
                !0
            }
        })
    }),
    s.on("login._success",
    function() {
        p.onLoginSuccess()
    }),
    s.on("login.setUsername",
    function(t, e) {
        function i() {
            var t = l.iframe({
                content: r.username + n,
                title: e.titleText || "你还没有用户名，起一个好听的用户名吧！",
                width: 430,
                height: 170,
                autoDispose: !0
            });
            s.on("setusername.update",
            function(e, i) {
                t && t.setSize({
                    width: i.width,
                    height: i.height
                })
            })
        }
        e = e || {},
        e.onSetSuccess || (e.onSetSuccess = function() {
            window.location.reload(!0)
        }),
        p.onLoginSuccess = e.onSetSuccess;
        var n = "?" + (e.patch ? e.patch + "&": "") + "t=" + (new Date).getTime();
        s.fire("login.check", {
            isLogin: function() {
                var t = F.context("user") || {};
                t.isNoUserName ? i() : e.onSetSuccess()
            },
            noLogin: function() {
                s.fire("login.log", {
                    onLoginSuccess: i
                })
            }
        })
    }),
    s.on("login.filter",
    function(t, e) {
        if ("set" == e.type) T.cookie.set("IK_USER_FILTER", e.filterInfo.reason, {
            path: "/",
            expires: 6e4
        }),
        T.cookie.set("IK_USER_FILTERI", e.filterInfo.lastLoginIp, {
            path: "/",
            expires: 6e4
        }),
        T.cookie.set("IK_USER_FILTERT", e.filterInfo.lastLoginTime, {
            path: "/",
            expires: 6e4
        });
        else if ("check" == e.type && 16 == parseInt(T.cookie.get("IK_USER_FILTER"))) {
            var i = new l({
                width: 350,
                height: 200,
                title: "知道提示",
                content: "您的账号于 " + T.cookie.get("IK_USER_FILTERT") + " 在 " + T.cookie.get("IK_USER_FILTERI") + " 进行了异常操作，高度疑似被盗，所以已被临时冻结，请进行身份验证完成解冻操作，成功后即可恢复正常使用",
                buttons: [{
                    text: "进行身份验证",
                    click: function() {
                        window.open("/uhome/set/verify?fr=login"),
                        i.close()
                    }
                },
                {
                    text: "取消",
                    click: function() {
                        i.close()
                    }
                }],
                autoDispose: !0
            });
            T.cookie.remove("IK_USER_FILTER", {
                path: "/"
            }),
            T.cookie.remove("IK_USER_FILTERI", {
                path: "/"
            }),
            T.cookie.remove("IK_USER_FILTERT", {
                path: "/"
            })
        }
    }),
    s.on("dialog.close",
    function() {
        c && c.hide && c.hide()
    }),
    s.on("login.success",
    function() {
        i()
    }),
    function() {
        s.fire("login.filter", {
            type: "check"
        })
    } ()
}),
define("userbar",
function(t) {
    function e(t) {
        F.context("user", {
            isLogin: t
        })
    }
    var i = t("common:widget/js/util/tangram/tangram.js");
    t("login");
    var n = t("common:widget/js/util/event/event.js");
    n.on("userbar.init",
    function() {
        F.context("user", {});
        var e = "";
        i("#userbar").size() || i('<div class="userbar userbar-new" id="userbar"></div>').css("top", "5px").appendTo("#header"),
        F.context("user").isLogin = 0;
        var o = '<ul class="aside-list" style="color:red;"><li>明德</li><li>博学</li><li>求是</li><li>创新</li></ul>';
        i("#userbar").html(o),
        i("#userbar-login").click(function(t) {
            t.preventDefault(),
            n.fire("login.log", {
                onLoginSuccess: function() {
                    window.location.reload()
                }
            })
        }),
        i.get(e + "/api/loginInfo",
        function(e) {
            if (e && 1 == e.isLogin) {
                F.context("user").isLogin = 1,
                F.context("user").name = e.userName,
                F.context("user").id = e.userId;
                var n = [];
                n.push('<ul class="aside-list">'),
                n.push('<li><a href="http://www.baidu.com/p/' + e.userName + '?from=zhidao" class="user-name" target="_blank" id="user-name">' + e.userName + '<i class="i-arrow-down"></i></a></li>'),
                n.push('<li><span id="user-grade" class="user-grade">LV' + e.gradeIndex + "</span></li>"),
                n.push('<li><a alog-alias="my-home" href="/ihome" id="my-iknow" class="my-iknow" target="_blank">我的知道</a></li>'),
                n.push('<li alog-alias="userbar-msg" id="userbar-msg"><span class="i-msg" style="display:none;"></span><a href="/ihome/notice/all" target="_blank" target="_self">消息<span class="orange-num"><i></i></span></a></li>'),
                n.push('<li alog-alias="baidu-msg" id="baidu-msg"><a href="#"><i class="bd-msg"></i></a></li>'),
                n.push('<li><a href="/shop" title="知道商城"><i class="i-house"></i></a></li>'),
                n.push("</ul>"),
                n.push('<div class="sublist-container username-sublist" style="display:none" id="username-sublist">'),
                n.push('<div class="sublist-arrow-up"></div>'),
                n.push('<ul class="sub-list">'),
                n.push('<li><a id="userbar-myinfo" href="http://www.baidu.com/p/' + e.userName + '?from=zhidao" target="_blank"><i class="i-homepage"></i>我的主页</a></li>'),
                n.push('<li><a id="userbar-account" href="http://passport.baidu.com/center" target="_blank"><i class="i-setting"></i>帐号设置</a></li>'),
                n.push('<li class="last"><a href="http://passport.baidu.com/?logout&amp;aid=7&amp;u=http%3A//zhidao.baidu.com" id="userbar-logout"><i class="i-quit"></i>退出</a></li>'),
                n.push("</ul>"),
                n.push("</div>"),
                n.push('<div class="sublist-container my-iknow-list" style="display:none" id="my-home-list">'),
                n.push('<div class="sublist-arrow-up"></div>'),
                n.push('<ul class="sub-list">'),
                n.push('<li><a alog-alias="#" href="/ihome/ask" target="_blank" id="status-my-ask"><i class="i-ask"></i>我的提问</a></li>'),
                n.push('<li class="last"><a alog-alias="#" href="/ihome/answer" target="_blank" id="status-my-answer"><i class="i-answer"></i>我的回答</a></li>'),
                n.push("</ul>"),
                n.push("</div>")
            }
            i("#userbar").html(n.join("")),
            t("common:widget/userbar-new/userbar-new.js")
        },
        "json")
    }),
    n.fire("userbar.init"),
    n.fire("login.check", {
        isLogin: function() {
            e(1)
        },
        noLogin: function() {
            e(0)
        }
    })
}),
require("userbar"),
$(document).ready(function() {
    function t() { !
        function() { (!window.FINDIDLINK || location.href.match("#iknowBirthday") && location.href.match("#iknowBirthday").length > 0) && ($(".screen-1-content").addClass("active"), $("#parallax-1").addClass("active"))
        } (),
        function() {
            function t() {
                for (var t = parseInt(9 * Math.random()); t == r;) t = parseInt(9 * Math.random());
                if (null !== r && null !== l) for (var e = 0; e < $(".q" + r + "-9").length; e++) $(".q" + r + "-9")[e].style.fill = l;
                r = t;
                for (var e = 0; e < $(".q" + t + "-9").length; e++) l = $(".q" + t + "-9")[e].style.fill,
                $(".q" + t + "-9")[e].style.fill = highlight
            }
            function e() {
                s = s.data(d3.geom.delaunay(o).map(function(t) {
                    return "M" + t.join("L") + "Z"
                }), String),
                s.exit().remove(),
                s.enter().append("path").attr("class",
                function(t, e) {
                    return "q" + e % 9 + "-9"
                }).attr("d", String)
            }
            var i = 400,
            n = 400;
            intervalTime = 1500,
            highlight = "#15f60a";
            var o = d3.range(60).map(function() {
                return [Math.random() * i, Math.random() * n]
            }),
            a = d3.select("body .screen-1-content-bg").append("svg").attr("width", i).attr("height", n).attr("class", "PiShine"),
            s = a.append("g").selectAll("path");
            e(),
            setInterval(t, intervalTime);
            var r = null,
            l = null
        } ()
    } !
    function() {
        var t = $("html").hasClass("ie-old");
        if (t) {
            var e = require("common:widget/js/ui/dialog/dialog.js"),
            i = ['<div class="wrapper">', '<div class="browser-wrapper">', "<p>浏览器可能有一点问题~</p>", "<p>建议使用Chrome，Firefox等符合标准的浏览器</p>", "<p>以便获得更好的体验</p>", '<div class="btn-wrap mt-10">', '<a class="btn-green-darker-l mr-20" target="_blank" href="http://www.google.cn/intl/zh-CN/chrome/browser/desktop/index.html">Chrome</a>', '<a class="btn-green-darker-l" target="_blank" href="http://www.firefox.com.cn/">Firefox</a>', "</div>", "</div>", "</div>"].join("");
            new e({
                width: 500,
                height: 300,
                content: i,
                className: "browser-dialog-box",
                autoDispose: !0,
                open: function() {
                    $(".browser-dialog-box").delegate(".close-layer", "click",
                    function() {
                        vedioDialog.close()
                    })
                }
            })
        }
    } (),
    function() {
        setTimeout(function() {
            $("body").removeClass("loading").addClass("loaded"),
            $(".loading, .load-cover").fadeOut(500),
            t()
        },
        1800)
    } (),
    function() {
        var t = ["iknowBirthday", "iknowOverview", "iknowFriendship", "iknowStars", "iknowLookforwards"],
        e = window.location.href;
        window.FINDIDLINK = !1;
        for (var i = 0; i < t.length; i++) if (e.match(t[i]) && e.match(t[i]).length > 0) {
            var n = i + 1;
            window.FINDIDLINK = !0,
            $(".screen-" + n + "-content").show()
        }
        window.FINDIDLINK || $(".screen-1-content").show()
    } ();
    var e = 0,
    i = 0,
    n = require("common:widget/js/ui/dialog/dialog.js"),
    o = !0,
    a = $("html").hasClass("ie") || $("html").hasClass("ie9") || $("html").hasClass("ie10");
    $("#fullpage").fullpage({
        anchors: ["iknowBirthday", "iknowOverview", "iknowFriendship", "iknowStars", "iknowLookforwards"],
        sectionsColor: ["transparent", "transparent", "#18182b", "transparent", "#18182b"],
        navigation: !1,
        navigationPosition: "bottom",
        slidesNavigation: !0,
        slidesNavPosition: "bottom",
        controlArrows: !1,
        autoScrolling: !0,
        onLeave: function(t, e) {
            var i = $(".nav");
            if (i.find("a").removeClass("current"), i.find(".nav-" + e).addClass("current"), t && 3 != t && setTimeout(function() {
                $(".screen-" + t + "-content").removeClass("active"),
                $("#parallax-" + t).removeClass("active"),
                $(".screen-" + t + "-content").hide()
            },
            700), 5 == e) {
                var o = $(".slide-bg-container img");
                o.each(function() {
                    var t = $(this).data("src");
                    $(this).attr("src", t)
                })
            }
            e && ($(".screen-" + e + "-content").show(), setTimeout(function() {
                $(".screen-" + e + "-content").show().addClass("active"),
                $("#parallax-" + e).addClass("active")
            },
            700)),
            n.close(),
            $(".ball-outer .dot .card").hide()
        },
        afterLoad: function(t, e) {
            o && e && ($(".screen-" + e + "-content").show().addClass(".active"), o = !1);
            var i = $(".slide-bg-container img");
            5 == e && i.each(function() {
                var t = $(this).data("src");
                $(this).attr("src", t)
            })
        },
        afterRender: function() {},
        afterResize: function() {},
        onSlideLeave: function(t, i, n) {
            e = n
        },
        afterSlideLoad: function(t, n, o, a) {
            i = a,
            e != i && ($(".slide-bg-container").find(".slide-index-" + i).fadeIn(500), $(".slide-bg-container").find(".slide-index-" + e).fadeOut(500,
            function() {
                $(this).removeClass("active")
            }))
        }
    }),
    $("#parallax-1").parallax(),
    $("#parallax-2").parallax(),
    $("#parallax-4").parallax(),
    !
    function() {
        location.href.match("#iknowOverview") && location.href.match("#iknowOverview").length > 0 && setTimeout(function() {
            $(".screen-2-content").addClass("active"),
            $("#parallax-2").addClass("active")
        },
        1e3),
        $(".screen-2").delegate(".dot .outer", "mouseover",
        function() {
            $(this).parent().find(".card").fadeIn()
        }).on("mouseout",
        function() {
            $(this).parent().find(".card").fadeOut()
        })
    } (),
    function() {
        var t = require("common:widget/js/util/tangram/tangram.js"),
        e = require("common:widget/js/util/event/event.js"),
        i = require("common:widget/js/ui/dialog/dialog.js");
        e.on("vedio.render.s2",
        function() {
            var n = 772,
            o = 505,
            a = "<iframe height=100% width=100% src='http://player.youku.com/embed/XMzY5Njk4Mzg1Ng==' frameborder=0 'allowfullscreen'></iframe>",
            // <embed src='http://player.youku.com/player.php/sid/XMzY5Njk4Mzg1Ng==/v.swf' allowFullScreen='true' quality='high' width='480' height='400' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash'></embed>
            //a = "<embed menu='false' wmode='transparent' src='http://player.youku.com/player.php/sid/XMzY5Njk4Mzg1Ng==/v.swf' allowFullScreen='true' quality='high' width='100%' height='100%' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash'></embed>",
            // a = '<embed src="http://player.video.qiyi.com/903eb3925e969d2e08a0ba6ced349a14/0/0/v_19rrbk5we8.swf-albumId=970925100-tvId=970925100-isPurchase=0-cnId=6" allowFullScreen="true" quality="high" width="480" height="350" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>',
            // a = '<embed menu="false" wmode="transparent" src="http://player.video.qiyi.com/903eb3925e969d2e08a0ba6ced349a14/0/0/v_19rrbk5we8.swf-albumId=970925100-tvId=970925100-isPurchase=0-cnId=6" allowFullScreen="true" quality="high" width="100%" height="100%" align="middle" allowScriptAccess="always"  allowScriptAccess="always" type="application/x-shockwave-flash"></embed>',
            s = ['<div class="wrapper">', '<div class="vedio-wrapper">' + a + "</div>", "</div>", '<div class="close-layer"></div>'].join(""),
            r = new i({
                width: 825,
                height: 507,
                content: s,
                className: "vedio-dialog-box",
                autoDispose: !0,
                open: function() {
                    t(".vedio-dialog-box").delegate(".close-layer", "click",
                    function() {
                        r.close()
                    })
                }
            })
        }),
        t(".screen-2").delegate(".overview-button", "click",
        function() {
            e.fire("vedio.render.s2")
        })
    } (),
    function() {
        function t(t, e) {
            for (var i, n = 20.90515745,
            o = Math.sqrt(3), a = e / 2, s = [60, -60, 60, -60, -60, -60, 60, 60, 60, -60, 60, -60, -60, -60, 60, 60, 60, -60, 60, -60], r = [0, 2 * a, 0, 2 * a, 2 * a, 2 * a, 0, 0, 0, 2 * a, 0, 2 * a, 2 * a, 2 * a, 0, 0, 0, 2 * a, 0, 2 * a], l = ["M", 0, 0, 0, "L", a * o, a, 0, 0, 2 * a, 0, "y"], c = t.createGroup3D(), u = -2 * n, d = 0; 20 > d; d++) i = t.compileShape3D(l, "rgba(255,255,255,0.5)"),
            i.backHidden = !0,
            c.addObj(i),
            c.translate(0, -r[d], 0),
            c.rotate(0, 0, 1, s[d]),
            c.rotate(0, 1, 0, u),
            c.translate(0, r[d], 0);
            return c
        }
        function e(e) {
            function i() {
                a.transform.rotate(0, 1, 0, .1),
                n.renderFrame(a)
            }
            var n = new Cango3D(e),
            o = t(n, 400);
            o.translate( - 85, 0, 280);
            var a = n.createGroup3D(o);
            n.setWorldCoords3D( - 500, -200, 1e3),
            n.setLightSource(0, 0, 1),
            setInterval(i, 12)
        }
        e("cvs0")
    } ();
    var a = $("html").hasClass("ie") || $("html").hasClass("ie9") || $("html").hasClass("ie10"); !
    function() {
        function t() {
            c = c.data(d3.geom.delaunay(r).map(function(t) {
                return "M" + t.join("L") + "Z"
            }), String),
            c.exit().remove(),
            c.enter().append("path").attr("class",
            function() {
                return "draw-bg"
            }).attr("d", String)
        }
        function e() {
            c = c.data(d3.geom.delaunay(r).map(function(t) {
                return "M" + t.join("L") + "Z"
            }), String),
            c.exit().remove(),
            c.enter().append("path").attr("class",
            function() {
                return "redraw"
            }).attr("d", String)
        }
        var i = 680,
        n = 680,
        o = 340,
        s = 200,
        r = d3.range(100).map(function() {
            var t, e;
            do t = Math.random() * i,
            e = Math.random() * n;
            while (Math.pow(t - o, 2) + Math.pow(e - o, 2) > o * o || Math.pow(t - o, 2) + Math.pow(e - o, 2) < s * s);
            return [t, e]
        }),
        l = d3.select("body .screen-3-content .pixi-inner").append("svg").attr("width", i).attr("height", n).attr("class", "PiMap").on("mousemove",
        function() {
            r[0] = function() {
                do x1 = Math.random() * i,
                y1 = Math.random() * n;
                while (Math.pow(x1 - o, 2) + Math.pow(y1 - o, 2) > o * o || Math.pow(x1 - o, 2) + Math.pow(y1 - o, 2) < s * s);
                return [x1, y1]
            } (),
            a || e()
        });
        l.selectAll("circle").data(r.slice(1)).enter().append("circle").attr("transform",
        function(t) {
            return "translate(" + t + ")"
        }).attr("r", 2);
        var c = l.append("g").selectAll("path");
        t(),
        $(".inner").on("mousemove",
        function() {
            r[0] = function() {
                do x1 = Math.random() * i,
                y1 = Math.random() * n;
                while (Math.pow(x1 - o, 2) + Math.pow(y1 - o, 2) > o * o || Math.pow(x1 - o, 2) + Math.pow(y1 - o, 2) < s * s);
                return [x1, y1]
            } (),
            a || e()
        })
    } (),
    !
    function() {
        var t = require("common:widget/js/util/tangram/tangram.js"),
        e = require("common:widget/js/util/event/event.js"),
        i = require("common:widget/js/ui/dialog/dialog.js");
        e.on("vedio.render.s4",
        function() {
            var e = '<embed menu="false" allowfullscreen="false" wmode="transparent" src="http://player.video.qiyi.com/c0ddd0406c3bacd46db0aa523c9bd3cc/0/0/v_19rroidruo.swf-albumId=371955500-tvId=371955500-isPurchase=0-cnId=7-autoplay=true"  allowFullScreen="true" quality="high" width="100%" height="100%" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>';
            content = ['<div class="wrapper">', '<div class="vedio-wrapper">' + e + "</div>", "</div>", '<div class="close-layer"></div>'].join("");
            var n = new i({
                width: 825,
                height: 507,
                content: content,
                className: "vedio-dialog-box",
                autoDispose: !0,
                open: function() {
                    t(".vedio-dialog-box").delegate(".close-layer", "click",
                    function() {
                        n.close()
                    })
                }
            })
        }),
        t(".screen-4").delegate(".large-pic", "click",
        function() {
            e.fire("vedio.render.s4")
        })
    } (),
    !
    function() {
        var t = 1960,
        e = 900,
        i = function() {
            t / e > $(window).width() / $(window).height() ? ($(".slide-bg-container img").css("height", "100%"), $(".slide-bg-container img").css("width", "")) : ($(".slide-bg-container img").css("height", ""), $(".slide-bg-container img").css("width", "100%"))
        };
        i(),
        $(window).on("resize",
        function() {
            i()
        })
    } ();
    var s = setInterval(function() {
        $.fn.fullpage.moveSlideRight()
    },
    5e3);
    $(".fp-slidesNav").on("mouseover",
    function() {
        clearInterval(s)
    }).on("mouseout",
    function() {
        s = setInterval(function() {
            $.fn.fullpage.moveSlideRight()
        },
        5e3)
    })
});