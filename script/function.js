//liste generation

//gen 1 : 1-151
//gen 2 : 152-251
//gen 3 : 252-386
//gen 4 : 387-493
//gen 5 : 494-649
//gen 6 : 650-721
//gen 7 : 722-809
//gen 8 : 810-905
//gen 9 : 906-1025

const call_poke_gen = async function CPG(i) {

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
}

// const call_poke_single = async function CPS(id) {

// }

const call_poke_type = async function CPT(i) {

    console.log(i);
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${i}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
}

const get_poke_info = async function GPI(id) {
    console.log(id);
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
}

const call_poke_reg = async function CPR(id) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/region/${id}`);
        const data = await response.json();
        if (id == 1 || id == 9) {

            let pkdx = data.pokedexes[0].url
            let id_url = pkdx.slice(33)
            let pkdx_data = await get_pokedex(id_url)
            return pkdx_data.pokemon_entries

        } else if (id == 2 || id == 3 || id == 4 || id == 5) {

            let pkdx = data.pokedexes[1].url
            let id_url = pkdx.slice(33)
            let pkdx_data = await get_pokedex(id_url)
            return pkdx_data.pokemon_entries
        }
        //     else if (id == 6) {
        //     let pkdx = data.pokedexes[0].url
        //     let pkdx1 = data.pokedexes[1].url
        //     let pkdx2 = data.pokedexes[2].url
        //     let id_url = pkdx.slice(33)
        //     let id_url1 = pkdx1.slice(33)
        //     let id_url2 = pkdx2.slice(33)
        //     let pkdx_data = await get_pokedex(id_url)
        //     let pkdx_data1 = await get_pokedex(id_url1)
        //     let pkdx_data2 = await get_pokedex(id_url2)
        //     let result = Object.assign(pkdx_data.pokemon_entries, pkdx_data1.pokemon_entries, pkdx_data2.pokemon_entries)
        //     console.log(pkdx_data);console.log(pkdx_data1);console.log(pkdx_data2);
        //     console.log(result);
        //     return result
        // } else if (id == 7) {
        //     let pkdx = data.pokedexes[]
        // } else if (id == 8) {
        //     let pkdx = data.pokedexes[]
        // } else if (id == 10) {
        //     let pkdx = data.pokedexes[]
        // } else if (id == 11) {
        //     let pkdx = data.pokedexes[]
        // }
    } catch (err) {
        console.error(err);
    }
};

const get_pokedex = async function GP(id) {
    console.log(id);
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokedex/${id}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
}

const create_vignette = async function CV(emplacement, id) {

    let emp = document.querySelector(`${emplacement}`)

    let vig = document.createElement("div")
    let vig_img = document.createElement("img")
    let vig_name = document.createElement("h2")
    let vig_id = document.createElement("span")

    let vig_type = document.createElement("div")
    let type_vig_img = document.createElement("img")
    let type_vig_img2 = document.createElement("img")

    vig.className = `vignette vignette_${id}`
    vig_img.className = `vignette_image vignette_image_${id}`
    vig_name.className = `vignette_nom vignette_nom_${id}`
    vig_id.className = `vignette_id vignette_id_${id}`
    vig_type.className = `vignette_type vignette_type_${id}`
    type_vig_img.className = `vignette_type_img1 vignette_type_img1_${id}`
    type_vig_img2.className = `vignette_type_img2 vignette_type_img2_${id}`

    emp.appendChild(vig)

    let sel_vig = document.querySelector(`.vignette_${id}`)

    sel_vig.appendChild(vig_img)
    sel_vig.appendChild(vig_name)
    sel_vig.appendChild(vig_id)
    sel_vig.appendChild(vig_type)

    let sel_type_vig = document.querySelector(`.vignette_type_${id}`)

    sel_type_vig.appendChild(type_vig_img)
    sel_type_vig.appendChild(type_vig_img2)
}

//FAIRE DES INNER HTML AU LIEU DES APPENDCHHILD

const fill_vignette = function FV(data1, data2, id) {
    console.log(data1);
    console.log(data2);
    console.log(id);
    let emp = document.querySelector(`.vignette_${id}`)
    let emp_pic = document.querySelector(`.vignette_image_${id}`)
    let emp_name = document.querySelector(`.vignette_nom_${id}`)
    let emp_id = document.querySelector(`.vignette_id_${id}`)
    let emp_type_pic = document.querySelector(`.vignette_type_img1_${id}`)
    let emp_type_pic2 = document.querySelector(`.vignette_type_img2_${id}`);
    console.log(data2.id);
    try {
        emp_pic.src = `sprites-master/sprites/pokemon/other/official-artwork/${data2.id}.png`
    } catch (err) {
        console.error(err);
    }
    try {
        emp_name.innerHTML = data1.names[4].name
    } catch (err) {
        console.error(err);
        try {
            emp_name.innerHTML = data2.name
        } catch (err) {
            console.error(err);
        }
    }

    emp_id.innerHTML = `Id : ${data2.id}`
    emp_type_pic.src = type_selector(data2.types[0].type.name)
    try {
        emp_type_pic2.src = type_selector(data2.types[1].type.name)
    } catch (err) {
        console.error(err);
    }
    emp.addEventListener("click", function() {
        location.href = `html/pokemon.html?id=${id}`
    })

}

const empty_elem = async function EE(selector) {
    let emp = document.querySelector(`${selector}`)
    emp.innerHTML = ""
}

const type_selector = function TS(name) {
    switch (name) {
        case "normal":
            {
                return "sprites-master/sprites/types/generation-viii/sword-shield/1.png"
            }
        case "fighting":
            {
                return "sprites-master/sprites/types/generation-viii/sword-shield/2.png"
            }
        case "flying":
            {
                return "sprites-master/sprites/types/generation-viii/sword-shield/3.png"
            }
        case "poison":
            {
                return "sprites-master/sprites/types/generation-viii/sword-shield/4.png"
            }
        case "ground":
            {
                return "sprites-master/sprites/types/generation-viii/sword-shield/5.png"
            }
        case "rock":
            {
                return "sprites-master/sprites/types/generation-viii/sword-shield/6.png"
            }
        case "bug":
            {
                return "sprites-master/sprites/types/generation-viii/sword-shield/7.png"
            }
        case "ghost":
            {
                return "sprites-master/sprites/types/generation-viii/sword-shield/8.png"
            }
        case "steel":
            {
                return "sprites-master/sprites/types/generation-viii/sword-shield/9.png"
            }
        case "fire":
            {
                return "sprites-master/sprites/types/generation-viii/sword-shield/10.png"
            }
        case "water":
            {
                return "sprites-master/sprites/types/generation-viii/sword-shield/11.png"
            }
        case "grass":
            {
                return "sprites-master/sprites/types/generation-viii/sword-shield/12.png"
            }
        case "electric":
            {
                return "sprites-master/sprites/types/generation-viii/sword-shield/13.png"
            }
        case "psychic":
            {
                return "sprites-master/sprites/types/generation-viii/sword-shield/14.png"
            }
        case "ice":
            {
                return "sprites-master/sprites/types/generation-viii/sword-shield/15.png"
            }
        case "dragon":
            {
                return "sprites-master/sprites/types/generation-viii/sword-shield/16.png"
            }
        case "dark":
            {
                return "sprites-master/sprites/types/generation-viii/sword-shield/17.png"
            }
        case "fairy":
            {
                return "sprites-master/sprites/types/generation-viii/sword-shield/18.png"
            }


    }
}