class AnimationElements {
    constructor(options) {
        this.mouse = options.mouse;
    }

    bottomAndtopAdd() {
        return this.mouse.classList.add("activeTop");
    }
    bottomAndtopRemove() {
        return this.mouse.classList.remove("activeTop");
    }
}

let mouse = new AnimationElements({
    mouse: document.querySelector(".correct__img")
})

setInterval(() => {
    mouse.bottomAndtopAdd();
}, 1000)
setInterval(() => {
    mouse.bottomAndtopRemove();
}, 3000)