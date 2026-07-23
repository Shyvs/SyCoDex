function calculateRarity(score) {


    if(score === 4) {

        return "Common";

    }


    if(score >= 2) {

        return "Uncommon";

    }


    return "Rare";

}

function checkLegendary(seed) {

    let roll = Math.floor(
        seededRandom(seed) * 100
    );


    return roll === 0;

}
