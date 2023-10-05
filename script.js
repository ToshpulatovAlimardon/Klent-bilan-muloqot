"use strict";

let numberOfSeries;

function startUpp() {
    numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");
    while (
        numberOfSeries == "" ||
        numberOfSeries == null ||
        numberOfSeries == NaN
    ) {
        numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");
    }
}
startUpp();
console.log(numberOfSeries);

const seriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    private: false,
};

function rememberMySeries() {
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
}

rememberMySeries();

function detectLevelSeries(qiymat) {
    if (qiymat < 5) {
        console.log("Kam serial ko'ribsiz");
    } else if (qiymat >= 5 && qiymat < 10) {
        console.log("Siz classik tomoshabin ekansiz");
    } else if (qiymat >= 10) {
        console.log("Siz serialchi zvezda ekansiz");
    } else {
        console.log("Error");
    }
}

detectLevelSeries(seriesDB.count);

function showDB(hidn) {
    if (!hidn) {
        console.log(seriesDB);
    }
}
showDB(seriesDB.private);

function writeGenres() {
    for (let i = 0; i < 3; i++) {
        seriesDB.genres[i] = prompt(`Yaxshi ko'rgan janiringiz #${i + 1}`);
    }
}
writeGenres();
