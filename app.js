alert("Bienvenido(a) a nuestro sitio web"); //comentario de una linea
let numeroMaximoPosible = 10;
let numeroSecretos = Math.floor(Math.random() * numeroMaximoPosible) + 1; 
let intentos = 1;
let numeroUsuario = 0;
//let palabraVeces = "vez";
let maximoIntentos = 3;
console.log(numeroSecretos);

while (numeroUsuario != numeroSecretos) {
    let numeroUsuario = parseInt(prompt(`Adivina el número secreto entre 1 - ${numeroMaximoPosible} por favor:`));
    console.log(typeof(numeroUsuario));
    //Condicional
    if (numeroUsuario == numeroSecretos) {
        alert(`¡Acertaste el número es: ${numeroUsuario}! Lo hiciste en ${intentos} ${intentos ==1 ? 'vez':'veces'}`); //Comilla invertida para cadena de texto y variables altgr + }, (dentro de las llaves puuede ir código javascript)
        //${intentos ==1 ? 'vez':'veces'} operador ternario, si es verdadero se ejecuta la primera opción, si es falso la segunda
        //let palabraPersona = cantidadPersonas == 1 ? "persona" : "personas";
        
        
    }else{
        if (numeroUsuario > numeroSecretos) {
            alert("¡El número secreto es menor! ");
        }else{
            alert("¡El número secreto es mayor! ");
        }
        //incrementamos el contador cuando no acierta
        intentos++;
        //cambiamos la palabra a plural
        //palabraVeces = "veces";
        if (intentos > 3) {
            alert(`¡Llegaste al número máximo de ${maximoIntentos} intentos!`);
            break;
        }

    }
}
