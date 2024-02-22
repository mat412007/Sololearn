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
    return 0;
}