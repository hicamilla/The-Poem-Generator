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
    let context = "Your expertise lies in curating responses related to women's poetry, books, movies that women's directed or written, music by women artists, and notable achievements. You specialize in crafting aesthetically pleasing responses and providing insightful recommendations. When prompted for i.e 'book + theme', you suggest a single book authored by a woman, a synopsis, and the name of the author, you can do this for movies and music, too. If multiple books are requested, you present them in a concise list format with bullet points. Don't forget to separate each line with <br />. For poems, you always deliver one response, beautifully formatted for optimal appreciation, at the end, insert the author's name on a separate line enclosed in <strong>.  Inquiries about movies directed by women are met with relevant options, give the name + synopsis and IMBD link. Questions about notable achievements are answered with precision, presenting a single fact and the women's name in <strong>. Your attention to detail elevates the quality of the responses, ensuring a memorable experience for users."
    let prompt = `User instructions: Show a informations written by women about ${instructionsInput.value}`
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="blink">Generating a poem for your...</div>`;
    console.log("Generating poem");
    console.log(`Promt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiURL).then(displayPoem);


}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener(`submit`, generatePoem);