(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[130],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/work_orders/Assets.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/work_orders/Assets.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
        }, {
          text: "Manufacturer",
          value: "manufacturer.name"
        }, // { text: "Assigned To", value: "assigned_user.name" },
        {
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
                    assigned_user_id: _this.model_id
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
                console.log(_context.t0.response);

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/work_orders/Attachments.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/work_orders/Attachments.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_MediaDataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/MediaDataService */ "./resources/js/services/MediaDataService.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data_id: {
      type: Number,
      "default": null
    }
  },
  data: function data() {
    return {
      file: null,
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
          text: "Name",
          value: "name",
          sortable: false
        }, {
          text: "Type",
          value: "mime_type",
          sortable: false
        }, {
          text: "Actions",
          value: "actions",
          sortable: false
        }]
      },
      items: []
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
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
                    model: "Transaction",
                    model_id: _this.data_id
                  }
                };
                _context.prev = 3;
                _context.next = 6;
                return _services_MediaDataService__WEBPACK_IMPORTED_MODULE_2__["default"].getAll(data);

              case 6:
                response = _context.sent;
                _this.items = response.data.data.data;
                _this.tableOptions.serverItemsLength = response.data.data.total;
                _this.tableOptions.loading = false;
                _context.next = 17;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](3);
                console.log(_context.t0.response);
                _this.tableOptions.loading = false;
                alert("An error has occurred.");

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 12]]);
      }))();
    },
    onSave: function onSave() {
      var _this2 = this;

      if (!confirm("Do you want to add to media library?")) {
        return;
      }

      var formData = new FormData();
      formData.append("file", this.file);
      formData.append("model", "Transaction");
      formData.append("model_id", this.data_id);
      axios.post("/api/v1/media", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (response) {
        alert("Successfully uploaded.");
        _this2.file = null;

        _this2.getData();
      })["catch"](function (error) {
        console.log(error.response);
      });
    },
    onDelete: function onDelete(item) {
      var _this3 = this;

      if (!confirm("WARNING: Do you want to delete selected media?")) {
        return;
      }

      _services_MediaDataService__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"](item.id).then(function (response) {
        _this3.getData();
      })["catch"](function (error) {
        console.log(error.response);
        alert("An error has occurred.");
      });
    },
    onDownload: function onDownload(item) {
      _services_MediaDataService__WEBPACK_IMPORTED_MODULE_2__["default"].show(item.id).then(function (response) {
        var fileURL = window.URL.createObjectURL(new Blob([response.data], {
          type: item.mime_type
        }));
        var fileLink = document.createElement("a");
        fileLink.href = fileURL;
        fileLink.setAttribute("download", item.file_name);
        document.body.appendChild(fileLink);
        fileLink.click();
      })["catch"](function (error) {
        console.log(error.response);
        alert("An error has occurred.");
      });
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/work_orders/Show.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/work_orders/Show.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_pages_CardSummary_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pages/CardSummary.vue */ "./resources/js/components/pages/CardSummary.vue");
/* harmony import */ var _services_WorkOrderDataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/WorkOrderDataService */ "./resources/js/services/WorkOrderDataService.js");
/* harmony import */ var _Attachments_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Attachments.vue */ "./resources/js/pages/work_orders/Attachments.vue");
/* harmony import */ var _Assets_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Assets.vue */ "./resources/js/pages/work_orders/Assets.vue");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ */ "./resources/js/pages/work_orders/index.vue");
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






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default.a,
    CardSummary: _components_pages_CardSummary_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Attachments: _Attachments_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      tab: null,
      items: ["overview", "details", "assets", "System Activity Logs", "Attachments"],
      series: {
        asset: [44, 55, 41, 17]
      },
      options: {
        asset: {
          labels: ["In Storage", "In Use", "In Maintenance", "Disposed"]
        }
      },
      records: [],
      form: {
        code: "",
        reference: "",
        request_date: "",
        description: "",
        status: {
          text: "",
          color: "",
          dark: false
        },
        transactionable: {},
        transaction_type_id: "",
        user: {},
        parent_asset_id: "",
        owner_id: "",
        assigned_user_id: "",
        assigned_location_id: "",
        assigned_asset_id: ""
      }
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      var data = {};
      _services_WorkOrderDataService__WEBPACK_IMPORTED_MODULE_2__["default"].show(this.$route.params.id, data).then(function (response) {
        _this.form = _objectSpread(_objectSpread({}, _this.form), response.data.data);
      })["catch"](function (error) {
        console.log(error.response);
        alert("An error has occurred.");

        _this.$router.push({
          name: "work_orders.index"
        }, function () {});
      });
    },
    onDelete: function onDelete() {
      var _this2 = this;

      if (!confirm("WARNING: Do you want to delete this record?")) {
        return;
      }

      _services_WorkOrderDataService__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"](this.$route.params.id, {}).then(function (response) {
        alert(response.data.message);

        _this2.$router.push({
          name: "work_orders.index"
        });
      })["catch"](function (error) {
        console.log(error.response);
        alert("An error has occurred.");
      });
    }
  },
  created: function created() {
    this.getData();
  },
  activated: function activated() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/work_orders/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/work_orders/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_WorkOrderDataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/WorkOrderDataService */ "./resources/js/services/WorkOrderDataService.js");
/* harmony import */ var _components_X_DateRangePicker_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/X-DateRangePicker.vue */ "./resources/js/components/X-DateRangePicker.vue");
/* harmony import */ var _services_TransactionTypeDataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/TransactionTypeDataService */ "./resources/js/services/TransactionTypeDataService.js");
/* harmony import */ var _components_selectors_AssetDialogSelector_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/selectors/AssetDialogSelector.vue */ "./resources/js/components/selectors/AssetDialogSelector.vue");
/* harmony import */ var _components_selectors_EmployeeDialogSelector_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/selectors/EmployeeDialogSelector.vue */ "./resources/js/components/selectors/EmployeeDialogSelector.vue");
/* harmony import */ var _components_selectors_CustomerDialogSelector_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/selectors/CustomerDialogSelector.vue */ "./resources/js/components/selectors/CustomerDialogSelector.vue");
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







/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
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
      }, // { text: "Export", action: "export", icon: "mdi-export" },
      {
        text: "Approve",
        action: "approve",
        icon: "mdi-check"
      }, {
        text: "Complete",
        action: "complete",
        icon: "mdi-check-all"
      }, {
        text: "Post",
        action: "post",
        icon: "mdi-check-circle"
      }, {
        text: "Cancel",
        action: "cancel",
        icon: "mdi-cancel"
      }],
      filter: {
        status: "Active",
        statuses: ["Active", "Pending", "Approved", "Completed", "Posted", "Cancelled", "Deleted"],
        date_range: [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("year").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("year").format("YYYY-MM-DD")],
        asset: {},
        user: {},
        transaction_type: {}
      },
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
          text: "Code",
          value: "code"
        }, {
          text: "Request Date",
          value: "request_date"
        }, {
          text: "Description",
          value: "description"
        }, {
          text: "User",
          value: "user.name"
        }, {
          text: "Status",
          value: "status"
        }]
      },
      search: "",
      items: [],
      selectedItems: []
    };
  },
  components: {
    XDateRangePicker: _components_X_DateRangePicker_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  methods: {
    updateDateRange: function updateDateRange(e) {
      this.filter.date_range = e;
    },
    resetDates: function resetDates() {
      this.filter.date_range = [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("year").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("year").format("YYYY-MM-DD")];
    },
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
        var date_range = _this.filter.date_range;
        var data = {
          params: {
            sortBy: sortBy[0],
            sortType: sortDesc[0] ? "desc" : "asc",
            page: page,
            itemsPerPage: itemsPerPage,
            search: search,
            status: status,
            start_date: date_range[0],
            end_date: date_range[1]
          }
        };
        _services_WorkOrderDataService__WEBPACK_IMPORTED_MODULE_1__["default"].getAll(data).then(function (response) {
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

          this.$router.push("/work_orders/" + this.selectedItems[0].id + "/edit");
          break;

        case "delete":
          this.onDelete();
          break;

        case "restore":
          this.onRestore();
          break;

        case "export":
          break;

        case "approve":
          this.onUpdateStatus("approve");
          break;

        case "complete":
          this.onUpdateStatus("complete");
          break;

        case "post":
          this.onUpdateStatus("post");
          break;

        case "cancel":
          this.onUpdateStatus("cancel");
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
      _services_WorkOrderDataService__WEBPACK_IMPORTED_MODULE_1__["default"].deleteMany(data).then(function (response) {
        _this2.getData();

        _this2.selectedItems = [];
      })["catch"](function (error) {
        console.log(error.response);
        alert("An error has occurred.");
      });
    },
    onRestore: function onRestore() {
      var _this3 = this;

      if (!this.selectedItems.length) {
        alert("No data selected.");
        return;
      }

      if (!confirm("WARNING: Do you want to restore selected items?")) {
        return;
      }

      var data = {
        ids: this.selectedItems.map(function (item) {
          return item.id;
        })
      };
      _services_WorkOrderDataService__WEBPACK_IMPORTED_MODULE_1__["default"].restore(data).then(function (response) {
        _this3.getData();

        _this3.selectedItems = [];
      })["catch"](function (error) {
        console.log(error.response);
        alert("An error has occurred.");
      });
    },
    clearFilters: function clearFilters() {
      this.selectedItems = [];
      this.search = "";
      this.tableOptions.options = {
        sortBy: ["code"],
        sortDesc: [false],
        page: 1,
        itemsPerPage: 10
      };
    },
    onUpdateStatus: function onUpdateStatus(status) {
      var _this4 = this;

      if (!confirm("WARNING: Do you want to ".concat(status, " selected items?"))) {
        return;
      }

      var data = {
        // params: {
        ids: this.selectedItems.map(function (item) {
          return item.id;
        }) // }

      };

      switch (status) {
        case "approve":
          _services_WorkOrderDataService__WEBPACK_IMPORTED_MODULE_1__["default"].approve(data).then(function (response) {
            _this4.getData();

            _this4.selectedItems = [];
          })["catch"](function (error) {
            console.log(error.response);
            alert("An error has occurred.");
          });
          break;

        case "complete":
          _services_WorkOrderDataService__WEBPACK_IMPORTED_MODULE_1__["default"].complete(data).then(function (response) {
            _this4.getData();

            _this4.selectedItems = [];
          })["catch"](function (error) {
            console.log(error.response);
            alert("An error has occurred.");
          });
          break;

        case "post":
          _services_WorkOrderDataService__WEBPACK_IMPORTED_MODULE_1__["default"].post(data).then(function (response) {
            _this4.getData();

            _this4.selectedItems = [];
          })["catch"](function (error) {
            console.log(error.response);
            alert("An error has occurred.");
          });
          break;

        case "cancel":
          _services_WorkOrderDataService__WEBPACK_IMPORTED_MODULE_1__["default"].cancel(data).then(function (response) {
            _this4.getData();

            _this4.selectedItems = [];
          })["catch"](function (error) {
            console.log(error.response);
            alert("An error has occurred.");
          });
          break;

        default:
          break;
      }
    }
  },
  computed: {
    params: function params(nv) {
      return _objectSpread(_objectSpread({}, this.tableOptions.options), {}, _defineProperty({
        query: this.filter.date_range
      }, "query", this.filter.status));
    },
    hasFilters: function hasFilters() {
      return this.search || this.selectedItems.length;
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
  },
  activated: function activated() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/work_orders/index.vue?vue&type=style&index=0&id=527e3306&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/work_orders/index.vue?vue&type=style&index=0&id=527e3306&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\na[data-v-527e3306] {\r\n    text-decoration: none;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/work_orders/index.vue?vue&type=style&index=0&id=527e3306&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/work_orders/index.vue?vue&type=style&index=0&id=527e3306&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=527e3306&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/work_orders/index.vue?vue&type=style&index=0&id=527e3306&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/work_orders/Assets.vue?vue&type=template&id=637b71f0&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/work_orders/Assets.vue?vue&type=template&id=637b71f0& ***!
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/work_orders/Attachments.vue?vue&type=template&id=d6d1f00a&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/work_orders/Attachments.vue?vue&type=template&id=d6d1f00a& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container" },
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { staticClass: "d-flex justify-end align-center" },
            [
              _c("v-file-input", {
                attrs: {
                  "show-size": "",
                  label: "File input",
                  outlined: "",
                  counter: "",
                  dense: ""
                },
                model: {
                  value: _vm.file,
                  callback: function($$v) {
                    _vm.file = $$v
                  },
                  expression: "file"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            [
              _c(
                "v-btn",
                { attrs: { color: "primary" }, on: { click: _vm.onSave } },
                [_vm._v("Add")]
              )
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
                      key: "item.actions",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _c(
                            "v-btn",
                            {
                              attrs: { icon: "" },
                              on: {
                                click: function($event) {
                                  return _vm.onDownload(item)
                                }
                              }
                            },
                            [_c("v-icon", [_vm._v("mdi-download")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { icon: "" },
                              on: {
                                click: function($event) {
                                  return _vm.onDelete(item)
                                }
                              }
                            },
                            [_c("v-icon", [_vm._v("mdi-delete")])],
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/work_orders/Show.vue?vue&type=template&id=31e118c2&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/work_orders/Show.vue?vue&type=template&id=31e118c2& ***!
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
        staticClass: "mb-4",
        attrs: { title: "Checkin Request Details", backButton: true }
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
                attrs: {
                  title: "#" + _vm.form.code,
                  subtitle: _vm._f("moment")(
                    _vm.form.request_date,
                    "MMMM DD, YYYY hh:mm:ss A"
                  )
                },
                scopedSlots: _vm._u([
                  {
                    key: "body",
                    fn: function() {
                      return [
                        _c("p", [
                          _vm._v("Description: " + _vm._s(_vm.form.description))
                        ]),
                        _vm._v(" "),
                        _c(
                          "p",
                          [
                            _vm._v(
                              "\n                        Status:\n                        "
                            ),
                            _c(
                              "v-chip",
                              {
                                attrs: {
                                  small: "",
                                  color: _vm.form.status.color,
                                  dark: _vm.form.status.dark
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(_vm.form.status.text) +
                                    "\n                        "
                                )
                              ]
                            )
                          ],
                          1
                        )
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
                                  "/work_orders/" +
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
                              _c("v-card-text", [
                                _c("div", { staticClass: "page-title my-4" }, [
                                  _vm._v(
                                    "\n                                    Checkin Request Name\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "my-4" },
                                  [
                                    _c("VueApexCharts", {
                                      attrs: {
                                        type: "donut",
                                        height: "300",
                                        options: _vm.options.asset,
                                        series: _vm.series.asset
                                      }
                                    })
                                  ],
                                  1
                                )
                              ])
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
                                              _vm._l(_vm.form, function(
                                                value,
                                                name,
                                                index
                                              ) {
                                                return _c(
                                                  "tr",
                                                  { key: index },
                                                  [
                                                    _c("td", [
                                                      _vm._v(_vm._s(name))
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(_vm._s(value))
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
                                  _c("Attachments", {
                                    attrs: { data_id: _vm.form.id }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/work_orders/index.vue?vue&type=template&id=527e3306&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/work_orders/index.vue?vue&type=template&id=527e3306&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
        { attrs: { title: "Work Order Requests" } },
        [
          _c(
            "template",
            { slot: "leftSideNavigation" },
            [
              _c(
                "v-btn",
                {
                  staticClass: "ml-3",
                  attrs: {
                    icon: "",
                    to: { name: "work_orders.create" },
                    title: "Add new checkin request"
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
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item",
                            [
                              _c("XDateRangePicker", {
                                ref: "dateRange",
                                attrs: { dateRange: _vm.filter.date_range },
                                on: { "on-change": _vm.updateDateRange },
                                scopedSlots: _vm._u([
                                  {
                                    key: "openDialog",
                                    fn: function(ref) {
                                      var on = ref.on
                                      var attrs = ref.attrs
                                      var dateRangeText = ref.dateRangeText
                                      return [
                                        _c(
                                          "v-text-field",
                                          _vm._g(
                                            _vm._b(
                                              {
                                                attrs: {
                                                  value: dateRangeText,
                                                  label: "Request Date",
                                                  readonly: ""
                                                },
                                                model: {
                                                  value: _vm.filter.date_range,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.filter,
                                                      "date_range",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "filter.date_range"
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
                attrs: { label: "Search", clearable: "" }
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
          _vm.filter.date_range
            ? _c(
                "v-chip",
                {
                  attrs: {
                    label: "",
                    close: "",
                    outlined: "",
                    small: "",
                    "close-icon": "mdi-update"
                  },
                  on: { "click:close": _vm.resetDates }
                },
                [
                  _vm._v(
                    "\n            " +
                      _vm._s(
                        _vm.filter.date_range[0] +
                          " ~ " +
                          _vm.filter.date_range[1]
                      ) +
                      "\n        "
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
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
                      key: "item.code",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: {
                                  name: "work_orders.show",
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
                                dark: item.status.dark
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

/***/ "./resources/js/pages/work_orders/Assets.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/work_orders/Assets.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Assets_vue_vue_type_template_id_637b71f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Assets.vue?vue&type=template&id=637b71f0& */ "./resources/js/pages/work_orders/Assets.vue?vue&type=template&id=637b71f0&");
/* harmony import */ var _Assets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Assets.vue?vue&type=script&lang=js& */ "./resources/js/pages/work_orders/Assets.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Assets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Assets_vue_vue_type_template_id_637b71f0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Assets_vue_vue_type_template_id_637b71f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/work_orders/Assets.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/work_orders/Assets.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/work_orders/Assets.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Assets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Assets.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/work_orders/Assets.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Assets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/work_orders/Assets.vue?vue&type=template&id=637b71f0&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/work_orders/Assets.vue?vue&type=template&id=637b71f0& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Assets_vue_vue_type_template_id_637b71f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Assets.vue?vue&type=template&id=637b71f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/work_orders/Assets.vue?vue&type=template&id=637b71f0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Assets_vue_vue_type_template_id_637b71f0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Assets_vue_vue_type_template_id_637b71f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/work_orders/Attachments.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/work_orders/Attachments.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Attachments_vue_vue_type_template_id_d6d1f00a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Attachments.vue?vue&type=template&id=d6d1f00a& */ "./resources/js/pages/work_orders/Attachments.vue?vue&type=template&id=d6d1f00a&");
/* harmony import */ var _Attachments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Attachments.vue?vue&type=script&lang=js& */ "./resources/js/pages/work_orders/Attachments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Attachments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Attachments_vue_vue_type_template_id_d6d1f00a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Attachments_vue_vue_type_template_id_d6d1f00a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/work_orders/Attachments.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/work_orders/Attachments.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/work_orders/Attachments.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Attachments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Attachments.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/work_orders/Attachments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Attachments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/work_orders/Attachments.vue?vue&type=template&id=d6d1f00a&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/work_orders/Attachments.vue?vue&type=template&id=d6d1f00a& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Attachments_vue_vue_type_template_id_d6d1f00a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Attachments.vue?vue&type=template&id=d6d1f00a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/work_orders/Attachments.vue?vue&type=template&id=d6d1f00a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Attachments_vue_vue_type_template_id_d6d1f00a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Attachments_vue_vue_type_template_id_d6d1f00a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/work_orders/Show.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/work_orders/Show.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_31e118c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=31e118c2& */ "./resources/js/pages/work_orders/Show.vue?vue&type=template&id=31e118c2&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/pages/work_orders/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_31e118c2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_31e118c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/work_orders/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/work_orders/Show.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/work_orders/Show.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/work_orders/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/work_orders/Show.vue?vue&type=template&id=31e118c2&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/work_orders/Show.vue?vue&type=template&id=31e118c2& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_31e118c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=31e118c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/work_orders/Show.vue?vue&type=template&id=31e118c2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_31e118c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_31e118c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/work_orders/index.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/work_orders/index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_527e3306_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=527e3306&scoped=true& */ "./resources/js/pages/work_orders/index.vue?vue&type=template&id=527e3306&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/work_orders/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_527e3306_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=527e3306&scoped=true&lang=css& */ "./resources/js/pages/work_orders/index.vue?vue&type=style&index=0&id=527e3306&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_527e3306_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_527e3306_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "527e3306",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/work_orders/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/work_orders/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/work_orders/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/work_orders/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/work_orders/index.vue?vue&type=style&index=0&id=527e3306&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/pages/work_orders/index.vue?vue&type=style&index=0&id=527e3306&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_527e3306_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=527e3306&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/work_orders/index.vue?vue&type=style&index=0&id=527e3306&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_527e3306_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_527e3306_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_527e3306_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_527e3306_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/work_orders/index.vue?vue&type=template&id=527e3306&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/pages/work_orders/index.vue?vue&type=template&id=527e3306&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_527e3306_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=527e3306&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/work_orders/index.vue?vue&type=template&id=527e3306&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_527e3306_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_527e3306_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/MediaDataService.js":
/*!***************************************************!*\
  !*** ./resources/js/services/MediaDataService.js ***!
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


var MediaDataService = /*#__PURE__*/function () {
  function MediaDataService() {
    _classCallCheck(this, MediaDataService);
  }

  _createClass(MediaDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/media", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/media/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/v1/media", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/media/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/media/".concat(id), data);
    }
  }, {
    key: "deleteMany",
    value: function deleteMany(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/media/multiple", data);
    }
  }]);

  return MediaDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new MediaDataService());

/***/ }),

/***/ "./resources/js/services/TransactionTypeDataService.js":
/*!*************************************************************!*\
  !*** ./resources/js/services/TransactionTypeDataService.js ***!
  \*************************************************************/
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


var TransactionTypeDataService = /*#__PURE__*/function () {
  function TransactionTypeDataService() {
    _classCallCheck(this, TransactionTypeDataService);
  }

  _createClass(TransactionTypeDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/transaction_types", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/transaction_types/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/v1/transaction_types", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/transaction_types/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/transaction_types/".concat(id), data);
    }
  }, {
    key: "deleteMany",
    value: function deleteMany(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/transaction_types/multiple", data);
    }
  }, {
    key: "restore",
    value: function restore(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/transaction_types/restore", data);
    }
  }, {
    key: "activate",
    value: function activate(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/transaction_types/activate", data);
    }
  }]);

  return TransactionTypeDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new TransactionTypeDataService());

/***/ }),

/***/ "./resources/js/services/WorkOrderDataService.js":
/*!*******************************************************!*\
  !*** ./resources/js/services/WorkOrderDataService.js ***!
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


var WorkOrderDataService = /*#__PURE__*/function () {
  function WorkOrderDataService() {
    _classCallCheck(this, WorkOrderDataService);
  }

  _createClass(WorkOrderDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/work_orders", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/work_orders/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/v1/work_orders", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/work_orders/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/work_orders/".concat(id), data);
    }
  }, {
    key: "deleteMany",
    value: function deleteMany(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/work_orders/multiple", data);
    }
  }, {
    key: "restore",
    value: function restore(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/work_orders/restore", data);
    }
  }, {
    key: "approve",
    value: function approve(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/work_orders/approve", data);
    }
  }, {
    key: "complete",
    value: function complete(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/work_orders/complete", data);
    }
  }, {
    key: "post",
    value: function post(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/work_orders/post", data);
    }
  }, {
    key: "cancel",
    value: function cancel(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/work_orders/cancel", data);
    }
  }]);

  return WorkOrderDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new WorkOrderDataService());

/***/ })

}]);