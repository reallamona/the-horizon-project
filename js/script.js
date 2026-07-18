async function loadSection(id, file) {
    try {
        const response = await fetch("sections/" + file);

        if (!response.ok) {
            throw new Error(file + " failed to load");
        }

        const content = await response.text();
        document.getElementById(id).innerHTML = content;

    } catch (error) {
        console.error(error);
    }
}


function setupToggleButton() {
    const gamesSection = document.getElementById("games");
    const button = gamesSection.querySelector("#toggleAll");

    if (!button) return;

    button.addEventListener("click", () => {
        const folders = gamesSection.querySelectorAll(".game-folder");
        const expand = button.textContent === "Expand All";

        folders.forEach(folder => {
            folder.open = expand;
        });

        button.textContent = expand ? "Collapse All" : "Expand All";
    });
}


async function init() {
    await loadSection("leaderboards", "leaderboards.html");
    await loadSection("community", "community.html");
    await loadSection("games", "games.html");

    setupToggleButton();
}


init();


// Search
const search = document.getElementById("search");

search.addEventListener("input", function () {
    const filter = search.value.toLowerCase();

    const items = document.querySelectorAll("li, .game-folder");

    items.forEach(item => {
        const text = item.textContent.toLowerCase();

        item.style.display = text.includes(filter)
            ? ""
            : "none";
    });
});
