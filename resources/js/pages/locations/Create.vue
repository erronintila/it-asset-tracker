<template>
    <div>
        <subpage-header
            :title="'New Location'"
            :backButton="true"
        ></subpage-header>

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
                                <v-select
                                    label="Country"
                                    :items="['Philippines']"
                                    outlined
                                ></v-select>
                                <v-text-field
                                    label="Postal Code"
                                    outlined
                                    clearable
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" md="6">
                <v-card flat>
                    <v-card-title>
                        Other Information
                    </v-card-title>
                    <v-card-text>
                        <v-row class="d-flex justify-center">
                            <v-col cols="12">
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
                                <v-textarea
                                    label="Notes"
                                    outlined
                                    clearable
                                    rows="3"
                                ></v-textarea>
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

<script>
export default {
    data() {
        return {};
    }
};
</script>
