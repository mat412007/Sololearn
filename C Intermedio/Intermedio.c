#include <stdio.h>
#include <stdlib.h>
#include <string.h>

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



    return 0;
}