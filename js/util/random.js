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

function pickUniqueTraits(list, types, seed, count) {

    let results = [];

    let attempts = 0;


    while (
        results.length < count &&
        attempts < 100
    ) {

        let candidate =
            pickTrait(
                list,
                types,
                seed + attempts
            );


        if (
            !results.some(
                item => item.name === candidate.trait.name
            )
        ) {

            results.push(candidate.trait);

        }


        attempts++;

    }


    return results;

}

function pickUniqueFromList(list, seed, count) {

    let results = [];

    for (let i = 0; i < count; i++) {

        for (let j = 0; j < list.length; j++) {

            let candidate =
                pickFromList(
                    list,
                    seed + (i * 100) + j
                );

            if (!results.includes(candidate)) {

                results.push(candidate);
                break;

            }

        }

    }

    return results;

}


function pickUniqueGenerated(generator, seed, count) {

    let results = [];

    for (let i = 0; i < count; i++) {

        for (let j = 0; j < 50; j++) {

            let candidate =
                generator(
                    seed + (i * 100) + j
                );

            if (!results.includes(candidate)) {

                results.push(candidate);
                break;

            }

        }

    }

    return results;

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


function pickDifferent(generator, startSeed, forbidden, maxAttempts = 20) {

    for (let i = 0; i < maxAttempts; i++) {

        let result =
            generator(startSeed + i);

        if (result !== forbidden) {
            return result;
        }

    }

    return forbidden;

}
