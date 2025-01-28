function activity3() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <div class="fs-16px">
        <h5>Final Solution</h5>
        <p>Learning Objective: To multiply A<sup>-1</sup> and C to Find X</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act3();' id='temp-btn-3' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
function start_act3() {
    let temp_btn = (document.getElementById('temp-btn-3'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let matrix_x_inputs = get_matrix_html(3, 1, [
        [`<input id='a1-x-11' class='form-control' />`],
        [`<input id='a1-x-21' class='form-control' />`],
        [`<input id='a1-x-31' class='form-control' />`],
    ], 'inline-block', '25%');
    let btn_text = get_collapse_btn_text('Generated Dataset', 'tb3-box');
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb3-box'>

        <h5>Perform the multiplication and find the X</h5>

        <div style='text-align: center;'>X = ${get_matrix_html_with_title(3, 3, mat_a_i, 'A<sup>-1</sup>', 'inline-block', '40%')} &nbsp; *  &nbsp; ${get_matrix_html_with_title(3, 1, mat_c, 'C', 'inline-block', '20%')}</div>
        <br><br>

        <div id='bs-inp-div' style='text-align: center;'><span style='font-size: 30px;'>X</span> = ${matrix_x_inputs}</div>
        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_matrix_bs();'  id='temp-btn-1234' >Next</button></div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    bs_a_c();
    setTimeout(() => MathJax.typeset(), 300);
    setTimeout(() => show_step('tb3-box'), 150);
}
function bs_a_c() {
    let c = [];
    c.push(mat_c[0][0]);
    c.push(mat_c[1][0]);
    c.push(mat_c[2][0]);
    mat_x = multiply(mat_a_i, c);
    mat_c = [];
    mat_c.push([c[0]], [c[1]], [c[2]]);
}
function verify_matrix_bs() {
    let btn = (document.getElementById('temp-btn-1234'));
    let inp_c;
    console.log(`matrix x =>`, mat_x);
    //for x
    for (let i = 0; i < 3; i++) {
        inp_c = document.getElementById(`a1-x-${i + 1}1`);
        if (!verify_values(parseFloat(inp_c.value), mat_x[i])) {
            alert(`incorrect value in 3 x 1 matrix for row ${i} and column 0.`);
            return;
        }
    }
    btn.remove();
    alert('You have successfully completed this experiment.');
    //render_bs_a_c();
    maindiv.innerHTML = `Experiment Successfully Completed.`;
}
//activity3();
// function render_bs_a_c() {
//     let div: HTMLDivElement = <HTMLDivElement> document.getElementById('ut-inp-div');
//     div.innerHTML = `${get_matrix_html(3, 3, mat_a, 'inline-block', "40%")} &nbsp; <span style='font-size: 30px;'>. X</span>  &nbsp; =  &nbsp; ${get_matrix_html(3, 1, mat_c, 'inline-block', "15%")}`;
// }
//# sourceMappingURL=activity3.js.map