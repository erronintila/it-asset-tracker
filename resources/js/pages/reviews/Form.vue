<template>
    <v-form ref="form" v-model="valid">
        <v-row class="d-flex justify-center">
            <v-col cols="12">
                <v-card flat>
                    <v-card-title>
                        General Information
                    </v-card-title>
                    <v-card-text>
                        <v-row class="d-flex">
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="form.reference_no"
                                    label="Reference No"
                                    outlined
                                    clearable
                                    hint="Ex. #209384293"
                                    :error-messages="errors.reference_no[0]"
                                    @input="errors.reference_no = []"
                                ></v-text-field>
                                <v-dialog
                                    ref="dialogRequestDate"
                                    v-model="requestDateModal"
                                    :return-value.sync="form.date"
                                    persistent
                                    width="290px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="form.date"
                                            label="Request Date"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                            outlined
                                            hint="Ex. 2000-01-01"
                                            :error-messages="errors.date[0]"
                                            @input="errors.date = []"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="form.date"
                                        :max="maxDate"
                                        scrollable
                                        @input="errors.date = []"
                                    >
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="requestDateModal = false"
                                        >
                                            Cancel
                                        </v-btn>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="
                                                $refs.dialogRequestDate.save(
                                                    form.date
                                                )
                                            "
                                        >
                                            OK
                                        </v-btn>
                                    </v-date-picker>
                                </v-dialog>
                                <v-text-field
                                    v-model="form.description"
                                    label="Description"
                                    outlined
                                    clearable
                                    hint="Ex. Review for Asset 1"
                                    :error-messages="errors.description[0]"
                                    @input="errors.description = []"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <ReviewCategorySelector
                                    :selected="
                                        !form.review_category
                                            ? []
                                            : [...form.review_category]
                                    "
                                    @on-select="onSelectReviewCategory"
                                >
                                    <template v-slot:openDialog="{ on, attrs }">
                                        <v-text-field
                                            :value="
                                                form.review_category
                                                    ? form.review_category.name
                                                    : ''
                                            "
                                            :error-messages="
                                                errors.review_category_id
                                            "
                                            @input="
                                                errors.review_category_id = []
                                            "
                                            label="Review Category"
                                            readonly
                                            outlined
                                            class="d-flex justify-center align-center"
                                            v-bind="attrs"
                                            v-on="on"
                                        ></v-text-field>
                                    </template>
                                </ReviewCategorySelector>

                                <v-text-field
                                    :value="
                                        form.user ? form.user.full_name : ''
                                    "
                                    label="User"
                                    outlined
                                    :error-messages="errors.user_id[0]"
                                    @input="errors.user_id = []"
                                    readonly
                                >
                                    <template v-slot:append>
                                        <EmployeeDialogSelector
                                            :selected="
                                                !form.user ? [] : [...form.user]
                                            "
                                            @on-select="onSelectUser"
                                        >
                                            <template
                                                v-slot:openDialog="{
                                                    on,
                                                    attrs
                                                }"
                                            >
                                                <v-btn
                                                    v-bind="attrs"
                                                    v-on="on"
                                                    icon
                                                    title="Select Employee"
                                                >
                                                    <v-icon>
                                                        mdi-clipboard-account
                                                    </v-icon>
                                                </v-btn>
                                            </template>
                                        </EmployeeDialogSelector>

                                        <CustomerDialogSelector
                                            :selected="
                                                !form.user ? [] : [...form.user]
                                            "
                                            @on-select="onSelectUser"
                                        >
                                            <template
                                                v-slot:openDialog="{
                                                    on,
                                                    attrs
                                                }"
                                            >
                                                <v-btn
                                                    v-bind="attrs"
                                                    v-on="on"
                                                    icon
                                                    title="Select Customer"
                                                >
                                                    <v-icon>
                                                        mdi-card-account-details-outline
                                                    </v-icon>
                                                </v-btn>
                                            </template>
                                        </CustomerDialogSelector>
                                    </template>
                                </v-text-field>

                                <AssetDialogSelector
                                    :selected="
                                        !form.asset ? [] : [...form.asset]
                                    "
                                    :requestType="'work_order'"
                                    :assignedUserId="
                                        form.user ? form.user.id : 0
                                    "
                                    @on-select="onSelectAsset"
                                >
                                    <template v-slot:openDialog="{ on, attrs }">
                                        <v-text-field
                                            :value="
                                                form.asset
                                                    ? form.asset.description
                                                    : ''
                                            "
                                            label="Asset"
                                            outlined
                                            :error-messages="errors.asset_id[0]"
                                            @input="errors.asset_id = []"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                        ></v-text-field>
                                    </template>
                                </AssetDialogSelector>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12">
                <v-card flat>
                    <v-card-title class="d-flex justify-space-between">
                        <div>
                            Features
                        </div>
                        <div class="d-flex">
                            <FeatureDialogSelector
                                :selected="!form.features ? [] : form.features"
                                :singleSelect="false"
                                :reviewCategoryId="
                                    form.review_category
                                        ? form.review_category.id
                                        : 0
                                "
                                @on-select="onSelectFeature"
                            >
                                <template v-slot:openDialog="{ on, attrs }">
                                    <v-btn
                                        icon
                                        fab
                                        small
                                        title="Choose asset"
                                        v-bind="attrs"
                                        v-on="on"
                                    >
                                        <v-icon>
                                            mdi-clipboard-plus-outline
                                        </v-icon>
                                    </v-btn>
                                </template>
                            </FeatureDialogSelector>
                        </div>
                    </v-card-title>
                    <v-card-text>
                        <small
                            class="red--text"
                            v-if="
                                form.features.length == 0 &&
                                    errors.features.length
                            "
                        >
                            {{ errors.features[0] }}
                        </small>
                        <v-data-table
                            :headers="headers.feature"
                            :items="form.features"
                            :items-per-page="5"
                        >
                            <template v-slot:[`item.is_required`]="{ item }">
                                {{ item.is_required ? "true" : "false" }}
                            </template>
                            <template v-slot:[`item.action`]="{ item }">
                                <v-btn icon>
                                    <v-icon @click="editItem(item)">
                                        mdi-pencil
                                    </v-icon>
                                </v-btn>
                                <v-btn icon>
                                    <v-icon @click="removeItem(item)">
                                        mdi-delete
                                    </v-icon>
                                </v-btn>
                            </template>
                        </v-data-table>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12">
                <v-card flat>
                    <v-card-title>
                        Other Information
                    </v-card-title>
                    <v-card-text>
                        <v-row class="d-flex justify-center">
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.remarks"
                                    label="Remarks"
                                    outlined
                                    clearable
                                    :error-messages="errors.remarks[0]"
                                    @input="errors.remarks = []"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            @click="onSave"
                            class="mr-2"
                            large
                        >
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <v-dialog v-model="dialog" max-width="500px">
            <v-card>
                <v-card-title>
                    <span class="text-h5">Rating</span>
                </v-card-title>

                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="editedItem.rating"
                                    label="Rating"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="editedItem.remarks"
                                    label="Remarks"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">
                        Cancel
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="save">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-form>
</template>

<script>
import moment from "moment";
import CustomerDialogSelector from "../../components/selectors/CustomerDialogSelector.vue";
import EmployeeDialogSelector from "../../components/selectors/EmployeeDialogSelector.vue";
import ReviewCategorySelector from "../../components/selectors/ReviewCategorySelector.vue";
import AssetDialogSelector from "../../components/selectors/AssetDialogSelector.vue";
import FeatureDialogSelector from "../..//components/selectors/FeatureDialogSelector.vue";

export default {
    props: {
        reviewForm: {
            type: Object,
            default: () => {
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
            default: () => {
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
            default: () => {
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
        ReviewCategorySelector,
        EmployeeDialogSelector,
        CustomerDialogSelector,
        AssetDialogSelector,
        FeatureDialogSelector
    },
    data() {
        return {
            valid: false,
            category: "",
            requestDateModal: false,
            dialog: false,
            headers: {
                feature: [
                    { text: "Code", value: "code" },
                    { text: "Name", value: "name" },
                    { text: "Required", value: "is_required", sortable: false },
                    { text: "Rating", value: "pivot.rating", sortable: false },
                    {
                        text: "Remarks",
                        value: "pivot.remarks",
                        sortable: false
                    },
                    { text: "Action", value: "action", sortable: false }
                ]
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
        onSave() {
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

            this.form.review_category_id = this.form.review_category?.id;
            this.form.user_id = this.form.user?.id;
            this.form.asset_id = this.form.asset?.id;

            this.$emit("on-save", this.form);
        },
        onSelectReviewCategory(e) {
            this.errors.review_category_id = [];

            if (e == null || e == undefined) {
                this.form.review_category = null;
                return;
            }

            this.form.review_category = e[0];
        },
        onSelectUser(e) {
            this.errors.user_id = [];

            if (e == null || e == undefined) {
                this.form.user = null;
                return;
            }

            this.form.user = e[0];
        },
        onSelectAsset(e) {
            this.errors.asset_id = [];

            if (e == null || e == undefined) {
                this.form.asset = null;
                return;
            }

            this.form.asset = e[0];
        },
        onSelectFeature(e) {
            this.errors.features = [];

            if (e == null || e == undefined) {
                this.form.features = [];
                return;
            }

            this.form.features = e.map(item => ({
                ...item,
                rating: "",
                remarks: ""
            }));
        },
        removeItem(item) {
            if (item.is_required) {
                alert("Item can't be removed");
                return;
            }

            if (confirm("Remove this item?")) {
                this.editedIndex = this.form.features.indexOf(item);
                this.form.features.splice(this.editedIndex, 1);
            }
        },
        editItem(item) {
            this.editedIndex = this.form.features.indexOf(item);
            this.editedItem = Object.assign({}, {...{rating: "", remarks: ""}, ...item.pivot});
            this.dialog = true;
        },
        close() {
            this.dialog = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },
        save() {
            if (this.editedIndex > -1) {
                this.form.features[this.editedIndex].pivot = this.editedItem;
            } else {
                this.form.features.push(this.editedItem);
            }
            this.close();
        }
    },
    computed: {
        maxDate() {
            return moment().format("YYYY-MM-DD");
        }
    },
    watch: {
        reviewForm: {
            immediate: true,
            handler(newValue, oldValue) {
                this.form = newValue;
            }
        },
        dialog(val) {
            val || this.close();
        }
    }
};
</script>
