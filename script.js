"use strict";

const seriesDB = {
    count: 0,
    series: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        seriesDB.count = +prompt("Nechta serial ko'rdingiz?", "");
        while (
            seriesDB.count == "" ||
            seriesDB.count == null ||
            seriesDB.count == NaN
        ) {
            seriesDB.count = +prompt("Nechta serial ko'rdingiz?", "");
        }
    },
    rememberMySeries: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Oxirgi ko'rgan serialingiz?", ""),
                b = prompt("Nechi baxo berasiz?", "");

            if (a != null && b != null && a != "" && b != "") {
                seriesDB.series[a] = b;
                console.log("done");
            } else {
                console.log("error");
                i--;
            }
        }
    },
    detectLevelSeries: function () {
        if (seriesDB.count < 5) {
            console.log("Kam serial ko'ribsiz");
        } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
            console.log("Siz classik tomoshabin ekansiz");
        } else if (seriesDB.count >= 10) {
            console.log("Siz serialchi zvezda ekansiz");
        } else {
            console.log("Error");
        }
    },
    showDB: function () {
        if (!seriesDB.private) {
            console.log(seriesDB);
        }
    },
    visibleDB: function () {
        if (seriesDB.private) {
            seriesDB.private = false;
        } else {
            seriesDB.private = true;
        }
    },
    writeGenres: function () {
        for (let i = 0; i < 3; i++) {
            seriesDB.genres[i] = prompt(`Yaxshi ko'rgan janiringiz #${i + 1}`);
        }
    },
};
