const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

const TabItems = $$(".tab-item");
const TabPanes = $$(".tab-pane");
const line = $(".line");

TabItems.forEach((item, index) => {
    
    item.addEventListener("click", function () {
        TabItems.forEach((i, j) => {
            i.classList.remove("active");
            TabPanes[j].classList.remove("active");
        });
        line.style.left = item.offsetLeft + "px";
        line.style.width = item.offsetWidth + "px";
        item.classList.add("active");
        TabPanes[index].classList.add("active");
    });
});
