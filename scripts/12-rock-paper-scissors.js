// Keep variable inside the function
        // Function = let us reuse code
        // Scope = where a variable is accessible
        // Global scope = accessible everywhere
        // Local scope = accessible only within the function
        // Block scope = accessible only within the block
        // Return = gives back a value from a function
        // Parameters = variables that are passed into a function
        // Improve the code by keeping the computerMove variable inside the function

        // score = { wins: 0, loses: 0, ties: 0 }
        let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, loses: 0, ties: 0 };


        updateScore();

        /*
        if (!score) {
            score = { wins: 0, loses: 0, ties: 0 };
        }
        */

        let isAutoPlaying = false;
        let intervalId;

        function autoPlay() {
            if (!isAutoPlaying) {
                intervalId = setInterval(() => {
                    const playerMove = pickComputerMove();
                    playGame(playerMove);
                }, 1000);
                isAutoPlaying = true;
            } else {
                clearInterval(intervalId);
                isAutoPlaying = false;
            }
        }

        document.querySelector('.js-rock-button').addEventListener('click', () => {
            playGame('Rock');
        });

        document.querySelector('.js-paper-button').addEventListener('click', () => {
            playGame('Paper');
        });

        document.querySelector('.js-scissors-button').addEventListener('click', () => {
            playGame('Scissors');
        });

        document.body.addEventListener('keydown', (event) => {
            if (event.key === 'r') {
                playGame('Rock');
            } else if (event.key === 'p') {
                playGame('Paper');
            } else if (event.key === 's') {
                playGame('Scissors');
            }
        });

        function playGame(playerMove) {
            const computerMove = pickComputerMove();

            let result = '';

            if (playerMove === 'Rock') {
                if (computerMove === 'Rock') {
                    result = 'tie';
                } else if (computerMove === 'Paper') {
                    result = 'You lose';
                } else {
                    result = 'You win';
                }

            } else if (playerMove === 'Paper') {
                if (computerMove === 'Rock') {
                    result = 'You win';
                } else if (computerMove === 'Paper') {
                    result = 'tie';
                } else {
                    result = 'You lose';
                }

            } else {
                if (computerMove === 'Rock') {
                    result = 'You lose';
                } else if (computerMove === 'Paper') {
                    result = 'You win';
                } else {
                    result = 'tie';
                }
            }

            if (result === 'You win') {
                score.wins++;
            } else if (result === 'You lose') {
                score.loses++;
            } else {
                score.ties++;
            }

            // Store the score in the local storage
            localStorage.setItem('score', JSON.stringify(score));

            updateScore();

            document.querySelector('.js-result').innerHTML = result;

            document.querySelector('.js-moves').innerHTML = `You
                    <img src="images/${playerMove}-emoji.png" class="move-icon">
                    :
                    <img src="images/${computerMove}-emoji.png" class="move-icon">
                    Computer`;
        }

        function updateScore() {
            document.querySelector('.js-score')
                .innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
        }
        
        function pickComputerMove() {
            const randomNumber = Math.random();

            // Scope of the variable computerMove is limited to the if else block
            let computerMove = '';
    
            // Devide the random number into three equal parts
            // To get a random number between 0 and 0.33, we can check if the random number is greater than or equal to 0 and less than 0.33
            if (randomNumber >= 0 && randomNumber < 0.33) {
                computerMove = 'Rock';
            } else if (randomNumber >= 0.33 && randomNumber < 0.66) {
                computerMove = 'Paper';
            } else {
                computerMove = 'Scissors';
            }
        
            console.log(computerMove);
            
            // Return the computer move
            return computerMove;
        }