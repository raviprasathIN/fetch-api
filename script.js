function getValue() {
  const value = document.querySelector('input').value;
  fetch(`https://fakestoreapi.com/products/${value}`)
  	.then(response => {
    	return response.json();
  	})
  	.then(data => {
    	document.querySelector('.products').innerHTML += `
          <div class="card">
              <img src="${data.image}" class="card-img-top" alt="product image">
              <hr>
              <div class="card-body">
                  <h3 class="card-title">${data.title}</h3>
                  <h6>${data.category}</h6>
                  <p class="card-text">${data.description}</p>
                  <hr>
                  <h3 class = "price">₹${data.price}</h3>
                  <span>⭐ ${data.rating.rate}</span><span>(${data.rating.count})</span>
              </div>
          </div>
          `;
  	})
}