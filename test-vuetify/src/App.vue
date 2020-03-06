<template>
    <v-app class="font-regular">
        <v-app-bar app color="primary" dark>
            <div class="d-flex align-center"></div>
            <v-spacer></v-spacer>
        </v-app-bar>
        <v-content>
            <v-container>
                <TestForm @ajout="ajout" :objetCourant="objetCourant" />
                <TestDataTable
                    :items="objets"
                    :colonnes="colonnes"
                    @editObjet="editObjet"
                    @deleteObjet="deleteObjet"
                    @selectionChanged="selectionObjet"
                />
                <TestCharts :objets="selection"></TestCharts>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import TestForm from "./components/TestForm";
import TestDataTable from "./components/TestDataTable";
import TestCharts from "./components/TestCharts";

import Objet from "./model/objet";
import { Categories } from "./model/categories";
import objets from "./data/objets";

export default {
    name: "App",
    components: {
        TestForm,
        TestDataTable,
        TestCharts
    },
    data: () => ({
        objets: objets,
        colonnes: [],
        objetCourant: null,
        selection: []
    }),
    created() {
        for (const pro in Object.keys(new Objet())) {
            this.colonnes.push({
                text: Object.keys(new Objet())[pro].toUpperCase(),
                value: Object.keys(new Objet())[pro],
                filterable: Object.keys(new Objet())[pro] !== "categorie"
            });
        }
        this.colonnes.push(
            {
                text: "valeur > 10",
                value: "sup10",
                filterable: true
            },
            { text: "", value: "data-table-expand" },
            { text: "Actions  ", value: "action", sortable: false }
        );
    },
    methods: {
        ajout(objet) {
            if (this.objetCourant === null) this.objets.push(objet);
            else {
                this.objets.splice(
                    this.objets.findIndex(
                        ob => this.objetCourant.nom === ob.nom
                    ),
                    1,
                    objet
                );
                this.objetCourant = null;
            }
        },
        editObjet(objet) {
            this.objetCourant = objet;
        },
        deleteObjet(objet) {
            this.objets = this.objets.filter(ob => ob.nom !== objet.nom);
        },
        selectionObjet(selection) {
            this.selection = selection
        }
    }
};
</script>
