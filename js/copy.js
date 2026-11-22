/* =========================
   Copy Buttons
========================= */

function addCopyButtons() {
    document.querySelectorAll(".resource-card a").forEach(link => {
        if (link.parentElement.querySelector(".copy-link")) {
            return;
        }

        const button = document.createElement("button");
        button.className = "copy-link";
        button.type = "button";
        button.title = "Copy";
        button.setAttribute("aria-label", "Copy link");
        button.dataset.url = link.href;

        button.innerHTML = `<img src="assets/copy.png" alt="">`;

        const message = document.createElement("span");
        message.className = "copy-message";
        message.textContent = "Copied!";
        message.setAttribute("role", "status");
        message.setAttribute("aria-live", "polite");

        button.addEventListener("click", () => {
            copyLink(button.dataset.url, button, message);
        });

        link.parentElement.appendChild(button);
        button.insertAdjacentElement("afterend", message);
    });
}

async function copyLink(url, button, message) {
    try {
        await navigator.clipboard.writeText(url);

        message.classList.add("show");

        clearTimeout(button.copyTimeout);
        button.copyTimeout = setTimeout(() => {
            message.classList.remove("show");
        }, 1500);
    } catch (error) {
        console.error("Failed to copy link:", error);
    }
}
