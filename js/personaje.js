class Personaje {

    constructor(number, name, sex, profesion) {
        this._number = number;
        this._name = name;
        this._sexo = sex;
        this._profesion = profesion;
    }

    get number() { return this._number; }
    get nombre() { return this._name; }
    get sex() { return this._sexo; }
    get profesion() { return this._profesion; }
    
};
