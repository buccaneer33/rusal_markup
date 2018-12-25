'use strict';

var getCalcLight = function(container) {
	document.getElementById(container).classList.add("calculator--theme-light");
	};
var getCalcDark = function(container){
	document.getElementById(container).classList.remove("calculator--theme-light");
};




	function changeTheme(container) {

			let elem = document.getElementById(container).getElementsByClassName('submenu__theme')[0];
			//console.log(elem);
	    this.dark = function() {getCalcDark(container);};
	    this.light = function() {getCalcLight(container);};
	    var self = this;
	    elem.onclick = function(e) {
	      var target = e.target;
	      var action = target.getAttribute('data-theme');
	      if (action) {
	        self[action]();
	      }
	    };
	  };

export default changeTheme;
