// Add your code here

let myName = 'Default';  //Declaración e inicialización de la variable myName con el valor "Default" de tipo cadena
myName = 'Chris';  //Actualización del valor de la variable myName

let myAge = 42;  //Declaración e inicialización de la variable myAge con valor de tipo numérico

// Don't edit the code below here!

const section = document.querySelector('section');  //Selecciona al primer elemento <section> del documento HTML con el método querySelector y lo almacena en la variable section

const para1 = document.createElement('p');  //Crea elemento de párrafo con createElement y lo almacena en la variable para1
const para2 = document.createElement('p');  //Crea elemento de párrafo con createElement y lo almacena en la variable para2
para1.textContent = myName;  //Establece el contenido de texto del párrafo para1 con el valor de la variable myName
para2.textContent = `In 20 years, I will be ${myAge + 20}`;  //Estabece el contenido de texto del elemento para 2 con una plantilla template string para incrustrar una expresión, concatena la cadena con el valor de la variable myAge sumando 20
section.appendChild(para1);  //Agrega al elemento para1 como un hijo de section, colocándolo al final de section
section.appendChild(para2);  //Agrega al elemento para2 como un hijo de section, colocándolo al final de section