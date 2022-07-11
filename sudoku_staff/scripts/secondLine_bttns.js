"use strict";

try {
    document.querySelector("#start-nums-bttn").addEventListener("click", () => {
        document.querySelector("#start-nums-bttn").style.visibility = "hidden";
        document.querySelector("#solve-bttn").style.visibility = "visible";
        {
            for (let y = 0; y <= 5; y++) {
                for (let x = 0; x <= 5; x++) {
                    let id_val = '_' + String(y) + "y-_" + String(x) + 'x';
                    document.getElementById(id_val).innerText = '0';
                    document.getElementById(id_val).style.color = "rgba(70, 70, 70, 1)";
                    document.getElementById(id_val).style.backgroundColor = "rgb(70, 70, 70)";
                };
            };
        };
        {
            let firstPattern = [];
            let secondPattern = [];
            var arr_of_pseudoRandomIndexes = [];
            var arr_of_pseudo_random_start_vals = [];
            let whichSideOfTree_pseudoRandomVal = String(Math.floor(Math.random() * 2));
            while (firstPattern.length < 3) {
                let pseudoRandomVal_first = String(Math.floor(Math.random() * 3));
                if (firstPattern.includes(pseudoRandomVal_first) === Boolean(false)) {
                    firstPattern.push(pseudoRandomVal_first);
                    continue;
                } else {
                    continue;
                };
            };
            while (secondPattern.length < 3) {
                let pseudoRandomVal_second = String(Math.floor(Math.random() * 3) + 3);
                if (secondPattern.includes(pseudoRandomVal_second) === Boolean(false)) {
                    secondPattern.push(pseudoRandomVal_second);
                    continue;
                } else {
                    continue;
                };
            };
            if (whichSideOfTree_pseudoRandomVal === '0') {
                while (arr_of_pseudoRandomIndexes.length < 6) {
                    arr_of_pseudoRandomIndexes.push(firstPattern[firstPattern.length - 1]);
                    firstPattern.pop();
                    arr_of_pseudoRandomIndexes.push(secondPattern[secondPattern.length - 1]);
                    secondPattern.pop();
                };
            } else {
                while (arr_of_pseudoRandomIndexes.length < 6) {
                    arr_of_pseudoRandomIndexes.push(secondPattern[secondPattern.length - 1]);
                    secondPattern.pop();
                    arr_of_pseudoRandomIndexes.push(firstPattern[firstPattern.length - 1]);
                    firstPattern.pop();
                };
            };
            while (arr_of_pseudo_random_start_vals.length < 6) {
                let one_pseudo_random_start_num = String(Math.floor(Math.random() * 6) + 1);
                if (arr_of_pseudo_random_start_vals.includes(one_pseudo_random_start_num) === Boolean(true)) {
                    continue;
                } else {
                    arr_of_pseudo_random_start_vals.push(one_pseudo_random_start_num);
                };
            };
        };
        {
            for (let y = 0; y <= 5; y++) {
                let id_val = '_' + String(y) + "y-_" + String(arr_of_pseudoRandomIndexes[y]) + 'x';
                document.getElementById(id_val).innerText = arr_of_pseudo_random_start_vals[y];
                document.getElementById(id_val).style.color = "rgba(244, 244, 244, 1)";
                document.getElementById(id_val).style.backgroundColor = "rgb(0, 0, 0)";
            };
        };
    });
} catch (error) { if (error) console.log(error); } finally { };

try {
    document.querySelector("#solve-bttn").addEventListener("click", () => {
        document.querySelector("#solve-bttn").style.visibility = "hidden";
        document.querySelector("#start-nums-bttn").style.visibility = "visible";
        {
            var node_of_cells = document.querySelectorAll("td");
        };
        {
            node_of_cells.forEach(c => { if (c.innerText !== '0') c.removeAttribute("id"); });
        };
        {
            var numberToWrite = Number(1);
            var newIndex = Number(0);
            for (let x = 0; x <= node_of_cells.length - 1; x++) {
                if (String(node_of_cells[x].getAttribute("id")) === "null") {
                    continue;
                } else {
                    let classes_ = node_of_cells[x].getAttribute("class");
                    var condition_check = Boolean(true);
                    node_of_cells[x].innerText = String(numberToWrite);
                    node_of_cells[x].style.color = "rgba(244, 244, 244, 1)";
                    node_of_cells[x].removeAttribute("class");
                    document.querySelectorAll('.' + classes_.split(' ')[0]).forEach(cubicle => {
                        if (cubicle.innerHTML === node_of_cells[x].innerText) condition_check = Boolean(false);
                    });
                    document.querySelectorAll('.' + classes_.split(' ')[1]).forEach(cubicle => {
                        if (cubicle.innerHTML === node_of_cells[x].innerText) condition_check = Boolean(false);
                    });
                    document.querySelectorAll('.' + classes_.split(' ')[2]).forEach(cubicle => {
                        if (cubicle.innerHTML === node_of_cells[x].innerText) condition_check = Boolean(false);
                    });
                    node_of_cells[x].setAttribute("class", classes_);
                    if (condition_check === Boolean(false)) {
                        numberToWrite += 1;
                        if (numberToWrite === 7) {
                            node_of_cells[x].innerText = '0';
                            node_of_cells[x].style.color = "rgba(70, 70, 70, 1)";
                            for (let x2 = x - 1; x2 >= 0; x2--) {
                                if (String(node_of_cells[x2].getAttribute("id")) === "null") continue;
                                if (node_of_cells[x2].innerText === '6') {
                                    node_of_cells[x2].innerText = '0';
                                    node_of_cells[x2].style.color = "rgba(70, 70, 70)";
                                    continue;
                                } else {
                                    numberToWrite = Number(node_of_cells[x2].innerText) + 1;
                                    newIndex = x2 - 1;
                                    x = newIndex;
                                    break;
                                };
                            };
                            continue;
                        };
                        x -= 1;
                        continue;
                    } else {
                        numberToWrite = Number(1);
                        continue;
                    };
                };
            };
        };
        {
            node_of_cells.forEach(c => { if (String(c.getAttribute("id")) !== "null") c.removeAttribute("id"); });
        };
        {
            var index_counter = Number(0);
            for (let y = 0; y <= 5; y++) {
                for (let x = 0; x <= 5; x++) {
                    let id_val = '_' + String(y) + "y-_" + String(x) + 'x';
                    node_of_cells[index_counter].setAttribute("id", id_val);
                    index_counter += Number(1);
                };
            };
        };
    });
} catch (error) { if (error) console.log(error); } finally { };