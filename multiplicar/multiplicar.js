//require

const fs = require('fs');
const colors = require('colors');

//El limite es igual a 10 como valor por default

let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido en la base ${base} no es númerico.`);
        }

        if (!Number(limite)) {
            reject(`El valor introducido en el limite ${limite} no es númerico`);
        }


        console.log('============');
        console.log(`===tabla de ${base}=====`.black);
        console.log('============');

        for (let i = 1; i <= limite; i++) {
            console.log(`${base}x${i}= ${base*i}`);
        }


    })

}


//El limite es igual a 10 como valor por default


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número.`);
            return
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            //console.log(i + 'x' + base + '=' + (i * base));
            data += `${base}x${i}: ${base*i}\n`;
        }



        fs.writeFile(`Tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}