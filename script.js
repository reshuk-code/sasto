const products = [
   
    {
        "name": "Iphone-13",
        "description": "Iphone-13 with 128GB storage",
        "storage": "128gb",
        "price": "rs " + 93400,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Iphone+13",
        "tags": ["mobile", "phone", "iphone", "iphone-13", "smartphone"]
    },
    {
        "name": "T-shirt",
        "description": "Black T-shirt in various sizes",
        "size": "L, XL, XXL",
        "price": "rs " + 3200,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=T-shirt",
        "tags": ["clothing", "t-shirt", "black", "fashion", "wearable"]
    },
    {
        "name": "Nike Shoes",
        "description": "New Nike Shoes in sizes 11, 12",
        "size": "11, 12",
        "price": "rs " + 5800,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Nike+Shoes",
        "tags": ["shoes", "nike", "footwear", "sports", "sneakers"]
    },
    {
        "name": "Jeans Paint",
        "description": "Jeans Paint for men",
        "size": "XL, XXL",
        "price": "rs " + 2400,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Jeans+Paint",
        "tags": ["clothing", "jeans", "pants", "men", "fashion", "denim"]
    },
    {
        "name": "Samsung Galaxy S21",
        "description": "Samsung Galaxy S21 with 256GB storage",
        "storage": "256gb",
        "price": "rs " + 80500,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Samsung+Galaxy+S21",
        "tags": ["mobile", "phone", "samsung", "galaxy", "smartphone"]
    },
    {
        "name": "Adidas Running Shoes",
        "description": "Adidas Running Shoes in sizes 10, 11",
        "size": "10, 11",
        "price": "rs " + 6100,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Adidas+Shoes",
        "tags": ["shoes", "adidas", "footwear", "sports", "running"]
    },
    {
        "name": "Leather Jacket",
        "description": "Brown Leather Jacket for men",
        "size": "L, XL",
        "price": "rs " + 9800,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Leather+Jacket",
        "tags": ["clothing", "jacket", "leather", "fashion", "men"]
    },
    {
        "name": "MacBook Pro",
        "description": "Apple MacBook Pro 13-inch, 512GB SSD",
        "storage": "512gb",
        "price": "rs " + 185000,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=MacBook+Pro",
        "tags": ["laptop", "apple", "macbook", "computer", "technology"]
    },
    {
        "name": "Wireless Headphones",
        "description": "Sony Wireless Noise Cancelling Headphones",
        "price": "rs " + 12000,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Headphones",
        "tags": ["electronics", "headphones", "sony", "audio", "wireless"]
    },
    {
        "name": "Smart Watch",
        "description": "Fitbit Versa 2 Smartwatch",
        "price": "rs " + 16500,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Smart+Watch",
        "tags": ["electronics", "wearable", "smartwatch", "fitbit", "fitness"]
    },
    {
        "name": "Gaming Mouse",
        "description": "Logitech G502 HERO Gaming Mouse",
        "price": "rs " + 4500,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Gaming+Mouse",
        "tags": ["electronics", "gaming", "mouse", "logitech", "accessories"]
    },
    {
        "name": "Bluetooth Speaker",
        "description": "JBL Portable Bluetooth Speaker",
        "price": "rs " + 6200,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Bluetooth+Speaker",
        "tags": ["electronics", "speaker", "jbl", "audio", "bluetooth"]
    },
    // New products
    {
        "name": "Canon EOS R5",
        "description": "Mirrorless Camera with 45MP Sensor",
        "price": "rs " + 320000,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Canon+EOS+R5",
        "tags": ["camera", "electronics", "canon", "photography", "mirrorless"]
    },
    {
        "name": "Apple AirPods Pro",
        "description": "Noise Cancelling Wireless Earbuds",
        "price": "rs " + 25000,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=AirPods+Pro",
        "tags": ["electronics", "earbuds", "apple", "wireless", "audio"]
    },
    {
        "name": "Nikon D7500",
        "description": "DSLR Camera with 20.9MP Sensor",
        "price": "rs " + 72000,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Nikon+D7500",
        "tags": ["camera", "dslr", "nikon", "photography", "electronics"]
    },
    {
        "name": "Xbox Series X",
        "description": "Next-Gen Gaming Console",
        "price": "rs " + 50000,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Xbox+Series+X",
        "tags": ["gaming", "console", "xbox", "electronics", "next-gen"]
    },
    {
        "name": "Dell XPS 13",
        "description": "Ultra-thin Laptop with Intel i7",
        "price": "rs " + 140000,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Dell+XPS+13",
        "tags": ["laptop", "dell", "computer", "technology", "electronics"]
    },
    {
        "name": "Sony PlayStation 5",
        "description": "Latest PlayStation Console",
        "price": "rs " + 55000,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=PlayStation+5",
        "tags": ["gaming", "console", "playstation", "electronics", "next-gen"]
    },
    {
        "name": "GoPro HERO10",
        "description": "Action Camera with 5.3K Video",
        "price": "rs " + 45000,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=GoPro+HERO10",
        "tags": ["camera", "action", "gopro", "electronics", "video"]
    },
    {
        "name": "Echo Dot (4th Gen)",
        "description": "Smart Speaker with Alexa",
        "price": "rs " + 3500,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Echo+Dot",
        "tags": ["electronics", "speaker", "smart", "amazon", "home"]
    },
    {
        "name": "Kindle Paperwhite",
        "description": "E-Reader with 6.8” Display",
        "price": "rs " + 10000,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Kindle+Paperwhite",
        "tags": ["electronics", "e-reader", "amazon", "books", "display"]
    },
];



function displayProducts(products) {
    let html = '';
    products.forEach(item => {
        html += `
            <div class="col-md-3 mb-4">
                <div class="card h-100">
                    <img src="${item.image}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.description}</p>
                        <p class="card-text"><strong>Price:</strong> ${item.price}</p>
                        <button class="btn btn-primary" onClick="addtocart()" id="addtocart">Add to Cart</button>
                    </div>
                </div>
            </div>`;
    });
    document.getElementById('products-section').innerHTML = html;
}


displayProducts(products);



function searchProducts(query) {
    // Get the h1 element by ID
    const resultHeading = document.getElementById('searchResultHeading'); 

    // Filter the products array based on the query
    const searchResult = products.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );

    // Check if products are found
    if (searchResult.length === 0) {
        resultHeading.innerHTML = "No product found"; // Show 'no product found' in h1
    } else {
        resultHeading.innerHTML = `Showing results for search: "${query}"`; // Show search results message
    }

    // Call the function to display the filtered products
    displayProducts(searchResult);
}


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchQuery = event.target.querySelector('input[type="search"]').value;
    
    searchProducts(searchQuery);
});

function sendMail(){
    window.location = "mailto:reshuksapkota2007@gmail.com"
}


let defvalue = 0 
function addtocart(productId) {
    const selectedProduct = products.find(product => product.id === productId);
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    defvalue+=1 ;
    document.getElementById('noofitems').innerHTML=defvalue;
    cartItems.push(selectedProduct);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    console.alert("Product added to cart!");



}