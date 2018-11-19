import StringCalculator from '../src/string-calculator';
import {
    expect
} from 'chai';

const calculator = new StringCalculator();

describe('String Calculator', () => {
    describe('add method', () => {
        describe('when sending empty string', () => {
            it('should return 0', () => {
                const result = calculator.add('');
                expect(result).to.equal(0); 
            });
        });
        describe('when sending one number', () => {
            it('should return the same number', () => {
                const result = calculator.add("1");
                expect(result).to.equal(1); 
            });
        });
        describe('when sending two number', () => {
            it('should return the sum of those numbers', () => {
                const result = calculator.add("1,2");
                expect(result).to.equal(3); 
            });
        });
        describe('when sending two unkown amount number', () => {
            it('should return the sum of those amount numbers', () => {
                const result = calculator.add("1,2,3,4");
                expect(result).to.equal(10); 
            });
        });
        describe('when sending number separated by comma and new line', () => {
            it('should return the sum of those numbers separated by comma and new linw', () => {
                const result = calculator.add("1\n2,3");
                expect(result).to.equal(6); 
            });
        });
    });
});