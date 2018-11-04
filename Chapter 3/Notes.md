## Chapter 3:

1. If you don't pass enough arguments to a function, the function is still called but the values that aren't passed are undefined. WTF!
2. If you pass too many arguments to a function, the function is still called and the extra arguments are ignored. WTF!
3. Rules for function names are same as variable names. (AKA you can have '?')
4. Function without return statement returns undefined.
5. Global live as long as the page lives. Reloading causes your globals to be destroyed and then recreated.
6. Local variables typically disappear when your function ends. There are advanced ways to prevent this.
7. There's only one global scope so every file you load see the same set of variables (and creates global in the same space)
8. Hoisting refers to the act of Javascript creating all local variables at the beginning of the function whether you use it or not.
9. Javascript doesn't care if your functions are declared before or after you use them.
10. Javascript makes two passes over your file - first to get function definition and second to execute code.

