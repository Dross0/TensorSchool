import React, {Component} from 'react';

export default class Person extends Component{
    render(){
        return (<div className="person-card" onClick={() => this.props.click()}>
            <img className="person-card__image" src={this.props.person.image} alt={this.props.person.name}/>
            <p className="person-card__name" title={this.props.person.name}>{this.props.person.name}</p>
            <span className="person-card__info">{this.props.person.education}</span>
        </div>);
    }
}