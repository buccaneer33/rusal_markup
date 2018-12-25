class SimpleCalculator {

/****/
  getOperand(calcOp) {
    let  getOperandChar = require('../../helpers/get_operand');
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
    let  utils = require('../../helpers/utils');
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
showResToUpperDisp(UoldNum, UcalcOperator, UcurrNum, Uproc){
  let result;
    result = `${UoldNum}${UcalcOperator}${UcurrNum}${Uproc}`;
  return result;
};
/****/
clearUpperDisp(UoldNum, UcurrNum, UcalcOperator, Uproc, UresNum){
  let result;
    result = {UoldNum: "",UcurrNum: "",UcalcOperator: "",Uproc: "",UresNum: ""};
  return result;
};
/****/

/*setNum(container){
  var display = document.querySelector(`#${container} .calculator__display`);
  if (self.resNum) { /* number если на дисплее отражен результат */
  //  self.currNum = self.getAttribute("data-num"); /* заносим в переменную */
    //resNum = "";
  //} else { /* если нет, добавляем число в  предыдущий операнд */
  //  self.currNum += self.getAttribute("data-num");
  //}
  //display.innerHTML = currNum; /* Отобразить второй операнд */
//  self.UpperDisp.UcurrNum = currNum;
//};*/

/****/
/*
moveNum(){
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
  };


  self.opChar = self.getOperand(calcOperator);


  if(!proc){
    self.UpperDisp.UcalcOperator = self.opChar;
    showResToUpperDisp();
  } else {
    self.UpperDisp.UoldNum = oldNum;
    self.UpperDisp.UcalcOperator = self.opChar;
    self.UpperDisp.UcurrNum = currNum;
    self.UpperDisp.Uproc = getOperandChar.proc;
    showResToUpperDisp();
  };
  result.setAttribute("data-result", "");
};*/
/****/

/*
displayNum(){
  self.UpperDisp.UcurrNum = currNum;


  oldNum = parseFloat(oldNum);
  currNum = parseFloat(currNum);


  self.resNum = self.getCalculate(calcOperator, oldNum, currNum, proc);
  resNum = self.resNum;
  self.UpperDisp.UresNum = self.resNum;
  showResToUpperDisp();


  if (!isFinite(resNum)) {
    if (isNaN(resNum)) {
      resNum = "Wrong result";
    } else {
      resNum = "Divide by ZERO!!!!";
    calcBlock.classList.add("broken");
    }
  }

  display.innerHTML = resNum;
  self.UpperDisp.UresNum = self.resNum;
  calcHistory(self.UpperDisp, containerId);
  result.setAttribute("data-result", resNum);


  oldNum = "";
  proc = false;
  currNum = resNum;
  showResToUpperDisp();
  clearUpperDisp();
};
/****/
/*clearAll(){
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
};*/
/****/
observer(container){
  var resNum,
  oldNum = "",
  currNum = "";
function setNum(resNum){

     if (resNum) { /* number если на дисплее отражен результат */
      currNum += resNum; /* заносим в переменную */
      resNum = "";
      console.log(currNum);
      display.innerHTML = currNum;
   } else { /* если нет, добавляем число в  предыдущий операнд */
     //currNum += resNum;
     //console.log(currNum);
   }
   //this.display.innerHTML = currNum; /* Отобразить второй операнд */
  //this.UpperDisp.UcurrNum = currNum;
  };
  var calculatorNum = document.getElementById(container).getElementsByClassName("calculator__num"); /* кнопки чисел */
  var calculatorOps = document.getElementById(container).getElementsByClassName("calculator__ops"); /* кнопки операторов */
  var result = document.querySelector(`#${container} .calculator__result`);
  var clear = document.querySelector(`#${container} .calculator__clear`);
  var display = document.querySelector(`#${container} .calculator__display`);

for (let i = 0, l = calculatorNum.length; i < l; i++) {
  let button = calculatorNum[i];
  button.addEventListener('click', clickNum);
  }
  function clickNum(event) {
    resNum = this.getAttribute("data-num");
    setNum(resNum);
    console.log(this.Constant);
}/**/


  /* эвент на клик оператора */
  for (let i = 0, l = calculatorOps.length; i < l; i++) {
    //calculatorOps[i].onclick = this.moveNum(container);
  }
  /* эвент на клик равно */
  //result.onclick = this.displayNum(container);
  /* клик на С */
  //clear.onclick = this.clearAll(container);
};
/****/

constructor(containerId) {
    /*подключаем историю*/
  let  calcHistory = require('../../helpers/calc_history');
  let  getOperandChar = require('../../helpers/get_operand');
  let  utils = require('../../helpers/utils');
  this.Constant = "test";

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

	this.display       = self.calcBlock.getElementsByClassName('calculator__display')[0]; /* дисплей калькулятора */
  var displayUpper  = self.calcBlock.getElementsByClassName('calculator__display-upper')[0], /* верхний дисплей */
    result        = self.calcBlock.getElementsByClassName("calculator__result")[0], /* кнопка равно */
    clear         = self.calcBlock.getElementsByClassName("calculator__clear")[0], /* кнопка C */
    calculatorNum = self.calcBlock.getElementsByClassName("calculator__num"), /* кнопки чисел */
    calculatorOps = self.calcBlock.getElementsByClassName("calculator__ops"), /* кнопки операторов */
    resNum,                                 /* Для сохранения результата */
    oldNum = "",                            /* сюда кладем первый операнд */
    currNum = "",                           /* сюда последующий операнд */
    calcOperator,                               /* какой оператор будем использовать */
    proc					= false;		   						/* будем ли использовать проценты */

 /* Создаем объект с переменными */
  this.UpperDisp = {
    UoldNum: "",
    UcurrNum: "",
    UcalcOperator: "",
    Uproc: "",
    UresNum: ""
  };
  this.observer(containerId);
  };
};
export default SimpleCalculator;
