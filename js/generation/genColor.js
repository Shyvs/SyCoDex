function generateColors(types, seed) {

    let paletteResult =
        pickTrait(
            colorPalettes,
            types,
            seed
        );


    return {

        colors:
            paletteResult.trait.colors,

        rarityScore:
            paletteResult.match

    };

}
