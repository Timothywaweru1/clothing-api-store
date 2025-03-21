
function displayProducts (products) {
    let productCatalog = document.querySelector ("#productCatalog")
     products.forEach (product => {
        let html = ` 
        <div class="singleProduct">
                <h5>${product.title}</h5>
                <img src="${product.image}" alt="bag">
                <p><strong>${product.description}</strong>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                <div><strong>${product.price}</strong></div>
                <div><strong>${product.category}</strong></div>
        </div>`
            productCatalog.innerHTML += html
    })
     }
fetch ("https://fakestoreapi.com/products")
.then (response => response.json ())
.then ( data => displayProducts (data))
.catch ((error) => console.log (error));

// POST && PATCH 

// let baseUrl = "http://localhost:3000/article";

// fetch (baseUrl, {
//     method : "POST",
//     headers : {
//         "Content-Type" : "application/json"
//     },
//     body : JSON.stringify ({key : value})
// })
// .then (res => res.json)
// .then (data => console.log(data)) 
// .catch(error => console.log (error))

// /*DELETE*/
// fetch (baseUrl, {
//     method : "DELETE",
// })
/*
CRUD =>
    CREATE = POST
READ = GET
UPDATE = PATCH
DELETE
*/