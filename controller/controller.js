var dataUtils = require('../lib/dataUtils');

module.exports = function(app) {
    
    'use strict';

	app.get('/', function(req, res) {
		renderOutput(req, res, 'landing', '');
	});

	app.post('/doAddItem', function(req, res) {
		var data = {};
		data.name = req.body.name;

		dataUtils.saveItem(data, function(){
			renderOutput(req, res, 'landing', 'Added');
		});
	});

	app.post('/doDeleteItem', function(req, res) {
		var data = {};
		data.name = req.body.name;

		dataUtils.deleteItem(data, function(){
			renderOutput(req, res, 'landing', 'Deleted');
		});
	});

	app.get('/about', function(req, res) {
		renderOutput(req, res, 'about', 'Deleted');
	});

	function renderOutput(req, res, viewName, status) {
		var json;

		dataUtils.getAllItems(function(allTheItems){
			json = {
				viewName: viewName,
				status: status,
				baseTemplate: 'base',
				data: {
					items: allTheItems
				}
			};
	
			if(req.header('X-Requested-With') === 'XMLHttpRequest') {
				res.writeHead(200, { 'Content-Type': 'application/json' });
				res.write(JSON.stringify(json));
				res.end();
			}

			else {
				res.render(json.baseTemplate,json);
			}
		});

	}
};


