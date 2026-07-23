function createSeed(name) {

    let seed = 0;

    for(let i = 0; i < name.length; i++) {
        seed += name.charCodeAt(i);
    }

    return seed;
}


function seededRandom(seed) {

    let x = Math.sin(seed) * 10000;

    return Math.abs(x - Math.floor(x));
}


function generatesycomon() {

    let name =
        document
        .getElementById("nameInput")
        .value
        .trim();


    if(name === "") return;


    let seed = createSeed(name.toLowerCase());


    let type1 =
        types[Math.floor(
            seededRandom(seed + 1) * types.length
        )];


    let type2 =
        types[Math.floor(
            seededRandom(seed + 2) * types.length
        )];


    if(type1 === type2) {
        type2 =
        types[(types.indexOf(type1) + 1) % types.length];
    }


    let size =
        sizes[Math.floor(
            seededRandom(seed + 3) * sizes.length
        )];


    let bodyShape =
        bodyShapes[Math.floor(
            seededRandom(seed + 4) * bodyShapes.length
        )];


    let material =
        materials[Math.floor(
            seededRandom(seed + 5) * materials.length
        )];


    let feature =
        features[Math.floor(
            seededRandom(seed + 6) * features.length
        )];


    let color1 = generateColor(seed + 7);
    let color2 = generateColor(seed + 8);


    let detail =
        details[Math.floor(
            seededRandom(seed + 9) * details.length
        )];


    let appearance =
        `${size} ${bodyShape} with ${material}. It has ${feature}. Its main colors are ${color1} and ${color2}. ${detail}`;


    let personality =
        personalities[Math.floor(
            seededRandom(seed + 10) * personalities.length
        )];


    let habitat =
        habitats[Math.floor(
            seededRandom(seed + 11) * habitats.length
        )];


    document.getElementById("sycomonName").innerText = name;

    document.getElementById("sycomonType").innerText =
        type1 + " / " + type2;

    document.getElementById("sycomonAppearance").innerText =
        appearance;

    document.getElementById("sycomonPersonality").innerText =
        personality;

    document.getElementById("sycomonHabitat").innerText =
        habitat;
}
