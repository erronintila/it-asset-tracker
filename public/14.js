(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selectors/FeatureDialogSelector.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/selectors/FeatureDialogSelector.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_FeatureDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/FeatureDataService */ "./resources/js/services/FeatureDataService.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "feature-selector",
  props: {
    singleSelect: {
      type: Boolean,
      "default": true
    },
    selected: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    reviewCategoryId: {
      type: Number,
      "default": null
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
          text: "Required",
          value: "is_required",
          sortable: false
        }]
      },
      status: "Active",
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
        var status = _this.status;
        var review_category_id = _this.reviewCategoryId;
        var data = {
          params: {
            sortBy: sortBy[0],
            sortType: sortDesc[0] ? "desc" : "asc",
            page: page,
            itemsPerPage: itemsPerPage,
            search: search,
            status: status,
            review_category_id: review_category_id
          }
        };
        _services_FeatureDataService__WEBPACK_IMPORTED_MODULE_0__["default"].getAll(data).then(function (response) {
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
    dialog: function dialog() {
      if (this.dialog) {
        this.getData();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selectors/ReviewCategorySelector.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/selectors/ReviewCategorySelector.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_ReviewCategoryDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ReviewCategoryDataService */ "./resources/js/services/ReviewCategoryDataService.js");
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
  name: "review-category-selector",
  props: {
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
        _services_ReviewCategoryDataService__WEBPACK_IMPORTED_MODULE_0__["default"].getAll(data).then(function (response) {
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
    dialog: function dialog() {
      if (this.dialog) {
        this.getData();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reviews/Form.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/reviews/Form.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_selectors_CustomerDialogSelector_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/selectors/CustomerDialogSelector.vue */ "./resources/js/components/selectors/CustomerDialogSelector.vue");
/* harmony import */ var _components_selectors_EmployeeDialogSelector_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/selectors/EmployeeDialogSelector.vue */ "./resources/js/components/selectors/EmployeeDialogSelector.vue");
/* harmony import */ var _components_selectors_ReviewCategorySelector_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/selectors/ReviewCategorySelector.vue */ "./resources/js/components/selectors/ReviewCategorySelector.vue");
/* harmony import */ var _components_selectors_AssetDialogSelector_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/selectors/AssetDialogSelector.vue */ "./resources/js/components/selectors/AssetDialogSelector.vue");
/* harmony import */ var _components_selectors_FeatureDialogSelector_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../..//components/selectors/FeatureDialogSelector.vue */ "./resources/js/components/selectors/FeatureDialogSelector.vue");
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






/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    reviewForm: {
      type: Object,
      "default": function _default() {
        return {
          code: "",
          slug: "",
          reference_no: "",
          date: "",
          description: "",
          remarks: "",
          review_category: null,
          user: null,
          asset: null,
          features: []
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
          date: [],
          description: [],
          remarks: [],
          review_category_id: [],
          user_id: [],
          asset_id: [],
          features: []
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
          date: [],
          description: [],
          remarks: [],
          review_category_id: [],
          user_id: [],
          asset_id: [],
          features: []
        };
      }
    }
  },
  components: {
    ReviewCategorySelector: _components_selectors_ReviewCategorySelector_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    EmployeeDialogSelector: _components_selectors_EmployeeDialogSelector_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    CustomerDialogSelector: _components_selectors_CustomerDialogSelector_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AssetDialogSelector: _components_selectors_AssetDialogSelector_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    FeatureDialogSelector: _components_selectors_FeatureDialogSelector_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      valid: false,
      category: "",
      requestDateModal: false,
      dialog: false,
      headers: {
        feature: [{
          text: "Code",
          value: "code"
        }, {
          text: "Name",
          value: "name"
        }, {
          text: "Required",
          value: "is_required",
          sortable: false
        }, {
          text: "Rating",
          value: "pivot.rating",
          sortable: false
        }, {
          text: "Remarks",
          value: "pivot.remarks",
          sortable: false
        }, {
          text: "Action",
          value: "action",
          sortable: false
        }]
      },
      form: {
        code: "",
        slug: "",
        reference_no: "",
        date: "",
        description: "",
        remarks: "",
        review_category: null,
        user: null,
        asset: null,
        features: []
      },
      editedIndex: -1,
      editedItem: {
        rating: "",
        remarks: ""
      }
    };
  },
  methods: {
    onSave: function onSave() {
      var _this$form$review_cat, _this$form$user, _this$form$asset;

      if (!confirm("Do you want to save?")) {
        return;
      }

      if (!this.$refs.form.validate()) {
        alert("An error has occurred.");
        return;
      }

      if (!this.form.is_active) {
        this.form.is_active = false;
      }

      this.form.review_category_id = (_this$form$review_cat = this.form.review_category) === null || _this$form$review_cat === void 0 ? void 0 : _this$form$review_cat.id;
      this.form.user_id = (_this$form$user = this.form.user) === null || _this$form$user === void 0 ? void 0 : _this$form$user.id;
      this.form.asset_id = (_this$form$asset = this.form.asset) === null || _this$form$asset === void 0 ? void 0 : _this$form$asset.id;
      this.$emit("on-save", this.form);
    },
    onSelectReviewCategory: function onSelectReviewCategory(e) {
      this.errors.review_category_id = [];

      if (e == null || e == undefined) {
        this.form.review_category = null;
        return;
      }

      this.form.review_category = e[0];
    },
    onSelectUser: function onSelectUser(e) {
      this.errors.user_id = [];

      if (e == null || e == undefined) {
        this.form.user = null;
        return;
      }

      this.form.user = e[0];
    },
    onSelectAsset: function onSelectAsset(e) {
      this.errors.asset_id = [];

      if (e == null || e == undefined) {
        this.form.asset = null;
        return;
      }

      this.form.asset = e[0];
    },
    onSelectFeature: function onSelectFeature(e) {
      this.errors.features = [];

      if (e == null || e == undefined) {
        this.form.features = [];
        return;
      }

      this.form.features = e.map(function (item) {
        return _objectSpread(_objectSpread({}, item), {}, {
          rating: "",
          remarks: ""
        });
      });
    },
    removeItem: function removeItem(item) {
      if (item.is_required) {
        alert("Item can't be removed");
        return;
      }

      if (confirm("Remove this item?")) {
        this.editedIndex = this.form.features.indexOf(item);
        this.form.features.splice(this.editedIndex, 1);
      }
    },
    editItem: function editItem(item) {
      this.editedIndex = this.form.features.indexOf(item);
      this.editedItem = Object.assign({}, _objectSpread(_objectSpread({}, {
        rating: "",
        remarks: ""
      }), item.pivot));
      this.dialog = true;
    },
    close: function close() {
      var _this = this;

      this.dialog = false;
      this.$nextTick(function () {
        _this.editedItem = Object.assign({}, _this.defaultItem);
        _this.editedIndex = -1;
      });
    },
    save: function save() {
      if (this.editedIndex > -1) {
        this.form.features[this.editedIndex].pivot = this.editedItem;
      } else {
        this.form.features.push(this.editedItem);
      }

      this.close();
    }
  },
  computed: {
    maxDate: function maxDate() {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
    }
  },
  watch: {
    reviewForm: {
      immediate: true,
      handler: function handler(newValue, oldValue) {
        this.form = newValue;
      }
    },
    dialog: function dialog(val) {
      val || this.close();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selectors/FeatureDialogSelector.vue?vue&type=template&id=409bc3e7&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/selectors/FeatureDialogSelector.vue?vue&type=template&id=409bc3e7& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
                      _c("v-toolbar-title", [_vm._v("Features")]),
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
                    scopedSlots: _vm._u(
                      [
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
                                    "\n                            " +
                                      _vm._s(item.status.status) +
                                      "\n                        "
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selectors/ReviewCategorySelector.vue?vue&type=template&id=ef40d24a&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/selectors/ReviewCategorySelector.vue?vue&type=template&id=ef40d24a& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
                      _c("v-toolbar-title", [_vm._v("Review Category")]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reviews/Form.vue?vue&type=template&id=3698b041&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/reviews/Form.vue?vue&type=template&id=3698b041& ***!
  \**********************************************************************************************************************************************************************************************************/
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
            { attrs: { cols: "12" } },
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
                        { staticClass: "d-flex" },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Reference No",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. #209384293",
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
                              _c(
                                "v-dialog",
                                {
                                  ref: "dialogRequestDate",
                                  attrs: {
                                    "return-value": _vm.form.date,
                                    persistent: "",
                                    width: "290px"
                                  },
                                  on: {
                                    "update:returnValue": function($event) {
                                      return _vm.$set(_vm.form, "date", $event)
                                    },
                                    "update:return-value": function($event) {
                                      return _vm.$set(_vm.form, "date", $event)
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
                                                      _vm.errors.date[0]
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      _vm.errors.date = []
                                                    }
                                                  },
                                                  model: {
                                                    value: _vm.form.date,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "date",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "form.date"
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
                                          _vm.errors.date = []
                                        }
                                      },
                                      model: {
                                        value: _vm.form.date,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "date", $$v)
                                        },
                                        expression: "form.date"
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
                                                _vm.form.date
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
                                  hint: "Ex. Review for Asset 1",
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
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("ReviewCategorySelector", {
                                attrs: {
                                  selected: !_vm.form.review_category
                                    ? []
                                    : [].concat(_vm.form.review_category)
                                },
                                on: { "on-select": _vm.onSelectReviewCategory },
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
                                                  value: _vm.form
                                                    .review_category
                                                    ? _vm.form.review_category
                                                        .name
                                                    : "",
                                                  "error-messages":
                                                    _vm.errors
                                                      .review_category_id,
                                                  label: "Review Category",
                                                  readonly: "",
                                                  outlined: ""
                                                },
                                                on: {
                                                  input: function($event) {
                                                    _vm.errors.review_category_id = []
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
                              _c("v-text-field", {
                                attrs: {
                                  value: _vm.form.user
                                    ? _vm.form.user.full_name
                                    : "",
                                  label: "User",
                                  outlined: "",
                                  "error-messages": _vm.errors.user_id[0],
                                  readonly: ""
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.user_id = []
                                  }
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "append",
                                    fn: function() {
                                      return [
                                        _c("EmployeeDialogSelector", {
                                          attrs: {
                                            selected: !_vm.form.user
                                              ? []
                                              : [].concat(_vm.form.user)
                                          },
                                          on: { "on-select": _vm.onSelectUser },
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
                                                        {
                                                          attrs: {
                                                            icon: "",
                                                            title:
                                                              "Select Employee"
                                                          }
                                                        },
                                                        "v-btn",
                                                        attrs,
                                                        false
                                                      ),
                                                      on
                                                    ),
                                                    [
                                                      _c("v-icon", [
                                                        _vm._v(
                                                          "\n                                                    mdi-clipboard-account\n                                                "
                                                        )
                                                      ])
                                                    ],
                                                    1
                                                  )
                                                ]
                                              }
                                            }
                                          ])
                                        }),
                                        _vm._v(" "),
                                        _c("CustomerDialogSelector", {
                                          attrs: {
                                            selected: !_vm.form.user
                                              ? []
                                              : [].concat(_vm.form.user)
                                          },
                                          on: { "on-select": _vm.onSelectUser },
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
                                                        {
                                                          attrs: {
                                                            icon: "",
                                                            title:
                                                              "Select Customer"
                                                          }
                                                        },
                                                        "v-btn",
                                                        attrs,
                                                        false
                                                      ),
                                                      on
                                                    ),
                                                    [
                                                      _c("v-icon", [
                                                        _vm._v(
                                                          "\n                                                    mdi-card-account-details-outline\n                                                "
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
                                      ]
                                    },
                                    proxy: true
                                  }
                                ])
                              }),
                              _vm._v(" "),
                              _c("AssetDialogSelector", {
                                attrs: {
                                  selected: !_vm.form.asset
                                    ? []
                                    : [].concat(_vm.form.asset),
                                  requestType: "work_order",
                                  assignedUserId: _vm.form.user
                                    ? _vm.form.user.id
                                    : 0
                                },
                                on: { "on-select": _vm.onSelectAsset },
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
                                                attrs: {
                                                  value: _vm.form.asset
                                                    ? _vm.form.asset.description
                                                    : "",
                                                  label: "Asset",
                                                  outlined: "",
                                                  "error-messages":
                                                    _vm.errors.asset_id[0],
                                                  readonly: ""
                                                },
                                                on: {
                                                  input: function($event) {
                                                    _vm.errors.asset_id = []
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
            { attrs: { cols: "12" } },
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
                          "\n                        Features\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "d-flex" },
                        [
                          _c("FeatureDialogSelector", {
                            attrs: {
                              selected: !_vm.form.features
                                ? []
                                : _vm.form.features,
                              singleSelect: false,
                              reviewCategoryId: _vm.form.review_category
                                ? _vm.form.review_category.id
                                : 0
                            },
                            on: { "on-select": _vm.onSelectFeature },
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
                                          {
                                            attrs: {
                                              icon: "",
                                              fab: "",
                                              small: "",
                                              title: "Choose asset"
                                            }
                                          },
                                          "v-btn",
                                          attrs,
                                          false
                                        ),
                                        on
                                      ),
                                      [
                                        _c("v-icon", [
                                          _vm._v(
                                            "\n                                        mdi-clipboard-plus-outline\n                                    "
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
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _vm.form.features.length == 0 &&
                      _vm.errors.features.length
                        ? _c("small", { staticClass: "red--text" }, [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.errors.features[0]) +
                                "\n                    "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("v-data-table", {
                        attrs: {
                          headers: _vm.headers.feature,
                          items: _vm.form.features,
                          "items-per-page": 5
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "item.is_required",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(
                                        item.is_required ? "true" : "false"
                                      ) +
                                      "\n                        "
                                  )
                                ]
                              }
                            },
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
                                              return _vm.editItem(item)
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                    mdi-pencil\n                                "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
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
            { attrs: { cols: "12" } },
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
                                  label: "Remarks",
                                  outlined: "",
                                  clearable: "",
                                  "error-messages": _vm.errors.remarks[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.remarks = []
                                  }
                                },
                                model: {
                                  value: _vm.form.remarks,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "remarks", $$v)
                                  },
                                  expression: "form.remarks"
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
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "500px" },
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
              _c("v-card-title", [
                _c("span", { staticClass: "text-h5" }, [_vm._v("Rating")])
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Rating" },
                                model: {
                                  value: _vm.editedItem.rating,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editedItem, "rating", $$v)
                                  },
                                  expression: "editedItem.rating"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Remarks" },
                                model: {
                                  value: _vm.editedItem.remarks,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editedItem, "remarks", $$v)
                                  },
                                  expression: "editedItem.remarks"
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
                      attrs: { color: "blue darken-1", text: "" },
                      on: { click: _vm.close }
                    },
                    [_vm._v("\n                    Cancel\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: { click: _vm.save }
                    },
                    [_vm._v("\n                    Save\n                ")]
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

/***/ "./resources/js/components/selectors/FeatureDialogSelector.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/selectors/FeatureDialogSelector.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeatureDialogSelector_vue_vue_type_template_id_409bc3e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeatureDialogSelector.vue?vue&type=template&id=409bc3e7& */ "./resources/js/components/selectors/FeatureDialogSelector.vue?vue&type=template&id=409bc3e7&");
/* harmony import */ var _FeatureDialogSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeatureDialogSelector.vue?vue&type=script&lang=js& */ "./resources/js/components/selectors/FeatureDialogSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeatureDialogSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FeatureDialogSelector_vue_vue_type_template_id_409bc3e7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FeatureDialogSelector_vue_vue_type_template_id_409bc3e7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/selectors/FeatureDialogSelector.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/selectors/FeatureDialogSelector.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/selectors/FeatureDialogSelector.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeatureDialogSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FeatureDialogSelector.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selectors/FeatureDialogSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeatureDialogSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/selectors/FeatureDialogSelector.vue?vue&type=template&id=409bc3e7&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/selectors/FeatureDialogSelector.vue?vue&type=template&id=409bc3e7& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeatureDialogSelector_vue_vue_type_template_id_409bc3e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FeatureDialogSelector.vue?vue&type=template&id=409bc3e7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selectors/FeatureDialogSelector.vue?vue&type=template&id=409bc3e7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeatureDialogSelector_vue_vue_type_template_id_409bc3e7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeatureDialogSelector_vue_vue_type_template_id_409bc3e7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/selectors/ReviewCategorySelector.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/selectors/ReviewCategorySelector.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReviewCategorySelector_vue_vue_type_template_id_ef40d24a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReviewCategorySelector.vue?vue&type=template&id=ef40d24a& */ "./resources/js/components/selectors/ReviewCategorySelector.vue?vue&type=template&id=ef40d24a&");
/* harmony import */ var _ReviewCategorySelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReviewCategorySelector.vue?vue&type=script&lang=js& */ "./resources/js/components/selectors/ReviewCategorySelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReviewCategorySelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReviewCategorySelector_vue_vue_type_template_id_ef40d24a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReviewCategorySelector_vue_vue_type_template_id_ef40d24a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/selectors/ReviewCategorySelector.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/selectors/ReviewCategorySelector.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/selectors/ReviewCategorySelector.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewCategorySelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReviewCategorySelector.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selectors/ReviewCategorySelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewCategorySelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/selectors/ReviewCategorySelector.vue?vue&type=template&id=ef40d24a&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/selectors/ReviewCategorySelector.vue?vue&type=template&id=ef40d24a& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewCategorySelector_vue_vue_type_template_id_ef40d24a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReviewCategorySelector.vue?vue&type=template&id=ef40d24a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selectors/ReviewCategorySelector.vue?vue&type=template&id=ef40d24a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewCategorySelector_vue_vue_type_template_id_ef40d24a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewCategorySelector_vue_vue_type_template_id_ef40d24a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/reviews/Form.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/reviews/Form.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_3698b041___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=3698b041& */ "./resources/js/pages/reviews/Form.vue?vue&type=template&id=3698b041&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/pages/reviews/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_3698b041___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_3698b041___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/reviews/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/reviews/Form.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/reviews/Form.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reviews/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/reviews/Form.vue?vue&type=template&id=3698b041&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/reviews/Form.vue?vue&type=template&id=3698b041& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_3698b041___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=3698b041& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reviews/Form.vue?vue&type=template&id=3698b041&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_3698b041___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_3698b041___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/FeatureDataService.js":
/*!*****************************************************!*\
  !*** ./resources/js/services/FeatureDataService.js ***!
  \*****************************************************/
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


var FeatureDataService = /*#__PURE__*/function () {
  function FeatureDataService() {
    _classCallCheck(this, FeatureDataService);
  }

  _createClass(FeatureDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/features", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/features/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/v1/features", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/features/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/features/".concat(id), data);
    }
  }, {
    key: "deleteMany",
    value: function deleteMany(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/features/multiple", data);
    }
  }]);

  return FeatureDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new FeatureDataService());

/***/ }),

/***/ "./resources/js/services/ReviewCategoryDataService.js":
/*!************************************************************!*\
  !*** ./resources/js/services/ReviewCategoryDataService.js ***!
  \************************************************************/
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


var LocationDataService = /*#__PURE__*/function () {
  function LocationDataService() {
    _classCallCheck(this, LocationDataService);
  }

  _createClass(LocationDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/review_categories", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/review_categories/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/v1/review_categories", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/review_categories/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/review_categories/".concat(id), data);
    }
  }, {
    key: "deleteMany",
    value: function deleteMany(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/review_categories/multiple", data);
    }
  }, {
    key: "activate",
    value: function activate(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/review_categories/activate", data);
    }
  }]);

  return LocationDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new LocationDataService());

/***/ }),

/***/ "./resources/js/services/ReviewDataService.js":
/*!****************************************************!*\
  !*** ./resources/js/services/ReviewDataService.js ***!
  \****************************************************/
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


var ReviewDataService = /*#__PURE__*/function () {
  function ReviewDataService() {
    _classCallCheck(this, ReviewDataService);
  }

  _createClass(ReviewDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/reviews", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/reviews/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/v1/reviews", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/reviews/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/reviews/".concat(id), data);
    }
  }, {
    key: "deleteMany",
    value: function deleteMany(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/reviews/multiple", data);
    }
  }]);

  return ReviewDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ReviewDataService());

/***/ })

}]);