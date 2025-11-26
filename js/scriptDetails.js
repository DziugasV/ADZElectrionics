

//Gets JSON and passes functiion

let products = null;
fetch('products.json')
.then(response => response.json())
.then(data => {
    products = data;
    showDetails();
})

function showDetails(){

    //Gets values based on clicked product
    let detail = document.querySelector('.detail');
    let productId = new URLSearchParams(window.location.search).get('id');
    let thisProduct = products.filter(value => {
        return value.id == productId
    })[0];

    //returns to home screan
    if(!thisProduct){
        window.location.href = "/"
    }

    //Gets all products information
    detail.querySelector('.image img').src = thisProduct.image;
    detail.querySelector('.name').innerText = thisProduct.name;
    detail.querySelector('.price').innerText = '€' + thisProduct.price;
    detail.querySelector('.description').innerText = thisProduct.description;
    let featureList = detail.querySelector('.features');
    featureList.innerHTML = '';
    thisProduct.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featureList.appendChild(li);
    });

    //Puts all information in thier requerd fiels of HTML
    //Gets detail page HTML info from specified directory
    let listProducts = document.querySelector('.listProduct')
    (products.filter(value => value.category == thisProduct.category))
    .forEach(product => {
        let newProduct = document.createElement('a');
        newProduct.href = '../ADZElectrionics/detail.html?id' + product.id';
        fetch('./products.json')
        newProduct.classList.add('item');
        newProduct.innerHTML = `
            <img src="${product.image}">
            <h2>${product.name}</h2>
            <div class="price">${product.price}</div>
        `;
        //adds everything
        listProducts.appendChild(newProduct);
    });
}
