
"use strict";

try {
    document.querySelector("#filter-search-bttn").addEventListener("mouseenter", (ev_ME) => {
        ev_ME.target.style.cursor = "pointer";
        ev_ME.target.style.backgroundColor = "rgb(244, 244, 122)";
        ev_ME.target.style.color = "rgba(0, 0, 0, 1)";
    });
    document.querySelector("#filter-search-bttn").addEventListener("mouseleave", (ev_ML) => {
        ev_ML.target.style.backgroundColor = "rgb(0, 0, 0)";
        ev_ML.target.style.color = "rgba(244, 244, 122, 1)";
    });
} catch (error) {
    if (error) console.log(error);
} finally { };