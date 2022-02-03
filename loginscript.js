

function myFunction(){ 
const nameAppear = document.getElementById("nametag")
const submitbtn = document.getElementById("submitbtn") 
const botonReg = document.getElementById("botonReg") 
const slider = document.getElementById("division2") 
if (nameAppear.style.display=="none"){
   nameAppear.style.display="flex";
    submitbtn.value="Registrate"
    botonReg.childNodes[0].textContent = "Tenes una cuenta? Inicia Sesion!"
    slider.style.animation="prueba 2s 0s forwards"
    }
    else{
       slider.style.height="inital"
     nameAppear.style.display="none";
        submitbtn.value="Ingresar"
        slider.style.animation="none"
        botonReg.childNodes[0].textContent = "No tenes una cuenta? Registrate!"
    }


}  
