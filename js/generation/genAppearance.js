function generateAppearance(types, legendary, seed) {

// ----------------------------------------
//         Pick appearance traits
// ----------------------------------------

    let species =
        pickUniqueTraits(
            appearanceSpecies,
            types,
            seed + 1,
            2
        );
    
    let surfaces =
        pickUniqueTraits(
            appearanceSurfaces,
            types,
            seed + 2,
            3
        );

    let features =
        pickUniqueTraits(
            appearanceFeatures,
            types,
            seed + 3,
            2
        );

    let body =
        pickUniqueFromList(
            bodyParts,
            seed + 4,
            3
        );

    let size =
        pickFromList(
            sizes,
            seed + 5
        );


// ----------------------------------------
//           Appearance detail
// ----------------------------------------

    let detail;

    if (legendary) {

        detail = {

            trait:
                pickFromList(
                    appearanceRareDetails,
                    seed + 6
                ),

            match: 1

        };

    }

    else if (seededRandom(seed + 7) < 0.20) {

        detail = {

            trait:
                pickFromList(
                    rareAppearanceDetails,
                    seed + 8
                ),

            match: 0

        };

    }

    else {

        detail =
            pickTrait(
                appearanceDetails,
                types,
                seed + 9
            );

    }


// ----------------------------------------
//          Appearance templates
// ----------------------------------------

let templates = [

    // Single species templates

    `A ${size} ${species[0].trait.name} covered in ${surfaces[0].trait.name}. It has ${features[0].trait.name}. ${detail.trait.name}`,

    `A ${size} ${species[0].trait.name} with ${surfaces[0].trait.name} covering its body. It has ${features[0].trait.name}. ${detail.trait.name}`,

    `This ${size} ${species[0].trait.name} has ${surfaces[0].trait.name} all over its body and ${features[0].trait.name}. ${detail.trait.name}`,

    `A peculiar ${species[0].trait.name}. It is ${size} and covered in ${surfaces[0].trait.name}. It has ${features[0].trait.name}. ${detail.trait.name}`,

    `A ${size} ${species[0].trait.name} that has ${surfaces[0].trait.name} along its body and ${surfaces[1].trait.name} around its ${body[0]}. It has ${features[0].trait.name}. ${detail.trait.name}`,

    `A strange ${species[0].trait.name} with a body of ${surfaces[0].trait.name}. Its ${body[2]} are covered in ${surfaces[1].trait.name}, and it has ${features[1].trait.name}. ${detail.trait.name}`,


    // Dual species templates

    `A ${size} ${species[0].trait.name}-${species[1].trait.name} hybrid covered in ${surfaces[0].trait.name}. It has ${features[0].trait.name}. ${detail.trait.name}`,

    `A peculiar ${species[0].trait.name} with traits of a ${species[1].trait.name}. It is ${size} and covered in ${surfaces[0].trait.name}. It has ${features[0].trait.name}. ${detail.trait.name}`,

    `This ${size} creature combines features of a ${species[0].trait.name} and a ${species[1].trait.name}. Its body is covered in ${surfaces[0].trait.name}, and it has ${features[1].trait.name}. ${detail.trait.name}`,

    `A ${size} ${species[0].trait.name} ${species[1].trait.name} with ${surfaces[0].trait.name} across its body. It has ${features[0].trait.name}. ${detail.trait.name}`,

    `A strange ${size} ${species[0].trait.name} with ${species[1].trait.name}-like features. It has ${surfaces[0].trait.name} covering its ${body[0]} and ${features[1].trait.name}. ${detail.trait.name}`,

    `A ${size} ${species[0].trait.name}-${species[1].trait.name} creature with ${surfaces[0].trait.name} and ${surfaces[1].trait.name} across its body. It has ${features[0].trait.name}. ${detail.trait.name}`

];

// ----------------------------------------
//                 Return
// ----------------------------------------

    return {

        text:
            pickFromList(
                templates,
                seed + 100
            ),

        rarityScore:

            species[0].match +

            surfaces[0].match +

            features[0].match +

            detail.match

    };

}
