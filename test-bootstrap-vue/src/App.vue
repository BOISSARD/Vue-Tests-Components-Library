<template>
    <div id="app">
		<TestForm></TestForm>
		<TestDataTable></TestDataTable>
	</div>
</template>

<script>
import TestDataTable from "./components/TestDataTable";
import TestForm from "./components/TestForm";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
    name: "App",
    components: {
		TestDataTable,
		TestForm
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
