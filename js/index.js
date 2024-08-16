//import Item from "./Item.js";
import {
  addToShoppingList,
  setPriority,
  removeItem,
  addToCompletedDiv,
  clearCompleted,
  bootUp,
} from "./model.js";
import { renderShoppingList, renderCompletedList } from "./view.js";
//import { setPriority } from "./model.js";

const itemInput = document.querySelector("input[name='itemInput']");
const shoppingListDiv = document.querySelector(".shopping-list");
const completedDiv = document.querySelector(".completed");
const clearCompletedBtn = document.querySelector("#clear-completed");

//shoppingListDiv.innerHTML = Item('Notepads', 'high', 1);
itemInput.addEventListener("keyup", function (evt) {
  if (evt.key === "Enter") {
    //add to shopping list
    addToShoppingList(evt.target.value);
    //update the view
    renderShoppingList();
    this.value = "";
  }
});

shoppingListDiv.addEventListener("click", function (evt) {
  //Priority
  if (evt.target.parentElement.classList.contains("priority-control")) {
    const priority = evt.target.classList.value;
    const itemId =
      evt.target.parentElement.parentElement.getAttribute("data-id");
    //console.log(itemId, priority);
    //setPriority
    setPriority(itemId, priority);
    // Render View
    renderShoppingList();
  }
  //Remove
  if (evt.target.classList.contains("remove-btn")) {
    const itemId = evt.target.parentElement.getAttribute("data-id");
    // if the item is removed, update the view
    const confirm = window.confirm("Do you really want to delete this item?");
    // if (removeItem(itemId, confirm)) {
    //   renderShoppingList();
    // }
    if (confirm) {
      removeItem(itemId);
      renderShoppingList();
    }
  }
});

shoppingListDiv.addEventListener("dragstart", function (evt) {
  if (evt.target.classList.contains("item")) {
    const getId = evt.target.getAttribute("data-id");
    evt.dataTransfer.setData("text/plain", getId);
  }
});

completedDiv.addEventListener("drop", function (evt) {
  const itemId = evt.dataTransfer.getData("text/plain");
  if (itemId) {
    // Add to completed list
    addToCompletedDiv(itemId);
    // Update the view for shopping list
    renderShoppingList();
    // Update completed task list
    renderCompletedList();
  }
});

completedDiv.addEventListener("dragover", function (evt) {
  evt.preventDefault();
});

clearCompletedBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  clearCompleted();
  renderCompletedList();
});

// Immediately invoked function expressions (IIFEs)
(() => {
  bootUp();
  renderShoppingList();
  renderCompletedList();
})();
