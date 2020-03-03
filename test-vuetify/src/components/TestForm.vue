<template>
    <v-form v-model="valid" lazy-validation ref="form">
        <v-container>
            <v-row>
                <v-col cols="12" md="3">
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
                <v-col cols="12" md="3">
                    <v-text-field
                        v-model="valeur"
                        :rules="[v => !!v || 'La valeur doit être un nombre']"
                        label="Valeur"
                        type="number"
                        required
                        outlined
                        dense
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
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
                <v-col cols="12" md="3">
                    <v-btn
                        large
                        block
                        color="primary"
                        class="mr-4"
                        @click="ajouter"
                        :disabled="!valid"
                    >Ajouter</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
import Objet from "../model/objet";
import { Categories } from "../model/categories";

export default {
    name: "TestForm",
    data: () => ({
        nom: "",
        valeur: new Number("0"),
        categorie: null,
        items: Object.entries(Categories),
        valid: false
    }),
    methods: {
        ajouter() {
            if (this.$refs.form.validate()){
                this.$emit("ajout", new Objet(this.nom, this.valeur, Categories[this.categorie]));
                this.nom = "";
                this.valeur = new Number(0);
                this.categorie = null;
            }
        }
    }
};
</script>
