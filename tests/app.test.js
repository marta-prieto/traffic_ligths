const startApp = require('../src/js/app');

test('suma 1 + 2 es un total de 3', () => {
    expect(startApp(1, 2)).toBe(3); 
  });