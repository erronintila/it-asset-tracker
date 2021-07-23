(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selectors/ManufacturerDialogSelector.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/selectors/ManufacturerDialogSelector.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_ManufacturerDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ManufacturerDataService */ "./resources/js/services/ManufacturerDataService.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "manufacturer-selector",
  props: {
    dialogManufacturer: {
      type: Boolean,
      "default": false
    },
    singleSelect: {
      type: Boolean,
      "default": true
    },
    selected: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      dialog: false,
      fullscreen: false,
      tableOptions: {
        options: {
          sortBy: ["code"],
          sortDesc: [false],
          page: 1,
          itemsPerPage: 5
        },
        loading: false,
        itemsPerPageOptions: [5, 10, 20],
        serverItemsLength: 0,
        headers: [{
          text: "Code",
          value: "code"
        }, {
          text: "Name",
          value: "name"
        }, {
          text: "Manager",
          value: "manager_id"
        }]
      },
      search: "",
      items: [],
      selectedItems: []
    };
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
        var search = _this.search; // let status = this.status;

        var data = {
          params: {
            sortBy: sortBy[0],
            sortType: sortDesc[0] ? "desc" : "asc",
            page: page,
            itemsPerPage: itemsPerPage,
            search: search // status: status

          }
        };
        _services_ManufacturerDataService__WEBPACK_IMPORTED_MODULE_0__["default"].getAll(data).then(function (response) {
          console.log(response.data);
          _this.items = response.data.data.data;
          _this.tableOptions.serverItemsLength = response.data.data.total;
          _this.tableOptions.loading = false;
          resolve();
        })["catch"](function (error) {
          _this.tableOptions.loading = false;
          console.log(error);
          console.log(error.response);
          reject();
        });
      });
    },
    onSelect: function onSelect() {
      if (this.selectedItems.length == 0) {
        return;
      } else {
        this.$emit("on-select", this.selectedItems);
      }
    },
    closeDialog: function closeDialog() {
      this.$emit("close-dialog");
    }
  },
  computed: {
    params: function params(nv) {
      return _objectSpread({}, this.tableOptions.options);
    }
  },
  watch: {
    search: function search() {
      if (!this.search) {
        this.getData();
      }
    },
    params: {
      immediate: true,
      deep: true,
      handler: function handler() {
        this.getData();
      }
    },
    selected: {
      deep: true,
      immediate: true,
      handler: function handler(newValue) {
        this.selectedItems = newValue;
      }
    },
    dialogManufacturer: {
      immediate: true,
      handler: function handler(newValue) {
        this.dialog = newValue;

        if (newValue) {
          this.getData();
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/asset_models/Form.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/asset_models/Form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_selectors_ManufacturerDialogSelector_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/selectors/ManufacturerDialogSelector.vue */ "./resources/js/components/selectors/ManufacturerDialogSelector.vue");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    asset_modelForm: {
      type: Object,
      "default": function _default() {
        return {
          code: "",
          slug: "",
          name: "",
          model_no: "",
          is_active: true,
          manufacturer: ""
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
          model_no: [],
          is_active: [],
          manufacturer_id: []
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
          model_no: [],
          is_active: [],
          manufacturer_id: []
        };
      }
    }
  },
  components: {
    ManufacturerDialogSelector: _components_selectors_ManufacturerDialogSelector_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      dialogManufacturer: false,
      valid: false,
      form: {
        code: "",
        slug: "",
        name: "",
        model_no: "",
        is_active: true,
        manufacturer: ""
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

      var newForm = _objectSpread(_objectSpread({}, this.form), {
        manufacturer_id: this.form.manufacturer.id
      });

      if (!newForm.is_active) {
        newForm.is_active = false;
      }

      this.$emit("on-save", newForm);
    },
    onSelectManufacturer: function onSelectManufacturer(e) {
      this.dialogManufacturer = false;
      this.errors.manufacturer_id = [];

      if (e == null || e == undefined) {
        this.form.manufacturer = null;
        return;
      }

      this.form.manufacturer = e[0];
      this.dialogManufacturer = false;
    }
  },
  watch: {
    asset_modelForm: {
      immediate: true,
      handler: function handler(newValue, oldValue) {
        this.form = newValue;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selectors/ManufacturerDialogSelector.vue?vue&type=template&id=3d7c8144&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/selectors/ManufacturerDialogSelector.vue?vue&type=template&id=3d7c8144& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
        "v-dialog",
        {
          attrs: {
            fullscreen: _vm.fullscreen,
            persistent: "",
            "max-width": "60em"
          },
          scopedSlots: _vm._u(
            [
              {
                key: "activator",
                fn: function(ref) {
                  var on = ref.on
                  var attrs = ref.attrs
                  return [
                    _vm._t("openDialog", null, null, {
                      attrs: attrs,
                      on: on,
                      selectedItems: _vm.selectedItems
                    })
                  ]
                }
              }
            ],
            null,
            true
          ),
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _vm._v(" "),
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                { staticClass: "pa-0" },
                [
                  _c(
                    "v-toolbar",
                    { attrs: { flat: "" } },
                    [
                      _c("v-toolbar-title", [_vm._v("Manufacturers")]),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { attrs: { icon: "" }, on: { click: _vm.closeDialog } },
                        [
                          _c("v-icon", [
                            _vm._v(
                              "\n                            mdi-close\n                        "
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
                "v-card-text",
                [
                  _c(
                    "div",
                    {
                      staticClass: "d-flex justify-space-between align-center"
                    },
                    [
                      _c("div", [_vm._v("All Items")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("v-text-field", {
                            staticClass: "hidden-sm-and-down",
                            attrs: { label: "Search", clearable: "" },
                            on: {
                              keyup: function($event) {
                                if (
                                  !$event.type.indexOf("key") &&
                                  _vm._k(
                                    $event.keyCode,
                                    "enter",
                                    13,
                                    $event.key,
                                    "Enter"
                                  )
                                ) {
                                  return null
                                }
                                return _vm.getData.apply(null, arguments)
                              }
                            },
                            model: {
                              value: _vm.search,
                              callback: function($$v) {
                                _vm.search = $$v
                              },
                              expression: "search"
                            }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-data-table", {
                    attrs: {
                      "show-select": "",
                      "item-key": "id",
                      "single-select": _vm.singleSelect,
                      headers: _vm.tableOptions.headers,
                      items: _vm.items,
                      loading: _vm.tableOptions.loading,
                      options: _vm.tableOptions.options,
                      "server-items-length": _vm.tableOptions.serverItemsLength,
                      "footer-props": {
                        itemsPerPageOptions:
                          _vm.tableOptions.itemsPerPageOptions,
                        showFirstLastPage: true,
                        firstIcon: "mdi-page-first",
                        lastIcon: "mdi-page-last",
                        prevIcon: "mdi-chevron-left",
                        nextIcon: "mdi-chevron-right"
                      }
                    },
                    on: {
                      "update:options": function($event) {
                        return _vm.$set(_vm.tableOptions, "options", $event)
                      }
                    },
                    model: {
                      value: _vm.selectedItems,
                      callback: function($$v) {
                        _vm.selectedItems = $$v
                      },
                      expression: "selectedItems"
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
                        { staticClass: "mx-2", on: { click: _vm.onSelect } },
                        [
                          _vm._v(
                            "\n                        OK\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { staticClass: "mx-2", on: { click: _vm.closeDialog } },
                        [
                          _vm._v(
                            "\n                        Close\n                    "
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/asset_models/Form.vue?vue&type=template&id=11f34781&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/asset_models/Form.vue?vue&type=template&id=11f34781& ***!
  \***************************************************************************************************************************************************************************************************************/
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
                              _c("v-text-field", {
                                attrs: {
                                  label: "Name",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. Ipad",
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
                                  label: "Model No.",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. #18297391",
                                  "error-messages": _vm.errors.model_no[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.model_no = []
                                  }
                                },
                                model: {
                                  value: _vm.form.model_no,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "model_no", $$v)
                                  },
                                  expression: "form.model_no"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticClass:
                                  "d-flex justify-center align-center",
                                attrs: {
                                  value: _vm.form.manufacturer
                                    ? _vm.form.manufacturer.name
                                    : "",
                                  "error-messages": _vm.errors.manufacturer_id,
                                  label: "Manufacturer",
                                  readonly: "",
                                  outlined: ""
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.manufacturer_id = []
                                  }
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "append",
                                    fn: function() {
                                      return [
                                        _c("ManufacturerDialogSelector", {
                                          attrs: {
                                            selected: !_vm.form.manufacturer
                                              ? []
                                              : [].concat(
                                                  _vm.form.manufacturer
                                                ),
                                            dialogManufacturer:
                                              _vm.dialogManufacturer
                                          },
                                          on: {
                                            "close-dialog": function($event) {
                                              _vm.dialogManufacturer = false
                                            },
                                            "on-select":
                                              _vm.onSelectManufacturer
                                          },
                                          scopedSlots: _vm._u([
                                            {
                                              key: "openDialog",
                                              fn: function() {
                                                return [
                                                  _c(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        color: "primary",
                                                        icon: ""
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.dialogManufacturer = true
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        { attrs: { dark: "" } },
                                                        [
                                                          _vm._v(
                                                            "\n                                                    mdi-magnify\n                                                "
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
                                              },
                                              proxy: true
                                            }
                                          ])
                                        })
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

/***/ "./resources/js/components/selectors/ManufacturerDialogSelector.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/selectors/ManufacturerDialogSelector.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ManufacturerDialogSelector_vue_vue_type_template_id_3d7c8144___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ManufacturerDialogSelector.vue?vue&type=template&id=3d7c8144& */ "./resources/js/components/selectors/ManufacturerDialogSelector.vue?vue&type=template&id=3d7c8144&");
/* harmony import */ var _ManufacturerDialogSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ManufacturerDialogSelector.vue?vue&type=script&lang=js& */ "./resources/js/components/selectors/ManufacturerDialogSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ManufacturerDialogSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ManufacturerDialogSelector_vue_vue_type_template_id_3d7c8144___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ManufacturerDialogSelector_vue_vue_type_template_id_3d7c8144___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/selectors/ManufacturerDialogSelector.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/selectors/ManufacturerDialogSelector.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/selectors/ManufacturerDialogSelector.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManufacturerDialogSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ManufacturerDialogSelector.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selectors/ManufacturerDialogSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManufacturerDialogSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/selectors/ManufacturerDialogSelector.vue?vue&type=template&id=3d7c8144&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/selectors/ManufacturerDialogSelector.vue?vue&type=template&id=3d7c8144& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManufacturerDialogSelector_vue_vue_type_template_id_3d7c8144___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ManufacturerDialogSelector.vue?vue&type=template&id=3d7c8144& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selectors/ManufacturerDialogSelector.vue?vue&type=template&id=3d7c8144&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManufacturerDialogSelector_vue_vue_type_template_id_3d7c8144___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManufacturerDialogSelector_vue_vue_type_template_id_3d7c8144___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/asset_models/Form.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/asset_models/Form.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_11f34781___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=11f34781& */ "./resources/js/pages/asset_models/Form.vue?vue&type=template&id=11f34781&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/pages/asset_models/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_11f34781___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_11f34781___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/asset_models/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/asset_models/Form.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/asset_models/Form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/asset_models/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/asset_models/Form.vue?vue&type=template&id=11f34781&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/asset_models/Form.vue?vue&type=template&id=11f34781& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_11f34781___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=11f34781& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/asset_models/Form.vue?vue&type=template&id=11f34781&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_11f34781___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_11f34781___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/AssetModelDataService.js":
/*!********************************************************!*\
  !*** ./resources/js/services/AssetModelDataService.js ***!
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


var AssetModelDataService = /*#__PURE__*/function () {
  function AssetModelDataService() {
    _classCallCheck(this, AssetModelDataService);
  }

  _createClass(AssetModelDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/asset_models", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/asset_models/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/v1/asset_models", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/asset_models/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/asset_models/".concat(id), data);
    }
  }, {
    key: "deleteMany",
    value: function deleteMany(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/asset_models/multiple", data);
    }
  }]);

  return AssetModelDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new AssetModelDataService());

/***/ }),

/***/ "./resources/js/services/ManufacturerDataService.js":
/*!**********************************************************!*\
  !*** ./resources/js/services/ManufacturerDataService.js ***!
  \**********************************************************/
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


var ManufacturerDataService = /*#__PURE__*/function () {
  function ManufacturerDataService() {
    _classCallCheck(this, ManufacturerDataService);
  }

  _createClass(ManufacturerDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/manufacturers", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/manufacturers/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/v1/manufacturers", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/manufacturers/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/manufacturers/".concat(id), data);
    }
  }, {
    key: "deleteMany",
    value: function deleteMany(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/manufacturers/multiple", data);
    }
  }]);

  return ManufacturerDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ManufacturerDataService());

/***/ })

}]);