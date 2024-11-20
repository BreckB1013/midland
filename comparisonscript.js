        let firstName = prompt("Please enter your first name:");
        let nameMessage = "That's a great name!";
        alert(nameMessage);
        console.log(nameMessage);
        let number = parseInt(prompt("Please enter a number between 1 and 100:"));
       
if (number % 2 === 0) {
    alert(`${number} is even.`);
} else {
    alert(`${number} is odd.`);
}

if (number > 50) {
            alert(`${number} is greater than 50.`);
        } else if (number < 50) {
            alert(`${number} is less than 50.`);
        } else {
            alert(`${number} is equal to 50.`);
        }
        console.log("Numbers before yours:");
        for (let i = 1; i < number; i++) 
            console.log(i);
            console.log("Counting down from 100 to your number:");
        for (let i = 100; i >= number; i--) 
            console.log(i);

       for (let i = 1; i < number; i++) {
            console.log(i);
        }

        for (let i = 100; i >= number; i--) {
            console.log(i);
        }

        if (firstName === " ") {
            alert("That's a great name!");
        }

        let reversedName = firstName.split('').reverse().join('');
        let reverseMessage = console.log(`Your name in reverse is: ${reversedName}`);