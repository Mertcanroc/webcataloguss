console.log("test loaded");

const cardContainer = document.querySelector('.card-container');

fetch('http://localhost:3000/sneakers')
.then(data => data.json())
.then(myJasonData => showSneakers(myJasonData));

function showSneakers(sneakers){
    console.log(sneakers);

    let htmlCode = '';
    for (let i = 0; i < sneakers.length; i++) {
        const sneaker = sneakers[i];
        htmlCode += createCard(sneaker);
    }
    cardContainer.innerHTML = htmlCode;
}

function createCard(sneaker){
    const card  = `
        <div class="card">
            <h2>${sneaker.title}</h2>
            <img src = "${sneaker.imageUrl}" />
            <p class="descripition">${sneaker.description}
            <p class="brand">${sneaker.brand}</p> 
            <p class="price">${sneaker.price}</p> 
        </div>
    `;
    return card;
}