"use strict";

try {
    let data_cells = document.querySelectorAll("td");
    data_cells.forEach(cell => {
        cell.innerText = '0';
        cell.style.border = "0.7mm solid rgba(200, 200, 200, 1)";
        cell.style.padding = "0 2mm 0 2mm";
        cell.style.borderRadius = "1mm";
        cell.style.fontFamily = "monospace";
        cell.style.fontSize = "4mm";
        cell.style.color = "rgba(70, 70, 70, 1)";
        cell.style.fontWeight = "200";
        cell.style.backgroundColor = "rgb(70, 70, 70)";
    });
} catch (error) { if (error) console.log(error); } finally { };

try {
    document.querySelector("table").style.borderSpacing = "1mm";
} catch (error) { if (error) console.log(error); } finally { };

try {
    let arr_bttns_lines = [".firstLineBttns", ".secondLineBttns"];
    for (let x in arr_bttns_lines) {
        document.querySelectorAll(arr_bttns_lines[x]).forEach(footerBttn => {
            footerBttn.addEventListener("mouseenter", (e) => {
                e.target.style.color = "rgba(200, 200, 200, 1)";
                e.target.style.backgroundColor = "rgb(0, 0, 0)";
                e.target.style.cursor = "pointer";
            });
            footerBttn.addEventListener("mouseleave", (e) => {
                e.target.style.color = "rgba(0, 0, 0, 1)";
                e.target.style.backgroundColor = "rgb(200, 200, 200)";
            });
        });
    };
} catch (error) { if (error) console.log(error); } finally { };
