(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/departments/Form.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/departments/Form.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: {
      type: String,
      "default": ""
    },
    departmentForm: {
      type: Object,
      "default": function _default() {
        return {
          code: "",
          slug: "",
          name: "",
          is_active: true,
          manager_id: "",
          department_id: ""
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
          is_active: [],
          manager_id: [],
          department_id: []
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
          is_active: [],
          manager_id: [],
          department_id: []
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
        is_active: true,
        manager_id: "",
        department_id: ""
      }
    };
  },
  methods: {
    onReset: function onReset() {
      this.form = {
        code: "",
        slug: "",
        name: "",
        is_active: true,
        manager_id: "",
        department_id: ""
      };
    },
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
    },
    onCancel: function onCancel() {
      this.onReset();
      this.$emit("on-cancel");
    }
  },
  watch: {
    departmentForm: {
      immediate: true,
      handler: function handler(newValue, oldValue) {
        this.form = newValue;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/departments/Form.vue?vue&type=template&id=279e898a&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/departments/Form.vue?vue&type=template&id=279e898a& ***!
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
            [
              _c(
                "v-card",
                { attrs: { flat: "" } },
                [
                  _c("v-card-title", [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.title) +
                        "\n                "
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
                                  hint: "Ex. Sales And Marketing",
                                  "error-messages": _vm.errors.name[0]
                                },
                                on: {
                                  inputs: function($event) {
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
                                  label: "Manager",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. Juan Dela Cruz",
                                  "error-messages": _vm.errors.manager_id[0]
                                },
                                on: {
                                  inputs: function($event) {
                                    _vm.errors.manager_id = []
                                  }
                                },
                                model: {
                                  value: _vm.form.manager_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "manager_id", $$v)
                                  },
                                  expression: "form.manager_id"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "Parent Department",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. Sales And Marketing",
                                  "error-messages": _vm.errors.department_id[0]
                                },
                                on: {
                                  inputs: function($event) {
                                    _vm.errors.department_id = []
                                  }
                                },
                                model: {
                                  value: _vm.form.department_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "department_id", $$v)
                                  },
                                  expression: "form.department_id"
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
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
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
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass: "d-flex align-center",
                              attrs: { cols: "12", md: "6" }
                            },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "mr-2",
                                  attrs: { color: "primary", large: "" },
                                  on: { click: _vm.onCancel }
                                },
                                [
                                  _vm._v(
                                    "\n                                Cancel\n                            "
                                  )
                                ]
                              ),
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
                                    "\n                                Save\n                            "
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

/***/ "./resources/js/pages/departments/Form.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/departments/Form.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_279e898a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=279e898a& */ "./resources/js/pages/departments/Form.vue?vue&type=template&id=279e898a&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/pages/departments/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_279e898a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_279e898a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/departments/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/departments/Form.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/departments/Form.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/departments/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/departments/Form.vue?vue&type=template&id=279e898a&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/departments/Form.vue?vue&type=template&id=279e898a& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_279e898a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=279e898a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/departments/Form.vue?vue&type=template&id=279e898a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_279e898a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_279e898a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/DepartmentDataService.js":
/*!********************************************************!*\
  !*** ./resources/js/services/DepartmentDataService.js ***!
  \********************************************************/
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


var DepartmentDataService = /*#__PURE__*/function () {
  function DepartmentDataService() {
    _classCallCheck(this, DepartmentDataService);
  }

  _createClass(DepartmentDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/departments", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/departments/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/v1/departments", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/departments/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/departments/".concat(id), data);
    }
  }, {
    key: "deleteMany",
    value: function deleteMany(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/departments/multiple", data);
    }
  }]);

  return DepartmentDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new DepartmentDataService());

/***/ })

}]);