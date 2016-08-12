/* jshint unused:false */

import Ember from 'ember';
import actividadAlien from 'prueba-releases/actividades/actividadAlien';
import actividadLaEleccionDelMono from 'prueba-releases/actividades/actividadLaEleccionDelMono';
import actividadElMonoYLasBananas from 'prueba-releases/actividades/actividadElMonoYLasBananas';
import actividadTitoEnciendeLuces from 'prueba-releases/actividades/actividadTitoEnciendeLuces';
import actividadFutbolRobots from 'prueba-releases/actividades/actividadFutbolRobots';
import actividadElPlanetaDeNano from 'prueba-releases/actividades/actividadElPlanetaDeNano';
import actividadAlienTocaBoton from 'prueba-releases/actividades/actividadAlienTocaBoton';
import actividadTitoRecargado from 'prueba-releases/actividades/actividadTitoRecargado';
import actividadSuperTito1 from 'prueba-releases/actividades/actividadSuperTito1';
import actividadSuperTito2 from 'prueba-releases/actividades/actividadSuperTito2';
import actividadElRecolectorDeEstrellas from 'prueba-releases/actividades/actividadElRecolectorDeEstrellas';
import actividadLaGranAventuraDelMarEncantado from 'prueba-releases/actividades/actividadLaGranAventuraDelMarEncantado';
import actividadMariaLaComeSandias from 'prueba-releases/actividades/actividadMariaLaComeSandias';
import actividadElMarcianoEnElDesierto from 'prueba-releases/actividades/actividadElMarcianoEnElDesierto';
import actividadAlimentandoALosPeces from 'prueba-releases/actividades/actividadAlimentandoALosPeces';
import actividadInstalandoJuegos from 'prueba-releases/actividades/actividadInstalandoJuegos';
import actividadElGatoEnLaCalle from 'prueba-releases/actividades/actividadElGatoEnLaCalle';
import actividadNoMeCansoDeSaltar from 'prueba-releases/actividades/actividadNoMeCansoDeSaltar';
import actividadReparandoLaNave from 'prueba-releases/actividades/actividadReparandoLaNave';
import actividadElMonoQueSabeContar from 'prueba-releases/actividades/actividadElMonoQueSabeContar';
import actividadTresNaranjas from 'prueba-releases/actividades/actividadTresNaranjas';
import actividadLaberintoCorto from 'prueba-releases/actividades/actividadLaberintoCorto';
import actividadLaberintoLargo from 'prueba-releases/actividades/actividadLaberintoLargo';
import actividadLaberintoConQueso from 'prueba-releases/actividades/actividadLaberintoConQueso';
import actividadElCangrejoAguafiestas from 'prueba-releases/actividades/actividadElCangrejoAguafiestas';
import actividadElDetectiveChaparro from  'prueba-releases/actividades/actividadElDetectiveChaparro';
import actividadPrendiendoLasCompus from 'prueba-releases/actividades/actividadPrendiendoLasCompus';
import actividadPrendiendoLasCompusParametrizado from 'prueba-releases/actividades/actividadPrendiendoLasCompus-conParametros';
import actividadElMonoCuentaDeNuevo from 'prueba-releases/actividades/actividadElMonoCuentaDeNuevo';
import actividadElSuperviaje from 'prueba-releases/actividades/actividadElSuperviaje';
import actividadesDibujandoFiguras from 'prueba-releases/actividades/actividadesDibujandoFiguras';
import actividadSalvandoLaNavidad from 'prueba-releases/actividades/actividadSalvandoLaNavidad';
import actividadTitoCuadrado from 'prueba-releases/actividades/actividadTitoCuadrado';
import actividadLaFiestaDeDracula from 'prueba-releases/actividades/actividadLaFiestaDeDracula';
import actividadPrendiendoLasFogatas from 'prueba-releases/actividades/actividadPrendiendoLasFogatas';

/*
 * Representa un valor mas complejo
 * de un campo de un bloque
 */
var ParamValor = Ember.Object.extend({
   build() {
     var str_block = '';
     str_block += '<value name="NOMBRE">'.replace('NOMBRE', this.get('nombre_param'));

     str_block += '<block type="TIPO">'.replace('TIPO', this.get('tipo_bloque'));

     str_block += '<field name="TIPO">'.replace('TIPO', this.get('nombre_valor'));
     str_block += this.get('valor');
     str_block += '</field>';

     str_block += '</block>';

     str_block += '</value>';

     return str_block;
   }
});


import Actividad from 'prueba-releases/actividades/actividad';


export default Ember.Service.extend({

  obtenerPorNombre(nombre) {

    let actividades = [
      actividadAlien,
      actividadAlienTocaBoton,
      actividadLaEleccionDelMono,
      actividadElMonoYLasBananas,
      actividadTitoEnciendeLuces,
      actividadFutbolRobots,
      actividadElPlanetaDeNano,
      actividadTitoRecargado,
      actividadSuperTito1,
      actividadSuperTito2,
      actividadElRecolectorDeEstrellas,
      actividadMariaLaComeSandias,
      actividadElMarcianoEnElDesierto,
      actividadAlimentandoALosPeces,
      actividadInstalandoJuegos,
      actividadNoMeCansoDeSaltar,
      actividadElGatoEnLaCalle,
      actividadElMonoQueSabeContar,
      actividadReparandoLaNave,
      actividadTresNaranjas,
      actividadLaberintoCorto,
      actividadLaberintoLargo,
      actividadLaberintoConQueso,
      actividadElCangrejoAguafiestas,
      actividadLaGranAventuraDelMarEncantado,
      actividadElDetectiveChaparro,
      actividadPrendiendoLasCompus,
      actividadElMonoCuentaDeNuevo,
      actividadElSuperviaje,
      actividadSalvandoLaNavidad,
      actividadTitoCuadrado,
      actividadLaFiestaDeDracula,
      actividadPrendiendoLasCompusParametrizado,
      actividadPrendiendoLasFogatas
    ];

    actividades = actividades.concat(actividadesDibujandoFiguras);

    var actividad = actividades.findBy('id', nombre);

    if (!actividad) {
      throw new Error(`No se encuentra la actividad de nombre ${nombre}`);
    }

    return Actividad.create({actividad});
  }
});
