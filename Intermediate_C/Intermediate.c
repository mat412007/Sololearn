#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <errno.h>

struct student{
  char name[50];
  int number;
  int age;
};
// Struct pointer as a function parameter
void showStudentData(struct student *st) {
  printf("\nStudent:\n");
  printf("Name: %s\n", st->name);
  printf("Number: %d\n", st->number);
  printf("Age: %d\n", st->age);
}

typedef struct {
  int id;
  char title[40];
  float hours; 
} course;
void update_course(course *class) {
  strcpy(class->title, "C++ Fundamentals");
  class->id = 111;
  class->hours = 12.30;
}
void display_course(course class) {
  printf("%d\t%s\t%3.2f\n", class.id, class.title, class.hours);
}
void update_course(course *class);
void display_course(course class);

// A function can have union parameters that accept arguments by value when a copy of the union variable is all that is needed. 
// For a function to change the actual value in a union memory location, pointer parameters are required. 
union id {
  int id_num;
  char name[20]; 
};
void set_id(union id *item) {
  item->id_num = 42;
}
void show_id(union id item) {
  printf("ID is %d", item.id_num);
}

int main(int argc, char *argv[]){
// A structure is a user-defined data type that groups related variables of different data types, these are called members
struct course { // defines data type named course with 3 members
    int id;
    char title[40];
    float hours;
};
// To declare variables of a structure datat type we do this:
struct course c1;
c1 = (struct course) {4555, "Math", 8};
struct course c2 = {4785, "Literature", 4};
struct course s3 = {.hours = 5, .id = 4315, .title = "History"};
// We can access a structure member using a dot like this:
c1.id = 5874;
// String assigment requires strcpy:
strcpy(c2.title, "Technilogy");
// We can also assign a structure to another with the same type:
c2 = c1;
// We can also use typedef to define structures, the difference is that if we use it, it eliminates the need to use the word structure when declaring variables
typedef struct{
    char name[50];
    int age;
    int id;
} student;
student st1;
student st2;
// The members of structures can be other structures
typedef struct{
    int x;
    int y;
} point;

typedef struct{
    float radius;
    point center;
} circle;
// To declare structs that are members we use {} and double dot:
circle c = {4.5, {1, 3}};
int radio = c.radius;
int x = c.center.x;
int y = c.center.y;
// Structures can also have pointers:
/*
struct myStruct *struct_ptr;
defines a pointer to the myStruct structure.

struct_ptr = &struct_var;
stores the address of the structure variable struct_var in the pointer struct_ptr.

struct_ptr -> struct_mem;
accesses the value of the structure member struct_mem.
*/
// The -> operator allows to access members of the struct though the pointer.
// (*st).age is the same as st->age.
// Also, when a typedef has been used to name the struct, then a pointer is declared using only the typedef name along with * and the pointer name.
struct student st1 = {"Krishna", 5, 21};
showStudentData(&st1);
// Structures can also be function parameters
course cs2;
update_course(&cs2);
display_course(cs2);
// Arrays of Structures
typedef struct {
  int h;
  int w;
  int l;
} box;
box boxes[3] = {{2, 6, 8}, {4, 6, 6}, {2, 6, 9}};
int k, volume;
//After declaring an array of structures, an element is accessible with the index number. 
for (k = 0; k < 3; k++) {
  volume = boxes[k].h*boxes[k].w*boxes[k].l;
  printf("box %d volume %d\n", k, volume);
}
/*
A union allows to store different data types in the same memory location.
It is like a structure because it has members. However, a union variable uses the same memory location for all its member's and only one member at a time can occupy the memory location.
Unions are used for memory management. The largest member data type is used to determine the size of the memory to share and then all members use this one location. This process also helps limit memory fragmentation. Memory management is discussed in a later lesson.
*/
union val {
int int_num;
float fl_num;
char str[20];
};
union val u1;
union val u2;
u2 = u1;
// You access the members of a union variable by using the . dot operator 
union val test;
test.int_num = 123;
test.fl_num = 98.76;
strcpy(test.str, "hello");
// Trying to access a member that isn't occupying the memory location gives unexpected results.
// The last assignment overrides previous assignments, which is why str stores a value and accessing int_num and fl_num is meaningless.
printf("%d\n", test.int_num);
printf("%f\n", test.fl_num);
printf("%s\n", test.str);
// Unions are often used within structures because a structure can have a member to keep track of which union member stores a value. 
typedef struct {
  char make[20];
  int model_year;
  int id_type; /* 0 for id_num, 1 for VIN */
  union {
    int id_num;
    char VIN[20]; 
  } id;
} vehicle;

vehicle car1;
strcpy(car1.make, "Ford");
car1.model_year = 2017;
car1.id_type = 0;
car1.id.id_num = 123098;
printf("Make: %s\n", car1.make);
printf("Model Year: %d\n", car1.model_year);
if (car1.id_type == 0)
  printf("ID: %d\n", car1.id.id_num);
else
  printf("ID: %s\n", car1.id.VIN);
// Pointers to unions
// A pointer to a union points to the memory location allocated to the union.
union val {
  int int_num;
  float fl_num;
  char str[20]; 
};
union val info;
union val *ptr = &info;
ptr->int_num = 10;
printf("info.int_num is %d", info.int_num);
// A function can have union parameters that accept arguments by value when a copy of the union variable is all that is needed. 
// Arrays of Unions
// With unions, it is important to keep in mind that only one member of the union can store data for each array element.
union val {
  char ch_val; 
  int int_num;
  float fl_num;
  char str[20];
};
union val nums[10];
int k;
for (k = 0; k < 10; k++) {
  nums[k].int_num = k;
}
for (k = 0; k < 10; k++) {
  printf("%d  ", nums[k].int_num);
}
union val arr[3];
arr[0].int_num = 42;
arr[1].fl_num = 3.14;

// Working with memory
// When you declare a variable using a basic data type, C automatically allocates space for the variable in an area of memory called the stack. 
// An int variable is allocated 4 bytes when declared
// sizeof show the size of the variable
int x;
printf("%ld", sizeof(x)); // 4
int arr[10];
printf("%ld", sizeof(arr)); // 40
// Dynamic memory allocation is the process of allocating and freeing memory as needed.
// Dynamic memory is managed with pointers that point to newly allocated blocks of memory in an area called the heap.
// For this we use the stdlib.h library it gives access to multiple function to manage memory
/*
- malloc(bytes) allocates a specified number of contiguous bytes in memory and returns a pointer to the allocated memory.
The allocated memory is contiguous and can be treated as an array, and pointer arithmetic is used to traverse the array.
If the allocation is unsuccessful, NULL is returned.  
*/
int *pt = malloc(10 * sizeof(*pt)); // a block of 10 ints
if (pt != NULL) {
  *(pt + 2) = 50;  /* assign 50 to third int */
}
printf("%d\n", *(ptr + 2));
free(ptr); // You free memory to make more available for later
/*
- calloc(num_items, item_size) Returns a pointer to a contiguous block of memory that has num_items items, each of size item_size bytes. Typically used for arrays, structures, and other derived data types. The allocated memory is initialized to 0.*/
typedef struct {
  int num;
  char *info;
} record;

record *recs;
int num_recs = 2;
int k;
char str[ ] = "This is information";

recs = calloc(num_recs, sizeof(record)); // allocates blocks of memory within a contiguous block of memory for an array of structure elements.
if (recs != NULL) {
  for (k = 0; k < num_recs; k++) {
    (recs+k)->num = k;
    (recs+k)->info = malloc(sizeof(str)); // allocates memory for the string
    strcpy((recs+k)->info, str); // inserts the string on the info member
  }
}
/*
- realloc(ptr, bytes) expands a current block to include additional memory. It leaves the original content in memory and expands the block to allow for more storage.*/
int *pr;
pr = malloc(10 * sizeof(*pr));  
if (pr != NULL) {
  *(pr + 2) = 50;  /* assign 50 to third int */
}
pr = realloc(pr, 100 * sizeof(*pr)); 
*(pr + 30) = 75;
/*
- free(ptr)  Releases the block of memory pointed to by ptr. 
*/
// Dynamic Strings
// Allocating memory for a string:
char str20[20];
char *m = NULL;
strcpy(str20, "12345"); // Insert string in str20
m = malloc(strlen(str20) + 1); // strlen() return the length of a string, we add 1 extra because of the NULL character '\0'
strcpy(m, str20); // Insert the value of str20 inside m
printf("%s", m); 

// Dynamic Arrays
// This allows the number of elements to grow as needed
typedef struct {
  int *elements;
  int size;
  int cap;
} dyn_array;

dyn_array ar;
/* initialize array */
ar.size = 0;
ar.elements = calloc(1, sizeof(*ar.elements) );
ar.cap = 1;  /* room for 1 element */
/*To expand by more elements:*/
ar.elements = realloc(ar.elements, (5 + ar.cap) * sizeof(*ar.elements));
if (ar.elements != NULL)
  ar.cap += 5; /* increase capacity */
/*Adding an element to the array increases its size*/
if (ar.size < ar.cap) {
  ar.elements[ar.size] = 50;
  ar.size++;
} else {
  printf("Need to expand the array.");
}

// Working with Files
// An external file can be opened, read from, and written to in a C program
// C includes the FILE type for defining a file stream
FILE *f = fopen("filename", "mode");
// If the file cannot be opened NULL is returned instead
// There are multiple modes
/*
- r open for reading (file must exist)
- w open for writing (file need not exist)
- a open for append (file need not exist)
- r+ open for reading and writing from beginning
- w+ open for reading and writing, overwriting file
- a+ open for reading and writing, appending to file
*/
// fclose(fp) closes the file opened with FILE, it returns 0 if successfull, if there is an error it returns EOF 
fclose(f);

// Reading from a File
// A file can be read one character at a time or an entire string can be read into a character buffer, a temporary string
int stock;
char buffer[200];
char item[10]; 
char C;
float price;
FILE *fptr = fopen("myfile.txt", "r");
/*
- fgets(buff, n, fp) Reads n-1 characters from the file pointed to by fp and stores the string in buff. A NULL character '\0' is appended as the last character in buff. If fgets encounters a newline character or the end of file before n-1 characters is reached, then only the characters up to that point are stored in buff.*/
fgets(buffer, 20, fptr); /* read a line */
printf("%s\n", buffer);
/*
- fscanf(fp, conversion_specifiers, variables) Reads characters from the file pointed to by fp and assigns input to a list of variable pointers vars using conversion_specifiers. As with scanf, fscanf stops reading a string when a space or newline is encountered.*/
fscanf(fptr, "%d%s%f", &stock, item, &price); /* read data */
printf("%d %s %4.2f\n", stock, item, price);
/*
- fgetc(fp) Returns the next character from the file pointed to by fp. If the end of the file has been reached, then EOF is returned.*/
while ((C = fgetc(fptr)) != EOF){
  printf("%c", C); // read the rest of the file
}
fclose(fptr);

// Writting to a File
// When writing to a file, newline characters '\n' must be explicitly added.
char filename[50];
char *ca = "a";
FILE *fptr = fopen("myfile.txt", "w");
/*
- fputc(char, fp) Writes character char to the file pointed to by fp.*/
fputc(*ca, fptr);
/*
- fputs(str, fp) Writes string str to the file pointed to by fp.*/
fputs("End of List", fptr);
/*
- fprintf(fp, str, vars) Prints string str to the file pointed to by fp. str can optionally include format specifiers and a list of variables vars.*/
fprintf(fptr, "Inventory\n");
fprintf(fptr, "%d %s %f\n", 100, "Widget", 0.29);

// Binary File Input and Output
// Writing only characters and strings to a file can become tedious when you have an array or structure. To write entire blocks of memory to a file we have binary functions
/*
- rb open for reading (file must exist)
- wb open for writing (file need not exist)
- ab open for append (file need not exist)
- rb+ open for reading and writing from beginning
- wb+ open for reading and writing, overwriting file
- ab+ open for reading and writing, appending to file
*/
int array[10];
int xi[10];
int k;
for (int k = 0; k < 10; k++){
  array[k] = k;
}
/*
- fwrite(ptr, item_size, num_items, fp) Writes num_items items of item_size size from pointer ptr to the file pointed to by file pointer fp.*/
FILE *fptr = fopen("datafile.bin", "wb");
fwrite(arr, sizeof(arr[0]),
sizeof(arr)/sizeof(arr[0]), fptr);
fclose(fptr);
/*
- fread(ptr, item_size, num_items, fp) Reads num_items items of item_size size from the file pointed to by file pointer fp into memory pointed to by ptr.*/
fptr = fopen("datafile.bin", "rb");
fread(x, sizeof(arr[0]), sizeof(arr)/sizeof(arr[0]), fptr);
fclose(fptr);
for (k = 0; k < 10; k++)
  printf("%d", xi[k]);
/*
- fclose(fp) Closes file opened with file fp, returning 0 if close was successful. EOF is returned if there is an error in closing.

- feof(fp) Returns 0 when the end of the file stream has been reached.
*/

// Controlling the File Pointer
// There are functions in stdio.h for controlling the location of the file pointer in a binary file
typedef struct {
  int id;
  char name[20];
} ite;

ite first, second, secondf;
/* create records */
first.id = 10276;
strcpy(first.name, "Widget");
second.id = 11786;
strcpy(second.name, "Gadget");

/* write records to a file */
fptr = fopen("info.dat", "wb");
fwrite(&first, 1, sizeof(first), fptr);
fwrite(&second, 1, sizeof(second), fptr);
fclose(fptr); /* file contains 2 records of type item */

/*
- ftell(fp) Returns a long int value corresponding to the fp file pointer position in number of bytes from the start of the file.

- fseek(fp, num_bytes, from_pos) Moves the fp file pointer position by num_bytes bytes relative to position from_pos, which can be one of the following constants:
  - SEEK_SET: start of file
  - SEEK_CUR: current position
  - SEEK_END: end of file
  fptr = fopen("info.dat", "rb");
seek second record */
fseek(fptr, 1*sizeof(item), SEEK_SET);
fread(&secondf, 1, sizeof(item), fptr);
printf("%d  %s\n", secondf.id, secondf.name);
fclose(fptr);

// Error Handling
// An exception is any situation that causes your program to stop normal execution. Exception handling, also called error handling, is an approach to processing runtime errors
/*
The exit command immediately stops the execution of a program and sends an exit code back to the calling process
You can return any value through an exit statement, but 0 for success and -1 for failure are typical. The predefined stdlib.h macros EXIT_SUCCESS and EXIT_FAILURE are also commonly used. 
*/
int x = 10;
int y = 0;
if (y != 0)
  printf("x / y = %d", x/y);
else {
  printf("Divisor is 0. Program exiting.");
  exit(EXIT_FAILURE);
} 

// Using Error Codes
/*
Some library functions, such as fopen(), set an error code when they do not execute as expected. The error code is set in a global variable named errno, which is defined in the errno.h header file. When using errno you should set it to 0 before calling a library function.

To output the error code stored in errno, you use fprintf to print to the stderr file stream, the standard error output to the screen. Using stderr is a matter of convention and a good programming practice. 

To use errno, you need to declare it with the statement extern int errno; at the top of your program (or you can include the errno.h header file). 
*/
errno = 0;
  fptr = fopen("c:\\nonexistantfile.txt", "r");
  if (fptr == NULL) {
    fprintf(stderr, "Error opening file. Error code: %d\n", errno);
    exit(EXIT_FAILURE);
  }
fclose(fptr);
// perror and strerror Functions 
/*
When a library function sets errno, a cryptic error number is assigned. For a more descriptive message about the error, you can use perror(). You can also obtain the message using strerror() in the string.h header file, which returns a pointer to the message text.

perror() must include a string that will precede the actual error message. Typically, there is no need for both perror() and strerror() for the same error
*/
fptr = fopen("c:\\nonexistantfile.txt", "r");
if (fptr == NULL) {
  perror("Error");
  fprintf(stderr, "%s\n", strerror(errno));
  exit(EXIT_FAILURE);
} 
for (int x = 0; x < 135; x++)
  fprintf(stderr, "%d: %s\n", x, strerror(x));
// EDOM and ERANGE Error Codes
/*
Some of the mathematical functions in the math.h library set errno to the defined macro value EDOM when a domain is out of range.
Similarly, the ERANGE macro value is used when there is a range error.
*/
float k = -5;
float num = 1000;
float result;

errno = 0;
result = sqrt(k);
if (errno == 0)
  printf("%f ", result);
else if (errno == EDOM)
  fprintf(stderr, "%s\n", strerror(errno)); // Numerical argument out of domain

errno = 0;
result = exp(num);
if (errno == 0)
  printf("%f ", result);
else if (errno == ERANGE)
  fprintf(stderr, "%s\n", strerror(errno)); // Numerical result out of range

// feof and ferror Functions
/*
In addition to checking for a NULL file pointer and using errno, the feof() and ferror() functions can be used for determining file I/O errors:
- feof(fp)  Returns a nonzero value if the end of stream has been reached, 0 otherwise. feof also sets EOF.

- ferror(fp)  Returns a nonzero value if there is an error, 0 for no error.
*/
if (ferror(fptr)) {
  printf("I/O error reading file.");
  exit(EXIT_FAILURE);
}
else if (feof(fptr)) {
  printf("End of file reached.");
}

// Preprocessor Directives
// The C preprocessor uses the # directives to make substitutions in program source code before compilation. 
/*
#include Including header files.

#define, #undef Defining and undefining macros.

#ifdef, #ifndef, #if, #else, #elif, #endif Conditional compilation.

#pragma Implementation and compiler specific.

#error, #warning Output an error or warning message An error halts compilation.
*/
// The #include directive is for including header files in a program. A header file declares a collection of functions and macros for a library, a term that comes from the way the collection of code can be reused. 
/*
stdio input/output functions, including printf and file operations.

stdlib memory management and other utilities

string functions for handling strings

errno errno global variable and error code macros

math common mathematical functions

time time/date utilities
*/
// A user-defined header file is also given the .h extension, but is referred to with quotation marks, as in "myutil.h". When quotation marks are used, the file is searched for in the source code directory.
// #include <stdio.h>
// #include “myutil.h”

// The #define Directive
// The #define directive is used to create object-like macros for constants based on values or expressions. It can also be used to create function-like macros with arguments that will be replaced by the preprocessor, a direct replacement without any calculations
#define PI 3.14
#define AREA(r) (PI*r*r)
float radius = 2;
printf("%3.2f\n", PI); // 3.14
printf("Area is %5.2f\n", AREA(radius)); // 12.56
printf("Area with radius + 1: %5.2f\n", AREA(radius+1)); // Error
#define AREA(r) (PI*(r)*(r)) // Correction
// When using preprocessor directives, the # must be the first character on a line. But there can be any amount of white space before # and between the # and the directive.
// If a # directive is lengthy, you can use the \ continuation character to extend the definition over more than one line.
#define VERY_LONG_CONSTANT \  // Correct
23.678901 // Correct
#define MAX 100 // Correct
#   define MIN 0  // Correct

// Predefined Macro Definitions
// In addition to defining your own macros, there are several standard predefined macros that are always available in a C program without requiring the #define directive
/*
__DATE__  The current date as a string in the format Mm dd yyyy

__TIME__  The current time as a string in the format hh:mm:ss

__FILE__  The current filename as a string

__LINE__ The current line number as an int value
*/

// Conditional Compilation Directives
// The #ifdef, #ifndef, #endif, and #undef directives operate on macros created with #define. 
/*
- #ifdef checks if a macro is defined and executes certain code if that's the case

- #elif, #else act along with any #if directive to declare other possibilities

- #ifndef checks if a macro is not defined and executes certain code if that's the case

- #endif closes the block of code started by other directives

- #undef extracts the value from a macro in case you want to give it another values
*/
// The defined() preprocessor operator can be used with #if
#if !defined(LEVEL)
  /* statements */
#endif

// Preprocessor Operators
/*
The # macro operator is called the stringification or stringizing operator and tells the preprocessor to convert a parameter to a string constant.*/
#define TO_STR(x) #x
;printf("%s\n", TO_STR( 123\\12 )); // 123\12
/*
The ## operator is also called the token pasting operator because it appends, or "pastes", tokens together.*/
#define CONCAT(x, y) x##y
int x = 4;
int y = 5;
int CONCAT(x,y) = x + y;
printf("%d", xy); // 9

    return 0;
}