// const h2 = document.createElement("h2");
// h2.textContent = "Hello there! My name is Alex and I am from Texas.";
// document.querySelector("body").appendChild(h2);


const input = document.getElementById('button');
input.addEventListener('click', function() {
  alert('I was clicked!');
  input.innerHTML = "hello friend!"
});

const mode = document.getElementById('mode');
mode.addEventListener('click', function() {
  let value = mode.innerHTML
  const h1 = document.getElementById('h1')
  const h2 = document.getElementById('h2')
  if (value === 'ON') {
    mode.innerHTML = "OFF"
    document.body.style.backgroundColor = "purple";
    h1.style.color = "white"
    h2.style.color = "white"
  } else {
    mode.innerHTML = "ON"
    document.body.style.backgroundColor = "#FDFD96"
    h1.style.color = "black"
    h2.style.color = "black"
    }
} )