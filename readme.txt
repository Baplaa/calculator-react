Author: Tristan Lingat A01270360
Date: January 29, 2022

==================================================================================================================================
ACIT 2520 Assignment 1 Task 2: Calculator App
==================================================================================================================================

This calculator app computes basic math arithmetic operations (addition, subtraction, divison, multiplication, and percentages).
Float-point and negative values are also integrated.

Excluding the 'Clear' and '=' buttons, each button (when pressed) is concatenated into an empty string which is then evaluated 
using a method from the imported library of mathjs. The inputs are first displayed at the top of the calculator then evaulated via
'=' which calls the App's evaluate function.


Clicking 'Clear' empties the concatenated string's contents (if any) or the calculated sum/product of the inputs.


An 'ERROR' message will display should the calculation of the concatenated string fail to produce mathematical sense.