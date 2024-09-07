/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator
{
	constructor()
	{
		this.result = 0;
	}
	
	add (newNumber)
	{
		this.result += newNumber;
		return this.result;
	}

	subtract (newNumber)
	{
		this.result -= newNumber;
		return this.result;
	}

	multiply (newNumber)
	{
		this.result *= newNumber;
		return this.result;
	}

	divide (newNumber)
	{
		if (0 == newNumber)
		{
			throw new Error('Cannot divide by zero');
		}
		this.result /= newNumber;
		return this.result;
	}

	clear()
	{
		this.result = 0;
		return this.result;
	}

	getResult()
	{
		return this.result;
	}

	calculate (expression)
	{
		expression = expression.replace(/\s+/g, '');

		const validExpressionPattern = /^[0-9+\-*/().]+$/;
		if (!validExpressionPattern.test(expression))
		{
			throw new Error('Invalid characters in the expression');
		}

		try
		{
			const currentResult = eval(expression);
			if (typeof result !== 'number' || isNaN(result) || !isFinite(result))
			{
				throw new Error('Invalid result from expression evaluation');
			}
			this.result = currentResult;
		}
		catch (error)
		{
			throw new Error('Error evaluating the expression');
		}
	}
}

module.exports = Calculator;