function generateColor(seed) {

    let color =
        pickFromList(
            colors,
            seed
        );

    let modifier =
        pickFromList(
            color.modifiers,
            seed + 1
        );

    if (modifier === "") {
        return color.name;
    }

    return `${modifier} ${color.name}`;

}


function generateColors(seed) {

    return pickUniqueGenerated(
        generateColor,
        seed,
        3
    );

}
