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
                />
                <TestChart></TestChart>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import TestForm from "./components/TestForm";
import TestDataTable from "./components/TestDataTable";
import TestChart from "./components/TestChart";

import Objet from "./model/objet";
import { Categories } from "./model/categories";
import objets from "./data/objets";

export default {
    name: "App",
    components: {
        TestForm,
        TestDataTable,
        TestChart
    },
    data: () => ({
        objets: objets,
        colonnes: [],
        objetCourant: null
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
        }
    }
};
</script>
