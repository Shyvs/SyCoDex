function calculateRarity(seed) {

    let roll =
        seededRandom(seed);


    if (roll < 0.50) {

        return "Common";

    }

    else if (roll < 0.80) {

        return "Uncommon";

    }

    else if (roll < 0.98) {

        return "Rare";

    }

    else {

        return "Legendary";

    }

}
