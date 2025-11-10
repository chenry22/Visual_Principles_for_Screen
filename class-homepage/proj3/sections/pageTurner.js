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
                        window.location.href = "introduction.html";
                        break;
                    case "act1_scene1.html":
                        window.location.href = "prologue.html";
                        break;
                    case "act1_scene2.html":
                        window.location.href = "act1_scene1.html";
                        break;
                    case "act1_scene3.html":
                        window.location.href = "act1_scene2.html";
                        break;
                    case "act2_scene1.html":
                        window.location.href = "act1_scene3.html";
                        break;
                    case "act2_scene2.html":
                        window.location.href = "act2_scene1.html";
                        break;
                    case "act2_scene3.html":
                        window.location.href = "act2_scene2.html";
                        break;
                    case "act2_scene4.html":
                        window.location.href = "act2_scene3.html";
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
                // redirect to next section
                switch(window.location.pathname.split("/").pop()) {
                    case "introduction.html":
                        window.location.href = "prologue.html";
                        break;
                    case "prologue.html":
                        window.location.href = "act1_scene1.html";
                        break;
                    case "act1_scene1.html":
                        window.location.href = "act1_scene2.html";
                        break;
                    case "act1_scene2.html":
                        window.location.href = "act1_scene3.html";
                        break;
                    case "act1_scene3.html":
                        window.location.href = "act2_scene1.html";
                        break;
                    case "act2_scene1.html":
                        window.location.href = "act2_scene2.html";
                        break;
                    case "act2_scene2.html":
                        window.location.href = "act2_scene3.html";
                        break;
                    case "act2_scene3.html":
                        window.location.href = "act2_scene4.html";
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