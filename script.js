
const menuIcon = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const close = document.getElementById("menu-close");
const nav = document.getElementsByClassName("ic");
const elms = document.getElementsByClassName("header");




// Function to toggle the navbar
function toggleNavbar() {

    close.style.display = "flex";
    menuIcon.style.display="none";

    Array.from(elms).forEach((x) => {
        if (x.style.display === "block") {
            x.style.display = "flex";
        } else {
            x.style.display = "block";
        }
    })
    Array.from(nav).forEach((x) => {
        x.style.display = "block";
    })
}

function toggleNavbar2(){
    menuIcon.style.display="flex";
    close.style.display = "none";
    Array.from(nav).forEach((x) => {
        x.style.display = "none";
    })
    Array.from(elms).forEach((x) => {
        if (x.style.display === "block") {
            x.style.display = "flex";
        } else {
            x.style.display = "block";
        }
    })

}

// Add a click event listener to the menu icon to open the navbar
menuIcon.addEventListener("click", toggleNavbar);
close.addEventListener("click", toggleNavbar2);


// Add a click event listener to the menu close icon to close the navbar
//menuClose.addEventListener("click", toggleNavbar);

