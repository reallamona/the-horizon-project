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
    const button = document.getElementById("toggleAll");

    if (!button) return;

    button.addEventListener("click", () => {
        const folders = document.querySelectorAll(".game-folder");
        const expand = button.textContent === "Expand All";

        folders.forEach(folder => {
            folder.open = expand;
        });

        button.textContent = expand ? "Collapse All" : "Expand All";
    });
}

/* Init Loading */
async function init() {
    await Promise.all([
        loadSection("featured", "featured.html"),
        loadSection("games", "games.html"),
        loadSection("speedrun-resources", "speedrun-resources.html"),
        loadSection("community-resources", "community-resources.html")

    ]);

    setupToggleButton();
}

init();

/* Search Code */
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
