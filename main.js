document.querySelectorAll(".linksUL a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault(
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            })
        )
    })
})