function generateSyCoMon(name) {

    let seed = createSeed(name.toLowerCase());


    // ==========================
    // Typing
    // ==========================

    let type1 = pickFromList(types, seed);

    let sycomonTypes = [type1];


    // 60% chance for dual typing
    if (seededRandom(seed + 100) < 0.60) {

        let type2;

        do {

            type2 = pickFromList(
                types,
                seed + 137
            );

        } while (type2 === type1);

        sycomonTypes.push(type2);
    }


    // ==========================
    // Legendary check
    // ==========================

    let legendary = checkLegendary(seed + 200);


    // ==========================
    // Traits
    // ==========================

    let shapeResult =
        pickTrait(
            shapes,
            sycomonTypes,
            seed + 2
        );

    let materialResult =
        pickTrait(
            materials,
            sycomonTypes,
            seed + 3
        );

    let featureResult =
        pickTrait(
            features,
            sycomonTypes,
            seed + 4
        );


    // ==========================
    // Details
    // ==========================

    let detailResult;


    if (legendary) {

        detailResult = {
            trait: pickFromList(
                rareDetails,
                seed + 5
            ),
            match: 1
        };

    } else {

        // 10% chance for normal SyCoMon
        // to receive a rare detail

        if (seededRandom(seed + 300) < 0.10) {

            detailResult = {
                trait: pickFromList(
                    rareDetails,
                    seed + 5
                ),
                match: 0
            };

        } else {

            detailResult = pickTrait(
                details,
                sycomonTypes,
                seed + 5
            );

        }
    }


    // ==========================
    // Flavor
    // ==========================

    let size =
        pickFromList(
            sizes,
            seed + 8
        );

    let habitat =
        pickFromList(
            habitats,
            seed + 9
        );

    let personality =
        pickFromList(
            personalities,
            seed + 10
        );


 // ==========================
// Colors
// ==========================

let palette =
    generatePalette(seed + 20);


let colorDescription =
    `${palette.primary} and ${palette.secondary}`;


if (palette.accent !== null) {

    let accentPhrases = [

        `with an accent of ${palette.accent}`,

        `with touches of ${palette.accent}`,

        `accented by ${palette.accent}`

    ];


    let accentText =
        pickFromList(
            accentPhrases,
            seed + 21
        );


    colorDescription +=
        `, ${accentText}`;

}


    // ==========================
    // Rarity
    // ==========================

    let rarity;


    if (legendary) {

        rarity = "Legendary";

    } else {

        let rarityScore =

            shapeResult.match +
            materialResult.match +
            featureResult.match +
            detailResult.match;


        rarity =
            calculateRarity(
                rarityScore
            );
    }


    // ==========================
    // Appearance
    // ==========================

  let appearance =
    `A ${size} ${shapeResult.trait.name} with ${materialResult.trait.name}. ` +
    `It has ${featureResult.trait.name}. ` +
    `${detailResult.trait.name}`;

    // ==========================
    // Return
    // ==========================

    return {

        name: name,

        types: sycomonTypes,

        rarity: rarity,

        legendary: legendary,

        appearance: appearance,

        colors: colorDescription,

        habitat: habitat,

        personality: personality

    };

}
