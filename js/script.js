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

function setupToggleButtons() {
    document.querySelectorAll(".section-header").forEach(header => {

        const button = header.querySelector(".toggleAll");
        const section = header.nextElementSibling;

        if (!button) return;

        button.addEventListener("click", () => {
            const folders = section.querySelectorAll(".game-folder");

            const expand = button.textContent === "Expand All";

            folders.forEach(folder => {
                folder.open = expand;
            });

            button.textContent = expand ? "Collapse All" : "Expand All";
        });

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

    setupToggleButtons();
}

init();

/* Search Code */
const search = document.getElementById("search");

search.addEventListener("input", function () {
    const filter = search.value.toLowerCase();

    const games = document.querySelectorAll(".game-folder");

    games.forEach(game => {
        const text = game.textContent.toLowerCase();

        if (text.includes(filter)) {
            game.style.display = "";
            game.open = true;
        } else {
            game.style.display = "none";
        }
    });
});
