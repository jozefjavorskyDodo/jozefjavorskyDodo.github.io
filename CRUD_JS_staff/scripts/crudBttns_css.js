"use strict";

try {
    let crud_bttns = document.querySelectorAll(".crudBttn");
    crud_bttns.forEach(cB => {
        cB.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "rgb(122, 244, 122)";
            e.target.style.color = "rgba(0, 0, 0, 1)";
            e.target.style.cursor = "pointer";
        });
        cB.addEventListener("mouseleave", (e) => {
            e.target.style.backgroundColor = "rgb(0, 0, 0)";
            e.target.style.color = "rgba(122, 244, 122, 1)";
        });
    });
} catch (error) { if (error) console.log(error); } finally { };
