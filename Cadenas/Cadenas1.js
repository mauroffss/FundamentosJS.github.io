// Add your code here

const quoteStart = "Don't judge each day by the harvest you reap, ";  //Declaración e inicialización de una constante quoteStart con un valor tipo cadena
let quoteEnd = "but by the seeds that you plant.";  //Declaración e inicialización de una variable quoteEnd con un valor tipo cadena
let finalQuote = quoteStart + quoteEnd;  //Declaración e inicialización de una variable finalQuote que obtiene su valor de concatenar las cadenas presentes en las variables quoteStart y quoteEnd


// Don't edit the code below here!

const section = document.querySelector('section');  //Selecciona al primer elemento <section> del documento HTML con el método querySelector y lo almacena en la variable section
const para1 = document.createElement('p');  //Crea elemento de párrafo con createElement y lo almacena en la variable para1
para1.textContent = finalQuote;  //Estabece el contenido de texto del elemento para1 con el valor de finalQuote

section.appendChild(para1);  //Agrega al elemento para1 como un hijo de section, colocándolo al final de section
