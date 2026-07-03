document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("palabraita").style.display = "none";
    document.getElementById("palabraita_game").style.display = "none";
});

function palabraita() {
    document.getElementById("main_screen").style.display = "none";
    document.getElementById("palabraita").style.display = "block";
}

function palabraita_play() {
    document.getElementById("palabraita").style.display = "none";
    document.getElementById("palabraita_game").style.display = "block";
}