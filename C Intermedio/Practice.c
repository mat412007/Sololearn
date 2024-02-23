#include <stdio.h>
#include <string.h>

struct student{
    char name[50];
    int id;
};

void fill(struct student *item){
        printf("Tell me the name of the student: ");
        scanf("%s", item->name);
        printf("And the id: ");
        scanf("%d", &item->id);
        printf("\n");
}

void print(struct student item){
    printf("-----------------------------\n");
    printf("Name: %s\n", item.name);
    printf("ID: %d\n", item.id);
}

int main(){
    struct student students[3];
    int size = sizeof(students) / sizeof(students[0]);
    printf("Size: %d\n", size);
    for(int i = 0; i < size; i++){
        fill(&students[i]);
    }
    printf("\n");
    for(int i = 0; i < size; i++){
        print(students[i]);
    }
    printf("\nThis is the end");
    return 0;
}