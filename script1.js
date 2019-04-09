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

    let fotoList = [...document.getElementsByClassName("work-item")];

    filterList.forEach((elemItem) => {
        elemItem.addEventListener('click', (event) => {
            // console.log(event.target.getAttribute('data-filter'))
            fotoList.forEach(item => {

                if (item.classList.contains(event.target.getAttribute('data-info'))) {
                    item.classList.remove('hide')
                }

                if (!item.classList.contains(event.target.getAttribute('data-info'))) {
                    item.classList.add('hide')
                }

                filterList.forEach((listItem) => {
                    if (!listItem.classList.contains(event.target.getAttribute('data-info'))) {
                        listItem.classList.remove('active')
                    } else if (!listItem.classList.contains(event.target.getAttribute('data-line'))) {
                        listItem.classList.remove('active')
                    }


                    if (listItem.classList.contains(event.target.getAttribute('data-info'))) {
                        listItem.classList.add('active')
                    }else if(listItem.classList.contains(event.target.getAttribute('data-line'))){
                        listItem.classList.add('active')
                    }
                })
            })
        })
    })
};

filterImages();

let loadBtn = document.getElementById("load-btn");
let fotoList = [...document.getElementsByClassName("work-item")];

function showImg() {
    fotoList.forEach((elemItem) => {
        if (elemItem.classList.contains('hidden')) {
            elemItem.classList.remove('hidden')
        }
    });
    loadBtn.remove()
}


loadBtn.addEventListener("click", showImg);

serviceButtons[0].click();


const slider = () => {
    const sliderHolder = document.getElementsByClassName("about-us-slides")[0];
    console.log(sliderHolder);
    let slides = document.getElementsByClassName('about-us-slide');
    slides = Array.prototype.slice.call(slides);
    // console.log(slides);
    let dots = document.getElementsByClassName('slider-dot');
    dots  = Array.prototype.slice.call(dots);
    let currentShow = 0;

    dots.forEach((el, index) => {
        dots[currentShow].classList.add('slider-dot-active');
        el.addEventListener('click', (event)=>{
            dots[currentShow].classList.remove('slider-dot-active');
            currentShow = dots.indexOf(event.currentTarget);
            dots[currentShow].classList.add('slider-dot-active');

            slides.forEach((el2) => {
                if(el2.classList.contains('current-slide')) {
                    el2.classList.remove('current-slide')
                }
            });

            slides.find((el2, index2) => {
                if (index == index2) {
                    el2.classList.add('current-slide');
                }
            })
        })
    });

    const arrowsControl = () => {
        const prev = document.getElementById("prev");
        const next = document.getElementById("next");

        const slideNext = () => {

            next.addEventListener("click",  ()=>{
                if(currentShow < 3) {
                    dots[currentShow].classList.remove("slider-dot-active");
                    slides[currentShow].classList.remove("current-slide");
                    dots[++currentShow].classList.add("slider-dot-active");
                    slides[currentShow].classList.add("current-slide")
                    // console.log(currentShow)
                } else if (currentShow == 3){
                    dots[currentShow].classList.remove("slider-dot-active");
                    slides[currentShow].classList.remove("current-slide");
                    currentShow = 0;
                    dots[currentShow].classList.add("slider-dot-active");
                    slides[currentShow].classList.add("current-slide")
                }




            })
        }
        slideNext()

        const slidePrev = () => {
            prev.addEventListener("click",  ()=>{
                if(currentShow != 0) {

                    console.log(currentShow);
                    dots[currentShow].classList.remove("slider-dot-active");
                    slides[currentShow].classList.remove("current-slide");
                    dots[--currentShow].classList.add("slider-dot-active");
                    slides[currentShow].classList.add("current-slide")

                } else if (currentShow == 0){
                    dots[currentShow].classList.remove("slider-dot-active");
                    slides[currentShow].classList.remove("current-slide");
                    currentShow = 3;
                    dots[currentShow].classList.add("slider-dot-active");
                    slides[currentShow].classList.add("current-slide")
                }
            })
        };
        slidePrev()
    };
    arrowsControl()
};
slider();
