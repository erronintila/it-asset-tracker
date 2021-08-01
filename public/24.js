(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/employees/Form.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/employees/Form.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_selectors_DepartmentDialogSelector_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/selectors/DepartmentDialogSelector.vue */ "./resources/js/components/selectors/DepartmentDialogSelector.vue");
/* harmony import */ var _components_selectors_LocationDialogSelector_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/selectors/LocationDialogSelector.vue */ "./resources/js/components/selectors/LocationDialogSelector.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    employeeForm: {
      type: Object,
      "default": function _default() {
        return {
          username: "",
          email: "",
          is_active: true,
          notes: "",
          profile: {
            code: "",
            slug: "",
            first_name: "",
            middle_name: "",
            last_name: "",
            suffix: "",
            gender: "",
            birthdate: moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(18, "year").format("YYYY-MM-DD"),
            business_phone: "",
            home_phone: "",
            mobile_phone: "",
            job_title: "",
            address: "",
            street: "",
            district: "",
            city: "",
            province: "",
            country: "",
            postal_code: "",
            latitude: "",
            longitude: "",
            location: "",
            department: "",
            image: ""
          }
        };
      }
    },
    rules: {
      type: Object,
      "default": function _default() {
        return {
          code: [],
          slug: [],
          first_name: [],
          middle_name: [],
          last_name: [],
          suffix: [],
          gender: [],
          birthdate: [],
          business_phone: [],
          home_phone: [],
          mobile_phone: [],
          job_title: [],
          address: [],
          street: [],
          district: [],
          city: [],
          province: [],
          country: [],
          postal_code: [],
          latitude: [],
          longitude: [],
          is_active: true,
          location_id: [],
          department_id: [],
          notes: [],
          email: [],
          username: [],
          image: []
        };
      }
    },
    errors: {
      type: Object,
      "default": function _default() {
        return {
          code: [],
          slug: [],
          first_name: [],
          middle_name: [],
          last_name: [],
          suffix: [],
          gender: [],
          birthdate: [],
          business_phone: [],
          home_phone: [],
          mobile_phone: [],
          job_title: [],
          address: [],
          street: [],
          district: [],
          city: [],
          province: [],
          country: [],
          postal_code: [],
          latitude: [],
          longitude: [],
          is_active: true,
          location_id: [],
          department_id: [],
          notes: [],
          email: [],
          username: [],
          image: []
        };
      }
    }
  },
  components: {
    DepartmentDialogSelector: _components_selectors_DepartmentDialogSelector_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    LocationDialogSelector: _components_selectors_LocationDialogSelector_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      dialogDepartment: false,
      dialogLocation: false,
      valid: false,
      birthdateModal: false,
      form: {
        username: "",
        email: "",
        is_active: true,
        notes: "",
        profile: {
          code: "",
          slug: "",
          first_name: "",
          middle_name: "",
          last_name: "",
          suffix: "",
          gender: "",
          birthdate: moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(18, "year").format("YYYY-MM-DD"),
          business_phone: "",
          home_phone: "",
          mobile_phone: "",
          job_title: "",
          address: "",
          street: "",
          district: "",
          city: "",
          province: "",
          country: "",
          postal_code: "",
          latitude: "",
          longitude: "",
          location: "",
          department: "",
          image: ""
        }
      }
    };
  },
  methods: {
    onSave: function onSave() {
      if (!confirm("Do you want to save?")) {
        return;
      }

      if (!this.$refs.form.validate()) {
        alert("An error has occurred.");
        return;
      }

      var newForm = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.form.profile), this.form), {
        name: this.form.profile.name
      }), {
        profile_id: this.form.profile.id
      }), {
        department_id: this.form.profile.department.id
      }), {
        location_id: this.form.profile.location.id
      });

      if (!newForm.is_active) {
        newForm.is_active = false;
      }

      this.$emit("on-save", newForm);
    },
    onSelectDepartment: function onSelectDepartment(e) {
      this.dialogDepartment = false;
      this.errors.department_id = [];

      if (e == null || e == undefined) {
        this.form.profile.department = null;
        return;
      }

      this.form.profile.department = e[0];
      this.dialogDepartment = false;
    },
    onSelectLocation: function onSelectLocation(e) {
      this.dialogLocation = false;
      this.errors.location_id = [];

      if (e == null || e == undefined) {
        this.form.profile.location = null;
        return;
      }

      this.form.profile.location = e[0];
      this.dialogLocation = false;
    }
  },
  computed: {
    maxDate: function maxDate() {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(18, "year").format("YYYY-MM-DD");
    }
  },
  watch: {
    employeeForm: {
      immediate: true,
      handler: function handler(newValue, oldValue) {
        this.form = newValue;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/employees/Form.vue?vue&type=template&id=607b4852&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/employees/Form.vue?vue&type=template&id=607b4852& ***!
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
            { attrs: { cols: "12", md: "4" } },
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
                        { staticClass: "d-flex justify-center" },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("DepartmentDialogSelector", {
                                attrs: {
                                  selected: !_vm.form.profile.department
                                    ? []
                                    : [].concat(_vm.form.profile.department),
                                  dialogDepartment: _vm.dialogDepartment
                                },
                                on: {
                                  "close-dialog": function($event) {
                                    _vm.dialogDepartment = false
                                  },
                                  "on-select": _vm.onSelectDepartment
                                },
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
                                                  value: _vm.form.profile
                                                    .department
                                                    ? _vm.form.profile
                                                        .department.name
                                                    : "",
                                                  "error-messages":
                                                    _vm.errors.department_id,
                                                  label: "Department",
                                                  readonly: "",
                                                  outlined: ""
                                                },
                                                on: {
                                                  input: function($event) {
                                                    _vm.errors.department_id = []
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
                                  label: "Job Title",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. Sales Representative",
                                  "error-messages": _vm.errors.job_title[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.job_title = []
                                  }
                                },
                                model: {
                                  value: _vm.form.profile.job_title,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form.profile, "job_title", $$v)
                                  },
                                  expression: "form.profile.job_title"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "First Name",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. Juan",
                                  "error-messages": _vm.errors.first_name[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.first_name = []
                                  }
                                },
                                model: {
                                  value: _vm.form.profile.first_name,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.form.profile,
                                      "first_name",
                                      $$v
                                    )
                                  },
                                  expression: "form.profile.first_name"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "Middle Name",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. Dela Cruz",
                                  "error-messages": _vm.errors.middle_name[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.middle_name = []
                                  }
                                },
                                model: {
                                  value: _vm.form.profile.middle_name,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.form.profile,
                                      "middle_name",
                                      $$v
                                    )
                                  },
                                  expression: "form.profile.middle_name"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "Last Name",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. Dela Cruz",
                                  "error-messages": _vm.errors.last_name[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.last_name = []
                                  }
                                },
                                model: {
                                  value: _vm.form.profile.last_name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form.profile, "last_name", $$v)
                                  },
                                  expression: "form.profile.last_name"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "Suffix",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. Jr.",
                                  "error-messages": _vm.errors.suffix[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.suffix = []
                                  }
                                },
                                model: {
                                  value: _vm.form.profile.suffix,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form.profile, "suffix", $$v)
                                  },
                                  expression: "form.profile.suffix"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-select", {
                                attrs: {
                                  items: ["male", "female"],
                                  label: "Gender",
                                  outlined: "",
                                  "error-messages": _vm.errors.gender[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.gender = []
                                  }
                                },
                                model: {
                                  value: _vm.form.profile.gender,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form.profile, "gender", $$v)
                                  },
                                  expression: "form.profile.gender"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-dialog",
                                {
                                  ref: "dialog",
                                  attrs: {
                                    "return-value": _vm.form.profile.birthdate,
                                    persistent: "",
                                    width: "290px"
                                  },
                                  on: {
                                    "update:returnValue": function($event) {
                                      return _vm.$set(
                                        _vm.form.profile,
                                        "birthdate",
                                        $event
                                      )
                                    },
                                    "update:return-value": function($event) {
                                      return _vm.$set(
                                        _vm.form.profile,
                                        "birthdate",
                                        $event
                                      )
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
                                                    label: "Birthdate",
                                                    readonly: "",
                                                    outlined: "",
                                                    hint: "Ex. 2000-01-01",
                                                    "error-messages":
                                                      _vm.errors.birthdate[0]
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      _vm.errors.birthdate = []
                                                    }
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.form.profile
                                                        .birthdate,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.form.profile,
                                                        "birthdate",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "form.profile.birthdate"
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
                                    value: _vm.birthdateModal,
                                    callback: function($$v) {
                                      _vm.birthdateModal = $$v
                                    },
                                    expression: "birthdateModal"
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
                                          _vm.errors.birthdate = []
                                        }
                                      },
                                      model: {
                                        value: _vm.form.profile.birthdate,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.form.profile,
                                            "birthdate",
                                            $$v
                                          )
                                        },
                                        expression: "form.profile.birthdate"
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
                                              _vm.birthdateModal = false
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
                                              return _vm.$refs.dialog.save(
                                                _vm.form.profile.birthdate
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
                              _c("LocationDialogSelector", {
                                attrs: {
                                  selected: !_vm.form.profile.location
                                    ? []
                                    : [].concat(_vm.form.profile.location),
                                  dialogLocation: _vm.dialogLocation
                                },
                                on: {
                                  "close-dialog": function($event) {
                                    _vm.dialogLocation = false
                                  },
                                  "on-select": _vm.onSelectLocation
                                },
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
                                                  value: _vm.form.profile
                                                    .location
                                                    ? _vm.form.profile.location
                                                        .name
                                                    : "",
                                                  "error-messages":
                                                    _vm.errors.location_id,
                                                  label: "Location",
                                                  readonly: "",
                                                  outlined: ""
                                                },
                                                on: {
                                                  input: function($event) {
                                                    _vm.errors.location_id = []
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
                                  label: "Mobile Phone No.",
                                  outlined: "",
                                  clearable: "",
                                  type: "number",
                                  hint: "Ex. 09XXXXXXXXX",
                                  "error-messages": _vm.errors.mobile_phone[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.mobile_phone = []
                                  }
                                },
                                model: {
                                  value: _vm.form.profile.mobile_phone,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.form.profile,
                                      "mobile_phone",
                                      $$v
                                    )
                                  },
                                  expression: "form.profile.mobile_phone"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "Home Phone No.",
                                  outlined: "",
                                  clearable: "",
                                  type: "number",
                                  hint: "Ex. 09XXXXXXXXX",
                                  "error-messages": _vm.errors.home_phone[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.home_phone = []
                                  }
                                },
                                model: {
                                  value: _vm.form.profile.home_phone,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.form.profile,
                                      "home_phone",
                                      $$v
                                    )
                                  },
                                  expression: "form.profile.home_phone"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "Work Phone No.",
                                  outlined: "",
                                  clearable: "",
                                  type: "number",
                                  hint: "Ex. 09XXXXXXXXX",
                                  "error-messages": _vm.errors.business_phone[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.business_phone = []
                                  }
                                },
                                model: {
                                  value: _vm.form.profile.business_phone,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.form.profile,
                                      "business_phone",
                                      $$v
                                    )
                                  },
                                  expression: "form.profile.business_phone"
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
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", md: "4" } },
            [
              _c(
                "v-card",
                { attrs: { flat: "" } },
                [
                  _c("v-card-title", [
                    _vm._v(
                      "\n                    Address Information\n                "
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
                                  label: "Address",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. Block 16 Lot 4 XYZ Subdivision",
                                  "error-messages": _vm.errors.address[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.address = []
                                  }
                                },
                                model: {
                                  value: _vm.form.profile.address,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form.profile, "address", $$v)
                                  },
                                  expression: "form.profile.address"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "Street",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. Balete Street",
                                  "error-messages": _vm.errors.street[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.street = []
                                  }
                                },
                                model: {
                                  value: _vm.form.profile.street,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form.profile, "street", $$v)
                                  },
                                  expression: "form.profile.street"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "District",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. Barangay Poblacion",
                                  "error-messages": _vm.errors.district[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.district = []
                                  }
                                },
                                model: {
                                  value: _vm.form.profile.district,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form.profile, "district", $$v)
                                  },
                                  expression: "form.profile.district"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "City",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. General Santos City",
                                  "error-messages": _vm.errors.city[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.city = []
                                  }
                                },
                                model: {
                                  value: _vm.form.profile.city,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form.profile, "city", $$v)
                                  },
                                  expression: "form.profile.city"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "Province",
                                  outlined: "",
                                  clearable: "",
                                  hint: "South Cotabato",
                                  "error-messages": _vm.errors.province[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.province = []
                                  }
                                },
                                model: {
                                  value: _vm.form.profile.province,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form.profile, "province", $$v)
                                  },
                                  expression: "form.profile.province"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-combobox", {
                                attrs: {
                                  label: "Country",
                                  outlined: "",
                                  clearable: "",
                                  items: ["Philippines"],
                                  "error-messages": _vm.errors.country[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.country = []
                                  }
                                },
                                model: {
                                  value: _vm.form.profile.country,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form.profile, "country", $$v)
                                  },
                                  expression: "form.profile.country"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "Postal Code",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. 9500",
                                  type: "number"
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.postal_code = []
                                  }
                                },
                                model: {
                                  value: _vm.form.profile.postal_code,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.form.profile,
                                      "postal_code",
                                      $$v
                                    )
                                  },
                                  expression: "form.profile.postal_code"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "Latitude",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. 6.1164 N",
                                  "error-messages": _vm.errors.latitude[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.latitude = []
                                  }
                                },
                                model: {
                                  value: _vm.form.profile.latitude,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form.profile, "latitude", $$v)
                                  },
                                  expression: "form.profile.latitude"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "Longitude",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. 125.1716 E",
                                  "error-messages": _vm.errors.longitude[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.longitude = []
                                  }
                                },
                                model: {
                                  value: _vm.form.profile.longitude,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form.profile, "longitude", $$v)
                                  },
                                  expression: "form.profile.longitude"
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
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", md: "4" } },
            [
              _c(
                "v-card",
                { attrs: { flat: "" } },
                [
                  _c("v-card-title", [
                    _vm._v(
                      "\n                    Account Information\n                "
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
                                  label: "Email",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. juandelacruz@gmail.com",
                                  "error-messages": _vm.errors.email[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.email = []
                                  }
                                },
                                model: {
                                  value: _vm.form.email,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "email", $$v)
                                  },
                                  expression: "form.email"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "Username",
                                  outlined: "",
                                  clearable: "",
                                  hint: "Ex. juandelacruz",
                                  "error-messages": _vm.errors.username[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.username = []
                                  }
                                },
                                model: {
                                  value: _vm.form.username,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "username", $$v)
                                  },
                                  expression: "form.username"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "Image",
                                  outlined: "",
                                  clearable: "",
                                  "error-messages": _vm.errors.image[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.image = []
                                  }
                                },
                                model: {
                                  value: _vm.form.profile.image,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form.profile, "image", $$v)
                                  },
                                  expression: "form.profile.image"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-textarea", {
                                attrs: {
                                  label: "Notes",
                                  outlined: "",
                                  clearable: "",
                                  rows: "3",
                                  "error-messages": _vm.errors.notes[0]
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.notes = []
                                  }
                                },
                                model: {
                                  value: _vm.form.notes,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "notes", $$v)
                                  },
                                  expression: "form.notes"
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
                      _c(
                        "v-sheet",
                        { staticClass: "ml-4" },
                        [
                          _c("v-switch", {
                            attrs: { inset: "", label: "Active" },
                            model: {
                              value: _vm.form.is_active,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "is_active", $$v)
                              },
                              expression: "form.is_active"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/employees/Form.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/employees/Form.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_607b4852___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=607b4852& */ "./resources/js/pages/employees/Form.vue?vue&type=template&id=607b4852&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/pages/employees/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_607b4852___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_607b4852___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/employees/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/employees/Form.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/employees/Form.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/employees/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/employees/Form.vue?vue&type=template&id=607b4852&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/employees/Form.vue?vue&type=template&id=607b4852& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_607b4852___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=607b4852& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/employees/Form.vue?vue&type=template&id=607b4852&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_607b4852___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_607b4852___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/EmployeeDataService.js":
/*!******************************************************!*\
  !*** ./resources/js/services/EmployeeDataService.js ***!
  \******************************************************/
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


var EmployeeDataService = /*#__PURE__*/function () {
  function EmployeeDataService() {
    _classCallCheck(this, EmployeeDataService);
  }

  _createClass(EmployeeDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/employees", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/employees/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/v1/employees", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/employees/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/employees/".concat(id), data);
    }
  }, {
    key: "deleteMany",
    value: function deleteMany(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/employees/multiple", data);
    }
  }]);

  return EmployeeDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new EmployeeDataService());

/***/ })

}]);