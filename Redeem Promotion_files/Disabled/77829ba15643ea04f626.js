(this.webpackJsonp = this.webpackJsonp || []).push([
  [16],
  {
    5859: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getSelectionText = d),
        (t.contextMenuCallbackNative = function (e) {
          e.preventDefault();
          var t = d();
          if ("TEXTAREA" === e.target.tagName || "INPUT" === e.target.tagName) {
            if ("checkbox" !== e.target.type)
              return (0, o.openContextMenu)(e, function (e) {
                return r.createElement(l.default, s({}, e, { text: t }));
              });
          } else {
            if (
              "none" ===
              window
                .getComputedStyle(e.target)
                .getPropertyValue("-webkit-user-select")
            )
              return;
            var n,
              c,
              f,
              p = e.target;
            do {
              null != p.src && (c = p.src),
                null != p.href && ((n = p.href), (f = p.textContent)),
                (p = p.parentNode);
            } while (null != p);
            if (null != c)
              return (0, o.openContextMenu)(e, function (e) {
                return r.createElement(u.default, s({}, e, { src: c }));
              });
            if (null != n)
              return (0, o.openContextMenu)(e, function (e) {
                return r.createElement(
                  a.default,
                  s({}, e, { href: n, textContent: f })
                );
              });
            if (t)
              return (0, o.openContextMenu)(e, function (e) {
                return r.createElement(i.default, s({}, e, { text: t }));
              });
          }
          return null;
        }),
        (t.contextMenuCallbackWeb = function (e) {
          var t = !1;
          if ("INPUT" === e.target.tagName || "TEXTAREA" === e.target.tagName)
            t = !0;
          else if (
            null != e.target.closest &&
            null != e.target.closest("[contenteditable=true]")
          )
            t = !0;
          else if (d()) t = !0;
          else {
            var n,
              r,
              o = e.target;
            do {
              null != o.src && (n = o.src),
                null != o.href && (r = o.href),
                (o = o.parentNode);
            } while (null != o);
            (null == r && null == n) || (t = !0);
          }
          t || e.preventDefault();
        });
      var r = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var t = f();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              l && (l.get || l.set)
                ? Object.defineProperty(n, o, l)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(0)),
        o = n(388),
        l = c(n(8568)),
        u = c(n(8811)),
        a = c(n(8812)),
        i = c(n(8813));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function f() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function s() {
        return (s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function d() {
        var e = "";
        return (
          window.getSelection
            ? (e = window.getSelection().toString())
            : document.selection &&
              "Control" !== document.selection.type &&
              (e = document.selection.createRange().text),
          e
        );
      }
    },
    8257: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = { MenuStyle: !0 };
      t.default = t.MenuStyle = void 0;
      var o = m(n(0)),
        l = b(n(9)),
        u = b(n(130)),
        a = n(8383),
        i = b(n(105)),
        c = n(718),
        f = b(n(275)),
        s = m(n(8672));
      Object.keys(s).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return s[e];
              },
            }));
      });
      var d,
        p,
        v = b(n(8493)),
        y = m(n(8779)),
        h = b(n(7347));
      function b(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function g() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      function m(e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var t = g();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(n, o, l)
              : (n[o] = e[o]);
          }
        return (n.default = e), t && t.set(e, n), n;
      }
      function O() {
        return (O =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function _(e, t, n, r) {
        d ||
          (d =
            ("function" == typeof Symbol &&
              Symbol.for &&
              Symbol.for("react.element")) ||
            60103);
        var o = e && e.defaultProps,
          l = arguments.length - 3;
        if ((t || 0 === l || (t = { children: void 0 }), 1 === l))
          t.children = r;
        else if (l > 1) {
          for (var u = new Array(l), a = 0; a < l; a++) u[a] = arguments[a + 3];
          t.children = u;
        }
        if (t && o) for (var i in o) void 0 === t[i] && (t[i] = o[i]);
        else t || (t = o || {});
        return {
          $$typeof: d,
          type: e,
          key: void 0 === n ? null : "" + n,
          ref: null,
          props: t,
          _owner: null,
        };
      }
      function M(e) {
        return (function e(t) {
          return null == t
            ? []
            : o.Children.toArray(t).flatMap(function (t) {
                var n;
                return null == t || !1 === t
                  ? []
                  : Array.isArray(t)
                  ? e(t)
                  : t.type === o.Fragment
                  ? null !== (n = e(t.props.children)) && void 0 !== n
                    ? n
                    : []
                  : [t];
              });
        })(e).reduce(function (e, t) {
          if (t.type === s.MenuSeparator)
            return e.push({ type: "separator", navigable: !1 }), e;
          if (t.type === s.MenuGroup) {
            var n = M(t.props.children);
            return (
              e.push({
                type: "groupstart",
                length: n.length,
                navigable: !1,
                props: t.props,
              }),
              e.push.apply(e, n),
              e.push({
                type: "groupend",
                length: n.length,
                navigable: !1,
                props: t.props,
              }),
              e
            );
          }
          if (t.type === s.MenuItem)
            return (
              e.push(
                null != t.props.render
                  ? {
                      type: "customitem",
                      key: t.props.id,
                      navigable: !0,
                      render: t.props.render,
                      props: t.props,
                    }
                  : {
                      type: "item",
                      key: t.props.id,
                      navigable: !0,
                      label: t.props.label,
                      children: t.props.children ? M(t.props.children) : void 0,
                      props: t.props,
                    }
              ),
              e
            );
          if (t.type === s.MenuCheckboxItem)
            return (
              e.push({
                type: "checkbox",
                key: t.props.id,
                navigable: !0,
                props: t.props,
              }),
              e
            );
          if (t.type === s.MenuRadioItem)
            return (
              e.push({
                type: "radio",
                key: t.props.id,
                navigable: !0,
                props: t.props,
              }),
              e
            );
          if (t.type === s.MenuControlItem)
            return (
              e.push({
                type: "control",
                key: t.props.id,
                navigable: !0,
                props: t.props,
              }),
              e
            );
          throw new Error(
            "Menu API only allows Items and groups of Items as children. Received " +
              ((null == t ? void 0 : t.type) || t || typeof t) +
              " (" +
              typeof t +
              ") instead"
          );
        }, []);
      }
      function P(e) {
        var t,
          n = e.navId,
          r = e.style,
          s = void 0 === r ? p.FLEXIBLE : r,
          d = e.className,
          b = e.onClose,
          g = e.children,
          m = e.onSelect,
          P = M(g),
          w = (function e(t) {
            return t.reduce(function (t, n) {
              return n.navigable
                ? (t.push({
                    key: n.key,
                    children:
                      "item" === n.type && null != n.children
                        ? e(n.children)
                        : void 0,
                  }),
                  t)
                : t;
            }, []);
          })(P),
          k = o.useRef([]);
        (0, u.default)(k.current, w) || (k.current = w);
        var j =
            null ===
              (t = P.find(function (e) {
                return null != e.key;
              })) || void 0 === t
              ? void 0
              : t.key,
          S = (0, a.useMenuNavigator)({
            navId: n,
            items: k.current,
            initialFocusPath: i.default.keyboardModeEnabled && j ? [j] : [],
            closeMenu: b,
          }),
          C = o.useRef(null);
        return (
          (0, c.useFocusLock)(C),
          _(
            v.default.Provider,
            { value: m },
            void 0,
            o.createElement(
              "div",
              O(
                { className: (0, l.default)(h.default.menu, h.default[s], d) },
                S.getContainerProps(),
                { ref: C, "aria-label": e["aria-label"] }
              ),
              _(
                f.default,
                { className: h.default.scroller },
                void 0,
                (function e(t, n, r, l) {
                  var u = 0,
                    a = [];
                  return t.reduce(function (t, i, c) {
                    var f = a.length > 0 ? a[a.length - 1] : t;
                    switch (i.type) {
                      case "separator":
                        f.push(_(y.Separator, {}, "separator-" + c)), (u = 0);
                        break;
                      case "groupstart":
                        u > 0 &&
                          i.length > 0 &&
                          (f.push(_(y.Separator, {}, "separator-" + c)),
                          (u = 0)),
                          a.push([]);
                        break;
                      case "groupend":
                        a.length > 0 &&
                          t.push(
                            o.createElement(
                              y.Group,
                              O(
                                { key: "group-" + c, contents: a.pop() },
                                i.props
                              )
                            )
                          );
                        break;
                      case "item":
                        var s = i.children,
                          d = [].concat(r, [i.key]),
                          p = n.isFocused(d),
                          v = null != s ? { "aria-haspopup": !0 } : {},
                          h = o.createElement(
                            y.Item,
                            O({ key: i.key }, i.props, {
                              label: i.label,
                              hasSubmenu: null != s,
                              isFocused: p,
                              menuItemProps: O(
                                {},
                                n.getItemProps({ path: d }),
                                {},
                                v
                              ),
                              onClose: l,
                            })
                          );
                        f.push(
                          null != s
                            ? o.createElement(
                                y.SubmenuItem,
                                O({ key: i.key + "-submenu" }, i.props, {
                                  parentItem: h,
                                  isFocused: p,
                                  menuSubmenuProps: n.getSubmenuProps({
                                    path: d,
                                  }),
                                  renderSubmenu: function () {
                                    return e(s, n, d, l);
                                  },
                                })
                              )
                            : h
                        ),
                          u++;
                        break;
                      case "customitem":
                        var b = [].concat(r, [i.key]);
                        f.push(
                          o.createElement(
                            y.CustomItem,
                            O({ key: i.key }, i.props, {
                              isFocused: n.isFocused(b),
                              menuItemProps: n.getItemProps({ path: b }),
                              onClose: l,
                            }),
                            i.render
                          )
                        ),
                          u++;
                        break;
                      case "checkbox":
                        var g = [].concat(r, [i.key]);
                        f.push(
                          o.createElement(
                            y.CheckboxItem,
                            O({ key: i.key }, i.props, {
                              isFocused: n.isFocused(g),
                              menuItemProps: n.getItemProps({
                                path: g,
                                role: "menuitemcheckbox",
                              }),
                            })
                          )
                        ),
                          u++;
                        break;
                      case "radio":
                        var m = [].concat(r, [i.key]);
                        f.push(
                          o.createElement(
                            y.RadioItem,
                            O({ key: i.key }, i.props, {
                              isFocused: n.isFocused(m),
                              menuItemProps: n.getItemProps({
                                path: m,
                                role: "menuitemradio",
                              }),
                            })
                          )
                        ),
                          u++;
                        break;
                      case "control":
                        var M = [].concat(r, [i.key]);
                        f.push(
                          o.createElement(
                            y.ControlItem,
                            O({ key: i.key }, i.props, {
                              isFocused: n.isFocused(M),
                              menuItemProps: n.getItemProps({ path: M }),
                              onClose: l,
                            })
                          )
                        ),
                          u++;
                    }
                    return t;
                  }, []);
                })(P, S, [], b)
              )
            )
          )
        );
      }
      (t.MenuStyle = p),
        (function (e) {
          (e.FIXED = "styleFixed"), (e.FLEXIBLE = "styleFlexible");
        })(p || (t.MenuStyle = p = {})),
        (P.displayName = "Menu");
      var w = P;
      t.default = w;
    },
    8259: function (e, t, n) {
      "use strict";
      var r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MenuItemColor = void 0),
        (t.MenuItemColor = r),
        (function (e) {
          (e.DEFAULT = "colorDefault"),
            (e.BRAND = "colorBrand"),
            (e.DANGER = "colorDanger"),
            (e.PREMIUM = "colorPremium"),
            (e.GREEN = "colorGreen");
        })(r || (t.MenuItemColor = r = {}));
    },
    8342: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = c);
      !(function (e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var t = a();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(n, o, l)
              : (n[o] = e[o]);
          }
        (n.default = e), t && t.set(e, n);
      })(n(0));
      var r,
        o = u(n(9)),
        l = u(n(7386));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      function i(e, t, n, o) {
        r ||
          (r =
            ("function" == typeof Symbol &&
              Symbol.for &&
              Symbol.for("react.element")) ||
            60103);
        var l = e && e.defaultProps,
          u = arguments.length - 3;
        if ((t || 0 === u || (t = { children: void 0 }), 1 === u))
          t.children = o;
        else if (u > 1) {
          for (var a = new Array(u), i = 0; i < u; i++) a[i] = arguments[i + 3];
          t.children = a;
        }
        if (t && l) for (var c in l) void 0 === t[c] && (t[c] = l[c]);
        else t || (t = l || {});
        return {
          $$typeof: r,
          type: e,
          key: void 0 === n ? null : "" + n,
          ref: null,
          props: t,
          _owner: null,
        };
      }
      function c(e) {
        var t,
          n = e.width,
          r = void 0 === n ? 24 : n,
          u = e.height,
          a = void 0 === u ? 24 : u,
          c = e.color,
          f = void 0 === c ? "currentColor" : c,
          s = e.className,
          d = e.foreground,
          p = e.open,
          v = void 0 !== p && p;
        return i(
          "svg",
          {
            className: (0, o.default)(
              l.default.arrow,
              s,
              ((t = {}), (t[l.default.open] = v), t)
            ),
            width: r,
            height: a,
            viewBox: "0 0 24 24",
          },
          void 0,
          i("path", {
            className: d,
            fill: f,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z",
          })
        );
      }
      c.displayName = "DropdownArrow";
    },
    8388: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          return a.default.embedded && null != e && "" !== e
            ? null != e && (0, l.isStickerAssetUrl)(e)
              ? null
              : [
                  d(
                    o.MenuItem,
                    {
                      id: "copy-native-link",
                      label: c.default.Messages.COPY_LINK,
                      action: function () {
                        return i.default.copy(e);
                      },
                    },
                    "copy-native-link"
                  ),
                  d(
                    o.MenuItem,
                    {
                      id: "open-native-link",
                      label: c.default.Messages.OPEN_LINK,
                      action: function (n) {
                        return (0, u.handleClick)(
                          {
                            href: e,
                            trusted: (0, u.isLinkTrusted)(e, t),
                            shouldConfirm: !0,
                          },
                          n
                        );
                      },
                    },
                    "open-native-link"
                  ),
                ]
            : null;
        });
      !(function (e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(n, o, l)
              : (n[o] = e[o]);
          }
        (n.default = e), t && t.set(e, n);
      })(n(0));
      var r,
        o = n(8257),
        l = n(291),
        u = n(723),
        a = f(n(16)),
        i = f(n(43)),
        c = f(n(6));
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function d(e, t, n, o) {
        r ||
          (r =
            ("function" == typeof Symbol &&
              Symbol.for &&
              Symbol.for("react.element")) ||
            60103);
        var l = e && e.defaultProps,
          u = arguments.length - 3;
        if ((t || 0 === u || (t = { children: void 0 }), 1 === u))
          t.children = o;
        else if (u > 1) {
          for (var a = new Array(u), i = 0; i < u; i++) a[i] = arguments[i + 3];
          t.children = a;
        }
        if (t && l) for (var c in l) void 0 === t[c] && (t[c] = l[c]);
        else t || (t = l || {});
        return {
          $$typeof: r,
          type: e,
          key: void 0 === n ? null : "" + n,
          ref: null,
          props: t,
          _owner: null,
        };
      }
    },
    8402: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          return "function" == typeof e ? e(t) : e;
        });
    },
    8477: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return l.default.embedded &&
            null != e &&
            0 !== (null == e ? void 0 : e.length)
            ? [
                c(o.MenuItem, {
                  id: "search-google",
                  label: u.default.Messages.SEARCH_WITH_GOOGLE,
                  action: function () {
                    return window.open(
                      "https://www.google.com/search?q=" +
                        encodeURIComponent(e),
                      "_blank"
                    );
                  },
                }),
              ]
            : null;
        });
      !(function (e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var t = i();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(n, o, l)
              : (n[o] = e[o]);
          }
        (n.default = e), t && t.set(e, n);
      })(n(0));
      var r,
        o = n(8257),
        l = a(n(16)),
        u = a(n(6));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      function c(e, t, n, o) {
        r ||
          (r =
            ("function" == typeof Symbol &&
              Symbol.for &&
              Symbol.for("react.element")) ||
            60103);
        var l = e && e.defaultProps,
          u = arguments.length - 3;
        if ((t || 0 === u || (t = { children: void 0 }), 1 === u))
          t.children = o;
        else if (u > 1) {
          for (var a = new Array(u), i = 0; i < u; i++) a[i] = arguments[i + 3];
          t.children = a;
        }
        if (t && l) for (var c in l) void 0 === t[c] && (t[c] = l[c]);
        else t || (t = l || {});
        return {
          $$typeof: r,
          type: e,
          key: void 0 === n ? null : "" + n,
          ref: null,
          props: t,
          _owner: null,
        };
      }
    },
    8493: function (e, t, n) {
      "use strict";
      function r() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = (function (e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var t = r();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var l in e)
          if (Object.prototype.hasOwnProperty.call(e, l)) {
            var u = o ? Object.getOwnPropertyDescriptor(e, l) : null;
            u && (u.get || u.set)
              ? Object.defineProperty(n, l, u)
              : (n[l] = e[l]);
          }
        (n.default = e), t && t.set(e, n);
        return n;
      })(n(0)).createContext(void 0);
      t.default = o;
    },
    8522: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = l(n(3)),
        o = l(n(2));
      n(1);
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function a(e, t) {
        return (a =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function i() {
        return (i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var c = { expressionSuggestionsEnabled: !0 },
        f = (function (e) {
          var t, n;
          function r() {
            return e.apply(this, arguments) || this;
          }
          (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            a(t, n);
          var o,
            l,
            i,
            f = r.prototype;
          return (
            (f.initialize = function (e) {
              null != e && (c = e);
            }),
            (f.getState = function () {
              return c;
            }),
            (o = r),
            (l = [
              {
                key: "expressionSuggestionsEnabled",
                get: function () {
                  return c.expressionSuggestionsEnabled;
                },
              },
            ]) && u(o.prototype, l),
            i && u(o, i),
            r
          );
        })(r.default.PersistedStore);
      f.persistKey = "ExpressionSuggestionsPersistedStore";
      var s = new f(o.default, {
        EXPRESSION_SUGGESTIONS_TOGGLE: function (e) {
          c = i({}, c, {
            expressionSuggestionsEnabled: !c.expressionSuggestionsEnabled,
          });
        },
      });
      t.default = s;
    },
    8523: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isSupported = c),
        (t.setEnabled = function (e) {
          return null != f
            ? f.then(function (t) {
                t.enabled = e;
              })
            : Promise.resolve();
        }),
        (t.setLearnedWords = function (e) {
          return null != f
            ? f.then(function (t) {
                return t.setLearnedWords(e);
              })
            : Promise.resolve();
        }),
        (t.isMisspelled = function (e, t) {
          void 0 === t && (t = !1);
          return null != f
            ? f.then(function (n) {
                return n.isMisspelled(e, t);
              })
            : Promise.resolve(!1);
        }),
        (t.getCorrections = function (e, t, n) {
          void 0 === t && (t = !1);
          void 0 === n && (n = 5);
          return null != f
            ? f.then(function (r) {
                return r.getCorrectionsForMisspelling(e, t).slice(0, n);
              })
            : Promise.resolve([]);
        }),
        (t.replaceWithCorrection = function (e) {
          return null != f
            ? f.then(function (t) {
                return t.replaceMisspelling(e);
              })
            : Promise.resolve();
        }),
        (t.setAppLocale = function (e) {
          return null != f
            ? f.then(function (t) {
                return t.setAppLocale(e);
              })
            : Promise.resolve();
        }),
        (t.addResultListener = function (e) {
          if (!i()) return;
          (r.default.spellCheck.Spellchecker || r.default.spellCheck).on(
            "spellcheck-result",
            e
          );
        }),
        (t.removeResultListener = function (e) {
          if (!i()) return;
          (
            r.default.spellCheck.Spellchecker || r.default.spellCheck
          ).removeListener("spellcheck-result", e);
        });
      var r = a(n(117)),
        o = n(8807),
        l = n(8809),
        u = a(n(16));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i() {
        var e = null == r.default.spellCheck.setSpellCheckProvider,
          t = null != r.default.spellCheck.Spellchecker;
        return e || t;
      }
      function c() {
        return (
          !!u.default.embedded &&
          (i()
            ? u.default.isDesktop()
            : u.default.isOSX() ||
              (u.default.isWindows() &&
                parseFloat(r.default.os.release) >= 6.2))
        );
      }
      var f = c() ? (i() ? (0, l.install)() : (0, o.installLegacy)()) : null;
    },
    8524: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r,
        o = (r = n(43)) && r.__esModule ? r : { default: r };
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var u = (function () {
        function e(e, t) {
          (this._shouldProcess = !1),
            (this._processing = !1),
            (this._minimumTimeRemaining = 5),
            (this._language = e),
            (this._languageHint = e),
            (this._onChange = t),
            t(e);
        }
        var t,
          n,
          r,
          u = e.prototype;
        return (
          (u.process = function (e) {
            var t = this;
            this._processing ||
              ((this._processing = !0),
              requestIdleCallback(function (n) {
                n.timeRemaining() <= t._minimumTimeRemaining
                  ? t._processEnd()
                  : (e.length > 256 && (e = e.slice(0, 256)),
                    (function (e, t) {
                      return o.default
                        .ensureModule("discord_spellcheck")
                        .then(function () {
                          var n =
                            o.default.requireModule("discord_spellcheck").cld;
                          return new Promise(function (r, o) {
                            n.detect(
                              e,
                              { httpHint: t, encodingHint: "UTF8" },
                              function (e, t) {
                                null != e
                                  ? o(new Error(e.message))
                                  : !t.reliable ||
                                    t.languages[0].percent < 90 ||
                                    t.languages[0].score < 500
                                  ? o(new Error("Not enough reliable text."))
                                  : r(t.languages[0].code);
                              }
                            );
                          });
                        });
                    })(e, t._languageHint).then(
                      function (e) {
                        (t.language = e), t._processEnd(n.didTimeout);
                      },
                      function () {
                        t._processEnd(n.didTimeout);
                      }
                    ));
              }));
          }),
          (u._processEnd = function (e) {
            void 0 === e && (e = !1),
              (this._processing = !1),
              e && this._minimumTimeRemaining++;
          }),
          (t = e),
          (n = [
            {
              key: "language",
              get: function () {
                return this._language;
              },
              set: function (e) {
                this._language !== e &&
                  ((this._language = e), this._onChange(e));
              },
            },
            {
              key: "languageHint",
              set: function (e) {
                this._languageHint = e;
              },
            },
          ]) && l(t.prototype, n),
          r && l(t, r),
          e
        );
      })();
      t.default = u;
    },
    8525: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = {
        aa: "aa-ET",
        af: "af-ZA",
        ak: "ak-GH",
        am: "am-ET",
        an: "an-ES",
        ar: "ar-MA",
        as: "as-IN",
        ay: "ay-PE",
        az: "az-AZ",
        be: "be-BY",
        bg: "bg-BG",
        bi: "bi-TV",
        bn: "bn-BD",
        bo: "bo-CN",
        br: "br-FR",
        bs: "bs-BA",
        ca: "ca-ES",
        ce: "ce-RU",
        cs: "cs-CZ",
        cv: "cv-RU",
        cy: "cy-GB",
        da: "da-DK",
        de: "de-DE",
        dv: "dv-MV",
        dz: "dz-BT",
        el: "el-GR",
        en: "en-US",
        es: "es-ES",
        et: "et-EE",
        eu: "eu-ES",
        fa: "fa-IR",
        ff: "ff-SN",
        fi: "fi-FI",
        fo: "fo-FO",
        fr: "fr-FR",
        fy: "fy-DE",
        ga: "ga-IE",
        gd: "gd-GB",
        gl: "gl-ES",
        gu: "gu-IN",
        gv: "gv-GB",
        ha: "ha-NG",
        he: "he-IL",
        hi: "hi-IN",
        hr: "hr-HR",
        ht: "ht-HT",
        hu: "hu-HU",
        hy: "hy-AM",
        ia: "ia-FR",
        id: "id-ID",
        ig: "ig-NG",
        ik: "ik-CA",
        is: "is-IS",
        it: "it-IT",
        iu: "iu-CA",
        ja: "ja-JP",
        ka: "ka-GE",
        kk: "kk-KZ",
        kl: "kl-GL",
        km: "km-KH",
        kn: "kn-IN",
        ko: "ko-KR",
        ks: "ks-IN",
        ku: "ku-TR",
        kw: "kw-GB",
        ky: "ky-KG",
        lb: "lb-LU",
        lg: "lg-UG",
        li: "li-BE",
        ln: "ln-CD",
        lo: "lo-LA",
        lt: "lt-LT",
        lv: "lv-LV",
        mg: "mg-MG",
        mh: "mh-MH",
        mi: "mi-NZ",
        mk: "mk-MK",
        ml: "ml-IN",
        mn: "mn-MN",
        mr: "mr-IN",
        ms: "ms-MY",
        mt: "mt-MT",
        my: "my-MM",
        nb: "nb-NO",
        ne: "ne-NP",
        nl: "nl-NL",
        nn: "nn-NO",
        nr: "nr-ZA",
        oc: "oc-FR",
        om: "om-KE",
        or: "or-IN",
        os: "os-RU",
        pa: "pa-PK",
        pl: "pl-PL",
        ps: "ps-AF",
        pt: "pt-PT",
        ro: "ro-RO",
        ru: "ru-RU",
        rw: "rw-RW",
        sa: "sa-IN",
        sc: "sc-IT",
        sd: "sd-IN",
        se: "se-NO",
        si: "si-LK",
        sk: "sk-SK",
        sl: "sl-SI",
        so: "so-SO",
        sq: "sq-AL",
        sr: "sr-RS",
        ss: "ss-ZA",
        st: "st-ZA",
        sv: "sv-SE",
        sw: "sw-KE",
        ta: "ta-IN",
        te: "te-IN",
        tg: "tg-TJ",
        th: "th-TH",
        ti: "ti-ER",
        tk: "tk-TM",
        tl: "tl-PH",
        tn: "tn-ZA",
        tr: "tr-TR",
        ts: "ts-ZA",
        tt: "tt-RU",
        ug: "ug-CN",
        uk: "uk-UA",
        ur: "ur-PK",
        uz: "uz-UZ",
        ve: "ve-ZA",
        vi: "vi-VN",
        wa: "wa-BE",
        wo: "wo-SN",
        xh: "xh-ZA",
        yi: "yi-US",
        yo: "yo-NG",
        zh: "zh-CN",
        zu: "zu-ZA",
      };
      t.default = r;
    },
    8567: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = a(n(3)),
        o = a(n(27)),
        l = a(n(2)),
        u = n(8523);
      n(1);
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        return (i =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var c = !0,
        f = new Set();
      function s() {
        o.default.set("SpellcheckStore", { enabled: c, learnedWords: f });
      }
      var d = new ((function (e) {
        var t, n;
        function r() {
          return e.apply(this, arguments) || this;
        }
        (n = e),
          ((t = r).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          i(t, n);
        var l = r.prototype;
        return (
          (l.initialize = function () {
            var e = o.default.get("SpellcheckStore");
            null != e &&
              ((c = e.enabled),
              (f = new Set(e.learnedWords)),
              (0, u.setEnabled)(c),
              (0, u.setLearnedWords)(f));
          }),
          (l.isEnabled = function () {
            return c;
          }),
          r
        );
      })(r.default.Store))(l.default, {
        SPELLCHECK_TOGGLE: function (e) {
          return (c = !c), (0, u.setEnabled)(c), void s();
        },
        SPELLCHECK_LEARN_WORD: function (e) {
          var t = e.word;
          f.add(t.toLocaleLowerCase()), (0, u.setLearnedWords)(f), s();
        },
        I18N_LOAD_SUCCESS: function (e) {
          var t = e.locale;
          (0, u.setAppLocale)(t);
        },
      });
      t.default = d;
    },
    8568: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = h);
      var r,
        o = v(n(0)),
        l = n(388),
        u = v(n(8257)),
        a = d(n(8569)),
        i = d(n(8570)),
        c = d(n(16)),
        f = d(n(43)),
        s = d(n(6));
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function p() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function v(e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var t = p();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(n, o, l)
              : (n[o] = e[o]);
          }
        return (n.default = e), t && t.set(e, n), n;
      }
      function y(e, t, n, o) {
        r ||
          (r =
            ("function" == typeof Symbol &&
              Symbol.for &&
              Symbol.for("react.element")) ||
            60103);
        var l = e && e.defaultProps,
          u = arguments.length - 3;
        if ((t || 0 === u || (t = { children: void 0 }), 1 === u))
          t.children = o;
        else if (u > 1) {
          for (var a = new Array(u), i = 0; i < u; i++) a[i] = arguments[i + 3];
          t.children = a;
        }
        if (t && l) for (var c in l) void 0 === t[c] && (t[c] = l[c]);
        else t || (t = l || {});
        return {
          $$typeof: r,
          type: e,
          key: void 0 === n ? null : "" + n,
          ref: null,
          props: t,
          _owner: null,
        };
      }
      function h(e) {
        var t = e.text,
          n = e.target,
          r = e.onHeightUpdate,
          d = e.showExpressionSuggestionsToggle,
          p = e.onSelect,
          v = o.useCallback(
            function () {
              (0, l.closeContextMenu)(), n instanceof HTMLElement && n.focus();
            },
            [n]
          ),
          h = (0, i.default)({ text: t, target: n, onHeightUpdate: r }),
          b = h[0],
          g = h[1],
          m = (0, a.default)();
        if (!c.default.embedded) return null;
        if (
          !(n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement)
        )
          return null;
        var O =
          "" !== t
            ? [
                y(u.MenuItem, {
                  id: "copy",
                  label: s.default.Messages.COPY,
                  hint: c.default.isOSX() ? "⌘C" : "Ctrl+C",
                  action: function () {
                    return f.default.copy(t);
                  },
                }),
                y(u.MenuItem, {
                  id: "cut",
                  label: s.default.Messages.CUT,
                  hint: c.default.isOSX() ? "⌘X" : "Ctrl+X",
                  action: function () {
                    return setTimeout(function () {
                      return f.default.cut();
                    }, 0);
                  },
                }),
              ]
            : null;
        return y(
          u.default,
          {
            navId: "textarea-context",
            onClose: v,
            "aria-label": s.default.Messages.TEXTAREA_ACTIONS_MENU_LABEL,
            onSelect: p,
          },
          void 0,
          !0 === d && y(u.MenuGroup, {}, void 0, m),
          y(u.MenuGroup, {}, void 0, b),
          y(u.MenuGroup, {}, void 0, g),
          y(
            u.MenuGroup,
            {},
            void 0,
            O,
            y(u.MenuItem, {
              id: "paste",
              label: s.default.Messages.PASTE,
              hint: c.default.isOSX() ? "⌘V" : "Ctrl+V",
              action: function () {
                return setTimeout(function () {
                  return f.default.paste();
                }, 0);
              },
            })
          )
        );
      }
      h.displayName = "NativeTextAreaContextMenu";
    },
    8569: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = v);
      !(function (e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var t = d();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(n, o, l)
              : (n[o] = e[o]);
          }
        (n.default = e), t && t.set(e, n);
      })(n(0));
      var r,
        o = n(3),
        l = n(8713),
        u = s(n(8522)),
        a = n(8257),
        i = s(n(13)),
        c = n(1),
        f = s(n(6));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function d() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function p(e, t, n, o) {
        r ||
          (r =
            ("function" == typeof Symbol &&
              Symbol.for &&
              Symbol.for("react.element")) ||
            60103);
        var l = e && e.defaultProps,
          u = arguments.length - 3;
        if ((t || 0 === u || (t = { children: void 0 }), 1 === u))
          t.children = o;
        else if (u > 1) {
          for (var a = new Array(u), i = 0; i < u; i++) a[i] = arguments[i + 3];
          t.children = a;
        }
        if (t && l) for (var c in l) void 0 === t[c] && (t[c] = l[c]);
        else t || (t = l || {});
        return {
          $$typeof: r,
          type: e,
          key: void 0 === n ? null : "" + n,
          ref: null,
          props: t,
          _owner: null,
        };
      }
      function v() {
        var e = (0, o.useStateFromStores)([u.default], function () {
          return u.default.expressionSuggestionsEnabled;
        });
        return p(a.MenuCheckboxItem, {
          id: "sticker-suggestions",
          label: f.default.Messages.AUTO_SUGGEST_STICKERS,
          checked: e,
          action: function () {
            i.default.track(
              c.AnalyticEvents.STICKER_SUGGESTIONS_ENABLED_TOGGLED,
              {
                enabled: !e,
                location: { object: c.AnalyticsObjects.CONTEXT_MENU },
              }
            ),
              (0, l.toggleExpressionSuggestionsEnabled)();
          },
        });
      }
      v.displayName = "useExpressionSuggestionItems";
    },
    8570: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          var t = e.text,
            n = void 0 === t ? "" : t,
            r = e.target,
            p = (0, l.useStateFromStores)([i.default], function () {
              return i.default.isEnabled();
            }),
            v = o.useRef(h({}, e, { spellcheckEnabled: p }));
          v.current = h({}, e, { spellcheckEnabled: p });
          var b = o.useRef(!1),
            g = o.useState(!1),
            m = g[0],
            O = g[1],
            _ = o.useState([]),
            M = _[0],
            P = _[1],
            w = o.useCallback(function () {
              var e = v.current,
                t = e.spellcheckEnabled,
                n = e.text,
                r = e.onHeightUpdate;
              t &&
                (0, f.isSupported)() &&
                Promise.all([
                  (0, f.isMisspelled)(n, !0),
                  (0, f.getCorrections)(n, !0),
                ]).then(function (e) {
                  var t = e[0],
                    n = e[1];
                  b.current && (O(t), P(n), r());
                });
            }, []),
            k = o.useCallback(
              function () {
                if (
                  r instanceof HTMLInputElement ||
                  r instanceof HTMLTextAreaElement
                ) {
                  var e = r.selectionStart,
                    t = r.selectionEnd,
                    n = r.value;
                  (r.value = ""),
                    (r.value = n),
                    "email" !== r.type &&
                      ((r.selectionStart = e), (r.selectionEnd = t));
                }
              },
              [r]
            );
          if (
            (o.useEffect(
              function () {
                return (
                  (0, f.addResultListener)(w),
                  (b.current = !0),
                  function () {
                    (b.current = !1), (0, f.removeResultListener)(w);
                  }
                );
              },
              [w]
            ),
            o.useEffect(
              function () {
                w();
              },
              [n, p, w]
            ),
            !(0, f.isSupported)())
          )
            return [null, null];
          var j = M.map(function (e, t) {
              return y(a.MenuItem, {
                id: "correction-" + t,
                label: e,
                action: function () {
                  (0, f.replaceWithCorrection)(e), r.focus();
                },
              });
            }),
            S = o.createElement(
              o.Fragment,
              null,
              m
                ? y(a.MenuItem, {
                    id: "add-to-dictionary",
                    label: d.default.Messages.ADD_TO_DICTIONARY,
                    action: function () {
                      (0, u.learnWord)(n), k();
                    },
                  })
                : null,
              y(a.MenuCheckboxItem, {
                id: "spellcheck",
                label: d.default.Messages.SPELLCHECK,
                checked: p,
                action: function () {
                  (0, u.toggleSpellcheck)(), k();
                },
              }),
              p
                ? y(a.MenuItem, {
                    id: "languages",
                    label: d.default.Messages.LANGUAGES,
                    action: function () {
                      return window.open(
                        c.default.getArticleURL(s.HelpdeskArticles.SPELLCHECK)
                      );
                    },
                  })
                : null
            );
          return [j, S];
        });
      var r,
        o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var t = v();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              l && (l.get || l.set)
                ? Object.defineProperty(n, o, l)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(0)),
        l = n(3),
        u = n(8810),
        a = n(8257),
        i = p(n(8567)),
        c = p(n(96)),
        f = n(8523),
        s = n(1),
        d = p(n(6));
      function p(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function v() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (v = function () {
            return e;
          }),
          e
        );
      }
      function y(e, t, n, o) {
        r ||
          (r =
            ("function" == typeof Symbol &&
              Symbol.for &&
              Symbol.for("react.element")) ||
            60103);
        var l = e && e.defaultProps,
          u = arguments.length - 3;
        if ((t || 0 === u || (t = { children: void 0 }), 1 === u))
          t.children = o;
        else if (u > 1) {
          for (var a = new Array(u), i = 0; i < u; i++) a[i] = arguments[i + 3];
          t.children = a;
        }
        if (t && l) for (var c in l) void 0 === t[c] && (t[c] = l[c]);
        else t || (t = l || {});
        return {
          $$typeof: r,
          type: e,
          key: void 0 === n ? null : "" + n,
          ref: null,
          props: t,
          _owner: null,
        };
      }
      function h() {
        return (h =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
    },
    8625: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          if (
            !a.default.embedded ||
            null == e ||
            ((t = e),
            (n = new URL(t)),
            (r = g(t)),
            ("https://media.discordapp.net" !== n.origin &&
              "https://cdn.discordapp.com" !== n.origin) ||
              t.startsWith("https://media.discordapp.net/stickers") ||
              null == r ||
              !h.has(r))
          )
            return null;
          var t, n, r;
          var o = (function (e) {
              var t = new URL(e);
              return "https://cdn.discordapp.com" === t.origin
                ? e
                : "https://cdn.discordapp.com" + t.pathname;
            })(e),
            i = (function () {
              var e = y(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0), (e.next = 3), c.default.saveImage(o)
                            );
                          case 3:
                            e.next = 8;
                            break;
                          case 5:
                            (e.prev = 5),
                              (e.t0 = e.catch(0)),
                              O(f.default.Messages.ERROR_SAVING_IMAGE, e.t0);
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 5]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            s = (function () {
              var e = y(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0), (e.next = 3), c.default.copyImage(o)
                            );
                          case 3:
                            e.next = 8;
                            break;
                          case 5:
                            (e.prev = 5),
                              (e.t0 = e.catch(0)),
                              O(f.default.Messages.ERROR_COPYING_IMAGE, e.t0);
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 5]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return a.default.isLinux() && (0, u.getElectronVersion)() < 7
            ? null
            : [
                c.default.canCopyImage() && m(e)
                  ? p(
                      l.MenuItem,
                      {
                        id: "copy-image",
                        label: f.default.Messages.COPY_IMAGE_MENU_ITEM,
                        action: s,
                      },
                      "copy-image"
                    )
                  : null,
                p(
                  l.MenuItem,
                  {
                    id: "save-image",
                    label: f.default.Messages.SAVE_IMAGE_MENU_ITEM,
                    action: i,
                  },
                  "save-image"
                ),
              ];
        });
      !(function (e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var t = d();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(n, o, l)
              : (n[o] = e[o]);
          }
        (n.default = e), t && t.set(e, n);
      })(n(0));
      var r,
        o = s(n(157)),
        l = n(8257),
        u = n(1180),
        a = s(n(16)),
        i = s(n(166)),
        c = s(n(43)),
        f = s(n(6));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function d() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function p(e, t, n, o) {
        r ||
          (r =
            ("function" == typeof Symbol &&
              Symbol.for &&
              Symbol.for("react.element")) ||
            60103);
        var l = e && e.defaultProps,
          u = arguments.length - 3;
        if ((t || 0 === u || (t = { children: void 0 }), 1 === u))
          t.children = o;
        else if (u > 1) {
          for (var a = new Array(u), i = 0; i < u; i++) a[i] = arguments[i + 3];
          t.children = a;
        }
        if (t && l) for (var c in l) void 0 === t[c] && (t[c] = l[c]);
        else t || (t = l || {});
        return {
          $$typeof: r,
          type: e,
          key: void 0 === n ? null : "" + n,
          ref: null,
          props: t,
          _owner: null,
        };
      }
      function v(e, t, n, r, o, l, u) {
        try {
          var a = e[l](u),
            i = a.value;
        } catch (e) {
          return void n(e);
        }
        a.done ? t(i) : Promise.resolve(i).then(r, o);
      }
      function y(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var l = e.apply(t, n);
            function u(e) {
              v(l, r, o, u, a, "next", e);
            }
            function a(e) {
              v(l, r, o, u, a, "throw", e);
            }
            u(void 0);
          });
        };
      }
      var h = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
        b = new Set(["jpg", "jpeg", "png"]),
        g = function (e) {
          var t;
          return null === (t = new URL(e).pathname.split(".").pop()) ||
            void 0 === t
            ? void 0
            : t.toLowerCase();
        };
      function m(e) {
        var t = g(e);
        return null != t && b.has(t);
      }
      function O(e, t) {
        o.default.show({ title: f.default.Messages.ERROR, body: e }),
          i.default.captureException(t);
      }
    },
    8672: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MenuSeparator = function () {
          return null;
        }),
        (t.MenuGroup = function (e) {
          return null;
        }),
        (t.MenuItem = function (e) {
          return null;
        }),
        (t.MenuCheckboxItem = function (e) {
          return null;
        }),
        (t.MenuRadioItem = function (e) {
          return null;
        }),
        (t.MenuControlItem = function (e) {
          return null;
        });
    },
    8713: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.toggleExpressionSuggestionsEnabled = void 0);
      var r,
        o = (r = n(2)) && r.__esModule ? r : { default: r },
        l = n(1);
      t.toggleExpressionSuggestionsEnabled = function () {
        o.default.dispatch({
          type: l.ActionTypes.EXPRESSION_SUGGESTIONS_TOGGLE,
        });
      };
    },
    8779: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "CheckboxItem", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, "MenuCheckboxItemProps", {
          enumerable: !0,
          get: function () {
            return o.MenuCheckboxItemProps;
          },
        }),
        Object.defineProperty(t, "ControlItem", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(t, "MenuControlItemProps", {
          enumerable: !0,
          get: function () {
            return l.MenuControlItemProps;
          },
        }),
        Object.defineProperty(t, "CustomItem", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, "MenuCustomItemProps", {
          enumerable: !0,
          get: function () {
            return u.MenuCustomItemProps;
          },
        }),
        Object.defineProperty(t, "MenuCustomItemRenderProps", {
          enumerable: !0,
          get: function () {
            return u.MenuCustomItemRenderProps;
          },
        }),
        Object.defineProperty(t, "Group", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(t, "MenuGroupProps", {
          enumerable: !0,
          get: function () {
            return a.MenuGroupProps;
          },
        }),
        Object.defineProperty(t, "Item", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, "MenuItemProps", {
          enumerable: !0,
          get: function () {
            return i.MenuItemProps;
          },
        }),
        Object.defineProperty(t, "RadioItem", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(t, "MenuRadioItemProps", {
          enumerable: !0,
          get: function () {
            return c.MenuRadioItemProps;
          },
        }),
        Object.defineProperty(t, "Separator", {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }),
        Object.defineProperty(t, "SubmenuItem", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(t, "MenuSubmenuItemProps", {
          enumerable: !0,
          get: function () {
            return s.MenuSubmenuItemProps;
          },
        });
      var r,
        o = p(n(8780)),
        l = p(n(8783)),
        u = p(n(8784)),
        a = p(n(8785)),
        i = p(n(8786)),
        c = p(n(8787)),
        f = (r = n(8788)) && r.__esModule ? r : { default: r },
        s = p(n(8789));
      function d() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function p(e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var t = d();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(n, o, l)
              : (n[o] = e[o]);
          }
        return (n.default = e), t && t.set(e, n), n;
      }
    },
    8780: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = h);
      var r,
        o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var t = p();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              l && (l.get || l.set)
                ? Object.defineProperty(n, o, l)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(0)),
        l = d(n(9)),
        u = d(n(61)),
        a = d(n(8781)),
        i = d(n(8782)),
        c = d(n(8402)),
        f = n(8259),
        s = d(n(7347));
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function p() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function v() {
        return (v =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function y(e, t, n, o) {
        r ||
          (r =
            ("function" == typeof Symbol &&
              Symbol.for &&
              Symbol.for("react.element")) ||
            60103);
        var l = e && e.defaultProps,
          u = arguments.length - 3;
        if ((t || 0 === u || (t = { children: void 0 }), 1 === u))
          t.children = o;
        else if (u > 1) {
          for (var a = new Array(u), i = 0; i < u; i++) a[i] = arguments[i + 3];
          t.children = a;
        }
        if (t && l) for (var c in l) void 0 === t[c] && (t[c] = l[c]);
        else t || (t = l || {});
        return {
          $$typeof: r,
          type: e,
          key: void 0 === n ? null : "" + n,
          ref: null,
          props: t,
          _owner: null,
        };
      }
      function h(e) {
        var t,
          n = e.color,
          r = void 0 === n ? f.MenuItemColor.DEFAULT : n,
          d = e.label,
          p = e.checked,
          h = e.subtext,
          b = e.disabled,
          g = e.isFocused,
          m = e.menuItemProps,
          O = e.action;
        return o.createElement(
          u.default,
          v(
            {
              className: (0, l.default)(
                s.default.item,
                s.default.labelContainer,
                s.default[r],
                ((t = {}),
                (t[s.default.disabled] = b),
                (t[s.default.focused] = g),
                t)
              ),
              onClick: b ? void 0 : O,
            },
            m,
            { "aria-checked": p, "aria-disabled": b }
          ),
          y(
            "div",
            { className: s.default.label },
            void 0,
            (0, c.default)(d, e),
            null != h && y("div", { className: s.default.subtext }, void 0, h)
          ),
          y(
            "div",
            { className: s.default.iconContainer },
            void 0,
            p
              ? y(i.default, {
                  className: s.default.icon,
                  background: s.default.checkbox,
                  foreground: s.default.check,
                })
              : y(a.default, {
                  className: s.default.icon,
                  foreground: s.default.checkboxEmpty,
                })
          )
        );
      }
      h.displayName = "MenuCheckboxItem";
    },
    8781: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = f);
      var r,
        o,
        l = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var t = a();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              l && (l.get || l.set)
                ? Object.defineProperty(n, o, l)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(0)),
        u = (r = n(22)) && r.__esModule ? r : { default: r };
      function a() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      function i() {
        return (i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function c(e, t, n, r) {
        o ||
          (o =
            ("function" == typeof Symbol &&
              Symbol.for &&
              Symbol.for("react.element")) ||
            60103);
        var l = e && e.defaultProps,
          u = arguments.length - 3;
        if ((t || 0 === u || (t = { children: void 0 }), 1 === u))
          t.children = r;
        else if (u > 1) {
          for (var a = new Array(u), i = 0; i < u; i++) a[i] = arguments[i + 3];
          t.children = a;
        }
        if (t && l) for (var c in l) void 0 === t[c] && (t[c] = l[c]);
        else t || (t = l || {});
        return {
          $$typeof: o,
          type: e,
          key: void 0 === n ? null : "" + n,
          ref: null,
          props: t,
          _owner: null,
        };
      }
      function f(e) {
        var t = e.width,
          n = void 0 === t ? 24 : t,
          r = e.height,
          o = void 0 === r ? 24 : r,
          a = e.color,
          f = void 0 === a ? "currentColor" : a,
          s = e.className,
          d = e.foreground,
          p = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, ["width", "height", "color", "className", "foreground"]);
        return l.createElement(
          "svg",
          i({}, (0, u.default)(p), {
            className: s,
            width: n,
            height: o,
            viewBox: "0 0 24 24",
          }),
          c("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18.625 3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V5.375C21.0057 4.08803 19.9197 3 18.625 3ZM19 19V5H4.99999V19H19Z",
            className: d,
            fill: f,
          })
        );
      }
      f.displayName = "Checkbox";
    },
    8782: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = f);
      var r,
        o,
        l = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var t = a();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              l && (l.get || l.set)
                ? Object.defineProperty(n, o, l)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(0)),
        u = (r = n(22)) && r.__esModule ? r : { default: r };
      function a() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      function i() {
        return (i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function c(e, t, n, r) {
        o ||
          (o =
            ("function" == typeof Symbol &&
              Symbol.for &&
              Symbol.for("react.element")) ||
            60103);
        var l = e && e.defaultProps,
          u = arguments.length - 3;
        if ((t || 0 === u || (t = { children: void 0 }), 1 === u))
          t.children = r;
        else if (u > 1) {
          for (var a = new Array(u), i = 0; i < u; i++) a[i] = arguments[i + 3];
          t.children = a;
        }
        if (t && l) for (var c in l) void 0 === t[c] && (t[c] = l[c]);
        else t || (t = l || {});
        return {
          $$typeof: o,
          type: e,
          key: void 0 === n ? null : "" + n,
          ref: null,
          props: t,
          _owner: null,
        };
      }
      function f(e) {
        var t = e.width,
          n = void 0 === t ? 24 : t,
          r = e.height,
          o = void 0 === r ? 24 : r,
          a = e.color,
          f = void 0 === a ? "currentColor" : a,
          s = e.className,
          d = e.background,
          p = e.foreground,
          v = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, [
            "width",
            "height",
            "color",
            "className",
            "background",
            "foreground",
          ]);
        return l.createElement(
          "svg",
          i({}, (0, u.default)(v), {
            className: s,
            width: n,
            height: o,
            viewBox: "0 0 24 24",
          }),
          c("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M5.37499 3H18.625C19.9197 3 21.0056 4.08803 21 5.375V18.625C21 19.936 19.9359 21 18.625 21H5.37499C4.06518 21 3 19.936 3 18.625V5.375C3 4.06519 4.06518 3 5.37499 3Z",
            className: d,
            fill: f,
          }),
          c("path", {
            d: "M9.58473 14.8636L6.04944 11.4051L4.50003 12.9978L9.58473 18L19.5 8.26174L17.9656 6.64795L9.58473 14.8636Z",
            className: p,
            fill: f,
          })
        );
      }
      f.displayName = "CheckboxChecked";
    },
    8783: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = d);
      var r,
        o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var t = c();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              l && (l.get || l.set)
                ? Object.defineProperty(n, o, l)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(0)),
        l = i(n(9)),
        u = n(8259),
        a = i(n(7347));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        return (f =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function s(e, t, n, o) {
        r ||
          (r =
            ("function" == typeof Symbol &&
              Symbol.for &&
              Symbol.for("react.element")) ||
            60103);
        var l = e && e.defaultProps,
          u = arguments.length - 3;
        if ((t || 0 === u || (t = { children: void 0 }), 1 === u))
          t.children = o;
        else if (u > 1) {
          for (var a = new Array(u), i = 0; i < u; i++) a[i] = arguments[i + 3];
          t.children = a;
        }
        if (t && l) for (var c in l) void 0 === t[c] && (t[c] = l[c]);
        else t || (t = l || {});
        return {
          $$typeof: r,
          type: e,
          key: void 0 === n ? null : "" + n,
          ref: null,
          props: t,
          _owner: null,
        };
      }
      function d(e) {
        var t,
          n = e.color,
          r = void 0 === n ? u.MenuItemColor.DEFAULT : n,
          i = e.label,
          c = e.control,
          d = e.disabled,
          p = e.isFocused,
          v = e.showDefaultFocus,
          y = void 0 !== v && v,
          h = e.menuItemProps,
          b = e.onClose,
          g = o.useRef(null);
        o.useLayoutEffect(
          function () {
            var e, t, n;
            p
              ? null === (e = g.current) || void 0 === e || e.focus()
              : null === (t = g.current) ||
                void 0 === t ||
                null === (n = t.blur) ||
                void 0 === n ||
                n.call(t);
          },
          [p]
        );
        var m = o.useCallback(
            function () {
              var e, t;
              (null === (e = g.current) ||
              void 0 === e ||
              null === (t = e.activate) ||
              void 0 === t
                ? void 0
                : t.call(e)) && b();
            },
            [b]
          ),
          O = c({ onClose: b, disabled: d, isFocused: p }, g);
        return o.createElement(
          "div",
          f(
            {
              onClick: m,
              className: (0, l.default)(
                a.default.item,
                a.default[r],
                ((t = {}),
                (t[a.default.disabled] = d),
                (t[a.default.focused] = y && p),
                (t[a.default.hideInteraction] = !y),
                t)
              ),
              "aria-disabled": d,
            },
            h
          ),
          null != i
            ? s(
                "div",
                { className: a.default.labelContainer },
                void 0,
                s("div", { className: a.default.label }, void 0, i)
              )
            : null,
          O
        );
      }
      d.displayName = "MenuControlItem";
    },
    8784: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = s);
      var r = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var t = c();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              l && (l.get || l.set)
                ? Object.defineProperty(n, o, l)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(0)),
        o = i(n(9)),
        l = i(n(61)),
        u = n(8259),
        a = i(n(7347));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        return (f =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function s(e) {
        var t,
          n = e.children,
          i = e.color,
          c = void 0 === i ? u.MenuItemColor.DEFAULT : i,
          s = e.isFocused,
          d = void 0 !== s && s,
          p = e.disabled,
          v = void 0 !== p && p,
          y = e.keepItemStyles,
          h = void 0 !== y && y,
          b = e.menuItemProps,
          g = e.action,
          m = e.onClose,
          O = r.useCallback(
            function (e) {
              if (null == g) return !1;
              m(),
                e.persist(),
                requestAnimationFrame(function () {
                  return g(e);
                });
            },
            [g, m]
          ),
          _ = h
            ? (0, o.default)(
                a.default.item,
                a.default[c],
                (((t = {})[a.default.focused] = d), t)
              )
            : a.default.customItem;
        return r.createElement(
          l.default,
          f({ className: _, onClick: v ? void 0 : O, "aria-disabled": v }, b),
          n({ color: c, disabled: v, isFocused: d })
        );
      }
      s.displayName = "MenuCustomItem";
    },
    8785: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = f);
      !(function (e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var t = i();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(n, o, l)
              : (n[o] = e[o]);
          }
        (n.default = e), t && t.set(e, n);
      })(n(0));
      var r,
        o = a(n(9)),
        l = n(8259),
        u = a(n(7347));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      function c(e, t, n, o) {
        r ||
          (r =
            ("function" == typeof Symbol &&
              Symbol.for &&
              Symbol.for("react.element")) ||
            60103);
        var l = e && e.defaultProps,
          u = arguments.length - 3;
        if ((t || 0 === u || (t = { children: void 0 }), 1 === u))
          t.children = o;
        else if (u > 1) {
          for (var a = new Array(u), i = 0; i < u; i++) a[i] = arguments[i + 3];
          t.children = a;
        }
        if (t && l) for (var c in l) void 0 === t[c] && (t[c] = l[c]);
        else t || (t = l || {});
        return {
          $$typeof: r,
          type: e,
          key: void 0 === n ? null : "" + n,
          ref: null,
          props: t,
          _owner: null,
        };
      }
      function f(e) {
        var t = e.contents,
          n = e.label,
          r = e.className,
          a = e.color,
          i = void 0 === a ? l.MenuItemColor.DEFAULT : a;
        return 0 === t.length
          ? null
          : c(
              "div",
              { "aria-label": n, role: "group", className: r },
              void 0,
              null != n
                ? c(
                    "div",
                    {
                      className: (0, o.default)(
                        u.default.groupLabel,
                        u.default[i]
                      ),
                    },
                    void 0,
                    n
                  )
                : null,
              t
            );
      }
      f.displayName = "MenuGroup";
    },
    8786: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = h);
      var r,
        o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var t = p();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              l && (l.get || l.set)
                ? Object.defineProperty(n, o, l)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(0)),
        l = d(n(9)),
        u = d(n(61)),
        a = d(n(8342)),
        i = d(n(8402)),
        c = n(8259),
        f = d(n(8493)),
        s = d(n(7347));
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function p() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function v() {
        return (v =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function y(e, t, n, o) {
        r ||
          (r =
            ("function" == typeof Symbol &&
              Symbol.for &&
              Symbol.for("react.element")) ||
            60103);
        var l = e && e.defaultProps,
          u = arguments.length - 3;
        if ((t || 0 === u || (t = { children: void 0 }), 1 === u))
          t.children = o;
        else if (u > 1) {
          for (var a = new Array(u), i = 0; i < u; i++) a[i] = arguments[i + 3];
          t.children = a;
        }
        if (t && l) for (var c in l) void 0 === t[c] && (t[c] = l[c]);
        else t || (t = l || {});
        return {
          $$typeof: r,
          type: e,
          key: void 0 === n ? null : "" + n,
          ref: null,
          props: t,
          _owner: null,
        };
      }
      function h(e) {
        var t,
          n = e.color,
          r = void 0 === n ? c.MenuItemColor.DEFAULT : n,
          d = e.label,
          p = e.icon,
          h = e.imageUrl,
          b = e.hint,
          g = e.subtext,
          m = e.hasSubmenu,
          O = e.disabled,
          _ = e.isFocused,
          M = e.menuItemProps,
          P = e.action,
          w = e.onClose,
          k = o.useContext(f.default),
          j = o.useCallback(
            function (e) {
              if (null == P) return !1;
              w(),
                e.persist(),
                null == k || k(),
                requestAnimationFrame(function () {
                  return P(e);
                });
            },
            [P, w, k]
          );
        return o.createElement(
          u.default,
          v(
            {
              className: (0, l.default)(
                s.default.item,
                s.default.labelContainer,
                s.default[r],
                ((t = {}),
                (t[s.default.disabled] = O),
                (t[s.default.focused] = _),
                t)
              ),
              onClick: O ? void 0 : j,
              "aria-disabled": O,
            },
            M
          ),
          y(
            "div",
            { className: s.default.label },
            void 0,
            (0, i.default)(d, e),
            null != g && y("div", { className: s.default.subtext }, void 0, g)
          ),
          null != b &&
            y(
              "div",
              { className: s.default.hintContainer },
              void 0,
              (0, i.default)(b, e)
            ),
          null != p &&
            y(
              "div",
              { className: s.default.iconContainer },
              void 0,
              y(p, { className: s.default.icon })
            ),
          null != h &&
            y(
              "div",
              { className: s.default.imageContainer },
              void 0,
              y("img", {
                className: s.default.image,
                src: (0, i.default)(h, e),
                alt: "",
              })
            ),
          m &&
            y(
              "div",
              { className: s.default.iconContainer },
              void 0,
              y(a.default, { className: s.default.caret })
            )
        );
      }
      h.displayName = "MenuItem";
    },
    8787: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = h);
      var r,
        o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var t = p();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              l && (l.get || l.set)
                ? Object.defineProperty(n, o, l)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(0)),
        l = d(n(9)),
        u = d(n(61)),
        a = d(n(749)),
        i = d(n(750)),
        c = d(n(8402)),
        f = n(8259),
        s = d(n(7347));
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function p() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function v() {
        return (v =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function y(e, t, n, o) {
        r ||
          (r =
            ("function" == typeof Symbol &&
              Symbol.for &&
              Symbol.for("react.element")) ||
            60103);
        var l = e && e.defaultProps,
          u = arguments.length - 3;
        if ((t || 0 === u || (t = { children: void 0 }), 1 === u))
          t.children = o;
        else if (u > 1) {
          for (var a = new Array(u), i = 0; i < u; i++) a[i] = arguments[i + 3];
          t.children = a;
        }
        if (t && l) for (var c in l) void 0 === t[c] && (t[c] = l[c]);
        else t || (t = l || {});
        return {
          $$typeof: r,
          type: e,
          key: void 0 === n ? null : "" + n,
          ref: null,
          props: t,
          _owner: null,
        };
      }
      function h(e) {
        var t,
          n = e.color,
          r = void 0 === n ? f.MenuItemColor.DEFAULT : n,
          d = e.label,
          p = e.checked,
          h = e.subtext,
          b = e.disabled,
          g = e.isFocused,
          m = e.menuItemProps,
          O = e.action;
        return o.createElement(
          u.default,
          v(
            {
              className: (0, l.default)(
                s.default.item,
                s.default.labelContainer,
                s.default[r],
                ((t = {}),
                (t[s.default.disabled] = b),
                (t[s.default.focused] = g),
                t)
              ),
              onClick: b ? void 0 : O,
            },
            m,
            { "aria-checked": p, "aria-disabled": b }
          ),
          y(
            "div",
            { className: s.default.label },
            void 0,
            (0, c.default)(d, e),
            null != h && y("div", { className: s.default.subtext }, void 0, h)
          ),
          y(
            "div",
            { className: s.default.iconContainer },
            void 0,
            p
              ? y(i.default, {
                  className: s.default.icon,
                  background: s.default.radio,
                  foreground: s.default.radioSelection,
                })
              : y(a.default, {
                  className: s.default.icon,
                  foreground: s.default.radio,
                })
          )
        );
      }
      h.displayName = "MenuRadioItem";
    },
    8788: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i);
      !(function (e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var t = u();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(n, o, l)
              : (n[o] = e[o]);
          }
        (n.default = e), t && t.set(e, n);
      })(n(0));
      var r,
        o,
        l = (r = n(7347)) && r.__esModule ? r : { default: r };
      function u() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function a(e, t, n, r) {
        o ||
          (o =
            ("function" == typeof Symbol &&
              Symbol.for &&
              Symbol.for("react.element")) ||
            60103);
        var l = e && e.defaultProps,
          u = arguments.length - 3;
        if ((t || 0 === u || (t = { children: void 0 }), 1 === u))
          t.children = r;
        else if (u > 1) {
          for (var a = new Array(u), i = 0; i < u; i++) a[i] = arguments[i + 3];
          t.children = a;
        }
        if (t && l) for (var c in l) void 0 === t[c] && (t[c] = l[c]);
        else t || (t = l || {});
        return {
          $$typeof: o,
          type: e,
          key: void 0 === n ? null : "" + n,
          ref: null,
          props: t,
          _owner: null,
        };
      }
      function i() {
        return a("div", { role: "separator", className: l.default.separator });
      }
      i.displayName = "MenuSeparator";
    },
    8789: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = p);
      var r,
        o = f(n(0)),
        l = f(n(253)),
        u = i(n(275)),
        a = i(n(7347));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function f(e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var t = c();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(n, o, l)
              : (n[o] = e[o]);
          }
        return (n.default = e), t && t.set(e, n), n;
      }
      function s() {
        return (s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function d(e, t, n, o) {
        r ||
          (r =
            ("function" == typeof Symbol &&
              Symbol.for &&
              Symbol.for("react.element")) ||
            60103);
        var l = e && e.defaultProps,
          u = arguments.length - 3;
        if ((t || 0 === u || (t = { children: void 0 }), 1 === u))
          t.children = o;
        else if (u > 1) {
          for (var a = new Array(u), i = 0; i < u; i++) a[i] = arguments[i + 3];
          t.children = a;
        }
        if (t && l) for (var c in l) void 0 === t[c] && (t[c] = l[c]);
        else t || (t = l || {});
        return {
          $$typeof: r,
          type: e,
          key: void 0 === n ? null : "" + n,
          ref: null,
          props: t,
          _owner: null,
        };
      }
      function p(e) {
        var t = e.parentItem,
          n = e.isFocused,
          r = e.menuSubmenuProps,
          i = e.renderSubmenu,
          c = o.useRef(null),
          f = o.useRef(null);
        return (
          o.useLayoutEffect(
            function () {
              var e;
              n && (null === (e = f.current) || void 0 === e || e.focus());
            },
            [n]
          ),
          d(
            "div",
            { className: a.default.submenuContainer },
            void 0,
            o.createElement("div", { ref: c }),
            t,
            n
              ? d(
                  l.default,
                  {
                    reference: c,
                    autoInvert: !0,
                    nudgeAlignIntoViewport: !0,
                    fixed: !0,
                    spacing: 4,
                    position: l.Positions.RIGHT,
                    align: l.Align.TOP,
                  },
                  void 0,
                  function () {
                    return d(
                      "div",
                      { className: a.default.submenuPaddingContainer },
                      void 0,
                      o.createElement(
                        "div",
                        s({ className: a.default.submenu }, r, { ref: f }),
                        d(
                          u.default,
                          { className: a.default.scroller },
                          void 0,
                          i()
                        )
                      )
                    );
                  }
                )
              : null
          )
        );
      }
      p.displayName = "MenuSubmenuItem";
    },
    8807: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.installLegacy = function () {
          return c.default.ensureModule("discord_spellcheck").then(function () {
            var e = c.default.requireModule("discord_spellcheck"),
              t = e.getLegacySpellchecker
                ? e.getLegacySpellchecker()
                : e.Spellchecker,
              n = t instanceof Function ? new t() : t,
              r = new b(n);
            return (
              (function (e) {
                null != document.body &&
                  document.body.addEventListener(
                    "input",
                    function (t) {
                      var n = (function (e) {
                        if (null == e) return null;
                        if (
                          e instanceof HTMLInputElement ||
                          e instanceof HTMLTextAreaElement
                        )
                          return e.value;
                        if (
                          e instanceof HTMLElement &&
                          e.hasAttribute("contenteditable")
                        )
                          return e.textContent;
                      })(t.target);
                      null != n && e.detectLocale(n);
                    },
                    !0
                  );
              })(r),
              r
            );
          });
        }),
        (t.LegacySpellchecker = void 0);
      var r = n(8712),
        o = p(n(401)),
        l = p(n(117)),
        u = p(n(26)),
        a = n(48),
        i = p(n(16)),
        c = p(n(43)),
        f = p(n(8524)),
        s = p(n(8808)),
        d = p(n(8525));
      function p(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function v(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var y = new u.default("Spellchecker");
      function h(e) {
        e = d.default[e] || e;
        var t = (0, r.parse)(e.replace(/[_-]/g, "-"));
        if (
          null != t &&
          null != t.langtag.language &&
          null != t.langtag.region
        ) {
          var n = t.langtag,
            o = n.language,
            l = n.region;
          return o.language.toLowerCase() + "-" + l.toUpperCase();
        }
        y.error(e + " is not a valid locale.");
      }
      var b = (function () {
        function e(e) {
          var t = this;
          (this._isMisspelledCache = new o.default({ max: 512, maxAge: 4e3 })),
            (this._localeAvailable = !1),
            (this._enabled = !0),
            (this._learnedWords = new Set()),
            (this._spellchecker = e);
          var n = this.getAvailableLocales(),
            r = this.getAvailableLanguages(n);
          this._languageDetector = new f.default(n[0].split("-")[0], function (
            e
          ) {
            var n = r[e] || d.default[e];
            null != n && t.setLocale(n);
          });
        }
        var t,
          n,
          r,
          u = e.prototype;
        return (
          (u.reset = function () {
            var e = this;
            null != this._locale &&
              (this._isMisspelledCache.reset(),
              l.default.spellCheck.setSpellCheckProvider(this._locale, !0, {
                spellCheck: function (t) {
                  return !e.isMisspelled(t);
                },
              }));
          }),
          (u.setLearnedWords = function (e) {
            (this._learnedWords = e), this.reset();
          }),
          (u.setLocale = function (e) {
            e !== this._locale &&
              ((this._locale = e),
              (this._localeAvailable = this._spellchecker.setDictionary(e)),
              y.info(
                "Switching to " + e,
                this._localeAvailable ? "(available)" : "(unavailable)"
              ),
              this.reset());
          }),
          (u.detectLocale = function (e) {
            this.enabled && this._languageDetector.process(e);
          }),
          (u.getAvailableLocales = function () {
            var e = c.default.requireModule("discord_spellcheck"),
              t = e.getKeyboardLayout
                ? e.getKeyboardLayout()
                : e.keyboardLayout;
            return (
              i.default.isOSX()
                ? this._spellchecker.getAvailableDictionaries()
                : t.getInstalledKeyboardLanguages()
            )
              .map(h)
              .filter(a.isNotNullish);
          }),
          (u.getAvailableLanguages = function (e) {
            e = e || this.getAvailableLocales();
            var t = {};
            return (
              e.forEach(function (e) {
                var n = e.split("-")[0];
                t[n] = t[n] || e;
              }),
              t
            );
          }),
          (u.isMisspelled = function (e, t) {
            void 0 === t && (t = !1);
            var n = this._isMisspelledCache.get(e);
            return null != n
              ? n
              : !t &&
                  ((n = this._isMisspelled(e)),
                  this._isMisspelledCache.set(e, n),
                  n);
          }),
          (u._isMisspelled = function (e) {
            if (!this._enabled || !this._localeAvailable) return !1;
            if (1 === e.length) return !1;
            var t = e.toLocaleLowerCase();
            return (
              !this._learnedWords.has(t) &&
              !s.default.has(t) &&
              this._spellchecker.isMisspelled(e)
            );
          }),
          (u.getCorrectionsForMisspelling = function (e, t) {
            return (
              void 0 === t && (t = !1),
              (this.isMisspelled(e, t) &&
                this._spellchecker.getCorrectionsForMisspelling(e)) ||
                []
            );
          }),
          (u.setAppLocale = function (e) {}),
          (u.replaceMisspelling = function (e) {
            l.default.spellCheck.replaceMisspelling(e);
          }),
          (t = e),
          (n = [
            {
              key: "enabled",
              get: function () {
                return this._enabled;
              },
              set: function (e) {
                (this._enabled = e), this.reset();
              },
            },
          ]) && v(t.prototype, n),
          r && v(t, r),
          e
        );
      })();
      t.LegacySpellchecker = b;
    },
    8808: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = new Set(
        [
          "ain't",
          "aren't",
          "can't",
          "could've",
          "couldn't",
          "couldn't've",
          "didn't",
          "doesn't",
          "don't",
          "hadn't",
          "hadn't've",
          "hasn't",
          "haven't",
          "he'd",
          "he'd've",
          "he'll",
          "he's",
          "how'd",
          "how'll",
          "how's",
          "I'd",
          "I'd've",
          "I'll",
          "I'm",
          "I've",
          "isn't",
          "it'd",
          "it'd've",
          "it'll",
          "it's",
          "let's",
          "ma'am",
          "mightn't",
          "mightn't've",
          "might've",
          "mustn't",
          "must've",
          "needn't",
          "not've",
          "o'clock",
          "shan't",
          "she'd",
          "she'd've",
          "she'll",
          "she's",
          "should've",
          "shouldn't",
          "shouldn't've",
          "that'll",
          "that's",
          "there'd",
          "there'd've",
          "there're",
          "there's",
          "they'd",
          "they'd've",
          "they'll",
          "they're",
          "they've",
          "wasn't",
          "we'd",
          "we'd've",
          "we'll",
          "we're",
          "we've",
          "weren't",
          "what'll",
          "what're",
          "what's",
          "what've",
          "when's",
          "where'd",
          "where's",
          "where've",
          "who'd",
          "who'll",
          "who're",
          "who's",
          "who've",
          "why'll",
          "why're",
          "why's",
          "won't",
          "would've",
          "wouldn't",
          "wouldn't've",
          "y'all",
          "y'all'd've",
          "you'd",
          "you'd've",
          "you'll",
          "you're",
          "you've",
        ].map(function (e) {
          return e.replace(/'.*/, "");
        })
      );
      t.default = r;
    },
    8809: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.install = function () {
          return O.apply(this, arguments);
        }),
        (t.Spellchecker = void 0);
      var r,
        o = n(8712),
        l = s(n(117)),
        u = s(n(26)),
        a = s(n(38)),
        i = n(48),
        c = s(n(8524)),
        f = s(n(8525));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function d(e, t, n, r, o, l, u) {
        try {
          var a = e[l](u),
            i = a.value;
        } catch (e) {
          return void n(e);
        }
        a.done ? t(i) : Promise.resolve(i).then(r, o);
      }
      function p(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var l = e.apply(t, n);
            function u(e) {
              d(l, r, o, u, a, "next", e);
            }
            function a(e) {
              d(l, r, o, u, a, "throw", e);
            }
            u(void 0);
          });
        };
      }
      function v(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var y = new u.default("Spellchecker"),
        h =
          (null === l.default ||
          void 0 === l.default ||
          null === (r = l.default.spellCheck) ||
          void 0 === r
            ? void 0
            : r.Spellchecker) ||
          (null === l.default || void 0 === l.default
            ? void 0
            : l.default.spellCheck);
      function b(e) {
        e = f.default[e] || e;
        var t = (0, o.parse)(e.replace(/[_-]/g, "-"));
        if (
          null != t &&
          null != t.langtag.language &&
          null != t.langtag.region
        ) {
          var n = t.langtag,
            r = n.language,
            l = n.region;
          return r.language.toLowerCase() + "-" + l.toUpperCase();
        }
        y.error(e + " is not a valid locale.");
      }
      var g = (function () {
        function e(e) {
          var t = this;
          (this._enabled = !0),
            (this._misspelledWord = ""),
            (this._corrections = []);
          var n = a.default.locale.split("-"),
            r = n[0],
            o = n[1];
          this._regionPreference = o;
          var l = this.getAvailableLanguages(e);
          (this._languageDetector = new c.default(r, function (n) {
            var o = n + "-" + t._regionPreference;
            if (-1 !== e.indexOf(o)) t.setLocale(o);
            else {
              var u = l[n] || f.default[r];
              null != u && t.setLocale(u);
            }
          })),
            h.on("spellcheck-result", function (e, n) {
              (t._misspelledWord = e || ""), (t._corrections = n || []);
            });
        }
        var t,
          n,
          r,
          o = e.prototype;
        return (
          (o.setLearnedWords = function (e) {
            h.setLearnedWords(e);
          }),
          (o.setLocale = function (e) {
            h.setLocale(e).then(function (t) {
              y.info("Switching to " + e, t ? "(available)" : "(unavailable)");
            });
          }),
          (o.setAppLocale = function (e) {
            this._regionPreference = e.split("-")[1];
          }),
          (o.detectLanguage = function (e) {
            this.enabled && this._languageDetector.process(e);
          }),
          (o.getAvailableLanguages = function (e) {
            var t = {};
            return (
              e.forEach(function (e) {
                var n = e.split("-")[0];
                t[n] = t[n] || e;
              }),
              t
            );
          }),
          (o.isMisspelled = function (e, t) {
            return "" !== this._misspelledWord && e === this._misspelledWord;
          }),
          (o.getCorrectionsForMisspelling = function (e, t) {
            return this.isMisspelled(e, t) ? this._corrections : [];
          }),
          (o.replaceMisspelling = function (e) {
            h.replaceMisspelling(e);
          }),
          (t = e),
          (n = [
            {
              key: "enabled",
              get: function () {
                return this._enabled;
              },
              set: function (e) {
                this._enabled = e;
              },
            },
          ]) && v(t.prototype, n),
          r && v(t, r),
          e
        );
      })();
      function m(e) {
        null != document.body &&
          document.body.addEventListener(
            "input",
            function (t) {
              var n = (function (e) {
                if (null == e) return null;
                if (
                  e instanceof HTMLInputElement ||
                  e instanceof HTMLTextAreaElement
                )
                  return e.value;
                if (
                  e instanceof HTMLElement &&
                  e.hasAttribute("contenteditable")
                )
                  return e.textContent;
              })(t.target);
              null != n && e.detectLanguage(n);
            },
            !0
          );
      }
      function O() {
        return (O = p(
          regeneratorRuntime.mark(function e() {
            var t, n, r;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), h.getAvailableDictionaries();
                  case 2:
                    return (
                      (t = e.sent),
                      (n = t.map(b).filter(i.isNotNullish)),
                      m((r = new g(n))),
                      e.abrupt("return", r)
                    );
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      t.Spellchecker = g;
    },
    8810: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.toggleSpellcheck = function () {
          o.default.dispatch({ type: l.ActionTypes.SPELLCHECK_TOGGLE });
        }),
        (t.learnWord = function (e) {
          o.default.dispatch({
            type: l.ActionTypes.SPELLCHECK_LEARN_WORD,
            word: e,
          });
        });
      var r,
        o = (r = n(2)) && r.__esModule ? r : { default: r },
        l = n(1);
    },
    8811: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = v);
      d(n(0));
      var r,
        o = n(388),
        l = d(n(8257)),
        u = f(n(16)),
        a = f(n(8625)),
        i = f(n(8388)),
        c = f(n(6));
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function d(e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(n, o, l)
              : (n[o] = e[o]);
          }
        return (n.default = e), t && t.set(e, n), n;
      }
      function p(e, t, n, o) {
        r ||
          (r =
            ("function" == typeof Symbol &&
              Symbol.for &&
              Symbol.for("react.element")) ||
            60103);
        var l = e && e.defaultProps,
          u = arguments.length - 3;
        if ((t || 0 === u || (t = { children: void 0 }), 1 === u))
          t.children = o;
        else if (u > 1) {
          for (var a = new Array(u), i = 0; i < u; i++) a[i] = arguments[i + 3];
          t.children = a;
        }
        if (t && l) for (var c in l) void 0 === t[c] && (t[c] = l[c]);
        else t || (t = l || {});
        return {
          $$typeof: r,
          type: e,
          key: void 0 === n ? null : "" + n,
          ref: null,
          props: t,
          _owner: null,
        };
      }
      function v(e) {
        var t = e.src,
          n = e.onSelect,
          r = (0, a.default)(t),
          f = (0, i.default)(t, null);
        return u.default.embedded
          ? p(
              l.default,
              {
                navId: "image-context",
                onClose: o.closeContextMenu,
                "aria-label": c.default.Messages.IMAGE_ACTIONS_MENU_LABEL,
                onSelect: n,
              },
              void 0,
              p(l.MenuGroup, {}, void 0, r),
              p(l.MenuGroup, {}, void 0, f)
            )
          : null;
      }
      v.displayName = "NativeImageContextMenu";
    },
    8812: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = p);
      s(n(0));
      var r,
        o = n(388),
        l = s(n(8257)),
        u = c(n(16)),
        a = c(n(8388)),
        i = c(n(6));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function f() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function s(e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var t = f();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(n, o, l)
              : (n[o] = e[o]);
          }
        return (n.default = e), t && t.set(e, n), n;
      }
      function d(e, t, n, o) {
        r ||
          (r =
            ("function" == typeof Symbol &&
              Symbol.for &&
              Symbol.for("react.element")) ||
            60103);
        var l = e && e.defaultProps,
          u = arguments.length - 3;
        if ((t || 0 === u || (t = { children: void 0 }), 1 === u))
          t.children = o;
        else if (u > 1) {
          for (var a = new Array(u), i = 0; i < u; i++) a[i] = arguments[i + 3];
          t.children = a;
        }
        if (t && l) for (var c in l) void 0 === t[c] && (t[c] = l[c]);
        else t || (t = l || {});
        return {
          $$typeof: r,
          type: e,
          key: void 0 === n ? null : "" + n,
          ref: null,
          props: t,
          _owner: null,
        };
      }
      function p(e) {
        var t = e.href,
          n = e.textContent,
          r = e.onSelect,
          c = (0, a.default)(t, n);
        return u.default.embedded
          ? null == c
            ? null
            : d(
                l.default,
                {
                  navId: "image-context",
                  onClose: o.closeContextMenu,
                  "aria-label": i.default.Messages.IMAGE_ACTIONS_MENU_LABEL,
                  onSelect: r,
                },
                void 0,
                d(l.MenuGroup, {}, void 0, c)
              )
          : null;
      }
      p.displayName = "NativeLinkContextMenu";
    },
    8813: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = v);
      d(n(0));
      var r,
        o = n(388),
        l = d(n(8257)),
        u = f(n(16)),
        a = f(n(43)),
        i = f(n(8477)),
        c = f(n(6));
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function d(e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(n, o, l)
              : (n[o] = e[o]);
          }
        return (n.default = e), t && t.set(e, n), n;
      }
      function p(e, t, n, o) {
        r ||
          (r =
            ("function" == typeof Symbol &&
              Symbol.for &&
              Symbol.for("react.element")) ||
            60103);
        var l = e && e.defaultProps,
          u = arguments.length - 3;
        if ((t || 0 === u || (t = { children: void 0 }), 1 === u))
          t.children = o;
        else if (u > 1) {
          for (var a = new Array(u), i = 0; i < u; i++) a[i] = arguments[i + 3];
          t.children = a;
        }
        if (t && l) for (var c in l) void 0 === t[c] && (t[c] = l[c]);
        else t || (t = l || {});
        return {
          $$typeof: r,
          type: e,
          key: void 0 === n ? null : "" + n,
          ref: null,
          props: t,
          _owner: null,
        };
      }
      function v(e) {
        var t = e.text,
          n = e.onSelect,
          r = (0, i.default)(t);
        return u.default.embedded
          ? p(
              l.default,
              {
                navId: "text-context",
                onClose: o.closeContextMenu,
                "aria-label": c.default.Messages.TEXT_ACTIONS_MENU_LABEL,
                onSelect: n,
              },
              void 0,
              p(l.MenuGroup, {}, void 0, r),
              p(
                l.MenuGroup,
                {},
                void 0,
                p(l.MenuItem, {
                  id: "copy",
                  label: c.default.Messages.COPY,
                  action: function () {
                    return a.default.copy(t);
                  },
                })
              )
            )
          : null;
      }
      v.displayName = "NativeTextContextMenu";
    },
  },
]);
