import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        labelsShapes: [
            { url: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg", title: "Rectangle" },
            { url: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg", title: "Square" },
            { url: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg", title: "Oval" },
            { url: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg", title: "Circle" },
        ],
        dimensions: [
            "1.5 X 3.0 (1-1/2 X 3) - Rounded Corners - Corner Radius 0.016",
            "1.5 X 3.5 (1-1/2 X 3-1/2) - Rounded Corners - Corner Radius 0.063",
            "1.75 X 3.5 (1-3/4 X 3-1/2) - Rounded Corners - Corner Radius 0.125",
            "2.0 X 4.0 (2 X 4) - Rounded Corners - Corner Radius 0.125",
            "2.0 X 5.0 (2 X 5) - Rounded Corners - Corner Radius 0.062",
            "1.5 X 3.0 (1-1/2 X 3) - Rounded Corners - Corner Radius 0.0145",
            "1.5 X 3.5 (1-1/2 X 3-1/2) - Rounded Corners - Corner Radius 0.06345",
            "1.75 X 3.5 (1-3/4 X 3-1/2) - Rounded Corners - Corner Radius 0.12575",
            "2.0 X 4.0 (2 X 4) - Rounded Corners - Corner Radius 0.12515",
            "2.0 X 5.0 (2 X 5) - Rounded Corners - Corner Radius 0.062753",
        ],
        materials: [
            { url: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg", title: "CAST GLOSS" },
            { url: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg", title: "CHROME BOPP" },
            { url: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg", title: "CHROME BOPP (LIP BALM)" },
            { url: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg", title: "GOLD BOPP" },
            { url: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg", title: "WHITE BOPP" },
            { url: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg", title: "VELLUM- RECYCLED" },
            { url: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg", title: "SQUEEZABLE" },
            { url: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg", title: "WHITE VINYL" },
        ],
        laminates: [
            { title: "HIGH GLOSS", description: "Our most popular, and least expensive laminate. Provides protection and shiny finish." },
            { title: "MATTE", description: "Provides a dull, non-glossy finish. Achieves a more 'natural' look." },
            { title: "THERMAL TRANSFER", description: "Gloss laminate that works with most thermal transfer printers." },
            { title: "UV OUTDOOR GLOSS", description: "Best for labels that will be used outdoors. High gloss finish, with UV resistance." },
        ]
    },
    mustation: {},
    actions: {},
    // getters: {
    //     labelsShapes(state) {
    //         return state.labelsShapes;
    //     },
    //     dimensions(state) {
    //         return state.dimensions;
    //     },
    //     materials(state) {
    //         return state.materials;
    //     },
    //     laminates(state) {
    //         return state.laminates;
    //     }
    // }
})