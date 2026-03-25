
async function fetchData(email,nickname,password,phone) {
	let url = `http://localhost/myserver/index_registration.php?email=${email}&nickname=${nickname}&password=${password}&phone=${phone}`
	let response = await fetch(url, {
		method: 'GET',
		headers: { Accept: 'application/json' },
	})

}

function get_data_form() {
	const btn = document.querySelector('#btn')
	btn.addEventListener('click', event => {

		const exp = /[a-z]/
        const email = document.querySelector('#email').value
        const nickname = document.querySelector('#username').value
		const password = document.querySelector('#psw').value
        const phone = document.querySelector('#phone').value
        fetchData(email,nickname,password,phone)
		event.preventDefault()
        alert('Спасибо за регистрацию!')
	})
}

document.addEventListener('DOMContentLoaded', function () {
	get_data_form()
})
