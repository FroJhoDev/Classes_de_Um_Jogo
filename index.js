class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        console.log(`O ${this.type} chamado ${this.name} atacou usando ${this.attackType()}`);
    }

    attackType() {
        if (this.type === 'mago') {
            return 'magia'
        } else if (this.type === 'guerreiro') {
            return 'espada'
        } else if (this.type === 'monge') {
            return 'artes marciais'
        } else {
            return 'shuriken'
        }
    }

}

let herosLits = [
    new Hero('Patolino', 25, 'mago'), 
    new Hero('Arthur', 50, 'guerreiro'), 
    new Hero('Aang', 12, 'monge'), 
    new Hero('Naruto', 14, 'ninja'),
];


for (const index in herosLits) {
    herosLits[index].attack();
}