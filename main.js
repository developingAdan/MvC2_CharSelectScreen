function playAudio() {
    const audio = document.getElementById("myAudio");
    audio.play();
}

const stopButton = document.getElementById("stopButton");

stopButton.addEventListener("click", stopAudio);

function stopAudio() {
    const audio = document.getElementById("myAudio");
    audio.pause();
    audio.currentTime = 0;
    // console.log("hellooo?")
}

const selectedCharacters = [];
const selectedCharacters2 = [];

let player1SelectionComplete = false;

// Add click event listeners to character images
const characterImages = document.querySelectorAll('.grid-item');
// console.log(`character images are -- ${characterImages}`)
characterImages.forEach((img) => {
  img.addEventListener('click', handleCharacterSelect);
});

console.log(characterImages)

function updateSelectedList() {
  const selectedList = document.getElementById('selected-list');
  selectedList.innerHTML = '';

  selectedCharacters.forEach((character) => {
    const listItem = document.createElement('div');
    const img = document.createElement('img');
    img.src = character.image;
    img.alt = 'Selected Character';
    listItem.appendChild(img);
    selectedList.appendChild(listItem);
  });
  console.log(`selectedCharLength -- ${JSON.stringify(Number(selectedCharacters[0].id))}`)
}

function updateSelectedList2() {
    const selectedList = document.getElementById('selected-list2');
    selectedList.innerHTML = '';
  
    selectedCharacters2.forEach((character) => {
      const listItem = document.createElement('div');
      const img = document.createElement('img');
      img.src = character.image;
      img.alt = 'Selected Character';
      listItem.appendChild(img);
      selectedList.appendChild(listItem);
    });
    console.log(`selectedCharLength2 -- ${selectedCharacters2.length}`)
  }

function handleCharacterSelect(event) {
  const selectedImg = event.target;
  const selectedId = selectedImg.getAttribute('data-id');
  
  // Check if character is already selected for Player 2
  const isSelected2 = selectedCharacters2.find((character) => character.id === selectedId);
  if (isSelected2) {
    // Character is already selected for Player 2, do nothing or show an error message
    console.log(`Character already selected for Player 2`);
    return;
  }
  
  // Check if character is already selected for Player 1
  const isSelected1 = selectedCharacters.find((character) => character.id === selectedId);
  if (isSelected1) {
    // Character is already selected for Player 1, remove it from Player 1's selection
    console.log(`Character already selected for Player 1`);
  }
  
  // Add selected character to the list
  const selectedCharacter = { id: selectedId, image: selectedImg.src };

  // Check if the maximum number of characters is reached
  if (selectedCharacters.length === 3) {
    // Maximum number of characters reached for Player 1, set flag
    player1SelectionComplete = true;
  } 
  
  if (selectedCharacters2.length === 3) {
    // Maximum number of characters reached for Player 2
    alert('Each player has 3 characters!');
    // do something here! (probably?) maybe give a "Play" button option?
    return;
  }

  // Add selected character to the appropriate list
  if (!player1SelectionComplete) {
    selectedCharacters.push(selectedCharacter);
  } else {
    selectedCharacters2.push(selectedCharacter);
  }

  // Update the selected characters list on the page
  updateSelectedList();
  updateSelectedList2();

  // Add CSS class to the selected character image
  selectedImg.classList.add('selected-characters-container'); // probably a better place to put this
}



  

