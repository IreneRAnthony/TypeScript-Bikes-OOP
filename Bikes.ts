class Bikes {
    public price: number;
    public max_speed: string;
    public miles: number = 0;

    constructor(price: number, max_speed: string) {
        this.price = price;
        this.max_speed = max_speed;
    }

    displayInfo = () => {
        console.log("Bike's price is " + this.price + ", the max speed is " + this.max_speed + ", and the current number of miles is " + this.miles + ".");
    };

    ride = () => {
        console.log("Riding");
        this.miles += 10;
    };

    reverse = () => {
        console.log("Reversing");
        if(this.miles > 0){
            this.miles -= 5;
        } else {
            console.log("Cannot have miles reduced any further.")
        }
    };

};

const bike1 = new Bikes(300, "25mph");
const bike2 = new Bikes(500, "35mph");
const bike3 = new Bikes(250, "20mph");

bike1.ride();
bike1.ride();
bike1.ride();

bike1.reverse();
bike1.displayInfo();

bike3.reverse();
bike3.reverse();
bike3.reverse();
bike3.displayInfo();
