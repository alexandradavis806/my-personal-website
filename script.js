const h2 = document.createElement("h2");
h2.textContent = "Hello there! My name is Alex and I am from Texas.";
document.querySelector("body").appendChild(h2);


const input = document.getElementById('button');
input.addEventListener('click', function() {
  alert('I was clicked!');
  input.innerHTML = "hello friend!"
});

