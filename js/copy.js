/* =========================
   Copy Buttons
========================= */

function addCopyButtons() {
    document.querySelectorAll(".resource-card a").forEach(link => {
        if (link.parentElement.querySelector(".copy-wrapper")) {
            return;
        }

        const wrapper = document.createElement("span");
        wrapper.className = "copy-wrapper";

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

        wrapper.appendChild(button);
        wrapper.appendChild(message);
        link.insertAdjacentElement("afterend", wrapper);
    });
}

async function copyLink(url, button, message) {
    try {
        await navigator.clipboard.writeText(url);

        button.classList.add("copy-success");
        message.classList.add("show");

        clearTimeout(button.copyTimeout);

        button.copyTimeout = setTimeout(() => {
            message.classList.remove("show");
            button.classList.remove("copy-success");
        }, 1500);

    } catch (error) {
        console.error("Failed to copy link:", error);
    }
}
