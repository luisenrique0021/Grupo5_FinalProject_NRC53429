function validar_correo(string) {
    if (/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es|co|org)+$/.test(string)){
        if (string.length>=15&&string.length<=40){
            alert("La dirección de email " + string + " es correcta!.");
            console.log("correcto");
            console.log(string.length);
            return true;
        }
        alert("La dirección de email " + string + " no cumple la condición de tener minimo 15 y/o máximo 40 caracteres");
        return false;

        
    } else {
        alert("La dirección de email " + string + " es incorrecta!.");
        console.log("incorrecto");
        return false;
    } 
}

function validar_contrasena_usuario(string){
    if(/^[A-Z]/.test(string)&&string.length>=6&&string.length<=12){
        alert("La contraseña ingresada es correcta!.")
        return true;
    } else{
        alert("la contraseña ingresada es incorrecta, la primera letra no es mayúscula"
                +" y recuerde que son entre 6 y 12 caracteres!!!.")
        return false;
    }
}

// module.exports.validar_correo = validar_correo;
// module.exports.validar_contrasena_usuario=validar_contrasena_usuario;
