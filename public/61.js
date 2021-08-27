(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/checkout_requests/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/checkout_requests/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_CheckoutRequestDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/CheckoutRequestDataService */ "./resources/js/services/CheckoutRequestDataService.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_X_DateRangePicker_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/X-DateRangePicker.vue */ "./resources/js/components/X-DateRangePicker.vue");
/* harmony import */ var _services_TransactionTypeDataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/TransactionTypeDataService */ "./resources/js/services/TransactionTypeDataService.js");
/* harmony import */ var _components_selectors_AssetDialogSelector_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/selectors/AssetDialogSelector.vue */ "./resources/js/components/selectors/AssetDialogSelector.vue");
/* harmony import */ var _components_selectors_EmployeeDialogSelector_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/selectors/EmployeeDialogSelector.vue */ "./resources/js/components/selectors/EmployeeDialogSelector.vue");
/* harmony import */ var _components_selectors_CustomerDialogSelector_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/selectors/CustomerDialogSelector.vue */ "./resources/js/components/selectors/CustomerDialogSelector.vue");
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







/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      actions: [{
        text: "Refresh",
        action: "refresh",
        icon: "mdi-refresh"
      }, {
        text: "Update",
        action: "update",
        icon: "mdi-update"
      }, {
        text: "Delete",
        action: "delete",
        icon: "mdi-delete"
      }, {
        text: "Restore",
        action: "restore",
        icon: "mdi-restore"
      }, // { text: "Export", action: "export", icon: "mdi-export" },
      {
        text: "Approve",
        action: "approve",
        icon: "mdi-check"
      }, {
        text: "Complete",
        action: "complete",
        icon: "mdi-check-all"
      }, {
        text: "Post",
        action: "post",
        icon: "mdi-check-circle"
      }, {
        text: "Cancel",
        action: "cancel",
        icon: "mdi-cancel"
      }],
      filter: {
        status: "Active",
        statuses: ["Active", "Pending", "Approved", "Completed", "Posted", "Cancelled", "Deleted"],
        date_range: [moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf("year").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_1___default()().endOf("year").format("YYYY-MM-DD")],
        asset: {},
        user: {},
        transaction_type: {}
      },
      tableOptions: {
        options: {
          sortBy: ["code"],
          sortDesc: [false],
          page: 1,
          itemsPerPage: 10
        },
        loading: false,
        itemsPerPageOptions: [10, 20, 50, 100],
        serverItemsLength: 0,
        headers: [{
          text: "Code",
          value: "code"
        }, {
          text: "Request Date",
          value: "request_date"
        }, {
          text: "Description",
          value: "description"
        }, {
          text: "User",
          value: "user.name"
        }, {
          text: "Status",
          value: "status"
        }]
      },
      search: "",
      items: [],
      selectedItems: []
    };
  },
  components: {
    XDateRangePicker: _components_X_DateRangePicker_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  methods: {
    updateDateRange: function updateDateRange(e) {
      this.filter.date_range = e;
    },
    resetDates: function resetDates() {
      this.filter.date_range = [moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf("year").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_1___default()().endOf("year").format("YYYY-MM-DD")];
    },
    getData: function getData() {
      var _this = this;

      this.tableOptions.loading = true;
      return new Promise(function (resolve, reject) {
        var _this$tableOptions$op = _this.tableOptions.options,
            sortBy = _this$tableOptions$op.sortBy,
            sortDesc = _this$tableOptions$op.sortDesc,
            page = _this$tableOptions$op.page,
            itemsPerPage = _this$tableOptions$op.itemsPerPage;
        var search = _this.search;
        var status = _this.filter.status;
        var date_range = _this.filter.date_range;
        var data = {
          params: {
            sortBy: sortBy[0],
            sortType: sortDesc[0] ? "desc" : "asc",
            page: page,
            itemsPerPage: itemsPerPage,
            search: search,
            status: status,
            start_date: date_range[0],
            end_date: date_range[1]
          }
        };
        _services_CheckoutRequestDataService__WEBPACK_IMPORTED_MODULE_0__["default"].getAll(data).then(function (response) {
          _this.items = response.data.data.data;
          _this.tableOptions.serverItemsLength = response.data.data.total;
          _this.tableOptions.loading = false;
          resolve();
        })["catch"](function (error) {
          _this.tableOptions.loading = false;
          console.log(error);
          reject();
        });
      });
    },
    filterAction: function filterAction(action) {
      switch (action) {
        case "refresh":
          this.getData();
          break;

        case "update":
          if (!this.selectedItems.length) {
            alert("No data selected.");
            return;
          }

          this.$router.push("/checkout_requests/" + this.selectedItems[0].id + "/edit");
          break;

        case "delete":
          this.onDelete();
          break;

        case "restore":
          this.onRestore();
          break;

        case "export":
          break;

        case "approve":
          this.onUpdateStatus("approve");
          break;

        case "complete":
          this.onUpdateStatus("complete");
          break;

        case "post":
          this.onUpdateStatus("post");
          break;

        case "cancel":
          this.onUpdateStatus("cancel");
          break;

        default:
          alert("Error: Action not identified");
          break;
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      if (!this.selectedItems.length) {
        alert("No data selected.");
        return;
      }

      if (!confirm("WARNING: Do you want to delete selected items?")) {
        return;
      }

      var data = {
        params: {
          ids: this.selectedItems.map(function (item) {
            return item.id;
          })
        }
      };
      _services_CheckoutRequestDataService__WEBPACK_IMPORTED_MODULE_0__["default"].deleteMany(data).then(function (response) {
        _this2.getData();

        _this2.selectedItems = [];
      })["catch"](function (error) {
        console.log(error);
        alert("An error has occurred.");
      });
    },
    onRestore: function onRestore() {
      var _this3 = this;

      if (!this.selectedItems.length) {
        alert("No data selected.");
        return;
      }

      if (!confirm("WARNING: Do you want to restore selected items?")) {
        return;
      }

      var data = {
        ids: this.selectedItems.map(function (item) {
          return item.id;
        })
      };
      _services_CheckoutRequestDataService__WEBPACK_IMPORTED_MODULE_0__["default"].restore(data).then(function (response) {
        _this3.getData();

        _this3.selectedItems = [];
      })["catch"](function (error) {
        console.log(error);
        alert("An error has occurred.");
      });
    },
    clearFilters: function clearFilters() {
      this.selectedItems = [];
      this.search = "";
      this.tableOptions.options = {
        sortBy: ["code"],
        sortDesc: [false],
        page: 1,
        itemsPerPage: 10
      };
    },
    onUpdateStatus: function onUpdateStatus(status) {
      var _this4 = this;

      if (!confirm("WARNING: Do you want to ".concat(status, " selected items?"))) {
        return;
      }

      var data = {
        // params: {
        ids: this.selectedItems.map(function (item) {
          return item.id;
        }) // }

      };

      switch (status) {
        case "approve":
          _services_CheckoutRequestDataService__WEBPACK_IMPORTED_MODULE_0__["default"].approve(data).then(function (response) {
            _this4.getData();

            _this4.selectedItems = [];
          })["catch"](function (error) {
            console.log(error);
            alert("An error has occurred.");
          });
          break;

        case "complete":
          _services_CheckoutRequestDataService__WEBPACK_IMPORTED_MODULE_0__["default"].complete(data).then(function (response) {
            _this4.getData();

            _this4.selectedItems = [];
          })["catch"](function (error) {
            console.log(error);
            alert("An error has occurred.");
          });
          break;

        case "post":
          _services_CheckoutRequestDataService__WEBPACK_IMPORTED_MODULE_0__["default"].post(data).then(function (response) {
            _this4.getData();

            _this4.selectedItems = [];
          })["catch"](function (error) {
            console.log(error);
            alert("An error has occurred.");
          });
          break;

        case "cancel":
          _services_CheckoutRequestDataService__WEBPACK_IMPORTED_MODULE_0__["default"].cancel(data).then(function (response) {
            _this4.getData();

            _this4.selectedItems = [];
          })["catch"](function (error) {
            console.log(error.response);
            alert("An error has occurred.");
          });
          break;

        default:
          break;
      }
    }
  },
  computed: {
    params: function params(nv) {
      return _objectSpread(_objectSpread({}, this.tableOptions.options), {}, _defineProperty({
        query: this.filter.date_range
      }, "query", this.filter.status));
    },
    hasFilters: function hasFilters() {
      return this.search || this.selectedItems.length;
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
    }
  },
  activated: function activated() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/checkout_requests/Index.vue?vue&type=style&index=0&id=9aee8d32&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/checkout_requests/Index.vue?vue&type=style&index=0&id=9aee8d32&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\na[data-v-9aee8d32] {\r\n    text-decoration: none;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/checkout_requests/Index.vue?vue&type=style&index=0&id=9aee8d32&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/checkout_requests/Index.vue?vue&type=style&index=0&id=9aee8d32&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=9aee8d32&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/checkout_requests/Index.vue?vue&type=style&index=0&id=9aee8d32&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/checkout_requests/Index.vue?vue&type=template&id=9aee8d32&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/checkout_requests/Index.vue?vue&type=template&id=9aee8d32&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
        "page-header",
        { attrs: { title: "Checkout Requests" } },
        [
          _c(
            "template",
            { slot: "leftSideNavigation" },
            [
              _c(
                "v-btn",
                {
                  staticClass: "ml-3",
                  attrs: {
                    icon: "",
                    to: { name: "checkout_requests.create" },
                    title: "Add new checkout request"
                  }
                },
                [_c("v-icon", [_vm._v("mdi-plus")])],
                1
              ),
              _vm._v(" "),
              _c(
                "v-menu",
                {
                  attrs: { rounded: "", "offset-y": "" },
                  scopedSlots: _vm._u([
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
                                { attrs: { icon: "", title: "More action" } },
                                "v-btn",
                                attrs,
                                false
                              ),
                              on
                            ),
                            [
                              _c("v-icon", [
                                _vm._v(
                                  "\n                            mdi-dots-vertical\n                        "
                                )
                              ])
                            ],
                            1
                          )
                        ]
                      }
                    }
                  ])
                },
                [
                  _vm._v(" "),
                  _c(
                    "v-list",
                    { attrs: { dense: "" } },
                    [
                      _vm._l(_vm.actions, function(item, index) {
                        return [
                          _c(
                            "v-list-item",
                            {
                              key: index,
                              attrs: { link: "" },
                              on: {
                                click: function($event) {
                                  return _vm.filterAction(item.action)
                                }
                              }
                            },
                            [
                              _c(
                                "v-list-item-icon",
                                [_c("v-icon", [_vm._v(_vm._s(item.icon))])],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-list-item-title", [
                                _c("div", { staticClass: "mr-3" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(item.text) +
                                      "\n                                "
                                  )
                                ])
                              ])
                            ],
                            1
                          )
                        ]
                      })
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "template",
            { slot: "rightSideNavigation" },
            [
              _c("v-text-field", {
                staticClass: "hidden-sm-and-down mt-5 p-0",
                attrs: { label: "Search", clearable: "" },
                on: {
                  keyup: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
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
              }),
              _vm._v(" "),
              _c(
                "v-menu",
                {
                  attrs: {
                    "close-on-content-click": false,
                    "nudge-width": 200,
                    "offset-y": "",
                    left: "",
                    bottom: ""
                  },
                  scopedSlots: _vm._u([
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
                                _vm._v("mdi-clipboard-search-outline")
                              ])
                            ],
                            1
                          )
                        ]
                      }
                    }
                  ])
                },
                [
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-list",
                        [
                          _c(
                            "v-list-item",
                            [
                              _c("v-select", {
                                attrs: {
                                  items: _vm.filter.statuses,
                                  label: "Status"
                                },
                                model: {
                                  value: _vm.filter.status,
                                  callback: function($$v) {
                                    _vm.$set(_vm.filter, "status", $$v)
                                  },
                                  expression: "filter.status"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item",
                            [
                              _c("XDateRangePicker", {
                                ref: "dateRange",
                                attrs: { dateRange: _vm.filter.date_range },
                                on: { "on-change": _vm.updateDateRange },
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
                                                  label: "Request Date",
                                                  readonly: ""
                                                },
                                                model: {
                                                  value: _vm.filter.date_range,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.filter,
                                                      "date_range",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "filter.date_range"
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
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "hidden-sm-and-up mx-1" },
        [
          _c(
            "v-col",
            [
              _c("v-text-field", {
                staticClass: "mt-5 p-0",
                attrs: { label: "Search", clearable: "" }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "my-3" },
        [
          _vm.filter.date_range
            ? _c(
                "v-chip",
                {
                  attrs: {
                    label: "",
                    close: "",
                    outlined: "",
                    small: "",
                    "close-icon": "mdi-update"
                  },
                  on: { "click:close": _vm.resetDates }
                },
                [
                  _vm._v(
                    "\n            " +
                      _vm._s(
                        _vm.filter.date_range[0] +
                          " ~ " +
                          _vm.filter.date_range[1]
                      ) +
                      "\n        "
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.selectedItems.length
            ? _c(
                "v-chip",
                {
                  attrs: { close: "", label: "", outlined: "", small: "" },
                  on: {
                    "click:close": function($event) {
                      _vm.selectedItems = []
                    }
                  }
                },
                [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.selectedItems.length) +
                      " item(s) selected\n        "
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.search
            ? _c(
                "v-chip",
                {
                  attrs: { close: "", label: "", outlined: "", small: "" },
                  on: {
                    "click:close": function($event) {
                      _vm.search = ""
                    }
                  }
                },
                [_vm._v("\n            " + _vm._s(_vm.search) + "\n        ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.hasFilters
            ? _c(
                "v-chip",
                {
                  attrs: { close: "", label: "", outlined: "", small: "" },
                  on: { "click:close": _vm.clearFilters }
                },
                [_vm._v("\n            Clear All Filters\n        ")]
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c("v-data-table", {
                attrs: {
                  "show-select": "",
                  "item-key": "id",
                  headers: _vm.tableOptions.headers,
                  items: _vm.items,
                  loading: _vm.tableOptions.loading,
                  options: _vm.tableOptions.options,
                  "server-items-length": _vm.tableOptions.serverItemsLength,
                  "footer-props": {
                    itemsPerPageOptions: _vm.tableOptions.itemsPerPageOptions,
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
                scopedSlots: _vm._u(
                  [
                    {
                      key: "item.code",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: {
                                  name: "checkout_requests.show",
                                  params: { id: item.id }
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(item.code) +
                                  "\n                    "
                              )
                            ]
                          )
                        ]
                      }
                    },
                    {
                      key: "item.status",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _c(
                            "v-chip",
                            {
                              attrs: {
                                small: "",
                                color: item.status.color,
                                dark: item.status.dark
                              }
                            },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(item.status.text) +
                                  "\n                    "
                              )
                            ]
                          )
                        ]
                      }
                    }
                  ],
                  null,
                  true
                ),
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

/***/ "./resources/js/pages/checkout_requests/Index.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/checkout_requests/Index.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_9aee8d32_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=9aee8d32&scoped=true& */ "./resources/js/pages/checkout_requests/Index.vue?vue&type=template&id=9aee8d32&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/checkout_requests/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_id_9aee8d32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=9aee8d32&scoped=true&lang=css& */ "./resources/js/pages/checkout_requests/Index.vue?vue&type=style&index=0&id=9aee8d32&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_9aee8d32_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_9aee8d32_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9aee8d32",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/checkout_requests/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/checkout_requests/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/checkout_requests/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/checkout_requests/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/checkout_requests/Index.vue?vue&type=style&index=0&id=9aee8d32&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/pages/checkout_requests/Index.vue?vue&type=style&index=0&id=9aee8d32&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_9aee8d32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=9aee8d32&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/checkout_requests/Index.vue?vue&type=style&index=0&id=9aee8d32&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_9aee8d32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_9aee8d32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_9aee8d32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_9aee8d32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/checkout_requests/Index.vue?vue&type=template&id=9aee8d32&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/pages/checkout_requests/Index.vue?vue&type=template&id=9aee8d32&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_9aee8d32_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=9aee8d32&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/checkout_requests/Index.vue?vue&type=template&id=9aee8d32&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_9aee8d32_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_9aee8d32_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/CheckoutRequestDataService.js":
/*!*************************************************************!*\
  !*** ./resources/js/services/CheckoutRequestDataService.js ***!
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


var CheckoutRequestDataService = /*#__PURE__*/function () {
  function CheckoutRequestDataService() {
    _classCallCheck(this, CheckoutRequestDataService);
  }

  _createClass(CheckoutRequestDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/checkout_requests", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/checkout_requests/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/v1/checkout_requests", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/checkout_requests/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/checkout_requests/".concat(id), data);
    }
  }, {
    key: "deleteMany",
    value: function deleteMany(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/checkout_requests/multiple", data);
    }
  }, {
    key: "restore",
    value: function restore(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/checkout_requests/restore", data);
    }
  }, {
    key: "approve",
    value: function approve(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/checkout_requests/approve", data);
    }
  }, {
    key: "complete",
    value: function complete(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/checkout_requests/complete", data);
    }
  }, {
    key: "post",
    value: function post(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/checkout_requests/post", data);
    }
  }, {
    key: "cancel",
    value: function cancel(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/checkout_requests/cancel", data);
    }
  }]);

  return CheckoutRequestDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new CheckoutRequestDataService());

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
  }, {
    key: "restore",
    value: function restore(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/transaction_types/restore", data);
    }
  }, {
    key: "activate",
    value: function activate(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/transaction_types/activate", data);
    }
  }]);

  return TransactionTypeDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new TransactionTypeDataService());

/***/ })

}]);