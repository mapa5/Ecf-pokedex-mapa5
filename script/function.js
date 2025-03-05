var recup_data = async function recup_data(i) {
    console.log(i);
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${i}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
};

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

var call_poke_gen = async function CPG(i) {

    switch (i) {
        case "1":
            let nbr = 151;
            for (var n = 1; n <= 151; n++) {

                try {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
                    const data = await response.json();
                    console.log(data);
                    return data;
                } catch (err) {
                    console.error(err);
                }
            }
            return nbr;
        case "2":

        case "3":

        case "4":

        case "5":

        case "6":

        case "7":

        case "8":

        case "9":

    }

}

var call_poke_single = async function CPS(id) {

}

var call_poke_type = async function CPT(i) {

    console.log(i);
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${i}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
}

var get_basic_info = async function GBI(id) {

}

var requete_pokemon_vig = async function RPV() {

}

var create_vignette = async function CV(emplacement, id) {

    let emp = document.querySelector(`${emplacement}`)

    let vig = document.createElement("div")
    let vig_img = document.createElement("img")
    let vig_name = document.createElement("span")
    let vig_id = document.createElement("span")

    let vig_type = document.createElement("div")
    let type_vig_img = document.createElement("img")
    let type_vig_name = document.createElement("span")

    vig.className = `vignette_${id}`
    vig_type.className = `vig_type_${id}`

    emp.appendChild(vig)

    let sel_vig = document.querySelector(`.vignette_${id}`)

    sel_vig.appendChild(vig_img)
    sel_vig.appendChild(vig_name)
    sel_vig.appendChild(vig_id)
    sel_vig.appendChild(vig_type)

    let sel_type_vig = document.querySelector(`.vig_type_${id}`)

    sel_type_vig.appendChild(type_vig_img)
    sel_type_vig.appendChild(type_vig_name)
}

//FAIRE DES INNER HTML AU LIEU DES APPENDCHHILD






// let jsp = document.querySelector("main")
// create_vignette("main", 1)






// var fetch_cocktail_by_id = async function fetch_cocktail_by_id(selector, id) {
//     console.log(id);

//     let data = await recup_data(id)
//     console.log(data);

//     let parent = document.querySelector(selector);

//     let box = document.createElement("div");
//     box.className = 'plat container'
//     parent.appendChild(box);


//     let plat = document.querySelector(".plat");
//     for (let elem in data.meals[0]) {
//         switch (elem) {
//             case "strMeal":
//                 {
//                     let nomplat = document.createElement("h2");
//                     nomplat.textContent = data.meals[0].strMeal
//                     plat.appendChild(nomplat);
//                     continue
//                 }
//             case "strArea":
//                 {
//                     let descpays = document.createElement("span");
//                     descpays.textContent = data.meals[0].strArea;
//                     descpays.className = 'pays'
//                     plat.appendChild(descpays);
//                     continue
//                 }
//             case "strInstructions":
//                 {

//                     let recette = document.createElement("span");
//                     recette.textContent = data.meals[0].strInstructions;
//                     recette.className = 'recette'
//                     plat.appendChild(recette);
//                     continue
//                 }
//             case "strMealThumb":
//                 {

//                     let thumbplat = document.createElement("img");
//                     thumbplat.src = data.meals[0].strMealThumb;
//                     plat.appendChild(thumbplat);
//                     continue
//                 }
//             case "strYoutube":
//                 {
//                     let ytlink = document.createElement("iframe");
//                     let ytchiant1 = data.meals[0].strYoutube.slice(0, 24)
//                     let ytchiant2 = data.meals[0].strYoutube.slice(32)
//                     ytlink.src = ytchiant1 + 'embed/' + ytchiant2;
//                     plat.appendChild(ytlink);
//                     continue
//                 }
//         }
//     }
//     for (let i = 1; i <= 20; i++) {

//         if (data.meals[0][`strIngredient${i}`] != "") {
//             let divingr = document.createElement("div");
//             divingr.className = `ingr${i} ingr`
//             plat.appendChild(divingr);
//             let ingr = document.querySelector(`.ingr${i}`);
//             let imgingredient = document.createElement("img");
//             let ingredient = document.createElement("span");
//             let mesure = document.createElement("span");
//             imgingredient.src = `https://www.themealdb.com/images/ingredients/${data.meals[0][`strIngredient${i}`]}-Small.png`;
//             ingredient.textContent = data.meals[0][`strIngredient${i}`] + " ";
//             mesure.textContent = data.meals[0][`strMeasure${i}`];;
//             ingr.appendChild(imgingredient);
//             ingr.appendChild(ingredient);
//             ingr.appendChild(mesure);
//         } else
//             break
//     }
// };

// fetch_cocktail_by_id(".abc", 53085);