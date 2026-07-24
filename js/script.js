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

}
    
function logSighting() {


    let discoverer =
        prompt("Enter your name for discovery records:");



    if(discoverer === null || discoverer.trim() === "") {

        return;

    }


    document.getElementById("sycomonDiscovery").innerText =
        "Discovered by " + discoverer;



    document.getElementById("discoveredSection").style.display =
        "block";


    window.currentSyCoMon.discoveredBy =
        discoverer;

}

    
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

const rarity =
    document.getElementById("sycomonRarity");

rarity.className =
    `rarity ${sycomon.rarity.toLowerCase()}`;

rarity.textContent =
    sycomon.rarity;


    document.getElementById("sycomonAppearance").innerText =
        sycomon.appearance;
    
    document.getElementById("sycomonColors").innerText =
        sycomon.colors;

    document.getElementById("sycomonPersonality").innerText =
        sycomon.personality;

    document.getElementById("sycomonHabitat").innerText =
        sycomon.habitat;

    document.getElementById("logButton").style.display =
    "inline-block";

window.currentSyCoMon = sycomon;

    

}
