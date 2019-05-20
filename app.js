/**
 * Zona de creación de variables
 * @let prom1 crea una instancia de la clase promises.js para hacer uso de sus métodos
 * @var response es un arreglo de números donde se almacenan los números obtenidos por los métodos de la clase promises.js
 * @var maxtime es una variable que da el tiempo máximo de ejecución del método addNumbers
 * @var mintime es una variable que da el tiempo mínimo de ejecución del método addNumbers
 */
let prom1 = require('./promises');
var response = [];
var maxtime = 3;
var mintime = 1;

/**
 * @param {array} numberArray es el arreglo donde están almacenados los números aleatorios a sumar en el método
 * Math.floor() función de node que retorna la parte entera de una operación matemática
 * Math.random() función de node que retorna un número aleatorio entre 0 y 1 
 */
async function addNumbers (numberArray)
{
    await 
    setTimeout(() =>
    {
        var add = 0;
        numberArray.forEach(function(number) {
            add = add + number;
        });
        console.log(add);
    },Math.floor(Math.random()*(maxtime - mintime)+1));
}

/**
 * 
 */
async function synchronyzed () 
{
    response[0] = await prom1.firstNumber();
    console.log(response);
    response[1] = await prom1.secondNumber();
    console.log(response);
    response[2] = await prom1.thirdNumber();
    console.log(response);
    await addNumbers(response);
}

synchronyzed();
