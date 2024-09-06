/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isAlphabet (inputCharacter)
{
    return /^[a-zA-Z]$/.test(inputCharacter);
}

function isPalindrome (inputString)
{
    const inputStringSize = inputString.length;
    let frontCounter = 0, backCounter = inputStringSize - 1;
    
    while (frontCounter < backCounter)
    {
        const frontCharacter = inputString[frontCounter].toLowerCase();
        const backCharacter = inputString[backCounter].toLowerCase();

        if (isAlphabet (frontCharacter) && isAlphabet (backCharacter))
        {
            if (frontCharacter != backCharacter)
            {
                return false;
            }

            ++frontCounter;
            --backCounter;
        }
        else
        {
            if (false == isAlphabet (frontCharacter))
            {
                ++frontCounter;
            }
            if (false == isAlphabet (backCharacter))
            {
                --backCounter;
            }
        }
    }
    return true;
}

module.exports = isPalindrome;