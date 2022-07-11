"use strict";

try {
    document.querySelector("#null-coloring-bttn").addEventListener("click", () => {
        document.querySelectorAll("td").forEach(cell => {
            cell.style.borderColor = "rgba(200, 200, 200, 1)";
        });
    });
} catch (error) { if (error) console.log(error); } finally { };

try {
    document.querySelector("#subs-bttn").addEventListener("click", () => {
        let subsToRed = [".sub00", ".sub11"];
        let subsToGreen = [".sub01", ".sub20"];
        let subsToBlue = [".sub10", ".sub21"];
        for (let x in subsToRed) {
            document.querySelectorAll(subsToRed[x]).forEach(cubicle => {
                cubicle.style.borderColor = "rgba(244, 0, 0, 1)";
            });
        };
        for (let x in subsToGreen) {
            document.querySelectorAll(subsToGreen[x]).forEach(cubicle => {
                cubicle.style.borderColor = "rgba(0, 244, 0, 1)";
            });
        };
        for (let x in subsToBlue) {
            document.querySelectorAll(subsToBlue[x]).forEach(cubicle => {
                cubicle.style.borderColor = "rgba(0, 0, 244, 1)";
            });
        };
    });
} catch (error) { if (error) console.log(error); } finally { };

try {
    document.querySelector("#rows-bttn").addEventListener("click", () => {
        let rowsToRed = [".row0", ".row3"];
        let rowsToGreen = [".row1", ".row4"];
        let rowsToBlue = [".row2", ".row5"];
        for (let x in rowsToRed) {
            document.querySelectorAll(rowsToRed[x]).forEach(cubicle => {
                cubicle.style.borderColor = "rgba(244, 0, 0, 1)";
            });
        };
        for (let x in rowsToGreen) {
            document.querySelectorAll(rowsToGreen[x]).forEach(cubicle => {
                cubicle.style.borderColor = "rgba(0, 244, 0, 1)";
            });
        };
        for (let x in rowsToBlue) {
            document.querySelectorAll(rowsToBlue[x]).forEach(cubicle => {
                cubicle.style.borderColor = "rgba(0, 0, 244, 1)";
            });
        };
    });
} catch (error) { if (error) console.log(error); } finally { };

try {
    document.querySelector("#cols-bttn").addEventListener("click", () => {
        let colsToRed = [".col0", ".col3"];
        let colsToGreen = [".col1", ".col4"];
        let colsToBlue = [".col2", ".col5"];
        for (let x in colsToRed) {
            document.querySelectorAll(colsToRed[x]).forEach(cubicle => {
                cubicle.style.borderColor = "rgba(244, 0, 0, 1)";
            });
        };
        for (let x in colsToGreen) {
            document.querySelectorAll(colsToGreen[x]).forEach(cubicle => {
                cubicle.style.borderColor = "rgba(0, 244, 0, 1)";
            });
        };
        for (let x in colsToBlue) {
            document.querySelectorAll(colsToBlue[x]).forEach(cubicle => {
                cubicle.style.borderColor = "rgba(0, 0, 244, 1)";
            });
        };
    });
} catch (error) { if (error) console.log(error); } finally { };