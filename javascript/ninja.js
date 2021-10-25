class Ninja {
    constructor(name)
    {
        this.health = 10;
        this.name = name;
        this.speed = 3;
        this.strength = 3;
    }
    sayName()
    {
        console.log(this.name);
        return this;
    }
    showStats()
    {
        console.log("Name: " + this.name + "\nStrength: "+ this.strength+"\nSpeed: " + this.speed + "\nHealth: " + this.health);
        return this;
    }
    drinkSake()
    {
        this.health += 10;
        return this;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

class Sensei extends Ninja{
    constructor(name)
    {
        super(name);
        this.wisdom = 10;
    }
    speakWisdom()
    {
        this.wisdom --;
        this.drinkSake();
        console.log("You got pranked there's no such thing! ha");
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
