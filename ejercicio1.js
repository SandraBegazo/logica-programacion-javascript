/*Dado un número devolver su tabla de multipicar completa*/

function tablaMultiplicar(numero){
    let resultado = `Tabla de Multiplicar del ${numero}`;

    for(let i=1; i<=10; i++){

        let multiplicacion = (i*numero);
        resultado +=`${i} x ${numero} = ${multiplicacion} \n`;

    }
    return resultado;
}

console.log(tablaMultiplicar(8));