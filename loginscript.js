

function myFunction(){ 
const nameAppear = document.getElementById("nametag")
const submitbtn = document.getElementById("submitbtn") 
const botonReg = document.getElementById("botonReg") 
if (nameAppear.style.display=="none"){
    nameAppear.style.display="flex";
    submitbtn.value="Registrate"
    botonReg.innerHTML="Tenes una cuenta ? Inicia Sesion !"
    }
    else{
        nameAppear.style.display="none";
        submitbtn.value="Ingresar"
        
        botonReg.innerHTML="No tenes una cuenta ? Registrate !"
    }


}  
