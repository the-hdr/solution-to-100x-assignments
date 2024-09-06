/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement (numbers)
{
    const totalNumberOfNumbers = numbers.length;
    let maxElementIndex = 0;
    for (let i = 1; i < totalNumberOfNumbers; ++i)
    {
        if (numbers[i] > numbers[maxElementIndex])
        {
            maxElementIndex = i;
        }
    }

    return 0 == totalNumberOfNumbers ? undefined : numbers[maxElementIndex];
}

module.exports = findLargestElement;