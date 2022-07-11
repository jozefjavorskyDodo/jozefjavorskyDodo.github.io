"use strict";

import { employees_0 } from "../scripts/data.js";
import { employees_2 } from "../scripts/data.js";
import { employees_15 } from "../scripts/data.js";
import { departments_positions } from "../scripts/data.js";

const eees_0 = Object.freeze(employees_0);
const eees_2 = Object.freeze(employees_2);
const eees_15 = Object.freeze(employees_15);
const dprmnts_pstns = Object.freeze(departments_positions);

try {
    var _pseudo_global_memory_ = [];
    var _pseudo_global_pointer_ = Number(0);
} catch (error) {
    if (error) console.log(error);
} finally { };

try {
    var emps_state = [];
} catch (error) { if (error) console.log(error); } finally { };

try {
    var remove_previous_rows = () => {
        let node_rows = document.querySelectorAll("tr");
        for (let x = 1; x <= node_rows.length - 1; x++) {
            node_rows[x].remove();
        };
    };
} catch (error) { if (error) console.log(error); } finally { };

try {
    var add_next_rows = () => {
        for (let y in emps_state) {
            var one_row = document.createElement("tr");
            var one_emp = [
                String(emps_state[y].firstName),
                String(emps_state[y].lastName),
                String(emps_state[y].department),
                String(emps_state[y].position),
                String(emps_state[y].startDate),
            ];
            for (let i in one_emp) {
                let one_table_data_cell = document.createElement("td");
                one_table_data_cell.innerText = one_emp[i];
                one_row.appendChild(one_table_data_cell);
            };
            document.querySelector("#append-to-sub-part").appendChild(one_row);
        };
    };
} catch (error) { if (error) console.log(error); } finally { };

try {
    var myHeadIsBugsOnTopOfBugs_xD = () => {
        try {
            remove_previous_rows();
        } catch (error) { } finally { };
        try {
            add_next_rows();
        } catch (error) { } finally { };
        try {
            while (_pseudo_global_memory_.length > 0) _pseudo_global_memory_.pop();
        } catch (error) { } finally { };
        try {
            _pseudo_global_pointer_ = Number(0);
        } catch (error) { } finally { };
    };
} catch (error) { } finally { };

try {
    document.querySelector("#empty-data-bttn").addEventListener("click", () => {
        {
            myHeadIsBugsOnTopOfBugs_xD();
        };
        {
            emps_state = [...eees_0];
        };
        {
            remove_previous_rows();
        };
        {
            add_next_rows();
        };
    });
} catch (error) { if (error) console.log(error); } finally { };

try {
    document.querySelector("#two-data-items-bttn").addEventListener("click", () => {
        {
            myHeadIsBugsOnTopOfBugs_xD();
        };
        {
            emps_state = [...eees_2];
        };
        {
            remove_previous_rows();
        };
        {
            add_next_rows();
        };
    });
} catch (error) { if (error) console.log(error); } finally { };

try {
    document.querySelector("#fifteen-data-items-bttn").addEventListener("click", () => {
        {
            myHeadIsBugsOnTopOfBugs_xD();
        };
        {
            emps_state = [...eees_15];
        };
        {
            remove_previous_rows();
        };
        {
            add_next_rows();
        };
    });
} catch (error) { if (error) console.log(error); } finally { };

try {
    document.querySelector("#add-bttn").addEventListener("click", () => {
        {
            myHeadIsBugsOnTopOfBugs_xD();
        };
        if (emps_state.length === 30) {
            alert(String.fromCodePoint(10060) + "\u00a0" + "Operation of this button not possible,\ndue to max amount of Employees Table List,\nalready acquired.");
        } else {
            {
                document.querySelector("#change-content-area").style.display = "none";
                document.querySelector("#data-nav").style.visibility = "hidden";
                document.querySelector("#crud-nav").style.visibility = "hidden";
                document.querySelector("#sort-nav").style.visibility = "hidden";
                document.querySelector("#filter-search-nav").style.visibility = "hidden";
                document.querySelector("#pagination-nav").style.visibility = "hidden";
                document.querySelector("#scrollbar-nav").style.visibility = "hidden";
            };
            {
                var first_name_input = document.createElement("input");
                first_name_input.placeholder = "FIRST NAME";
                first_name_input.style.marginTop = "2mm";
                first_name_input.style.width = "3.3cm";
                first_name_input.style.marginLeft = "5mm";
                first_name_input.setAttribute("maxlength", 8);
                first_name_input.setAttribute("type", "text");
                first_name_input.setAttribute("id", "first-name-input");
                first_name_input.setAttribute("class", "toRemove");
                document.querySelector("#crud-operations").appendChild(first_name_input);
            };
            {
                first_name_input.addEventListener("input", (e_fn) => {
                    var fn_chars = [...e_fn.target.value].map(char => Number(char.charCodeAt()));
                    for (var fn_indx in fn_chars) {
                        if (
                            (fn_chars[fn_indx] < 65) ||
                            (
                                (fn_chars[fn_indx] > 90) && (fn_chars[fn_indx] < 97)
                            ) ||
                            (fn_chars[fn_indx] > 122)
                        ) {
                            alert(String.fromCodePoint(10060) + "\u00a0" + "Not valid input.");
                            first_name_input.value = '';
                        };
                    };
                });
            };
            {
                var last_name_input = document.createElement("input");
                last_name_input.placeholder = "LAST NAME";
                last_name_input.style.marginTop = "2mm";
                last_name_input.style.width = "3.3cm";
                last_name_input.style.marginLeft = "5mm";
                last_name_input.setAttribute("maxlength", 8);
                last_name_input.setAttribute("type", "text");
                last_name_input.setAttribute("id", "last-name-input");
                last_name_input.setAttribute("class", "toRemove");
                document.querySelector("#crud-operations").appendChild(last_name_input);
            };
            {
                last_name_input.addEventListener("input", (e_ln) => {
                    var ln_chars = [...e_ln.target.value].map(char => Number(char.charCodeAt()));
                    for (var ln_indx in ln_chars) {
                        if (
                            (ln_chars[ln_indx] < 65) ||
                            (
                                (ln_chars[ln_indx] > 90) && (ln_chars[ln_indx] < 97)
                            ) ||
                            (ln_chars[ln_indx] > 122)
                        ) {
                            alert(String.fromCodePoint(10060) + "\u00a0" + "Not valid input.");
                            last_name_input.value = '';
                        };
                    };
                });
            };
            {
                var first_last_name_hint = document.createElement('p');
                first_last_name_hint.innerText = "...HINT : [A-Z], [a-z], max length = 8 ";
                first_last_name_hint.style.fontFamily = "monospace";
                first_last_name_hint.style.fontSize = "3.4mm";
                first_last_name_hint.style.color = "rgba(222, 222, 222, 1)";
                first_last_name_hint.style.marginLeft = "5mm";
                first_last_name_hint.style.display = "inline-block";
                first_last_name_hint.setAttribute("class", "toRemove");
                document.querySelector("#crud-operations").appendChild(first_last_name_hint);
            };
            {
                var first_line_break = document.createElement("br");
                first_line_break.setAttribute("class", "toRemove");
                document.querySelector("#crud-operations").appendChild(first_line_break);
            };
            {
                var gender_input = document.createElement("select");
                gender_input.style.marginTop = "2mm";
                gender_input.style.marginLeft = "5mm";
                gender_input.setAttribute("id", "gender-input");
                gender_input.setAttribute("class", "toRemove");
                document.querySelector("#crud-operations").appendChild(gender_input);
            };
            {
                var gender_input_pseudo_placeholder = document.createElement("option");
                gender_input_pseudo_placeholder.innerText = "GENDER";
                gender_input_pseudo_placeholder.value = '';
                gender_input_pseudo_placeholder.setAttribute("selected", "selected");
                gender_input_pseudo_placeholder.setAttribute("hidden", "hidden");
                gender_input_pseudo_placeholder.setAttribute("disabled", "disabled");
                gender_input.appendChild(gender_input_pseudo_placeholder);
            };
            {
                var gender_input_first_option = document.createElement("option");
                gender_input_first_option.innerText = "NOT KNOWN";
                gender_input_first_option.value = "nk";
                gender_input.appendChild(gender_input_first_option);
            };
            {
                var gender_input_second_option = document.createElement("option");
                gender_input_second_option.innerText = "FEMALE";
                gender_input_second_option.value = 'f';
                gender_input.appendChild(gender_input_second_option);
            };
            {
                var gender_input_third_option = document.createElement("option");
                gender_input_third_option.innerText = "MALE";
                gender_input_third_option.value = 'm';
                gender_input.appendChild(gender_input_third_option);
            };
            {
                var gender_input_fourth_option = document.createElement("option");
                gender_input_fourth_option.innerText = "NOT APPLICABLE";
                gender_input_fourth_option.value = "na";
                gender_input.appendChild(gender_input_fourth_option);
            };
            {
                var second_line_break = document.createElement("br");
                second_line_break.setAttribute("class", "toRemove");
                document.querySelector("#crud-operations").appendChild(second_line_break);
            };
            {
                var department_input = document.createElement("select");
                department_input.style.marginTop = "2mm";
                department_input.style.marginLeft = "5mm";
                department_input.setAttribute("class", "toRemove");
                department_input.setAttribute("id", "department-input");
                document.querySelector("#crud-operations").appendChild(department_input);
            };
            {
                var department_input_pseudo_placeholder = document.createElement("option");
                department_input_pseudo_placeholder.innerText = "DEPARTMENT";
                department_input_pseudo_placeholder.value = '';
                department_input_pseudo_placeholder.setAttribute("hidden", "hidden");
                department_input_pseudo_placeholder.setAttribute("selected", "selected");
                department_input_pseudo_placeholder.setAttribute("disabled", "disabled");
                department_input.appendChild(department_input_pseudo_placeholder);
            };
            {
                [...Object.keys(dprmnts_pstns)].map(oneOfDepartments => {
                    var new_dep_opt = document.createElement("option");
                    new_dep_opt.innerText = String(oneOfDepartments);
                    new_dep_opt.value = String(oneOfDepartments);
                    department_input.appendChild(new_dep_opt);
                });
            };
            {
                var position_input = document.createElement("select");
                position_input.style.marginLeft = "5mm";
                position_input.style.marginTop = "2mm";
                position_input.setAttribute("hidden", "hidden");
                position_input.setAttribute("id", "position-input");
                position_input.setAttribute("class", "toRemove");
                document.querySelector("#crud-operations").appendChild(position_input);
            };
            {
                var position_input_pseudo_placeholder = document.createElement("option");
                position_input_pseudo_placeholder.innerText = "POSITION";
                position_input_pseudo_placeholder.value = '';
                position_input_pseudo_placeholder.setAttribute("hidden", "hidden");
                position_input_pseudo_placeholder.setAttribute("selected", "selected");
                position_input_pseudo_placeholder.setAttribute("disabled", "disabled");
                position_input.appendChild(position_input_pseudo_placeholder);
            };
            {
                department_input.addEventListener("input", (e_d_i) => {
                    if (e_d_i.target.value !== '') {
                        document.querySelector("#position-input").removeAttribute("hidden");
                        while (document.querySelector("#position-input").length !== 1) document.querySelector("#position-input")[position_input.length - 1].remove();
                        document.querySelector("#position-input")[0].selected = Boolean(true);
                        [...dprmnts_pstns[String(e_d_i.target.value)]].map(oneOfPositions => {
                            var new_pos_opt = document.createElement("option");
                            new_pos_opt.innerText = String(oneOfPositions);
                            new_pos_opt.value = String(oneOfPositions);
                            position_input.appendChild(new_pos_opt);
                        });
                    };
                });
            };
            {
                var email_output = document.createElement('p');
                var first_reader = '';
                var second_reader = '';
                email_output.style.fontSize = "3.3mm";
                email_output.style.color = "rgba(222, 222, 222, 1)";
                email_output.style.marginBottom = '0';
                email_output.style.fontWeight = "900";
                email_output.style.fontFamily = "cursive";
                email_output.style.marginLeft = "5mm";
                email_output.innerText = "---> eMail ------>";
                email_output.setAttribute("id", "email-output");
                email_output.setAttribute("class", "toRemove");
                document.querySelector("#crud-operations").appendChild(email_output);
                {
                    document.querySelector("#first-name-input").addEventListener("input", (e_fi_re) => {
                        if (e_fi_re.target.value === '') {
                            first_reader = '';
                        } else {
                            first_reader = String(e_fi_re.target.value).toLowerCase();
                        };
                        if ((first_reader !== '') && (second_reader !== '')) {
                            email_output.innerText = `---> eMail ------> ${first_reader}.${second_reader}@ETL.com`;
                        } else {
                            email_output.innerText = "---> eMail ------>";
                        };
                    });
                };
                {
                    document.querySelector("#last-name-input").addEventListener("input", (e_se_re) => {
                        if (e_se_re.target.value === '') {
                            second_reader = '';
                        } else {
                            second_reader = String(e_se_re.target.value).toLowerCase();
                        };
                        if ((first_reader !== '') && (second_reader !== '')) {
                            email_output.innerText = `---> eMail ------> ${first_reader}.${second_reader}@ETL.com`;
                        } else {
                            email_output.innerText = "---> eMail ------>";
                        };
                    })
                };
                {
                    var generate_emp_ID_output = document.createElement("button");
                    generate_emp_ID_output.style.marginLeft = "5mm";
                    generate_emp_ID_output.style.border = '0';
                    generate_emp_ID_output.style.marginTop = "2mm";
                    generate_emp_ID_output.style.marginBottom = '0';
                    generate_emp_ID_output.style.borderRadius = "2mm";
                    generate_emp_ID_output.innerText = "Generate Employee ID ---->";
                    generate_emp_ID_output.setAttribute("class", "toRemove");
                    document.querySelector("#crud-operations").appendChild(generate_emp_ID_output);
                };
                {
                    var emp_ID_output = document.createElement('p');
                    emp_ID_output.style.marginLeft = "5mm";
                    emp_ID_output.innerText = '';
                    emp_ID_output.value = '';
                    emp_ID_output.style.fontSize = "3.5mm";
                    emp_ID_output.style.fontFamily = "cursive";
                    emp_ID_output.style.color = "rgba(222, 222, 222, 1)";
                    emp_ID_output.style.display = "inline-block";
                    emp_ID_output.style.marginTop = "2mm";
                    emp_ID_output.style.marginBottom = '0';
                    emp_ID_output.setAttribute("class", "toRemove");
                    emp_ID_output.setAttribute("id", "emp-id-output");
                    document.querySelector("#crud-operations").appendChild(emp_ID_output);
                };
                {
                    generate_emp_ID_output.onclick = () => {
                        if (emps_state.length === 0) {
                            var new_ID = '';
                            while (new_ID.length < 8) new_ID += String(Math.floor(Math.random() * 10));
                            document.querySelector("#emp-id-output").innerText = new_ID;
                            document.querySelector("#emp-id-output").value = new_ID;
                        };
                        if (emps_state.length !== 0) {
                            var new_ID = '';
                            var previous_IDs = [];
                            for (var oneE in emps_state) previous_IDs.push(emps_state[oneE]["employeeID"]);
                            while (new_ID.length < 8) new_ID += String(Math.floor(Math.random() * 10));
                            while (previous_IDs.includes(new_ID) === Boolean(true)) {
                                while (new_ID.length < 8) new_ID += String(Math.floor(Math.random() * 10));
                            };
                            document.querySelector("#emp-id-output").innerText = new_ID;
                            document.querySelector("#emp-id-output").value = new_ID;
                        };
                    };
                };
                {
                    var third_line_break = document.createElement("br");
                    third_line_break.setAttribute("class", "toRemove");
                    document.querySelector("#crud-operations").appendChild(third_line_break);
                };
                {
                    var pseudo_start_date_label = document.createElement('p');
                    pseudo_start_date_label.innerText = "Start Date === ";
                    pseudo_start_date_label.style.fontFamily = "monospace";
                    pseudo_start_date_label.style.fontSize = "4mm";
                    pseudo_start_date_label.style.display = "inline-block";
                    pseudo_start_date_label.style.marginTop = "3mm";
                    pseudo_start_date_label.style.color = "rgba(222, 222, 222, 1)";
                    pseudo_start_date_label.style.marginLeft = "5mm";
                    pseudo_start_date_label.setAttribute("class", "toRemove");
                    document.querySelector("#crud-operations").appendChild(pseudo_start_date_label);
                };
                {
                    var start_date_input = document.createElement("input");
                    var today_date = new Date();
                    var dd = String(today_date.getDate());
                    if (dd < 10) dd = '0' + dd;
                    var mm = String(Number(today_date.getMonth()) + 1);
                    if (mm < 10) mm = '0' + mm;
                    var yyyy = String(today_date.getFullYear());
                    start_date_input.style.marginLeft = "4mm";
                    start_date_input.setAttribute("min", `${yyyy}-${mm}-${dd}`);
                    start_date_input.setAttribute("max", "2022-12-31");
                    start_date_input.setAttribute("type", "date");
                    start_date_input.setAttribute("class", "toRemove");
                    start_date_input.setAttribute("id", "start-date-input");
                    document.querySelector("#crud-operations").appendChild(start_date_input);
                };
                {
                    var start_date_hint = document.createElement('p');
                    start_date_hint.innerText = '...HINT : <today, "The 31st of December 2022">';
                    start_date_hint.style.display = "inline-block";
                    start_date_hint.style.marginLeft = "2mm";
                    start_date_hint.style.fontSize = "3.3mm";
                    start_date_hint.style.fontFamily = "monospace";
                    start_date_hint.style.color = "rgba(222, 222, 222, 1)";
                    start_date_hint.setAttribute("class", "toRemove");
                    document.querySelector("#crud-operations").appendChild(start_date_hint);
                };
                {
                    var salary_input = document.createElement("input");
                    salary_input.placeholder = "$ALAR" + "\u00a5" + "\u00a0..." + "\u20ac";
                    salary_input.value = '';
                    salary_input.style.width = "2cm";
                    salary_input.style.marginLeft = "5mm";
                    salary_input.style.marginTop = "0";
                    salary_input.setAttribute("maxlength", 4);
                    salary_input.setAttribute("type", "text");
                    salary_input.setAttribute("class", "toRemove");
                    salary_input.setAttribute("id", "salary-input");
                    document.querySelector("#crud-operations").appendChild(salary_input);
                };
                {
                    var salary_input_hint = document.createElement('p');
                    salary_input_hint.innerText = "...HINT : <1000, 9999>";
                    salary_input_hint.style.color = "rgba(222, 222, 222, 1)";
                    salary_input_hint.style.fontFamily = "monospace";
                    salary_input_hint.style.fontSize = "3.5mm";
                    salary_input_hint.style.display = "inline-block";
                    salary_input_hint.style.marginLeft = "5mm";
                    salary_input_hint.style.marginTop = '0';
                    salary_input_hint.setAttribute("class", "toRemove");
                    document.querySelector("#crud-operations").appendChild(salary_input_hint);
                };
                {
                    document.querySelector("#salary-input").addEventListener("input", (e_s_i) => {
                        var salary_input_arr = [];
                        salary_input_arr = [...e_s_i.target.value].map(oneChar => oneChar.charCodeAt());
                        if (
                            (salary_input_arr[0] < 49) || (salary_input_arr[0] > 57)
                        ) {
                            alert(String.fromCodePoint(10060) + "\u00a0" + "Not valid input.");
                            salary_input.value = '';
                        };
                        if (
                            ((salary_input_arr[1] < 48) || (salary_input_arr[1] > 57)) ||
                            ((salary_input_arr[2] < 48) || (salary_input_arr[2] > 57)) ||
                            ((salary_input_arr[3] < 48) || (salary_input_arr[3] > 57))
                        ) {
                            alert(String.fromCodePoint(10060) + "\u00a0" + "Not valid input.");
                            salary_input.value = '';
                        };
                    });
                };
                {
                    var fourth_line_break = document.createElement("br");
                    fourth_line_break.setAttribute("class", "toRemove");
                    document.querySelector("#crud-operations").appendChild(fourth_line_break);
                };
                {
                    var new_nav_add = document.createElement("nav");
                    new_nav_add.style.marginLeft = "5mm";
                    new_nav_add.style.padding = "1mm 2mm 1mm 2mm";
                    new_nav_add.style.border = '0';
                    new_nav_add.style.borderRadius = "2mm";
                    new_nav_add.style.backgroundColor = "rgb(122, 122, 122)";
                    new_nav_add.style.display = "inline-block";
                    new_nav_add.setAttribute("class", "toRemove");
                    document.querySelector("#crud-operations").appendChild(new_nav_add);
                };
                {
                    var new_add_bttn = document.createElement("button");
                    new_add_bttn.innerText = "ADD TO THE TOP";
                    new_add_bttn.style.borderRadius = "2mm";
                    new_add_bttn.style.border = '0';
                    new_add_bttn.style.marginRight = "2mm";
                    new_add_bttn.style.backgroundColor = "rgb(0, 0, 0)";
                    new_add_bttn.style.color = "rgba(122, 244, 122, 1)";
                    new_add_bttn.setAttribute("id", "new-add-bttn");
                    new_add_bttn.setAttribute("class", "secondlyCRUDAddBttn");
                    new_nav_add.appendChild(new_add_bttn);
                };
                {
                    var new_do_not_add_bttn = document.createElement("button");
                    new_do_not_add_bttn.innerText = "DO NOT ADD --> GO BACK";
                    new_do_not_add_bttn.style.border = '0';
                    new_do_not_add_bttn.style.backgroundColor = "rgb(0, 0, 0)";
                    new_do_not_add_bttn.style.color = "rgba(122, 244, 122, 1)";
                    new_do_not_add_bttn.style.borderRadius = "2mm";
                    new_do_not_add_bttn.setAttribute("id", "new-do-not-add-bttn");
                    new_do_not_add_bttn.setAttribute("class", "secondlyCRUDAddBttn");
                    new_nav_add.appendChild(new_do_not_add_bttn);
                };
                {
                    document.querySelectorAll(".secondlyCRUDAddBttn").forEach(sCRUDAB => {
                        sCRUDAB.addEventListener("mouseenter", (ev_00) => {
                            ev_00.target.style.backgroundColor = "rgb(122, 244, 122)";
                            ev_00.target.style.color = "rgba(0, 0, 0, 1)";
                            ev_00.target.style.cursor = "pointer";
                        });
                        sCRUDAB.addEventListener("mouseleave", (ev_01) => {
                            ev_01.target.style.backgroundColor = "rgb(0, 0, 0)";
                            ev_01.target.style.color = "rgba(122, 244, 122, 1)";
                        });
                    });
                };
                {
                    document.querySelector("#new-add-bttn").addEventListener("click", () => {
                        if (document.querySelector("#start-date-input").value !== '') {
                            {
                                var inp_dd = document.querySelector("#start-date-input").value.split('-')[2];
                                var inp_mm = document.querySelector("#start-date-input").value.split('-')[1];
                                var inp_yyyy = document.querySelector("#start-date-input").value.split('-')[0];
                            };
                            {
                                var today_date_now = new Date();
                                var dd_now = String(today_date_now.getDate());
                                if (dd_now < 10) dd_now = '0' + dd_now;
                                var mm_now = String(Number(today_date.getMonth()) + 1);
                                if (mm_now < 10) mm_now = '0' + mm_now;
                            };
                            {
                                if (Number(inp_yyyy) !== Number(2022)) {
                                    document.querySelector("#start-date-input").value = '';
                                } else {
                                    if (Number(inp_mm) < Number(mm_now)) {
                                        document.querySelector("#start-date-input").value = '';
                                    } else {
                                        if (Number(inp_mm) === Number(mm_now)) {
                                            if (Number(inp_dd) < Number(dd_now)) {
                                                document.querySelector("#start-date-input").value = '';
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        if (
                            (Number(document.querySelector("#salary-input").value) < Number(1000)) ||
                            (Number(document.querySelector("#salary-input").value) > Number(9999))
                        ) {
                            document.querySelector("#salary-input").value = '';
                        };
                        var if_not_empty_input = Boolean(true);
                        [
                            "#first-name-input",
                            "#last-name-input",
                            "#gender-input",
                            "#department-input",
                            "#position-input",
                            "#emp-id-output",
                            "#start-date-input",
                            "#salary-input"
                        ].forEach(input_entry => {
                            if (document.querySelector(input_entry).value === '') if_not_empty_input = Boolean(false);
                        });
                        if (if_not_empty_input === Boolean(false)) {
                            alert(String.fromCodePoint(10060) + "\u00a0" + "All inputs must be valid,\nbefore ADD operation possible.");
                        } else {
                            if (if_not_empty_input === Boolean(true)) {
                                {
                                    var new_new_first_name = '';
                                    for (var fn_indexer = 0; fn_indexer <= document.querySelector("#first-name-input").value.length - 1; fn_indexer++) {
                                        if (fn_indexer === 0) {
                                            new_new_first_name += document.querySelector("#first-name-input").value[fn_indexer].toUpperCase();
                                        } else {
                                            new_new_first_name += document.querySelector("#first-name-input").value[fn_indexer].toLowerCase();
                                        };
                                    };
                                };
                                {
                                    var new_new_last_name = '';
                                    for (var ln_indexer = 0; ln_indexer <= document.querySelector("#last-name-input").value.length - 1; ln_indexer++) {
                                        if (ln_indexer === 0) {
                                            new_new_last_name += document.querySelector("#last-name-input").value[ln_indexer].toUpperCase();
                                        } else {
                                            new_new_last_name += document.querySelector("#last-name-input").value[ln_indexer].toLowerCase();
                                        };
                                    };
                                };
                                {
                                    var _new_new_emp_ = {};
                                    var _new_new_emp_ = {
                                        firstName: String(new_new_first_name),
                                        lastName: String(new_new_last_name),
                                        gender: String(document.querySelector("#gender-input").value),
                                        department: String(document.querySelector("#department-input").value),
                                        position: String(document.querySelector("#position-input").value),
                                        eMail: function () {
                                            return String(this.firstName.toLowerCase() + '.' + this.lastName.toLowerCase() + "@ETL.com");
                                        },
                                        employeeID: String(document.querySelector("#emp-id-output").value),
                                        startDate: String(String(document.querySelector("#start-date-input").value).split('-')[1] + '-' + String(document.querySelector("#start-date-input").value).split('-')[2] + '-' + String(document.querySelector("#start-date-input").value).split('-')[0]),
                                        endDate: '',
                                        salary: Number(document.querySelector("#salary-input").value)
                                    };
                                };
                                {
                                    if (emps_state.length === 0) {
                                        {
                                            emps_state.splice(0, 0, _new_new_emp_);
                                        };
                                        {
                                            document.querySelector("#change-content-area").style.display = "initial";
                                            document.querySelector("#data-nav").style.visibility = "initial";
                                            document.querySelector("#crud-nav").style.visibility = "initial";
                                            document.querySelector("#sort-nav").style.visibility = "initial";
                                            document.querySelector("#filter-search-nav").style.visibility = "initial";
                                            document.querySelector("#pagination-nav").style.visibility = "initial";
                                            document.querySelector("#scrollbar-nav").style.visibility = "initial";
                                            {
                                                document.querySelectorAll(".toRemove").forEach(tR => {
                                                    document.querySelector("#crud-operations").removeChild(tR);
                                                });
                                            };
                                        };
                                        {
                                            remove_previous_rows();
                                        };
                                        {
                                            add_next_rows();
                                        };
                                    } else {
                                        {
                                            var all_previous_concat_names = [];
                                            for (var one_one_emp in emps_state) {
                                                var name_nam_to_append = emps_state[one_one_emp]["firstName"].toLowerCase() + emps_state[one_one_emp]["lastName"].toLowerCase();
                                                all_previous_concat_names.push(name_nam_to_append);
                                            };
                                        };
                                        {
                                            let name_to_check = _new_new_emp_["firstName"].toLowerCase() + _new_new_emp_["lastName"].toLowerCase();
                                            if (all_previous_concat_names.includes(name_to_check) === Boolean(true)) {
                                                {
                                                    alert(String.fromCodePoint(10060) + "\u00a0" + "Operation not possible,\ndue to the fact that this Employee,\nis already set in Employees Table List.");
                                                };
                                                {
                                                    document.querySelector("#change-content-area").style.display = "initial";
                                                    document.querySelector("#data-nav").style.visibility = "initial";
                                                    document.querySelector("#crud-nav").style.visibility = "initial";
                                                    document.querySelector("#sort-nav").style.visibility = "initial";
                                                    document.querySelector("#filter-search-nav").style.visibility = "initial";
                                                    document.querySelector("#pagination-nav").style.visibility = "initial";
                                                    document.querySelector("#scrollbar-nav").style.visibility = "initial";
                                                    {
                                                        document.querySelectorAll(".toRemove").forEach(tR => {
                                                            document.querySelector("#crud-operations").removeChild(tR);
                                                        });
                                                    };
                                                };
                                            } else {
                                                {
                                                    emps_state.splice(0, 0, _new_new_emp_);
                                                };
                                                {
                                                    document.querySelector("#change-content-area").style.display = "initial";
                                                    document.querySelector("#data-nav").style.visibility = "initial";
                                                    document.querySelector("#crud-nav").style.visibility = "initial";
                                                    document.querySelector("#sort-nav").style.visibility = "initial";
                                                    document.querySelector("#filter-search-nav").style.visibility = "initial";
                                                    document.querySelector("#pagination-nav").style.visibility = "initial";
                                                    document.querySelector("#scrollbar-nav").style.visibility = "initial";
                                                    {
                                                        document.querySelectorAll(".toRemove").forEach(tR => {
                                                            document.querySelector("#crud-operations").removeChild(tR);
                                                        });
                                                    };
                                                };
                                                {
                                                    remove_previous_rows();
                                                };
                                                {
                                                    add_next_rows();
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    });
                };
                {
                    document.querySelector("#new-do-not-add-bttn").addEventListener("click", () => {
                        document.querySelector("#change-content-area").style.display = "initial";
                        document.querySelector("#data-nav").style.visibility = "initial";
                        document.querySelector("#crud-nav").style.visibility = "initial";
                        document.querySelector("#sort-nav").style.visibility = "initial";
                        document.querySelector("#filter-search-nav").style.visibility = "initial";
                        document.querySelector("#pagination-nav").style.visibility = "initial";
                        document.querySelector("#scrollbar-nav").style.visibility = "initial";
                        {
                            document.querySelectorAll(".toRemove").forEach(tR => {
                                document.querySelector("#crud-operations").removeChild(tR);
                            });
                        };
                    });
                };
            };
        };
    });
} catch (error) { if (error) console.log(error); } finally { };

try {
    document.querySelector("#remove-bttn").addEventListener("click", () => {
        {
            myHeadIsBugsOnTopOfBugs_xD();
        };
        if (emps_state.length === 0) {
            alert(String.fromCodePoint(10060) + "\u00a0" + "Operation of this button not possible,\ndue to the fact,\nthat Employees Table List is yet empty.");
        } else {
            document.querySelector("#change-content-area").style.display = "none";
            document.querySelector("#data-nav").style.visibility = "hidden";
            document.querySelector("#crud-nav").style.visibility = "hidden";
            document.querySelector("#sort-nav").style.visibility = "hidden";
            document.querySelector("#filter-search-nav").style.visibility = "hidden";
            document.querySelector("#pagination-nav").style.visibility = "hidden";
            document.querySelector("#scrollbar-nav").style.visibility = "hidden";
            {
                var remove_paragraph_info = document.createElement('p');
                remove_paragraph_info.innerText = "Pick-choose-select,\nwhich Employee You want to remove,\nfrom Employees Table List.";
                remove_paragraph_info.style.fontFamily = "cursive";
                remove_paragraph_info.style.fontWeight = "900";
                remove_paragraph_info.style.color = "rgba(222, 222, 222, 1)";
                remove_paragraph_info.style.marginTop = "7mm";
                remove_paragraph_info.style.marginLeft = "7mm";
                remove_paragraph_info.setAttribute("class", "toRemove");
                document.querySelector("#crud-operations").appendChild(remove_paragraph_info);
            };
            {
                var which_employee_input = document.createElement("select");
                which_employee_input.style.marginLeft = "7mm";
                which_employee_input.style.marginTop = "1mm";
                which_employee_input.setAttribute("id", "which-employee-input");
                which_employee_input.setAttribute("class", "toRemove");
                document.querySelector("#crud-operations").appendChild(which_employee_input);
            };
            {
                var which_employee_pseudo_placeholder = document.createElement("option");
                which_employee_pseudo_placeholder.innerText = "Which You want to remove?";
                which_employee_pseudo_placeholder.value = '';
                which_employee_pseudo_placeholder.setAttribute("disabled", "disabled");
                which_employee_pseudo_placeholder.setAttribute("selected", "selected");
                which_employee_pseudo_placeholder.setAttribute("hidden", "hidden");
                which_employee_pseudo_placeholder.setAttribute("class", "toRemove");
                which_employee_input.appendChild(which_employee_pseudo_placeholder);
            };
            {
                var all_emps_mails = [];
                for (var one_empo in emps_state) all_emps_mails.push(emps_state[one_empo]["eMail"]());
                {
                    [...all_emps_mails].map(oneMailo => {
                        var one_remove_opt = document.createElement("option");
                        one_remove_opt.innerHTML = String(oneMailo);
                        one_remove_opt.value = String(oneMailo);
                        which_employee_input.appendChild(one_remove_opt);
                    });
                };
            };
            {
                var remove_line_break = document.createElement("br");
                remove_line_break.setAttribute("class", "toRemove");
                document.querySelector("#crud-operations").appendChild(remove_line_break);
            };
            {
                var new_remove_nav = document.createElement("nav");
                new_remove_nav.style.marginTop = "5mm";
                new_remove_nav.style.marginLeft = "7mm";
                new_remove_nav.style.backgroundColor = "rgb(122, 122, 122)";
                new_remove_nav.style.border = '0';
                new_remove_nav.style.borderRadius = "2mm";
                new_remove_nav.style.padding = "1mm 2mm 1mm 2mm";
                new_remove_nav.style.display = "inline-block";
                new_remove_nav.setAttribute("class", "toRemove");
                document.querySelector("#crud-operations").appendChild(new_remove_nav);
            };
            {
                var new_remove_bttn = document.createElement("button");
                new_remove_bttn.innerText = "REMOVE";
                new_remove_bttn.setAttribute("id", "new-remove-bttn");
                new_remove_bttn.setAttribute("class", "rmBttns");
                new_remove_nav.appendChild(new_remove_bttn);
            };
            {
                var new_do_not_remove_bttn = document.createElement("button");
                new_do_not_remove_bttn.innerText = "DO NOT REMOVE --> GO BACK";
                new_do_not_remove_bttn.style.marginLeft = "2mm";
                new_do_not_remove_bttn.setAttribute("id", "new-do-not-remove-bttn");
                new_do_not_remove_bttn.setAttribute("class", "rmBttns");
                new_remove_nav.appendChild(new_do_not_remove_bttn);
            };
            {
                document.querySelectorAll(".rmBttns").forEach(rBttn => {
                    rBttn.style.border = '0';
                    rBttn.style.backgroundColor = "rgb(0, 0, 0)";
                    rBttn.style.color = "rgba(122, 244, 122, 1)";
                    rBttn.style.borderRadius = "2mm";
                    rBttn.style.padding = "0.4mm 1.4mm 0.4mm 1.4mm";
                    {
                        rBttn.addEventListener("mouseenter", (e_me) => {
                            e_me.target.style.cursor = "pointer";
                            e_me.target.style.backgroundColor = "rgb(122, 244, 122)";
                            e_me.target.style.color = "rgba(0, 0, 0, 1)";
                        });
                    };
                    {
                        rBttn.addEventListener("mouseleave", (e_ml) => {
                            e_ml.target.style.backgroundColor = "rgb(0, 0, 0)";
                            e_ml.target.style.color = "rgba(122, 244, 122, 1)";
                        });
                    };
                });
            };
            {
                document.querySelector("#new-remove-bttn").addEventListener("click", () => {
                    if (document.querySelector("#which-employee-input").value === '') {
                        alert(String.fromCodePoint(10060) + "\u00a0" + "Operation of this button yet not possible,\n Employee to remove still not chosen.");
                    } else {
                        {
                            var my_head_bugs_on_top_of_bugs = [];
                        };
                        {
                            my_head_bugs_on_top_of_bugs = [...emps_state];
                        };
                        {
                            emps_state = [];
                        };
                        {
                            for (var another_index = 0; another_index <= my_head_bugs_on_top_of_bugs.length - 1; another_index++) {
                                if (my_head_bugs_on_top_of_bugs[another_index]["eMail"]() === document.querySelector("#which-employee-input").value) {
                                    continue;
                                } else {
                                    emps_state.push(my_head_bugs_on_top_of_bugs[another_index]);
                                }
                            };
                        };
                        {
                            remove_previous_rows();
                        };
                        {
                            add_next_rows();
                        };
                        {
                            document.querySelector("#change-content-area").style.display = "initial";
                            document.querySelector("#data-nav").style.visibility = "initial";
                            document.querySelector("#crud-nav").style.visibility = "initial";
                            document.querySelector("#sort-nav").style.visibility = "initial";
                            document.querySelector("#filter-search-nav").style.visibility = "initial";
                            document.querySelector("#pagination-nav").style.visibility = "initial";
                            document.querySelector("#scrollbar-nav").style.visibility = "initial";
                            {
                                document.querySelectorAll(".toRemove").forEach(tR => { tR.remove(); });
                            };
                        };
                    };
                });
            };
            {
                document.querySelector("#new-do-not-remove-bttn").addEventListener("click", () => {
                    document.querySelector("#change-content-area").style.display = "initial";
                    document.querySelector("#data-nav").style.visibility = "initial";
                    document.querySelector("#crud-nav").style.visibility = "initial";
                    document.querySelector("#sort-nav").style.visibility = "initial";
                    document.querySelector("#filter-search-nav").style.visibility = "initial";
                    document.querySelector("#pagination-nav").style.visibility = "initial";
                    document.querySelector("#scrollbar-nav").style.visibility = "initial";
                    {
                        document.querySelectorAll(".toRemove").forEach(tR => { tR.remove(); });
                    };
                });
            };
        };
    });
} catch (errr) { if (errr) console.log(errr); } finally { };

try {
    document.querySelector("#edit-bttn").addEventListener("click", () => {
        {
            myHeadIsBugsOnTopOfBugs_xD();
        };
        if (emps_state.length === 0) {
            {
                alert(String.fromCodePoint(10060) + "\u00a0" + "Operation of this button not possible,\ndue to Employees Table List yet empty.");
            };
        } else {
            {
                document.querySelector("#change-content-area").style.display = "none";
                document.querySelector("#data-nav").style.visibility = "hidden";
                document.querySelector("#crud-nav").style.visibility = "hidden";
                document.querySelector("#sort-nav").style.visibility = "hidden";
                document.querySelector("#filter-search-nav").style.visibility = "hidden";
                document.querySelector("#pagination-nav").style.visibility = "hidden";
                document.querySelector("#scrollbar-nav").style.visibility = "hidden";
            };
            {
                var new_paragraph_edit_info = document.createElement('p');
                new_paragraph_edit_info.innerText = "Choose-pick-select,\nof Whom Employee info,\n You want to edit.";
                new_paragraph_edit_info.style.fontFamily = "cursive";
                new_paragraph_edit_info.style.fontWeight = "900";
                new_paragraph_edit_info.style.marginTop = "7mm";
                new_paragraph_edit_info.style.marginLeft = "7mm";
                new_paragraph_edit_info.style.color = "rgba(222, 222, 222, 1)";
                new_paragraph_edit_info.setAttribute("class", "toRemove");
                document.querySelector("#crud-operations").appendChild(new_paragraph_edit_info);
            };
            {
                var copy_of_emps = [...emps_state];
            };
            {
                var all_all_eMails = [];
                for (var one_empEMP in copy_of_emps) {
                    all_all_eMails.push(copy_of_emps[one_empEMP]["eMail"]());
                };
            };
            {
                var new_edit_select = document.createElement("select");
                new_edit_select.style.marginLeft = "7mm";
                new_edit_select.style.marginTop = "1mm";
                new_edit_select.setAttribute("id", "new-edit-select");
                new_edit_select.setAttribute("class", "toRemove");
                document.querySelector("#crud-operations").appendChild(new_edit_select);
            };
            {
                var pseudo_pseudo_placeHolder = document.createElement("option");
                pseudo_pseudo_placeHolder.innerText = "Employees";
                pseudo_pseudo_placeHolder.value = '';
                pseudo_pseudo_placeHolder.setAttribute("selected", "selected");
                pseudo_pseudo_placeHolder.setAttribute("hidden", "hidden");
                pseudo_pseudo_placeHolder.setAttribute("disabled", "disabled");
                new_edit_select.appendChild(pseudo_pseudo_placeHolder);
            };
            {
                all_all_eMails.map(oneMailMailo => {
                    var new_edit_select_opt = document.createElement("option");
                    new_edit_select_opt.innerText = String(oneMailMailo);
                    new_edit_select_opt.value = String(oneMailMailo);
                    new_edit_select.appendChild(new_edit_select_opt);
                });
            };
            {
                var selected_emp_selected = '';
            };
            {
                document.querySelector("#new-edit-select").addEventListener("input", () => {
                    selected_emp_selected = document.querySelector("#new-edit-select").value;
                    document.querySelectorAll(".toRemove").forEach(cTR => {
                        cTR.remove();
                    });
                    {
                        var some_new_edit_p = document.createElement('p');
                        some_new_edit_p.innerText = "Which info sub-entry of Employee,\n do You want to edit?\nEmployee-ID & eMail are not editable,\n due to the fact that,\nboth are generated and unique.";
                        some_new_edit_p.style.color = "rgba(222, 222, 222, 1)";
                        some_new_edit_p.style.fontFamily = "cursive";
                        some_new_edit_p.style.marginLeft = "7mm";
                        some_new_edit_p.style.marginTop = "7mm";
                        some_new_edit_p.style.fontWeight = "900";
                        some_new_edit_p.setAttribute("class", "toRemove");
                        document.querySelector("#crud-operations").appendChild(some_new_edit_p);
                    };
                    {
                        var new_subEntryInfo_select = document.createElement("select");
                        new_subEntryInfo_select.style.marginTop = "1mm";
                        new_subEntryInfo_select.style.marginLeft = "7mm";
                        new_subEntryInfo_select.setAttribute("class", "toRemove");
                        document.querySelector("#crud-operations").appendChild(new_subEntryInfo_select);
                    };
                    {
                        var new_subEntryInfo_pseudo_placeholder = document.createElement("option");
                        new_subEntryInfo_pseudo_placeholder.innerText = "INFO SUB-ENTRIES";
                        new_subEntryInfo_pseudo_placeholder.value = '';
                        new_subEntryInfo_pseudo_placeholder.setAttribute("selected", "selected");
                        new_subEntryInfo_pseudo_placeholder.setAttribute("hidden", "hidden");
                        new_subEntryInfo_pseudo_placeholder.setAttribute("disabled", "disabled");
                        new_subEntryInfo_select.appendChild(new_subEntryInfo_pseudo_placeholder);
                    };
                    {
                        [
                            "FIRST & LAST NAME",
                            "GENDER",
                            "DEPARTMENT & POSITION",
                            "START & END DATE",
                            "SALARY"
                        ].forEach(i_sE => {
                            var new_i_sE_opt = document.createElement("option");
                            new_i_sE_opt.innerText = String(i_sE);
                            new_i_sE_opt.value = String(i_sE);
                            new_subEntryInfo_select.appendChild(new_i_sE_opt);
                        });
                    };
                    {
                        new_subEntryInfo_select.addEventListener("input", (e_n_sEI_s) => {
                            document.querySelectorAll(".toRemove").forEach(tRE_xyz => { tRE_xyz.remove(); });
                            if (e_n_sEI_s.target.value === "FIRST & LAST NAME") {
                                {
                                    var xyzFT_first_name_input = document.createElement("input");
                                    xyzFT_first_name_input.placeholder = "FIRST NAME";
                                    xyzFT_first_name_input.style.marginLeft = "5mm";
                                    xyzFT_first_name_input.style.marginTop = "1cm";
                                    xyzFT_first_name_input.setAttribute("type", "text");
                                    xyzFT_first_name_input.setAttribute("maxlength", 8);
                                    xyzFT_first_name_input.setAttribute("class", "xyzFT");
                                    document.querySelector("#crud-operations").appendChild(xyzFT_first_name_input);
                                };
                                {
                                    var xyzFT_last_name_input = document.createElement("input");
                                    xyzFT_last_name_input.placeholder = "FIRST NAME";
                                    xyzFT_last_name_input.style.marginLeft = "5mm";
                                    xyzFT_last_name_input.style.marginTop = "1cm";
                                    xyzFT_last_name_input.setAttribute("type", "text");
                                    xyzFT_last_name_input.setAttribute("maxlength", 8);
                                    xyzFT_last_name_input.setAttribute("class", "xyzFT");
                                    document.querySelector("#crud-operations").appendChild(xyzFT_last_name_input);
                                };
                                {
                                    var xyzFT_new_new_p_hint = document.createElement('p');
                                    xyzFT_new_new_p_hint.innerText = "...HINT : [A-Z], [a-z], max length = 8";
                                    xyzFT_new_new_p_hint.style.display = "inline-block";
                                    xyzFT_new_new_p_hint.style.marginLeft = "3mm";
                                    xyzFT_new_new_p_hint.style.marginTop = "1cm";
                                    xyzFT_new_new_p_hint.style.color = "rgba(222, 222, 222, 1)";
                                    xyzFT_new_new_p_hint.style.fontFamily = "cursive";
                                    xyzFT_new_new_p_hint.style.fontSize = "3.3mm";
                                    xyzFT_new_new_p_hint.setAttribute("class", "xyzFT");
                                    document.querySelector("#crud-operations").appendChild(xyzFT_new_new_p_hint);
                                };
                                {
                                    var xyzFT_NewEmailOutput = document.createElement('p');
                                    xyzFT_NewEmailOutput.innerText = "--> eMail ====>";
                                    xyzFT_NewEmailOutput.style.fontFamily = "monospace";
                                    xyzFT_NewEmailOutput.style.marginTop = "5mm";
                                    xyzFT_NewEmailOutput.style.marginLeft = "1cm";
                                    xyzFT_NewEmailOutput.style.fontSize = "4mm";
                                    xyzFT_NewEmailOutput.style.fontWeight = "900";
                                    xyzFT_NewEmailOutput.style.color = "rgba(222, 222, 222, 1)";
                                    xyzFT_NewEmailOutput.setAttribute("class", "xyzFT");
                                    document.querySelector("#crud-operations").appendChild(xyzFT_NewEmailOutput);
                                };
                                {
                                    var xyzFT_NewNavNewNav = document.createElement("nav");
                                    xyzFT_NewNavNewNav.style.marginLeft = "15mm";
                                    xyzFT_NewNavNewNav.style.marginTop = "5mm";
                                    xyzFT_NewNavNewNav.style.display = "inline-block";
                                    xyzFT_NewNavNewNav.style.border = '0';
                                    xyzFT_NewNavNewNav.style.borderRadius = "2mm";
                                    xyzFT_NewNavNewNav.style.padding = "1mm 2mm 1mm 2mm";
                                    xyzFT_NewNavNewNav.style.backgroundColor = "rgb(122, 122, 122)";
                                    xyzFT_NewNavNewNav.setAttribute("class", "xyzFT");
                                    document.querySelector("#crud-operations").appendChild(xyzFT_NewNavNewNav);
                                };
                                {
                                    var xyzFT_new_bttn_left = document.createElement("button");
                                    xyzFT_new_bttn_left.innerText = "EDIT -> SAVE";
                                    xyzFT_new_bttn_left.style.border = '0';
                                    xyzFT_new_bttn_left.setAttribute("class", "bttn_LR");
                                    xyzFT_new_bttn_left.setAttribute("id", "left-edit-save-bttn");
                                    xyzFT_NewNavNewNav.appendChild(xyzFT_new_bttn_left);
                                };
                                {
                                    var xyzFT_new_bttn_right = document.createElement("button");
                                    xyzFT_new_bttn_right.innerText = "DO NOT EDIT -> GO BACK";
                                    xyzFT_new_bttn_right.style.border = '0';
                                    xyzFT_new_bttn_right.style.marginLeft = "4mm";
                                    xyzFT_new_bttn_right.setAttribute("class", "bttn_LR");
                                    xyzFT_new_bttn_right.setAttribute("id", "right-do-not-edit-go-back-bttn");
                                    xyzFT_NewNavNewNav.appendChild(xyzFT_new_bttn_right);
                                };
                                {
                                    document.querySelectorAll(".bttn_LR").forEach(bLT => {
                                        bLT.style.backgroundColor = "rgb(0, 0, 0)";
                                        bLT.style.color = "rgba(122, 244, 122, 1)";
                                        bLT.style.borderRadius = "2mm";
                                        bLT.addEventListener("mouseenter", (e_bLT) => {
                                            e_bLT.target.style.backgroundColor = "rgb(122, 244, 122)";
                                            e_bLT.target.style.color = "rgba(0, 0, 0, 1)";
                                            e_bLT.target.style.cursor = "pointer";
                                        });
                                        bLT.addEventListener("mouseleave", (e_bLT) => {
                                            e_bLT.target.style.backgroundColor = "rgb(0, 0, 0)";
                                            e_bLT.target.style.color = "rgba(122, 244, 122, 1)";
                                        });
                                    });
                                };
                                {
                                    xyzFT_first_name_input.addEventListener("input", (leftly_first_inp) => {
                                        var MyHeadIsBugs = [];
                                        MyHeadIsBugs = [...leftly_first_inp.target.value].map(OneCharOfString => OneCharOfString.charCodeAt());
                                        for (var _subPart_indx_ = 0; _subPart_indx_ <= MyHeadIsBugs.length - 1; _subPart_indx_++) {
                                            if (
                                                (MyHeadIsBugs[_subPart_indx_] < 65) ||
                                                (
                                                    (MyHeadIsBugs[_subPart_indx_] > 90) && (MyHeadIsBugs[_subPart_indx_] < 97)
                                                ) ||
                                                (MyHeadIsBugs[_subPart_indx_] > 122)
                                            ) {
                                                alert(String.fromCodePoint(10060) + "\u00a0" + "Not valid input.");
                                                leftly_first_inp.target.value = '';
                                            };
                                        };
                                        if (
                                            (xyzFT_first_name_input.value !== '') &&
                                            (xyzFT_last_name_input.value !== '')
                                        ) {
                                            xyzFT_NewEmailOutput.innerText = `--> eMail ====> ${xyzFT_first_name_input.value.toLowerCase()}.${xyzFT_last_name_input.value.toLowerCase()}@ETL.com`;
                                        }
                                        else {
                                            xyzFT_NewEmailOutput.innerText = "--> eMail ====>";
                                        };
                                    });
                                };
                                {
                                    xyzFT_last_name_input.addEventListener("input", (right_secondly_inp) => {
                                        var MyHeadIsBugsOnTopOfBugs = [];
                                        MyHeadIsBugsOnTopOfBugs = [...right_secondly_inp.target.value].map(_1CharOfString => _1CharOfString.charCodeAt());
                                        for (var _subPart_yndx_ = 0; _subPart_yndx_ <= MyHeadIsBugsOnTopOfBugs.length - 1; _subPart_yndx_++) {
                                            if (
                                                (MyHeadIsBugsOnTopOfBugs[_subPart_yndx_] < 65) ||
                                                (
                                                    (MyHeadIsBugsOnTopOfBugs[_subPart_yndx_] > 90) && (MyHeadIsBugsOnTopOfBugs[_subPart_yndx_] < 97)
                                                ) ||
                                                (MyHeadIsBugsOnTopOfBugs[_subPart_yndx_] > 122)
                                            ) {
                                                alert(String.fromCodePoint(10060) + "\u00a0" + "Not valid input.");
                                                right_secondly_inp.target.value = '';
                                            };
                                        };
                                        if (
                                            (xyzFT_first_name_input.value !== '') &&
                                            (xyzFT_last_name_input.value !== '')
                                        ) {
                                            xyzFT_NewEmailOutput.innerText = `--> eMail ====> ${xyzFT_first_name_input.value.toLowerCase()}.${xyzFT_last_name_input.value.toLowerCase()}@ETL.com`;
                                        }
                                        else {
                                            xyzFT_NewEmailOutput.innerText = "--> eMail ====>";
                                        };
                                    });
                                };
                                {
                                    document.querySelector("#left-edit-save-bttn").addEventListener("click", () => {
                                        if (
                                            (xyzFT_first_name_input.value !== '') &&
                                            (xyzFT_last_name_input.value !== '')
                                        ) {
                                            {
                                                var previous_FIRST_FIRST = '';
                                                var previous_LAST_LAST = '';
                                                var next_FIRST_FIRST = '';
                                                var next_LAST_LAST = '';
                                            };
                                            {
                                                previous_FIRST_FIRST = selected_emp_selected.split('.')[0];
                                                previous_LAST_LAST = selected_emp_selected.split('.')[1].split('@')[0];
                                                next_FIRST_FIRST = String(xyzFT_first_name_input.value).toLowerCase();
                                                next_LAST_LAST = String(xyzFT_last_name_input.value).toLowerCase();
                                            };
                                            {
                                                if (
                                                    (previous_FIRST_FIRST === next_FIRST_FIRST) &&
                                                    (previous_LAST_LAST === next_LAST_LAST)
                                                ) {
                                                    alert(String.fromCodePoint(10060) + "\u00a0" + "Operation not possible,\nthose names do match names,\nwhich are already set for the Employee.");
                                                } else {
                                                    var validation_toward_all_the_others = Boolean(true);
                                                    for (var _e_m_p_ in emps_state) {
                                                        if (emps_state[_e_m_p_]["eMail"]() === selected_emp_selected) {
                                                            continue;
                                                        } else {
                                                            if (
                                                                (String(emps_state[_e_m_p_]["firstName"]).toLowerCase() === next_FIRST_FIRST) &&
                                                                (String(emps_state[_e_m_p_]["lastName"]).toLowerCase() === next_LAST_LAST)
                                                            ) {
                                                                validation_toward_all_the_others = Boolean(false);
                                                                break;
                                                            } else { continue; };
                                                        };
                                                    };
                                                    if (validation_toward_all_the_others === Boolean(true)) {
                                                        {
                                                            var memoi = Number(0);
                                                            for (var iter = 0; iter <= emps_state.length - 1; iter++) {
                                                                if (emps_state[iter]["eMail"]() === selected_emp_selected) {
                                                                    memoi = Number(iter);
                                                                    break;
                                                                } else { continue; };
                                                            };
                                                        };
                                                        {
                                                            var NewFirstName = '';
                                                            var NewLastName = '';
                                                        };
                                                        {
                                                            for (var indx_0_indx = 0; indx_0_indx <= next_FIRST_FIRST.length - 1; indx_0_indx++) {
                                                                if (indx_0_indx === 0) {
                                                                    NewFirstName += String(next_FIRST_FIRST[indx_0_indx]).toUpperCase();
                                                                } else {
                                                                    NewFirstName += String(next_FIRST_FIRST[indx_0_indx]).toLowerCase();
                                                                };
                                                            };
                                                        };
                                                        {
                                                            for (var indx_1_indx = 0; indx_1_indx <= next_LAST_LAST.length - 1; indx_1_indx++) {
                                                                if (indx_1_indx === 0) {
                                                                    NewLastName += String(next_LAST_LAST[indx_1_indx]).toUpperCase();
                                                                } else {
                                                                    NewLastName += String(next_LAST_LAST[indx_1_indx]).toLowerCase();
                                                                };
                                                            };
                                                        };
                                                        {
                                                            let pseudo_copy = {
                                                                firstName: String(NewFirstName),
                                                                lastName: String(NewLastName),
                                                                gender: emps_state[memoi]["gender"],
                                                                department: emps_state[memoi]["department"],
                                                                position: emps_state[memoi]["position"],
                                                                eMail: emps_state[memoi]["eMail"],
                                                                employeeID: emps_state[memoi]["employeeID"],
                                                                startDate: emps_state[memoi]["startDate"],
                                                                endDate: emps_state[memoi]["endDate"],
                                                                salary: emps_state[memoi]["salary"]
                                                            };
                                                            emps_state.splice(memoi, 1);
                                                            emps_state.splice(memoi, 0, pseudo_copy);
                                                        };
                                                        {
                                                            document.querySelector("#change-content-area").style.display = "initial";
                                                            document.querySelector("#data-nav").style.visibility = "initial";
                                                            document.querySelector("#crud-nav").style.visibility = "initial";
                                                            document.querySelector("#sort-nav").style.visibility = "initial";
                                                            document.querySelector("#filter-search-nav").style.visibility = "initial";
                                                            document.querySelector("#pagination-nav").style.visibility = "initial";
                                                            document.querySelector("#scrollbar-nav").style.visibility = "initial";
                                                            {
                                                                document.querySelectorAll(".xyzFT").forEach(c_xyzFT => { c_xyzFT.remove(); });
                                                            };
                                                            {
                                                                remove_previous_rows();
                                                            };
                                                            {
                                                                add_next_rows();
                                                            };
                                                        };
                                                    } else {
                                                        alert(String.fromCodePoint(10060) + "\u00a0" + "Operation not possible,\nthose names do match names,\nwhich are already set,\nfor an other Employee.");
                                                    };
                                                };
                                            };
                                        } else {
                                            alert(String.fromCodePoint(10060) + "\u00a0" + "Not valid inputs.");
                                        };
                                    });
                                };
                                {
                                    document.querySelector("#right-do-not-edit-go-back-bttn").addEventListener("click", () => {
                                        document.querySelector("#change-content-area").style.display = "initial";
                                        document.querySelector("#data-nav").style.visibility = "initial";
                                        document.querySelector("#crud-nav").style.visibility = "initial";
                                        document.querySelector("#sort-nav").style.visibility = "initial";
                                        document.querySelector("#filter-search-nav").style.visibility = "initial";
                                        document.querySelector("#pagination-nav").style.visibility = "initial";
                                        document.querySelector("#scrollbar-nav").style.visibility = "initial";
                                        {
                                            document.querySelectorAll(".xyzFT").forEach(c_xyzFT => { c_xyzFT.remove(); });
                                        };
                                    });
                                };
                            };
                            if (e_n_sEI_s.target.value === "GENDER") {
                                {
                                    var new_paragraph_info = document.createElement('p');
                                    new_paragraph_info.innerText = "Choose-pick-select an option,\nof the gender from,\na drop-down list.";
                                    new_paragraph_info.style.color = "rgba(222, 222, 222, 1)";
                                    new_paragraph_info.style.fontFamily = "cursive";
                                    new_paragraph_info.style.fontSize = "4mm";
                                    new_paragraph_info.style.marginTop = "7mm";
                                    new_paragraph_info.style.marginLeft = "10mm";
                                    new_paragraph_info.setAttribute("class", "someToRemove");
                                    document.querySelector("#crud-operations").appendChild(new_paragraph_info);
                                };
                                {
                                    var new_select_box_genders = document.createElement("select");
                                    new_select_box_genders.style.marginTop = "5mm";
                                    new_select_box_genders.style.marginLeft = "20mm";
                                    new_select_box_genders.setAttribute("class", "someToRemove");
                                    new_select_box_genders.setAttribute("id", "pick-a-gender");
                                    document.querySelector("#crud-operations").appendChild(new_select_box_genders);
                                };
                                {
                                    var pseudo_placeholder_for_box = document.createElement("option");
                                    pseudo_placeholder_for_box.setAttribute("selected", "selected");
                                    pseudo_placeholder_for_box.setAttribute("hidden", "hidden");
                                    pseudo_placeholder_for_box.setAttribute("disabled", "disabled");
                                    pseudo_placeholder_for_box.innerText = "Genders";
                                    pseudo_placeholder_for_box.value = '';
                                    new_select_box_genders.appendChild(pseudo_placeholder_for_box);
                                };
                                {
                                    ["nk", 'f', 'm', "na"].map(oneOpt => {
                                        var new_opt_box = document.createElement("option");
                                        if (oneOpt === "nk") {
                                            new_opt_box.innerText = "Not Known";
                                            new_opt_box.value = "nk";
                                        };
                                        if (oneOpt === 'f') {
                                            new_opt_box.innerText = "Female";
                                            new_opt_box.value = 'f';
                                        };
                                        if (oneOpt === 'm') {
                                            new_opt_box.innerText = "Male";
                                            new_opt_box.value = 'm';
                                        };
                                        if (oneOpt === "na") {
                                            new_opt_box.innerText = "Not Applicable";
                                            new_opt_box.value = "na";
                                        };
                                        new_select_box_genders.appendChild(new_opt_box);
                                    });
                                };
                                {
                                    var someAnotherNewLineBreak = document.createElement("br");
                                    someAnotherNewLineBreak.setAttribute("class", "someToRemove");
                                    document.querySelector("#crud-operations").appendChild(someAnotherNewLineBreak);
                                };
                                {
                                    var NewNavFor_bttns = document.createElement("nav");
                                    NewNavFor_bttns.style.backgroundColor = "rgb(122, 122, 122)";
                                    NewNavFor_bttns.style.padding = "1mm 2mm 1mm 2mm";
                                    NewNavFor_bttns.style.border = '0';
                                    NewNavFor_bttns.style.borderRadius = "2mm";
                                    NewNavFor_bttns.style.display = "inline-block";
                                    NewNavFor_bttns.style.marginTop = "5mm";
                                    NewNavFor_bttns.style.marginLeft = "6cm";
                                    NewNavFor_bttns.setAttribute("class", "someToRemove");
                                    document.querySelector("#crud-operations").appendChild(NewNavFor_bttns);
                                };
                                {
                                    var newBttnLeft = document.createElement("button");
                                    newBttnLeft.innerText = "EDIT -> SAVE";
                                    newBttnLeft.setAttribute("id", "gender-bttn-left");
                                    newBttnLeft.setAttribute("class", "doSomeCSS");
                                    NewNavFor_bttns.appendChild(newBttnLeft);
                                };
                                {
                                    var newBttnRight = document.createElement("button");
                                    newBttnRight.innerText = "DO NOT SAVE -> GO BACK";
                                    newBttnRight.style.marginLeft = "2mm";
                                    newBttnRight.setAttribute("id", "gender-bttn-right");
                                    newBttnRight.setAttribute("class", "doSomeCSS");
                                    NewNavFor_bttns.appendChild(newBttnRight);
                                };
                                {
                                    document.querySelectorAll(".doSomeCSS").forEach(dSC_bttn => {
                                        dSC_bttn.style.border = '0';
                                        dSC_bttn.style.backgroundColor = "rgb(0, 0, 0)";
                                        dSC_bttn.style.color = "rgba(122, 244, 122, 1)";
                                        dSC_bttn.style.borderRadius = "2mm";
                                        dSC_bttn.style.fontFamily = "monospace";
                                        dSC_bttn.style.padding = "1mm 2mm 1mm 2mm";
                                        dSC_bttn.style.fontWeight = "900";
                                        dSC_bttn.style.fontSize = "4mm";
                                        dSC_bttn.addEventListener("mouseenter", (__e_b) => {
                                            __e_b.target.style.cursor = "pointer";
                                            __e_b.target.style.backgroundColor = "rgb(122, 244, 122)";
                                            __e_b.target.style.color = "rgba(0, 0, 0, 1)";
                                        });
                                        dSC_bttn.addEventListener("mouseleave", (__e_b) => {
                                            __e_b.target.style.backgroundColor = "rgb(0, 0, 0)";
                                            __e_b.target.style.color = "rgba(122, 244, 122, 1)";
                                        });
                                    });
                                };
                                {
                                    document.querySelector("#gender-bttn-left").addEventListener("click", () => {
                                        var pickValue = document.querySelector("#pick-a-gender").value;
                                        if (pickValue === '') {
                                            alert(String.fromCodePoint(10060) + "\u00a0" + "Operation not possible,\nan option still not chosen yet.");
                                        } else {
                                            var previous_val = '';
                                            for (var empsIndexIterator in emps_state) {
                                                if (emps_state[empsIndexIterator]["eMail"]() === selected_emp_selected) {
                                                    previous_val = emps_state[empsIndexIterator]["gender"];
                                                    break;
                                                };
                                            };
                                            if (previous_val === pickValue) {
                                                alert(String.fromCodePoint(10060) + "\u00a0" + "Operation not possible,\ndue to the fact,\nthat the chosen gender option,\ndoes match an option,\nwhich is already set for the Employee.");
                                            } else {
                                                {
                                                    var memoi_second = Number(0);
                                                    for (var someOtherIterator = 0; someOtherIterator <= emps_state.length - 1; someOtherIterator++) {
                                                        if (emps_state[someOtherIterator]["eMail"]() === selected_emp_selected) {
                                                            memoi_second = someOtherIterator;
                                                            break;
                                                        } else { continue; };
                                                    };
                                                    {
                                                        let new_pseudo_copy = {
                                                            firstName: emps_state[memoi_second]["firstName"],
                                                            lastName: emps_state[memoi_second]["lastName"],
                                                            gender: String(pickValue),
                                                            department: emps_state[memoi_second]["department"],
                                                            position: emps_state[memoi_second]["position"],
                                                            eMail: emps_state[memoi_second]["eMail"],
                                                            employeeID: emps_state[memoi_second]["employeeID"],
                                                            startDate: emps_state[memoi_second]["startDate"],
                                                            endDate: emps_state[memoi_second]["endDate"],
                                                            salary: emps_state[memoi_second]["salary"]
                                                        };
                                                        emps_state.splice(memoi_second, 1);
                                                        emps_state.splice(memoi_second, 0, new_pseudo_copy);
                                                    };
                                                };
                                                {
                                                    document.querySelector("#change-content-area").style.display = "initial";
                                                    document.querySelector("#data-nav").style.visibility = "initial";
                                                    document.querySelector("#crud-nav").style.visibility = "initial";
                                                    document.querySelector("#sort-nav").style.visibility = "initial";
                                                    document.querySelector("#filter-search-nav").style.visibility = "initial";
                                                    document.querySelector("#pagination-nav").style.visibility = "initial";
                                                    document.querySelector("#scrollbar-nav").style.visibility = "initial";
                                                    {
                                                        document.querySelectorAll(".someToRemove").forEach(c_sTR => { c_sTR.remove(); });
                                                    };
                                                    {
                                                        remove_previous_rows();
                                                    };
                                                    {
                                                        add_next_rows();
                                                    };
                                                };
                                            };
                                        };
                                    });
                                };
                                {
                                    document.querySelector("#gender-bttn-right").addEventListener("click", () => {
                                        document.querySelector("#change-content-area").style.display = "initial";
                                        document.querySelector("#data-nav").style.visibility = "initial";
                                        document.querySelector("#crud-nav").style.visibility = "initial";
                                        document.querySelector("#sort-nav").style.visibility = "initial";
                                        document.querySelector("#filter-search-nav").style.visibility = "initial";
                                        document.querySelector("#pagination-nav").style.visibility = "initial";
                                        document.querySelector("#scrollbar-nav").style.visibility = "initial";
                                        {
                                            document.querySelectorAll(".someToRemove").forEach(c_sTR => { c_sTR.remove(); });
                                        };
                                    });
                                };
                            };
                            if (e_n_sEI_s.target.value === "DEPARTMENT & POSITION") {
                                {
                                    var NewNew_pInfo_dprmnts_pstns = document.createElement('p');
                                    NewNew_pInfo_dprmnts_pstns.innerText = "Choose-pick-select,\nfirstly of a department option,\nthen secondly the position option.";
                                    NewNew_pInfo_dprmnts_pstns.style.color = "rgba(222, 222, 222, 1)";
                                    NewNew_pInfo_dprmnts_pstns.style.fontFamily = "monospace";
                                    NewNew_pInfo_dprmnts_pstns.style.fontWeight = "900";
                                    NewNew_pInfo_dprmnts_pstns.style.fontSize = "4mm";
                                    NewNew_pInfo_dprmnts_pstns.style.marginLeft = "1cm";
                                    NewNew_pInfo_dprmnts_pstns.style.marginTop = "1cm";
                                    NewNew_pInfo_dprmnts_pstns.setAttribute("class", "toRemoveStaff");
                                    document.querySelector("#crud-operations").appendChild(NewNew_pInfo_dprmnts_pstns);
                                };
                                {
                                    var departments_select_box = document.createElement("select");
                                    departments_select_box.style.marginTop = "1mm";
                                    departments_select_box.style.marginLeft = "2cm";
                                    departments_select_box.setAttribute("class", "toRemoveStaff");
                                    departments_select_box.setAttribute("id", "departments-select-box");
                                    document.querySelector("#crud-operations").appendChild(departments_select_box);
                                };
                                {
                                    var departments_SelectBox_pseudoPlaceholder = document.createElement("option");
                                    departments_SelectBox_pseudoPlaceholder.innerText = "Department";
                                    departments_SelectBox_pseudoPlaceholder.value = '';
                                    departments_SelectBox_pseudoPlaceholder.setAttribute("selected", "selected");
                                    departments_SelectBox_pseudoPlaceholder.setAttribute("hidden", "hidden");
                                    departments_SelectBox_pseudoPlaceholder.setAttribute("disabled", "disabled");
                                    departments_select_box.appendChild(departments_SelectBox_pseudoPlaceholder);
                                };
                                {
                                    [...Object.keys(dprmnts_pstns)].map(OneDprtmnt => {
                                        var newNew_opt_OneDprtmnt = document.createElement("option");
                                        newNew_opt_OneDprtmnt.innerText = String(OneDprtmnt);
                                        newNew_opt_OneDprtmnt.value = String(OneDprtmnt);
                                        departments_select_box.appendChild(newNew_opt_OneDprtmnt);
                                    });
                                };
                                {
                                    var positions_select_box = document.createElement("select");
                                    positions_select_box.style.marginTop = "1mm";
                                    positions_select_box.style.marginLeft = "1cm";
                                    positions_select_box.style.visibility = "hidden";
                                    positions_select_box.setAttribute("class", "toRemoveStaff");
                                    positions_select_box.setAttribute("id", "positions-select-box");
                                    document.querySelector("#crud-operations").appendChild(positions_select_box);
                                };
                                {
                                    var positions_SelectBox_pseudoPlaceholder = document.createElement("option");
                                    positions_SelectBox_pseudoPlaceholder.innerText = "Position";
                                    positions_SelectBox_pseudoPlaceholder.value = '';
                                    positions_SelectBox_pseudoPlaceholder.setAttribute("selected", "selected");
                                    positions_SelectBox_pseudoPlaceholder.setAttribute("hidden", "hidden");
                                    positions_SelectBox_pseudoPlaceholder.setAttribute("disabled", "disabled");
                                    positions_select_box.appendChild(positions_SelectBox_pseudoPlaceholder);
                                };
                                {
                                    document.querySelector("#departments-select-box").addEventListener("input", (___E) => {
                                        document.querySelector("#positions-select-box").style.visibility = "visible";
                                        if (document.querySelector("#positions-select-box").length === 1) {
                                            [...dprmnts_pstns[String(___E.target.value)]].map(OnePst => {
                                                var newPstOpt = document.createElement("option");
                                                newPstOpt.innerText = String(OnePst);
                                                newPstOpt.value = String(OnePst);
                                                positions_select_box.appendChild(newPstOpt);
                                            });
                                        } else {
                                            {
                                                positions_select_box[3].remove();
                                                positions_select_box[2].remove();
                                                positions_select_box[1].remove();
                                                positions_select_box[0].remove();
                                            };
                                            {
                                                var positions_SelectBox_pseudoPlaceholder = document.createElement("option");
                                                positions_SelectBox_pseudoPlaceholder.innerText = "Position";
                                                positions_SelectBox_pseudoPlaceholder.value = '';
                                                positions_SelectBox_pseudoPlaceholder.setAttribute("selected", "selected");
                                                positions_SelectBox_pseudoPlaceholder.setAttribute("hidden", "hidden");
                                                positions_SelectBox_pseudoPlaceholder.setAttribute("disabled", "disabled");
                                                positions_select_box.appendChild(positions_SelectBox_pseudoPlaceholder);
                                            };
                                            {
                                                [...dprmnts_pstns[String(___E.target.value)]].map(OnePst => {
                                                    var newPstOpt = document.createElement("option");
                                                    newPstOpt.innerText = String(OnePst);
                                                    newPstOpt.value = String(OnePst);
                                                    positions_select_box.appendChild(newPstOpt);
                                                });
                                            };
                                        };
                                    });
                                };
                                {
                                    var some_new_nav_bar = document.createElement("nav");
                                    some_new_nav_bar.style.marginTop = "5mm";
                                    some_new_nav_bar.style.marginLeft = "5cm";
                                    some_new_nav_bar.style.border = '0';
                                    some_new_nav_bar.style.borderRadius = "2mm";
                                    some_new_nav_bar.style.backgroundColor = "rgb(122, 122, 122)";
                                    some_new_nav_bar.style.padding = "1mm 2mm 1mm 2mm";
                                    some_new_nav_bar.style.display = "inline-block";
                                    some_new_nav_bar.setAttribute("class", "toRemoveStaff");
                                    document.querySelector("#crud-operations").appendChild(some_new_nav_bar);
                                };
                                {
                                    var someNewLeftSideBttn = document.createElement("button");
                                    someNewLeftSideBttn.innerText = "SAVE -> EDIT";
                                    someNewLeftSideBttn.setAttribute("id", "some-new-left-side-bttn");
                                    someNewLeftSideBttn.setAttribute("class", "addSomeNewLittleCSS");
                                    some_new_nav_bar.appendChild(someNewLeftSideBttn);
                                };
                                {
                                    var someNewRightSideBttn = document.createElement("button");
                                    someNewRightSideBttn.innerText = "DO NOT SAVE -> GO BACK";
                                    someNewRightSideBttn.style.marginLeft = "4mm";
                                    someNewRightSideBttn.setAttribute("id", "some-new-right-side-bttn");
                                    someNewRightSideBttn.setAttribute("class", "addSomeNewLittleCSS");
                                    some_new_nav_bar.appendChild(someNewRightSideBttn);
                                };
                                {
                                    document.querySelectorAll(".addSomeNewLittleCSS").forEach(_bEntry___ => {
                                        _bEntry___.style.border = '0';
                                        _bEntry___.style.backgroundColor = "rgb(0, 0, 0)";
                                        _bEntry___.style.color = "rgba(122, 244, 122, 1)";
                                        _bEntry___.style.borderRadius = "2mm";
                                        _bEntry___.style.padding = "1mm 2mm 1mm 2mm";
                                        _bEntry___.addEventListener("mouseenter", (_ev_0_) => {
                                            _ev_0_.target.style.cursor = "pointer";
                                            _ev_0_.target.style.backgroundColor = "rgb(122, 244, 122)";
                                            _ev_0_.target.style.color = "rgba(0, 0, 0, 1)";
                                        });
                                        _bEntry___.addEventListener("mouseleave", (_ev_1_) => {
                                            _ev_1_.target.style.backgroundColor = "rgb(0, 0, 0)";
                                            _ev_1_.target.style.color = "rgba(122, 244, 122, 1)";
                                        });
                                    });
                                };
                                {
                                    document.querySelector("#some-new-left-side-bttn").addEventListener("click", () => {
                                        var ___DEP = document.querySelector("#departments-select-box").value;
                                        var ___POS = document.querySelector("#positions-select-box").value;
                                        if (
                                            (___DEP !== '') &&
                                            (___POS !== '')
                                        ) {
                                            {
                                                var previous_DEP = '';
                                                var previous_POS = '';
                                            };
                                            {
                                                for (var ___iterator = 0; ___iterator <= emps_state.length - 1; ___iterator++) {
                                                    if (emps_state[___iterator]["eMail"]() === selected_emp_selected) {
                                                        previous_DEP = emps_state[___iterator]["department"];
                                                        previous_POS = emps_state[___iterator]["position"];
                                                        break;
                                                    };
                                                };
                                            };
                                            {
                                                if (
                                                    (previous_DEP === ___DEP) &&
                                                    (previous_POS === ___POS)
                                                ) {
                                                    alert(String.fromCodePoint(10060) + "\u00a0" + "Operation not possible,\nbecause those picked options do match exactly,\noptions which are already set for the Employee.");
                                                } else {
                                                    {
                                                        var memoi_third = Number(0);
                                                        for (var ___emp in emps_state) {
                                                            if (emps_state[___emp]["eMail"]() === selected_emp_selected) {
                                                                memoi_third = Number(___emp);
                                                                break;
                                                            } else { continue; };
                                                        };
                                                    };
                                                    {
                                                        var new_pseudo_copy______ = {
                                                            firstName: emps_state[memoi_third]["firstName"],
                                                            lastName: emps_state[memoi_third]["lastName"],
                                                            gender: emps_state[memoi_third]["gender"],
                                                            department: String(___DEP),
                                                            position: String(___POS),
                                                            eMail: emps_state[memoi_third]["eMail"],
                                                            employeeID: emps_state[memoi_third]["employeeID"],
                                                            startDate: emps_state[memoi_third]["startDate"],
                                                            endDate: emps_state[memoi_third]["endDate"],
                                                            salary: emps_state[memoi_third]["salary"]
                                                        };
                                                    };
                                                    {
                                                        emps_state.splice(memoi_third, 1);
                                                        emps_state.splice(memoi_third, 0, new_pseudo_copy______);
                                                    };
                                                    {
                                                        document.querySelector("#change-content-area").style.display = "initial";
                                                        document.querySelector("#data-nav").style.visibility = "initial";
                                                        document.querySelector("#crud-nav").style.visibility = "initial";
                                                        document.querySelector("#sort-nav").style.visibility = "initial";
                                                        document.querySelector("#filter-search-nav").style.visibility = "initial";
                                                        document.querySelector("#pagination-nav").style.visibility = "initial";
                                                        document.querySelector("#scrollbar-nav").style.visibility = "initial";
                                                        {
                                                            document.querySelectorAll(".toRemoveStaff").forEach(c_TRS => { c_TRS.remove(); });
                                                        };
                                                        {
                                                            remove_previous_rows();
                                                        };
                                                        {
                                                            add_next_rows();
                                                        };
                                                    };
                                                };
                                            };
                                        } else {
                                            alert(String.fromCodePoint(10060) + "\u00a0" + "Not valid inputs.");
                                        };
                                    });
                                };
                                {
                                    document.querySelector("#some-new-right-side-bttn").addEventListener("click", () => {
                                        document.querySelector("#change-content-area").style.display = "initial";
                                        document.querySelector("#data-nav").style.visibility = "initial";
                                        document.querySelector("#crud-nav").style.visibility = "initial";
                                        document.querySelector("#sort-nav").style.visibility = "initial";
                                        document.querySelector("#filter-search-nav").style.visibility = "initial";
                                        document.querySelector("#pagination-nav").style.visibility = "initial";
                                        document.querySelector("#scrollbar-nav").style.visibility = "initial";
                                        {
                                            document.querySelectorAll(".toRemoveStaff").forEach(c_TRS => { c_TRS.remove(); });
                                        };
                                    });
                                };
                            };
                            if (e_n_sEI_s.target.value === "START & END DATE") {
                                {
                                    let nunu_nav = document.createElement("nav");
                                    nunu_nav.style.marginTop = "1cm";
                                    nunu_nav.style.marginLeft = "3cm";
                                    nunu_nav.style.padding = "3mm 4mm 3mm 4mm";
                                    nunu_nav.style.border = '0';
                                    nunu_nav.style.borderRadius = "3mm";
                                    nunu_nav.style.backgroundColor = "rgb(122, 122, 122)";
                                    nunu_nav.style.display = "inline-block";
                                    nunu_nav.setAttribute("class", "toRemLately");
                                    nunu_nav.setAttribute("id", "nunu-nav");
                                    document.querySelector("#crud-operations").appendChild(nunu_nav);
                                };
                                {
                                    let firstBttn = document.createElement("button");
                                    firstBttn.innerHTML = `change <span style="font-size: 6mm;">${String.fromCodePoint(128073)}</span> START DATE`;
                                    firstBttn.setAttribute("class", "___do_CSS");
                                    firstBttn.setAttribute("id", "top-bttn");
                                    document.querySelector("#nunu-nav").appendChild(firstBttn);
                                };
                                {
                                    let first___lineBreako = document.createElement("br");
                                    document.querySelector("#nunu-nav").appendChild(first___lineBreako);
                                };
                                {
                                    let secondBttn = document.createElement("button");
                                    secondBttn.innerHTML = `change <span style="font-size: 6mm;">${String.fromCodePoint(128073)}</span> END DATE`;
                                    secondBttn.setAttribute("class", "___do_CSS");
                                    secondBttn.setAttribute("id", "middle-bttn");
                                    document.querySelector("#nunu-nav").appendChild(secondBttn);
                                };
                                {
                                    let second___lineBreako = document.createElement("br");
                                    document.querySelector("#nunu-nav").appendChild(second___lineBreako);
                                };
                                {
                                    let thirdBttn = document.createElement("button");
                                    thirdBttn.innerHTML = "Do Not Edit -> Go Back";
                                    thirdBttn.setAttribute("class", "___do_CSS");
                                    thirdBttn.setAttribute("id", "bottom-bttn");
                                    document.querySelector("#nunu-nav").appendChild(thirdBttn);
                                };
                                {
                                    document.querySelectorAll(".___do_CSS").forEach(b___ => {
                                        b___.style.cursor = "pointer";
                                        b___.style.border = '0';
                                        b___.style.borderRadius = "3mm";
                                        b___.style.backgroundColor = "rgb(0, 0, 0)";
                                        b___.style.color = "rgba(122, 244, 122, 1)";
                                        b___.style.margin = "2mm 4mm 2mm 4mm";
                                        b___.style.padding = "1mm 2mm 1mm 2mm";
                                        b___.style.fontSize = "4.4mm";
                                        b___.style.fontFamily = "cursive";
                                        b___.addEventListener("mouseenter", (_e_ME) => {
                                            _e_ME.target.style.cursor = "pointer";
                                            _e_ME.target.style.backgroundColor = "rgb(122, 244, 122)";
                                            _e_ME.target.style.color = "rgba(0, 0, 0, 1)";
                                        });
                                        b___.addEventListener("mouseleave", (_e_ML) => {
                                            _e_ML.target.style.backgroundColor = "rgb(0, 0, 0)";
                                            _e_ML.target.style.color = "rgba(122, 244, 122, 1)";
                                        });
                                    });
                                };
                                {
                                    document.querySelector("#top-bttn").addEventListener("click", () => {
                                        {
                                            document.querySelector(".toRemLately").remove();
                                        };
                                        {
                                            let nunu_p_info = document.createElement('p');
                                            nunu_p_info.innerText = "Pick-choose-select,\na START DATE.";
                                            nunu_p_info.style.marginTop = "1cm";
                                            nunu_p_info.style.marginLeft = "1cm";
                                            nunu_p_info.style.color = "rgba(222, 222, 222, 1)";
                                            nunu_p_info.style.fontFamily = "monospace";
                                            nunu_p_info.style.fontSize = "4mm";
                                            nunu_p_info.setAttribute("class", "lateRem");
                                            document.querySelector("#crud-operations").appendChild(nunu_p_info);
                                        };
                                        {
                                            let nunu_pick_StartDate = document.createElement("input");
                                            nunu_pick_StartDate.style.marginTop = "1mm";
                                            nunu_pick_StartDate.style.marginLeft = "1cm";
                                            nunu_pick_StartDate.setAttribute("type", "date");
                                            nunu_pick_StartDate.setAttribute("min", "2010-01-01");
                                            nunu_pick_StartDate.setAttribute("max", "2030-12-31");
                                            nunu_pick_StartDate.setAttribute("id", "nunu-pick-start-date");
                                            nunu_pick_StartDate.setAttribute("class", "lateRem");
                                            document.querySelector("#crud-operations").appendChild(nunu_pick_StartDate);
                                        };
                                        {
                                            let nunu_hint__ = document.createElement('p');
                                            nunu_hint__.innerText = "...HINT : <year2010, year2030>";
                                            nunu_hint__.style.display = "inline-block";
                                            nunu_hint__.style.marginLeft = "2mm";
                                            nunu_hint__.style.color = "rgba(222, 222, 222, 1)";
                                            nunu_hint__.style.fontFamily = "monospace";
                                            nunu_hint__.style.fontSize = "4mm";
                                            nunu_hint__.setAttribute("class", "lateRem");
                                            document.querySelector("#crud-operations").appendChild(nunu_hint__);
                                        };
                                        {
                                            let nu_nav_SD = document.createElement("nav");
                                            nu_nav_SD.style.marginLeft = "1cm";
                                            nu_nav_SD.style.marginTop = "5mm";
                                            nu_nav_SD.style.border = '0';
                                            nu_nav_SD.style.borderRadius = "3mm";
                                            nu_nav_SD.style.padding = "2mm 2mm 2mm 2mm";
                                            nu_nav_SD.style.backgroundColor = "rgb(122, 122, 122)";
                                            nu_nav_SD.style.display = "inline-block";
                                            nu_nav_SD.setAttribute("class", "lateRem");
                                            nu_nav_SD.setAttribute("id", "nu-nav-start-date");
                                            document.querySelector("#crud-operations").appendChild(nu_nav_SD);
                                        };
                                        {
                                            let new_leftie_bttn = document.createElement("button");
                                            new_leftie_bttn.innerText = "SAVE -> EDIT";
                                            new_leftie_bttn.setAttribute("class", "__some_CSS");
                                            new_leftie_bttn.setAttribute("id", "new-leftie-bttn");
                                            document.querySelector("#nu-nav-start-date").appendChild(new_leftie_bttn);
                                        };
                                        {
                                            let new_rightie_bttn = document.createElement("button");
                                            new_rightie_bttn.style.marginLeft = "3mm";
                                            new_rightie_bttn.innerText = "DO NOT SAVE -> GO BACK";
                                            new_rightie_bttn.setAttribute("class", "__some_CSS");
                                            new_rightie_bttn.setAttribute("id", "new-rightie-bttn");
                                            document.querySelector("#nu-nav-start-date").appendChild(new_rightie_bttn);
                                        };
                                        {
                                            document.querySelectorAll(".__some_CSS").forEach(_b___ => {
                                                _b___.style.backgroundColor = "rgb(0, 0, 0)";
                                                _b___.style.color = "rgba(122, 244, 122, 1)";
                                                _b___.style.border = '0';
                                                _b___.style.borderRadius = "1mm";
                                                _b___.addEventListener("mouseenter", (_e_ME__) => {
                                                    _e_ME__.target.style.cursor = "pointer";
                                                    _e_ME__.target.style.backgroundColor = "rgb(122, 244, 122)";
                                                    _e_ME__.target.style.color = "rgba(0, 0, 0, 1)";
                                                });
                                                _b___.addEventListener("mouseleave", (_e_ML__) => {
                                                    _e_ML__.target.style.backgroundColor = "rgb(0, 0, 0)";
                                                    _e_ML__.target.style.color = "rgba(122, 244, 122, 1)";
                                                });
                                            });
                                        };
                                        {
                                            document.querySelector("#new-leftie-bttn").addEventListener("click", () => {
                                                if (document.querySelector("#nunu-pick-start-date").value !== '') {
                                                    let whole_val = String(document.querySelector("#nunu-pick-start-date").value);
                                                    var ___dd = String(whole_val).split('-')[2];
                                                    var ___mm = String(whole_val).split('-')[1];
                                                    var ___yyyy = String(whole_val).split('-')[0];
                                                    if (
                                                        (Number(___yyyy) < 2010) ||
                                                        (Number(___yyyy) > 2030)
                                                    ) {
                                                        alert(String.fromCodePoint(10060) + "\u00a0" + "Year is not within valid interval.");
                                                    } else {
                                                        {
                                                            var someAnotherMemoi = Number(0);
                                                            for (let emp_iterator = 0; emp_iterator <= emps_state.length - 1; emp_iterator++) {
                                                                if (emps_state[emp_iterator]["eMail"]() === selected_emp_selected) {
                                                                    someAnotherMemoi = emp_iterator;
                                                                    break;
                                                                } else { continue; };
                                                            };
                                                        };
                                                        {
                                                            let nunu_pseudo_copy = {
                                                                firstName: emps_state[someAnotherMemoi]["firstName"],
                                                                lastName: emps_state[someAnotherMemoi]["lastName"],
                                                                gender: emps_state[someAnotherMemoi]["gender"],
                                                                department: emps_state[someAnotherMemoi]["department"],
                                                                position: emps_state[someAnotherMemoi]["position"],
                                                                eMail: emps_state[someAnotherMemoi]["eMail"],
                                                                employeeID: emps_state[someAnotherMemoi]["employeeID"],
                                                                startDate: String(___mm + '-' + ___dd + '-' + ___yyyy),
                                                                endDate: emps_state[someAnotherMemoi]["endDate"],
                                                                salary: emps_state[someAnotherMemoi]["salary"]
                                                            };
                                                            emps_state.splice(someAnotherMemoi, 1);
                                                            emps_state.splice(someAnotherMemoi, 0, nunu_pseudo_copy);
                                                        };
                                                        {
                                                            document.querySelectorAll(".lateRem").forEach(c_LR => { c_LR.remove(); });
                                                        };
                                                        {
                                                            document.querySelector("#change-content-area").style.display = "initial";
                                                            document.querySelector("#data-nav").style.visibility = "initial";
                                                            document.querySelector("#crud-nav").style.visibility = "initial";
                                                            document.querySelector("#sort-nav").style.visibility = "initial";
                                                            document.querySelector("#filter-search-nav").style.visibility = "initial";
                                                            document.querySelector("#pagination-nav").style.visibility = "initial";
                                                            document.querySelector("#scrollbar-nav").style.visibility = "initial";
                                                        };
                                                        {
                                                            remove_previous_rows();
                                                            add_next_rows();
                                                        };
                                                    };
                                                } else {
                                                    alert(String.fromCodePoint(10060) + "\u00a0" + "Not valid input.");
                                                };
                                            });
                                        };
                                        {
                                            document.querySelector("#new-rightie-bttn").addEventListener("click", () => {
                                                {
                                                    document.querySelectorAll(".lateRem").forEach(c_LR => { c_LR.remove(); });
                                                };
                                                {
                                                    document.querySelector("#change-content-area").style.display = "initial";
                                                    document.querySelector("#data-nav").style.visibility = "initial";
                                                    document.querySelector("#crud-nav").style.visibility = "initial";
                                                    document.querySelector("#sort-nav").style.visibility = "initial";
                                                    document.querySelector("#filter-search-nav").style.visibility = "initial";
                                                    document.querySelector("#pagination-nav").style.visibility = "initial";
                                                    document.querySelector("#scrollbar-nav").style.visibility = "initial";
                                                };
                                            });
                                        };
                                    });
                                };
                                {
                                    document.querySelector("#middle-bttn").addEventListener("click", () => {
                                        {
                                            document.querySelector(".toRemLately").remove();
                                        };
                                        {
                                            let someNuNu_nav = document.createElement("nav");
                                            someNuNu_nav.style.marginTop = "15mm";
                                            someNuNu_nav.style.marginLeft = "15mm";
                                            someNuNu_nav.style.backgroundColor = "rgb(122, 122, 122)";
                                            someNuNu_nav.style.border = '0';
                                            someNuNu_nav.style.borderRadius = "3mm";
                                            someNuNu_nav.style.padding = "4mm 5mm 4mm 5mm";
                                            someNuNu_nav.style.display = "inline-block";
                                            someNuNu_nav.setAttribute("class", "toRemoveLater");
                                            someNuNu_nav.setAttribute("id", "some-nu-nu-nav");
                                            document.querySelector("#crud-operations").appendChild(someNuNu_nav);
                                        };
                                        {
                                            let bttnOpt_first = document.createElement("button");
                                            bttnOpt_first.innerText = "Set an Empty Undefined End Date.";
                                            bttnOpt_first.setAttribute("id", "bttn-opt-first");
                                            bttnOpt_first.setAttribute("class", "___some_CSS");
                                            document.querySelector("#some-nu-nu-nav").appendChild(bttnOpt_first);
                                        };
                                        {
                                            let ___lineBreak__ = document.createElement("br");
                                            document.querySelector("#some-nu-nu-nav").appendChild(___lineBreak__);
                                        };
                                        {
                                            let bttnOpt_second = document.createElement("button");
                                            bttnOpt_second.innerText = "Pick some the Exact End Date.";
                                            bttnOpt_second.setAttribute("id", "bttn-opt-second");
                                            bttnOpt_second.setAttribute("class", "___some_CSS");
                                            document.querySelector("#some-nu-nu-nav").appendChild(bttnOpt_second);
                                        };
                                        {
                                            document.querySelectorAll(".___some_CSS").forEach(bttn__ => {
                                                bttn__.style.cursor = "pointer";
                                                bttn__.style.border = '0';
                                                bttn__.style.backgroundColor = "rgb(0, 0, 0)";
                                                bttn__.style.color = "rgba(122, 244, 122, 1)";
                                                bttn__.style.margin = "2mm 1mm 2mm 1mm";
                                                bttn__.style.padding = "2mm 2mm 2mm 2mm";
                                                bttn__.style.borderRadius = "3mm";
                                                bttn__.style.fontFamily = "cursive";
                                                bttn__.style.fontWeight = "900";
                                                bttn__.style.fontSize = "4mm";
                                                bttn__.addEventListener("mouseenter", (_e__ME_) => {
                                                    _e__ME_.target.style.cursor = "pointer";
                                                    _e__ME_.target.style.backgroundColor = "rgb(122, 244, 122)";
                                                    _e__ME_.target.style.color = "rgba(0, 0, 0, 1)";
                                                });
                                                bttn__.addEventListener("mouseleave", (_e__ML_) => {
                                                    _e__ML_.target.style.backgroundColor = "rgb(0, 0, 0)";
                                                    _e__ML_.target.style.color = "rgba(122, 244, 122, 1)";
                                                });
                                            });
                                        };
                                        {
                                            document.querySelector("#bttn-opt-first").addEventListener("click", () => {
                                                {
                                                    var _another_memoi_ = Number(0);
                                                    for (let _iterato_ = 0; _iterato_ <= emps_state.length - 1; _iterato_++) {
                                                        if (emps_state[_iterato_]["eMail"]() === selected_emp_selected) {
                                                            _another_memoi_ = Number(_iterato_);
                                                            break;
                                                        } else { continue; };
                                                    };
                                                };
                                                {
                                                    let newnu_pseudo_copy = {
                                                        firstName: emps_state[_another_memoi_]["firstName"],
                                                        lastName: emps_state[_another_memoi_]["lastName"],
                                                        gender: emps_state[_another_memoi_]["gender"],
                                                        department: emps_state[_another_memoi_]["department"],
                                                        position: emps_state[_another_memoi_]["position"],
                                                        eMail: emps_state[_another_memoi_]["eMail"],
                                                        employeeID: emps_state[_another_memoi_]["employeeID"],
                                                        startDate: emps_state[_another_memoi_]["startDate"],
                                                        endDate: '',
                                                        salary: emps_state[_another_memoi_]["salary"]
                                                    };
                                                    emps_state.splice(_another_memoi_, 1);
                                                    emps_state.splice(_another_memoi_, 0, newnu_pseudo_copy);
                                                };
                                                {
                                                    document.querySelector(".toRemoveLater").remove();
                                                };
                                                {
                                                    document.querySelector("#change-content-area").style.display = "initial";
                                                    document.querySelector("#data-nav").style.visibility = "initial";
                                                    document.querySelector("#crud-nav").style.visibility = "initial";
                                                    document.querySelector("#sort-nav").style.visibility = "initial";
                                                    document.querySelector("#filter-search-nav").style.visibility = "initial";
                                                    document.querySelector("#pagination-nav").style.visibility = "initial";
                                                    document.querySelector("#scrollbar-nav").style.visibility = "initial";
                                                };
                                                {
                                                    remove_previous_rows();
                                                };
                                                {
                                                    add_next_rows();
                                                };
                                            });
                                        };
                                        {
                                            document.querySelector("#bttn-opt-second").addEventListener("click", () => {
                                                {
                                                    document.querySelector(".toRemoveLater").remove();
                                                };
                                                {
                                                    let p_info____ = document.createElement('p');
                                                    p_info____.innerText = "Pick-choose-select an Exact End Date.\n\n...Hint : valid interval <year2010, year2030>.";
                                                    p_info____.style.marginTop = "1cm";
                                                    p_info____.style.marginLeft = "1cm";
                                                    p_info____.style.color = "rgba(222, 222, 222, 1)";
                                                    p_info____.style.fontFamily = "cursive";
                                                    p_info____.style.fontWeight = "900";
                                                    p_info____.setAttribute("class", "laterOnRemoval");
                                                    document.querySelector("#crud-operations").appendChild(p_info____);
                                                };
                                                {
                                                    let new_nu_inp = document.createElement("input");
                                                    new_nu_inp.style.marginTop = "1mm";
                                                    new_nu_inp.style.marginLeft = "2cm";
                                                    new_nu_inp.setAttribute("type", "date");
                                                    new_nu_inp.setAttribute("min", "2010-01-01");
                                                    new_nu_inp.setAttribute("max", "2030-12-31");
                                                    new_nu_inp.setAttribute("class", "laterOnRemoval");
                                                    new_nu_inp.setAttribute("id", "new-nu-inp");
                                                    document.querySelector("#crud-operations").appendChild(new_nu_inp);
                                                };
                                                {
                                                    let some_nunu_breako = document.createElement("br");
                                                    some_nunu_breako.setAttribute("class", "laterOnRemoval");
                                                    document.querySelector("#crud-operations").appendChild(some_nunu_breako);
                                                };
                                                {
                                                    let nunu_nav_newnu = document.createElement("nav");
                                                    nunu_nav_newnu.style.backgroundColor = "rgb(122, 122, 122)";
                                                    nunu_nav_newnu.style.padding = "2mm 2mm 2mm 2mm";
                                                    nunu_nav_newnu.style.border = '0';
                                                    nunu_nav_newnu.style.borderRadius = "3mm";
                                                    nunu_nav_newnu.style.marginTop = "5mm";
                                                    nunu_nav_newnu.style.marginLeft = "1cm";
                                                    nunu_nav_newnu.style.display = "inline-block";
                                                    nunu_nav_newnu.setAttribute("id", "nunu-nav-newnu");
                                                    nunu_nav_newnu.setAttribute("class", "laterOnRemoval");
                                                    document.querySelector("#crud-operations").appendChild(nunu_nav_newnu);
                                                };
                                                {
                                                    let leftie_bttn___ = document.createElement("button");
                                                    leftie_bttn___.setAttribute("class", "someCSSDoLittle");
                                                    leftie_bttn___.setAttribute("id", "leftie-bttn-endie");
                                                    leftie_bttn___.innerText = "DO EDIT -> SAVE";
                                                    document.querySelector("#nunu-nav-newnu").appendChild(leftie_bttn___);
                                                };
                                                {
                                                    let rightie_bttn___ = document.createElement("button");
                                                    rightie_bttn___.setAttribute("class", "someCSSDoLittle");
                                                    rightie_bttn___.setAttribute("id", "rightie-bttn-endie");
                                                    rightie_bttn___.innerText = "Do Not Edit -> Go Back";
                                                    document.querySelector("#nunu-nav-newnu").appendChild(rightie_bttn___);
                                                };
                                                {
                                                    document.querySelectorAll(".someCSSDoLittle").forEach(bDL => {
                                                        bDL.style.border = "1mm solid rgba(122, 244, 122, 1)";
                                                        bDL.style.borderRadius = "3mm";
                                                        bDL.style.backgroundColor = "rgb(0, 0, 0)";
                                                        bDL.style.color = "rgba(122, 244, 122, 1)";
                                                        bDL.style.fontFamily = "cursive";
                                                        bDL.style.fontWeight = "900";
                                                        bDL.style.fontSize = "4mm";
                                                        bDL.style.padding = "1mm 3mm 1mm 3mm";
                                                        bDL.style.margin = "1mm 1mm 1mm 1mm";
                                                        bDL.addEventListener("mouseenter", (_bttn_ME_e_) => {
                                                            _bttn_ME_e_.target.style.cursor = "pointer";
                                                            _bttn_ME_e_.target.style.border = "1mm solid rgba(0, 0, 0, 1)";
                                                            _bttn_ME_e_.target.style.backgroundColor = "rgb(122, 244, 122)";
                                                            _bttn_ME_e_.target.style.color = "rgba(0, 0, 0, 1)";
                                                        });
                                                        bDL.addEventListener("mouseleave", (_bttn_ML_e_) => {
                                                            _bttn_ML_e_.target.style.border = "1mm solid rgba(122, 244, 122, 1)";
                                                            _bttn_ML_e_.target.style.backgroundColor = "rgb(0, 0, 0)";
                                                            _bttn_ML_e_.target.style.color = "rgba(122, 244, 122, 1)";
                                                        });
                                                    });
                                                };
                                                {
                                                    document.querySelector("#leftie-bttn-endie").addEventListener("click", () => {
                                                        {
                                                            let endie_date_val = document.querySelector("#new-nu-inp").value;
                                                            if (
                                                                endie_date_val !== ''
                                                            ) {
                                                                if (
                                                                    (Number(String(endie_date_val).split('-')[0]) < Number(2010)) ||
                                                                    (Number(String(endie_date_val).split('-')[0]) > Number(2030))
                                                                ) {
                                                                    alert(String.fromCodePoint(10060) + "\u00a0" + "Year not in valid range.");
                                                                } else {
                                                                    {
                                                                        let imemo_not_imelo = Number(0);
                                                                        for (let emp_as_____i in emps_state) {
                                                                            if (emps_state[emp_as_____i]["eMail"]() === selected_emp_selected) {
                                                                                imemo_not_imelo = Number(emp_as_____i);
                                                                                break;
                                                                            } else { continue; };
                                                                        };
                                                                        let nunu_pseudo_copy______ = {
                                                                            firstName: emps_state[imemo_not_imelo]["firstName"],
                                                                            lastName: emps_state[imemo_not_imelo]["lastName"],
                                                                            gender: emps_state[imemo_not_imelo]["gender"],
                                                                            department: emps_state[imemo_not_imelo]["department"],
                                                                            position: emps_state[imemo_not_imelo]["position"],
                                                                            eMail: emps_state[imemo_not_imelo]["eMail"],
                                                                            employeeID: emps_state[imemo_not_imelo]["employeeID"],
                                                                            startDate: emps_state[imemo_not_imelo]["startDate"],
                                                                            endDate: String(String(endie_date_val).split('-')[1] + '-' + String(endie_date_val).split('-')[2] + '-' + String(endie_date_val).split('-')[0]),
                                                                            salary: emps_state[imemo_not_imelo]["salary"]
                                                                        };
                                                                        emps_state.splice(imemo_not_imelo, 1);
                                                                        emps_state.splice(imemo_not_imelo, 0, nunu_pseudo_copy______);
                                                                    };
                                                                    {
                                                                        {
                                                                            document.querySelectorAll(".laterOnRemoval").forEach(pseudoElementEntry => {
                                                                                pseudoElementEntry.remove();
                                                                            });
                                                                        };
                                                                        {
                                                                            document.querySelector("#change-content-area").style.display = "initial";
                                                                            document.querySelector("#data-nav").style.visibility = "initial";
                                                                            document.querySelector("#crud-nav").style.visibility = "initial";
                                                                            document.querySelector("#sort-nav").style.visibility = "initial";
                                                                            document.querySelector("#filter-search-nav").style.visibility = "initial";
                                                                            document.querySelector("#pagination-nav").style.visibility = "initial";
                                                                            document.querySelector("#scrollbar-nav").style.visibility = "initial";
                                                                        };
                                                                        {
                                                                            remove_previous_rows();
                                                                        };
                                                                        {
                                                                            add_next_rows();
                                                                        };
                                                                    };
                                                                };
                                                            } else {
                                                                alert(String.fromCodePoint(10060) + "\u00a0" + "Not valid input.");
                                                            };
                                                        };
                                                    });
                                                };
                                                {
                                                    document.querySelector("#rightie-bttn-endie").addEventListener("click", () => {
                                                        {
                                                            document.querySelectorAll(".laterOnRemoval").forEach(pseudoElementEntry => {
                                                                pseudoElementEntry.remove();
                                                            });
                                                        };
                                                        {
                                                            document.querySelector("#change-content-area").style.display = "initial";
                                                            document.querySelector("#data-nav").style.visibility = "initial";
                                                            document.querySelector("#crud-nav").style.visibility = "initial";
                                                            document.querySelector("#sort-nav").style.visibility = "initial";
                                                            document.querySelector("#filter-search-nav").style.visibility = "initial";
                                                            document.querySelector("#pagination-nav").style.visibility = "initial";
                                                            document.querySelector("#scrollbar-nav").style.visibility = "initial";
                                                        };
                                                    });
                                                };
                                            });
                                        };
                                    });
                                };
                                {
                                    document.querySelector("#bottom-bttn").addEventListener("click", () => {
                                        {
                                            document.querySelector("#change-content-area").style.display = "initial";
                                            document.querySelector("#data-nav").style.visibility = "initial";
                                            document.querySelector("#crud-nav").style.visibility = "initial";
                                            document.querySelector("#sort-nav").style.visibility = "initial";
                                            document.querySelector("#filter-search-nav").style.visibility = "initial";
                                            document.querySelector("#pagination-nav").style.visibility = "initial";
                                            document.querySelector("#scrollbar-nav").style.visibility = "initial";
                                        };
                                        {
                                            document.querySelector(".toRemLately").remove();
                                        };
                                    });
                                };
                            };
                            if (e_n_sEI_s.target.value === "SALARY") {
                                {
                                    let nunu_p_info____ = document.createElement('p');
                                    nunu_p_info____.style.marginTop = "1cm";
                                    nunu_p_info____.style.marginLeft = "1cm";
                                    nunu_p_info____.style.fontFamily = "cursive";
                                    nunu_p_info____.style.fontWeight = "900";
                                    nunu_p_info____.style.fontSize = "4mm";
                                    nunu_p_info____.style.color = "rgba(222, 222, 222, 1)";
                                    nunu_p_info____.innerText = "Enter the value for a SALARY.\n\n... HINT : Valid amount within interval <1000, 9999>.";
                                    nunu_p_info____.setAttribute("class", "pseudoElementRemovalLately");
                                    document.querySelector("#crud-operations").appendChild(nunu_p_info____);
                                };
                                {
                                    let nunu_inp___ = document.createElement("input");
                                    nunu_inp___.placeholder = String.fromCodePoint(128073) + "\u00a0\u00a0$ALAR\u00a5\u00a0\u00a0\u00a0...\u20ac";
                                    nunu_inp___.style.value = '';
                                    nunu_inp___.style.width = "3cm";
                                    nunu_inp___.style.marginTop = "2mm";
                                    nunu_inp___.style.marginLeft = "3cm";
                                    nunu_inp___.setAttribute("type", "text");
                                    nunu_inp___.setAttribute("maxlength", 4);
                                    nunu_inp___.setAttribute("id", "nunu-inp");
                                    nunu_inp___.setAttribute("class", "pseudoElementRemovalLately");
                                    document.querySelector("#crud-operations").appendChild(nunu_inp___);
                                };
                                {
                                    let lineBr___ = document.createElement("br");
                                    lineBr___.setAttribute("class", "pseudoElementRemovalLately");
                                    document.querySelector("#crud-operations").appendChild(lineBr___);
                                };
                                {
                                    let nunu_nav_nav = document.createElement("nav");
                                    nunu_nav_nav.style.marginTop = "5mm";
                                    nunu_nav_nav.style.marginLeft = "1.5cm";
                                    nunu_nav_nav.style.border = '0';
                                    nunu_nav_nav.style.borderRadius = "3mm";
                                    nunu_nav_nav.style.padding = "2mm 2mm 2mm 2mm";
                                    nunu_nav_nav.style.backgroundColor = "rgb(122, 122, 122)";
                                    nunu_nav_nav.style.display = "inline-block";
                                    nunu_nav_nav.setAttribute("id", "nunu-nav-nav");
                                    nunu_nav_nav.setAttribute("class", "pseudoElementRemovalLately");
                                    document.querySelector("#crud-operations").appendChild(nunu_nav_nav);
                                };
                                {
                                    let nunu_leftie = document.createElement("button");
                                    nunu_leftie.innerText = "edit -> save";
                                    nunu_leftie.setAttribute("id", "nunu-leftie");
                                    nunu_leftie.setAttribute("class", "doSomeeCSS")
                                    document.querySelector("#nunu-nav-nav").appendChild(nunu_leftie);
                                };
                                {
                                    let nunu_rightie = document.createElement("button");
                                    nunu_rightie.style.marginLeft = "3mm";
                                    nunu_rightie.innerText = "do not edit -> go back";
                                    nunu_rightie.setAttribute("id", "nunu-rightie");
                                    nunu_rightie.setAttribute("class", "doSomeeCSS");
                                    document.querySelector("#nunu-nav-nav").appendChild(nunu_rightie);
                                };
                                {
                                    document.querySelectorAll(".doSomeeCSS").forEach(bttn_bttn => {
                                        bttn_bttn.style.border = "1mm solid rgba(122, 244, 122, 1)";
                                        bttn_bttn.style.backgroundColor = "rgb(0, 0, 0)";
                                        bttn_bttn.style.color = "rgba(122, 244, 122, 1)";
                                        bttn_bttn.style.fontFamily = "cursive";
                                        bttn_bttn.style.fontWeight = "900";
                                        bttn_bttn.style.fontSize = "4mm";
                                        bttn_bttn.style.borderRadius = "3mm";
                                        bttn_bttn.style.padding = "1mm 2mm 1mm 2mm";
                                        bttn_bttn.addEventListener("mouseenter", (___e_ME_) => {
                                            ___e_ME_.target.style.cursor = "pointer";
                                            ___e_ME_.target.style.backgroundColor = "rgb(122, 244, 122)";
                                            ___e_ME_.target.style.color = "rgba(0, 0, 0, 1)";
                                            ___e_ME_.target.style.border = "1mm solid rgba(0, 0, 0, 1)";
                                        });
                                        bttn_bttn.addEventListener("mouseleave", (___e_ML_) => {
                                            ___e_ML_.target.style.backgroundColor = "rgb(0, 0, 0)";
                                            ___e_ML_.target.style.color = "rgba(122, 244, 122, 1)";
                                            ___e_ML_.target.style.border = "1mm solid rgba(122, 244, 122, 1)";
                                        });
                                    });
                                };
                                {
                                    document.querySelector("#nunu-inp").addEventListener("input", (_evento___) => {
                                        let nunu_arr = [..._evento___.target.value].map(one_char_subString => one_char_subString.charCodeAt());
                                        if (nunu_arr.length === 1) {
                                            if (
                                                (nunu_arr[0] < 49) ||
                                                (nunu_arr[0] > 57)
                                            ) {
                                                alert(String.fromCodePoint(10060) + "\u00a0" + "Not valid input.");
                                                document.querySelector("#nunu-inp").value = '';
                                            };
                                        };
                                        if (nunu_arr.length > 1) {
                                            if (
                                                (nunu_arr[nunu_arr.length - 1] < 48) ||
                                                (nunu_arr[nunu_arr.length - 1] > 57)
                                            ) {
                                                alert(String.fromCodePoint(10060) + "\u00a0" + "Not valid input.");
                                                document.querySelector("#nunu-inp").value = '';
                                            };
                                        };
                                    });
                                };
                                {
                                    document.querySelector("#nunu-leftie").onclick = () => {
                                        {
                                            let val_val_check = Number(String(document.querySelector("#nunu-inp").value));
                                            if (
                                                (val_val_check < 1000) ||
                                                (val_val_check > 9999)
                                            ) {
                                                alert(String.fromCodePoint(10060) + "\u00a0" + "Not valid input.");
                                                document.querySelector("#nunu-inp").value = '';
                                            } else {
                                                {
                                                    var nunu_memoII_ = Number(0);
                                                    for (let _indx_iterator_ = 0; _indx_iterator_ <= emps_state.length - 1; _indx_iterator_++) {
                                                        if (emps_state[_indx_iterator_]["eMail"]() === selected_emp_selected) {
                                                            nunu_memoII_ = Number(_indx_iterator_);
                                                            break;
                                                        } else { continue; };
                                                    };
                                                };
                                                {
                                                    let val_to_insert = () => {
                                                        return (
                                                            Number(document.querySelector("#nunu-inp").value)
                                                        );
                                                    };
                                                    let nunu_pseudoCopCop = {
                                                        firstName: emps_state[nunu_memoII_]["firstName"],
                                                        lastName: emps_state[nunu_memoII_]["lastName"],
                                                        gender: emps_state[nunu_memoII_]["gender"],
                                                        department: emps_state[nunu_memoII_]["department"],
                                                        position: emps_state[nunu_memoII_]["position"],
                                                        eMail: emps_state[nunu_memoII_]["eMail"],
                                                        employeeID: emps_state[nunu_memoII_]["employeeID"],
                                                        startDate: emps_state[nunu_memoII_]["startDate"],
                                                        endDate: emps_state[nunu_memoII_]["endDate"],
                                                        salary: val_to_insert()
                                                    };
                                                    emps_state.splice(nunu_memoII_, 1);
                                                    emps_state.splice(nunu_memoII_, 0, nunu_pseudoCopCop);
                                                };
                                                {
                                                    document.querySelector("#change-content-area").style.display = "initial";
                                                    document.querySelector("#data-nav").style.visibility = "initial";
                                                    document.querySelector("#crud-nav").style.visibility = "initial";
                                                    document.querySelector("#sort-nav").style.visibility = "initial";
                                                    document.querySelector("#filter-search-nav").style.visibility = "initial";
                                                    document.querySelector("#pagination-nav").style.visibility = "initial";
                                                    document.querySelector("#scrollbar-nav").style.visibility = "initial";
                                                };
                                                {
                                                    document.querySelectorAll(".pseudoElementRemovalLately").forEach(c_pERL => {
                                                        c_pERL.remove();
                                                    });
                                                };
                                            };
                                        };
                                    };
                                };
                                {
                                    document.querySelector("#nunu-rightie").onclick = () => {
                                        {
                                            document.querySelector("#change-content-area").style.display = "initial";
                                            document.querySelector("#data-nav").style.visibility = "initial";
                                            document.querySelector("#crud-nav").style.visibility = "initial";
                                            document.querySelector("#sort-nav").style.visibility = "initial";
                                            document.querySelector("#filter-search-nav").style.visibility = "initial";
                                            document.querySelector("#pagination-nav").style.visibility = "initial";
                                            document.querySelector("#scrollbar-nav").style.visibility = "initial";
                                        };
                                        {
                                            document.querySelectorAll(".pseudoElementRemovalLately").forEach(c_pERL => {
                                                c_pERL.remove();
                                            });
                                        };
                                    };
                                };
                            };
                        });
                    };
                });
            };
        };
    });
} catch (errr) { if (errr) console.log(errr); } finally { };

try {
    document.querySelector("#profile-bttn").onclick = () => {
        {
            myHeadIsBugsOnTopOfBugs_xD();
        };
        if (emps_state.length === 0) {
            alert(String.fromCodePoint(10060) + "\u00a0" + "Operation not possible yet,\ndue to an empty Employees Table List.");
        } else {
            {
                document.querySelector("#change-content-area").style.display = "none";
                document.querySelector("#data-nav").style.visibility = "hidden";
                document.querySelector("#crud-nav").style.visibility = "hidden";
                document.querySelector("#sort-nav").style.visibility = "hidden";
                document.querySelector("#filter-search-nav").style.visibility = "hidden";
                document.querySelector("#pagination-nav").style.visibility = "hidden";
                document.querySelector("#scrollbar-nav").style.visibility = "hidden";
            };
            {
                let nunu_p___info = document.createElement('p');
                nunu_p___info.style.marginTop = "1cm";
                nunu_p___info.style.marginLeft = "1cm";
                nunu_p___info.style.fontFamily = "cursive";
                nunu_p___info.style.color = "rgba(222, 222, 222, 1)";
                nunu_p___info.style.fontWeight = "900";
                nunu_p___info.innerText = "Pick-choose-select an Employee,\nof Whom the Employee Profile Card,\n You want to see.";
                nunu_p___info.setAttribute("class", "toRemovalLater");
                document.querySelector("#crud-operations").appendChild(nunu_p___info);
            };
            {
                let nunu_select_box = document.createElement("select");
                nunu_select_box.style.marginTop = "1mm";
                nunu_select_box.style.marginLeft = "1cm";
                nunu_select_box.setAttribute("id", "nunu-select-box");
                nunu_select_box.setAttribute("class", "toRemovalLater");
                document.querySelector("#crud-operations").appendChild(nunu_select_box);
            };
            {
                let pseudo_default_placeholder = document.createElement("option");
                pseudo_default_placeholder.innerText = "Employees";
                pseudo_default_placeholder.value = '';
                pseudo_default_placeholder.setAttribute("selected", "selected");
                pseudo_default_placeholder.setAttribute("hidden", "hidden");
                pseudo_default_placeholder.setAttribute("disabled", "disabled");
                document.querySelector("#nunu-select-box").appendChild(pseudo_default_placeholder);
            };
            {
                let arr_of_eMail = [];
                for (let ___emp_ in emps_state) {
                    arr_of_eMail.push(emps_state[___emp_]["eMail"]());
                };
                [...arr_of_eMail].map(one_eMail => {
                    let one_mail_opt = document.createElement("option");
                    one_mail_opt.innerText = String(one_eMail);
                    one_mail_opt.value = String(one_eMail);
                    document.querySelector("#nunu-select-box").appendChild(one_mail_opt);
                });
            };
            {
                let picked_emp = '';
                document.querySelector("#nunu-select-box").addEventListener("input", (e___) => {
                    picked_emp = e___.target.value;
                    {
                        document.querySelectorAll(".toRemovalLater").forEach(pseudo_element => {
                            pseudo_element.remove();
                        });
                    };
                    {
                        let nunu_cop = {
                            firstName: String(''),
                            lastName: String(''),
                            gender: String(''),
                            department: String(''),
                            position: String(''),
                            eMail: () => { return (String('')); },
                            employeeID: String(''),
                            startDate: String(''),
                            endDate: String(''),
                            salary: Number(0)
                        };
                        for (let emp__ in emps_state) {
                            if (
                                emps_state[emp__]["eMail"]() === picked_emp
                            ) {
                                nunu_cop["firstName"] = emps_state[emp__]["firstName"];
                                nunu_cop["lastName"] = emps_state[emp__]["lastName"];
                                nunu_cop["gender"] = emps_state[emp__]["gender"];
                                nunu_cop["department"] = emps_state[emp__]["department"];
                                nunu_cop["position"] = emps_state[emp__]["position"];
                                nunu_cop["eMail"] = emps_state[emp__]["eMail"]();
                                nunu_cop["employeeID"] = emps_state[emp__]["employeeID"];
                                nunu_cop["startDate"] = emps_state[emp__]["startDate"];
                                nunu_cop["endDate"] = emps_state[emp__]["endDate"];
                                nunu_cop["salary"] = emps_state[emp__]["salary"];
                                break;
                            } else { continue; };
                        };
                        {
                            let name_pseudo_line = document.createElement('p');
                            name_pseudo_line.innerText = `~~~> name : ${nunu_cop["firstName"]} ${nunu_cop["lastName"]}`;
                            name_pseudo_line.setAttribute("class", "cardRemoval");
                            document.querySelector("#crud-operations").appendChild(name_pseudo_line);
                        };
                        {
                            let gender_pseudo_line = document.createElement('p');
                            if (nunu_cop["gender"] === "nk") {
                                gender_pseudo_line.innerText = "~~~> gender : not known";
                            };
                            if (nunu_cop["gender"] === 'f') {
                                gender_pseudo_line.innerText = "~~~> gender : female";
                            };
                            if (nunu_cop["gender"] === 'm') {
                                gender_pseudo_line.innerText = "~~~> gender : male";
                            };
                            if (nunu_cop["gender"] === "na") {
                                gender_pseudo_line.innerText = "~~~> gender : not applicable";
                            };
                            gender_pseudo_line.setAttribute("class", "cardRemoval");
                            document.querySelector("#crud-operations").appendChild(gender_pseudo_line);
                        };
                        {
                            let department_position_pseudo_line = document.createElement('p');
                            department_position_pseudo_line.innerText = `~~~> department : ${nunu_cop["department"]},\npositon : ${nunu_cop["position"]}`;
                            department_position_pseudo_line.setAttribute("class", "cardRemoval");
                            document.querySelector("#crud-operations").appendChild(department_position_pseudo_line);
                        };
                        {
                            let eMail_pseudo_line = document.createElement('p');
                            eMail_pseudo_line.innerText = `~~~> eMail : ${nunu_cop["eMail"]}`;
                            eMail_pseudo_line.setAttribute("class", "cardRemoval");
                            document.querySelector("#crud-operations").appendChild(eMail_pseudo_line);
                        };
                        {
                            let employeeID_pseudo_line = document.createElement('p');
                            employeeID_pseudo_line.innerText = `~~~> Employee ID : ${nunu_cop["employeeID"]}`;
                            employeeID_pseudo_line.setAttribute("class", "cardRemoval");
                            document.querySelector("#crud-operations").appendChild(employeeID_pseudo_line);
                        };
                        {
                            let return_date = (d_val) => {
                                if (
                                    (d_val === '') ||
                                    (d_val === undefined) ||
                                    (d_val === null)
                                ) {
                                    return (
                                        String("None_NotSet")
                                    );
                                } else {
                                    let input_day = String(d_val).split('-')[1];
                                    let input_month = String(d_val).split('-')[0];
                                    let input_year = String(d_val).split('-')[2];
                                    let output_day = '';
                                    let output_month = '';
                                    let output_year = '';
                                    if (input_day === "01") output_day = "The 1st of";
                                    if (input_day === "02") output_day = "The 2nd of";
                                    if (input_day === "03") output_day = "The 3rd of";
                                    if (input_day === "04") output_day = "The 4th of";
                                    if (input_day === "05") output_day = "The 5th of";
                                    if (input_day === "06") output_day = "The 6th of";
                                    if (input_day === "07") output_day = "The 7th of";
                                    if (input_day === "08") output_day = "The 8th of";
                                    if (input_day === "09") output_day = "The 9th of";
                                    if (input_day === "10") output_day = "The 10th of";
                                    if (input_day === "11") output_day = "The 11th of";
                                    if (input_day === "12") output_day = "The 12th of";
                                    if (input_day === "13") output_day = "The 13th of";
                                    if (input_day === "14") output_day = "The 14th of";
                                    if (input_day === "15") output_day = "The 15th of";
                                    if (input_day === "16") output_day = "The 16th of";
                                    if (input_day === "17") output_day = "The 17th of";
                                    if (input_day === "18") output_day = "The 18th of";
                                    if (input_day === "19") output_day = "The 19th of";
                                    if (input_day === "20") output_day = "The 20th of";
                                    if (input_day === "21") output_day = "The 21st of";
                                    if (input_day === "22") output_day = "The 22nd of";
                                    if (input_day === "23") output_day = "The 23rd of";
                                    if (input_day === "24") output_day = "The 24th of";
                                    if (input_day === "25") output_day = "The 25th of";
                                    if (input_day === "26") output_day = "The 26th of";
                                    if (input_day === "27") output_day = "The 27th of";
                                    if (input_day === "28") output_day = "The 28th of";
                                    if (input_day === "29") output_day = "The 29th of";
                                    if (input_day === "30") output_day = "The 30th of";
                                    if (input_day === "31") output_day = "The 31st of";
                                    if (input_month === "01") output_month = "January";
                                    if (input_month === "02") output_month = "February";
                                    if (input_month === "03") output_month = "March";
                                    if (input_month === "04") output_month = "April";
                                    if (input_month === "05") output_month = "May";
                                    if (input_month === "06") output_month = "June";
                                    if (input_month === "07") output_month = "July";
                                    if (input_month === "08") output_month = "August";
                                    if (input_month === "09") output_month = "September";
                                    if (input_month === "10") output_month = "October";
                                    if (input_month === "11") output_month = "November";
                                    if (input_month === "12") output_month = "December";
                                    output_year = input_year;
                                    return (
                                        String(output_day + "\u00a0" + output_month + "\u00a0" + output_year)
                                    );
                                };
                            };
                            let StartDate_EndDate_pseudo_line = document.createElement('p');
                            StartDate_EndDate_pseudo_line.innerText = `~~~> Start Date : ${return_date(nunu_cop["startDate"])},\nEnd Date : ${return_date(nunu_cop["endDate"])}`;
                            StartDate_EndDate_pseudo_line.setAttribute("class", "cardRemoval");
                            document.querySelector("#crud-operations").appendChild(StartDate_EndDate_pseudo_line);
                        };
                        {
                            let salary_pseudo_line = document.createElement('p');
                            salary_pseudo_line.innerText = `~~~> salary : ${nunu_cop["salary"]}`;
                            salary_pseudo_line.setAttribute("class", "cardRemoval");
                            document.querySelector("#crud-operations").appendChild(salary_pseudo_line);
                        };
                    };
                    {
                        document.querySelectorAll(".cardRemoval").forEach(pseudo_line_entry => {
                            pseudo_line_entry.style.color = "rgba(244, 244, 244, 1)";
                            pseudo_line_entry.style.marginLeft = "2cm";
                            pseudo_line_entry.style.marginTop = "3mm";
                            pseudo_line_entry.style.marginBottom = "3mm";
                            pseudo_line_entry.style.fontFamily = "monospace";
                            pseudo_line_entry.style.fontSize = "3.7mm";
                            pseudo_line_entry.style.fontWeight = "600";
                        });
                    };
                    {
                        let bttn_go_back = document.createElement("button");
                        bttn_go_back.innerText = "~~~> GO BACK <~~~";
                        bttn_go_back.setAttribute("id", "bttn-go-back");
                        bttn_go_back.setAttribute("class", "cardRemoval");
                        document.querySelector("#crud-operations").appendChild(bttn_go_back);
                    };
                    {
                        document.querySelector("#bttn-go-back").style.float = "right";
                        document.querySelector("#bttn-go-back").style.marginRight = "3cm";
                        document.querySelector("#bttn-go-back").style.fontSize = "4mm";
                        document.querySelector("#bttn-go-back").style.fontWeight = "900";
                        document.querySelector("#bttn-go-back").style.fontFamily = "monospace";
                        document.querySelector("#bttn-go-back").style.color = "rgba(122, 244, 122, 1)";
                        document.querySelector("#bttn-go-back").style.backgroundColor = "rgb(0, 0, 0)";
                        document.querySelector("#bttn-go-back").style.border = "0.1mm solid rgba(122, 244, 122, 1)";
                        document.querySelector("#bttn-go-back").style.bordeRadius = "2mm";
                    };
                    {
                        document.querySelector("#bttn-go-back").addEventListener("mouseenter", () => {
                            document.querySelector("#bttn-go-back").style.cursor = "pointer";
                            document.querySelector("#bttn-go-back").style.color = "rgba(0, 0, 0, 1)";
                            document.querySelector("#bttn-go-back").style.backgroundColor = "rgb(122, 244, 122)";
                            document.querySelector("#bttn-go-back").style.border = "0.1mm solid rgba(0, 0, 0, 1)";
                        });
                        document.querySelector("#bttn-go-back").addEventListener("mouseleave", () => {
                            document.querySelector("#bttn-go-back").style.color = "rgba(122, 244, 122, 1)";
                            document.querySelector("#bttn-go-back").style.backgroundColor = "rgb(0, 0, 0)";
                            document.querySelector("#bttn-go-back").style.border = "0.1mm solid rgba(122, 244, 122, 1)";
                        });
                    };
                    {
                        document.querySelector("#bttn-go-back").onclick = () => {
                            document.querySelectorAll(".cardRemoval").forEach(pseudoElements_cR => {
                                pseudoElements_cR.remove();
                            });
                            document.querySelector("#change-content-area").style.display = "initial";
                            document.querySelector("#data-nav").style.visibility = "initial";
                            document.querySelector("#crud-nav").style.visibility = "initial";
                            document.querySelector("#sort-nav").style.visibility = "initial";
                            document.querySelector("#filter-search-nav").style.visibility = "initial";
                            document.querySelector("#pagination-nav").style.visibility = "initial";
                            document.querySelector("#scrollbar-nav").style.visibility = "initial";
                        };
                    };
                });
            };
        };
    };
} catch (error) { if (error) console.log(error); } finally { };

try {
    document.querySelector("#sort-firstname-bttn").onclick = () => {
        {
            myHeadIsBugsOnTopOfBugs_xD();
        };
        if (emps_state.length < 2) {
            alert(String.fromCodePoint(10060) + "\u00a0" + "Operation possible only after,\ntwo or more Employees are present.");
        } else {

            let arr_firstNames = [];

            for (let ___indx in emps_state) {
                arr_firstNames.push(emps_state[___indx]["firstName"]);
            };

            arr_firstNames.sort();

            let nunuEmpies = [];

            for (let ___indx_ in arr_firstNames) {
                for (let indx___ = 0; indx___ <= emps_state.length - 1; indx___++) {
                    if (emps_state[indx___]["firstName"] === arr_firstNames[___indx_]) {
                        nunuEmpies.splice(___indx_, 0, emps_state[indx___]);
                        emps_state.splice(indx___, 1);
                        break;
                    };
                };
            };

            for (let _EmpInx_ in nunuEmpies) {
                emps_state.splice(_EmpInx_, 0, nunuEmpies[_EmpInx_]);
            };

            remove_previous_rows();

            add_next_rows();

        };
    };
} catch (error) {
    if (error) console.log(error);
} finally { };

try {
    document.querySelector("#sort-lastname-bttn").onclick = () => {
        {
            myHeadIsBugsOnTopOfBugs_xD();
        };
        if (emps_state.length < 2) {
            alert(String.fromCodePoint(10060) + "\u00a0" + "Operation possible only after,\ntwo or more Employees are present.");
        } else {

            let arr_lastNames = [];

            for (let empIndx in emps_state) {
                arr_lastNames.push(emps_state[empIndx]["lastName"]);
            };

            arr_lastNames.sort();

            let Arr_Of_Objs = [];

            for (let __INDX_LN in arr_lastNames) {
                for (let ___indx__ in emps_state) {
                    if (emps_state[___indx__]["lastName"] === arr_lastNames[__INDX_LN]) {
                        Arr_Of_Objs.splice(__INDX_LN, 0, emps_state[___indx__]);
                        emps_state.splice(___indx__, 1);
                        break;
                    };
                };
            };

            for (let _EmpieIndx_ in Arr_Of_Objs) {
                emps_state.splice(_EmpieIndx_, 0, Arr_Of_Objs[_EmpieIndx_]);
            };

            remove_previous_rows();

            add_next_rows();

        };
    };
} catch (error) {
    if (error) console.log(error);
} finally { };

try {
    document.querySelector("#sort-startdateyear-bttn").onclick = () => {
        {
            myHeadIsBugsOnTopOfBugs_xD();
        };
        if (emps_state.length < 2) {
            alert(String.fromCodePoint(10060) + "\u00a0" + "Operation possible only after,\ntwo or more Employees are present.");
        } else {

            let arr_years_StartDate = [];

            for (let emp_indx in emps_state) {
                let SD_Y = Number(String(emps_state[emp_indx]["startDate"]).split('-')[2]);
                arr_years_StartDate.push(SD_Y);
            };

            arr_years_StartDate.sort((_a_a_, _b_b_) => _a_a_ - _b_b_);

            for (let _indx___ = 0; _indx___ <= arr_years_StartDate.length - 1; _indx___++) {
                arr_years_StartDate[_indx___] = String(arr_years_StartDate[_indx___]);
            };

            let ___________arr_of_objs___ = [];

            for (let __yndex in arr_years_StartDate) {
                for (let i_____ = 0; i_____ <= emps_state.length - 1; i_____++) {
                    if (
                        String(emps_state[i_____]["startDate"]).split('-')[2] === arr_years_StartDate[__yndex]
                    ) {
                        ___________arr_of_objs___.splice(__yndex, 0, emps_state[i_____]);
                        emps_state.splice(i_____, 1);
                        break;
                    };
                };
            };

            for (let _one_Empie_INDX_ in ___________arr_of_objs___) {
                emps_state.splice(_one_Empie_INDX_, 0, ___________arr_of_objs___[_one_Empie_INDX_]);
            };

            remove_previous_rows();

            add_next_rows();

        };
    };
} catch (error) {
    if (error) console.log(error);
} finally { };

try {
    document.querySelector("#filter-search-bttn").onclick = () => {
        {
            myHeadIsBugsOnTopOfBugs_xD();
        };
        if (emps_state.length < 2) {
            alert(String.fromCodePoint(10060) + "\u00a0" + "Operation possible only after,\ntwo or more Employees are present.");
        } else {
            {
                document.querySelector("#change-content-area").style.display = "none";
                document.querySelector("#data-nav").style.visibility = "hidden";
                document.querySelector("#crud-nav").style.visibility = "hidden";
                document.querySelector("#sort-nav").style.visibility = "hidden";
                document.querySelector("#filter-search-nav").style.visibility = "hidden";
                document.querySelector("#pagination-nav").style.visibility = "hidden";
                document.querySelector("#scrollbar-nav").style.visibility = "hidden";
            };
            {
                let nunu_container = document.createElement("section");
                nunu_container.style.float = "right";
                nunu_container.style.border = "1mm solid rgba(244, 244, 122, 1)";
                nunu_container.style.borderRadius = "3mm";
                nunu_container.style.marginTop = "1cm";
                nunu_container.style.marginRight = "7mm";
                nunu_container.style.overflow = "auto";
                nunu_container.style.backgroundColor = "rgb(40, 40, 40)";
                nunu_container.style.width = "10.8cm";
                nunu_container.style.height = "5cm";
                nunu_container.setAttribute("id", "nunu-container");
                nunu_container.setAttribute("class", "newlyLaterRemoval");
                document.querySelector("#crud-operations").appendChild(nunu_container);
            };
            {
                let nunu_input = document.createElement("input");
                nunu_input.value = '';
                nunu_input.placeholder = "[Aa-Zz] MaxLength=8";
                nunu_input.style.float = "left";
                nunu_input.style.width = "3.4cm";
                nunu_input.style.marginTop = "1cm";
                nunu_input.style.marginLeft = "5mm";
                nunu_input.setAttribute("type", "text");
                nunu_input.setAttribute("maxlength", 8);
                nunu_input.setAttribute("id", "nunu-input");
                nunu_input.setAttribute("class", "newlyLaterRemoval");
                document.querySelector("#crud-operations").appendChild(nunu_input);
            };
            {
                let nunu_new_bttn = document.createElement("button");
                nunu_new_bttn.innerText = "<-- Go Back <--";
                nunu_new_bttn.style.float = "left";
                nunu_new_bttn.style.marginTop = "2cm";
                nunu_new_bttn.style.marginLeft = "5mm";
                nunu_new_bttn.setAttribute("id", "nunu-new-bttn");
                nunu_new_bttn.setAttribute("class", "newlyLaterRemoval");
                document.querySelector("#crud-operations").appendChild(nunu_new_bttn);
            };
            {
                document.querySelector("#nunu-new-bttn").style.border = '0';
                document.querySelector("#nunu-new-bttn").style.fontSize = "4mm";
                document.querySelector("#nunu-new-bttn").style.color = "rgba(244, 244, 122, 1)";
                document.querySelector("#nunu-new-bttn").style.fontFamily = "cursive";
                document.querySelector("#nunu-new-bttn").style.fontWeight = "900";
                document.querySelector("#nunu-new-bttn").style.backgroundColor = "rgb(0, 0, 0)";
                document.querySelector("#nunu-new-bttn").style.borderRadius = "3mm";
                document.querySelector("#nunu-new-bttn").addEventListener("mouseenter", (e_y_ME) => {
                    e_y_ME.target.style.cursor = "pointer";
                    e_y_ME.target.style.backgroundColor = "rgb(244, 244, 122)";
                    e_y_ME.target.style.color = "rgba(0, 0, 0, 1)";
                });
                document.querySelector("#nunu-new-bttn").addEventListener("mouseleave", (e_y_ML) => {
                    e_y_ML.target.style.backgroundColor = "rgb(0, 0, 0)";
                    e_y_ML.target.style.color = "rgb(244, 244, 122, 1)";
                });
            };
            {
                document.querySelector("#nunu-input").addEventListener("input", (_e_E_e_) => {
                    let arr_of_vals = [..._e_E_e_.target.value].map(_one_char_subStr_ => _one_char_subStr_.charCodeAt());
                    for (let _i_I = 0; _i_I <= arr_of_vals.length - 1; _i_I++) {
                        if (
                            (arr_of_vals[_i_I] < 65) ||
                            (
                                (arr_of_vals[_i_I] > 90) &&
                                (arr_of_vals[_i_I] < 97)
                            ) ||
                            (arr_of_vals[_i_I] > 122)
                        ) {
                            alert(String.fromCodePoint(10060) + "\u00a0" + "Not valid input.");
                            _e_E_e_.target.value = '';
                        };
                    };
                    var nunu_arr_OBJs_emps = [];
                    var counter = Number(0);
                    if (_e_E_e_.target.value.length > 0) {
                        if (nunu_arr_OBJs_emps.length !== 0) {
                            for (let ITERATOR_INDX = 0; ITERATOR_INDX <= emps_state.length - 1; ITERATOR_INDX++) {
                                emps_state.splice(ITERATOR_INDX, 1);
                            };
                            counter = 0;
                        };
                        if (_e_E_e_.target.value !== '') {
                            let pseudoCopyVal = String(_e_E_e_.target.value).toLowerCase();
                            for (let empie_indx___ = 0; empie_indx___ <= emps_state.length - 1; empie_indx___++) {
                                if (
                                    (String(emps_state[empie_indx___]["eMail"]()).split('.')[0].includes(pseudoCopyVal) === Boolean(true)) ||
                                    (String(emps_state[empie_indx___]["eMail"]()).split('.')[1].split('@')[0].includes(pseudoCopyVal) === Boolean(true))
                                ) {
                                    nunu_arr_OBJs_emps.splice(counter, 0, emps_state[empie_indx___]);
                                    counter++;
                                } else { continue; };
                            };
                            {
                                try {
                                    document.querySelectorAll(".pseudoContaineredElements").forEach(pCE => {
                                        pCE.remove();
                                    });
                                } catch (error) {
                                } finally { };
                            };
                            {
                                for (let empINDX__ = 0; empINDX__ <= nunu_arr_OBJs_emps.length - 1; empINDX__++) {
                                    let nunu_p_p = document.createElement('p');
                                    var __y__ = 0;
                                    __y__ = empINDX__ + 1;
                                    nunu_p_p.innerText = `${__y__}. ${nunu_arr_OBJs_emps[empINDX__]["firstName"]} ${nunu_arr_OBJs_emps[empINDX__]["lastName"]}, ${nunu_arr_OBJs_emps[empINDX__]["department"]} --> ${nunu_arr_OBJs_emps[empINDX__]["position"]}`;
                                    nunu_p_p.style.fontSize = "3mm";
                                    nunu_p_p.style.fontFamily = "monospace";
                                    nunu_p_p.style.color = "rgba(244, 244, 244, 1)";
                                    nunu_p_p.style.textDecoration = "underline";
                                    nunu_p_p.setAttribute("class", "pseudoContaineredElements");
                                    document.querySelector("#nunu-container").appendChild(nunu_p_p);
                                };
                            };
                        };
                    } else {
                        try {
                            document.querySelectorAll(".pseudoContaineredElements").forEach(pCE => {
                                pCE.remove();
                            });
                        } catch (error) {
                        } finally { };
                    };
                });
            };
            {
                document.querySelector("#nunu-new-bttn").onclick = () => {
                    {
                        document.querySelectorAll(".newlyLaterRemoval").forEach(entry_pseudoElement => {
                            entry_pseudoElement.remove();
                        });
                    };
                    {
                        document.querySelector("#change-content-area").style.display = "initial";
                        document.querySelector("#data-nav").style.visibility = "initial";
                        document.querySelector("#crud-nav").style.visibility = "initial";
                        document.querySelector("#sort-nav").style.visibility = "initial";
                        document.querySelector("#filter-search-nav").style.visibility = "initial";
                        document.querySelector("#pagination-nav").style.visibility = "initial";
                        document.querySelector("#scrollbar-nav").style.visibility = "initial";
                    };
                };
            };
        };
    };
} catch (error) {
    if (error) console.log(error);
} finally { };

try {
    document.querySelector("#pagination-bttn").onclick = () => {

        if (_pseudo_global_memory_.length !== 0) {
            alert(String.fromCodePoint(10060) + "\u00a0" + "Pagination has been already set.");
        } else {

            let scrollHeight = document.querySelector("#scrollable-div").scrollHeight;
            let clientHeight = document.querySelector("#scrollable-div").clientHeight;

            if (scrollHeight !== clientHeight) {

                var memoj = [];

                var one_push = [];

                let rowies = document.querySelectorAll("tr");

                for (let backward_indx_interator = rowies.length - 1; backward_indx_interator > 0; backward_indx_interator--) {
                    if (document.querySelector("#scrollable-div").scrollHeight === document.querySelector("#scrollable-div").clientHeight) break;
                    rowies[backward_indx_interator].remove();
                };

                rowies = document.querySelectorAll("tr");

                for (let another_indx_iterator = 1; another_indx_iterator <= rowies.length - 1; another_indx_iterator++) {
                    one_push.push(rowies[another_indx_iterator]);
                };

                memoj.push(one_push);

                remove_previous_rows();

                add_next_rows();

                for (let pseudoCycle = 0; pseudoCycle <= 29; pseudoCycle++) {
                    rowies = document.querySelectorAll("tr");

                    var sumSUM = 0;
                    for (let ___subPart in memoj) {
                        sumSUM += memoj[___subPart].length;
                    };

                    for (let newIndx_ = 1; newIndx_ <= sumSUM; newIndx_++) {
                        rowies[newIndx_].remove();
                    };
                    rowies = document.querySelectorAll("tr");
                    for (let INDX_another = rowies.length - 1; INDX_another > 0; INDX_another--) {
                        if (document.querySelector("#scrollable-div").scrollHeight === document.querySelector("#scrollable-div").clientHeight) break;
                        rowies[INDX_another].remove();
                    };
                    var myHeadBugsOnTopOfBugs = [];
                    var newRows = document.querySelectorAll("tr");
                    for (let newIndxIteration = 1; newIndxIteration <= newRows.length - 1; newIndxIteration++) {
                        myHeadBugsOnTopOfBugs.push(newRows[newIndxIteration]);
                    };
                    memoj.push(myHeadBugsOnTopOfBugs);
                    remove_previous_rows();
                    add_next_rows();
                    if (
                        memoj[memoj.length - 1].length === 0
                    ) {
                        memoj.pop();
                        while (_pseudo_global_memory_.length > 0) _pseudo_global_memory_.pop();
                        for (let subPage in memoj) _pseudo_global_memory_.push(memoj[subPage]);
                        while (memoj.length > 0) memoj.pop();
                        break;
                    } else { continue; };
                };

                remove_previous_rows();

                for (let _____rows in _pseudo_global_memory_[_pseudo_global_pointer_]) {
                    document.querySelector("#append-to-sub-part").appendChild(_pseudo_global_memory_[_pseudo_global_pointer_][_____rows]);
                };

            } else {
                alert(String.fromCodePoint(10060) + "\u00a0" + "Pagination not possible yet,\ndue to an amount of Employees in Table List,\nthat does not exceed view area.");
            };

        };

    };
} catch (error) {
    if (error) console.log(error);
} finally { };

try {
    document.querySelector("#previous-bttn").onclick = () => {
        if (_pseudo_global_memory_.length === 0) {
            alert(String.fromCodePoint(10060) + "\u00a0" + "Operation yet not possible,\npagination option had to be set before.");
        } else {
            if (_pseudo_global_pointer_ === 0) {
                alert(String.fromCodePoint(10060) + "\u00a0" + "Not possible,\nthis is already the 1st. page.");
            } else {
                remove_previous_rows();
                _pseudo_global_pointer_--;
                for (let _____rows in _pseudo_global_memory_[_pseudo_global_pointer_]) {
                    document.querySelector("#append-to-sub-part").appendChild(_pseudo_global_memory_[_pseudo_global_pointer_][_____rows]);
                };
            };
        };
    };
} catch (error) {
    if (error) console.log(error);
} finally { };

try {
    document.querySelector("#next-bttn").onclick = () => {
        if (_pseudo_global_memory_.length === 0) {
            alert(String.fromCodePoint(10060) + "\u00a0" + "Operation yet not possible,\npagination option had to be set before.");
        } else {
            if (_pseudo_global_pointer_ === (_pseudo_global_memory_.length - 1)) {
                alert(String.fromCodePoint(10060) + "\u00a0" + "Not possible,\nthis is already the last page.");
            } else {
                remove_previous_rows();
                _pseudo_global_pointer_++;
                for (let _____rows in _pseudo_global_memory_[_pseudo_global_pointer_]) {
                    document.querySelector("#append-to-sub-part").appendChild(_pseudo_global_memory_[_pseudo_global_pointer_][_____rows]);
                };
            };
        };
    };
} catch (error) {
    if (error) console.log(error);
} finally { };

try {
    document.querySelector("#scrollbar-bttn").onclick = () => {
        myHeadIsBugsOnTopOfBugs_xD();
        if (document.querySelector("#scrollable-div").scrollHeight === document.querySelector("#scrollable-div").clientHeight) {
            alert(String.fromCodePoint(10060) + "\u00a0" + "Scrollbar option yet not possible,\ndue to an amount of Employees in Table List,\nthat does not exceed view area.");
        } else {
            if (_pseudo_global_memory_.length === 0) alert("Scrollbar option has been set.");
        };
    };
} catch (error) {
    if (error) console.log(error);
} finally { };
