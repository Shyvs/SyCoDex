const personalityGroups = [

    ["Cowardly", "Brave", "Bold", "Timid"],
    ["Lazy", "Energetic"],
    ["Quiet", "Loud"],
    ["Serious", "Mischievous", "Goofy", "Playful"],
    ["Aloof", "Friendly", "Outgoing", "Reserved", "Solitary"],
    ["Independent", "Loyal"],
    ["Indifferent", "Curious"],
    ["Protective", "Carefree"],
    ["Mysterious", "Expressive"],
    ["Nurturing", "Competitive"],
    ["Clever", "Clumsy"],
    ["Aggressive", "Calm"],
    ["Optimistic", "Pessimistic"],
    ["Patient", "Impulsive"]

];

function generatePersonality(seed) {

    let category1 =
        pickFromList(
            personalityGroups,
            seed
        );


    let category2 =
        pickDifferent(
            s => pickFromList(
                personalityGroups,
                s
            ),
            seed + 20,
            category1
        );


    let personality1 =
        pickFromList(
            category1,
            seed + 1
        );


    let personality2 =
        pickFromList(
            category2,
            seed + 2
        );


    return [
        personality1,
        personality2
    ];

}
