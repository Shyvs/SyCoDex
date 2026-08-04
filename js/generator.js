function generateSyCoMon(name) {

    let seed = createSeed(name.toLowerCase());

// ----------------------------------------
//                  Typing
// ----------------------------------------

let type1 =
    pickFromList(types, seed);

let sycomonTypes = [type1];

// Chance for dual type (60%??)
if (seededRandom(seed + 100) < 0.60) {

    let type2 = type1;

    for (let i = 1; i <= types.length; i++) {

        type2 = pickFromList(
            types,
            seed + 137 + i
        );

        if (type2 !== type1) {
            break;
        }

    }

// Only add if different
    if (type2 !== type1) {
        sycomonTypes.push(type2);
    }
}

// ----------------------------------------
//             Legendary check
// ----------------------------------------

    let legendary = checkLegendary(seed + 200);

// ----------------------------------------
//                 Traits
// ----------------------------------------

// First body form
let bodyResult = pickTrait(
    body,
    sycomonTypes,
    seed + 2
);

let bodyDescription =
    bodyResult.trait.name;

// 40% chance for second body form
if (seededRandom(seed + 250) < 0.40) {

    let secondBody =
        bodyResult.trait;

    // Try to find a different one
    for (let i = 1; i <= body.length; i++) {

        let candidate =
            pickTrait(
                body,
                sycomonTypes,
                seed + 250 + i
            ).trait;

        if (candidate.name !== bodyResult.trait.name) {

            secondBody = candidate;
            break;

        }

    }

    if (secondBody.name !== bodyResult.trait.name) {

        bodyDescription +=
            " " + secondBody.name;

    }

}

 let materialResult = pickTrait(
     materials,
     sycomonTypes,
     seed + 3
);

  let featureResult = pickTrait(
    features,
    sycomonTypes,
    seed + 4
);

// ----------------------------------------
//                  Details
// ----------------------------------------

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

        // 20% chance for normal SyCoMon
        // to receive a rare detail

        if (seededRandom(seed + 300) < 0.20) {

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

// ----------------------------------------
//                 Flavor
// ----------------------------------------

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
    generatePersonality(
        seed + 10
    );
    
// ----------------------------------------
//                  Colors
// ----------------------------------------

let palette =
    generatePalette(seed + 20);

let colorDescription =
    `${palette.primary.charAt(0).toUpperCase() + palette.primary.slice(1)} and ${palette.secondary}`;

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


// ----------------------------------------
//                  Rarity
// ----------------------------------------

    let rarity;

    if (legendary) {

        rarity = "Legendary";

    } else {

        let rarityScore =

            bodyResult.match +
            materialResult.match +
            featureResult.match +
            detailResult.match;


        rarity =
            calculateRarity(
                rarityScore
            );
    }

// ----------------------------------------
//               Appearance
// ----------------------------------------

let material1 =
    materialResult.trait.name;

let material2 = null;

// 35% chance for a second material
if (seededRandom(seed + 400) < 0.35) {

    for (let i = 1; i <= materials.length; i++) {

        let candidate =
            pickTrait(
                materials,
                sycomonTypes,
                seed + 400 + i
            ).trait;

        if (candidate.name !== material1) {

            material2 = candidate.name;
            break;

        }

    }

}

let appearanceTemplates = [

    `A ${size.toLowerCase()} ${bodyDescription} covered in ${material1}.`,

    `A ${size.toLowerCase()} ${bodyDescription} that has ${material1} covering its body.`,

    `A ${size.toLowerCase()} ${bodyDescription} that has ${material1} all over its body.`,

    `A ${size.toLowerCase()} ${bodyDescription} with ${material1} all over it.`,

    `A ${size.toLowerCase()} ${bodyDescription} patterned with ${material1}.`,
    
    `A ${size.toLowerCase()} ${bodyDescription} It has ${material1} covering its back and limbs.`,

];

if (material2 !== null) {

    appearanceTemplates.push(

        `A ${size.toLowerCase()} ${bodyDescription} that has ${material1} along its body and ${material2} around its head.`,

        `A ${size.toLowerCase()} ${bodyDescription} that has ${material1} covering its body and ${material2} on its arms.`,

        `A ${size.toLowerCase()} ${bodyDescription} with ${material1} and ${material2}.`

        `A ${size.toLowerCase()} ${bodyDescription} covered in mostly ${material1} with some ${material2}.`        

        `A ${size.toLowerCase()} ${bodyDescription} covered in a blend of ${material1} and ${material2}.`,
        
        `A ${size.toLowerCase()} ${bodyDescription} covered in patterns of ${material1} and ${material2}.`,

        `A ${size.toLowerCase()} ${bodyDescription}. It is patterend with ${material1} and ${material2}.`,

        `A ${size.toLowerCase()} ${bodyDescription}. Covered mostly in ${material1}. It has patches of ${material2}.`,
        
    );

}

let appearance =
    pickFromList(
        appearanceTemplates,
        seed + 500
    );

// Add feature and detail after
appearance +=
    ` It has ${featureResult.trait.name}.`;

appearance +=
    ` ${detailResult.trait.name}`;
    
// ----------------------------------------
//                  Return
// ----------------------------------------

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
