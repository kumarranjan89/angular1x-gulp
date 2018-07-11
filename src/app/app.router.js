angular.module('myApp')
	.config(function($stateProvider) {
		$stateProvider
			.state({
				name: 'home',
				url: '/home',
				templateUrl: './views/home/home.tpl.html',
				controller: 'HomeController'
			})
			.state({
				name: 'about',
				url: '/about',
				templateUrl: './views/about/about.tpl.html',
				controller: 'AboutController'
			})
	})