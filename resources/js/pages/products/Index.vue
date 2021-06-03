<template>
    <div>
        <v-row justify="center" align="center">
            <v-col>
                <div class="title">
                    Products
                </div>
                <v-btn
                    small
                    text
                    color="blue"
                    :to="{ name: 'products.create' }"
                >
                    Add new
                </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="text-right">
                <!-- <v-btn
                    fab
                    color="blue"
                    :to="{ name: 'products.create' }"
                    small
                    dark
                >
                    <v-icon>mdi-plus</v-icon>
                </v-btn> -->
            </v-col>
        </v-row>
    </div>
</template>
