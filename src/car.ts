class Car {
  mark: string;
  model: string;
  year: number;
  mileage: number = 0;

  constructor(mark: string, model: string, year: number) {
    this.mark = mark;
    this.model = model;
    this.year = year;
  }

  drive(distance: number): void {
    this.mileage += distance;
    console.log(`Проехали ${distance} км. Общий пробег: ${this.mileage} км.`);
  }

  getDescription(): string {
    return `Машина: ${this.mark}, модель: ${this.model}, год выпуска: ${this.year}, проехала: ${this.mileage} км`;
  }
}

const myCar = new Car("Toyota", "Camry", 2020);


console.log(myCar.getDescription());
myCar.drive(150);
myCar.drive(50);
console.log(myCar.getDescription());
