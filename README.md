# Wenwen's Calculator

This is a simple practice of web desigh.  
The calculator can only do operations between two numbers.  
  
The first (incomplete) practice is [here](https://lidemy.github.io/mentor-program-Amelie1815/homeworks/week4/hw1/).  

### Purpose

* Practicing HTML, CSS and Sass

* Manipulating DOM Elements with JavaScript

### Features

* Changeable themes

* Operations between 2 numbers

* Result in 9 digits
  
If the result has more than 9 digits before the decimal point, it shows "error".
  
If the result has more than 9 digits after the decimal point, the `toFixed()` method will be used.  
For example,  

```js
0.3333333333333333333333333333333333
```
It has 1 digit before the decimal point, so it will be applied `toFixed(8)`.  
The result will be `0.33333333`.

```js
1234567.8987654321
```
It has 7 digits before the decimal point, so it will be applied `toFixed(2)`.  
The result will be `1234567.89`.

There are some operations showing weird results because of the JavaScript language. Such as  

```js
0.3 * 3
// 0.90000000

0.3 * 6
// 1.80000000

0.3 * 9
// 2.70000000

0.2 + 0.1
// 0.30000000
```

It has something to do with floating point arithmetic (or floating point arithmetic).

[JavaScript Numbers](https://www.w3schools.com/js/js_numbers.asp)   
[Some discussion about this](https://stackoverflow.com/questions/1458633/how-to-deal-with-floating-point-number-precision-in-javascript)
