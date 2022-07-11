"use strict";

try {
    let data_bttns = document.querySelectorAll(".dataBttn");
    data_bttns.forEach(dB => {
        dB.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "rgb(244, 122, 122)";
            e.target.style.color = "rgba(0, 0, 0, 1)";
            e.target.style.cursor = "pointer";
        });
        dB.addEventListener("mouseleave", (e) => {
            e.target.style.backgroundColor = "rgb(0, 0, 0)";
            e.target.style.color = "rgba(244, 122, 122, 1)";
        });
    });
} catch (error) { if (error) console.log(error); } finally { };