function generateBehavior(types, seed, legendary) {

    let behaviorResult;


    // Legendary SyCoMon always gets a rare behavior
    if (legendary) {

        behaviorResult = {
            trait: pickFromList(
                rareBehaviors,
                seed
            ),
            match: 1
        };

    } 
    
    // 20% chance for non-legend SyCoMon to get rare behavior
    else if (seededRandom(seed + 50) < 0.20) {

        behaviorResult = {
            trait: pickFromList(
                rareBehaviors,
                seed
            ),
            match: 0
        };

    } 
    
    else {

        behaviorResult =
            pickTrait(
                behaviors,
                types,
                seed
            );

    }

    return behaviorResult.trait.name;

}
