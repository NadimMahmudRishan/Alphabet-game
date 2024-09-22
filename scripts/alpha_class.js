function continueGame() {
    // Genarate a ramdom alphabet
    const alphabet = genarateRandomAlphabet();
    // Display Random Alphabet
    const AlphabetP = document.getElementById("alphabetId");
    AlphabetP.innerText = alphabet;
    addkeyColor(alphabet);
}

// Play button
function play() {
    // resetButtonColor();
    setLife();
    setInitialScore()
    hideSectionById('Home-screen');
    showSectionById('play-screen');
    continueGame();
}

// Handel key press
function handelkeyboared(event) {
    const key = event.key;
    console.log(key);
    const currentAlphabet = document.getElementById('alphabetId');
    const keyChake = currentAlphabet.innerText;
    const lowerCase = keyChake.toLocaleLowerCase();
    if (key === lowerCase) {
        ScoreUpdate();
        romevekeyColor(keyChake);
        continueGame();
    }
    else{
        lossLife(keyChake);
    }

}
// Kye listener
document.addEventListener('keyup', handelkeyboared);




// function playNow(){

//     // home hide
//     const homeSection = document.getElementById('Home-screen');
//     homeSection.classList.add('hidden');

//     // Playing unhide
//     const playSection = document.getElementById('play-screen');
//     playSection.classList.remove('hidden');
// }