## Instructions

Given a bizarre string, increment the string by 1. Refer to the test cases for more info.

The logic to Find bizzare string 

1. If the the string is not valid it will throw an exception.

2. If the last character of string is either between A-Z or a-z then we will append 1 to the given string

3. If the last character of string is between 0-8 then we will add 1 to the last character and will append to the given string.

4. If the last character of string is 9 then we will convert string into reverse array and will traverse each element and compare with ASCII value of 1 to 9 . If it is between 1 - 9 then we will push it into one array and will traverse to the next element . IF it is equal to 0 we set a flag hasZero to true and will break the traversing. Now we will make a string from elements in array and will append the last character of original string and will increment it by 1 and will append it to original string by checking if the string has leading zeros or not.