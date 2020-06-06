import React, {Component} from 'react';


export default class Popup extends Component{
    render() {
        return (
        <React.Fragment>
            {this.props.show && (
            <div className="wrapper">
                <div className="popup">
                    <div className="popup__header">
                        <p className="popup__title" title={this.props.title}>{this.props.title}</p>
                        <img className="popup__close-button" onClick={() => {this.props.onHide()}} title="Закрыть" alt="Закрыть" src="img/ui/close_x.png"/>
                    </div>
                    <div className="popup__content">{this.props.content}</div>
                </div>
            </div>)}
    </React.Fragment>);
    }
}