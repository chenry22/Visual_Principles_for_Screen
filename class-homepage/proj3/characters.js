var characters = [
    ["Bill McNitt", "Screen Director", ""],
    ["Clair Peemoller", "Scenario Writer", "It's preposterous! <i>But</i> preposterous!"],
    ["Sol Salzer", "Associate Producer", ""],
    ["Anthony Farrow", "President of the Farrow Film Studios", ""],
    ["Frederica Sayers", "", ""],
    ["Mick Watts", "Press Agent", ""],
    ["Miss Terrence", "<span class='kay-gonda'>Kay Gonda's</span> Secretary", ""],
    ["George S. Perkins", "Assistant Manager of the Daffodil Canning Co.", ""],
    ["Mrs. Perkins", "George Perkins' Wife", ""],
    ["Mrs. Shly", "Mrs. Perkins' Mother", ""],
    ["Kay Gonda", "", ""],
    ["Chuck Fink", "Sociologist", ""],
    ["Fanny Fink", "Chuck Fink's Wife", ""],
    ["Dwight Langley", "Artst", ""],
    ["Eunice Hammond", "", ""],
    ["Claude Ignatius Hix", "Evangelist", ""],
    ["Sister Essie Twomey", "Evangelist", ""],
    ["Count Dietrich von Esterhazy", "", ""],
    ["Lalo Jans", "", ""],
    ["Mrs. Monaghan", "Landlady", ""],
    ["Johnnie Dawes", "", ""]
];

function loadCharacters() {
    var grid = document.getElementById("characters")
    for (var i = 0; i < characters.length; i++) {
        var c = characters[i];
        var characterDiv = document.createElement("div");
        characterDiv.classList.add("character-block")

        var img = document.createElement("img");
        img.src = "imgs/" + String(c[0]).toLowerCase().replace(" ", "-");
        img.alt = c[0];
        characterDiv.appendChild(img);

        var name = document.createElement("h2");
        name.innerHTML = c[0];
        characterDiv.appendChild(name);
        if (c[1] != "") {
            var role = document.createElement("h3");
            role.innerHTML = c[1];
            characterDiv.appendChild(role);
        }
        var quote = document.createElement("h4");
        quote.innerHTML = '"' + c[2] + '"';
        characterDiv.appendChild(quote);

        // wrapper to allow for dynamic divider
        var wrapper = document.createElement("div");
        var divider = document.createElement("div");
        divider.classList.add("divider");
        wrapper.appendChild(characterDiv);
        wrapper.appendChild(divider);
        grid.appendChild(wrapper);
    }
}

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  loadCharacters();
});