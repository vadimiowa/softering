// class AnimationElements {
//     constructor(options) {
//         this.mouse = options.mouse;
//     }

//     bottomAndtopAdd() {
//         return this.mouse.classList.add("activeTop");
//     }
//     bottomAndtopRemove() {
//         return this.mouse.classList.remove("activeTop");
//     }
// }

// let mouse = new AnimationElements({
//     mouse: document.querySelector(".correct__img")
// })

// let promiseFun = (one = 1000, two = 2000) => {
//     let promise = new Promise(resolve => {
//         setInterval(() => {
//             resolve(mouse.bottomAndtopAdd());
//         }, one)
//         setInterval(() => {
//             resolve(mouse.bottomAndtopRemove());
//         }, two)
//     })

//     return promise;
// }

// let show = async () => {
//     await promiseFun();
// }

// show();

class AnimationElements {
    constructor(options) {
        this.mouse = options.mouse;
    }

    bottomAndtopAdd() {
        this.mouse.classList.add("activeTop");
    }

    bottomAndtopRemove() {
        this.mouse.classList.remove("activeTop");
    }
}

let mouse = new AnimationElements({
    mouse: document.querySelector(".correct__img")
});

let promiseFun = (one = 1000, two = 2000) => {
    return new Promise(resolve => {
        setTimeout(() => {
            mouse.bottomAndtopAdd();
            setTimeout(() => {
                mouse.bottomAndtopRemove();
                resolve(); // Resolve the promise once the animation is complete
            }, two);
        }, one);
    });
};

let show = async () => {
    while (true) { // Run indefinitely, adjust logic as needed
        await promiseFun();
    }
};

show();