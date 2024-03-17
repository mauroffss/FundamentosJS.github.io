let finalResult;  //Declaración de la variable finalResult

let evenOddResult;  //Declaración de la variable evenOddResult

// Add your code here
let num1 = 8;  //Declaración e inicialización de una variable num1 con valor de tipo numérico
let num2 = 8;  //Declaración e inicialización de una variable num2 con valor de tipo numérico
let num3 = 4;  //Declaración e inicialización de una variable num3 con valor de tipo numérico
let num4 = 1;  //Declaración e inicialización de una variable num4 con valor de tipo numérico

let suma = num1 + num2;  //Declaración e inicialización de una variable suma con valor de tipo numérico que surge de la adición de los valores que contienen las variables num1 y num2
let resta = num3 - num4;  //Declaración e inicialización de una variable resta con valor de tipo numérico que surge de la sustracción del valor de num4 a num3

finalResult = suma*resta;  //Inicialización de la variable finalResult a través de la multiplicación de los valores que contienen las variables suma y resta

evenOddResult = finalResult%2;  //Inicialización de la variable evenOddResult a través de la operación de módulo con el valor de la variable finalResult

// Don't edit the code below here!

const section = document.querySelector('section');  //Selecciona al primer elemento <section> del documento HTML con el método querySelector y lo almacena en la variable section

const para1 = document.createElement('p');  //Crea elemento de párrafo con createElement y lo almacena en la variable para1
const finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;  //Verifica si finalResult es igual a 48, si es así asigna el string de "Yes, well done" a la variable finalResultCheck, de lo contrario asigna otra respuesta indicando el valor que tiene
para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;  //Estabece el contenido de texto del elemento para1 con una plantilla template string para incrustrar una expresión, concatena la cadena con el valor de la variable finalResultCheck calculado anteriormente
const para2 = document.createElement('p');  //Crea elemento de párrafo con createElement y lo almacena en la variable para2
const evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.';  //Verifica si evenOddResult es igual a 0, si es así asigna el string de "The final result is even!" a la variable evenOddResultCheck, de lo contrario asigna otra respuesta
para2.textContent = evenOddResultCheck;  //Estabece el contenido de texto del elemento para2 con el valor de evenOddResultCheck

section.appendChild(para1);  //Agrega al elemento para1 como un hijo de section, colocándolo al final de section
section.appendChild(para2);  //Agrega al elemento para2 como un hijo de section, colocándolo al final de section
