const reveals = Array.from(document.querySelectorAll(".reveal"));

addEventListener("scroll", () => {
    reveals.forEach((reveal) => {
        let top = reveal.getBoundingClientRect().top;
        let height = reveal.getBoundingClientRect().height;

        if (top < window.innerHeight  && top > -height) {
            reveal.classList.add("reveal_active")
        } else {
            reveal.classList.remove("reveal_active")
        }
    })
})

