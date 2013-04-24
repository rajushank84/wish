define(function () {

	'use strict';

	function renderTemplate(templateName, json, callback) {

	    var out;

	    if(typeof EJS!=='undefined') {
	        out = new EJS({url: 'templates/' + templateName + '.ejs'}).render(json);
	        if(callback) {
	            callback(out);
	        }
	    }
	}

	return {
		renderTemplate: renderTemplate
	};

});
