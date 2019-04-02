function openTabContent(tabClass) {
    const tabsContent = document.querySelectorAll(".our-services__tab-content");
    tabsContent.forEach(tab => {
        if (tab.classList.contains(tabClass)) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });
}
function makeTabButtonActive(tabClass) {
    const tabsContent = document.querySelectorAll(".our-services__tab");
    tabsContent.forEach(button => {
        if (button.dataset.tab === tabClass) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
}

const serviceButtons = document.querySelectorAll(".our-services__tab");

serviceButtons.forEach(button => {
    button.addEventListener("click", function() {
        openTabContent(button.dataset.tab);
        makeTabButtonActive(button.dataset.tab);
    });
});

// Specify Default opened block
serviceButtons[0].click();

$(document).ready(function() {
    $(".clients-box").slick({
        arrows: false,
        dots: true,
        customPaging: function(slider, i) {
            return `<div class="clients-dot"><img src="img/clients/client${i +
            1}.jpg" /></div>`;
        },
        appendDots: $(".clients-dots")
    });
    $(".clients-carousel-nav .clients-prev-slide").click(function() {
        $(".clients-box").slick("slickPrev");
    });
    $(".clients-carousel-nav .clients-next-slide").click(function() {
        $(".clients-box").slick("slickNext");
    });