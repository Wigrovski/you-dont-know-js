const books = document.querySelectorAll('.book')
const backGroung = document.querySelector('body')
const booksItems = books[4].querySelector('a')
const adv = document.querySelector('.adv')
const list1 = books[0].querySelectorAll('li') //Главы книги 2
const list2 = books[5].querySelectorAll('li') //Главы книги 5
const newItem = document.createElement('li')
const book8List = books[2].querySelector('ul')
book8List.insertAdjacentHTML('beforeend', '<li>Глава 8: За пределами ES6</li>')
const book8NewList = books[2].querySelectorAll('li')

books[5].after(books[2])
books[5].before(books[3])
books[1].after(books[0])
backGroung.style = 'background-image: url(./image/you-dont-know-js.jpg)'

booksItems.innerHTML = 'Книга 3. this и <b>Прототипы</b>  Объектов'
adv.remove()

list1[9].after(list1[2])
list1[7].after(list1[9])
list1[3].after(list1[6])
list1[6].after(list1[8])
list2[1].after(list2[9])
list2[4].after(list2[2])
list2[7].after(list2[5])

book8NewList[10].after(book8NewList[9])



