(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[118],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/assets/Edit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/assets/Edit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_AssetDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/AssetDataService */ "./resources/js/services/AssetDataService.js");
/* harmony import */ var _Form_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue */ "./resources/js/pages/assets/Form.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Form: _Form_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
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
      },
      errors: {
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

      _services_AssetDataService__WEBPACK_IMPORTED_MODULE_0__["default"].show(this.$route.params.id, data).then(function (response) {
        console.log(response.data);
        _this.form = _objectSpread(_objectSpread(_objectSpread({}, _this.form), response.data.data), {
          date_range: [response.data.data.warranty_start_date, response.data.data.warranty_end_date]
        });
      })["catch"](function (error) {
        console.log(error.response);
        alert("An error has occurred.");

        _this.$router.push({
          name: "assets.index"
        }, function () {});
      });
    },
    onSave: function onSave(value) {
      var _this2 = this;

      _services_AssetDataService__WEBPACK_IMPORTED_MODULE_0__["default"].update(this.$route.params.id, value).then(function (response) {
        console.log(response.data);
        alert("Successfully updated.");

        _this2.$router.go(-1);
      })["catch"](function (error) {
        console.log(error.response.data);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/assets/Edit.vue?vue&type=template&id=cb628146&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/assets/Edit.vue?vue&type=template&id=cb628146& ***!
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
      _c("page-header", { attrs: { title: "Update Asset", backButton: true } }),
      _vm._v(" "),
      _c("Form", {
        attrs: { assetForm: _vm.form, errors: _vm.errors },
        on: { "on-save": _vm.onSave }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/assets/Edit.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/assets/Edit.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_cb628146___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=cb628146& */ "./resources/js/pages/assets/Edit.vue?vue&type=template&id=cb628146&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/pages/assets/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_cb628146___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_cb628146___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/assets/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/assets/Edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/assets/Edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/assets/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/assets/Edit.vue?vue&type=template&id=cb628146&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/assets/Edit.vue?vue&type=template&id=cb628146& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_cb628146___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=cb628146& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/assets/Edit.vue?vue&type=template&id=cb628146&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_cb628146___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_cb628146___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);