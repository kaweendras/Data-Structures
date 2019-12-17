### Code Sample
```c
    #include <stdio.h> 

    int main() 
    { 
        int arr[5]; 
        arr[0] = 5; 
        arr[2] = -10; 
        arr[3 / 2] = 2; // this is same as arr[1] = 2 
        arr[3] = arr[0]; 

        printf("%d %d %d %d", arr[0], arr[1], arr[2], arr[3]); 

        return 0; 
    } 
```






#### Jump
1. [Arrays](https://github.com/kaweendras/Data-Structures/tree/master/Arrays)
    - [Java](https://github.com/kaweendras/Data-Structures/tree/master/Arrays/Java)
    - [Python](https://github.com/kaweendras/Data-Structures/tree/master/Arrays/Python)
    - [C](https://github.com/kaweendras/Data-Structures/tree/master/Arrays/C)<--
    - [JS](https://github.com/kaweendras/Data-Structures/tree/master/Arrays/JavaScript)
    - [Go](https://github.com/kaweendras/Data-Structures/tree/master/Arrays/Go)
    - [Batch](https://github.com/kaweendras/Data-Structures/tree/master/Arrays/Bat)
    - [PHP](https://github.com/kaweendras/Data-Structures/tree/master/Arrays/PHP)
    - [VB.net](https://github.com/kaweendras/Data-Structures/tree/master/Arrays/VB.net)
    - [Kotlin](https://github.com/kaweendras/Data-Structures/tree/master/Arrays/Kotlin)
2. [Stack](https://github.com/kaweendras/Data-Structures/tree/master/Stack) 
    - [Java](https://github.com/kaweendras/Data-Structures/tree/master/Stack/Java) 
    - [C++](https://github.com/kaweendras/Data-Structures/tree/master/Stack/C++) 
    - [Go](https://github.com/kaweendras/Data-Structures/tree/master/Stack/Go)
3. [Queue](https://github.com/kaweendras/Data-Structures/tree/master/Queue) 
    - [Java](https://github.com/kaweendras/Data-Structures/tree/master/Queue/Java)
4. [String](https://github.com/kaweendras/Data-Structures/tree/master/String) 
    - [Python](https://github.com/kaweendras/Data-Structures/tree/master/String/Python)
    
# Arrays in C
An array is collection of items stored at continuous memory locations.

<p align="center">
  <img  src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2015/05/Arrays.png">
</p>

Why do we need arrays?
We can use normal variables (v1, v2, v3, ..) when we have a small number of objects, but if we want to store a large number of instances, it becomes difficult to manage them with normal variables. The idea of an array is to represent many instances in one variable.
