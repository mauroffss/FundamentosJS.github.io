const quote = 'I dO nOT lIke gREen eGgS anD HAM';  //Declaración e inicialización de una constante quote con un valor tipo cadena

// Add your code here
let firstLetter = quote.slice(0,1);  //Declaración e inicialización de una variable firstLetter que almacena como valor el recorte o extracción del primer carácter de la variable quote
let lowerQuote = quote.slice(1,quote.length);  //Declaración e inicialización de una variable lowerQuote que almacena como valor el recorte o extracción del segundo carácter de la variable quote hasta donde termina su cadena
lowerQuote = lowerQuote.toLowerCase();  //Actualización de la variable lowerQuote que almacena el valor que ya tiene pero todo convertido a minúsculas
let fixedQuote = firstLetter + lowerQuote;  //Declaración e inicialización de una variable fixiedQuote que almacena como valor la concatenación de las cadenas presentes en las variables firstLetter y lowerQuote
fixedQuote = fixedQuote.replace("green eggs and ham", "onions and beans");  //Actualización de la variable fixedQuote donde se remplaza la oración de la izquierda presente en la cadena con la de la derecha
let finalQuote = fixedQuote + ".";  //Declaración e inicialización de una variable finalQuote que almacena como valor la concatención de fixedQuote y .

// Don't edit the code below here!

const section = document.querySelector('section');  //Selecciona al primer elemento <section> del documento HTML con el método querySelector y lo almacena en la variable section

const para1 = document.createElement('p');  //Crea elemento de párrafo con createElement y lo almacena en la variable para1
para1.textContent = fixedQuote;  //Estabece el contenido de texto del elemento para1 con el valor de fixedQuote
const para2 = document.createElement('p');  //Crea elemento de párrafo con createElement y lo almacena en la variable para2
para2.textContent = finalQuote;  //Estabece el contenido de texto del elemento para2 con el valor de finalQuote

section.appendChild(para1);  //Agrega al elemento para1 como un hijo de section, colocándolo al final de section
section.appendChild(para2);  //Agrega al elemento para2 como un hijo de section, colocándolo al final de section