(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/agreements/Form.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/agreements/Form.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_X_DateRangePicker_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/X-DateRangePicker.vue */ "./resources/js/components/X-DateRangePicker.vue");
/* harmony import */ var _components_selectors_AssetDialogSelector_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/selectors/AssetDialogSelector.vue */ "./resources/js/components/selectors/AssetDialogSelector.vue");
/* harmony import */ var _components_selectors_CustomerDialogSelector_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/selectors/CustomerDialogSelector.vue */ "./resources/js/components/selectors/CustomerDialogSelector.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    agreementForm: {
      type: Object,
      "default": function _default() {
        return {
          code: "",
          slug: "",
          reference_no: "",
          description: "",
          type: "",
          start_date: "",
          end_date: "",
          remarks: "",
          asset: [],
          customer: null,
          date_range: []
        };
      }
    },
    rules: {
      type: Object,
      "default": function _default() {
        return {
          code: [],
          slug: [],
          reference_no: [],
          description: [],
          type: [],
          start_date: [],
          end_date: [],
          remarks: [],
          asset_id: [],
          customer_id: []
        };
      }
    },
    errors: {
      type: Object,
      "default": function _default() {
        return {
          code: [],
          slug: [],
          reference_no: [],
          description: [],
          type: [],
          start_date: [],
          end_date: [],
          remarks: [],
          asset_id: [],
          customer_id: []
        };
      }
    }
  },
  components: {
    XDateRangePicker: _components_X_DateRangePicker_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    AssetDialogSelector: _components_selectors_AssetDialogSelector_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    CustomerDialogSelector: _components_selectors_CustomerDialogSelector_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      valid: false,
      form: {
        code: "",
        slug: "",
        reference_no: "",
        description: "",
        type: "",
        start_date: "",
        end_date: "",
        remarks: "",
        asset: [],
        customer: null,
        date_range: []
      }
    };
  },
  methods: {
    onSave: function onSave() {
      if (!confirm("Do you want to save?")) {
        return;
      }

      if (!this.$refs.form.validate()) {
        alert("An error has occurred.");
        return;
      }

      var newForm = _objectSpread(_objectSpread(_objectSpread({}, this.form), {
        customer_id: this.form.customer ? this.form.customer.id : null
      }), {
        asset_id: this.form.asset ? this.form.asset.id : null
      });

      console.log(newForm);
      newForm.start_date = newForm.date_range ? newForm.date_range[0] : null;
      newForm.end_date = newForm.date_range ? newForm.date_range[1] : null;
      this.$emit("on-save", newForm);
    },
    updateDates: function updateDates(e) {
      this.form.date_range = e;
    },
    onSelectAsset: function onSelectAsset(e) {
      this.errors.asset_id = [];

      if (e == null || e == undefined) {
        this.form.asset = [];
        return;
      }

      this.form.asset = e[0];
    },
    onSelectUser: function onSelectUser(e) {
      this.errors.customer_id = [];

      if (e == null || e == undefined) {
        this.form.customer = null;
        return;
      }

      this.form.customer = e[0];
    }
  },
  watch: {
    agreementForm: {
      immediate: true,
      handler: function handler(newValue, oldValue) {
        this.form = newValue;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/agreements/Form.vue?vue&type=template&id=2d213f9e&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/agreements/Form.vue?vue&type=template&id=2d213f9e& ***!
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
    "v-form",
    {
      ref: "form",
      model: {
        value: _vm.valid,
        callback: function($$v) {
          _vm.valid = $$v
        },
        expression: "valid"
      }
    },
    [
      _c(
        "v-row",
        { staticClass: "d-flex justify-center" },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "6" } },
            [
              _c(
                "v-card",
                { attrs: { flat: "" } },
                [
                  _c("v-card-title", [
                    _vm._v(
                      "\n                    General Information\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-row",
                        { staticClass: "d-flex justify-center" },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-select", {
                                attrs: {
                                  items: ["contract", "warranty"],
                                  label: "Type",
                                  outlined: "",
                                  "error-messages": _vm.errors.type[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.type = []
                                  }
                                },
                                model: {
                                  value: _vm.form.type,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "type", $$v)
                                  },
                                  expression: "form.type"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "Reference No",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. #00000234",
                                  "error-messages": _vm.errors.reference_no[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.reference_no = []
                                  }
                                },
                                model: {
                                  value: _vm.form.reference_no,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "reference_no", $$v)
                                  },
                                  expression: "form.reference_no"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "Description",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. Warranty Agreement",
                                  "error-messages": _vm.errors.description[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.description = []
                                  }
                                },
                                model: {
                                  value: _vm.form.description,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "description", $$v)
                                  },
                                  expression: "form.description"
                                }
                              }),
                              _vm._v(" "),
                              _c("XDateRangePicker", {
                                ref: "dateRangePicker",
                                attrs: { dateRange: _vm.form.date_range },
                                on: { "on-change": _vm.updateDates },
                                scopedSlots: _vm._u([
                                  {
                                    key: "openDialog",
                                    fn: function(ref) {
                                      var on = ref.on
                                      var attrs = ref.attrs
                                      var dateRangeText = ref.dateRangeText
                                      return [
                                        _c(
                                          "v-text-field",
                                          _vm._g(
                                            _vm._b(
                                              {
                                                attrs: {
                                                  value: dateRangeText,
                                                  "error-messages":
                                                    _vm.errors.start_date,
                                                  label: "Date",
                                                  readonly: "",
                                                  outlined: "",
                                                  clearable: ""
                                                },
                                                on: {
                                                  input: function($event) {
                                                    _vm.errors.start_date = []
                                                  }
                                                },
                                                model: {
                                                  value: _vm.form.date_range,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.form,
                                                      "date_range",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "form.date_range"
                                                }
                                              },
                                              "v-text-field",
                                              attrs,
                                              false
                                            ),
                                            on
                                          )
                                        )
                                      ]
                                    }
                                  }
                                ])
                              }),
                              _vm._v(" "),
                              _c("CustomerDialogSelector", {
                                attrs: {
                                  selected: !_vm.form.customer
                                    ? []
                                    : [].concat(_vm.form.customer)
                                },
                                on: { "on-select": _vm.onSelectUser },
                                scopedSlots: _vm._u([
                                  {
                                    key: "openDialog",
                                    fn: function(ref) {
                                      var on = ref.on
                                      var attrs = ref.attrs
                                      return [
                                        _c(
                                          "v-text-field",
                                          _vm._g(
                                            _vm._b(
                                              {
                                                attrs: {
                                                  value: _vm.form.customer
                                                    ? _vm.form.customer
                                                        .full_name
                                                    : "",
                                                  label: "Customer",
                                                  outlined: "",
                                                  "error-messages":
                                                    _vm.errors.customer_id[0],
                                                  readonly: ""
                                                },
                                                on: {
                                                  input: function($event) {
                                                    _vm.errors.customer_id = []
                                                  }
                                                }
                                              },
                                              "v-text-field",
                                              attrs,
                                              false
                                            ),
                                            on
                                          )
                                        )
                                      ]
                                    }
                                  }
                                ])
                              }),
                              _vm._v(" "),
                              _c("AssetDialogSelector", {
                                attrs: {
                                  selected: !_vm.form.asset
                                    ? null
                                    : [].concat(_vm.form.asset)
                                },
                                on: { "on-select": _vm.onSelectAsset },
                                scopedSlots: _vm._u([
                                  {
                                    key: "openDialog",
                                    fn: function(ref) {
                                      var on = ref.on
                                      var attrs = ref.attrs
                                      return [
                                        _c(
                                          "v-text-field",
                                          _vm._g(
                                            _vm._b(
                                              {
                                                attrs: {
                                                  value: _vm.form.asset
                                                    ? _vm.form.asset.description
                                                    : "",
                                                  label: "Asset",
                                                  outlined: "",
                                                  "error-messages":
                                                    _vm.errors.asset_id[0],
                                                  readonly: ""
                                                },
                                                on: {
                                                  input: function($event) {
                                                    _vm.errors.asset_id = []
                                                  }
                                                }
                                              },
                                              "v-text-field",
                                              attrs,
                                              false
                                            ),
                                            on
                                          )
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
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", md: "6" } },
            [
              _c(
                "v-card",
                { attrs: { flat: "" } },
                [
                  _c("v-card-title", [
                    _vm._v(
                      "\n                    Other Information\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-row",
                        { staticClass: "d-flex justify-center" },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-textarea", {
                                attrs: {
                                  label: "Remarks",
                                  outlined: "",
                                  clearable: "",
                                  rows: "3",
                                  "error-messages": _vm.errors.remarks[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.remarks = []
                                  }
                                },
                                model: {
                                  value: _vm.form.remarks,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "remarks", $$v)
                                  },
                                  expression: "form.remarks"
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
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "mr-2",
                          attrs: { color: "primary", large: "" },
                          on: { click: _vm.onSave }
                        },
                        [
                          _vm._v(
                            "\n                        Save\n                    "
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/agreements/Form.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/agreements/Form.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_2d213f9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=2d213f9e& */ "./resources/js/pages/agreements/Form.vue?vue&type=template&id=2d213f9e&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/pages/agreements/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_2d213f9e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_2d213f9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/agreements/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/agreements/Form.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/agreements/Form.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/agreements/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/agreements/Form.vue?vue&type=template&id=2d213f9e&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/agreements/Form.vue?vue&type=template&id=2d213f9e& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_2d213f9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=2d213f9e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/agreements/Form.vue?vue&type=template&id=2d213f9e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_2d213f9e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_2d213f9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/AgreementDataService.js":
/*!*******************************************************!*\
  !*** ./resources/js/services/AgreementDataService.js ***!
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


var AgreementDataService = /*#__PURE__*/function () {
  function AgreementDataService() {
    _classCallCheck(this, AgreementDataService);
  }

  _createClass(AgreementDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/agreements", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/agreements/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/v1/agreements", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/agreements/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/agreements/".concat(id), data);
    }
  }, {
    key: "deleteMany",
    value: function deleteMany(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/agreements/multiple", data);
    }
  }]);

  return AgreementDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new AgreementDataService());

/***/ })

}]);