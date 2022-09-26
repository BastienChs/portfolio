document.getElementById("nav-burger").addEventListener("click", function() {
    document.getElementById('nav-menu').classList.remove('hidden');
});

document.getElementById("close-nav-burger").addEventListener("click", function() {
    closeMobileNavMenu();
});

var elements = document.getElementsByClassName("anchor-nav-mobile");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function(){
        closeMobileNavMenu()
    }, false);
}

function closeMobileNavMenu(){
    document.getElementById('nav-menu').classList.add('hidden');
}