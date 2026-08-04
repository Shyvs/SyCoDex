    let type1 =
        pickFromList(
            types,
            seed
        );


    let sycomonTypes = [
        type1
    ];


    // 60% chance for dual type
    if (seededRandom(seed + 100) < 0.60) {

        let type2 = type1;


        for (let i = 1; i <= types.length; i++) {

            type2 =
                pickFromList(
                    types,
                    seed + 137 + i
                );


            if (type2 !== type1) {
                break;
            }

        }


        if (type2 !== type1) {

            sycomonTypes.push(
                type2
            );

        }

    }

