"use strict";

try {
    var zetorT = Number(1);
    var _pseudo_matrix_ = [
        [
            [127756, 127756, 127756, 127756, 127756],
            [127756, 127756, 127756, 127756, 127756],
            [128171, 128171, 127770, 127770, 127770],
            [127756, 127756, 127756, 127756, 127756],
            [127756, 127756, 127756, 127756, 127756],
        ],
        [
            [128171, 127756, 127756, 127756, 127756],
            [127756, 128171, 127756, 127756, 127756],
            [127756, 127756, 127762, 127756, 127756],
            [127756, 127756, 127756, 127762, 127756],
            [127756, 127756, 127756, 127756, 127762]
        ],
        [
            [127756, 127756, 128171, 127756, 127756],
            [127756, 127756, 128171, 127756, 127756],
            [127756, 127756, 127763, 127756, 127756],
            [127756, 127756, 127763, 127756, 127756],
            [127756, 127756, 127763, 127756, 127756],
        ],
        [
            [127756, 127756, 127756, 127756, 128171],
            [127756, 127756, 127756, 128171, 127756],
            [127756, 127756, 127764, 127756, 127756],
            [127756, 127764, 127756, 127756, 127756],
            [127764, 127756, 127756, 127756, 127756],
        ],
        [
            [127756, 127756, 127756, 127756, 127756],
            [127756, 127756, 127756, 127756, 127756],
            [127773, 127773, 127773, 128171, 128171],
            [127756, 127756, 127756, 127756, 127756],
            [127756, 127756, 127756, 127756, 127756],
        ],
        [
            [127766, 127756, 127756, 127756, 127756],
            [127756, 127766, 127756, 127756, 127756],
            [127756, 127756, 127766, 127756, 127756],
            [127756, 127756, 127756, 128171, 127756],
            [127756, 127756, 127756, 127756, 128171],
        ],
        [
            [127756, 127756, 127767, 127756, 127756],
            [127756, 127756, 127767, 127756, 127756],
            [127756, 127756, 127767, 127756, 127756],
            [127756, 127756, 128171, 127756, 127756],
            [127756, 127756, 128171, 127756, 127756],
        ],
        [
            [127756, 127756, 127756, 127756, 127768],
            [127756, 127756, 127756, 127768, 127756],
            [127756, 127756, 127768, 127756, 127756],
            [127756, 128171, 127756, 127756, 127756],
            [128171, 127756, 127756, 127756, 127756],
        ]
    ];
} catch (error) { if (error) console.log(error); } finally { };

try {
    var render_func = () => {
        for (let y = 0; y <= 4; y++) {
            for (let x = 0; x <= 4; x++) {
                let id_val = '_' + String(y) + "y-_" + String(x) + 'x';
                let cell = document.querySelector('#' + id_val);
                cell.innerHTML = String.fromCodePoint(Number(_pseudo_matrix_[zetorT][y][x]));
            };
        };
        zetorT += 1;
        if (zetorT === 8) {
            zetorT = 0;
        };
    };
} catch (error) { if (error) console.log(error); } finally { };

try {
    var automaton = '';
} catch (error) { if (error) console.log(error); } finally { };

try {
    document.querySelector("#rotate-bttn").addEventListener("click", () => {
        {
            render_func();
        };
    });
} catch (error) { if (error) console.log(error); } finally { };

try {
    document.querySelector("#automate-bttn").addEventListener("click", (e) => {
        document.querySelector("#rotate-bttn").style.visibility = "hidden";
        e.target.style.visibility = "hidden";
        document.querySelector("#stop-bttn").style.visibility = "visible";
        {
            automaton = setInterval(render_func, 1000);
            automaton;
        };
    });
} catch (error) { if (error) console.log(error); } finally { };

try {
    document.querySelector("#stop-bttn").addEventListener("click", (e) => {
        document.querySelector("#rotate-bttn").style.visibility = "visible";
        document.querySelector("#automate-bttn").style.visibility = "visible";
        e.target.style.visibility = "hidden";
        {
            clearInterval(automaton);
        };
    });
} catch (error) { if (error) console.log(error); } finally { };
