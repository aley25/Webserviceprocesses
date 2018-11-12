//nuevo, listo, ejecucion, terminado, bloqueado

function SJFA(processes){
    var progreso = [];
    finalizado = false;
    var conteo = 0;
    while(finalizado !== true){
        var procesoactual;
        var procesoanterior;
        if(conteo=== 0){
            procesoactual =processes.Processes[0]; 
        }
        for(var i = 0; i < processes.Processes.length; i++){
            if(conteo <= processes.Processes[i].Tiempoarribo){
                if(processes.Processes[i].Burst_time !== 0){
                    for(var x = 0; x < processes.Processes.length; x++){
                        if(processes.Processes[x].Burst_time < processes.Processes[i].Burst_time){
                            if(processes.Processes[x].Id !== processes.Processes[i].Id){
                                procesoanterior = procesoactual;
                                if(progreso.length === 0){
                                    procesoanterior.nuevo = procesoanterior.Tiempoarribo;
                                    procesoanterior.listo= procesoanterior.Tiempoarribo;
                                    procesoanterior.enjecucion= `${procesoanterior.Tiempoarribo}-${procesoanterior.Tiempoarribo+conteo}`;
                                }
                            }else{
                                procesoactual.Burst_time -= 1;
                            }
                            
                        }else{
                            procesoactual.Burst_time -= 1;
                        }
                    }
                    
                }else{
                    finalizado = true;
                }
            }
        }
        conteo+= 1;
        if(procesoactual.Burst_time === 0){
            progreso.push(procesoactual);
        }
       
    }
    var final = {
        "Processes": progreso,
        "averageWT": 0
    };
    return final;
    
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

console.log(SJFA(a));