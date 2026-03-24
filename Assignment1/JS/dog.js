document.addEventListener("DOMContentLoaded", async () => {
    // Get dog ID from URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const dogId = urlParams.get('id');

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

        // Function to convert boolean/null to Yes/No/Unknown
        function formatBoolean(value) {
            if (value === true) return "Yes";
            if (value === false) return "No";
            if (value === null || value === undefined) return "Unknown";
            return value;
        }

        // Populate the page with dog data
        document.getElementById('hero-image').src = dog.first_image_url;
        document.getElementById('dog-name').textContent = dog.name;
        document.getElementById('dog-breed').textContent = dog.breed;
        document.getElementById('dog-age').textContent = dog.age;
        document.getElementById('dog-gender').textContent = dog.sex;
        document.getElementById('dog-vaccinated').textContent = formatBoolean(dog.vaccinated);
        document.getElementById('dog-house-trained').textContent = formatBoolean(dog.house_trained);
        document.getElementById('dog-neutered').textContent = formatBoolean(dog.neutered);
        document.getElementById('dog-story').textContent = dog.story;

    } catch (error) {
        console.error("REAL ERROR:", error);
        document.body.innerHTML = "<h1>Error loading dog details</h1>";
        console.error("Error loading dog data:", error);
        document.body.innerHTML = "<h1>Error loading dog details</h1>";
    }
});
