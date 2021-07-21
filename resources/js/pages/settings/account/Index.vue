<template>
    <div>
        <!-- <v-row>
            <v-col class="d-flex align-center justify-space-between">
                <div class="page-title d-inline mx-3">
                    Account Settings
                </div>
                <v-btn color="primary">
                    Save
                </v-btn>
            </v-col>
        </v-row> -->

        <page-header class="mb-4" :title="'Account Settings'"></page-header>

        <v-row>
            <v-col cols="12">
                <v-card elevation="0">
                    <v-tabs v-model="tab" show-arrows class="mb-4">
                        <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
                        <v-tab v-for="item in items" :key="item">
                            {{ item }}
                        </v-tab>
                    </v-tabs>
                    <v-tabs-items v-model="tab">
                        <v-tab-item>
                            <v-card>
                                <DepartmentIndex></DepartmentIndex>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item> </v-tab-item>
                    </v-tabs-items>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import DepartmentIndex from "../../departments/Index.vue";
export default {
    components: {
        DepartmentIndex
    },
    data() {
        return {
            tab: null,
            items: ["departments", "permissions"]
        };
    }
};
</script>
