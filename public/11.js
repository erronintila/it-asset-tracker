(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/X-DataTable.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/X-DataTable.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "x-datatable",
  props: {
    // selected: {
    //     type: Array,
    //     default: () => []
    // },
    headers: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    items: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    itemsPerPageOptions: {
      type: Array,
      "default": function _default() {
        return [3, 5];
      }
    },
    itemsPerPage: {
      type: Number,
      "default": 5
    },
    showSelect: {
      type: Boolean,
      "default": true
    },
    singleSelect: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      selected: []
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/X-Dialog.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/X-Dialog.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _X_DataTable_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./X-DataTable.vue */ "./resources/js/components/X-DataTable.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "x-dialog",
  props: {
    dialog: false,
    title: ""
  },
  components: {
    XDataTable: _X_DataTable_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {};
  },
  methods: {
    closeDialog: function closeDialog() {
      this.$emit("close-dialog");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/agreements/Show.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/agreements/Show.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_X_DataTable_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/X-DataTable.vue */ "./resources/js/components/X-DataTable.vue");
/* harmony import */ var _components_X_Dialog_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/X-Dialog.vue */ "./resources/js/components/X-Dialog.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default.a,
    XDataTable: _components_X_DataTable_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    XDialog: _components_X_Dialog_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      tab: null,
      items: ["details", "assets", "system activity logs"],
      series: {
        asset: [44, 55, 10]
      },
      options: {
        asset: {
          labels: ["Graphics Software", "System Software", "Others"] // legend: {
          //     show: false
          // }

        }
      },
      records: [{
        name: "Data 1",
        value: 159
      }, {
        name: "Data 2",
        value: 237
      }, {
        name: "Data 3",
        value: 262
      }, {
        name: "Data 4",
        value: 305
      }, {
        name: "Data 5",
        value: 356
      }, {
        name: "Data 6",
        value: 375
      }, {
        name: "Data 7",
        value: 392
      }, {
        name: "Data 8",
        value: 408
      }, {
        name: "Data 9",
        value: 452
      }, {
        name: "Data 10",
        value: 518
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/X-DataTable.vue?vue&type=template&id=0aef3e74&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/X-DataTable.vue?vue&type=template&id=0aef3e74& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _c("v-data-table", {
    attrs: {
      headers: _vm.headers,
      items: _vm.items,
      "items-per-page": _vm.itemsPerPage,
      "show-select": _vm.showSelect,
      "single-select": _vm.singleSelect,
      "footer-props": {
        itemsPerPageOptions: _vm.itemsPerPageOptions
      }
    },
    model: {
      value: _vm.selected,
      callback: function($$v) {
        _vm.selected = $$v
      },
      expression: "selected"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/X-Dialog.vue?vue&type=template&id=05ebfb48&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/X-Dialog.vue?vue&type=template&id=05ebfb48& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    "v-dialog",
    {
      attrs: { persistent: "", "max-width": "600" },
      model: {
        value: _vm.dialog,
        callback: function($$v) {
          _vm.dialog = $$v
        },
        expression: "dialog"
      }
    },
    [
      _c(
        "v-card",
        [
          _c("v-card-title", [_vm._v(_vm._s(_vm.title))]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "div",
                { staticClass: "d-flex justify-space-between align-center" },
                [
                  _c("div", [_vm._v("All Items")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c("v-text-field", {
                        attrs: { label: "Search", clearable: "" }
                      })
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c("XDataTable", {
                attrs: {
                  headers: [
                    {
                      text: "Field 1",
                      value: "text"
                    },
                    { text: "Field 2", value: "number" },
                    { text: "Field 3", value: "text" }
                  ],
                  items: [
                    {
                      id: 1,
                      number: "123",
                      text: "Data",
                      date: "2021-12-31",
                      boolean: "true"
                    },
                    {
                      id: 2,
                      number: "123",
                      text: "Data",
                      date: "2021-12-31",
                      boolean: "false"
                    }
                  ]
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mb-4" },
                [
                  _c(
                    "v-btn",
                    { staticClass: "mx-2", on: { click: _vm.closeDialog } },
                    [_vm._v("\n                    OK\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    { staticClass: "mx-2", on: { click: _vm.closeDialog } },
                    [_vm._v("\n                    Close\n                ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/agreements/Show.vue?vue&type=template&id=8dfd2c2c&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/agreements/Show.vue?vue&type=template&id=8dfd2c2c& ***!
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
        "v-row",
        { staticClass: "mb-4" },
        [
          _c(
            "v-col",
            { staticClass: "d-flex justify-start" },
            [
              _c(
                "v-btn",
                {
                  attrs: { icon: "" },
                  on: {
                    click: function($event) {
                      return _vm.$router.go(-1)
                    }
                  }
                },
                [_c("v-icon", [_vm._v("mdi-arrow-left")])],
                1
              ),
              _vm._v(" "),
              _c("span", { staticClass: "page-title" }, [
                _vm._v("Service Agreement Details")
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-tabs",
                    {
                      attrs: { "show-arrows": "" },
                      model: {
                        value: _vm.tab,
                        callback: function($$v) {
                          _vm.tab = $$v
                        },
                        expression: "tab"
                      }
                    },
                    [
                      _c("v-tabs-slider", {
                        attrs: { color: "teal lighten-3" }
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.items, function(item) {
                        return _c("v-tab", { key: item }, [
                          _vm._v(
                            "\n                        " +
                              _vm._s(item) +
                              "\n                    "
                          )
                        ])
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "v-tabs-items",
                    {
                      model: {
                        value: _vm.tab,
                        callback: function($$v) {
                          _vm.tab = $$v
                        },
                        expression: "tab"
                      }
                    },
                    [
                      _c(
                        "v-tab-item",
                        [
                          _c(
                            "v-card",
                            { attrs: { flat: "" } },
                            [
                              _c(
                                "v-card-text",
                                [
                                  _c("v-simple-table", {
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function() {
                                          return [
                                            _c("thead", [
                                              _c("tr", [
                                                _c(
                                                  "th",
                                                  { staticClass: "text-left" },
                                                  [
                                                    _vm._v(
                                                      "\n                                                    Name\n                                                "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "th",
                                                  { staticClass: "text-left" },
                                                  [
                                                    _vm._v(
                                                      "\n                                                    Value\n                                                "
                                                    )
                                                  ]
                                                )
                                              ])
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "tbody",
                                              _vm._l(_vm.records, function(
                                                item
                                              ) {
                                                return _c(
                                                  "tr",
                                                  { key: item.name },
                                                  [
                                                    _c("td", [
                                                      _vm._v(_vm._s(item.name))
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(_vm._s(item.value))
                                                    ])
                                                  ]
                                                )
                                              }),
                                              0
                                            )
                                          ]
                                        },
                                        proxy: true
                                      }
                                    ])
                                  })
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
                        "v-tab-item",
                        [
                          _c(
                            "v-card",
                            { attrs: { flat: "" } },
                            [
                              _c(
                                "v-card-text",
                                [
                                  _c("v-simple-table", {
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function() {
                                          return [
                                            _c("thead", [
                                              _c("tr", [
                                                _c(
                                                  "th",
                                                  { staticClass: "text-left" },
                                                  [
                                                    _vm._v(
                                                      "\n                                                    Name\n                                                "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "th",
                                                  { staticClass: "text-left" },
                                                  [
                                                    _vm._v(
                                                      "\n                                                    Value\n                                                "
                                                    )
                                                  ]
                                                )
                                              ])
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "tbody",
                                              _vm._l(_vm.records, function(
                                                item
                                              ) {
                                                return _c(
                                                  "tr",
                                                  { key: item.name },
                                                  [
                                                    _c("td", [
                                                      _vm._v(_vm._s(item.name))
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(_vm._s(item.value))
                                                    ])
                                                  ]
                                                )
                                              }),
                                              0
                                            )
                                          ]
                                        },
                                        proxy: true
                                      }
                                    ])
                                  })
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
                        "v-tab-item",
                        [
                          _c(
                            "v-card",
                            { attrs: { flat: "" } },
                            [
                              _c(
                                "v-card-text",
                                [
                                  _c("v-simple-table", {
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function() {
                                          return [
                                            _c("thead", [
                                              _c("tr", [
                                                _c(
                                                  "th",
                                                  { staticClass: "text-left" },
                                                  [
                                                    _vm._v(
                                                      "\n                                                    Name\n                                                "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "th",
                                                  { staticClass: "text-left" },
                                                  [
                                                    _vm._v(
                                                      "\n                                                    Value\n                                                "
                                                    )
                                                  ]
                                                )
                                              ])
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "tbody",
                                              _vm._l(_vm.records, function(
                                                item
                                              ) {
                                                return _c(
                                                  "tr",
                                                  { key: item.name },
                                                  [
                                                    _c("td", [
                                                      _vm._v(_vm._s(item.name))
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(_vm._s(item.value))
                                                    ])
                                                  ]
                                                )
                                              }),
                                              0
                                            )
                                          ]
                                        },
                                        proxy: true
                                      }
                                    ])
                                  })
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
                        "v-tab-item",
                        [
                          _c(
                            "v-card",
                            { attrs: { flat: "" } },
                            [
                              _c(
                                "v-card-text",
                                [
                                  _c("v-simple-table", {
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function() {
                                          return [
                                            _c("thead", [
                                              _c("tr", [
                                                _c(
                                                  "th",
                                                  { staticClass: "text-left" },
                                                  [
                                                    _vm._v(
                                                      "\n                                                    Name\n                                                "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "th",
                                                  { staticClass: "text-left" },
                                                  [
                                                    _vm._v(
                                                      "\n                                                    Value\n                                                "
                                                    )
                                                  ]
                                                )
                                              ])
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "tbody",
                                              _vm._l(_vm.records, function(
                                                item
                                              ) {
                                                return _c(
                                                  "tr",
                                                  { key: item.name },
                                                  [
                                                    _c("td", [
                                                      _vm._v(_vm._s(item.name))
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(_vm._s(item.value))
                                                    ])
                                                  ]
                                                )
                                              }),
                                              0
                                            )
                                          ]
                                        },
                                        proxy: true
                                      }
                                    ])
                                  })
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
                        "v-tab-item",
                        [
                          _c(
                            "v-card",
                            { attrs: { flat: "" } },
                            [
                              _c(
                                "v-card-text",
                                [
                                  _c("v-simple-table", {
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function() {
                                          return [
                                            _c("thead", [
                                              _c("tr", [
                                                _c(
                                                  "th",
                                                  { staticClass: "text-left" },
                                                  [
                                                    _vm._v(
                                                      "\n                                                    Name\n                                                "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "th",
                                                  { staticClass: "text-left" },
                                                  [
                                                    _vm._v(
                                                      "\n                                                    Value\n                                                "
                                                    )
                                                  ]
                                                )
                                              ])
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "tbody",
                                              _vm._l(_vm.records, function(
                                                item
                                              ) {
                                                return _c(
                                                  "tr",
                                                  { key: item.name },
                                                  [
                                                    _c("td", [
                                                      _vm._v(_vm._s(item.name))
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(_vm._s(item.value))
                                                    ])
                                                  ]
                                                )
                                              }),
                                              0
                                            )
                                          ]
                                        },
                                        proxy: true
                                      }
                                    ])
                                  })
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
                        "v-tab-item",
                        [
                          _c(
                            "v-card",
                            { attrs: { flat: "" } },
                            [
                              _c(
                                "v-card-text",
                                [
                                  _c("v-simple-table", {
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function() {
                                          return [
                                            _c("thead", [
                                              _c("tr", [
                                                _c(
                                                  "th",
                                                  { staticClass: "text-left" },
                                                  [
                                                    _vm._v(
                                                      "\n                                                    Name\n                                                "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "th",
                                                  { staticClass: "text-left" },
                                                  [
                                                    _vm._v(
                                                      "\n                                                    Value\n                                                "
                                                    )
                                                  ]
                                                )
                                              ])
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "tbody",
                                              _vm._l(_vm.records, function(
                                                item
                                              ) {
                                                return _c(
                                                  "tr",
                                                  { key: item.name },
                                                  [
                                                    _c("td", [
                                                      _vm._v(_vm._s(item.name))
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(_vm._s(item.value))
                                                    ])
                                                  ]
                                                )
                                              }),
                                              0
                                            )
                                          ]
                                        },
                                        proxy: true
                                      }
                                    ])
                                  })
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
                        "v-tab-item",
                        [
                          _c(
                            "v-card",
                            { attrs: { flat: "" } },
                            [
                              _c(
                                "v-card-text",
                                [
                                  _c("v-simple-table", {
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function() {
                                          return [
                                            _c("thead", [
                                              _c("tr", [
                                                _c(
                                                  "th",
                                                  { staticClass: "text-left" },
                                                  [
                                                    _vm._v(
                                                      "\n                                                    Name\n                                                "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "th",
                                                  { staticClass: "text-left" },
                                                  [
                                                    _vm._v(
                                                      "\n                                                    Value\n                                                "
                                                    )
                                                  ]
                                                )
                                              ])
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "tbody",
                                              _vm._l(_vm.records, function(
                                                item
                                              ) {
                                                return _c(
                                                  "tr",
                                                  { key: item.name },
                                                  [
                                                    _c("td", [
                                                      _vm._v(_vm._s(item.name))
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(_vm._s(item.value))
                                                    ])
                                                  ]
                                                )
                                              }),
                                              0
                                            )
                                          ]
                                        },
                                        proxy: true
                                      }
                                    ])
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

/***/ "./resources/js/components/X-DataTable.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/X-DataTable.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _X_DataTable_vue_vue_type_template_id_0aef3e74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./X-DataTable.vue?vue&type=template&id=0aef3e74& */ "./resources/js/components/X-DataTable.vue?vue&type=template&id=0aef3e74&");
/* harmony import */ var _X_DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./X-DataTable.vue?vue&type=script&lang=js& */ "./resources/js/components/X-DataTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _X_DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _X_DataTable_vue_vue_type_template_id_0aef3e74___WEBPACK_IMPORTED_MODULE_0__["render"],
  _X_DataTable_vue_vue_type_template_id_0aef3e74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/X-DataTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/X-DataTable.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/X-DataTable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_X_DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./X-DataTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/X-DataTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_X_DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/X-DataTable.vue?vue&type=template&id=0aef3e74&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/X-DataTable.vue?vue&type=template&id=0aef3e74& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_X_DataTable_vue_vue_type_template_id_0aef3e74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./X-DataTable.vue?vue&type=template&id=0aef3e74& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/X-DataTable.vue?vue&type=template&id=0aef3e74&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_X_DataTable_vue_vue_type_template_id_0aef3e74___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_X_DataTable_vue_vue_type_template_id_0aef3e74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/X-Dialog.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/X-Dialog.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _X_Dialog_vue_vue_type_template_id_05ebfb48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./X-Dialog.vue?vue&type=template&id=05ebfb48& */ "./resources/js/components/X-Dialog.vue?vue&type=template&id=05ebfb48&");
/* harmony import */ var _X_Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./X-Dialog.vue?vue&type=script&lang=js& */ "./resources/js/components/X-Dialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _X_Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _X_Dialog_vue_vue_type_template_id_05ebfb48___WEBPACK_IMPORTED_MODULE_0__["render"],
  _X_Dialog_vue_vue_type_template_id_05ebfb48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/X-Dialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/X-Dialog.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/X-Dialog.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_X_Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./X-Dialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/X-Dialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_X_Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/X-Dialog.vue?vue&type=template&id=05ebfb48&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/X-Dialog.vue?vue&type=template&id=05ebfb48& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_X_Dialog_vue_vue_type_template_id_05ebfb48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./X-Dialog.vue?vue&type=template&id=05ebfb48& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/X-Dialog.vue?vue&type=template&id=05ebfb48&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_X_Dialog_vue_vue_type_template_id_05ebfb48___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_X_Dialog_vue_vue_type_template_id_05ebfb48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/agreements/Show.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/agreements/Show.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_8dfd2c2c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=8dfd2c2c& */ "./resources/js/pages/agreements/Show.vue?vue&type=template&id=8dfd2c2c&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/pages/agreements/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_8dfd2c2c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_8dfd2c2c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/agreements/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/agreements/Show.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/agreements/Show.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/agreements/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/agreements/Show.vue?vue&type=template&id=8dfd2c2c&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/agreements/Show.vue?vue&type=template&id=8dfd2c2c& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_8dfd2c2c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=8dfd2c2c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/agreements/Show.vue?vue&type=template&id=8dfd2c2c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_8dfd2c2c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_8dfd2c2c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);