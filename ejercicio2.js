
function palindromo(texto){
    let invertido = texto
                    .split('')
                    .reverse()
                    .join('')

    /*if(invertido===texto){
        return true;
    }else{
        return false;
    }*/
    return(invertido===texto);
}

console.log("¿Es un palindromo?"+palindromo("otto"));
