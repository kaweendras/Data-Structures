# Stack Data Structure in C++

### Code

```c++
    #include <iostream> 
    #include <stack> 
    using namespace std; 

    void showstack(stack <int> s) 
    { 
        while (!s.empty()) 
        { 
            cout << '\t' << s.top(); 
            s.pop(); 
        } 
        cout << '\n'; 
    } 

    int main () 
    { 
        stack <int> s; 
        s.push(10); 
        s.push(30); 
        s.push(20); 
        s.push(5); 
        s.push(1); 

        cout << "The stack is : "; 
        showstack(s); 

        cout << "\ns.size() : " << s.size(); 
        cout << "\ns.top() : " << s.top(); 


        cout << "\ns.pop() : "; 
        s.pop(); 
        showstack(s); 

        return 0; 
    } 
```
#### Jump
1. [Arrays](https://github.com/kaweendras/Data-Structures/tree/master/Arrays) 
    - [Java](https://github.com/kaweendras/Data-Structures/tree/master/Arrays/Java)
    - [Python](https://github.com/kaweendras/Data-Structures/tree/master/Arrays/Python)
    - [C](https://github.com/kaweendras/Data-Structures/tree/master/Arrays/C)
2. [Stack](https://github.com/kaweendras/Data-Structures/tree/master/Stack) 
    - [Java](https://github.com/kaweendras/Data-Structures/tree/master/Stack/Java) 
    - [C++](https://github.com/kaweendras/Data-Structures/tree/master/Stack/C++) <--
3. [Queue](https://github.com/kaweendras/Data-Structures/tree/master/Queue) 
4. [String](https://github.com/kaweendras/Data-Structures/tree/master/String) 
    - [Python](https://github.com/kaweendras/Data-Structures/tree/master/String/Python)


    Stacks are a type of container adaptors with LIFO(Last In First Out) type of working, where a new element is added at one end and (top) an element is removed from that end only.
 
The functions associated with stack are:

empty() – Returns whether the stack is empty – Time Complexity : O(1) </br>
size() – Returns the size of the stack – Time Complexity : O(1) </br>
top() – Returns a reference to the top most element of the stack – Time Complexity : O(1) </br>
push(g) – Adds the element ‘g’ at the top of the stack – Time Complexity : O(1) </br>
pop() – Deletes the top most element of the stack – Time Complexity : O(1)</br>
