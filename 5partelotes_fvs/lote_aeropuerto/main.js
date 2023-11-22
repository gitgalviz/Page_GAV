document.addEventListener("DOMContentLoaded", function () {
    const cardContainer = document.querySelector(".card-container");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentIndex = 0;

    prevBtn.addEventListener("click", () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateCardContainer();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = Math.min(currentIndex + 1, cardContainer.children.length - 1);
        updateCardContainer();
    });

    function updateCardContainer() {
        const translateValue = -currentIndex * 100 + "%";
        cardContainer.style.transform = `translateX(${translateValue})`;
    }
});
