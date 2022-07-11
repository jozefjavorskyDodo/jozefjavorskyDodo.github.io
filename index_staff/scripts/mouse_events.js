"use strict";

try {
    document.querySelectorAll(".headerNavBttn").forEach(hNB => {
        hNB.addEventListener("mouseenter", (e) => {
            e.target.style.cursor = "pointer";
            e.target.style.color = "rgb(0, 0, 0)";
            e.target.style.backgroundColor = "rgba(244, 244, 244, 1)";
        });
        hNB.addEventListener("mouseleave", (e) => {
            e.target.style.color = "rgba(244, 244, 244, 1)";
            e.target.style.backgroundColor = "rgb(0, 0, 0)";
        });
    });
} catch (error) { if (error) console.log(error); } finally { };
