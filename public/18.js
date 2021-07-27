(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/licenses/Form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/licenses/Form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_selectors_AssetCategoryDialogSelector_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/selectors/AssetCategoryDialogSelector.vue */ "./resources/js/components/selectors/AssetCategoryDialogSelector.vue");
/* harmony import */ var _components_selectors_ManufacturerDialogSelector_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/selectors/ManufacturerDialogSelector.vue */ "./resources/js/components/selectors/ManufacturerDialogSelector.vue");
/* harmony import */ var _components_selectors_SupplierDialogSelector_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/selectors/SupplierDialogSelector.vue */ "./resources/js/components/selectors/SupplierDialogSelector.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    licenseForm: {
      type: Object,
      "default": function _default() {
        return {
          code: "",
          slug: "",
          reference_no: "",
          serial_no: "",
          description: "",
          purchased_date: "",
          purchased_cost: "",
          warranty_start_date: "",
          warranty_end_date: "",
          supplier: "",
          manufacturer: "",
          asset_category: "",
          assigned_user_id: "",
          assigned_location_id: "",
          assigned_asset_id: ""
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
          serial_no: [],
          description: [],
          purchased_date: [],
          purchased_cost: [],
          warranty_start_date: [],
          warranty_end_date: [],
          supplier_id: [],
          manufacturer_id: [],
          asset_category_id: [],
          assigned_user_id: [],
          assigned_location_id: [],
          assigned_asset_id: []
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
          serial_no: [],
          description: [],
          purchased_date: [],
          purchased_cost: [],
          warranty_start_date: [],
          warranty_end_date: [],
          supplier_id: [],
          manufacturer_id: [],
          asset_category_id: [],
          assigned_user_id: [],
          assigned_location_id: [],
          assigned_asset_id: []
        };
      }
    }
  },
  components: {
    AssetCategoryDialogSelector: _components_selectors_AssetCategoryDialogSelector_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ManufacturerDialogSelector: _components_selectors_ManufacturerDialogSelector_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    SupplierDialogSelector: _components_selectors_SupplierDialogSelector_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      dialogAssetCategory: false,
      dialogManufacturer: false,
      dialogSupplier: false,
      purchased_dateModal: false,
      valid: false,
      form: {
        code: "",
        slug: "",
        reference_no: "",
        serial_no: "",
        description: "",
        purchased_date: "",
        purchased_cost: "",
        warranty_start_date: "",
        warranty_end_date: "",
        supplier: "",
        manufacturer: "",
        asset_category: "",
        assigned_user_id: "",
        assigned_location_id: "",
        assigned_asset_id: ""
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

      var newForm = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.form), {
        asset_category_id: this.form.asset_category.id
      }), {
        manufacturer_id: this.form.manufacturer.id
      }), {
        supplier_id: this.form.supplier.id
      });

      if (!newForm.is_active) {
        newForm.is_active = false;
      }

      var warranty_dates = this.warranty_date.split("/"); // this.form.warranty_start_date = warranty_dates[0] ?? null;
      // this.form.warranty_end_date = warranty_dates[1] ?? null;

      newForm.warranty_start_date = null;
      newForm.warranty_end_date = null;
      this.$emit("on-save", newForm);
    },
    onSelectAssetCategory: function onSelectAssetCategory(e) {
      this.dialogAssetCategory = false;
      this.errors.asset_category_id = [];

      if (e == null || e == undefined) {
        this.form.asset_category = null;
        return;
      }

      this.form.asset_category = e[0];
      this.dialogAssetCategory = false;
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
    },
    onSelectSupplier: function onSelectSupplier(e) {
      this.dialogSupplier = false;
      this.errors.supplier_id = [];

      if (e == null || e == undefined) {
        this.form.supplier = null;
        return;
      }

      this.form.supplier = e[0];
      this.dialogSupplier = false;
    }
  },
  computed: {
    warranty_date: function warranty_date() {
      return this.warranty_start_date + "/" + this.warranty_end_date;
    },
    maxDate: function maxDate() {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
    }
  },
  watch: {
    licenseForm: {
      immediate: true,
      handler: function handler(newValue, oldValue) {
        this.form = newValue;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/licenses/Form.vue?vue&type=template&id=f2561d30&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/licenses/Form.vue?vue&type=template&id=f2561d30& ***!
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
            { attrs: { cols: "12", sm: "6" } },
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
                                staticClass:
                                  "d-flex justify-center align-center",
                                attrs: {
                                  value: _vm.form.asset_category
                                    ? _vm.form.asset_category.name
                                    : "",
                                  "error-messages":
                                    _vm.errors.asset_category_id,
                                  label: "Asset Category",
                                  readonly: "",
                                  outlined: ""
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.asset_category_id = []
                                  }
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "append",
                                    fn: function() {
                                      return [
                                        _c("AssetCategoryDialogSelector", {
                                          attrs: {
                                            selected: !_vm.form.asset_category
                                              ? []
                                              : [].concat(
                                                  _vm.form.asset_category
                                                ),
                                            dialogAssetCategory:
                                              _vm.dialogAssetCategory
                                          },
                                          on: {
                                            "close-dialog": function($event) {
                                              _vm.dialogAssetCategory = false
                                            },
                                            "on-select":
                                              _vm.onSelectAssetCategory
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
                                                          _vm.dialogAssetCategory = true
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
            { attrs: { cols: "12", sm: "6" } },
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
                                staticClass:
                                  "d-flex justify-center align-center",
                                attrs: {
                                  value: _vm.form.supplier
                                    ? _vm.form.supplier.name
                                    : "",
                                  "error-messages": _vm.errors.supplier_id,
                                  label: "Supplier",
                                  readonly: "",
                                  outlined: ""
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.supplier_id = []
                                  }
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "append",
                                    fn: function() {
                                      return [
                                        _c("SupplierDialogSelector", {
                                          attrs: {
                                            selected: !_vm.form.supplier
                                              ? []
                                              : [].concat(_vm.form.supplier),
                                            dialogSupplier: _vm.dialogSupplier
                                          },
                                          on: {
                                            "close-dialog": function($event) {
                                              _vm.dialogSupplier = false
                                            },
                                            "on-select": _vm.onSelectSupplier
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
                                                          _vm.dialogSupplier = true
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
                              }),
                              _vm._v(" "),
                              _c(
                                "v-dialog",
                                {
                                  ref: "dialog",
                                  attrs: {
                                    "return-value": _vm.form.purchased_date,
                                    persistent: "",
                                    width: "290px"
                                  },
                                  on: {
                                    "update:returnValue": function($event) {
                                      return _vm.$set(
                                        _vm.form,
                                        "purchased_date",
                                        $event
                                      )
                                    },
                                    "update:return-value": function($event) {
                                      return _vm.$set(
                                        _vm.form,
                                        "purchased_date",
                                        $event
                                      )
                                    }
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "activator",
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
                                                    label: "Purchased Date",
                                                    readonly: "",
                                                    outlined: "",
                                                    hint: "Ex. 2000-01-01",
                                                    "error-messages":
                                                      _vm.errors
                                                        .purchased_date[0],
                                                    clearable: ""
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      _vm.errors.purchased_date = []
                                                    }
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.form.purchased_date,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "purchased_date",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "form.purchased_date"
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
                                  ]),
                                  model: {
                                    value: _vm.purchased_dateModal,
                                    callback: function($$v) {
                                      _vm.purchased_dateModal = $$v
                                    },
                                    expression: "purchased_dateModal"
                                  }
                                },
                                [
                                  _vm._v(" "),
                                  _c(
                                    "v-date-picker",
                                    {
                                      attrs: {
                                        max: _vm.maxDate,
                                        scrollable: ""
                                      },
                                      on: {
                                        input: function($event) {
                                          _vm.errors.purchased_date = []
                                        }
                                      },
                                      model: {
                                        value: _vm.form.purchased_date,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "purchased_date",
                                            $$v
                                          )
                                        },
                                        expression: "form.purchased_date"
                                      }
                                    },
                                    [
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: { text: "", color: "primary" },
                                          on: {
                                            click: function($event) {
                                              _vm.purchased_dateModal = false
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        Cancel\n                                    "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: { text: "", color: "primary" },
                                          on: {
                                            click: function($event) {
                                              return _vm.$refs.dialog.save(
                                                _vm.form.purchased_date
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        OK\n                                    "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
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

/***/ "./resources/js/pages/licenses/Form.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/licenses/Form.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_f2561d30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=f2561d30& */ "./resources/js/pages/licenses/Form.vue?vue&type=template&id=f2561d30&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/pages/licenses/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_f2561d30___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_f2561d30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/licenses/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/licenses/Form.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/licenses/Form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/licenses/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/licenses/Form.vue?vue&type=template&id=f2561d30&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/licenses/Form.vue?vue&type=template&id=f2561d30& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_f2561d30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=f2561d30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/licenses/Form.vue?vue&type=template&id=f2561d30&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_f2561d30___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_f2561d30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/LicenseDataService.js":
/*!*****************************************************!*\
  !*** ./resources/js/services/LicenseDataService.js ***!
  \*****************************************************/
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


var LicenseDataService = /*#__PURE__*/function () {
  function LicenseDataService() {
    _classCallCheck(this, LicenseDataService);
  }

  _createClass(LicenseDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/licenses", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/licenses/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/v1/licenses", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/licenses/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/licenses/".concat(id), data);
    }
  }, {
    key: "deleteMany",
    value: function deleteMany(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/licenses/multiple", data);
    }
  }]);

  return LicenseDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new LicenseDataService());

/***/ })

}]);