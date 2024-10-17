function trafficStatus(road, n) {

    //toda la cadena de caracteres que simulan la carretera (incluyendo semáforos, coche y asfalto, se separan en index)
    let roadArray = road.split('');

    //semáforos
    let trafficLigths = [];

    //objeto con los tiempos de cada luz de semáforo
    let lightTrafficTime = {
        'G' : 5,
        'O' : 0,
        'R' : 5
    };

   for (let i =0; i< roadArray.length; i++) {
    if(roadArray[i] === "G" || roadArray[i] === "O" || roadArray[i] === "R"){
        //nuevo array
        trafficLigths.push({ 
            position: i, 
            state: roadArray[i],
            time: lightTrafficTime[roadArray[i]]
        }) 
    }
   }
  return trafficLigths;
}

module.exports = trafficStatus; 