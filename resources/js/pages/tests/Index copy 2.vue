<template>
    <div>
        <!-- <v-btn @click="dialogDepartment = true">Department</v-btn> -->

        <!-- <DepartmentDialogSelector
            :dialogDepartment="dialogDepartment"
            @close-dialog="dialogDepartment = false"
            @on-select="onSelectDepartment"
        >
        </DepartmentDialogSelector>

        {{ this.selectedItems }} -->
    </div>
</template>

<script>
import DepartmentDialogSelector from "../../components/selectors/DepartmentDialogSelector.vue";

export default {
    components: {
        DepartmentDialogSelector
    },
    data() {
        return {
            dialogDepartment: false,
            selectedItems: []
        };
    },
    methods: {
        onSelectDepartment(e) {
            if (e == null || e == undefined) {
                this.selectedItems = [];
                return;
            }
            this.selectedItems = e;
            this.dialogDepartment = false;
            console.log(e);
        }
    }
};
</script>
