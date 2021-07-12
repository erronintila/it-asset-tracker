(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/assets/Show.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/assets/Show.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      dialogCategory: false,
      dialogStatus: false,
      dialogType: false,
      dialogManufacturer: false,
      tab: null,
      series: {
        asset: [44, 55, 41, 17]
      },
      options: {
        asset: {
          labels: ["Repair", "Preventive Maintenance", "Corrective Maintenance", "Others"]
        }
      },
      items: ["overview", "details", "sub-assets", "licenses", // "consumables",
      "work orders", "evaluation", "system activity logs", "attachments"],
      records: [{
        id: 1,
        text: "Data 1",
        number: 159,
        date: "2021-12-31",
        "boolean": "true"
      }, {
        id: 2,
        text: "Data 1",
        number: 159,
        date: "2021-12-31",
        "boolean": "true"
      }, {
        id: 3,
        text: "Data 1",
        number: 159,
        date: "2021-12-31",
        "boolean": "true"
      }, {
        id: 4,
        text: "Data 1",
        number: 159,
        date: "2021-12-31",
        "boolean": "true"
      }, {
        id: 5,
        text: "Data 1",
        number: 159,
        date: "2021-12-31",
        "boolean": "true"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/assets/Show.vue?vue&type=template&id=269f7ad0&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/assets/Show.vue?vue&type=template&id=269f7ad0& ***!
  \*********************************************************************************************************************************************************************************************************/
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
                _vm._v("Asset Details")
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
            { attrs: { cols: "12", md: "4" } },
            [
              _c(
                "v-card",
                [
                  _c(
                    "template",
                    { slot: "progress" },
                    [
                      _c("v-progress-linear", {
                        attrs: {
                          color: "deep-purple",
                          height: "10",
                          indeterminate: ""
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-img", {
                    attrs: {
                      height: "250",
                      src:
                        "https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-card-title",
                    [
                      _vm._v(
                        "\n                    Description\n                    "
                      ),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c("v-chip", [_vm._v("Status")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-row",
                        { staticClass: "mx-0", attrs: { align: "center" } },
                        [
                          _c("v-rating", {
                            attrs: {
                              value: 4.5,
                              color: "amber",
                              dense: "",
                              "half-increments": "",
                              readonly: "",
                              size: "14"
                            }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "grey--text ms-4" }, [
                            _vm._v(
                              "\n                            4.5 (413)\n                        "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "my-4 text-subtitle-1" }, [
                        _vm._v(
                          "\n                        # 32412431234\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                        Lorem ipsum dolor sit amet consectetur, adipisicing\n                        elit. Sit, possimus.\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                        Last Updated: 2021-01-01 08:00\n                    "
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "mx-4" }),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c(
                        "v-btn",
                        { attrs: { icon: "", title: "Update" } },
                        [
                          _c("v-icon", [
                            _vm._v("mdi-file-document-edit-outline")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { attrs: { icon: "", title: "Dispose" } },
                        [_c("v-icon", [_vm._v("mdi-delete")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { attrs: { icon: "", title: "Checkout" } },
                        [_c("v-icon", [_vm._v("mdi-file-export-outline")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { attrs: { icon: "", title: "Create Work Order" } },
                        [_c("v-icon", [_vm._v("mdi-text-box-plus-outline")])],
                        1
                      )
                    ],
                    1
                  )
                ],
                2
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", md: "8" } },
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
                                  _c("VueApexCharts", {
                                    attrs: {
                                      type: "donut",
                                      height: "300",
                                      options: _vm.options.asset,
                                      series: _vm.series.asset
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
                                  _c("XDataTable", {
                                    attrs: {
                                      showSelect: false,
                                      headers: [
                                        {
                                          text: "Field",
                                          value: "text"
                                        },
                                        { text: "Value", value: "text" }
                                      ],
                                      items: _vm.records
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
                                  _c(
                                    "v-row",
                                    [
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { staticClass: "d-flex justify-end" },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                icon: "",
                                                title: "Add New"
                                              }
                                            },
                                            [
                                              _c("v-icon", [_vm._v("mdi-plus")])
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                icon: "",
                                                title: "Update"
                                              }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v(
                                                  "mdi-square-edit-outline"
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
                                                icon: "",
                                                title: "Delete"
                                              }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-delete-outline")
                                              ])
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                icon: "",
                                                title: "View Data"
                                              }
                                            },
                                            [_c("v-icon", [_vm._v("mdi-eye")])],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-menu",
                                            {
                                              attrs: { bottom: "", left: "" },
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
                                                                icon: ""
                                                              }
                                                            },
                                                            "v-btn",
                                                            attrs,
                                                            false
                                                          ),
                                                          on
                                                        ),
                                                        [
                                                          _c("v-icon", [
                                                            _vm._v(
                                                              "\n                                                        mdi-dots-vertical\n                                                    "
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
                                                [
                                                  _c(
                                                    "v-list-item",
                                                    {
                                                      attrs: {
                                                        link: "",
                                                        to:
                                                          "/checkin_requests/create"
                                                      }
                                                    },
                                                    [
                                                      _c("v-list-item-title", [
                                                        _vm._v(
                                                          "\n                                                        Checkin\n                                                    "
                                                        )
                                                      ])
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list-item",
                                                    {
                                                      attrs: {
                                                        link: "",
                                                        to:
                                                          "/checkout_requests/create"
                                                      }
                                                    },
                                                    [
                                                      _c("v-list-item-title", [
                                                        _vm._v(
                                                          "\n                                                        Checkout\n                                                    "
                                                        )
                                                      ])
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list-item",
                                                    {
                                                      attrs: { link: "" },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.dialogCategory = true
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("v-list-item-title", [
                                                        _vm._v(
                                                          "\n                                                        Category Filter\n                                                    "
                                                        )
                                                      ])
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list-item",
                                                    {
                                                      attrs: { link: "" },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.dialogStatus = true
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("v-list-item-title", [
                                                        _vm._v(
                                                          "\n                                                        Status Filter\n                                                    "
                                                        )
                                                      ])
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list-item",
                                                    {
                                                      attrs: { link: "" },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.dialogManufacturer = true
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("v-list-item-title", [
                                                        _vm._v(
                                                          "\n                                                        Manufacturer Filter\n                                                    "
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
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("XDataTable", {
                                    attrs: {
                                      showSelect: true,
                                      headers: [
                                        {
                                          text: "Description",
                                          value: "text"
                                        },
                                        { text: "Rating", value: "number" },
                                        { text: "Category", value: "text" }
                                      ],
                                      items: _vm.records
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
                                  _c(
                                    "v-row",
                                    [
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { staticClass: "d-flex justify-end" },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                icon: "",
                                                title: "Add New"
                                              }
                                            },
                                            [
                                              _c("v-icon", [_vm._v("mdi-plus")])
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                icon: "",
                                                title: "Update"
                                              }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v(
                                                  "mdi-square-edit-outline"
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
                                                icon: "",
                                                title: "Delete"
                                              }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-delete-outline")
                                              ])
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                icon: "",
                                                title: "View Data"
                                              }
                                            },
                                            [_c("v-icon", [_vm._v("mdi-eye")])],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-menu",
                                            {
                                              attrs: { bottom: "", left: "" },
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
                                                                icon: ""
                                                              }
                                                            },
                                                            "v-btn",
                                                            attrs,
                                                            false
                                                          ),
                                                          on
                                                        ),
                                                        [
                                                          _c("v-icon", [
                                                            _vm._v(
                                                              "\n                                                        mdi-dots-vertical\n                                                    "
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
                                                [
                                                  _c(
                                                    "v-list-item",
                                                    {
                                                      attrs: { link: "" },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.dialogCategory = true
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("v-list-item-title", [
                                                        _vm._v(
                                                          "\n                                                        Category Filter\n                                                    "
                                                        )
                                                      ])
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list-item",
                                                    {
                                                      attrs: { link: "" },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.dialogManufacturer = true
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("v-list-item-title", [
                                                        _vm._v(
                                                          "\n                                                        Manufacturer Filter\n                                                    "
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
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("XDataTable", {
                                    attrs: {
                                      showSelect: true,
                                      headers: [
                                        {
                                          text: "Description",
                                          value: "text"
                                        },
                                        {
                                          text: "Valid Until",
                                          value: "date"
                                        },
                                        { text: "Category", value: "text" }
                                      ],
                                      items: _vm.records
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
                                  _c(
                                    "v-row",
                                    [
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { staticClass: "d-flex justify-end" },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                icon: "",
                                                title: "Add New"
                                              }
                                            },
                                            [
                                              _c("v-icon", [_vm._v("mdi-plus")])
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                icon: "",
                                                title: "Update"
                                              }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v(
                                                  "mdi-square-edit-outline"
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
                                                icon: "",
                                                title: "Delete"
                                              }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-delete-outline")
                                              ])
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                icon: "",
                                                title: "View Data"
                                              }
                                            },
                                            [_c("v-icon", [_vm._v("mdi-eye")])],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-menu",
                                            {
                                              attrs: { bottom: "", left: "" },
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
                                                                icon: ""
                                                              }
                                                            },
                                                            "v-btn",
                                                            attrs,
                                                            false
                                                          ),
                                                          on
                                                        ),
                                                        [
                                                          _c("v-icon", [
                                                            _vm._v(
                                                              "\n                                                        mdi-dots-vertical\n                                                    "
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
                                                [
                                                  _c(
                                                    "v-list-item",
                                                    {
                                                      attrs: { link: "" },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.dialogType = true
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("v-list-item-title", [
                                                        _vm._v(
                                                          "\n                                                        Type Filter\n                                                    "
                                                        )
                                                      ])
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list-item",
                                                    {
                                                      attrs: { link: "" },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.dialogStatus = true
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("v-list-item-title", [
                                                        _vm._v(
                                                          "\n                                                        Status Filter\n                                                    "
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
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("XDataTable", {
                                    attrs: {
                                      showSelect: true,
                                      headers: [
                                        {
                                          text: "Date",
                                          value: "date"
                                        },
                                        {
                                          text: "Work Order No.",
                                          value: "number"
                                        },
                                        { text: "Type", value: "text" },
                                        { text: "Status", value: "text" }
                                      ],
                                      items: _vm.records
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
                                  _c(
                                    "v-row",
                                    [
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { staticClass: "d-flex justify-end" },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                icon: "",
                                                title: "Add New"
                                              }
                                            },
                                            [
                                              _c("v-icon", [_vm._v("mdi-plus")])
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                icon: "",
                                                title: "Update"
                                              }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v(
                                                  "mdi-square-edit-outline"
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
                                                icon: "",
                                                title: "Delete"
                                              }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-delete-outline")
                                              ])
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                icon: "",
                                                title: "View Data"
                                              }
                                            },
                                            [_c("v-icon", [_vm._v("mdi-eye")])],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("XDataTable", {
                                    attrs: {
                                      showSelect: true,
                                      headers: [
                                        {
                                          text: "Description",
                                          value: "text"
                                        },
                                        {
                                          text: "Rating",
                                          value: "number"
                                        }
                                      ],
                                      items: _vm.records
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
                                  _c("XDataTable", {
                                    attrs: {
                                      showSelect: true,
                                      headers: [
                                        {
                                          text: "Date",
                                          value: "date"
                                        },
                                        {
                                          text: "Activity",
                                          value: "text"
                                        }
                                      ],
                                      items: _vm.records
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
                                  _c(
                                    "v-row",
                                    [
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { staticClass: "d-flex justify-end" },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                icon: "",
                                                title: "Add New"
                                              }
                                            },
                                            [
                                              _c("v-icon", [_vm._v("mdi-plus")])
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                icon: "",
                                                title: "Update"
                                              }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v(
                                                  "mdi-square-edit-outline"
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
                                                icon: "",
                                                title: "Delete"
                                              }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-delete-outline")
                                              ])
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                icon: "",
                                                title: "View Data"
                                              }
                                            },
                                            [_c("v-icon", [_vm._v("mdi-eye")])],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-menu",
                                            {
                                              attrs: { bottom: "", left: "" },
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
                                                                icon: ""
                                                              }
                                                            },
                                                            "v-btn",
                                                            attrs,
                                                            false
                                                          ),
                                                          on
                                                        ),
                                                        [
                                                          _c("v-icon", [
                                                            _vm._v(
                                                              "\n                                                        mdi-dots-vertical\n                                                    "
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
                                                [
                                                  _c(
                                                    "v-list-item",
                                                    {
                                                      attrs: { link: "" },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.dialogCategory = true
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("v-list-item-title", [
                                                        _vm._v(
                                                          "\n                                                        Category Filter\n                                                    "
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
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("XDataTable", {
                                    attrs: {
                                      showSelect: true,
                                      headers: [
                                        {
                                          text: "Description",
                                          value: "text"
                                        },
                                        {
                                          text: "File Type",
                                          value: "text"
                                        }
                                      ],
                                      items: _vm.records
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
      _c("XDialog", {
        attrs: { dialog: _vm.dialogCategory, title: "Category" },
        on: {
          "close-dialog": function($event) {
            _vm.dialogCategory = false
          }
        }
      }),
      _vm._v(" "),
      _c("XDialog", {
        attrs: { dialog: _vm.dialogStatus, title: "Status" },
        on: {
          "close-dialog": function($event) {
            _vm.dialogStatus = false
          }
        }
      }),
      _vm._v(" "),
      _c("XDialog", {
        attrs: { dialog: _vm.dialogType, title: "Type" },
        on: {
          "close-dialog": function($event) {
            _vm.dialogType = false
          }
        }
      }),
      _vm._v(" "),
      _c("XDialog", {
        attrs: { dialog: _vm.dialogManufacturer, title: "Manufacturer" },
        on: {
          "close-dialog": function($event) {
            _vm.dialogManufacturer = false
          }
        }
      })
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

/***/ "./resources/js/pages/assets/Show.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/assets/Show.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_269f7ad0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=269f7ad0& */ "./resources/js/pages/assets/Show.vue?vue&type=template&id=269f7ad0&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/pages/assets/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_269f7ad0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_269f7ad0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/assets/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/assets/Show.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/assets/Show.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/assets/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/assets/Show.vue?vue&type=template&id=269f7ad0&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/assets/Show.vue?vue&type=template&id=269f7ad0& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_269f7ad0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=269f7ad0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/assets/Show.vue?vue&type=template&id=269f7ad0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_269f7ad0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_269f7ad0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);