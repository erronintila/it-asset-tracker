<template>
    <div>
        <v-row>
            <v-col class="d-flex align-center">
                <div class="page-title d-inline mr-3">
                    Asset Settings
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col
                cols="6"
                md="4"
                lg="3"
                v-for="(item, index) in dashboard.headers"
                :key="index"
            >
                <v-hover v-slot="{ hover }" open-delay="30">
                    <v-card
                        :elevation="hover ? 10 : 3"
                        :class="{ 'on-hover': hover }"
                        class="rounded-lg"
                        @click="$router.push({ name: item.link })"
                    >
                        <v-list-item three-line>
                            <v-list-item-content>
                                <div class="title">
                                    {{ item.title }}
                                </div>
                                <div class="body-2">
                                    {{ item.subtitle }}
                                </div>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dashboard: {
                headers: [
                    {
                        title: "Categories",
                        subtitle: "sample text",
                        link: "asset_categories.index"
                    },
                    {
                        title: "Request Types",
                        subtitle: "sample text",
                        link: "asset_requests.index"
                    },
                    {
                        title: "Status Labels",
                        subtitle: "sample text",
                        link: "asset_statuses.index"
                    },
                    {
                        title: "Review Categories",
                        subtitle: "sample text",
                        link: "asset_reviews.index"
                    }
                ]
            }
        };
    }
};
</script>

<style scoped></style>
