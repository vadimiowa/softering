class AnimationElements {
    constructor(options) {
        this.mouse = options.mouse;
        this.border = options.border;
        this.borderServi = options.borderServi;
        this.borderConta = options.borderConta;
        this.borderWhat = options.borderWhat;
        this.window = options.window;
    }

    bottomAndtopAdd() {
        this.mouse.classList.add("activeTop");
    }

    bottomAndtopRemove() {
        this.mouse.classList.remove("activeTop");
    }

    radiusBorder() {
        this.window.addEventListener("scroll", () => {
            let scroll = this.window.scrollY;
            console.log(scroll);
            if(scroll > 500) {
                this.border.classList.add("activeBorder");
            } else {
                this.border.classList.remove("activeBorder");
            }

            if(scroll > 1200) {
                this.borderServi.classList.add("activeBorder");
            } else {
                this.borderServi.classList.remove("activeBorder");
            }

            if(scroll > 1500) {
                this.borderWhat.classList.add("activeBorderTop");
            } else {
                this.borderWhat.classList.remove("activeBorderTop");
            }
            if(scroll > 2900) {
                this.borderWhat.classList.add("activeBorderBottom");
            } else {
                this.borderWhat.classList.remove("activeBorderBottom");
            }

            if(scroll > 3300) {
                this.borderConta.classList.add("activeBorder");
            } else {
                this.borderConta.classList.remove("activeBorder");
            }

            // media
            if(scroll > 3600) {
                this.borderConta.classList.remove("activeBorder");
            }
            if(scroll > 4300) {
                this.borderConta.classList.add("activeBorderThen");
            } else {
                this.borderConta.classList.remove("activeBorderThen");
            }
        })
    }
}

let mouse = new AnimationElements({
    mouse: document.querySelector(".correct__img")
})

let promiseFun = (one = 1000, two = 2000) => {
    return new Promise(resolve => {
        setTimeout(() => {
            mouse.bottomAndtopAdd();
            setTimeout(() => {
                mouse.bottomAndtopRemove();
                resolve();
            }, two);
        }, one);
    });
};

let show = async () => {
    while (true) {
        await promiseFun();
    }
};

show();

let border = new AnimationElements({
    window: window,
    border: document.querySelector(".about__text"),
    borderServi: document.querySelector(".services__text"),
    borderConta: document.querySelector(".contactus__text"),
    borderWhat: document.querySelector(".what")
})

border.radiusBorder();