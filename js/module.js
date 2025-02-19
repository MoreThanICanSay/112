define("common:widget/userbar-new/userbar-new.js", function (e) {
    function o() {
        s("#userbar-login").click(function (e) {
            try {
                n.fire("login.check"), e.preventDefault()
            } catch (e) {
                "undefined" != typeof alog && alog("exception.fire", "catch", {
                    msg: e.message,
                    path: "common:widget/userbar-new/userbar-new.js",
                    method: "",
                    ln: 43
                })
            }
        });
        var e = s("#userbar-reg");
        if (e.length) {
            var o = e.attr("href") + encodeURIComponent(window.location.href);
            e.attr("href", o)
        }
        s("#userbar-logout").attr("href", "http://passport.baidu.com/?logout&aid=7&u=" + escape(location.href)).mousedown(function () {
            r.send({
                url: location.href,
                type: "2046",
                action: "logout"
            })
        });
        var t = s("#no-username-set").click(function (e) {
            try {
                n.fire("login.setUsername"), e.preventDefault()
            } catch (e) {
                "undefined" != typeof alog && alog("exception.fire", "catch", {
                    msg: e.message,
                    path: "common:widget/userbar-new/userbar-new.js",
                    method: "",
                    ln: 71
                })
            }
        });
        t.length && r.send({
            type: 2030,
            pv_from: "usrbar"
        }), new i("user-name", "username-sublist", {
            top: 10
        })
    }

    function t() {
        var e = (F.context("user"), "http://msg.baidu.com/msg/msg_dataGetmsgCount?from=msg");
        s.sio(e).callByBrowser(function () {
            if (window.redmsg && !(redmsg.length < 1)) {
                var e = 0 == msgnum ? '<i class="bd-msg"></i>' : '<i class="bd-msg"></i><strong class="orange-num">(' + msgnum + ")</strong>";
                s("#baidu-msg").html('<a title="\u79c1\u4fe1" href="http://msg.baidu.com" target="_blank">' + e + "</a>"), n.fire("userbar.reposition", {
                    waiting: !1
                })
            }
        })
    }

    function i(e, o, t) {
        var i = this,
            r = s("#" + e),
            a = s("#" + o);
        i.timeout = 0, r.mouseover(function () {
            clearTimeout(i.timeout);
            s(window).width(), s("#userbar").outerWidth(), s(this).position();
            s.isNumber(t.right) && (t.left = r.outerWidth() - a.width() - t.right), a.css({
                top: t.top
            }).show(), n.fire("userbar.show", {
                waiting: !0
            })
        }).mouseout(function () {
            i.timeout = setTimeout(function () {
                a.hide(), clearTimeout(i.timeoutId), n.fire("userbar.hide", {
                    waiting: !1
                })
            }, 100)
        }), a.mouseover(function () {
            clearTimeout(i.timeout), a.show(), n.fire("userbar.show", {
                waiting: !0
            })
        }).mouseout(function () {
            r.mouseout()
        }), a.find("li a").mouseover(function () {
            s(this).addClass("userbar-li-mover").parent().addClass("userbar-li-mover")
        }).mouseout(function () {
            s(this).removeClass("userbar-li-mover").parent().removeClass("userbar-li-mover")
        })
    }
    var s = e("common:widget/js/util/tangram/tangram.js"),
        n = e("common:widget/js/util/event/event.js"),
        r = (e("common:widget/js/logic/login/login.js"), e("common:widget/js/util/log/log.js")),
        a = e("common:widget/js/util/store/store.js");
    n.on("common.userbarMsgNum", function (e, o) {
        o > 99 && (o = "99+");
        var t = s("#userbar-msg"),
            i = t.find(".i-msg"),
            n = t.find(".orange-num");
        0 == o ? (n.html("<i></i>"), i.hide()) : (n.html("(<i>" + o + "</i>)"), i.show())
    }), s(function () {
        "1" == F.context("user").isLogin ? t() : (a.remove("ikmsg_data"), a.remove("ikmsg_time"), s.cookie.remove("msgGuide", {
            path: "/"
        }), s.cookie.remove("msgGuideStep", {
            path: "/"
        }), s.cookie.get("IK_PASS") && s.cookie.remove("IK_PASS", {
            path: "/"
        })), e.async("common:widget/js/logic/msg-new/msg-new.js", function (e) {
            if (1 == F.context("user").isLogin) {
                var o = s("#userbar"),
                    t = o.offset().left,
                    i = s("#userbar #userbar-msg"),
                    n = i.offset().left;
                e.init({
                    position: {
                        top: 30,
                        left: n - t - 346 + 3 * s("#userbar-msg").width() / 4
                    },
                    commonUserbar: 1
                })
            } else e.init()
        })
    }), o(), s("#baidu-msg").on("click", function (e) {
        try {
            r.send({
                page: "all",
                type: 2060,
                action: "click",
                area: "baidu-msg"
            })
        } catch (e) {
            "undefined" != typeof alog && alog("exception.fire", "catch", {
                msg: e.message,
                path: "common:widget/userbar-new/userbar-new.js",
                method: "",
                ln: 254
            })
        }
    })
});;
define("common:widget/menu/menu.js", function (n, e) {
    var o = n("common:widget/js/util/tangram/tangram.js"),
        t = o("#j-nav-menu-container"),
        i = t.find(".nav-show-control");
    e.init = function () {
        function n() {
            o = setTimeout(function () {
                i.css({
                    overflow: "visible"
                }).addClass("nav-show-control-show")
            }, 100)
        }

        function e() {
            clearTimeout(o), i.css({
                overflow: "hidden"
            }).removeClass("nav-show-control-show")
        }
        try {
            var o = 0;
            t.find(".menu-title").mouseenter(n), t.find(".nav-menu-layout").mouseleave(e)
        } catch (a) {
            "undefined" != typeof alog && alog("exception.fire", "catch", {
                msg: a.message,
                path: "common:widget/menu/menu.js",
                method: "",
                ln: 34
            })
        }
    }
});;
define("common:widget/menu-old/menu-old.js", function (e, n, o) {
    var s = e("common:widget/lib/jquery/jquery.js"),
        t = (e("common:widget/js/util/log/log.js"), e("common:widget/js/util/event/event.js"));
    s(".qb-section").size() || t.fire("log.init", {
        key: 2054,
        evtType: "mousedown",
        query: "#menu a, #sub-menu a"
    }), o.exports.init = function () {
        try {
            s("#menu li div.sub-menu").each(function () {
                s(this).parent().addClass("arraw").mouseenter(function () {
                    s(this).addClass("show-sub arraw-down"), s(".sub-menu", this).show()
                }).mouseleave(function () {
                    s(this).removeClass("show-sub arraw-down"), s(".sub-menu", this).hide()
                })
            })
        } catch (e) {
            "undefined" != typeof alog && alog("exception.fire", "catch", {
                msg: e.message,
                path: "common:widget/menu-old/menu-old.js",
                method: "",
                ln: 22
            })
        }
    }
});;
define("common:widget/bottom-ask/bottom-ask.js", function (o) {
    var t = o("common:widget/js/util/tangram/tangram.js"),
        a = o("common:widget/js/util/event/event.js"),
        n = o("common:widget/js/util/log/log.js"),
        e = cmsShowed = numShowed = !1;
    a.on("cmsMsg.show", function () {
        cmsShowed = !0, c()
    });
    var s = function () {
            var o = 12797381,
                a = t(".wgt-bottom-ask .bottom-ask-num");
            i(o, a), setInterval(function () {
                var t = Math.ceil(10 * Math.random());
                o += Math.random() > .5 ? t : -t, isNaN(o) || i(o, a)
            }, 1e4)
        },
        i = function (o, a) {
            var n = (o + "").split(""),
                e = [];
            t.each(n, function (o, t) {
                e.push('<span class="bottom-ask-num-' + t + '"></span>')
            }), a.html(e.join(""))
        },
        m = function () {
            cmsShowed || "true" != t.cookie.get("IS_HIDE_BOTTOM_ASK") && (t(window).scrollTop() + t(window).height() >= t("body").height() ? (t(".wgt-footer").css("padding-bottom", "130px"), t(".wgt-bottom-ask").show(), numShowed || (s(), numShowed = !0), a.fire("bottomAsk.show"), e || n.send({
                type: 2031,
                action: "show",
                area: "bottom_ask",
                page: location.pathname && location.pathname.split("/")[1]
            }), e = !0) : c(), 6 == t.browser.ie && t(".wgt-bottom-ask").css({
                top: t(window).scrollTop() + t(window).height() - t(".wgt-bottom-ask").height()
            }))
        },
        c = function () {
            t(".wgt-bottom-ask").hide(), a.fire("bottomAsk.hide")
        };
    m(), t(window).scroll(function () {
        m()
    }), t(".wgt-bottom-ask .bottom-ask-close").click(function (o) {
        try {
            c(), t.cookie.set("IS_HIDE_BOTTOM_ASK", !0)
        } catch (o) {
            "undefined" != typeof alog && alog("exception.fire", "catch", {
                msg: o.message,
                path: "common:widget/bottom-ask/bottom-ask.js",
                method: "",
                ln: 107
            })
        }
    }), n.addKey({
        bottom_ask: 1
    }), t(".wgt-bottom-ask .bottom-ask-btn").on("click submit", function (o) {
        try {
            n.send({
                type: 2031,
                action: "click",
                area: "bottom_ask",
                page: location.pathname && location.pathname.split("/")[1]
            })
        } catch (o) {
            "undefined" != typeof alog && alog("exception.fire", "catch", {
                msg: o.message,
                path: "common:widget/bottom-ask/bottom-ask.js",
                method: "",
                ln: 118
            })
        }
    })
});;
define("common:widget/js/ui/base/base.js", function (e, t, n) {
    function i(e) {
        var t = o.isFunction(e) ? e : function () {
                this.type = "base"
            },
            n = function (e) {
                s.create(this), this.guid = ++o.guid, t.apply(this, arguments), "object" == typeof e && this._init(e), this.init(e)
            };
        return n.extend = function (e) {
            return o.extend(n.prototype, e), n
        }, n.extend({
            _init: function (e) {
                try {
                    var t = this;
                    o.each(e, function (e, n) {
                        o.isFunction(n) ? t.on(e, n) : t[e] = n
                    })
                } catch (n) {
                    "undefined" != typeof alog && alog("exception.fire", "catch", {
                        msg: n.message,
                        path: "common:widget/js/ui/base/base.js",
                        method: "",
                        ln: 29
                    })
                }
            }, init: function () {
                try {} catch (e) {
                    "undefined" != typeof alog && alog("exception.fire", "catch", {
                        msg: e.message,
                        path: "common:widget/js/ui/base/base.js",
                        method: "",
                        ln: 30
                    })
                }
            }, render: function () {}, dispose: function () {}, getElements: function () {}
        })
    }
    var o = e("common:widget/lib/jquery/jquery.js"),
        s = e("common:widget/js/util/event/event.js");
    n.exports = i
});;
define("common:widget/js/util/event/event.js", function (n, e, r) {
    function t(n) {
        var e = i(n);
        return i.extend(n, {
            on: function (r, t) {
                return e.on(o(r), t), n
            }, once: function (r, t) {
                return e.one(o(r), t), n
            }, fire: function (r) {
                var t = Array.prototype.slice.call(arguments, 1);
                return t.unshift(o(r)), e.trigger.apply(e, t), n
            }, off: function (r, t) {
                return e.unbind(o(r), t), n
            }
        }), n.un = n.off, n.trigger = n.fire, n
    }

    function o(n) {
        return "on" + n.replace(/^on/i, "").toLowerCase()
    }
    var i = n("common:widget/lib/jquery/jquery.js");
    r.exports = t({}), r.exports.create = t, window.F && (window.F.ec = r.exports)
});;
define("common:widget/js/util/tangram/browser.js", function (e, t) {
    var i = /chrome\/(\d+\.\d+)/i.test(navigator.userAgent) ? +RegExp.$1 : void 0;
    t.chrome = i;
    var r = /firefox\/(\d+\.\d+)/i.test(navigator.userAgent) ? +RegExp.$1 : void 0;
    t.firefox = r;
    var a = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : void 0;
    t.ie = a;
    var o = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
    t.isGecko = o;
    var n = "CSS1Compat" == document.compatMode;
    t.isStrict = n;
    var s = /webkit/i.test(navigator.userAgent);
    t.isWebkit = s;
    try {
        if (/(\d+\.\d+)/.test(external.max_version)) {
            var d = +RegExp.$1;
            t.maxthon = d
        }
    } catch (g) {}
    var v = /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent) ? +(RegExp.$6 || RegExp.$2) : void 0;
    t.opera = v,
        function () {
            var e = navigator.userAgent,
                i = /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(e) && !/chrome/i.test(e) ? +(RegExp.$1 || RegExp.$2) : void 0;
            t.safari = i
        }()
});;
define("common:widget/js/util/tangram/platform.js", function (t, i) {
    var a = /android/i.test(navigator.userAgent);
    i.isAndroid = a;
    var n = /ipad/i.test(navigator.userAgent);
    i.isIpad = n;
    var s = /iphone/i.test(navigator.userAgent);
    i.isIphone = s;
    var e = /macintosh/i.test(navigator.userAgent);
    i.isMacintosh = e;
    var r = /windows/i.test(navigator.userAgent);
    i.isWindows = r;
    var o = /x11/i.test(navigator.userAgent);
    i.isX11 = o
});;
define("common:widget/js/util/tangram/cookie.js", function (e, n) {
    var t = function (e) {
            return new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(e)
        },
        o = function (e) {
            if (t(e)) {
                var n = new RegExp("(^| )" + e + "=([^;]*)(;|$)"),
                    o = n.exec(document.cookie);
                if (o) return o[2] || null
            }
            return null
        };
    n.getRaw = o;
    var i = function (e) {
        var n = o(e);
        return "string" == typeof n ? n = decodeURIComponent(n) : null
    };
    n.get = i;
    var r = function (e, n, o) {
        if (t(e)) {
            o = o || {};
            var i = o.expires;
            "number" == typeof o.expires && (i = new Date, i.setTime(i.getTime() + o.expires)), document.cookie = e + "=" + n + (o.path ? "; path=" + o.path : "") + (i ? "; expires=" + i.toGMTString() : "") + (o.domain ? "; domain=" + o.domain : "") + (o.secure ? "; secure" : "")
        }
    };
    n.setRaw = r;
    var u = function (e, n) {
        n = n || {}, n.expires = new Date(0), r(e, "", n)
    };
    n.remove = u;
    var a = function (e, n, t) {
        r(e, encodeURIComponent(n), t)
    };
    n.set = a
});;
define("common:widget/js/util/tangram/json.js", function (require, exports, module) {
    "object" != typeof JSON && (JSON = {}),
        function () {
            "use strict";

            function f(t) {
                return 10 > t ? "0" + t : t
            }

            function quote(t) {
                return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function (t) {
                    var e = meta[t];
                    return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + t + '"'
            }

            function str(t, e) {
                var n, r, o, f, u, i = gap,
                    p = e[t];
                switch (p && "object" == typeof p && "function" == typeof p.toJSON && (p = p.toJSON(t)), "function" == typeof rep && (p = rep.call(e, t, p)), typeof p) {
                case "string":
                    return quote(p);
                case "number":
                    return isFinite(p) ? String(p) : "null";
                case "boolean":
                case "null":
                    return String(p);
                case "object":
                    if (!p) return "null";
                    if (gap += indent, u = [], "[object Array]" === Object.prototype.toString.apply(p)) {
                        for (f = p.length, n = 0; f > n; n += 1) u[n] = str(n, p) || "null";
                        return o = 0 === u.length ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + i + "]" : "[" + u.join(",") + "]", gap = i, o
                    }
                    if (rep && "object" == typeof rep)
                        for (f = rep.length, n = 0; f > n; n += 1) "string" == typeof rep[n] && (r = rep[n], o = str(r, p), o && u.push(quote(r) + (gap ? ": " : ":") + o));
                    else
                        for (r in p) Object.prototype.hasOwnProperty.call(p, r) && (o = str(r, p), o && u.push(quote(r) + (gap ? ": " : ":") + o));
                    return o = 0 === u.length ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + i + "}" : "{" + u.join(",") + "}", gap = i, o
                }
            }
            "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
            }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
                return this.valueOf()
            });
            var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                gap, indent, meta = {
                    "\b": "\\b",
                    "   ": "\\t",
                    "\n": "\\n",
                    "\f": "\\f",
                    "\r": "\\r",
                    '"': '\\"',
                    "\\": "\\\\"
                },
                rep;
            "function" != typeof JSON.stringify && (JSON.stringify = function (t, e, n) {
                var r;
                if (gap = "", indent = "", "number" == typeof n)
                    for (r = 0; n > r; r += 1) indent += " ";
                else "string" == typeof n && (indent = n); if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify");
                return str("", {
                    "": t
                })
            }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
                function walk(t, e) {
                    var n, r, o = t[e];
                    if (o && "object" == typeof o)
                        for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (r = walk(o, n), void 0 !== r ? o[n] = r : delete o[n]);
                    return reviver.call(t, e, o)
                }
                var j;
                if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (t) {
                    return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                    "": j
                }, "") : j;
                throw new SyntaxError("JSON.parse")
            })
        }(), exports.parse = exports.decode = function (t) {
            return new Function("return (" + t + ")")()
        }, exports.encode = exports.stringify = JSON.stringify
});;
define("common:widget/js/util/tangram/chain.js", function (n, t, r) {
    var e = n("common:widget/lib/jquery/jquery.js");
    r.exports = function (n) {
        var t = function (r) {
            var u = e.type(r),
                a = "object" == u || "array" == u ? r : n && new n(r) || {};
            return a.context = r, e.each(t, function (n, t) {
                e.isFunction(t) && (a[n] = function () {
                    var n = e.makeArray(arguments);
                    return n.unshift(a.context), t.apply(null, n)
                })
            }), a
        };
        return t
    }
});;
define("common:widget/js/util/tangram/number.js", function (n, t, r) {
    var a = n("common:widget/js/util/tangram/chain.js"),
        e = r.exports = a(Number);
    e.comma = function (n, t) {
        return (!t || 1 > t) && (t = 3), n = String(n).split("."), n[0] = n[0].replace(new RegExp("(\\d)(?=(\\d{" + t + "})+$)", "ig"), "$1,"), n.join(".")
    }, e.pad = function (n, t) {
        var r = "",
            a = 0 > n,
            e = String(Math.abs(n));
        return e.length < t && (r = new Array(t - e.length + 1).join("0")), (a ? "-" : "") + r + e
    }, e.randomInt = function (n, t) {
        return Math.floor(Math.random() * (t - n + 1) + n)
    }
});;
define("common:widget/js/util/tangram/string.js", function (r, e, t) {
    var n = (r("common:widget/lib/jquery/jquery.js"), r("common:widget/js/util/tangram/chain.js")),
        a = t.exports = n(String),
        c = function (r) {
            var e = String(r).replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
            return e.replace(/&#([\d]+);/g, function (r, e) {
                return String.fromCharCode(parseInt(e, 10))
            })
        };
    a.decodeHTML = c;
    var o = function (r) {
        return String(r).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    };
    a.encodeHTML = o;
    var i = function (r) {
        return String(r).replace(new RegExp("([.*+?^=!:${}()|[\\]/\\\\])", "g"), "\\$1")
    };
    a.escapeReg = i;
    var f = function (r, e) {
        var t = Array.prototype.slice.call(arguments, 1),
            n = Object.prototype.toString;
        return t.length ? (t = 1 == t.length && null !== e && /\[object Array\]|\[object Object\]/.test(n.call(e)) ? e : t, r.replace(/#\{(.+?)\}/g, function (r, e) {
            var a, c, o, i, f;
            if (!t) return "";
            for (a = e.split("|"), c = t[a[0]], "[object Function]" == n.call(c) && (c = c(a[0])), o = 1, i = a.length; i > o; ++o) f = baidu.string.filterFormat[a[o]], "[object Function]" == n.call(f) && (c = f(c));
            return "undefined" == typeof c || null === c ? "" : c
        })) : r
    };
    a.filterFormat = f, f.escapeJs = function (r) {
        if (!r || "string" != typeof r) return r;
        var e, t, n, a = [];
        for (e = 0, t = r.length; t > e; ++e) n = r.charCodeAt(e), a.push(n > 255 ? r.charAt(e) : "\\x" + n.toString(16));
        return a.join("")
    }, f.js = f.escapeJs, f.escapeString = function (r) {
        return r && "string" == typeof r ? r.replace(/["'<>\\\/`]/g, function (r) {
            return "&#" + r.charCodeAt(0) + ";"
        }) : r
    }, f.e = f.escapeString, f.toInt = function (r) {
        return parseInt(r, 10) || 0
    }, f.i = f.toInt;
    var u = function (r, e) {
        r = String(r);
        var t = Array.prototype.slice.call(arguments, 1),
            n = Object.prototype.toString;
        return t.length ? (t = 1 == t.length && null !== e && /\[object Array\]|\[object Object\]/.test(n.call(e)) ? e : t, r.replace(/#\{(.+?)\}/g, function (r, e) {
            var a = t[e];
            return "[object Function]" == n.call(a) && (a = a(e)), "undefined" == typeof a ? "" : a
        })) : r
    };
    a.format = u,
        function () {
            var r = /^\#[\da-f]{6}$/i,
                t = /^rgb\((\d+), (\d+), (\d+)\)$/,
                n = {
                    black: "#000000",
                    silver: "#c0c0c0",
                    gray: "#808080",
                    white: "#ffffff",
                    maroon: "#800000",
                    red: "#ff0000",
                    purple: "#800080",
                    fuchsia: "#ff00ff",
                    green: "#008000",
                    lime: "#00ff00",
                    olive: "#808000",
                    yellow: "#ffff0",
                    navy: "#000080",
                    blue: "#0000ff",
                    teal: "#008080",
                    aqua: "#00ffff"
                },
                a = function (e) {
                    if (r.test(e)) return e;
                    if (t.test(e)) {
                        for (var a, c = 1, e = "#"; 4 > c; c++) a = parseInt(RegExp["$" + c]).toString(16), e += ("00" + a).substr(a.length);
                        return e
                    }
                    if (/^\#[\da-f]{3}$/.test(e)) {
                        var o = e.charAt(1),
                            i = e.charAt(2),
                            f = e.charAt(3);
                        return "#" + o + o + i + i + f + f
                    }
                    return n[e] ? n[e] : ""
                };
            e.formatColor = a
        }();
    var l = function (r) {
        return String(r).replace(/[^\x00-\xff]/g, "ci").length
    };
    a.getByteLength = l;
    var g = function (r) {
        return String(r || "").replace(/<[^>]+>/g, "")
    };
    a.stripTags = g;
    var p = function (r, e, t) {
        return r = String(r), t = t || "", 0 > e || l(r) <= e ? r + t : (r = r.substr(0, e).replace(/([^\x00-\xff])/g, "$1 ").substr(0, e).replace(/[^\x00-\xff]$/, "").replace(/([^\x00-\xff]) /g, "$1"), r + t)
    };
    a.subByte = p;
    var s = function (r) {
        return r.indexOf("-") < 0 && r.indexOf("_") < 0 ? r : r.replace(/[-_][^-_]/g, function (r) {
            return r.charAt(1).toUpperCase()
        })
    };
    a.toCamelCase = s;
    var d = function (r) {
        return String(r).replace(/[\uFF01-\uFF5E]/g, function (r) {
            return String.fromCharCode(r.charCodeAt(0) - 65248)
        }).replace(/\u3000/g, " ")
    };
    a.toHalfWidth = d;
    var h = new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g"),
        v = function (r) {
            return String(r).replace(h, "")
        };
    a.trim = v;
    var b = function (r) {
        return String(r).replace(/(?:<[^>]+>)|(?:&#?[0-9a-z]{2,6};)|(.{1})/gi, "$&<wbr>").replace(/><wbr>/g, ">")
    };
    a.wbr = b
});;
define("common:widget/js/util/tangram/date.js", function (t, e) {
    var n = t("common:widget/js/util/tangram/number.js"),
        g = function (t, e) {
            function g(t, n) {
                e = e.replace(t, n)
            }
            var r = n.pad;
            if ("string" != typeof e) return t.toString();
            var a = t.getFullYear(),
                i = t.getMonth() + 1,
                s = t.getDate(),
                o = t.getHours(),
                u = t.getMinutes(),
                d = t.getSeconds();
            return g(/yyyy/g, r(a, 4)), g(/yy/g, r(parseInt(a.toString().slice(2), 10), 2)), g(/MM/g, r(i, 2)), g(/M/g, i), g(/dd/g, r(s, 2)), g(/d/g, s), g(/HH/g, r(o, 2)), g(/H/g, o), g(/hh/g, r(o % 12, 2)), g(/h/g, o % 12), g(/mm/g, r(u, 2)), g(/m/g, u), g(/ss/g, r(d, 2)), g(/s/g, d), e
        };
    e.format = g;
    var r = function (t) {
        var e = new RegExp("^\\d+(\\-|\\/)\\d+(\\-|\\/)\\d+$");
        if ("string" == typeof t) {
            if (e.test(t) || isNaN(Date.parse(t))) {
                var n = t.split(/ |T/),
                    g = n.length > 1 ? n[1].split(/[^\d]/) : [0, 0, 0],
                    r = n[0].split(/[^\d]/);
                return new Date(r[0] - 0, r[1] - 1, r[2] - 0, g[0] - 0, g[1] - 0, g[2] - 0)
            }
            return new Date(t)
        }
        return new Date
    };
    e.parse = r
});;
define("common:widget/js/util/tangram/object.js", function (e, r) {
    function t(e, r, t, o, a) {
        r.hasOwnProperty(t) && (a && n.isPlainObject(e[t]) ? i(e[t], r[t], {
            overwrite: o,
            recursive: a
        }) : !o && t in e || (e[t] = r[t]))
    }
    var n = e("common:widget/lib/jquery/jquery.js");
    r.isPlain = n.isPlainObject, r.isArray = n.isArray, r.clone = function (e) {
        return n.extend(!0, {}, e)
    }, r.each = function (e, r, t) {
        if (e) {
            var o = function (e, n) {
                return r.apply(t || n, [n, e])
            };
            return n.each(e, o, t)
        }
    }, r.extend = n.extend, r.isEmpty = n.isEmptyObject, Object.keys || ! function () {
        var e = Object.prototype.hasOwnProperty,
            r = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            t = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            n = t.length;
        return function (o) {
            if ("object" != typeof o && "function" != typeof o || null === o) throw new TypeError("Object.keys called on a non-object");
            var i = [];
            for (var a in o) e.call(o, a) && i.push(a);
            if (r)
                for (var c = 0; n > c; c++) e.call(o, t[c]) && i.push(t[c]);
            return i
        }
    }(), r.keys = Object.keys;
    var o = function (e) {
        var r, t = [],
            n = 0;
        for (r in e) e.hasOwnProperty(r) && (t[n++] = e[r]);
        return t
    };
    r.values = o, r.map = n.map;
    var i = function (e, r, n) {
        var o, i = 0,
            a = n || {},
            c = a.overwrite,
            u = a.whiteList,
            s = a.recursive;
        if (u && u.length)
            for (o = u.length; o > i; ++i) t(e, r, u[i], c, s);
        else
            for (i in r) t(e, r, i, c, s);
        return e
    };
    r.merge = i
});;
define("common:widget/js/util/tangram/array.js", function (r, t, e) {
    var n = r("common:widget/lib/jquery/jquery.js"),
        o = r("common:widget/js/util/tangram/object.js"),
        i = r("common:widget/js/util/tangram/chain.js"),
        a = e.exports = i(Array);
    Array.prototype.indexOf || (Array.prototype.indexOf = function (r) {
        "use strict";
        if (null == this) throw new TypeError;
        var t, e, n = Object(this),
            o = n.length >>> 0;
        if (0 === o) return -1;
        if (t = 0, arguments.length > 1 && (t = Number(arguments[1]), t != t ? t = 0 : 0 != t && 1 / 0 != t && t != -1 / 0 && (t = (t > 0 || -1) * Math.floor(Math.abs(t)))), t >= o) return -1;
        for (e = t >= 0 ? t : Math.max(o - Math.abs(t), 0); o > e; e++)
            if (e in n && n[e] === r) return e;
        return -1
    }), a.indexOf = function (r, t, e) {
        return Array.prototype.indexOf.apply(r, [t, e])
    }, a.contains = function (r, t) {
        return a.indexOf(r, t) >= 0
    }, a.each = n.each, a.forEach = o.forEach;
    var f = function (r) {
        r.length = 0
    };
    a.empty = f, Array.prototype.every || (Array.prototype.every = function (r) {
        "use strict";
        var t, e, n, o;
        if (null == this) throw new TypeError;
        if (t = Object(this), e = t.length >>> 0, "function" != typeof r) throw new TypeError;
        for (o = arguments[1], n = 0; e > n; n++)
            if (n in t && !r.call(o, t[n], n, t)) return !1;
        return !0
    }), a.every = function (r, t, e) {
        return Array.prototype.every.apply(r, [t, e])
    }, Array.prototype.filter || (Array.prototype.filter = function (r) {
        "use strict";
        if (!this) throw new TypeError; {
            var t = Object(this);
            t.length >>> 0
        }
        if ("function" != typeof r) throw new TypeError;
        var e = [],
            n = arguments[1];
        for (var o in t) t.hasOwnProperty(o) && r.call(n, t[o], o, t) && e.push(t[o]);
        return e
    }), a.filter = function (r, t, e) {
        return Array.prototype.filter.apply(r, [t, e])
    };
    var u = function (r, t) {
        var e, n, o = r.length;
        if ("function" == typeof t)
            for (n = 0; o > n; n++)
                if (e = r[n], !0 === t.call(r, e, n)) return e;
        return null
    };
    a.find = u;
    var p = function (r, t) {
        for (var e = {}, n = t && t.length, o = 0, i = r.length; i > o; o++) e[r[o]] = n && n > o ? t[o] : !0;
        return e
    };
    a.hash = p, Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function (r) {
        "use strict";
        if (null == this) throw new TypeError;
        var t, e, n = Object(this),
            o = n.length >>> 0;
        if (0 === o) return -1;
        for (t = o, arguments.length > 1 && (t = Number(arguments[1]), t != t ? t = 0 : 0 != t && t != 1 / 0 && t != -(1 / 0) && (t = (t > 0 || -1) * Math.floor(Math.abs(t)))), e = t >= 0 ? Math.min(t, o - 1) : o - Math.abs(t); e >= 0; e--)
            if (e in n && n[e] === r) return e;
        return -1
    }), a.lastIndexOf = function (r, t, e) {
        return Array.prototype.lastIndexOf.apply(r, [t, e])
    }, a.map = n.map, "function" != typeof Array.prototype.reduce && (Array.prototype.reduce = function (r, t) {
        try {
            if (null === this || "undefined" == typeof this) throw new TypeError("Array.prototype.reduce called on null or undefined");
            if ("function" != typeof r) throw new TypeError(r + " is not a function");
            var e, n, o = this.length >>> 0,
                i = !1;
            for (1 < arguments.length && (n = t, i = !0), e = 0; o > e; ++e) this.hasOwnProperty(e) && (i ? n = r(n, this[e], e, this) : (n = this[e], i = !0));
            if (!i) throw new TypeError("Reduce of empty array with no initial value");
            return n
        } catch (a) {
            "undefined" != typeof alog && alog("exception.fire", "catch", {
                msg: a.message,
                path: "common:widget/js/util/tangram/array.js",
                method: "",
                ln: 262
            })
        }
    }), a.reduce = function (r, t, e) {
        try {
            Array.prototype.reduce.apply(r, [t, e])
        } catch (n) {
            "undefined" != typeof alog && alog("exception.fire", "catch", {
                msg: n.message,
                path: "common:widget/js/util/tangram/array.js",
                method: "",
                ln: 267
            })
        }
    };
    var y = function (r, t) {
        for (var e = r.length; e--;) e in r && r[e] === t && r.splice(e, 1);
        return r
    };
    a.remove = y;
    var c = function (r, t) {
        return r.splice(t, 1)[0]
    };
    a.removeAt = c, Array.prototype.some || (Array.prototype.some = function (r) {
        "use strict";
        if (null == this) throw new TypeError;
        var t, e, n = Object(this),
            o = n.length >>> 0;
        if ("function" != typeof r) throw new TypeError;
        for (t = arguments[1], e = 0; o > e; e++)
            if (e in n && r.call(t, n[e], e, n)) return !0;
        return !1
    }), a.some = function (r, t, e) {
        Array.prototype.some.apply(r, [t, e])
    };
    var s = function (r, t) {
        var e, n, o = r.length,
            i = r.slice(0);
        for ("function" != typeof t && (t = function (r, t) {
            return r === t
        }); --o > 0;)
            for (n = i[o], e = o; e--;)
                if (t(n, i[e])) {
                    i.splice(o, 1);
                    break
                }
        return i
    };
    a.unique = s
});;
define("common:widget/js/util/tangram/sio.js", function (a, r, o) {
    var n = a("common:widget/lib/jquery/jquery.js"),
        t = a("common:widget/js/util/tangram/chain.js"),
        c = o.exports = t();
    c.callByBrowser = function (a, r, o) {
        return o && o.charset && (o.scriptCharset = o.charset), n.ajax(n.extend({
            url: a,
            dataType: "script",
            crossDomain: !0,
            success: r
        }, o))
    }, c.callByServer = function (a, r, o) {
        o && o.charset && (o.scriptCharset = o.charset);
        var t = /(\?|&)callback=([^&]*)/;
        return a = a.replace(t, "$1callback=?"), a.search(t) < 0 && (a += (a.indexOf("?") < 0 ? "?" : "&") + "callback=?"), n.ajax({
            dataType: "jsonp",
            crossDomain: !0,
            url: a,
            success: r
        })
    };
    var e = function (a) {
        var r = new Image,
            o = "tangram_sio_log_" + Math.floor(2147483648 * Math.random()).toString(36);
        window[o] = r, r.onload = r.onerror = r.onabort = function () {
            r.onload = r.onerror = r.onabort = null, window[o] = null, r = null
        }, r.src = a
    };
    c.log = e
});;
define("common:widget/js/util/tangram/url.js", function (n, r) {
    var e = n("common:widget/lib/jquery/jquery.js"),
        t = n("common:widget/js/util/tangram/string.js"),
        u = function (n) {
            return String(n).replace(/[#%&+=\/\\\ \u3000\f\r\n\t]/g, function (n) {
                return "%" + (256 + n.charCodeAt()).toString(16).substring(1).toUpperCase()
            })
        };
    r.escapeSymbol = u;
    var i = function (n, r) {
        var e = new RegExp("(^|&|\\?|#)" + t.escapeReg(r) + "=([^&#]*)(&|$|#)", ""),
            u = n.match(e);
        return u ? u[2] : null
    };
    r.getQueryValue = i;
    var o = function (n, r) {
        var t, i = [],
            o = r || function (n) {
                return u(n)
            };
        return e.each(n, function (n, r) {
            if (e.isArray(r))
                for (t = r.length; t--;) i.push(n + "=" + o(r[t], n));
            else i.push(n + "=" + o(r, n))
        }), i.join("&")
    };
    r.jsonToQuery = o;
    var s = function (n) {
        for (var r, t, u, i, o = n.substr(n.lastIndexOf("?") + 1), s = o.split("&"), a = s.length, c = {}, f = 0; a > f; f++) s[f] && (i = s[f].split("="), r = i[0], t = i[1], u = c[r], "undefined" == typeof u ? c[r] = t : e.isArray(u) ? u.push(t) : c[r] = [u, t]);
        return c
    };
    r.queryToJson = s
});;
define("common:widget/js/util/tangram/form.js", function (n, e) {
    var r = n("common:widget/lib/jquery/jquery.js");
    e.json = function (n) {
        var e = r(n).serializeArray(),
            i = {};
        return r.each(e, function (n, e) {
            i[e.name] = e.value
        }), i
    }
});;
define("common:widget/js/util/tangram/swf.js", function (e, a) {
    var t = e("common:widget/lib/jquery/jquery.js"),
        r = e("common:widget/js/util/tangram/browser.js"),
        i = e("common:widget/js/util/tangram/array.js"),
        n = e("common:widget/js/util/tangram/string.js"),
        s = function (e) {
            var a, n = document[e];
            return 9 == r.ie ? n && n.length ? 1 == (a = i.remove(t.makeArray(n), function (e) {
                return "embed" != e.tagName.toLowerCase()
            })).length ? a[0] : a : n : n || window[e]
        };
    a.getMovie = s;
    var o = function (e, a, t) {
        var r, i = this,
            n = this._flash = s(e);
        return a ? void(r = setInterval(function () {
            try {
                n[a] && (i._initialized = !0, clearInterval(r), t && t())
            } catch (e) {}
        }, 100)) : this
    };
    a.Proxy = o, o.prototype.getFlash = function () {
        return this._flash
    }, o.prototype.isReady = function () {
        return !!this._initialized
    }, o.prototype.call = function (e) {
        try {
            var a = this.getFlash(),
                t = Array.prototype.slice.call(arguments);
            t.shift(), a[e] && a[e].apply(a, t)
        } catch (r) {}
    };
    var l = function () {
        var e = navigator;
        if (e.plugins && e.mimeTypes.length) {
            var a = e.plugins["Shockwave Flash"];
            if (a && a.description) return a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".") + ".0"
        } else if (window.ActiveXObject && !window.opera)
            for (var t = 12; t >= 2; t--) try {
                var r = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + t);
                if (r) {
                    var i = r.GetVariable("$version");
                    return i.replace(/WIN/g, "").replace(/,/g, ".")
                }
            } catch (n) {}
    }();
    a.version = l;
    var c = function (e) {
        e = e || {};
        var a, t, r, i, s, o, c = l,
            d = e.ver || "6.0.0",
            p = {},
            u = n.encodeHTML;
        for (i in e) p[i] = e[i];
        if (e = p, !c) return "";
        for (c = c.split("."), d = d.split("."), r = 0; 3 > r && (a = parseInt(c[r], 10), t = parseInt(d[r], 10), !(a > t)); r++)
            if (t > a) return "";
        var v = e.vars,
            f = ["classid", "codebase", "id", "width", "height", "align"];
        if (e.align = e.align || "middle", e.classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000", e.codebase = "http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0", e.movie = e.url || "", delete e.vars, delete e.url, "string" == typeof v) e.flashvars = v;
        else {
            var h = [];
            for (i in v) o = v[i], h.push(i + "=" + encodeURIComponent(o));
            e.flashvars = h.join("&")
        }
        var m = ["<object "];
        for (r = 0, s = f.length; s > r; r++) o = f[r], m.push(" ", o, '="', u(e[o]), '"');
        m.push(">");
        var g = {
            wmode: 1,
            scale: 1,
            quality: 1,
            play: 1,
            loop: 1,
            menu: 1,
            salign: 1,
            bgcolor: 1,
            base: 1,
            allowscriptaccess: 1,
            allownetworking: 1,
            allowfullscreen: 1,
            seamlesstabbing: 1,
            devicefont: 1,
            swliveconnect: 1,
            flashvars: 1,
            movie: 1
        };
        for (i in e) o = e[i], i = i.toLowerCase(), g[i] && (o || o === !1 || 0 === o) && m.push('<param name="' + i + '" value="' + u(o) + '" />');
        e.src = e.movie, e.name = e.id, delete e.id, delete e.movie, delete e.classid, delete e.codebase, e.type = "application/x-shockwave-flash", e.pluginspage = "http://www.macromedia.com/go/getflashplayer", m.push("<embed");
        var w;
        for (i in e)
            if (o = e[i], o || o === !1 || 0 === o) {
                if (new RegExp("^salign$", "i").test(i)) {
                    w = o;
                    continue
                }
                m.push(" ", i, '="', u(o), '"')
            }
        return w && m.push(' salign="', u(w), '"'), m.push("></embed></object>"), m.join("")
    };
    a.createHTML = c;
    var d = function (e, a) {
        e = e || {};
        var r = c(e) || e.errorMessage || "";
        a && "string" == typeof a && (a = document.getElementById(a)), t(a || "body").insertHTML("beforeEnd", r)
    };
    a.create = d
});;
define("common:widget/js/util/tangram/tangram.js", function (t, e, n) {
    var r = n.exports = t("common:widget/lib/jquery/jquery.js"),
        o = t("common:widget/js/util/event/event.js");
    r.browser = t("common:widget/js/util/tangram/browser.js"), r.platform = t("common:widget/js/util/tangram/platform.js"), r.cookie = t("common:widget/js/util/tangram/cookie.js"), r.json = t("common:widget/js/util/tangram/json.js"), r.number = t("common:widget/js/util/tangram/number.js"), r.string = t("common:widget/js/util/tangram/string.js"), r.date = t("common:widget/js/util/tangram/date.js"), r.object = t("common:widget/js/util/tangram/object.js"), r.array = t("common:widget/js/util/tangram/array.js"), r.sio = t("common:widget/js/util/tangram/sio.js"), r.url = t("common:widget/js/util/tangram/url.js"), r.form = t("common:widget/js/util/tangram/form.js"), r.swf = t("common:widget/js/util/tangram/swf.js"), r.createClass = function (t, e) {
        t = r.isFunction(t) ? t : function () {}, e = e || {};
        var n = function () {
            this.guid = r.id(), t.apply(this, arguments), o.create(this)
        };
        if (n.extend = function (t) {
            return r.extend(n.prototype, t), n
        }, r.isFunction(e.superClass)) {
            var s = function () {};
            s.prototype = (n.superClass = e.superClass).prototype;
            var i = n.prototype = new s;
            r.extend(n.prototype, t.prototype), i.constructor = t
        }
        return n
    }, r.fn.insertHTML = function (t, e) {
        return this.each(function (n, o) {
            var s, i;
            return o.insertAdjacentHTML && !r.browser.opera ? o.insertAdjacentHTML(t, e) : (s = o.ownerDocument.createRange(), t = t.toUpperCase(), "AFTERBEGIN" == t || "BEFOREEND" == t ? (s.selectNodeContents(o), s.collapse("AFTERBEGIN" == t)) : (i = "BEFOREBEGIN" == t, s[i ? "setStartBefore" : "setEndAfter"](o), s.collapse(i)), s.insertNode(s.createContextualFragment(e))), o
        }), this
    }, r.isNumber = function (t) {
        return "number" == r.type(t) && isFinite(t)
    }, r.isString = function (t) {
        return "string" == r.type(t)
    }, r.forEach = r.object.each, r.fn.forEach = function (t) {
        return r.forEach(this, t)
    };
    var s = 1;
    r.id = function () {
        return s++
    }
});;
define("common:widget/js/util/log/log.js", function (o, t) {
    function e(o) {
        var t = o.split(","),
            e = {};
        return a.forEach(t, function (o) {
            var t = o.split(":");
            e[t[0]] = t[1]
        }), e
    }

    function n(o) {
        var t = "IK_LOG_SESSION",
            e = a.cookie.get(t);
        if (e && ("pv" == o.action || "entrance" == o.action)) {
            if (!document.referrer) return a.cookie.remove(t, {
                path: "/"
            }), a.cookie.remove(t + "_STEP", {
                path: "/"
            }), void a.cookie.remove(t + "_LAST_URL", {
                path: "/"
            });
            var n = a.cookie.get(t + "_STEP"),
                i = a.cookie.get(t + "_LAST_URL"),
                r = location.href;
            i != r && (n = parseInt(n, 10) + 1, o.step = n, o.sessionid = e, a.cookie.set(t + "_STEP", n, {
                path: "/"
            }), a.cookie.set(t + "_LAST_URL", r, {
                path: "/"
            }))
        }
    }
    var a = o("common:widget/js/util/tangram/tangram.js");
    _globalOptions = {}, t.log = function (o) {
        var t = new Image,
            e = "bd_iknow_log_" + Math.floor(2147483648 * Math.random()).toString(36);
        window[e] = t, t.onload = t.onerror = t.onabort = function () {
            t.onload = t.onerror = t.onabort = null, window[e] = null, t = null
        }, t.src = o
    }, t.send = function (o) {
        var e = "http://nsclick.baidu.com/v.gif?",
            i = {
                pid: 102,
                url: location.href
            };
        a.extend(i, _globalOptions.global || {}), a.extend(i, _globalOptions[o.action] || {});
        var r = a.extend(i, o);
        return r.type = a.isNumeric(r.type) ? r.type : r.key, n(r), e += a.param(r), t.log(e), e
    }, t.parse = e, t.addKey = function (o, t) {
        var e = a.extend({
            append: !1,
            action: "global",
            separator: ","
        }, t || {});
        _globalOptions[e.action] = _globalOptions[e.action] || {}, a.each(o, function (o, t) {
            e.append && _globalOptions[e.action][o] ? _globalOptions[e.action][o] += e.separator + t : _globalOptions[e.action][o] = t
        })
    }, t.init = function (o) {
        try {
            var e = a.extend({
                query: "",
                action: "click",
                target: "a"
            }, o || {});
            if (!e.query) return;
            var n = e.query;
            delete e.query, a(n).delegate(e.target, e.action, function () {
                var o = a(this);
                if (o.data("log") || o.attr("log")) {
                    var n = t.parse(o.data("log") || o.attr("log"));
                    o.is("a") && !n.url && (n.url = o.attr("href")), n = a.extend(a.extend({}, e), n), t.send(n)
                }
            })
        } catch (i) {
            "undefined" != typeof alog && alog("exception.fire", "catch", {
                msg: i.message,
                path: "common:widget/js/util/log/log.js",
                method: "",
                ln: 176
            })
        }
    }, t.stat = function (o) {
        a.sio("/stat?" + o).log()
    }, t.startSession = function (o) {
        var t = "IK_LOG_SESSION";
        o = o || +new Date, a.cookie.set(t, o, {
            path: "/"
        }), a.cookie.set(t + "_STEP", 0, {
            path: "/"
        })
    }
});;
define("common:widget/js/util/form/form.js", function (n, t, i) {
    var e = n("common:widget/lib/jquery/jquery.js"),
        o = function (n) {
            var t = this,
                i = e({});
            e.extend(t, {
                guid: e.guid++,
                on: function (n, t) {
                    i.on(n, t)
                }, fire: function (n, t) {
                    i.trigger(n, t)
                }, un: function (n, t) {
                    i.unbind(n, t)
                }
            }), t.id = t.name = "form-" + t.guid, t.instance = e("<form></form>").attr({
                name: t.name,
                id: t.id,
                method: "get",
                action: "/submit"
            }).appendTo(document.body), e.each(n, function (n, i) {
                e.isFunction(i) ? t.on(n, i) : e.isPlainObject(i) && "input" == n ? e.each(i, function (n, i) {
                    e('<input type="hidden" name="' + n + '" />').val(i).appendTo(t.instance)
                }) : t.instance.attr(n, i)
            })
        };
    e.extend(o.prototype, {
        get: function () {
            return this.instance
        }, dispose: function () {
            this.instance.remove()
        }, submit: function () {
            return this.instance.submit(), this
        }
    }), i.exports = o
});;
define("common:widget/js/util/uri/uri.js", function (t, m, o) {
    var a = (t("common:widget/lib/jquery/jquery.js"), {
        bindok: "/static/common/html/bindok_b31ece9.html",
        jump: "/static/common/html/jump_a132b4c.html",
        map: "/static/common/html/map_4e9c07c.html",
        qbasktoteam: "/static/common/html/qbasktoteam_d726756.html",
        username: "/static/common/html/username_795a017.html",
        v2Jump: "/static/common/html/v2Jump_87877d8.html",
        v3Jump: "/static/common/html/v3Jump_13360c2.html",
        xd: "/static/common/html/xd_2e211f5.html",
        addmapBrowse: "/static/common/html/map_add_for_browse_23f1434.html",
        addmapAddress: "/static/common/html/map_add_address_c352765.html",
        userSetJump: "/static/common/html/user_set_jump_7280f8b.html",
        clipboardSwf: "/static/common/swf/zeroClipboard_d027837.swf",
        fileUploaderSwf: "/static/common/swf/fileUploader_3a1c6cc.swf",
        swfupload: "/static/common/swf/swfupload_3a1c6cc.swf",
        songofjoySwf: "/static/common/swf/songofjoy/songofjoy_734fd4e.swf",
        lotterySwf: "/static/common/swf/lottery/lottery_c6a72fa.swf",
        lotteryXml: "/static/common/swf/lottery/lottery_830d953.xml",
        uploadSwf: "/static/common/swf/upload_6c721a5.swf",
        uploadSwfDoc: "/static/swf/uploaderApi.swf",
        jsUploadSwf: "/static/common/swf/JSUpload_e219cf0.swf",
        expertAvatarSwf: "/static/common/swf/expertAvatar_bbb4201.swf",
        hangjiaAvatarSwf: "/static/common/swf/hangjiaAvatar_8c47fb0.swf",
        zhidaoSwf: "/static/common/swf/zhidao_0e76df1.swf",
        raffleSwf: "/static/common/swf/raffle_80d754e.swf"
    });
    o.exports = a
});;
define("common:widget/js/util/store/store.js", function (e, t, n) {
    function r() {
        try {
            return f in s && s[f]
        } catch (e) {
            return !1
        }
    }

    function i() {
        try {
            return d in s && s[d] && s[d][s.location.hostname]
        } catch (e) {
            return !1
        }
    }

    function o(e) {
        return function () {
            var t = Array.prototype.slice.call(arguments, 0);
            t.unshift(a), l.body.appendChild(a), a.addBehavior("#default#userData"), a.load(f);
            var n = e.apply(c, t);
            return l.body.removeChild(a), n
        }
    }
    var a, u = e("common:widget/js/util/tangram/tangram.js"),
        c = {},
        s = window,
        l = s.document,
        f = "localStorage",
        d = "globalStorage",
        m = "__storejs__";
    if (c.disabled = !1, c.set = function () {}, c.get = function () {}, c.remove = function () {}, c.clear = function () {}, c.transact = function (e, t) {
        var n = c.get(e);
        "undefined" == typeof n && (n = {}), t(n), c.set(e, n)
    }, c.serialize = function (e) {
        return u.json.stringify(e)
    }, c.deserialize = function (e) {
        return "string" != typeof e ? void 0 : u.json.parse(e)
    }, r()) a = s[f], c.set = function (e, t) {
        a.setItem(e, c.serialize(t))
    }, c.get = function (e) {
        return c.deserialize(a.getItem(e))
    }, c.remove = function (e) {
        a.removeItem(e)
    }, c.clear = function () {
        a.clear()
    };
    else if (i()) a = s[d][s.location.hostname], c.set = function (e, t) {
        a[e] = c.serialize(t)
    }, c.get = function (e) {
        return c.deserialize(a[e] && a[e].value)
    }, c.remove = function (e) {
        delete a[e]
    }, c.clear = function () {
        for (var e in a) delete a[e]
    };
    else if (l.documentElement.addBehavior) {
        var a = l.createElement("div");
        c.set = o(function (e, t, n) {
            e.setAttribute(t, c.serialize(n)), e.save(f)
        }), c.get = o(function (e, t) {
            return c.deserialize(e.getAttribute(t))
        }), c.remove = o(function (e, t) {
            e.removeAttribute(t), e.save(f)
        }), c.clear = o(function (e) {
            var t = e.XMLDocument.documentElement.attributes;
            e.load(f);
            for (var n, r = 0; n = t[r]; r++) e.removeAttribute(n.name);
            e.save(f)
        })
    }
    try {
        c.set(m, m), c.get(m) != m && (c.disabled = !0), c.remove(m)
    } catch (v) {
        c.disabled = !0
    }
    n.exports = c
});;
define("common:widget/js/util/template/template.js", function (e, n, t) {
    var a = function (e, n) {
        var t = function () {
                if (!this.document) return a._compile(e);
                var n = document.getElementById(e);
                if (n) {
                    if (a.cache[e]) return a.cache[e];
                    var t = /^(textarea|input)$/i.test(n.nodeName) ? n.value : n.innerHTML;
                    return a._compile(t)
                }
                return a._compile(e)
            }(),
            r = a._isObject(n) ? t(n) : t;
        return t = null, r
    };
    a.cache = {}, a.LEFT_DELIMITER = a.LEFT_DELIMITER || "<%", a.RIGHT_DELIMITER = a.RIGHT_DELIMITER || "%>", a.ESCAPE = !0, a._encodeHTML = function (e) {
        return String(e).replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\\/g, "&#92;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    }, a._encodeReg = function (e) {
        return String(e).replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1")
    }, a._encodeEventHTML = function (e) {
        return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\\\\/g, "\\").replace(/\\\//g, "/").replace(/\\n/g, "\n").replace(/\\r/g, "\r")
    }, a._compile = function (e) {
        var n = "var _template_fun_array=[];\nvar fn=(function(data){\nvar _template_varName='';\nfor(name in data){\n_template_varName+=('var '+name+'=data[\"'+name+'\"];');\n};\neval(_template_varName);\n_template_fun_array.push('" + a._analysisStr(e) + "');\n_template_varName=null;\n})(_template_object);\nfn = null;\nreturn _template_fun_array.join('');\n";
        return new Function("_template_object", n)
    }, a._isObject = function (e) {
        return "function" == typeof e || !(!e || "object" != typeof e)
    }, a._analysisStr = function (e) {
        var n = a.LEFT_DELIMITER,
            t = a.RIGHT_DELIMITER,
            r = a._encodeReg(n),
            p = a._encodeReg(t);
        return e = String(e).replace(new RegExp("(" + r + "[^" + p + "]*)//.*\n", "g"), "$1").replace(new RegExp("<!--.*?-->", "g"), "").replace(new RegExp(r + "\\*.*?\\*" + p, "g"), "").replace(new RegExp("[\\r\\t\\n]", "g"), "").replace(new RegExp(r + "(?:(?!" + p + ")[\\s\\S])*" + p + "|((?:(?!" + r + ")[\\s\\S])+)", "g"), function (e, n) {
            var t = "";
            if (n)
                for (t = n.replace(/\\/g, "&#92;").replace(/'/g, "&#39;");
                    /<[^<]*?&#39;[^<]*?>/g.test(t);) t = t.replace(/(<[^<]*?)&#39;([^<]*?>)/g, "$1\r$2");
            else t = e;
            return t
        }).replace(new RegExp("(" + r + ":?[hvu]?[\\s]*?=[\\s]*?[^;|" + p + "]*?);[\\s]*?" + p, "g"), "$1" + t).replace(new RegExp("(" + r + "[\\s]*?var[\\s]*?.*?[\\s]*?[^;])[\\s]*?" + p, "g"), "$1;" + t).split(n).join("    "), e = a.ESCAPE ? e.replace(new RegExp("\\t=(.*?)" + p, "g"), "',typeof($1) === 'undefined'?'':baiduTemplate._encodeHTML($1),'") : e.replace(new RegExp("\\t=(.*?)" + p, "g"), "',typeof($1) === 'undefined'?'':$1,'"), e = e.replace(new RegExp("\\t:h=(.*?)" + p, "g"), "',typeof($1) === 'undefined'?'':baiduTemplate._encodeHTML($1),'").replace(new RegExp("\\t(?::=|-)(.*?)" + p, "g"), "',typeof($1)==='undefined'?'':$1,'").replace(new RegExp("\\t:u=(.*?)" + p, "g"), "',typeof($1)==='undefined'?'':encodeURIComponent($1),'").replace(new RegExp("\\t:v=(.*?)" + p, "g"), "',typeof($1)==='undefined'?'':baiduTemplate._encodeEventHTML($1),'").split("    ").join("');").split(t).join("_template_fun_array.push('").split("\r").join("\\'")
    }, window.baiduTemplate = a, a.LEFT_DELIMITER = "<#", a.RIGHT_DELIMITER = "#>", t.exports = a
});;
define("common:widget/js/util/visibility/visibility.js", function (i, e, n) {
    var t = i("common:widget/lib/jquery/jquery.js"),
        o = i("common:widget/js/util/event/event.js"),
        d = {};
    o.create(d);
    var c = "hidden",
        m = function () {
            return "undefined" != typeof this[c] ? void d.trigger(this[c] ? "hide" : "show") : void 0
        };
    c in document ? t(document).on("visibilitychange", m) : (c = "mozHidden") in document ? t(document).on("mozvisibilitychange", m) : (c = "webkitHidden") in document ? t(document).on("webkitvisibilitychange", m) : (c = "msHidden") in document && t(document).on("msvisibilitychange", m), n.exports = d
});;
define("common:widget/js/util/add-stylesheets/add-stylesheets.js", function (e, t, s) {
    var n = e("common:widget/lib/jquery/jquery.js");
    s.exports = function (e) {
        if ("object" == n.type(e) && !n.isEmptyObject(e)) {
            var t = ["\n"];
            for (var s in e) t.push(s, "{", e[s], "}\n");
            if (document.createStyleSheet) document.createStyleSheet().cssText = t.join("");
            else {
                var o = n('<style type="text/css"></style>');
                o.append(t.join("")).appendTo(n("head")[0])
            }
        }
    }
});;
define("common:widget/js/util/countdown/countdown.js", function (t, n, i) {
    function s(t, n) {
        var i = n - ("" + Math.abs(t)).length + 1;
        return Array(i > 0 ? i : 0).join(0) + t
    }
    var r = t("common:widget/js/util/tangram/tangram.js"),
        a = t("common:widget/js/ui/base/base.js"),
        e = a(function (t) {
            var n = this;
            this.dataArr = [], T.each(t || [], function () {
                this.seconds > 0 && n.dataArr.push(this)
            }), this._inter = null
        }).extend({
            callback: function (t) {
                var n = this.dateFormat || "#{HH}:#{mm}:#{ss}";
                this.elem.html(r.string(n).format(t))
            }, execution: function () {
                var t = this,
                    n = 0;
                r(this.dataArr).each(function (i) {
                    var s = t._timer(--this.seconds);
                    null == s ? (this.complete && this.complete.call(this), t.dataArr.splice(i, 1)) : (n++, this.callback && this.callback.call(this, s))
                }), 0 === n && t.stop()
            }, add: function (t) {
                return t.seconds > 0 && this.dataArr.push(t), this
            }, remove: function (t) {
                var n = this.dataArr;
                return r(n).each(function (i) {
                    this.name == t && n.splice(i, 1)
                }), this
            }, start: function () {
                if (null === this._inter) {
                    var t = this;
                    this.execution(), this._inter = setInterval(function () {
                        t.execution()
                    }, 1e3)
                }
                return this
            }, stop: function () {
                clearInterval(this._inter), this._inter = null
            }, _timer: function (t) {
                var n = {
                    dd: Math.floor(t / 86400),
                    HH: s(Math.floor(t / 3600) % 24, 2),
                    mm: s(Math.floor(t / 60) % 60, 2),
                    ss: s(Math.floor(t / 1) % 60, 2)
                };
                return n.dd <= 0 && n.HH <= 0 && n.mm <= 0 && n.ss <= 0 && (n = null), n
            }
        });
    i.exports = e
});;
define("common:widget/js/util/img-resize/img-resize.js", function (i, t, r) {
    function e(i, t, r, e, a) {
        return o(i).each(function () {
            if (o(this).is("img")) {
                var i = o(this).hide(),
                    c = t || i.attr("width"),
                    u = r || i.attr("height"),
                    g = a || i.attr("align") || "center",
                    d = i.attr("res") || i.attr("src"),
                    f = "img_" + ++o.guid;
                if (e = o.isFunction(e) ? e : function () {
                    this.remove()
                }, h[d]) return i.css(s(h[d], c, u, g)).attr({
                    src: h[d].src
                }).show();
                var m = new Image;
                window[f] = m, m.onload = function () {
                    h[d] = {
                        width: this.width,
                        height: this.height,
                        src: this.src
                    };
                    var t = i.attr("id") || f;
                    i.after(m).remove(), o(m).css(s(h[d], c, u, g)).show(), m.id = t, n(this, f)
                }, m.onerror = function (t) {
                    e.call(i, t), n(this, f)
                }, m.src = d + "?k=" + f
            }
        })
    }

    function n(i, t) {
        i.onload = i.onerror = null, window[t] = null, i = null
    }

    function s(i, t, r, e) {
        var n = i.height,
            s = i.width;
        if (s > 0 && n > 0) {
            var h = Math.min(t / s, r / n);
            h = h > 1 ? 1 : h;
            var a = {
                width: s * h,
                height: n * h
            };
            return "center" == e && o.extend(a, {
                marginLeft: (t - s * h) / 2,
                marginTop: (r - n * h) / 2
            }), a
        }
        return {}
    }
    var o = i("common:widget/lib/jquery/jquery.js"),
        h = {};
    o.fn.imgResize = function (i, t, r, n) {
        return e(this, i, t, r, n)
    }, r.exports = {
        resize: e,
        getSize: s
    }
});;
define("common:widget/js/util/num2chinese/num2chinese.js", function (n, e, t) {
    t.exports = function (n) {
        for (var e = n.toString(), t = parseInt(e.split("").reverse().join(""), 10), i = ["", "\u5341", "\u767e", "\u5343", "\u4e07"], o = ["\u96f6", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u4e03", "\u516b", "\u4e5d", "\u5341"], r = e.length, s = "", u = t.toString().length, c = 0; u > c; c++) s += 0 == c && 2 == r && t % 10 == 1 ? "" : o[t % 10], s += t % 10 == 0 ? "" : i[r - c - 1], t = Math.floor(t / 10);
        return s
    }
});;
define("common:widget/js/util/suffix-str/suffix-str.js", function (t, e, n) {
    var i = t("common:widget/js/util/tangram/string.js");
    n.exports = function (t, e, n) {
        var r = t || "";
        if ("string" == typeof t && Math.max(Math.floor(e), 0)) {
            n = "undefined" == typeof n ? "..." : n.toString();
            var s = i.getByteLength(n);
            s > e && (n = i.subByte(n, e), s = i.getByteLength(n)), i.getByteLength(t) > e && (r = i.subByte(t, e - s) + n)
        }
        return r
    }
});;
define("common:widget/js/util/tangram/timeFormater.js", function (e, t) {
    function r(e, t, r) {
        switch (r) {
        case "zh":
            return i(e + 1) + "\u6708";
        case "en":
            return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][e].substr(0, t ? 3 : void 0);
        default:
            return ""
        }
    }

    function n(e, t, r) {
        switch (r) {
        case "zh":
            return (t ? "\u5468" : "\u661f\u671f") + (e ? i(e) : "\u65e5");
        case "en":
            return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][e].substr(0, t ? 3 : void 0);
        default:
            return ""
        }
    }

    function a(e, t) {
        switch (t) {
        case "zh":
            return i(e) + "\u65e5";
        case "en":
            return e + (4 > e % 10 && 1 != Math.floor(e / 10) ? ["th", "st", "nd", "rd"][e % 10] : "th");
        default:
            return ""
        }
    }
    var u = e("common:widget/js/util/tangram/number.js").pad,
        i = e("common:widget/js/util/num2chinese/num2chinese.js");
    t.build = function (e) {
        var t;
        switch (typeof e) {
        case "number":
            t = new Date(parseInt(e));
            break;
        case "string":
            if (Number(e)) t = arguments.callee(parseInt(e));
            else {
                e = e.replace(/-/g, "/").replace("/+d+/", "");
                var r = e.match(/^(.+?)\.(\d+)$/);
                t = new Date(r && r[2] ? +new Date(r[1]) + parseInt(r[2]) : e)
            }
            break;
        default:
            t = e instanceof Date ? e : new Date
        }
        if ("Invalid Date" == t) throw new Error("[TimeFormater Exception]: Invalid Date!");
        return t
    }, t.format = function (e, t, i) {
        e = this.build(e), t = t || "yyyy/MM/dd HH:mm:ss", i = /^(zh|en)$/i.test(i || (navigator.browserLanguage || navigator.language).substr(0, 2)) ? RegExp.$1.toLowerCase() : "en";
        var s = {
            "h+": e.getHours() > 12 ? e.getHours() - 12 : e.getHours(),
            "H+": e.getHours(),
            "m+": e.getMinutes(),
            "s+": e.getSeconds()
        };
        for (var o in s) t = t.replace(new RegExp(o, "g"), function (e) {
            return u(s[o], Math.min(2, e.length))
        });
        return t = t.replace(/f+/g, function (t) {
            return u(e.getMilliseconds(), 3).substr(0, Math.min(t.length, 3))
        }), t = t.replace(/y+/g, function (t) {
            return t.length < 3 ? u(e.getFullYear() % 1e3, Math.min(t.length, 2)) : u(e.getFullYear(), t.length)
        }), t = t.replace(/M+/g, function (t) {
            return t.length < 3 ? u(e.getMonth() + 1, t.length) : r(e.getMonth(), 3 == t.length, i)
        }), t = t.replace(/d+/g, function (t) {
            return t.length < 3 ? u(e.getDate(), t.length) : a(e.getDate(), i)
        }), t = t.replace(/w+/g, function (t) {
            return n(e.getDay(), t.length < 2, i)
        })
    }, t.timeSpan = function (e, t, r) {
        var n = r;
        e = this.build(e), t = this.build(t), r = r || "d\u5929h\u5c0f\u65f6m\u5206s\u79d2f\u6beb\u79d2";
        for (var a = Math.abs(t.getTime() - e.getTime()), i = [{
            pattern: /d+/g,
            rate: 864e5
        }, {
            pattern: /h+/g,
            rate: 36e5
        }, {
            pattern: /m+/g,
            rate: 6e4
        }, {
            pattern: /s+/g,
            rate: 1e3
        }, {
            pattern: /f+/g,
            rate: 1
        }], s = 0; s < i.length; ++s) {
            i[s].value = a;
            for (var o = 0; s > o; ++o) r.match(i[o].pattern) && (i[s].value -= i[o].value * i[o].rate);
            i[s].value = Math.floor(i[s].value / i[s].rate)
        }
        for (var s = 0; s < i.length; ++s) r = r.replace(i[s].pattern, function (e) {
            var t = Math.min(e.length, 0 == s ? 1 / 0 : 4 == s ? 3 : 2);
            return u(i[s].value, t)
        });
        return r = n ? r : r.replace(/(\d+)(?:\u5929|\u5c0f\u65f6|\u5206|\u79d2|\u6beb\u79d2)/g, function (e, t) {
            return Number(t) ? e : ""
        }), (t >= e ? "" : "-") + r
    }, t.timeDiff = function (e, t) {
        if (null == e || "undefined" == typeof e) throw new Error("[TimeFormater Exception]: Invalid arguments!");
        return this.timeSpan(0, e, t)
    }, t.startEnd = function (e, t, r, n, a, u) {
        return e = this.build(e), t = this.build(t), a = (null == a || "undefined" == typeof a ? "-" : a).toString(), r = r || "yyyy/MM/dd HH:mm:ss", n = n || r, this.format(e, r, u) + a + this.format(t, n, u)
    }
});;
define("common:widget/js/ui/dialog/dialog.js", function (t, e, i) {
    var n = t("common:widget/lib/jquery/jquery.js"),
        o = t("common:widget/js/util/event/event.js"),
        s = t("common:widget/js/ui/base/base.js"),
        a = t("common:widget/js/util/tangram/browser.js");
    t("common:widget/lib/jquery.ui/jquery.ui.dialog.js");
    var c = {},
        l = s().extend({
            init: function (t) {
                try {
                    var e = this;
                    t = n.extend({
                        modal: !0,
                        closeText: "\u5173\u95ed",
                        resizable: !1,
                        draggable: !0,
                        dialogClass: t.className,
                        btnAlign: "center"
                    }, t || {}), a.ie && a.ie < 7 && (t.open = function () {
                        n(".ui-widget-overlay").height(n(document).height())
                    }), e.instance = t.target ? n(t.target).dialog(t) : n("<div>", {
                        id: "ik-dlg-" + e.guid
                    }).html(t.content).dialog(t), n.isArray(t.buttons) && e.customBttons(t.buttons), e.instance.next().css("text-align", t.btnAlign), t.autoDispose && e.instance.on("dialogclose", function () {
                        n(this).dialog("destroy").remove(), delete c[e.guid], e.isDestroy = !0
                    }), c[e.guid] = e.instance, n(window).on("resize", function () {
                        e && e.center()
                    })
                } catch (i) {
                    "undefined" != typeof alog && alog("exception.fire", "catch", {
                        msg: i.message,
                        path: "common:widget/js/ui/dialog/dialog.js",
                        method: "",
                        ln: 65
                    })
                }
            }, customBttons: function (t) {
                var e = this,
                    i = this.instance.next().children("div"),
                    o = i.find("button");
                n(t).each(function (t) {
                    var o = this;
                    !this.className && 2 > t && (this.className = ["btn-32-green dialog-btn dialog-btn-1", "btn-32-white dialog-btn dialog-btn-2"][t]), n('<a href="#" />').text(this.text || "").appendTo(i).addClass(this.className || "").click(function (t) {
                        try {
                            t.preventDefault(), o.click.apply(e.instance, arguments)
                        } catch (t) {
                            "undefined" != typeof alog && alog("exception.fire", "catch", {
                                msg: t.message,
                                path: "common:widget/js/ui/dialog/dialog.js",
                                method: "",
                                ln: 80
                            })
                        }
                    })
                }), o.remove()
            }, open: function () {
                !this.isDestroy && this.instance.dialog("open")
            }, close: function () {
                !this.isDestroy && this.instance.dialog("close")
            }, center: function () {
                !this.isDestroy && this.instance.dialog("option", "position", {
                    my: "center",
                    at: "center",
                    of: window
                })
            }, getDialogContainer: function () {
                return this.isDestroy ? null : this.instance.dialog("widget")
            }, setSize: function (t) {
                !this.isDestroy && this.instance.dialog("option", t)
            }, setTitle: function (t) {
                !this.isDestroy && t && this.instance.dialog("option", "title", t)
            }
        });
    o.on("dialog.close", function () {
        l.close()
    }), i.exports = n.extend(l, {
        alert: function (t, e) {
            return e = n.extend({
                title: "\u77e5\u9053\u63d0\u793a",
                content: t,
                buttons: [{
                    text: "\u786e\u5b9a",
                    click: function () {
                        try {
                            n.isFunction(e.onaccept) && e.onaccept.apply(this, arguments), n(this).dialog("close")
                        } catch (t) {
                            "undefined" != typeof alog && alog("exception.fire", "catch", {
                                msg: t.message,
                                path: "common:widget/js/ui/dialog/dialog.js",
                                method: "",
                                ln: 124
                            })
                        }
                    }
                }]
            }, e || {}), new l(e)
        }, confirm: function (t, e) {
            return e.buttons = e.buttons || [{
                text: "\u786e\u5b9a",
                click: function () {
                    try {
                        n.isFunction(e.onaccept) && e.onaccept.apply(this, arguments)
                    } catch (t) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: t.message,
                            path: "common:widget/js/ui/dialog/dialog.js",
                            method: "",
                            ln: 134
                        })
                    }
                }
            }, {
                text: "\u53d6\u6d88",
                click: function () {
                    try {
                        n.isFunction(e.oncancel) && e.oncancel.apply(this, arguments), n(this).dialog("close")
                    } catch (t) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: t.message,
                            path: "common:widget/js/ui/dialog/dialog.js",
                            method: "",
                            ln: 140
                        })
                    }
                }
            }], l.alert(t, e)
        }, iframe: function (t) {
            var e = '<iframe frameborder="no" class="ui-dialog-content-iframe" src="' + t.content + '"></iframe>';
            return t.content = e, t.buttons || (t.buttons = []), t.dialogClass = "dialog-iframe", l.alert(e, t)
        }, close: function () {
            n.each(c, function (t, e) {
                try {
                    e && e.dialog("close")
                } catch (i) {}
            })
        }
    })
});;
define("common:widget/js/ui/suggestion/suggestion.js", function (e, t, i) {
    var o = e("common:widget/js/util/tangram/tangram.js"),
        n = (e("common:widget/lib/jquery.ui/jquery.ui.autocomplete.js"), e("common:widget/js/ui/base/base.js")),
        a = {};
    baidu = "undefined" == typeof baidu ? {} : baidu, i.exports = n(function () {
        this.target = ""
    }).extend({
        init: function () {
            try {
                var e = this;
                e.fire("beforeinit"), e.target && !e.checkDisabled() && o(e.target).keyup(function (t) {
                    t.keyCode >= 37 && t.keyCode <= 40 || e.getData()
                }).on("paste", function () {
                    setTimeout(function () {
                        e.getData()
                    }, 20)
                })
            } catch (t) {
                "undefined" != typeof alog && alog("exception.fire", "catch", {
                    msg: t.message,
                    path: "common:widget/js/ui/suggestion/suggestion.js",
                    method: "",
                    ln: 37
                })
            }
        }, checkDisabled: function () {
            return !1
        }, getData: function () {
            var e = this,
                t = e.checkDisabled(),
                i = o.trim(o(e.target).val()),
                n = e.url || "http://nssug.baidu.com/su?wd=#word#&prod=zhidao";
            t || "" == i || (a[e.guid] = a[e.guid] || {}, a[e.guid][escape(i)] ? o(e.target).autocomplete({
                source: a[e.guid][escape(i)],
                minLength: 0,
                create: function (t) {
                    e.fire("create", t)
                }, open: function (t) {
                    e.fire("open", t)
                }, select: function (t, i) {
                    e.fire("select", i)
                }
            }).autocomplete("search", "") : (baidu.sug = function (t) {
                e.fire("dataloaded", t), a[e.guid][escape(i)] = t.s, e.getData()
            }, o.getScript(n.replace("#word#", encodeURIComponent(i)))))
        }
    })
});;
define("common:widget/js/ui/lazyload/lazyload.js", function (a) {
    var o = a("common:widget/lib/jquery/jquery.js");
    o.fn.lazyload = function (a) {
        function t() {
            i.each(function () {
                o(window).scrollTop() + o(window).height() > o(this).offset().top - e.threshold && o(this).trigger("appear")
            })
        }
        var e = o.extend({
                threshold: 100,
                effect: "show",
                appear: null,
                load: null
            }, a),
            i = this;
        return this.each(function () {
            var t = o(this);
            t.one("appear", function () {
                if (this.loaded = !0, !e.appear || e.appear.call(this, a) !== !1) {
                    if (t.data("img")) {
                        var n = "IMG" == this.tagName.toUpperCase() ? t : o("<img />");
                        n.on("load", function () {
                            "IMG" != t.prop("tagName").toUpperCase() && n.appendTo(t), n.hide()[e.effect](), e.load && e.load.call(this, a)
                        }), n.attr("src", t.data("img"))
                    }
                    i = o(o.grep(i, function (a) {
                        return !a.loaded
                    }))
                }
            })
        }), o(function () {
            t()
        }), o(window).on("resize scroll", function () {
            t()
        }), this
    }
});;
define("common:widget/js/ui/tip/tip.js", function (t, i, e) {
    var o = t("common:widget/lib/jquery/jquery.js"),
        s = t("common:widget/js/ui/base/base.js");
    t("common:widget/lib/jquery.ui/jquery.ui.tooltip.js"), e.exports = s(function (t) {
        var i = this;
        i.position = o.extend({
            my: "left top",
            at: "left bottom+10",
            collision: "none",
            using: function (e, s) {
                "popcms" != t.rightbottom && o(this).css(e), i.arrow && o("<div>").addClass("tip-arrow").addClass("tip-arrow-" + (i.direction || s[s.important])).html("<em></em><span></span>").appendTo(this), i.closebox && (o('<a href="#" class="tip-close" title="\u5173\u95ed">\xd7</a>').addClass(s.vertical).addClass(s.horizontal).click(function (t) {
                    try {
                        t.preventDefault(), i.autoDispose ? i.close() : i.hide(), i.fire("closeall")
                    } catch (t) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: t.message,
                            path: "common:widget/js/ui/tip/tip.js",
                            method: "",
                            ln: 44
                        })
                    }
                }).appendTo(this), o(this).addClass("tip-has-close")), i.shadow && o(this).addClass("tip-shadow"), i.radius && o(this).addClass("tip-radius")
            }
        }, t.position), delete t.position, i.content = "", i.target = "", i.tooltipClass = "", i.arrow = !0, i.closebox = !1, i.shadow = !0, i.radius = !0, i.autoDispose = !0, i.effect = !0
    }).extend({
        init: function (t) {
            try {
                var i = this;
                if (i.target = o(i.target), 0 == i.target.size()) return;
                i.target.attr("title") || i.target.attr("title", ""), i.target.tooltip({
                    content: i.content,
                    position: i.position,
                    tooltipClass: i.tooltipClass,
                    open: function (t) {
                        i.fire("onopen", t)
                    }, close: function (t) {
                        i.fire("onclose", t)
                    }
                }), i.instance = i.target.data("ui-tooltip"), i.target.tooltip("open", {
                    target: i.instance.element
                }), i._status = "show", t.autoDisplay === !1 && this.close()
            } catch (e) {
                "undefined" != typeof alog && alog("exception.fire", "catch", {
                    msg: e.message,
                    path: "common:widget/js/ui/tip/tip.js",
                    method: "",
                    ln: 99
                })
            }
        }, getTipContainer: function () {
            return this.instance._find(o(this.target))
        }, getTipBody: function () {
            return this.getTipContainer().find(".ui-tooltip-content")
        }, getStatus: function () {
            return this._status
        }, open: function () {
            var t = this.target;
            t.attr("title") || t.attr("title", ""), t.tooltip("open", {
                target: this.instance.element
            }), this._status = "show", this.fire("show")
        }, show: function () {
            this.autoDispose ? this.open() : (this.getTipContainer()[this.effect ? "fadeIn" : "show"](), this._status = "show")
        }, close: function () {
            this.target.tooltip("close"), this._status = "hide"
        }, hide: function () {
            this.autoDispose ? this.close() : (this.getTipContainer()[this.effect ? "fadeOut" : "hide"](), this._status = "hide")
        }
    })
});;
define("common:widget/js/ui/carousel/carousel.js", function (i, e, t) {
    var s = i("common:widget/lib/jquery/jquery.js"),
        n = i("common:widget/js/ui/base/base.js"),
        a = n().extend({
            init: function (i) {
                try {
                    this.options = s.extend({
                        interval: 3e3,
                        duration: 1e3,
                        items: [],
                        viewSize: 1,
                        direction: "horizontal",
                        serviceItem: ""
                    }, i), this.paused = null, this.sliding = null, this.interval = null, this.activeIndex = 0, this.lastActiveIndex = i.items.length
                } catch (e) {
                    "undefined" != typeof alog && alog("exception.fire", "catch", {
                        msg: e.message,
                        path: "common:widget/js/ui/carousel/carousel.js",
                        method: "",
                        ln: 44
                    })
                }
            }, render: function (i) {
                var e = this;
                if (e.$inner = s("<div/>").addClass("carousel-inner"), s(e.options.items).each(function (i) {
                    s("<div/>").addClass("item").html(this).appendTo(e.$inner).attr("index", i)
                }), e.$items = e.$inner.children(), e.$active = e.$items.slice(0, e.options.viewSize).addClass("active"), e.$misc = s("<div/>").addClass("carousel-misc"), e.options.indicators) {
                    for (var t = s("<ol/>").addClass("carousel-indicators").appendTo(e.$misc), n = 0; n < e.$items.size(); n++) s("<li/>").attr("data-slide-to", n).appendTo(t);
                    t.children().slice(0, e.options.viewSize).addClass("active").first().addClass("first")
                }
                e.$indicators = e.$misc.find(".carousel-indicators li"), e.options.controls && (s("<a/>").addClass("carousel-control carousel-control-left").prependTo(e.$misc), s("<a/>").addClass("carousel-control carousel-control-right").appendTo(e.$misc)), e.target = s(i).append(e.$inner).append(e.$misc).addClass("carousel"), e.initStyle(), e.bindEvents(), e.cycle()
            }, setup: function (i) {
                this.target = s(i), this.target.size() || (this.target = s("#" + i)), this.target.addClass("carousel"), this.$inner = this.target.find(".carousel-inner"), this.$items = this.$inner.children(), this.$active = this.target.find(".item.active"), this.$active.size() || (this.$active = this.$items.slice(0, this.options.viewSize).addClass("active")), this.$misc = this.target.find(".carousel-misc"), this.$indicators = this.target.find(".carousel-indicators li"), this.initStyle(), this.bindEvents(), this.cycle()
            }, initStyle: function () {
                try {
                    var i = this,
                        e = "horizontal" == i.options.direction ? "width" : "height",
                        t = "horizontal" == i.options.direction ? "left" : "top",
                        n = "horizontal" == i.options.direction ? "top" : "left";
                    i.$items.css(e, 100 / i.options.viewSize + "%").css(n, "0").slice(0, i.options.viewSize).each(function (e, n) {
                        s(n).css(t, 100 * e / i.options.viewSize + "%")
                    })
                } catch (a) {
                    "undefined" != typeof alog && alog("exception.fire", "catch", {
                        msg: a.message,
                        path: "common:widget/js/ui/carousel/carousel.js",
                        method: "",
                        ln: 118
                    })
                }
            }, bindEvents: function () {
                var i = this;
                i.target.on("mouseenter", s.proxy(i.pause, i)).on("mouseleave", s.proxy(i.cycle, i)).on("click", ".carousel-control-left", function (e) {
                    try {
                        e.preventDefault(), i.prev()
                    } catch (e) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: e.message,
                            path: "common:widget/js/ui/carousel/carousel.js",
                            method: "",
                            ln: 127
                        })
                    }
                }).on("click", ".carousel-control-right", function (e) {
                    try {
                        e.preventDefault(), i.next()
                    } catch (e) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: e.message,
                            path: "common:widget/js/ui/carousel/carousel.js",
                            method: "",
                            ln: 131
                        })
                    }
                }).on("click", ".carousel-indicators li", function (e) {
                    try {
                        e.preventDefault(), i.to(s(e.currentTarget).data("slide-to"))
                    } catch (e) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: e.message,
                            path: "common:widget/js/ui/carousel/carousel.js",
                            method: "",
                            ln: 135
                        })
                    }
                })
            }, cycle: function (i) {
                return i || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(s.proxy(this.next, this), this.options.interval)), this
            }, pause: function (i) {
                return i || (this.paused = !0), this.interval = clearInterval(this.interval), this
            }, setActiveItems: function () {
                var i = this.activeIndex;
                this.$items.removeClass("active"), this.$active = [], this.$indicators.removeClass("active");
                for (var e = 0; e < this.options.viewSize; e++) {
                    var t = (i + e) % this.$items.size();
                    this.$active.push(this.$items.get(t)), this.$indicators.eq(t).addClass("active")
                }
                return s(this.$active).addClass("active"), this.$active
            }, to: function (i) {
                var e = this,
                    t = e.activeIndex;
                return i > e.$items.length - 1 || 0 > i ? void 0 : e.sliding ? e.once("slid", function () {
                    e.to(i)
                }) : t == i ? e.pause().cycle() : e.slide(i > t ? "next" : "prev", i)
            }, prev: function () {
                return this.sliding ? void 0 : this.slide("prev")
            }, next: function () {
                return this.sliding ? void 0 : this.slide("next")
            }, getActiveIndex: function () {
                return this.activeIndex
            }, isSliding: function () {
                return this.sliding
            }, getLastActiveIndex: function () {
                return this.lastActiveIndex
            }, slide: function (i, e) {
                var t = this,
                    n = t.setActiveItems(),
                    a = "horizontal" == t.options.direction ? "left" : "top",
                    o = t.activeIndex + ("next" == i ? t.options.viewSize : -1);
                o = (t.$items.size() + o) % t.$items.size();
                var c = s(n["next" == i ? 0 : t.options.viewSize - 1]),
                    r = t.$items.eq(o);
                if ("experts" == t.options.serviceItem) {
                    var o = r.attr("index"),
                        l = t.$items.size();
                    if ("next" == i && 0 == o) return !1;
                    if ("prev" == i && o == l - 1) return !1
                }
                if (t.sliding = !0, t.interval && t.pause(), !r.hasClass("active")) {
                    t.fire("slide", {
                        relatedTarget: r[0],
                        direction: i,
                        index: o
                    }), r.css(a, "next" == i ? "100%" : -100 / t.options.viewSize + "%").addClass("active"), t.lastActiveIndex = t.activeIndex;
                    var d = [];
                    s.each(n, function (e) {
                        var n = "next" == i ? -1 : 1,
                            o = {};
                        o[a] = 100 * (e + n) / t.options.viewSize + "%", d.push(s(this).animate(o, t.duration))
                    });
                    var h = {};
                    return h[a] = "prev" == i ? 0 : 100 - 100 / t.options.viewSize + "%", d.push(r.animate(h, t.duration)), s.when.apply(s, d).done(function () {
                        c.removeClass("active"), t.activeIndex = (t.$items.size() + t.activeIndex + ("next" == i ? 1 : -1)) % t.$items.size(), t.setActiveItems(), t.sliding = !1, "undefined" != typeof e && e != t.activeIndex ? t.slide(i, e) : setTimeout(function () {
                            t.fire("slid")
                        }, 0)
                    }), t.cycle(), t
                }
            }
        });
    t.exports = a
});;
define("common:widget/js/ui/pie/pie.js", function (t, e, a) {
    function s(t) {
        this.args = i.extend({
            pieR: 100,
            slices: [{
                percent: 1
            }]
        }, t), i.each(this.args.slices, function (t, e) {
            e.angle = 360 * (e.percent || 0)
        }), i.extend(this.args, {
            pieR: parseInt(this.args.pieR),
            donutR: parseInt(Math.min(this.args.pieR, this.args.donutR || 0)),
            rotation: this.args.rotation || 0,
            flip: "boolean" == i.type(this.args.flip) ? this.args.flip : !1,
            strokeWidth: this.args.strokeWidth || 0,
            animation: i.browser.chrome ? this.args.animation : !1
        }), i.extend(this.args, {
            outerR: this.args.pieR + this.args.strokeWidth,
            innerR: Math.max(this.args.donutR - this.args.strokeWidth, 0)
        }), this.args.boxWidth = this.args.boxHeight = 2 * this.args.outerR
    }

    function r(t) {
        var e = ["E32322", "EA621F", "F18E1C", "FDC60B", "F4E500", "8CBB26", "008E5B", "0696BB", "2A71B0", "444E99", "6D398B", "C4037D"];
        return "#" + e[t % e.length]
    }

    function o(t) {
        s.call(this, t), this.graphEngine = i.browser.ie < 9 ? "vml" : "svg";
        var e = this;
        this.getPie = {
            svg: function () {
                var t = g.svg.createElement("svg").attr({
                    width: e.args.boxWidth,
                    height: e.args.boxHeight,
                    "class": "pie"
                });
                e.args.animation && (t.on("load", function () {
                    o.animate.call(e)
                }), e.clipPath = g.svg.createElement("path").attr("d", g.svg.getSectorPath(0, 0, e.args.outerR, 0)), t.append(g.svg.createElement("defs").append(g.svg.createElement("clipPath").attr("id", "pieAnimateClip").append(e.clipPath))));
                var a = g.svg.createElement("g").attr({
                        transform: "translate(" + e.args.boxWidth / 2 + "," + e.args.boxHeight / 2 + ")scale(" + (e.args.flip ? "-1" : "1") + ",1)rotate(" + e.args.rotation + ")",
                        "clip-path": e.args.animation ? "url(#pieAnimateClip)" : ""
                    }).appendTo(t),
                    s = 0;
                return i.each(e.args.slices, function (t, o) {
                    g.svg.createElement("path").attr({
                        d: g.svg.getSectorPath(s, o.angle, e.args.pieR, e.args.donutR)
                    }).css({
                        fill: o.color || r(t),
                        stroke: e.args.strokeColor || o.color || r(t),
                        strokeWidth: e.args.strokeColor ? e.args.strokeWidth || 1 : 0
                    }).appendTo(a), s += o.angle
                }), e.args.totalAngle = s, t
            }, vml: function () {
                var t = g.vml.createElement("group").attr({
                        coordsize: e.args.boxWidth + "," + e.args.boxHeight,
                        coordorigin: -e.args.boxWidth / 2 + "," + -e.args.boxHeight / 2,
                        "class": "pie"
                    }).css({
                        width: e.args.boxWidth,
                        height: e.args.boxHeight,
                        position: "relative",
                        rotation: e.args.rotation + "deg",
                        flip: e.args.flip ? "x" : ""
                    }),
                    a = 0;
                return i.each(e.args.slices, function (s, o) {
                    g.vml.createElement("shape").attr({
                        path: g.vml.getSectorPath(a, o.angle, e.args.pieR, e.args.donutR),
                        coordsize: e.args.boxWidth + "," + e.args.boxHeight,
                        coordorigin: "0,0",
                        fillcolor: o.color || r(s),
                        stroked: e.args.strokeColor ? !0 : !1,
                        strokecolor: e.args.strokeColor || o.color || r(s),
                        strokeweight: e.args.strokeColor ? e.args.strokeWidth || 1 : 0
                    }).css({
                        width: e.args.boxWidth,
                        height: e.args.boxHeight,
                        position: "absolute"
                    }).appendTo(t), a += o.angle
                }), t
            }
        }
    }
    var i = t("common:widget/js/util/tangram/tangram.js"),
        n = t("common:widget/js/util/add-stylesheets/add-stylesheets.js");
    i.browser.ie < 9 && !document.namespaces.v && (document.namespaces.add("v", "urn:schemas-microsoft-com:vml"), n({
        "v\\:shape,v\\:group": "behavior:url(#default#VML);display:inline-block"
    }));
    var g = {
        svg: {
            createElement: function (t) {
                return i(document.createElementNS("http://www.w3.org/2000/svg", t))
            }, getSectorPath: function (t, e, a, s) {
                t = t * Math.PI / 180, e = e * Math.PI / 180;
                var r = {
                        cos: Math.cos(t),
                        sin: Math.sin(t)
                    },
                    o = {
                        cos: Math.cos(t + e),
                        sin: Math.sin(t + e)
                    };
                return ["M", s * r.cos, s * r.sin, "L", a * r.cos, a * r.sin, "A", a, a, 0, Math.abs(e) > Math.PI ? 1 : 0, 1, a * o.cos, a * o.sin, "L", s * o.cos, s * o.sin, "A", s, s, 0, Math.abs(e) > Math.PI ? 1 : 0, 0, s * r.cos, s * r.sin].join(" ")
            }
        },
        vml: {
            createElement: function (t) {
                return i(document.createElement("<v:" + t + "/>"))
            }, getSectorPath: function (t, e, a, s) {
                var r = t * Math.PI / 180,
                    o = {
                        cos: Math.cos(r),
                        sin: Math.sin(r)
                    };
                return t = Math.round(t * Math.pow(2, 16)), e = Math.round(e * Math.pow(2, 16)), ["m", Math.round(s * o.cos), Math.round(s * o.sin), "l", Math.round(a * o.cos), Math.round(a * o.sin), "ae", 0, 0, a, a, -t, -e, "ae", 0, 0, s, s, -t - e, e, "xe"].join(" ")
            }
        }
    };
    o.animate = function () {
        var t = this,
            e = t.args.animation;
        i({
            aniStep: 0
        }).animate({
            aniStep: 1
        }, i.extend(!0, {}, e, {
            step: function (a) {
                t.clipPath.attr("d", g.svg.getSectorPath(0, a * t.args.totalAngle, t.args.outerR, 0)), "function" == i.type(e.step) && e.step(a)
            }, complete: function () {
                t.clipPath.parent().remove(), "function" == i.type(e.complete) && e.complete()
            }
        }))
    }, o.prototype = {
        constructor: o,
        getHTML: function () {
            var t = this.getNode();
            return "vml" == this.graphEngine ? t.html() : (new XMLSerializer).serializeToString(t[0])
        }, getNode: function () {
            return this.getPie[this.graphEngine]()
        }
    }, a.exports = o
});;
define("common:widget/js/logic/search-box/search-box.js", function (e, t, o) {
    function a() {
        var e = location.pathname,
            t = "/" == e ? "home" : e.match(/\w+/)[0];
        return new RegExp("\\|" + t + "\\|").test("|search|question|home|browse|") ? t : "other"
    }

    function n(e) {
        var t = {
                "http://news.baidu.com/": {
                    query: "ns?cl=2&rn=20&tn=news&t=1&word=#{0}"
                },
                "http://www.baidu.com/": {
                    query: "s?cl=3&wd=#{0}"
                },
                "http://tieba.baidu.com/": {
                    query: "f?kw=#{0}&t=4"
                },
                "http://music.baidu.com/": {
                    query: "search?fr=zhidao&key=#{0}"
                },
                "http://image.baidu.com/": {
                    query: "i?tn=baiduimage&ct=201326592&lm=-1&cl=2&word=#{0}&t=3"
                },
                "http://v.baidu.com/": {
                    query: "v?ct=301989888&rn=20&pn=0&db=0&s=22&word=#{0}"
                },
                "http://map.baidu.com/": {
                    query: "m?word=#{0}&fr=map007",
                    encode: !0
                },
                "http://baike.baidu.com/": {
                    query: "searchword/?word=#{0}&pic=1"
                },
                "http://wenku.baidu.com/": {
                    query: "search?word=#{0}&lm=0&od=0"
                },
                "http://jingyan.baidu.com/": {
                    query: "search?word=#{0}&fr=zhidao",
                    encode: !0
                }
            },
            o = i.trim(e);
        i(".search-box .channel a").each(function () {
            var e = "http://" + this.hostname + "/";
            if ("" != o) {
                if (t[e]) {
                    var a = t[e],
                        n = a.encode ? encodeURIComponent(o) : o;
                    this.href = e + i.string(a.query).format([n])
                }
            } else this.href = e
        })
    }
    var i = e("common:widget/js/util/tangram/tangram.js"),
        r = e("common:widget/js/ui/suggestion/suggestion.js"),
        c = e("common:widget/js/util/event/event.js"),
        s = e("common:widget/js/util/form/form.js"),
        m = e("common:widget/js/util/log/log.js"),
        u = e("common:widget/js/ui/dialog/dialog.js");
    e("common:widget/lib/jquery.placeholder/jquery.placeholder.js");
    var h = (new r({
            target: "#kw",
            beforeinit: function () {
                try {
                    this.checkDisabled = function () {
                        return "1" == i.cookie.get("IK_SUG")
                    }
                } catch (e) {
                    "undefined" != typeof alog && alog("exception.fire", "catch", {
                        msg: e.message,
                        path: "common:widget/js/logic/search-box/search-box.js",
                        method: "",
                        ln: 22
                    })
                }
            }, open: function () {
                var e = i(this.target).autocomplete("widget"),
                    t = i.trim(i(this.target).val());
                0 == e.find(".ui-menu-item-close").size() && (i("<li>").addClass("ui-menu-item-close").html('<a href="#">\u5173\u95ed</a>').appendTo(e), e.find(".ui-menu-item a").each(function () {
                    i(this).html(this.innerHTML.replace(new RegExp(t, "i"), function (e) {
                        return "<em>" + e + "</em>"
                    }))
                }))
            }, create: function () {
                var e = this,
                    t = i(e.target).autocomplete("widget");
                t.delegate(".ui-menu-item-close a", "click", function (t) {
                    try {
                        t.preventDefault(), i(e.target).autocomplete("close").autocomplete("destroy"), i.cookie.set("IK_SUG", "1")
                    } catch (t) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: t.message,
                            path: "common:widget/js/logic/search-box/search-box.js",
                            method: "",
                            ln: 44
                        })
                    }
                })
            }, select: function (e, t) {
                d.val(t.item.value), c.fire("searchBox.addLog", {
                    f: "sug"
                }), o.exports.search(d)
            }
        }), {
            lm: 0,
            rn: 10,
            pn: 0,
            fr: "search",
            ie: "gbk"
        }),
        d = i("#kw"),
        l = i.json.parse(F.context("defaultQuery"));
    m.init({
        type: 8888,
        action: "click",
        query: ".channel"
    }), i("#search-form").submit(function (e) {
        m.send({
            type: 2014,
            pms: "newqb",
            action: "searchbtn"
        }), e.preventDefault(), o.exports.search(d)
    }), i("#ask-btn").click(function (e) {
        try {
            m.send({
                type: 2014,
                pms: "newqb",
                action: "askbtn"
            }), e.preventDefault(), o.exports.ask(d)
        } catch (e) {
            "undefined" != typeof alog && alog("exception.fire", "catch", {
                msg: e.message,
                path: "common:widget/js/logic/search-box/search-box.js",
                method: "",
                ln: 81
            })
        }
    }), d.blur(function () {
        n(i(this).val())
    }), o.exports.search = function (e) {
        e = i(e);
        var t = i.string(e.val()).trim();
        l && (t = t == l.title ? l.value : t), "" == t ? c.fire("searchBox.buttonAction", {
            text: "\u8bf7\u8f93\u5165\u60a8\u8981\u641c\u7d22\u7684\u95ee\u9898",
            evtName: "searchAction",
            log: "btn=search",
            fr: "search_0"
        }) : c.fire("searchBox.searchAction", {
            params: {
                word: t
            },
            extParams: i.url.queryToJson(e.attr("extAttr") || "")
        })
    }, o.exports.ask = function (e) {
        e = i(e);
        var t = !l || e.val() != l.title && e.val() != l.value ? e.val() : "",
            o = new s({
                method: "get",
                action: "/new",
                input: {
                    word: t,
                    ie: "GBK"
                }
            });
        setTimeout(function () {
            o.submit()
        }, 60)
    };
    var p = {};
    c.on("searchBox.addLog", function (e, t) {
        i.extend(p, t)
    }), c.on("searchBox.searchAction", function (e, t) {
        var o = {};
        i.extend(o, h), i.extend(o, t.params), i.extend(o, t.extParams || i.url.queryToJson(d.attr("extAttr") || "")), m.send(i.extend({
            type: 2057,
            fr: a(),
            word: t && t.params && t.params.word ? t.params.word : ""
        }, p)), p = {};
        var n = new s({
            method: "get",
            action: "/search",
            input: o
        });
        setTimeout(function () {
            n.submit()
        }, 60)
    }), c.on("searchBox.buttonAction", function (e, t) {
        var o = ['<div class="mb-10 mt-10"><i class="i-set-noname mr-5"></i>', t.text, "\uff1a</div>", '<input style="width: 300px; padding: 3px;" id="search-empty-input" type="text"/>'].join("");
        u.alert(o, {
            width: 370,
            height: 180,
            dialogClass: "dialog-search-empty",
            btnAlign: "left",
            autoDispose: !0,
            buttons: [{
                text: "\u7ee7\u7eed\u641c\u7d22",
                click: function () {
                    try {
                        var e = i.string(i("#search-empty-input").val()).trim();
                        "" != e && c.fire("searchBox.searchAction", {
                            params: {
                                word: e,
                                fr: t.fr,
                                lm: t.lm || 0
                            }
                        })
                    } catch (o) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: o.message,
                            path: "common:widget/js/logic/search-box/search-box.js",
                            method: "",
                            ln: 237
                        })
                    }
                }
            }],
            open: function () {
                var e = i(".dialog-search-empty .ui-dialog-buttonpane");
                i("#search-empty-input").get(0).focus(), i("#search-empty-input").keypress(function (t) {
                    13 == t.keyCode && i(e).find(".btn-32-green").click()
                });
                var o = i("<span/>").html(t.textBottom || "").css({
                    "padding-left": "10px",
                    "font-size": "12px"
                });
                i(e).append(o)
            }
        })
    })
});;
define("common:widget/js/logic/authcode/authcode.js", function (t, e, a) {
    var i = t("common:widget/lib/jquery/jquery.js"),
        o = t("common:widget/js/ui/base/base.js"),
        n = t("common:widget/js/ui/dialog/dialog.js"),
        u = t("common:widget/js/ui/tip/tip.js"),
        c = o().extend({
            init: function () {
                try {
                    var t = this;
                    t._authData = {}, t._authUrl = t.url || "/api/vcode", t._authId = "IK_AUTHCODE_" + t.guid, t._tip = new u({
                        content: "\u8bf7\u70b9\u51fb\u540e\u8f93\u5165\u9a8c\u8bc1\u7801",
                        direction: "bottom"
                    }), t.container = i(t.container), (!t._authData[t._authId] || t.force) && (t._authData[t._authId] = {
                        display: !1,
                        show: !1
                    }, t._initAuthCode({
                        callback: function () {
                            t._show(), t._display(), i.isFunction(t.callback) && t.callback.call(t)
                        }
                    }))
                } catch (e) {
                    "undefined" != typeof alog && alog("exception.fire", "catch", {
                        msg: e.message,
                        path: "common:widget/js/logic/authcode/authcode.js",
                        method: "",
                        ln: 72
                    })
                }
            }, _show: function () {
                var t = this,
                    e = i('<div class="ik-authcode-wrapper"></div>');
                e.append('<label class="ik-authcode-label">\u9a8c\u8bc1\u7801\uff1a</label>').append('<input class="ik-authcode-input" type="text" maxlength="4">').append('<img class="ik-authcode-img" src="about:blank" style="display: none; ">').append('<a class="ik-authcode-change" href="#" style="display: none; ">\u770b\u4e0d\u6e05\uff1f</a>').append('<div class="ik-authcode-error" style="display: none; ">\u9a8c\u8bc1\u7801\u9519\u8bef</div>'), t.className && e.addClass(t.className), t.container.append(e).show();
                var a = (t.getAuthElement("me._tip"), t.getAuthElement("error")),
                    o = t.getAuthElement("input"),
                    n = t.getAuthElement("img");
                authCodeChange = t.getAuthElement("change"), i.isFunction(t.initCallback) && t.initCallback(), t.container.mouseover(function () {
                    t._authData[t._authId].display || (clearTimeout(t._mouseTimeOut), t._tip.show(o))
                }).mouseout(function () {
                    t._mouseTimeOut = setTimeout(function () {
                        t._tip.hide()
                    }, 200)
                }), authCodeChange.click(function (e) {
                    try {
                        t.change(function () {
                            o.focus().val(""), a.hide()
                        }), e.preventDefault()
                    } catch (e) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: e.message,
                            path: "common:widget/js/logic/authcode/authcode.js",
                            method: "",
                            ln: 120
                        })
                    }
                }), n.click(function (t) {
                    try {
                        authCodeChange.trigger("click")
                    } catch (t) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: t.message,
                            path: "common:widget/js/logic/authcode/authcode.js",
                            method: "",
                            ln: 124
                        })
                    }
                }).css("cursor", "pointer"), t.isDisplay && t._display()
            }, _initAuthCode: function (t) {
                try {
                    var e = this,
                        a = e._authUrl + "?from=" + e.from;
                    e.urlParams && (a += "&" + i.url.jsonToQuery(e.urlParams)), i.get(a + "&t=" + (new Date).getTime(), function (a) {
                        0 == a.status && a.data.need_verify && (i.extend(e._authData[e._authId], {
                            vcodeStr: a.data.vcode_str,
                            imgUrl: a.data.imgurl,
                            display: !1,
                            show: !0,
                            from: e.from || ""
                        }), i.isFunction(t.callback) && t.callback.call(a.data))
                    }, "json")
                } catch (o) {
                    "undefined" != typeof alog && alog("exception.fire", "catch", {
                        msg: o.message,
                        path: "common:widget/js/logic/authcode/authcode.js",
                        method: "",
                        ln: 162
                    })
                }
            }, _display: function () {
                var t = this;
                t._authData[t._authId].display || (t.getAuthElement("img").attr("src", t._authData[t._authId].imgUrl).show(), t.getAuthElement("me._tip").hide(), t.getAuthElement("change").show(), t._authData[t._authId].display = !0)
            }, _error: function () {
                this.getAuthElement("error").show(), this.getAuthElement("input").focus()
            }, getAuthElement: function (t) {
                return i(".ik-authcode-" + t, this.container[0])
            }, getCode: function () {
                var t = this;
                return t._authData[t._authId] && t._authData[t._authId].show ? {
                    vcode_str: t._authData[t._authId].vcodeStr,
                    vcode: t.getAuthElement("input").val()
                } : null
            }, getFrom: function () {
                return this.from
            }, submitParam: function (t) {
                return i.extend(t || {}, this.getCode())
            }, change: function (t) {
                var e = this;
                e._initAuthCode({
                    callback: function () {
                        e._display(), i.isFunction(t) && t(arguments)
                    }
                })
            }, dispose: function () {
                this.getAuthElement("wrapper").remove()
            }, error: function () {
                var t = this;
                t._authData[t._authId] && t._authData[t._authId].show ? (t._error(), t._initAuthCode({
                    callback: function () {
                        t._display();
                        var e = t.getAuthElement("input");
                        e.value = "", e.focus()
                    }
                })) : n.alert("\u7f51\u7edc\u5f02\u5e38\uff0c\u8bf7\u91cd\u65b0\u63d0\u4ea4")
            }
        });
    a.exports = c
});;
define("common:widget/js/logic/captcha/captcha.js", function (t, e, a) {
    var c = t("common:widget/lib/jquery/jquery.js"),
        i = t("common:widget/js/ui/base/base.js"),
        n = t("common:widget/js/ui/dialog/dialog.js"),
        s = t("common:widget/js/util/event/event.js"),
        d = i(function () {
            var t = this;
            t.type = "pcbefore", t.from = "", t.url = "/api/vcode", t.tip = "\u70b9\u51fb\u4ee5\u4e0b\u6587\u5b57\u8f93\u5165\u9a8c\u8bc1\u7801", t.errorTip = "\u9a8c\u8bc1\u7801\u4e0d\u6b63\u786e", t._codeArr = [], t._currIndex = 0, t._styleSheetTpl = ".captcha-buttons a div, .captcha-content-img, .captcha-input dd{background:url(#{imgUrl}&t=#{t}) no-repeat;}", t._positionArr = ["-6px -36px", "-53px -39px", "-96px -38px", "0px -83px", "-53px -85px", "-96px -86px", "-2px -135px", "-53px -135px", "-96px -135px"], t._templateTpl = ['<div class="captcha-box">', '<div class="captcha-input">', '<div class="captcha-input-title">\u9a8c\u8bc1\u7801</div>', '<dl class="ml-5"><dt class="grid-r"></dt><dd></dd><dd></dd><dd></dd><dd></dd></dl>', "</div>", '<div class="captcha-content">', '<div><a href="#" class="captcha-content-img mt-5"></a><a href="#" class="captcha-content-change f-12 ml-5">\u770b\u4e0d\u6e05?</a></div>', '<p class="captcha-content-tip f-12">#{tip}</p>', '<div class="captcha-buttons">', '<a href="#"><div class="captcha-btn-1"></div></a>', '<a href="#"><div class="captcha-btn-2"></div></a>', '<a href="#"><div class="captcha-btn-3"></div></a>', '<a href="#"><div class="captcha-btn-4"></div></a>', '<a href="#"><div class="captcha-btn-5"></div></a>', '<a href="#"><div class="captcha-btn-6"></div></a>', '<a href="#"><div class="captcha-btn-7"></div></a>', '<a href="#"><div class="captcha-btn-8"></div></a>', '<a href="#"><div class="captcha-btn-9"></div></a>', "</div>", "</div>", "</div>"].join("")
        }).extend({
            init: function () {
                try {
                    var t = this;
                    t._initCaptcha({
                        url: t.url,
                        from: t.from || "",
                        type: t.type,
                        callback: function () {
                            t.grid(), c.isFunction(t.callback) && t.callback.call(res.data)
                        }
                    })
                } catch (e) {
                    "undefined" != typeof alog && alog("exception.fire", "catch", {
                        msg: e.message,
                        path: "common:widget/js/logic/captcha/captcha.js",
                        method: "",
                        ln: 76
                    })
                }
            }, _initCaptcha: function (t) {
                try {
                    var e = this,
                        a = c.string("#{url}?from=#{from}&style=#{type}&t=").format(t) + (new Date).getTime();
                    c.get(a, function (a) {
                        0 == a.status && a.data.need_verify && (c.extend(e.vcode = {}, {
                            vcodeStr: a.data.vcode_str,
                            imgUrl: a.data.imgurl,
                            from: t.from || ""
                        }), c.isFunction(t.callback) && t.callback.call(a.data), e.styleSheet(e.vcode))
                    }, "json")
                } catch (i) {
                    "undefined" != typeof alog && alog("exception.fire", "catch", {
                        msg: i.message,
                        path: "common:widget/js/logic/captcha/captcha.js",
                        method: "",
                        ln: 96
                    })
                }
            }, getCode: function () {
                return {
                    vcode_str: this.vcode.vcodeStr,
                    vcode: this._codeArr.join("")
                }
            }, change: function () {
                var t = this;
                t._initCaptcha({
                    url: t.url,
                    from: t.from || "",
                    type: t.type,
                    callback: function () {
                        t.captchaInputs.each(function () {
                            c(this).removeAttr("style")
                        }), t._currIndex = 0, t._codeArr.length = 0
                    }
                })
            }, styleSheet: function (t) {
                var e = this;
                e.styleSheetEle = c("#captcha-sheet")[0], e.styleSheetEle || (e.styleSheetEle = c('<style id="captcha-sheet" type="text/css"></style>').appendTo("head")[0]);
                var a = c.string(e._styleSheetTpl).format({
                    imgUrl: t.imgUrl,
                    t: (new Date).getTime()
                });
                e.styleSheetEle.styleSheet ? e.styleSheetEle.styleSheet.cssText = a : e.styleSheetEle.innerHTML = a
            }, error: function () {
                var t = this;
                t.change(), t.captchaErrTip.text(t.errorTip).addClass("f-red")
            }, submit: function (t) {
                var e = this;
                t && (c.extend(t.params, e.getCode()), s.fire("catcha.submit", t))
            }, grid: function () {
                var t = this,
                    e = new n({
                        title: "\u77e5\u9053\u63d0\u793a",
                        width: 345,
                        height: 340,
                        autoDispose: !0,
                        content: c.string(t._templateTpl).format({
                            tip: t.tip
                        })
                    });
                this.dialog = e;
                var a = e.instance,
                    i = a.find(".captcha-input dt"),
                    s = a.find(".captcha-content-img"),
                    d = a.find(".captcha-content-change"),
                    r = a.find(".captcha-input dd");
                c.extend(t, {
                    captchaInputs: r,
                    captchaErrTip: a.find(".captcha-content-tip")
                }), i.click(function () {
                    try {
                        if (0 == t._currIndex) return;
                        t._codeArr.pop(), c(this).nextAll("dd").eq(--t._currIndex).removeAttr("style")
                    } catch (e) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: e.message,
                            path: "common:widget/js/logic/captcha/captcha.js",
                            method: "",
                            ln: 188
                        })
                    }
                }), s.add(d).click(function (e) {
                    try {
                        t.change(), e.preventDefault()
                    } catch (e) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: e.message,
                            path: "common:widget/js/logic/captcha/captcha.js",
                            method: "",
                            ln: 192
                        })
                    }
                }), a.find(".captcha-buttons a").each(function (e) {
                    c(this).click(function (a) {
                        try {
                            if (a.preventDefault(), 0 == t._currIndex) t.captchaErrTip.text(t.tip).removeClass("f-red");
                            else if (4 == t._currIndex) return;
                            t._codeArr.push(e + 1), r.eq(t._currIndex++).css("background-position", t._positionArr[e]), 4 == t._currIndex && t.submit(t.submitParams)
                        } catch (a) {
                            "undefined" != typeof alog && alog("exception.fire", "catch", {
                                msg: a.message,
                                path: "common:widget/js/logic/captcha/captcha.js",
                                method: "",
                                ln: 206
                            })
                        }
                    })
                })
            }
        });
    a.exports = d
});;
define("common:widget/js/logic/complain/complain.js", function (e, t, o) {
    function i() {
        a.fire("dialog.close");
        var e = "\u60a8\u7684\u7533\u8bc9\u5df2\u7ecf\u63d0\u4ea4\uff0c\u5de5\u4f5c\u4eba\u5458\u6b63\u5728\u5904\u7406\uff0c\u6211\u4eec\u4f1a\u572848\u5c0f\u65f6\u5185\u7ed9\u60a8\u7b54\u590d\uff0c\u5e26\u6765\u4e0d\u4fbf\uff0c\u8bf7\u8c05\u89e3\u3002";
        c.alert(e, {
            onaccept: function () {
                window.location.reload(!0)
            }
        }), setTimeout(function () {
            a.fire("dialog.close"), window.location.reload(!0)
        }, 3e3)
    }
    var n = e("common:widget/js/util/tangram/tangram.js"),
        a = e("common:widget/js/util/event/event.js"),
        c = e("common:widget/js/ui/dialog/dialog.js"),
        l = e("common:widget/js/logic/submit/submit.js"),
        d = e("common:widget/js/logic/authcode/authcode.js");
    o.exports = function (e, t, o, a) {
        function s() {
            m.getAuthElement("input").css("border", "1px solid red")
        }
        var m, r = '<span style="width:78px;font-weight: bold;vertical-align: top;">\u7533\u8bc9\u7406\u7531\uff1a</span><textarea id="complain-dialog" cols="37" rows="5" maxlength="1000" style="width:290px;height:90px;border:1px solid #000;"></textarea>',
            g = {
                cm: 100043,
                qid: e,
                type: 100001
            },
            p = {
                title: "\u77e5\u9053\u63d0\u793a",
                height: 290,
                width: 400,
                autoDispose: !0
            };
        !!t && n.extend(g, {
            aid: t,
            type: 100009
        }), "object" == n.type(a) && n.extend(g, a);
        var u = c.confirm(r, n.extend({
            type: "confirm",
            onaccept: function () {
                return 3 == o ? void i() : (g.appeal_reason = n.trim(n("#complain-dialog").val()), 2 == o && n.extend(g, {
                    mode_type: "realtime"
                }), n.extend(g, m.getCode()), 4 != n.trim(g.vcode).length ? void s() : void new l({
                    params: g,
                    syncId: e,
                    beforeJump: i,
                    errorDeal: function (e, t) {
                        var o = (t.data, t.errorNo);
                        12302 == o && (m.getAuthElement("input").css("border", "1px solid red"), m.change(function () {
                            m.getAuthElement("input").val("")
                        }))
                    }
                }))
            }
        }, p));
        m = new d({
            container: u.instance,
            from: "new_complain",
            isDisplay: !0,
            className: "ik-authcode-s1",
            initCallback: function () {
                try {
                    m.getAuthElement("input").focus(function () {
                        n(this).css("border", "1px solid #d5d5d5")
                    }), m.getAuthElement("change").click(function () {
                        try {
                            m.getAuthElement("input")[0].focus()
                        } catch (e) {
                            "undefined" != typeof alog && alog("exception.fire", "catch", {
                                msg: e.message,
                                path: "common:widget/js/logic/complain/complain.js",
                                method: "",
                                ln: 83
                            })
                        }
                    })
                } catch (e) {
                    "undefined" != typeof alog && alog("exception.fire", "catch", {
                        msg: e.message,
                        path: "common:widget/js/logic/complain/complain.js",
                        method: "",
                        ln: 84
                    })
                }
            }
        })
    }
});;
define("common:widget/js/logic/category/category.js", function (e, t, a) {
    var i = e("common:widget/lib/jquery/jquery.js"),
        n = e("common:widget/js/ui/base/base.js"),
        l = n(function () {
            var e = this;
            e.selectSize = 16, e.sourceUrl = "/classleveljs", e.splitor = ""
        }).extend({
            data: {},
            init: function () {
                try {
                    var e = this;
                    if (!e.target) return;
                    e.target = i(e.target), e.data.level1 ? e._render() : i.ajax({
                        url: e.sourceUrl,
                        dataType: "script",
                        scriptCharset: "gbk",
                        crossDomain: !0,
                        success: function () {
                            e.data = {
                                level1: class_level_1,
                                level2: class_level_2,
                                level3: class_level_3
                            }, e.isPGC && (e.data.level2.splice(7, 1), e.data.level2.splice(21, 1), e.data.level2.splice(42, 1), e.data.level2.splice(42, 1)), e._render()
                        }
                    })
                } catch (t) {
                    "undefined" != typeof alog && alog("exception.fire", "catch", {
                        msg: t.message,
                        path: "common:widget/js/logic/category/category.js",
                        method: "",
                        ln: 74
                    })
                }
            }, _render: function () {
                var e = this;
                e.container = i("<div/>").addClass("category-box " + (e.className || "")).attr("id", "category-" + e.guid).appendTo(e.target), i.each([1, 2, 3], function (t, a) {
                    i("<select/>").attr("size", e.selectSize).addClass("category-select-" + a).hide().appendTo(e.container).change(function () {
                        e._changeHandler(a, i(this)), e.fire("change")
                    }).after(i("<span/>").html(e.splitor).hide())
                }), e.selector = e.container.find("select"), e._buildOptions(e.selector.eq(0), e.data.level1), e.fire("init"), e.defaultValue && e.setValue(e.defaultValue)
            }, _changeHandler: function (e, t) {
                var a = this,
                    i = t.val();
                3 > e && (a.selector.eq(2).hide().empty().prev().hide(), i && a._buildOptions(a.selector.eq(e), a._getSubLevelData(i, e + 1), e, a.isPGC))
            }, _getSubLevelData: function (e, t) {
                var a = this,
                    n = [];
                return i.each(a.data["level" + t], function (t, a) {
                    var i = [];
                    i[0] = a[1], i[1] = a[2], e == a[0] && n.push(i)
                }), n
            }, _buildOptions: function (e, t, a, n) {
                e && t && t.length && (e.empty().show().prev().show(), n || a && i(new Option("\u4e0d\u9009", 0)).appendTo(e).prop("selected", !0), i.each(t, function (t, a) {
                    e.get(0) && e.get(0).options.add(new Option(a[1], a[0]))
                }))
            }, setValue: function (e) {
                function t(e, i) {
                    if (!e || 0 == i) return void 0;
                    i = i || 3;
                    for (var n = a.data["level" + i], l = 0, r = n.length; r > l; l++) {
                        var s = n[l];
                        if (1 == i) {
                            if (e == s[0]) return [e, "0", "0"]
                        } else if (e == s[1]) {
                            var c = 2 == i ? s : t(s[0], 2);
                            return [c[0], c[1], 3 == i ? e : "0"]
                        }
                    }
                    return t(e, --i)
                }
                var a = this;
                "undefined" != typeof e && (i.isArray(e) ? i.each(e, function (e, t) {
                    a.selector.eq(e).val(t || "0").change()
                }) : a.setValue(t(e)))
            }, getValue: function () {
                var e = this,
                    t = {
                        cid: 0,
                        name: "",
                        arrCid: [],
                        arrName: []
                    };
                return e.selector.each(function (e) {
                    this.value && "0" != this.value && (t.cid = t.arrCid[e] = this.value, t.name = t.arrName[e] = i(this.options[this.selectedIndex]).text())
                }), t.cid ? t : !1
            }
        });
    a.exports = l
});;
define("common:widget/js/logic/login/login.js", function (o, e) {
    function i() {
        window.location.reload(!0)
    }

    function n() {
        c.fire("login.log")
    }

    function t() {}
    var s = T = o("common:widget/js/util/tangram/tangram.js"),
        c = o("common:widget/js/util/event/event.js"),
        g = o("common:widget/js/util/uri/uri.js"),
        a = o("common:widget/js/ui/dialog/dialog.js"),
        r = null,
        u = !1,
        l = new Date,
        p = "http://passport.bdimg.com/passApi/js/uni_login_wrapper.js?cdnversion=" + l.getFullYear() + l.getMonth() + l.getDate() + l.getHours() + l.getMinutes(),
        f = "/api/loginInfo",
        h = {
            registerLink: "https://passport.baidu.com/v2/?reg&tpl=ik&color=green&u=" + escape(top.location.href),
            onLoginSuccess: i,
            onLoginFailure: n,
            onSubmitedErr: t,
            cache: !0,
            tangram: !0,
            color: "green",
            apiOpt: {
                product: "ik",
                charset: "GBK",
                u: window.top.location.href,
                qrcode: 3,
                staticPage: "http://zhidao.baidu.com" + g.v3Jump
            },
            onshow: function () {}
        };
    h.authsite = ["qzone", "tsina", "renren"], h.authsiteCfg = {
            tpl: "ik",
            display: "popup",
            u: window.top.location.href,
            jumpUrl: "http://zhidao.baidu.com" + g.xd,
            onBindSuccess: h.onLoginSuccess,
            onBindFailure: h.onSubmitedErr
        }, c.on("login.log", function (o, i) {
            var n = i && s.isFunction(i.onLoginSuccess) ? i.onLoginSuccess : h.onLoginSuccess;
            if (i && i.sms) {
                var t = "\u65e0\u9700\u767e\u5ea6\u5e10\u53f7\uff0c\u8f93\u5165\u624b\u673a\u53f7\u5373\u53ef\u514d\u8d39\u63d0\u95ee";
                i.psFlag && (t = "\u9a8c\u8bc1\u5373\u767b\u5f55\uff0c\u6ca1\u6709\u767e\u5ea6\u5e10\u53f7\u4e5f\u53ef\u4ee5\u4f7f\u7528", h.img = "http://img.baidu.com/img/iknow/ui/sms-login-bg.jpg"), s.extend(h.apiOpt, {
                    sms: i.sms,
                    smsText: t
                }), h.authsite = []
            }
            h.onLoginSuccess = function (o) {
                c.fire("dialog.close"), c.fire("login.check", {
                    sync: i && i.sync,
                    isLogin: function (o) {
                        o.isFilter && c.fire("login.filter", {
                            type: "set",
                            filterInfo: o.isFilter
                        }), n(o)
                    }, noLogin: function () {}
                }), o.returnValue = !1
            }, u ? r && r.show() : (s.getScript(p, function () {
                r = passport.pop.init(h), r.show(), s.extend(e, r)
            }), u = !0)
        }), c.on("login.check", function (o, e) {
            e = e || {}, h.onLoginSuccess = e.isLogin || i, h.onLoginFailure = e.noLogin || n, s.ajax({
                url: f + "?t=" + (new Date).getTime(),
                async: e && e.sync ? !1 : !0,
                dataType: "html",
                success: function (o, e, i) {
                    var n = s.json.parse(i.responseText),
                        t = F.context("user") || {};
                    return 1 == n.isLogin ? (t.isLogin = !0, t.id = n.userId, t.wealth = n.userWealth, h.onLoginSuccess(n)) : (t.isLogin = !1, h.onLoginFailure()), !0
                }
            })
        }), c.on("login._success", function () {
            h.onLoginSuccess()
        }), c.on("login.setUsername", function (o, e) {
            function i() {
                var o = a.iframe({
                    content: g.username + n,
                    title: e.titleText || "\u4f60\u8fd8\u6ca1\u6709\u7528\u6237\u540d\uff0c\u8d77\u4e00\u4e2a\u597d\u542c\u7684\u7528\u6237\u540d\u5427\uff01",
                    width: 430,
                    height: 170,
                    autoDispose: !0
                });
                c.on("setusername.update", function (e, i) {
                    o && o.setSize({
                        width: i.width,
                        height: i.height
                    })
                })
            }
            e = e || {}, e.onSetSuccess || (e.onSetSuccess = function () {
                window.location.reload(!0)
            }), h.onLoginSuccess = e.onSetSuccess;
            var n = "?" + (e.patch ? e.patch + "&" : "") + "t=" + (new Date).getTime();
            c.fire("login.check", {
                isLogin: function () {
                    var o = F.context("user") || {};
                    o.isNoUserName ? i() : e.onSetSuccess()
                }, noLogin: function () {
                    c.fire("login.log", {
                        onLoginSuccess: i
                    })
                }
            })
        }), c.on("login.filter", function (o, e) {
            if ("set" == e.type) T.cookie.set("IK_USER_FILTER", e.filterInfo.reason, {
                path: "/",
                expires: 6e4
            }), T.cookie.set("IK_USER_FILTERI", e.filterInfo.lastLoginIp, {
                path: "/",
                expires: 6e4
            }), T.cookie.set("IK_USER_FILTERT", e.filterInfo.lastLoginTime, {
                path: "/",
                expires: 6e4
            });
            else if ("check" == e.type && 16 == parseInt(T.cookie.get("IK_USER_FILTER"))) {
                var i = new a({
                    width: 350,
                    height: 200,
                    title: "\u77e5\u9053\u63d0\u793a",
                    content: "\u60a8\u7684\u8d26\u53f7\u4e8e " + T.cookie.get("IK_USER_FILTERT") + " \u5728 " + T.cookie.get("IK_USER_FILTERI") + " \u8fdb\u884c\u4e86\u5f02\u5e38\u64cd\u4f5c\uff0c\u9ad8\u5ea6\u7591\u4f3c\u88ab\u76d7\uff0c\u6240\u4ee5\u5df2\u88ab\u4e34\u65f6\u51bb\u7ed3\uff0c\u8bf7\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u5b8c\u6210\u89e3\u51bb\u64cd\u4f5c\uff0c\u6210\u529f\u540e\u5373\u53ef\u6062\u590d\u6b63\u5e38\u4f7f\u7528",
                    buttons: [{
                        text: "\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1",
                        click: function () {
                            try {
                                window.open("/ihome/set/verify?fr=login"), i.close()
                            } catch (o) {
                                "undefined" != typeof alog && alog("exception.fire", "catch", {
                                    msg: o.message,
                                    path: "common:widget/js/logic/login/login.js",
                                    method: "",
                                    ln: 289
                                })
                            }
                        }
                    }, {
                        text: "\u53d6\u6d88",
                        click: function () {
                            try {
                                i.close()
                            } catch (o) {
                                "undefined" != typeof alog && alog("exception.fire", "catch", {
                                    msg: o.message,
                                    path: "common:widget/js/logic/login/login.js",
                                    method: "",
                                    ln: 295
                                })
                            }
                        }
                    }],
                    autoDispose: !0
                });
                T.cookie.remove("IK_USER_FILTER", {
                    path: "/"
                }), T.cookie.remove("IK_USER_FILTERI", {
                    path: "/"
                }), T.cookie.remove("IK_USER_FILTERT", {
                    path: "/"
                })
            }
        }), c.on("dialog.close", function () {
            r && r.hide && r.hide()
        }), c.on("login.success", function () {
            i()
        }),
        function () {
            c.fire("login.filter", {
                type: "check"
            })
        }()
});;
define("common:widget/js/logic/iask/iask.js", function (e, i, n) {
    var o = e("common:widget/js/util/tangram/tangram.js"),
        t = e("common:widget/js/ui/dialog/dialog.js"),
        a = e("common:widget/js/util/event/event.js");
    n.exports = function (e) {
        a.fire("login.check", {
            isLogin: function () {
                o.get("/iask/api/ikhelplimit?un=" + encodeURIComponent(e) + "&t=" + (new Date).getTime(), function (i) {
                    var n = o.json.parse(i);
                    if (n && 0 == n.status) {
                        var s = n.data,
                            c = s.replyLimit,
                            m = s.replyMaxNum,
                            r = s.ifLogin,
                            l = s.ifUsernameOK;
                        return 0 == l ? (t.alert("\u5bf9\u4e0d\u8d77\uff01\u6b64\u7528\u6237\u4e0d\u5b58\u5728\u3002"), !1) : 0 == m || 0 >= c ? (t.alert("\u5bf9\u4e0d\u8d77\uff01\u6b64\u7528\u6237\u6682\u65f6\u65e0\u6cd5\u63a5\u6536\u63d0\u95ee\u6c42\u52a9\uff0c\u60a8\u53ef\u4ee5\u6362\u4e00\u4f4d\u7528\u6237\u8bd5\u8bd5\u3002", {
                            close: function () {
                                a.fire("dialog.close")
                            }
                        }), !1) : 0 == r ? (location.href = "/new?fix=" + encodeURIComponent(e), !1) : void(location.href = "/new?fix=" + encodeURIComponent(e))
                    }
                })
            }
        })
    }
});;
define("common:widget/js/logic/dom-ready/dom-ready.js", function (o, t) {
    function e(o) {
        i.ajax({
            url: "/s/toutu/questionnaire.js",
            dataType: "json",
            success: function (t) {
                if (t) {
                    var e = t.showUrl,
                        i = t.url;
                    if (!e || "http://" === e || !i || "http://" === i) return void(o && o({
                        url: ""
                    }));
                    for (var n = window.location.pathname, a = e.split(" "), r = !1, s = 0, c = a.length; c > s; s++)
                        if ("/" === a[s] && n === a[s] || "/" !== a[s] && -1 !== n.indexOf(a[s])) {
                            r = !0;
                            break
                        }
                    window.location.href === e || r ? o && o({
                        url: i
                    }) : o && o({
                        url: ""
                    })
                } else o && o({
                    url: ""
                })
            }, error: function () {
                o && o({
                    url: ""
                })
            }
        })
    }
    var i = o("common:widget/js/util/tangram/tangram.js"),
        n = o("common:widget/js/logic/jump-top/jump-top.js");
    t.init = function (o) {
        try {
            var t = location.pathname,
                a = o.img;
            try {
                e(function (e) {
                    n({
                        isFeedback: /^\/($|\?|uteam|shop|browse|authentic\/homepage|user\/admin|comment|uhome)/i.test(t),
                        isProf: /^\/(doctor|prof\/education|prof\/apply|expert)/i.test(t),
                        feedbackPl: o.feedbackPl || 1,
                        isMavin: o.isMavin,
                        isQuestionnaire: e.url
                    })
                })
            } catch (r) {}
            if (a && a.bgImg) {
                if (!i.swf.version) return;
                var s = i("<div/>").attr("id", "top-flash-container").attr("title", a.title).css({
                    position: "absolute",
                    bottom: "0",
                    right: "0"
                }).mousedown(function () {
                    location.href = a.url
                });
                i("#header").css("position", "relative").append(s), i.swf.create({
                    id: "top-flash",
                    width: 179,
                    height: 73,
                    url: a.bgImg,
                    allowscriptaccess: "always",
                    wmode: "transparent"
                }, "top-flash-container")
            }
            if (window.console) {
                var c = console,
                    l = i("#search-box .logo");
                c && l.size() && (c.log("\n\n%c", "font-size:0;line-height:50px;padding-top:" + l.height() + "px; padding-left:" + l.width() + "px;background:" + l.css("background") + ";background-repeat:no-repeat;"), c.log("\u60f3\u548c\u6211\u4eec\u5171\u540c\u6253\u9020\u4e16\u754c\u6700\u5927\u4e2d\u6587\u4e92\u52a8\u95ee\u7b54\u5e73\u53f0\u5417\uff1f\n\u60f3\u8ba9\u81ea\u5df1\u7684\u6210\u5c31\u5728\u4ebf\u4e07\u7528\u6237\u9762\u524d\u5c55\u73b0\u5417\uff1f\u60f3\u8ba9\u4e16\u754c\u770b\u5f97\u4f60\u7684\u5149\u8292\u5417\uff1f\n\u52a0\u5165\u6211\u4eec\uff0c\u5728\u8fd9\u91cc\u4e0d\u4ec5\u662f\u5de5\u4f5c\uff0c\u6295\u5165\u4f60\u7684\u65f6\u95f4\u548c\u70ed\u60c5\uff0c\u6ef4\u6ef4\u6c57\u6c34\u7ec8\u4f1a\u6c47\u805a\u6210\u4e0d\u5e73\u51e1\u7684\u6210\u679c\u3002\n\u671f\u5f85\u4f60\u7684\u52a0\u76df\u3002http://zhidao.baidu.com/misc/more/joinus"), c.log("\u8bf7\u5728\u90ae\u4ef6\u4e2d\u6ce8\u660e%c\u6765\u81ea:console", "color:red;font-weight:bold;"))
            }
        } catch (r) {
            "undefined" != typeof alog && alog("exception.fire", "catch", {
                msg: r.message,
                path: "common:widget/js/logic/dom-ready/dom-ready.js",
                method: "",
                ln: 112
            })
        }
    }
});;
define("common:widget/js/logic/jump-top/jump-top.js", function (i, e, o) {
    function t(i) {
        return ['<div class="jump-goto-naire">', '<a href="' + i + '" target="_blank">\u6709\u5956\u95ee\u5377</a>', "</div>"].join("")
    }

    function n(i) {
        return ['<div class="jump-feedback">', '<a href="/feedback?pl=', i || "1", '" target="_blank">\u610f\u89c1\u53cd\u9988</a>', "</div>"].join("")
    }
    var s = i("common:widget/lib/jquery/jquery.js"),
        a = (i("common:widget/js/util/log/log.js"), i("common:widget/js/ui/dialog/dialog.js"), ['<div class="jump-top">', '<a href="#" target="_self">\u8fd4\u56de\u9876\u90e8</a>', "</div>"].join("")),
        r = ['<div class="jump-profhelp">', '<a href="http://wpa.qq.com/msgrd?v=3&uin=2725326332&site=qq&menu=yes" target="_blank">\u5728\u7ebf\u5ba2\u670d</a>', "</div>"].join(""),
        d = ['<div class="jump-goto-mavin">', '<a href="/ihome/hangjia/index" target="_blank"><i></i><span>\u8fdb\u5165\u884c\u5bb6\u5de5\u4f5c\u5ba4<span></a>', "</div>"].join("");
    o.exports = function (i) {
        function e(e) {
            var o = s(window).scrollTop(),
                t = (6 == s.browser.ie ? o : 0) + s(window).height() - l.height() - i.offset[0] - 110,
                n = o > s(window).height() / 2 ? "visible" : "hidden";
            i.isFeedback || i.isProf || i.isMavin || i.isQuestionnaire ? l.find(".jump-top").css("visibility", n) : l.css("visibility", n), l.animate({
                top: t + "px"
            }, e || 0)
        }
        s.isPlainObject(i) || (i = {}), s.isArray(i.offset) || (i.offset = [0, 0]);
        var o = i.isFeedback ? n(i.feedbackPl) : i.isProf ? r : "",
            c = i.isQuestionnaire ? t(i.isQuestionnaire) : "",
            l = s("<div />").addClass("jump-top-box").css({
                right: i.offset[1] + 5 + "px"
            }).html([a, o, c, i.isMavin ? d : ""].join("")).appendTo(document.body);
        l.find(".jump-top a").click(function (i) {
            try {
                i.preventDefault(), s(s.browser.ie || s.browser.firefox ? document.documentElement : document.body).animate({
                    scrollTop: "0px"
                }, 500)
            } catch (i) {
                "undefined" != typeof alog && alog("exception.fire", "catch", {
                    msg: i.message,
                    path: "common:widget/js/logic/jump-top/jump-top.js",
                    method: "",
                    ln: 90
                })
            }
        });
        var p;
        6 == s.browser.ie && l.css("position", "absolute"), s(window).on("resize scroll", function () {
            clearTimeout(p), p = setTimeout(e, 200)
        }), e(1)
    }
});;
define("common:widget/js/logic/msg/msg.js", function (e, t) {
    function i(e, t) {
        if (D) {
            var o, a = d + 1e3 * h < (new Date).getTime() ? !0 : !1,
                r = !0,
                s = _.getLocalData();
            s && s.data && (s.data.interval && (o = s.data.interval), s.time && (a || v || s.time > (new Date).getTime() - 1e3 * o) && (n(s.data), r = !1)), r && _.getServerData(t), !e && o && (clearTimeout(j), j = setTimeout(function () {
                i(!1, {
                    poll: 1
                })
            }, 1e3 * o))
        }
    }

    function o(e, t) {
        var i = t || !0,
            o = _.delLocalData(e);
        if (i && o.length > 0) {
            var n = {
                type: 10091 == o[0].type || 10092 == o[0].type ? 1009 : o[0].type,
                id: o[0].id,
                count: o[0].count
            };
            _.delServerData(n)
        }
    }

    function n(e) {
        e && 0 == e.status && (e.globalList && "2040" == e.globalList.type && e.globalList.data && $.show(e.globalList.data), e.actList && r.isArray(e.actList) ? _.show(e.actList) : document.title = L)
    }

    function a() {
        if (r(window).on("resize", function () {
            t.resize()
        }).on("scroll", function () {
            t.resize()
        }), !D) return void $.getCms(f);
        if (0 != r("#userbar #user-name").size()) {
            var e, o = {},
                n = location.pathname + location.search;
            (e = n.match(/^\/question\/(\d+)/i)) ? (o.fr = "question", _.getServerData(o)) : i();
            var a = r.url.getQueryValue(location.href, "time");
            a && (a = (new Date).getTime() - parseInt(a), c.send({
                type: 2031,
                page: "bubble",
                action: "time",
                time: a
            })), r(document).on("mousemove", function () {
                d = (new Date).getTime()
            }), u.on("show", function () {
                i()
            })
        }
    }
    var r = e("common:widget/js/util/tangram/tangram.js"),
        s = e("common:widget/js/ui/tip/tip.js"),
        l = e("common:widget/js/util/store/store.js"),
        c = e("common:widget/js/util/log/log.js"),
        g = e("common:widget/js/util/event/event.js"),
        m = e("common:widget/js/ui/dialog/dialog.js"),
        u = e("common:widget/js/util/visibility/visibility.js"),
        p = "http://msg.zhidao.baidu.com/",
        f = "/s/toutu/promotion.js",
        d = (new Date).getTime(),
        h = 180,
        v = 0,
        w = 3,
        y = !1,
        b = null,
        T = null,
        j = null,
        D = 0 != F.context("user").isLogin,
        k = "/uhome/msg/",
        x = "/uhome",
        L = document.title,
        C = {
            1001: {
                title: "{$n}\u4e2a\u63d0\u95ee\u6709\u65b0\u56de\u7b54",
                url1: k + "newreply?fr=msg",
                url2: k + "newreply?fr=msg"
            },
            1003: {
                title: "{$n}\u4e2a\u5165\u56e2\u7533\u8bf7",
                url1: "/team/view/{$tname}#manage-3",
                url2: "/team/view/{$tname}#manage-3"
            },
            1006: {
                title: "{$n}\u4e2a\u56de\u7b54\u6709\u65b0\u8ffd\u95ee",
                url1: k + "replyask?fr=msg",
                url2: k + "replyask?fr=msg"
            },
            1010: {
                title: "{$n}\u4e2a\u63d0\u95ee\u5f97\u5230\u8865\u5145",
                url1: k + "questionsup?fr=msg",
                url2: k + "questionsup?fr=msg"
            },
            1011: {
                title: "{$n}\u4e2a\u63d0\u95ee\u6025\u5f85\u5904\u7406",
                url1: k + "waitdeal?fr=msg",
                url2: k + "waitdeal?fr=msg"
            },
            1009: {
                title: "{$n}\u4e2a\u56de\u7b54\u88ab\u91c7\u7eb3",
                url1: k + "event?fr=msg",
                url2: k + "event?fr=msg"
            },
            10091: {
                title: "{$n}\u4e2a\u56de\u7b54\u83b7\u5f97\u597d\u8bc4",
                url1: k + "event?fr=msg",
                url2: k + "event?fr=msg"
            },
            10092: {
                title: "{$n}\u4e2a\u56de\u7b54\u83b7\u5f97\u4e2d\u8bc4",
                url1: k + "event?fr=msg",
                url2: k + "event?fr=msg"
            },
            1018: {
                title: "{$n}\u4e2a\u56de\u7b54\u88ab\u63a8\u8350",
                url1: k + "event?fr=msg",
                url2: k + "event?fr=msg"
            },
            1008: {
                title: "{$n}\u4e2a\u56de\u7b54\u8d5e\u540c",
                url1: k + "evaluate?type=to&fr=msg",
                url2: k + "evaluate?type=to&fr=msg"
            },
            1002: {
                title: "{$n}\u4f4d\u77e5\u53cb\u5411\u60a8\u6c42\u52a9",
                url1: x + "?type=help&fr=msg",
                url2: x + "?type=help&fr=msg"
            },
            1005: {
                title: "{$n}\u4e2a\u56e2\u961f\u6c42\u52a9",
                url1: "/team",
                url2: "/team/view/{$tname}#question-3"
            },
            1012: {
                title: "{$n}\u4e2a\u65b0\u52a8\u6001",
                url1: k + "event?fr=msg",
                url2: k + "event?fr=msg"
            },
            1019: {
                title: "{$n}\u4e2a\u65b0\u901a\u77e5",
                url1: k + "sysmsg?fr=msg",
                url2: k + "sysmsg?fr=msg"
            },
            1020: {
                title: "{$n}\u4e2a\u56de\u7b54\u88ab\u63a8\u8350\u4e3a\u4f18\u8d28",
                url1: k + "event?fr=msg",
                url2: k + "event?fr=msg"
            }
        },
        $ = {
            cookieName: "IK_MSG_POPUP",
            getCms: function (e) {
                r.ajax({
                    url: e,
                    dataType: "json",
                    success: function (e) {
                        e && $.show(e, "cms")
                    }
                })
            }, setCookie: function (e) {
                r.cookie.set($.cookieName, e.id, {
                    expires: r.date.parse(e.endTime).getTime(),
                    path: "/"
                })
            }, generateView: function (e) {
                var t = [];
                return e.linkText = e.linkText || "\u8fdb\u5165\u4e13\u9898", t.push('<a target="_blank"  href="' + e.linkUrl + '"><img class="task-guide-image" src="' + e.imageUrl + '" /></a>'), t.join("")
            }, show: function (e, i) {
                var o = i || "msg";
                if ("msg" == o) {
                    if (e = r.array(e).find($.Validate), !e) return;
                    t.del({
                        type: "2040"
                    }, !1)
                } else if ("cms" == o && !$.Validate(e)) return;
                !e.imageUrl || "http://" === e.imageUrl || e.imageUrl.length < 17 || (T = new s({
                    rightbottom: "popcms",
                    width: 240,
                    position: {
                        my: "right-3 bottom-3",
                        at: "right bottom"
                    },
                    tooltipClass: "task-guide tip-green",
                    arrow: !1,
                    radius: !1,
                    closebox: !0,
                    content: $.generateView(e),
                    close: function () {
                        "cms" == o && $.setCookie(e)
                    }, target: r("#footer")
                }), T.show(), g.fire("pop.resize"), c.send({
                    type: 2031,
                    page: "bubble",
                    action: "pv"
                }), T.getTipContainer().delegate("a", "click", function (e) {
                    try {
                        T.hide(), c.send("img" == e.target.nodeName.toLowerCase() ? {
                            type: 2031,
                            page: "bubble",
                            pos: "bubble-img"
                        } : r(e.target).hasClass("tip-close") ? {
                            type: 2031,
                            page: "bubble",
                            pos: "bubble-close"
                        } : {
                            type: 2031,
                            page: "bubble",
                            pos: "bubble-link"
                        })
                    } catch (e) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: e.message,
                            path: "common:widget/js/logic/msg/msg.js",
                            method: "",
                            ln: 158
                        })
                    }
                }))
            }, Validate: function (e) {
                var t = r.date.parse(e.startTime),
                    i = r.date.parse(e.endTime),
                    o = r.cookie.get($.cookieName);
                return 1 == e.enabled && o != e.id && (new Date).getTime() >= t.getTime() && (new Date).getTime() < i.getTime() ? (g.fire("cmsMsg.show"), !0) : !1
            }
        },
        _ = {
            getServerData: function (e) {
                var i = p + "api?source=iknow&t=" + (new Date).getTime();
                i += "&cu=" + encodeURIComponent(F.context("user").name), e && (e.fr || e.poll) && (i += "&" + r.url.jsonToQuery(e)), r.sio(i).callByServer(function (i) {
                    if (e && e.poll) {
                        var o = _.getLocalData();
                        if (o && o.data && i) {
                            var n = r.json.stringify(o.data) == r.json.stringify(i);
                            c.send({
                                type: 2031,
                                page: "bubble",
                                action: "poll",
                                match: n
                            })
                        }
                    }
                    t.refresh(i)
                })
            }, delServerData: function (e) {
                var t = p + "close_notice?t=" + (new Date).getTime();
                t += "&" + r.url.jsonToQuery(e), r.sio(t).callByServer(function () {})
            }, setLocalData: function (e) {
                l.set("ikmsg_time", (new Date).getTime()), l.set("ikmsg_data", r.json.stringify(e))
            }, getLocalData: function () {
                return {
                    time: l.get("ikmsg_time") || 0,
                    data: r.json.parse(l.get("ikmsg_data") || "null")
                }
            }, delLocalData: function (e) {
                var i = [],
                    o = this.getLocalData();
                if (o && (o = o.data)) {
                    if (o.actList)
                        for (var n = 0; n < o.actList.length; n++)
                            if (o.actList[n].type == e.type) {
                                i = o.actList.splice(n, 1);
                                break
                            }
                    o.globalList && o.globalList.type == e.type && (o.globalList.data = null)
                }
                return t.refresh(o), i
            }, clearLocalData: function () {
                l.remove("ikmsg_data"), l.remove("ikmsg_time"), this.delServerData({
                    type: "99999",
                    count: 1
                })
            }, _buildMsg: function (e) {
                var t = [],
                    i = "",
                    o = "";
                return i = ' alog-alias="' + e.type + '-title"', o = ' alog-action="' + e.type + '-close"', t.push('<a target="_blank" href="' + e.url + '"' + i + ' index="' + e.type + '"><i' + o + '></i><span id="notice-' + e.type + '">' + e.title + "</span></a>"), t
            }, show: function (e) {
                this.generateView(e)
            }, hideTip: function () {
                b && b.getTipContainer().hide()
            }, showTip: function () {
                b && b.getTipContainer().show()
            }, generateView: function (e) {
                var i = [],
                    o = [],
                    n = [],
                    a = this,
                    l = 0;
                if (r.forEach(e, function (e, t) {
                    var a = C[e.type];
                    if (!(1008 == e.type && e.create_time < (new Date).getTime() / 1e3 - 864e5)) {
                        if (a) {
                            var r = a.title.replace("{$n}", '<span class="num">' + e.count + "</span>"),
                                s = e.count > 1 ? a.url1 : a.url2.replace("{$qid}", e.qid).replace("{$aid}", e.aid);
                            ("1005" == e.type || "1003" == e.type) && (s = s.replace("{$tname}", e.tname)), e.url = s, e.title = r, e.index = t, w > l ? i.push(_._buildMsg(e)) : o.push(_._buildMsg(e)), l++, n.push(e.type)
                        }
                        g.fire("tip.callback", e)
                    }
                }), i.length <= 0) return void(b && (b.hide(), b = null));
                b || (b = new s({
                    target: "#user-name",
                    closebox: !0,
                    tooltipClass: "nav-notice",
                    direction: "top",
                    closeall: function () {
                        _.clearLocalData()
                    }
                }), r(document).delegate(".nav-notice .ui-tooltip-content", "click", function (e) {
                    try {
                        var i = {},
                            o = e.target.nodeName.toLowerCase();
                        "i" == o ? (e.stopPropagation(), e.preventDefault(e), i.pos = "msg-del") : i.pos = "msg-title";
                        var n = r(e.target).closest("a"),
                            a = n.attr("index");
                        a && (i.actType = a, i && c.send(r.extend(i, {
                            type: 2031,
                            page: "msg"
                        })), document.title = L, t.del({
                            type: a
                        }), -1 == n.attr("href").indexOf("time=") && (n[0].href += (-1 == n[0].href.indexOf("?") ? "?" : "&") + "time=" + (new Date).getTime())), 1008 == a && "i" == o && m.confirm("\u662f\u5426\u4e0d\u518d\u663e\u793a\u88ab\u8d5e\u540c\u6d88\u606f\uff1f", {
                            onaccept: function () {
                                r.sio(p + "getuswitch?t=" + (new Date).getTime()).callByServer(function (e) {
                                    var t = e.config || {};
                                    t[1008] = 0, r.sio(p + "uswitch?config=" + r.json.stringify(t)).callByServer(function () {})
                                }), r(this).dialog("close")
                            }
                        })
                    } catch (e) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: e.message,
                            path: "common:widget/js/logic/msg/msg.js",
                            method: "",
                            ln: 350
                        })
                    }
                })), b.target.tooltip("option", "content", i.join("")), b.on("show", function () {
                    a.generateMore(this.getTipBody(), o.join(""))
                }), b.show(); {
                    var u = b.getTipBody();
                    r(u).find("a").each(function (e, t) {
                        var i, o, n = (t.href + top.location.href).match(/uhome/gi);
                        n && n.length > 1 ? (i = t.href, o = i.substr(i.lastIndexOf("#")), i = i.replace(/(&t=\d+)*#.+$/g, "") + "&t=" + (new Date).getTime(), -1 == i.indexOf("?") && (i = i.replace(/&/, "?")), t.href = i + o, t.target = "_top") : t.target = "_blank"
                    })
                }
                g.fire("tip.resize")
            }, generateMore: function (e, t) {
                "" != r.string(t).trim() ? (r(b.getTipContainer()).removeClass("nav-notice-small"), r(e).append('<div id="more-notice-holder" style="display:none;">' + t + "</div>"), 0 == r("#more-control-div").size() && (r(e).after('<div id="more-control-div"><a href="###" id="more-control-a" class="open"></a></div>'), r("#more-control-div").click(function (e) {
                    try {
                        e.preventDefault();
                        var t = r(this).find("a").first();
                        t.hasClass("open") ? (t.removeClass("open").addClass("close"), r("#more-notice-holder").show(), y = !0) : t.hasClass("close") && (r("#more-notice-holder").hide(), t.removeClass("close").addClass("open"), y = !1)
                    } catch (e) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: e.message,
                            path: "common:widget/js/logic/msg/msg.js",
                            method: "",
                            ln: 411
                        })
                    }
                })), y && (r("#more-notice-holder").show(), r("#more-control-div a").removeClass("open").addClass("close"))) : (r("#more-control-div").remove(), r("#more-notice-holder").remove(), y = !1, r(b.getTipContainer()).addClass("nav-notice-small"))
            }
        };
    g.on("tip.resize", function () {
        if (b) {
            var e = r("#user-name"),
                t = b.getTipContainer(),
                i = r(t).find(".tip-arrow");
            if (!e || !t || z) return !1;
            var o = r(e).offset(),
                n = r(window).scrollTop();
            n > o.top + 27 ? (r(t).css(r.browser.ie && r.browser.ie < 7 ? {
                left: o.left + "px",
                top: n + 1 + "px"
            } : {
                left: o.left + "px",
                top: "1px",
                position: "fixed"
            }), r(i).hide()) : (o.top += 27, r(t).css({
                left: o.left + "px",
                top: o.top + "px",
                position: "absolute"
            }), r(i).show())
        }
    }), g.on("tip.del", function (e, t, i) {
        o(t, i)
    });
    var z = !1;
    g.on("userbar.show", function (e, i) {
        z = i.waiting, t.hide()
    }), g.on("userbar.hide", function (e, i) {
        z = i.waiting, t.resize(), t.show()
    }), g.on("userbar.reposition", function (e, i) {
        z = i.waiting, t.resize(), t.show()
    }), r.object.extend(t, {
        init: a,
        show: _.showTip,
        hide: _.hideTip,
        del: o,
        resize: function () {
            g.fire("tip.resize"), g.fire("pop.resize")
        }, force: function () {}, refresh: function (e) {
            _.setLocalData(e), i()
        }
    })
});;
define("common:widget/js/logic/msg-new/msg-new.js", function (e, s, i) {
    function t(e) {
        var s = f("#nav-msg-layout");
        s.size() || (s = f(p(b, {
            isNewAsk: e.ask_notice.unread,
            isNewReply: e.reply_notice.unread,
            isNewSys: e.sysmsg.unread
        })).insertAfter("#userbar-msg"), A && s.css({
            top: A.top,
            left: A.left
        }), f(".nav-msg-menu", s).on("click", "a", function (e) {
            try {
                e.preventDefault(), f(this).parent().children().removeClass("active"), f(this).addClass("active"), n(f(this).data("type"))
            } catch (e) {
                "undefined" != typeof alog && alog("exception.fire", "catch", {
                    msg: e.message,
                    path: "common:widget/js/logic/msg-new/msg-new.js",
                    method: "",
                    ln: 217
                })
            }
        }), f(".nav-msg-list", s).on("mouseenter", "li", function () {
            f(this).addClass("hover")
        }).on("mouseleave", "li", function () {
            f(this).removeClass("hover")
        }).on("click", ".msg-resume", function () {
            try {
                var e = f(this).parents("li"),
                    s = (e.parent(".nav-msg-list"), "");
                s = f.json.stringify(1009 == e.data("type") && e.data("r-uniq-id") ? [{
                    srctype: e.data("type"),
                    uniq_id: e.data("uniq-id")
                }, {
                    srctype: 1018,
                    uniq_id: e.data("r-uniq-id")
                }] : [{
                    srctype: e.data("type"),
                    uniq_id: e.data("uniq-id")
                }]), f.post("/notice/close/batch", {
                    close_list: s
                }, function (s) {
                    if (!s.errno) {
                        var i = f("#userbar-msg i");
                        i.size() && (parseInt(i.text()) > 1 ? i.html(parseInt(i.text()) - 1) : (i.remove(), f(".nav-msg-menu .active").find("s").remove(), I && I.commonUserbar && v.fire("common.userbarMsgNum", 0))), e.remove(), f(".nav-msg-list").find("li").size() ? a() : f(".nav-msg-list").empty().html('<li class="msg-null"><i class="i-msg-null"></i><br><span>\u60a8\u8fd8\u6ca1\u6709\u6b64\u7c7b\u65b0\u6d88\u606f\u54e6~</span></li>'), c()
                    }
                }, "json")
            } catch (i) {
                "undefined" != typeof alog && alog("exception.fire", "catch", {
                    msg: i.message,
                    path: "common:widget/js/logic/msg-new/msg-new.js",
                    method: "",
                    ln: 277
                })
            }
        }).on("click", ".msg-link", function () {
            try {
                f(this).next(".msg-resume").click()
            } catch (e) {
                "undefined" != typeof alog && alog("exception.fire", "catch", {
                    msg: e.message,
                    path: "common:widget/js/logic/msg-new/msg-new.js",
                    method: "",
                    ln: 283
                })
            }
        }), f(".nav-msg-menu a.active", s).click(), f("#notice-all-clear").unbind("click"), f("#notice-all-clear").bind("click", function () {
            try {
                c(), f(".nav-msg-list").empty().html('<li class="msg-null"><i class="i-msg-null"></i><br><span>\u60a8\u8fd8\u6ca1\u6709\u6b64\u7c7b\u65b0\u6d88\u606f\u54e6~</span></li>');
                var e = f("#nav-msg-layout").prev("#userbar-msg");
                f(".nav-msg-menu a").find("s").remove(), e.find("i").remove(), I && I.commonUserbar && v.fire("common.userbarMsgNum", 0)
            } catch (s) {
                "undefined" != typeof alog && alog("exception.fire", "catch", {
                    msg: s.message,
                    path: "common:widget/js/logic/msg-new/msg-new.js",
                    method: "",
                    ln: 303
                })
            }
        }))
    }

    function a() {
        var e = f(".nav-msg-list");
        e.next(".scrollbar-wp").remove(), new h({
            scrollWrapper: e.parent(),
            scrollContent: e,
            maxHeight: 266
        }).render()
    }

    function n(e) {
        var s = f(".nav-msg-list");
        f.get(N + (e || "ask"), {
            t: +new Date
        }, function (e) {
            if (0 == e.errno) {
                var i = e.data.ask_notice || e.data.reply_notice || e.data.sysmsg;
                s.empty(), s.next(".scrollbar-wp").remove(), s.css("top", "0"), f(i.list).each(function () {
                    var e = this.fields.recommended;
                    1 == e ? f("<li />").data("type", this.srctype).data("uniq-id", this.uniq_id).data("r-uniq-id", this.fields.recommended_uniqId).html(p(y["1009a"], this)).append('<a class="msg-resume"><span>\u6807\u8bb0\u4e3a\u5df2\u8bfb</span></a>').appendTo(s) : f("<li />").data("type", this.srctype).data("uniq-id", this.uniq_id).html(p(y[this.srctype], this)).append('<a class="msg-resume"><span>\u6807\u8bb0\u4e3a\u5df2\u8bfb</span></a>').appendTo(s)
                }), f.isArray(i.list) && 0 != i.list.length ? a() : s.empty().html('<li class="msg-null"><i class="i-msg-null"></i><br><span>\u60a8\u8fd8\u6ca1\u6709\u6b64\u7c7b\u65b0\u6d88\u606f\u54e6~</span></li>')
            }
        }, "json")
    }

    function o() {
        function e(e, s) {
            var i = s.all.unread;
            if (0 == i) e.find("i").remove();
            else if (j != i) {
                var a = f("i", e);
                a[0] || (a = f("<i />").appendTo(e)), a.text(i)
            } else !e.find("i")[0] && i ? f("<i />").text(i).appendTo(e) : i && e.find("i").text(i);
            T && t(s), I && I.commonUserbar && v.fire("common.userbarMsgNum", i), l(s.global)
        }
        var s = f("#userbar-msg"),
            i = m(),
            a = !0,
            n = D + 1e3 * C < (new Date).getTime() ? !0 : !1;
        i && i.data && i.time && (i.time > (new Date).getTime() - 9e4 || n ? (e(s, i.data), a = !1) : a = !0), a && f.get(x + "?t=" + +new Date, function (i) {
            0 == i.errno && i.data && (e(s, i.data), r(i.data))
        }, "json")
    }

    function l(e) {
        var s = null,
            i = e;
        i && i.data && (i = i.data, i.length && (f(i).each(function (e, i) {
            s || 1 != i.enabled || (s = i)
        }), s && q.show(s)))
    }

    function r(e) {
        _.set("ikmsg_time", (new Date).getTime()), _.set("ikmsg_data", f.json.stringify(e))
    }

    function m() {
        return {
            time: _.get("ikmsg_time") || 0,
            data: f.json.parse(_.get("ikmsg_data") || "null")
        }
    }

    function c() {
        _.remove("ikmsg_data"), _.remove("ikmsg_time")
    }
    var d, g, f = e("common:widget/js/util/tangram/tangram.js"),
        u = e("common:widget/js/ui/tip/tip.js"),
        p = e("common:widget/js/util/template/template.js"),
        h = (e("common:widget/js/util/log/log.js"), e("common:widget/js/ui/scrollbar/scrollbar.js")),
        v = e("common:widget/js/util/event/event.js"),
        _ = e("common:widget/js/util/store/store.js"),
        w = "/s/toutu/promotion.js",
        k = "http://muzhi.baidu.com",
        y = {
            4000: "<#:=sysmsg_content.brief#>",
            1001: '\u4f60\u7684\u63d0\u95ee <a href="<#if(fields.q_isDoctor&& fields.q_isDoctor==1){#>' + k + '<#}#>/question/<#=fields.qid#>" target="_blank" class="msg-link"><#:=fields.q_title#></a> \u6536\u5230 <#if(fields.notice_count>0){#><#=fields.notice_count#><#}else{#>1<#}#> \u6761\u65b0\u56de\u7b54\u3002',
            1025: '\u4f60\u7684\u63d0\u95ee <a href="<#if(fields.q_isDoctor&& fields.q_isDoctor==1){#>' + k + '<#}#>/question/<#=fields.qid#>" target="_blank" class="msg-link"><#:=fields.q_title#></a> \u5df2\u6709 <#if(fields.notice_count>0){#><#=fields.notice_count#><#}else{#>1<#}#> \u6761\u56de\u7b54\u4e14\u5185\u5bb9\u6bd4\u8f83\u4f18\u8d28\uff0c\u8bf7\u67e5\u770b\u5e76\u53ca\u65f6\u5904\u7406\u3002',
            1026: '\u4f60\u7684\u63d0\u95ee <a href="<#if(fields.q_isDoctor&& fields.q_isDoctor==1){#>' + k + '<#}#>/question/<#=fields.qid#>" target="_blank" class="msg-link"><#:=fields.q_title#></a> \u5df2\u7ecf\u7531\u767e\u5ea6\u77e5\u9053\u5e2e\u4f60\u9009\u51fa\u4f18\u8d28\u7b54\u6848\uff0c\u8bf7\u67e5\u770b\u5e76\u53ca\u65f6\u91c7\u7eb3\u7b54\u6848\u3002',
            1006: ["<#if(fields.username_arr[0]){#>", '<a href="http://www.baidu.com/p/<#:=fields.username_arr[0]#>?from=zhidao" target="_blank"><#:=fields.username_arr[0]#></a>', "<#}else{#>", "\u70ed\u5fc3\u7f51\u53cb", "<#}#>", "\u8ffd\u95ee\u4e86\u4f60 ", '<a href="/question/<#=fields.qid#>" target="_blank" class="msg-link"><#:=fields.q_title#></a> \u7ee7\u7eed\u5e2e\u52a9Ta\u5427\u3002'].join(""),
            1020: '\u606d\u559c\uff01\u4f60\u5bf9\u95ee\u9898 <a href="/question/<#=fields.qid#>" target="_blank" class="msg-link"><#:=fields.q_title#></a> \u7684\u56de\u7b54\u88ab\u9009\u4e3a\u4f18\u8d28\u7b54\u6848\u3002',
            1027: '\u4f60\u5bf9\u95ee\u9898 <a href="/question/<#=fields.qid#>" target="_blank" class="msg-link"><#:=fields.q_title#></a> \u7684\u56de\u7b54\u6536\u5230 <#if(fields.notice_count>0){#><#=fields.notice_count#><#}else{#>1<#}#> \u6761\u65b0\u8bc4\u8bba\u3002',
            1028: '\u4f60\u5bf9\u95ee\u9898 <a href="/question/<#=fields.qid#>" target="_blank" class="msg-link"><#:=fields.q_title#></a> \u7684\u8bc4\u8bba\u6536\u5230 <#if(fields.notice_count>0){#><#=fields.notice_count#><#}else{#>1<#}#> \u6761\u65b0\u56de\u590d\u3002',
            1010: ["<#if(fields.username_arr[0]){#>", '<a href="http://www.baidu.com/p/<#:=fields.username_arr[0]#>?from=zhidao" target="_blank"><#:=fields.username_arr[0]#></a>', "<#}else{#>", "\u70ed\u5fc3\u7f51\u53cb", "<#}#>", " \u8865\u5145\u4e86\u63d0\u95ee ", '<a href="/question/<#=fields.qid#>" target="_blank" class="msg-link"><#:=fields.q_title#></a> \u7ee7\u7eed\u5e2e\u52a9Ta\u5427\u3002'].join(""),
            1029: '\u4f60\u56de\u7b54\u8fc7\u7684\u95ee\u9898 <a href="/question/<#=fields.qid#>" target="_blank" class="msg-link"><#:=fields.q_title#></a> \u88ab\u8ffd\u52a0\u4e86\u60ac\u8d4f\uff08\u8d22\u5bcc\u503c+50\uff09\uff0c\u53bb\u5b8c\u5584\u56de\u7b54',
            1008: ["<#if(fields.username_arr[0]){#>", '<a href="http://www.baidu.com/p/<#:=fields.username_arr[0]#>?from=zhidao" target="_blank"><#:=fields.username_arr[0]#></a>', "<#}else{#>", "\u70ed\u5fc3\u7f51\u53cb", "<#}#>", '\u8d5e\u4e86\u4f60\u5bf9\u95ee\u9898<a href="/question/<#=fields.qid#>" target="_blank" class="msg-link"><#:=fields.q_title#></a> \u7684\u56de\u7b54'].join(""),
            "1009a": '\u4f60\u5bf9\u95ee\u9898 <a href="/question/<#=fields.qid#>" target="_blank" class="msg-link"><#:=fields.q_title#></a> \u7684\u56de\u7b54\u88ab\u63d0\u95ee\u8005\u548c\u7f51\u53cb\u540c\u65f6\u91c7\u7eb3\uff01',
            1009: '\u4f60\u5bf9\u95ee\u9898 <a href="/question/<#=fields.qid#>" target="_blank" class="msg-link"><#:=fields.q_title#></a> \u7684\u56de\u7b54\u88ab\u63d0\u95ee\u8005\u91c7\u7eb3\uff01',
            1018: '\u4f60\u5bf9\u95ee\u9898 <a href="/question/<#=fields.qid#>" target="_blank" class="msg-link"><#:=fields.q_title#></a> \u7684\u56de\u7b54\u88ab\u7f51\u53cb\u91c7\u7eb3\uff01',
            1002: ["<#if(fields.username_arr[0]){#>", '<a href="http://www.baidu.com/p/<#:=fields.username_arr[0]#>?from=zhidao" target="_blank"><#:=fields.username_arr[0]#></a>', "<#}else{#>", "\u70ed\u5fc3\u7f51\u53cb", "<#}#>", " \u5411\u4f60\u6c42\u52a9 ", '<a href="/question/<#=fields.qid#>" target="_blank" class="msg-link"><#:=fields.q_title#></a>\uff0c\u5c3d\u5feb\u5e2eTa\u89e3\u7b54\u95ee\u9898\u5427'].join("")
        },
        q = {
            cmsCookieName: "IK_MSG_POP",
            getCms: function (e) {
                f.ajax({
                    url: e,
                    dataType: "json",
                    success: function (e) {
                        if (e) {
                            q.show(e, "cms");
                            var s = m();
                            s && s.data && l(s.data.global)
                        }
                    }
                })
            }, setCookie: function (e) {
                f.cookie.set(q.cmsCookieName, e.id, {
                    expires: f.date.parse(e.endTime).getTime(),
                    path: "/"
                })
            }, generateView: function (e) {
                var s = [];
                return s.push('<a target="_blank"  href="' + e.linkUrl + '"><img class="task-guide-image" src="' + e.imageUrl + '" /></a>'), s.join("")
            }, show: function (e, s) {
                var i = s || "msg";
                ("cms" != s || q.Validate(e)) && f("#footer").size() && (!e.imageUrl || "http://" === e.imageUrl || e.imageUrl.length < 17 || (d ? d.getTipBody().html(q.generateView(e)) : d = new u({
                    rightbottom: "popcms",
                    width: 240,
                    position: {
                        my: "right-3 bottom-3",
                        at: "right bottom"
                    },
                    tooltipClass: "task-guide tip-green",
                    arrow: !1,
                    radius: !1,
                    closebox: !0,
                    content: q.generateView(e),
                    close: function () {
                        "cms" == i ? q.setCookie(e) : c()
                    }, target: f("#footer")
                }), d.show(), d.getTipContainer().delegate("a", "click", function (e) {
                    try {
                        d.hide()
                    } catch (e) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: e.message,
                            path: "common:widget/js/logic/msg-new/msg-new.js",
                            method: "",
                            ln: 148
                        })
                    }
                })))
            }, Validate: function (e) {
                var s = f.date.parse(e.startTime),
                    i = f.date.parse(e.endTime),
                    t = f.cookie.get(q.cmsCookieName),
                    a = !1;
                return 1 == e.enabled && t != e.id && (new Date).getTime() >= s.getTime() && (new Date).getTime() < i.getTime() && (a = !0), a
            }
        },
        b = ['<div id="nav-msg-layout">', '<div class="nav-msg-tri"></div>', '<div class="nav-msg-menu">', '<a href="#" class="nav-msg-ask<#if(isNewAsk || (!isNewReply && !isNewSys)){#> active<#}#>" data-type="ask"><i></i><span>\u63d0\u95ee</span><#if(isNewAsk){#><s></s><#}#></a>', '<a href="#" class="nav-msg-answer<#if(!isNewAsk && isNewReply){#> active<#}#>" data-type="reply"><i></i><span>\u56de\u7b54</span><#if(isNewReply){#><s></s><#}#></a>', '<a href="#" class="nav-msg-sys<#if(!isNewAsk && !isNewReply && isNewSys){#> active<#}#>" data-type="sysmsg"><i></i><span>\u7cfb\u7edf</span><#if(isNewSys){#><s></s><#}#></a>', "</div>", '<div class="nav-msg-wrap"><ol class="nav-msg-list line"></ol></div>', '<div class="nav-msg-more">', '<a href="/ihome/notice/all" target="_blank" id="notice-all-clear"><i class="i-msg mr-5"></i><span>\u6240\u6709\u901a\u77e5</span></a>', "</div>", "</div>"].join(""),
        j = 0,
        T = !1,
        x = "/notice/get/count",
        N = "/notice/get/",
        D = (new Date).getTime(),
        C = 180;
    v.on("msg.num", function () {
        clearInterval(g), g = setInterval(o, 9e4), o()
    });
    var z, U, A, I;
    i.exports.init = function (e) {
        function s(e) {
            clearTimeout(U), U = setTimeout(function () {
                f(e.target).closest("#userbar-msg").size() || f(e.target).closest("#nav-msg-layout").size() || (clearTimeout(z), z = setTimeout(function () {
                    g = !1, f("#nav-msg-layout").hide(), f(document.body).unbind("mousemove", s)
                }, 50))
            }, 50)
        }
        try {
            if (q.getCms(w), "0" == F.context("user").isLogin || "" == F.context("user").isLogin || "false" == F.context("user").isLogin || void 0 == F.context("user").isLogin) return;
            e && (A = e.position, I = e), v.fire("msg.num"), f("#userbar-msg").mouseenter(function () {
                var e = f(this);
                e.find("i") && parseInt(e.find("i").text()) > 0 && (clearTimeout(z), z = setTimeout(function () {
                    T = !0, o(), f("#nav-msg-layout").show()
                }, 300), f(document.body).unbind("mousemove", s).on("mousemove", s))
            }), f(document).on("mousemove", function () {
                D = (new Date).getTime()
            })
        } catch (i) {
            "undefined" != typeof alog && alog("exception.fire", "catch", {
                msg: i.message,
                path: "common:widget/js/logic/msg-new/msg-new.js",
                method: "",
                ln: 516
            })
        }
    }
});;
define("common:widget/js/logic/submit/submit.js", function (e, o, t) {
    var a = e("common:widget/js/util/tangram/tangram.js"),
        r = e("common:widget/js/ui/base/base.js"),
        c = e("common:widget/js/ui/dialog/dialog.js"),
        n = e("common:widget/js/logic/ut/ut.js"),
        i = e("common:widget/js/util/event/event.js"),
        s = e("common:widget/js/util/form/form.js"),
        m = e("common:widget/js/logic/captcha/captcha.js"),
        d = e("common:widget/js/util/log/log.js"),
        l = r(function (o) {
            var t = this;
            i.fire("editor.default");
            var r = {
                url: "/submit/ajax/",
                params: {
                    ie: "UTF-8"
                },
                hasJump: !1,
                autoRefresh: !1,
                jumpSubmit: function (e, o, r) {
                    var c = {
                        name: t.guid + "_FORM_NAME",
                        id: t.guid + "_FORM_ID",
                        action: "/submit/",
                        method: "post"
                    };
                    c.action = "" != document.referrer ? "/submit/?cm=" + o.cm + "&fr=" + encodeURIComponent(document.referrer) : "/submit/?cm=" + o.cm, 1 == F.context("hasZhimaTag") && F.context("zhimaTagOpen") && (c.action += "&iszhima=1"), new s(a.extend(a.extend(c, r || {}), {
                        input: o
                    })).submit()
                }, errorDeal: function (e, o) {
                    var t = o && o.data || {
                            info: "\u7f51\u7edc\u5f02\u5e38\u5566\uff1a\uff08\u8bf7\u91cd\u65b0\u63d0\u4ea4"
                        },
                        n = o && o.errorNo;
                    if (t && n && 10054 == n) {
                        var s = ['<div class="dialog-noemail"><i class="i-upload-big"></i><i class="i-download-big"></i>', '<p class="f-bold mt-20">\u77e5\u9053\u5df2\u652f\u6301\u6587\u4ef6\u4e0a\u4f20\u3001\u4e0b\u8f7d\u529f\u80fd\u3002</p>', '<p class="f-gray mt-5">\u77e5\u9053\u7f51\u53cb\u4f1a\u5c06\u60a8\u9700\u8981\u7684\u6587\u4ef6\u4e0a\u4f20\u5230\u77e5\u9053\uff0c\u60a8\u53ef\u4ee5\u5728\u7ebf\u9884\u89c8\u548c\u4e0b\u8f7d\u3002</p>', '<p class="f-orange mt-5">\u4e3a\u4e86\u60a8\u7684\u4fe1\u606f\u5b89\u5168\uff0c\u8bf7\u4e0d\u8981\u7559\u4e0b\u60a8\u7684\u4e2a\u4eba\u90ae\u7bb1\u3002</p>', '<p class="dialog-noemail-btn"><a id="dialog-noemail-btn" class="btn-32-green"><em><b>\u8fd4\u56de\u4fee\u6539</b></em></a></p></div>'];
                        new c({
                            title: "\u4fe1\u606f\u63d0\u793a",
                            width: 480,
                            height: 360,
                            content: s.join(""),
                            open: function () {
                                a(".dialog-noemail-btn").delegate("a", "click", function (e) {
                                    try {
                                        e.preventDefault(), i.fire("dialog.close")
                                    } catch (e) {
                                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                                            msg: e.message,
                                            path: "common:widget/js/logic/submit/submit.js",
                                            method: "",
                                            ln: 102
                                        })
                                    }
                                })
                            }
                        })
                    } else 12303 == n && r.authcode ? r.captcha = new m({
                        type: "pcafter",
                        submitParams: r,
                        from: r.authcode.getFrom() || ""
                    }) : 12304 == n && r.captcha ? r.captcha.error() : 12302 == n && r.authcode ? r.authcode.error() : (c.alert(t.info), r.autoRefresh && setTimeout(function () {
                        window.location.reload(!0)
                    }, 3e3));
                    d.send({
                        type: 2032,
                        action: "submitError",
                        errorNo: n
                    })
                }
            };
            if (a.each(a.extend(r, o), function (e, o) {
                a.isFunction(o) && t.on(e, o)
            }), r.params && (r.params.utdata = n.report().c), r.syncId) {
                if ("undefined" == typeof t.syncIdMap[r.syncId] && (t.syncIdMap[r.syncId] = !1), t.syncIdMap[r.syncId]) return;
                t.syncIdMap[r.syncId] = !0
            }
            var l = function () {
                /\/submit\/(ajax|user)/.test(r.url) && F.context("user").stoken && (r.params.stoken = F.context("user").stoken), a.ajax(r.url, {
                    type: r.method || "post",
                    dataType: r.dataType || "json",
                    data: r.params,
                    async: !r.sync,
                    success: function (o) {
                        if (r.syncId && (t.syncIdMap[r.syncId] = !1), o && "undefined" == typeof o.errorNo && (o.errorNo = o.errno), o && "undefined" == typeof o.data && (o.data = o), o && 0 == o.errorNo) r.captcha && r.captcha.dialog.close(), t.fire("beforeJump", o.data), r.hasJump && r.jumpSubmitDelay ? setTimeout(function () {
                            t.fire("jumpSubmit", o.data)
                        }, r.jumpSubmitDelay) : r.hasJump && t.fire("jumpSubmit", o.data);
                        else {
                            var n = o ? o.data : "";
                            if (t.fire("beforeError", n), o && 267 == o.errorNo) return void t.errorCheck({
                                errorNo: 267,
                                actCallback: function () {
                                    window.open("https://passport.baidu.com/v2/?binding&tpl=ik&u=http%3A%2F%2Fzhidao.baidu.com&device=pc")
                                }, confirmCallback: function () {
                                    l()
                                }
                            });
                            if (o && 12 == o.errorNo && 16 == n.reason) return void t.errorCheck({
                                errorNo: 12,
                                actCallback: function () {
                                    window.open("/ihome/set/verify?fr=submit")
                                }, confirmCallback: function () {
                                    l()
                                }
                            });
                            if (o && 12 == o.errorNo && 1 != n.reason && F.context("user").gradeIndex > 3) {
                                a(document).on("click", ".user-appeal-complain", function (o) {
                                    try {
                                        o.preventDefault(), s.close(), e.async("common:widget/js/logic/complain/complain.js", function (e) {
                                            e("no-qid", null, null, {
                                                type: 100500
                                            })
                                        })
                                    } catch (t) {
                                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                                            msg: t.message,
                                            path: "common:widget/js/logic/submit/submit.js",
                                            method: "",
                                            ln: 239
                                        })
                                    }
                                });
                                var i = '\u60a8\u7684\u8d26\u53f7\u8fdd\u53cd\u4e86<a href="http://help.baidu.com/question?prod_en=zhidao&class=154&id=851" target="_blank">\u77e5\u9053\u89c4\u8303</a>\uff0c\u5df2\u88ab' + (n.days > 0 ? "" : "\u6c38\u4e45") + "\u5c01\u7981\uff0c\u65e0\u6cd5\u8fdb\u884c\u4efb\u4f55\u64cd\u4f5c" + (n.days > 0 ? "\uff0c\u8fd8\u6709" + n.days + "\u5929\u89e3\u5c01" : "") + '\u3002\u5982\u679c\u60a8\u8ba4\u4e3a\u5224\u65ad\u6709\u8bef\uff0c\u8bf7<a href="javascript:;" class="user-appeal-complain">\u53d1\u8d77\u7533\u8bc9</a>\uff0c\u5e2e\u52a9\u6211\u4eec\u6301\u7eed\u6539\u8fdb\u3002',
                                    s = c.alert(i, {
                                        width: 400
                                    });
                                return
                            }
                            if (o && 13 == o.errorNo) return void t.errorCheck({
                                errorNo: 13,
                                actCallback: function () {
                                    window.open("/ihome/set/profile?type=contact")
                                }, confirmCallback: function () {
                                    l()
                                }
                            });
                            t.fire("errorDeal", o)
                        }
                    }, error: function (e, o, a) {
                        r.syncId && (t.syncIdMap[r.syncId] = !1), t.fire("error", a), t.fire("errorDeal")
                    }
                })
            };
            l()
        }).extend({
            syncIdMap: {},
            _init: function () {
                try {} catch (e) {
                    "undefined" != typeof alog && alog("exception.fire", "catch", {
                        msg: e.message,
                        path: "common:widget/js/logic/submit/submit.js",
                        method: "",
                        ln: 280
                    })
                }
            }, errorCheck: function (e) {
                var o = this;
                if (o.errorNo_Checked || (o.errorNo_Checked = {
                    267: {
                        title: "\u77e5\u9053\u63d0\u793a",
                        content: "\u8fd8\u5dee\u4e00\u6b65\u5373\u53ef\u5b8c\u6210\u63d0\u4ea4\u54e6\uff1a\u5b8c\u6210\u4e2a\u4eba\u4fe1\u606f\u8865\u586b",
                        act: "\u4fe1\u606f\u8865\u586b",
                        confirm: "\u786e\u8ba4\u63d0\u4ea4",
                        cancel: "\u653e\u5f03\u63d0\u4ea4"
                    },
                    12: {
                        title: "\u77e5\u9053\u63d0\u793a",
                        content: "\u7531\u4e8e\u60a8\u7684\u8d26\u53f7\u5b58\u5728\u5f02\u5e38\u98ce\u9669\uff0c\u6211\u4eec\u6682\u65f6\u51bb\u7ed3\u4e86\u60a8\u7684\u8d26\u53f7\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u9a8c\u8bc1\u60a8\u7684\u8eab\u4efd\u6765\u89e3\u9664\u51bb\u7ed3\u72b6\u6001",
                        act: "\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1",
                        confirm: "\u5b8c\u6210\u8eab\u4efd\u9a8c\u8bc1",
                        cancel: "\u53d6\u6d88"
                    },
                    13: {
                        title: "\u5e10\u53f7\u5b89\u5168\u98ce\u9669\u63d0\u793a",
                        content: "\u5c0a\u656c\u7684\u77e5\u53cb\uff0c\u4e3a\u4e86\u66f4\u597d\u5730\u4fdd\u62a4\u60a8\u7684\u5e10\u53f7\uff0c\u8bf7\u7ed1\u5b9a\u624b\u673a\u540e\u518d\u8fdb\u884c\u8be5\u64cd\u4f5c\u3002\u7ed1\u5b9a\u540e\u5e10\u53f7\u51fa\u73b0\u5f02\u5e38\u53ef\u514d\u8d39\u83b7\u5f97\u77ed\u4fe1\u63d0\u9192",
                        act: "\u8fdb\u884c\u624b\u673a\u7ed1\u5b9a",
                        confirm: "\u5b8c\u6210\u624b\u673a\u7ed1\u5b9a",
                        cancel: "\u53d6\u6d88",
                        height: 180
                    }
                }), o.errorNo_Checked[e.errorNo]) var t = new c({
                    width: 350,
                    height: o.errorNo_Checked[e.errorNo].height || 160,
                    title: o.errorNo_Checked[e.errorNo].title || "\u77e5\u9053\u63d0\u793a",
                    content: o.errorNo_Checked[e.errorNo].content || "",
                    buttons: [{
                        text: o.errorNo_Checked[e.errorNo].act || "",
                        click: function () {
                            try {
                                var r = a(this).next().find(".btn-32-green");
                                r.html() == (o.errorNo_Checked[e.errorNo].act || "") ? (e.actCallback && e.actCallback(), r.html(o.errorNo_Checked[e.errorNo].confirm || "")) : (t.close(), e.confirmCallback && e.confirmCallback())
                            } catch (c) {
                                "undefined" != typeof alog && alog("exception.fire", "catch", {
                                    msg: c.message,
                                    path: "common:widget/js/logic/submit/submit.js",
                                    method: "",
                                    ln: 348
                                })
                            }
                        }
                    }, {
                        text: o.errorNo_Checked[e.errorNo].cancel || "\u53d6\u6d88",
                        click: function () {
                            try {
                                t.close(), e.cancelCallback && e.cancelCallback()
                            } catch (o) {
                                "undefined" != typeof alog && alog("exception.fire", "catch", {
                                    msg: o.message,
                                    path: "common:widget/js/logic/submit/submit.js",
                                    method: "",
                                    ln: 355
                                })
                            }
                        }
                    }],
                    autoDispose: !0
                })
            }
        });
    i.on("catcha.submit", function (e, o) {
        new l(o)
    }), t.exports = l
});;
define("common:widget/js/logic/union/union.js", function (n, i, o) {
    var t, e = n("common:widget/lib/jquery/jquery.js");
    o.exports = function (n, i, o) {
        t = t || e.ajax({
            url: "http://cbjs.baidu.com/js/m.js",
            dataType: "script",
            cache: !0
        }), window.BAIDU_DAN_config = window.BAIDU_DAN_config || {}, window.BAIDU_DAN_config.zIndex = 1, t.done(function () {
            "object" == e.type(o) && "undefined" != typeof BAIDU_CLB_addOrientation && e.map(o, function (n, i) {
                "string" == e.type(n) && "" != e.trim(n) && BAIDU_CLB_addOrientation(i, n)
            }), "undefined" != typeof BAIDU_CLB_fillSlotAsync && BAIDU_CLB_fillSlotAsync(n, i)
        })
    }
});;
define("common:widget/js/logic/ut/ut.js", function (t, e, n) {
    function o(t) {
        var e = [t.x, t.y],
            n = m(this),
            o = g[this.id];
        if (o) o.hover || (o.hover = !0, o.count++);
        else {
            var i = n.position();
            i.right = i.left + n.width(), i.botton = i.top + n.height(), o = g[this.id] = m.extend(i, {
                hover: !0,
                count: 1
            })
        }
        o["mouse" + o.count] || (o["mouse" + o.count] = [], o["time" + o.count] = {
            start: +new Date
        }, g.ma.push(o["mouse" + o.count]), g.ea.push(this.id)), o["mouse" + o.count].push(e)
    }

    function i(t) {
        var e = [t.x, t.y],
            n = g[this.id];
        if (n && n.hover) {
            if (e[0] && e[0] > n.left && e[0] < n.right && e[1] && e[1] > n.top && e[1] < n.buttom) return;
            n["time" + n.count].end = (new Date).getTime(), n.hover = !1
        }
    }

    function u() {
        var t = g.ma.length;
        if (t > 0) {
            var e = g.ma[t - 1];
            return e[e.length - 1]
        }
    }

    function r() {
        var t = g.ea.concat(),
            e = t.length;
        return e > 10 && (t = t.splice(e - 10, 10)), t.join(",")
    }

    function c() {
        if (l) return p;
        m.each(g.ea, function (t, e) {
            g.ea[t] = w[e]
        });
        var t = [u(), r(), (new Date).getTime() - d, [screen.width, screen.height].join(",")].join("    ");
        return p.c = s(t) + "," + j + v, l = !0, p
    }

    function s(t) {
        for (var e = [], n = {}, o = j % 100, i = 0, u = t.length; u > i; i++) {
            var r = t.charCodeAt(i) ^ o;
            e.push(r), n[r] || (n[r] = []), n[r].push(i)
        }
        return e
    }

    function a(t) {
        m.each(t, function (t, e) {
            m("#" + e).mouseover(o).mouseout(i), w[e] = t
        }), m(document.body).click(function (t) {
            try {
                v = 1
            } catch (t) {
                "undefined" != typeof alog && alog("exception.fire", "catch", {
                    msg: t.message,
                    path: "common:widget/js/logic/ut/ut.js",
                    method: "",
                    ln: 127
                })
            }
        })
    }

    function h(t, e) {
        new f({
            method: "post",
            target: "iktssender",
            action: t,
            input: e
        }).submit().dispose()
    }
    var m = t("common:widget/lib/jquery/jquery.js"),
        f = t("common:widget/js/util/form/form.js"),
        d = +new Date,
        g = {
            ea: [],
            ma: []
        },
        p = {},
        l = !1,
        v = 0,
        j = +new Date,
        w = {};
    n.exports = {
        start: a,
        report: c,
        send: h
    }
});;
define("common:widget/js/logic/set-avatar/set-avatar.js", function (a, e) {
    function t(a, e, t, s) {
        var n = o('<div class="goto-set-avatar" />').appendTo(a).html('<a href="' + (e || "/ihome/set/profile?type=avatar") + '" target="' + (t || "_blank") + '">' + (s || "\u66f4\u6362\u5f62\u8c61") + "</a><p></p>");
        a.addClass("avatar-mask-p"), a.mouseover(function () {
            n.css("display", "block")
        }).mouseout(function () {
            n.css("display", "none")
        })
    } {
        var o = a("common:widget/lib/jquery/jquery.js");
        a("common:widget/js/util/event/event.js")
    }
    e.init = function (a) {
        try {
            t(o(a.elem), a.href, a.openTag, a.str)
        } catch (e) {
            "undefined" != typeof alog && alog("exception.fire", "catch", {
                msg: e.message,
                path: "common:widget/js/logic/set-avatar/set-avatar.js",
                method: "",
                ln: 26
            })
        }
    }
});;
define("common:widget/js/logic/sign-in/sign-in.js", function (e, n, i) {
    var t = e("common:widget/js/util/tangram/tangram.js"),
        s = e("common:widget/js/ui/base/base.js"),
        a = e("common:widget/js/ui/tip/tip.js"),
        o = e("common:widget/js/ui/dialog/dialog.js"),
        d = e("common:widget/js/logic/submit/submit.js"),
        c = e("common:widget/js/util/event/event.js"),
        r = e("common:widget/js/util/log/log.js"),
        l = e("common:widget/js/logic/authcode/authcode.js");
    e("common:widget/lib/jquery.ui/jquery.ui.datepicker.js"), c.on("short.dialog", function (e, n) {
        var i = ['<div class="short-content">', "<p>", n.content, "</p>", "</div>"].join(""),
            t = new o({
                content: i,
                autoDispose: !0,
                width: 300,
                height: 100,
                className: "short-dialog",
                open: function () {
                    setTimeout(function () {
                        t.close(), n.callback && n.callback()
                    }, 1500)
                }
            })
    });
    var g = s().extend({
        _initDialog: function () {
            try {
                var e = this;
                window.dialogInstance ? window.dialogInstance.open() : window.dialogInstance = new o({
                    width: 764,
                    height: 589,
                    autoDispose: !1,
                    className: "sign-in-dialog",
                    content: ['<div class="wrapper">', '<div class="close-layer"></div>', '<div class="line upper">', '<div class="grid sign-in-desc">', '<h1>\u60a8\u5df2\u8fde\u7eed\u6d3b\u8dc3<span id="sign-in-days" class="sign-in-days">0</span>\u5929\uff0c\u4eca\u5929\u5df2\u52a0\u901f<span id="speed-days" class="speed-days">0</span>\u5929</h1>', '<p class="info">\u8fde\u7eed\u7b7e\u5230<br/>\u8d62\u53d6\u8d22\u5bcc\u503c\u597d\u793c</p>', '<p class="exp-text">\u7ecf\u9a8c\u503c+2</p>', '<a href="#" class="sign-in-btn" id="sign-in-btn"></a>', "</div>", '<div class="grid calendar-container">', '<div class="sign-in-calendar" id="sign-in-calendar"></div>', "</div>", "</div>", '<div class="middle">', '<div class="color-info">', '<i class="i-green"></i>\u7b7e\u5230\u8fdb\u5ea6', '<i class="i-orange"></i>\u4eca\u65e5\u52a0\u901f', "</div>", '<div class="progress-bar">', '<div class="empty-line line">', '<div class="grid green"></div>', '<div class="grid orange"></div>', "</div>", '<div class="bar-tip">0</div>', '<div class="wealth-line line">', '<div class="gold-1 grid"></div>', '<div class="gold-2 grid"></div>', '<div class="gold-3 grid"></div>', '<div class="gold-4 grid"></div>', "</div>", '<div class="wealth-desc">', '<div class="wealth-info wealth-info-1 grid">', "<p>150\u8d22\u5bcc\u503c</p>", "<span>7\u5929</span>", "</div>", '<div class="wealth-info wealth-info-2 grid">', "<p>500\u8d22\u5bcc\u503c</p>", "<span>15\u5929</span>", "</div>", '<div class="wealth-info wealth-info-3 grid">', "<p>1200\u8d22\u5bcc\u503c</p>", "<span>30\u5929</span>", "</div>", '<div class="wealth-info wealth-info-4 grid">', "<p>3000\u8d22\u5bcc\u503c</p>", "<span>60\u5929</span>", "</div>", "</div>", "</div>", "</div>", '<div class="get-wealth">', '\u7b7e\u5230\u6210\u957f\u8bb0\u5f55\uff1a<span id="my-wealth" class="my-wealth mr-5">' + F.context("sign-in").wealth + "</span>\u8d22\u5bcc\u503c\u5f85\u9886\u53d6", '<a href="#" id="wealth-submit" class="wealth-submit">\u9886\u53d6</a>', "</div>", '<div class="bottom">', '<a href="http://zhidao.baidu.com/shop/lottery" target="_blank" class="shop-banner"></a>', "</div>", "</div>"].join(""),
                    open: function () {
                        t(".sign-in-dialog .close-layer").click(function () {
                            try {
                                e._removeRemedyTip();
                                var n = {
                                    type: 2014,
                                    action: "click",
                                    pos: "signin-dialog-close"
                                };
                                n.done = t("#sign-in-btn").hasClass("done") ? 1 : 0, r.send(n), window.dialogInstance.close()
                            } catch (i) {
                                "undefined" != typeof alog && alog("exception.fire", "catch", {
                                    msg: i.message,
                                    path: "common:widget/js/logic/sign-in/sign-in.js",
                                    method: "",
                                    ln: 136
                                })
                            }
                        }), 0 == F.context("sign-in").wealth && t(".wealth-submit").addClass("disabled"), e._initProperty(), e.defaultDate = [e.month, e.day, e.year].join("/"), e.lastDay = 1, 1 == e.month ? (e.lastMonth = 12, e.lastYear = e.year - 1) : (e.lastMonth = e.month - 1, e.lastYear = e.year), e.minDate = [e.lastMonth, e.lastDay, e.lastYear].join("/"), t(e.target).datepicker({
                            showOtherMonths: !0,
                            selectOtherMonths: !1,
                            showMonthAfterYear: !0,
                            prevText: "\u67e5\u770b\u4e0a\u4e00\u6708",
                            nextText: "\u67e5\u770b\u4e0b\u4e00\u6708",
                            defaultDate: e.defaultDate,
                            minDate: e.minDate,
                            maxDate: e.defaultDate,
                            beforeShowDay: function (n) {
                                var i = t.parseJSON(F.context("sign-in").signinDays),
                                    s = lastMonth = futureDate = !1,
                                    a = [n.getFullYear(), n.getMonth() + 1, n.getDate()].join("/");
                                return t(i).each(function (e, n) {
                                    a == n && (s = !0)
                                }), n.getMonth() + 1 == e.lastMonth && (lastMonth = !0), (n.getDate() > e.day || n.getMonth() + 1 > e.month) && (futureDate = !0), s ? [!1, "td-signin-done"] : lastMonth ? [!1, "td-signin-none td-signin-lastMonth"] : futureDate ? [!1, "td-signin-none td-signin-future"] : [!1, "td-signin-none"]
                            }
                        }), e.instance = t(e.target).data("datepicker"), t(e.instance).on("update", function () {
                            e._lightToday(), e._showRemedyTip()
                        }), e._updateSignIn()
                    }
                })
            } catch (n) {
                "undefined" != typeof alog && alog("exception.fire", "catch", {
                    msg: n.message,
                    path: "common:widget/js/logic/sign-in/sign-in.js",
                    method: "",
                    ln: 233
                })
            }
        }, _initProperty: function () {
            try {
                var e = this;
                e.year = e.options.year, e.month = e.options.month, e.day = e.options.day, e.target = ".sign-in-dialog #sign-in-calendar", e.container = ".sign-in-dialog", e.signCardCanUsed = F.context("sign-in").signCardCanUsed, e.cardShopId = 910
            } catch (n) {
                "undefined" != typeof alog && alog("exception.fire", "catch", {
                    msg: n.message,
                    path: "common:widget/js/logic/sign-in/sign-in.js",
                    method: "",
                    ln: 250
                })
            }
        }, _initEvent: function () {
            try {
                var e = this;
                t(".sign-in-dialog").delegate("#sign-in-btn", "click", function (n) {
                    try {
                        t(this).hasClass("done") ? r.send({
                            type: 2014,
                            action: "click",
                            pos: "signin-dialog-uhome"
                        }) : (n.preventDefault(), r.send({
                            type: 2014,
                            action: "click",
                            pos: "signin-dialog-submit"
                        }), c.fire("login.check", {
                            isLogin: function () {
                                new d({
                                    url: "/submit/user",
                                    params: {
                                        cm: 100509
                                    },
                                    beforeJump: function () {
                                        var n = t(".exp-text"),
                                            i = parseInt(n.css("top"));
                                        n.css({
                                            top: parseInt(i + 25),
                                            display: "block"
                                        }).animate({
                                            top: i
                                        }, 800, function () {
                                            setTimeout(function () {
                                                n.css("display", "none")
                                            }, 800)
                                        }), e._updateSignIn(), e._todayMonth()
                                    }, errorDeal: function (e, n) {
                                        c.fire("short.dialog", {
                                            content: n.errorMsg
                                        })
                                    }
                                })
                            }
                        }))
                    } catch (n) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: n.message,
                            path: "common:widget/js/logic/sign-in/sign-in.js",
                            method: "",
                            ln: 309
                        })
                    }
                }).delegate("#wealth-submit", "click", function (n) {
                    try {
                        n.preventDefault(), e._wealthSubmitAction()
                    } catch (n) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: n.message,
                            path: "common:widget/js/logic/sign-in/sign-in.js",
                            method: "",
                            ln: 313
                        })
                    }
                }).delegate(".speed-up-desc", "mouseenter", function () {
                    t(".speed-up-tip").css("display", "block")
                }).delegate(".speed-up-desc", "mouseleave", function () {
                    t(".speed-up-tip").css("display", "none")
                })
            } catch (n) {
                "undefined" != typeof alog && alog("exception.fire", "catch", {
                    msg: n.message,
                    path: "common:widget/js/logic/sign-in/sign-in.js",
                    method: "",
                    ln: 318
                })
            }
        }, _lightToday: function () {
            var e = this,
                n = t(e.target).find(".ui-datepicker-today");
            1 != F.context("sign-in").isSignIn || n.hasClass("td-signin-done") || n.removeClass("td-signin-none").addClass("td-signin-done")
        }, _getWealthLevel: function (e, n) {
            var i = 0;
            return t(n).each(function (t) {
                e >= n[t] && n[t + 1] && e < n[t + 1] ? i = t + 1 : e == n[n.length - 1] && (i = n.length - 1)
            }), i
        }, _initBar: function (e, n) {
            try {
                var i = this,
                    s = [7, 15, 30, 60],
                    a = 0,
                    o = 0,
                    d = 0,
                    c = 0,
                    r = 0;
                currentLevelWidth = 0, startWidthAry = [], green = t(i.container).find(".green"), orange = t(i.container).find(".orange"), totalDays = Number(e), e = totalDays - n, originalTotalDays = F.context("sign-in").originalNewDayNum, t(i.container).undelegate(".progress-bar", "mouseenter").undelegate(".progress-bar", "mouseleave"), originalTotalDays > 60 && n >= totalDays && (e = totalDays, n = 0), a = i._getWealthLevel(totalDays, s), t(".progress-bar").addClass("level-" + a), startWidthAry.push(parseInt(t(".wealth-line").css("left")));
                for (var l = 2; 5 > l; l++) startWidthAry.push(parseInt(t(".gold-" + l).css("margin-left")));
                currentLevelWidth = startWidthAry[a], t(startWidthAry).each(function (e, n) {
                    a >= e && (r += n)
                }), 0 == a ? (c = e / s[a], o = currentLevelWidth * c) : (c = (e - s[a - 1]) / (s[a] - s[a - 1]), o = r - currentLevelWidth + currentLevelWidth * c + t(".gold-" + a).width(), 60 == e && (o += 10)), 0 != n && (speedLevel = i._getWealthLevel(totalDays, s), speedRate = 0 == speedLevel ? totalDays / s[a] : (totalDays - s[speedLevel - 1]) / (s[speedLevel] - s[speedLevel - 1]), d = r - currentLevelWidth + currentLevelWidth * speedRate + t(".gold-" + speedLevel).width() - o), green.css("width", 0), orange.css("width", 0), green.animate({
                    width: o
                }, 1e3, function () {
                    0 != green.width() && (0 != n ? orange.animate({
                        width: d
                    }, 500, function () {
                        i._showBarTip(d, o), t(i.container).delegate(".progress-bar", "mouseenter", function () {
                            i._showBarTip(d, o)
                        }).delegate(".progress-bar", "mouseleave", function () {
                            t(i.container).find(".bar-tip").css("display", "none")
                        })
                    }) : (i._showBarTip(d, o), t(i.container).delegate(".progress-bar", "mouseenter", function () {
                        i._showBarTip(d, o)
                    }).delegate(".progress-bar", "mouseleave", function () {
                        t(i.container).find(".bar-tip").css("display", "none")
                    })))
                })
            } catch (g) {
                "undefined" != typeof alog && alog("exception.fire", "catch", {
                    msg: g.message,
                    path: "common:widget/js/logic/sign-in/sign-in.js",
                    method: "",
                    ln: 447
                })
            }
        }, _showBarTip: function (e, n) {
            var i = this,
                s = t(i.container).find(".bar-tip"),
                a = t(i.container).find(".empty-line");
            e = t(i.container).find(".orange").size() && t(i.container).find(".orange").width(), green = t(i.container).find(".green").size() && t(i.container).find(".green").width(), s.css({
                left: e + n - t(s).width() / 2 + 5,
                top: parseInt(a.css("margin-top")) + a.height() + 10 + 5,
                display: "block"
            }).text(F.context("sign-in").newDayNum + "\u5929")
        }, _updateSignIn: function (e) {
            var n = this,
                i = "",
                s = ["", '\u4eca\u5929\u5df2\u7ecf\u7b7e\u5230\u5566<br/>\u7b54\u9898\u66f4\u53ef\u4ee5\u52a0\u901f\u6210\u957f\u54e6<i class="speed-up-desc cur-pointer"></i>', "\u8fde\u7eed\u7b7e\u5230<br/>\u8d62\u53d6\u8d22\u5bcc\u503c\u597d\u793c"];
            setTimeout(function () {
                t.get("/ihome/api/signInfo?t=" + (new Date).getTime(), function (a) {
                    a.errno || (a = a.data, t.object.each(a, function (e, n) {
                        "num" != n && "newNum" != n && "allDate" != n && (F.context("sign-in")[n] = e)
                    }), F.context("sign-in").dayNum = a.num, F.context("sign-in").newDayNum = a.newNum % 60, F.context("sign-in").originalNewDayNum = a.newNum, -1 != (F.context("sign-in").newDayNum + "").indexOf(".") && (F.context("sign-in").newDayNum = Number(F.context("sign-in").newDayNum.toFixed(1))), n.signCardCanUsed = F.context("sign-in").signCardCanUsed, s[0] = ['\u60a8\u5df2\u8fde\u7eed<span id="no-signin-days" class="ml-5 mr-5">' + F.context("sign-in").noSignDays + "</span>\u5929\u672a\u7b7e\u5230\u4e86\uff0c", '\u8865\u7b7e\u53ef\u4ee5\u4f7f\u8fde\u7eed\u5929\u6570\u8fbe\u5230<span id="maybe-signin-num" class="ml-5 mr-5">' + F.context("sign-in").maybeSignNum + "</span>\u5929", "<br/>", '\u70b9\u51fb\u672a\u7b7e\u5230\u7684\u65e5\u671f\u8fdb\u884c\u8865\u7b7e\uff0c\u6216<a href="/shop/view?id=' + n.cardShopId + '" target="_blank" class="ml-5">\u5151\u6362\u8865\u7b7e\u5361></a>'].join(""), 1 == F.context("sign-in").isSignIn && (t("#sign-in-btn").addClass("done").prop({
                        href: "/ihome",
                        target: "_blank"
                    }), t(".go-sign-in").text("\u5df2\u7b7e\u5230"), t(".signInTipAnimation").removeClass("signInTipAnimation"), t(".speed-up-tip").size() || t("<div/>").prop({
                        "class": "speed-up-tip"
                    }).appendTo(t(".sign-in-desc")), n._lightToday()), F.context("sign-in").noSignDays >= 1 && F.context("sign-in").noSignDays <= 3 ? 1 == F.context("sign-in").isSignIn && "\u5df2\u7b7e\u5230" != t(".go-sign-in").text() ? (i = s[1], setTimeout(function () {
                        t(".sign-in-desc .info").html(s[0])
                    }, 2e3)) : i = s[0] : i = 1 == F.context("sign-in").isSignIn ? s[1] : s[2], t(".sign-in-desc .info").html(i), n._updateWealth(F.context("sign-in").wealth), t("#sign-in-days").text(F.context("sign-in").dayNum), t("#speed-days").text(F.context("sign-in").speedToday), (!e || e && !e.noLevelBar) && n._initBar(F.context("sign-in").newDayNum, F.context("sign-in").speedToday), t(".sign-in-day-num").text(F.context("sign-in").dayNum), n._showRemedyTip())
                })
            }, 200)
        }, _todayMonth: function () {
            var e = this,
                n = t(e.target).find(".ui-datepicker-today"),
                i = t(e.target).find(".ui-datepicker-prev"),
                s = t(e.target).find(".ui-datepicker-next");
            n.hasClass("ui-datepicker-other-month") && (i.hasClass("ui-state-disabled") ? s.click() : i.click())
        }, _updateWealth: function (e) {
            F.context("sign-in").wealth = e, t("#my-wealth").text(e), e > 0 && t("#wealth-submit").hasClass("disabled") && t("#wealth-submit").removeClass("disabled")
        }, _wealthSubmitAction: function () {
            var e = null;
            t("#wealth-submit").hasClass("disabled") || (window.authDialog = new o({
                title: "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",
                width: 500,
                height: 180,
                autoDispose: !1,
                className: "auth-dialog",
                content: ['<div id="authcode-dialog"></div>', '<div class="authcode-dialog-btn-box">', '<a href="#" id="auth-submit" class="btn-36-green">\u9886\u53d6\u8d22\u5bcc\u503c</a>', "</div>"].join(""),
                open: function () {
                    var n = t('<div id="show-authcode" class="line show-authcode"></div>');
                    t(".auth-dialog").find("#authcode-dialog").append(n), e = new l({
                        container: n,
                        url: "/api/vcode",
                        force: !0,
                        urlParams: {
                            forceHit: 1
                        }
                    }), t(".auth-dialog #auth-submit").click(function (n) {
                        try {
                            n.preventDefault();
                            var i = {
                                cm: 100508,
                                uflag: "sign_award"
                            };
                            e && e.submitParam(i), c.fire("login.check", {
                                isLogin: function () {
                                    new d({
                                        url: "/submit/user",
                                        params: i,
                                        beforeJump: function (e, n) {
                                            F.context("sign-in").isSignIn = 1, F.context("sign-in").dayNum = n.day, t("#my-wealth").text(0), t("#wealth-submit").addClass("disabled"), authDialog.close(), c.fire("short.dialog", {
                                                content: "\u9886\u53d6\u6210\u529f\uff01"
                                            })
                                        }, errorDeal: function (n, i) {
                                            switch (parseInt(i.errorNo)) {
                                            case 263:
                                                e.error();
                                                break;
                                            case 5:
                                                authDialog.close(), c.fire("short.dialog", {
                                                    content: i.errorMsg,
                                                    callback: function () {
                                                        window.location.reload(!0)
                                                    }
                                                });
                                                break;
                                            default:
                                                c.fire("short.dialog", {
                                                    content: i.errorMsg
                                                })
                                            }
                                        }
                                    })
                                }
                            })
                        } catch (n) {
                            "undefined" != typeof alog && alog("exception.fire", "catch", {
                                msg: n.message,
                                path: "common:widget/js/logic/sign-in/sign-in.js",
                                method: "",
                                ln: 684
                            })
                        }
                    })
                }
            }))
        }, _getRemedyInfo: function (e) {
            var n = this,
                i = F.context("sign-in").reSignItemId,
                s = 0;
            t.ajax({
                url: "/ihome/myitem/ucenter",
                dataType: "jsonp",
                success: function (a) {
                    t.each(a.property, function (e, n) {
                        n.item_id == i && (s = parseInt(n.number))
                    }), e && t.isFunction(e) && e({
                        itemId: i,
                        itemNum: s,
                        signCardCanUsed: n.signCardCanUsed
                    })
                }
            })
        }, _removeRemedyTip: function () {
            var e = this;
            e._remedyTip && e._remedyTip.instance.element.size() && "show" == e._remedyTip._status && e._remedyTip.hide()
        }, _canResignin: function (e) {
            var n = !0,
                e = t(e),
                i = e.hasClass("td-signin-lastMonth"),
                s = e.hasClass("td-signin-future");
            return n = i && s || !i && !s ? !0 : !1, (e.hasClass("ui-datepicker-other-month") || e.hasClass("td-signin-done")) && (n = !1), n
        }, _showRemedyTip: function () {
            var e = this,
                n = null,
                i = null;
            t(e.container).find("table .ui-state-disabled").unbind("click"), t(e.container).find("table .ui-state-disabled").click(function (s) {
                try {
                    if (i = t(s.target).closest(".td-signin-none"), !t(i).size()) return;
                    if (e._remedyTip && e._remedyTip.instance.element.size() && t(e._remedyTip.target).closest(i).size() && "show" == e._remedyTip._status) return;
                    if (e._removeRemedyTip(), !e._canResignin(i)) return;
                    t(i).closest(".ui-datepicker-today").size() ? 0 == F.context("sign-in").isSignIn && (t("#sign-in-btn").click(), t(i).unbind("click")) : e._getRemedyInfo(function (o) {
                        0 == F.context("sign-in").isSignIn ? n = ["<p>\u54ce\u5440\uff0c\u4eca\u5929\u8fd8\u6ca1\u6709\u7b7e\u5230 T_T</p>", "<p>\u8d76\u7d27\u70b9\u51fb\u7b7e\u5230\u5427\u3002</p>"].join("") : 0 == o.signCardCanUsed ? n = "\u8865\u7b7e\u7684\u673a\u4f1a\u5df2\u7ecf\u7528\u5b8c\u4e86T_T...<br />\u4ee5\u540e\u4e00\u5b9a\u8981\u597d\u597d\u73cd\u60dc\u554a\uff01" : o.signCardCanUsed > 0 && 0 == o.itemNum ? n = ["<p>\u60a8\u8fd8\u6ca1\u6709\u8865\u7b7e\u5361\uff0c\u53bb\u5546\u57ce\u5151\u6362\u8865\u7b7e\u5361\u5427\u3002</p>", "<p>", '<a href="/shop/view?id=' + e.cardShopId + '" target="_blank" class="mt-5 btn-22-green">\u5151\u6362\u8865\u7b7e\u5361</a>', "</p>"].join("") : o.signCardCanUsed > 0 && o.itemNum > 0 && o.itemId > 0 && (n = ["<p>\u8fd9\u4e2a\u6708\u8fd8\u6709<strong>" + o.signCardCanUsed + "\u6b21\u8865\u7b7e\u673a\u4f1a</strong>\uff0c\u662f\u5426\u4f7f\u7528\uff1f</p>", '<p style="color:#36A803;">\uff08\u8865\u7b7e\u5361\u53ea\u8865\u7f3a\u6d3b\u8dc3\u5929\uff0c\u4e0d\u8ba1\u5165\u9886\u5956\uff09</p>', "<p>", '<a class="btn-22-green remedy-ok mr-10 mt-10">\u4f7f\u7528</a>', '<a class="btn-22-white remedy-cancel mt-10">\u53d6\u6d88</a>', "</p>"].join("")), e._remedyTip = new a({
                            direction: "top",
                            tooltipClass: "remedyTip",
                            target: s.target,
                            content: n,
                            closebox: !0,
                            position: {
                                my: "left top",
                                at: "left-14 bottom"
                            }
                        }), e._remedyTip.show(), t(e._remedyTip.getTipContainer()).delegate(".remedy-ok", "click", function (n) {
                            try {
                                n.preventDefault();
                                var s = parseInt(i.find(".ui-state-default").html()),
                                    a = parseInt(e.month),
                                    r = e.year;
                                new d({
                                    params: {
                                        cm: 100900,
                                        itemid: o.itemId,
                                        number: 1,
                                        args: t.json.stringify({
                                            day: s
                                        })
                                    },
                                    beforeJump: function () {
                                        i.addClass("td-signin-done ui-datepicker-unselectable ui-state-disabled").removeClass("td-signin-none"), e._remedyTip.hide();
                                        var n = t.parseJSON(F.context("sign-in").signinDays);
                                        n.push([r, a, s].join("/")), F.context("sign-in").signinDays = t.json.stringify(n), e._updateSignIn({
                                            noLevelBar: 1
                                        })
                                    }, errorDeal: function (n, i, t) {
                                        e._remedyTip.hide();
                                        var s = "";
                                        switch (t) {
                                        case 17011:
                                            s = "\u9009\u62e9\u7684\u65e5\u671f\u5df2\u7ecf\u7b7e\u5230\u4e86\u3002";
                                            break;
                                        case 17012:
                                            s = "\u60a8\u672c\u6708\u8865\u7b7e\u7684\u673a\u4f1a\u5df2\u7ecf\u7528\u5b8c\u4e86\u3002";
                                            break;
                                        case 17010:
                                            s = "\u60a8\u6ca1\u6709\u8db3\u591f\u7684\u8865\u7b7e\u5361\u3002";
                                            break;
                                        default:
                                            s = "\u7f51\u7edc\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5\u3002"
                                        }
                                        c.fire("short.dialog", {
                                            content: s
                                        })
                                    }
                                })
                            } catch (n) {
                                "undefined" != typeof alog && alog("exception.fire", "catch", {
                                    msg: n.message,
                                    path: "common:widget/js/logic/sign-in/sign-in.js",
                                    method: "",
                                    ln: 884
                                })
                            }
                        }).delegate(".remedy-cancel", "click", function (n) {
                            try {
                                n.preventDefault(), e._remedyTip.hide()
                            } catch (n) {
                                "undefined" != typeof alog && alog("exception.fire", "catch", {
                                    msg: n.message,
                                    path: "common:widget/js/logic/sign-in/sign-in.js",
                                    method: "",
                                    ln: 887
                                })
                            }
                        }), t(s.target).unbind("mouseover")
                    })
                } catch (s) {
                    "undefined" != typeof alog && alog("exception.fire", "catch", {
                        msg: s.message,
                        path: "common:widget/js/logic/sign-in/sign-in.js",
                        method: "",
                        ln: 892
                    })
                }
            }).mouseenter(function (n) {
                i = t(n.target).closest(".td-signin-none"), e._canResignin(i) && i.addClass("hover")
            }).mouseleave(function (n) {
                i = t(n.target).closest(".td-signin-none"), e._canResignin(i) && i.removeClass("hover")
            })
        }, init: function (e) {
            try {
                var n = this;
                n.options = e, n._initDialog(), n._initEvent()
            } catch (i) {
                "undefined" != typeof alog && alog("exception.fire", "catch", {
                    msg: i.message,
                    path: "common:widget/js/logic/sign-in/sign-in.js",
                    method: "",
                    ln: 921
                })
            }
        }
    });
    i.exports = g
});;
define("common:widget/js/logic/mini-editor/mini-editor.js", function (t, e, n) {
    var i = t("common:widget/js/util/tangram/tangram.js"),
        o = t("common:widget/js/util/event/event.js"),
        a = t("common:widget/js/ui/base/base.js"),
        r = a(function () {
            var t = this;
            t.maxLength = 200, t.countByte = !1, t.className = "", t.name = "mini-editor", t.defaultContent = ""
        }).extend({
            init: function () {
                try {
                    var t = this;
                    t.target = i(t.target), t.container = i("<div/>").attr("id", t.guid + t.name).addClass(t.name).addClass(t.className).appendTo(t.target), i("<textarea/>").attr("id", t.guid + "textarea").appendTo(t.container).val(t.defaultContent), i("<p/>").attr("id", t.guid + "limit").addClass("mini-editor-limit").hide().appendTo(t.container).html(t.maxLength), t._getElement("textarea").on("change keyup", function () {
                        t.fire("change", this)
                    }).keydown(function (e) {
                        e.ctrlKey && 13 == e.keyCode && (t.fire("submit"), this.blur())
                    }).focus(function () {
                        t.getContent() == t.defaultContent && t.setContent(""), t.container.css({
                            borderColor: "#95c754"
                        }), t._getElement("textarea").css("color", "#333"), t.fire("focus")
                    }).blur(function () {
                        t.container.css("borderColor", "#c7c7c7"), "" == t.getContent() && t.setContent(t.defaultContent), t.fire("blur")
                    }), t.on("change", function (e, n) {
                        var a = t.getContent(),
                            r = t.countByte ? i.string(a).getByteLength() : a.length,
                            s = t.maxLength - r,
                            c = t._getElement("limit");
                        1 > s && (t.setContent(t.countByte ? i.string(a).subByte(t.maxLength) : a.substr(0, t.maxLength)), s = 0), 1 > s ? c.addClass("mini-editor-alert") : c.removeClass("mini-editor-alert"), c.html(s).hide();
                        var l = i(n).removeClass("longer").css("width", "").css("line-height");
                        n.scrollHeight > 1.5 * (parseFloat(l) || 24) ? (i(n).addClass("longer"), o.fire("expand"), c.show(), i.browser.isGecko && i(n).css({
                            width: t.width || 592,
                            "overflow-y": "scroll"
                        })) : (i.browser.isGecko && i(n).css("overflow-y", ""), o.fire("shrink"))
                    })
                } catch (e) {
                    "undefined" != typeof alog && alog("exception.fire", "catch", {
                        msg: e.message,
                        path: "common:widget/js/logic/mini-editor/mini-editor.js",
                        method: "",
                        ln: 95
                    })
                }
            }, _getElement: function (t) {
                return t ? this.container.find("#" + this.guid + t) : this.container
            }, getElement: function (t) {
                return this._getElement(t).get(0)
            }, getContent: function () {
                return i.string(this._getElement("textarea").val()).trim()
            }, setContent: function (t) {
                return this._getElement("textarea").val(t)
            }
        });
    n.exports = r
});;
define("common:widget/js/logic/file-type/file-type.js", function (e, i, p) {
    var f = e("common:widget/lib/jquery/jquery.js"),
        l = {
            "file-image": "jpg,jpeg,gif,bmp,png,jpe,cur,svg,svgz,tif,tiff,ico",
            "file-doc": "doc,docx,ods,ots,odt,rtf,dot,dotx,odm, vsd,vsdx",
            "file-pdf": "pdf",
            "file-excel": "xls,xlsx,xlt,xltx,csv",
            "file-txt": "txt,html,htm,xhtml,xml,js,css",
            "file-mp3": "wma,wav,mp3,aac,ra,ram,mp2,ogg,aif,mpega,amr,mid,midi",
            "file-video": "wmv,rmvb,mpeg4,mpeg2,flv,avi,3gp,mpga,qt,rm,wmz,wmd,wvx,wmx,wm,swf,mpg,mp4,mkv,mpeg,mov",
            "file-ppt": "ppt,pptx,pps,pot,ppsx,potx",
            "file-ipa": "ipa",
            "file-exe": "exe,msi",
            "file-zip": "zip,rar,7z,tar,gz",
            "file-apk": "apk",
            "file-bt": "torrent",
            "file-epub": "epub",
            "file-umd": "umd"
        },
        t = {
            0: ["file-doc", "file-pdf", "file-excel", "file-ppt", "file-txt", "file-epub", "file-umd"],
            1: ["file-exe", "file-apk", "file-ipa"],
            2: ["file-mp3"],
            3: ["file-video"],
            4: ["file-bt"],
            5: ["file-unknow"]
        };
    p.exports = function (e) {
        e = ("" + e).toLocaleLowerCase();
        var i = 5,
            p = "unknow";
        return f.each(l, function (l, m) {
            return f.array(f.makeArray(m.split(","))).contains(e) ? (p = l, f.each(t, function (e, p) {
                return f.array(p).contains(l) ? (i = e, !1) : void 0
            }), !1) : void 0
        }), {
            fileClass: p,
            fileType: i
        }
    }
});;
define("common:widget/js/logic/prof-anonymous/prof-anonymous.js", function (e, t, o) {
    var n = e("common:widget/js/util/tangram/tangram.js"),
        i = "IK_PROFANONYMOUS",
        s = "IK_PROFANONYMOUS_CLOSE",
        a = "IK_PROFANONYMOUS_EXPIRE",
        c = !0,
        p = null,
        r = null,
        u = null;
    o.exports = {
        getCookie: function () {
            return n.cookie.get(i)
        }, isAnonymous: function (e) {
            var t = (this.getCookie() || "").split(",");
            return n.array.contains(t, e + "")
        }, isExpire: function () {
            if (!this.getCookie()) return !0;
            if ("1" == F.context("user").isLogin) {
                var e = (new Date).getTime(),
                    t = n.cookie.get(a);
                if (t) {
                    if (e - n.date.parse(t) > 0) return !0
                } else t = (new Date).getTime() + 6048e5, t = n.date.format(new Date(t), "yyyy-MM-dd HH:mm:ss"), n.cookie.set(a, t, {
                    path: "/",
                    expires: 15552e6
                })
            }
            return !1
        }, isUserClose: function () {
            return +n.cookie.get(s) > 0 ? !0 : !1
        }, init: function () {
            try {
                !this.isExpire()
            } catch (e) {
                "undefined" != typeof alog && alog("exception.fire", "catch", {
                    msg: e.message,
                    path: "common:widget/js/logic/prof-anonymous/prof-anonymous.js",
                    method: "",
                    ln: 56
                })
            }
        }, close: function (e) {
            c = !1, r && clearTimeout(r), p.stop().animate({
                width: "35px"
            }, "fast", function () {
                p.find("span").addClass("tip-expand").removeClass("tip-close")
            }), 0 == e && n.cookie.set(s, 1, {
                path: "/",
                expires: 15552e6
            })
        }, expand: function (e) {
            c = !0, p.stop().animate({
                width: "245px"
            }, "fast", function () {
                p.find("span").addClass("tip-close").removeClass("tip-expand")
            }), 0 == e && n.cookie.set(s, 0, {
                path: "/",
                expires: 15552e6
            })
        }, initTip: function () {
            try {
                var e = ["\u3010\u7b49\u5f85\u56de\u7b54\u3011", "\u3010\u5df2\u56de\u7b54\u3011"],
                    t = this,
                    o = "/prof/api/questioninfo?t=" + (new Date).getTime();
                n.get(o, function (o) {
                    if (0 == o.errNo && o.data.length > 0) {
                        var i = "<div id='pgctip' class='pgctip'><div class='pgctip-main'><a class='grid'><b>\u5386\u53f2\u63d0\u95ee(#{count})</b><span class='tip-close'></span></a><ul>#{content}</ul></div></div>",
                            s = "<li><a href='/question/#{qid}' target='_blank'>#{index}\uff0e#{qStatus}#{qTitle}</a></li>",
                            a = [];
                        n.each(o.data, function (t, o) {
                            3 > t && a.push(n.string(s).format({
                                index: t + 1,
                                qid: o.qid,
                                qTitle: n.string(o.title).subByte(38, "..."),
                                qStatus: e[o.qstatus || 0]
                            }))
                        });
                        var l = n.string(i).format({
                            content: a.join(""),
                            count: o.data.length
                        });
                        p = n(l), p.appendTo("#body"), t.isUserClose() ? t.close() : t.expand(), r = setTimeout(function () {
                            t.close(!1)
                        }, 3e3), 6 == n.browser.ie && (u && clearTimeout(u), n("#pgctip").css("position", "absolute"), n(window).on("resize scroll", function () {
                            u = setTimeout(function () {
                                n("#pgctip").css("top", n(window).scrollTop() + 303)
                            }, 200)
                        })), n("#pgctip").on("click", function () {
                            try {
                                c ? t.close() : t.expand()
                            } catch (e) {
                                "undefined" != typeof alog && alog("exception.fire", "catch", {
                                    msg: e.message,
                                    path: "common:widget/js/logic/prof-anonymous/prof-anonymous.js",
                                    method: "",
                                    ln: 137
                                })
                            }
                        }).on("mouseover", function (e) {
                            e.preventDefault(), t.expand()
                        }).on("mouseout", function (e) {
                            e.preventDefault(), t.close()
                        })
                    }
                }, "json")
            } catch (i) {
                "undefined" != typeof alog && alog("exception.fire", "catch", {
                    msg: i.message,
                    path: "common:widget/js/logic/prof-anonymous/prof-anonymous.js",
                    method: "",
                    ln: 146
                })
            }
        }
    }
});