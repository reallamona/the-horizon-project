async function loadSection(id, file) {
    const response = await fetch("sections/" + file);
    const content = await response.text();

    document.getElementById(id).innerHTML = content;
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
async function init() {
    await loadSection("leaderboards", "leaderboards.html");
    await loadSection("community", "community.html");
    await loadSection("games", "games.html");

    setupToggleButton();
}

init();
