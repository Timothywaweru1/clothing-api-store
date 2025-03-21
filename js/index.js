console.log("hello world!");
fetch ("http://localhost:3000/article")
.then (function (response) {
    return response.json()
})
.then (function (data) {
    console.log (data)
})
function displayProducts () {
    let productCatalog = document.querySelector ("#productCatalog")
    console.log (productCatalog)
    let html = ` 
    <div class="singleProduct">
            <h5>title:Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h5>
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="bag">
            <p><strong>description:</strong>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
            <div><strong>price:</strong></div>
            <div><strong>category:</strong>men's clothing</div>
        </div>`
        return html
}
displayProducts ()
fetch ("https://fakestoreapi.com/products")
.then (response => response.json ())
.then ((data) => console.log(data [0]))
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