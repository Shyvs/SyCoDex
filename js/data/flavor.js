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

    let primary =
        generateColor(seed);

    // Find a different secondary color
    let secondary = primary;

    for (let i = 1; i < 20; i++) {

        secondary =
            generateColor(seed + 10 + i);

        if (secondary !== primary) {
            break;
        }

    }


    let accent = null;

    if (seededRandom(seed + 20) < 0.30) {

        for (let i = 1; i < 20; i++) {

            accent =
                generateColor(seed + 30 + i);

            if (
                accent !== primary &&
                accent !== secondary
            ) {
                break;
            }

        }

        // If we somehow never found a unique accent,
        // just don't use one.
        if (
            accent === primary ||
            accent === secondary
        ) {
            accent = null;
        }

    }


    return {

        primary: primary,

        secondary: secondary,

        accent: accent

    };

}
