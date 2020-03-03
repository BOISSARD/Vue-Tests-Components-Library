<template>
    <v-form v-model="valid">
        <v-container>
            <v-row>
                <v-col cols="12" md="3">
                    <v-text-field
                        v-model="firstname"
                        :rules="nameRules"
                        :counter="10"
                        label="First name"
                        required
                        outlined
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                    <v-text-field
                        v-model="lastname"
                        :rules="nameRules"
                        :counter="10"
                        label="Last name"
                        required
                        outlined
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                    <v-select
                        v-model="select"
                        :items="items"
                        :rules="[v => !!v || 'Item is required']"
                        label="Item"
                        required
                        outlined
                    ></v-select>
                </v-col>

                <v-col cols="12" md="3">
                    <v-btn x-large block color="primary" class="mr-4" @click="validate">Validate</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
/* eslint-disable */
import Categories from '../model/categories'

export default {
    name: "TestForm",
    data: () => ({
        //items: ["Item 1", "Item 2", "Item 3", "Item 4"]
        items : Object.values(Categories)
    })
};
</script>
