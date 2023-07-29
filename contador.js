let contador = 0;
let valor= document.querySelector("#valor");
let btns= document.querySelectorAll(".btn");
btns.forEach(function (btn){
btn.addEventListener("click", function (e) {
        const estilos = e.currentTarget.classList;
        if (estilos.contains("decrecer")) {
            contador--;
        }
        else if (estilos.contains("crecer")) {
            contador++;
        }
    else{
        contador= 0;
    }
    if(contador > 0){
        valor.style.Color= "green";
    }
    else if (contador<0){
        valor.style.color= "red";
    }
    else{
        valor.style.color = "black";
    }
    valor.textContent = contador;
});
});