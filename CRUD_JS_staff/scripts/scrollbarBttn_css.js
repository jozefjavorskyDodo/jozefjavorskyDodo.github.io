"use strict";

try {
    document.querySelector(".scrollbarBttn").addEventListener("mouseenter", (e_ME_) => {
        e_ME_.target.style.cursor = "pointer";
        e_ME_.target.style.backgroundColor = "rgb(222, 122, 22)";
        e_ME_.target.style.color = "rgba(0, 0, 0, 1)";
    });
    document.querySelector(".scrollbarBttn").addEventListener("mouseleave", (e_ML_) => {
        e_ML_.target.style.backgroundColor = "rgb(0, 0, 0)";
        e_ML_.target.style.color = "rgba(222, 122, 22, 1)";
    });
} catch (error) {
    if (error) console.log(error);
} finally { };