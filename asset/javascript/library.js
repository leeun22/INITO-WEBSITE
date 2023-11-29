// ====NAV BAR MENU MOBILE====
function openNav() {
    const headerNav = document.getElementById("mySidenav");
    headerNav.classList.add('active');
}

function closeNav() {
    const headerNav = document.getElementById("mySidenav");
    headerNav.classList.remove('active');
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