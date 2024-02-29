//api to typewrite the poem//
function displayPoem(response) {
    console.log("poem generated");
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
});
    
}
//instructions to generate the poem//
function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "927adff4309ccc33tb7fd3o104741c05";
    const context = "You are an expert in women's rights and feminism, possessing profound knowledge of their achievements and cultural contributions worldwide. Your expertise extends to identifying the finest books, poetry, and movies directed or written by women, enabling you to offer insightful recommendations. All information provided will adhere to the following guidelines: Each line will be separated by a <br /> tag. The woman's name will be displayed in <strong> tags and on a separate line for emphasis. When presenting movies and achievements, display the name in <strong> tags and explain what it is on a separate line. Start with the movie's name followed by the woman's name and a brief description. For poems, refrain from providing the name or title. Instead, display the author's name at the end on a separate line in <strong> tags. Content by an 'unknown author' should not be displayed. Ensure only one answer per query. Limit answers to 400 characters. Please ensure attention to detail and adherence to these instructions for a polished and accurate presentation."
    let prompt = `User instructions: Show a informations written by women about ${instructionsInput.value}`
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="blink">Generating amazing content for your 👩‍💻 </div>`;
    console.log("Generating poem");
    console.log(`Promt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiURL).then(displayPoem);


}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener(`submit`, generatePoem);