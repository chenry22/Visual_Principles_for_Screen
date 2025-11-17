const links = [
    "sections/introduction.html",
    "sections/prologue.html",
    "sections/act1_scene1.html",
    "sections/act1_scene2.html",
    "sections/act1_scene3.html",
    "sections/act2_scene1.html",
    "sections/act2_scene2.html",
    "sections/act2_scene3.html",
    "sections/act2_scene4.html"
];

function addSceneListeners() {
    var sections = document.getElementsByClassName("section-preview-container");
    for(var i = 0; i < sections.length; i++) {
        const link = links[i];
        sections[i].addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = link;
        });
    }
}


window.addEventListener("load", (event) => {
    addSceneListeners();
});
