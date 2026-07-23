function calculateRarity(score) {


    if(score === 4) {

        return "Common";

    }


    if(score >= 2) {

        return "Uncommon";

    }


    return "Rare";

}
