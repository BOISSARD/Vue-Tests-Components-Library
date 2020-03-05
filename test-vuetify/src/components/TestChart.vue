<template>
    <v-card class="elevation-6 my-5 pa-5">
        <v-card-title>Nombre de lune par planet et le poid de la planete</v-card-title>
        <v-row>
            <v-col cols="12" md="6" class>
                <canvas id="planet-chart"></canvas>
            </v-col>
            <v-col cols="12" md="6" class>
                <canvas id="chart2"></canvas>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import Chart from "chart.js";

import chart1_data from "../data/chart1";

export default {
    name: "TestChart",
    data() {
        return {
            planetChartData: chart1_data
        };
    },
    mounted() {
        this.createChart("planet-chart", this.planetChartData);
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