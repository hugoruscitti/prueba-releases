import {Repetir, Si, Sino, Hasta, Procedimiento} from 'prueba-releases/actividades/bloques';
import {ParaLaDerecha, ParaLaIzquierda,ParaArriba, ParaAbajo, MoverA} from 'prueba-releases/actividades/direccionesCuadricula';
import {EncenderLuz, TocandoLuz} from 'prueba-releases/actividades/bloquesTito';
import {Numero, OpAritmetica} from 'prueba-releases/actividades/expresiones';

export default {
  // DEPRECATED: nombre: 'Tito cuadrado',
  id: 'TitoCuadrado',
  // DEPRECATED: enunciado: 'Tito debe encender todas las luces del cuadrado pero en cada ejecución están distribuidas de una manera diferente. Tené en cuenta que las casillas de la esquina nunca se prenden y que el tamaño del cuadrado no varía de una ejecución a la otra.',

  // DEPRECATED: escena: TitoCuadrado,  // jshint ignore:line
  puedeComentar: false,
  puedeDesactivar: false,
  puedeDuplicar: false,

  bloques: [ParaLaDerecha, ParaLaIzquierda, ParaArriba, ParaAbajo, MoverA,
            Procedimiento, Repetir, Si, Sino, Hasta, TocandoLuz, EncenderLuz,
            Numero, OpAritmetica],
};
