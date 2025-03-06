let params = new URLSearchParams(document.location.search);
let id = params.get("id");

if (id != null) {
    (async (id) => {
        let data1 = await call_poke_gen(id);
        let data2 = await get_poke_info(id);
        fill_pokemon_info(data1, data2, id);
    })(id);
}

let logo = document.querySelector(`.img_logo`)
logo.addEventListener("click", function() {
    location.href = `index.html`
})