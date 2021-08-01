(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selectors/AssetModelDialogSelector.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/selectors/AssetModelDialogSelector.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_AssetModelDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/AssetModelDataService */ "./resources/js/services/AssetModelDataService.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "asset-model-selector",
  props: {
    dialogAssetModel: {
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
          text: "Model No.",
          value: "model_no"
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
        _services_AssetModelDataService__WEBPACK_IMPORTED_MODULE_0__["default"].getAll(data).then(function (response) {
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
        this.$refs.dialog.save(this.selectedItems);
        this.$emit("on-select", this.selectedItems);
      }
    },
    closeDialog: function closeDialog() {
      this.dialog = false;
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
    dialogAssetModel: {
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/assets/Form.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/assets/Form.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_selectors_AssetModelDialogSelector_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/selectors/AssetModelDialogSelector.vue */ "./resources/js/components/selectors/AssetModelDialogSelector.vue");
/* harmony import */ var _components_selectors_AssetCategoryDialogSelector_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/selectors/AssetCategoryDialogSelector.vue */ "./resources/js/components/selectors/AssetCategoryDialogSelector.vue");
/* harmony import */ var _components_selectors_ManufacturerDialogSelector_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/selectors/ManufacturerDialogSelector.vue */ "./resources/js/components/selectors/ManufacturerDialogSelector.vue");
/* harmony import */ var _components_selectors_SupplierDialogSelector_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/selectors/SupplierDialogSelector.vue */ "./resources/js/components/selectors/SupplierDialogSelector.vue");
/* harmony import */ var _components_X_DateRangePicker_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/X-DateRangePicker.vue */ "./resources/js/components/X-DateRangePicker.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
          received_date: "",
          received_by: "",
          sku: "",
          quantity: "",
          notes: "",
          asset_model: "",
          supplier: "",
          manufacturer: "",
          asset_category: "",
          assigned_user_id: "",
          assigned_location_id: "",
          assigned_asset_id: "",
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
          asset_tag: [],
          serial_no: [],
          description: [],
          purchased_date: [],
          purchased_cost: [],
          warranty_start_date: [],
          warranty_end_date: [],
          received_date: [],
          received_by: [],
          sku: [],
          quantity: [],
          notes: [],
          asset_model_id: [],
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
          asset_tag: [],
          serial_no: [],
          description: [],
          purchased_date: [],
          purchased_cost: [],
          warranty_start_date: [],
          warranty_end_date: [],
          received_date: [],
          received_by: [],
          sku: [],
          quantity: [],
          notes: [],
          asset_model_id: [],
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
  data: function data() {
    return {
      dialogAssetModel: false,
      dialogAssetCategory: false,
      dialogManufacturer: false,
      dialogSupplier: false,
      purchased_dateModal: false,
      received_dateModal: false,
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
        received_date: "",
        received_by: "",
        sku: "",
        quantity: "",
        notes: "",
        asset_model: "",
        supplier: "",
        manufacturer: "",
        asset_category: "",
        assigned_user_id: "",
        assigned_location_id: "",
        assigned_asset_id: "",
        date_range: []
      }
    };
  },
  components: {
    AssetModelDialogSelector: _components_selectors_AssetModelDialogSelector_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AssetCategoryDialogSelector: _components_selectors_AssetCategoryDialogSelector_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ManufacturerDialogSelector: _components_selectors_ManufacturerDialogSelector_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    SupplierDialogSelector: _components_selectors_SupplierDialogSelector_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    XDateRangePicker: _components_X_DateRangePicker_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
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

      var newForm = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.form), {
        asset_model_id: this.form.asset_model.id
      }), {
        asset_category_id: this.form.asset_category.id
      }), {
        manufacturer_id: this.form.manufacturer.id
      }), {
        supplier_id: this.form.supplier.id
      });

      if (!newForm.is_active) {
        newForm.is_active = false;
      }

      newForm.warranty_start_date = newForm.date_range ? newForm.date_range[0] : null;
      newForm.warranty_end_date = newForm.date_range ? newForm.date_range[1] : null;
      this.$emit("on-save", newForm);
    },
    onSelectAssetModel: function onSelectAssetModel(e) {
      this.dialogAssetModel = false;
      this.errors.asset_model_id = [];

      if (e == null || e == undefined) {
        this.form.asset_model = null;
        return;
      }

      this.form.asset_model = e[0];
      this.dialogAssetModel = false;
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
    },
    updateDates: function updateDates(e) {
      this.form.date_range = e;
    }
  },
  computed: {
    warranty_date: function warranty_date() {
      return this.warranty_start_date + "/" + this.warranty_end_date;
    },
    maxDate: function maxDate() {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
    },
    formattedDateRange: function formattedDateRange() {
      var start_date = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.form.date_range[0]).format("MMM DD, YYYY");
      var end_date = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.form.date_range[1]).format("MMM DD, YYYY");

      if (JSON.stringify(start_date) == JSON.stringify(end_date)) {
        return start_date;
      }

      if (JSON.stringify(end_date) == null) {
        return start_date;
      }

      return "".concat(start_date, " ~ ").concat(end_date);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selectors/AssetModelDialogSelector.vue?vue&type=template&id=498f0b26&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/selectors/AssetModelDialogSelector.vue?vue&type=template&id=498f0b26& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
          ref: "dialog",
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
                      _c("v-toolbar-title", [_vm._v("Asset Models")]),
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
                              _c("AssetCategoryDialogSelector", {
                                attrs: {
                                  selected: !_vm.form.asset_category
                                    ? []
                                    : [].concat(_vm.form.asset_category),
                                  dialogAssetCategory: _vm.dialogAssetCategory
                                },
                                on: {
                                  "close-dialog": function($event) {
                                    _vm.dialogAssetCategory = false
                                  },
                                  "on-select": _vm.onSelectAssetCategory
                                },
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
                                                staticClass:
                                                  "d-flex justify-center align-center",
                                                attrs: {
                                                  value: _vm.form.asset_category
                                                    ? _vm.form.asset_category
                                                        .name
                                                    : "",
                                                  "error-messages":
                                                    _vm.errors
                                                      .asset_category_id,
                                                  label: "Asset Category",
                                                  readonly: "",
                                                  outlined: ""
                                                },
                                                on: {
                                                  input: function($event) {
                                                    _vm.errors.asset_category_id = []
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
                              _c("AssetModelDialogSelector", {
                                attrs: {
                                  selected: !_vm.form.asset_model
                                    ? []
                                    : [].concat(_vm.form.asset_model),
                                  dialogAssetModel: _vm.dialogAssetModel
                                },
                                on: {
                                  "close-dialog": function($event) {
                                    _vm.dialogAssetModel = false
                                  },
                                  "on-select": _vm.onSelectAssetModel
                                },
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
                                                staticClass:
                                                  "d-flex justify-center align-center",
                                                attrs: {
                                                  value: _vm.form.asset_model
                                                    ? _vm.form.asset_model.name
                                                    : "",
                                                  "error-messages":
                                                    _vm.errors.asset_model_id,
                                                  label: "Asset Model",
                                                  readonly: "",
                                                  outlined: ""
                                                },
                                                on: {
                                                  input: function($event) {
                                                    _vm.errors.asset_model_id = []
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
                              _c("ManufacturerDialogSelector", {
                                attrs: {
                                  selected: !_vm.form.manufacturer
                                    ? []
                                    : [].concat(_vm.form.manufacturer),
                                  dialogManufacturer: _vm.dialogManufacturer
                                },
                                on: {
                                  "close-dialog": function($event) {
                                    _vm.dialogManufacturer = false
                                  },
                                  "on-select": _vm.onSelectManufacturer
                                },
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
                                                staticClass:
                                                  "d-flex justify-center align-center",
                                                attrs: {
                                                  value: _vm.form.manufacturer
                                                    ? _vm.form.manufacturer.name
                                                    : "",
                                                  "error-messages":
                                                    _vm.errors.manufacturer_id,
                                                  label: "Manufacturer",
                                                  readonly: "",
                                                  outlined: ""
                                                },
                                                on: {
                                                  input: function($event) {
                                                    _vm.errors.manufacturer_id = []
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
                                    fn: function(ref) {
                                      var on = ref.on
                                      var attrs = ref.attrs
                                      return [
                                        _c(
                                          "v-text-field",
                                          _vm._g(
                                            _vm._b(
                                              {
                                                staticClass:
                                                  "d-flex justify-center align-center",
                                                attrs: {
                                                  value: _vm.form.supplier
                                                    ? _vm.form.supplier.name
                                                    : "",
                                                  "error-messages":
                                                    _vm.errors.supplier_id,
                                                  label: "Supplier",
                                                  readonly: "",
                                                  outlined: ""
                                                },
                                                on: {
                                                  input: function($event) {
                                                    _vm.errors.supplier_id = []
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
                              _c(
                                "v-dialog",
                                {
                                  ref: "dialogPurchasedDate",
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
                                              return _vm.$refs.dialogPurchasedDate.save(
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
                              _c(
                                "v-dialog",
                                {
                                  ref: "dialogReceivedDate",
                                  attrs: {
                                    "return-value": _vm.form.received_date,
                                    persistent: "",
                                    width: "290px"
                                  },
                                  on: {
                                    "update:returnValue": function($event) {
                                      return _vm.$set(
                                        _vm.form,
                                        "received_date",
                                        $event
                                      )
                                    },
                                    "update:return-value": function($event) {
                                      return _vm.$set(
                                        _vm.form,
                                        "received_date",
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
                                                    label: "Received Date",
                                                    readonly: "",
                                                    outlined: "",
                                                    hint: "Ex. 2000-01-01",
                                                    "error-messages":
                                                      _vm.errors
                                                        .received_date[0],
                                                    clearable: ""
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      _vm.errors.received_date = []
                                                    }
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.form.received_date,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "received_date",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "form.received_date"
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
                                    value: _vm.received_dateModal,
                                    callback: function($$v) {
                                      _vm.received_dateModal = $$v
                                    },
                                    expression: "received_dateModal"
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
                                          _vm.errors.received_date = []
                                        }
                                      },
                                      model: {
                                        value: _vm.form.received_date,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "received_date",
                                            $$v
                                          )
                                        },
                                        expression: "form.received_date"
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
                                              _vm.received_dateModal = false
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
                                              return _vm.$refs.dialogReceivedDate.save(
                                                _vm.form.received_date
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
                                  "error-messages": _vm.errors.received_by[0],
                                  hint: "Ex. Juan Dela Cruz",
                                  label: "Received By",
                                  outlined: "",
                                  clearable: ""
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.received_by = []
                                  }
                                },
                                model: {
                                  value: _vm.form.received_by,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "received_by", $$v)
                                  },
                                  expression: "form.received_by"
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
                                                    _vm.errors
                                                      .warranty_start_date,
                                                  label: "Warranty",
                                                  readonly: "",
                                                  outlined: "",
                                                  clearable: ""
                                                },
                                                on: {
                                                  input: function($event) {
                                                    _vm.errors.warranty_start_date = []
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

/***/ "./resources/js/components/selectors/AssetModelDialogSelector.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/selectors/AssetModelDialogSelector.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AssetModelDialogSelector_vue_vue_type_template_id_498f0b26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssetModelDialogSelector.vue?vue&type=template&id=498f0b26& */ "./resources/js/components/selectors/AssetModelDialogSelector.vue?vue&type=template&id=498f0b26&");
/* harmony import */ var _AssetModelDialogSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssetModelDialogSelector.vue?vue&type=script&lang=js& */ "./resources/js/components/selectors/AssetModelDialogSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AssetModelDialogSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AssetModelDialogSelector_vue_vue_type_template_id_498f0b26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AssetModelDialogSelector_vue_vue_type_template_id_498f0b26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/selectors/AssetModelDialogSelector.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/selectors/AssetModelDialogSelector.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/selectors/AssetModelDialogSelector.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetModelDialogSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AssetModelDialogSelector.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selectors/AssetModelDialogSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetModelDialogSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/selectors/AssetModelDialogSelector.vue?vue&type=template&id=498f0b26&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/selectors/AssetModelDialogSelector.vue?vue&type=template&id=498f0b26& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetModelDialogSelector_vue_vue_type_template_id_498f0b26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AssetModelDialogSelector.vue?vue&type=template&id=498f0b26& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selectors/AssetModelDialogSelector.vue?vue&type=template&id=498f0b26&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetModelDialogSelector_vue_vue_type_template_id_498f0b26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetModelDialogSelector_vue_vue_type_template_id_498f0b26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ })

}]);