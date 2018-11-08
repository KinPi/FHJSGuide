## Chapter 5 - Object Oriented Programming:

1. Property can be any string, but we usually stick with valid variable name.
2. If you use a string with a space in it for a property name, you need to use quotes around the name.
3. You can add new properties any time by doing object.propertyname = value. WTF?
4. You can delete existing properties itself by using delete. (e.g. delete object.propertyname) WTF?
5. Delete returns true if it was successfully deleted or if the property you are deleting doesn't exist.
6. Delete only returns false if the property can't be deleted.
7. To add behavior to an object, have a property reference a lambda.
8. Add "this" to member variables in object lambda functions or less it won't work. (b/c checks local variables in function, and globals)
9. Iterate through an object's property with "for in".

    ```
    for (var prop in chevy) {
        console.log(prop + ": " + chevy[prop]);
    }

    ```

10. You can access an object's property in two ways - obj.prop or obj[prop].
11. 

