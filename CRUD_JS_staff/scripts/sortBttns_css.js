"use strict";

try {
    document.querySelectorAll(".sortBttn").forEach(__sB => {
        __sB.addEventListener("mouseenter", (__e_ME___) => {
            __e_ME___.target.style.cursor = "pointer";
            __e_ME___.target.style.backgroundColor = "rgb(122, 244, 244)";
            __e_ME___.target.style.color = "rgba(0, 0, 0, 1)";
        });
        __sB.addEventListener("mouseleave", (__e_ML___) => {
            __e_ML___.target.style.backgroundColor = "rgb(0, 0, 0)";
            __e_ML___.target.style.color = "rgba(122, 244, 244, 1)";
        });
    });
} catch (error) {
    if (error) console.log(error);
} finally { };