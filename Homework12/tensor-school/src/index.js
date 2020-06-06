import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js';
import Dataset from './dataSet.js';
import StudentList from './studentsList.js';





const header = {title: "Tensor School",
        logo: 'img/logo.jpg',
        description: 'Это страница школы Тензор в городе Уфа. Тут вы можете познакомиться с нашими учениками и посмотеть темы занятий.'
};


const headerComp = <Header title = {header.title} logo = {header.logo} description = {header.description}/>;


const data = new Dataset({
    host: 'http://localhost:5000/',
    service: 'person'
});


let st = <StudentList dataSet={data} />;


ReactDOM.render([headerComp, st], document.getElementById('root'));






