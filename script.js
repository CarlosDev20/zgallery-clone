document.addEventListener('DOMContentLoaded', function () {
    const screen1 = document.getElementById("screen1");
    const screen3 = document.getElementById("screen3");
    const showScreenBtn = document.getElementById("showScreen3Button");
    const backBtn = document.getElementById("backButton");
    const hiddenBtn = document.getElementById("hidden-photos-btn");

    const searchInputFolders = document.getElementById("search-input");
    const galleryItems = document.querySelectorAll(".gallery-item");
    
    const searchInputFiles = document.getElementById("search-files-input");
    const fileItems = document.querySelectorAll(".file-item");


    if(showScreenBtn) {
        showScreenBtn.addEventListener("click", () => {
            screen1.classList.add("hidden");
            screen3.classList.remove("hidden");
        });
    }

    if(backBtn) {
        backBtn.addEventListener("click", () => {
            screen3.classList.add("hidden");
            screen1.classList.remove("hidden");
            if(searchInputFiles) {
                searchInputFiles.value = "";
                fileItems.forEach(item => item.style.display = "flex");
            }
        });
    }

    if(searchInputFolders) {
        searchInputFolders.addEventListener("input", () => {
            const query = searchInputFolders.value.toLowerCase().trim();
            galleryItems.forEach((item) => {
                const folder = item.getAttribute("data-folder").toLowerCase();
                item.style.display = folder.includes(query) ? "block" : "none";
            });
        });
    }

    if(searchInputFiles) {
        searchInputFiles.addEventListener("input", () => {
            const query = searchInputFiles.value.toLowerCase().trim();
            fileItems.forEach((item) => {
                const text = item.innerText.toLowerCase();
                item.style.display = text.includes(query) ? "flex" : "none";
            });
        });
    }

    if(hiddenBtn) {
        hiddenBtn.addEventListener("click", () => {
            alert("Esta función estará disponible en la próxima actualización.");
        });
    }
});