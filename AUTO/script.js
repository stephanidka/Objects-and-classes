const data = [
    {
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
    id: 2,
    type: 'car',
    brand: 'Mercedes-Benz',
    doors: 4,
    price: 2800000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
    {
    id: 3,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 210,
    price: 1300000,
    image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
    id: 4,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 220,
    price: 1400000,
    image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];

const transportDiv = document.getElementById('transportList');
data.forEach(function(item){
    const itemDiv = document.createElement('div');
    const itemImage = document.createElement('img');
    itemImage.src = item.image;
    itemImage.alt = item.brand;
    itemImage.width = 300;
    itemImage.height = 141;
    itemDiv.appendChild(itemImage);

    const itemBrand = document.createElement('p');
    itemBrand.textContent = item.brand;
    itemDiv.appendChild(itemBrand);

    const additInfo = document.createElement('p');
    let additText = "";
    if(item.doors){
        additText = "Doors: " + item.doors;
    };
    if(item.maxSpeed){
        additText = "Maximum speed: " + item.maxSpeed;
    };
    additInfo.textContent = additText;
    itemDiv.appendChild(additInfo);

    const itemPrice = document.createElement('p');
    itemPrice.textContent = item.price + " rub";
    itemDiv.appendChild(itemPrice);

    transportDiv.appendChild(itemDiv);
});

class Transport{
    constructor(type, brand, price){
        this.type = type;
        this.brand = brand;
        this.price = price;
    }
getInfo() {
    return this.type; 
}
getPrice() {
    return this.price; 
}
}
class Car extends Transport{
    constructor(type, brand, price, doors){
        super(type, brand, price);
        this.doors = doors;
    }
    getDoorsCount(){
        return this.doors;
    }
}

class Bike extends Transport{
    constructor(type, brand, price, maxSpeed){
        super(type, brand, price);
        this.maxSpeed = maxSpeed;
    }
    getMaxSpeed(){
        return this.maxSpeed;
    }
}

const myBike = new Bike('bike', 'Harley-Davidson', 1400000, 220); 
console.log(myBike.getMaxSpeed()); // ну и так далее :)