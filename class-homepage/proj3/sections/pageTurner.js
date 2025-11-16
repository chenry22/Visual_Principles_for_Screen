function updatePageNumURL(i) {
    var url = new URL(window.location);
    (url.searchParams.has('page') ? url.searchParams.set('page', i) : url.searchParams.append('page', i));
    url.search = url.searchParams;
    history.pushState({}, null, url.toString());
}

function previousPage() {
    var pages = document.getElementsByClassName("page");
    for(var i = 0; i < pages.length; i++) {
        if (pages[i].classList.contains('active')) {
            if (i > 0) {
                pages[i].classList.remove('active');
                pages[i - 1].classList.add('active');
                updatePageNumURL(i - 1);
                window.scrollTo(0,0);
            } else {
                // redirect to prev section
                switch(window.location.pathname.split("/").pop()) {
                    case "prologue.html":
                    case "prologue":
                        window.location.href = "introduction.html?page=2";
                        break;
                    case "act1_scene1.html":
                    case "act1_scene1":
                        window.location.href = "prologue.html?page=13";
                        break;
                    case "act1_scene2.html":
                    case "act1_scene2":
                        window.location.href = "act1_scene1.html?page=11";
                        break;
                    case "act1_scene3.html":
                    case "act1_scene3":
                        window.location.href = "act1_scene2.html?page=11";
                        break;
                    case "act2_scene1.html":
                    case "act2_scene1":
                        window.location.href = "act1_scene3.html?page=8";
                        break;
                    case "act2_scene2.html":
                    case "act2_scene2":
                        window.location.href = "act2_scene1.html?page=7";
                        break;
                    case "act2_scene3.html":
                    case "act2_scene3":
                        window.location.href = "act2_scene2.html?page=8";
                        break;
                    case "act2_scene4.html":
                    case "act2_scene4":
                        window.location.href = "act2_scene3.html?page=8";
                        break;
                }
            }
            return;
        }
    }
}

function nextPage() {
    var pages = document.getElementsByClassName("page");
    for(var i = 0; i < pages.length; i++) {
        if (pages[i].classList.contains('active')) {
            if (i < pages.length - 1) {
                pages[i].classList.remove('active');
                pages[i + 1].classList.add('active');
                updatePageNumURL(i + 1);
                window.scrollTo(0,0);
            } else {
                console.log(window.location.pathname);
                // redirect to next section
                var path = window.location.pathname.split("/").pop();
                switch(path) {
                    case "introduction.html":
                    case "introduction":
                        window.location.href = "prologue.html";
                        break;
                    case "prologue.html":
                    case "prologue":
                        window.location.href = "act1_scene1.html";
                        break;
                    case "act1_scene1.html":
                    case "act1_scene1":
                        window.location.href = "act1_scene2.html";
                        break;
                    case "act1_scene2.html":
                    case "act1_scene2":
                        window.location.href = "act1_scene3.html";
                        break;
                    case "act1_scene3.html":
                    case "act1_scene3":
                        window.location.href = "act2_scene1.html";
                        break;
                    case "act2_scene1.html":
                    case "act2_scene1":
                        window.location.href = "act2_scene2.html";
                        break;
                    case "act2_scene2.html":
                    case "act2_scene2":
                        window.location.href = "act2_scene3.html";
                        break;
                    case "act2_scene3.html":
                    case "act2_scene3":
                        window.location.href = "act2_scene4.html";
                        break;
                    case "act2_scene4.html":
                    case "act2_scene4":
                        window.location.href = "../scenes.html";
                    default:
                        console.log("Error... window path: " + path);
                        break;
                }
            }
            return;
        }
    }
}

window.addEventListener('load', (e) => {
    document.getElementById("prev-page").addEventListener('click', (e) => {
        previousPage();
    }); 
    document.getElementById("next-page").addEventListener('click', (e) => {
        nextPage();
    }); 

    let params = new URLSearchParams(document.location.search);
    let pageNum = parseInt(params.get("page") ?? 0);
    let pages = document.getElementsByClassName("page");
    if (pageNum > 0 && pageNum < pages.length) {
        pages[0].classList.remove('active');
        pages[pageNum].classList.add('active');
    }
});