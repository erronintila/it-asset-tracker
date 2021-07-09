<template>
    <div>
        <v-row class="mb-8">
            <v-col class="d-flex align-center">
                <div class="page-title d-inline mr-3">
                    Welcome {{ user ? user.name : "" }}
                </div>
            </v-col>
        </v-row>

        <v-row class="mx-md-8 px-md-8  my-8">
            <v-col cols="6" class="d-flex justify-center">
                <v-hover v-slot="{ hover }" open-delay="30">
                    <v-card
                        :elevation="hover ? 10 : 3"
                        :class="{ 'on-hover': hover }"
                        class="rounded-lg"
                        to="/work_orders/create"
                        height="200"
                        width="200"
                    >
                        <v-card-text>
                            <div class="d-flex justify-center align-center">
                                <v-icon size="100" class="mt-4">
                                    mdi-text-box-plus-outline
                                </v-icon>
                            </div>
                            <div class="text-center mt-4">
                                Create Work Order
                            </div>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>

            <v-col cols="6" class="d-flex justify-center">
                <v-hover v-slot="{ hover }" open-delay="30">
                    <v-card
                        :elevation="hover ? 10 : 3"
                        :class="{ 'on-hover': hover }"
                        class="rounded-lg"
                        height="200"
                        width="200"
                        to="/profile"
                    >
                        <v-card-text>
                            <div class="d-flex justify-center align-center">
                                <v-icon size="100" class="mt-4">
                                    mdi-account-outline
                                </v-icon>
                            </div>
                            <div class="text-center mt-4">
                                Update Profile
                            </div>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>

        <v-row class="mx-md-8 px-md-8 my-8">
            <v-col cols="6" class="d-flex justify-center">
                <v-hover v-slot="{ hover }" open-delay="30">
                    <v-card
                        :elevation="hover ? 10 : 3"
                        :class="{ 'on-hover': hover }"
                        class="rounded-lg"
                        to="/assets"
                        height="200"
                        width="200"
                    >
                        <v-card-text>
                            <div class="d-flex justify-center align-center">
                                <v-icon size="100" class="mt-4">
                                    mdi-desktop-classic
                                </v-icon>
                            </div>
                            <div class="text-center mt-4">
                                View Assets
                            </div>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>

            <v-col cols="6" class="d-flex justify-center">
                <v-hover v-slot="{ hover }" open-delay="30">
                    <v-card
                        :elevation="hover ? 10 : 3"
                        :class="{ 'on-hover': hover }"
                        class="rounded-lg"
                        to="/schedules"
                        height="200"
                        width="200"
                    >
                        <v-card-text>
                            <div class="d-flex justify-center align-center">
                                <v-icon size="100" class="mt-4">
                                    mdi-calendar-month
                                </v-icon>
                            </div>
                            <div class="text-center mt-4">
                                Schedule Board
                            </div>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "home",
    computed: {
        ...mapGetters({
            user: "auth/user"
        })
    }
};
</script>

<style scoped>
.page-title {
    font-size: 1.5rem;
    font-weight: 100;
}
</style>
