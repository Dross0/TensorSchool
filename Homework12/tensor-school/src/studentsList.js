import React, {Component} from 'react';
import Person from './person.js';
import Student from './student.js';
import Popup from './popup.js';

class ResponeError extends Error{
    constructor(message){
        super(message);
        this.name = "ResponseError";
    }
}

export default class StudentList extends Component{
    constructor(props){
        super(props);
        this.state = {students: [], showPop: 0};
    }

    showPop(name){
        this.setState({showPop: name})
    }

    hidePop(){
        this.setState({showPop: 0});
    }
    
    addStudentByID(id){
        return this.props.dataSet.readByID(id).then(respone => {
             if (respone.ok){
                  return respone.json();
             }
             throw ResponeError(`Cant get student id = {${id}}`);
        }).then(d => {
             const st = new Student(d.title, null, d.study, d.course, d.photo);
             this.setState({students: this.state.students.concat([st])});
        });
    
    }
    
    getStudentListSize(dataSet){
        return dataSet.query('info', {method: 'GET'}).then(respone => {
             return respone.json();
        }).then(d => {
             return d.size;
        });
    }

    componentDidMount(){
        this.getStudentListSize(this.props.dataSet).then((size) => {
            for (let i = 1; i <= size; ++i){
                this.addStudentByID(i)
            }
        })
    }


    render(){
        return (<div className="students">
            {this.state.students.map(student => (
                [
                <Person person={student} click={() => {this.showPop(student.name)}}/>,
                <Popup 
                    show={this.state.showPop === student.name}
                    onHide={() => this.hidePop()}
                    title = {student.name}
                    content = {<center><img height="300" width="300" className="card__img" src={student.image || 'img/ui/default_pix.jpg'} /></center>}
                />
                ]
            ))}
            
        </div>);
    }
}