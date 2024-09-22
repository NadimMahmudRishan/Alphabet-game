function hideSectionById(elementId) {
    const item = document.getElementById(elementId);
    item.classList.add('hidden');
}
function showSectionById(elementId) {
    const item = document.getElementById(elementId);
    item.classList.remove('hidden');
}

// Random Alphabet
function genarateRandomAlphabet() {
    const alphabetString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    console.log(alphabet);
    return alphabet;
}
// Add Key color by id
function addkeyColor(alphabet) {
    const element = document.getElementById(alphabet);
    element.classList.add('bg-amber-500');
}
// Remove Key color by id
function romevekeyColor(alphabet) {
    const element = document.getElementById(alphabet);
    element.classList.remove('bg-amber-500');
}

// Score Update Function
function ScoreUpdate() {
    const socreElement = document.getElementById('score');
    const score = socreElement.innerText;
    const currentScore = parseInt(score);
    const updateScore = currentScore + 1;
    socreElement.innerText = updateScore;
}

// Life loss
function lossLife(keyChake){
    const lifeElement = document.getElementById('life');
    const life = lifeElement.innerText;
    const lifeCount = parseInt(life);
    if (lifeCount > 0)
    {
        const updateLife = lifeCount - 1;
        lifeElement.innerText = updateLife;
    }
    else
    {
        romevekeyColor(keyChake);
        hideSectionById('play-screen');
        // Update & Show final Socre
        const socreElement = document.getElementById('score');
        const score = socreElement.innerText;
        const finalScoreElement = document.getElementById('finalScore');
        finalScoreElement.innerText = score;
        showSectionById('scoreSection');
        
    }
}

// Set life initially
function setLife(){
    const lifeElement = document.getElementById('life');
    lifeElement.innerText=3;
}

// Set initial score
function setInitialScore(){
    const socreElement = document.getElementById('score');
    socreElement.innerText=0;
}

// Reset all button color
function resetButtonColor(){
    const btnElement = document.getElementsByClassName('kbd');
    btnElement.classList.remove('bg-amber-500');
}