import Person from "./person.js"

export default class Teacher extends Person{
    constructor(name, age, university){
        super(name, age);
        this.university = university;
        this.type = 'teacher';
    }

    introduce(){
        return `Я ${this.name}, учитель, мне ${this.age}, преподаю в ${this.university}`
    }

    appendToDOM(){
        let div = super.HTMLBlock;
        let univerBlock = document.createElement('p');
        univerBlock.innerHTML = `${this.university}`;
        div.appendChild(univerBlock);
        div.setAttribute('class', 'teacher');
        document.getElementById('teacherBlock').appendChild(div);
    }
}