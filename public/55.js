(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/employees/Form.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/employees/Form.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    employeeForm: {
      type: Object,
      "default": function _default() {
        return {
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
        };
      }
    },
    rules: {
      type: Object,
      "default": function _default() {
        return {
          code: [],
          slug: [],
          name: [],
          contact_person: [],
          phone1: [],
          phone2: [],
          email: [],
          website: [],
          fax: [],
          address: [],
          street: [],
          district: [],
          city: [],
          province: [],
          country: [],
          postal_code: [],
          is_active: [],
          notes: []
        };
      }
    },
    errors: {
      type: Object,
      "default": function _default() {
        return {
          code: [],
          slug: [],
          name: [],
          contact_person: [],
          phone1: [],
          phone2: [],
          email: [],
          website: [],
          fax: [],
          address: [],
          street: [],
          district: [],
          city: [],
          province: [],
          country: [],
          postal_code: [],
          is_active: [],
          notes: []
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

      this.$emit("on-save", this.form);
    }
  },
  watch: {
    employeeForm: {
      immediate: true,
      handler: function handler(newValue, oldValue) {
        this.form = newValue;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/employees/Form.vue?vue&type=template&id=607b4852&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/employees/Form.vue?vue&type=template&id=607b4852& ***!
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
            { attrs: { cols: "12", md: "4" } },
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
                                  label: "Name",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. XYZ Company",
                                  "error-messages": _vm.errors.name[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.name = []
                                  }
                                },
                                model: {
                                  value: _vm.form.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "name", $$v)
                                  },
                                  expression: "form.name"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "Email Address",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. sample@sample.com",
                                  "error-messages": _vm.errors.email[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.email = []
                                  }
                                },
                                model: {
                                  value: _vm.form.email,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "email", $$v)
                                  },
                                  expression: "form.email"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "Street",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. Balete Street",
                                  "error-messages": _vm.errors.street[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.street = []
                                  }
                                },
                                model: {
                                  value: _vm.form.street,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "street", $$v)
                                  },
                                  expression: "form.street"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "Fax",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. Barangay Poblacion",
                                  "error-messages": _vm.errors.district[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.district = []
                                  }
                                },
                                model: {
                                  value: _vm.form.district,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "district", $$v)
                                  },
                                  expression: "form.district"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "Contact Person",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. Juan Dela Cruz",
                                  "error-messages": _vm.errors.contact_person[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.contact_person = []
                                  }
                                },
                                model: {
                                  value: _vm.form.contact_person,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "contact_person", $$v)
                                  },
                                  expression: "form.contact_person"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "Phone No. (1)",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. 09XXXXXXXXX",
                                  "error-messages":
                                    _vm.errors.contact_person[0],
                                  type: "number"
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.contact_person = []
                                  }
                                },
                                model: {
                                  value: _vm.form.phone1,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "phone1", $$v)
                                  },
                                  expression: "form.phone1"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "Phone No. (2)",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. 09XXXXXXXXX",
                                  "error-messages":
                                    _vm.errors.contact_person[0],
                                  type: "number"
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.contact_person = []
                                  }
                                },
                                model: {
                                  value: _vm.form.phone2,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "phone2", $$v)
                                  },
                                  expression: "form.phone2"
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
            { attrs: { cols: "12", md: "4" } },
            [
              _c(
                "v-card",
                { attrs: { flat: "" } },
                [
                  _c("v-card-title", [
                    _vm._v(
                      "\n                    Address Information\n                "
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
                                  label: "Address",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. Block 16 Lot 4 XYZ Subdivision",
                                  "error-messages": _vm.errors.address[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.address = []
                                  }
                                },
                                model: {
                                  value: _vm.form.address,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "address", $$v)
                                  },
                                  expression: "form.address"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "Street",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. Balete Street",
                                  "error-messages": _vm.errors.street[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.street = []
                                  }
                                },
                                model: {
                                  value: _vm.form.street,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "street", $$v)
                                  },
                                  expression: "form.street"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "District",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. Barangay Poblacion",
                                  "error-messages": _vm.errors.district[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.district = []
                                  }
                                },
                                model: {
                                  value: _vm.form.district,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "district", $$v)
                                  },
                                  expression: "form.district"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "City",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. General Santos City",
                                  "error-messages": _vm.errors.city[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.city = []
                                  }
                                },
                                model: {
                                  value: _vm.form.city,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "city", $$v)
                                  },
                                  expression: "form.city"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "Province",
                                  outlined: "",
                                  clearable: "",
                                  hint: "South Cotabato",
                                  "error-messages": _vm.errors.province[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.province = []
                                  }
                                },
                                model: {
                                  value: _vm.form.province,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "province", $$v)
                                  },
                                  expression: "form.province"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-combobox", {
                                attrs: {
                                  label: "Country",
                                  outlined: "",
                                  clearable: "",
                                  items: ["Philippines"],
                                  "error-messages": _vm.errors.country[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.country = []
                                  }
                                },
                                model: {
                                  value: _vm.form.country,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "country", $$v)
                                  },
                                  expression: "form.country"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "Postal Code",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. 9500",
                                  type: "number"
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.postal_code = []
                                  }
                                },
                                model: {
                                  value: _vm.form.postal_code,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "postal_code", $$v)
                                  },
                                  expression: "form.postal_code"
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
            { attrs: { cols: "12", md: "4" } },
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
                                  label: "Notes",
                                  outlined: "",
                                  clearable: "",
                                  rows: "3",
                                  "error-messages": _vm.errors.notes[0]
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
                      _c(
                        "v-sheet",
                        { staticClass: "ml-4" },
                        [
                          _c("v-switch", {
                            attrs: { inset: "", label: "Active" },
                            model: {
                              value: _vm.form.is_active,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "is_active", $$v)
                              },
                              expression: "form.is_active"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
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

/***/ "./resources/js/pages/employees/Form.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/employees/Form.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_607b4852___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=607b4852& */ "./resources/js/pages/employees/Form.vue?vue&type=template&id=607b4852&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/pages/employees/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_607b4852___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_607b4852___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/employees/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/employees/Form.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/employees/Form.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/employees/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/employees/Form.vue?vue&type=template&id=607b4852&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/employees/Form.vue?vue&type=template&id=607b4852& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_607b4852___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=607b4852& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/employees/Form.vue?vue&type=template&id=607b4852&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_607b4852___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_607b4852___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/EmployeeDataService.js":
/*!******************************************************!*\
  !*** ./resources/js/services/EmployeeDataService.js ***!
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


var EmployeeDataService = /*#__PURE__*/function () {
  function EmployeeDataService() {
    _classCallCheck(this, EmployeeDataService);
  }

  _createClass(EmployeeDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/employees", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/employees/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/v1/employees", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/employees/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/employees/".concat(id), data);
    }
  }, {
    key: "deleteMany",
    value: function deleteMany(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/employees/multiple", data);
    }
  }]);

  return EmployeeDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new EmployeeDataService());

/***/ })

}]);