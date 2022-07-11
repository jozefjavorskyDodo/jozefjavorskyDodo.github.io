"use strict";

try {
    var nav = document.querySelector("#header-nav");
    var iframe = document.querySelector("#main-iframe");
    window.onload = () => {
        nav.style.width = String((screen.width / 10) * 9) + "px";
        iframe.style.width = String((screen.width / 10) * 9) + "px";
        iframe.style.height = String((screen.height / 10) * 6.6) + "px";
    };
    window.addEventListener("resize", () => {
        nav.style.width = String((screen.width / 10) * 9) + "px";
        iframe.style.width = String((screen.width / 10) * 9) + "px";
        iframe.style.height = String((screen.height / 10) * 6.6) + "px";
    });
} catch (error) { if (error) console.log(error); } finally { };
