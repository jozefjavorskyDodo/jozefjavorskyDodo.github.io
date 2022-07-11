"use strict";

try {
    document.querySelectorAll("td").forEach(tableData_cell => {
        tableData_cell.innerText = String.fromCodePoint(127770);
        tableData_cell.style.fontSize = "5mm";
        tableData_cell.style.border = "0.5mm solid rgba(100, 100, 100, 1)";
        tableData_cell.style.borderRadius = "3mm";
    });
} catch (error) { if (error) console.log(error); } finally { };

try {
    let bttns = document.querySelectorAll("button");
    bttns.forEach(b => {
        b.addEventListener("mouseenter", (e) => {
            e.target.style.cursor = "pointer";
            e.target.style.color = "rgba(200, 200, 200, 1)";
            e.target.style.backgroundColor = "rgb(20, 20, 20)";
        });
        b.addEventListener("mouseleave", (e) => {
            e.target.style.color = "rgba(20, 20, 20, 1)";
            e.target.style.backgroundColor = "rgb(200, 200, 200)";
        });
    });
} catch (error) { if (error) console.log(error); } finally { };
