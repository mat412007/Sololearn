#include <stdio.h>
#include <stdlib.h>

void greet(char* name, int age){
    printf("Hello\n");
    printf("You are %s and you have %d years old\n", name, age);
}

int main(int argc, char *argv[]){
    char name[50];
    int age;
    printf("What's your name?\n> ");
    scanf("%s", name);
    printf("\nHow old are you?\n> ");
    scanf("%d", &age);
    greet(name, age);
    printf("\n");
    if(age <= 13){
        printf("Oh, you are younger that I thought\n");
    }
    else if(age >= 50){
        printf("Oh, you are a bit old to do this\n");
    }
    else if(age > 13 && age < 20){
        printf("You joined in just in time\n");
    }
    printf("\n");
    printf("Do you have any experience in this subject? (None, Some, Much)\n> ");
    char experience[30];
    scanf("%s", experience);
    printf("\n");
    printf("The 1 numeric table is: ");
    for(int i = 1; i <= 10; i++){
        printf("%d ", i);
    }
    printf("\n\n");
    int x = 5;
    int y = 10;
    int *px = &x;
    int *py = &y;
    printf("%d\n", *px); // 5
    printf("%p\n", px); // address
    sum(px, py, x, y);
    printf("%d %d", x, y);
    return 0;
}

void sum(int *x, int *y, int a, int b){
    *x = b;
    *y = a;
}