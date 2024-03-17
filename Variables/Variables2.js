// Add your code here

let myName = 'Paul';  //Declaración e inicialización de una variable myName con el valor de "Paul" de tipo cadena
myName = "Mauro";  //Actualzición de la variable antes declarada por un valor nuevo al cual se otorgo en primera instancia

// Don't edit the code below here!

const section = document.querySelector('section');  //Selecciona al primer elemento <section> del documento HTML con el método querySelector y lo almacena en la variable section

const para = document.createElement('p');  //Crea elemento de párrafo con createElement y lo almacena en la variable para
para.textContent = myName;  //Establece el contenido de texto del párrafo para con el valor de la variable myName
section.appendChild(para);  //Agrega al elemento para como un hijo de section, colocándolo al final de section