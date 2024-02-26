function generatePoem(event) {
    event.preventDefault();

    let poemElement = document.querySelector("#poem");
    new Typewriter('#poem', {
        strings: "Roses are red, violets are blue, bananas we like, winter is right",
        autoStart: true,
        delay: 1,
        cursor: "",
});
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener(`submit`, generatePoem);