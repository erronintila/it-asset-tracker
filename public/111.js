(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[111],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/work_orders/Edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/work_orders/Edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_WorkOrderDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/WorkOrderDataService */ "./resources/js/services/WorkOrderDataService.js");
/* harmony import */ var _Form_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue */ "./resources/js/pages/work_orders/Form.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Form: _Form_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
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
        transactionable: {
          incident: "",
          diagnosis: "",
          action_taken: "",
          recommendation: "",
          scheduled_start_date: "",
          scheduled_end_date: "",
          actual_start_date: "",
          actual_end_date: ""
        },
        transaction_type_id: "",
        user: {},
        parent_asset_id: "",
        owner_id: "",
        assigned_user_id: "",
        assigned_location_id: "",
        assigned_asset_id: "",
        assets: [],
        assigned_employees: [],
        assigned_location: null,
        actual_date_performed: [],
        scheduled_date: [],
        assigned_user: null,
        parent_asset: null
      },
      errors: {
        code: [],
        reference_no: [],
        request_date: [],
        description: [],
        incident: [],
        diagnosis: [],
        action_taken: [],
        recommendation: [],
        scheduled_start_date: [],
        scheduled_end_date: [],
        actual_start_date: [],
        actual_end_date: [],
        transactionable: [],
        transaction_type_id: [],
        user_id: [],
        parent_asset_id: [],
        owner_id: [],
        assigned_user_id: [],
        assigned_location_id: [],
        assigned_asset_id: [],
        assets: [],
        assigned_employees: []
      }
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      var data = {}; // if (this.$route.params.isDeleted) {
      //     data = {
      //         params: {
      //             isDeleted: true
      //         }
      //     };
      // }

      _services_WorkOrderDataService__WEBPACK_IMPORTED_MODULE_0__["default"].show(this.$route.params.id, data).then(function (response) {
        _this.form = _objectSpread(_objectSpread(_objectSpread({}, _this.form), response.data.data), {
          scheduled_date: [moment__WEBPACK_IMPORTED_MODULE_2___default()(response.data.data.transactionable.scheduled_start_date).format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_2___default()(response.data.data.transactionable.scheduled_end_date).format("YYYY-MM-DD")]
        }); // this.form.actual_start_date = moment(
        //     response.data.data.transactionable.actual_start_date
        // ).format("YYYY-MM-DD");
        // this.form.actual_end_date = moment(
        //     response.data.data.transactionable.actual_end_date
        // ).format("YYYY-MM-DD");
      })["catch"](function (error) {
        console.log(error);
        alert("An error has occurred.");

        _this.$router.push({
          name: "work_orders.index"
        }, function () {});
      });
    },
    onSave: function onSave(value) {
      var _this2 = this;

      _services_WorkOrderDataService__WEBPACK_IMPORTED_MODULE_0__["default"].update(this.$route.params.id, value).then(function (response) {
        alert("Successfully updated.");

        _this2.$router.go(-1);
      })["catch"](function (error) {
        console.log(error);
        alert("An error has occurred.");

        if (error.response) {
          if (error.response.data) {
            _this2.errors = _objectSpread(_objectSpread({}, _this2.errors), error.response.data.errors);
          }
        }
      });
    }
  },
  created: function created() {
    this.getData();
  } // activated() {
  //     this.getData();
  // }

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/work_orders/Edit.vue?vue&type=template&id=b4df4562&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/work_orders/Edit.vue?vue&type=template&id=b4df4562& ***!
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
    "div",
    [
      _c("page-header", {
        attrs: { title: "Update Work Order", backButton: true }
      }),
      _vm._v(" "),
      _c("Form", {
        attrs: { workOrderForm: _vm.form, errors: _vm.errors },
        on: { "on-save": _vm.onSave }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/work_orders/Edit.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/work_orders/Edit.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_b4df4562___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=b4df4562& */ "./resources/js/pages/work_orders/Edit.vue?vue&type=template&id=b4df4562&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/pages/work_orders/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_b4df4562___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_b4df4562___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/work_orders/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/work_orders/Edit.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/work_orders/Edit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/work_orders/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/work_orders/Edit.vue?vue&type=template&id=b4df4562&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/work_orders/Edit.vue?vue&type=template&id=b4df4562& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_b4df4562___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=b4df4562& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/work_orders/Edit.vue?vue&type=template&id=b4df4562&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_b4df4562___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_b4df4562___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);