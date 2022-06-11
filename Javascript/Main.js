const Quote = document.getElementById("quote");
const Cite = document.getElementById("cite");
const image = document.getElementById("image");
updateQuote();
image.src = "https://source.unsplash.com/random/1280x720/?scenery";
console.log("finished");
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


//function getImage() {
//    const clientId = "ql0eOYLB6Yh-pMlpk_Bw4_UZFSqDU5nYTuoNZESpSDQ";
//    const query = "nature";
//    
//    const url = "https://api.unsplash.com/photos/random/?client_id=" + clientId + "&query=" + query;
//    console.log("Fetching the image");
//    fetch(url)
//        .then(function (data) {
//            return data.json();
//        })
//        .then(function (data)
//        {
//            console.log(data);
//            console.log("Screen Width -> " + screen.width + " Screen Height -> " + screen.height);
//            image.src = data.urls.full; + "&fit=crop&w=1280&h=720";
//        });
//}