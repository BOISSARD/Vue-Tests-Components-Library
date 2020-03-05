<template>
    <v-row>
        <v-col cols="12" md="6" v-for="(chart, index) in charts" :key="index">
            <v-card class="elevation-6 my-5 pa-5" >
                <v-card-title>{{index}}. {{ chart.titre }}</v-card-title>
                <canvas :id="'chart-'+index"></canvas>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import Chart from "chart.js";

import Objet from "../model/objet";
import { Categories } from "../model/categories";

import chart1_data from "../data/chart1";

export default {
    name: "TestCharts",
    props: {
        objets: null
    },
    data() {
        return {
            charts: [
                { data: chart1_data, titre: "Test" },
                {
                    data: chart1_data,
                    titre: "Nombre de lune par planete et le poid de la planete"
                }
            ]
        };
    },
    mounted() {
        console.debug(this.objets)
        this.charts.forEach((chart, index) => this.createChart('chart-'+index, chart.data));
    },
    methods: {
        createChart(chartId, chartData) {
            const ctx = document.getElementById(chartId);
            const myChart = new Chart(ctx, {
                type: chartData.type,
                data: chartData.data,
                options: chartData.options
            });
        }
    }
};
</script>

<style>
</style>