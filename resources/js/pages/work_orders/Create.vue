<template>
    <div>
        <v-row>
            <v-col class="d-flex justify-start">
                <v-btn icon @click="$router.go(-1)">
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <span class="page-title">New Work Order</span>
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
                                    label="Work Order No."
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Work Order Type"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Date"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Parent Work Order"
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
                        Asset Information
                    </v-card-title>
                    <v-card-text>
                        <v-row class="d-flex justify-center">
                            <v-col cols="12">
                                <v-text-field
                                    label="Asset"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Sub-Assets"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Assigned To"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Location"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Incident Type"
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
                                    label="Actual Date Performed"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Diagnosis"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Action Taken"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    label="Recommendation"
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
