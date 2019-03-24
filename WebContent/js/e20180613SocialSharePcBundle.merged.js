webpackJsonp([41], {
    0: function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        var a = n(640), i = r(a), s = n(561), c = r(s), u = n(639), l = r(u), f = function () {
            function e() {
                o(this, e);
                var t = "1.5.9";
                this.shareComponent = new i["default"](t);
                var n = new l["default"]({
                    title: "6・13 지방선거",
                    description: "다음뉴스",
                    image: "//t1.daumcdn.net/media/news/election2018/election2018_ogimg.png"
                });
                this.KAKAO_LINK_CUSTOM_DATA = {
                    shareType: "sendCustom",
                    shareData: {
                        templateId: 6928,
                        installTalk: !0,
                        templateArgs: n.getCustomKakaoLinkTemplateData({
                            "${EncodingUrl}": encodeURIComponent(location.href),
                            "${webUrl}": location.href,
                            "${mobileWebUrl}": location.href
                        })
                    }
                }, this.socialShareOpt = {
                    expandedContainer: document.getElementById("rSocialShareLayerContainer1"),
                    link: location.href,
                    prefix: n.getTitle(),
                    service_name: n.getDescription(),
                    kakaoAPI: {appkey: c["default"].getCommon(), kakaoLinkData: this.KAKAO_LINK_CUSTOM_DATA}
                }
            }

            return e.prototype.updateLink = function (e) {
                this.shareObject && this.shareObject && (this.KAKAO_LINK_CUSTOM_DATA.shareData.templateArgs["${webUrl}"] = e, this.KAKAO_LINK_CUSTOM_DATA.shareData.templateArgs["${mobileWebUrl}"] = e, this.KAKAO_LINK_CUSTOM_DATA.shareData.templateArgs["${EncodingUrl}"] = encodeURIComponent(e), this.socialShareOpt.link = e, this.shareObject.updateContext(this.socialShareOpt))
            }, e.prototype.load = function () {
                var e = this;
                this.shareComponent.getScriptLoad(function () {
                    e.shareObject = new socialshareRenewal.Main(document.querySelector("#socialShareButton"), e.socialShareOpt)
                })
            }, e
        }(), p = new f;
        p.load(), window.electionSocialShare = p
    }, 343: function (e, t, n) {
        (function (e, r) {
            "use strict";

            function o(e) {
                return e && e.__esModule ? e : {"default": e}
            }

            function a(e) {
                return function () {
                    var t = e.apply(this, arguments);
                    return new Promise(function (e, n) {
                        function r(o, a) {
                            try {
                                var i = t[o](a), s = i.value
                            } catch (c) {
                                return void n(c)
                            }
                            return i.done ? void e(s) : Promise.resolve(s).then(function (e) {
                                r("next", e)
                            }, function (e) {
                                r("throw", e)
                            })
                        }

                        return r("next")
                    })
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            t.__esModule = !0;
            var s = n(344), c = o(s), u = function () {
                function t() {
                    i(this, t)
                }

                return t.fixIe9LessOrEqualCORS = function (t) {
                    var n = c["default"].userAgent(window.navigator.userAgent).browser, r = t.offJsonp || !1;
                    return n.msie && Number(n.version.major) <= 9 && !r && e.extend(t, {dataType: "jsonp"}), e.omit(t, "offJsonp"), t
                }, t.get = function () {
                    function e(e) {
                        return n.apply(this, arguments)
                    }

                    var n = a(regeneratorRuntime.mark(function o(e) {
                        var n, a;
                        return regeneratorRuntime.wrap(function (o) {
                            for (; ;) switch (o.prev = o.next) {
                                case 0:
                                    return e = t.fixIe9LessOrEqualCORS(e), n = null, a = null, o.prev = 3, o.next = 6, new Promise(function (t, n) {
                                        r.ajax(e).done(t).error(n)
                                    });
                                case 6:
                                    n = o.sent, o.next = 12;
                                    break;
                                case 9:
                                    o.prev = 9, o.t0 = o["catch"](3), a = o.t0;
                                case 12:
                                    return o.abrupt("return", {body: n, error: a});
                                case 13:
                                case"end":
                                    return o.stop()
                            }
                        }, o, this, [[3, 9]])
                    }));
                    return e
                }(), t.getScript = function () {
                    function e(e) {
                        return t.apply(this, arguments)
                    }

                    var t = a(regeneratorRuntime.mark(function n(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        return regeneratorRuntime.wrap(function (n) {
                            for (; ;) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", this.get({
                                        url: e,
                                        dataType: "script",
                                        cache: t,
                                        offJsonp: !0
                                    }));
                                case 1:
                                case"end":
                                    return n.stop()
                            }
                        }, n, this)
                    }));
                    return e
                }(), t
            }();
            t["default"] = u
        }).call(t, n(2), n(1))
    }, 344: function (e, t, n) {
        !function (e) {
            "use strict";

            function t(e) {
                var t = {},
                    r = /(dolfin)[ \/]([\w.]+)/.exec(e) || /(edge)[ \/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(tizen)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(e) || /(webkit)(?:.*version)?[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(e) || ["", "unknown"];
                return "webkit" === r[1] ? r = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(e) || /(android)[ \/]([\w._\-]+);/.exec(e) || [r[0], "safari", r[2]] : "mozilla" === r[1] ? /trident/.test(e) ? r[1] = "msie" : r[1] = "firefox" : /polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(e) && (r[1] = "polaris"), t[r[1]] = !0, t.name = r[1], t.version = n(r[2]), t
            }

            function n(e) {
                var t = {}, n = e ? e.split(/\.|-|_/) : ["0", "0", "0"];
                return t.info = n.join("."), t.major = n[0] || "0", t.minor = n[1] || "0", t.patch = n[2] || "0", t
            }

            function r(e) {
                return o(e) ? "pc" : a(e) ? "tablet" : i(e) ? "mobile" : ""
            }

            function o(e) {
                return !(!e.match(/linux|windows (nt|98)|macintosh|cros/) || e.match(/android|mobile|polaris|lgtelecom|uzard|natebrowser|ktf;|skt;/))
            }

            function a(e) {
                return !!(e.match(/ipad/) || e.match(/android/) && !e.match(/mobi|mini|fennec/))
            }

            function i(e) {
                return !!e.match(/ip(hone|od)|android.+mobile|windows (ce|phone)|blackberry|bb10|symbian|webos|firefox.+fennec|opera m(ob|in)i|tizen.+mobile|polaris|iemobile|lgtelecom|nokia|sonyericsson|dolfin|uzard|natebrowser|ktf;|skt;/)
            }

            function s(e) {
                var t = {},
                    r = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(e) || !!/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(e) && ["", "polaris", "0.0.0"] || /(windows)(?: nt | phone(?: os){0,1} | )([\w._\-]+)/.exec(e) || /(android)[ \/]([\w._\-]+);/.exec(e) || !!/android/.test(e) && ["", "android", "0.0.0"] || !!/(windows)/.test(e) && ["", "windows", "0.0.0"] || /(mac) os x ([\w._\-]+)/.exec(e) || /(tizen)[ \/]([\w._\-]+);/.exec(e) || !!/(linux)/.test(e) && ["", "linux", "0.0.0"] || !!/webos/.test(e) && ["", "webos", "0.0.0"] || /(cros)(?:\s[\w]+\s)([\d._\-]+)/.exec(e) || /(bada)[ \/]([\w._\-]+)/.exec(e) || !!/bada/.test(e) && ["", "bada", "0.0.0"] || !!/(rim|blackberry|bb10)/.test(e) && ["", "blackberry", "0.0.0"] || ["", "unknown", "0.0.0"];
                return "iphone" === r[1] || "ipad" === r[1] || "ipod" === r[1] ? r[1] = "ios" : "windows" === r[1] && "98" === r[2] && (r[2] = "0.98.0"), "cros" === r[1] && (r[1] = "chrome"), t[r[1]] = !0, t.name = r[1], t.version = n(r[2]), t
            }

            function c(e, t) {
                var r = {}, o = null, a = l;
                Array.isArray(t) ? a = l.concat(t) : "string" == typeof t && (a = l.concat([t]));
                for (var i = 0, s = a.length; i < s; i += 1) {
                    var c = a[i], u = new RegExp("(" + c + ")[ \\/]([\\w._\\-]+)");
                    if (o = u.exec(e)) break
                }
                return o || (o = ["", ""]), o[1] ? (r.isApp = !0, r.name = o[1], r.version = n(o[2])) : r.isApp = !1, r
            }

            function u(e) {
                var t = "";
                return t = e ? e.toLowerCase() : "undefined" != typeof window && window.navigator && "string" == typeof window.navigator.userAgent ? window.navigator.userAgent.toLowerCase() : ""
            }

            Array.isArray || (Array.isArray = function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            });
            var l = ["crios", "fxios", "daumapps"], f = e.userAgent = function (e, n) {
                var o = u(e);
                return {ua: o, browser: t(o), platform: r(o), os: s(o), app: c(o, n)}
            };
            "object" == typeof window && window.navigator.userAgent && (window.ua_result = f(window.navigator.userAgent) || null)
        }(function () {
            return t.daumtools = t, t.util = t, t
        }())
    }, 472: function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        t.__esModule = !0;
        var a = n(344), i = r(a), s = function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
                o(this, e), this.parser = i["default"].userAgent(t)
            }

            return e.prototype.isIE8 = function () {
                var e = this.parser.browser;
                return !!e.msie && 8 === Number(e.version.major)
            }, e.prototype.isIE9 = function () {
                var e = this.parser.browser;
                return !!e.msie && 9 === Number(e.version.major)
            }, e.prototype.isIE = function () {
                var e = this.parser.browser;
                return !!e.msie
            }, e.prototype.isPC = function () {
                var e = this.parser.platform;
                return "pc" === e
            }, e.prototype.isMobile = function () {
                var e = this.parser.platform;
                return "mobile" === e
            }, e.prototype.getParser = function () {
                return this.parser
            }, e
        }();
        t["default"] = s
    }, 561: function (e, t) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        t.__esModule = !0;
        var r = function () {
            function e() {
                n(this, e)
            }

            return e.getCommon = function () {
                return "53e566aa17534bc816eb1b5d8f7415ee"
            }, e.getMedia = function () {
                return "9076ba452fea1a434141d6b6a2c11a3c"
            }, e.getSports = function () {
                return "24adf3965295ff5aa23511742c4753ee"
            }, e
        }();
        t["default"] = r
    }, 637: function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        t.__esModule = !0;
        var a = n(343), i = r(a), s = function () {
            function e(t) {
                o(this, e);
                var n = t.socialshareVersion, r = t.supportVersions;
                if (!r.includes(n)) throw new Error(this.constructor.name + " does not support the given version(" + n + ").")
            }

            return e.prototype.loadFromUrl = function (e, t) {
                i["default"].getScript(this.url).then(function (n) {
                    n.error ? t() : e()
                })
            }, e
        }();
        t["default"] = s
    }, 638: function (e, t) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        t.__esModule = !0;
        var r = function () {
            function e() {
                n(this, e)
            }

            return e.getUrl = function (e, t) {
                var n = t[e];
                if (!n) throw new Error("version " + e + " not found.");
                return n
            }, e.getPcUrl = function (t) {
                var n = {
                    "1.5.5": "//s1.daumcdn.net/svc/attach/U03/cssjs/pcsocialshare/pcsocialshare_standalone-1.5.5.merged.js",
                    "1.5.7": "//s1.daumcdn.net/svc/attach/U03/cssjs/pcsocialshare/pcsocialshare_standalone-1.5.7.min.js",
                    "1.5.8": "//s1.daumcdn.net/svc/attach/U03/cssjs/pcsocialshare/pcsocialshare_standalone-1.5.8.min.js",
                    "1.5.9": "//s1.daumcdn.net/svc/attach/U03/cssjs/pcsocialshare/pcsocialshare_standalone-1.5.9.min.js"
                };
                return e.getUrl(t, n)
            }, e.getMobileUrl = function (t) {
                var n = {
                    "1.9.0": "//s1.daumcdn.net/svc/original/U03/cssjs/socialshare/socialshare_standalone-1.9.0.min.js",
                    "1.9.3": "//s1.daumcdn.net/svc/original/U03/cssjs/socialshare/socialshare_standalone-1.9.3.min.js",
                    "1.9.4": "//s1.daumcdn.net/svc/original/U03/cssjs/socialshare/socialshare_standalone-1.9.4.min.js"
                };
                return e.getUrl(t, n)
            }, e
        }();
        t["default"] = r
    }, 639: function (e, t) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        t.__esModule = !0;
        var r = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, o = function () {
            function e(t) {
                if (n(this, e), !(t && t.title && t.description && t.image)) throw new Error("defaultOpenGraphData is require.");
                this.defaultOpenGraphData = t
            }

            return e.prototype.getCustomKakaoLinkTemplateData = function (e) {
                var t = r({}, e);
                return t["${title}"] = this.getTitle(), t["${description}"] = this.getDescription(), t["${imageUrl}"] = this.getImage(), t
            }, e.prototype.getTitle = function () {
                var e = this.defaultOpenGraphData.title, t = document.querySelector("meta[property='og:title']");
                return t && t.getAttribute("content") || e
            }, e.prototype.getDescription = function () {
                var e = this.defaultOpenGraphData.description,
                    t = document.querySelector("meta[property='og:description']");
                return t && t.getAttribute("content") || e
            }, e.prototype.getImage = function () {
                var e = this.defaultOpenGraphData.image, t = document.querySelector("meta[property='og:image']"),
                    n = t && t.getAttribute("content") || e;
                return n && n.startsWith("//") ? location.protocol + n : n
            }, e
        }();
        t["default"] = o
    }, 640: function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        t.__esModule = !0;
        var s = n(637), c = r(s), u = n(638), l = r(u), f = n(472), p = r(f), d = function (e) {
            function t(n) {
                o(this, t);
                var r = a(this, e.call(this, {
                    socialshareVersion: n,
                    supportVersions: ["1.5.5", "1.5.7", "1.5.8", "1.5.9"]
                }));
                return r.url = l["default"].getPcUrl(n), r.uaComponent = new p["default"], r
            }

            return i(t, e), t.prototype.getScriptLoad = function (e, t) {
                this.uaComponent.isIE8() ? (this.settingForIE8(), e()) : this.loadFromUrl(e, t)
            }, t.prototype.settingForIE8 = function () {
                window.socialshareRenewal = {
                    Main: function (e, t) {
                        e && e instanceof Element && (e.style.display = "none"), t && t.moreViewContainer && t.moreViewContainer instanceof Element && (t.moreViewContainer.style.display = "none")
                    }
                }
            }, t
        }(c["default"]);
        t["default"] = d
    }
});