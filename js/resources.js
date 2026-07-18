fetch("data/resources.json")
.then(response => response.json())
.then(resources => {

    const container = document.getElementById("resources");

    resources.forEach(resource => {
        container.innerHTML += `
            <div class="resource">
                <a href="${resource.url}" target="_blank">
                    ${resource.name}
                </a>
                <p>${resource.category}</p>
            </div>
        `;
    });

});
