// ====NAV BAR MENU MOBILE====
function openNav() {
    const headerNav = document.getElementById("mySidenav");
    headerNav.classList.add('activeMenu');
}

function closeNav() {
    const headerNav = document.getElementById("mySidenav");
    headerNav.classList.remove('activeMenu');
}


//  Animated Collapsibles Section answer knowlenge
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}


// Add active class to the current button (Highlight it)
var header = document.getElementById("myHighlight");
var btns = header.getElementsByClassName("btn--list-collapsible-highlight");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("activeBtn");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" activeBtn", "");
        }
        this.className += " activeBtn";
    });
}


//  Animated Collapsibles Section Nav List Mobile
var coll = document.getElementsByClassName("menu--collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active--nav-list-mobile");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

/* SLIDER TOPBAR: initializing swiper slider */
var swiper = new Swiper(".mySwiper", {
    // Show 1 card trong 1 slide
    // Có khoảng cách giữa các card là 30px
    //  slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: true,
    // Set chuyển động cho slide mỗi 2500s 1 lần next
    // Khi di chuột vào (pauseOnMouse) thì dừng slide
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    // Số card next trong 1 slide là 1 trên mỗi một card
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        prevEl: ".button--prev",
        nextEl: ".button--next",
    },
});