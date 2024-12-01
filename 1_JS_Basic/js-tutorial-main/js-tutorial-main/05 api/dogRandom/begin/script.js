// https://dog.ceo/api/breeds/image/random

const dogImageDiv = document.getElementById('dogImage')
const dogButton = document.getElementById('dogButton')

// Function to get a new dog image
// This function will be called when the button is clicked
// It will fetch a new dog image from the dog.ceo API
// and set the src attribute of the image to the URL of the dog image
// The URL of the dog image is in the 'message' property of the response data
const getNewDog = () => {
    console.log('getting new dog')
    // Use fetch to get a random dog image from the dog.ceo API
    fetch('https://dog.ceo/api/breeds/image/random')
    // Parse the JSON data from the response by Promise chaining
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // Set the src attribute of the image to the URL of the dog image
            dogImageDiv.innerHTML = `<img src="${data.message}" alt="dog">`
        })
}

dogButton.onclick = () => {
    getNewDog()
}
