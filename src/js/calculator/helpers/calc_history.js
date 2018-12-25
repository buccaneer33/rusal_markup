'use strict';
function calcHistory(UpperDisp, container) {
/*console.log('Функция истории подключена');*/
let history = document.getElementById(container).getElementsByClassName('history-list')[0];
let result = `${UpperDisp.UoldNum}${UpperDisp.UcalcOperator}${UpperDisp.UcurrNum}${UpperDisp.Uproc}`;
let getListLi = document.createElement('li');
getListLi.setAttribute('data-hist', 'histItem');
getListLi.setAttribute('hist-result', UpperDisp.UresNum);

getListLi.innerHTML = result;
history.appendChild(getListLi);
};
module.exports = calcHistory;
