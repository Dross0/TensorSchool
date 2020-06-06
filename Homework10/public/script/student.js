

export default  class Student{
    constructor(name, age, university, course, img){
        this.name = name;
        this.university = university;
        this.image = img;
        this.age = age;
        this.course = course;
    }

    get education(){
        return `${this.university} ${this.course} курс`
    }
}