<template>
    <v-container>
        <v-data-table
            :headers="colonnes"
            :items="items"
            item-key="nom"
            group-asc="nom"
            :items-per-page="10"
            show-select
            show-group-by
            class="elevation-6"
        ></v-data-table> <!-- group-by="categorie" -->
    </v-container>
</template>

<script>
import Objet from "../model/objet";
//import { Categories } from "../model/categories";

export default {
    name: "TestDataTable",
    data() {
        return {
            colonnes: []
        };
    },
    props: {
        items: [],
        headers: []
    },
    mounted() {
        console.log(this.items);
        for (const pro in Object.keys(new Objet())) {
            this.colonnes.push({
                text: Object.keys(new Objet())[pro].toUpperCase(),
                value: Object.keys(new Objet())[pro]
            });
        }
    }
};
</script>

<style>
</style>