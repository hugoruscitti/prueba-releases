import bloques from 'prueba-releases/actividades/bloques';
import {ParaLaDerecha, ParaLaIzquierda, ParaArriba, ParaAbajo, MoverA} from 'prueba-releases/actividades/direccionesCuadricula';
import {Numero, OpAritmetica} from 'prueba-releases/actividades/expresiones';
import {PrenderCompu, EstoyEnEsquina} from 'prueba-releases/actividades/bloquesCompus';

var {Repetir, Si, Sino, Hasta, Procedimiento} = bloques;

export default {
  // DEPRECATED: nombre: 'Prendiendo las compus parametrizado',
  id: 'PrendiendoLasCompusParametrizado',
  // DEPRECATED: enunciado: 'Al igual que antes, debemos prender todas las compus. Pero esta vez tenés que definir un único procedimiento que prenda cualquiera de los lados.',
  // DEPRECATED: consignaInicial: 'Los parámetros pueden ser de texto además de numéricos. Por ejemplo, un parámetro podría ser la dirección en que el autómata debe moverse.',

  // la escena proviene de ejerciciosPilas
  // DEPRECATED: escena: PrendiendoLasCompus,  // jshint ignore:line
  puedeComentar: false,
  puedeDesactivar: false,
  puedeDuplicar: false,

  bloques: [ParaLaDerecha, ParaLaIzquierda, ParaArriba, ParaAbajo, MoverA, Procedimiento,
    Repetir, Si, Sino, Hasta, PrenderCompu, EstoyEnEsquina,
    Numero, OpAritmetica],
};
