"use strict";

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const historyApiFallback = require("connect-history-api-fallback");
const port = 4000;

const app = express();
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, "target")));
app.use(historyApiFallback({verbose: false}));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "target", "index.html"));
});

app.post("/api/data", (req, res) => {
    const heroes = {
        heroes: [
            {id: 11, name: 'Mr. Nice'},
            {id: 12, name: 'Narco'},
            {id: 13, name: 'Bombasto'},
            {id: 14, name: 'Celeritas'},
            {id: 15, name: 'Magneta'},
            {id: 16, name: 'RubberMan'},
            {id: 17, name: 'Dynama'},
            {id: 18, name: 'Dr IQ'},
            {id: 19, name: 'Magma'},
            {id: 20, name: 'Tornado'}
        ]
    };
    res.send(heroes);
});

app.listen(port, "localhost", (err) => {
    if (err) {
        console.log(err);
    }
    console.info("==> Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
});