// Define constructor named Toy_Car
function Toy_Car(car_Brand, car_Model, car_Price, car_Color,car_Material, car_Scale,  car_Features) {
    this.car_Brand = car_Brand;
    this.car_Model = car_Model;
    this.car_Color = car_Color;
    this.car_Price = car_Price;
    this.car_Scale = car_Scale;
    this.car_Material = car_Material;
    this.car_Features = car_Features;
    this.car_Image = ''; 
}

// Function for creating a new Toy_Car instance
function createCarFunction() {

    // car details which is by default for demonstrating
    const carInfo = {
      car_Image: document.getElementById("toyCar_Photo").files[0] ? URL.createObjectURL(document.getElementById("toyCar_Photo").files[0]) : 'IMG/car.jpg',
      car_Brand: "BMW",
      car_Model: "2019 BMW X7 ",
      car_Price: "$14.99",
      car_Color: "Black",
      car_Material: " metal",
      car_Scale: "1/25",
      car_Features: ["Openable all doors", "Remote motor action", "Acciendent assist" , "Headlight and tail-light will turn on"]
    };

    // Create a new instance
    const toy_Car = new Toy_Car(
        carInfo.car_Brand,
        carInfo.car_Model,
        carInfo.car_Price,
        carInfo.car_Color,
        carInfo.car_Material,
        carInfo.car_Scale,
        carInfo.car_Features
    );

    // Display all car details with image
    document.getElementById("car_Image").src = carInfo.car_Image;
    displayCarAllInformation(toy_Car);
}


/// Function for updating toy car details
function updateCarFunction() {
    const updatedCar = new Toy_Car(
        document.getElementById("toyCar_Brand").value,
        document.getElementById("toyCar_Model").value,
        document.getElementById("toyCar_Price").value,
        document.getElementById("toyCar_Color").value,
        document.getElementById("toyCar_Material").value,
        document.getElementById("toyCar_Scale").value,
        document.getElementById("toyCar_Features").value
    );

    const car_Photo = document.getElementById("toyCar_Photo");
    const car_Image = document.getElementById("car_Image");

    // reader for reading data
    if (car_Photo.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(e) {
            car_Image.src = e.target.result;
            updatedCar.car_Image = e.target.result;
        };
        reader.readAsDataURL(car_Photo.files[0]);
    }

    displayCarAllInformation(updatedCar);
}


// Function for display toy car details
function displayCarAllInformation(car) {
    const carDetailsSection = document.getElementById("carProperties");
    carDetailsSection.innerHTML = `
      <p><strong>Brand:</strong> ${car.car_Brand}</p>
      <p><strong>Model:</strong> ${car.car_Model}</p>
      <p><strong>Price:</strong> ${car.car_Price}</p>
      <p><strong>Color:</strong> ${car.car_Color}</p>
      <p><strong>Scale:</strong> ${car.car_Scale}</p>
      <p><strong>Material:</strong> ${car.car_Material}</p>
      <p><strong>Features:</strong></p>
      <ul>
        ${car.car_Features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
    `;
}

// Event listener for both click buttons
document.getElementById("createButton").addEventListener("click", createCarFunction);
document.getElementById("updateButton").addEventListener("click", updateCarFunction);
