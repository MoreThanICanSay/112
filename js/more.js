define("common:widget/lib/juicer/juicer.js", function (e, t, n) {
    var i = function () {
            var e = [].slice.call(arguments);
            return e.push(i.options), e[0].match(/^\s*#([\w:\-\.]+)\s*$/gim) && e[0].replace(/^\s*#([\w:\-\.]+)\s*$/gim, function (t, n) {
                var i = document,
                    r = i && i.getElementById(n);
                e[0] = r ? r.value || r.innerHTML : t
            }), 1 == arguments.length ? i.compile.apply(i, e) : arguments.length >= 2 ? i.to_html.apply(i, e) : void 0
        },
        r = {
            escapehash: {
                "<": "&lt;",
                ">": "&gt;",
                "&": "&amp;",
                '"': "&quot;",
                "'": "&#x27;",
                "/": "&#x2f;"
            },
            escapereplace: function (e) {
                return r.escapehash[e]
            }, escaping: function (e) {
                return "string" != typeof e ? e : e.replace(/[&<>"]/gim, this.escapereplace)
            }, detection: function (e) {
                return "undefined" == typeof e ? "" : e
            }
        },
        o = function (e) {
            if ("undefined" != typeof console) {
                if (console.warn) return void console.warn(e);
                if (console.log) return void console.log(e)
            }
            throw e
        },
        s = function (e, t) {
            if (e = e !== Object(e) ? {} : e, e.__proto__) return e.__proto__ = t, e;
            var n = function () {},
                i = Object.create ? Object.create(t) : new(n.prototype = t, n);
            for (var r in e) e.hasOwnProperty(r) && (i[r] = e[r]);
            return i
        };
    i.__cache = {}, i.version = "0.6.5-stable", i.settings = {}, i.tags = {
        operationOpen: "{@",
        operationClose: "}",
        interpolateOpen: "\\${",
        interpolateClose: "}",
        noneencodeOpen: "\\$\\${",
        noneencodeClose: "}",
        commentOpen: "\\{#",
        commentClose: "\\}"
    }, i.options = {
        cache: !0,
        strip: !0,
        errorhandling: !0,
        detection: !0,
        _method: s({
            __escapehtml: r,
            __throw: o,
            __juicer: i
        }, {})
    }, i.tagInit = function () {
        var e = i.tags.operationOpen + "each\\s*([^}]*?)\\s*as\\s*(\\w*?)\\s*(,\\s*\\w*?)?" + i.tags.operationClose,
            t = i.tags.operationOpen + "\\/each" + i.tags.operationClose,
            n = i.tags.operationOpen + "if\\s*([^}]*?)" + i.tags.operationClose,
            r = i.tags.operationOpen + "\\/if" + i.tags.operationClose,
            o = i.tags.operationOpen + "else" + i.tags.operationClose,
            s = i.tags.operationOpen + "else if\\s*([^}]*?)" + i.tags.operationClose,
            a = i.tags.interpolateOpen + "([\\s\\S]+?)" + i.tags.interpolateClose,
            c = i.tags.noneencodeOpen + "([\\s\\S]+?)" + i.tags.noneencodeClose,
            p = i.tags.commentOpen + "[^}]*?" + i.tags.commentClose,
            l = i.tags.operationOpen + "each\\s*(\\w*?)\\s*in\\s*range\\(([^}]+?)\\s*,\\s*([^}]+?)\\)" + i.tags.operationClose,
            u = i.tags.operationOpen + "include\\s*([^}]*?)\\s*,\\s*([^}]*?)" + i.tags.operationClose;
        i.settings.forstart = new RegExp(e, "igm"), i.settings.forend = new RegExp(t, "igm"), i.settings.ifstart = new RegExp(n, "igm"), i.settings.ifend = new RegExp(r, "igm"), i.settings.elsestart = new RegExp(o, "igm"), i.settings.elseifstart = new RegExp(s, "igm"), i.settings.interpolate = new RegExp(a, "igm"), i.settings.noneencode = new RegExp(c, "igm"), i.settings.inlinecomment = new RegExp(p, "igm"), i.settings.rangestart = new RegExp(l, "igm"), i.settings.include = new RegExp(u, "igm")
    }, i.tagInit(), i.set = function (e, t) {
        var n = this,
            i = function (e) {
                return e.replace(/[\$\(\)\[\]\+\^\{\}\?\*\|\.]/gim, function (e) {
                    return "\\" + e
                })
            },
            r = function (e, t) {
                var r = e.match(/^tag::(.*)$/i);
                return r ? (n.tags[r[1]] = i(t), void n.tagInit()) : void(n.options[e] = t)
            };
        if (2 === arguments.length) return void r(e, t);
        if (e === Object(e))
            for (var o in e) e.hasOwnProperty(o) && r(o, e[o])
    }, i.register = function (e, t) {
        var n = this.options._method;
        return n.hasOwnProperty(e) ? !1 : n[e] = t
    }, i.unregister = function (e) {
        var t = this.options._method;
        return t.hasOwnProperty(e) ? delete t[e] : void 0
    }, i.template = function (e) {
        var t = this;
        this.options = e, this.__interpolate = function (e, t, n) {
            var i, r = e.split("|"),
                o = r[0] || "";
            return r.length > 1 && (e = r.shift(), i = r.shift().split(","), o = "_method." + i.shift() + ".call({}, " + [e].concat(i) + ")"), "<%= " + (t ? "_method.__escapehtml.escaping" : "") + "(" + (n && n.detection === !1 ? "" : "_method.__escapehtml.detection") + "(" + o + ")) %>"
        }, this.__removeShell = function (e, n) {
            var r = 0;
            return e = e.replace(i.settings.forstart, function (e, t, n, i) {
                var n = n || "value",
                    i = i && i.substr(1),
                    o = "i" + r++;
                return "<% ~function() {for(var " + o + " in " + t + ") {if(" + t + ".hasOwnProperty(" + o + ")) {var " + n + "=" + t + "[" + o + "];" + (i ? "var " + i + "=" + o + ";" : "") + " %>"
            }).replace(i.settings.forend, "<% }}}(); %>").replace(i.settings.ifstart, function (e, t) {
                return "<% if(" + t + ") { %>"
            }).replace(i.settings.ifend, "<% } %>").replace(i.settings.elsestart, function () {
                return "<% } else { %>"
            }).replace(i.settings.elseifstart, function (e, t) {
                return "<% } else if(" + t + ") { %>"
            }).replace(i.settings.noneencode, function (e, i) {
                return t.__interpolate(i, !1, n)
            }).replace(i.settings.interpolate, function (e, i) {
                return t.__interpolate(i, !0, n)
            }).replace(i.settings.inlinecomment, "").replace(i.settings.rangestart, function (e, t, n, i) {
                var o = "j" + r++;
                return "<% ~function() {for(var " + o + "=" + n + ";" + o + "<" + i + ";" + o + "++) {{var " + t + "=" + o + "; %>"
            }).replace(i.settings.include, function (e, t, n) {
                return "<%= _method.__juicer(" + t + ", " + n + "); %>"
            }), n && n.errorhandling === !1 || (e = "<% try { %>" + e, e += '<% } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} %>'), e
        }, this.__toNative = function (e, t) {
            return this.__convert(e, !t || t.strip)
        }, this.__lexicalAnalyze = function (e) {
            var t = [],
                n = [],
                r = "",
                o = ["if", "each", "_", "_method", "console", "break", "case", "catch", "continue", "debugger", "default", "delete", "do", "finally", "for", "function", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "null", "typeof", "class", "enum", "export", "extends", "import", "super", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "const", "arguments", "true", "false", "undefined", "NaN"],
                s = function (e, t) {
                    if (Array.prototype.indexOf && e.indexOf === Array.prototype.indexOf) return e.indexOf(t);
                    for (var n = 0; n < e.length; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                a = function (e, r) {
                    if (r = r.match(/\w+/gim)[0], -1 === s(t, r) && -1 === s(o, r) && -1 === s(n, r)) {
                        if ("undefined" != typeof window && "function" == typeof window[r] && window[r].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i)) return e;
                        if ("undefined" != typeof global && "function" == typeof global[r] && global[r].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i)) return e;
                        if ("function" == typeof i.options._method[r] || i.options._method.hasOwnProperty(r)) return n.push(r), e;
                        t.push(r)
                    }
                    return e
                };
            e.replace(i.settings.forstart, a).replace(i.settings.interpolate, a).replace(i.settings.ifstart, a).replace(i.settings.elseifstart, a).replace(i.settings.include, a).replace(/[\+\-\*\/%!\?\|\^&~<>=,\(\)\[\]]\s*([A-Za-z_]+)/gim, a);
            for (var c = 0; c < t.length; c++) r += "var " + t[c] + "=_." + t[c] + ";";
            for (var c = 0; c < n.length; c++) r += "var " + n[c] + "=_method." + n[c] + ";";
            return "<% " + r + " %>"
        }, this.__convert = function (e, t) {
            var n = [].join("");
            return n += "'use strict';", n += "var _=_||{};", n += "var _out='';_out+='", n += t !== !1 ? e.replace(/\\/g, "\\\\").replace(/[\r\t\n]/g, " ").replace(/'(?=[^%]*%>)/g, "	").split("'").join("\\'").split("	").join("'").replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='") + "';return _out;" : e.replace(/\\/g, "\\\\").replace(/[\r]/g, "\\r").replace(/[\t]/g, "\\t").replace(/[\n]/g, "\\n").replace(/'(?=[^%]*%>)/g, "	").split("'").join("\\'").split("	").join("'").replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='") + "';return _out.replace(/[\\r\\n]\\s+[\\r\\n]/g, '\\r\\n');"
        }, this.parse = function (e, n) {
            var i = this;
            return n && n.loose === !1 || (e = this.__lexicalAnalyze(e) + e), e = this.__removeShell(e, n), e = this.__toNative(e, n), this._render = new Function("_, _method", e), this.render = function (e, n) {
                return n && n === t.options._method || (n = s(n, t.options._method)), i._render.call(this, e, n)
            }, this
        }
    }, i.compile = function (e, t) {
        t && t === this.options || (t = s(t, this.options));
        try {
            var n = this.__cache[e] ? this.__cache[e] : new this.template(this.options).parse(e, t);
            return t && t.cache === !1 || (this.__cache[e] = n), n
        } catch (i) {
            return o("Juicer Compile Exception: " + i.message), {
                render: function () {}
            }
        }
    }, i.to_html = function (e, t, n) {
        return n && n === this.options || (n = s(n, this.options)), this.compile(e, n).render(t, n._method)
    }, "undefined" != typeof n && n.exports ? n.exports = i : this.juicer = i
});;
define("common:widget/js/ui/pager/pager.js", function (e, t, a) {
    var r = e("common:widget/js/util/tangram/tangram.js"),
        i = e("common:widget/js/ui/base/base.js");
    a.exports = new i(function () {
        var e = this;
        e.currentPage = 1, e.totalPage = 1, e.viewSize = 10, e.currentPagePos = 4, e.labelFirst = "\u9996\u9875", e.labelPrev = "\u4e0a\u4e00\u9875", e.labelNext = "\u4e0b\u4e00\u9875", e.labelLast = "\u5c3e\u9875", e.ellipsis = !1, e.tplURL = "##{pageNum}", e.tplLabelNormal = "#{pageNum}", e.tplLabelCurrent = "#{pageNum}", e.tplEllipsis = '<span class="pager-more">...</span>', e.currentPage = Math.max(e.currentPage, 1)
    }).extend({
        _init: function (e) {
            try {
                var t = this;
                r.each(e, function (e, a) {
                    r.isFunction(a) ? t.on(e, a) : t[e] = a
                })
            } catch (a) {
                "undefined" != typeof alog && alog("exception.fire", "catch", {
                    msg: a.message,
                    path: "common:widget/js/ui/pager/pager.js",
                    method: "",
                    ln: 30
                })
            }
        }, _toHTMLString: function () {
            function e(e, a, i) {
                return i ? r.string.format('<a href="' + t.tplURL + '" data-index="#{pageNum}" class="pager-' + a + '">' + i + "</a>", {
                    pageNum: e
                }) : ""
            }
            if (this.totalPage < 2) return "";
            var t = this,
                a = ['<div class="pager' + (t.ellipsis ? " pager-ellipsis" : "") + '">'],
                i = t.totalPage < t.viewSize || t.currentPage <= t.currentPagePos ? 1 : Math.min(t.currentPage - t.currentPagePos, t.totalPage - t.viewSize + 1);
            t.ellipsis && 1 == i && t.currentPage > 1 && (i = 2);
            var n = Math.min(t.totalPage, i + t.viewSize - 1),
                s = t.currentPage > 1 ? "" : " disabled";
            t.ellipsis && n == t.totalPage && t.currentPage < t.totalPage && (n = t.totalPage - 1, i = Math.max(1, n - t.viewSize + 1));
            var l = [e(1, "first" + (t.ellipsis && 1 == i && t.currentPage > 1 ? " disabled" : s), t.labelFirst), e(t.currentPage - 1, "pre" + s, t.labelPrev)];
            t.ellipsis && (l = [l[1], l[0]], i > 2 && l.push(t.tplEllipsis)), a = a.concat(l);
            for (var g = i; n >= g; g++) a.push(g == t.currentPage ? '<b class="pager-current">' + r.string.format(t.tplLabelCurrent, {
                pageNum: g
            }) + "</b>" : e(g, "normal", t.tplLabelNormal));
            return s = t.currentPage < t.totalPage ? "" : " disabled", l = [e(parseInt(t.currentPage) + 1, "next" + s, t.labelNext), e(t.totalPage, "last" + s, t.labelLast)], t.ellipsis && (l = [l[1], l[0]], n < t.totalPage - 1 && l.unshift(t.tplEllipsis)), a = a.concat(l), a.push("</div>"), a.join("")
        }, init: function () {
            try {
                this.render().fire("load");
                var e = this,
                    t = r(e.target);
                t.size() && "render" != e.status && (e.status = "render", t.delegate("a[data-index]", "click", function (t) {
                    try {
                        e.currentPage = r(this).data("index"), e.fire("pagechange", {
                            event: t,
                            target: this
                        })
                    } catch (t) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: t.message,
                            path: "common:widget/js/ui/pager/pager.js",
                            method: "",
                            ln: 94
                        })
                    }
                }))
            } catch (a) {
                "undefined" != typeof alog && alog("exception.fire", "catch", {
                    msg: a.message,
                    path: "common:widget/js/ui/pager/pager.js",
                    method: "",
                    ln: 96
                })
            }
        }, render: function (e) {
            e && this._init(e); {
                var t = this;
                r(t.target).html(t._toHTMLString())
            }
            return t
        }
    })
});;
define("common:widget/js/ui/combobox/combobox.js", function (t, e, i) {
    var o = t("common:widget/lib/jquery/jquery.js"),
        n = t("common:widget/js/ui/base/base.js");
    t("common:widget/lib/jquery.ui/jquery.ui.autocomplete.js");
    var a = n().extend({
        init: function (t) {
            try {
                this.target = o(t.target), this.width = parseInt(t.width) || 120, this.wrapper = o("<span/>").addClass("ik-combobox").insertAfter(this.target), t.skin && this.wrapper.addClass(t.skin), this.target.hide(), this.render()
            } catch (e) {
                "undefined" != typeof alog && alog("exception.fire", "catch", {
                    msg: e.message,
                    path: "common:widget/js/ui/combobox/combobox.js",
                    method: "",
                    ln: 25
                })
            }
        }, render: function () {
            {
                var t = this,
                    e = this.target.children(":selected");
                e.val() ? e.text() : ""
            }
            this.input = o("<input/>").css("width", "1px").appendTo(this.wrapper).val(e.text()).attr("title", "").prop("readonly", !0).addClass("ik-combobox-input").autocomplete({
                delay: 0,
                minLength: 0,
                source: o.proxy(this, "_source")
            }).on("autocompleteopen", function (e, i) {
                t.fire("open", {
                    event: e,
                    ui: i
                })
            }).on("autocompleteclose", function (e, i) {
                t.fire("close", {
                    event: e,
                    ui: i
                })
            }).on("autocompleteselect", function (e, i) {
                i.item.option.selected = !0, t.target.trigger("change"), t.fire("select", e, {
                    item: i.item.option
                })
            }).on("click", function () {
                try {
                    o(this).next().trigger("click")
                } catch (t) {
                    "undefined" != typeof alog && alog("exception.fire", "catch", {
                        msg: t.message,
                        path: "common:widget/js/ui/combobox/combobox.js",
                        method: "",
                        ln: 59
                    })
                }
            });
            var i = !1;
            this.toggle = o("<a/>").attr("tabIndex", -1).addClass("ik-combobox-toggle").appendTo(this.wrapper).mousedown(function () {
                i = t.input.autocomplete("widget").is(":visible")
            }).click(function () {
                try {
                    t.input.focus(), i || t.input.autocomplete("search", "")
                } catch (e) {
                    "undefined" != typeof alog && alog("exception.fire", "catch", {
                        msg: e.message,
                        path: "common:widget/js/ui/combobox/combobox.js",
                        method: "",
                        ln: 75
                    })
                }
            }), this.instance = this.input.data("ui-autocomplete"), this.input.width(this.width - this.wrapper.outerWidth());
            var n = this.instance.menu.element.addClass("ik-combobox-menu");
            n.css("min-width", this.wrapper.outerWidth() - 1 - parseInt(n.css("padding-left")) - parseInt(n.css("padding-right")) - parseInt(n.css("border-left-width")) - parseInt(n.css("border-right-width")) + "px"), t.target.on("change", function () {
                t.input.val(t.getText())
            })
        }, getText: function () {
            return this.target.children(":selected").text()
        }, getValue: function () {
            return this.target.children(":selected").val()
        }, setByValue: function (t) {
            var e = this,
                i = e.target.find('[value="' + t + '"]').text();
            e.input.data("ui-autocomplete")._value(i), e.input.data("ui-autocomplete")._change()
        }, _source: function (t, e) {
            e(this.target.children("option").map(function () {
                var t = o(this).text();
                return {
                    label: t,
                    value: t,
                    option: this
                }
            }))
        }
    });
    i.exports = a
});;
define("common:widget/js/ui/address/address.js", function (e, t, i) {
    var n = e("common:widget/js/util/tangram/tangram.js"),
        a = e("common:widget/js/ui/base/base.js");
    i.exports = a(function (e) {
        var t = this;
        if (n.extend(t, {
            optionTpl: '<option value="#{name}">#{name}</option>',
            optionDefaultTpl: '<option value="">#{name}</option>',
            value: {},
            defaultValue: {},
            defaultWord: "",
            filterMap: {},
            dataCache: null
        }, e), t.filterValue)
            for (var i = 0, a = t.filterValue.length; a > i; i++) t.filterMap[t.filterValue[i]] = !0
    }).extend({
        init: function (e) {
            try {
                var t = this;
                "object" == typeof e && t._init(e), window.arrCity ? (t.dataCache = window.arrCity, t.render()) : n.sio("http://passport.baidu.com/js/sitedata_bas.js?v=1.1").callByBrowser(function () {
                    window.arrCity && (t.dataCache = window.arrCity, t.render())
                }, {
                    charset: "gbk"
                })
            } catch (i) {
                "undefined" != typeof alog && alog("exception.fire", "catch", {
                    msg: i.message,
                    path: "common:widget/js/ui/address/address.js",
                    method: "",
                    ln: 74
                })
            }
        }, buildOptions: function (e, t) {
            var i = this;
            e && t && t.length && (e.empty(), n.each(t, function (t, a) {
                if (!i.filterMap[a.name])
                    if (a.name == i.defaultWord) {
                        var o = "";
                        o = n.isFunction(i.optionDefaultTpl) ? i.optionDefaultTpl(a) : n.string(i.optionDefaultTpl).format(a), n(o).appendTo(e)
                    } else n(n.string(i.optionTpl).format(a)).appendTo(e)
            }), e.show())
        }, render: function () {
            var e, t = this,
                i = n(t.container[0]),
                a = n(t.container[1]).hide(),
                o = n(t.container[2]).hide();
            i.change(function () {
                -1 == this.selectedIndex && (this.selectedIndex = 0), e = t.dataCache[this.selectedIndex].sub, a.add(o).hide(), t.buildOptions(a, e), a.trigger("change")
            }), a.change(function () {
                -1 == this.selectedIndex && (this.selectedIndex = 0);
                var i = e[this.selectedIndex].sub;
                t.buildOptions(o.hide(), i), o.trigger("change")
            }), t.buildOptions(i, t.dataCache), i.add(a).add(o).change(function () {
                t.value[this.id] = n(this).val(), this.id == t.container[0] ? (t.value[t.container[1]] = "", t.value[t.container[2]] = "") : this.id == t.container[1] && (t.value[t.container[2]] = ""), t.fire("change")
            }).each(function (e, i) {
                t.defaultValue[e] && n(i).val(t.defaultValue[e]).change()
            }), t.fire("change")
        }
    }), n.fn.address = function (e) {
        return this.size() == this.filter("select").size() == 3 ? (e.container = this, (new t).init(e), this) : this.each(function () {
            var i = this,
                a = i.id || "ik_address" + ++n.guid,
                o = ["_province", "_city", "_county"];
            e.container = [], n.each(o, function (t, o) {
                e.container.push(n("<select>", {
                    id: a + o
                }).appendTo(i))
            }), (new t).init(e)
        })
    }
});;
define("common:widget/js/logic/phone-bind/phone-bind.js", function (t, e, n) {
    var i = t("common:widget/js/util/tangram/tangram.js"),
        s = (t("common:widget/js/ui/dialog/dialog.js"), t("common:widget/js/util/event/event.js"), t("common:widget/js/ui/base/base.js")),
        o = t("common:widget/js/logic/submit/submit.js"),
        a = s(function (t) {
            if (t && t.container) {
                var e = this;
                e.error = {
                    oldPhoneErr: "\u539f\u624b\u673a\u8f93\u5165\u9519\u8bef",
                    phoneEmpty: "\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801",
                    phoneErr: "\u8c8c\u4f3c\u624b\u673a\u53f7\u7801\u8f93\u9519\u4e86\uff0c\u786e\u8ba4\u4e00\u4e0b\u5427",
                    authEmpty: "\u5c1a\u672a\u8f93\u5165\u9a8c\u8bc1\u7801",
                    authOver: "\u83b7\u53d6\u9a8c\u8bc1\u7801\u6b21\u6570\u8fc7\u591a\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
                    authErr: "\u9a8c\u8bc1\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",
                    authInvalid: "\u9a8c\u8bc1\u7801\u5931\u6548\uff0c\u8bf7\u91cd\u65b0\u83b7\u53d6",
                    authFail: "\u53d1\u9001\u5931\u8d25\uff0c\u8bf7\u70b9\u51fb\u518d\u6b21\u53d1\u9001",
                    authOnce: "\u8be5\u624b\u673a\u53f7\u5df2\u7ed1\u5b9a\u8fc7\u5176\u4ed6\u8d26\u53f7",
                    authEqual: "\u8bf7\u4fee\u6539\u4e3a\u4e0d\u540c\u624b\u673a\u53f7",
                    netErr: "\u7f51\u7edc\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u7ed1\u5b9a",
                    verifyErr: "\u9a8c\u8bc1\u9519\u8bef\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
                    verifyMore: "\u9a8c\u8bc1\u9519\u8bef\uff0c\u6bcf\u5929\u6700\u591a\u9a8c\u8bc1\u4e00\u6b21"
                };
                var n = i.extend({
                        type: "verify"
                    }, t),
                    s = function () {
                        this.container = n.container, this.phone_tip = "", this.auth_input = "", this.auth_send = "", this.auth_resend = "", this.auth_tip = "", this.submit_btn = "", this.succss_btn = "", this.successObj = n.successObj, this.panelObj = i(['<div class="phone-bind-panel">', '<div class="bind-info"><label>\u624b\u673a\u53f7</label>', '<label class="phone-verify">' + n.phoneToShow + "</label>", '<span id="phone-bind-input-success" style="display:none;"></span><span class="span-error"></span></div>', '<div class="bind-info"><label>\u9a8c\u8bc1\u7801\uff1a</label>', '<input id="phone-bind-auth" type="text" />', '<a id="phone-bind-auth-send" class="btn-24-white1">\u70b9\u51fb\u83b7\u53d6</a>', '<span id="phone-bind-auth-resend" style="display:none;"><em>60</em>\u79d2\u540e\u53ef\u91cd\u65b0\u83b7\u53d6</span>', '<span></span></div><span class="bind-tip ml-48">\u6ce8\uff1a\u540c\u4e00\u624b\u673a\u53f724\u5c0f\u65f6\u5185\u6700\u591a\u53ef\u83b7\u53d65\u6b21\u9a8c\u8bc1\u7801</span>', '<div class="ml-48 mt-10"><a id="phone-bind-submit" class="btn-24-green">\u786e\u8ba4\u9a8c\u8bc1</a>', "</div>", "</div>"].join("")).get(0), this.oldPhoneError = "", this.phoneError = "", this.authError = "", this._init(), this._bindEvent()
                    };
                s.prototype = {
                    _init: function () {
                        try {
                            i("#" + this.container).append(this.panelObj), this.auth_input = i("#phone-bind-auth", this.panelObj), this.auth_send = i("#phone-bind-auth-send", this.panelObj), this.auth_resend = i("#phone-bind-auth-resend", this.panelObj), this.auth_tip = this.auth_resend.next(), this.submit_btn = i("#phone-bind-submit", this.panelObj)
                        } catch (t) {
                            "undefined" != typeof alog && alog("exception.fire", "catch", {
                                msg: t.message,
                                path: "common:widget/js/logic/phone-bind/phone-bind.js",
                                method: "",
                                ln: 104
                            })
                        }
                    }, _bindEvent: function () {
                        var t = this;
                        t.auth_input.on("focus", function () {
                            t.auth_tip.html(""), i(this).removeClass("input-error")
                        }), t.auth_send.on("click", function (e) {
                            try {
                                e.preventDefault(), t._sendAuth()
                            } catch (e) {
                                "undefined" != typeof alog && alog("exception.fire", "catch", {
                                    msg: e.message,
                                    path: "common:widget/js/logic/phone-bind/phone-bind.js",
                                    method: "",
                                    ln: 119
                                })
                            }
                        }), t.submit_btn.on("click", function (e) {
                            try {
                                e.preventDefault(), t._bindPhone()
                            } catch (e) {
                                "undefined" != typeof alog && alog("exception.fire", "catch", {
                                    msg: e.message,
                                    path: "common:widget/js/logic/phone-bind/phone-bind.js",
                                    method: "",
                                    ln: 125
                                })
                            }
                        })
                    }, _checkAuth: function () {
                        "" == i.trim(this.auth_input.val()) ? (this.authError = "authEmpty", this.auth_tip.html(e.error[this.authError]).addClass("span-error"), this.auth_input.addClass("input-error")) : this.authError = ""
                    }, _sendAuth: function () {
                        var t = this;
                        if (!t.phoneError || n.phoneToSubmit) {
                            var s = {
                                authOver: function () {
                                    t.auth_tip.html(e.error.authOver).addClass("span-error")
                                }, authSucc: function () {
                                    t.auth_send.hide(), t.auth_resend.show();
                                    var e = i(t.auth_resend).children("em"),
                                        n = setInterval(function () {
                                            e.html() > 1 ? e.html(e.html() - 1) : 1 == e.html() && (t.auth_resend.hide(), t.auth_send.show(), e.html(60), t.auth_tip.html(""), clearInterval(n))
                                        }, 1e3);
                                    t.auth_tip.removeClass("span-error").html("\u9a8c\u8bc1\u7801\u5df2\u53d1\u9001\uff0c\u8bf7\u67e5\u6536\u77ed\u4fe1")
                                }, authErr: function () {
                                    t.auth_tip.html(e.error.authFail).addClass("span-error")
                                }
                            };
                            e.phoneAuth(n.phoneToSubmit, "verify" == n.type ? 1 : 0, function (t) {
                                var e = i.json.parse(t);
                                if (e) switch (e.errno) {
                                case 0:
                                    s.authSucc();
                                    break;
                                case 3:
                                    s.authOver();
                                    break;
                                case 5:
                                    s.authOnce();
                                    break;
                                default:
                                    s.authErr()
                                } else s.authErr()
                            }, function () {
                                s.authErr()
                            })
                        }
                    }, _bindPhone: function () {
                        function t(t) {
                            e.phoneVerify(t, s.auth_input.val(), function () {
                                i("#" + s.container).empty().append(s.successObj)
                            }, function (t, n) {
                                if (t) {
                                    var i = parseInt(n);
                                    17001 == i ? s.phone_tip.html(e.error.authOnce).addClass("span-error") : 10064 == i ? s.auth_tip.html(e.error.verifyMore).addClass("span-error") : 17002 == i ? (s.auth_input.addClass("input-error"), s.auth_tip.html(e.error.authInvalid).addClass("span-error")) : s.auth_tip.html(e.error.verifyErr).addClass("span-error")
                                } else s.auth_tip.html(e.error.netErr).addClass("span-error")
                            })
                        }
                        var s = this;
                        s._checkAuth(), s.oldPhoneError || s.phoneError && !n.phoneToSubmit || s.authError || "verify" == n.type && n.phoneToSubmit && t(n.phoneToSubmit)
                    }
                }; {
                    new s(t.container)
                }
            }
        }).extend({
            phoneAuth: function (t, e, n, s) {
                i.ajax({
                    url: "/api/sendphonevcode",
                    type: "GET",
                    data: {
                        phone: t,
                        fr: "normal",
                        mtype: e,
                        t: (new Date).getTime()
                    },
                    success: function (t) {
                        n(t)
                    }, error: function () {
                        s()
                    }
                })
            }, phoneVerify: function (t, e, n, i) {
                new o({
                    url: "/submit/user",
                    params: {
                        cm: 100501,
                        phone: t,
                        vcode: e,
                        flag: "uhome",
                        reason: 16
                    },
                    beforeJump: function (t) {
                        n(t)
                    }, errorDeal: function (t, e, n) {
                        i(e, n)
                    }
                })
            }, bindPassMobile: function (t) {
                var e = "http://passport.baidu.com/passApi/js/uni_armorwidget_wrapper.js";
                i.sio.callByBrowser(e + "?_=" + (new Date).getTime(), function () {
                    var e = passport.pop.ArmorWidget(t.action, {
                        token: t.token,
                        title: t.title,
                        msg: t.msg,
                        auth_title: t.auth_title,
                        auth_msg: t.auth_msg,
                        color: t.color,
                        submitText: t.submitText,
                        footerText: t.footerText,
                        onRender: function () {
                            t.onRender = t.onRender || function () {}, t.onRender(this)
                        }, onBeforeSuccess: function () {
                            t.onBeforeSuccess = t.onBeforeSuccess || function () {}, t.onBeforeSuccess(this)
                        }, onSubmitSuccess: function () {
                            t.onSubmitSuccess = t.onSubmitSuccess || function () {}, t.onSubmitSuccess(this)
                        }
                    });
                    e.show()
                })
            }
        });
    n.exports = a
});;
define("common:widget/js/ui/countword/countword.js", function (r, t, a) {
    var s = r("common:widget/js/util/tangram/tangram.js"),
        n = r("common:widget/js/ui/base/base.js"),
        o = n(function (r) {
            var t = {
                min: 0,
                max: 50
            };
            s.object.extend(t, r);
            var a = this;
            if (this.id = t.id || this.guid, this.target = t.target || s(s.isString(t.id) ? "#" + t.id : t.id), this.error = this.target.next("span.count"), t.show && (a.show = t.show), 0 == s(this.error).size()) {
                var n = null;
                n = "pgc" == t.mold ? s.string("<span class='count'>\u60a8\u8fd8\u53ef\u4ee5\u8f93\u5165<b>#{max}</b>\u5b57</span>").format({
                    max: t.max
                }) : s.string("<span class='count'><b>0</b>/#{max}</span>").format({
                    max: t.max
                }), this.target.after(n), this.error = this.target.next("span.count")
            }
            this._change = function () {
                var r = s.string(a.target.val()).trim(),
                    n = Math.ceil(s.string(r).getByteLength() / 2);
                n >= t.max ? (a.target.val(s.string(r).subByte(2 * t.max)), a.error.show(), a.show({
                    isError: !0,
                    num: t.max,
                    max: t.max
                })) : "pgc" == t.mold ? t.max - n <= 300 ? (a.error.show(), a.show({
                    isError: !1,
                    num: n,
                    max: t.max
                })) : (a.error.hide(), a.show({
                    isError: !1,
                    num: n,
                    max: t.max
                })) : a.show({
                    isError: !1,
                    num: n,
                    max: t.max
                })
            }, this.target.on("keydown", a._change).on("keyup", a._change).on("focus", a._change).on("change", a._change)
        }).extend({
            show: function (r) {
                var t = this,
                    a = t.error.find("b");
                r.isError ? a.addClass("error") : a.removeClass("error"), a.html(r.num)
            }
        });
    a.exports = o
});;
define("common:widget/js/logic/set-carefield/set-carefield.js", function (require, exports, module) {
    var $ = require("common:widget/js/util/tangram/tangram.js"),
        dialog = require("common:widget/js/ui/dialog/dialog.js"),
        ec = require("common:widget/js/util/event/event.js"),
        login = require("common:widget/js/logic/login/login.js"),
        uiBase = require("common:widget/js/ui/base/base.js"),
        category = require("common:widget/js/logic/category/category.js"),
        setCareField = uiBase(function (opts) {
            function _resize() {
                _dialog.setSize({
                    width: 520,
                    height: $("#setCareField-wrap").height() + 60
                })
            }

            function _initHtml(e, i) {
                function t() {
                    var e = "";
                    me._cids = [];
                    for (var t = 0; t < i.length; t++) me._cids.push(i[t]), e += me._careSpan.format({
                        cid: i[t][0],
                        text: i[t][1].split(",").reverse().join('<span class="split">></span>')
                    });
                    $("#careList").html(e)
                }

                function d() {
                    var i = "";
                    me._keywords = [];
                    for (var t = 0; t < e.length; t++) e[t] = e[t].replace(/&lt;/g, "<").replace(/&gt;/g, ">"), me._keywords.push(e[t]), i += me._wordSpan.format({
                        word: $.string.encodeHTML(e[t])
                    });
                    $("#wordList").html(i + '<div style="clear:both"></div>')
                }
                d(), t(), _checkKeyword(), _checkCid(), _resize(), _dialog.center(), $("#addCareBtnAdd").css("top", options.selectSize / 2 * 17 - 4 + "px"), $("#addCareBtnDel").css("top", options.selectSize / 2 * 17 - 4 + "px")
            }

            function _Submit(keywords, cids, success, error) {
                error || (error = function () {}), success || (success = function () {});
                for (var temp = [], i = 0; i < cids.length; i++) temp.push(cids[i][0]);
                for (var idStr = temp.join("_"), kwStr = "", i = 0; i < keywords.length; i++) {
                    var decode = T.string.decodeHTML(keywords[i]);
                    kwStr += "&kw" + i + "=" + encodeURIComponent(decode)
                }
                0 != keywords.length && (kwStr += "&kwn=" + keywords.length);
                var url = "cm=100522&word=" + idStr + kwStr + "&stoken=" + F.context("user").stoken;
                T.ajax({
                    url: "/submit/user",
                    data: url,
                    type: "POST",
                    dataType: "text",
                    success: function (data) {
                        if (data) {
                            var backData = eval("(" + data + ")");
                            if ("0" == backData.errorNo) {
                                me._keywords = [];
                                for (var i = 0; i < keywords.length; i++) me._keywords.push(keywords[i]);
                                me._cids = [];
                                for (var i = 0; i < cids.length; i++) me._cids.push(cids[i]);
                                _checkKeyword(), _checkCid(), me.tag = !0, success()
                            } else error()
                        } else error();
                        _resize()
                    }, error: error
                })
            }

            function dialogBind() {
                $(window).on("resize", function () {
                    _dialog.center()
                }), $("#setCareField-wrap").click(function (e) {
                    try {
                        e.preventDefault()
                    } catch (i) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: i.message,
                            path: "common:widget/js/logic/set-carefield/set-carefield.js",
                            method: "",
                            ln: 205
                        })
                    }
                }), $("#setCareField-wrap").mouseover(function (e) {
                    var i = $(e.target);
                    i.is("i") && i.addClass("ihover")
                }), $("#setCareField-wrap").mouseout(function (e) {
                    var i = $(e.target);
                    i.is("i") && i.removeClass("ihover")
                }), $("#care-wrap-addBtn").mouseenter(function () {
                    $(this).addClass("hover")
                }), $("#care-wrap-addBtn").mouseleave(function () {
                    $(this).removeClass("hover")
                }), $("#keyWord-header").click(function (e) {
                    try {
                        $(this).attr("ishide") ? $(this).attr("ishide", "").removeClass("headerClose").next().show() : $(this).attr("ishide", "true").addClass("headerClose").next().hide(), _resize()
                    } catch (e) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: e.message,
                            path: "common:widget/js/logic/set-carefield/set-carefield.js",
                            method: "",
                            ln: 230
                        })
                    }
                }), $("#category-header").click(function (e) {
                    try {
                        $(this).attr("ishide") ? $(this).attr("ishide", "").removeClass("headerClose").next().show() : $(this).attr("ishide", "true").addClass("headerClose").next().hide(), _resize()
                    } catch (e) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: e.message,
                            path: "common:widget/js/logic/set-carefield/set-carefield.js",
                            method: "",
                            ln: 239
                        })
                    }
                }), $("#wordList").on("click", function (e) {
                    try {
                        var i = $(e.target);
                        i.is("i") && i.parent().hasClass("wordSpan") && _delKeyword(i.parent())
                    } catch (t) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: t.message,
                            path: "common:widget/js/logic/set-carefield/set-carefield.js",
                            method: "",
                            ln: 246
                        })
                    }
                }), $("#careList").on("click", function (e) {
                    try {
                        var i = $(e.target);
                        i.is("i") && i.parent().hasClass("careSpan") && _delCid(i.parent())
                    } catch (t) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: t.message,
                            path: "common:widget/js/logic/set-carefield/set-carefield.js",
                            method: "",
                            ln: 252
                        })
                    }
                }), $("#addWordBtn").on("click", function () {
                    try {
                        _addKeyword($("#wordInput").val())
                    } catch (e) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: e.message,
                            path: "common:widget/js/logic/set-carefield/set-carefield.js",
                            method: "",
                            ln: 255
                        })
                    }
                }), $("#wordInput").on("focus", function () {
                    "\u8f93\u5165\u60a8\u64c5\u957f\u7684\u5173\u952e\u8bcd" == $("#wordInput").val() && $("#wordInput").val("").css("color", "#333333")
                }), $("#wordInput").on("blur", function () {
                    "" == $("#wordInput").val() && $("#wordInput").val("\u8f93\u5165\u60a8\u64c5\u957f\u7684\u5173\u952e\u8bcd").css("color", "#b3b3b3")
                }), $("#addCareBtn").on("click", function () {
                    try {
                        $("#care-wrap-addBtn").show(), $(this).hide(), _resize()
                    } catch (e) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: e.message,
                            path: "common:widget/js/logic/set-carefield/set-carefield.js",
                            method: "",
                            ln: 278
                        })
                    }
                }), $("#addCareBtnAdd").on("click", function () {
                    try {
                        var e = [],
                            i = _dialog.cat.getValue();
                        i && (e.push(i.cid), e.push(i.arrName.reverse().join(","))), i.cid ? _addCid(e) : ($("#care-wrap-addBtn").hide(), $("#addCareBtn").show(), _resize())
                    } catch (t) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: t.message,
                            path: "common:widget/js/logic/set-carefield/set-carefield.js",
                            method: "",
                            ln: 294
                        })
                    }
                }), $("#addCareBtnDel").on("click", function () {
                    try {
                        $("#care-wrap-addBtn").hide(), $("#addCareBtn").show(), _resize()
                    } catch (e) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: e.message,
                            path: "common:widget/js/logic/set-carefield/set-carefield.js",
                            method: "",
                            ln: 300
                        })
                    }
                })
            }

            function _delKeyword(e) {
                for (tempKeywords = [], i = 0; i < me._keywords.length; i++) e.attr("word") != me._keywords[i] && tempKeywords.push(me._keywords[i]);
                _Submit(tempKeywords, me._cids, function () {
                    e.remove(), _resize()
                }, function () {
                    $("#addWordTip").html(remindMsg.key.error).show(), _resize()
                })
            }

            function _addCid(e) {
                for (tempCids = [], i = 0; i < me._cids.length; i++) tempCids.push(me._cids[i]);
                e && _checkCid(e[0]) && (tempCids.push(e), _Submit(me._keywords, tempCids, function () {
                    var i = e[1].split(",").reverse().join('<span class="split">></span>');
                    T(me._careSpan.format({
                        cid: e[0],
                        text: i
                    })).appendTo("#careList"), T("#care-wrap-addBtn").hide(), T("#addCareBtn").show(), _resize()
                }, function () {
                    T("#addCareTip").html(remindMsg.cat.error).show(), _resize()
                }))
            }

            function _delCid(e) {
                for (tempCids = [], i = 0; i < me._cids.length; i++) e.attr("cid") != me._cids[i][0] && tempCids.push(me._cids[i]);
                _Submit(me._keywords, tempCids, function () {
                    e.remove(), _resize()
                }, function () {
                    T("#addCareTip").html(remindMsg.cat.error).show(), _resize()
                })
            }

            function _addKeyword(e) {
                if (!(e = $.string(e || "").trim())) return $("#addWordTip").html(remindMsg.key.noWord).show(), void _resize();
                for (tempKeywords = [], i = 0; i < me._keywords.length; i++) tempKeywords.push(me._keywords[i]);
                e && (e = e.replace(/&lt;/g, "<").replace(/&gt;/g, ">"), _checkKeyword(e) && (tempKeywords.push(e), _Submit(tempKeywords, me._cids, function () {
                    $(me._wordSpan.format({
                        word: $.string.encodeHTML(e)
                    })).insertBefore($("#wordList div")[0]), $("#wordInput").val(""), $("#wordInput").trigger("focus"), _resize()
                }, function () {
                    $("#addWordTip").html(remindMsg.key.error).show(), _resize()
                })))
            }

            function _checkCid(e) {
                if (tag = !0, e && 0 != e) {
                    if (0 == e.length) $("#addCareTip").html(remindMsg.cat.noCid).show(), tag = !1;
                    else
                        for (var i = 0; i < me._cids.length; i++) me._cids[i][0] == e && ($("#addCareTip").html(remindMsg.cat.exist).show(), tag = !1);
                    0 == me._cids.length && $("#careList").html("")
                } else me._cids.length >= defaultOptions._maxCidNum ? ($("#care-wrap-btn").hide(), $("#careTip").html(remindMsg.cat.enough).show(), tag = !1) : ($("#care-wrap-btn").show(), $("#careTip").html("").hide()), 0 == me._cids.length ? ($("#careList-title").html(""), $("#careList").html(remindMsg.cat.wordTip)) : $("#careList-title").html("\u5df2\u6dfb\u52a0\u7684\u5206\u7c7b"), $("#addCareTip").html("").hide();
                return tag && $("#addCareTip").html("").hide(), _resize(), tag
            }

            function _checkKeyword(e) {
                if (tag = !0, e && "" != e) {
                    if (e = $.string(e).trim(), 0 == e.length || "\u8f93\u5165\u60a8\u64c5\u957f\u7684\u5173\u952e\u8bcd" == e) $("#addWordTip").html(remindMsg.key.noWord).show(), tag = !1;
                    else if ($.string.getByteLength(e) > 20) $("#addWordTip").html(remindMsg.key.tooLong).show(), tag = !1;
                    else
                        for (var i = 0; i < me._keywords.length; i++) me._keywords[i] == e && ($("#addWordTip").html(remindMsg.key.exist).show(), tag = !1);
                    0 == me._keywords.length && $("#wordList").html('<div style="clear:both"></div>')
                } else me._keywords.length >= defaultOptions._maxKeywordNum ? ($("#word-wrap-btn").hide(), $("#wordTip").html(remindMsg.key.enough).show(), tag = !1) : ($("#word-wrap-btn").show(), $("#wordTip").html("").hide()), 0 == me._keywords.length ? ($("#wordList-title").html(""), $("#wordList").html(remindMsg.key.wordTip)) : $("#wordList-title").html("\u5df2\u6dfb\u52a0\u7684\u5173\u952e\u8bcd"), $("#addWordTip").html("").hide();
                return tag && $("#addWordTip").html("").hide(), _resize(), tag
            }

            function _init(e) {
                options = $.object.extend(defaultOptions, e), options.onopen && options.onopen.apply(me), $.forEach(options, function (e, i) {
                    $.isFunction(e) ? me.on(i, e) : me[i] = e
                });
                var i = '<div id="setCareField-wrap"><div id="keyWord-wrap" class="wrap"><div id="keyWord-header" class="header"><span>\u6211\u5173\u6ce8\u7684\u5173\u952e\u8bcd</span></div><div id="keyWord-body" class="body"><div id="wordList-title">\u5df2\u6dfb\u52a0\u7684\u5173\u952e\u8bcd</div><div id="wordList"></div><div style="clear:both"></div><span class="alert" id="addWordTip">\u6dfb\u52a0\u5173\u952e\u8bcd\u5931\u8d25</span><div id="word-wrap-btn"><div id="word-wrap-addBtn"><input type="text" id="wordInput" value="\u8f93\u5165\u60a8\u64c5\u957f\u7684\u5173\u952e\u8bcd" /><a type="button" id="addWordBtn" href="#"></a></div><div id="recWordsList"></div></div><div style="clear:both"></div><div id="wordTip" class="tip">\u4f60\u5173\u6ce8\u7684\u5173\u952e\u8bcd\u4e2a\u6570\u5df2\u8fbe\u5230\u4e0a\u9650\uff0c\u8bf7\u5220\u9664\u540e\u518d\u505a\u6dfb\u52a0</div></div></div><div id="category-wrap" class="wrap"><div id="category-header" class="header"><span>\u6211\u5173\u6ce8\u7684\u5206\u7c7b</span></div><div id="category-body" class="body"><div id="careList-title">\u5df2\u6dfb\u52a0\u7684\u5206\u7c7b</div><div id="careList"></div><div id="care-wrap-btn"><div id="care-wrap-addBtn"><div id="addCareBtnAdd"><a href="#"></a></div><div id="addCareBtnDel"><a href="#"></a></div></div><div id="addCareBtn"><a href="#"></a></div></div><div style="clear:both"></div><span class="alert" id="addCareTip">\u6dfb\u52a0\u5173\u952e\u8bcd\u5931\u8d25</span><div id="careTip" class="tip">\u4f60\u5173\u6ce8\u7684\u5173\u952e\u8bcd\u4e2a\u6570\u5df2\u8fbe\u5230\u4e0a\u9650\uff0c\u8bf7\u5220\u9664\u540e\u518d\u505a\u6dfb\u52a0</div></div></div></div>';
                _dialog = new dialog({
                    title: "\u8bbe\u7f6e\u5173\u6ce8\u9886\u57df",
                    content: i,
                    contentType: "html",
                    autoDispose: !0,
                    width: 520,
                    close: function () {
                        var e = {
                            keywords: me._keywords,
                            cids: me._cids
                        };
                        options.onclose(e)
                    }
                }), _dialog.cat = new category({
                    target: "#care-wrap-addBtn",
                    selectSize: options.selectSize,
                    splitor: "<span>&gt</span>"
                }), dialogBind(), $.sio("/ucenter/api/uccarefieldpop?t=" + (new Date).getTime()).callByServer(function (e) {
                    return e ? void _initHtml(e.keyword, e.category) : void _initHtml([], [])
                }), _checkKeyword(), _checkCid(), _resize(), _dialog.center();
                var t = "\u8bbe\u7f6e\u5173\u6ce8\u9886\u57df";
                options.expand && "all" != options.expand ? ($("#careList-title").show(), $("#wordList-title").show(), "onlyCid" == options.expand ? (t = "\u8bbe\u7f6e\u5206\u7c7b", $("#category-wrap").show(), $("#keyWord-header").show(), $("#keyWord-wrap").hide(), $("#category-header").hide()) : "onlyKey" == options.expand && (t = "\u8bbe\u7f6e\u5173\u952e\u8bcd", $("#keyWord-wrap").show(), $("#category-header").show(), $("#category-wrap").hide(), $("#keyWord-header").hide(), T("#wordInput").focus())) : ($("#keyWord-wrap").show(), $("#category-header").show(), $("#category-wrap").show(), $("#keyWord-header").show(), $("#careList-title").hide(), $("#wordList-title").hide()), _dialog.setTitle(t)
            }
            var defaultOptions = {
                    _maxKeywordNum: 20,
                    _maxKeywordLength: 20,
                    _maxCidNum: 5,
                    selectSize: 7,
                    expand: "all",
                    onopen: function () {}, onclose: function () {
                        me.tag && window.location.reload(!0)
                    }
                },
                me = this,
                options = {},
                _dialog;
            me.tag = !1;
            var remindMsg = {
                key: {
                    noWord: "\u8bf7\u8f93\u5165\u60a8\u7684\u5173\u952e\u8bcd\uff01",
                    tooLong: "\u60a8\u8f93\u5165\u7684\u5173\u952e\u8bcd\u592a\u957f\u62c9\uff0c\u91cd\u65b0\u68c0\u67e5\u4e00\u4e0b\u5427\uff01",
                    exist: "\u60a8\u8f93\u5165\u7684\u5173\u952e\u8bcd\u5df2\u7ecf\u6dfb\u52a0\u8fc7\u4e86\uff0c\u4e0d\u8981\u91cd\u590d\u6dfb\u52a0\u54e6\uff01",
                    wordTip: "\u60a8\u53ef\u4ee5\u8bbe\u5b9a <b>" + defaultOptions._maxKeywordNum + '</b> \u7ec4\u5173\u952e\u8bcd\uff0c\u82e5\u4e00\u7ec4\u4e2d\u5305\u542b\u591a\u4e2a\u5173\u952e\u8bcd\uff0c\u8bf7\u7528\u7a7a\u683c\u5206\u9694\uff0c\u4f8b\u5982"\u7231\u597d \u8db3\u7403"',
                    enough: "\u4f60\u5173\u6ce8\u7684\u5173\u952e\u8bcd\u4e2a\u6570\u5df2\u8fbe\u5230\u4e0a\u9650\uff0c\u8bf7\u5220\u9664\u540e\u518d\u505a\u6dfb\u52a0\uff01",
                    error: "\u5f88\u62b1\u6b49\u6ca1\u64cd\u4f5c\u6210\u529f\uff0c\u518d\u8bd5\u8bd5\u770b\u5427\uff01"
                },
                cat: {
                    noCid: "\u8bf7\u70b9\u51fb\u9009\u62e9\u6846\uff0c\u9009\u62e9\u5206\u7c7b\uff01",
                    exist: "\u4f60\u9009\u62e9\u7684\u5206\u7c7b\u5df2\u7ecf\u6dfb\u52a0\u8fc7\u4e86\uff0c\u4e0d\u8981\u91cd\u590d\u6dfb\u52a0\u54e6\uff01",
                    addTip: "\u60a8\u53ef\u4ee5\u8bbe\u5b9a<b>" + defaultOptions._maxCidNum + "</b>\u4e2a\u5206\u7c7b\uff01",
                    enough: "\u5173\u6ce8\u5206\u7c7b\u5df2\u6ee1\uff0c\u5220\u51cf\u540e\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0\uff5e",
                    wordTip: "\u4f60\u8fd8\u6ca1\u6709\u6dfb\u52a0\u5206\u7c7b\uff0c\u70b9\u51fb\u6dfb\u52a0\u6309\u94ae\u6dfb\u52a0\u5427\uff01",
                    error: "\u5f88\u62b1\u6b49\u6ca1\u64cd\u4f5c\u6210\u529f\uff0c\u518d\u8bd5\u8bd5\u770b\u5427\uff01"
                }
            };
            me._keywords = [], me._cids = [], me._wordSpan = new $.string('<a href="#" class="wordSpan" word="#{word}"><span>#{word}</span><i></i></a>'), me._careSpan = new $.string('<a href="#" class="careSpan" cid="#{cid}"><span>#{text}</span><i></i></a>'), ec.fire("login.check", {
                isLogin: function () {
                    _init(opts)
                }, noLogin: function () {
                    ec.fire("login.log", {
                        onLoginSuccess: function () {
                            _init(opts)
                        }
                    })
                }
            })
        });
    module.exports = setCareField
});;
define("common:widget/js/ui/prof-star/prof-star.js", function (t, r, a) {
    var e = t("common:widget/lib/jquery/jquery.js"),
        o = function (t) {
            if (t.target) {
                var r = t.starW || 25,
                    a = t.starG || 15,
                    o = parseInt(t.rate || 0),
                    s = o / 100 * 5 * r,
                    i = s / r;
                e(t.target).css("width", s + Math.floor(i) * a + "px")
            }
        };
    a.exports = o
});;
define("common:widget/js/ui/uploader/uploader.js", function (e, t, i) {
    var a = e("common:widget/lib/jquery/jquery.js"),
        r = e("common:widget/js/ui/base/base.js"),
        o = e("common:widget/js/ui/dialog/dialog.js"),
        s = e("common:widget/js/util/uri/uri.js"),
        n = 0,
        l = r().extend({
            init: function (t) {
                try {
                    var i = this;
                    this.target = a(this.target), this.url = t.url || "http://zhidao.baidu.com/submit/ajax/", this.maxSize = this.maxSize || 5, this.params = a.extend({
                        cm: 100672
                    }, t.params), this.paramName = t.paramName || "image", this.imageOnly = t.imageOnly === !1 ? !1 : !0, "static" == this.target.css("position") && this.target.css("position", "relative"), window.FileReader && window.FormData ? this.render() : e.async("common:widget/lib/swfupload/swfupload.js", function (e) {
                        i.renderFlash(e)
                    })
                } catch (r) {
                    "undefined" != typeof alog && alog("exception.fire", "catch", {
                        msg: r.message,
                        path: "common:widget/js/ui/uploader/uploader.js",
                        method: "",
                        ln: 47
                    })
                }
            }, render: function () {
                var e = this;
                this.fileEle && this.fileEle.remove(), this.fileEle = a('<input type="file" tabindex="-1" />').addClass("ipt-uploader").appendTo(this.target), this.imageOnly && this.fileEle.attr("accept", "image/*"), this.fileEle.on("change", function () {
                    if (this.files[0]) {
                        var t = this.files[0];
                        if (t.size > 1048576 * e.maxSize) return void o.alert("\u6587\u4ef6\u5927\u5c0f\u8d85\u8fc7" + e.maxSize + "M\u7684\u9650\u5236\u3002");
                        e.upload(t), setTimeout(function () {
                            e.render()
                        }, 0)
                    }
                })
            }, upload: function (e) {
                var t = this,
                    i = new FormData;
                i.append(this.paramName, e, e.name), a.each(this.params, function (e, t) {
                    i.append(e, t)
                });
                var r = new XMLHttpRequest;
                r.open("POST", this.url, !0), r.withCredentials = !0, r.upload.addEventListener("progress", function (e) {
                    t.fire("progress", e.lengthComputable && {
                        loaded: e.loaded,
                        total: e.total
                    })
                }), r.addEventListener("error", function () {
                    t.fire("error")
                }), r.addEventListener("load", function () {
                    var e = JSON.parse(r.responseText);
                    t.fire("complete", e)
                }), r.send(i), t.fire("upload", {
                    file: e
                })
            }, renderFlash: function (e) {
                if (!this.swfu) {
                    var t = this,
                        i = n++,
                        r = a("<span/>").attr("id", "ik-uploader-" + i).appendTo(this.target),
                        o = new e({
                            flash_url: s.swfupload,
                            upload_url: t.url,
                            file_size_limit: t.maxSize + " MB",
                            file_types: t.imageOnly ? "*.jpg;*.png;*.gif;*.bmp" : "*.*",
                            file_types_description: t.imageOnly ? "\u56fe\u7247\u6587\u4ef6" : "\u6240\u6709\u6587\u4ef6",
                            file_upload_limit: 1,
                            file_queue_limit: 1,
                            debug: !1,
                            button_placeholder_id: r.attr("id"),
                            button_width: this.target.width(),
                            button_height: this.target.height(),
                            button_window_mode: e.WINDOW_MODE.TRANSPARENT,
                            button_cursor: e.CURSOR.HAND,
                            file_post_name: t.paramName,
                            post_params: t.params,
                            swfupload_pre_load_handler: function () {}, swfupload_load_failed_handler: function () {
                                t.fire("error")
                            }, swfupload_loaded_handler: function () {}, file_queued_handler: function () {}, file_queue_error_handler: function () {
                                t.fire("error")
                            }, file_dialog_complete_handler: function () {
                                try {
                                    this.startUpload()
                                } catch (e) {}
                            }, upload_start_handler: function (e) {
                                t.fire("upload", {
                                    file: e
                                })
                            }, upload_progress_handler: function (e, i, a) {
                                t.fire("progress", {
                                    loaded: i,
                                    total: a
                                })
                            }, upload_error_handler: function () {
                                t.fire("error")
                            }, upload_success_handler: function (e, i) {
                                t.fire("complete", a.parseJSON(i))
                            }, upload_complete_handler: function () {
                                try {
                                    var e = o.getStats();
                                    e.successful_uploads = e.successful_uploads - 1, o.setStats(e)
                                } catch (t) {}
                            }, queue_complete_handler: function () {}
                        });
                    a(o.getMovieElement()).addClass("swf-uploader"), this.swfu = o
                }
            }
        });
    i.exports = l
});;
define("common:widget/js/ui/scrollbar/scrollbar.js", function (e, t, s) {
    function o(e) {
        "undefined" != typeof e.style.WebkitUserSelect ? e.style.WebkitUserSelect = "none" : "undefined" != typeof e.style.MozUserSelect ? e.style.MozUserSelect = "none" : "undefined" != typeof e.onselectstart ? e.onselectstart = function () {
            return !1
        } : e.onmousedown = function () {
            return !1
        }
    }

    function n(e) {
        "undefined" != typeof e.style.WebkitUserSelect ? e.style.WebkitUserSelect = "" : "undefined" != typeof e.style.MozUserSelect ? e.style.MozUserSelect = "" : "undefined" != typeof e.onselectstart ? e.onselectstart = function () {
            return !0
        } : e.onmousedown = function () {
            return !0
        }
    }
    var r = e("common:widget/js/util/tangram/tangram.js"),
        i = e("common:widget/js/ui/base/base.js"),
        c = (e("common:widget/lib/jquery.ui/jquery.ui.mousewheel.js"), i().extend({
            init: function (e) {
                try {
                    this.options = r.extend({
                        scrollWrapper: "",
                        scrollContent: "",
                        maxHeight: 600
                    }, e)
                } catch (t) {
                    "undefined" != typeof alog && alog("exception.fire", "catch", {
                        msg: t.message,
                        path: "common:widget/js/ui/scrollbar/scrollbar.js",
                        method: "",
                        ln: 25
                    })
                }
            }, render: function () {
                var e = this,
                    t = '<div class="scrollbar-wp" style="display:none;"><div class="scrollbar"></div></div>',
                    s = e.options.scrollWrapper,
                    i = e.options.scrollContent,
                    c = e.options.maxHeight,
                    p = i.height(),
                    l = c / p;
                if (p > c) {
                    s.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        height: c,
                        overflow: "hidden"
                    }), i.css({
                        position: "relative",
                        top: 0,
                        left: 0
                    }), s.append(r(t));
                    var a = r(".scrollbar", s);
                    a.height(l * c), a.hover(function () {
                        r(this).addClass("hover")
                    }, function () {
                        r(this).removeClass("hover")
                    });
                    var u = 0,
                        d = 0,
                        f = 0,
                        h = 0;
                    a.mousedown(function (e) {
                        u = 1, d = e.pageY, f = parseInt(a.css("top")), h = parseInt(i.css("top")), o(document.body)
                    }), r(document).mousemove(function (e) {
                        if (u) {
                            var t = e.pageY - d;
                            if (0 > t && parseInt(a.css("top")) <= 0) return a.css("top", "0"), void i.css("top", "0");
                            if (t > 0 && parseInt(a.css("top")) >= c - a.height()) return a.css("top", c - a.height() + "px"), void i.css("top", "-" + (p - c) + "px");
                            a.css("top", parseInt(f + t) + "px"), i.css("top", parseInt(h - t / c * p) + "px")
                        }
                    }), r(document).mouseup(function () {
                        u = 0, n(document.body)
                    });
                    var m = 5,
                        g = 0;
                    s.click(function () {
                        try {
                            g = 1, f = parseInt(a.css("top")), h = parseInt(i.css("top"))
                        } catch (e) {
                            "undefined" != typeof alog && alog("exception.fire", "catch", {
                                msg: e.message,
                                path: "common:widget/js/ui/scrollbar/scrollbar.js",
                                method: "",
                                ln: 96
                            })
                        }
                    }), s.blur(function () {
                        g = 0
                    }), s.mousewheel(function (e, t) {
                        if (g && a.is(":visible"))
                            if (e.preventDefault(), f = parseInt(a.css("top")), h = parseInt(i.css("top")), 0 > t) {
                                if (parseInt(a.css("top")) >= c - a.height()) return a.css("top", c - a.height() + "px"), void i.css("top", "-" + (p - c) + "px");
                                a.css("top", parseInt(f + m) + "px"), i.css("top", parseInt(h - m / l) + "px")
                            } else {
                                if (parseInt(a.css("top")) <= 0) return a.css("top", "0"), void i.css("top", "0");
                                a.css("top", parseInt(f - m) + "px"), i.css("top", parseInt(h + m / l) + "px")
                            }
                    }), s.hover(function () {
                        r(".scrollbar-wp", s).show()
                    }, function () {
                        r(".scrollbar-wp", s).hide(), u = 0, n(document.body)
                    })
                }
            }
        }));
    s.exports = c
});