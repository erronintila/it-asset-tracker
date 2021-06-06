<template>
    <div>
        <div class="page-title mb-4">Dashboard</div>

        <v-row>
            <v-col
                cols="12"
                md="3"
                v-for="(item, index) in dashboard.headers"
                :key="index"
            >
                <v-hover v-slot="{ hover }" open-delay="30">
                    <v-card
                        :elevation="hover ? 10 : 3"
                        :class="{ 'on-hover': hover }"
                        class="rounded-xl"
                        :color="item.color"
                        :dark="item.dark"
                    >
                        <v-list-item three-line>
                            <v-list-item-content>
                                <div :class="'header-title ' + item.text_color">
                                    {{ item.title }}
                                </div>
                                <div :class="'header-body ' + item.text_color">
                                    {{ item.body }}
                                </div>
                                <div :class="'body-2 ' + item.text_color">
                                    {{ item.subtitle }}
                                </div>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="4">
                <v-hover v-slot="{ hover }" open-delay="30">
                    <v-card
                        :elevation="hover ? 10 : 3"
                        :class="{ 'on-hover': hover }"
                        class="rounded-xl"
                        height="25rem"
                    >
                        <v-list-item three-line>
                            <v-list-item-content>
                                <div class="header-title">
                                    Sample Title
                                </div>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card></v-hover
                >
            </v-col>
            <v-col cols="12" md="8">
                <v-hover v-slot="{ hover }" open-delay="30">
                    <v-card
                        :elevation="hover ? 10 : 3"
                        :class="{ 'on-hover': hover }"
                        class="rounded-xl"
                        height="25rem"
                    >
                        <v-list-item three-line>
                            <v-list-item-content>
                                <div class="header-title">
                                    Sample Title
                                </div>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-hover v-slot="{ hover }" open-delay="30">
                    <v-card
                        :elevation="hover ? 10 : 3"
                        :class="{ 'on-hover': hover }"
                        class="rounded-xl"
                        height="25rem"
                    >
                        <v-list-item three-line>
                            <v-list-item-content>
                                <div class="header-title">
                                    Sample Title
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
import { mapGetters } from "vuex";
export default {
    name: "dashboard",
    data() {
        return {
            dashboard: {
                headers: [
                    {
                        title: "Total Work Orders",
                        subtitle: "sample text",
                        body: "1,000,000.00",
                        color: "primary",
                        dark: false,
                        text_color: "white--text"
                    },
                    {
                        title: "Total Work Orders",
                        subtitle: "sample text",
                        body: "100",
                        color: "white",
                        dark: false,
                        text_color: "black--text"
                    },
                    {
                        title: "Total Work Orders",
                        subtitle: "sample text",
                        body: "100",
                        color: "white",
                        dark: true,
                        text_color: "black--text"
                    },
                    {
                        title: "Total Work Orders",
                        subtitle: "sample text",
                        body: "100",
                        color: "white",
                        dark: false,
                        text_color: "black--text"
                    }
                ]
            }
        };
    },
    computed: {
        ...mapGetters({
            user: "auth/user"
        })
    }
};
</script>

<style scoped>
.header-title {
    font-size: 1.2rem;
    font-weight: 900;
}

.header-body {
    font-size: 2.5rem;
    font-weight: 800;
}

.page-title {
    font-size: 1.5rem;
    font-weight: 100;
}
</style>
