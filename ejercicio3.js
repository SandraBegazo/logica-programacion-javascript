/* Dada una palabra buscarla en una frase y devolver cuantas veces aparece 
esa palabra en la frase. La frase y la palabra deben ser parametros de una funcion */

function buscaPalabra(frase, busqueda){
                                                        // g = global  i = indistinta
    let texto_limpio= frase.toLowerCase().replace(/[!¡¿?,;.]/gi, '');// La /[ ], " "/Es una expresion regular y sirve para indicar que todo lo que se escriba dentro de los corchetes deberá ser reemplazado por lo que se indique despues de la coma.
    let resultado = 0;

    if(texto_limpio.includes(busqueda)){

        let palabras = texto_limpio.split(" ");
        let mapa = {}; //Json
        
        for(let palabra of palabras){ // for... of = foreach que devuelve los valores 

            if(mapa[palabra]){
                mapa[palabra]++;
            }else{
                mapa[palabra] = 1;
            }

        }
        console.log(mapa);
        resultado = mapa[busqueda];

    }else{

        resultado = 0;
    }
    
    return resultado;
}
console.log(
    "Numero de coincidencias en la frase: " +
    buscaPalabra("Amigos mios, esto deberia hacernos reflexionar, amigos", "amigos"));