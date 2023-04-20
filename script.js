const SIZE_SMALL = {
  price: 50,
  calories: 20,
};
const SIZE_BIG = {
  price: 100,
  calories: 40,
};
const STUFFING_CHEESE = {
  price: 10,
  calories: 20,
};
const STUFFING_SALAD = {
  price: 20,
  calories: 5,
};
const STUFFING_POTATO = {
  price: 15,
  calories: 10,
};
const TOPPING_SAUCE = {
  price: 15,
  calories: 0,
};
const TOPPING_MAYO = {
  price: 20,
  calories: 5,
};

class Hamburger {
  constructor() {
    this.size = null;
    this.stuffing = [];
    this.topping = [];
  }
  addSize(size) {
    this.size = size;
  }
  addStuffing(stuffing) {
    this.stuffing.push(stuffing);
  }
  addTopping(topping) {
    this.topping.push(topping);
  }

  calculatePrice() {
    let price = this.size.price;
    this.stuffing.forEach((stuffing) => {
      price += stuffing.price;
    });
    this.topping.forEach((topping) => {
      price += topping.price;
    });
    return price;
  }
  calculateCalories() {
    let calories = this.size.calories;
    this.stuffing.forEach((stuffing) => {
      calories += stuffing.calories;
    });
    this.topping.forEach((topping) => {
      calories += topping.calories;
    });
    return calories;
  }
}

document.getElementById("button").addEventListener("click", () => {
  const hamburger = new Hamburger();
  const myForm = document.getElementById("myForm");
  const smallSize = document.getElementById("small");
  const bigSize = document.getElementById("big");
  const cheese = document.getElementById("cheese");
  const salad = document.getElementById("salad");
  const potato = document.getElementById("potato");
  const spices = document.getElementById("spices");
  const mayo = document.getElementById("mayonnaise");
  let priceElement = document.getElementById("price");
  let caloriesElement = document.getElementById("calories");

  if (smallSize.checked) {
    hamburger.addSize(SIZE_SMALL);
  } else if (bigSize.checked) {
    hamburger.addSize(SIZE_BIG);
  }

  if (cheese.checked) {
    hamburger.addStuffing(STUFFING_CHEESE);
  }
  if (salad.checked) {
    hamburger.addStuffing(STUFFING_SALAD);
  }
  if (potato.checked) {
    hamburger.addStuffing(STUFFING_POTATO);
  }

  if (spices.checked) {
    hamburger.addTopping(TOPPING_SAUCE);
  }
  if (mayo.checked) {
    hamburger.addTopping(TOPPING_MAYO);
  }

  let totalPrice = hamburger.calculatePrice();
  let totalCalories = hamburger.calculateCalories();

  priceElement.innerText = totalPrice;
  caloriesElement.innerText = totalCalories;
});

document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("myForm").reset();
  document.getElementById("price").innerText = "0";
  document.getElementById("calories").innerText = "0";
});
