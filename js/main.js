var time = document.getElementById('time_now');
 setInterval(function(){
   var d = new Date();
   time.innerHTML = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() 
 }, 1);


//  async function fetchData(brand,price,rating,img) {
// 	let url = `http://localhost/myserver/?brand=${brand}&price=${price}&rating=${rating}&img=${img}`
// 	let response = await fetch(url, {
// 		method: 'GET',  
// 		headers: { Accept: 'application/json' },
// 	})

// }

// function get_data_form() {
// 	const btn_reg = document.querySelector('#btn_reg')
// 	btn_reg.addEventListener('click', event => {

		
// 		const brand = document.querySelector('#graphicscardtext').value
//     const price = document.querySelector('#graphicscardprice').value
// 		// const rating = document.querySelector('#exampleInputOtch1').value
// 		const img = document.querySelector('#graphicscardimg').value

// 		event.preventDefault()
//         alert('Спасибо за регистрацию!')
// 	})
// }

// document.addEventListener('DOMContentLoaded', function () {
// 	get_data_form()
// })


async function fetchAndDisplayGraphicsCards() {
  try {
      const url = 'http://localhost/myserver/index.php'; 
      let response = await fetch(url, {
          method: 'GET',
          headers: {
              'Accept': 'application/json'
          },
      });

      const graphicsCards = await response.json(); 
      displayGraphicsCards(graphicsCards); 

  } catch (error) {
      console.error("Ошибка при получении данных о видеокартах:", error);
      
      document.querySelector('.main_tovar').innerHTML = '<p>Не удалось загрузить товары. Попробуйте позже.</p>';
  }
}

function displayGraphicsCards(cards) {
  const mainTovarDiv = document.querySelector('.main_tovar');
  mainTovarDiv.innerHTML = ''; 

  if (cards.length === 0) {
      mainTovarDiv.innerHTML = '<p>Видеокарты не найдены.</p>';
      return;
  }

  
  cards.forEach(card => {
      const productBlock = document.createElement('div');
      productBlock.className = 'productsblocks'; 

      productBlock.innerHTML = `
          <div class="graphicscardimg">
              <img src="${card.img}" alt="${card.brand}">
          </div>
          <div class="graphicscardtext">
              <h1>${card.brand}</h1>
              
          </div>
          <div class="graphicscardprice">
              <h2>${card.price} ₽</h2>
              <div class="buybutton">
                  <button type="button" class="primenit_btn" id="buy_btn_${card.id}">Buy</button>
              </div>
          </div>
      `;
      mainTovarDiv.appendChild(productBlock);

  
  });
}


document.addEventListener('DOMContentLoaded', fetchAndDisplayGraphicsCards);
