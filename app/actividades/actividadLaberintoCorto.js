import bloques from 'prueba-releases/actividades/bloques';
import direcciones from 'prueba-releases/actividades/direccionesCuadricula';
import tocando from 'prueba-releases/actividades/tocando';
var {Repetir,Si,Sino,Procedimiento} = bloques;
var {IrDerecha,IrAbajo} = direcciones;
var {TocandoAbajo,TocandoDerecha} = tocando;

var actividadLaberintoCorto = {
  //DEPRECATED: nombre: 'Laberinto corto',
  id: 'LaberintoCorto',
  // DEPRECATED: enunciado: 'Guiá al ratón para llegar a la meta. Para lograrlo, debe avanzar una casilla en la dirección que indica la flecha. Pista: mirá en la categoría "Sensores" qué preguntas podés hacer.',

  // la escena proviene de ejerciciosPilas
  // DEPRECATED: escena: LaberintoCorto, // jshint ignore:line
  puedeComentar: false,
  puedeDesactivar: false,
  puedeDuplicar: false,

  bloques: [Procedimiento, Repetir,Si,Sino, IrDerecha,IrAbajo, TocandoAbajo,TocandoDerecha],
};

export default actividadLaberintoCorto;
