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



