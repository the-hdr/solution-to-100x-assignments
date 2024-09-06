/*
  Write a function `isAnagram` which takes 2 parameters and returns true if one of them is the anagram of the other, otherwise return false.
  What's an anagram?
  - A string 's' is said to be an anagram of another string 't' if it is possible to rearrange the individual characters of 's' to form 't'.
    Ignore casing of the characters i.e treat '100x' as the same as '100X'.
    Ex: 'Rocket Boys' is an anagram of 'October Sky'.
*/

function isAnagram (str1, str2)
{
  const sortedCharStr1 = str1.toLowerCase().split('').sort().join('');
  const sortedCharStr2 = str2.toLowerCase().split('').sort().join('');
  
  return sortedCharStr1 == sortedCharStr2;
}

module.exports = isAnagram;
