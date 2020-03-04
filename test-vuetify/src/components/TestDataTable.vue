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
                multi-sort
                :sort-by="['categorie', 'valeur']"
                :sort-desc="[false, true]"
                show-group-by
                :group-by="groupes"
                :group-desc="groupDirection"
                :search="search"
                single-expand
                :expanded.sync="expanded"
                show-expand
                :loading="loading"
                loading-text="Chargement des données..."
            >
                <!-- group-by="categorie" group-desc="true"   -->
                <template v-slot:top v-if="groupes !== '' && groupes.length !== 0">
                    <v-switch v-model="groupDirection" label="Group Decroissant"  class="pa-3"></v-switch>
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
        </v-card>
    </v-container>
</template>

<script>
import Objet from "../model/objet";

export default {
    name: "TestDataTable",
    data() {
        return {
            search: "",
            loading: true,
            lignes: [],
            expanded: [],
            groupDirection: false,
            groupes: "categorie"
        };
    },
    watch: {
        lignes(nouvelles){
            this.lignes.forEach(element => {element.sup10 = element.valeur > 10});
        },
        groupes: {
            immediate: true,
            handler(newVal, oldVal){
                console.log(newVal, oldVal, this.groupes)
            }
        }
    },
    props: ["colonnes", "items"],
    mounted() {
        setTimeout(() => {
            this.lignes = this.items;
            this.loading = false;
        }, 2300); // 2300
    },
    methods: {
        getColor(valeur) {
            if (valeur > 20) return "red";
            else if (valeur > 10) return "orange";
            else return "green";
        },
        test(){
            console.log(this.groupes)
        }
    }
};
</script>

<style>
</style>