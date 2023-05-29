const book = document.getElementById("book")
const sizes = Array.from(document.querySelectorAll(".font-size"));
const textColors = Array.from(document.querySelectorAll(".book__control_color .color"));
const backgroundsColors = Array.from(document.querySelectorAll(".book__control_background .color"));

// функция, убирающая класс у всех элементов коллекции (если он присутствует)
const clearActiveItem = (list, activeItemName) => {
    list.forEach((item) => {
        if (item.classList.contains(activeItemName)) {
            item.classList.remove(activeItemName);
        }
    })
}

// меняем размер шрифта
sizes.forEach((size) => {
    size.onclick = () => {
        // убираем ссылку
        size.removeAttribute("href");
        // убираем сласс active у всех элементов
        clearActiveItem(sizes, "font-size_active");
        // добавляем класс active текущему элементу
        size.classList.add("font-size_active");
        
        if (size.dataset.size === "small") {
            book.classList.remove("book_fs-big");
            book.classList.add("book_fs-small");
        } else if (size.dataset.size === "big") {
            book.classList.remove("book_fs-small");
            book.classList.add("book_fs-big");
        } else {
            book.classList.remove("book_fs-big");
            book.classList.remove("book_fs-small");
        }
    }
})

// меняем цвет текста
textColors.forEach((color) => {
    color.onclick = () => {
        color.removeAttribute("href");
        clearActiveItem(textColors, "color_active");
        color.classList.add("color_active");

        if (color.dataset.textColor) {
            book.style.color = color.dataset.textColor;
        } 
    }
})

// меняем цвет фона
backgroundsColors.forEach((color) => {
    color.onclick = () => {
        color.removeAttribute("href");
        clearActiveItem(backgroundsColors, "color_active");
        color.classList.add("color_active");

        if (color.dataset.bgColor) {
            book.style.backgroundColor = color.dataset.bgColor;
        } 
    }
})