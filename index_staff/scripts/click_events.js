"use strict";

try {
    var content_window = document.querySelector("#main-iframe");
} catch (error) { if (error) console.log(error); } finally { };

try {
    let sudoku_bttn = document.querySelector("#sudoku-bttn");
    sudoku_bttn.addEventListener("click", () => {
        content_window.setAttribute("src", "../../sudoku_staff/sudoku.html");
    });
} catch (error) { if (error) console.log(error); } finally { };

try {
    let rotator_bttn = document.querySelector("#rotator-bttn");
    rotator_bttn.addEventListener("click", () => {
        content_window.setAttribute("src", "../../rotator_staff/rotator.html");
    });
} catch (error) { if (error) console.log(error); } finally { };

try {
    let crud_js_bttn = document.querySelector("#crud-js-bttn");
    crud_js_bttn.addEventListener("click", () => {
        content_window.setAttribute("src", "../../CRUD_JS_staff/crud_js.html");
    });
} catch (error) { if (error) console.log(error); } finally { };

try {
    document.querySelector("#validations-bttn").onclick = () => {
        content_window.setAttribute("src", "../../validations_staff/validation.html");
    };
} catch (error) {
    if (error) console.log(error);
} finally { };