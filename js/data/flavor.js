const bodyParts = [
    "arms",
    "legs",
    "back",
    "torso",
    "head",
    "neck",
    "limbs",
    "shoulders",
    "spine",
    "tail"
];

const sizes = [
    "tiny",
    "small",
    "medium sized",
    "large",
    "gigantic"
];


const habitats = [
    "Deep forests",
    "Ancient ruins",
    "Crystal caves",
    "Mountain peaks",
    "Volcanic regions",
    "Coral reefs",
    "Coastal shores",
    "Deserts",
    "Abandoned cities",
    "Forgotten temples",
    "Magical forests",
    "Floating islands",
    "Dream-like landscapes",
    "Factories",
    "Swamps",    
    "Plains",  
    "Islands",    
    "Snowy caves",  
    "Suburbs",
    "Busy cities",  
    "Flowery fields",
    "Woodlands",
    "Rivers",
    "Calm waters",
    "Far from civilization",
    "Warm biomes",
    "Cold biomes",
    "Lively beaches",
    "Rocky trails",
    "Tall grass",
    "Quiet ponds",
    "Lively forests",
    "Gardens",
    "Fields",
    "Graveyards",
    "Abandoned buildings",
    "Large bodies of water",
    "Glowing underground forests"
];


const personalities = [

    ["Cowardly", "Brave", "Bold", "Timid"],
    ["Lazy", "Energetic"],
    ["Quiet", "Loud"],
    ["Serious", "Mischievous", "Goofy", "Playful"],
    ["Aloof", "Friendly", "Outgoing", "Reserved", "Solitary"],
    ["Independent", "Loyal"],
    ["Indifferent", "Curious"],
    ["Protective", "Carefree"],
    ["Mysterious", "Expressive"],
    ["Nurturing", "Competitive"],
    ["Clever", "Clumsy"],
    ["Aggressive", "Calm"],
    ["Optimistic", "Pessimistic"],
    ["Patient", "Impulsive"]

];


const colors = [

    {
        name: "red",
        modifiers: ["", "light", "dark", "vibrant", "muted"]
    },

    {
        name: "orange",
        modifiers: ["", "light", "dark", "vibrant", "muted"]
    },

    {
        name: "yellow",
        modifiers: ["", "light", "dark", "vibrant", "muted"]
    },

    {
        name: "green",
        modifiers: ["", "light", "dark", "vibrant", "muted"]
    },

    {
        name: "blue",
        modifiers: ["", "light", "dark", "vibrant", "muted"]
    },

    {
        name: "purple",
        modifiers: ["", "light", "dark", "vibrant", "muted"]
    },

    {
        name: "pink",
        modifiers: ["", "light", "dark", "vibrant", "muted"]
    },

    {
        name: "brown",
        modifiers: ["", "light", "dark", "rich", "muddy"]
    },

    {
        name: "gray",
        modifiers: ["", "light", "dark"]
    },

    {
        name: "black",
        modifiers: ["", "jet"]
    },

    {
        name: "white",
        modifiers: ["", "pure"]
    },

    {
        name: "silver",
        modifiers: ["", "shining"]
    },

    {
        name: "gold",
        modifiers: ["", "glistening"]
    },

    {
        name: "bronze",
        modifiers: [""]
    }

];

function generateColors(seed) {

    let selectedColors = [];

    let attempts = 0;

    while (selectedColors.length < 3 && attempts < 50) {

        let color =
            generateColor(seed + attempts);

        if (!selectedColors.includes(color)) {

            selectedColors.push(color);

        }

        attempts++;

    }

    return selectedColors;

}

function generatePersonality(seed) {

    let category1 =
        pickFromList(personalities, seed);

    let category2 =
        pickDifferent(
            s => pickFromList(personalities, s),
            seed + 20,
            category1
        );

    let personality1 =
        pickFromList(category1, seed + 1);

    let personality2 =
        pickFromList(category2, seed + 2);

    return `${personality1} and ${personality2}.`;

}
