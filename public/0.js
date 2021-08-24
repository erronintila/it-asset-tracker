(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reviews/Create.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/reviews/Create.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_ReviewDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ReviewDataService */ "./resources/js/services/ReviewDataService.js");
/* harmony import */ var _Form_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue */ "./resources/js/pages/reviews/Form.vue");
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
      formDataLoaded: true,
      errors: {
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
      }
    };
  },
  methods: {
    onSave: function onSave(value) {
      var _this = this;

      _services_ReviewDataService__WEBPACK_IMPORTED_MODULE_0__["default"].store(value).then(function (response) {
        alert("Successfully created.");

        _this.$router.go(-1);
      })["catch"](function (error) {
        console.log(error);
        alert("An error has occurred.");
        _this.errors = _objectSpread(_objectSpread({}, _this.errors), error.response.data.errors);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reviews/Form.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/reviews/Form.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\resources\\js\\pages\\reviews\\Form.vue: Unexpected token, expected \":\" (473:44)\n\n\u001b[0m \u001b[90m 471 |\u001b[39m             \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mform\u001b[33m.\u001b[39mreview_category_id \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mform\u001b[33m.\u001b[39mreview_category \u001b[33m?\u001b[39m \u001b[0m\n\u001b[0m \u001b[90m 472 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 473 |\u001b[39m             \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$emit(\u001b[32m\"on-save\"\u001b[39m\u001b[33m,\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mform)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     |\u001b[39m                                             \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 474 |\u001b[39m         }\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 475 |\u001b[39m         onSelectReviewCategory(e) {\u001b[0m\n\u001b[0m \u001b[90m 476 |\u001b[39m             \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39merrors\u001b[33m.\u001b[39mreview_category_id \u001b[33m=\u001b[39m []\u001b[33m;\u001b[39m\u001b[0m\n    at Parser._raise (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:810:17)\n    at Parser.raiseWithData (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:803:17)\n    at Parser.raise (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:764:17)\n    at Parser.unexpected (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:9980:16)\n    at Parser.expect (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:9954:28)\n    at Parser.parseConditional (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:10757:12)\n    at Parser.parseMaybeConditional (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:10749:17)\n    at Parser.parseMaybeAssign (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:10706:21)\n    at Parser.parseMaybeAssign (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:10730:25)\n    at Parser.parseExpressionBase (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:10651:23)\n    at C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:10645:39\n    at Parser.allowInAnd (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:12390:16)\n    at Parser.parseExpression (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:10645:17)\n    at Parser.parseStatementContent (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:12727:23)\n    at Parser.parseStatement (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:12596:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:13185:25)\n    at Parser.parseBlockBody (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:13176:10)\n    at Parser.parseBlock (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:13160:10)\n    at Parser.parseFunctionBody (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:12069:24)\n    at Parser.parseFunctionBodyAndFinish (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:12053:10)\n    at Parser.parseMethod (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:12003:10)\n    at Parser.parseObjectMethod (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:11931:19)\n    at Parser.parseObjPropValue (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:11964:23)\n    at Parser.parsePropertyDefinition (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:11888:10)\n    at Parser.parseObjectLike (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:11778:25)\n    at Parser.parseExprAtom (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:11298:23)\n    at Parser.parseExprSubscripts (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:10954:23)\n    at Parser.parseUpdate (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:10934:21)\n    at Parser.parseMaybeUnary (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:10912:23)\n    at Parser.parseExprOps (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:10769:23)\n    at Parser.parseMaybeConditional (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:10743:23)\n    at Parser.parseMaybeAssign (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:10706:21)\n    at C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:10673:39\n    at Parser.allowInAnd (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:12396:12)\n    at Parser.parseMaybeAssignAllowIn (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:10673:17)\n    at Parser.parseObjectProperty (C:\\Users\\erron\\Documents\\Projects\\Laravel\\it-asset-tracker\\node_modules\\@babel\\parser\\lib\\index.js:11939:101)");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reviews/Create.vue?vue&type=template&id=ef6f798e&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/reviews/Create.vue?vue&type=template&id=ef6f798e& ***!
  \************************************************************************************************************************************************************************************************************/
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
      _c("page-header", { attrs: { title: "New Review", backButton: true } }),
      _vm._v(" "),
      _c("Form", {
        attrs: { errors: _vm.errors },
        on: { "on-save": _vm.onSave }
      })
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

/***/ "./resources/js/pages/reviews/Create.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/reviews/Create.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_ef6f798e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=ef6f798e& */ "./resources/js/pages/reviews/Create.vue?vue&type=template&id=ef6f798e&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/pages/reviews/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_ef6f798e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_ef6f798e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/reviews/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/reviews/Create.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/reviews/Create.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reviews/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/reviews/Create.vue?vue&type=template&id=ef6f798e&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/reviews/Create.vue?vue&type=template&id=ef6f798e& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_ef6f798e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=ef6f798e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/reviews/Create.vue?vue&type=template&id=ef6f798e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_ef6f798e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_ef6f798e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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