function toggleNav() {
    let navLinks = document.getElementById("topnav");
    let icon = document.getElementById("toggle-icon");
    if (navLinks.className === "nav-links") {
        navLinks.className += " responsive";
        icon.className = "fas fa-times";

    } else {
        navLinks.className = "nav-links";
        icon.className = "fas fa-bars";
    }
}
