<template>
    <v-overlay color="white" :value="overlay" opacity="1">
        <v-progress-circular
            color="primary"
            indeterminate
            size="64"
        ></v-progress-circular>
    </v-overlay>
</template>

<script>
export default {
    props: {
        delay: {
            typeof: Number,
            default: 700
        },
        isLoading: {
            type: Boolean,
            default: true
        },
        autoClose: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            overlay: true
        };
    },
    watch: {
        isLoading: {
            deep: true,
            immediate: true,
            handler(newValue) {
                this.overlay = newValue;

                if (newValue && this.autoClose) {
                    setTimeout(() => {
                        this.overlay = false;
                    }, this.delay);
                }
            }
        }
    }
};
</script>
