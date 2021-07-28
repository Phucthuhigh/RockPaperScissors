let app = document.querySelector('#app');
let choose = document.createElement('div');
let header = document.createElement('h1');
header.innerHTML = 'Trò chơi kéo búa bao'.toUpperCase();
header.id = 'header';
app.appendChild(header);
choose.id = 'choose';
app.appendChild(choose);
let result = document.createElement('div');
result.id = 'result';
app.appendChild(result);

let buttons = [
    {
        tagName: 'button',
        className: 'btn rock',
        id: '0'
    },
    {
        tagName: 'button',
        className: 'btn paper',
        id: '1'
    },
    {
        tagName: 'button',
        className: 'btn scissors',
        id: '2'
    }
];

buttons.map((button) => {
    let btnElement = document.createElement(`${button.tagName}`);
    btnElement.id = button.id;
    btnElement.className = button.className;
    return choose.appendChild(btnElement);
})

let imgs = [
    {
        tagName: 'img',
        className: 'imgGame rock',
        src: 'https://res.cloudinary.com/phucthuhigh/image/upload/v1627473190/RockPaperScissorsGame/rock_pfk455.png',
        alt: 'rock'
    },
    {
        tagName: 'img',
        className: 'imgGame paper',
        src: 'https://res.cloudinary.com/phucthuhigh/image/upload/v1627473190/RockPaperScissorsGame/paper_ru3amg.png',
        alt: 'paper'
    },
    {
        tagName: 'img',
        className: 'imgGame scissors',
        src: 'https://res.cloudinary.com/phucthuhigh/image/upload/v1627473190/RockPaperScissorsGame/scissors_k5vs2q.png',
        alt: 'scissors'
    }
];

for (let i in imgs) {
    let btnElement = document.querySelector(`#app #choose .${buttons[i].className.substring(4)}`);
    let imgElement = document.createElement('img');
    imgElement.className = imgs[i].className;
    imgElement.src = imgs[i].src;
    imgElement.alt = imgs[i].alt;
    btnElement.appendChild(imgElement);
}