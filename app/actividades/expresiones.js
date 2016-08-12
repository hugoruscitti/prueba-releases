import Bloque from 'prueba-releases/actividades/bloque';
import {Operadores, Valores} from 'prueba-releases/actividades/categorias';


var ExpresionDeBlockly = Bloque.extend({

  _categoria: Operadores,

  registrar_en_blockly() {
    // pisado porque ya viene con blockly
    // ni tampoco quiero modificar el javascript
  }

});

var Texto = ExpresionDeBlockly.extend({

  _categoria: Valores,

  init() {
    this._super();
    this.set('id', 'text');
  },
});

var Numero = ExpresionDeBlockly.extend({

  _categoria: Valores,

  init() {
    this._super();
    this.set('id', 'math_number');
  },
});

var OpAritmetica = ExpresionDeBlockly.extend({
  init() {
    this._super();
    this.set('id', 'math_arithmetic');
  },
});

var Booleano = ExpresionDeBlockly.extend({
  _categoria: Valores,
  init() {
    this._super();
    this.set('id', 'logic_boolean');
  },
});

var OpComparacion = ExpresionDeBlockly.extend({
  init() {
    this._super();
    this.set('id', 'logic_compare');
  },
});

var OpLogica = ExpresionDeBlockly.extend({
  init() {
    this._super();
    this.set('id', 'logic_operation');
  },
});

var OpNegacion = ExpresionDeBlockly.extend({
  init() {
    this._super();
    this.set('id', 'logic_negate');
  },
});

export {
  ExpresionDeBlockly, Numero, OpAritmetica, Booleano,
  OpComparacion, OpLogica, OpNegacion, Texto
};
