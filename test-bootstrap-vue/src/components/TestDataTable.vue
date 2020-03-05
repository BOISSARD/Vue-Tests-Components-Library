<template>
    <div class="mt-4">
        <b-card :title="'Les objets : ' + items.length">
            <b-table striped sticky-header responsive :items="items"></b-table>
        </b-card>
    </div>
</template>

<script>
export default {
    name: "TestDataTable",
    props: {
        items: []
    }
};
</script>

<style scoped>
</style>