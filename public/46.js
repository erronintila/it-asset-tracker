(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/DepartmentTable.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tables/DepartmentTable.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_DepartmentDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/DepartmentDataService */ "./resources/js/services/DepartmentDataService.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "department-table",
  props: {
    showSelect: {
      type: Boolean,
      "default": true
    },
    selected: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    search: {
      type: String,
      "default": ""
    },
    headers: {
      type: Array,
      "default": function _default() {
        return [{
          text: "Code",
          value: "code"
        }, {
          text: "Name",
          value: "name"
        }, {
          text: "Manager",
          value: "manager.full_name"
        }, {
          text: "Assets",
          value: "quantity"
        }];
      }
    }
  },
  data: function data() {
    return {
      selectedItems: [],
      items: [],
      tableOptions: {
        options: {
          sortBy: ["name"],
          sortDesc: [false],
          page: 1,
          itemsPerPage: 10
        },
        loading: false,
        itemsPerPageOptions: [10, 20, 50, 100],
        serverItemsLength: 0
      }
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
        var data = {
          params: {
            sortBy: sortBy[0],
            sortType: sortDesc[0] ? "desc" : "asc",
            page: page,
            itemsPerPage: itemsPerPage,
            search: _this.search
          }
        };
        _services_DepartmentDataService__WEBPACK_IMPORTED_MODULE_0__["default"].getAll(data).then(function (response) {
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
    }
  },
  computed: {
    params: function params() {
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
    },
    selected: {
      immediate: true,
      deep: true,
      handler: function handler(newValue) {
        this.selectedItems = newValue;
      }
    },
    selectedItems: function selectedItems() {
      this.$emit("selected-items", this.selectedItems);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/tests/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/tests/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_tables_DepartmentTable_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/tables/DepartmentTable.vue */ "./resources/js/components/tables/DepartmentTable.vue");
//
//
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
    DepartmentTable: _components_tables_DepartmentTable_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    onSelectedItems: function onSelectedItems(e) {
      console.log(e);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/DepartmentTable.vue?vue&type=template&id=0d663246&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tables/DepartmentTable.vue?vue&type=template&id=0d663246& ***!
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
  return _c("v-data-table", {
    attrs: {
      "show-select": _vm.showSelect,
      "item-key": "id",
      headers: _vm.headers,
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
                [_vm._v("\n            " + _vm._s(item.code) + "\n        ")]
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
                    "\n            " + _vm._s(item.status.text) + "\n        "
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/tests/Index.vue?vue&type=template&id=dc3e032a&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/tests/Index.vue?vue&type=template&id=dc3e032a& ***!
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
    "div",
    [
      _c("DepartmentTable", {
        ref: "departmentTable",
        attrs: { showSelect: false },
        on: { "selected-items": _vm.onSelectedItems }
      }),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          on: {
            click: function($event) {
              return _vm.$refs.departmentTable.getData()
            }
          }
        },
        [_vm._v("Hello")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/tables/DepartmentTable.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/tables/DepartmentTable.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DepartmentTable_vue_vue_type_template_id_0d663246___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DepartmentTable.vue?vue&type=template&id=0d663246& */ "./resources/js/components/tables/DepartmentTable.vue?vue&type=template&id=0d663246&");
/* harmony import */ var _DepartmentTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DepartmentTable.vue?vue&type=script&lang=js& */ "./resources/js/components/tables/DepartmentTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DepartmentTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DepartmentTable_vue_vue_type_template_id_0d663246___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DepartmentTable_vue_vue_type_template_id_0d663246___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tables/DepartmentTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tables/DepartmentTable.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/tables/DepartmentTable.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DepartmentTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DepartmentTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/DepartmentTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DepartmentTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tables/DepartmentTable.vue?vue&type=template&id=0d663246&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/tables/DepartmentTable.vue?vue&type=template&id=0d663246& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DepartmentTable_vue_vue_type_template_id_0d663246___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DepartmentTable.vue?vue&type=template&id=0d663246& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tables/DepartmentTable.vue?vue&type=template&id=0d663246&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DepartmentTable_vue_vue_type_template_id_0d663246___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DepartmentTable_vue_vue_type_template_id_0d663246___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/tests/Index.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/tests/Index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_dc3e032a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=dc3e032a& */ "./resources/js/pages/tests/Index.vue?vue&type=template&id=dc3e032a&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/tests/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_dc3e032a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_dc3e032a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/tests/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/tests/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/tests/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/tests/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/tests/Index.vue?vue&type=template&id=dc3e032a&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/tests/Index.vue?vue&type=template&id=dc3e032a& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_dc3e032a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=dc3e032a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/tests/Index.vue?vue&type=template&id=dc3e032a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_dc3e032a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_dc3e032a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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