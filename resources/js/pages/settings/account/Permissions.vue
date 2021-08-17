<template>
    <div></div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        async getData() {
            try {
                const response = await PermissionDataService.getAll();
            } catch (error) {
                console.log(error);
                alert("An error has occurred.");
            }
        }
    }
};
</script>
