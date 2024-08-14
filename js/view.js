import Item from "./Item.js";
import { getShoppingList } from "./model.js";

const shoppingListDiv = document.querySelector(".shopping-list");

export const renderShoppingList = () => {
  const domNodes = getShoppingList().map(({ item, priority, id }) => {
    return Item(item, priority, id);
  });
  shoppingListDiv.innerHTML = domNodes.join('');
};
