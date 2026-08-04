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

    `A ${size} ${species[0].name} covered in ${surfaces[0].name}. It has ${features[0].name}. ${detail.trait.name}`,

    `A ${size} ${species[0].name} with ${surfaces[0].name} covering its body. It has ${features[0].name}. ${detail.trait.name}`,

    `This ${size} ${species[0].name} has ${surfaces[0].name} all over its body. It has ${features[0].name}. ${detail.trait.name}`,

    `A peculiar ${species[0].name}. It is ${size} and covered in ${surfaces[0].name}. It has ${features[0].name}. ${detail.trait.name}`,

    `A ${size} ${species[0].name} ${species[1].name} with ${surfaces[0].name}. It has ${features[0].name}. ${detail.trait.name}`,

    `A ${size} ${species[0].name} that has ${surfaces[0].name} along its body and ${surfaces[1].name} around its ${body[0]}. It has ${features[0].name}. ${detail.trait.name}`,

    `A ${size} ${species[0].name} covered mostly in ${surfaces[0].name}, with patches of ${surfaces[1].name} across its ${body[1]}. It has ${features[0].name}. ${detail.trait.name}`,

    `This ${size} ${species[0].name} has ${surfaces[0].name} covering its ${body[0]} and ${surfaces[1].name} lining its ${body[1]}. It has ${features[0].name}. ${detail.trait.name}`,

    `A strange ${species[0].name} with a body of ${surfaces[0].name}. Its ${body[2]} are covered in ${surfaces[1].name}, and it has ${features[1].name}. ${detail.trait.name}`,

    `A ${size} ${species[0].name} whose ${body[0]} are lined with ${surfaces[0].name}. It has ${features[1].name}. ${detail.trait.name}`,

    `This ${species[0].name} is ${size} and has a blend of ${surfaces[0].name} and ${surfaces[1].name} across its body. It has ${features[0].name}. ${detail.trait.name}`,

    `A ${size} ${species[0].name} with ${surfaces[0].name} covering its ${body[0]} and ${surfaces[1].name} around its ${body[1]}. It has ${features[1].name}. ${detail.trait.name}`

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
