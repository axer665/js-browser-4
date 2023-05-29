// массив реплик
const cases = Array.from(document.querySelectorAll(".rotator__case"));

// функция для создания случайного целого числа
const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
}

// функция, для изменения выводимой реплики
const main = (interval) => {
    setTimeout(() => {
        // массив цветов
        let colors = [];
        // массив интервалов для таймера
        let speeds = [];

        cases.forEach((item) => {
            // уберем текущую реплику 
            if (item.classList.contains("rotator__case_active")) {
                item.classList.remove("rotator__case_active");
                // если у элемента есть цвет в атрибутах, добавим его в массив 
                if (item.dataset.color) {
                    colors.push(item.dataset.color);
                } 
                // если у элемента есть атрибут для интервала, добавим его в массив 
                if (item.dataset.speed) {
                    speeds.push(item.dataset.speed);
                }
            }
        })

        // получаем индекс случайной реплики
        const random = getRandomNumber(cases.length); 
        // получаем индекс случайного цвета
        const randomColor = getRandomNumber(colors.length);
        // получаем индекс случайного интервала
        const randomSpeed = getRandomNumber(speeds.length)

        cases[random].style.color = colors[randomColor];
        cases[random].classList.add("rotator__case_active");
        const speed = speeds[randomSpeed];
        
        // врываемся в бесконечную рекурсию
        main(speed);
    }, interval)
}

// старт
main(1000);