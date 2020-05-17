import Person from "./person.js"

export default class Student extends Person{
    constructor(name, age, university, course){
        super(name, age);
        this.university = university;
        this._course = course;
        this.type = 'student';
    }

    get course(){
        return this._course;
    }

    introduce(){
        return `Я ${this.name}, студент, мне ${this.age}, учусь в ${this.university}  на ${this.course} курсе`
    }

    incCourse(){
        this.course++;
        return this;
    }

    decCourse(){
        this.course--;
        return this;
    }

    appendToDOM(){
        let div = super.HTMLBlock;
        let univerBlock = document.createElement('p');
        univerBlock.innerHTML = `${this.university} ${this.course} курс`;
        div.appendChild(univerBlock);
        div.setAttribute('class', 'student');
        document.getElementById('studentBlock').appendChild(div);
    }
}
