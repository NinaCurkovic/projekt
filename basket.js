window.onload = function () {
    shoppingCart= document.querySelector('#cart-content tbody');
    clearCartBtn=document.querySelector('#clear-cart');
    buyProductsBtn=document.querySelector('#buy-cart');
    clearCartBtn.addEventListener('click', clearCart);
    shoppingCart.addEventListener('click', removeProducts);
    buyProductsBtn.addEventListener('click', buyProducts);
    function getFromLocalStorage(){
        
		const arrayFromLocalStorage = JSON.parse(localStorage.getItem('productDataArray')) || [];
		let productsLS= arrayFromLocalStorage; 
	
		 productsLS.forEach(function(data) {
             
			const row= document.createElement('tr');
			row.innerHTML= ` 
				<tr>
				<td>
				<img src="${data.imgSource}" alt="${data.imgAlt}" class="img"><br>
				</td>
				<td style="text-align: center;"> ${data.description} </td>
				<td style="text-align: center;"> ${data.price} KN </td>
                <td> <button class="remove" data-id="${data.id}"> X</button></td>
				</tr>
				`;
			shoppingCart.appendChild(row);
		 }); 

    }
    getFromLocalStorage();

    function removeProducts(e){
        if(e.target.classList.contains('remove')){
            e.target.parentElement.parentElement.remove();
            }
    }
    function clearCart(e){
        shoppingCart.innerHTML='';
    }

    function buyProducts(e){
        shoppingCart.innerHTML='';
        alert('Thank You!');
    }
  
}

