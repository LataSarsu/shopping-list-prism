//import Item from "./Item.js";
import { addToShoppingList } from "./model.js";
import { renderShoppingList } from "./view.js";

const itemInput = document.querySelector("input[name='itemInput']");
const shoppingListDiv = document.querySelector('.shopping-list');
const completedDiv = document.querySelector('.completed');
const clearCompletedBtn = document.querySelector('#clear-completed');

//shoppingListDiv.innerHTML = Item('Notepads', 'high', 1);
itemInput.addEventListener('keyup', function(evt){
    if(evt.key === 'Enter'){
        //add to shopping list
        addToShoppingList(evt.target.value);
        //update the view
        renderShoppingList();
        this.value = '';
    }
});

shoppingListDiv.addEventListener('click', function(evt){
    //Priority
    if(evt.target.parentElement.classList.contains('priority-control')){
        const priority = evt.target.classList.value;
        const itemId = evt.target.parentElement.parentElement.getAttribute('data-id');
        console.log(itemId, priority);
    }
})