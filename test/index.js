var expect = require('expect.js');
var server = require('..');
var client = require('../build/build');

describe('2D', function () {
  var data = require('./test-data-2d');
  function test(simplify, name) {
    describe(name + ' side', function () {
      it('works with low quality', function () {
        var expected = [{x:224.55, y:250.15},
                        {x:268.97, y:212.12},
                        {x:293.56, y:158.5}];

        var actual = simplify['2D'](data, 5);
        expect(JSON.stringify(actual)).to.equal(JSON.stringify(expected));
      });

      it('works with high quality', function () {
        var expected = [{x:224.55, y:250.15},
                        {x:267.76, y:213.81},
                        {x:293.56, y:158.5}];

        var actual = simplify['2D'](data, 5, true);
        expect(JSON.stringify(actual)).to.equal(JSON.stringify(expected));
      });
    });
  }
  test(server, 'server');
  test(client, 'client');
});

describe('3D', function () {
  var data = require('./test-data-3d');
  function test(simplify, name) {
    describe(name + ' side', function () {
      it('works with low quality', function () {
      var expected = [{x:224.55,y:250.15,z:237.35},
                      {x:268.33,y:212.45,z:240.39},
                      {x:293.56,y:158.5,z:226.03}];

        var actual = simplify['3D'](data, 5);
        expect(JSON.stringify(actual)).to.equal(JSON.stringify(expected));
      });

      it('works with high quality', function () {
      var expected = [{x:224.55,y:250.15,z:237.35},
                      {x:267.76,y:213.81,z:240.78},
                      {x:273.09,y:192.22,z:232.65},
                      {x:293.56,y:158.5,z:226.03}];

        var actual = simplify['3D'](data, 5, true);
        expect(JSON.stringify(actual)).to.equal(JSON.stringify(expected));
      });
    });
  }
  test(server, 'server');
  test(client, 'client');
});