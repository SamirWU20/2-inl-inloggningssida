//badly stored (public) secrets
const secretUsername = "test";
const secretPassword = "1234";

const username = document.getElementById("username");
const password = document.getElementById("password");
const loginButton = document.getElementById("loginButton");

loginButton.onclick = function() {
	const user = username.value;
	const pass = password.value;

	if (user === secretUsername &&
		pass === secretPassword) {
		
		console.log("Välkommen!");
		//use DOM to render: welcome message, log out button
		//use localStorage to persist successful login
		localStorage.setItem(user, pass);

		// localStorage.setItem(user, pass);
		// location.reload();
	} else {
		console.log("Något gick fel!");
		//use DOM to render: bad login message, login screen
		//remove login item from localStorage
		// localStorage.removeItem(user, pass);
	}
};
