document.addEventListener("DOMContentLoaded", () => {
    // Select the trending section
    const trendingSection = document.querySelector(".trending-section");

    // Run the script only if the trending section exists
    if (!trendingSection) return;

    const movies = [
        { title: "Pushpa 2", image: "assets/images/pushpa.webp", description: "Pushpa 2: The Rule is a 2024 Indian Telugu -language action drama film [8] written and directed by Sukumar and produced by Mythri Movie Makers." },
        { title: "Daaku Maharaja", image: "assets/images/two.webp", description: "Maharaaj is a 2025 Indian Telugu-language action drama film directed by Bobby Kolli and produced by Sithara Entertainments." },
        { title: "Squid Game", image: "assets/images/four.webp", description: "Squid Game is a South Korean dystopian survival thriller action television series created, directed by Hwang Dong-hyuk for Netflix." },
        { title: "Dhoom Dhoom", image: "assets/images/three.webp", description: "Directed by Rishab Seth. With Yami Gautam, Pratik Gandhi, Pavitra Sarkar, Eijaz Khan. Veer Khurana and Koyal Chadda are a mismatched couple." },
        { title: "Lucky Bhaskar", image: "assets/images/five.webp", description: "Lucky Baskhar (stylised as LUCKY BASKHA₹) is a 2024 Indian Telugu-language period crime drama film written and directed by Venky Atluri." },
        { title: "Kadhalikka Neramillai", image: "assets/images/six.webp", description: "Kadhalikka Neramillai (transl. No Time to Love) is a 2025 Indian Tamil-language romantic comedy film written and directed by Kiruthiga Udhayanidhi." },
        { title: "Bhool Bhulaiya 3", image: "assets/images/seven.webp", description: "Bhool Bhulaiyaa 3 (transl. Labyrinth 3) is a 2024 Indian Hindi-language comedy horror film directed by Anees Bazmee." },
        { title: "Venom - The Last Dance", image: "assets/images/8.webp", description: "Venom: The Last Dance is a 2024 American superhero film written and directed by Kelly Marcel, which features the Marvel Comics character Venom." },
        { title: "Mismatched", image: "assets/images/nine.webp", description: "Mismatched is an Indian Hindi-language coming-of-age romantic drama television series on Netflix, based on Sandhya Menon's 2017 novel When Dimple Met Rishi." },
        { title: "Black Warrant", image: "assets/images/ten.webp", description: "Black Warrant is a 2025 Indian crime drama thriller series on Netflix, starring Zahan Kapoor as Sunil Gupta, a jailer at Tihar Prisons." }
    ];

    const movieCards = trendingSection.querySelectorAll(".card");
    const modal = document.getElementById("movieModal");
    const movieTitle = document.getElementById("movieTitle");
    const movieImage = document.getElementById("movieImage");
    const movieDescription = document.getElementById("movieDescription");
    const closeModal = document.querySelector(".close");

    movieCards.forEach((card, index) => {
        card.addEventListener("click", () => {
            const movie = movies[index];
            movieTitle.textContent = movie.title;
            movieImage.src = movie.image;
            movieDescription.textContent = movie.description;
            modal.style.display = "flex";
        });
    });

    // Close modal when clicking on the close button
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
