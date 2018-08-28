function get_songs(song) {

	var token = 'BQB9ScredgbZWqtP4yU65aGEAjk4BxnvgXRKdkckCDglYb8nFQRm1iG6fRMFURIszYXq5nYv3A_l2tXV6hCMADQIWz6mp_qxuFpkN_S4eBVbArIqTaLIi3uo4A6uXmTxoq-W1uM-O85TcB5D-24chZyNoCznZFNE3QtotrFPO_LFxkBKEr2tfvvKITwRJyH3_OIPBrbWlPYYkNJ9CoCqUVd3SSebPy4lQnw4vGsqy6j-hGpF6bIQr39dLlJgm5vMbbUuZBKGMjZk';

	$.ajax({
        url: 'https://api.spotify.com/v1/search?type=artist&query=beatles', //'https://api.spotify.com/v1/search?q=' + song + '&type=track',
      	dataType: 'JSONP',
     	headers: {
        	Authorization: 'Bearer ' + token
      	}
    })
    .then(function(oData) {
    	console.log(oData);
    })

	// var xmlhttp = new XMLHttpRequest();
	// xmlhttp.onreadystatechange = function() {
	// 	if(this.readyState == 4 && this.status == 200) {
	// 		var jsonData = JSON.parse(this.responseText);
	// 		ready_data = display_data(jsonData);
	// 	}
	// }
	// search_url = "https://api.spotify.com/v1/search?q=" + song + "&type=track";
	// xmlhttp.open('GET', search_url, true);
	// xmlhttp.send();
}

function display_data(jsonData) {
	console.log(jsonData)
	// for(var i in jsonData) {
	// 	var div = document.createElement('div');
 //    	div.innerHTML = gen_card(i);
 //    	document.getElementById('song-cards').appendChild(div);
	// }
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

song = "day tripper";
get_songs(song)