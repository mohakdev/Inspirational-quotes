const Quote = document.getElementById("quote");
const Cite = document.getElementById("cite");

updateQuote();

async function updateQuote() {
    // Fetch a random quote from the Quotable API
    console.log("Fetching quote. Hang on");
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
        // Update DOM elements
        Quote.textContent = data.content;
        Cite.textContent = "-" + data.author;
    } else {
        Quote.textContent = "An error occured";
        console.log(data);
    }
}
