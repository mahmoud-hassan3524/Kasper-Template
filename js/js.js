// Select Toggle Menu Button   
let toggleBtn = document.querySelector(".toggle-menu");
// Select Menu List 
let menu = document.querySelector("header .menu"); 
// Toggle Class Open On Menu When Click Button
toggleBtn.onclick = function (e) {
    menu.classList.toggle("open");
}

// Click Anywhere Outside Menu And Toggle Button
document.onclick = function (e) {
    if (menu.classList.contains("open")) {
        if (e.target !== toggleBtn && e.target !== menu) {
            menu.classList.toggle("open");
        }
    }
}
menu.onclick = function (e) {
    e.stopPropagation();
}