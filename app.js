const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        //console.log('listar');
        listarTabla(argv.base, argv.limite)
            .then(`Impresión finalizada con base ${argv.base} y limite ${argv.limite}`)
            .catch(e => console.log(e));

        break;
    case 'crear':
        //console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

//console.log(argv);


//let base = '5';


//console.log(process.argv);

//let argv2 = process.argv;

//console.log(`La base es ${ argv.base } y el limite es ${ argv.limite }`);
//console.log(argv2);

//let parametro = argv[2];
//let base = parametro.split('=')[1]
//console.log(base);