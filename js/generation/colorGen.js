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
