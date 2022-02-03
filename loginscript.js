//alert("Cuando ingrese pruebe la funcionalidad del ultimo boton que pregunta su tenes una cuenta graciaas")

function myFunction(){ 
const nameAppear = document.getElementById("nametag")
const submitbtn = document.getElementById("submitbtn") 
const botonReg = document.getElementById("botonReg") 
const slider = document.getElementById("division2") 
const logReg = document.getElementById("logReg") 
if (nameAppear.style.display=="none"){
   nameAppear.style.display="flex";
    submitbtn.value="Registrate"
    botonReg.childNodes[0].textContent = "Tenes una cuenta? Inicia Sesion!"
    slider.style.animation="0.1s prueba  forwards"
    logReg.childNodes[0].textContent ="Registrate"
    }
    else{
       slider.style.height="inital"
     nameAppear.style.display="none";
        submitbtn.value="Ingresar"
        slider.style.animation="none"
        logReg.childNodes[0].textContent ="Inicia Session"
        botonReg.childNodes[0].textContent = "No tenes una cuenta? Registrate!"
    }


}  
