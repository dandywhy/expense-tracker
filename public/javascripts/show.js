function show(anything, Id) {
  document.querySelector('.textBox').value = anything
  window.location.href = `/category/${Id}`
}

let dropdown = document.querySelector('.dropdown')
dropdown.onclick = () => dropdown.classList.toggle('active')