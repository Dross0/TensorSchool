import Header from './header.js';
import Person from './person.js';
import Student from './student.js';
import ComponentFactory from './componentFactory.js';
import Dataset from './dataSet.js';


class ResponeError extends Error{
     constructor(message){
         super(message);
         this.name = "ResponseError";
     }
 }

function mountStudentByID(dataSet, id, elem){
     dataSet.readByID(id).then(respone => {
          if (respone.ok){
               return respone.json();
          }
          throw ResponeError(`Cant get student id = {${id}}`);
     }).then(d => {
          const st = new Student(d.title, null, d.study, d.course, d.photo);
          const p = ComponentFactory.create(Person, {person: st});
          p.mount(elem);
     });
}

function getStudentListSize(dataSet){
     return dataSet.query('info', {method: 'GET'}).then(respone => {
          return respone.json();
     }).then(d => {
          return d.size;
     });
}

const header = ComponentFactory.create(Header,
     {title: 'Tensor School',
     logo: 'img/logo.jpg',
     description: 'Это страница школы Тензор в городе Уфа.\
     Тут вы можете познакомиться с нашими учениками и посмотеть темы занятий.'}
);

header.mount(document.body, 'afterbegin');


const data = new Dataset({
     host: 'http://localhost:8080/api/',
     service: 'person'
});

const studentsElem = document.getElementsByClassName('students')[0];
getStudentListSize(data).then(size =>{
     for (let i = 1; i <= size; ++i){
          mountStudentByID(data, i, studentsElem);
     }
});


