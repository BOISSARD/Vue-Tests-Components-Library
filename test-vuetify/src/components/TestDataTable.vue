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
                show-select
                multi-sort
                :sort-by="['categorie', 'valeur']"
                :sort-desc="[false, true]"
                show-group-by
                group-by="categorie"
                :group-desc="groupDirection"
                :search="search"
                single-expand
                :expanded.sync="expanded"
                show-expand
                :loading="loading"
                loading-text="Chargement des données..."
                hide-default-footer
                :page.sync="page"
                :items-per-page="itemsPerPage"
                @page-count="pageCount = $event"
            >
                <!-- group-by="categorie" group-desc="true"   -->
                <template v-slot:top>
                    <v-switch v-model="groupDirection" label="Group Decroissant" class="pa-3"></v-switch>
                </template>
                <template v-slot:item.sup10="{ item }">
                    <!--v-simple-checkbox :value="item.valeur > 10" disabled></v-simple-checkbox-->
                    <v-simple-checkbox :value="item.sup10" disabled></v-simple-checkbox>
                </template>
                <template v-slot:expanded-item="{ headers, item }">
                    <td :colspan="headers.length">{{ item.nom }} a une valeur de {{ item.valeur }}</td>
                </template>
                <template v-slot:item.valeur="{ item }">
                    <v-chip :color="getColor(item.valeur)" dark>{{ item.valeur }}</v-chip>
                </template>
            </v-data-table>
            <v-row align="center" justify="center" class="pt-2">
                <v-col lg="1">
                    <v-text-field
                        :value="itemsPerPage"
                        label="Nombre par page"
                        type="number"
                        solo
                        min="-1"
                        max="100"
                        class="mt-6"
                        dense
                        @input="itemsPerPage = parseInt($event, 10)"
                    ></v-text-field>
                </v-col>
                <v-col lg="6">
                    <v-pagination v-model="page" :length="pageCount"></v-pagination>
                </v-col>
                <v-col lg="1"></v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
import Objet from "../model/objet";

export default {
    name: "TestDataTable",
    data() {
        return {
            page: 1,
            pageCount: 0,
            itemsPerPage: 3,
            search: "",
            loading: true,
            lignes: [],
            expanded: [],
            groupDirection: false,
            groupes: "categorie"
        };
    },
    watch: {
        lignes(nouvelles) {
            this.lignes.forEach(element => {
                element.sup10 = element.valeur > 10;
            });
        },
        groupes: {
            immediate: true,
            handler(newVal, oldVal) {
                console.log(newVal, oldVal, this.groupes);
            }
        }
    },
    props: ["colonnes", "items"],
    mounted() {
        setTimeout(() => {
            this.lignes = this.items;
            this.loading = false;
        }, 530); // 2300
    },
    methods: {
        getColor(valeur) {
            if (valeur > 20) return "red";
            else if (valeur > 10) return "orange";
            else return "green";
        },
        test() {
            console.log(this.groupes);
        }
    }
};
</script>

<style>
</style>