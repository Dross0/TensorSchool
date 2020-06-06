import University from './university.js'
import {Student, Teacher} from './personLib.js'; 

describe("Student test", function() {
   'use strict';
    it('Constructor test', function() {
        // arrange
        const student = new Student('Иванов Иван', 20, 'НГУ', 2);

        // act

        //assert
        assert.equal(student.type, 'student');
        assert.equal(student.university, 'НГУ');
        assert.equal(student.name, 'Иванов Иван');
        assert.equal(student.course, 2);
        assert.equal(student.age, 20);
    })

    it('Introduce test', () => {
        // arrange
        const student = new Student('Иванов Иван', 20, 'НГУ', 2);

        //act
        const intro = student.introduce();

        //assert
        assert.equal(intro, 'Я Иванов Иван, студент, мне 20, учусь в НГУ  на 2 курсе')
    })

    it('increment Course test', () => {
        // arrange
        const student = new Student('Иванов Иван', 20, 'НГУ', 1);

        //act
        student.incCourse().incCourse();

        //assert
        assert.equal(student.course, 3);
    })

    it('decrement Course test', () => {
        // arrange
        const student = new Student('Иванов Иван', 20, 'НГУ', 3);

        //act
        student.decCourse().decCourse();

        //assert
        assert.equal(student.course, 1);
    })
});

describe('University tests', () => {
    it('Constuctor test', () => {
        //arrange
        const nsu = new University("НГУ");

        //act

        //assert
        assert.equal(nsu.students.length, 0);
        assert.equal(nsu.teachers.length, 0);
        assert.equal(nsu.name, "НГУ");
    })

    it('Add student test', () => {
        //arrange
        const nsu = new University("НГУ");

        //act
        nsu.addStudent('Вася Иванов', 18, 1);
        nsu.addStudent('Кирилл Синьков', 22, 2);

        //assert
        assert.equal(nsu.students.length, 2);
    })

    it('Get student by name', () => {
        //arrange
        const nsu = new University("НГУ");

        //act
        nsu.addStudent('Вася Иванов', 18, 1);
        nsu.addStudent('Иван Иванов', 20);
        nsu.addStudent('Иван Иванов', 23, 3);
        const stList = nsu.getStudentsByName('Иван Иванов');

        //assert
        assert.equal(stList.length, 2);
        assert.equal(stList[0].name, stList[1].name);
        assert.equal(stList[0].name, 'Иван Иванов');
    })
})

mocha.run();
