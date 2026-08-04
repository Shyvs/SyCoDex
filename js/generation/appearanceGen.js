function generateAppearance(sycomonTypes, seed) {

    // ----------------------------------------
    //                Species
    // ----------------------------------------

    let speciesResult = pickTrait(
        appearanceSpecies,
        sycomonTypes,
        seed + 1
    );


    let speciesDescription =
        speciesResult.trait.name;


    // Chance for secondary species
    if (seededRandom(seed + 50) < 0.40) {

        let secondSpecies = null;

        for (let i = 1; i <= appearanceSpecies.length; i++) {

            let candidate =
                pickTrait(
                    appearanceSpecies,
                    sycomonTypes,
                    seed + 50 + i
                ).trait;


            if (candidate.name !== speciesDescription) {

                secondSpecies = candidate.name;
                break;

            }

        }


        if (secondSpecies !== null) {

            speciesDescription +=
                " " + secondSpecies;

        }

    }



    // ----------------------------------------
    //                Surfaces
    // ----------------------------------------

    let surface1 =
        pickTrait(
            appearanceSurfaces,
            sycomonTypes,
            seed + 2
        );


    let surfaces = [
        surface1.trait.name
    ];


    // Chance for second surface
    if (seededRandom(seed + 100) < 0.40) {

        for (let i = 1; i <= appearanceSurfaces.length; i++) {

            let candidate =
                pickTrait(
                    appearanceSurfaces,
                    sycomonTypes,
                    seed + 100 + i
                ).trait;


            if (
                candidate.name !== surfaces[0]
            ) {

                surfaces.push(candidate.name);
                break;

            }

        }

    }



    // ----------------------------------------
    //                Features
    // ----------------------------------------

    let featureResult =
        pickTrait(
            appearanceFeatures,
            sycomonTypes,
            seed + 3
        );



    // ----------------------------------------
    //            Appearance Detail
    // ----------------------------------------

    let detailResult;


    if (seededRandom(seed + 200) < 0.20) {

        detailResult = {
            trait:
                pickTrait(
                    rareAppearanceDetails,
                    sycomonTypes,
                    seed + 4
                ).trait,

            rare: true
        };


    } else {

        detailResult = {
            trait:
                pickTrait(
                    appearanceDetails,
                    sycomonTypes,
                    seed + 4
                ).trait,

            rare: false
        };

    }



    // ----------------------------------------
    //                  Size
    // ----------------------------------------

    let size =
        pickFromList(
            sizes,
            seed + 5
        );



    // ----------------------------------------
    //              Body Parts
    // ----------------------------------------

    let bodyPart1 =
        pickFromList(
            bodyParts,
            seed + 6
        );


    let bodyPart2 = null;


    if (seededRandom(seed + 300) < 0.40) {

        for (let i = 1; i <= bodyParts.length; i++) {

            let candidate =
                pickFromList(
                    bodyParts,
                    seed + 300 + i
                );


            if (candidate !== bodyPart1) {

                bodyPart2 = candidate;
                break;

            }

        }

    }



    // ----------------------------------------
    //                Colors
    // ----------------------------------------

    let generatedColors =
        generateColors(seed + 400);



    // ----------------------------------------
    //             Appearance Text
    // ----------------------------------------

    let appearanceTemplates = [

        `A ${size} ${speciesDescription} covered in ${surfaces[0]}.`,

        `A ${size} ${speciesDescription} with ${surfaces[0]} covering its body.`,

        `A peculiar ${speciesDescription}. It is ${size} and covered in ${surfaces[0]}.`,

        `This ${size} ${speciesDescription} has ${surfaces[0]} across its body.`,

        `A ${size} ${speciesDescription} with ${surfaces[0]} along its body and unusual ${featureResult.trait.name}.`,

        `A ${size} ${speciesDescription} covered in ${surfaces[0]} with ${featureResult.trait.name}.`

    ];



    if (surfaces.length > 1) {

        appearanceTemplates.push(

            `A ${size} ${speciesDescription} covered in ${surfaces[0]} with ${surfaces[1]} around its ${bodyPart1}.`,

            `A ${size} ${speciesDescription} that has ${surfaces[0]} covering its body and ${surfaces[1]} along its ${bodyPart1}.`,

            `A ${size} ${speciesDescription} with ${surfaces[0]} and ${surfaces[1]} covering different parts of its body.`

        );

    }



    let appearance =
        pickFromList(
            appearanceTemplates,
            seed + 500
        );


    appearance +=
        ` It has ${featureResult.trait.name}.`;


    appearance +=
        ` ${detailResult.trait.name}`;



    return {

        appearance: appearance,

        species: speciesDescription,

        surfaces: surfaces,

        feature: featureResult.trait.name,

        detail: detailResult.trait.name,

        size: size,

        colors: generatedColors,

        bodyParts: [
            bodyPart1,
            bodyPart2
        ]

    };

}
