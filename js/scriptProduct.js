

let products = null;
let productsFilt = null;

//gets data and passes functions
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        productsFilt = data;
        console.log(products);
        addDataToHTML();
        categoryFilter();
    })

let listProducts = document.querySelector('.products');

//function to add data from JSON
function addDataToHTML() {
    listProducts.innerHTML = '';

    products.forEach(product => {
        let newProduct = document.createElement('a');
        newProduct.href = 'detail.html?id=' + product.id;
        newProduct.classList.add('item');
        newProduct.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy" width="300" height="300"> 
            <h3>${product.name}</h3>
            <p>Price - €${product.price}</p>
        `;
        listProducts.appendChild(newProduct);
    });
}

//function to filter products
function categoryFilter(){
    let buttons = document.querySelectorAll('.categoryMenu button');
    let categorys = {
        "Ovens": "Oven",
        "Refrigerators": "Fridge",
        "Televisions": "TV",
        "Blenders": "Mixers",
        "Toasters": "Toaster",
        "Washing Machines": "Washing Machine",
        "Laptops": "Laptop",
        "All Products": "All"
    };
    
    //fileters based on button click
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let category = categorys[button.textContent.trim()];
            if (category === "All") {
                products = productsFilt;
            } 
            else if(category){
                products = productsFilt.filter(p => p.category === category); 
            }
            addDataToHTML();
        });
    });
}
