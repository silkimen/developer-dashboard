angular.module('developerDashboard')
	.factory('links', [function () {
		var links = [];

		// some arbitrary mock data taken from microsoft's sample http://try.buildwinjs.com/playground/
		var linksArray = [
			{ title: 'Marvelous Mint', text: 'Gelato', icon: 'img/fruits/60Mint.png', url: 'http://google.com/search?q=Marvelous+Mint' },
			{ title: 'Succulent Strawberry', text: 'Sorbet', icon: 'img/fruits/60Strawberry.png', url: 'http://google.com/search?q=Succulent+Strawberry' },
			{ title: 'Banana Blast', text: 'Low-fat frozen yogurt', icon: 'img/fruits/60Banana.png', url: 'http://google.com/search?q=Banana+Blast' },
			{ title: 'Lavish Lemon Ice', text: 'Sorbet', icon: 'img/fruits/60Lemon.png', url: 'http://google.com/search?q=Lavish+Lemon+Ice' },
			{ title: 'Creamy Orange', text: 'Sorbet', icon: 'img/fruits/60Orange.png', url: 'http://google.com/search?q=Creamy+Orange' },
			{ title: 'Very Vanilla', text: 'Ice Cream', icon: 'img/fruits/60Vanilla.png', url: 'http://google.com/search?q=Very+Vanilla' },
			{ title: 'Banana Blast', text: 'Low-fat frozen yogurt', icon: 'img/fruits/60Banana.png', url: 'http://google.com/search?q=Banana+Blast' },
			{ title: 'Lavish Lemon Ice', text: 'Sorbet', icon: 'img/fruits/60Lemon.png', url: 'http://google.com/search?q=Lavish+Lemon+Ice' }
		];

		// generate 160 mock items
		for (var i = 0; i < 20; i++) {
			linksArray.forEach(function (item) {
				links.push(item);
			});
		}

		return links;
	}]);