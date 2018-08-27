function get_songs(song) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			var jsonData = JSON.parse(this.responseText);
			ready_data = display_data(jsonData);
		}
	}
	var options = {
      url: "https://api.spotify.com/v1/search?q=" + song + "&type=track",
      headers: {
        'Authorization': 'Bearer ' + 'BQAvuOOjUFD3ndYI8c6DMEwU3OiUlpU13c0uOgKJ8Pw60IqLhUQ2e6VOUsTyU1N7H1zMmhHCdsFLwFqu3eHhzItZDcuzISYc9Q2L8fa'
      },
      json: true
    };
	search_url = "https://api.spotify.com/v1/search?q=" + song + "&type=track";
	xmlhttp.open('GET', options, true);
	xmlhttp.send();
}

function display_data(jsonData) {
	console.log(jsonData)
	for(var i in jsonData) {
		var div = document.createElement('div');
    	div.innerHTML = gen_card(i);
    	document.getElementById('song-cards').appendChild(div);
	}
}

function gen_card(jsonData) {
	img = gen_image(jsonData[images][1][url], jsonData[name]);
	text = gen_text(jsonData[song], jsonData[artist]);
	card = '<div class="card" style="width: 18rem;">' + img + '<div class="card-body">' + text + '</div></div>';
}

function gen_image(src, artist) {
    var text = '<img class="card-img-top" src="' + src + ' alt="' + artist + '">';
    return text;
}

function gen_text(song, artist) {
	var text = '<h5 class="card-title">' + song + '</h5><p class="card-text">' + artist + '</p><a href="#" class="btn btn-primary">Add to Playlist</a>';
	return text;
}

song = "Day Tripper";
get_songs(song)