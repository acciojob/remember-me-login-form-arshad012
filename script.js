//your JS code here. If required.
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
	event.preventDefault();

	const name = form.username.value;
	const password = form.password.value;
	const checked = form.checkbox.checked;

	const userData = {name, password};
	if(checked) {
		localStorage.setItem('users', JSON.stringify(userData));
	}
	

	const res = checkExistingUser(userData);
	if(!res) {
		alert(`Logged in as ${name}`);
	}
})


function checkExistingUser(userData) {
	const existingData = JSON.parse(localStorage.getItem('users'));
	if(existingData && (existingData.name == userData.name) && (existingData.password == userData.password)) {
		const existUserBtn = document.getElementById('existing');
		existUserBtn.style.display = 'block';
		existUserBtn.onclick = () => {
			alert(`Logged in as ${existingData.name}`);
		}
		
		const body = document.querySelector('body');
		// body.removeChild(existUserBtn);
		body.append(existUserBtn);

		return true;
	}
	return false;
}

checkExistingUser();





