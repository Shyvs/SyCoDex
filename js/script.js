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

    // Save it for later (used by Log Sighting)
    window.currentSyCoMon = sycomon;

    // Name
    document.getElementById("sycomonName").innerText =
        sycomon.name;

    // Types
    const typeContainer =
        document.getElementById("sycomonType");

    typeContainer.innerHTML = "";

    sycomon.types.forEach(type => {

        const badge =
            document.createElement("span");

        badge.className =
            `type ${type.toLowerCase()}`;

        badge.textContent =
            type;

        typeContainer.appendChild(badge);

    });

    // Rarity
    const rarity =
        document.getElementById("sycomonRarity");

    rarity.className =
        `rarity ${sycomon.rarity.toLowerCase()}`;

    rarity.textContent =
        sycomon.rarity;

    // Description
    document.getElementById("sycomonAppearance").innerText =
        sycomon.appearance;

    document.getElementById("sycomonColors").innerText =
        sycomon.colors;

    document.getElementById("sycomonPersonality").innerText =
        sycomon.personality;

    document.getElementById("sycomonHabitat").innerText =
        sycomon.habitat;

    // Hide previous discovery info
    document.getElementById("discoveredSection").style.display =
        "none";

    document.getElementById("sycomonDiscovery").innerText =
        "";

    // Show Log Sighting button
    document.getElementById("logButton").style.display =
        "inline-block";

}


function logSighting() {

    let discoverer =
        prompt("Enter your name for discovery records:");

    if (discoverer === null || discoverer.trim() === "") {
        return;
    }

    // Save to current SyCoMon
    window.currentSyCoMon.discoveredBy =
        discoverer;

    // Update page
    document.getElementById("sycomonDiscovery").innerText =
        "Discovered by " + discoverer;

    document.getElementById("discoveredSection").style.display =
        "block";

}
