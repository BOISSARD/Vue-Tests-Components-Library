<template>
    <v-form>
        <v-container>
            <v-row>
                <v-col cols="12" md="3">
                    <v-text-field
                        v-model="name"
                        :rules="[v => !!v || 'Le Nom est requis']"
                        :counter="10"
                        label="Nom"
                        required
                        outlined
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
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                    <v-select
                        v-model="categorie"
                        :items="items"
                        :rules="[v => !!v || 'Une catégorie est requise']"
                        label="Catégorie"
                        required
                        outlined
                    ></v-select>
                </v-col>

                <v-col cols="12" md="3">
                    <v-btn x-large block color="primary" class="mr-4">Validate</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
import { Categories } from '../model/categories.js'

export default {
    name: "TestForm",
    data: () => ({
        name: "",
        valeur: 0,
        categorie : null,
        items : Object.values(Categories)
    })
};
</script>
