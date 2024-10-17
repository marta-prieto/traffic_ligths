function trafficStatus(road, n) {

    //toda la cadena de caracteres que simulan la carretera (incluyendo semáforos, coche y asfalto, se separan en index)
    let roadArray = road.split('');

    //semáforos
    let trafficLights = [];

    //objeto con los tiempos de cada luz de semáforo
    let lightTrafficTime = {
        'G' : 5,
        'O' : 1,
        'R' : 5
    };

   for (let i =0; i< roadArray.length; i++) {
    if(roadArray[i] === "G" || roadArray[i] === "O" || roadArray[i] === "R"){
        console.log(`A -- Analizando posición ${i}, index: ${roadArray[i]}`)
        //nuevo array
        trafficLights.push({ 
            position: i, 
            state: roadArray[i],
            time: lightTrafficTime[roadArray[i]]
        }) ;
        console.log(`B -- Semáforo encontrado: ${roadArray[i]} en la posición ${i}`);
        console.log("C -- Semáforos detectados:", trafficLights);
    }
    
   }

  return trafficLights;
  
}

module.exports = trafficStatus; 