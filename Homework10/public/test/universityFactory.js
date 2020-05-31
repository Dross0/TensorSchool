import {Student, Teacher} from './personLib.js'

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


export default class UniversityFactory{
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