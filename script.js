const modal = document.querySelector('.modal')
const btnModal = document.querySelector('#btn-modal')
const closeModal = document.querySelector('#close-modal')
const newCatBtn = document.querySelector('#newCatBtn')

async function Cat(url) {
    const res = await fetch(url)
    const cat = await res.json()
    console.log(cat)
    displayCat(cat[0])
}

Cat('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1')

function displayCat(arr){
    const container = document.querySelector('.modal__container')
    const img = document.createElement('img')
    img.src = arr.url
    const p = document.createElement('p')
    p.textContent = `Cat ID: ${arr.id}`
    container.append(img, p)
}


btnModal.addEventListener('click', () => {
    modal.classList.add('active-modal')
})

closeModal.addEventListener('click', () => {
    modal.classList.remove('active-modal')
})

modal.addEventListener('click', (event) => {
    const container = document.querySelector('.modal__container')
    if (!container.contains(event.target)) {
        modal.classList.remove('active-modal')
    }
})