let baseUrl = "http://localhost:3000/products"
function displayProducts (products) {
    let productCatalog = document.querySelector ("#productCatalog")
     products.forEach (product => {
        let html = ` 
        <div class="singleProduct">
                <h5>${product.title.substring (1,20)}</h5>
                <img src="${product.image}" alt="bag">
                <p><strong>${product.description.substring (1,30)}...</strong>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                <div><strong>${product.price}</strong></div>
                <div><strong>${product.category}</strong></div>
                <div>
                <button class = "update">update</button>
                <button class = "delete">delete</button>
        </div>`
            productCatalog.innerHTML += html
    })
     }
fetch (baseUrl)
.then (response => response.json ())
.then ( data => displayProducts (data))
.catch ((error) => console.log (error));

function deleteProduct () {

}
function updateProduct () {

}
function postProduct () { 
    let form = document.querySelector ("form")
    form.addEventListener ("submit", (event )=> {
        event.preventDefault()
        let productTitle = document.querySelector ("#title").value
        let productImage = document.querySelector ("#image").value
        let productPrice = document.querySelector ("#price").value
        let productDescription = document.querySelector ("#description").value
    
        let productObject = {
            title : productTitle,
            image : productImage,
            price : productPrice,
            description : productDescription,
        }
        console.log(productObject)
    })

}
