#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

#define MAX_NAME_LENGTH 50
#define FILE_NAME "students_data.dat"
#define TEMP_FILE_NAME "temp.dat"
#define MAX_USERNAME_LENGTH 20
#define MAX_PASSWORD_LENGTH 20
#define DATABASE_FILE "database.dat"

struct student{
    int id;
    char name[MAX_NAME_LENGTH];
    float att;
    float ca;
    float mte;
    float ete;
};

struct user{
    char id[MAX_USERNAME_LENGTH];
    char name[MAX_USERNAME_LENGTH];
    char pass[MAX_PASSWORD_LENGTH];
};

/* pause replacement for getch() */
void pause_screen(){
    printf("\nPress Enter to continue...");
    getchar();
    getchar();
}

int random_id(){
    return rand()%9000 + 1000;
}

void eva(){
    FILE *fp=fopen("evaluation.dat","r");
    char c;

    if(fp==NULL){
        printf("Unable to open file.\n");
        return;
    }

    printf("\nEvaluation Criteria\n\n");

    while((c=fgetc(fp))!=EOF){
        putchar(c);
    }

    fclose(fp);
    pause_screen();
}

void see_detail(char *username){
    FILE *fp=fopen(DATABASE_FILE,"r");
    struct user u;

    if(fp==NULL){
        printf("Failed to open file.\n");
        return;
    }

    while(fscanf(fp,"%s %s %s",u.id,u.name,u.pass)!=EOF){
        if(strcmp(username,u.id)==0){
            printf("\nID: %s\nName: %s\nPassword: %s\n",u.id,u.name,u.pass);
        }
    }

    fclose(fp);
    pause_screen();
}

void create_record(){
    FILE *fp=fopen(FILE_NAME,"a+");
    struct student s;

    if(fp==NULL){
        printf("Failed to open file.\n");
        return;
    }

    s.id=random_id();

    printf("Enter student name: ");
    scanf("%s",s.name);

    printf("Attendance marks: ");
    scanf("%f",&s.att);

    printf("CA marks: ");
    scanf("%f",&s.ca);

    printf("Midterm marks: ");
    scanf("%f",&s.mte);

    printf("Endterm marks: ");
    scanf("%f",&s.ete);

    fprintf(fp,"%d %s %f %f %f %f\n",s.id,s.name,s.att,s.ca,s.mte,s.ete);

    fclose(fp);

    printf("Record created successfully.\n");
    pause_screen();
}

void search_record(){
    FILE *fp=fopen(FILE_NAME,"r");
    struct student s;
    int id;

    if(fp==NULL){
        printf("Failed to open file.\n");
        return;
    }

    printf("Enter id: ");
    scanf("%d",&id);

    while(fscanf(fp,"%d %s %f %f %f %f",&s.id,s.name,&s.att,&s.ca,&s.mte,&s.ete)!=EOF){
        if(s.id==id){
            printf("\nID:%d Name:%s Att:%.2f CA:%.2f MTE:%.2f ETE:%.2f\n",
                   s.id,s.name,s.att,s.ca,s.mte,s.ete);
            fclose(fp);
            pause_screen();
            return;
        }
    }

    printf("Record not found\n");
    fclose(fp);
    pause_screen();
}

void display_record(){
    FILE *fp=fopen(FILE_NAME,"r");
    struct student s;
    float t;
    char *grade;

    if(fp==NULL){
        printf("Error opening file\n");
        return;
    }

    printf("\nID\tName\tAtt\tCA\tMTE\tETE\tGrade\n");

    while(fscanf(fp,"%d %s %f %f %f %f",&s.id,s.name,&s.att,&s.ca,&s.mte,&s.ete)!=EOF){

        t=(s.att+s.ca+s.mte+s.ete)/4;

        if(t>=90) grade="A";
        else if(t>=80) grade="B";
        else if(t>=70) grade="C";
        else if(t>=60) grade="D";
        else grade="F";

        printf("%d\t%s\t%.1f\t%.1f\t%.1f\t%.1f\t%s\n",
               s.id,s.name,s.att,s.ca,s.mte,s.ete,grade);
    }

    fclose(fp);
    pause_screen();
}

void delete_record(){
    FILE *fp=fopen(FILE_NAME,"r");
    FILE *temp=fopen(TEMP_FILE_NAME,"w");

    struct student s;
    int id,found=0;

    printf("Enter id to delete: ");
    scanf("%d",&id);

    while(fscanf(fp,"%d %s %f %f %f %f",&s.id,s.name,&s.att,&s.ca,&s.mte,&s.ete)!=EOF){

        if(s.id==id){
            found=1;
            continue;
        }

        fprintf(temp,"%d %s %f %f %f %f\n",s.id,s.name,s.att,s.ca,s.mte,s.ete);
    }

    fclose(fp);
    fclose(temp);

    remove(FILE_NAME);
    rename(TEMP_FILE_NAME,FILE_NAME);

    if(found) printf("Record deleted\n");
    else printf("Record not found\n");

    pause_screen();
}

void modify_record(){
    FILE *fp=fopen(FILE_NAME,"r");
    FILE *temp=fopen(TEMP_FILE_NAME,"w");

    struct student s;
    int id,found=0;

    printf("Enter id to modify: ");
    scanf("%d",&id);

    while(fscanf(fp,"%d %s %f %f %f %f",&s.id,s.name,&s.att,&s.ca,&s.mte,&s.ete)!=EOF){

        if(s.id==id){

            found=1;

            printf("New attendance: ");
            scanf("%f",&s.att);

            printf("New CA: ");
            scanf("%f",&s.ca);

            printf("New MTE: ");
            scanf("%f",&s.mte);

            printf("New ETE: ");
            scanf("%f",&s.ete);
        }

        fprintf(temp,"%d %s %f %f %f %f\n",s.id,s.name,s.att,s.ca,s.mte,s.ete);
    }

    fclose(fp);
    fclose(temp);

    remove(FILE_NAME);
    rename(TEMP_FILE_NAME,FILE_NAME);

    if(found) printf("Record modified\n");
    else printf("Record not found\n");

    pause_screen();
}

void registerUser(){
    FILE *file=fopen(DATABASE_FILE,"a");

    char name[MAX_USERNAME_LENGTH];
    char pass[MAX_PASSWORD_LENGTH];
    char id[MAX_USERNAME_LENGTH];

    printf("Enter name: ");
    scanf("%s",name);

    printf("Enter password: ");
    scanf("%s",pass);

    sprintf(id,"%d@%s",random_id(),name);

    fprintf(file,"%s %s %s\n",id,name,pass);

    fclose(file);

    printf("Your username: %s\n",id);
    pause_screen();
}

int checkCredentials(char *id,char *pass){

    FILE *file=fopen(DATABASE_FILE,"r");
    struct user u;

    while(fscanf(file,"%s %s %s",u.id,u.name,u.pass)!=EOF){
        if(strcmp(id,u.id)==0 && strcmp(pass,u.pass)==0){
            fclose(file);
            return 1;
        }
    }

    fclose(file);
    return 0;
}

void mainmenu(char name[],char id[]){
    int choice;

    while(1){

        system("clear");

        printf("Welcome %s\n",name);

        printf("1 Create Record\n");
        printf("2 Search Record\n");
        printf("3 Evaluation Criteria\n");
        printf("4 Modify Record\n");
        printf("5 Delete Record\n");
        printf("6 Display Record\n");
        printf("7 Your Details\n");
        printf("8 Logout\n");

        scanf("%d",&choice);

        switch(choice){
            case 1: create_record(); break;
            case 2: search_record(); break;
            case 3: eva(); break;
            case 4: modify_record(); break;
            case 5: delete_record(); break;
            case 6: display_record(); break;
            case 7: see_detail(id); break;
            case 8: return;
        }
    }
}

void login(){
    char id[MAX_USERNAME_LENGTH];
    char pass[MAX_PASSWORD_LENGTH];
    struct user u;

    printf("Enter ID: ");
    scanf("%s",id);

    printf("Enter password: ");
    scanf("%s",pass);

    if(checkCredentials(id,pass)){

        FILE *file=fopen(DATABASE_FILE,"r");

        while(fscanf(file,"%s %s %s",u.id,u.name,u.pass)!=EOF){
            if(strcmp(id,u.id)==0){
                mainmenu(u.name,u.id);
            }
        }

        fclose(file);
    }
    else{
        printf("Invalid login\n");
        pause_screen();
    }
}

int main(){

    srand(time(NULL));

    int choice;

    do{

        system("clear");

        printf("\n*** CA Evaluator System ***\n");
        printf("1 Register\n");
        printf("2 Login\n");
        printf("3 Exit\n");

        scanf("%d",&choice);

        switch(choice){
            case 1: registerUser(); break;
            case 2: login(); break;
        }

    }while(choice!=3);

    return 0;
}