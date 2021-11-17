// ***** main code *****

const btnPlay = document.getElementById('play');

// click on play btn
btnPlay.addEventListener('click', function(){
    
    const difficulty = parseInt(document.getElementById('difficulty').value);
    let blockN

    switch(difficulty) {
        case 1:

            blockN = 100;
            break;
        
        case 2:
            blockN = 81;
            break;

        case 3:
            blockN = 49;

    }

    console.log(blockN);

});






// ***** functions *****