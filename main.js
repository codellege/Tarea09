let in_input = document.getElementById('myinput');
let div_alert = document.getElementById('myalert');
let sel_select = document.getElementById('myselect');

let currValue = 0;
let opt = 'std';

disabler('');

in_input.addEventListener('keyup', validate);
sel_select.addEventListener('change', chose);

function disabler(value) {
    if (value == '') {
        sel_select.disabled = true;
    } else {
        sel_select.disabled = false;
        process();
    }
}

function chose(e) {
    opt = e.target.value;
    process();
}

function validate(e) {

    let value = Number(e.target.value);

    if (!isNaN(value)) {
        currValue = value;
        disabler(value);
    } else {
        e.target.value = '';
    }
}

function process() {

    let finalcost = 0;

    if (currValue <= 5) {
        finalcost = (currValue);
    } else if (currValue <= 8) {
        finalcost = ((currValue - 5) * .8) + 5;
    } else if (currValue <= 10) {
        finalcost = (((currValue - 8) * .7) + (3 * .8)) + 5;
    } else {
        finalcost = (((currValue - 10) * .5) + (2 * .7)) + (3 * .8) + 5;
    }

    switch (opt) {
        case 'std':
            finalcost = finalcost;
            break;
        case 'dom':
            finalcost = finalcost * 1.03;
            break;
        case 'man':
            finalcost = finalcost * 1.15;
            break;
        case 'tar':
            finalcost = finalcost * 1.10;
            break;
    }

    div_alert.innerHTML = `<div class="alert alert-primary">
                                <strong>El costo de la llamada es: $${finalcost.toFixed(2)}</strong>
                            </div>`;

}