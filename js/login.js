
async function fetchData(email,nickname,password,phone) {
	let url = `http://localhost/myserver/index_login.php?email=${email}&nickname=${nickname}&password=${password}&phone=${phone}`
	let response = await fetch(url, {
		method: 'GET',
		headers: { Accept: 'application/json' },
	})

}

function get_data_form() {
	const btn = document.querySelector('#btn')
	btn.addEventListener('click', event => {
        const email = document.querySelector('#email').value
        const password = document.querySelector('#psw').value
        fetchData(email,password)
		event.preventDefault()
	})
}

document.addEventListener('DOMContentLoaded', function () {
	get_data_form()
})
