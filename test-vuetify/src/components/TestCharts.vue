<template>
    <v-row>
        <v-col cols="12" md="6" v-for="(chart, index) in charts" :key="index">
            <v-card class="elevation-6 my-5 pa-5">
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
import transformObjet from '../data/transformObjets'

export default {
    name: "TestCharts",
    props: {
        objets: null
    },
    data() {
        return {
            charts: [
                {
                    titre: "Test",
                    type: "pie",
                    data: this.objetsToPieByCategorie(this.objets),
                    options: chart1_data.options
                },
                {
                    titre:
                        "Nombre de lune par planete et le poid de la planete",
                    type: "line",
                    data: chart1_data.data,
                    options: chart1_data.options
                }
            ]
        };
    },
    computed: {
        /*charts() {
      return [
        {
          titre: "Test",
          type: "line",
          data: chart1_data.data,
          options: chart1_data.options
        },
        {
          titre: "Nombre de lune par planete et le poid de la planete",
          type: "line",
          data: chart1_data.data,
          options: chart1_data.options
        }
      ];
    }*/
    },
    mounted() {
        console.debug(this.objets);
        this.charts.forEach((chart, index) =>
            this.createChart(
                "chart-" + index,
                chart.type,
                chart.data,
                chart.options
            )
        );
    },
    watch: {
        /*charts: {
            immediate: true,
            handler(newVal, oldVal) {
                console.debug(this.objets);
                this.charts.forEach((chart, index) =>
                    this.createChart(
                        "chart-" + index,
                        chart.type,
                        chart.data,
                        chart.options
                    )
                );
            }
        }*/
    },
    methods: {
        createChart(chartId, type, data, options) {
            const ctx = document.getElementById(chartId);
            const myChart = new Chart(ctx, {
                type: type,
                data: data,
                options: options
            });
        },
        ...transformObjet.methods
    }
};
</script>

<style>
</style>