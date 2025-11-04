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