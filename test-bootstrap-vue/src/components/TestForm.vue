<template>
    <b-form @submit.prevent="ajouter">
        <b-form-row>
            <b-col sm="4">
                <b-input v-model="nom" placeholder="Nom" :state="verif('nom')"></b-input>
            </b-col>
            <b-col sm="2">
                <b-input
                    v-model="valeur"
                    type="number"
                    placeholder="Valeur"
                    :state="verif('valeur')"
                ></b-input>
            </b-col>
            <b-col sm="4">
                <b-form-select
                    v-model="categorie"
                    :state="verif('categorie')"
                    :options="[{ text: 'Catégorie...', value: null, disabled: true }, ...categories]"
                    value="null"
                ></b-form-select>
            </b-col>
            <b-col sm="2">
                <b-button block type="submit" variant="primary">Ajouter</b-button>
            </b-col>
        </b-form-row>
    </b-form>
</template>

<script>
import Objet from "../model/objet";
import { Categories } from "../model/categories";

export default {
    name: "TestForm",
    data() {
        return {
            nom: "",
            valeur: 0,
            categorie: null,
        };
    },
    computed: {
        categories() {
            let cat = [];
            for (let key in Categories)
                cat.push({ text: Categories[key], value: key });
            return cat;
        }
    },
    mounted() {
        this.defaut = true;
    },
    methods: {
        ajouter(evt) {
            this.$emit(
                "ajouter",
                new Objet(this.nom, this.valeur, Categories[this.categorie])
            );
            this.nom = ""
            this.valeur = 0
            this.categorie = null
        },
        verif(element) {
            if (element === "nom")
                return this.nom !== undefined && this.nom !== "";
            if (element === "valeur")
                return this.valeur !== undefined && this.valeur > 0;
            if (element === "categorie")
                return this.categorie !== undefined && this.categorie !== null;
            return null;
        }
    }
};
</script>

<style scoped>
</style>