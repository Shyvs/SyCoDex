const sizes = [
    "Tiny",
    "Small",
    "Medium",
    "Large",
    "Gigantic"
];


const bodyShapes = [
    "fox-like creature",
    "round and fluffy creature",
    "long serpentine creature",
    "insect-like creature",
    "four-legged beast",
    "floating creature",
    "bird-like creature",
    "amphibious creature",
    "humanoid creature",
    "mechanical creature",
    "rodent-like creature",
    "bear-like creature",
    "cat-like creature",
    "wolf-like creature",
    "deer-like creature",
    "reptilian creature",
    "turtle-like creature",
    "frog-like creature",
    "moth-like creature",
    "butterfly-like creature",
    "bat-like creature",
    "dragon-like creature",
    "plant-like creature",
    "mushroom-like creature",
    "blob-like creature",
    "jelly-like creature",
    "crab-like creature",
    "spider-like creature",
    "fish-like creature",
    "shark-like creature",
    "fairy-like creature",
    "armored creature",
    "ghostly apparition",
    "celestial creature",
    "shadowy creature",
    "cloud-like creature",
    "crystalline creature",
    "energy-based creature"
];


const materials = [
    "soft fur",
    "smooth scales",
    "crystalline plates",
    "wood-like bark",
    "metal armor",
    "mist-like energy",
    "rubbery skin",
    "rocky armor",
    "silky feathers",
    "gelatinous slime",
    "velvety fur",
    "shimmering scales",
    "glass-like surfaces",
    "leaf-covered skin",
    "petal-like layers",
    "ceramic armor",
    "liquid-like body",
    "shadowy mist",
    "iridescent scales",
    "shell-like armor"
];


const features = [
    "large expressive eyes",
    "glowing markings across its body",
    "oversized ears",
    "a long flowing tail",
    "curved horns",
    "crystal growths",
    "leaf-like fins",
    "floating objects orbiting it",
    "sharp claws",
    "small wings",
    "multiple tails",
    "a large fluffy mane",
    "spiral horns",
    "branch-like antlers",
    "a glowing core",
    "large decorative fins",
    "a mask-like face pattern",
    "gemstone-like eyes",
    "long whiskers",
    "a unique crest on its head",
    "floating ribbons or tendrils",
    "a protective shell",
    "needle-like spines",
    "transparent wings",
    "mechanical components",
    "ancient symbols carved into its body",
    "extra sets of eyes",
    "a lantern-like organ"
];


const colors = {
    warm: [
        "red",
        "orange",
        "yellow",
        "gold"
    ],

    cool: [
        "blue",
        "teal",
        "cyan",
        "purple"
    ],

    natural: [
        "green",
        "brown",
        "cream"
    ],

    neutral: [
        "black",
        "white",
        "gray",
        "silver"
    ],

    soft: [
        "pink",
        "lavender"
    ]
};


function generateColor(seed) {

    let allColors = [
        ...colors.warm,
        ...colors.cool,
        ...colors.natural,
        ...colors.neutral,
        ...colors.soft
    ];


    let color =
        allColors[
            Math.floor(
                seededRandom(seed) * allColors.length
            )
        ];


    let modifiers;


    if(colors.neutral.includes(color)) {

        modifiers = [
            "",
            "dark",
            "light",
            "metallic"
        ];

    } else if(colors.soft.includes(color)) {

        modifiers = [
            "",
            "pastel",
            "soft",
            "vibrant"
        ];

    } else {

        modifiers = [
            "",
            "light",
            "dark",
            "vibrant",
            "muted",
            "deep"
        ];
    }


    let modifier =
        modifiers[
            Math.floor(
                seededRandom(seed + 1) * modifiers.length
            )
        ];


    return modifier === ""
        ? color
        : modifier + " " + color;
}


const details = [
    "Its body glows faintly in darkness.",
    "It leaves behind traces of energy as it moves.",
    "Its markings change depending on its mood.",
    "It carries objects it finds interesting.",
    "Its appearance changes slightly with the seasons.",
    "Small sparks of energy dance around its body.",
    "Its eyes glow when it becomes excited.",
    "It leaves behind a trail of glowing footprints.",
    "Its surface shifts colors in different lighting.",
    "It creates a soft humming sound when nearby.",
    "Tiny plants grow wherever it rests.",
    "Small crystals grow naturally from its body.",
    "Its shadow moves slightly differently from its body.",
    "It collects shiny objects and treasures.",
    "Its markings resemble ancient symbols.",
    "It creates a faint mist around itself.",
    "Its body reflects light like glass.",
    "It is surrounded by floating particles.",
    "It sleeps while floating slightly above the ground.",
    "It communicates through unusual sounds.",
    "Its horns or claws glow at night.",
    "Its colors become brighter when happy.",
    "It follows travelers but avoids being noticed.",
    "It creates small nests from unusual materials.",
    "Its reflection behaves strangely.",
    "It mimics the movements of creatures around it."
];


const personalities = [
    "Curious and playful.",
    "Quiet and mysterious.",
    "Friendly and loyal.",
    "Mischievous and clever.",
    "Protective and brave.",
    "Shy but curious.",
    "Playful and energetic.",
    "Calm and protective.",
    "Serious and independent.",
    "Gentle and nurturing."
];


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
