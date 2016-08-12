import bloques from 'prueba-releases/actividades/bloques';
import direcciones from 'prueba-releases/actividades/direccionesCuadricula';
import comer from 'prueba-releases/actividades/comer';
import tocando from 'prueba-releases/actividades/tocando';

var {Repetir,Si,Sino,Procedimiento} = bloques;
var {IrDerecha} = direcciones;
var {ComerNaranja} = comer;
var {TocandoNaranja} = tocando;
var actividadTresNaranjas = {
  // DEPRECATED: nombre: 'Tres naranjas',
  id: 'TresNaranjas',
  // DEPRECATED: enunciado: 'El alien debe comer todos los gajos de naranja que aparezcan en las casillas violetas. ¡Pero no siempre aparecen en los mismos lugares ni la misma cantidad de naranjas! Pista: pensá primero cómo harías un procedimiento para comer una sola naranja si es que la hay.',

  // DEPRECATED: escena: TresNaranjas,
  puedeComentar: false,
  puedeDesactivar: false,
  puedeDuplicar: false,

  bloques: [Procedimiento, IrDerecha,ComerNaranja, Repetir,Si,Sino, TocandoNaranja]
};
export default actividadTresNaranjas;
