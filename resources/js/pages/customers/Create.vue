<template>
    <div>
        <v-row>
            <v-col class="d-flex justify-start">
                <v-btn icon @click="$router.go(-1)">
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <span class="page-title">New Customer</span>
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
                                    label="Customer Code"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Short Name"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Name"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Email"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Website"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Area Code"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Location"
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
                        Contact Information
                    </v-card-title>
                    <v-card-text>
                        <v-row class="d-flex justify-center">
                            <v-col cols="12">
                                <v-text-field
                                    label="Contact Person"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Phone No."
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Address"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="City"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="State"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Country"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Postal Code"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Latitude"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Longitude"
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
                                    label="Notes"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Image"
                                    outlined
                                    clearable
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-sheet class="ml-4">
                            <v-switch inset label="Activate Account"></v-switch>
                        </v-sheet>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            @click="$router.go(-1)"
                            class="mr-2"
                            large
                        >
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
