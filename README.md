On page load, the zeroState function is called and all buttons are disabled. The default range is set at 1-100 and random number = null.

There is an event listener on the guess button and the enter key that runs the same code.

Variables are created that grab the values out of all input fields. These values are used to generate a random number, evaluate the input (passed in as arguments when the functions run).

Once input is evaluated and determined to be a number within the specified range, the evaluateGuess function is run.

Upon a correct guess, the min and max values are altered and  the random number = null. A new random number(based on the updated min and max) is generated on the next guess click(or enter press).

The cycle of evaluating the input and the guess continue.

BOOM! 
