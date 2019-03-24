webpackJsonp([51], {
    0: function (t, e, i) {
        (function (t) {
            "use strict";

            function e(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function n(t) {
                return function () {
                    var e = t.apply(this, arguments);
                    return new Promise(function (t, i) {
                        function n(r, a) {
                            try {
                                var s = e[r](a), o = s.value
                            } catch (l) {
                                return void i(l)
                            }
                            return s.done ? void t(o) : Promise.resolve(o).then(function (t) {
                                n("next", t)
                            }, function (t) {
                                n("throw", t)
                            })
                        }

                        return n("next")
                    })
                }
            }

            var r = Object.assign || function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                    }
                    return t
                }, a = i(578), s = e(a), o = i(559), l = e(o), u = i(585), c = e(u), h = i(652), d = e(h), f = i(653),
                p = e(f), m = i(654), g = e(m), v = i(655), y = e(v), x = i(471), b = e(x), w = i(643), _ = e(w),
                k = i(536), C = e(k), E = new s["default"]({
                    el: ".map_count",
                    svg: {root: "http://t1.daumcdn.net/media/img-media/map/korea.svg"},
                    options: {
                        device: "pc",
                        ui: {nameTag: !0, stickyLayer: !0},
                        depth: 2,
                        disableArea: [36, 50],
                        strictLayer: !1,
                        resizeRender: !1,
                        fit: 2,
                        overflow: {ui: !0, map: !1}
                    },
                    hideStickyLayer: function (t) {
                        t.hideStickyLayer()
                    }
                }).init(), S = t(".count_list .cont_count"), B = t(".sort_election"), T = t(".head_count .tit_count"),
                A = t(".head_count .rate_count"), N = {
                    prevCpCode: 0,
                    partyEngNameObj: null,
                    districtInfos: [],
                    mapInfoObj: {},
                    sidoCdNameObj: {},
                    sidoCdPartyScoreObj: {}
                }, M = "sort_open";
            B.find(".btn_sort").on("click", function (t) {
                B.hasClass(M) ? B.removeClass(M) : B.addClass(M)
            }), B.find(".layer_sort > li").on("click", function (e) {
                var i = t(this).text().trim(), n = B.find('.layer_sort > li[class="on"]').text().trim();
                e.preventDefault(), "전국" == i ? E.out() : "전국" == n ? E.intoByName(i) : E.out(function () {
                    try {
                        E.intoByName(i)
                    } catch (t) {
                    }
                })
            }), B.find(".link_nation").on("click", function (t) {
                t.preventDefault(), E.out()
            });
            var O = function (t) {
                return null != N.partyEngNameObj ? N.partyEngNameObj[C["default"].filterPartyKorName(t)] : ""
            }, I = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                T.text(t), null == e ? A.hide() : (A.find(".num_g").text(e + "%"), A.show())
            }, L = function (e) {
                var i = t((0, d["default"])(e));
                S.html(i)
            }, F = function (e, i) {
                if (t("#selectDistrict").text(e), B.find('.layer_sort > li[class="on"]').removeClass("on"), "전국" === e) B.find(".layer_sort > li:first").addClass("on"); else {
                    var n = B.find(".layer_sort > li").find('a[did="' + i + '"]');
                    n.parent("li").addClass("on")
                }
            }, z = new c["default"](ENV.profiles, {dataType: "count"}), R = function () {
                var t = n(regeneratorRuntime.mark(function e(t) {
                    var i, n = t.sidoCd, r = void 0 === n ? null : n, a = t.cpElectionDistrictId,
                        s = void 0 === a ? null : a,
                        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {
                        };
                    return regeneratorRuntime.wrap(function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return i = {
                                    subElectionId: 205,
                                    sidoCd: r,
                                    cpElectionDistrictId: s
                                }, t.abrupt("return", z.getResult(i).then(function (t) {
                                    if (null != t.error) return !1;
                                    r && t.body && t.body.partyScore && (N.sidoCdPartyScoreObj[r] = t.body.partyScore), o(t.body);
                                    var e = t.body.data;
                                    if (null == e) return !1;
                                    var i = {};
                                    e.forEach(function (t) {
                                        var e = t.cpElectionDistrictId;
                                        if (N.mapInfoObj[e] = t, null != t.data && t.data.length > 0) {
                                            var n = t.data[0], r = E.getPresetColor(n.partyName, n.scoreRate);
                                            i[e] = r
                                        }
                                    }), E.on("map:renderAfter", function () {
                                        E.setColorByCpCode(i)
                                    })
                                }));
                            case 2:
                            case"end":
                                return t.stop()
                        }
                    }, e, this)
                }));
                return function (e) {
                    return t.apply(this, arguments)
                }
            }(), P = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "S48x60";
                null != t && (t.thumbnail = b["default"].getAlvoloUrl(t.necImageUrl, e, "media"), t.partyEngName = O(t.partyName), t.prediction = C["default"].getStatusClassName(t.predictionCdName || ""))
            }, j = function (e, i) {
                if (F("전국"), null == i) return !1;
                var n = S.find('tbody > tr[name="' + e + '"]');
                i.forEach(function (t) {
                    var e = n.find('td > div[class*="emph_' + t.engName + '"]');
                    e.text(t.count), e.attr("score", t.count)
                });
                var r = [].concat(i).sort(function (t, e) {
                    return t.count < e.count ? 1 : t.count > e.count ? -1 : 0
                })[0];
                0 !== r.count && n.find('td > div[score="' + r.count + '"]').each(function () {
                    t(this).parent("td").addClass("item_top"), t(this).append(t('<strong class="screen_out">현재 1위</strong>'))
                })
            }, D = function (e) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {
                }, n = C["default"].districtIdToSidoCd(e);
                F(N.sidoCdNameObj[n], e), R({sidoCd: n}, function (e) {
                    var i = e.data;
                    return null != i && 0 !== i.length && (L({type: "1depth"}), null != i[0] && I(i[0].sidoName + " 구시군장 1, 2위"), i.forEach(function (t) {
                        var e = t.data;
                        if (null == e || 0 === e.length) return !1;
                        var i = e[0], n = e.length > 1 ? e[1] : null;
                        P(i), P(n);
                        var r = (0, g["default"])({
                            positionName: t.districtName,
                            countingRate: t.countingRate,
                            cpElectionDistrictId: t.cpElectionDistrictId,
                            p1: i,
                            p2: n
                        });
                        S.find("ul").append(r)
                    }), void S.find("a.link_cont").on("click", function () {
                        var e = t(this).attr("did");
                        V(e)
                    }))
                }).then(i)
            }, V = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {
                };
                R({cpElectionDistrictId: t}, function (e) {
                    var i = e.data;
                    if (null == i || 0 === i.length) return !1;
                    var n = i[0];
                    I(n.positionName, n.countingRate);
                    var r = E.getElemByCpCode(t);
                    E.selectElem(r), L({type: "2depth"});
                    var a = n.data;
                    if (null == a || 0 === a.length) return !1;
                    var s = 0;
                    a.forEach(function (t) {
                        P(t), "Y" == n.withoutVotingYn ? t.isWithoutVoting = !0 : [1, 2].indexOf(parseInt(t.rank, 10)) >= 0 && (t.isTop = !0, 1 === parseInt(t.rank, 10) && (s = t.score), 2 === parseInt(t.rank, 10) && (t.isShowGap = !0, t.scoreGap = s - t.score));
                        var e = (0, y["default"])(t);
                        S.find("ol").append(e)
                    })
                }).then(e)
            };
            E.on("mouseover", function (t, e) {
                var i = e.data("cpCode");
                if (N.prevCpCode !== i) {
                    var n = e.data("level"), a = {};
                    if (1 == n) {
                        var s = C["default"].districtIdToSidoCd(i), o = Object.keys(N.mapInfoObj).filter(function (t) {
                            return t.slice(1, 3) == s
                        }).map(function (t) {
                            return N.mapInfoObj[t]
                        }), l = o.map(function (t) {
                            if (null != t.data && t.data.length > 0) {
                                var e = t.districtName;
                                e.length > 2 && (e = e.slice(0, -1));
                                var i = O(t.data[0].partyName);
                                return r({}, t.data[0], {districtName: e, partyEngName: i})
                            }
                        });
                        a = {
                            districtName: N.sidoCdNameObj[s],
                            list1: l.slice(0, 11),
                            list2: l.slice(11, 22),
                            list3: l.slice(22, 33)
                        }, 0 == l.length && E.hideStickyLayer()
                    } else {
                        var u = N.mapInfoObj[i];
                        if (null != u) {
                            if (null != u.data && u.data.length > 0) {
                                var c = u.districtName;
                                c.length > 2 && (c = c.slice(0, -1)), a = {
                                    districtName: c,
                                    list: u.data.map(function (t) {
                                        return r({}, t, {partyEngName: O(t.partyName)})
                                    })
                                }
                            }
                        } else E.hideStickyLayer()
                    }
                    E.changeStickyLayerContent((0, p["default"])(r({}, a, {dept: parseInt(e.data("level"), 10)})))
                }
            }), E.on("click", function (t, e) {
                try {
                    var i = e.data("level"), n = e.data("cpCode");
                    2 == i && V(n)
                } catch (t) {
                }
            }), E.on("map:outAfter", function (t, e) {
                try {
                    B.find(".link_nation").hide(), L({
                        type: "all",
                        list: N.districtInfos
                    }), I("지역별 현재 1위"), N.districtInfos.forEach(function (t) {
                        var e = C["default"].districtIdToSidoCd(t.id);
                        N.sidoCdNameObj[e] = t.name, j(t.name, N.sidoCdPartyScoreObj[e])
                    })
                } catch (t) {
                }
            }), E.on("map:intoAfter", function (t, e) {
                try {
                    var i = t.target.data("cpCode");
                    B.find(".link_nation").show(), D(i)
                } catch (t) {
                }
            });
            (function () {
                var e = B.find(".layer_sort > li").toArray().map(function (e) {
                    var i = t(e).find("a.dist");
                    return {name: i.text().trim(), id: i.attr("did")}
                }).filter(function (t) {
                    return void 0 !== t.id
                });
                N.districtInfos = e, L({type: "all", list: e});
                var i = [];
                e.forEach(function (t) {
                    var e = C["default"].districtIdToSidoCd(t.id);
                    N.sidoCdNameObj[e] = t.name, i.push(R({sidoCd: e}, function (e) {
                        var i = e.partyScore;
                        j(t.name, i), N.partyEngNameObj || (N.partyEngNameObj = z.getPartyEngNameObj(i))
                    }))
                }), Promise.all(i).then(function (t) {
                    var e = Object.keys(N.sidoCdPartyScoreObj).map(function (t) {
                        return N.sidoCdPartyScoreObj[t]
                    }).reduce(function (t, e) {
                        return e.forEach(function (e) {
                            var i = t[e.partyName] || {}, n = (i.count || 0) + e.count;
                            t[e.partyName] = r({}, e, {count: n})
                        }), t
                    }, {}), i = [];
                    for (var n in e) i.push(e[n]);
                    _["default"].refresh(i)
                })
            })();
            l["default"].load(!1)
        }).call(e, i(1))
    }, 343: function (t, e, i) {
        (function (t, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function a(t) {
                return function () {
                    var e = t.apply(this, arguments);
                    return new Promise(function (t, i) {
                        function n(r, a) {
                            try {
                                var s = e[r](a), o = s.value
                            } catch (l) {
                                return void i(l)
                            }
                            return s.done ? void t(o) : Promise.resolve(o).then(function (t) {
                                n("next", t)
                            }, function (t) {
                                n("throw", t)
                            })
                        }

                        return n("next")
                    })
                }
            }

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            e.__esModule = !0;
            var o = i(344), l = r(o), u = function () {
                function e() {
                    s(this, e)
                }

                return e.fixIe9LessOrEqualCORS = function (e) {
                    var i = l["default"].userAgent(window.navigator.userAgent).browser, n = e.offJsonp || !1;
                    return i.msie && Number(i.version.major) <= 9 && !n && t.extend(e, {dataType: "jsonp"}), t.omit(e, "offJsonp"), e
                }, e.get = function () {
                    function t(t) {
                        return i.apply(this, arguments)
                    }

                    var i = a(regeneratorRuntime.mark(function r(t) {
                        var i, a;
                        return regeneratorRuntime.wrap(function (r) {
                            for (; ;) switch (r.prev = r.next) {
                                case 0:
                                    return t = e.fixIe9LessOrEqualCORS(t), i = null, a = null, r.prev = 3, r.next = 6, new Promise(function (e, i) {
                                        n.ajax(t).done(e).error(i)
                                    });
                                case 6:
                                    i = r.sent, r.next = 12;
                                    break;
                                case 9:
                                    r.prev = 9, r.t0 = r["catch"](3), a = r.t0;
                                case 12:
                                    return r.abrupt("return", {body: i, error: a});
                                case 13:
                                case"end":
                                    return r.stop()
                            }
                        }, r, this, [[3, 9]])
                    }));
                    return t
                }(), e.getScript = function () {
                    function t(t) {
                        return e.apply(this, arguments)
                    }

                    var e = a(regeneratorRuntime.mark(function i(t) {
                        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        return regeneratorRuntime.wrap(function (i) {
                            for (; ;) switch (i.prev = i.next) {
                                case 0:
                                    return i.abrupt("return", this.get({
                                        url: t,
                                        dataType: "script",
                                        cache: e,
                                        offJsonp: !0
                                    }));
                                case 1:
                                case"end":
                                    return i.stop()
                            }
                        }, i, this)
                    }));
                    return t
                }(), e
            }();
            e["default"] = u
        }).call(e, i(2), i(1))
    }, 344: function (t, e, i) {
        !function (t) {
            "use strict";

            function e(t) {
                var e = {},
                    n = /(dolfin)[ \/]([\w.]+)/.exec(t) || /(edge)[ \/]([\w.]+)/.exec(t) || /(chrome)[ \/]([\w.]+)/.exec(t) || /(tizen)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(t) || /(webkit)(?:.*version)?[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(t) || ["", "unknown"];
                return "webkit" === n[1] ? n = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(t) || /(android)[ \/]([\w._\-]+);/.exec(t) || [n[0], "safari", n[2]] : "mozilla" === n[1] ? /trident/.test(t) ? n[1] = "msie" : n[1] = "firefox" : /polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(t) && (n[1] = "polaris"), e[n[1]] = !0, e.name = n[1], e.version = i(n[2]), e
            }

            function i(t) {
                var e = {}, i = t ? t.split(/\.|-|_/) : ["0", "0", "0"];
                return e.info = i.join("."), e.major = i[0] || "0", e.minor = i[1] || "0", e.patch = i[2] || "0", e
            }

            function n(t) {
                return r(t) ? "pc" : a(t) ? "tablet" : s(t) ? "mobile" : ""
            }

            function r(t) {
                return !(!t.match(/linux|windows (nt|98)|macintosh|cros/) || t.match(/android|mobile|polaris|lgtelecom|uzard|natebrowser|ktf;|skt;/))
            }

            function a(t) {
                return !!(t.match(/ipad/) || t.match(/android/) && !t.match(/mobi|mini|fennec/))
            }

            function s(t) {
                return !!t.match(/ip(hone|od)|android.+mobile|windows (ce|phone)|blackberry|bb10|symbian|webos|firefox.+fennec|opera m(ob|in)i|tizen.+mobile|polaris|iemobile|lgtelecom|nokia|sonyericsson|dolfin|uzard|natebrowser|ktf;|skt;/)
            }

            function o(t) {
                var e = {},
                    n = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(t) || !!/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(t) && ["", "polaris", "0.0.0"] || /(windows)(?: nt | phone(?: os){0,1} | )([\w._\-]+)/.exec(t) || /(android)[ \/]([\w._\-]+);/.exec(t) || !!/android/.test(t) && ["", "android", "0.0.0"] || !!/(windows)/.test(t) && ["", "windows", "0.0.0"] || /(mac) os x ([\w._\-]+)/.exec(t) || /(tizen)[ \/]([\w._\-]+);/.exec(t) || !!/(linux)/.test(t) && ["", "linux", "0.0.0"] || !!/webos/.test(t) && ["", "webos", "0.0.0"] || /(cros)(?:\s[\w]+\s)([\d._\-]+)/.exec(t) || /(bada)[ \/]([\w._\-]+)/.exec(t) || !!/bada/.test(t) && ["", "bada", "0.0.0"] || !!/(rim|blackberry|bb10)/.test(t) && ["", "blackberry", "0.0.0"] || ["", "unknown", "0.0.0"];
                return "iphone" === n[1] || "ipad" === n[1] || "ipod" === n[1] ? n[1] = "ios" : "windows" === n[1] && "98" === n[2] && (n[2] = "0.98.0"), "cros" === n[1] && (n[1] = "chrome"), e[n[1]] = !0, e.name = n[1], e.version = i(n[2]), e
            }

            function l(t, e) {
                var n = {}, r = null, a = c;
                Array.isArray(e) ? a = c.concat(e) : "string" == typeof e && (a = c.concat([e]));
                for (var s = 0, o = a.length; s < o; s += 1) {
                    var l = a[s], u = new RegExp("(" + l + ")[ \\/]([\\w._\\-]+)");
                    if (r = u.exec(t)) break
                }
                return r || (r = ["", ""]), r[1] ? (n.isApp = !0, n.name = r[1], n.version = i(r[2])) : n.isApp = !1, n
            }

            function u(t) {
                var e = "";
                return e = t ? t.toLowerCase() : "undefined" != typeof window && window.navigator && "string" == typeof window.navigator.userAgent ? window.navigator.userAgent.toLowerCase() : ""
            }

            Array.isArray || (Array.isArray = function (t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            });
            var c = ["crios", "fxios", "daumapps"], h = t.userAgent = function (t, i) {
                var r = u(t);
                return {ua: r, browser: e(r), platform: n(r), os: o(r), app: l(r, i)}
            };
            "object" == typeof window && window.navigator.userAgent && (window.ua_result = h(window.navigator.userAgent) || null)
        }(function () {
            return e.daumtools = e, e.util = e, e
        }())
    }, 471: function (t, e) {
        "use strict";
        e.__esModule = !0, e["default"] = {
            removeBrackets: function (t) {
                return t.replace(/(\<.*?\>)/gi, "").replace(/(\[.*?\])/gi, "").replace(/(\(.*?\))/gi, "")
            }, removeBracketsFirst: function (t) {
                if (null === t || "undefined" === t) return t;
                var e = t.replace(/(^\[.*?\]|^<.*?>|^\(.*?\))/, "").replace(/^\s+|\s+$/g, "");
                return "" === e ? t : e
            }, removeBracketsLast: function (t) {
                if (null === t || "undefined" === t) return t;
                var e = t.replace(/(\[[^\[]*\]$|\([^\(]*\)$|<[^<]*>$)/, "").replace(/^\s+|\s+$/g, "");
                return "" === e ? t : e
            }, removeBracketsFirstAndLast: function (t) {
                return this.removeBracketsLast(this.removeBracketsFirst(t))
            }, getAlvoloUrl: function (t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "media",
                    n = "//img1.daumcdn.net", r = encodeURIComponent(t);
                return !/^http/.test(t) || /fname/.test(t) ? t : (t.indexOf("beta.daumcdn") > -1 && (n = "//img1.beta.daumcdn.net"), /^\d/.test(e) && (e = "F" + e), n + "/thumb/" + e + "ht.u/?fname=" + r + "&scode=" + i)
            }, getDurationText: function (t) {
                if (null == t || "undefined" === t || t < 1) return "";
                var e = parseInt(t / 3600), i = t - 3600 * e, n = i % 60;
                return i = parseInt(i / 60), (e > 0 ? e + ":" : "") + (i < 10 ? "0" : "") + i + ":" + (n < 10 ? "0" : "") + n
            }, subString: function (t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", n = e - i.length, r = 0,
                    a = "", s = void 0, o = void 0, l = void 0;
                for (o = 0; o < t.length; o++) l = t.charAt(o), s = escape(l).length > 3 ? 2 : 1, r += s, n -= s, n >= 0 && (a += l);
                return e >= r ? t : a += i
            }, getNumberWithComma: function (t) {
                return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
        }
    }, 474: function (t, e, i) {
        t.exports = i(475)["default"]
    }, 475: function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        function r(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e["default"] = t, e
        }

        function a() {
            var t = new o.HandlebarsEnvironment;
            return f.extend(t, o), t.SafeString = u["default"], t.Exception = h["default"], t.Utils = f, t.escapeExpression = f.escapeExpression, t.VM = m, t.template = function (e) {
                return m.template(e, t)
            }, t
        }

        e.__esModule = !0;
        var s = i(476), o = r(s), l = i(490), u = n(l), c = i(478), h = n(c), d = i(477), f = r(d), p = i(491),
            m = r(p), g = i(492), v = n(g), y = a();
        y.create = a, v["default"](y), y["default"] = y, e["default"] = y, t.exports = e["default"]
    }, 476: function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        function r(t, e, i) {
            this.helpers = t || {}, this.partials = e || {}, this.decorators = i || {}, l.registerDefaultHelpers(this), u.registerDefaultDecorators(this)
        }

        e.__esModule = !0, e.HandlebarsEnvironment = r;
        var a = i(477), s = i(478), o = n(s), l = i(479), u = i(487), c = i(489), h = n(c), d = "4.0.12";
        e.VERSION = d;
        var f = 7;
        e.COMPILER_REVISION = f;
        var p = {
            1: "<= 1.0.rc.2",
            2: "== 1.0.0-rc.3",
            3: "== 1.0.0-rc.4",
            4: "== 1.x.x",
            5: "== 2.0.0-alpha.x",
            6: ">= 2.0.0-beta.1",
            7: ">= 4.0.0"
        };
        e.REVISION_CHANGES = p;
        var m = "[object Object]";
        r.prototype = {
            constructor: r, logger: h["default"], log: h["default"].log, registerHelper: function (t, e) {
                if (a.toString.call(t) === m) {
                    if (e) throw new o["default"]("Arg not supported with multiple helpers");
                    a.extend(this.helpers, t)
                } else this.helpers[t] = e
            }, unregisterHelper: function (t) {
                delete this.helpers[t]
            }, registerPartial: function (t, e) {
                if (a.toString.call(t) === m) a.extend(this.partials, t); else {
                    if ("undefined" == typeof e) throw new o["default"]('Attempting to register a partial called "' + t + '" as undefined');
                    this.partials[t] = e
                }
            }, unregisterPartial: function (t) {
                delete this.partials[t]
            }, registerDecorator: function (t, e) {
                if (a.toString.call(t) === m) {
                    if (e) throw new o["default"]("Arg not supported with multiple decorators");
                    a.extend(this.decorators, t)
                } else this.decorators[t] = e
            }, unregisterDecorator: function (t) {
                delete this.decorators[t]
            }
        };
        var g = h["default"].log;
        e.log = g, e.createFrame = a.createFrame, e.logger = h["default"]
    }, 477: function (t, e) {
        "use strict";

        function i(t) {
            return c[t]
        }

        function n(t) {
            for (var e = 1; e < arguments.length; e++) for (var i in arguments[e]) Object.prototype.hasOwnProperty.call(arguments[e], i) && (t[i] = arguments[e][i]);
            return t
        }

        function r(t, e) {
            for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
            return -1
        }

        function a(t) {
            if ("string" != typeof t) {
                if (t && t.toHTML) return t.toHTML();
                if (null == t) return "";
                if (!t) return t + "";
                t = "" + t
            }
            return d.test(t) ? t.replace(h, i) : t
        }

        function s(t) {
            return !t && 0 !== t || !(!m(t) || 0 !== t.length)
        }

        function o(t) {
            var e = n({}, t);
            return e._parent = t, e
        }

        function l(t, e) {
            return t.path = e, t
        }

        function u(t, e) {
            return (t ? t + "." : "") + e
        }

        e.__esModule = !0, e.extend = n, e.indexOf = r, e.escapeExpression = a, e.isEmpty = s, e.createFrame = o, e.blockParams = l, e.appendContextPath = u;
        var c = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;", "=": "&#x3D;"},
            h = /[&<>"'`=]/g, d = /[&<>"'`=]/, f = Object.prototype.toString;
        e.toString = f;
        var p = function (t) {
            return "function" == typeof t
        };
        p(/x/) && (e.isFunction = p = function (t) {
            return "function" == typeof t && "[object Function]" === f.call(t)
        }), e.isFunction = p;
        var m = Array.isArray || function (t) {
            return !(!t || "object" != typeof t) && "[object Array]" === f.call(t)
        };
        e.isArray = m
    }, 478: function (t, e) {
        "use strict";

        function i(t, e) {
            var r = e && e.loc, a = void 0, s = void 0;
            r && (a = r.start.line, s = r.start.column, t += " - " + a + ":" + s);
            for (var o = Error.prototype.constructor.call(this, t), l = 0; l < n.length; l++) this[n[l]] = o[n[l]];
            Error.captureStackTrace && Error.captureStackTrace(this, i);
            try {
                r && (this.lineNumber = a, Object.defineProperty ? Object.defineProperty(this, "column", {
                    value: s,
                    enumerable: !0
                }) : this.column = s)
            } catch (u) {
            }
        }

        e.__esModule = !0;
        var n = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        i.prototype = new Error, e["default"] = i, t.exports = e["default"]
    }, 479: function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        function r(t) {
            s["default"](t), l["default"](t), c["default"](t), d["default"](t), p["default"](t), g["default"](t), y["default"](t)
        }

        e.__esModule = !0, e.registerDefaultHelpers = r;
        var a = i(480), s = n(a), o = i(481), l = n(o), u = i(482), c = n(u), h = i(483), d = n(h), f = i(484),
            p = n(f), m = i(485), g = n(m), v = i(486), y = n(v)
    }, 480: function (t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(477);
        e["default"] = function (t) {
            t.registerHelper("blockHelperMissing", function (e, i) {
                var r = i.inverse, a = i.fn;
                if (e === !0) return a(this);
                if (e === !1 || null == e) return r(this);
                if (n.isArray(e)) return e.length > 0 ? (i.ids && (i.ids = [i.name]), t.helpers.each(e, i)) : r(this);
                if (i.data && i.ids) {
                    var s = n.createFrame(i.data);
                    s.contextPath = n.appendContextPath(i.data.contextPath, i.name), i = {data: s}
                }
                return a(e, i)
            })
        }, t.exports = e["default"]
    }, 481: function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        e.__esModule = !0;
        var r = i(477), a = i(478), s = n(a);
        e["default"] = function (t) {
            t.registerHelper("each", function (t, e) {
                function i(e, i, a) {
                    u && (u.key = e, u.index = i, u.first = 0 === i, u.last = !!a, c && (u.contextPath = c + e)), l += n(t[e], {
                        data: u,
                        blockParams: r.blockParams([t[e], e], [c + e, null])
                    })
                }

                if (!e) throw new s["default"]("Must pass iterator to #each");
                var n = e.fn, a = e.inverse, o = 0, l = "", u = void 0, c = void 0;
                if (e.data && e.ids && (c = r.appendContextPath(e.data.contextPath, e.ids[0]) + "."), r.isFunction(t) && (t = t.call(this)), e.data && (u = r.createFrame(e.data)), t && "object" == typeof t) if (r.isArray(t)) for (var h = t.length; o < h; o++) o in t && i(o, o, o === t.length - 1); else {
                    var d = void 0;
                    for (var f in t) t.hasOwnProperty(f) && (void 0 !== d && i(d, o - 1), d = f, o++);
                    void 0 !== d && i(d, o - 1, !0)
                }
                return 0 === o && (l = a(this)), l
            })
        }, t.exports = e["default"]
    }, 482: function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        e.__esModule = !0;
        var r = i(478), a = n(r);
        e["default"] = function (t) {
            t.registerHelper("helperMissing", function () {
                if (1 !== arguments.length) throw new a["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"')
            })
        }, t.exports = e["default"]
    }, 483: function (t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(477);
        e["default"] = function (t) {
            t.registerHelper("if", function (t, e) {
                return n.isFunction(t) && (t = t.call(this)), !e.hash.includeZero && !t || n.isEmpty(t) ? e.inverse(this) : e.fn(this)
            }), t.registerHelper("unless", function (e, i) {
                return t.helpers["if"].call(this, e, {fn: i.inverse, inverse: i.fn, hash: i.hash})
            })
        }, t.exports = e["default"]
    }, 484: function (t, e) {
        "use strict";
        e.__esModule = !0, e["default"] = function (t) {
            t.registerHelper("log", function () {
                for (var e = [void 0], i = arguments[arguments.length - 1], n = 0; n < arguments.length - 1; n++) e.push(arguments[n]);
                var r = 1;
                null != i.hash.level ? r = i.hash.level : i.data && null != i.data.level && (r = i.data.level), e[0] = r, t.log.apply(t, e)
            })
        }, t.exports = e["default"]
    }, 485: function (t, e) {
        "use strict";
        e.__esModule = !0, e["default"] = function (t) {
            t.registerHelper("lookup", function (t, e) {
                return t && t[e]
            })
        }, t.exports = e["default"]
    }, 486: function (t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(477);
        e["default"] = function (t) {
            t.registerHelper("with", function (t, e) {
                n.isFunction(t) && (t = t.call(this));
                var i = e.fn;
                if (n.isEmpty(t)) return e.inverse(this);
                var r = e.data;
                return e.data && e.ids && (r = n.createFrame(e.data), r.contextPath = n.appendContextPath(e.data.contextPath, e.ids[0])), i(t, {
                    data: r,
                    blockParams: n.blockParams([t], [r && r.contextPath])
                })
            })
        }, t.exports = e["default"]
    }, 487: function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        function r(t) {
            s["default"](t)
        }

        e.__esModule = !0, e.registerDefaultDecorators = r;
        var a = i(488), s = n(a)
    }, 488: function (t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(477);
        e["default"] = function (t) {
            t.registerDecorator("inline", function (t, e, i, r) {
                var a = t;
                return e.partials || (e.partials = {}, a = function (r, a) {
                    var s = i.partials;
                    i.partials = n.extend({}, s, e.partials);
                    var o = t(r, a);
                    return i.partials = s, o
                }), e.partials[r.args[0]] = r.fn, a
            })
        }, t.exports = e["default"]
    }, 489: function (t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(477), r = {
            methodMap: ["debug", "info", "warn", "error"], level: "info", lookupLevel: function (t) {
                if ("string" == typeof t) {
                    var e = n.indexOf(r.methodMap, t.toLowerCase());
                    t = e >= 0 ? e : parseInt(t, 10)
                }
                return t
            }, log: function (t) {
                if (t = r.lookupLevel(t), "undefined" != typeof console && r.lookupLevel(r.level) <= t) {
                    var e = r.methodMap[t];
                    console[e] || (e = "log");
                    for (var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) n[a - 1] = arguments[a];
                    console[e].apply(console, n)
                }
            }
        };
        e["default"] = r, t.exports = e["default"]
    }, 490: function (t, e) {
        "use strict";

        function i(t) {
            this.string = t
        }

        e.__esModule = !0, i.prototype.toString = i.prototype.toHTML = function () {
            return "" + this.string
        }, e["default"] = i, t.exports = e["default"]
    }, 491: function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        function r(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e["default"] = t, e
        }

        function a(t) {
            var e = t && t[0] || 1, i = v.COMPILER_REVISION;
            if (e !== i) {
                if (e < i) {
                    var n = v.REVISION_CHANGES[i], r = v.REVISION_CHANGES[e];
                    throw new g["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + n + ") or downgrade your runtime to an older version (" + r + ").")
                }
                throw new g["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + t[1] + ").")
            }
        }

        function s(t, e) {
            function i(i, n, r) {
                r.hash && (n = p.extend({}, n, r.hash), r.ids && (r.ids[0] = !0)), i = e.VM.resolvePartial.call(this, i, n, r);
                var a = e.VM.invokePartial.call(this, i, n, r);
                if (null == a && e.compile && (r.partials[r.name] = e.compile(i, t.compilerOptions, e), a = r.partials[r.name](n, r)), null != a) {
                    if (r.indent) {
                        for (var s = a.split("\n"), o = 0, l = s.length; o < l && (s[o] || o + 1 !== l); o++) s[o] = r.indent + s[o];
                        a = s.join("\n")
                    }
                    return a
                }
                throw new g["default"]("The partial " + r.name + " could not be compiled when running in runtime-only mode")
            }

            function n(e) {
                function i(e) {
                    return "" + t.main(r, e, r.helpers, r.partials, s, l, o)
                }

                var a = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], s = a.data;
                n._setup(a), !a.partial && t.useData && (s = h(e, s));
                var o = void 0, l = t.useBlockParams ? [] : void 0;
                return t.useDepths && (o = a.depths ? e != a.depths[0] ? [e].concat(a.depths) : a.depths : [e]), (i = d(t.main, i, r, a.depths || [], s, l))(e, a)
            }

            if (!e) throw new g["default"]("No environment passed to template");
            if (!t || !t.main) throw new g["default"]("Unknown template object: " + typeof t);
            t.main.decorator = t.main_d, e.VM.checkRevision(t.compiler);
            var r = {
                strict: function (t, e) {
                    if (!(e in t)) throw new g["default"]('"' + e + '" not defined in ' + t);
                    return t[e]
                }, lookup: function (t, e) {
                    for (var i = t.length, n = 0; n < i; n++) if (t[n] && null != t[n][e]) return t[n][e]
                }, lambda: function (t, e) {
                    return "function" == typeof t ? t.call(e) : t
                }, escapeExpression: p.escapeExpression, invokePartial: i, fn: function (e) {
                    var i = t[e];
                    return i.decorator = t[e + "_d"], i
                }, programs: [], program: function (t, e, i, n, r) {
                    var a = this.programs[t], s = this.fn(t);
                    return e || r || n || i ? a = o(this, t, s, e, i, n, r) : a || (a = this.programs[t] = o(this, t, s)), a
                }, data: function (t, e) {
                    for (; t && e--;) t = t._parent;
                    return t
                }, merge: function (t, e) {
                    var i = t || e;
                    return t && e && t !== e && (i = p.extend({}, e, t)), i
                }, nullContext: Object.seal({}), noop: e.VM.noop, compilerInfo: t.compiler
            };
            return n.isTop = !0, n._setup = function (i) {
                i.partial ? (r.helpers = i.helpers, r.partials = i.partials, r.decorators = i.decorators) : (r.helpers = r.merge(i.helpers, e.helpers), t.usePartial && (r.partials = r.merge(i.partials, e.partials)), (t.usePartial || t.useDecorators) && (r.decorators = r.merge(i.decorators, e.decorators)))
            }, n._child = function (e, i, n, a) {
                if (t.useBlockParams && !n) throw new g["default"]("must pass block params");
                if (t.useDepths && !a) throw new g["default"]("must pass parent depths");
                return o(r, e, t[e], i, 0, n, a)
            }, n
        }

        function o(t, e, i, n, r, a, s) {
            function o(e) {
                var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], o = s;
                return !s || e == s[0] || e === t.nullContext && null === s[0] || (o = [e].concat(s)), i(t, e, t.helpers, t.partials, r.data || n, a && [r.blockParams].concat(a), o)
            }

            return o = d(i, o, t, s, n, a), o.program = e, o.depth = s ? s.length : 0, o.blockParams = r || 0, o
        }

        function l(t, e, i) {
            return t ? t.call || i.name || (i.name = t, t = i.partials[t]) : t = "@partial-block" === i.name ? i.data["partial-block"] : i.partials[i.name], t
        }

        function u(t, e, i) {
            var n = i.data && i.data["partial-block"];
            i.partial = !0, i.ids && (i.data.contextPath = i.ids[0] || i.data.contextPath);
            var r = void 0;
            if (i.fn && i.fn !== c && !function () {
                i.data = v.createFrame(i.data);
                var t = i.fn;
                r = i.data["partial-block"] = function (e) {
                    var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    return i.data = v.createFrame(i.data), i.data["partial-block"] = n, t(e, i)
                }, t.partials && (i.partials = p.extend({}, i.partials, t.partials))
            }(), void 0 === t && r && (t = r), void 0 === t) throw new g["default"]("The partial " + i.name + " could not be found");
            if (t instanceof Function) return t(e, i)
        }

        function c() {
            return ""
        }

        function h(t, e) {
            return e && "root" in e || (e = e ? v.createFrame(e) : {}, e.root = t), e
        }

        function d(t, e, i, n, r, a) {
            if (t.decorator) {
                var s = {};
                e = t.decorator(e, s, i, n && n[0], r, a, n), p.extend(e, s)
            }
            return e
        }

        e.__esModule = !0, e.checkRevision = a, e.template = s, e.wrapProgram = o, e.resolvePartial = l, e.invokePartial = u, e.noop = c;
        var f = i(477), p = r(f), m = i(478), g = n(m), v = i(476)
    }, 492: function (t, e) {
        (function (i) {
            "use strict";
            e.__esModule = !0, e["default"] = function (t) {
                var e = "undefined" != typeof i ? i : window, n = e.Handlebars;
                t.noConflict = function () {
                    return e.Handlebars === t && (e.Handlebars = n), t
                }
            }, t.exports = e["default"]
        }).call(e, function () {
            return this
        }())
    }, 505: function (t, e, i) {
        (function (t) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            e.__esModule = !0;
            var a = i(506), s = n(a), o = i(507), l = n(o), u = function () {
                function e(i) {
                    if (r(this, e), t.isEmpty(i)) throw new Error("require 'types'.");
                    i.includes("production") ? this.alexBaseUrl = s["default"].getProduction() : this.alexBaseUrl = s["default"].getDev(), this.alexClientIdStorage = new l["default"](i)
                }

                return e.prototype.getBaseUrl = function () {
                    return this.alexBaseUrl
                }, e.prototype.getClientId = function (t) {
                    return this.alexClientIdStorage.getClientId(t)
                }, e.prototype.convertBooleanToString = function (e) {
                    t.each(e, function (i, n) {
                        t.isBoolean(i) && (e[n] = i.toString())
                    })
                }, e
            }();
            e["default"] = u
        }).call(e, i(2))
    }, 506: function (t, e) {
        "use strict";

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        e.__esModule = !0;
        var n = function () {
            function t() {
                i(this, t)
            }

            return t.getDev = function () {
                return "//comment.dev.daum.net"
            }, t.getProduction = function () {
                return "//comment.daum.net"
            }, t
        }();
        e["default"] = n
    }, 507: function (t, e, i) {
        (function (t) {
            "use strict";

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            e.__esModule = !0;
            var n = function () {
                function e(t) {
                    i(this, e), this.isProduction = t.includes("production") || !1, this.clientIdMap = {}, this.clientIdMap.issue = this.isProduction ? "3P895ok381y4AIHnssbr6537" : "2di7wvg1u9hcs04o4goggdnx", this.clientIdMap.newslive = this.isProduction ? "QhX380nNHGFYLA03b83X5XL1" : "j7u745qMPf156g01e424T57Q", this.clientIdMap.event = this.isProduction ? "3d9XCczlbp02H4p432itio8D" : "D0h93Z47JfTQpTl2Gpk42ca4", this.clientIdMap.election2018 = this.isProduction ? "3wil69dTXqV5031XFz4k6L48" : "U749hWc7I3s892o337sHmW1G"
                }

                return e.prototype.getClientId = function (e) {
                    var i = this.clientIdMap[e];
                    if (t.isEmpty(i)) throw new Error("Not found '" + type + "' key.");
                    return i
                }, e
            }();
            e["default"] = n
        }).call(e, i(2))
    }, 509: function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        e.__esModule = !0;
        var a = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
        }, s = i(343), o = n(s), l = function () {
            function t(e) {
                r(this, t), this.baseUrl = e.includes("production") ? "https://media.daum.net/electiondata" : "/electiondata"
            }

            return t.prototype.setApiPath = function (t, e) {
                return t && e ? void(this.apiUrl = this.baseUrl + "/" + t + "/" + e + ".json") : (console.error("dataType, electionId is undefined"), !1)
            }, t.prototype.getPromise = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (!this.apiUrl) return console.error("ElectionDataComponent apiUrl is empty :: use setApiPath(dataType, electionId)"), !1;
                var e = void 0;
                return t && (e = a({}, t, {url: this.apiUrl})), o["default"].get(e ? e : {url: this.apiUrl})
            }, t
        }();
        e["default"] = l
    }, 536: function (t, e, i) {
        (function (t) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            e.__esModule = !0, e.districtIdToCpCommitteeId = e.getShortRegionName = e.districtIdToSidoCd = void 0;
            var a = i(471), s = n(a), o = function () {
                function e() {
                    r(this, e)
                }

                return e.getShortRegionName = function (t) {
                    if (null == t) return t;
                    var e = "";
                    return e = t.length < 5 ? t.replace(/[청]|[라]|[상]|[도]/gi, "") : t.slice(0, 2)
                }, e.districtIdToSidoCd = function (t) {
                    if (null == t) return t;
                    var e = t + "";
                    return e.length > 3 ? parseInt("" + e.slice(1, 3), 10) : t
                }, e.districtIdToCpCommitteeId = function (t) {
                    if (null == t) return t;
                    var e = t + "";
                    return e.length > 5 ? parseInt("" + e.slice(1, 5), 10) : t
                }, e.getStatusClassName = function (t) {
                    switch (t) {
                        case"당선":
                            return "win";
                        case"확실":
                            return "certain";
                        case"유력":
                            return "strong";
                        case"사퇴":
                            return "resign";
                        default:
                            return ""
                    }
                }, e.animateZeroToValue = function (e) {
                    t(e).each(function () {
                        t(this).prop("Counter", 0).animate({Counter: t(this).text().replace(/,/g, "")}, {
                            duration: 500,
                            easing: "swing",
                            step: function (e) {
                                t(this).text(s["default"].getNumberWithComma(Math.ceil(e)))
                            }
                        })
                    })
                }, e.filterPartyKorName = function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "무소속";
                    return ["더불어민주당", "자유한국당", "바른미래당", "민주평화당", "정의당", "무소속"].includes(t) ? t : "기타"
                }, e
            }();
            e["default"] = o;
            e.districtIdToSidoCd = function (t) {
                return o.districtIdToSidoCd(t)
            }, e.getShortRegionName = function (t) {
                return o.getShortRegionName(t)
            }, e.districtIdToCpCommitteeId = function (t) {
                return o.districtIdToCpCommitteeId(t)
            }
        }).call(e, i(1))
    }, 559: function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        e.__esModule = !0;
        var a = i(560), s = n(a), o = i(561), l = n(o), u = function () {
            function t() {
                r(this, t)
            }

            return t.load = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    e = new s["default"](ENV.profiles);
                e.create("#alex-area", {
                    clientId: e.getClientId("election2018"),
                    postId: "@Vote_common",
                    isMobile: t,
                    useDislike: "true",
                    pageLimit: "10",
                    maxLength: "300",
                    hideFooter: "false",
                    kakaoAppkey: l["default"].getMedia(),
                    useSocialShare: "false",
                    useMy: "true",
                    sort: "L",
                    initialLimit: "3",
                    useAttachment: !1
                }), e.loadResource()
            }, t
        }();
        e["default"] = u
    }, 560: function (t, e, i) {
        (function (t, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function a(t) {
                return function () {
                    var e = t.apply(this, arguments);
                    return new Promise(function (t, i) {
                        function n(r, a) {
                            try {
                                var s = e[r](a), o = s.value
                            } catch (l) {
                                return void i(l)
                            }
                            return s.done ? void t(o) : Promise.resolve(o).then(function (t) {
                                n("next", t)
                            }, function (t) {
                                n("throw", t)
                            })
                        }

                        return n("next")
                    })
                }
            }

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function o(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function l(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            e.__esModule = !0;
            var u = i(505), c = r(u), h = i(343), d = r(h), f = function (e) {
                function i(t) {
                    s(this, i);
                    var n = o(this, e.call(this, t));
                    return n.alexCommentScriptUrl = t.includes("production") ? n.alexBaseUrl + "/js/latest/alex.single.min.js" : n.alexBaseUrl + "/js/alex.single.js", n
                }

                return l(i, e), i.prototype.loadResource = function () {
                    function t() {
                        return e.apply(this, arguments)
                    }

                    var e = a(regeneratorRuntime.mark(function i() {
                        var t;
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, d["default"].getScript(this.alexCommentScriptUrl);
                                case 2:
                                    if (t = e.sent, null == t.error) {
                                        e.next = 5;
                                        break
                                    }
                                    throw new Error("Fail to load alex scripts.");
                                case 5:
                                    return e.abrupt("return", t);
                                case 6:
                                case"end":
                                    return e.stop()
                            }
                        }, i, this)
                    }));
                    return t
                }(), i.prototype.create = function (i, r) {
                    var a = t(i);
                    if (null == r.clientId || null == r.postId) throw new Error("required clientId and postId.");
                    e.prototype.convertBooleanToString.call(this, r);
                    var s = n.isEmpty(r.baseUrl) ? this.alexBaseUrl : r.baseUrl,
                        o = [n.isEmpty(a.attr("id")) ? "" : "id='" + a.attr("id") + "'", n.isEmpty(a.attr("class")) ? "" : "class='" + a.attr("class") + "'", 'data-client-id="' + r.clientId + '"', 'data-post-id="' + r.postId + '"', 'data-base-url="' + s + '"', n.isEmpty(r.isMobile) ? "" : 'data-is-mobile="' + r.isMobile + '"', n.isEmpty(r.isReadOnly) ? "" : 'data-is-readonly="' + r.isReadOnly + '"', n.isEmpty(r.useDislike) ? "" : 'data-use-dislike="' + r.useDislike + '"', n.isEmpty(r.pageLimit) ? "" : 'data-page-limit="' + r.pageLimit + '"', n.isEmpty(r.maxLength) ? "" : 'data-max-length="' + r.maxLength + '"', n.isEmpty(r.sort) ? "" : 'data-sort="' + r.sort + '"', n.isEmpty(r.initialLimit) ? "" : 'data-initial-limit="' + r.initialLimit + '"', n.isEmpty(r.useMy) ? "" : 'data-use-my="' + r.useMy + '"', n.isEmpty(r.kakaoAppkey) ? "" : 'data-kakao-appkey="' + r.kakaoAppkey + '"', n.isEmpty(r.hideFooter) ? "" : 'data-hide-footer="' + r.hideFooter + '"', n.isEmpty(r.useSocialShare) ? "" : 'data-use-social-share="' + r.useSocialShare + '"', n.isEmpty(r.useEmoticon) ? "" : 'data-use-emoticon="' + r.useEmoticon + '"', n.isEmpty(r.useAttachment) ? "" : 'data-use-attachment="' + r.useAttachment + '"', n.isEmpty(r.requiredAttachment) ? "" : 'data-required-attachment="' + r.requiredAttachment + '"', n.isEmpty(r.thumbnailType) ? "" : 'data-thumbnail-type="' + r.thumbnailType + '"', n.isEmpty(r.exportClient) ? "" : 'data-export-client="' + r.exportClient + '"'];
                    a.replaceWith("<div " + o.join(" ") + "></div>")
                }, i.prototype.unmount = function () {
                    window.unmountAlex()
                }, i.prototype.remount = function (t, e) {
                    window.remountAlex(t, e)
                }, i
            }(c["default"]);
            e["default"] = f
        }).call(e, i(1), i(2))
    }, 561: function (t, e) {
        "use strict";

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        e.__esModule = !0;
        var n = function () {
            function t() {
                i(this, t)
            }

            return t.getCommon = function () {
                return "53e566aa17534bc816eb1b5d8f7415ee"
            }, t.getMedia = function () {
                return "9076ba452fea1a434141d6b6a2c11a3c"
            }, t.getSports = function () {
                return "24adf3965295ff5aa23511742c4753ee"
            }, t
        }();
        e["default"] = n
    }, 578: function (t, e, i) {
        var n, r, a, n, r, a, n, r,
            s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            };
        !function (s, o) {
            n = [i(579), i(1)], a = o, r = "function" == typeof a ? a.apply(e, n) : a, !(void 0 !== r && (t.exports = r))
        }("undefined" != typeof window ? window : void 0, function (o, l) {
            if (!o && !l) return console.log("dependency error"), null;
            var u = {};
            Raphael.floor = function (t) {
                return t *= 1e4, t = Math.floor(t), t / 1e4
            }, Raphael.fn.animateViewBox = function (t, e, i, n, r, a, s) {
                var l = parseFloat(this._viewBox ? this._viewBox[0] : 0),
                    u = parseFloat(this._viewBox ? this._viewBox[1] : 0),
                    c = parseFloat(this._viewBox ? this._viewBox[2] : this.width),
                    h = parseFloat(this._viewBox ? this._viewBox[3] : this.height), d = t - l, f = e - u, p = i - c,
                    m = n - h, g = this;
                a = a || "linear";
                var v = 10, y = o.floor(r / v), x = 1, b = o.easing_formulas[a], w = setInterval(function () {
                    var t = x / y;
                    g.setViewBox(o.floor(l + d * b(t)), o.floor(u + f * b(t)), o.floor(c + p * b(t)), o.floor(h + m * b(t)), !1), x++ >= y && (clearInterval(w), s && s())
                }, v)
            }, Raphael.fn.importSVG = function (t, e) {
                "use strict";
                var i = this.set(), n = {}, r = {"text-anchor": "start"}, a = function (t) {
                        return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                    },
                    s = Function.prototype.bind && Array.prototype.forEach ? Function.prototype.call.bind(Array.prototype.forEach) : function (t, e) {
                        for (var i = 0, n = t.length; i < n; i++) e(t[i], i, t)
                    };
                this.parseElement = function (t) {
                    if (3 !== t.nodeType) {
                        var s, o, l, u, c = {stroke: "none", "stroke-width": 1, fill: "black"}, h = t.nodeName;
                        if (t.attributes) for (s = 0, o = t.attributes.length; s < o; s++) c[t.attributes[s].name] = t.attributes[s].value;
                        switch (h) {
                            case"svg":
                            case"g":
                                var d = t.getAttribute("id"), f = t.getAttribute("class");
                                if (d || f) {
                                    var p = t.childNodes;
                                    for (s = 0, o = p.length; s < o; s++) {
                                        var m = p[s];
                                        3 !== m.nodeType && (d && m.setAttribute("data-svg-group", d), f && m.setAttribute("class", (m.getAttribute("class") || "") + " " + f))
                                    }
                                }
                                var g = this.set();
                                for (s = 0, o = t.childNodes.length; s < o; s++) g.push(this.parseElement(t.childNodes.item(s)));
                                if (c.transform) {
                                    var v = /translate\(([^,]+),([^,]+)\)/.exec(c.transform);
                                    3 == v.length && g.translate(v[1], v[2])
                                }
                                return "none" === c.display && g.hide(), void(d && t.childNodes.length && (n[d] = g));
                            case"rect":
                                c.rx && c.ry ? (c.r = (+(c.rx || 0) + +(c.ry || 0)) / 2, delete c.rx, delete c.ry) : (c.r = c.rx || c.ry || 0, delete c.rx, delete c.ry);
                            case"circle":
                            case"ellipse":
                                u = this[h]();
                                break;
                            case"path":
                                u = this.path(c.d), delete c.d;
                                break;
                            case"polygon":
                                u = this.polygon(c);
                                break;
                            case"polyline":
                                u = this.polyline(c);
                                break;
                            case"line":
                                u = this.line(c);
                                break;
                            case"image":
                                u = this.image();
                                break;
                            case"text":
                                for (l in r) !c[l] && r.hasOwnProperty(l) && (c[l] = r[l]);
                                u = this.text(c.x, c.y, t.text || t.textContent || t.innerText || t.outerText);
                                break;
                            default:
                                var y = t.getElementsByTagName("svg");
                                return void(y.length && (y[0].normalize(), this.parseElement(y[0])))
                        }
                        var x = c.transform;
                        if (x) {
                            x = x.substring(7, x.length - 1).split(" ");
                            for (var b in x) x[b] = parseFloat(x[b]);
                            var w = u.matrix;
                            w.add.apply(w, x), u.transform(w.toTransformString()), delete c.transform
                        }
                        if (c.style) {
                            var _, k = c.style.split(";");
                            for (s = 0; s < k.length; s++) _ = k[s].split(":"), l = a(_[0]), l && (c[l] = a(_[1]))
                        }
                        u.attr(c);
                        for (var C = 0; C < t.attributes.length; C++) {
                            var E = t.attributes[C];
                            0 === E.name.indexOf("data-") && u.data(E.name.replace(/data-/, ""), E.value)
                        }
                        var S = t.getAttribute("class");
                        S && u.node.setAttribute("class", (u.node.getAttribute("class") || "") + " " + S), u.node.setAttribute("data-svg", h);
                        var B = t.getAttribute("data-svg-group");
                        B && u.node.setAttribute("data-svg-group", B);
                        var T = t.getAttribute("id");
                        return T && (u.node.id = T), e && e.parseElement && (u = e.parseElement(u, t)), u && i.push(u), u
                    }
                }, this.parseElement(t);
                var o = this;
                s(t.getElementsByTagName("style"), function (t) {
                    var e = document.createElement("style"), i = t.textContent || t.text;
                    e.type = "text/css", document.head.appendChild(e);
                    var n;
                    e.styleSheet ? (e.styleSheet.cssText = i, n = e.styleSheet.rules) : (e.appendChild(document.createTextNode(i)), n = e.sheet.cssRules), s(n, function (t) {
                        var e = t.style, i = document.querySelectorAll(t.selectorText), n = {};
                        for (var r in Raphael._availableAttrs) {
                            var a = e[r];
                            a && (n[r] = "number" == typeof Raphael._availableAttrs[r] ? parseFloat(a) : a)
                        }
                        s(i, function (t) {
                            o.getById(t.raphaelid).attr(n)
                        })
                    })
                });
                var l, u = !1;
                for (l in n) {
                    u = !0;
                    break
                }
                return u && (i.groups = n), i
            }, Raphael.fn.line = function (t) {
                var e = ["M", t.x1, t.y1, "L", t.x2, t.y2, "Z"];
                return delete t.x1, delete t.y1, delete t.x2, delete t.y2, this.path(e)
            }, Raphael.fn.polygon = function (t) {
                for (var e = t.points, i = ["M"], n = e.split(" "), r = 0; r < n.length; r++) {
                    for (var a = n[r].split(","), s = 0; s < a.length; s++) {
                        var o = parseFloat(a[s]);
                        isNaN(o) || i.push(o)
                    }
                    0 === r && i.push("L")
                }
                return i.push("Z"), delete t.points, this.path(i)
            }, Raphael.fn.polyline = function (t) {
                for (var e = t.points, i = ["M"], n = e.split(" "), r = 0; r < n.length; r++) {
                    for (var a = n[r].split(","), s = 0; s < a.length; s++) {
                        var o = parseFloat(a[s]);
                        isNaN(o) || i.push(o)
                    }
                    0 === r && i.push("L")
                }
                return delete t.points, this.path(i)
            }, Raphael.el.getOriginal = function (t) {
                var e = this.data("ori-" + t);
                return e || (e = this.attr(t), this.setOriginal(t, e)), e
            }, Raphael.el.setOriginal = function () {
                if (1 === arguments.length) if ("object" === s(arguments.length <= 0 ? void 0 : arguments[0])) {
                    var t = arguments.length <= 0 ? void 0 : arguments[0];
                    for (var e in t) {
                        var i = t[e];
                        this.data("ori-" + e, i)
                    }
                } else {
                    var n = arguments.length <= 0 ? void 0 : arguments[0], r = this.attr(n);
                    this.data("ori-" + n, r)
                } else {
                    var a = arguments.length <= 0 ? void 0 : arguments[0],
                        o = arguments.length <= 1 ? void 0 : arguments[1];
                    this.data("ori-" + a, o)
                }
                return this
            }, Raphael.el.unbind = function (t) {
                for (var e = this.events || [], i = e.length; i--;) e[i].name === t && (e[i].unbind(), e.splice(i, 1), !e.length && delete this.events);
                return this
            }, Raphael.el.trigger = function (t) {
                var e = null;
                e = "string" == typeof t ? t : t.type;
                for (var i = this.events.length, n = 0; n < i; n++) this.events[n].name === e && this.events[n].f(t)
            }, Raphael.el.getCachedBBox = function () {
                var t = this.data("bbox");
                return t || (this.setCachedBBox(), t = this.data("bbox")), t
            }, Raphael.el.setCachedBBox = function (t, e) {
                var i = !1;
                if ("SVG" === Raphael.type.toUpperCase() && t) {
                    e = e || 1, i = !0;
                    var n = this.data("x"), r = this.data("y"), a = this.data("width"), s = this.data("height");
                    if ("undefined" == typeof n ? i = !1 : "undefined" == typeof r ? i = !1 : "undefined" == typeof a ? i = !1 : "undefined" == typeof s && (i = !1), i) {
                        var o = {
                            x: parseFloat(n) * e,
                            y: parseFloat(r) * e,
                            width: parseFloat(a) * e,
                            height: parseFloat(s) * e
                        };
                        this.data("bbox", o)
                    }
                }
                i || this.data("bbox", this.getBBox())
            }, Raphael.el.removeCachedBBox = function () {
                this.removeData("bbox")
            }, function (s, o) {
                n = [i(1)], a = o, r = "function" == typeof a ? a.apply(e, n) : a, !(void 0 !== r && (t.exports = r))
            }("undefined" != typeof window ? window : this, function (t) {
                function e(t) {
                    if (t in d.style) return t;
                    for (var e = ["Moz", "Webkit", "O", "ms"], i = t.charAt(0).toUpperCase() + t.substr(1), n = 0; n < e.length; ++n) {
                        var r = e[n] + i;
                        if (r in d.style) return r
                    }
                }

                function i() {
                    return d.style[f.transform] = "", d.style[f.transform] = "rotateY(90deg)", "" !== d.style[f.transform]
                }

                function n(t) {
                    return "string" == typeof t && this.parse(t), this
                }

                function r(t, e, i) {
                    e === !0 ? t.queue(i) : e ? t.queue(e, i) : t.each(function () {
                        i.call(this)
                    })
                }

                function a(e) {
                    var i = [];
                    return t.each(e, function (e) {
                        e = t.camelCase(e), e = t.transit.propertyMap[e] || t.cssProps[e] || e, e = u(e), f[e] && (e = u(f[e])), t.inArray(e, i) === -1 && i.push(e)
                    }), i
                }

                function o(e, i, n, r) {
                    var s = a(e);
                    t.cssEase[n] && (n = t.cssEase[n]);
                    var o = "" + h(i) + " " + n;
                    parseInt(r, 10) > 0 && (o += " " + h(r));
                    var l = [];
                    return t.each(s, function (t, e) {
                        l.push(e + " " + o)
                    }), l.join(", ")
                }

                function l(e, i) {
                    i || (t.cssNumber[e] = !0), t.transit.propertyMap[e] = f.transform, t.cssHooks[e] = {
                        get: function (i) {
                            var n = t(i).css("transit:transform");
                            return n.get(e)
                        }, set: function (i, n) {
                            var r = t(i).css("transit:transform");
                            r.setFromString(e, n), t(i).css({"transit:transform": r})
                        }
                    }
                }

                function u(t) {
                    return t.replace(/([A-Z])/g, function (t) {
                        return "-" + t.toLowerCase()
                    })
                }

                function c(t, e) {
                    return "string" != typeof t || t.match(/^[\-0-9\.]+$/) ? "" + t + e : t
                }

                function h(e) {
                    var i = e;
                    return "string" != typeof i || i.match(/^[\-0-9\.]+/) || (i = t.fx.speeds[i] || t.fx.speeds._default), c(i, "ms")
                }

                t.transit = {
                    version: "0.9.12",
                    propertyMap: {
                        marginLeft: "margin",
                        marginRight: "margin",
                        marginBottom: "margin",
                        marginTop: "margin",
                        paddingLeft: "padding",
                        paddingRight: "padding",
                        paddingBottom: "padding",
                        paddingTop: "padding"
                    },
                    enabled: !0,
                    useTransitionEnd: !1
                };
                var d = document.createElement("div"), f = {},
                    p = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
                f.transition = e("transition"), f.transitionDelay = e("transitionDelay"), f.transform = e("transform"), f.transformOrigin = e("transformOrigin"), f.filter = e("Filter"), f.transform3d = i();
                var m = {
                    transition: "transitionend",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    WebkitTransition: "webkitTransitionEnd",
                    msTransition: "MSTransitionEnd"
                }, g = f.transitionEnd = m[f.transition] || null;
                for (var v in f) f.hasOwnProperty(v) && "undefined" == typeof t.support[v] && (t.support[v] = f[v]);
                return d = null, t.cssEase = {
                    _default: "ease",
                    "in": "ease-in",
                    out: "ease-out",
                    "in-out": "ease-in-out",
                    snap: "cubic-bezier(0,1,.5,1)",
                    easeInCubic: "cubic-bezier(.550,.055,.675,.190)",
                    easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                    easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                    easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                    easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                    easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                    easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                    easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                    easeInOutExpo: "cubic-bezier(1,0,0,1)",
                    easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                    easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                    easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                    easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                    easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                    easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                    easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                    easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                    easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                    easeInSine: "cubic-bezier(.47,0,.745,.715)",
                    easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                    easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                    easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                    easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                    easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                }, t.cssHooks["transit:transform"] = {
                    get: function (e) {
                        return t(e).data("transform") || new n
                    }, set: function (e, i) {
                        var r = i;
                        r instanceof n || (r = new n(r)), "WebkitTransform" !== f.transform || p ? e.style[f.transform] = r.toString() : e.style[f.transform] = r.toString(!0), t(e).data("transform", r)
                    }
                }, t.cssHooks.transform = {set: t.cssHooks["transit:transform"].set}, t.cssHooks.filter = {
                    get: function (t) {
                        return t.style[f.filter]
                    }, set: function (t, e) {
                        t.style[f.filter] = e
                    }
                }, t.fn.jquery < "1.8" && (t.cssHooks.transformOrigin = {
                    get: function (t) {
                        return t.style[f.transformOrigin]
                    }, set: function (t, e) {
                        t.style[f.transformOrigin] = e
                    }
                }, t.cssHooks.transition = {
                    get: function (t) {
                        return t.style[f.transition]
                    }, set: function (t, e) {
                        t.style[f.transition] = e
                    }
                }), l("scale"), l("scaleX"), l("scaleY"), l("translate"), l("rotate"), l("rotateX"), l("rotateY"), l("rotate3d"), l("perspective"), l("skewX"), l("skewY"), l("x", !0), l("y", !0), n.prototype = {
                    setFromString: function (t, e) {
                        var i = "string" == typeof e ? e.split(",") : e.constructor === Array ? e : [e];
                        i.unshift(t), n.prototype.set.apply(this, i)
                    }, set: function (t) {
                        var e = Array.prototype.slice.apply(arguments, [1]);
                        this.setter[t] ? this.setter[t].apply(this, e) : this[t] = e.join(",")
                    }, get: function (t) {
                        return this.getter[t] ? this.getter[t].apply(this) : this[t] || 0
                    }, setter: {
                        rotate: function (t) {
                            this.rotate = c(t, "deg")
                        }, rotateX: function (t) {
                            this.rotateX = c(t, "deg")
                        }, rotateY: function (t) {
                            this.rotateY = c(t, "deg")
                        }, scale: function (t, e) {
                            void 0 === e && (e = t), this.scale = t + "," + e
                        }, skewX: function (t) {
                            this.skewX = c(t, "deg")
                        }, skewY: function (t) {
                            this.skewY = c(t, "deg")
                        }, perspective: function (t) {
                            this.perspective = c(t, "px")
                        }, x: function (t) {
                            this.set("translate", t, null)
                        }, y: function (t) {
                            this.set("translate", null, t)
                        }, translate: function (t, e) {
                            void 0 === this._translateX && (this._translateX = 0), void 0 === this._translateY && (this._translateY = 0), null !== t && void 0 !== t && (this._translateX = c(t, "px")), null !== e && void 0 !== e && (this._translateY = c(e, "px")), this.translate = this._translateX + "," + this._translateY
                        }
                    }, getter: {
                        x: function () {
                            return this._translateX || 0
                        }, y: function () {
                            return this._translateY || 0
                        }, scale: function () {
                            var t = (this.scale || "1,1").split(",");
                            return t[0] && (t[0] = parseFloat(t[0])), t[1] && (t[1] = parseFloat(t[1])), t[0] === t[1] ? t[0] : t
                        }, rotate3d: function () {
                            for (var t = (this.rotate3d || "0,0,0,0deg").split(","), e = 0; e <= 3; ++e) t[e] && (t[e] = parseFloat(t[e]));
                            return t[3] && (t[3] = c(t[3], "deg")), t
                        }
                    }, parse: function (t) {
                        var e = this;
                        t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function (t, i, n) {
                            e.setFromString(i, n)
                        })
                    }, toString: function (t) {
                        var e = [];
                        for (var i in this) if (this.hasOwnProperty(i)) {
                            if (!f.transform3d && ("rotateX" === i || "rotateY" === i || "perspective" === i || "transformOrigin" === i)) continue;
                            "_" !== i[0] && (t && "scale" === i ? e.push(i + "3d(" + this[i] + ",1)") : t && "translate" === i ? e.push(i + "3d(" + this[i] + ",0)") : e.push(i + "(" + this[i] + ")"))
                        }
                        return e.join(" ")
                    }
                }, t.fn.transition = t.fn.transit = function (e, i, n, a) {
                    var l = this, u = 0, c = !0, d = t.extend(!0, {}, e);
                    "function" == typeof i && (a = i, i = void 0), "object" === ("undefined" == typeof i ? "undefined" : s(i)) && (n = i.easing, u = i.delay || 0, c = "undefined" == typeof i.queue || i.queue, a = i.complete, i = i.duration), "function" == typeof n && (a = n, n = void 0), "undefined" != typeof d.easing && (n = d.easing, delete d.easing), "undefined" != typeof d.duration && (i = d.duration, delete d.duration), "undefined" != typeof d.complete && (a = d.complete, delete d.complete), "undefined" != typeof d.queue && (c = d.queue, delete d.queue), "undefined" != typeof d.delay && (u = d.delay, delete d.delay), "undefined" == typeof i && (i = t.fx.speeds._default), "undefined" == typeof n && (n = t.cssEase._default), i = h(i);
                    var p = o(d, i, n, u), m = t.transit.enabled && f.transition,
                        v = m ? parseInt(i, 10) + parseInt(u, 10) : 0;
                    if (0 === v) {
                        var y = function (t) {
                            l.css(d), a && a.apply(l), t && t()
                        };
                        return r(l, c, y), l
                    }
                    var x = {}, b = function (e) {
                        var i = !1, n = function r() {
                            i && l.unbind(g, r), v > 0 && l.each(function () {
                                this.style[f.transition] = x[this] || null
                            }), "function" == typeof a && a.apply(l), "function" == typeof e && e()
                        };
                        v > 0 && g && t.transit.useTransitionEnd ? (i = !0, l.bind(g, n)) : window.setTimeout(n, v), l.each(function () {
                            v > 0 && (this.style[f.transition] = p), t(this).css(d)
                        })
                    }, w = function (t) {
                        this.offsetWidth, b(t)
                    };
                    return r(l, c, w), this
                }, t.transit.getTransitionValue = o, t
            }), function (t) {
                !function (t, e) {
                    "use strict";
                    var i = "0.7.18", n = "", r = "?", a = "function", o = "object", l = "string", u = "major",
                        c = "model", h = "name", d = "type", f = "vendor", p = "version", m = "architecture",
                        g = "console", v = "mobile", y = "tablet", x = "smarttv", b = "wearable", w = "embedded", _ = {
                            extend: function (t, e) {
                                var i = {};
                                for (var n in t) e[n] && e[n].length % 2 === 0 ? i[n] = e[n].concat(t[n]) : i[n] = t[n];
                                return i
                            }, has: function (t, e) {
                                return "string" == typeof t && e.toLowerCase().indexOf(t.toLowerCase()) !== -1
                            }, lowerize: function (t) {
                                return t.toLowerCase()
                            }, major: function (t) {
                                return ("undefined" == typeof t ? "undefined" : s(t)) === l ? t.replace(/[^\d\.]/g, "").split(".")[0] : e
                            }, trim: function (t) {
                                return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                            }
                        }, k = {
                            rgx: function (t, i) {
                                for (var n, r, l, u, c, h, d = 0; d < i.length && !c;) {
                                    var f = i[d], p = i[d + 1];
                                    for (n = r = 0; n < f.length && !c;) if (c = f[n++].exec(t)) for (l = 0; l < p.length; l++) h = c[++r], u = p[l], ("undefined" == typeof u ? "undefined" : s(u)) === o && u.length > 0 ? 2 == u.length ? s(u[1]) == a ? this[u[0]] = u[1].call(this, h) : this[u[0]] = u[1] : 3 == u.length ? s(u[1]) !== a || u[1].exec && u[1].test ? this[u[0]] = h ? h.replace(u[1], u[2]) : e : this[u[0]] = h ? u[1].call(this, h, u[2]) : e : 4 == u.length && (this[u[0]] = h ? u[3].call(this, h.replace(u[1], u[2])) : e) : this[u] = h ? h : e;
                                    d += 2
                                }
                            }, str: function (t, i) {
                                for (var n in i) if (s(i[n]) === o && i[n].length > 0) {
                                    for (var a = 0; a < i[n].length; a++) if (_.has(i[n][a], t)) return n === r ? e : n
                                } else if (_.has(i[n], t)) return n === r ? e : n;
                                return t
                            }
                        }, C = {
                            browser: {
                                oldsafari: {
                                    version: {
                                        "1.0": "/8",
                                        1.2: "/1",
                                        1.3: "/3",
                                        "2.0": "/412",
                                        "2.0.2": "/416",
                                        "2.0.3": "/417",
                                        "2.0.4": "/419",
                                        "?": "/"
                                    }
                                }
                            },
                            device: {
                                amazon: {model: {"Fire Phone": ["SD", "KF"]}},
                                sprint: {model: {"Evo Shift 4G": "7373KT"}, vendor: {HTC: "APA", Sprint: "Sprint"}}
                            },
                            os: {
                                windows: {
                                    version: {
                                        ME: "4.90",
                                        "NT 3.11": "NT3.51",
                                        "NT 4.0": "NT4.0",
                                        2000: "NT 5.0",
                                        XP: ["NT 5.1", "NT 5.2"],
                                        Vista: "NT 6.0",
                                        7: "NT 6.1",
                                        8: "NT 6.2",
                                        8.1: "NT 6.3",
                                        10: ["NT 6.4", "NT 10.0"],
                                        RT: "ARM"
                                    }
                                }
                            }
                        }, E = {
                            browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [h, p], [/(opios)[\/\s]+([\w\.]+)/i], [[h, "Opera Mini"], p], [/\s(opr)\/([\w\.]+)/i], [[h, "Opera"], p], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i], [h, p], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[h, "IE"], p], [/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i], [[h, "Edge"], p], [/(yabrowser)\/([\w\.]+)/i], [[h, "Yandex"], p], [/(puffin)\/([\w\.]+)/i], [[h, "Puffin"], p], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [[h, "UCBrowser"], p], [/(comodo_dragon)\/([\w\.]+)/i], [[h, /_/g, " "], p], [/(micromessenger)\/([\w\.]+)/i], [[h, "WeChat"], p], [/(qqbrowserlite)\/([\w\.]+)/i], [h, p], [/(QQ)\/([\d\.]+)/i], [h, p], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i], [h, p], [/(BIDUBrowser)[\/\s]?([\w\.]+)/i], [h, p], [/(2345Explorer)[\/\s]?([\w\.]+)/i], [h, p], [/(MetaSr)[\/\s]?([\w\.]+)/i], [h], [/(LBBROWSER)/i], [h], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [p, [h, "MIUI Browser"]], [/;fbav\/([\w\.]+);/i], [p, [h, "Facebook"]], [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i], [h, p], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [p, [h, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[h, /(.+)/, "$1 WebView"], p], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[h, /(.+(?:g|us))(.+)/, "$1 $2"], p], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [p, [h, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [h, p], [/(dolfin)\/([\w\.]+)/i], [[h, "Dolphin"], p], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[h, "Chrome"], p], [/(coast)\/([\w\.]+)/i], [[h, "Opera Coast"], p], [/fxios\/([\w\.-]+)/i], [p, [h, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [p, [h, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [p, h], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [[h, "GSA"], p], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [h, [p, k.str, C.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [h, p], [/(navigator|netscape)\/([\w\.-]+)/i], [[h, "Netscape"], p], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [h, p]],
                            cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[m, "amd64"]], [/(ia32(?=;))/i], [[m, _.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[m, "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [[m, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[m, /ower/, "", _.lowerize]], [/(sun4\w)[;\)]/i], [[m, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [[m, _.lowerize]]],
                            device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [c, f, [d, y]], [/applecoremedia\/[\w\.]+ \((ipad)/], [c, [f, "Apple"], [d, y]], [/(apple\s{0,1}tv)/i], [[c, "Apple TV"], [f, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [f, c, [d, y]], [/(kf[A-z]+)\sbuild\/.+silk\//i], [c, [f, "Amazon"], [d, y]], [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i], [[c, k.str, C.device.amazon.model], [f, "Amazon"], [d, v]], [/android.+aft([bms])\sbuild/i], [c, [f, "Amazon"], [d, x]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [c, f, [d, v]], [/\((ip[honed|\s\w*]+);/i], [c, [f, "Apple"], [d, v]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [f, c, [d, v]], [/\(bb10;\s(\w+)/i], [c, [f, "BlackBerry"], [d, v]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i], [c, [f, "Asus"], [d, y]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[f, "Sony"], [c, "Xperia Tablet"], [d, y]], [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i], [c, [f, "Sony"], [d, v]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [f, c, [d, g]], [/android.+;\s(shield)\sbuild/i], [c, [f, "Nvidia"], [d, g]], [/(playstation\s[34portablevi]+)/i], [c, [f, "Sony"], [d, g]], [/(sprint\s(\w+))/i], [[f, k.str, C.device.sprint.vendor], [c, k.str, C.device.sprint.model], [d, v]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [f, c, [d, y]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [f, [c, /_/g, " "], [d, v]], [/(nexus\s9)/i], [c, [f, "HTC"], [d, y]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i], [c, [f, "Huawei"], [d, v]], [/(microsoft);\s(lumia[\s\w]+)/i], [f, c, [d, v]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [c, [f, "Microsoft"], [d, g]], [/(kin\.[onetw]{3})/i], [[c, /\./g, " "], [f, "Microsoft"], [d, v]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [c, [f, "Motorola"], [d, v]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [c, [f, "Motorola"], [d, y]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[f, _.trim], [c, _.trim], [d, x]], [/hbbtv.+maple;(\d+)/i], [[c, /^/, "SmartTV"], [f, "Samsung"], [d, x]], [/\(dtv[\);].+(aquos)/i], [c, [f, "Sharp"], [d, x]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[f, "Samsung"], c, [d, y]], [/smart-tv.+(samsung)/i], [f, [d, x], c], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i], [[f, "Samsung"], c, [d, v]], [/sie-(\w*)/i], [c, [f, "Siemens"], [d, v]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i], [[f, "Nokia"], c, [d, v]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [c, [f, "Acer"], [d, y]], [/android.+([vl]k\-?\d{3})\s+build/i], [c, [f, "LG"], [d, y]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[f, "LG"], c, [d, y]], [/(lg) netcast\.tv/i], [f, c, [d, x]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i], [c, [f, "LG"], [d, v]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [c, [f, "Lenovo"], [d, y]], [/linux;.+((jolla));/i], [f, c, [d, v]], [/((pebble))app\/[\d\.]+\s/i], [f, c, [d, b]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [f, c, [d, v]], [/crkey/i], [[c, "Chromecast"], [f, "Google"]], [/android.+;\s(glass)\s\d/i], [c, [f, "Google"], [d, b]], [/android.+;\s(pixel c)\s/i], [c, [f, "Google"], [d, y]], [/android.+;\s(pixel [xl2]{1,2}|pixel)\s/i], [c, [f, "Google"], [d, v]], [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i], [[c, /_/g, " "], [f, "Xiaomi"], [d, v]], [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i], [[c, /_/g, " "], [f, "Xiaomi"], [d, y]], [/android.+;\s(m[1-5]\snote)\sbuild/i], [c, [f, "Meizu"], [d, y]], [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i], [c, [f, "OnePlus"], [d, v]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i], [c, [f, "RCA"], [d, y]], [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i], [c, [f, "Dell"], [d, y]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i], [c, [f, "Verizon"], [d, y]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i], [[f, "Barnes & Noble"], c, [d, y]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i], [c, [f, "NuVision"], [d, y]], [/android.+;\s(k88)\sbuild/i], [c, [f, "ZTE"], [d, y]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i], [c, [f, "Swiss"], [d, v]], [/android.+[;\/]\s*(zur\d{3})\s+build/i], [c, [f, "Swiss"], [d, y]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i], [c, [f, "Zeki"], [d, y]], [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i], [[f, "Dragon Touch"], c, [d, y]], [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i], [c, [f, "Insignia"], [d, y]], [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i], [c, [f, "NextBook"], [d, y]], [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[f, "Voice"], c, [d, v]], [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i], [[f, "LvTel"], c, [d, v]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i], [c, [f, "Envizen"], [d, y]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i], [f, c, [d, y]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i], [c, [f, "MachSpeed"], [d, y]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i], [f, c, [d, y]], [/android.+[;\/]\s*TU_(1491)\s+build/i], [c, [f, "Rotor"], [d, y]], [/android.+(KS(.+))\s+build/i], [c, [f, "Amazon"], [d, y]], [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i], [f, c, [d, y]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[d, _.lowerize], f, c], [/(android[\w\.\s\-]{0,9});.+build/i], [c, [f, "Generic"]]],
                            engine: [[/windows.+\sedge\/([\w\.]+)/i], [p, [h, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [h, p], [/rv\:([\w\.]{1,9}).+(gecko)/i], [p, h]],
                            os: [[/microsoft\s(windows)\s(vista|xp)/i], [h, p], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [h, [p, k.str, C.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[h, "Windows"], [p, k.str, C.os.windows.version]], [/\((bb)(10);/i], [[h, "BlackBerry"], p], [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i], [h, p], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i], [[h, "Symbian"], p], [/\((series40);/i], [h], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[h, "Firefox OS"], p], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i], [h, p], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[h, "Chromium OS"], p], [/(sunos)\s?([\w\.\d]*)/i], [[h, "Solaris"], p], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i], [h, p], [/(haiku)\s(\w+)/i], [h, p], [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i], [[p, /_/g, "."], [h, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i], [[h, "Mac OS"], [p, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]*)/i], [h, p]]
                        }, S = function B(i, r) {
                            if ("object" === ("undefined" == typeof i ? "undefined" : s(i)) && (r = i, i = e), !(this instanceof B)) return new B(i, r).getResult();
                            var a = i || (t && t.navigator && t.navigator.userAgent ? t.navigator.userAgent : n),
                                o = r ? _.extend(E, r) : E;
                            return this.getBrowser = function () {
                                var t = {name: e, version: e};
                                return k.rgx.call(t, a, o.browser), t.major = _.major(t.version), t
                            }, this.getCPU = function () {
                                var t = {architecture: e};
                                return k.rgx.call(t, a, o.cpu), t
                            }, this.getDevice = function () {
                                var t = {vendor: e, model: e, type: e};
                                return k.rgx.call(t, a, o.device), t
                            }, this.getEngine = function () {
                                var t = {name: e, version: e};
                                return k.rgx.call(t, a, o.engine), t
                            }, this.getOS = function () {
                                var t = {name: e, version: e};
                                return k.rgx.call(t, a, o.os), t
                            }, this.getResult = function () {
                                return {
                                    ua: this.getUA(),
                                    browser: this.getBrowser(),
                                    engine: this.getEngine(),
                                    os: this.getOS(),
                                    device: this.getDevice(),
                                    cpu: this.getCPU()
                                }
                            }, this.getUA = function () {
                                return a
                            }, this.setUA = function (t) {
                                return a = t, this
                            }, this
                        };
                    S.VERSION = i, S.BROWSER = {
                        NAME: h,
                        MAJOR: u,
                        VERSION: p
                    }, S.CPU = {ARCHITECTURE: m}, S.DEVICE = {
                        MODEL: c,
                        VENDOR: f,
                        TYPE: d,
                        CONSOLE: g,
                        MOBILE: v,
                        SMARTTV: x,
                        TABLET: y,
                        WEARABLE: b,
                        EMBEDDED: w
                    }, S.ENGINE = {NAME: h, VERSION: p}, S.OS = {NAME: h, VERSION: p}, t.UAParser = S
                }("object" === ("undefined" == typeof t ? "undefined" : s(t)) ? t : this)
            }(u);
            var c = function (t) {
                try {
                    this.checkDependency() && (l.extend(!0, this, t), this.options.dev && (window._map = this)), this.props.ua = this.checkUserAgent(), this.setCompatibilityProp()
                } catch (e) {
                    if ("Error" === e.name) throw e
                }
            };
            c.fn = c.prototype = {
                el: null,
                wrapper: null,
                map: null,
                svg: {root: null},
                layer: {ui: null, svg: null, marker: null},
                dataMap: {codeMap: {}},
                props: {
                    render: !1,
                    viewBox: [],
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                    ua: {},
                    zoom: 1,
                    scale: 1,
                    scaleSVG: 1,
                    html5: !0,
                    type: "SVG",
                    ie8: !1,
                    level: 1,
                    selectedElem: null
                },
                options: {
                    dev: !1,
                    debug: !1,
                    device: "pc",
                    preset: "election2018",
                    disableArea: [],
                    defaultEvent: !0,
                    transitionDelay: 400,
                    animate: !0,
                    jsAnimate: !1,
                    scaleLimit: 99,
                    scaleOffset: {28: -.3, 47: -.3},
                    feature: {zoom: !0},
                    strokeLimit: 1,
                    depth: 2,
                    strictLayer: !0,
                    orientationRender: !1,
                    resizeRender: !1,
                    fit: 0,
                    ui: {zoomButton: !1, nameTag: !0, stickyLayer: !0},
                    uiOptions: {nameTag: {originCode: 7, originOffset: {x: 0, y: 9}}},
                    log: null,
                    overflow: {ui: !0, map: !1},
                    style: {
                        "default": {fill: "#ffffff", stroke: "#C4C7CC"},
                        blur: {stroke: "none", "fill-opacity": 1, "stroke-opacity": 1, "stroke-width": 1},
                        focus: {stroke: "#000000", "stroke-width": 1, "stroke-opacity": .25, "fill-opacity": 1},
                        outDepth: {stroke: "#000000", "fill-opacity": .01, "stroke-opacity": .2},
                        disabled: {fill: "#f1f5f9", "fill-opacity": 1},
                        dimmed: {fill: "#f1f5f9", stroke: "#C4C7CC", "stroke-opacity": 1, "fill-opacity": 1},
                        hover: {fill: "#000000", "fill-opacity": .4},
                        selected: {fill: "#000000", "fill-opacity": .4}
                    }
                },
                init: function () {
                    function t() {
                        e.checkSVG(function () {
                            setTimeout(function () {
                                e.render(), e.hideLoader()
                            }, 100)
                        })
                    }

                    var e = this;
                    return this.$el = l(this.el), this.showLoader(), "complete" === document.readyState ? t() : l(document).on("readystatechange", l.proxy(function () {
                        "complete" === document.readyState && t()
                    }, this)), this
                }
            };
            var h = Error;
            h.prototype.name = "Info", c.fn.extend = function () {
                l.extend(!0, this, arguments[0])
            }, c.fn.checkDependency = function () {
                if (o && l) return !0;
                if (!o) throw Error("Could not find Raphael 1.4.7");
                if (!l) throw Error("Could not find jQuery 1.12.0");
                return !1
            }, c.fn.checkUserAgent = function () {
                var t = navigator.userAgent, e = u.UAParser(t);
                return this.log(e.browser.name + " v" + e.browser.major), this.log(e.engine.name + " v" + e.engine.version), e
            }, c.fn.setCompatibilityProp = function () {
                var t = o.type.toUpperCase(), e = "VML" === t, i = !0, n = !e, r = this.props.ua,
                    a = r.browser.name.toLowerCase(), s = r.browser.major;
                r.engine.name.toLowerCase(), r.engine.version;
                a.match("android") && (n = !1), a.match("ie") && s <= 9 && (n = !1, i = !1), !l.support.transition && this.options.jsAnimate && (l.fn.transition = l.fn.animate, i = !0), this.props.type = t, this.props.ie8 = e, this.options.animate = i, this.props.html5 = n, this.options.device = this.options.device.toLowerCase()
            }, c.fn.checkSVG = function () {
                var t = !0;
                for (var e in this.svg) if (!this.svg[e]) {
                    t = !1;
                    break
                }
                return t
            }, c.fn.checkSVG = function (t) {
                function e(t, e, i) {
                    n.getSVGAjax(a, {cache: t}, e, i)
                }

                function i(e) {
                    n.svg.root = e, t.call(n)
                }

                var n = this, r = !this.options.dev, a = this.svg.root;
                e(r, i, function () {
                    n.log("Fail AJAX - retry without cache"), e(!1, i, function () {
                        alert("Fail to load map data")
                    })
                })
            }, c.fn.getSVGAjax = function (t, e, i, n) {
                var r = null, a = "IE" === this.props.ua.browser.name;
                if (e = e || {}, r = !(t.match(/^\/\//) || t.match(/^http:\/\//) || t.match(/^https:\/\//)), a && window.XDomainRequest && !r) {
                    this.log("XDR");
                    var s = new XDomainRequest;
                    s.open("get", t), s.timeout = 3e4, s.onerror = function () {
                        alert("error code 0")
                    }, s.ontimeout = function () {
                        alert("error code 11")
                    }, s.onprogress = function () {
                    }, s.onload = function () {
                        i && i.call(this, s.responseText)
                    }, setTimeout(function () {
                        s.send()
                    }, 0)
                } else this.log("AJAX"), l.ajax({
                    url: t,
                    type: "GET",
                    cache: e.cache,
                    dataType: "text",
                    contentType: "text/plain",
                    success: function (t) {
                        i && i.call(this, t)
                    },
                    error: function (t) {
                        n && n.call(this, t)
                    }
                })
            }, c.fn.padNum = function (t, e) {
                e = 2;
                var i = e - String(t).length;
                if (i > 0) for (; i--;) t = "0" + t;
                return t
            }, c.fn.getTime = function () {
                var t = new Date,
                    e = this.padNum(t.getHours()) + ":" + this.padNum(t.getMinutes()) + ":" + this.padNum(t.getSeconds());
                return e
            }, c.fn.alert = function (t) {
                switch (t) {
                    case 0:
                        alert("이 기능은 지원하지 않습니다.")
                }
            }, c.fn.log = function (t, e) {
                function i(t) {
                    var e = window.console || {
                        log: function () {
                        }
                    };
                    t = a + " : " + t, n ? l(n).val(t + s + l(n).val()) : e.log(t)
                }

                var n = this.options.log, r = this.options.dev, a = this.getTime(), s = "\r\n";
                e = e || !1, r ? i("string" == typeof t ? t : t) : e && i("string" == typeof t ? t : t)
            }, c.fn.showLoader = function () {
                var t = this.el, e = l.parseHTML('<div class="loader"><span class="ico_loading">로딩중</span></div>');
                l(t).append(e)
            }, c.fn.hideLoader = function () {
                var t = l(this.el).find(".loader");
                t.length && l(t).remove()
            }, c.fn.extend({
                stack: [], render: function () {
                    this.log("construct"), this.constructMapLayer(), this.addDefaultStyle(), this.constructMap(), this.log("draw"), this.draw(), this.log("init event"), this.initEvents(), this.initCustomEvents(), this.bindEventFromEventStack(), this.log("init ui"), this.initUI(), this.props.render = !0, this.log("render done"), this.trigger("map:renderAfter")
                }, constructMapLayer: function () {
                    var t = l(this.el), e = l.parseHTML('<div class="mapWrapper""></div>')[0],
                        i = l.parseHTML('<div class="ui"></div>')[0], n = l.parseHTML('<div class="map"></div>')[0],
                        r = l.parseHTML('<div class="frame"></div>')[0],
                        a = l.parseHTML('<div class="layer markerLayer"></div>')[0],
                        s = l.parseHTML('<div class="layer uiLayer"></div>')[0],
                        o = l.parseHTML('<div class="layer svgLayer"></div>')[0];
                    l(e).append(i), l(e).append(r), l(r).append(n), l(i).append(s), l(n).append(a), l(n).append(o), this.wrapper = e, this.map = n, this.frame = r, this.layer.marker = a, this.layer.ui = s, this.layer.svg = o, this.$el = t, this.options.overflow ? (this.options.overflow.ui || l(i).css("overflow", "hidden"), this.options.overflow.map || l(n).css("overflow", "hidden")) : l(e).css("overflow", "hidden"), t.append(e)
                }, addDefaultStyle: function () {
                    var t = this.el, e = this.wrapper;
                    l(e).css({
                        position: "relative",
                        margin: "auto",
                        padding: 0
                    }), l(t).find(".ui, .map, .frame").css({
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        margin: 0,
                        padding: 0
                    }), l(t).find(".layer").css({
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        margin: 0,
                        padding: 0,
                        "-webkit-touch-callout": "none",
                        "-webkit-user-select": "none",
                        "-khtml-user-select": "none",
                        "-moz-user-select": "none",
                        "-ms-user-select": "none",
                        "user-select": "none"
                    }), l(t).find(".markerLayer").css({
                        "backface-visibility": "hidden",
                        "-webkit-backface-visibility": "hidden"
                    }), l(t).find(".frame").css({
                        "backface-visibility": "hidden",
                        "-webkit-backface-visibility": "hidden"
                    }), l(t).find(".svgLayer").css({
                        "text-align": "center",
                        "transform-style": "preserve-3d",
                        "backface-visibility": "hidden",
                        "-webkit-backface-visibility": "hidden"
                    })
                }, constructMap: function () {
                    var t = l.parseXML(this.svg.root), e = l(t).find("svg"),
                        i = o(this.layer.svg, this.props.width, this.props.height);
                    this.svg.root = i, "VML" === this.props.type && (this.options.strictLayer = !0), this.setSize(e.attr("width"), e.attr("height")), this.setViewBox(e.attr("viewBox")), i.importSVG(t), i.renderfix(), this.stack.push({
                        elem: i,
                        viewBox: this.props.viewBox,
                        scale: 1,
                        style: {scale: 1}
                    })
                }, draw: function () {
                    var t = this.svg.root;
                    this.calculateMapSize(), this.stack[0].viewBox = this.props.viewBox;
                    var e = this.options.disableArea, i = [];
                    for (t.forEach(l.proxy(function (t) {
                        var n = t.data("level"), r = t.data("code");
                        r && (r = parseInt(r), this.dataMap.codeMap[r] = t);
                        for (var a = 0; a < e.length; a++) r === parseInt(e[a]) && this.disableElem(t);
                        void 0 !== n && (n = parseInt(n), n > this.options.depth && i.push(t), this.setStyle(t, this.options.style["default"]), this.setStylePreset(t))
                    }, this)); i.length;) i.pop().remove();
                    this.props.svgReady = !0, setTimeout(l.proxy(function () {
                        this.calculateOffset()
                    }, this), 20)
                }, zoom: function (t) {
                    return !!this.options.feature.zoom && (t < 1 && (t = 1), t > 3 && (t = 3), t !== this.props.zoom && (this.props.zoom = t, this.squashAnimateQueue(l.proxy(function () {
                        var e = this.map, i = this.frame;
                        1 === t ? l(i).css("overflow", "hidden") : l(i).css("overflow", "auto"), this.transitionTransform(e, {
                            transformOrigin: "0 0",
                            scale: t
                        }, 0, l.proxy(function () {
                            var e = l(i).width(), n = l(i).height(), r = parseFloat(l(i).prop("scrollWidth")),
                                a = parseFloat(l(i).prop("scrollHeight")), s = r - e, o = a - n;
                            this.log("zoom " + t);
                            for (var u = 0; u < this.uiElem.nameTag.length; u++) {
                                var c = this.uiElem.nameTag[u];
                                if (1 === t) l(c).css("transform", "none"); else {
                                    var h = this.getNameTagOrigin(l(c).outerWidth(), l(c).outerHeight(), this.options.uiOptions.nameTag.originCode);
                                    this.transform(c, {
                                        transformOrigin: h.x + "px " + h.y + "px 0px",
                                        transform: "scale(" + 1 / t + "); translateZ(1px)"
                                    })
                                }
                            }
                            s > 0 && l(i).scrollLeft(s / 2), o > 0 && l(i).scrollTop(o / 2), this.trigger("map:zoomAfter", {zoom: t})
                        }, this))
                    }, this), !1)), !0)
                }, into: function (t, e) {
                    this.log("into");
                    var i = this.layer.svg, n = t.data("level");
                    if (n && this.stack.length !== parseInt(n)) return !1;
                    if (this.zoom(1), this.hideNameTag(), this.hideStickyLayer(), this.eventDisable(), this.props.html5) {
                        var r = this.calculateElemScaleTransformStyle(t), a = this.options.transitionDelay;
                        this.props.scale = r.scale, this.stack.push({
                            elem: t,
                            style: r,
                            scale: this.props.scale
                        }), this.transitionTransform(i, r, a, l.proxy(function () {
                            this.log("transition callback"), this.trigger("map:intoAfter", {target: t}), setTimeout(function () {
                                e && e()
                            }, 0)
                        }, this))
                    } else {
                        var s = this.calculateElemScaleViewBox(t);
                        this.props.scale = s.scale, this.setViewBox(s.x, s.y, s.width, s.height, {animate: !1}), this.stack.push({
                            elem: t,
                            viewBox: this.props.viewBox,
                            scale: this.props.scale
                        }), this.trigger("map:intoAfter", {target: t}), setTimeout(function () {
                            e && e()
                        }, 0)
                    }
                }, out: function (t) {
                    if (!(this.stack.length <= 1)) {
                        this.zoom(1);
                        var e = (this.svg.root, this.stack.pop()), i = e.elem, n = this.layer.svg,
                            r = this.stack[this.stack.length - 1];
                        if (this.removeNameTag(parseInt(e.elem.data("level")) + 1), this.hideStickyLayer(), this.eventDisable(), this.props.html5) {
                            var a = r.style || {}, s = a.scale || 1, o = this.options.transitionDelay;
                            this.props.scale = s, a.scale = s, this.transitionTransform(n, a, o, l.proxy(function () {
                                this.trigger("map:outAfter", {target: i}), setTimeout(function () {
                                    t && t()
                                }, 0)
                            }, this))
                        } else this.setViewBox(r.viewBox, {animate: !1}), this.props.scale = r.scale, this.trigger("map:outAfter", {target: i}), setTimeout(function () {
                            t && t()
                        }, 0)
                    }
                }, eventIntoAfter: function (t, e) {
                    this.log("intoAfter");
                    var i = this.svg.root, n = (e.id, parseInt(e.data("level"))), r = null, a = e.data("code");
                    e.hide(), i.forEach(l.proxy(function (t) {
                        r = parseInt(t.data("level")), r && (this.setStylePreset(t), r === this.stack.depth && t.data("parentCode") !== a ? t.hide() : this.strokeArrange(t), r === n && t !== e && this.dimmed(t))
                    }, this)), this.initNameTag(), this.eventEnable()
                }, eventOutAfter: function (t, e) {
                    var i = this.svg.root, n = null, r = null, a = e.data("code");
                    n = this.stack.length > 1 ? parseInt(e.data("level")) : 0, e.show(), i.forEach(l.proxy(function (t) {
                        r = parseInt(t.data("level")), r && (this.setStylePreset(t), r < this.stack.depth && t.data("parentCode") !== a ? t.show() : this.strokeArrange(t), t.data("dimmed") && this.undimmed(t))
                    }, this)), this.deselectElem(), 0 === this.showNameTag(n + 1).length && this.initNameTag(), this.eventEnable()
                }
            }), c.fn.extend({
                calculateUILayerOffset: function () {
                    var t = this.layer.ui, e = this.layer.svg, i = this.props.scale, n = (this.props.scaleSVG, null),
                        r = null, a = this.props.cx || 0, s = this.props.cy || 0;
                    if ("SVG" === this.props.type && (n = t.getBoundingClientRect(), r = e.getBoundingClientRect(), a = r.left - n.left, s = r.top - n.top), !this.options.strictLayer) {
                        var u = l(this.wrapper).width(), c = l(this.wrapper).height(), h = this.getSize();
                        this.props.html5 || (i = 1), a += o.floor((u - h.width) / 2) * i, s += o.floor((c - h.height) / 2) * i
                    }
                    this.props.cx = a, this.props.cy = s
                }, calculateMapSize: function (t, e) {
                    var i = 1;
                    if (this.options.fit) {
                        if (t = t || this.$el.width(), e = e || this.$el.height(), 2 === this.options.fit) {
                            var n = this.props.width / this.props.height, r = t / e;
                            n < r && (t = 0)
                        }
                    } else t = t || this.options.width, e = e || this.options.height;
                    (t || e) && (i = o.floor(t / this.props.width || e / this.props.height)), this.setScaleSVG(i), this.adjustStackData(), this.calculateOffset()
                }, adjustStackData: function () {
                    var t = (this.props.type, this.props.html5), e = this.stack.length;
                    if (t) {
                        for (var i = 0; i < e; i++) if (i) {
                            var n = this.stack[i].elem, r = this.calculateElemScaleTransformStyle(n);
                            this.stack[i].style = r, l(this.layer.svg).css(this.stack[e - 1].style)
                        }
                    } else for (var a = 0; a < e; a++) {
                        var s = this.stack[a].elem, o = this.calculateElemScaleViewBox(s);
                        this.stack[a].viewBox = [o.x, o.y, o.width, o.height]
                    }
                }, calculateOffset: function () {
                    var t = l(this.wrapper).offset();
                    this.props.x = t.left, this.props.y = t.top
                }, calculateElemScaleViewBox: function (t) {
                    if (t instanceof o) return {
                        x: 0,
                        y: 0,
                        width: this.props.width,
                        height: this.props.height,
                        scale: 1
                    };
                    var e = t.getCachedBBox(), i = this.getSize(), n = 1, r = .05,
                        a = (this.props.type, this.options.scaleLimit), s = {x: 0, y: 0, width: 0, height: 0, scale: 1};
                    n = Math.min(i.width / e.width, i.height / e.height), n -= r, n = n < a ? n : a;
                    for (var l in this.options.scaleOffset) {
                        var u = this.options.scaleOffset[l];
                        l === t.data("code") && (n += u)
                    }
                    var c = {x: e.x + e.width / 2, y: e.y + e.height / 2};
                    return s.width = o.floor(i.width / n), s.height = o.floor(i.height / n), s.x = o.floor(c.x - s.width / 2), s.y = o.floor(c.y - s.height / 2), s.scale = n, s
                }, calculateElemScaleTransformStyle: function (t) {
                    if (t instanceof o) return this.stack[0].style;
                    var e = t.getCachedBBox(), i = this.getSize(), n = 1, r = .05,
                        a = (this.props.type, this.options.scaleLimit);
                    n = Math.min(i.width / e.width, i.height / e.height), n -= r, n = n < a ? n : a;
                    for (var s in this.options.scaleOffset) {
                        var u = this.options.scaleOffset[s];
                        s === t.data("code") && (n += u)
                    }
                    var c = {x: i.width / 2, y: i.height / 2}, h = {x: e.x + e.width / 2, y: e.y + e.height / 2}, d = 0,
                        f = 0;
                    if (!this.options.strictLayer) {
                        var p = l(this.wrapper).width(), m = l(this.wrapper).height(), g = this.getSize();
                        d += o.floor((p - g.width) / 2), f += o.floor((m - g.height) / 2), c.x += d, h.x += d, c.y += f, h.y += f
                    }
                    var v = {x: (n * h.x - c.x) / (n - 1), y: (n * h.y - c.y) / (n - 1)},
                        y = {transformOrigin: v.x + "px " + v.y + "px", scale: n};
                    return y
                }
            }), c.fn.extend({
                isSVGReady: function () {
                    return this.props.svgReady
                }, getElemByCode: function (t) {
                    return this.dataMap.codeMap[t]
                }, getSize: function () {
                    return {width: this.props.width, height: this.props.height}
                }, setSize: function (t, e) {
                    var i = this.svg.root;
                    this.props.width = o.floor(t), this.props.height = o.floor(e);
                    var n = this.props.width, r = this.props.height;
                    this.options.strictLayer || (n = "100%", r = "100%"), l(this.wrapper).css({
                        width: n,
                        height: r
                    }), i.setSize(this.props.width, this.props.height)
                }, setScaleSVG: function (t) {
                    var e = this.svg.root, i = this.getSize();
                    this.setSize(i.width * t, i.height * t), this.setViewBox(this.props.viewBox[0] * t, this.props.viewBox[1] * t, this.props.viewBox[2] * t, this.props.viewBox[3] * t), this.props.scaleSVG = o.floor(this.props.scaleSVG * t), e.forEach(l.proxy(function (e) {
                        var i = e.data("level");
                        e.scale(t, t, t, t), "SVG" === this.props.type && i ? e.setCachedBBox(!0, this.props.scaleSVG) : e.removeCachedBBox()
                    }, this))
                }, setViewBox: function () {
                    for (var t = this.svg.root, e = [], i = {
                        duration: 500,
                        easing: "ease-in"
                    }, n = this, r = arguments.length, a = Array(r), u = 0; u < r; u++) a[u] = arguments[u];
                    switch (a[0] instanceof o && (t = a[0], a.shift()), s(a[0])) {
                        case"string":
                            e = a[0].split(" "), a.shift();
                            break;
                        case"number":
                            for (var c = 0; c < 4; c++) e.push(a[0]), a.shift();
                            break;
                        case"object":
                            a[0] instanceof Array ? (e = a[0], a.shift()) : (e[0] = a[0].x, e[1] = a[0].y, e[2] = a[0].width, e[3] = a[0].height)
                    }
                    i = l.extend(a[0], i);
                    for (var h = 0; h < e.length; h++) e[h] = o.floor(e[h]);
                    this.props.viewBox = e, i.animate ? (n.eventDisable(), t.animateViewBox(o.floor(e[0]), o.floor(e[1]), o.floor(e[2]), o.floor(e[3]), i.duration, i.easing, function () {
                        n.eventEnable()
                    })) : t.setViewBox(o.floor(e[0]), o.floor(e[1]), o.floor(e[2]), o.floor(e[3]), !1), "VML" === Raphael.type
                }, transform: function (t, e, i) {
                    l(t).css("will-change", "transform"), l(t).css(e), l(t).css("will-change", "auto"), i && i()
                }, transitionTransform: function (t, e, i, n) {
                    var r = {"will-change": "transform", perspective: "1000px"}, a = this.props.ua;
                    a.browser.name.match("Android Browser") ? r = {"will-change": "transform"} : a.browser.name.match("IE") && (r = {"will-change": "transform"}), l(t).css(r), l(t).css({transformOrigin: e.transformOrigin}).transition({scale: e.scale}, i, "ease", l.proxy(function () {
                        l(t).css({
                            perspective: "none",
                            transition: "none",
                            transform: "none"
                        }), l(t).css(e), l(t).css("will-change", "auto"), n && n()
                    }, this))
                }, getOpacityColor: function (t, e, i) {
                    i = i || "#000000";
                    var n = o.getRGB(t), r = o.getRGB(i), a = {};
                    for (var s in n) a[s] = Math.floor(Math.abs((r[s] - n[s]) * (1 - e)));
                    var l = o.getRGB("RGB(" + a.r + ", " + a.g + ", " + a.b + ")").hex;
                    return l
                }, setStylePreset: function (t) {
                    var e = t.data("level"), i = this.stack.length, n = this.options.depth, r = t.data("disabled");
                    e && (e = parseInt(e), e !== n ? this.setStyle(t, this.options.style.outDepth) : e === i ? this.setStyle(t, this.options.style.focus) : this.setStyle(t, this.options.style.blur)), r && this.setStyle(t, this.options.style.disabled)
                }, setStyle: function () {
                    var t = arguments.length <= 0 ? void 0 : arguments[0];
                    if (2 === arguments.length) {
                        var e = arguments.length <= 1 ? void 0 : arguments[1];
                        for (var i in e) {
                            var n = e[i];
                            "stroke" === i && "none" === n && (n = t.getOriginal("fill")), t.attr(i, n), t.setOriginal(i, n)
                        }
                    } else {
                        var r = arguments.length <= 1 ? void 0 : arguments[1],
                            a = arguments.length <= 2 ? void 0 : arguments[2];
                        t.attr(r, a), t.setOriginal(r, a)
                    }
                }, strokeArrange: function (t) {
                    var e = this.stack.length;
                    if (this.props.html5) if (1 === e) t.attr("stroke-width", t.getOriginal("stroke-width")); else if (this.props.scale > this.options.strokeLimit) {
                        var i = t.getOriginal("stroke-width");
                        t.attr("stroke-width", o.floor(i * this.options.strokeLimit / this.props.scale))
                    }
                }, setColor: function (t, e, i) {
                    i = i || {};
                    var n = i.animate || !1, r = i.duration || 1e3, a = t.getOriginal("fill"), s = !1,
                        u = parseInt(t.data("level")), c = this.stack.length, h = this.options.depth;
                    s = h !== c && u !== c, e && (t.setOriginal("fill", e), s && t.setOriginal("stroke", e), n ? l("<div>").animate({width: 100}, {
                        duration: r,
                        easing: "swing",
                        step: function (i) {
                            var n = o.getRGB(e), r = o.getRGB(a);
                            i = 1 - i / 100;
                            var l = parseInt(n.r + (r.r - n.r) * i), u = parseInt(n.g + (r.g - n.g) * i),
                                c = parseInt(n.b + (r.b - n.b) * i),
                                h = o.getRGB("RGB(" + l + ", " + u + ", " + c + ")").hex;
                            t.attr("fill", h), s && t.attr("stroke", h)
                        },
                        complete: this.options.callback
                    }) : (t.attr("fill", e), s && t.attr("stroke", e)))
                }, isDisabled: function (t) {
                    return !(!t || "function" != typeof t.data || !t.data("disabled"))
                }, disableElem: function (t) {
                    t.data("disabled", 1)
                }, hoverElem: function (t) {
                    var e = this.stack.length, i = l(this.layer.marker).find("[scope=" + t.id + "]");
                    if (e === parseInt(t.data("level"))) if (this.hoverNameTag(i), e === this.options.depth) {
                        var n = this.getOpacityColor(t.getOriginal("fill"), this.options.style.selected["fill-opacity"], this.options.style.selected.fill);
                        t.attr("fill", n)
                    } else t.attr("fill", this.options.style.hover.fill), t.attr("fill-opacity", this.options.style.hover["fill-opacity"])
                }, unhoverElem: function (t) {
                    var e = this.stack.length, i = l(this.layer.marker).find("[scope=" + t.id + "]");
                    if (!t.data("dimmed")) if (this.unhoverNameTag(i), e === this.options.depth) {
                        var n = t.getOriginal("fill");
                        t.attr("fill", n)
                    } else this.setStylePreset(t)
                }, getSelectedElem: function () {
                    return this.props.selectedElem
                }, deselectElem: function () {
                    var t = this.props.selectedElem;
                    if (t) {
                        var e = l(this.layer.marker).find("[scope=" + t.id + "]");
                        this.deselectNameTag(e);
                        for (var i in this.options.style.selected) t.attr(i, t.getOriginal(i));
                        t.data("selected", 0), this.props.selectedElem = null
                    }
                }, selectElem: function (t) {
                    this.props.selectedElem && this.deselectElem(this.props.selectedElem), this.props.selectedElem = t, t.data("selected", 1);
                    var e = this.stack.length, i = parseInt(t.data("level")), n = this.options.depth;
                    if (i === e && i === n) {
                        var r = l(this.layer.marker).find("[scope=" + t.id + "]");
                        this.selectNameTag(r);
                        var a = this.getOpacityColor(t.getOriginal("fill"), this.options.style.selected["fill-opacity"], this.options.style.selected.fill);
                        t.attr("fill", a)
                    }
                    return t
                }, dimmed: function (t) {
                    this.options.style.dimmed.fill, this.options.style.dimmed["fill-opacity"];
                    t.data("dimmed", 1);
                    for (var e in this.options.style.dimmed) {
                        var i = this.options.style.dimmed[e];
                        t.getOriginal(e), t.attr(e, i)
                    }
                }, undimmed: function (t) {
                    t.data("dimmed", 0);
                    for (var e in this.options.style.dimmed) t.attr(e, t.getOriginal(e))
                }, isElem: function (t) {
                    return !!(t && "object" === ("undefined" == typeof t ? "undefined" : s(t)) && t.paper instanceof o)
                }, isSelected: function (t) {
                    return !!t.data("selected")
                }
            }), c.fn.extend({
                uiElem: {zoomButton: null, nameTag: [], stickyLayer: null},
                template: {
                    nameTag: '<div class="tag_district" style="display:table;"><span class="txt_g" role="content">tag</span><span class="ico_arr"></span></div>',
                    stickyLayer: '<div class="layer_count" style="display:table;z-index:99">Empty</div>',
                    zoomButton: '<div style="position:absolute; font-size:50px; z-index:99"><span role="zoomIn">+</span> <span role="zoomOut">-</span></div>'
                },
                initUI: function () {
                    l(this.layer.marker).empty(), this.initNameTag(), this.initStickyLayer(), this.initZoomButton()
                },
                bindUIEvent: function (t, e) {
                    var i = this.svg.root, n = l(t).attr("scope"), r = i.getById(n);
                    return !!this.options.defaultEvent && void(r && r[e] && this.on(t, e, l.proxy(function (t) {
                        this.trigger(r, e, t)
                    }, this)))
                },
                initZoomButton: function () {
                    if (!this.options.ui.zoomButton) return !1;
                    var t = (this.frame, this.layer.ui), e = l.parseHTML(this.template.zoomButton);
                    this.uiElem.zoomButton || (this.uiElem.zoomButton = e, l(t).append(e), l(e).hide(), l(e).find("[role=zoomIn]").on("click", l.proxy(function (t) {
                        var e = this.zoom(this.props.zoom + 1);
                        e || this.alert(0)
                    }, this)), l(e).find("[role=zoomOut]").on("click", l.proxy(function (t) {
                        var e = this.zoom(this.props.zoom - 1);
                        e || this.alert(0)
                    }, this))), this.showZoomButton()
                },
                showZoomButton: function () {
                    var t = this.uiElem.zoomButton;
                    this.show(t)
                },
                hideZoomButton: function () {
                    var t = this.uiElem.zoomButton;
                    t && l(t).fadeOut()
                },
                initNameTag: function () {
                    if (!this.options.ui.nameTag) return !1;
                    var t = this.svg.root, e = this.stack.length, i = this.stack[this.stack.length - 1].elem;
                    this.calculateUILayerOffset(), t.forEach(l.proxy(function (t) {
                        String(e) === t.data("level") && (1 !== e && i.data("code") !== t.data("parentCode") || this.addNameTag(t))
                    }, this))
                },
                getNameTagOrigin: function (t, e, i) {
                    var n = this.options.uiOptions.nameTag || {}, r = n.originOffset || {};
                    i = i || n.align;
                    var a = {x: 1, y: 1};
                    switch (i) {
                        case 5:
                            a.x = .5, a.y = .5;
                            break;
                        case 7:
                            a.x = 0, a.y = 1
                    }
                    return a.x = a.x * t, a.y = a.y * e, a.x = a.x + (r.x || 0), a.y = a.y + (r.y || 0), a
                },
                addNameTag: function (t, e) {
                    this.isDisabled(t) || this.addAnimateQueue(l.proxy(function () {
                        var i = this.layer.marker, n = (this.layer.svg, t.getCachedBBox()), r = this.props.scale,
                            a = this.props.scaleSVG, s = this.props.cx || 0, u = this.props.cy || 0, c = {x: 0, y: 0};
                        e = e || this.options.uiOptions.nameTag || {};
                        var h = e.originCode || 5, d = l.parseHTML(e.template || this.template.nameTag);
                        this.setNameTagContent(d, t.data("name")), l(i).append(d), l(d).attr("scope", t.id), l(d).data("level", t.data("level"));
                        var f = l(d).outerWidth(), p = l(d).outerHeight(), m = this.getNameTagOrigin(f, p, h), g = {},
                            v = {x: n.x + n.width / 2, y: n.y + n.height / 2};
                        this.options.debug && this.svg.root.circle(n.x + n.width / 2, n.y + n.height / 2, 1).attr("fill", "green").attr("stroke", "none").data("debug", "coord"), "VML" === this.props.type && (r = 1), "SVG" !== this.props.type || this.props.html5 || (v.x = v.x - this.props.viewBox[0], v.y = v.y - this.props.viewBox[1]), v.x = v.x * r, v.y = v.y * r, v.x = v.x - m.x, v.y = v.y - m.y, g = {
                            x: t.data("nameTagOffsetX") ? parseFloat(t.data("nameTagOffsetX")) : 0,
                            y: t.data("nameTagOffsetY") ? parseFloat(t.data("nameTagOffsetY")) : 0
                        }, "SVG" === this.props.type && g.x && (v.x = v.x + g.x * r * a), "SVG" === this.props.type && g.y && (v.y = v.y + g.y * r * a), v.x = v.x + c.x * r, v.y = v.y + c.y * r, v.x = o.floor(v.x + s), v.y = o.floor(v.y + u), l(d).css({
                            left: v.x,
                            top: v.y
                        }), this.options.debug && this.svg.root.circle(n.x + n.width / 2 + g.x * a, n.y + n.height / 2 + g.y * a, 1).attr("fill", "blue").attr("stroke", "none").data("debug", "coord"), this.bindUIEvent(d, "click"), "pc" === this.options.device && (this.bindUIEvent(d, "mouseover"), this.bindUIEvent(d, "mouseout")), this.show(l(d).hide()), this.isSelected(t) && this.selectNameTag(d), this.uiElem.nameTag || (this.uiElem.nameTag = []), this.uiElem.nameTag.push(d), this.trigger("map:addNameTagAfter", {target: d})
                    }, this), 10)
                },
                setNameTagContent: function (t, e) {
                    l(t).find("[role=content]").text(e)
                },
                selectNameTag: function (t) {
                    l(t).addClass("on")
                },
                deselectNameTag: function (t) {
                    l(t).removeClass("on")
                },
                hoverNameTag: function (t) {
                    l(t).addClass("on")
                },
                unhoverNameTag: function (t) {
                    l(t).removeClass("on")
                },
                hideNameTag: function (t) {
                    for (var e = this.uiElem.nameTag, i = [], n = null, r = 0; r < e.length; r++) n = e[r], t && l(n).data("level") !== String(t) || (l(n).hide(), i.push(n));
                    return i
                },
                showNameTag: function (t) {
                    for (var e = this.uiElem.nameTag, i = [], n = null, r = 0; r < e.length; r++) n = e[r], t && l(n).data("level") !== String(t) || (this.show(n), i.push(n));
                    return i
                },
                removeNameTag: function (t) {
                    for (var e = this.uiElem.nameTag, i = null, n = e.length; n--;) i = e[n], t && l(i).data("level") !== String(t) || (l(i).remove(), e.splice(n, 1))
                },
                initStickyLayer: function (t) {
                    if (!this.options.ui.stickyLayer) return !1;
                    var e = this.layer.ui;
                    t = t || {};
                    var i = l.parseHTML(t.template || this.template.stickyLayer);
                    this.uiElem.stickyLayer = i, l(e).append(i), l(i).hide()
                },
                changeStickyLayerSize: function () {
                    var t = void 0;
                    l(this.uiElem.stickyLayer).css("width", "100%"), l(this.uiElem.stickyLayer).children().eq(0).css("width", "auto"), t = l(this.uiElem.stickyLayer).children().eq(0).outerWidth() + 1, l(this.uiElem.stickyLayer).children().eq(0).css("width", t), l(this.uiElem.stickyLayer).css("width", "auto")
                },
                changeStickyLayerContent: function (t) {
                    t = '<span style="display:inline-block;">' + t + "</span>", l(this.uiElem.stickyLayer).html(t), this.changeStickyLayerSize()
                },
                changeStickyLayerCoord: function (t, e) {
                    var i = this.uiElem.stickyLayer;
                    l(i).css("left", t), l(i).css("top", e)
                },
                showStickyLayer: function (t) {
                    var e = this.uiElem.stickyLayer;
                    l(e).show(), this.changeStickyLayerSize()
                },
                hideStickyLayer: function (t) {
                    var e = this.uiElem.stickyLayer;
                    l(e).hide()
                }
            }), c.fn.extend({
                pinching: {status: !1, distance: 0},
                eventStatus: {all: !0},
                eventStack: [],
                events: {},
                trigger: function () {
                    for (var t = this.map, e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                    3 === i.length && (t = i[0], i.shift());
                    var r = i[0], a = i[1], s = new l.Event(r, a);
                    t.paper instanceof o ? t.trigger(a) : l(t).trigger(s, [a ? a.target : t])
                },
                on: function () {
                    for (var t = null, e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                    if (!this.isSVGReady()) return void this.eventStack.push(i);
                    3 === i.length && (t = i[0], i.shift());
                    var r = i[0], a = i[1], s = this.svg.root, o = this.map, u = r.split(" "), c = [];
                    if (a = "function" == typeof a ? a : this[a], t || (t = r.match(/^map:/) ? l(o) : s), r = u[0], 1 === u.length) c.push(t); else {
                        u.shift(), t = this.$el.find(u.join(" "));
                        for (var h = 0; h < t.length; h++) {
                            var d = null;
                            d = t.id ? s.getById(t.id) : t.get(h), c.push(d)
                        }
                    }
                    for (var f = 0; f < c.length; f++) this.addEventListener(c[f], r, a);
                    if ("map:renderAfter" === r) {
                        var p = new l.Event(r);
                        this.props.render && this.eventHandler(p, a, s)
                    }
                },
                once: function () {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    var n = this, r = e.pop(), a = function () {
                        r(), n.off.apply(n, e)
                    };
                    e.push(a), this.on.apply(this, e)
                },
                off: function () {
                    var t = null, e = arguments.length <= 0 ? void 0 : arguments[0], i = this.svg.root, n = this.map;
                    t || (t = e.match(/^map:/) ? l(n) : i)
                },
                initEvents: function () {
                    return this.on(window, "resize", "eventResize"), this.on("map:intoAfter", "eventIntoAfter"), this.on("map:outAfter", "eventOutAfter"), !!this.options.defaultEvent && (this.on(this.svg.root.canvas, "click", "eventClick"), "pc" === this.options.device && this.on(this.wrapper, "mousemove", "eventMouseMove"), this.on("click", "eventClick"), void("pc" === this.options.device && (this.on("mouseover", "eventMouseOver"), this.on("mouseout", "eventMouseOut"))))
                },
                initCustomEvents: function () {
                    for (var t in this.events) this.on(t, this.events[t])
                },
                bindEventFromEventStack: function () {
                    if (this.eventStack.length && this.isSVGReady()) for (; this.eventStack.length;) this.on.apply(this, this.eventStack.pop());
                    this.eventStack = []
                },
                addEventListener: function (t, e, i) {
                    t instanceof o ? t.forEach(l.proxy(function (t) {
                        t[e] && t[e](l.proxy(function (e) {
                            this.eventHandler(e, i, t)
                        }, this))
                    }, this)) : t.paper instanceof o ? t[e] && t[e](l.proxy(function (e) {
                        this.eventHandler(e, i, t)
                    }, this)) : e.match(/^map:/) ? l(t).on(e, l.proxy(function (t, e) {
                        this.eventHandler(t, i, e)
                    }, this)) : l(t).on(e, l.proxy(function (e) {
                        this.eventHandler(e, i, t)
                    }, this))
                },
                removeEventListener: function (t, e, i) {
                    return t instanceof o ? t.forEach(l.proxy(function (t) {
                        t[e] && (t.unbind(e), l(this.layer.ui).find("[scope=" + t.id + "]").off(e))
                    }, this)) : t.paper instanceof o ? (t.unbind(e), l(this.layer.ui).find("[scope=" + t.id + "]").off(e)) : l(t).off(e), [t, e, i]
                },
                eventHandler: function (t, e, i) {
                    if (!this.isDisabled(i) && (t.type.match("mousemove") || t.stopPropagation(), this.eventStatus.all === !0 || t.type.match(/^map:/))) try {
                        this.eventStatus[t.type] !== !1 && e.call(this, t, i)
                    } catch (t) {
                        this.log(t.message)
                    }
                },
                eventMouseOver: function (t, e) {
                    var i = this.svg.root, n = this.stack.length;
                    e.paper instanceof o || (e = i.getById(l(e).attr("scope"))), e.data("level") && !e.data("selected") && (this.hoverElem(e), n === parseInt(e.data("level")) && (this.showStickyLayer(), this.eventMouseMove(t)))
                },
                eventMouseOut: function (t, e) {
                    var i = this.svg.root;
                    this.stack.length;
                    e.paper instanceof o || (e = i.getById(l(e).attr("scope"))), e.data("level") && !e.data("selected") && (this.unhoverElem(e), this.hideStickyLayer())
                },
                eventClick: function (t, e) {
                    var i = this.svg.root;
                    if (!(e.paper instanceof o)) {
                        if (e === i.canvas) return void(this.stack.length > 1 && this.squashAnimateQueue(l.proxy(function () {
                            this.out()
                        }, this), !0));
                        e = i.getById(l(e).attr("scope"))
                    }
                    $(".tag_district").each(function () {
                        if(e.id==$(this).attr("scope")) {
                            $("#myPick").text("내가 선택한 지역 : "+$("#selectDistrict").text()+$(this).find(".txt_g").text());
                        }//if end
                    });
                    var n = parseInt(e.data("level"));
                    n && (this.stack.length < this.options.depth ? this.squashAnimateQueue(l.proxy(function () {
                        this.unhoverElem(e), this.into(e)
                    }, this), !1) : e.data("dimmed") ? this.squashAnimateQueue(l.proxy(function () {
                        this.out()
                    }, this), !0) : this.selectElem(e))
                },
                eventMouseMove: function (t) {
                    var e = t.pageX - this.props.x + 10, i = t.pageY - this.props.y + 10;
                    this.changeStickyLayerCoord(e, i)
                },
                eventResize: function (t) {
                    t.stopPropagation(), t.preventDefault();
                    var e = !1, i = this.props.width, n = this.props.height;
                    this.calculateOffset();
                    var r = Math.abs(l(this.el).width() - i), a = Math.abs(l(this.el).height() - n);
                    e = 1 === this.options.fit ? r > .5 : 2 === this.options.fit && (r > .5 || a > .5), this.log("resize"), this.options.resizeRender && e && (this.zoom(1), this.eventDisable("click"), this.props.resizeTimer && clearTimeout(this.props.resizeTimer), this.props.resizeTimer = setTimeout(l.proxy(function () {
                        this.log("re-render"), this.calculateMapSize(), this.initUI(), this.eventEnable("click")
                    }, this), 100))
                },
                eventEnable: function (t) {
                    t ? this.eventStatus[t] = !0 : this.eventStatus.all = !0
                },
                eventDisable: function (t) {
                    t ? this.eventStatus[t] = !1 : this.eventStatus.all = !1
                }
            }), c.fn.extend({
                animate: {
                    requestAnimationFrame: !1,
                    timer: null,
                    duration: 40,
                    status: !1,
                    queue: [],
                    squash: !1
                }, squashAnimateQueue: function (t, e) {
                    this.animate.squash || (e && this.clearAnimateQueue(), this.stopAnimateWorker(), this.animate.squash = !0), this.addAnimateQueue(l.proxy(function () {
                        this.animate.squash = !1, t()
                    }, this), 0)
                }, stopAnimateWorker: function () {
                    this.animate.timer && (this.animate.requestAnimationFrame ? cancelAnimationFrame(this.animate.timer) : clearTimeout(this.animate.timer)), this.animate.timer = null, this.animate.status = !1, this.animate.squash = !1
                }, clearAnimateQueue: function () {
                    this.animate.queue = []
                }, addAnimateQueue: function (t, e) {
                    "undefined" == typeof e && (e = this.animate.duration), this.props.ie8 && (e = 0), window.requestAnimationFrame && (this.animate.requestAnimationFrame = !0), this.animate.queue.push({
                        f: t,
                        d: e
                    }), this.animate.status || (this.animate.status = !0, setTimeout(l.proxy(function () {
                        this.animateWorker()
                    }, this), e))
                }, animateWorker: function () {
                    var t = this.animate.duration;
                    this.animate.queue.length && (this.animate.queue[0].f(), this.animate.queue.shift(), this.animate.queue[0] && (t = this.animate.queue[0].d)), this.animate.queue.length ? this.animate.requestAnimationFrame ? this.requestAnimationFrame(l.proxy(function () {
                        this.animateWorker()
                    }, this), t) : this.requestSetTimeout(l.proxy(function () {
                        this.animateWorker()
                    }, this), t) : this.stopAnimateWorker()
                }, requestSetTimeout: function (t, e) {
                    this.animate.squash ? t() : this.animate.timer = setTimeout(t, e)
                }, requestAnimationFrame: function (t) {
                    function e(e, i) {
                        return t.apply(this, arguments)
                    }

                    return e.toString = function () {
                        return t.toString()
                    }, e
                }(function (t, e) {
                    function i(a) {
                        n || (n = a);
                        var s = a - n;
                        r.animate.squash || s > e ? t() : r.animate.timer = requestAnimationFrame(i)
                    }

                    var n = null, r = this;
                    this.animate.timer = requestAnimationFrame(i)
                }), show: function (t, e) {
                    e = l.extend(e, {animate: this.options.animate, duration: 400}), l(t).each(function (i) {
                        var n = t[i];
                        e.animate ? l(n).css({opacity: 0}).show().transition({opacity: 1}, e.duration) : l(n).show()
                    })
                }, hide: function (t, e) {
                    e = l.extend(e, {animate: this.options.animate, duration: 400}), l(t).each(function (i) {
                        var n = t[i];
                        e.animate ? l(n).transition({opacity: 0}, e.duration, function () {
                            l(n).hide()
                        }) : l(n).hide()
                    })
                }
            }), c.fn.extend({
                getSVG: function () {
                    return this.svg
                }, getWrapper: function () {
                    return this.wrapper
                }, getLayer: function () {
                    return this.layer
                }, getOptions: function () {
                    return this.options
                }, getProps: function () {
                    return l.extend({}, this.props)
                }, getStack: function () {
                    return this.stack
                }, getName: function (t) {
                    return this.isElem(t) ? t.data("name") : null
                }, getCode: function (t) {
                    return this.isElem(t) ? t.data("code") : null
                }, getCpCode: function (t) {
                    return this.isElem(t) ? t.data("cpCode") : null
                }, getID: function (t) {
                    return this.isElem(t) ? t.id : null
                }, getData: function (t, e) {
                    return this.isElem(t) ? t.data(e) : null
                }, getZoom: function () {
                    return this.props.zoom
                }, getScale: function () {
                    return this.props.scale
                }
            });
            var d = function (t) {
                var e = this, i = t.events, n = new c({el: t.el, svg: t.svg, options: t.options});
                delete t.svg, delete t.options, delete t.events, delete t.el;
                this.fnMap = {
                    log: "log",
                    getTime: "getTime",
                    zoom: "zoom",
                    setColor: "setColor",
                    changeStickyLayerContent: "changeStickyLayerContent",
                    getSVG: "getSVG",
                    getWrapper: "getWrapper",
                    getLayer: "getLayer",
                    getOptions: "getOptions",
                    getProps: "getProps",
                    getStack: "getStack",
                    trigger: "trigger",
                    getName: "getName",
                    getCode: "getCode",
                    getCpCode: "getCpCode",
                    getID: "getID",
                    getData: "getData",
                    isSelected: "isSelected",
                    selectElem: "selectElem",
                    deselectElem: "deselectElem"
                };
                var r = function (t) {
                    var i = e.fnMap[t];
                    e[t] = function () {
                        try {
                            return n[i].apply(n, arguments)
                        } catch (t) {
                            alert(t.message)
                        }
                    }
                };
                for (var a in this.fnMap) r(a);
                var o = function (i) {
                    "function" == typeof t[i] && (e[i] = l.proxy(function () {
                        var e = [];
                        e.push(n);
                        for (var r = arguments.length, a = Array(r), s = 0; s < r; s++) a[s] = arguments[s];
                        for (var o = 0; o < a.length; o++) e.push(a[o]);
                        try {
                            t[i].apply(this, e)
                        } catch (l) {
                            alert(l.message)
                        }
                    }, e))
                };
                for (var a in t) o(a);
                this.on = function (t, e) {
                    n.on(t, l.proxy(e, this))
                }, this.once = function (t, e) {
                    n.once(t, l.proxy(e, this))
                }, this.init = function () {
                    return n.init(), this
                }, this.extend = function () {
                    l.extend(!0, this, arguments[0])
                }, this.extend({
                    getElemByName: function (t) {
                        var e = n.svg.root, i = null;
                        return e.forEach(function (e) {
                            if (t === e.data("name")) return i = e
                        }), i
                    }, intoByName: function (t, e) {
                        var i = this.getElemByName(t);
                        if (i) {
                            var n = i.data("level"), r = this.getStack().length;
                            n && (n = parseInt(n)), n === r && this.into(i, e)
                        }
                    }, into: function (t, e) {
                        n.squashAnimateQueue(function () {
                            n.into(t, e)
                        }, !1)
                    }, out: function (t) {
                        n.squashAnimateQueue(function () {
                            n.out(t)
                        }, !0)
                    }
                }), this.extend({
                    preset: {
                        election2018: {
                            rate: [0, 50, 60, 100],
                            name: ["기타", "더불어민주당", "자유한국당", "바른미래당", "민주평화당", "정의당", "무소속", "경합"],
                            scheme: [["#FFFFFF", "#DED8C8", "#C5BB9E", "#AD9E75"], ["#FFFFFF", "#8ABCE2", "#2F8CDE", "#006BC9"], ["#FFFFFF", "#EBA2A2", "#ED6461", "#E62A22"], ["#FFFFFF", "#8DD6D0", "#65C9BF", "#00B0A7"], ["#FFFFFF", "#C6E68E", "#ABD65F", "#86BE24"], ["#FFFFFF", "#FFDFA8", "#FFCE73", "#F7B300"], ["#FFFFFF", "#D0D3D6", "#ACB1B7", "#899099"], ["#FFFFFF", "#A9B0B8", "#A9B0B8", "#A9B0B8"]]
                        }
                    }, cpCodeMap: null, getPresetColor: function (t, e) {
                        var i = this.preset[n.options.preset], r = 0, a = null, s = null;
                        if (i.rate) for (var o = 0; o < i.rate.length; o++) {
                            if (e <= i.rate[o]) {
                                a = o;
                                break
                            }
                            a = o
                        }
                        for (var l = 0; l < i.scheme.length; l++) i.name[l] === t && (r = l);
                        return s = null !== r && null !== a ? i.scheme[r][a] : this.options.style["default"].fill
                    }, getElemByCpCode: function (t) {
                        return this.cpCodeMap || this.setCpCodeMap(), this.cpCodeMap[t]
                    }, setCpCodeMap: function () {
                        var t = n.svg.root, e = {};
                        t.forEach(function (t) {
                            var i = t.data("cpCode");
                            i && (e[i] = t)
                        }), this.cpCodeMap = e
                    }, setColorByCpCode: function () {
                        for (var t = (n.svg.root, {}), e = {}, i = n.options.depth, r = arguments.length, a = Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                        "object" === s(a[0]) ? (t = a[0], a.shift()) : (t[a[0]] = a[1], a.shift(), a.shift()), a[0] && l.extend(e, a[0]), this.cpCodeMap || this.setCpCodeMap();
                        for (var u in t) {
                            var c = this.cpCodeMap[u];
                            if (c) {
                                var h = t[u], d = c.data("cpCode"), f = c.data("level"), p = c.data("selected");
                                d && f && h && f && (f = parseInt(f), f === i && n.setColor(c, h, e), p && this.selectElem(c))
                            }
                        }
                    }
                });
                for (var a in i) this.on(a, i[a])
            };
            return n = [], r = function () {
                return d
            }.apply(e, n), !(void 0 !== r && (t.exports = r)), d
        })
    }, 579: function (t, e, i) {
        var n = i(580);
        !function () {
            function e(t) {
                if (e.is(t, "function")) return w ? t() : n.on("raphael.DOMload", t);
                if (e.is(t, Y)) return e._engine.create[N](e, t.splice(0, 3 + e.is(t[0], X))).add(t);
                var i = Array.prototype.slice.call(arguments, 0);
                if (e.is(i[i.length - 1], "function")) {
                    var r = i.pop();
                    return w ? r.call(e._engine.create[N](e, i)) : n.on("raphael.DOMload", function () {
                        r.call(e._engine.create[N](e, i))
                    })
                }
                return e._engine.create[N](e, arguments)
            }

            function r(t) {
                if (Object(t) !== t) return t;
                var e = new t.constructor;
                for (var i in t) t[S](i) && (e[i] = r(t[i]));
                return e
            }

            function a(t, e) {
                for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return t.push(t.splice(i, 1)[0])
            }

            function s(t, e, i) {
                function n() {
                    var r = Array.prototype.slice.call(arguments, 0), s = r.join("␀"), o = n.cache = n.cache || {},
                        l = n.count = n.count || [];
                    return o[S](s) ? (a(l, s), i ? i(o[s]) : o[s]) : (l.length >= 1e3 && delete o[l.shift()], l.push(s), o[s] = t[N](e, r), i ? i(o[s]) : o[s])
                }

                return n
            }

            function o() {
                return this.hex
            }

            function l(t, e) {
                for (var i = [], n = 0, r = t.length; r - 2 * !e > n; n += 2) {
                    var a = [{x: +t[n - 2], y: +t[n - 1]}, {x: +t[n], y: +t[n + 1]}, {
                        x: +t[n + 2],
                        y: +t[n + 3]
                    }, {x: +t[n + 4], y: +t[n + 5]}];
                    e ? n ? r - 4 == n ? a[3] = {x: +t[0], y: +t[1]} : r - 2 == n && (a[2] = {
                        x: +t[0],
                        y: +t[1]
                    }, a[3] = {x: +t[2], y: +t[3]}) : a[0] = {
                        x: +t[r - 2],
                        y: +t[r - 1]
                    } : r - 4 == n ? a[3] = a[2] : n || (a[0] = {
                        x: +t[n],
                        y: +t[n + 1]
                    }), i.push(["C", (-a[0].x + 6 * a[1].x + a[2].x) / 6, (-a[0].y + 6 * a[1].y + a[2].y) / 6, (a[1].x + 6 * a[2].x - a[3].x) / 6, (a[1].y + 6 * a[2].y - a[3].y) / 6, a[2].x, a[2].y])
                }
                return i
            }

            function u(t, e, i, n, r) {
                var a = -3 * e + 9 * i - 9 * n + 3 * r, s = t * a + 6 * e - 12 * i + 6 * n;
                return t * s - 3 * e + 3 * i
            }

            function c(t, e, i, n, r, a, s, o, l) {
                null == l && (l = 1), l = l > 1 ? 1 : l < 0 ? 0 : l;
                for (var c = l / 2, h = 12, d = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], f = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], p = 0, m = 0; m < h; m++) {
                    var g = c * d[m] + c, v = u(g, t, i, r, s), y = u(g, e, n, a, o), x = v * v + y * y;
                    p += f[m] * D.sqrt(x)
                }
                return c * p
            }

            function h(t, e, i, n, r, a, s, o, l) {
                if (!(l < 0 || c(t, e, i, n, r, a, s, o) < l)) {
                    var u, h = 1, d = h / 2, f = h - d, p = .01;
                    for (u = c(t, e, i, n, r, a, s, o, f); H(u - l) > p;) d /= 2, f += (u < l ? 1 : -1) * d, u = c(t, e, i, n, r, a, s, o, f);
                    return f
                }
            }

            function d(t, e, i, n, r, a, s, o) {
                if (!(V(t, i) < q(r, s) || q(t, i) > V(r, s) || V(e, n) < q(a, o) || q(e, n) > V(a, o))) {
                    var l = (t * n - e * i) * (r - s) - (t - i) * (r * o - a * s),
                        u = (t * n - e * i) * (a - o) - (e - n) * (r * o - a * s),
                        c = (t - i) * (a - o) - (e - n) * (r - s);
                    if (c) {
                        var h = l / c, d = u / c, f = +h.toFixed(2), p = +d.toFixed(2);
                        if (!(f < +q(t, i).toFixed(2) || f > +V(t, i).toFixed(2) || f < +q(r, s).toFixed(2) || f > +V(r, s).toFixed(2) || p < +q(e, n).toFixed(2) || p > +V(e, n).toFixed(2) || p < +q(a, o).toFixed(2) || p > +V(a, o).toFixed(2))) return {
                            x: h,
                            y: d
                        }
                    }
                }
            }

            function f(t, i, n) {
                var r = e.bezierBBox(t), a = e.bezierBBox(i);
                if (!e.isBBoxIntersect(r, a)) return n ? 0 : [];
                for (var s = c.apply(0, t), o = c.apply(0, i), l = ~~(s / 5), u = ~~(o / 5), h = [], f = [], p = {}, m = n ? 0 : [], g = 0; g < l + 1; g++) {
                    var v = e.findDotsAtSegment.apply(e, t.concat(g / l));
                    h.push({x: v.x, y: v.y, t: g / l})
                }
                for (g = 0; g < u + 1; g++) v = e.findDotsAtSegment.apply(e, i.concat(g / u)), f.push({
                    x: v.x,
                    y: v.y,
                    t: g / u
                });
                for (g = 0; g < l; g++) for (var y = 0; y < u; y++) {
                    var x = h[g], b = h[g + 1], w = f[y], _ = f[y + 1], k = H(b.x - x.x) < .001 ? "y" : "x",
                        C = H(_.x - w.x) < .001 ? "y" : "x", E = d(x.x, x.y, b.x, b.y, w.x, w.y, _.x, _.y);
                    if (E) {
                        if (p[E.x.toFixed(4)] == E.y.toFixed(4)) continue;
                        p[E.x.toFixed(4)] = E.y.toFixed(4);
                        var S = x.t + H((E[k] - x[k]) / (b[k] - x[k])) * (b.t - x.t),
                            B = w.t + H((E[C] - w[C]) / (_[C] - w[C])) * (_.t - w.t);
                        S >= 0 && S <= 1 && B >= 0 && B <= 1 && (n ? m++ : m.push({x: E.x, y: E.y, t1: S, t2: B}))
                    }
                }
                return m
            }

            function p(t, i, n) {
                t = e._path2curve(t), i = e._path2curve(i);
                for (var r, a, s, o, l, u, c, h, d, p, m = n ? 0 : [], g = 0, v = t.length; g < v; g++) {
                    var y = t[g];
                    if ("M" == y[0]) r = l = y[1], a = u = y[2]; else {
                        "C" == y[0] ? (d = [r, a].concat(y.slice(1)), r = d[6], a = d[7]) : (d = [r, a, r, a, l, u, l, u], r = l, a = u);
                        for (var x = 0, b = i.length; x < b; x++) {
                            var w = i[x];
                            if ("M" == w[0]) s = c = w[1], o = h = w[2]; else {
                                "C" == w[0] ? (p = [s, o].concat(w.slice(1)), s = p[6], o = p[7]) : (p = [s, o, s, o, c, h, c, h], s = c, o = h);
                                var _ = f(d, p, n);
                                if (n) m += _; else {
                                    for (var k = 0, C = _.length; k < C; k++) _[k].segment1 = g, _[k].segment2 = x, _[k].bez1 = d, _[k].bez2 = p;
                                    m = m.concat(_)
                                }
                            }
                        }
                    }
                }
                return m
            }

            function m(t, e, i, n, r, a) {
                null != t ? (this.a = +t, this.b = +e, this.c = +i, this.d = +n, this.e = +r, this.f = +a) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
            }

            function g() {
                return this.x + L + this.y + L + this.width + " × " + this.height
            }

            function v(t, e, i, n, r, a) {
                function s(t) {
                    return ((h * t + c) * t + u) * t
                }

                function o(t, e) {
                    var i = l(t, e);
                    return ((p * i + f) * i + d) * i
                }

                function l(t, e) {
                    var i, n, r, a, o, l;
                    for (r = t, l = 0; l < 8; l++) {
                        if (a = s(r) - t, H(a) < e) return r;
                        if (o = (3 * h * r + 2 * c) * r + u, H(o) < 1e-6) break;
                        r -= a / o
                    }
                    if (i = 0, n = 1, r = t, r < i) return i;
                    if (r > n) return n;
                    for (; i < n;) {
                        if (a = s(r), H(a - t) < e) return r;
                        t > a ? i = r : n = r, r = (n - i) / 2 + i
                    }
                    return r
                }

                var u = 3 * e, c = 3 * (n - e) - u, h = 1 - u - c, d = 3 * i, f = 3 * (r - i) - d, p = 1 - d - f;
                return o(t, 1 / (200 * a))
            }

            function y(t, e) {
                var i = [], n = {};
                if (this.ms = e, this.times = 1, t) {
                    for (var r in t) t[S](r) && (n[tt(r)] = t[r], i.push(tt(r)));
                    i.sort(dt)
                }
                this.anim = n, this.top = i[i.length - 1], this.percents = i
            }

            function x(t, i, r, a, s, o) {
                r = tt(r);
                var l, u, c, h, d, f, p = t.ms, g = {}, y = {}, x = {};
                if (a) for (w = 0, _ = le.length; w < _; w++) {
                    var b = le[w];
                    if (b.el.id == i.id && b.anim == t) {
                        b.percent != r ? (le.splice(w, 1), c = 1) : u = b, i.attr(b.totalOrigin);
                        break
                    }
                } else a = +y;
                for (var w = 0, _ = t.percents.length; w < _; w++) {
                    if (t.percents[w] == r || t.percents[w] > a * t.top) {
                        r = t.percents[w], d = t.percents[w - 1] || 0, p = p / t.top * (r - d), h = t.percents[w + 1], l = t.anim[r];
                        break
                    }
                    a && i.attr(t.anim[t.percents[w]])
                }
                if (l) {
                    if (u) u.initstatus = a, u.start = new Date - u.ms * a; else {
                        for (var C in l) if (l[S](C) && (rt[S](C) || i.paper.customAttributes[S](C))) switch (g[C] = i.attr(C), null == g[C] && (g[C] = nt[C]), y[C] = l[C], rt[C]) {
                            case X:
                                x[C] = (y[C] - g[C]) / p;
                                break;
                            case"colour":
                                g[C] = e.getRGB(g[C]);
                                var E = e.getRGB(y[C]);
                                x[C] = {r: (E.r - g[C].r) / p, g: (E.g - g[C].g) / p, b: (E.b - g[C].b) / p};
                                break;
                            case"path":
                                var B = Rt(g[C], y[C]), T = B[1];
                                for (g[C] = B[0], x[C] = [], w = 0, _ = g[C].length; w < _; w++) {
                                    x[C][w] = [0];
                                    for (var A = 1, N = g[C][w].length; A < N; A++) x[C][w][A] = (T[w][A] - g[C][w][A]) / p
                                }
                                break;
                            case"transform":
                                var O = i._, I = qt(O[C], y[C]);
                                if (I) for (g[C] = I.from, y[C] = I.to, x[C] = [], x[C].real = !0, w = 0, _ = g[C].length; w < _; w++) for (x[C][w] = [g[C][w][0]], A = 1, N = g[C][w].length; A < N; A++) x[C][w][A] = (y[C][w][A] - g[C][w][A]) / p; else {
                                    var L = i.matrix || new m, R = {
                                        _: {transform: O.transform}, getBBox: function () {
                                            return i.getBBox(1)
                                        }
                                    };
                                    g[C] = [L.a, L.b, L.c, L.d, L.e, L.f], Dt(R, y[C]), y[C] = R._.transform, x[C] = [(R.matrix.a - L.a) / p, (R.matrix.b - L.b) / p, (R.matrix.c - L.c) / p, (R.matrix.d - L.d) / p, (R.matrix.e - L.e) / p, (R.matrix.f - L.f) / p]
                                }
                                break;
                            case"csv":
                                var P = F(l[C])[z](k), j = F(g[C])[z](k);
                                if ("clip-rect" == C) for (g[C] = j, x[C] = [], w = j.length; w--;) x[C][w] = (P[w] - g[C][w]) / p;
                                y[C] = P;
                                break;
                            default:
                                for (P = [][M](l[C]), j = [][M](g[C]), x[C] = [], w = i.paper.customAttributes[C].length; w--;) x[C][w] = ((P[w] || 0) - (j[w] || 0)) / p
                        }
                        var D = l.easing, V = e.easing_formulas[D];
                        if (!V) if (V = F(D).match(J), V && 5 == V.length) {
                            var q = V;
                            V = function (t) {
                                return v(t, +q[1], +q[2], +q[3], +q[4], p)
                            }
                        } else V = pt;
                        if (f = l.start || t.start || +new Date, b = {
                            anim: t,
                            percent: r,
                            timestamp: f,
                            start: f + (t.del || 0),
                            status: 0,
                            initstatus: a || 0,
                            stop: !1,
                            ms: p,
                            easing: V,
                            from: g,
                            diff: x,
                            to: y,
                            el: i,
                            callback: l.callback,
                            prev: d,
                            next: h,
                            repeat: o || t.times,
                            origin: i.attr(),
                            totalOrigin: s
                        }, le.push(b), a && !u && !c && (b.stop = !0, b.start = new Date - p * a, 1 == le.length)) return ce();
                        c && (b.start = new Date - b.ms * a), 1 == le.length && ue(ce)
                    }
                    n("raphael.anim.start." + i.id, i, t)
                }
            }

            function b(t) {
                for (var e = 0; e < le.length; e++) le[e].el.paper == t && le.splice(e--, 1)
            }

            e.version = "2.1.0", e.eve = n;
            var w, _, k = /[, ]+/, C = {circle: 1, rect: 1, path: 1, ellipse: 1, text: 1, image: 1}, E = /\{(\d+)\}/g,
                S = "hasOwnProperty", B = {doc: document, win: window},
                T = {was: Object.prototype[S].call(B.win, "Raphael"), is: B.win.Raphael}, A = function () {
                    this.ca = this.customAttributes = {}
                }, N = "apply", M = "concat", O = "createTouch" in B.doc, I = "", L = " ", F = String, z = "split",
                R = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[z](L),
                P = {mousedown: "touchstart", mousemove: "touchmove", mouseup: "touchend"}, j = F.prototype.toLowerCase,
                D = Math, V = D.max, q = D.min, H = D.abs, G = D.pow, U = D.PI, X = "number", W = "string", Y = "array",
                $ = Object.prototype.toString,
                Q = (e._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
                Z = {NaN: 1, Infinity: 1, "-Infinity": 1}, J = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
                K = D.round, tt = parseFloat, et = parseInt, it = F.prototype.toUpperCase, nt = e._availableAttrs = {
                    "arrow-end": "none",
                    "arrow-start": "none",
                    blur: 0,
                    "clip-rect": "0 0 1e9 1e9",
                    cursor: "default",
                    cx: 0,
                    cy: 0,
                    fill: "#fff",
                    "fill-opacity": 1,
                    font: '10px "Arial"',
                    "font-family": '"Arial"',
                    "font-size": "10",
                    "font-style": "normal",
                    "font-weight": 400,
                    gradient: 0,
                    height: 0,
                    href: "http://raphaeljs.com/",
                    "letter-spacing": 0,
                    opacity: 1,
                    path: "M0,0",
                    r: 0,
                    rx: 0,
                    ry: 0,
                    src: "",
                    stroke: "#000",
                    "stroke-dasharray": "",
                    "stroke-linecap": "butt",
                    "stroke-linejoin": "butt",
                    "stroke-miterlimit": 0,
                    "stroke-opacity": 1,
                    "stroke-width": 1,
                    target: "_blank",
                    "text-anchor": "middle",
                    title: "Raphael",
                    transform: "",
                    width: 0,
                    x: 0,
                    y: 0
                }, rt = e._availableAnimAttrs = {
                    blur: X,
                    "clip-rect": "csv",
                    cx: X,
                    cy: X,
                    fill: "colour",
                    "fill-opacity": X,
                    "font-size": X,
                    height: X,
                    opacity: X,
                    path: "path",
                    r: X,
                    rx: X,
                    ry: X,
                    stroke: "colour",
                    "stroke-opacity": X,
                    "stroke-width": X,
                    transform: "transform",
                    width: X,
                    x: X,
                    y: X
                },
                at = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
                st = {hs: 1, rg: 1}, ot = /,?([achlmqrstvxz]),?/gi,
                lt = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
                ut = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
                ct = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
                ht = (e._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}),
                dt = function (t, e) {
                    return tt(t) - tt(e)
                }, ft = function () {
                }, pt = function (t) {
                    return t
                }, mt = e._rectPath = function (t, e, i, n, r) {
                    return r ? [["M", t + r, e], ["l", i - 2 * r, 0], ["a", r, r, 0, 0, 1, r, r], ["l", 0, n - 2 * r], ["a", r, r, 0, 0, 1, -r, r], ["l", 2 * r - i, 0], ["a", r, r, 0, 0, 1, -r, -r], ["l", 0, 2 * r - n], ["a", r, r, 0, 0, 1, r, -r], ["z"]] : [["M", t, e], ["l", i, 0], ["l", 0, n], ["l", -i, 0], ["z"]]
                }, gt = function (t, e, i, n) {
                    return null == n && (n = i), [["M", t, e], ["m", 0, -n], ["a", i, n, 0, 1, 1, 0, 2 * n], ["a", i, n, 0, 1, 1, 0, -2 * n], ["z"]]
                }, vt = e._getPath = {
                    path: function (t) {
                        return t.attr("path")
                    }, circle: function (t) {
                        var e = t.attrs;
                        return gt(e.cx, e.cy, e.r)
                    }, ellipse: function (t) {
                        var e = t.attrs;
                        return gt(e.cx, e.cy, e.rx, e.ry)
                    }, rect: function (t) {
                        var e = t.attrs;
                        return mt(e.x, e.y, e.width, e.height, e.r)
                    }, image: function (t) {
                        var e = t.attrs;
                        return mt(e.x, e.y, e.width, e.height)
                    }, text: function (t) {
                        var e = t._getBBox();
                        return mt(e.x, e.y, e.width, e.height)
                    }, set: function (t) {
                        var e = t._getBBox();
                        return mt(e.x, e.y, e.width, e.height)
                    }
                }, yt = e.mapPath = function (t, e) {
                    if (!e) return t;
                    var i, n, r, a, s, o, l;
                    for (t = Rt(t), r = 0, s = t.length; r < s; r++) for (l = t[r], a = 1, o = l.length; a < o; a += 2) i = e.x(l[a], l[a + 1]), n = e.y(l[a], l[a + 1]), l[a] = i, l[a + 1] = n;
                    return t
                };
            if (e._g = B, e.type = B.win.SVGAngle || B.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == e.type) {
                var xt, bt = B.doc.createElement("div");
                if (bt.innerHTML = '<v:shape adj="1"/>', xt = bt.firstChild, xt.style.behavior = "url(#default#VML)", !xt || "object" != typeof xt.adj) return e.type = I;
                bt = null
            }
            e.svg = !(e.vml = "VML" == e.type), e._Paper = A, e.fn = _ = A.prototype = e.prototype, e._id = 0, e._oid = 0, e.is = function (t, e) {
                return e = j.call(e), "finite" == e ? !Z[S](+t) : "array" == e ? t instanceof Array : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || "array" == e && Array.isArray && Array.isArray(t) || $.call(t).slice(8, -1).toLowerCase() == e
            }, e.angle = function (t, i, n, r, a, s) {
                if (null == a) {
                    var o = t - n, l = i - r;
                    return o || l ? (180 + 180 * D.atan2(-l, -o) / U + 360) % 360 : 0
                }
                return e.angle(t, i, a, s) - e.angle(n, r, a, s)
            }, e.rad = function (t) {
                return t % 360 * U / 180
            }, e.deg = function (t) {
                return 180 * t / U % 360
            }, e.snapTo = function (t, i, n) {
                if (n = e.is(n, "finite") ? n : 10, e.is(t, Y)) {
                    for (var r = t.length; r--;) if (H(t[r] - i) <= n) return t[r]
                } else {
                    t = +t;
                    var a = i % t;
                    if (a < n) return i - a;
                    if (a > t - n) return i - a + t
                }
                return i
            };
            e.createUUID = function (t, e) {
                return function () {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t, e).toUpperCase()
                }
            }(/[xy]/g, function (t) {
                var e = 16 * D.random() | 0, i = "x" == t ? e : 3 & e | 8;
                return i.toString(16)
            });
            e.setWindow = function (t) {
                n("raphael.setWindow", e, B.win, t), B.win = t, B.doc = B.win.document, e._engine.initWin && e._engine.initWin(B.win)
            };
            var wt = function (t) {
                if (e.vml) {
                    var i, n = /^\s+|\s+$/g;
                    try {
                        var r = new ActiveXObject("htmlfile");
                        r.write("<body>"), r.close(), i = r.body
                    } catch (a) {
                        i = createPopup().document.body
                    }
                    var o = i.createTextRange();
                    wt = s(function (t) {
                        try {
                            i.style.color = F(t).replace(n, I);
                            var e = o.queryCommandValue("ForeColor");
                            return e = (255 & e) << 16 | 65280 & e | (16711680 & e) >>> 16, "#" + ("000000" + e.toString(16)).slice(-6)
                        } catch (r) {
                            return "none"
                        }
                    })
                } else {
                    var l = B.doc.createElement("i");
                    l.title = "Raphaël Colour Picker", l.style.display = "none", B.doc.body.appendChild(l), wt = s(function (t) {
                        return l.style.color = t, B.doc.defaultView.getComputedStyle(l, I).getPropertyValue("color")
                    })
                }
                return wt(t)
            }, _t = function () {
                return "hsb(" + [this.h, this.s, this.b] + ")"
            }, kt = function () {
                return "hsl(" + [this.h, this.s, this.l] + ")"
            }, Ct = function () {
                return this.hex
            }, Et = function (t, i, n) {
                if (null == i && e.is(t, "object") && "r" in t && "g" in t && "b" in t && (n = t.b, i = t.g, t = t.r), null == i && e.is(t, W)) {
                    var r = e.getRGB(t);
                    t = r.r, i = r.g, n = r.b
                }
                return (t > 1 || i > 1 || n > 1) && (t /= 255, i /= 255, n /= 255), [t, i, n]
            }, St = function (t, i, n, r) {
                t *= 255, i *= 255, n *= 255;
                var a = {r: t, g: i, b: n, hex: e.rgb(t, i, n), toString: Ct};
                return e.is(r, "finite") && (a.opacity = r), a
            };
            e.color = function (t) {
                var i;
                return e.is(t, "object") && "h" in t && "s" in t && "b" in t ? (i = e.hsb2rgb(t), t.r = i.r, t.g = i.g, t.b = i.b, t.hex = i.hex) : e.is(t, "object") && "h" in t && "s" in t && "l" in t ? (i = e.hsl2rgb(t), t.r = i.r, t.g = i.g, t.b = i.b, t.hex = i.hex) : (e.is(t, "string") && (t = e.getRGB(t)), e.is(t, "object") && "r" in t && "g" in t && "b" in t ? (i = e.rgb2hsl(t), t.h = i.h, t.s = i.s, t.l = i.l, i = e.rgb2hsb(t), t.v = i.b) : (t = {hex: "none"}, t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1)), t.toString = Ct, t
            }, e.hsb2rgb = function (t, e, i, n) {
                this.is(t, "object") && "h" in t && "s" in t && "b" in t && (i = t.b, e = t.s, t = t.h, n = t.o), t *= 360;
                var r, a, s, o, l;
                return t = t % 360 / 60, l = i * e, o = l * (1 - H(t % 2 - 1)), r = a = s = i - l, t = ~~t, r += [l, o, 0, 0, o, l][t], a += [o, l, l, o, 0, 0][t], s += [0, 0, o, l, l, o][t], St(r, a, s, n)
            }, e.hsl2rgb = function (t, e, i, n) {
                this.is(t, "object") && "h" in t && "s" in t && "l" in t && (i = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || i > 1) && (t /= 360, e /= 100, i /= 100), t *= 360;
                var r, a, s, o, l;
                return t = t % 360 / 60, l = 2 * e * (i < .5 ? i : 1 - i), o = l * (1 - H(t % 2 - 1)), r = a = s = i - l / 2, t = ~~t, r += [l, o, 0, 0, o, l][t], a += [o, l, l, o, 0, 0][t], s += [0, 0, o, l, l, o][t], St(r, a, s, n)
            }, e.rgb2hsb = function (t, e, i) {
                i = Et(t, e, i), t = i[0], e = i[1], i = i[2];
                var n, r, a, s;
                return a = V(t, e, i), s = a - q(t, e, i), n = 0 == s ? null : a == t ? (e - i) / s : a == e ? (i - t) / s + 2 : (t - e) / s + 4, n = (n + 360) % 6 * 60 / 360, r = 0 == s ? 0 : s / a, {
                    h: n,
                    s: r,
                    b: a,
                    toString: _t
                }
            }, e.rgb2hsl = function (t, e, i) {
                i = Et(t, e, i), t = i[0], e = i[1], i = i[2];
                var n, r, a, s, o, l;
                return s = V(t, e, i), o = q(t, e, i), l = s - o, n = 0 == l ? null : s == t ? (e - i) / l : s == e ? (i - t) / l + 2 : (t - e) / l + 4, n = (n + 360) % 6 * 60 / 360, a = (s + o) / 2, r = 0 == l ? 0 : a < .5 ? l / (2 * a) : l / (2 - 2 * a), {
                    h: n,
                    s: r,
                    l: a,
                    toString: kt
                }
            }, e._path2string = function () {
                return this.join(",").replace(ot, "$1")
            };
            e._preload = function (t, e) {
                var i = B.doc.createElement("img");
                i.style.cssText = "position:absolute;left:-9999em;top:-9999em", i.onload = function () {
                    e.call(this), this.onload = null, B.doc.body.removeChild(this)
                }, i.onerror = function () {
                    B.doc.body.removeChild(this)
                }, B.doc.body.appendChild(i), i.src = t
            };
            e.getRGB = s(function (t) {
                if (!t || (t = F(t)).indexOf("-") + 1) return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: o};
                if ("none" == t) return {r: -1, g: -1, b: -1, hex: "none", toString: o};
                !(st[S](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = wt(t));
                var i, n, r, a, s, l, u = t.match(Q);
                return u ? (u[2] && (r = et(u[2].substring(5), 16), n = et(u[2].substring(3, 5), 16), i = et(u[2].substring(1, 3), 16)), u[3] && (r = et((s = u[3].charAt(3)) + s, 16), n = et((s = u[3].charAt(2)) + s, 16), i = et((s = u[3].charAt(1)) + s, 16)), u[4] && (l = u[4][z](at), i = tt(l[0]), "%" == l[0].slice(-1) && (i *= 2.55), n = tt(l[1]), "%" == l[1].slice(-1) && (n *= 2.55), r = tt(l[2]), "%" == l[2].slice(-1) && (r *= 2.55), "rgba" == u[1].toLowerCase().slice(0, 4) && (a = tt(l[3])), l[3] && "%" == l[3].slice(-1) && (a /= 100)), u[5] ? (l = u[5][z](at), i = tt(l[0]), "%" == l[0].slice(-1) && (i *= 2.55), n = tt(l[1]), "%" == l[1].slice(-1) && (n *= 2.55), r = tt(l[2]), "%" == l[2].slice(-1) && (r *= 2.55), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (i /= 360), "hsba" == u[1].toLowerCase().slice(0, 4) && (a = tt(l[3])), l[3] && "%" == l[3].slice(-1) && (a /= 100), e.hsb2rgb(i, n, r, a)) : u[6] ? (l = u[6][z](at), i = tt(l[0]), "%" == l[0].slice(-1) && (i *= 2.55), n = tt(l[1]), "%" == l[1].slice(-1) && (n *= 2.55), r = tt(l[2]), "%" == l[2].slice(-1) && (r *= 2.55), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (i /= 360), "hsla" == u[1].toLowerCase().slice(0, 4) && (a = tt(l[3])), l[3] && "%" == l[3].slice(-1) && (a /= 100), e.hsl2rgb(i, n, r, a)) : (u = {
                    r: i,
                    g: n,
                    b: r,
                    toString: o
                }, u.hex = "#" + (16777216 | r | n << 8 | i << 16).toString(16).slice(1), e.is(a, "finite") && (u.opacity = a), u)) : {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: o
                }
            }, e), e.hsb = s(function (t, i, n) {
                return e.hsb2rgb(t, i, n).hex
            }), e.hsl = s(function (t, i, n) {
                return e.hsl2rgb(t, i, n).hex
            }), e.rgb = s(function (t, e, i) {
                return "#" + (16777216 | i | e << 8 | t << 16).toString(16).slice(1)
            }), e.getColor = function (t) {
                var e = this.getColor.start = this.getColor.start || {h: 0, s: 1, b: t || .75},
                    i = this.hsb2rgb(e.h, e.s, e.b);
                return e.h += .075, e.h > 1 && (e.h = 0, e.s -= .2, e.s <= 0 && (this.getColor.start = {
                    h: 0,
                    s: 1,
                    b: e.b
                })), i.hex
            }, e.getColor.reset = function () {
                delete this.start
            }, e.parsePathString = function (t) {
                if (!t) return null;
                var i = Bt(t);
                if (i.arr) return At(i.arr);
                var n = {a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0}, r = [];
                return e.is(t, Y) && e.is(t[0], Y) && (r = At(t)), r.length || F(t).replace(lt, function (t, e, i) {
                    var a = [], s = e.toLowerCase();
                    if (i.replace(ct, function (t, e) {
                        e && a.push(+e)
                    }), "m" == s && a.length > 2 && (r.push([e][M](a.splice(0, 2))), s = "l", e = "m" == e ? "l" : "L"), "r" == s) r.push([e][M](a)); else for (; a.length >= n[s] && (r.push([e][M](a.splice(0, n[s]))), n[s]);) ;
                }), r.toString = e._path2string, i.arr = At(r), r
            }, e.parseTransformString = s(function (t) {
                if (!t) return null;
                var i = [];
                return e.is(t, Y) && e.is(t[0], Y) && (i = At(t)), i.length || F(t).replace(ut, function (t, e, n) {
                    var r = [];
                    j.call(e);
                    n.replace(ct, function (t, e) {
                        e && r.push(+e)
                    }), i.push([e][M](r))
                }), i.toString = e._path2string, i
            });
            var Bt = function (t) {
                var e = Bt.ps = Bt.ps || {};
                return e[t] ? e[t].sleep = 100 : e[t] = {sleep: 100}, setTimeout(function () {
                    for (var i in e) e[S](i) && i != t && (e[i].sleep--, !e[i].sleep && delete e[i])
                }), e[t]
            };
            e.findDotsAtSegment = function (t, e, i, n, r, a, s, o, l) {
                var u = 1 - l, c = G(u, 3), h = G(u, 2), d = l * l, f = d * l,
                    p = c * t + 3 * h * l * i + 3 * u * l * l * r + f * s,
                    m = c * e + 3 * h * l * n + 3 * u * l * l * a + f * o,
                    g = t + 2 * l * (i - t) + d * (r - 2 * i + t), v = e + 2 * l * (n - e) + d * (a - 2 * n + e),
                    y = i + 2 * l * (r - i) + d * (s - 2 * r + i), x = n + 2 * l * (a - n) + d * (o - 2 * a + n),
                    b = u * t + l * i, w = u * e + l * n, _ = u * r + l * s, k = u * a + l * o,
                    C = 90 - 180 * D.atan2(g - y, v - x) / U;
                return (g > y || v < x) && (C += 180), {
                    x: p,
                    y: m,
                    m: {x: g, y: v},
                    n: {x: y, y: x},
                    start: {x: b, y: w},
                    end: {x: _, y: k},
                    alpha: C
                }
            }, e.bezierBBox = function (t, i, n, r, a, s, o, l) {
                e.is(t, "array") || (t = [t, i, n, r, a, s, o, l]);
                var u = zt.apply(null, t);
                return {
                    x: u.min.x,
                    y: u.min.y,
                    x2: u.max.x,
                    y2: u.max.y,
                    width: u.max.x - u.min.x,
                    height: u.max.y - u.min.y
                }
            }, e.isPointInsideBBox = function (t, e, i) {
                return e >= t.x && e <= t.x2 && i >= t.y && i <= t.y2
            }, e.isBBoxIntersect = function (t, i) {
                var n = e.isPointInsideBBox;
                return n(i, t.x, t.y) || n(i, t.x2, t.y) || n(i, t.x, t.y2) || n(i, t.x2, t.y2) || n(t, i.x, i.y) || n(t, i.x2, i.y) || n(t, i.x, i.y2) || n(t, i.x2, i.y2) || (t.x < i.x2 && t.x > i.x || i.x < t.x2 && i.x > t.x) && (t.y < i.y2 && t.y > i.y || i.y < t.y2 && i.y > t.y)
            }, e.pathIntersection = function (t, e) {
                return p(t, e)
            }, e.pathIntersectionNumber = function (t, e) {
                return p(t, e, 1)
            }, e.isPointInsidePath = function (t, i, n) {
                var r = e.pathBBox(t);
                return e.isPointInsideBBox(r, i, n) && p(t, [["M", i, n], ["H", r.x2 + 10]], 1) % 2 == 1
            }, e._removedFactory = function (t) {
                return function () {
                    n("raphael.log", null, "Raphaël: you are calling to method “" + t + "” of removed object", t)
                }
            };
            var Tt = e.pathBBox = function (t) {
                var e = Bt(t);
                if (e.bbox) return r(e.bbox);
                if (!t) return {x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0};
                t = Rt(t);
                for (var i, n = 0, a = 0, s = [], o = [], l = 0, u = t.length; l < u; l++) if (i = t[l], "M" == i[0]) n = i[1], a = i[2], s.push(n), o.push(a); else {
                    var c = zt(n, a, i[1], i[2], i[3], i[4], i[5], i[6]);
                    s = s[M](c.min.x, c.max.x), o = o[M](c.min.y, c.max.y), n = i[5], a = i[6]
                }
                var h = q[N](0, s), d = q[N](0, o), f = V[N](0, s), p = V[N](0, o), m = f - h, g = p - d,
                    v = {x: h, y: d, x2: f, y2: p, width: m, height: g, cx: h + m / 2, cy: d + g / 2};
                return e.bbox = r(v), v
            }, At = function (t) {
                var i = r(t);
                return i.toString = e._path2string, i
            }, Nt = e._pathToRelative = function (t) {
                var i = Bt(t);
                if (i.rel) return At(i.rel);
                e.is(t, Y) && e.is(t && t[0], Y) || (t = e.parsePathString(t));
                var n = [], r = 0, a = 0, s = 0, o = 0, l = 0;
                "M" == t[0][0] && (r = t[0][1], a = t[0][2], s = r, o = a, l++, n.push(["M", r, a]));
                for (var u = l, c = t.length; u < c; u++) {
                    var h = n[u] = [], d = t[u];
                    if (d[0] != j.call(d[0])) switch (h[0] = j.call(d[0]), h[0]) {
                        case"a":
                            h[1] = d[1], h[2] = d[2], h[3] = d[3], h[4] = d[4], h[5] = d[5], h[6] = +(d[6] - r).toFixed(3), h[7] = +(d[7] - a).toFixed(3);
                            break;
                        case"v":
                            h[1] = +(d[1] - a).toFixed(3);
                            break;
                        case"m":
                            s = d[1], o = d[2];
                        default:
                            for (var f = 1, p = d.length; f < p; f++) h[f] = +(d[f] - (f % 2 ? r : a)).toFixed(3)
                    } else {
                        h = n[u] = [], "m" == d[0] && (s = d[1] + r, o = d[2] + a);
                        for (var m = 0, g = d.length; m < g; m++) n[u][m] = d[m]
                    }
                    var v = n[u].length;
                    switch (n[u][0]) {
                        case"z":
                            r = s, a = o;
                            break;
                        case"h":
                            r += +n[u][v - 1];
                            break;
                        case"v":
                            a += +n[u][v - 1];
                            break;
                        default:
                            r += +n[u][v - 2], a += +n[u][v - 1]
                    }
                }
                return n.toString = e._path2string, i.rel = At(n), n
            }, Mt = e._pathToAbsolute = function (t) {
                var i = Bt(t);
                if (i.abs) return At(i.abs);
                if (e.is(t, Y) && e.is(t && t[0], Y) || (t = e.parsePathString(t)), !t || !t.length) return [["M", 0, 0]];
                var n = [], r = 0, a = 0, s = 0, o = 0, u = 0;
                "M" == t[0][0] && (r = +t[0][1], a = +t[0][2], s = r, o = a, u++, n[0] = ["M", r, a]);
                for (var c, h, d = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), f = u, p = t.length; f < p; f++) {
                    if (n.push(c = []), h = t[f], h[0] != it.call(h[0])) switch (c[0] = it.call(h[0]), c[0]) {
                        case"A":
                            c[1] = h[1], c[2] = h[2], c[3] = h[3], c[4] = h[4], c[5] = h[5], c[6] = +(h[6] + r), c[7] = +(h[7] + a);
                            break;
                        case"V":
                            c[1] = +h[1] + a;
                            break;
                        case"H":
                            c[1] = +h[1] + r;
                            break;
                        case"R":
                            for (var m = [r, a][M](h.slice(1)), g = 2, v = m.length; g < v; g++) m[g] = +m[g] + r, m[++g] = +m[g] + a;
                            n.pop(), n = n[M](l(m, d));
                            break;
                        case"M":
                            s = +h[1] + r, o = +h[2] + a;
                        default:
                            for (g = 1, v = h.length; g < v; g++) c[g] = +h[g] + (g % 2 ? r : a)
                    } else if ("R" == h[0]) m = [r, a][M](h.slice(1)), n.pop(), n = n[M](l(m, d)), c = ["R"][M](h.slice(-2)); else for (var y = 0, x = h.length; y < x; y++) c[y] = h[y];
                    switch (c[0]) {
                        case"Z":
                            r = s, a = o;
                            break;
                        case"H":
                            r = c[1];
                            break;
                        case"V":
                            a = c[1];
                            break;
                        case"M":
                            s = c[c.length - 2], o = c[c.length - 1];
                        default:
                            r = c[c.length - 2], a = c[c.length - 1]
                    }
                }
                return n.toString = e._path2string, i.abs = At(n), n
            }, Ot = function (t, e, i, n) {
                return [t, e, i, n, i, n]
            }, It = function (t, e, i, n, r, a) {
                var s = 1 / 3, o = 2 / 3;
                return [s * t + o * i, s * e + o * n, s * r + o * i, s * a + o * n, r, a]
            }, Lt = function (t, e, i, n, r, a, o, l, u, c) {
                var h, d = 120 * U / 180, f = U / 180 * (+r || 0), p = [], m = s(function (t, e, i) {
                    var n = t * D.cos(i) - e * D.sin(i), r = t * D.sin(i) + e * D.cos(i);
                    return {x: n, y: r}
                });
                if (c) C = c[0], E = c[1], _ = c[2], k = c[3]; else {
                    h = m(t, e, -f), t = h.x, e = h.y, h = m(l, u, -f), l = h.x, u = h.y;
                    var g = (D.cos(U / 180 * r), D.sin(U / 180 * r), (t - l) / 2), v = (e - u) / 2,
                        y = g * g / (i * i) + v * v / (n * n);
                    y > 1 && (y = D.sqrt(y), i *= y, n *= y);
                    var x = i * i, b = n * n,
                        w = (a == o ? -1 : 1) * D.sqrt(H((x * b - x * v * v - b * g * g) / (x * v * v + b * g * g))),
                        _ = w * i * v / n + (t + l) / 2, k = w * -n * g / i + (e + u) / 2,
                        C = D.asin(((e - k) / n).toFixed(9)), E = D.asin(((u - k) / n).toFixed(9));
                    C = t < _ ? U - C : C, E = l < _ ? U - E : E, C < 0 && (C = 2 * U + C), E < 0 && (E = 2 * U + E), o && C > E && (C -= 2 * U), !o && E > C && (E -= 2 * U)
                }
                var S = E - C;
                if (H(S) > d) {
                    var B = E, T = l, A = u;
                    E = C + d * (o && E > C ? 1 : -1), l = _ + i * D.cos(E), u = k + n * D.sin(E), p = Lt(l, u, i, n, r, 0, o, T, A, [E, B, _, k])
                }
                S = E - C;
                var N = D.cos(C), O = D.sin(C), I = D.cos(E), L = D.sin(E), F = D.tan(S / 4), R = 4 / 3 * i * F,
                    P = 4 / 3 * n * F, j = [t, e], V = [t + R * O, e - P * N], q = [l + R * L, u - P * I], G = [l, u];
                if (V[0] = 2 * j[0] - V[0], V[1] = 2 * j[1] - V[1], c) return [V, q, G][M](p);
                p = [V, q, G][M](p).join()[z](",");
                for (var X = [], W = 0, Y = p.length; W < Y; W++) X[W] = W % 2 ? m(p[W - 1], p[W], f).y : m(p[W], p[W + 1], f).x;
                return X
            }, Ft = function (t, e, i, n, r, a, s, o, l) {
                var u = 1 - l;
                return {
                    x: G(u, 3) * t + 3 * G(u, 2) * l * i + 3 * u * l * l * r + G(l, 3) * s,
                    y: G(u, 3) * e + 3 * G(u, 2) * l * n + 3 * u * l * l * a + G(l, 3) * o
                }
            }, zt = s(function (t, e, i, n, r, a, s, o) {
                var l, u = r - 2 * i + t - (s - 2 * r + i), c = 2 * (i - t) - 2 * (r - i), h = t - i,
                    d = (-c + D.sqrt(c * c - 4 * u * h)) / 2 / u, f = (-c - D.sqrt(c * c - 4 * u * h)) / 2 / u,
                    p = [e, o], m = [t, s];
                return H(d) > "1e12" && (d = .5), H(f) > "1e12" && (f = .5), d > 0 && d < 1 && (l = Ft(t, e, i, n, r, a, s, o, d), m.push(l.x), p.push(l.y)), f > 0 && f < 1 && (l = Ft(t, e, i, n, r, a, s, o, f), m.push(l.x), p.push(l.y)), u = a - 2 * n + e - (o - 2 * a + n), c = 2 * (n - e) - 2 * (a - n), h = e - n, d = (-c + D.sqrt(c * c - 4 * u * h)) / 2 / u, f = (-c - D.sqrt(c * c - 4 * u * h)) / 2 / u, H(d) > "1e12" && (d = .5), H(f) > "1e12" && (f = .5), d > 0 && d < 1 && (l = Ft(t, e, i, n, r, a, s, o, d), m.push(l.x), p.push(l.y)), f > 0 && f < 1 && (l = Ft(t, e, i, n, r, a, s, o, f), m.push(l.x), p.push(l.y)), {
                    min: {
                        x: q[N](0, m),
                        y: q[N](0, p)
                    }, max: {x: V[N](0, m), y: V[N](0, p)}
                }
            }), Rt = e._path2curve = s(function (t, e) {
                var i = !e && Bt(t);
                if (!e && i.curve) return At(i.curve);
                for (var n = Mt(t), r = e && Mt(e), a = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, s = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null}, o = (function (t, e) {
                    var i, n;
                    if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                    switch (!(t[0] in {T: 1, Q: 1}) && (e.qx = e.qy = null), t[0]) {
                        case"M":
                            e.X = t[1], e.Y = t[2];
                            break;
                        case"A":
                            t = ["C"][M](Lt[N](0, [e.x, e.y][M](t.slice(1))));
                            break;
                        case"S":
                            i = e.x + (e.x - (e.bx || e.x)), n = e.y + (e.y - (e.by || e.y)), t = ["C", i, n][M](t.slice(1));
                            break;
                        case"T":
                            e.qx = e.x + (e.x - (e.qx || e.x)), e.qy = e.y + (e.y - (e.qy || e.y)), t = ["C"][M](It(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                            break;
                        case"Q":
                            e.qx = t[1], e.qy = t[2], t = ["C"][M](It(e.x, e.y, t[1], t[2], t[3], t[4]));
                            break;
                        case"L":
                            t = ["C"][M](Ot(e.x, e.y, t[1], t[2]));
                            break;
                        case"H":
                            t = ["C"][M](Ot(e.x, e.y, t[1], e.y));
                            break;
                        case"V":
                            t = ["C"][M](Ot(e.x, e.y, e.x, t[1]));
                            break;
                        case"Z":
                            t = ["C"][M](Ot(e.x, e.y, e.X, e.Y))
                    }
                    return t
                }), l = function (t, e) {
                    if (t[e].length > 7) {
                        t[e].shift();
                        for (var i = t[e]; i.length;) t.splice(e++, 0, ["C"][M](i.splice(0, 6)));
                        t.splice(e, 1), h = V(n.length, r && r.length || 0)
                    }
                }, u = function (t, e, i, a, s) {
                    t && e && "M" == t[s][0] && "M" != e[s][0] && (e.splice(s, 0, ["M", a.x, a.y]), i.bx = 0, i.by = 0, i.x = t[s][1], i.y = t[s][2], h = V(n.length, r && r.length || 0))
                }, c = 0, h = V(n.length, r && r.length || 0); c < h; c++) {
                    n[c] = o(n[c], a), l(n, c), r && (r[c] = o(r[c], s)), r && l(r, c), u(n, r, a, s, c), u(r, n, s, a, c);
                    var d = n[c], f = r && r[c], p = d.length, m = r && f.length;
                    a.x = d[p - 2], a.y = d[p - 1], a.bx = tt(d[p - 4]) || a.x, a.by = tt(d[p - 3]) || a.y, s.bx = r && (tt(f[m - 4]) || s.x), s.by = r && (tt(f[m - 3]) || s.y), s.x = r && f[m - 2], s.y = r && f[m - 1]
                }
                return r || (i.curve = At(n)), r ? [n, r] : n
            }, null, At), Pt = (e._parseDots = s(function (t) {
                for (var i = [], n = 0, r = t.length; n < r; n++) {
                    var a = {}, s = t[n].match(/^([^:]*):?([\d\.]*)/);
                    if (a.color = e.getRGB(s[1]), a.color.error) return null;
                    a.color = a.color.hex, s[2] && (a.offset = s[2] + "%"), i.push(a)
                }
                for (n = 1, r = i.length - 1; n < r; n++) if (!i[n].offset) {
                    for (var o = tt(i[n - 1].offset || 0), l = 0, u = n + 1; u < r; u++) if (i[u].offset) {
                        l = i[u].offset;
                        break
                    }
                    l || (l = 100, u = r), l = tt(l);
                    for (var c = (l - o) / (u - n + 1); n < u; n++) o += c, i[n].offset = o + "%"
                }
                return i
            }), e._tear = function (t, e) {
                t == e.top && (e.top = t.prev), t == e.bottom && (e.bottom = t.next), t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next)
            }), jt = (e._tofront = function (t, e) {
                e.top !== t && (Pt(t, e), t.next = null, t.prev = e.top, e.top.next = t, e.top = t)
            }, e._toback = function (t, e) {
                e.bottom !== t && (Pt(t, e), t.next = e.bottom, t.prev = null, e.bottom.prev = t, e.bottom = t)
            }, e._insertafter = function (t, e, i) {
                Pt(t, i), e == i.top && (i.top = t), e.next && (e.next.prev = t), t.next = e.next, t.prev = e, e.next = t
            }, e._insertbefore = function (t, e, i) {
                Pt(t, i), e == i.bottom && (i.bottom = t), e.prev && (e.prev.next = t), t.prev = e.prev, e.prev = t, t.next = e
            }, e.toMatrix = function (t, e) {
                var i = Tt(t), n = {
                    _: {transform: I}, getBBox: function () {
                        return i
                    }
                };
                return Dt(n, e), n.matrix
            }), Dt = (e.transformPath = function (t, e) {
                return yt(t, jt(t, e))
            }, e._extractTransform = function (t, i) {
                if (null == i) return t._.transform;
                i = F(i).replace(/\.{3}|\u2026/g, t._.transform || I);
                var n = e.parseTransformString(i), r = 0, a = 0, s = 0, o = 1, l = 1, u = t._, c = new m;
                if (u.transform = n || [], n) for (var h = 0, d = n.length; h < d; h++) {
                    var f, p, g, v, y, x = n[h], b = x.length, w = F(x[0]).toLowerCase(), _ = x[0] != w,
                        k = _ ? c.invert() : 0;
                    "t" == w && 3 == b ? _ ? (f = k.x(0, 0), p = k.y(0, 0), g = k.x(x[1], x[2]), v = k.y(x[1], x[2]), c.translate(g - f, v - p)) : c.translate(x[1], x[2]) : "r" == w ? 2 == b ? (y = y || t.getBBox(1), c.rotate(x[1], y.x + y.width / 2, y.y + y.height / 2), r += x[1]) : 4 == b && (_ ? (g = k.x(x[2], x[3]), v = k.y(x[2], x[3]), c.rotate(x[1], g, v)) : c.rotate(x[1], x[2], x[3]), r += x[1]) : "s" == w ? 2 == b || 3 == b ? (y = y || t.getBBox(1), c.scale(x[1], x[b - 1], y.x + y.width / 2, y.y + y.height / 2), o *= x[1], l *= x[b - 1]) : 5 == b && (_ ? (g = k.x(x[3], x[4]), v = k.y(x[3], x[4]), c.scale(x[1], x[2], g, v)) : c.scale(x[1], x[2], x[3], x[4]), o *= x[1], l *= x[2]) : "m" == w && 7 == b && c.add(x[1], x[2], x[3], x[4], x[5], x[6]), u.dirtyT = 1, t.matrix = c
                }
                t.matrix = c, u.sx = o, u.sy = l, u.deg = r, u.dx = a = c.e, u.dy = s = c.f, 1 == o && 1 == l && !r && u.bbox ? (u.bbox.x += +a, u.bbox.y += +s) : u.dirtyT = 1
            }), Vt = function (t) {
                var e = t[0];
                switch (e.toLowerCase()) {
                    case"t":
                        return [e, 0, 0];
                    case"m":
                        return [e, 1, 0, 0, 1, 0, 0];
                    case"r":
                        return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                    case"s":
                        return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
                }
            }, qt = e._equaliseTransform = function (t, i) {
                i = F(i).replace(/\.{3}|\u2026/g, t), t = e.parseTransformString(t) || [], i = e.parseTransformString(i) || [];
                for (var n, r, a, s, o = V(t.length, i.length), l = [], u = [], c = 0; c < o; c++) {
                    if (a = t[c] || Vt(i[c]), s = i[c] || Vt(a), a[0] != s[0] || "r" == a[0].toLowerCase() && (a[2] != s[2] || a[3] != s[3]) || "s" == a[0].toLowerCase() && (a[3] != s[3] || a[4] != s[4])) return;
                    for (l[c] = [], u[c] = [], n = 0, r = V(a.length, s.length); n < r; n++) n in a && (l[c][n] = a[n]), n in s && (u[c][n] = s[n])
                }
                return {from: l, to: u}
            };
            e._getContainer = function (t, i, n, r) {
                var a;
                if (a = null != r || e.is(t, "object") ? t : B.doc.getElementById(t), null != a) return a.tagName ? null == i ? {
                    container: a,
                    width: a.style.pixelWidth || a.offsetWidth,
                    height: a.style.pixelHeight || a.offsetHeight
                } : {container: a, width: i, height: n} : {container: 1, x: t, y: i, width: n, height: r}
            }, e.pathToRelative = Nt, e._engine = {}, e.path2curve = Rt, e.matrix = function (t, e, i, n, r, a) {
                return new m(t, e, i, n, r, a)
            }, function (t) {
                function i(t) {
                    return t[0] * t[0] + t[1] * t[1]
                }

                function n(t) {
                    var e = D.sqrt(i(t));
                    t[0] && (t[0] /= e), t[1] && (t[1] /= e)
                }

                t.add = function (t, e, i, n, r, a) {
                    var s, o, l, u, c = [[], [], []],
                        h = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
                        d = [[t, i, r], [e, n, a], [0, 0, 1]];
                    for (t && t instanceof m && (d = [[t.a, t.c, t.e], [t.b, t.d, t.f], [0, 0, 1]]), s = 0; s < 3; s++) for (o = 0; o < 3; o++) {
                        for (u = 0, l = 0; l < 3; l++) u += h[s][l] * d[l][o];
                        c[s][o] = u
                    }
                    this.a = c[0][0], this.b = c[1][0], this.c = c[0][1], this.d = c[1][1], this.e = c[0][2], this.f = c[1][2]
                }, t.invert = function () {
                    var t = this, e = t.a * t.d - t.b * t.c;
                    return new m(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e)
                }, t.clone = function () {
                    return new m(this.a, this.b, this.c, this.d, this.e, this.f)
                }, t.translate = function (t, e) {
                    this.add(1, 0, 0, 1, t, e)
                }, t.scale = function (t, e, i, n) {
                    null == e && (e = t), (i || n) && this.add(1, 0, 0, 1, i, n), this.add(t, 0, 0, e, 0, 0), (i || n) && this.add(1, 0, 0, 1, -i, -n)
                }, t.rotate = function (t, i, n) {
                    t = e.rad(t), i = i || 0, n = n || 0;
                    var r = +D.cos(t).toFixed(9), a = +D.sin(t).toFixed(9);
                    this.add(r, a, -a, r, i, n), this.add(1, 0, 0, 1, -i, -n)
                }, t.x = function (t, e) {
                    return t * this.a + e * this.c + this.e
                }, t.y = function (t, e) {
                    return t * this.b + e * this.d + this.f
                }, t.get = function (t) {
                    return +this[F.fromCharCode(97 + t)].toFixed(4)
                }, t.toString = function () {
                    return e.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
                }, t.toFilter = function () {
                    return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
                }, t.offset = function () {
                    return [this.e.toFixed(4), this.f.toFixed(4)]
                }, t.split = function () {
                    var t = {};
                    t.dx = this.e, t.dy = this.f;
                    var r = [[this.a, this.c], [this.b, this.d]];
                    t.scalex = D.sqrt(i(r[0])), n(r[0]), t.shear = r[0][0] * r[1][0] + r[0][1] * r[1][1], r[1] = [r[1][0] - r[0][0] * t.shear, r[1][1] - r[0][1] * t.shear], t.scaley = D.sqrt(i(r[1])), n(r[1]), t.shear /= t.scaley;
                    var a = -r[0][1], s = r[1][1];
                    return s < 0 ? (t.rotate = e.deg(D.acos(s)), a < 0 && (t.rotate = 360 - t.rotate)) : t.rotate = e.deg(D.asin(a)), t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t
                }, t.toTransformString = function (t) {
                    var e = t || this[z]();
                    return e.isSimple ? (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [e.dx, e.dy] : I) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : I) + (e.rotate ? "r" + [e.rotate, 0, 0] : I)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
                }
            }(m.prototype);
            var Ht = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
            "Apple Computer, Inc." == navigator.vendor && (Ht && Ht[1] < 4 || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor && Ht && Ht[1] < 8 ? _.safari = function () {
                var t = this.rect(-99, -99, this.width + 99, this.height + 99).attr({stroke: "none"});
                setTimeout(function () {
                    t.remove()
                })
            } : _.safari = ft;
            for (var Gt = function () {
                this.returnValue = !1
            }, Ut = function () {
                return this.originalEvent.preventDefault()
            }, Xt = function () {
                this.cancelBubble = !0
            }, Wt = function () {
                return this.originalEvent.stopPropagation()
            }, Yt = function () {
                return B.doc.addEventListener ? function (t, e, i, n) {
                    var r = O && P[e] ? P[e] : e, a = function (r) {
                        var a = B.doc.documentElement.scrollTop || B.doc.body.scrollTop,
                            s = B.doc.documentElement.scrollLeft || B.doc.body.scrollLeft, o = r.clientX + s,
                            l = r.clientY + a;
                        if (O && P[S](e)) for (var u = 0, c = r.targetTouches && r.targetTouches.length; u < c; u++) if (r.targetTouches[u].target == t) {
                            var h = r;
                            r = r.targetTouches[u], r.originalEvent = h, r.preventDefault = Ut, r.stopPropagation = Wt;
                            break
                        }
                        return i.call(n, r, o, l)
                    };
                    return t.addEventListener(r, a, !1), function () {
                        return t.removeEventListener(r, a, !1), !0
                    }
                } : B.doc.attachEvent ? function (t, e, i, n) {
                    var r = function (t) {
                        t = t || B.win.event;
                        var e = B.doc.documentElement.scrollTop || B.doc.body.scrollTop,
                            r = B.doc.documentElement.scrollLeft || B.doc.body.scrollLeft, a = t.clientX + r,
                            s = t.clientY + e;
                        return t.preventDefault = t.preventDefault || Gt, t.stopPropagation = t.stopPropagation || Xt, i.call(n, t, a, s)
                    };
                    t.attachEvent("on" + e, r);
                    var a = function () {
                        return t.detachEvent("on" + e, r), !0
                    };
                    return a
                } : void 0
            }(), $t = [], Qt = function (t) {
                for (var e, i = t.clientX, r = t.clientY, a = B.doc.documentElement.scrollTop || B.doc.body.scrollTop, s = B.doc.documentElement.scrollLeft || B.doc.body.scrollLeft, o = $t.length; o--;) {
                    if (e = $t[o], O) {
                        for (var l, u = t.touches.length; u--;) if (l = t.touches[u], l.identifier == e.el._drag.id) {
                            i = l.clientX, r = l.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
                            break
                        }
                    } else t.preventDefault();
                    var c, h = e.el.node, d = h.nextSibling, f = h.parentNode, p = h.style.display;
                    B.win.opera && f.removeChild(h), h.style.display = "none", c = e.el.paper.getElementByPoint(i, r), h.style.display = p, B.win.opera && (d ? f.insertBefore(h, d) : f.appendChild(h)), c && n("raphael.drag.over." + e.el.id, e.el, c), i += s, r += a, n("raphael.drag.move." + e.el.id, e.move_scope || e.el, i - e.el._drag.x, r - e.el._drag.y, i, r, t)
                }
            }, Zt = function (t) {
                e.unmousemove(Qt).unmouseup(Zt);
                for (var i, r = $t.length; r--;) i = $t[r], i.el._drag = {}, n("raphael.drag.end." + i.el.id, i.end_scope || i.start_scope || i.move_scope || i.el, t);
                $t = []
            }, Jt = e.el = {}, Kt = R.length; Kt--;) !function (t) {
                e[t] = Jt[t] = function (i, n) {
                    return e.is(i, "function") && (this.events = this.events || [], this.events.push({
                        name: t,
                        f: i,
                        unbind: Yt(this.shape || this.node || B.doc, t, i, n || this)
                    })), this
                }, e["un" + t] = Jt["un" + t] = function (e) {
                    for (var i = this.events || [], n = i.length; n--;) if (i[n].name == t && i[n].f == e) return i[n].unbind(), i.splice(n, 1), !i.length && delete this.events, this;
                    return this
                }
            }(R[Kt]);
            Jt.data = function (t, i) {
                var r = ht[this.id] = ht[this.id] || {};
                if (1 == arguments.length) {
                    if (e.is(t, "object")) {
                        for (var a in t) t[S](a) && this.data(a, t[a]);
                        return this
                    }
                    return n("raphael.data.get." + this.id, this, r[t], t), r[t]
                }
                return r[t] = i, n("raphael.data.set." + this.id, this, i, t), this
            }, Jt.removeData = function (t) {
                return null == t ? ht[this.id] = {} : ht[this.id] && delete ht[this.id][t], this
            }, Jt.getData = function () {
                return r(ht[this.id] || {})
            }, Jt.hover = function (t, e, i, n) {
                return this.mouseover(t, i).mouseout(e, n || i)
            }, Jt.unhover = function (t, e) {
                return this.unmouseover(t).unmouseout(e)
            };
            var te = [];
            Jt.drag = function (t, i, r, a, s, o) {
                function l(l) {
                    (l.originalEvent || l).preventDefault();
                    var u = B.doc.documentElement.scrollTop || B.doc.body.scrollTop,
                        c = B.doc.documentElement.scrollLeft || B.doc.body.scrollLeft;
                    this._drag.x = l.clientX + c, this._drag.y = l.clientY + u, this._drag.id = l.identifier, !$t.length && e.mousemove(Qt).mouseup(Zt), $t.push({
                        el: this,
                        move_scope: a,
                        start_scope: s,
                        end_scope: o
                    }), i && n.on("raphael.drag.start." + this.id, i), t && n.on("raphael.drag.move." + this.id, t), r && n.on("raphael.drag.end." + this.id, r), n("raphael.drag.start." + this.id, s || a || this, l.clientX + c, l.clientY + u, l)
                }

                return this._drag = {}, te.push({el: this, start: l}), this.mousedown(l), this
            }, Jt.onDragOver = function (t) {
                t ? n.on("raphael.drag.over." + this.id, t) : n.unbind("raphael.drag.over." + this.id)
            }, Jt.undrag = function () {
                for (var t = te.length; t--;) te[t].el == this && (this.unmousedown(te[t].start), te.splice(t, 1), n.unbind("raphael.drag.*." + this.id));
                !te.length && e.unmousemove(Qt).unmouseup(Zt), $t = []
            }, _.circle = function (t, i, n) {
                var r = e._engine.circle(this, t || 0, i || 0, n || 0);
                return this.__set__ && this.__set__.push(r), r
            }, _.rect = function (t, i, n, r, a) {
                var s = e._engine.rect(this, t || 0, i || 0, n || 0, r || 0, a || 0);
                return this.__set__ && this.__set__.push(s), s
            }, _.ellipse = function (t, i, n, r) {
                var a = e._engine.ellipse(this, t || 0, i || 0, n || 0, r || 0);
                return this.__set__ && this.__set__.push(a), a
            }, _.path = function (t) {
                t && !e.is(t, W) && !e.is(t[0], Y) && (t += I);
                var i = e._engine.path(e.format[N](e, arguments), this);
                return this.__set__ && this.__set__.push(i), i
            }, _.image = function (t, i, n, r, a) {
                var s = e._engine.image(this, t || "about:blank", i || 0, n || 0, r || 0, a || 0);
                return this.__set__ && this.__set__.push(s), s
            }, _.text = function (t, i, n) {
                var r = e._engine.text(this, t || 0, i || 0, F(n));
                return this.__set__ && this.__set__.push(r), r
            }, _.set = function (t) {
                !e.is(t, "array") && (t = Array.prototype.splice.call(arguments, 0, arguments.length));
                var i = new de(t);
                return this.__set__ && this.__set__.push(i), i.paper = this, i.type = "set", i
            }, _.setStart = function (t) {
                this.__set__ = t || this.set()
            }, _.setFinish = function (t) {
                var e = this.__set__;
                return delete this.__set__, e
            }, _.setSize = function (t, i) {
                return e._engine.setSize.call(this, t, i)
            }, _.setViewBox = function (t, i, n, r, a) {
                return e._engine.setViewBox.call(this, t, i, n, r, a)
            }, _.top = _.bottom = null, _.raphael = e;
            var ee = function (t) {
                var e = t.getBoundingClientRect(), i = t.ownerDocument, n = i.body, r = i.documentElement,
                    a = r.clientTop || n.clientTop || 0, s = r.clientLeft || n.clientLeft || 0,
                    o = e.top + (B.win.pageYOffset || r.scrollTop || n.scrollTop) - a,
                    l = e.left + (B.win.pageXOffset || r.scrollLeft || n.scrollLeft) - s;
                return {y: o, x: l}
            };
            _.getElementByPoint = function (t, e) {
                var i = this, n = i.canvas, r = B.doc.elementFromPoint(t, e);
                if (B.win.opera && "svg" == r.tagName) {
                    var a = ee(n), s = n.createSVGRect();
                    s.x = t - a.x, s.y = e - a.y, s.width = s.height = 1;
                    var o = n.getIntersectionList(s, null);
                    o.length && (r = o[o.length - 1])
                }
                if (!r) return null;
                for (; r.parentNode && r != n.parentNode && !r.raphael;) r = r.parentNode;
                return r == i.canvas.parentNode && (r = n), r = r && r.raphael ? i.getById(r.raphaelid) : null
            }, _.getElementsByBBox = function (t) {
                var i = this.set();
                return this.forEach(function (n) {
                    e.isBBoxIntersect(n.getBBox(), t) && i.push(n)
                }), i
            }, _.getById = function (t) {
                for (var e = this.bottom; e;) {
                    if (e.id == t) return e;
                    e = e.next
                }
                return null
            }, _.forEach = function (t, e) {
                for (var i = this.bottom; i;) {
                    if (t.call(e, i) === !1) return this;
                    i = i.next
                }
                return this
            }, _.getElementsByPoint = function (t, e) {
                var i = this.set();
                return this.forEach(function (n) {
                    n.isPointInside(t, e) && i.push(n)
                }), i
            }, Jt.isPointInside = function (t, i) {
                var n = this.realPath = this.realPath || vt[this.type](this);
                return e.isPointInsidePath(n, t, i)
            }, Jt.getBBox = function (t) {
                if (this.removed) return {};
                var e = this._;
                return t ? (!e.dirty && e.bboxwt || (this.realPath = vt[this.type](this), e.bboxwt = Tt(this.realPath), e.bboxwt.toString = g, e.dirty = 0), e.bboxwt) : ((e.dirty || e.dirtyT || !e.bbox) && (!e.dirty && this.realPath || (e.bboxwt = 0, this.realPath = vt[this.type](this)), e.bbox = Tt(yt(this.realPath, this.matrix)), e.bbox.toString = g, e.dirty = e.dirtyT = 0), e.bbox)
            }, Jt.clone = function () {
                if (this.removed) return null;
                var t = this.paper[this.type]().attr(this.attr());
                return this.__set__ && this.__set__.push(t), t
            }, Jt.glow = function (t) {
                if ("text" == this.type) return null;
                t = t || {};
                var e = {
                    width: (t.width || 10) + (+this.attr("stroke-width") || 1),
                    fill: t.fill || !1,
                    opacity: t.opacity || .5,
                    offsetx: t.offsetx || 0,
                    offsety: t.offsety || 0,
                    color: t.color || "#000"
                }, i = e.width / 2, n = this.paper, r = n.set(), a = this.realPath || vt[this.type](this);
                a = this.matrix ? yt(a, this.matrix) : a;
                for (var s = 1; s < i + 1; s++) r.push(n.path(a).attr({
                    stroke: e.color,
                    fill: e.fill ? e.color : "none",
                    "stroke-linejoin": "round",
                    "stroke-linecap": "round",
                    "stroke-width": +(e.width / i * s).toFixed(3),
                    opacity: +(e.opacity / i).toFixed(3)
                }));
                return r.insertBefore(this).translate(e.offsetx, e.offsety)
            };
            var ie = function (t, i, n, r, a, s, o, l, u) {
                return null == u ? c(t, i, n, r, a, s, o, l) : e.findDotsAtSegment(t, i, n, r, a, s, o, l, h(t, i, n, r, a, s, o, l, u))
            }, ne = function (t, i) {
                return function (n, r, a) {
                    n = Rt(n);
                    for (var s, o, l, u, c, h = "", d = {}, f = 0, p = 0, m = n.length; p < m; p++) {
                        if (l = n[p], "M" == l[0]) s = +l[1], o = +l[2]; else {
                            if (u = ie(s, o, l[1], l[2], l[3], l[4], l[5], l[6]), f + u > r) {
                                if (i && !d.start) {
                                    if (c = ie(s, o, l[1], l[2], l[3], l[4], l[5], l[6], r - f), h += ["C" + c.start.x, c.start.y, c.m.x, c.m.y, c.x, c.y], a) return h;
                                    d.start = h, h = ["M" + c.x, c.y + "C" + c.n.x, c.n.y, c.end.x, c.end.y, l[5], l[6]].join(), f += u, s = +l[5], o = +l[6];
                                    continue
                                }
                                if (!t && !i) return c = ie(s, o, l[1], l[2], l[3], l[4], l[5], l[6], r - f), {
                                    x: c.x,
                                    y: c.y,
                                    alpha: c.alpha
                                }
                            }
                            f += u, s = +l[5], o = +l[6]
                        }
                        h += l.shift() + l
                    }
                    return d.end = h, c = t ? f : i ? d : e.findDotsAtSegment(s, o, l[0], l[1], l[2], l[3], l[4], l[5], 1), c.alpha && (c = {
                        x: c.x,
                        y: c.y,
                        alpha: c.alpha
                    }), c
                }
            }, re = ne(1), ae = ne(), se = ne(0, 1);
            e.getTotalLength = re, e.getPointAtLength = ae, e.getSubpath = function (t, e, i) {
                if (this.getTotalLength(t) - i < 1e-6) return se(t, e).end;
                var n = se(t, i, 1);
                return e ? se(n, e).end : n
            }, Jt.getTotalLength = function () {
                if ("path" == this.type) return this.node.getTotalLength ? this.node.getTotalLength() : re(this.attrs.path)
            }, Jt.getPointAtLength = function (t) {
                if ("path" == this.type) return ae(this.attrs.path, t)
            }, Jt.getSubpath = function (t, i) {
                if ("path" == this.type) return e.getSubpath(this.attrs.path, t, i)
            };
            var oe = e.easing_formulas = {
                linear: function (t) {
                    return t
                }, "<": function (t) {
                    return G(t, 1.7)
                }, ">": function (t) {
                    return G(t, .48)
                }, "<>": function (t) {
                    var e = .48 - t / 1.04, i = D.sqrt(.1734 + e * e), n = i - e, r = G(H(n), 1 / 3) * (n < 0 ? -1 : 1),
                        a = -i - e, s = G(H(a), 1 / 3) * (a < 0 ? -1 : 1), o = r + s + .5;
                    return 3 * (1 - o) * o * o + o * o * o
                }, backIn: function (t) {
                    var e = 1.70158;
                    return t * t * ((e + 1) * t - e)
                }, backOut: function (t) {
                    t -= 1;
                    var e = 1.70158;
                    return t * t * ((e + 1) * t + e) + 1
                }, elastic: function (t) {
                    return t == !!t ? t : G(2, -10 * t) * D.sin((t - .075) * (2 * U) / .3) + 1
                }, bounce: function (t) {
                    var e, i = 7.5625, n = 2.75;
                    return t < 1 / n ? e = i * t * t : t < 2 / n ? (t -= 1.5 / n, e = i * t * t + .75) : t < 2.5 / n ? (t -= 2.25 / n, e = i * t * t + .9375) : (t -= 2.625 / n, e = i * t * t + .984375), e
                }
            };
            oe.easeIn = oe["ease-in"] = oe["<"], oe.easeOut = oe["ease-out"] = oe[">"], oe.easeInOut = oe["ease-in-out"] = oe["<>"], oe["back-in"] = oe.backIn, oe["back-out"] = oe.backOut;
            var le = [],
                ue = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                    setTimeout(t, 16)
                }, ce = function () {
                    for (var t = +new Date, i = 0; i < le.length; i++) {
                        var r = le[i];
                        if (!r.el.removed && !r.paused) {
                            var a, s, o = t - r.start, l = r.ms, u = r.easing, c = r.from, h = r.diff, d = r.to,
                                f = (r.t, r.el), p = {}, m = {};
                            if (r.initstatus ? (o = (r.initstatus * r.anim.top - r.prev) / (r.percent - r.prev) * l, r.status = r.initstatus, delete r.initstatus, r.stop && le.splice(i--, 1)) : r.status = (r.prev + (r.percent - r.prev) * (o / l)) / r.anim.top, !(o < 0)) if (o < l) {
                                var g = u(o / l);
                                for (var v in c) if (c[S](v)) {
                                    switch (rt[v]) {
                                        case X:
                                            a = +c[v] + g * l * h[v];
                                            break;
                                        case"colour":
                                            a = "rgb(" + [he(K(c[v].r + g * l * h[v].r)), he(K(c[v].g + g * l * h[v].g)), he(K(c[v].b + g * l * h[v].b))].join(",") + ")";
                                            break;
                                        case"path":
                                            a = [];
                                            for (var y = 0, b = c[v].length; y < b; y++) {
                                                a[y] = [c[v][y][0]];
                                                for (var w = 1, _ = c[v][y].length; w < _; w++) a[y][w] = +c[v][y][w] + g * l * h[v][y][w];
                                                a[y] = a[y].join(L)
                                            }
                                            a = a.join(L);
                                            break;
                                        case"transform":
                                            if (h[v].real) for (a = [], y = 0, b = c[v].length; y < b; y++) for (a[y] = [c[v][y][0]], w = 1, _ = c[v][y].length; w < _; w++) a[y][w] = c[v][y][w] + g * l * h[v][y][w]; else {
                                                var k = function (t) {
                                                    return +c[v][t] + g * l * h[v][t]
                                                };
                                                a = [["m", k(0), k(1), k(2), k(3), k(4), k(5)]]
                                            }
                                            break;
                                        case"csv":
                                            if ("clip-rect" == v) for (a = [], y = 4; y--;) a[y] = +c[v][y] + g * l * h[v][y];
                                            break;
                                        default:
                                            var C = [][M](c[v]);
                                            for (a = [], y = f.paper.customAttributes[v].length; y--;) a[y] = +C[y] + g * l * h[v][y]
                                    }
                                    p[v] = a
                                }
                                f.attr(p), function (t, e, i) {
                                    setTimeout(function () {
                                        n("raphael.anim.frame." + t, e, i)
                                    })
                                }(f.id, f, r.anim)
                            } else {
                                if (function (t, i, r) {
                                    setTimeout(function () {
                                        n("raphael.anim.frame." + i.id, i, r), n("raphael.anim.finish." + i.id, i, r), e.is(t, "function") && t.call(i)
                                    })
                                }(r.callback, f, r.anim), f.attr(d), le.splice(i--, 1), r.repeat > 1 && !r.next) {
                                    for (s in d) d[S](s) && (m[s] = r.totalOrigin[s]);
                                    r.el.attr(m), x(r.anim, r.el, r.anim.percents[0], null, r.totalOrigin, r.repeat - 1)
                                }
                                r.next && !r.stop && x(r.anim, r.el, r.next, null, r.totalOrigin, r.repeat)
                            }
                        }
                    }
                    e.svg && f && f.paper && f.paper.safari(), le.length && ue(ce)
                }, he = function (t) {
                    return t > 255 ? 255 : t < 0 ? 0 : t
                };
            Jt.animateWith = function (t, i, n, r, a, s) {
                var o = this;
                if (o.removed) return s && s.call(o), o;
                var l = n instanceof y ? n : e.animation(n, r, a, s);
                x(l, o, l.percents[0], null, o.attr());
                for (var u = 0, c = le.length; u < c; u++) if (le[u].anim == i && le[u].el == t) {
                    le[c - 1].start = le[u].start;
                    break
                }
                return o
            }, Jt.onAnimation = function (t) {
                return t ? n.on("raphael.anim.frame." + this.id, t) : n.unbind("raphael.anim.frame." + this.id), this
            }, y.prototype.delay = function (t) {
                var e = new y(this.anim, this.ms);
                return e.times = this.times, e.del = +t || 0, e
            }, y.prototype.repeat = function (t) {
                var e = new y(this.anim, this.ms);
                return e.del = this.del, e.times = D.floor(V(t, 0)) || 1, e
            }, e.animation = function (t, i, n, r) {
                if (t instanceof y) return t;
                !e.is(n, "function") && n || (r = r || n || null, n = null), t = Object(t), i = +i || 0;
                var a, s, o = {};
                for (s in t) t[S](s) && tt(s) != s && tt(s) + "%" != s && (a = !0, o[s] = t[s]);
                return a ? (n && (o.easing = n), r && (o.callback = r), new y({100: o}, i)) : new y(t, i)
            }, Jt.animate = function (t, i, n, r) {
                var a = this;
                if (a.removed) return r && r.call(a), a;
                var s = t instanceof y ? t : e.animation(t, i, n, r);
                return x(s, a, s.percents[0], null, a.attr()), a
            }, Jt.setTime = function (t, e) {
                return t && null != e && this.status(t, q(e, t.ms) / t.ms), this
            }, Jt.status = function (t, e) {
                var i, n, r = [], a = 0;
                if (null != e) return x(t, this, -1, q(e, 1)), this;
                for (i = le.length; a < i; a++) if (n = le[a], n.el.id == this.id && (!t || n.anim == t)) {
                    if (t) return n.status;
                    r.push({anim: n.anim, status: n.status})
                }
                return t ? 0 : r
            }, Jt.pause = function (t) {
                for (var e = 0; e < le.length; e++) le[e].el.id != this.id || t && le[e].anim != t || n("raphael.anim.pause." + this.id, this, le[e].anim) !== !1 && (le[e].paused = !0);
                return this
            }, Jt.resume = function (t) {
                for (var e = 0; e < le.length; e++) if (le[e].el.id == this.id && (!t || le[e].anim == t)) {
                    var i = le[e];
                    n("raphael.anim.resume." + this.id, this, i.anim) !== !1 && (delete i.paused, this.status(i.anim, i.status))
                }
                return this
            }, Jt.stop = function (t) {
                for (var e = 0; e < le.length; e++) le[e].el.id != this.id || t && le[e].anim != t || n("raphael.anim.stop." + this.id, this, le[e].anim) !== !1 && le.splice(e--, 1);
                return this
            }, n.on("raphael.remove", b), n.on("raphael.clear", b), Jt.toString = function () {
                return "Raphaël’s object"
            };
            var de = function (t) {
                if (this.items = [], this.length = 0, this.type = "set", t) for (var e = 0, i = t.length; e < i; e++) !t[e] || t[e].constructor != Jt.constructor && t[e].constructor != de || (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
            }, fe = de.prototype;
            fe.push = function () {
                for (var t, e, i = 0, n = arguments.length; i < n; i++) t = arguments[i], !t || t.constructor != Jt.constructor && t.constructor != de || (e = this.items.length, this[e] = this.items[e] = t, this.length++);
                return this
            }, fe.pop = function () {
                return this.length && delete this[this.length--], this.items.pop()
            }, fe.forEach = function (t, e) {
                for (var i = 0, n = this.items.length; i < n; i++) if (t.call(e, this.items[i], i) === !1) return this;
                return this
            };
            for (var pe in Jt) Jt[S](pe) && (fe[pe] = function (t) {
                return function () {
                    var e = arguments;
                    return this.forEach(function (i) {
                        i[t][N](i, e)
                    })
                }
            }(pe));
            fe.attr = function (t, i) {
                if (t && e.is(t, Y) && e.is(t[0], "object")) for (var n = 0, r = t.length; n < r; n++) this.items[n].attr(t[n]); else for (var a = 0, s = this.items.length; a < s; a++) this.items[a].attr(t, i);
                return this
            }, fe.clear = function () {
                for (; this.length;) this.pop()
            }, fe.splice = function (t, e, i) {
                t = t < 0 ? V(this.length + t, 0) : t, e = V(0, q(this.length - t, e));
                var n, r = [], a = [], s = [];
                for (n = 2; n < arguments.length; n++) s.push(arguments[n]);
                for (n = 0; n < e; n++) a.push(this[t + n]);
                for (; n < this.length - t; n++) r.push(this[t + n]);
                var o = s.length;
                for (n = 0; n < o + r.length; n++) this.items[t + n] = this[t + n] = n < o ? s[n] : r[n - o];
                for (n = this.items.length = this.length -= e - o; this[n];) delete this[n++];
                return new de(a)
            }, fe.exclude = function (t) {
                for (var e = 0, i = this.length; e < i; e++) if (this[e] == t) return this.splice(e, 1), !0
            }, fe.animate = function (t, i, n, r) {
                (e.is(n, "function") || !n) && (r = n || null);
                var a, s, o = this.items.length, l = o, u = this;
                if (!o) return this;
                r && (s = function () {
                    !--o && r.call(u)
                }), n = e.is(n, W) ? n : s;
                var c = e.animation(t, i, n, s);
                for (a = this.items[--l].animate(c); l--;) this.items[l] && !this.items[l].removed && this.items[l].animateWith(a, c, c);
                return this
            }, fe.insertAfter = function (t) {
                for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
                return this
            }, fe.getBBox = function () {
                for (var t = [], e = [], i = [], n = [], r = this.items.length; r--;) if (!this.items[r].removed) {
                    var a = this.items[r].getBBox();
                    t.push(a.x), e.push(a.y), i.push(a.x + a.width), n.push(a.y + a.height)
                }
                return t = q[N](0, t), e = q[N](0, e), i = V[N](0, i), n = V[N](0, n), {
                    x: t,
                    y: e,
                    x2: i,
                    y2: n,
                    width: i - t,
                    height: n - e
                }
            }, fe.clone = function (t) {
                t = this.paper.set();
                for (var e = 0, i = this.items.length; e < i; e++) t.push(this.items[e].clone());
                return t
            }, fe.toString = function () {
                return "Raphaël‘s set"
            }, fe.glow = function (t) {
                var e = this.paper.set();
                return this.forEach(function (i, n) {
                    var r = i.glow(t);
                    null != r && r.forEach(function (t, i) {
                        e.push(t)
                    })
                }), e
            }, e.registerFont = function (t) {
                if (!t.face) return t;
                this.fonts = this.fonts || {};
                var e = {w: t.w, face: {}, glyphs: {}}, i = t.face["font-family"];
                for (var n in t.face) t.face[S](n) && (e.face[n] = t.face[n]);
                if (this.fonts[i] ? this.fonts[i].push(e) : this.fonts[i] = [e], !t.svg) {
                    e.face["units-per-em"] = et(t.face["units-per-em"], 10);
                    for (var r in t.glyphs) if (t.glyphs[S](r)) {
                        var a = t.glyphs[r];
                        if (e.glyphs[r] = {
                            w: a.w, k: {}, d: a.d && "M" + a.d.replace(/[mlcxtrv]/g, function (t) {
                                return {l: "L", c: "C", x: "z", t: "m", r: "l", v: "c"}[t] || "M"
                            }) + "z"
                        }, a.k) for (var s in a.k) a[S](s) && (e.glyphs[r].k[s] = a.k[s])
                    }
                }
                return t
            }, _.getFont = function (t, i, n, r) {
                if (r = r || "normal", n = n || "normal", i = +i || {
                    normal: 400,
                    bold: 700,
                    lighter: 300,
                    bolder: 800
                }[i] || 400, e.fonts) {
                    var a = e.fonts[t];
                    if (!a) {
                        var s = new RegExp("(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, I) + "(\\s|$)", "i");
                        for (var o in e.fonts) if (e.fonts[S](o) && s.test(o)) {
                            a = e.fonts[o];
                            break
                        }
                    }
                    var l;
                    if (a) for (var u = 0, c = a.length; u < c && (l = a[u], l.face["font-weight"] != i || l.face["font-style"] != n && l.face["font-style"] || l.face["font-stretch"] != r); u++) ;
                    return l
                }
            }, _.print = function (t, i, n, r, a, s, o) {
                s = s || "middle", o = V(q(o || 0, 1), -1);
                var l, u = F(n)[z](I), c = 0, h = 0, d = I;
                if (e.is(r, "string") && (r = this.getFont(r)), r) {
                    l = (a || 16) / r.face["units-per-em"];
                    for (var f = r.face.bbox[z](k), p = +f[0], m = f[3] - f[1], g = 0, v = +f[1] + ("baseline" == s ? m + +r.face.descent : m / 2), y = 0, x = u.length; y < x; y++) {
                        if ("\n" == u[y]) c = 0, w = 0, h = 0, g += m; else {
                            var b = h && r.glyphs[u[y - 1]] || {}, w = r.glyphs[u[y]];
                            c += h ? (b.w || r.w) + (b.k && b.k[u[y]] || 0) + r.w * o : 0, h = 1
                        }
                        w && w.d && (d += e.transformPath(w.d, ["t", c * l, g * l, "s", l, l, p, v, "t", (t - p) / l, (i - v) / l]))
                    }
                }
                return this.path(d).attr({fill: "#000", stroke: "none"})
            }, _.add = function (t) {
                if (e.is(t, "array")) for (var i, n = this.set(), r = 0, a = t.length; r < a; r++) i = t[r] || {}, C[S](i.type) && n.push(this[i.type]().attr(i));
                return n
            }, e.format = function (t, i) {
                var n = e.is(i, Y) ? [0][M](i) : arguments;
                return t && e.is(t, W) && n.length - 1 && (t = t.replace(E, function (t, e) {
                    return null == n[++e] ? I : n[e]
                })), t || I
            }, e.fullfill = function () {
                var t = /\{([^\}]+)\}/g, e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                    i = function (t, i, n) {
                        var r = n;
                        return i.replace(e, function (t, e, i, n, a) {
                            e = e || n, r && (e in r && (r = r[e]), "function" == typeof r && a && (r = r()))
                        }), r = (null == r || r == n ? t : r) + ""
                    };
                return function (e, n) {
                    return String(e).replace(t, function (t, e) {
                        return i(t, e, n)
                    })
                }
            }(), e.ninja = function () {
                return T.was ? B.win.Raphael = T.is : delete Raphael, e
            }, e.st = fe, function (t, i, n) {
                function r() {
                    /in/.test(t.readyState) ? setTimeout(r, 9) : e.eve("raphael.DOMload")
                }

                null == t.readyState && t.addEventListener && (t.addEventListener(i, n = function () {
                    t.removeEventListener(i, n, !1), t.readyState = "complete"
                }, !1), t.readyState = "loading"), r()
            }(document, "DOMContentLoaded"), T.was ? B.win.Raphael = e : Raphael = e, n.on("raphael.DOMload", function () {
                w = !0
            }), i(581), i(582), t.exports = Raphael
        }()
    }, 580: function (t, e, i) {
        var n, r;
        !function (i) {
            var a, s, o = "0.4.2", l = "hasOwnProperty", u = /[\.\/]/, c = "*", h = function () {
            }, d = function (t, e) {
                return t - e
            }, f = {n: {}}, p = function (t, e) {
                t = String(t);
                var i, n = s, r = Array.prototype.slice.call(arguments, 2), o = p.listeners(t), l = 0, u = [], c = {},
                    h = [], f = a;
                a = t, s = 0;
                for (var m = 0, g = o.length; m < g; m++) "zIndex" in o[m] && (u.push(o[m].zIndex), o[m].zIndex < 0 && (c[o[m].zIndex] = o[m]));
                for (u.sort(d); u[l] < 0;) if (i = c[u[l++]], h.push(i.apply(e, r)), s) return s = n, h;
                for (m = 0; m < g; m++) if (i = o[m], "zIndex" in i) if (i.zIndex == u[l]) {
                    if (h.push(i.apply(e, r)), s) break;
                    do if (l++, i = c[u[l]], i && h.push(i.apply(e, r)), s) break; while (i)
                } else c[i.zIndex] = i; else if (h.push(i.apply(e, r)), s) break;
                return s = n, a = f, h.length ? h : null
            };
            p._events = f, p.listeners = function (t) {
                var e, i, n, r, a, s, o, l, h = t.split(u), d = f, p = [d], m = [];
                for (r = 0, a = h.length; r < a; r++) {
                    for (l = [], s = 0, o = p.length; s < o; s++) for (d = p[s].n, i = [d[h[r]], d[c]], n = 2; n--;) e = i[n], e && (l.push(e), m = m.concat(e.f || []));
                    p = l
                }
                return m
            }, p.on = function (t, e) {
                if (t = String(t), "function" != typeof e) return function () {
                };
                for (var i = t.split(u), n = f, r = 0, a = i.length; r < a; r++) n = n.n, n = n.hasOwnProperty(i[r]) && n[i[r]] || (n[i[r]] = {n: {}});
                for (n.f = n.f || [], r = 0, a = n.f.length; r < a; r++) if (n.f[r] == e) return h;
                return n.f.push(e), function (t) {
                    +t == +t && (e.zIndex = +t)
                }
            }, p.f = function (t) {
                var e = [].slice.call(arguments, 1);
                return function () {
                    p.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
                }
            }, p.stop = function () {
                s = 1
            }, p.nt = function (t) {
                return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(a) : a
            }, p.nts = function () {
                return a.split(u)
            }, p.off = p.unbind = function (t, e) {
                if (!t) return void(p._events = f = {n: {}});
                var i, n, r, a, s, o, h, d = t.split(u), m = [f];
                for (a = 0, s = d.length; a < s; a++) for (o = 0; o < m.length; o += r.length - 2) {
                    if (r = [o, 1], i = m[o].n, d[a] != c) i[d[a]] && r.push(i[d[a]]); else for (n in i) i[l](n) && r.push(i[n]);
                    m.splice.apply(m, r)
                }
                for (a = 0, s = m.length; a < s; a++) for (i = m[a]; i.n;) {
                    if (e) {
                        if (i.f) {
                            for (o = 0, h = i.f.length; o < h; o++) if (i.f[o] == e) {
                                i.f.splice(o, 1);
                                break
                            }
                            !i.f.length && delete i.f
                        }
                        for (n in i.n) if (i.n[l](n) && i.n[n].f) {
                            var g = i.n[n].f;
                            for (o = 0, h = g.length; o < h; o++) if (g[o] == e) {
                                g.splice(o, 1);
                                break
                            }
                            !g.length && delete i.n[n].f
                        }
                    } else {
                        delete i.f;
                        for (n in i.n) i.n[l](n) && i.n[n].f && delete i.n[n].f
                    }
                    i = i.n
                }
            }, p.once = function (t, e) {
                var i = function () {
                    return p.unbind(t, i), e.apply(this, arguments)
                };
                return p.on(t, i)
            }, p.version = o, p.toString = function () {
                return "You are running Eve " + o
            }, "undefined" != typeof t && t.exports ? t.exports = p : (n = [], r = function () {
                return p
            }.apply(e, n), !(void 0 !== r && (t.exports = r)))
        }(this)
    }, 581: function (t, e) {
        window.Raphael && window.Raphael.svg && function (t) {
            var e = "hasOwnProperty", i = String, n = parseFloat, r = parseInt, a = Math, s = a.max, o = a.abs,
                l = a.pow, u = /[, ]+/, c = t.eve, h = "", d = " ", f = "http://www.w3.org/1999/xlink", p = {
                    block: "M5,0 0,2.5 5,5z",
                    classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                    diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                    open: "M6,1 1,3.5 6,6",
                    oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
                }, m = {};
            t.toString = function () {
                return "Your browser supports SVG.\nYou are running Raphaël " + this.version
            };
            var g = function (n, r) {
                if (r) {
                    "string" == typeof n && (n = g(n));
                    for (var a in r) r[e](a) && ("xlink:" == a.substring(0, 6) ? n.setAttributeNS(f, a.substring(6), i(r[a])) : n.setAttribute(a, i(r[a])))
                } else n = t._g.doc.createElementNS("http://www.w3.org/2000/svg", n), n.style && (n.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                return n
            }, v = function (e, r) {
                var u = "linear", c = e.id + r, d = .5, f = .5, p = e.node, m = e.paper, v = p.style,
                    y = t._g.doc.getElementById(c);
                if (!y) {
                    if (r = i(r).replace(t._radial_gradient, function (t, e, i) {
                        if (u = "radial", e && i) {
                            d = n(e), f = n(i);
                            var r = 2 * (f > .5) - 1;
                            l(d - .5, 2) + l(f - .5, 2) > .25 && (f = a.sqrt(.25 - l(d - .5, 2)) * r + .5) && .5 != f && (f = f.toFixed(5) - 1e-5 * r)
                        }
                        return h
                    }), r = r.split(/\s*\-\s*/), "linear" == u) {
                        var x = r.shift();
                        if (x = -n(x), isNaN(x)) return null;
                        var b = [0, 0, a.cos(t.rad(x)), a.sin(t.rad(x))], w = 1 / (s(o(b[2]), o(b[3])) || 1);
                        b[2] *= w, b[3] *= w, b[2] < 0 && (b[0] = -b[2], b[2] = 0), b[3] < 0 && (b[1] = -b[3], b[3] = 0)
                    }
                    var _ = t._parseDots(r);
                    if (!_) return null;
                    if (c = c.replace(/[\(\)\s,\xb0#]/g, "_"), e.gradient && c != e.gradient.id && (m.defs.removeChild(e.gradient), delete e.gradient), !e.gradient) {
                        y = g(u + "Gradient", {id: c}), e.gradient = y, g(y, "radial" == u ? {fx: d, fy: f} : {
                            x1: b[0],
                            y1: b[1],
                            x2: b[2],
                            y2: b[3],
                            gradientTransform: e.matrix.invert()
                        }), m.defs.appendChild(y);
                        for (var k = 0, C = _.length; k < C; k++) y.appendChild(g("stop", {
                            offset: _[k].offset ? _[k].offset : k ? "100%" : "0%",
                            "stop-color": _[k].color || "#fff"
                        }))
                    }
                }
                return g(p, {
                    fill: "url(#" + c + ")",
                    opacity: 1,
                    "fill-opacity": 1
                }), v.fill = h, v.opacity = 1, v.fillOpacity = 1, 1
            }, y = function (t) {
                var e = t.getBBox(1);
                g(t.pattern, {patternTransform: t.matrix.invert() + " translate(" + e.x + "," + e.y + ")"})
            }, x = function (n, r, a) {
                if ("path" == n.type) {
                    for (var s, o, l, u, c, d = i(r).toLowerCase().split("-"), f = n.paper, v = a ? "end" : "start", y = n.node, x = n.attrs, b = x["stroke-width"], w = d.length, _ = "classic", k = 3, C = 3, E = 5; w--;) switch (d[w]) {
                        case"block":
                        case"classic":
                        case"oval":
                        case"diamond":
                        case"open":
                        case"none":
                            _ = d[w];
                            break;
                        case"wide":
                            C = 5;
                            break;
                        case"narrow":
                            C = 2;
                            break;
                        case"long":
                            k = 5;
                            break;
                        case"short":
                            k = 2
                    }
                    if ("open" == _ ? (k += 2, C += 2, E += 2, l = 1, u = a ? 4 : 1, c = {
                        fill: "none",
                        stroke: x.stroke
                    }) : (u = l = k / 2, c = {
                        fill: x.stroke,
                        stroke: "none"
                    }), n._.arrows ? a ? (n._.arrows.endPath && m[n._.arrows.endPath]--, n._.arrows.endMarker && m[n._.arrows.endMarker]--) : (n._.arrows.startPath && m[n._.arrows.startPath]--, n._.arrows.startMarker && m[n._.arrows.startMarker]--) : n._.arrows = {}, "none" != _) {
                        var S = "raphael-marker-" + _, B = "raphael-marker-" + v + _ + k + C;
                        t._g.doc.getElementById(S) ? m[S]++ : (f.defs.appendChild(g(g("path"), {
                            "stroke-linecap": "round",
                            d: p[_],
                            id: S
                        })), m[S] = 1);
                        var T, A = t._g.doc.getElementById(B);
                        A ? (m[B]++, T = A.getElementsByTagName("use")[0]) : (A = g(g("marker"), {
                            id: B,
                            markerHeight: C,
                            markerWidth: k,
                            orient: "auto",
                            refX: u,
                            refY: C / 2
                        }), T = g(g("use"), {
                            "xlink:href": "#" + S,
                            transform: (a ? "rotate(180 " + k / 2 + " " + C / 2 + ") " : h) + "scale(" + k / E + "," + C / E + ")",
                            "stroke-width": (1 / ((k / E + C / E) / 2)).toFixed(4)
                        }), A.appendChild(T), f.defs.appendChild(A), m[B] = 1), g(T, c);
                        var N = l * ("diamond" != _ && "oval" != _);
                        a ? (s = n._.arrows.startdx * b || 0, o = t.getTotalLength(x.path) - N * b) : (s = N * b, o = t.getTotalLength(x.path) - (n._.arrows.enddx * b || 0)), c = {}, c["marker-" + v] = "url(#" + B + ")", (o || s) && (c.d = Raphael.getSubpath(x.path, s, o)), g(y, c), n._.arrows[v + "Path"] = S, n._.arrows[v + "Marker"] = B, n._.arrows[v + "dx"] = N, n._.arrows[v + "Type"] = _, n._.arrows[v + "String"] = r
                    } else a ? (s = n._.arrows.startdx * b || 0, o = t.getTotalLength(x.path) - s) : (s = 0, o = t.getTotalLength(x.path) - (n._.arrows.enddx * b || 0)), n._.arrows[v + "Path"] && g(y, {d: Raphael.getSubpath(x.path, s, o)}), delete n._.arrows[v + "Path"], delete n._.arrows[v + "Marker"], delete n._.arrows[v + "dx"], delete n._.arrows[v + "Type"], delete n._.arrows[v + "String"];
                    for (c in m) if (m[e](c) && !m[c]) {
                        var M = t._g.doc.getElementById(c);
                        M && M.parentNode.removeChild(M)
                    }
                }
            }, b = {
                "": [0],
                none: [0],
                "-": [3, 1],
                ".": [1, 1],
                "-.": [3, 1, 1, 1],
                "-..": [3, 1, 1, 1, 1, 1],
                ". ": [1, 3],
                "- ": [4, 3],
                "--": [8, 3],
                "- .": [4, 3, 1, 3],
                "--.": [8, 3, 1, 3],
                "--..": [8, 3, 1, 3, 1, 3]
            }, w = function (t, e, n) {
                if (e = b[i(e).toLowerCase()]) {
                    for (var r = t.attrs["stroke-width"] || "1", a = {
                        round: r,
                        square: r,
                        butt: 0
                    }[t.attrs["stroke-linecap"] || n["stroke-linecap"]] || 0, s = [], o = e.length; o--;) s[o] = e[o] * r + (o % 2 ? 1 : -1) * a;
                    g(t.node, {"stroke-dasharray": s.join(",")})
                }
            }, _ = function (n, a) {
                var l = n.node, c = n.attrs, d = l.style.visibility;
                l.style.visibility = "hidden";
                for (var p in a) if (a[e](p)) {
                    if (!t._availableAttrs[e](p)) continue;
                    var m = a[p];
                    switch (c[p] = m, p) {
                        case"blur":
                            n.blur(m);
                            break;
                        case"href":
                        case"title":
                        case"target":
                            var b = l.parentNode;
                            if ("a" != b.tagName.toLowerCase()) {
                                var _ = g("a");
                                b.insertBefore(_, l), _.appendChild(l), b = _
                            }
                            "target" == p ? b.setAttributeNS(f, "show", "blank" == m ? "new" : m) : b.setAttributeNS(f, p, m);
                            break;
                        case"cursor":
                            l.style.cursor = m;
                            break;
                        case"transform":
                            n.transform(m);
                            break;
                        case"arrow-start":
                            x(n, m);
                            break;
                        case"arrow-end":
                            x(n, m, 1);
                            break;
                        case"clip-rect":
                            var k = i(m).split(u);
                            if (4 == k.length) {
                                n.clip && n.clip.parentNode.parentNode.removeChild(n.clip.parentNode);
                                var E = g("clipPath"), S = g("rect");
                                E.id = t.createUUID(), g(S, {
                                    x: k[0],
                                    y: k[1],
                                    width: k[2],
                                    height: k[3]
                                }), E.appendChild(S), n.paper.defs.appendChild(E), g(l, {"clip-path": "url(#" + E.id + ")"}), n.clip = S
                            }
                            if (!m) {
                                var B = l.getAttribute("clip-path");
                                if (B) {
                                    var T = t._g.doc.getElementById(B.replace(/(^url\(#|\)$)/g, h));
                                    T && T.parentNode.removeChild(T), g(l, {"clip-path": h}), delete n.clip
                                }
                            }
                            break;
                        case"path":
                            "path" == n.type && (g(l, {d: m ? c.path = t._pathToAbsolute(m) : "M0,0"}), n._.dirty = 1, n._.arrows && ("startString" in n._.arrows && x(n, n._.arrows.startString), "endString" in n._.arrows && x(n, n._.arrows.endString, 1)));
                            break;
                        case"width":
                            if (l.setAttribute(p, m), n._.dirty = 1, !c.fx) break;
                            p = "x", m = c.x;
                        case"x":
                            c.fx && (m = -c.x - (c.width || 0));
                        case"rx":
                            if ("rx" == p && "rect" == n.type) break;
                        case"cx":
                            l.setAttribute(p, m), n.pattern && y(n), n._.dirty = 1;
                            break;
                        case"height":
                            if (l.setAttribute(p, m), n._.dirty = 1, !c.fy) break;
                            p = "y", m = c.y;
                        case"y":
                            c.fy && (m = -c.y - (c.height || 0));
                        case"ry":
                            if ("ry" == p && "rect" == n.type) break;
                        case"cy":
                            l.setAttribute(p, m), n.pattern && y(n), n._.dirty = 1;
                            break;
                        case"r":
                            "rect" == n.type ? g(l, {rx: m, ry: m}) : l.setAttribute(p, m), n._.dirty = 1;
                            break;
                        case"src":
                            "image" == n.type && l.setAttributeNS(f, "href", m);
                            break;
                        case"stroke-width":
                            1 == n._.sx && 1 == n._.sy || (m /= s(o(n._.sx), o(n._.sy)) || 1), n.paper._vbSize && (m *= n.paper._vbSize), l.setAttribute(p, m), c["stroke-dasharray"] && w(n, c["stroke-dasharray"], a), n._.arrows && ("startString" in n._.arrows && x(n, n._.arrows.startString), "endString" in n._.arrows && x(n, n._.arrows.endString, 1));
                            break;
                        case"stroke-dasharray":
                            w(n, m, a);
                            break;
                        case"fill":
                            var A = i(m).match(t._ISURL);
                            if (A) {
                                E = g("pattern");
                                var N = g("image");
                                E.id = t.createUUID(), g(E, {
                                    x: 0,
                                    y: 0,
                                    patternUnits: "userSpaceOnUse",
                                    height: 1,
                                    width: 1
                                }), g(N, {x: 0, y: 0, "xlink:href": A[1]}), E.appendChild(N), function (e) {
                                    t._preload(A[1], function () {
                                        var t = this.offsetWidth, i = this.offsetHeight;
                                        g(e, {width: t, height: i}), g(N, {width: t, height: i}), n.paper.safari()
                                    })
                                }(E), n.paper.defs.appendChild(E), g(l, {fill: "url(#" + E.id + ")"}), n.pattern = E, n.pattern && y(n);
                                break
                            }
                            var M = t.getRGB(m);
                            if (M.error) {
                                if (("circle" == n.type || "ellipse" == n.type || "r" != i(m).charAt()) && v(n, m)) {
                                    if ("opacity" in c || "fill-opacity" in c) {
                                        var O = t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, h));
                                        if (O) {
                                            var I = O.getElementsByTagName("stop");
                                            g(I[I.length - 1], {"stop-opacity": ("opacity" in c ? c.opacity : 1) * ("fill-opacity" in c ? c["fill-opacity"] : 1)})
                                        }
                                    }
                                    c.gradient = m, c.fill = "none";
                                    break
                                }
                            } else delete a.gradient, delete c.gradient, !t.is(c.opacity, "undefined") && t.is(a.opacity, "undefined") && g(l, {opacity: c.opacity}), !t.is(c["fill-opacity"], "undefined") && t.is(a["fill-opacity"], "undefined") && g(l, {"fill-opacity": c["fill-opacity"]});
                            M[e]("opacity") && g(l, {"fill-opacity": M.opacity > 1 ? M.opacity / 100 : M.opacity});
                        case"stroke":
                            M = t.getRGB(m), l.setAttribute(p, M.hex), "stroke" == p && M[e]("opacity") && g(l, {"stroke-opacity": M.opacity > 1 ? M.opacity / 100 : M.opacity}), "stroke" == p && n._.arrows && ("startString" in n._.arrows && x(n, n._.arrows.startString), "endString" in n._.arrows && x(n, n._.arrows.endString, 1));
                            break;
                        case"gradient":
                            ("circle" == n.type || "ellipse" == n.type || "r" != i(m).charAt()) && v(n, m);
                            break;
                        case"opacity":
                            c.gradient && !c[e]("stroke-opacity") && g(l, {"stroke-opacity": m > 1 ? m / 100 : m});
                        case"fill-opacity":
                            if (c.gradient) {
                                O = t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, h)), O && (I = O.getElementsByTagName("stop"), g(I[I.length - 1], {"stop-opacity": m}));
                                break
                            }
                        default:
                            "font-size" == p && (m = r(m, 10) + "px");
                            var L = p.replace(/(\-.)/g, function (t) {
                                return t.substring(1).toUpperCase()
                            });
                            l.style[L] = m, n._.dirty = 1, l.setAttribute(p, m)
                    }
                }
                C(n, a), l.style.visibility = d
            }, k = 1.2, C = function (n, a) {
                if ("text" == n.type && (a[e]("text") || a[e]("font") || a[e]("font-size") || a[e]("x") || a[e]("y"))) {
                    var s = n.attrs, o = n.node,
                        l = o.firstChild ? r(t._g.doc.defaultView.getComputedStyle(o.firstChild, h).getPropertyValue("font-size"), 10) : 10;
                    if (a[e]("text")) {
                        for (s.text = a.text; o.firstChild;) o.removeChild(o.firstChild);
                        for (var u, c = i(a.text).split("\n"), d = [], f = 0, p = c.length; f < p; f++) u = g("tspan"), f && g(u, {
                            dy: l * k,
                            x: s.x
                        }), u.appendChild(t._g.doc.createTextNode(c[f])), o.appendChild(u), d[f] = u
                    } else for (d = o.getElementsByTagName("tspan"), f = 0, p = d.length; f < p; f++) f ? g(d[f], {
                        dy: l * k,
                        x: s.x
                    }) : g(d[0], {dy: 0});
                    g(o, {x: s.x, y: s.y}), n._.dirty = 1;
                    var m = n._getBBox(), v = s.y - (m.y + m.height / 2);
                    v && t.is(v, "finite") && g(d[0], {dy: v})
                }
            }, E = function (e, i) {
                this[0] = this.node = e, e.raphael = !0, this.id = t._oid++, e.raphaelid = this.id, this.matrix = t.matrix(), this.realPath = null, this.paper = i, this.attrs = this.attrs || {}, this._ = {
                    transform: [],
                    sx: 1,
                    sy: 1,
                    deg: 0,
                    dx: 0,
                    dy: 0,
                    dirty: 1
                }, !i.bottom && (i.bottom = this), this.prev = i.top, i.top && (i.top.next = this), i.top = this, this.next = null
            }, S = t.el;
            E.prototype = S, S.constructor = E, t._engine.path = function (t, e) {
                var i = g("path");
                e.canvas && e.canvas.appendChild(i);
                var n = new E(i, e);
                return n.type = "path", _(n, {fill: "none", stroke: "#000", path: t}), n
            }, S.rotate = function (t, e, r) {
                if (this.removed) return this;
                if (t = i(t).split(u), t.length - 1 && (e = n(t[1]), r = n(t[2])), t = n(t[0]), null == r && (e = r), null == e || null == r) {
                    var a = this.getBBox(1);
                    e = a.x + a.width / 2, r = a.y + a.height / 2
                }
                return this.transform(this._.transform.concat([["r", t, e, r]])), this
            }, S.scale = function (t, e, r, a) {
                if (this.removed) return this;
                if (t = i(t).split(u), t.length - 1 && (e = n(t[1]), r = n(t[2]), a = n(t[3])), t = n(t[0]), null == e && (e = t), null == a && (r = a), null == r || null == a) var s = this.getBBox(1);
                return r = null == r ? s.x + s.width / 2 : r, a = null == a ? s.y + s.height / 2 : a, this.transform(this._.transform.concat([["s", t, e, r, a]])), this
            }, S.translate = function (t, e) {
                return this.removed ? this : (t = i(t).split(u), t.length - 1 && (e = n(t[1])), t = n(t[0]) || 0, e = +e || 0, this.transform(this._.transform.concat([["t", t, e]])), this)
            }, S.transform = function (i) {
                var n = this._;
                if (null == i) return n.transform;
                if (t._extractTransform(this, i), this.clip && g(this.clip, {transform: this.matrix.invert()}), this.pattern && y(this), this.node && g(this.node, {transform: this.matrix}), 1 != n.sx || 1 != n.sy) {
                    var r = this.attrs[e]("stroke-width") ? this.attrs["stroke-width"] : 1;
                    this.attr({"stroke-width": r})
                }
                return this
            }, S.hide = function () {
                return !this.removed && this.paper.safari(this.node.style.display = "none"), this
            }, S.show = function () {
                return !this.removed && this.paper.safari(this.node.style.display = ""), this
            }, S.remove = function () {
                if (!this.removed && this.node.parentNode) {
                    var e = this.paper;
                    e.__set__ && e.__set__.exclude(this), c.unbind("raphael.*.*." + this.id), this.gradient && e.defs.removeChild(this.gradient), t._tear(this, e), "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node);
                    for (var i in this) this[i] = "function" == typeof this[i] ? t._removedFactory(i) : null;
                    this.removed = !0
                }
            }, S._getBBox = function () {
                if ("none" == this.node.style.display) {
                    this.show();
                    var t = !0
                }
                var e = {};
                try {
                    e = this.node.getBBox()
                } catch (i) {
                } finally {
                    e = e || {}
                }
                return t && this.hide(), e
            }, S.attr = function (i, n) {
                if (this.removed) return this;
                if (null == i) {
                    var r = {};
                    for (var a in this.attrs) this.attrs[e](a) && (r[a] = this.attrs[a]);
                    return r.gradient && "none" == r.fill && (r.fill = r.gradient) && delete r.gradient, r.transform = this._.transform, r
                }
                if (null == n && t.is(i, "string")) {
                    if ("fill" == i && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                    if ("transform" == i) return this._.transform;
                    for (var s = i.split(u), o = {}, l = 0, h = s.length; l < h; l++) i = s[l], i in this.attrs ? o[i] = this.attrs[i] : t.is(this.paper.customAttributes[i], "function") ? o[i] = this.paper.customAttributes[i].def : o[i] = t._availableAttrs[i];
                    return h - 1 ? o : o[s[0]]
                }
                if (null == n && t.is(i, "array")) {
                    for (o = {}, l = 0, h = i.length; l < h; l++) o[i[l]] = this.attr(i[l]);
                    return o
                }
                if (null != n) {
                    var d = {};
                    d[i] = n
                } else null != i && t.is(i, "object") && (d = i);
                for (var f in d) c("raphael.attr." + f + "." + this.id, this, d[f]);
                for (f in this.paper.customAttributes) if (this.paper.customAttributes[e](f) && d[e](f) && t.is(this.paper.customAttributes[f], "function")) {
                    var p = this.paper.customAttributes[f].apply(this, [].concat(d[f]));
                    this.attrs[f] = d[f];
                    for (var m in p) p[e](m) && (d[m] = p[m])
                }
                return _(this, d), this
            }, S.toFront = function () {
                if (this.removed) return this;
                "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
                var e = this.paper;
                return e.top != this && t._tofront(this, e), this
            }, S.toBack = function () {
                if (this.removed) return this;
                var e = this.node.parentNode;
                "a" == e.tagName.toLowerCase() ? e.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : e.firstChild != this.node && e.insertBefore(this.node, this.node.parentNode.firstChild), t._toback(this, this.paper);
                this.paper;
                return this
            }, S.insertAfter = function (e) {
                if (this.removed) return this;
                var i = e.node || e[e.length - 1].node;
                return i.nextSibling ? i.parentNode.insertBefore(this.node, i.nextSibling) : i.parentNode.appendChild(this.node), t._insertafter(this, e, this.paper), this
            }, S.insertBefore = function (e) {
                if (this.removed) return this;
                var i = e.node || e[0].node;
                return i.parentNode.insertBefore(this.node, i), t._insertbefore(this, e, this.paper), this
            }, S.blur = function (e) {
                var i = this;
                if (0 !== +e) {
                    var n = g("filter"), r = g("feGaussianBlur");
                    i.attrs.blur = e, n.id = t.createUUID(), g(r, {stdDeviation: +e || 1.5}), n.appendChild(r), i.paper.defs.appendChild(n), i._blur = n, g(i.node, {filter: "url(#" + n.id + ")"})
                } else i._blur && (i._blur.parentNode.removeChild(i._blur), delete i._blur, delete i.attrs.blur), i.node.removeAttribute("filter")
            }, t._engine.circle = function (t, e, i, n) {
                var r = g("circle");
                t.canvas && t.canvas.appendChild(r);
                var a = new E(r, t);
                return a.attrs = {cx: e, cy: i, r: n, fill: "none", stroke: "#000"}, a.type = "circle", g(r, a.attrs), a
            }, t._engine.rect = function (t, e, i, n, r, a) {
                var s = g("rect");
                t.canvas && t.canvas.appendChild(s);
                var o = new E(s, t);
                return o.attrs = {
                    x: e,
                    y: i,
                    width: n,
                    height: r,
                    r: a || 0,
                    rx: a || 0,
                    ry: a || 0,
                    fill: "none",
                    stroke: "#000"
                }, o.type = "rect", g(s, o.attrs), o
            }, t._engine.ellipse = function (t, e, i, n, r) {
                var a = g("ellipse");
                t.canvas && t.canvas.appendChild(a);
                var s = new E(a, t);
                return s.attrs = {
                    cx: e,
                    cy: i,
                    rx: n,
                    ry: r,
                    fill: "none",
                    stroke: "#000"
                }, s.type = "ellipse", g(a, s.attrs), s
            }, t._engine.image = function (t, e, i, n, r, a) {
                var s = g("image");
                g(s, {
                    x: i,
                    y: n,
                    width: r,
                    height: a,
                    preserveAspectRatio: "none"
                }), s.setAttributeNS(f, "href", e), t.canvas && t.canvas.appendChild(s);
                var o = new E(s, t);
                return o.attrs = {x: i, y: n, width: r, height: a, src: e}, o.type = "image", o
            }, t._engine.text = function (e, i, n, r) {
                var a = g("text");
                e.canvas && e.canvas.appendChild(a);
                var s = new E(a, e);
                return s.attrs = {
                    x: i,
                    y: n,
                    "text-anchor": "middle",
                    text: r,
                    font: t._availableAttrs.font,
                    stroke: "none",
                    fill: "#000"
                }, s.type = "text", _(s, s.attrs), s
            }, t._engine.setSize = function (t, e) {
                return this.width = t || this.width, this.height = e || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this
            }, t._engine.create = function () {
                var e = t._getContainer.apply(0, arguments), i = e && e.container, n = e.x, r = e.y, a = e.width,
                    s = e.height;
                if (!i) throw new Error("SVG container not found.");
                var o, l = g("svg"), u = "overflow:hidden;";
                return n = n || 0, r = r || 0, a = a || 512, s = s || 342, g(l, {
                    height: s,
                    version: 1.1,
                    width: a,
                    xmlns: "http://www.w3.org/2000/svg"
                }), 1 == i ? (l.style.cssText = u + "position:absolute;left:" + n + "px;top:" + r + "px", t._g.doc.body.appendChild(l), o = 1) : (l.style.cssText = u + "position:relative", i.firstChild ? i.insertBefore(l, i.firstChild) : i.appendChild(l)), i = new t._Paper, i.width = a, i.height = s, i.canvas = l, i.clear(), i._left = i._top = 0, o && (i.renderfix = function () {
                }), i.renderfix(), i
            }, t._engine.setViewBox = function (t, e, i, n, r) {
                c("raphael.setViewBox", this, this._viewBox, [t, e, i, n, r]);
                var a, o, l = s(i / this.width, n / this.height), u = this.top, h = r ? "meet" : "xMinYMin";
                for (null == t ? (this._vbSize && (l = 1), delete this._vbSize, a = "0 0 " + this.width + d + this.height) : (this._vbSize = l, a = t + d + e + d + i + d + n), g(this.canvas, {
                    viewBox: a,
                    preserveAspectRatio: h
                }); l && u;) o = "stroke-width" in u.attrs ? u.attrs["stroke-width"] : 1, u.attr({"stroke-width": o}), u._.dirty = 1, u._.dirtyT = 1, u = u.prev;
                return this._viewBox = [t, e, i, n, !!r], this
            }, t.prototype.renderfix = function () {
                var t, e = this.canvas, i = e.style;
                try {
                    t = e.getScreenCTM() || e.createSVGMatrix()
                } catch (n) {
                    t = e.createSVGMatrix()
                }
                var r = -t.e % 1, a = -t.f % 1;
                (r || a) && (r && (this._left = (this._left + r) % 1, i.left = this._left + "px"), a && (this._top = (this._top + a) % 1, i.top = this._top + "px"))
            }, t.prototype.clear = function () {
                t.eve("raphael.clear", this);
                for (var e = this.canvas; e.firstChild;) e.removeChild(e.firstChild);
                this.bottom = this.top = null, (this.desc = g("desc")).appendChild(t._g.doc.createTextNode("Created with Raphaël " + t.version)), e.appendChild(this.desc), e.appendChild(this.defs = g("defs"))
            }, t.prototype.remove = function () {
                c("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
                for (var e in this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null
            };
            var B = t.st;
            for (var T in S) S[e](T) && !B[e](T) && (B[T] = function (t) {
                return function () {
                    var e = arguments;
                    return this.forEach(function (i) {
                        i[t].apply(i, e)
                    })
                }
            }(T))
        }(window.Raphael)
    }, 582: function (t, e) {
        window.Raphael && window.Raphael.vml && function (t) {
            var e = "hasOwnProperty", i = String, n = parseFloat, r = Math, a = r.round, s = r.max, o = r.min,
                l = r.abs, u = "fill", c = /[, ]+/, h = t.eve, d = " progid:DXImageTransform.Microsoft", f = " ",
                p = "", m = {M: "m", L: "l", C: "c", Z: "x", m: "t", l: "r", c: "v", z: "x"},
                g = /([clmz]),?([^clmz]*)/gi, v = / progid:\S+Blur\([^\)]+\)/g, y = /-?[^,\s-]+/g,
                x = "position:absolute;left:0;top:0;width:1px;height:1px", b = 21600, w = {path: 1, rect: 1, image: 1},
                _ = {circle: 1, ellipse: 1}, k = function (e) {
                    var n = /[ahqstv]/gi, r = t._pathToAbsolute;
                    if (i(e).match(n) && (r = t._path2curve), n = /[clmz]/g, r == t._pathToAbsolute && !i(e).match(n)) {
                        var s = i(e).replace(g, function (t, e, i) {
                            var n = [], r = "m" == e.toLowerCase(), s = m[e];
                            return i.replace(y, function (t) {
                                r && 2 == n.length && (s += n + m["m" == e ? "l" : "L"], n = []), n.push(a(t * b))
                            }), s + n
                        });
                        return s
                    }
                    var o, l, u = r(e);
                    s = [];
                    for (var c = 0, h = u.length; c < h; c++) {
                        o = u[c], l = u[c][0].toLowerCase(), "z" == l && (l = "x");
                        for (var d = 1, v = o.length; d < v; d++) l += a(o[d] * b) + (d != v - 1 ? "," : p);
                        s.push(l)
                    }
                    return s.join(f)
                }, C = function (e, i, n) {
                    var r = t.matrix();
                    return r.rotate(-e, .5, .5), {dx: r.x(i, n), dy: r.y(i, n)}
                }, E = function (t, e, i, n, r, a) {
                    var s = t._, o = t.matrix, c = s.fillpos, h = t.node, d = h.style, p = 1, m = "", g = b / e, v = b / i;
                    if (d.visibility = "hidden", e && i) {
                        if (h.coordsize = l(g) + f + l(v), d.rotation = a * (e * i < 0 ? -1 : 1), a) {
                            var y = C(a, n, r);
                            n = y.dx, r = y.dy
                        }
                        if (e < 0 && (m += "x"), i < 0 && (m += " y") && (p = -1), d.flip = m, h.coordorigin = n * -g + f + r * -v, c || s.fillsize) {
                            var x = h.getElementsByTagName(u);
                            x = x && x[0], h.removeChild(x), c && (y = C(a, o.x(c[0], c[1]), o.y(c[0], c[1])), x.position = y.dx * p + f + y.dy * p), s.fillsize && (x.size = s.fillsize[0] * l(e) + f + s.fillsize[1] * l(i)), h.appendChild(x)
                        }
                        d.visibility = "visible"
                    }
                };
            t.toString = function () {
                return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version
            };
            var S = function (t, e, n) {
                for (var r = i(e).toLowerCase().split("-"), a = n ? "end" : "start", s = r.length, o = "classic", l = "medium", u = "medium"; s--;) switch (r[s]) {
                    case"block":
                    case"classic":
                    case"oval":
                    case"diamond":
                    case"open":
                    case"none":
                        o = r[s];
                        break;
                    case"wide":
                    case"narrow":
                        u = r[s];
                        break;
                    case"long":
                    case"short":
                        l = r[s]
                }
                var c = t.node.getElementsByTagName("stroke")[0];
                c[a + "arrow"] = o, c[a + "arrowlength"] = l, c[a + "arrowwidth"] = u
            }, B = function (r, l) {
                r.attrs = r.attrs || {};
                var h = r.node, d = r.attrs, m = h.style,
                    g = w[r.type] && (l.x != d.x || l.y != d.y || l.width != d.width || l.height != d.height || l.cx != d.cx || l.cy != d.cy || l.rx != d.rx || l.ry != d.ry || l.r != d.r),
                    v = _[r.type] && (d.cx != l.cx || d.cy != l.cy || d.r != l.r || d.rx != l.rx || d.ry != l.ry),
                    y = r;
                for (var x in l) l[e](x) && (d[x] = l[x]);
                if (g && (d.path = t._getPath[r.type](r), r._.dirty = 1), l.href && (h.href = l.href), l.title && (h.title = l.title), l.target && (h.target = l.target), l.cursor && (m.cursor = l.cursor), "blur" in l && r.blur(l.blur), (l.path && "path" == r.type || g) && (h.path = k(~i(d.path).toLowerCase().indexOf("r") ? t._pathToAbsolute(d.path) : d.path), "image" == r.type && (r._.fillpos = [d.x, d.y], r._.fillsize = [d.width, d.height], E(r, 1, 1, 0, 0, 0))), "transform" in l && r.transform(l.transform), v) {
                    var C = +d.cx, B = +d.cy, A = +d.rx || +d.r || 0, N = +d.ry || +d.r || 0;
                    h.path = t.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", a((C - A) * b), a((B - N) * b), a((C + A) * b), a((B + N) * b), a(C * b))
                }
                if ("clip-rect" in l) {
                    var O = i(l["clip-rect"]).split(c);
                    if (4 == O.length) {
                        O[2] = +O[2] + +O[0], O[3] = +O[3] + +O[1];
                        var I = h.clipRect || t._g.doc.createElement("div"), L = I.style;
                        L.clip = t.format("rect({1}px {2}px {3}px {0}px)", O), h.clipRect || (L.position = "absolute", L.top = 0, L.left = 0, L.width = r.paper.width + "px", L.height = r.paper.height + "px", h.parentNode.insertBefore(I, h), I.appendChild(h), h.clipRect = I)
                    }
                    l["clip-rect"] || h.clipRect && (h.clipRect.style.clip = "auto")
                }
                if (r.textpath) {
                    var F = r.textpath.style;
                    l.font && (F.font = l.font), l["font-family"] && (F.fontFamily = '"' + l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, p) + '"'), l["font-size"] && (F.fontSize = l["font-size"]), l["font-weight"] && (F.fontWeight = l["font-weight"]), l["font-style"] && (F.fontStyle = l["font-style"])
                }
                if ("arrow-start" in l && S(y, l["arrow-start"]), "arrow-end" in l && S(y, l["arrow-end"], 1), null != l.opacity || null != l["stroke-width"] || null != l.fill || null != l.src || null != l.stroke || null != l["stroke-width"] || null != l["stroke-opacity"] || null != l["fill-opacity"] || null != l["stroke-dasharray"] || null != l["stroke-miterlimit"] || null != l["stroke-linejoin"] || null != l["stroke-linecap"]) {
                    var z = h.getElementsByTagName(u), R = !1;
                    if (z = z && z[0], !z && (R = z = M(u)), "image" == r.type && l.src && (z.src = l.src), l.fill && (z.on = !0), null != z.on && "none" != l.fill && null !== l.fill || (z.on = !1), z.on && l.fill) {
                        var P = i(l.fill).match(t._ISURL);
                        if (P) {
                            z.parentNode == h && h.removeChild(z), z.rotate = !0, z.src = P[1], z.type = "tile";
                            var j = r.getBBox(1);
                            z.position = j.x + f + j.y, r._.fillpos = [j.x, j.y], t._preload(P[1], function () {
                                r._.fillsize = [this.offsetWidth, this.offsetHeight]
                            })
                        } else z.color = t.getRGB(l.fill).hex, z.src = p, z.type = "solid", t.getRGB(l.fill).error && (y.type in {
                            circle: 1,
                            ellipse: 1
                        } || "r" != i(l.fill).charAt()) && T(y, l.fill, z) && (d.fill = "none", d.gradient = l.fill, z.rotate = !1)
                    }
                    if ("fill-opacity" in l || "opacity" in l) {
                        var D = ((+d["fill-opacity"] + 1 || 2) - 1) * ((+d.opacity + 1 || 2) - 1) * ((+t.getRGB(l.fill).o + 1 || 2) - 1);
                        D = o(s(D, 0), 1), z.opacity = D, z.src && (z.color = "none")
                    }
                    h.appendChild(z);
                    var V = h.getElementsByTagName("stroke") && h.getElementsByTagName("stroke")[0], q = !1;
                    !V && (q = V = M("stroke")), (l.stroke && "none" != l.stroke || l["stroke-width"] || null != l["stroke-opacity"] || l["stroke-dasharray"] || l["stroke-miterlimit"] || l["stroke-linejoin"] || l["stroke-linecap"]) && (V.on = !0), ("none" == l.stroke || null === l.stroke || null == V.on || 0 == l.stroke || 0 == l["stroke-width"]) && (V.on = !1);
                    var H = t.getRGB(l.stroke);
                    V.on && l.stroke && (V.color = H.hex), D = ((+d["stroke-opacity"] + 1 || 2) - 1) * ((+d.opacity + 1 || 2) - 1) * ((+H.o + 1 || 2) - 1);
                    var G = .75 * (n(l["stroke-width"]) || 1);
                    if (D = o(s(D, 0), 1), null == l["stroke-width"] && (G = d["stroke-width"]), l["stroke-width"] && (V.weight = G), G && G < 1 && (D *= G) && (V.weight = 1), V.opacity = D, l["stroke-linejoin"] && (V.joinstyle = l["stroke-linejoin"] || "miter"), V.miterlimit = l["stroke-miterlimit"] || 8, l["stroke-linecap"] && (V.endcap = "butt" == l["stroke-linecap"] ? "flat" : "square" == l["stroke-linecap"] ? "square" : "round"), l["stroke-dasharray"]) {
                        var U = {
                            "-": "shortdash",
                            ".": "shortdot",
                            "-.": "shortdashdot",
                            "-..": "shortdashdotdot",
                            ". ": "dot",
                            "- ": "dash",
                            "--": "longdash",
                            "- .": "dashdot",
                            "--.": "longdashdot",
                            "--..": "longdashdotdot"
                        };
                        V.dashstyle = U[e](l["stroke-dasharray"]) ? U[l["stroke-dasharray"]] : p
                    }
                    q && h.appendChild(V)
                }
                if ("text" == y.type) {
                    y.paper.canvas.style.display = p;
                    var X = y.paper.span, W = 100, Y = d.font && d.font.match(/\d+(?:\.\d*)?(?=px)/);
                    m = X.style, d.font && (m.font = d.font), d["font-family"] && (m.fontFamily = d["font-family"]), d["font-weight"] && (m.fontWeight = d["font-weight"]), d["font-style"] && (m.fontStyle = d["font-style"]), Y = n(d["font-size"] || Y && Y[0]) || 10, m.fontSize = Y * W + "px", y.textpath.string && (X.innerHTML = i(y.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
                    var $ = X.getBoundingClientRect();
                    y.W = d.w = ($.right - $.left) / W, y.H = d.h = ($.bottom - $.top) / W, y.X = d.x, y.Y = d.y + y.H / 2, ("x" in l || "y" in l) && (y.path.v = t.format("m{0},{1}l{2},{1}", a(d.x * b), a(d.y * b), a(d.x * b) + 1));
                    for (var Q = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], Z = 0, J = Q.length; Z < J; Z++) if (Q[Z] in l) {
                        y._.dirty = 1;
                        break
                    }
                    switch (d["text-anchor"]) {
                        case"start":
                            y.textpath.style["v-text-align"] = "left", y.bbx = y.W / 2;
                            break;
                        case"end":
                            y.textpath.style["v-text-align"] = "right", y.bbx = -y.W / 2;
                            break;
                        default:
                            y.textpath.style["v-text-align"] = "center", y.bbx = 0
                    }
                    y.textpath.style["v-text-kern"] = !0
                }
            }, T = function (e, a, s) {
                e.attrs = e.attrs || {};
                var o = (e.attrs, Math.pow), l = "linear", u = ".5 .5";
                if (e.attrs.gradient = a, a = i(a).replace(t._radial_gradient, function (t, e, i) {
                    return l = "radial", e && i && (e = n(e), i = n(i), o(e - .5, 2) + o(i - .5, 2) > .25 && (i = r.sqrt(.25 - o(e - .5, 2)) * (2 * (i > .5) - 1) + .5), u = e + f + i), p
                }), a = a.split(/\s*\-\s*/), "linear" == l) {
                    var c = a.shift();
                    if (c = -n(c), isNaN(c)) return null
                }
                var h = t._parseDots(a);
                if (!h) return null;
                if (e = e.shape || e.node, h.length) {
                    e.removeChild(s), s.on = !0, s.method = "none", s.color = h[0].color, s.color2 = h[h.length - 1].color;
                    for (var d = [], m = 0, g = h.length; m < g; m++) h[m].offset && d.push(h[m].offset + f + h[m].color);
                    s.colors = d.length ? d.join() : "0% " + s.color, "radial" == l ? (s.type = "gradientTitle", s.focus = "100%", s.focussize = "0 0", s.focusposition = u, s.angle = 0) : (s.type = "gradient", s.angle = (270 - c) % 360), e.appendChild(s)
                }
                return 1
            }, A = function (e, i) {
                this[0] = this.node = e, e.raphael = !0, this.id = t._oid++, e.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = i, this.matrix = t.matrix(), this._ = {
                    transform: [],
                    sx: 1,
                    sy: 1,
                    dx: 0,
                    dy: 0,
                    deg: 0,
                    dirty: 1,
                    dirtyT: 1
                }, !i.bottom && (i.bottom = this), this.prev = i.top, i.top && (i.top.next = this), i.top = this, this.next = null
            }, N = t.el;
            A.prototype = N, N.constructor = A, N.transform = function (e) {
                if (null == e) return this._.transform;
                var n, r = this.paper._viewBoxShift, a = r ? "s" + [r.scale, r.scale] + "-1-1t" + [r.dx, r.dy] : p;
                r && (n = e = i(e).replace(/\.{3}|\u2026/g, this._.transform || p)), t._extractTransform(this, a + e);
                var s, o = this.matrix.clone(), l = this.skew, u = this.node, c = ~i(this.attrs.fill).indexOf("-"),
                    h = !i(this.attrs.fill).indexOf("url(");
                if (o.translate(-.5, -.5), h || c || "image" == this.type) if (l.matrix = "1 0 0 1", l.offset = "0 0", s = o.split(), c && s.noRotation || !s.isSimple) {
                    u.style.filter = o.toFilter();
                    var d = this.getBBox(), m = this.getBBox(1), g = d.x - m.x, v = d.y - m.y;
                    u.coordorigin = g * -b + f + v * -b, E(this, 1, 1, g, v, 0)
                } else u.style.filter = p, E(this, s.scalex, s.scaley, s.dx, s.dy, s.rotate); else u.style.filter = p, l.matrix = i(o), l.offset = o.offset();
                return n && (this._.transform = n), this
            }, N.rotate = function (t, e, r) {
                if (this.removed) return this;
                if (null != t) {
                    if (t = i(t).split(c), t.length - 1 && (e = n(t[1]), r = n(t[2])), t = n(t[0]), null == r && (e = r), null == e || null == r) {
                        var a = this.getBBox(1);
                        e = a.x + a.width / 2, r = a.y + a.height / 2
                    }
                    return this._.dirtyT = 1, this.transform(this._.transform.concat([["r", t, e, r]])), this
                }
            }, N.translate = function (t, e) {
                return this.removed ? this : (t = i(t).split(c), t.length - 1 && (e = n(t[1])), t = n(t[0]) || 0, e = +e || 0, this._.bbox && (this._.bbox.x += t, this._.bbox.y += e), this.transform(this._.transform.concat([["t", t, e]])), this)
            }, N.scale = function (t, e, r, a) {
                if (this.removed) return this;
                if (t = i(t).split(c), t.length - 1 && (e = n(t[1]), r = n(t[2]), a = n(t[3]), isNaN(r) && (r = null), isNaN(a) && (a = null)), t = n(t[0]), null == e && (e = t), null == a && (r = a), null == r || null == a) var s = this.getBBox(1);
                return r = null == r ? s.x + s.width / 2 : r, a = null == a ? s.y + s.height / 2 : a, this.transform(this._.transform.concat([["s", t, e, r, a]])), this._.dirtyT = 1, this
            }, N.hide = function () {
                return !this.removed && (this.node.style.display = "none"), this
            }, N.show = function () {
                return !this.removed && (this.node.style.display = p), this
            }, N._getBBox = function () {
                return this.removed ? {} : {
                    x: this.X + (this.bbx || 0) - this.W / 2,
                    y: this.Y - this.H,
                    width: this.W,
                    height: this.H
                }
            }, N.remove = function () {
                if (!this.removed && this.node.parentNode) {
                    this.paper.__set__ && this.paper.__set__.exclude(this), t.eve.unbind("raphael.*.*." + this.id), t._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
                    for (var e in this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null;
                    this.removed = !0
                }
            }, N.attr = function (i, n) {
                if (this.removed) return this;
                if (null == i) {
                    var r = {};
                    for (var a in this.attrs) this.attrs[e](a) && (r[a] = this.attrs[a]);
                    return r.gradient && "none" == r.fill && (r.fill = r.gradient) && delete r.gradient, r.transform = this._.transform, r
                }
                if (null == n && t.is(i, "string")) {
                    if (i == u && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                    for (var s = i.split(c), o = {}, l = 0, d = s.length; l < d; l++) i = s[l], i in this.attrs ? o[i] = this.attrs[i] : t.is(this.paper.customAttributes[i], "function") ? o[i] = this.paper.customAttributes[i].def : o[i] = t._availableAttrs[i];
                    return d - 1 ? o : o[s[0]]
                }
                if (this.attrs && null == n && t.is(i, "array")) {
                    for (o = {}, l = 0, d = i.length; l < d; l++) o[i[l]] = this.attr(i[l]);
                    return o
                }
                var f;
                null != n && (f = {}, f[i] = n), null == n && t.is(i, "object") && (f = i);
                for (var p in f) h("raphael.attr." + p + "." + this.id, this, f[p]);
                if (f) {
                    for (p in this.paper.customAttributes) if (this.paper.customAttributes[e](p) && f[e](p) && t.is(this.paper.customAttributes[p], "function")) {
                        var m = this.paper.customAttributes[p].apply(this, [].concat(f[p]));
                        this.attrs[p] = f[p];
                        for (var g in m) m[e](g) && (f[g] = m[g])
                    }
                    f.text && "text" == this.type && (this.textpath.string = f.text), B(this, f)
                }
                return this
            }, N.toFront = function () {
                return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && t._tofront(this, this.paper), this
            }, N.toBack = function () {
                return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), t._toback(this, this.paper)), this)
            }, N.insertAfter = function (e) {
                return this.removed ? this : (e.constructor == t.st.constructor && (e = e[e.length - 1]), e.node.nextSibling ? e.node.parentNode.insertBefore(this.node, e.node.nextSibling) : e.node.parentNode.appendChild(this.node), t._insertafter(this, e, this.paper), this)
            }, N.insertBefore = function (e) {
                return this.removed ? this : (e.constructor == t.st.constructor && (e = e[0]), e.node.parentNode.insertBefore(this.node, e.node), t._insertbefore(this, e, this.paper), this)
            }, N.blur = function (e) {
                var i = this.node.runtimeStyle, n = i.filter;
                n = n.replace(v, p), 0 !== +e ? (this.attrs.blur = e, i.filter = n + f + d + ".Blur(pixelradius=" + (+e || 1.5) + ")", i.margin = t.format("-{0}px 0 0 -{0}px", a(+e || 1.5))) : (i.filter = n, i.margin = 0, delete this.attrs.blur)
            }, t._engine.path = function (t, e) {
                var i = M("shape");
                i.style.cssText = x, i.coordsize = b + f + b, i.coordorigin = e.coordorigin;
                var n = new A(i, e), r = {fill: "none", stroke: "#000"};
                t && (r.path = t), n.type = "path", n.path = [], n.Path = p, B(n, r), e.canvas.appendChild(i);
                var a = M("skew");
                return a.on = !0, i.appendChild(a), n.skew = a, n.transform(p), n
            }, t._engine.rect = function (e, i, n, r, a, s) {
                var o = t._rectPath(i, n, r, a, s), l = e.path(o), u = l.attrs;
                return l.X = u.x = i, l.Y = u.y = n, l.W = u.width = r, l.H = u.height = a, u.r = s, u.path = o, l.type = "rect", l
            }, t._engine.ellipse = function (t, e, i, n, r) {
                var a = t.path();
                a.attrs;
                return a.X = e - n, a.Y = i - r, a.W = 2 * n, a.H = 2 * r, a.type = "ellipse", B(a, {
                    cx: e,
                    cy: i,
                    rx: n,
                    ry: r
                }), a
            }, t._engine.circle = function (t, e, i, n) {
                var r = t.path();
                r.attrs;
                return r.X = e - n, r.Y = i - n, r.W = r.H = 2 * n, r.type = "circle", B(r, {cx: e, cy: i, r: n}), r
            }, t._engine.image = function (e, i, n, r, a, s) {
                var o = t._rectPath(n, r, a, s), l = e.path(o).attr({stroke: "none"}), c = l.attrs, h = l.node,
                    d = h.getElementsByTagName(u)[0];
                return c.src = i, l.X = c.x = n, l.Y = c.y = r, l.W = c.width = a, l.H = c.height = s, c.path = o, l.type = "image", d.parentNode == h && h.removeChild(d), d.rotate = !0, d.src = i, d.type = "tile", l._.fillpos = [n, r], l._.fillsize = [a, s], h.appendChild(d), E(l, 1, 1, 0, 0, 0), l
            }, t._engine.text = function (e, n, r, s) {
                var o = M("shape"), l = M("path"), u = M("textpath");
                n = n || 0, r = r || 0, s = s || "", l.v = t.format("m{0},{1}l{2},{1}", a(n * b), a(r * b), a(n * b) + 1), l.textpathok = !0, u.string = i(s), u.on = !0, o.style.cssText = x, o.coordsize = b + f + b, o.coordorigin = "0 0";
                var c = new A(o, e), h = {fill: "#000", stroke: "none", font: t._availableAttrs.font, text: s};
                c.shape = o, c.path = l, c.textpath = u, c.type = "text", c.attrs.text = i(s), c.attrs.x = n, c.attrs.y = r, c.attrs.w = 1, c.attrs.h = 1, B(c, h), o.appendChild(u), o.appendChild(l), e.canvas.appendChild(o);
                var d = M("skew");
                return d.on = !0, o.appendChild(d), c.skew = d, c.transform(p), c
            }, t._engine.setSize = function (e, i) {
                var n = this.canvas.style;
                return this.width = e, this.height = i, e == +e && (e += "px"), i == +i && (i += "px"), n.width = e, n.height = i, n.clip = "rect(0 " + e + " " + i + " 0)", this._viewBox && t._engine.setViewBox.apply(this, this._viewBox), this
            }, t._engine.setViewBox = function (e, i, n, r, a) {
                t.eve("raphael.setViewBox", this, this._viewBox, [e, i, n, r, a]);
                var o, l, u = this.width, c = this.height, h = 1 / s(n / u, r / c);
                return a && (o = c / r, l = u / n, n * o < u && (e -= (u - n * o) / 2 / o), r * l < c && (i -= (c - r * l) / 2 / l)), this._viewBox = [e, i, n, r, !!a], this._viewBoxShift = {
                    dx: -e,
                    dy: -i,
                    scale: h
                }, this.forEach(function (t) {
                    t.transform("...")
                }), this
            };
            var M;
            t._engine.initWin = function (t) {
                var e = t.document;
                e.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
                try {
                    !e.namespaces.rvml && e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), M = function (t) {
                        return e.createElement("<rvml:" + t + ' class="rvml">')
                    }
                } catch (i) {
                    M = function (t) {
                        return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
                    }
                }
            }, t._engine.initWin(t._g.win), t._engine.create = function () {
                var e = t._getContainer.apply(0, arguments), i = e.container, n = e.height, r = e.width, a = e.x,
                    s = e.y;
                if (!i) throw new Error("VML container not found.");
                var o = new t._Paper, l = o.canvas = t._g.doc.createElement("div"), u = l.style;
                return a = a || 0, s = s || 0, r = r || 512, n = n || 342, o.width = r, o.height = n, r == +r && (r += "px"), n == +n && (n += "px"), o.coordsize = 1e3 * b + f + 1e3 * b, o.coordorigin = "0 0", o.span = t._g.doc.createElement("span"), o.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", l.appendChild(o.span), u.cssText = t.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", r, n), 1 == i ? (t._g.doc.body.appendChild(l), u.left = a + "px", u.top = s + "px", u.position = "absolute") : i.firstChild ? i.insertBefore(l, i.firstChild) : i.appendChild(l), o.renderfix = function () {
                }, o
            }, t.prototype.clear = function () {
                t.eve("raphael.clear", this), this.canvas.innerHTML = p, this.span = t._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
            }, t.prototype.remove = function () {
                t.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
                for (var e in this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null;
                return !0
            };
            var O = t.st;
            for (var I in N) N[e](I) && !O[e](I) && (O[I] = function (t) {
                return function () {
                    var e = arguments;
                    return this.forEach(function (i) {
                        i[t].apply(i, e)
                    })
                }
            }(I))
        }(window.Raphael)
    }, 585: function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function a(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function s(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        e.__esModule = !0;
        var o = i(509), l = n(o), u = function (t) {
            function e(i) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (r(this, e), !n.dataType) {
                    var s;
                    return console.error("meta.dataType is undefined. ref ElectionDataType.java"), s = !1, a(o, s)
                }
                var o = a(this, t.call(this, i)), l = "20180613";
                return o.setApiPath(n.dataType, l), o
            }

            return s(e, t), e.prototype.getResult = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, e = {};
                return t && (e.data = t), this.getPromise(e)
            }, e.prototype.getPartyEngNameObj = function (t) {
                for (var e = {}, i = ["partyName", "shortName"], n = 0; n < t.length; n++) for (var r in t[n]) i.indexOf(r) >= 0 && "" !== t[n][r] && (e[t[n][r]] = t[n].engName);
                return e
            }, e
        }(l["default"]);
        e["default"] = u
    }, 594: function (t, e) {
        "use strict";
        e.__esModule = !0, e["default"] = function (t, e) {
            return t === e
        }
    }, 596: function (t, e) {
        "use strict";
        e.__esModule = !0, e["default"] = function (t, e) {
            return t !== e
        }
    }, 598: function (t, e) {
        "use strict";
        e.__esModule = !0, e["default"] = function (t) {
            if (null == t) return t;
            var e = t + "";
            if ("" === e.trim()) return t;
            for (var i = /(^[+-]?\d+)(\d{3})/; i.test(e);) e = e.replace(i, "$1,$2");
            return e
        }
    }, 643: function (t, e, i) {
        (function (t, i) {
            "use strict";

            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            e.__esModule = !0;
            var r = function () {
                function e() {
                    n(this, e)
                }

                return e.refresh = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    t.each(e, function (t) {
                        var e = t.partyName, n = t.count, r = i(".status_vote .list_status li[data-id='" + e + "']");
                        n > 0 ? r.find(".item_status").removeClass("item_empty") : r.find(".item_status").addClass("item_empty"), r.find(".num_g").text(n)
                    })
                }, e
            }();
            e["default"] = r
        }).call(e, i(2), i(1))
    }, 652: function (t, e, i) {
        function n(t) {
            return t && (t.__esModule ? t["default"] : t)
        }

        var r = i(474);
        t.exports = (r["default"] || r).template({
            1: function (t, e, i, n, r) {
                var a;
                return '    <div class="count_tbl">\n        <table class="tbl_count">\n            <caption class="ir_caption">지역별 현재 1위 테이블</caption>\n            <thead>\n            <tr>\n                <th scope="col"><span class="screen_out">지역</span></th>\n                <th scope="col"><em class="emph_party emph_theminjoo">더불어<br>민주당</em></th>\n                <th scope="col"><em class="emph_party emph_liberty">자유<br>한국당</em></th>\n                <th scope="col"><em class="emph_party emph_bareun">바른<br>미래당</em></th>\n                <th scope="col"><em class="emph_party emph_peace">민주<br>평화당</em></th>\n                <th scope="col"><em class="emph_party emph_justice">정의당</em></th>\n                <th scope="col"><em class="emph_party emph_etc">기타</em></th>\n                <th scope="col"><em class="emph_party emph_inde">무소속</em></th>\n            </tr>\n            </thead>\n            <tbody>\n' + (null != (a = i.each.call(null != e ? e : t.nullContext || {}, null != e ? e.list : e, {
                    name: "each",
                    hash: {},
                    fn: t.program(2, r, 0),
                    inverse: t.noop,
                    data: r
                })) ? a : "") + "            </tbody>\n        </table>\n    </div>\n"
            }, 2: function (t, e, i, n, r) {
                var a, s = null != e ? e : t.nullContext || {}, o = i.helperMissing, l = "function",
                    u = t.escapeExpression;
                return '                <tr name="' + u((a = null != (a = i.name || (null != e ? e.name : e)) ? a : o, typeof a === l ? a.call(s, {
                    name: "name",
                    hash: {},
                    data: r
                }) : a)) + '">\n                    <th scope="row">' + u((a = null != (a = i.name || (null != e ? e.name : e)) ? a : o, typeof a === l ? a.call(s, {
                    name: "name",
                    hash: {},
                    data: r
                }) : a)) + '</th>\n                    <td><div class="num_g emph_theminjoo">0</div></td>\n                    <td><div class="num_g emph_liberty">0</div></td>\n                    <td><div class="num_g emph_bareun">0</div></td>\n                    <td><div class="num_g emph_peace">0</div></td>\n                    <td><div class="num_g emph_justice">0</div></td>\n                    <td><div class="num_g emph_etc">0</div></td>\n                    <td><div class="num_g emph_inde">0</div></td>\n                </tr>\n';
            }, 4: function (t, e, i, n, r) {
                return '    <ul class="list_count list_count2">\n    </ul>\n'
            }, 6: function (t, e, i, n, r) {
                return '    <ol class="list_count">\n    </ol>\n'
            }, compiler: [7, ">= 4.0.0"], main: function (t, e, r, a, s) {
                var o, l = null != e ? e : t.nullContext || {};
                return (null != (o = r["if"].call(l, n(i(594)).call(l, null != e ? e.type : e, "all", {
                    name: "eq",
                    hash: {},
                    data: s
                }), {
                    name: "if",
                    hash: {},
                    fn: t.program(1, s, 0),
                    inverse: t.noop,
                    data: s
                })) ? o : "") + "\n" + (null != (o = r["if"].call(l, n(i(594)).call(l, null != e ? e.type : e, "1depth", {
                    name: "eq",
                    hash: {},
                    data: s
                }), {
                    name: "if",
                    hash: {},
                    fn: t.program(4, s, 0),
                    inverse: t.noop,
                    data: s
                })) ? o : "") + "\n" + (null != (o = r["if"].call(l, n(i(594)).call(l, null != e ? e.type : e, "2depth", {
                    name: "eq",
                    hash: {},
                    data: s
                }), {name: "if", hash: {}, fn: t.program(6, s, 0), inverse: t.noop, data: s})) ? o : "")
            }, useData: !0
        })
    }, 653: function (t, e, i) {
        function n(t) {
            return t && (t.__esModule ? t["default"] : t)
        }

        var r = i(474);
        t.exports = (r["default"] || r).template({
            1: function (t, e, i, n, r) {
                var a, s, o = null != e ? e : t.nullContext || {};
                return '    <strong class="tit_layer">' + t.escapeExpression((s = null != (s = i.districtName || (null != e ? e.districtName : e)) ? s : i.helperMissing, "function" == typeof s ? s.call(o, {
                    name: "districtName",
                    hash: {},
                    data: r
                }) : s)) + " 1위</strong>\n" + (null != (a = i["if"].call(o, null != e ? e.list1 : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(2, r, 0),
                    inverse: t.noop,
                    data: r
                })) ? a : "") + (null != (a = i["if"].call(o, null != e ? e.list2 : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(5, r, 0),
                    inverse: t.noop,
                    data: r
                })) ? a : "") + (null != (a = i["if"].call(o, null != e ? e.list3 : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(7, r, 0),
                    inverse: t.noop,
                    data: r
                })) ? a : "")
            }, 2: function (t, e, i, n, r) {
                var a;
                return '        <ul class="list_detail">\n' + (null != (a = i.each.call(null != e ? e : t.nullContext || {}, null != e ? e.list1 : e, {
                    name: "each",
                    hash: {},
                    fn: t.program(3, r, 0),
                    inverse: t.noop,
                    data: r
                })) ? a : "") + "        </ul>\n"
            }, 3: function (t, e, i, n, r) {
                var a, s = null != e ? e : t.nullContext || {}, o = i.helperMissing, l = "function",
                    u = t.escapeExpression;
                return '                <li>\n                    <span class="txt_district">' + u((a = null != (a = i.districtName || (null != e ? e.districtName : e)) ? a : o, typeof a === l ? a.call(s, {
                    name: "districtName",
                    hash: {},
                    data: r
                }) : a)) + '</span>\n                    <strong class="tit_name">\n                        <span class="tag_party bg_' + u((a = null != (a = i.partyEngName || (null != e ? e.partyEngName : e)) ? a : o, typeof a === l ? a.call(s, {
                    name: "partyEngName",
                    hash: {},
                    data: r
                }) : a)) + '">' + u((a = null != (a = i.partyName || (null != e ? e.partyName : e)) ? a : o, typeof a === l ? a.call(s, {
                    name: "partyName",
                    hash: {},
                    data: r
                }) : a)) + '</span>\n                        <span class="txt_g">' + u((a = null != (a = i.name || (null != e ? e.name : e)) ? a : o, typeof a === l ? a.call(s, {
                    name: "name",
                    hash: {},
                    data: r
                }) : a)) + '</span>\n                    </strong>\n                    <em class="num_g emph_' + u((a = null != (a = i.partyEngName || (null != e ? e.partyEngName : e)) ? a : o, typeof a === l ? a.call(s, {
                    name: "partyEngName",
                    hash: {},
                    data: r
                }) : a)) + '">' + u((a = null != (a = i.scoreRate || (null != e ? e.scoreRate : e)) ? a : o, typeof a === l ? a.call(s, {
                    name: "scoreRate",
                    hash: {},
                    data: r
                }) : a)) + "%</em>\n                </li>\n"
            }, 5: function (t, e, i, n, r) {
                var a;
                return '        <ul class="list_detail">\n' + (null != (a = i.each.call(null != e ? e : t.nullContext || {}, null != e ? e.list2 : e, {
                    name: "each",
                    hash: {},
                    fn: t.program(3, r, 0),
                    inverse: t.noop,
                    data: r
                })) ? a : "") + "        </ul>\n"
            }, 7: function (t, e, i, n, r) {
                var a;
                return '        <ul class="list_detail">\n' + (null != (a = i.each.call(null != e ? e : t.nullContext || {}, null != e ? e.list3 : e, {
                    name: "each",
                    hash: {},
                    fn: t.program(3, r, 0),
                    inverse: t.noop,
                    data: r
                })) ? a : "") + "        </ul>\n"
            }, 9: function (t, e, i, n, r) {
                var a, s, o = null != e ? e : t.nullContext || {};
                return '    <strong class="tit_layer">' + t.escapeExpression((s = null != (s = i.districtName || (null != e ? e.districtName : e)) ? s : i.helperMissing, "function" == typeof s ? s.call(o, {
                    name: "districtName",
                    hash: {},
                    data: r
                }) : s)) + '</strong>\n    <ul class="list_detail">\n' + (null != (a = i.each.call(o, null != e ? e.list : e, {
                    name: "each",
                    hash: {},
                    fn: t.program(10, r, 0),
                    inverse: t.noop,
                    data: r
                })) ? a : "") + "    </ul>\n"
            }, 10: function (t, e, i, n, r) {
                var a, s = null != e ? e : t.nullContext || {}, o = i.helperMissing, l = "function",
                    u = t.escapeExpression;
                return '            <li>\n                <span class="num_g2 num_rank">' + u((a = null != (a = i.rank || (null != e ? e.rank : e)) ? a : o, typeof a === l ? a.call(s, {
                    name: "rank",
                    hash: {},
                    data: r
                }) : a)) + '</span>\n                <strong class="tit_name">\n                    <span class="tag_party bg_' + u((a = null != (a = i.partyEngName || (null != e ? e.partyEngName : e)) ? a : o, typeof a === l ? a.call(s, {
                    name: "partyEngName",
                    hash: {},
                    data: r
                }) : a)) + '">' + u((a = null != (a = i.partyName || (null != e ? e.partyName : e)) ? a : o, typeof a === l ? a.call(s, {
                    name: "partyName",
                    hash: {},
                    data: r
                }) : a)) + '</span>\n                    <span class="txt_g">' + u((a = null != (a = i.name || (null != e ? e.name : e)) ? a : o, typeof a === l ? a.call(s, {
                    name: "name",
                    hash: {},
                    data: r
                }) : a)) + '</span>\n                </strong>\n                <em class="num_g emph_' + u((a = null != (a = i.partyEngName || (null != e ? e.partyEngName : e)) ? a : o, typeof a === l ? a.call(s, {
                    name: "partyEngName",
                    hash: {},
                    data: r
                }) : a)) + '">' + u((a = null != (a = i.scoreRate || (null != e ? e.scoreRate : e)) ? a : o, typeof a === l ? a.call(s, {
                    name: "scoreRate",
                    hash: {},
                    data: r
                }) : a)) + "%</em> <!-- 단일 후보일때는 em.num_g 삭제 -->\n            </li>\n"
            }, compiler: [7, ">= 4.0.0"], main: function (t, e, r, a, s) {
                var o, l = null != e ? e : t.nullContext || {};
                return (null != (o = r["if"].call(l, n(i(594)).call(l, null != e ? e.dept : e, 1, {
                    name: "eq",
                    hash: {},
                    data: s
                }), {
                    name: "if",
                    hash: {},
                    fn: t.program(1, s, 0),
                    inverse: t.noop,
                    data: s
                })) ? o : "") + "\n" + (null != (o = r["if"].call(l, n(i(594)).call(l, null != e ? e.dept : e, 2, {
                    name: "eq",
                    hash: {},
                    data: s
                }), {name: "if", hash: {}, fn: t.program(9, s, 0), inverse: t.noop, data: s})) ? o : "")
            }, useData: !0
        })
    }, 654: function (t, e, i) {
        function n(t) {
            return t && (t.__esModule ? t["default"] : t)
        }

        var r = i(474);
        t.exports = (r["default"] || r).template({
            1: function (t, e, i, n, r) {
                var a, s = t.lambda, o = t.escapeExpression;
                return '                    <strong class="ico_election ico_status ico_' + o(s(null != (a = null != e ? e.p1 : e) ? a.prediction : a, e)) + '">' + o(s(null != (a = null != e ? e.p1 : e) ? a.predictionCdName : a, e)) + "</strong>\n"
            }, compiler: [7, ">= 4.0.0"], main: function (t, e, r, a, s) {
                var o, l, u = null != e ? e : t.nullContext || {}, c = r.helperMissing, h = "function",
                    d = t.escapeExpression, f = t.lambda;
                return '<li>\n    <a href="javascript:;" class="link_cont" did="' + d((l = null != (l = r.cpElectionDistrictId || (null != e ? e.cpElectionDistrictId : e)) ? l : c, typeof l === h ? l.call(u, {
                    name: "cpElectionDistrictId",
                    hash: {},
                    data: s
                }) : l)) + '">\n        <div class="head_district">\n            <strong class="tit_district">' + d((l = null != (l = r.positionName || (null != e ? e.positionName : e)) ? l : c, typeof l === h ? l.call(u, {
                    name: "positionName",
                    hash: {},
                    data: s
                }) : l)) + '</strong>\n            <span class="info_rate">개표 <span class="num_g2">' + d((l = null != (l = r.countingRate || (null != e ? e.countingRate : e)) ? l : c, typeof l === h ? l.call(u, {
                    name: "countingRate",
                    hash: {},
                    data: s
                }) : l)) + '%</span></span>\n        </div>\n        <div class="item_candidate">\n            <div class="wrap_thumb">\n' + (null != (o = r["if"].call(u, n(i(596)).call(u, null != (o = null != e ? e.p1 : e) ? o.prediction : o, "", {
                    name: "neq",
                    hash: {},
                    data: s
                }), {
                    name: "if",
                    hash: {},
                    fn: t.program(1, s, 0),
                    inverse: t.noop,
                    data: s
                })) ? o : "") + '                <img src="' + d(f(null != (o = null != e ? e.p1 : e) ? o.thumbnail : o, e)) + '" class="thumb_g" alt="">\n            </div>\n            <div class="cont_thumb">\n                <div class="inner_cont">\n                    <div class="inner_cont2">\n                        <strong class="tit_thumb">' + d(f(null != (o = null != e ? e.p1 : e) ? o.name : o, e)) + '</strong>\n                        <span class="info_thumb">' + d(f(null != (o = null != e ? e.p1 : e) ? o.partyName : o, e)) + '</span>\n                        <em class="num_g emph_' + d(f(null != (o = null != e ? e.p1 : e) ? o.partyEngName : o, e)) + '">' + d(f(null != (o = null != e ? e.p1 : e) ? o.scoreRate : o, e)) + '%</em> <!-- 정당별 포인트 컬러 클래스 넣어줌 (http://html.gt.dev.daum.net/election-2018/service/guide/guide.html) -->\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="item_candidate">\n            <div class="wrap_thumb"><img src="' + d(f(null != (o = null != e ? e.p2 : e) ? o.thumbnail : o, e)) + '" class="thumb_g" alt=""></div>\n            <div class="cont_thumb">\n                <strong class="tit_thumb">' + d(f(null != (o = null != e ? e.p2 : e) ? o.name : o, e)) + '</strong>\n                <span class="info_thumb">' + d(f(null != (o = null != e ? e.p2 : e) ? o.partyName : o, e)) + '</span>\n                <em class="num_g emph_' + d(f(null != (o = null != e ? e.p2 : e) ? o.partyEngName : o, e)) + '">' + d(f(null != (o = null != e ? e.p2 : e) ? o.scoreRate : o, e)) + '%</em> <!-- 정당별 포인트 컬러 클래스 넣어줌 (http://html.gt.dev.daum.net/election-2018/service/guide/guide.html) -->\n            </div>\n        </div>\n        <span class="ico_election ico_arr">지역별 개표 현황 바로가기</span>\n    </a>\n</li>'
            }, useData: !0
        })
    }, 655: function (t, e, i) {
        function n(t) {
            return t && (t.__esModule ? t["default"] : t)
        }

        var r = i(474);
        t.exports = (r["default"] || r).template({
            1: function (t, e, i, n, r) {
                var a, s = null != e ? e : t.nullContext || {}, o = i.helperMissing, l = "function",
                    u = t.escapeExpression;
                return '                    <strong class="ico_election ico_status ico_' + u((a = null != (a = i.prediction || (null != e ? e.prediction : e)) ? a : o, typeof a === l ? a.call(s, {
                    name: "prediction",
                    hash: {},
                    data: r
                }) : a)) + '">' + u((a = null != (a = i.predictionCdName || (null != e ? e.predictionCdName : e)) ? a : o, typeof a === l ? a.call(s, {
                    name: "predictionCdName",
                    hash: {},
                    data: r
                }) : a)) + "</strong>\n"
            }, 3: function (t, e, i, n, r) {
                return '                <div class="desc_empty"><div class="inner_cont"><p class="inner_cont2">무투표 당선지역으로<br>개표현황이 제공되지 않습니다.</p></div></div>\n'
            }, 5: function (t, e, r, a, s) {
                var o, l, u = null != e ? e : t.nullContext || {}, c = t.escapeExpression;
                return '                <span class="screen_out">득표율</span>\n                <em class="num_g num_rate ' + (null != (o = r["if"].call(u, null != e ? e.isTop : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(6, s, 0),
                    inverse: t.noop,
                    data: s
                })) ? o : "") + '">' + c((l = null != (l = r.scoreRate || (null != e ? e.scoreRate : e)) ? l : r.helperMissing, "function" == typeof l ? l.call(u, {
                    name: "scoreRate",
                    hash: {},
                    data: s
                }) : l)) + '%</em> <!-- 1, 2위에만 정당별 포인트 컬러 클래스 넣어줌 (http://html.gt.dev.daum.net/election-2018/service/guide/guide.html) -->\n                <span class="screen_out">득표수</span>\n                <span class="num_g2 num_count">' + c(n(i(598)).call(u, null != e ? e.score : e, {
                    name: "commaToNumber",
                    hash: {},
                    data: s
                })) + "</span>\n"
            }, 6: function (t, e, i, n, r) {
                var a;
                return "emph_" + t.escapeExpression((a = null != (a = i.partyEngName || (null != e ? e.partyEngName : e)) ? a : i.helperMissing, "function" == typeof a ? a.call(null != e ? e : t.nullContext || {}, {
                    name: "partyEngName",
                    hash: {},
                    data: r
                }) : a))
            }, 8: function (t, e, r, a, s) {
                return '            <em class="emph_distance"><span class="screen_out">1,2위</span>표차 <span class="num_g">' + t.escapeExpression(n(i(598)).call(null != e ? e : t.nullContext || {}, null != e ? e.scoreGap : e, {
                    name: "commaToNumber",
                    hash: {},
                    data: s
                })) + "</span></em>\n"
            }, compiler: [7, ">= 4.0.0"], main: function (t, e, r, a, s) {
                var o, l, u = null != e ? e : t.nullContext || {}, c = r.helperMissing, h = "function",
                    d = t.escapeExpression;
                return '<li>\n    <span class="link_cont">\n        <em class="num_g2 num_rank">' + d((l = null != (l = r.rank || (null != e ? e.rank : e)) ? l : c, typeof l === h ? l.call(u, {
                    name: "rank",
                    hash: {},
                    data: s
                }) : l)) + '</em>\n        <div class="item_candidate">\n            <div class="wrap_thumb">\n' + (null != (o = r["if"].call(u, n(i(596)).call(u, null != e ? e.prediction : e, "", {
                    name: "neq",
                    hash: {},
                    data: s
                }), {
                    name: "if",
                    hash: {},
                    fn: t.program(1, s, 0),
                    inverse: t.noop,
                    data: s
                })) ? o : "") + '                <img src="' + d((l = null != (l = r.thumbnail || (null != e ? e.thumbnail : e)) ? l : c, typeof l === h ? l.call(u, {
                    name: "thumbnail",
                    hash: {},
                    data: s
                }) : l)) + '" class="thumb_g" alt="">\n            </div>\n            <div class="cont_thumb">\n                <div class="inner_cont">\n                    <div class="inner_cont2">\n                        <strong class="tit_thumb">' + d((l = null != (l = r.name || (null != e ? e.name : e)) ? l : c, typeof l === h ? l.call(u, {
                    name: "name",
                    hash: {},
                    data: s
                }) : l)) + '</strong>\n                        <span class="info_thumb">' + d((l = null != (l = r.partyName || (null != e ? e.partyName : e)) ? l : c, typeof l === h ? l.call(u, {
                    name: "partyName",
                    hash: {},
                    data: s
                }) : l)) + "</span>\n                    </div>\n                </div>\n            </div>\n" + (null != (o = r["if"].call(u, null != e ? e.isWithoutVoting : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(3, s, 0),
                    inverse: t.program(5, s, 0),
                    data: s
                })) ? o : "") + "        </div>\n" + (null != (o = r["if"].call(u, null != e ? e.isShowGap : e, {
                    name: "if",
                    hash: {},
                    fn: t.program(8, s, 0),
                    inverse: t.noop,
                    data: s
                })) ? o : "") + "    </span>\n</li>"
            }, useData: !0
        })
    }
});