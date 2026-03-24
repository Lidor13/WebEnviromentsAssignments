document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("https://b9eaadf5-f4ee-4983-98ca-63eb6d424e0c.mock.pstmn.io/dogs");
        const dogs = await response.json();

        console.log(dogs);
        console.log("isArray:", Array.isArray(dogs));
        const cards = document.querySelectorAll(".dog-card");

        for (let i = 0; i < dogs.length && i < cards.length; i++) {
            const dog = dogs[i];
            const card = cards[i];

            const img = card.querySelector(".dog-image");
            const name = card.querySelector(".dog-name");
            const link = card.querySelector(".more-info-link");

            if (img && name && link) {
                img.src = dog.first_image_url;
                name.textContent = dog.name;
                link.href = `dog.html?id=${dog.id}`;
            }
        }
    } catch (error) {
        console.error("Error:", error);
    }
});