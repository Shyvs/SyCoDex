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


const typeContainer =
    document.getElementById("sycomonType");

typeContainer.innerHTML = "";

sycomon.types.forEach(type => {

    const badge =
        document.createElement("span");

    badge.className = `type ${type.toLowerCase()}`;

    badge.textContent = type;

    typeContainer.appendChild(badge);

});

    document.getElementById("sycomonRarity").innerText =
        sycomon.rarity;


    document.getElementById("sycomonAppearance").innerText =
        sycomon.appearance;
    
    document.getElementById("sycomonColors").innerText =
        sycomon.colors;

    document.getElementById("sycomonPersonality").innerText =
        sycomon.personality;


    document.getElementById("sycomonHabitat").innerText =
        sycomon.habitat;

}
