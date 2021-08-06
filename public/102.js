(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[102],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/schedules/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/schedules/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      actions: [{
        text: "Create Work Order",
        action: "create",
        icon: "mdi-plus"
      }, {
        text: "Refresh",
        action: "refresh",
        icon: "mdi-refresh"
      }, {
        text: "Export",
        action: "export",
        icon: "mdi-export"
      }],
      statuses: [{
        text: "Pending",
        action: "pending",
        icon: "mdi-clock-time-four-outline"
      }, {
        text: "Approved",
        action: "approved",
        icon: "mdi-check"
      }, {
        text: "Completed",
        action: "completed",
        icon: "mdi-check-all"
      }, {
        text: "Posted",
        action: "posted",
        icon: "mdi-check-circle"
      }, {
        text: "Cancelled",
        action: "cancelled",
        icon: "mdi-cancel"
      }],
      focus: "",
      type: "month",
      typeToLabel: {
        month: "Month",
        week: "Week",
        day: "Day",
        "4day": "4 Days"
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      colors: ["blue", "indigo", "deep-purple", "cyan", "green", "orange", "grey darken-1"],
      names: ["Meeting", "Holiday", "PTO", "Travel", "Event", "Birthday", "Conference", "Party"]
    };
  },
  mounted: function mounted() {
    this.$refs.calendar.checkChange();
  },
  methods: {
    viewDay: function viewDay(_ref) {
      var date = _ref.date;
      this.focus = date;
      this.type = "day";
    },
    getEventColor: function getEventColor(event) {
      return event.color;
    },
    setToday: function setToday() {
      this.focus = "";
    },
    prev: function prev() {
      this.$refs.calendar.prev();
    },
    next: function next() {
      this.$refs.calendar.next();
    },
    showEvent: function showEvent(_ref2) {
      var _this = this;

      var nativeEvent = _ref2.nativeEvent,
          event = _ref2.event;

      var open = function open() {
        _this.selectedEvent = event;
        _this.selectedElement = nativeEvent.target;
        requestAnimationFrame(function () {
          return requestAnimationFrame(function () {
            return _this.selectedOpen = true;
          });
        });
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        requestAnimationFrame(function () {
          return requestAnimationFrame(function () {
            return open();
          });
        });
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    updateRange: function updateRange(_ref3) {
      var start = _ref3.start,
          end = _ref3.end;
      var events = [];
      var min = new Date("".concat(start.date, "T00:00:00"));
      var max = new Date("".concat(end.date, "T23:59:59"));
      var days = (max.getTime() - min.getTime()) / 86400000;
      var eventCount = this.rnd(days, days + 20);

      for (var i = 0; i < eventCount; i++) {
        var allDay = this.rnd(0, 3) === 0;
        var firstTimestamp = this.rnd(min.getTime(), max.getTime());
        var first = new Date(firstTimestamp - firstTimestamp % 900000);
        var secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
        var second = new Date(first.getTime() + secondTimestamp);
        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay
        });
      }

      this.events = events;
    },
    rnd: function rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/schedules/Index.vue?vue&type=template&id=dba76874&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/schedules/Index.vue?vue&type=template&id=dba76874& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "page-header",
        { staticClass: "mb-4", attrs: { title: "Schedule Board" } },
        [
          _c("template", { slot: "leftSideNavigation" }),
          _vm._v(" "),
          _c(
            "template",
            { slot: "rightSideNavigation" },
            [
              _c(
                "v-menu",
                {
                  attrs: { rounded: "", "offset-y": "" },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function(ref) {
                        var on = ref.on
                        var attrs = ref.attrs
                        return [
                          _c(
                            "v-btn",
                            _vm._g(
                              _vm._b(
                                { attrs: { icon: "", title: "More action" } },
                                "v-btn",
                                attrs,
                                false
                              ),
                              on
                            ),
                            [
                              _c("v-icon", [
                                _vm._v(
                                  "\n                            mdi-calendar-plus\n                        "
                                )
                              ])
                            ],
                            1
                          )
                        ]
                      }
                    }
                  ])
                },
                [
                  _vm._v(" "),
                  _c(
                    "v-list",
                    { attrs: { dense: "" } },
                    [
                      _vm._l(_vm.actions, function(item, index) {
                        return [
                          _c(
                            "v-list-item",
                            {
                              key: index,
                              attrs: { link: "" },
                              on: {
                                click: function($event) {
                                  return _vm.filterAction(item.action)
                                }
                              }
                            },
                            [
                              _c(
                                "v-list-item-icon",
                                [_c("v-icon", [_vm._v(_vm._s(item.icon))])],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-list-item-title", [
                                _c("div", { staticClass: "mr-3" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(item.text) +
                                      "\n                                "
                                  )
                                ])
                              ])
                            ],
                            1
                          )
                        ]
                      })
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { icon: "", fab: "", title: "Today" },
                  on: { click: _vm.setToday }
                },
                [
                  _c("v-icon", [
                    _vm._v(
                      "\n                    mdi-calendar-check\n                "
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-menu",
                {
                  attrs: { rounded: "", "offset-y": "" },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function(ref) {
                        var on = ref.on
                        var attrs = ref.attrs
                        return [
                          _c(
                            "v-btn",
                            _vm._g(
                              _vm._b(
                                { attrs: { icon: "", title: "Status" } },
                                "v-btn",
                                attrs,
                                false
                              ),
                              on
                            ),
                            [
                              _c("v-icon", [
                                _vm._v(
                                  "\n                            mdi-list-status\n                        "
                                )
                              ])
                            ],
                            1
                          )
                        ]
                      }
                    }
                  ])
                },
                [
                  _vm._v(" "),
                  _c(
                    "v-list",
                    { attrs: { dense: "" } },
                    [
                      _vm._l(_vm.statuses, function(item, index) {
                        return [
                          _c(
                            "v-list-item",
                            { key: index, attrs: { link: "" } },
                            [
                              _c(
                                "v-list-item-icon",
                                [_c("v-icon", [_vm._v(_vm._s(item.icon))])],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-list-item-title", [
                                _c("div", { staticClass: "mr-3" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(item.text) +
                                      "\n                                "
                                  )
                                ])
                              ])
                            ],
                            1
                          )
                        ]
                      })
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "fill-height" },
        [
          _c(
            "v-col",
            [
              _c(
                "v-sheet",
                { attrs: { height: "64" } },
                [
                  _c(
                    "v-toolbar",
                    { attrs: { flat: "" } },
                    [
                      _vm.$refs.calendar
                        ? _c("v-toolbar-title", [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.$refs.calendar.title) +
                                "\n                    "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            fab: "",
                            text: "",
                            small: "",
                            color: "grey darken-2",
                            title: "Previous"
                          },
                          on: { click: _vm.prev }
                        },
                        [
                          _c("v-icon", { attrs: { small: "" } }, [
                            _vm._v(
                              "\n                            mdi-chevron-left\n                        "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            fab: "",
                            text: "",
                            small: "",
                            color: "grey darken-2",
                            title: "Next"
                          },
                          on: { click: _vm.next }
                        },
                        [
                          _c("v-icon", { attrs: { small: "" } }, [
                            _vm._v(
                              "\n                            mdi-chevron-right\n                        "
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-sheet",
                { attrs: { height: "600" } },
                [
                  _c("v-calendar", {
                    ref: "calendar",
                    attrs: {
                      color: "primary",
                      events: _vm.events,
                      "event-color": _vm.getEventColor,
                      type: _vm.type
                    },
                    on: {
                      "click:event": _vm.showEvent,
                      "click:more": _vm.viewDay,
                      "click:date": _vm.viewDay,
                      change: _vm.updateRange
                    },
                    model: {
                      value: _vm.focus,
                      callback: function($$v) {
                        _vm.focus = $$v
                      },
                      expression: "focus"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-menu",
                    {
                      attrs: {
                        "close-on-content-click": false,
                        activator: _vm.selectedElement,
                        "offset-x": ""
                      },
                      model: {
                        value: _vm.selectedOpen,
                        callback: function($$v) {
                          _vm.selectedOpen = $$v
                        },
                        expression: "selectedOpen"
                      }
                    },
                    [
                      _c(
                        "v-card",
                        {
                          attrs: {
                            color: "grey lighten-4",
                            "min-width": "350px",
                            flat: ""
                          }
                        },
                        [
                          _c(
                            "v-toolbar",
                            {
                              attrs: {
                                color: _vm.selectedEvent.color,
                                dark: ""
                              }
                            },
                            [
                              _c(
                                "v-btn",
                                { attrs: { icon: "" } },
                                [_c("v-icon", [_vm._v("mdi-pencil")])],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-toolbar-title", {
                                domProps: {
                                  innerHTML: _vm._s(_vm.selectedEvent.name)
                                }
                              }),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { icon: "" } },
                                [_c("v-icon", [_vm._v("mdi-heart")])],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { icon: "" } },
                                [_c("v-icon", [_vm._v("mdi-dots-vertical")])],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-card-text", [
                            _c("span", {
                              domProps: {
                                innerHTML: _vm._s(_vm.selectedEvent.details)
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { text: "", color: "secondary" },
                                  on: {
                                    click: function($event) {
                                      _vm.selectedOpen = false
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Cancel\n                            "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/schedules/Index.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/schedules/Index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_dba76874___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=dba76874& */ "./resources/js/pages/schedules/Index.vue?vue&type=template&id=dba76874&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/schedules/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_dba76874___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_dba76874___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/schedules/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/schedules/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/schedules/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/schedules/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/schedules/Index.vue?vue&type=template&id=dba76874&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/schedules/Index.vue?vue&type=template&id=dba76874& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_dba76874___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=dba76874& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/schedules/Index.vue?vue&type=template&id=dba76874&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_dba76874___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_dba76874___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);