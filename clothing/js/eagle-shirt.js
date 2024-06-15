console.log("test loaded");

const cardContainer = document.querySelector('.card-container');

fetch('http://localhost:3000/shirt-one')
.then(data => data.json())
.then(myJasonData => showClothing(myJasonData));

function showClothing(shirt){
    console.log(shirt);

    let htmlCode = createCard(shirt);    
    cardContainer.innerHTML = htmlCode;
}

function createCard(shirt){
    const card  = `
    <div class="card">
        <img src = "${shirt.imageUrl}" />
        <div class = "product-text">
            <h2>${shirt.title}</h2>
            <p class = "price">${shirt.price}</p>
            <br>
            <p class = "description">${shirt.description}</p>
            <br>
            <button>ADD TO CART</button>
        </div>
    </div>
    `;
    return card;
}