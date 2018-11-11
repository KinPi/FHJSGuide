## Chapter 7 - Serious Types:

1. typeof operator returns the type of the operand
2. undefined - variable haven't been initialized, object with missing property, array with missing value
3. null - places where an object should be but one can't be created or found
4. NaN - Not a Number, used for numeric results that cannot be represented (e.g. 0/0)
5. NaN != NaN WTF!
6. Use isNaN(myNumber) instead of == to test for NaN.
7. typeof num, where num is 0/0, gives you number. WTF!
8. isNan(string_argument) returns true. WTF!
9. 10/0 gives you infinity. WTF!
10. You can test for infinity using ==. (e.g. tamale == Infinity) WTF!
11. "99" == 99 returns true
12. == tries to 1) compare them if they are same 2) try to convert if different types, and then compare
    1. Comparing a number and a string - string attempts to get converted to number. If it doesn't go well, it becomes NaN.
    2. Comparing boolean with another type - convert the boolean to a number (true is 1, false is 0), might take multiple conversions.
        ```
          "1" == true
          "1" == 1
            1 == 1
            true
        ```
    3.     

