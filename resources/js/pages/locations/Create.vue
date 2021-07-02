<template>
    <div>
        <v-row>
            <v-col class="d-flex justify-start">
                <v-btn icon @click="$router.go(-1)">
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <span class="page-title">New Location</span>
            </v-col>
        </v-row>

        <v-row class="d-flex justify-center">
            <v-col cols="12" md="6">
                <v-card flat>
                    <v-card-title>
                        General Information
                    </v-card-title>
                    <v-card-text>
                        <v-row class="d-flex justify-center">
                            <v-col cols="12">
                                <v-text-field
                                    label="Name"
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
                                <v-text-field
                                    label="Parent Location"
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
