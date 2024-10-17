const trafficStatus = require('../src/js/app');



test('check de estados', () => {
    const road = "....G....O....R....";
    const resultado = trafficStatus(road, 5);
    expect(resultado).toEqual([
    { position: 4, state: 'G', time: 5 },
    { position: 9, state: 'O', time: 0 }, 
    { position: 14, state: 'R', time: 5 }
    ])
});

