(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/CardSummary.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/CardSummary.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "card-summary",
  props: {
    title: {
      type: String,
      "default": ""
    },
    subtitle: {
      type: String,
      "default": ""
    }
  },
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/manufacturers/Assets.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/manufacturers/Assets.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_AssetDataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/AssetDataService */ "./resources/js/services/AssetDataService.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    model_id: {
      type: Number,
      "default": null
    }
  },
  data: function data() {
    return {
      filter: {
        status: "Active",
        statuses: ["Active", "Deleted", "Disposed", "In Maintenance", "In Use", "In Storage", "Pending"]
      },
      tableOptions: {
        options: {
          sortBy: ["description"],
          sortDesc: [false],
          page: 1,
          itemsPerPage: 10
        },
        loading: false,
        itemsPerPageOptions: [10, 20, 50, 100],
        serverItemsLength: 0,
        headers: [{
          text: "Asset Tag",
          value: "asset_tag"
        }, {
          text: "Serial",
          value: "serial_no"
        }, {
          text: "Description",
          value: "description"
        }, {
          text: "Category",
          value: "asset_category.name"
        }, // { text: "Manufacturer", value: "manufacturer.name" },
        {
          text: "Assigned To",
          value: "assigned_user.name"
        }, {
          text: "Status",
          value: "status",
          sortable: false
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

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this$model_id;

        var _this$tableOptions$op, sortBy, sortDesc, page, itemsPerPage, data, response;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.tableOptions.loading = true;
                _this$tableOptions$op = _this.tableOptions.options, sortBy = _this$tableOptions$op.sortBy, sortDesc = _this$tableOptions$op.sortDesc, page = _this$tableOptions$op.page, itemsPerPage = _this$tableOptions$op.itemsPerPage;
                data = {
                  params: {
                    sortBy: sortBy[0],
                    sortType: sortDesc[0] ? "desc" : "asc",
                    page: page,
                    itemsPerPage: itemsPerPage,
                    manufacturer_id: (_this$model_id = _this.model_id) !== null && _this$model_id !== void 0 ? _this$model_id : 0
                  }
                };
                _context.prev = 3;
                _context.next = 6;
                return _services_AssetDataService__WEBPACK_IMPORTED_MODULE_1__["default"].getAll(data);

              case 6:
                response = _context.sent;
                _this.items = response.data.data.data;
                _this.tableOptions.serverItemsLength = response.data.data.total;
                _this.tableOptions.loading = false;
                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](3);
                _this.tableOptions.loading = false;
                console.log(_context.t0);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 12]]);
      }))();
    }
  },
  computed: {
    params: function params(nv) {
      return _objectSpread({}, this.tableOptions.options);
    }
  },
  watch: {
    params: {
      immediate: true,
      deep: true,
      handler: function handler() {
        this.getData();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/manufacturers/Show.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/manufacturers/Show.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_pages_CardSummary_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pages/CardSummary.vue */ "./resources/js/components/pages/CardSummary.vue");
/* harmony import */ var _services_ManufacturerDataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ManufacturerDataService */ "./resources/js/services/ManufacturerDataService.js");
/* harmony import */ var _services_AssetDataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/AssetDataService */ "./resources/js/services/AssetDataService.js");
/* harmony import */ var _Assets_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Assets.vue */ "./resources/js/pages/manufacturers/Assets.vue");


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




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CardSummary: _components_pages_CardSummary_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Assets: _Assets_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      tab: null,
      items: ["details", "assets", "licenses", "System Activity Logs"],
      records: [],
      assets: [],
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
      },
      tableAssetOptions: {
        options: {
          sortBy: ["description"],
          sortDesc: [false],
          page: 1,
          itemsPerPage: 10
        },
        loading: false,
        itemsPerPageOptions: [10, 20, 50, 100],
        serverItemsLength: 0,
        headers: [{
          text: "Asset Tag",
          value: "asset_tag"
        }, {
          text: "Description",
          value: "description"
        }, {
          text: "Category",
          value: "asset_category.name"
        }, {
          text: "Assigned To",
          value: "assigned_user.name"
        }, {
          text: "Status",
          value: "status",
          sortable: false
        }]
      }
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = {};
                _context.prev = 1;
                _context.next = 4;
                return _services_ManufacturerDataService__WEBPACK_IMPORTED_MODULE_2__["default"].show(_this.$route.params.id, data).then(function (response) {
                  _this.form = _objectSpread(_objectSpread({}, _this.form), response.data.data);
                });

              case 4:
                _context.next = 11;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);
                alert("An error has occurred.");

                _this.$router.push({
                  name: "manufacturers.index"
                }, function () {});

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 6]]);
      }))();
    },
    getAssetData: function getAssetData() {
      var _this2 = this;

      this.tableAssetOptions.loading = true;
      return new Promise(function (resolve, reject) {
        var _this2$tableAssetOpti = _this2.tableAssetOptions.options,
            sortBy = _this2$tableAssetOpti.sortBy,
            sortDesc = _this2$tableAssetOpti.sortDesc,
            page = _this2$tableAssetOpti.page,
            itemsPerPage = _this2$tableAssetOpti.itemsPerPage;
        var data = {
          params: {
            sortBy: sortBy[0],
            sortType: sortDesc[0] ? "desc" : "asc",
            page: page,
            itemsPerPage: itemsPerPage,
            manufacturer_id: _this2.$route.params.id
          }
        };
        _services_AssetDataService__WEBPACK_IMPORTED_MODULE_3__["default"].getAll(data).then(function (response) {
          _this2.assets = response.data.data.data;
          _this2.tableAssetOptions.serverItemsLength = response.data.data.total;
          _this2.tableAssetOptions.loading = false;
          resolve();
        })["catch"](function (error) {
          _this2.tableAssetOptions.loading = false;
          console.log(error);
          reject();
        });
      });
    },
    onDelete: function onDelete() {
      var _this3 = this;

      if (!confirm("WARNING: Do you want to delete this record?")) {
        return;
      }

      _services_ManufacturerDataService__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"](this.$route.params.id, {}).then(function (response) {
        alert(response.data.message);

        _this3.$router.push({
          name: "manufacturers.index"
        });
      })["catch"](function (error) {
        console.log(error);
        alert("An error has occurred.");
      });
    }
  },
  computed: {
    params: function params(nv) {
      return _objectSpread({}, this.tableAssetOptions.options);
    }
  },
  watch: {
    params: {
      immediate: true,
      deep: true,
      handler: function handler() {
        this.getAssetData();
      }
    }
  },
  created: function created() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/CardSummary.vue?vue&type=template&id=1e96e050&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/CardSummary.vue?vue&type=template&id=1e96e050& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    "v-card",
    [
      _vm._t("header"),
      _vm._v(" "),
      _c(
        "v-list-item",
        { attrs: { "two-line": "" } },
        [
          _c(
            "v-list-item-content",
            [
              _c("v-list-item-title", { staticClass: "text-h5" }, [
                _vm._v(
                  "\n                " + _vm._s(_vm.title) + "\n            "
                )
              ]),
              _vm._v(" "),
              _c("v-list-item-subtitle", [
                _vm._v(
                  "\n                " + _vm._s(_vm.subtitle) + "\n            "
                )
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", [_vm._t("body")], 2),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c("v-card-actions", [_vm._t("actions")], 2)
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/manufacturers/Assets.vue?vue&type=template&id=0f676879&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/manufacturers/Assets.vue?vue&type=template&id=0f676879& ***!
  \******************************************************************************************************************************************************************************************************************/
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
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c("v-data-table", {
                attrs: {
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
                      key: "item.asset_tag",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: {
                                  name: "assets.show",
                                  params: { id: item.id }
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(item.asset_tag) +
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
                                  _vm._s(item.status.status) +
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/manufacturers/Show.vue?vue&type=template&id=3c11e273&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/manufacturers/Show.vue?vue&type=template&id=3c11e273& ***!
  \****************************************************************************************************************************************************************************************************************/
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
      _c("page-header", {
        staticClass: "mb-4",
        attrs: { title: "Manufacturer Details", backButton: true }
      }),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "4" } },
            [
              _c("CardSummary", {
                attrs: { title: _vm.form.name, subtitle: "# " + _vm.form.code },
                scopedSlots: _vm._u([
                  {
                    key: "body",
                    fn: function() {
                      return [
                        _c("p", [_vm._v("Phone: " + _vm._s(_vm.form.phone1))]),
                        _vm._v(" "),
                        _vm.form.email
                          ? _c("p", [
                              _vm._v("Email: " + _vm._s(_vm.form.email))
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                        Address: " +
                              _vm._s(_vm.form.address) +
                              ", " +
                              _vm._s(_vm.form.city) +
                              ",\n                        " +
                              _vm._s(_vm.form.province) +
                              ", " +
                              _vm._s(_vm.form.postal_code) +
                              ",\n                        " +
                              _vm._s(_vm.form.country) +
                              "\n                    "
                          )
                        ])
                      ]
                    },
                    proxy: true
                  },
                  {
                    key: "actions",
                    fn: function() {
                      return [
                        _c(
                          "v-btn",
                          {
                            attrs: { icon: "" },
                            on: {
                              click: function($event) {
                                return _vm.$router.push(
                                  "/manufacturers/" +
                                    _vm.$route.params.id +
                                    "/edit"
                                )
                              }
                            }
                          },
                          [
                            _c("v-icon", [
                              _vm._v(
                                "\n                            mdi-file-document-edit-outline\n                        "
                              )
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          { attrs: { icon: "" }, on: { click: _vm.onDelete } },
                          [
                            _c("v-icon", [
                              _vm._v(
                                "\n                            mdi-delete\n                        "
                              )
                            ])
                          ],
                          1
                        )
                      ]
                    },
                    proxy: true
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
              _c(
                "v-card",
                [
                  _c(
                    "v-tabs",
                    {
                      attrs: { "show-arrows": "" },
                      model: {
                        value: _vm.tab,
                        callback: function($$v) {
                          _vm.tab = $$v
                        },
                        expression: "tab"
                      }
                    },
                    [
                      _c("v-tabs-slider", {
                        attrs: { color: "teal lighten-3" }
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.items, function(item) {
                        return _c("v-tab", { key: item }, [
                          _vm._v(
                            "\n                        " +
                              _vm._s(item) +
                              "\n                    "
                          )
                        ])
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "v-tabs-items",
                    {
                      model: {
                        value: _vm.tab,
                        callback: function($$v) {
                          _vm.tab = $$v
                        },
                        expression: "tab"
                      }
                    },
                    [
                      _c(
                        "v-tab-item",
                        [
                          _c(
                            "v-card",
                            { attrs: { flat: "" } },
                            [
                              _c(
                                "v-card-text",
                                [
                                  _c("v-simple-table", {
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function() {
                                          return [
                                            _c("thead", [
                                              _c("tr", [
                                                _c(
                                                  "th",
                                                  { staticClass: "text-left" },
                                                  [
                                                    _vm._v(
                                                      "\n                                                    Name\n                                                "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "th",
                                                  { staticClass: "text-left" },
                                                  [
                                                    _vm._v(
                                                      "\n                                                    Value\n                                                "
                                                    )
                                                  ]
                                                )
                                              ])
                                            ]),
                                            _vm._v(" "),
                                            _c("tbody", [
                                              _c("tr", [
                                                _c("td", [_vm._v("Code")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(_vm.form.code))
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [_vm._v("Name")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(_vm.form.name))
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [
                                                  _vm._v("Contact Person")
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    "\n                                                    " +
                                                      _vm._s(
                                                        _vm.form.contact_person
                                                      ) +
                                                      "\n                                                "
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [_vm._v("Phone No.")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    "\n                                                    " +
                                                      _vm._s(_vm.form.phone1) +
                                                      "\n                                                    " +
                                                      _vm._s(
                                                        _vm.form.phone2
                                                          ? "; " +
                                                              _vm.form.phone2
                                                          : ""
                                                      ) +
                                                      "\n                                                "
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [
                                                  _vm._v("Email Address")
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(_vm.form.email))
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [_vm._v("Website")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(_vm.form.website)
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [_vm._v("Fax")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(_vm.form.fax))
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [_vm._v("Address")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(_vm.form.address)
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [_vm._v("Street")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(_vm.form.street)
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [_vm._v("District")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(_vm.form.district)
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [_vm._v("City")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(_vm._s(_vm.form.city))
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [_vm._v("Province")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(_vm.form.province)
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [_vm._v("Country")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(_vm.form.country)
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [
                                                  _vm._v("Postal Code")
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    "\n                                                    " +
                                                      _vm._s(
                                                        _vm.form.postal_code
                                                      ) +
                                                      "\n                                                "
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [_vm._v("Active")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    "\n                                                    " +
                                                      _vm._s(
                                                        _vm.form.is_active
                                                          ? "Yes"
                                                          : "No"
                                                      ) +
                                                      "\n                                                "
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [_vm._v("Created")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    "\n                                                    " +
                                                      _vm._s(
                                                        _vm._f("moment")(
                                                          _vm.form.created_at,
                                                          "LLLL"
                                                        )
                                                      ) +
                                                      "\n                                                "
                                                  )
                                                ])
                                              ])
                                            ])
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
                        "v-tab-item",
                        [
                          _c(
                            "v-card",
                            { attrs: { flat: "" } },
                            [
                              _c(
                                "v-card-text",
                                [
                                  _c("Assets", {
                                    attrs: { model_id: _vm.form.id }
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
                        "v-tab-item",
                        [
                          _c(
                            "v-card",
                            { attrs: { flat: "" } },
                            [
                              _c(
                                "v-card-text",
                                [
                                  _c("v-simple-table", {
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function() {
                                          return [
                                            _c("thead", [
                                              _c("tr", [
                                                _c(
                                                  "th",
                                                  { staticClass: "text-left" },
                                                  [
                                                    _vm._v(
                                                      "\n                                                    Name\n                                                "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "th",
                                                  { staticClass: "text-left" },
                                                  [
                                                    _vm._v(
                                                      "\n                                                    Value\n                                                "
                                                    )
                                                  ]
                                                )
                                              ])
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "tbody",
                                              _vm._l(_vm.records, function(
                                                item
                                              ) {
                                                return _c(
                                                  "tr",
                                                  { key: item.name },
                                                  [
                                                    _c("td", [
                                                      _vm._v(_vm._s(item.name))
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(_vm._s(item.value))
                                                    ])
                                                  ]
                                                )
                                              }),
                                              0
                                            )
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
                        "v-tab-item",
                        [
                          _c(
                            "v-card",
                            { attrs: { flat: "" } },
                            [
                              _c(
                                "v-card-text",
                                [
                                  _c("v-simple-table", {
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function() {
                                          return [
                                            _c("thead", [
                                              _c("tr", [
                                                _c(
                                                  "th",
                                                  { staticClass: "text-left" },
                                                  [
                                                    _vm._v(
                                                      "\n                                                    Name\n                                                "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "th",
                                                  { staticClass: "text-left" },
                                                  [
                                                    _vm._v(
                                                      "\n                                                    Value\n                                                "
                                                    )
                                                  ]
                                                )
                                              ])
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "tbody",
                                              _vm._l(_vm.records, function(
                                                item
                                              ) {
                                                return _c(
                                                  "tr",
                                                  { key: item.name },
                                                  [
                                                    _c("td", [
                                                      _vm._v(_vm._s(item.name))
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(_vm._s(item.value))
                                                    ])
                                                  ]
                                                )
                                              }),
                                              0
                                            )
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

/***/ "./resources/js/components/pages/CardSummary.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/pages/CardSummary.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardSummary_vue_vue_type_template_id_1e96e050___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardSummary.vue?vue&type=template&id=1e96e050& */ "./resources/js/components/pages/CardSummary.vue?vue&type=template&id=1e96e050&");
/* harmony import */ var _CardSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardSummary.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/CardSummary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardSummary_vue_vue_type_template_id_1e96e050___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardSummary_vue_vue_type_template_id_1e96e050___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/CardSummary.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/CardSummary.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/pages/CardSummary.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardSummary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/CardSummary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/CardSummary.vue?vue&type=template&id=1e96e050&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/pages/CardSummary.vue?vue&type=template&id=1e96e050& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSummary_vue_vue_type_template_id_1e96e050___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardSummary.vue?vue&type=template&id=1e96e050& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/CardSummary.vue?vue&type=template&id=1e96e050&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSummary_vue_vue_type_template_id_1e96e050___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSummary_vue_vue_type_template_id_1e96e050___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/manufacturers/Assets.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/manufacturers/Assets.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Assets_vue_vue_type_template_id_0f676879___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Assets.vue?vue&type=template&id=0f676879& */ "./resources/js/pages/manufacturers/Assets.vue?vue&type=template&id=0f676879&");
/* harmony import */ var _Assets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Assets.vue?vue&type=script&lang=js& */ "./resources/js/pages/manufacturers/Assets.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Assets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Assets_vue_vue_type_template_id_0f676879___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Assets_vue_vue_type_template_id_0f676879___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/manufacturers/Assets.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/manufacturers/Assets.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/manufacturers/Assets.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Assets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Assets.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/manufacturers/Assets.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Assets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/manufacturers/Assets.vue?vue&type=template&id=0f676879&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/manufacturers/Assets.vue?vue&type=template&id=0f676879& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Assets_vue_vue_type_template_id_0f676879___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Assets.vue?vue&type=template&id=0f676879& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/manufacturers/Assets.vue?vue&type=template&id=0f676879&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Assets_vue_vue_type_template_id_0f676879___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Assets_vue_vue_type_template_id_0f676879___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/manufacturers/Show.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/manufacturers/Show.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_3c11e273___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=3c11e273& */ "./resources/js/pages/manufacturers/Show.vue?vue&type=template&id=3c11e273&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/pages/manufacturers/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_3c11e273___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_3c11e273___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/manufacturers/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/manufacturers/Show.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/manufacturers/Show.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/manufacturers/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/manufacturers/Show.vue?vue&type=template&id=3c11e273&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/manufacturers/Show.vue?vue&type=template&id=3c11e273& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_3c11e273___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=3c11e273& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/manufacturers/Show.vue?vue&type=template&id=3c11e273&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_3c11e273___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_3c11e273___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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