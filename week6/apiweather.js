const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://open-weather13.p.rapidapi.com/fivedaysforcast?latitude=40.730610&longitude=-73.935242&lang=EN');
xhr.setRequestHeader('x-rapidapi-key', '8ae402b1e9msh1ec693e9a3808a2p1d2422jsn0fd240ff21b8');
xhr.setRequestHeader('x-rapidapi-host', 'open-weather13.p.rapidapi.com');

xhr.send(data);