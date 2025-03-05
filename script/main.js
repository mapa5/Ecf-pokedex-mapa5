let form_type = document.querySelector('.submit_type');
form_type.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut de soumission

    let formData = new FormData(form_type);
    let data_type = formData.get('type');
    console.log(data_type);
    call_poke_type(data_type)
});


let form_reg = document.querySelector('.submit_reg');
form_reg.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut de soumission

    let formData = new FormData(form_reg);
    let data_region = formData.get('region');
    console.log(data_region);

});


let form_gen = document.querySelector('.submit_gen');
form_gen.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut de soumission

    let formData = new FormData(form_gen);
    let data_generation = formData.get('generation');
    console.log(data_generation); 
    call_poke_gen(data_generation)
});