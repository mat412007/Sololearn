#include <stdio.h>
#include <stdlib.h>
#include <string.h>

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

    return 0;
}