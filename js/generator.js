function generateSyCoMon(name) {

    let seed = createSeed(name.toLowerCase());


   // Generate typing

let type1 = pickFromList(types, seed);

let sycomonTypes = [type1];


// 60% chance to become dual type
if (seededRandom(seed + 100) < 0.60) {

    let type2;

    do {

        type2 = pickFromList(types, seed + 1);

    } while (type2 === type1);

    sycomonTypes.push(type2);

}

    // Generate influenced traits
    let shapeResult = pickTrait(shapes, sycomonTypes, seed + 2);
    let materialResult = pickTrait(materials, sycomonTypes, seed + 3);
    let featureResult = pickTrait(features, sycomonTypes, seed + 4);
  let legendary = checkLegendary(seed + 50);


let detailResult;


if(legendary) {

    detailResult = {
        trait: {
            name: pickFromList(rareDetails, seed + 5)
        },
        match: 1
    };

} else {

    detailResult = pickTrait(details, sycomonTypes, seed + 5);

}

    // Generate flavor
    let color1 = pickFromList(colors, seed + 6);
    let color2 = pickFromList(colors, seed + 7);

    let size = pickFromList(sizes, seed + 8);
    let habitat = pickFromList(habitats, seed + 9);
    let personality = pickFromList(personalities, seed + 10);


    // Calculate rarity
    let rarityScore = 
        shapeResult.match +
        materialResult.match +
        featureResult.match +
        detailResult.match;


  let rarity;


if(legendary) {

    rarity = "Legendary";

} else {

    rarity = calculateRarity(rarityScore);

}

    // Build appearance description
    let appearance =
        `${size} ${shapeResult.trait.name} with ${materialResult.trait.name}. 
        It has ${featureResult.trait.name}. 
        Its colors are ${color1} and ${color2}. 
        ${detailResult.trait.name}`;


return {

    name: name,

    types: sycomonTypes,

    rarity: rarity,

    legendary: legendary,

    appearance: appearance,

    habitat: habitat,

    personality: personality

};
}
