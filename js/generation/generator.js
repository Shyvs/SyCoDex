function generateSyCoMon(name) {

    let seed =
        createSeed(name.toLowerCase());


    let sycomonTypes =
        generateTypes(seed);


    let rarity =
        calculateRarity(seed + 200);


    let legendary =
        rarity === "Legendary";


    let appearance =
        generateAppearance(
            sycomonTypes,
            legendary,
            seed + 300
        );


let colors =
    generateColors(
        sycomonTypes,
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
