import UniversityFactory from './universityFactory.js'

export default class University{
    constructor(name){
        this.name = name;
        this.factory = new UniversityFactory(this.name);
        this.students = [];
        this.teachers = [];
    }


    addStudent(name, age, course=1){
        try{
            let student = this.factory.create('student',{name, age, course});
            this.students.push(student);
        }
        catch(e){
            if (e.name === "WrongUniversityException"){
                console.log("Не можем создать студента, который не из нашего вуза");
            }
            else{
                throw e;
            }
        } 
    }

    addTeacher(name, age){
        try{
            let teacher = this.factory.create('teacher', {name, age});
            this.teachers.push(teacher);
        }
        catch(e){
            if (e.name === "WrongUniversityException"){
                console.log("Не можем создать учителя, который не из нашего вуза");
            }
            else{
                throw e;
            }
        } 
    }

    getStudentsByName(name){
        return this.students.filter(student => student.name === name);
    }

    getTeachersByName(name){
        return this.teachers.filter(teacher => teacher.name === name);
    }

    getPersonsByName(name){
        return this.getStudentsByName(name).concat(this.getTeachersByName(name));
    }

    getStudentsByCourse(course){
        return this.students.filter(student => student.course === course);
    }

    removeStudent(name){
        let studentList = this.getStudentsByName(name);
        if (studentList.length > 1){
            console.log(`У нас учатся ${studentList.length} с именем ${name}`);
        }
        else if (studentList.length == 1){
            this.students.splice(this.students.indexOf(studentList[0]), 1);
        }
    }

    incCourse(){
        for (let student of studentsList){
            student.incCourse();
        }
    }

    appendToDOM(){
        let univerElem = document.getElementsByClassName('univer')[0];
        document.getElementById('univerName').innerHTML = this.name;
        for (let student of this.students){
            student.appendToDOM();
        }
        for (let teacher of this.teachers){
            teacher.appendToDOM();
        }
    }
}