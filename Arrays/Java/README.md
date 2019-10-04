# Arrays in Java
An array is a group of like-typed variables that are referred to by a common name.Arrays in Java work differently than they do in C/C++. Following are some important point about Java arrays.

In Java all arrays are dynamically allocated.(discussed below)
Since arrays are objects in Java, we can find their length using member length. This is different from C/C++ where we find length using sizeof.
A Java array variable can also be declared like other variables with [] after the data type.
The variables in the array are ordered and each have an index beginning from 0.
Java array can be also be used as a static field, a local variable or a method parameter.
The size of an array must be specified by an int value and not long or short.
The direct superclass of an array type is Object.
Every array type implements the interfaces Cloneable and java.io.Serializable.
Array can contains primitives data types as well as objects of a class depending on the definition of array. In case of primitives data types, the actual values are stored in contiguous memory locations. In case of objects of a class, the actual objects are stored in heap segment.
