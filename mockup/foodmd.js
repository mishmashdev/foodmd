function init() {
  let addButton = document.getElementById("add-button");
  let foodInput = document.getElementById("food-input");
  let foods = [];
  let foodListDiv = document.getElementById("food-list");

  addButton.addEventListener("click", () => {
    let foodToAdd = foodInput.value;
    if(foodToAdd !== "") {
      foods.push(foodToAdd);
      displayFoodList(foods, foodListDiv);
      foodInput.value = "";
    }
  });

  foodInput.addEventListener("keydown", (event) => {    
    if(event.key === "Enter") {
      addButton.click();
      event.preventDefault();
    }
  });

  // document.getElementById("food-entry-form").addEventListener("keydown", (event) => {
  //   console.log(event.key);
  //   if(event.key === "Enter") {
  //     console.log("GOT IT");
  //     event.preventDefault();
  //   }
  // });
  displayFoodList(foods, foodListDiv);
}

function displayFoodList(foodList, element) {
  if(foodList.length === 0) {
    let h3 = document.createElement("h3");
    h3.innerText = "No Foods Added Yet.";
    element.appendChild(h3);
    console.log("no foods yet");
    return;
  }
  let foodUl = document.createElement("ul");
  foodUl.classList.add("food-list");
  
  foodList.forEach(food => {
    let li = document.createElement("li");
    li.innerText = food;
    li.classList.add("food-list-item");
    foodUl.appendChild(li);    
  });
  element.innerHTML = "";
  element.appendChild(foodUl);
} 

init();