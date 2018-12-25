'use strict';
var  clearHistory = require('../helpers/clear_history');

var closeHistBlock = function(container) {
	let elem = document.getElementById(container).getElementsByClassName('calculator__display-hist')[0];
	elem.style.height = 0+"px";
};
var openHistBlock = function(container){
	let elem = document.getElementById(container).getElementsByClassName('calculator__display-hist')[0];
  elem.style.height = 100+"px";
};


function switchCalcHistBlock(container) {
	let elem = document.getElementById(container).getElementsByClassName('submenu__hist')[0];
	this.close = function() {closeHistBlock(container);};
	this.open = function() {openHistBlock(container);};
	this.clear = function(){clearHistory(container)};
	var self = this;
	elem.onclick = function(e) {

		var target = e.target;
		var action = target.getAttribute('data-hist');
		if (action) {
			self[action]();
		}
	};
};
export default switchCalcHistBlock;
