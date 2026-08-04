const DEBUG_LEGENDARY = true;
function calculateRarity(seed) {

    if (DEBUG_LEGENDARY) {

        return "Legendary";

    }

    let roll =
        Math.floor(
            seededRandom(seed) * 100
        );

    if (roll < 2) return "Legendary";
    if (roll < 20) return "Rare";
    if (roll < 50) return "Uncommon";

    return "Common";

}

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
