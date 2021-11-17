// ***** main code *****

const btnPlay = document.getElementById('play');

// click on play btn
btnPlay.addEventListener('click', function(){
    
    const difficulty = parseInt(document.getElementById('difficulty').value);
    const boxContainer = document.querySelector('main .container');
    const startP = document.getElementById('start-text');
    const gameResult = document.getElementById('game-result');
    let blockN;
    let diffClass;

    startP.classList.add('d-none');
    boxContainer.classList.remove('d-none');
    gameResult.classList.add('d-none')

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

    
    //determinate the position of mines
    const minePos = randomMine(blockN);
    console.log(minePos);
    
    // clear container befor add blocks
    boxContainer.innerHTML = '';
    boxContainer.classList.remove('no-click')

    //declare a successfull click counter
    let clickCounter = 0;

    for (let i = 1; i <= blockN; i++) {

        //create block
        const divBox = document.createElement('div');
        divBox.classList.add('box', diffClass);
        divBox.innerText = i;
        boxContainer.appendChild(divBox);

        //add click event to the block
        divBox.addEventListener('click', function(){

            // check if is a mine
            if (checkArray(minePos, i)) {

                //activate all mines
                for (let k = 1; k <= blockN; k++) {
                    if (checkArray(minePos, k)) {
                        boxContainer.children[k - 1].classList.add('mine');
                    }
                }

                //display game result
                boxContainer.classList.add('no-click');
                gameResult.classList.remove('d-none')
                gameResult.innerHTML = 'Hai perso! Punteggio: ' + clickCounter;

            } else {

                //if box not clicked add class and increase counter
                if (!this.classList.contains('clicked')) {

                    this.classList.add('clicked')
                    clickCounter++;

                }

                //if clicked all boxes
                if (blockN - minePos.length == clickCounter) {
                    boxContainer.classList.add('no-click');
                    gameResult.classList.remove('d-none')
                    gameResult.innerHTML = 'Hai vinto! Punteggio: ' + clickCounter;
                }

            }



        });

    }
    

});




// ***** functions *****

// generate the position of mines
const randomMine = (max) => {

    const minePosition = [];
    let i = 0;

    while (i < 14) {
        //generate random number
        const rndNum = Math.floor(Math.random() * max ) + 1;

        //check if the number exist in the array
        let check = false;

        for (let k = 0; k < minePosition.length; k++) {

            if (rndNum == minePosition[k]) {
                check = true;
            }

        }

        //if not exist add the number and increase i
        if (!check) {
            minePosition.push(rndNum);
            i++;
        }

    }

    return minePosition.sort((a, b) => a - b)

}


// check number in array
const checkArray = (arr, num) => {
    
    for (let i = 0; i < arr.length; i++) {
        if (num == arr[i]) {
            return true
        }
    }

    return false

}