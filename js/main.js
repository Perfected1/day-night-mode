function modes() {
    var modeToggle = document.getElementById("main");
    var modeSwitch = document.getElementById("switch-btn")
    var nav = document.getElementById("nav")
    if (modeToggle.style.color === "black") {
        modeToggle.style.color = "rgb(243, 242, 242)";
        modeToggle.style.backgroundColor = "black"; 
        modeSwitch.style.color = "rgb(243, 242, 242)";
        modeSwitch.style.backgroundColor = "black"
        nav.style.color = "black";
        nav.style.backgroundColor = "rgb(243, 242, 242)"

    } else {
        modeToggle.style.color = "black";
        modeToggle.style.backgroundColor = "rgb(243, 242, 242)"
        modeSwitch.style.color = "black";
        modeSwitch.style.backgroundColor = "rgb(243, 242, 242)"
        nav.style.color =  "rgb(243, 242, 242)"
        nav.style.backgroundColor = "black";
    }
}
$("h3").slideUp(3000).slideDown(3000);
