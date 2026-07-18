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
