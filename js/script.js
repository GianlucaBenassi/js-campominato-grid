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
    let clickCounter = 0;

    //determinate the position of mines
    const minePos = randomMine(num);
    console.log(minePos);

    // clear container befor add blocks
    boxContainer.innerHTML = '';

    for (let i = 1; i <= num; i++) {

        //create block
        const divBox = document.createElement('div');
        divBox.classList.add('box', diff);
        divBox.innerText = i;
        boxContainer.appendChild(divBox);

        //add click event to the block
        divBox.addEventListener('click', function(){

            // check if is a mine
            if (checkArray(minePos, i)) {
                this.classList.add('mine');
            } else {
                if (!this.classList.contains('clicked')) {
                    this.classList.add('clicked')
                    clickCounter++;
                    console.log(clickCounter + ' ' + i);
                }
            }

        });

    }

}


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