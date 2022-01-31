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

btn.addEventListener("click", ()=>{

    if(btn.innerText == "No tenes una cuenta ? REGISTRATE !"){
        btn.innerText = "Ya estas registrado ? Inicie sesion!";
    }else{
        btn.innerText= "No tenes una cuenta ? REGISTRATE !";
    }
});