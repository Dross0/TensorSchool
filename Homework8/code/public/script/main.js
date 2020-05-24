import Header from './header.js';
import Person from './person.js';
import Student from './student.js';
import ComponentFactory from './componentFactory.js';

const header = ComponentFactory.create(Header,
     {title: 'Tensor School',
     logo: 'img/logo.jpg',
     description: 'Это страница школы Тензор в городе Уфа.\
     Тут вы можете познакомиться с нашими учениками и посмотеть темы занятий.'}
);

header.mount(document.body, 'afterbegin');

let student = new Student('Иван Петров', 20, "МГУ", 2, 'img/ava01.jpg');

const person = ComponentFactory.create(Person, {person: student});
person.mount(document.getElementsByClassName('students')[0]);

