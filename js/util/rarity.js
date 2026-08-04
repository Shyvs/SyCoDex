//0.00 - 0.50  Common     50%
//0.50 - 0.80  Uncommon   30%
//0.80 - 0.98  Rare       18%
//0.98 - 1.00  Legendary   2%

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
