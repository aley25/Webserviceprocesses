//variables globales
//listo, ejecucion, bloqueado, terminado;

//lista que contiene el progreso de los procesos de como se están ejecutando
var progreso = [];
//variable que almacena el número de segundo por el cual esta corriendo el algorimot
var conteo= 0;

//metodo de roundrobin
function RoundRobin(processes){   
    //quantum con el que se va trabajar el algoritmo
    var quantum = processes.quantum;
    //variable finalizado que nos dice si ya se acabo de tratar todos los procesos es decir, sus burst-times son cero.
    var finalizado = false;
    while(finalizado === false){
        for(var x = 0; x < processes.Processes.length-1;x++){
            if(processes.Processes[x].Burst_time === 0) finalizado = true;
            else{
                finalizado = false;
                break;
            }
        }
        if(finalizado === true){
            //var progreso2 = bloqueado(processes.Processes,progreso);
            var result = {
                "Processes": progreso
                //"Bloqueados": progreso2
            }
            return result;
        }
        else{
            for(var i = 0; i< processes.Processes.length-1;i++){
                if(processes.Processes[i].Burst_time >= quantum){
                    processes.Processes[i].Burst_time -= quantum;
                    var proceso = {
                        "Id": processes.Processes[i].Id,
                        "inicio": conteo,
                        "final" : conteo+quantum,
                        "Burst_time": processes.Processes[i].Burst_time,
                        "listo": conteo,  
                        "enjecucion": `${conteo}-${conteo+quantum}`
                    }
                    conteo += quantum;
                    progreso.push(proceso);
                }else if(processes.Processes[i].Burst_time < quantum){
                    var burst = processes.Processes[i].Burst_time
                    var proceso = {
                        "Id": processes.Processes[i].Id,
                        "inicio": conteo,
                        "final" : conteo+processes.Processes[i].Burst_time,
                        "Burst_time": processes.Processes[i].Burst_time - burst,
                        "listo": conteo,
                        "enjecucion": `${conteo}-${conteo+processes.Processes[i].Burst_time}`
                    }
                    processes.Processes[i].Burst_time -= burst;
                    conteo += burst;
                    progreso.push(proceso);
                }
            }
        } 
    }
}
//metodo de bloqueado que toma la lista de los procesos principales, sin el recorrido
//y toma la lista de recorridos para setear el estado de bloqueado a los objetos
function bloqueado(principal,processes){
    for(var i = 0; i< principal;i++){
        principal[i].bloqueado = 0;
        for (var x = 0; x< processes.length;x++){
            if(principal[i].Id === processes[x].Id){

            }else{
                principal[i].bloqueado += (processes[x].final- processes[x].inicio);
                console.log(principal[i].bloqueado);
            }
        }
    }
    return principal;
}
var a ={
    "Processes" : [
        {
          "Id": 1,
          "Nombre": "Proceso 1",
          "Estado": "nuevo",
          "Burst_time": 69,
          "Tiempoarribo": 0,
          "Prioridad": 0,
          "Tipoproceso": null,
          "Punteropila": null
        },
        {
          "Id": 2,
          "Nombre": "Proceso 2",
          "Estado": "nuevo",
          "Burst_time": 90,
          "Tiempoarribo": 0,
          "Prioridad": 0,
          "Tipoproceso": null,
          "Punteropila": null
        },
        {
          "Id": 3,
          "Nombre": "Proceso 3",
          "Estado": "nuevo",
          "Burst_time": 70,
          "Tiempoarribo": 0,
          "Prioridad": 0,
          "Tipoproceso": null,
          "Punteropila": null
        },
        {
          "Id": 4,
          "Nombre": "Proceso 4",
          "Estado": "nuevo",
          "Burst_time": 55,
          "Tiempoarribo": 0,
          "Prioridad": 0,
          "Tipoproceso": null,
          "Punteropila": null
        },
        {
          "Id": 5,
          "Nombre": "Proceso 5",
          "Estado": "nuevo",
          "Burst_time": 78,
          "Tiempoarribo": 0,
          "Prioridad": 0,
          "Tipoproceso": null,
          "Punteropila": null
        }
        ],
        "averageWT": 0,
        "quantum" : 60
}
module.exports = RoundRobin;

console.log(RoundRobin(a));