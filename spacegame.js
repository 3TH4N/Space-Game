//space ship

class spaceShip {
    constructor (hull, firepower, accuracy){
        this.full = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}

const goodShip = new spaceShip(20, 5, .7)

attack(alienShip) {
    console.log("You are attacking an alien!");
    let chanceAccuracy = Math.random();


    if (chanceAccuracy > this.accuracy) {
      console.log("You missed");

    } else {
      console.log("Enemy is dead");




//Bad guy 1

class enemy {
    constructor (hull, firepower, accuracy){
        this.full = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;

    const alienMinHull = 3;
    const alienMaxHull = 6;

    const alienMinFirePower = 2;
    const alienMaxFirePower = 4;

    const alienMinAccuracy = .6;
    const alienMaxAccuracy = .8;

    this.hull = getRandomIntInclusive(alienMinHull, alienMaxHull);

    this.firepower = getRandomIntInclusive(alienMinFirePower, alienMaxFirePower);

    this.accuracy = getRandomIntInclusive(alienMinAccuracy, alienMaxAccuracy) * 0.1;
    }

}



attackTwo(spaceShipTwo) {
    console.log("You are attacking an alien!");
    let chanceAccuracy = Math.random();


    if (chanceAccuracy > this.accuracy) {
      console.log("You missed");

    } else {
      console.log("Enemy is dead");
    }
}













