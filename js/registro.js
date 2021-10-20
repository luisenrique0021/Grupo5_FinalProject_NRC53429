let arreglo = []


function almacenarRegistros () {

    let objeto = {
        'nombre' : document.getElementById('campoNombre').value,
        'contrasena' : document.getElementById('campoContrasena').value,
        'correo' : document.getElementById('campoCorreo').value,
        'confcorreo' : document.getElementById('campoConfirmacionCorreo').value,
        'telefono' : document.getElementById('campoTelefono').value,
    }

    if (arreglo.length < 30) {

        arreglo.push(objeto);

        console.log("diccionario ",objeto);
        console.log("arreglo ",arreglo);
        console.log("Tamaño del arreglo: ",arreglo.length);
        return true;
    } else {

    
    console.log("arreglo lleno ",arreglo);
    console.log("Tamaño del arreglo: ",arreglo.length);
    return false;
    }
}

/*  for(i in arreglo){
console.log(arreglo[i].usuario);  
}*/

function ordenarRegistros(args){
    args=args.sort(function (a, b) {
        if (a.nombre > b.nombre) {
            return 1;
        }
        if (a.nombre< b.nombre) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });
    console.log("args: ",args);
    return args;
}




// module.exports.arreglo = arreglo;
// module.exports.almacenarRegistros = almacenarRegistros;
// module.exports.ordenarRegistros = ordenarRegistros;

