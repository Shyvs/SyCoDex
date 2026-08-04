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
