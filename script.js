window.onload = function () {
    var inputPatente = document.getElementById("estado-patente")
    var EnroPatente = document.getElementById("nro-patente")
    var estadoAuto = document.getElementById("estado-auto")
    var montoParaPagar = document.getElementById("monto-a-pagar")
    var tiempoTranscurrido = document.getElementById("tiempo")
    var boton = document.getElementById("boton")
    var form = document.getElementById("form")
    var n = 45;


    var auto = {
        patente: "DE9ORJ",
        email: "mycar@hotmail.com",
        estado: true,
        tiempo: tiempo= function(){      
            setInterval(function () {
                n++;
                console.log(n)
            }, 60000)
            },
        tiempoxHora: 2.85,
        }
        auto.tiempo()
        var auto2 = {
            patente: "111",
            email: "mycar@hotmail.com",
            estado: true,
            tiempo: 0,
            tiempoxHora: 1.60,
        }

var controladorParquimetro = function () {
    if (inputPatente.value === auto.patente) {
        EnroPatente.innerHTML += auto.patente;
        if (auto.estado === true) {
            estadoAuto.innerHTML += `estacionado`;
            tiempoTranscurrido.innerHTML += Math.round(n) + "  minutos estacionado";
            montoParaPagar.innerHTML += "$" + Math.round(n * auto.tiempoxHora);
            form.classList.add("ocultar")
        }
    } else {
        //EnroPatente.innerHTML = ` No hay ningun auto estacionado con la  patente: ${inputPatente.value}`;
        //estadoAuto.innerHTML = `-`;
        //tiempoTranscurrido.innerHTML = "-";
        //montoParaPagar.innerHTML = "-";
        alert("No existe la patente: "+ inputPatente.value)
    }
    
}

boton.addEventListener("click", controladorParquimetro)



};

