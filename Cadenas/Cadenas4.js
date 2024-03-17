const theorem = 'Pythagorean theorem';  //Declaración e inicialización de una constante theorem con un valor tipo cadena

const a = 5;  //Declaración e inicialización de una constante a con un valor tipo numérico
const b = 8;  //Declaración e inicialización de una constante b con un valor tipo numérico

const myString = `Using ${theorem}, we can work out that that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${Math.sqrt(a**2 + b**2).toFixed(2)}.`;
//Declaración e inicialización de una constante myString que estabece el contenido de texto como una plantilla template string para incrustrar varias expresiones, concatena la cadena con el valor de las variables theorem, a, b y un cálculo de la hipotenusa dentro del placeholder resondeado a dos decimales

// Don't edit the code below here!

const section = document.querySelector('section');  //Selecciona al primer elemento <section> del documento HTML con el método querySelector y lo almacena en la variable section

const para1 = document.createElement('p');  //Crea elemento de párrafo con createElement y lo almacena en la variable para1
para1.textContent = myString;  //Estabece el contenido de texto del elemento para1 con el valor de myString
section.appendChild(para1);  //Agrega al elemento para1 como un hijo de section, colocándolo al final de section