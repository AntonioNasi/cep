/* Ler mais */
function LerMais2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Ler mais"; 
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Ocultar texto";
        moreText.style.display = "inline";
    }
}

function LerMais1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Ler mais"; 
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Ocultar texto";
        moreText.style.display = "inline";
    }
}