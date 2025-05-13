#include<stdio.h>
#define pa printf("+++++++++++++++++++++++++\n");
void main(){

    float Id;
    char name[50];
    float Price;
    float Sale;
    pa
    printf("Program price Sale \n");
    pa
    printf("Product ID : ");
    scanf("%f",&Id);
    printf("Product Name : ");
    scanf("%s",&name);
    printf("Product Price : ");
    scanf("%f",&Price);
    Sale = (Price * 0.025)* 0.7;
    pa
    printf("Product Sale :%f \n",Sale);
    pa


}