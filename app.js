let kittens = []
loadKittens()
drawKittens()
console.log(kittens)

/**
 * Called when submitting the new Kitten Form
 * This method will pull data from the form
 * use the provided function to give the data an id
 * then add that data to the kittens list.
 * Then reset the form
 */
function addKitten(event) {
  event.preventDefault()
  let form = event.target

  let newKitten = {
    id: generateId(),
    name: form.name.value,
    mood: 'neutral',
    affections: 10,
  }

  let findCat = kittens.find(cat => cat.name == form.name.value)

  if(!findCat){
    kittens.push(newKitten)
    saveKittens()
    drawKittens()
  }

  form.reset()
}


function deleteKitten(id) {
  console.log({kittens: kittens, id: id});

  let r = kittens.indexOf(findKittenById(id))
  console.log(r);
  kittens.splice(r, 1)
  saveKittens()
  drawKittens()
}

/**
 * Converts the kittens array to a JSON string then
 * Saves the string to localstorage at the key kittens 
 */
function saveKittens() {
  window.localStorage.setItem("kittens", JSON.stringify(kittens))
}

/**
 * Attempts to retrieve the kittens string from localstorage
 * then parses the JSON string into an array. Finally sets
 * the kittens array to the retrieved array
 */
function loadKittens() {
  let storedKittens = JSON.parse(window.localStorage.getItem("kittens"))
    if(storedKittens){
      kittens = storedKittens
    }
}

/**
 * Draw all of the kittens to the kittens element
 */
function drawKittens() {
  let kittensElement = document.getElementById("kittens")
  let kittensTemplate = ""
  kittens.forEach(kitten => {
    kittensTemplate += `
      <div class="card text-center">
        <h3 class="text-light">${kitten.name}</h3>

          <div><img class="catImg" src="https://thiscatdoesnotexist.com/" alt="">
          </div>

          <p class="text-light text-left">Mood: ${kitten.mood}</p>
          <p class="text-light text-left">Affections: ${kitten.affections}</p>

          <div class="d-flex space-between">
          <button>Pet</button>
          <button>Catnip</button>
          <button onClick="deleteKitten('${kitten.id}')">Delete</button>
    </div>

  </div>
    `
  })
  kittensElement.innerHTML = kittensTemplate
}


/**
 * Find the kitten in the array by its id
 * @param {string} id 
 * @return {Kitten}
 */
function findKittenById(id) {
  let kitten = kittens.find(cat => cat.id == id)
  return kitten;
}


/**
 * Find the kitten in the array of kittens
 * Generate a random Number
 * if the number is greater than .5 
 * increase the kittens affection
 * otherwise decrease the affection
 * @param {string} id 
 */
function pet(id) {
}

/**
 * Find the kitten in the array of kittens
 * Set the kitten's mood to tolerant
 * Set the kitten's affection to 5
 * @param {string} id
 */
function catnip(id) {
}

/**
 * Sets the kittens mood based on its affection
 * @param {Kitten} kitten 
 */
function setKittenMood(kitten) {
}

/**
 * Removes all of the kittens from the array
 * remember to save this change
 */
function clearKittens(){
}

/**
 * Removes the welcome content and should probably draw the 
 * list of kittens to the page. Good Luck
 */
function getStarted() {
  document.getElementById("welcome").remove();
  console.log('Good Luck, Take it away')
}


// --------------------------------------------- No Changes below this line are needed

/**
 * Defines the Properties of a Kitten
 * @typedef {{name: string, mood: string, affection: number}} Kitten
 */


/**
 * Used to generate a random string id for mocked
 * database generated Id
 * @returns {string}
 */
function generateId() {
  return Math.floor(Math.random() * 10000000) + "-" + Math.floor(Math.random() * 10000000)
}

loadKittens();