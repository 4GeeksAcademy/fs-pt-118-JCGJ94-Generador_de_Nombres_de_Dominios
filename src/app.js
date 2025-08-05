import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
};


const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogges', 'racom'];  // he modificado las varriables originales del ejercicio para hacer funcionar los hacks
const domains = ['.com', '.es', '.net', '.us', '.iu'];


// <----básico ----> //
/* pronoun.forEach((p) =>{
  adj.forEach((a) => {
    noun.forEach((n) => {
        console.log(p + a + n + '.com');       
      });
    });
  });
*/

//   agragamos domains--> dominios   //
/* const domainGenerator = () => { 
  pronoun.forEach((p) =>{
    adj.forEach((a) => {
      noun.forEach((n) => {
        domains.forEach(d => {
          console.log(p + a + n + d);       
        });
      });
    });
  });
}
 domainGenerator(); */

//    funcion que recibe 4Arrays, almacenamos en variables los forEach declarando variable aux + push, concatenamos utiliando backticks `${}`  //
const domainGenerator = (randArr1, randArr2, randArr3, randArrDomain) => {
  const allDomains = [];
  randArr1.forEach((i) => {
    randArr2.forEach((j) => {
      randArr3.forEach((k) => {
        randArrDomain.forEach((l) => {
          allDomains.push(`${i}${j}${k}${l}`);

          const hack = generateHacks(k, l);  //creo variable -- pasamos FSecundaria --- alamcenamos aux,asi conectamos fPrincipal con FSecundaria 
          if (hack) {
            allDomains.push(`${i}${j}${hack}`);
          }
        });
      });
    });
  });
  return allDomains.join('\n ')
}

//   funcion que intenta generar un domain hack y retorna la cadena si se cumple la condicion 'ultimos caracteres coinciden' // 
const generateHacks = (randArr3, randArrDomain) => {
  let deletePoint = randArrDomain.slice(1);                 // ".com" --> "com"
  let endcharters = randArr3.slice(-deletePoint.length); // ultimos caracteres del noun
  if (endcharters === deletePoint) {
    let hackBase = randArr3.slice(0, randArr3.length - deletePoint.length);
    return `${hackBase}.${deletePoint}`;
  }
  return null;  //---> la funcion retorna vacio si no es hackeable 
}

console.log(domainGenerator(pronoun, adj, noun, domains))