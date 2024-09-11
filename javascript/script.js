const products = [
    // Existing products...
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
    {
        "name": "Razer BlackWidow",
        "description": "Mechanical Gaming Keyboard",
        "price": "rs " + 8500,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Razer+BlackWidow",
        "tags": ["gaming", "keyboard", "razer", "electronics", "mechanical"]
    },
    {
        "name": "Oculus Quest 2",
        "description": "VR Headset with 64GB Storage",
        "price": "rs " + 35000,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Oculus+Quest+2",
        "tags": ["gaming", "vr", "headset", "electronics", "virtual-reality"]
    },
    {
        "name": "Bose QuietComfort 35 II",
        "description": "Wireless Noise-Cancelling Headphones",
        "price": "rs " + 20000,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Bose+QuietComfort+35+II",
        "tags": ["electronics", "headphones", "bose", "audio", "wireless"]
    },
    {
        "name": "Fitbit Charge 5",
        "description": "Fitness Tracker with GPS",
        "price": "rs " + 15000,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Fitbit+Charge+5",
        "tags": ["wearable", "fitness", "tracker", "fitbit", "electronics"]
    },
    {
        "name": "Samsung 4K TV",
        "description": "55-inch 4K Ultra HD Smart TV",
        "price": "rs " + 55000,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Samsung+4K+TV",
        "tags": ["electronics", "tv", "samsung", "4k", "smart"]
    },
    {
        "name": "HP Envy 15",
        "description": "High-Performance Laptop with Intel i7",
        "price": "rs " + 130000,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=HP+Envy+15",
        "tags": ["laptop", "hp", "computer", "technology", "electronics"]
    },
    {
        "name": "Apple Watch Series 8",
        "description": "Smartwatch with Health Tracking",
        "price": "rs " + 22000,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Apple+Watch+Series+8",
        "tags": ["wearable", "apple", "smartwatch", "health", "electronics"]
    },
    {
        "name": "JBL Flip 5",
        "description": "Portable Bluetooth Speaker with Deep Bass",
        "price": "rs " + 8000,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=JBL+Flip+5",
        "tags": ["electronics", "speaker", "jbl", "portable", "bluetooth"]
    },
    {
        "name": "Lenovo ThinkPad X1 Carbon",
        "description": "Business Laptop with Intel i7",
        "price": "rs " + 140000,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Lenovo+ThinkPad+X1+Carbon",
        "tags": ["laptop", "lenovo", "business", "computer", "electronics"]
    },
    {
        "name": "Sony WH-1000XM4",
        "description": "Noise-Cancelling Wireless Headphones",
        "price": "rs " + 18000,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Sony+WH-1000XM4",
        "tags": ["electronics", "headphones", "sony", "noise-cancelling", "wireless"]
    },
    {
        "name": "Asus ROG Strix",
        "description": "Gaming Laptop with RTX 3060",
        "price": "rs " + 120000,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Asus+ROG+Strix",
        "tags": ["laptop", "gaming", "asus", "electronics", "rtx"]
    },
    {
        "name": "Harman Kardon Onyx Studio 6",
        "description": "Portable Wireless Bluetooth Speaker",
        "price": "rs " + 15000,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Harman+Kardon+Onyx+Studio+6",
        "tags": ["electronics", "speaker", "harman-kardon", "portable", "bluetooth"]
    },
    {
        "name": "Google Nest Hub",
        "description": "Smart Display with Google Assistant",
        "price": "rs " + 8000,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Google+Nest+Hub",
        "tags": ["electronics", "smart", "google", "assistant", "home"]
    },
    {
        "name": "Xiaomi Mi Band 6",
        "description": "Fitness Band with AMOLED Display",
        "price": "rs " + 3000,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Xiaomi+Mi+Band+6",
        "tags": ["wearable", "fitness", "xiaomi", "band", "electronics"]
    },
    {
        "name": "Panasonic Lumix GH5",
        "description": "Mirrorless Camera with 4K Video Recording",
        "price": "rs " + 85000,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Panasonic+Lumix+GH5",
        "tags": ["camera", "mirrorless", "panasonic", "video", "electronics"]
    },
    {
        "name": "Oculus Rift S",
        "description": "PC VR Headset with 2560 x 1440 Resolution",
        "price": "rs " + 42000,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Oculus+Rift+S",
        "tags": ["vr", "headset", "oculus", "gaming", "electronics"]
    },
    {
        "name": "Bose SoundLink Revolve",
        "description": "Portable Bluetooth Speaker with 360-Degree Sound",
        "price": "rs " + 14000,
        "image": "https://www.dummyimage.com/300x200/000/fff&text=Bose+SoundLink+Revolve",
        "tags": ["electronics", "speaker", "bose", "portable", "bluetooth"]
    }
];


// Function to display products
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


// Initial product display
displayProducts(products);


let defvalue = 0 
function addtocart(){
    defvalue+=1 ;
    document.getElementById('noofitems').innerHTML=defvalue;
}

// Function to search products by name or tags
function searchProducts(query) {
    const searchResult = products.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    displayProducts(searchResult);
}

// Search bar event listener
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchQuery = event.target.querySelector('input[type="search"]').value;
    searchProducts(searchQuery);
});

