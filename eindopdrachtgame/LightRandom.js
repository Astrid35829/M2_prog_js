
export class Color {
    randomGetal() {
        let random = Math.floor(Math.random() * 6) + 1;
        return random;
    }

    rollNumber() {
        let number = this.randomGetal();

        if (number == 1) {
            number = "red";
        }

        if (number == 2) {
            number = "orange";
        }

        if (number == 3) {
            number = "yellow";
        }

        if (number == 4) {
            number = "green";
        }

        if (number == 5) {
            number = "cyan";
        }

        if (number == 6) {
            number =="purple";
        }

        if (number == 7) {
            number = "pink";
        }

        return number
    }
}
