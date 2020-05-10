class Student{
    constructor(name, age, university, course, img){
        this.name = name;
        this.university = university;
        this.img = img;
        this.age = age;
        this.course = course;
    }

    getEducation(){
        return `${this.university} ${this.course} курс`
    }

    addToDOM() {
        let nameTag = document.createElement('p');
        nameTag.innerText = this.name;
        let universityTag = document.createElement('span');
        universityTag.innerText = this.getEducation();
        let ageTag = document.createElement('span');
        ageTag.innerText = `Возраст: ${this.age}`;
        let infoBlock = document.createElement('div');
        infoBlock.appendChild(nameTag);
        infoBlock.appendChild(universityTag);
        infoBlock.append(ageTag);
        infoBlock.setAttribute("class", "modal__text-content");
        let modalContent = document.getElementById('modalCard-content');
        modalContent.innerHTML = '';
        modalContent.appendChild(infoBlock);
        let spacer = document.createElement('div');
        spacer.setAttribute('class', 'spacer');
        modalContent.append(spacer);
        modalContent.append(this.img);   
    }
    
}

class StudentsDataBase{
    constructor(){
        this.data = [];
    }

    appendStudent(student){
        this.data.push(student);
    }

    getStudentByName(name){
        for (let student of this.data){
            if (student.name == name){
                return student;
            }
        }
        return undefined;
    }
}


students = new StudentsDataBase();
students.appendStudent(new Student('Иван Петров', 20, "МГУ", 2));
students.appendStudent(new Student('Николаева Екатерина', 21, "МФТИ", 3));
students.appendStudent(new Student('Ким Татьяна', 22, "НГУ", 2));
students.appendStudent(new Student('Логинов Артем', 23, "СПБГУ", 4));
students.appendStudent(new Student('Иванова Мария', 22, "СГУПС", 1));
students.appendStudent(new Student('Самир Букл', 35, "МГУ", 5));


function parseStudent(studentElement){
    let name = studentElement.getElementsByTagName('p')[0].innerText;
    let student = students.getStudentByName(name)
    let img = studentElement.getElementsByTagName('img')[0].cloneNode();
    student.img = img;
    return student;
}

function openModalCard(event){
    let modal = document.getElementById('modalCard');
    modal.style.display = 'block';
    let studentElement = event.currentTarget;
    let student = parseStudent(studentElement);
    student.addToDOM();
}

function addEventsForStudents(){
    let studentsElements = document.getElementsByClassName('student');
    for (let student of studentsElements){
        student.addEventListener('click', openModalCard);
    }
}

addEventsForStudents();

let modalCard = document.getElementById("modalCard");

window.onclick = function(e){
    if (e.target == modalCard){
        modalCard.style.display = "none";
    }
}

