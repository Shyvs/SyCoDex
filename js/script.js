function generate() {

    let name = document
        .getElementById("nameInput")
        .value
        .trim();


    // Don't generate if the input is empty
    if (name === "") {
        return;
    }


    // Create the SyCoMon
    let sycomon = generateSyCoMon(name);



    // Display results

    document.getElementById("sycomonName").innerText =
        sycomon.name;


    document.getElementById("sycomonType").innerText =
        sycomon.types.join(" / ");


    document.getElementById("sycomonRarity").innerText =
        sycomon.rarity;


    document.getElementById("sycomonAppearance").innerText =
        sycomon.appearance;


    document.getElementById("sycomonPersonality").innerText =
        sycomon.personality;


    document.getElementById("sycomonHabitat").innerText =
        sycomon.habitat;

}
