# calculator-react

Calculator in-class assignment completed over the course of a weekend.

ACIT 2520 Academic Project

Dependencies: npm install react

===========================================================================

This calculator app computes basic math arithmetic operations (addition, subtraction, divison, multiplication, and percentages).
Float-point and negative values are also integrated.

Excluding the 'Clear' and '=' buttons, each button (when pressed) is concatenated into an empty string which is then evaluated 
using a method from the imported library of mathjs. The inputs are first displayed at the top of the calculator then evaulated via
'=' which calls the App's evaluate function.


Clicking 'Clear' empties the concatenated string's contents (if any) or the calculated sum/product of the inputs.


An 'ERROR' message will display should the calculation of the concatenated string fail to produce mathematical sense.
