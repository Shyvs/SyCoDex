const types = [
    "Fire",
    "Water",
    "Grass",
    "Electric",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dragon",
    "Dark",
    "Steel",
    "Fairy",
    "Normal"
];


const appearances = [
    "A small creature with glowing markings and unusual features.",
    "A mysterious SyCoMon with a unique body shape and strange abilities.",
    "A fluffy creature covered in soft fur and colorful patterns.",
    "A sleek SyCoMon with sharp features and an intimidating appearance.",
    "A tiny SyCoMon that appears fragile but hides great strength."
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

    "small rodent-like creature",
    "large bear-like creature",
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

    "tiny fairy-like creature",
    "armored creature",
    "ancient beast",
    "ghostly apparition",
    "living statue-like creature",
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
    "rough stone-like skin",
    "shimmering scales",
    "glass-like surfaces",
    "leaf-covered skin",
    "petal-like layers",
    "ceramic armor",
    "liquid-like body",
    "shadowy mist",
    "woven fiber-like textures",

    "glowing energy patterns",
    "frost-covered surfaces",
    "molten rock-like skin",
    "porcelain-like features",
    "metallic plating",
    "iridescent scales",
    "cloud-like fluff",
    "crystal-covered skin",
    "feathered wings",
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
    "large protective shell",
    "oversized paws",
    "needle-like spines",
    "color-changing patterns",
    "transparent wings",
    "a bell-like structure",
    "rings around its body",
    "a glowing tail tip",
    "small floating companions",

    "mechanical components",
    "ancient symbols carved into its body",
    "spiraling markings",
    "extra sets of eyes",
    "a crown-like structure",
    "natural armor plates",
    "webbed limbs",
    "long flowing ears",
    "a curled tail",
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

const colorModifiers = {

    standard: [
        ""
    ],

    brightness: [
        "light",
        "dark",
        "bright",
        "deep"
    ],

    saturation: [
        "vibrant",
        "muted",
        "soft",
        "pastel"
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


    let modifierPool;


    if(colors.neutral.includes(color)) {

        modifierPool = [
            "",
            "dark",
            "light",
            "metallic"
        ];

    } else if(colors.soft.includes(color)) {

        modifierPool = [
            "",
            "pastel",
            "soft",
            "vibrant"
        ];

    } else {

        modifierPool = [
            "",
            "light",
            "dark",
            "vibrant",
            "muted",
            "deep"
        ];
    }


    let modifier =
        modifierPool[
            Math.floor(
                seededRandom(seed + 1) * modifierPool.length
            )
        ];


    if(modifier === "") {
        return color;
    }


    return modifier + " " + color;
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
    "Its fur, scales, or surface shifts colors in different lighting.",
    "It creates a soft humming sound when nearby.",
    "Tiny plants grow wherever it rests.",
    "Small crystals grow naturally from its body.",
    "Its shadow moves slightly differently from its body.",
    "It collects shiny objects and treasures.",
    "It hides small objects inside its body.",
    "Its markings resemble ancient symbols.",
    "Its tail or ears move according to its emotions.",
    "It creates a faint mist around itself.",
    "It changes its appearance when entering different environments.",
    "Its body reflects light like glass.",
    "It is often surrounded by small floating particles.",
    "Its footsteps leave unusual patterns behind.",
    "It sleeps while floating slightly above the ground.",
    "It wraps itself in its own tail when resting.",
    "It communicates through unusual sounds or melodies.",
    "Its horns, claws, or spikes glow at night.",
    "Its body temperature changes depending on its mood.",
    "It sheds pieces of its outer layer that become decorations.",
    "It grows unique patterns as it ages.",
    "Its colors become brighter when it is happy.",
    "It can sense changes in its surroundings.",
    "It is attracted to certain sounds or music.",
    "It follows travelers but avoids being noticed.",
    "It enjoys collecting things left behind by humans.",
    "It creates small nests from unusual materials.",
    "It becomes nearly invisible when frightened.",
    "It appears different when viewed from different angles.",
    "Its reflection behaves strangely.",
    "It always carries a small natural object.",
    "It is rarely seen without a group of smaller creatures nearby.",
    "Its body contains a glowing core.",
    "Its markings appear only under certain conditions.",
    "It creates shapes or patterns when moving.",
    "It leaves a pleasant scent behind.",
    "It mimics the movements of creatures around it."
];

const personalities = [
    "Curious and playful, it enjoys exploring new places.",
    "Quiet and mysterious, it prefers to observe from a distance.",
    "Friendly and loyal, it forms strong bonds with trainers.",
    "Mischievous and clever, it enjoys surprising others.",
    "Protective and brave.",
    "Shy but curious",
    "Playful and energetic",
    "Calm and protective",
    "Serious and independent",
    "Gentle and nurturing"
];

const habitats = [
    // Forest / Nature
    "Deep forests",
    "Ancient forests",
    "Moss-covered woods",
    "Rainforests",
    "Bamboo forests",
    "Flower-filled meadows",
    "Dense jungles",
    "Foggy woodland",
    "Giant tree canopies",
    "Hidden forest clearings",
    "Autumn forests",
    "Frozen forests",

    // Mountains / Caves
    "Mountain peaks",
    "Rocky cliffs",
    "Volcanic regions",
    "Crystal caves",
    "Underground caverns",
    "Abandoned mines",
    "Ice caves",
    "Hot springs",
    "Mountain temples",
    "Deep underground tunnels",

    // Water
    "Deep oceans",
    "Coral reefs",
    "Coastal shores",
    "Rocky beaches",
    "Frozen seas",
    "Underwater ruins",
    "Rivers and streams",
    "Swampy wetlands",
    "Misty lakes",
    "Waterfall valleys",

    // Desert / Dry Areas
    "Deserts",
    "Ancient deserts",
    "Sand dunes",
    "Oasis regions",
    "Dry canyons",
    "Rocky badlands",
    "Salt flats",

    // Urban / Human Areas
    "Abandoned cities",
    "Quiet towns",
    "Crowded cities",
    "Rooftops",
    "Industrial areas",
    "Old train stations",
    "Forgotten buildings",
    "Human settlements",
    "City parks",

    // Magical / Mysterious
    "Ancient ruins",
    "Forgotten temples",
    "Haunted locations",
    "Places with strong memories",
    "Hidden valleys",
    "Magical forests",
    "Areas with unusual weather",
    "Places where legends are told",
    "Sacred grounds",
    "Forgotten battlefields",

    // Sky / Space
    "High mountain skies",
    "Cloud-covered regions",
    "Floating islands",
    "Stormy skies",
    "Open grasslands",
    "Night skies",
    "Meteor impact sites",
    "Astronomical observatories",

    // Strange / Unique
    "Dream-like landscapes",
    "Mirror-like dimensions",
    "Glowing underground forests",
    "Places where seasons change rapidly",
    "Areas with strange energy",
    "Locations where time feels unusual",
    "Hidden islands",
    "Rarely visited wilderness"
];


// Convert name into a consistent seed
function createSeed(name) {

    let seed = 0;

    for(let i = 0; i < name.length; i++) {
        seed += name.charCodeAt(i);
    }

    return seed;
}


// Repeatable random generator
function seededRandom(seed) {

    let x = Math.sin(seed) * 10000;

    return Math.abs(x - Math.floor(x));
}



function generatesycomon() {

    console.log("Generate button pressed");

    let name = document
        .getElementById("nameInput")
        .value
        .trim();


    if(name === "") return;


    let seed = createSeed(name.toLowerCase());


    let type1 =
        types[Math.floor(
            seededRandom(seed) * types.length
        )];


    let type2 =
        types[Math.floor(
            seededRandom(seed + 1) * types.length
        )];

    let bodyShape =
    bodyShapes[Math.floor(
        seededRandom(seed + 3) * bodyShapes.length
    )];

let feature =
    features[Math.floor(
        seededRandom(seed + 4) * features.length
    )];

let material =
    materials[Math.floor(
        seededRandom(seed + 5) * materials.length
    )];

let primaryColor =
    generateColor(seed + 6);

let secondaryColor =
    generateColor(seed + 7);

let detail =
    details[Math.floor(
        seededRandom(seed + 8) * details.length
    )];


let appearance =
    `A ${bodyShape} with ${material}. It has ${feature}. Its main colors are ${primaryColor} and ${secondaryColor}. ${detail}`;

    let personality =
        personalities[Math.floor(
            seededRandom(seed + 4) * personalities.length
        )];


    let habitat =
        habitats[Math.floor(
            seededRandom(seed + 5) * habitats.length
        )];


    let entry =
        entries[Math.floor(
            seededRandom(seed + 6) * entries.length
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

    document.getElementById("sycomonDescription").innerText =
        entry;
}
