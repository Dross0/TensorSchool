import {Student, Teacher} from './personLib.js';
import University from './university.js';




// добавим в список школы студентов используйте те данные, которые у вас есть
// Vasia и пр. тут скорее для примера
// если методы называются по другому, поменяйте
// по желанию можно добавить больше
let nsu = new University("НГУ");
nsu.addStudent('Вася Иванов', 18, 1);
nsu.addTeacher('Михаил Петров', 45);
nsu.addStudent('Иван Иванов', 20);
nsu.removeStudent('Вася Иванов');
nsu.addStudent('Иван Иванов', 23, 3);
nsu.addStudent('Кирилл Синьков', 22, 2);
let student = nsu.getStudentsByName('Иван Иванов')[0];
nsu.removeStudent('Иван Иванов');



// отрисуем всех студентов в dom 
// если методы называются по другому, поменяйте
// точка монтирования document.body может быть изменена на любой другой элемент DOM
//school.appendToDom(document.body);

// в итоге в на странице должны получить список студентов и учителей
// папка js будет содержать несколько файлов, минимум 3, а лучше больше
nsu.appendToDOM();