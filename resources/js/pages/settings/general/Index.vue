<template>
    <div>
        <page-header class="mb-4" :title="'General Settings'"></page-header>

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
                            <CompanySettings></CompanySettings>
                        </v-tab-item>
                        <v-tab-item>
                            <PrintSettings></PrintSettings>
                        </v-tab-item>
                    </v-tabs-items>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import CompanySettings from "./CompanySettings.vue";
import PrintSettings from "./PrintSettings.vue";

export default {
    components: {
        CompanySettings,
        PrintSettings
    },
    data() {
        return {
            tab: null,
            items: ["company", "print layout"]
        };
    }
};
</script>
