'use strict';

var _stringCalculator = require('../src/string-calculator');

var _stringCalculator2 = _interopRequireDefault(_stringCalculator);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var calculator = new _stringCalculator2.default();

describe('String Calculator', function () {
    describe('add method', function () {
        describe('when sending empty string', function () {
            it('should return 0', function () {
                var result = calculator.add('');
                (0, _chai.expect)(result).to.equal(0);
            });
        });
        describe('when sending one number', function () {
            it('should return the same number', function () {
                var result = calculator.add("1");
                (0, _chai.expect)(result).to.equal(1);
            });
        });
        describe('when sending two number', function () {
            it('should return the sum of those numbers', function () {
                var result = calculator.add("1,2");
                (0, _chai.expect)(result).to.equal(3);
            });
        });
        describe('when sending two unkown amount number', function () {
            it('should return the sum of those amount numbers', function () {
                var result = calculator.add("1,2,3,4");
                (0, _chai.expect)(result).to.equal(10);
            });
        });
        describe('when sending number separated by comma and new line', function () {
            it('should return the sum of those numbers separated by comma and new linw', function () {
                var result = calculator.add("1\n2,3");
                (0, _chai.expect)(result).to.equal(6);
            });
        });
    });
});