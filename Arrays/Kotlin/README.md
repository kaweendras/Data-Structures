# Kotlin Array

Array is one of the most fundamental data structure in practically all programming languages. The idea behind an array is to store multiple items of the same data-type,such as an integer or string under a single variable name.
Arrays are used to organize data in programming so that a related set of values can be easily sorted or searched.
Here are some basic properties of arrays –

They are stored in contiguous memory locations.
They can be accessed programmatically through their indexes (array[1], array[0], etc.)
They are mutable.
Their size is fixed.
To learn more about the array data structure, check out Array tutorials.

Creating an array –
In Kotlin, arrays are not a native data type, but a mutable collection of similar items which are represented by the Array class.
There are two ways to define an array in Kotlin.



Using the arrayOf() function –

We can use the library function arrayOf() to create an array by passing the values of the elements to the function.
Syntax:

```kotlin
val num = arrayOf(1, 2, 3, 4)   //implicit type declaration
val num = arrayOf<Int>(1, 2, 3) //explicit type declar
```