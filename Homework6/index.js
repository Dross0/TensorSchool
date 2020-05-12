class Person{
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
}

class Student extends Person{
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
}

class Teacher extends Person{
    constructor(name, age, university){
        super(name, age);
        this.university = university;
        this.type = 'teacher';
    }

    introduce(){
        return `Я ${this.name}, учитель, мне ${this.age}, преподаю в ${this.university}`
    }
}

class WrongUniversityException extends Error{
    constructor(message){
        super(message);
        this.name = "WrongUniversityException";
    }
}


class UndedinedTypeOfPerson extends Error{
    constructor(message){
        super(message);
        this.name = "UndedinedTypeOfPerson";
    }
}


class UniversityFactory{
    constructor(university){
        this.university = university;
    }

    create(type, params){
        if (params.university && params.university !== this.university){
            throw new WrongUniversityException("University does not match factory university");
        }
        let person;
        switch(type){
            case 'teacher': 
                person = new Teacher(params.name, params.age, this.university);
                break;
            case 'student':
                let course = params.university || 1;
                person = new Student(params.name, params.age, this.university, course);
                break;
            default:
                throw new UndedinedTypeOfPerson(`Undefined type: ${type}`);
        }
        return person;
    }
}

class University{
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
}



nsu = new University("НГУ");
nsu.addStudent('Вася Иванов', 18, 1);
nsu.addTeacher('Михаил Петров', 45);
nsu.addStudent('Иван Иванов', 20);
nsu.removeStudent('Вася Иванов');
nsu.addStudent('Иван Иванов', 23, 3);
let student = nsu.getStudentsByName('Иван Иванов')[0];
console.log(student.introduce());
nsu.removeStudent('Иван Иванов');
console.log(nsu);