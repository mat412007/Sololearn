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

// A function can have union parameters that accept arguments by value when a copy of the union variable is all that is needed. 
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


    return 0;
}