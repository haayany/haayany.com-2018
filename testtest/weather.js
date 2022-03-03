const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://weather-embed.p.rapidapi.com/forecast/create",
	"method": "POST",
	"headers": {
		"content-type": "application/json",
		"x-rapidapi-forward-key": "RapidAPI Application Key",
		"x-rapidapi-host": "weather-embed.p.rapidapi.com",
		"x-rapidapi-key": "8c961221b5msheda916030899f69p1cb8b9jsn5bdd919401b7"
	},
	"processData": false,
	"data": {
		"units": "imperial"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});