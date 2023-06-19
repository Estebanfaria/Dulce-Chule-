const renderProducts = (products) =>{
    const contendorProducts = document.getElementById('main-products')

    products.forEach(product => {
        
        contendorProducts.innerHTML += `
        <div class="card m-1 card-category" style="width: 28rem; height: 45rem">
            <img src="${product.img}" class="card-img-top h-75 object-fit-cover" alt="...">
            <div class="card-body h-25">
                <h5 class="card-title">${product.nombre}</h5>
                <p class="card-text fw-light">${product.descripción}</p>
                <p class="card-text fw-light">$${product.precio}</p>
            </div>
        </div>
        `

    })
}

renderProducts(productos)