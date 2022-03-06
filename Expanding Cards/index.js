document.querySelectorAll(".panel").forEach(panel => {
    panel.addEventListener("click", () => { removeActive(); panel.classList.add("active"); });
});

function removeActive() {
    document.querySelectorAll(".panel").forEach(panel => { panel.classList.remove("active"); });
}