class SimpleCalculator {

constructor(containerId) {

  this.container = containerId;
  this.calcBlock;
  this.opChar;
  this.resNum;
  this.oldnum;
  this.currNum;
  this.calcOperator;
  this.button;
  this.proc = false;
  console.log(this.container);

  this.calcBlock 	= document.getElementById(this.container);
  this.display = this.calcBlock.getElementsByClassName('calculator__display')[0];
  this.result = document.querySelector(`#${this.container} .calculator__result`);
  this.clear = document.querySelector(`#${this.container} .calculator__clear`);
  this.displayUpper  = document.querySelector(`#${this.container} .calculator__display-upper`);
  this.calculatorNum = this.calcBlock.getElementsByClassName("calculator__num");
  this.calculatorOps = this.calcBlock.getElementsByClassName("calculator__ops");
  this.utils = require('../../helpers/utils');
  this.getOperandChar = require('../../helpers/get_operand');
  this.calcHistory = require('../../helpers/calc_history');


  this.UpperDisp = {
    UoldNum: "",
    UcurrNum: "",
    UcalcOperator: "",
    Uproc: "",
    UresNum: ""
  };

  this.Constant = "test";

  this.observer();


  };
  observer(){

    for (let i = 0, l = this.calculatorNum.length; i < l; i++) {
      this.button = this.calculatorNum[i];
      this.button.addEventListener('click', this.setNum.bind(this));

      }
  //console.log(this.Constant);
  };
setNum(){
     if (this.resNum) {
      this.currNum = this.button.getAttribute("data-num");
      this.resNum = "";
   } else {
     this.currNum += this.button.getAttribute("data-num");
   };
console.log(this.currNum);
console.log(this.Constant);
this.display.innerHTML = this.currNum;
this.UpperDisp.UcurrNum = this.currNum;
};











};
export default SimpleCalculator;
