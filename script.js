const apiUrl = "https://cataas.com/cat";

const catImage = document.getElementById("catImage");
const button = document.getElementById("btn");

async function getCat() {
    try {
      // Add timestamp to avoid browser caching
      catImage.src = `${apiUrl}?${Date.now()}`;
      console.log("new cat loaded");
    } catch (error) {
    
      console.log(error);
    }
}
 
button.addEventListener("click", getCat);

// Button click event
getCat();
