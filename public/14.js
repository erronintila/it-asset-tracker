(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selectors/AssetDialogSelector.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/selectors/AssetDialogSelector.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_AssetDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/AssetDataService */ "./resources/js/services/AssetDataService.js");
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
  name: "asset-selector",
  props: {
    dialogAsset: {
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
          text: "Serial No.",
          value: "serial_no"
        }, {
          text: "Description",
          value: "description"
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
        _services_AssetDataService__WEBPACK_IMPORTED_MODULE_0__["default"].getAll(data).then(function (response) {
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
    dialogAsset: {
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/checkin_requests/Form.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/checkin_requests/Form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_selectors_AssetDialogSelector_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/selectors/AssetDialogSelector.vue */ "./resources/js/components/selectors/AssetDialogSelector.vue");
/* harmony import */ var _components_selectors_LocationDialogSelector_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/selectors/LocationDialogSelector.vue */ "./resources/js/components/selectors/LocationDialogSelector.vue");
/* harmony import */ var _services_TransactionTypeDataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/TransactionTypeDataService */ "./resources/js/services/TransactionTypeDataService.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    locationForm: {
      type: Object,
      "default": function _default() {
        return {
          code: "",
          reference_no: "",
          request_date: "",
          description: "",
          status: {
            text: "",
            color: "",
            dark: false
          },
          transactionable: "",
          transaction_type_id: "",
          user: "",
          parent_asset_id: "",
          owner_id: "",
          assigned_user_id: "",
          assigned_location_id: "",
          assigned_asset_id: "",
          assets: [],
          location: null
        };
      }
    },
    rules: {
      type: Object,
      "default": function _default() {
        return {
          code: [],
          reference_no: [],
          request_date: [],
          description: [],
          transactionable: [],
          transaction_type_id: [],
          user_id: [],
          parent_asset_id: [],
          owner_id: [],
          assigned_user_id: [],
          assigned_location_id: [],
          assigned_asset_id: [],
          assets: []
        };
      }
    },
    errors: {
      type: Object,
      "default": function _default() {
        return {
          code: [],
          reference_no: [],
          request_date: [],
          description: [],
          transactionable: [],
          transaction_type_id: [],
          user_id: [],
          parent_asset_id: [],
          owner_id: [],
          assigned_user_id: [],
          assigned_location_id: [],
          assigned_asset_id: [],
          assets: []
        };
      }
    }
  },
  components: {
    AssetDialogSelector: _components_selectors_AssetDialogSelector_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    LocationDialogSelector: _components_selectors_LocationDialogSelector_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      valid: false,
      dialogAsset: false,
      requestDateModal: false,
      dialogLocation: false,
      headers: [{
        text: "Code",
        value: "code"
      }, {
        text: "Serial No.",
        value: "serial_no"
      }, {
        text: "Description",
        value: "description"
      }, {
        text: "Action",
        value: "action"
      }],
      transaction_types: [],
      form: {
        code: "",
        reference_no: "",
        request_date: "",
        description: "",
        status: {
          text: "",
          color: "",
          dark: false
        },
        transactionable: {},
        transaction_type_id: "",
        user: {},
        parent_asset_id: "",
        owner_id: "",
        assigned_user_id: "",
        assigned_location_id: "",
        assigned_asset_id: "",
        assets: [],
        location: null,
        transaction_type: null
      }
    };
  },
  methods: {
    getTransactionTypes: function getTransactionTypes() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                try {
                  _services_TransactionTypeDataService__WEBPACK_IMPORTED_MODULE_4__["default"].getAll({
                    params: {
                      itemsPerPage: 100
                    }
                  }).then(function (response) {
                    console.log(response.data);
                    _this.transaction_types = response.data.data.data;
                  });
                } catch (error) {
                  console.log(error);
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    onSave: function onSave() {
      if (!confirm("Do you want to save?")) {
        return;
      }

      if (!this.$refs.form.validate()) {
        alert("An error has occurred.");
        return;
      }

      var newform = _objectSpread(_objectSpread(_objectSpread({}, this.form), {
        assigned_location_id: this.form.location ? this.form.location.id : null
      }), {
        transaction_type_id: this.form.transaction_type ? this.form.transaction_type.id : null
      });

      console.log(newform);

      if (!newform.is_active) {
        newform.is_active = false;
      }

      this.$emit("on-save", newform);
    },
    onSelectAsset: function onSelectAsset(e) {
      this.dialogAsset = false;
      this.errors.assets = [];

      if (e == null || e == undefined) {
        this.form.assets = [];
        return;
      }

      this.form.assets = e;
      this.dialogAsset = false;
    },
    onSelectLocation: function onSelectLocation(e) {
      this.dialogLocation = false;
      this.errors.assigned_location_id = [];

      if (e == null || e == undefined) {
        this.form.location = null;
        return;
      }

      this.form.location = e[0];
      this.dialogLocation = false;
    },
    removeItem: function removeItem(item) {
      if (confirm("Remove this item?")) {
        this.editedIndex = this.form.assets.indexOf(item);
        this.form.assets.splice(this.editedIndex, 1);
      }
    }
  },
  computed: {
    maxDate: function maxDate() {
      return moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY-MM-DD");
    }
  },
  watch: {
    locationForm: {
      immediate: true,
      handler: function handler(newValue, oldValue) {
        this.form = newValue;
      }
    }
  },
  mounted: function mounted() {
    this.getTransactionTypes();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selectors/AssetDialogSelector.vue?vue&type=template&id=26bdbde1&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/selectors/AssetDialogSelector.vue?vue&type=template&id=26bdbde1& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
                      _c("v-toolbar-title", [_vm._v("Assets")]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/checkin_requests/Form.vue?vue&type=template&id=4a9e00b8&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/checkin_requests/Form.vue?vue&type=template&id=4a9e00b8& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
                                  label: "Reference No.",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. 00001",
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
                              _c("v-select", {
                                attrs: {
                                  "error-messages":
                                    _vm.errors.transaction_type_id[0],
                                  "return-object": "",
                                  "item-text": "name",
                                  label: "Request Type",
                                  outlined: "",
                                  clearable: "",
                                  items: _vm.transaction_types
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.transaction_type_id = []
                                  }
                                },
                                model: {
                                  value: _vm.form.transaction_type,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "transaction_type", $$v)
                                  },
                                  expression: "form.transaction_type"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-dialog",
                                {
                                  ref: "dialogRequestDate",
                                  attrs: {
                                    "return-value": _vm.form.request_date,
                                    persistent: "",
                                    width: "290px"
                                  },
                                  on: {
                                    "update:returnValue": function($event) {
                                      return _vm.$set(
                                        _vm.form,
                                        "request_date",
                                        $event
                                      )
                                    },
                                    "update:return-value": function($event) {
                                      return _vm.$set(
                                        _vm.form,
                                        "request_date",
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
                                                    label: "Request Date",
                                                    readonly: "",
                                                    outlined: "",
                                                    hint: "Ex. 2000-01-01",
                                                    "error-messages":
                                                      _vm.errors.request_date[0]
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      _vm.errors.request_date = []
                                                    }
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.form.request_date,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "request_date",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "form.request_date"
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
                                    value: _vm.requestDateModal,
                                    callback: function($$v) {
                                      _vm.requestDateModal = $$v
                                    },
                                    expression: "requestDateModal"
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
                                          _vm.errors.request_date = []
                                        }
                                      },
                                      model: {
                                        value: _vm.form.request_date,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "request_date",
                                            $$v
                                          )
                                        },
                                        expression: "form.request_date"
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
                                              _vm.requestDateModal = false
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
                                              return _vm.$refs.dialogRequestDate.save(
                                                _vm.form.request_date
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
                                  label: "Description",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. Checkin Request for Asset",
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
                              _c("LocationDialogSelector", {
                                attrs: {
                                  selected: !_vm.form.location
                                    ? []
                                    : [].concat(_vm.form.location),
                                  dialogLocation: _vm.dialogLocation
                                },
                                on: {
                                  "close-dialog": function($event) {
                                    _vm.dialogLocation = false
                                  },
                                  "on-select": _vm.onSelectLocation
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
                                                  value: _vm.form.location
                                                    ? _vm.form.location.name
                                                    : "",
                                                  "error-messages":
                                                    _vm.errors
                                                      .assigned_location_id,
                                                  label: "Location",
                                                  readonly: "",
                                                  outlined: ""
                                                },
                                                on: {
                                                  input: function($event) {
                                                    _vm.errors.assigned_location_id = []
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
            { attrs: { cols: "12", md: "8" } },
            [
              _c(
                "v-card",
                { attrs: { flat: "" } },
                [
                  _c(
                    "v-card-title",
                    { staticClass: "d-flex justify-space-between" },
                    [
                      _c("div", [
                        _vm._v(
                          "\n                        Assets\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                icon: "",
                                fab: "",
                                small: "",
                                to: "/assets/create",
                                title: "Create new asset"
                              }
                            },
                            [_c("v-icon", [_vm._v("mdi-plus")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                icon: "",
                                fab: "",
                                small: "",
                                title: "Choose asset"
                              },
                              on: {
                                click: function($event) {
                                  _vm.dialogAsset = true
                                }
                              }
                            },
                            [
                              _c("v-icon", [
                                _vm._v("mdi-clipboard-plus-outline")
                              ])
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
                      _vm.form.assets.length == 0 && _vm.errors.assets.length
                        ? _c("small", { staticClass: "red--text" }, [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.errors.assets[0]) +
                                "\n                    "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("v-data-table", {
                        attrs: {
                          headers: _vm.headers,
                          items: _vm.form.assets,
                          "items-per-page": 5
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "item.action",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _c(
                                    "v-btn",
                                    { attrs: { icon: "" } },
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          on: {
                                            click: function($event) {
                                              return _vm.removeItem(item)
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                    mdi-delete\n                                "
                                          )
                                        ]
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
      ),
      _vm._v(" "),
      _c("AssetDialogSelector", {
        attrs: {
          selected: !_vm.form.assets ? [] : _vm.form.assets,
          dialogAsset: _vm.dialogAsset,
          singleSelect: false
        },
        on: {
          "close-dialog": function($event) {
            _vm.dialogAsset = false
          },
          "on-select": _vm.onSelectAsset
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/selectors/AssetDialogSelector.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/selectors/AssetDialogSelector.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AssetDialogSelector_vue_vue_type_template_id_26bdbde1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssetDialogSelector.vue?vue&type=template&id=26bdbde1& */ "./resources/js/components/selectors/AssetDialogSelector.vue?vue&type=template&id=26bdbde1&");
/* harmony import */ var _AssetDialogSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssetDialogSelector.vue?vue&type=script&lang=js& */ "./resources/js/components/selectors/AssetDialogSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AssetDialogSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AssetDialogSelector_vue_vue_type_template_id_26bdbde1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AssetDialogSelector_vue_vue_type_template_id_26bdbde1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/selectors/AssetDialogSelector.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/selectors/AssetDialogSelector.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/selectors/AssetDialogSelector.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetDialogSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AssetDialogSelector.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selectors/AssetDialogSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetDialogSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/selectors/AssetDialogSelector.vue?vue&type=template&id=26bdbde1&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/selectors/AssetDialogSelector.vue?vue&type=template&id=26bdbde1& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetDialogSelector_vue_vue_type_template_id_26bdbde1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AssetDialogSelector.vue?vue&type=template&id=26bdbde1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selectors/AssetDialogSelector.vue?vue&type=template&id=26bdbde1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetDialogSelector_vue_vue_type_template_id_26bdbde1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssetDialogSelector_vue_vue_type_template_id_26bdbde1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/checkin_requests/Form.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/checkin_requests/Form.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_4a9e00b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=4a9e00b8& */ "./resources/js/pages/checkin_requests/Form.vue?vue&type=template&id=4a9e00b8&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/pages/checkin_requests/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_4a9e00b8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_4a9e00b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/checkin_requests/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/checkin_requests/Form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/checkin_requests/Form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/checkin_requests/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/checkin_requests/Form.vue?vue&type=template&id=4a9e00b8&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/checkin_requests/Form.vue?vue&type=template&id=4a9e00b8& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_4a9e00b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=4a9e00b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/checkin_requests/Form.vue?vue&type=template&id=4a9e00b8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_4a9e00b8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_4a9e00b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/services/TransactionTypeDataService.js":
/*!*************************************************************!*\
  !*** ./resources/js/services/TransactionTypeDataService.js ***!
  \*************************************************************/
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


var TransactionTypeDataService = /*#__PURE__*/function () {
  function TransactionTypeDataService() {
    _classCallCheck(this, TransactionTypeDataService);
  }

  _createClass(TransactionTypeDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/transaction_types", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/transaction_types/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/v1/transaction_types", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/transaction_types/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/transaction_types/".concat(id), data);
    }
  }, {
    key: "deleteMany",
    value: function deleteMany(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/transaction_types/multiple", data);
    }
  }]);

  return TransactionTypeDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new TransactionTypeDataService());

/***/ })

}]);