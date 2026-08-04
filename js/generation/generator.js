function generateSyCoMon(name) {

    let seed =
        createSeed(
            name.toLowerCase()
        );


// ----------------------------------------
//                  Typing
// ----------------------------------------

    let type1 =
        pickFromList(
            types,
            seed
        );


    let sycomonTypes = [
        type1
    ];


    // 60% chance for dual type
    if (seededRandom(seed + 100) < 0.60) {

        let type2 = type1;


        for (let i = 1; i <= types.length; i++) {

            type2 =
                pickFromList(
                    types,
                    seed + 137 + i
                );


            if (type2 !== type1) {
                break;
            }

        }


        if (type2 !== type1) {

            sycomonTypes.push(
                type2
            );

        }

    }


// ----------------------------------------
//             Legendary Check
// ----------------------------------------

    let legendary =
        checkLegendary(
            seed + 200
        );


// ----------------------------------------
//              Generation
// ----------------------------------------

    let appearance =
        generateAppearance(
            sycomonTypes,
            seed + 300
        );


    let colors =
        generateColors(
            seed + 400
        );


    let behavior =
        generateBehavior(
            sycomonTypes,
            seed + 500,
            legendary
        );


    let personality =
        generatePersonality(
            seed + 600
        );


    let habitat =
        pickFromList(
            habitats,
            seed + 700
        );


// ----------------------------------------
//                  Rarity
// ----------------------------------------

    let rarity;


    if (legendary) {

        rarity =
            "Legendary";

    } 
    
    else {

        let rarityScore =
            appearance.match +
            behavior.match;


        rarity =
            calculateRarity(
                rarityScore
            );

    }


// ----------------------------------------
//                  Return
// ----------------------------------------

    return {

        name: name,

        types: sycomonTypes,

        rarity: rarity,

        legendary: legendary,


        appearance: appearance.text,

        colors: colors,

        behavior: behavior.text,

        personality: personality,

        habitat: habitat

    };

}
