const btn = document.querySelector('button');
const txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);


function updateBtn(){   

    document.querySelector('.container').style.background = 'darkblue';
    document.querySelector('.container').style.color = 'blue'

    btn.style.background = 'blue';
    btn.style.color = 'white';
    btn.style.font = '20px';

    if(btn.textContent === 'Start Machine'){
        btn.textContent = 'Stop Machine';
        txt.textContent = 'The Machine has Started!';
    }else {
        btn.textContent = 'Start Machine';
        txt.textContent = 'The machine has stopped.';
    }
}



