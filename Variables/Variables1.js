// Add your code here

let myName;  //Declaración de la variable myName sin inicializarla
myName = "Mauricio";  //Inicialización de la variable myName en una línea separada a su declaración con un valor de tipo cadena
let myAge = 20;   //Declaración e inicialización en una misma línea de la variable myAge con un valor numérico

// Don't edit the code below here!

const section = document.querySelector('section');  //Selecciona al primer elemento <section> del documento HTML con el método querySelector y lo almacena en la variable section

const para1 = document.createElement('p');  //Crea elemento de párrafo con createElement y lo almacena en la variable para1
para1.textContent = myName;  //Establece el contenido de texto del párrafo para1 con el valor de la variable myName
const para2 = document.createElement('p');  //Crea elemento de párrafo con createElement y lo almacena en la variable para2
para2.textContent = myAge;  //Establece el contenido de texto del párrafo para2 con el valor de la variable myAge
section.appendChild(para1);  //Agrega al elemento para1 como un hijo de section, colocándolo al final de section
section.appendChild(para2);  //Agrega al elemento para2 como un hijo de section, colocándolo al final de section
