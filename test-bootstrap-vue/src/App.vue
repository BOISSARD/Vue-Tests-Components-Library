<template>
    <div id="app">
        <b-navbar variant="secondary " type="dark" fixed="top" sticky class="mb-3">
            <b-navbar-brand href="#">BootstrapVue</b-navbar-brand>
        </b-navbar>
        <b-container fluid="lg">
            <TestForm @ajouter="ajout"></TestForm>
            <TestDataTable></TestDataTable>
		</b-container>
    </div>
</template>

<script>
import TestDataTable from "./components/TestDataTable";
import TestForm from "./components/TestForm";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
    name: "App",
    components: {
        TestDataTable,
        TestForm
	},
	methods: {
		ajout(objet){
			console.debug(objet)
		}
	}
};
</script>

<style>
</style>
