document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("https://b9eaadf5-f4ee-4983-98ca-63eb6d424e0c.mock.pstmn.io/dogs");
        const dogs = await response.json();

        const container = document.getElementById("dog-list-container");

        dogs.forEach(dog => {
            const card = document.createElement("div");
            card.className = "dog-card";

            const loader = document.createElement("div");
            loader.className = "card-image-loader";

            const img = document.createElement("img");
            img.className = "dog-image";
            img.alt = "Dog Image";
            img.style.display = "none";
            img.onload = () => {
                loader.style.display = "none";
                img.style.display = "block";
            };
            img.src = dog.first_image_url;

            const name = document.createElement("h2");
            name.className = "dog-name";
            name.textContent = dog.name;

            const link = document.createElement("a");
            link.className = "more-info-link";
            link.href = `dog.html?id=${dog.id}`;
            link.textContent = "More Info";

            card.appendChild(loader);
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(link);

            container.appendChild(card);
        });

    } catch (error) {
        console.error("Error:", error);
    }
});
