class card {
    constructor(name, cost)
    {
        this.name = name;
        this.cost = cost;
    }
}

class unit extends card {
    constructor(name, cost, power, resilience)
    {
        super(name, cost)
        this.power = power;
        this.resilience = resilience;
    }
    attack(target)
    {
        if (target instanceof unit) {
            this.resilience -= target.power;
            target.resilience -= this.power;
            if (this.resilience <= 0) {
                console.log("Oh no the " + this.name + " unit has fallen...");
            }
            if (target.resilience >= 0) {
                console.log("The " + target.name + " unit has fallen!");
            }
        } else {
            throw new Error("Must be a unit");
        }
    }
}
class effect extends card {
    constructor(name, cost, text, stat, magnitude)
    {
        super(name, cost)
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    playOn(target)
    {
        if (target instanceof unit) {
            target[this.stat] += this.magnitude;
            console.log(this.text);
        } else {
            throw new Error("Must be a unit!");
        }
    }
}

const RBN = new unit("Red Belt Ninja", 3, 3, 4);
const BBN = new unit("Black Belt Ninja", 4, 5, 4);

const hardAlgo = new effect("Hard Algorithm", 2, "increase target's resillience by 3", "resilience", 3).playOn(RBN);
const unhandledPromise = new effect("Unhandled Promise Rejection", 1, "reduct target's resilience by 2", "resilience", -2).playOn(RBN);
const pairProgramming = new effect("Pair Programming", 3, "increase target's power by 2", "power", 2).playOn(RBN);

RBN.attack(BBN);
