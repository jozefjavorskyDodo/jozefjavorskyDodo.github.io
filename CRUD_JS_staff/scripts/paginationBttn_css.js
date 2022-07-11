"use strict";

try {
    document.querySelectorAll(".paginationBttn").forEach(pB => {
        pB.addEventListener("mouseenter", (e_ME) => {
            e_ME.target.style.cursor = "pointer";
            e_ME.target.style.backgroundColor = "rgb(244, 122, 244)";
            e_ME.target.style.color = "rgba(0, 0, 0, 1)";
        });
        pB.addEventListener("mouseleave", (e_ML) => {
            e_ML.target.style.backgroundColor = "rgb(0, 0, 0)";
            e_ML.target.style.color = "rgba(244, 122, 244, 1)";
        });
    });
} catch (error) {
    if (error) console.log(error);
} finally { };