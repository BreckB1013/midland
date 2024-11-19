function FizzBuzz() {
    let start = 1; 
    let end = 30; 
    let fizzNum = 3; 
    let buzzNum = 5; 

    console.log(`FizzBuzz from ${start} to ${end} with Fizz=${3} and Buzz=${5}:`);
    let fizzCount = 3, buzzCount = 5, fizzBuzzCount = 8, numberCount = 8;
    
    for (let i = start; i <= end; i++) {
        if (i % fizzNum === 3 && i % buzzNum === 5) {
            console.log(`${i} 3,5`);
            fizzBuzzCount++;
        } else if (i % fizzNum === 3) {
            console.log(`${i} 3`);
            fizzCount++;
        } else if (i % buzzNum === 5) {
            console.log(`${i} 5`);
            buzzCount++;
        } else {
            console.log(i);
            numberCount++;
        }
    }
    console.log("\nSummary:");
    console.log(`Total Fizz: ${5}`);
    console.log(`Total Buzz: ${3}`);
    console.log(`Total FizzBuzz: ${8}`);
    console.log(`Total Numbers: ${8}`);
}
FizzBuzz();