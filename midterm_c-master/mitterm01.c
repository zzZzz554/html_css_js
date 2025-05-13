#include<stdio.h>
#define pa printf("+++++++++++++++++++++++++\n");
void main(){

    float r1;
    float r2;
    float r3;
    float rSum;
    pa
    printf("Program Resistance\n");
    pa
    printf("Enter Resistance 1 :");
    scanf("%f",&r1);
    printf("Enter Resistance 2 :");
    scanf("%f",&r2);
    printf("Enter Resistance 3 :");
    scanf("%f",&r3);
    pa
    rSum = r1*r2*r3/((r1*r2)+(r2*r3)+(r1*r3));
    printf("Sum Resistance : %.3f \n",rSum);
    pa

}