function displayPoem(response) {
    console.log("poem generated");
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
});
    
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "927adff4309ccc33tb7fd3o104741c05";
    let context = "As an esteemed authority in the realm of poetry, specializing particularly in works authored by women, your expertise holds paramount importance in the creation of a poetic masterpiece. Your task is to craft a poem consisting of no less than ten lines, utilizing basic HTML formatting techniques. Each line of the poem should be gracefully separated by the <br /> tag, ensuring a visually pleasing presentation. Pay meticulous attention to the provided instructions, as precision is key to achieving the desired outcome. Conclude the poem with a flourish by signing it exclusively with the author's name, elegantly enclosed within <strong> tags and with a space between the poem and the author's name. If the poem does not have a known author, kindly insert “Unknown Author” and DO NOT show a dash in the begining of the author's name. Your dedication to detail and adherence to instructions will undoubtedly elevate the beauty and impact of the final composition."
    let prompt = `User instructions: Show a poem written by women about ${instructionsInput.value}`
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("Generating poem");
    console.log(`Promt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiURL).then(displayPoem);


}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener(`submit`, generatePoem);