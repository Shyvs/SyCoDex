function createSeed(name) {

    let seed = 0;

    for(let i = 0; i < name.length; i++) {
        seed += name.charCodeAt(i);
    }

    return seed;

}


function seededRandom(seed) {

    let x = Math.sin(seed) * 10000;

    return x - Math.floor(x);

}


function pickFromList(list, seed) {

    return list[
        Math.floor(
            seededRandom(seed) * list.length
        )
    ];

}
