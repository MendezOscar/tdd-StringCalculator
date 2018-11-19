class StringCalculator {
    add(numbers) {
        const newNumbers = numbers.replace('\n', ',');
        const numbersArray = newNumbers.split(',');
        let sumofNumber = 0;
        numbersArray.forEach(number => {
            sumofNumber += parseInt(number);
        });
        return numbers ? sumofNumber : 0;
    }
}

export default StringCalculator;