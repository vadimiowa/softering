class Window {
    constructor(options) {
        this.mainButton = options.mainButton;
        this.form = options.form;
        this.body = options.body;
        this.plane = options.plane;
        this.clouse = options.clouse;
        this.none = options.none;
    }

    clickMainButton() {
        return this.mainButton.addEventListener("click", () => {
            this.form.classList.add("active");
            this.body.classList.add("scrollHidden");
            this.plane.classList.add("active");
            this.none.classList.add("block");
        })
    }
    clouseForm() {
        return this.clouse.addEventListener("click", () => {
            this.form.classList.remove("active");
            this.body.classList.remove("scrollHidden");
            this.plane.classList.remove("active");
            this.none.classList.remove("block");
        })
    }
}

let form = new Window({
    mainButton: document.querySelector(".contact__button"),
    form: document.querySelector(".form"),
    body: document.querySelector("body"),
    plane: document.querySelector(".plane"),
    clouse: document.querySelector(".clouse"),
    none: document.querySelector(".none")
})

form.clickMainButton();
form.clouseForm();