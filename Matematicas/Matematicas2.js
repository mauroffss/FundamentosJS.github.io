// Final result should be 4633.33
// Add/update your code here

let result = 7 + 13 / 9 + 7;  //Declaración de la variable result e inicializado su valor a partir de operaciones de suma y división de números 
let result2 = 100 / 2 * 6;  //Declaración de la variable result2 e inicializado su valor a partir de operaciones de multiplicación y división de números 
result *= result2;  //Atajo para realizar la operación result = result*result2


let finalResult = result.toFixed(2);  //Declaración e inicialización de la variable finalResult con el valor de result ajustado a solo dos decimales
typeof finalResult;  //Se verifica el tipo de dato de finalResult

let finalNumber = Number(finalResult);  //Declaración e inicialización de la variable finalNumber a la cual se le asigna el valor de finalResult convertido a tipo de dato numérico

// Don't edit the code below here!

const section = document.querySelector('section');  //Selecciona al primer elemento <section> del documento HTML con el método querySelector y lo almacena en la variable section

const para1 = document.createElement('p');  //Crea elemento de párrafo con createElement y lo almacena en la variable para1
para1.textContent = `Your finalResult is ${ finalResult }`;  //Estabece el contenido de texto del elemento para1 con una plantilla template string para incrustrar una expresión, concatena la cadena con el valor de la variable finalResult 
const para2 = document.createElement('p');  //Crea elemento de párrafo con createElement y lo almacena en la variable para2
const finalNumberCheck = isNaN(finalNumber) === false ? 'finalNumber is a number type. Well done!' : `Ooops! finalNumber is not a number.`;  //Verifica si finalNumber no es un número, si no es así asigna el string de "Ooops! finalNumber is not a number" a la variable finalNumberCheck, de lo contrario asigna otra respuesta
para2.textContent = finalNumberCheck;  //Estabece el contenido de texto del elemento para2 con el valor de finalNumberCheck

section.appendChild(para1);  //Agrega al elemento para1 como un hijo de section, colocándolo al final de section
section.appendChild(para2);  //Agrega al elemento para2 como un hijo de section, colocándolo al final de section