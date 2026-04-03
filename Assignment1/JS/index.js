document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("https://b9eaadf5-f4ee-4983-98ca-63eb6d424e0c.mock.pstmn.io/dogs");
        const dogs = await response.json();

        const cards = document.querySelectorAll(".dog-card");

        dogs.forEach((dog, i) => {
            if (cards[i]) {
                const card = cards[i];
                const img = card.querySelector(".dog-image");
                const name = card.querySelector(".dog-name");
                const link = card.querySelector(".more-info-link");
                const loader = card.querySelector(".card-image-loader");

                if (name) name.textContent = dog.name;
                if (link) link.href = `dog.html?id=${dog.id}`;
                
                if (img) {
                    img.src = dog.first_image_url;
                    img.style.display = "none"; 
                    if (loader) loader.style.display = "block";

                    img.onload = () => {
                        if (loader) loader.style.display = "none";
                        img.style.display = "block";
                    };
                }

                if (!card.querySelector(".heart-btn")) {
                    const heartBtn = document.createElement("button");
                    heartBtn.className = "heart-btn";
                    heartBtn.innerHTML = "❤";

                    heartBtn.onclick = (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        heartBtn.classList.toggle("liked");
                    };

                    card.appendChild(heartBtn);
                }
            }
        });
    } catch (error) {
        console.error("Error:", error);
    }
});