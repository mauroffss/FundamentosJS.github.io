// Statement 1: The elephant weighs less than the mouse
const eleWeight = 1000;  //Declaración e inicialización de una constante eleWeight con un valor numérico de 1000
const mouseWeight = 2;  //Declaración e inicialización de una constante mouseWeight con un valor numérico de 2

// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;  //Declaración e inicialización de una constante ostrichHeight con un valor numérico de 2
const duckHeight = 0.3;  //Declaración e inicialización de una constante duckHeight con un valor numérico de 0.3

// Statement 3: The two passwords match
const pwd1 = 'stromboli';  //Declaración e inicialización de una constante pwd1 con un valor tipo cadena
const pwd2 = 'stROmBoLi';  //Declaración e inicialización de una constante pwd2 con un valor tipo cadena

// Add your code here
let weightComparison = eleWeight < mouseWeight;  //Declaración e inicialización de una variable weightComparison que almacena un valor de True o False a partir de la comparación hecha a través del operador menor que
let heightComparison = ostrichHeight > duckHeight;  //Declaración e inicialización de una variable heightComparison que almacena un valor de True o False a partir de la comparación hecha a través del operador mayor que
let pwdMatch = pwd1 === pwd2;  //Declaración e inicialización de una variable pwdMatch que almacena un valor de True o False a partir de la comparación hecha a través del operador de igualdad estricta

// Don't edit the code below here!

const section = document.querySelector('section');  //Selecciona al primer elemento <section> del documento HTML con el método querySelector y lo almacena en la variable section

const para1 = document.createElement('p');  //Crea elemento de párrafo con createElement y lo almacena en la variable para1
const para2 = document.createElement('p');  //Crea elemento de párrafo con createElement y lo almacena en la variable para2
const para3 = document.createElement('p');  //Crea elemento de párrafo con createElement y lo almacena en la variable para3

const weightTest = weightComparison ? 'True — elephants do weigh less than mice!?' : 'False — of course an elephant is heavier than a mouse!';  //Asigna a wightTest un mensaje diferente dependiendo del valor de wightComparison, ya sea si es True o False
const heightTest = heightComparison ? 'True — an ostrich is indeed taller than a duck!' : 'False — apparently a duck is taller than an ostrich!?';  //Asigna a heightTest un mensaje diferente dependiendo del valor de heightComparison, ya sea si es True o False
const pwdTest = pwdMatch ? 'True — the passwords match.' : 'False — the passwords do not match; please check them';  //Asigna a pwdTest un mensaje diferente dependiendo del valor de pwdMatch, ya sea si es True o False

para1.textContent = weightTest;  //Estabece el contenido de texto del elemento para1 con el valor de weightTest
section.appendChild(para1);  //Agrega al elemento para1 como un hijo de section, colocándolo al final de section
para2.textContent = heightTest;  //Estabece el contenido de texto del elemento para2 con el valor de heightTest
section.appendChild(para2);  //Agrega al elemento para2 como un hijo de section, colocándolo al final de section
para3.textContent = pwdTest;  //Estabece el contenido de texto del elemento para3 con el valor de pwdTest
section.appendChild(para3);  //Agrega al elemento para3 como un hijo de section, colocándolo al final de section