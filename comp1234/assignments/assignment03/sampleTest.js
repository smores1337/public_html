
// Test cases for the solution you may use this file to test your local code. You need to complete all the possible test cases

let _totalMarks = 0;
// calling function part1
part1();
//start runing the test cases
describe('Part 2: Comparing Numbers with a Twist', function() {
    const maxMarks = 18;
    it('should return 1 when num1 > num2 after the twist', function() {
        // Considering the twist: num1 += 5 and num2 -= 3 before the comparison
        chai.expect(part2(0, 3)).to.equal(1); // After applying the twist: 5 > 0
    });

    it('should return -1 when num1 < num2 after the twist', function() {
        // Considering the twist: num1 += 5 and num2 -= 3 before the comparison
        chai.expect(part2(-10, 5)).to.equal(-1); // After applying the twist: -5 < 2
    });

    it('should return 0 when num1 == num2 after the twist', function() {
        // To ensure num1 == num2 after the twist, both numbers must be equal after applying num1 += 5 and num2 -= 3
        // This means num1 initially must be 3 less than num2
        // Example: num1 = 2, num2 = 5 --> After the twist: 7 == 7
        chai.expect(part2(2, 10 )).to.equal(0);
    });

    it('should correctly handle negative numbers', function() {
        // Adjust expectations based on the twist logic
        chai.expect(part2(-5, -2)).to.equal(1); // After twist: 0 > -5
        chai.expect(part2(-2, -5)).to.equal(1); // After twist: 3 > -8
    });
    
    it('should correctly handle large numbers', function() {
        // Adjust expectations based on the twist logic
        chai.expect(part2(100000, 100000)).to.equal(1); // After twist: 100005 > 99997
        chai.expect(part2(100000, 99995)).to.equal(1); // After twist: 100005 > 99992
    });

        // Hook to run after each test
        afterEach(function() {
            if (this.currentTest.state === 'passed') {
                _totalMarks += maxMarks / 5  ; // Example: 5 tests worth equal marks
            }
        });    
});

describe('Part Three: Loop and Concatenation with Conditions', function() {
    const maxMarks = 18;
    it('should concatenate numbers in ascending order and prepend "MAGIC"  when sum is divisible by 3', function() {
        chai.expect(part3(1, 3)).to.equal('Magic123'); 
    });

    it('should concatenate numbers in descending order without " Magic" if sum is not divisible by 3', function() {
        chai.expect(part3(7, 1)).to.equal('7654321');
    });

    it('should concatenate numbers in descending order with " Magic" when sum is divisible by 3', function() {
        chai.expect(part3(6, 1)).to.equal('Magic654321');
    });

    it('should return the sum as a string when both numbers are the same', function() {
        chai.expect(part3(2, 2)).to.equal('4'); 
    });

    it('should return the sum as a string and prepend "MAGIC"  when sum is divisible by 3', function() {
        chai.expect(part3(3, 3)).to.equal('Magic6'); 
    });
        // Hook to run after each test
        afterEach(function() {
            if (this.currentTest.state === 'passed') {
                _totalMarks += maxMarks / 5  ; // Example: 5 tests worth equal marks
            }
        });    
});

describe('Part Four: Advanced Array Index and Value Analysis', function() {
    const maxMarks = 24;
    it('should return false for an invalid index', function() {
        chai.expect(part4(-1, [1, 2, 3])).to.equal(false);
        chai.expect(part4(3, [1, 2, 3])).to.equal(false);
    });

    it('should return true if the value at the index is 0', function() {
        chai.expect(part4(2, [1, 2, 0, 3, 4])).to.equal(true);
    });

    it('should sum values from the start to the index (excluding index value) for an even number at the index', function() {
        chai.expect(part4(2, [1, 3, 2, 5])).to.equal(4); // 1 + 3 = 4
    });

    it('should sum values from the index (excluding index value) to the end for an odd number at the index', function() {
        chai.expect(part4(1, [2, 3, 4, 6])).to.equal(10); // 4 + 6 = 10
    });

    it('should handle empty arrays correctly', function() {
        chai.expect(part4(0, [])).to.equal(false);
    });

    it('should handle arrays where summing is not applicable due to index position', function() {
        // Edge case: When index is at the start, and the value is even, resulting in no summing.
        chai.expect(part4(0, [2, 1, 3])).to.equal(0);
        // Edge case: When index is at the end, and the value is odd, resulting in no summing.
        chai.expect(part4(2, [1, 2, 3])).to.equal(0);
    });
   
        // Hook to run after each test
        afterEach(function() {
            if (this.currentTest.state === 'passed') {
                _totalMarks += maxMarks / 6  ; // Example: 5 tests worth equal marks
            }
        });
});


describe('Part Five: Array Rearrangement and Summation with Parity', function() {
    const maxMarks = 30;
    it('should correctly rearrange array and append sums of odd and even numbers', function() {
        let result = part5([5, 2, 8, 3, 1]);
        chai.expect(result.slice(0, -2)).to.deep.equal([5, 3, 1, 2, 8]); // Check rearrangement
        chai.expect(result[result.length - 2]).to.equal(9); // Sum of odd numbers
        chai.expect(result[result.length - 1]).to.equal(10); // Sum of even numbers
    });

    it('should handle arrays with only odd numbers', function() {
        let result = part5([5, 3, 1]);
        chai.expect(result.slice(0, -2)).to.deep.equal([5, 3, 1]); // Only odd numbers
        chai.expect(result[result.length - 2]).to.equal(9); // Sum of odd numbers
        chai.expect(result[result.length - 1]).to.equal(0); // Sum of even numbers (none present)
    });

    it('should handle arrays with only even numbers', function() {
        let result = part5([4, 2, 6]);
        chai.expect(result.slice(0, -2)).to.deep.equal([4, 2, 6]); // Only even numbers
        chai.expect(result[result.length - 2]).to.equal(0); // Sum of odd numbers (none present)
        chai.expect(result[result.length - 1]).to.equal(12); // Sum of even numbers
    });

    it('should handle empty arrays correctly', function() {
        let result = part5([]);
        chai.expect(result).to.deep.equal([0, 0]); // Both sums are 0
    });

    it('should handle arrays with one odd and one even number', function() {
        let result = part5([1, 2]);
        chai.expect(result.slice(0, -2)).to.deep.equal([1, 2]); // Odd first, then even
        chai.expect(result[result.length - 2]).to.equal(1); // Sum of odd numbers
        chai.expect(result[result.length - 1]).to.equal(2); // Sum of even numbers
    });

    // Hook to run after each test
    afterEach(function() {
        if (this.currentTest.state === 'passed') {
            _totalMarks += maxMarks / 5  ; // Example: 5 tests worth equal marks
        }
    });

    // Hook to run after all tests in the suite
    after(function() {
        // Display the final mark in the browser
        document.getElementById('finalMark').innerText += ` ${_totalMarks.toFixed(2)}/100`;
    });
});
