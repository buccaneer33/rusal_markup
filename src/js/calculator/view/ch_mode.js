'use strict';
import CalcFactory  from '../сalc_factory/calc_class.js';
var getIngPanel = (container) => {
		let getAddKeys = require('../helpers/additional_keys');
		let getIngAddKeys = document.createElement('div');
		getIngAddKeys.classList.add("ingeneer");
		getIngAddKeys.innerHTML = getAddKeys.ingenering;
		let additionalKeysBlock = document.getElementById(container).getElementsByClassName("calculator__additional-keys-block")[0];
		let elem = additionalKeysBlock.querySelector('div');
		if (elem){additionalKeysBlock.removeChild(elem);}
		additionalKeysBlock.appendChild(getIngAddKeys);
};



var getSimpleMode = function(container) {
	var closeIngPanels = ()=>{
			var additionalKeysBlock = document.getElementById(container).getElementsByClassName("calculator__additional-keys-block")[0];
				let elem = additionalKeysBlock.querySelector('div');
				if(elem){additionalKeysBlock.removeChild(elem);};
};
	closeIngPanels();
	CalcFactory.makeSimple(container);
};


var getEngMode = function(container){
	getIngPanel(container);
	CalcFactory.makeIngenering(container);
};

function changeMode(container) {
	let elem = document.getElementById(container).getElementsByClassName('submenu__mode')[0];
	this.eng = function() {getEngMode(container);};
	this.simple = function() {getSimpleMode(container);};
	var self = this;
	elem.onclick = function(e) {

		var target = e.target;
		var action = target.getAttribute('data-mode');
		if (action) {
			self[action]();
		}
	};
};
export default changeMode;
