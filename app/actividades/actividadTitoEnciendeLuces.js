import bloques from 'prueba-releases/actividades/bloques';
import direcciones from 'prueba-releases/actividades/direccionesCuadricula';
import bloquesTito from 'prueba-releases/actividades/bloquesTito';
var {Repetir, Procedimiento} = bloques;
var {IrDerecha, IrIzquierda, IrArriba, IrAbajo} = direcciones;
var {EncenderLuz} = bloquesTito;


var actividadTitoEnciendeLuces = {
  // DEPRECATED: nombre: 'Tito enciende las luces',
  id: 'TitoEnciendeLuces',
  // DEPRECATED: enunciado: 'Ayudá a Tito a encender todas las luces. \n'+
  //  'Pista: creá un procedimiento para prender todas las luces de una diagonal.',
  // DEPRECATED: consignaInicial: 'Se puede crear un procedimiento una vez y usarlo todas las veces que quieras dentro de un programa.',

  // la escena proviene de ejerciciosPilas
  // DEPRECATED: escena: TitoEnciendeLuces,  // jshint ignore:line
  puedeComentar: false,
  puedeDesactivar: false,
  puedeDuplicar: false,

  bloques: [Procedimiento, Repetir, EncenderLuz,IrDerecha,IrArriba,IrAbajo,IrIzquierda],
};

export default actividadTitoEnciendeLuces;
