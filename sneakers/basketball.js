console.log("test loaded");

const cardContainer = document.querySelector('.card-container');

fetch('http://localhost:3000/basketBall')
.then(data => data.json())
.then(myJasonData => showBasketball(myJasonData));

function showBasketball(basketball){
    console.log(basketball);

    let htmlCode = '';
    for (let i = 0; i < basketball.length; i++) {
        const basketBall = basketball[i];
        htmlCode += createCard(basketBall);
    }
    cardContainer.innerHTML = htmlCode;
}

function createCard(basketBall){
    const card  = `
        <div class="card">
            <h2>${basketBall.title}</h2>
            <img src = "${basketBall.imageUrl}" />
            <p class="description">${basketBall.description}</p>
            <p class="brand">${basketBall.brand}</p>
            <p class="price">${basketBall.price}</p>  
        </div>
    `;
    return card;
}