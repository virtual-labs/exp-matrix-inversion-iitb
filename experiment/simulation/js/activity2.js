function activity2() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <div class="fs-16px">
        <h5>Finding the Inverse of Matrix</h5>
        <p>Learning Objective: To lean to find Inverse of Matrix</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-2' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
function start_act2() {
    let temp_btn = (document.getElementById('temp-btn-2'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let matrix_ai_inputs = get_matrix_html_with_title(3, 3, [
        [
            `<input id='a1-uta-11' class='form-control' />`,
            `<input id='a1-uta-12' class='form-control' />`,
            `<input id='a1-uta-13' class='form-control' />`,
        ],
        [
            `<input id='a1-uta-21' class='form-control' />`,
            `<input id='a1-uta-22' class='form-control' />`,
            `<input id='a1-uta-23' class='form-control' />`,
        ],
        [
            `<input id='a1-uta-31' class='form-control' />`,
            `<input id='a1-uta-32' class='form-control' />`,
            `<input id='a1-uta-33' class='form-control' />`,
        ],
    ], 'A<sup>-1</sup>', 'inline-block', '40%');
    let btn_text = get_collapse_btn_text('Generated Dataset', 'tb2-box');
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>

        <div style='text-align: center;'>${get_matrix_html_with_title(3, 3, mat_a, 'A', 'inline-block', '40%')} &nbsp; <span style='font-size: 30px;'>* X</span>  &nbsp; =  &nbsp; ${get_matrix_html_with_title(3, 1, mat_c, 'C', 'inline-block', '15%')}</div>
        <br>

        <h5>Enter the values of A<sup>-1</sup> </h5>

        <div id='ut-inp-div' style='text-align: center;'>${get_matrix_html_with_title(3, 3, mat_a, 'A', 'inline-block', '40%')} * ${get_matrix_html_with_title(3, 3, [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
    ], 'I', 'inline-block', '20%')} &nbsp; = <br><br> ${get_matrix_html_with_title(3, 3, [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
    ], 'I', 'inline-block', '20%')} * ${matrix_ai_inputs}</div>
        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_matrix_ut();'  id='temp-btn-123' >Next</button></div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    ut_a_c();
    setTimeout(() => MathJax.typeset(), 300);
    setTimeout(() => show_step('tb2-box'), 150);
}
function ut_a_c() {
    let c = [];
    c.push(mat_c[0][0]);
    c.push(mat_c[1][0]);
    c.push(mat_c[2][0]);
    console.log(mat_a);
    mat_a_i = inverse(mat_a);
    for (let i = 0; i < mat_a_i.length; i++) {
        for (let j = 0; j < mat_a_i[0].length; j++) {
            mat_a_i[i][j] = parseFloat(mat_a_i[i][j].toFixed(4));
        }
    }
    mat_c = [];
    mat_c.push([c[0]], [c[1]], [c[2]]);
}
function verify_matrix_ut() {
    let btn = (document.getElementById('temp-btn-123'));
    let inp_a;
    let inp_c;
    console.log(`matrix a inverse =>`, mat_a_i);
    //for a
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            inp_a = (document.getElementById(`a1-uta-${i + 1}${j + 1}`));
            if (!verify_values(parseFloat(inp_a.value), mat_a_i[i][j])) {
                alert(`incorrect value in 3 x 3 matrix for row ${i} and column ${j}`);
                return;
            }
        }
    }
    alert('You have entered correct values.');
    btn.remove();
    render_ut_a_c();
    activity3();
}
function render_ut_a_c() {
    let div = (document.getElementById('ut-inp-div'));
    div.innerHTML = `A<sup>-1</sup> &nbsp; = &nbsp; ${get_matrix_html(3, 3, mat_a_i, 'inline-block', '50%')}`;
}
//activity2();
//# sourceMappingURL=activity2.js.map