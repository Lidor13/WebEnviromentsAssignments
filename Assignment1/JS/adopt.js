document.addEventListener("DOMContentLoaded", async () => {
    const dogId = getDogIdFromURL();

    if (!dogId) {
        document.body.innerHTML = "<h1>Dog not found</h1>";
        return;
    }

    try {
        const response = await fetch(`https://b9eaadf5-f4ee-4983-98ca-63eb6d424e0c.mock.pstmn.io/dogs/${dogId}`);

        if (!response.ok) {
            document.body.innerHTML = "<h1>Error loading dog data</h1>";
            return;
        }

        const dog = await response.json();

        document.getElementById('page-heading').textContent = `Adopt ${dog.name}`;

        const img = document.getElementById('dog-image');
        const loader = document.getElementById('image-loader');
        img.onload = () => {
            loader.style.display = 'none';
            img.style.display = 'block';
        };
        img.src = dog.first_image_url;

    } catch (error) {
        console.error("Error loading dog data:", error);
    }

    document.getElementById('adopt-form').addEventListener('submit', (e) => {
        e.preventDefault();
        window.location.href = `thankyou.html?id=${dogId}`;
    });
});
