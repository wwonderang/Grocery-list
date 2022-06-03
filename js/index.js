document.querySelector('#eraser').addEventListener('click', () => {
  document.querySelector('#allItems').textContent = '';
});

document.querySelector('#userInput').addEventListener('keydown', (event) => {
  if(event.key === 'Enter') {
  addItem();
}});

function addItem(){
  const item = document.createElement('h2');
  item.textContent = "- " + document.querySelector('#userInput').value;

  item.addEventListener('click', () => {
      item.style.textDecoration = 'line-through';
});

  document.querySelector('#allItems').appendChild(item);
  document.querySelector('#userInput').value = "";
}