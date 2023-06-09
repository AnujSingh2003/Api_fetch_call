document.addEventListener('DOMContentLoaded', fetchData);

function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
    
      console.log(data);
      
      updateDOM(data);
    })
    .catch(error => {
     
      console.error('Error:', error);
    });
}

function updateDOM(data) {
  const container = document.getElementById('data-container');
  data.forEach(item => {
    const element = document.createElement('div');
    element.textContent = item.name;
    container.appendChild(element);
  });
}
