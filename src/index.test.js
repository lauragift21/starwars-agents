var expect = require('chai').expect;
var starwars = require('./index');

describe('starwars-agents', function() {
    describe('all', function(){
        it('should be an array of strings', function(){
            expect(starwars.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function(item) {
                    return typeof item === 'string';
                });
            }
        });
        it('should contain `Egwuenu Gift`', function() {
            expect(starwars.all).to.include('Egwuenu Gift');
        });
    });

    describe('random', function() {
        it('should return a random starwars item from starwars.all', function() {
          var randomItem = starwars.random();
          expect(starwars.all).to.include(randomItem);
        });
    });
});
