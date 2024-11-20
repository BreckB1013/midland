let firstName = prompt("Please enter your first name:");
        let number = parseInt(prompt("Please enter a number between 1 and 100:"));

        if (number % 2 === 0) {
            console.log(`${number} is even`);
        } else {
            console.log(`${number} is odd`);
        }

        if (number > 50) {
            console.log(`${number} is greater than 50`);
        } else {
            console.log(`${number} is less than or equal to 50`);
        }

        for (let i = 1; i < number; i++) {
            console.log(i);
        }

        for (let i = 100; i >= number; i--) {
            console.log(i);
        }

        let reversedName = firstName.split('').reverse().join('');
        console.log(`Your name in reverse is: ${reversedName}`);