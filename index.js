const menu = document.querySelector("#menu-toggle");
const mobileOverlay = document.querySelector(".mobile-first-nav");
menu.addEventListener("click", () => {

    if(mobileOverlay.classList.contains("hidden")) {
        mobileOverlay.classList.add("visible");
        mobileOverlay.classList.remove("hidden");
    }

    const closeBtn = document.querySelector("#close-btn");

    closeBtn.addEventListener("click", () => {
        if(mobileOverlay.classList.contains("visible")) {
            mobileOverlay.classList.add("hidden");
            mobileOverlay.classList.remove("visible");
        }
    })

})