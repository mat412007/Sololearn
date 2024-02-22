#include <stdio.h>
#include <stdlib.h>

void greet(char* name){
    printf("Hello\n");
    printf("How are you? %s", name);
}

int main(int argc, char *argv[]){
    char name[50];
    scanf("%s", name);

    greet(name);
    return 0;
}