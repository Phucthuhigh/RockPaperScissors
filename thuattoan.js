function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function consoleMessage(message) {
    msg.className = 'message';
    msg.textContent = message;
    app.appendChild(msg);
}

function consoleImg(result,com) {
    switch(com) {
        case 1:
            result.src = 'https://res.cloudinary.com/phucthuhigh/image/upload/v1627473190/RockPaperScissorsGame/paper_ru3amg.png';
            break;
        case 2:
            result.src = 'https://res.cloudinary.com/phucthuhigh/image/upload/v1627473190/RockPaperScissorsGame/scissors_k5vs2q.png';
            break;
        case 0:
            result.src = 'https://res.cloudinary.com/phucthuhigh/image/upload/v1627473190/RockPaperScissorsGame/rock_pfk455.png';
            break;
    }
    resultBox.appendChild(result);
}

function consoleResult(kq, com, player) {
    switch(kq) {
        case 1:
            consoleImg(resultOfPlayer,player);
            consoleImg(resultOfComputer,com);
            consoleMessage('Bạn và máy hòa');
            break;
        case 2:
            consoleImg(resultOfPlayer,player);
            consoleImg(resultOfComputer,com);
            consoleMessage('Chúc Mừng Bạn Đã Thắng!!');
            break;
        case 0:
            consoleImg(resultOfPlayer,player);
            consoleImg(resultOfComputer,com);
            consoleMessage('Bạn thua! Hãy thử lại lần nữa');
            break;
    }
}

let rePlay = document.createElement('button');
let btnElements = document.querySelectorAll('#app #choose .btn');
let resultBox = document.querySelector('#app #result');
let msg = document.createElement('p');
msg.className = 'message';
let resultOfComputer = document.createElement('img');
resultOfComputer.className = 'resultComputer';
let resultOfPlayer = document.createElement('img');
resultOfPlayer.className = 'resultPlayer';

btnElements.forEach((btnElement) => {
    btnElement.addEventListener('click',() => {
        let computer = getRandomInt(3);
        let kq;
        if (computer == Number(btnElement.id)) {
            kq = 1;
        } else if (Number(btnElement.id) == 0) {
            if (computer == 1) {
                kq = 0;
            } else {
                kq = 2;
            }
        } else if (Number(btnElement.id) == 1) {
            if (computer == 0) {
                kq = 2;
            } else {
                kq = 0;
            }
        } else if (Number(btnElement.id) == 2) {
            if (computer == 1) {
                kq = 2;
            } else {
                kq = 0;
            }
        }
        consoleResult(kq,computer,Number(btnElement.id));
        rePlay.className = 'replay';
        rePlay.textContent = 'Chơi lại';
        app.appendChild(rePlay);
        rePlay.addEventListener('click',() => {
            location.reload();
        })
        for (let i in btnElements) {
            btnElements[i].disabled = true;
            btnElements[i].style.cursor = 'no-drop';
            btnElements[i].style.opacity = 0.5;
        }
    })
})

