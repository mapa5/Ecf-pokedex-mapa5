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
    empty_elem(".content")


    switch (data_generation) {
        case "1":
            {
                let nbr = 151;
                for (var n1 = 1; n1 <= 151; n1++) {
                	create_vignette(".content", n1)
                	console.log('vignettre crée');
                    let data1_1 = call_poke_gen(n1);
                    console.log('data1 recuperé');
                    let data2_1 = get_poke_info(n1);
                    console.log('data2 recuperé');
                    fill_vignette(data1_1, data2_1, n1);
                }
                return nbr;
            }
        // case "2":
        //     {
        //         let nbr = 99;
        //         for (var n2 = 152; n2 <= 251; n2++) {
        //             try {
        //                 const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${n2}`);
        //                 const data = await response.json();
        //                 console.log(data);
        //                 return data;
        //             } catch (err) {
        //                 console.error(err);
        //             }
        //         }
        //         return nbr;
        //     }
        // case "3":
        //     {
        //         let nbr = 134;
        //         for (var n3 = 252; n3 <= 386; n3++) {
        //             try {
        //                 const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${n3}`);
        //                 const data = await response.json();
        //                 console.log(data);
        //                 return data;
        //             } catch (err) {
        //                 console.error(err);
        //             }
        //         }
        //         return nbr;
        //     }
        // case "4":
        //     {
        //         let nbr = 106;
        //         for (var n4 = 387; n4 <= 493; n4++) {
        //             try {
        //                 const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${n4}`);
        //                 const data = await response.json();
        //                 console.log(data);
        //                 return data;
        //             } catch (err) {
        //                 console.error(err);
        //             }
        //         }
        //         return nbr;
        //     }
        // case "5":
        //     {
        //         let nbr = 155;
        //         for (var n5 = 494; n5 <= 649; n5++) {
        //             try {
        //                 const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${n5}`);
        //                 const data = await response.json();
        //                 console.log(data);
        //                 return data;
        //             } catch (err) {
        //                 console.error(err);
        //             }
        //         }
        //         return nbr;
        //     }
        // case "6":
        //     {
        //         let nbr = 71;
        //         for (var n6 = 650; n6 <= 721; n6++) {
        //             try {
        //                 const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${n6}`);
        //                 const data = await response.json();
        //                 console.log(data);
        //                 return data;
        //             } catch (err) {
        //                 console.error(err);
        //             }
        //         }
        //         return nbr;
        //     }
        // case "7":
        //     {
        //         let nbr = 87;
        //         for (var n7 = 722; n7 <= 809; n7++) {
        //             try {
        //                 const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${n7}`);
        //                 const data = await response.json();
        //                 console.log(data);
        //                 return data;
        //             } catch (err) {
        //                 console.error(err);
        //             }
        //         }
        //         return nbr;
        //     }
        // case "8":
        //     {
        //         let nbr = 95;
        //         for (var n8 = 810; n8 <= 905; n8++) {
        //             try {
        //                 const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${n8}`);
        //                 const data = await response.json();
        //                 console.log(data);
        //                 return data;
        //             } catch (err) {
        //                 console.error(err);
        //             }
        //         }
        //         return nbr;
        //     }
        // case "9":
        //     {
        //         let nbr = 119;
        //         for (var n9 = 906; n9 <= 1025; n9++) {
        //             try {
        //                 const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${n9}`);
        //                 const data = await response.json();
        //                 console.log(data);
        //                 return data;
        //             } catch (err) {
        //                 console.error(err);
        //             }
        //         }
        //         return nbr;
        //     }
    }
});