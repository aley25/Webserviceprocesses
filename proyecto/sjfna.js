

//nuevo es cuando llega, listo es cuando se va a ejecutar, en ejecucion
function SJFNA(processes) {
    var progreso = [];
    var faltantes = [];
    var conteo = 0;
    for (var i = 0; i <= processes.Processes.length - 1; i++) {
        if (conteo === 0) {
            var proceso = {
                "Id": processes.Processes[i].Id,
                "inicio": conteo,
                "final": conteo + processes.Processes[i].Burst_time,
                "Burst_time": processes.Processes[i].Burst_time,
                "Tiempoarribo": processes.Processes[i].Tiempoarribo,
                "waiting": 0,
                "nuevo": 0,
                "listo": 0,
                "en ejecucion": `0-${processes.Processes[i].Burst_time}`,
                "terminado": processes.Processes[i].Burst_time
            }
            conteo += processes.Processes[i].Burst_time;
            progreso.push(proceso);
            faltantes = eliminar(processes.Processes, proceso.Id);
        } else {
            var elmenor;
            var menor = 999;
            for (var x = 0; x < faltantes.length; x++) {
                if (faltantes[x].Burst_time < menor && faltantes[x].Tiempoarribo <= conteo) {
                    menor = faltantes[x].Burst_time;
                    elmenor = faltantes[x];
                }
            }
            faltantes = eliminar(faltantes, elmenor.Id);
            var proceso = {
                "Id": elmenor.Id,
                "inicio": conteo,
                "final": conteo + elmenor.Burst_time,
                "Burst_time": elmenor.Burst_time,
                "Tiempoarribo": elmenor.Tiempoarribo,
                "waiting": conteo - elmenor.Tiempoarribo,
                "nuevo": elmenor.Tiempoarribo,
                "listo": conteo,
                "enjecucion": `${conteo}-${elmenor.Burst_time + conteo}`,
                "terminado":  conteo + elmenor.Burst_time
            }
            conteo += elmenor.Burst_time;
            progreso.push(proceso);
        }

    }
    var final = {
        "Processes": progreso,
    };
    final.averageWT = WaitingTimeA(final.Processes);
    console.log(final);
    return final;
}

function eliminar(processes, id) {
    var secuencia = [];
    for (var i = 0; i < processes.length; i++) {
        if (processes[i].Id === id) null
        else {
            secuencia.push(processes[i]);
        }
    }
    return secuencia;
}

function WaitingTimeA(processes) {
    var average = 0;
    for (var i = 0; i < processes.length; i++) {
        average += processes[i].waiting;
    }
    return average / processes.length;
}
var a = {
    "Processes": [
        {
            "Id": 1,
            "Nombre": "Proceso 1",
            "Estado": "nuevo",
            "Burst_time": 69,
            "Tiempoarribo": 5,
            "Prioridad": 0,
            "Tipoproceso": null,
            "Punteropila": null
        },
        {
            "Id": 2,
            "Nombre": "Proceso 2",
            "Estado": "nuevo",
            "Burst_time": 90,
            "Tiempoarribo": 7,
            "Prioridad": 0,
            "Tipoproceso": null,
            "Punteropila": null
        },
        {
            "Id": 3,
            "Nombre": "Proceso 3",
            "Estado": "nuevo",
            "Burst_time": 70,
            "Tiempoarribo": 8,
            "Prioridad": 0,
            "Tipoproceso": null,
            "Punteropila": null
        },
        {
            "Id": 4,
            "Nombre": "Proceso 4",
            "Estado": "nuevo",
            "Burst_time": 55,
            "Tiempoarribo": 10,
            "Prioridad": 0,
            "Tipoproceso": null,
            "Punteropila": null
        },
        {
            "Id": 5,
            "Nombre": "Proceso 5",
            "Estado": "nuevo",
            "Burst_time": 78,
            "Tiempoarribo": 12,
            "Prioridad": 0,
            "Tipoproceso": null,
            "Punteropila": null
        },
        averageWT = 0]
}

module.exports = SJFNA;

