<template>
    <v-row>
        <v-col cols="12" md="6" v-for="(chart, index) in charts" :key="index">
            <v-card class="elevation-6 mt-3 pa-5">
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
import transformObjet from "../data/transformObjets";

export default {
    name: "TestCharts",
    props: {
        objets: null
    },
    data() {
        return {
            
        };
    },
    computed: {
        charts() {
            return [
                {
                    titre: "Test",
                    type: "pie",
                    data: this.objetsToPieByCategorie(this.objets),
                    options: {
                        responsive: true,
                        legend: {
                            position: "left",
                            fullWidth: true
                        }
                    }
                },
                {
                    titre:
                        "Nombre de lune par planete et le poid de la planete",
                    type: "line",
                    data: chart1_data.data,
                    options: chart1_data.options
                }
            ];
        }
    },
    mounted() {
        this.createCharts();
    },
    watch: {
        objets: {
            handler(nouveaux, anciens) {
                this.createCharts();
            }
        }
    },
    methods: {
        ...transformObjet.methods,
        createCharts() {
            this.charts.forEach((chart, index) =>
                this.createChart(
                    "chart-" + index,
                    chart.type,
                    chart.data,
                    chart.options
                )
            );
        },
        createChart(chartId, type, data, options) {
            const ctx = document.getElementById(chartId);
            const myChart = new Chart(ctx, {
                type: type,
                data: data,
                options: options
            });
        }
    }
};
</script>

<style>
</style>