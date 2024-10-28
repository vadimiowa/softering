class MakeError {
    constructor(options) {
        this.allInputs = options.allInputs;
        this.inputPhoneNumber = options.inputPhoneNumber;
        this.button = options.button;
    }

    showErrorClick() {
        this.button.addEventListener("click", () => {
            let allFilled = true; // Flag to check if all inputs are filled

            this.allInputs.forEach((el) => {
                if (el.value.length === 0) {
                    el.classList.add("redLine");
                    allFilled = false; // Mark as not all filled
                }
            })

            if(allFilled && this.inputPhoneNumber.value.length === 17) {
                document.location.reload();
            }
        })
    }

    removeErrorFocus() {
        return this.allInputs.forEach(el => {
            el.addEventListener("input", () => {
                if(el.value.length > 0) {
                    el.classList.remove("redLine");
                }
            })
        })
    }

    phoneNumber() {
        this.inputPhoneNumber.addEventListener("input", () => {
            let generate = "+38(0";
            if(!this.inputPhoneNumber.value.startsWith(generate)) {
                this.inputPhoneNumber.value = generate;
            }
            if(this.inputPhoneNumber.value.length == 7) {
                this.inputPhoneNumber.value += ")";
            }
            if(this.inputPhoneNumber.value.length == 11) {
                this.inputPhoneNumber.value += "-";
            }
            if(this.inputPhoneNumber.value.length == 14) {
                this.inputPhoneNumber.value += "-";
            }
            if(this.inputPhoneNumber.value.length > 17) {
                this.inputPhoneNumber.value = this.inputPhoneNumber.value.slice(0, 17);
            }
        })
    }
}

let input = new MakeError({
    allInputs: document.querySelectorAll(".inputs"),
    button: document.querySelector(".button"),
    inputPhoneNumber: document.querySelector(".phoneNumber")
});

input.showErrorClick();
input.removeErrorFocus();
input.phoneNumber();