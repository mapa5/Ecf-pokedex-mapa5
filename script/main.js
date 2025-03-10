window.addEventListener("load", async () => {
    for (let n = 1; n <= 151; n++) {
        create_vignette(".content", n);
        let data1 = await call_poke_gen(n);
        let data2 = await get_poke_info(n);
        fill_vignette(data1, data2, n);
    }
});

let logo = document.querySelector(`.img_logo`)
logo.addEventListener("click", function() {
    location.href = `index.html`
})

let search_place = document.querySelector(`.search`)
search_place.addEventListener('change', function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut de soumission
    let formData = new FormData(search_place);
    let data_search = formData.get('search');
    location.href = `pokemon.html?id=${data_search}`
})

let form_type = document.querySelector('.submit_type');
form_type.addEventListener('change', async function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut de soumission

    let formData = new FormData(form_type);
    let data_type = formData.get('type');
    empty_elem(".content")
    let data = await call_poke_type(data_type)
    for (let n = 0; n <= data.pokemon.length - 1; n++) {
        let link = data.pokemon[n].pokemon.url
        let id = link.slice(34)
        id = id.slice(0, -1);
        create_vignette(".content", id);
        let data1 = await call_poke_gen(id);
        let data2 = await get_poke_info(id);
        fill_vignette(data1, data2, id);
    }
});


let form_reg = document.querySelector('.submit_reg');
form_reg.addEventListener('change', async function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut de soumission

    let formData = new FormData(form_reg);
    let data_region = formData.get('region');
    let data = await call_poke_reg(data_region)
    let n = 1
    empty_elem(".content")
    for (const elem of data) {
        create_vignette(".content", n);
        let link = elem.pokemon_species.url
        let id = link.slice(42)
        id = id.slice(0, -1);
        let data1 = await call_poke_gen(id);
        let data2 = await get_poke_info(id);
        fill_vignette(data1, data2, n);
        n = ++n
    };
});

let form_gen = document.querySelector('.submit_gen');
form_gen.addEventListener('change', async function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut de soumission

    let formData = new FormData(form_gen);
    let data_generation = formData.get('generation');
    empty_elem(".content");

    // Tableau contenant les informations de chaque génération
    const generations = [
        { id: "1", start: 1, end: 151, count: 151 },
        { id: "2", start: 152, end: 251, count: 99 },
        { id: "3", start: 252, end: 386, count: 134 },
        { id: "4", start: 387, end: 493, count: 106 },
        { id: "5", start: 494, end: 649, count: 155 },
        { id: "6", start: 650, end: 721, count: 71 },
        { id: "7", start: 722, end: 809, count: 87 },
        { id: "8", start: 810, end: 905, count: 95 },
        { id: "9", start: 906, end: 1025, count: 119 }
    ];

    // Trouver la génération sélectionnée
    const selectedGeneration = generations.find(gen => gen.id === data_generation);

    if (selectedGeneration) {
        for (let n = selectedGeneration.start; n <= selectedGeneration.end; n++) {
            create_vignette(".content", n);
            let [data1, data2] = await Promise.all([call_poke_gen(n), get_poke_info(n)]);
            fill_vignette(data1, data2, n);
        }
        return selectedGeneration.count;
    }
});
