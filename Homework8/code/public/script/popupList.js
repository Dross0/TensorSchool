import Component from "./component.js";


class Popup extends Component{
    render({title, content}) {
        return `<div class="wrapper">
        <div class="popup">
            <div class="popup__header">
                <p class="popup__title" title="${title}">${title}</p>
                <img class="popup__close-button" title="Закрыть" alt="Закрыть" src="img/ui/close_x.png"/>
            </div>
            <div class="popup__content">${content}</div>
        </div>
    </div>`;
    }

    afterMount(){
        this.container.getElementsByClassName('popup__close-button')[0].addEventListener('click', () => {this.unmount()});
    }
}

export default class PopupList extends Component{
    constructor(options){
        super(options);
        this.list = {};
    }

    render(){
        return `<div class="popup-list"></div>`
    }

    open(id, options){
        if (!id){
            this.list[id].unmount();
        }
        let popup = new Popup(options);
        this.list[id] = popup;
        popup.mount(this.container);
    }
}