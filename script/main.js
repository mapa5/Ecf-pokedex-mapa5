window.addEventListener("load", async () => {
    for (let n = 1; n <= 151; n++) {
        create_vignette(".content", n);
        let data1 = await call_poke_gen(n);
        let data2 = await get_poke_info(n);
        fill_vignette(data1, data2, n);
    }
});


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
form_gen.addEventListener('submit', async function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut de soumission

    let formData = new FormData(form_gen);
    let data_generation = formData.get('generation');
    empty_elem(".content")

    if (data_generation === "1") {
        let nbr = 151;
        for (let n = 1; n <= 151; n++) {
            create_vignette(".content", n);
            let data1 = await call_poke_gen(n);
            let data2 = await get_poke_info(n);
            fill_vignette(data1, data2, n);
        }
        return nbr;
    } else if (data_generation === "2") {
        let nbr = 99;
        for (let n = 152; n <= 251; n++) {
            create_vignette(".content", n);
            let data1 = await call_poke_gen(n);
            let data2 = await get_poke_info(n);
            fill_vignette(data1, data2, n);
        }
        return nbr;
    } else if (data_generation === "3") {
        let nbr = 134;
        for (let n = 252; n <= 386; n++) {
            create_vignette(".content", n);
            let data1 = await call_poke_gen(n);
            let data2 = await get_poke_info(n);
            fill_vignette(data1, data2, n);
        }
        return nbr;
    } else if (data_generation === "4") {
        let nbr = 106;
        for (let n = 387; n <= 493; n++) {
            create_vignette(".content", n);
            let data1 = await call_poke_gen(n);
            let data2 = await get_poke_info(n);
            fill_vignette(data1, data2, n);
        }
        return nbr;
    } else if (data_generation === "5") {
        let nbr = 155;
        for (let n = 494; n <= 649; n++) {
            create_vignette(".content", n);
            let data1 = await call_poke_gen(n);
            let data2 = await get_poke_info(n);
            fill_vignette(data1, data2, n);
        }
        return nbr;
    } else if (data_generation === "6") {
        let nbr = 71;
        for (let n = 650; n <= 721; n++) {
            create_vignette(".content", n);
            let data1 = await call_poke_gen(n);
            let data2 = await get_poke_info(n);
            fill_vignette(data1, data2, n);
        }
        return nbr;
    } else if (data_generation === "7") {
        let nbr = 87;
        for (let n = 722; n <= 809; n++) {
            create_vignette(".content", n);
            let data1 = await call_poke_gen(n);
            let data2 = await get_poke_info(n);
            fill_vignette(data1, data2, n);
        }
        return nbr;
    } else if (data_generation === "8") {
        let nbr = 95;
        for (let n = 810; n <= 905; n++) {
            create_vignette(".content", n);
            let data1 = await call_poke_gen(n);
            let data2 = await get_poke_info(n);
            fill_vignette(data1, data2, n);
        }
        return nbr;
    } else if (data_generation === "9") {
        let nbr = 119;
        for (let n = 906; n <= 1025; n++) {
            create_vignette(".content", n);
            let data1 = await call_poke_gen(n);
            let data2 = await get_poke_info(n);
            fill_vignette(data1, data2, n);
        }
        return nbr;
    }

});