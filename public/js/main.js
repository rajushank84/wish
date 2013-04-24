require.config({
	paths: {
		jquery: 'lib/jquery-min',
		underscore: 'lib/underscore-min',
		backbone: 'lib/backbone-optamd3-min'
	}
});

require(['views/app','backbone'], function(AppView, Backbone){
	'use strict';

	var appView =  new AppView();

	appView.render();

	var AppRouter = Backbone.Router.extend({
		routes: {
			'landing': 'landing',
			'about': 'about',
			'': 'landing'
		},

		about: function() {
			appView.getPage('/about');
		},

		landing: function() {
			appView.getPage('/');
		},

		default: function() {
			Backbone.history.navigate('#landing');
		}
	});

	var appRouter = new AppRouter();
	Backbone.history.start();
}); 

