<template>
    <v-app class="font-regular">
        <v-app-bar app color="primary" dark>
            <div class="d-flex align-center"></div>
            <v-spacer></v-spacer>
        </v-app-bar>
        <v-content>
            <TestForm />
        </v-content>
    </v-app>
</template>

<script>
import TestForm from "./components/TestForm";

export default {
    name: "App",
    components: {
        TestForm
    },
    data: () => ({
        //
    })
};
</script>
