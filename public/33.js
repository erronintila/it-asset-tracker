(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/X-DataTable.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/X-DataTable.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "x-datatable",
  props: {
    // selected: {
    //     type: Array,
    //     default: () => []
    // },
    headers: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    items: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    itemsPerPageOptions: {
      type: Array,
      "default": function _default() {
        return [3, 5];
      }
    },
    itemsPerPage: {
      type: Number,
      "default": 5
    },
    showSelect: {
      type: Boolean,
      "default": true
    },
    singleSelect: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      selected: []
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/X-Dialog.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/X-Dialog.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _X_DataTable_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./X-DataTable.vue */ "./resources/js/components/X-DataTable.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "x-dialog",
  props: {
    dialog: false,
    title: ""
  },
  components: {
    XDataTable: _X_DataTable_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      fullscreen: false
    };
  },
  methods: {
    closeDialog: function closeDialog() {
      this.$emit("close-dialog");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/dashboard/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_X_Dialog_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/X-Dialog.vue */ "./resources/js/components/X-Dialog.vue");
/* harmony import */ var _services_DashboardDataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/DashboardDataService */ "./resources/js/services/DashboardDataService.js");
/* harmony import */ var _services_ActivityLogDataService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/ActivityLogDataService */ "./resources/js/services/ActivityLogDataService.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "dashboard",
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_2___default.a,
    XDialog: _components_X_Dialog_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      dialogAccount: false,
      dialogCategory: false,
      dialogManufacturer: false,
      tableSelected: [],
      assets: {
        total: 0,
        status: {
          pending: 0,
          in_storage: 0,
          in_maintenance: 0,
          in_use: 0
        }
      },
      work_orders: {
        categories: [4, 4, 4, 4],
        completed: 0,
        pending: 0,
        scheduled: 0
      },
      options: {
        asset: {
          labels: ["Pending", "In Use", "In Storage", "In Maintenance"],
          legend: {
            show: false
          }
        },
        work_order: {
          chart: {
            type: "bar",
            toolbar: {
              show: false
            }
          },
          colors: ["#2E93fA", "#546E7A", "#66DA26", "#E91E63", "#FF9800"],
          plotOptions: {
            bar: {
              borderRadius: 8,
              horizontal: true
            }
          },
          xaxis: {
            categories: []
          }
        }
      },
      headers: {
        activity: [{
          text: "Date",
          value: "created_at"
        }, {
          text: "Description",
          value: "description"
        }, {
          text: "Action",
          value: "action"
        }]
      },
      activityTableOptions: {
        options: {
          sortBy: ["created_at"],
          sortDesc: [false],
          page: 1,
          itemsPerPage: 5
        },
        loading: false,
        itemsPerPageOptions: [5, 10],
        serverItemsLength: 0,
        headers: [{
          text: "Date",
          value: "created_at"
        }, {
          text: "Description",
          value: "description"
        }, {
          text: "Action",
          value: "action"
        }]
      },
      activities: [],
      work_order_series: [{
        data: []
      }]
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_DashboardDataService__WEBPACK_IMPORTED_MODULE_4__["default"].getAll().then(function (response) {
                  var _response$data$data = response.data.data,
                      assets = _response$data$data.assets,
                      work_orders = _response$data$data.work_orders;
                  console.log(response);
                  _this.assets = _objectSpread({}, assets);
                  _this.work_orders = _objectSpread({}, work_orders);
                  _this.series.asset = Object.values(assets.status);
                  _this.options.work_order = _objectSpread(_objectSpread({}, _this.options.work_order), {
                    xaxis: {
                      categories: work_orders.categories.map(function (item) {
                        return item.name;
                      })
                    }
                  });
                  console.log(work_orders.categories.map(function (item) {
                    return item.total;
                  }));

                  _this.$refs.workOrderChart.updateSeries([{
                    data: work_orders.categories.map(function (item) {
                      return item.total;
                    })
                  }], false, true);
                });

              case 3:
                _context.next = 9;
                break;

              case 5:
                _context.prev = 5;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);
                console.log(_context.t0.response);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 5]]);
      }))();
    },
    getActivityLogs: function getActivityLogs() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this2$activityTableO, sortBy, sortDesc, page, itemsPerPage, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.activityTableOptions.loading = true;
                _this2$activityTableO = _this2.activityTableOptions.options, sortBy = _this2$activityTableO.sortBy, sortDesc = _this2$activityTableO.sortDesc, page = _this2$activityTableO.page, itemsPerPage = _this2$activityTableO.itemsPerPage;
                data = {
                  params: {
                    sortBy: sortBy[0],
                    sortType: sortDesc[0] ? "desc" : "asc",
                    page: page,
                    itemsPerPage: itemsPerPage
                  }
                };
                _context2.prev = 3;
                _context2.next = 6;
                return _services_ActivityLogDataService__WEBPACK_IMPORTED_MODULE_5__["default"].getAll(data).then(function (response) {
                  _this2.activities = response.data.data.data;
                  _this2.activityTableOptions.serverItemsLength = response.data.data.total;
                  _this2.activityTableOptions.loading = false;
                });

              case 6:
                _context2.next = 12;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](3);
                console.log(_context2.t0);
                console.log(_context2.t0.response);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 8]]);
      }))();
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    user: "auth/user"
  })), {}, {
    params: function params(nv) {
      return _objectSpread({}, this.activityTableOptions.options);
    },
    dateRangeText: function dateRangeText() {
      return this.dates.join(" ~ ");
    },
    assetSummary: function assetSummary() {
      return this.assets.total;
      return {
        total: this.assets ? this.assets.total : 0
      };
    },
    series: function series() {
      return {
        asset: this.assets ? Object.values(this.assets.status) : [0, 0, 0, 0]
      };
    }
  }),
  watch: {
    params: {
      immediate: true,
      deep: true,
      handler: function handler() {
        this.getActivityLogs();
      }
    }
  },
  mounted: function mounted() {
    this.getData();
    this.getActivityLogs();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/Index.vue?vue&type=style&index=0&id=f7b9f0c4&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/dashboard/Index.vue?vue&type=style&index=0&id=f7b9f0c4&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.header-title[data-v-f7b9f0c4] {\r\n    font-size: 1rem;\r\n    font-weight: 100;\n}\n.header-body[data-v-f7b9f0c4] {\r\n    font-size: 2rem;\r\n    font-weight: 100;\n}\na[data-v-f7b9f0c4] {\r\n    text-decoration: none;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/Index.vue?vue&type=style&index=0&id=f7b9f0c4&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/dashboard/Index.vue?vue&type=style&index=0&id=f7b9f0c4&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=f7b9f0c4&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/Index.vue?vue&type=style&index=0&id=f7b9f0c4&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/X-DataTable.vue?vue&type=template&id=0aef3e74&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/X-DataTable.vue?vue&type=template&id=0aef3e74& ***!
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
  return _c("v-data-table", {
    attrs: {
      dense: "",
      headers: _vm.headers,
      items: _vm.items,
      "items-per-page": _vm.itemsPerPage,
      "show-select": _vm.showSelect,
      "single-select": _vm.singleSelect,
      "footer-props": {
        itemsPerPageOptions: _vm.itemsPerPageOptions
      }
    },
    model: {
      value: _vm.selected,
      callback: function($$v) {
        _vm.selected = $$v
      },
      expression: "selected"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/X-Dialog.vue?vue&type=template&id=05ebfb48&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/X-Dialog.vue?vue&type=template&id=05ebfb48& ***!
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
    "v-dialog",
    {
      attrs: {
        fullscreen: _vm.fullscreen,
        persistent: "",
        "max-width": "60em"
      },
      model: {
        value: _vm.dialog,
        callback: function($$v) {
          _vm.dialog = $$v
        },
        expression: "dialog"
      }
    },
    [
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
                  _c("v-toolbar-title", [_vm._v("Title")]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "" },
                      on: {
                        click: function($event) {
                          _vm.fullscreen = !_vm.fullscreen
                        }
                      }
                    },
                    [
                      _c(
                        "v-icon",
                        { staticClass: "heading grey--text text--darken-4" },
                        [
                          _vm._v(
                            "\n                        mdi-open\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    { attrs: { icon: "" }, on: { click: _vm.closeDialog } },
                    [
                      _c("v-icon", [
                        _vm._v(
                          "\n                        mdi-close\n                    "
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
                { staticClass: "d-flex justify-space-between align-center" },
                [
                  _c("div", [_vm._v("All Items")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c("v-text-field", {
                        attrs: { label: "Search", clearable: "" }
                      })
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c("XDataTable", {
                attrs: {
                  headers: [
                    {
                      text: "Field 1",
                      value: "text"
                    },
                    { text: "Field 2", value: "number" },
                    { text: "Field 3", value: "text" }
                  ],
                  items: [
                    {
                      id: 1,
                      number: "123",
                      text: "Data",
                      date: "2021-12-31",
                      boolean: "true"
                    },
                    {
                      id: 2,
                      number: "123",
                      text: "Data",
                      date: "2021-12-31",
                      boolean: "false"
                    }
                  ]
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
                    { staticClass: "mx-2", on: { click: _vm.closeDialog } },
                    [_vm._v("\n                    OK\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    { staticClass: "mx-2", on: { click: _vm.closeDialog } },
                    [_vm._v("\n                    Close\n                ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/Index.vue?vue&type=template&id=f7b9f0c4&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/dashboard/Index.vue?vue&type=template&id=f7b9f0c4&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      _c("loading-screen"),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c("v-col", { staticClass: "d-flex align-center" }, [
            _c("div", { staticClass: "page-title d-inline" }, [
              _vm._v("\n                Dashboard\n            ")
            ])
          ]),
          _vm._v(" "),
          _c("v-spacer")
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "hidden-sm-and-down mb-2" },
        [
          _c("v-col", { staticClass: "d-flex align-center" }, [
            _c("small", { staticClass: "text--secondary" }, [
              _vm._v(
                "\n                January 01, 2021 ~ July 09, 2021\n            "
              )
            ]),
            _vm._v(" "),
            _c("small", { staticClass: "mx-4" }, [_vm._v("|")]),
            _vm._v(" "),
            _c("small", { staticClass: "text--secondary" }, [
              _vm._v("\n                All Accounts\n            ")
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "3" } },
            [
              _c("v-hover", {
                attrs: { "open-delay": "30" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var hover = ref.hover
                      return [
                        _c(
                          "v-card",
                          {
                            staticClass: "rounded-lg",
                            class: { "on-hover": hover },
                            attrs: { elevation: hover ? 10 : 3 }
                          },
                          [
                            _c(
                              "v-list-item",
                              { attrs: { "three-line": "", to: "/assets" } },
                              [
                                _c("v-list-item-content", [
                                  _c("div", { class: "header-title" }, [
                                    _vm._v(
                                      "\n                                Total Active Assets\n                            "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { class: "header-body" }, [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(_vm.assets.total) +
                                        "\n                            "
                                    )
                                  ])
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", md: "3" } },
            [
              _c("v-hover", {
                attrs: { "open-delay": "30" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var hover = ref.hover
                      return [
                        _c(
                          "v-card",
                          {
                            staticClass: "rounded-lg",
                            class: { "on-hover": hover },
                            attrs: { elevation: hover ? 10 : 3 }
                          },
                          [
                            _c(
                              "v-list-item",
                              {
                                attrs: { "three-line": "", to: "/work_orders" }
                              },
                              [
                                _c("v-list-item-content", [
                                  _c("div", { class: "header-title" }, [
                                    _vm._v(
                                      "\n                                Completed Work Orders\n                            "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { class: "header-body" }, [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(_vm.work_orders.completed) +
                                        "\n                            "
                                    )
                                  ])
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", md: "3" } },
            [
              _c("v-hover", {
                attrs: { "open-delay": "30" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var hover = ref.hover
                      return [
                        _c(
                          "v-card",
                          {
                            staticClass: "rounded-lg",
                            class: { "on-hover": hover },
                            attrs: { elevation: hover ? 10 : 3 }
                          },
                          [
                            _c(
                              "v-list-item",
                              {
                                attrs: { "three-line": "", to: "/work_orders" }
                              },
                              [
                                _c("v-list-item-content", [
                                  _c("div", { class: "header-title" }, [
                                    _vm._v(
                                      "\n                                Pending Work Orders\n                            "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { class: "header-body" }, [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(_vm.work_orders.pending) +
                                        "\n                            "
                                    )
                                  ])
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", md: "3" } },
            [
              _c("v-hover", {
                attrs: { "open-delay": "30" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var hover = ref.hover
                      return [
                        _c(
                          "v-card",
                          {
                            staticClass: "rounded-lg",
                            class: { "on-hover": hover },
                            attrs: { elevation: hover ? 10 : 3 }
                          },
                          [
                            _c(
                              "v-list-item",
                              { attrs: { "three-line": "", to: "/schedules" } },
                              [
                                _c("v-list-item-content", [
                                  _c("div", { class: "header-title" }, [
                                    _vm._v(
                                      "\n                                Scheduled Work Orders\n                            "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { class: "header-body" }, [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(_vm.work_orders.scheduled) +
                                        "\n                            "
                                    )
                                  ])
                                ])
                              ],
                              1
                            )
                          ],
                          1
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
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "4" } },
            [
              _c("v-hover", {
                attrs: { "open-delay": "30" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var hover = ref.hover
                      return [
                        _c(
                          "v-card",
                          {
                            staticClass: "rounded-lg",
                            class: { "on-hover": hover },
                            attrs: {
                              elevation: hover ? 10 : 3,
                              height: "25rem"
                            }
                          },
                          [
                            _c(
                              "v-card-title",
                              { staticClass: "d-flex justify-space-between" },
                              [
                                _c("div", { staticClass: "page-title" }, [
                                  _vm._v(
                                    "\n                            Assets by Status\n                        "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-menu",
                                  {
                                    attrs: { bottom: "", left: "" },
                                    scopedSlots: _vm._u(
                                      [
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
                                                    _vm._v(
                                                      "\n                                        mdi-dots-vertical\n                                    "
                                                    )
                                                  ])
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
                                  },
                                  [
                                    _vm._v(" "),
                                    _c(
                                      "v-list",
                                      [
                                        _c(
                                          "v-list-item",
                                          {
                                            attrs: { link: "" },
                                            on: {
                                              click: function($event) {
                                                _vm.dialogCategory = true
                                              }
                                            }
                                          },
                                          [
                                            _c("v-list-item-title", [
                                              _vm._v(
                                                "\n                                        Category\n                                    "
                                              )
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-item",
                                          {
                                            attrs: { link: "" },
                                            on: {
                                              click: function($event) {
                                                _vm.dialogManufacturer = true
                                              }
                                            }
                                          },
                                          [
                                            _c("v-list-item-title", [
                                              _vm._v(
                                                "\n                                        Manufacturer\n                                    "
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
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("v-card-text", [
                              _c(
                                "div",
                                [
                                  _c("VueApexCharts", {
                                    ref: "assetChart",
                                    attrs: {
                                      type: "donut",
                                      height: "300",
                                      options: _vm.options.asset,
                                      series: _vm.series.asset
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "mt-2" }, [
                                _c("small", [_vm._v("All Categories")]),
                                _vm._v(" "),
                                _c("small", [_vm._v("|")]),
                                _vm._v(" "),
                                _c("small", [_vm._v("All Manufacturers")])
                              ])
                            ])
                          ],
                          1
                        )
                      ]
                    }
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
              _c("v-hover", {
                attrs: { "open-delay": "30" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var hover = ref.hover
                      return [
                        _c(
                          "v-card",
                          {
                            staticClass: "rounded-lg",
                            class: { "on-hover": hover },
                            attrs: {
                              elevation: hover ? 10 : 3,
                              height: "25rem"
                            }
                          },
                          [
                            _c("v-card-title", [
                              _c("div", { staticClass: "page-title" }, [
                                _vm._v(
                                  "\n                            Work Order History\n                        "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("v-card-text", [
                              _c(
                                "div",
                                [
                                  _c("VueApexCharts", {
                                    ref: "workOrderChart",
                                    attrs: {
                                      type: "bar",
                                      height: "300",
                                      options: _vm.options.work_order,
                                      series: _vm.work_order_series
                                    }
                                  })
                                ],
                                1
                              )
                            ])
                          ],
                          1
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
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            [
              _c("v-hover", {
                attrs: { "open-delay": "30" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var hover = ref.hover
                      return [
                        _c(
                          "v-card",
                          {
                            staticClass: "rounded-lg",
                            class: { "on-hover": hover },
                            attrs: { elevation: hover ? 10 : 3 }
                          },
                          [
                            _c(
                              "v-card-title",
                              { staticClass: "d-flex justify-space-between" },
                              [
                                _c("div", { staticClass: "page-title" }, [
                                  _vm._v(
                                    "\n                            Recent Activity\n                        "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  [
                                    _c(
                                      "v-menu",
                                      {
                                        attrs: { bottom: "", left: "" },
                                        scopedSlots: _vm._u(
                                          [
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
                                                        _vm._v(
                                                          "mdi-dots-vertical"
                                                        )
                                                      ])
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
                                      },
                                      [
                                        _vm._v(" "),
                                        _c(
                                          "v-list",
                                          [
                                            _c(
                                              "v-list-item",
                                              {
                                                attrs: { link: "" },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.$router.push({
                                                      name:
                                                        "reports.activity_logs.index"
                                                    })
                                                  }
                                                }
                                              },
                                              [
                                                _c("v-list-item-title", [
                                                  _vm._v(
                                                    "\n                                            View All\n                                        "
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
                                _c("v-data-table", {
                                  attrs: {
                                    headers: _vm.headers.activity,
                                    items: _vm.activities,
                                    loading: _vm.activityTableOptions.loading,
                                    options: _vm.activityTableOptions.options,
                                    "server-items-length":
                                      _vm.activityTableOptions
                                        .serverItemsLength,
                                    "footer-props": {
                                      itemsPerPageOptions:
                                        _vm.activityTableOptions
                                          .itemsPerPageOptions
                                    }
                                  },
                                  on: {
                                    "update:options": function($event) {
                                      return _vm.$set(
                                        _vm.activityTableOptions,
                                        "options",
                                        $event
                                      )
                                    }
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "item.action",
                                        fn: function(ref) {
                                          var item = ref.item
                                          return [
                                            _c(
                                              "router-link",
                                              {
                                                attrs: {
                                                  to:
                                                    "/" +
                                                    item.properties.custom.link
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                    View Details\n                                "
                                                )
                                              ]
                                            )
                                          ]
                                        }
                                      },
                                      {
                                        key: "item.created_at",
                                        fn: function(ref) {
                                          var item = ref.item
                                          return [
                                            _vm._v(
                                              "\n                                " +
                                                _vm._s(
                                                  _vm._f("moment")(
                                                    item.created_at,
                                                    "LLLL"
                                                  )
                                                ) +
                                                "\n                            "
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
                            )
                          ],
                          1
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/X-DataTable.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/X-DataTable.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _X_DataTable_vue_vue_type_template_id_0aef3e74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./X-DataTable.vue?vue&type=template&id=0aef3e74& */ "./resources/js/components/X-DataTable.vue?vue&type=template&id=0aef3e74&");
/* harmony import */ var _X_DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./X-DataTable.vue?vue&type=script&lang=js& */ "./resources/js/components/X-DataTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _X_DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _X_DataTable_vue_vue_type_template_id_0aef3e74___WEBPACK_IMPORTED_MODULE_0__["render"],
  _X_DataTable_vue_vue_type_template_id_0aef3e74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/X-DataTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/X-DataTable.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/X-DataTable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_X_DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./X-DataTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/X-DataTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_X_DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/X-DataTable.vue?vue&type=template&id=0aef3e74&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/X-DataTable.vue?vue&type=template&id=0aef3e74& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_X_DataTable_vue_vue_type_template_id_0aef3e74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./X-DataTable.vue?vue&type=template&id=0aef3e74& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/X-DataTable.vue?vue&type=template&id=0aef3e74&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_X_DataTable_vue_vue_type_template_id_0aef3e74___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_X_DataTable_vue_vue_type_template_id_0aef3e74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/X-Dialog.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/X-Dialog.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _X_Dialog_vue_vue_type_template_id_05ebfb48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./X-Dialog.vue?vue&type=template&id=05ebfb48& */ "./resources/js/components/X-Dialog.vue?vue&type=template&id=05ebfb48&");
/* harmony import */ var _X_Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./X-Dialog.vue?vue&type=script&lang=js& */ "./resources/js/components/X-Dialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _X_Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _X_Dialog_vue_vue_type_template_id_05ebfb48___WEBPACK_IMPORTED_MODULE_0__["render"],
  _X_Dialog_vue_vue_type_template_id_05ebfb48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/X-Dialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/X-Dialog.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/X-Dialog.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_X_Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./X-Dialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/X-Dialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_X_Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/X-Dialog.vue?vue&type=template&id=05ebfb48&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/X-Dialog.vue?vue&type=template&id=05ebfb48& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_X_Dialog_vue_vue_type_template_id_05ebfb48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./X-Dialog.vue?vue&type=template&id=05ebfb48& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/X-Dialog.vue?vue&type=template&id=05ebfb48&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_X_Dialog_vue_vue_type_template_id_05ebfb48___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_X_Dialog_vue_vue_type_template_id_05ebfb48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/dashboard/Index.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/dashboard/Index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_f7b9f0c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=f7b9f0c4&scoped=true& */ "./resources/js/pages/dashboard/Index.vue?vue&type=template&id=f7b9f0c4&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/dashboard/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_id_f7b9f0c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=f7b9f0c4&scoped=true&lang=css& */ "./resources/js/pages/dashboard/Index.vue?vue&type=style&index=0&id=f7b9f0c4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_f7b9f0c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_f7b9f0c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f7b9f0c4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/dashboard/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/dashboard/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/dashboard/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/dashboard/Index.vue?vue&type=style&index=0&id=f7b9f0c4&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/pages/dashboard/Index.vue?vue&type=style&index=0&id=f7b9f0c4&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_f7b9f0c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=f7b9f0c4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/Index.vue?vue&type=style&index=0&id=f7b9f0c4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_f7b9f0c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_f7b9f0c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_f7b9f0c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_f7b9f0c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/dashboard/Index.vue?vue&type=template&id=f7b9f0c4&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/dashboard/Index.vue?vue&type=template&id=f7b9f0c4&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_f7b9f0c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=f7b9f0c4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/Index.vue?vue&type=template&id=f7b9f0c4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_f7b9f0c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_f7b9f0c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/ActivityLogDataService.js":
/*!*********************************************************!*\
  !*** ./resources/js/services/ActivityLogDataService.js ***!
  \*********************************************************/
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


var ActivityLogDataService = /*#__PURE__*/function () {
  function ActivityLogDataService() {
    _classCallCheck(this, ActivityLogDataService);
  }

  _createClass(ActivityLogDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/activity_logs", data);
    }
  }]);

  return ActivityLogDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ActivityLogDataService());

/***/ }),

/***/ "./resources/js/services/DashboardDataService.js":
/*!*******************************************************!*\
  !*** ./resources/js/services/DashboardDataService.js ***!
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


var DashboardDataService = /*#__PURE__*/function () {
  function DashboardDataService() {
    _classCallCheck(this, DashboardDataService);
  }

  _createClass(DashboardDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/dashboard", data);
    }
  }]);

  return DashboardDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new DashboardDataService());

/***/ })

}]);