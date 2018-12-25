import SimpleCalculator  from './classes/simple_calc.js';
import IngCalculator  from './classes/ing_calс.js';

function CalcFactory(){
};
CalcFactory.prototype = {

    makeSimple: function (container) {
         return new SimpleCalculator(container);
    },
    makeIngenering: function (container) {
         return new IngCalculator(container);
    },
		constructor: CalcFactory
};
var CalcFactory = new CalcFactory();

export default CalcFactory;
