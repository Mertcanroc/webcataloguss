console.log("Audi loaded");

const cardContainer = document.querySelector('.card-container');

fetch('http://localhost:3000/cars3')
.then(data => data.json())
.then(myJasonData => showCars(myJasonData));

function showCars(cars){
    console.log(cars);

    let htmlCode = '';
    for (let i = 0; i < cars.length; i++) {
        const car = cars[i];
        htmlCode += createCard(car);
    }
    cardContainer.innerHTML = htmlCode;
}

function createCard(car){
    const card  = `
        <div class="card">
            <h2 class="title">${car.title}</h2>
            <img src = "${car.imageUrl}" />
            <p class="description">${car.description}</p> 
            <h4 class="price">${car.price}</h4>
        </div>
    `;
    return card;
}