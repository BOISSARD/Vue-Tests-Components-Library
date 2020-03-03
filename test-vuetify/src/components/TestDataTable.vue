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
                single-expand
                :expanded.sync="expanded"
                show-expand
                :loading="loading"
                loading-text="Chargement des données..."
            > <!-- group-by="categorie" group-asc="nom" -->
                <template v-slot:item.sup10="{ item }">
                    <v-simple-checkbox v-model="item.sup10" disabled></v-simple-checkbox>
                </template>
                <template v-slot:expanded-item="{ headers }">
                    <td :colspan="headers.length">Peek-a-boo!</td>
                </template>
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
            lignes: [],
            expanded: [],
        };
    },
    props: {
        colonnes: [],
        items: []
    },
    mounted() {
        setTimeout(() => {
            this.lignes = this.items;
            this.loading = false;
            this.lignes.forEach(element => {
                element.sup10 = element.valeur > 10;
            });
        }, 0); // 2300
    }
};
</script>

<style>
</style>