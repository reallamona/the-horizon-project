/* =========================
   Page Update Dates
========================= */

const pageUpdates = {
    "data/pages/home.json": "November 22, 2026",
    "data/pages/speedrunning.json": "November 22, 2026",
    "data/pages/community.json": "November 22, 2026",
    "data/pages/games.json": "November 22, 2026",

    "data/games/horizon-zero-dawn.json": "November 22, 2026",
    "data/games/frozen-wilds.json": "November 22, 2026",
    "data/games/zero-dawn-remastered.json": "November 22, 2026",
    "data/games/horizon-forbidden-west.json": "November 22, 2026",
    "data/games/burning-shores.json": "November 22, 2026",
    "data/games/call-of-the-mountain.json": "November 22, 2026",
    "data/games/lego-horizon-adventures.json": "November 22, 2026",
    "data/games/hunters-gathering.json": "November 22, 2026",
    "data/games/steel-frontiers.json": "November 22, 2026"
};


/* =========================
   Last Updated
========================= */

function addLastUpdated(page) {
    const updated = document.querySelector(".updated");

    if (!updated) {
        console.warn("Last-updated element .updated was not found.");
        return;
    }

    const update = pageUpdates[page];

    if (!update) {
        console.warn("No update date configured for:", page);
        updated.textContent = "";
        return;
    }

    updated.textContent = `Last Updated: ${update}`;
}
