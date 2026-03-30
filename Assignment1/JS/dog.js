document.addEventListener("DOMContentLoaded", async () => {
    // Get dog ID from URL query parameters
    const dogId = getDogIdFromURL();

    if (!dogId) {
        document.body.innerHTML = "<h1>Dog not found</h1>";
        return;
    }

    try {
        // Fetch the dogs data from local JSON file
        const response = await fetch(`https://b9eaadf5-f4ee-4983-98ca-63eb6d424e0c.mock.pstmn.io/dogs/${dogId}`);

        if (!response.ok) {
            console.error("Failed to fetch dogs data");
            document.body.innerHTML = "<h1>Error loading dog data</h1>";
            return;
        }

        const dog = await response.json();
        console.log("DOG:", dog);

        // Populate the page with dog data
        const heroImage = document.getElementById('hero-image');
        const loader = document.getElementById('image-loader');
        heroImage.onload = () => {
            loader.style.display = 'none';
            heroImage.style.display = 'block';
        };
        heroImage.src = dog.first_image_url;
        document.getElementById('dog-name').textContent = dog.name;
        document.getElementById('dog-breed').textContent = dog.breed;
        document.getElementById('dog-age').textContent = dog.age;
        document.getElementById('dog-gender').textContent = dog.sex;
        document.getElementById('dog-vaccinated').textContent = formatBoolean(dog.vaccinated);
        document.getElementById('dog-house-trained').textContent = formatBoolean(dog.house_trained);
        document.getElementById('dog-neutered').textContent = formatBoolean(dog.neutered);
        document.getElementById('dog-story').textContent = dog.story;

        document.getElementById('adopt-btn').href = `adopt.html?id=${dogId}`;

        const LAST_ID = 6;
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        if (dogId == 1) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.onclick = () => window.location.href = `dog.html?id=${dogId - 1}`;
        }

        if (dogId == LAST_ID) {
            nextBtn.style.display = 'none';
        } else {
            nextBtn.onclick = () => window.location.href = `dog.html?id=${parseInt(dogId) + 1}`;
        }

    } catch (error) {
        console.error("REAL ERROR:", error);
        document.body.innerHTML = "<h1>Error loading dog details</h1>";
        console.error("Error loading dog data:", error);
        document.body.innerHTML = "<h1>Error loading dog details</h1>";
    }
});
