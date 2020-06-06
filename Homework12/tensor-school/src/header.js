import React, {Component} from 'react';


export default class Header extends Component{
    render(){
        return (<header>
            <div className='header'>
                <img src={this.props.logo} alt={this.props.title}/>
                <p className="header__title" title={this.props.title}>{this.props.title}</p>
                <span className="header__description" title={this.props.description}>{this.props.description}</span>
            </div>
        </header>)
    }
}
