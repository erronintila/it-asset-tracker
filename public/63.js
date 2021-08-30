(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/schedules/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/schedules/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_WorkOrderDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/WorkOrderDataService */ "./resources/js/services/WorkOrderDataService.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      } // { text: "Export", action: "export", icon: "mdi-export" }
      ],
      status: {
        text: "Approved",
        action: "approved",
        icon: "mdi-check",
        color: "blue"
      },
      statuses: [{
        text: "Pending",
        action: "pending",
        icon: "mdi-clock-time-four-outline",
        color: "grey"
      }, {
        text: "Approved",
        action: "approved",
        icon: "mdi-check",
        color: "blue"
      }, {
        text: "Completed",
        action: "completed",
        icon: "mdi-check-all",
        color: "yellow"
      }, {
        text: "Posted",
        action: "posted",
        icon: "mdi-check-circle",
        color: "green"
      }, {
        text: "Cancelled",
        action: "cancelled",
        icon: "mdi-cancel",
        color: "red"
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
      items: [],
      colors: ["blue", "indigo", "deep-purple", "cyan", "green", "orange", "grey darken-1"],
      names: ["Meeting", "Holiday", "PTO", "Travel", "Event", "Birthday", "Conference", "Party"],
      tableOptions: {
        options: {
          sortBy: ["code"],
          sortDesc: [false],
          page: 1,
          itemsPerPage: 10
        },
        loading: false,
        itemsPerPageOptions: [10, 20, 50, 100],
        serverItemsLength: 0,
        headers: [{
          text: "Code",
          value: "code"
        }, {
          text: "Request Date",
          value: "request_date"
        }, {
          text: "Description",
          value: "description"
        }, {
          text: "User",
          value: "user.name"
        }, {
          text: "Status",
          value: "status"
        }]
      },
      scheduled_date: []
    };
  },
  mounted: function mounted() {
    this.$refs.calendar.checkChange();
    this.getData();
  },
  methods: {
    getData: function getData() {
      var _this = this;

      this.tableOptions.loading = true;
      return new Promise(function (resolve, reject) {
        var _this$tableOptions$op = _this.tableOptions.options,
            sortBy = _this$tableOptions$op.sortBy,
            sortDesc = _this$tableOptions$op.sortDesc,
            page = _this$tableOptions$op.page,
            itemsPerPage = _this$tableOptions$op.itemsPerPage;
        var search = _this.search;
        var scheduled_start_date = _this.scheduled_date[0];
        var scheduled_end_date = _this.scheduled_date[1];
        var status = _this.status.text;
        var data = {
          params: {
            sortBy: sortBy[0],
            sortType: sortDesc[0] ? "desc" : "asc",
            page: page,
            itemsPerPage: itemsPerPage,
            scheduled_start_date: scheduled_start_date,
            scheduled_end_date: scheduled_end_date,
            // search: search
            status: status
          }
        };
        _services_WorkOrderDataService__WEBPACK_IMPORTED_MODULE_0__["default"].getAll(data).then(function (response) {
          var colors = _this.colors;
          _this.items = response.data.data.data.map(function (item) {
            var newObj = {};
            newObj["name"] = item.description;
            newObj["start"] = moment__WEBPACK_IMPORTED_MODULE_1___default()(item.transactionable.scheduled_start_date).format("YYYY-MM-DD HH:mm:ss");
            newObj["end"] = moment__WEBPACK_IMPORTED_MODULE_1___default()(item.transactionable.scheduled_end_date).format("YYYY-MM-DD HH:mm:ss");
            newObj["color"] = colors[Math.floor(Math.random() * (colors.length - 1))];
            newObj["timed"] = false;
            return newObj;
          });
          _this.tableOptions.serverItemsLength = response.data.data.total;
          _this.tableOptions.loading = false;
          resolve(_this.items);
        })["catch"](function (error) {
          _this.tableOptions.loading = false;
          console.log(error.response);
          reject();
        });
      });
    },
    updateRange: function updateRange(_ref) {
      var start = _ref.start,
          end = _ref.end;
      this.scheduled_date = [start.date, end.date];
      this.getData(); // this.items = [
      //     {
      //         name: "ajhsdgas",
      //         start: "2021-07-01 01:01:01",
      //         end: "2021-07-15 01:01:01",
      //         color: "blue",
      //         timed: false
      //     }
      // ];
    },
    viewDay: function viewDay(_ref2) {
      var date = _ref2.date;
      this.focus = date; // this.type = "day";
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
    showEvent: function showEvent(_ref3) {
      var _this2 = this;

      var nativeEvent = _ref3.nativeEvent,
          event = _ref3.event;

      var open = function open() {
        _this2.selectedEvent = event;
        _this2.selectedElement = nativeEvent.target;
        requestAnimationFrame(function () {
          return requestAnimationFrame(function () {
            return _this2.selectedOpen = true;
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
    }
  },
  computed: {
    params: function params(nv) {
      return _objectSpread(_objectSpread({}, this.tableOptions.options), {}, {
        // query: this.search
        query: this.status
      });
    }
  },
  watch: {
    params: {
      immediate: true,
      deep: true,
      handler: function handler() {
        this.getData();
      }
    }
  },
  activated: function activated() {
    this.getData();
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
          _c(
            "template",
            { slot: "leftSideNavigation" },
            [
              _c(
                "v-chip",
                {
                  staticClass: "mx-2",
                  attrs: {
                    label: "",
                    outlined: "",
                    small: "",
                    color: _vm.status.color
                  }
                },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.status.text) +
                      "\n            "
                  )
                ]
              )
            ],
            1
          ),
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
                            {
                              key: index,
                              attrs: { link: "" },
                              on: {
                                click: function($event) {
                                  _vm.status = item
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
                                        {
                                          attrs: {
                                            icon: "",
                                            title: "Items per page"
                                          }
                                        },
                                        "v-btn",
                                        attrs,
                                        false
                                      ),
                                      on
                                    ),
                                    [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(
                                            _vm.tableOptions.options
                                              .itemsPerPage
                                          ) +
                                          "\n                            "
                                      )
                                    ]
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
                              _vm._l(
                                _vm.tableOptions.itemsPerPageOptions,
                                function(item, index) {
                                  return [
                                    _c(
                                      "v-list-item",
                                      {
                                        key: index,
                                        attrs: { link: "" },
                                        on: {
                                          click: function($event) {
                                            _vm.tableOptions.options.itemsPerPage = item
                                          }
                                        }
                                      },
                                      [
                                        _c("v-list-item-title", [
                                          _c("div", { staticClass: "mr-3" }, [
                                            _vm._v(
                                              "\n                                            " +
                                                _vm._s(item) +
                                                "\n                                        "
                                            )
                                          ])
                                        ])
                                      ],
                                      1
                                    )
                                  ]
                                }
                              )
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
                1
              ),
              _vm._v(" "),
              _c(
                "v-sheet",
                { staticClass: "mx-4", attrs: { height: "600" } },
                [
                  _c("v-calendar", {
                    ref: "calendar",
                    attrs: {
                      color: "primary",
                      events: _vm.items,
                      "event-color": _vm.getEventColor,
                      type: "month"
                    },
                    on: {
                      "click:event": _vm.showEvent,
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
                  })
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



/***/ }),

/***/ "./resources/js/services/WorkOrderDataService.js":
/*!*******************************************************!*\
  !*** ./resources/js/services/WorkOrderDataService.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import http from "../http-common";


var WorkOrderDataService = /*#__PURE__*/function () {
  function WorkOrderDataService() {
    _classCallCheck(this, WorkOrderDataService);
  }

  _createClass(WorkOrderDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/work_orders", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/work_orders/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/v1/work_orders", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/work_orders/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/work_orders/".concat(id), data);
    }
  }, {
    key: "deleteMany",
    value: function deleteMany(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/work_orders/multiple", data);
    }
  }, {
    key: "restore",
    value: function restore(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/work_orders/restore", data);
    }
  }, {
    key: "approve",
    value: function approve(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/work_orders/approve", data);
    }
  }, {
    key: "complete",
    value: function complete(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/work_orders/complete", data);
    }
  }, {
    key: "post",
    value: function post(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/work_orders/post", data);
    }
  }, {
    key: "cancel",
    value: function cancel(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/work_orders/cancel", data);
    }
  }]);

  return WorkOrderDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new WorkOrderDataService());

/***/ })

}]);