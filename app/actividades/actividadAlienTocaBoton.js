import {Accion} from 'prueba-releases/actividades/bloques';
import direcciones from 'prueba-releases/actividades/direccionesCuadricula';


//import comer from 'prueba-releases/actividades/comer';

var {IrDerecha} = direcciones;

var ApretarBoton = Accion.extend({
  init() {
    this._super();
    this.set('id', 'ApretarBoton');
  },


  block_init(block) {
    this._super(block);
    block.appendDummyInput()
         .appendField(this.obtener_icono('../libs/data/iconos.botonRojo.png'))
         .appendField('Apretar botón');
  },



  nombre_comportamiento() {
    return 'DesencadenarAnimacionSiColisiona';
  },

  argumentos() {
    return '{\'animacionColisionado\':\'prendida\',\'nombreAnimacion\':\'apretar\',\'etiqueta\':\'BotonAnimado\',\'mensajeError\': \'No hay un botón aquí\',\'idTransicion\':\'apretarBoton\'}';

  }
});

var actividadAlienTocaBoton = {
  nombre: 'El alien toca el botón',
  id: 'AlienTocaBoton',
  enunciado: 'Ayudá a nuestro Alien a presionar el botón de su laboratorio. \n'+
  'Pistas: mirá las acciones disponibles. ¡Vas a tener que avanzar varias veces!',

  consignaInicial: 'Los bloques te permiten formar secuencias de acciones para resolver los desafíos que te proponemos en Pilas Bloques.',

  // la escena proviene de ejerciciosPilas
  // DEPRECATED: escena: 'AlienInicial', // jshint ignore:line
  puedeComentar: false,
  puedeDesactivar: false,
  puedeDuplicar: false,

  bloques: [IrDerecha, ApretarBoton],
};

export default actividadAlienTocaBoton;
