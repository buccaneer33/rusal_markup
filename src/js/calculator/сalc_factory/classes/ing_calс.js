import SimpleCalculator  from './simple_calc.js';

class IngCalculator extends SimpleCalculator{

 getOperand(calcOp) {
   let  getOperandChar = require('../../helpers/get_operand');
   let result;

    switch (calcOp) {
     case "plus":  		  result = getOperandChar.plus;  break;		 case "minus":	 result = getOperandChar.minus; break;
     case "times": 		  result = getOperandChar.times; break;		 case "divide": result = getOperandChar.divide; break;
     case "opReverse": result = getOperandChar.sqrt; break;		  case "pow2":   result = getOperandChar.pow2; break;
     case "powten":    result = getOperandChar.powten; break; 	case "pow3":   result = getOperandChar.pow3; break;
     case "root3":     result = getOperandChar.root3;	break; 	 case "powY":   result = getOperandChar.powY; break;
     case "factorial": result = getOperandChar.fact; break; 	 	case "sqrt":   result = getOperandChar.sqrt; break;
     case "cos":       result = getOperandChar.cos; break; 	  	case "sin":    result = getOperandChar.sin; break;
     case "log":       result = getOperandChar.log; break; 		  case "ln":     result = getOperandChar.ln; break;
    }
  return result;
 };
 getCalculate(calcOper, oldNum, currNum, proc) {
   var  utils = require('../../helpers/utils');
   let result;

    switch (calcOper) {
     case "plus":      result = utils.sum(oldNum, currNum, proc); break;    case "minus":  result = utils.minus(oldNum, currNum, proc); break;
					case "times":     result = utils.times(oldNum, currNum, proc); break;  case "divide": result = utils.divide(oldNum, currNum, proc); break;
					case "opReverse": result = utils.sqrt(oldNum); break; 	                case "pow2":   result = utils.pow2(oldNum); break;
					case "powten":    result = utils.powten(oldNum); break;                case "pow3":   result = utils.pow3(oldNum); break;
					case "root3":     result = utils.root3(oldNum);	break; 	               case "powY":   result = utils.powY(oldNum, currNum); break;
					case "factorial": result = utils.factorial(oldNum); break;             case "sqrt":   result = utils.sqrt(oldNum); break;
					case "cos":       result = utils.cos(oldNum); break; 	                 case "sin":    result = utils.sin(oldNum); break;
					case "log":       result = utils.log(oldNum); break;                   case "ln":     result = utils.ln(oldNum); break;

     default:  		 result = currNum;
    };
  return result;
 };
};
export default IngCalculator;
