const sizes = [
    "Tiny",
    "Small",
    "Medium",
    "Large",
    "Gigantic"
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
    "Hidden islands",
    "Glowing underground forests"
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
        modifiers: ["", "light", "dark", "vibrant", "muted"]
    },

    {
        name: "gray",
        modifiers: ["", "light", "dark"]
    },

    {
        name: "black",
        modifiers: [""]
    },

    {
        name: "white",
        modifiers: [""]
    },

    {
        name: "silver",
        modifiers: [""]
    },

    {
        name: "gold",
        modifiers: [""]
    },

    {
        name: "bronze",
        modifiers: [""]
    }

];

function generateColor(seed) {

    let color =
        pickFromList(colors, seed);

    let modifier =
        pickFromList(
            color.modifiers,
            seed + 1
        );


    if (modifier === "") {

        return color.name;

    }


    return modifier + " " + color.name;

}

function generatePalette(seed) {

    let primary = generateColor(seed);

    let secondary;

    do {

        secondary = generateColor(seed + 10);

    } while (secondary === primary);


    let accent = null;


    if (seededRandom(seed + 20) < 0.30) {

        do {

            accent = generateColor(seed + 30);

        } while (

            accent === primary ||
            accent === secondary

        );

    }


    return {

        primary: primary,

        secondary: secondary,

        accent: accent

    };

}
