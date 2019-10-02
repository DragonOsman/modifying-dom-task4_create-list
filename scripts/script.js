"use strict";
function createList () {
  const unorderedList = document.createElement("ul");
  let listItemContent;
  while ((listItemContent = prompt("Enter a list item; press \"Cancel\" to stop"))) {
    const listItem = document.createElement("li");
    listItem.textContent = listItemContent;
    unorderedList.append(listItem);
  }
  document.body.append(unorderedList);
}

createList();
