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
const characterImages = document.querySelectorAll('.character img');
characterImages.forEach((img) => {
  img.addEventListener('click', handleCharacterSelect);
});

console.log(characterImages)

function handleCharacterSelect(event) {
  const selectedImg = event.target;
  const selectedId = selectedImg.getAttribute('data-id');
  console.log(`this is the first handleCharacter function running ${selectedId}`)

  // Check if character is already selected
  const isSelected = selectedCharacters.find((character) => character.id === selectedId);
  if (isSelected) {
    // Character is already selected, do nothing or show an error message
    return;
  }

  // Add selected character to the list
  const selectedCharacter = { id: selectedId, image: selectedImg.src };
//   selectedCharacters.push(selectedCharacter);

  console.log(`yoooo -- ${selectedCharacters.length}`)

  // Check if the maximum number of characters is reached
  if (selectedCharacters.length === 3) {
    // Maximum number of characters reached for Player 1, set flag and clear selection array
    player1SelectionComplete = true;
    // selectedCharacters.length = 0;
  } else if (selectedCharacters2.length === 3) {
    // Maximum number of characters reached for Player 2, do nothing
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
}


// function handleCharacterSelect2(selectedImage) {
//     const selectedImg = selectedImage.target;
//     const selectedId = selectedImg.getAttribute('data-id');
//     console.log(`this is the second ${selectedId}`)
  
//     // Check if character is already selected
//     const isSelected = selectedCharacters2.find((character) => character.id === selectedId);
//     if (isSelected) {
//       // Character is already selected, do nothing or show an error message
//       return;
//     }
  
//     // Check if the maximum number of characters is reached
//     if (selectedCharacters2.length == 3) {
//       // Maximum number of characters reached, do nothing or show an error message
//       return;
//     }
  
//     // Add selected character to the list
//     const selectedCharacter = { id: selectedId, image: selectedImg.src };
//     selectedCharacters2.push(selectedCharacter);
  
//     // Update the selected characters list on the page
//     updateSelectedList2();
//   }

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
  }


