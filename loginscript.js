let b = false;

function toggle_visibility(id) {
    let e = document.getElementById(id);
    let button=document.getElementById("buttonReg")
        
     if(e.style.display == 'block'){
          e.style.display = 'none';
          }
       else{
          e.style.display = 'block';}
    b = true;
}

function foo() {
    let e = document.getElementById('foo');
    if(!b) e.style.display = 'none';
    b=false;
}
const btn = document.getElementById("botonReg");
let mediaQuery = window.matchMedia('(max-width: 900px)')
const anime = document.getElementById("division2")
const ingrebtn = document.getElementById("submitbtn")
btn.addEventListener("click", ()=>{

    if(btn.innerText == "No tenes una cuenta ? REGISTRATE !"){
        btn.innerText = "Ya estas registrado ? Inicie sesion!";
        ingrebtn.value = "Registrate";
        anime.style.height ="100%"
    }else{
        btn.innerText= "No tenes una cuenta ? REGISTRATE !";
        ingrebtn.value = "Ingresar";
        if (mediaQuery.matches) { anime.style.height ="70%"}
    }
});