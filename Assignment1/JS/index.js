document.addEventListener("DOMContentLoaded", async () => {
    try {
    // Function for fetch from the mock server
    const response = await fetch('https://b9eaadf5-f4ee-4983-98ca-63eb6d424e0c.mock.pstmn.io/dogs_data');
    if (!response.ok) {
    console.error("Failed to fetch dogs");
    return;
    }
    // Convert to json
    const dogs = await response.json();

    // Function to get all the data
    const cards = document.querySelectorAll(".dog-card");

    // Loop
    for (let i = 0; i < dogs.length && i < cards.length; i++) {
            const dog = dogs[i];
            const card = cards[i];

            const img = card.querySelector('.dog-image');
            const name = card.querySelector('.dog-name');
            const link = card.querySelector('.more-info-link');

            if (img && name && link) {
                img.src = dog.first_image_url;
                name.textContent = dog.name;
                link.href = `dog.html?id=${dog.id}`;
            }
        }
    }   catch (error) {
        console.error("Error:", error);
    }
});