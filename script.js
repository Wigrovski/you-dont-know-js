const btn = document.getElementById('btn')
const text = document.getElementById('text')
const square = document.getElementById('square')
const circle = document.getElementById('circle')
const range = document.getElementById('range')
const span = document.getElementById('range-span')
const eBtn = document.getElementById('e_btn')


const val = function(e) {
    span.textContent = e.target.value
    circle.style.width = e.target.value + '%'
    circle.style.height = e.target.value + '%'
}

range.addEventListener('input', val)

btn.addEventListener('click', function() {
    let color = text.value
    square.style.backgroundColor = color
})

eBtn.addEventListener('click', function(e) {
    e.stopPropagation()
    eBtn.style.display = 'none'
})




