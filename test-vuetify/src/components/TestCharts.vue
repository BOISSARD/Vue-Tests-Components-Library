<template>
    <v-row>
        <v-col cols="12" sm="6" v-for="(chart, index) in charts" :key="index">
            <v-card class="elevation-6 mt-3 pa-5">
                <v-card-title>{{index}}. {{ chart.titre }}</v-card-title>
                <canvas :id="'chart-'+index" :height="chartHauteur"></canvas>
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
            chartsCanvas: []
        };
    },
    computed: {
        chartHauteur(){
            //console.log(window.innerWidth)
            return window.innerWidth < 850 ? "300px" : null
        },
        charts() {
            return [
                {
                    titre: "Répartition catégorie",
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
                    titre: "Test 2",
                    type: "bar",
                    data: this.objetsToBarByValeur(this.objets),
                    options: {
                        responsive: true,
                        legend: {
                            display: false,
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
            console.log()
            if(this.chartsCanvas[chartId] !== undefined){
                //this.chartsCanvas[chartId].destroy()
                this.chartsCanvas[chartId].data = data
                this.chartsCanvas[chartId].update()
            } else this.chartsCanvas[chartId] = new Chart(ctx, {
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