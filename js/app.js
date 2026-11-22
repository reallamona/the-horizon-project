/* =========================
   Configuration
========================= */

const CONFIG = {
    homePage: "data/pages/home.json",

    pages: {
        home: "data/pages/home.json",
        games: "data/pages/games.json",
        community: "data/pages/community.json",
        speedrunning: "data/pages/speedrunning.json"
    },

    copyTimeout: 1000
};


/* =========================
   Application State
========================= */

const STATE = {
    currentPage: null
};


/* =========================
   Last Updated
========================= */

function updatePageDate(pagePath) {
    if (typeof addLastUpdated !== "function") {
        console.warn(
            "addLastUpdated() is unavailable. Check that updates.js is loaded."
        );
        return;
    }

    addLastUpdated(pagePath);
}


/* =========================
   Page Loading
========================= */

async function openPage(pagePath) {
    STATE.currentPage = pagePath;

    if (typeof loadPage !== "function") {
        console.error(
            "loadPage() is not defined. Check your page-loading JavaScript."
        );
        return;
    }

    try {
        await loadPage(pagePath);

        // Update the date after the page content has rendered.
        updatePageDate(pagePath);

        // Reinitialize copy buttons if the function is available.
        if (typeof addCopyButtons === "function") {
            addCopyButtons();
        }
    } catch (error) {
        console.error("Failed to load page:", pagePath, error);
    }
}


/* =========================
   Initialize
========================= */

function init() {
    if (typeof setupNavigation === "function") {
        setupNavigation();
    } else {
        console.warn("setupNavigation() is not defined.");
    }

    if (typeof setupGamesDropdown === "function") {
        setupGamesDropdown();
    } else {
        console.warn("setupGamesDropdown() is not defined.");
    }

    openPage(CONFIG.homePage);

    const homeLink = document.querySelector(
        `[data-page="${CONFIG.homePage}"]`
    );

    if (homeLink) {
        homeLink.classList.add("active");
    }
}


/* =========================
   Application Startup
========================= */

document.addEventListener("DOMContentLoaded", init);
