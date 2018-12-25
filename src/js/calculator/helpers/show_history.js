'use strict';

var showHistoryItem = function(container, result, inner) {
	let upperDisp = document.getElementById(container).getElementsByClassName('calculator__display-upper')[0];
	let disp = document.getElementById(container).getElementsByClassName('calculator__display')[0];
	upperDisp.innerHTML = inner;
	disp.innerHTML = result;
	};

	function showHistory(container) {

			let elem = document.getElementById(container).getElementsByClassName('history-list')[0];
	    this.histItem = function() {showHistoryItem(container, self.result, self.inner);};
			var result;
			var inner;
	    var self = this;
	    elem.onclick = function(e) {
	      var target = e.target;
	      var action = target.getAttribute('data-hist');
				result = target.getAttribute('hist-result');
				inner = target.innerHTML;
				self.result = result;
				self.inner = inner;
	      if (action) {
	        self[action]();
	      }
	    };
	  };

export default showHistory;
