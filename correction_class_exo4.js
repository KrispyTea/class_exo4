//Exo1
class Lieu {
    constructor(nom , personnes){
        this.nom = nom,
        this.personnes = personnes
    }
}

let molengeek = new Lieu("Molengeek", []);
let snack = new Lieu("snack", []);
let maison = new Lieu("maison", []);

class Personne {
    constructor(nom, prenom, argent){
        this.nom = nom,
        this.prenom = prenom,
        this.argent = argent
    }
    seDeplacer(depart, arrivee, locomotion, gars){
        locomotion.embarquer(depart, arrivee, gars);
    }
}

let junior = new Personne("Silva", "Junior", 42);

class Bus {
    constructor(personnes, caisse){
        this.personnes = personnes,
        this.caisse = caisse
    }
    embarquer(depart, arrivee, gars){
        if (gars.argent >= 2.80) {
            gars.argent = gars.argent - 2.8;
            this.caisse = this.caisse + 2.8;
            depart.personnes.splice(depart.personnes.indexOf(gars), 1);
            arrivee.personnes.push(gars);
        } else {
            console.log("cheh tu n'as pas assez d'argent");
        }
    }
}

let stib = new Bus([], 50);
//08h00
maison.personnes.push(junior);
console.log(maison.personnes);
//08h30
junior.seDeplacer(maison, molengeek, stib, junior);
//08h45
console.log(molengeek.personnes);
//12h45
junior.seDeplacer(molengeek, snack, stib, junior);
console.log(snack.personnes);
//13h30
snack.personnes.splice(snack.personnes.indexOf(junior), 1);
molengeek.personnes.push(junior);
console.log(molengeek.personnes);
//17h10
junior.seDeplacer(molengeek, maison, stib, junior);
console.log(maison.personnes);

console.log(junior.argent.toFixed(2));
console.log(stib.caisse.toFixed(2));