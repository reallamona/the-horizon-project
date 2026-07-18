async function loadSection(id, file) {
    const response = await fetch("sections/" + file);
    const content = await response.text();

    document.getElementById(id).innerHTML = content;
}

loadSection("leaderboards", "leaderboards.html");
loadSection("community", "community.html");
loadSection("games", "games.html");


