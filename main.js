const phis_input = document.querySelector('#phis'),
    yur_input = document.querySelector('#yur'),
    phis_block = document.querySelector('#choose_1'),
    yur_block = document.querySelector('#choose_2'),
    choose_block = document.querySelector('.choose'),
    choose_number = document.querySelector('.choose__number'),
    choose_title = document.querySelector('.choose__title'),
    data_block = document.querySelector('.data'),
    data_number = document.querySelector('.data__number'),
    data_title = document.querySelector('.data__title'),
    agreement_block = document.querySelector('.agreement'),
    agreement_number = document.querySelector('.agreement__number'),
    agreement_title = document.querySelector('.agreement__title'),
    agr1_input = document.querySelector('#agr_1'),
    agr2_input = document.querySelector('#agr_2'),
    agr1_block = document.querySelector('#agreement_1'),
    agr2_block = document.querySelector('#agreement_2'),
    warning_block = document.querySelector('.agreement__warning'),
    all_forms = document.querySelector('.forms'),
    final_form = document.querySelector('.final-form'),
    go_back_btn = document.querySelector('.accepted__button-left'),
    // forms
    choose_form = document.querySelector('.choose__content'),
    data_form = document.querySelector('.data__content'),
    agreement_form = document.querySelector('.agreement__form')
;

let check = (input, block, other_block) => {
    block.classList.toggle("active")
    if (input == phis_input || input == yur_input) {
        other_block.classList.remove("active");
        input.checked = true;
    } else {
        if (warning_block.style.display == '') {
            warning_block.style.display = 'flex'
        }
        if (input.checked == true) {
            input.checked = false
        } else {
            input.checked = true
        }
    }
}

phis_block.addEventListener('click', function() {check(phis_input, phis_block, yur_block)});
yur_block.addEventListener('click', function() {check(yur_input, yur_block, phis_block)});

agr1_block.addEventListener('click', function() {check(agr1_input, agr1_block, agr2_block)});
agr2_block.addEventListener('click', function() {check(agr2_input, agr2_block, agr1_block)});

let nextStep1 = () => {
    if ((yur_input.checked || phis_input.checked) === true) {
        choose_block.classList.toggle('active');
        data_block.classList.toggle('active');

        choose_number.style.backgroundColor = '#1BC400';
        choose_title.style.color = '#3B4256';
        choose_number.innerHTML = '<img src="./assets/done_sign.svg" alt="done">'


    }
}

let nextStep2 = () => {
    data_block.classList.toggle('active');
    agreement_block.classList.toggle('active');

    data_number.style.backgroundColor = '#1BC400';
    data_title.style.color = '#3B4256';
    data_number.innerHTML = '<img src="./assets/done_sign.svg" alt="done">'
}

let nextStep3 = () => {
    if ((agr1_input.checked && agr2_input.checked) == true) {
        all_forms.style.display = 'none';
        final_form.style.display = 'flex';
    }
}

let goBack = () => {
    document.location.reload();
}

go_back_btn.addEventListener('click', goBack)

choose_form.addEventListener('submit', function(e) {
    e.preventDefault();
    nextStep1();
});
data_form.addEventListener('submit', function(e) {
    e.preventDefault();
    nextStep2();
});
agreement_form.addEventListener('submit', function(e) {
    e.preventDefault();
    nextStep3();
});