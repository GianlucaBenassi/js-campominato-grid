// ***** main code *****

const btnPlay = document.getElementById('play');

// click on play btn
btnPlay.addEventListener('click', function(){
    
    const difficulty = parseInt(document.getElementById('difficulty').value);
    let blockN;
    let diffClass;

    switch(difficulty) {
        case 1:

            blockN = 100;
            diffClass = 'easy';
            break;
        
        case 2:
            blockN = 81;
            diffClass = 'medium';
            break;

        case 3:
            blockN = 49;
            diffClass = 'hard';

    }

    blockGenerator(diffClass, blockN);

});






// ***** functions *****

// generate blocks
const blockGenerator = (diff, num) => {

    const boxContainer = document.querySelector('main .container');

    // clear container befor add blocks
    boxContainer.innerHTML = '';

    for (let i = 1; i <= num; i++) {
        const divBox = document.createElement('div');
        divBox.classList.add('box', diff);
        divBox.innerText = i;
        boxContainer.appendChild(divBox);
    }

}