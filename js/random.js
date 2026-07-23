function createSeed(name) {

    let seed = 0;

    for(let i = 0; i < name.length; i++) {
        seed += name.charCodeAt(i);
    }

    return seed;

}


function seededRandom(seed) {

    let x = Math.sin(seed) * 10000;

    return x - Math.floor(x);

}


function pickFromList(list, seed) {

    return list[
        Math.floor(
            seededRandom(seed) * list.length
        )
    ];

}
function pickTrait(list, types, seed) {

    let matching = [];
    let nonMatching = [];


    list.forEach(trait => {

        let matches = trait.types.some(type =>
            types.includes(type)
        );


        if(matches) {
            matching.push(trait);
        } 
        else {
            nonMatching.push(trait);
        }

    });


    let useMatching =
        seededRandom(seed) < 0.75;


    let pool;

    let matched;


    if(useMatching && matching.length > 0) {

        pool = matching;
        matched = 1;

    } else {

        pool = nonMatching;
        matched = 0;

    }


    let trait =
        pool[
            Math.floor(
                seededRandom(seed + 1) * pool.length
            )
        ];


    return {

        trait: trait,
        match: matched

    };

}
