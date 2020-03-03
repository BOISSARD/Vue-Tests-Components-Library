<template>
    <v-container>
        <v-card class="elevation-6">
            <v-card-title>
                Les objets
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
                :headers="colonnes"
                :items="lignes"
                item-key="nom"
                :items-per-page="10"
                show-select
                show-group-by
                multi-sort
                :sort-by="['categorie', 'valeur']"
                :sort-desc="[false, true]"
                :search="search"
                :loading="loading"
                loading-text="Loading... Please wait"
            ><!-- group-by="categorie" group-asc="nom"
               <!--  <template v-slot:item.sup10="item.valeur > 10">
                    <v-simple-checkbox v-model="item.sup10" disabled></v-simple-checkbox>
                </template> -->
            </v-data-table>
        </v-card>
    </v-container>
</template>

<script>
import Objet from "../model/objet";
//import { Categories } from "../model/categories";

export default {
    name: "TestDataTable",
    data() {
        return {
            search: "",
            loading: true,
            lignes: []
        };
    },
    props: {
        colonnes: [],
        items: []
    },
    mounted() {
        console.log("Colonnes : ", this.colonnes);
        setTimeout(() => {
            this.lignes = this.items;
            this.loading = false;
        }, 2555);
    }
};
</script>

<style>
</style>