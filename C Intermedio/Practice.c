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

typedef struct {
  char make[20];
  int model_year;
  int id_type; /* 0 for id_num, 1 for VIN */
  union {
    int id_num;
    char VIN[20]; 
  } id;
} vehicle;

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
    printf("\nNext part\n");
    printf("You just got a ticket, you must show your id\n");
    vehicle v;
    printf("How would you like to show it?\n1- Id\n2-VIN\n>");
    int option;
    scanf("%d", &option);
    if(option == 1){
        printf("Insert your ID: ");
        int ID;
        scanf("%d", &ID);
        v.id.id_num = ID;
        printf("\nYou inserted %d\n", v.id.id_num);
    }
    else if(option == 2){
        printf("Insert your VIN: ");
        char VIN[20];
        scanf("%s", VIN);
        strcpy(v.id.VIN, VIN);
        printf("\nYou inserted %s\n", v.id.VIN);
    }
    printf("This is the end");
    return 0;
}