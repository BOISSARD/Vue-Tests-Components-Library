<template>
    <div id="app">
        <b-navbar variant="primary " type="dark" fixed="top" sticky class="mb-3">
            <b-navbar-brand href="#">BootstrapVue</b-navbar-brand>
        </b-navbar>
        <b-container fluid="lg">
            <TestForm @ajouter="ajout"></TestForm>
            <TestDataTable :items="objets"></TestDataTable>
		</b-container>
    </div>
</template>

<script>
import Objet from "./model/objet";
import { Categories } from "./model/categories";

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
    data: () => ({
        objets: [
            new Objet("objet5", 13, Categories.numero2),
            new Objet("objet1", 5, Categories.numero1),
            new Objet("objet4", 7, Categories.numero2),
            new Objet("objet2", 15, Categories.numero1),
            new Objet("objet6", 9, Categories.numero3),
            new Objet("objet3", 22, Categories.numero1)
        ],
    }),
	methods: {
		ajout(objet){
			console.debug(objet)
		}
	}
};
</script>

<style>
</style>
