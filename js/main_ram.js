async function fetchAndDisplayRam() {
    try {
        const url = 'http://localhost/myserver/index_ram.php'; 
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
        });
  
        const ram = await response.json(); 
        displayram(ram); 
  
    } catch (error) {
        document.querySelector('.main_tovar').innerHTML = '<p>Не удалось загрузить товары. Попробуйте позже.</p>';
    }
}
  
  function displayram(cards) {
    const mainTovarDiv = document.querySelector('.main_tovar');
    mainTovarDiv.innerHTML = ''; 
  
    if (cards.length === 0) {
        mainTovarDiv.innerHTML = '<p>По вашему запросу ничего не найдено.</p>';
        return;
    }   
  
    
    cards.forEach(card => {
        const productBlock = document.createElement('div');
        productBlock.className = 'productsblocks'; 
  
        productBlock.innerHTML = `
            <div class="motherboardscardimg">
                <img src="${card.img}" alt="${card.brand}">
            </div>
            <div class="motherboardtext">
                <h1>${card.brand}</h1>

                
            </div>
            <div class="motherboardprice">
                <h2>${card.price} ₽</h2>
                <div class="buybutton">
                    <button type="button" class="primenit_btn" id="buy_btn_${card.id}">Buy</button>
                </div>
                <div class="motherboardrating">
                <h1>Reviews:<img src="temp_imgs/image (10).png"> ${card.rating}</h1>
            </div>
            </div>
        `;
        mainTovarDiv.appendChild(productBlock);
  
    
    });
  }
  
  
  document.addEventListener('DOMContentLoaded', fetchAndDisplayRam);