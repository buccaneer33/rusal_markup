'use strict';
function clearHistory(container){
	/*console.log('Функция удаления подключена');*/
let history = document.getElementById(container).getElementsByClassName('history-list')[0];
let elem = history.childNodes;
if(elem){
		while (history.firstChild) {
	    history.removeChild(history.firstChild);
		}
	}
}
module.exports = clearHistory;
