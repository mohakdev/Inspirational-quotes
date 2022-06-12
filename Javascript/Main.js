const Quote = document.getElementById("quote");
const Cite = document.getElementById("cite");
const image = document.getElementById("image");
image.src = "https://source.unsplash.com/random/1280x720/?scenery";
updateQuote();
async function updateQuote() {
    // Fetch a random quote from the Quotable API
    console.log("Fetching quote. Hang on");
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
        // Update DOM elements
        //Cite.innerText = "-" + data.author;
        Quote.innerHTML = data.content + '\n <span id="cite"> -' + data.author + '</span>';
    } else {
        Quote.textContent = "An error occured";
        console.log(data);
    }
}

