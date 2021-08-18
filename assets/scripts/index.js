const ul = document.getElementById('ul');

const blueButton = document.getElementById('blueButton');
let textArea = document.getElementById('textArea');



blueButton.addEventListener('click', (event) => {
    if (textArea.value === "") {
        textArea.value = "Item vazio";
    }
    
    const li = `<li class="list-group-item d-flex justify-content-between">
    ${textArea.value} <button class="btn btn btn-danger">-</button>
  </li>`
    
    ul.lastElementChild.insertAdjacentHTML('beforebegin', li)
    textArea.value = "";
})

ul.addEventListener('click', (event) => {
    if (event.target.innerText === '-') {
        ul.removeChild(event.target.parentElement);
    }
})



