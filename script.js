
function myFunction() {
    let x = document.getElementById("dropDown-menu");
    if (x.style.display === "none") {
      x.style.display = "flex" 
      x.style.animation ="bajada 1s 0s forwards"
      
    } else {
      x.style.display = "none";
      
    }
}

