<template>
    <v-container id="zone-tableau">
        <v-card class="elevation-6">
            <v-card-title>
                {{lignes.length > 1 ? "Les " + lignes.length + " objets : " : lignes.length > 0 ? "L'objet : " : "Il y a rien : "}}
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Recherche"
                    single-line
                    hide-details
                    dense
                ></v-text-field>
            </v-card-title>
            <v-data-table
                :headers="colonnes"
                :items="lignes"
                item-key="nom"
                fixed-header
                :height="hauteur"
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
                    <v-switch
                        v-model="groupDirection"
                        label="Inverser sens d'affichage"
                        class="pa-0 ma-0 ml-3"
                    ></v-switch>
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
                <template v-slot:item.action="{ item }">
                    <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
                    <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
                </template>
            </v-data-table>
            <v-row align="center" justify="center" class="pt-2">
                <v-col offset-sm="1" cols="5" md="3">
                    <span class="grey--text">Items per page</span>
                    <v-menu offset-y>
                        <template v-slot:activator="{ on }">
                            <v-btn text color="primary" class="ml-2" v-on="on">
                                {{ itemsPerPage === Infinity ? 'Tout' : itemsPerPage }}
                                <v-icon>mdi-chevron-down</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item
                                v-for="(number, index) in itemsPerPageArray"
                                :key="index"
                                @click="itemsPerPage = number"
                            >
                                <v-list-item-title>{{ number === Infinity ? 'Tout' : number }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-col>
                <v-col cols="4">
                    <v-pagination v-model="page" :length="pageCount"></v-pagination>
                </v-col>
                <v-col cols="2" md="4"></v-col>
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
            itemsPerPageArray: [3, 6, 12, Infinity],
            search: "",
            loading: true,
            lignes: [],
            expanded: [],
            groupDirection: false,
            groupes: "categorie",
            hauteur: window.innerHeight / 4
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
                //console.debug(newVal, oldVal, this.groupes);
            }
        },
        items: {
            immediate: true,
            handler(newItems) {
                this.loading = true;
                setTimeout(() => {
                    this.lignes = this.items;
                    this.loading = false;
                }, 530); // 2300
            }
        }
    },
    props: ["colonnes", "items"],
    methods: {
        getColor(valeur) {
            if (valeur > 20) return "red";
            else if (valeur > 10) return "orange";
            else return "green";
        },
        editItem(objet) {
            this.$emit("editObjet", objet);
        },
        deleteItem(objet) {
            this.$emit("deleteObjet", objet);
        }
    }
};
</script>

<style scoped>
</style>