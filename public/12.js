(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/features/Create.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/features/Create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue */ "./resources/js/pages/features/Form.vue");
/* harmony import */ var _services_FeatureDataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/FeatureDataService */ "./resources/js/services/FeatureDataService.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FeatureCreate",
  props: {
    dialogCreate: {
      type: Boolean,
      "default": false
    },
    title: {
      type: String,
      "default": ""
    },
    review_category_id: {
      "default": null
    }
  },
  components: {
    Form: _Form_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      dialog: false,
      errors: {
        code: [],
        slug: [],
        name: [],
        is_active: [],
        is_required: [],
        review_category_id: []
      }
    };
  },
  methods: {
    onSave: function onSave(value) {
      var _this = this;

      _services_FeatureDataService__WEBPACK_IMPORTED_MODULE_1__["default"].store(value).then(function (response) {
        alert("Successfully created.");

        _this.$emit("save-dialog");
      })["catch"](function (error) {
        console.log(error);
        console.log(error.reponse);
        alert("An error has occurred.");
        _this.errors = _objectSpread(_objectSpread({}, _this.errors), error.response.data.errors);
      });
    },
    onCancel: function onCancel() {
      this.errors = {
        code: [],
        slug: [],
        name: [],
        is_active: [],
        is_required: [],
        review_category_id: []
      };
      this.$emit("close-dialog");
    }
  },
  watch: {
    dialogCreate: {
      immediate: true,
      deep: true,
      handler: function handler(newValue) {
        this.dialog = newValue;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/features/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/features/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue */ "./resources/js/pages/features/Form.vue");
/* harmony import */ var _services_FeatureDataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/FeatureDataService */ "./resources/js/services/FeatureDataService.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FeatureEdit",
  props: {
    dialogEdit: {
      type: Boolean,
      "default": false
    },
    title: {
      type: String,
      "default": ""
    },
    review_category_id: {
      "default": null
    },
    feature: {
      type: Object,
      "default": function _default() {}
    }
  },
  components: {
    Form: _Form_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      dialog: false,
      form: {
        code: "",
        slug: "",
        name: "",
        is_active: true,
        is_required: true,
        review_category_id: null
      },
      errors: {
        code: [],
        slug: [],
        name: [],
        is_active: [],
        is_required: [],
        review_category_id: []
      }
    };
  },
  methods: {
    getData: function getData(feature) {
      var _this = this;

      var data = {};
      _services_FeatureDataService__WEBPACK_IMPORTED_MODULE_1__["default"].show(feature.id, data).then(function (response) {
        _this.form = _objectSpread(_objectSpread({}, _this.form), response.data.data);
      })["catch"](function (error) {
        console.log(error);
        alert("An error has occurred.");
      });
    },
    onSave: function onSave(value) {
      var _this2 = this;

      console.log(value);
      _services_FeatureDataService__WEBPACK_IMPORTED_MODULE_1__["default"].update(value.id, value).then(function (response) {
        alert("Successfully edited.");

        _this2.$emit("save-dialog");
      })["catch"](function (error) {
        console.log(error);
        alert("An error has occurred.");
        _this2.errors = _objectSpread(_objectSpread({}, _this2.errors), error.response.data.errors);
      });
    },
    onCancel: function onCancel() {
      this.errors = {
        code: [],
        slug: [],
        name: [],
        is_active: [],
        is_required: [],
        review_category_id: []
      };
      this.$emit("close-dialog");
    }
  },
  watch: {
    dialogEdit: {
      immediate: true,
      deep: true,
      handler: function handler(newValue, oldValue) {
        this.dialog = newValue;

        if (!oldValue && newValue && this.feature) {
          this.getData(this.feature);
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/features/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/features/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_FeatureDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/FeatureDataService */ "./resources/js/services/FeatureDataService.js");
/* harmony import */ var _Create_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue */ "./resources/js/pages/features/Create.vue");
/* harmony import */ var _Edit_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit.vue */ "./resources/js/pages/features/Edit.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "features-index",
  components: {
    FeatureCreate: _Create_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    FeatureEdit: _Edit_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      filter: {
        status: "Active",
        statuses: ["Active", "Inactive", "Deleted"]
      },
      dialogFeatureCreate: false,
      dialogFeatureEdit: false,
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
          sortBy: ["name"],
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
          text: "Name",
          value: "name"
        }, {
          text: "Required",
          value: "is_required"
        } // { text: "Assets", value: "quantity" }
        ]
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
        var search = _this.search;
        var status = _this.filter.status;
        var data = {
          params: {
            sortBy: sortBy[0],
            sortType: sortDesc[0] ? "desc" : "asc",
            page: page,
            itemsPerPage: itemsPerPage,
            search: search,
            status: status,
            review_category_id: _this.$route.params.id
          }
        };
        _services_FeatureDataService__WEBPACK_IMPORTED_MODULE_0__["default"].getAll(data).then(function (response) {
          _this.items = response.data.data.data;
          _this.tableOptions.serverItemsLength = response.data.data.total;
          _this.tableOptions.loading = false;
          resolve();
        })["catch"](function (error) {
          _this.tableOptions.loading = false;
          console.log(error.response);
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

          this.dialogFeatureEdit = true;
          break;

        case "delete":
          this.onDelete();
          break;

        case "restore":
          break;

        case "export":
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
      _services_FeatureDataService__WEBPACK_IMPORTED_MODULE_0__["default"].deleteMany(data).then(function (response) {
        _this2.getData();

        _this2.selectedItems = [];
      })["catch"](function (error) {
        console.log(error);
        alert("An error has occurred.");
      });
    },
    clearFilters: function clearFilters() {
      this.filter.status = "Active";
      this.selectedItems = [];
      this.search = "";
      this.tableOptions.options = {
        sortBy: ["name"],
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/features/Index.vue?vue&type=style&index=0&id=c8c8b3ee&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/features/Index.vue?vue&type=style&index=0&id=c8c8b3ee&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\na[data-v-c8c8b3ee] {\r\n    text-decoration: none;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/features/Index.vue?vue&type=style&index=0&id=c8c8b3ee&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/features/Index.vue?vue&type=style&index=0&id=c8c8b3ee&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=c8c8b3ee&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/features/Index.vue?vue&type=style&index=0&id=c8c8b3ee&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/features/Create.vue?vue&type=template&id=00e53456&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/features/Create.vue?vue&type=template&id=00e53456& ***!
  \*************************************************************************************************************************************************************************************************************/
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
      attrs: { persistent: "", "max-width": "500" },
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
            "v-card-text",
            [
              _c("Form", {
                attrs: {
                  title: "New Feature",
                  review_category_id: _vm.review_category_id,
                  errors: _vm.errors
                },
                on: { "on-save": _vm.onSave, "on-cancel": _vm.onCancel }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/features/Edit.vue?vue&type=template&id=65ff1823&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/features/Edit.vue?vue&type=template&id=65ff1823& ***!
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
      attrs: { persistent: "", "max-width": "500" },
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
            "v-card-text",
            [
              _c("Form", {
                attrs: {
                  title: "Update Feature",
                  featureForm: _vm.form,
                  review_category_id: _vm.review_category_id,
                  errors: _vm.errors
                },
                on: { "on-save": _vm.onSave, "on-cancel": _vm.onCancel }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/features/Index.vue?vue&type=template&id=c8c8b3ee&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/features/Index.vue?vue&type=template&id=c8c8b3ee&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
        { attrs: { backButton: "", title: "Review Category Features" } },
        [
          _c(
            "template",
            { slot: "leftSideNavigation" },
            [
              _c(
                "v-btn",
                {
                  attrs: { text: "", title: "Add new feature", icon: "" },
                  on: {
                    click: function($event) {
                      _vm.dialogFeatureCreate = true
                    }
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
                attrs: {
                  label: "Search",
                  clearable: "",
                  "append-icon": "mdi-clipboard-search-outline"
                }
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
          _vm.filter.status != "Active"
            ? _c(
                "v-chip",
                {
                  attrs: { close: "", label: "", outlined: "", small: "" },
                  on: {
                    "click:close": function($event) {
                      _vm.filter.status = "Active"
                    }
                  }
                },
                [
                  _vm._v(
                    "\n            " + _vm._s(_vm.filter.status) + "\n        "
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
                      key: "item.is_required",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _vm._v(
                            "\n                    " +
                              _vm._s(item.is_required ? "true" : "false") +
                              "\n                "
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
      ),
      _vm._v(" "),
      _c("FeatureCreate", {
        attrs: {
          dialogCreate: _vm.dialogFeatureCreate,
          review_category_id: _vm.$route.params.id
        },
        on: {
          "close-dialog": function($event) {
            _vm.dialogFeatureCreate = false
          },
          "save-dialog": function() {
            _vm.getData()
            _vm.dialogFeatureCreate = false
          }
        }
      }),
      _vm._v(" "),
      _c("FeatureEdit", {
        attrs: {
          feature: _vm.selectedItems[0],
          dialogEdit: _vm.dialogFeatureEdit,
          review_category_id: _vm.$route.params.id
        },
        on: {
          "close-dialog": function($event) {
            _vm.dialogFeatureEdit = false
          },
          "save-dialog": function() {
            _vm.getData()
            _vm.dialogFeatureEdit = false
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/features/Create.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/features/Create.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_00e53456___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=00e53456& */ "./resources/js/pages/features/Create.vue?vue&type=template&id=00e53456&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/pages/features/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_00e53456___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_00e53456___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/features/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/features/Create.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/features/Create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/features/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/features/Create.vue?vue&type=template&id=00e53456&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/features/Create.vue?vue&type=template&id=00e53456& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_00e53456___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=00e53456& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/features/Create.vue?vue&type=template&id=00e53456&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_00e53456___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_00e53456___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/features/Edit.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/features/Edit.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_65ff1823___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=65ff1823& */ "./resources/js/pages/features/Edit.vue?vue&type=template&id=65ff1823&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/pages/features/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_65ff1823___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_65ff1823___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/features/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/features/Edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/features/Edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/features/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/features/Edit.vue?vue&type=template&id=65ff1823&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/features/Edit.vue?vue&type=template&id=65ff1823& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_65ff1823___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=65ff1823& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/features/Edit.vue?vue&type=template&id=65ff1823&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_65ff1823___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_65ff1823___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/features/Index.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/features/Index.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_c8c8b3ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=c8c8b3ee&scoped=true& */ "./resources/js/pages/features/Index.vue?vue&type=template&id=c8c8b3ee&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/features/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_id_c8c8b3ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=c8c8b3ee&scoped=true&lang=css& */ "./resources/js/pages/features/Index.vue?vue&type=style&index=0&id=c8c8b3ee&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_c8c8b3ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_c8c8b3ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c8c8b3ee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/features/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/features/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/features/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/features/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/features/Index.vue?vue&type=style&index=0&id=c8c8b3ee&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/features/Index.vue?vue&type=style&index=0&id=c8c8b3ee&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_c8c8b3ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=c8c8b3ee&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/features/Index.vue?vue&type=style&index=0&id=c8c8b3ee&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_c8c8b3ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_c8c8b3ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_c8c8b3ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_c8c8b3ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/features/Index.vue?vue&type=template&id=c8c8b3ee&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/features/Index.vue?vue&type=template&id=c8c8b3ee&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c8c8b3ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=c8c8b3ee&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/features/Index.vue?vue&type=template&id=c8c8b3ee&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c8c8b3ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c8c8b3ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);