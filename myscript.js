window.onload = function () {
	let url = "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
	
	fetch(url)
    .then(response => response.json())
    .then(data => update(data)
    );
}

function update(data) {
	
	console.log(data);
}
