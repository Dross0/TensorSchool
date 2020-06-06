import React, {Component} from 'react';
import PopupList from './popupList.js';


export default class Person extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<div className="person-card" onClick={() => this.handleClick()}>
            <img className="person-card__image" src={this.props.person.image} alt={this.props.person.name}/>
            <p className="person-card__name" title={this.props.person.name}>{this.props.person.name}</p>
            <span className="person-card__info">{this.props.person.education}</span>
        </div>);
    }

    handleClick = () => {
        if (!this.popup) {
            this.popup = new PopupList();
            this.popup.mount(document.body);
        }
        this.popup.open('student', {
           title: this.props.person.name,
           content: `<center><img height="300" width="300" class="card__img" src="${this.props.person.image || 'img/ui/default_pix.jpg'}" ></center>`
        });
    }
  
}