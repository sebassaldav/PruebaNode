/**
 * Zona de creación de constantes a usar en la construcción de los métodos
 * @var maxlimit representa el valor máximo que puede tomar el número a retornar
 * @var minlimit representa el valor mínimo que puede tmoar el número a retornar 
 */
var maxlimit = 20;
var minlimit = 1;

/**
 * Primer función para retornar un número aleatorio dentro de un rango definido por @maxlimit y @minlimit
 * Con demora de 3 segundos
 * Math.floor() función de node que retorna la parte entera de una operación matemática
 * Math.random() función de node que retorna un número aleatorio entre 0 y 1
 */
function firstNumber()
{
    return new Promise((resolve,reject) =>
    {
        setTimeout(() => 
        {
            resolve(Math.floor(Math.random()*(maxlimit - minlimit) +1));
        }, 3000);
    });
}

/**
 * Segunda función para retornar un número aleatorio dentro de un rango definido por @maxlimit y @minlimit
 * Con demora de 2 segundos
 * Math.floor() función de node que retorna la parte entera de una operación matemática
 * Math.random() función de node que retorna un número aleatorio entre 0 y 1
 */
function secondNumber()
{
    return new Promise((resolve,reject) =>
    {
        setTimeout(() => 
        {
            resolve(Math.floor(Math.random()*(maxlimit - minlimit) +1));
        }, 2000);
    });
}

/**
 * Segunda función para retornar un número aleatorio dentro de un rango definido por @maxlimit y @minlimit
 * Con demora de 1 segundo
 * Math.floor() función de node que retorna la parte entera de una operación matemática
 * Math.random() función de node que retorna un número aleatorio entre 0 y 1
 */
function thirdNumber()
{
    return new Promise((resolve,reject) =>
    {
        setTimeout(() => 
        {
            resolve(Math.floor(Math.random()*(maxlimit - minlimit) +1));
        }, 1000);
    });
}

/**
 * Función de node para hacer llamado de las anteriores funciones desde otra clase
 */
module.exports = 
{
    firstNumber: firstNumber,
    secondNumber: secondNumber,
    thirdNumber: thirdNumber
}