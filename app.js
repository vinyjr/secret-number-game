let listOfSecretNumbersDrawn = [];
let maxSecretNumbersOnList = 100;
let secretNumber = getSecretNumber();
let playerAttempts = 1;

function message(tag, text) {
    let input = document.querySelector(tag);
    input.innerHTML = text;                
}
function initialMessage(){
    message('h1', 'DESCUBRA O NÚMERO SECRETO');
    message('p', 'Escolha um número entre 1 e 100:');
}

initialMessage();

function checkUserAttempt() {
    let userAttempt = document.querySelector('input').value;
    if (userAttempt == secretNumber){
        message('h1', 'ACERTOU!');
        let wordAttempt = playerAttempts > 1 ? 'tentativas' : 'tentativa';
        let attemptMessage = `Você acertou o número secreto com ${playerAttempts} ${wordAttempt}!`;
        message('p', attemptMessage);
        document.getElementById('restart').removeAttribute('disabled');
    } else {
        message('h1', 'TENTE NOVAMENTE!' );
        if (secretNumber > userAttempt){        
            message('p', 'O número secreto é maior!');
        } else {
            message('p', 'O número secreto é menor!');
        }
        playerAttempts++;
        clearInput();
    }
}
function getSecretNumber() {
    let chosenNumber = parseInt(Math.random() * maxSecretNumbersOnList + 1); 
    let setOfValuesOnList = listOfSecretNumbersDrawn.length;

    if (setOfValuesOnList == maxSecretNumbersOnList) {
        listOfSecretNumbersDrawn = [];
    }
    if (listOfSecretNumbersDrawn.includes(chosenNumber)){
        return getSecretNumber();
    } else {
        listOfSecretNumbersDrawn.push(chosenNumber);
        console.log(listOfSecretNumbersDrawn);
        return chosenNumber;
    }
}
function clearInput() {
    userAttempt = document.querySelector('input');
    userAttempt.value = ''; 
}
function reloadGame(){
    let secretNumber = getSecretNumber();
    clearInput();
    playerAttempts = 1
    initialMessage();
    document.getElementById('restart').setAttribute('disabled', true);
}