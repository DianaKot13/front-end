

updated_script_content = ''
const root = document.querySelector(`#root`)

let sliderIndex = 0;

const images = [ 
    'https://images.pexels.com/photos/20787/pexels-photo.jpg?cs=srgb&dl=pexels-kmerriman-20787.jpg&fm=jpg',
    'https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?cs=srgb&dl=pexels-didsss-1276553.jpg&fm=jpg',
    'https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_640.jpg',
    'https://res.cloudinary.com/jerrick/image/upload/v1681411655/64384e47eab5fb001d257c48.jpg'
]

const frame = document.createElement('div');
const cards = document.createElement('div');
const triggers = document.createElement('div');

const leftBtn = document.createElement('button');
const rightBtn = document.createElement('button');

leftBtn.innerText = '<';
rightBtn.innerText = '>';

triggers.classList.add('trigger');

triggers.append(leftBtn, rightBtn);
frame.append(triggers);

frame.classList.add('frame');
cards.classList.add('cards');



for (let i = 0; i < images.length; i++){
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundImage = `url("${images[i]}")`;
    cards.append(card);
}

frame.append(cards);
root.append(frame);

function updateRoundButtons() {
    const allButtons = document.querySelectorAll('.rounds button');
    allButtons.forEach(button => button.classList.remove('active'));
    allButtons[sliderIndex].classList.add('active');
}

function goLeft(){

    if (sliderIndex !== 0){
        sliderIndex--;
        cards.style.left = `${-1 * sliderIndex*500}px`
        updateRoundButtons(); 
    }    
}

function goRight(){
    if (sliderIndex < images.length - 1){
        sliderIndex++;
        cards.style.left = `${-1 * sliderIndex*500}px`
        updateRoundButtons(); 
    }
}

leftBtn.addEventListener('click', goLeft);
rightBtn.addEventListener('click', goRight);


function createRounds(){
    const container = document.createElement('div');
    container.classList.add('rounds');

    for (let i = 0; i < images.length; i++){
        const button = document.createElement('button');
        container.append(button);

        button.addEventListener('click', function(){
            sliderIndex = i;
            cards.style.left = `${-1 * sliderIndex*500}px`
            
            const allButtons = button.parentElement.children;

            for (let j = 0 ; j < allButtons.length; j++){
                allButtons[j].classList.remove('active');
            }

            button.classList.add('active')
        })

    }

    frame.append(container);
}


createRounds();
