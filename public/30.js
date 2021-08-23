(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/permissions/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/permissions/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_PermissionDataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/PermissionDataService */ "./resources/js/services/PermissionDataService.js");
/* harmony import */ var _components_selectors_EmployeeDialogSelector_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/selectors/EmployeeDialogSelector.vue */ "./resources/js/components/selectors/EmployeeDialogSelector.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    EmployeeDialogSelector: _components_selectors_EmployeeDialogSelector_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      user: null,
      filter: {
        status: "Active",
        statuses: ["Active", "Inactive", "Deleted"]
      },
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
      }],
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
          text: "Name",
          value: "name"
        }, {
          text: "Category",
          value: "category"
        }]
      },
      search: "",
      items: [],
      selectedItems: []
    };
  },
  methods: {
    getPermissions: function getPermissions(item) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!item) {
                  _context.next = 12;
                  break;
                }

                _context.prev = 1;
                _context.next = 4;
                return _services_PermissionDataService__WEBPACK_IMPORTED_MODULE_1__["default"].show(item.id);

              case 4:
                response = _context.sent;
                _this.selectedItems = response.data.data;
                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);
                alert("An error has occurred.");

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 8]]);
      }))();
    },
    getData: function getData() {
      var _this2 = this;

      this.tableOptions.loading = true;
      return new Promise(function (resolve, reject) {
        var _this2$tableOptions$o = _this2.tableOptions.options,
            sortBy = _this2$tableOptions$o.sortBy,
            sortDesc = _this2$tableOptions$o.sortDesc,
            page = _this2$tableOptions$o.page,
            itemsPerPage = _this2$tableOptions$o.itemsPerPage;
        var search = _this2.search;
        var status = _this2.filter.status;
        var data = {
          params: {
            sortBy: sortBy[0],
            sortType: sortDesc[0] ? "desc" : "asc",
            page: page,
            itemsPerPage: itemsPerPage,
            search: search,
            status: status,
            role: ""
          }
        };
        _services_PermissionDataService__WEBPACK_IMPORTED_MODULE_1__["default"].getAll(data).then(function (response) {
          _this2.items = response.data.data;
          _this2.tableOptions.serverItemsLength = response.data.length;
          _this2.tableOptions.loading = false;
          resolve();
        })["catch"](function (error) {
          _this2.tableOptions.loading = false;
          console.log(error);
          reject();
        });
      });
    },
    onSelectEmployee: function onSelectEmployee(e) {
      if (e == null || e == undefined) {
        this.user = null;
        return;
      }

      this.user = e[0];
      this.getPermissions(e[0]);
    },
    onSave: function onSave() {
      var _this3 = this;

      if (!this.selectedItems.length) {
        alert("No data selected.");
        return;
      }

      if (!confirm("Do you want to update permissions?")) {
        return;
      }

      _services_PermissionDataService__WEBPACK_IMPORTED_MODULE_1__["default"].update(this.user.id, {
        permissions: this.selectedItems
      }).then(function (response) {
        alert(response.data.message);
        _this3.user = null;
        _this3.selectedItems = [];

        _this3.getData();
      })["catch"](function (error) {
        console.log(error.response);
        alert("An error has occurred.");
      });
    },
    refreshData: function refreshData() {
      this.user = null;
      this.clearFilters();
    },
    clearFilters: function clearFilters() {
      this.filter.status = "Active";
      this.selectedItems = [];
      this.search = "";
      this.tableOptions.options = {
        sortBy: ["code"],
        sortDesc: [false],
        page: 1,
        itemsPerPage: 10
      };
    }
  },
  computed: {
    params: function params(nv) {
      return _objectSpread(_objectSpread({}, this.tableOptions.options), {}, {
        // query: this.search
        query: this.filter.status
      });
    },
    hasFilters: function hasFilters() {
      if (this.filter.status != "Active") {
        return true;
      }

      if (this.search || this.selectedItems.length) {
        return true;
      }

      return false;
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
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/permissions/Index.vue?vue&type=template&id=1547ddce&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/permissions/Index.vue?vue&type=template&id=1547ddce& ***!
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
    "div",
    [
      _c(
        "page-header",
        [
          _c(
            "template",
            { slot: "leftSideNavigation" },
            [
              _c("EmployeeDialogSelector", {
                attrs: { selected: !_vm.user ? [] : [].concat(_vm.user) },
                on: { "on-select": _vm.onSelectEmployee },
                scopedSlots: _vm._u([
                  {
                    key: "openDialog",
                    fn: function(ref) {
                      var on = ref.on
                      var attrs = ref.attrs
                      return [
                        _c(
                          "v-btn",
                          _vm._g(
                            _vm._b(
                              { attrs: { text: "", title: "Employee" } },
                              "v-btn",
                              attrs,
                              false
                            ),
                            on
                          ),
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(
                                  _vm.user ? _vm.user.name : "Select Employee"
                                ) +
                                "\n                    "
                            )
                          ]
                        )
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _vm.user
                ? _c(
                    "v-btn",
                    { attrs: { icon: "" }, on: { click: _vm.onSave } },
                    [_c("v-icon", [_vm._v("mdi-content-save")])],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.user
                ? _c(
                    "v-btn",
                    { attrs: { icon: "" }, on: { click: _vm.refreshData } },
                    [_c("v-icon", [_vm._v("mdi-refresh")])],
                    1
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("template", { slot: "rightSideNavigation" })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "my-3" },
        [
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
          _vm.hasFilters
            ? _c(
                "v-chip",
                {
                  attrs: { close: "", label: "", outlined: "", small: "" },
                  on: { "click:close": _vm.clearFilters }
                },
                [_vm._v("\n            Clear All Items\n        ")]
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
                  "group-by": "category",
                  "show-group-by": "",
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
                                  name: "departments.show",
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
                                "text-color": item.status.text_color
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

/***/ "./resources/js/pages/permissions/Index.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/permissions/Index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_1547ddce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=1547ddce& */ "./resources/js/pages/permissions/Index.vue?vue&type=template&id=1547ddce&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/permissions/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_1547ddce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_1547ddce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/permissions/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/permissions/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/permissions/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/permissions/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/permissions/Index.vue?vue&type=template&id=1547ddce&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/permissions/Index.vue?vue&type=template&id=1547ddce& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_1547ddce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=1547ddce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/permissions/Index.vue?vue&type=template&id=1547ddce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_1547ddce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_1547ddce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/PermissionDataService.js":
/*!********************************************************!*\
  !*** ./resources/js/services/PermissionDataService.js ***!
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


var PermissionDataService = /*#__PURE__*/function () {
  function PermissionDataService() {
    _classCallCheck(this, PermissionDataService);
  }

  _createClass(PermissionDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/permissions", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/permissions/".concat(id), data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/permissions/".concat(id), data);
    }
  }]);

  return PermissionDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new PermissionDataService());

/***/ })

}]);