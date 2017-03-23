var fs = require('fs'),
	request = require('request'),
	cheerio = require('cheerio'),
	args = process.argv.slice(2),
	url = args[0] || 'https://www.cheesemaking.com/recipes/recipedetails.html';

if(url != 'https://www.cheesemaking.com/recipes/recipedetails.html') {
	console.error('Sorry, this script doesn\'t know how to scrape anything other than cheesemaking.com (but it might in the future)');
	return;
}

function _getRecipeData(recipeRow, recipeAnchorTag, name) {
	return {
		name: name,
		imageSource: recipeAnchorTag.children('img').attr('src').replace('?lr=t&bh=135', ''),
		url: recipeAnchorTag.attr('href'),
		skillLevel: recipeRow.children('td').first('strong').text().trim()
	};
}

request(url, function(error, response, html){

	if(error) {
		console.error('An error occurred retrieving the page:', e);
		return;
	}

	var $ = cheerio.load(html),
		recipes = [];

	$('.recipe-list tr').filter(function() {
		var recipeRow = $(this),
			recipeAnchorTag = recipeRow.children('td').last().children('a'),
			name = recipeAnchorTag.children('h3').text();

		if (name == '')
			return;

		recipes.push(_getRecipeData(recipeRow, recipeAnchorTag, name));
	});

	fs.writeFile('../app/recipes/cheese-making-com.json', JSON.stringify(recipes, null, 4), function(err){
		console.log('Found ' + recipes.length + ' recipes! Written to cheese-making-com.json');
	});

});