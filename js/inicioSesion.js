function validar_usuario_sesion(string) {
    if (string=="chocolatero"){
        alert("El usuario " + string + " es correcto!.");
        console.log("correcto");
        return true;
        } else{
        alert("El usuario " + string + " no es correcto");
        return false;
    }
}

// function validar_correo_sesion(string) {
//     if (string=="chocolatero@gmail.com"){
//         alert("El correo " + string + " es correcto!.");
//         console.log("correcto");
//         return true;
//         } else{
//         alert("El correo " + string + " no es correcto");
//         return false;
//     }
// }

// function validar_contrasena_sesion(string) {
//     if (string=="chocolatero123"){
//         alert("La contraseña ingresada es correcta.");
//         console.log("correcto");
//         return true;
//         } else{
//         alert("La contraseña ingresada es incorrecta.");
//         return false;
//     }
// }

// function sesionOne () {

//     if(document.getElementById('campoUsuario').value=="chocolatero" && document.getElementById('campoEmail').value=="chocolatero@gmail.com" && document.getElementById('campoPass').value=="chocolatero123"){
//         alert("Los datos ingresados son correctos, bienvenido !!!")
//         // location.href="portafolio.html";
//         window.location.href('index.html');
//     } else {
//         alert("Lo sentimos, debe volver a ingresar los datos")
//         // location.href="index.html";
//     }
// }

function cleanForm () {
    document.getElementById("formulario").reset();
}