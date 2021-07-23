(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/assets/Form.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/assets/Form.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    assetForm: {
      type: Object,
      "default": function _default() {
        return {
          code: "",
          slug: "",
          reference_no: "",
          asset_tag: "",
          serial_no: "",
          description: "",
          purchased_date: "",
          purchased_cost: "",
          warranty_start_date: "",
          warranty_end_date: "",
          sku: "",
          quantity: "",
          notes: "",
          asset_model_id: "",
          supplier_id: "",
          manufacturer_id: "",
          asset_category_id: "",
          assigned_to: "",
          location_id: "",
          asset_id: ""
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
          asset_tag: [],
          serial_no: [],
          description: [],
          purchased_date: [],
          purchased_cost: [],
          warranty_start_date: [],
          warranty_end_date: [],
          sku: [],
          quantity: [],
          notes: [],
          asset_model_id: [],
          supplier_id: [],
          manufacturer_id: [],
          asset_category_id: [],
          assigned_to: [],
          location_id: [],
          asset_id: []
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
          asset_tag: [],
          serial_no: [],
          description: [],
          purchased_date: [],
          purchased_cost: [],
          warranty_start_date: [],
          warranty_end_date: [],
          sku: [],
          quantity: [],
          notes: [],
          asset_model_id: [],
          supplier_id: [],
          manufacturer_id: [],
          asset_category_id: [],
          assigned_to: [],
          location_id: [],
          asset_id: []
        };
      }
    }
  },
  data: function data() {
    return {
      valid: false,
      form: {
        code: "",
        slug: "",
        reference_no: "",
        asset_tag: "",
        serial_no: "",
        description: "",
        purchased_date: "",
        purchased_cost: "",
        warranty_start_date: "",
        warranty_end_date: "",
        sku: "",
        quantity: "",
        notes: "",
        asset_model_id: "",
        supplier_id: "",
        manufacturer_id: "",
        asset_category_id: "",
        assigned_to: "",
        location_id: "",
        asset_id: ""
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

      console.log(this.form);

      if (!this.form.is_active) {
        this.form.is_active = false;
      }

      var warranty_dates = this.warranty_date.split("/"); // this.form.warranty_start_date = warranty_dates[0] ?? null;
      // this.form.warranty_end_date = warranty_dates[1] ?? null;

      this.form.warranty_start_date = null;
      this.form.warranty_end_date = null;
      this.$emit("on-save", this.form);
    }
  },
  computed: {
    warranty_date: function warranty_date() {
      return this.warranty_start_date + "/" + this.warranty_end_date;
    }
  },
  watch: {
    assetForm: {
      immediate: true,
      handler: function handler(newValue, oldValue) {
        this.form = newValue;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/assets/Form.vue?vue&type=template&id=570d7117&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/assets/Form.vue?vue&type=template&id=570d7117& ***!
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
            { attrs: { cols: "12", sm: "6", md: "4" } },
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
                              _c("v-text-field", {
                                attrs: {
                                  "error-messages": _vm.errors.reference_no[0],
                                  hint: "Ex. 000011",
                                  label: "Reference No.",
                                  outlined: "",
                                  clearable: ""
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
                                  "error-messages": _vm.errors.asset_tag[0],
                                  hint: "Ex. 000011",
                                  label: "Asset Tag",
                                  outlined: "",
                                  clearable: ""
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.asset_tag = []
                                  }
                                },
                                model: {
                                  value: _vm.form.asset_tag,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "asset_tag", $$v)
                                  },
                                  expression: "form.asset_tag"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  "error-messages": _vm.errors.serial_no[0],
                                  hint: "Ex. 000011",
                                  label: "Serial No.",
                                  outlined: "",
                                  clearable: ""
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.serial_no = []
                                  }
                                },
                                model: {
                                  value: _vm.form.serial_no,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "serial_no", $$v)
                                  },
                                  expression: "form.serial_no"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  "error-messages": _vm.errors.description[0],
                                  hint: "Ex. 000011",
                                  label: "Description",
                                  outlined: "",
                                  clearable: ""
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
                              _c("v-text-field", {
                                attrs: {
                                  "error-messages":
                                    _vm.errors.asset_category_id[0],
                                  hint: "Ex. 000011",
                                  label: "Category",
                                  outlined: "",
                                  clearable: ""
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.asset_category_id = []
                                  }
                                },
                                model: {
                                  value: _vm.form.asset_category_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "asset_category_id", $$v)
                                  },
                                  expression: "form.asset_category_id"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  "error-messages":
                                    _vm.errors.asset_model_id[0],
                                  hint: "Ex. 000011",
                                  label: "Model",
                                  outlined: "",
                                  clearable: ""
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.asset_model_id = []
                                  }
                                },
                                model: {
                                  value: _vm.form.asset_model_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "asset_model_id", $$v)
                                  },
                                  expression: "form.asset_model_id"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  "error-messages":
                                    _vm.errors.manufacturer_id[0],
                                  hint: "Ex. 000011",
                                  label: "Manufacturer",
                                  outlined: "",
                                  clearable: ""
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.manufacturer_id = []
                                  }
                                },
                                model: {
                                  value: _vm.form.manufacturer_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "manufacturer_id", $$v)
                                  },
                                  expression: "form.manufacturer_id"
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
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "6", md: "4" } },
            [
              _c(
                "v-card",
                { attrs: { flat: "" } },
                [
                  _c("v-card-title", [
                    _vm._v(
                      "\n                    Purchase Information\n                "
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
                              _c("v-text-field", {
                                attrs: {
                                  "error-messages": _vm.errors.supplier_id[0],
                                  hint: "Ex. 000011",
                                  label: "Supplier",
                                  outlined: "",
                                  clearable: ""
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.supplier_id = []
                                  }
                                },
                                model: {
                                  value: _vm.form.supplier_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "supplier_id", $$v)
                                  },
                                  expression: "form.supplier_id"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  "error-messages":
                                    _vm.errors.purchased_date[0],
                                  hint: "Ex. 000011",
                                  label: "Purchase Date",
                                  outlined: "",
                                  clearable: ""
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.purchased_date = []
                                  }
                                },
                                model: {
                                  value: _vm.form.purchased_date,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "purchased_date", $$v)
                                  },
                                  expression: "form.purchased_date"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  "error-messages":
                                    _vm.errors.purchased_cost[0],
                                  hint: "Ex. 000011",
                                  label: "Purchase Cost",
                                  outlined: "",
                                  clearable: ""
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.purchased_cost = []
                                  }
                                },
                                model: {
                                  value: _vm.form.purchased_cost,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "purchased_cost", $$v)
                                  },
                                  expression: "form.purchased_cost"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  hint: "Ex. 000011",
                                  label: "Received Date",
                                  outlined: "",
                                  clearable: ""
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  hint: "Ex. 000011",
                                  label: "Received By",
                                  outlined: "",
                                  clearable: ""
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  "error-messages":
                                    _vm.errors.warranty_start_date[0],
                                  hint: "Ex. 000011",
                                  label: "Warranty Date",
                                  outlined: "",
                                  clearable: ""
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.warranty_start_date = []
                                  }
                                },
                                model: {
                                  value: _vm.form.warranty_date,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "warranty_date", $$v)
                                  },
                                  expression: "form.warranty_date"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  "error-messages": _vm.errors.sku[0],
                                  hint: "Ex. 000011",
                                  label: "Stock Keeping Unit",
                                  outlined: "",
                                  clearable: ""
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.sku = []
                                  }
                                },
                                model: {
                                  value: _vm.form.sku,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "sku", $$v)
                                  },
                                  expression: "form.sku"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  "error-messages": _vm.errors.quantity[0],
                                  hint: "Ex. 000011",
                                  label: "Quantity",
                                  outlined: "",
                                  clearable: ""
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.quantity = []
                                  }
                                },
                                model: {
                                  value: _vm.form.quantity,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "quantity", $$v)
                                  },
                                  expression: "form.quantity"
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
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "6", md: "4" } },
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
                              _c("v-text-field", {
                                attrs: {
                                  "error-messages": _vm.errors.notes[0],
                                  hint: "Ex. 000011",
                                  label: "Notes",
                                  outlined: "",
                                  clearable: ""
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.notes = []
                                  }
                                },
                                model: {
                                  value: _vm.form.notes,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "notes", $$v)
                                  },
                                  expression: "form.notes"
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

/***/ "./resources/js/pages/assets/Form.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/assets/Form.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_570d7117___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=570d7117& */ "./resources/js/pages/assets/Form.vue?vue&type=template&id=570d7117&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/pages/assets/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_570d7117___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_570d7117___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/assets/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/assets/Form.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/assets/Form.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/assets/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/assets/Form.vue?vue&type=template&id=570d7117&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/assets/Form.vue?vue&type=template&id=570d7117& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_570d7117___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=570d7117& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/assets/Form.vue?vue&type=template&id=570d7117&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_570d7117___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_570d7117___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/AssetDataService.js":
/*!***************************************************!*\
  !*** ./resources/js/services/AssetDataService.js ***!
  \***************************************************/
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


var AssetDataService = /*#__PURE__*/function () {
  function AssetDataService() {
    _classCallCheck(this, AssetDataService);
  }

  _createClass(AssetDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/assets", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/assets/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/v1/assets", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/assets/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/assets/".concat(id), data);
    }
  }, {
    key: "deleteMany",
    value: function deleteMany(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/assets/multiple", data);
    }
  }]);

  return AssetDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new AssetDataService());

/***/ })

}]);