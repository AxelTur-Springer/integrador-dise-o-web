
function myFunction() {
    let x = document.getElementById("dropDown-menu");
    if (x.style.display === "none") {
      x.style.display = "flex" 
      x.style.animation ="bajada 1s 0s forwards"
    } else {x.style.display = "none";
    }if (x.style.display === "flex") { 
      document.getElementById("algo").style.display = "none"
    } else {
    document.getElementById("algo").style.display = "block"
}

}

