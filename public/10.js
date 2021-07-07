(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/dashboard/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "dashboard",
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      dashboard: {
        headers: [{
          title: "Total Assets",
          subtitle: "",
          body: "1,000,000.00",
          color: "white",
          dark: false,
          text_color: "black--text"
        }, {
          title: "Total Work Orders",
          subtitle: "",
          body: "100",
          color: "white",
          dark: false,
          text_color: "black--text"
        }, {
          title: "Pending Work Orders",
          subtitle: "",
          body: "100",
          color: "white",
          dark: true,
          text_color: "black--text"
        }, {
          title: "Scheduled Work Orders",
          subtitle: "",
          body: "100",
          color: "white",
          dark: false,
          text_color: "black--text"
        }]
      },
      series: {
        asset: [44, 55, 41, 17],
        work_order: [{
          data: [1380, 430, 540, 1100]
        }]
      },
      options: {
        asset: {
          labels: ["In Storage", "In Use", "In Maintenance", "Disposed"],
          legend: {
            show: false
          }
        },
        work_order: {
          chart: {
            type: "bar",
            toolbar: {
              show: false
            }
          },
          colors: ["#2E93fA", "#66DA26", "#546E7A", "#E91E63", "#FF9800"],
          plotOptions: {
            bar: {
              borderRadius: 8,
              horizontal: true
            }
          },
          xaxis: {
            categories: ["Installation", "Preventive Maintenance", "Corrective Maintenance", "Repair"]
          }
        }
      },
      headers: {
        activity: [{
          text: "Date",
          align: "start",
          value: "date"
        }, {
          text: "User",
          value: "user"
        }, {
          text: "Activity",
          value: "activity"
        }, {
          text: "",
          value: "actions"
        }]
      },
      activities: [{
        id: 1,
        date: "2021-01-01 11:30",
        user: "Erron Intila",
        activity: "Cancelled work order #00201"
      }, {
        id: 2,
        date: "2021-01-01 10:30",
        user: "Erron Intila",
        activity: "Created work order #00201"
      }, {
        id: 3,
        date: "2021-01-01 10:00",
        user: "Erron Intila",
        activity: "Updated account"
      }, {
        id: 4,
        date: "2021-01-01 09:30",
        user: "Erron Intila",
        activity: "Deleted asset"
      }, {
        id: 5,
        date: "2021-01-01 08:30",
        user: "Erron Intila",
        activity: "Created Asset"
      }]
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    user: "auth/user"
  }))
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/Index.vue?vue&type=style&index=0&id=f7b9f0c4&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/dashboard/Index.vue?vue&type=style&index=0&id=f7b9f0c4&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.header-title[data-v-f7b9f0c4] {\r\n    font-size: 1rem;\r\n    font-weight: 100;\n}\n.header-body[data-v-f7b9f0c4] {\r\n    font-size: 2rem;\r\n    font-weight: 100;\n}\na[data-v-f7b9f0c4] {\r\n    text-decoration: none;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/Index.vue?vue&type=style&index=0&id=f7b9f0c4&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/dashboard/Index.vue?vue&type=style&index=0&id=f7b9f0c4&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=f7b9f0c4&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/Index.vue?vue&type=style&index=0&id=f7b9f0c4&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/Index.vue?vue&type=template&id=f7b9f0c4&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/dashboard/Index.vue?vue&type=template&id=f7b9f0c4&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "page-title mb-4" }, [_vm._v("Dashboard")]),
      _vm._v(" "),
      _c(
        "v-row",
        _vm._l(_vm.dashboard.headers, function(item, index) {
          return _c(
            "v-col",
            { key: index, attrs: { cols: "12", md: "3" } },
            [
              _c("v-hover", {
                attrs: { "open-delay": "30" },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "default",
                      fn: function(ref) {
                        var hover = ref.hover
                        return [
                          _c(
                            "v-card",
                            {
                              staticClass: "rounded-lg",
                              class: { "on-hover": hover },
                              attrs: {
                                elevation: hover ? 10 : 3,
                                color: item.color,
                                dark: item.dark
                              }
                            },
                            [
                              _c(
                                "v-list-item",
                                { attrs: { "three-line": "" } },
                                [
                                  _c("v-list-item-content", [
                                    _c(
                                      "div",
                                      {
                                        class: "header-title " + item.text_color
                                      },
                                      [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(item.title) +
                                            "\n                            "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        class: "header-body " + item.text_color
                                      },
                                      [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(item.body) +
                                            "\n                            "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { class: "body-2 " + item.text_color },
                                      [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(item.subtitle) +
                                            "\n                            "
                                        )
                                      ]
                                    )
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]
                      }
                    }
                  ],
                  null,
                  true
                )
              })
            ],
            1
          )
        }),
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
              _c("v-hover", {
                attrs: { "open-delay": "30" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var hover = ref.hover
                      return [
                        _c(
                          "v-card",
                          {
                            staticClass: "rounded-lg",
                            class: { "on-hover": hover },
                            attrs: {
                              elevation: hover ? 10 : 3,
                              height: "25rem"
                            }
                          },
                          [
                            _c("v-card-title", [
                              _c("div", { staticClass: "page-title" }, [
                                _vm._v(
                                  "\n                            Assets by Status\n                        "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("v-card-text", [
                              _c(
                                "div",
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
                            ])
                          ],
                          1
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", md: "8" } },
            [
              _c("v-hover", {
                attrs: { "open-delay": "30" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var hover = ref.hover
                      return [
                        _c(
                          "v-card",
                          {
                            staticClass: "rounded-lg",
                            class: { "on-hover": hover },
                            attrs: {
                              elevation: hover ? 10 : 3,
                              height: "25rem"
                            }
                          },
                          [
                            _c("v-card-title", [
                              _c("div", { staticClass: "page-title" }, [
                                _vm._v(
                                  "\n                            Work Order History\n                        "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("v-card-text", [
                              _c(
                                "div",
                                [
                                  _c("VueApexCharts", {
                                    attrs: {
                                      type: "bar",
                                      height: "300",
                                      options: _vm.options.work_order,
                                      series: _vm.series.work_order
                                    }
                                  })
                                ],
                                1
                              )
                            ])
                          ],
                          1
                        )
                      ]
                    }
                  }
                ])
              })
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
            [
              _c("v-hover", {
                attrs: { "open-delay": "30" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var hover = ref.hover
                      return [
                        _c(
                          "v-card",
                          {
                            staticClass: "rounded-lg",
                            class: { "on-hover": hover },
                            attrs: { elevation: hover ? 10 : 3 }
                          },
                          [
                            _c(
                              "v-card-title",
                              { staticClass: "d-flex justify-space-between" },
                              [
                                _c("div", { staticClass: "page-title" }, [
                                  _vm._v(
                                    "\n                            Recent Activity\n                        "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  [
                                    _c(
                                      "v-menu",
                                      {
                                        attrs: { bottom: "", left: "" },
                                        scopedSlots: _vm._u(
                                          [
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
                                                        { attrs: { icon: "" } },
                                                        "v-btn",
                                                        attrs,
                                                        false
                                                      ),
                                                      on
                                                    ),
                                                    [
                                                      _c("v-icon", [
                                                        _vm._v(
                                                          "mdi-dots-vertical"
                                                        )
                                                      ])
                                                    ],
                                                    1
                                                  )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      },
                                      [
                                        _vm._v(" "),
                                        _c(
                                          "v-list",
                                          [
                                            _c(
                                              "v-list-item",
                                              { attrs: { link: "" } },
                                              [
                                                _c("v-list-item-title", [
                                                  _vm._v(
                                                    "\n                                            Today\n                                        "
                                                  )
                                                ])
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-item",
                                              { attrs: { link: "" } },
                                              [
                                                _c("v-list-item-title", [
                                                  _vm._v(
                                                    "\n                                            Yesterday\n                                        "
                                                  )
                                                ])
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-item",
                                              { attrs: { link: "" } },
                                              [
                                                _c("v-list-item-title", [
                                                  _vm._v(
                                                    "\n                                            This Week\n                                        "
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
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-card-text",
                              [
                                _c("v-data-table", {
                                  attrs: {
                                    headers: _vm.headers.activity,
                                    items: _vm.activities,
                                    "items-per-page": 5,
                                    "footer-props": {
                                      itemsPerPageOptions: [5],
                                      showFirstLastPage: true,
                                      firstIcon: "mdi-page-first",
                                      lastIcon: "mdi-page-last",
                                      prevIcon: "mdi-chevron-left",
                                      nextIcon: "mdi-chevron-right"
                                    }
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "item.actions",
                                        fn: function(ref) {
                                          var item = ref.item
                                          return [
                                            _c(
                                              "router-link",
                                              {
                                                attrs: {
                                                  to: {
                                                    name: "",
                                                    params: { id: item.id }
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                    More\n                                "
                                                )
                                              ]
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    true
                                  )
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    }
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/dashboard/Index.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/dashboard/Index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_f7b9f0c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=f7b9f0c4&scoped=true& */ "./resources/js/pages/dashboard/Index.vue?vue&type=template&id=f7b9f0c4&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/dashboard/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_id_f7b9f0c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=f7b9f0c4&scoped=true&lang=css& */ "./resources/js/pages/dashboard/Index.vue?vue&type=style&index=0&id=f7b9f0c4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_f7b9f0c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_f7b9f0c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f7b9f0c4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/dashboard/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/dashboard/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/dashboard/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/dashboard/Index.vue?vue&type=style&index=0&id=f7b9f0c4&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/pages/dashboard/Index.vue?vue&type=style&index=0&id=f7b9f0c4&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_f7b9f0c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=f7b9f0c4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/Index.vue?vue&type=style&index=0&id=f7b9f0c4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_f7b9f0c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_f7b9f0c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_f7b9f0c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_f7b9f0c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/dashboard/Index.vue?vue&type=template&id=f7b9f0c4&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/dashboard/Index.vue?vue&type=template&id=f7b9f0c4&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_f7b9f0c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=f7b9f0c4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/Index.vue?vue&type=template&id=f7b9f0c4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_f7b9f0c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_f7b9f0c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);