(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/CardSummary.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/CardSummary.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "card-summary",
  props: {
    title: {
      type: String,
      "default": ""
    },
    subtitle: {
      type: String,
      "default": ""
    }
  },
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/suppliers/Show.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/suppliers/Show.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_pages_CardSummary_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/pages/CardSummary.vue */ "./resources/js/components/pages/CardSummary.vue");
/* harmony import */ var _services_SupplierDataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/SupplierDataService */ "./resources/js/services/SupplierDataService.js");
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
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CardSummary: _components_pages_CardSummary_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      tab: null,
      items: ["details", "assets", "licenses", "System Activity Logs"],
      records: [],
      form: {
        code: "",
        slug: "",
        name: "",
        contact_person: "",
        phone1: "",
        phone2: "",
        email: "",
        website: "",
        fax: "",
        address: "",
        street: "",
        district: "",
        city: "",
        province: "",
        country: "",
        postal_code: "",
        is_active: true,
        notes: ""
      }
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      var data = {};
      _services_SupplierDataService__WEBPACK_IMPORTED_MODULE_1__["default"].show(this.$route.params.id, data).then(function (response) {
        console.log(response.data);
        _this.form = _objectSpread(_objectSpread({}, _this.form), response.data.data);
      })["catch"](function (error) {
        console.log(error.response);
        alert("An error has occurred.");

        _this.$router.push({
          name: "suppliers.index"
        }, function () {});
      });
    },
    onDelete: function onDelete() {
      var _this2 = this;

      if (!confirm("WARNING: Do you want to delete this record?")) {
        return;
      }

      _services_SupplierDataService__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](this.$route.params.id, {}).then(function (response) {
        console.log(response.data);
        alert(response.data.message);

        _this2.$router.push({
          name: "suppliers.index"
        });
      })["catch"](function (error) {
        console.log(error.response);
        alert("An error has occurred.");
      });
    }
  },
  created: function created() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/CardSummary.vue?vue&type=template&id=1e96e050&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/CardSummary.vue?vue&type=template&id=1e96e050& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    "v-card",
    [
      _vm._t("header"),
      _vm._v(" "),
      _c(
        "v-list-item",
        { attrs: { "two-line": "" } },
        [
          _c(
            "v-list-item-content",
            [
              _c("v-list-item-title", { staticClass: "text-h5" }, [
                _vm._v(
                  "\n                " + _vm._s(_vm.title) + "\n            "
                )
              ]),
              _vm._v(" "),
              _c("v-list-item-subtitle", [
                _vm._v(
                  "\n                " + _vm._s(_vm.subtitle) + "\n            "
                )
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", [_vm._t("body")], 2),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c("v-card-actions", [_vm._t("actions")], 2)
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/suppliers/Show.vue?vue&type=template&id=4ddeab2e&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/suppliers/Show.vue?vue&type=template&id=4ddeab2e& ***!
  \************************************************************************************************************************************************************************************************************/
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
      _c("page-header", {
        staticClass: "mb-4",
        attrs: { title: "Supplier Details", backButton: true }
      }),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "4" } },
            [
              _c("CardSummary", {
                attrs: { title: _vm.form.name, subtitle: "# " + _vm.form.code },
                scopedSlots: _vm._u([
                  {
                    key: "body",
                    fn: function() {
                      return [
                        _c("p", [_vm._v("Phone: " + _vm._s(_vm.form.phone1))]),
                        _vm._v(" "),
                        _vm.form.email
                          ? _c("p", [
                              _vm._v("Email: " + _vm._s(_vm.form.email))
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                        Address: " +
                              _vm._s(_vm.form.address) +
                              ", " +
                              _vm._s(_vm.form.city) +
                              ",\n                        " +
                              _vm._s(_vm.form.province) +
                              ", " +
                              _vm._s(_vm.form.postal_code) +
                              ",\n                        " +
                              _vm._s(_vm.form.country) +
                              "\n                    "
                          )
                        ])
                      ]
                    },
                    proxy: true
                  },
                  {
                    key: "actions",
                    fn: function() {
                      return [
                        _c(
                          "v-btn",
                          {
                            attrs: { icon: "" },
                            on: {
                              click: function($event) {
                                return _vm.$router.push(
                                  "/suppliers/" + _vm.$route.params.id + "/edit"
                                )
                              }
                            }
                          },
                          [
                            _c("v-icon", [
                              _vm._v(
                                "\n                            mdi-file-document-edit-outline\n                        "
                              )
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          { attrs: { icon: "" }, on: { click: _vm.onDelete } },
                          [
                            _c("v-icon", [
                              _vm._v(
                                "\n                            mdi-delete\n                        "
                              )
                            ])
                          ],
                          1
                        )
                      ]
                    },
                    proxy: true
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
                                            _c("tbody", [
                                              _c("tr", [
                                                _c("td", [_vm._v("Code")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(_vm.form.code))
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [_vm._v("Name")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(_vm.form.name))
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [
                                                  _vm._v("Contact Person")
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    "\n                                                    " +
                                                      _vm._s(
                                                        _vm.form.contact_person
                                                      ) +
                                                      "\n                                                "
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [_vm._v("Phone No.")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    "\n                                                    " +
                                                      _vm._s(_vm.form.phone1) +
                                                      "\n                                                    " +
                                                      _vm._s(
                                                        _vm.form.phone2
                                                          ? "; " +
                                                              _vm.form.phone2
                                                          : ""
                                                      ) +
                                                      "\n                                                "
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [
                                                  _vm._v("Email Address")
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(_vm.form.email))
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [_vm._v("Website")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(_vm.form.website)
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [_vm._v("Fax")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(_vm.form.fax))
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [_vm._v("Address")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(_vm.form.address)
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [_vm._v("Street")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(_vm.form.street)
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [_vm._v("District")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(_vm.form.district)
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [_vm._v("City")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(_vm.form.city))
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [_vm._v("Province")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(_vm.form.province)
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [_vm._v("Country")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(_vm.form.country)
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [
                                                  _vm._v("Postal Code")
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    "\n                                                    " +
                                                      _vm._s(
                                                        _vm.form.postal_code
                                                      ) +
                                                      "\n                                                "
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [_vm._v("Active")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    "\n                                                    " +
                                                      _vm._s(
                                                        _vm.form.is_active
                                                          ? "Yes"
                                                          : "No"
                                                      ) +
                                                      "\n                                                "
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [_vm._v("Created")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    "\n                                                    " +
                                                      _vm._s(
                                                        _vm._f("moment")(
                                                          _vm.form.created_at,
                                                          "LLLL"
                                                        )
                                                      ) +
                                                      "\n                                                "
                                                  )
                                                ])
                                              ])
                                            ])
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

/***/ "./resources/js/components/pages/CardSummary.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/pages/CardSummary.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardSummary_vue_vue_type_template_id_1e96e050___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardSummary.vue?vue&type=template&id=1e96e050& */ "./resources/js/components/pages/CardSummary.vue?vue&type=template&id=1e96e050&");
/* harmony import */ var _CardSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardSummary.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/CardSummary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardSummary_vue_vue_type_template_id_1e96e050___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardSummary_vue_vue_type_template_id_1e96e050___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/CardSummary.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/CardSummary.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/pages/CardSummary.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardSummary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/CardSummary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/CardSummary.vue?vue&type=template&id=1e96e050&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/pages/CardSummary.vue?vue&type=template&id=1e96e050& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSummary_vue_vue_type_template_id_1e96e050___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardSummary.vue?vue&type=template&id=1e96e050& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/CardSummary.vue?vue&type=template&id=1e96e050&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSummary_vue_vue_type_template_id_1e96e050___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSummary_vue_vue_type_template_id_1e96e050___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/suppliers/Show.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/suppliers/Show.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_4ddeab2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=4ddeab2e& */ "./resources/js/pages/suppliers/Show.vue?vue&type=template&id=4ddeab2e&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/pages/suppliers/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_4ddeab2e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_4ddeab2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/suppliers/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/suppliers/Show.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/suppliers/Show.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/suppliers/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/suppliers/Show.vue?vue&type=template&id=4ddeab2e&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/suppliers/Show.vue?vue&type=template&id=4ddeab2e& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_4ddeab2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=4ddeab2e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/suppliers/Show.vue?vue&type=template&id=4ddeab2e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_4ddeab2e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_4ddeab2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/SupplierDataService.js":
/*!******************************************************!*\
  !*** ./resources/js/services/SupplierDataService.js ***!
  \******************************************************/
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


var SupplierDataService = /*#__PURE__*/function () {
  function SupplierDataService() {
    _classCallCheck(this, SupplierDataService);
  }

  _createClass(SupplierDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/suppliers", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/suppliers/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/v1/suppliers", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/suppliers/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/suppliers/".concat(id), data);
    }
  }, {
    key: "deleteMany",
    value: function deleteMany(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/suppliers/multiple", data);
    }
  }]);

  return SupplierDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new SupplierDataService());

/***/ })

}]);