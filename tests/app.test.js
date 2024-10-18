const trafficStatus = require('../src/js/app');

test('check de estado semáforos', () => {
    const road = "CCC.G.G.R...";
    const resultado = trafficStatus(road, 5);
    expect(resultado).toEqual([
    { position: 4, state: 'G', time: 5 },
    { position: 6, state: 'G', time: 5 },
    { position: 8, state: 'R', time: 5 }
    ])
});

