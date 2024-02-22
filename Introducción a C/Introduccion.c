#include <stdio.h>
#include <stdlib.h>

// A function is a block of code designed to perform a particular task, it's purpose is to create it once and call it multiple times
// A void function returns no value
// Functions have parameters, arguments they receive and use in their code
// If the function has to return a value, it ends with the return command and it's defined by the type of avule it returns
// If we return a value with a function, we can assign it to a variable
void greet(){
    printf("Hello\n");
    printf("How are you?");
}
void greet(char* name){
    printf("Hello\n");
    printf("How are you? %s", name);
}


int main(int argc, char *argv[]){
/* 
This is a general-purpose programming language and it has 50 years. It has been used to write operating system like Windowms and complex programs like the Python interpreter.
*/ 
// Outputs are what the programs produces for the user to see
// The printf() keyword is a pre-defined function that creates outputs
printf("Hello World");
// A line of code is called a statement, each one performs a specific task
// Each statement ends with ";"
#include <stdio.h>
#include <stdlib.h>
// These are headers, files that contain functions and commands
// <stdio.h> contains the printf() function
// Each C program has an entry, the main function
// return 0; is the last command of the main function, it indicates de successfull end of our program

/*
To output different type of data, the printf function supports different special format specifiers
- %d : whole number
- %f : floating point number (float)
- %lf : floating point number (double)
- %c : single character
- %s : string
- %p : hexadecimals
*/
printf("%c", 'A');

// Each variable has a different type
/*
- int : integers
- float : floating point numbers (7 digits)
- double : floating point numbers (15 digits)
- char : single character
- const : constants, variables that never change
*/
const int number = 10;

// You can use arithmetic operators to perform calculations
// + - * / % 

/*
Your programs can take information from the user
The scanf() function does exactly that
We can insert directly a value into a variable
The & gives the location in the memory of a variable
*/
int num;
scanf("%d", &num);

// If you have to perfrom different actions under differents conditions, you use conditional statements
// We have if, else and else if 
// There are also comparison operators
// > < != == <= >=
if(num == 10){printf("Perfect");}
else if(num < 10){printf("Almost perfect");}
else{printf("Could be better");}
// We also have the switch statement, also used for conditions
// Case holds the possible value and what to do under that condition
// Each case must have the break statement to terminate the switch
// Deafult is the code that executes if none of the conditions apply
int position;
switch(position){
    case 1:
        printf("Gold");
        break;
    case 2:
        printf("Silver");
        break;
    default:
        printf("No medal");
}
// To combine multiple conditions we use logical operators
// (&& AND, || OR, ! NOT)

// We can loop code using do while, while, for
int counter = 1;
// Do while executes the code at least once, the condition applies or not
do{
    printf("%d\n", counter);
    counter++;
}
while(counter <= 10);

for(int i = 1; i <= 10; i++){
    if(i == 5){
        // Continue skips the current part the loop is at
        continue;
    }
    printf("%d\n", i);
}
// Arrays store multiple similar values in one place
// We access it's values through the index
// We can insert it's through the index or all at once
char letters[27];
int scale[] = {1, 2, 3, 4, 5};
// There are multidimensional arrays, arrays inside arrays
int board[2][3] = {
    {1, 2, 3},
    {4, 5, 6},
};
for(int i = 0; i < 3; i++){
    for(int j = 0; j < 3; j++){
        printf("%d ", board[i][j]);
    }
    printf("\n");
}
// A string is an array of characters, it's defined as a char array
// To insert special characters like quotes on a string, we use the escape character "\"
// To hold a string from an input, we set a length on the variable
// When the variable is a char array, we don't need the & in the scanf()
char name[] = "James";
char name2[50];
scanf("%s", name2);
// To input a text with spaces in it, we use fgets()
// stdin tells to take the input from the user
fgets(name2, 50, stdin);

// Pointers are used to efficiently access and manipulate computer memory
// A pointer is a variable that stores the memory address of another variable as it's value
// The address of a variable can be accessed with the & operator
// 
int age = 24;
int* p = &age;
printf("%p", &age); // These printf output the same thing
printf("%p", p);
printf("%d", *p); // Outputs the value of age
// The name of an array is actually a pointer to it0s first element
int x[] = {1, 2, 3, 4, 5};
int* p = x;
printf("%d", *p); // Outputs 1

}

