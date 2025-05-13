#include<stdio.h>
#define pa printf("+++++++++++++++++++++++++\n");
void main(){

    int celcius;
    int Farenheit;
    pa
    printf("Program Celcius to Farenheit\n");
    pa
    printf("Enter celcius temperature :");
    scanf("%d",&celcius);
    pa
    Farenheit = (celcius-32) * 5 / 9;
    printf("Farenheit is :%d",Farenheit);
}