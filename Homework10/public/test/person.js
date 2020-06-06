export default class Person{
    constructor(name, age){
        this._name = name;
        this._age = age;
        this.type = 'person';
    }

    get name(){
        return this._name;
    }

    get age(){
        return this._age;
    }

    incAge(){
        this.age++;
        return this;
    }

    introduce(){}

    get HTMLBlock(){
        let div = document.createElement('div');
        let nameBlock = document.createElement('p');
        nameBlock.innerHTML = this.name;
        div.appendChild(nameBlock);
        let ageBlock = document.createElement('span');
        ageBlock.innerHTML = this.age;
        div.appendChild(ageBlock);
        return div;
    }
}