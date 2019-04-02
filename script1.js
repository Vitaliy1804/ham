function openTabContent(tabClass) {
    const tabsContent = [...document.querySelectorAll(".our-services__tab-content")];
    tabsContent.forEach(tab => {
        if (tab.classList.contains(tabClass)) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });
}
function makeTabButtonActive(tabClass) {
    const tabsContent = [...document.querySelectorAll(".our-services__tab")];
    tabsContent.forEach(button => {
        if (button.getAttribute("data-tab") === tabClass) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
}

const serviceButtons = [...document.querySelectorAll(".our-services__tab")];

serviceButtons.forEach(button => {
    button.addEventListener("click", function() {
        openTabContent(button.getAttribute("data-tab"));
        makeTabButtonActive(button.getAttribute("data-tab"));
    });
});

// work tabs

const filterImages = () => {

    let filterList = [...document.getElementsByClassName("work-tab")];

    // let fotoList = [...document.getElementsByClassName("achivment-gallery-foto")];

    filterList.forEach((elemItem) => {
        elemItem.addEventListener('click', (event) => {
            // console.log(event.target.getAttribute('data-filter'))
            // fotoList.forEach(item => {
            //
            //     if (item.classList.contains(event.target.getAttribute('data-filter'))) {
            //         item.classList.remove('hide')
            //     }
            //
            //     if (!item.classList.contains(event.target.getAttribute('data-filter'))) {
            //         item.classList.add('hide')
            //     }

                filterList.forEach((listItem) => {
                    if (!listItem.classList.contains(event.target.getAttribute('data-info'))) {
                        listItem.classList.remove('active')
                    } else if (!listItem.classList.contains(event.target.getAttribute('active'))) {
                        listItem.classList.remove('active')
                    }

                    if (listItem.classList.contains(event.target.getAttribute('data-info'))) {
                        listItem.classList.add('active')}
                })
            // })
        })
    })
}

filterImages()




// Specify Default opened block
// serviceButtons[0].click();
//
// $(document).ready(function() {
//     $(".clients-box").slick({
//         arrows: false,
//         dots: true,
//         customPaging: function(slider, i) {
//             return `<div class="clients-dot"><img src="img/clients/client${i +
//             1}.jpg" /></div>`;
//         },
//         appendDots: $(".clients-dots")
//     });
//     $(".clients-carousel-nav .clients-prev-slide").click(function() {
//         $(".clients-box").slick("slickPrev");
//     });
//     $(".clients-carousel-nav .clients-next-slide").click(function() {
//         $(".clients-box").slick("slickNext");
//     });