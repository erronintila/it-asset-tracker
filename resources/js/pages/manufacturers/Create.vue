<template>
    <div>
        <v-row>
            <v-col class="d-flex justify-start">
                <v-btn icon @click="$router.go(-1)">
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <span class="page-title">New Manufacturer</span>
            </v-col>
        </v-row>

        <v-row class="d-flex justify-center">
            <v-col cols="12" md="4">
                <v-card flat>
                    <v-card-title>
                        General Information
                    </v-card-title>
                    <v-card-text>
                        <v-row class="d-flex justify-center">
                            <v-col cols="12">
                                <v-text-field
                                    label="Reference No."
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Asset Tag"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Category"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Description"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Model"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Manufacturer"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Parent Asset"
                                    outlined
                                    clearable
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card flat>
                    <v-card-title>
                        Purchase Information
                    </v-card-title>
                    <v-card-text>
                        <v-row class="d-flex justify-center">
                            <v-col cols="12">
                                <v-text-field
                                    label="Supplier"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Purchase Date"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Purchase Cost"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Warranty"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Stock Keeping Unit"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Quantity"
                                    outlined
                                    clearable
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card flat>
                    <v-card-title>
                        Other Information
                    </v-card-title>
                    <v-card-text>
                        <v-row class="d-flex justify-center">
                            <v-col cols="12">
                                <v-text-field
                                    label="Parameters"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Image"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Notes"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Attachments"
                                    outlined
                                    clearable
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            rounded
                            dark
                            @click="$router.go(-1)"
                            class="text-capitalize"
                        >
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
