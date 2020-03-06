<template>
    <v-form v-model="valid" lazy-validation ref="form">
        <v-row>
            <v-col cols="12" sm="3">
                <v-text-field
                    v-model="nom"
                    :rules="[v => !!v || 'Le Nom est requis']"
                    label="Nom"
                    placeholder="Votre nom"
                    required
                    outlined
                    dense
                ></v-text-field>
            </v-col>
            <v-col cols="12" sm="2">
                <v-text-field
                    v-model="valeur"
                    :rules="[v => !!v || 'La valeur doit être un nombre']"
                    label="Valeur"
                    placeholder="Valeur"
                    type="number"
                    required
                    outlined
                    dense
                ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
                <v-select
                    v-model="categorie"
                    :items="items"
                    item-text="1"
                    item-value="0"
                    :rules="[v => !!v || 'Une catégorie est requise']"
                    label="Catégorie"
                    required
                    outlined
                    dense
                    placeholder="Une catégorie"
                ></v-select>
            </v-col>
            <v-col cols="12" sm="3">
                <v-btn
                    large
                    block
                    color="primary"
                    class="mr-4"
                    @click="ajouter"
                    :disabled="!valid"
                >{{ bouton }}</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
import Objet from "../model/objet";
import { Categories } from "../model/categories";

export default {
    name: "TestForm",
    props: ["objetCourant"],
    watch: {
        objetCourant(newObjet, oldObjet) {
            console.debug(newObjet, oldObjet);
            if (newObjet !== null) {
                this.bouton = "Modifier";
                this.nom = newObjet.nom;
                this.valeur = newObjet.valeur;
                for (var key in Categories)
                    if (Categories[key] === newObjet.categorie)
                        this.categorie = key;
            } else {
                this.bouton = "Ajouter";
            }
        }
    },
    data: () => ({
        nom: "",
        valeur: null,
        categorie: null,
        items: Object.entries(Categories),
        valid: false,
        bouton: "Ajouter"
    }),
    methods: {
        ajouter() {
            if (this.$refs.form.validate()) {
                this.$emit(
                    "ajout",
                    new Objet(this.nom, this.valeur, Categories[this.categorie])
                );
                this.nom = "";
                this.valeur = new Number(0);
                this.categorie = null;
            }
        }
    }
};
</script>
