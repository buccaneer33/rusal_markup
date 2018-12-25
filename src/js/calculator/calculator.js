"use strict";
/*import CalcFactory  from './calc_factory/calc_factory.js';*/
import CalcFactory  from './сalc_factory/calc_class.js';
import changeTheme  from './view/ch_theme.js';
import changeMode  from './view/ch_mode.js';
import switchCalcHistBlock from './view/switch_calc_history.js';
import showHistory from './helpers/show_history.js';

function CalcInit(container){

CalcFactory.makeIngenering(container);
new changeTheme(container);
new changeMode(container);
new switchCalcHistBlock(container);
new showHistory(container);
};
export default CalcInit;
