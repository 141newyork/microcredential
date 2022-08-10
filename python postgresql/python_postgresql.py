"""
Python and Postgresql Exercies
Student's Name: Khanh Huang
"""
print("3a/ write a python program collects items from user")
print("---------- ACTIVITY a ---------")
fruitList = []
numOffruit = int(input("Enter the number of fruits:"))
for x in range (1,numOffruit+1):
    fruitList.append(input('Fruit %d:' %x))
print(fruitList)

print("---------- ACTIVITY b ---------")
num1=int(input("enter num1: "))
num2=int(input("enter num2: "))
if num1 == num2:
    num2=int(input("please reenter num2: "))
elif num1 < num2:
    while num1 < num2:
      print(num1)
      num1 += 1
elif num1 > num2:
     while num1 > num2:
      print(num2)
      num2 += 1

print("---------- ACTIVITY c ---------")
import math
r = int(input("please enter radius:"))
h = int(input("please enter height:"))
def volumeCylinder(h,r):
    result = r*r*math.pi*h
    return print("The Volume with radius: ",r,"and height: ",h,"is: ",round(result,2))

volumeCylinder(h,r)

import random
print("---------- ACTIVITY d ---------")
rollnum = int(input("How many times do you want to roll?"))
for i in range(rollnum):
    print("Roll",1+i,"= ",random.randint(1,6))
