import {Repetir, Si, Sino, Hasta, Procedimiento, AccionBuilder} from 'prueba-releases/actividades/bloques';
import {IrArriba, IrAbajo, SiguienteColumna} from 'prueba-releases/actividades/direccionesCuadricula';
import {TocandoBanana, TocandoManzana} from 'prueba-releases/actividades/tocando';
import {ContarBanana, ContarManzana} from 'prueba-releases/actividades/contando';

var LargoColumnaActual = AccionBuilder.buildSensorNumerico({
  id: 'LargoColumnaActual',
  descripcion: 'Largo de la columna actual',
  icono: 'icono.largoCol.png',
  funcionSensor: 'largoColumnaActual()-1',
});

var EstoyAlInicio = AccionBuilder.buildSensor({
  id: 'estoyInicio',
  descripcion: 'Estoy al inicio de la columna',
  icono: 'casillainiciomono.png',
  funcionSensor: 'casillaActual().esInicio()',
});

var EstoyAlFin = AccionBuilder.buildSensor({
  id: 'estoyFinColumna',
  descripcion: 'Estoy al final de la columna',
  icono: 'casillafinalmono.png',
  funcionSensor: 'casillaActual().esFin()',
});

var comunes = [Procedimiento, IrArriba,IrAbajo,SiguienteColumna,ContarBanana,ContarManzana,
  TocandoBanana, TocandoManzana, Repetir, Si, Sino, Hasta, EstoyAlInicio];

export {comunes, EstoyAlFin, LargoColumnaActual};
