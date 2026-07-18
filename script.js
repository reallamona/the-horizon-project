async function loadSection(id, file) {
    const response = await fetch("sections/" + file);
    const content = await response.text();

    document.getElementById(id).innerHTML = content;
}

loadSection("leaderboards", "leaderboards.html");
loadSection("community", "community.html");
loadSection("games", "games.html");


const search = document.getElementById("search");

search.addEventListener("input", function () {
    const filter = search.value.toLowerCase();

    const items = document.querySelectorAll("li, .game-folder");

    items.forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(filter)
            ? ""
            : "none";
    });
});
