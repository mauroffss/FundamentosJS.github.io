const quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';  //Declaración e inicialización de una constante quote con un valor tipo cadena
const substring = 'green eggs and ham';  //Declaración e inicialización de una constante substring con un valor tipo cadena

// Add your code here
let quoteLength = quote.length;  //Declaración e inicialización de una variable quoteLenght que almacena como valor numérico la longitud de la cadena quote
let index = quote.indexOf(substring);  //Declaración e inicialización de una variable index que almacena como valor la posición del carácter donde empieza substring dentro de quote
let revisedQuote = quote.slice(0,index) + substring + ".";  //Declaración e inicialización de una variable revisedQuote que almacena como valor la concatenación de 3 cadenas, la primera viene del corte de quote desde el carácter 0 (el primero) hasta index (una posición previa a donde inicia el substring dentro del string principal), la cadena substring y un punto

// Don't edit the code below here!

const section = document.querySelector('section');  //Selecciona al primer elemento <section> del documento HTML con el método querySelector y lo almacena en la variable section

section.innerHTML = ' ';  //Establece al contenido HTML del elemento section como una cadena vacía, eliminando a todos los elementos hijos y contenido dentro de este
const para1 = document.createElement('p');  //Crea elemento de párrafo con createElement y lo almacena en la variable para1
para1.textContent = `The quote is ${ quoteLength } characters long.`;  //Estabece el contenido de texto del elemento para1 con una plantilla template string para incrustrar una expresión, concatena la cadena con el valor de la variable quoteLength calculado anteriormente
const para2 = document.createElement('p');  //Crea elemento de párrafo con createElement y lo almacena en la variable para2
para2.textContent = revisedQuote;  //Estabece el contenido de texto del elemento para2 con el valor de revisedQuote

section.appendChild(para1);  //Agrega al elemento para1 como un hijo de section, colocándolo al final de section
section.appendChild(para2);  //Agrega al elemento para2 como un hijo de section, colocándolo al final de section