function generateSyCoMon(name) {

    let seed =
        createSeed(name.toLowerCase());


    let sycomonTypes =
        generateTypes(seed);


    let legendary =
        checkLegendary(seed + 200);


    let appearance =
        generateAppearance(
            sycomonTypes,
            legendary,
            seed + 300
        );


    let colors =
        generateColors(
            seed + 400
        );


    let behavior =
        generateBehavior(
            sycomonTypes,
            legendary,
            seed + 500
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


    let rarity =
    calculateRarity(
        appearance.rarityScore +
        behavior.rarityScore
    );


    return {

        name: name,

        types: sycomonTypes,

        rarity: legendary ? "Legendary" : rarity,

        legendary: legendary,

        appearance: appearance.text,

        colors: colors,

        behavior: behavior.text,

        personality: personality,

        habitat: habitat

    };

}
