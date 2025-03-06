let params = new URLSearchParams(document.location.search);
let id = params.get("id");

if (id != null) {
    async(id)=> {
    create_vignette(".content", id);
    let data1 = await call_poke_gen(id);
    let data2 = await get_poke_info(id);
    fill_vignette(data1, data2, id);
    }
};