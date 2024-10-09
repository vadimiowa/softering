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

let promiseFun = (one = 1000, two = 2000) => {
    let promise = new Promise(resolve => {
        setInterval(() => {
            resolve(mouse.bottomAndtopAdd());
        }, one)
        setInterval(() => {
            resolve(mouse.bottomAndtopRemove());
        }, two)
    })

    return promise;
}

let show = async () => {
    await promiseFun();
}

show();