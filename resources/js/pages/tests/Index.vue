<template>
    <div>
        <DepartmentTable
            ref="departmentTable"
            :showSelect="false"
            @selected-items="onSelectedItems"
        ></DepartmentTable>
        <v-btn @click="$refs.departmentTable.getData()">Hello</v-btn>
    </div>
</template>

<script>
import DepartmentTable from "../../components/tables/DepartmentTable.vue";
export default {
    components: {
        DepartmentTable
    },
    methods: {
        onSelectedItems(e) {
            console.log(e);
        }
    }
};
</script>
