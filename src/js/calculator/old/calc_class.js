class SimpleCalculator {

/****/
  getOperand(calcOp) {
    let  getOperandChar = require('../helpers/get_operand');
    let result;

     switch (calcOp) {
      case "plus":   result = getOperandChar.plus; break;
      case "minus":	 result = getOperandChar.minus; break;
      case "times":  result = getOperandChar.times; break;
      case "divide": result = getOperandChar.divide; break;
      case "pow2":   result = getOperandChar.pow2; break;
      default:    	 result = '&nbsp';
     }
   return result;
  };
  /****/
  getCalculate(calcOper, oldNum, currNum, proc) {
    let  utils = require('../helpers/utils');
    let result;

     switch (calcOper) {
   				case "plus":   result = utils.sum(oldNum, currNum, proc); break;
   				case "minus":  result = utils.minus(oldNum, currNum, proc); break;
   				case "times":  result = utils.times(oldNum, currNum, proc); break;
   				case "divide": result = utils.divide(oldNum, currNum, proc); break;
   				case "pow2":   result = utils.pow2(oldNum); break;
  					/* если = был нажат без оператора, сохраняем число и гоним дальше */
  				default:  		 result = currNum;
  			};
   return result;
  };
  /****/

    /****/

      /****/

        /****/

          /****/

  constructor(containerId) {
    /*подключаем историю*/
		let  calcHistory = require('../helpers/calc_history');
  let  getOperandChar = require('../helpers/get_operand');
  let  utils = require('../helpers/utils');

    /*объявляем переменные*/
    var opChar;
    var self = this;
    this.container = containerId;
    self.calcBlock;
    self.opChar;
    self.resNum;
    self.oldnum;
    self.currNum;
    self.proc;
    self.calcBlock 	= document.getElementById(self.container); /* находим контейнер в котором будем запускать */

    var	display       = self.calcBlock.getElementsByClassName('calculator__display')[0], /* дисплей калькулятора */
        displayUpper  = self.calcBlock.getElementsByClassName('calculator__display-upper')[0], /* верхний дисплей */
        result        = self.calcBlock.getElementsByClassName("calculator__result")[0], /* кнопка равно */
        clear         = self.calcBlock.getElementsByClassName("calculator__clear")[0], /* кнопка C */
        calculatorNum = self.calcBlock.getElementsByClassName("calculator__num"), /* кнопки чисел */
        calculatorOps = self.calcBlock.getElementsByClassName("calculator__ops"), /* кнопки операторов */
        resNum,                                 /* Для сохранения результата */
        oldNum = "",                            /* сюда кладем первый операнд */
        currNum = "",                           /* сюда последующий операнд */
        calcOperator,                               /* какой оператор будем использовать */
        proc					= false;		   						/* будем ли использовать проценты */

        var showResToUpperDisp = () => {
      			displayUpper.innerHTML = `${self.UpperDisp.UoldNum}${self.UpperDisp.UcalcOperator}${self.UpperDisp.UcurrNum}${self.UpperDisp.Uproc}`;
      		};
      		var clearUpperDisp = () => {
      			self.UpperDisp = {UoldNum: "",UcurrNum: "",UcalcOperator: "",Uproc: "",UresNum: ""};
      		}

      		 /* Создаем объект с переменными2 */
      		 self.UpperDisp = {
      			 UoldNum: "",
      			 UcurrNum: "",
      			 UcalcOperator: "",
      			 Uproc: "",
      			 UresNum: ""
      		 };

         /*собственно логика*/


         /* если: клик по числу */
         var setNum = function(){
            if (resNum) { /* number если на дисплее отражен результат */
             currNum = this.getAttribute("data-num"); /* заносим в переменную */
             resNum = "";
          } else { /* если нет, добавляем число в  предыдущий операнд */
             currNum += this.getAttribute("data-num");
          }

          display.innerHTML = currNum; /* Отобразить второй операнд */
          self.UpperDisp.UcurrNum = currNum;
         };

      /* если: клик был по оператору. записываем число в oldNum и сохраняем значение оператора */
      var moveNum = function(){

          if (this.getAttribute("data-ops")!=='proc' && this.getAttribute("data-ops")!=='opReverse'){

             if (oldNum == ""){
              oldNum = currNum;
              currNum = "";
              self.UpperDisp.UoldNum = oldNum;
              self.UpperDisp.UcurrNum ="";
              self.operator = this.getAttribute("data-ops");
              calcOperator =	self.operator;
              self.UpperDisp.UcalcOperator = self.operator;
              showResToUpperDisp();
            } else {
              currNum = currNum;
              self.UpperDisp.UcurrNum = currNum;
              showResToUpperDisp();
            }
          } else if(this.getAttribute("data-ops") =='opReverse' && this.getAttribute("data-ops") !='proc'){
             currNum = utils.opReverse(currNum);
             self.UpperDisp.UcurrNum =currNum;
             showResToUpperDisp();

          }else if (this.getAttribute("data-ops") =='proc'){
             proc = true;
             self.UpperDisp.UcurrNum = currNum;
          }

  /* console.log("First= " + oldNum + "; opper= " + calcOperator + "; Second= " + currNum + "; proc= " + proc);*/

         self.opChar = self.getOperand(calcOperator);

        /*если процент не был нажат*/
         if(!proc){
            self.UpperDisp.UcalcOperator = self.opChar;
            showResToUpperDisp();
          } else { /*если был то вычисляем с процентами*/
            self.UpperDisp.UoldNum = oldNum;
            self.UpperDisp.UcalcOperator = self.opChar;
            self.UpperDisp.UcurrNum = currNum;
            self.UpperDisp.Uproc = getOperandChar.proc;
            showResToUpperDisp();
          };
           result.setAttribute("data-result", ""); /* сбрасываем аттрибут на = */
     };

         /* если: клик был по =. вычисляем результат */
   var displayNum = () => {
         self.UpperDisp.UcurrNum = currNum;

           /* выполняем преобразование в числа с плавающей точкой */
           oldNum = parseFloat(oldNum);
           currNum = parseFloat(currNum);

           /* выполняем операцию */
          self.resNum = self.getCalculate(calcOperator, oldNum, currNum, proc);
          resNum = self.resNum;
          self.UpperDisp.UresNum = self.resNum;
          showResToUpperDisp();

           /* если результат вычислений вернул NaN или бесконечность */
           if (!isFinite(resNum)) {
             if (isNaN(resNum)) { /* если результат NaN */
               resNum = "Wrong result";
             } else { /* если в результате деления на ноль результат бесконечность */
               resNum = "Divide by ZERO!!!!";
               calcBlock.classList.add("broken"); /* ломаем калькулятор */
             }
           }
           /* если результат получен и он не NaN и не бесконечность показываем результат */
         display.innerHTML = resNum;
         self.UpperDisp.UresNum = self.resNum;
        /* console.log(`${self.UpperDisp.UoldNum}${self.UpperDisp.UcalcOperator}${self.UpperDisp.UcurrNum}${self.UpperDisp.Uproc}=${self.UpperDisp.UresNum}`);*/
         calcHistory(self.UpperDisp, containerId);
         result.setAttribute("data-result", resNum);

           /* и обнуление переменных */
         oldNum = "";
         proc = false;
         currNum = resNum;
         showResToUpperDisp();
         clearUpperDisp();
         };
         /* клик по кнопке С. обнуляем все. */
         var clearAll = () => {
           oldNum = "";
           currNum = "";
           display.innerHTML = "0";
           result.setAttribute("data-result", resNum);
           proc = false;
           self.operator="&nbsp";
           calcOperator="&nbsp";
           self.UpperDisp = {
             UoldNum: "",
             UcurrNum: "",
             UcalcOperator: "&nbsp",
             Uproc: "",
             UresNum: ""
            };
          clearUpperDisp();
          showResToUpperDisp();
         };

         /* эвент на клик числа */
         for (let i = 0, l = calculatorNum.length; i < l; i++) {
          calculatorNum[i].onclick = setNum;
         }
         /* эвент на клик оператора */
         for (let i = 0, l = calculatorOps.length; i < l; i++) {
          calculatorOps[i].onclick = moveNum;
         }
         /* эвент на клик равно */
         result.onclick = displayNum;

         /**/

         /* клик на С */
         clear.onclick = clearAll;

         /*конец логики*/

   };
};





class IngCalculator extends SimpleCalculator{

 getOperand(calcOp) {
   let  getOperandChar = require('../helpers/get_operand');
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
   var  utils = require('../helpers/utils');
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
